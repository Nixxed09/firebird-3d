#include "FirebirdAutomation.h"
#include "Firebird.h"
#include "FBRange.h"
#include "FirebirdCharacter.h"
#include "Hollow.h"
#include "FirebirdHUD.h"
#include "FirebirdSession.h"
#include "FBPlayerAnimInstance.h"
#include "AIController.h"
#include "Camera/CameraComponent.h"
#include "Components/SkeletalMeshComponent.h"
#include "Components/PrimitiveComponent.h"
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
#if WITH_EDITOR
#include "ShaderCompiler.h"
#endif

static bool GRanThisProcess = false;

void UFirebirdAutomation::OnWorldBeginPlay(UWorld& InWorld)
{
    Super::OnWorldBeginPlay(InWorld);
    const TCHAR* Cmd = FCommandLine::Get();
    bActive = FParse::Param(Cmd, TEXT("FBAuto"));
    // one finished run per process: a client that loses its host falls back to an empty world,
    // and a second run there would overwrite the real summary. (A joiner that travels into the
    // host's world before finishing starts over there, which is what it should do.)
    if (!bActive || GRanThisProcess) { bActive = false; return; }
    FParse::Value(Cmd, TEXT("FBScenario="), Scenario);
    if (!FParse::Value(Cmd, TEXT("FBOut="), OutDir) || OutDir.IsEmpty()) OutDir = FPaths::ProjectSavedDir() / TEXT("fb-auto");
    bFrames = FParse::Param(Cmd, TEXT("FBFrames"));
    FParse::Value(Cmd, TEXT("FBPlayers="), WantPlayers);
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
    GRanThisProcess = true;
    FString Json = TEXT("{\n");
    Json += FString::Printf(TEXT("  \"scenario\": \"%s\",\n  \"all_ok\": %s,\n  \"seconds\": %.2f,\n  \"frames\": %d,\n"), *Scenario, bAllOk ? TEXT("true") : TEXT("false"), TotalT, Frame);
    Json += TEXT("  \"proofs\": {\n") + FString::Join(Proofs, TEXT(",\n")) + TEXT("\n  },\n");
    Json += TEXT("  \"shots\": [\"") + FString::Join(Shots, TEXT("\", \"")) + TEXT("\"]\n}\n");
    FFileHelper::SaveStringToFile(Json, *(OutDir / TEXT("summary.json")));
    UE_LOG(LogFirebird, Display, TEXT("FB_AUTO done all_ok=%d"), bAllOk ? 1 : 0);
    // let the last shot write, then quit; a co-op host lingers so every player hears ARENA CLEAR first
    FinishT = (Scenario == TEXT("coop") && GetWorld()->GetNetMode() == NM_ListenServer) ? 8.f : 1.f;
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
    // the start menu, as a kid sees it: a friend's room is listed, picking it joins
    if (Scenario == TEXT("menu"))
    {
        UFirebirdSession* S = UFirebirdSession::Get(P);
        APlayerController* PC = Cast<APlayerController>(P->GetController());
        AFirebirdHUD* Hud = PC ? Cast<AFirebirdHUD>(PC->GetHUD()) : nullptr;
        if (!S || !Hud) return;
        if (S->Mode == EFirebirdSessionMode::Menu && Stage == 0)
        {
            if (Hud->MenuItems.Num() >= 3 && TotalT > 2.f)
            {
                Shot(TEXT("01-menu"));
                Proof(TEXT("menu_lists_friends_game"), true, Hud->MenuItems[2].Label);
                S->SelectedItem = 2;
                S->Join(Hud->MenuItems[2].Room);   // what clicking it does
                Stage = 1;
            }
            else if (TotalT > 30.f) { Shot(TEXT("99-no-room")); Proof(TEXT("menu_lists_friends_game"), false, TEXT("no room listed after 30 s")); Finish(); Stage = 200; }
        }
        else if (S->Mode == EFirebirdSessionMode::Joined && Stage < 200)
        {
            int32 N = 0;
            for (TActorIterator<AFirebirdCharacter> It(GetWorld()); It; ++It) N++;
            if (N >= 2 && TotalT > 1.5f)
            {
                Shot(TEXT("02-joined"));
                Proof(TEXT("joined_from_menu"), true, FString::Printf(TEXT("%d players, playing as P%d"), N, P->PlayerIndex + 1));
                Finish();
                Stage = 200;
            }
        }
        return;
    }

    if (Scenario == TEXT("motion"))
    {
        TickMotion(P, DeltaSeconds);
        if (bFrames && !bShotTaken)
            FScreenshotRequest::RequestScreenshot(OutDir / FString::Printf(TEXT("frames/f_%05d.png"), Frame++), true, false);
        return;
    }

    // Art review uses the real game world and first-person rig; no offline backdrop.
    if (Scenario == TEXT("art"))
    {
        static const FVector Views[] = { FVector(200, 0, 100), FVector(3020, -180, 100), FVector(4300, 0, 100), FVector(5800, -450, 100), FVector(8250, 1050, 100), FVector(7000, 0, 100), FVector(6760, 0, 100), FVector(6700, -300, 100), FVector(3060, 0, 100), FVector(6370, -650, 100) };
        static const FRotator Angles[] = { FRotator(6, 0, 0), FRotator(-20, 14, 0), FRotator(4, 0, 0), FRotator(8, 15, 0), FRotator(5, -145, 0), FRotator(65, 90, 0), FRotator(-10, 0, 0), FRotator(-10, 0, 0), FRotator(-65, 0, 0), FRotator(0, 0, 0) };
        static const TCHAR* Names[] = { TEXT("01-arrival-surfaces"), TEXT("02-furnace-pit"), TEXT("03-bronze-gate"), TEXT("04-bell-arena"), TEXT("05-arena-reverse"), TEXT("06-ceiling"), TEXT("07-hollow-detail"), TEXT("08-firebird-armor"), TEXT("09-mercury"), TEXT("10-weapon-clearance") };
        P->Input = FFirebirdInput();
        for (TActorIterator<AHollow> It(GetWorld()); It; ++It)
        {
            It->bHoldFire = true;
            It->GetCharacterMovement()->DisableMovement();
        }
        if (Stage < UE_ARRAY_COUNT(Views))
        {
            if (StageT <= DeltaSeconds * 1.5f)
            {
#if WITH_EDITOR
                // Benchmark time runs faster than shader workers on a cold editor cache.
                if (Stage == 0 && GShaderCompilingManager) GShaderCompilingManager->FinishAllCompilation();
#endif
                if (Stage == 7)
                {
                    AFirebirdCharacter* Model = GetWorld()->SpawnActor<AFirebirdCharacter>(AFirebirdCharacter::StaticClass(), FVector(7100, -300, 88), FRotator(0, 180, 0));
                    if (Model) { Model->bAutoDriven = true; Model->GetCharacterMovement()->DisableMovement(); }
                }
                P->TeleportOwned(Views[Stage], Angles[Stage].Yaw);
                if (AController* Controller = P->GetController()) Controller->SetControlRotation(Angles[Stage]);
            }
            if (StageT > (Stage == 0 ? 8.f : 2.f))
            {
                Shot(Names[Stage]);
                Next(Stage + 1);
            }
        }
        else if (Stage == 10)
        {
            if (StageT <= DeltaSeconds * 1.5f)
            {
                P->TeleportOwned(FVector(6680, 0, 100), 0);
                if (AController* Controller = P->GetController()) Controller->SetControlRotation(FRotator(-6, 0, 0));
                AHollow* H = HollowAt(0);
                Proof(TEXT("authored_hollow_loaded"), H && H->GetMesh()->GetSkeletalMeshAsset(), TEXT("rendered the gameplay Hollow skeletal mesh"));
                if (H)
                {
                    H->TakeHit(30, FVector::ForwardVector, false, P);
                    H->TakeHit(1, FVector::ForwardVector, true, P);
                    H->SetActorRotation(FRotator(0, 180, 0));
                }
            }
            if (StageT > .33f) { Shot(TEXT("11-shell-release")); Next(11); }
        }
        else if (Stage == 11)
        {
            if (StageT <= DeltaSeconds * 1.5f)
            {
                P->TeleportOwned(FVector(5800, -450, 100), 15);
                if (AController* Controller = P->GetController()) Controller->SetControlRotation(FRotator(8, 15, 0));
                if (AFBRange* R = AFBRange::Get(GetWorld())) R->Multi_ArenaClear(42.f);
            }
            if (StageT > 8.5f) { Shot(TEXT("12-restored-arena")); Next(12); }
        }
        else if (Stage != 200)
        {
            Proof(TEXT("art_views_captured"), Shots.Num() == UE_ARRAY_COUNT(Views) + 2, TEXT("ten surface views plus shell release and restored arena"));
            Finish(); Stage = 200;
        }
        return;
    }

    // the arcade's boot check: the game starts, the course builds, the Firebird stands on it
    if (Scenario == TEXT("boot"))
    {
        if (TotalT > 2.f && Stage == 0)
        {
            const bool bRange = AFBRange::Get(GetWorld()) != nullptr;
            Proof(TEXT("boots"), bRange && P->GetActorLocation().Z > 0.f, FString::Printf(TEXT("range %s, Firebird at z=%.0f"), bRange ? TEXT("built") : TEXT("missing"), P->GetActorLocation().Z));
            UE_LOG(LogFirebird, Display, TEXT("%s"), bAllOk ? TEXT("ARCADE_BOOT_OK") : TEXT("ARCADE_BOOT_FAILED"));
            Finish();
            Stage = 200;
        }
        return;
    }
    if (Scenario == TEXT("coop"))
    {
        TickCoop(P, DeltaSeconds);
        if (bFrames && !bShotTaken)
            FScreenshotRequest::RequestScreenshot(OutDir / FString::Printf(TEXT("frames/f_%05d.png"), Frame++), true, false);
        return;
    }

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

// ---- co-op: each process plays its own Firebird through the arena ------------------------------

void UFirebirdAutomation::TickCoop(AFirebirdCharacter* P, float DeltaSeconds)
{
    FFirebirdInput& I = P->Input;
    I = FFirebirdInput();
    const FVector L = P->GetActorLocation();
    AFBRange* Range = AFBRange::Get(GetWorld());

    // what this computer sees of the others
    int32 Mates = 0;
    for (TActorIterator<AFirebirdCharacter> It(GetWorld()); It; ++It)
    {
        if (*It == P) continue;
        Mates++;
        const FVector T = It->GetActorLocation();
        if (bTeammatePosSet) TeammateTravel += FVector::Dist(T, LastTeammatePos);
        LastTeammatePos = T; bTeammatePosSet = true;
        USkeletalMeshComponent* Visual = It->GetMesh();
        if (Visual->GetBoneIndex(TEXT("foot_L")) != INDEX_NONE && Cast<UFBPlayerAnimInstance>(Visual->GetAnimInstance()))
        {
            const FVector Foot = Visual->GetSocketTransform(TEXT("foot_L"), RTS_Component).GetLocation();
            const TWeakObjectPtr<AFirebirdCharacter> Key(*It);
            if (const FVector* Before = TeammateFeet.Find(Key))
                if (It->HorizontalSpeed() > 50.f) TeammateArtMotion += FVector::Dist(Foot, *Before);
            TeammateFeet.Add(Key, Foot);
        }
    }
    MaxTeammatesSeen = FMath::Max(MaxTeammatesSeen, Mates);
    int32 HollowsHere = 0;
    for (TActorIterator<AHollow> It(GetWorld()); It; ++It) if (It->IsAlive()) HollowsHere++;
    MaxHollowsSeen = FMath::Max(MaxHollowsSeen, HollowsHere);
    if (P->bDead && !bWasDead) DownsSeen++;
    bWasDead = P->bDead;

    switch (Stage)
    {
    case 0:   // wait for everyone
        if (Mates + 1 >= WantPlayers && StageT > 1.f)
        {
            Proof(TEXT("sees_teammates"), Mates + 1 >= WantPlayers, FString::Printf(TEXT("%d player(s) in this world, playing as P%d"), Mates + 1, P->PlayerIndex + 1));
            // walk into the arena side by side (this computer owns its own position)
            P->Checkpoint = FVector(FBCourse::ArenaStart + 250.f, -200.f + P->PlayerIndex * 200.f, 110.f);
            P->TeleportOwned(P->Checkpoint, 0.f);
            Next(1);
        }
        else if (StageT > 60.f) { Proof(TEXT("sees_teammates"), false, FString::Printf(TEXT("only %d player(s) after 60 s"), Mates + 1)); Next(100); }
        break;

    case 1:   // look at the team together for the picture
        for (TActorIterator<AFirebirdCharacter> It(GetWorld()); It; ++It) if (*It != P) AimAt(P, It->GetActorLocation() + FVector(0, 0, 40));
        if (StageT > 1.2f) { Shot(TEXT("01-together")); Next(2); }
        break;

    case 2:   // fight until the arena is clear
    {
        if (P->bDead) break;
        AHollow* Target = nullptr;
        float Best = BIG_NUMBER;
        for (TActorIterator<AHollow> It(GetWorld()); It; ++It)
        {
            if (!It->IsAlive()) continue;
            const float D = FVector::Dist2D(It->GetActorLocation(), L) - (It->IsCracked() ? 800.f : 0.f);   // go for cracked ones first
            if (D < Best) { Best = D; Target = *It; }
        }
        // stay in the arena
        if (L.X < FBCourse::ArenaStart + 150.f) I.Move.Y = 1.f;
        if (Target)
        {
            const FVector T = Target->GetActorLocation();
            const float D = FVector::Dist2D(T, L);
            AimAt(P, T + FVector(0, 0, 10));
            if (Target->IsCracked())
            {
                // close in and release it
                I.Move.Y = D > 220.f ? 1.f : 0.f;
                if (D > 700.f && P->DashCharge >= 1.f) I.bDash = true;
                if (P->ReleaseTarget() == Target) I.bFist = true;
            }
            else
            {
                I.bFireHeld = true;
                if (D > 1500.f) I.Move.Y = 1.f;
                // keep moving sideways so embers miss; sidestep hard when one winds up
                StrafeT -= DeltaSeconds;
                if (StrafeT <= 0.f) { StrafeT = FMath::FRandRange(0.8f, 1.6f); StrafeDirX = -StrafeDirX; }
                I.Move.X = StrafeDirX;
                if (Target->State == EHollowState::Windup && Target->WindupT > 0.4f && P->DashCharge >= 1.f) I.bDash = true;
            }
            if (!bFightShot && HollowsHere >= 3) { Shot(TEXT("02-fight")); bFightShot = true; }
        }
        if (Range && Range->bArenaClear)
        {
            Shot(TEXT("03-clear"));
            Next(3);
        }
        else if (StageT > 300.f) { Proof(TEXT("arena_clear"), false, TEXT("not clear after 300 s")); Next(100); }
        break;
    }

    case 3:
        AimAt(P, FVector(FBCourse::ArenaEnd - 100, 0, 150));
        if (StageT > 3.0f)
        {
            Shot(TEXT("04-restored-grid"));
            Proof(TEXT("arena_clear"), Range && Range->bArenaClear, FString::Printf(TEXT("cleared together in %.0f s (host clock)"), Range ? Range->ClearTime : -1.f));
            Proof(TEXT("hollows_replicated"), MaxHollowsSeen >= 1, FString::Printf(TEXT("up to %d Hollows alive at once on this computer"), MaxHollowsSeen));
            Proof(TEXT("my_hits_confirmed_by_host"), P->ConfirmedHits > 0, FString::Printf(TEXT("%d hits, %d broken by shots"), P->ConfirmedHits, P->Breaks));
            Proof(TEXT("my_releases_healed"), P->Releases > 0, FString::Printf(TEXT("%d releases"), P->Releases));
            Proof(TEXT("teammate_moving_here"), WantPlayers < 2 || TeammateTravel > 500.f, FString::Printf(TEXT("the teammate travelled %.0f m as seen on this computer"), TeammateTravel / 100.f));
            Proof(TEXT("teammate_animation"), WantPlayers < 2 || TeammateArtMotion > 10.f,
                FString::Printf(TEXT("remote skeletal foot accumulated %.0f cm of local pose movement"), TeammateArtMotion));
            UE_LOG(LogFirebird, Display, TEXT("FB_AUTO coop P%d downs=%d dashes=%d"), P->PlayerIndex + 1, DownsSeen, P->Dashes);
            Proofs.Add(FString::Printf(TEXT("    \"info\": { \"ok\": true, \"detail\": \"P%d: knocked down %d times, %d dashes, %d slides\" }"), P->PlayerIndex + 1, DownsSeen, P->Dashes, P->Slides));
            Finish();
            Next(200);
        }
        break;

    case 100:
        Shot(TEXT("99-failed"));
        Finish();
        Next(200);
        break;
    default: break;
    }
}

// A camera watches a second pawn driven through the same input and movement
// functions as a player. Bone measurements catch missing clips and frozen rigs.
void UFirebirdAutomation::TickMotion(AFirebirdCharacter* P, float Dt)
{
    // A clean review camera only for this automation scenario.
    P->Fov = 65.f;
    if (APlayerController* PC = Cast<APlayerController>(P->GetController()))
        if (AHUD* Hud = PC->GetHUD()) Hud->bShowHUD = false;
    TInlineComponentArray<UPrimitiveComponent*> ObserverParts(P);
    for (UPrimitiveComponent* Part : ObserverParts)
        if (Part->FirstPersonPrimitiveType == EFirstPersonPrimitiveType::FirstPerson) Part->SetVisibility(false);
    static const TCHAR* Names[] = { TEXT("01-idle"), TEXT("02-run"), TEXT("03-backpedal"),
        TEXT("04-strafe-left"), TEXT("05-strafe-right"), TEXT("06-crouch"), TEXT("07-jump"),
        TEXT("08-fall"), TEXT("09-punch"), TEXT("10-fire"), TEXT("11-down") };
    if (Stage >= UE_ARRAY_COUNT(Names))
    {
        if (Stage != 200) { Proof(TEXT("motion_views"), Shots.Num() == UE_ARRAY_COUNT(Names), TEXT("eleven poses captured from the native animation graph")); Finish(); Stage = 200; }
        return;
    }
    P->Input = FFirebirdInput();
    for (TActorIterator<AHollow> It(GetWorld()); It; ++It)
    {
        It->bHoldFire = true;
        It->GetCharacterMovement()->DisableMovement();
    }
    if (!MotionModel)
    {
#if WITH_EDITOR
        if (GShaderCompilingManager) GShaderCompilingManager->FinishAllCompilation();
#endif
        MotionModel = GetWorld()->SpawnActor<AFirebirdCharacter>(FVector(7600, -300, 100), FRotator(0, 180, 0));
        if (!MotionModel) { Proof(TEXT("player_spawn"), false, TEXT("could not spawn review pawn")); Finish(); Stage = 200; return; }
        MotionModel->bAutoDriven = true;
        AAIController* Driver = GetWorld()->SpawnActor<AAIController>();
        Driver->Possess(MotionModel);
        Driver->SetControlRotation(FRotator(0, 180, 0));
        MotionModel->Checkpoint = FVector(7600, -300, 100);
    }
    if (StageT <= Dt * 1.5f)
    {
        MotionModel->bDead = false; MotionModel->Health = 100;
        MotionModel->Input = FFirebirdInput();
        MotionModel->TeleportOwned(FVector(7600, -300, Stage == 7 ? 360 : 100), 180);
        if (Stage == 10) MotionModel->bDead = true;
    }
    FFirebirdInput& I = MotionModel->Input;
    I.Move = Stage == 1 ? FVector2D(0, 1) : Stage == 2 ? FVector2D(0, -1) :
        Stage == 3 ? FVector2D(-1, 0) : Stage == 4 ? FVector2D(1, 0) : FVector2D::ZeroVector;
    I.bCrouchHeld = Stage == 5;
    if (Stage == 6 && StageT > .10f && StageT < .14f) I.bJump = true;
    if (Stage == 8 && StageT > .30f && StageT < .34f) I.bFist = true;
    I.bFireHeld = Stage == 9 && StageT > .30f && StageT < .36f;
    const FVector At = MotionModel->GetActorLocation();
    const float CameraRise = FMath::Max(0.f, At.Z - 94.f);
    P->TeleportOwned(FVector(At.X - 260, At.Y - 220, 100 + CameraRise), 0);
    AimAt(P, FVector(At.X, At.Y, 95 + CameraRise));
    const float CaptureTime = Stage == 0 ? 3.f : Stage == 6 || Stage == 8 || Stage == 9 ? .48f : Stage == 7 ? .3f : .7f;
    if (StageT > CaptureTime)
    {
        USkeletalMeshComponent* Mesh = MotionModel->GetMesh();
        const FVector Foot = Mesh->GetSocketTransform(TEXT("foot_L"), RTS_Component).GetLocation();
        const FVector Hand = Mesh->GetSocketTransform(TEXT("hand_L"), RTS_Component).GetLocation();
        if (Stage == 0)
        {
            Proof(TEXT("articulated_player_loaded"), Mesh->GetSkeletalMeshAsset() && Mesh->GetNumBones() >= 21 && Cast<UFBPlayerAnimInstance>(Mesh->GetAnimInstance()),
                FString::Printf(TEXT("skeletal player with %d bones and native blend graph"), Mesh->GetNumBones()));
            MotionFoot = Foot; MotionHand = Hand;
        }
        if (Stage == 1) Proof(TEXT("running_articulation"), FVector::Dist(Foot, MotionFoot) > 10.f && MotionModel->HorizontalSpeed() > 600.f,
            FString::Printf(TEXT("foot moved %.1f cm in the rig at %.0f cm/s"), FVector::Dist(Foot, MotionFoot), MotionModel->HorizontalSpeed()));
        if (Stage == 5)
        {
            const float HeadZ = Mesh->GetBoneLocation(TEXT("head")).Z;
            Proof(TEXT("crouch_pose"), MotionModel->bIsCrouched && HeadZ < 125.f, FString::Printf(TEXT("crouched head pivot %.1f cm above the floor"), HeadZ));
        }
        if (Stage == 6) Proof(TEXT("air_pose"), MotionModel->GetCharacterMovement()->IsFalling() && FVector::Dist(Foot, MotionFoot) > 10.f,
            FString::Printf(TEXT("airborne foot offset %.1f cm"), FVector::Dist(Foot, MotionFoot)));
        if (Stage == 6 || Stage == 7)
        {
            APlayerController* PC = Cast<APlayerController>(P->GetController());
            int32 Width = 0, Height = 0; PC->GetViewportSize(Width, Height);
            bool bFramed = true;
            for (FName Bone : { FName(TEXT("head")), FName(TEXT("foot_L")), FName(TEXT("foot_R")) })
            {
                FVector2D Screen;
                bFramed &= PC->ProjectWorldLocationToScreen(Mesh->GetBoneLocation(Bone), Screen) &&
                    Screen.X > 20 && Screen.X < Width - 20 && Screen.Y > 20 && Screen.Y < Height - 20;
            }
            Proof(Stage == 6 ? TEXT("jump_framing") : TEXT("fall_framing"), bFramed, TEXT("head and both feet remain inside the review camera"));
        }
        if (Stage == 8) Proof(TEXT("layered_punch"), FVector::Dist(Hand, MotionHand) > 20.f,
            FString::Printf(TEXT("punch hand extended %.1f cm"), FVector::Dist(Hand, MotionHand)));
        Shot(Names[Stage]); Next(Stage + 1);
    }
}
