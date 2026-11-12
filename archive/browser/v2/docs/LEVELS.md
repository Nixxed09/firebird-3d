# FIREBIRD 3D v2 levels

Levels follow the shared Level Design Contract
(`games/LEVEL_DESIGN_CONTRACT.md` in the Phoenix workspace). Each level gets
a brief here before it's built or changed.

## Cue language (rule N2)

- **A pair of torches beside a door:** this door matters (key doors, the way
  on, the boss arena).
- **Red / blue:** keycards and their doors, coloured the same on the automap.
- **A faint crack on a wall:** it might be a secret. Never required.
- **Riley on the radio (cyan text):** she tells you what you need to know
  as each new thing comes up, once per level.
- **Her visor flashing white:** she's about to shoot. Move.

## E1M1: Ash Gates (v2)

```
ROLE IN ARC:  intro, and the first meeting with Riley
TEACHES:      look/move, doors (E), shooting, jumping (the shotgun dais),
              barrels, keys and locks, lifts, and Riley's white-visor tell
TESTS:        nothing yet. This is where everything starts.
PLAYER GOAL:  find the blue keycard, then defeat Riley
CRITICAL PATH: start room -> door -> stairs up -> shotgun room (jump to the
              dais) -> balcony over the great hall -> down to the blue key
              -> blue door -> lift -> supply room -> Riley's arena
BEATS:        start (safe, Riley says hi on the radio)
              / first door (radio: E opens doors)
              / one imp alone (first fight)
              / shotgun on a jump-only dais (radio: jump with Space)
              / imp beside barrels (barrels explode)
              / balcony view: the blue door is visible before the key (lock
                before key; radio says where the key is)
              / the key under torches / the blue door, then a lift up
              / supply room: armour, medikit, no enemies (a breather before
                the boss; radio warns about her visor tell)
              / arena: 9 m ceiling, six pillars for cover, jumpable side
                ledges for high ground, health on both sides, shells centre
              / Riley sparring
LANDMARKS:    torch pairs at every door that matters, and the lit arena
OPTIONAL:     the cracked secret wall beside the start room (orb and shells)
DIFFICULTY:   Riley at 40% health, only volley, lead, flank, close, backoff and
              seek (no summoned imps, no shield, no phases)
PAR:          4:00
FIRST CONFUSION: where the blue key is. The radio says so from the balcony,
              and the goal marker shows it once seen.
```

**The boss fight is a sparring match.** Riley taps out when her health runs
out, says (truthfully, from `js/riley.js`) how many hits you landed and with
what, then adds "THAT WAS JUST PRACTICE. I'LL REMEMBER HOW YOU FIGHT."
Beating her ends the level. She saves the fight, so the full E1M4 fight
opens with "BACK AGAIN! LAST TIME YOU..." about how you fought her here.

**Data:** `boss` and `triggers` in `src/levels.js`. Radio lines fire once
per level per session, so retrying after a death doesn't repeat them.

## E1M2: The Furnace (v2, the first level built to the full contract)

```
THE IDEA:     control the furnace: drain the lava to open the way
FANTASY:      breaking into a demon forge and turning its machine against it
ROLE IN ARC:  ramp; the first level with a hub, branches and loops
TEACHES:      lava (hurts, demons avoid it), switches that change the level,
              sealed-arena waves
TESTS:        jumping (switch ledge), stairs, keys and doors, barrels, lifts of E1M1
PLAYER GOAL:  find the red keycard -> find the exit switch
WEENIE:       the glowing furnace tower in the lava pit, seen from the first step
              and from most of the hub (S2)
ARRIVAL:      a high gantry over the hub (S3, overlook), with two staircases and
              a drop: three ways down (M1)
HUB:          the foundry floor circles the lava pit: left or right around it
              (C1 loop, M1 lanes), four tech pillars for cover (M2, M6)
WINGS:        west = the coal bunkers (stone, dark, one flickering lamp, imps you
              hear before you see; the drain switch up on a ledge)
              east = the cooling tanks (metal, blue light, gnashers; a railed
              stair up to the tank tops with the red key and armour, an overlook)
              each wing has two doors into the hub: a loop through it (S5, M3)
SET PIECE:    pull the drain switch -> the screen shakes, the pit drains and rises
              into floor: a new middle lane straight to the red door (T3, S5 shortcut)
OPEN LOOPS:   the lava pit and the red door, both visible from the arrival (P4)
FINALE:       the forge (hellrock): step in -> doors seal, "IT'S A TRAP!", then
              wave 1 (2 imps + gnasher), then wave 2 (2 gnashers + 2 imps). Side
              platforms for high ground, pillars to circle, a lava channel to
              jump, ammo and health inside (C1-C5). Cleared -> door reopens and
              the plinth in front of the exit sinks.
SECRET:       a cracked stone wall at the bunkers' south end: Phoenix Orb and shells
INTENSITY:    2 3 2 3 2 4 5 3 8 9 2 (arrival, hub, bunkers, switch, tanks, forge)
THREE MOMENTS: the reveal (the furnace from the gantry), the set piece (the drain),
              the smile (Riley: "THAT WAS AWESOME")
BUILT BY:     tools/build_e1m2.py (edit that, then check with node tools/lab.mjs 1)
```

