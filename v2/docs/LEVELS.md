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

## Status

| Level | Built with height | Bot-played | Human-played |
|---|---|---|---|
| E1M1 Ash Gates (with Riley's sparring arena) | yes | needs a rerun after this change | the user played the earlier v2 E1M1 ("much better") |
| E1M2–E1M4 | not yet (classic flat layouts) | yes | no |
