#include "FirebirdArcadeLan.h"
#include "Firebird.h"
#include "FirebirdLanProbe.h"
#include "Common/UdpSocketBuilder.h"
#include "Dom/JsonObject.h"
#include "HAL/FileManager.h"
#include "HAL/PlatformMisc.h"
#include "HAL/PlatformProcess.h"
#include "HttpModule.h"
#include "Interfaces/IHttpRequest.h"
#include "Interfaces/IHttpResponse.h"
#include "Misc/CommandLine.h"
#include "Misc/FileHelper.h"
#include "Misc/Guid.h"
#include "Misc/Paths.h"
#include "Misc/SecureHash.h"
#include "Modules/ModuleManager.h"
#include "Serialization/JsonReader.h"
#include "Serialization/JsonSerializer.h"
#include "SocketSubsystem.h"
#include "Sockets.h"

// The plain-words messages, word for word as arcade-lan.contract.json says them.
const TCHAR* UFirebirdArcadeLan::MSG_NEWER_THERE = TEXT("The other computer has a newer copy: open the Family Arcade to update.");
const TCHAR* UFirebirdArcadeLan::MSG_NEWER_HERE = TEXT("This computer has a newer copy than the other one: ask them to open the Family Arcade to update.");
const TCHAR* UFirebirdArcadeLan::MSG_DIFFERENT = TEXT("The two computers have different copies of this game: open the Family Arcade on both to update.");
const TCHAR* UFirebirdArcadeLan::MSG_OTHER_GAME = TEXT("That room is for a different game.");
const TCHAR* UFirebirdArcadeLan::MSG_FULL = TEXT("That game is full.");
const TCHAR* UFirebirdArcadeLan::MSG_GONE = TEXT("That game is not there any more.");
const TCHAR* UFirebirdArcadeLan::MSG_NO_ANSWER = TEXT("The other computer did not answer. Check that it is on the same Wi-Fi or network.");
const TCHAR* UFirebirdArcadeLan::MSG_CLOSED = TEXT("The other computer stopped the game.");

namespace
{
    // arcade_lan.gd's timings and limits
    constexpr int64 BEACON_INTERVAL_MS = 2000;
    constexpr int64 ROOM_TTL_MS = 5000;
    constexpr int64 GUEST_PING_MS = 2000;
    constexpr int64 HELLO_RETRY_MS = 500;
    constexpr int64 HELLO_GIVE_UP_MS = 4000;
    constexpr int64 PEER_TTL_MS = 6000;
    constexpr int64 WATCH_IDLE_MS = 10000;
    constexpr int64 RELAY_POLL_MS = 1000;
    constexpr int64 ENDED_KEEP_MS = 30000;
    constexpr int32 MAX_PACKET = 1200;
    constexpr int32 MAX_NAME = 16;
    const FString MAGIC = TEXT("ARC1 ");
    const TCHAR* LEVELS[] = { TEXT("scoreboard"), TEXT("host-join"), TEXT("full") };

    bool IsLevel(const FString& L) { for (const TCHAR* X : LEVELS) if (L == X) return true; return false; }

    // Printable characters only, trimmed, capped (arcade_lan.gd _clean)
    FString Clean(const FString& Value, int32 Limit)
    {
        FString Out;
        for (TCHAR C : Value) if (C >= 32 && C != 127) Out.AppendChar(C);
        Out.TrimStartAndEndInline();
        return Out.Left(Limit);
    }
    // a-z 0-9 and '-', lowercase, 40 characters (arcade_lan.gd _slug)
    FString Slug(const FString& Value)
    {
        FString Out;
        for (TCHAR C : Value.ToLower()) if ((C >= 'a' && C <= 'z') || (C >= '0' && C <= '9') || C == '-') Out.AppendChar(C);
        return Out.Left(40);
    }
    bool IsNum(const TSharedPtr<FJsonObject>& O, const TCHAR* Key)
    {
        const TSharedPtr<FJsonValue> V = O->TryGetField(Key);
        return V.IsValid() && V->Type == EJson::Number;
    }
    // arcade_lan.gd _int: a number truncated, anything else the fallback
    int64 IntOr(const TSharedPtr<FJsonObject>& O, const TCHAR* Key, int64 Fallback)
    {
        const TSharedPtr<FJsonValue> V = O->TryGetField(Key);
        if (!V.IsValid() || V->Type != EJson::Number) return Fallback;
        const double D = V->AsNumber();
        return FMath::IsFinite(D) ? (int64)D : Fallback;
    }
    // arcade_lan.gd str(b.get(key, "")): strings as they are, numbers and bools as text
    FString StrOf(const TSharedPtr<FJsonObject>& O, const TCHAR* Key)
    {
        const TSharedPtr<FJsonValue> V = O->TryGetField(Key);
        if (!V.IsValid()) return FString();
        switch (V->Type)
        {
        case EJson::String: return V->AsString();
        case EJson::Number: { const double D = V->AsNumber(); return D == FMath::FloorToDouble(D) ? FString::Printf(TEXT("%lld"), (int64)D) : FString::SanitizeFloat(D); }
        case EJson::Boolean: return V->AsBool() ? TEXT("true") : TEXT("false");
        default: return FString();
        }
    }

    // A JSON object written field by field, in the order arcade_lan.gd builds its dictionaries.
    struct FJ
    {
        FString S = TEXT("{");
        bool bFirst = true;
        FJ& Key(const TCHAR* K) { if (!bFirst) S += TEXT(","); bFirst = false; S += TEXT("\""); S += K; S += TEXT("\":"); return *this; }
        static FString Quote(const FString& V)
        {
            FString O = TEXT("\"");
            for (TCHAR C : V)
            {
                switch (C)
                {
                case '"': O += TEXT("\\\""); break;
                case '\\': O += TEXT("\\\\"); break;
                case '\n': O += TEXT("\\n"); break;
                case '\r': O += TEXT("\\r"); break;
                case '\t': O += TEXT("\\t"); break;
                default:
                    if (C < 32) O += FString::Printf(TEXT("\\u%04x"), (int32)C);
                    else O.AppendChar(C);
                }
            }
            return O + TEXT("\"");
        }
        FJ& Str(const TCHAR* K, const FString& V) { Key(K); S += Quote(V); return *this; }
        FJ& Int(const TCHAR* K, int64 V) { Key(K); S += FString::Printf(TEXT("%lld"), V); return *this; }
        FJ& Bool(const TCHAR* K, bool V) { Key(K); S += V ? TEXT("true") : TEXT("false"); return *this; }
        FJ& Raw(const TCHAR* K, const FString& V) { Key(K); S += V; return *this; }
        FString Done() const { return S + TEXT("}"); }
    };

