# Makes the sounds and imports them as /Game/Firebird/Sounds/* SoundWave assets.
#   .\tools\ue-import-sounds.ps1            (regenerates the WAVs first)
#   .\tools\ue-import-sounds.ps1 -NoSynth   (imports the WAVs already there)
param([switch]$NoSynth)
. "$PSScriptRoot\ue-common.ps1"
if (!$NoSynth) {
  & python (Join-Path $PSScriptRoot "ue-make-sounds.py") --sample
  if ($LASTEXITCODE -ne 0) { throw "Sound synthesis failed" }
}
$script = Join-Path $PSScriptRoot "ue-import-sounds.py"
$log = Join-Path $FBRoot "captures\ue\sounds-import.log"
New-Item -ItemType Directory -Force -Path (Split-Path $log) | Out-Null
& $FBEditorCmd $FBProject "-ExecutePythonScript=$script" -unattended -nop4 -nosplash -NullRHI "-abslog=$log" | Out-Null
$line = Select-String -Path $log -Pattern "FB_SOUNDS imported (\d+) of (\d+)" | Select-Object -Last 1
if (!$line -or $line.Matches[0].Groups[1].Value -ne $line.Matches[0].Groups[2].Value -or $line.Matches[0].Groups[1].Value -eq '0') { throw "Sound import incomplete; see $log" }
Write-Output ("FB_SOUNDS ok " + $line.Matches[0].Groups[1].Value)
