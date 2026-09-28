# LILA_ALIGNMENT - FIREBIRD 3D

Declares FIREBIRD's cell in the Lila grid
(`D:\TE-Code\ProductOS\GamesOS\lila\README.md`). The look and names are in
`STYLE_GUIDE.md`. The game keeps the laws physical: you learn them by pushing
in, fighting and watching the city answer.

## The Cell

| Axis | This game |
|---|---|
| Pillar | 2, Knowledge / Historical: take back a buried city's true memory from the Overseers who are erasing it. There's a strong thread of Pillar 1 too: the courage to push in instead of hiding |
| Plane(s) | Aetheric. The city's bell grid, the Firebird's flame and the Overseers' red mercury are all field states |
| Octave | Asleep > brave > clear. Early on, dark rooms hide tells and the city is silent. The more you push, the more of Ashgate lights up and the better you read the Hollows' windups |
| Hand of laws | Poles, Resonance, Mirrors, Remembering |
| Teaching dial | Wordless in combat. Named lightly in Riley's radio lines and the level blurbs, and never lectured |

## Why These Laws

**Poles (convert, don't kill).** A Hollow is a person's light trapped in an
ash shell by the Overseers. When you break the shell, the light goes up. The
fx, the sounds and the words all show release, never death or gore.

**Resonance.** The Bell Blaster and the city's bell grid run on tone. Waystones
relight when you reach them, and cleared set-piece rooms light up again (E1M2's
drained furnace, the forge's lights). What you bring into a room changes it.

**Mirrors.** Riley reflects your fighting back at you. In the sparring match
(E1M1) she watches. In her Trial (E1M4) she says something true about what
you did ("LAST TIME YOU..."), from counters the fight produced (`js/riley.js`).

**Remembering.** Secrets are true-map fragments. The ending text reveals the
Firebird as the flame that survives every reset. The campaign is the city
remembering it once worked.

## The Tight Loop

1. You see a dark, sealed part of Ashgate and something bright inside it: a torch pair, the furnace tower, a keystone.
2. You push in instead of waiting.
3. The Hollows' tells come into view, and you read them and fight.
4. The world answers: shells crack into light, doors open, lava drains, rooms relight.
5. The level ends when you relight its waystone.

## Riley (the AI-infusion link)

FIREBIRD is the browser build of **home B** in
`GamesOS\ai-infusion\RILEY_BOSS_SPEC.md` ("RILEY: Arena", the Doom-style
shooter with Riley as final boss). The spec's rules hold here:

- she never kills or humiliates you;
- every attack has a visible tell;
- she has a Rest window;
- phase 3 uses what she saw you do;
- she's honestly an AI.

Her brain is scripted and deterministic (`js/riley.js`), which is the spec's
offline mode. Model-picked tactics can come later through the gateway, without
changing the fight's rules.

## Player Learning

The practice loop is spatial reading under pressure:

- **Demonstrate:** E1M1 is guided by Riley's radio.
- **Support:** E1M1 ends in the sparring match.
- **Independent attempt:** E1M2 and E1M3.
- **Changed context:** E1M4 (Riley's Trial).
- **Recovery:** death tips that say what killed you and how to beat it.

What the bots measure (lost time, intensity curves, where players stall) comes
from `v2/tests/flow.js`. When this game gets its `LEARNING_CONTRACT.json`, it
reuses those measures as evidence.