**Lab (node tools/lab.mjs 1):** passes every hard rule. Loops 2, lanes 2, the
goal is in view by 46% of the route, 4 overlooks, 0 jump-scares, 5 districts, 8
floor levels, 13 blocks to circle. Soft miss: range mix 0.55 (want 0.6).

**Caught by testing:**
- The lab found the red-key platform unreachable (its stair met it diagonally).
- The bots found the stair's ceiling too low to climb.
- Bots also tried to jump onto the stair from its side, so it now has a rail: you
  climb it from the bottom (S6).

## E1M3: The Reset Engine (v2, Old Earth, built to the full contract)

```
THE IDEA:     shut down the engine that's burying Ashgate
FANTASY:      breaking into the Overseers' machine room and switching the city back on
ROLE IN ARC:  the peak before Riley's Trial; the first level with a real boss
TEACHES:      levers as the level's objective (the HUD counts them: 0/3), a lift up to high ground
TESTS:        everything so far: stairs and a railed climb (bell tower), mercury and a bridge
              (foundry), a lift (gallery), sealed-arena waves, casks
PLAYER GOAL:  pull the three seal levers -> beat the Reset Warden -> relight the waystone
WEENIE:       the engine core in the hall's mercury moat, seen from the first step out of
              the street (S2); the waystone itself is hidden behind the engine by design
ARRIVAL:      a low, dark, buried street (compression), then the balcony breaks out high
              over the hall (release, S3): two stairs and a drop, three ways down (M1)
HUB:          the engine hall: a ring around the moat and core, brass pylons for cover,
              the sealed corridor north with a torch pair marking it
WINGS:        west = the bell works (Tartarian limestone, cyan light): the lever is up the
              bell tower, whose railed stair you climb from the bottom
              east = the mercury foundry (basalt): cross the stone bridge over a mercury
              channel to the lever, with hounds on the floor and a Hollow on the island
              north-west = the gallery: take the lift up; the lever and a view over the hall
              each wing has two doors into the hall: a loop (S5)
SET PIECE:    each lever drops one seal block in the corridor with a shake, and Riley names it
FINALE:       the engine room: step in -> both doors seal, "THE RESET WARDEN!", and it climbs
              out of the engine. Hollows join at 14 s, and hounds and a Hollow at 30 s.
              Side platforms for high ground, pillars, a low wall and two mercury channels.
              The Warden falls -> the mercury drains, the crimson lights go out, the room
              floods cyan (the city relit), the doors open, and the plinth sinks off the waystone
SECRET:       a cracked limestone wall at the bell works' south end: Phoenix Orb and a brass ward
INTENSITY:    1 2 3 2 3 4 3 4 3 5 9 10 3 (street, balcony, hall, bell tower, foundry, gallery,
              corridor, Warden, adds, relit)
THREE MOMENTS: the reveal (the engine from the balcony), the set piece (a seal dropping),
              the smile (the room turning cyan; Riley: "THE CITY'S LIGHTS ARE COMING BACK")
BUILT BY:     tools/build_e1m3.py (edit that, then check with node tools/lab.mjs 2)
```

