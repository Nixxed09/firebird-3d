# Talk to the open Unreal editor through its MCP server (Step 1B of docs/REBOOT_PLAN.md).
# The editor must be open and the server started: in the editor's Cmd box type
#   ModelContextProtocol.StartServer
#
#   .\tools\ue-mcp.ps1 -List                                  # the tools the server offers
#   .\tools\ue-mcp.ps1 -Tool list_toolsets                    # call a tool with no arguments
#   .\tools\ue-mcp.ps1 -Tool describe_toolset -ArgsJson '{"toolset_name":"X"}'
#   .\tools\ue-mcp.ps1 -Tool call_tool -ArgsFile args.json    # arguments from a JSON file
param(
    [switch]$List,
    [string]$Tool = "",
    [string]$ArgsJson = "{}",
    [string]$ArgsFile = "",
    [string]$Url = "http://127.0.0.1:8000/mcp",
    [int]$TimeoutSec = 120
)
$ErrorActionPreference = "Stop"
$headers = @{ Accept = "application/json, text/event-stream" }

function Send-Mcp([string]$Body, [switch]$NoReply) {
    $r = Invoke-WebRequest -Uri $Url -Method Post -Body ([Text.Encoding]::UTF8.GetBytes($Body)) `
        -ContentType "application/json" -Headers $headers -TimeoutSec $TimeoutSec
    if ($r.Headers["Mcp-Session-Id"]) { $headers["Mcp-Session-Id"] = [string]$r.Headers["Mcp-Session-Id"] }
    if ($NoReply) { return }
    $text = $r.Content
    if ($text -is [byte[]]) { $text = [Text.Encoding]::UTF8.GetString($text) }
    # A streamed reply is "data: {json}" lines; keep the last one.
    if ($text -match "(?m)^data:") {
        $text = ($text -split "`n" | Where-Object { $_ -like "data:*" } | Select-Object -Last 1).Substring(5)
    }
    return $text
}

try {
    Send-Mcp '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"firebird-tools","version":"1"}}}' | Out-Null
} catch {
    Write-Error "The editor's MCP server did not answer at $Url. Is the editor open, and did you run ModelContextProtocol.StartServer? ($($_.Exception.Message))"
}
Send-Mcp '{"jsonrpc":"2.0","method":"notifications/initialized"}' -NoReply

if ($List) {
    Send-Mcp '{"jsonrpc":"2.0","id":2,"method":"tools/list","params":{}}'
} elseif ($Tool) {
    if ($ArgsFile) { $ArgsJson = Get-Content -Raw -Encoding UTF8 $ArgsFile }
    $nameJson = $Tool | ConvertTo-Json
    Send-Mcp "{`"jsonrpc`":`"2.0`",`"id`":3,`"method`":`"tools/call`",`"params`":{`"name`":$nameJson,`"arguments`":$ArgsJson}}"
} else {
    "Connected to $Url. Use -List or -Tool."
}
