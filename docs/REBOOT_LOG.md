# FIREBIRD reboot log

Newest first. The plan is [REBOOT_PLAN.md](REBOOT_PLAN.md). The format is in its section 7.

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
