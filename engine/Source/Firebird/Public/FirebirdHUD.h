#pragma once

#include "CoreMinimal.h"
#include "GameFramework/HUD.h"
#include "FirebirdHUD.generated.h"

// The slice HUD (placeholder skin, readable first): crosshair with hit and
// break markers, health, sparks, dash pips, the RELEASE prompt over a cracked
// Hollow, a hurt-direction wedge and the death card. Soot and brass with the
// cover's orange rim, per STYLE_GUIDE; the final skin comes with the art pass.
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
};
