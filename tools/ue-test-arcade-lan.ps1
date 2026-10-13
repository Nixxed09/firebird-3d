# Proves the UE game speaks the Family Arcade LAN contract (arcade-lan/v1) with real processes, no mocks:
#   A. UE host  + Godot joiner (the arcade's own arcade_lan.gd, copied unedited at test time)
#      then a raw stale hello to the UE host's control port (the HOST's own build check), then a polite close
#   B. Godot host (GamesOS arcade/tools/lan_probe.gd, unedited) + UE joiner, then the Godot host closes the room
#   C. UE host  + UE joiner, then the host is killed outright: the joiner says the host stopped
#   D. UE joiner with an older copy than the UE host: refused with the contract's exact words
# Every run uses a free block of UDP ports far from 27620, so a running Family Arcade is never touched.
#   .\tools\ue-test-arcade-lan.ps1 [-GamesOS D:\TE-Code\ProductOS\GamesOS] [-KeepEvidence]
param([string]$GamesOS = 'D:\TE-Code\ProductOS\GamesOS', [switch]$KeepEvidence)
. "$PSScriptRoot\ue-common.ps1"
$ErrorActionPreference = 'Stop'

$shared = Join-Path $GamesOS 'shared\arcade-lan'
$arcadeDir = Join-Path $GamesOS 'arcade'
. (Join-Path $arcadeDir 'tools\godot-path.ps1')
$godot = Resolve-ArcadeGodot -MinMajor 4 -MinMinor 7
if (-not $godot) { throw 'Godot 4.7+ not found (the GamesOS arcade test uses the same one). Set GODOT_PATH.' }
$contract = Get-Content -LiteralPath (Join-Path $shared 'arcade-lan.contract.json') -Raw | ConvertFrom-Json
$msg = $contract.messages

$stamp = Get-Date -Format 'yyyyMMdd-HHmmss'
$work = Join-Path $FBRoot "captures\ue-lan\$stamp"
New-Item -ItemType Directory -Force -Path $work | Out-Null
# the Godot joiner: a throwaway project holding byte-for-byte copies of the shared files
$gproj = Join-Path $work 'godot-probe'
New-Item -ItemType Directory -Force -Path $gproj | Out-Null
Copy-Item (Join-Path $PSScriptRoot 'lan-interop\project.godot'), (Join-Path $PSScriptRoot 'lan-interop\ue_interop_probe.gd') $gproj
Copy-Item (Join-Path $shared 'arcade_lan.gd'), (Join-Path $shared 'family_records.gd') $gproj
foreach ($f in @('arcade_lan.gd', 'family_records.gd')) {
  if ((Get-FileHash (Join-Path $shared $f)).Hash -ne (Get-FileHash (Join-Path $gproj $f)).Hash) { throw "$f copy differs from the shared file" }
}

# a game started by the arcade would carry these; this test must not
Remove-Item Env:ARCADE_RELAY_URL -ErrorAction SilentlyContinue
Remove-Item Env:ARCADE_JOIN -ErrorAction SilentlyContinue
Remove-Item Env:ARCADE_STATS_HOME -ErrorAction SilentlyContinue

