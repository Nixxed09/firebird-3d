# Firebird 3D — GamesOS theme alignment

## Primary pack

`D:\TE-Code\ProductOS\GamesOS\theme-packs\dragon-age-earth`
(pack id: **dragon-age-earth**)

Firebird takes the pack's operating truth literally: there was an age when dragons lived openly on
Earth, tied to forges, volcanoes, bells and weather. Firebird 3D is the last chapter of that age,
the Reset that ended it. The Overseers' red-mercury engines are burying Ashgate, an old star-city
that was built in the dragon age's shadow (its bells, furnaces and brass seams are dragon-breath
technology). You are the Firebird: the flame that survives every reset.

This sits on top of the world already shipped in v2 (`STYLE_GUIDE.md`, `LILA_ALIGNMENT.md`:
Ashgate, the Hollows, the Reset Warden, waystones). dragon-age-earth is the **deep history under
that world**, not a rival to it. It explains why the flame, the bells and the furnaces work, and
it decides how the words and art of both builds should talk about them.

## How Firebird expresses the dragon age

- **The Firebird is a dragon-age being.** It is the last ember-kin of the Fire Drakes (domain:
  volcano, forge, desert; function: heat, metal, purification). It is small and bright where the
  old drakes were vast, and it cannot be killed because purification is what a Fire Drake is
  *for*: "it only burns brighter." The Phoenix Orb is a drake-hoard ember, not a generic power-up.
- **The catastrophe is the Reset.** Dragons vanished, slept, fossilised or were hunted into myth
  (pack rule 6: disappearance creates myth, fossil and broken weather). The Overseers' engines
  finish the job, and burying a city is how they do it. The player is not fighting dragons;
  killing a dragon damages the land (pack rule 5), so **no real dragon is ever an enemy**.
- **The enemies are what the catastrophe left behind, not demons.** Hollows are corrupted
  elemental beasts: ember-kin whose fire was drained and swapped for red mercury, leaving a
  cracked ash shell. Breaking the shell releases the light inside (Law of Poles: release, never
  death, never gore).
- **The Ember Knight is a broken dragon pact.** In the dragon age a knight-rider of Ashgate swore a
  pact with a Fire Drake (pack pillar: Dragon Pacts). The Overseers broke it, hollowed the knight
  out and set a red-mercury core where the pact ring was. What the episode calls the **Reset
  Warden** is that knight. "Ember Knight" stays as the sim name in code and in old saves; the player
  reads *Reset Warden*, and the E1M3 intro tells the pact story in one line.
- **Breath is technology, not just a weapon** (pack rule 3). Every weapon is a form of held
  breath (see the table). The bells of Ashgate are breath-tech: a bell rung once carries a whole
  breath's tone.
- **Treaties matter more than domination** (pack rule 4). The episode ends on a waystone being
  relit, a pact remembered, not on a throne being taken. Riley's Trial is a rider's pact test: a
  sparring partner who proves you before she trusts you.

## Lila in this world

Unchanged from `LILA_ALIGNMENT.md`: Poles (Hollows released, not killed), Resonance (bells and
waystones), Mirrors (Riley reflects your fighting back), Remembering (secrets are true-map
fragments, and the dragon age is what they remember).

## Design translations

Level ids, map sizes and mechanics do not change. Only names, words and the art direction do.

### Episode One levels

| Level id | Original (classic) title | Player-facing title | What it is in the dragon age |
| --- | --- | --- | --- |
| `E1M1` | ASH GATES | E1M1: ASH GATES | Ashgate's outer gates, buried in ash. A dragon-age city entrance where the wall carvings still show the old drakes. Riley coaches. Teaches move, doors, keys and the first Hollow |
| `E1M2` | THE FURNACE | E1M2: THE FURNACE | A Fire Drake's forge-nest, stolen: the Overseers fill it with red mercury. Draining it returns clean fire. The hoard is regulated heat, not treasure |
| `E1M3` | DEMON THRONE | E1M3: THE RESET ENGINE | The engine burying Ashgate, standing on the site of an old drake pact. The Reset Warden (the Ember Knight) guards it. Silencing it is the episode's Wake-The-Mountain beat: stop the Reset before it breaks the continent |
| `E1M4` | RILEY'S ARENA | E1M4: RILEY'S TRIAL | A sealed waystone arena, and a rider's trial. Riley (honestly an AI) tests you with what you have shown her. Ends the episode on a relit bell grid |

### Enemies (every type in `MOBS`, `js/engine.js`)

| Sim kind | Original name | Player-facing name | What it is |
| --- | --- | --- | --- |
| `imp` | Imp | HOLLOW | A drained ember-beast in an ash shell, throwing **mercury embers** (its old fire, gone red). Hunched, thin, cracked crust with light leaking from the seams |
| `gnasher` | Gnasher | HOLLOW HOUND | The low, fast form: a cave-hound of the drake's territory, hollowed the same way. Bites, then flees when cracked. It runs because part of it remembers being a guardian |
| `knight` | Ember Knight | RESET WARDEN | A broken dragon pact: a knight-rider of the Fire Drakes, hollowed by the Overseers and fitted with a red-mercury core. The E1M3 boss. Tall, armoured, slow, never a demon |
| `riley` | Riley | RILEY | Unchanged. The family AI as a sparring hologram: the pact-trial judge who tells you something true about how you fought. Never mocks the player |

