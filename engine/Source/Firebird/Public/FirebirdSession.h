#pragma once

#include "CoreMinimal.h"
#include "Subsystems/GameInstanceSubsystem.h"
#include "Containers/Ticker.h"
#include "FirebirdSession.generated.h"

struct FFirebirdLanRoom;

UENUM()
enum class EFirebirdSessionMode : uint8 { Menu, Solo, Hosting, Joining, Joined };

// Which menu screen is up. Main, Multiplayer and Quit belong to the title menu; Pause and
// Leave to the pause menu (Esc or START in play); Settings and Controls are reached from both.
UENUM()
enum class EFirebirdScreen : uint8 { Main, Multiplayer, Settings, Controls, Quit, Pause, Leave, Count };

// How a game of Firebird starts and who is in it. Lives as long as the game
// runs (across the level reload that starts hosting or joining).
//   Menu    the title menu: PLAY / MULTIPLAYER / SETTINGS / CONTROLS / QUIT
//   Solo    one player, no network
//   Hosting a listen server on the co-op port, with a Family Arcade room
//           (arcade-lan/v1, host-join) so friends see it in "Playing now"
//   Joined  connected to a friend's game; the arcade did the build check
// Started from the arcade's "Playing now" strip (ARCADE_JOIN), it joins that
// room straight away. Automation and command-line URLs skip the menu.
UCLASS()
class FIREBIRD_API UFirebirdSession : public UGameInstanceSubsystem
{
    GENERATED_BODY()
public:
    virtual void Initialize(FSubsystemCollectionBase& Collection) override;
    virtual void Deinitialize() override;

    static UFirebirdSession* Get(const UObject* WorldContext);
    static constexpr int32 GamePort = 27705;   // DefaultEngine.ini [URL] Port
    static constexpr int32 MaxPlayers = 4;
    static const TCHAR* GameId;                // the manifest id: firebird-coop

    EFirebirdSessionMode Mode = EFirebirdSessionMode::Menu;
    bool InMenu() const { return Mode == EFirebirdSessionMode::Menu || Mode == EFirebirdSessionMode::Joining; }

    void PlayAlone();
    void Host();
    void Join(const FString& Room);
    void BackToMenu(const FString& Why);
    TArray<FFirebirdLanRoom> Rooms() const;   // other computers' Firebird rooms, for the menu

    // ---- the menus ----
    // The title menu is up while Mode is Menu; the pause menu while bPaused (in play). The HUD draws
    // the current Screen and lists its items; the character reads the keys; every item's effect is
    // one Activate() call here, so a click, a key, a controller and a test all do the same thing.
    EFirebirdScreen Screen = EFirebirdScreen::Main;
    bool bPaused = false;
    bool MenuOpen() const { return InMenu() || bPaused; }
    void Go(EFirebirdScreen To);      // show a screen (remembers which item each screen was on)
    void Back();                      // Esc / B: up one screen; from Main it asks before quitting
    void OpenPause();                 // in play. Alone the world stops; in a network game it keeps running
    void ClosePause();
    // An item was chosen (Dir 0) or nudged left/right (Dir -1/+1). Actions: play, multiplayer, settings,
    // controls, quit, quit_yes, host, join (with Room), back, resume, leave, leave_yes, and the
    // settings sens, invert, volume, display.
    void Activate(FName Action, const FString& Room = FString(), int32 Dir = 0);
    float WorldSpeed() const;         // the time dilation the world should run at now (near 0 when paused alone)

    // The player's settings, saved per Windows user in %LOCALAPPDATA%/FirebirdCoop/settings.ini, so an
    // arcade update (which replaces the game folder) keeps them. Test runs (-FBAuto) never write the file.
    // Look sensitivity is a multiplier on the look speed (1.0 = the tuned default); also [ and ] in play.
    static constexpr float SensitivityMin = 0.2f;
    static constexpr float SensitivityMax = 3.0f;
    static constexpr float SensitivityStep = 0.1f;
    float MouseSensitivity = 1.f;
    void AdjustSensitivity(int32 Steps);
    FString SensitivityText() const { return FString::Printf(TEXT("%.1f"), MouseSensitivity); }
    bool bInvertLook = false;         // up on the mouse or stick looks down
    int32 Volume = 10;                // 0 to 10, the whole game's loudness
    bool bFullscreen = false;         // borderless full screen instead of a window
    void SetVolume(int32 To);
    void SetFullscreen(bool bOn);

    // true while the player is using a game controller (the last input came from one): the menu and the
    // controls card then show the controller's buttons instead of the keyboard's
    bool bUsingPad = false;

    FString Status;         // a line for the menu: joining..., or a refusal exactly as the contract words it
    FString BuildId;
    int32 SelectedItem = 0;

private:
    bool Tick(float DeltaTime);
    void OnJoined(const FString& Room, const FString& Address, int32 Port);
    void OnRefused(const FString& Room, const FString& Message);
    void OnClosed(const FString& Room, const FString& Message);
    class UFirebirdArcadeLan* Lan() const;
    void SaveSettings() const;
    void ApplyVolume();
    void ApplyWorldSpeed();

    int32 Remembered[(int32)EFirebirdScreen::Count + 1] = {};   // each screen's chosen item
    bool bPersist = true;             // false in test runs
    bool bDisplayApplied = false;     // the saved full-screen choice is applied once the window exists
    FTSTicker::FDelegateHandle TickHandle;
    FString HostedRoom;
    FString JoiningRoom;
    int32 LastPlayers = -1;
    bool bArcadeJoinTried = false;
};
