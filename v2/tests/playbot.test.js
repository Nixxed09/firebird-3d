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
