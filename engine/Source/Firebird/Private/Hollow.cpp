#include "Hollow.h"
#include "Firebird.h"
#include "FBFx.h"
#include "FirebirdCharacter.h"
#include "EmberProjectile.h"
#include "AIController.h"
#include "Components/CapsuleComponent.h"
#include "Components/PointLightComponent.h"
#include "Components/StaticMeshComponent.h"
#include "GameFramework/CharacterMovementComponent.h"
#include "Kismet/GameplayStatics.h"
#include "Materials/MaterialInstanceDynamic.h"

AHollow::AHollow()
{
    PrimaryActorTick.bCanEverTick = true;
    GetCapsuleComponent()->InitCapsuleSize(40.f, 92.f);
    AutoPossessAI = EAutoPossessAI::PlacedInWorldOrSpawned;
    AIControllerClass = AAIController::StaticClass();
    bUseControllerRotationYaw = false;
    UCharacterMovementComponent* M = GetCharacterMovement();
    M->MaxWalkSpeed = Speed;
    M->bOrientRotationToMovement = false;
    M->GravityScale = 1.6f;
    Core = CreateDefaultSubobject<UPointLightComponent>(TEXT("Core"));
    Core->SetupAttachment(GetCapsuleComponent());
    Core->SetRelativeLocation(FVector(40.f, 0.f, 20.f));
    Core->SetIntensityUnits(ELightUnits::Candelas);
    Core->SetIntensity(30.f);
    Core->SetAttenuationRadius(350.f);
    Core->SetLightColor(FB::Crimson);
    Core->SetCastShadows(false);
    Core->SetVolumetricScatteringIntensity(0.25f);   // a glow around it, not a white dome in the fog
}

void AHollow::BeginPlay()
{
    Super::BeginPlay();
    Hp = MaxHp;
    GetCharacterMovement()->MaxWalkSpeed = Speed;
    // the shell: hunched cracked ash, with a crimson seam down the chest (style guide)
    ShellMat = FB::MakeSurface(this, FB::Ash * 1.4f, 0.f, 0.95f);
    SeamMat = FB::MakeGlow(this, FB::Crimson, 6.f);
    USceneComponent* Root = GetCapsuleComponent();
    Torso = FB::AddPart(this, Root, TEXT("Torso"), FVector(46, 58, 92), FVector(0, 0, -6), ShellMat);
    Torso->SetRelativeRotation(FRotator(-12.f, 0.f, 0.f));   // hunched forward
    Head = FB::AddPart(this, Root, TEXT("Head"), FVector(34, 34, 34), FVector(14, 0, 54), ShellMat);
    ArmL = FB::AddPart(this, Root, TEXT("ArmL"), FVector(20, 18, 74), FVector(6, -42, -10), ShellMat);
    ArmR = FB::AddPart(this, Root, TEXT("ArmR"), FVector(20, 18, 74), FVector(6, 42, -10), ShellMat);
    FB::AddPart(this, Root, TEXT("LegL"), FVector(20, 20, 50), FVector(0, -16, -66), ShellMat);
    FB::AddPart(this, Root, TEXT("LegR"), FVector(20, 20, 50), FVector(0, 16, -66), ShellMat);
    Seam = FB::AddPart(this, Root, TEXT("Seam"), FVector(4, 8, 70), FVector(25, 0, -2), SeamMat);
    Seam->SetRelativeRotation(FRotator(-12.f, 0.f, 0.f));
    FB::AddPart(this, Root, TEXT("Eye"), FVector(4, 26, 5), FVector(32, 0, 58), SeamMat);   // the eye slit
    AttackCooldown = FMath::FRandRange(1.2f, 2.2f);
}

void AHollow::SetSeams(const FLinearColor& Color, float Emissive, float LightIntensity)
{
    if (SeamMat)
    {
        SeamMat->SetVectorParameterValue(TEXT("Color"), Color);
        SeamMat->SetScalarParameterValue(TEXT("Emissive"), Emissive);
    }
    Core->SetLightColor(Color);
    Core->SetIntensity(LightIntensity);
}

void AHollow::ResetArms()
{
    ArmL->SetRelativeRotation(FRotator::ZeroRotator);
    ArmR->SetRelativeRotation(FRotator::ZeroRotator);
    ArmL->SetRelativeLocation(FVector(6, -42, -10));
    ArmR->SetRelativeLocation(FVector(6, 42, -10));
}

