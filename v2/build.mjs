// Bundles src/main.js (and three.js) into one plain script, dist/firebird.js,
// so the game runs from a double-clicked index.html with no server.
//   node build.mjs          one build
//   node build.mjs --watch  rebuild on every change
import * as esbuild from 'esbuild';
var opts = {
  entryPoints: ['src/main.js'], bundle: true, format: 'iife', outfile: 'dist/firebird.js',
  target: ['es2019'], minify: !process.argv.includes('--dev'), sourcemap: process.argv.includes("--dev"), logLevel: 'info'
};
if (process.argv.includes('--watch')) { var ctx = await esbuild.context(opts); await ctx.watch(); }
else await esbuild.build(opts);
