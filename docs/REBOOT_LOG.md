# FIREBIRD reboot log

Newest first. The plan is [REBOOT_PLAN.md](REBOOT_PLAN.md). The format is in its section 7.

## 2026-11-12: a person graded the look-room pictures (Game Studio, rater "nix")
Read from GamesOS `projects/firebird-coop/studio/raters/nix`. Pictures only, not a walk; no notes left.
- Every picture of the old code-built course and arena he graded: **no** (11 of 11).
- Look room: west window **yes**, under the hole **yes**; from the east door, from the gallery and
  the waystone **almost**; stairs and south gallery not graded yet.
This replaces the agent's verdict for those five views: the direction is right (the first cards
of this game to get a yes), and the three widest views are not there yet. Those are the views that
show the flat side walls, the closed roof slabs and the repeated floor. Next look work: those.
Step 1E still needs him to walk the room.

## 2026-11-12: play records now say where
Did: `FB_EVENT fell`, `hurt` and `death` now carry the place it happened and where it came from
(the checkpoint left, or the attacker). `play-record.py report` lists the 5 m squares with the
most deaths and falls, per map.
Proof: game target compiled with the editor open; bot-played in a scratch copy of the package
(`nodash`: `fell at (4066, 31) from (2410, -51)`, shown as a place in the report). Not human-played.
Not done: `Play-Firebird.cmd` runs the editor's copy of the game code, which cannot be rebuilt
while the editor is open. Until someone closes the editor and runs `tools\ue-build.ps1`, records
from it have times but no places (the report counts those as "no place recorded").

## 2026-11-12: play records, so we can see where a player gets stuck
Asked: is the newest Firebird ready for Nix, and are we tracking his play. Found: nothing recorded
who played or what happened to them; the game only wrote `FB_EVENT` lines to its log.
Did (no game code changed, so the open editor was not disturbed):
- `Play-Firebird.cmd` in the repo root starts the newest source build (`look` for the look room).
- `tools\ue-play.ps1` now waits for the game to close and writes a play record
  (`-NoRecord` keeps the old start-and-return). `-Player` says who; default is the arcade's
  player name, else guest.
- `tools\play-record.py record|report`: deaths, falls, hits taken, moves used, arena clear
  times, and the hard stretches (45 s or more between two steps forward, or any death or fall
  between them). Records stay on this computer in `%LOCALAPPDATA%\FamilyArcade\firebird-play`.
  A name is tied to a family member only through the family file and its consent value.
Proof: checked on a made-up log (2 deaths, 1 fall, 2 hard stretches found); bot-played once
through the whole chain (`-FBAuto`, feel scenario, record written). Not human-played.
Not done: the game does not log WHERE a death or fall happened, so "stuck" is a time and what
came before and after, not a place. That needs two lines of C++ and a rebuild with the editor
closed. The look room has nothing to fight, so it produces almost no events. Nothing is sent to
ProfileEngine (its host accepts Living Quarry only, and this computer has no family file).

## 2026-11-12: step 1E judged by the agent (told to: "you judge it and keep going"), three passes on the look room
Did: the gate says an agent may not pass it. In this session the person at the keyboard said
"you judge it and keep going", so the agent judged, and the verdicts below are labelled
agent-judged. They are not human-played and do not replace Phoenix walking the room.
- First verdict, on the 2026-11-11 pictures: **does not pass.** Real stone and fire, but the sky
  was a blank cream card, no shafts or haze showed, the roof and west wall were flat slabs, the
  waystone was a bare cylinder, the wall lamps threw black frames, and sunlit patches burnt out.
- Pass 1: dusk sky dimmed and tinted (the sky is never brighter than the fires), haze thick
  enough to show shafts, timber tie beams under the roof with burnt ones left over the hole and
  fallen below (Megascans saloon pack), barrels, chests and a cart wheel, a glowing orb on the
  waystone with a smaller cyan pool.
- Pass 2: stronger shafts, cloud for the low sun to catch, a skirt, string courses and buttresses
  on the west wall, fire bowls on the gallery, no shadow from the wall niches.
- Pass 3: weaker and redder sun so patches hold detail, niche flames moved onto the lip and
  dimmed, no shadow halo round the east door, three burnt building fronts outside the west wall
  (Gothic sample pack) seen through the window and over the broken roof.
- Verdict after pass 3: **passes, with reservations** (agent-judged). From the east door, the
  cross gallery and the waystone it would not look out of place in a mid-budget shooter. Still
  weak: the side walls and the closed roof are flat tiled faces, the floor is one repeated scan,
  the wall niches read as lit tablets, there are no drifting embers, and the sky has no smoke
  columns. Those are the list for step 1F and for anyone placing by hand.
