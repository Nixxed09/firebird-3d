// FIREBIRD 3D v2 level lab: measures a level's layout against the Level
// Design Contract (games/LEVEL_DESIGN_CONTRACT.md, sections 3 and 3b) with
// graph maths and sightlines, on the game's own world model.
//   node tools/lab.mjs [levelIndex|all] [--png out.png]
// It measures structure. It can't measure fun: bots measure difficulty, and
// a person playing decides.
import fs from 'fs';
import zlib from 'zlib';
import { buildWorld, solidCell, floorAt, ceilAt, cellAt, hasLOS, DOOR_IDS, STEP_UP, JUMP_UP } from '../src/sim/world.js';
import { LEVELS } from '../src/levels.js';

var EYE = 0.8;

// ---- the walk graph: which cells a player can move between, and how ---------------

function walkGraph(L, W) {
  var liftAt = {};
  W.lifts.forEach(function (lf) { liftAt[lf.x + ',' + lf.z] = lf; });
  function open(x, z, keys) {
    var c = cellAt(W, x, z);
    if (c === 0) return true;
    if (!DOOR_IDS[c]) return false;
    var d = W.doors[x + ',' + z];
    if (d.secret) return keys.secret;
    return !d.locked || keys[d.locked];
  }
  // a lift can be ridden from its bottom to its top: treat it as floor at either height
  function heights(x, z) { var lf = liftAt[x + ',' + z]; return lf ? [lf.bottom, lf.top] : [floorAt(W, x, z)]; }
  function edge(ax, az, bx, bz, keys) {
    if (!open(bx, bz, keys)) return null;
    if (W.lava[bz * W.mw + bx]) return null; // nobody plans a route through lava
    var headroom = ceilAt(W, bx, bz) - Math.max(floorAt(W, bx, bz), floorAt(W, ax, az));
    if (headroom < 0.95) return null;       // too low to stand up in (player 0.9 cells tall)
    var best = null;
    heights(ax, az).forEach(function (fa) {
      heights(bx, bz).forEach(function (fb) {
        var dh = fb - fa, kind = Math.abs(dh) < 0.02 ? 'walk' : dh < 0 ? 'drop' : dh <= STEP_UP + 1e-4 ? 'step' : dh <= JUMP_UP + 1e-4 ? 'jump' : null;
        if (kind && (!best || kind === 'walk' || kind === 'step')) best = kind;
      });
    });
    return best;
  }
  return { open: open, edge: edge };
}

var DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]];

function bfs(W, g, start, keys, oneWayOk) {
  var dist = new Int32Array(W.mw * W.mh).fill(-1), q = [start], from = new Int32Array(W.mw * W.mh).fill(-1);
  dist[start] = 0;
  while (q.length) {
    var c = q.shift(), x = c % W.mw, z = (c / W.mw) | 0;
    DIRS.forEach(function (o) {
      var nx = x + o[0], nz = z + o[1];
      if (nx < 0 || nz < 0 || nx >= W.mw || nz >= W.mh) return;
      var n = nz * W.mw + nx;
      if (dist[n] >= 0) return;
      var k = g.edge(x, z, nx, nz, keys);
      if (!k) return;
      dist[n] = dist[c] + (k === 'jump' ? 2 : 1); from[n] = c; q.push(n);
    });
  }
  return { dist: dist, from: from };
}

// ---- measurements --------------------------------------------------------------------

// the world after every event has played out: movers at their targets, lava toggled
function settle(L, W) {
  (L.events || []).forEach(function (ev) {
    (ev.do || []).concat.apply([], (ev.do || []).map(function (a) { return a.after ? a.do || [] : []; })).concat(ev.do || []).forEach(function (a) {
      var box = a.raise || a.lower;
      if (box) for (var z = box[1]; z <= box[3]; z++) for (var x = box[0]; x <= box[2]; x++) W.floor[z * W.mw + x] = a.to;
      if (a.lava) for (var z2 = a.lava[1]; z2 <= a.lava[3]; z2++) for (var x2 = a.lava[0]; x2 <= a.lava[2]; x2++) W.lava[z2 * W.mw + x2] = a.on ? 1 : 0;
    });
  });
}

