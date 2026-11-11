FIREBIRD ORIGINAL ART KIT V01

Open Firebird_ArtKit_v01.blend in Blender 4.5 or newer.
This is an original, stylized first art pass for the Unreal game, following
../STYLE_GUIDE.md. The concept image is a visual target; renders/ contains
images rendered from the actual modeled geometry.

BLENDER SCENES
01 - Editable asset library: twenty-four individually grouped source assets.
02 - Ashgate courtyard: an assembled, lit demonstration of the modular kit.
03 - Hero asset turntable: Hollow and Spark Caster product lighting.
04 - Firebird player: assembled armor, helmet, wings, limbs and weapon.
The file opens on the courtyard camera. Numpad 0 switches camera view.
All textures used in Blender are packed into the .blend; external copies are
in textures/. Unreal's additional structural maps are in surfaces/.

DELIVERED ASSETS
SM_FB_Arch_4m       Limestone arch, bronze inlay, crown star.
SM_FB_Column_4m     Octagonal civic column with conductive bronze flutes.
SM_FB_Wall_4m       Staggered limestone courses and bronze trim.
SM_FB_Floor_4m      Basalt paving with an eight-point star inlay.
SM_FB_Bell          Bronze bell with modeled inner wall and clapper.
SM_FB_Lantern       Amber crystal, bronze cage, turned pedestal.
SM_FB_Waystone      Restored cyan ring, crystal, octagonal plinth.
SM_FB_MercuryCask   Crimson reservoir and protective bronze bands.
SM_FB_SparkCaster   Open-cage crystal resonance weapon with grip pivot.
SK_FB_Hollow        Layered ash-shell character, 17-bone articulated rig.
SM_FB_Vault_10m     Ribbed stone barrel vault with a 10m clear span.
SM_FB_Cornice_4m    Molded limestone and bronze wall crown.
SM_FB_EmberGauntlet Armored wrist, knuckles and amber hand core.
SM_FB_FirebirdHelmet  Faceted helmet, aether visor and phoenix crest.
SM_FB_FirebirdTorso   Bronze flight cuirass and shoulder plates.
SM_FB_FeatherWing     Five swept metal feathers with luminous edges.
SM_FB_FirebirdLeg     Plated thigh, knee, greave and boot; hip pivot.
SM_FB_FirebirdArm     Shoulder-pivot upper arm and bent armored forearm.
SM_FB_RubbleCluster   Chipped masonry for the course perimeter.
SM_FB_StarPlaque      Eight-point civic seal on an octagonal backing.
SM_FB_ResonanceRing   Expanding halo for releases and restored power.
SM_FB_AshShard        Angular shell flake for spinning debris.
SM_FB_LightMote       Faceted light seed for rising motes and embers.
SK_FB_Firebird        Complete 21-bone player rig, armor, wings, hands and Caster.

There are FBX and self-contained GLB exports for each asset. The measured
dimensions and triangle counts are in asset-manifest.json and validation.json.
Source units are meters, Z up, with the Hollow and Caster facing -Y.
The arch uses a 4m bay pitch; its capitals extend to 4.16m total width.
The Hollow is approximately 1.87m tall. The Caster is approximately 0.51m long.
Architecture pivots sit at the module base; the Caster pivot is near the palm.

MATERIALS
Six authored tileable 512px PBR texture sets: limestone, ash shell, basalt,
bronze, gold edge and obsidian. Each includes base color, roughness and
OpenGL normal maps. Three additional materials supply crimson, cyan and amber
emission. These are procedural original textures, not downloaded stock art.
The Unreal importer flips normal-map green channels for Unreal convention.
Five additional 1024px structural PBR sets live in surfaces/: limestone
blocks, basalt pavers, silt brick, riveted bronze panels and ceiling stone.
Unreal world-space projection keeps their scale consistent on large walls,
floors, gates, platform sides and undersides. A separate animated material
gives the furnace mercury a dark crust with slow moving crimson seams.
Cut stone on architectural meshes uses world-space projection at an 85cm
tile size, avoiding stretched grain on the tall columns and large vaults.
Structural shaders include broad color variation and dirt near wall bases.

ANIMATION
Select Hollow_Rig in the editable library scene. In the Action Editor, choose:
A_FB_Hollow_Idle       Frames 1-60
A_FB_Hollow_Walk       Frames 1-32, in-place walk
A_FB_Hollow_Windup     Frames 1-20, right-arm anticipation
A_FB_Hollow_Cracked    Frames 1-36, vulnerable stagger
A_FB_Hollow_Release    Frames 1-30, open pose and upward lift
Actions use 30 fps. Muted NLA tracks preserve the actions for inspection;
choose one Action for playback, or unmute only the desired NLA track.
Armor is rigid-weighted to its joints. This avoids rubbery stone deformation.
Release combines a pose animation with a runtime cellular shell dissolve,
spinning ash flakes, rising light seeds and expanding amber resonance rings.

Select Firebird_Rig for the player clips (all at 30 fps, all in-place):
A_FB_Firebird_Idle        Breathing, small wing movement; 61 frames.
A_FB_Firebird_Run         Bent-knee forward stride; 25 frames.
A_FB_Firebird_Back        Backpedal stride; 25 frames.
A_FB_Firebird_StrafeL/R   Lateral strides; 25 frames each.
A_FB_Firebird_Crouch      Deep crouch with folded wings; 33 frames.
A_FB_Firebird_Jump/Fall   Asymmetric airborne leg and wing poses; 19/25 frames.
A_FB_Firebird_Down        Kneeling recovery pose; 31 frames.
A_FB_Firebird_Punch       Left-arm extension and recovery; 13 frames.
A_FB_Firebird_Fire        Right-arm weapon recoil; 9 frames.
The player closes the waist with a continuous belt and overlapping hip plates.
Rigid skinning preserves the hard armor while knees, elbows, hands and wings
articulate. Loop endpoints are checked for matching poses. FBX round-trip
validation counts skeletal clips separately from transform-only root tracks.

