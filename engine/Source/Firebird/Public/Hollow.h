#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Character.h"
#include "Hollow.generated.h"

class UPointLightComponent;
class UStaticMeshComponent;
class UMaterialInstanceDynamic;
class AFirebirdCharacter;

UENUM()
enum class EHollowState : uint8 { Idle, Chase, Windup, Cracked, Gone };

// A Hollow: an ash shell the Overseers filled with red mercury (STYLE_GUIDE).
// It keeps its distance and throws mercury embers. Every throw has a 0.65 s
// tell: it stops, raises its arms and its seams flare crimson (contract E4).
// Hurt it below a third and the shell CRACKS: it staggers, light leaks gold
// through the seams, and for a few seconds the Ember Fist can release it.
// Shooting a cracked Hollow still breaks it, but only a release heals you.
//
// Multiplayer: the host runs its brain and hunts the nearest Firebird; every
// computer draws its tell, crack and release from the replicated state.
UCLASS()
class FIREBIRD_API AHollow : public ACharacter
{
    GENERATED_BODY()

public:
    AHollow();
    virtual void BeginPlay() override;
    virtual void Tick(float DeltaSeconds) override;
    virtual void GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& OutLifetimeProps) const override;

    UPROPERTY(EditAnywhere, Category = "Hollow") float MaxHp = 40.f;        // v2 imp
    UPROPERTY(EditAnywhere, Category = "Hollow") float CrackBelow = 15.f;
    UPROPERTY(EditAnywhere, Category = "Hollow") float CrackTime = 2.6f;
    UPROPERTY(EditAnywhere, Category = "Hollow") float WindupTime = 0.65f;
    UPROPERTY(EditAnywhere, Category = "Hollow") float Speed = 360.f;       // v2: 1.7 cells/s
    UPROPERTY(EditAnywhere, Category = "Hollow") float WakeRange = 2600.f;
    UPROPERTY(EditAnywhere, Category = "Hollow") float EmberSpeed = 1400.f; // v2: 7 cells/s

    // host only: a hit from a player; bMelee = the Ember Fist. Returns true if it broke.
    bool TakeHit(float Damage, const FVector& FromDir, bool bMelee, AFirebirdCharacter* By);
    // it heard the fight: hunts you even without a line of sight (v2: gunfire wakes demons)
    void Alert() { if (State == EHollowState::Idle) { bAwake = true; State = EHollowState::Chase; } }
    bool IsCracked() const { return State == EHollowState::Cracked; }
    bool IsAlive() const { return State != EHollowState::Gone; }

    float Hp = 40.f;
    UPROPERTY(Replicated) EHollowState State = EHollowState::Idle;
    UPROPERTY(Replicated) float WindupT = 0.f;   // counts up during a windup (automation reads it to dodge)
    bool bAwake = false;

    // automation and the range: hold fire (so a fight can be staged beat by beat)
    bool bHoldFire = false;

    UFUNCTION(NetMulticast, Unreliable) void Multi_Hit(bool bMelee);
    UFUNCTION(NetMulticast, Reliable) void Multi_Cracked();
    UFUNCTION(NetMulticast, Reliable) void Multi_Break(bool bReleased);

private:
    void Think(float DeltaSeconds);       // host: the brain
    void Draw(float DeltaSeconds);        // everyone: the look of the current state
    void Break(bool bReleased);
    void Throw(AFirebirdCharacter* Target);
    AFirebirdCharacter* NearestPlayer(float& OutDist) const;
    bool Sees(const AFirebirdCharacter* P) const;
    void SetSeams(const FLinearColor& Color, float Emissive, float LightIntensity);
    void ResetArms();
    void BuildShell();

    UPROPERTY() UStaticMeshComponent* Torso;
    UPROPERTY() UStaticMeshComponent* Head;
    UPROPERTY() UStaticMeshComponent* ArmL;
    UPROPERTY() UStaticMeshComponent* ArmR;
    UPROPERTY() UStaticMeshComponent* Seam;
    UPROPERTY() UPointLightComponent* Core;
    UPROPERTY() UMaterialInstanceDynamic* ShellMat;
    UPROPERTY() UMaterialInstanceDynamic* SeamMat;

    float AttackCooldown = 1.5f;
    float StrafeT = 0.f;
    float StrafeDir = 1.f;
    float FlashT = 0.f;
    float CrackT = 0.f;
    float GoneT = 0.f;
    float Bob = 0.f;
    bool bBrokenFx = false;
};
