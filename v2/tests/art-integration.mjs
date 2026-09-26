// Check that a browser served over HTTP swaps from the compact starter pack
// to the original kit as the player reaches later levels.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const mime = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.png': 'image/png', '.glb': 'model/gltf-binary' };
const server = http.createServer((req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, 'http://local').pathname);
  const file = path.resolve(root, '.' + pathname);
  if (!file.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
  fs.stat(file, (err, stat) => {
    if (err || !stat.isFile()) { res.writeHead(404).end(); return; }
    res.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'application/octet-stream' });
    fs.createReadStream(file).pipe(res);
  });
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const browser = await puppeteer.launch({
  executablePath: process.env.CHROME || 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new', args: ['--use-angle=d3d11', '--enable-gpu', '--ignore-gpu-blocklist']
});
try {
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(`http://127.0.0.1:${server.address().port}/v2/index.html?debug`, { waitUntil: 'load' });
  await page.waitForFunction(() => window.FIREBIRD2?.assets().ready, { timeout: 30000 });
  async function loaded(ids) {
    await page.waitForFunction(want => want.every(id => window.FIREBIRD2.assets().loaded.includes('assets:' + id)), { timeout: 30000 }, ids);
  }
  await loaded(['imp']);
  await page.evaluate(() => { const F = window.FIREBIRD2; F.freeze(true); F.launch(1); F.state().p.weapons.chaingun = true; });
  await loaded(['chaingun', 'pickupchaingun']);
  await page.evaluate(() => { const F = window.FIREBIRD2; F.launch(2); F.state().p.weapons.rocket = true; });
  await loaded(['rocketlauncher', 'pickuprocketlauncher', 'rocketbox']);
  await page.evaluate(() => window.FIREBIRD2.launch(0));
  await loaded(['riley']);
  await page.waitForFunction(() => window.FIREBIRD2.models().some(m => m.kind === 'riley' && m.authored), { timeout: 30000 });
  assert.deepEqual(errors, [], 'no browser page errors');
  const art = await page.evaluate(() => window.FIREBIRD2.assets());
  assert.deepEqual(art.problems, [], 'every requested model and texture loaded');
  console.log('HTTP art integration passed: original imp, Riley, chaingun, rocket launcher, pickups and level surfaces loaded on demand.');
  console.log('Loaded ' + art.loaded.length + ' authored assets across three levels.');
} finally {
  await browser.close();
  await new Promise(resolve => server.close(resolve));
}
