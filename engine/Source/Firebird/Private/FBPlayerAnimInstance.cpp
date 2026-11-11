#include "FBPlayerAnimInstance.h"
#include "Firebird.h"
#include "FirebirdCharacter.h"
#include "Animation/AnimInstanceProxy.h"
#include "Animation/AnimSequence.h"
#include "Animation/AnimNode_SequencePlayer.h"
#include "AnimNodes/AnimNode_TwoWayBlend.h"
#include "AnimNodes/AnimNode_LayeredBoneBlend.h"
#include "GameFramework/CharacterMovementComponent.h"

namespace
{
constexpr int32 LocomotionCount = 9;
const TCHAR* ClipNames[] = { TEXT("Idle"), TEXT("Run"), TEXT("Back"), TEXT("StrafeL"), TEXT("StrafeR"),
    TEXT("Crouch"), TEXT("Jump"), TEXT("Fall"), TEXT("Down"), TEXT("Punch"), TEXT("Fire") };

UAnimSequence* Clip(int32 Index)
{
    static TMap<int32, UAnimSequence*> Cache;
    if (UAnimSequence** Found = Cache.Find(Index)) return *Found;
    const FString Name = FString::Printf(TEXT("SK_FB_Firebird_A_FB_Firebird_%s"), ClipNames[Index]);
    UAnimSequence* Sequence = LoadObject<UAnimSequence>(nullptr,
        *FString::Printf(TEXT("/Game/Firebird/ArtKitV01/Animations/%s.%s"), *Name, *Name));
    if (Sequence) { Sequence->AddToRoot(); Cache.Add(Index, Sequence); }
    else UE_LOG(LogFirebird, Error, TEXT("FB_ART_MISSING player animation %s"), *Name);
    return Sequence;
}

struct FFirebirdAnimProxy final : FAnimInstanceProxy
{
    explicit FFirebirdAnimProxy(UAnimInstance* Instance) : FAnimInstanceProxy(Instance) {}
    FAnimNode_SequencePlayer_Standalone Players[11];
    FAnimNode_TwoWayBlend Movement[LocomotionCount - 1];
    FAnimNode_LayeredBoneBlend Combat;
    float Weights[LocomotionCount] = { 1.f };
    FVector LocalVelocity = FVector::ZeroVector;
    bool bGround = true, bCrouched = false, bDown = false;
    uint32 PunchSerial = 0, ShotSerial = 0, SeenPunch = 0, SeenShot = 0;
    float PunchTime = 1.f, ShotTime = 1.f, GaitTime = 0.f;

    virtual FAnimNode_Base* GetCustomRootNode() override { return &Combat; }

    virtual void Initialize(UAnimInstance* Instance) override
    {
        for (int32 I = 0; I < UE_ARRAY_COUNT(Players); ++I)
        {
            Players[I].SetSequence(Clip(I));
            Players[I].SetLoopAnimation(I < LocomotionCount);
        }
        for (int32 I = 0; I < LocomotionCount - 1; ++I)
        {
            Movement[I].A.SetLinkNode(I == 0 ? static_cast<FAnimNode_Base*>(&Players[0]) : &Movement[I - 1]);
            Movement[I].B.SetLinkNode(&Players[I + 1]);
        }
        Combat.BasePose.SetLinkNode(&Movement[LocomotionCount - 2]);
        Combat.BlendPoses.SetNum(2); Combat.BlendWeights.Init(0.f, 2); Combat.LayerSetup.SetNum(2);
        Combat.BlendPoses[0].SetLinkNode(&Players[10]);
        Combat.BlendPoses[1].SetLinkNode(&Players[9]);
        FBranchFilter FireFilter; FireFilter.BoneName = TEXT("upper_arm_R"); FireFilter.BlendDepth = 1;
        FBranchFilter PunchFilter; PunchFilter.BoneName = TEXT("chest"); PunchFilter.BlendDepth = 2;
        Combat.LayerSetup[0].BranchFilters = { FireFilter };
        Combat.LayerSetup[1].BranchFilters = { PunchFilter };
        Combat.bMeshSpaceRotationBlend = true;
        FAnimInstanceProxy::Initialize(Instance);
    }