bool AHollow::SeesPlayer(const AFirebirdCharacter* P) const
{
    if (!P) return false;
    FHitResult Hit;
    FCollisionQueryParams Q(SCENE_QUERY_STAT(HollowSight), false, this);
    Q.AddIgnoredActor(P);
    const FVector Eye = GetActorLocation() + FVector(0, 0, 60);
    return !GetWorld()->LineTraceSingleByChannel(Hit, Eye, P->GetActorLocation() + FVector(0, 0, 50), ECC_WorldStatic, Q);
}

void AHollow::Tick(float DeltaSeconds)
{
    Super::Tick(DeltaSeconds);
    if (State == EHollowState::Gone)
    {
        GoneT += DeltaSeconds;
        if (GoneT > 0.05f) Destroy();
        return;
    }
    AFirebirdCharacter* P = Cast<AFirebirdCharacter>(UGameplayStatics::GetPlayerCharacter(this, 0));
    if (!P) return;

    FlashT = FMath::Max(0.f, FlashT - DeltaSeconds);
    Bob += DeltaSeconds;
    const FVector To = P->GetActorLocation() - GetActorLocation();
    const float Dist = To.Size2D();
    const FVector Dir2D = FVector(To.X, To.Y, 0.f).GetSafeNormal();
    const bool bSees = SeesPlayer(P);

    // face the player (slowly while cracked)
    const FRotator Want = Dir2D.Rotation();
    SetActorRotation(FMath::RInterpTo(GetActorRotation(), FRotator(0, Want.Yaw, 0), DeltaSeconds, State == EHollowState::Cracked ? 1.f : 8.f));

    // the shell flashes white on a hit
    if (ShellMat) ShellMat->SetVectorParameterValue(TEXT("Color"), FMath::Lerp(FB::Ash * 1.4f, FLinearColor(3.f, 2.6f, 2.2f), FlashT / 0.08f));

    switch (State)
    {
    case EHollowState::Idle:
        // it wakes when it sees you (or on the first hit: TakeHit)
        if (!P->bDead && Dist < WakeRange && bSees) { bAwake = true; State = EHollowState::Chase; }
        SetSeams(FB::Crimson, 3.f + FMath::Sin(Bob * 2.f), 25.f);
        break;

    case EHollowState::Chase:
    {
        // keep a throwing distance: close in, back off, strafe in between
        StrafeT -= DeltaSeconds;
        if (StrafeT <= 0.f) { StrafeT = FMath::FRandRange(1.0f, 2.0f); StrafeDir = FMath::RandBool() ? 1.f : -1.f; }
        FVector Move = FVector::ZeroVector;
        if (Dist > 1100.f || !bSees) Move = Dir2D;
        else if (Dist < 550.f) Move = -Dir2D;
        else Move = FVector::CrossProduct(Dir2D, FVector::UpVector) * StrafeDir * 0.8f;
        AddMovementInput(Move);
        SetSeams(FB::Crimson, 4.f + FMath::Sin(Bob * 3.f), 30.f);
        AttackCooldown -= DeltaSeconds;
        if (AttackCooldown <= 0.f && bSees && !bHoldFire && !P->bDead && Dist < 2400.f)
        {
            State = EHollowState::Windup;
            WindupT = 0.f;
        }
        break;
    }

    case EHollowState::Windup:
    {
        // the tell: it stops, raises its arms, the seams flare
        WindupT += DeltaSeconds;
        const float K = FMath::Clamp(WindupT / WindupTime, 0.f, 1.f);
        ArmL->SetRelativeRotation(FRotator(0.f, 0.f, -70.f * K));
        ArmR->SetRelativeRotation(FRotator(0.f, 0.f, 70.f * K));
        ArmL->SetRelativeLocation(FVector(6, -42, -10 + 40 * K));
        ArmR->SetRelativeLocation(FVector(6, 42, -10 + 40 * K));
        SetSeams(FB::Crimson, 4.f + 10.f * K, 25.f + 120.f * K * K);
        if (WindupT >= WindupTime)
        {
            Throw();
            ResetArms();
            AttackCooldown = FMath::FRandRange(1.8f, 2.8f);
            State = EHollowState::Chase;
        }
        break;
    }

    case EHollowState::Cracked:
    {
        // staggered: it sways, and gold light leaks out through the seams
        CrackT -= DeltaSeconds;
        const float Pulse = 0.5f + 0.5f * FMath::Sin(Bob * 14.f);
        SetSeams(FB::Amber, 4.f + 4.f * Pulse, 35.f + 35.f * Pulse);   // readable, not blinding (Gate 5)
        Torso->SetRelativeRotation(FRotator(-12.f + 6.f * FMath::Sin(Bob * 5.f), 0.f, 8.f * FMath::Sin(Bob * 3.f)));
        if (CrackT <= 0.f)
        {
            // it reseals and fights on; any hit while it's this weak cracks it again
            Torso->SetRelativeRotation(FRotator(-12.f, 0.f, 0.f));
            State = EHollowState::Chase;
            AttackCooldown = 0.8f;
        }
        break;
    }
    default: break;
    }
}