    ISocketSubsystem* Sockets() { return ISocketSubsystem::Get(PLATFORM_SOCKETSUBSYSTEM); }

    FString Hex8() { const FGuid G = FGuid::NewGuid(); return FString::Printf(TEXT("%08x"), G.A ^ G.D); }
}

// ------------------------------------------------------------------ life

int64 UFirebirdArcadeLan::NowMs()
{
    return (int64)(FPlatformTime::Seconds() * 1000.0);
}

void UFirebirdArcadeLan::Initialize(FSubsystemCollectionBase& Collection)
{
    Super::Initialize(Collection);
    Alive = MakeShared<bool>(true);
    PlayerName = Clean(FPlatformMisc::GetEnvironmentVariable(TEXT("COMPUTERNAME")), MAX_NAME);
    if (PlayerName.IsEmpty()) PlayerName = TEXT("A player");
    RelayUrl = FPlatformMisc::GetEnvironmentVariable(TEXT("ARCADE_RELAY_URL"));
    // tests: another beacon port, extra call-out targets (127.0.0.1)
    const TCHAR* Cmd = FCommandLine::Get();
    FParse::Value(Cmd, TEXT("FBLanBeaconPort="), BeaconPort);
    FString Targets;
    if (FParse::Value(Cmd, TEXT("FBLanTarget="), Targets)) Targets.ParseIntoArray(ExtraTargets, TEXT(","), true);
    TickHandle = FTSTicker::GetCoreTicker().AddTicker(FTickerDelegate::CreateUObject(this, &UFirebirdArcadeLan::Tick));
    FFirebirdLanProbe::StartIfAsked(this);
}

void UFirebirdArcadeLan::Deinitialize()
{
    FFirebirdLanProbe::Stop();
    TArray<FString> Keys;
    Hosted.GetKeys(Keys);
    for (const FString& R : Keys) CloseRoom(R);
    Guests.GetKeys(Keys);
    for (const FString& R : Keys) LeaveRoom(R);
    StopWatch();
    bWatchAlways = false;
    FTSTicker::GetCoreTicker().RemoveTicker(TickHandle);
    Alive.Reset();
    Super::Deinitialize();
}

bool UFirebirdArcadeLan::Tick(float DeltaTime)
{
    Pump();
    FFirebirdLanProbe::Tick(this);
    return true;
}

void UFirebirdArcadeLan::Configure(const FString& Game, const FString& Build, int64 Order, const FString& DisplayName)
{
    GameIdValue = Slug(Game);
    BuildValue = Clean(Build, 64);
    BuildOrder = FMath::Max<int64>(Order, 0);
    if (!DisplayName.TrimStartAndEnd().IsEmpty()) PlayerName = Clean(DisplayName, MAX_NAME);
}

FString UFirebirdArcadeLan::PendingJoin() const
{
    return FPlatformMisc::GetEnvironmentVariable(TEXT("ARCADE_JOIN"));
}

bool UFirebirdArcadeLan::IsListening() const
{
    return Listener != nullptr || (bRelayMode && !RelayUrl.IsEmpty());
}

void UFirebirdArcadeLan::Pump()
{
    // refusals that needed no network are answered on the next step, like Godot's call_deferred
    TArray<TPair<FString, FString>> Deferred = MoveTemp(DeferredRefusals);
    DeferredRefusals.Reset();
    for (const TPair<FString, FString>& D : Deferred) OnJoinRefused.Broadcast(D.Key, D.Value);
    const int64 Now = NowMs();
    const double T0 = FPlatformTime::Seconds();
    PumpHosted(Now);
    const double T1 = FPlatformTime::Seconds();
    PumpGuests(Now);
    const double T2 = FPlatformTime::Seconds();
    PumpWatch(Now);
    const double T3 = FPlatformTime::Seconds();
    if (T3 - T0 > 0.02) UE_LOG(LogFirebird, Warning, TEXT("FB_LAN slow pump: hosted %.0f ms, guests %.0f ms, watch %.0f ms"), (T1 - T0) * 1000, (T2 - T1) * 1000, (T3 - T2) * 1000);
}

// ------------------------------------------------------------------ rules everyone shares

FString UFirebirdArcadeLan::CheckBuild(const FString& MyBuild, int64 MyOrder, const FString& TheirBuild, int64 TheirOrder)
{
    if (MyBuild == TheirBuild) return FString();
    if (MyOrder > 0 && TheirOrder > 0)
    {
        if (TheirOrder > MyOrder) return MSG_NEWER_THERE;
        if (TheirOrder < MyOrder) return MSG_NEWER_HERE;
    }
    return MSG_DIFFERENT;
}

bool UFirebirdArcadeLan::IsHomeAddress(const FString& Raw)
{
    FString Address = Raw.TrimStartAndEnd().ToLower();
    if (Address.StartsWith(TEXT("::ffff:"))) Address = Address.Mid(7);
    if (Address == TEXT("::1")) return true;
    TArray<FString> Parts;
    Address.ParseIntoArray(Parts, TEXT("."), false);
    if (Parts.Num() != 4) return false;
    int32 N[4];
    for (int32 i = 0; i < 4; ++i)
    {
        const FString& P = Parts[i];
        if (P.IsEmpty() || P.Len() > 3) return false;
        for (TCHAR C : P) if (C < '0' || C > '9') return false;
        N[i] = FCString::Atoi(*P);
        if (N[i] > 255) return false;
    }
    const int32 A = N[0], B = N[1];
    return A == 10 || A == 127 || (A == 172 && B >= 16 && B <= 31) || (A == 192 && B == 168)
        || (A == 169 && B == 254) || (A == 100 && B >= 64 && B <= 127);
}

