// Theme test: Firebird 3D sits in the dragon-age-earth pack.
// Plain node, no dependencies. Last line is THEME PASS; exit 1 on failure.
'use strict';
var fs = require('fs');
var path = require('path');
var vm = require('vm');

var root = path.join(__dirname, '..');
var failures = [];
function check(ok, msg) { if (!ok) failures.push(msg); }
function read(rel) { return fs.readFileSync(path.join(root, rel), 'utf8').replace(/\r\n/g, '\n'); }

// Level ids and map sizes as shipped before the theme change (hard-coded on purpose):
// the theme changes words, never maps.
var EXPECTED = [
  { id: 'E1M1', w: 30, h: 22 },
  { id: 'E1M2', w: 32, h: 21 },
  { id: 'E1M3', w: 32, h: 28 },
  { id: 'E1M4', w: 32, h: 30 }
];

var doc = read('THEME_ALIGNMENT.md');
check(/dragon-age-earth/.test(doc), 'THEME_ALIGNMENT.md does not name dragon-age-earth');

// the translations tables are the markdown table rows
var rows = doc.split(/\r?\n/).filter(function (l) { return /^\s*\|/.test(l); });

// levels
var ctx = {};
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(root, 'js', 'levels.js'), 'utf8') + '\nthis.LEVELS = LEVELS;', ctx);
var LEVELS = ctx.LEVELS;
check(LEVELS.length === EXPECTED.length, 'expected ' + EXPECTED.length + ' levels, found ' + LEVELS.length);
LEVELS.forEach(function (L, i) {
  var id = L.name.split(':')[0];
  var want = EXPECTED[i];
  check(want && id === want.id, 'level ' + (i + 1) + ' id is ' + id + ', expected ' + (want && want.id));
  if (want) {
    check(L.map[0].length === want.w && L.map.length === want.h,
      id + ' map is ' + L.map[0].length + 'x' + L.map.length + ', expected ' + want.w + 'x' + want.h);
  }
  check(rows.some(function (r) { return r.indexOf('`' + id + '`') >= 0; }), id + ' is not in a translations table row');
  check(!/DEMON|IMP\b|HELL/i.test(L.name + ' ' + (L.intro || []).join(' ') + ' ' + (L.outro || '')), id + ' still has demon words in its title or text');
});

// enemy types and weapons in engine.js
var engine = read('js/engine.js');
function keysOf(varName) {
  var m = new RegExp('var ' + varName + ' = \\{([\\s\\S]*?)\\n  \\};').exec(engine);
  check(!!m, 'could not find ' + varName + ' in js/engine.js');
  if (!m) return [];
  var keys = [], re = /^\s{4}([a-z]+):\s*\{/gm, k;
  while ((k = re.exec(m[1]))) keys.push(k[1]);
  return keys;
}
var mobs = keysOf('MOBS');
var weapons = keysOf('WEAPONS');
check(mobs.length >= 4, 'expected at least 4 enemy types in MOBS, found ' + mobs.length);
check(weapons.length >= 3, 'expected at least 3 weapons in WEAPONS, found ' + weapons.length);
mobs.forEach(function (k) {
  check(rows.some(function (r) { return r.indexOf('`' + k + '`') >= 0; }), 'enemy type ' + k + ' is not in a translations table row');
});
weapons.forEach(function (k) {
  check(rows.some(function (r) { return r.indexOf('`' + k + '`') >= 0; }), 'weapon ' + k + ' is not in a translations table row');
});

// the player-facing words carry the theme
['HOLLOW', 'RESET WARDEN'].forEach(function (w) { check(engine.indexOf(w) >= 0, 'engine.js never says ' + w); });
check(!/TIP:[^'\n]*\b(IMPS?|GNASHERS?|DEMONS?)\b/.test(engine), 'a TIP in engine.js still says imp/gnasher/demon');

if (failures.length) {
  failures.forEach(function (f) { console.log('  FAIL ' + f); });
  console.log('THEME FAIL (' + failures.length + ')');
  process.exit(1);
}
console.log('  ok  ' + LEVELS.length + ' levels, ' + mobs.length + ' enemy types, ' + weapons.length + ' weapons in the translations tables');
console.log('THEME PASS');
