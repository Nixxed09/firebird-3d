#include "FBRange.h"
#include "Firebird.h"
#include "FBArt.h"
#include "Materials/MaterialInstanceDynamic.h"
#include "FirebirdCharacter.h"
#include "FirebirdHUD.h"
#include "Hollow.h"
#include "FBFx.h"
#include "FBAudio.h"
#include "Components/DirectionalLightComponent.h"
#include "Components/ExponentialHeightFogComponent.h"
#include "Components/PointLightComponent.h"
#include "Components/PostProcessComponent.h"
#include "Components/SkyAtmosphereComponent.h"
#include "Components/SkyLightComponent.h"
#include "Components/StaticMeshComponent.h"
#include "Components/InstancedStaticMeshComponent.h"
#include "Engine/CollisionProfile.h"
#include "GameFramework/PlayerController.h"
#include "Kismet/GameplayStatics.h"
#include "EngineUtils.h"
#include "GameFramework/GameStateBase.h"
#include "Net/UnrealNetwork.h"

using namespace FBCourse;

AFBRange::AFBRange()
{
    PrimaryActorTick.bCanEverTick = true;
    bReplicates = true;
    bAlwaysRelevant = true;   // every player needs the course and the arena state
    RootComponent = CreateDefaultSubobject<USceneComponent>(TEXT("Root"));
    RootComponent->SetMobility(EComponentMobility::Static);
}

UStaticMeshComponent* AFBRange::Block(const FVector& Min, const FVector& Max, UMaterialInterface* Mat, bool bCollide)
{
    UStaticMeshComponent* C = NewObject<UStaticMeshComponent>(this);
    C->SetMobility(EComponentMobility::Static);
    C->SetStaticMesh(FB::Cube());
    C->SetupAttachment(RootComponent);
    C->SetWorldLocation((Min + Max) * 0.5f);
    C->SetWorldScale3D((Max - Min) / 100.f);
    C->SetMaterial(0, Mat);
    if (bCollide) C->SetCollisionProfileName(UCollisionProfile::BlockAll_ProfileName);
    else C->SetCollisionEnabled(ECollisionEnabled::NoCollision);
    C->RegisterComponent();
    return C;
}

UPointLightComponent* AFBRange::Lamp(const FVector& At, const FLinearColor& Color, float Candela, float Radius)
{
    UPointLightComponent* L = NewObject<UPointLightComponent>(this);
    L->SetMobility(EComponentMobility::Movable);
    L->SetupAttachment(RootComponent);
    L->SetWorldLocation(At);
    L->SetIntensityUnits(ELightUnits::Candelas);
    L->SetIntensity(Candela);
    L->SetAttenuationRadius(Radius);
    L->SetLightColor(Color);
    L->SetCastShadows(false);
    L->RegisterComponent();
    return L;
}

// a brass-caged torch on a post: pairs of them mark the way on (cue language, N2)
void AFBRange::Torch(const FVector& At)
{
    Art(TEXT("SM_FB_Lantern"), At);
    Lamp(At + FVector(0, 0, 148), FLinearColor(1.f, .62f, .25f), 22.f, 720.f);
}

