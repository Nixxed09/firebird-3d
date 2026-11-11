param([string]$MeshOnly = "")
$ErrorActionPreference = 'Stop'
. "$PSScriptRoot\ue-common.ps1"
$artScript = Join-Path $PSScriptRoot 'ue-import-art-kit.py'
$artLog = Join-Path $FBRoot 'art\unreal-import.log'
& $FBEditorCmd $FBProject "-ExecutePythonScript=$artScript" "-FBArtMesh=$MeshOnly" -unattended -nop4 -nosplash -NullRHI "-abslog=$artLog" | Out-Null
if (!(Select-String -LiteralPath $artLog -Pattern 'FB_ART_IMPORT_OK' -Quiet)) {
    throw "Art import failed; see $artLog"
}
if (-not $MeshOnly) {
$worldMaterialScript = Join-Path $PSScriptRoot 'ue-build-world-materials.py'
$worldMaterialLog = Join-Path $FBRoot 'art\world-materials.log'
& $FBEditorCmd $FBProject "-ExecutePythonScript=$worldMaterialScript" -unattended -nop4 -nosplash -NullRHI "-abslog=$worldMaterialLog" | Out-Null
if (!(Select-String -LiteralPath $worldMaterialLog -Pattern 'FB_WORLD_MATERIALS_OK' -Quiet)) {
    throw "World material build failed; see $worldMaterialLog"
}
}
$artVerifyScript = Join-Path $PSScriptRoot 'ue-verify-art-kit.py'
$artVerifyLog = Join-Path $FBRoot 'art\unreal-verify.log'
& $FBEditorCmd $FBProject "-ExecutePythonScript=$artVerifyScript" -unattended -nop4 -nosplash -NullRHI "-abslog=$artVerifyLog" | Out-Null
if (!(Select-String -LiteralPath $artVerifyLog -Pattern 'FB_ART_RELOAD_OK' -Quiet)) {
    throw "Art reload check failed; see $artVerifyLog"
}
Write-Output 'FB_ART_IMPORT_OK - /Game/Firebird/ArtKitV01'
