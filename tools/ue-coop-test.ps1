# The co-op playtest: a host and N-1 joiners as real game processes on this
# computer, connected through the network stack (UDP, the same code path as
# two computers on the home network). Each plays its own Firebird through the
# arena until ARENA CLEAR and proves what its own screen saw. Real time (no
# -BENCHMARK: an unthrottled host would live through its wait before the
# others arrive), capped at 30 fps so recorded frames line up with the video.
#   .\tools\ue-coop-test.ps1 [-Players 2] [-Video]
param([ValidateRange(2, 4)][int]$Players = 2, [switch]$Video, [int]$Port = 27705, [int]$ResX = 1280, [int]$ResY = 720)
. "$PSScriptRoot\ue-common.ps1"

$stamp = Get-Date -Format "yyyyMMdd-HHmmss"
$root = Join-Path $FBRoot "captures\ue\coop-$stamp"
New-Item -ItemType Directory -Force -Path $root | Out-Null
function Start-FB([string]$name, [string]$url, [bool]$record = $false) {
  $out = Join-Path $root $name
  New-Item -ItemType Directory -Force -Path $out | Out-Null
  $a = @("`"$FBProject`"", $url, "-game", "-windowed", "-ResX=$ResX", "-ResY=$ResY", "-NoSplash", "-nosound",
         "-abslog=`"$(Join-Path $out 'game.log')`"", "-ExecCmds=`"DisableAllScreenMessages, t.MaxFPS 30`"",
         "-FBAuto", "-FBScenario=coop", "-FBPlayers=$Players", "-FBOut=`"$out`"")
  if ($record) { $a += "-FBFrames" }   # only one recorder: saving every frame slows a game down
  Start-Process -FilePath $FBEditor -ArgumentList $a -PassThru -WindowStyle Hidden
}

$procs = @()
$procs += Start-FB "host" "/Engine/Maps/Entry?listen -port=$Port"
Start-Sleep -Seconds 8   # let the host open its port
# the last joiner records (a slow client doesn't slow the host's game for everyone)
for ($i = 2; $i -le $Players; $i++) { $procs += Start-FB "p$i" "127.0.0.1:$Port" ($Video -and $i -eq $Players); Start-Sleep -Seconds 2 }

$deadline = (Get-Date).AddMinutes(12)
foreach ($p in $procs) {
  $left = [int]([Math]::Max(1, ($deadline - (Get-Date)).TotalMilliseconds))
  if (!$p.WaitForExit($left)) { Stop-Process -Id $p.Id -Force; Write-Warning "a game process ran past 12 minutes and was stopped" }
}

$all = $true
foreach ($dir in Get-ChildItem $root -Directory) {
  $s = Join-Path $dir.FullName "summary.json"
  if (Test-Path $s) {
    $j = Get-Content $s -Raw | ConvertFrom-Json
    Write-Output "== $($dir.Name): all_ok=$($j.all_ok)"
    $j.proofs.PSObject.Properties | ForEach-Object { Write-Output ("   {0,-28} {1}  {2}" -f $_.Name, $(if ($_.Value.ok) { 'PASS' } else { 'FAIL' }), $_.Value.detail) }
    if (-not $j.all_ok) { $all = $false }
  } else { Write-Output "== $($dir.Name): no summary (see game.log)"; $all = $false }
  $frames = Join-Path $dir.FullName "frames"
  if ($Video -and (Test-Path (Join-Path $frames "f_00000.png"))) {
    # the recorder ran at whatever rate it managed: play the frames back at that rate, so time is true
    $j = Get-Content $s -Raw | ConvertFrom-Json
    $fps = [Math]::Max(2, [Math]::Round($j.frames / [Math]::Max(1, $j.seconds), 2))
    $mp4 = Join-Path $root "coop-view-$($dir.Name).mp4"
    & ffmpeg -y -loglevel error -framerate $fps -i (Join-Path $frames "f_%05d.png") -vf "fps=30,scale=1280:-2" -c:v libx264 -pix_fmt yuv420p -crf 22 $mp4
    if (Test-Path $mp4) { Remove-Item -Recurse -Force $frames; Write-Output "FB_VIDEO $mp4 (recorded at $fps fps)" }
  }
}
Write-Output "FB_COOP $(if ($all) { 'PASS' } else { 'FAIL' }) $root"
