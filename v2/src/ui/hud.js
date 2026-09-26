// The HUD, drawn crisp on a 320x200 overlay over the full 3D view: compact
// crosshair and hit markers, damage direction, use prompts, goal marker,
// messages, boss bar, death screen and automap. Ported from the classic game.
import { ART } from './globals.js';
import { WEAPONS, WEAPON_ORDER } from '../sim/game.js';

var W = 320, H = 200, VH = H, HORIZON = VH / 2;
var HUD_RED = '#e03828';

function wrap(text, n) {
  var words = String(text).split(' '), lines = [], cur = '';
  words.forEach(function (w) { var nx = cur ? cur + ' ' + w : w; if (nx.length > n && cur) { lines.push(cur); cur = w; } else cur = nx; });
  if (cur) lines.push(cur);
  return lines;
}
export function fmtTime(t) { t = t | 0; var m = (t / 60) | 0, s = t % 60; return m + ':' + (s < 10 ? '0' : '') + s; }

export function createHud(ctx, game, settings) {
  function blink(G, rate) { return (G.time * (rate || 3)) % 1 < 0.55; }
  function panel(x, width, color) {
    ctx.fillStyle = 'rgba(7,12,17,0.83)'; ctx.fillRect(x, 164, width, 33);
    ctx.fillStyle = 'rgba(160,180,190,0.35)'; ctx.fillRect(x, 164, width, 1);
    ctx.fillStyle = color; ctx.fillRect(x + 3, 164, 22, 2);
    ctx.fillStyle = 'rgba(160,180,190,0.22)'; ctx.fillRect(x, 164, 1, 33); ctx.fillRect(x + width - 1, 164, 1, 33);
  }
  function meter(x, y, width, amount, max, color) {
    ctx.fillStyle = '#26313a'; ctx.fillRect(x, y, width, 3);
    ctx.fillStyle = color; ctx.fillRect(x, y, Math.round(width * Math.max(0, Math.min(1, amount / max))), 3);
  }

  function statusBar(G) {
    var p = G.p;
    var wep = WEAPONS[p.weapon], n = wep.ammo ? p.ammo[wep.ammo] : -1;
    var lowAmmo = wep.ammo && n <= (wep.ammo === 'shells' ? 4 : wep.ammo === 'rockets' ? 2 : 10);
    var hpColor = p.hp <= 25 ? (blink(G, 3) ? '#ffdfc5' : '#ff654c') : p.hp <= 50 ? '#ffad4c' : '#8ff0bf';
    var ammoColor = n === 0 ? '#ff654c' : lowAmmo ? '#ffad4c' : '#ffe0a0';
    panel(4, 99, hpColor); panel(108, 104, '#ff9b4d'); panel(217, 99, '#6adce8');
    ART.drawText(ctx, 'HEALTH', 9, 168, { color: '#a7b0b5' });
    ART.drawText(ctx, String(p.hp), 9, 175, { scale: 2, color: hpColor });
    meter(9, 191, 48, p.hp, 100, hpColor);
    ART.drawText(ctx, 'ARMOR', 64, 168, { color: '#a7b0b5' });
    ART.drawText(ctx, String(p.armor), 64, 175, { scale: 2, color: p.armor ? '#88d6e5' : '#6a7980' });
    meter(64, 191, 33, p.armor, 100, '#6adce8');
    ART.drawText(ctx, p.weapon.toUpperCase(), 113, 168, { color: '#ffb36f' });
    ART.drawText(ctx, wep.ammo ? String(n) : '--', 113, 175, { scale: 2, color: ammoColor });
    ART.drawText(ctx, wep.ammo ? wep.ammo.toUpperCase() : 'MELEE', 205, 179, { color: '#a7b0b5', right: true });
    WEAPON_ORDER.forEach(function (name, wi) {
      var x = 114 + wi * 19, owned = p.weapons[name], inHand = (p.nextWeapon || p.weapon) === name;
      var col = inHand ? '#ffe0a0' : !owned ? '#53616a' : game.hasAmmo(p, name) ? '#c1d4d8' : '#7c6b60';
      ctx.fillStyle = inHand ? '#9b4727' : '#1d2930'; ctx.fillRect(x - 2, 187, 15, 9);
      if (inHand) { ctx.fillStyle = '#ff9b4d'; ctx.fillRect(x - 2, 186, 15, 1); }
      ART.drawText(ctx, String(wi + 1), x + 3, 188, { color: col });
    });
    ART.drawText(ctx, 'SUPPLIES', 222, 168, { color: '#a7b0b5' });
    ART.drawText(ctx, 'B' + p.ammo.bullets + '  S' + p.ammo.shells, 222, 178, { color: wep.ammo === 'bullets' || wep.ammo === 'shells' ? '#d8e4e2' : '#93a3a8' });
    ART.drawText(ctx, 'R' + p.ammo.rockets, 222, 188, { color: wep.ammo === 'rockets' ? '#ffe0a0' : '#93a3a8' });
    [['red', 'keyRed', 5], ['blue', 'keyBlue', 18]].forEach(function (k) {
      var x = k[0] === 'red' ? 286 : 300;
      ctx.fillStyle = p.keys[k[0]] ? (k[0] === 'red' ? '#ff7257' : '#6baaff') : G.info.keys[k[0]] ? '#4d5b65' : '#26313a';
      ctx.fillRect(x, 187, 9, 6);
      ctx.fillStyle = '#9aaab1'; ctx.fillRect(x + 3, 188, 3, 1);
    });
  }

  function crosshair(G) {
    var cx = W / 2, cy = HORIZON;
    if (settings.crosshair) {
      var tgt = game.aimTarget();
      ctx.fillStyle = !tgt ? 'rgba(232,224,200,0.8)' : tgt.barrel ? '#ff9a28' : '#ff4a2a';
      ctx.fillRect(cx - 5, cy, 3, 1); ctx.fillRect(cx + 3, cy, 3, 1); ctx.fillRect(cx, cy - 5, 1, 3); ctx.fillRect(cx, cy + 3, 1, 3);
    }
    var mk = G.killT > 0 ? '#ff3a1a' : G.blockT > 0 ? '#9aa4a8' : G.hitT > 0 ? '#ffffff' : null;
    if (mk) {
      ctx.fillStyle = mk;
      var r0 = G.killT > 0 ? 4 : 3;
      for (var k = r0; k < r0 + 3; k++) { ctx.fillRect(cx - k, cy - k, 1, 1); ctx.fillRect(cx + k, cy - k, 1, 1); ctx.fillRect(cx - k, cy + k, 1, 1); ctx.fillRect(cx + k, cy + k, 1, 1); }
    }
  }

  function hurtDirs(G) {
    var p = G.p, cx = W / 2, cy = HORIZON, r = 34;
    G.hurtDirs.forEach(function (h) {
      var rel = h.ang - p.ang, sx = Math.sin(rel), sy = -Math.cos(rel), bx = cx + sx * r, by = cy + sy * r;
      ctx.fillStyle = 'rgba(255,40,16,' + Math.min(0.9, h.t).toFixed(3) + ')';
      ctx.beginPath(); ctx.moveTo(bx + sx * 9, by + sy * 9); ctx.lineTo(bx - sy * 7, by + sx * 7); ctx.lineTo(bx + sy * 7, by - sx * 7); ctx.closePath(); ctx.fill();
    });
  }

  function usePrompt() {
    var u = game.usePrompt();
    if (!u) return;
    var y = HORIZON + 14;
    if (u.verb) {
      var tw = ART.textWidth(u.verb, 1), total = 13 + tw, x = (W - total) / 2 | 0;
      ctx.fillStyle = 'rgba(0,0,0,0.55)'; ctx.fillRect(x - 3, y - 3, total + 6, 13);
      ctx.fillStyle = '#e8e0c8'; ctx.fillRect(x, y - 1, 9, 9);
      ctx.fillStyle = '#14110d'; ctx.fillRect(x + 1, y, 7, 7);
      ART.drawText(ctx, 'E', x + 3, y + 1, { color: '#ffd23e' });
      ART.drawText(ctx, u.verb, x + 13, y + 1, { color: u.color, shadow: true });
    } else {
      var tw2 = ART.textWidth(u.text, 1);
      ctx.fillStyle = 'rgba(0,0,0,0.55)'; ctx.fillRect((W - tw2) / 2 - 4, y - 3, tw2 + 8, 13);
      ART.drawText(ctx, u.text, W / 2, y + 1, { color: u.color, shadow: true, center: true });
    }
  }

  // project a world point onto the full 320x200 view with the renderer's camera
  function goalMarker(G, camera) {
    if (!settings.goalMarker || !camera) return;
    var g = game.goalTarget();
    if (!g) return;
    var p = G.p, d = Math.hypot(g.x - p.x, g.z - p.z);
    if (d < 1.6) return;
    var v = { x: g.x, y: g.y, z: g.z };
    var pr = project(camera, v);
    var col = (G.time * 2) % 1 < 0.7 ? '#ffd23e' : '#c89a20';
    ctx.fillStyle = col;
    ctx.beginPath();
    if (pr.inFront && pr.x > 8 && pr.x < W - 8 && pr.y > 8 && pr.y < 160) {
      var sx = Math.round(pr.x), sy = Math.round(pr.y) - 8;
      ctx.moveTo(sx, sy - 4); ctx.lineTo(sx + 4, sy); ctx.lineTo(sx, sy + 4); ctx.lineTo(sx - 4, sy); ctx.closePath(); ctx.fill();
      ART.drawText(ctx, String(Math.round(d * 2)) + 'M', sx, sy + 7, { color: col, shadow: true, center: true });
    } else {
      var rel = Math.atan2(g.z - p.z, g.x - p.x) - p.ang; rel = Math.atan2(Math.sin(rel), Math.cos(rel));
      var right = rel > 0, ax = right ? W - 6 : 6, y = 40;
      ctx.moveTo(ax + (right ? 4 : -4), y); ctx.lineTo(ax - (right ? 3 : -3), y - 5); ctx.lineTo(ax - (right ? 3 : -3), y + 5); ctx.closePath(); ctx.fill();
      ART.drawText(ctx, 'GOAL', right ? W - 12 : 12, y - 2, { color: col, shadow: true, right: right });
    }
  }

  function lowHealth(G) {
    var p = G.p;
    if (p.dead || p.hp > 25) return;
    var a = 0.18 + 0.14 * Math.sin(G.time * 5);
    for (var k = 0; k < 6; k++) {
      ctx.fillStyle = 'rgba(200,0,0,' + (a * (1 - k / 6)).toFixed(3) + ')';
      ctx.fillRect(k * 2, 0, 2, VH); ctx.fillRect(W - k * 2 - 2, 0, 2, VH); ctx.fillRect(0, k * 2, W, 2); ctx.fillRect(0, VH - k * 2 - 2, W, 2);
    }
  }

  var OBITS = {
    imp: ['AN IMP BURNED YOU DOWN.', 'TIP: STRAFE WITH A AND D TO SIDESTEP FIREBALLS.'],
    gnasher: ['A GNASHER CHEWED YOU UP.', 'TIP: BACK AWAY WHILE YOU SHOOT, OR JUMP UP WHERE IT CAN\'T FOLLOW.'],
    knight: ['THE EMBER KNIGHT CRUSHED YOU.', 'TIP: KEEP YOUR DISTANCE AND BRING SHOTGUN SHELLS.'],
    riley: ['RILEY OUTPLAYED YOU.', 'TIP: WHEN HER VISOR FLASHES WHITE, SHE IS ABOUT TO SHOOT. MOVE!'],
    barrel: ['A BARREL BLEW UP IN YOUR FACE.', 'TIP: SHOOT BARRELS FROM FAR AWAY, WHEN DEMONS ARE NEAR THEM.']
  };
  function death(G) {
    var p = G.p;
    if (!p.dead || p.deadT < 1) return;
    var ob = OBITS[G.killer] || ['YOU WERE OVERWHELMED.', 'TIP: FIGHT FROM HIGH GROUND SO DEMONS COME TO YOU ONE AT A TIME.'];
    ctx.fillStyle = 'rgba(0,0,0,0.5)'; ctx.fillRect(0, 44, W, 72);
    ART.drawText(ctx, 'YOU DIED', W / 2, 50, { scale: 3, color: HUD_RED, shadow: true, center: true });
    ART.drawText(ctx, ob[0], W / 2, 72, { color: '#e8e0c8', shadow: true, center: true });
    ART.drawText(ctx, ob[1], W / 2, 84, { color: '#8fe0a0', shadow: true, center: true });
    if (p.deadT > 1.2 && (G.time % 1) < 0.7) ART.drawText(ctx, 'CLICK OR PRESS ENTER TO TRY AGAIN', W / 2, 100, { color: '#f0d848', shadow: true, center: true });
  }

  function messages(G) {
    var y = 4;
    G.msgs.forEach(function (m) {
      var lines = wrap(m.text, 78);
      if (m.t < 0.4) ctx.globalAlpha = Math.max(0, m.t / 0.4);
      lines.forEach(function (l) { ART.drawText(ctx, l, 4, y, { color: m.color || '#f0d848', shadow: true }); y += 7; });
      ctx.globalAlpha = 1; y += 1;
    });
    var n = G.notice;
    if (n) { ctx.globalAlpha = Math.min(1, n.t / 0.4); ART.drawText(ctx, n.text, W / 2, 50, { scale: 2, color: n.color, shadow: true, center: true }); ctx.globalAlpha = 1; }
  }

  function bossBar(G) {
    var b = G.boss;
    if (!b || b.state === 'idle' || b.state === 'dead') return;
    var bw = 140, bx = (W - bw) / 2, by = VH - 47, shield = b.shieldT > 0;
    ART.drawText(ctx, shield ? 'RILEY - SHIELDED' : 'RILEY', W / 2, by - 8, { color: shield ? '#ffd23e' : '#6fe0ec', shadow: true, center: true });
    ctx.fillStyle = '#06141c'; ctx.fillRect(bx - 1, by - 1, bw + 2, 6);
    ctx.fillStyle = shield ? '#ffd23e' : '#3fd8c8'; ctx.fillRect(bx, by, Math.max(0, b.hp / b.maxHp) * bw, 4);
    ctx.fillStyle = '#06141c'; ctx.fillRect(bx + bw * 0.33, by, 1, 4); ctx.fillRect(bx + bw * 0.66, by, 1, 4);
  }

  function automap(G) {
    ctx.fillStyle = 'rgba(0,0,0,0.8)'; ctx.fillRect(0, 0, W, VH);
    var top = 22, bottom = VH - 14, sc = Math.min((W - 16) / G.mw, (bottom - top) / G.mh);
    var ox = (W - G.mw * sc) / 2, oy = top + (bottom - top - G.mh * sc) / 2, pulse = (G.time * 2) % 1 < 0.6;
    for (var z = 0; z < G.mh; z++) for (var x = 0; x < G.mw; x++) {
      var i = z * G.mw + x, c = G.W.cells[i];
      if (!G.seen[i]) continue;
      var col = null;
      if (c === 0) { var f = G.W.floor[i]; col = 'rgb(' + (40 + f * 50 | 0) + ',' + (34 + f * 40 | 0) + ',' + (28 + f * 30 | 0) + ')'; } // floors shaded by height
      else if (c === 6) col = '#c8a030';
      else if (c === 11) col = G.doors[x + ',' + z].found ? '#c8a030' : '#6a655c';
      else if (c === 7) col = '#ff3a2a';
      else if (c === 8) col = '#4a7aff';
      else if (c === 9 || c === 10) col = pulse || c === 10 ? '#58e068' : '#1e5a26';
      else col = '#8a8478';
      ctx.fillStyle = col;
      ctx.fillRect(ox + x * sc, oy + z * sc, Math.max(1, sc - 0.4), Math.max(1, sc - 0.4));
    }
    var goal = game.goalTarget();
    if (goal && pulse) {
      var gx = ox + goal.x * sc, gy = oy + goal.z * sc;
      ctx.fillStyle = '#ffd23e';
      ctx.fillRect(gx - 3, gy - 3, 7, 1); ctx.fillRect(gx - 3, gy + 3, 7, 1); ctx.fillRect(gx - 3, gy - 3, 1, 7); ctx.fillRect(gx + 3, gy - 3, 1, 7);
    }
    var p = G.p, px = ox + p.x * sc, py = oy + p.z * sc, ca = Math.cos(p.ang), sa = Math.sin(p.ang);
    ctx.fillStyle = '#f8f4e0';
    ctx.beginPath(); ctx.moveTo(px + ca * 5, py + sa * 5); ctx.lineTo(px - ca * 3 - sa * 3, py - sa * 3 + ca * 3); ctx.lineTo(px - ca * 3 + sa * 3, py - sa * 3 - ca * 3); ctx.closePath(); ctx.fill();
    ART.drawText(ctx, G.L.name, 6, 4, { color: '#ff9a28', shadow: true });
    ART.drawText(ctx, 'TAB: CLOSE', W - 6, 4, { color: '#8a8478', right: true });
    ART.drawText(ctx, 'GOAL: ' + game.objective(), 6, 12, { color: '#f0d848', shadow: true });
    var st = G.stats;
    ART.drawText(ctx, 'KILLS ' + st.kills + '/' + st.totalKills + '  ITEMS ' + st.items + '/' + st.totalItems + '  SECRETS ' + st.secrets + '/' + st.totalSecrets + '  TIME ' + fmtTime(G.time), W - 6, 12, { color: '#c8c0b0', right: true });
    ART.drawText(ctx, 'BRIGHTER FLOOR = HIGHER GROUND', 6, VH - 9, { color: '#a8a090' });
  }

  return {
    draw: function (G, opts) {
      ctx.clearRect(0, 0, W, H);
      var p = G.p;
      if (p.dmgFlash > 0) { ctx.fillStyle = 'rgba(255,20,10,' + (p.dmgFlash * 0.8).toFixed(3) + ')'; ctx.fillRect(0, 0, W, VH); }
      if (p.bonusFlash > 0) { ctx.fillStyle = 'rgba(255,220,80,' + (p.bonusFlash * 0.7).toFixed(3) + ')'; ctx.fillRect(0, 0, W, VH); }
      lowHealth(G);
      if (opts.map) automap(G);
      else if (!p.dead && !opts.menu) { hurtDirs(G); goalMarker(G, opts.camera); crosshair(G); usePrompt(); }
      if (!opts.map) bossBar(G);
      messages(G);
      death(G);
      if (!opts.map && !opts.menu && !p.dead) statusBar(G);
    }
  };
}

// world point -> 320x200 overlay coordinates
function project(camera, v) {
  var e = camera.matrixWorldInverse.elements, pm = camera.projectionMatrix.elements;
  var x = v.x, y = v.y, z = v.z;
  var cx = e[0] * x + e[4] * y + e[8] * z + e[12], cy = e[1] * x + e[5] * y + e[9] * z + e[13], cz = e[2] * x + e[6] * y + e[10] * z + e[14];
  var px = pm[0] * cx + pm[4] * cy + pm[8] * cz + pm[12], py = pm[1] * cx + pm[5] * cy + pm[9] * cz + pm[13], pw = pm[3] * cx + pm[7] * cy + pm[11] * cz + pm[15];
  if (pw <= 0.01) return { inFront: false };
  return { inFront: true, x: (px / pw * 0.5 + 0.5) * W, y: (1 - (py / pw * 0.5 + 0.5)) * VH };
}