export function analyse(L, index, opts) {
  opts = opts || {};
  var W = buildWorld(L), m = L.map;
  if (opts.settled !== false) settle(L, W);
  var g = walkGraph(L, W);
  var N = W.mw * W.mh, keysAll = { red: true, blue: true, secret: false };
  var find = function (chars) { var out = []; for (var z = 0; z < W.mh; z++) for (var x = 0; x < W.mw; x++) if (chars.indexOf(m[z][x]) >= 0) out.push({ x: x, z: z, ch: m[z][x], i: z * W.mw + x }); return out; };
  var start = find('p')[0], boss = find('Y')[0], exit = find('X')[0], goal = boss || exit;
  var mobs = find('igK'), keys = find('ru'), secretsMarks = find('*'), pickups = find('h+AbaP2ru');
  var reach = bfs(W, g, start.i, keysAll);
  var walkable = []; for (var i = 0; i < N; i++) if (reach.dist[i] >= 0) walkable.push(i);

  // S5 / C1: loops. Edges minus nodes plus components > 0 means cycles; count how many independent loops
  var edges = 0, nodes = walkable.length;
  walkable.forEach(function (c) {
    var x = c % W.mw, z = (c / W.mw) | 0;
    [[1, 0], [0, 1]].forEach(function (o) {
      var nx = x + o[0], nz = z + o[1], n = nz * W.mw + nx;
      if (nx < W.mw && nz < W.mh && reach.dist[n] >= 0 && (g.edge(x, z, nx, nz, keysAll) || g.edge(nx, nz, x, z, keysAll))) edges++;
    });
  });
  // count loops at room scale, not every open 2x2 floor patch: contract the open areas
  var loops = roomLoops(W, g, reach, keysAll);

  // N5: dead ends (a walkable cell with one way in), and whether each pays out
  var payAt = {}; pickups.concat(secretsMarks).forEach(function (p) { payAt[p.i] = true; });
  var deadEnds = [], deadPaid = 0;
  walkable.forEach(function (c) {
    var x = c % W.mw, z = (c / W.mw) | 0, deg = 0;
    DIRS.forEach(function (o) { var nx = x + o[0], nz = z + o[1]; if (nx >= 0 && nz >= 0 && nx < W.mw && nz < W.mh && reach.dist[nz * W.mw + nx] >= 0 && g.edge(nx, nz, x, z, keysAll)) deg++; });
    if (deg === 1) { deadEnds.push(c); if (payAt[c] || near(c, payAt, W, 1)) deadPaid++; }
  });

  // S2: the weenie. Can you see the goal (or its approach) from the start room, or early on the route?
  if (goal && reach.dist[goal.i] < 0) {
    // the exit switch is in a wall: aim for the reachable cell in front of it
    DIRS.forEach(function (o) { var n = (goal.z + o[1]) * W.mw + goal.x + o[0]; if (reach.dist[n] >= 0 && (goal.i === undefined || reach.dist[goal.i] < 0)) goal = { x: goal.x + o[0], z: goal.z + o[1], i: n, ch: goal.ch }; });
  }
  var goalPt = goal ? { x: goal.x + 0.5, y: floorAt(W, goal.x, goal.z) + 0.6, z: goal.z + 0.5 } : null;
  var path = [], c0 = goal ? goal.i : -1;
  while (c0 >= 0) { path.unshift(c0); c0 = reach.from[c0]; }
  var firstSight = -1;
  if (goalPt) for (var pi = 0; pi < path.length; pi++) {
    var pc = path[pi], px = pc % W.mw + 0.5, pz = ((pc / W.mw) | 0) + 0.5;
    if (canSee(W, px, floorAt(W, pc % W.mw, (pc / W.mw) | 0) + EYE, pz, goalPt, 40)) { firstSight = pi; break; }
  }

  // S3 / prospect-refuge: per cell, how much you can see (prospect) and how enclosed you are (refuge)
  var prospect = new Float32Array(N), refuge = new Float32Array(N);
  walkable.forEach(function (c) {
    var x = c % W.mw + 0.5, z = ((c / W.mw) | 0) + 0.5, ey = floorAt(W, c % W.mw, (c / W.mw) | 0) + EYE, seen = 0, rays = 24, walls = 0;
    for (var r = 0; r < rays; r++) {
      var a = r / rays * Math.PI * 2, d = rayLen(W, x, ey, z, Math.cos(a), Math.sin(a), 24);
      seen += d; if (d < 1.6) walls++;
    }
    prospect[c] = seen / rays; refuge[c] = walls / rays;
  });
  // overlooks: a spot at least 1 cell (2 m) above most of what it can see
  // overlooks: spots from which you can see a good patch of floor at least 2 m below you
  var overlookCells = [];
  walkable.forEach(function (c) {
    var cx = c % W.mw, cz = (c / W.mw) | 0, f = floorAt(W, cx, cz), ey = f + EYE, lower = 0;
    for (var tz = Math.max(0, cz - 10); tz <= Math.min(W.mh - 1, cz + 10); tz++) for (var tx = Math.max(0, cx - 10); tx <= Math.min(W.mw - 1, cx + 10); tx++) {
      var ti = tz * W.mw + tx;
      if (reach.dist[ti] < 0 || floorAt(W, tx, tz) > f - 0.9) continue;
      if (hasLOS(W, cx + 0.5, ey, cz + 0.5, tx + 0.5, floorAt(W, tx, tz) + 0.3, tz + 0.5)) lower++;
    }
    if (lower >= 12) overlookCells.push(c);
  });
  // count separate overlook places, not cells
  var overlooks = clusters(W, overlookCells);

  // P6 / C5: fair warning. For each demon, how far away is it when the player can first see it on the
  // critical path? Under 3 cells is a jump-scare.
  var sightings = mobs.map(function (e) {
    var ep = { x: e.x + 0.5, y: floorAt(W, e.x, e.z) + 0.6, z: e.z + 0.5 };
    for (var k = 0; k < path.length; k++) {
      var pc = path[k], px = pc % W.mw + 0.5, pz = ((pc / W.mw) | 0) + 0.5;
      if (canSee(W, px, floorAt(W, pc % W.mw, (pc / W.mw) | 0) + EYE, pz, ep, 20)) return Math.hypot(px - ep.x, pz - ep.z);
    }
    return null;
  });
  var jumpScares = sightings.filter(function (d) { return d !== null && d < 3; }).length;

  // S1: districts. Count distinct wall materials and floor heights used; a level with one of each has no districts.
  var mats = {}, heights = {};
  for (var q = 0; q < N; q++) { var id = W.cells[q]; if (id >= 1 && id <= 5) mats[id] = 1; if (reach.dist[q] >= 0) heights[W.floor[q].toFixed(2)] = 1; }

  // choke points: cells whose removal disconnects the start from the goal (articulation on the route)
  var chokes = 0;
  if (goal) path.forEach(function (c, k) {
    if (k === 0 || k === path.length - 1) return;
    var blocked = bfsWithout(W, g, start.i, keysAll, c);
    if (blocked[goal.i] < 0) chokes++;
  });

  // lanes: separate routes from the start area to the goal (no shared cells), found greedily
  var lanes = 0;
  if (goal && reach.dist[goal.i] >= 0) {
    var used = {};
    for (var li = 0; li < 4; li++) {
      var pth = routeAvoiding(W, g, start.i, goal.i, keysAll, used);
      if (!pth) break;
      lanes++;
      // routes may share the first and last steps and any doorway (doors are deliberate gates;
      // lanes are about the ground between them)
      pth.slice(3, -3).forEach(function (c) { if (!nearDoor(W, c)) used[c] = 1; });
    }
  }
  // range mix: for each walkable cell, the longest straight view (close < 4 cells, mid 4-10, long > 10)
  var ranges = { close: 0, mid: 0, long: 0 };
  walkable.forEach(function (c) {
    var x = c % W.mw + 0.5, z = ((c / W.mw) | 0) + 0.5, ey = floorAt(W, c % W.mw, (c / W.mw) | 0) + EYE, best = 0;
    for (var r = 0; r < 16; r++) { var a = r / 16 * Math.PI * 2; best = Math.max(best, rayLen(W, x, ey, z, Math.cos(a), Math.sin(a), 30)); }
    ranges[best < 4 ? 'close' : best <= 10 ? 'mid' : 'long']++;
  });
  var tot = nodes || 1, pc = [ranges.close / tot, ranges.mid / tot, ranges.long / tot];
  var rangeMix = -pc.reduce(function (s2, p) { return s2 + (p > 0 ? p * Math.log(p) : 0); }, 0) / Math.log(3); // 0 = one range only, 1 = even mix
  // circling: solid blocks standing free inside open space (pillars, crates) that you can run around
  var pillars = freeStanding(W, reach);

  return {
    index: index, name: L.name, cells: nodes, loops: loops, lanes: lanes, ranges: ranges, rangeMix: rangeMix, pillars: pillars, deadEnds: deadEnds.length, deadEndsPaid: deadPaid,
    route: path.length, routeFirstSeesGoal: firstSight, overlooks: overlooks, jumpScares: jumpScares,
    demonsNeverSeenOnRoute: sightings.filter(function (d) { return d === null; }).length,
    districts: Object.keys(mats).length, floorLevels: Object.keys(heights).length, chokepoints: chokes,
    meanProspect: avg(walkable.map(function (c) { return prospect[c]; })),
    maps: { W: W, reach: reach, path: path, prospect: prospect, refuge: refuge, mobs: mobs, start: start, goal: goal, secrets: secretsMarks, pickups: pickups }
  };
}

