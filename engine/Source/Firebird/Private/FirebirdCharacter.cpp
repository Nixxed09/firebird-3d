#include "FirebirdCharacter.h"
#include "Firebird.h"
#include "FBFx.h"
#include "Hollow.h"
#include "Camera/CameraComponent.h"
#include "Components/CapsuleComponent.h"
#include "Components/PointLightComponent.h"
#include "Components/StaticMeshComponent.h"
#include "EngineUtils.h"
#include "GameFramework/CharacterMovementComponent.h"
#include "GameFramework/PlayerController.h"
#include "Kismet/GameplayStatics.h"
#include "Misc/App.h"

AFirebirdCharacter::AFirebirdCharacter()
{
    PrimaryActorTick.bCanEverTick = true;
    GetCapsuleComponent()->InitCapsuleSize(34.f, 92.f);
    bUseControllerRotationYaw = true;

    UCharacterMovementComponent* M = GetCharacterMovement();
    M->GetNavAgentPropertiesRef().bCanCrouch = true;
    M->SetCrouchedHalfHeight(46.f);
    M->bCanWalkOffLedgesWhenCrouching = true;
    M->MaxWalkSpeed = RunSpeed;
    M->MaxWalkSpeedCrouched = 360.f;
    M->MaxAcceleration = 7000.f;               // Doom-snappy: full speed in ~0.15 s
    M->BrakingDecelerationWalking = 5000.f;
    M->GroundFriction = 9.f;
    M->AirControl = 0.55f;
    M->GravityScale = Gravity;
    M->JumpZVelocity = JumpSpeed;
    M->MaxStepHeight = 45.f;
    M->SetWalkableFloorAngle(50.f);

    Camera = CreateDefaultSubobject<UCameraComponent>(TEXT("Camera"));
    Camera->SetupAttachment(GetCapsuleComponent());
    Camera->SetRelativeLocation(FVector(0.f, 0.f, CamZ));
    Camera->bUsePawnControlRotation = true;
    Camera->SetFieldOfView(Fov);

    ViewRig = CreateDefaultSubobject<USceneComponent>(TEXT("ViewRig"));
    ViewRig->SetupAttachment(Camera);

    MuzzleLight = CreateDefaultSubobject<UPointLightComponent>(TEXT("MuzzleLight"));
    MuzzleLight->SetupAttachment(ViewRig);
    MuzzleLight->SetRelativeLocation(FVector(70.f, 16.f, -12.f));
    MuzzleLight->SetIntensityUnits(ELightUnits::Candelas);
    MuzzleLight->SetIntensity(0.f);
    MuzzleLight->SetAttenuationRadius(900.f);
    MuzzleLight->SetLightColor(FB::Aether);
    MuzzleLight->SetCastShadows(false);

    FistLight = CreateDefaultSubobject<UPointLightComponent>(TEXT("FistLight"));
    FistLight->SetupAttachment(ViewRig);
    FistLight->SetRelativeLocation(FVector(60.f, -14.f, -16.f));
    FistLight->SetIntensityUnits(ELightUnits::Candelas);
    FistLight->SetIntensity(0.f);
    FistLight->SetAttenuationRadius(600.f);
    FistLight->SetLightColor(FB::Orange);
    FistLight->SetCastShadows(false);
}