void AFBRange::Atmosphere()
{
    // an ember sunset: the sun low and orange through the ash (the cover's sky)
    UDirectionalLightComponent* Sun = NewObject<UDirectionalLightComponent>(this);
    Sun->SetMobility(EComponentMobility::Movable);
    Sun->SetupAttachment(RootComponent);
    Sun->SetWorldRotation(FRotator(-24.f, -35.f, 0.f));
    Sun->SetIntensity(5.f);
    Sun->SetLightColor(FLinearColor(1.f, 0.79f, 0.57f));
    Sun->SetAtmosphereSunLight(true);
    Sun->RegisterComponent();

    USkyAtmosphereComponent* Sky = NewObject<USkyAtmosphereComponent>(this);
    Sky->SetupAttachment(RootComponent);
    Sky->SetMieScatteringScale(0.035f);
    Sky->SetMieAbsorptionScale(0.4f);
    Sky->SetRayleighScatteringScale(0.03f);
    Sky->RegisterComponent();

    USkyLightComponent* Ambient = NewObject<USkyLightComponent>(this);
    Ambient->SetMobility(EComponentMobility::Movable);
    Ambient->SetupAttachment(RootComponent);
    Ambient->bRealTimeCapture = true;
    Ambient->SetIntensity(1.1f);
    Ambient->RegisterComponent();

    UExponentialHeightFogComponent* Fog = NewObject<UExponentialHeightFogComponent>(this);
    Fog->SetupAttachment(RootComponent);
    Fog->SetWorldLocation(FVector(0, 0, -200));
    Fog->SetFogDensity(0.009f);
    Fog->SetFogHeightFalloff(0.25f);
    Fog->SetFogInscatteringColor(FLinearColor(0.32f, 0.12f, 0.05f));
    Fog->SetVolumetricFog(true);
    Fog->SetVolumetricFogScatteringDistribution(0.6f);
    Fog->RegisterComponent();

    // the ember grade (v2's atmosphere.js, in UE terms): warm shadows, bloom, a dark ember vignette
    UPostProcessComponent* PP = NewObject<UPostProcessComponent>(this);
    PP->SetupAttachment(RootComponent);
    PP->bUnbound = true;
    FPostProcessSettings& S = PP->Settings;
    S.bOverride_BloomIntensity = true; S.BloomIntensity = 0.28f;
    S.bOverride_VignetteIntensity = true; S.VignetteIntensity = 0.28f;
    S.bOverride_FilmGrainIntensity = true; S.FilmGrainIntensity = 0.015f;
    S.bOverride_ColorGainShadows = true; S.ColorGainShadows = FVector4(1.12f, 0.92f, 0.8f, 1.f);
    S.bOverride_ColorSaturation = true; S.ColorSaturation = FVector4(1.08f, 1.f, 0.95f, 1.f);
    S.bOverride_AutoExposureMinBrightness = true; S.AutoExposureMinBrightness = 0.6f;
    S.bOverride_AutoExposureMaxBrightness = true; S.AutoExposureMaxBrightness = 2.6f;
    S.bOverride_AutoExposureBias = true; S.AutoExposureBias = -0.45f;
    S.bOverride_AutoExposureSpeedUp = true; S.AutoExposureSpeedUp = 6.f;
    S.bOverride_AutoExposureSpeedDown = true; S.AutoExposureSpeedDown = 3.f;
    PP->RegisterComponent();
}

