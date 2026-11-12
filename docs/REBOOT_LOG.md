# FIREBIRD reboot log

Newest first. The plan is [REBOOT_PLAN.md](REBOOT_PLAN.md). The format is in its section 7.

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
