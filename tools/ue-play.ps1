# Play the feel range yourself (windowed 1600x900). WASD move, mouse look,
# Space jump, Shift dash, Ctrl/C crouch or slide, left click Spark Caster,
# F or right click Ember Fist, R restart, Esc quit.
param([int]$ResX = 1600, [int]$ResY = 900, [switch]$Build)
. "$PSScriptRoot\ue-common.ps1"
if ($Build) { & (Join-Path $PSScriptRoot "ue-build.ps1") }
Start-Process -FilePath $FBEditor -ArgumentList @("`"$FBProject`"", "-game", "-windowed", "-ResX=$ResX", "-ResY=$ResY", "-NoSplash")
