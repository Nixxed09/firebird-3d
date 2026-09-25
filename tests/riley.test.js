// Riley's brain, tested without a browser:  node tests/riley.test.js
'use strict';
var assert = require('assert');
var R = require('../js/riley.js');

var passed = 0;
function test(name, fn) { fn(); passed++; console.log('  ok  ' + name); }

function state(over) {
  var s = { los: true, dist: 5, phase: 1, cool: { volley: 0, lead: 0, summon: 0, shield: 0 }, impsAlive: 0, playerWeapon: 'pistol' };
  for (var k in over) s[k] = over[k];
  return s;
}

test('she only ever picks a move from the legal list', function () {
  var pr = R.newProfile();
  var cases = [state(), state({ los: false }), state({ phase: 3, dist: 2 }), state({ cool: { volley: 5, lead: 5, summon: 5, shield: 5 } })];
  cases.forEach(function (s) {
    var legal = R.legalMoves(s);
    for (var i = 0; i < 200; i++) assert.ok(legal.indexOf(R.choose(legal, pr, s).move) >= 0);
  });
});

test('out of sight, the only thing she can do is seek', function () {
  assert.deepStrictEqual(R.legalMoves(state({ los: false })), ['seek']);
});

test('no summons or shields in phase 1', function () {
  var legal = R.legalMoves(state({ phase: 1, dist: 3 }));
  assert.ok(legal.indexOf('summon') < 0 && legal.indexOf('shield') < 0);
});

test('she reads a player who always dodges left, and leads her shots', function () {
  var pr = R.newProfile();
  for (var i = 0; i < 300; i++) R.observe(pr, { dt: 0.02, los: true, dist: 6, strafe: -1, moving: true });
  assert.strictEqual(R.strafeSide(pr), -1);
  assert.ok(R.strafeHabit(pr) > 0.9);
  var lead = R.scoreMove('lead', pr, state()), volley = R.scoreMove('volley', pr, state());
  assert.ok(lead.score > volley.score, 'lead should beat volley against a habitual dodger');
  assert.strictEqual(lead.why, 'strafe');
  assert.strictEqual(R.insight(pr, 'strafe'), 'YOU ALWAYS DODGE LEFT. I\'M AIMING THERE NOW.');
  assert.strictEqual(R.insight(pr, 'strafe'), null, 'each insight is said once');
});

test('a shotgun rusher makes her back off', function () {
  var pr = R.newProfile();
  for (var i = 0; i < 12; i++) R.noteShot(pr, 'shotgun', 2.5);
  assert.ok(R.rusher(pr) > 0.5);
  var s = state({ dist: 3, playerWeapon: 'shotgun' });
  assert.ok(R.scoreMove('backoff', pr, s).score > R.scoreMove('close', pr, s).score);
});

test('a player who snipes from far away draws her in', function () {
  var pr = R.newProfile();
  for (var i = 0; i < 10; i++) R.noteShot(pr, 'pistol', 11);
  var s = state({ dist: 10 });
  assert.ok(R.sniper(pr) > 0.5);
  assert.ok(R.scoreMove('close', pr, s).score > R.scoreMove('backoff', pr, state({ dist: 5 })).score);
});

test('her lines are built from real counts', function () {
  var pr = R.newProfile();
  for (var i = 0; i < 9; i++) R.noteShot(pr, 'shotgun', 3);
  pr.hits = 6;
  assert.strictEqual(R.line('playerDied', pr), 'GOOD FIGHT! YOU HIT ME 6 TIMES, 67% ACCURACY. AGAIN?');
  assert.strictEqual(R.line('defeated', pr), 'OKAY, YOU WIN! 6 HITS WITH MOSTLY THE SHOTGUN. NICE.');
  assert.strictEqual(R.insight(pr, 'shotgun'), '9 SHOTGUN BLASTS SO FAR. SHIELD UP!');
});

test('she makes no accuracy claim from too few shots', function () {
  var pr = R.newProfile();
  R.noteShot(pr, 'pistol', 4); pr.hits = 1;
  assert.strictEqual(R.line('playerDied', pr), 'GOOD FIGHT! YOU HIT ME 1 TIME. AGAIN?');
});

test('every line fits on the 320px screen', function () {
  var pr = R.newProfile();
  for (var i = 0; i < 99; i++) R.noteShot(pr, 'shotgun', 2);
  pr.hits = 99; pr.longestHide = 99;
  var mem = { lastStyle: R.describeStyle(pr), fights: 1, wins: 99 };
  var lines = ['intro', 'ease', 'studied', 'phase2', 'phase3', 'summon', 'friendlyFire', 'impsTurned', 'playerDied', 'defeated']
    .map(function (ev) { return R.line(ev, pr, { memory: mem, wins: 99 }); });
  ['strafe', 'rusher', 'sniper', 'camper', 'hider', 'shotgun'].forEach(function (w) { pr.said = {}; lines.push(R.insight(pr, w)); });
  lines.forEach(function (l) {
    assert.ok(l, 'missing line');
    assert.ok(('RILEY: ' + l).length <= 78, 'too long: ' + l);
  });
});

test('memory: losses ease her off, at most 3 notches, and a win resets it', function () {
  var store = {}, storage = { getItem: function (k) { return store[k] || null; }, setItem: function (k, v) { store[k] = v; } };
  var mem = R.recall(storage);
  assert.strictEqual(mem.fights, 0);
  var rushed = R.newProfile();
  for (var i = 0; i < 10; i++) R.noteShot(rushed, 'shotgun', 2);
  for (var n = 0; n < 5; n++) R.save(storage, R.settle(R.recall(storage), rushed, false));
  mem = R.recall(storage);
  assert.strictEqual(mem.ease, R.MAX_EASE);
  assert.strictEqual(mem.lastStyle, 'YOU RUSHED ME WITH THE SHOTGUN');
  assert.strictEqual(R.line('intro', R.newProfile(), { memory: mem }), 'BACK AGAIN! LAST TIME YOU RUSHED ME WITH THE SHOTGUN.');
  assert.ok(R.tuning(mem).hpScale < 1 && R.tuning(mem).dmgScale < 1);
  R.save(storage, R.settle(mem, rushed, true));
  mem = R.recall(storage);
  assert.strictEqual(mem.ease, 0);
  assert.strictEqual(mem.wins, 1);
  assert.ok(R.tuning(mem).practised && R.tuning(mem).coolScale < 1, 'after a win she has practised');
});

test('a rematch with no clear style still says it is a rematch', function () {
  assert.strictEqual(R.line('intro', R.newProfile(), { memory: { fights: 2, lastStyle: null } }), "BACK AGAIN! ROUND 3. LET'S GO!");
});

test('memory survives broken or missing storage', function () {
  assert.strictEqual(R.recall(null).fights, 0);
  var bad = { getItem: function () { return '{nope'; }, setItem: function () { throw new Error('full'); } };
  assert.strictEqual(R.recall(bad).ease, 0);
  R.save(bad, { fights: 1 }); // must not throw
});

console.log(passed + ' Riley brain tests passed');
