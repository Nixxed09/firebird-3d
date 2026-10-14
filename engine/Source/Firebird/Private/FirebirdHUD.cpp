#include "FirebirdHUD.h"
#include "Firebird.h"
#include "FirebirdCharacter.h"
#include "Hollow.h"
#include "FBRange.h"
#include "FirebirdSession.h"
#include "FirebirdArcadeLan.h"
#include "EngineUtils.h"
#include "GameFramework/PlayerState.h"
#include "Engine/Canvas.h"
#include "Engine/Engine.h"
#include "Engine/Font.h"
#include "CanvasItem.h"
#include "Framework/Application/SlateApplication.h"
#include "Fonts/FontMeasure.h"
#include "Rendering/SlateRenderer.h"
#include "Kismet/GameplayStatics.h"

// the palette: soot plates, brass labels, ember rim, gold numbers (STYLE_GUIDE, the cover)
namespace FBUI
{
    // picked as sRGB (what the eye sees), stored linear (what the canvas wants)
    const FLinearColor Soot = FLinearColor::FromSRGBColor(FColor(20, 11, 7));
    const FLinearColor Ember = FLinearColor::FromSRGBColor(FColor(255, 122, 23));
    const FLinearColor Gold = FLinearColor::FromSRGBColor(FColor(255, 201, 74));
    const FLinearColor Brass = FLinearColor::FromSRGBColor(FColor(201, 162, 106));
    const FLinearColor Cream = FLinearColor::FromSRGBColor(FColor(245, 234, 213));
    const FLinearColor Blood = FLinearColor::FromSRGBColor(FColor(240, 64, 44));
    const FLinearColor HealthBar = FLinearColor::FromSRGBColor(FColor(214, 50, 36));
    const FLinearColor Plate2 = FLinearColor::FromSRGBColor(FColor(38, 20, 11));     // a menu button
    const FLinearColor PlateSel = FLinearColor::FromSRGBColor(FColor(92, 40, 12));   // the chosen one
    FLinearColor A(FLinearColor C, float Alpha) { C.A *= Alpha; return C; }
}

static FSlateFontInfo FBFont(float Size, bool bBold)
{
    return FSlateFontInfo(GEngine->GetMediumFont(), FMath::Max(1, FMath::RoundToInt(Size)), bBold ? FName(TEXT("Bold")) : FName(TEXT("Regular")));
}

FVector2D AFirebirdHUD::Measure(const FString& T, float Size, bool bBold) const
{
    const FSlateFontInfo F = FBFont(Size * Sc * 0.75f, bBold);   // sizes are pixels at 720p; Slate wants points
    if (FSlateApplication::IsInitialized())
        if (FSlateRenderer* R = FSlateApplication::Get().GetRenderer())
            return R->GetFontMeasureService()->Measure(T, F);
    return FVector2D(T.Len() * Size * Sc * 0.55f, Size * Sc * 1.2f);
}

void AFirebirdHUD::Txt(const FString& T, float Size, const FLinearColor& C, float X, float Y, int32 Align, bool bBold, bool bShadow)
{
    if (T.IsEmpty() || C.A <= 0.01f) return;
    if (Align == 2) X -= Measure(T, Size, bBold).X;
    FCanvasTextItem Item(FVector2D(X, Y), FText::FromString(T), FBFont(Size * Sc * 0.75f, bBold), C);
    Item.bCentreX = Align == 1;
    if (bShadow) Item.EnableShadow(FLinearColor(0.f, 0.f, 0.f, 0.85f * C.A), FVector2D(1.5f, 1.5f) * FMath::Max(1.f, Sc));
    Canvas->DrawItem(Item);
}

void AFirebirdHUD::Plate(float X, float Y, float W, float H, float Alpha, bool bRim)
{
    DrawRect(FBUI::A(FBUI::Soot, Alpha), X, Y, W, H);
    if (bRim) DrawRect(FBUI::A(FBUI::Ember, FMath::Min(1.f, Alpha + 0.1f)), X, Y, 3.f * Sc, H);
}

