// Flow of play, from the persona bots' playtests (tests/playtest.js):
// what a level feels like over time and where players struggle, which the
// layout maths in tools/lab.mjs can't see (Level Design Contract P3/P5, N1).
//
// Every 0.5 s of game time a recorder takes one sample: cell, hp, armour,
// ammo, demons awake (and awake within 10 cells), damage taken since the last
// sample, the walking distance to the current objective, and whether the
// player is "lost". From all samples of all episodes it writes:
//   - an intensity curve per level (1-10 over the level's progress, 20 steps)
//   - heatmaps over the map: time spent, deaths, lost time
//
// Definitions (design choices, argue with them here):
//   objective  the keycard the level still needs, else the boss (if alive),
//              else the exit switch; distance is walking steps on the grid
//   lost       20 s or more without getting closer to the objective than the
//              best distance so far, while NOT in a fight: no awake demon within
//              10 cells and not within 12 cells of a living boss. (Circling the
//              boss at range makes no "progress" but isn't being lost.)
//   intensity  1 + 9 x (0.6 x damage over the last 2 s / 30, capped at 1
//                      + 0.4 x awake demons within 10 cells / 4, capped at 1)
//   P5         the bucket holding the peak; "ends high" = it is in the last quarter
//   S2 weenie  line of sight from eye height, within 40 cells, to the level's final
//              destination (the boss, or the exit switch's face): when it is first
//              seen (share of level time, and share of the route walked), and how
//              much of the rest of the approach keeps it in view
//   N2         at a real choice (2+ frontier targets within 20% of each other's
//              score without the torch term), how often a first-timer takes the
//              torch-flanked door, against chance, and whether that door is on the
//              critical path (start -> needed keycards -> destination)
//              With bots, torchChosenRate reflects the bot's own torch bonus, so only
//              onCriticalRate (does a torch door ever lead off the route?) is evidence;
//              whether PEOPLE follow torches needs a human playtest.
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { hasLOS, floorAt } from '../src/sim/world.js';

var STEP = 0.5, LOST_AFTER = 20, NEAR = 10, BUCKETS = 20;
var DOORS = { 6: 1, 7: 1, 8: 1, 11: 1 };
var KEY_ITEM = { red: 'r', blue: 'u' };

