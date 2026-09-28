# Style Guide: FIREBIRD 3D

The source of truth for how FIREBIRD looks, sounds and reads. It follows
`D:\TE-Code\ProductOS\GamesOS\docs\GAME_STYLE_AND_CHARACTER_DIRECTION.md` and
sets the game inside the shared Old Earth world
(`GamesOS\theme-packs\OLD_EARTH_CANON.md`), like every NIX GAMES title. Read
`LILA_ALIGNMENT.md` for the laws the game runs on.

## Identity Sentence

A fast, bright retro-modern shooter: the Firebird tears through Ashgate, a
buried Tartarian star-city, and cracks the Overseers' Hollows open to free the
light trapped inside them, while Riley coaches over the radio.

## The Old Earth Slice (Crossover Rules 0-7)

| Rule | FIREBIRD |
|---|---|
| Slice | The reset hits one city: the Overseers' red-mercury engines are burying Ashgate under ash and mud. You're the one flame a reset can't put out |
| Primary era | The Overseer Reset Age. Tartaria appears only in the ruins, the bells and the brass |
| Core technology | Fire resonance: the Firebird's flame, carried by Tartarian bells and spark cells |
| Supporting tech | Red mercury (the Overseers' fuel: the lava and the casks), star-fort geometry, keystones |
| Lineage | Dragon breath > stone singing > Tartarian bells > the Bell Blaster in your hands |
| Resets explain | Sealed doors, drained grids, Hollows walking the streets they used to live in |
| Victory | Every exit is a **waystone** you relight. The episode relights Ashgate's bell grid, and Riley's Trial crowns it |
| Connection points | Riley (the same Riley as in Living Quarry; her Trial is `ai-infusion/RILEY_BOSS_SPEC.md` home B); the Hollows (the same enemy family as in Living Quarry); secrets are **true-map fragments**; the Phoenix Orb (the flame that survives resets: `hidden-cycle-earth`); red mercury (`tartaria-unveiled`) |

The theme must pass the franchise test: hide it for five minutes and the game
still plays like the best boomer shooter you know. The Old Earth layer adds
meaning. It never slows the shooting down.

## Reference Mix

- Proven reference: Doom (1993) and Duke Nukem 3D for pace, keys and secrets; DUSK and Ultrakill for the retro-modern look; Call of Duty 1 multiplayer maps for loops and balance.
- Better direction: every fight releases light instead of spilling blood, and every level ends by switching something back on.
- New signature: the Firebird's flame against the Overseers' red mercury, with Riley as the coach who becomes the final boss.

## Shape Language

- Primary silhouettes: domes with rib geometry, spires and finials, arches, star-fort bastions, bell towers.
- Repeated forms: the eight-point star (paving, bastions, the muzzle flash), rings (bells, keystones, waystones), thin bronze seams running through stone.
- Enemies: hunched, hollow shells. A cracked ash crust with red-mercury light leaking from the seams.
- Forbidden: demons, horns-and-pentagram hell iconography, skulls as decoration, gore, modern military guns, hazard-stripe industrial as the default look.

## Color Language

| Use | Family |
|---|---|
| Tartarian stone | warm limestone, pale granite, ash white |
| Mudflood layers | silt brown, soot, dark brick |
| Conductive metals | aged brass, bronze, copper |
| Restored power (good) | aether cyan, pale blue, white-violet |
| Reward / highlight | solar amber and gold (pickups, the Phoenix Orb, torches) |
| Overseer / danger | red mercury: deep crimson, ruby, glossy black-red; basalt black |
| Riley | aqua and white (her crystal shield) |

Crimson means danger: lava, Hollow seams, enemy projectiles, hurt markers.
Cyan means power you restored: lit waystones and relit grids. Amber means
something to pick up. Never swap them.

## Character Direction

- **Player:** the Firebird (the face on the HUD). Always bounces back ("it only burns brighter").
- **Riley:** the coach, honestly an AI, from `GamesOS\ai-infusion\RILEY_BOSS_SPEC.md`. She never humiliates, she tells you something true about how you fought, and her crystal shield shatters into light when she loses.
- **Hollows** (`i`, sim kind `imp`): ash-shell husks the Overseers fill with red mercury. They throw mercury embers. 40 hp.
- **Hollow Hounds** (`g`, sim kind `gnasher`): low, fast chargers that bite and flee when they're hurt.
- **Reset Warden** (`K`, sim kind `knight`): a tall armoured Overseer construct with a red-mercury core. The E1M3 boss.
- **Mercury casks** (`o`, barrels): red mercury in brass bands. Shoot one and it bursts.
- **Defeat reads as release, not death** (Law of Poles): the shell cracks, ash falls, and the light inside goes up. No blood or gibs anywhere.
- Animation personality: snappy and readable, with a clear windup before every attack (telegraphs, contract rule C3).

## Weapons

The weapons feel exactly like the Doom classics; only their fiction changes.

| Slot | Name | Fires | Ammo (HUD) |
|---|---|---|---|
| 1 | Ember Fist | a flame-wrapped punch; silent, never runs out | none |
| 2 | Spark Caster | a single aether spark, hitscan | SPARKS (`SPRK`), from spark cells |
| 3 | Bell Blaster | a Tartarian bell rung once: a spread of seven tones | BELL CHARGES (`BELL`) |

- Built from brass, bronze and a crystal core. There are no magazines, and no rifle or pistol silhouettes taken from real guns.
- Spent spark cells still eject and tink, because the feel is worth keeping.
- The flash is a star (cyan-white for the Caster, gold for the Blaster). Hits scorch walls and chip stone, and strikes on bronze throw sparks.

## Pickups

| Map char | Name |
|---|---|
| `h` | life shard (+10) |
| `+` | healing crystal (+25) |
| `b` | spark cell |
| `a` | bell charges |
| `A` | brass ward (armor) |
| `2` | the Bell Blaster |
| `r` / `u` | red / blue keystone |
| `P` | Phoenix Orb |
| `*` secret | a true-map fragment |

## World Direction

- **Ashgate districts:** the outer gates (brick and limestone), the Overseer foundries (basalt and red mercury), the bell works (brass and aether), the reset engine (basalt, the Warden's throne), and Riley's Trial (a sealed waystone arena).
- **Props:** bells, domes, finials, torches in brass cages, keystone doors, mercury casks.
- **Scale:** 1 cell = 2 m. Civic spaces are tall (5-11 m) so the domes and spires read.
- **Materials:** geopolymer limestone with thin bronze seams, dark mudflood brick, aged brass panels, aether-lit resonance panels, and Overseer basalt with ruby seams.

## UI And HUD Skin

- HUD tone: the classic Doom bar (face, health, armor, arms, ammo) in soot and brass, with chunky pixel type.
- Feedback states: crimson for hurt, amber for pickup, cyan for restored or opened.
- Menus: dark panels, the Firebird logo, Riley's radio in aqua.

## Audio Identity

- Music: driving and warm, with bell and choir colour over the drums. Never horror drones.
- Weapons: the Spark Caster is a sharp crack with a bright chirp; the Bell Blaster is a punchy boom with a ringing bell tail.
- Hollows: hollow knocks, dry rasps and a glassy crack when they break. No screams.
- UI: soft bell ticks and chimes.

## Kid-Safety Rules

Nix plays this game. So:

- no blood, gore or body parts;
- no demonic or occult symbols;
- no real-world guns;
- enemies are released, never tortured;
- Riley never mocks the player.

These rules sit on top of the Level Design Contract (`games/LEVEL_DESIGN_CONTRACT.md`).