void AFirebirdHUD::Key(const FString& Cap, float X, float Y, float Alpha)
{
    const FVector2D Sz = Measure(Cap, 13.f);
    const float W = FMath::Max(26.f * Sc, Sz.X + 14.f * Sc), H = 24.f * Sc;
    DrawRect(FLinearColor(0.93f, 0.85f, 0.70f, 0.95f * Alpha), X, Y, W, H);
    DrawRect(FLinearColor(0.55f, 0.40f, 0.25f, 0.95f * Alpha), X, Y + H - 3.f * Sc, W, 3.f * Sc);
    Txt(Cap, 13.f, FLinearColor(0.12f, 0.06f, 0.03f, Alpha), X + W * 0.5f, Y + 3.f * Sc, 1, true, false);
}

// the controls, keycap and what it does, in two columns
void AFirebirdHUD::DrawControls(float X, float Y, float Alpha, bool bMouseRow)
{
    struct FRow { const TCHAR* Cap; const TCHAR* What; };
    static const FRow Rows[] = {
        { TEXT("W A S D"), TEXT("Move") },          { TEXT("MOUSE"), TEXT("Look and aim") },
        { TEXT("SPACE"), TEXT("Jump") },            { TEXT("LEFT CLICK"), TEXT("Shoot sparks") },
        { TEXT("SHIFT"), TEXT("Dash (2 charges)") },{ TEXT("RIGHT CLICK"), TEXT("Fist: free a cracked Hollow") },
        { TEXT("CTRL"), TEXT("Slide (while running)") }, { TEXT("ESC"), TEXT("Back to the menu") },
        { TEXT("[   ]"), TEXT("Mouse slower / faster") },
    };
    const int32 Count = UE_ARRAY_COUNT(Rows) - (bMouseRow ? 0 : 1);
    for (int32 i = 0; i < Count; ++i)
    {
        const float Cx = X + (i % 2) * 280.f * Sc, Cy = Y + (i / 2) * 32.f * Sc;
        Key(Rows[i].Cap, Cx, Cy, Alpha);
        Txt(Rows[i].What, 15.f, FBUI::A(FBUI::Cream, Alpha), Cx + 108.f * Sc, Cy + 2.f * Sc, 0, false);
    }
}

void AFirebirdHUD::Say(const FString& Text, float Seconds, FLinearColor Color)
{
    Banner = Text;
    BannerT = Seconds;
    BannerColor = Color;
}

