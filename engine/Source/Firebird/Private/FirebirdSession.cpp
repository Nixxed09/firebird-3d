#include "FirebirdSession.h"
#include "Firebird.h"
#include "FirebirdArcadeLan.h"
#include "Engine/Engine.h"
#include "Engine/GameInstance.h"
#include "Engine/World.h"
#include "GameFramework/GameStateBase.h"
#include "GameFramework/PlayerController.h"
#include "GameFramework/PlayerState.h"
#include "HAL/PlatformMisc.h"
#include "Kismet/GameplayStatics.h"
#include "Misc/CommandLine.h"
#include "Misc/FileHelper.h"
#include "HAL/IConsoleManager.h"
#include "Misc/Paths.h"

const TCHAR* UFirebirdSession::GameId = TEXT("firebird-coop");

UFirebirdSession* UFirebirdSession::Get(const UObject* WorldContext)
{
    const UWorld* W = WorldContext ? WorldContext->GetWorld() : nullptr;
    const UGameInstance* GI = W ? W->GetGameInstance() : nullptr;
    return GI ? GI->GetSubsystem<UFirebirdSession>() : nullptr;
}

UFirebirdArcadeLan* UFirebirdSession::Lan() const
{
    return GetGameInstance() ? GetGameInstance()->GetSubsystem<UFirebirdArcadeLan>() : nullptr;
}

static FString SettingsPath()
{
    return FPaths::Combine(FPlatformProcess::UserSettingsDir(), TEXT("FirebirdCoop"), TEXT("settings.ini"));
}

void UFirebirdSession::AdjustSensitivity(int32 Steps)
{
    const float Next = FMath::Clamp(FMath::RoundToFloat((MouseSensitivity + Steps * SensitivityStep) * 10.f) / 10.f, SensitivityMin, SensitivityMax);
    if (FMath::IsNearlyEqual(Next, MouseSensitivity)) return;
    MouseSensitivity = Next;
    FFileHelper::SaveStringToFile(FString::Printf(TEXT("mouse_sensitivity=%.1f\r\n"), MouseSensitivity), *SettingsPath());
}

// fb.MouseSensitivity <0.2..3.0>: set it from the console or -ExecCmds (the same path as the menu and [ ])
static FAutoConsoleCommandWithWorldAndArgs GSensitivityCmd(TEXT("fb.MouseSensitivity"), TEXT("Set the mouse sensitivity (0.2 to 3.0) and save it."),
    FConsoleCommandWithWorldAndArgsDelegate::CreateLambda([](const TArray<FString>& Args, UWorld* World)
    {
        UFirebirdSession* S = UFirebirdSession::Get(World);
        if (!S) return;
        if (Args.Num() > 0)
            S->AdjustSensitivity(FMath::RoundToInt((FCString::Atof(*Args[0]) - S->MouseSensitivity) / UFirebirdSession::SensitivityStep));
        UE_LOG(LogTemp, Display, TEXT("FB_SENSITIVITY %s"), *S->SensitivityText());
    }));

void UFirebirdSession::Initialize(FSubsystemCollectionBase& Collection)
{
    Collection.InitializeDependency(UFirebirdArcadeLan::StaticClass());
    Super::Initialize(Collection);

    // the player's own settings (mouse sensitivity), kept outside the game folder
    FString Saved;
    if (FFileHelper::LoadFileToString(Saved, *SettingsPath()))
    {
        FString Value;
        if (FParse::Value(*Saved, TEXT("mouse_sensitivity="), Value))
            MouseSensitivity = FMath::Clamp(FCString::Atof(*Value), SensitivityMin, SensitivityMax);
    }

    // which copy this is: the same string on two computers exactly when the copy is the same
    int64 Order = 0;
    BuildId = UFirebirdArcadeLan::ComputeBuildId(&Order);
    if (UFirebirdArcadeLan* L = Lan()) L->Configure(GameId, BuildId, Order, FPlatformProcess::ComputerName());

    // started for a test, or straight into a hosted or joined game from the command line: no menu
    const FString Cmd = FCommandLine::Get();
    if (Cmd.Contains(TEXT("?listen"))) Mode = EFirebirdSessionMode::Hosting;
    else if (!FPlatformMisc::GetEnvironmentVariable(TEXT("ARCADE_JOIN")).IsEmpty()) Mode = EFirebirdSessionMode::Menu;   // joins at once (Tick)
    else if (FParse::Param(*Cmd, TEXT("FBAuto")) && !Cmd.Contains(TEXT("FBScenario=menu"))) Mode = EFirebirdSessionMode::Solo;
    else
    {
        // a bare address to join (e.g. 192.168.1.20:27705) as the first word
        FString First;
        const TCHAR* Stream = *Cmd;
        while (FParse::Token(Stream, First, false))
        {
            if (First.EndsWith(TEXT(".uproject")) || First.StartsWith(TEXT("-"))) continue;
            if (First.Contains(TEXT(":")) && !First.StartsWith(TEXT("/"))) Mode = EFirebirdSessionMode::Joined;
            break;
        }
    }
    if (UFirebirdArcadeLan* L = Lan())
    {
        L->OnJoined.AddUObject(this, &UFirebirdSession::OnJoined);
        L->OnJoinRefused.AddUObject(this, &UFirebirdSession::OnRefused);
        L->OnRoomClosed.AddUObject(this, &UFirebirdSession::OnClosed);
    }
    if (GEngine)
        GEngine->OnNetworkFailure().AddWeakLambda(this, [this](UWorld*, UNetDriver*, ENetworkFailure::Type, const FString&)
        {
            if (Mode == EFirebirdSessionMode::Joined) BackToMenu(UFirebirdArcadeLan::MSG_CLOSED);
        });
    TickHandle = FTSTicker::GetCoreTicker().AddTicker(FTickerDelegate::CreateUObject(this, &UFirebirdSession::Tick), 0.25f);
    UE_LOG(LogFirebird, Display, TEXT("FB_SESSION start mode=%d build=%s"), (int32)Mode, *BuildId);
}

