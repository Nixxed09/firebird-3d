#pragma once

#include "CoreMinimal.h"
#include "GameFramework/GameModeBase.h"
#include "FirebirdGameMode.generated.h"

// Builds the feel range in code and drops the Firebird at the start of it.
UCLASS()
class FIREBIRD_API AFirebirdGameMode : public AGameModeBase
{
    GENERATED_BODY()
public:
    AFirebirdGameMode();
    virtual void StartPlay() override;
    virtual void RestartPlayer(AController* NewPlayer) override;
};
