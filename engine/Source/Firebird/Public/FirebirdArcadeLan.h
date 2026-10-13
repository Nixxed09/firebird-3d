#pragma once

#include "CoreMinimal.h"
#include "Subsystems/GameInstanceSubsystem.h"
#include "Containers/Ticker.h"
#include "FirebirdArcadeLan.generated.h"

class FSocket;
class FInternetAddr;
class FJsonObject;

// One room heard on the home network (arcade_lan.gd's list_rooms() shape).
USTRUCT(BlueprintType)
struct FFirebirdLanRoom
{
    GENERATED_BODY()
    UPROPERTY(BlueprintReadOnly) FString Room;
    UPROPERTY(BlueprintReadOnly) FString Game;
    UPROPERTY(BlueprintReadOnly) FString Build;
    UPROPERTY(BlueprintReadOnly) FString Host;
    UPROPERTY(BlueprintReadOnly) FString Level;
    UPROPERTY(BlueprintReadOnly) FString Address;   // the host computer, as first heard
    UPROPERTY(BlueprintReadOnly) FString BuildMessage;   // what to show when bSameBuild is false
    UPROPERTY(BlueprintReadOnly) int32 Players = 0;
    UPROPERTY(BlueprintReadOnly) int32 MaxPlayers = 1;
    UPROPERTY(BlueprintReadOnly) int32 Port = 0;    // the game's own join port
    UPROPERTY(BlueprintReadOnly) int32 Ctl = 0;     // the room's control port
    UPROPERTY(BlueprintReadOnly) bool bSameBuild = true;
    UPROPERTY(BlueprintReadOnly) bool bMine = false;
    UPROPERTY(BlueprintReadOnly) bool bLocal = false;
    int64 Order = 0;
    FString By = TEXT("high");
    int64 HeardMs = 0;
};

DECLARE_MULTICAST_DELEGATE_ThreeParams(FFirebirdLanJoined, const FString& /*Room*/, const FString& /*Address*/, int32 /*Port*/);
DECLARE_MULTICAST_DELEGATE_TwoParams(FFirebirdLanRoomMessage, const FString& /*Room*/, const FString& /*Message*/);
DECLARE_MULTICAST_DELEGATE_TwoParams(FFirebirdLanGuestJoined, const FString& /*Room*/, const FString& /*Who*/);

// The Family Arcade LAN contract arcade-lan/v1 (GamesOS/docs/arcade/LAN-CONTRACT.md), in C++: a faithful
// port of GamesOS/shared/arcade-lan/arcade_lan.gd for the host-join level. A host calls out its room by UDP
// broadcast every 2 s ("ARC1 " + JSON to the beacon port 27620, from a room control port 27621-27639); a
// joiner hears the rooms (itself, or through the Family Arcade's relay over loopback when the arcade owns the
// beacon port: ARCADE_RELAY_URL), checks the build, says hello to the control port and is handed the game's
// own address and port. Home network only: packets from any other address are dropped before parsing.
// Not ported: the scoreboard (submit_score/board), leases and the web relay's server side.
UCLASS()
class FIREBIRD_API UFirebirdArcadeLan : public UGameInstanceSubsystem
{
    GENERATED_BODY()

public:
    virtual void Initialize(FSubsystemCollectionBase& Collection) override;
    virtual void Deinitialize() override;

    // ---- the contract's words and numbers (arcade-lan.contract.json) ----
    static constexpr int32 BEACON_PORT = 27620;
    static constexpr int32 CONTROL_PORTS = 19;
    static constexpr int32 MAX_PLAYERS_LIMIT = 8;
    static const TCHAR* MSG_NEWER_THERE;
    static const TCHAR* MSG_NEWER_HERE;
    static const TCHAR* MSG_DIFFERENT;
    static const TCHAR* MSG_OTHER_GAME;
    static const TCHAR* MSG_FULL;
    static const TCHAR* MSG_GONE;
    static const TCHAR* MSG_NO_ANSWER;
    static const TCHAR* MSG_CLOSED;

    // Which game and which exact copy this is. Order: bigger for a newer copy (a build timestamp), 0 if unknown.
    void Configure(const FString& Game, const FString& Build, int64 Order, const FString& DisplayName = FString());

    // Host. Returns the room id, or "" with LastError set.
    FString AnnounceRoom(int32 GamePort, int32 Players, int32 MaxPlayers);
    void UpdatePlayers(const FString& Room, int32 Players);
    void CloseRoom(const FString& Room);

    // Rooms heard on the home network, newest first; pass a game id to see only that game's rooms (Game=""
    // lists every game, as list_rooms("") does). Calling it keeps the listener running for 10 s, so call it
    // while a room list is on screen.
    TArray<FFirebirdLanRoom> ListRooms(const FString& Game = FString()) const;

    // Join a room from ListRooms(). The answer is OnJoined or OnJoinRefused (show the message as it is).
    void JoinRoom(const FString& Room);
    void LeaveRoom(const FString& Room);
    // The room the Family Arcade asked this game to join (ARCADE_JOIN), or "".
    FString PendingJoin() const;

    FFirebirdLanJoined OnJoined;
    FFirebirdLanRoomMessage OnJoinRefused;
    FFirebirdLanRoomMessage OnRoomClosed;   // a joined host stopped (MSG_CLOSED), or a listed room went (MSG_GONE)
    FFirebirdLanGuestJoined OnGuestJoined;

