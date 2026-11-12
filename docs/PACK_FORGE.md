# Pack forge: making our own asset packs in Blender

Started 2026-11-12. Status: **one asset built as a proof** (a lever-action rifle,
section 6). Nothing here has passed a person's look verdict yet.

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

Paste this to a Fable session in this repo, with the three bracketed lines filled in.
It is the "parts and critics" method from the Bugatti post
(`GamesOS/docs/research/2026-11-xikhar-ai-game-and-blender-posts.md`), fitted to our tools.

```text
Build [ASSET, e.g. "a double-barrel side-by-side shotgun of the 1880s with exposed hammers"]
for the pack [PACK, e.g. period_arms], as tools/blender/packs/[PACK]/[ASSET_NAME].py.

Read docs/PACK_FORGE.md and tools/blender/packs/period_arms/lever_rifle.py first and
follow the same pattern: one script, named parts built with fb_parts.py, metres, muzzle
(or front) down +X, up +Z, origin where the hand holds it. No maker's names or marks.
Reference images, if any: [PATHS, each with its view named: side, top, three-quarter].

1. Write the parts list first: every part, its material, its rough size in millimetres,
   and which parts move and where their hinge is.
2. Build it. Run .\tools\blender\forge.ps1 -Pack [PACK] -Asset [ASSET_NAME] -FirstPerson
   and look at the renders yourself.
3. Start a separate critic agent. Give it only the renders (and the references) and what
   the object is meant to be. Ask for a 0 to 3 score per view and a list of what is wrong,
   most visible first, with a fix for each in terms of shape. The critic must not see the script.
4. Fix what the critic listed, shapes before materials. Re-render. Send the new renders
   to a NEW critic. Stop when every score is 2 or more and the last round changed nothing
   important, or after 5 rounds, or after 90 minutes. Say which.
5. Check the budget: a first-person weapon under 30,000 triangles, a street prop under
   8,000, a kit piece under 3,000. Moving parts keep their own hinge.
6. Run with -Export, import into Unreal under /Game/Firebird/Packs/[PACK], place it in
   L_LookRoom, and take a screenshot with tools\ue-shot.ps1.
7. Report: the renders of every round, what each critic said, what you did not fix, and
   the in-game screenshot. Do not call it done. A person decides if it looks good.

Rules: never copy geometry, textures or materials from any downloaded pack. Never feed a
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

1. **Textures.** Colour and wear are Blender-only patterns. The engine needs them baked
   to images (base colour, roughness, metal, normal). No bake job is written yet. Until
   then the rifle arrives in Unreal as flat colours.
2. **A skeleton** so the lever, hammer and bolt animate in Unreal, and the animations.
3. **LODs and collision.**
4. **A person's verdict**, in the game, beside the bought revolver. Rule R5 in
   `REBOOT_PLAN.md` says world art comes from pro packs; a forged asset earns its place
   only by winning that comparison.