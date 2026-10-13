#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "FBRange.generated.h"

class AHollow;
class UMaterialInterface;

// Course landmarks (cm), shared by the range and the automation driver
namespace FBCourse
{
    constexpr float GapAStart = 2000.f;
    constexpr float GapAEnd = 2260.f;
    constexpr float GapBStart = 3100.f;
    constexpr float GapBEnd = 4100.f;
    constexpr float GateStart = 4600.f;
    constexpr float GateEnd = 5200.f;
    constexpr float GateBottom = 110.f;
    constexpr float ArenaStart = 5600.f;
    constexpr float ArenaEnd = 8400.f;
}

// The feel range: session one of the UE slice (docs/FUN_AUDIT.md, "feel in the
// hands"). A straight course that teaches and tests the movement kit, one
// thing at a time (contract L2), then the Hollow arena:
//   A  arrival platform, torch pair ahead (cue: this way)
//   B  a short gap: walk off, jump late (coyote time catches you)
//   C  a long gap over the furnace pit: jump alone falls short, jump + dash makes it
//   D  a low gate: slide under it at speed (crouch-walking also works, slowly)
//   E  the arena: one Hollow alone first (L3), then a second, then the forge
//      wakes: three waves that grow with the number of players (co-op), a
//      breather with a reward between them (E1), and ARENA CLEAR at the end
// Built entirely in code from engine shapes, so it needs no editor work.
// Multiplayer: every computer builds the same course; the host owns the
// Hollows and the waves, and tells everyone what Riley says about them.
UCLASS()
class FIREBIRD_API AFBRange : public AActor
{
    GENERATED_BODY()
public:
    AFBRange();
    virtual void BeginPlay() override;
    virtual void Tick(float DeltaSeconds) override;
    virtual void GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& OutLifetimeProps) const override;

    UPROPERTY() TArray<AHollow*> Hollows;   // host only

    // for the HUD on every computer
    UPROPERTY(Replicated) int32 Wave = 0;          // 0 = the intro Hollows; 1..WaveCount
    UPROPERTY(Replicated) int32 WaveCount = 3;
    UPROPERTY(Replicated) int32 HollowsLeft = 0;
    bool bArenaClear = false;                      // set everywhere by Multi_ArenaClear
    float ClearTime = 0.f;

    UFUNCTION(NetMulticast, Reliable) void Multi_Say(const FString& Line);
    UFUNCTION(NetMulticast, Reliable) void Multi_ArenaClear(float Seconds);

    static AFBRange* Get(UWorld* World);

private:
    void Block(const FVector& Min, const FVector& Max, UMaterialInterface* Mat, bool bCollide = true);
    void Torch(const FVector& At);
    void Lamp(const FVector& At, const FLinearColor& Color, float Candela, float Radius);
    void Atmosphere();
    void Say(const FString& Line);
    void TickLocalRadio();
    void TickArena(float DeltaSeconds);     // host
    void SpawnWaveHollow();

    int32 RadioStage = 0;     // this computer's own player: the course lines
    int32 ArenaStage = 0;     // host: 0 first Hollow, 1 second, 2 breather, 3 wave running, 4 clear
    float ArenaT = 0.f;
    float ArenaStartTime = -1.f;
    int32 ToSpawn = 0;
    float SpawnT = 0.f;
    int32 SpawnIndex = 0;
};
