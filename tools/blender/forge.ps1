# Pack forge: build one of our own pack assets in headless Blender and render it for judging.
#
#   .\tools\blender\forge.ps1 -Pack period_arms -Asset lever_rifle            # build + render
#   .\tools\blender\forge.ps1 -Pack period_arms -Asset lever_rifle -Export    # also write FBX and GLB
#
# The build script is tools\blender\packs\<pack>\<asset>.py (the source of truth, in git).
# Everything it makes goes to engine\Saved\PackForge\<pack>\<asset>\ (not in git).
param(
    [Parameter(Mandatory = $true)][string]$Pack,
    [Parameter(Mandatory = $true)][string]$Asset,
    [string]$Detail = "",
    [switch]$FirstPerson,
    [switch]$Export,
    [switch]$NoRender
)
$ErrorActionPreference = "Stop"
$blender = if ($env:BLENDER_PATH) { $env:BLENDER_PATH } else { "C:\Program Files\Blender Foundation\Blender 4.5\blender.exe" }
if (-not (Test-Path $blender)) { throw "Blender not found at $blender. Set BLENDER_PATH." }
$root = Split-Path $PSScriptRoot -Parent | Split-Path -Parent
$script = Join-Path $PSScriptRoot "packs\$Pack\$Asset.py"
if (-not (Test-Path $script)) { throw "No build script: $script" }
$outDir = Join-Path $root "engine\Saved\PackForge\$Pack\$Asset"
New-Item -ItemType Directory -Force $outDir | Out-Null
$blend = Join-Path $outDir "$Asset.blend"

function Run($what, $argList, $okMark) {
    $log = Join-Path $outDir "$what.log"
    & $blender @argList 2>&1 | Out-File $log -Encoding UTF8
    $ok = Select-String -Path $log -Pattern $okMark | Select-Object -Last 1
    if (-not $ok) {
        Select-String -Path $log -Pattern 'Error|Traceback|File "' -Context 0, 3 | Select-Object -Last 8 | ForEach-Object { $_.ToString() }
        throw "$what failed. Log: $log"
    }
    $ok.Line
}

Run "build" @("-b", "--factory-startup", "--python-exit-code", "3", "--python", $script, "--", "--out", $blend) "FORGE_BUILD_OK"
if (-not $NoRender) {
    $r = @("-b", $blend, "--python-exit-code", "3", "--python", (Join-Path $PSScriptRoot "render_views.py"), "--", "--out", (Join-Path $outDir "views"))
    if ($Detail) { $r += @("--detail", $Detail) }
    if ($FirstPerson) { $r += @("--fp", "1") }
    Run "render" $r "FORGE_RENDER_OK"
}
if ($Export) {
    Run "export" @("-b", $blend, "--python-exit-code", "3", "--python", (Join-Path $PSScriptRoot "export_asset.py"), "--", "--out", $outDir, "--name", $Asset) "FORGE_EXPORT_OK"
}
