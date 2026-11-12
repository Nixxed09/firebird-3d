# FIREBIRD reboot plan

**Written:** 2026-11-10. **Owner:** Phoenix. **Status (2026-11-11):** Steps 0, 1B and 1C are
done. Step 1D has a first version of the look room. Next is Step 1E: Phoenix walks it and judges it.

This is the plan for making FIREBIRD look and play like a modern shooter that
Phoenix plays over the home network with his brother and dad. It replaces the
roadmap in `FUN_AUDIT.md` section 7. Where another document disagrees with this
one, this one wins.

**If you are an AI agent starting a session, read sections 1 to 4, then do the
first unfinished step in section 5. Do not skip ahead. Do not redesign the plan.**

---

## 1. Start of every session

Do these in order, every time.

1. Work only in `D:\Phoenix\nix-code\games\firebird-ue`, on branch `claude/firebird-ue`.
2. Run `git status`. If there are changes you did not make, stop and ask Phoenix
   before touching them.
3. This is the only Firebird folder (since 2026-11-11). Do not create worktrees or
   copies beside it. The browser games are in `archive/browser` and are not edited.
4. Read the last entry in `docs/REBOOT_LOG.md` (create the file if it is
   missing). It says what was done last and what is next. Then read Nix's grades:
   from `D:\TE-Code\ProductOS`, run
   `node GamesOS/tools/studio/summary.mjs GamesOS/projects/firebird-coop`.
5. Find the first step in section 5 whose "Done when" is not yet true. Work on
   that step only.
6. At the end of the session, add an entry to `docs/REBOOT_LOG.md` (format in
   section 7) and commit.

---

## 2. Decisions already made (do not reopen)

| Decision | Choice | Why |
|---|---|---|
| Engine | **Unreal Engine 5.8** at `D:\Games\UE_5.8` | Modern lighting and free pro assets. This PC (RTX 4070 Super) runs it. Movement, co-op, the join menu, controller support and packaging already work in it. |
| What looked best so far | The **original retro game** (Phoenix, 2026-11-10) | It had one consistent style: bold colours, readable enemies, punchy hits. Copy those qualities, not the pixels. |
| Modes | **Co-op and versus**, both on LAN | Phoenix wants both. Versus is built first because it needs no enemy AI. |
| Players' PCs | All three are gaming PCs | Exact graphics cards are still unknown. Find out in Step 2. |
| World art | **Professional packs from Fab** | Script-made art is why it looks flat. |
| Hero art | Original: the Firebird, Hollows, weapons | These are the game's identity. |
| Levels | **Built by hand in the Unreal editor**, saved as map files | Hand placement and lighting is where the modern look comes from. |
| Story, names, colours, kid-safety | Unchanged: `STYLE_GUIDE.md`, `docs/STORY_BIBLE.md` | Engine-independent and already good. |
| Engine, re-checked | **Stay on Unreal** (dad asked, 2026-11-11) | Godot (the GamesOS default) would mean rewriting movement, weapons, LAN and controller for a weaker realistic look. Computers without Unreal get a packaged build. |
| Browser versions | **Archived** in `archive/browser` (dad, 2026-11-11) | One game, one folder. They still open in a browser for reference. |
| Look grades | **GamesOS rating studio**, game `firebird-coop` | Nix grades pictures of the game; the grades are the work list for art, level and UI work. They count as Phoenix looking (R2), not as playing. |

---

## 3. Rules

These exist because the last attempt broke each one.

**R1. Look first.** Until Step 1 passes, no new gameplay, netcode, menus, sound
or tooling. Only work that makes the one room look right.

**R2. A person decides.** Whether it looks good or plays well is decided by
Phoenix looking at it or playing it. Never by a test, a bot or an AI reading a
screenshot. Tests prove it works. They do not prove it is good.

**R3. Two-session limit.** If two sessions pass without Phoenix playing the
build, the next session does nothing except get the build into his hands.

**R4. No walls from code.** C++ never creates level geometry, lights or
decoration. Those live in map files made in the editor. C++ is for rules:
movement, weapons, enemies, scoring, networking.

**R5. No script-made world art.** Do not generate walls, floors, props, textures
or sounds with Python, Blender scripts or an AI model. Use Fab packs. Original
art is allowed only for the Firebird, the Hollows and the weapons.

