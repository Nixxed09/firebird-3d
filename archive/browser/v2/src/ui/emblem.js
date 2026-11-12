// The Firebird emblem from the cover art (assets/firebird-icon.png): a phoenix
// with swept wings and a split tail, amber at the head burning to deep orange
// at the tail, on a dark ember glow. Drawn in code on the 320x200 HUD canvas,
// so it stays chunky and crisp like the rest of the UI.

// the right half of the bird in icon pixels (256 x 256), traced from the icon,
// head to tail; mirrored for the left
var HALF = [
  [128, 64], [143, 102],                // the diamond head
  [224, 44], [204, 106],                // upper wing swept up to its tip
  [232, 120], [190, 148], [143, 150],   // the lower wing band, back under the body
  [144, 176], [154, 200], [162, 230],   // neck widening into the tail's outer edge
  [128, 203]                            // the fork of the tail
];
var CY = 137, SPAN = 186;   // the bird's centre and height in icon pixels
var OUTLINE = HALF.concat(HALF.slice(0, -1).reverse().map(function (p) { return [256 - p[0], p[1]]; }));

function path(ctx, cx, cy, s) {
  ctx.beginPath();
  OUTLINE.forEach(function (p, i) {
    var x = cx + (p[0] - 128) * s, y = cy + (p[1] - CY) * s;
    if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y);
  });
  ctx.closePath();
}

// Draw the bird centred at (cx, cy), `size` pixels tall. t animates the glow;
// o.glow (0..1+) sets how hot it burns, o.alpha fades the whole thing.
export function drawEmblem(ctx, cx, cy, size, t, o) {
  o = o || {};
  var s = size / SPAN, glow = o.glow === undefined ? 1 : o.glow, flick = 0.85 + 0.15 * Math.sin(t * 7.3) * Math.sin(t * 3.1);
  ctx.save();
  ctx.globalAlpha = o.alpha === undefined ? 1 : o.alpha;
  // the cover's dark ember ground, so the bird reads over a busy scene
  if (o.backdrop) {
    var dark = ctx.createRadialGradient(cx, cy, size * 0.2, cx, cy, size * 0.95);
    dark.addColorStop(0, 'rgba(24,8,3,' + (0.7 * o.backdrop).toFixed(3) + ')');
    dark.addColorStop(1, 'rgba(24,8,3,0)');
    ctx.fillStyle = dark;
    ctx.fillRect(cx - size, cy - size, size * 2, size * 2);
  }
  // the ember halo behind it
  if (glow > 0) {
    var halo = ctx.createRadialGradient(cx, cy, size * 0.05, cx, cy, size * 0.75);
    halo.addColorStop(0, 'rgba(255,140,40,' + (0.32 * glow * flick).toFixed(3) + ')');
    halo.addColorStop(0.5, 'rgba(160,50,10,' + (0.16 * glow).toFixed(3) + ')');
    halo.addColorStop(1, 'rgba(40,10,4,0)');
    ctx.fillStyle = halo;
    ctx.fillRect(cx - size, cy - size, size * 2, size * 2);
  }
  var top = cy - (CY - 44) * s, bottom = cy + (230 - CY) * s;
  var body = ctx.createLinearGradient(0, top, 0, bottom);
  body.addColorStop(0, '#ffe07a'); body.addColorStop(0.35, '#ffb43a'); body.addColorStop(0.75, '#ff7a18'); body.addColorStop(1, '#d04a0c');
  ctx.shadowColor = 'rgba(255,120,30,' + (0.9 * Math.min(1, glow)).toFixed(3) + ')';
  ctx.shadowBlur = size * 0.09 * glow * flick;
  path(ctx, cx, cy, s);
  ctx.fillStyle = body; ctx.fill();
  ctx.shadowBlur = 0;
  // the wings burn a shade deeper than the body, like the icon's two tones
  ctx.save();
  path(ctx, cx, cy, s); ctx.clip();
  var wing = ctx.createLinearGradient(cx - 104 * s, 0, cx + 104 * s, 0);
  wing.addColorStop(0, 'rgba(150,36,4,0.55)'); wing.addColorStop(0.36, 'rgba(200,70,10,0.12)');
  wing.addColorStop(0.5, 'rgba(255,230,140,0.12)');
  wing.addColorStop(0.64, 'rgba(200,70,10,0.12)'); wing.addColorStop(1, 'rgba(150,36,4,0.55)');
  ctx.fillStyle = wing;
  ctx.fillRect(cx - 110 * s, top, 220 * s, bottom - top);
  ctx.restore();
  // the bright eye
  ctx.fillStyle = '#fff6e0';
  var er = Math.max(1, 6 * s);
  ctx.fillRect(Math.round(cx - er / 2), Math.round(cy - (CY - 84) * s - er / 2), Math.ceil(er), Math.ceil(er));
  ctx.restore();
}

// The cover's frame: a thin rounded orange rim inset from the screen edge.
export function drawRim(ctx, w, h, inset, alpha) {
  ctx.save();
  ctx.globalAlpha = alpha === undefined ? 1 : alpha;
  ctx.strokeStyle = '#ff7a18'; ctx.lineWidth = 1;
  var r = 6, x0 = inset + 0.5, y0 = inset + 0.5, x1 = w - inset - 0.5, y1 = h - inset - 0.5;
  ctx.beginPath();
  ctx.moveTo(x0 + r, y0); ctx.lineTo(x1 - r, y0); ctx.quadraticCurveTo(x1, y0, x1, y0 + r);
  ctx.lineTo(x1, y1 - r); ctx.quadraticCurveTo(x1, y1, x1 - r, y1);
  ctx.lineTo(x0 + r, y1); ctx.quadraticCurveTo(x0, y1, x0, y1 - r);
  ctx.lineTo(x0, y0 + r); ctx.quadraticCurveTo(x0, y0, x0 + r, y0);
  ctx.stroke();
  ctx.restore();
}

// Pixel embers drifting up the screen (menus and cards). Deterministic in t.
export function drawEmbers(ctx, w, h, t, n, alpha) {
  for (var i = 0; i < n; i++) {
    var sp = 10 + (i * 37 % 23), x0 = (i * 97.13) % w, life = (h + 20) / sp;
    var k = ((t + i * 1.7) % life) / life, y = h + 6 - k * (h + 20);
    var x = x0 + Math.sin(t * 1.3 + i) * 6;
    var a = (alpha === undefined ? 1 : alpha) * Math.sin(k * Math.PI);
    ctx.fillStyle = i % 5 === 0 ? 'rgba(255,224,122,' + a.toFixed(3) + ')' : 'rgba(255,' + (90 + i * 13 % 60) + ',20,' + (a * 0.85).toFixed(3) + ')';
    ctx.fillRect(Math.round(x), Math.round(y), i % 7 === 0 ? 2 : 1, i % 7 === 0 ? 2 : 1);
  }
}

// Two-tone fire text: amber on top, deep orange below, like the emblem.
export function fireText(ART, ctx, text, x, y, o) {
  var scale = o.scale || 1, h = 5 * scale, base = { scale: scale, center: o.center, right: o.right };
  ART.drawText(ctx, text, x + scale, y + scale, Object.assign({}, base, { color: '#2a0c04' }));
  ART.drawText(ctx, text, x, y, Object.assign({}, base, { color: '#ffc040' }));
  ctx.save();
  ctx.beginPath(); ctx.rect(0, y + 3 * scale, 4096, h); ctx.clip();
  ART.drawText(ctx, text, x, y, Object.assign({}, base, { color: '#ff6a12' }));
  ctx.restore();
}
