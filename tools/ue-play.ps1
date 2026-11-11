# Play FIREBIRD yourself (windowed 1600x900). WASD move, mouse look,
# Space jump, Shift dash, Ctrl/C crouch or slide, left click Spark Caster,
# F or right click Ember Fist, R restart, Esc quit.
#   .\tools\ue-play.ps1                                    # the code-built test course
#   .\tools\ue-play.ps1 -Map /Game/Firebird/Maps/L_LookRoom   # a map built in the editor
param([int]$ResX = 1600, [int]$ResY = 900, [switch]$Build, [string]$Map = "")
. "$PSScriptRoot\ue-common.ps1"
if ($Build) { & (Join-Path $PSScriptRoot "ue-build.ps1") }
$argList = @("`"$FBProject`"")
if ($Map) { $argList += $Map }
$argList += @("-game", "-windowed", "-ResX=$ResX", "-ResY=$ResY", "-NoSplash")
Start-Process -FilePath $FBEditor -ArgumentList $argList
