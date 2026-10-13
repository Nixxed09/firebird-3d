#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "FBFx.generated.h"

class UStaticMeshComponent;
class UPointLightComponent;
class UMaterialInstanceDynamic;

// A short-lived glowing thing: a tracer, an impact flash, a mote of released
// light, a flake of ash. It drifts, shrinks and fades its light, then goes.
// (Art pass later: Niagara. This keeps the slice free of authored assets.)
UCLASS()
class FIREBIRD_API AFBFx : public AActor
{
    GENERATED_BODY()
public:
    AFBFx();
    virtual void Tick(float DeltaSeconds) override;

    // Spawns one. Size in cm (cube); Light 0 = no light; Velocity cm/s; Gravity cm/s^2 (negative rises)
    static AFBFx* Spawn(UWorld* World, const FVector& At, const FRotator& Rot, const FVector& Size, const FLinearColor& Color,
                        float Emissive, float Life, float Light = 0.f, float LightRadius = 400.f,
                        const FVector& Velocity = FVector::ZeroVector, float Gravity = 0.f, bool bSphere = false);
    // A burst of n motes outward and up from a point
    static void Burst(UWorld* World, const FVector& At, int32 N, const FLinearColor& Color, float Speed, float Life, float Size, float Gravity, float Emissive = 6.f);

private:
    UPROPERTY() UStaticMeshComponent* Mesh;
    UPROPERTY() UPointLightComponent* Light;
    UPROPERTY() UMaterialInstanceDynamic* Mat;
    float Life = 0.2f, Age = 0.f, Light0 = 0.f, Emissive0 = 1.f, Gravity = 0.f;
    FVector Velocity = FVector::ZeroVector, Scale0 = FVector::OneVector;
};
