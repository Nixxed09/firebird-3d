#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "EmberProjectile.generated.h"

class UStaticMeshComponent;
class UPointLightComponent;

// A thrown mercury ember: slow enough to read and sidestep (v2: 7 cells/s),
// bright crimson so danger is never ambiguous (STYLE_GUIDE colour rules).
UCLASS()
class FIREBIRD_API AEmberProjectile : public AActor
{
    GENERATED_BODY()
public:
    AEmberProjectile();
    virtual void Tick(float DeltaSeconds) override;
    static AEmberProjectile* Launch(UWorld* World, const FVector& From, const FVector& Velocity, AActor* Thrower, float Damage);

    FVector Velocity = FVector::ZeroVector;
    float Damage = 12.f;
    float Age = 0.f;
    UPROPERTY() AActor* Thrower = nullptr;

private:
    UPROPERTY() UStaticMeshComponent* Mesh;
    UPROPERTY() UPointLightComponent* Light;
    float TrailT = 0.f;
};
