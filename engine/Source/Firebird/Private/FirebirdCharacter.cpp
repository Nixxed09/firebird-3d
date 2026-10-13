#include "FirebirdCharacter.h"
#include "Firebird.h"
#include "FBFx.h"
#include "Hollow.h"
#include "FBAudio.h"
#include "FirebirdHUD.h"
#include "FirebirdSession.h"
#include "Camera/CameraComponent.h"
#include "Components/CapsuleComponent.h"
#include "Components/PointLightComponent.h"
#include "Components/StaticMeshComponent.h"
#include "EngineUtils.h"
#include "GameFramework/CharacterMovementComponent.h"
#include "GameFramework/PlayerController.h"
#include "Kismet/GameplayStatics.h"
#include "Misc/App.h"
#include "Net/UnrealNetwork.h"

AFirebirdCharacter::AFirebirdCharacter()
{
    PrimaryActorTick.bCanEverTick = true;
    GetCapsuleComponent()->InitCapsuleSize(34.f, 92.f);
    bUseControllerRotationYaw = true;
    SetNetUpdateFrequency(60.f);

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
    // home LAN co-op: the owning computer's movement is the truth (dash, slide and
    // coyote stay instant), and the host takes its word for the position
    M->bIgnoreClientMovementErrorChecksAndCorrection = true;
    M->bServerAcceptClientAuthoritativePosition = true;

    Camera = CreateDefaultSubobject<UCameraComponent>(TEXT("Camera"));
    Camera->SetupAttachment(GetCapsuleComponent());
    Camera->SetRelativeLocation(FVector(0.f, 0.f, CamZ));
    Camera->bUsePawnControlRotation = true;
    Camera->SetFieldOfView(Fov);

    ViewRig = CreateDefaultSubobject<USceneComponent>(TEXT("ViewRig"));
    ViewRig->SetupAttachment(Camera);

    MuzzleLight = CreateDefaultSubobject<UPointLightComponent>(TEXT("MuzzleLight"));
    MuzzleLight->SetupAttachment(ViewRig);
    MuzzleLight->SetRelativeLocation(FVector(60.f, 13.f, -12.f));
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

    Body = CreateDefaultSubobject<USceneComponent>(TEXT("Body"));
    Body->SetupAttachment(GetCapsuleComponent());
}

void AFirebirdCharacter::GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& OutLifetimeProps) const
{
    Super::GetLifetimeReplicatedProps(OutLifetimeProps);
    DOREPLIFETIME(AFirebirdCharacter, Health);
    DOREPLIFETIME(AFirebirdCharacter, bDead);
    DOREPLIFETIME(AFirebirdCharacter, PlayerIndex);
    DOREPLIFETIME_CONDITION(AFirebirdCharacter, Sparks, COND_OwnerOnly);
}

FLinearColor AFirebirdCharacter::PlayerColor(int32 Index)
{
    // P1 the cover's amber, then aether blue, ember green and violet: easy to tell apart
    static const FLinearColor C[4] = { FLinearColor(1.f, 0.55f, 0.1f), FLinearColor(0.2f, 0.65f, 1.f), FLinearColor(0.35f, 0.9f, 0.3f), FLinearColor(0.75f, 0.4f, 1.f) };
    return C[FMath::Abs(Index) % 4];
}

void AFirebirdCharacter::BeginPlay()
{
    Super::BeginPlay();
    Checkpoint = GetActorLocation();
    CheckpointYaw = GetActorRotation().Yaw;
}

