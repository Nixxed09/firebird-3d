# Pack forge: build one of our own pack assets in headless Blender and render it for judging.
#
#   .\tools\blender\forge.ps1 -Pack period_arms -Asset lever_rifle            # build + render
#   .\tools\blender\forge.ps1 -Pack period_arms -Asset lever_rifle -Export    # also write FBX and GLB
#   .\tools\blender\forge.ps1 -Pack period_arms -Asset lever_rifle -Texture -Export   # bake textures first
#   .\tools\blender\forge.ps1 -Pack period_arms -Asset lever_rifle -Round 2   # keep this round for a critic
#
# -Texture runs the GamesOS bake job (toolkit\blender\texture_object.py: one atlas; albedo, normal and
# open-air/roughness/metal images) and renders the views again from the baked model into views_textured.
# It needs the GamesOS folder: GAMESOS_BLENDER, or D:\TE-Code\ProductOS\GamesOS\toolkit\blender.
# -Round N copies the sheet to docs\evidence\pack-forge\<asset>-roundN-sheet.png and the views to
# engine\Saved\PackForge\<pack>\<asset>\rounds\N, the only folder a critic agent is given.
#
# The build script is tools\blender\packs\<pack>\<asset>.py (the source of truth, in git).
# Everything it makes goes to engine\Saved\PackForge\<pack>\<asset>\ (not in git).
param(
    [Parameter(Mandatory = $true)][string]$Pack,
    [Parameter(Mandatory = $true)][string]$Asset,
    [string]$Detail = "",
    [switch]$FirstPerson,
    [switch]$Export,
    [switch]$Texture,
    [int]$TextureRes = 2048,
    [int]$Round = 0,
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
$views = Join-Path $outDir "views"
if ($Texture) {
    $harness = if ($env:GAMESOS_BLENDER) { $env:GAMESOS_BLENDER } else { "D:\TE-Code\ProductOS\GamesOS\toolkit\blender" }
    $job = Join-Path $harness "texture_object.py"
    if (-not (Test-Path $job)) { throw "No texture job at $job. Set GAMESOS_BLENDER." }
    if (-not (Select-String -Path $job -Pattern '"--size"' -Quiet)) { throw "$job is too old (no --size). Pull GamesOS." }
    $texDir = Join-Path $outDir "textured"
    Run "texture" @("--background", "--factory-startup", "--python-exit-code", "3", "--python", $job, "--",
        "--in", $blend, "--out", $texDir, "--name", $Asset, "--res", "$TextureRes", "--size", "auto") "TEXTURE_OBJECT_OK"
    $blend = Join-Path $texDir "$Asset.blend"
    if (-not $NoRender) {
        $views = Join-Path $outDir "views_textured"
        $r = @("-b", $blend, "--python-exit-code", "3", "--python", (Join-Path $PSScriptRoot "render_views.py"), "--", "--out", $views)
        if ($Detail) { $r += @("--detail", $Detail) }
        if ($FirstPerson) { $r += @("--fp", "1") }
        Run "render_textured" $r "FORGE_RENDER_OK"
    }
}
if ($Round -gt 0) {
    $rd = Join-Path $outDir "rounds\$Round"
    New-Item -ItemType Directory -Force $rd | Out-Null
    Copy-Item (Join-Path $views "*.png") $rd -Force
    $ev = Join-Path $root "docs\evidence\pack-forge"
    New-Item -ItemType Directory -Force $ev | Out-Null
    Copy-Item (Join-Path $views "sheet.png") (Join-Path $ev "$Asset-round$Round-sheet.png") -Force
    "FORGE_ROUND_OK $rd"
}
if ($Export) {
    Run "export" @("-b", $blend, "--python-exit-code", "3", "--python", (Join-Path $PSScriptRoot "export_asset.py"), "--", "--out", $outDir, "--name", $Asset) "FORGE_EXPORT_OK"
}