UNREAL
Imported assets live under /Game/Firebird/ArtKitV01, with Meshes, Materials,
Textures and Animations subfolders. The Hollow has five AnimSequences; the player has eleven on its own skeleton.
The playable course now uses these assets: arcade walls, ribbed ceilings,
cornices, lanterns, civic seals, arena columns, a suspended bell and a cyan
waystone. Original course collision and movement distances remain in place;
instanced decoration has collision disabled. Hollow gameplay selects idle,
walk, windup, cracked and release animations. The view rig uses the Caster
and gauntlets; teammates see the helmet, cuirass, moving armored limbs and
phoenix wings. The native player animation graph blends idle and directional
strides using local velocity, synchronizes the stride phase, and layers weapon
recoil and punches over the lower-body pose. Crouch, airborne and downed states
transition smoothly. The capsule controls gameplay movement; animation adds no
root motion. All actor reads are copied on the game thread before animation
workers evaluate the blend graph. Shot/release lighting preserves readability.
Winning restores the arena: crimson wall conduits transition to cyan, the
waystone brightens, and a resonance pulse announces restored power. The
clear state replicates so a late joiner also receives the restored grid.
Static exchange meshes have complex collision available for future use;
physics simulation would need authored simple colliders. This is a playable
art pass. Eleven denser static meshes have three generated detail levels
(100%, approximately 55%, approximately 28% triangles); low-detail assets
remain single-level. Short-lived resonance rings force their full-detail
level to preserve the narrow arc. Reload validation measures actual triangle
counts. The player now has authored full-body animation; foot IK, dedicated
slide/dash clips, skeletal LODs and broad hardware profiling remain future work.

REBUILD (PowerShell from the firebird-ue directory)
& 'C:\Program Files\Blender Foundation\Blender 4.5\blender.exe' -b --python-exit-code 1 --python art\source\build_firebird_art.py
Add -- --skip-render to omit beauty renders.
To refresh renders from the saved .blend without rebuilding the models:
& 'C:\Program Files\Blender Foundation\Blender 4.5\blender.exe' -b --python-exit-code 1 --python art\source\render_firebird_art.py
Rebuilding replaces the generated v01 kit and exports: save manual edits as
a new .blend filename before rebuilding.

VERIFY
& 'C:\Program Files\Blender Foundation\Blender 4.5\blender.exe' -b --python-exit-code 1 --python art\source\validate_firebird_art.py
The report checks geometry, UVs, material assignment, skin weights, embedded
GLB textures, five animation clips, windup motion, and an FBX round-trip of
the arch, Caster and Hollow. See validation.json for measured results.

REIMPORT TO UNREAL
python art\source\build_surface_textures.py
.\tools\ue-import-art-kit.ps1
This updates only the generated ArtKitV01 content. Save custom edits under
different names before reimporting. See unreal-import-report.json for results.
The wrapper also builds world-space shaders and tests asset reload in a fresh
editor process. For character-only iteration after a full import, use
ue-import-art-kit.ps1 -MeshOnly SK_FB_Firebird; it retains the existing surface
shaders and verifies all saved mesh and animation dependencies again. Use tools\ue-build.ps1 after changing C++ integration code.

IN-GAME REVIEW
.\tools\ue-capture.ps1 -Scenario art -ResX 1600 -ResY 900
Twelve actual gameplay screenshots cover arrival, pit, slide gate, both arena
directions, ceiling, Hollow, player armor, mercury, weapon clearance, shell
release and restored power. The review freezes
enemies and creates one armor preview pawn only in this automation scenario.
Cold editor shader compilation completes before the first art screenshot.
Movement and combat checks: ue-capture.ps1 -Scenario feel, then -Scenario nodash.
Player motion review: ue-capture.ps1 -Scenario motion -Video. This drives a
second pawn through real input and captures eleven poses, with measured foot
motion, crouch height, airborne pose and punch reach checks.
Network check: ue-coop-test.ps1 -Players 2. Package: ue-package.ps1.
Use -Packaged on the network check to test the delivered executable; it also
measures remote skeletal motion on each machine, not just actor movement.
Add -Packaged to ue-capture.ps1 to review the standalone game executable.
The delivered Windows build is ../builds/windows/Start-Firebird.bat.
Captured packaged-game screenshots are in renders/runtime/; the short
gameplay recording is renders/firebird-gameplay-v01.mp4. The clean player
motion review is renders/firebird-player-motion-v01.mp4, with individual poses
in renders/motion/. The motion review hides the observer HUD and weapon only
for that capture. These are actual
Unreal output. The other PNGs in renders/ are Blender studio renders.
runtime-validation.json records asset checks, packaged gameplay checks,
the no-dash control test, and both sides of the local two-player co-op run.
Failed earlier automation attempts remain in the report for traceability.
Packaged co-op automation renders offscreen so two hidden Windows swapchains
do not compete for presentation. This is a functional check, not a performance
benchmark. The game itself continues to open in its normal window.
To collect a new set of passing review captures, run:
python tools/ue-record-art-review.py --help
The collector requires passed summaries, all referenced screenshots, both
videos, valid Blender geometry, and fresh Unreal asset reload evidence.

Importer API reference:
https://dev.epicgames.com/documentation/en-us/unreal-engine/python-api/class/FbxImportUI

CONCEPT PROVENANCE
concepts/firebird-art-direction-v01.png was generated with the built-in
imagegen tool. Its full prompt is saved beside it as .prompt.txt.
The Blender models and PBR textures were built with source/build_firebird_art.py.
No third-party models or asset packs were used.
