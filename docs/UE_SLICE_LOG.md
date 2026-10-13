# UE slice log

The Unreal 5 vertical slice: **E1M2 The Furnace**, defined in
[FUN_AUDIT.md](FUN_AUDIT.md) and placed in the story by
[STORY_BIBLE.md](STORY_BIBLE.md). Evidence levels follow the contract:
**checked / bot-played / human-played**. A session is not done because code
exists; it's done when its evidence is captured.

## Session 1 (2026-10-13): the feel kit

**Goal:** a UE5 project where movement and the Ember Fist feel good on a test
course, with video, before any level art (FUN_AUDIT slice row "Feel in the
hands" and "The fantasy as a mechanic").

**Built** (`engine/`, see [engine/README.md](../engine/README.md)):
- The Firebird: run 1000 cm/s (v2's 5 cells/s), snappy acceleration, jump with
  **coyote time (120 ms)** and a **jump buffer (120 ms)**.
- **Ember Dash**: 2 charges, about 1.1 s each to recharge. It works in the air
  and hangs flat (Doom Eternal style).
- **Slide**: crouch at a run or out of a dash. You can jump out of it and keep
  your speed.
- **Spark Caster** (hitscan, v2 damage). **Ember Fist**: a punch, and on a
  cracked Hollow a **release**. It snaps in, heals +20, and gives a hitstop, a
  FOV kick and a column of gold light.
- **The Hollow:** keeps a throwing distance and strafes. It has a 0.65 s tell
  before every throw (stops, arms up, seams flare crimson). It cracks below
  15 hp, opening a 2.6 s release window.
- The feel range, built in code: one new thing per stretch, a torch pair at
  every "this way" (N2), and Riley's radio line before each skill (L5). It has
  an ember sunset sky, fog, Lumen GI and the ember grade.
- Automation (`-FBAuto`) with proofs, shots and a 30 fps MP4.

**Bot-played evidence** ([evidence/ue-session-01](evidence/ue-session-01)):

| Proof | Result |
|---|---|
| Coyote jump: walk off the ledge, jump ~100 ms late | PASS: lands on the far side |
| The long gap needs the dash (control run, no dash) | PASS: a jump alone falls short (`nodash-summary.json`) |
| Jump + dash at the top clears the long gap | PASS: lands with about 2 m spare |
| Slide under the 110 cm gate | PASS: 0.93 s, against 2.72 s crouch-walking |
| Crack with the Spark Caster, then release with the fist | PASS: +20 health |
| Read the wind-up, side-dash out of the ember | PASS: 0 hits in the next 1.4 s |
| Clear the arena with releases | PASS: 2 releases, 3 dashes, 1 slide |

Video: `evidence/ue-session-01/feel.mp4` (13 s). Stills: `key-moments.png`.

**Fixed along the way** (each found by a proof or a screenshot):
- The coyote proof first failed by one frame: the automation's input lands a
  frame late (33 ms at 30 fps). A human's input doesn't, so the trigger moved,
  not the window.
- Dashing while still rising flattened the jump and it only just caught the
  edge. The dash now teaches "at the top": Riley says so, and the run proves it.
- The second Hollow never woke: a pillar blocked its view. It now hears the
  fight, as demons did in v2.
- Release and crack lights blew out the screen: auto-exposure in a dark arena,
  plus volumetric fog turning point lights into white domes. Fixed with a
  narrow exposure range and low scattering on gameplay lights. **Gate 5
  lesson:** effect brightness gets judged in the dark room it plays in.

**Not proven yet (needs a person):**
- **Human-played: no.** Do the numbers feel right in the hands? That's run
  speed, dash distance, the coyote and buffer windows, release timing, and
  mouse feel. Bots can't judge that (contract evidence rule).
- Sound: none yet. The run uses `-nosound` and the kit has no audio.
- It's greybox. Plain shapes and placeholder arms and gun; no authored Hollow.

**Next session:**
1. **Play it yourself** (`.\tools\ue-play.ps1`) and note anything that feels
   off. Tuning lives at the top of `FirebirdCharacter.h`.
2. Sound for every action (dash, slide, shot, punch, release, tell, hurt).
3. Start the Furnace blockout from v2's `tools/build_e1m2.py` layout: arrival
   overlook, the lava-pit hub, two looping wings, the drain set piece, the
   sealed forge. Run the level contract checks (port the lab's rules) and a
   bot route on it.
