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
#include "Misc/App.h"
#include "Misc/ScopeExit.h"

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
    // measured once per string, size and screen scale: the same labels are asked for every frame
    if (MeasuredAtSc != Sc || Measured.Num() > 600) { Measured.Reset(); MeasuredAtSc = Sc; }
    const uint32 Id = HashCombine(HashCombine(FCrc::StrCrc32(*T), GetTypeHash(Size)), bBold ? 1u : 0u);
    if (const FVector2D* Known = Measured.Find(Id)) return *Known;
    const FSlateFontInfo F = FBFont(Size * Sc * 0.75f, bBold);   // sizes are pixels at 720p; Slate wants points
    if (FSlateApplication::IsInitialized())
        if (FSlateRenderer* R = FSlateApplication::Get().GetRenderer())
            return Measured.Add(Id, R->GetFontMeasureService()->Measure(T, F));
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
    const UFirebirdSession* Session = UFirebirdSession::Get(this);
    if (Session && Session->bUsingPad)
    {
        static const FRow Pad[] = {
            { TEXT("L STICK"), TEXT("Move") },          { TEXT("R STICK"), TEXT("Look and aim") },
            { TEXT("A"), TEXT("Jump") },                { TEXT("RT"), TEXT("Shoot sparks") },
            { TEXT("RB"), TEXT("Dash (2 charges)") },    { TEXT("LT  or  X"), TEXT("Fist: free a cracked Hollow") },
            { TEXT("B / R3"), TEXT("Crouch / slide") },          { TEXT("START"), TEXT("Pause menu") },
            { TEXT("LB"), TEXT("Aim down the sights") },         { TEXT("Y"), TEXT("Reload the drum") },
            { TEXT("D-PAD < >"), TEXT("Look slower / faster") },
        };
        const int32 PadCount = UE_ARRAY_COUNT(Pad) - (bMouseRow ? 0 : 1);
        for (int32 i = 0; i < PadCount; ++i)
        {
            const float Cx = X + (i % 2) * 330.f * Sc, Cy = Y + (i / 2) * 32.f * Sc;
            Key(Pad[i].Cap, Cx, Cy, Alpha);
            Txt(Pad[i].What, 15.f, FBUI::A(FBUI::Cream, Alpha), Cx + 108.f * Sc, Cy + 2.f * Sc, 0, false);
        }
        return;
    }
    static const FRow Rows[] = {
        { TEXT("W A S D"), TEXT("Move") },          { TEXT("MOUSE"), TEXT("Look and aim") },
        { TEXT("SPACE"), TEXT("Jump") },            { TEXT("LEFT CLICK"), TEXT("Shoot sparks") },
        { TEXT("SHIFT"), TEXT("Dash (2 charges)") },{ TEXT("RIGHT CLICK"), TEXT("Aim down the sights") },
        { TEXT("F"), TEXT("Fist: free a cracked Hollow") }, { TEXT("R"), TEXT("Reload the drum") },
        { TEXT("CTRL"), TEXT("Slide (while running)") }, { TEXT("ESC"), TEXT("Pause menu") },
        { TEXT("[   ]"), TEXT("Mouse slower / faster") },
    };
    const int32 Count = UE_ARRAY_COUNT(Rows) - (bMouseRow ? 0 : 1);
    for (int32 i = 0; i < Count; ++i)
    {
        const float Cx = X + (i % 2) * 330.f * Sc, Cy = Y + (i / 2) * 32.f * Sc;
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
    // the pause menu goes over whatever the play HUD draws (also over the knocked-down card)
    UFirebirdSession* Paused = UFirebirdSession::Get(this);
    if (!Paused || !Paused->bPaused) { Paused = nullptr; MenuItems.Reset(); }
    ON_SCOPE_EXIT { if (Paused) DrawMenu(Paused); };
    if (!P || Paused) return;   // the play HUD steps aside for the pause menu
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
    // a release: a gold flush, and the heal said out loud near the top (never over the Hollow)
    if (P->ReleaseFlash > 0.f)
    {
        const float A = FMath::Min(1.f, P->ReleaseFlash * 2.f), Ty = H * 0.2f;
        DrawRect(FLinearColor(1.f, 0.7f, 0.2f, P->ReleaseFlash * 0.08f), 0, 0, W, H);
        Txt(TEXT("LIGHT RELEASED"), 26.f, FBUI::A(FBUI::Gold, A), Cx, Ty, 1);
        DrawRect(FBUI::A(FBUI::Gold, A), Cx - 90.f * S, Ty + 38.f * S, 180.f * S, 2.f * S);
        Txt(FString::Printf(TEXT("+%.0f HEALTH   +%d SPARKS"), P->LastReleaseHeal, P->ReleaseSparks), 16.f, FBUI::A(FBUI::Cream, A), Cx, Ty + 46.f * S, 1);
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
    // the four ticks open with the shot cone (running, jumping, fanning fast) and close down the
    // sights, so the crosshair always says honestly where the next spark can land. Down the sights
    // the iron sights do the aiming and only a small dot stays.
    {
        const float ConePx = FMath::Tan(FMath::DegreesToRadians(P->SpreadDeg)) / FMath::Tan(FMath::DegreesToRadians(0.5f * GetOwningPlayerController()->PlayerCameraManager->GetFOVAngle())) * Canvas->ClipX * 0.5f;
        const float Gap = 4.f * S + ConePx, Fade = 1.f - 0.85f * P->AimBlend;
        auto CrossTick = [&](float X, float Y, float Bw, float Bh) { DrawRect(FBUI::A(Ol, Ol.A * Fade), X - S, Y - S, Bw + 2 * S, Bh + 2 * S); DrawRect(FBUI::A(Ch, Ch.A * Fade), X, Y, Bw, Bh); };
        CrossTick(Cx - Gap - 9 * S, Cy - 1 * S, 9 * S, 2 * S);
        CrossTick(Cx + Gap, Cy - 1 * S, 9 * S, 2 * S);
        CrossTick(Cx - 1 * S, Cy - Gap - 9 * S, 2 * S, 9 * S);
        CrossTick(Cx - 1 * S, Cy + Gap, 2 * S, 9 * S);
        Bar(Cx - 1 * S, Cy - 1 * S, 2 * S, 2 * S);
    }
    if (P->IsReloading())
    {
        // a ring of six marks around the crosshair filling as the drum loads
        const float Pr = 1.f - P->ReloadT / P->ReloadTime;
        for (int32 k = 0; k < 6; ++k)
        {
            const float Ang = FMath::DegreesToRadians(-90.f + 60.f * k);
            const bool bIn = Pr > 0.3f + 0.07f * (k + 1);
            const float R = 26.f * S;
            DrawRect(bIn ? FBUI::A(FBUI::Gold, 0.95f) : FLinearColor(0.f, 0.f, 0.f, 0.5f), Cx + FMath::Cos(Ang) * R - 3 * S, Cy + FMath::Sin(Ang) * R - 3 * S, 6 * S, 6 * S);
        }
    }
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
        const UFirebirdSession* Ses = UFirebirdSession::Get(this);
        const FString Prompt = (Ses && Ses->bUsingPad) ? TEXT("LT  -  RELEASE THE LIGHT") : TEXT("F  -  RELEASE THE LIGHT");
        const float Pw = Measure(Prompt, 20.f).X + 36 * S;
        const float Pulse = 0.75f + 0.25f * FMath::Sin(GetWorld()->GetTimeSeconds() * 8.f);
        DrawRect(FLinearColor(0.06f, 0.03f, 0.01f, 0.8f), Cx - Pw * 0.5f, Cy + 34 * S, Pw, 38 * S);
        DrawRect(FBUI::A(FBUI::Gold, Pulse), Cx - Pw * 0.5f, Cy + 34 * S, Pw, 2 * S);
        DrawRect(FBUI::A(FBUI::Gold, Pulse), Cx - Pw * 0.5f, Cy + 70 * S, Pw, 2 * S);
        Txt(Prompt, 20.f, FBUI::Gold, Cx, Cy + 40 * S, 1);
    }

    // ---- the play HUD -------------------------------------------------------------------------
    // No boxes: a soft shade along the bottom edge carries the numbers over any floor. Health and
    // dash sit bottom-left, the weapon's sparks bottom-right beside the weapon, the wave top-right.
    const UFirebirdSession* PadSes = UFirebirdSession::Get(this);
    const bool bPad = PadSes && PadSes->bUsingPad;
    const float M = 28.f * S, PlH = 76.f * S, Base = H - 26.f * S;
    const float Now = GetWorld()->GetTimeSeconds();
    const FLinearColor Black(0.f, 0.f, 0.f);
    FadeDown(Black, 0, H - 120.f * S, W, 120.f * S, 0.f, 0.6f);

    // health: the number over a bar. What was just lost stays pale for a beat, then drains away,
    // so a hit can be read after it lands. Low health turns it red and pulses the screen edge.
    const float Hp = FMath::Clamp(P->Health / P->MaxHealth, 0.f, 1.f);
    if (HpShown < 0.f) HpShown = HpGhost = HpLast = Hp;
    if (Hp < HpLast - 0.001f) HpGhostHold = 0.45f;
    HpLast = Hp;
    HpShown = FMath::FInterpTo(HpShown, Hp, Dt, 18.f);
    HpGhostHold = FMath::Max(0.f, HpGhostHold - Dt);
    if (HpGhost <= Hp) HpGhost = Hp;
    else if (HpGhostHold <= 0.f) HpGhost = FMath::FInterpConstantTo(HpGhost, Hp, Dt, 0.7f);
    const bool bLowHp = P->Health <= 25.f;
    const float LowPulse = bLowHp ? 0.6f + 0.4f * FMath::Sin(Now * 7.f) : 1.f;
    if (bLowHp)
    {
        const float A = 0.16f + 0.1f * FMath::Sin(Now * 5.f), E = 60.f * S;
        for (int32 k = 0; k < 4; ++k)
        {
            const float B = E * (k + 1) / 4.f;
            const FLinearColor C(0.8f, 0.02f, 0.01f, A * (1.f - k / 4.f) * 0.5f);
            DrawRect(C, 0, 0, W, B); DrawRect(C, 0, H - B, W, B); DrawRect(C, 0, 0, B, H); DrawRect(C, W - B, 0, B, H);
        }
    }
    const float BarW = 250.f * S, BarH = 10.f * S, BarY = Base - BarH;
    const FLinearColor HpCol = bLowHp ? FBUI::Blood : (P->ReleaseFlash > 0.f ? FBUI::Gold : FBUI::Cream);
    Txt(FString::FromInt(FMath::Max(0, FMath::CeilToInt(P->Health))), 44.f, FBUI::A(HpCol, LowPulse), M, BarY - 60.f * S);
    DrawRect(FBUI::A(Black, 0.6f), M - S, BarY - S, BarW + 2.f * S, BarH + 2.f * S);
    DrawRect(FBUI::A(FBUI::Cream, 0.85f), M, BarY, BarW * HpGhost, BarH);
    DrawRect(bLowHp ? FBUI::Blood : FBUI::HealthBar, M, BarY, BarW * HpShown, BarH);
    DrawRect(FLinearColor(1.f, 1.f, 1.f, 0.2f), M, BarY, BarW * HpShown, 3.f * S);
    for (int32 k = 1; k < 4; ++k) DrawRect(FBUI::A(Black, 0.5f), M + BarW * k / 4.f, BarY, FMath::Max(1.f, S), BarH);

    // dash: one pip per charge above the right end of the health bar
    {
        const float PipW = 40.f * S, PipH = 7.f * S, Gap = 5.f * S, PipY = BarY - 17.f * S;
        const float PipsX = M + BarW - P->DashCharges * (PipW + Gap) + Gap;
        for (int32 i = 0; i < P->DashCharges; ++i)
        {
            const float Fill = FMath::Clamp(P->DashCharge - i, 0.f, 1.f), X = PipsX + i * (PipW + Gap);
            DrawRect(FBUI::A(Black, 0.6f), X - S, PipY - S, PipW + 2.f * S, PipH + 2.f * S);
            DrawRect(Fill >= 1.f ? FBUI::Ember : FLinearColor(0.5f, 0.24f, 0.07f), X, PipY, PipW * Fill, PipH);
            if (Fill >= 1.f) DrawRect(FLinearColor(1.f, 0.85f, 0.5f, 0.5f), X, PipY, PipW, 2.f * S);
        }
        // the key shows while it is new, and again whenever no dash is ready
        const bool bShowKey = PlayT < 20.f || P->DashCharge < 1.f;
        Txt(bShowKey ? (bPad ? TEXT("DASH  RB") : TEXT("DASH  SHIFT")) : TEXT("DASH"), 11.f, FBUI::Brass, PipsX - 8.f * S, PipY - 5.f * S, 2);
        if (P->bSliding) Txt(TEXT("SLIDING"), 14.f, FBUI::Gold, M + BarW + 16.f * S, BarY - 6.f * S);
    }

    // sparks, beside the weapon: everything you carry as the number, the drum as six crystals
    // (lit while loaded), and the reload word when it matters
    {
        const float Rx = W - M;
        const FString Count = FString::FromInt(P->Sparks);
        Txt(Count, 44.f, P->Sparks <= 10 ? FBUI::Blood : FBUI::Gold, Rx, BarY - 60.f * S, 2);
        Txt(TEXT("SPARKS"), 11.f, FBUI::Brass, Rx - Measure(Count, 44.f).X - 10.f * S, BarY - 22.f * S, 2);
        const float Cw = 14.f * S, Chh = 16.f * S, Gap = 5.f * S;
        const float X0 = Rx - (P->DrumSize * (Cw + Gap) - Gap), Y0c = Base - Chh;
        for (int32 k = 0; k < P->DrumSize; ++k)
        {
            const float Dx = X0 + k * (Cw + Gap);
            const bool bLit = !P->IsReloading() && k < P->Drum;
            DrawRect(FBUI::A(Black, 0.6f), Dx - S, Y0c - S, Cw + 2.f * S, Chh + 2.f * S);
            DrawRect(bLit ? FLinearColor(0.35f, 0.85f, 1.f, 1.f) : FLinearColor(0.08f, 0.12f, 0.15f, 1.f), Dx, Y0c, Cw, Chh);
            if (bLit) DrawRect(FLinearColor(1.f, 1.f, 1.f, 0.35f), Dx, Y0c, Cw, 3.f * S);
        }
        if (P->IsReloading()) Txt(TEXT("LOADING"), 13.f, FBUI::Gold, X0 - 12.f * S, Y0c - S, 2);
        else if (P->Drum == 0 && P->Sparks > 0)
            Txt(bPad ? TEXT("Y  RELOAD") : TEXT("R  RELOAD"), 13.f, FBUI::A(FBUI::Gold, 0.7f + 0.3f * FMath::Sin(Now * 8.f)), X0 - 12.f * S, Y0c - S, 2);
    }

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
        Txt(Name, 16.f, C, Sp.X, Sp.Y - 28 * S, 1);
        DrawRect(FBUI::A(Black, 0.6f), Sp.X - 29 * S, Sp.Y - 3 * S, 58 * S, 8 * S);
        DrawRect(C, Sp.X - 28 * S, Sp.Y - 2 * S, 56 * S * FMath::Clamp(T->Health / T->MaxHealth, 0.f, 1.f), 6 * S);
    }

    // top-right: the arena's wave, and who you are when others are playing
    AFBRange* R = AFBRange::Get(GetWorld());
    const bool bWave = R && R->Wave > 0 && !R->bArenaClear;
    {
        const float Rx = W - M;
        float Ty = 22.f * S;
        if (bWave)
        {
            const FString Left = FString::FromInt(R->HollowsLeft);
            Txt(FString::Printf(TEXT("WAVE %d OF %d"), R->Wave, R->WaveCount), 13.f, FBUI::Brass, Rx, Ty, 2);
            Txt(Left, 38.f, FBUI::Cream, Rx, Ty + 16.f * S, 2);
            Txt(R->HollowsLeft == 1 ? TEXT("HOLLOW LEFT") : TEXT("HOLLOWS LEFT"), 12.f, FBUI::Brass, Rx - Measure(Left, 38.f).X - 10.f * S, Ty + 42.f * S, 2);
            FadeRight(FBUI::Ember, Rx - 150.f * S, Ty + 68.f * S, 150.f * S, 2.f * S, 0.f, 1.f);
            Ty += 78.f * S;
        }
        if (Players > 1)
            Txt(FString::Printf(TEXT("YOU ARE P%d  -  %d PLAYERS"), P->PlayerIndex + 1, Players), 13.f, AFirebirdCharacter::PlayerColor(P->PlayerIndex), Rx, Ty, 2);
    }

    // Keep the victory and the way home visible until the player leaves the arena.
    const bool bArenaClear = R && R->bArenaClear;
    if (BigT > 0.f || bArenaClear)
    {
        const float A = bArenaClear ? 1.f : FMath::Min(1.f, BigT);
        FString Head = BigText, Sub;
        BigText.Split(TEXT("  "), &Head, &Sub);
        DrawRect(FLinearColor(0.06f, 0.025f, 0.01f, 0.7f * A), 0, Cy - 110 * S, W, 170 * S);
        DrawRect(FBUI::A(FBUI::Ember, A), 0, Cy - 110 * S, W, 3 * S);
        DrawRect(FBUI::A(FBUI::Ember, A), 0, Cy + 57 * S, W, 3 * S);
        Txt(Head.IsEmpty() ? BigText : Head, 56.f, FBUI::A(FBUI::Gold, A), Cx, Cy - 96 * S, 1);
        if (!Sub.IsEmpty()) Txt(FString::Printf(TEXT("TIME  %s"), *Sub), 24.f, FBUI::A(FBUI::Cream, A), Cx, Cy - 12 * S, 1);
        const bool bUsingPad = PadSes && PadSes->bUsingPad;
        Txt(bUsingPad ? TEXT("Press START for the menu") : TEXT("Press Esc for the menu"),
            20.f, FBUI::A(FBUI::Cream, A), Cx, Cy + 24 * S, 1);
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
    if (PlayT < 16.f)
        for (TActorIterator<AHollow> It(GetWorld()); It && !bFight; ++It)
            bFight = FVector::Dist(It->GetActorLocation(), P->GetActorLocation()) < 2600.f;
    CtlFade = FMath::FInterpTo(CtlFade, (PlayT < 16.f && !bFight) ? 1.f : 0.f, Dt, 4.f);
    const float CtlA = CtlFade;
    if (CtlA > 0.02f)
    {
        const float Cw = 670 * S, Cxl = M, Cyt = H - M - PlH - 226 * S;
        DrawRect(FBUI::A(FBUI::Soot, 0.72f * CtlA), Cxl, Cyt, Cw, 214 * S);
        DrawRect(FBUI::A(FBUI::Ember, CtlA), Cxl, Cyt, Cw, 2 * S);
        DrawControls(Cxl + 20 * S, Cyt + 14 * S, CtlA, true);
    }
}

