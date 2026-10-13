# The whole Family Arcade path, the way the kids will use it:
#   1. one game is started to host (as HOST A GAME FOR FRIENDS does): it opens a
#      listen server on UDP 27705 and announces an arcade-lan/v1 room;
#   2. a second game is started with ARCADE_JOIN=<room>, exactly as pressing the
#      room in the arcade's "Playing now" strip does: it hears the room, passes the
#      build check, is handed the address and port, connects;
#   3. both play the arena together until ARENA CLEAR (the co-op proofs).
# The LAN beacon is moved off 27620 so a running Family Arcade can't interfere.
#   .\tools\ue-arcade-coop-test.ps1 [-Packaged] [-GameDir <folder with Firebird.exe>]
param([switch]$Packaged, [string]$GameDir = '', [int]$BeaconPort = 27597)
. "$PSScriptRoot\ue-common.ps1"

if ($Packaged) {
  if (-not $GameDir) { $GameDir = Join-Path $FBRoot "builds\windows" }
  $exe = Join-Path $GameDir "Firebird.exe"
  if (!(Test-Path $exe)) { throw "No packaged Firebird.exe in $GameDir (run tools\ue-package.ps1)" }
  $base = @()
} else { $exe = $FBEditor; $base = @("`"$FBProject`"", "-game") }

$stamp = Get-Date -Format "yyyyMMdd-HHmmss"
$root = Join-Path $FBRoot "captures\ue\arcade-coop-$stamp"
New-Item -ItemType Directory -Force -Path $root | Out-Null
$lan = @("-FBLanBeaconPort=$BeaconPort", "-FBLanTarget=127.0.0.1")
function Start-FB([string]$name, [string[]]$extra, [hashtable]$env) {
  $out = Join-Path $root $name
  New-Item -ItemType Directory -Force -Path $out | Out-Null
  $a = $base + $extra + @("-windowed", "-ResX=960", "-ResY=540", "-NoSplash", "-nosound", "-abslog=`"$(Join-Path $out 'game.log')`"",
    "-ExecCmds=`"DisableAllScreenMessages, t.MaxFPS 30`"", "-FBAuto", "-FBScenario=coop", "-FBPlayers=2", "-FBOut=`"$out`"") + $lan
  $old = @{}
  foreach ($k in $env.Keys) { $old[$k] = [Environment]::GetEnvironmentVariable($k); [Environment]::SetEnvironmentVariable($k, $env[$k]) }
  try { return Start-Process -FilePath $exe -ArgumentList $a -PassThru -WindowStyle Hidden }
  finally { foreach ($k in $env.Keys) { [Environment]::SetEnvironmentVariable($k, $old[$k]) } }
}

$host_ = Start-FB "host" @("/Engine/Maps/Entry?listen") @{}
# the room id, from the host's own log, as soon as it announces
$room = ''
$hostLog = Join-Path $root "host\game.log"
for ($i = 0; $i -lt 90 -and -not $room; $i++) {
  Start-Sleep -Seconds 1
  if (Test-Path $hostLog) { $m = Select-String -Path $hostLog -Pattern 'FB_SESSION hosting room=([0-9a-f]+)' | Select-Object -First 1; if ($m) { $room = $m.Matches[0].Groups[1].Value } }
}
if (-not $room) { Stop-Process -Id $host_.Id -Force -ErrorAction SilentlyContinue; throw "The host never announced a room; see $hostLog" }
Write-Output "host announced room $room"
$join = Start-FB "join" @() @{ ARCADE_JOIN = $room }

foreach ($p in @($host_, $join)) { if (!$p.WaitForExit(720000)) { Stop-Process -Id $p.Id -Force; Write-Warning "a game ran past 12 minutes" } }

$all = $true
foreach ($n in @("host", "join")) {
  $s = Join-Path $root "$n\summary.json"
  if (!(Test-Path $s)) { Write-Output "== ${n}: no summary"; $all = $false; continue }
  $j = Get-Content $s -Raw | ConvertFrom-Json
  Write-Output "== ${n}: all_ok=$($j.all_ok)"
  $j.proofs.PSObject.Properties | ForEach-Object { Write-Output ("   {0,-28} {1}  {2}" -f $_.Name, $(if ($_.Value.ok) { 'PASS' } else { 'FAIL' }), $_.Value.detail) }
  if (-not $j.all_ok) { $all = $false }
}
$joinLog = Join-Path $root "join\game.log"
$joined = Select-String -Path $joinLog -Pattern "FB_SESSION joined room=$room" -Quiet
Write-Output ("   joined through the arcade room: " + $(if ($joined) { 'PASS' } else { 'FAIL' }))
if (-not $joined) { $all = $false }
Write-Output "FB_ARCADE_COOP $(if ($all) { 'PASS' } else { 'FAIL' }) $root"
if (-not $all) { exit 1 }
