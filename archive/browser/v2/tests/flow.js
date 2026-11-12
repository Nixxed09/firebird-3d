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
//   P5         the bucket holding the peak; "ends high" = it is in the last quarter.
//              The averaged curve hides peaks that land at different moments, so
//              P5 is also measured per episode (intensity smoothed over 2.5 s):
//              where each episode peaks, how high, and the share ending high
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
//
// Level Design Codex ids (GamesOS docs/LEVEL_DESIGN_CODEX.md), in flow.json
// under each level's `codex` and in the playtest report's codex table:
//   U7   lost share (target <= 5% for first-timers: run with --first-timer)
//   U9   path overlap (mean Jaccard of the cells two runs visited) and the
//        spread of visits (normalised entropy)
//   U10  the longest stretch of a run with no event. Events: a fight in range
//        or an enemy freed, a pickup, a new area in view (25+ new cells in
//        0.5 s), a message or script line, a door or lever, a choice, a death
//   U12  endsHighShare (P5 per episode; target >= 50%)
//   M0   time to the first input that matters (fire, pickup, door, lever)
//        and to the first win (enemy freed, key, lever, secret), first attempt
//   M4   share of boss-fight time spent holding still; the still-versus-moving
//        survival test runs in tests/playtest.js
//   M8   retries before success; deaths by cause, and how many runs never
//        cleared after them (bots never quit, so this stands in for quitting)
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
  // Level Design Codex (GamesOS docs/LEVEL_DESIGN_CODEX.md) evidence:
  this.events = [];    // U10: [t, kind] for fight, pickup, view, script, use, choice, death
  this.firstAct = null; this.firstWin = null; // M0: seconds into the first attempt
  this.attempt = 1;
  this.prev = null;    // counters from the last tick, to see what changed
}

// U10 / M0: note that something happened (once per kind per sample is plenty)
Recorder.prototype.event = function (kind) {
  var last = this.events[this.events.length - 1];
  if (last && last[1] === kind && this.t - last[0] < STEP) return;
  this.events.push([+this.t.toFixed(1), kind]);
};

// what changed since the last tick: the player acting on the world (M0's
// "first input that matters"), winning something (M0's "first win"), and the
// events whose absence makes a quiet stretch (U10)
Recorder.prototype.watch = function (G) {
  var p = G.p, open = 0, levers = 0;
  for (var k in G.doors) if (G.doors[k].open > 0.5) open++;
  if (G.info && G.info.levers) G.info.levers.forEach(function (l) { if (G.W.cells[l[1] * G.W.mw + l[0]] !== 12) levers++; });
  var now = { items: G.stats.items, kills: G.stats.kills, secrets: G.stats.secrets, keys: (p.keys.red ? 1 : 0) + (p.keys.blue ? 1 : 0),
    open: open, levers: levers, fireT: p.fireT, msg: G.msgs[G.msgs.length - 1] || null };
  var was = this.prev; this.prev = now;
  if (!was) return;
  var acted = false, won = false;
  if (now.fireT < was.fireT) acted = true;                                      // pulled the trigger
  if (now.items > was.items || now.keys > was.keys) { acted = true; this.event('pickup'); }
  if (now.open > was.open || now.levers > was.levers) { acted = true; this.event('use'); }
  if (now.keys > was.keys || now.levers > was.levers || now.secrets > was.secrets) won = true;
  if (now.kills > was.kills) { won = true; this.event('fight'); }
  if (now.msg && now.msg !== was.msg) this.event('script');
  if (this.attempt === 1) {
    if (acted && this.firstAct === null) this.firstAct = +this.t.toFixed(1);
    if (won && this.firstWin === null) this.firstWin = +this.t.toFixed(1);
  }
};

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
  this.watch(G);
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
  // U10: a fight in range, or a new view: a new area opening up (a door onto a
  // room, a corner turned), 25+ cells seen for the first time in half a second.
  // Walking down a corridor reveals a few cells at a time; that isn't an event.
  var seen = 0;
  for (var si = 0; si < G.seen.length; si++) seen += G.seen[si];
  if (fighting) this.event('fight');
  if (this.seenCount !== undefined && seen - this.seenCount >= 25) this.event('view');
  this.seenCount = seen;
  // M4: in a boss fight (within 12 cells of a living boss), and holding still?
  var moved = this.lastPos ? Math.hypot(p.x - this.lastPos[0], p.z - this.lastPos[1]) : 1;
  this.lastPos = [p.x, p.z];
  var bossFight = atBoss || G.ents.some(function (e) { return e.kind === 'knight' && e.state !== 'idle' && e.state !== 'die' && e.state !== 'dead' && Math.hypot(e.x - p.x, e.z - p.z) <= 12; });
  this.samples.push([+this.t.toFixed(1), cx, cz, p.hp, p.armor, p.ammo.bullets, p.ammo.shells, awake, near, Math.round(dmg), dist, lost, seesGoal ? 1 : 0,
    bossFight ? 1 : 0, moved < 0.1 ? 1 : 0]);
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
Recorder.prototype.retry = function () { this.fieldKey = null; this.best = Infinity; this.bestT = this.t; this.lastHp = null; this.recent = []; this.prev = null; this.seenCount = undefined; this.attempt++; };

