#pragma once

#include "CoreMinimal.h"
#include "Subsystems/GameInstanceSubsystem.h"
#include "Containers/Ticker.h"
#include "FirebirdSession.generated.h"

struct FFirebirdLanRoom;

UENUM()
enum class EFirebirdSessionMode : uint8 { Menu, Solo, Hosting, Joining, Joined };

// How a game of Firebird starts and who is in it. Lives as long as the game
// runs (across the level reload that starts hosting or joining).
//   Menu    the start screen: PLAY ALONE / HOST FOR FRIENDS / JOIN <room>
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

    // mouse sensitivity, a multiplier on the look speed (1.0 = the tuned default). Changed on the start
    // menu (left/right arrows or the - and + buttons) or in play with [ and ]; saved per Windows user in
    // %LOCALAPPDATA%/FirebirdCoop/settings.ini, so an arcade update (which replaces the game folder) keeps it.
    static constexpr float SensitivityMin = 0.2f;
    static constexpr float SensitivityMax = 3.0f;
    static constexpr float SensitivityStep = 0.1f;
    float MouseSensitivity = 1.f;
    void AdjustSensitivity(int32 Steps);
    FString SensitivityText() const { return FString::Printf(TEXT("%.1f"), MouseSensitivity); }

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

    FTSTicker::FDelegateHandle TickHandle;
    FString HostedRoom;
    FString JoiningRoom;
    int32 LastPlayers = -1;
    bool bArcadeJoinTried = false;
};