$processes = New-Object System.Collections.Generic.List[object]
$results = New-Object System.Collections.Generic.List[object]
$failed = 0
function Check([bool]$Ok, [string]$Label) {
  $script:results.Add([pscustomobject]@{ ok = $Ok; check = $Label })
  if ($Ok) { Write-Output "  PASS $Label" } else { Write-Output "  FAIL $Label"; $script:failed++ }
}
function Start-Hidden([string]$File, [string[]]$ArgList, [string]$Tag) {
  $p = Start-Process -FilePath $File -ArgumentList $ArgList -WindowStyle Hidden -PassThru `
    -RedirectStandardOutput (Join-Path $work "$Tag.out") -RedirectStandardError (Join-Path $work "$Tag.err")
  $null = $p.Handle
  $script:processes.Add($p)
  return $p
}
function Stop-All { foreach ($p in $script:processes) { if (-not $p.HasExited) { & taskkill /PID $p.Id /T /F 2>$null | Out-Null } } }
function Events([string]$Path, [string]$Name) {
  if (-not (Test-Path -LiteralPath $Path)) { return @() }
  $out = @()
  # the writer still has the file open: read it with shared access
  $text = ''
  try {
    $share = [IO.FileShare]([int][IO.FileShare]::ReadWrite -bor [int][IO.FileShare]::Delete)
    $fs = [IO.FileStream]::new($Path, [IO.FileMode]::Open, [IO.FileAccess]::Read, $share)
    $sr = [IO.StreamReader]::new($fs)
    $text = $sr.ReadToEnd()
    $sr.Close()
  } catch { return @() }
  foreach ($line in ($text -split "`r?`n")) {
    if ($line.StartsWith("$Name ")) { try { $out += ($line.Substring($Name.Length + 1) | ConvertFrom-Json) } catch { } }
  }
  return $out
}
function Wait-Event([string]$Path, [string]$Name, [int]$Seconds) {
  $deadline = (Get-Date).AddSeconds($Seconds)
  while ((Get-Date) -lt $deadline) {
    $e = @(Events $Path $Name)
    if ($e.Count -gt 0) { return $e[0] }
    Start-Sleep -Milliseconds 200
  }
  return $null
}
function Find-FreeBlock([int]$Size) {
  $rng = New-Object Random
  for ($try = 0; $try -lt 80; $try++) {
    $base = $rng.Next(30000, 44000)
    $held = New-Object System.Collections.Generic.List[object]
    $ok = $true
    for ($i = 0; $i -le $Size; $i++) { try { $held.Add((New-Object Net.Sockets.UdpClient($base + $i))) } catch { $ok = $false; break } }
    foreach ($u in $held) { $u.Close() }
    if ($ok) { return $base }
  }
  throw 'No free block of UDP ports.'
}
function UE-Args([string]$Tag, [int]$Beacon, [string[]]$Rest) {
  return @("`"$FBProject`"", '-game', '-nullrhi', '-nosound', '-unattended', '-NoSplash', '-nopause',
    "-abslog=`"$(Join-Path $work "$Tag.ue.log")`"", '-ExecCmds="t.MaxFPS 60"',
    "-FBLanBeaconPort=$Beacon", '-FBLanTarget=127.0.0.1', "-FBLanLog=`"$(Join-Path $work "$Tag.log")`"", '-FBLanSeconds=150') + $Rest
}
function Godot-Args([string]$Tag, [int]$Beacon, [string[]]$Rest) {
  return @('--headless', '--path', "`"$gproj`"", '--script', 'res://ue_interop_probe.gd', '--', '--role', 'joiner',
    '--beacon-port', $Beacon, '--log', "`"$(Join-Path $work "$Tag.log")`"") + $Rest
}
# one raw hello from a socket that is not a joiner's: the reply is what the host's own check says
function Raw-Hello([string]$Address, [int]$Port, [hashtable]$Body) {
  $udp = New-Object Net.Sockets.UdpClient(0)
  $udp.Client.ReceiveTimeout = 2500
  $Body['v'] = 1
  $bytes = [Text.Encoding]::UTF8.GetBytes('ARC1 ' + ($Body | ConvertTo-Json -Compress))
  $null = $udp.Send($bytes, $bytes.Length, $Address, $Port)
  try {
    $from = New-Object Net.IPEndPoint([Net.IPAddress]::Any, 0)
    $reply = [Text.Encoding]::UTF8.GetString($udp.Receive([ref]$from))
    return ($reply.Substring(5) | ConvertFrom-Json)
  } catch { return $null } finally { $udp.Close() }
}

$order = 20261013120000
Write-Output "Godot: $godot"
Write-Output "UE: $FBEditor"
Write-Output "Evidence: $work"
try {
  # ------------------------------------------------------------ A. UE host + Godot joiner
  Write-Output '== A. UE host, Godot joiner (arcade_lan.gd)'
  $B = Find-FreeBlock 22
  $ctlA = Join-Path $work 'a-host.control'; Set-Content $ctlA ''
  $null = Start-Hidden $FBEditor (UE-Args 'a-host' $B @('-FBLanProbe=host', '-FBLanGame=firebird-coop', '-FBLanBuild=build-100', "-FBLanOrder=$order",
      '-FBLanName=Nix', '-FBLanPort=27700', '-FBLanMax=4', "-FBLanControl=`"$ctlA`"")) 'a-host'
  $ready = Wait-Event (Join-Path $work 'a-host.log') 'HOST_READY' 120
  Check ($null -ne $ready -and $ready.room -match '^[0-9a-f]{16}$' -and $ready.error -eq '') 'A: the UE host announced a room (16 hex id, no error)'
  $null = Start-Hidden $godot (Godot-Args 'a-join' $B @('--game', 'firebird-coop', '--build', 'build-100', '--order', $order)) 'a-join'
  $list = Wait-Event (Join-Path $work 'a-join.log') 'JOIN_LIST' 70
  $room = if ($list) { @($list.rooms)[0] } else { $null }
  Check ($null -ne $room -and $room.room -ceq $ready.room -and $room.host -ceq 'Nix' -and $room.players -eq 1 -and $room.max_players -eq 4 -and $room.level -ceq 'host-join' -and $room.port -eq 27700 -and $room.same_build -eq $true) 'A: arcade_lan.gd lists the UE room with the beacon payload (host Nix, 1/4, host-join, port 27700, same build)'
  $joined = Wait-Event (Join-Path $work 'a-join.log') 'JOINED' 15
  Check ($null -ne $joined -and $joined.port -eq 27700 -and $joined.room -ceq $ready.room -and $joined.level -ceq 'host-join') 'A: arcade_lan.gd joined the UE room and was handed the game port 27700'
  $guest = Wait-Event (Join-Path $work 'a-host.log') 'HOST_GUEST_JOINED' 10
  Check ($null -ne $guest -and $guest.who -ceq 'GodotKid' -and $guest.players -eq 2) 'A: the UE host was told GodotKid joined (2 players)'
  if ($room) {
    $stale = Raw-Hello $room.address $room.ctl @{ t = 'hello'; room = $ready.room; pid = 'rawold'; who = 'Raw'; game = 'firebird-coop'; build = 'build-099'; order = ($order - 100) }
    Check ($null -ne $stale -and $stale.t -ceq 'refuse' -and $stale.why -ceq 'build' -and $stale.message -ceq $msg.newer_there) "A: the UE host's own check refuses an older copy: '$($msg.newer_there)'"
    $other = Raw-Hello $room.address $room.ctl @{ t = 'hello'; room = $ready.room; pid = 'rawgame'; who = 'Raw'; game = 'other-game'; build = 'build-100'; order = $order }
    Check ($null -ne $other -and $other.why -ceq 'game' -and $other.message -ceq $msg.other_game) "A: the UE host refuses another game: '$($msg.other_game)'"
    $imp = Raw-Hello $room.address $room.ctl @{ t = 'hello'; room = $ready.room; pid = 'host'; who = 'Imposter'; game = 'firebird-coop'; build = 'build-100'; order = $order }
    Check ($null -eq $imp) "A: a hello claiming pid 'host' gets no answer"
  }
  Add-Content $ctlA 'quit'
  $closedA = Wait-Event (Join-Path $work 'a-join.log') 'GUEST_CLOSED' 15
  Check ($null -ne $closedA -and $closedA.message -ceq $msg.closed) "A: the UE host closed politely and arcade_lan.gd said '$($msg.closed)'"
  Stop-All; $processes.Clear()

  # ------------------------------------------------------------ B. Godot host (lan_probe.gd) + UE joiner
  Write-Output '== B. Godot host (lan_probe.gd), UE joiner'
  $B = Find-FreeBlock 22
  $ctlB = Join-Path $work 'b-host.control'; Set-Content $ctlB ''
  $hj = 27711
  $null = Start-Hidden $godot @('--headless', '--path', "`"$arcadeDir`"", '--script', 'res://tools/lan_probe.gd', '--', '--role', 'host',
      '--beacon-port', $B, '--log', "`"$(Join-Path $work 'b-host.log')`"", '--control', "`"$ctlB`"", '--build', 'build-100', '--order', $order,
      '--hj-port', $hj, '--max-seconds', '200') 'b-host'
  $bReady = Wait-Event (Join-Path $work 'b-host.log') 'HOST_READY' 60
  Check ($null -ne $bReady -and $bReady.hostjoin -match '^[0-9a-f]{16}$') 'B: the Godot host announced its rooms'
  $null = Start-Hidden $FBEditor (UE-Args 'b-join' $B @('-FBLanProbe=join', '-FBLanGame=demo', '-FBLanBuild=build-100', "-FBLanOrder=$order",
      '-FBLanName=Sky', "-FBLanRoom=$($bReady.hostjoin)")) 'b-join'
  $bList = Wait-Event (Join-Path $work 'b-join.log') 'JOIN_LIST' 120
  $bRoom = if ($bList) { @($bList.rooms | Where-Object { $_.room -ceq $bReady.hostjoin })[0] } else { $null }
  $bGames = if ($bList) { @($bList.rooms | ForEach-Object { $_.game } | Sort-Object -Unique) } else { @() }
  Check ($null -ne $bRoom -and $bRoom.host -ceq 'Nix' -and $bRoom.level -ceq 'host-join' -and $bRoom.port -eq $hj -and $bRoom.max_players -eq 4 -and $bRoom.same_build -eq $true) 'B: the UE game lists the Godot host-join room (host Nix, port, 4 seats, same build)'
  Check (($bGames -join ',') -ceq 'demo') "B: the UE list filtered to its own game (saw: $($bGames -join ','))"
  $bJoined = Wait-Event (Join-Path $work 'b-join.log') 'JOINED' 15
  Check ($null -ne $bJoined -and $bJoined.port -eq $hj -and $bJoined.room -ceq $bReady.hostjoin) 'B: the UE game joined the Godot room and was handed its game port'
  $bGuest = Wait-Event (Join-Path $work 'b-host.log') 'HOST_GUEST_JOINED' 10
  Check ($null -ne $bGuest -and $bGuest.who -ceq 'Sky' -and $bGuest.room -ceq $bReady.hostjoin) 'B: arcade_lan.gd (host) was told Sky joined'
  Add-Content $ctlB 'close hostjoin'
  $bClosed = Wait-Event (Join-Path $work 'b-join.log') 'ROOM_CLOSED' 15
  Check ($null -ne $bClosed -and $bClosed.message -ceq $msg.closed) "B: the Godot host closed the room and the UE game said '$($msg.closed)'"
  Add-Content $ctlB 'quit'
  Stop-All; $processes.Clear()

  # ------------------------------------------------------------ C. UE host + UE joiner, host killed
  Write-Output '== C. UE host, UE joiner, then the host is killed'
  $B = Find-FreeBlock 22
  $ctlC = Join-Path $work 'c-host.control'; Set-Content $ctlC ''
  $null = Start-Hidden $FBEditor (UE-Args 'c-host' $B @('-FBLanProbe=host', '-FBLanGame=firebird-coop', '-FBLanBuild=build-100', "-FBLanOrder=$order",
      '-FBLanName=Nix', '-FBLanPort=27700', '-FBLanMax=2', "-FBLanControl=`"$ctlC`"")) 'c-host'
  $cReady = Wait-Event (Join-Path $work 'c-host.log') 'HOST_READY' 120
  $null = Start-Hidden $FBEditor (UE-Args 'c-join' $B @('-FBLanProbe=join', '-FBLanGame=firebird-coop', '-FBLanBuild=build-100', "-FBLanOrder=$order", '-FBLanName=Sky')) 'c-join'
  $cJoined = Wait-Event (Join-Path $work 'c-join.log') 'JOINED' 150
  Check ($null -ne $cReady -and $null -ne $cJoined -and $cJoined.room -ceq $cReady.room -and $cJoined.port -eq 27700) 'C: a UE joiner joined a UE host and was handed port 27700'
  $cGuest = Wait-Event (Join-Path $work 'c-host.log') 'HOST_GUEST_JOINED' 10
  Check ($null -ne $cGuest -and $cGuest.who -ceq 'Sky') 'C: the UE host was told Sky joined'
  Start-Sleep -Seconds 3   # a few pings and boards back and forth
  $killedAt = Get-Date
  Add-Content $ctlC 'kill'
  $cClosed = Wait-Event (Join-Path $work 'c-join.log') 'ROOM_CLOSED' 20
  $after = if ($cClosed) { [Math]::Round(((Get-Date) - $killedAt).TotalSeconds, 1) } else { -1 }
  Check ($null -ne $cClosed -and $cClosed.message -ceq $msg.closed -and $after -le 12) "C: after the host was killed the joiner said '$($msg.closed)' (noticed within ~$after s of the kill)"
  Stop-All; $processes.Clear()

  # ------------------------------------------------------------ D. older copy refused
  Write-Output '== D. a UE joiner with an older copy'
  $B = Find-FreeBlock 22
  $ctlD = Join-Path $work 'd-host.control'; Set-Content $ctlD ''
  $null = Start-Hidden $FBEditor (UE-Args 'd-host' $B @('-FBLanProbe=host', '-FBLanGame=firebird-coop', '-FBLanBuild=build-200', "-FBLanOrder=$($order + 100)",
      '-FBLanName=Nix', '-FBLanPort=27700', '-FBLanMax=4', "-FBLanControl=`"$ctlD`"")) 'd-host'
  $dReady = Wait-Event (Join-Path $work 'd-host.log') 'HOST_READY' 120
  $null = Start-Hidden $FBEditor (UE-Args 'd-join' $B @('-FBLanProbe=join', '-FBLanGame=firebird-coop', '-FBLanBuild=build-100', "-FBLanOrder=$order", '-FBLanName=Sky')) 'd-join'
  $dList = Wait-Event (Join-Path $work 'd-join.log') 'JOIN_LIST' 150
  $dRoom = if ($dList) { @($dList.rooms)[0] } else { $null }
  Check ($null -ne $dRoom -and $dRoom.same_build -eq $false -and $dRoom.build_message -ceq $msg.newer_there) "D: the list already says the other copy is newer"
  $dRefused = Wait-Event (Join-Path $work 'd-join.log') 'REFUSED' 15
  Check ($null -ne $dRefused -and $dRefused.message -ceq $msg.newer_there) "D: the join is refused with '$($msg.newer_there)'"
  $dGuest = @(Events (Join-Path $work 'd-host.log') 'HOST_GUEST_JOINED')
  Check ($dGuest.Count -eq 0) 'D: the refused copy never reached the host as a guest'
  Add-Content $ctlD 'quit'
  Start-Sleep -Seconds 2

  # ------------------------------------------------------------ E. through the Family Arcade
  Write-Output '== E. the real Family Arcade launcher owns the beacon port'
  $B = Find-FreeBlock 30
  $webListener = New-Object Net.Sockets.TcpListener([Net.IPAddress]::Loopback, 0); $webListener.Start(); $webPort = $webListener.LocalEndpoint.Port; $webListener.Stop()
  $ctlR = Join-Path $work 'e-relay.control'; Set-Content $ctlR ''
  $repoRoot = [IO.Path]::GetFullPath((Join-Path $GamesOS '..'))
  $null = Start-Hidden $godot @('--headless', '--path', "`"$arcadeDir`"", '--script', 'res://tools/lan_probe.gd', '--', '--role', 'relay',
      '--beacon-port', $B, '--log', "`"$(Join-Path $work 'e-relay.log')`"", '--control', "`"$ctlR`"", '--arcade-root', "`"$repoRoot`"",
      '--web-port', $webPort, '--max-seconds', '400') 'e-relay'
  $relayReady = Wait-Event (Join-Path $work 'e-relay.log') 'RELAY_READY' 60
  Check ($null -ne $relayReady -and $relayReady.ok -eq $true -and $relayReady.relay_wired -eq $true) 'E: the real launcher scene is up with its relay'
  $ctlE = Join-Path $work 'e-host.control'; Set-Content $ctlE ''
  $null = Start-Hidden $FBEditor (UE-Args 'e-host' $B @('-FBLanProbe=host', '-FBLanGame=firebird-coop', '-FBLanBuild=build-100', "-FBLanOrder=$order",
      '-FBLanName=Nix', '-FBLanPort=27700', '-FBLanMax=4', "-FBLanControl=`"$ctlE`"")) 'e-host'
  $eReady = Wait-Event (Join-Path $work 'e-host.log') 'HOST_READY' 150
  # the launcher's feed (what the "Playing now" strip draws from) hears the UE room
  $deadline = (Get-Date).AddSeconds(20); $strip = $null
  while ((Get-Date) -lt $deadline -and $eReady) {
    $strip = @(Events (Join-Path $work 'e-relay.log') 'RELAY_STRIP' | Where-Object { @($_.rooms | Where-Object { $_.room -ceq $eReady.room }).Count -gt 0 }) | Select-Object -Last 1
    if ($strip) { break }
    Start-Sleep -Milliseconds 300
  }
  $stripRoom = if ($strip) { @($strip.rooms | Where-Object { $_.room -ceq $eReady.room })[0] } else { $null }
  Check ($null -ne $stripRoom -and $stripRoom.game_id -ceq 'firebird-coop' -and $stripRoom.host -ceq 'Nix' -and $stripRoom.max_players -eq 4 -and @($strip.chips | Where-Object { $_ -like 'firebird-coop*Nix*of 4' }).Count -eq 1) "E: the launcher's Playing-now strip shows the UE room (chip: $(if ($strip) { $strip.chips -join ' / ' } else { 'none' }))"
  # a UE game started alone on the same computer cannot steal the beacon port, and says so
  $null = Start-Hidden $FBEditor (UE-Args 'e-alone' $B @('-FBLanProbe=join', '-FBLanGame=firebird-coop', '-FBLanBuild=build-100', "-FBLanOrder=$order", '-FBLanName=Alone', '-FBLanSeconds=40')) 'e-alone'
  $alone = Wait-Event (Join-Path $work 'e-alone.log') 'LISTEN_ERROR' 150
  Check ($null -ne $alone -and $alone.error -like '*already listening for rooms*') 'E: a UE game started alone does not take the arcade''s beacon port, and says why'
  # started the arcade's way, it reads the rooms through the relay and joins
  $env:ARCADE_RELAY_URL = [string]$relayReady.url
  $null = Start-Hidden $FBEditor (UE-Args 'e-join' $B @('-FBLanProbe=join', '-FBLanGame=firebird-coop', '-FBLanBuild=build-100', "-FBLanOrder=$order", '-FBLanName=Sky')) 'e-join'
  Remove-Item Env:ARCADE_RELAY_URL
  $eList = Wait-Event (Join-Path $work 'e-join.log') 'JOIN_LIST' 150
  $eJoined = Wait-Event (Join-Path $work 'e-join.log') 'JOINED' 15
  $eStart = Wait-Event (Join-Path $work 'e-join.log') 'PROBE_START' 1
  Check ($null -ne $eStart -and $eStart.relay -ceq [string]$relayReady.url -and $null -ne $eList -and @($eList.rooms)[0].room -ceq $eReady.room) 'E: started with ARCADE_RELAY_URL, the UE game lists the room through the arcade'
  Check ($null -ne $eJoined -and $eJoined.port -eq 27700) 'E: and joins it (handed port 27700)'
  Add-Content $ctlE 'quit'
  Add-Content $ctlR 'quit'
  Start-Sleep -Seconds 2
} finally {
  Stop-All
}

$summary = [pscustomobject]@{ contract = 'arcade-lan/v1'; at = (Get-Date).ToString('s'); godot = $godot; failed = $failed; checks = $results }
$summary | ConvertTo-Json -Depth 4 | Set-Content (Join-Path $work 'summary.json')
if ($KeepEvidence) {
  $ev = Join-Path $FBRoot 'docs\evidence\ue-lan'
  New-Item -ItemType Directory -Force -Path $ev | Out-Null
  Get-ChildItem $work -File -Include '*.log', 'summary.json' -Recurse | Where-Object { $_.Name -notlike '*.ue.log' -and $_.DirectoryName -eq $work } | Copy-Item -Destination $ev -Force
}
if ($failed -gt 0) { Write-Output "UE_ARCADE_LAN_FAIL $failed check(s) failed. Logs: $work"; exit 1 }
Write-Output "UE_ARCADE_LAN_OK $($results.Count) checks. Logs: $work"
