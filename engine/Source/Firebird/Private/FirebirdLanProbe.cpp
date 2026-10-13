#include "FirebirdLanProbe.h"
#include "FirebirdArcadeLan.h"
#include "Firebird.h"
#include "HAL/PlatformMisc.h"
#include "Misc/CommandLine.h"
#include "Misc/FileHelper.h"

namespace
{
    struct FProbeState
    {
        bool bActive = false;
        FString Role, Log, Control, Want;
        FString Game = TEXT("firebird-coop"), Build = TEXT("probe"), Name = TEXT("UEProbe");
        int64 Order = 0;
        int32 Port = 27700, Max = 4, Players = 1, ControlLines = 0;
        double Started = 0.0, Seconds = 60.0, ExitAt = -1.0;
        bool bForceExit = false, bConfigured = false, bJoining = false, bDone = false, bErrLogged = false;
        FString Room;
        FDelegateHandle Handles[4];
    };
    FProbeState S;

    FString Q(const FString& V)
    {
        FString O = TEXT("\"");
        for (TCHAR C : V) { if (C == '"' || C == '\\') O.AppendChar('\\'); if (C >= 32) O.AppendChar(C); }
        return O + TEXT("\"");
    }
    void Line(const FString& Name, const FString& Json)
    {
        const FString Text = Name + TEXT(" ") + Json + LINE_TERMINATOR;
        FFileHelper::SaveStringToFile(Text, *S.Log, FFileHelper::EEncodingOptions::ForceUTF8WithoutBOM, &IFileManager::Get(), FILEWRITE_Append);
        UE_LOG(LogFirebird, Display, TEXT("FB_LANPROBE %s %s"), *Name, *Json);
    }
    void ExitSoon(double After, bool bForce)
    {
        S.ExitAt = FPlatformTime::Seconds() + After;
        S.bForceExit = bForce;
    }
    FString RoomsJson(const TArray<FFirebirdLanRoom>& Rooms)
    {
        TArray<FString> Items;
        for (const FFirebirdLanRoom& R : Rooms)
            Items.Add(FString::Printf(TEXT("{\"room\":%s,\"game\":%s,\"host\":%s,\"players\":%d,\"max_players\":%d,\"level\":%s,\"address\":%s,\"port\":%d,\"ctl\":%d,\"build\":%s,\"same_build\":%s,\"build_message\":%s}"),
                *Q(R.Room), *Q(R.Game), *Q(R.Host), R.Players, R.MaxPlayers, *Q(R.Level), *Q(R.Address), R.Port, R.Ctl, *Q(R.Build), R.bSameBuild ? TEXT("true") : TEXT("false"), *Q(R.BuildMessage)));
        return TEXT("[") + FString::Join(Items, TEXT(",")) + TEXT("]");
    }
}

void FFirebirdLanProbe::StartIfAsked(UFirebirdArcadeLan* Lan)
{
    const TCHAR* Cmd = FCommandLine::Get();
    if (!FParse::Value(Cmd, TEXT("FBLanProbe="), S.Role)) return;
    S.bActive = true;
    FParse::Value(Cmd, TEXT("FBLanLog="), S.Log);
    FParse::Value(Cmd, TEXT("FBLanControl="), S.Control);
    FParse::Value(Cmd, TEXT("FBLanRoom="), S.Want);
    FParse::Value(Cmd, TEXT("FBLanGame="), S.Game);
    FParse::Value(Cmd, TEXT("FBLanBuild="), S.Build);
    FParse::Value(Cmd, TEXT("FBLanName="), S.Name);
    FParse::Value(Cmd, TEXT("FBLanOrder="), S.Order);
    FParse::Value(Cmd, TEXT("FBLanPort="), S.Port);
    FParse::Value(Cmd, TEXT("FBLanMax="), S.Max);
    FParse::Value(Cmd, TEXT("FBLanSeconds="), S.Seconds);
    if (S.Log.IsEmpty()) S.Log = FPaths::ProjectSavedDir() / TEXT("fb-lan-probe.log");
    S.Started = FPlatformTime::Seconds();
}

void FFirebirdLanProbe::Stop()
{
    S.bActive = false;
}