    // Actor access is confined to the game thread. The blend graph below reads
    // only this snapshot when Unreal evaluates it on an animation worker.
    virtual void PreUpdate(UAnimInstance* Instance, float Dt) override
    {
        FAnimInstanceProxy::PreUpdate(Instance, Dt);
        if (const AFirebirdCharacter* P = Cast<AFirebirdCharacter>(Instance->GetOwningActor()))
        {
            LocalVelocity = P->GetActorRotation().UnrotateVector(P->GetVelocity());
            bGround = !P->GetCharacterMovement()->IsFalling();
            bCrouched = P->bIsCrouched; bDown = P->bDead;
            PunchSerial = P->GetBodyPunchSerial(); ShotSerial = P->GetBodyShotSerial();
        }
    }

    virtual void Update(float Dt) override
    {
        const float Speed = LocalVelocity.Size2D();
        float Target[LocomotionCount] = {};
        if (bDown) Target[8] = 1.f;
        else if (bCrouched) Target[5] = 1.f;
        else if (!bGround) Target[LocalVelocity.Z > 40.f ? 6 : 7] = 1.f;
        else
        {
            const float Move = FMath::Clamp(Speed / 260.f, 0.f, 1.f);
            Target[0] = 1.f - Move;
            const float Sum = FMath::Abs(LocalVelocity.X) + FMath::Abs(LocalVelocity.Y);
            if (Sum > 1.f)
            {
                Target[LocalVelocity.X >= 0 ? 1 : 2] = Move * FMath::Abs(LocalVelocity.X) / Sum;
                Target[LocalVelocity.Y < 0 ? 3 : 4] = Move * FMath::Abs(LocalVelocity.Y) / Sum;
            }
            else Target[0] = 1.f;
        }
        const float Ease = 1.f - FMath::Exp(-Dt * 14.f);
        float Sum = 0.f;
        for (int32 I = 0; I < LocomotionCount; ++I)
        {
            Weights[I] = FMath::Lerp(Weights[I], Target[I], Ease);
            Sum += Weights[I];
            if (I > 0) Movement[I - 1].Alpha = Sum > SMALL_NUMBER ? Weights[I] / Sum : 0.f;
        }
        // Keep all four directional strides in phase while blending diagonals.
        GaitTime = FMath::Fmod(GaitTime + Dt * FMath::Clamp(Speed / 650.f, .35f, 1.8f), .8f);
        for (int32 I = 1; I <= 4; ++I)
        {
            Players[I].SetAccumulatedTime(GaitTime);
            Players[I].SetPlayRate(0.f);
        }
        if (PunchSerial != SeenPunch) { SeenPunch = PunchSerial; PunchTime = 0.f; Players[9].SetAccumulatedTime(0.f); }
        if (ShotSerial != SeenShot) { SeenShot = ShotSerial; ShotTime = 0.f; Players[10].SetAccumulatedTime(0.f); }
        PunchTime += Dt; ShotTime += Dt;
        auto Envelope = [](float T, float Duration)
        {
            return FMath::Clamp(T / .05f, 0.f, 1.f) * FMath::Clamp((Duration - T) / .10f, 0.f, 1.f);
        };
        Combat.BlendWeights[0] = bDown ? 0.f : Envelope(ShotTime, .267f);
        Combat.BlendWeights[1] = bDown ? 0.f : Envelope(PunchTime, .4f);
    }
};
}

FAnimInstanceProxy* UFBPlayerAnimInstance::CreateAnimInstanceProxy() { return new FFirebirdAnimProxy(this); }
void UFBPlayerAnimInstance::DestroyAnimInstanceProxy(FAnimInstanceProxy* Proxy) { delete Proxy; }
