// Headless tests for the v2 simulation: node --test tests/
import test from 'node:test';
import assert from 'node:assert';
import { createGame } from '../src/sim/game.js';
import { LEVELS } from '../src/levels.js';
import { makeRng } from '../src/sim/rng.js';

function game(seed) {
  var store = {};
  var storage = { getItem: function (k) { return store[k] || null; }, setItem: function (k, v) { store[k] = String(v); } };
  return createGame({ levels: LEVELS, rng: makeRng(seed || 1), storage: storage });
}
function run(g, secs, each) { for (var t = 0; t < secs; t += 1 / 60) { if (each) each(); g.update(1 / 60); } }
function clear(g) { var G = g.state(); G.ents = G.ents.filter(function (e) { return !e.mob || e.barrel; }); return G; }
function face(p, x, z) { p.ang = Math.atan2(z - p.z, x - p.x); }
function walkTo(g, x, z, secs) {
  var p = g.state().p;
  run(g, secs || 6, function () { face(p, x, z); g.keys.KeyW = Math.hypot(x - p.x, z - p.z) > 0.2; });
  g.keys.KeyW = false;
}

test('every level builds and runs 5 seconds', function () {
  var g = game();
  for (var i = 0; i < LEVELS.length; i++) { g.startLevel(i, false); run(g, 5); }
});

test('stairs: walk up the corridor into the raised shotgun room', function () {
  var g = game(); g.startLevel(0, false); var G = clear(g), p = G.p;
  G.doors['9,17'].open = 1; G.doors['9,17'].state = 'open'; G.doors['9,17'].timer = 999;
  walkTo(g, 15.5, 17.5, 8);
  assert.ok(p.x > 15, 'reached the room (x ' + p.x.toFixed(2) + ')');
  assert.ok(Math.abs(p.y - 1) < 0.01, 'standing 2 m up (y ' + p.y.toFixed(2) + ')');
});

test('the shotgun dais needs a jump, and a jump clears it', function () {
  var g = game(); g.startLevel(0, false); var G = clear(g), p = G.p;
  p.x = 15.5; p.z = 17.5; p.y = 1;
  walkTo(g, 18.5, 17.5, 2);
  assert.ok(p.x < 17, 'the dais edge blocks walking (x ' + p.x.toFixed(2) + ')');
  run(g, 3, function () { face(p, 18.5, 17.5); g.keys.KeyW = p.x < 18.3; g.keys.Space = p.onGround && p.y < 1.4; });
  g.keys.KeyW = false; g.keys.Space = false;
  run(g, 1);
  assert.ok(Math.abs(p.y - 1.5) < 0.01 && p.x > 17, 'up on the dais (x ' + p.x.toFixed(2) + ', y ' + p.y.toFixed(2) + ')');
  assert.ok(p.weapons.shotgun, 'and the shotgun is picked up');
});

test('stepping off the balcony drops you into the hall, and you land', function () {
  var g = game(); g.startLevel(0, false); var G = clear(g), p = G.p;
  p.x = 20.5; p.z = 10.5; p.y = 1; p.ang = -Math.PI / 2;
  run(g, 1.5, function () { g.keys.KeyW = true; });
  g.keys.KeyW = false;
  assert.ok(p.z < 10 && p.y === 0 && p.onGround, 'landed on the hall floor (z ' + p.z.toFixed(2) + ', y ' + p.y + ')');
});

test('the lift carries you up to the exit room', function () {
  var g = game(); g.startLevel(0, false); var G = clear(g), p = G.p;
  p.keys.blue = true;
  var d = G.doors['23,6']; d.open = 1; d.state = 'open'; d.timer = 999;
  p.x = 23.5; p.z = 7.5; p.y = 0;
  walkTo(g, 23.5, 5.5, 2);
  assert.ok(Math.floor(p.z) === 5, 'on the lift');
  run(g, 4);
  assert.ok(Math.abs(p.y - 2) < 0.01, 'lifted to 4 m (y ' + p.y.toFixed(2) + ')');
  walkTo(g, 23.5, 2.5, 2);
  assert.ok(p.z < 3.5 && Math.abs(p.y - 2) < 0.01, 'walked off into the exit room');
});

