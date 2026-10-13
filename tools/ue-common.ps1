# Shared paths for the Firebird UE tools. Dot-source it: . "$PSScriptRoot\ue-common.ps1"
$ErrorActionPreference = "Stop"
$FBRoot = Split-Path -Parent $PSScriptRoot
$FBProject = Join-Path $FBRoot "engine\Firebird.uproject"
$FBEditor = @(
  "D:\Games\UE_5.8\Engine\Binaries\Win64\UnrealEditor.exe",
  "C:\Program Files\Epic Games\UE_5.8\Engine\Binaries\Win64\UnrealEditor.exe"
) | Where-Object { Test-Path $_ } | Select-Object -First 1
if (!$FBEditor) { throw "Unreal Editor 5.8 not found (expected D:\Games\UE_5.8)." }
$FBEngineRoot = Split-Path -Parent (Split-Path -Parent (Split-Path -Parent (Split-Path -Parent $FBEditor)))
$FBEditorCmd = Join-Path (Split-Path -Parent $FBEditor) "UnrealEditor-Cmd.exe"

# Is this project open in an editor or game right now? (never touch other projects' processes)
function Get-FBProcesses {
  @(Get-CimInstance Win32_Process | Where-Object {
    $_.Name -match '^UnrealEditor(-Cmd)?\.exe$' -and $_.CommandLine -and
    $_.CommandLine.IndexOf($FBProject, [StringComparison]::OrdinalIgnoreCase) -ge 0
  })
}
