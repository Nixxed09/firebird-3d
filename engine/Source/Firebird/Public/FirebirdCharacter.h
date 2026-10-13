#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Character.h"
#include "FirebirdCharacter.generated.h"

class UCameraComponent;
class UPointLightComponent;
class UStaticMeshComponent;
class AHollow;

// What the player is pressing this frame. Real input fills it from the
// keyboard and mouse (ReadInput); automation fills it directly, so a scripted
// run goes through exactly the same movement and combat code as a player.
USTRUCT()
struct FFirebirdInput
{
    GENERATED_BODY()
    FVector2D Move = FVector2D::ZeroVector;   // x = right, y = forward, each -1..1
    FVector2D Look = FVector2D::ZeroVector;   // degrees this frame: yaw, pitch
    bool bJump = false;        // pressed this frame
    bool bDash = false;        // pressed this frame
    bool bCrouchHeld = false;
    bool bCrouchPressed = false;
    bool bFireHeld = false;
    bool bFist = false;        // pressed this frame
};

// The Firebird: the player. Doom-fast movement with modern tech (FUN_AUDIT
// "feel in the hands"): coyote time and jump buffering, the Ember Dash (two
// charges, works in the air), and a slide out of a run or a dash. The Spark
// Caster shoots; the Ember Fist punches, and on a cracked Hollow it RELEASES
// the light inside, which heals the Firebird (push-forward combat, contract C2).
//
// Multiplayer (home LAN co-op, 1-4 players): the owning computer runs its own
// movement (dash, slide and coyote stay instant; the host accepts the position,
// fine on a home network), and the host owns everything that matters between
// players: Hollows, damage, health, sparks and heals. Shots and punches show
// at once on the shooter's screen and are checked by the host. Other players
// see a Firebird figure in the player's colour.
UCLASS()
class FIREBIRD_API AFirebirdCharacter : public ACharacter
{
    GENERATED_BODY()

public:
    AFirebirdCharacter();

    virtual void BeginPlay() override;
    virtual void Tick(float DeltaSeconds) override;
    virtual void Landed(const FHitResult& Hit) override;
    virtual void OnStartCrouch(float HalfHeightAdjust, float ScaledHalfHeightAdjust) override;
    virtual void OnEndCrouch(float HalfHeightAdjust, float ScaledHalfHeightAdjust) override;
    virtual void GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& OutLifetimeProps) const override;

    // ---- tuning (cm, seconds) -------------------------------------------------
    UPROPERTY(EditAnywhere, Category = "Feel") float RunSpeed = 1000.f;          // v2: 5 cells/s
    UPROPERTY(EditAnywhere, Category = "Feel") float JumpSpeed = 640.f;
    UPROPERTY(EditAnywhere, Category = "Feel") float Gravity = 1.6f;
    UPROPERTY(EditAnywhere, Category = "Feel") float CoyoteTime = 0.12f;
    UPROPERTY(EditAnywhere, Category = "Feel") float JumpBufferTime = 0.12f;
    UPROPERTY(EditAnywhere, Category = "Feel") float DashSpeed = 2300.f;
    UPROPERTY(EditAnywhere, Category = "Feel") float DashTime = 0.16f;
    UPROPERTY(EditAnywhere, Category = "Feel") float DashExitSpeed = 1150.f;
    UPROPERTY(EditAnywhere, Category = "Feel") int32 DashCharges = 2;
    UPROPERTY(EditAnywhere, Category = "Feel") float DashRecharge = 1.1f;
    UPROPERTY(EditAnywhere, Category = "Feel") float SlideMinSpeed = 600.f;
    UPROPERTY(EditAnywhere, Category = "Feel") float SlideBoost = 1300.f;
    UPROPERTY(EditAnywhere, Category = "Feel") float SlideMaxTime = 1.1f;
    UPROPERTY(EditAnywhere, Category = "Feel") float Fov = 100.f;

    UPROPERTY(EditAnywhere, Category = "Combat") float SparkInterval = 0.28f;
    UPROPERTY(EditAnywhere, Category = "Combat") float FistInterval = 0.42f;
    UPROPERTY(EditAnywhere, Category = "Combat") float FistRange = 190.f;
    UPROPERTY(EditAnywhere, Category = "Combat") float ReleaseHeal = 20.f;
    UPROPERTY(EditAnywhere, Category = "Combat") int32 ReleaseSparks = 6;   // a release refills ammo too (push forward)

    // ---- replicated state (the host owns it) ----------------------------------
    UPROPERTY(Replicated) float Health = 100.f;
    UPROPERTY(Replicated) bool bDead = false;
    UPROPERTY(Replicated) int32 Sparks = 50;
    UPROPERTY(Replicated) int32 PlayerIndex = 0;   // 0..3: colour and name (P1..P4)
    float MaxHealth = 100.f;
    int32 MaxSparks = 200;

    // ---- local state the HUD and automation read ------------------------------
    float DashCharge = 2.f;           // fractional: 1.6 = one ready, the second 60% back
    bool bSliding = false;
    float DamageFlash = 0.f;
    float HitMarker = 0.f;            // >0: a shot landed (confirmed by the host)
    float KillMarker = 0.f;           // >0: something broke
    float ReleaseFlash = 0.f;         // >0: a release just healed you
    float LastReleaseHeal = 0.f;
    FVector LastHurtFrom = FVector::ZeroVector;
    float HurtDirT = 0.f;

    // automation: when true, ReadInput is skipped and Input is what the driver set
    bool bAutoDriven = false;
    FFirebirdInput Input;

    // feel and co-op numbers for proofs
    int32 CoyoteJumps = 0;
    int32 BufferedJumps = 0;
    int32 Dashes = 0;
    int32 Slides = 0;
    int32 Releases = 0;
    int32 ConfirmedHits = 0;
    int32 Breaks = 0;
    float TimeSinceGrounded = 0.f;

    FVector Checkpoint = FVector(200.f, 0.f, 120.f);
    float CheckpointYaw = 0.f;

    // host only: damage from a Hollow's ember (or a fall)
    void Hurt(float Amount, const FVector& From);
    // a cracked Hollow the fist can release from here, looking that way
    AHollow* ReleaseTarget() const;
    AHollow* ReleaseTargetFrom(const FVector& From, const FVector& Look) const;
    float HorizontalSpeed() const;
    // the owning computer puts its Firebird somewhere (movement is owned there)
    void TeleportOwned(const FVector& To, float Yaw);

    static FLinearColor PlayerColor(int32 Index);

    UPROPERTY(VisibleAnywhere) UCameraComponent* Camera;

    // ---- network --------------------------------------------------------------
    UFUNCTION(Server, Reliable) void Server_Fire(FVector_NetQuantize Eye, FRotator Aim, FVector_NetQuantize Muzzle);
    UFUNCTION(Server, Reliable) void Server_Punch(FVector_NetQuantize Eye, FVector_NetQuantizeNormal Look);
    UFUNCTION(Server, Reliable) void Server_Fell();
    UFUNCTION(Server, Reliable) void Server_Respawned();
    UFUNCTION(Client, Reliable) void Client_HitConfirm(bool bBroke);
    UFUNCTION(Client, Reliable) void Client_Released(float Heal);
    UFUNCTION(Client, Reliable) void Client_Hurt(float Amount, FVector_NetQuantize From);
    UFUNCTION(NetMulticast, Unreliable) void Multi_ShotFx(FVector_NetQuantize Muzzle, FVector_NetQuantize Impact, FVector_NetQuantizeNormal Normal, bool bHitHollow);
    UFUNCTION(NetMulticast, Unreliable) void Multi_Punch();

