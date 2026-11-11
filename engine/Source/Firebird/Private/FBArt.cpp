#include "FBArt.h"
#include "Firebird.h"
#include "Engine/StaticMesh.h"
#include "Components/StaticMeshComponent.h"
#include "Materials/MaterialInstanceDynamic.h"
#include "GameFramework/Actor.h"

namespace FBArt
{
    UStaticMesh* Mesh(const TCHAR* Name)
    {
        static TMap<FString, UStaticMesh*> Cache;
        if (UStaticMesh** Found = Cache.Find(Name)) return *Found;
        UStaticMesh* M = LoadObject<UStaticMesh>(nullptr, *FString::Printf(TEXT("/Game/Firebird/ArtKitV01/Meshes/%s.%s"), Name, Name));
        if (M) { M->AddToRoot(); Cache.Add(Name, M); }
        else UE_LOG(LogFirebird, Error, TEXT("FB_ART_MISSING mesh %s"), Name);
        return M;
    }

    UMaterialInterface* Material(const TCHAR* Name)
    {
        static TMap<FString, UMaterialInterface*> Cache;
        if (UMaterialInterface** Found = Cache.Find(Name)) return *Found;
        UMaterialInterface* M = LoadObject<UMaterialInterface>(nullptr, *FString::Printf(TEXT("/Game/Firebird/ArtKitV01/Materials/%s.%s"), Name, Name));
        if (M) { M->AddToRoot(); Cache.Add(Name, M); }
        else UE_LOG(LogFirebird, Error, TEXT("FB_ART_MISSING material %s"), Name);
        return M;
    }

    UMaterialInstanceDynamic* Surface(UObject* Outer, const TCHAR* Name, const FLinearColor& Tint)
    {
        UMaterialInterface* Base = Material(Name);
        if (!Base) return FB::MakeSurface(Outer, Tint * 0.35f);
        UMaterialInstanceDynamic* M = UMaterialInstanceDynamic::Create(Base, Outer);
        M->SetVectorParameterValue(TEXT("Color"), Tint);
        return M;
    }

    UStaticMeshComponent* Attach(AActor* Owner, USceneComponent* Parent, const TCHAR* Name, const FVector& At, const FRotator& Rotation, const FVector& Scale)
    {
        UStaticMeshComponent* C = NewObject<UStaticMeshComponent>(Owner);
        C->SetupAttachment(Parent);
        C->SetStaticMesh(Mesh(Name));
        C->SetRelativeLocation(At);
        C->SetRelativeRotation(Rotation);
        C->SetRelativeScale3D(Scale);
        C->SetCollisionEnabled(ECollisionEnabled::NoCollision);
        C->SetCanEverAffectNavigation(false);
        C->RegisterComponent();
        return C;
    }
}
