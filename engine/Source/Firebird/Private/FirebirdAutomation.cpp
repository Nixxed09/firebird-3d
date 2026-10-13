#include "FirebirdAutomation.h"
#include "Firebird.h"
#include "FBRange.h"
#include "FirebirdCharacter.h"
#include "Hollow.h"
#include "Camera/CameraComponent.h"
#include "EngineUtils.h"
#include "GameFramework/CharacterMovementComponent.h"
#include "GameFramework/PlayerController.h"
#include "HAL/FileManager.h"
#include "HAL/PlatformMisc.h"
#include "Kismet/GameplayStatics.h"
#include "Misc/CommandLine.h"
#include "Misc/FileHelper.h"
#include "Misc/Paths.h"
#include "UnrealClient.h"

void UFirebirdAutomation::OnWorldBeginPlay(UWorld& InWorld)
{
    Super::OnWorldBeginPlay(InWorld);
    const TCHAR* Cmd = FCommandLine::Get();
    bActive = FParse::Param(Cmd, TEXT("FBAuto"));
    if (!bActive) return;
    FParse::Value(Cmd, TEXT("FBScenario="), Scenario);
    if (!FParse::Value(Cmd, TEXT("FBOut="), OutDir) || OutDir.IsEmpty()) OutDir = FPaths::ProjectSavedDir() / TEXT("fb-auto");
    bFrames = FParse::Param(Cmd, TEXT("FBFrames"));
    IFileManager::Get().MakeDirectory(*(OutDir / TEXT("frames")), true);
    UE_LOG(LogFirebird, Display, TEXT("FB_AUTO start scenario=%s out=%s frames=%d"), *Scenario, *OutDir, bFrames ? 1 : 0);
}

TStatId UFirebirdAutomation::GetStatId() const { RETURN_QUICK_DECLARE_CYCLE_STAT(UFirebirdAutomation, STATGROUP_Tickables); }

bool UFirebirdAutomation::DoesSupportWorldType(const EWorldType::Type WorldType) const
{
    return WorldType == EWorldType::Game || WorldType == EWorldType::PIE;
}

void UFirebirdAutomation::Shot(const FString& Name)
{
    const FString Path = OutDir / (Name + TEXT(".png"));
    // a key shot and a video frame can't both be requested in one frame; the key shot wins
    FScreenshotRequest::RequestScreenshot(Path, true, false);
    bShotTaken = true;
    Shots.Add(Name);
    UE_LOG(LogFirebird, Display, TEXT("FB_SHOT %s"), *Path);
}

void UFirebirdAutomation::Proof(const FString& Key, bool bOk, const FString& Detail)
{
    bAllOk &= bOk;
    Proofs.Add(FString::Printf(TEXT("    \"%s\": { \"ok\": %s, \"detail\": \"%s\" }"), *Key, bOk ? TEXT("true") : TEXT("false"), *Detail.Replace(TEXT("\""), TEXT("'"))));
    UE_LOG(LogFirebird, Display, TEXT("FB_PROOF %s %s %s"), *Key, bOk ? TEXT("PASS") : TEXT("FAIL"), *Detail);
}

void UFirebirdAutomation::Next(int32 To)
{
    if (const AFirebirdCharacter* P = Cast<AFirebirdCharacter>(UGameplayStatics::GetPlayerCharacter(GetWorld(), 0)))
        UE_LOG(LogFirebird, Display, TEXT("FB_AUTO stage %d -> %d at t=%.2f x=%.0f z=%.0f"), Stage, To, TotalT, P->GetActorLocation().X, P->GetActorLocation().Z);
    Stage = To;
    StageT = 0.f;
}

AHollow* UFirebirdAutomation::HollowAt(int32 Index) const
{
    for (TActorIterator<AFBRange> It(GetWorld()); It; ++It)
        if (It->Hollows.IsValidIndex(Index) && IsValid(It->Hollows[Index]) && It->Hollows[Index]->IsAlive()) return It->Hollows[Index];
    return nullptr;
}

void UFirebirdAutomation::AimAt(AFirebirdCharacter* P, const FVector& Target)
{
    if (APlayerController* PC = Cast<APlayerController>(P->GetController()))
    {
        FRotator R = (Target - P->Camera->GetComponentLocation()).Rotation();
        R.Roll = 0.f;
        PC->SetControlRotation(R);
    }
}

void UFirebirdAutomation::Finish()
{
    FString Json = TEXT("{\n");
    Json += FString::Printf(TEXT("  \"scenario\": \"%s\",\n  \"all_ok\": %s,\n  \"seconds\": %.2f,\n  \"frames\": %d,\n"), *Scenario, bAllOk ? TEXT("true") : TEXT("false"), TotalT, Frame);
    Json += TEXT("  \"proofs\": {\n") + FString::Join(Proofs, TEXT(",\n")) + TEXT("\n  },\n");
    Json += TEXT("  \"shots\": [\"") + FString::Join(Shots, TEXT("\", \"")) + TEXT("\"]\n}\n");
    FFileHelper::SaveStringToFile(Json, *(OutDir / TEXT("summary.json")));
    UE_LOG(LogFirebird, Display, TEXT("FB_AUTO done all_ok=%d"), bAllOk ? 1 : 0);
    FinishT = 1.0f;   // let the last shot write, then quit
}