private:
    void ReadInput();
    void DoJump();
    void StartDash();
    void EndDash();
    void StartSlide();
    void EndSlide();
    void FireSpark();
    void Punch();
    void UpdateView(float DeltaSeconds);
    void UpdateBody(float DeltaSeconds);
    void Hitstop(float RealSeconds);
    void ShotFx(const FVector& Muzzle, const FVector& Impact, const FVector& Normal, bool bHitHollow);
    void BuildViewModel();
    void BuildBody();

    UPROPERTY() UStaticMeshComponent* GunBody;
    UPROPERTY() UStaticMeshComponent* GunCoil;
    UPROPERTY() UStaticMeshComponent* GunCrystal;
    UPROPERTY() UStaticMeshComponent* Fist;
    UPROPERTY() UPointLightComponent* MuzzleLight;
    UPROPERTY() UPointLightComponent* FistLight;
    UPROPERTY() USceneComponent* ViewRig;
    // the figure other players see
    UPROPERTY() USceneComponent* Body;
    UPROPERTY() UStaticMeshComponent* WingL;
    UPROPERTY() UStaticMeshComponent* WingR;
    UPROPERTY() UStaticMeshComponent* BodyFist;
    UPROPERTY() UPointLightComponent* BodyGlow;

    float JumpBuffer = 0.f;
    bool bJumpConsumed = false;
    float DashT = 0.f;            // >0 while dashing
    FVector DashDir = FVector::ForwardVector;
    float SlideT = 0.f;
    float SparkCooldown = 0.f;
    float FistCooldown = 0.f;
    float FistAnim = 0.f;         // 1 -> 0 over a punch
    float BodyPunch = 0.f;        // the same, on the figure others see
    float Recoil = 0.f;
    float FovKick = 0.f;
    float Shake = 0.f;
    float CamZ = 70.f;            // camera height over the capsule centre, smoothed
    float CamRoll = 0.f;
    float BobPhase = 0.f;
    float HitstopReal = 0.f;
    float DeadT = 0.f;
    bool bRespawnSent = false;
    bool bBuilt = false;
};
