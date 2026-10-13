#pragma once

#include "CoreMinimal.h"
#include "Subsystems/WorldSubsystem.h"
#include "FBSoundCheck.generated.h"

// -FBSoundCheck: loads every sound the slice ships, plays each once through
// FB::Sound/Sound2D (a no-op under -nullrhi/-nosound, which is part of the
// check), logs FB_SOUND_OK <n> or FB_SOUND_MISSING <name>, and quits.
UCLASS()
class FIREBIRD_API UFBSoundCheck : public UWorldSubsystem
{
    GENERATED_BODY()
public:
    virtual void OnWorldBeginPlay(UWorld& InWorld) override;
    virtual bool DoesSupportWorldType(const EWorldType::Type WorldType) const override
    {
        return WorldType == EWorldType::Game || WorldType == EWorldType::PIE;
    }
};
