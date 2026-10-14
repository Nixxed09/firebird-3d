#pragma once

#include "CoreMinimal.h"
#include "Subsystems/WorldSubsystem.h"
#include "FirebirdAutomation.generated.h"

class AFirebirdCharacter;
class AHollow;

// Everything behind -FBAuto: a scripted run through the feel range that drives
// the Firebird through the same FFirebirdInput a player fills, measures each
// move (did the coyote jump land? did the dash clear the gap? did the release
// heal?), takes key shots, optionally dumps every frame for a video, writes a
// JSON summary and quits.
//   -FBAuto -FBScenario=feel|nodash -FBOut="<dir>" [-FBFrames]
// Run with -BENCHMARK -FPS=30 so every frame is exactly 1/30 s (video-true).
// Gameplay classes never read the command line; this subsystem owns it.
UCLASS()
class FIREBIRD_API UFirebirdAutomation : public UTickableWorldSubsystem
{
    GENERATED_BODY()
public:
    virtual void OnWorldBeginPlay(UWorld& InWorld) override;
    virtual void Tick(float DeltaSeconds) override;
    virtual TStatId GetStatId() const override;
    virtual bool DoesSupportWorldType(const EWorldType::Type WorldType) const override;
    virtual bool IsTickable() const override { return bActive; }

private:
    void Shot(const FString& Name);
    void Proof(const FString& Key, bool bOk, const FString& Detail);
    void Next(int32 To);
    void AimAt(AFirebirdCharacter* P, const FVector& Target);
    void Finish();
    AHollow* HollowAt(int32 Index) const;

    bool bActive = false;
    bool bFrames = false;
    FString Scenario = TEXT("feel");
    FString OutDir;
    int32 Stage = 0;
    float StageT = 0.f;
    float TotalT = 0.f;
    int32 Frame = 0;
    int32 HurtsAtWindup = 0;
    float HealthBeforeRelease = 0.f;
    float DodgeWatchT = -1.f;
    int32 Hurts = 0;
    float LastHealth = 100.f;
    float FinishT = -1.f;
    bool bShotTaken = false;
    bool bDashedB = false;
    // co-op scenario (-FBScenario=coop -FBPlayers=N): each process plays its own Firebird
    void TickCoop(AFirebirdCharacter* P, float DeltaSeconds);
    void TickController(AFirebirdCharacter* P);
    bool bControllerCaseStarted = false;
    FVector ControllerStart = FVector::ZeroVector;
    int32 WantPlayers = 1;
    int32 MaxHollowsSeen = 0;
    int32 MaxTeammatesSeen = 0;
    float TeammateTravel = 0.f;
    FVector LastTeammatePos = FVector::ZeroVector;
    bool bTeammatePosSet = false;
    float StrafeT = 0.f;
    float StrafeDirX = 1.f;
    int32 DownsSeen = 0;
    bool bWasDead = false;
    bool bFightShot = false;
    TArray<FString> Proofs;
    TArray<FString> Shots;
    bool bAllOk = true;
};
