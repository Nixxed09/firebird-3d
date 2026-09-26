# FIREBIRD 3D original asset kit

Rebuild from the repository root with Blender 4.5 and Node 22 installed:

```powershell
powershell -ExecutionPolicy Bypass -File v2/tools/art/build_all.ps1
```

The first run installs pinned Khronos `gltf-validator` 2.0.0-dev.3.10 inside the
ignored `v2/tools/art/.deps/` directory. All generated files stay in `v2/assets/`
and `v2/tools/art/`. Use `-Group demons` (or weapons, props, pickups, surfaces)
for an individual group. `-Blender` overrides the default Blender 4.5 path.
The script stops on Python, budget, validator, or contract failures.

Original code-authored geometry and pixels; no downloaded, copied, traced, or
AI-generated raster art. Chunky forge silhouettes, soot-dark recesses, warm
ceramic teeth, iron armour, and ember seams keep monsters scary-fun. Riley uses
cyan projection surfaces, a friendly visor, and a translucent gold shield.
Swatches are 128px to keep self-contained GLBs small. Surface sets are 1024px.

## Runtime contract

GLB 2.0, metres, +Y up, +Z forward. Characters and props stand at local Y=0;
weapon origins are at the grip. Blender authors Z up / -Y forward and the glTF
exporter converts coordinates. Geometry scales and rotations are applied.
Embedded PNG base colour/emissive maps use sRGB; normal/roughness use linear
data. Explicit UVs, triangles, normals and tangents are exported.

Demons have a skin and six exact clips: `idle`, `walk`, `attack_windup`, `attack`,
`pain`, `death`. Idle/walk loop; play windup before attack and clamp death to its
last frame. The articulated, rigid-weighted components suit the toy-forge
style; they do not use smooth anatomical bending. Movement is driven by the
engine; clips do not translate the character root through the level.

Riley's separate mesh `shield` can be hidden with `visible=false`. The material
`tell` is emissive and can be flashed white by setting its emissive colour to
white at runtime (restore cyan afterward). Model materials must be cloned per
instance before per-character changes. Transparency needs normal three.js
sorting; the shield is a separate object so the renderer can set renderOrder.

`assets.json` lists files, dimensions, triangles, names, and texture sizes.
`validation.md` and `validation.json` record actual exported GLB measurements
and Khronos results. Every model has a Blender-rendered 512px four-angle
turntable in `previews/` (front quarter, side, rear quarter, opposite side).

## Integration status

The asset delivery does not change game code. The current renderer still
constructs its own procedural models; loading these GLBs and mapping game
states to clips belongs to the engine integration. No game performance or
in-game visual superiority claim has been measured by this asset build.