void AHollow::Throw()
{
    AFirebirdCharacter* P = Cast<AFirebirdCharacter>(UGameplayStatics::GetPlayerCharacter(this, 0));
    if (!P) return;
    const FVector From = GetActorLocation() + GetActorForwardVector() * 50.f + FVector(0, 0, 70.f);
    const FVector Target = P->GetActorLocation() + FVector(0, 0, 30.f);   // aims where you are: strafing dodges it
    AEmberProjectile::Launch(GetWorld(), From, (Target - From).GetSafeNormal() * EmberSpeed, this, FMath::FRandRange(8.f, 20.f));
}

bool AHollow::TakeHit(float Damage, const FVector& FromDir, bool bMelee, AFirebirdCharacter* By)
{
    if (State == EHollowState::Gone) return false;
    bAwake = true;
    FlashT = 0.08f;
    if (State == EHollowState::Cracked && bMelee)
    {
        Break(true, By);   // the release
        return true;
    }
    Hp -= Damage;
    // knockback: the fist shoves hard, sparks barely nudge
    LaunchCharacter(FromDir.GetSafeNormal2D() * (bMelee ? 650.f : 140.f) + FVector(0, 0, bMelee ? 160.f : 0.f), true, false);
    AFBFx::Burst(GetWorld(), GetActorLocation() + FVector(0, 0, 30), 5, FB::Ash * 3.f, 350.f, 0.5f, 8.f, 900.f, 0.2f);   // ash chips
    if (Hp <= 0.f)
    {
        Break(false, By);
        return true;
    }
    if (Hp <= CrackBelow)
    {
        // the shell cracks: a window for the Ember Fist
        if (State != EHollowState::Cracked) AFBFx::Burst(GetWorld(), GetActorLocation() + FVector(0, 0, 40), 6, FB::Amber, 300.f, 0.4f, 6.f, -200.f, 8.f);
        State = EHollowState::Cracked;
        CrackT = CrackTime;
        ResetArms();
    }
    else if (State == EHollowState::Windup && bMelee)
    {
        ResetArms();
        State = EHollowState::Chase;   // a punch interrupts the throw
        AttackCooldown = 1.0f;
    }
    else if (State == EHollowState::Idle) State = EHollowState::Chase;
    return false;
}

void AHollow::Break(bool bReleased, AFirebirdCharacter* By)
{
    const FVector At = GetActorLocation();
    if (bReleased)
    {
        // the light inside goes up: a gold column of motes, and a flash that lights the room
        AFBFx::Burst(GetWorld(), At + FVector(0, 0, 20), 26, FB::Amber, 420.f, 1.4f, 7.f, -500.f, 4.f);
        AFBFx::Burst(GetWorld(), At + FVector(0, 0, 20), 10, FLinearColor(1.f, 0.95f, 0.8f), 250.f, 1.8f, 5.f, -700.f, 5.f);
        AFBFx::Spawn(GetWorld(), At + FVector(0, 0, 40), FRotator::ZeroRotator, FVector(30.f), FB::Amber, 6.f, 0.35f, 400.f, 1000.f, FVector(0, 0, 200), 0.f, true);
    }
    else
    {
        // broken by shots: the shell crumbles to ash, and a smaller light escapes
        AFBFx::Burst(GetWorld(), At, 18, FB::Ash * 3.f, 420.f, 0.9f, 12.f, 900.f, 0.3f);
        AFBFx::Burst(GetWorld(), At + FVector(0, 0, 30), 6, FB::Amber, 300.f, 0.9f, 6.f, -400.f, 8.f);
    }
    if (By) By->KillMarker = 0.35f;
    State = EHollowState::Gone;
    SetActorEnableCollision(false);
    SetActorHiddenInGame(true);
    UE_LOG(LogFirebird, Display, TEXT("FB_EVENT hollow_%s at (%.0f, %.0f)"), bReleased ? TEXT("released") : TEXT("broken"), At.X, At.Y);
}