void UFirebirdSession::Deinitialize()
{
    FTSTicker::GetCoreTicker().RemoveTicker(TickHandle);
    if (!HostedRoom.IsEmpty()) if (UFirebirdArcadeLan* L = Lan()) L->CloseRoom(HostedRoom);
    HostedRoom.Empty();
    Super::Deinitialize();
}

TArray<FFirebirdLanRoom> UFirebirdSession::Rooms() const
{
    TArray<FFirebirdLanRoom> Out;
    if (const UFirebirdArcadeLan* L = Lan())
        for (const FFirebirdLanRoom& R : L->ListRooms(GameId)) if (!R.bMine) Out.Add(R);
    return Out;
}

void UFirebirdSession::PlayAlone()
{
    Mode = EFirebirdSessionMode::Solo;
    Status.Empty();
}

void UFirebirdSession::Host()
{
    Mode = EFirebirdSessionMode::Hosting;
    Status = TEXT("OPENING YOUR GAME...");
    UGameplayStatics::OpenLevel(GetGameInstance(), TEXT("/Engine/Maps/Entry"), true, TEXT("listen"));
}

void UFirebirdSession::Join(const FString& Room)
{
    UFirebirdArcadeLan* L = Lan();
    if (!L) { Status = TEXT("HOME NETWORK PLAY IS NOT AVAILABLE ON THIS COMPUTER."); return; }
    Mode = EFirebirdSessionMode::Joining;
    JoiningRoom = Room;
    Status = TEXT("JOINING...");
    L->JoinRoom(Room);
}

void UFirebirdSession::OnJoined(const FString& Room, const FString& Address, int32 Port)
{
    if (Room != JoiningRoom) return;
    Mode = EFirebirdSessionMode::Joined;
    Status.Empty();
    UE_LOG(LogFirebird, Display, TEXT("FB_SESSION joined room=%s address=%s:%d"), *Room, *Address, Port);
    if (APlayerController* PC = GetGameInstance()->GetFirstLocalPlayerController())
        PC->ClientTravel(FString::Printf(TEXT("%s:%d"), *Address, Port > 0 ? Port : GamePort), TRAVEL_Absolute);
}

void UFirebirdSession::OnRefused(const FString& Room, const FString& Message)
{
    if (Room != JoiningRoom) return;
    Mode = EFirebirdSessionMode::Menu;
    Status = Message;   // the contract's words, exactly (LAN-CONTRACT.md)
    UE_LOG(LogFirebird, Display, TEXT("FB_SESSION refused room=%s: %s"), *Room, *Message);
}

void UFirebirdSession::OnClosed(const FString& Room, const FString& Message)
{
    if (Mode == EFirebirdSessionMode::Joined && Room == JoiningRoom) BackToMenu(Message);
}

void UFirebirdSession::BackToMenu(const FString& Why)
{
    if (!HostedRoom.IsEmpty()) if (UFirebirdArcadeLan* L = Lan()) L->CloseRoom(HostedRoom);
    HostedRoom.Empty();
    LastPlayers = -1;
    const bool bWasNetworked = Mode == EFirebirdSessionMode::Hosting || Mode == EFirebirdSessionMode::Joined;
    Mode = EFirebirdSessionMode::Menu;
    Status = Why;
    UE_LOG(LogFirebird, Display, TEXT("FB_SESSION menu: %s"), *Why);
    if (bWasNetworked) UGameplayStatics::OpenLevel(GetGameInstance(), TEXT("/Engine/Maps/Entry"), true);
}

bool UFirebirdSession::Tick(float DeltaTime)
{
    UWorld* W = GetGameInstance() ? GetGameInstance()->GetWorld() : nullptr;
    UFirebirdArcadeLan* L = Lan();
    if (!W || !L) return true;

    // hosting: keep a Family Arcade room open while this computer is the listen server
    if (Mode == EFirebirdSessionMode::Hosting && W->GetNetMode() == NM_ListenServer)
    {
        const int32 Players = W->GetGameState() ? W->GetGameState()->PlayerArray.Num() : 1;
        if (HostedRoom.IsEmpty())
        {
            HostedRoom = L->AnnounceRoom(GamePort, FMath::Max(1, Players), MaxPlayers);
            Status.Empty();
            UE_LOG(LogFirebird, Display, TEXT("FB_SESSION hosting room=%s %s"), *HostedRoom, *L->LastError);
            LastPlayers = Players;
        }
        else if (Players != LastPlayers)
        {
            L->UpdatePlayers(HostedRoom, Players);
            LastPlayers = Players;
        }
    }

    // started from the arcade's "Playing now" strip: join that room as soon as it's heard
    if (!bArcadeJoinTried && Mode == EFirebirdSessionMode::Menu)
    {
        const FString Pending = L->PendingJoin();
        if (Pending.IsEmpty()) bArcadeJoinTried = true;
        else
        {
            for (const FFirebirdLanRoom& R : L->ListRooms(GameId))
                if (R.Room == Pending) { bArcadeJoinTried = true; Join(Pending); break; }
            if (!bArcadeJoinTried && W->GetTimeSeconds() > 8.f)
            {
                bArcadeJoinTried = true;
                Status = UFirebirdArcadeLan::MSG_GONE;
            }
        }
    }
    return true;
}
