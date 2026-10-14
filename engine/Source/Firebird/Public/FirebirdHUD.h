#pragma once

#include "CoreMinimal.h"
#include "GameFramework/HUD.h"
#include "FirebirdHUD.generated.h"

// The slice HUD, readable from the couch first: crosshair with hit and break markers,
// health and sparks plates bottom-left, dash pips, the wave plate bottom-right, the
// RELEASE prompt over a cracked Hollow, Riley's radio at the top, a controls card for
// the first seconds, the knocked-down card and ARENA CLEAR. Soot and brass with the
// cover's orange rim (STYLE_GUIDE). Text is drawn at its real size (no scaled bitmaps).
UCLASS()
class FIREBIRD_API AFirebirdHUD : public AHUD
{
    GENERATED_BODY()
public:
    virtual void DrawHUD() override;

    // a line at the top (Riley's radio, objectives), set by the game
    FString Banner;
    FLinearColor BannerColor = FLinearColor(0.44f, 0.88f, 0.93f);
    float BannerT = 0.f;
    void Say(const FString& Text, float Seconds = 4.f, FLinearColor Color = FLinearColor(0.44f, 0.88f, 0.93f));
    // a big centred moment (ARENA CLEAR): pride gets a proper moment (contract K4)
    void Celebrate(const FString& Text, float Seconds = 8.f) { BigText = Text; BigT = Seconds; }
    FString BigText;
    float BigT = 0.f;

    // the start menu: PLAY ALONE / HOST FOR FRIENDS / JOIN <room>. Its items and where they
    // were drawn (for mouse clicks), rebuilt every frame from the rooms heard on the network.
    struct FMenuItem { FString Label; FString Room; bool bEnabled = true; FString Why; FVector2D Min, Max; };
    TArray<FMenuItem> MenuItems;
    void DrawMenu(class UFirebirdSession* S);

private:
    // text at a real size (Slate points at 720p, scaled to the screen); Align 0 left, 1 centre, 2 right
    void Txt(const FString& T, float Size, const FLinearColor& C, float X, float Y, int32 Align = 0, bool bBold = true, bool bShadow = true);
    FVector2D Measure(const FString& T, float Size, bool bBold = true) const;
    void Plate(float X, float Y, float W, float H, float Alpha = 0.82f, bool bRim = true);
    void Key(const FString& Cap, float X, float Y, float Alpha = 1.f);   // a keycap
    void DrawControls(float X, float Y, float Alpha);

    float Sc = 1.f;              // screen height / 720
    float PlayT = 0.f;           // seconds since the menu last closed (the controls card fades out)
    float CtlFade = 0.f;         // the controls card, eased in and out
    bool bHidPawnForMenu = false;
};
