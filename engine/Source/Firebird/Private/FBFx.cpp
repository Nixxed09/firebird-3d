#include "FBFx.h"
#include "Firebird.h"
#include "Components/StaticMeshComponent.h"
#include "Components/PointLightComponent.h"
#include "Materials/MaterialInstanceDynamic.h"
#include "Engine/World.h"

AFBFx::AFBFx()
{
    PrimaryActorTick.bCanEverTick = true;
    Mesh = CreateDefaultSubobject<UStaticMeshComponent>(TEXT("Mesh"));
    Mesh->SetCollisionEnabled(ECollisionEnabled::NoCollision);
    Mesh->SetCastShadow(false);
    Mesh->SetMobility(EComponentMobility::Movable);
    RootComponent = Mesh;
    Light = CreateDefaultSubobject<UPointLightComponent>(TEXT("Light"));
    Light->SetupAttachment(Mesh);
    Light->SetCastShadows(false);
    Light->SetIntensityUnits(ELightUnits::Candelas);   // every light in the slice is in candelas
    Light->SetIntensity(0.f);
    Light->SetMobility(EComponentMobility::Movable);
}

AFBFx* AFBFx::Spawn(UWorld* World, const FVector& At, const FRotator& Rot, const FVector& Size, const FLinearColor& Color,
                    float Emissive, float InLife, float InLight, float LightRadius, const FVector& InVelocity, float InGravity, bool bSphere)
{
    if (!World) return nullptr;
    FActorSpawnParameters P;
    P.SpawnCollisionHandlingOverride = ESpawnActorCollisionHandlingMethod::AlwaysSpawn;
    AFBFx* F = World->SpawnActor<AFBFx>(AFBFx::StaticClass(), At, Rot, P);
    if (!F) return nullptr;
    F->Mesh->SetStaticMesh(bSphere ? FB::Sphere() : FB::Cube());
    F->Mat = FB::MakeGlow(F, Color, Emissive);
    F->Mesh->SetMaterial(0, F->Mat);
    F->Scale0 = Size / 100.f;
    F->Mesh->SetWorldScale3D(F->Scale0);
    F->Life = FMath::Max(0.02f, InLife);
    F->Emissive0 = Emissive;
    F->Velocity = InVelocity;
    F->Gravity = InGravity;
    F->Light0 = InLight;
    if (InLight > 0.f)
    {
        F->Light->SetLightColor(Color);
        F->Light->SetIntensity(InLight);
        F->Light->SetAttenuationRadius(LightRadius);
        // the light shouldn't inherit the mesh's (tiny or stretched) scale
        F->Light->SetUsingAbsoluteScale(true);
        F->Light->SetVolumetricScatteringIntensity(0.25f);
    }
    return F;
}

void AFBFx::Burst(UWorld* World, const FVector& At, int32 N, const FLinearColor& Color, float Speed, float InLife, float Size, float InGravity, float Emissive)
{
    for (int32 i = 0; i < N; ++i)
    {
        FVector Dir = FMath::VRand();
        Dir.Z = FMath::Abs(Dir.Z) * 0.8f + 0.2f;
        const float S = Size * FMath::FRandRange(0.6f, 1.3f);
        Spawn(World, At + Dir * 10.f, FRotator(FMath::FRandRange(0.f, 360.f), FMath::FRandRange(0.f, 360.f), 0.f), FVector(S), Color, Emissive,
              InLife * FMath::FRandRange(0.7f, 1.3f), i == 0 ? 250.f : 0.f, 700.f, Dir * Speed * FMath::FRandRange(0.5f, 1.f), InGravity);
    }
}

void AFBFx::Tick(float DeltaSeconds)
{
    Super::Tick(DeltaSeconds);
    Age += DeltaSeconds;
    const float K = FMath::Clamp(1.f - Age / Life, 0.f, 1.f);
    Velocity.Z -= Gravity * DeltaSeconds;
    Velocity *= FMath::Exp(-DeltaSeconds * 1.5f);   // air drag
    AddActorWorldOffset(Velocity * DeltaSeconds);
    Mesh->SetWorldScale3D(Scale0 * (0.35f + 0.65f * K));
    if (Mat) Mat->SetScalarParameterValue(TEXT("Emissive"), Emissive0 * K);
    if (Light0 > 0.f) Light->SetIntensity(Light0 * K * K);
    if (Age >= Life) Destroy();
}
