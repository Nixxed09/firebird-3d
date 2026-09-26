param([ValidateSet('all','demons','weapons','props','pickups','surfaces')][string]$Group='all', [string]$Blender='C:\Program Files\Blender Foundation\Blender 4.5\blender.exe')
$ErrorActionPreference = 'Stop'
if (!(Test-Path $Blender)) { throw "Blender 4.5 required: $Blender" }
& $Blender -b -t 8 --python-exit-code 1 -P "$PSScriptRoot/build.py" -- --group $Group
if ($LASTEXITCODE -ne 0) { throw 'Blender build failed' }
if (!(Test-Path "$PSScriptRoot/.deps/node_modules/gltf-validator")) {
  & npm.cmd install --prefix "$PSScriptRoot/.deps" --no-save --package-lock=false --ignore-scripts gltf-validator@2.0.0-dev.3.10
  if ($LASTEXITCODE -ne 0) { throw 'Validator install failed' }
}
& node "$PSScriptRoot/validate.mjs"
if ($LASTEXITCODE -ne 0) { throw 'Asset validation failed' }
