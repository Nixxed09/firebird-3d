# Play FIREBIRD yourself (windowed 1600x900). WASD move, mouse look,
# Space jump, Shift dash, Ctrl/C crouch or slide, left click Spark Caster,
# F or right click Ember Fist, R restart, Esc quit.
#   .\tools\ue-play.ps1                                    # the code-built test course
#   .\tools\ue-play.ps1 -Map /Game/Firebird/Maps/L_LookRoom   # a map built in the editor
#   .\tools\ue-play.ps1 -Player Nix                        # who is playing (default: ARCADE_PLAYER, else guest)
# When the game closes, the session is written as a play record on this computer
# (deaths, falls, hits, moves used, where it went slowly): tools\play-record.py.
# -NoRecord starts the game and returns at once, as this script used to.
param([int]$ResX = 1600, [int]$ResY = 900, [switch]$Build, [string]$Map = "",
  [string]$Player = "", [switch]$NoRecord, [string[]]$ExtraArgs = @())
. "$PSScriptRoot\ue-common.ps1"
if ($Build) { & (Join-Path $PSScriptRoot "ue-build.ps1") }
if (!$Player) { $Player = if ($env:ARCADE_PLAYER) { $env:ARCADE_PLAYER } else { "guest" } }
$argList = @("`"$FBProject`"")
if ($Map) { $argList += $Map }
$argList += @("-game", "-windowed", "-ResX=$ResX", "-ResY=$ResY", "-NoSplash")
$argList += $ExtraArgs
if ($NoRecord) { Start-Process -FilePath $FBEditor -ArgumentList $argList; return }

$logDir = Join-Path $FBRoot "engine\Saved\Logs\play"
New-Item -ItemType Directory -Force -Path $logDir | Out-Null
$log = Join-Path $logDir ("play-" + (Get-Date -Format "yyyyMMdd-HHmmss") + ".log")
$argList += "-abslog=`"$log`""
$p = Start-Process -FilePath $FBEditor -ArgumentList $argList -PassThru
$p.WaitForExit()
if (!(Test-Path -LiteralPath $log)) { Write-Output "FB_PLAY none (the game wrote no log)"; return }
$recArgs = @("-I", (Join-Path $PSScriptRoot "play-record.py"), "record", $log, "--player", $Player)
if ($Map) { $recArgs += @("--map", $Map) }
& python @recArgs
