# Click inside an editor window that the editor's own UI tools cannot reach
# (the Fab window is a web page; Slate refs stop at its edge), then take a picture.
#
#   .\tools\ue-click.ps1 -WindowRef w15 -Out shot.png                 # picture only
#   .\tools\ue-click.ps1 -WindowRef w15 -X 824 -Y 288 -Out shot.png   # click, wait, picture
#
# X and Y are pixels inside the window picture. This moves the real mouse, so
# nobody should be using the mouse while it runs. It only ever clicks inside
# the named editor window.
param(
    [Parameter(Mandatory = $true)][string]$WindowRef,
    [int]$X = -1, [int]$Y = -1,
    [string]$Out = "",
    [int]$WaitSec = 3,
    [int]$Scroll = 0
)
$ErrorActionPreference = "Stop"
$mcp = Join-Path $PSScriptRoot "ue-mcp.ps1"
$S = "SlateInspectorToolset.SlateInspectorToolset"
$argsFile = Join-Path $env:TEMP ("fb-click-{0}.json" -f $PID)
function Call($tool, $arguments) {
    @{ toolset_name = $S; tool_name = $tool; arguments = $arguments } | ConvertTo-Json -Depth 6 | Set-Content $argsFile -Encoding UTF8
    (& $mcp -Tool call_tool -ArgsFile $argsFile | ConvertFrom-Json).result.content[0].text | ConvertFrom-Json
}
Add-Type -Name FbMouse -Namespace Fb -MemberDefinition @'
[DllImport("user32.dll")] public static extern bool SetProcessDPIAware();
[DllImport("user32.dll")] public static extern bool SetCursorPos(int x, int y);
[DllImport("user32.dll")] public static extern void mouse_event(uint f, uint dx, uint dy, int d, System.UIntPtr e);
'@ -ErrorAction SilentlyContinue
[Fb.FbMouse]::SetProcessDPIAware() | Out-Null

if ($X -ge 0 -or $Scroll -ne 0) {
    $snap = (Call "Snapshot" @{ ref = ""; maxDepth = 3 }).returnValue
    if ($snap -notmatch ('window "[^"]*" \[pos=(-?\d+),(-?\d+) size=(\d+)x?,?(\d+)\] \[ref=' + [regex]::Escape($WindowRef) + '\]')) {
        throw "Window $WindowRef not found in the editor."
    }
    $wx = [int]$Matches[1]; $wy = [int]$Matches[2]; $ww = [int]$Matches[3]; $wh = [int]$Matches[4]
    $px = if ($X -ge 0) { $X } else { [int]($ww / 2) }; $py = if ($Y -ge 0) { $Y } else { [int]($wh / 2) }
    if ($px -ge $ww -or $py -ge $wh) { throw "Point $px,$py is outside the window ($ww x $wh)." }
    [Fb.FbMouse]::SetCursorPos($wx + $px, $wy + $py) | Out-Null
    Start-Sleep -Milliseconds 400
    if ($Scroll -ne 0) { [Fb.FbMouse]::mouse_event(0x0800, 0, 0, $Scroll * 120, [UIntPtr]::Zero) }
    else {
        [Fb.FbMouse]::mouse_event(0x0002, 0, 0, 0, [UIntPtr]::Zero); Start-Sleep -Milliseconds 80
        [Fb.FbMouse]::mouse_event(0x0004, 0, 0, 0, [UIntPtr]::Zero)
    }
    Start-Sleep $WaitSec
}
if ($Out) {
    $r = Call "Screenshot" @{ ref = $WindowRef }
    $full = if ([IO.Path]::IsPathRooted($Out)) { $Out } else { Join-Path (Get-Location) $Out }
    [IO.File]::WriteAllBytes($full, [Convert]::FromBase64String($r.returnValue.data))
    "saved $full"
}