    // Can copy MyBuild talk to TheirBuild? Empty message = yes; else the message for the player who must act.
    static FString CheckBuild(const FString& MyBuild, int64 MyOrder, const FString& TheirBuild, int64 TheirOrder);
    // 10.x, 172.16-31.x, 192.168.x, 169.254.x, 127.x, ::1, Tailscale 100.64-127.x (and ::ffff: forms of those).
    static bool IsHomeAddress(const FString& Raw);
    // A fingerprint of this copy of the game: the same string on two computers exactly when the copy is the
    // same. Packaged: BUILD-INFO.txt next to the game if present, else the IoStore tables of contents (.utoc,
    // which carry every chunk's hash) and the size of every .pak/.ucas/.utoc. Run from source: the game module.
    // OutOrder: the newest of those files' times as YYYYMMDDhhmmss (UTC), or 0.
    static FString ComputeBuildId(int64* OutOrder = nullptr);

    // Settings (tests move the beacon port off 27620 and add 127.0.0.1 as a target)
    int32 BeaconPort = BEACON_PORT;
    TArray<FString> ExtraTargets;
    FString RelayUrl;          // ARCADE_RELAY_URL; when set, rooms are read from the arcade instead of the beacon port
    bool bWatchAlways = false;
    FString LastError;
    FString GameId() const { return GameIdValue; }
    FString BuildId() const { return BuildValue; }
    bool IsListening() const;

    // One step: hear beacons, answer joiners, send beacons. The core ticker calls it every frame.
    void Pump();

private:
    struct FPacket { TSharedPtr<FJsonObject> Body; FString Address; int32 Port = 0; };
    struct FPeer { FString Who; FString Addr; int32 Port = 0; int64 Heard = 0; };
    struct FHosted
    {
        FString Room, Game, Build, Host, Level, By;
        int64 Order = 0;
        int32 Players = 1, Max = 2, Port = 0, Ctl = 0, Rev = 0;
        FSocket* Sock = nullptr;
        int64 NextBeacon = 0, NextBoard = 0;
        TMap<FString, FPeer> Peers;
    };
    struct FGuest
    {
        FString Room, Address, Level, Game, Host, By, Build, Who, GameId, Pid, Status, Message;
        int32 Ctl = 0, Port = 0, Players = 0, Max = 1, Rev = -1;
        int64 Order = 0, Started = 0, NextHello = 0, NextPing = 0, LastHeard = 0, Ended = 0;
        FSocket* Sock = nullptr;
    };

    bool Tick(float DeltaTime);
    static int64 NowMs();

    FSocket* OpenSocket(int32 Port, bool bBroadcast);
    FSocket* OpenControl(int32& OutPort);
    void CloseSocket(FSocket*& Sock);
    void Send(FSocket* Sock, const FString& Address, int32 Port, const FString& JsonBody);
    TArray<FPacket> ReadPackets(FSocket* Sock);
    TArray<FString> BroadcastTargets() const;

    void Beacon(const FHosted& H, bool bClosed);
    FString BoardBody(const FHosted& H, const TCHAR* Kind) const;
    void PumpHosted(int64 Now);
    void HostHandle(FHosted& H, const FPacket& Msg, int64 Now);
    void Refuse(FHosted& H, const FPacket& Msg, const TCHAR* Why, const FString& Message);

    void SendHello(FGuest& G);
    void RefuseNow(const FString& Room, const FString& Message);
    void PumpGuests(int64 Now);
    void GuestHandle(FGuest& G, const FPacket& Msg, int64 Now);
    void EndGuest(FGuest& G, const FString& Status, const FString& Message, int64 Now);

    void TouchWatch() const;
    void PumpWatch(int64 Now);
    void StartWatch();
    void StopWatch();
    void OnBeacon(const FPacket& Msg, int64 Now);
    bool RoomFrom(const TSharedPtr<FJsonObject>& B, const FString& Address, int64 Now, FFirebirdLanRoom& Out) const;
    void Remember(FFirebirdLanRoom Entry);
    void Forget(const FString& Room, const FString& Message);
    void Expire(int64 Now);
    void RelayTick(int64 Now);
    bool IsLocal(const FString& Address);

    FString GameIdValue;
    FString BuildValue;
    int64 BuildOrder = 0;
    FString PlayerName;

    TMap<FString, FHosted> Hosted;
    TMap<FString, FGuest> Guests;
    TMap<FString, int64> Refused;          // room -> when (a refusal that needed no network)
    TArray<TPair<FString, FString>> DeferredRefusals;   // fired on the next pump, as Godot's call_deferred does
    TMap<FString, FFirebirdLanRoom> Heard;
    FSocket* Listener = nullptr;
    mutable int64 WatchUntil = 0;
    int64 StartRetryAt = 0;
    bool bRelayMode = false;
    bool bRelayBusy = false;
    int64 RelayNext = 0;
    TArray<FString> LocalAddresses;
    int64 LocalChecked = -100000;
    FTSTicker::FDelegateHandle TickHandle;
    TSharedPtr<bool> Alive;
    bool bV6 = true;   // sockets are dual-stack IPv6 (see OpenSocket)   // HTTP callbacks check it so a late answer never touches a dead subsystem
};
