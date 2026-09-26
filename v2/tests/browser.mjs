// The real game in real Chrome with real WebGL. Three checks:
//
//  1. PLAYER PATH (no ?debug): title -> NEW GAME -> difficulty -> click to
//     play -> hold W. Passes only if the 3D view actually moves, the way a
//     player would see it. ?debug never pauses, so it can't catch a dead
//     Play button; this step exists because one shipped once.
//  2. FRAME BUDGET: vsync off, so frame times are the real cost. Fails if
//     p95 is over 16.7 ms (can't hold 60 fps), and warns under 2x headroom.
//  3. SCREENSHOTS at fixed spots (with ?debug), each taken with the game
//     frozen (FIREBIRD2.freeze: no sim steps, pinned render clock), compared
//     with the saved baselines in tests/baseline/. A change fails the run and
//     writes a diff image; --advisory only warns, --update-baseline accepts
//     the new look. The title's drifting camera isn't frozen, so the title
//     picture is saved but not compared.
//
// Also fails on any console error, page error or failed request.
//   node tests/browser.mjs [--out dir] [--advisory] [--update-baseline]
// Self-tests (each must FAIL): --selftest-dead-play, --selftest-visual (turns
// the start-room camera by 2 degrees).
import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

var here = path.dirname(fileURLToPath(import.meta.url));
var argv = process.argv.slice(2);
function opt(name, def) { var i = argv.indexOf('--' + name); return i >= 0 ? argv[i + 1] : def; }
var OUT = opt('out', argv[0] && argv[0].slice(0, 2) !== '--' ? argv[0] : path.join(here, '..', 'captures'));
var STRICT = argv.indexOf('--advisory') < 0, UPDATE = argv.indexOf('--update-baseline') >= 0;
var BASE = path.join(here, 'baseline');
var BUDGET_FAIL = 16.7, BUDGET_WARN = 8.3; // ms, p95
fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(BASE, { recursive: true });
var CHROME = process.env.CHROME || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
var PAGE = pathToFileURL(path.join(here, '..', 'index.html')).href;

var failures = [], warnings = [];
function fail(msg) { failures.push(msg); console.log('  FAIL ' + msg); }
function warn(msg) { warnings.push(msg); console.log('  WARN ' + msg); }
function ok(msg) { console.log('  ok   ' + msg); }
function sleep(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }

var browser = await puppeteer.launch({
  executablePath: CHROME, headless: 'new',
  args: ['--use-angle=d3d11', '--enable-gpu', '--ignore-gpu-blocklist', '--allow-file-access-from-files',
    '--autoplay-policy=no-user-gesture-required', '--disable-gpu-vsync', '--disable-frame-rate-limit']
});

async function openPage(query) {
  var page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  page.on('console', function (m) { if (m.type() === 'error') fail('console error: ' + m.text()); });
  page.on('pageerror', function (e) { fail('page error: ' + e.message); });
  page.on('requestfailed', function (r) { fail('request failed: ' + r.url()); });
  await page.goto(PAGE + (query || ''), { waitUntil: 'load' });
  return page;
}

// Pixel comparison, done inside the page so no image library is needed.
// Returns { changed: fraction of pixels that differ visibly, diff: data URL
// of a picture with the changed pixels in red }.
async function compare(page, pngA, pngB) {
  return page.evaluate(async function (a, b) {
    function load(src) { return new Promise(function (res, rej) { var i = new Image(); i.onload = function () { res(i); }; i.onerror = rej; i.src = src; }); }
    var ia = await load('data:image/png;base64,' + a), ib = await load('data:image/png;base64,' + b);
    if (ia.width !== ib.width || ia.height !== ib.height) return { changed: 1, sizeChanged: true };
    var w = ia.width, h = ia.height;
    function px(img) { var c = document.createElement('canvas'); c.width = w; c.height = h; var x = c.getContext('2d'); x.drawImage(img, 0, 0); return x.getImageData(0, 0, w, h); }
    var da = px(ia), db = px(ib), n = 0;
    var out = document.createElement('canvas'); out.width = w; out.height = h;
    var octx = out.getContext('2d'), od = octx.createImageData(w, h);
    for (var i = 0; i < da.data.length; i += 4) {
      var d = Math.abs(da.data[i] - db.data[i]) + Math.abs(da.data[i + 1] - db.data[i + 1]) + Math.abs(da.data[i + 2] - db.data[i + 2]);
      var g = (da.data[i] + da.data[i + 1] + da.data[i + 2]) / 9;
      if (d > 48) { n++; od.data[i] = 255; od.data[i + 1] = 40; od.data[i + 2] = 40; }
      else { od.data[i] = od.data[i + 1] = od.data[i + 2] = g; }
      od.data[i + 3] = 255;
    }
    octx.putImageData(od, 0, 0);
    return { changed: n / (w * h), diff: out.toDataURL('image/png') };
  }, pngA, pngB);
}

