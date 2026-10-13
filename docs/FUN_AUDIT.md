# FIREBIRD 3D: Fun Audit (Game Design Principles, all 16 gates)

**Date:** 2026-10-13. **Build audited:** v2 WebGL, branch `claude/epic-pass` (b3a96a8: the cover-art
look and the wall-culling fix). **Decision in force:** the production game moves to **Unreal 5.8**
(`D:/Games/UE_5.8`). The v2 build becomes the reference prototype.

**Method:** `GAMESOS/docs/GAME_DESIGN_PRINCIPLES_INDEX.md`, with each gate's linked guide, plus
`games/EPIC_REBUILD_STANDARD.md` and `games/LEVEL_DESIGN_CONTRACT.md`.

**Inspected:**
- the project docs: README, STYLE_GUIDE, LILA_ALIGNMENT, THEME_ALIGNMENT, `v2/docs/LEVELS.md`
- the sim tables in `v2/src/sim/game.js`: weapons, mobs, difficulties, player movement
- the four level maps, measured below

**Evidence used:**
- 21-run first-timer bot playtest (WARRIOR, 3 seeds × 7 personas, `pt-before/`)
- the 420-run bot report from 2026-09-25 (`captures/playtest-report.md`)
- level-lab results (`v2/docs/LEVELS.md`)
- browser check and screenshots of the build after the visual pass
- `GAMES_QUALITY_AUDIT_2026-09-07.md`

**Human evidence:** one line. The user played an early v2 and said "much better". Nobody has played
it unaided while being watched, so no gate that needs a person to understand or enjoy the game can pass.

The story is out of scope here: see `STORY_BIBLE.md`.

---

## 1. Verdict

**1 Pass · 14 Partial · 2 Fail · 0 N/A.**

Firebird is a well-engineered, well-verified prototype of a small game. The verification tooling is better
than most indie shooters have: level contract, level lab, persona bots, Riley's honesty check, and
screenshot baselines. What it lacks is the stuff players actually feel:
- **content:** 4 short levels, 3 weapons, 3 enemy types;
- **movement:** walk, run, jump, crouch;
- **story:** radio lines only;
- **a production engine.**

It is not better than Doom or Duke yet. It is better than them in exactly one way: **Riley**, a boss
who learns how you fight and tells you the truth about it.