- All of it is in `tools\editor\build_lookroom.py`; the five mood numbers (shafts, haze, sky) are
  named at its top. Running it again still replaces only what it placed.
- Tools: `tools\ue-fps.ps1` measures frame rate in the real game (engine CSV profiler);
  `tools\editor\mesh_inventory.py` lists every pack mesh and effect with sizes;
  `tools\ue-py.ps1` now clicks the Cmd box before typing (typing failed from a background window).
Proof: checked. Build script: 415 actors, no warnings. Pictures: docs/evidence/look-gate
(01 to 07, retaken; the views are close to the old ones, not identical). Play session through the
MCP server: character at a PlayerStart at z 94.15, no test course, no new errors. Frame rate with
`ue-fps.ps1` at 1920x1080 from the first PlayerStart behind the title menu: 104 and 110 fps
average, worst 1% about 80, GPU about 7 ms, on two runs; one earlier run read 53 fps while other
GPU work was running on this PC (the GPU sat near 60% busy before the game started, so these
numbers are a floor, not a clean reading). Not run: a walk of the stairs and gallery, a person
looking at it, the room in a packaged build, `ue-play.ps1 -Map` by hand.
Also in the level, not from this session: one rifle preview actor the pack-forge session placed.
Phoenix said: has not seen it yet.
Sessions since Phoenix last played: unknown (no play session on record). R3 still applies.
Next: Phoenix walks it (`.\tools\ue-play.ps1 -Map /Game/Firebird/Maps/L_LookRoom`) and says what
he thinks; his word replaces the agent's verdict. Then step 1F from the weak list above.

## 2026-11-12: outside the steps (asked for directly), GamesOS trial T9: the look room checked through the editor's MCP server
Did: GamesOS workflow trial T9 asks whether an agent can do a Firebird task through Unreal's own
MCP server with no hand in the editor. Asked for directly, so it went ahead of R1 and R3. It was
run on 5.8 (the engine decision stands; 5.9 is a preview and is not installed). The task was the
open check from step 1A and 1D: does the hand-built map start the player at a PlayerStart, on the
floor, with no test course. Nothing in the project was changed and nothing was saved: the editor
showed "19 Unsaved" from an earlier session before and after, and the five changed sound files
in git are not from this session and were left alone.
Proof: checked, through `tools\ue-mcp.ps1` only. L_LookRoom was the open level. The four
PlayerStarts are at z 110 and a straight-down trace finds the floor 110 below each. A play
session started in the editor (StartPIE): the game mode, HUD and FirebirdCharacter exist, no
FBRange actor exists, the character is at PlayerStart_2 (-200, 700) standing at z 94.15, the
title menu draws over the room, LogFirebird shows `FB_SESSION start` and `player_joined seat=P1`,
no new errors. The session was stopped again. Picture: docs/evidence/mcp-trial/lookroom-play-20261112.png.
Not run: the same check through `ue-play.ps1 -Map` (the 1A box stays open, it names that path),
a walk of the stairs, and the frame rate. The frame rate cannot be read this way: an editor in
the background ticks 3 times a second. Measure it with the game in front (step 1E.4).
What was learned about the server is in the GamesOS skill `ue5-gamesos-mcp`,
`references/native-mcp-5-8-and-5-9.md` (call shape, eight traps, what 5.9 changes).
Phoenix said: has not seen it yet. Nothing visible changed.
Sessions since Phoenix last played: unknown (no play session on record). R3 applies to the next session.
Next: unchanged. Step 1E: Phoenix walks the look room and judges it.

