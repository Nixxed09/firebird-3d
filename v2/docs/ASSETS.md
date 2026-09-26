# FIREBIRD 3D v2: authored asset contract

The game builds all of its art in code, and authored art replaces pieces of
it as it arrives. **Anything missing, broken or unrecognised falls back to
the built-in art**, so adding assets can never break the game.

## Where assets go

Each producer has a folder. Each folder has its own `assets.json`.

| Folder | Producer | Priority |
|---|---|---|
| `v2/assets/codex/` | Codex (original, generated from scripts) | 1st |
| `v2/assets/cc0/` | CC0 packs (e.g. Quaternius, Kenney), with `CREDITS.md` | 2nd |
| `v2/assets/` | anything else | 3rd |

If two folders supply the same asset, the higher priority wins
(`ASSET_DIRS` in `src/render/assets.js`).

`node build.mjs` packs every manifest and every file it references into
`dist/assets-pack.js`, so the game also runs from a double-clicked
`index.html` with no server. The build prints the pack size and warns
over 8 MB.

## Art direction

**Retro-modern, like DUSK or Ultrakill.** Chunky, low-resolution textures
and low-poly models under modern lighting, fog, bloom and particles. Not
photoreal, not cartoon. The game shows texture pixels crisp (nearest
filtering) unless an entry says `"filter": "linear"`.

- Textures: 64–256 px, power of two. Surface sets tile seamlessly.
- Triangles: demons 1.5k–6k, first-person weapons 2k–8k, props 100–1.5k.
- Silhouettes must read at 20 m in low light. Emissive accents: eyes,
  cracks, lamps.

## Format rules

- glTF 2.0 **binary** (`.glb`), with everything embedded. `.gltf` with
  separate files is not loaded.
- Metres, +Y up, the model faces **+Z**, origin at the feet (weapons: origin
  at the grip). The engine scales world models by 1/2 (1 grid cell = 2 m)
  and turns weapons to face the camera itself.
- PBR metal/rough materials. Base colour and emissive in sRGB.

## `assets.json`

```json
{ "version": 1, "assets": [
  { "id": "imp", "type": "demon", "file": "imp.glb", "animations": ["idle", "walk", "attack_windup", "attack", "pain", "death"] },
  { "id": "shotgun", "type": "weapon", "file": "weapons/shotgun.glb", "nodes": ["pump"] },
  { "id": "brick", "type": "texture", "maps": { "albedo": "tex/brick_albedo.png", "normal": "tex/brick_normal.png", "roughness": "tex/brick_rough.png" } }
] }
```

`id` is matched loosely: case, spaces, `_` and `-` are ignored, and common
synonyms are accepted (see `ALIASES` in `src/render/assets.js`). If there is
no `id`, the file name is used. Texture map keys can be `albedo`,
`basecolor`/`color`, `normal`, `roughness`/`orm`, or `emissive`.

## Ids the engine looks for

| Kind | Ids |
|---|---|
| Demons (animated) | `imp` (1.7 m), `gnasher` (1.4 m), `knight` (2.6 m), `riley` (1.9 m) |
| First-person weapons | `fist`, `pistol`, `shotgun`, `chaingun`, `rocketlauncher` |
| Props | `barrel`, `torch`, `lamp` (ceiling), `lampbroken`, `crate`, `pipestraight`, `pipeelbow`, `pipevalve`, `chain` |
| Pickups | `medkitsmall`, `medkitlarge`, `bulletclip`, `shellbox`, `rocketbox`, `armor`, `keycardred`, `keycardblue`, `phoenixorb`, `shotgunpickup`, `chaingunpickup`, `rocketlauncherpickup` |
| Wall textures | `brick`, `stone`, `metalpanel`, `techpanel`, `hellrock`, `door`, `doorred`, `doorblue`, `switchoff`, `switchon` |
| Floors and ceilings | `floorslab`, `floorgrate`, `lavafloor`, `ceilingpanel` |

## Animation and named parts

- **Demon clips** play from the game state: `idle`, `walk` (chasing or
  fleeing), `attack_windup` (the readable tell, held until the attack
  fires), `attack` (plays once), `pain` (once), `death` (once, holds the
  last frame). A missing clip falls back to `attack` for the windup, then
  `idle`.
- **Riley**: any material or mesh named `tell` flashes white during her
  attack windup (the player's cue to dodge). A node named `shield` is shown
  only while her shield is up.
- **Weapons**: nodes named `slide` (pistol), `pump` (shotgun), `barrels`
  (chaingun, spins while firing) and `tube` (rocket launcher) are animated by
  the engine along their own Z axis or spin axis. Leave them in their rest
  pose.
- Every demon flashes white when hit. The engine does this on all emissive
  materials, so no hit clip is needed.

## Checking your assets in the game

```
node build.mjs --asset-dirs=assets/codex     # pack just one folder
```

Open `index.html?debug`. In the console:
- `FIREBIRD2.assets()` lists what loaded and any problems.
- `FIREBIRD2.models()` shows, for each demon on screen, whether it's
  authored and which clip is playing.

`tests/fixtures/make_fixtures.py` (Blender 4.5) builds a tiny set that
follows this contract: an animated imp, a pistol with a `slide`, a barrel
and a texture set. It's the reference for what works. Run `node build.mjs`
again without flags before committing, so the real pack ships.
