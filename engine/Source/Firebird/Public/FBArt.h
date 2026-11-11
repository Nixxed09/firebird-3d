#pragma once
#include "CoreMinimal.h"
class UStaticMesh;
class UMaterialInterface;
class UMaterialInstanceDynamic;
class UStaticMeshComponent;
class USceneComponent;
class AActor;

namespace FBArt
{
    UStaticMesh* Mesh(const TCHAR* Name);
    UMaterialInterface* Material(const TCHAR* Name);
    UMaterialInstanceDynamic* Surface(UObject* Outer, const TCHAR* Name, const FLinearColor& Tint = FLinearColor::White);
    UStaticMeshComponent* Attach(AActor* Owner, USceneComponent* Parent, const TCHAR* Name, const FVector& At, const FRotator& Rotation = FRotator::ZeroRotator, const FVector& Scale = FVector::OneVector);
}
