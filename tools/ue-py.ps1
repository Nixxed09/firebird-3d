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
'@ -ErrorAction SilentlyContinue
$ed = Get-Process UnrealEditor -ErrorAction SilentlyContinue | Where-Object { $_.MainWindowTitle -match "Unreal Editor" } | Select-Object -First 1
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
