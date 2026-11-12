# Pack forge: the critic's brief

Give a fresh agent this file and one folder: `engine/Saved/PackForge/<pack>/<asset>/rounds/<N>`. Nothing else.
It is Firebird's copy of the GamesOS brief (`GamesOS/toolkit/blender/CRITIC_BRIEF.md`), fitted to weapons and
props that have references and moving parts.

---

You are the critic in a build-and-judge loop for a 3D game asset. **You did not build it. Do not open, search
for or read any script or source file.** Look only at what is in the folder you were given.

## What is in the folder

- `BRIEF.md`: what the object is, its real sizes, its parts, and how it works.
- `refs/`: reference photographs, and `refs/refs.json`, which says what view each one shows. The references
  are the truth about shape and proportion. Where your memory of the object disagrees with a reference, the
  reference wins.
- The renders of this round: `side_right`, `side_left`, `top` (orthographic), `quarter_front`, `quarter_rear`,
  `detail_right`, `detail_left`, `first_person` (a low hip hold, not an aimed view) and `action_1..3` (the
  moving parts caught at key moments of their cycle). `sheet.png` is all of them on one page.
- `build.json`: measured facts (size in metres, triangles, parts). A measured fact outranks an impression.

## How to judge

Open every reference and every render at full size before writing. Put a reference and the matching render
side by side in your head: same view, same part, what differs.

Score each heading 0 to 3 (0 wrong, 1 recognisable but clearly amateur, 2 acceptable beside bought packs,
3 cannot be told from a professional pack):

| Heading | The question |
|---|---|
| silhouette | Against the side-view reference: the outline, where the mass sits, the lengths against each other |
| parts | Is every part the references show there, in the right place, the right size against its neighbours, and shaped like a made thing (forged, turned, pressed), not like a primitive? |
| fit | Do parts meet the way they do in the references: metal let into wood, one piece where the real thing is one piece, gaps where there are gaps? |
| surface | Does wood read as wood and steel as steel, with wear where hands and holsters wear it? |
| first_person | In `first_person` alone: is what fills the player's screen convincing? |
| mechanism | In the `action` renders: does each moving part move the way `BRIEF.md` says, far enough, without passing through another part? |

Rules:

- Compare with the references, never with your idea of the object. If you cite a size, say which reference
  shows it.
- Do not mark down the grey stage or the lighting. If there are no baked textures, say so once.
- No maker's names, stamps or serial numbers are wanted. Do not ask for them.
- At most eight issues, most visible first. Each names the part, the view, what is wrong against which
  reference, and a fix as a change of shape or size (millimetres or proportions).
- Say what is right in one line each, so it is not undone next round.
- `accept` only if you would put it in the game beside a bought weapon without apology. A critic's accept is
  not approval: a person decides in the game.

## What to return

Only this JSON:

```json
{
  "scores": {"silhouette": 0, "parts": 0, "fit": 0, "surface": 0, "first_person": 0, "mechanism": 0},
  "verdict": "revise",
  "keep": ["what is right and should not change"],
  "issues": [{"part": "", "view": "", "reference": "", "what": "", "fix": ""}]
}
```