void AFirebirdCharacter::BeginPlay()
{
    Super::BeginPlay();
    // the Spark Caster, built from brass, copper coils and an aether crystal (STYLE_GUIDE: no real-gun shapes)
    UMaterialInterface* BrassM = FB::MakeSurface(this, FB::Brass, 0.f, 0.35f, 0.9f);
    UMaterialInterface* CopperM = FB::MakeSurface(this, FLinearColor(0.75f, 0.32f, 0.16f), 0.f, 0.3f, 0.9f);
    UMaterialInterface* DarkM = FB::MakeSurface(this, FB::Basalt * 2.f, 0.f, 0.8f);
    GunBody = FB::AddPart(this, ViewRig, TEXT("GunBody"), FVector(30, 4.5f, 6), FVector(44, 15, -15), BrassM);
    FB::AddPart(this, ViewRig, TEXT("GunGrip"), FVector(6, 4, 10), FVector(34, 15, -21), DarkM)->SetRelativeRotation(FRotator(-15, 0, 0));
    GunCoil = FB::AddPart(this, ViewRig, TEXT("Coil1"), FVector(2, 7, 8), FVector(50, 15, -15), CopperM);
    FB::AddPart(this, ViewRig, TEXT("Coil2"), FVector(2, 7, 8), FVector(54, 15, -15), CopperM);
    FB::AddPart(this, ViewRig, TEXT("Coil3"), FVector(2, 7, 8), FVector(58, 15, -15), CopperM);
    GunCrystal = FB::AddPart(this, ViewRig, TEXT("Crystal"), FVector(8, 2.5f, 2.5f), FVector(62, 15, -12.5f), FB::MakeGlow(this, FB::Aether, 6.f));
    // a soft warm fill on the weapon, so it never reads as a black block in shadow
    UPointLightComponent* Fill = NewObject<UPointLightComponent>(this, TEXT("ViewFill"));
    Fill->SetupAttachment(ViewRig);
    Fill->SetRelativeLocation(FVector(25.f, 0.f, 5.f));
    Fill->SetIntensityUnits(ELightUnits::Candelas);
    Fill->SetIntensity(2.f);
    Fill->SetAttenuationRadius(90.f);
    Fill->SetLightColor(FLinearColor(1.f, 0.75f, 0.5f));
    Fill->SetCastShadows(false);
    Fill->RegisterComponent();
    // the Ember Fist: a flame-wrapped glove that punches in from the left
    Fist = FB::AddPart(this, ViewRig, TEXT("Fist"), FVector(14, 11, 11), FVector(22, -18, -22), FB::MakeGlow(this, FB::Orange, 3.f));
    Fist->SetVisibility(false);
    for (UStaticMeshComponent* C : { GunBody, GunCoil, GunCrystal, Fist }) C->SetCastShadow(false);
    Checkpoint = GetActorLocation();
    CheckpointYaw = GetActorRotation().Yaw;
}

float AFirebirdCharacter::HorizontalSpeed() const
{
    return GetVelocity().Size2D();
}

// ---- input --------------------------------------------------------------------------------

void AFirebirdCharacter::ReadInput()
{
    APlayerController* PC = Cast<APlayerController>(GetController());
    if (!PC) return;
    FFirebirdInput I;
    I.Move.Y = (PC->IsInputKeyDown(EKeys::W) ? 1.f : 0.f) - (PC->IsInputKeyDown(EKeys::S) ? 1.f : 0.f);
    I.Move.X = (PC->IsInputKeyDown(EKeys::D) ? 1.f : 0.f) - (PC->IsInputKeyDown(EKeys::A) ? 1.f : 0.f);
    float Mx = 0.f, My = 0.f;
    PC->GetInputMouseDelta(Mx, My);
    const float Sens = 0.11f;
    I.Look = FVector2D(Mx * Sens, My * Sens);
    I.bJump = PC->WasInputKeyJustPressed(EKeys::SpaceBar);
    I.bDash = PC->WasInputKeyJustPressed(EKeys::LeftShift);
    I.bCrouchHeld = PC->IsInputKeyDown(EKeys::LeftControl) || PC->IsInputKeyDown(EKeys::C);
    I.bCrouchPressed = PC->WasInputKeyJustPressed(EKeys::LeftControl) || PC->WasInputKeyJustPressed(EKeys::C);
    I.bFireHeld = PC->IsInputKeyDown(EKeys::LeftMouseButton);
    I.bFist = PC->WasInputKeyJustPressed(EKeys::F) || PC->WasInputKeyJustPressed(EKeys::RightMouseButton);
    Input = I;
    // R: run the course again; Esc: leave (no menus yet in the feel range)
    if (PC->WasInputKeyJustPressed(EKeys::R)) PC->RestartLevel();
    if (PC->WasInputKeyJustPressed(EKeys::Escape)) PC->ConsoleCommand(TEXT("quit"));
}

