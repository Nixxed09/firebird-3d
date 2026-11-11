# Plays a scripted run of the feel range and collects the evidence:
# key shots, summary.json (each move's proof) and, with -Video, an MP4 from
# every frame at a fixed 30 fps.
#   .\tools\ue-capture.ps1 [-Scenario feel|nodash|art|motion] [-Packaged] [-Video] [-Visible]
param(
  [ValidateSet('feel', 'nodash', 'art', 'motion')][string]$Scenario = 'feel',
  [switch]$Video,
  [switch]$Visible,
  [switch]$Packaged,
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
$captureExe = $FBEditor
if ($Packaged) {
  $captureExe = Join-Path $FBRoot 'builds\windows\Firebird.exe'
  if (!(Test-Path -LiteralPath $captureExe)) { throw "No packaged game at $captureExe" }
  $argList = $argList | Where-Object { $_ -ne "`"$FBProject`"" -and $_ -ne '-game' }
}
if ($Video) { $argList += "-FBFrames" }
$style = if ($Visible) { "Normal" } else { "Hidden" }
$p = Start-Process -FilePath $captureExe -ArgumentList $argList -PassThru -WindowStyle $style
if (!$p.WaitForExit(600000)) { Stop-Process -Id $p.Id -Force; throw "The run did not finish in 10 minutes; see $log" }

$summary = Join-Path $out "summary.json"
if ($Video) {
  $frames = Join-Path $out "frames"
  $mp4 = Join-Path $out "$Scenario.mp4"
  & ffmpeg -y -loglevel error -framerate 30 -i (Join-Path $frames "f_%05d.png") -c:v libx264 -pix_fmt yuv420p -crf 20 $mp4
  if (Test-Path $mp4) {
    $resolvedFrames = (Resolve-Path -LiteralPath $frames).Path
    $expectedCapture = [IO.Path]::GetFullPath($out)
    if ((Split-Path $resolvedFrames -Parent) -ne $expectedCapture -or (Split-Path $resolvedFrames -Leaf) -ne 'frames') { throw "Unexpected frames path: $resolvedFrames" }
    Remove-Item -LiteralPath $resolvedFrames -Recurse -Force
    Write-Output "FB_VIDEO $mp4"
  }
}
if (!(Test-Path $summary)) { throw "No summary.json; the run failed early. See $log" }
Get-Content $summary
Write-Output "FB_CAPTURE $out"
if (-not (Get-Content -LiteralPath $summary -Raw | ConvertFrom-Json).all_ok) { throw "Capture checks failed; see $summary" }
