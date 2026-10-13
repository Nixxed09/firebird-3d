# FIREBIRD: the Unreal 5 rebuild

The production engine for FIREBIRD (UE 5.8 at `D:\Games\UE_5.8`). The WebGL v2
in `../v2` stays as the design reference: its tuning numbers, Riley's brain
(`../js/riley.js`), the level contract checks and the persona bots carry over.
The plan is in `../docs/FUN_AUDIT.md` (what the slice must prove) and
`../docs/STORY_BIBLE.md` (the episode). Progress is in `../docs/UE_SLICE_LOG.md`.

## Commands (PowerShell, from the repo root)

```powershell
.\tools\ue-build.ps1                    # compile the C++ module
.\tools\ue-build-materials.ps1          # (re)make /Game/Firebird/Materials (once)
.\tools\ue-play.ps1                     # play the feel range yourself
.\tools\ue-capture.ps1 -Scenario feel -Video   # scripted run: proofs + shots + MP4 -> captures/ue/
.\tools\ue-capture.ps1 -Scenario nodash        # the control: the long gap must need the dash
```

**Play:** WASD move, mouse look, Space jump, Shift dash, Ctrl or C crouch
(at a run: slide), left click Spark Caster, F or right click Ember Fist, R
restart, Esc quit.

## How it's built

Everything is C++ in `Source/Firebird`. The level is built in code
(`FBRange`), so the project needs no hand-made maps yet and every change is
reviewable text. Two materials (`tools/ue-build-materials.py`) are tinted per
use, with colours from the STYLE_GUIDE palette in `Firebird.h`.

| Class | What it is |
|---|---|
| `AFirebirdCharacter` | Movement kit (coyote time, jump buffer, Ember Dash, slide), the Spark Caster, the Ember Fist and its release-heal, the view (bob, recoil, FOV kicks, hitstop) |
| `AHollow` | The first enemy: keeps throwing distance, a 0.65 s wind-up tell before each throw, cracks below 15 hp (the release window) |
| `AEmberProjectile` | The Hollow's mercury ember: slow enough to sidestep, crimson |
| `AFBRange` | The feel range: arrival, coyote gap, dash gap over the pit, slide gate, the Hollow arena; sky, fog, the ember grade; Riley's radio lines |
| `AFirebirdHUD` | Placeholder HUD: health, sparks, dash pips, crosshair markers, the RELEASE prompt, hurt direction |
| `UFirebirdAutomation` | `-FBAuto`: drives the character through `FFirebirdInput` (the same path as a player), proves each move, takes shots, dumps frames, writes `summary.json` |
| `AFBFx` | Temporary glowing motes, tracers and flashes (Niagara comes with the art pass) |

Automation never changes gameplay code paths: it fills the same input
struct the keyboard fills. Runs use `-BENCHMARK -FPS=30`, so every frame is
1/30 s and the video is true to time.

## Sound

Every sound is synthesized (`tools/ue-make-sounds.py`, no samples) and imported
as `/Game/Firebird/Sounds/<name>` by `.\tools\ue-import-sounds.ps1`. Play them by
name through `FBAudio.h`:

```cpp
FB::Sound(this, TEXT("spark_fire"), Location);   // 3D one-shot, ~40 m falloff, +/-5% pitch
FB::Sound2D(this, TEXT("riley_radio"));          // no position: UI, radio, your own body
FB::StartAmbience(this);                         // ambience_loop + music_loop under the action
```

All calls are no-ops on a dedicated server, under `-nullrhi` or `-nosound`, or
with no audio device. Check every asset loads: run the game with
`-FBSoundCheck` (logs `FB_SOUND_OK 25 (loops 2)` and quits). Listen to them all:
`docs/evidence/ue-sound/all-sounds.wav` (`all-sounds.txt` gives the times).

| Name | Play it when | 2D/3D |
|---|---|---|
| `footstep_1..3` | every ~0.35 s of running on the ground (rotate the three) | 3D, quiet (0.5) |
| `jump` / `land` | jump starts / touchdown after a fall (scale volume by fall speed) | 3D |
| `dash` | Ember Dash starts | 3D |
| `slide` | a slide starts | 3D |
| `spark_fire` | Spark Caster fires | 3D at the muzzle |
| `spark_hit_wall` / `spark_hit_hollow` | the spark hits stone / a Hollow | 3D at the impact |
| `fist_swing` / `fist_hit` | every punch / a punch that connects (not a release) | 3D |
| `crack` | a Hollow's shell cracks (the release window opens) | 3D |
| `release` | a cracked Hollow is released: the reward, play it full | 3D at the Hollow, and quietly 2D for the puncher |
| `hollow_break` | a Hollow breaks to shots (no release) | 3D |
| `hollow_windup` | a Hollow's 0.65 s throw tell starts (it is cut to that length) | 3D at the Hollow |
| `ember_throw` | the ember leaves its hand | 3D |
| `ember_hit_player` / `player_hurt` | an ember hits you / any damage to you | 2D |
| `player_death` / `respawn` | knocked down / rising at the checkpoint | 2D |
| `riley_radio` | before each Riley radio line | 2D |
| `ui_tick` | menu moves, HUD prompts | 2D |
| `ambience_loop`, `music_loop` | at level start (`FB::StartAmbience`) | 2D loops |
