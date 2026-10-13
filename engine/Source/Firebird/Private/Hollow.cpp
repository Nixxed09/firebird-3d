#include "Hollow.h"
#include "Firebird.h"
#include "FBFx.h"
#include "FirebirdCharacter.h"
#include "EmberProjectile.h"
#include "FBAudio.h"
#include "AIController.h"
#include "Components/CapsuleComponent.h"
#include "Components/PointLightComponent.h"
#include "Components/StaticMeshComponent.h"
#include "EngineUtils.h"
#include "GameFramework/CharacterMovementComponent.h"
#include "Materials/MaterialInstanceDynamic.h"
#include "Net/UnrealNetwork.h"

AHollow::AHollow()
{
    PrimaryActorTick.bCanEverTick = true;
    GetCapsuleComponent()->InitCapsuleSize(40.f, 92.f);
    AutoPossessAI = EAutoPossessAI::PlacedInWorldOrSpawned;
    AIControllerClass = AAIController::StaticClass();
    bUseControllerRotationYaw = false;
    bReplicates = true;
    SetNetUpdateFrequency(30.f);
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

void AHollow::GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& OutLifetimeProps) const
{
    Super::GetLifetimeReplicatedProps(OutLifetimeProps);
    DOREPLIFETIME(AHollow, State);
    DOREPLIFETIME(AHollow, WindupT);
}

void AHollow::BeginPlay()
{
    Super::BeginPlay();
    Hp = MaxHp;
    GetCharacterMovement()->MaxWalkSpeed = Speed;
    BuildShell();
    AttackCooldown = FMath::FRandRange(1.2f, 2.2f);
}

// the shell: hunched cracked ash, with a crimson seam down the chest (style guide)
void AHollow::BuildShell()
{
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
    if (!ArmL) return;
    ArmL->SetRelativeRotation(FRotator::ZeroRotator);
    ArmR->SetRelativeRotation(FRotator::ZeroRotator);
    ArmL->SetRelativeLocation(FVector(6, -42, -10));
    ArmR->SetRelativeLocation(FVector(6, 42, -10));
}

AFirebirdCharacter* AHollow::NearestPlayer(float& OutDist) const
{
    AFirebirdCharacter* Best = nullptr;
    OutDist = BIG_NUMBER;
    for (TActorIterator<AFirebirdCharacter> It(GetWorld()); It; ++It)
    {
        if (It->bDead) continue;
        const float D = FVector::Dist2D(It->GetActorLocation(), GetActorLocation());
        if (D < OutDist) { OutDist = D; Best = *It; }
    }
    return Best;
}

bool AHollow::Sees(const AFirebirdCharacter* P) const
{
    if (!P) return false;
    FHitResult Hit;
    FCollisionQueryParams Q(SCENE_QUERY_STAT(HollowSight), false, this);
    for (TActorIterator<AFirebirdCharacter> It(GetWorld()); It; ++It) Q.AddIgnoredActor(*It);
    const FVector Eye = GetActorLocation() + FVector(0, 0, 60);
    return !GetWorld()->LineTraceSingleByChannel(Hit, Eye, P->GetActorLocation() + FVector(0, 0, 50), ECC_WorldStatic, Q);
}

void AHollow::Tick(float DeltaSeconds)
{
    Super::Tick(DeltaSeconds);
    if (State == EHollowState::Gone)
    {
        // linger a moment so every computer gets the break before it disappears
        if (!bBrokenFx) { bBrokenFx = true; SetActorHiddenInGame(true); }
        GoneT += DeltaSeconds;
        if (HasAuthority() && GoneT > 0.5f) Destroy();
        return;
    }
    Bob += DeltaSeconds;
    FlashT = FMath::Max(0.f, FlashT - DeltaSeconds);
    if (HasAuthority()) Think(DeltaSeconds);
    Draw(DeltaSeconds);
}