// ---- the menus: the title menu and the pause menu -----------------------------------------------
//
// One look for every screen: the scene stays visible on the right, a soot shade falls off from
// the left, and the list is plain type with an ember marker on the chosen row. One line under
// the list says what the chosen item does. The bottom edge says which buttons work here.

void AFirebirdHUD::Spaced(const FString& T, float Size, const FLinearColor& C, float X, float Y, float Gap)
{
    for (int32 i = 0; i < T.Len(); ++i)
    {
        const FString Ch = T.Mid(i, 1);
        if (Ch != TEXT(" ")) Txt(Ch, Size, C, X, Y, 0, true, false);
        X += (Ch == TEXT(" ") ? Size * Sc * 0.45f : Measure(Ch, Size).X) + Gap;
    }
}

void AFirebirdHUD::FadeRight(const FLinearColor& C, float X, float Y, float W, float H, float A0, float A1)
{
    const int32 N = 32;
    for (int32 k = 0; k < N; ++k)
    {
        const float T = (k + 0.5f) / N;
        DrawRect(FBUI::A(C, FMath::Lerp(A0, A1, T * T * (3.f - 2.f * T))), X + W * k / N, Y, W / N + 1.f, H);
    }
}

void AFirebirdHUD::FadeDown(const FLinearColor& C, float X, float Y, float W, float H, float A0, float A1)
{
    const int32 N = 20;
    for (int32 k = 0; k < N; ++k)
        DrawRect(FBUI::A(C, FMath::Lerp(A0, A1, (k + 0.5f) / N)), X, Y + H * k / N, W, H / N + 1.f);
}