async function viewShot(page) {
  var box = await (await page.$('#view')).boundingBox();
  return page.screenshot({ encoding: 'base64', clip: box });
}

// ---- 1. the player's path, no debug hooks ----------------------------------------

console.log('1. player path (no ?debug)');
var pp = await openPage('');
await sleep(1500);
await pp.screenshot({ path: path.join(OUT, 'v2-path-1-title.png') });
var hud = await (await pp.$('#hud')).boundingBox();
await pp.keyboard.press('Enter'); // NEW GAME (first item on a fresh profile)
await sleep(400);
await pp.screenshot({ path: path.join(OUT, 'v2-path-2-difficulty.png') });
// --selftest-dead-play stops here, still in the menus with the title camera
// drifting behind them, to prove the check fails when play never starts
var DEAD = argv.indexOf('--selftest-dead-play') >= 0;
if (!DEAD) await pp.keyboard.press('Enter'); // the default difficulty -> launches E1M1
await sleep(800);
await pp.screenshot({ path: path.join(OUT, 'v2-path-3-level-card.png') });
// Enter can already grab the mouse; only click if the game is still waiting
// for it, since a click in a running game fires the gun
var lockedByKey = await pp.evaluate(function () { return !!document.pointerLockElement; });
if (!DEAD && !lockedByKey) await pp.mouse.click(hud.x + hud.width / 2, hud.y + hud.height / 2); // "click to play"
await sleep(600);
var locked = await pp.evaluate(function () { return !!document.pointerLockElement; });
// standing still must leave the view (almost) still; the title's attract
// camera drifts on its own, so this is what tells "playing" from "still on
// the title screen"
var idleA = await viewShot(pp);
await sleep(1200);
var idleB = await viewShot(pp);
var idle = await compare(pp, idleA, idleB);
await pp.keyboard.down('KeyW');
await sleep(1200);
await pp.keyboard.up('KeyW');
await sleep(200);
var after = await viewShot(pp);
await pp.screenshot({ path: path.join(OUT, 'v2-path-4-after-walking.png') });
var moved = await compare(pp, idleB, after);
fs.writeFileSync(path.join(OUT, 'v2-path-walk-diff.png'), Buffer.from(moved.diff.split(',')[1], 'base64'));
var summary = 'standing still changed ' + (idle.changed * 100).toFixed(1) + '% of the view, walking changed ' +
  (moved.changed * 100).toFixed(1) + '% (pointer lock ' + (locked ? 'on' : 'off') + ')';
// in real play standing still changes ~0.3% (torches); the title camera's drift ~9%
if (moved.changed > 0.2 && idle.changed < 0.02 && moved.changed > 10 * idle.changed) ok(summary);
else fail('title -> NEW GAME -> difficulty -> click -> hold W: the player did not take control. ' + summary + '. See v2-path-*.png');
await pp.close();

// ---- 2 + 3. fixed spots (debug) and the frame budget --------------------------------------------

console.log('2. frame budget, 3. screenshots');
var page = await openPage('?debug');
await page.waitForFunction('window.FIREBIRD2', { timeout: 15000 });
var gl = await page.evaluate(function () {
  var c = document.getElementById('view'), g = c.getContext('webgl2');
  var ext = g && g.getExtension('WEBGL_debug_renderer_info');
  return g ? (ext ? g.getParameter(ext.UNMASKED_RENDERER_WEBGL) : 'webgl2') : 'NO WEBGL';
});
console.log('  renderer: ' + gl);
if (gl === 'NO WEBGL') fail('no WebGL2 context');

