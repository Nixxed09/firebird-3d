# The Family Arcade updater's boot check for a freshly installed build: starts the
# packaged game hidden for a few seconds and prints ARCADE_BOOT_OK if it came up.
# ue-package.ps1 copies it beside Firebird.exe, so every pack carries it; the updater
# runs it as  arcade-boot-check.ps1 -Folder <installed folder> -Root <arcade root>.
#   powershell -File arcade-boot-check.ps1 [-GameDir <folder with Firebird.exe>]
param([string]$GameDir = '', [string]$Folder = '', [string]$Root = '')
$ErrorActionPreference = "Stop"
if (-not $GameDir) { $GameDir = $Folder }
if (-not $GameDir) {
  # beside the game (a pack), else the repo's packaged build (tools\ -> builds\windows)
  $GameDir = if (Test-Path (Join-Path $PSScriptRoot "Firebird.exe")) { $PSScriptRoot } else { Join-Path (Split-Path -Parent $PSScriptRoot) "builds\windows" }
}
$exe = Join-Path $GameDir "Firebird.exe"
if (!(Test-Path $exe)) { Write-Output "ARCADE_BOOT_FAILED no Firebird.exe in $GameDir"; exit 1 }
$out = Join-Path $env:TEMP ("fb-boot-" + [guid]::NewGuid().ToString("N").Substring(0, 8))
New-Item -ItemType Directory -Force -Path $out | Out-Null
$log = Join-Path $out "boot.log"
# the check's tiny window must not become the kids' saved settings
$saved = Join-Path $GameDir "Firebird\Saved"
$hadSaved = Test-Path $saved
$p = Start-Process -FilePath $exe -ArgumentList @("-windowed", "-ResX=640", "-ResY=360", "-nosound", "-abslog=`"$log`"", "-FBAuto", "-FBScenario=boot", "-FBOut=`"$out`"") -PassThru -WindowStyle Hidden
$null = $p.Handle
$done = $p.WaitForExit(120000)
if (!$done) { Stop-Process -Id $p.Id -Force; $p.WaitForExit() }
if (-not $hadSaved -and (Test-Path $saved)) { Remove-Item -Recurse -Force $saved -ErrorAction SilentlyContinue }
if (!$done) { Write-Output "ARCADE_BOOT_FAILED timed out"; exit 1 }
$summary = Join-Path $out "summary.json"
if ((Test-Path $summary) -and ((Get-Content $summary -Raw | ConvertFrom-Json).all_ok)) { Write-Output "ARCADE_BOOT_OK"; exit 0 }
Write-Output "ARCADE_BOOT_FAILED see $log"; exit 1
