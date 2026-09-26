// Boots the real game in headless Chrome (real WebGL), fails on any console
// error or failed request, reports frame times, and saves screenshots.
//   node tests/browser.mjs [outDir]
import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

var here = path.dirname(fileURLToPath(import.meta.url));
var out = process.argv[2] || path.join(here, '..', 'captures');
fs.mkdirSync(out, { recursive: true });
var CHROME = process.env.CHROME || 'C:/Program Files/Google/Chrome/Application/chrome.exe';

var browser = await puppeteer.launch({
  executablePath: CHROME, headless: 'new',
  args: ['--use-angle=d3d11', '--enable-gpu', '--ignore-gpu-blocklist', '--allow-file-access-from-files', '--autoplay-policy=no-user-gesture-required']
});
var page = await browser.newPage();
await page.setViewport({ width: 1280, height: 800 });
var problems = [];
page.on('console', function (m) { if (m.type() === 'error') problems.push('console: ' + m.text()); });
page.on('pageerror', function (e) { problems.push('pageerror: ' + e.message); });
page.on('requestfailed', function (r) { problems.push('request failed: ' + r.url()); });

var url = pathToFileURL(path.join(here, '..', 'index.html')).href + '?debug';
await page.goto(url, { waitUntil: 'load' });
await page.waitForFunction('window.FIREBIRD2', { timeout: 15000 });
var gl = await page.evaluate(function () {
  var c = document.getElementById('view'), g = c.getContext('webgl2');
  var ext = g && g.getExtension('WEBGL_debug_renderer_info');
  return g ? (ext ? g.getParameter(ext.UNMASKED_RENDERER_WEBGL) : 'webgl2') : 'NO WEBGL';
});
console.log('renderer: ' + gl);

async function shot(name, setup, wait) {
  if (setup) await page.evaluate(setup);
  await new Promise(function (r) { setTimeout(r, wait || 700); });
  await page.screenshot({ path: path.join(out, name + '.png') });
  console.log('wrote ' + name + '.png');
}

await shot('v2-01-title', null, 1500);
// place the player (x, z, y in cells; yaw; pitch) after launching a level
function at(level, x, z, y, ang, pitch, extra) {
  return 'var F = window.FIREBIRD2; if (window.__lvl !== ' + level + ') { F.launch(' + level + '); window.__lvl = ' + level + '; }' +
    'var G = F.state(), p = G.p; G.msgs.length = 0; G.notice = null; p.x = ' + x + '; p.z = ' + z + '; p.y = ' + y + '; p.ang = ' + ang + '; p.pitch = ' + pitch + '; p.raiseT = 0;' + (extra || '');
}
await shot('v2-02-start-room', at(0, 3.5, 17.5, 0, 0, 0));
await shot('v2-03-stairs-up', at(0, 9.6, 17.5, 0, 0, 0.1, 'var d = G.doors["9,17"]; d.open = 1; d.state = "open"; d.timer = 999;'));
await shot('v2-04-shotgun-room', at(0, 15.6, 18.6, 1, -0.35, 0.05));
await shot('v2-05-balcony-view', at(0, 21.5, 11.3, 1, -2.2, -0.35, 'var d = G.doors["20,12"]; d.open = 1; d.state = "open"; d.timer = 999;'));
await shot('v2-06-hall-floor', at(0, 5.5, 10.5, 0, -0.3, 0.12));
await shot('v2-07-fight', at(0, 18.5, 14.5, 1, -0.6, 0, 'p.weapons.shotgun = true; p.ammo.shells = 20; p.weapon = "shotgun"; F.setFire(true);'), 1200);
await page.evaluate('window.FIREBIRD2.setFire(false)');
await shot('v2-08-riley', at(3, 16.5, 7.5, 0, -Math.PI / 2, 0.05, 'for (var k in G.doors) { G.doors[k].open = 1; G.doors[k].state = "open"; G.doors[k].timer = 9999; }'), 1500);

// frame times over a few seconds of live play
await page.evaluate(at(0, 18.5, 14.5, 1, -0.6, 0));
await new Promise(function (r) { setTimeout(r, 3000); });
var stats = await page.evaluate('window.FIREBIRD2.frameStats()');
console.log('frame ms p50 ' + stats.p50.toFixed(1) + ' p95 ' + stats.p95.toFixed(1) + ' p99 ' + stats.p99.toFixed(1) + ' | draw calls ' + stats.info.calls + ', triangles ' + stats.info.triangles);

await browser.close();
if (problems.length) { console.log('PROBLEMS:\n  ' + problems.join('\n  ')); process.exit(1); }
console.log('browser check: no console errors, no failed requests');