function nearDoor(W, c) {
  var x = c % W.mw, z = (c / W.mw) | 0;
  for (var dz = -1; dz <= 1; dz++) for (var dx = -1; dx <= 1; dx++) if (DOOR_IDS[cellAt(W, x + dx, z + dz)]) return true;
  return false;
}
function clusters(W, cells) {
  var set = {}, seen = {}, n = 0;
  cells.forEach(function (c) { set[c] = 1; });
  cells.forEach(function (c) {
    if (seen[c]) return;
    n++;
    var q = [c]; seen[c] = 1;
    while (q.length) {
      var k = q.pop(), x = k % W.mw, z = (k / W.mw) | 0;
      DIRS.forEach(function (o) { var m = (z + o[1]) * W.mw + x + o[0]; if (set[m] && !seen[m]) { seen[m] = 1; q.push(m); } });
    }
  });
  return n;
}
function routeAvoiding(W, g, from, to, keys, used) {
  var prev = new Int32Array(W.mw * W.mh).fill(-2), q = [from];
  prev[from] = -1;
  while (q.length) {
    var c = q.shift();
    if (c === to) break;
    var x = c % W.mw, z = (c / W.mw) | 0;
    DIRS.forEach(function (o) {
      var nx = x + o[0], nz = z + o[1];
      if (nx < 0 || nz < 0 || nx >= W.mw || nz >= W.mh) return;
      var n = nz * W.mw + nx;
      if (prev[n] !== -2 || used[n] || !g.edge(x, z, nx, nz, keys)) return;
      prev[n] = c; q.push(n);
    });
  }
  if (prev[to] === -2) return null;
  var out = [], k = to;
  while (k !== -1) { out.unshift(k); k = prev[k]; }
  return out;
}
// solid cells (or 2x2 blocks) with walkable floor all the way round them
function freeStanding(W, reach) {
  var n = 0, seen = {};
  for (var z = 1; z < W.mh - 1; z++) for (var x = 1; x < W.mw - 1; x++) {
    var i = z * W.mw + x;
    if (seen[i] || !solidCell(W, x, z) || DOOR_IDS[W.cells[i]]) continue;
    // flood the solid blob, then check its whole outline is walkable
    var blob = [i], q = [i], ok = true; seen[i] = 1;
    while (q.length) {
      var k = q.pop(), kx = k % W.mw, kz = (k / W.mw) | 0;
      DIRS.forEach(function (o) { var m = (kz + o[1]) * W.mw + kx + o[0], mx = kx + o[0], mz = kz + o[1]; if (mx > 0 && mz > 0 && mx < W.mw - 1 && mz < W.mh - 1 && !seen[m] && solidCell(W, mx, mz) && !DOOR_IDS[W.cells[m]]) { seen[m] = 1; q.push(m); blob.push(m); } });
    }
    if (blob.length > 12) continue; // that's a wall mass, not a pillar
    blob.forEach(function (k) {
      var kx = k % W.mw, kz = (k / W.mw) | 0;
      for (var dz = -1; dz <= 1; dz++) for (var dx = -1; dx <= 1; dx++) {
        var m = (kz + dz) * W.mw + kx + dx;
        if (blob.indexOf(m) < 0 && reach.dist[m] < 0) ok = false;
      }
    });
    if (ok) n++;
  }
  return n;
}
function avg(a) { return a.length ? a.reduce(function (s, v) { return s + v; }, 0) / a.length : 0; }
function near(c, set, W, r) {
  var x = c % W.mw, z = (c / W.mw) | 0;
  for (var dz = -r; dz <= r; dz++) for (var dx = -r; dx <= r; dx++) if (set[(z + dz) * W.mw + x + dx]) return true;
  return false;
}
function rayLen(W, x, y, z, dx, dz, max) {
  for (var t = 0.25; t < max; t += 0.25) {
    var cx = Math.floor(x + dx * t), cz = Math.floor(z + dz * t);
    if (solidCell(W, cx, cz) || floorAt(W, cx, cz) > y - 0.2 || ceilAt(W, cx, cz) < y) return t;
  }
  return max;
}
function canSee(W, x, y, z, p, max) {
  if (Math.hypot(p.x - x, p.z - z) > max) return false;
  return hasLOS(W, x, y, z, p.x, p.y, p.z);
}
function bfsWithout(W, g, start, keys, skip) {
  var dist = new Int32Array(W.mw * W.mh).fill(-1), q = [start];
  dist[start] = 0;
  while (q.length) {
    var c = q.shift(), x = c % W.mw, z = (c / W.mw) | 0;
    DIRS.forEach(function (o) {
      var nx = x + o[0], nz = z + o[1];
      if (nx < 0 || nz < 0 || nx >= W.mw || nz >= W.mh) return;
      var n = nz * W.mw + nx;
      if (n === skip || dist[n] >= 0 || !g.edge(x, z, nx, nz, keys)) return;
      dist[n] = dist[c] + 1; q.push(n);
    });
  }
  return dist;
}
// loops between rooms: shrink each open area to a node and each door or one-cell gap to an edge
function roomLoops(W, g, reach, keys) {
  var N = W.mw * W.mh, room = new Int32Array(N).fill(-1), rooms = 0;
  function isGap(c) { var x = c % W.mw, z = (c / W.mw) | 0; return DOOR_IDS[W.cells[c]] || narrow(W, x, z); }
  for (var c = 0; c < N; c++) {
    if (reach.dist[c] < 0 || room[c] >= 0 || isGap(c)) continue;
    var q = [c]; room[c] = rooms;
    while (q.length) {
      var k = q.pop(), x = k % W.mw, z = (k / W.mw) | 0;
      DIRS.forEach(function (o) {
        var nx = x + o[0], nz = z + o[1], n = nz * W.mw + nx;
        if (nx < 0 || nz < 0 || nx >= W.mw || nz >= W.mh || room[n] >= 0 || reach.dist[n] < 0 || isGap(n)) return;
        if (!g.edge(x, z, nx, nz, keys) && !g.edge(nx, nz, x, z, keys)) return;
        room[n] = rooms; q.push(n);
      });
    }
    rooms++;
  }
  // each gap cell joins the rooms it touches
  // each connected run of gap cells (a doorway or a corridor) is one link between the rooms it touches
  var links = [], gapSeen = {};
  for (var c2 = 0; c2 < N; c2++) {
    if (reach.dist[c2] < 0 || !isGap(c2) || gapSeen[c2]) continue;
    var run = [c2], q2 = [c2], touch = {}; gapSeen[c2] = 1;
    while (q2.length) {
      var k2 = q2.pop(), kx = k2 % W.mw, kz = (k2 / W.mw) | 0;
      DIRS.forEach(function (o) {
        var n = (kz + o[1]) * W.mw + kx + o[0];
        if (room[n] >= 0) touch[room[n]] = 1;
        else if (reach.dist[n] >= 0 && isGap(n) && !gapSeen[n]) { gapSeen[n] = 1; q2.push(n); run.push(n); }
      });
    }
    var t = Object.keys(touch).map(Number).sort(function (a, b) { return a - b; });
    for (var a = 0; a < t.length; a++) for (var b = a + 1; b < t.length; b++) links.push(t[a] + '-' + t[b]);
  }
  var E = links.length, parent = [];
  for (var r = 0; r < rooms; r++) parent[r] = r;
  function root(v) { while (parent[v] !== v) v = parent[v] = parent[parent[v]]; return v; }
  links.forEach(function (l) { var p = l.split('-').map(Number); parent[root(p[0])] = root(p[1]); });
  var comps = {}; for (var r2 = 0; r2 < rooms; r2++) comps[root(r2)] = 1;
  return Math.max(0, E - rooms + Object.keys(comps).length); // independent cycles in the room graph
}
function narrow(W, x, z) {
  var ew = solidCell(W, x - 1, z) && solidCell(W, x + 1, z), ns = solidCell(W, x, z - 1) && solidCell(W, x, z + 1);
  return ew || ns;
}

