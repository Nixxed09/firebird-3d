using UnrealBuildTool;

public class Firebird : ModuleRules
{
    public Firebird(ReadOnlyTargetRules Target) : base(Target)
    {
        PCHUsage = PCHUsageMode.UseExplicitOrSharedPCHs;
        PublicDependencyModuleNames.AddRange(new[]
        {
            "Core", "CoreUObject", "Engine", "InputCore", "AIModule", "Slate", "SlateCore",
            "Sockets", "Networking", "HTTP", "Json"
        });
    }
}