Recorder.prototype.death = function (G) { this.deaths.push([+this.t.toFixed(1), Math.floor(G.p.x), Math.floor(G.p.z), G.killer || '?']); this.event('death'); };

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

  // P5 per episode: averaging across episodes flattens the curve, so also
  // find each episode's own peak
  var epPeakAt = [], epPeakVal = [], epEndHigh = 0, epN = 0;
  levelTraces.forEach(function (tr) {
    var s = tr.samples; if (s.length < 8) return; epN++;
    var sm = s.map(function (r, i) { var a = s.slice(Math.max(0, i - 2), i + 3); return a.reduce(function (t, x) { return t + intensity(x); }, 0) / a.length; });
    var k = sm.indexOf(Math.max.apply(null, sm));
    epPeakAt.push(k / s.length); epPeakVal.push(sm[k]);
    if (k / s.length >= 0.75) epEndHigh++;
  });

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
  var lostShare = total ? +(lostSamples / total).toFixed(3) : 0;
  var endsHighShare = epN ? +(epEndHigh / epN).toFixed(2) : null;
  return {
    episodes: levelTraces.length,
    intensity: ints,
    peakBucket: peak, peakValue: ints[peak], endsHigh: peak >= BUCKETS * 0.75,
    perEpisode: { peakAtMedian: median(epPeakAt), peakValueMedian: median(epPeakVal), endsHighShare: endsHighShare },
    weenie: weenie,
    choices: choices,
    lostShare: lostShare,
    codex: codexMeasures(levelTraces, W, { lostShare: lostShare, endsHighShare: endsHighShare }),
    lostHotspots: hot.slice(0, 8),
    deathCells: Array.from(deaths).map(function (v, i) { return v ? { x: i % W.mw, z: (i / W.mw) | 0, deaths: v } : null; }).filter(Boolean),
    grids: { time: time, deaths: deaths, lost: lost }
  };
}

// ---- Level Design Codex measures (GamesOS docs/LEVEL_DESIGN_CODEX.md) ---------------------
// Named by codex id so the codex and the evidence use the same words. Targets
// are the codex's starting numbers (§4), not law.
export var CODEX_TARGETS = { U7: 0.05, U10: 30, U12: 0.5, M0act: 10, M0win: 30 };

function med(a) { if (!a.length) return null; a = a.slice().sort(function (x, y) { return x - y; }); return +a[a.length >> 1].toFixed(2); }
function pctl(a, q) { if (!a.length) return null; a = a.slice().sort(function (x, y) { return x - y; }); return +a[Math.min(a.length - 1, Math.floor(a.length * q))].toFixed(2); }

