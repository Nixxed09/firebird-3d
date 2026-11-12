// Bundles src/main.js (and three.js) into one plain script, dist/firebird.js,
// and packs the authored art into dist/assets-pack.js, so the game runs from
// a double-clicked index.html with no server.
//   node build.mjs                 one build
//   node build.mjs --watch         rebuild the code on every change
//   node build.mjs --dev           unminified, with source maps
//   node build.mjs --asset-dirs=a,b  pack these asset folders instead (tests use fixtures)
import * as esbuild from 'esbuild';
import fs from 'fs';
import path from 'path';

var DEFAULT_DIRS = ['assets/codex', 'assets/cc0', 'assets'];
var arg = process.argv.find(function (a) { return a.indexOf('--asset-dirs=') === 0; });
var dirs = arg ? arg.slice(13).split(',').filter(Boolean) : DEFAULT_DIRS;

function packAssets() {
  var pack = { __dirs: dirs }, bytes = 0, files = 0, problems = [];
  dirs.forEach(function (dir) {
    var manPath = path.join(dir, 'assets.json');
    if (!fs.existsSync(manPath)) return;
    var man;
    try { man = JSON.parse(fs.readFileSync(manPath, 'utf8')); } catch (e) { problems.push(manPath + ': ' + e.message); return; }
    pack[dir + '/assets.json'] = man;
    var list = Array.isArray(man) ? man : man.assets || man.files || [];
    list.forEach(function (a) {
      var refs = [a.file || a.path || a.src].concat(Object.values(a.maps || a.textures || {}));
      refs.forEach(function (f) {
        if (!f || typeof f !== 'string') return;
        var full = path.join(dir, f);
        if (!fs.existsSync(full)) { problems.push('missing ' + full); return; }
        var buf = fs.readFileSync(full);
        pack[dir + '/' + f] = buf.toString('base64');
        bytes += buf.length; files++;
      });
    });
  });
  fs.mkdirSync('dist', { recursive: true });
  fs.writeFileSync('dist/assets-pack.js', 'window.FIREBIRD_ASSET_PACK = ' + JSON.stringify(pack) + ';\n');
  var mb = (bytes / 1048576).toFixed(2);
  console.log('  dist/assets-pack.js    ' + files + ' asset files, ' + mb + ' MB from ' + dirs.join(', '));
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