void AFBRange::BeginPlay()
{
    Super::BeginPlay();
    Atmosphere();
    FB::StartAmbience(this);   // distant fire and the music bed, on every computer
    UMaterialInterface* Stone = FBArt::Surface(this, TEXT("M_FB_World_BasaltPavers"), FLinearColor(1.45f, 1.4f, 1.3f));
    UMaterialInterface* StoneDark = FBArt::Surface(this, TEXT("M_FB_World_LimestoneBlocks"));
    UMaterialInterface* BasaltM = FBArt::Surface(this, TEXT("M_FB_World_BasaltPavers"));
    UMaterialInterface* BrassM = FBArt::Surface(this, TEXT("M_FB_World_BronzePanels"));
    GridMaterial = FB::MakeGlow(this, FB::Crimson * .5f, 1.3f);
    UMaterialInterface* Mercury = GridMaterial;
    UMaterialInterface* Lava = FBArt::Material(TEXT("M_FB_MercuryFlow"));
    UMaterialInterface* Aether = FB::MakeGlow(this, FB::Aether, 1.3f);

    // A arrival, B short gap, then the platform before the long gap
    Block(FVector(-500, -500, -100), FVector(GapAStart, 500, 0), Stone);
    Block(FVector(GapAEnd, -500, -100), FVector(GapBStart, 500, 0), Stone);
    // C the furnace pit under both gaps, glowing
    Block(FVector(GapAStart - 50, -900, -900), FVector(GapBEnd + 50, 900, -820), Lava, false);
    Lamp(FVector((GapBStart + GapBEnd) * 0.5f, 0, -600), FB::Orange, 220.f, 1500.f);
    Lamp(FVector((GapAStart + GapAEnd) * 0.5f, 0, -600), FB::Orange, 90.f, 1000.f);
    // pit walls, so the drop reads as deep, and closed at both ends
    Block(FVector(GapAStart - 60, -520, -820), FVector(GapAStart, 520, -100), StoneDark);
    Block(FVector(GapBEnd, -520, -820), FVector(GapBEnd + 60, 520, -100), StoneDark);
    Block(FVector(GapAStart, -520, -820), FVector(GapBEnd, -500, 0), StoneDark);
    Block(FVector(GapAStart, 500, -820), FVector(GapBEnd, 520, 0), StoneDark);
    // D the far platform and the low gate: a brass beam you can only pass under by sliding or crouching
    Block(FVector(GapBEnd, -500, -100), FVector(ArenaStart, 500, 0), Stone);
    Block(FVector(GateStart, -500, GateBottom), FVector(GateEnd, 500, 420), BrassM);
    Block(FVector(GateStart - 10, -500, GateBottom - 12), FVector(GateStart, 500, GateBottom), Aether, false);   // a glowing lip says "low"
    // side walls along the course
    Block(FVector(-500, -560, -100), FVector(GapAStart, -500, 420), StoneDark);
    Block(FVector(-500, 500, -100), FVector(GapAStart, 560, 420), StoneDark);
    Block(FVector(GapBEnd, -560, -100), FVector(ArenaStart, -500, 420), StoneDark);
    Block(FVector(GapBEnd, 500, -100), FVector(ArenaStart, 560, 420), StoneDark);
    Block(FVector(-560, -560, -100), FVector(-500, 560, 420), StoneDark);

    // E the arena: Overseer basalt with mercury seams, pillars to circle
    Block(FVector(ArenaStart, -1400, -100), FVector(ArenaEnd, 1400, 0), BasaltM);
    Block(FVector(ArenaStart, -1460, -100), FVector(ArenaEnd, -1400, 900), BasaltM);
    Block(FVector(ArenaStart, 1400, -100), FVector(ArenaEnd, 1460, 900), BasaltM);
    Block(FVector(ArenaEnd, -1460, -100), FVector(ArenaEnd + 60, 1460, 900), BasaltM);
    Block(FVector(ArenaStart, -1460, -100), FVector(ArenaStart + 60, -500, 900), BasaltM);
    Block(FVector(ArenaStart, 500, -100), FVector(ArenaStart + 60, 1460, 900), BasaltM);
    for (float Y : { -1395.f, 1385.f }) for (float Z : { 250.f, 550.f })
        Block(FVector(ArenaStart + 60, Y, Z), FVector(ArenaEnd, Y + 10, Z + 4), Mercury, false);
    for (float X : { 6500.f, 7600.f }) for (float Y : { -650.f, 650.f })
    {
        UStaticMeshComponent* Collider = Block(FVector(X - 90, Y - 90, 0), FVector(X + 90, Y + 90, 600), StoneDark);
        Collider->SetVisibility(false);
        Collider->SetCastShadow(false);
        Art(TEXT("SM_FB_Column_4m"), FVector(X, Y, 0), FRotator::ZeroRotator, FVector(2.f, 2.f, 1.55f));
    }
    Lamp(FVector(6800, -100, 750), FLinearColor(1.f, .87f, .7f), 850.f, 2300.f);
    Lamp(FVector(8000, 150, 750), FLinearColor(.6f, .76f, 1.f), 650.f, 2200.f);

    // torch pairs: the way on (arrival -> gaps, the gate, the arena door)
    Torch(FVector(1700, -420, 0)); Torch(FVector(1700, 420, 0));
    Torch(FVector(GateStart - 200, -420, 0)); Torch(FVector(GateStart - 200, 420, 0));
    Torch(FVector(ArenaStart - 150, -420, 0)); Torch(FVector(ArenaStart - 150, 420, 0));
    DressArchitecture();

    // the Hollows (the host owns them): the first one alone, in view from the arena door (L3, P6)
    if (!HasAuthority()) return;
    FActorSpawnParameters P;
    P.SpawnCollisionHandlingOverride = ESpawnActorCollisionHandlingMethod::AdjustIfPossibleButAlwaysSpawn;
    if (AHollow* H1 = GetWorld()->SpawnActor<AHollow>(AHollow::StaticClass(), FVector(7050, 0, 100), FRotator(0, 180, 0), P)) Hollows.Add(H1);
    if (AHollow* H2 = GetWorld()->SpawnActor<AHollow>(AHollow::StaticClass(), FVector(8000, -900, 100), FRotator(0, 180, 0), P))
    {
        H2->bHoldFire = true;   // it joins once the first is dealt with
        H2->WakeRange = 0.f;
        Hollows.Add(H2);
    }
    UE_LOG(LogFirebird, Display, TEXT("FB_EVENT range_built hollows=%d"), Hollows.Num());
}

