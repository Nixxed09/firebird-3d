#pragma once

#include "CoreMinimal.h"
#include "GameFramework/HUD.h"
#include "FirebirdSession.h"
#include "FirebirdHUD.generated.h"

// The slice HUD, readable from the couch first: crosshair with hit and break markers,
// health and dash bottom-left, the weapon's sparks bottom-right, the wave top-right, the
// RELEASE prompt over a cracked Hollow, Riley's radio at the top, a controls card for
// the first seconds, the knocked-down card and ARENA CLEAR, and the menus (the title
// menu and the pause menu, drawn by DrawMenu). Soot and brass with the
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

    // The menus (the title menu and the pause menu): the items of the screen that is up, and where
    // each was drawn (for the mouse). Rebuilt every frame from UFirebirdSession::Screen and the rooms
    // heard on the network. Choosing an item is UFirebirdSession::Activate(Action, Room).
    struct FMenuItem
    {
        FString Label;
        FName Action;
        FString Room;               // for a join
        bool bEnabled = true;
        FString Why;                // one line about it, shown for the chosen item (or why it is off)
        FString Value;              // a setting's value, drawn on the right
        float Fill = -1.f;          // 0..1 draws a bar under the value
        bool bAdjust = false;       // left and right change it
        FString Header, Note;       // a section title and a line of plain text above this item
        FVector2D Min, Max;         // the row
        FVector2D LessMin, LessMax, MoreMin, MoreMax;   // its < and > arrows
    };
    TArray<FMenuItem> MenuItems;
    void DrawMenu(class UFirebirdSession* S);

private:
    // text at a real size (Slate points at 720p, scaled to the screen); Align 0 left, 1 centre, 2 right
    void Txt(const FString& T, float Size, const FLinearColor& C, float X, float Y, int32 Align = 0, bool bBold = true, bool bShadow = true);
    FVector2D Measure(const FString& T, float Size, bool bBold = true) const;
    void Plate(float X, float Y, float W, float H, float Alpha = 0.82f, bool bRim = true);
    void Key(const FString& Cap, float X, float Y, float Alpha = 1.f);   // a keycap
    void DrawControls(float X, float Y, float Alpha, bool bMouseRow = false);   // bMouseRow: the [ ] sensitivity keys too (in play)
    void Spaced(const FString& T, float Size, const FLinearColor& C, float X, float Y, float Gap);   // small capitals set wide
    void FadeRight(const FLinearColor& C, float X, float Y, float W, float H, float A0, float A1);   // a band whose alpha runs A0 to A1
    void FadeDown(const FLinearColor& C, float X, float Y, float W, float H, float A0, float A1);
    float KeyHint(const FString& Cap, const FString& What, float X, float Y, float Alpha);         // a keycap and its word; returns the next X
    void BuildMenuItems(class UFirebirdSession* S);

    TArray<float> ItemEase;      // each menu row's slide toward "chosen", 0..1
    float MenuClock = 0.f;       // real seconds the menus have been drawn (they move while the world is stopped)
    float ScreenT = 0.f;         // real seconds since the screen changed (each screen eases in)
    EFirebirdScreen ShownScreen = EFirebirdScreen::Count;
    bool bShownPaused = false;
    float Sc = 1.f;              // screen height / 720
    mutable TMap<uint32, FVector2D> Measured;   // text sizes already measured at this screen scale
    mutable float MeasuredAtSc = 0.f;
    float HpShown = -1.f;        // the health bar, eased toward the real value (-1: not set yet)
    float HpGhost = 0.f;         // the pale part behind it: what was just lost
    float HpLast = 0.f;
    float HpGhostHold = 0.f;     // seconds the pale part waits before it drains
    float PlayT = 0.f;           // seconds since the menu last closed (the controls card fades out)
    float CtlFade = 0.f;         // the controls card, eased in and out
    bool bHidPawnForMenu = false;
};
