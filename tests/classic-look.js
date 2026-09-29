// Pictures of the classic build's art, for judging the look by eye:
//   node tests/classic-look.js [outDir]
// Writes a contact sheet of every enemy frame, pickup, weapon and HUD face
// (sheet.png), and one view per level looking at the nearest Hollow (view-E1Mn.png).
'use strict';
var fs = require('fs');
var path = require('path');
var zlib = require('zlib');

var src = fs.readFileSync(path.join(__dirname, 'headless.test.js'), 'utf8');
eval(src.split('var FB = window.FIREBIRD;')[0]);
var FB = window.FIREBIRD;

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
// pixels are 0xAABBGGRR; transparent pixels show the background
function png(frame, file, scale) {
  var w = frame.w * scale, h = frame.h * scale, raw = Buffer.alloc((w * 3 + 1) * h);
  for (var y = 0; y < h; y++) {
    raw[y * (w * 3 + 1)] = 0;
    for (var x = 0; x < w; x++) {
      var p = frame.pixels[((y / scale) | 0) * frame.w + ((x / scale) | 0)], o = y * (w * 3 + 1) + 1 + x * 3;
      raw[o] = p & 255; raw[o + 1] = (p >> 8) & 255; raw[o + 2] = (p >> 16) & 255;
    }
  }
  var ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0); ihdr.writeUInt32BE(h, 4); ihdr[8] = 8; ihdr[9] = 2;
  fs.writeFileSync(file, Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk('IHDR', ihdr), chunk('IDAT', zlib.deflateSync(raw)), chunk('IEND', Buffer.alloc(0))]));
  console.log('wrote ' + file);
}

var out = process.argv[2] || path.join(__dirname, '..', 'captures');
fs.mkdirSync(out, { recursive: true });

// ---- contact sheet ------------------------------------------------------------
var ART = window.ART, rows = [];
['imp', 'gnasher', 'knight', 'riley'].forEach(function (k) {
  var m = ART.mobs[k]; rows.push(Object.keys(m).map(function (s) { return m[s]; }).filter(Boolean));
});
rows.push(Object.keys(ART.things).map(function (k) { return ART.things[k]; }));
rows.push(Object.keys(ART.faces).map(function (k) { return ART.faces[k]; }).concat(Object.keys(ART.guns).map(function (k) { return ART.guns[k]; })));
var SW = 0, SH = 0;
rows.forEach(function (r) { var w = 0, h = 0; r.forEach(function (s) { w += s.w + 4; h = Math.max(h, s.h); }); SW = Math.max(SW, w + 4); SH += h + 4; });
SH += 4;
var sheet = { w: SW, h: SH, pixels: new Uint32Array(SW * SH).fill(0xff3a3632) };
var y0 = 4;
rows.forEach(function (r) {
  var x0 = 4, h = 0;
  r.forEach(function (s) {
    for (var y = 0; y < s.h; y++) for (var x = 0; x < s.w; x++) {
      var p = s.data[y * s.w + x];
      if ((p >>> 24) > 0) sheet.pixels[(y0 + y) * SW + x0 + x] = p;
    }
    x0 += s.w + 4; h = Math.max(h, s.h);
  });
  y0 += h + 4;
});
png(sheet, path.join(out, 'classic-sheet.png'), 4);

// ---- one view per level, facing the nearest enemy -----------------------------
[0, 1, 2, 3].forEach(function (li) {
  FB.startLevel(li, false);
  var G = FB.state(), p = G.p;
  var mobs = G.ents.filter(function (e) { return e.kind === 'imp' || e.kind === 'knight' || e.kind === 'gnasher'; });
  var best = null, bd = 1e9;
  mobs.forEach(function (e) { var d = Math.hypot(e.x - p.x, e.y - p.y); if (d < bd) { bd = d; best = e; } });
  if (best) {
    // stand 3 cells in front of it, in open floor, and look at it
    for (var a = 0; a < 16; a++) {
      var ang = a / 16 * Math.PI * 2, x = best.x + Math.cos(ang) * 3, y = best.y + Math.sin(ang) * 3;
      if (x > 0 && y > 0 && x < G.mw && y < G.mh && G.cells[Math.floor(y) * G.mw + Math.floor(x)] === 0) { p.x = x; p.y = y; break; }
    }
    p.ang = Math.atan2(best.y - p.y, best.x - p.x);
  }
  p.raiseT = 0;
  png(FB.renderWorld(), path.join(out, 'classic-view-E1M' + (li + 1) + '.png'), 3);
});
