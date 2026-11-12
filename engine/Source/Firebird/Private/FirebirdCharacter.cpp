#include "FirebirdCharacter.h"
#include "Firebird.h"
#include "FBArt.h"
#include "FBPlayerAnimInstance.h"
#include "Components/SkeletalMeshComponent.h"
#include "Engine/SkeletalMesh.h"
#include "Materials/MaterialInstanceDynamic.h"
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
#include "GameFramework/PlayerInput.h"
#include "Kismet/GameplayStatics.h"
#include "Misc/App.h"
#include "Net/UnrealNetwork.h"

AFirebirdCharacter::AFirebirdCharacter()
{
    PrimaryActorTick.bCanEverTick = true;
    GetCapsuleComponent()->InitCapsuleSize(34.f, 92.f);
    // Crouch and network smoothing read the class-default mesh transform.
    // Set the feet-to-capsule offset before those systems cache it.
    GetMesh()->SetRelativeLocation(FVector(0, 0, -92));
    GetMesh()->SetRelativeRotation(FRotator(0, -90, 0));
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
    MuzzleLight->SetLightColor(FLinearColor(1.f, 0.62f, 0.28f));   // powder flash
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

// the sidearm and the Ember Fist: only the player holding them sees them.
// The sidearm is a period single-action revolver of the Great Fires (docs/SETTING_BRIEF.md section 5;
// real period guns allowed since 2026-11-11, R7): blued barrel and cylinder, a dark case-hardened
// frame, brass trigger guard and backstrap, walnut grip. The front of the cylinder shows the six
// rounds, and each one goes dark as it fires. Built from parts so the cylinder, the hammer and the
// kick can move. It is a stand-in until a modelled revolver (Fab or hand-made) replaces the parts.
static const FVector GripAt(37.f, 15.5f, -22.5f);   // the grip, in camera space; recoil and sway turn here
static const FVector MuzzleLocal(25.4f, 0.f, 6.2f); // the muzzle, relative to the grip

void AFirebirdCharacter::BuildViewModel()
{
    Camera->SetEnableFirstPersonScale(true);
    Camera->SetFirstPersonScale(.45f);
    TArray<UStaticMeshComponent*> Parts;
    UMaterialInterface* Brass = FB::MakeSurface(this, FLinearColor(0.50f, 0.34f, 0.13f), 0.f, 0.42f, 1.f);
    UMaterialInterface* Frame = FB::MakeSurface(this, FLinearColor(0.16f, 0.14f, 0.13f), 0.f, 0.33f, 1.f);   // case-hardened
    UMaterialInterface* Steel = FB::MakeSurface(this, FLinearColor(0.05f, 0.06f, 0.08f), 0.f, 0.28f, 1.f);   // blued
    UMaterialInterface* Walnut = FB::MakeSurface(this, FLinearColor(0.20f, 0.085f, 0.035f), 0.f, 0.55f, 0.f);
    UMaterialInterface* Bore = FB::MakeSurface(this, FLinearColor(0.005f, 0.005f, 0.005f), 0.f, 0.9f, 0.f);
    ChamberLitMat = FB::MakeSurface(this, FLinearColor(0.62f, 0.45f, 0.2f), 0.f, 0.35f, 1.f);              // a loaded round
    ChamberSpentMat = FB::MakeSurface(this, FLinearColor(0.01f, 0.01f, 0.01f), 0.f, 0.9f, 0.f);             // an empty chamber
    UStaticMesh* Cyl = FB::Cylinder();
    const FRotator AlongX(-90.f, 0.f, 0.f);   // engine cylinders stand on Z; lay them along the barrel
    auto Part = [&](USceneComponent* Parent, const TCHAR* Name, const FVector& Size, const FVector& At, UMaterialInterface* Mat, UStaticMesh* PartMesh = nullptr, const FRotator& Rot = FRotator::ZeroRotator)
    {
        UStaticMeshComponent* C = FB::AddPart(this, Parent, Name, Size, At, Mat, PartMesh);
        C->SetRelativeRotation(Rot);
        Parts.Add(C);
        return C;
    };

    GunPivot = NewObject<USceneComponent>(this, TEXT("GunPivot"));
    GunPivot->SetupAttachment(ViewRig);
    GunPivot->SetRelativeLocation(GripAt);
    GunPivot->RegisterComponent();

    // frame and barrel (x forward from the grip, z up)
    GunBody = Part(GunPivot, TEXT("RevolverFrame"), FVector(10.5f, 2.4f, 4.f), FVector(5.3f, 0.f, 3.1f), Frame);
    Part(GunPivot, TEXT("RevolverTopStrap"), FVector(8.6f, 1.9f, 0.8f), FVector(5.2f, 0.f, 5.6f), Frame);
    Part(GunPivot, TEXT("RevolverBarrel"), FVector(2.f, 2.f, 14.4f), FVector(17.6f, 0.f, 6.2f), Steel, Cyl, AlongX);
    Part(GunPivot, TEXT("RevolverRodHousing"), FVector(1.2f, 1.2f, 8.5f), FVector(15.f, 0.f, 4.7f), Steel, Cyl, AlongX);
    Part(GunPivot, TEXT("RevolverRodHead"), FVector(1.5f, 1.5f, 0.7f), FVector(19.3f, 0.f, 4.7f), Steel, Cyl, AlongX);
    Part(GunPivot, TEXT("RevolverBore"), FVector(1.f, 1.f, 0.2f), FVector(24.85f, 0.f, 6.2f), Bore, Cyl, AlongX);
    Part(GunPivot, TEXT("RevolverSight"), FVector(1.2f, 0.35f, 1.1f), FVector(23.f, 0.f, 8.1f), Steel);
    Part(GunPivot, TEXT("RevolverRearSight"), FVector(0.8f, 1.6f, 0.6f), FVector(1.6f, 0.f, 6.2f), Frame);
    Part(GunPivot, TEXT("RevolverBasePin"), FVector(0.6f, 0.6f, 1.2f), FVector(11.2f, 0.f, 4.4f), Steel, Cyl, AlongX);

    // the cylinder: six rounds around the axis, turning one place per shot
    DrumPivot = NewObject<USceneComponent>(this, TEXT("DrumPivot"));
    DrumPivot->SetupAttachment(GunPivot);
    DrumPivot->SetRelativeLocation(FVector(6.f, 0.f, 4.4f));
    DrumPivot->RegisterComponent();
    Part(DrumPivot, TEXT("RevolverCylinder"), FVector(5.f, 5.f, 5.4f), FVector::ZeroVector, Steel, Cyl, AlongX);
    Chambers.Reset();
    for (int32 i = 0; i < 6; ++i)
    {
        const float Ang = FMath::DegreesToRadians(60.f * i + 30.f);
        const FVector Ring(0.f, FMath::Cos(Ang), FMath::Sin(Ang));
        // the flute between chambers, and the round's nose showing at the cylinder's front face
        Part(DrumPivot, *FString::Printf(TEXT("RevolverFlute%d"), i), FVector(0.9f, 0.9f, 4.f), FVector(0.f, 0.f, 0.f) + FRotator(0.f, 0.f, 30.f).RotateVector(Ring) * 2.45f, Bore, Cyl, AlongX);
        Chambers.Add(Part(DrumPivot, *FString::Printf(TEXT("RevolverRound%d"), i), FVector(1.05f, 1.05f, 0.5f), FVector(2.62f, 0.f, 0.f) + Ring * 1.55f, ChamberLitMat, Cyl, AlongX));
    }

    // hammer (cocks back on its pin), trigger and guard
    HammerPivot = NewObject<USceneComponent>(this, TEXT("HammerPivot"));
    HammerPivot->SetupAttachment(GunPivot);
    HammerPivot->SetRelativeLocation(FVector(0.2f, 0.f, 4.6f));
    HammerPivot->RegisterComponent();
    Part(HammerPivot, TEXT("RevolverHammer"), FVector(1.2f, 1.1f, 2.0f), FVector(-0.3f, 0.f, 0.9f), Steel);
    Part(HammerPivot, TEXT("RevolverHammerSpur"), FVector(2.f, 1.3f, 0.7f), FVector(-1.3f, 0.f, 1.6f), Steel);
    Part(GunPivot, TEXT("RevolverTrigger"), FVector(0.6f, 0.5f, 2.4f), FVector(4.2f, 0.f, -0.2f), Steel, nullptr, FRotator(-20.f, 0.f, 0.f));
    Part(GunPivot, TEXT("RevolverGuardFront"), FVector(0.6f, 0.8f, 3.2f), FVector(7.4f, 0.f, -0.2f), Brass, nullptr, FRotator(-15.f, 0.f, 0.f));
    Part(GunPivot, TEXT("RevolverGuardBottom"), FVector(5.4f, 0.8f, 0.6f), FVector(4.8f, 0.f, -1.7f), Brass);

    // the walnut grip, swept back like a plough handle, with brass backstrap and butt
    Part(GunPivot, TEXT("RevolverGrip"), FVector(3.2f, 2.8f, 9.f), FVector(-1.6f, 0.f, -2.4f), Walnut, nullptr, FRotator(-22.f, 0.f, 0.f));
    Part(GunPivot, TEXT("RevolverGripCap"), FVector(3.6f, 3.f, 0.9f), FVector(-3.4f, 0.f, -6.6f), Brass, nullptr, FRotator(-22.f, 0.f, 0.f));
    Part(GunPivot, TEXT("RevolverBackstrap"), FVector(0.7f, 1.6f, 7.f), FVector(-3.1f, 0.f, -1.8f), Brass, nullptr, FRotator(-22.f, 0.f, 0.f));

    MuzzlePoint = NewObject<USceneComponent>(this, TEXT("MuzzlePoint"));
    MuzzlePoint->SetupAttachment(GunPivot);
    MuzzlePoint->SetRelativeLocation(MuzzleLocal);
    MuzzlePoint->RegisterComponent();
    MuzzleLight->AttachToComponent(MuzzlePoint, FAttachmentTransformRules::KeepRelativeTransform);
    MuzzleLight->SetRelativeLocation(FVector(3.f, 0.f, 0.f));

    // A closed gauntlet wraps the grip and moves with the gun.
    Parts.Add(FBArt::Attach(this, GunPivot, TEXT("SM_FB_EmberGauntlet"), FVector(-1.5f, 0.6f, -4.5f), FRotator(-70, -90, 0), FVector(.6f)));
    Fist = FBArt::Attach(this, ViewRig, TEXT("SM_FB_EmberGauntlet"), FVector(22, -18, -22), FRotator(0, -90, 0), FVector(1.2f)); Parts.Add(Fist);
    Fist->SetVisibility(false);
    Drum = FMath::Min(DrumSize, Sparks);
    for (int32 i = 0; i < Chambers.Num(); ++i) SetChamberLit(i, i < Drum);
    DrawT = 0.f;
    for (UStaticMeshComponent* C : Parts)
    {
        C->SetCastShadow(false);
        C->SetOnlyOwnerSee(true);
        C->SetFirstPersonPrimitiveType(EFirstPersonPrimitiveType::FirstPerson);
    }
    // a soft warm fill on the weapon, so it never reads as a black block in shadow
    UPointLightComponent* Fill = NewObject<UPointLightComponent>(this, TEXT("ViewFill"));
    Fill->SetupAttachment(ViewRig);
    Fill->SetRelativeLocation(FVector(25.f, 0.f, 5.f));
    Fill->SetIntensityUnits(ELightUnits::Candelas);
    Fill->SetIntensity(0.28f);
    Fill->SetAttenuationRadius(90.f);
    Fill->SetLightColor(FLinearColor(1.f, 0.75f, 0.5f));
    Fill->SetCastShadows(false);
    Fill->RegisterComponent();
}

// the Firebird as teammates see it: a figure in the player's colour, with ember wings
void AFirebirdCharacter::BuildBody()
{
    const FLinearColor C = PlayerColor(PlayerIndex);
    USkeletalMeshComponent* Visual = GetMesh();
    USkeletalMesh* Armor = LoadObject<USkeletalMesh>(nullptr,
        TEXT("/Game/Firebird/ArtKitV01/Meshes/SK_FB_Firebird.SK_FB_Firebird"));
    if (!Armor) UE_LOG(LogFirebird, Error, TEXT("FB_ART_MISSING articulated Firebird"));
    Visual->SetSkeletalMesh(Armor);
    Visual->SetRelativeLocation(FVector(0, 0, -92));
    Visual->SetRelativeRotation(FRotator(0, -90, 0));
    Visual->SetCollisionEnabled(ECollisionEnabled::NoCollision);
    Visual->SetCanEverAffectNavigation(false);
    Visual->SetFirstPersonPrimitiveType(EFirstPersonPrimitiveType::WorldSpaceRepresentation);
    Visual->VisibilityBasedAnimTickOption = EVisibilityBasedAnimTickOption::AlwaysTickPoseAndRefreshBones;
    Visual->SetAnimInstanceClass(UFBPlayerAnimInstance::StaticClass());
    const int32 SuitSlot = Visual->GetMaterialIndex(TEXT("M_FB_Bronze"));
    if (SuitSlot != INDEX_NONE) Visual->SetMaterial(SuitSlot,
        FBArt::Surface(this, TEXT("M_FB_Bronze"), C * .65f + FLinearColor(.2f, .2f, .2f)));
    const int32 GlowSlot = Visual->GetMaterialIndex(TEXT("M_FB_Amber"));
    if (GlowSlot != INDEX_NONE) Visual->SetMaterial(GlowSlot, FBArt::Surface(this, TEXT("M_FB_Amber"), C));
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
    // a menu (the title menu, or the pause menu in play) has the keyboard, mouse and controller
    UFirebirdSession* S = UFirebirdSession::Get(this);
    const bool bMenu = S && S->MenuOpen();
    PC->bShowMouseCursor = bMenu;
    if (bMenu)
    {
        Input = FFirebirdInput();
        NotePadUse(PC, S);
        AFirebirdHUD* Hud = Cast<AFirebirdHUD>(PC->GetHUD());
        const int32 N = Hud ? Hud->MenuItems.Num() : 0;
        if (S->Mode == EFirebirdSessionMode::Joining) return;
        auto Pressed = [PC](std::initializer_list<FKey> Keys) { for (const FKey& K : Keys) if (PC->WasInputKeyJustPressed(K)) return true; return false; };
        auto Held = [PC](std::initializer_list<FKey> Keys) { for (const FKey& K : Keys) if (PC->IsInputKeyDown(K)) return true; return false; };
        // START closes the pause menu from any of its screens; Esc and B go up one screen
        if (S->bPaused && Pressed({ EKeys::Gamepad_Special_Right })) { S->ClosePause(); FB::Sound2D(this, TEXT("ui_tick")); return; }
        if (Pressed({ EKeys::Escape, EKeys::Gamepad_FaceButton_Right, EKeys::BackSpace })) { S->Back(); FB::Sound2D(this, TEXT("ui_tick")); return; }
        if (N == 0) return;
        if (Pressed({ EKeys::Down, EKeys::S, EKeys::Gamepad_DPad_Down, EKeys::Gamepad_LeftStick_Down })) { S->SelectedItem = (S->SelectedItem + 1) % N; FB::Sound2D(this, TEXT("ui_tick")); }
        if (Pressed({ EKeys::Up, EKeys::W, EKeys::Gamepad_DPad_Up, EKeys::Gamepad_LeftStick_Up })) { S->SelectedItem = (S->SelectedItem + N - 1) % N; FB::Sound2D(this, TEXT("ui_tick")); }
        S->SelectedItem = FMath::Clamp(S->SelectedItem, 0, N - 1);
        // the mouse: pointing at a row chooses it (only when the mouse moves, so it never fights the keys)
        int32 Pick = -1, Dir = 0;
        float Mx = 0.f, My = 0.f;
        const bool bMouse = PC->GetMousePosition(Mx, My);
        const bool bClick = bMouse && PC->WasInputKeyJustPressed(EKeys::LeftMouseButton);
        const bool bMoved = bMouse && FVector2D::Distance(FVector2D(Mx, My), LastMenuMouse) > 1.f;
        if (bMouse) LastMenuMouse = FVector2D(Mx, My);
        auto In = [Mx, My](const FVector2D& Min, const FVector2D& Max) { return Mx >= Min.X && Mx <= Max.X && My >= Min.Y && My <= Max.Y; };
        if (bMoved || bClick)
            for (int32 i = 0; i < N; ++i)
            {
                const AFirebirdHUD::FMenuItem& It = Hud->MenuItems[i];
                if (!In(It.Min, It.Max)) continue;
                if (S->SelectedItem != i) { S->SelectedItem = i; FB::Sound2D(this, TEXT("ui_tick"), 0.6f); }
                if (!bClick) break;
                if (It.bAdjust && In(It.LessMin, It.LessMax)) Dir = -1;
                else if (It.bAdjust && In(It.MoreMin, It.MoreMax)) Dir = 1;
                else Pick = i;
                break;
            }
        // left and right change a setting; held, they repeat
        const int32 Side = (Held({ EKeys::Right, EKeys::D, EKeys::Gamepad_DPad_Right, EKeys::Gamepad_LeftStick_Right }) ? 1 : 0)
                         - (Held({ EKeys::Left, EKeys::A, EKeys::Gamepad_DPad_Left, EKeys::Gamepad_LeftStick_Left }) ? 1 : 0);
        const int32 Tapped = (Pressed({ EKeys::Right, EKeys::D, EKeys::Gamepad_DPad_Right, EKeys::Gamepad_LeftStick_Right }) ? 1 : 0)
                           - (Pressed({ EKeys::Left, EKeys::A, EKeys::Gamepad_DPad_Left, EKeys::Gamepad_LeftStick_Left }) ? 1 : 0);
        if (Tapped != 0) { Dir = Tapped; MenuRepeatT = 0.f; }   // a tap always counts, however short
        else if (Side == 0) MenuRepeatT = 0.f;
        else
        {
            const float Before = MenuRepeatT;
            MenuRepeatT += FApp::GetDeltaTime();
            if (MenuRepeatT > 0.4f && FMath::FloorToInt(MenuRepeatT / 0.07f) != FMath::FloorToInt(Before / 0.07f)) Dir = Side;
        }
        if (Pressed({ EKeys::Enter, EKeys::SpaceBar, EKeys::Gamepad_FaceButton_Bottom })) Pick = S->SelectedItem;
        const AFirebirdHUD::FMenuItem It = Hud->MenuItems[Pick >= 0 ? Pick : S->SelectedItem];   // a copy: the action may change the screen
        if (Dir != 0 && It.bAdjust) { S->Activate(It.Action, It.Room, Dir); FB::Sound2D(this, TEXT("ui_tick")); }
        else if (Pick >= 0)
        {
            FB::Sound2D(this, TEXT("ui_tick"));
            if (!It.bEnabled) S->Status = It.Why;
            else S->Activate(It.Action, It.Room, 0);
        }
        return;
    }
    FFirebirdInput I;
    NotePadUse(PC, S);
    I.Move.Y = (PC->IsInputKeyDown(EKeys::W) ? 1.f : 0.f) - (PC->IsInputKeyDown(EKeys::S) ? 1.f : 0.f);
    I.Move.X = (PC->IsInputKeyDown(EKeys::D) ? 1.f : 0.f) - (PC->IsInputKeyDown(EKeys::A) ? 1.f : 0.f);
    // a controller: left stick moves (with a dead zone), right stick looks (curved for fine aim)
    const FVector2D LStick = PadStick(PC, EKeys::Gamepad_LeftX, EKeys::Gamepad_LeftY);
    if (!LStick.IsNearlyZero()) { I.Move.X = FMath::Clamp(I.Move.X + LStick.X, -1.f, 1.f); I.Move.Y = FMath::Clamp(I.Move.Y + LStick.Y, -1.f, 1.f); }
    // Raw mouse counts: the engine's mouse value is scaled by a 0.07 axis setting and by the
    // current field of view, which made the look slow and change speed on every dash and zoom.
    float Mx = 0.f, My = 0.f;
    if (PC->PlayerInput) { Mx = PC->PlayerInput->GetRawKeyValue(EKeys::MouseX); My = PC->PlayerInput->GetRawKeyValue(EKeys::MouseY); }
    // [ and ] change the mouse sensitivity during play (saved; also on the start menu)
    if (S)
    {
        const int32 Steps = (PC->WasInputKeyJustPressed(EKeys::RightBracket) || PC->WasInputKeyJustPressed(EKeys::Gamepad_DPad_Right) ? 1 : 0)
                          - (PC->WasInputKeyJustPressed(EKeys::LeftBracket) || PC->WasInputKeyJustPressed(EKeys::Gamepad_DPad_Left) ? 1 : 0);
        if (Steps != 0)
        {
            S->AdjustSensitivity(Steps);
            if (AFirebirdHUD* Hud = Cast<AFirebirdHUD>(PC->GetHUD()))
                Hud->Say(S->bUsingPad
                    ? FString::Printf(TEXT("LOOK SENSITIVITY %s   ( D-PAD LEFT slower   RIGHT faster )"), *S->SensitivityText())
                    : FString::Printf(TEXT("MOUSE: SENSITIVITY %s   ( [ slower   ] faster )"), *S->SensitivityText()), 2.5f, FLinearColor(1.f, 0.78f, 0.35f));
        }
    }
    const float Sens = MouseDegPerCount * (S ? S->MouseSensitivity : 1.f);
    I.Look = FVector2D(Mx * Sens, My * Sens);
    const FVector2D RStick = PadStick(PC, EKeys::Gamepad_RightX, EKeys::Gamepad_RightY, 0.12f);
    const float Dt = GetWorld()->GetDeltaSeconds();
    if (!RStick.IsNearlyZero())
    {
        // degrees per second at full tilt (x the same sensitivity setting); squared so small tilts aim finely.
        // Held at the rim, the turn speeds up over a third of a second so a full turn-around is quick.
        const float K = S ? S->MouseSensitivity : 1.f;
        const FVector2D Curved(RStick.X * FMath::Abs(RStick.X), RStick.Y * FMath::Abs(RStick.Y));
        PadTurnBoost = FMath::Abs(RStick.X) > 0.92f ? FMath::Min(1.f, PadTurnBoost + Dt / 0.35f) : 0.f;
        // FSceneViewport negates Gamepad_RightY before PlayerInput receives it.
        // Undo that viewport convention: stick up must increase our direct pitch.
        I.Look += FVector2D(Curved.X * PadYawSpeed * (1.f + 0.8f * PadTurnBoost), -Curved.Y * PadPitchSpeed) * K * Dt;
    }
    else PadTurnBoost = 0.f;
    auto Down = [PC](std::initializer_list<FKey> Keys) { for (const FKey& K : Keys) if (PC->IsInputKeyDown(K)) return true; return false; };
    auto Pressed = [PC](std::initializer_list<FKey> Keys) { for (const FKey& K : Keys) if (PC->WasInputKeyJustPressed(K)) return true; return false; };
    // Keyboard: RIGHT MOUSE aims, F / E / V / a side mouse button punch, R reloads.
    // Pad: LB aims, RB dashes, A jumps, B/R3 crouch, RT shoots, LT/X punch, Y reloads, START opens the menu.
    const bool bRtHeld = PC->GetInputAnalogKeyState(EKeys::Gamepad_RightTriggerAxis) > 0.35f;
    I.bAimHeld = Down({ EKeys::RightMouseButton, EKeys::Gamepad_LeftShoulder });
    I.bJump = Pressed({ EKeys::SpaceBar, EKeys::Gamepad_FaceButton_Bottom });
    I.bDash = Pressed({ EKeys::LeftShift, EKeys::Gamepad_RightShoulder });
    I.bCrouchHeld = Down({ EKeys::LeftControl, EKeys::C, EKeys::Gamepad_FaceButton_Right, EKeys::Gamepad_RightThumbstick });
    I.bCrouchPressed = Pressed({ EKeys::LeftControl, EKeys::C, EKeys::Gamepad_FaceButton_Right, EKeys::Gamepad_RightThumbstick });
    I.bFireHeld = Down({ EKeys::LeftMouseButton, EKeys::Gamepad_RightTrigger }) || bRtHeld;
    I.bFirePressed = Pressed({ EKeys::LeftMouseButton, EKeys::Gamepad_RightTrigger }) || (bRtHeld && !bFireWasHeld);
    bFireWasHeld = I.bFireHeld;
    I.bReload = Pressed({ EKeys::R, EKeys::Gamepad_FaceButton_Top });
    I.bFist = Pressed({ EKeys::F, EKeys::E, EKeys::V, EKeys::ThumbMouseButton, EKeys::ThumbMouseButton2, EKeys::Gamepad_LeftTrigger, EKeys::Gamepad_FaceButton_Left });
    // down the sights the view is narrower, so the look slows by the same amount and aim stays steady
    I.Look *= FMath::Lerp(1.f, AimZoom, AimBlend);
    if (S && S->bInvertLook) I.Look.Y = -I.Look.Y;
    Input = I;
    // F5: run the course again (playing alone); Esc: leave
    if (PC->WasInputKeyJustPressed(EKeys::F5) && GetNetMode() == NM_Standalone) PC->RestartLevel();
    // Esc: back to the start menu (leaving a hosted or joined game); Esc there quits
    if ((PC->WasInputKeyJustPressed(EKeys::Escape) || PC->WasInputKeyJustPressed(EKeys::Gamepad_Special_Right)) && S)
    {
        // the pause menu (resume, settings, controls, leave the game)
        Input = FFirebirdInput();
        S->OpenPause();
        FB::Sound2D(this, TEXT("ui_tick"));
    }
}

bool AFirebirdCharacter::IsAiming() const
{
    const UFirebirdSession* Session = UFirebirdSession::Get(this);
    return !bDead && Input.bAimHeld && !(Session && Session->MenuOpen()) && !IsReloading() && DashT <= 0.f;
}

// a stick's two axes with one radial dead zone, rescaled so just past the dead zone is a small value.
// Reads the raw stick: the engine's own per-axis dead zone (0.25) stacked on ours made aim snap to the axes.
FVector2D AFirebirdCharacter::PadStick(APlayerController* PC, const FKey& X, const FKey& Y, float Dead)
{
    FVector2D V = PC->PlayerInput ? FVector2D(PC->PlayerInput->GetRawKeyValue(X), PC->PlayerInput->GetRawKeyValue(Y))
                                  : FVector2D(PC->GetInputAnalogKeyState(X), PC->GetInputAnalogKeyState(Y));
    const float Len = V.Size();
    if (Len < Dead) return FVector2D::ZeroVector;
    return V / Len * FMath::Min(1.f, (Len - Dead) / (1.f - Dead));
}

// which device the player is using now: a controller once any of its sticks, triggers or buttons is used;
// back to keyboard and mouse once the mouse moves or a key is pressed. The HUD shows that device's buttons.
void AFirebirdCharacter::NotePadUse(APlayerController* PC, UFirebirdSession* S)
{
    if (!S) return;
    static const FKey PadButtons[] = { EKeys::Gamepad_FaceButton_Bottom, EKeys::Gamepad_FaceButton_Right, EKeys::Gamepad_FaceButton_Left,
        EKeys::Gamepad_FaceButton_Top, EKeys::Gamepad_LeftShoulder, EKeys::Gamepad_RightShoulder, EKeys::Gamepad_LeftTrigger,
        EKeys::Gamepad_RightTrigger, EKeys::Gamepad_DPad_Up, EKeys::Gamepad_DPad_Down, EKeys::Gamepad_DPad_Left, EKeys::Gamepad_DPad_Right,
        EKeys::Gamepad_Special_Right, EKeys::Gamepad_Special_Left, EKeys::Gamepad_LeftThumbstick, EKeys::Gamepad_RightThumbstick };
    bool bPad = !PadStick(PC, EKeys::Gamepad_LeftX, EKeys::Gamepad_LeftY).IsNearlyZero() || !PadStick(PC, EKeys::Gamepad_RightX, EKeys::Gamepad_RightY).IsNearlyZero();
    for (const FKey& K : PadButtons) bPad = bPad || PC->WasInputKeyJustPressed(K);
    const float Mx = PC->PlayerInput ? PC->PlayerInput->GetRawKeyValue(EKeys::MouseX) : 0.f;
    const float My = PC->PlayerInput ? PC->PlayerInput->GetRawKeyValue(EKeys::MouseY) : 0.f;
    static const FKey KeyboardMouse[] = { EKeys::W, EKeys::A, EKeys::S, EKeys::D, EKeys::SpaceBar, EKeys::LeftShift, EKeys::LeftMouseButton,
        EKeys::RightMouseButton, EKeys::Enter, EKeys::Up, EKeys::Down, EKeys::Escape };
    bool bKeys = FMath::Abs(Mx) + FMath::Abs(My) > 2.f;
    for (const FKey& K : KeyboardMouse) bKeys = bKeys || PC->WasInputKeyJustPressed(K);
    if (bPad) S->bUsingPad = true;
    else if (bKeys) S->bUsingPad = false;
}

// ---- the frame ------------------------------------------------------------------------------

void AFirebirdCharacter::Tick(float DeltaSeconds)
{
    Super::Tick(DeltaSeconds);
    // the figure and the weapon are built once we know who we are (PlayerIndex arrives by replication)
    // (replicated properties arrive before BeginPlay, but whether this one is ours can take a frame)
    if (!bBuilt) { bBuilt = true; BuildBody(); }
    if (!GunBody && IsLocallyControlled() && Cast<APlayerController>(GetController())) BuildViewModel();
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
        if (HitstopReal <= 0.f)
        {
            const UFirebirdSession* Session = UFirebirdSession::Get(this);
            UGameplayStatics::SetGlobalTimeDilation(this, Session ? Session->WorldSpeed() : 1.f);   // stays stopped if the pause menu is up
        }
    }

    if (!bAutoDriven) ReadInput();
    FFirebirdInput I = Input;
    // one-shot presses are consumed this frame
    Input.bJump = Input.bDash = Input.bFist = Input.bCrouchPressed = Input.bFirePressed = Input.bReload = false;
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
            ReloadT = 0.f;
            Drum = FMath::Min(DrumSize, FMath::Max(Sparks, 50));
            for (int32 c = 0; c < Chambers.Num(); ++c) SetChamberLit(c, true);
            DrawT = 0.f;
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
        // where it happened, for the play record (tools/play-record.py): the pit spot and the checkpoint left behind
        UE_LOG(LogFirebird, Display, TEXT("FB_EVENT fell at (%.0f, %.0f) from (%.0f, %.0f)"),
            GetActorLocation().X, GetActorLocation().Y, Checkpoint.X, Checkpoint.Y);
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

    // weapons: a click fires as soon as the hammer is back (ClickInterval); holding fans it slower.
    // A press during the cooldown is remembered for a moment, so a quick double-click never eats a shot.
    SparkCooldown -= DeltaSeconds;
    FistCooldown -= DeltaSeconds;
    AimBlend = FMath::FInterpTo(AimBlend, IsAiming() ? 1.f : 0.f, DeltaSeconds, 14.f);
    Bloom = FMath::Max(0.f, Bloom - DeltaSeconds * 3.f);
    const float MoveSpread = FMath::Clamp(HorizontalSpeed() / RunSpeed, 0.f, 1.f) * HipSpread + (M->IsMovingOnGround() ? 0.f : 0.6f);
    SpreadDeg = (MoveSpread + Bloom) * FMath::Lerp(1.f, 0.15f, AimBlend);
    if (I.bFirePressed) FireQueued = 0.12f;
    FireQueued = FMath::Max(0.f, FireQueued - DeltaSeconds);
    if (ReloadT > 0.f)
    {
        ReloadT -= DeltaSeconds;
        // the crystals click into the drum one by one while it spins
        const int32 Clicks = FMath::Clamp(FMath::FloorToInt((1.f - ReloadT / ReloadTime - 0.3f) / 0.07f), 0, 6);
        while (ReloadClicks < Clicks) { ++ReloadClicks; FB::Sound(this, TEXT("caster_chamber"), GetActorLocation(), 0.45f, 1.f + 0.04f * ReloadClicks); if (ReloadClicks <= Chambers.Num()) SetChamberLit((NextChamber + ReloadClicks - 1) % 6, true); }
        if (ReloadT <= 0.f) FinishReload();
    }
    if (I.bReload && Drum < DrumSize && Sparks > Drum && ReloadT <= 0.f) StartReload();
    if (I.bFist && FistCooldown <= 0.f) Punch();
    else if ((FireQueued > 0.f || I.bFireHeld) && ReloadT <= 0.f && FistAnim <= 0.3f)
    {
        const float Since = SparkInterval - SparkCooldown;   // seconds since the last shot
        const bool bReady = FireQueued > 0.f ? Since >= ClickInterval : SparkCooldown <= 0.f;
        if (bReady)
        {
            FireQueued = 0.f;
            if (Drum <= 0) { if (Sparks > 0) StartReload(); else { FB::Sound(this, TEXT("caster_dry"), GetActorLocation(), 0.6f); SparkCooldown = SparkInterval; } }
            else FireSpark();
        }
    }

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
    const FRotator Dir = Span.Rotation();
    // your own shot is heard dry and close (2D); a teammate's from where they stand
    if (IsLocallyControlled()) FB::Sound2D(this, TEXT("spark_fire"), 0.75f);
    else FB::Sound(this, TEXT("spark_fire"), Muzzle, 0.9f);
    if (!Normal.IsNearlyZero()) FB::Sound(this, bHitHollow ? TEXT("spark_hit_hollow") : TEXT("spark_hit_wall"), Impact, 0.75f);
    // the round: a faint warm streak for a frame, enough to read where it went
    AFBFx::Spawn(GetWorld(), Muzzle + Span * 0.5f, Dir, FVector(Span.Size(), 0.6f, 0.6f), FLinearColor(1.f, 0.78f, 0.45f), 18.f, 0.035f);
    // the powder flash: a short orange-white star and a puff of grey smoke that drifts up.
    // On your own screen it sits at the pulled-in muzzle a hand's length from the eye, so it is drawn smaller.
    const float Fk = (IsLocallyControlled() && GunBody) ? 0.3f : 1.f;
    const FLinearColor Flash(1.f, 0.72f, 0.35f);
    AFBFx::Spawn(GetWorld(), Muzzle, Dir + FRotator(0, 0, 45), FVector(2.5f, 11.f, 1.4f) * Fk, Flash, 45.f, 0.04f);
    AFBFx::Spawn(GetWorld(), Muzzle, Dir + FRotator(0, 0, -45), FVector(2.5f, 11.f, 1.4f) * Fk, Flash, 45.f, 0.04f);
    AFBFx::Spawn(GetWorld(), Muzzle + Dir.Vector() * 4.f * Fk, Dir, FVector(9.f, 4.f, 4.f) * Fk, FLinearColor(1.f, 0.9f, 0.7f), 60.f, 0.03f, 0.f, 0.f, FVector::ZeroVector, 0.f, true);
    for (int32 k = 0; k < 3; ++k)
        AFBFx::Spawn(GetWorld(), Muzzle + Dir.Vector() * (4.f + 5.f * k) * Fk, FRotator::ZeroRotator, FVector(3.f + 2.f * k) * Fk, FLinearColor(0.07f, 0.065f, 0.06f), 0.f, 0.45f + 0.12f * k,
                     0.f, 0.f, (Dir.Vector() * 60.f + FVector(0, 0, 25.f) + FMath::VRand() * 12.f) * Fk, -30.f * Fk, true);
    if (Normal.IsNearlyZero()) return;
    // hits show light and sparks, never blood (SETTING_BRIEF section 5)
    if (bHitHollow) AFBFx::Burst(GetWorld(), Impact, 7, FLinearColor(1.f, 0.85f, 0.55f), 320.f, 0.25f, 4.f, 600.f, 12.f);
    else
    {
        AFBFx::Burst(GetWorld(), Impact + Normal * 4.f, 5, FLinearColor(1.f, 0.6f, 0.2f), 380.f, 0.2f, 2.f, 900.f, 14.f);   // ricochet sparks
        AFBFx::Burst(GetWorld(), Impact + Normal * 4.f, 4, FB::Limestone, 220.f, 0.45f, 3.f, 980.f, 0.f);                  // stone chips
        AFBFx::Spawn(GetWorld(), Impact + Normal * 6.f, FRotator::ZeroRotator, FVector(10.f), FLinearColor(0.42f, 0.38f, 0.33f), 0.05f, 0.6f, 0.f, 0.f, Normal * 40.f + FVector(0, 0, 15.f), -20.f, true);   // dust
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
    const FVector End = Eye + Aim.Vector() * 8000.f;
    FCollisionObjectQueryParams World;
    World.AddObjectTypesToQuery(ECC_WorldStatic);
    World.AddObjectTypesToQuery(ECC_WorldDynamic);
    const bool bWorld = W->LineTraceSingleByObjectType(Hit, Eye, End, World, Q);
    // A spark is a fat bolt of light, not a needle: a 10 cm sphere finds a Hollow whose edge the
    // crosshair is on, up to the wall the line hit. A thin line against the Hollow's narrow capsule
    // missed shots that were plainly on the body.
    FHitResult Body;
    const FVector Stop = bWorld ? FVector(Hit.ImpactPoint) : End;
    if (W->SweepSingleByObjectType(Body, Eye, Stop, FQuat::Identity, FCollisionObjectQueryParams(ECC_Pawn), FCollisionShape::MakeSphere(10.f), Q)
        && Cast<AHollow>(Body.GetActor()))
    {
        Hit = Body;
        return true;
    }
    if (bWorld) return true;
    return W->LineTraceSingleByObjectType(Hit, Eye, End, Objects, Q);
}

// where the bell mouth is drawn on this player's screen. First-person parts are drawn pulled toward
// the eye by the first-person scale, so a world-space flash or bolt must start at that pulled-in point.
static FVector DrawnMuzzle(const UCameraComponent* Camera, const USceneComponent* MuzzlePoint)
{
    const FVector Eye = Camera->GetComponentLocation();
    const FVector At = MuzzlePoint ? MuzzlePoint->GetComponentLocation() : Camera->GetComponentTransform().TransformPosition(FVector(60.f, 13.f, -12.f));
    return Eye + (At - Eye) * Camera->FirstPersonScale;
}

void AFirebirdCharacter::FireSpark()
{
    if (Sparks <= 0 || Drum <= 0) { SparkCooldown = 0.3f; return; }
    if (!HasAuthority()) Sparks--;   // shown at once here; the host keeps the real count
    Drum--;
    SparkCooldown = SparkInterval;
    // the drum turns a place, the hammer falls and the chamber that fired goes dark
    if (Chambers.Num()) SetChamberLit(NextChamber, false);
    NextChamber = (NextChamber + 1) % 6;
    DrumTarget -= 60.f;
    HammerT = 0.f;
    // the kick: the barrel flips up and the gun shoves back, on springs (less down the sights)
    const float AimK = FMath::Lerp(1.f, 0.45f, AimBlend);
    KickPitchV += 900.f * AimK;
    KickBackV += 260.f * AimK;
    Recoil = 1.f;
    Shake += 0.18f * AimK;
    FovKick += 1.2f;
    if (GunBody) MuzzleLight->SetIntensity(1400.f);
    const FVector Eye = Camera->GetComponentLocation();
    // the cone: dead on down the sights or standing still; wider running, in the air and when fanned fast
    const float Cone = SpreadDeg;
    const FVector2D Off = FMath::RandPointInCircle(1.f) * Cone;
    const FRotator Aim = GetControlRotation() + FRotator(Off.Y, Off.X, 0.f);
    Bloom = FMath::Min(Bloom + BloomPerShot, 2.5f);
    FHitResult Hit;
    const bool bHit = SparkTrace(GetWorld(), this, Eye, Aim, Hit);
    const FVector Muzzle = GunBody ? DrawnMuzzle(Camera, MuzzlePoint) : GetActorLocation() + GetActorRotation().RotateVector(FVector(55.f, 22.f, 20.f));
    ShotFx(Muzzle, bHit ? FVector(Hit.ImpactPoint) : Eye + Aim.Vector() * 8000.f, bHit ? FVector(Hit.ImpactNormal) : FVector::ZeroVector, bHit && Cast<AHollow>(Hit.GetActor()));
    Server_Fire(Eye, Aim, GetActorLocation() + GetActorRotation().RotateVector(FVector(55.f, 22.f, 20.f)));
    // the last crystal: start loading at once so the rhythm keeps going
    if (Drum <= 0 && Sparks > 0) StartReload();
}

void AFirebirdCharacter::StartReload()
{
    if (ReloadT > 0.f || bDead) return;
    ReloadT = ReloadTime;
    ReloadClicks = 0;
    FireQueued = 0.f;
    FB::Sound(this, TEXT("caster_open"), GetActorLocation(), 0.7f);
    UE_LOG(LogFirebird, Display, TEXT("FB_EVENT reload drum=%d sparks=%d"), Drum, Sparks);
}

void AFirebirdCharacter::FinishReload()
{
    ReloadT = 0.f;
    Drum = FMath::Min(DrumSize, Sparks);
    for (int32 c = 0; c < Chambers.Num(); ++c) SetChamberLit(c, c < Drum || Drum >= DrumSize);
    FB::Sound(this, TEXT("caster_close"), GetActorLocation(), 0.8f);
    SparkCooldown = FMath::Min(SparkCooldown, 0.f);
}

void AFirebirdCharacter::SetChamberLit(int32 Index, bool bLit)
{
    if (!Chambers.IsValidIndex(Index) || !Chambers[Index]) return;
    Chambers[Index]->SetMaterial(0, bLit ? (UMaterialInterface*)ChamberLitMat : (UMaterialInterface*)ChamberSpentMat);
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
    // a sixgun hits harder per shot than the old caster (8-14) and fires a little slower when held
    const bool bBroke = H->TakeHit(FMath::FRandRange(13.f, 18.f), Aim.Vector(), false, this);
    if (bBroke) Sparks = FMath::Min(MaxSparks, Sparks + 2);
    Client_HitConfirm(bBroke);
}

void AFirebirdCharacter::Multi_ShotFx_Implementation(FVector_NetQuantize Muzzle, FVector_NetQuantize Impact, FVector_NetQuantizeNormal Normal, bool bHitHollow)
{
    ++BodyShotSerial;
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
    if (GunBody) FistLight->SetIntensity(300.f);
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
    ++BodyPunchSerial;   // the native blend graph layers this over locomotion
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
    const FVector At = GetActorLocation();
    UE_LOG(LogFirebird, Display, TEXT("FB_EVENT hurt P%d amount=%.0f health=%.0f at (%.0f, %.0f) from (%.0f, %.0f)"),
        PlayerIndex + 1, Amount, Health, At.X, At.Y, From.X, From.Y);
    if (Health <= 0.f)
    {
        Health = 0.f;
        bDead = true;
        UE_LOG(LogFirebird, Display, TEXT("FB_EVENT death P%d at (%.0f, %.0f) from (%.0f, %.0f)"),
            PlayerIndex + 1, At.X, At.Y, From.X, From.Y);
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
    if (BodyGlow) BodyGlow->SetIntensity(bDead ? 1.f : 8.f + 2.f * FMath::Sin(GetWorld()->GetTimeSeconds() * 2.f));
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
    const float BobAmt = M->IsMovingOnGround() && !bSliding ? FMath::Clamp(Speed / RunSpeed, 0.f, 1.f) * FMath::Lerp(1.f, 0.2f, AimBlend) : 0.f;
    Shake *= FMath::Exp(-DeltaSeconds * 9.f);
    const FVector ShakeV = FMath::VRand() * Shake * 2.f;
    Camera->SetRelativeLocation(FVector(0.f, 0.f, CamZ + FMath::Sin(BobPhase * 2.f) * 1.6f * BobAmt) + ShakeV);

    // Hold right mouse / LB for a closer, steadier view down the sights; letting go eases back.
    FovKick *= FMath::Exp(-DeltaSeconds * 7.f);
    const float TargetFov = Fov * FMath::Lerp(1.f, AimZoom, AimBlend) + FovKick + (DashT > 0.f ? 6.f : 0.f);
    Camera->SetFieldOfView(FMath::FInterpTo(Camera->FieldOfView, TargetFov, DeltaSeconds, 14.f));

    // a lean into slides; only a breath of lean on strafes, so the horizon stays put while aiming
    const float Strafe = FVector::DotProduct(GetVelocity(), FRotationMatrix(GetControlRotation()).GetScaledAxis(EAxis::Y)) / RunSpeed;
    CamRoll = FMath::FInterpTo(CamRoll, bSliding ? -4.f : Strafe * 0.6f * (1.f - AimBlend), DeltaSeconds, 8.f);
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
    ViewRig->SetRelativeLocation(FVector(0.f, FMath::Sin(BobPhase) * 1.4f * BobAmt, -FMath::Abs(FMath::Cos(BobPhase)) * 1.2f * BobAmt - (bSliding ? 3.f : 0.f) - Dip));
    ViewRig->SetRelativeRotation(FRotator(0.f, 0.f, bSliding ? -8.f : 0.f));
    MuzzleLight->SetIntensity(MuzzleLight->Intensity * FMath::Exp(-DeltaSeconds * 40.f));
    UpdateWeapon(DeltaSeconds);
}

// The sixgun's motion, all on springs so it settles with a little life instead of sliding back:
// the kick (barrel flips up, gun shoves back), sway (the gun trails your look and strafe), the drum
// turning a place per shot, the hammer falling and cocking, the draw, the aim pose, and the reload
// (tip the gun over, spin the drum while the crystals click in, flick it back).
static void Spring(float& X, float& V, float Target, float Stiff, float Damp, float Dt)
{
    // semi-implicit, sub-stepped so a low frame rate never blows up
    const int32 Steps = FMath::Clamp(FMath::CeilToInt(Dt / (1.f / 240.f)), 1, 8);
    const float H = Dt / Steps;
    for (int32 i = 0; i < Steps; ++i) { V += (-(X - Target) * Stiff - V * Damp) * H; X += V * H; }
}

void AFirebirdCharacter::UpdateWeapon(float DeltaSeconds)
{
    if (!GunPivot) return;
    const float Dt = FMath::Min(DeltaSeconds, 0.05f);
    Recoil *= FMath::Exp(-Dt * 16.f);
    Spring(KickPitch, KickPitchV, 0.f, 260.f, 22.f, Dt);   // a touch under-damped: kicks, overshoots a hair, settles
    Spring(KickBack, KickBackV, 0.f, 320.f, 30.f, Dt);
    // sway: the gun lags the look a little (clamped), plus a lean into strafes
    const FVector2D LookNow(Input.Look.X, Input.Look.Y);
    const FVector2D SwayTarget(FMath::Clamp(-LookNow.X * 0.9f, -5.f, 5.f), FMath::Clamp(-LookNow.Y * 0.9f, -4.f, 4.f));
    Spring(Sway.X, SwayV.X, SwayTarget.X * (1.f - 0.7f * AimBlend), 140.f, 18.f, Dt);
    Spring(Sway.Y, SwayV.Y, SwayTarget.Y * (1.f - 0.7f * AimBlend), 140.f, 18.f, Dt);
    const float Strafe = FVector::DotProduct(GetVelocity(), FRotationMatrix(GetControlRotation()).GetScaledAxis(EAxis::Y)) / RunSpeed;

    DrawT = FMath::Min(1.f, DrawT + Dt / 0.35f);
    const float Draw = 1.f - FMath::Pow(1.f - DrawT, 3.f);
    HammerT = FMath::Min(1.f, HammerT + Dt / 0.11f);
    DrumAngle = FMath::FInterpTo(DrumAngle, DrumTarget, Dt, 30.f);
    const float T = GetWorld()->GetTimeSeconds();
    const float Breathe = FMath::Sin(T * 1.6f) * 0.35f * (1.f - AimBlend);

    // reload pose: 0..0.22 tip over, 0.22..0.8 spin, 0.8..1 flick back
    float Tip = 0.f, Spin = 0.f;
    if (ReloadT > 0.f)
    {
        const float P = 1.f - ReloadT / ReloadTime;
        Tip = P < 0.22f ? FMath::SmoothStep(0.f, 0.22f, P) : P < 0.8f ? 1.f : 1.f - FMath::SmoothStep(0.8f, 1.f, P);
        if (P > 0.22f && P < 0.8f) Spin = (P - 0.22f) / 0.58f;
    }
    const float Dash = DashT > 0.f ? 1.f : 0.f;

    // hip pose -> aim pose. Down the sights the rear notch and the front blade line up on the eye:
    // the blade stands 2.15 cm taller over 21.4 cm of barrel, so the gun dips 5.74 degrees and its
    // sight line sits 6.31 cm over the grip (first-person scale keeps what lines up on screen lined up).
    const float A = FMath::SmoothStep(0.f, 1.f, AimBlend);
    const FVector Hip = GripAt, Aimed(34.f, 0.f, -6.31f);
    FVector At = FMath::Lerp(Hip, Aimed, A);
    At += FVector(-KickBack * 0.25f, Sway.X * 0.25f, Sway.Y * 0.2f + Breathe - (1.f - Draw) * 18.f - Dash * 3.f);
    At += FVector(-2.f * Tip, -6.f * Tip, 3.f * Tip);
    GunPivot->SetRelativeLocation(At);
    GunPivot->SetRelativeRotation(FRotator(
        -5.74f * A + KickPitch * 0.35f + Sway.Y * 0.8f + 18.f * Tip - (1.f - Draw) * 35.f - Dash * 8.f,
        Sway.X * 0.9f - 6.f * Tip,
        -Strafe * 3.f * (1.f - AimBlend) - 55.f * Tip));
    if (DrumPivot) DrumPivot->SetRelativeRotation(FRotator(0.f, 0.f, DrumAngle + Spin * 900.f));
    if (HammerPivot) HammerPivot->SetRelativeRotation(FRotator(-30.f * FMath::SmoothStep(0.2f, 1.f, HammerT), 0.f, 0.f));
}
