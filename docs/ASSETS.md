# Asset packs used by FIREBIRD

Packs from Fab are large, so they are **not in git**. This list is how they get
downloaded again on another PC or after a fresh checkout. Add a row every time
a pack is added to the project (docs/REBOOT_PLAN.md, Step 1C).

Before adding a pack, check it against the kid-safety rules (no gore, no skulls
as decoration, no demons, no real-world guns) and check its price.

| Pack | Fab link | Price | Licence | Added | Used for | Folder under `engine/Content` |
|---|---|---|---|---|---|---|
| Quixel Megascans "Historic Medieval Church Ruin" kit, 66 zips (55 meshes, 11 tiling surfaces), High tier, 4.8 GB imported (arches, doors, windows, walls, columns, buttresses, floors and slabs, stairs, trims, gables, roof, debris piles, decoration packs, one smooth stone texture) | fab.com search: `Historic Medieval Church Ruin`, seller Quixel Megascans | Free (price 0 on 2026-11-11) | Fab Standard | 2026-11-11 | The stone world kit for the look room and the first levels | `Fab/Megascans/3D/churchruin_*`, `Fab/Megascans/Surfaces/churchruin_*` |
| Megascans parent materials (copied from the Fab plugin by the import script) | comes with the engine's Fab plugin | Free | Fab plugin content | 2026-11-11 | Parent of every Megascans material instance | `Fab/Materials` |

The exact zips are listed in `engine/Saved/FabDownloads/import-result.json` after an import.
A Megascans "Castle Wall" is also in the Fab library but is a different stone; it is not imported.

## How to add Megascans packs (proven 2026-11-11)

Who does what: **Phoenix** signs in to Epic and accepts any licence or permission prompt.
An agent can do the rest. Nothing here costs money; stop and ask if a page shows a price (R9).

1. Open the editor: `.\tools\ue-edit.ps1`. Its MCP server starts by itself.
   Check it answers: `.\tools\ue-mcp.ps1 -Tool list_toolsets`.
2. On fab.com (signed in), open the pack's page. Check it says **Free**. Click **Add to My Library**.
3. On the same page click **Download**, scroll to the **gltf** section and download the file
   whose name ends **`_ue_high.zip`**. That is the Unreal-ready High tier (about 30 to 70 MB).
   Do not take `_raw` (hundreds of MB) or the plain `_gltf_high.zip` (wrong layout for the importer).
4. Run `.\tools\ue-import-megascans.ps1`. It moves the zips from Downloads to
   `engine\Saved\FabDownloads`, then imports each one inside the editor the same way Fab's
   "Add to project" does: Nanite static mesh, material instance, 4K textures.
   Packs already imported are skipped, so it is safe to run again.
5. Read the result it prints. Every line must say `ok`.
6. Add a row to the table above.

Imported assets land in `/Game/Fab/Megascans/3D/<name>/High/` (meshes) or
`/Game/Fab/Megascans/Surfaces/<name>/High/` (tiling materials).

### Things that went wrong, so you do not repeat them

- **Chrome only lets a page start one download by itself.** Scripted downloads after the first
  are dropped with no message. Each download needs a real click on the row's download button.
- **The Fab window inside the editor is a web page.** The editor's UI tools cannot click in it,
  so "Add to project" there is a Phoenix-only action. The zip route above avoids it.
- **`Fab.TEDS.MyFolderIntegration` is not an import path.** It only lists the library, and it
  failed for this account.
- **Imported materials first point at `/Fab/Materials/...`**, which is editor-only plugin content
  and would be missing in a packaged game. The import script copies those parents to
  `/Game/Fab/Materials` and re-points each material instance. If you import another way, check
  the parent of the material instance.
- **Restarting the editor signs Fab out.** `Fab.Login` in the editor's Cmd box opens the Epic
  sign-in page in the browser; Phoenix confirms there.

## Where packs go

Fab and Megascans downloads land in these folders, which `.gitignore` skips:

- `engine/Content/Fab/`
- `engine/Content/Megascans/`
- `engine/Content/MSPresets/`
- `engine/Content/ThirdParty/` (move any other downloaded pack here)

Our own maps, materials and hero art stay under `engine/Content/Firebird/` and
**are** in git.

## Licence limits

- We may change these packs and ship them inside our games.
- We may not share or sell the pieces themselves, changed or not. Keep them out of public repos.
- Not checked yet: whether the Fab licence allows using pack content as input to generative AI
  tools. Read that clause before anyone does.

## Backup

Maps point at these packs, so after every session that changes a map, copy
`engine\Content` to `C:\FirebirdBackup\<date>`.

## In the Fab library, not yet in the project (added 2026-11-11)

All free, all Unreal-format. Picked for the Great Fires setting (`docs/SETTING_BRIEF.md`).
None has been opened or looked at in the engine yet, so quality and fit are unknown.

| Pack | Seller | For |
|---|---|---|
| Old West VOL 1 Interior Furniture | Dekogon Studios | Period rooms |
| Old West VOL 2 Tradesmen Tools and Props | Dekogon Studios | Workshops, Rebuilder gear |
| Old West VOL 3 Travel Supplies and Goods | Dekogon Studios | Wagons' loads, street clutter |
| Old West VOL 4 Goods and Supplies | Dekogon Studios | Crates, barrels, sacks |
| Old West VOL 5 Town Props | Dekogon Studios | Street props |
| Old West VOL 6 Town and Industrial | Dekogon Studios | Town and works |
| Wild West Town | Nimikko | Period buildings |
| Modular Old Power Plant (65 assets) | Nimikko | Brick and iron industry, coil halls |
| Saloon Interior | Quixel Megascans | Period interior |
| Old Mine | Quixel Megascans | Timber and rock, under-city |
| Gothic props (pack 1) | E.Bolday | Old-world stone detail |
| Free Sample Dark Fantasy Gothic Environment | Oleg Ushenok | Old-world stone |
| Weapon Pack 03 (Animated Revolver Handgun) | Horizon Store | The revolver |
| Realistic Fire & Explosion VFX Vol.1 | DeepBlues | Building fires |
| M5 VFX Vol2 Fire and Flames (Niagara) | M5VFX | Fire, embers |
| Perfect Fire VFX | Vefects | Fire |
| Bandit | AlexN | A first human enemy to try |

How these get into the project: they are Unreal-format packs, not zips. In the
open editor: Window > Fab > My Library > the pack > Add to Project. The editor's
Fab window must be signed in (Phoenix or Travis confirms in the browser). The
zip route above is for Megascans surface and mesh zips only.

Still missing (no good free pack found): 1870s to 1900s brick and stone city
street buildings, a lever-action or bolt-action rifle, a period shotgun, burned
and collapsed building pieces. These probably cost money (rule R9: ask first).