## 2026-11-11: outside the steps (asked for directly), controls, the sidearm and its sound
Did: asked for directly ("the mouse doesn't move it well, the shooting is off, better gun
animations and sounds, old Colt-era guns"), so this went ahead of rule R1. Code is in 38a513a
(the joint commit with the menus session) plus this commit.
- Mouse: it read the engine's mouse value, which is scaled by a 0.07 axis setting and by the
  field of view, so the look was about 5x slow and changed speed on every dash and zoom. It now
  reads raw counts at 0.044 degrees per count x the sensitivity setting (1.0 = a common shooter
  default). Down the sights the look slows by the same amount as the zoom. Invert look (a setting
  nothing read) now works.
- Controller: the engine's per-axis 0.25 dead zone was stacked under ours, so aim snapped to the
  axes. Sticks are read raw with one round dead zone (0.12 right, 0.18 left); a held full turn
  speeds up over a third of a second.
- Binds: RIGHT MOUSE aims (was the fist), F / E / V / a side mouse button punch, R or Y reloads,
  F5 restarts alone (was R). The controls card and the release prompt say so.
- Shooting: the hit check was a thin line against the Hollow's narrow capsule, so shots on the
  body's edge missed; it is now a 10 cm sweep up to the first wall. Spread is honest and shown by
  the crosshair: none standing still or down the sights, wider running, in the air and fanning.
  A click fires at once (0.14 s apart at most); holding fires every 0.30 s. Damage 13-18 a shot.
- The sidearm: a period single-action revolver (SETTING_BRIEF section 5; R7 now allows period
  guns), built from parts as a stand-in until a modelled revolver replaces it. Six rounds that go
  dark as they fire, the cylinder turns a place a shot, the hammer falls and cocks, spring kick and
  sway, a draw, an aim pose with the sights lined up on the crosshair, and a reload that tips the
  gun and spins the cylinder while the rounds click in. Powder flash and smoke, sparks and stone
  chips on hits.
- Sound: new black-powder shot (crack, boom, rolling low end, slapback off stone), and new
  caster_open / caster_chamber / caster_close / caster_dry for the reload and an empty trigger.
  Still synthesized (tools/ue-make-sounds.py), against R5: replace with a Fab pack in Step 3.
  Other sounds were left as they were (the generator shares one seed, so regenerating shifts them
  slightly; only the gun sounds were re-imported).
- New test: `ue-capture.ps1 -Scenario gun` (hip, aim, firing, reload, punch pictures).
Proof: checked. Editor and game targets build. `gun` 3 of 3 (aim zooms, cylinder counts down,
reload refills), `feel` 6 of 6, `nodash` passes, `ue-controller-test.ps1` 9 of 9 (on a scratch copy
of the October package with the new program; the aim check now reads the zoom setting).
Pictures: captures\ue\gun-20261111-191610 (not in git). Not run: a mouse or controller in a
person's hands, sound with -nosound off, LAN co-op with the new firing.
Phoenix said: has not seen it yet. Dash and slide are untouched pending his answer (brief section 7).
Sessions since Phoenix last played: unknown (no play session on record).
Next: Phoenix plays a round with mouse and controller and says whether the look speed (adjust with
[ and ]), the aim and the revolver feel right.

## 2026-11-11: outside the steps (asked for directly), new menus and play HUD
Did: the menus and the HUD were asked for directly in a session today, so this went ahead of rule R1.
The title screen says FIREBIRD (the CO-OP badge is gone) with PLAY, MULTIPLAYER, SETTINGS,
CONTROLS, QUIT. Multiplayer is its own screen: host a game, or join one found on the
network. Settings: look sensitivity, invert look, volume, window or full screen, saved in
%LOCALAPPDATA%\FirebirdCoop\settings.ini. Esc on the title asks before quitting. Esc or
START in play opens a pause menu (resume, settings, controls, leave) instead of dropping
to the title; alone the world stops, in a network game it keeps running. The play HUD has
no boxes now: health with a "just lost" trail and the dash pips bottom left, sparks and the
drum beside the weapon bottom right, the wave top right, LIGHT RELEASED near the top.
Text sizes are measured once and cached. New test: `ue-capture.ps1 -Scenario frontend`.
The rules it was built to are GamesOS `docs/GAME_SHELL_STANDARD.md`.
Proof: checked. The game target compiled; on a scratch copy of the October package with
the new program, `frontend` passed 15 of 15 three times in a row and `feel` passed 6 of 6.
Later the same evening the editor target was built (`FB_BUILD ok`, by the parallel session)
and `ue-capture.ps1 -Scenario frontend` passed 15 of 15 on it at d2cd563.
Ten pictures are in docs/evidence/menus and in the Game Studio under Menus. Not run: the
two-copy join test with the new
multiplayer screen, a controller in a person's hands, the mouse on the menus, the volume
setting with sound on, and the full-screen switch. No package was made.
Phoenix said: has not seen it yet.
Sessions since Phoenix last played: unknown (no play session on record).
Next: Phoenix opens the game, tries every menu with keyboard, mouse and controller, and
grades the Menus pictures in the Game Studio. Then back to step 1E.

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

## 2026-11-12: pack forge, first proof (outside the numbered steps)

Asked by Phoenix: can we make our own packs in Blender, with a prompt, as a system.
Built `tools/blender` (build, render, export from one command) and one asset with it,
a lever-action rifle, in three rounds with one critic agent. Details, the prompt and
the Fab selling facts: `docs/PACK_FORGE.md`.

- Checked: the forge command builds, renders and exports; round 3 renders looked at.
- Not checked: the rifle in Unreal (import script written, editor was busy); no
  textures are baked; no person has judged it.
- Also since the last entry (2026-11-11, later the same day): the look room's haze was
  cut and real fires added from the Vefects pack; 12 packs are in the project and git
  ignores them; the setting brief and rule R7 were rewritten (`docs/SETTING_BRIEF.md`).