FString UFirebirdArcadeLan::ComputeBuildId(int64* OutOrder)
{
    FSHA1 Sha;
    FDateTime Newest(0);
    bool bAny = false;
    auto Stamp = [&Newest](const FString& Path)
    {
        const FDateTime T = IFileManager::Get().GetTimeStamp(*Path);
        if (T > Newest) Newest = T;
    };
    auto HashFile = [&Sha](const FString& Path, bool bText) -> bool
    {
        TArray<uint8> Bytes;
        if (!FFileHelper::LoadFileToArray(Bytes, *Path)) return false;
        if (bText) Bytes.RemoveAll([](uint8 B) { return B == '\r'; });   // git writes CRLF on one computer, LF on another
        Sha.Update(Bytes.GetData(), Bytes.Num());
        return true;
    };
    // 1. a BUILD-INFO.txt shipped beside the game (the arcade's packs carry one)
    const FString ExeDir = FPaths::GetPath(FPlatformProcess::ExecutablePath());
    for (const FString& Info : { FPaths::Combine(FPaths::RootDir(), TEXT("BUILD-INFO.txt")), FPaths::Combine(FPaths::ProjectDir(), TEXT("BUILD-INFO.txt")), FPaths::Combine(ExeDir, TEXT("BUILD-INFO.txt")) })
    {
        if (IFileManager::Get().FileExists(*Info) && HashFile(Info, true)) { Stamp(Info); bAny = true; break; }
    }
    // 2. the packaged content: every container's name and size, and the full tables of contents
    if (!bAny)
    {
        const FString Paks = FPaths::Combine(FPaths::ProjectContentDir(), TEXT("Paks"));
        TArray<FString> Files;
        for (const TCHAR* Ext : { TEXT("*.pak"), TEXT("*.utoc"), TEXT("*.ucas") })
        {
            TArray<FString> Found;
            IFileManager::Get().FindFiles(Found, *FPaths::Combine(Paks, Ext), true, false);
            Files.Append(Found);
        }
        Files.Sort();
        for (const FString& Name : Files)
        {
            const FString Path = FPaths::Combine(Paks, Name);
            const FString Line = FString::Printf(TEXT("%s:%lld\n"), *Name, IFileManager::Get().FileSize(*Path));
            const FTCHARToUTF8 Utf(*Line);
            Sha.Update((const uint8*)Utf.Get(), Utf.Length());
            if (Name.EndsWith(TEXT(".utoc"))) HashFile(Path, false);
            Stamp(Path);
            bAny = true;
        }
    }
    // 3. run from source: the compiled game module
    if (!bAny)
    {
        const FString Module = FModuleManager::Get().GetModuleFilename(TEXT("Firebird"));
        if (!Module.IsEmpty() && HashFile(Module, false)) { Stamp(Module); bAny = true; }
    }
    Sha.Final();
    uint8 Digest[20];
    Sha.GetHash(Digest);
    if (OutOrder) *OutOrder = bAny && Newest.GetTicks() > 0 ? FCString::Atoi64(*Newest.ToString(TEXT("%Y%m%d%H%M%S"))) : 0;
    return bAny ? TEXT("fb-") + BytesToHex(Digest, 6).ToLower() : TEXT("fb-unknown");
}

// ------------------------------------------------------------------ packets

FSocket* UFirebirdArcadeLan::OpenSocket(int32 Port, bool bBroadcast)
{
    ISocketSubsystem* SS = Sockets();
    if (!SS) return nullptr;
    // Dual-stack, exactly like Godot's PacketPeerUDP bound to "*": [::]:port, IPv4 mapped. On Windows an IPv4
    // socket on 0.0.0.0:port and a dual-stack one on [::]:port can BOTH bind the same port, so a plain IPv4
    // socket would share a room port with a Godot joiner (and eat its welcome), or listen beside the Family
    // Arcade on the beacon port and steal its beacons. Same family as Godot: the second bind fails, as the
    // contract needs. IPv4 only if this computer has no IPv6 sockets at all.
    FSocket* S = SS->CreateSocket(NAME_DGram, TEXT("FirebirdArcadeLan"), FNetworkProtocolTypes::IPv6);   // Windows makes it dual-stack
    FName Family = FNetworkProtocolTypes::IPv6;
    if (!S)
    {
        S = SS->CreateSocket(NAME_DGram, TEXT("FirebirdArcadeLan"), FNetworkProtocolTypes::IPv4);
        Family = FNetworkProtocolTypes::IPv4;
    }
    if (!S) return nullptr;
    bV6 = Family == FNetworkProtocolTypes::IPv6;
    S->SetReuseAddr(false);   // one listener per port, like Godot: a second bind must fail
    S->SetNonBlocking(true);
    if (bBroadcast) S->SetBroadcast(true);
    TSharedRef<FInternetAddr> A = SS->CreateInternetAddr(Family);
    A->SetAnyAddress();
    A->SetPort(Port);
    if (!S->Bind(*A))
    {
        SS->DestroySocket(S);
        return nullptr;
    }
    return S;
}

FSocket* UFirebirdArcadeLan::OpenControl(int32& OutPort)
{
    for (int32 i = 1; i <= CONTROL_PORTS; ++i)
    {
        if (FSocket* S = OpenSocket(BeaconPort + i, true)) { OutPort = BeaconPort + i; return S; }
    }
    return nullptr;
}

void UFirebirdArcadeLan::CloseSocket(FSocket*& Sock)
{
    if (!Sock) return;
    Sock->Close();
    if (ISocketSubsystem* SS = Sockets()) SS->DestroySocket(Sock);
    Sock = nullptr;
}

void UFirebirdArcadeLan::Send(FSocket* Sock, const FString& Address, int32 Port, const FString& JsonBody)
{
    if (!Sock) return;
    // every packet carries "v": 1 (arcade_lan.gd _send)
    const FString Body = JsonBody.LeftChop(1) + (JsonBody.Len() > 2 ? TEXT(",\"v\":1}") : TEXT("\"v\":1}"));
    const FTCHARToUTF8 Utf(*(MAGIC + Body));
    if (Utf.Length() > MAX_PACKET) return;
    ISocketSubsystem* SS = Sockets();
    TSharedRef<FInternetAddr> To = SS->CreateInternetAddr(bV6 ? FNetworkProtocolTypes::IPv6 : FNetworkProtocolTypes::IPv4);
    bool bValid = false;
    // a dual-stack socket reaches an IPv4 computer through its mapped address
    To->SetIp(*((bV6 && !Address.Contains(TEXT(":"))) ? TEXT("::ffff:") + Address : Address), bValid);
    if (!bValid) return;
    To->SetPort(Port);
    int32 Sent = 0;
    Sock->SendTo((const uint8*)Utf.Get(), Utf.Length(), Sent, *To);
}