float AFirebirdHUD::KeyHint(const FString& Cap, const FString& What, float X, float Y, float Alpha)
{
    Key(Cap, X, Y, Alpha);
    X += FMath::Max(26.f * Sc, Measure(Cap, 13.f).X + 14.f * Sc) + 10.f * Sc;
    Txt(What, 15.f, FBUI::A(FBUI::Cream, 0.9f * Alpha), X, Y + 2.f * Sc, 0, false);
    return X + Measure(What, 15.f, false).X + 30.f * Sc;
}

void AFirebirdHUD::BuildMenuItems(UFirebirdSession* S)
{
    MenuItems.Reset();
    auto Add = [this](const TCHAR* Label, const TCHAR* Action, const FString& Why) -> FMenuItem&
    {
        FMenuItem& It = MenuItems.AddDefaulted_GetRef();
        It.Label = Label;
        It.Action = FName(Action);
        It.Why = Why;
        return It;
    };
    const ENetMode Net = GetWorld()->GetNetMode();
    const FString LeaveWhy = Net == NM_ListenServer ? TEXT("This closes your game for everyone who joined it.")
        : Net == NM_Client ? TEXT("You leave this game. The others keep playing.")
        : TEXT("Back to the title menu. This run is not saved.");
    switch (S->Screen)
    {
    case EFirebirdScreen::Multiplayer:
    {
        Add(TEXT("HOST A GAME"), TEXT("host"), FString::Printf(TEXT("Open a game on this computer. Up to %d players on your home network can join it."), UFirebirdSession::MaxPlayers));
        const TArray<FFirebirdLanRoom> Rooms = S->Rooms();
        for (const FFirebirdLanRoom& R : Rooms)
        {
            FMenuItem& It = Add(TEXT(""), TEXT("join"), FString());
            It.Label = FString::Printf(TEXT("%s'S GAME"), *R.Host.ToUpper());
            It.Room = R.Room;
            It.Value = FString::Printf(TEXT("%d / %d"), R.Players, R.MaxPlayers);
            It.bEnabled = R.bSameBuild && R.Players < R.MaxPlayers;
            It.Why = !R.bSameBuild ? R.BuildMessage : (R.Players >= R.MaxPlayers ? FString(UFirebirdArcadeLan::MSG_FULL) : FString::Printf(TEXT("Join %s's game."), *R.Host));
        }
        Add(TEXT("BACK"), TEXT("back"), FString());
        MenuItems[1].Header = TEXT("GAMES ON YOUR NETWORK");
        if (Rooms.Num() == 0) MenuItems[1].Note = TEXT("None yet. When someone in the house hosts, their game shows up here.");
        break;
    }
    case EFirebirdScreen::Settings:
    {
        FMenuItem& Sens = Add(TEXT("LOOK SENSITIVITY"), TEXT("sens"), S->bUsingPad
            ? TEXT("How fast the view turns. D-pad left and right change it while you play, too.")
            : TEXT("How fast the view turns. The [ and ] keys change it while you play, too."));
        Sens.Value = S->SensitivityText();
        Sens.Fill = (S->MouseSensitivity - UFirebirdSession::SensitivityMin) / (UFirebirdSession::SensitivityMax - UFirebirdSession::SensitivityMin);
        Sens.bAdjust = true;
        FMenuItem& Inv = Add(TEXT("INVERT LOOK"), TEXT("invert"), TEXT("On: pushing up looks down, like flying a plane."));
        Inv.Value = S->bInvertLook ? TEXT("ON") : TEXT("OFF");
        Inv.bAdjust = true;
        FMenuItem& Vol = Add(TEXT("VOLUME"), TEXT("volume"), TEXT("How loud the whole game is."));
        Vol.Value = FString::FromInt(S->Volume);
        Vol.Fill = S->Volume / 10.f;
        Vol.bAdjust = true;
        FMenuItem& Disp = Add(TEXT("DISPLAY"), TEXT("display"), TEXT("Fill the whole screen, or play in a window."));
        Disp.Value = S->bFullscreen ? TEXT("FULL SCREEN") : TEXT("WINDOW");
        Disp.bAdjust = true;
        Add(TEXT("BACK"), TEXT("back"), FString());
        break;
    }
    case EFirebirdScreen::Controls:
        Add(TEXT("BACK"), TEXT("back"), S->bUsingPad ? TEXT("Press a key on the keyboard to see the keyboard's controls.") : TEXT("Press a button on a controller to see the controller's buttons."));
        break;
    case EFirebirdScreen::Quit:
        Add(TEXT("KEEP PLAYING"), TEXT("back"), FString());
        Add(TEXT("QUIT TO DESKTOP"), TEXT("quit_yes"), TEXT("Close Firebird."));
        break;
    case EFirebirdScreen::Pause:
        Add(TEXT("RESUME"), TEXT("resume"), FString());
        Add(TEXT("SETTINGS"), TEXT("settings"), TEXT("Look speed, sound and display."));
        Add(TEXT("CONTROLS"), TEXT("controls"), TEXT("What every key and button does."));
        Add(TEXT("LEAVE GAME"), TEXT("leave"), LeaveWhy);
        break;
    case EFirebirdScreen::Leave:
        Add(TEXT("KEEP PLAYING"), TEXT("back"), FString());
        Add(TEXT("LEAVE TO THE TITLE MENU"), TEXT("leave_yes"), LeaveWhy);
        break;
    default:
    {
        Add(TEXT("PLAY"), TEXT("play"), TEXT("Run the course, then hold the arena against the Hollows."));
        const int32 Open = S->Rooms().Num();
        FMenuItem& Multi = Add(TEXT("MULTIPLAYER"), TEXT("multiplayer"), FString::Printf(TEXT("Host or join a game on your home network. Up to %d players."), UFirebirdSession::MaxPlayers));
        if (Open > 0) Multi.Value = Open == 1 ? FString(TEXT("1 GAME OPEN")) : FString::Printf(TEXT("%d GAMES OPEN"), Open);
        Add(TEXT("SETTINGS"), TEXT("settings"), TEXT("Look speed, sound and display."));
        Add(TEXT("CONTROLS"), TEXT("controls"), TEXT("What every key and button does."));
        Add(TEXT("QUIT"), TEXT("quit"), TEXT("Close Firebird."));
        break;
    }
    }
}

