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
The delivery contains **31 models and 14 surface sets (56 PNG maps)**. Models
use 5,148–7,984 triangles for demons, 6,032–9,720 for first-person weapons,
420–1,536 for props, 440–1,512 for supply pickups and 4,320–5,768 for gun pickups.

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
white at runtime (restore cyan afterward). `tell` deliberately uses an emissive
factor without a tinted emissive map, so white really becomes white. All other
glowing materials have embedded emissive textures. Model materials must be cloned per
instance before per-character changes. Transparency needs normal three.js
sorting; the shield is a separate object so the renderer can set renderOrder.

`assets.json` lists files, dimensions, triangles, names, and texture sizes.
Its `assets` array contains 31 runtime models and 14 grouped texture sets with
`maps` keys for the engine loader; `files` inventories the authored delivery
(excluding the manifest itself and any independent art packs in this checkout).
`validation.md` and `validation.json` record actual exported GLB measurements
and Khronos results. Every model has a Blender-rendered 512px four-angle
turntable in `previews/` (front quarter, side, rear quarter, opposite side).

The crate's six shards are stowed inside `whole` without intersecting its
exterior. Hide `debris_1..6` on spawn; when it breaks, hide `whole`, reveal the
shards and animate their positions. Triangle counts include both intact and
debris geometry. Moving weapon nodes retain useful local pivots: translate
`slide`/`pump` along Z; rotate `barrels` around Z. `tube` is separately addressable.

Surface maps cover `brick`, `stone`, `metal_panel`, `tech_panel`, `hellrock`,
`floor_slab`, `floor_grate`, `lava_floor`, `ceiling_panel`, `door`, `door_red`,
`door_blue`, `switch_off`, and `switch_on`. Each repeats over 2m. Normal maps use
OpenGL +Y. Roughness is a grayscale PNG. Albedo/emissive use a compact stylized
paint palette; normals retain 8 bits per channel. The grate uses dark opaque
recesses, so it needs no alpha sorting. Use repeat wrapping and mipmaps.

## Export proof

The complete rebuild also re-imports the delivered demon GLBs, checks standing
heights and skin motion in all 24 clips, and renders these proof sheets:

- [Animation poses](proof/animation_poses.png): rows Imp, Gnasher, Ember Knight,
  Riley; columns idle, walk, windup, attack, pain, death.
- [20m low-light view](proof/visibility_20m.png): same character order left to
  right, 512px per view, perspective FOV 75°, eye height 1.6m. View at native
  resolution. This is a controlled Blender scene, not an in-game screenshot.
- [Round-trip measurements](proof/roundtrip.json).
- [Riley visor](proof/riley_tell.png): cyan at rest, white emissive flash.
- [All 31 models](proof/model_catalogue.png): eight columns; asset names in
  `model_catalogue_order` in the round-trip measurements.
- [Surface catalogue](surface_catalogue.png): set order as listed above, four
  columns, top to bottom; last two cells blank.
- [Validation and per-model budgets](validation.md).

The asset previews use studio lighting; the low-light sheet uses much less
illumination. The unit and animation checks operate on exported GLBs, which
also catch material-export differences from the Blender authoring scene.

## Integration status

The asset delivery does not change game code. Load the runtime `assets` array
from this manifest and map states to its named clips. Other authors may be
integrating the loader or delivering packs concurrently; those files are not
part of this kit. Load only the surfaces and models needed for a level; keep
previews and proof out of runtime downloads. No in-game frame-rate, network
loading-time or visual-superiority claim has been measured by this asset build.
All requested asset categories are delivered. Fine anatomical deformation,
weapon firing clips and destruction simulation are outside this asset contract;
the engine drives the named weapon and debris nodes.
