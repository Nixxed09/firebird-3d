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

## Session 2 (2026-10-13): co-op, sound, the Family Arcade

**Asked:** playtest it, make it good, and set it up in the Family Arcade so the kids
can play it together on the home network.

**Built:**
- **Home-LAN co-op for 1-4 players.** Each computer moves its own Firebird (the
  dash, slide and coyote jump stay instant). The host owns the Hollows, damage,
  health, sparks and heals. Teammates see each other as winged Firebirds in their
  own colour (P1 amber, P2 blue, P3 green, P4 violet) with a name and health bar.
  There's no friendly fire.
- **The arena became a co-op fight.** After the two teaching Hollows, the forge
  wakes: three waves of 4/6/8 Hollows, plus 3 for each extra player, with later
  waves throwing more often. The 0.65 s tell never shortens. Between waves
  there's a breather with sparks and health topped up, then ARENA CLEAR with the
  time. A release also gives sparks (push forward).
- **Sound:** 25 synthesized sounds, ambience and a music bed, wired to every
  action for local and remote players (`tools/ue-make-sounds.py`).
- **A start menu:** PLAY ALONE / HOST A GAME FOR FRIENDS / JOIN <NAME>'S GAME.
  The join list comes from the Family Arcade's rooms. Esc goes back to the menu.
- **The Family Arcade contract `arcade-lan/v1` in C++** (`UFirebirdArcadeLan`).
  A host announces a room, and a game started from "Playing now" (`ARCADE_JOIN`)
  joins it at once, after the contract's build check and with its exact refusal
  words.
- **Packaging** (`tools/ue-package.ps1`, about 915 MB) with a build fingerprint,
  and the arcade's boot check (`tools/arcade-boot-check.ps1`).

**Bot-played evidence (one computer, real processes, real UDP):**

| Test | Result |
|---|---|
| Solo feel proofs (`ue-capture.ps1 -Scenario feel`) | all pass after every change |
| 2-player and 3-player co-op (`ue-coop-test.ps1`) | ARENA CLEAR together; each sees the others; Hollows replicate; the host confirms everyone's hits and heals |
| Arcade contract interop with the arcade's own Godot code and the real launcher (`ue-test-arcade-lan.ps1`) | 25/25 |
| The whole arcade path, packaged: host announces a room, `ARCADE_JOIN` joins it, ARENA CLEAR (`ue-arcade-coop-test.ps1 -Packaged`) | pass |
| The menu lists a friend's game and joins it (over the home address 192.168.1.13) | pass |
| GamesOS `test-external-games.ps1 -Only firebird-coop` (built from the pinned source by the arcade's own import) | UNREAL BOOT PASS, UNREAL LAN HOST-JOIN PASS |

**Found and fixed by testing:**
- `-BENCHMARK` makes a host live through a 60 s wait in 7 real seconds, so co-op
  tests run in real time.
- Saving every frame slowed a recording client to 1 fps, so only one joiner
  records now.
- A client that lost its host restarted its automation in an empty world and
  overwrote its own result. Runs now finish once per process.
- A hitstop slows the whole world, so it's solo-only.
- The bots cleared 3/4/6 waves untouched, so the waves were made bigger.

**Not proven (needs people):**
- **Human-played: still no.** The bots aim perfectly and always dodge. Whether
  the arena is fun and fair for the kids, and whether they find Host and Join
  unaided, is the Nix test (Q3).
- **Two physical computers.** Everything ran on WhiteNova. Skybox has no Unreal,
  so it needs the packaged build through the arcade channel (pack, release,
  candidate, two-PC run, promote: GamesOS `docs/arcade/UPDATES.md`).
- The hosting computer's firewall must allow UDP 27705 (Windows asks once).
