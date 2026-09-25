// FIREBIRD 3D — engine.js
// A classic 90s-style raycasting FPS engine: textured walls, floor/ceiling
// casting, billboard sprites, sliding doors, hitscan weapons and demon AI.
'use strict';

(function () {

  // ---- screen ----------------------------------------------------------------

  var W = 320, H = 200, VH = 168, HUD_H = 32;
  var HORIZON = VH >> 1;
  var TS = 64;

  var screenC = document.getElementById('screen');
  var sctx = screenC.getContext('2d');
  var low = document.createElement('canvas');
  low.width = W; low.height = H;
  var ctx = low.getContext('2d');
  var viewImg = ctx.createImageData(W, VH);
  var fb = new Uint32Array(viewImg.data.buffer);
  var zbuf = new Float64Array(W);

  // ---- helpers ---------------------------------------------------------------

  function rnd() { return Math.random(); }
  function rndIn(a, b) { return a + Math.random() * (b - a); }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function dist2(ax, ay, bx, by) { var dx = ax - bx, dy = ay - by; return dx * dx + dy * dy; }

  var flashT = 0; // muzzle light

  function lightFi(d) {
    var f = 1.5 / (1 + 0.28 * d + 0.012 * d * d);
    if (flashT > 0) f += 0.45 / (1 + d * 0.3);
    var fi = (f * 255) | 0;
    return fi > 255 ? 255 : fi;
  }

  function shade(c, fi) {
    return (0xff000000 |
      ((((c >> 16) & 255) * fi >> 8) << 16) |
      ((((c >> 8) & 255) * fi >> 8) << 8) |
      ((c & 255) * fi >> 8)) >>> 0;
  }

  // ---- input -----------------------------------------------------------------

  var keys = {};
  var fireHeld = false;
  var mapOpen = false;

  document.addEventListener('keydown', function (e) {
    if (e.code === 'Tab' || e.code === 'Space' || e.code.slice(0, 5) === 'Arrow') e.preventDefault();
    if (e.repeat) return;
    keys[e.code] = true;
    if (e.code === 'Tab') mapOpen = !mapOpen;
    if (e.code === 'KeyM') {
      if (SND.init()) {
        var on = SND.toggleMusic();
        if (mode === 'game') message('MUSIC ' + (on ? 'ON' : 'OFF'));
      }
    }
    if (e.code === 'ControlLeft' || e.code === 'ControlRight') fireHeld = true;
    if (e.code === 'Digit1') switchWeapon('fist');
    if (e.code === 'Digit2') switchWeapon('pistol');
    if (e.code === 'Digit3') switchWeapon('shotgun');
    if (e.code === 'Enter' || e.code === 'NumpadEnter') onEnter();
  });
  document.addEventListener('keyup', function (e) {
    keys[e.code] = false;
    if (e.code === 'ControlLeft' || e.code === 'ControlRight') fireHeld = false;
  });

  var locked = false;
  document.addEventListener('pointerlockchange', function () {
    locked = document.pointerLockElement === screenC;
    if (!locked) fireHeld = false;
  });
  document.addEventListener('mousemove', function (e) {
    if (locked && mode === 'game' && G && !G.p.dead) {
      G.p.ang += e.movementX * 0.0022;
    }
  });
  screenC.addEventListener('mousedown', function (e) {
    SND.init(); SND.startMusic();
    if (mode === 'title') { startGame(0); requestLock(); return; }
    if (mode === 'game') {
      if (!locked) { requestLock(); return; }
      if (e.button === 0) fireHeld = true;
    }
    if (mode === 'inter' || mode === 'victory' || (G && G.p.dead)) onEnter();
  });
  document.addEventListener('mouseup', function (e) {
    if (e.button === 0) fireHeld = false;
  });
  screenC.addEventListener('contextmenu', function (e) { e.preventDefault(); });

  function requestLock() {
    try { screenC.requestPointerLock(); } catch (e) { }
  }

  function onEnter() {
    SND.init(); SND.startMusic();
    if (mode === 'title') { startGame(0); }
    else if (mode === 'inter') {
      if (levelIndex + 1 >= LEVELS.length) { mode = 'victory'; SND.play('orb'); }
      else startLevel(levelIndex + 1, true);
    }
    else if (mode === 'victory') { mode = 'title'; }
    else if (mode === 'game' && G && G.p.dead) { startLevel(levelIndex, false); } // pistol start, like the classics
  }

  // ---- weapons ---------------------------------------------------------------

  var WEAPONS = {
    fist: { ammo: null, rate: 0.5, melee: true, dmgMin: 8, dmgMax: 24, art: 'fist', sound: 'punch', sc: 3 },
    pistol: { ammo: 'bullets', rate: 0.42, pellets: 1, spread: 0.025, dmgMin: 5, dmgMax: 15, art: 'pistol', sound: 'pistol', sc: 2 },
    shotgun: { ammo: 'shells', rate: 0.95, pellets: 7, spread: 0.10, dmgMin: 5, dmgMax: 15, art: 'shotgun', sound: 'shotgun', sc: 2 }
  };

  function switchWeapon(name) {
    if (mode !== 'game' || !G || G.p.dead) return;
    var p = G.p;
    if (!p.weapons[name] || p.weapon === name || p.nextWeapon) return;
    p.nextWeapon = name;
  }

  // ---- game state ------------------------------------------------------------

  var mode = 'title';
  var levelIndex = 0;
  var G = null;
  var titleT = 0;
  var interStats = null;

  var WALL_IDS = { '#': 1, '%': 2, 'M': 3, 'T': 4, 'H': 5, 'D': 6, 'R': 7, 'U': 8, 'X': 9, 'S': 11 };
  var DOOR_IDS = { 6: true, 7: true, 8: true, 11: true };

  var MOBS = {
    imp: { hp: 40, speed: 1.7, radius: 0.35, painChance: 0.75, ranged: true, melee: false, h: 0.72, w: 0.72, sight: 'impSight', attackDmg: [8, 20] },
    gnasher: { hp: 110, speed: 2.9, radius: 0.42, painChance: 0.5, ranged: false, melee: true, h: 0.68, w: 0.7, sight: 'impSight', attackDmg: [4, 16], fleeBelow: 0.4 },
    knight: { hp: 400, speed: 1.9, radius: 0.48, painChance: 0.2, ranged: true, melee: true, h: 0.92, w: 0.92, sight: 'knightSight', attackDmg: [10, 26] },
    // the final boss; her brain lives in riley.js
    riley: { hp: 900, speed: 2.4, radius: 0.4, painChance: 0.12, ranged: true, melee: true, h: 1.0, w: 0.56, sight: 'rileySight', attackDmg: [10, 20], boss: true }
  };

  var MOB_CHARS = { i: 'imp', g: 'gnasher', K: 'knight', Y: 'riley' };

  function makeMob(kind, x, y) {
    var def = MOBS[kind];
    return {
      kind: kind, mob: true, x: x, y: y, z: 0, hp: def.hp,
      radius: def.radius, speed: def.speed, h: def.h, w: def.w,
      state: 'idle', st: 0, animT: rnd(), cool: rndIn(0.5, 1.5),
      moveAng: 0, retarget: 0, losT: rnd() * 0.3, los: false,
      target: null, lostT: 0, fleeNext: false, strafeSide: rnd() < 0.5 ? 1 : -1
    };
  }

  function storage() {
    try { return window.localStorage; } catch (e) { return null; }
  }

  var ITEMS = {
    h: { img: 'stim', h: 0.22, w: 0.24, msg: 'PICKED UP A STIMPACK.', snd: 'health' },
    '+': { img: 'medkit', h: 0.3, w: 0.34, msg: 'PICKED UP A MEDIKIT.', snd: 'health' },
    b: { img: 'clip', h: 0.18, w: 0.22, msg: 'PICKED UP A CLIP.', snd: 'pickup' },
    a: { img: 'shells', h: 0.2, w: 0.3, msg: 'PICKED UP A BOX OF SHELLS.', snd: 'pickup' },
    A: { img: 'armor', h: 0.32, w: 0.36, msg: 'PICKED UP THE ARMOR!', snd: 'pickup' },
    2: { img: 'shotgunPickup', h: 0.2, w: 0.62, msg: 'YOU GOT THE SHOTGUN!', snd: 'weaponUp' },
    r: { img: 'keyRed', h: 0.26, w: 0.18, msg: 'PICKED UP THE RED KEYCARD.', snd: 'keyPickup' },
    u: { img: 'keyBlue', h: 0.26, w: 0.18, msg: 'PICKED UP THE BLUE KEYCARD.', snd: 'keyPickup' },
    P: { img: 'orb', h: 0.3, w: 0.3, msg: 'PHOENIX ORB! YOU FEEL REBORN!', snd: 'orb' }
  };

  function startGame(idx) {
    startLevel(idx, false);
  }

  function startLevel(idx, keepGear) {
    levelIndex = idx;
    var L = LEVELS[idx];
    var m = L.map, mw = m[0].length, mh = m.length;
    var cells = new Uint8Array(mw * mh);
    var doors = {};
    var ents = [];
    var secrets = [];
    var old = keepGear && G ? G.p : null;

    var p = {
      x: 0, y: 0, ang: L.playerAngle || 0,
      hp: old ? old.hp : 100,
      armor: old ? old.armor : 0,
      ammo: old ? { bullets: old.ammo.bullets, shells: old.ammo.shells } : { bullets: 50, shells: 0 },
      weapons: old ? { fist: true, pistol: true, shotgun: old.weapons.shotgun } : { fist: true, pistol: true, shotgun: false },
      keys: { red: false, blue: false },
      weapon: old && old.weapons.shotgun ? old.weapon : 'pistol',
      nextWeapon: null, raiseT: 0.3, lowerT: 0, cool: 0, fireT: 1,
      bobPhase: 0, bobAmp: 0,
      dead: false, deadT: 0, camZ: 0.5,
      painT: 0, grinT: 0, dmgFlash: 0, bonusFlash: 0
    };

    for (var y = 0; y < mh; y++) {
      for (var x = 0; x < mw; x++) {
        var ch = m[y][x];
        var id = WALL_IDS[ch] || 0;
        cells[y * mw + x] = id;
        if (DOOR_IDS[id]) {
          doors[x + ',' + y] = {
            x: x, y: y, open: 0, state: 'closed', timer: 0,
            locked: id === 7 ? 'red' : id === 8 ? 'blue' : null,
            secret: id === 11, found: false
          };
        }
        var cx = x + 0.5, cy = y + 0.5;
        if (ch === 'p') { p.x = cx; p.y = cy; }
        else if (MOB_CHARS[ch]) {
          var mob = makeMob(MOB_CHARS[ch], cx, cy);
          if (mob.kind === 'riley') setupRiley(mob);
          ents.push(mob);
        }
        else if (ch === 'o') ents.push({ kind: 'barrel', mob: true, barrel: true, x: cx, y: cy, z: 0, hp: 15, radius: 0.3, h: 0.55, w: 0.4, state: 'idle', st: 0 });
        else if (ch === 't') ents.push({ kind: 'torch', x: cx, y: cy, z: 0, h: 0.95, w: 0.34, bright: true, animT: rnd() });
        else if (ITEMS[ch]) ents.push({ kind: 'pickup', item: ch, x: cx, y: cy, z: 0, h: ITEMS[ch].h, w: ITEMS[ch].w });
        else if (ch === '*') secrets.push({ x: x, y: y, found: false });
      }
    }

    var totalKills = 0, totalItems = 0;
    for (var i = 0; i < ents.length; i++) {
      if (ents[i].mob && !ents[i].barrel) totalKills++;
      if (ents[i].kind === 'pickup') totalItems++;
    }

    G = {
      L: L, mw: mw, mh: mh, cells: cells, doors: doors, ents: ents, p: p,
      seen: new Uint8Array(mw * mh),
      secrets: secrets,
      msgs: [],
      time: 0,
      stats: { kills: 0, totalKills: totalKills, items: 0, totalItems: totalItems, secrets: 0, totalSecrets: secrets.length },
      exitT: -1,
      flow: new Int16Array(mw * mh), flowT: 0, // path distance to the player, for mobs out of sight
      infightSeen: false,
      boss: null,
      shotId: 0, firing: false, // lets Riley count a shotgun blast as one hit
      input: { strafe: 0, moving: false, vx: 0, vy: 0 }, // what the player is doing, for Riley to read
      floorTex: ART.floors[L.floor], ceilTex: ART.floors[L.ceil]
    };
    for (var bi = 0; bi < ents.length; bi++) if (ents[bi].kind === 'riley') G.boss = ents[bi];
    mode = 'game';
    message(L.name);
  }

  function message(text, color, secs) {
    G.msgs.push({ text: text, t: secs || 3, color: color });
    if (G.msgs.length > 4) G.msgs.shift();
  }

  // ---- grid queries ----------------------------------------------------------

  function cellAt(x, y) {
    if (x < 0 || y < 0 || x >= G.mw || y >= G.mh) return 1;
    return G.cells[y * G.mw + x];
  }

  function doorAt(x, y) { return G.doors[x + ',' + y] || null; }

  function solidCell(x, y) {
    var c = cellAt(x, y);
    if (c === 0) return false;
    if (DOOR_IDS[c]) { var d = doorAt(x, y); return !d || d.open < 0.9; }
    return true;
  }

  function hitsWall(x, y, r) {
    var x0 = Math.floor(x - r), x1 = Math.floor(x + r);
    var y0 = Math.floor(y - r), y1 = Math.floor(y + r);
    for (var cy = y0; cy <= y1; cy++)
      for (var cx = x0; cx <= x1; cx++)
        if (solidCell(cx, cy)) return true;
    return false;
  }

  // returns true if fully moved, false if blocked on either axis
  function slideMove(e, dx, dy, r) {
    var ok = true;
    if (dx !== 0) {
      if (!hitsWall(e.x + dx, e.y, r)) e.x += dx; else ok = false;
    }
    if (dy !== 0) {
      if (!hitsWall(e.x, e.y + dy, r)) e.y += dy; else ok = false;
    }
    return ok;
  }

  // DDA ray for bullets / line of sight. Doors count as walls until mostly open.
  function castRay(px, py, dx, dy, maxDist) {
    var mapX = Math.floor(px), mapY = Math.floor(py);
    var ddx = Math.abs(1 / dx), ddy = Math.abs(1 / dy);
    var stepX, stepY, sideX, sideY;
    if (dx < 0) { stepX = -1; sideX = (px - mapX) * ddx; } else { stepX = 1; sideX = (mapX + 1 - px) * ddx; }
    if (dy < 0) { stepY = -1; sideY = (py - mapY) * ddy; } else { stepY = 1; sideY = (mapY + 1 - py) * ddy; }
    for (var i = 0; i < 128; i++) {
      var d;
      if (sideX < sideY) { d = sideX; sideX += ddx; mapX += stepX; }
      else { d = sideY; sideY += ddy; mapY += stepY; }
      if (d > maxDist) return { dist: maxDist, mapX: mapX, mapY: mapY };
      var c = cellAt(mapX, mapY);
      if (c !== 0) {
        if (DOOR_IDS[c]) {
          var dr = doorAt(mapX, mapY);
          if (dr && dr.open >= 0.8) continue;
        }
        return { dist: d, mapX: mapX, mapY: mapY };
      }
    }
    return { dist: maxDist, mapX: mapX, mapY: mapY };
  }

  function hasLOS(ax, ay, bx, by) {
    var dx = bx - ax, dy = by - ay;
    var d = Math.sqrt(dx * dx + dy * dy);
    if (d < 0.001) return true;
    var hit = castRay(ax, ay, dx / d, dy / d, d);
    return hit.dist >= d - 0.05;
  }

  // Breadth-first flood over the grid from (ox, oy). Fills out[] with step
  // counts (-1 = not reached) through cells where pass(x, y) is true.
  var floodQ = null;
  function flood(ox, oy, maxSteps, pass, out) {
    var mw = G.mw, n = mw * G.mh;
    if (!floodQ || floodQ.length < n) floodQ = new Int32Array(n);
    out.fill(-1);
    var sx = Math.floor(ox), sy = Math.floor(oy);
    if (sx < 0 || sy < 0 || sx >= mw || sy >= G.mh) return;
    var head = 0, tail = 0;
    out[sy * mw + sx] = 0;
    floodQ[tail++] = sy * mw + sx;
    while (head < tail) {
      var c = floodQ[head++], step = out[c];
      if (step >= maxSteps) continue;
      var cx = c % mw, cy = (c / mw) | 0;
      for (var k = 0; k < 4; k++) {
        var nx = cx + (k === 0 ? 1 : k === 1 ? -1 : 0);
        var ny = cy + (k === 2 ? 1 : k === 3 ? -1 : 0);
        if (nx < 0 || ny < 0 || nx >= mw || ny >= G.mh) continue;
        var nc = ny * mw + nx;
        if (out[nc] !== -1 || !pass(nx, ny)) continue;
        out[nc] = step + 1;
        floodQ[tail++] = nc;
      }
    }
  }

  // sound travels through open space and open doors, not through closed ones
  function soundPasses(x, y) { return !solidCell(x, y); }

  // mobs can path through any door they are able to open themselves
  function mobPasses(x, y) {
    var c = cellAt(x, y);
    if (c === 0) return true;
    if (!DOOR_IDS[c]) return false;
    var d = doorAt(x, y);
    return d.open >= 0.9 || (!d.locked && !d.secret);
  }

  function updateFlow() {
    flood(G.p.x, G.p.y, 9999, mobPasses, G.flow);
  }

  // heading toward the neighbouring cell that is one step closer to the player
  function flowHeading(e) {
    var mw = G.mw, cx = Math.floor(e.x), cy = Math.floor(e.y);
    var best = G.flow[cy * mw + cx];
    if (best <= 0) return null;
    var bx = -1, by = -1;
    for (var k = 0; k < 4; k++) {
      var nx = cx + (k === 0 ? 1 : k === 1 ? -1 : 0);
      var ny = cy + (k === 2 ? 1 : k === 3 ? -1 : 0);
      if (nx < 0 || ny < 0 || nx >= mw || ny >= G.mh) continue;
      var f = G.flow[ny * mw + nx];
      if (f >= 0 && f < best) { best = f; bx = nx; by = ny; }
    }
    if (bx < 0) return null;
    return Math.atan2(by + 0.5 - e.y, bx + 0.5 - e.x);
  }

  // ---- doors -----------------------------------------------------------------

  function openDoor(d, byPlayer) {
    if (d.state === 'closed' || d.state === 'closing') {
      d.state = 'opening';
      SND.play('doorOpen', playerDist(d.x + 0.5, d.y + 0.5));
      if (d.secret && !d.found) d.found = true; // sound of a secret wall grinding open
    } else if (byPlayer && d.state === 'open') {
      d.state = 'closing';
      SND.play('doorClose', playerDist(d.x + 0.5, d.y + 0.5));
    }
  }

  function playerDist(x, y) {
    return Math.sqrt(dist2(x, y, G.p.x, G.p.y));
  }

  function entityInDoor(d) {
    if (Math.floor(G.p.x) === d.x && Math.floor(G.p.y) === d.y) return true;
    for (var i = 0; i < G.ents.length; i++) {
      var e = G.ents[i];
      if (e.mob && e.state !== 'dead' && Math.floor(e.x) === d.x && Math.floor(e.y) === d.y) return true;
    }
    return false;
  }

  function updateDoors(dt) {
    for (var k in G.doors) {
      var d = G.doors[k];
      if (d.state === 'opening') {
        d.open += dt * 1.6;
        if (d.open >= 1) { d.open = 1; d.state = 'open'; d.timer = d.secret ? 9999 : 4; }
      } else if (d.state === 'open') {
        d.timer -= dt;
        if (d.timer <= 0 && !entityInDoor(d)) {
          d.state = 'closing';
          SND.play('doorClose', playerDist(d.x + 0.5, d.y + 0.5));
        }
      } else if (d.state === 'closing') {
        if (entityInDoor(d)) { d.state = 'opening'; continue; }
        d.open -= dt * 1.6;
        if (d.open <= 0) { d.open = 0; d.state = 'closed'; }
      }
    }
  }

  function useAction() {
    var p = G.p;
    var c = Math.cos(p.ang), s = Math.sin(p.ang);
    for (var t = 0.4; t <= 1.3; t += 0.3) {
      var cx = Math.floor(p.x + c * t), cy = Math.floor(p.y + s * t);
      var id = cellAt(cx, cy);
      if (id === 0) continue;
      if (DOOR_IDS[id]) {
        var d = doorAt(cx, cy);
        if (d.locked && !p.keys[d.locked]) {
          SND.play('locked');
          message('YOU NEED THE ' + d.locked.toUpperCase() + ' KEYCARD.');
        } else {
          openDoor(d, true);
        }
        return;
      }
      if (id === 9) { // exit switch
        G.cells[cy * G.mw + cx] = 10;
        SND.play('switchFlip');
        G.exitT = 0.8;
        return;
      }
      return; // plain wall
    }
  }

  // ---- combat ----------------------------------------------------------------

  // A loud noise wakes every idle mob it can reach by travelling through
  // open space. Closed doors muffle it completely, so shutting a door on a
  // room keeps it asleep — and punching makes no noise at all.
  function makeNoise(x, y, steps) {
    var heard = new Int16Array(G.mw * G.mh);
    flood(x, y, steps, soundPasses, heard);
    for (var i = 0; i < G.ents.length; i++) {
      var e = G.ents[i];
      if (!e.mob || e.barrel || e.state !== 'idle' || MOBS[e.kind].boss) continue;
      if (heard[Math.floor(e.y) * G.mw + Math.floor(e.x)] >= 0) wakeMob(e);
    }
  }

  function wakeMob(e) {
    if (e.state !== 'idle') return;
    e.state = 'chase';
    e.st = 0;
    SND.play(MOBS[e.kind].sight, playerDist(e.x, e.y), panOf(e.x, e.y));
  }

  function panOf(x, y) {
    var p = G.p;
    var a = Math.atan2(y - p.y, x - p.x) - p.ang;
    return Math.sin(a) * 0.7;
  }

  function spawnPart(x, y, z, frames, life, opts) {
    opts = opts || {};
    G.ents.push({
      kind: 'part', x: x, y: y, z: z, frames: frames, life: life, maxLife: life,
      h: opts.h || 0.14, w: opts.w || 0.14, bright: opts.bright, vz: opts.vz || 0
    });
  }

  function fireHitscan(ang, dmgMin, dmgMax, isMelee) {
    var p = G.p;
    var c = Math.cos(ang), s = Math.sin(ang);
    var wall = castRay(p.x, p.y, c, s, isMelee ? 1.4 : 40);
    var best = null, bestT = 1e9;
    for (var i = 0; i < G.ents.length; i++) {
      var e = G.ents[i];
      if (!e.mob || e.state === 'die' || e.state === 'dead') continue;
      var dx = e.x - p.x, dy = e.y - p.y;
      var t = dx * c + dy * s;
      if (t < 0.2 || t > wall.dist + 0.2 || t > bestT) continue;
      if (isMelee && t > 1.4) continue;
      var perp = Math.abs(dx * s - dy * c);
      if (perp < e.radius + 0.08) { best = e; bestT = t; }
    }
    var dmg = (dmgMin + rnd() * (dmgMax - dmgMin)) | 0;
    if (best) {
      damageMob(best, dmg);
      spawnPart(best.x - c * best.radius, best.y - s * best.radius, rndIn(0.3, 0.6),
        best.barrel || best.kind === 'riley' ? ['puffA', 'puffB'] : ['bloodA', 'bloodB'], 0.25);
    } else if (!isMelee) {
      var hx = p.x + c * (wall.dist - 0.08), hy = p.y + s * (wall.dist - 0.08);
      spawnPart(hx, hy, rndIn(0.3, 0.6), ['puffA', 'puffB'], 0.3);
    } else {
      SND.play('whiff');
    }
    return best;
  }

  function alive(e) {
    return !!e && !e.gone && e.state !== 'die' && e.state !== 'dead';
  }

  // src is the mob that did the damage, or null/undefined for the player
  function damageMob(e, dmg, src) {
    if (e.state === 'die' || e.state === 'dead') return;
    if (e.kind === 'riley' && rileyTakeHit(e, src)) return;
    e.hp -= dmg;
    if (e.barrel) {
      e.blame = alive(src) ? src : null; // whoever sets it off owns the blast
      if (e.hp <= 0 && e.state !== 'boom') { e.state = 'boom'; e.st = 0.08; }
      return;
    }
    var def = MOBS[e.kind];
    wakeMob(e);
    // infighting: a demon hurt by another demon turns on it (Riley knows better)
    if (def.boss) {
      // no grudges
    } else if (src && src !== e && alive(src) && !src.barrel) {
      if (e.target !== src && !G.infightSeen && playerDist(e.x, e.y) < 14) {
        G.infightSeen = true;
        message('THE DEMONS TURN ON EACH OTHER!');
      }
      e.target = src; e.lostT = 0;
    } else if (!src) {
      e.target = null; // the player just reminded it who the real enemy is
    }
    if (e.hp <= 0) {
      e.state = 'die'; e.st = 0;
      G.stats.kills++;
      if (!def.boss) SND.play('enemyDie', playerDist(e.x, e.y), panOf(e.x, e.y));
    } else if (rnd() < def.painChance && !(def.boss && e.state === 'windup')) {
      e.state = 'pain'; e.st = def.boss ? 0.25 : 0.35;
      if (def.fleeBelow && e.hp < def.hp * def.fleeBelow) e.fleeNext = true;
      SND.play('enemyPain', playerDist(e.x, e.y), panOf(e.x, e.y));
    }
    if (e.kind === 'riley') rileyAfterHit(e);
  }

  function explodeBarrel(e) {
    e.state = 'dead'; e.dead = true; e.gone = true;
    SND.play('barrelBoom', playerDist(e.x, e.y), panOf(e.x, e.y));
    spawnPart(e.x, e.y, 0.1, ['boom1', 'boom2', 'boom3'], 0.45, { h: 1.1, w: 1.1, bright: true });
    // splash damage
    var R = 2.3;
    var blame = alive(e.blame) ? e.blame : null;
    for (var i = 0; i < G.ents.length; i++) {
      var o = G.ents[i];
      if (!o.mob || o === e || o.state === 'dead' || o.state === 'die') continue;
      var d = Math.sqrt(dist2(o.x, o.y, e.x, e.y));
      if (d < R && hasLOS(e.x, e.y, o.x, o.y)) {
        if (o.barrel) { if (o.state !== 'boom') { o.state = 'boom'; o.st = rndIn(0.1, 0.25); o.blame = blame; } }
        else damageMob(o, ((R - d) / R * 90) | 0, blame);
      }
    }
    makeNoise(e.x, e.y, 10);
    var pd = Math.sqrt(dist2(G.p.x, G.p.y, e.x, e.y));
    if (pd < R && hasLOS(e.x, e.y, G.p.x, G.p.y)) hurtPlayer(((R - pd) / R * 70) | 0);
  }

  function hurtPlayer(dmg) {
    var p = G.p;
    if (p.dead || dmg <= 0 || G.exitT >= 0) return;
    var absorbed = Math.min(p.armor, Math.ceil(dmg / 3));
    p.armor -= absorbed;
    dmg -= absorbed;
    p.hp -= dmg;
    p.dmgFlash = Math.min(0.65, p.dmgFlash + dmg / 55);
    p.painT = 0.6;
    if (p.hp <= 0) {
      p.hp = 0; p.dead = true; p.deadT = 0;
      SND.play('playerDie');
      if (rileyActive(G.boss)) {
        rileySay(G.boss, RILEY.line('playerDied', G.boss.profile));
        rileySettle(G.boss, false);
      }
    } else {
      SND.play('playerPain');
    }
  }

  function throwProjectile(e, green, tx, ty, speed, dmg) {
    var dx = tx - e.x, dy = ty - e.y;
    var d = Math.sqrt(dx * dx + dy * dy) || 1;
    var sp = speed || (green ? 5.5 : 7);
    G.ents.push({
      kind: 'proj', x: e.x + dx / d * 0.5, y: e.y + dy / d * 0.5, z: 0.38,
      vx: dx / d * sp, vy: dy / d * sp,
      h: green ? 0.3 : 0.24, w: green ? 0.3 : 0.24,
      green: !!green, bright: true, animT: 0, owner: e,
      dmg: dmg || (green ? rndIn(10, 28) : rndIn(7, 20))
    });
    SND.play(e.kind === 'riley' ? 'rileyShoot' : 'impShoot', playerDist(e.x, e.y), panOf(e.x, e.y));
  }

  // ---- mob AI ----------------------------------------------------------------

  function updateMob(e, dt) {
    var p = G.p;
    var def = MOBS[e.kind];
    e.animT += dt;
    e.st -= dt;
    e.cool -= dt;

    // who are we after? another demon holding a grudge, or the player
    if (e.target && !alive(e.target)) { e.target = null; e.cool = Math.min(e.cool, 0.4); }
    var tgt = e.target;
    var tx = tgt ? tgt.x : p.x, ty = tgt ? tgt.y : p.y;

    // cached line of sight
    e.losT -= dt;
    if (e.losT <= 0) {
      e.losT = 0.2 + rnd() * 0.1;
      e.los = hasLOS(e.x, e.y, tx, ty);
    }
    var dx = tx - e.x, dy = ty - e.y;
    var d = Math.sqrt(dx * dx + dy * dy);

    // grudges fade once the other demon is out of sight for a while
    if (tgt) {
      e.lostT = e.los ? 0 : e.lostT + dt;
      if (e.lostT > 4) { e.target = null; e.lostT = 0; return; }
    }

    if (e.state === 'idle') {
      if (e.los && d < 9 && !p.dead) wakeMob(e);
      return;
    }
    if (e.state === 'pain') {
      if (e.st <= 0) {
        if (e.fleeNext) {
          // badly hurt: turn tail, then come back snarling
          e.fleeNext = false;
          e.state = 'flee'; e.st = rndIn(0.9, 1.6);
          e.moveAng = Math.atan2(-dy, -dx) + rndIn(-0.6, 0.6);
        } else e.state = 'chase';
      }
      return;
    }
    if (e.state === 'flee') {
      if (!slideMove(e, Math.cos(e.moveAng) * e.speed * 1.1 * dt, Math.sin(e.moveAng) * e.speed * 1.1 * dt, e.radius))
        e.moveAng += (rnd() < 0.5 ? 1 : -1) * Math.PI / 2;
      if (e.st <= 0) {
        e.state = 'chase'; e.cool = 0; e.retarget = 0;
        SND.play(def.sight, playerDist(e.x, e.y), panOf(e.x, e.y));
      }
      return;
    }
    if (e.state === 'die') {
      if (e.st <= -0.5) e.state = 'dead';
      return;
    }
    if (e.state === 'dead') return;

    if (e.state === 'windup') {
      if (e.st <= 0) {
        e.state = 'chase';
        if (!tgt && p.dead) return;
        if (def.melee && d < 1.9) {
          if (e.los) {
            var dmg = (def.attackDmg[0] + rnd() * (def.attackDmg[1] - def.attackDmg[0])) | 0;
            if (tgt) damageMob(tgt, dmg, e); else hurtPlayer(dmg);
            SND.play('punch', playerDist(e.x, e.y));
          }
        } else if (def.ranged && e.los) {
          throwProjectile(e, e.kind === 'knight', tx, ty);
        }
        e.cool = rndIn(0.9, 1.9);
      }
      return;
    }

    // chase
    if (!tgt && p.dead) return;
    e.detourT = (e.detourT || 0) - dt;
    e.pathT = (e.pathT || 0) - dt;
    var pathing = !tgt && (!e.los || e.pathT > 0) && e.detourT <= 0 ? flowHeading(e) : null;
    e.retarget -= dt;
    if (pathing !== null) {
      // can't see the player: follow the flow field around walls toward them
      e.moveAng = pathing;
    } else if (e.retarget <= 0) {
      e.retarget = rndIn(0.35, 0.8);
      var toT = Math.atan2(dy, dx);
      if (def.ranged && !def.melee && e.los && d < 7) {
        // imps circle-strafe instead of walking into the shotgun
        if (rnd() < 0.3) e.strafeSide = -e.strafeSide;
        e.moveAng = toT + e.strafeSide * rndIn(1.1, 1.8);
      } else {
        e.moveAng = toT + (d > 2.2 ? rndIn(-0.7, 0.7) : rndIn(-0.25, 0.25));
      }
    }
    var stopDist = def.melee ? 0.95 : 1.6;
    if (d > stopDist) {
      var sx0 = e.x, sy0 = e.y;
      var mx = Math.cos(e.moveAng) * e.speed * dt;
      var my = Math.sin(e.moveAng) * e.speed * dt;
      if (!slideMove(e, mx, my, e.radius)) {
        // blocked: try opening an unlocked door ahead, then pick a new direction
        var ax = Math.floor(e.x + Math.cos(e.moveAng) * 0.7);
        var ay = Math.floor(e.y + Math.sin(e.moveAng) * 0.7);
        var dr = doorAt(ax, ay);
        if (dr && !dr.locked && !dr.secret && dr.state === 'closed') openDoor(dr, false);
        e.moveAng += (rnd() < 0.5 ? 1 : -1) * Math.PI / 2 * rndIn(0.6, 1.2);
        e.retarget = rndIn(0.25, 0.5);
        e.pathT = 0.8; // walls in the way even though it can see you: follow the path for a bit
      }
      // separate from other mobs
      for (var i = 0; i < G.ents.length; i++) {
        var o = G.ents[i];
        if (o === e || !o.mob || o.state === 'dead' || o.state === 'die') continue;
        var ox = e.x - o.x, oy = e.y - o.y;
        var od2 = ox * ox + oy * oy, min = e.radius + (o.radius || 0.3);
        if (od2 > 0.0001 && od2 < min * min) {
          var od = Math.sqrt(od2);
          var push = (min - od) * 0.5;
          if (!hitsWall(e.x + ox / od * push, e.y + oy / od * push, e.radius)) {
            e.x += ox / od * push; e.y += oy / od * push;
          }
        }
      }
      // wedged against another demon: sidestep around it for a moment
      var moved2 = dist2(e.x, e.y, sx0, sy0), want = e.speed * dt * 0.3;
      e.stuckT = moved2 < want * want ? (e.stuckT || 0) + dt : 0;
      if (e.stuckT > 0.4) {
        e.stuckT = 0;
        e.detourT = rndIn(0.5, 0.9);
        e.moveAng += (rnd() < 0.5 ? 1 : -1) * Math.PI / 2;
        e.retarget = e.detourT;
      }
    }

    // decide attacks
    if (e.cool <= 0 && e.los) {
      if (def.melee && d < 1.4) {
        e.state = 'windup'; e.st = 0.35;
      } else if (def.ranged && d > 2 && d < 14 && rnd() < dt * 1.4) {
        e.state = 'windup'; e.st = 0.45;
      }
    }
  }

  // ---- Riley (final boss) ----------------------------------------------------
  // The engine is her body; riley.js is her brain. Each time a move finishes,
  // the engine lists the moves that are legal right now, the brain picks one
  // from what it has learned about the player, and the engine carries it out.

  function setupRiley(e) {
    var mem = RILEY.recall(storage());
    e.mem = mem;
    e.tune = RILEY.tuning(mem);
    e.hp = e.maxHp = Math.round(MOBS.riley.hp * e.tune.hpScale);
    e.profile = RILEY.newProfile();
    e.phase = 1;
    e.cools = { volley: 1, lead: 3, summon: 8, shield: 5, melee: 0 };
    e.move = null; e.moveT = 0; e.shieldT = 0; e.talkT = 0;
    e.flankSide = 1; e.attack = null; e.settled = false;
  }

  function rileyActive(e) {
    return !!e && e.state !== 'idle' && alive(e);
  }

  // insights wait their turn; event lines always get said
  function rileySay(e, text, isInsight) {
    if (!text || (isInsight && e.talkT > 0)) return false;
    message('RILEY: ' + text, '#6fe0ec', 4.5);
    SND.play('rileyTalk');
    e.talkT = 3.5;
    return true;
  }

  function rileyIntro(e) {
    var mem = e.mem;
    rileySay(e, RILEY.line('intro', e.profile, { memory: mem.fights > 0 ? mem : null }));
    if (mem.ease > 0) rileySay(e, RILEY.line('ease', e.profile));
    else if (e.tune.practised) rileySay(e, RILEY.line('studied', e.profile, { wins: mem.wins }));
  }

  // the fight is over one way or the other: remember it for next time
  function rileySettle(e, playerWon) {
    if (e.settled) return;
    e.settled = true;
    RILEY.save(storage(), RILEY.settle(e.mem, e.profile, playerWon));
  }

  function countSummoned() {
    var n = 0;
    for (var i = 0; i < G.ents.length; i++) if (G.ents[i].summoned && alive(G.ents[i])) n++;
    return n;
  }

  function rileySummon(e) {
    var made = 0;
    for (var tries = 0; tries < 30 && made < 2; tries++) {
      var a = rnd() * Math.PI * 2, r = rndIn(1.5, 3.5);
      var x = e.x + Math.cos(a) * r, y = e.y + Math.sin(a) * r;
      if (hitsWall(x, y, 0.4) || playerDist(x, y) < 3 || !hasLOS(e.x, e.y, x, y)) continue;
      var imp = makeMob('imp', x, y);
      imp.summoned = true;
      imp.state = 'chase';
      G.ents.push(imp);
      G.stats.totalKills++;
      spawnPart(x, y, 0.1, ['boom1', 'boom2'], 0.35, { h: 0.9, w: 0.9, bright: true });
      made++;
    }
    if (made) {
      rileySay(e, RILEY.line('summon', e.profile));
      SND.play('rileySight', playerDist(e.x, e.y), panOf(e.x, e.y));
    }
    e.cools.summon = 18 * e.tune.coolScale;
  }

  function rileyChoose(e, d, dx, dy) {
    var s = {
      los: e.los, dist: d, phase: e.phase, cool: e.cools,
      impsAlive: countSummoned(), playerWeapon: G.p.weapon
    };
    var pick = RILEY.choose(RILEY.legalMoves(s), e.profile, s);
    e.move = pick.move;
    rileySay(e, RILEY.insight(e.profile, pick.why), true);
    var pr = e.profile;
    switch (pick.move) {
      case 'volley': case 'lead':
        e.state = 'windup'; e.attack = pick.move;
        e.st = pick.move === 'volley' ? 0.55 : 0.4; // the white flash is the tell
        e.moveT = e.st + 0.2;
        break;
      case 'backoff':
        e.moveT = 1.0;
        e.moveAng = Math.atan2(-dy, -dx) + rndIn(-0.5, 0.5);
        break;
      case 'flank':
        // circle toward the side the player usually dodges to, once she knows it
        e.flankSide = RILEY.strafeHabit(pr) > 0.3 ? RILEY.strafeSide(pr) : (rnd() < 0.5 ? 1 : -1);
        e.moveT = 1.3;
        break;
      case 'close': e.moveT = 1.2; break;
      case 'seek': e.moveT = 0.8; break;
      case 'summon': rileySummon(e); e.moveT = 0.8; break;
      case 'shield':
        e.shieldT = 1.6; e.moveT = 1.2;
        e.cools.shield = 8 * e.tune.coolScale;
        SND.play('rileyShield', d, panOf(e.x, e.y));
        break;
    }
  }

  function rileyAttack(e, d) {
    var p = G.p, tune = e.tune, cs = tune.coolScale * (e.phase >= 3 ? 0.7 : 1);
    if (e.attack === 'melee') {
      if (d < 1.9 && e.los) {
        hurtPlayer((rndIn(10, 20) * tune.dmgScale) | 0);
        SND.play('punch', d);
      }
      e.cools.melee = 1.2;
      return;
    }
    if (!e.los) return;
    var base = Math.atan2(p.y - e.y, p.x - e.x);
    if (e.attack === 'volley') {
      for (var k = -1; k <= 1; k++) {
        var a = base + k * 0.2;
        throwProjectile(e, true, e.x + Math.cos(a) * d, e.y + Math.sin(a) * d, 6.5, rndIn(8, 16) * tune.dmgScale);
      }
      e.cools.volley = rndIn(1.6, 2.4) * cs;
    } else if (e.attack === 'lead') {
      // aim where the player will be, not where they are
      var sp = 9, t = d / sp;
      throwProjectile(e, true, p.x + G.input.vx * t, p.y + G.input.vy * t, sp, rndIn(10, 18) * tune.dmgScale);
      e.cools.lead = rndIn(1.8, 2.8) * cs;
    }
  }

  function updateRiley(e, dt) {
    var p = G.p, pr = e.profile;
    e.animT += dt; e.st -= dt; e.talkT -= dt; e.shieldT -= dt; e.moveT -= dt;
    for (var ck in e.cools) e.cools[ck] -= dt;
    e.losT -= dt;
    if (e.losT <= 0) { e.losT = 0.15; e.los = hasLOS(e.x, e.y, p.x, p.y); }
    var dx = p.x - e.x, dy = p.y - e.y;
    var d = Math.sqrt(dx * dx + dy * dy);

    if (e.state === 'idle') {
      // she waits in her arena until she sees you, from any distance
      if (e.los && !p.dead) { wakeMob(e); rileyIntro(e); }
      return;
    }
    if (e.state === 'die') { if (e.st <= -1.2) e.state = 'dead'; return; }
    if (e.state === 'dead' || p.dead) return; // she waits while you respawn

    RILEY.observe(pr, { dt: dt, los: e.los, dist: d, strafe: G.input.strafe, moving: G.input.moving });

    if (e.state === 'pain') { if (e.st <= 0) e.state = 'chase'; return; }
    if (e.state === 'windup') {
      if (e.st <= 0) { e.state = 'chase'; rileyAttack(e, d); }
      return;
    }

    if (d < 1.3 && e.los && e.cools.melee <= 0) {
      e.state = 'windup'; e.attack = 'melee'; e.st = 0.3;
      return;
    }
    if (e.moveT <= 0) { rileyChoose(e, d, dx, dy); if (e.state === 'windup') return; }

    var toP = Math.atan2(dy, dx), ang = null;
    switch (e.move) {
      case 'backoff': ang = e.moveAng; break;
      case 'close': ang = toP; break;
      case 'flank': case 'shield': ang = toP + e.flankSide * 1.35; break;
      case 'seek': ang = flowHeading(e); if (ang === null) ang = toP; break;
    }
    if (ang === null) return;
    var sp = e.speed * (e.phase >= 3 ? 1.25 : 1) * dt;
    if (!slideMove(e, Math.cos(ang) * sp, Math.sin(ang) * sp, e.radius)) {
      e.flankSide = -e.flankSide;
      e.moveAng += Math.PI / 2;
    }
  }

  // Riley reacts to damage: shield blocks, friendly fire, phase changes, defeat.
  // Returns true if the damage should be ignored.
  function rileyTakeHit(e, src) {
    if (e.shieldT > 0) {
      spawnPart(e.x, e.y, 0.5, ['puffA', 'puffB'], 0.2, { bright: true });
      SND.play('rileyShield', playerDist(e.x, e.y), panOf(e.x, e.y));
      return true;
    }
    // count the hit before the damage lands, so a finishing shot is in her tally
    if (G.firing && e.lastShot !== G.shotId) { e.lastShot = G.shotId; e.profile.hits++; }
    if (src && !src.barrel && src.kind === 'imp') {
      // was it an accident, or did the player get her own imps to turn on her?
      var why = src.target === e ? 'impsTurned' : 'friendlyFire';
      if (!e.profile.said[why]) { e.profile.said[why] = true; rileySay(e, RILEY.line(why, e.profile)); }
    }
    return false;
  }

  function rileyAfterHit(e) {
    if (e.hp <= 0) {
      SND.play('rileyDerez', playerDist(e.x, e.y), panOf(e.x, e.y));
      rileySay(e, RILEY.line('defeated', e.profile));
      rileySettle(e, true);
      G.exitT = 5; // episode ends a few seconds after she taps out
      return;
    }
    if (e.phase < 3 && e.hp < e.maxHp * 0.33) {
      e.phase = 3;
      rileySay(e, RILEY.line('phase3', e.profile));
    } else if (e.phase < 2 && e.hp < e.maxHp * 0.66) {
      e.phase = 2;
      rileySay(e, RILEY.line('phase2', e.profile));
      rileySummon(e); // set piece: phase 2 always opens with backup
    }
  }

  // ---- update ----------------------------------------------------------------

  function update(dt) {
    var p = G.p;
    G.time += dt;
    flashT = Math.max(0, flashT - dt);
    p.dmgFlash = Math.max(0, p.dmgFlash - dt * 0.8);
    p.bonusFlash = Math.max(0, p.bonusFlash - dt * 1.5);
    p.painT = Math.max(0, p.painT - dt);
    p.grinT = Math.max(0, p.grinT - dt);

    for (var i = 0; i < G.msgs.length; i++) G.msgs[i].t -= dt;
    while (G.msgs.length && G.msgs[0].t <= 0) G.msgs.shift();

    if (G.exitT >= 0) {
      G.exitT -= dt;
      if (G.exitT <= 0) {
        interStats = {
          name: G.L.name, time: G.time, par: G.L.par,
          kills: G.stats.kills, totalKills: G.stats.totalKills,
          items: G.stats.items, totalItems: G.stats.totalItems,
          secrets: G.stats.secrets, totalSecrets: G.stats.totalSecrets
        };
        mode = 'inter';
        return;
      }
    }

    updateDoors(dt);
    G.flowT -= dt;
    if (G.flowT <= 0) { G.flowT = 0.25; updateFlow(); }

    if (p.dead) {
      p.deadT += dt;
      p.camZ = Math.max(0.14, 0.5 - p.deadT * 0.5);
    } else {
      // ---- movement
      var run = keys['ShiftLeft'] || keys['ShiftRight'];
      var sp = (run ? 5.0 : 3.2) * dt;
      var mvF = 0, mvS = 0;
      if (keys['KeyW'] || keys['ArrowUp']) mvF += 1;
      if (keys['KeyS'] || keys['ArrowDown']) mvF -= 1;
      if (keys['KeyA']) mvS -= 1;
      if (keys['KeyD']) mvS += 1;
      if (keys['ArrowLeft']) p.ang -= 2.6 * dt;
      if (keys['ArrowRight']) p.ang += 2.6 * dt;
      if (mvF !== 0 && mvS !== 0) { mvF *= 0.7071; mvS *= 0.7071; }
      var c = Math.cos(p.ang), s = Math.sin(p.ang);
      var ox = p.x, oy = p.y;
      if (mvF || mvS) {
        slideMove(p, (c * mvF - s * mvS) * sp, (s * mvF + c * mvS) * sp, 0.28);
        p.bobPhase += dt * (run ? 11 : 8);
        p.bobAmp = Math.min(1, p.bobAmp + dt * 6);
      } else {
        p.bobAmp = Math.max(0, p.bobAmp - dt * 6);
      }
      G.input.strafe = mvS;
      G.input.moving = p.x !== ox || p.y !== oy;
      G.input.vx = (p.x - ox) / dt; G.input.vy = (p.y - oy) / dt;

      // ---- use
      if (keys['KeyE'] || keys['Space']) {
        if (!p.usedHeld) { p.usedHeld = true; useAction(); }
      } else p.usedHeld = false;

      // ---- weapon switching
      if (p.nextWeapon && p.raiseT <= 0 && !(p.lowerT > 0)) { p.lowerT = 0.15; }
      if (p.lowerT > 0) {
        p.lowerT -= dt;
        if (p.lowerT <= 0) { p.weapon = p.nextWeapon; p.nextWeapon = null; p.raiseT = 0.15; }
      }
      if (p.raiseT > 0) p.raiseT -= dt;

      // ---- firing
      p.cool -= dt;
      p.fireT += dt;
      var wep = WEAPONS[p.weapon];
      if (fireHeld && p.cool <= 0 && p.raiseT <= 0 && p.lowerT <= 0 && !p.nextWeapon && G.exitT < 0) {
        var canFire = !wep.ammo || p.ammo[wep.ammo] > 0;
        if (!canFire) {
          SND.play('noAmmo');
          // classic auto-switch when dry
          if (p.weapon === 'shotgun') switchWeapon('pistol');
          else if (p.weapon === 'pistol') switchWeapon('fist');
          p.cool = 0.3;
        } else {
          if (wep.ammo) p.ammo[wep.ammo]--;
          p.cool = wep.rate;
          p.fireT = 0;
          SND.play(wep.sound);
          if (p.weapon === 'shotgun') SND.play('pump');
          if (!wep.melee) flashT = 0.09;
          // Riley counts every shot (and, in rileyTakeHit, each one that lands)
          if (rileyActive(G.boss)) RILEY.noteShot(G.boss.profile, p.weapon, playerDist(G.boss.x, G.boss.y));
          G.shotId++;
          G.firing = true;
          if (wep.melee) {
            fireHitscan(p.ang, wep.dmgMin, wep.dmgMax, true);
          } else {
            for (var pl = 0; pl < wep.pellets; pl++) {
              fireHitscan(p.ang + (rnd() - 0.5) * 2 * wep.spread, wep.dmgMin, wep.dmgMax, false);
            }
          }
          G.firing = false;
          if (!wep.melee) makeNoise(p.x, p.y, 14); // fists are silent
        }
      }

      // ---- pickups
      for (var e2, j = 0; j < G.ents.length; j++) {
        e2 = G.ents[j];
        if (e2.kind !== 'pickup' || e2.gone) continue;
        if (dist2(e2.x, e2.y, p.x, p.y) < 0.45) tryPickup(e2);
      }

      // ---- secret floors
      var pcx = Math.floor(p.x), pcy = Math.floor(p.y);
      for (var sIdx = 0; sIdx < G.secrets.length; sIdx++) {
        var sec = G.secrets[sIdx];
        if (!sec.found && sec.x === pcx && sec.y === pcy) {
          sec.found = true;
          G.stats.secrets++;
          SND.play('secret');
          message('YOU FOUND A SECRET AREA!');
        }
      }
    }

    // ---- entities
    for (var k = G.ents.length - 1; k >= 0; k--) {
      var e = G.ents[k];
      if (e.gone) { G.ents.splice(k, 1); continue; }
      if (e.kind === 'torch') { e.animT += dt; continue; }
      if (e.kind === 'part') {
        e.life -= dt;
        e.z += (e.vz || 0) * dt;
        if (e.life <= 0) G.ents.splice(k, 1);
        continue;
      }
      if (e.kind === 'proj') {
        e.animT += dt;
        var steps = 3;
        for (var st2 = 0; st2 < steps; st2++) {
          e.x += e.vx * dt / steps; e.y += e.vy * dt / steps;
          var victim = solidCell(Math.floor(e.x), Math.floor(e.y)) ? 'wall' : projectileVictim(e);
          if (!victim && !p.dead && dist2(e.x, e.y, p.x, p.y) < 0.2) victim = 'player';
          if (!victim) continue;
          if (victim === 'player') {
            hurtPlayer(e.dmg | 0);
            SND.play('fireExplode', 0);
          } else {
            if (victim !== 'wall') damageMob(victim, e.dmg | 0, e.owner);
            spawnPart(e.x - e.vx * dt / steps, e.y - e.vy * dt / steps, e.z, e.green ? ['greenballB', 'greenballA'] : ['boom1', 'boom1'], 0.2, { h: 0.4, w: 0.4, bright: true });
            SND.play('fireExplode', playerDist(e.x, e.y), panOf(e.x, e.y));
          }
          G.ents.splice(k, 1);
          break;
        }
        continue;
      }
      if (e.barrel) {
        if (e.state === 'boom') {
          e.st -= dt;
          if (e.st <= 0) explodeBarrel(e);
        }
        continue;
      }
      if (e.kind === 'riley') updateRiley(e, dt);
      else if (e.mob) updateMob(e, dt);
    }
  }

  // A fireball can hit any demon or barrel in its path except the one that
  // threw it. Like the classics, it passes through demons of the same kind.
  function projectileVictim(pr) {
    for (var i = 0; i < G.ents.length; i++) {
      var m = G.ents[i];
      if (!m.mob || m === pr.owner || !alive(m)) continue;
      if (!m.barrel && pr.owner && m.kind === pr.owner.kind) continue;
      var r = m.radius + 0.1;
      if (dist2(pr.x, pr.y, m.x, m.y) < r * r) return m;
    }
    return null;
  }

  function tryPickup(e) {
    var p = G.p, it = ITEMS[e.item];
    var took = true;
    switch (e.item) {
      case 'h': if (p.hp >= 100) took = false; else p.hp = Math.min(100, p.hp + 10); break;
      case '+': if (p.hp >= 100) took = false; else p.hp = Math.min(100, p.hp + 25); break;
      case 'A': if (p.armor >= 100) took = false; else { p.armor = 100; p.grinT = 1; } break;
      case 'b': if (p.ammo.bullets >= 200) took = false; else p.ammo.bullets = Math.min(200, p.ammo.bullets + 10); break;
      case 'a': if (p.ammo.shells >= 50) took = false; else p.ammo.shells = Math.min(50, p.ammo.shells + 4); break;
      case '2':
        p.weapons.shotgun = true;
        p.ammo.shells = Math.min(50, p.ammo.shells + 8);
        p.grinT = 1.2;
        if (p.weapon !== 'shotgun') switchWeapon('shotgun');
        break;
      case 'r': p.keys.red = true; p.grinT = 1; break;
      case 'u': p.keys.blue = true; p.grinT = 1; break;
      case 'P': p.hp = Math.min(200, p.hp + 100); p.grinT = 1.2; break;
    }
    if (!took) return;
    e.gone = true;
    G.stats.items++;
    p.bonusFlash = Math.min(0.35, p.bonusFlash + 0.22);
    SND.play(it.snd);
    message(it.msg);
  }

  // ---- rendering: world ------------------------------------------------------

  function renderWorld() {
    var p = G.p;
    var dirX = Math.cos(p.ang), dirY = Math.sin(p.ang);
    var planeX = -dirY * 0.66, planeY = dirX * 0.66;
    var camZ = p.camZ;
    var mw = G.mw, cells = G.cells, seen = G.seen;
    var floorTex = G.floorTex.data, ceilTex = G.ceilTex.data;

    // floors and ceilings
    var rd0x = dirX - planeX, rd0y = dirY - planeY;
    var rd1x = dirX + planeX, rd1y = dirY + planeY;
    for (var y = 0; y < VH; y++) {
      var isFloor = y > HORIZON;
      var pRow = isFloor ? (y - HORIZON) : (HORIZON - y);
      if (pRow === 0) { // horizon line: just dark
        for (var hx = 0; hx < W; hx++) fb[y * W + hx] = 0xff070707;
        continue;
      }
      var rowDist = (isFloor ? camZ : (1 - camZ)) * VH / pRow;
      var fx = p.x + rowDist * rd0x;
      var fy = p.y + rowDist * rd0y;
      var fsx = rowDist * (rd1x - rd0x) / W;
      var fsy = rowDist * (rd1y - rd0y) / W;
      var fi = lightFi(rowDist);
      var tex = isFloor ? floorTex : ceilTex;
      var base = y * W;
      for (var x = 0; x < W; x++) {
        var tx = ((fx * TS) | 0) & 63, ty = ((fy * TS) | 0) & 63;
        fb[base + x] = shade(tex[ty * TS + tx], fi);
        fx += fsx; fy += fsy;
      }
    }

    // walls
    for (var col = 0; col < W; col++) {
      var camX = 2 * col / W - 1;
      var rdx = dirX + planeX * camX;
      var rdy = dirY + planeY * camX;
      var mapX = Math.floor(p.x), mapY = Math.floor(p.y);
      var ddx = Math.abs(1 / rdx), ddy = Math.abs(1 / rdy);
      var stepX, stepY, sideX, sideY;
      if (rdx < 0) { stepX = -1; sideX = (p.x - mapX) * ddx; } else { stepX = 1; sideX = (mapX + 1 - p.x) * ddx; }
      if (rdy < 0) { stepY = -1; sideY = (p.y - mapY) * ddy; } else { stepY = 1; sideY = (mapY + 1 - p.y) * ddy; }
      var side = 0, perp = 40, wallX = 0, texId = 1;
      for (var it = 0; it < 96; it++) {
        if (sideX < sideY) { sideX += ddx; mapX += stepX; side = 0; }
        else { sideY += ddy; mapY += stepY; side = 1; }
        if (mapX < 0 || mapY < 0 || mapX >= G.mw || mapY >= G.mh) break;
        seen[mapY * mw + mapX] = 1;
        var cid = cells[mapY * mw + mapX];
        if (cid === 0) continue;
        if (DOOR_IDS[cid]) {
          var dr = G.doors[mapX + ',' + mapY];
          var o = dr ? dr.open : 0;
          if (side === 0) {
            var t = (mapX + 0.5 - p.x) / rdx;
            var yAt = p.y + t * rdy;
            if (yAt >= mapY && yAt < mapY + 1) {
              var u = yAt - mapY;
              if (u >= o) { perp = t; wallX = u - o; texId = cid; break; }
            }
          } else {
            var t2 = (mapY + 0.5 - p.y) / rdy;
            var xAt = p.x + t2 * rdx;
            if (xAt >= mapX && xAt < mapX + 1) {
              var u2 = xAt - mapX;
              if (u2 >= o) { perp = t2; wallX = u2 - o; texId = cid; break; }
            }
          }
          continue;
        }
        // solid wall
        if (side === 0) {
          perp = (mapX - p.x + (1 - stepX) / 2) / rdx;
          wallX = p.y + perp * rdy; wallX -= Math.floor(wallX);
          if (rdx > 0) wallX = 1 - wallX;
        } else {
          perp = (mapY - p.y + (1 - stepY) / 2) / rdy;
          wallX = p.x + perp * rdx; wallX -= Math.floor(wallX);
          if (rdy < 0) wallX = 1 - wallX;
        }
        texId = cid;
        break;
      }
      if (perp < 0.01) perp = 0.01;
      zbuf[col] = perp;

      var tex = ART.tex[texId].data;
      var lineH = VH / perp;
      var top = HORIZON - lineH * (1 - camZ);
      var bot = HORIZON + lineH * camZ;
      var y0 = Math.max(0, Math.ceil(top));
      var y1 = Math.min(VH - 1, Math.floor(bot));
      var texX = (wallX * TS) | 0;
      if (texX < 0) texX = 0; if (texX > 63) texX = 63;
      var stepT = TS / lineH;
      var texPos = (y0 - top) * stepT;
      var fi = lightFi(perp);
      if (side === 1) fi = (fi * 210) >> 8;
      for (var yy = y0; yy <= y1; yy++) {
        var ty2 = texPos | 0;
        if (ty2 > 63) ty2 = 63;
        texPos += stepT;
        fb[yy * W + col] = shade(tex[ty2 * TS + texX], fi);
      }
    }

    // sprites
    var invDet = 1 / (planeX * dirY - dirX * planeY);
    var list = [];
    for (var i2 = 0; i2 < G.ents.length; i2++) {
      var e = G.ents[i2];
      var img = entImage(e);
      if (!img) continue;
      var d2 = dist2(e.x, e.y, p.x, p.y);
      if (d2 > 1600) continue;
      list.push({ e: e, img: img, d2: d2 });
    }
    list.sort(function (a, b) { return b.d2 - a.d2; });

    for (var li = 0; li < list.length; li++) {
      var e3 = list[li].e, img2 = list[li].img;
      var sdx = e3.x - p.x, sdy = e3.y - p.y;
      var tX = invDet * (dirY * sdx - dirX * sdy);
      var tY = invDet * (-planeY * sdx + planeX * sdy);
      if (tY <= 0.08) continue;
      var sx = (W / 2) * (1 + tX / tY);
      var scaleH = VH / tY;
      var zBase = e3.z || 0;
      var botY = HORIZON + (camZ - zBase) * scaleH;
      var hPix = scaleH * e3.h;
      var topY = botY - hPix;
      var wPix = scaleH * e3.w;
      var x0 = Math.ceil(sx - wPix / 2), x1 = Math.floor(sx + wPix / 2);
      if (x1 < 0 || x0 >= W) continue;
      var fi2 = e3.bright ? 255 : lightFi(tY);
      var iw = img2.w, ih = img2.h, idata = img2.data;
      var yy0 = Math.max(0, Math.ceil(topY));
      var yy1 = Math.min(VH - 1, Math.floor(botY) - 1);
      for (var xx = Math.max(0, x0); xx <= Math.min(W - 1, x1); xx++) {
        if (tY >= zbuf[xx]) continue;
        var texXf = ((xx - (sx - wPix / 2)) / wPix) * iw | 0;
        if (texXf < 0) texXf = 0; if (texXf >= iw) texXf = iw - 1;
        for (var yy2 = yy0; yy2 <= yy1; yy2++) {
          var texYf = ((yy2 - topY) / hPix) * ih | 0;
          if (texYf < 0) texYf = 0; if (texYf >= ih) texYf = ih - 1;
          var c2 = idata[texYf * iw + texXf];
          if (c2 === 0) continue;
          fb[yy2 * W + xx] = shade(c2, fi2);
        }
      }
    }

    ctx.putImageData(viewImg, 0, 0);
  }

  function entImage(e) {
    if (e.kind === 'torch') return (e.animT % 0.3 < 0.15) ? ART.things.torchA : ART.things.torchB;
    if (e.kind === 'pickup') return ART.things[ITEMS[e.item].img];
    if (e.kind === 'proj') {
      var fr = e.animT % 0.2 < 0.1;
      return e.green ? (fr ? ART.things.greenballA : ART.things.greenballB)
        : (fr ? ART.things.fireballA : ART.things.fireballB);
    }
    if (e.kind === 'part') {
      var idx = Math.min(e.frames.length - 1, ((1 - e.life / e.maxLife) * e.frames.length) | 0);
      return ART.things[e.frames[idx]];
    }
    if (e.barrel) return e.dead ? null : ART.things.barrel;
    if (e.mob) {
      var s = ART.mobs[e.kind];
      if (e.shieldT > 0 && (e.state === 'chase' || e.state === 'pain')) return s.shield;
      switch (e.state) {
        case 'idle': return s.walkA;
        case 'chase': return (e.animT % 0.5 < 0.25) ? s.walkA : s.walkB;
        case 'flee': return (e.animT % 0.3 < 0.15) ? s.walkA : s.walkB;
        case 'windup': return s.attack;
        case 'pain': return s.pain;
        case 'die': return e.st > -0.25 ? s.die1 : s.die2;
        case 'dead': return s.corpse;
      }
    }
    return null;
  }

  // ---- rendering: weapon + HUD -----------------------------------------------

  function renderWeapon() {
    var p = G.p;
    if (p.dead) return;
    var wep = WEAPONS[p.weapon];
    var img = ART.guns[wep.art].canvas;
    var sc = wep.sc;
    var gw = img.width * sc, gh = img.height * sc;
    var bobX = Math.sin(p.bobPhase) * 7 * p.bobAmp;
    var bobY = Math.abs(Math.cos(p.bobPhase)) * 5 * p.bobAmp;
    var gx = (W - gw) / 2 + bobX;
    var gy = VH - gh + 10 + bobY;
    // raise / lower slide
    if (p.lowerT > 0) gy += (1 - p.lowerT / 0.15) * gh;
    else if (p.raiseT > 0) gy += (p.raiseT / 0.15) * gh;
    // recoil / punch
    var ft = p.fireT;
    if (ft < 0.15) {
      if (wep.melee) gy -= Math.sin(ft / 0.15 * Math.PI) * 26;
      else gy += Math.sin(ft / 0.15 * Math.PI) * 9;
    }
    // shotgun pump slide
    if (p.weapon === 'shotgun' && ft > 0.35 && ft < 0.75) {
      gy += Math.sin((ft - 0.35) / 0.4 * Math.PI) * 22;
      gx += Math.sin((ft - 0.35) / 0.4 * Math.PI * 2) * 4;
    }
    ctx.imageSmoothingEnabled = false;
    if (ft < 0.09 && !wep.melee) {
      var fl = ART.guns.flash.canvas;
      ctx.drawImage(fl, gx + gw / 2 - 22, gy - 26, 44, 44);
    }
    ctx.drawImage(img, gx, gy, gw, gh);
  }

  function faceImage() {
    var p = G.p;
    if (p.dead) return ART.faces.dead;
    if (p.grinT > 0) return ART.faces.grin;
    if (p.painT > 0.25) return ART.faces.pain;
    if (p.hp >= 80) return ART.faces.ok;
    if (p.hp >= 55) return ART.faces.hurt1;
    if (p.hp >= 30) return ART.faces.hurt2;
    return ART.faces.hurt3;
  }

  function renderHUD() {
    var p = G.p;
    // status bar
    ctx.fillStyle = '#3a352e';
    ctx.fillRect(0, VH, W, HUD_H);
    ctx.fillStyle = '#14110d';
    ctx.fillRect(0, VH, W, 2);
    ctx.fillStyle = '#57514a';
    ctx.fillRect(0, VH + 2, W, 1);
    // dividers
    ctx.fillStyle = '#24211c';
    [46, 116, 142, 178, 230, 250].forEach(function (dx) {
      ctx.fillRect(dx, VH + 4, 1, HUD_H - 8);
    });

    var wep = WEAPONS[p.weapon];
    var ammoStr = wep.ammo ? String(p.ammo[wep.ammo]) : '--';
    ART.drawText(ctx, 'AMMO', 8, VH + 5, { scale: 1, color: '#8a8478' });
    ART.drawText(ctx, ammoStr, 40, VH + 12, { scale: 3, color: '#e03828', shadow: '#401008', right: true });

    ART.drawText(ctx, 'HEALTH', 54, VH + 5, { scale: 1, color: '#8a8478' });
    ART.drawText(ctx, p.hp + '%', 108, VH + 12, { scale: 3, color: '#e03828', shadow: '#401008', right: true });

    // face
    var f = faceImage();
    ctx.drawImage(f.canvas, 160 - 12, VH + 3);

    ART.drawText(ctx, 'ARMOR', 184, VH + 5, { scale: 1, color: '#8a8478' });
    ART.drawText(ctx, p.armor + '%', 226, VH + 12, { scale: 3, color: '#e03828', shadow: '#401008', right: true });

    // keys
    if (p.keys.red) ctx.drawImage(ART.things.keyRed.canvas, 236, VH + 5);
    if (p.keys.blue) ctx.drawImage(ART.things.keyBlue.canvas, 236, VH + 18);

    // ammo table
    ART.drawText(ctx, 'BULL ' + p.ammo.bullets + '/200', 254, VH + 8, { scale: 1, color: '#c8c0b0' });
    ART.drawText(ctx, 'SHEL ' + p.ammo.shells + '/50', 254, VH + 19, { scale: 1, color: '#c8c0b0' });

    // messages
    for (var i = 0; i < G.msgs.length; i++) {
      ART.drawText(ctx, G.msgs[i].text, 4, 4 + i * 8, { scale: 1, color: G.msgs[i].color || '#f0d848', shadow: true });
    }

    // boss bar
    var b = G.boss;
    if (b && b.state !== 'idle' && b.state !== 'dead') {
      var bw = 140, bx = (W - bw) / 2, by = VH - 12;
      ART.drawText(ctx, 'RILEY', W / 2, by - 8, { scale: 1, color: '#6fe0ec', shadow: true, center: true });
      ctx.fillStyle = '#06141c';
      ctx.fillRect(bx - 1, by - 1, bw + 2, 6);
      ctx.fillStyle = b.shieldT > 0 ? '#ffd23e' : '#3fd8c8';
      ctx.fillRect(bx, by, Math.max(0, b.hp / b.maxHp) * bw, 4);
      ctx.fillStyle = '#06141c'; // phase marks
      ctx.fillRect(bx + bw * 0.33, by, 1, 4);
      ctx.fillRect(bx + bw * 0.66, by, 1, 4);
    }

    // overlays
    if (p.dmgFlash > 0) {
      ctx.fillStyle = 'rgba(255,20,10,' + p.dmgFlash.toFixed(3) + ')';
      ctx.fillRect(0, 0, W, VH);
    }
    if (p.bonusFlash > 0) {
      ctx.fillStyle = 'rgba(255,220,80,' + p.bonusFlash.toFixed(3) + ')';
      ctx.fillRect(0, 0, W, VH);
    }
    if (p.dead && p.deadT > 1) {
      ART.drawText(ctx, 'YOU DIED', W / 2, 60, { scale: 3, color: '#e03828', shadow: true, center: true });
      ART.drawText(ctx, 'PRESS ENTER OR CLICK TO TRY AGAIN', W / 2, 86, { scale: 1, color: '#e8e0c8', shadow: true, center: true });
    }
    if (!locked && !p.dead && G.time > 0.5) {
      ART.drawText(ctx, 'PAUSED - CLICK TO PLAY', W / 2, 78, { scale: 1, color: '#f0d848', shadow: true, center: true });
    }

    if (mapOpen) renderAutomap();
  }

  function renderAutomap() {
    ctx.fillStyle = 'rgba(0,0,0,0.72)';
    ctx.fillRect(0, 0, W, VH);
    var sc = Math.min((W - 24) / G.mw, (VH - 24) / G.mh);
    var ox = (W - G.mw * sc) / 2, oy = (VH - G.mh * sc) / 2;
    for (var y = 0; y < G.mh; y++) {
      for (var x = 0; x < G.mw; x++) {
        if (!G.seen[y * G.mw + x]) continue;
        var c = G.cells[y * G.mw + x];
        if (c === 0) continue;
        var col = '#8a8478';
        if (c === 6 || c === 11) col = '#c8a030';
        else if (c === 7) col = '#e03828';
        else if (c === 8) col = '#3868e0';
        else if (c === 9 || c === 10) col = '#38c048';
        ctx.fillStyle = col;
        ctx.fillRect(ox + x * sc, oy + y * sc, Math.max(1, sc - 0.4), Math.max(1, sc - 0.4));
      }
    }
    // player arrow
    var p = G.p;
    var px = ox + p.x * sc, py = oy + p.y * sc;
    ctx.strokeStyle = '#f0f0e0';
    ctx.beginPath();
    ctx.moveTo(px - Math.cos(p.ang) * 3, py - Math.sin(p.ang) * 3);
    ctx.lineTo(px + Math.cos(p.ang) * 4, py + Math.sin(p.ang) * 4);
    ctx.stroke();
    ART.drawText(ctx, G.L.name, W / 2, VH - 12, { scale: 1, color: '#f0d848', shadow: true, center: true });
  }

  // ---- rendering: screens ----------------------------------------------------

  function fireLine(y, t, seedRow) {
    // animated ember strip for the title screen
    for (var x = 0; x < W; x += 2) {
      var n = Math.sin(x * 0.07 + t * 3 + seedRow) + Math.sin(x * 0.13 - t * 2.2);
      var h2 = 6 + n * 4;
      ctx.fillStyle = n > 0.7 ? '#ffd23e' : n > -0.3 ? '#ff7a18' : '#a83010';
      ctx.fillRect(x, y - h2, 2, h2 + 4);
    }
  }

  function renderTitle(t) {
    ctx.fillStyle = '#080604';
    ctx.fillRect(0, 0, W, H);
    fireLine(H - 8, t, 0);
    fireLine(H - 4, t * 1.3, 2);

    var pulse = (Math.sin(t * 2) + 1) / 2;
    ART.drawText(ctx, 'FIREBIRD', W / 2, 34, { scale: 5, color: '#e03828', shadow: '#401008', center: true });
    ART.drawText(ctx, 'FIREBIRD', W / 2 - 1, 33, { scale: 5, color: '#ff9a28', center: true });
    ART.drawText(ctx, '3D', W / 2, 66, { scale: 7, color: '#ffd23e', shadow: '#803008', center: true });

    ART.drawText(ctx, 'EPISODE ONE: KNEE-DEEP IN THE ASHES', W / 2, 108, { scale: 1, color: '#c8c0b0', center: true });
    if (pulse > 0.25) ART.drawText(ctx, 'CLICK OR PRESS ENTER TO RISE', W / 2, 126, { scale: 1, color: '#f0d848', shadow: true, center: true });

    ART.drawText(ctx, 'WASD MOVE   MOUSE TURN   CLICK FIRE', W / 2, 148, { scale: 1, color: '#8a8478', center: true });
    ART.drawText(ctx, 'E OR SPACE USE   1-3 WEAPONS   TAB MAP   M MUSIC', W / 2, 158, { scale: 1, color: '#8a8478', center: true });
    ART.drawText(ctx, 'A NIX GAMES PRODUCTION BY PHOENIX', W / 2, 180, { scale: 1, color: '#6a655c', center: true });
  }

  function fmtTime(t) {
    t = t | 0;
    var m = (t / 60) | 0, s = t % 60;
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  function renderInter(t) {
    ctx.fillStyle = '#0a0806';
    ctx.fillRect(0, 0, W, H);
    fireLine(H - 6, t, 1);
    var st = interStats;
    ART.drawText(ctx, st.name, W / 2, 22, { scale: 2, color: '#ff9a28', shadow: true, center: true });
    ART.drawText(ctx, 'FINISHED!', W / 2, 42, { scale: 2, color: '#e8e0c8', shadow: true, center: true });

    // tally rolls up over time
    var roll = clamp(t / 1.2, 0, 1);
    function pct(a, b) { return b ? Math.round(a / b * 100 * roll) : 100; }
    ART.drawText(ctx, 'KILLS', 90, 74, { scale: 2, color: '#c8c0b0' });
    ART.drawText(ctx, pct(st.kills, st.totalKills) + '%', 240, 74, { scale: 2, color: '#e03828', right: true });
    ART.drawText(ctx, 'ITEMS', 90, 96, { scale: 2, color: '#c8c0b0' });
    ART.drawText(ctx, pct(st.items, st.totalItems) + '%', 240, 96, { scale: 2, color: '#e03828', right: true });
    ART.drawText(ctx, 'SECRETS', 90, 118, { scale: 2, color: '#c8c0b0' });
    ART.drawText(ctx, pct(st.secrets, st.totalSecrets) + '%', 240, 118, { scale: 2, color: '#e03828', right: true });
    ART.drawText(ctx, 'TIME ' + fmtTime(st.time), 90, 140, { scale: 2, color: '#c8c0b0' });
    ART.drawText(ctx, 'PAR ' + fmtTime(st.par), 240, 140, { scale: 2, color: '#c8c0b0', right: true });

    if (t > 1.4 && (t % 1) < 0.6) {
      var next = levelIndex + 1 < LEVELS.length ? 'PRESS ENTER FOR ' + LEVELS[levelIndex + 1].name.split(':')[0] : 'PRESS ENTER';
      ART.drawText(ctx, next, W / 2, 170, { scale: 1, color: '#f0d848', shadow: true, center: true });
    }
  }

  function renderVictory(t) {
    ctx.fillStyle = '#080604';
    ctx.fillRect(0, 0, W, H);
    fireLine(H - 8, t, 0);
    fireLine(H - 4, t * 1.3, 2);
    ART.drawText(ctx, 'YOU WIN!', W / 2, 30, { scale: 4, color: '#ffd23e', shadow: '#803008', center: true });
    var lines = [
      'THE DEMON THRONE LIES IN ASHES,',
      'AND RILEY TAPS OUT WITH A GRIN:',
      '"SAME TIME TOMORROW? I\'LL BE READY."',
      '',
      'THE FIREBIRD CANNOT BE KILLED.',
      'IT ONLY BURNS BRIGHTER.',
      '',
      'THANKS FOR PLAYING, WARRIOR.'
    ];
    for (var i = 0; i < lines.length; i++) {
      ART.drawText(ctx, lines[i], W / 2, 74 + i * 10, { scale: 1, color: '#e8e0c8', center: true });
    }
    if ((t % 1) < 0.6) ART.drawText(ctx, 'PRESS ENTER FOR THE TITLE SCREEN', W / 2, 170, { scale: 1, color: '#f0d848', shadow: true, center: true });
  }

  // ---- main loop -------------------------------------------------------------

  var last = 0, modeT = 0, lastMode = '';

  function frame(now) {
    var dt = Math.min(0.05, (now - last) / 1000 || 0.016);
    last = now;
    if (mode !== lastMode) { modeT = 0; lastMode = mode; }
    modeT += dt;

    if (mode === 'game' && G) {
      var paused = !locked && !G.p.dead && !AUTO;
      if (!paused) update(dt);
      renderWorld();
      renderWeapon();
      renderHUD();
    } else if (mode === 'title') {
      renderTitle(modeT);
    } else if (mode === 'inter') {
      renderInter(modeT);
    } else if (mode === 'victory') {
      renderVictory(modeT);
    }

    sctx.imageSmoothingEnabled = false;
    sctx.drawImage(low, 0, 0, screenC.width, screenC.height);
    requestAnimationFrame(frame);
  }

  // test hooks: ?autostart drops straight into a level (used for screenshots),
  // with optional &level=N &turn=degrees &tp=x,y
  var AUTO = /autostart/.test(location.search);
  if (AUTO) {
    var lv = /level=(\d)/.exec(location.search);
    startGame(lv ? +lv[1] : 0);
    G.p.raiseT = 0;
    var turn = /turn=(-?\d+)/.exec(location.search);
    if (turn) G.p.ang += +turn[1] * Math.PI / 180;
    var tp = /tp=([\d.]+),([\d.]+)/.exec(location.search);
    if (tp) { G.p.x = +tp[1]; G.p.y = +tp[2]; }
    if (/autofire/.test(location.search)) fireHeld = true;
    if (/useloop/.test(location.search)) {
      setInterval(function () { if (G && mode === 'game' && !G.p.dead) useAction(); }, 700);
    }
    if (/opendoors/.test(location.search)) {
      for (var dk in G.doors) { G.doors[dk].open = 1; G.doors[dk].state = 'open'; G.doors[dk].timer = 9999; }
    }
    // &debug exposes the game to scripted tests (tests/headless.test.js)
    if (/debug/.test(location.search)) {
      window.FIREBIRD = {
        state: function () { return G; },
        mode: function () { return mode; },
        update: update,
        startLevel: startLevel,
        renderWorld: function () { renderWorld(); return { w: W, h: VH, pixels: fb }; },
        keys: keys,
        setFire: function (on) { fireHeld = on; }
      };
    }
  }

  requestAnimationFrame(frame);
})();
