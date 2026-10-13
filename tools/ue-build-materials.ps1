# Creates /Game/Firebird/Materials (M_FB_Surface, M_FB_Glow) with the editor's Python.
. "$PSScriptRoot\ue-common.ps1"
$script = Join-Path $PSScriptRoot "ue-build-materials.py"
$log = Join-Path $FBRoot "captures\ue\materials.log"
New-Item -ItemType Directory -Force -Path (Split-Path $log) | Out-Null
& $FBEditorCmd $FBProject "-ExecutePythonScript=$script" -unattended -nop4 -nosplash -NullRHI "-abslog=$log" | Out-Null
if (!(Select-String -Path $log -Pattern "FB_MATERIALS built" -Quiet)) { throw "Material build failed; see $log" }
Write-Output "FB_MATERIALS ok"