// the Spark Caster and Ember Fist: only the player holding them sees them
void AFirebirdCharacter::BuildViewModel()
{
    UMaterialInterface* BrassM = FB::MakeSurface(this, FB::Brass * 0.55f, 0.f, 0.3f, 1.f);
    UMaterialInterface* CopperM = FB::MakeSurface(this, FLinearColor(0.75f, 0.32f, 0.16f), 0.f, 0.3f, 0.9f);
    UMaterialInterface* DarkM = FB::MakeSurface(this, FB::Basalt * 2.f, 0.f, 0.8f);
    TArray<UStaticMeshComponent*> Parts;
    GunBody = FB::AddPart(this, ViewRig, TEXT("GunBody"), FVector(22, 3.2f, 4.2f), FVector(42, 13, -14), BrassM); Parts.Add(GunBody);
    UStaticMeshComponent* Grip = FB::AddPart(this, ViewRig, TEXT("GunGrip"), FVector(5, 3, 8), FVector(34, 13, -19), DarkM);
    Grip->SetRelativeRotation(FRotator(-15, 0, 0)); Parts.Add(Grip);
    GunCoil = FB::AddPart(this, ViewRig, TEXT("Coil1"), FVector(1.5f, 5, 6), FVector(46, 13, -14), CopperM); Parts.Add(GunCoil);
    Parts.Add(FB::AddPart(this, ViewRig, TEXT("Coil2"), FVector(1.5f, 5, 6), FVector(49, 13, -14), CopperM));
    Parts.Add(FB::AddPart(this, ViewRig, TEXT("Coil3"), FVector(1.5f, 5, 6), FVector(52, 13, -14), CopperM));
    GunCrystal = FB::AddPart(this, ViewRig, TEXT("Crystal"), FVector(6, 2, 2), FVector(55, 13, -12.5f), FB::MakeGlow(this, FB::Aether, 6.f)); Parts.Add(GunCrystal);
    Fist = FB::AddPart(this, ViewRig, TEXT("Fist"), FVector(14, 11, 11), FVector(22, -18, -22), FB::MakeGlow(this, FB::Orange, 3.f)); Parts.Add(Fist);
    Fist->SetVisibility(false);
    for (UStaticMeshComponent* C : Parts) { C->SetCastShadow(false); C->SetOnlyOwnerSee(true); }
    // a soft warm fill on the weapon, so it never reads as a black block in shadow
    UPointLightComponent* Fill = NewObject<UPointLightComponent>(this, TEXT("ViewFill"));
    Fill->SetupAttachment(ViewRig);
    Fill->SetRelativeLocation(FVector(25.f, 0.f, 5.f));
    Fill->SetIntensityUnits(ELightUnits::Candelas);
    Fill->SetIntensity(0.6f);
    Fill->SetAttenuationRadius(90.f);
    Fill->SetLightColor(FLinearColor(1.f, 0.75f, 0.5f));
    Fill->SetCastShadows(false);
    Fill->RegisterComponent();
}

