#include "EmberProjectile.h"
#include "Firebird.h"
#include "FBFx.h"
#include "FirebirdCharacter.h"
#include "Components/StaticMeshComponent.h"
#include "Components/PointLightComponent.h"
#include "Engine/World.h"

AEmberProjectile::AEmberProjectile()
{
    PrimaryActorTick.bCanEverTick = true;
    Mesh = CreateDefaultSubobject<UStaticMeshComponent>(TEXT("Mesh"));
    Mesh->SetCollisionEnabled(ECollisionEnabled::NoCollision);
    Mesh->SetCastShadow(false);
    Mesh->SetMobility(EComponentMobility::Movable);
    Mesh->SetWorldScale3D(FVector(0.24f));
    RootComponent = Mesh;
    Light = CreateDefaultSubobject<UPointLightComponent>(TEXT("Light"));
    Light->SetupAttachment(Mesh);
    Light->SetUsingAbsoluteScale(true);
    Light->SetIntensityUnits(ELightUnits::Candelas);
    Light->SetIntensity(180.f);
    Light->SetAttenuationRadius(450.f);
    Light->SetLightColor(FB::Crimson);
    Light->SetCastShadows(false);
    Light->SetVolumetricScatteringIntensity(0.4f);
}

AEmberProjectile* AEmberProjectile::Launch(UWorld* World, const FVector& From, const FVector& InVelocity, AActor* InThrower, float InDamage)
{
    FActorSpawnParameters P;
    P.SpawnCollisionHandlingOverride = ESpawnActorCollisionHandlingMethod::AlwaysSpawn;
    AEmberProjectile* E = World->SpawnActor<AEmberProjectile>(AEmberProjectile::StaticClass(), From, InVelocity.Rotation(), P);
    if (!E) return nullptr;
    E->Mesh->SetStaticMesh(FB::Sphere());
    E->Mesh->SetMaterial(0, FB::MakeGlow(E, FB::Crimson, 14.f));
    E->Velocity = InVelocity;
    E->Thrower = InThrower;
    E->Damage = InDamage;
    return E;
}

void AEmberProjectile::Tick(float DeltaSeconds)
{
    Super::Tick(DeltaSeconds);
    Age += DeltaSeconds;
    const FVector From = GetActorLocation(), To = From + Velocity * DeltaSeconds;
    FHitResult Hit;
    FCollisionQueryParams Q(SCENE_QUERY_STAT(Ember), false, this);
    if (Thrower) Q.AddIgnoredActor(Thrower);
    FCollisionObjectQueryParams Objects;
    Objects.AddObjectTypesToQuery(ECC_WorldStatic);
    Objects.AddObjectTypesToQuery(ECC_WorldDynamic);
    Objects.AddObjectTypesToQuery(ECC_Pawn);
    // a small sphere sweep: grazing your shoulder counts, so dodging must be a real sidestep
    if (GetWorld()->SweepSingleByObjectType(Hit, From, To, FQuat::Identity, Objects, FCollisionShape::MakeSphere(14.f), Q))
    {
        if (AFirebirdCharacter* P = Cast<AFirebirdCharacter>(Hit.GetActor())) P->Hurt(Damage, From - Velocity.GetSafeNormal() * 300.f);
        AFBFx::Burst(GetWorld(), Hit.ImpactPoint, 8, FB::Crimson, 380.f, 0.35f, 6.f, 800.f, 10.f);
        Destroy();
        return;
    }
    SetActorLocation(To);
    TrailT -= DeltaSeconds;
    if (TrailT <= 0.f)
    {
        TrailT = 0.03f;
        AFBFx::Spawn(GetWorld(), From, FRotator::ZeroRotator, FVector(10.f), FB::Crimson, 8.f, 0.25f, 0.f, 0.f, FVector(0, 0, 40), 0.f, true);
    }
    if (Age > 4.f) Destroy();
}
