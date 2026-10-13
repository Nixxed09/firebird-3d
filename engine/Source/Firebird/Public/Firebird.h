#pragma once

#include "CoreMinimal.h"

DECLARE_LOG_CATEGORY_EXTERN(LogFirebird, Log, All);

// Shared look helpers: every surface in the slice uses one of two materials
// (tools/ue-build-materials.py), tinted per use. The ember palette lives here
// so gameplay code and the range speak the same colours (STYLE_GUIDE.md).
namespace FB
{
    // the cover: amber head, orange wings, ember-brown ground
    const FLinearColor Amber(1.0f, 0.62f, 0.16f);
    const FLinearColor Orange(1.0f, 0.32f, 0.05f);
    const FLinearColor Crimson(0.9f, 0.04f, 0.06f);   // danger: red mercury
    const FLinearColor Aether(0.15f, 0.75f, 1.0f);    // restored power
    const FLinearColor Brass(0.62f, 0.42f, 0.16f);
    const FLinearColor Ash(0.09f, 0.08f, 0.075f);
    const FLinearColor Limestone(0.55f, 0.5f, 0.42f);
    const FLinearColor Basalt(0.06f, 0.05f, 0.05f);

    class UMaterialInstanceDynamic* MakeSurface(UObject* Outer, const FLinearColor& Color, float Emissive = 0.f, float Roughness = 0.75f, float Metallic = 0.f);
    class UMaterialInstanceDynamic* MakeGlow(UObject* Outer, const FLinearColor& Color, float Emissive = 4.f);
    class UStaticMesh* Cube();
    class UStaticMesh* Sphere();
    class UStaticMesh* Cylinder();
    // A visual-only cube part (no collision), sized in cm, placed relative to its parent
    class UStaticMeshComponent* AddPart(class AActor* Owner, class USceneComponent* Parent, const FName& Name, const FVector& Size, const FVector& Offset, class UMaterialInterface* Mat, class UStaticMesh* Mesh = nullptr);
}
