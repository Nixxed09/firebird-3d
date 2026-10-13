#include "EmberProjectile.h"
#include "Firebird.h"
#include "FBFx.h"
#include "FirebirdCharacter.h"
#include "Components/StaticMeshComponent.h"
#include "Components/PointLightComponent.h"
#include "Engine/World.h"
#include "Net/UnrealNetwork.h"

AEmberProjectile::AEmberProjectile()
{
    PrimaryActorTick.bCanEverTick = true;
    bReplicates = true;
    SetReplicateMovement(false);
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

void AEmberProjectile::GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& OutLifetimeProps) const
{
    Super::GetLifetimeReplicatedProps(OutLifetimeProps);
    DOREPLIFETIME_CONDITION(AEmberProjectile, Velocity, COND_InitialOnly);
}

AEmberProjectile* AEmberProjectile::Launch(UWorld* World, const FVector& From, const FVector& InVelocity, AActor* InThrower, float InDamage)
{
    FActorSpawnParameters P;
    P.SpawnCollisionHandlingOverride = ESpawnActorCollisionHandlingMethod::AlwaysSpawn;
    P.bDeferConstruction = true;
    AEmberProjectile* E = World->SpawnActor<AEmberProjectile>(AEmberProjectile::StaticClass(), From, InVelocity.Rotation(), P);
    if (!E) return nullptr;
    E->Velocity = InVelocity;
    E->Thrower = InThrower;
    E->Damage = InDamage;
    E->FinishSpawning(FTransform(InVelocity.Rotation(), From));
    return E;
}

void AEmberProjectile::BeginPlay()
{
    Super::BeginPlay();
    Mesh->SetStaticMesh(FB::Sphere());
    Mesh->SetMaterial(0, FB::MakeGlow(this, FB::Crimson, 14.f));
}

void AEmberProjectile::Multi_Impact_Implementation(FVector_NetQuantize At)
{
    AFBFx::Burst(GetWorld(), At, 8, FB::Crimson, 380.f, 0.35f, 6.f, 800.f, 10.f);
    bDone = true;
    SetActorHiddenInGame(true);
}

void AEmberProjectile::Tick(float DeltaSeconds)
{
    Super::Tick(DeltaSeconds);
    if (bDone) return;
    Age += DeltaSeconds;
    const FVector From = GetActorLocation(), To = From + Velocity * DeltaSeconds;
    if (HasAuthority())
    {
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
            Multi_Impact(Hit.ImpactPoint);
            bDone = true;
            SetLifeSpan(0.3f);   // long enough for the impact to reach every computer
            return;
        }
        if (Age > 4.f) { Destroy(); return; }
    }
    SetActorLocation(To);
    TrailT -= DeltaSeconds;
    if (TrailT <= 0.f)
    {
        TrailT = 0.03f;
        AFBFx::Spawn(GetWorld(), From, FRotator::ZeroRotator, FVector(10.f), FB::Crimson, 8.f, 0.25f, 0.f, 0.f, FVector(0, 0, 40), 0.f, true);
    }
}