void AFBRange::Art(const TCHAR* Name, const FVector& At, const FRotator& Rotation, const FVector& Scale)
{
    if (GetNetMode() == NM_DedicatedServer) return;
    const FName Key(Name);
    UInstancedStaticMeshComponent* Batch = ArtBatches.FindRef(Key);
    if (!Batch)
    {
        UStaticMesh* Mesh = FBArt::Mesh(Name);
        if (!Mesh) return;
        Batch = NewObject<UInstancedStaticMeshComponent>(this);
        Batch->SetupAttachment(RootComponent);
        Batch->SetMobility(EComponentMobility::Static);
        Batch->SetStaticMesh(Mesh);
        const int32 StoneSlot = Batch->GetMaterialIndex(TEXT("M_FB_Limestone"));
        if (StoneSlot != INDEX_NONE) Batch->SetMaterial(StoneSlot, FBArt::Material(TEXT("M_FB_World_CutStone")));
        Batch->SetCollisionEnabled(ECollisionEnabled::NoCollision);
        Batch->SetCanEverAffectNavigation(false);
        Batch->RegisterComponent();
        ArtBatches.Add(Key, Batch);
    }
    Batch->AddInstance(FTransform(Rotation, At, Scale));
}

void AFBRange::DressArchitecture()
{
    UMaterialInterface* Bronze = FBArt::Material(TEXT("M_FB_World_BronzePanels"));
    UMaterialInterface* Brick = FBArt::Material(TEXT("M_FB_World_MudBrick"));
    UMaterialInterface* Ceiling = FBArt::Material(TEXT("M_FB_World_CeilingStone"));
    UMaterialInterface* Limestone = FBArt::Material(TEXT("M_FB_World_LimestoneBlocks"));
    // Colliders stay on the tested course. All dressing is visual-only.
    // An arcade on each side of the approach, with a ribbed stone canopy.
    for (float X : { -250.f, 150.f, 550.f, 950.f, 1350.f, 1750.f, 4300.f, 4700.f, 5100.f, 5500.f })
    {
        for (float Sign : { -1.f, 1.f })
        {
            Art(TEXT("SM_FB_Arch_4m"), FVector(X, Sign * 526, 0), FRotator(0, Sign < 0 ? 0 : 180, 0));
            Art(TEXT("SM_FB_Cornice_4m"), FVector(X, Sign * 514, 415), FRotator(0, Sign < 0 ? 0 : 180, 0));
            Art(TEXT("SM_FB_StarPlaque"), FVector(X, Sign * 489, 247), FRotator(0, Sign < 0 ? 0 : 180, 0), FVector(.7f));
            Art(TEXT("SM_FB_RubbleCluster"), FVector(X + 120, Sign * 470, 0), FRotator(0, X * .17f, 0), FVector(.65f));
        }
        Art(TEXT("SM_FB_Vault_10m"), FVector(X, 0, 420));
        Lamp(FVector(X, 0, 430), FLinearColor(.88f, .86f, .78f), X < 1800 ? 130.f : 65.f, 850.f);
    }
    // Dark silt courses at ground level and continuous bronze edge protection.
    for (const FVector2D Span : { FVector2D(-500, GapAStart), FVector2D(GapBEnd, ArenaStart) })
        for (float Y : { -499.f, 495.f })
        {
            Block(FVector(Span.X, Y, 0), FVector(Span.Y, Y + 4, 65), Brick, false);
            Block(FVector(Span.X, Y - 3, 68), FVector(Span.Y, Y + 5, 74), Bronze, false);
            Block(FVector(Span.X, Y, 386), FVector(Span.Y, Y + 5, 400), Bronze, false);
        }
    // The slide gate is a bronze resonance shutter, with a clear low cyan lip.
    for (float Y = -440; Y <= 440; Y += 110)
    {
        Block(FVector(GateStart - 8, Y - 6, 140), FVector(GateStart - 2, Y + 6, 402), Bronze, false);
        Block(FVector(GateEnd + 2, Y - 6, 140), FVector(GateEnd + 8, Y + 6, 402), Bronze, false);
    }
    Art(TEXT("SM_FB_Arch_4m"), FVector(ArenaStart - 25, 0, 0), FRotator(0, 90, 0), FVector(2.05f, 1, 1.8f));
    // Basalt room shell, limestone arcades and a coffered crown above the fight.
    for (float X = 5800; X <= 8200; X += 400)
    {
        for (float Sign : { -1.f, 1.f })
        {
            Art(TEXT("SM_FB_Arch_4m"), FVector(X, Sign * 1380, 50), FRotator(0, Sign < 0 ? 0 : 180, 0), FVector(1, 1, 1.3f));
            Art(TEXT("SM_FB_Cornice_4m"), FVector(X, Sign * 1366, 730), FRotator(0, Sign < 0 ? 0 : 180, 0));
            Block(FVector(X - 195, Sign * 1360 - 8, 750), FVector(X + 195, Sign * 1360 + 8, 865), Limestone, false);
            Art(TEXT("SM_FB_StarPlaque"), FVector(X, Sign * 1370, 375), FRotator(0, Sign < 0 ? 0 : 180, 0));
            Art(TEXT("SM_FB_RubbleCluster"), FVector(X + 80, Sign * 1345, 0), FRotator(0, X * .12f, 0));
        }
        // Shallow ceiling vaults share the same model and material palette.
        Art(TEXT("SM_FB_Vault_10m"), FVector(X, 0, 900), FRotator::ZeroRotator, FVector(1, 2.8f, .68f));
        Block(FVector(X - 15, -1410, 881), FVector(X + 15, 1410, 900), Bronze, false);
    }
    for (float Y = -1200; Y <= 1200; Y += 400)
    {
        Art(TEXT("SM_FB_Arch_4m"), FVector(ArenaEnd - 25, Y, 50), FRotator(0, 90, 0), FVector(1, 1, 1.3f));
        Art(TEXT("SM_FB_Cornice_4m"), FVector(ArenaEnd - 40, Y, 730), FRotator(0, 90, 0));
    }
    // Borders subdivide the large floor; hero medallions punctuate the center.
    for (float Y : { -1320.f, -1120.f, 1120.f, 1320.f })
        Block(FVector(ArenaStart + 70, Y, .3f), FVector(ArenaEnd - 20, Y + 2.5f, 1.2f), Bronze, false);
    for (float X : { 6150.f, 7000.f, 8050.f })
        Art(TEXT("SM_FB_Floor_4m"), FVector(X, 0, -3.5f), FRotator::ZeroRotator, FVector(1.2f, 1.2f, 1));
    for (float X : { 6200.f, 7200.f, 8150.f })
        for (float Y : { -1280.f, 1280.f }) Torch(FVector(X, Y, 0));
    Art(TEXT("SM_FB_Waystone"), FVector(ArenaEnd - 100, 0, 0), FRotator(0, 90, 0), FVector(1.3f));
    WaystoneMaterial = FBArt::Surface(this, TEXT("M_FB_Aether"), FB::Aether);
    WaystoneMaterial->SetScalarParameterValue(TEXT("Emissive"), .08f);
    if (UInstancedStaticMeshComponent* Waystone = ArtBatches.FindRef(TEXT("SM_FB_Waystone")))
    {
        const int32 Slot = Waystone->GetMaterialIndex(TEXT("M_FB_Aether"));
        if (Slot != INDEX_NONE) Waystone->SetMaterial(Slot, WaystoneMaterial);
    }
    WaystoneLight = Lamp(FVector(ArenaEnd - 230, 0, 220), FB::Aether, 2.f, 1100.f);
    Art(TEXT("SM_FB_Bell"), FVector(7000, 0, 760), FRotator::ZeroRotator, FVector(1.5f));
    Block(FVector(6997, -3, 900), FVector(7003, 3, 1110), Bronze, false);
    // Upper pit walls, immense support piers and a distant bell silhouette.
    for (float Y : { -830.f, 830.f })
    {
        Block(FVector(GapAStart - 60, Y - 55, -810), FVector(GapBEnd + 60, Y + 55, 320), Brick, false);
        for (float X : { 2100.f, 2700.f, 3300.f, 3950.f })
        {
            Art(TEXT("SM_FB_Column_4m"), FVector(X, Y, -720), FRotator::ZeroRotator, FVector(1.3f, 1.3f, 2.6f));
            Art(TEXT("SM_FB_Cornice_4m"), FVector(X, Y, 300), FRotator(0, Y < 0 ? 0 : 180, 0), FVector(1.5f));
        }
    }
    // Visible undersides receive the same masonry, including the course overhangs.
    Block(FVector(-500, -500, -104), FVector(GapAStart, 500, -100), Ceiling, false);
    Block(FVector(GapAEnd, -500, -104), FVector(GapBStart, 500, -100), Ceiling, false);
    Block(FVector(GapBEnd, -500, -104), FVector(ArenaStart, 500, -100), Ceiling, false);
    // Finish the exposed tunnel mouths and pit ledges, including their reverse sides.
    for (float X : { GapAStart - 3, GapBEnd + 3 })
    {
        Art(TEXT("SM_FB_Arch_4m"), FVector(X, 0, -10), FRotator(0, 90, 0), FVector(2.5f, 1, 1.28f));
        for (float Sign : { -1.f, 1.f })
            Block(FVector(X - 25, Sign * 655 - 120, -820), FVector(X + 25, Sign * 655 + 120, 430), Brick, false);
    }
    for (float X : { GapAStart, GapAEnd, GapBStart, GapBEnd })
        Block(FVector(X - 4, -499, -10), FVector(X + 4, 499, 0), Bronze, false);
    Lamp(FVector(3000, 0, 550), FLinearColor(.48f, .58f, .72f), 280.f, 2200.f);
    // Distant buried foundations close the horizon beyond the furnace walls.
    for (float Sign : { -1.f, 1.f })
        Block(FVector(1700, Sign * 1600 - 300, -850), FVector(4550, Sign * 1600 + 300, 40), Brick, false);
    Art(TEXT("SM_FB_Arch_4m"), FVector(3100, 1400, 300), FRotator::ZeroRotator, FVector(2, 1.3f, 2));
    Art(TEXT("SM_FB_Bell"), FVector(3100, 1400, 950), FRotator::ZeroRotator, FVector(2));
    Lamp(FVector(3100, 1100, 750), FLinearColor(1.f, .68f, .3f), 350.f, 2300.f);
    int32 Instances = 0;
    for (const auto& Pair : ArtBatches) Instances += Pair.Value->GetInstanceCount();
    UE_LOG(LogFirebird, Display, TEXT("FB_ART range batches=%d instances=%d"), ArtBatches.Num(), Instances);
}