// the Firebird as teammates see it: a figure in the player's colour, with ember wings
void AFirebirdCharacter::BuildBody()
{
    const FLinearColor C = PlayerColor(PlayerIndex);
    UMaterialInterface* Suit = FB::MakeSurface(this, C * 0.7f, 0.08f, 0.6f);   // the colour must read, not glow white
    UMaterialInterface* Dark = FB::MakeSurface(this, FB::Basalt * 2.f, 0.f, 0.7f);
    UMaterialInterface* Glow = FB::MakeGlow(this, C, 2.f);
    TArray<UStaticMeshComponent*> Parts;
    Parts.Add(FB::AddPart(this, Body, TEXT("BTorso"), FVector(30, 44, 70), FVector(0, 0, 10), Suit));
    Parts.Add(FB::AddPart(this, Body, TEXT("BHead"), FVector(28, 28, 28), FVector(2, 0, 64), Dark));
    Parts.Add(FB::AddPart(this, Body, TEXT("BVisor"), FVector(4, 22, 7), FVector(16, 0, 66), Glow));
    Parts.Add(FB::AddPart(this, Body, TEXT("BCrest"), FVector(22, 5, 18), FVector(-4, 0, 82), Glow));
    Parts.Add(FB::AddPart(this, Body, TEXT("BLegL"), FVector(16, 16, 60), FVector(0, -12, -58), Dark));
    Parts.Add(FB::AddPart(this, Body, TEXT("BLegR"), FVector(16, 16, 60), FVector(0, 12, -58), Dark));
    Parts.Add(FB::AddPart(this, Body, TEXT("BGun"), FVector(40, 8, 10), FVector(30, 22, 20), FB::MakeSurface(this, FB::Brass, 0.f, 0.35f, 0.9f)));
    BodyFist = FB::AddPart(this, Body, TEXT("BFist"), FVector(14, 12, 12), FVector(18, -24, 20), FB::MakeGlow(this, FB::Orange, 3.f)); Parts.Add(BodyFist);
    // the wings: two flat ember blades swept up and back, like the emblem
    WingL = FB::AddPart(this, Body, TEXT("BWingL"), FVector(6, 70, 34), FVector(-22, -48, 40), Glow);
    WingR = FB::AddPart(this, Body, TEXT("BWingR"), FVector(6, 70, 34), FVector(-22, 48, 40), Glow);
    WingL->SetRelativeRotation(FRotator(0.f, 20.f, -30.f));
    WingR->SetRelativeRotation(FRotator(0.f, -20.f, 30.f));
    Parts.Add(WingL); Parts.Add(WingR);
    for (UStaticMeshComponent* P : Parts) P->SetOwnerNoSee(true);
    BodyGlow = NewObject<UPointLightComponent>(this, TEXT("BodyGlow"));
    BodyGlow->SetupAttachment(Body);
    BodyGlow->SetRelativeLocation(FVector(-30.f, 0.f, 50.f));
    BodyGlow->SetIntensityUnits(ELightUnits::Candelas);
    BodyGlow->SetIntensity(10.f);
    BodyGlow->SetAttenuationRadius(300.f);
    BodyGlow->SetLightColor(C);
    BodyGlow->SetCastShadows(false);
    BodyGlow->SetVolumetricScatteringIntensity(0.2f);
    BodyGlow->RegisterComponent();
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
    // the start menu has the keyboard and mouse until a choice is made
    UFirebirdSession* S = UFirebirdSession::Get(this);
    const bool bMenu = S && S->InMenu();
    PC->bShowMouseCursor = bMenu;
    if (bMenu)
    {
        Input = FFirebirdInput();
        AFirebirdHUD* Hud = Cast<AFirebirdHUD>(PC->GetHUD());
        const int32 N = Hud ? Hud->MenuItems.Num() : 0;
        if (N == 0 || S->Mode == EFirebirdSessionMode::Joining) return;
        int32 Pick = -1;
        static const FKey Numbers[9] = { EKeys::One, EKeys::Two, EKeys::Three, EKeys::Four, EKeys::Five, EKeys::Six, EKeys::Seven, EKeys::Eight, EKeys::Nine };
        for (int32 i = 0; i < FMath::Min(N, 9); ++i) if (PC->WasInputKeyJustPressed(Numbers[i])) Pick = i;
        if (PC->WasInputKeyJustPressed(EKeys::Down) || PC->WasInputKeyJustPressed(EKeys::S)) { S->SelectedItem = (S->SelectedItem + 1) % N; FB::Sound2D(this, TEXT("ui_tick")); }
        if (PC->WasInputKeyJustPressed(EKeys::Up) || PC->WasInputKeyJustPressed(EKeys::W)) { S->SelectedItem = (S->SelectedItem + N - 1) % N; FB::Sound2D(this, TEXT("ui_tick")); }
        float Mx = 0.f, My = 0.f;
        if (PC->GetMousePosition(Mx, My))
            for (int32 i = 0; i < N; ++i)
            {
                const AFirebirdHUD::FMenuItem& It = Hud->MenuItems[i];
                if (Mx >= It.Min.X && Mx <= It.Max.X && My >= It.Min.Y && My <= It.Max.Y)
                {
                    S->SelectedItem = i;
                    if (PC->WasInputKeyJustPressed(EKeys::LeftMouseButton)) Pick = i;
                }
            }
        if (PC->WasInputKeyJustPressed(EKeys::Enter) || PC->WasInputKeyJustPressed(EKeys::SpaceBar)) Pick = S->SelectedItem;
        if (PC->WasInputKeyJustPressed(EKeys::Escape)) { PC->ConsoleCommand(TEXT("quit")); return; }
        if (Pick >= 0 && Pick < N)
        {
            const AFirebirdHUD::FMenuItem& It = Hud->MenuItems[Pick];
            FB::Sound2D(this, TEXT("ui_tick"));
            if (!It.bEnabled) S->Status = It.Why;
            else if (Pick == 0) S->PlayAlone();
            else if (Pick == 1) S->Host();
            else S->Join(It.Room);
        }
        return;
    }
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
    // R: run the course again (playing alone); Esc: leave
    if (PC->WasInputKeyJustPressed(EKeys::R) && GetNetMode() == NM_Standalone) PC->RestartLevel();
    // Esc: back to the start menu (leaving a hosted or joined game); Esc there quits
    if (PC->WasInputKeyJustPressed(EKeys::Escape) && S) S->BackToMenu(FString());
}