export function codexMeasures(levelTraces, W, known) {
  var out = {};
  var firstTimer = levelTraces.length > 0 && levelTraces.every(function (tr) { return tr.firstTimer; });

  // U7: lost share (the codex target is for first-timers)
  out.U7 = { lostShare: known.lostShare, firstTimerRun: firstTimer, target: '<= 0.05 for first-timers', ok: firstTimer ? known.lostShare <= CODEX_TARGETS.U7 : null };

  // U9: are players' paths spread out or all on one line? Mean overlap
  // (Jaccard) of the cells two runs visited, and the normalised entropy of how
  // many runs visited each cell (1 = evenly spread, 0 = one line)
  var sets = levelTraces.map(function (tr) { var s = new Set(); tr.samples.forEach(function (r) { s.add(r[2] * W.mw + r[1]); }); return s; }).filter(function (s) { return s.size; });
  var jac = [], cap = Math.min(sets.length, 40);
  for (var a = 0; a < cap; a++) for (var b = a + 1; b < cap; b++) {
    var inter = 0; sets[a].forEach(function (c) { if (sets[b].has(c)) inter++; });
    jac.push(inter / (sets[a].size + sets[b].size - inter));
  }
  var visits = new Map(); sets.forEach(function (s) { s.forEach(function (c) { visits.set(c, (visits.get(c) || 0) + 1); }); });
  var tot = 0, H = 0; visits.forEach(function (v) { tot += v; });
  visits.forEach(function (v) { var q = v / tot; H -= q * Math.log(q); });
  out.U9 = { pathOverlap: jac.length ? +(jac.reduce(function (x, y) { return x + y; }, 0) / jac.length).toFixed(2) : null,
    coverageEntropy: visits.size > 1 ? +(H / Math.log(visits.size)).toFixed(2) : null, cellsVisited: visits.size,
    note: 'overlap near 1 = everyone walks one line; the codex asks for spread-out paths (no number yet)' };

  // U10: the longest stretch with no event (fight, pickup, new view, script, door or lever, choice, death)
  var longest = [], worst = [];
  levelTraces.forEach(function (tr) {
    var s = tr.samples; if (!s.length) return;
    var end = s[s.length - 1][0], ts = [0].concat((tr.events || []).map(function (e) { return e[0]; })).concat([end]).sort(function (x, y) { return x - y; });
    var best = 0, at = 0;
    for (var i = 1; i < ts.length; i++) if (ts[i] - ts[i - 1] > best) { best = ts[i] - ts[i - 1]; at = ts[i - 1]; }
    longest.push(best);
    var row = s.find(function (r) { return r[0] >= at; }) || s[0];
    worst.push({ seconds: +best.toFixed(1), fromX: row[1], fromZ: row[2] });
  });
  worst.sort(function (x, y) { return y.seconds - x.seconds; });
  out.U10 = { longestQuietMedian: med(longest), longestQuietP90: pctl(longest, 0.9),
    shareUnderTarget: longest.length ? +(longest.filter(function (v) { return v < CODEX_TARGETS.U10; }).length / longest.length).toFixed(2) : null,
    target: '< ~30 s', ok: med(longest) != null ? med(longest) < CODEX_TARGETS.U10 : null, worst: worst.slice(0, 3) };

  // U12: ends on the peak
  out.U12 = { endsHighShare: known.endsHighShare, target: '>= 0.5', ok: known.endsHighShare != null ? known.endsHighShare >= CODEX_TARGETS.U12 : null };

  // M0: time to the first input that matters (fire, pickup, door or lever)
  // and to the first win (an enemy freed, a key, a lever, a secret), first attempt only
  var acts = levelTraces.map(function (tr) { return tr.firstAct; }).filter(function (v) { return v != null; });
  var wins = levelTraces.map(function (tr) { return tr.firstWin; }).filter(function (v) { return v != null; });
  out.M0 = { firstActMedian: med(acts), firstWinMedian: med(wins), noWinInFirstTry: levelTraces.length - wins.length,
    firstTimerRun: firstTimer, target: 'act <= 10 s, win <= 30 s',
    ok: med(acts) != null && med(wins) != null ? med(acts) <= CODEX_TARGETS.M0act && med(wins) <= CODEX_TARGETS.M0win : null };

  // M4 (in-run part): share of boss-fight time spent holding still
  var bossS = 0, stillS = 0;
  levelTraces.forEach(function (tr) { tr.samples.forEach(function (r) { if (r[13]) { bossS++; if (r[14]) stillS++; } }); });
  out.M4 = { bossFightSeconds: bossS * STEP, stillShare: bossS ? +(stillS / bossS).toFixed(2) : null,
    note: 'the still-versus-moving survival test is in the playtest report (M4 experiment)' };

  // M8: retries before success, and what happened after each kind of death.
  // Bots never quit, so "quit after a death" is stood in for by runs that
  // died to that cause and then never cleared the level (gave up or got stuck).
  var cleared = levelTraces.filter(function (tr) { return tr.result === 'cleared'; });
  var retries = cleared.map(function (tr) { return tr.deaths.length; });
  var causes = {};
  levelTraces.forEach(function (tr) {
    tr.deaths.forEach(function (d, i) {
      var k = d[3] || '?', c = causes[k] = causes[k] || { deaths: 0, thenNeverCleared: 0 };
      c.deaths++;
      if (i === tr.deaths.length - 1 && tr.result && tr.result !== 'cleared') c.thenNeverCleared++;
    });
  });
  out.M8 = { retriesBeforeSuccessMean: retries.length ? +(retries.reduce(function (x, y) { return x + y; }, 0) / retries.length).toFixed(2) : null,
    retriesBeforeSuccessMax: retries.length ? Math.max.apply(null, retries) : null, byCause: causes,
    note: 'thenNeverCleared stands in for the quit rate: bots never quit' };
  return out;
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
    about: 'Flow of play from the persona bots. Sample every ' + STEP + ' s: [t, x, z, hp, armor, bullets, shells, awake, awakeNear, damage2s, distToObjective, lost, seesDestination, bossFight, still]. Intensity = 1 + 9 x (0.6 x min(1, damage2s/30) + 0.4 x min(1, awakeNear/4)). Lost = ' + LOST_AFTER + ' s without getting closer to the objective (needed keycard, else boss, else exit) while not fighting (no awake demon within ' + NEAR + ' cells, not within 12 of the boss).',
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
    return { level: L.name, episodes: byLevel[li].map(function (tr) { return { persona: tr.persona, difficulty: tr.difficulty, seed: tr.seed, samples: tr.samples, deaths: tr.deaths, choices: tr.choices, events: tr.events, result: tr.result, firstAct: tr.firstAct, firstWin: tr.firstWin }; }) };
  })));
  return summary;
}
