#include "FirebirdGameMode.h"
#include "Firebird.h"
#include "FBRange.h"
#include "FirebirdCharacter.h"
#include "FirebirdHUD.h"
#include "Engine/World.h"

AFirebirdGameMode::AFirebirdGameMode()
{
    DefaultPawnClass = AFirebirdCharacter::StaticClass();
    HUDClass = AFirebirdHUD::StaticClass();
}

void AFirebirdGameMode::StartPlay()
{
    // the course exists before the player is placed on it
    GetWorld()->SpawnActor<AFBRange>(AFBRange::StaticClass(), FTransform::Identity);
    Super::StartPlay();
}

void AFirebirdGameMode::RestartPlayer(AController* NewPlayer)
{
    // the empty startup map has no PlayerStart: the range's arrival platform is the start
    RestartPlayerAtTransform(NewPlayer, FTransform(FRotator::ZeroRotator, FVector(0.f, 0.f, 110.f)));
}
