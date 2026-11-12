// Old Earth lint: node --test tests/
//
// FIREBIRD lives in the GamesOS Old Earth world and Nix plays it, so the words
// a player can read must follow STYLE_GUIDE.md's kid-safety rules: no demons,
// hell or occult, no blood or gore, no real-world guns. Death and kill words
// are fine (the user, 2026-09-28: "they are like little adults"). This scans
// both builds (v2 and the classic raycaster at the repo root).
//
// Player-facing text in this game is ALL CAPS (the pixel font has no lower
// case), so every all-caps string literal counts as something a player may
// read. Internal ids stay lower case (imp, gnasher, knight, pistol, shotgun,
// barrel, bullets, shells) and are never checked.
import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import RILEY from '../../js/riley.js';

var here = path.dirname(fileURLToPath(import.meta.url));
var ROOT = path.join(here, '..', '..');

var FORBIDDEN = [
  /\bDEMON(S|IC)?\b/, /\bHELL(ISH)?\b/, /\bIMPS?\b/, /\bINFERNO\b/, /\bSATAN/, /\bPENTAGRAM/, /\bOCCULT/, /\bSKULLS?\b/,
  /\bBLOOD(Y)?\b/, /\bGORE\b/, /\bGIBS?\b/, /\bCORPSES?\b/, /\bGUTS\b/,
  /\bPISTOLS?\b/, /\bSHOTGUNS?\b/, /\bRIFLES?\b/, /\bGUNS?\b/, /\bBULLETS?\b/, /\bCLIPS?\b/, /\bMAGAZINES?\b/,
  /\bZOMBIES?\b/,
  /\bGNASHERS?\b/, /\bEMBER KNIGHT\b/, /\bKEYCARDS?\b/, /\bSTIMPACKS?\b/, /\bMEDIKITS?\b/
];

// the files whose strings reach the screen
function sources() {
  var out = [];
  function walk(dir) {
    fs.readdirSync(dir, { withFileTypes: true }).forEach(function (d) {
      var p = path.join(dir, d.name);
      if (d.isDirectory()) walk(p); else if (/\.js$/.test(d.name)) out.push(p);
    });
  }
  walk(path.join(ROOT, 'v2', 'src'));
  walk(path.join(ROOT, 'js'));
  out.push(path.join(ROOT, 'v2', 'index.html'), path.join(ROOT, 'index.html'));
  return out.filter(function (p) { return fs.existsSync(p); });
}

// string literals ('..', "..", `..`) with no lower-case letters and at least
// one word of 3+ capitals: the text a player can read
function capsStrings(src) {
  var out = [], re = /'((?:[^'\\\n]|\\.)*)'|"((?:[^"\\\n]|\\.)*)"|`((?:[^`\\]|\\.)*)`/g, m;
  var lineOf = function (i) { return src.slice(0, i).split('\n').length; };
  while ((m = re.exec(src))) {
    var s = m[1] !== undefined ? m[1] : m[2] !== undefined ? m[2] : m[3];
    if (/[a-z]/.test(s.replace(/\$\{[^}]*\}/g, '')) || !/[A-Z]{3}/.test(s)) continue;
    out.push({ text: s, line: lineOf(m.index) });
  }
  return out;
}

test('no forbidden words in any text a player can read (both builds)', function () {
  var hits = [];
  sources().forEach(function (file) {
    var src = fs.readFileSync(file, 'utf8');
    // <title> and visible html text
    if (/\.html$/.test(file)) {
      var title = /<title>([^<]*)<\/title>/.exec(src);
      if (title) FORBIDDEN.forEach(function (re) { if (re.test(title[1].toUpperCase())) hits.push(path.relative(ROOT, file) + ' <title>: ' + title[1]); });
      return;
    }
    capsStrings(src).forEach(function (s) {
      FORBIDDEN.forEach(function (re) {
        if (re.test(s.text)) hits.push(path.relative(ROOT, file) + ':' + s.line + ' "' + s.text + '" (' + re.source + ')');
      });
    });
  });
  assert.deepStrictEqual(hits, [], 'off-theme words:\n  ' + hits.join('\n  '));
});

test("Riley's default words are Old Earth ones", function () {
  var w = RILEY.words(), all = [w.shotgunShots, w.minions].concat(Object.keys(w.weapon).map(function (k) { return w.weapon[k]; }));
  all.forEach(function (x) { FORBIDDEN.forEach(function (re) { assert.ok(!re.test(x), 'Riley says "' + x + '"'); }); });
});

test('the lint catches what it should (self-test)', function () {
  var bad = capsStrings("msg('PICKED UP A SHOTGUN.'); id = 'shotgun'; t = `BLOOD EVERYWHERE`; ok = 'YOU DIED. FREED 3/4';");
  var flagged = bad.filter(function (s) { return FORBIDDEN.some(function (re) { return re.test(s.text); }); }).map(function (s) { return s.text; });
  assert.deepStrictEqual(flagged, ['PICKED UP A SHOTGUN.', 'BLOOD EVERYWHERE']);
});