TArray<UFirebirdArcadeLan::FPacket> UFirebirdArcadeLan::ReadPackets(FSocket* Sock)
{
    TArray<FPacket> Out;
    if (!Sock) return Out;
    ISocketSubsystem* SS = Sockets();
    TSharedRef<FInternetAddr> From = SS->CreateInternetAddr(bV6 ? FNetworkProtocolTypes::IPv6 : FNetworkProtocolTypes::IPv4);
    uint8 Buf[2048];
    for (int32 Budget = 32; Budget > 0; --Budget)
    {
        int32 Read = 0;
        if (!Sock->RecvFrom(Buf, sizeof(Buf), Read, *From))
        {
            // nothing waiting: done. Any other error (an oversize datagram, a reset): skip it, keep reading.
            if (SS->GetLastErrorCode() == SE_EWOULDBLOCK) break;
            continue;
        }
        if (Read <= 0 || Read > MAX_PACKET) continue;
        FString Address = From->ToString(false);
        if (Address.StartsWith(TEXT("::ffff:"))) Address = Address.Mid(7);
        if (!IsHomeAddress(Address)) continue;   // home network only, before anything looks inside
        const FUTF8ToTCHAR Conv((const ANSICHAR*)Buf, Read);
        const FString Text(Conv.Length(), Conv.Get());
        if (!Text.StartsWith(MAGIC, ESearchCase::CaseSensitive)) continue;
        TSharedPtr<FJsonObject> Body;
        const TSharedRef<TJsonReader<>> Reader = TJsonReaderFactory<>::Create(Text.Mid(MAGIC.Len()));
        if (!FJsonSerializer::Deserialize(Reader, Body) || !Body.IsValid()) continue;
        if (IntOr(Body, TEXT("v"), 0) != 1) continue;
        FPacket P;
        P.Body = Body;
        P.Address = Address;
        P.Port = From->GetPort();
        Out.Add(MoveTemp(P));
    }
    return Out;
}

TArray<FString> UFirebirdArcadeLan::BroadcastTargets() const
{
    // the all-ones broadcast (Windows sends it on one adapter only), the /24 broadcast of every home address
    // this computer has, and the extra targets (tests)
    TArray<FString> Targets = { TEXT("255.255.255.255") };
    TArray<TSharedPtr<FInternetAddr>> Locals;
    if (ISocketSubsystem* SS = Sockets()) SS->GetLocalAdapterAddresses(Locals);
    for (const TSharedPtr<FInternetAddr>& A : Locals)
    {
        if (!A.IsValid()) continue;
        const FString Text = A->ToString(false);
        if (Text.Contains(TEXT(":")) || Text.StartsWith(TEXT("127.")) || Text.StartsWith(TEXT("100.")) || !IsHomeAddress(Text)) continue;
        TArray<FString> P;
        Text.ParseIntoArray(P, TEXT("."));
        if (P.Num() != 4) continue;
        Targets.AddUnique(FString::Printf(TEXT("%s.%s.%s.255"), *P[0], *P[1], *P[2]));
    }
    for (const FString& X : ExtraTargets) Targets.AddUnique(X);
    return Targets;
}

// ------------------------------------------------------------------ the host side

FString UFirebirdArcadeLan::AnnounceRoom(int32 GamePort, int32 Players, int32 MaxPlayers)
{
    LastError.Reset();
    if (GameIdValue.IsEmpty() || BuildValue.IsEmpty())
    {
        LastError = TEXT("announce_room needs a game id and a build id (call configure first).");
        return FString();
    }
    if (GamePort < 1024 || GamePort > 65535)
    {
        LastError = TEXT("A host-join or full room needs the game's own port (1024 to 65535).");
        return FString();
    }
    int32 Ctl = 0;
    FSocket* Sock = OpenControl(Ctl);
    if (!Sock)
    {
        LastError = FString::Printf(TEXT("No free room port on this computer (UDP %d to %d)."), BeaconPort + 1, BeaconPort + CONTROL_PORTS);
        return FString();
    }
    const int64 Now = NowMs();
    FHosted H;
    H.Room = FString::Printf(TEXT("%s%s"), *Hex8(), *Hex8());
    H.Game = GameIdValue;
    H.Build = BuildValue;
    H.Order = BuildOrder;
    H.Host = PlayerName.IsEmpty() ? TEXT("A player") : PlayerName;
    H.Max = FMath::Clamp(MaxPlayers, 1, MAX_PLAYERS_LIMIT);
    H.Players = FMath::Clamp(Players, 0, H.Max);
    H.Port = GamePort;
    H.Ctl = Ctl;
    H.Level = TEXT("host-join");
    H.By = TEXT("high");
    H.Sock = Sock;
    H.NextBeacon = Now + BEACON_INTERVAL_MS;
    H.NextBoard = Now + BEACON_INTERVAL_MS;
    Hosted.Add(H.Room, H);
    Beacon(Hosted[H.Room], false);
    UE_LOG(LogFirebird, Display, TEXT("FB_LAN room %s announced (game %s, build %s, port %d, ctl %d)"), *H.Room, *H.Game, *H.Build, GamePort, Ctl);
    return H.Room;
}

void UFirebirdArcadeLan::UpdatePlayers(const FString& Room, int32 Players)
{
    FHosted* H = Hosted.Find(Room);
    if (!H) { LastError = FString::Printf(TEXT("There is no room %s to change."), *Room); return; }
    H->Players = FMath::Clamp(Players, 0, H->Max);
    // a change of players-now beacons at once
    H->NextBeacon = NowMs() + BEACON_INTERVAL_MS;
    Beacon(*H, false);
}