// ---- the frame ------------------------------------------------------------------------------

void AFirebirdCharacter::Tick(float DeltaSeconds)
{
    Super::Tick(DeltaSeconds);
    UCharacterMovementComponent* M = GetCharacterMovement();

    // hitstop runs on real time, since it is what slows the world down
    if (HitstopReal > 0.f)
    {
        HitstopReal -= FApp::GetDeltaTime();
        if (HitstopReal <= 0.f) UGameplayStatics::SetGlobalTimeDilation(this, 1.f);
    }

    if (!bAutoDriven) ReadInput();
    FFirebirdInput I = Input;
    // one-shot presses are consumed this frame
    Input.bJump = Input.bDash = Input.bFist = Input.bCrouchPressed = false;
    Input.Look = FVector2D::ZeroVector;

    DamageFlash = FMath::Max(0.f, DamageFlash - DeltaSeconds);
    HitMarker = FMath::Max(0.f, HitMarker - DeltaSeconds);
    KillMarker = FMath::Max(0.f, KillMarker - DeltaSeconds);
    ReleaseFlash = FMath::Max(0.f, ReleaseFlash - DeltaSeconds);
    HurtDirT = FMath::Max(0.f, HurtDirT - DeltaSeconds);

    if (bDead)
    {
        DeadT += DeltaSeconds;
        CamZ = FMath::FInterpTo(CamZ, -60.f, DeltaSeconds, 3.f);
        Camera->SetRelativeLocation(FVector(0, 0, CamZ));
        if (DeadT > 1.6f) Respawn();   // retry close and fast (contract F1)
        return;
    }

    // fell into the pit: back to the checkpoint
    if (GetActorLocation().Z < -700.f)
    {
        UE_LOG(LogFirebird, Display, TEXT("FB_EVENT fell"));
        Hurt(15.f, GetActorLocation() + FVector(0, 0, 100));
        if (!bDead) { SetActorLocation(Checkpoint); M->Velocity = FVector::ZeroVector; }
        return;
    }

    // look
    if (AController* C = GetController())
    {
        FRotator R = C->GetControlRotation();
        R.Yaw += I.Look.X;
        R.Pitch = FMath::Clamp(FRotator::NormalizeAxis(R.Pitch + I.Look.Y), -88.f, 88.f);
        C->SetControlRotation(R);
    }
    const FRotator Yaw(0.f, GetControlRotation().Yaw, 0.f);
    const FVector Fwd = Yaw.Vector(), Right = FRotationMatrix(Yaw).GetScaledAxis(EAxis::Y);
    FVector Wish = Fwd * I.Move.Y + Right * I.Move.X;
    if (Wish.SizeSquared() > 1.f) Wish.Normalize();

    // ground and coyote clock
    const bool bGround = M->IsMovingOnGround();
    TimeSinceGrounded = bGround ? 0.f : TimeSinceGrounded + DeltaSeconds;
    JumpBuffer = FMath::Max(0.f, JumpBuffer - DeltaSeconds);

    // dash charges come back one at a time
    DashCharge = FMath::Min((float)DashCharges, DashCharge + DeltaSeconds / DashRecharge);

    if (I.bJump)
    {
        UE_LOG(LogFirebird, Display, TEXT("FB_EVENT jump_pressed ground=%d sliding=%d consumed=%d since_ground=%.3f x=%.0f z=%.0f"), bGround ? 1 : 0, bSliding ? 1 : 0, bJumpConsumed ? 1 : 0, TimeSinceGrounded, GetActorLocation().X, GetActorLocation().Z);
        if (bGround || bSliding || (!bJumpConsumed && TimeSinceGrounded <= CoyoteTime))
        {
            if (!bGround && !bSliding) { CoyoteJumps++; UE_LOG(LogFirebird, Display, TEXT("FB_EVENT coyote_jump late=%.3f"), TimeSinceGrounded); }
            DoJump();
        }
        else JumpBuffer = JumpBufferTime;   // pressed a moment early: jump the instant we land
    }
    if (I.bDash && DashT <= 0.f && DashCharge >= 1.f)
    {
        DashDir = Wish.IsNearlyZero() ? Fwd : Wish.GetSafeNormal();
        StartDash();
    }

    if (DashT > 0.f)
    {
        DashT -= DeltaSeconds;
        M->Velocity = DashDir * DashSpeed;   // a straight, flat burst: in the air it hangs, like Doom Eternal
        if (FMath::FRand() < 0.9f)
            AFBFx::Spawn(GetWorld(), GetActorLocation() + FMath::VRand() * 25.f - FVector(0, 0, 30), FRotator::ZeroRotator, FVector(7.f), FB::Orange, 10.f, 0.35f, 0.f, 0.f, FVector(0, 0, 120), -100.f);
        if (DashT <= 0.f) EndDash();
    }
    else if (bSliding)
    {
        SlideT += DeltaSeconds;
        if (!I.bCrouchHeld || SlideT > SlideMaxTime || HorizontalSpeed() < 450.f || !M->IsMovingOnGround()) EndSlide();
        else
        {
            AddMovementInput(Wish, 0.35f);   // a little steering
            if (FMath::FRand() < 0.5f)
                AFBFx::Spawn(GetWorld(), GetActorLocation() - FVector(0, 0, 40) + FMath::VRand() * 15.f, FRotator::ZeroRotator, FVector(6.f), FB::Amber, 8.f, 0.4f, 0.f, 0.f, -GetVelocity() * 0.2f + FVector(0, 0, 60), 0.f);
        }
    }
    else
    {
        AddMovementInput(Wish);
        if (I.bCrouchPressed && bGround && HorizontalSpeed() > SlideMinSpeed) StartSlide();
        else if (I.bCrouchHeld && !bIsCrouched) Crouch();
        else if (!I.bCrouchHeld && bIsCrouched) UnCrouch();
    }

    // weapons
    SparkCooldown -= DeltaSeconds;
    FistCooldown -= DeltaSeconds;
    if (I.bFist && FistCooldown <= 0.f) Punch();
    else if (I.bFireHeld && SparkCooldown <= 0.f && FistAnim <= 0.3f) FireSpark();

    UpdateView(DeltaSeconds);
}