// ---- the contract verdicts --------------------------------------------------------------

export function verdicts(r) {
  var v = [];
  function rule(id, ok, what, soft) { v.push({ id: id, ok: ok, soft: !!soft, what: what }); }
  rule('S5', r.loops >= 1, r.loops + ' loop(s) between rooms (want 1+: a shortcut or circuit back to known ground)');
  rule('S2', r.routeFirstSeesGoal >= 0 && r.routeFirstSeesGoal <= r.route * 0.6, r.routeFirstSeesGoal < 0 ? 'the goal is never in view before you reach it (no weenie)' : 'goal first seen ' + r.routeFirstSeesGoal + ' of ' + r.route + ' steps along the route (want within the first 60%)', true);
  rule('S3', r.overlooks >= 2, r.overlooks + ' overlook spot(s) (want 2+: views down into a space before you enter it)', true);
  rule('P6', r.jumpScares === 0, r.jumpScares + ' demon(s) first seen closer than 3 cells on the route (want 0: warn before danger)');
  rule('N5', r.deadEnds === 0 || r.deadEndsPaid / r.deadEnds >= 0.6, r.deadEndsPaid + '/' + r.deadEnds + ' dead ends pay out (want most)', true);
  rule('S1', r.districts >= 2 && r.floorLevels >= 3, r.districts + ' wall material(s), ' + r.floorLevels + ' floor level(s) (want 2+ districts and 3+ heights)', true);
  rule('M1', r.lanes >= 2, r.lanes + ' separate lane(s) from start to goal (want 2+: more than one way to get there)', true);
  rule('M2', r.rangeMix >= 0.6, 'range mix ' + r.rangeMix.toFixed(2) + ' (close ' + r.ranges.close + ', mid ' + r.ranges.mid + ', long ' + r.ranges.long + ' cells; want 0.6+: a place for every weapon)', true);
  rule('M3', r.pillars >= 2, r.pillars + ' free-standing pillar(s) or blocks to circle (want 2+ in fight spaces)', true);
  rule('C1', r.chokepoints <= r.route * 0.5, r.chokepoints + ' of ' + r.route + ' route cells are chokepoints (a very linear level if this is most of them)', true);
  return v;
}