AFBRange* AFBRange::Get(UWorld* World)
{
    for (TActorIterator<AFBRange> It(World); It; ++It) return *It;
    return nullptr;
}

void AFBRange::GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& OutLifetimeProps) const
{
    Super::GetLifetimeReplicatedProps(OutLifetimeProps);
    DOREPLIFETIME(AFBRange, Wave);
    DOREPLIFETIME(AFBRange, WaveCount);
    DOREPLIFETIME(AFBRange, HollowsLeft);
    DOREPLIFETIME(AFBRange, bArenaClear);
}

void AFBRange::Say(const FString& Line)
{
    if (APlayerController* PC = UGameplayStatics::GetPlayerController(this, 0))
        if (AFirebirdHUD* H = Cast<AFirebirdHUD>(PC->GetHUD())) H->Say(Line, 4.5f);
    FB::Sound2D(this, TEXT("riley_radio"), 0.6f);
    UE_LOG(LogFirebird, Display, TEXT("FB_RADIO %s"), *Line);
}

void AFBRange::Multi_Say_Implementation(const FString& Line) { Say(Line); }

void AFBRange::Multi_ArenaClear_Implementation(float Seconds)
{
    bArenaClear = true;
    ClearTime = Seconds;
    if (APlayerController* PC = UGameplayStatics::GetPlayerController(this, 0))
        if (AFirebirdHUD* H = Cast<AFirebirdHUD>(PC->GetHUD())) H->Celebrate(FString::Printf(TEXT("ARENA CLEAR  %d:%02d"), (int32)Seconds / 60, (int32)Seconds % 60));
    UE_LOG(LogFirebird, Display, TEXT("FB_EVENT arena_clear seconds=%.1f"), Seconds);
}

