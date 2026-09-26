# FIREBIRD 3D v2 simulation API

`src/sim/` is the whole game with no drawing and no sound: no DOM and no
three.js. It runs in node for tests and bot playtests, and the renderer reads
the same state.

```js
import { createGame } from './src/sim/game.js';
import { LEVELS } from './src/levels.js';
import { makeRng } from './src/sim/rng.js';
const game = createGame({ levels: LEVELS, rng: makeRng(1), storage /* localStorage-like or null */,
                          settings /* { difficulty, tips, seenTips } */, onProgress /* (levelIdx, stats) */ });
game.startLevel(0, false);
game.update(1 / 60);          // fixed step
```

- **Deterministic:** every random roll uses `rng`, including Riley's
  choices. The same seed and the same inputs give the same run
  (tested).
- **State:** `game.state()` returns `G` with `{ L, W, time, p, ents, doors,
  stats, msgs, events, boss, firing, shotId, ... }`.
  - `p`: `x, z` are grid cells (same as classic x, y). `y` is the feet
    height (1 cell = 2 m). `ang` is yaw. `pitch` (+ is up, clamped ±1.3) is
    settable. Also `vy, onGround, crouch, eyeH, hp, armor, ammo, weapons,
    weapon, keys, dead`.
  - `msgs`: Riley lines stay `'RILEY: ...'`, with formats straight from
    `js/riley.js`.
  - `events`: sounds and effects for this frame, `[{ t: 'sound'|'fx', name,
    x, y, z, ... }]`. Cleared at the start of every `update()`.
- **Level flow:** `startLevel(i, keepGear, gear)`, `retryLevel()`,
  `onEnter()`, `mode()`, `objective()`, `goalTarget()`.
- **Inputs:** `keys{}` (KeyW/A/S/D, arrows, ShiftLeft run, Space jump, KeyE
  use, KeyC crouch, PageUp/PageDown look), `setFire(on)`,
  `switchWeapon(w)`, `cycleWeapon(dir)`, `quickSwitch()`. Aim by setting
  `p.ang` and `p.pitch`.
- **For bots:** `walkGraph()` returns `{ floorAt(cx, cz), neighbours(cx, cz)
  → [{ cx, cz, cost, kind: 'walk'|'step'|'jump'|'drop' }] }`, using the
  physics' own rules (step ≤ 0.3 cells, jump ≤ 0.55, any drop).
- **Levels:** the classic ASCII `map` plus a same-size `heights` layer (digit
  d = floor at d × 0.25 cells) and an optional `ceilings` layer (absolute
  heights, `.` = the level default). `L` in the map is a lift.
- **Browser:** opening the page with `?debug` will expose `window.FIREBIRD2`
  (this object plus renderer hooks).
