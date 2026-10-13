#include "FBAudio.h"
#include "Firebird.h"
#include "AudioDevice.h"
#include "Components/AudioComponent.h"
#include "Engine/Engine.h"
#include "Engine/World.h"
#include "Kismet/GameplayStatics.h"
#include "Misc/App.h"
#include "Sound/SoundAttenuation.h"
#include "Sound/SoundBase.h"

namespace
{
    TMap<FName, USoundBase*>& Cache()
    {
        static TMap<FName, USoundBase*> C;
        return C;
    }

    // ~40 m to silence, full volume inside 4 m: an arena-sized falloff
    USoundAttenuation* ArenaAttenuation()
    {
        static USoundAttenuation* A = nullptr;
        if (!A)
        {
            A = NewObject<USoundAttenuation>(GetTransientPackage(), TEXT("FB_ArenaAttenuation"));
            A->AddToRoot();
            FSoundAttenuationSettings& S = A->Attenuation;
            S.bAttenuate = true;
            S.bSpatialize = true;
            S.AttenuationShape = EAttenuationShape::Sphere;
            S.AttenuationShapeExtents = FVector(400.f, 0.f, 0.f);
            S.FalloffDistance = 3600.f;
            S.DistanceAlgorithm = EAttenuationDistanceModel::NaturalSound;
            S.dBAttenuationAtMax = -50.f;
        }
        return A;
    }
}

namespace FB
{
    const TArray<FName>& AllSoundNames()
    {
        static const TArray<FName> Names = {
            TEXT("footstep_1"), TEXT("footstep_2"), TEXT("footstep_3"), TEXT("jump"), TEXT("land"), TEXT("dash"), TEXT("slide"),
            TEXT("spark_fire"), TEXT("spark_hit_wall"), TEXT("spark_hit_hollow"), TEXT("fist_swing"), TEXT("fist_hit"),
            TEXT("crack"), TEXT("release"), TEXT("hollow_break"), TEXT("hollow_windup"), TEXT("ember_throw"),
            TEXT("ember_hit_player"), TEXT("player_hurt"), TEXT("player_death"), TEXT("respawn"), TEXT("riley_radio"),
            TEXT("ui_tick"), TEXT("ambience_loop"), TEXT("music_loop")
        };
        return Names;
    }

    USoundBase* FindSound(FName Name)
    {
        if (USoundBase** Found = Cache().Find(Name)) return *Found;
        const FString Path = FString::Printf(TEXT("/Game/Firebird/Sounds/%s.%s"), *Name.ToString(), *Name.ToString());
        USoundBase* S = LoadObject<USoundBase>(nullptr, *Path);
        if (S) S->AddToRoot();   // held in a static cache: never let GC take it
        else UE_LOG(LogFirebird, Warning, TEXT("Sound %s missing (run tools/ue-import-sounds.ps1)"), *Path);
        Cache().Add(Name, S);    // a miss is remembered too, so it warns once
        return S;
    }

    bool CanPlaySound(UObject* WorldContext)
    {
        if (!FApp::CanEverRender() || !FApp::CanEverRenderAudio() || !GEngine) return false;
        UWorld* World = GEngine->GetWorldFromContextObject(WorldContext, EGetWorldErrorMode::ReturnNull);
        if (!World || World->GetNetMode() == NM_DedicatedServer) return false;
        return World->GetAudioDevice().IsValid();
    }

    void Sound(UObject* WorldContext, FName Name, const FVector& At, float Volume, float Pitch)
    {
        if (!CanPlaySound(WorldContext)) return;
        if (USoundBase* S = FindSound(Name))
            UGameplayStatics::PlaySoundAtLocation(WorldContext, S, At, FRotator::ZeroRotator, Volume, Pitch * FMath::FRandRange(0.95f, 1.05f), 0.f, ArenaAttenuation());
    }

    void Sound2D(UObject* WorldContext, FName Name, float Volume, float Pitch)
    {
        if (!CanPlaySound(WorldContext)) return;
        if (USoundBase* S = FindSound(Name))
            UGameplayStatics::PlaySound2D(WorldContext, S, Volume, Pitch * FMath::FRandRange(0.97f, 1.03f));
    }

    UAudioComponent* StartLoop(UObject* WorldContext, FName Name, float Volume, float FadeIn)
    {
        if (!CanPlaySound(WorldContext)) return nullptr;
        USoundBase* S = FindSound(Name);
        if (!S) return nullptr;
        UAudioComponent* C = UGameplayStatics::CreateSound2D(WorldContext, S, Volume, 1.f, 0.f, nullptr, true, false);
        if (C) C->FadeIn(FadeIn, Volume);
        return C;
    }

    void StartAmbience(UObject* WorldContext)
    {
        StartLoop(WorldContext, TEXT("ambience_loop"), 0.8f, 2.f);
        StartLoop(WorldContext, TEXT("music_loop"), 0.45f, 3.f);
    }
}