void AFirebirdHUD::DrawHUD()
{
    Super::DrawHUD();
    if (!Canvas) return;
    const float W = Canvas->ClipX, H = Canvas->ClipY;
    Sc = H / 720.f;
    const float S = Sc, Dt = GetWorld()->GetDeltaSeconds();
    AFirebirdCharacter* P = Cast<AFirebirdCharacter>(GetOwningPawn());
    if (UFirebirdSession* Session = UFirebirdSession::Get(this); Session && Session->InMenu())
    {
        // the menu is about the menu: hide our own Firebird (the gun) behind it
        if (P && !P->IsHidden()) { P->SetActorHiddenInGame(true); bHidPawnForMenu = true; }
        PlayT = 0.f;
        DrawMenu(Session);
        return;
    }
    if (P && bHidPawnForMenu) { P->SetActorHiddenInGame(false); bHidPawnForMenu = false; }
    MenuItems.Reset();
    if (!P) return;
    PlayT += Dt;
    const float Cx = W * 0.5f, Cy = H * 0.5f;
    BannerT = FMath::Max(0.f, BannerT - Dt);
    BigT = FMath::Max(0.f, BigT - Dt);

    // damage: a crimson flush at the edges, and a wedge toward whoever hurt you
    if (P->DamageFlash > 0.f)
    {
        const float A = P->DamageFlash * 0.6f, E = 48.f * S;
        for (int32 k = 0; k < 6; ++k)   // soft edge: stacked thin bands fading inward
        {
            const float B = E * (k + 1) / 6.f, Ak = A * (1.f - k / 6.f) * 0.35f;
            const FLinearColor C(0.8f, 0.02f, 0.01f, Ak);
            DrawRect(C, 0, 0, W, B); DrawRect(C, 0, H - B, W, B); DrawRect(C, 0, 0, B, H); DrawRect(C, W - B, 0, B, H);
        }
    }
    if (P->HurtDirT > 0.f)
    {
        const FVector To = (P->LastHurtFrom - P->GetActorLocation()).GetSafeNormal2D();
        const float RelA = FMath::DegreesToRadians(To.Rotation().Yaw - P->GetControlRotation().Yaw);
        const FVector2D D(FMath::Sin(RelA), -FMath::Cos(RelA));
        const FVector2D At = FVector2D(Cx, Cy) + D * 110.f * S;
        const FVector2D Side(-D.Y, D.X);
        const FLinearColor C(1.f, 0.15f, 0.05f, P->HurtDirT);
        for (int32 k = -3; k <= 3; ++k)   // a short arc facing the attacker
        {
            const FVector2D A0 = At + Side * (k * 9.f * S) - D * (FMath::Abs(k) * 2.f * S);
            const FVector2D A1 = At + Side * ((k + 1) * 9.f * S) - D * (FMath::Abs(k + 1) * 2.f * S);
            if (k < 3) DrawLine(A0.X, A0.Y, A1.X, A1.Y, C, 5.f * S);
        }
    }
    // a release: a gold flush and the heal, said out loud
    if (P->ReleaseFlash > 0.f)
    {
        const float A = FMath::Min(1.f, P->ReleaseFlash * 2.f);
        DrawRect(FLinearColor(1.f, 0.7f, 0.2f, P->ReleaseFlash * 0.08f), 0, 0, W, H);
        const float Rw = 380 * S;
        DrawRect(FBUI::A(FBUI::Soot, 0.7f * A), Cx - Rw * 0.5f, Cy - 158 * S, Rw, 84 * S);
        DrawRect(FBUI::A(FBUI::Gold, A), Cx - Rw * 0.5f, Cy - 158 * S, Rw, 2 * S);
        Txt(TEXT("LIGHT RELEASED"), 30.f, FBUI::A(FBUI::Gold, A), Cx, Cy - 150.f * S, 1);
        Txt(FString::Printf(TEXT("+%.0f HEALTH   +%d SPARKS"), P->LastReleaseHeal, P->ReleaseSparks), 18.f, FBUI::A(FBUI::Cream, A), Cx, Cy - 108.f * S, 1);
    }

    if (P->bDead)
    {
        DrawRect(FLinearColor(0.04f, 0.012f, 0.006f, 0.72f), 0, Cy - 80 * S, W, 160 * S);
        DrawRect(FBUI::A(FBUI::Ember, 0.9f), 0, Cy - 80 * S, W, 2 * S);
        DrawRect(FBUI::A(FBUI::Ember, 0.9f), 0, Cy + 78 * S, W, 2 * S);
        Txt(TEXT("KNOCKED DOWN"), 46.f, FBUI::Blood, Cx, Cy - 56 * S, 1);
        Txt(TEXT("It only burns brighter. Rising in a moment..."), 20.f, FBUI::Cream, Cx, Cy + 14 * S, 1, false);
        return;
    }

    // crosshair: cream with a dark outline; gold when a release is ready; ticks on a hit
    const AHollow* Rel = P->ReleaseTarget();
    const FLinearColor Ch = Rel ? FBUI::Gold : FLinearColor(0.98f, 0.95f, 0.88f, 0.95f);
    const FLinearColor Ol(0.f, 0.f, 0.f, 0.6f);
    auto Bar = [&](float X, float Y, float Bw, float Bh) { DrawRect(Ol, X - S, Y - S, Bw + 2 * S, Bh + 2 * S); DrawRect(Ch, X, Y, Bw, Bh); };
    Bar(Cx - 14 * S, Cy - 1 * S, 9 * S, 2 * S);
    Bar(Cx + 5 * S, Cy - 1 * S, 9 * S, 2 * S);
    Bar(Cx - 1 * S, Cy - 14 * S, 2 * S, 9 * S);
    Bar(Cx - 1 * S, Cy + 5 * S, 2 * S, 9 * S);
    if (P->HitMarker > 0.f || P->KillMarker > 0.f)
    {
        const FLinearColor Mk = P->KillMarker > 0.f ? FBUI::Gold : FLinearColor(1.f, 1.f, 1.f);
        const float R = (P->KillMarker > 0.f ? 20.f : 15.f) * S;
        for (int k = 0; k < 4; ++k)
        {
            const float Sx = (k & 1) ? 1.f : -1.f, Sy = (k & 2) ? 1.f : -1.f;
            DrawLine(Cx + Sx * R * 0.5f, Cy + Sy * R * 0.5f, Cx + Sx * R, Cy + Sy * R, Mk, 3.f * S);
        }
    }
    if (Rel)
    {
        const FString Prompt = TEXT("RIGHT CLICK  -  RELEASE THE LIGHT");
        const float Pw = Measure(Prompt, 20.f).X + 36 * S;
        const float Pulse = 0.75f + 0.25f * FMath::Sin(GetWorld()->GetTimeSeconds() * 8.f);
        DrawRect(FLinearColor(0.06f, 0.03f, 0.01f, 0.8f), Cx - Pw * 0.5f, Cy + 34 * S, Pw, 38 * S);
        DrawRect(FBUI::A(FBUI::Gold, Pulse), Cx - Pw * 0.5f, Cy + 34 * S, Pw, 2 * S);
        DrawRect(FBUI::A(FBUI::Gold, Pulse), Cx - Pw * 0.5f, Cy + 70 * S, Pw, 2 * S);
        Txt(Prompt, 20.f, FBUI::Gold, Cx, Cy + 40 * S, 1);
    }

    // bottom-left: health and sparks plates, dash pips; the viewmodel stays visible
    const float M = 20.f * S, PlH = 76.f * S, Y0 = H - M - PlH;
    const float Hp = FMath::Clamp(P->Health / P->MaxHealth, 0.f, 1.f);
    const bool bLowHp = P->Health <= 25.f;
    const float LowPulse = bLowHp ? 0.6f + 0.4f * FMath::Sin(GetWorld()->GetTimeSeconds() * 7.f) : 1.f;
    Plate(M, Y0, 250 * S, PlH);
    Txt(TEXT("HEALTH"), 13.f, FBUI::Brass, M + 16 * S, Y0 + 8 * S);
    Txt(FString::Printf(TEXT("%.0f"), FMath::Max(0.f, P->Health)), 34.f, FBUI::A(bLowHp ? FBUI::Blood : FBUI::Cream, LowPulse), M + 16 * S, Y0 + 24 * S);
    const float Bx = M + 96 * S, By = Y0 + 44 * S, Bw = 138 * S, Bh = 12 * S;
    DrawRect(FLinearColor(0.f, 0.f, 0.f, 0.55f), Bx, By, Bw, Bh);
    DrawRect(bLowHp ? FBUI::Blood : FBUI::HealthBar, Bx, By, Bw * Hp, Bh);
    DrawRect(FLinearColor(1.f, 1.f, 1.f, 0.18f), Bx, By, Bw * Hp, 3 * S);

    const float X2 = M + 262 * S;
    Plate(X2, Y0, 150 * S, PlH);
    Txt(TEXT("SPARKS"), 13.f, FBUI::Brass, X2 + 16 * S, Y0 + 8 * S);
    Txt(FString::Printf(TEXT("%d"), P->Sparks), 34.f, P->Sparks <= 10 ? FBUI::Blood : FBUI::Gold, X2 + 16 * S, Y0 + 24 * S);

    const float X3 = X2 + 162 * S;
    Plate(X3, Y0, 136 * S, PlH);
    Txt(TEXT("DASH  [SHIFT]"), 13.f, FBUI::Brass, X3 + 16 * S, Y0 + 8 * S);
    for (int32 i = 0; i < P->DashCharges; ++i)
    {
        const float Fill = FMath::Clamp(P->DashCharge - i, 0.f, 1.f);
        const float X = X3 + 16 * S + i * 54 * S, Y = Y0 + 38 * S;
        DrawRect(FLinearColor(0.f, 0.f, 0.f, 0.55f), X, Y, 46 * S, 20 * S);
        DrawRect(Fill >= 1.f ? FBUI::Ember : FLinearColor(0.5f, 0.24f, 0.07f), X, Y, 46 * S * Fill, 20 * S);
        if (Fill >= 1.f) DrawRect(FLinearColor(1.f, 0.85f, 0.5f, 0.5f), X, Y, 46 * S, 3 * S);
    }
    if (P->bSliding) Txt(TEXT("SLIDING"), 20.f, FBUI::Gold, X3 + 150 * S, Y0 + 30 * S);

    // teammates: a name tag and a health bar over each other Firebird, in their colour
    int32 Players = 0;
    for (TActorIterator<AFirebirdCharacter> It(GetWorld()); It; ++It)
    {
        AFirebirdCharacter* T = *It;
        Players++;
        if (T == P) continue;
        const FVector Sp = Project(T->GetActorLocation() + FVector(0, 0, 140));
        if (Sp.Z <= 0.f) continue;   // behind the camera
        const FLinearColor C = AFirebirdCharacter::PlayerColor(T->PlayerIndex);
        const FString Name = T->bDead ? FString::Printf(TEXT("P%d  DOWN"), T->PlayerIndex + 1) : FString::Printf(TEXT("P%d"), T->PlayerIndex + 1);
        const float Tw = Measure(Name, 16.f).X + 16 * S;
        DrawRect(FLinearColor(0.f, 0.f, 0.f, 0.55f), Sp.X - FMath::Max(Tw, 64 * S) * 0.5f, Sp.Y - 30 * S, FMath::Max(Tw, 64 * S), 38 * S);
        Txt(Name, 16.f, C, Sp.X, Sp.Y - 28 * S, 1);
        DrawRect(FLinearColor(0.f, 0.f, 0.f, 0.6f), Sp.X - 28 * S, Sp.Y - 2 * S, 56 * S, 6 * S);
        DrawRect(C, Sp.X - 28 * S, Sp.Y - 2 * S, 56 * S * FMath::Clamp(T->Health / T->MaxHealth, 0.f, 1.f), 6 * S);
    }

    // bottom-right: who you are (co-op) and the arena's wave
    AFBRange* R = AFBRange::Get(GetWorld());
    const bool bWave = R && R->Wave > 0 && !R->bArenaClear;
    if (bWave || Players > 1)
    {
        const float Pw = 240 * S, Px = W - M - Pw;
        if (bWave) Plate(Px, Y0, Pw, PlH);
        else Plate(Px, Y0 + PlH - 36 * S, Pw, 36 * S);
        if (bWave)
        {
            Txt(FString::Printf(TEXT("WAVE %d OF %d"), R->Wave, R->WaveCount), 13.f, FBUI::Brass, Px + 16 * S, Y0 + 8 * S);
            Txt(FString::Printf(TEXT("%d"), R->HollowsLeft), 34.f, FBUI::Cream, Px + 16 * S, Y0 + 24 * S);
            Txt(R->HollowsLeft == 1 ? TEXT("HOLLOW LEFT") : TEXT("HOLLOWS LEFT"), 15.f, FBUI::Brass, Px + 70 * S, Y0 + 40 * S);
        }
        if (Players > 1)
        {
            if (bWave) Plate(Px, Y0 - 42 * S, Pw, 36 * S);
            Txt(FString::Printf(TEXT("YOU ARE P%d  -  %d PLAYERS"), P->PlayerIndex + 1, Players), 13.f, AFirebirdCharacter::PlayerColor(P->PlayerIndex), Px + Pw - 14 * S, bWave ? Y0 - 34 * S : Y0 + PlH - 28 * S, 2);
        }
    }

    // the big moment: ARENA CLEAR and the time
    if (BigT > 0.f)
    {
        const float A = FMath::Min(1.f, BigT);
        FString Head = BigText, Sub;
        BigText.Split(TEXT("  "), &Head, &Sub);
        DrawRect(FLinearColor(0.06f, 0.025f, 0.01f, 0.7f * A), 0, Cy - 110 * S, W, 170 * S);
        DrawRect(FBUI::A(FBUI::Ember, A), 0, Cy - 110 * S, W, 3 * S);
        DrawRect(FBUI::A(FBUI::Ember, A), 0, Cy + 57 * S, W, 3 * S);
        Txt(Head.IsEmpty() ? BigText : Head, 56.f, FBUI::A(FBUI::Gold, A), Cx, Cy - 96 * S, 1);
        if (!Sub.IsEmpty()) Txt(FString::Printf(TEXT("TIME  %s"), *Sub), 24.f, FBUI::A(FBUI::Cream, A), Cx, Cy - 12 * S, 1);
        Txt(TEXT("Esc for the menu"), 15.f, FBUI::A(FBUI::Brass, A), Cx, Cy + 26 * S, 1, false);
    }

    // Riley on the radio: a centred plate at the top, the speaker tagged
    if (BannerT > 0.f && !Banner.IsEmpty())
    {
        const float A = FMath::Min(1.f, BannerT * 2.f);
        FString Who, Line = Banner;
        if (Banner.Split(TEXT(": "), &Who, &Line) && Who.Len() > 12) { Who.Reset(); Line = Banner; }
        const float Tag = Who.IsEmpty() ? 0.f : Measure(Who, 15.f).X + 20 * S;
        const float Lw = Measure(Line, 19.f, false).X;
        const float Pw = FMath::Min(W - 40 * S, Tag + Lw + 40 * S), Px = Cx - Pw * 0.5f, Py = 18 * S;
        DrawRect(FLinearColor(0.02f, 0.03f, 0.035f, 0.78f * A), Px, Py, Pw, 44 * S);
        DrawRect(FBUI::A(BannerColor, A), Px, Py, 3 * S, 44 * S);
        if (!Who.IsEmpty()) Txt(Who, 15.f, FBUI::A(BannerColor, A), Px + 18 * S, Py + 12 * S);
        Txt(Line, 19.f, FBUI::A(FBUI::Cream, A), Px + 18 * S + Tag, Py + 10 * S, 0, false);
    }

    // the controls, for the first seconds of play (and no arena yet), then they fade away
    bool bFight = bWave;   // the card never covers a fight
    for (TActorIterator<AHollow> It(GetWorld()); It && !bFight; ++It)
        bFight = FVector::Dist(It->GetActorLocation(), P->GetActorLocation()) < 2600.f;
    CtlFade = FMath::FInterpTo(CtlFade, (PlayT < 16.f && !bFight) ? 1.f : 0.f, Dt, 4.f);
    const float CtlA = CtlFade;
    if (CtlA > 0.02f)
    {
        const float Cw = 620 * S, Cxl = M, Cyt = H - M - PlH - 194 * S;
        DrawRect(FBUI::A(FBUI::Soot, 0.72f * CtlA), Cxl, Cyt, Cw, 182 * S);
        DrawRect(FBUI::A(FBUI::Ember, CtlA), Cxl, Cyt, Cw, 2 * S);
        DrawControls(Cxl + 20 * S, Cyt + 14 * S, CtlA, true);
    }
}