| Gate | Verdict | Evidence (one line) |
|---|---|---|
| 0 Player fantasy | Partial | Identity sentence is strong (STYLE_GUIDE). Title now shows the Firebird. But in play you're a HUD face with a brass pistol; "being the flame" is text, not a power you feel. |
| 1 Proven / better / new | Partial | References named (Doom, Duke, DUSK, Ultrakill, CoD maps). The hook (Riley learns you; release, not kill) is in the playable. No `PROVEN_BETTER_NEW.md`, and nothing a player would call *better than Doom* besides Riley. |
| 2 First 10 seconds | Partial | Safe start (L1), radio line, door prompt, level card. First shot comes after the first door; ≤10 s / ≤30 s first win never measured on a human. |
| 3 Core loop | Partial | Move, shoot, key, door, exit works: bots clear 35/35 per level. Shallow: 3 weapons, 3 enemies. No resource-from-aggression loop (codex 3.1 "combat chess", contract C2). |
| 4 Game feel | Partial | Hitstop, knockback, recoil, shake, muzzle light, hurt wedges all exist. Movement has no dash, slide or air control. No video capture or human timing check (gate requires one). |
| 5 Readability | Partial | Cue language, torch pairs, goal marker, colour rules. Until b3a96a8 whole walls rendered as void. No human check. |
| 6 Progression | Partial | Par, medals, best times, unlocks, Riley remembers you across fights. No upgrades, no weapon growth, no reason past 4 levels. |
| 7 Content and pacing | **Fail** | 4 levels, roughly 40–170 s each for bots (≈ 10 min episode). 1 secret per level. Briefs and lab are excellent; the volume and variety are not there. |
| 8 Style and characters | Partial | Complete STYLE_GUIDE (Old Earth, shape and colour language, kid-safety). Enemies on screen are CC0 stand-ins (zombie, wolf) re-tinted; the Warden and Firebird have no authored model. |
| 9 Art and audio | Partial | Procedural textures, CC0 skinned models, synthesized audio. Coherent after the visual pass, but placeholder-grade next to DUSK or Prodeus. |
| 10 UX and trust | **Pass** | Menus, options, pause, retry close with fair gear (F1/P7), death tells you how to beat it, 3 difficulties, saves, no dark patterns (K2). |
| 11 Tech and performance | **Fail** (vs target) | Browser is fine (p95 6.4 ms on an RTX 4070 S), but the studio rule and the user's choice say UE5, and there is no UE project, no MCP loop, no packaged build. |
| 12 Reusable components | Partial | The contract, `tools/lab.mjs` and the persona bots are the studio's reference implementation. Riley follows `ai-infusion/RILEY_BOSS_SPEC.md`. None is ported to UE yet. |
| 13 Evidence | Partial | Strong [auto]/[bot] evidence: lab hard rules pass, 420-run playtests, frozen screenshot baselines. Zero human playtest notes; no gameplay video. |
| 14 Distribution | Partial | GitHub Pages `/v2/`, desktop shortcut, NIX GAMES site. No shareable artifact plan (clip, challenge, Riley's verdict card). |
| 15 Roadmap | Partial | LEVELS.md status table only; no staged roadmap or task graph until this doc (§7). |
| 16 Runtime AI | Partial | Riley is authored and rule-based. She picks only engine-legal moves; 0 false claims in 316 checks. The game is whole without her learning. No on/off A-B playtest yet. |

**Learning status line:** **draft.**
- `LILA_ALIGNMENT.md` declares the cell (Poles, Resonance, Mirrors, Remembering; wordless teaching dial).
- There is no `ASSESSMENT_SURFACE_DESIGN.md` and no player-learning rubric review.
- Riley's counters are a ready-made process trace (dodge side, range, weapon, standing still) but are not
  wired to any profile.
- Nothing here implies measured transfer.

---

## 2. Benchmark: Doom (1993), Duke Nukem 3D, and the moderns

Counts for the old games are standard published figures (shareware plus registered episodes).
Firebird counts are measured from `v2/src`.

| Axis | Doom (1993) | Duke Nukem 3D | Modern (Doom 2016/Eternal, DUSK, Ultrakill, Prodeus) | FIREBIRD v2 today | Gap |
|---|---|---|---|---|---|
| Campaign size | 3 episodes × 9 maps (27) | 3 episodes (4 in Atomic), ~29 maps | 13 (D2016) to 30+ (DUSK, Ultrakill) | **1 episode × 4 maps** | Huge |
| Time to finish | 1st episode ≈ 1–2 h first time | ≈ 1–2 h per episode | 8–15 h | ≈ 10 min for bots; humans unmeasured (K3 wants 5–10 min **per level**) | Huge |
| Level complexity | 1–3 keycards, many loops, 3–8 secrets per map, crushers, teleports | 2–3 keycards, very dense interactivity, many secrets | Arena-and-traversal rhythm; secrets plus collectibles | 0–2 keys, 1 secret per level, lifts, a drain set piece; lab finds 2–3 loops per level | Large |
| Verticality | Height only (no look up) | Jetpack, jump, crouch | True 3D, double jump, grapple | Real heights, jump, crouch, lifts | **Ahead of the originals**, behind the moderns |
| Weapons | 8 (fist to BFG) | 10, with alt uses (pipe bombs, shrinker, freezer) | 8–10, with mods and alt-fires | **3** (Ember Fist, Spark Caster, Bell Blaster) | Large |
| Enemy roster | 10 types with clear roles | ~15, including trooper variants and bosses | 15–30, built as "combat chess" | **3 + 2 bosses** (Hollow, Hound, Reset Warden; Riley) | Large |
| Movement tech | Fast strafing | Jetpack, swimming | Dash, slide, slam, wall-jump (Ultrakill); slide and flip (DUSK) | Walk, run, jump, crouch | Large |
| Push-forward combat | No (ammo hunting) | No | Glory kills, chainsaw ammo, style meter | No: health and ammo only from pickups | Large |
| Game feel | Snappy hitscan, iconic sounds | Huge personality and sound | Best-in-class juice | Hitstop, knockback, recoil, shake, light flashes | Close on systems, behind on art and sound |
| Story delivery | Text screens between episodes | One-liners and environment | Codex entries, environmental storytelling, cutscenes | Radio lines, level blurbs, an ending text screen | Large (see `STORY_BIBLE.md`) |
| A boss that knows you | No | No | No | **Riley:** learns your habits, says only true things, remembers you across fights | **Ahead** |
| Replay | Skill levels, secrets, speedruns | Secrets, Easter eggs | Mastery ranks, collectibles | Par, 4 medals, best times, Riley rematch line | Behind, but the right shape |
| Family fit | M-rated | M-rated | Mostly M | Kid-safe by design (release, not kill) | **Ahead** for Nix |

**Can it be better than Doom and Duke?** It can be better for its player. Nix gets a fast, readable,
kid-safe shooter with a coach who becomes the final exam. It can also be better on two of their axes
outright: true verticality and an adaptive, honest boss.

It will not beat them on content volume this year. The honest target is "the best first episode a kid has
played": 7–8 dense levels, plus the modern feel Doom never had.

---

## 3. What it needs next, by player impact

1. **A production engine and a first playable that feels good in the hands** (Gates 4, 11).
   - UE5 movement kit: dash, slide, jump with coyote time and buffer (≈ 100 ms, codex §4).
   - Input to visible response ≤ 100 ms.
   - Captured on video.
2. **Push-forward combat** (Gate 3, codex 3.1, contract C2). Make the Firebird fantasy a mechanic, not text.
   - The Ember Fist "releases" a staggered Hollow, and the freed light heals you.
   - The Bell Blaster rings a stunned Hollow for ammo.
   - Hiding must become a worse plan than pushing in (the [bot] check: a bot that holds still survives worse).
3. **A real enemy roster** (C3). Today it's fodder (Hollow), rusher (Hound) and heavy (Warden). Add:
   - a flier or sniper that punishes standing still;
   - a shielded enemy that must be flanked;
   - a summoner or "keeper" that buffs others.

   Each new enemy gets a solo first meeting (L3, U3) and a ≥ 0.5 s telegraph (codex §4).
4. **Weapons 4–6 with distinct jobs.**
   - A long-range piercer, a crowd-control arc, and one "big one" earned near the end.
   - Each has a secondary use, Duke-style. Upgrades come from secrets (R1 stays: never required).
5. **Levels with Doom-level density.**
   - 7–8 maps; 2–3 keys and 3+ secrets per map; loops back to a hub (S5).
   - One set piece per map (T3); finales that are the peak (U12 ≥ 60%; today 51–59%).
   - Every map gets the full contract loop.
6. **Story you play, not read.**
   - Environmental storytelling (T4), Riley's arc from coach to rival to ally.
   - A 30–60 s intro and an ending you watch (see `STORY_BIBLE.md`).
7. **Authored art and audio** (Gates 8, 9).
   - An authored Firebird and Hollow family, and a Warden that isn't a stand-in.
   - Bell-and-choir music and real foley.
   - No CC0 humanoids in the shipped game.
8. **Human evidence** (Gate 13).
   - The Nix test after every slice: §5 of the contract, unaided, notes kept.
   - Nothing human-facing is marked done on bot evidence.

## 4. What should wait

- Online, co-op and leaderboards: wait until the single-player loop earns them (Gate 15 rule).
- A level editor or mod tools (Prodeus-style).
- Episodes 2 and 3 (more than 8 maps).
- Any LLM in Riley: she stays rule-based (Gate 16) until an on/off A-B playtest shows a model makes her better.
- Store, capsule art and trailer: after the vertical slice passes its gate.
- Porting every v2 level one-for-one. Rebuild the best ideas, don't transcribe grids.

---

## 5. The UE5 vertical slice

**The trap to avoid.** The 2026-09-07 studio audit found Light Warrior's UE move had "the largest gap
between declared quality and visible result": a primitive character on a near-black floor, with tasks
marked done on automation evidence. Firebird's slice is judged on captured video, side by side with
DUSK or Prodeus, and on one unaided Nix playtest. Scripts passing does not count.

**What the slice must prove:** one level, about 8–10 minutes, that a stranger would choose over the v2 build.

| Proves | Concretely |
|---|---|
| Feel in the hands (Gate 4) | Dash, slide, jump (coyote + buffer), run speed ≈ v2's 5 cells/s (10 m/s); weapon switch < 0.25 s; hitstop and knockback ported from v2 numbers |
| The fantasy as a mechanic (Gates 0, 3) | Ember Fist release: stagger, then punch, then light bursts up and you heal. A bot that holds still survives worse than one that pushes |
| Combat chess (C3) | Hollow, Hound, Warden, plus 1 new role, each with a ≥ 0.5 s telegraph; one 3-role arena |
| Level craft (contract) | Rebuild **E1M2 The Furnace** as the slice: arrival overlook (S3), hub around the lava pit (C1 loop), two wings with 2 doors each (S5), the drain set piece (T3), the sealed forge finale (C5), 1 key, 3 secrets |
| Story beat | A 30 s intro in-engine (Ashgate under ash, the Firebird ignites), Riley on the radio, environmental storytelling in the forge (T4) |
| Look (Gate 8) | Lumen lighting; the cover's ember palette (STYLE_GUIDE "The Look In 3D"); authored Hollow, Hound and first-person arms; no CC0 humanoids |
| Full flow (Gate 10) | Title, difficulty, level card, play, death/retry ≤ 10 s, results with medals, back to title. Settings saved |
| Evidence (Gate 13) | 60 s gameplay video, 6 fixed-spot screenshots, a bot run through the UE automation driver, one human playtest write-up |

**Carry over from v2 (worth it):**
- **Riley's brain, `js/riley.js`:** the counters, the legal-move menu, the true-claim rule and the memory.
  - Port the logic to C++/Blueprint as data-driven rules.
  - Keep `tests/riley.test.js`-style cases as UE automation tests.
  - Keep the honesty check (claims vs independently counted facts).
- **The level contract and the lab.**
  - Briefs, the cue language (torch pairs; red and blue; the crack), and the [auto] rules (L1, N4, E2, F2, R1, S5).
  - Export each UE greybox to the same walk-graph format so `tools/lab.mjs` maths and the persona bots keep working.
  - Light Warrior's `LightWarriorAutomationDriver.cpp` is the template for in-engine bots.
- **Tuning numbers as the starting table:**
  - weapon damage and fire rates, mob hp, speeds, painChance;
  - difficulty multipliers;
  - retry-gear floor (100 hp / 50 sparks / 8 bell charges);
  - E2 ammo ≥ 1.3–2× enemy hp.
- **STYLE_GUIDE, LILA_ALIGNMENT, THEME_ALIGNMENT:** unchanged; they are engine-independent.
- **The OBITS death tips, the HUD information design, the medals and par system.**

**Leave behind:**
- procedural 128 px textures and the 320×200 canvas HUD (redesign the skin at real resolution);
- CC0 models and the synthesized SFX;
- the grid-only level format: UE greyboxes can do slopes, arches and domes, so use them (S1: domes, spires, star-fort bastions).

---

## 6. Style status

`STYLE_GUIDE.md` is complete: identity sentence, Old Earth slice, shape and colour language, characters,
weapons, pickups, world, HUD, audio, kid-safety. It now also has "match the cover" and "The Look In 3D".

**Missing for UE production:**
- an asset prompt-rules section, so generated assets come from one style (Gate 8);
- approved and rejected visual directions, with reference frames;
- per-character animation minimums and sound identity.

Write all three before the first UE asset is generated.

---

## 7. Staged roadmap

Each task is done only when its evidence exists. Human gates use the contract §5 protocol.

### Stage 1: UE first playable (engine foundation and feel)

1. UE 5.8 project `firebird-ue/` opens clean.
   - Native MCP plus Vibe UE enabled; `mcp.json` present; a fresh agent session confirms the connection
     (`UE5_AI_LEVEL_PRODUCTION_PATTERNS.md` §1, §9).
   - `GAME_MANIFEST.json` with `ue5_production_lane: handplaced`.
   - *Evidence:* editor screenshot plus log.
2. Movement kit (walk, run, jump with coyote and buffer, crouch, dash, slide) in a greybox test map.
   - *Evidence:* a 30 s video, and an input-latency measure ≤ 100 ms.
3. Three weapons ported with v2 numbers and full juice (hitstop, knockback, recoil, shake, muzzle light, impact decals).
   - *Evidence:* video, plus an automation test that each weapon damages a dummy.
4. Hollow and Hound with telegraphs ≥ 0.5 s, hearing, infighting, and the hound's flee.
   - Ember Fist release heals.
   - *Evidence:* video, and a bot run where a pushing bot outlives a hiding bot.
5. Gate check: the first-playable gate in `GAME_QUALITY_STANDARD.md`, then a 5-minute Nix playtest in the greybox.

### Stage 2: vertical slice, The Furnace (see §5)

6. Brief first (the codex §5 template), then greybox, then lab export (hard rules pass), then bot run (persona bots clear it, U12 ≥ 60%).
7. Story intro, Riley radio, the drain set piece, the sealed forge.
8. Authored Hollow, Hound, Warden and first-person arms through the Blender gate.
   - Recorded in `ASSET_MANIFEST.json`.
   - Colour judged in-engine under neutral light (contract lesson 2026-09-25c).
9. Lumen lighting and ember post-process; bell-and-choir music; foley.
10. Gate check: the vertical-slice gate.
    - Side-by-side capture vs DUSK and Prodeus.
    - A fresh-player test without explanation.
    - Write-up in `docs/PLAYTEST_NOTES.md`.

### Stage 3: production, Episode 1 (7–8 maps)

11. Riley ported: E1M1 spar and the Trial finale.
    - Honesty check as a UE automation test.
    - Mercy after 3 losses; a rest every 12 s or less.
12. Enemy roles 4–6 and weapons 4–6, each introduced alone (L3, L5), one new thing per map (A1).
13. Maps 1–8, following the contract recipe (arrival, hub, wings, set piece, breather, finale arena, aftermath).
    - Difficulty ramp: first-timer bot tries strictly rising, with ≥ 20 seeds per setting.
14. Story through levels, per `STORY_BIBLE.md`: environmental beats, intro and ending, Riley's arc.
15. Nix test on every map. A map isn't "human-played" until it is.

### Stage 4: launch candidate

16. A packaged Windows build that runs on the family PC at a 60 fps budget, measured.
17. Onboarding, settings (remapping, FOV, sensitivity, subtitles), and save slots.
18. Distribution: NIX GAMES site page, itch.io build, a 30 s trailer, and a shareable "Riley's verdict" card (Gate 14).
19. Learning: `ASSESSMENT_SURFACE_DESIGN.md` using Riley's counters as process traces. Report it as draft until it's reviewed.
