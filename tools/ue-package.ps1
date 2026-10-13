# Packages the Windows game (no editor needed to play it) into builds\windows\Firebird.
# Writes BUILD-INFO.txt (commit, time, content fingerprint) beside the exe, the file the
# Family Arcade's updater and the LAN build check read.
#   .\tools\ue-package.ps1 [-Configuration Development|Shipping]
# -Commit: the source pin, when packaging from a plain source archive with no git (the Family Arcade's import)
param([ValidateSet('Development', 'Shipping')][string]$Configuration = 'Development', [string]$Commit = '')
. "$PSScriptRoot\ue-common.ps1"
$open = Get-FBProcesses
if ($open.Count -gt 0) { throw "Close the Firebird editor/game first (PID $($open.ProcessId -join ', '))." }
$stage = Join-Path $FBRoot "builds\stage"
$out = Join-Path $FBRoot "builds\windows"
$uat = Join-Path $FBEngineRoot "Engine\Build\BatchFiles\RunUAT.bat"
$log = Join-Path $FBRoot "captures\ue\package.log"
New-Item -ItemType Directory -Force -Path (Split-Path $log) | Out-Null
& $uat BuildCookRun "-project=$FBProject" -platform=Win64 "-clientconfig=$Configuration" -build -cook -stage -pak -iostore -archive "-archivedirectory=$stage" -nop4 -utf8output -unattended -NoP4 *>&1 | Tee-Object -FilePath $log | Select-String -Pattern "BUILD SUCCESSFUL|BUILD FAILED|Error:" | Select-Object -Last 10
if ($LASTEXITCODE -ne 0) { throw "Packaging failed (exit $LASTEXITCODE); see $log" }
$built = Join-Path $stage "Windows"
if (!(Test-Path (Join-Path $built "Firebird.exe"))) { throw "No Firebird.exe in $built" }
if (Test-Path $out) { Remove-Item -Recurse -Force $out }
New-Item -ItemType Directory -Force -Path (Split-Path $out) | Out-Null
Move-Item $built $out
# the build's fingerprint: the hash of the cooked content (same files -> same id on any computer)
# the cooked content and the game program itself (a code change must change the id too)
$paks = Get-ChildItem $out -Recurse -Include *.pak, *.utoc, *.ucas, Firebird*.exe | Sort-Object Name
$sha = [System.Security.Cryptography.SHA256]::Create()
$all = New-Object System.IO.MemoryStream
foreach ($f in $paks) {
  $stream = [IO.File]::OpenRead($f.FullName)
  try { $h = [BitConverter]::ToString([System.Security.Cryptography.SHA256]::Create().ComputeHash($stream)) -replace '-', '' } finally { $stream.Dispose() }
  $b = [Text.Encoding]::UTF8.GetBytes("$($f.Name):$h`n"); $all.Write($b, 0, $b.Length)
}
$fingerprint = ([BitConverter]::ToString($sha.ComputeHash($all.ToArray())) -replace '-', '').Substring(0, 16).ToLower()
if (-not $Commit) { $Commit = (& git -C $FBRoot rev-parse HEAD 2>$null) }
if (-not $Commit) { $Commit = 'unknown' }
$shortCommit = $Commit.Trim().Substring(0, [Math]::Min(7, $Commit.Trim().Length))   # (PowerShell names ignore case: not $commit)
$order = [DateTimeOffset]::UtcNow.ToUnixTimeSeconds()
@("Game: firebird-coop", "Built from: $($Commit.Trim())", "Commit: $shortCommit", "Build id: $fingerprint", "Build order: $order",
  "Configuration: $Configuration", "Built at: $(Get-Date -Format o)") | Set-Content (Join-Path $out "BUILD-INFO.txt")
# a double-click launcher, and the boot check the arcade updater runs after installing
"@echo off`r`nstart `"`" `"%~dp0Firebird.exe`" -windowed -ResX=1600 -ResY=900 %*`r`n" | Set-Content -NoNewline (Join-Path $out "Start-Firebird.bat")
Write-Output "FB_PACKAGE ok $out build=$fingerprint commit=$shortCommit"