// ---- the start menu -----------------------------------------------------------------------------

void AFirebirdHUD::DrawMenu(UFirebirdSession* S)
{
    const float W = Canvas->ClipX, H = Canvas->ClipY;
    // the cover's look: a deep ember panel over a darkened forge, an orange rim
    DrawRect(FLinearColor(0.f, 0.f, 0.f, 0.45f), 0, 0, W, H);
    const float Pw = FMath::Max(W * 0.5f, 660.f * Sc);
    DrawRect(FBUI::A(FBUI::Soot, 0.94f), 0, 0, Pw, H);
    for (int32 k = 0; k < 8; ++k)   // a soft edge into the scene
        DrawRect(FBUI::A(FBUI::Soot, 0.5f * (1.f - k / 8.f)), Pw + k * 6 * Sc, 0, 6 * Sc, H);
    DrawRect(FBUI::Ember, Pw - 3 * Sc, 0, 3 * Sc, H);

    const float L = 64 * Sc;
    Txt(TEXT("FIREBIRD"), 64.f, FBUI::Gold, L, 40 * Sc);
    const float Tw = Measure(TEXT("FIREBIRD"), 64.f).X;
    DrawRect(FBUI::Ember, L + Tw + 16 * Sc, 64 * Sc, 92 * Sc, 34 * Sc);
    Txt(TEXT("CO-OP"), 20.f, FLinearColor(0.1f, 0.04f, 0.01f), L + Tw + 62 * Sc, 67 * Sc, 1, true, false);
    Txt(TEXT("Dash, slide and set the Hollows' light free."), 19.f, FBUI::Cream, L, 136 * Sc, 0, false);
    Txt(TEXT("Play alone, or with up to 4 people on your home network."), 19.f, FBUI::Brass, L, 162 * Sc, 0, false);

    // the items: play alone, host, and every friend's room heard on the network
    MenuItems.Reset();
    MenuItems.Add({ TEXT("PLAY ALONE"), FString(), true, TEXT("Run the practice course, then hold the arena.") });
    MenuItems.Add({ TEXT("HOST A GAME FOR FRIENDS"), FString(), true, TEXT("Start a game others in the house can join.") });
    for (const FFirebirdLanRoom& R : S->Rooms())
    {
        FMenuItem It;
        It.Label = FString::Printf(TEXT("JOIN %s'S GAME   %d/%d"), *R.Host.ToUpper(), R.Players, R.MaxPlayers);
        It.Room = R.Room;
        It.bEnabled = R.bSameBuild && R.Players < R.MaxPlayers;
        It.Why = !R.bSameBuild ? R.BuildMessage : (R.Players >= R.MaxPlayers ? FString(UFirebirdArcadeLan::MSG_FULL) : FString::Printf(TEXT("Play together with %s."), *R.Host));
        MenuItems.Add(It);
    }
    S->SelectedItem = FMath::Clamp(S->SelectedItem, 0, MenuItems.Num() - 1);
    float Y = 214 * Sc;
    const float Bw = Pw - L - 48 * Sc, Bh = 62 * Sc;
    for (int32 i = 0; i < MenuItems.Num(); ++i)
    {
        FMenuItem& It = MenuItems[i];
        const bool bSel = i == S->SelectedItem;
        It.Min = FVector2D(L, Y);
        It.Max = FVector2D(L + Bw, Y + Bh);
        DrawRect(FBUI::A(bSel ? FBUI::PlateSel : FBUI::Plate2, 0.96f), L, Y, Bw, Bh);
        DrawRect(bSel ? FBUI::Ember : FLinearColor(0.35f, 0.2f, 0.1f), L, Y, 5 * Sc, Bh);
        if (bSel) { DrawRect(FBUI::A(FBUI::Ember, 0.7f), L, Y, Bw, 2 * Sc); DrawRect(FBUI::A(FBUI::Ember, 0.7f), L, Y + Bh - 2 * Sc, Bw, 2 * Sc); }
        // the number key, as a cap
        DrawRect(bSel ? FBUI::Gold : FLinearColor(0.55f, 0.42f, 0.28f), L + 20 * Sc, Y + 15 * Sc, 32 * Sc, 32 * Sc);
        Txt(FString::FromInt(i + 1), 18.f, FLinearColor(0.1f, 0.04f, 0.01f), L + 36 * Sc, Y + 18 * Sc, 1, true, false);
        const FLinearColor C = !It.bEnabled ? FLinearColor(0.5f, 0.45f, 0.4f) : bSel ? FLinearColor(1.f, 0.9f, 0.6f) : FBUI::Cream;
        Txt(It.Label, 24.f, C, L + 70 * Sc, Y + 5 * Sc);
        if (!It.Why.IsEmpty()) Txt(It.Why, 15.f, It.bEnabled ? FBUI::Brass : FLinearColor(1.f, 0.55f, 0.4f), L + 70 * Sc, Y + 37 * Sc, 0, false);
        if (bSel) Txt(TEXT("ENTER"), 13.f, FBUI::Gold, L + Bw - 18 * Sc, Y + 23 * Sc, 2);
        Y += Bh + 10 * Sc;
        if (i == 1 && MenuItems.Num() == 2)
        {
            Txt(TEXT("No friends' games on the network yet. When someone hosts, it shows up here."), 15.f, FLinearColor(0.75f, 0.65f, 0.55f), L + 4 * Sc, Y + 2 * Sc, 0, false);
            Y += 32 * Sc;
        }
    }
    if (!S->Status.IsEmpty()) { Txt(S->Status, 18.f, FLinearColor(1.f, 0.65f, 0.35f), L, Y + 4 * Sc); Y += 34 * Sc; }

    // settings: mouse sensitivity, with - and + buttons (left/right arrows too)
    {
        const float Ry = Y + 6 * Sc, Rh = 46 * Sc;
        DrawRect(FBUI::A(FBUI::Plate2, 0.9f), L, Ry, Bw, Rh);
        Txt(TEXT("MOUSE SENSITIVITY"), 17.f, FBUI::Cream, L + 20 * Sc, Ry + 12 * Sc);
        const float Bs = 34 * Sc, Vx = L + 250 * Sc, By = Ry + 6 * Sc;
        auto Btn = [&](const TCHAR* Cap, float X, FVector2D* Out)
        {
            DrawRect(FLinearColor(0.93f, 0.85f, 0.70f, 0.95f), X, By, Bs, Bs);
            DrawRect(FLinearColor(0.55f, 0.40f, 0.25f, 0.95f), X, By + Bs - 3 * Sc, Bs, 3 * Sc);
            Txt(Cap, 20.f, FLinearColor(0.12f, 0.06f, 0.03f), X + Bs * 0.5f, By + 3 * Sc, 1, true, false);
            Out[0] = FVector2D(X, By); Out[1] = FVector2D(X + Bs, By + Bs);
        };
        Btn(TEXT("-"), Vx, SensMinus);
        Txt(S->SensitivityText(), 22.f, FBUI::Gold, Vx + Bs + 34 * Sc, Ry + 9 * Sc, 1);
        Btn(TEXT("+"), Vx + Bs + 68 * Sc, SensPlus);
        Txt(TEXT("or the arrow keys"), 14.f, FBUI::Brass, Vx + 2 * Bs + 86 * Sc, Ry + 14 * Sc, 0, false);
        Y = Ry + Rh;
    }

    // how to play, always there (below the list when friends' games make it long)
    const float Hy = FMath::Max(Y + 44 * Sc, H - 210 * Sc);
    Txt(TEXT("HOW TO PLAY"), 15.f, FBUI::Ember, L, Hy - 30 * Sc);
    DrawControls(L, Hy, 1.f);
    Txt(TEXT("Number keys, arrows + Enter, or click.   Esc quits.        A Nix Games production by Phoenix"), 13.f, FLinearColor(0.62f, 0.52f, 0.42f), L, H - 26 * Sc, 0, false);
}