void AFBRange::Tick(float DeltaSeconds)
{
    Super::Tick(DeltaSeconds);
    TickLocalRadio();
    if (bArenaClear && Restoration < 1.f)
    {
        Restoration = FMath::Min(1.f, Restoration + DeltaSeconds / 2.5f);
        if (!bRestorationStarted)
        {
            bRestorationStarted = true;
            AFBFx::Resonance(GetWorld(), FVector(ArenaEnd - 100, 0, 140), FB::Aether, 320.f, 2.2f, FRotator(0, 90, 90));
            AFBFx::Burst(GetWorld(), FVector(ArenaEnd - 100, 0, 180), 22, FB::Aether, 180.f, 2.f, 9.f, -100.f, 3.f);
            UE_LOG(LogFirebird, Display, TEXT("FB_ART restoration_started"));
        }
        if (GridMaterial)
        {
            GridMaterial->SetVectorParameterValue(TEXT("Color"), FMath::Lerp(FB::Crimson * .5f, FB::Aether, Restoration));
            GridMaterial->SetScalarParameterValue(TEXT("Emissive"), 1.3f + Restoration);
        }
        if (WaystoneMaterial) WaystoneMaterial->SetScalarParameterValue(TEXT("Emissive"), .08f + Restoration * 2.2f);
        if (WaystoneLight) WaystoneLight->SetIntensity(2.f + 55.f * Restoration);
    }
    if (HasAuthority()) TickArena(DeltaSeconds);
}

