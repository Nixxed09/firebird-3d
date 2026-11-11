#pragma once

#include "CoreMinimal.h"
#include "Animation/AnimInstance.h"
#include "FBPlayerAnimInstance.generated.h"

// Native blend graph for the original Blender armor rig. Character movement
// remains authoritative; these in-place poses only drive its presentation.
UCLASS(Transient)
class FIREBIRD_API UFBPlayerAnimInstance : public UAnimInstance
{
    GENERATED_BODY()
protected:
    virtual FAnimInstanceProxy* CreateAnimInstanceProxy() override;
    virtual void DestroyAnimInstanceProxy(FAnimInstanceProxy* InProxy) override;
};
