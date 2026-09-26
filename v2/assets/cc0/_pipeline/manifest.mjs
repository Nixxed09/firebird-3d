// Write assets/cc0/assets.json (docs/ASSETS.md schema) and CREDITS.md from
// sources.json and the processed .glb files.
//   node assets/cc0/_pipeline/manifest.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

var here = path.dirname(fileURLToPath(import.meta.url));
var dir = path.join(here, '..');
var sources = JSON.parse(fs.readFileSync(path.join(here, 'sources.json'), 'utf8')).sources;

function glbJson(file) {
  var b = fs.readFileSync(file);
  return JSON.parse(b.slice(20, 20 + b.readUInt32LE(12)).toString('utf8'));
}

var assets = sources.map(function (s) {
  var file = s.id + '.glb', j = glbJson(path.join(dir, file));
  var entry = { id: s.id, type: s.type, file: file };
  var clips = (j.animations || []).map(function (a) { return a.name; }).sort();
  if (clips.length) entry.animations = clips;
  var named = (j.nodes || []).map(function (n) { return n.name; }).filter(function (n) { return /^(shield|slide|pump|barrels|tube)$/.test(n); });
  if (named.length) entry.nodes = named;
  entry.source = s.title + ' by ' + s.author + ' (' + s.license + '), ' + s.page;
  return entry;
});
fs.writeFileSync(path.join(dir, 'assets.json'), JSON.stringify({ version: 1, assets: assets }, null, 2) + '\n');

var L = ['# CC0 models in Firebird v2', '',
  'Every model here is released under **CC0 1.0** (public domain) by its author. No credit is required; we give it anyway.',
  'Quaternius also asks that the models not be resold or redistributed *as an asset pack*. We ship only the models the game uses, processed for it.',
  '', '| In game | Model | Author | Licence | Source | What we changed |', '|---|---|---|---|---|---|'];
sources.forEach(function (s) {
  var changes = [];
  if (s.height) changes.push('scaled to ' + s.height + ' m tall');
  if (s.length) changes.push('scaled to ' + s.length + ' m long, muzzle to +Z, origin at the grip');
  if (s.clips) changes.push('clips renamed to ' + Object.keys(s.clips).join('/') + ', others dropped');
  if (s.recolor) changes.push('recoloured' + (Object.values(s.recolor).some(function (r) { return r.rename === 'tell'; }) ? ' (gold accents are her attack tell)' : ''));
  if (s.shield) changes.push('added a shield bubble');
  L.push('| `' + s.id + '` | ' + s.title + ' | ' + s.author + ' | ' + s.license + ' | ' + s.page + ' | ' + changes.join('; ') + ' |');
});
L.push('', 'Rebuild from the originals: `node assets/cc0/_pipeline/fetch.mjs` (checks sha256), `blender -b -P assets/cc0/_pipeline/process.py`, `node assets/cc0/_pipeline/manifest.mjs`.');
fs.writeFileSync(path.join(dir, 'CREDITS.md'), L.join('\n') + '\n');
console.log('wrote assets.json (' + assets.length + ' assets) and CREDITS.md');
