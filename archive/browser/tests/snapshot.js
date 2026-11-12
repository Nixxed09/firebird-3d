// Renders real game frames to PNG without a browser, for checking art:
//   node tests/snapshot.js [outDir]
// Loads the engine like headless.test.js does, walks into Riley's arena and
// saves a few frames of the fight (3D view only; the HUD is drawn by canvas).
'use strict';
var fs = require('fs');
var path = require('path');
var zlib = require('zlib');

// reuse the headless browser stubs and engine load
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
// pixels are 0xAABBGGRR; scale up 3x so the chunky art is easy to see
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

FB.startLevel(3, false);
var G = FB.state();
for (var k in G.doors) { G.doors[k].open = 1; G.doors[k].state = 'open'; G.doors[k].timer = 9999; }
G.p.x = 16.5; G.p.y = 6.0; G.p.raiseT = 0;
function face() { G.p.ang = Math.atan2(G.boss.y - G.p.y, G.boss.x - G.p.x); }
face();
png(FB.renderWorld(), path.join(out, 'riley-1-waiting.png'), 3);
for (var i = 0; i < 90; i++) { G.p.hp = 100; face(); FB.update(1 / 60); }
png(FB.renderWorld(), path.join(out, 'riley-2-fighting.png'), 3);
G.boss.state = 'windup'; G.boss.st = 9; face();
png(FB.renderWorld(), path.join(out, 'riley-3-attack-tell.png'), 3);
G.boss.state = 'chase'; G.boss.shieldT = 9; face();
png(FB.renderWorld(), path.join(out, 'riley-4-shield.png'), 3);
