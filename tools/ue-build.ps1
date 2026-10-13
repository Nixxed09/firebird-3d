# Compiles the Firebird C++ module (editor target, which -game runs use too).
#   .\tools\ue-build.ps1 [-Configuration Development]
param([string]$Configuration = "Development", [int]$MaxParallelActions = 8)
. "$PSScriptRoot\ue-common.ps1"

$open = Get-FBProcesses
if ($open.Count -gt 0) { throw "Close the Firebird editor/game before building (PID $($open.ProcessId -join ', '))." }
$buildBat = Join-Path $FBEngineRoot "Engine\Build\BatchFiles\Build.bat"
& $buildBat FirebirdEditor Win64 $Configuration "-Project=$FBProject" -WaitMutex -NoHotReloadFromIDE "-MaxParallelActions=$MaxParallelActions"
if ($LASTEXITCODE -ne 0) { throw "Build failed (exit $LASTEXITCODE)" }
Write-Output "FB_BUILD ok"
