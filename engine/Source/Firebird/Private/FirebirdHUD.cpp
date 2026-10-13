#include "FirebirdHUD.h"
#include "Firebird.h"
#include "FirebirdCharacter.h"
#include "Hollow.h"
#include "FBRange.h"
#include "EngineUtils.h"
#include "GameFramework/PlayerState.h"
#include "Engine/Canvas.h"
#include "Engine/Engine.h"
#include "Engine/Font.h"
#include "Kismet/GameplayStatics.h"

void AFirebirdHUD::Say(const FString& Text, float Seconds, FLinearColor Color)
{
    Banner = Text;
    BannerT = Seconds;
    BannerColor = Color;
}

void AFirebirdHUD::DrawHUD()
{
    Super::DrawHUD();
    AFirebirdCharacter* P = Cast<AFirebirdCharacter>(GetOwningPawn());
    if (!P || !Canvas) return;
    const float W = Canvas->ClipX, H = Canvas->ClipY, S = H / 720.f;
    UFont* Big = GEngine->GetLargeFont();
    UFont* Small = GEngine->GetMediumFont();
    const float Cx = W * 0.5f, Cy = H * 0.5f;
    BannerT = FMath::Max(0.f, BannerT - GetWorld()->GetDeltaSeconds());

    // damage: a crimson flush at the edges, and a wedge toward whoever hurt you
    if (P->DamageFlash > 0.f)
    {
        const float A = P->DamageFlash * 0.7f;
        const float E = 60.f * S;
        DrawRect(FLinearColor(0.8f, 0.02f, 0.01f, A), 0, 0, W, E);
        DrawRect(FLinearColor(0.8f, 0.02f, 0.01f, A), 0, H - E, W, E);
        DrawRect(FLinearColor(0.8f, 0.02f, 0.01f, A), 0, 0, E, H);
        DrawRect(FLinearColor(0.8f, 0.02f, 0.01f, A), W - E, 0, E, H);
    }
    if (P->HurtDirT > 0.f)
    {
        const FVector To = (P->LastHurtFrom - P->GetActorLocation()).GetSafeNormal2D();
        const float Rel = FMath::DegreesToRadians(To.Rotation().Yaw - P->GetControlRotation().Yaw);
        const FVector2D D(FMath::Sin(Rel), -FMath::Cos(Rel));
        const FVector2D At = FVector2D(Cx, Cy) + D * 90.f * S;
        DrawRect(FLinearColor(1.f, 0.1f, 0.05f, P->HurtDirT), At.X - 9 * S, At.Y - 9 * S, 18 * S, 18 * S);
    }
    // a release: a gold flush and the heal, said out loud
    if (P->ReleaseFlash > 0.f)
    {
        DrawRect(FLinearColor(1.f, 0.7f, 0.2f, P->ReleaseFlash * 0.1f), 0, 0, W, H);
        DrawText(FString::Printf(TEXT("RELEASED  +%.0f"), P->LastReleaseHeal), FLinearColor(1.f, 0.85f, 0.4f, FMath::Min(1.f, P->ReleaseFlash * 2.f)), Cx - 70 * S, Cy - 110 * S, Big, S * 1.2f);
    }

    if (P->bDead)
    {
        DrawRect(FLinearColor(0.05f, 0.015f, 0.008f, 0.6f), 0, Cy - 60 * S, W, 120 * S);
        DrawText(TEXT("KNOCKED DOWN"), FLinearColor(0.88f, 0.22f, 0.16f), Cx - 120 * S, Cy - 40 * S, Big, S * 1.6f);
        DrawText(TEXT("IT ONLY BURNS BRIGHTER. RISING..."), FLinearColor(0.94f, 0.85f, 0.3f), Cx - 150 * S, Cy + 10 * S, Small, S * 1.2f);
        return;
    }

    // crosshair: white, red ticks on a hit, gold on a break; a gold ring when a release is ready
    const AHollow* Rel = P->ReleaseTarget();
    const FLinearColor Ch = Rel ? FLinearColor(1.f, 0.75f, 0.2f) : FLinearColor(0.95f, 0.92f, 0.85f, 0.85f);
    DrawRect(Ch, Cx - 12 * S, Cy - 1 * S, 8 * S, 2 * S);
    DrawRect(Ch, Cx + 4 * S, Cy - 1 * S, 8 * S, 2 * S);
    DrawRect(Ch, Cx - 1 * S, Cy - 12 * S, 2 * S, 8 * S);
    DrawRect(Ch, Cx - 1 * S, Cy + 4 * S, 2 * S, 8 * S);
    if (P->HitMarker > 0.f || P->KillMarker > 0.f)
    {
        const FLinearColor Mk = P->KillMarker > 0.f ? FLinearColor(1.f, 0.7f, 0.15f) : FLinearColor(1.f, 1.f, 1.f);
        const float R = (P->KillMarker > 0.f ? 16.f : 12.f) * S;
        for (int k = 0; k < 4; ++k)
        {
            const float Sx = (k & 1) ? 1.f : -1.f, Sy = (k & 2) ? 1.f : -1.f;
            DrawLine(Cx + Sx * R * 0.5f, Cy + Sy * R * 0.5f, Cx + Sx * R, Cy + Sy * R, Mk, 2.5f * S);
        }
    }
    if (Rel)
    {
        DrawText(TEXT("[F]  RELEASE"), FLinearColor(1.f, 0.8f, 0.3f), Cx - 62 * S, Cy + 30 * S, Big, S);
    }

    // the bar: soot with the cover's orange rim
    const float BarH = 64 * S, Y0 = H - BarH;
    DrawRect(FLinearColor(0.11f, 0.06f, 0.035f, 0.92f), 0, Y0, W, BarH);
    DrawRect(FLinearColor(1.f, 0.48f, 0.09f), 0, Y0, W, 2 * S);
    const bool bLowHp = P->Health <= 25.f;
    DrawText(TEXT("HEALTH"), FLinearColor(0.78f, 0.63f, 0.44f), 24 * S, Y0 + 8 * S, Small, S);
    DrawText(FString::Printf(TEXT("%.0f"), P->Health), bLowHp ? FLinearColor(1.f, 0.25f, 0.15f) : FLinearColor(0.88f, 0.22f, 0.16f), 24 * S, Y0 + 24 * S, Big, S * 1.8f);
    DrawText(TEXT("SPARKS"), FLinearColor(0.78f, 0.63f, 0.44f), 170 * S, Y0 + 8 * S, Small, S);
    DrawText(FString::Printf(TEXT("%d"), P->Sparks), FLinearColor(1.f, 0.82f, 0.24f), 170 * S, Y0 + 24 * S, Big, S * 1.8f);
    // dash pips: full ones glow orange, a recharging one fills
    DrawText(TEXT("DASH"), FLinearColor(0.78f, 0.63f, 0.44f), 320 * S, Y0 + 8 * S, Small, S);
    for (int32 i = 0; i < P->DashCharges; ++i)
    {
        const float Fill = FMath::Clamp(P->DashCharge - i, 0.f, 1.f);
        const float X = 320 * S + i * 46 * S, Y = Y0 + 30 * S;
        DrawRect(FLinearColor(0.2f, 0.1f, 0.05f), X, Y, 38 * S, 16 * S);
        DrawRect(Fill >= 1.f ? FLinearColor(1.f, 0.48f, 0.09f) : FLinearColor(0.55f, 0.25f, 0.06f), X, Y, 38 * S * Fill, 16 * S);
    }
    if (P->bSliding) DrawText(TEXT("SLIDE"), FLinearColor(1.f, 0.75f, 0.3f), 440 * S, Y0 + 26 * S, Small, S * 1.2f);

    // teammates: a name and a health bar over each other Firebird, in their colour
    for (TActorIterator<AFirebirdCharacter> It(GetWorld()); It; ++It)
    {
        AFirebirdCharacter* T = *It;
        if (T == P) continue;
        const FVector Sp = Project(T->GetActorLocation() + FVector(0, 0, 130));
        if (Sp.Z <= 0.f) continue;   // behind the camera
        const FLinearColor C = AFirebirdCharacter::PlayerColor(T->PlayerIndex);
        const FString Name = T->bDead ? FString::Printf(TEXT("P%d  DOWN"), T->PlayerIndex + 1) : FString::Printf(TEXT("P%d"), T->PlayerIndex + 1);
        DrawText(Name, C, Sp.X - 14 * S, Sp.Y - 22 * S, Small, S);
        DrawRect(FLinearColor(0.f, 0.f, 0.f, 0.5f), Sp.X - 25 * S, Sp.Y, 50 * S, 5 * S);
        DrawRect(C, Sp.X - 25 * S, Sp.Y, 50 * S * FMath::Clamp(T->Health / T->MaxHealth, 0.f, 1.f), 5 * S);
    }

    // the arena: which wave, how many Hollows left
    if (AFBRange* R = AFBRange::Get(GetWorld()))
    {
        if (R->Wave > 0 && !R->bArenaClear)
            DrawText(FString::Printf(TEXT("WAVE %d / %d     HOLLOWS LEFT %d"), R->Wave, R->WaveCount, R->HollowsLeft), FLinearColor(1.f, 0.6f, 0.25f), W - 330 * S, Y0 + 26 * S, Small, S * 1.1f);
        int32 Players = 0;
        for (TActorIterator<AFirebirdCharacter> It(GetWorld()); It; ++It) Players++;
        if (Players > 1) DrawText(FString::Printf(TEXT("P%d  ·  %d PLAYERS"), P->PlayerIndex + 1, Players), AFirebirdCharacter::PlayerColor(P->PlayerIndex), W - 330 * S, Y0 + 8 * S, Small, S);
    }
    BigT = FMath::Max(0.f, BigT - GetWorld()->GetDeltaSeconds());
    if (BigT > 0.f)
    {
        const float A = FMath::Min(1.f, BigT);
        DrawRect(FLinearColor(0.1f, 0.04f, 0.01f, 0.55f * A), 0, Cy - 70 * S, W, 110 * S);
        DrawText(BigText, FLinearColor(1.f, 0.78f, 0.25f, A), Cx - 190 * S, Cy - 55 * S, Big, S * 2.4f);
    }

    // the banner: Riley's radio and goals
    if (BannerT > 0.f && !Banner.IsEmpty())
    {
        DrawRect(FLinearColor(0.02f, 0.02f, 0.02f, 0.55f), 16 * S, 16 * S, W - 32 * S, 34 * S);
        DrawText(Banner, BannerColor, 26 * S, 22 * S, Small, S * 1.15f);
    }
}
