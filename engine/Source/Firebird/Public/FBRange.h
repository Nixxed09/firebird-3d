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
// thing at a time (contract L2), then a small Hollow arena for the Ember Fist:
//   A  arrival platform, torch pair ahead (cue: this way)
//   B  a short gap: walk off, jump late (coyote time catches you)
//   C  a long gap over the furnace pit: jump alone falls short, jump + dash makes it
//   D  a low gate: slide under it at speed (crouch-walking also works, slowly)
//   E  the arena: one Hollow alone first (L3), then a second
// Built entirely in code from engine shapes, so it needs no editor work.
UCLASS()
class FIREBIRD_API AFBRange : public AActor
{
    GENERATED_BODY()
public:
    AFBRange();
    virtual void BeginPlay() override;
    virtual void Tick(float DeltaSeconds) override;

    UPROPERTY() TArray<AHollow*> Hollows;

private:
    void Block(const FVector& Min, const FVector& Max, UMaterialInterface* Mat, bool bCollide = true);
    void Torch(const FVector& At);
    void Lamp(const FVector& At, const FLinearColor& Color, float Candela, float Radius);
    void Atmosphere();
    void Say(const FString& Line);

    int32 RadioStage = 0;
    bool bSecondReleased = false;
};
