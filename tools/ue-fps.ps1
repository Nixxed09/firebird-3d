# Measure the frame rate of a map in the real game (not the editor viewport).
#
#   .\tools\ue-fps.ps1 -Map /Game/Firebird/Maps/L_LookRoom [-ResX 1920 -ResY 1080] [-Frames 3000]
#
# Starts the game in a window on the map, lets the engine's CSV profiler record -Frames frames,
# closes the game, and reports the last third of them (the first part is shaders and loading).
# The camera is wherever the game starts: the first PlayerStart, behind the title menu.
# This is the editor program running as a game, so a packaged build is a little faster.
# Do not trust a number taken from the editor viewport: an editor in the background ticks 3 times a second.
param(
    [Parameter(Mandatory = $true)][string]$Map,
    [int]$ResX = 1920, [int]$ResY = 1080,
    [int]$Frames = 3000,
    [int]$TimeoutSec = 600,
    [string]$Exec = ""          # extra console commands to try a setting, e.g. -Exec "r.VolumetricCloud 0, r.ScreenPercentage 75"
)
. "$PSScriptRoot\ue-common.ps1"
# A game started from the editor program writes its profile under the user folder, not the project.
$csvDir = Join-Path $env:LOCALAPPDATA "UnrealEngine\5.8\Saved\Profiling\CSV"
New-Item -ItemType Directory -Force $csvDir | Out-Null
$before = @(Get-ChildItem $csvDir -Filter *.csv -ErrorAction SilentlyContinue | ForEach-Object FullName)
$argList = @("`"$FBProject`"", $Map, "-game", "-windowed", "-ResX=$ResX", "-ResY=$ResY", "-NoSplash", "-nosound",
    "-novsync", "-csvCaptureFrames=$Frames", "-ExecCmds=`"t.MaxFPS 0$(if ($Exec) { ", $Exec" })`"")
$p = Start-Process -FilePath $FBEditor -ArgumentList $argList -PassThru
$deadline = (Get-Date).AddSeconds($TimeoutSec)
$csv = $null
do {
    Start-Sleep 3
    $new = @(Get-ChildItem $csvDir -Filter *.csv -ErrorAction SilentlyContinue | Where-Object { $before -notcontains $_.FullName })
    if ($new.Count) {
        $f = $new | Sort-Object LastWriteTime | Select-Object -Last 1
        $len1 = $f.Length; Start-Sleep 4; $f.Refresh()
        if ($f.Length -eq $len1 -and $f.Length -gt 0 -and (Select-String -Path $f.FullName -Pattern '^\[HasHeaderRowAtEnd\]' -Quiet)) { $csv = $f.FullName }
    }
} while (-not $csv -and -not $p.HasExited -and (Get-Date) -lt $deadline)
if (-not $p.HasExited) { Stop-Process -Id $p.Id -Force }
if (-not $csv) { throw "No finished CSV in $csvDir. Did the game start? (first run after new assets compiles shaders and can need a longer -TimeoutSec)" }

$lines = Get-Content $csv
# Columns are added while the game runs, so the complete header is the one at the END of the file.
$header = $lines | Where-Object { $_ -match '(^|,)FrameTime(,|$)' } | Select-Object -Last 1
if (-not $header) { throw "No FrameTime column in $csv" }
$cols = $header -split ','
$iFrame = [array]::IndexOf($cols, 'FrameTime'); $iGpu = [array]::IndexOf($cols, 'GPUTime')
# Layout: a header row first and again second from last, one row per frame between, metadata last.
# New columns are appended on the right as the game runs, so early rows are shorter than the header.
$need = [Math]::Max($iFrame, $iGpu)
$rows = $lines | Select-Object -Skip 1 | Where-Object { $_ -notmatch '^EVENTS,' -and $_ -notmatch '^\[HasHeaderRowAtEnd\]' } |
    ForEach-Object { $c = $_ -split ','; if ($c.Count -gt $need) { , @($c[$iFrame], $(if ($iGpu -ge 0) { $c[$iGpu] } else { "0" })) } } |
    Where-Object { $_[0] -match '^[\d\.]+$' -and $_[1] -match '^[\d\.]+$' }
if ($rows.Count -lt 30) { throw "Only $($rows.Count) frames could be read from $csv" }
$iFrame = 0; if ($iGpu -ge 0) { $iGpu = 1 }
$tail = $rows | Select-Object -Last ([int]($rows.Count / 3))
$ft = $tail | ForEach-Object { [double]$_[$iFrame] } | Sort-Object
$avg = ($ft | Measure-Object -Average).Average
$p99 = $ft[[int]($ft.Count * 0.99) - 1]
$gpu = if ($iGpu -ge 0) { ($tail | ForEach-Object { [double]$_[$iGpu] } | Measure-Object -Average).Average } else { 0 }
"FB_FPS map=$Map res=${ResX}x$ResY exec='$Exec' frames=$($ft.Count) avg_fps={0:N1} worst1pct_fps={1:N1} avg_frame_ms={2:N2} gpu_ms={3:N2}" -f (1000 / $avg), (1000 / $p99), $avg, $gpu
"FB_FPS_CSV $csv"
