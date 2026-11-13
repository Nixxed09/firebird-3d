# Pack forge: making our own asset packs in Blender

Started 2026-11-12. Status: **two assets built** (a lever-action rifle, sections 6 to 8; a
bolt-action rifle, section 9). The whole chain now runs: brief, reference photographs, build,
baked textures, working parts, a critic given the references, and Unreal import as a textured
static mesh and as a rigged mesh with an animation (section 9). Nothing here has passed a
person's look verdict yet, and the last critic still scored part shapes 1 of 3.

This is Firebird's working copy of the Blender harness that GamesOS planned the same
day (`GamesOS/toolkit/blender/README.md`: jobs B2 "Look", B3 "Critic loop", B4 "Parts
build"). It is built here first, on a real need. When it has made one asset a person
approves, propose moving `tools/blender` into GamesOS for every game.

## 1. What it is

A model (Fable) writes a Blender Python script that builds one object out of named
parts. Blender runs with no window, builds it, and renders fixed views. A second agent
that did not build it criticises the renders. The builder fixes the script. Repeat.

- The **script** is the source of truth and lives in git. The `.blend`, renders and
  exports are made from it and are not in git.
- It is good at hard-edged things with parts: guns, tools, lamps, machines, furniture,
  building pieces. It is bad at faces and bodies. Characters go another way
  (`GamesOS/toolkit/3d`, image to 3D, on the computer that has it installed).
- A pass from the critic is not approval. Approval is Phoenix or Travis looking at it
  in the game.

## 2. Run it

```powershell
.\tools\blender\forge.ps1 -Pack period_arms -Asset lever_rifle -Detail "-0.12,0.24" -FirstPerson
.\tools\blender\forge.ps1 -Pack period_arms -Asset lever_rifle -Export     # also FBX and GLB
```

| File | Job |
|---|---|
| `tools/blender/forge.ps1` | the one command: build, render, export |
| `tools/blender/fb_parts.py` | part makers: `prism` (side profile pushed out), `loft` (rounded body from top, bottom and width lines), `tube`, `box`, `sweep` + `fillet` (bent flat bar), `cut` (boolean), `pivot` (hinge point), `material` |
| `tools/blender/render_views.py` | the fixed views and `sheet.png` |
| `tools/blender/export_asset.py` | joins fixed parts, keeps moving parts separate on their hinges, writes FBX and GLB |
| `tools/blender/packs/<pack>/<asset>.py` | one build script per asset |
| `tools/blender/packs/<pack>/<asset>.brief.md` | the research brief: real sizes with their source, parts, how each moving part moves (model: `period_arms/bolt_rifle.brief.md`) |
| `tools/blender/fetch_refs.py` | fetches free-licence photographs from Wikimedia Commons into `engine/Saved/PackForge/<pack>/<asset>/refs/`, with page, author and licence in `refs.json` |
| `tools/blender/ref_trace.py` | measures a build against a side-view photograph (section 8) |
| `tools/blender/CRITIC_BRIEF.md` | what a critic is told; copied into every round folder |
| `tools/editor/import_forge_asset.py`, `import_forge_rig.py` | Unreal import: `SM_<asset>` and `SK_<asset>` wearing `M_<asset>` built from the baked images |

More part makers since the first asset: `plate` (a flat forging: one outline with through
holes, for parts that are really one piece of steel), `inlet` (cuts a seat for a metal part
into a wood part, a hair wider, so the joint is a dark line), `motion` (declares how a part
moves over one cycle; it drives the action views, the bones and the animation). `material`
also tells the bake what to paint (wood, metal, flat).

More switches on `forge.ps1`: `-Texture` (bake one 2048 atlas: albedo, normal, and a packed
open-air / roughness / metal image, then render the views again from the baked model; needs
GamesOS at or after commit `3b76808a`, or `GAMESOS_BLENDER` pointing at one), `-Round N`
(stage `rounds/N` for a critic: renders, brief, references, measured facts, critic brief),
`-Export` (also writes `<asset>_rig.fbx`: one skinned mesh, a bone per moving part, the
animation `<asset>_operate`).

Output: `engine/Saved/PackForge/<pack>/<asset>/` (`.blend`, `views/`, `*.build.json`).
Needs Blender 4.5 (`C:\Program Files\Blender Foundation\Blender 4.5`, or `BLENDER_PATH`).

## 3. The packs we need most

Ranked by how much the game needs them and whether a bought pack can fill the gap.

| # | Pack | What is in it | Why us and not Fab |
|---|---|---|---|
| 1 | **Period Arms** | lever-action rifle, bolt-action rifle, double shotgun, pump shotgun, single-action revolver, cartridges, a bandolier | free packs gave us one revolver and a 1911; no rifle or shotgun of the period |
| 2 | **Aether Arms** | knight's energy lance, coil rifle, arc thrower, resonance bell-gun, Leyden-jar "magazines" | nobody sells these; they are our realm's own. The best pack to be known for |
| 3 | **Burned City kit** | charred beams, burned window and door frames, fallen wall sections, brick and ash piles, a tiling set that snaps together | the fire cities need it in every level; packs sell clean buildings |
| 4 | **Old-World Street** | gas lamp, hydrant, hand-pumped fire engine, hose reel, crates, barrels, wagon, telegraph pole | period street props, sized to match each other |
| 5 | **Rebuilder Gear** | their badge, torches, strip-crew crates and wagons, lanterns | made-up order, so it can only be ours |

## 4. The prompt

Paste this to a Fable session in this repo, with the bracketed parts filled in.
It is the "parts and critics" method from the Bugatti post
(`GamesOS/docs/research/2026-11-xikhar-ai-game-and-blender-posts.md`), fitted to our tools.

```text
Build [ASSET, e.g. "a double-barrel side-by-side shotgun of the 1880s with exposed hammers"]
for the pack [PACK, e.g. period_arms], as tools/blender/packs/[PACK]/[ASSET_NAME].py.

Read docs/PACK_FORGE.md first, then tools/blender/packs/period_arms/bolt_rifle.brief.md and
bolt_rifle.py as the pattern: one script, named parts built with fb_parts.py, metres, muzzle
(or front) down +X, up +Z, origin where the hand holds it. No maker's names or marks.

1. RESEARCH. Find the real object's sizes (overall, the main parts) and how it works, from a
   source you can name. Write tools/blender/packs/[PACK]/[ASSET_NAME].brief.md: what it is in
   the game, a table of real sizes with the source, the parts with their materials, and for
   every moving part where its hinge is and how far it moves.
2. REFERENCES. Run tools\blender\fetch_refs.py with two or three queries. Open every picture.
   Fill in "view" in refs.json, and write into the brief what each picture teaches and a
   numbered list of the shapes it shows that are easy to get wrong. If no picture is a side
   view of the whole object, search again before building.
3. BUILD from the side view, not from memory. Run tools\blender\ref_trace.py on it for the
   outline in metres (section 8) and type those numbers into the script. One part per real
   part; where the real thing is one piece of steel use plate(), where metal sits in wood use
   inlet(), and give every moving part pivot() and motion().
4. Run .\tools\blender\forge.ps1 -Pack [PACK] -Asset [ASSET_NAME] -Detail "x0,x1" -FirstPerson
   and look at the renders yourself beside the references. Run the ref_trace compare. Fix what
   you can see before spending a critic on it. Check every action view: each part moves, far
   enough, through nothing.
5. CRITIC. Run again with -Texture -Round N. Start a fresh agent, give it only the folder
   engine\Saved\PackForge\[PACK]\[ASSET_NAME]\rounds\N and tell it to follow CRITIC_BRIEF.md
   in that folder. It must not see the script.
6. Fix what the critic listed, shapes before surface. A new critic every round. Stop when
   every score is 2 or more and the last round changed nothing important, or after 5 rounds,
   or after 90 minutes. Say which.
7. Budget: a first-person weapon under 30,000 triangles, a street prop under 8,000, a kit
   piece under 3,000.
8. Run with -Texture -Export, then tools\ue-py.ps1 with tools\editor\import_forge_asset.py and
   with import_forge_rig.py -ScriptArgs "pose 0.45", and take a picture with tools\ue-shot.ps1.
9. Report: the sheet of every round, each critic's scores, what you did not fix, the picture
   from the game, and what is checked and not checked. Do not call it done. A person decides
   if it looks good.

Rules: a reference teaches shape and proportion. Never use it as a texture or put it in a pack.
Never copy geometry, textures or materials from any downloaded pack. Never feed a
downloaded pack to an AI tool. Ask before anything that costs money or needs a login.
```

## 5. Selling packs on Fab

It is possible. These are the facts as read on 2026-11-12; read the Fab pages again
before acting, because the rules change.

- **A publisher account is needed.** It asks for identity, tax and payout details.
  Phoenix or Travis must create it and accept the agreement; an AI may not.
- **AI-made products must be tagged.** Fab's terms say content must be marked
  "CreatedWithAI" when a material part of it was made with generative AI. Ours is
  written by a model, so we tag it. Buyers can filter tagged products out, and a
  seller who hides it can lose the account.
- **Every product is reviewed** against Fab's content and technical requirements
  (file formats, folder layout, naming, collision, LODs, working example map).
- **Nothing from another pack may be inside ours**: no meshes, textures, materials or
  sounds from anything we downloaded. The forge builds from scripts, so this holds as
  long as textures are also our own.
- **No real brand names or marks** on a gun or product. Model the type, not the maker.
- Not checked: the seller's share of each sale, and the current sign-up steps.

What would make a name for us is section 3's row 2 and row 5: things from our own realm
that no one else sells, at a quality a buyer cannot tell from hand-made. That bar is not
met yet (section 6).

## 6. Proof so far: the lever rifle

Built 2026-11-12 in three rounds, about 40 minutes of work: 26,354 triangles, 33 parts,
five materials; lever, hammer, trigger, bolt and carrier on their own hinges. Exported as
FBX and GLB (6 meshes).

| Round | Picture | What happened |
|---|---|---|
| 1 | not kept | first build: bent-wire lever, giant hammer, wavy stock, a part floating in the air |
| 2 | `docs/evidence/pack-forge/lever_rifle-round2-sheet.png` | sent to a critic agent that had not seen the script |
| 3 | `docs/evidence/pack-forge/lever_rifle-round3-sheet.png` | the critic's list worked through; not yet sent to a second critic |

The round 2 critic scored it, out of 3: silhouette 2, part shapes 1, materials 1, detail 1,
first-person view 1. Its top items were the lever in two pieces, the frame a plain box, the
barrel too thin, the hammer a flat fin and blotchy brass. Round 3 changed all five.

Checked: the build, the renders and the export run from one command; I looked at the
round 3 renders; the rifle imports into Unreal (`tools/editor/import_forge_asset.py`) as
`/Game/Firebird/Packs/PeriodArms/SM_lever_rifle`, 116.9 cm long, 26,342 triangles, five
materials, and stands in the look room (`docs/evidence/pack-forge/lever_rifle-in-lookroom.png`,
flat colours, lit from behind). Not checked: round 3 has had no critic; it has not been
held in first person; nobody but me has seen it.

What is still missing before it is a game asset, let alone a product:

1. **Textures: first bake done, not good yet.** See section 7. The baked rifle is not in
   Unreal yet (the import script still brings in the flat-colour FBX).
2. **A skeleton** so the lever, hammer and bolt animate in Unreal, and the animations.
3. **LODs and collision.**
4. **A person's verdict**, in the game, beside the bought revolver. Rule R5 in
   `REBOOT_PLAN.md` says world art comes from pro packs; a forged asset earns its place
   only by winning that comparison.

## 7. Textures, the Game Studio, and what "from scripts" must not mean (2026-11-12, later)

**The worry:** "built from scripts" is how our games got their rough look before. That was
shapes glued together by game code at run time, with no reference picture, no textures and
nobody checking. The method here is different only if these five things are all true for an
asset. For the rifle, two are:

| What makes it better than code-drawn art | Rifle today |
|---|---|
| A reference picture to build toward (concept art or photos, each view named) | **no**: built from memory of the type |
| Measured checks that overrule the critic (size, floating parts, closed solids, budget) | partly: triangles and size only |
| A separate critic every round, keep the best round | round 2 only |
| Baked textures that travel to the engine | **yes, first try** |
| A person's grade in the Game Studio | **cards are up, not graded** |

**Textures.** GamesOS wrote the texture job the same day (`GamesOS/toolkit/blender/texture_object.py`,
job B10). It runs on a forge `.blend` unchanged:

```powershell
pwsh -File D:\TE-Code\ProductOS\GamesOS\toolkit\blender\blender_job.ps1 -Job texture -Name lever_rifle `
  -In engine\Saved\PackForge\period_arms\lever_rifle\lever_rifle.blend `
  -Out engine\Saved\PackForge\period_arms\lever_rifle\textured -Surface "M_Walnut=wood,M_Bore=flat,M_*=metal"
```

Result: one 2048 atlas (colour and normal map), 5 of 5 checks, 97 seconds, a 9 MB GLB.
Picture: `docs/evidence/pack-forge/lever_rifle-textured-sheet.png`. My own look at it: the wood
is better; the brass has stripes like bamboo; the lever and hammer came out chrome white instead
of dark case-hardened steel; the barrel is too scratched. This was the first run of that job's
metal and wood surfaces on anything. No critic and no person has judged it.

**Game Studio.** Six cards are in the Game Studio under Firebird, department **Forged weapons**
(`GamesOS/projects/firebird-coop/studio/cards/06-Forged weapons/`): four textured views, one
before textures, one in the look room. Read the grades before the next round:
`node GamesOS/tools/studio/summary.mjs GamesOS/projects/firebird-coop`.

**Use one harness, not two.** GamesOS's harness now has what this forge lacks: checks that
fail the build, camera poses given to the critic, a written critic brief, the texture job.
The next asset should be built with `GamesOS/toolkit/blender` (`bl_parts.py`, `-Job round`),
and what the forge has that it lacks (the `loft`, `sweep` and `fillet` makers, the detail and
first-person views, the Unreal import) should be offered to GamesOS, not kept here as a copy.

**Next, in order:** (1) reference pictures for the rifle, and rebuild toward them with the
GamesOS critic brief; (2) fix the metal surfaces (brass, case-hardened steel, blued steel as
their own kinds); (3) import the textured GLB into Unreal and hold it in first person;
(4) the grades from the Game Studio decide whether a second asset is worth making this way.

## 9. Second asset: the bolt-action rifle

(Kept below section 8 in the file; the first four rounds came before sections 7 and 8.)

Built 2026-11-12 from the section 4 prompt, in four rounds with a new critic each round.
Stopped on the 90-minute limit, not on the scores. 28,596 triangles (budget 30,000), 72 parts,
six materials; the bolt (with its handle, knob, shroud and cocking piece) and the trigger are
separate meshes on their own hinges. Exported as FBX and GLB (3 meshes).
Script: `tools/blender/packs/period_arms/bolt_rifle.py`.

Scores are out of 3, from a critic agent that saw only the renders.

| Round | Sheet (`docs/evidence/pack-forge/`) | Side views | Other six views | Silhouette | Part shapes | Proportions | Materials | Small detail |
|---|---|---|---|---|---|---|---|---|
| 1 | `bolt_rifle-round1-sheet.png` | 1 | 1 | 1 | 1 | 1 | 1 | 0 |
| 2 | `bolt_rifle-round2-sheet.png` | 1 | 1 | 2 | 1 | 1 | 1 | 1 |
| 3 | `bolt_rifle-round3-sheet.png` | 2 | 1, rear quarter 2 | 2 | 1 | 2 | 1 | 1 |
| 4 | `bolt_rifle-round4-sheet.png` | 2 | 1, rear quarter 2 | 2 | 1 | 2 | 1 | 1 |

What each round changed:

1. First build. The critic: the action sat on the stock instead of in it, the forend stopped
   short with the rod in the air, the guard was a wire, the bands were pipe collars.
2. Barrel channel cut so the wood meets the metal at the bore line, forend carried to a nose
   cap, half-shell handguard, thin bands, wire sling loops, screws and cross-bolts, a tangent
   sight. The critic: butt too long for the barrel, magazine a shallow wedge, sagging butt.
3. Butt 60 mm shorter and barrel 60 mm longer, magazine 48 mm deep, oval guard bow, darker wood.
   The critic: receiver reads as a thin shell, guard and magazine should be one piece, butt
   lines still curve, stock a plank from above.
4. Straight toe line and comb with a comb nose, new widths, ribbed magazine with a flange,
   narrower sight with curved ramps. The fourth critic's scores did not move.

Not fixed (the fourth critic's list, most visible first): the receiver still reads as sleeves
on a tube in first person; the guard is not one forging with the magazine; the bolt's rear is
stacked cylinders; the rear sight is still read as a block; metal sits on the wood with no gap
line; the nose cap and bayonet lug are blocks; the metal finishes do not match each other.

Checked: build, render and export run from one command; I looked at every round's sheet; the
rifle imports into Unreal as `/Game/Firebird/Packs/PeriodArms/SM_bolt_rifle`, 126.2 cm long,
28,528 triangles, six materials, and stands in the look room in front of the lever rifle
(`docs/evidence/pack-forge/bolt_rifle-in-lookroom.png`, flat colours). Not checked: held in first
person in the game; seen by a person.

What those four rounds said about the method: a critic with no reference takes silhouette and
proportions from 1 to 2 in three rounds and then stops paying, and can be wrong. One asked for
a magazine 50 mm deep with a near-vertical wall; the museum photograph fetched afterwards shows
one long shallow piece that sweeps up into the stock.

**Rounds 6 and 7: brief, references, and a critic who can see them.** The brief
(`tools/blender/packs/period_arms/bolt_rifle.brief.md`) gives the real sizes and their source;
`fetch_refs.py` brought a museum photograph of both sides. The rifle was rebuilt from it: the
barrel as an even jacket tube, guard and magazine as one `plate()` let into the stock with
`inlet()`, the bolt and trigger declared with `motion()`.

Round 6 (`docs/evidence/pack-forge/bolt_rifle-round6-sheet.png`), critic given the brief and the
references: silhouette 2, parts 1, fit 1, surface 1, first-person 1, mechanism 1. It measured
against the photograph and confirmed: overall length and where receiver, sight and muzzle fall;
the even jacket tube; the butt's depth and straight toe line; guard and magazine as one piece;
the straight handle standing up when lifted. Its eight issues were specific, and one was a
fault in the forge itself: the action views showed the bolt lifted twice and never drawn back.

Round 7 (`bolt_rifle-round7-sheet.png`) fixed four: the action views now show every distinct
pose (lifted, drawn back, trigger pulled); the handle sits ahead of the rear bridge and passes
back through a slot in it; the finger grooves the photograph does not have are gone and the
rear sling loop is where the photograph has it; the render stage was about twice too bright,
which is why a dark walnut had been judged orange. 28,404 triangles, 69 parts.
**Round 7 has had no critic.**

Not fixed from round 6's list: the guard bow is still a thick plate with a long opening (should
be a thin strap round a 50 mm oval); a strip of wood shows below the guard and the closed bolt
knob touches the stock; no comb nose and the wrist is too long; the receiver ring, bridge and
rear sight are plain cylinders and boxes in first person; the bayonet bar is under the nose cap
instead of on its right side, and the cleaning rod barely shows; the wood has one fine grain
and no broad figure or handling wear.

**In Unreal.** `SM_bolt_rifle` (28,312 triangles, 126.2 cm) and `SK_bolt_rifle` (bones `root`,
`bolt`, `trigger`; animation 1.00 s), and the same for the lever rifle (`lever`, `hammer`,
`bolt`, `carrier`, `trigger`), all wearing the material built from the baked images.
`import_forge_rig.py -ScriptArgs "pose 0.45"` stands the rigged ones in the level held
mid-cycle: `docs/evidence/pack-forge/rifles-rigged-midcycle-in-lookroom.png` shows the bolt
rifle's handle up and bolt back. The lever rifle in that picture has a pale patch on its frame
that I have not explained.

Checked: every step ran on this asset from the commands in section 2; I looked at every sheet
and the Unreal picture. Not checked: the animation played at speed; held in first person;
collision and LODs (Unreal's automatic hull only); `ref_trace.py` (section 8) has not been run
on this rifle; a person's eye.

**Two ways of keeping references now exist** and should become one: section 8 keeps them in
`art/reference/<pack>/<asset>/` with `SOURCES.md`; `fetch_refs.py` keeps them in
`engine/Saved/PackForge/.../refs/` with `refs.json`, out of git. Both record source, author
and licence. Section 8's "one harness, not two" still stands for the GamesOS move.

**What the forge still lacks**, most costly first: part shapes (a maker that blends two solids
with a fillet, and bevels that survive a boolean cut); a critic per part, with the receiver in
first person judged alone against close references; broad wood figure and wear in the bake;
LODs and collision; a ranking of fetched references (keyword search gave two useful pictures in
six); hands and a first-person rig to hold the weapon.

## 8. Build toward a measured reference (2026-11-12, evening)

The biggest gain so far came from one tool, not from more critic rounds: **measure the model
against a reference photo.** `tools/blender/ref_trace.py` does two things:

1. **Trace.** Give it a side-view photo on a plain light background and the object's real
   length. It levels the photo and prints the outline's top and bottom edge in metres at 41
   stations. The builder types those numbers into the script's tables instead of guessing.
2. **Compare.** Give it the built `.blend` too. It writes an overlap score (0 to 1), the error
   in millimetres at each station, and `ref_overlay.png`: grey where both agree, red where the
   reference has something the model lacks, blue where the model has something extra.

```powershell
$b = "C:\Program Files\Blender Foundation\Blender 4.5\blender.exe"
$o = "engine\Saved\PackForge\period_arms\lever_rifle"
& $b -b "$o\lever_rifle.blend" --python-exit-code 1 --python tools\blender\ref_trace.py -- `
  --ref art\reference\period_arms\lever_rifle\side_right_a.jpg --length 1.168 --out "$o\ref" --compare 1 --window "0,0.56"
```

On the rifle (rear half, butt to frame front): overlap **0.36** as built from memory, **0.82**
after two passes with the traced numbers. The stock had been 40 to 100 mm too high and too
straight; no critic had said so. Picture: `docs/evidence/pack-forge/lever_rifle-vs-reference-overlay.png`.
The 1.168 m length is my figure for this type of musket from memory, not looked up; the
frame length it gives (216 mm) is believable.

References live in `art/reference/<pack>/<asset>/` with a `SOURCES.md` (where each came from,
licence, author). They are for looking and measuring only: never used as a texture, never shipped.

**The order of work for any new asset** (this replaces steps 1 to 4 of the prompt in section 4):

1. Find 3 to 6 reference photos: one true side view on a plain background, one three-quarter,
   one close-up of the busiest part. Write `SOURCES.md`.
2. Run the trace. Build the big shapes from its numbers.
3. Run the compare. Fix the worst stations first. Repeat until the overlap is above 0.85 or
   two passes in a row gain less than 0.02. Read the overlay picture every time: red and blue
   say exactly where.
4. Only then start critic rounds, for what an outline cannot show: thickness, cross-sections,
   small parts, materials. Give the critic the reference photos and `GamesOS/toolkit/blender/CRITIC_BRIEF.md`.
5. Bake textures (section 7), look at the result, fix the materials.
6. A person sees it only when the numbers and the critic have nothing big left (see the Game
   Studio rule below).

**Still wrong on the rifle after round 4** (`docs/evidence/pack-forge/lever_rifle-round4-textured-sheet.png`):
the lever is a thin wire where the photo shows a thick forged bar, and its loop does not close;
the frame lacks the stepped front block and the drooping rear corner; brass is striped, steel is
chrome, wood is orange. It is not in front of a person and should not be yet.

**What goes to a person.** The Game Studio for Firebird now opens on one department, "Game look"
(`GamesOS/projects/firebird-coop/studio/asks.json`). Order of human decisions: (1) the look of the
whole game, (2) peak moments once levels are rebuilt in that look, (3) core assets. Work in
progress, like this rifle, stays under "Firebird · everything" and is graded by the AI until it
has nothing big left wrong.

Round 5 (same evening): lever made a thick bar and its loop closed; overlap 0.827. Picture without the baked textures: `docs/evidence/pack-forge/lever_rifle-round5-sheet.png`. The forge's own Blender materials look better than the first bake, so the bake's metal and wood settings are the next thing to fix.