void FFirebirdLanProbe::Tick(UFirebirdArcadeLan* Lan)
{
    if (!S.bActive || !Lan) return;
    const double Now = FPlatformTime::Seconds();
    if (S.ExitAt >= 0.0)
    {
        if (Now >= S.ExitAt)
        {
            Line(TEXT("PROBE_END"), FString::Printf(TEXT("{\"force\":%s}"), S.bForceExit ? TEXT("true") : TEXT("false")));
            S.bActive = false;
            if (S.bForceExit) FPlatformMisc::RequestExit(true, TEXT("FBLanProbe kill"));   // no polite close: listeners must time the room out
            else FPlatformMisc::RequestExit(false, TEXT("FBLanProbe"));
        }
        return;
    }
    if (!S.bConfigured)
    {
        S.bConfigured = true;
        Lan->Configure(S.Game, S.Build, S.Order, S.Name);
        Line(TEXT("PROBE_START"), FString::Printf(TEXT("{\"role\":%s,\"beacon_port\":%d,\"game\":%s,\"build\":%s,\"order\":%lld,\"relay\":%s}"),
            *Q(S.Role), Lan->BeaconPort, *Q(S.Game), *Q(S.Build), S.Order, *Q(Lan->RelayUrl)));
        Lan->OnGuestJoined.AddLambda([Lan](const FString& Room, const FString& Who)
        {
            S.Players++;
            Lan->UpdatePlayers(Room, S.Players);
            Line(TEXT("HOST_GUEST_JOINED"), FString::Printf(TEXT("{\"room\":%s,\"who\":%s,\"players\":%d}"), *Q(Room), *Q(Who), S.Players));
        });
        Lan->OnJoined.AddLambda([](const FString& Room, const FString& Address, int32 Port)
        {
            Line(TEXT("JOINED"), FString::Printf(TEXT("{\"room\":%s,\"address\":%s,\"port\":%d}"), *Q(Room), *Q(Address), Port));
        });
        Lan->OnJoinRefused.AddLambda([](const FString& Room, const FString& Message)
        {
            Line(TEXT("REFUSED"), FString::Printf(TEXT("{\"room\":%s,\"message\":%s}"), *Q(Room), *Q(Message)));
            if (S.Role == TEXT("join")) ExitSoon(0.3, false);
        });
        Lan->OnRoomClosed.AddLambda([](const FString& Room, const FString& Message)
        {
            Line(TEXT("ROOM_CLOSED"), FString::Printf(TEXT("{\"room\":%s,\"message\":%s,\"at\":%lld}"), *Q(Room), *Q(Message), FDateTime::UtcNow().ToUnixTimestamp() * 1000 + FDateTime::UtcNow().GetMillisecond()));
            if (S.Role == TEXT("join") && Room == S.Room) ExitSoon(0.3, false);
        });
        if (S.Role == TEXT("buildid"))
        {
            int64 Order = 0;
            const FString Id = UFirebirdArcadeLan::ComputeBuildId(&Order);
            Line(TEXT("BUILD_ID"), FString::Printf(TEXT("{\"build\":%s,\"order\":%lld}"), *Q(Id), Order));
            ExitSoon(0.1, false);
            return;
        }
        if (S.Role == TEXT("host"))
        {
            S.Room = Lan->AnnounceRoom(S.Port, S.Players, S.Max);
            const TArray<FFirebirdLanRoom> None;
            Line(TEXT("HOST_READY"), FString::Printf(TEXT("{\"room\":%s,\"error\":%s,\"port\":%d}"), *Q(S.Room), *Q(Lan->LastError), S.Port));
        }
        return;
    }
    if (Now - S.Started > S.Seconds)
    {
        Line(TEXT("PROBE_TIMEOUT"), TEXT("{}"));
        ExitSoon(0.1, false);
        return;
    }
    if (S.Role == TEXT("host"))
    {
        // the test appends commands to the control file
        TArray<FString> Lines;
        if (!S.Control.IsEmpty() && FFileHelper::LoadFileToStringArray(Lines, *S.Control))
        {
            for (int32 i = S.ControlLines; i < Lines.Num(); ++i)
            {
                const FString C = Lines[i].TrimStartAndEnd();
                if (C == TEXT("quit")) { Lan->CloseRoom(S.Room); Line(TEXT("HOST_CLOSED"), FString::Printf(TEXT("{\"room\":%s}"), *Q(S.Room))); ExitSoon(0.5, false); }
                else if (C == TEXT("kill")) { Line(TEXT("HOST_KILLED"), FString::Printf(TEXT("{\"room\":%s}"), *Q(S.Room))); ExitSoon(0.0, true); }
            }
            S.ControlLines = Lines.Num();
        }
    }
    else if (S.Role == TEXT("join"))
    {
        const TArray<FFirebirdLanRoom> Rooms = Lan->ListRooms(S.Game);
        if (!S.bErrLogged && !Lan->IsListening() && !Lan->LastError.IsEmpty())
        {
            // e.g. the Family Arcade already owns the beacon port and this game was not started through it
            S.bErrLogged = true;
            Line(TEXT("LISTEN_ERROR"), FString::Printf(TEXT("{\"error\":%s}"), *Q(Lan->LastError)));
        }
        if (!S.bJoining)
        {
            for (const FFirebirdLanRoom& R : Rooms)
            {
                if (!S.Want.IsEmpty() && R.Room != S.Want) continue;
                S.Room = R.Room;
                S.bJoining = true;
                Line(TEXT("JOIN_LIST"), FString::Printf(TEXT("{\"rooms\":%s,\"listening\":%s,\"error\":%s}"), *RoomsJson(Rooms), Lan->IsListening() ? TEXT("true") : TEXT("false"), *Q(Lan->LastError)));
                Lan->JoinRoom(R.Room);
                break;
            }
        }
    }
}