// host: who to fight, where to stand, when to throw, when the crack closes
void AHollow::Think(float DeltaSeconds)
{
    float Dist = 0.f;
    AFirebirdCharacter* P = NearestPlayer(Dist);
    if (!P) return;
    const FVector To = P->GetActorLocation() - GetActorLocation();
    const FVector Dir2D = FVector(To.X, To.Y, 0.f).GetSafeNormal();
    const bool bSees = Sees(P);
    SetActorRotation(FMath::RInterpTo(GetActorRotation(), FRotator(0, Dir2D.Rotation().Yaw, 0), DeltaSeconds, State == EHollowState::Cracked ? 1.f : 8.f));

    switch (State)
    {
    case EHollowState::Idle:
        if (Dist < WakeRange && bSees) { bAwake = true; State = EHollowState::Chase; }
        break;

    case EHollowState::Chase:
    {
        // keep a throwing distance: close in, back off, strafe in between
        StrafeT -= DeltaSeconds;
        if (StrafeT <= 0.f) { StrafeT = FMath::FRandRange(1.0f, 2.0f); StrafeDir = FMath::RandBool() ? 1.f : -1.f; }
        FVector Move;
        if (Dist > 1100.f || !bSees) Move = Dir2D;
        else if (Dist < 550.f) Move = -Dir2D;
        else Move = FVector::CrossProduct(Dir2D, FVector::UpVector) * StrafeDir * 0.8f;
        AddMovementInput(Move);
        AttackCooldown -= DeltaSeconds;
        if (AttackCooldown <= 0.f && bSees && !bHoldFire && Dist < 2400.f)
        {
            State = EHollowState::Windup;
            WindupT = 0.f;
        }
        break;
    }

    case EHollowState::Windup:
        WindupT += DeltaSeconds;
        if (WindupT >= WindupTime)
        {
            Throw(P);
            AttackCooldown = FMath::FRandRange(1.8f, 2.8f) / Aggression;
            State = EHollowState::Chase;
            WindupT = 0.f;
        }
        break;

    case EHollowState::Cracked:
        CrackT -= DeltaSeconds;
        if (CrackT <= 0.f)
        {
            // it reseals and fights on; any hit while it's this weak cracks it again
            State = EHollowState::Chase;
            AttackCooldown = 0.8f;
        }
        break;
    default: break;
    }
}

// everyone: arms, seams and sway read straight from the state
void AHollow::Draw(float DeltaSeconds)
{
    if (!ShellMat) return;
    // the tell has a sound too: a rising rasp you can hear across the arena
    if (State == EHollowState::Windup && LastDrawnState != EHollowState::Windup) FB::Sound(this, TEXT("hollow_windup"), GetActorLocation());
    LastDrawnState = State;
    ShellMat->SetVectorParameterValue(TEXT("Color"), FMath::Lerp(FB::Ash * 1.4f, FLinearColor(3.f, 2.6f, 2.2f), FlashT / 0.08f));
    switch (State)
    {
    case EHollowState::Windup:
    {
        // the tell: it stops, raises its arms, the seams flare
        const float K = FMath::Clamp(WindupT / WindupTime, 0.f, 1.f);
        ArmL->SetRelativeRotation(FRotator(0.f, 0.f, -70.f * K));
        ArmR->SetRelativeRotation(FRotator(0.f, 0.f, 70.f * K));
        ArmL->SetRelativeLocation(FVector(6, -42, -10 + 40 * K));
        ArmR->SetRelativeLocation(FVector(6, 42, -10 + 40 * K));
        SetSeams(FB::Crimson, 4.f + 10.f * K, 25.f + 120.f * K * K);
        Torso->SetRelativeRotation(FRotator(-12.f, 0.f, 0.f));
        break;
    }
    case EHollowState::Cracked:
    {
        // staggered: it sways, and gold light leaks out through the seams
        const float Pulse = 0.5f + 0.5f * FMath::Sin(Bob * 14.f);
        ResetArms();
        SetSeams(FB::Amber, 4.f + 4.f * Pulse, 35.f + 35.f * Pulse);   // readable, not blinding (Gate 5)
        Torso->SetRelativeRotation(FRotator(-12.f + 6.f * FMath::Sin(Bob * 5.f), 0.f, 8.f * FMath::Sin(Bob * 3.f)));
        break;
    }
    default:
        ResetArms();
        Torso->SetRelativeRotation(FRotator(-12.f, 0.f, 0.f));
        SetSeams(FB::Crimson, State == EHollowState::Idle ? 3.f + FMath::Sin(Bob * 2.f) : 4.f + FMath::Sin(Bob * 3.f), State == EHollowState::Idle ? 25.f : 30.f);
        break;
    }
}

