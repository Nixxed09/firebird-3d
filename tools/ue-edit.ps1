# Opens FIREBIRD in the full Unreal editor, where maps are built by hand
# (docs/REBOOT_PLAN.md, Step 1). Close the editor before running ue-build.ps1.
#   .\tools\ue-edit.ps1 [-Map /Game/Firebird/Maps/L_LookRoom]
param([string]$Map = "")
. "$PSScriptRoot\ue-common.ps1"
$argList = @("`"$FBProject`"")
if ($Map) { $argList += $Map }
Start-Process -FilePath $FBEditor -ArgumentList $argList
