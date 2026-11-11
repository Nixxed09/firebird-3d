# Asset packs used by FIREBIRD

Packs from Fab are large, so they are **not in git**. This list is how they get
downloaded again on another PC or after a fresh checkout. Add a row every time
a pack is added to the project (docs/REBOOT_PLAN.md, Step 1C).

Before adding a pack, check it against the kid-safety rules (no gore, no skulls
as decoration, no demons, no real-world guns) and check its price.

| Pack | Fab link | Price | Licence | Added | Used for | Folder under `engine/Content` |
|---|---|---|---|---|---|---|
| (none yet) | | | | | | |

## Where packs go

Fab and Megascans downloads land in these folders, which `.gitignore` skips:

- `engine/Content/Fab/`
- `engine/Content/Megascans/`
- `engine/Content/MSPresets/`
- `engine/Content/ThirdParty/` (move any other downloaded pack here)

Our own maps, materials and hero art stay under `engine/Content/Firebird/` and
**are** in git.

## Backup

Maps point at these packs, so after every session that changes a map, copy
`engine\Content` to `C:\FirebirdBackup\<date>`.