### Weapons (every entry in `WEAPONS`, `js/engine.js`)

| Sim key | Original | Dragon-age reading (v2 display name) | Note |
| --- | --- | --- | --- |
| `fist` | Fist | Ember Fist: held breath, a flame-wrapped punch | Silent, never runs out |
| `pistol` | Pistol | Spark Caster: one measured breath-spark, hitscan | Ammo: sparks (spark cells) |
| `shotgun` | Shotgun | Bell Blaster: a drake-bronze bell rung once, seven tones | Ammo: bell charges |

v1 keeps the classic weapon and ammo wording on screen (`FIST / PISTOL / SHOTGUN`, `BULLETS /
SHELLS`) because `tests/headless.test.js` pins those strings. The v2 art pass and v2's own text
already use the names above. Renaming v1's HUD is a later, deliberate change, not part of this one.

### Everything else the player meets

| Game element | Theme rule |
| --- | --- |
| Exploding barrel (`o`) | Mercury cask: red mercury in brass bands. Shoot one and it bursts. Never a hazard-stripe drum |
| Keycards, keyed doors | Kept as keycards in v1 (tests pin the words); v2 says keystones. Both are pact-tokens |
| Exit switch | A waystone you relight |
| Torch pairs | Brass-caged drake-fire, the "follow me" cue |
| Secret areas | True-map fragments: what the dragon age looked like before the Reset |
| Phoenix Orb | An ember from a drake's hoard. The flame that survives resets |
| Progress | Dark, silent Ashgate becomes lit, warm and safe to cross |

## Words

- Say **Hollow**, **Hollow Hound**, **Reset Warden**, **mercury ember**, **mercury cask**,
  **waystone**. Do not say demon, imp, gnasher, hell or fireball in player-facing text.
- Never say a dragon is killed, slain or hunted by the player. The Firebird releases, relights, remembers.
- One dragon-age idea per line, not a lecture. Riley's radio names it lightly.

## Art direction for the v2 art pass

Another session is authoring v2 art on `codex/*` branches right now (`codex/assets`,
`codex/asset-integration-final`). This section is what that work should follow. This packet does
not touch `v2/` or any art file.

**Visual thesis:** ancient ecology with sovereign scale, seen through Ashgate's brass and bells.

**Palette** (dragon-age pack, merged with the colour language already fixed in `STYLE_GUIDE.md`):

| Role | Colours |
| --- | --- |
| Fire and forge | volcanic ember, basalt black, mineral gold (the Firebird, torches, pickups) |
| Old stone and life | bone white, moss green (moss on old carvings only, sparingly) |
| Sky and restored power | storm blue, aether cyan (relit waystones, Riley) |
| Corruption | red-mercury crimson and glossy black-red, cave violet as the shadow colour |
| Ground | night black, ash white, silt brown |

The existing rules stand: crimson means danger, cyan means power restored, amber means pick it up,
and they are never swapped.

**Silhouettes:**

- Hollows: hunched, thin, cracked ash crust. Ember-beast proportions (a small wyrmling's neck and
  tail stub) instead of a horned humanoid. A soft crimson glow in the seams.
- Hollow Hounds: low, long, four-legged, with a drake's ridge along the spine.
- Reset Warden: tall armoured knight-rider. Empty saddle-ring or broken pact ring on the chest,
  red-mercury core, drake-scale plates gone grey. Reads as sad and grand, never as a devil.
- Environment: basalt, forge scars, brass bells, star-fort bastions, wall carvings and murals of
  drakes (Fire Drake mural in E1M2, a fossil-wing arch in E1M3), cracked mountain fault lines.
- Dragon presence is memory, never a live enemy: murals, fossils, cold hoard-nests. Use ribs and
  wings as architecture, not skulls.

**Avoid:**

- Demons, horns-and-pentagram hell iconography, skulls as decoration, gore, blood.
- The generic Western fantasy dragon on a pile of gold coins; treasure-for-treasure's-sake hoards.
- Cute cartoon dragons; a live dragon boss (killing a dragon damages the land).
- Real-world guns and hazard-stripe industrial props. Casks are brass-banded mercury, not drums.
- Any new palette that turns cyan into a danger colour or crimson into a reward colour.

## Limits

Keep the Old Earth setting vast and layered. Ashgate is one buried city in a much larger age.
Distant land ends in haze and ash, not a visible world edge. The theme must pass the franchise
test: hide it for five minutes and this is still a good boomer shooter. It adds meaning; it never
slows the shooting.

`node tests/theme.test.js` guards this file: it names dragon-age-earth, lists every level and
every enemy type in a translations table, and pins level ids and map sizes.