// ---- movement -------------------------------------------------------------------------------

void AFirebirdCharacter::DoJump()
{
    if (bSliding) EndSlide();
    if (bIsCrouched) UnCrouch();
    LaunchCharacter(FVector(0.f, 0.f, JumpSpeed), false, true);
    bJumpConsumed = true;
    JumpBuffer = 0.f;
}

void AFirebirdCharacter::Landed(const FHitResult& Hit)
{
    Super::Landed(Hit);
    bJumpConsumed = false;
    Shake += FMath::Clamp(-GetVelocity().Z / 2500.f, 0.f, 0.5f);
    if (JumpBuffer > 0.f)
    {
        BufferedJumps++;
        UE_LOG(LogFirebird, Display, TEXT("FB_EVENT buffered_jump"));
        DoJump();
    }
}

void AFirebirdCharacter::StartDash()
{
    UCharacterMovementComponent* M = GetCharacterMovement();
    if (bSliding) EndSlide();
    DashCharge -= 1.f;
    DashT = DashTime;
    Dashes++;
    M->GravityScale = 0.f;
    M->GroundFriction = 0.f;
    M->BrakingDecelerationWalking = 0.f;
    M->Velocity = DashDir * DashSpeed;
    if (M->IsMovingOnGround()) M->SetMovementMode(MOVE_Falling);   // lift off the floor so friction can't eat it
    FovKick += 10.f;
    UE_LOG(LogFirebird, Display, TEXT("FB_EVENT dash charges_left=%.2f"), DashCharge);
}

void AFirebirdCharacter::EndDash()
{
    UCharacterMovementComponent* M = GetCharacterMovement();
    DashT = 0.f;
    M->GravityScale = Gravity;
    M->GroundFriction = 9.f;
    M->BrakingDecelerationWalking = 5000.f;
    M->Velocity = DashDir * DashExitSpeed;
    // crouch held through a dash turns it into a slide the moment you touch down
    if (Input.bCrouchHeld && M->IsMovingOnGround()) StartSlide();
}

