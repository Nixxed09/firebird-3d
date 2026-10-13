#include "Firebird.h"
#include "Modules/ModuleManager.h"
#include "Materials/MaterialInstanceDynamic.h"
#include "Components/StaticMeshComponent.h"
#include "Engine/StaticMesh.h"
#include "GameFramework/Actor.h"

IMPLEMENT_PRIMARY_GAME_MODULE(FDefaultGameModuleImpl, Firebird, "Firebird");
DEFINE_LOG_CATEGORY(LogFirebird);

namespace
{
    UMaterialInterface* LoadMat(const TCHAR* Path, const TCHAR* Fallback)
    {
        UMaterialInterface* M = LoadObject<UMaterialInterface>(nullptr, Path);
        if (!M)
        {
            UE_LOG(LogFirebird, Warning, TEXT("Material %s missing (run tools/ue-build-materials.ps1); using %s"), Path, Fallback);
            M = LoadObject<UMaterialInterface>(nullptr, Fallback);
        }
        if (M) M->AddToRoot();   // held in statics below: never let GC take it
        return M;
    }
    UStaticMesh* LoadMesh(const TCHAR* Path)
    {
        UStaticMesh* M = LoadObject<UStaticMesh>(nullptr, Path);
        if (M) M->AddToRoot();
        return M;
    }
}

namespace FB
{
    UMaterialInstanceDynamic* MakeSurface(UObject* Outer, const FLinearColor& Color, float Emissive, float Roughness, float Metallic)
    {
        static UMaterialInterface* Base = nullptr;
        if (!Base) Base = LoadMat(TEXT("/Game/Firebird/Materials/M_FB_Surface.M_FB_Surface"), TEXT("/Engine/BasicShapes/BasicShapeMaterial.BasicShapeMaterial"));
        UMaterialInstanceDynamic* M = UMaterialInstanceDynamic::Create(Base, Outer);
        M->SetVectorParameterValue(TEXT("Color"), Color);
        M->SetScalarParameterValue(TEXT("Emissive"), Emissive);
        M->SetScalarParameterValue(TEXT("Roughness"), Roughness);
        M->SetScalarParameterValue(TEXT("Metallic"), Metallic);
        return M;
    }

    UMaterialInstanceDynamic* MakeGlow(UObject* Outer, const FLinearColor& Color, float Emissive)
    {
        static UMaterialInterface* Base = nullptr;
        if (!Base) Base = LoadMat(TEXT("/Game/Firebird/Materials/M_FB_Glow.M_FB_Glow"), TEXT("/Engine/BasicShapes/BasicShapeMaterial.BasicShapeMaterial"));
        UMaterialInstanceDynamic* M = UMaterialInstanceDynamic::Create(Base, Outer);
        M->SetVectorParameterValue(TEXT("Color"), Color);
        M->SetScalarParameterValue(TEXT("Emissive"), Emissive);
        return M;
    }

    UStaticMesh* Cube() { static UStaticMesh* M = LoadMesh(TEXT("/Engine/BasicShapes/Cube.Cube")); return M; }
    UStaticMesh* Sphere() { static UStaticMesh* M = LoadMesh(TEXT("/Engine/BasicShapes/Sphere.Sphere")); return M; }
    UStaticMesh* Cylinder() { static UStaticMesh* M = LoadMesh(TEXT("/Engine/BasicShapes/Cylinder.Cylinder")); return M; }

    UStaticMeshComponent* AddPart(AActor* Owner, USceneComponent* Parent, const FName& Name, const FVector& Size, const FVector& Offset, UMaterialInterface* Mat, UStaticMesh* Mesh)
    {
        UStaticMeshComponent* C = NewObject<UStaticMeshComponent>(Owner, Name);
        C->SetStaticMesh(Mesh ? Mesh : Cube());
        C->SetCollisionEnabled(ECollisionEnabled::NoCollision);
        C->SetCastShadow(true);
        C->SetupAttachment(Parent);
        C->SetRelativeLocation(Offset);
        C->SetRelativeScale3D(Size / 100.f);   // engine shapes are 100 cm
        if (Mat) C->SetMaterial(0, Mat);
        C->RegisterComponent();
        return C;
    }
}