**R6. Say which kind of proof you have.** Every claim in the log is labelled
**checked** (a test passed), **bot-played** (a scripted player finished it) or
**human-played** (Phoenix or family played it). Only human-played counts for
"looks good", "feels good" and "is fun".

**R7. Kid-safety stays.** No blood, no gore, no demons or occult symbols, no
real-world guns. Enemies are released into light. Players in versus are tagged
out and come back. Check every Fab pack against this before adding it.

**R8. Small steps, saved often.** Commit after each task that works. Never leave
a session with uncommitted work.

**R9. Stop and ask** when: a step needs money, a step needs an account login,
something would delete files, the plan seems wrong, or the same thing has
failed three times.

**R10. Nothing goes to the Family Arcade** (no push to `Traviseric/ProductOS`, no
new pin) until Step 2's three-PC match has happened.

---

## 4. What exists today

Code is in `engine/Source/Firebird`. Build with `.\tools\ue-build.ps1`, play
with `.\tools\ue-play.ps1`.

| Keep | File | Note |
|---|---|---|
| Movement (run, coyote jump, dash, slide) | `FirebirdCharacter.*` | Tuning numbers are at the top of the header. Bot-played only: no person has tuned them. |
| Spark Caster, Ember Fist, release-heal | `FirebirdCharacter.*` | |
| Hollow enemy (tell, crack, release) | `Hollow.*`, `EmberProjectile.*` | |
| LAN host and join, 1 to 4 players, UDP 27705 | `FirebirdSession.*`, `FirebirdGameMode.*` | Tested only as two copies on one PC. Never on two real PCs. |
| Family Arcade rooms | `FirebirdArcadeLan.*` | Leave alone until R10 allows. |
| Start menu, HUD | `FirebirdHUD.*` | The HUD is a placeholder. Restyle in Step 3. |
| Scripted test runs | `FirebirdAutomation.*`, `tools\ue-capture.ps1` | Keep the `feel` and `nodash` runs passing. |
| Sounds | `FBAudio.*`, `Content/Firebird/Sounds` | Synthesized placeholders. Replace in Step 3. |

| Retire | File | When |
|---|---|---|
| The code-built course | `FBRange.*` | Keep it only as the test course for `ue-capture.ps1 -Scenario feel`. Real maps never use it. Wave logic moves out of it in Step 3. |
| The script-made art kit | `Content/Firebird/ArtKitV01`, `FBArt.*`, `art/` | Stop using it in new maps from Step 1. Delete after Step 2. The Hollow, Firebird and Spark Caster designs are the brief for the new hero art in Step 3. |

**Archived:** the browser games (the retro original and the WebGL v2) are in
`archive/browser`. Not part of this plan. Riley's logic (`archive/browser/js/riley.js`)
and the level contract test are still read from there.

---

## 5. The steps

### Step 0: one folder, one branch

- [x] Unsaved October art work committed (`26b5279`).
- [x] Old merged copies `firebird-ue-lan` and `firebird-ue-sound` removed.
- [x] Controller branch merged (`3deaddc`, 2026-11-11), `firebird-controller-fix` removed.
  The game target compiles (checked). Still to run once the editor is closed:
  `.\tools\ue-build.ps1` and `.\tools\ue-capture.ps1 -Scenario feel`.
- [x] Browser games moved to `archive/browser`; the old `firebird-3d` folder is no
  longer a checkout (2026-11-11).

**Done when:** `git worktree list` shows only this folder, and
`.\tools\ue-build.ps1` prints `FB_BUILD ok`.
This does not block Step 1.

---

### Step 1: one beautiful room (the look gate)

**Goal:** one arena that Phoenix looks at and says "that's a modern shooter".
No new gameplay.

**The look in one sentence:** a real stone city lit by fire. Scanned stone and
brick that looks real, warm amber firelight, deep shadows, drifting embers and
haze, with cyan for restored power and crimson for danger.

#### 1A. Agent: get the project ready for hand-built maps

Tasks 1 to 4, 6 and 7 were done on 2026-11-10. Task 5 and the two checks at the
end are still open.

1. [x] `engine/Firebird.uproject` enables the plugin `ModelContextProtocol`
   (editor only). It ships with 5.8 under
   `Engine/Plugins/Experimental/ModelContextProtocol`.
