#include "FBSoundCheck.h"
#include "Firebird.h"
#include "FBAudio.h"
#include "Engine/World.h"
#include "HAL/PlatformMisc.h"
#include "Misc/CommandLine.h"
#include "Sound/SoundWave.h"

void UFBSoundCheck::OnWorldBeginPlay(UWorld& InWorld)
{
    Super::OnWorldBeginPlay(InWorld);
    if (!FParse::Param(FCommandLine::Get(), TEXT("FBSoundCheck"))) return;
    int32 Ok = 0, Loops = 0;
    for (const FName& Name : FB::AllSoundNames())
    {
        USoundBase* S = FB::FindSound(Name);
        if (!S) { UE_LOG(LogFirebird, Display, TEXT("FB_SOUND_MISSING %s"), *Name.ToString()); continue; }
        const USoundWave* W = Cast<USoundWave>(S);
        const bool bLoop = W && W->bLooping;
        if (bLoop != Name.ToString().EndsWith(TEXT("_loop"))) { UE_LOG(LogFirebird, Display, TEXT("FB_SOUND_MISSING %s (looping flag wrong)"), *Name.ToString()); continue; }
        Loops += bLoop ? 1 : 0;
        UE_LOG(LogFirebird, Display, TEXT("FB_SOUND %s %.2fs%s"), *Name.ToString(), S->GetDuration() > 1000.f ? -1.f : S->GetDuration(), bLoop ? TEXT(" loop") : TEXT(""));
        // the play calls must be safe whether or not anything can be heard
        if (bLoop) FB::StartLoop(&InWorld, Name, 0.f, 0.f);
        else { FB::Sound(&InWorld, Name, FVector::ZeroVector, 0.f); FB::Sound2D(&InWorld, Name, 0.f); }
        ++Ok;
    }
    const int32 Total = FB::AllSoundNames().Num();
    UE_LOG(LogFirebird, Display, TEXT("FB_SOUND_CAN_PLAY %d"), FB::CanPlaySound(&InWorld) ? 1 : 0);
    if (Ok == Total) { UE_LOG(LogFirebird, Display, TEXT("FB_SOUND_OK %d (loops %d)"), Ok, Loops); }
    else { UE_LOG(LogFirebird, Display, TEXT("FB_SOUND_FAIL %d of %d"), Ok, Total); }
    FPlatformMisc::RequestExit(false, TEXT("FBSoundCheck"));
}
