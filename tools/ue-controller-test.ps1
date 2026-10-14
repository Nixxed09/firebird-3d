param([string]$GameDir = '')
. "$PSScriptRoot\ue-common.ps1"
if (-not $GameDir) { $GameDir = Join-Path $FBRoot 'builds\windows' }
$exe = Join-Path $GameDir 'Firebird.exe'
if (-not (Test-Path -LiteralPath $exe)) { throw "No packaged game: $exe" }
$out = Join-Path $FBRoot ('captures\ue\controller-' + (Get-Date -Format 'yyyyMMdd-HHmmss'))
New-Item -ItemType Directory -Force -Path $out | Out-Null
$process = Start-Process -FilePath $exe -ArgumentList @('-windowed','-ResX=640','-ResY=360','-nosound','-FBAuto','-FBScenario=controller',('-FBOut="' + $out + '"'),('-abslog="' + (Join-Path $out 'game.log') + '"')) -WindowStyle Hidden -PassThru
try {
  $null = $process.Handle
  if (-not $process.WaitForExit(90000)) { $process.Kill(); throw "Controller check timed out; see $out" }
  $summary = Get-Content -LiteralPath (Join-Path $out 'summary.json') -Raw | ConvertFrom-Json
  if ($process.ExitCode -ne 0 -or -not $summary.all_ok -or @($summary.proofs.PSObject.Properties).Count -ne 6) { throw "Controller direction check failed; see $out" }
  $summary.proofs | ConvertTo-Json -Depth 4
  Write-Output "FB_CONTROLLER_OK 6 viewport-to-game direction checks; evidence $out"
} finally { $process.Dispose() }
