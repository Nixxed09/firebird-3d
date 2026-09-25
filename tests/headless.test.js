// Runs the real game engine in node with a stubbed canvas, and plays scripted
// scenarios against it:  node tests/headless.test.js
'use strict';
var assert = require('assert');
var fs = require('fs');
var path = require('path');
var vm = require('vm');

// ---- a browser just big enough for the engine ------------------------------

function ctxStub() {
  return new Proxy({}, {
    get: function (t, k) {
      if (k === 'createImageData') return function (w, h) { return { data: new Uint8ClampedArray(w * h * 4) }; };
      if (k in t) return t[k];
      return function () { };
    },
    set: function (t, k, v) { t[k] = v; return true; }
  });
}
function canvasStub() {
  return { width: 320, height: 200, getContext: function () { return ctxStub(); }, addEventListener: function () { } };
}
var store = {};
global.window = global;
global.addEventListener = function () { };
global.localStorage = { getItem: function (k) { return store[k] || null; }, setItem: function (k, v) { store[k] = String(v); } };
global.document = {
  getElementById: canvasStub, createElement: canvasStub,
  addEventListener: function () { }, pointerLockElement: null
};
global.location = { search: '?autostart&level=0&debug' };
global.requestAnimationFrame = function () { };

['art', 'sound', 'levels', 'riley', 'menu', 'engine'].forEach(function (f) {
  var file = path.join(__dirname, '..', 'js', f + '.js');
  vm.runInThisContext(fs.readFileSync(file, 'utf8'), { filename: file });
});

var FB = window.FIREBIRD;
var passed = 0;
function test(name, fn) { fn(); passed++; console.log('  ok  ' + name); }
function run(secs, each) {
  for (var t = 0; t < secs; t += 1 / 60) { if (each) each(); FB.update(1 / 60); }
}
function mobs(G, kind) { return G.ents.filter(function (e) { return e.mob && !e.barrel && (!kind || e.kind === kind); }); }
function cellOf(e) { return [Math.floor(e.x), Math.floor(e.y)]; }

// ---- every level is finishable ---------------------------------------------