void UFirebirdAutomation::Tick(float DeltaSeconds)
{
    if (!bActive) return;
    AFirebirdCharacter* P = Cast<AFirebirdCharacter>(UGameplayStatics::GetPlayerCharacter(GetWorld(), 0));
    if (!P) return;
    bShotTaken = false;
    TotalT += DeltaSeconds;
    StageT += DeltaSeconds;
    if (FinishT >= 0.f)
    {
        FinishT -= DeltaSeconds;
        if (FinishT < 0.f) FPlatformMisc::RequestExit(false, TEXT("FBAuto"));
        return;
    }
    P->bAutoDriven = true;
    FFirebirdInput& I = P->Input;
    const FVector L = P->GetActorLocation();
    const bool bGround = P->GetCharacterMovement()->IsMovingOnGround();
    if (P->Health < LastHealth - 0.5f) Hurts++;
    LastHealth = P->Health;
    const bool bNoDash = Scenario == TEXT("nodash");

    // every stage has a time limit: a stuck run is a failed proof, not a hang
    if (StageT > 9.f && Stage < 100)
    {
        Proof(FString::Printf(TEXT("stage_%d_timeout"), Stage), false, FString::Printf(TEXT("at (%.0f, %.0f, %.0f)"), L.X, L.Y, L.Z));
        Next(100);
    }

    switch (Stage)
    {
    case 0:   // arrive: look down the course
        I.Move = FVector2D::ZeroVector;
        AimAt(P, FVector(3000, 0, 60));
        if (StageT > 1.0f) { Shot(TEXT("01-arrival")); Next(1); }
        break;

    case 1:   // run off the first ledge and jump LATE: only coyote time saves this
        I.Move = FVector2D(0, 1);
        AimAt(P, FVector(L.X + 2000, 0, 60));
        if (!bGround && L.X > FBCourse::GapAStart + 30.f && P->TimeSinceGrounded >= 0.06f) { I.bJump = true; Next(2); }   // the press lands a frame later: ~100 ms after the edge
        break;

    case 2:
        I.Move = FVector2D(0, 1);
        if (StageT > 0.15f && StageT < 0.2f) Shot(TEXT("02-coyote-jump"));
        if (StageT > 0.3f && bGround)
        {
            Proof(TEXT("coyote_jump"), P->CoyoteJumps >= 1 && L.X > FBCourse::GapAEnd && L.Z > -50.f,
                  FString::Printf(TEXT("jumped ~100 ms after leaving the edge, landed at x=%.0f z=%.0f"), L.X, L.Z));
            Next(3);
        }
        break;

    case 3:   // the long gap: jump at the edge, dash at the top
        I.Move = FVector2D(0, 1);
        if (L.X > FBCourse::GapBStart - 70.f && bGround) { I.bJump = true; Next(4); }
        break;

    case 4:
        I.Move = FVector2D(0, 1);
        if (!bNoDash && !bDashedB && P->GetVelocity().Z <= 60.f && StageT > 0.1f) { I.bDash = true; bDashedB = true; }   // dash at the top of the jump
        if (StageT > 0.3f && StageT < 0.34f) Shot(bNoDash ? TEXT("03-no-dash") : TEXT("03-dash"));
        if (StageT > 0.4f && (bGround || L.Z < -650.f || P->bDead))
        {
            const bool bMade = L.X > FBCourse::GapBEnd - 40.f && L.Z > -50.f;   // standing on the far lip counts
            if (bNoDash)
            {
                // the control: without the dash the gap must be too far
                Proof(TEXT("gap_needs_dash"), !bMade, FString::Printf(TEXT("jump alone reached x=%.0f (gap ends at %.0f)"), L.X, FBCourse::GapBEnd));
                Finish();
                Next(200);
            }
            else
            {
                Proof(TEXT("dash_gap"), bMade && P->Dashes >= 1, FString::Printf(TEXT("jump + air dash landed at x=%.0f z=%.0f"), L.X, L.Z));
                Next(5);
            }
        }
        break;

    case 5:   // run at the low gate and slide under it
        I.Move = FVector2D(0, 1);
        AimAt(P, FVector(L.X + 2000, 0, 60));
        if (L.X > FBCourse::GateStart - 380.f && bGround) { I.bCrouchPressed = true; I.bCrouchHeld = true; Next(6); }
        break;

    case 6:
        I.Move = FVector2D(0, 1);
        I.bCrouchHeld = L.X < FBCourse::GateEnd + 60.f;
        if (StageT > 0.3f && StageT < 0.34f) Shot(TEXT("04-slide"));
        if (L.X > FBCourse::GateEnd + 60.f)
        {
            Proof(TEXT("slide_gate"), P->Slides >= 1, FString::Printf(TEXT("passed under the %.0f cm gate in %.2f s (crouch-walking would take %.2f s)"),
                FBCourse::GateBottom, StageT, (FBCourse::GateEnd - FBCourse::GateStart + 380.f) / 360.f));
            Next(7);
        }
        break;

    case 7:   // into the arena; stage the fight so the heal is visible
        I.bCrouchHeld = false;
        I.Move = FVector2D(0, 1);
        if (AHollow* H = HollowAt(0)) AimAt(P, H->GetActorLocation() + FVector(0, 0, 10));
        if (L.X > 6000.f)
        {
            I.Move = FVector2D::ZeroVector;
            P->Health = FMath::Min(P->Health, 55.f);
            UE_LOG(LogFirebird, Display, TEXT("FB_AUTO staged health=%.0f so the release heal shows"), P->Health);
            Next(8);
        }
        break;

    case 8:   // crack the shell with the Spark Caster
    {
        AHollow* H = HollowAt(0);
        I.Move = FVector2D::ZeroVector;
        if (!H) { Proof(TEXT("crack_then_release"), false, TEXT("the first Hollow broke before it cracked")); Next(10); break; }
        AimAt(P, H->GetActorLocation() + FVector(0, 0, 10));
        I.bFireHeld = !H->IsCracked();
        if (H->IsCracked()) { Shot(TEXT("05-cracked")); HealthBeforeRelease = P->Health; Next(9); }
        break;
    }

    case 9:   // close in and release it with the Ember Fist
    {
        AHollow* H = HollowAt(0);
        I.bFireHeld = false;
        if (H)
        {
            AimAt(P, H->GetActorLocation() + FVector(0, 0, 10));
            const float D = FVector::Dist2D(H->GetActorLocation(), L);
            I.Move = FVector2D(0, D > 220.f ? 1.f : 0.f);
            if (StageT > 0.05f && StageT < 0.09f && D > 400.f) I.bDash = true;
            if (P->ReleaseTarget() == H) I.bFist = true;
        }
        if (P->Releases >= 1)
        {
            Proof(TEXT("crack_then_release"), P->LastReleaseHeal > 0.f,
                  FString::Printf(TEXT("released: +%.0f health (now %.0f)"), P->LastReleaseHeal, P->Health));
            Next(10);
        }
        break;
    }

    case 10:   // the release moment on camera, then the second Hollow
        I.Move = FVector2D::ZeroVector;
        I.bFist = false;
        if (StageT > 0.12f && StageT < 0.16f) Shot(TEXT("06-release"));
        if (StageT > 1.2f) Next(11);
        break;

    case 11:   // watch the tell, then dash sideways out of the ember's path
    {
        AHollow* H = HollowAt(1);
        if (!H) { Next(13); break; }
        AimAt(P, H->GetActorLocation() + FVector(0, 0, 10));
        I.Move = FVector2D::ZeroVector;
        if (H->State == EHollowState::Windup && H->WindupT > 0.35f)
        {
            Shot(TEXT("07-windup-tell"));
            HurtsAtWindup = Hurts;
            I.Move = FVector2D(1, 0);
            I.bDash = true;
            DodgeWatchT = 1.4f;
            Next(12);
        }
        break;
    }

    case 12:
    {
        AHollow* H = HollowAt(1);
        if (H) AimAt(P, H->GetActorLocation() + FVector(0, 0, 10));
        I.Move = FVector2D(StageT < 0.5f ? 1.f : 0.f, 0);
        DodgeWatchT -= DeltaSeconds;
        if (DodgeWatchT <= 0.f)
        {
            Proof(TEXT("read_and_dodge"), Hurts == HurtsAtWindup, FString::Printf(TEXT("saw the windup, side-dashed; hits taken in the next 1.4 s: %d"), Hurts - HurtsAtWindup));
            Next(13);
        }
        break;
    }

    case 13:   // finish it: crack, then release
    {
        AHollow* H = HollowAt(1);
        if (!H) { Shot(TEXT("08-clear")); Proof(TEXT("arena_clear"), P->Releases >= 2, FString::Printf(TEXT("releases %d, dashes %d, slides %d, hits taken %d"), P->Releases, P->Dashes, P->Slides, Hurts)); Finish(); Next(200); break; }
        AimAt(P, H->GetActorLocation() + FVector(0, 0, 10));
        const float D = FVector::Dist2D(H->GetActorLocation(), L);
        I.bFireHeld = !H->IsCracked();
        I.Move = FVector2D(0, H->IsCracked() && D > 200.f ? 1.f : 0.f);
        if (P->ReleaseTarget() == H) I.bFist = true;
        break;
    }

    case 100:  // a failure: still write what we have
        Shot(TEXT("99-failed"));
        Finish();
        Next(200);
        break;
    default: break;
    }

    // the video: every frame, at a fixed 1/30 s step
    if (bFrames && !bShotTaken)
        FScreenshotRequest::RequestScreenshot(OutDir / FString::Printf(TEXT("frames/f_%05d.png"), Frame++), true, false);
}
