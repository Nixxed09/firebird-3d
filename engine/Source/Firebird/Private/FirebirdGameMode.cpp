#include "FirebirdGameMode.h"
#include "Firebird.h"
#include "FBRange.h"
#include "FirebirdCharacter.h"
#include "FirebirdHUD.h"
#include "Engine/World.h"
#include "EngineUtils.h"
#include "GameFramework/PlayerStart.h"

// A map made in the editor is one of ours under /Game/ and has PlayerStarts. The
// code-built test course runs on the engine's empty map (/Engine/Maps/Entry), which
// has a PlayerStart of its own, so the map's path is checked as well.
static bool FBMapIsHandBuilt(UWorld* World)
{
    if (!World || !World->GetOutermost()->GetName().StartsWith(TEXT("/Game/"))) return false;
    return static_cast<bool>(TActorIterator<APlayerStart>(World));
}

AFirebirdGameMode::AFirebirdGameMode()
{
    DefaultPawnClass = AFirebirdCharacter::StaticClass();
    HUDClass = AFirebirdHUD::StaticClass();
}

void AFirebirdGameMode::StartPlay()
{
    // Hand-built maps bring their own level (docs/REBOOT_PLAN.md rule R4). Only the
    // empty startup map gets the code-built test course, and it exists before the
    // player is placed on it.
    if (!FBMapIsHandBuilt(GetWorld()))
        GetWorld()->SpawnActor<AFBRange>(AFBRange::StaticClass(), FTransform::Identity);
    Super::StartPlay();
}

int32 AFirebirdGameMode::SeatFor(AController* C)
{
    if (const int32* Found = Seats.Find(C)) return *Found;
    // the lowest free seat, so P1 stays P1 even if P2 leaves and someone else joins
    for (int32 i = 0; i < 4; ++i)
    {
        bool bTaken = false;
        for (const auto& Pair : Seats) if (Pair.Key.IsValid() && Pair.Value == i) bTaken = true;
        if (!bTaken) { Seats.Add(C, i); return i; }
    }
    return Seats.Num() % 4;
}

void AFirebirdGameMode::PostLogin(APlayerController* NewPlayer)
{
    Super::PostLogin(NewPlayer);
    UE_LOG(LogFirebird, Display, TEXT("FB_EVENT player_joined seat=P%d players=%d"), SeatFor(NewPlayer) + 1, GetNumPlayers());
}

void AFirebirdGameMode::RestartPlayer(AController* NewPlayer)
{
    // the empty startup map has no PlayerStart: the range's arrival platform is the start,
    // and each player gets their own spot side by side
    const int32 Seat = SeatFor(NewPlayer);
    if (FBMapIsHandBuilt(GetWorld()))
    {
        // a hand-built map: the engine picks one of the map's PlayerStarts
        Super::RestartPlayer(NewPlayer);
        if (AFirebirdCharacter* P = Cast<AFirebirdCharacter>(NewPlayer->GetPawn())) P->PlayerIndex = Seat;
        return;
    }
    RestartPlayerAtTransform(NewPlayer, FTransform(FRotator::ZeroRotator, FVector(0.f, -180.f + Seat * 120.f, 110.f)));
    if (AFirebirdCharacter* P = Cast<AFirebirdCharacter>(NewPlayer->GetPawn())) P->PlayerIndex = Seat;
}