void AFirebirdHUD::DrawMenu(UFirebirdSession* S)
{
    const float W = Canvas->ClipX, H = Canvas->ClipY;
    // the menus run on real time: the world may be stopped behind them
    const float Dt = FMath::Min(0.1f, (float)FApp::GetDeltaTime());
    MenuClock += Dt;
    if (S->Screen != ShownScreen || S->bPaused != bShownPaused)
    {
        ShownScreen = S->Screen;
        bShownPaused = S->bPaused;
        ScreenT = 0.f;
        ItemEase.Reset();
    }
    ScreenT += Dt;
    const float In = FMath::InterpEaseOut(0.f, 1.f, FMath::Clamp(ScreenT / 0.22f, 0.f, 1.f), 2.f);   // each screen eases in
    const bool bTitleMenu = !S->bPaused;
    const bool bMain = bTitleMenu && S->Screen == EFirebirdScreen::Main;
    const float L = 72.f * Sc - (1.f - In) * 16.f * Sc;
    const FLinearColor Black(0.f, 0.f, 0.f);
    const FLinearColor Muted = FLinearColor::FromSRGBColor(FColor(168, 146, 120));

    // the backdrop: the scene, dimmed; a shade from the left for the type; darker top and bottom edges
    DrawRect(FBUI::A(Black, bTitleMenu ? 0.28f : 0.58f), 0, 0, W, H);
    FadeRight(FBUI::Soot, 0, 0, W * 0.7f, H, 0.95f, 0.f);
    FadeDown(Black, 0, 0, W, 100.f * Sc, 0.5f, 0.f);
    FadeDown(Black, 0, H - 160.f * Sc, W, 160.f * Sc, 0.f, 0.8f);

    // embers drifting up across the title menu
    if (bTitleMenu)
        for (int32 i = 0; i < 44; ++i)
        {
            const float H1 = FMath::Frac(FMath::Sin(i * 12.9898f) * 43758.5453f + 1.f), H2 = FMath::Frac(FMath::Sin(i * 78.233f) * 12345.678f + 1.f), H3 = FMath::Frac(FMath::Sin(i * 39.425f) * 9876.54f + 1.f);
            const float Rise = FMath::Frac(MenuClock * (0.03f + 0.05f * H2) + H3);
            const float X = (H1 + 0.02f * FMath::Sin(MenuClock * (0.4f + H2) + i)) * W, Y = (1.f - Rise) * H;
            const float Size = (1.5f + 2.5f * H3) * Sc, A = FMath::Sin(Rise * PI) * (0.3f + 0.55f * H2);
            const FLinearColor C = FMath::Lerp(FBUI::Ember, FBUI::Gold, H2);
            DrawRect(FBUI::A(C, A), X, Y, Size, Size);
        }

    // the heading: the wordmark on the title screen, the screen's name everywhere else
    float ListY;
    if (bMain)
    {
        const float Ty = 92.f * Sc, Tw = Measure(TEXT("FIREBIRD"), 96.f).X;
        const float Glow = 0.22f + 0.1f * FMath::Sin(MenuClock * 1.7f);
        Txt(TEXT("FIREBIRD"), 96.f, FBUI::A(FBUI::Ember, Glow * In), L + 3.f * Sc, Ty + 4.f * Sc, 0, true, false);
        Txt(TEXT("FIREBIRD"), 96.f, FBUI::A(FBUI::Gold, In), L, Ty);
        DrawRect(FBUI::A(FBUI::Ember, In), L + 4.f * Sc, Ty + 122.f * Sc, Tw - 8.f * Sc, 3.f * Sc);
        FadeRight(FBUI::Ember, L + Tw - 4.f * Sc, Ty + 122.f * Sc, 180.f * Sc, 3.f * Sc, In, 0.f);
        Spaced(TEXT("SET THE LIGHT FREE"), 15.f, FBUI::A(FBUI::Brass, In), L + 5.f * Sc, Ty + 138.f * Sc, 7.f * Sc);
        ListY = 312.f * Sc;
    }
    else
    {
        const ENetMode Net = GetWorld()->GetNetMode();
        const TCHAR* Name = TEXT("");
        FString Under;
        switch (S->Screen)
        {
        case EFirebirdScreen::Multiplayer: Name = TEXT("MULTIPLAYER"); Under = TEXT("Everyone plays on the same home network, each on their own computer."); break;
        case EFirebirdScreen::Settings: Name = TEXT("SETTINGS"); Under = TEXT("Saved on this computer for you."); break;
        case EFirebirdScreen::Controls: Name = TEXT("CONTROLS"); break;
        case EFirebirdScreen::Quit: Name = TEXT("QUIT FIREBIRD?"); break;
        case EFirebirdScreen::Leave: Name = TEXT("LEAVE THE GAME?"); break;
        default:
            Name = Net == NM_Standalone ? TEXT("PAUSED") : TEXT("MENU");
            if (Net != NM_Standalone) Under = TEXT("The game keeps running while this is open.");
            break;
        }
        Spaced(TEXT("FIREBIRD"), 14.f, FBUI::A(FBUI::Brass, In), L + 2.f * Sc, 58.f * Sc, 8.f * Sc);
        Txt(Name, 52.f, FBUI::A(FBUI::Cream, In), L, 80.f * Sc);
        DrawRect(FBUI::A(FBUI::Ember, In), L + 2.f * Sc, 150.f * Sc, 64.f * Sc, 3.f * Sc);
        if (!Under.IsEmpty()) Txt(Under, 16.f, FBUI::A(Muted, In), L + 2.f * Sc, 164.f * Sc, 0, false);
        ListY = 216.f * Sc;
        if (S->Screen == EFirebirdScreen::Controls)
        {
            Spaced(S->bUsingPad ? TEXT("CONTROLLER") : TEXT("KEYBOARD AND MOUSE"), 13.f, FBUI::A(FBUI::Ember, In), L + 2.f * Sc, ListY - 26.f * Sc, 4.f * Sc);
            DrawControls(L + 2.f * Sc, ListY + 4.f * Sc, In, true);
            ListY += 196.f * Sc;
        }
    }

    // the list
    BuildMenuItems(S);
    S->SelectedItem = FMath::Clamp(S->SelectedItem, 0, MenuItems.Num() - 1);
    ItemEase.SetNumZeroed(MenuItems.Num());
    const float RowW = 600.f * Sc, RowH = (bMain ? 54.f : 48.f) * Sc, Size = bMain ? 32.f : 27.f;
    float Y = ListY;
    for (int32 i = 0; i < MenuItems.Num(); ++i)
    {
        FMenuItem& It = MenuItems[i];
        const bool bSel = i == S->SelectedItem;
        if (!It.Header.IsEmpty())
        {
            Y += 14.f * Sc;
            Spaced(It.Header, 13.f, FBUI::A(FBUI::Ember, In), L + 2.f * Sc, Y, 4.f * Sc);
            Y += 30.f * Sc;
        }
        if (!It.Note.IsEmpty())
        {
            Txt(It.Note, 16.f, FBUI::A(Muted, In), L + 2.f * Sc, Y, 0, false);
            Y += 36.f * Sc;
        }
        float& E = ItemEase[i];
        E = FMath::FInterpTo(E, bSel ? 1.f : 0.f, Dt, 16.f);
        It.Min = FVector2D(L - 14.f * Sc, Y);
        It.Max = FVector2D(L - 14.f * Sc + RowW, Y + RowH);
        if (E > 0.01f)
        {
            FadeRight(FBUI::PlateSel, L - 14.f * Sc, Y, RowW, RowH, 0.9f * E * In, 0.f);
            DrawRect(FBUI::A(FBUI::Ember, E * In), L - 14.f * Sc, Y + 7.f * Sc, 4.f * Sc, RowH - 14.f * Sc);
        }
        const FLinearColor Off(0.5f, 0.45f, 0.4f);
        const FLinearColor C = !It.bEnabled ? Off : FMath::Lerp(FBUI::A(FBUI::Cream, 0.8f), FLinearColor(1.f, 0.9f, 0.6f), E);
        const float Ty = Y + (RowH - Size * Sc * 1.28f) * 0.5f;
        Txt(It.Label, Size, FBUI::A(C, In), L + 4.f * Sc + E * 10.f * Sc, Ty);
        if (!It.Value.IsEmpty())
        {
            const float Vx = L + 330.f * Sc, Vy = Y + (RowH - 22.f * Sc * 1.28f) * 0.5f;
            const FLinearColor Vc = FBUI::A(It.bEnabled ? FBUI::Gold : Off, In);
            if (!It.bAdjust) Txt(It.Value, 18.f, Vc, L - 14.f * Sc + RowW - 24.f * Sc, Y + (RowH - 18.f * Sc * 1.28f) * 0.5f, 2);
            else
            {
                // < value >, the arrows are there for the mouse and show on the chosen row
                const float Aw = 30.f * Sc, Span = 190.f * Sc;
                It.LessMin = FVector2D(Vx, Y); It.LessMax = FVector2D(Vx + Aw, Y + RowH);
                It.MoreMin = FVector2D(Vx + Aw + Span, Y); It.MoreMax = FVector2D(Vx + 2.f * Aw + Span, Y + RowH);
                const FLinearColor Ac = FBUI::A(FBUI::Cream, (0.3f + 0.7f * E) * In);
                Txt(TEXT("<"), 22.f, Ac, Vx + Aw * 0.5f, Vy, 1);
                Txt(TEXT(">"), 22.f, Ac, Vx + Aw * 1.5f + Span, Vy, 1);
                if (It.Fill < 0.f) Txt(It.Value, 22.f, Vc, Vx + Aw + Span * 0.5f, Vy, 1);
                else
                {
                    const float Bx = Vx + Aw + 10.f * Sc, Bw = Span - 20.f * Sc, By = Y + RowH * 0.5f - 3.f * Sc;
                    DrawRect(FBUI::A(Black, 0.6f * In), Bx, By, Bw, 6.f * Sc);
                    DrawRect(FBUI::A(FBUI::Ember, In), Bx, By, Bw * FMath::Clamp(It.Fill, 0.f, 1.f), 6.f * Sc);
                    DrawRect(FBUI::A(FBUI::Gold, In), Bx + Bw * FMath::Clamp(It.Fill, 0.f, 1.f) - 2.f * Sc, By - 5.f * Sc, 4.f * Sc, 16.f * Sc);
                    Txt(It.Value, 22.f, Vc, Vx + 2.f * Aw + Span + 14.f * Sc, Vy);
                }
            }
        }
        Y += RowH + 4.f * Sc;
    }

    // one line about the chosen item, always in the same place
    if (MenuItems.IsValidIndex(S->SelectedItem))
    {
        const FMenuItem& It = MenuItems[S->SelectedItem];
        if (!It.Why.IsEmpty()) Txt(It.Why, 17.f, FBUI::A(It.bEnabled ? FBUI::Brass : FLinearColor(1.f, 0.55f, 0.4f), In), L + 2.f * Sc, Y + 14.f * Sc, 0, false);
    }
    // what the game has to say: joining, or why a join did not work
    if (!S->Status.IsEmpty())
    {
        const float Sy = Y + 56.f * Sc, Sw = FMath::Max(RowW, Measure(S->Status, 17.f).X + 44.f * Sc);
        DrawRect(FBUI::A(FBUI::Soot, 0.9f), L - 14.f * Sc, Sy, Sw, 40.f * Sc);
        DrawRect(FBUI::Ember, L - 14.f * Sc, Sy, 4.f * Sc, 40.f * Sc);
        Txt(S->Status, 17.f, FLinearColor(1.f, 0.72f, 0.42f), L + 6.f * Sc, Sy + 9.f * Sc);
    }

    // the bottom edge: which buttons work here, and whose game this is
    const float Fy = H - 50.f * Sc;
    const bool bAdjust = MenuItems.IsValidIndex(S->SelectedItem) && MenuItems[S->SelectedItem].bAdjust;
    const TCHAR* BackWord = bMain ? TEXT("Quit") : (S->Screen == EFirebirdScreen::Pause ? TEXT("Resume") : TEXT("Back"));
    float Fx = 72.f * Sc;
    if (S->bUsingPad)
    {
        Fx = KeyHint(TEXT("A"), TEXT("Select"), Fx, Fy, 1.f);
        if (bAdjust) Fx = KeyHint(TEXT("D-PAD < >"), TEXT("Change"), Fx, Fy, 1.f);
        Fx = KeyHint(TEXT("B"), BackWord, Fx, Fy, 1.f);
    }
    else
    {
        Fx = KeyHint(TEXT("ENTER"), TEXT("Select"), Fx, Fy, 1.f);
        if (bAdjust) Fx = KeyHint(TEXT("<  >"), TEXT("Change"), Fx, Fy, 1.f);
        Fx = KeyHint(TEXT("ESC"), BackWord, Fx, Fy, 1.f);
    }
    if (bTitleMenu)
    {
        Txt(TEXT("A Nix Games production by Phoenix"), 14.f, Muted, W - 72.f * Sc, Fy + 3.f * Sc, 2, false);
        if (!S->BuildId.IsEmpty()) Txt(FString::Printf(TEXT("build %s"), *S->BuildId.Left(8)), 12.f, FBUI::A(Muted, 0.6f), W - 72.f * Sc, Fy - 16.f * Sc, 2, false);
    }
}
