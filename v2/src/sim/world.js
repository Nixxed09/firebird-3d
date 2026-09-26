// FIREBIRD 3D v2 world: a grid of cells, each with a wall id or a floor and
// ceiling height. Units are cells (1 cell = 2 m); y is up.
// Pure logic: no DOM, no three.js.

export var WALL_IDS = { '#': 1, '%': 2, 'M': 3, 'T': 4, 'H': 5, 'D': 6, 'R': 7, 'U': 8, 'X': 9, 'S': 11 };
export var DOOR_IDS = { 6: true, 7: true, 8: true, 11: true };
export var FLOOR_STEP = 0.25;     // one height digit
export var DEFAULT_CEIL = 2;      // 4 m rooms
export var STEP_UP = 0.3;         // what you can walk up (0.6 m)
export var JUMP_UP = 0.55;        // what a jump clears (1.1 m)

// Height layers are strings of digits/letters: 0-9 then a-z continue upward.
function heightOf(ch) {
  if (ch >= '0' && ch <= '9') return (ch.charCodeAt(0) - 48) * FLOOR_STEP;
  if (ch >= 'a' && ch <= 'z') return (ch.charCodeAt(0) - 87) * FLOOR_STEP;
  return 0;
}

export function buildWorld(L) {
  var m = L.map, mw = m[0].length, mh = m.length;
  var W = {
    mw: mw, mh: mh,
    cells: new Uint8Array(mw * mh),
    floor: new Float32Array(mw * mh),
    ceil: new Float32Array(mw * mh),
    doors: {}, lifts: []
  };
  var baseCeil = L.ceilHeight || DEFAULT_CEIL;
  for (var z = 0; z < mh; z++) {
    for (var x = 0; x < mw; x++) {
      var ch = m[z][x], i = z * mw + x;
      var id = WALL_IDS[ch] || 0;
      W.cells[i] = id;
      W.floor[i] = L.heights ? heightOf(L.heights[z][x]) : 0;
      // ceilings layer: absolute height per cell ('.' = the level's default)
      W.ceil[i] = L.ceilings && L.ceilings[z][x] !== '.' ? heightOf(L.ceilings[z][x]) : baseCeil;
      if (W.ceil[i] < W.floor[i] + 1) W.ceil[i] = W.floor[i] + 1; // always room to stand
      if (DOOR_IDS[id]) {
        W.doors[x + ',' + z] = {
          x: x, z: z, open: 0, state: 'closed', timer: 0,
          locked: id === 7 ? 'red' : id === 8 ? 'blue' : null,
          secret: id === 11, found: false, used: false
        };
      }
      if (ch === 'L') W.lifts.push({ x: x, z: z, top: W.floor[i], bottom: 0, pos: 0, state: 'down', wait: 0 });
    }
  }
  // doors take the floor of the lower side they join and the ceiling above it
  for (var k in W.doors) {
    var d = W.doors[k], lo = Infinity, ce = 0;
    nbrs(W, d.x, d.z).forEach(function (n) {
      if (W.cells[n.i] === 0) { lo = Math.min(lo, W.floor[n.i]); ce = Math.max(ce, W.ceil[n.i]); }
    });
    var di = d.z * mw + d.x;
    W.floor[di] = lo === Infinity ? 0 : lo;
    // a door gets a lintel; a secret wall stays full height so its shape can't give it away
    W.ceil[di] = d.secret ? (ce || baseCeil) : Math.min(ce || baseCeil, W.floor[di] + 1.5);
  }
  // a lift rests at its lowest neighbour and rises to its own height
  W.lifts.forEach(function (lf) {
    var lo = Infinity;
    nbrs(W, lf.x, lf.z).forEach(function (n) {
      var open = W.cells[n.i] === 0 || DOOR_IDS[W.cells[n.i]];
      if (open && !isLift(W, n.x, n.z)) lo = Math.min(lo, W.floor[n.i]);
    });
    lf.bottom = lo === Infinity ? 0 : Math.min(lo, lf.top);
    lf.pos = lf.bottom;
    var li = lf.z * mw + lf.x;
    W.floor[li] = lf.pos;
    W.ceil[li] = Math.max(W.ceil[li], lf.top + 1.2);
  });
  return W;
}

function isLift(W, x, z) {
  for (var i = 0; i < W.lifts.length; i++) if (W.lifts[i].x === x && W.lifts[i].z === z) return true;
  return false;
}