void AFirebirdCharacter::StartSlide()
{
    UCharacterMovementComponent* M = GetCharacterMovement();
    bSliding = true;
    SlideT = 0.f;
    Slides++;
    Crouch();
    M->MaxWalkSpeedCrouched = 2600.f;
    M->GroundFriction = 0.4f;
    M->BrakingDecelerationWalking = 450.f;
    M->MaxAcceleration = 500.f;
    const FVector V = GetVelocity();
    const float S = FMath::Max(V.Size2D(), SlideBoost);
    M->Velocity = V.GetSafeNormal2D() * S + FVector(0, 0, V.Z);
    FovKick += 5.f;
    UE_LOG(LogFirebird, Display, TEXT("FB_EVENT slide speed=%.0f"), S);
}

void AFirebirdCharacter::EndSlide()
{
    UCharacterMovementComponent* M = GetCharacterMovement();
    bSliding = false;
    M->MaxWalkSpeedCrouched = 360.f;
    M->GroundFriction = 9.f;
    M->BrakingDecelerationWalking = 5000.f;
    M->MaxAcceleration = 7000.f;
    if (!Input.bCrouchHeld) UnCrouch();   // stays down if you hold crouch or the ceiling is low
}

void AFirebirdCharacter::OnStartCrouch(float HalfHeightAdjust, float ScaledHalfHeightAdjust)
{
    Super::OnStartCrouch(HalfHeightAdjust, ScaledHalfHeightAdjust);
    CamZ += ScaledHalfHeightAdjust;   // the capsule dropped; keep the eye where it was, then ease down
}

void AFirebirdCharacter::OnEndCrouch(float HalfHeightAdjust, float ScaledHalfHeightAdjust)
{
    Super::OnEndCrouch(HalfHeightAdjust, ScaledHalfHeightAdjust);
    CamZ -= ScaledHalfHeightAdjust;
}

// ---- combat ---------------------------------------------------------------------------------

void AFirebirdCharacter::Hitstop(float RealSeconds)
{
    HitstopReal = FMath::Max(HitstopReal, RealSeconds);
    UGameplayStatics::SetGlobalTimeDilation(this, 0.05f);
}

void AFirebirdCharacter::FireSpark()
{
    if (Sparks <= 0) { SparkCooldown = 0.3f; return; }
    Sparks--;
    SparkCooldown = SparkInterval;
    Recoil = 1.f;
    Shake += 0.25f;
    MuzzleLight->SetIntensity(900.f);
    const FVector Eye = Camera->GetComponentLocation();
    const FRotator Aim = GetControlRotation() + FRotator(FMath::FRandRange(-0.5f, 0.5f), FMath::FRandRange(-0.5f, 0.5f), 0.f);
    const FVector End = Eye + Aim.Vector() * 8000.f;
    FHitResult Hit;
    FCollisionQueryParams Q(SCENE_QUERY_STAT(Spark), false, this);
    FCollisionObjectQueryParams Objects;
    Objects.AddObjectTypesToQuery(ECC_WorldStatic);
    Objects.AddObjectTypesToQuery(ECC_WorldDynamic);
    Objects.AddObjectTypesToQuery(ECC_Pawn);
    const bool bHit = GetWorld()->LineTraceSingleByObjectType(Hit, Eye, End, Objects, Q);
    const FVector Impact = bHit ? Hit.ImpactPoint : End;
    // the tracer starts at the crystal, not the eye
    const FVector Muzzle = Camera->GetComponentTransform().TransformPosition(FVector(66.f, 16.f, -12.f));
    const FVector Span = Impact - Muzzle;
    AFBFx::Spawn(GetWorld(), Muzzle + Span * 0.5f, Span.Rotation(), FVector(Span.Size(), 2.5f, 2.5f), FB::Aether, 30.f, 0.06f);
    if (!bHit) return;
    if (AHollow* H = Cast<AHollow>(Hit.GetActor()))
    {
        HitMarker = 0.12f;
        AFBFx::Burst(GetWorld(), Impact, 6, FLinearColor(1.f, 0.9f, 0.7f), 300.f, 0.25f, 4.f, 600.f, 12.f);
        H->TakeHit(FMath::FRandRange(8.f, 14.f), Aim.Vector(), false, this);
    }
    else
    {
        AFBFx::Burst(GetWorld(), Impact + Hit.ImpactNormal * 5.f, 5, FB::Aether, 260.f, 0.25f, 3.f, 700.f, 10.f);
        AFBFx::Spawn(GetWorld(), Impact + Hit.ImpactNormal * 2.f, Hit.ImpactNormal.Rotation(), FVector(1.f, 9.f, 9.f), FB::Orange, 4.f, 2.5f);   // a scorch that cools
    }
}

