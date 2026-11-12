// Can a player actually see the crack on a secret wall?
//   node tests/secret-visibility.js [outDir]
//
// For every secret wall (S) on every level, stand 3, 5 and 8 tiles away on its
// open side, facing it, and render the real 3D view twice: once as the game
// draws it (host wall + crack) and once with the plain host wall. The only
// difference between the two frames is the crack, so we measure:
//   - changed pixels: how many screen pixels the crack changes
//   - contrast: the average brightness drop on those pixels (0-255)
//   - longest run: the tallest connected line of changed pixels, going down
//     one row at a time and allowed to step one pixel sideways per row (the
//     crack is jagged). A line reads as a crack; scattered dots don't.
// A distance passes when the longest run is >= 8 px with contrast >= 12.
// The rule the level contract asks for: the crack must still pass at 5 tiles.
// Side-by-side PNGs (with crack | without) go to captures/ for a human look.
'use strict';
var fs = require('fs');
var path = require('path');
var zlib = require('zlib');
var H = require('./harness');

var OUT = process.argv[2] || path.join(__dirname, '..', 'captures');
var DISTANCES = [3, 5, 8];
var MIN_RUN = 8, MIN_CONTRAST = 12, MUST_PASS_AT = 5;

function lum(p) { return 0.299 * (p & 255) + 0.587 * ((p >> 8) & 255) + 0.114 * ((p >> 16) & 255); }

function compare(a, b, w, h) {
  var changed = 0, drop = 0, longest = 0;
  var prev = new Int32Array(w), cur = new Int32Array(w);
  for (var y = 0; y < h; y++) {
    for (var x = 0; x < w; x++) {
      var d = Math.abs(lum(b[y * w + x]) - lum(a[y * w + x]));
      if (d < 4) { cur[x] = 0; continue; }
      changed++; drop += d;
      cur[x] = 1 + Math.max(prev[x], x > 0 ? prev[x - 1] : 0, x < w - 1 ? prev[x + 1] : 0);
      if (cur[x] > longest) longest = cur[x];
    }
    var t = prev; prev = cur; cur = t;
  }
  return { changed: changed, contrast: changed ? Math.round(drop / changed) : 0, longest: longest };
}

// ---- tiny PNG writer (RGB), frames scaled up 3x ----------------------------

function crc32(buf) {
  var c, crc = 0xffffffff;
  for (var n = 0; n < buf.length; n++) {
    c = (crc ^ buf[n]) & 0xff;
    for (var k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    crc = (crc >>> 8) ^ c;
  }
  return (crc ^ 0xffffffff) >>> 0;
}
function chunk(type, data) {
  var len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  var td = Buffer.concat([Buffer.from(type), data]);
  var crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(td));
  return Buffer.concat([len, td, crc]);
}
function sideBySide(a, b, w, h, file) {
  var S = 3, gap = 4, W = (w * 2 + gap) * S, Hh = h * S, raw = Buffer.alloc((W * 3 + 1) * Hh);
  for (var y = 0; y < Hh; y++) {
    raw[y * (W * 3 + 1)] = 0;
    for (var x = 0; x < W; x++) {
      var sx = (x / S) | 0, sy = (y / S) | 0, p;
      if (sx < w) p = a[sy * w + sx];
      else if (sx >= w + gap) p = b[sy * w + sx - w - gap];
      else p = 0xffffffff;
      var o = y * (W * 3 + 1) + 1 + x * 3;
      raw[o] = p & 255; raw[o + 1] = (p >> 8) & 255; raw[o + 2] = (p >> 16) & 255;
    }
  }
  var ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(W, 0); ihdr.writeUInt32BE(Hh, 4); ihdr[8] = 8; ihdr[9] = 2;
  fs.writeFileSync(file, Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk('IHDR', ihdr), chunk('IDAT', zlib.deflateSync(raw)), chunk('IEND', Buffer.alloc(0))]));
}

// ---- main ------------------------------------------------------------------

fs.mkdirSync(OUT, { recursive: true });
var game = H.create(1), FB = game.FB, env = game.env;
var WALLS = '#%MTH';
var results = [], allPass = true;

env.LEVELS.forEach(function (L, li) {
  var m = L.map;
  for (var sy = 0; sy < m.length; sy++) for (var sx = 0; sx < m[0].length; sx++) {
    if (m[sy][sx] !== 'S') continue;
    FB.startLevel(li, false);
    var G = FB.state(), cracked = env.ART.tex[11];
    // the wall it hides in, the same way the engine picks it
    var host = null;
    [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(function (o) {
      var n = (m[sy + o[1]] || '')[sx + o[0]];
      if (n && WALLS.indexOf(n) >= 0) host = n;
    });
    var plainTex = env.ART.tex[{ '#': 1, '%': 2, M: 3, T: 4, H: 5 }[host] || 1];
    // look at it from every open side
    [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(function (dir) {
      var row = { level: L.name, wall: sx + ',' + sy, side: dir.join(','), host: host, at: {} };
      var any = false;
      DISTANCES.forEach(function (dist) {
        for (var k = 1; k <= dist; k++) { // every tile on the way must be open floor
          var c = (m[sy + dir[1] * k] || '')[sx + dir[0] * k];
          if (!c || WALLS.indexOf(c) >= 0 || 'DRUXS'.indexOf(c) >= 0) return;
        }
        any = true;
        G.p.x = sx + 0.5 + dir[0] * dist; G.p.y = sy + 0.5 + dir[1] * dist;
        G.p.ang = Math.atan2(-dir[1], -dir[0]);
        G.p.camZ = 0.5; G.p.bobAmp = 0;
        env.ART.tex[11] = cracked;
        var fa = FB.renderWorld(), a = new Uint32Array(fa.pixels);
        env.ART.tex[11] = plainTex;
        var b = new Uint32Array(FB.renderWorld().pixels);
        env.ART.tex[11] = cracked;
        var r = compare(a, b, fa.w, fa.h);
        r.pass = r.longest >= MIN_RUN && r.contrast >= MIN_CONTRAST;
        row.at[dist] = r;
        if (dist === MUST_PASS_AT && !r.pass) allPass = false;
        sideBySide(a, b, fa.w, fa.h, path.join(OUT, 'secret-' + L.name.split(':')[0] + '-side' + dir.join('_') + '-' + dist + 'tiles.png'));
      });
      if (any) results.push(row);
    });
  }
});

console.log('Secret wall crack visibility (pass = a vertical run >= ' + MIN_RUN + 'px at contrast >= ' + MIN_CONTRAST + '; must pass at ' + MUST_PASS_AT + ' tiles)');
results.forEach(function (r) {
  console.log('  ' + r.level + ' S(' + r.wall + ') in ' + r.host + ' wall, seen from side ' + r.side + ':');
  DISTANCES.forEach(function (d) {
    var x = r.at[d];
    if (!x) { console.log('    ' + d + ' tiles: no clear floor that far'); return; }
    console.log('    ' + d + ' tiles: ' + (x.pass ? 'PASS' : 'FAIL') + '  run ' + x.longest + 'px, contrast ' + x.contrast + ', ' + x.changed + ' px changed');
  });
});
console.log('Pictures (with crack | without): ' + path.join(OUT, 'secret-E1Mx-sideX_Y-Ntiles.png'));
console.log(allPass ? 'OK: every crack shows at ' + MUST_PASS_AT + ' tiles.' : 'FAIL: some cracks do not show at ' + MUST_PASS_AT + ' tiles.');
process.exitCode = allPass ? 0 : 1;
