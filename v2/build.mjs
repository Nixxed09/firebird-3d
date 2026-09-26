// Bundles src/main.js (and three.js) into one plain script, dist/firebird.js,
// and packs a compact first-level art set for double-clicked file:// play.
// Over HTTP, other art loads from separate files when the game needs it.
//   node build.mjs                 one build
//   node build.mjs --watch         rebuild the code on every change
//   node build.mjs --dev           unminified, with source maps
//   node build.mjs --pack-all-assets   include every asset in the offline pack
//   node build.mjs --asset-dirs=a,b    pack these folders in full (tests use fixtures)
import * as esbuild from 'esbuild';
import fs from 'fs';
import path from 'path';

var DEFAULT_DIRS = ['assets', 'assets/codex', 'assets/cc0'];
var arg = process.argv.find(function (a) { return a.indexOf('--asset-dirs=') === 0; });
var dirs = arg ? arg.slice(13).split(',').filter(Boolean) : DEFAULT_DIRS;
var packAll = !!arg || process.argv.includes('--pack-all-assets');
var core = new Set(['imp', 'gnasher', 'riley', 'fist', 'pistol', 'shotgun', 'standingtorch', 'ceilinglamp', 'explosivebarrel',
  'brick', 'floorslab']);
function norm(s) { return path.basename(String(s || '')).replace(/\.[a-z0-9]+$/i, '').toLowerCase().replace(/[^a-z0-9]/g, ''); }

function packAssets() {
  var available = dirs.filter(function (dir) { return fs.existsSync(path.join(dir, 'assets.json')); });
  var pack = { __dirs: available }, bytes = 0, files = 0, problems = [], selected = new Set();
  available.forEach(function (dir) {
    var manPath = path.join(dir, 'assets.json');
    if (!fs.existsSync(manPath)) return;
    var man;
    try { man = JSON.parse(fs.readFileSync(manPath, 'utf8')); } catch (e) { problems.push(manPath + ': ' + e.message); return; }
    pack[dir + '/assets.json'] = man;
    var list = Array.isArray(man) ? man : man.assets || man.files || [];
    list.forEach(function (a) {
      var id = norm(a.id || a.name || a.file);
      if (!packAll && (!core.has(id) || selected.has(id))) return;
      var refs = [a.file || a.path || a.src].concat(Object.values(a.maps || a.textures || {}));
      refs.forEach(function (f) {
        if (!f || typeof f !== 'string') return;
        var full = path.join(dir, f);
        if (!fs.existsSync(full)) { problems.push('missing ' + full); return; }
        var buf = fs.readFileSync(full);
        pack[dir + '/' + f] = buf.toString('base64');
        bytes += buf.length; files++;
      });
      selected.add(id);
    });
  });
  fs.mkdirSync('dist', { recursive: true });
  fs.writeFileSync('dist/assets-pack.js', 'window.FIREBIRD_ASSET_PACK = ' + JSON.stringify(pack) + ';\n');
  var mb = (bytes / 1048576).toFixed(2);
  console.log('  dist/assets-pack.js    ' + files + ' asset files, ' + mb + ' MB from ' + available.join(', '));
  if (bytes > 8 * 1048576) console.log('  WARNING: asset pack over 8 MB; downscale textures or drop unused files');
  problems.forEach(function (p) { console.log('  asset problem: ' + p); });
}

var opts = {
  entryPoints: ['src/main.js'], bundle: true, format: 'iife', outfile: 'dist/firebird.js',
  target: ['es2019'], minify: !process.argv.includes('--dev'), sourcemap: process.argv.includes('--dev'), logLevel: 'info'
};
packAssets();
if (process.argv.includes('--watch')) { var ctx = await esbuild.context(opts); await ctx.watch(); }
else await esbuild.build(opts);
