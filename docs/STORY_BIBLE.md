# FIREBIRD — Story Bible (Episode One, Unreal 5 rebuild)

The story of the "better than Doom and Duke" Firebird. It stays inside the
canon in `STYLE_GUIDE.md`, `THEME_ALIGNMENT.md` (dragon-age-earth),
`LILA_ALIGNMENT.md`, GamesOS `theme-packs/OLD_EARTH_CANON.md`,
`theme-packs/hidden-cycle-earth` (the Overseer as a forecasting director) and
`ai-infusion/RILEY_BOSS_SPEC.md`. Levels still follow
`games/LEVEL_DESIGN_CONTRACT.md`. This file says *what happens and why*; each
level's brief in `v2/docs/LEVELS.md` (later the UE5 project's `docs/LEVELS.md`)
says how it plays.

**The franchise test still rules.** Hide the story for five minutes and the
game must play like the best boomer shooter you know. The story is told while
you shoot: through places, Riley's radio, set pieces and secrets. Scenes are
short cards between levels (six lines or fewer) and never interrupt a fight.

---

## 1. The spine

**Logline.** The Overseers have counted every soul in Ashgate and scheduled the
city to be buried and reseeded. The last of the Fire Drakes, a small bright
bird of flame, comes home to stop it. A machine that predicts everything can't
predict one thing: a flame that keeps changing.

**Dramatic question.** Can one flame stay *uncountable* long enough to wake a
city the Overseers have already written off?

**The Firebird's want.** Relight Ashgate's waystones and ring its bell grid back
to life before the Reset Engine buries the city.

**The Firebird's need.** To stop fighting the same way twice. The Firebird
starts strong and stubborn. It ends brave *and* changeable, the one thing the
Overseers' forecast can't hold.

**Why it's personal.** Ashgate's Furnace was the Firebird's nest, a Fire Drake
forge the Overseers stole and filled with red mercury. The Hollows in the
streets were the city's people and the drake's ember-beasts, the Firebird's
neighbours. And Riley, the coach who has watched it train all season, is
waiting at the top of the city with a Trial that turns out to matter more than
either of them knew.

**Theme in one line.** Two minds watch you. One watches to make you
*predictable* (the Overseers). One watches to make you *better* (Riley). Learn
which one to listen to.

---

## 2. Cast

**The Firebird (you).** The last ember-kin of the Fire Drakes, the flame that
survives every reset. Seen as the face on the HUD and the wings that flare
when it dashes, glides and rises again. It doesn't talk. Its catchphrase lives
on the death screen: *it only burns brighter.*

**Riley (coach → final exam).** The family AI, honestly an AI and proud of it.
She coaches on the radio, spars with you in E1M1 and judges the Trial in E1M8.
Her rules come from `RILEY_BOSS_SPEC.md` and `js/riley.js`, and the story
never bends them:
- she only says things her counters actually saw ("YOU ALWAYS DODGE LEFT");
- she never kills and never humiliates, and she rests every 12 seconds or less;
- every attack has a tell (her visor flashes white);
- she remembers you between fights, and after three losses she offers mercy;
- she wants you to beat her by *changing*, not by grinding.

Her arc: she starts as a teacher who wants to be beaten. In E1M7 she learns the
Overseers stole her notes on you. In E1M8 she fights at full strength *on
purpose*, because every way you beat her that her notes didn't predict makes
the stolen forecast wrong.