// walking distance on the grid from every cell to the nearest target (-1 = unreachable)
function distanceField(W, targets) {
  var n = W.mw * W.mh, d = new Int32Array(n).fill(-1), q = [];
  targets.forEach(function (t) { var i = t.z * W.mw + t.x; if (d[i] < 0) { d[i] = 0; q.push(i); } });
  for (var h = 0; h < q.length; h++) {
    var c = q[h], x = c % W.mw, z = (c / W.mw) | 0;
    [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(function (o) {
      var nx = x + o[0], nz = z + o[1];
      if (nx < 0 || nz < 0 || nx >= W.mw || nz >= W.mh) return;
      var ni = nz * W.mw + nx, id = W.cells[ni];
      if (d[ni] >= 0 || (id !== 0 && !DOORS[id])) return;
      d[ni] = d[c] + 1; q.push(ni);
    });
  }
  return d;
}

export function Recorder(L) {
  this.L = L;
  this.samples = [];   // [t, x, z, hp, armor, bullets, shells, awake, awakeNear, dmg, dist, lost]
  this.deaths = [];    // [t, x, z]
  this.t = 0; this.next = 0; this.lastHp = null; this.recent = [];
  this.fieldKey = null; this.field = null; this.best = Infinity; this.bestT = 0;
  this.choices = [];   // N2: { x, z, torchChosen, torchOptions, options, door }
  this.weenie = null;  // S2: { firstT, firstRoute, after, inView }
}

Recorder.prototype.objective = function (G) {
  var W = G.W, p = G.p, m = this.L.map, targets = [], key = '';
  // a keycard the level's doors need and the player doesn't have yet
  ['red', 'blue'].forEach(function (k) {
    if (p.keys[k]) return;
    var needed = Object.keys(G.doors).some(function (id) { return G.doors[id].locked === k; });
    if (!needed) return;
    G.ents.forEach(function (e) { if (e.kind === 'pickup' && !e.gone && e.item === KEY_ITEM[k]) targets.push({ x: Math.floor(e.x), z: Math.floor(e.z) }); });
  });
  if (targets.length) key = 'key:' + targets.map(function (t) { return t.x + ',' + t.z; }).join(';');
  else if (G.boss && G.boss.state !== 'die' && G.boss.state !== 'dead') { targets.push({ x: Math.floor(G.boss.x), z: Math.floor(G.boss.z) }); key = 'boss'; }
  else if (G.exitCell) {
    // the switch is a wall; aim at the floor next to it
    [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(function (o) {
      var x = G.exitCell.x + o[0], z = G.exitCell.z + o[1];
      if (x >= 0 && z >= 0 && x < W.mw && z < W.mh && W.cells[z * W.mw + x] === 0) targets.push({ x: x, z: z });
    });
    key = 'exit';
  }
  return { key: key, targets: targets };
};

// call after every game update, with the game time step
Recorder.prototype.tick = function (G, dt) {
  var p = G.p, hp = p.hp + p.armor;
  if (this.lastHp !== null && hp < this.lastHp) this.recent.push([this.t, this.lastHp - hp]);
  this.lastHp = hp;
  this.t += dt;
  if (this.t < this.next) return;
  this.next = this.t + STEP;
  var self = this, W = G.W, cx = Math.floor(p.x), cz = Math.floor(p.z);
  var obj = this.objective(G);
  // the boss moves, so its field is rebuilt when it changes cell
  var fk = obj.key + (obj.key === 'boss' ? ':' + obj.targets[0].x + ',' + obj.targets[0].z : '');
  if (fk !== this.fieldKey) {
    var newGoal = obj.key.split(':')[0] !== String(this.fieldKey || '').split(':')[0];
    this.fieldKey = fk;
    this.field = obj.targets.length ? distanceField(W, obj.targets) : null;
    if (newGoal) { this.best = Infinity; this.bestT = this.t; }
  }
  var dist = this.field ? this.field[cz * W.mw + cx] : -1;
  if (dist >= 0 && dist < this.best) { this.best = dist; this.bestT = this.t; }
  var awake = 0, near = 0;
  G.ents.forEach(function (e) {
    if (!e.mob || e.barrel || e.state === 'idle' || e.state === 'die' || e.state === 'dead') return;
    awake++;
    if (Math.hypot(e.x - p.x, e.z - p.z) <= NEAR) near++;
  });
  var boss = G.boss, atBoss = boss && boss.state !== 'die' && boss.state !== 'dead' && Math.hypot(boss.x - p.x, boss.z - p.z) <= 12;
  var fighting = near > 0 || atBoss;
  if (fighting) this.bestT = this.t; // the clock only runs while nothing is fighting you
  var lost = this.t - this.bestT >= LOST_AFTER ? 1 : 0;
  this.recent = this.recent.filter(function (r) { return r[0] > self.t - 2; });
  var dmg = this.recent.reduce(function (a, r) { return a + r[1]; }, 0);
  var seesGoal = this.seesDestination(G);
  this.samples.push([+this.t.toFixed(1), cx, cz, p.hp, p.armor, p.ammo.bullets, p.ammo.shells, awake, near, Math.round(dmg), dist, lost, seesGoal ? 1 : 0]);
};

// S2: can the player see the level's final destination right now?
// The boss (chest height) on boss levels, else the exit switch's face.
Recorder.prototype.seesDestination = function (G) {
  var p = G.p, W = G.W, ey = p.y + (p.eyeH || 0.8), tx, ty, tz;
  if (this.L.map.join('').indexOf('Y') >= 0) {
    var b = G.boss; if (!b) return false;
    tx = b.x; ty = b.y + (b.h || 1) * 0.6; tz = b.z;
  } else if (G.exitCell) {
    // a point just in front of the switch face, on the side nearest the player
    var ex = G.exitCell, best = null;
    [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(function (o) {
      var x = ex.x + o[0], z = ex.z + o[1];
      if (x < 0 || z < 0 || x >= W.mw || z >= W.mh || W.cells[z * W.mw + x] !== 0) return;
      var d = Math.hypot(x + 0.5 - p.x, z + 0.5 - p.z);
      if (!best || d < best.d) best = { d: d, o: o };
    });
    if (!best) return false;
    tx = ex.x + 0.5 + best.o[0] * 0.55; tz = ex.z + 0.5 + best.o[1] * 0.55;
    ty = floorAt(W, ex.x + best.o[0], ex.z + best.o[1]) + 0.8;
  } else return false;
  if (Math.hypot(tx - p.x, tz - p.z) > 40) return false;
  return hasLOS(W, p.x, ey, p.z, tx, ty, tz);
};

// a retry restarts the level: progress toward the objective starts over
Recorder.prototype.retry = function () { this.fieldKey = null; this.best = Infinity; this.bestT = this.t; this.lastHp = null; this.recent = []; };

Recorder.prototype.death = function (G) { this.deaths.push([+this.t.toFixed(1), Math.floor(G.p.x), Math.floor(G.p.z)]); };

export function intensity(s) {
  return 1 + 9 * (0.6 * Math.min(1, s[9] / 30) + 0.4 * Math.min(1, s[8] / 4));
}

// ---- aggregate and draw ----------------------------------------------------------------------

// levelTraces: [{ samples, deaths }] for one level across episodes; W: the level's world
// The critical path: start -> the keycards the locked doors need (in the
// shorter order) -> the final destination, each locked door passable only
// once its key is held. Returns a Set of cell indices.
export function criticalPath(L, W) {
  var m = L.map, find = function (ch) { var out = []; m.forEach(function (row, z) { for (var x = 0; x < row.length; x++) if (row[x] === ch) out.push({ x: x, z: z }); }); return out; };
  var start = find('p')[0], dest = find('Y')[0] || find('X')[0];
  if (!start || !dest) return new Set();
  var locks = {}; m.forEach(function (row, z) { for (var x = 0; x < row.length; x++) { if (row[x] === 'R') locks[z * W.mw + x] = 'red'; if (row[x] === 'U') locks[z * W.mw + x] = 'blue'; } });
  var keys = [];
  if (Object.values(locks).indexOf('red') >= 0 && find('r')[0]) keys.push({ color: 'red', at: find('r')[0] });
  if (Object.values(locks).indexOf('blue') >= 0 && find('u')[0]) keys.push({ color: 'blue', at: find('u')[0] });
  function route(from, to, held) {
    var n = W.mw * W.mh, prev = new Int32Array(n).fill(-2), q = [from.z * W.mw + from.x];
    prev[q[0]] = -1;
    for (var h = 0; h < q.length; h++) {
      var c = q[h];
      if (c === to.z * W.mw + to.x) { var path = []; for (var k = c; k !== -1; k = prev[k]) path.push(k); return path; }
      var x = c % W.mw, z = (c / W.mw) | 0;
      [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(function (o) {
        var nx = x + o[0], nz = z + o[1], ni = nz * W.mw + nx;
        if (nx < 0 || nz < 0 || nx >= W.mw || nz >= W.mh || prev[ni] !== -2) return;
        var id = W.cells[ni], isTarget = ni === to.z * W.mw + to.x;
        if (id !== 0 && !DOORS[id] && !isTarget) return;
        if (locks[ni] && held.indexOf(locks[ni]) < 0) return;
        prev[ni] = c; q.push(ni);
      });
    }
    return null;
  }
  var orders = keys.length === 2 ? [[keys[0], keys[1]], [keys[1], keys[0]]] : [keys];
  var bestSet = null, bestLen = Infinity;
  orders.forEach(function (order) {
    var held = [], at = start, cells = [], ok = true;
    order.forEach(function (k) { var r = route(at, k.at, held); if (!r) ok = false; else { cells = cells.concat(r); held.push(k.color); at = k.at; } });
    var last = ok && route(at, dest, held);
    if (!last) return;
    cells = cells.concat(last);
    if (cells.length < bestLen) { bestLen = cells.length; bestSet = new Set(cells); }
  });
  return bestSet || new Set();
}

export function summarise(levelTraces, W, L) {
  var n = W.mw * W.mh, time = new Float32Array(n), deaths = new Float32Array(n), lost = new Float32Array(n);
  var curve = new Array(BUCKETS).fill(0), counts = new Array(BUCKETS).fill(0), lostSamples = 0, total = 0;
  levelTraces.forEach(function (tr) {
    var s = tr.samples, len = s.length;
    s.forEach(function (row, k) {
      var i = row[2] * W.mw + row[1];
      time[i] += STEP; total++;
      if (row[11]) { lost[i] += STEP; lostSamples++; }
      var b = Math.min(BUCKETS - 1, Math.floor(k / Math.max(1, len) * BUCKETS));
      curve[b] += intensity(row); counts[b]++;
    });
    tr.deaths.forEach(function (d) { deaths[d[2] * W.mw + d[1]]++; });
  });
  // P5: where the intensity peaks, and whether the level ends high
  var ints = curve.map(function (v, b) { return counts[b] ? +(v / counts[b]).toFixed(2) : null; });
  var peak = 0;
  ints.forEach(function (v, b) { if (v != null && (ints[peak] == null || v > ints[peak])) peak = b; });

  // S2: the weenie, per episode, then medians
  function median(a) { if (!a.length) return null; a = a.slice().sort(function (x, y) { return x - y; }); return +a[a.length >> 1].toFixed(2); }
  var destField = null;
  if (L) {
    var dest = null;
    L.map.forEach(function (row, z) { for (var x = 0; x < row.length; x++) if (row[x] === 'Y' || (row[x] === 'X' && !dest)) dest = { x: x, z: z }; });
    if (dest) {
      var tg = [dest];
      if (W.cells[dest.z * W.mw + dest.x] !== 0) tg = [[1, 0], [-1, 0], [0, 1], [0, -1]].map(function (o) { return { x: dest.x + o[0], z: dest.z + o[1] }; })
        .filter(function (c) { return c.x >= 0 && c.z >= 0 && c.x < W.mw && c.z < W.mh && W.cells[c.z * W.mw + c.x] === 0; });
      destField = distanceField(W, tg);
    }
  }
  var firstShare = [], firstRoute = [], inView = [], never = 0;
  levelTraces.forEach(function (tr) {
    var s = tr.samples; if (!s.length) return;
    var k0 = -1;
    for (var k = 0; k < s.length; k++) if (s[k][12]) { k0 = k; break; }
    if (k0 < 0) { never++; return; }
    firstShare.push(s[k0][0] / s[s.length - 1][0]);
    if (destField) {
      var d0 = destField[s[0][2] * W.mw + s[0][1]], dk = destField[s[k0][2] * W.mw + s[k0][1]];
      if (d0 > 0 && dk >= 0) firstRoute.push(Math.max(0, 1 - dk / d0));
    }
    var after = s.slice(k0);
    inView.push(after.filter(function (r) { return r[12]; }).length / after.length);
  });
  var weenie = {
    firstSeenAtTimeShare: median(firstShare), firstSeenAtRouteShare: median(firstRoute),
    approachInView: median(inView), neverSeen: never,
    good: median(firstRoute) != null && median(firstRoute) <= 0.6
  };

  // N2: torch-flanked doors at real choices
  var crit = L ? criticalPath(L, W) : new Set(), choices = { total: 0, withTorchOption: 0, torchChosen: 0, chance: 0, torchChosenOnCritical: 0 };
  levelTraces.forEach(function (tr) {
    (tr.choices || []).forEach(function (c) {
      choices.total++;
      if (!c.torchOptions) return;
      choices.withTorchOption++;
      choices.chance += c.torchOptions / c.options;
      if (c.torchChosen) {
        choices.torchChosen++;
        var on = (c.door && crit.has(c.door.z * W.mw + c.door.x)) || crit.has(c.z * W.mw + c.x);
        if (on) choices.torchChosenOnCritical++;
      }
    });
  });
  var tc = choices.withTorchOption;
  choices.torchChosenRate = tc ? +(choices.torchChosen / tc).toFixed(2) : null;
  choices.chanceRate = tc ? +(choices.chance / tc).toFixed(2) : null;
  choices.onCriticalRate = choices.torchChosen ? +(choices.torchChosenOnCritical / choices.torchChosen).toFixed(2) : null;
  choices.good = tc ? choices.torchChosenRate > choices.chanceRate && choices.onCriticalRate > 0.9 : null;
  delete choices.chance;

  var hot = [];
  for (var i = 0; i < n; i++) if (lost[i] > 0) hot.push({ x: i % W.mw, z: (i / W.mw) | 0, lostSeconds: lost[i] });
  hot.sort(function (a, b) { return b.lostSeconds - a.lostSeconds; });
  return {
    episodes: levelTraces.length,
    intensity: ints,
    peakBucket: peak, peakValue: ints[peak], endsHigh: peak >= BUCKETS * 0.75,
    weenie: weenie,
    choices: choices,
    lostShare: total ? +(lostSamples / total).toFixed(3) : 0,
    lostHotspots: hot.slice(0, 8),
    deathCells: Array.from(deaths).map(function (v, i) { return v ? { x: i % W.mw, z: (i / W.mw) | 0, deaths: v } : null; }).filter(Boolean),
    grids: { time: time, deaths: deaths, lost: lost }
  };
}

function crc32(buf) {
  var c, crc = 0xffffffff;
  for (var n = 0; n < buf.length; n++) {
    c = (crc ^ buf[n]) & 0xff;
    for (var k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    crc = (crc >>> 8) ^ c;
  }
  return (crc ^ 0xffffffff) >>> 0;
}
function chunk(type, data) {
  var len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  var td = Buffer.concat([Buffer.from(type), data]);
  var crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(td));
  return Buffer.concat([len, td, crc]);
}
function png(w, h, rgb) {
  var raw = Buffer.alloc((w * 3 + 1) * h);
  for (var y = 0; y < h; y++) { raw[y * (w * 3 + 1)] = 0; rgb.copy(raw, y * (w * 3 + 1) + 1, y * w * 3, (y + 1) * w * 3); }
  var ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0); ihdr.writeUInt32BE(h, 4); ihdr[8] = 8; ihdr[9] = 2;
  return Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk('IHDR', ihdr), chunk('IDAT', zlib.deflateSync(raw)), chunk('IEND', Buffer.alloc(0))]);
}

// Three maps side by side: time spent (amber), deaths (red), lost time (violet),
// each scaled to its own maximum; walls dark, floors shaded by height. Below
// them, the intensity curve (1-10 over the level's progress).
export function drawLevel(sum, W, S) {
  S = S || 12;
  var mw = W.mw * S, mh = W.mh * S, gap = S, chartH = 120;
  var w = mw * 3 + gap * 2, h = mh + gap + chartH, rgb = Buffer.alloc(w * h * 3, 16);
  function put(x, y, c) { if (x < 0 || y < 0 || x >= w || y >= h) return; var k = (y * w + x) * 3; rgb[k] = c[0]; rgb[k + 1] = c[1]; rgb[k + 2] = c[2]; }
  function rect(x0, y0, ww, hh, c) { for (var y = y0; y < y0 + hh; y++) for (var x = x0; x < x0 + ww; x++) put(x, y, c); }
  var panels = [['time', [255, 176, 40]], ['deaths', [240, 50, 40]], ['lost', [170, 90, 255]]];
  panels.forEach(function (pn, k) {
    var g = sum.grids[pn[0]], max = 0, ox = k * (mw + gap);
    for (var i = 0; i < g.length; i++) max = Math.max(max, g[i]);
    for (var z = 0; z < W.mh; z++) for (var x = 0; x < W.mw; x++) {
      var i2 = z * W.mw + x, id = W.cells[i2], base;
      if (id !== 0 && !DOORS[id]) base = [34, 32, 30];
      else { var f = 58 + W.floor[i2] * 30; base = DOORS[id] ? [110, 96, 60] : [f, f, f + 4]; }
      var v = max ? Math.sqrt(g[i2] / max) : 0, c = pn[1];
      var col = [base[0] + (c[0] - base[0]) * v, base[1] + (c[1] - base[1]) * v, base[2] + (c[2] - base[2]) * v].map(Math.round);
      rect(ox + x * S, z * S, S - 1, S - 1, col);
    }
  });
  // intensity curve
  var cy = mh + gap, cw = w;
  rect(0, cy, cw, chartH, [24, 26, 28]);
  for (var lvl = 1; lvl <= 10; lvl += 3) rect(0, cy + chartH - 4 - Math.round((lvl - 1) / 9 * (chartH - 8)), cw, 1, [44, 48, 52]);
  var pts = sum.intensity;
  for (var b = 0; b < pts.length - 1; b++) {
    if (pts[b] == null || pts[b + 1] == null) continue;
    var x0 = Math.round(b / (pts.length - 1) * (cw - 1)), x1 = Math.round((b + 1) / (pts.length - 1) * (cw - 1));
    for (var x = x0; x <= x1; x++) {
      var v2 = pts[b] + (pts[b + 1] - pts[b]) * ((x - x0) / Math.max(1, x1 - x0));
      var y = cy + chartH - 4 - Math.round((v2 - 1) / 9 * (chartH - 8));
      rect(x, y - 1, 1, 3, [69, 198, 212]);
      rect(x, y + 2, 1, cy + chartH - (y + 2), [26, 60, 66]);
    }
  }
  return png(w, h, rgb);
}

// Write flow.json (summaries), flow-traces.json (every sample, compact) and one PNG per level.
export function writeFlow(outDir, levels, worlds, byLevel) {
  var summary = {
    about: 'Flow of play from the persona bots. Sample every ' + STEP + ' s: [t, x, z, hp, armor, bullets, shells, awake, awakeNear, damage2s, distToObjective, lost]. Intensity = 1 + 9 x (0.6 x min(1, damage2s/30) + 0.4 x min(1, awakeNear/4)). Lost = ' + LOST_AFTER + ' s without getting closer to the objective (needed keycard, else boss, else exit) while not fighting (no awake demon within ' + NEAR + ' cells, not within 12 of the boss).',
    levels: []
  };
  levels.forEach(function (L, li) {
    var sum = summarise(byLevel[li], worlds[li], L);
    fs.writeFileSync(path.join(outDir, 'flow-' + L.name.split(':')[0] + '.png'), drawLevel(sum, worlds[li]));
    var copy = Object.assign({ level: L.name }, sum); delete copy.grids;
    summary.levels.push(copy);
  });
  fs.writeFileSync(path.join(outDir, 'flow.json'), JSON.stringify(summary, null, 1));
  fs.writeFileSync(path.join(outDir, 'flow-traces.json'), JSON.stringify(levels.map(function (L, li) {
    return { level: L.name, episodes: byLevel[li].map(function (tr) { return { persona: tr.persona, difficulty: tr.difficulty, seed: tr.seed, samples: tr.samples, deaths: tr.deaths, choices: tr.choices }; }) };
  })));
  return summary;
}
