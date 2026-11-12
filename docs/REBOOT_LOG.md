# FIREBIRD reboot log

Newest first. The plan is [REBOOT_PLAN.md](REBOOT_PLAN.md). The format is in its section 7.

## 2026-11-11: step 1D, first version of the look room
Did: built /Game/Firebird/Maps/L_LookRoom from the church ruin kit with
tools\editor\build_lookroom.py (338 actors): 32 m by 20 m hall, arcades with a
gallery above, stairs, broken roof with a sunset shaft through the west window,
niche lights, one cyan waystone, fog, locked exposure, four PlayerStarts. Added
tools\ue-py.ps1 (run editor Python) and tools\ue-shot.ps1 (viewport picture).
Proof: checked. Six editor screenshots in docs/evidence/look-gate/. The game
started in the room with `ue-play.ps1 -Map` and loaded it without errors. Not
confirmed: that the player stands on the floor, the stairs are walkable, or the
frame rate. No Niagara embers yet (no fire pack). The layout was placed by a
script, then is a normal editable map; the look gate is Phoenix's call.
Phoenix said: "build the room". Has not judged it yet.
Sessions since Phoenix last played: unknown (no play session on record).
Next: Phoenix walks the room and answers the look-gate question (1E).
## 2026-11-11: step 0, one folder
Did: merged Codex's controller branch (inverted look fix, hold LB to aim, crouch on R3,
victory card keeps "Press Esc"), after saving its uncommitted work. Removed the
firebird-controller-fix folder and four leftover worktrees. Moved the browser games into
archive/browser and wrote a new README for the Unreal game. Dad re-checked the engine:
Unreal stays. Nix's look grades now live in the GamesOS rating studio (game firebird-coop).
Proof: checked. The game target compiles with the merge; the archived level contract test
passes. Not run: ue-build.ps1 and the feel test, because the Unreal editor was open.
Phoenix said: has not seen it yet.
Sessions since Phoenix last played: unknown.
Next: close the editor, run ue-build.ps1 and the feel test; then Step 1C (Fab assets).

## 2026-11-11: steps 1B and 1C, the editor is driveable and the stone kit is in
Did: the editor's MCP server auto-starts and tools\ue-mcp.ps1 talks to it. Added
the Megascans "Historic Medieval Church Ruin" kit to the Fab library, downloaded
66 "_ue_high" zips from fab.com and imported them with
tools\ue-import-megascans.ps1 (55 meshes, 11 surfaces, 4.8 GB under
engine/Content/Fab, not in git). Parent materials copied into the project.
Wrote the how-to into docs/ASSETS.md and step 1F (asset studio) into the plan.
Proof: checked. Import result says 66 ok of 66. One mesh (arch 01) was looked at
as a thumbnail. No piece has been placed in a level and nothing was played.
Phoenix said: asked for an asset studio built from these packs; signed in to
Epic and accepted the Fab licence himself.
Sessions since Phoenix last played: unknown (no play session on record).
Next: Step 1D, build L_LookRoom from the kit, then the look gate (1E).

## 2026-11-10: step 1A, the project accepts hand-built maps
Did: the game mode now leaves hand-built maps alone (no code-built course, players
start at the map's PlayerStarts). Added tools\ue-edit.ps1, a -Map option on
tools\ue-play.ps1, docs/ASSETS.md, git ignores for Fab packs, and the Unreal MCP
plugin in the project file.
Proof: checked. Build ok; `ue-capture.ps1 -Scenario feel` passes 6 of 6 on the
test course. The hand-built-map path has not run: no map exists yet. The editor
has not been opened with the new plugin.
Phoenix said: has not seen it yet. Nothing visible changed.
Sessions since Phoenix last played: unknown (no play session on record).
Next: Phoenix opens the editor (`.\tools\ue-edit.ps1`), then Step 1B and 1C.

## 2026-11-10: step 0, plan written and folders cleaned up
Did: wrote REBOOT_PLAN.md. Committed the unsaved 2026-10-25 art pass (26b5279).
Removed the old merged copies firebird-ue-lan and firebird-ue-sound. Left
firebird-controller-fix alone because a Codex session was working in it today.
Proof: checked (git only). Nothing was built or run this session.
Phoenix said: the original retro game looked best; wants co-op and versus on
LAN with his brother and dad; all three PCs are gaming PCs.
Sessions since Phoenix last played: unknown. No play session is on record for the Unreal build.
Next: Step 1A (get the project ready for hand-built maps).
