# Plays a scripted run of the feel range and collects the evidence:
# key shots, summary.json (each move's proof) and, with -Video, an MP4 from
# every frame at a fixed 30 fps.
#   .\tools\ue-capture.ps1 [-Scenario feel|nodash] [-Video] [-Visible]
param(
  [ValidateSet('feel', 'nodash')][string]$Scenario = 'feel',
  [switch]$Video,
  [switch]$Visible,
  [int]$ResX = 1280,
  [int]$ResY = 720
)
. "$PSScriptRoot\ue-common.ps1"

$stamp = Get-Date -Format "yyyyMMdd-HHmmss"
$out = Join-Path $FBRoot "captures\ue\$Scenario-$stamp"
New-Item -ItemType Directory -Force -Path $out | Out-Null
$log = Join-Path $out "game.log"
$argList = @(
  "`"$FBProject`"", "-game", "-windowed", "-ResX=$ResX", "-ResY=$ResY", "-NoSplash", "-nosound",
  "-BENCHMARK", "-FPS=30", "-abslog=`"$log`"",
  "-ExecCmds=`"DisableAllScreenMessages`"", "-FBAuto", "-FBScenario=$Scenario", "-FBOut=`"$out`""
)
if ($Video) { $argList += "-FBFrames" }
$style = if ($Visible) { "Normal" } else { "Hidden" }
$p = Start-Process -FilePath $FBEditor -ArgumentList $argList -PassThru -WindowStyle $style
if (!$p.WaitForExit(600000)) { Stop-Process -Id $p.Id -Force; throw "The run did not finish in 10 minutes; see $log" }

$summary = Join-Path $out "summary.json"
if ($Video) {
  $frames = Join-Path $out "frames"
  $mp4 = Join-Path $out "$Scenario.mp4"
  & ffmpeg -y -loglevel error -framerate 30 -i (Join-Path $frames "f_%05d.png") -c:v libx264 -pix_fmt yuv420p -crf 20 $mp4
  if (Test-Path $mp4) { Remove-Item -Recurse -Force $frames; Write-Output "FB_VIDEO $mp4" }
}
if (!(Test-Path $summary)) { throw "No summary.json; the run failed early. See $log" }
Get-Content $summary
Write-Output "FB_CAPTURE $out"