// ---- a picture of it -------------------------------------------------------------------------

function png(w, h, rgb) {
  var raw = Buffer.alloc((w * 3 + 1) * h);
  for (var y = 0; y < h; y++) { raw[y * (w * 3 + 1)] = 0; rgb.copy(raw, y * (w * 3 + 1) + 1, y * w * 3, (y + 1) * w * 3); }
  function crc(b) { var c, k, t = 0xffffffff; for (var n = 0; n < b.length; n++) { c = (t ^ b[n]) & 255; for (k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; t = (t >>> 8) ^ c; } return (t ^ 0xffffffff) >>> 0; }
  function chunk(ty, d) { var l = Buffer.alloc(4); l.writeUInt32BE(d.length); var td = Buffer.concat([Buffer.from(ty), d]), c = Buffer.alloc(4); c.writeUInt32BE(crc(td)); return Buffer.concat([l, td, c]); }
  var ih = Buffer.alloc(13); ih.writeUInt32BE(w, 0); ih.writeUInt32BE(h, 4); ih[8] = 8; ih[9] = 2;
  return Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk('IHDR', ih), chunk('IDAT', zlib.deflateSync(raw)), chunk('IEND', Buffer.alloc(0))]);
}

// floor height in grey, prospect as warm tint, the route in cyan, demons red (orange = jump-scare), start green, goal gold, secrets purple
export function picture(r, S) {
  S = S || 16;
  var M = r.maps, W = M.W, w = W.mw * S, h = W.mh * S, rgb = Buffer.alloc(w * h * 3);
  var onPath = {}; M.path.forEach(function (c) { onPath[c] = 1; });
  function fill(cx, cz, col, inset) {
    for (var y = cz * S + (inset || 0); y < (cz + 1) * S - (inset || 0); y++) for (var x = cx * S + (inset || 0); x < (cx + 1) * S - (inset || 0); x++) {
      var k = (y * w + x) * 3; rgb[k] = col[0]; rgb[k + 1] = col[1]; rgb[k + 2] = col[2];
    }
  }
  for (var z = 0; z < W.mh; z++) for (var x = 0; x < W.mw; x++) {
    var i = z * W.mw + x, id = W.cells[i];
    if (M.reach.dist[i] < 0) { fill(x, z, id ? [28, 26, 24] : [10, 10, 12]); continue; }
    var f = W.floor[i], pr = Math.min(1, M.prospect[i] / 14);
    var base = 50 + f * 40;
    fill(x, z, [Math.min(255, base + pr * 70), Math.min(255, base + pr * 30), base]);
    if (DOOR_IDS[id]) fill(x, z, [200, 160, 50], 5);
  }
  M.path.forEach(function (c) { fill(c % W.mw, (c / W.mw) | 0, [60, 210, 230], 6); });
  M.pickups.forEach(function (p) { fill(p.x, p.z, [230, 230, 230], 5); });
  M.secrets.forEach(function (p) { fill(p.x, p.z, [180, 80, 230], 4); });
  M.mobs.forEach(function (e) { fill(e.x, e.z, [230, 50, 40], 3); });
  fill(M.start.x, M.start.z, [60, 220, 90], 2);
  if (M.goal) fill(M.goal.x, M.goal.z, [255, 200, 40], 2);
  return png(w, h, rgb);
}

// ---- command line --------------------------------------------------------------------------

if (process.argv[1] && process.argv[1].replace(/\\/g, '/').endsWith('tools/lab.mjs')) {
  var which = process.argv[2] || 'all', pngArg = process.argv.indexOf('--png');
  var list = which === 'all' ? LEVELS.map(function (L, i) { return i; }) : [+which];
  list.forEach(function (i) {
    var r = analyse(LEVELS[i], i);
    console.log('\n' + r.name + '  (' + r.cells + ' walkable cells, route ' + r.route + ' steps, avg view ' + r.meanProspect.toFixed(1) + ' cells)');
    verdicts(r).forEach(function (v) { console.log('  ' + (v.ok ? 'ok  ' : v.soft ? 'soft' : 'MISS') + ' ' + v.id + ': ' + v.what); });
    if (pngArg > 0) {
      var out = process.argv[pngArg + 1].replace(/\.png$/, '') + '-' + i + '.png';
      fs.writeFileSync(out, picture(r)); console.log('  map: ' + out);
    }
  });
}
