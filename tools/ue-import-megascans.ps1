# Import Megascans packs into the project through the open Unreal editor.
#
# 1. Download the "..._ue_high.zip" of each pack from its fab.com page
#    (Download > gltf section > the file ending _ue_high.zip).
# 2. Run this. It moves those zips from Downloads into engine\Saved\FabDownloads and
#    imports each one the way Fab's "Add to project" does. Already-imported packs are skipped.
#
#   .\tools\ue-import-megascans.ps1
#
# The editor must be open (.\tools\ue-edit.ps1). Result: engine\Saved\FabDownloads\import-result.json
param([string]$From = "$env:USERPROFILE\Downloads", [int]$TimeoutSec = 1800)
$ErrorActionPreference = "Stop"
$root = Split-Path $PSScriptRoot -Parent
$dir = Join-Path $root "engine\Saved\FabDownloads"
New-Item -ItemType Directory -Force $dir | Out-Null
Get-ChildItem $From -Filter "*_ue_*.zip" -ErrorAction SilentlyContinue | Move-Item -Destination $dir -Force

$log = Join-Path $root "engine\Saved\Logs\Firebird.log"
$before = (Get-Content $log).Count
$py = (Join-Path $PSScriptRoot "ue-import-megascans.py") -replace '\\', '/'
$argsFile = Join-Path $env:TEMP "fb-import-args.json"

# The editor's console box is the textbox next to "Cmd". Find its ref, then type the py command.
@{ toolset_name = "SlateInspectorToolset.SlateInspectorToolset"; tool_name = "Snapshot"; arguments = @{ ref = ""; maxDepth = 40 } } |
    ConvertTo-Json -Depth 6 | Set-Content $argsFile -Encoding UTF8
$snap = & (Join-Path $PSScriptRoot "ue-mcp.ps1") -Tool call_tool -ArgsFile $argsFile
if ("$snap" -notmatch 'Cmd[\s\S]*?textbox (?:\[[^\]]*\] )*?\[ref=(\w+)\]') {
    throw "Could not find the editor's Cmd box. Is the main editor window open?"
}
$ref = $Matches[1]
@{ toolset_name = "SlateInspectorToolset.SlateInspectorToolset"; tool_name = "Type"; arguments = @{ ref = $ref; text = "py `"$py`""; submit = $true } } |
    ConvertTo-Json -Depth 6 | Set-Content $argsFile -Encoding UTF8
try { & (Join-Path $PSScriptRoot "ue-mcp.ps1") -Tool call_tool -ArgsFile $argsFile -TimeoutSec $TimeoutSec | Out-Null }
catch { Write-Host "The editor is busy importing; waiting on its log." }

$deadline = (Get-Date).AddSeconds($TimeoutSec)
while ((Get-Date) -lt $deadline) {
    $new = Get-Content $log | Select-Object -Skip $before | Select-String "FB_MEGASCANS DONE|LogPython: Error"
    if ($new) { break }
    Start-Sleep 5
}
Get-Content $log | Select-Object -Skip $before | Select-String "FB_MEGASCANS DONE|LogPython: Error" | ForEach-Object { $_.Line }
$res = Get-Content (Join-Path $dir "import-result.json") -Raw | ConvertFrom-Json
$res | ForEach-Object { "{0}  {1}  {2}" -f $(if ($_.ok) { "ok  " } else { "FAIL" }), $_.zip, $(if ($_.why) { $_.why } elseif ($_.skipped) { $_.skipped } else { $_.dest }) }