// place the player (cells; y = feet height; yaw; pitch) after launching a level
function at(level, x, z, y, ang, pitch, extra) {
  return 'var F = window.FIREBIRD2; if (window.__lvl !== ' + level + ') { F.launch(' + level + '); window.__lvl = ' + level + '; }' +
    'var G = F.state(), p = G.p; G.msgs.length = 0; G.notice = null; p.x = ' + x + '; p.z = ' + z + '; p.y = ' + y + '; p.ang = ' + ang + '; p.pitch = ' + pitch + '; p.raiseT = 0;' + (extra || '');
}
var OPEN_ALL = 'for (var k in G.doors) { G.doors[k].open = 1; G.doors[k].state = "open"; G.doors[k].timer = 9999; }';
var SPOTS = [
  ['v2-01-title', null, 1500],
  ['v2-02-start-room', at(0, 3.5, 17.5, 0, 0, 0)],
  ['v2-03-stairs-up', at(0, 9.6, 17.5, 0, 0, 0.1, 'var d = G.doors["9,17"]; d.open = 1; d.state = "open"; d.timer = 999;')],
  ['v2-04-shotgun-room', at(0, 15.6, 18.6, 1, -0.35, 0.05)],
  ['v2-05-balcony-view', at(0, 21.5, 11.3, 1, -2.2, -0.35, 'var d = G.doors["20,12"]; d.open = 1; d.state = "open"; d.timer = 999;')],
  ['v2-06-hall-floor', at(0, 5.5, 10.5, 0, -0.3, 0.12)],
  ['v2-08-riley', at(3, 16.5, 7.5, 0, -Math.PI / 2, 0.05, OPEN_ALL), 1500]
];
var visual = [];
for (var i = 0; i < SPOTS.length; i++) {
  var s = SPOTS[i];
  var still = !!s[1];
  // freeze first, then place: the simulation never runs, so demons stay where
  // they spawned and every run sees the same scene (only rendering continues)
  await page.evaluate('window.FIREBIRD2.freeze(' + still + ')');
  if (s[1]) await page.evaluate(s[1]);
  if (s[0] === 'v2-02-start-room' && argv.indexOf('--selftest-visual') >= 0) await page.evaluate('window.FIREBIRD2.state().p.ang += 0.035');
  await sleep(s[2] || 800); // let the renderer build the scene
  var png = await page.screenshot({ encoding: 'base64' });
  fs.writeFileSync(path.join(OUT, s[0] + '.png'), Buffer.from(png, 'base64'));
  if (!still) { visual.push(s[0] + ': saved (animated, not compared)'); continue; }
  var basePath = path.join(BASE, s[0] + '.png');
  if (UPDATE || !fs.existsSync(basePath)) {
    fs.writeFileSync(basePath, Buffer.from(png, 'base64'));
    visual.push(s[0] + ': baseline ' + (UPDATE ? 'updated' : 'created'));
    continue;
  }
  var c = await compare(page, fs.readFileSync(basePath).toString('base64'), png);
  // frozen frames are byte-identical run to run; allow a hair for GPU rounding
  if (c.changed > 0.005) {
    if (c.diff) fs.writeFileSync(path.join(OUT, s[0] + '-diff.png'), Buffer.from(c.diff.split(',')[1], 'base64'));
    var msg = s[0] + ' looks different from its baseline (' + (c.changed * 100).toFixed(1) + '% of pixels; see ' + s[0] + '-diff.png)';
    if (STRICT) fail(msg); else warn(msg);
  } else visual.push(s[0] + ': matches baseline (' + (c.changed * 100).toFixed(1) + '% changed)');
}
visual.forEach(function (v) { console.log('  ' + v); });

// frame budget in three scenes, vsync off
await page.evaluate('window.FIREBIRD2.freeze(false)');
var SCENES = [
  ['start room', at(0, 3.5, 17.5, 0, 0, 0)],
  ['fight in the hall', at(0, 18.5, 14.5, 1, -0.6, 0, 'p.weapons.shotgun = true; p.ammo.shells = 50; p.weapon = "shotgun"; F.setFire(true);')],
  ['Riley arena', at(3, 16.5, 9.5, 0, -Math.PI / 2, 0.05, OPEN_ALL)]
];
for (var j = 0; j < SCENES.length; j++) {
  await page.evaluate(SCENES[j][1]);
  await sleep(2500);
  var st = await page.evaluate('window.FIREBIRD2.frameStats()');
  await page.evaluate('window.FIREBIRD2.setFire(false)');
  var line = SCENES[j][0] + ': p50 ' + st.p50.toFixed(1) + ' ms, p95 ' + st.p95.toFixed(1) + ' ms, p99 ' + st.p99.toFixed(1) + ' ms (' + Math.round(1000 / st.p50) + ' fps)';
  if (st.p95 > BUDGET_FAIL) fail(line + ' - over the 60 fps budget');
  else if (st.p95 > BUDGET_WARN) warn(line + ' - under 2x headroom');
  else ok(line);
}

await browser.close();
console.log('');
if (failures.length) { console.log('BROWSER CHECK FAILED (' + failures.length + '):\n  ' + failures.join('\n  ')); process.exit(1); }
console.log('browser check passed' + (warnings.length ? ' with ' + warnings.length + ' warning(s)' : '') + '. Pictures: ' + OUT);