2. [x] `FirebirdGameMode.cpp` has `FBMapIsHandBuilt`: true when the map's path
   starts with `/Game/` **and** it has an `APlayerStart`. Hand-built maps do not
   get `AFBRange`, and players spawn at the map's PlayerStarts. The engine's
   empty map still gets the test course. (Checking PlayerStarts alone is wrong:
   the engine's empty map has one.)
3. [x] `tools\ue-edit.ps1` opens the project in the full editor.
4. [x] `tools\ue-play.ps1 -Map /Game/Firebird/Maps/L_LookRoom` plays a map.
5. [ ] In `engine/Config/DefaultGame.ini`, add the new map to `MapsToCook` once
   it exists.
6. [x] `.gitignore` skips the folders Fab downloads into, and `docs/ASSETS.md`
   lists the packs so they can be downloaded again on another PC.
7. [x] Build ok, and `.\tools\ue-capture.ps1 -Scenario feel` passes (checked).

**Still to check, the first time a map exists:**

- [x] `.\tools\ue-edit.ps1` opens the editor with no plugin error (checked 2026-11-10).
- [ ] `.\tools\ue-play.ps1 -Map ...` starts the player at a PlayerStart with no
  test course around it. This path has never run, because no map exists yet.

**Done when:** all boxes above are ticked.

#### 1B. Phoenix and agent: connect the agent to the editor

**Done 2026-11-11 (checked).** The editor starts its MCP server by itself
(`engine/Config/DefaultEditorPerProjectUserSettings.ini`, this PC only, port 8000) and
the project file turns on the editor, UI, Niagara and config toolsets.

How an agent uses it:

- A new Claude Code session started in this folder gets the tools from `.mcp.json`.
- Any session can call it from PowerShell: `.\tools\ue-mcp.ps1 -Tool list_toolsets`,
  then `-Tool describe_toolset -ArgsJson '{"toolset_name":"..."}'`, then
  `-Tool call_tool -ArgsFile args.json`.
- What it can do: place and move actors, load levels, make materials and material
  instances, edit Niagara, take viewport and editor screenshots, click editor menus and
  type in the editor's Cmd box (so `py "script.py"` runs editor Python).
- What it cannot do: click inside the Fab window (it is a web page), or sign in.

If the server does not answer: is the editor open? Type
`ModelContextProtocol.StartServer` in the editor's Cmd box.

#### 1C. Phoenix: get the assets (needs the Epic account)

**Done 2026-11-11 for the stone kit (checked):** the Megascans "Historic Medieval
Church Ruin" kit is imported under `/Game/Fab/Megascans`. It is one matching stone:
arches, doors, windows, walls, columns, floors, stairs, trims, debris. Build the look
room with this kit first. Fire effects and props are still to get.

**To add more packs, follow `docs/ASSETS.md`, "How to add Megascans packs".** That
route is proven and an agent can run it; Phoenix only signs in and accepts prompts.

What to look for. All were free when this was written. **Check the price on each page before clicking.
Ask dad before anything that costs money (R9).**

| Need | Look for on Fab | Notes |
|---|---|---|
| Stone, brick, rubble, floors | **Quixel Megascans**: search "limestone", "castle wall", "roman", "brick", "rubble", "paving" | The whole Megascans library went free in November 2026. Choose "High" quality, not "Raw". |
| Big ruined architecture | Megascans 3D assets and collections: arches, columns, steps, broken walls | Pick one stone type and stay with it. |
| Fire, embers, sparks, magic | Epic's free **Infinity Blade: Effects**, and Niagara fire and ember packs filtered by Price: Free | |
| Props | Epic's free **Paragon** and **Infinity Blade** environment packs: braziers, banners, crates, metalwork | Skip anything with skulls or gore (R7). |
| First-person arms and animation | Already installed: `D:\Games\UE_5.8\Templates\TP_FirstPerson`, the `Variant_Shooter` content | Use as placeholder until the hero art in Step 3. |

Aim for about 30 to 40 different assets. Fewer assets used well beats many.
Write every pack into `docs/ASSETS.md`.

#### 1D. Phoenix builds the room; the agent helps

Create the map `/Game/Firebird/Maps/L_LookRoom`. Build one arena:

1. **Size:** about 30 m by 30 m, ceiling 8 to 10 m, with one raised walkway or
   balcony so there are two heights.
2. **Block it out first** with plain cubes. Walk it with `ue-play.ps1 -Map`.
   Fix the shape before adding any art.
3. **Replace cubes with Megascans pieces.** One stone type for walls, one for
   the floor, bronze or brass for trim.
4. **Light it. This matters more than the assets.**
   - One strong warm light source the room is built around: a furnace glow, a
     big brazier, or a shaft of sunset light through a broken roof.
   - Three to five small warm lights (braziers, lanterns). Leave real darkness
     between them.
   - One cyan light on one object (a waystone) as the only cool colour.
   - No light that brightens everything evenly. Flat even light is what made
     the last version look old.
5. **Air:** add Exponential Height Fog with Volumetric Fog on, tinted warm
   brown. Add a Niagara ember effect drifting up.
6. **Camera look:** add a Post Process Volume set to Infinite Extent. Lock
   exposure (min and max the same), a little bloom, a slight vignette.
7. **Add 4 `PlayerStart` actors**, spread out.
8. Lumen is already on in `DefaultEngine.ini`. Leave it on.

#### 1E. The gate

1. Take 6 screenshots from fixed spots at 1920x1080 and save them in
   `docs/evidence/look-gate/`.
2. Phoenix picks 2 screenshots from a modern game he likes and puts them in the
   same folder.
3. Phoenix looks at them side by side and answers one question:
   **"Would this room look out of place in that game?"**
4. Check the frame rate on this PC with `stat fps` in the room. It must hold
   60 or more.

**Done when:** Phoenix says the room does not look out of place, and the log
records it as human-played with the date. An agent may not pass this gate.

**If it fails three times:** stop. Write what Phoenix disliked each time, and
ask him whether to try a bold stylized look instead of a realistic one.

#### 1F. After the gate passes: start the asset studio (Phoenix asked for this 2026-11-11)

Not before the gate. The room shows which pieces are missing; build only those.

1. Make `/Game/Firebird/Kit/`. Save each reusable chunk built for the room there as its
   own asset (a doorway with steps, a broken wall corner, a brazier alcove). Use Packed
   Level Actors or merged meshes made from the Megascans pieces.
2. Make material variants as material instances in `/Game/Firebird/Kit/Materials/`:
   scorched, mossy, ember-lit. Do not edit the imported Megascans materials themselves.
3. New original props (braziers, altars, statues) are modelled by hand and textured with
   the kit's stone so they match. Kid-safety rules apply (R7).
4. Keep a catalogue: `docs/KIT.md`, one row per chunk with a screenshot and where it is used.
5. When a second game needs the kit, move it to a shared folder then. Not earlier.

Licence limits are in `docs/ASSETS.md`. The studio is for our own games only.

---

### Step 2: versus on the LAN

**Goal:** Phoenix, his brother and his dad play a real match on three PCs.

The mode is called **Spar**: Riley's training ring. A tagged player bursts into
light and comes back 3 seconds later.

**Rules for version one. Do not add more.**

- Free-for-all, 2 to 4 players. First to 15 tags wins, or most tags after 8 minutes.
- Everyone has the same kit: Spark Caster, Ember Fist, dash, slide.
- One Bell Blaster pickup in the middle of the map, back every 30 seconds.
- Health pickups in the side areas. No health from tagging players.
- Spawn at the `PlayerStart` furthest from other players. 2 seconds of
  protection after spawning.
- Scoreboard on Tab. Winner screen, then the same map restarts.

**Tasks, in order:**

1. Agent: add `AFirebirdSparMode` (a game mode) with the rules above. The host
   decides all hits and scores, as it already does in co-op.
2. Agent: players can damage each other in Spar only. Co-op keeps friendly fire off.
3. Agent: add the Bell Blaster (a 7-pellet spread, numbers from `STYLE_GUIDE.md`
   and v2).
4. Agent: add "SPAR" to the start menu's host choice. Joining stays the same.
5. Phoenix: turn `L_LookRoom` into the Spar map by adding cover so no spot sees
   the whole room, and making sure every area has two ways in. The map rules
   are section M of `..\LEVEL_DESIGN_CONTRACT.md`.
6. Agent: `.\tools\ue-package.ps1`, then copy `builds\windows` to the other two
   PCs on a USB stick or shared folder.
7. Everyone: on each PC, note the graphics card (Task Manager > Performance >
   GPU). Write them in the log. If one PC cannot hold 60 fps, lower the quality
   setting on that PC first, and only change the map if that is not enough.
8. Play three matches.

**Known trap:** the first time the game hosts, Windows asks about the firewall.
Click **Allow**. If it was dismissed, Windows silently blocks joining. Check with
`Get-NetFirewallRule -DisplayName "Firebird*"` and remove any Block rule.

**Done when:** three real PCs finish a match together, and Phoenix writes down
one thing that was fun and one thing that was annoying. Log it as human-played.

---

### Step 3: co-op arena

**Goal:** the three of them clear a wave fight together and want to go again.

1. Move the wave logic out of `FBRange` into a new `AFirebirdArenaDirector`
   actor that Phoenix places in a map. It spawns Hollows at spawn-point actors
   he also places.
2. Build a second map, `L_Forge`, the same way as Step 1D.
3. Add two enemies, each met alone before it appears in a group: the **Hollow
   Hound** (fast, bites, runs when hurt) and one heavy that must be flanked.
   Every attack keeps a wind-up of at least half a second.
4. Hero art: make or buy a proper Hollow, Hound, Firebird arms and Spark Caster.
   This is the one place original art is allowed. Judge it inside the room from
   Step 1, never in Blender.
5. Replace the placeholder sounds with real ones from Fab or a sound library.
6. Restyle the HUD to match the look. Keep the information it shows.

**Done when:** all three finish the arena on three PCs and at least one asks to
play again without being prompted. Log it as human-played.

---

### Step 4: co-op campaign

**Goal:** Episode One, one level at a time, starting with **The Furnace**.

For every level, in this order:

1. Write the level brief (the template is in `..\LEVEL_DESIGN_CONTRACT.md`
   section 2) in `docs/LEVELS.md`.
2. Block it out with cubes and play it.
3. Replace the cubes with art and light it.
4. Family plays it. Fix what confused or bored them.
5. Only then start the next level.

Riley as the final boss, the story beats and the level order are in
`docs/STORY_BIBLE.md`. Her logic is in `archive/browser/js/riley.js` and gets ported to C++
when her level comes up, not before.

**Done when:** each level is logged as human-played before the next one starts.

---

## 6. Things that will go wrong

| Problem | What to do |
|---|---|
| Build fails with "Close the Firebird editor" | Close the Unreal editor and the game, then build again. |
| Fab packs are missing after a fresh checkout | They are not in git. Download each one listed in `docs/ASSETS.md` again. |
| Losing the maps and assets | After every session that changes maps, copy `engine\Content` to `C:\FirebirdBackup\<date>`. |
| The room looks flat | It is the lighting, not the assets. Remove lights until there are real shadows, then add back one at a time. |
| Everything glows white | Exposure is not locked. Set min and max exposure the same in the Post Process Volume. |
| An agent wants to generate art or build the level in code | That is rule R4 or R5. Don't. |
| An agent says a step is done because tests pass | That is rule R2. Ask who looked at it or played it. |
| The Family Arcade copy stops building | The arcade builds from source and will not have the Fab packs. From Step 1 on, the arcade can only take packaged builds. See R10. |

---

## 7. Log format

Add to the top of `docs/REBOOT_LOG.md`:

```
## YYYY-MM-DD: step N, short title
Did: what changed, in plain words.
Proof: checked / bot-played / human-played, and what exactly.
Phoenix said: his words, or "has not seen it yet".
Sessions since Phoenix last played: N
Next: the single next task.
```

---

## Appendix: suggested changes to GamesOS

Not applied. `D:\TE-Code\ProductOS` is dad's repo, so these are for him to
decide. They are the general form of rules R1, R3 and R5.

1. **Look gate first.** A new 3D game builds one room and a person approves it
   from a screenshot beside a real game in the same genre, before any other work.
2. **Human-play stop.** No game gets more than two build sessions without a
   person playing it. Bot evidence cannot unlock the next stage.
3. **Asset rule.** World art for 3D games comes from pro packs by default.
   Generated or original art is for hero characters and weapons only. The docs
   currently never mention Fab or Megascans.
4. **One short page.** Put those three rules at the top of the GamesOS
   `CLAUDE.md`, because rules spread over 85 documents do not get followed.
