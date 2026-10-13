#pragma once

#include "CoreMinimal.h"

class UAudioComponent;
class USoundBase;

// Sound for the slice. Every sound is a synthesized SoundWave in
// /Game/Firebird/Sounds (tools/ue-make-sounds.py, imported by
// tools/ue-import-sounds.ps1), played by name. All calls are no-ops where there
// is nothing to hear: a dedicated server, -nullrhi, -nosound, no audio device.
// Names and when to play them: engine/README.md, "Sound".
namespace FB
{
    // A one-shot in the world, heard from about 40 m away, with a little random pitch
    void Sound(UObject* WorldContext, FName Name, const FVector& At, float Volume = 1.f, float Pitch = 1.f);
    // A one-shot with no position (UI, the radio, your own body)
    void Sound2D(UObject* WorldContext, FName Name, float Volume = 1.f, float Pitch = 1.f);
    // A looping 2D bed (ambience_loop, music_loop). Returns the component, to fade or stop it; null if silent.
    UAudioComponent* StartLoop(UObject* WorldContext, FName Name, float Volume = 1.f, float FadeIn = 1.5f);
    // The ambience and the music bed together, at mix levels that sit under the action
    void StartAmbience(UObject* WorldContext);

    // The asset for a name (loaded once and kept), or null
    USoundBase* FindSound(FName Name);
    // Every sound the slice ships, for checks
    const TArray<FName>& AllSoundNames();
    // False where sound can't be heard (server, -nullrhi, -nosound, no device)
    bool CanPlaySound(UObject* WorldContext);
}
