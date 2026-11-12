# Take a picture of the open editor's level viewport from a chosen spot.
#
#   .\tools\ue-shot.ps1 -Out docs\evidence\look-gate\01.png -X 1300 -Y 0 -Z 170 -Yaw 180 -Pitch 0
#
# Position is in centimetres. The editor must be open with the level loaded.
param(
    [Parameter(Mandatory = $true)][string]$Out,
    [double]$X = 0, [double]$Y = 0, [double]$Z = 170,
    [double]$Yaw = 0, [double]$Pitch = 0
)
$ErrorActionPreference = "Stop"
$argsFile = Join-Path $env:TEMP ("fb-shot-{0}.json" -f $PID)
@{ toolset_name = "EditorToolset.EditorAppToolset"; tool_name = "CaptureViewport"; arguments = @{
        captureTransform = @{ location = @{ x = $X; y = $Y; z = $Z }; rotation = @{ pitch = $Pitch; yaw = $Yaw; roll = 0 } }
        annotations = @{ gridSpacing = 0; gridExtent = 0; gridHeight = 0; maxLabelDistance = 0; classFilter = $null; maxLabels = 0 }
        bShowUI = $false } } | ConvertTo-Json -Depth 8 | Set-Content $argsFile -Encoding UTF8
$r = & (Join-Path $PSScriptRoot "ue-mcp.ps1") -Tool call_tool -ArgsFile $argsFile | ConvertFrom-Json
if ($r.error) { throw ($r.error | ConvertTo-Json -Compress) }
$data = $null
foreach ($c in $r.result.content) {
    if ($c.type -eq "image") { $data = $c.data }
    elseif ($c.text) { try { $j = $c.text | ConvertFrom-Json; if ($j.returnValue.data) { $data = $j.returnValue.data } elseif ($j.returnValue.image.data) { $data = $j.returnValue.image.data } } catch {} }
}
if (-not $data) { throw "No image came back: $(($r.result.content | ForEach-Object { $_.text }) -join ' ' | ForEach-Object { $_.Substring(0, [Math]::Min(300, $_.Length)) })" }
$full = if ([IO.Path]::IsPathRooted($Out)) { $Out } else { Join-Path (Get-Location) $Out }
New-Item -ItemType Directory -Force (Split-Path $full -Parent) | Out-Null
[IO.File]::WriteAllBytes($full, [Convert]::FromBase64String($data))
"saved $full"