void AHollow::Throw(AFirebirdCharacter* Target)
{
    const FVector From = GetActorLocation() + GetActorForwardVector() * 50.f + FVector(0, 0, 70.f);
    const FVector Aim = Target->GetActorLocation() + FVector(0, 0, 30.f);   // aims where you are: strafing dodges it
    AEmberProjectile::Launch(GetWorld(), From, (Aim - From).GetSafeNormal() * EmberSpeed, this, FMath::FRandRange(8.f, 20.f));
}

bool AHollow::TakeHit(float Damage, const FVector& FromDir, bool bMelee, AFirebirdCharacter* By)
{
    if (!HasAuthority() || State == EHollowState::Gone) return false;
    bAwake = true;
    if (State == EHollowState::Cracked && bMelee)
    {
        Break(true);   // the release
        return true;
    }
    Hp -= Damage;
    Multi_Hit(bMelee);
    // knockback: the fist shoves hard, sparks barely nudge
    LaunchCharacter(FromDir.GetSafeNormal2D() * (bMelee ? 650.f : 140.f) + FVector(0, 0, bMelee ? 160.f : 0.f), true, false);
    if (Hp <= 0.f)
    {
        Break(false);
        return true;
    }
    if (Hp <= CrackBelow)
    {
        // the shell cracks: a window for the Ember Fist
        if (State != EHollowState::Cracked) Multi_Cracked();
        State = EHollowState::Cracked;
        CrackT = CrackTime;
        WindupT = 0.f;
    }
    else if (State == EHollowState::Windup && bMelee)
    {
        State = EHollowState::Chase;   // a punch interrupts the throw
        AttackCooldown = 1.0f;
        WindupT = 0.f;
    }
    else if (State == EHollowState::Idle) State = EHollowState::Chase;
    return false;
}

void AHollow::Multi_Hit_Implementation(bool bMelee)
{
    FlashT = 0.08f;
    if (bMelee) FB::Sound(this, TEXT("fist_hit"), GetActorLocation());
    AFBFx::Burst(GetWorld(), GetActorLocation() + FVector(0, 0, 30), 5, FB::Ash * 3.f, 350.f, 0.5f, 8.f, 900.f, 0.2f);   // ash chips
}

void AHollow::Multi_Cracked_Implementation()
{
    FB::Sound(this, TEXT("crack"), GetActorLocation());
    AFBFx::Burst(GetWorld(), GetActorLocation() + FVector(0, 0, 40), 6, FB::Amber, 300.f, 0.4f, 6.f, -200.f, 8.f);
}

void AHollow::Break(bool bReleased)
{
    Multi_Break(bReleased);
    State = EHollowState::Gone;
    SetActorEnableCollision(false);
    const FVector At = GetActorLocation();
    UE_LOG(LogFirebird, Display, TEXT("FB_EVENT hollow_%s at (%.0f, %.0f)"), bReleased ? TEXT("released") : TEXT("broken"), At.X, At.Y);
}

void AHollow::Multi_Break_Implementation(bool bReleased)
{
    const FVector At = GetActorLocation();
    FB::Sound(this, bReleased ? TEXT("release") : TEXT("hollow_break"), At);
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
    bBrokenFx = true;
    SetActorHiddenInGame(true);
}
