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

## Status

| Level | Built with height | Bot-played | Human-played |
|---|---|---|---|
| E1M1 Ash Gates (with Riley's sparring arena) | yes | needs a rerun after this change | the user played the earlier v2 E1M1 ("much better") |
| E1M2 The Furnace | yes, rebuilt to the full contract | yes (first-timer bot clears it; intensity peaks at the forge) | no |
| E1M3–E1M4 | not yet (classic flat layouts) | yes | no |