AHollow* AFirebirdCharacter::ReleaseTarget() const
{
    // generous on purpose (kids play this): a cracked Hollow close by and roughly in front
    AHollow* Best = nullptr;
    float BestD = 300.f;
    const FVector Eye = GetActorLocation();
    const FVector Look = GetControlRotation().Vector().GetSafeNormal2D();
    for (TActorIterator<AHollow> It(GetWorld()); It; ++It)
    {
        AHollow* H = *It;
        if (!H->IsCracked()) continue;
        const FVector To = H->GetActorLocation() - Eye;
        const float D = To.Size2D();
        if (D < BestD && FVector::DotProduct(To.GetSafeNormal2D(), Look) > 0.8f) { Best = H; BestD = D; }
    }
    return Best;
}

void AFirebirdCharacter::Punch()
{
    FistCooldown = FistInterval;
    FistAnim = 1.f;
    FistLight->SetIntensity(300.f);
    const FVector Fwd = GetControlRotation().Vector();
    AHollow* Target = ReleaseTarget();
    if (Target)
    {
        // snap in: the release always connects once you've earned it
        const FVector To = Target->GetActorLocation() - GetActorLocation();
        GetCharacterMovement()->Velocity = To.GetSafeNormal2D() * FMath::Min(1400.f, To.Size2D() * 6.f);
    }
    else
    {
        FHitResult Hit;
        FCollisionQueryParams Q(SCENE_QUERY_STAT(Fist), false, this);
        const FVector Eye = Camera->GetComponentLocation();
        if (GetWorld()->SweepSingleByObjectType(Hit, Eye, Eye + Fwd * FistRange, FQuat::Identity, FCollisionObjectQueryParams(ECC_Pawn), FCollisionShape::MakeSphere(45.f), Q))
            Target = Cast<AHollow>(Hit.GetActor());
    }
    if (!Target) return;
    const bool bRelease = Target->IsCracked();
    Target->TakeHit(FMath::FRandRange(8.f, 24.f), Fwd, true, this);
    Shake += bRelease ? 1.6f : 0.7f;
    if (bRelease)
    {
        const float Before = Health;
        Health = FMath::Min(MaxHealth, Health + ReleaseHeal);
        LastReleaseHeal = Health - Before;
        ReleaseFlash = 0.8f;
        Releases++;
        FovKick += 8.f;
        Hitstop(0.09f);
        UE_LOG(LogFirebird, Display, TEXT("FB_EVENT release heal=%.0f health=%.0f"), LastReleaseHeal, Health);
    }
    else
    {
        HitMarker = 0.12f;
        Hitstop(0.035f);
    }
}

void AFirebirdCharacter::Hurt(float Amount, const FVector& From)
{
    if (bDead) return;
    Health -= Amount;
    DamageFlash = 0.45f;
    LastHurtFrom = From;
    HurtDirT = 1.f;
    Shake += 0.9f;
    UE_LOG(LogFirebird, Display, TEXT("FB_EVENT hurt amount=%.0f health=%.0f"), Amount, Health);
    if (Health <= 0.f)
    {
        Health = 0.f;
        bDead = true;
        DeadT = 0.f;
        if (bSliding) EndSlide();
        if (DashT > 0.f) EndDash();
        UE_LOG(LogFirebird, Display, TEXT("FB_EVENT death"));
    }
}

