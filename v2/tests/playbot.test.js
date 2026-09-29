// The persona bot on tricky ground: node --test tests/
import test from 'node:test';
import assert from 'node:assert';
import { createGame } from '../src/sim/game.js';
import { makeRng } from '../src/sim/rng.js';
import { PlayBot } from './playbot.js';

// E1M2's east wing before its rail went in (x30-35, z10-20): an open-sided
// stair rising north (x=34, 0.25 -> 2.0) beside a low floor (0.25), the red
// key up on the tank tops. Bots used to jump onto the stair from the side,
// then cut the corner at the top, walk off the open side, fall, and repeat.
function wing() {
  var rows = [
    ['.r..MM', '888810', 'kkkkk.'], ['....MM', '888810', 'kkkkk.'], ['.....M', '888880', 'kkkkk.'],
    ['.....M', '111170', 'kkkkk.'], ['.....M', '111160', 'kkkkk.'], ['MM...M', '111150', 'kkkkk.'],
    ['.....M', '111140', 'kkkkk.'], ['.....M', '111130', 'kkkkk.'], ['.....M', '111120', 'kkkkk.'],
    ['.....M', '111110', 'kkkkk.'], ['MM...M', '111110', 'kkkkk.']];
  var map = ['########'], heights = ['00000000'], ceilings = ['........'];
  rows.forEach(function (r) { map.push('#' + r[0] + '#'); heights.push('0' + r[1] + '0'); ceilings.push('.' + r[2] + '.'); });
  map.push('########'); heights.push('00000000'); ceilings.push('........');
  map[9] = map[9].slice(0, 2) + 'p' + map[9].slice(3);
  return { name: 'WING', par: 60, playerAngle: 0, map: map, heights: heights, ceilings: ceilings };
}

function climb(x, z, seed, firstTimer) {
  var rng = makeRng(seed);
  var g = createGame({ levels: [wing()], rng: rng, settings: { difficulty: 1, tips: false, seenTips: {} }, storage: null });
  g.startLevel(0, false);
  var G = g.state();
  G.p.x = x - 29; G.p.z = z - 9; G.p.y = 0.25; G.p.vy = 0; G.p.onGround = true;
  var bot = new PlayBot(g, { name: 'test', traits: {}, behaviors: {} }, rng, { firstTimer: !!firstTimer });
  for (var t = 0; t < 30; t += 1 / 30) {
    bot.step(1 / 30); g.update(1 / 30);
    if (g.state().p.keys.red) return t;
  }
  return null;
}

test('the bot climbs an open-sided stair to the key without walking off it', function () {
  [[33.6, 17.4], [34.5, 14.2], [33.5, 15.5], [31.5, 19.5]].forEach(function (at, i) {
    var t = climb(at[0], at[1], i + 1);
    assert.ok(t !== null && t < 10, 'from (' + at + ') it should reach the key within 10 s (took ' + t + ')');
  });
});

test('a first-timer finds the key up the stair too', function () {
  var t = climb(31.5, 19.5, 7, true);
  assert.ok(t !== null && t < 20, 'first-timer took ' + t);
});

// E1M1's arena lift at (23,15): the arena is 2.0 up and the only way back to
// the hall is the lift. Lifts are two-way (Doom-style), so a bot standing on it
// at the top must ride it down, not walk into the blue door below (a run once
// looped there for 8 minutes).
test('the bot rides a lift down to leave a raised arena', async function () {
  var { LEVELS } = await import('../src/levels.js');
  var rng = makeRng(5);
  var g = createGame({ levels: LEVELS, rng: rng, settings: { difficulty: 0, tips: false, seenTips: {} }, storage: null });
  g.startLevel(0, false);
  var G = g.state(), W = G.W, lf = W.lifts.find(function (l) { return l.x === 23 && l.z === 15; });
  assert.ok(lf, 'E1M1 has its arena lift at (23,15)');
  G.ents.forEach(function (e) { if (e.mob) { e.state = 'dead'; e.dead = true; } });
  for (var k in G.doors) { G.doors[k].locked = null; }
  G.p.keys.blue = true;
  // stand on the lift at the top, then aim for the hall below
  lf.pos = lf.top; lf.state = 'top'; lf.wait = 2.5; W.floor[lf.z * W.mw + lf.x] = lf.top;
  G.p.x = 23.5; G.p.z = 15.5; G.p.y = lf.top; G.p.vy = 0; G.p.onGround = true;
  var bot = new PlayBot(g, { name: 'test', traits: {}, behaviors: {} }, rng, {});
  bot.options = function () { return [{ kind: 'item', target: { x: 23.5, z: 18.5 }, score: 9, key: 'hall', gx: 23, gz: 18 }]; };
  for (var t = 0; t < 30; t += 1 / 30) {
    bot.step(1 / 30); g.update(1 / 30);
    if (Math.floor(G.p.x) === 23 && Math.floor(G.p.z) === 18 && G.p.y < 0.2) return;
  }
  assert.fail('still at (' + G.p.x.toFixed(1) + ', ' + G.p.z.toFixed(1) + ') y ' + G.p.y.toFixed(2) + ' after 30 s');
});