// ---- the frame ------------------------------------------------------------------------------

void AFirebirdCharacter::Tick(float DeltaSeconds)
{
    Super::Tick(DeltaSeconds);
    // the figure and the weapon are built once we know who we are (PlayerIndex arrives by replication)
    // (replicated properties arrive before BeginPlay, but whether this one is ours can take a frame)
    if (!bBuilt) { bBuilt = true; BuildBody(); }
    if (!GunBody && IsLocallyControlled()) BuildViewModel();
    UpdateBody(DeltaSeconds);

    HitMarker = FMath::Max(0.f, HitMarker - DeltaSeconds);
    KillMarker = FMath::Max(0.f, KillMarker - DeltaSeconds);
    ReleaseFlash = FMath::Max(0.f, ReleaseFlash - DeltaSeconds);
    DamageFlash = FMath::Max(0.f, DamageFlash - DeltaSeconds);
    HurtDirT = FMath::Max(0.f, HurtDirT - DeltaSeconds);

    // everything below is the player's own computer: input, movement, weapons, the view
    if (!IsLocallyControlled()) return;
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

    if (bDead)
    {
        DeadT += DeltaSeconds;
        CamZ = FMath::FInterpTo(CamZ, -60.f, DeltaSeconds, 3.f);
        Camera->SetRelativeLocation(FVector(0, 0, CamZ));
        if (DeadT > 1.6f && !bRespawnSent)
        {
            // retry close and fast (contract F1): this computer moves us, the host restores us
            bRespawnSent = true;
            TeleportOwned(Checkpoint, CheckpointYaw);
            CamZ = 68.f;
            FB::Sound2D(this, TEXT("respawn"));
            Server_Respawned();
        }
        return;
    }
    DeadT = 0.f;
    bRespawnSent = false;

    // fell into the pit: back to the checkpoint
    if (GetActorLocation().Z < -700.f)
    {
        UE_LOG(LogFirebird, Display, TEXT("FB_EVENT fell"));
        TeleportOwned(Checkpoint, GetControlRotation().Yaw);
        Server_Fell();
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

void AFirebirdCharacter::TeleportOwned(const FVector& To, float InYaw)
{
    SetActorLocation(To, false, nullptr, ETeleportType::TeleportPhysics);
    GetCharacterMovement()->Velocity = FVector::ZeroVector;
    if (AController* C = GetController()) C->SetControlRotation(FRotator(0.f, InYaw, 0.f));
}

// ---- movement -------------------------------------------------------------------------------

void AFirebirdCharacter::DoJump()
{
    if (bSliding) EndSlide();
    if (bIsCrouched) UnCrouch();
    LaunchCharacter(FVector(0.f, 0.f, JumpSpeed), false, true);
    FB::Sound(this, TEXT("jump"), GetActorLocation());
    bJumpConsumed = true;
    JumpBuffer = 0.f;
}

void AFirebirdCharacter::Landed(const FHitResult& Hit)
{
    Super::Landed(Hit);
    bJumpConsumed = false;
    if (!IsLocallyControlled()) return;
    Shake += FMath::Clamp(-GetVelocity().Z / 2500.f, 0.f, 0.5f);
    FB::Sound(this, TEXT("land"), GetActorLocation(), FMath::Clamp(-GetVelocity().Z / 1200.f, 0.25f, 1.f));
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
    FB::Sound(this, TEXT("dash"), GetActorLocation());
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
    FB::Sound(this, TEXT("slide"), GetActorLocation());
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
    if (Body) Body->SetRelativeLocation(FVector(0, 0, ScaledHalfHeightAdjust * 0.5f));
}

void AFirebirdCharacter::OnEndCrouch(float HalfHeightAdjust, float ScaledHalfHeightAdjust)
{
    Super::OnEndCrouch(HalfHeightAdjust, ScaledHalfHeightAdjust);
    CamZ -= ScaledHalfHeightAdjust;
    if (Body) Body->SetRelativeLocation(FVector::ZeroVector);
}

// ---- combat ---------------------------------------------------------------------------------

void AFirebirdCharacter::Hitstop(float RealSeconds)
{
    // a hitstop slows the whole world, so it is a solo-only effect: in co-op it would freeze the others
    if (GetNetMode() != NM_Standalone) return;
    HitstopReal = FMath::Max(HitstopReal, RealSeconds);
    UGameplayStatics::SetGlobalTimeDilation(this, 0.05f);
}

void AFirebirdCharacter::ShotFx(const FVector& Muzzle, const FVector& Impact, const FVector& Normal, bool bHitHollow)
{
    const FVector Span = Impact - Muzzle;
    FB::Sound(this, TEXT("spark_fire"), Muzzle, 0.8f);
    if (!Normal.IsNearlyZero()) FB::Sound(this, bHitHollow ? TEXT("spark_hit_hollow") : TEXT("spark_hit_wall"), Impact, 0.7f);
    AFBFx::Spawn(GetWorld(), Muzzle + Span * 0.5f, Span.Rotation(), FVector(Span.Size(), 2.5f, 2.5f), FB::Aether, 30.f, 0.06f);
    if (Normal.IsNearlyZero()) return;
    if (bHitHollow) AFBFx::Burst(GetWorld(), Impact, 6, FLinearColor(1.f, 0.9f, 0.7f), 300.f, 0.25f, 4.f, 600.f, 12.f);
    else
    {
        AFBFx::Burst(GetWorld(), Impact + Normal * 5.f, 5, FB::Aether, 260.f, 0.25f, 3.f, 700.f, 10.f);
        AFBFx::Spawn(GetWorld(), Impact + Normal * 2.f, Normal.Rotation(), FVector(1.f, 9.f, 9.f), FB::Orange, 4.f, 2.5f);   // a scorch that cools
    }
}

static bool SparkTrace(UWorld* W, const AActor* Self, const FVector& Eye, const FRotator& Aim, FHitResult& Hit)
{
    FCollisionQueryParams Q(SCENE_QUERY_STAT(Spark), false, Self);
    FCollisionObjectQueryParams Objects;
    Objects.AddObjectTypesToQuery(ECC_WorldStatic);
    Objects.AddObjectTypesToQuery(ECC_WorldDynamic);
    Objects.AddObjectTypesToQuery(ECC_Pawn);
    // teammates don't block your sparks (there is no friendly fire)
    for (TActorIterator<AFirebirdCharacter> It(W); It; ++It) Q.AddIgnoredActor(*It);
    return W->LineTraceSingleByObjectType(Hit, Eye, Eye + Aim.Vector() * 8000.f, Objects, Q);
}

void AFirebirdCharacter::FireSpark()
{
    if (Sparks <= 0) { SparkCooldown = 0.3f; return; }
    if (!HasAuthority()) Sparks--;   // shown at once here; the host keeps the real count
    SparkCooldown = SparkInterval;
    Recoil = 1.f;
    Shake += 0.25f;
    MuzzleLight->SetIntensity(900.f);
    const FVector Eye = Camera->GetComponentLocation();
    const FRotator Aim = GetControlRotation() + FRotator(FMath::FRandRange(-0.5f, 0.5f), FMath::FRandRange(-0.5f, 0.5f), 0.f);
    FHitResult Hit;
    const bool bHit = SparkTrace(GetWorld(), this, Eye, Aim, Hit);
    // the tracer starts at the crystal, not the eye, and shows here at once
    const FVector Muzzle = Camera->GetComponentTransform().TransformPosition(FVector(58.f, 13.f, -12.f));
    ShotFx(Muzzle, bHit ? FVector(Hit.ImpactPoint) : Eye + Aim.Vector() * 8000.f, bHit ? FVector(Hit.ImpactNormal) : FVector::ZeroVector, bHit && Cast<AHollow>(Hit.GetActor()));
    Server_Fire(Eye, Aim, GetActorLocation() + GetActorRotation().RotateVector(FVector(55.f, 22.f, 20.f)));
}

void AFirebirdCharacter::Server_Fire_Implementation(FVector_NetQuantize Eye, FRotator Aim, FVector_NetQuantize Muzzle)
{
    if (bDead || Sparks <= 0) return;
    Sparks--;
    FHitResult Hit;
    const bool bHit = SparkTrace(GetWorld(), this, Eye, Aim, Hit);
    AHollow* H = bHit ? Cast<AHollow>(Hit.GetActor()) : nullptr;
    Multi_ShotFx(Muzzle, bHit ? FVector(Hit.ImpactPoint) : FVector(Eye) + Aim.Vector() * 8000.f, bHit ? FVector(Hit.ImpactNormal) : FVector::ZeroVector, H != nullptr);
    if (!H) return;
    const bool bBroke = H->TakeHit(FMath::FRandRange(8.f, 14.f), Aim.Vector(), false, this);
    if (bBroke) Sparks = FMath::Min(MaxSparks, Sparks + 2);
    Client_HitConfirm(bBroke);
}

void AFirebirdCharacter::Multi_ShotFx_Implementation(FVector_NetQuantize Muzzle, FVector_NetQuantize Impact, FVector_NetQuantizeNormal Normal, bool bHitHollow)
{
    if (IsLocallyControlled()) return;   // the shooter already drew it
    ShotFx(Muzzle, Impact, Normal, bHitHollow);
}

void AFirebirdCharacter::Client_HitConfirm_Implementation(bool bBroke)
{
    ConfirmedHits++;
    HitMarker = 0.12f;
    if (bBroke) { KillMarker = 0.35f; Breaks++; }
}

AHollow* AFirebirdCharacter::ReleaseTarget() const
{
    return ReleaseTargetFrom(GetActorLocation(), GetControlRotation().Vector());
}

AHollow* AFirebirdCharacter::ReleaseTargetFrom(const FVector& From, const FVector& Look) const
{
    // generous on purpose (kids play this): a cracked Hollow close by and roughly in front
    AHollow* Best = nullptr;
    float BestD = 300.f;
    const FVector Look2D = Look.GetSafeNormal2D();
    for (TActorIterator<AHollow> It(GetWorld()); It; ++It)
    {
        AHollow* H = *It;
        if (!H->IsCracked()) continue;
        const FVector To = H->GetActorLocation() - From;
        const float D = To.Size2D();
        if (D < BestD && FVector::DotProduct(To.GetSafeNormal2D(), Look2D) > 0.8f) { Best = H; BestD = D; }
    }
    return Best;
}

void AFirebirdCharacter::Punch()
{
    FistCooldown = FistInterval;
    FistAnim = 1.f;
    FistLight->SetIntensity(300.f);
    FB::Sound(this, TEXT("fist_swing"), GetActorLocation());
    const FVector Fwd = GetControlRotation().Vector();
    if (AHollow* Target = ReleaseTarget())
    {
        // snap in: the release always connects once you've earned it
        const FVector To = Target->GetActorLocation() - GetActorLocation();
        GetCharacterMovement()->Velocity = To.GetSafeNormal2D() * FMath::Min(1400.f, To.Size2D() * 6.f);
        Shake += 1.0f;
    }
    Server_Punch(Camera->GetComponentLocation(), Fwd);
}

void AFirebirdCharacter::Server_Punch_Implementation(FVector_NetQuantize Eye, FVector_NetQuantizeNormal Look)
{
    if (bDead) return;
    Multi_Punch();
    AHollow* Target = ReleaseTargetFrom(GetActorLocation(), Look);
    if (!Target)
    {
        FHitResult Hit;
        FCollisionQueryParams Q(SCENE_QUERY_STAT(Fist), false, this);
        if (GetWorld()->SweepSingleByObjectType(Hit, Eye, FVector(Eye) + FVector(Look) * FistRange, FQuat::Identity, FCollisionObjectQueryParams(ECC_Pawn), FCollisionShape::MakeSphere(45.f), Q))
            Target = Cast<AHollow>(Hit.GetActor());
    }
    if (!Target) return;
    const bool bRelease = Target->IsCracked();
    const bool bBroke = Target->TakeHit(FMath::FRandRange(8.f, 24.f), Look, true, this);
    if (bRelease)
    {
        const float Before = Health;
        Health = FMath::Min(MaxHealth, Health + ReleaseHeal);
        Sparks = FMath::Min(MaxSparks, Sparks + ReleaseSparks);
        Client_Released(Health - Before);
        UE_LOG(LogFirebird, Display, TEXT("FB_EVENT release by=P%d heal=%.0f health=%.0f"), PlayerIndex + 1, Health - Before, Health);
    }
    else Client_HitConfirm(bBroke);
}

void AFirebirdCharacter::Multi_Punch_Implementation()
{
    BodyPunch = 1.f;   // teammates see the fist go out
    if (!IsLocallyControlled()) FB::Sound(this, TEXT("fist_swing"), GetActorLocation(), 0.7f);
}

void AFirebirdCharacter::Client_Released_Implementation(float Heal)
{
    LastReleaseHeal = Heal;
    ReleaseFlash = 0.8f;
    KillMarker = 0.35f;
    Releases++;
    FovKick += 8.f;
    Shake += 0.6f;
    Hitstop(0.09f);
    FB::Sound2D(this, TEXT("release"), 0.45f);   // the reward, close in your ears too
    UE_LOG(LogFirebird, Display, TEXT("FB_EVENT release_here heal=%.0f"), Heal);
}

void AFirebirdCharacter::Hurt(float Amount, const FVector& From)
{
    if (!HasAuthority() || bDead) return;
    Health -= Amount;
    UE_LOG(LogFirebird, Display, TEXT("FB_EVENT hurt P%d amount=%.0f health=%.0f"), PlayerIndex + 1, Amount, Health);
    if (Health <= 0.f)
    {
        Health = 0.f;
        bDead = true;
        UE_LOG(LogFirebird, Display, TEXT("FB_EVENT death P%d"), PlayerIndex + 1);
    }
    Client_Hurt(Amount, From);
}

void AFirebirdCharacter::Client_Hurt_Implementation(float Amount, FVector_NetQuantize From)
{
    DamageFlash = 0.45f;
    LastHurtFrom = From;
    HurtDirT = 1.f;
    Shake += 0.9f;
    FB::Sound2D(this, TEXT("ember_hit_player"), 0.8f);
    FB::Sound2D(this, TEXT("player_hurt"), 0.7f);
    if (bDead || Health <= 0.f)
    {
        FB::Sound2D(this, TEXT("player_death"));
        if (bSliding) EndSlide();
        if (DashT > 0.f) EndDash();
    }
}

void AFirebirdCharacter::Server_Fell_Implementation()
{
    Hurt(15.f, GetActorLocation() + FVector(0, 0, 100));
}

void AFirebirdCharacter::Server_Respawned_Implementation()
{
    bDead = false;
    Health = MaxHealth;
    Sparks = FMath::Max(Sparks, 50);   // never retry below a fresh start (lesson 2026-09-24f)
    UE_LOG(LogFirebird, Display, TEXT("FB_EVENT respawn P%d"), PlayerIndex + 1);
}

// ---- the figure teammates see ------------------------------------------------------------------

void AFirebirdCharacter::UpdateBody(float DeltaSeconds)
{
    if (!WingL) return;
    // wings beat slowly, flare in a dash, fold when knocked down
    const float T = GetWorld()->GetTimeSeconds() + PlayerIndex;
    const float Speed = HorizontalSpeed() / RunSpeed;
    const float Flap = bDead ? -60.f : 30.f + 10.f * FMath::Sin(T * 3.f) + 25.f * FMath::Clamp(Speed - 1.f, 0.f, 1.f);
    WingL->SetRelativeRotation(FRotator(0.f, 20.f, -Flap));
    WingR->SetRelativeRotation(FRotator(0.f, -20.f, Flap));
    // the body leans with the aim; the fist punches out
    Body->SetRelativeRotation(FRotator(bDead ? -70.f : 0.f, 0.f, 0.f));
    BodyPunch = FMath::Max(0.f, BodyPunch - DeltaSeconds / 0.25f);
    if (BodyFist) BodyFist->SetRelativeLocation(FVector(18.f + 50.f * FMath::Sin((1.f - BodyPunch) * PI) * (BodyPunch > 0.f ? 1.f : 0.f), -24.f, 20.f));
}

// ---- the view -------------------------------------------------------------------------------

void AFirebirdCharacter::UpdateView(float DeltaSeconds)
{
    if (!GunBody) return;
    const UCharacterMovementComponent* M = GetCharacterMovement();
    // eye height eases toward standing (160 cm) or crouched (70 cm) over the floor
    CamZ = FMath::FInterpTo(CamZ, bIsCrouched ? 24.f : 68.f, DeltaSeconds, 14.f);
    const float Speed = HorizontalSpeed();
    if (M->IsMovingOnGround() && !bSliding && Speed > 100.f)
    {
        // a footstep on every stride (each half bob cycle), rotating three
        const int32 Before = FMath::FloorToInt(BobPhase / PI);
        BobPhase += DeltaSeconds * Speed / 95.f;
        if (FMath::FloorToInt(BobPhase / PI) != Before)
        {
            static const TCHAR* Steps[3] = { TEXT("footstep_1"), TEXT("footstep_2"), TEXT("footstep_3") };
            FB::Sound(this, Steps[FMath::Abs(Before) % 3], GetActorLocation() - FVector(0, 0, 80), 0.5f);
        }
    }
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

    // the weapon: walk bob, recoil kick; the fist punches in and the gun dips out of its way
    Recoil *= FMath::Exp(-DeltaSeconds * 16.f);
    float Dip = 0.f;
    if (FistAnim > 0.f)
    {
        FistAnim = FMath::Max(0.f, FistAnim - DeltaSeconds / 0.22f);
        const float K = FMath::Sin((1.f - FistAnim) * PI);
        Fist->SetVisibility(FistAnim > 0.f);
        Fist->SetRelativeLocation(FVector(22.f + 48.f * K, -18.f + 10.f * K, -22.f + 8.f * K));
        FistLight->SetIntensity(300.f * K);
        Dip = 10.f * K;
    }
    else if (Fist->IsVisible()) Fist->SetVisibility(false);
    ViewRig->SetRelativeLocation(FVector(-Recoil * 5.f, FMath::Sin(BobPhase) * 1.4f * BobAmt, -FMath::Abs(FMath::Cos(BobPhase)) * 1.2f * BobAmt - (bSliding ? 3.f : 0.f) - Dip));
    ViewRig->SetRelativeRotation(FRotator(Recoil * 5.f, 0.f, bSliding ? -8.f : 0.f));
    MuzzleLight->SetIntensity(MuzzleLight->Intensity * FMath::Exp(-DeltaSeconds * 40.f));
    if (GunCrystal) GunCrystal->SetRelativeScale3D(FVector(0.06f, 0.02f, 0.02f) * (1.f + Recoil * 0.6f));
}