void AFirebirdCharacter::Respawn()
{
    bDead = false;
    Health = MaxHealth;
    Sparks = FMath::Max(Sparks, 50);   // never retry below a fresh start (lesson 2026-09-24f)
    SetActorLocation(Checkpoint);
    GetCharacterMovement()->Velocity = FVector::ZeroVector;
    if (AController* C = GetController()) C->SetControlRotation(FRotator(0.f, CheckpointYaw, 0.f));
    CamZ = 68.f;
    UE_LOG(LogFirebird, Display, TEXT("FB_EVENT respawn"));
}

// ---- the view -------------------------------------------------------------------------------

void AFirebirdCharacter::UpdateView(float DeltaSeconds)
{
    const UCharacterMovementComponent* M = GetCharacterMovement();
    // eye height eases toward standing (160 cm) or crouched (70 cm) over the floor
    CamZ = FMath::FInterpTo(CamZ, bIsCrouched ? 24.f : 68.f, DeltaSeconds, 14.f);
    const float Speed = HorizontalSpeed();
    if (M->IsMovingOnGround() && !bSliding && Speed > 100.f) BobPhase += DeltaSeconds * Speed / 95.f;
    const float BobAmt = M->IsMovingOnGround() && !bSliding ? FMath::Clamp(Speed / RunSpeed, 0.f, 1.f) : 0.f;
    Shake *= FMath::Exp(-DeltaSeconds * 9.f);
    const FVector ShakeV = FMath::VRand() * Shake * 2.f;
    Camera->SetRelativeLocation(FVector(0.f, 0.f, CamZ + FMath::Sin(BobPhase * 2.f) * 1.6f * BobAmt) + ShakeV);

    // FOV: wider in a dash, a kick on a release, easing back
    FovKick *= FMath::Exp(-DeltaSeconds * 7.f);
    Camera->SetFieldOfView(Fov + FovKick + (DashT > 0.f ? 6.f : 0.f));

    // a lean into slides and strafes
    const float Strafe = FVector::DotProduct(GetVelocity(), FRotationMatrix(GetControlRotation()).GetScaledAxis(EAxis::Y)) / RunSpeed;
    CamRoll = FMath::FInterpTo(CamRoll, bSliding ? -5.f : Strafe * 1.5f, DeltaSeconds, 8.f);
    if (AController* C = GetController())
    {
        FRotator R = C->GetControlRotation();
        R.Roll = CamRoll;
        C->SetControlRotation(R);
    }

    // the weapon: walk bob, recoil kick, dip on landing; the fist punches in
    Recoil *= FMath::Exp(-DeltaSeconds * 16.f);
    ViewRig->SetRelativeLocation(FVector(-Recoil * 5.f, FMath::Sin(BobPhase) * 1.4f * BobAmt, -FMath::Abs(FMath::Cos(BobPhase)) * 1.2f * BobAmt - (bSliding ? 3.f : 0.f)));
    ViewRig->SetRelativeRotation(FRotator(Recoil * 5.f, 0.f, bSliding ? -8.f : 0.f));
    MuzzleLight->SetIntensity(MuzzleLight->Intensity * FMath::Exp(-DeltaSeconds * 40.f));
    if (GunCrystal) GunCrystal->SetRelativeScale3D(FVector(0.08f, 0.025f, 0.025f) * (1.f + Recoil * 0.6f));
    if (FistAnim > 0.f)
    {
        FistAnim = FMath::Max(0.f, FistAnim - DeltaSeconds / 0.22f);
        const float K = FMath::Sin((1.f - FistAnim) * PI);
        Fist->SetVisibility(FistAnim > 0.f);
        Fist->SetRelativeLocation(FVector(22.f + 48.f * K, -18.f + 10.f * K, -22.f + 8.f * K));
        // the gun dips out of the way while the fist is out
        GunBody->GetAttachParent()->SetRelativeLocation(ViewRig->GetRelativeLocation() + FVector(0, 0, -10.f * K));
        FistLight->SetIntensity(300.f * K);
    }
    else if (Fist->IsVisible()) Fist->SetVisibility(false);
}