test('you can shoot down at a demon below you, and not through the balcony floor', function () {
  var g = game(); g.startLevel(0, false); var G = clear(g), p = G.p;
  var imp = { kind: 'imp', mob: true, x: 20.5, z: 9.6, y: 0, hp: 9999, radius: 0.35, speed: 0, h: 0.85, state: 'pain', st: 99, animT: 0, cool: 99, los: false, losT: 99, flashT: 0 };
  G.ents.push(imp);
  p.x = 20.5; p.z = 10.3; p.y = 1; p.raiseT = 0; p.ang = -Math.PI / 2; // toes at the balcony edge (z 10)
  p.pitch = 0;
  assert.strictEqual(g.aimTarget(), null, 'level aim goes over its head');
  p.pitch = -Math.atan2(p.y + p.eyeH - 0.4, 0.7);
  assert.strictEqual(g.aimTarget(), imp, 'at the edge, aiming down hits it');
  p.z = 11.5; // step back: now the balcony's own floor is between you and it
  p.pitch = -Math.atan2(p.y + p.eyeH - 0.4, 1.9);
  assert.strictEqual(g.aimTarget(), null, 'the balcony floor blocks the shot');
});

test('a demon that hears you climbs the stairs to reach you on the balcony', function () {
  var g = game(); g.startLevel(0, false); var G = clear(g), p = G.p;
  p.x = 24.5; p.z = 10.5; p.y = 1; p.hp = 99999;
  var gn = { kind: 'gnasher', mob: true, x: 6.5, z: 9.5, y: 0, hp: 110, radius: 0.42, speed: 2.9, h: 0.7, state: 'chase', st: 0, animT: 0, cool: 9, moveAng: 0, retarget: 0, losT: 0, los: false, target: null, lostT: 0, strafeSide: 1, flashT: 0 };
  G.ents.push(gn);
  run(g, 20, function () { p.hp = 99999; });
  assert.ok(Math.hypot(gn.x - p.x, gn.z - p.z) < 2.5 && gn.y > 0.9, 'gnasher on the balcony next to you (at ' + gn.x.toFixed(1) + ',' + gn.z.toFixed(1) + ' y ' + gn.y.toFixed(2) + ')');
});

test('crouch lowers you and you can\'t stand under a low lintel', function () {
  var g = game(); g.startLevel(0, false); var G = clear(g), p = G.p;
  g.keys.KeyC = true; run(g, 0.5);
  assert.ok(p.crouch && p.eyeH < 0.5);
  g.keys.KeyC = false; run(g, 0.5);
  assert.ok(!p.crouch && p.eyeH > 0.75);
});

test('Riley still fights, talks truthfully, and the episode ends', function () {
  var g = game(3); g.startLevel(3, false); var G = g.state(), r = G.boss, p = G.p;
  for (var k in G.doors) { G.doors[k].open = 1; G.doors[k].state = 'open'; G.doors[k].timer = 9999; }
  p.x = 16.5; p.z = 10.5; p.weapons.shotgun = true; p.ammo.shells = 50; p.weapon = 'shotgun'; p.raiseT = 0;
  run(g, 1);
  g.setFire(true);
  for (var t = 0; t < 120 && r.state !== 'die' && r.state !== 'dead'; t += 1 / 60) {
    p.hp = 100; p.ammo.shells = 50; face(p, r.x, r.z);
    p.pitch = Math.atan2(r.y + 0.5 - (p.y + p.eyeH), Math.hypot(r.x - p.x, r.z - p.z));
    g.update(1 / 60);
  }
  g.setFire(false);
  assert.ok(r.state === 'die' || r.state === 'dead', 'she goes down (hp ' + r.hp + ')');
  run(g, 6);
  assert.strictEqual(g.mode(), 'inter');
});

test('same seed, same run', function () {
  function trace(seed) {
    var g = game(seed); g.startLevel(0, false); var p = g.state().p, out = [];
    g.setFire(true);
    run(g, 6, function () { g.keys.KeyW = true; p.ang += 0.01; out.push(p.x.toFixed(4) + p.z.toFixed(4)); });
    return out.join('|') + g.state().ents.map(function (e) { return (e.x || 0).toFixed(3); }).join(',');
  }
  assert.strictEqual(trace(7), trace(7));
});