test('every level: the player can walk to the exit (or to Riley)', function () {
  LEVELS.forEach(function (L) {
    var m = L.map, seen = {}, q = [], goal = false;
    for (var y = 0; y < m.length; y++) for (var x = 0; x < m[0].length; x++) if (m[y][x] === 'p') q.push([x, y]);
    var walls = '#%MTH';
    while (q.length) {
      var c = q.shift(), k = c[0] + ',' + c[1];
      if (seen[k]) continue;
      seen[k] = true;
      var ch = m[c[1]][c[0]];
      if (ch === 'X' || ch === 'Y') goal = true;
      if (ch === 'X' || walls.indexOf(ch) >= 0) continue;
      [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(function (d) { q.push([c[0] + d[0], c[1] + d[1]]); });
    }
    assert.ok(goal, L.name + ' has no reachable exit or boss');
  });
});

test('every level loads and runs 5 seconds without errors', function () {
  for (var i = 0; i < LEVELS.length; i++) { FB.startLevel(i, false); run(5); }
});

// ---- hearing ---------------------------------------------------------------

test('gunfire wakes demons it can reach, but not through a closed door', function () {
  FB.startLevel(0, false);
  var G = FB.state();
  function awake() { return mobs(G).filter(function (e) { return e.state !== 'idle'; }).length; }
  // E1M1: stand by the start room's closed door, the shotgun room beyond it
  G.p.x = 8.5; G.p.y = 17.5; G.p.ang = Math.PI; // facing away, so nothing is woken by sight
  G.p.hp = 9999; G.p.raiseT = 0;
  FB.setFire(true);
  run(0.1);
  FB.setFire(false);
  assert.ok(G.p.ammo.bullets < 50, 'the shot should have fired');
  assert.strictEqual(awake(), 0, 'the closed door should muffle the shot');
  for (var k in G.doors) { G.doors[k].open = 1; G.doors[k].state = 'open'; G.doors[k].timer = 9999; }
  run(0.1);
  var bySight = awake();
  G.p.cool = 0;
  FB.setFire(true);
  run(0.1);
  FB.setFire(false);
  assert.ok(awake() >= bySight + 1, 'with the door open the shot should carry (sight ' + bySight + ', after shot ' + awake() + ')');
});

test('punching makes no noise', function () {
  FB.startLevel(0, false);
  var G = FB.state();
  for (var k in G.doors) { G.doors[k].open = 1; G.doors[k].state = 'open'; G.doors[k].timer = 9999; }
  G.p.weapon = 'fist'; G.p.raiseT = 0;
  FB.setFire(true);
  run(1);
  FB.setFire(false);
  assert.strictEqual(mobs(G).filter(function (e) { return e.state !== 'idle'; }).length, 0);
});

test('a demon that hears you finds a path around walls to reach you', function () {
  FB.startLevel(0, false);
  var G = FB.state();
  for (var k in G.doors) { G.doors[k].open = 1; G.doors[k].state = 'open'; G.doors[k].timer = 9999; }
  G.p.hp = 99999;
  // the gnasher in the big middle room, player back in the start room
  var gn = mobs(G, 'gnasher')[0];
  gn.state = 'chase';
  var start = Math.sqrt(Math.pow(gn.x - G.p.x, 2) + Math.pow(gn.y - G.p.y, 2));
  run(25, function () { G.p.hp = 99999; }); // the path is 38 steps long
  var end = Math.sqrt(Math.pow(gn.x - G.p.x, 2) + Math.pow(gn.y - G.p.y, 2));
  assert.ok(end < 2.5, 'gnasher should arrive (was ' + start.toFixed(1) + ', now ' + end.toFixed(1) + ')');
});

// ---- infighting ------------------------------------------------------------

test('an imp fireball that hits a gnasher starts a fight between them', function () {
  var fought = false;
  for (var attempt = 0; attempt < 5 && !fought; attempt++) {
    FB.startLevel(3, false); // the big hall of E1M4
    var G = FB.state();
    G.ents = G.ents.filter(function (e) { return !e.mob || e.barrel; });
    G.p.x = 12.5; G.p.y = 22.5; G.p.hp = 99999;
    var imp = makeTestMob('imp', 12.5, 15.5), gn = makeTestMob('gnasher', 12.5, 19.0);
    G.ents.push(imp, gn);
    imp.state = 'chase';
    gn.state = 'pain'; gn.st = 99; // stands in the line of fire
    run(8, function () {
      G.p.hp = 99999;
      if (gn.target === imp) fought = true;
    });
  }
  assert.ok(fought, 'the gnasher should turn on the imp');
});

function makeTestMob(kind, x, y) {
  // same shape the engine builds; spawned via a map char in a scratch level
  var saved = LEVELS.slice();
  LEVELS.length = 0;
  LEVELS.push({ name: 'T', floor: 'slab', ceil: 'ceilDark', par: 1, map: ['#####', '#p' + (kind === 'imp' ? 'i' : 'g') + '.#', '#####'] });
  var G0 = FB.state();
  FB.startLevel(0, false);
  var e = FB.state().ents.filter(function (m) { return m.mob; })[0];
  LEVELS.length = 0;
  saved.forEach(function (l) { LEVELS.push(l); });
  restoreState(G0);
  e.x = x; e.y = y;
  return e;
}
function restoreState(G0) {
  // startLevel replaced the game; put the one under test back
  var G = FB.state();
  for (var k in G) delete G[k];
  Object.assign(G, G0);
}

// ---- Riley -----------------------------------------------------------------

function toArena(G) {
  for (var k in G.doors) { G.doors[k].open = 1; G.doors[k].state = 'open'; G.doors[k].timer = 9999; }
  G.p.x = 16.5; G.p.y = 10.5; G.p.ang = -Math.PI / 2;
  G.p.raiseT = 0; G.p.weapons.shotgun = true; G.p.ammo.shells = 50; G.p.weapon = 'shotgun';
}
function rileyLines(G) {
  return G.msgs.filter(function (m) { return m.text.indexOf('RILEY:') === 0; }).map(function (m) { return m.text; });
}

test('Riley waits in her arena, introduces herself, and fights with several moves', function () {
  store = {};
  FB.startLevel(3, false);
  var G = FB.state(), r = G.boss;
  assert.ok(r && r.kind === 'riley');
  run(3);
  assert.strictEqual(r.state, 'idle', 'she should wait until she sees you');
  toArena(G);
  var said = [], moves = {};
  run(20, function () {
    G.p.hp = 100;
    FB.keys.KeyA = true; // always dodging left
    rileyLines(G).forEach(function (l) { if (said.indexOf(l) < 0) said.push(l); });
    if (r.move) moves[r.move] = true;
  });
  FB.keys.KeyA = false;
  assert.ok(said[0] === 'RILEY: HI! I\'M RILEY. I LEARN HOW YOU PLAY. READY?', 'intro: ' + said[0]);
  assert.ok(Object.keys(moves).length >= 3, 'moves used: ' + Object.keys(moves));
  assert.ok(RILEY.strafeSide(r.profile) === -1 && RILEY.strafeHabit(r.profile) > 0.8, 'she should notice the left dodge');
  console.log('        moves: ' + Object.keys(moves).join(', '));
  console.log('        said:  ' + said.join(' | '));
});

test('Riley: phases, summons, truthful defeat line, and the episode ends', function () {
  store = {};
  FB.startLevel(3, false);
  var G = FB.state(), r = G.boss;
  toArena(G);
  run(1);
  var said = [], summoned = false;
  FB.setFire(true);
  for (var t = 0; t < 120 && r.state !== 'die' && r.state !== 'dead'; t += 1 / 60) {
    G.p.hp = 100; G.p.ammo.shells = 50;
    G.p.ang = Math.atan2(r.y - G.p.y, r.x - G.p.x); // perfect aim
    FB.update(1 / 60);
    rileyLines(G).forEach(function (l) { if (said.indexOf(l) < 0) said.push(l); });
    if (G.ents.some(function (e) { return e.summoned; })) summoned = true;
  }
  FB.setFire(false);
  assert.ok(r.state === 'die' || r.state === 'dead', 'she should go down (hp ' + r.hp + ')');
  assert.ok(said.indexOf('RILEY: OKAY. I\'VE BEEN WATCHING YOU. MY TURN.') >= 0, 'phase 2 line');
  assert.ok(said.indexOf('RILEY: ALRIGHT, NO MORE HOLDING BACK!') >= 0, 'phase 3 line');
  assert.ok(summoned, 'she should call imps in phase 2+');
  var last = said.filter(function (l) { return l.indexOf('YOU WIN') >= 0; })[0];
  assert.strictEqual(last, 'RILEY: OKAY, YOU WIN! ' + r.profile.hits + ' HITS WITH MOSTLY THE SHOTGUN. NICE.');
  var mem = JSON.parse(store['firebird.riley.v1']);
  assert.strictEqual(mem.wins, 1);
  run(6);
  assert.strictEqual(FB.mode(), 'inter', 'the level should end after she taps out');
  console.log('        she took ' + r.profile.hits + ' hits; said: ' + said.length + ' lines');
});

test('Riley remembers a loss, eases off, and says so', function () {
  store = {};
  FB.startLevel(3, false);
  var G = FB.state();
  toArena(G);
  run(1);
  FB.setFire(true);
  run(7, function () { G.p.hp = 100; G.p.ang = Math.atan2(G.boss.y - G.p.y, G.boss.x - G.p.x); G.p.ammo.shells = 50; });
  FB.setFire(false);
  G.p.hp = 1; G.p.armor = 0;
  var heard = [];
  run(15, function () { rileyLines(G).forEach(function (l) { if (heard.indexOf(l) < 0) heard.push(l); }); });
  assert.ok(G.p.dead, 'player should have died');
  var died = heard.filter(function (l) { return l.indexOf('GOOD FIGHT') >= 0; })[0];
  assert.ok(died && died.indexOf('YOU HIT ME ' + G.boss.profile.hits + ' TIME') >= 0, died);
  FB.startLevel(3, false);
  G = FB.state();
  assert.ok(G.boss.maxHp < 900, 'she should be easier after a loss');
  toArena(G);
  run(1);
  var lines = rileyLines(G);
  var mem = JSON.parse(store['firebird.riley.v1']);
  assert.ok(lines.indexOf('RILEY: BACK AGAIN! LAST TIME ' + mem.lastStyle + '.') >= 0, 'remembers: ' + lines);
  console.log('        ' + lines.join(' | '));
  assert.ok(lines.indexOf('RILEY: I\'M GOING A LITTLE EASIER THIS TIME. JUST A LITTLE.') >= 0, 'announces ease: ' + lines);
});

// ---- making the game easy to read ------------------------------------------

function freshLevel(i) {
  FB.startLevel(i, false);
  var G = FB.state();
  G.ents = G.ents.filter(function (e) { return !e.mob || e.barrel; }); // no demons interfering
  G.p.raiseT = 0;
  return G;
}
function lastMsg(G) { return G.msgs.length ? G.msgs[G.msgs.length - 1].text : ''; }

test('the use prompt names what E will do, and keeps secret walls secret', function () {
  var G = freshLevel(0);
  G.p.x = 8.5; G.p.y = 17.5; G.p.ang = 0;           // facing the start room's door
  assert.strictEqual(FB.usePrompt().verb, 'OPEN');
  G.p.x = 23.5; G.p.y = 7.5; G.p.ang = -Math.PI / 2; // the blue door
  assert.strictEqual(FB.usePrompt().text, 'BLUE KEYCARD NEEDED');
  G.p.keys.blue = true;
  assert.strictEqual(FB.usePrompt().verb, 'OPEN');
  G.p.x = 23.5; G.p.y = 1.5;                          // the exit switch
  assert.strictEqual(FB.usePrompt().verb, 'EXIT LEVEL');
  G.p.x = 4.5; G.p.y = 15.5;                          // the secret wall by the start
  assert.strictEqual(FB.useTarget().door.secret, true);
  assert.strictEqual(FB.usePrompt(), null, 'a secret wall must not advertise itself');
  G.p.x = 3.5; G.p.y = 17.5; G.p.ang = Math.PI;       // a plain wall
  assert.strictEqual(FB.usePrompt(), null);
});

test('the objective follows the level: key first, then the exit or Riley', function () {
  var G = freshLevel(0);
  assert.strictEqual(FB.objective(), 'FIND THE BLUE KEYCARD');
  G.p.keys.blue = true;
  assert.strictEqual(FB.objective(), 'FIND THE EXIT SWITCH');
  G = freshLevel(1);
  assert.strictEqual(FB.objective(), 'FIND THE RED KEYCARD');
  G = freshLevel(3);
  G.p.keys.blue = true;
  assert.strictEqual(FB.objective(), 'DEFEAT RILEY');
});

test('weapons: no switching to guns you lack or cannot fire, and it says why', function () {
  var G = freshLevel(0), p = G.p;
  assert.strictEqual(FB.switchWeapon('shotgun'), false);
  assert.ok(/HAVEN'T FOUND THE SHOTGUN/.test(lastMsg(G)), lastMsg(G));
  p.weapons.shotgun = true; p.ammo.shells = 0;
  assert.strictEqual(FB.switchWeapon('shotgun'), false);
  assert.strictEqual(lastMsg(G), 'NO SHELLS FOR THE SHOTGUN.');
  FB.cycleWeapon(1); // wheel skips the empty shotgun and wraps to the fist
  run(0.4);
  assert.strictEqual(p.weapon, 'fist');
  FB.quickSwitch(); // Q goes back to the pistol
  run(0.4);
  assert.strictEqual(p.weapon, 'pistol');
  p.ammo.shells = 8;
  assert.strictEqual(FB.switchWeapon('shotgun'), true);
  run(0.4);
  assert.strictEqual(p.weapon, 'shotgun');
});

test('running dry falls back to the best gun, and ammo brings it back', function () {
  var G = freshLevel(0), p = G.p;
  p.ammo.bullets = 0; p.ang = Math.PI; // face a wall so nothing gets hit
  FB.setFire(true); run(0.2); FB.setFire(false); run(0.5);
  assert.strictEqual(p.weapon, 'fist');
  assert.strictEqual(lastMsg(G), 'OUT OF BULLETS!');
  G.ents.push({ kind: 'pickup', item: 'b', x: p.x, y: p.y, z: 0, h: 0.2, w: 0.2 });
  run(0.5);
  assert.strictEqual(p.weapon, 'pistol', 'picking up bullets should re-arm the pistol');
});

test('full health leaves a medikit on the floor and says why, once', function () {
  var G = freshLevel(0), p = G.p;
  var kit = { kind: 'pickup', item: '+', x: p.x, y: p.y, z: 0, h: 0.2, w: 0.2 };
  G.ents.push(kit);
  G.msgs.length = 0;
  run(1);
  assert.ok(!kit.gone);
  assert.strictEqual(G.msgs.filter(function (m) { return m.text === 'HEALTH ALREADY FULL'; }).length, 1);
  p.hp = 60; p.x += 1; run(0.1); p.x -= 1; run(0.1); // step off and back on
  assert.ok(kit.gone && p.hp === 85);
});

test('difficulty scales damage, and hits remember where they came from', function () {
  var G = freshLevel(0), p = G.p;
  SETTINGS.v.difficulty = 0;
  FB.hurtPlayer(20, { x: p.x - 3, y: p.y, kind: 'imp' });
  assert.strictEqual(p.hp, 90, 'rookie takes half damage');
  assert.strictEqual(G.hurtDirs.length, 1);
  assert.ok(Math.abs(Math.abs(G.hurtDirs[0].ang) - Math.PI) < 0.01, 'the hit came from the west');
  SETTINGS.v.difficulty = 2;
  FB.hurtPlayer(20, { x: p.x, y: p.y + 1, kind: 'gnasher' });
  assert.strictEqual(p.hp, 60, 'inferno takes 1.5x');
  SETTINGS.v.difficulty = 1;
  FB.hurtPlayer(200, { x: p.x, y: p.y + 1, kind: 'gnasher' });
  assert.ok(p.dead && G.killer === 'gnasher');
});

test('dying retries the level with the gear you brought in, not a pistol start', function () {
  FB.startLevel(0, false);
  var p = FB.state().p;
  p.weapons.shotgun = true; p.ammo.shells = 20; p.weapon = 'shotgun'; p.hp = 70;
  FB.startLevel(1, true);
  var G = FB.state();
  G.p.ammo.shells = 0; G.p.hp = 5;
  FB.hurtPlayer(50);
  assert.ok(G.p.dead);
  FB.onEnter(); // too soon: a held fire button must not skip the death screen
  assert.strictEqual(FB.state(), G);
  run(1.5);
  FB.onEnter();
  var p2 = FB.state().p;
  assert.ok(FB.state() !== G && !p2.dead);
  assert.strictEqual(p2.ammo.shells, 20);
  assert.strictEqual(p2.weapon, 'shotgun');
  assert.strictEqual(p2.hp, 70);
});

test('the exit switch ends the level, unlocks the next, and the tally can be skipped', function () {
  var G = freshLevel(0);
  G.p.keys.blue = true;
  G.p.x = 23.5; G.p.y = 1.5; G.p.ang = -Math.PI / 2;
  FB.useAction();
  run(1.2);
  assert.strictEqual(FB.mode(), 'inter');
  assert.ok(SETTINGS.progress.unlocked >= 1, 'E1M2 should unlock');
  FB.onEnter(); // first press finishes the tally
  assert.strictEqual(FB.mode(), 'inter');
  FB.onEnter(); // second moves on
  assert.strictEqual(FB.mode(), 'game');
  assert.strictEqual(FB.state().L.name, LEVELS[1].name);
});

test('the crosshair knows when it is over a demon', function () {
  var G = freshLevel(0);
  var imp = makeTestMob('imp', G.p.x + 3, G.p.y);
  G.ents.push(imp);
  G.p.ang = 0;
  assert.strictEqual(FB.aimTarget(), imp);
  G.p.ang = Math.PI / 2;
  assert.strictEqual(FB.aimTarget(), null);
});

test('the goal marker only points at things you have already seen', function () {
  var G = freshLevel(0);
  assert.strictEqual(FB.goalTarget(), null, 'nothing seen yet');
  var key = G.ents.filter(function (e) { return e.item === 'u'; })[0];
  G.p.x = key.x + 3; G.p.y = key.y; G.p.ang = Math.PI; // look at the blue key
  run(0.5);
  var g = FB.goalTarget();
  assert.ok(g && g.x === key.x && g.y === key.y, 'marks the key once seen');
  G.p.keys.blue = true; key.gone = true;
  for (var i = 0; i < G.seen.length; i++) G.seen[i] = 1;
  var door = FB.goalTarget();
  assert.ok(door && Math.floor(door.x) === 23 && Math.floor(door.y) === 6, 'then the blue door: ' + JSON.stringify(door));
  G.p.x = 23.5; G.p.y = 7.5; G.p.ang = -Math.PI / 2;
  FB.useAction();
  var ex = FB.goalTarget();
  assert.ok(ex && Math.floor(ex.x) === 23 && Math.floor(ex.y) === 0, 'then the exit');
});

test('a shotgun blast flashes and shoves a demon back; heavy demons barely move', function () {
  var G = freshLevel(1);
  G.p.x = 14.5; G.p.y = 10.5; G.p.ang = 0; G.p.weapons.shotgun = true; G.p.ammo.shells = 10; G.p.weapon = 'shotgun';
  var gn = makeTestMob('gnasher', 17.5, 10.5); gn.hp = 9999; gn.state = 'pain'; gn.st = 99;
  G.ents.push(gn);
  FB.setFire(true); FB.update(1 / 60); FB.setFire(false);
  assert.ok(gn.flashT > 0, 'hit flash');
  assert.ok(gn.x > 17.6, 'knocked back to ' + gn.x.toFixed(2));
});

test('finishing a level records the best time and medals', function () {
  store = {};
  var G = freshLevel(0);
  G.stats.kills = G.stats.totalKills; G.stats.secrets = 0;
  G.p.keys.blue = true;
  G.p.x = 23.5; G.p.y = 1.5; G.p.ang = -Math.PI / 2;
  FB.useAction();
  run(1.2);
  var b = SETTINGS.best(0);
  assert.ok(b && b.time !== null && b.medals.PAR && b.medals.KILLS && !b.medals.SECRETS, JSON.stringify(b));
  assert.ok(JSON.parse(store['firebird.progress.v1']).best[0], 'saved to the browser');
});

console.log(passed + ' headless engine tests passed');
