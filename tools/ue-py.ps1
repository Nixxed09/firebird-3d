# Run a Python file inside the open Unreal editor and print what it logged.
#
#   .\tools\ue-py.ps1 -Script tools\editor\my_script.py [-ScriptArgs "a b"]
#
# The script should log with unreal.log("FB_PY ...") and finish with unreal.log("FB_PY DONE").
# Lines with FB_PY and any Python errors are printed. The editor must be open.
param(
    [Parameter(Mandatory = $true)][string]$Script,
    [string]$ScriptArgs = "",
    [int]$TimeoutSec = 600
)
$ErrorActionPreference = "Stop"
$root = Split-Path $PSScriptRoot -Parent
$log = Join-Path $root "engine\Saved\Logs\Firebird.log"
$py = (Resolve-Path $Script).Path -replace '\\', '/'
$mcp = Join-Path $PSScriptRoot "ue-mcp.ps1"
$argsFile = Join-Path $env:TEMP ("fb-py-args-{0}.json" -f $PID)
$S = "SlateInspectorToolset.SlateInspectorToolset"

# A minimized editor has no UI to type into: bring the window back first.
Add-Type -Name FbWin -Namespace Fb -MemberDefinition @'
[DllImport("user32.dll")] public static extern bool ShowWindow(System.IntPtr h, int c);
[DllImport("user32.dll")] public static extern bool IsIconic(System.IntPtr h);
[DllImport("user32.dll")] public static extern bool SetForegroundWindow(System.IntPtr h);
public delegate bool EnumProc(System.IntPtr h, System.IntPtr l);
[DllImport("user32.dll")] public static extern bool EnumWindows(EnumProc f, System.IntPtr l);
[DllImport("user32.dll")] public static extern uint GetWindowThreadProcessId(System.IntPtr h, out uint p);
[DllImport("user32.dll")] public static extern int GetWindowText(System.IntPtr h, System.Text.StringBuilder s, int n);
[DllImport("user32.dll")] public static extern bool IsWindowVisible(System.IntPtr h);
// The editor's own window, found by title among ALL the process's windows. Its "main window" stops being
// the level editor as soon as an asset editor or a settings window is open (2026-11-12).
public static System.IntPtr EditorWindow(uint pid) {
    System.IntPtr found = System.IntPtr.Zero;
    EnumWindows((h, l) => { uint p; GetWindowThreadProcessId(h, out p);
        if (p == pid && IsWindowVisible(h)) { var s = new System.Text.StringBuilder(256); GetWindowText(h, s, 256);
            if (s.ToString().Contains("Unreal Editor")) { found = h; return false; } }
        return true; }, System.IntPtr.Zero);
    return found; }
'@ -ErrorAction SilentlyContinue
$ed = $null
foreach ($proc in @(Get-Process UnrealEditor -ErrorAction SilentlyContinue)) {
    $h = [Fb.FbWin]::EditorWindow([uint32]$proc.Id)
    if ($h -ne [IntPtr]::Zero) { $ed = [pscustomobject]@{ MainWindowHandle = $h }; break }
}
if (-not $ed) { throw "The Unreal editor is not running. Start it with .\tools\ue-edit.ps1" }
if ([Fb.FbWin]::IsIconic($ed.MainWindowHandle)) { [Fb.FbWin]::ShowWindow($ed.MainWindowHandle, 9) | Out-Null; Start-Sleep 2 }
# Typing needs the editor in front: its Cmd box cannot take focus from behind another window.
[Fb.FbWin]::SetForegroundWindow($ed.MainWindowHandle) | Out-Null; Start-Sleep -Milliseconds 600

@{ toolset_name = $S; tool_name = "Snapshot"; arguments = @{ ref = ""; maxDepth = 40 } } |
    ConvertTo-Json -Depth 6 | Set-Content $argsFile -Encoding UTF8
$snap = "$(& $mcp -Tool call_tool -ArgsFile $argsFile)"
if ($snap -notmatch 'Cmd[\s\S]*?textbox (?:\[[^\]]*\] )*?\[ref=(\w+)\]') {
    throw "Could not find the editor's Cmd box. Is the main editor window open?"
}
$ref = $Matches[1]
$before = (Get-Content $log).Count
# Click the box first. Windows often refuses to bring the editor to the front for a background
# script, and then typing fails with "Could not focus widget"; a click through the UI tools works
# from behind any window (found 2026-11-12).
@{ toolset_name = $S; tool_name = "Click"; arguments = @{ ref = $ref; button = "left"; doubleClick = $false
        modifiers = @{ bShift = $false; bCtrl = $false; bAlt = $false; bCmd = $false } } } |
    ConvertTo-Json -Depth 6 | Set-Content $argsFile -Encoding UTF8
try { & $mcp -Tool call_tool -ArgsFile $argsFile | Out-Null } catch { Write-Host "Click on the Cmd box failed; trying to type anyway." }
$cmd = "py `"$py`"" + $(if ($ScriptArgs) { " $ScriptArgs" } else { "" })
@{ toolset_name = $S; tool_name = "Type"; arguments = @{ ref = $ref; text = $cmd; submit = $true } } |
    ConvertTo-Json -Depth 6 | Set-Content $argsFile -Encoding UTF8
try { $typed = "$(& $mcp -Tool call_tool -ArgsFile $argsFile -TimeoutSec $TimeoutSec)"; if ($typed -match '"isError":true|Could not') { throw "TYPEFAIL $typed" } }
catch { if ("$_" -match "TYPEFAIL") { throw "Could not type into the editor Cmd box: $_" }; Write-Host "The editor is busy; waiting on its log." }

$deadline = (Get-Date).AddSeconds($TimeoutSec)
do {
    $new = Get-Content $log | Select-Object -Skip $before
    if ($new | Select-String "FB_PY DONE|LogPython: Error") { break }
    Start-Sleep 2
} while ((Get-Date) -lt $deadline)
$new | Select-String "FB_PY|LogPython: Error" | ForEach-Object { $_.Line -replace '^\[[^\]]*\]\[[^\]]*\]LogPython: ', '' }
