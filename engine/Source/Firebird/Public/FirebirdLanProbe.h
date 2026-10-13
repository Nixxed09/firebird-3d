#pragma once

#include "CoreMinimal.h"

class UFirebirdArcadeLan;

// -FBLanProbe=host|join: the real game process playing one side of an arcade-lan/v1 handshake, for
// tools/ue-test-arcade-lan.ps1. Every event is one flushed line in -FBLanLog=<file>: NAME {json}.
//   common: -FBLanGame= -FBLanBuild= -FBLanOrder= -FBLanName= -FBLanBeaconPort= -FBLanTarget=127.0.0.1 -FBLanSeconds=
//   host:   -FBLanPort=<game port> -FBLanMax=  -FBLanControl=<file> ("quit" closes politely, "kill" exits without closing)
//   join:   -FBLanRoom=<id> (optional: the first room heard otherwise)
// Gameplay never sees this; it only drives UFirebirdArcadeLan's public API.
class FIREBIRD_API FFirebirdLanProbe
{
public:
    static void StartIfAsked(UFirebirdArcadeLan* Lan);
    static void Tick(UFirebirdArcadeLan* Lan);
    static void Stop();
};
