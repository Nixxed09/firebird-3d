# UI pass (2026-10-13)

Before and after, 1600x900 (the size the Family Arcade starts the game at), from the bot runs.

| Screen | Before | After |
|---|---|---|
| Start menu | before-menu.jpg | after-menu.jpg |
| First seconds (controls card) | - | after-arrival-controls.jpg |
| Arena, a release | before-arena.jpg | after-release.jpg |
| Co-op wave | before-coop-wave.jpg | after-coop-wave.jpg |
| ARENA CLEAR | before-arena-clear.jpg | after-arena-clear.jpg |

What changed (`engine/Source/Firebird/Private/FirebirdHUD.cpp`): text drawn at its real size in
Roboto Bold/Regular (no scaled bitmaps, which blurred the title); colours picked as sRGB so the
ember, gold and soot are what the style guide says instead of washed pastels; the full-width
bottom slab became three compact plates (health with a bar, sparks, dash pips) so the Firebird's
hands stay visible; a wave plate bottom-right and a "you are P2" tag; Riley's radio as a centred
plate with the speaker tagged; a pulsing RIGHT CLICK prompt for a release and a "LIGHT RELEASED
+20 HEALTH +6 SPARKS" card; a centred ARENA CLEAR with the time and "Esc for the menu"; a menu
with real buttons (number keycap, one-line explanation, ENTER on the chosen one), a HOW TO PLAY
keycap card, and our own Firebird hidden behind the menu; the controls card for the first 16
seconds of play, which never covers a fight.

Hover preview for the arcade: `../preview/firebird-coop-preview.ogv` (8 s, 640x360, 30 fps, Theora,
no HUD) and `../preview/firebird-coop-preview.png`. Note: ffmpeg 8.1's own Theora decoder reports
`unpack_block_qpis` errors on libtheora output; Godot 4.7.1's VideoStreamTheora plays it (checked).