void UFirebirdArcadeLan::CloseRoom(const FString& Room)
{
    FHosted* H = Hosted.Find(Room);
    if (!H) return;
    for (int32 i = 0; i < 3; ++i) Beacon(*H, true);
    for (const TPair<FString, FPeer>& P : H->Peers) Send(H->Sock, P.Value.Addr, P.Value.Port, FJ().Str(TEXT("t"), TEXT("bye")).Str(TEXT("room"), Room).Done());
    CloseSocket(H->Sock);
    Hosted.Remove(Room);
}

void UFirebirdArcadeLan::Beacon(const FHosted& H, bool bClosed)
{
    FJ J;
    J.Str(TEXT("t"), TEXT("room")).Str(TEXT("room"), H.Room).Str(TEXT("game"), H.Game).Str(TEXT("build"), H.Build).Int(TEXT("order"), H.Order)
        .Str(TEXT("host"), H.Host).Int(TEXT("players"), H.Players).Int(TEXT("max"), H.Max).Int(TEXT("port"), H.Port).Int(TEXT("ctl"), H.Ctl)
        .Str(TEXT("level"), H.Level).Str(TEXT("by"), H.By);
    if (bClosed) J.Bool(TEXT("closed"), true);
    const FString Body = J.Done();
    for (const FString& Target : BroadcastTargets()) Send(H.Sock, Target, BeaconPort, Body);
}

FString UFirebirdArcadeLan::BoardBody(const FHosted& H, const TCHAR* Kind) const
{
    // host-join rooms carry no scores: the board is always empty
    return FJ().Str(TEXT("t"), Kind).Str(TEXT("room"), H.Room).Int(TEXT("rev"), H.Rev).Int(TEXT("players"), H.Players).Int(TEXT("max"), H.Max)
        .Int(TEXT("port"), H.Port).Str(TEXT("level"), H.Level).Raw(TEXT("rows"), TEXT("[]")).Done();
}

void UFirebirdArcadeLan::PumpHosted(int64 Now)
{
    TArray<FString> Keys;
    Hosted.GetKeys(Keys);
    for (const FString& Room : Keys)
    {
        if (!Hosted.Contains(Room)) continue;
        for (const FPacket& Msg : ReadPackets(Hosted[Room].Sock))
        {
            FHosted* H = Hosted.Find(Room);
            if (!H) break;
            HostHandle(*H, Msg, Now);
        }
        FHosted* H = Hosted.Find(Room);
        if (!H) continue;
        for (auto It = H->Peers.CreateIterator(); It; ++It)
        {
            if (Now - It->Value.Heard > PEER_TTL_MS) { It.RemoveCurrent(); H->NextBeacon = Now; }
        }
        if (Now >= H->NextBeacon)
        {
            H->NextBeacon = Now + BEACON_INTERVAL_MS;
            Beacon(*H, false);
        }
        if (Now >= H->NextBoard)
        {
            H->NextBoard = Now + BEACON_INTERVAL_MS;
            const FString Body = BoardBody(*H, TEXT("board"));
            for (const TPair<FString, FPeer>& P : H->Peers) Send(H->Sock, P.Value.Addr, P.Value.Port, Body);
        }
    }
}

void UFirebirdArcadeLan::HostHandle(FHosted& H, const FPacket& Msg, int64 Now)
{
    const TSharedPtr<FJsonObject>& B = Msg.Body;
    if (StrOf(B, TEXT("room")) != H.Room) return;
    const FString Kind = StrOf(B, TEXT("t"));
    const FString Pid = Clean(StrOf(B, TEXT("pid")), 16);
    if (Kind == TEXT("hello"))
    {
        // "host" is the host's own row on the board; no guest may be it
        if (Pid.IsEmpty() || Pid == TEXT("host")) return;
        FString Who = Clean(StrOf(B, TEXT("who")), MAX_NAME);
        if (Who.IsEmpty()) Who = TEXT("A player");
        if (StrOf(B, TEXT("game")) != H.Game) { Refuse(H, Msg, TEXT("game"), MSG_OTHER_GAME); return; }
        const FString Check = CheckBuild(Clean(StrOf(B, TEXT("build")), 64), FMath::Max<int64>(IntOr(B, TEXT("order"), 0), 0), H.Build, H.Order);
        if (!Check.IsEmpty()) { Refuse(H, Msg, TEXT("build"), Check); return; }
        const bool bNew = !H.Peers.Contains(Pid);
        if (bNew && H.Players >= H.Max) { Refuse(H, Msg, TEXT("full"), MSG_FULL); return; }
        FPeer& P = H.Peers.FindOrAdd(Pid);
        P.Who = Who; P.Addr = Msg.Address; P.Port = Msg.Port; P.Heard = Now;
        Send(H.Sock, Msg.Address, Msg.Port, BoardBody(H, TEXT("welcome")));
        if (bNew)
        {
            H.NextBeacon = Now;
            H.NextBoard = Now;
            UE_LOG(LogFirebird, Display, TEXT("FB_LAN %s joined room %s from %s"), *Who, *H.Room, *Msg.Address);
            OnGuestJoined.Broadcast(H.Room, Who);
        }
        return;
    }
    FPeer* Peer = H.Peers.Find(Pid);
    // replies always go to where the hello came from; a stray packet carrying the pid cannot redirect them
    if (!Peer || Peer->Addr != Msg.Address) return;
    Peer->Heard = Now;
    if (Kind == TEXT("ping") || Kind == TEXT("score"))
    {
        Send(H.Sock, Peer->Addr, Peer->Port, BoardBody(H, TEXT("board")));
    }
    else if (Kind == TEXT("bye"))
    {
        H.Peers.Remove(Pid);
        H.NextBeacon = Now;
        H.NextBoard = Now;
    }
}

void UFirebirdArcadeLan::Refuse(FHosted& H, const FPacket& Msg, const TCHAR* Why, const FString& Message)
{
    Send(H.Sock, Msg.Address, Msg.Port, FJ().Str(TEXT("t"), TEXT("refuse")).Str(TEXT("room"), H.Room).Str(TEXT("why"), Why).Str(TEXT("message"), Message).Done());
}

// ------------------------------------------------------------------ the joiner side

