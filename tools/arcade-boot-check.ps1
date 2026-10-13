# The Family Arcade updater's boot check for a freshly installed build: starts the
# packaged game hidden for a few seconds and prints ARCADE_BOOT_OK if it came up.
#   powershell -File arcade-boot-check.ps1 [-GameDir <folder with Firebird.exe>]
param([string]$GameDir = (Join-Path (Split-Path -Parent $PSScriptRoot) "builds\windows"))
$ErrorActionPreference = "Stop"
$exe = Join-Path $GameDir "Firebird.exe"
if (!(Test-Path $exe)) { Write-Output "ARCADE_BOOT_FAILED no Firebird.exe in $GameDir"; exit 1 }
$out = Join-Path $env:TEMP ("fb-boot-" + [guid]::NewGuid().ToString("N").Substring(0, 8))
New-Item -ItemType Directory -Force -Path $out | Out-Null
$log = Join-Path $out "boot.log"
$p = Start-Process -FilePath $exe -ArgumentList @("-windowed", "-ResX=640", "-ResY=360", "-nosound", "-abslog=`"$log`"", "-FBAuto", "-FBScenario=boot", "-FBOut=`"$out`"") -PassThru -WindowStyle Hidden
if (!$p.WaitForExit(120000)) { Stop-Process -Id $p.Id -Force; Write-Output "ARCADE_BOOT_FAILED timed out"; exit 1 }
$summary = Join-Path $out "summary.json"
if ((Test-Path $summary) -and ((Get-Content $summary -Raw | ConvertFrom-Json).all_ok)) { Write-Output "ARCADE_BOOT_OK"; exit 0 }
Write-Output "ARCADE_BOOT_FAILED see $log"; exit 1