// Riley on the radio for this computer's own player: one short, true line per
// new thing, before it's needed (L5). Each player hears their own as they go.
void AFBRange::TickLocalRadio()
{
    AFirebirdCharacter* P = Cast<AFirebirdCharacter>(UGameplayStatics::GetPlayerCharacter(this, 0));
    if (!P) return;
    const float X = P->GetActorLocation().X, Y = P->GetActorLocation().Y;
    if (RadioStage == 0 && GetWorld()->GetTimeSeconds() > 0.8f) { Say(TEXT("RILEY: WARM-UP RUN. JUMP THE FIRST GAP. YOU CAN JUMP A MOMENT AFTER THE EDGE.")); RadioStage = 1; }
    else if (RadioStage == 1 && X > GapAEnd + 100.f) { Say(TEXT("RILEY: THAT ONE'S TOO FAR TO JUMP. JUMP, THEN DASH WITH SHIFT AT THE TOP.")); RadioStage = 2; P->Checkpoint = FVector(GapAEnd + 150.f, Y, 110); }
    else if (RadioStage == 2 && X > GapBEnd + 100.f) { Say(TEXT("RILEY: LOW GATE. RUN AT IT AND HOLD CTRL TO SLIDE.")); RadioStage = 3; P->Checkpoint = FVector(GapBEnd + 150.f, Y, 110); }
    else if (RadioStage == 3 && X > ArenaStart + 100.f) { Say(TEXT("RILEY: A HOLLOW. CRACK ITS SHELL, THEN PUNCH IT WITH F TO SET THE LIGHT FREE.")); RadioStage = 4; P->Checkpoint = FVector(ArenaStart + 200.f, Y, 110); }
}