void UFirebirdArcadeLan::JoinRoom(const FString& Room)
{
    const int64 Now = NowMs();
    if (const FGuest* Existing = Guests.Find(Room))
    {
        if (Existing->Status == TEXT("joining") || Existing->Status == TEXT("joined")) return;
        FGuest Old = *Existing;
        CloseSocket(Old.Sock);
        Guests.Remove(Room);
    }
    Refused.Remove(Room);
    const FString Who = PlayerName.IsEmpty() ? TEXT("A player") : PlayerName;
    const FFirebirdLanRoom* R = Heard.Find(Room);
    if (!R) { RefuseNow(Room, MSG_GONE); return; }
    if (!GameIdValue.IsEmpty() && GameIdValue != R->Game) { RefuseNow(Room, MSG_OTHER_GAME); return; }
    const FString Check = CheckBuild(BuildValue, BuildOrder, R->Build, R->Order);
    if (!Check.IsEmpty()) { RefuseNow(Room, Check); return; }
    int32 Ctl = 0;
    FSocket* Sock = OpenControl(Ctl);
    if (!Sock) { RefuseNow(Room, MSG_NO_ANSWER); return; }
    FGuest G;
    G.Room = Room; G.Sock = Sock; G.Address = R->Address; G.Ctl = R->Ctl; G.Port = R->Port; G.Level = R->Level;
    G.Game = R->Game; G.Host = R->Host; G.By = R->By; G.Build = BuildValue; G.Order = BuildOrder; G.Who = Who;
    G.GameId = GameIdValue; G.Pid = Hex8(); G.Status = TEXT("joining"); G.Started = Now; G.NextHello = Now + HELLO_RETRY_MS;
    G.NextPing = Now; G.LastHeard = Now; G.Players = R->Players; G.Max = R->MaxPlayers;
    Guests.Add(Room, G);
    SendHello(Guests[Room]);
}

void UFirebirdArcadeLan::LeaveRoom(const FString& Room)
{
    FGuest* G = Guests.Find(Room);
    if (!G) return;
    if (G->Status == TEXT("joined")) Send(G->Sock, G->Address, G->Ctl, FJ().Str(TEXT("t"), TEXT("bye")).Str(TEXT("room"), Room).Str(TEXT("pid"), G->Pid).Done());
    CloseSocket(G->Sock);
    Guests.Remove(Room);
}

void UFirebirdArcadeLan::SendHello(FGuest& G)
{
    Send(G.Sock, G.Address, G.Ctl, FJ().Str(TEXT("t"), TEXT("hello")).Str(TEXT("room"), G.Room).Str(TEXT("pid"), G.Pid).Str(TEXT("who"), G.Who)
        .Str(TEXT("game"), G.GameId).Str(TEXT("build"), G.Build).Int(TEXT("order"), G.Order).Done());
}

void UFirebirdArcadeLan::RefuseNow(const FString& Room, const FString& Message)
{
    Refused.Add(Room, NowMs());
    DeferredRefusals.Add(TPair<FString, FString>(Room, Message));
}

void UFirebirdArcadeLan::EndGuest(FGuest& G, const FString& Status, const FString& Message, int64 Now)
{
    G.Status = Status;
    G.Message = Message;
    G.Ended = Now;
}

void UFirebirdArcadeLan::PumpGuests(int64 Now)
{
    for (auto It = Refused.CreateIterator(); It; ++It) if (Now - It->Value > ENDED_KEEP_MS) It.RemoveCurrent();
    TArray<FString> Keys;
    Guests.GetKeys(Keys);
    TArray<TFunction<void()>> Events;   // delegates fire after the loop, so a handler may join or leave freely
    for (const FString& Room : Keys)
    {
        FGuest* G = Guests.Find(Room);
        if (!G) continue;
        if (G->Status == TEXT("refused") || G->Status == TEXT("closed"))
        {
            if (Now - G->Ended > ENDED_KEEP_MS) LeaveRoom(Room);
            continue;
        }
        for (const FPacket& Msg : ReadPackets(G->Sock))
        {
            const FString Before = G->Status;
            GuestHandle(*G, Msg, Now);
            if (Before == TEXT("joining") && G->Status == TEXT("joined"))
            {
                const FString A = G->Address; const int32 P = G->Port;
                Events.Add([this, Room, A, P]() { OnJoined.Broadcast(Room, A, P); });
            }
            else if (Before == TEXT("joining") && G->Status == TEXT("refused"))
            {
                const FString M = G->Message;
                Events.Add([this, Room, M]() { OnJoinRefused.Broadcast(Room, M); });
            }
            else if (Before == TEXT("joined") && G->Status == TEXT("closed"))
            {
                const FString M = G->Message;
                Events.Add([this, Room, M]() { OnRoomClosed.Broadcast(Room, M); });
            }
        }
        if (G->Status == TEXT("joining"))
        {
            if (Now - G->Started > HELLO_GIVE_UP_MS)
            {
                EndGuest(*G, TEXT("refused"), MSG_NO_ANSWER, Now);
                Events.Add([this, Room]() { OnJoinRefused.Broadcast(Room, MSG_NO_ANSWER); });
            }
            else if (Now >= G->NextHello)
            {
                G->NextHello = Now + HELLO_RETRY_MS;
                SendHello(*G);
            }
        }
        else if (G->Status == TEXT("joined"))
        {
            if (Now - G->LastHeard > ROOM_TTL_MS)
            {
                EndGuest(*G, TEXT("closed"), MSG_CLOSED, Now);
                Events.Add([this, Room]() { OnRoomClosed.Broadcast(Room, MSG_CLOSED); });
                continue;
            }
            if (Now >= G->NextPing)
            {
                G->NextPing = Now + GUEST_PING_MS;
                Send(G->Sock, G->Address, G->Ctl, FJ().Str(TEXT("t"), TEXT("ping")).Str(TEXT("room"), Room).Str(TEXT("pid"), G->Pid).Done());
            }
        }
    }
    for (TFunction<void()>& E : Events) E();
}

