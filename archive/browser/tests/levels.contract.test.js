// Checks every level against the Level Design Contract
// (games/LEVEL_DESIGN_CONTRACT.md). Pure map analysis: no engine, no browser.
//   node tests/levels.contract.test.js
// Prints a report per level, then fails if a hard rule is broken.
// These checks prove the map's structure only. They cannot tell you whether a
// person finds the level clear or fun; that takes a human playtest.
'use strict';
var fs = require('fs');
var path = require('path');
var vm = require('vm');

vm.runInThisContext(fs.readFileSync(path.join(__dirname, '..', 'js', 'levels.js'), 'utf8'));

var WALLS = '#%MTH';
var MOB = { i: 'imp', g: 'gnasher', K: 'knight', Y: 'riley' };
var HP = { imp: 40, gnasher: 110, knight: 400, riley: 900 };
var WALK = 3.2; // cells per second, not running

function cells(m) {
  var out = [];
  for (var y = 0; y < m.length; y++) for (var x = 0; x < m[0].length; x++) out.push({ x: x, y: y, ch: m[y][x] });
  return out;
}
function find(m, chars) { return cells(m).filter(function (c) { return chars.indexOf(c.ch) >= 0; }); }
function dist(a, b) { return Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y)); }

// Breadth-first walk. canPass(ch) decides which cells are open.
function walk(m, from, canPass) {
  var d = {}, q = [[from.x, from.y]];
  d[from.x + ',' + from.y] = 0;
  while (q.length) {
    var c = q.shift(), k0 = c[0] + ',' + c[1];
    [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(function (s) {
      var x = c[0] + s[0], y = c[1] + s[1], k = x + ',' + y;
      if (y < 0 || x < 0 || y >= m.length || x >= m[0].length || k in d) return;
      if (!canPass(m[y][x])) return;
      d[k] = d[k0] + 1;
      if (m[y][x] !== 'X') q.push([x, y]); // you can reach a switch, not walk through it
    });
  }
  return d;
}
function passWith(keys) {
  // the required path never uses secret doors
  return function (ch) {
    if (WALLS.indexOf(ch) >= 0 || ch === 'S') return false;
    if (ch === 'R') return keys.indexOf('r') >= 0;
    if (ch === 'U') return keys.indexOf('u') >= 0;
    return true;
  };
}

// walk(), but with some specific cells shut
function walkBlocking(m, from, canPass, shut) {
  var d = {}, q = [[from.x, from.y]];
  d[from.x + ',' + from.y] = 0;
  while (q.length) {
    var c = q.shift(), k0 = c[0] + ',' + c[1];
    [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(function (s) {
      var x = c[0] + s[0], y = c[1] + s[1], k = x + ',' + y;
      if (y < 0 || x < 0 || y >= m.length || x >= m[0].length || k in d || shut[k]) return;
      if (!canPass(m[y][x])) return;
      d[k] = d[k0] + 1;
      q.push([x, y]);
    });
  }
  return d;
}

// cells reachable from a point without opening any door (one "room")
function room(m, from) {
  return walk(m, from, function (ch) { return WALLS.indexOf(ch) < 0 && 'DRUSX'.indexOf(ch) < 0; });
}

// Straight-line sight across the grid (walls and doors block it).
function sees(m, a, b) {
  var n = Math.ceil(dist(a, b) * 4);
  for (var i = 1; i < n; i++) {
    var x = Math.floor(a.x + 0.5 + (b.x - a.x) * i / n), y = Math.floor(a.y + 0.5 + (b.y - a.y) * i / n);
    var ch = m[y][x];
    if (WALLS.indexOf(ch) >= 0 || 'DRUSX'.indexOf(ch) >= 0) return false;
  }
  return true;
}

// Is there a torch on each side of this door or switch, on the approach side?
function torchPair(m, c) {
  var horiz = WALLS.indexOf(m[c.y][c.x - 1] || '#') >= 0 || 'DRUSX'.indexOf(m[c.y][c.x - 1]) >= 0; // wall runs east-west
  var found = 0;
  for (var side = -1; side <= 1; side += 2) {
    var ok = false;
    for (var off = 1; off <= 2 && !ok; off++) {
      for (var depth = -2; depth <= 2 && !ok; depth++) {
        var x = horiz ? c.x + side * off : c.x + depth, y = horiz ? c.y + depth : c.y + side * off;
        if (m[y] && m[y][x] === 't') ok = true;
      }
    }
    if (ok) found++;
  }
  return found === 2;
}

var failures = [], warnings = [];
function rule(level, id, ok, msg, soft) {
  if (ok) return;
  (soft ? warnings : failures).push(level + ' ' + id + ': ' + msg);
}

LEVELS.forEach(function (L, li) {
  var m = L.map, name = L.name.split(':')[0];
  var start = find(m, 'p')[0];
  var mobs = find(m, 'igKY').map(function (c) { return { x: c.x, y: c.y, kind: MOB[c.ch] }; });
  var boss = find(m, 'Y')[0], exit = find(m, 'X')[0];
  var goal = boss || exit;
  var keyDoors = find(m, 'RU'), keysOnMap = find(m, 'ru');

  // F2 no softlocks: collect keys in any order the map allows, then reach the goal
  var have = [], reach = walk(m, start, passWith(have)), changed = true;
  while (changed) {
    changed = false;
    keysOnMap.forEach(function (k) {
      if (have.indexOf(k.ch) < 0 && (k.x + ',' + k.y) in reach) { have.push(k.ch); changed = true; }
    });
    if (changed) reach = walk(m, start, passWith(have));
  }
  var goalKey = goal.x + ',' + goal.y;
  // critical path length: start, then each key, then the goal
  var legs = [start].concat(keysOnMap).concat([goal]), path = 0;
  for (var lg = 0; lg + 1 < legs.length; lg++) {
    var dd = walk(m, legs[lg], passWith(have))[legs[lg + 1].x + ',' + legs[lg + 1].y];
    path += dd || 0;
  }
  rule(name, 'F2', goalKey in reach, 'the goal cannot be reached without secrets (or a key is locked behind its own door)');
  keyDoors.forEach(function (d) {
    rule(name, 'F2', keysOnMap.some(function (k) { return k.ch === d.ch.toLowerCase(); }), 'a ' + d.ch + ' door has no matching key on the map');
  });

  // L1 safe start: nothing can see you, or reach you quickly, when you spawn
  var fromStart = walk(m, start, passWith(['r', 'u']));
  var nearest = Infinity;
  mobs.forEach(function (e) {
    var steps = fromStart[e.x + ',' + e.y];
    if (steps !== undefined) nearest = Math.min(nearest, steps);
    rule(name, 'L1', !sees(m, start, e) || dist(start, e) > 12, 'a ' + e.kind + ' can see the start (' + e.x + ',' + e.y + ')');
  });
  rule(name, 'L1', nearest >= 6, 'nearest demon is only ' + nearest + ' steps from the start');

  // N4 no point-blank ambush right behind a door. "Behind" means on the far
  // side from where you arrive: you can't reach it without opening that door.
  find(m, 'DRU').forEach(function (d) {
    var all = passWith(['r', 'u']);
    var shut = {}; shut[d.x + ',' + d.y] = true;
    var reachShut = walkBlocking(m, start, all, shut);
    mobs.forEach(function (e) {
      var behind = !((e.x + ',' + e.y) in reachShut);
      rule(name, 'N4', !behind || dist(d, e) > 2.5, 'a ' + e.kind + ' waits ' + dist(d, e).toFixed(1) + ' cells behind the door at ' + d.x + ',' + d.y, li > 1);
    });
  });

  // N2 torch pairs mark the doors that matter: key doors and the exit
  keyDoors.concat(exit ? [exit] : []).forEach(function (c) {
    rule(name, 'N2', torchPair(m, c), 'no torch pair beside the ' + (c.ch === 'X' ? 'exit' : c.ch + ' door') + ' at ' + c.x + ',' + c.y);
  });

  // L3 the first fight of the episode is one demon
  if (li === 0) {
    var first = mobs.slice().sort(function (a, b) { return (fromStart[a.x + ',' + a.y] || 1e9) - (fromStart[b.x + ',' + b.y] || 1e9); })[0];
    var same = room(m, first);
    var pack = mobs.filter(function (e) { return dist(e, first) <= 5 && (e.x + ',' + e.y) in same; }).length;
    rule(name, 'L3', pack === 1, 'the first demon you meet has ' + (pack - 1) + ' others within 5 cells');
  }

  // E2 fair resources: pistol-start ammo (at WARRIOR) vs demon health
  var bullets = 50 + find(m, 'b').length * 10, shells = find(m, 'a').length * 4 + find(m, '2').length * 8;
  var dmg = bullets * 10 + shells * 7 * 10;
  var hp = mobs.reduce(function (s, e) { return s + HP[e.kind]; }, 0);
  var health = find(m, 'h+P').length;
  rule(name, 'E2', dmg >= hp * 1.5, 'ammo covers only ' + (dmg / hp).toFixed(2) + 'x the demons\' health (want 1.5x)');
  rule(name, 'E2', health >= 2, 'only ' + health + ' health pickups');
  // E2b the map's own ammo must cover its demons, whatever you walked in with
  var mapDmg = (bullets - 50) * 10 + shells * 7 * 10;
  rule(name, 'E2', mapDmg >= hp, 'ammo lying on the map covers only ' + (mapDmg / hp).toFixed(2) + 'x the demons\' health (want 1.0x)');

  // R1 secrets exist and are never required (required path already excludes S)
  rule(name, 'R1', find(m, '*').length >= 1, 'no secret area', true);

  // pacing: par should leave room to explore the critical path
  rule(name, 'PAR', L.par >= path / WALK * 2, 'par ' + L.par + 's is tight for a ' + path + '-step critical path', true);

  console.log(name + '  path ' + path + ' steps (~' + Math.round(path / WALK) + 's walk, par ' + L.par + 's)  ' +
    mobs.length + ' demons / ' + hp + ' hp  ammo ' + (dmg / hp).toFixed(1) + 'x  health ' + health +
    '  map ammo ' + (mapDmg / hp).toFixed(1) + 'x  nearest demon ' + nearest + ' steps  secrets ' + find(m, '*').length);
});

warnings.forEach(function (w) { console.log('  warn ' + w); });
failures.forEach(function (f) { console.log('  FAIL ' + f); });
if (failures.length) { console.log(failures.length + ' level contract rule(s) broken'); process.exit(1); }
console.log('level contract: all hard rules pass (' + warnings.length + ' warnings)');