export function nbrs(W, x, z) {
  var out = [];
  [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(function (o) {
    var nx = x + o[0], nz = z + o[1];
    if (nx >= 0 && nz >= 0 && nx < W.mw && nz < W.mh) out.push({ x: nx, z: nz, i: nz * W.mw + nx });
  });
  return out;
}

export function cellAt(W, x, z) {
  if (x < 0 || z < 0 || x >= W.mw || z >= W.mh) return 1;
  return W.cells[z * W.mw + x];
}
export function doorAt(W, x, z) { return W.doors[x + ',' + z] || null; }

// a wall, or a door that is not open enough to pass
export function solidCell(W, x, z) {
  var c = cellAt(W, x, z);
  if (c === 0) return false;
  if (DOOR_IDS[c]) { var d = doorAt(W, x, z); return !d || d.open < 0.9; }
  return true;
}
export function floorAt(W, x, z) { return W.floor[z * W.mw + x]; }
export function ceilAt(W, x, z) { return W.ceil[z * W.mw + x]; }

// The highest floor under a circle at (x, z), and whether the circle fits there
// for a body whose feet are at `feet`, `h` tall, able to step up `step`.
export function probe(W, x, z, r, feet, h, step) {
  var x0 = Math.floor(x - r), x1 = Math.floor(x + r), z0 = Math.floor(z - r), z1 = Math.floor(z + r);
  var ground = -Infinity, lowCeil = Infinity;
  for (var cz = z0; cz <= z1; cz++) {
    for (var cx = x0; cx <= x1; cx++) {
      if (solidCell(W, cx, cz)) return { blocked: true };
      var f = floorAt(W, cx, cz), c = ceilAt(W, cx, cz);
      if (f > feet + step + 1e-4) return { blocked: true };
      ground = Math.max(ground, f);
      lowCeil = Math.min(lowCeil, c);
    }
  }
  if (lowCeil < Math.max(feet, ground) + h - 1e-4) return { blocked: true };
  return { blocked: false, ground: ground, ceil: lowCeil };
}

// Slide a body horizontally, one axis at a time. Returns true if fully moved.
export function slideMove(W, e, dx, dz, r, h, step) {
  var ok = true;
  if (dx !== 0) { if (!probe(W, e.x + dx, e.z, r, e.y, h, step).blocked) e.x += dx; else ok = false; }
  if (dz !== 0) { if (!probe(W, e.x, e.z + dz, r, e.y, h, step).blocked) e.z += dz; else ok = false; }
  return ok;
}

export function groundUnder(W, x, z, r) {
  var x0 = Math.floor(x - r), x1 = Math.floor(x + r), z0 = Math.floor(z - r), z1 = Math.floor(z + r), g = -Infinity;
  for (var cz = z0; cz <= z1; cz++) for (var cx = x0; cx <= x1; cx++) {
    if (!solidCell(W, cx, cz)) g = Math.max(g, floorAt(W, cx, cz));
  }
  return g === -Infinity ? 0 : g;
}

// 3D ray through the grid: stops at walls, closed doors, step faces, floors and ceilings.
// Returns { dist, x, y, z, kind: 'wall'|'floor'|'ceil'|'none', cx, cz }.
export function castRay(W, ox, oy, oz, dx, dy, dz, maxDist) {
  var hlen = Math.sqrt(dx * dx + dz * dz);
  var mapX = Math.floor(ox), mapZ = Math.floor(oz);
  var ddx = hlen > 1e-9 ? Math.abs(1 / dx) : 1e30, ddz = hlen > 1e-9 ? Math.abs(1 / dz) : 1e30;
  var stepX = dx < 0 ? -1 : 1, stepZ = dz < 0 ? -1 : 1;
  var sideX = dx < 0 ? (ox - mapX) * ddx : (mapX + 1 - ox) * ddx;
  var sideZ = dz < 0 ? (oz - mapZ) * ddz : (mapZ + 1 - oz) * ddz;
  var t = 0;
  for (var it = 0; it < 256; it++) {
    // leave the current cell at tNext; check floor/ceiling inside it first
    var tNext = Math.min(sideX, sideZ, maxDist);
    var f = floorAt(W, mapX, mapZ), c = ceilAt(W, mapX, mapZ);
    if (dy < 0) {
      var tf = (f - oy) / dy;
      if (tf >= t - 1e-6 && tf <= tNext) return hit(tf, 'floor');
    } else if (dy > 0) {
      var tc = (c - oy) / dy;
      if (tc >= t - 1e-6 && tc <= tNext) return hit(tc, 'ceil');
    }
    if (tNext >= maxDist) return hit(maxDist, 'none');
    t = tNext;
    if (sideX < sideZ) { sideX += ddx; mapX += stepX; } else { sideZ += ddz; mapZ += stepZ; }
    if (mapX < 0 || mapZ < 0 || mapX >= W.mw || mapZ >= W.mh) return hit(t, 'wall');
    var y = oy + dy * t;
    if (solidCell(W, mapX, mapZ)) return hit(t, 'wall');
    if (y < floorAt(W, mapX, mapZ) || y > ceilAt(W, mapX, mapZ)) return hit(t, 'wall'); // a step or lintel face
  }
  return hit(maxDist, 'none');

  function hit(d, kind) {
    return { dist: d, x: ox + dx * d, y: oy + dy * d, z: oz + dz * d, kind: kind, cx: mapX, cz: mapZ };
  }
}

export function hasLOS(W, ax, ay, az, bx, by, bz) {
  var dx = bx - ax, dy = by - ay, dz = bz - az;
  var d = Math.sqrt(dx * dx + dy * dy + dz * dz);
  if (d < 1e-3) return true;
  return castRay(W, ax, ay, az, dx / d, dy / d, dz / d, d).dist >= d - 0.05;
}

// Breadth-first flood; out[i] = steps, -1 = unreached. pass(fromIdx, x, z) decides.
var floodQ = null;
export function flood(W, ox, oz, maxSteps, pass, out) {
  var mw = W.mw, n = mw * W.mh;
  if (!floodQ || floodQ.length < n) floodQ = new Int32Array(n);
  out.fill(-1);
  var sx = Math.floor(ox), sz = Math.floor(oz);
  if (sx < 0 || sz < 0 || sx >= mw || sz >= W.mh) return;
  var head = 0, tail = 0;
  out[sz * mw + sx] = 0;
  floodQ[tail++] = sz * mw + sx;
  while (head < tail) {
    var c = floodQ[head++], st = out[c];
    if (st >= maxSteps) continue;
    var cx = c % mw, cz = (c / mw) | 0;
    for (var k = 0; k < 4; k++) {
      var nx = cx + (k === 0 ? 1 : k === 1 ? -1 : 0), nz = cz + (k === 2 ? 1 : k === 3 ? -1 : 0);
      if (nx < 0 || nz < 0 || nx >= mw || nz >= W.mh) continue;
      var nc = nz * mw + nx;
      if (out[nc] !== -1 || !pass(c, nx, nz)) continue;
      out[nc] = st + 1;
      floodQ[tail++] = nc;
    }
  }
}

// Lifts: rest at the bottom, rise when stood on (or used), come back down when left alone.
export function updateLifts(W, dt, occupied, onMove) {
  for (var i = 0; i < W.lifts.length; i++) {
    var lf = W.lifts[i], busy = occupied(lf.x, lf.z), prev = lf.pos;
    if (lf.state === 'down' && busy) { lf.state = 'wait'; lf.wait = 0.5; }
    else if (lf.state === 'wait') { lf.wait -= dt; if (lf.wait <= 0) { lf.state = 'up'; if (onMove) onMove(lf, 'start'); } }
    else if (lf.state === 'up') { lf.pos = Math.min(lf.top, lf.pos + dt * 0.9); if (lf.pos >= lf.top) { lf.state = 'top'; lf.wait = 2.5; if (onMove) onMove(lf, 'stop'); } }
    else if (lf.state === 'top') { if (busy) lf.wait = 2.5; else if ((lf.wait -= dt) <= 0) { lf.state = 'lower'; if (onMove) onMove(lf, 'start'); } }
    else if (lf.state === 'lower') {
      if (busy && lf.pos > lf.bottom + 0.05) { lf.state = 'up'; }
      else { lf.pos = Math.max(lf.bottom, lf.pos - dt * 0.9); if (lf.pos <= lf.bottom) { lf.state = 'down'; if (onMove) onMove(lf, 'stop'); } }
    }
    W.floor[lf.z * W.mw + lf.x] = lf.pos;
    lf.moved = lf.pos - prev;
  }
}