void UFirebirdArcadeLan::GuestHandle(FGuest& G, const FPacket& Msg, int64 Now)
{
    const TSharedPtr<FJsonObject>& B = Msg.Body;
    if (Msg.Address != G.Address || StrOf(B, TEXT("room")) != G.Room) return;
    const FString Kind = StrOf(B, TEXT("t"));
    if (Kind == TEXT("welcome"))
    {
        if (G.Status != TEXT("joining")) return;
        G.Status = TEXT("joined");
        G.LastHeard = Now;
        G.Port = (int32)FMath::Clamp<int64>(IntOr(B, TEXT("port"), G.Port), 1024, 65535);
        G.Players = (int32)FMath::Clamp<int64>(IntOr(B, TEXT("players"), G.Players), 0, 99);
        G.Max = (int32)FMath::Clamp<int64>(IntOr(B, TEXT("max"), G.Max), 1, 99);
        UE_LOG(LogFirebird, Display, TEXT("FB_LAN joined room %s: game at %s:%d"), *G.Room, *G.Address, G.Port);
    }
    else if (Kind == TEXT("refuse"))
    {
        if (G.Status != TEXT("joining")) return;
        const FString Why = StrOf(B, TEXT("why")), Said = StrOf(B, TEXT("message"));
        FString Message = MSG_DIFFERENT;
        if (Why == TEXT("full")) Message = MSG_FULL;
        else if (Why == TEXT("game")) Message = MSG_OTHER_GAME;
        else if (Why == TEXT("build") && (Said == MSG_NEWER_THERE || Said == MSG_NEWER_HERE || Said == MSG_DIFFERENT)) Message = Said;
        EndGuest(G, TEXT("refused"), Message, Now);
    }
    else if (Kind == TEXT("board"))
    {
        if (G.Status != TEXT("joined")) return;
        const int64 Rev = IntOr(B, TEXT("rev"), 0);
        if (Rev < G.Rev) return;
        G.Rev = (int32)Rev;
        G.LastHeard = Now;
        G.Players = (int32)FMath::Clamp<int64>(IntOr(B, TEXT("players"), G.Players), 0, 99);
        G.Max = (int32)FMath::Clamp<int64>(IntOr(B, TEXT("max"), G.Max), 1, 99);
    }
    else if (Kind == TEXT("bye"))
    {
        if (G.Status == TEXT("joined")) EndGuest(G, TEXT("closed"), MSG_CLOSED, Now);
    }
}

// ------------------------------------------------------------------ hearing the rooms

void UFirebirdArcadeLan::TouchWatch() const
{
    WatchUntil = NowMs() + WATCH_IDLE_MS;
}

TArray<FFirebirdLanRoom> UFirebirdArcadeLan::ListRooms(const FString& Game) const
{
    TouchWatch();
    const FString Want = Slug(Game);
    TArray<FFirebirdLanRoom> List;
    for (const TPair<FString, FFirebirdLanRoom>& E : Heard)
    {
        if (!Want.IsEmpty() && E.Value.Game != Want) continue;
        FFirebirdLanRoom R = E.Value;
        R.BuildMessage = (!GameIdValue.IsEmpty() && R.Game == GameIdValue) ? CheckBuild(BuildValue, BuildOrder, R.Build, R.Order) : FString();
        R.bSameBuild = R.BuildMessage.IsEmpty();
        R.bMine = Hosted.Contains(R.Room);
        List.Add(R);
    }
    List.Sort([](const FFirebirdLanRoom& A, const FFirebirdLanRoom& B) { return A.HeardMs == B.HeardMs ? A.Room < B.Room : A.HeardMs > B.HeardMs; });
    return List;
}

void UFirebirdArcadeLan::PumpWatch(int64 Now)
{
    if (!(bWatchAlways || Now < WatchUntil))
    {
        if (Listener || bRelayMode) StopWatch();
        return;
    }
    if (!Listener && !bRelayMode && Now >= StartRetryAt)
    {
        StartWatch();
        if (!Listener && !bRelayMode) StartRetryAt = Now + 2000;
    }
    if (Listener)
    {
        for (const FPacket& Msg : ReadPackets(Listener)) OnBeacon(Msg, Now);
    }
    else if (bRelayMode) RelayTick(Now);
    Expire(Now);
}

void UFirebirdArcadeLan::StartWatch()
{
    if (!RelayUrl.IsEmpty())
    {
        // the Family Arcade owns the beacon port: read the rooms it hears over loopback
        if (!(RelayUrl.StartsWith(TEXT("http://127.0.0.1:")) || RelayUrl.StartsWith(TEXT("http://localhost:"))))
        {
            LastError = TEXT("ARCADE_RELAY_URL must be a loopback address.");
            return;
        }
        bRelayMode = true;
        RelayNext = 0;
        return;
    }
    Listener = OpenSocket(BeaconPort, true);
    if (!Listener)
    {
        LastError = FString::Printf(TEXT("Another program on this computer is already listening for rooms (UDP %d). Open the Family Arcade and start this game from it."), BeaconPort);
        return;
    }
    LastError.Reset();
}

void UFirebirdArcadeLan::StopWatch()
{
    CloseSocket(Listener);
    bRelayMode = false;
    bRelayBusy = false;
    Heard.Reset();
}

void UFirebirdArcadeLan::OnBeacon(const FPacket& Msg, int64 Now)
{
    const TSharedPtr<FJsonObject>& B = Msg.Body;
    if (StrOf(B, TEXT("t")) != TEXT("room")) return;
    const FString Room = Clean(StrOf(B, TEXT("room")), 24);
    if (Room.IsEmpty()) return;
    bool bClosed = false;
    if (B->TryGetBoolField(TEXT("closed"), bClosed) && bClosed) { Forget(Room, MSG_GONE); return; }
    FFirebirdLanRoom Entry;
    if (RoomFrom(B, Msg.Address, Now, Entry)) Remember(Entry);
}