**Lab (node tools/lab.mjs 2):** passes every hard rule: 3 loops, 2 lanes, 4
overlooks, 0 jump-scares, 4 wall materials, 8 floor levels and 18 blocks to
circle. It has two soft misses:
- The goal is seen late (the waystone is behind the engine on purpose; the core
  is the landmark instead).
- The range mix is 0.50 (the hall is big).

**Sim test:** `E1M3 plays out` in tests/sim.test.js drives the whole story.

**New in the sim:** `levers: [[x, z], ...]` plus `leverGoal` in level data. The
HUD objective counts them, and `goalTarget()` points at the nearest lever you've
seen (with `use: {x, z}` for bots).

## E1M4: Riley's Trial (v2, rebuilt to the Level Design Codex)

```
LEVEL:          E1M4 RILEY'S TRIAL, FIREBIRD v2, genre module 3.1 (the contract)
MOMENT:         M4 climax and M5 ending: the episode's final exam (A2: nothing new)
THE IDEA:       show Riley what you learned
FANTASY:        reaching the top of the world and proving yourself to your coach
BEATS:          introduce: the peak ledge, the courtyard below, Riley's arena glowing past the gate
                develop:   two trials in either order: Ash (jump-stair or lift, E1M1's lessons)
                           and Mercury (find the switch, drain the pool, E1M2's lesson)
                twist:     44 s into the fight, the floor moves: four stones rise and change the cover
                conclude:  Riley taps out; the episode ends on her line and the ending text
FIRST SAFE CASE: the first Hollow stands alone far below the ledge; the first hound stands alone
                across the mercury wing (lab U3: 2/2)
WEENIE:         the aqua arena and its beam past the torch-paired gate, seen from the ledge (S2: 19/34)
LOOPS:          each trial wing has two doors into the courtyard; the Ash trial's lift is the way down
DENSITY:        lab U10: the longest quiet stretch is 6 cells
VARIETY:        courtyard (open, a lone Hollow), Ash (vertical, climbing), Mercury (a switch, then a wave
                off the island), the arena (a boss with high ground and pillars)
PEAK:           Riley's fight, last; nothing after it but her line and the ending (U12)
FAILURE:        Riley's rules (RILEY_BOSS_SPEC): a rest every 12 s or less, telegraphs, mercy after 3 losses
THREE MOMENTS:  the reveal (the courtyard and the arena from the ledge), the set piece (the drain),
                the smile (Riley tapping out)
BUILT BY:       tools/build_e1m4.py; check with node tools/lab.mjs 3; sim test "E1M4 plays out"
```

**Lab (node tools/lab.mjs 3):** passes every hard rule and every soft rule except M2
(range mix 0.33; the arena is open on purpose, and the rising stones add close cover
mid-fight).

## Status

Bot evidence: `node tests/playtest.js` (bots that know the map) and `--first-timer`,
105 episodes each, on f9197f6 (2026-10-06). The targets are the Level Design Codex's.

| Level | Built | Lab (hard rules) | First-timer bots: ends on its peak (U12) / lost (U7) / clears W, B | Human-played |
|---|---|---|---|---|
| E1M1 Ash Gates | yes, with a shortcut gate and the spar as the climax (Riley alone for 16 s, then 4 Hollows) | all pass | 51% / 2% / 35/35, 35/35 (ff37895) | the user played an early v2 ("much better") |
| E1M2 The Furnace | yes, forge reworked (overlapping waves; the last wave takes the high ground) | all pass | 57% / 1% / 35/35, 32/35 | no |
| E1M3 The Reset Engine | yes, Old Earth, three seals, the Warden opens as a duel | all pass | 54% / 0% / 34/35, 26/32 | no |
| E1M4 Riley's Trial | yes, rebuilt to the codex | all pass | 59% / 0% / 33/34, 21/26 | no |

Open:
- Bots that know the map end high less often on E1M2 (48%) and E1M3 (40%).
- On ROOKIE, standing still against the Warden isn't punished. That's acceptable on the easiest setting.
- The E1M1 first-timer quiet stretch at the stone gate (31 s) is a bot frontier artifact: the gate cells are raised floor.
- **The real test left is human: the Nix test (Q3).**