// The host runs the arena: the two teaching Hollows, then the forge wakes.
void AFBRange::TickArena(float DeltaSeconds)
{
    int32 Players = 0;
    for (TActorIterator<AFirebirdCharacter> It(GetWorld()); It; ++It) Players++;
    Players = FMath::Max(1, Players);
    int32 Alive = 0;
    for (AHollow* H : Hollows) if (IsValid(H) && H->IsAlive()) Alive++;
    HollowsLeft = Alive + ToSpawn;
    ArenaT += DeltaSeconds;

    switch (ArenaStage)
    {
    case 0:   // the first Hollow, alone
        if (Hollows.Num() > 0 && (!IsValid(Hollows[0]) || !Hollows[0]->IsAlive()))
        {
            if (ArenaStartTime < 0.f) ArenaStartTime = GetWorld()->GetTimeSeconds();
            if (Hollows.Num() > 1 && IsValid(Hollows[1]))
            {
                Hollows[1]->WakeRange = 3000.f;
                Hollows[1]->bHoldFire = false;
                Hollows[1]->Alert();
            }
            Multi_Say(TEXT("RILEY: ANOTHER ONE. WATCH ITS ARMS GO UP, THEN SIDESTEP."));
            ArenaStage = 1;
        }
        else if (ArenaStartTime < 0.f && Hollows.Num() > 0 && IsValid(Hollows[0]) && Hollows[0]->bAwake) ArenaStartTime = GetWorld()->GetTimeSeconds();
        break;
    case 1:   // the second
        if (Alive == 0)
        {
            Multi_Say(Players > 1 ? TEXT("RILEY: THE FORGE IS WAKING. STICK TOGETHER AND HOLD THE ARENA!") : TEXT("RILEY: THE FORGE IS WAKING. HOLD THE ARENA!"));
            ArenaStage = 2; ArenaT = 0.f;
        }
        break;
    case 2:   // a breather before each wave (E1): sparks and health topped up
        if (ArenaT > 4.f)
        {
            Wave++;
            // three waves, each a little bigger, and two more Hollows per extra player (co-op)
            // the bot co-op run cleared 3/4/6 (+2 a player) in 38 s with no one knocked down: too easy
            static const int32 Base[3] = { 4, 6, 8 };
            ToSpawn = Base[FMath::Clamp(Wave - 1, 0, 2)] + 3 * (Players - 1);
            SpawnT = 0.f;
            Multi_Say(FString::Printf(TEXT("RILEY: WAVE %d OF %d. %d HOLLOWS."), Wave, WaveCount, ToSpawn));
            ArenaStage = 3;
        }
        break;
    case 3:   // a wave: they arrive a moment apart, from the far side
        SpawnT -= DeltaSeconds;
        if (ToSpawn > 0 && SpawnT <= 0.f) { SpawnWaveHollow(); ToSpawn--; SpawnT = 0.6f; }
        if (ToSpawn == 0 && Alive == 0)
        {
            if (Wave >= WaveCount)
            {
                const float Seconds = GetWorld()->GetTimeSeconds() - FMath::Max(0.f, ArenaStartTime);
                Multi_Say(TEXT("RILEY: ARENA CLEAR! EVERY LIGHT IN THE FORGE IS FREE."));
                Multi_ArenaClear(Seconds);
                ArenaStage = 4;
            }
            else
            {
                Multi_Say(FString::Printf(TEXT("RILEY: WAVE %d CLEAR. CATCH YOUR BREATH: SPARKS AND HEALTH TOPPED UP."), Wave));
                for (TActorIterator<AFirebirdCharacter> It(GetWorld()); It; ++It)
                {
                    It->Sparks = FMath::Max(It->Sparks, 60);
                    if (!It->bDead) It->Health = FMath::Max(It->Health, 70.f);
                }
                ArenaStage = 2; ArenaT = 0.f;
            }
        }
        break;
    default: break;
    }
}

void AFBRange::SpawnWaveHollow()
{
    static const FVector Points[7] = { FVector(7900, -1100, 100), FVector(7900, 1100, 100), FVector(8200, 0, 100), FVector(7300, -1200, 100),
                                       FVector(7300, 1200, 100), FVector(8200, -700, 100), FVector(8200, 700, 100) };
    FActorSpawnParameters P;
    P.SpawnCollisionHandlingOverride = ESpawnActorCollisionHandlingMethod::AdjustIfPossibleButAlwaysSpawn;
    const FVector At = Points[SpawnIndex++ % 7];
    if (AHollow* H = GetWorld()->SpawnActor<AHollow>(AHollow::StaticClass(), At, FRotator(0, 180, 0), P))
    {
        H->Alert();   // the forge sent it: it comes for you
        H->Aggression = 1.f + 0.25f * (Wave - 1);   // later waves throw more often (same tell)
        Hollows.Add(H);
        // it climbs out of the forge floor in a burst of crimson (a warning before it throws, C5)
        AFBFx::Burst(GetWorld(), At - FVector(0, 0, 60), 10, FB::Crimson, 300.f, 0.6f, 8.f, -300.f, 6.f);
    }
}