bool UFirebirdArcadeLan::RoomFrom(const TSharedPtr<FJsonObject>& B, const FString& Address, int64 Now, FFirebirdLanRoom& Out) const
{
    const FString Room = Clean(StrOf(B, TEXT("room")), 24);
    const TSharedPtr<FJsonValue> LevelV = B->TryGetField(TEXT("level"));
    const FString Level = LevelV.IsValid() && LevelV->Type == EJson::String ? LevelV->AsString() : FString();
    if (Room.IsEmpty() || !IsLevel(Level)) return false;
    for (const TCHAR* Key : { TEXT("port"), TEXT("ctl"), TEXT("players"), TEXT("max"), TEXT("order") }) if (!IsNum(B, Key)) return false;
    const int64 Port = IntOr(B, TEXT("port"), 0), Ctl = IntOr(B, TEXT("ctl"), 0);
    if (Port < 1024 || Port > 65535 || Ctl < 1024 || Ctl > 65535) return false;
    const FString Game = Slug(StrOf(B, TEXT("game")));
    const FString Build = Clean(StrOf(B, TEXT("build")), 64);
    if (Game.IsEmpty() || Build.IsEmpty()) return false;
    const FString Host = Clean(StrOf(B, TEXT("host")), MAX_NAME);
    Out.Room = Room; Out.Game = Game; Out.Build = Build; Out.Order = FMath::Max<int64>(IntOr(B, TEXT("order"), 0), 0);
    Out.Host = Host.IsEmpty() ? TEXT("A player") : Host;
    Out.Players = (int32)FMath::Clamp<int64>(IntOr(B, TEXT("players"), 0), 0, 99);
    Out.MaxPlayers = (int32)FMath::Clamp<int64>(IntOr(B, TEXT("max"), 1), 1, 99);
    Out.Port = (int32)Port; Out.Ctl = (int32)Ctl; Out.Level = Level;
    Out.By = StrOf(B, TEXT("by")) == TEXT("low") ? TEXT("low") : TEXT("high");
    Out.Address = Address; Out.HeardMs = Now;
    Out.bLocal = const_cast<UFirebirdArcadeLan*>(this)->IsLocal(Address);
    return true;
}

void UFirebirdArcadeLan::Remember(FFirebirdLanRoom Entry)
{
    if (const FFirebirdLanRoom* Prev = Heard.Find(Entry.Room))
    {
        // keep the first address a room was heard on, so a button does not flip between two paths to one computer
        Entry.Address = Prev->Address;
        Entry.bLocal = Prev->bLocal;
    }
    Heard.Add(Entry.Room, Entry);
}

void UFirebirdArcadeLan::Forget(const FString& Room, const FString& Message)
{
    const FFirebirdLanRoom* E = Heard.Find(Room);
    if (!E) return;
    const FString Game = E->Game;
    Heard.Remove(Room);
    // a joined room announces its own end; a listed room of this game says it went
    if (!Guests.Contains(Room) && (GameIdValue.IsEmpty() || Game == GameIdValue)) OnRoomClosed.Broadcast(Room, Message);
}

void UFirebirdArcadeLan::Expire(int64 Now)
{
    TArray<FString> Gone;
    for (const TPair<FString, FFirebirdLanRoom>& E : Heard) if (Now - E.Value.HeardMs > ROOM_TTL_MS) Gone.Add(E.Key);
    for (const FString& R : Gone) Forget(R, MSG_GONE);
}

bool UFirebirdArcadeLan::IsLocal(const FString& Address)
{
    const int64 Now = NowMs();
    if (Now - LocalChecked > 10000)
    {
        LocalChecked = Now;
        LocalAddresses.Reset();
        TArray<TSharedPtr<FInternetAddr>> Locals;
        if (ISocketSubsystem* SS = Sockets()) SS->GetLocalAdapterAddresses(Locals);
        for (const TSharedPtr<FInternetAddr>& A : Locals) if (A.IsValid()) LocalAddresses.Add(A->ToString(false));
    }
    return Address.StartsWith(TEXT("127.")) || Address == TEXT("::1") || LocalAddresses.Contains(Address);
}

void UFirebirdArcadeLan::RelayTick(int64 Now)
{
    if (bRelayBusy || Now < RelayNext) return;
    RelayNext = Now + RELAY_POLL_MS;
    FString Url = RelayUrl;
    while (Url.EndsWith(TEXT("/"))) Url.LeftChopInline(1);
    TSharedRef<IHttpRequest, ESPMode::ThreadSafe> Req = FHttpModule::Get().CreateRequest();
    Req->SetURL(Url + TEXT("/rooms"));
    Req->SetVerb(TEXT("GET"));
    Req->SetHeader(TEXT("X-Arcade-Lan"), TEXT("1"));
    Req->SetTimeout(3.f);
    TWeakPtr<bool> WeakAlive = Alive;
    Req->OnProcessRequestComplete().BindLambda([this, WeakAlive](FHttpRequestPtr, FHttpResponsePtr Resp, bool bOk)
    {
        if (!WeakAlive.IsValid()) return;
        bRelayBusy = false;
        if (!bOk || !Resp.IsValid() || Resp->GetResponseCode() != 200 || !bRelayMode) return;
        TSharedPtr<FJsonObject> Root;
        if (!FJsonSerializer::Deserialize(TJsonReaderFactory<>::Create(Resp->GetContentAsString()), Root) || !Root.IsValid()) return;
        const TArray<TSharedPtr<FJsonValue>>* Rooms = nullptr;
        if (!Root->TryGetArrayField(TEXT("rooms"), Rooms)) return;
        const int64 Now2 = NowMs();
        TSet<FString> Listed;
        for (const TSharedPtr<FJsonValue>& Raw : *Rooms)
        {
            const TSharedPtr<FJsonObject>* Obj = nullptr;
            if (!Raw.IsValid() || !Raw->TryGetObject(Obj)) continue;
            TSharedPtr<FJsonObject> Packed = MakeShared<FJsonObject>(**Obj);
            const FString Address = StrOf(Packed, TEXT("address"));
            if (!IsHomeAddress(Address)) continue;
            if (Packed->HasField(TEXT("max_players"))) Packed->SetField(TEXT("max"), Packed->TryGetField(TEXT("max_players")));
            FFirebirdLanRoom Entry;
            if (!RoomFrom(Packed, Address, Now2, Entry)) continue;
            bool bLocalFlag = false;
            Entry.bLocal = Packed->TryGetBoolField(TEXT("local"), bLocalFlag) && bLocalFlag;
            Listed.Add(Entry.Room);
            Remember(Entry);
        }
        // the arcade already ages rooms out, so a room it no longer lists is gone now
        TArray<FString> Gone;
        for (const TPair<FString, FFirebirdLanRoom>& E : Heard) if (!Listed.Contains(E.Key)) Gone.Add(E.Key);
        for (const FString& R : Gone) Forget(R, MSG_GONE);
    });
    if (Req->ProcessRequest()) bRelayBusy = true;
}