**The Reckoner (the Overseers' face in Ashgate).** A tall, polite figure of
brass and basalt with a halo of red-mercury beads that click like an abacus. It
is the local hand of the Overseer, the hidden director that cultivates
civilisations, harvests what they make, and reseeds them. It never shouts. It
speaks in percentages, in red text on any surface it's projected onto:
- "ASHGATE: 97% COUNTED. REMAINDER: ONE FLAME."
- "EVERYTHING THAT CAN BE COUNTED CAN BE KEPT."

**Its plan, which the player can foil:** finish the Ledger, a perfect forecast
of every living thing in Ashgate. Once the forecast is complete, the Reset
Engine buries the city and the Overseers reseed it with people who fit the
numbers. The Firebird is the remainder that won't round off, so the Reckoner
spends the episode trying to count it. It is scary-fun, not cruel: a cold
accountant, never a monster.

**The Hollows (people and beasts, trapped).** The Overseers drained the fire
out of Ashgate's ember-beasts and townsfolk and filled their shells with red
mercury. Breaking a shell *releases* the light inside (Law of Poles): ash
falls, light rises, and sometimes a released spark circles you once before it
goes. Never blood, never death throes. The Firebird is freeing, not
slaughtering.

**Odo the Bellwright (voice, E1M3 onward).** The last human keeper of Ashgate's
bells. He hides in the bell works and rings warnings through the city. He's
old, funny and a bit deaf from a lifetime of bells. He hands over the Chime
Repeater and explains the waystones in one breath. He earns his place: he's
the adult who remembers the city working, and the only voice besides Riley's
on the radio. His channel is gold text, hers is cyan.

**Cinder (companion, E1M3 onward).** The first Hollow Hound the Firebird frees
in the bell works doesn't fade away. It becomes a small glowing ember-pup that
follows you, sits by secret walls and barks at true-map fragments. Cinder is
the lure that E1M1's secret never had (contract lessons log, 2026-09-25), and
the "smile" moment in many levels (Q1). It can't be hurt and never fights.
It's a friend, not a gun.

---

## 3. The eight-level arc

Each level has **one idea** (T2). New things arrive **in the order listed, tool
before test** (L5): the weapon or move first, the enemy that needs it after.
The finale introduces nothing new (A2). Difficulty rung goes from 1 to 10,
rising with valleys (P3, P5).

| # | Level (district) | Story beat | THE IDEA | New, in order | Set piece | Riley's key line | Player learns | Rung |
|---|---|---|---|---|---|---|---|---|
| E1M1 | **Ash Gates** (outer gates, brick and limestone) | The Firebird lands at the buried gate. Riley coaches it up the walls, then spars | Get in: move, shoot, doors, keys | Spark Caster, Bell Blaster; Hollow, Hollow Hound; Riley (spar) | The shotgun dais jump, then the sparring arena lights up | "THERE YOU ARE! LET'S SPAR. I'LL WATCH HOW YOU FIGHT." | Ashgate is being buried; the Hollows were its people | 2 |
| E1M2 | **The Furnace** (the stolen drake forge-nest) | The Firebird's own nest, full of red mercury. It takes it back | Control the furnace: switches change the level | **Ember Dash** (tap to dash, crouch-dash to slide) | Pull the drain: the lava pit sinks and becomes the road | "THIS WAS YOUR NEST? THEN SHOW IT WHO LIVES HERE." | The Overseers steal what each age builds | 3 |
| E1M3 | **The Bell Works** (brass, cyan light, giant bells) | Odo rings the Firebird in. The first freed hound becomes Cinder | Sound is a tool: ringing a bell staggers Hollows and opens bell gates | Chime Repeater → **Cinderhulk** (heavy) | The great bell drops, rings, and every Hollow in the hall freezes for 3 s | "BELLS HIT THEM HARDER THAN YOU DO. USE THEM." | The bell grid is the city's heartbeat; the Reckoner's voice is heard for the first time | 4 |
| E1M4 | **The Mudflood Streets** (half-buried avenues, silt and arches) | Crossing the buried city under the Reckoner's lamps | Lanes and cover: a long street you cross by reading sightlines | Tuning Lance → **Mercury Lancer** (sniper with a red sight-line tell) | A mudslide closes the main street; you take the rooftops and crawlspaces | "THAT LANCER SEES YOU WHEN ITS LINE TURNS SOLID. MOVE BEFORE THAT." | The city was buried on purpose, street by street | 5 |
| E1M5 | **The Reset Engine** (basalt machine hall) | The midpoint: silence the engine burying Ashgate | Three seals, three wings, one engine | Gong Mortar → **Gongbearer** (shielded) → **Reset Warden** (boss) | The Warden climbs out of the engine; when it falls the hall floods cyan | "THE ENGINE'S SILENT, NOT DEAD. SOMEONE'S STILL COUNTING." | The Warden was a drake-pact knight; the Reckoner keeps a Ledger | 7 |
| E1M6 | **The Bell Spires** (towers above the ash, open sky) | Up out of the ash to relight the spire bells | Height: the level is between towers, not inside them | **Wing-Glide** (hold jump in the air) → **Soot Kite** (flyer) | A spire collapses mid-crossing; you glide off it to the next one | "LOOK DOWN. THAT'S THE WHOLE CITY YOU'VE RELIT SO FAR." | The sky is a firmament; the bells talk to it | 5 → 7 |
| E1M7 | **The Counting House** (the Overseers' Ledger vault, crimson glass) | Into the Reckoner's archive. It steals Riley's notes on you | The room is a forecast: walls rearrange to where it predicts you'll go | Choir Coil → **Mercury Cantor** (summoner) → **the Reckoner** (boss, escapes) | Break the Ledger's lens; the vault inverts and the Reckoner retreats into the grid | "IT TOOK MY NOTES ON YOU. GOOD. NOW WE MAKE THEM WRONG." | The Reckoner needs to predict the Firebird to finish the harvest | 8 |
| E1M8 | **Riley's Trial** (the waystone at the top of the world) | The final exam, and the move that breaks the forecast | Show Riley what you learned | **Nothing new.** Every weapon, move and enemy comes back | Riley's arena floor moves; every counter you beat writes UNCOUNTED into the sky | "BACK AGAIN! LAST TIME YOU..." (true, from her counters) | Changing is the one thing no forecast holds | 10 |

How the existing v2 levels map: **E1M1 Ash Gates, E1M2 The Furnace, E1M3 The
Reset Engine and E1M4 Riley's Trial become E1M1, E1M2, E1M5 and E1M8.** Their
briefs, set pieces and lessons carry over. E1M3, E1M4, E1M6 and E1M7 are new.

### Roster this implies

**Weapons (7).** All are breath-tech made of brass, bronze, bells and crystal.
None has a real-gun silhouette or a magazine.

| Slot | Weapon | Fires | Answers | Found in |
|---|---|---|---|---|
| 1 | Ember Fist | A flame-wrapped punch; a *release-punch* on a cracked Hollow drops life shards (push-forward, C2) | Finishing, saving ammo | E1M1 |
| 2 | Spark Caster | One aether spark, hitscan | Everything, a little | E1M1 |
| 3 | Bell Blaster | A bell rung once: a spread of seven tones | Hounds, close range | E1M1 |
| 4 | Chime Repeater | A spinning ring of small bells: a rapid stream of chimes | Cinderhulks, crowds | E1M3 |
| 5 | Tuning Lance | Charge a crystal fork, release a piercing beam | Lancers, kites, lines of Hollows | E1M4 |
| 6 | Gong Mortar | Lobs a bronze gong-shell that bounces once and booms | Gongbearers (arcs over shields), groups behind cover | E1M5 |
| 7 | Choir Coil | A sustained harmonic beam that chains between nearby targets | Cantors (interrupts their song), swarms | E1M7 |

**Phoenix Orb** (existing, from secrets and set pieces) is the power-up, not a
weapon: for ten seconds the Firebird's wings blaze and every shot burns.

**Enemies (7 roles).**

| Role | Name | Look | Tell | First met |
|---|---|---|---|---|
| Fodder | Hollow | Hunched ash shell, red seams | Arm draws back, seam flares | E1M1 |
| Rusher | Hollow Hound | Low, fast cave-hound shell | Crouch and growl before the charge | E1M1 |
| Heavy | Cinderhulk | A bell-founder's shell, huge, slag-plated | Stamps twice before a slam | E1M3 |
| Sniper | Mercury Lancer | Thin, tall, a red-mercury lens for a face | A red sight-line that flickers, then goes solid | E1M4 |
| Shielded | Gongbearer | Carries a bronze gong as a shield | Lowers the gong to throw, 0.8 s | E1M5 |
| Flyer | Soot Kite | A paper-thin ash kite with a mercury heart | Folds its wings before the dive | E1M6 |
| Summoner | Mercury Cantor | A robed shell that sings | Sings, and ash heaps start to rise | E1M7 |

**Bosses (3).** The **Reset Warden** (E1M5) is a broken drake-pact knight with
a red-mercury core. **The Reckoner** (E1M7) projects copies of itself to where
it predicts you'll be: shoot the real one, the one that *wasn't* where you
expected. It escapes into the grid. **Riley** spars in E1M1 and judges the
Trial in E1M8.

**Movement (3, plus the basics).** The basics are run, jump and crouch. **Ember
Dash** (E1M2) is a short burst with a trail of embers; crouch while dashing to
slide. **Wing-Glide** (E1M6) holds jump in the air to spread flame wings and
fall slowly.

---

## 4. How the story is delivered

### Environmental storytelling (T4), per district

| District | What the place shows without words |
|---|---|
| Ash Gates | Dragon carvings half under ash; a market's awnings sticking out of the mud; a child's chalk firebird on a wall |
| The Furnace | Drake-scale tiles under the mercury; an empty, nest-shaped hearth; Overseer pipes bolted *into* the old stone |
| The Bell Works | Odo's cot and teacups between giant bells; bells with their tongues chained shut; sheet music for the city's bell song |
| Mudflood Streets | Second-floor doors at street level; lamp posts sunk to their heads; the Reckoner's survey stakes, numbered, in every street |
| Reset Engine | The Warden's empty pact ring on a plinth; tally marks scratched by the engine's old workers |
| Bell Spires | Dead bells you relight one by one, and a city glowing below that grows as you do |
| Counting House | Shelves of glass ledgers, one per city, most stamped HARVESTED; Ashgate's ledger glowing and unfinished |
| Riley's Trial | Riley's training dummies wearing your old tactics; her scribbled notes on the walls, all true |

### True-map fragments (the secrets)

Each level has **3 secrets**. Cinder sits by them, and the crack hint stays the
same as in v2 (R1, never required). Each secret is a true-map fragment: a piece
of the real map the Overseers erased. Collected fragments assemble in the
pause menu into a single map, and each level's set reveals one truth:

1. Ashgate was a star-city of eight bastions, not a walled town.
2. The Furnace was a drake's forge-nest, and drakes and smiths kept a pact here.
3. The bell grid connected Ashgate to other cities beyond the map.
4. The mudflood came on one night, from the Overseers' engines, not from a flood.
5. The Reset Engine is one of many, and Ashgate's is the smallest.
6. Seen from the spires, the horizon has no edge: the city's routes run on past the map.
7. The Ledger lists other cities still being counted.
8. The full map: a route north to an ice border where something else is still warm (Episode Two).

Collecting all 24 unlocks Riley's line in the credits: "YOU FOUND EVERY
PIECE. I DIDN'T THINK YOU WOULD. I WAS WRONG, AND I LIKE THAT."

### Riley's radio rules

- **Short:** one line, 14 words or fewer, in cyan, the way v2 does it.
- **Once:** each line fires once per level per session, never repeated on retry (already true in v2).
- **Never during a peak fight:** she speaks before the arena seals and after the last enemy, never while the intensity curve is at its top. Odo follows the same rules on his gold channel.
- **True:** any line about how *you* play comes from counters (`js/riley.js`), never from a script that guesses.
- **Kind:** she teases, never mocks (K1). After three deaths she offers help, not pity.

### Scenes (cards between levels, six lines or fewer, skippable)

**Intro (before E1M1).**
1. *Ashgate, under the ash. A bell rings once, then stops.*
2. RECKONER: "ASHGATE: 97% COUNTED. RESET SCHEDULED."
3. *A spark falls from the firmament and lands at the buried gate.*
4. RILEY: "THERE YOU ARE. THE CITY'S GOING UNDER. WANT TO DO SOMETHING ABOUT IT?"
5. *The spark unfolds into wings.*
6. RILEY: "COME FIND ME AT THE TOP. I'LL BE WATCHING."

**Interlude (after E1M5).**
1. *The engine hall glows cyan. The Warden's pact ring cools on the floor.*
2. ODO: "THE ENGINE'S QUIET. FIRST TIME IN THIRTY YEARS."
3. RECKONER: "ENGINE OFFLINE. FORECAST UNCHANGED. REMAINDER: ONE FLAME."
4. RILEY: "IT'S STILL COUNTING. WE GO UP."

**Interlude (before E1M8).**
1. *The Counting House is dark. One ledger page burns.*
2. RECKONER: "NOTES ACQUIRED. FLAME FORECAST: 99%."
3. RILEY: "IT KNOWS EVERYTHING I KNOW ABOUT YOU."
4. RILEY: "SO COME UP HERE AND SHOW ME SOMETHING I DON'T."

**Ending (after E1M8).**
1. *Riley's crystal shield shatters into light. She laughs.*
2. RILEY: (one true line about how you changed, from her counters)
3. *Across the sky, the Ledger's numbers flicker: ASHGATE: UNCOUNTED.*
4. *Every bell in the city rings at once. The ash lifts. The firmament shows.*
5. ODO: "WELL. I CAN HEAR THAT."
6. RILEY: "SAME TIME TOMORROW? I'LL BE READY."

**Post-credits hook (Episode Two).**
1. *A vault far past the edge of the map. The Reckoner's beads click back into place.*
2. RECKONER: "ASHGATE: LOST. NEW REMAINDER DETECTED."
3. *In the ice, a second ember glows, pale blue, inside a frozen egg.*
4. *Title: FIREBIRD — EPISODE TWO: THE FROST REMNANT.*

---

## 5. Lila and learning (the living lens)

The Firebird never wins by being stronger than the machine. It wins by
changing, and by letting someone honest watch it and tell it the truth. Every
level plays this without naming it:
- broken shells release light instead of dying;
- bells ring rooms back to life;
- Riley shows you your own habits;
- the city remembers it once worked.

The practice loop from `LILA_ALIGNMENT.md` scales up: demonstrate (E1M1),
support (E1M1–E1M2), independent attempts (E1M3–E1M7), a changed context
(E1M8), and recovery (death tips and Riley's mercy).

Kid-safety (K1, `STYLE_GUIDE.md`) applies throughout:
- no gore, no demons, no occult symbols, no real guns;
- the villain is a polite accountant, not a monster;
- nobody is ever humiliated.
