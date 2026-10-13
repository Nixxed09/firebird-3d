#include "FBRange.h"
#include "Firebird.h"
#include "FirebirdCharacter.h"
#include "FirebirdHUD.h"
#include "Hollow.h"
#include "FBFx.h"
#include "Components/DirectionalLightComponent.h"
#include "Components/ExponentialHeightFogComponent.h"
#include "Components/PointLightComponent.h"
#include "Components/PostProcessComponent.h"
#include "Components/SkyAtmosphereComponent.h"
#include "Components/SkyLightComponent.h"
#include "Components/StaticMeshComponent.h"
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

void AFBRange::Block(const FVector& Min, const FVector& Max, UMaterialInterface* Mat, bool bCollide)
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
}

void AFBRange::Lamp(const FVector& At, const FLinearColor& Color, float Candela, float Radius)
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
}

// a brass-caged torch on a post: pairs of them mark the way on (cue language, N2)
void AFBRange::Torch(const FVector& At)
{
    Block(At + FVector(-8, -8, 0), At + FVector(8, 8, 150), FB::MakeSurface(this, FB::Brass, 0.f, 0.4f, 0.8f));
    Block(At + FVector(-14, -14, 150), At + FVector(14, 14, 185), FB::MakeGlow(this, FB::Amber, 12.f), false);
    Lamp(At + FVector(0, 0, 200), FB::Orange, 120.f, 1100.f);
}

void AFBRange::Atmosphere()
{
    // an ember sunset: the sun low and orange through the ash (the cover's sky)
    UDirectionalLightComponent* Sun = NewObject<UDirectionalLightComponent>(this);
    Sun->SetMobility(EComponentMobility::Movable);
    Sun->SetupAttachment(RootComponent);
    Sun->SetWorldRotation(FRotator(-9.f, 150.f, 0.f));
    Sun->SetIntensity(6.f);
    Sun->SetLightColor(FLinearColor(1.f, 0.62f, 0.38f));
    Sun->SetAtmosphereSunLight(true);
    Sun->RegisterComponent();

    USkyAtmosphereComponent* Sky = NewObject<USkyAtmosphereComponent>(this);
    Sky->SetupAttachment(RootComponent);
    Sky->SetMieScatteringScale(0.12f);              // thick with ash
    Sky->SetMieAbsorptionScale(0.4f);
    Sky->SetRayleighScatteringScale(0.03f);
    Sky->RegisterComponent();

    USkyLightComponent* Ambient = NewObject<USkyLightComponent>(this);
    Ambient->SetMobility(EComponentMobility::Movable);
    Ambient->SetupAttachment(RootComponent);
    Ambient->bRealTimeCapture = true;
    Ambient->SetIntensity(0.8f);
    Ambient->RegisterComponent();

    UExponentialHeightFogComponent* Fog = NewObject<UExponentialHeightFogComponent>(this);
    Fog->SetupAttachment(RootComponent);
    Fog->SetWorldLocation(FVector(0, 0, -200));
    Fog->SetFogDensity(0.035f);
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
    S.bOverride_BloomIntensity = true; S.BloomIntensity = 1.1f;
    S.bOverride_VignetteIntensity = true; S.VignetteIntensity = 0.55f;
    S.bOverride_FilmGrainIntensity = true; S.FilmGrainIntensity = 0.08f;
    S.bOverride_ColorGainShadows = true; S.ColorGainShadows = FVector4(1.12f, 0.92f, 0.8f, 1.f);
    S.bOverride_ColorSaturation = true; S.ColorSaturation = FVector4(1.08f, 1.f, 0.95f, 1.f);
    S.bOverride_AutoExposureMinBrightness = true; S.AutoExposureMinBrightness = 0.6f;
    S.bOverride_AutoExposureMaxBrightness = true; S.AutoExposureMaxBrightness = 2.6f;
    S.bOverride_AutoExposureBias = true; S.AutoExposureBias = 0.3f;
    S.bOverride_AutoExposureSpeedUp = true; S.AutoExposureSpeedUp = 6.f;
    S.bOverride_AutoExposureSpeedDown = true; S.AutoExposureSpeedDown = 3.f;
    PP->RegisterComponent();
}

void AFBRange::BeginPlay()
{
    Super::BeginPlay();
    Atmosphere();
    UMaterialInterface* Stone = FB::MakeSurface(this, FB::Limestone, 0.f, 0.85f);
    UMaterialInterface* StoneDark = FB::MakeSurface(this, FB::Limestone * 0.6f, 0.f, 0.9f);
    UMaterialInterface* BasaltM = FB::MakeSurface(this, FB::Basalt * 1.6f, 0.f, 0.7f);
    UMaterialInterface* BrassM = FB::MakeSurface(this, FB::Brass, 0.f, 0.4f, 0.8f);
    UMaterialInterface* Mercury = FB::MakeSurface(this, FB::Crimson, 6.f, 0.2f);
    UMaterialInterface* Lava = FB::MakeSurface(this, FB::Orange, 5.f, 0.3f);
    UMaterialInterface* Aether = FB::MakeGlow(this, FB::Aether, 5.f);

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
        Block(FVector(ArenaStart + 60, Y, Z), FVector(ArenaEnd, Y + 10, Z + 14), Mercury, false);
    for (float X : { 6500.f, 7600.f }) for (float Y : { -650.f, 650.f })
        Block(FVector(X - 90, Y - 90, 0), FVector(X + 90, Y + 90, 600), StoneDark);
    Lamp(FVector(7000, 0, 700), FB::Orange, 300.f, 2600.f);

    // torch pairs: the way on (arrival -> gaps, the gate, the arena door)
    Torch(FVector(1700, -420, 0)); Torch(FVector(1700, 420, 0));
    Torch(FVector(GateStart - 200, -420, 0)); Torch(FVector(GateStart - 200, 420, 0));
    Torch(FVector(ArenaStart - 150, -420, 0)); Torch(FVector(ArenaStart - 150, 420, 0));

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
}

void AFBRange::Say(const FString& Line)
{
    if (APlayerController* PC = UGameplayStatics::GetPlayerController(this, 0))
        if (AFirebirdHUD* H = Cast<AFirebirdHUD>(PC->GetHUD())) H->Say(Line, 4.5f);
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
            static const int32 Base[3] = { 3, 4, 6 };
            ToSpawn = Base[FMath::Clamp(Wave - 1, 0, 2)] + 2 * (Players - 1);
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
        Hollows.Add(H);
        // it climbs out of the forge floor in a burst of crimson (a warning before it throws, C5)
        AFBFx::Burst(GetWorld(), At - FVector(0, 0, 60), 10, FB::Crimson, 300.f, 0.6f, 8.f, -300.f, 6.f);
    }
}
