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

  function clearInput() {
    for (var k in keys) keys[k] = false;
    fireHeld = false;
  }

  document.addEventListener('keydown', function (e) {
    if (e.code === 'Tab' || e.code === 'Space' || e.code.slice(0, 5) === 'Arrow') e.preventDefault();
    SND.init();
    // menus get the keyboard first (and may use key repeat)
    if (MENU.isOpen()) { SND.startMusic(); MENU.key(e.code); return; }
    if (e.repeat) return;
    if (e.code === 'Escape' && mode === 'game' && G && G.started && !locked) { openPause(); return; }
    keys[e.code] = true;
    if (e.code === 'Enter' || e.code === 'NumpadEnter' || (e.code === 'Space' && mode !== 'game')) { onEnter(); return; }
    if (mode !== 'game' || !G) return;
    if (e.code === 'Tab') { mapOpen = !mapOpen; G.usedMap = true; }
    if (e.code === 'KeyM') {
      var on = SND.toggleMusic();
      message('MUSIC ' + (on ? 'ON' : 'OFF'));
    }
    if (e.code === 'ControlLeft' || e.code === 'ControlRight') fireHeld = true;
    if (e.code === 'Digit1') switchWeapon('fist');
    if (e.code === 'Digit2') switchWeapon('pistol');
    if (e.code === 'Digit3') switchWeapon('shotgun');
    if (e.code === 'KeyQ') quickSwitch();
  });
  document.addEventListener('keyup', function (e) {
    keys[e.code] = false;
    if (e.code === 'ControlLeft' || e.code === 'ControlRight') fireHeld = false;
  });
  window.addEventListener('blur', clearInput);

  var locked = false, lockFailed = false;
  document.addEventListener('pointerlockchange', function () {
    locked = document.pointerLockElement === screenC;
    clearInput();
    if (locked) { lockFailed = false; if (mode === 'game') MENU.close(); }
    // losing the mouse mid-level (Esc, alt-tab) pauses the game
    else if (mode === 'game' && G && G.started && !AUTO) openPause();
  });
  document.addEventListener('pointerlockerror', function () { lockFailed = true; });

  // screen pixel -> 320x200 game pixel
  function toLow(e) {
    var r = screenC.getBoundingClientRect();
    return { x: (e.clientX - r.left) / r.width * W, y: (e.clientY - r.top) / r.height * H };
  }

  document.addEventListener('mousemove', function (e) {
    if (locked && mode === 'game' && G && !G.p.dead) {
      G.p.ang += e.movementX * 0.00044 * SETTINGS.v.sens;
      return;
    }
    if (MENU.isOpen()) {
      var pt = toLow(e);
      setCursor(MENU.pointer(pt.x, pt.y) ? 'pointer' : 'default');
    }
  });
  screenC.addEventListener('mousedown', function (e) {
    SND.init(); SND.startMusic();
    if (MENU.isOpen()) {
      var pt = toLow(e);
      if (e.button === 0) MENU.click(pt.x, pt.y);
      return;
    }
    if (mode === 'game' && G) {
      if (!locked) { beginPlay(); return; }
      if (G.p.dead) { onEnter(); return; } // never carry this click into the new life as a shot
      if (e.button === 0) fireHeld = true;
      return;
    }
    onEnter();
  });
  document.addEventListener('mouseup', function (e) {
    if (e.button === 0) fireHeld = false;
  });
  screenC.addEventListener('wheel', function (e) {
    if (mode === 'game' && locked && G && !G.p.dead) {
      e.preventDefault();
      if (Math.abs(e.deltaY) > 0) cycleWeapon(e.deltaY > 0 ? 1 : -1);
    }
  }, { passive: false });
  screenC.addEventListener('contextmenu', function (e) { e.preventDefault(); });

  var cursorNow = '';
  function setCursor(c) {
    if (c !== cursorNow && screenC.style) { screenC.style.cursor = c; cursorNow = c; }
  }

  function requestLock() {
    try {
      var r = screenC.requestPointerLock();
      if (r && r.catch) r.catch(function () { lockFailed = true; });
    } catch (e) { lockFailed = true; }
  }

  function releaseLock() {
    try { if (document.exitPointerLock) document.exitPointerLock(); } catch (e) { }
  }

  // leave the level card / pause and grab the mouse
  function beginPlay() {
    MENU.close();
    requestLock();
  }

  function onEnter() {
    SND.init(); SND.startMusic();
    if (mode === 'inter') {
      // the first press finishes the tally, the second moves on
      if (!interDone()) { interSkip = true; return; }
      if (levelIndex + 1 >= LEVELS.length) { mode = 'victory'; SND.play('orb'); }
      else startLevel(levelIndex + 1, true);
    }
    else if (mode === 'victory') { if (modeT > 1) toTitle(); }
    else if (mode === 'game' && G) {
      if (G.p.dead) { if (G.p.deadT > 1.2) retryLevel(); }
      else if (!locked) beginPlay();
    }
  }

  // ---- weapons ---------------------------------------------------------------

  var WEAPONS = {
    fist: { ammo: null, rate: 0.5, melee: true, dmgMin: 8, dmgMax: 24, art: 'fist', sound: 'punch', sc: 3 },
    pistol: { ammo: 'bullets', rate: 0.42, pellets: 1, spread: 0.025, dmgMin: 5, dmgMax: 15, art: 'pistol', sound: 'pistol', sc: 2, knock: 0.03, shake: 0.6 },
    shotgun: { ammo: 'shells', rate: 0.95, pellets: 7, spread: 0.10, dmgMin: 5, dmgMax: 15, art: 'shotgun', sound: 'shotgun', sc: 2, knock: 0.045, shake: 2.2 }
  };

  var WEAPON_ORDER = ['fist', 'pistol', 'shotgun'];
  var AMMO_NAMES = { bullets: 'BULLETS', shells: 'SHELLS' };

  function hasAmmo(p, name) {
    var w = WEAPONS[name];
    return !w.ammo || p.ammo[w.ammo] > 0;
  }

  // the strongest weapon you own that can still fire
  function bestWeapon(p) {
    for (var i = WEAPON_ORDER.length - 1; i >= 0; i--) {
      var n = WEAPON_ORDER[i];
      if (p.weapons[n] && hasAmmo(p, n)) return n;
    }
    return 'fist';
  }

  // Returns true if a switch was started. Says why when it can't (unless quiet).
  function switchWeapon(name, quiet) {
    if (mode !== 'game' || !G || G.p.dead) return false;
    var p = G.p;
    if (!p.weapons[name]) {
      if (!quiet) message('YOU HAVEN\'T FOUND THE ' + name.toUpperCase() + ' YET.');
      return false;
    }
    if (!hasAmmo(p, name)) {
      if (!quiet) { message('NO ' + AMMO_NAMES[WEAPONS[name].ammo] + ' FOR THE ' + name.toUpperCase() + '.'); SND.play('noAmmo'); }
      return false;
    }
    if (name === p.weapon) {
      if (p.nextWeapon && !(p.lowerT > 0)) p.nextWeapon = null; // changed your mind in time
      return false;
    }
    if (name === p.nextWeapon) return false;
    p.prevWeapon = p.weapon;
    p.nextWeapon = name;
    p.autoFist = false;
    return true;
  }

  // mouse wheel: step through the weapons you own that have ammo
  function cycleWeapon(dir) {
    if (!G) return;
    var p = G.p, cur = WEAPON_ORDER.indexOf(p.nextWeapon || p.weapon);
    for (var k = 1; k < WEAPON_ORDER.length; k++) {
      var n = WEAPON_ORDER[(cur + dir * k + WEAPON_ORDER.length * 2) % WEAPON_ORDER.length];
      if (p.weapons[n] && hasAmmo(p, n)) { switchWeapon(n, true); return; }
    }
  }

  // Q: back to the weapon you had before
  function quickSwitch() {
    if (!G) return;
    var p = G.p;
    if (p.prevWeapon && p.prevWeapon !== p.weapon && p.weapons[p.prevWeapon] && hasAmmo(p, p.prevWeapon)) switchWeapon(p.prevWeapon, true);
    else cycleWeapon(-1);
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

  // dmg scales what demons do to you; ammo scales what pickups give
  var DIFFS = [
    { name: 'ROOKIE', dmg: 0.5, ammo: 2, desc: 'DEMONS HIT HALF AS HARD AND AMMO IS DOUBLED. GREAT FOR A FIRST RUN.' },
    { name: 'WARRIOR', dmg: 1, ammo: 1, desc: 'THE FIGHT AS IT WAS MEANT TO BE.' },
    { name: 'INFERNO', dmg: 1.5, ammo: 1, desc: 'DEMONS HIT HARDER. FOR VETERANS WHO KNOW EVERY CORNER.' }
  ];
  function diff() { return DIFFS[SETTINGS.v.difficulty] || DIFFS[1]; }

  // What the level asks of you, worked out from its map.
  function levelInfo(L) {
    var s = L.map.join('');
    return {
      boss: s.indexOf('Y') >= 0,
      keys: { red: s.indexOf('R') >= 0 || s.indexOf('r') >= 0, blue: s.indexOf('U') >= 0 || s.indexOf('u') >= 0 }
    };
  }

  // keys you have laid eyes on get a goal marker
  function spotKeys() {
    var p = G.p;
    for (var i = 0; i < G.ents.length; i++) {
      var e = G.ents[i];
      if (e.kind !== 'pickup' || e.spotted || (e.item !== 'r' && e.item !== 'u')) continue;
      if (dist2(e.x, e.y, p.x, p.y) < 196 && hasLOS(p.x, p.y, e.x, e.y)) e.spotted = true;
    }
  }

  // Where the current goal is, but only once you've seen it: { x, y } or null.
  function goalTarget() {
    var info = G.info, p = G.p, k;
    var need = info.keys.blue && !p.keys.blue ? 'u' : info.keys.red && !p.keys.red ? 'r' : null;
    if (need) {
      for (var i = 0; i < G.ents.length; i++) {
        var e = G.ents[i];
        if (e.kind === 'pickup' && e.item === need && !e.gone) return e.spotted ? { x: e.x, y: e.y } : null;
      }
      return null;
    }
    for (k in G.doors) {
      var d = G.doors[k];
      if (d.locked && !d.used && G.seen[d.y * G.mw + d.x]) return { x: d.x + 0.5, y: d.y + 0.5 };
    }
    var ex = G.exitCell;
    if (!info.boss && ex && G.seen[ex.y * G.mw + ex.x]) return { x: ex.x + 0.5, y: ex.y + 0.5 };
    return null;
  }

  // the next thing to do, right now
  function currentObjective() {
    if (!G) return '';
    var info = levelInfo(G.L), p = G.p;
    if (info.keys.blue && !p.keys.blue) return 'FIND THE BLUE KEYCARD';
    if (info.keys.red && !p.keys.red) return 'FIND THE RED KEYCARD';
    if (info.boss) return 'DEFEAT RILEY';
    return 'FIND THE EXIT SWITCH';
  }

  // First-time tips. Each is shown once per browser, one at a time.
  var TIPS = {
    run: 'TIP: HOLD SHIFT TO RUN.',
    map: 'TIP: LOST? PRESS TAB FOR THE MAP.',
    weapons: 'TIP: PRESS 1 2 3, OR SCROLL THE MOUSE WHEEL, TO SWITCH WEAPONS. Q SWAPS BACK.',
    key: 'TIP: THE MATCHING DOOR IS MARKED IN COLOR ON YOUR MAP (TAB).',
    lowAmmo: 'TIP: LOW ON AMMO? YOUR FIST (1) NEVER RUNS OUT, AND IT IS SILENT.',
    lowHealth: 'TIP: LOW HEALTH! BACK OFF AND LOOK FOR STIMPACKS AND MEDIKITS.',
    hurtDir: 'TIP: THE RED MARKS AROUND YOUR AIM POINT AT WHATEVER HIT YOU.',
    secret: 'TIP: WALLS THAT LOOK DIFFERENT MAY HIDE SECRETS. PRESS E ON THEM.'
  };
  function tip(id) {
    if (!G || AUTO || !SETTINGS.v.tips || SETTINGS.v.seenTips[id]) return;
    if (G.tipQueue.indexOf(id) < 0) G.tipQueue.push(id);
  }
  function updateTips(dt) {
    G.tipT -= dt;
    if (G.tipT > 0 || !G.tipQueue.length) return;
    var id = G.tipQueue.shift();
    if (SETTINGS.v.seenTips[id]) return;
    SETTINGS.v.seenTips[id] = true;
    SETTINGS.save();
    message(TIPS[id], '#8fe0a0', 6);
    G.tipT = 7;
  }

  function snapshotGear(p) {
    return {
      hp: Math.max(p.hp, 1), armor: p.armor,
      ammo: { bullets: p.ammo.bullets, shells: p.ammo.shells },
      shotgun: p.weapons.shotgun, weapon: p.weapon
    };
  }

  function startGame(idx) {
    startLevel(idx, false);
  }

  // Dying restarts the level with the gear you walked in with.
  function retryLevel() {
    startLevel(levelIndex, false, G.startGear);
  }

  function startLevel(idx, keepGear, gear) {
    levelIndex = idx;
    var L = LEVELS[idx];
    var m = L.map, mw = m[0].length, mh = m.length;
    var cells = new Uint8Array(mw * mh);
    var doors = {};
    var ents = [];
    var secrets = [];
    var exitCell = null;
    var old = gear || (keepGear && G ? snapshotGear(G.p) : null);

    var p = {
      x: 0, y: 0, ang: L.playerAngle || 0,
      hp: old ? old.hp : 100,
      armor: old ? old.armor : 0,
      ammo: old ? { bullets: old.ammo.bullets, shells: old.ammo.shells } : { bullets: 50, shells: 0 },
      weapons: { fist: true, pistol: true, shotgun: old ? old.shotgun : false },
      keys: { red: false, blue: false },
      weapon: old && old.shotgun ? old.weapon : 'pistol',
      nextWeapon: null, prevWeapon: null, raiseT: 0.3, lowerT: 0, cool: 0, fireT: 1,
      bobPhase: 0, bobAmp: 0,
      dead: false, deadT: 0, camZ: 0.5,
      painT: 0, grinT: 0, dmgFlash: 0, bonusFlash: 0
    };
    if (!hasAmmo(p, p.weapon)) p.weapon = bestWeapon(p);

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
        if (ch === 'X') exitCell = { x: x, y: y };
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
      floorTex: ART.floors[L.floor], ceilTex: ART.floors[L.ceil],
      startGear: old, info: levelInfo(L),
      started: false,       // true once the player has the mouse and the clock runs
      notice: null,         // big centered announcement
      hurtDirs: [],         // where recent hits came from
      hitT: 0, killT: 0, blockT: 0, // crosshair hit markers
      shake: 0, hitstop: 0,  // screen shake (pixels) and the tiny freeze on a kill
      killer: null,
      tipQueue: [], tipT: 3, usedMap: false, ranT: 0,
      exitCell: exitCell, spotT: 0
    };
    for (var bi = 0; bi < ents.length; bi++) if (ents[bi].kind === 'riley') G.boss = ents[bi];
    mode = 'game';
    mapOpen = false;
    interSkip = false;
    if (AUTO) begin();
  }

  // the clock starts: tell the player where they are and what to do
  function begin() {
    if (G.started) return;
    G.started = true;
    message(G.L.name);
    notice(currentObjective(), '#f0d848', 3.5);
  }

  function message(text, color, secs) {
    G.msgs.push({ text: text, t: secs || 3, color: color });
    if (G.msgs.length > 4) G.msgs.shift();
  }

  function shake(px) {
    if (G && SETTINGS.v.shake) G.shake = Math.min(6, Math.max(G.shake, px));
  }

  function notice(text, color, secs) {
    G.notice = { text: text, color: color || '#f0d848', t: secs || 2.5, max: secs || 2.5 };
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
      if (byPlayer) d.used = true;
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

  // What pressing "use" would act on right now, without doing it:
  // { kind: 'door', door } | { kind: 'switch', x, y } | null
  function useTarget() {
    var p = G.p;
    var c = Math.cos(p.ang), s = Math.sin(p.ang);
    for (var t = 0.4; t <= 1.3; t += 0.3) {
      var cx = Math.floor(p.x + c * t), cy = Math.floor(p.y + s * t);
      var id = cellAt(cx, cy);
      if (id === 0) continue;
      if (DOOR_IDS[id]) {
        var d = doorAt(cx, cy);
        if (d.open >= 0.9 && d.state === 'open' && Math.floor(p.x) === cx && Math.floor(p.y) === cy) continue;
        return { kind: 'door', door: d };
      }
      if (id === 9) return { kind: 'switch', x: cx, y: cy };
      return null; // plain wall
    }
    return null;
  }

  // The on-screen hint for the thing you're facing (secret walls stay secret).
  function usePrompt() {
    if (!G || G.p.dead || G.exitT >= 0) return null;
    var u = useTarget();
    if (!u) return null;
    if (u.kind === 'switch') return { verb: 'EXIT LEVEL', color: '#58e068' };
    var d = u.door;
    if (d.secret && !d.found) return null;
    if (d.locked && !G.p.keys[d.locked]) return { need: d.locked, text: d.locked.toUpperCase() + ' KEYCARD NEEDED', color: d.locked === 'red' ? '#ff5a3a' : '#6a98ff' };
    if (d.state === 'closed' || d.state === 'closing') return { verb: 'OPEN', color: '#e8e0c8' };
    return null;
  }

  function useAction() {
    var u = useTarget();
    if (!u) return;
    var p = G.p;
    if (u.kind === 'door') {
      var d = u.door;
      if (d.locked && !p.keys[d.locked]) {
        SND.play('locked');
        message('YOU NEED THE ' + d.locked.toUpperCase() + ' KEYCARD.');
        tip('key');
      } else {
        openDoor(d, true);
      }
    } else if (u.kind === 'switch') {
      G.cells[u.y * G.mw + u.x] = 10;
      SND.play('switchFlip');
      notice('LEVEL COMPLETE!', '#58e068', 2);
      G.exitT = 0.8;
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

  // knock: how far a hit shoves the demon back (heavy demons shrug it off)
  function fireHitscan(ang, dmgMin, dmgMax, isMelee, knock) {
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
      if (!best.barrel) {
        if (best.kind === 'riley' && best.shieldT > 0) G.blockT = 0.2;
        else if (best.state === 'die') { G.killT = 0.3; G.hitstop = Math.max(G.hitstop, 0.045); }
        else G.hitT = Math.max(G.hitT, 0.14);
        var def = MOBS[best.kind];
        if (knock && !def.boss) {
          var kb = knock * (def.hp > 200 ? 0.25 : 1);
          slideMove(best, c * kb, s * kb, best.radius);
        }
      }
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
    e.flashT = 0.07; // the white hit flash
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
    shake(6 / (1 + playerDist(e.x, e.y) * 0.35));
    var pd = Math.sqrt(dist2(G.p.x, G.p.y, e.x, e.y));
    if (pd < R && hasLOS(e.x, e.y, G.p.x, G.p.y)) hurtPlayer(((R - pd) / R * 70) | 0, e);
  }

  // src is whatever hurt you ({ x, y, kind }), used for the direction marks
  // and the obituary
  function hurtPlayer(dmg, src) {
    var p = G.p;
    if (p.dead || dmg <= 0 || G.exitT >= 0) return;
    dmg = Math.max(1, Math.round(dmg * diff().dmg));
    if (src) {
      var a = Math.atan2(src.y - p.y, src.x - p.x);
      G.hurtDirs.push({ ang: a, t: 1 });
      if (G.hurtDirs.length > 6) G.hurtDirs.shift();
      var rel = Math.atan2(Math.sin(a - p.ang), Math.cos(a - p.ang));
      if (Math.abs(rel) > 0.9) tip('hurtDir');
      G.killer = src.kind;
    }
    var absorbed = Math.min(p.armor, Math.ceil(dmg / 3));
    p.armor -= absorbed;
    dmg -= absorbed;
    p.hp -= dmg;
    p.dmgFlash = Math.min(0.65, p.dmgFlash + dmg / 55);
    shake(Math.min(4, 1 + dmg / 8));
    p.painT = 0.6;
    if (p.hp <= 0) {
      p.hp = 0; p.dead = true; p.deadT = 0;
      mapOpen = false;
      SND.play('playerDie');
      if (rileyActive(G.boss)) {
        rileySay(G.boss, RILEY.line('playerDied', G.boss.profile));
        rileySettle(G.boss, false);
      }
    } else {
      SND.play('playerPain');
      if (p.hp < 30) tip('lowHealth');
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
    e.flashT = (e.flashT || 0) - dt;

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
            if (tgt) damageMob(tgt, dmg, e); else hurtPlayer(dmg, e);
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
        hurtPlayer((rndIn(10, 20) * tune.dmgScale) | 0, e);
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
    e.flashT = (e.flashT || 0) - dt;
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
    G.shake = Math.max(0, G.shake - dt * 14);
    p.dmgFlash = Math.max(0, p.dmgFlash - dt * 0.8);
    p.bonusFlash = Math.max(0, p.bonusFlash - dt * 1.5);
    p.painT = Math.max(0, p.painT - dt);
    p.grinT = Math.max(0, p.grinT - dt);

    for (var i = 0; i < G.msgs.length; i++) G.msgs[i].t -= dt;
    while (G.msgs.length && G.msgs[0].t <= 0) G.msgs.shift();
    if (G.notice && (G.notice.t -= dt) <= 0) G.notice = null;
    G.hitT -= dt; G.killT -= dt; G.blockT -= dt;
    for (var hd = G.hurtDirs.length - 1; hd >= 0; hd--) if ((G.hurtDirs[hd].t -= dt * 0.9) <= 0) G.hurtDirs.splice(hd, 1);
    updateTips(dt);
    G.spotT -= dt;
    if (G.spotT <= 0) { G.spotT = 0.3; spotKeys(); }

    if (G.exitT >= 0) {
      G.exitT -= dt;
      if (G.exitT <= 0) {
        SETTINGS.unlock(Math.min(levelIndex + 1, LEVELS.length - 1));
        var rec0 = { time: G.time, par: G.L.par, kills: G.stats.kills, totalKills: G.stats.totalKills,
          items: G.stats.items, totalItems: G.stats.totalItems, secrets: G.stats.secrets, totalSecrets: G.stats.totalSecrets };
        var rec = SETTINGS.record(levelIndex, rec0);
        interStats = {
          name: G.L.name, time: G.time, par: G.L.par,
          kills: G.stats.kills, totalKills: G.stats.totalKills,
          items: G.stats.items, totalItems: G.stats.totalItems,
          secrets: G.stats.secrets, totalSecrets: G.stats.totalSecrets,
          record: rec
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
        if (run) G.ranT += dt;
        p.bobPhase += dt * (run ? 11 : 8);
        p.bobAmp = Math.min(1, p.bobAmp + dt * 6);
      } else {
        p.bobAmp = Math.max(0, p.bobAmp - dt * 6);
      }
      G.input.strafe = mvS;
      G.input.moving = p.x !== ox || p.y !== oy;
      G.input.vx = (p.x - ox) / dt; G.input.vy = (p.y - oy) / dt;

      // first-level tips for things new players tend to miss
      if (levelIndex === 0) {
        if (G.time > 14 && G.ranT < 0.3) tip('run');
        if (G.time > 40 && !G.usedMap) tip('map');
        if (G.time > 70 && !G.stats.secrets) tip('secret');
      }

      // ---- use
      if (keys['KeyE'] || keys['Space']) {
        if (!p.usedHeld) { p.usedHeld = true; useAction(); }
      } else p.usedHeld = false;

      // ---- weapon switching
      if (p.nextWeapon && p.raiseT <= 0 && !(p.lowerT > 0)) { p.lowerT = 0.15; }
      if (p.lowerT > 0) {
        p.lowerT -= dt;
        if (p.lowerT <= 0) { p.weapon = p.nextWeapon || p.weapon; p.nextWeapon = null; p.raiseT = 0.15; }
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
          // out of ammo: fall back to the best weapon that can still fire
          var fallback = bestWeapon(p);
          message('OUT OF ' + AMMO_NAMES[wep.ammo] + '!');
          if (switchWeapon(fallback, true) && fallback === 'fist') p.autoFist = true;
          tip('lowAmmo');
          p.cool = 0.3;
        } else {
          if (wep.ammo) p.ammo[wep.ammo]--;
          p.cool = wep.rate;
          p.fireT = 0;
          SND.play(wep.sound);
          if (p.weapon === 'shotgun') SND.play('pump');
          if (!wep.melee) { flashT = 0.09; shake(wep.shake); }
          // Riley counts every shot (and, in rileyTakeHit, each one that lands)
          if (rileyActive(G.boss)) RILEY.noteShot(G.boss.profile, p.weapon, playerDist(G.boss.x, G.boss.y));
          G.shotId++;
          G.firing = true;
          if (wep.melee) {
            fireHitscan(p.ang, wep.dmgMin, wep.dmgMax, true, 0.12);
          } else {
            for (var pl = 0; pl < wep.pellets; pl++) {
              fireHitscan(p.ang + (rnd() - 0.5) * 2 * wep.spread, wep.dmgMin, wep.dmgMax, false, wep.knock);
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
        if (dist2(e2.x, e2.y, p.x, p.y) < 0.45) { if (!e2.touching) tryPickup(e2); }
        else e2.touching = false;
      }

      // ---- secret floors
      var pcx = Math.floor(p.x), pcy = Math.floor(p.y);
      for (var sIdx = 0; sIdx < G.secrets.length; sIdx++) {
        var sec = G.secrets[sIdx];
        if (!sec.found && sec.x === pcx && sec.y === pcy) {
          sec.found = true;
          G.stats.secrets++;
          SND.play('secret');
          notice('SECRET AREA FOUND!', '#ffd23e', 2.5);
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
            hurtPlayer(e.dmg | 0, { x: e.x - e.vx, y: e.y - e.vy, kind: e.owner ? e.owner.kind : 'imp' });
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
    var p = G.p, it = ITEMS[e.item], am = diff().ammo;
    var full = null;
    switch (e.item) {
      case 'h': if (p.hp >= 100) full = 'HEALTH'; else p.hp = Math.min(100, p.hp + 10); break;
      case '+': if (p.hp >= 100) full = 'HEALTH'; else p.hp = Math.min(100, p.hp + 25); break;
      case 'A': if (p.armor >= 100) full = 'ARMOR'; else { p.armor = 100; p.grinT = 1; } break;
      case 'b': if (p.ammo.bullets >= 200) full = 'BULLETS'; else p.ammo.bullets = Math.min(200, p.ammo.bullets + 10 * am); break;
      case 'a': if (p.ammo.shells >= 50) full = 'SHELLS'; else p.ammo.shells = Math.min(50, p.ammo.shells + 4 * am); break;
      case '2':
        p.weapons.shotgun = true;
        p.ammo.shells = Math.min(50, p.ammo.shells + 8 * am);
        p.grinT = 1.2;
        if (p.weapon !== 'shotgun') switchWeapon('shotgun', true);
        notice('SHOTGUN!  PRESS 3', '#ffd23e', 2.5);
        tip('weapons');
        break;
      case 'r': case 'u':
        var col = e.item === 'r' ? 'red' : 'blue';
        p.keys[col] = true; p.grinT = 1;
        notice(col.toUpperCase() + ' KEYCARD', col === 'red' ? '#ff5a3a' : '#6a98ff', 2.5);
        tip('key');
        break;
      case 'P': p.hp = Math.min(200, p.hp + 100); p.grinT = 1.2; break;
    }
    if (full) {
      // say why it was left behind, once per visit
      e.touching = true;
      message(full + ' ALREADY FULL', '#8a8478', 1.5);
      return;
    }
    e.gone = true;
    G.stats.items++;
    p.bonusFlash = Math.min(0.35, p.bonusFlash + 0.22);
    SND.play(it.snd);
    message(it.msg);
    // ran dry and fell back to the fist: pick the gun back up with the ammo
    if (p.autoFist && (e.item === 'b' || e.item === 'a')) {
      p.autoFist = false;
      switchWeapon(bestWeapon(p), true);
    }
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
      var hitFlash = e3.flashT > 0 && e3.state !== 'dead';
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
          fb[yy2 * W + xx] = hitFlash ? (0xff000000 | ((c2 & 0xfefefe) >> 1) + 0x7f7f7f) >>> 0 : shade(c2, fi2);
        }
      }
    }

    var sk = G.shake;
    if (sk > 0.3) {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, W, VH);
      ctx.putImageData(viewImg, Math.round(rndIn(-sk, sk)), Math.round(rndIn(-sk, sk) * 0.6));
    } else ctx.putImageData(viewImg, 0, 0);
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
    var gy = VH - gh + 10 + bobY + G.shake * 0.8;
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

  var HUD_RED = '#e03828', HUD_LABEL = '#8a8478', HUD_SHADOW = '#401008';

  function blinkOn(rate) { return ((G ? G.time : 0) * (rate || 3)) % 1 < 0.55; }

  // numbers go orange when low and flash when critical
  function levelColor(low, critical) {
    if (critical) return blinkOn(3) ? '#ffffff' : HUD_RED;
    if (low) return '#ff9a28';
    return HUD_RED;
  }

  function renderStatusBar() {
    var p = G.p;
    ctx.fillStyle = '#3a352e';
    ctx.fillRect(0, VH, W, HUD_H);
    ctx.fillStyle = '#14110d';
    ctx.fillRect(0, VH, W, 2);
    ctx.fillStyle = '#57514a';
    ctx.fillRect(0, VH + 2, W, 1);
    ctx.fillStyle = '#24211c';
    [46, 116, 142, 178, 230, 250].forEach(function (dx) {
      ctx.fillRect(dx, VH + 4, 1, HUD_H - 8);
    });

    // ammo for the weapon in hand
    var wep = WEAPONS[p.weapon];
    var n = wep.ammo ? p.ammo[wep.ammo] : -1;
    var lowAmmo = wep.ammo && n <= (wep.ammo === 'shells' ? 4 : 10);
    ART.drawText(ctx, 'AMMO', 8, VH + 5, { color: n === 0 ? HUD_RED : HUD_LABEL });
    ART.drawText(ctx, wep.ammo ? String(n) : '--', 40, VH + 12, { scale: 3, color: levelColor(lowAmmo, n === 0), shadow: HUD_SHADOW, right: true });

    var critHp = p.hp <= 25;
    ART.drawText(ctx, 'HEALTH', 54, VH + 5, { color: critHp ? HUD_RED : HUD_LABEL });
    ART.drawText(ctx, p.hp + '%', 108, VH + 12, { scale: 3, color: levelColor(p.hp <= 50, critHp && !p.dead), shadow: HUD_SHADOW, right: true });

    // ARMS: which weapons you own, which is in hand, which are empty
    ART.drawText(ctx, 'ARMS', 129, VH + 5, { color: HUD_LABEL, center: true });
    for (var wi = 0; wi < WEAPON_ORDER.length; wi++) {
      var name = WEAPON_ORDER[wi], x = 119 + wi * 8;
      var owned = p.weapons[name], inHand = (p.nextWeapon || p.weapon) === name;
      var col = inHand ? '#ffd23e' : !owned ? '#2a2620' : hasAmmo(p, name) ? '#c8c0b0' : '#6a5a4a';
      ART.drawText(ctx, String(wi + 1), x, VH + 13, { scale: 2, color: col });
      if (inHand) { ctx.fillStyle = '#ffd23e'; ctx.fillRect(x, VH + 25, 6, 1); }
    }

    var f = faceImage();
    ctx.drawImage(f.canvas, 160 - 12, VH + 3);

    ART.drawText(ctx, 'ARMOR', 184, VH + 5, { color: HUD_LABEL });
    ART.drawText(ctx, p.armor + '%', 226, VH + 12, { scale: 3, color: p.armor > 0 ? HUD_RED : '#6a4a40', shadow: HUD_SHADOW, right: true });

    // keys: a faint outline for a key this level has that you haven't found
    var need = G.info.keys;
    [['red', 'keyRed', 5], ['blue', 'keyBlue', 18]].forEach(function (k) {
      if (!p.keys[k[0]] && !need[k[0]]) return;
      ctx.globalAlpha = p.keys[k[0]] ? 1 : 0.18;
      ctx.drawImage(ART.things[k[1]].canvas, 236, VH + k[2]);
      ctx.globalAlpha = 1;
    });

    // ammo table, the type in use highlighted
    var bCol = wep.ammo === 'bullets' ? '#ffd23e' : '#c8c0b0', sCol = wep.ammo === 'shells' ? '#ffd23e' : '#c8c0b0';
    ART.drawText(ctx, 'BULL ' + p.ammo.bullets + '/200', 254, VH + 8, { color: bCol });
    ART.drawText(ctx, 'SHEL ' + p.ammo.shells + '/50', 254, VH + 19, { color: p.weapons.shotgun ? sCol : '#6a655c' });
  }

  // the demon (or barrel) under the crosshair, if any
  function aimTarget() {
    var p = G.p, c = Math.cos(p.ang), s = Math.sin(p.ang);
    var wall = castRay(p.x, p.y, c, s, 40);
    var best = null, bestT = 1e9;
    for (var i = 0; i < G.ents.length; i++) {
      var e = G.ents[i];
      if (!e.mob || !alive(e)) continue;
      var dx = e.x - p.x, dy = e.y - p.y, t = dx * c + dy * s;
      if (t < 0.2 || t > wall.dist + 0.2 || t > bestT) continue;
      if (Math.abs(dx * s - dy * c) < e.radius) { best = e; bestT = t; }
    }
    return best;
  }

  function renderCrosshair() {
    var cx = W / 2, cy = HORIZON;
    if (SETTINGS.v.crosshair) {
      var tgt = aimTarget();
      ctx.fillStyle = !tgt ? 'rgba(232,224,200,0.75)' : tgt.barrel ? '#ff9a28' : '#ff4a2a';
      ctx.fillRect(cx - 5, cy, 3, 1); ctx.fillRect(cx + 3, cy, 3, 1);
      ctx.fillRect(cx, cy - 5, 1, 3); ctx.fillRect(cx, cy + 3, 1, 3);
    }
    // hit markers: white = hit, red = kill, grey = blocked by a shield
    var mk = G.killT > 0 ? '#ff3a1a' : G.blockT > 0 ? '#9aa4a8' : G.hitT > 0 ? '#ffffff' : null;
    if (mk) {
      ctx.fillStyle = mk;
      var r0 = G.killT > 0 ? 4 : 3;
      for (var k = r0; k < r0 + 3; k++) {
        ctx.fillRect(cx - k, cy - k, 1, 1); ctx.fillRect(cx + k, cy - k, 1, 1);
        ctx.fillRect(cx - k, cy + k, 1, 1); ctx.fillRect(cx + k, cy + k, 1, 1);
      }
    }
  }

  // red wedges around the aim point, pointing at whatever just hurt you
  function renderHurtDirs() {
    var p = G.p, cx = W / 2, cy = HORIZON, r = 34;
    for (var i = 0; i < G.hurtDirs.length; i++) {
      var h = G.hurtDirs[i];
      var rel = h.ang - p.ang;
      var sx = Math.sin(rel), sy = -Math.cos(rel);
      var bx = cx + sx * r, by = cy + sy * r;
      ctx.fillStyle = 'rgba(255,40,16,' + Math.min(0.9, h.t).toFixed(3) + ')';
      ctx.beginPath();
      ctx.moveTo(bx + sx * 9, by + sy * 9);
      ctx.lineTo(bx - sy * 7, by + sx * 7);
      ctx.lineTo(bx + sy * 7, by - sx * 7);
      ctx.closePath();
      ctx.fill();
    }
  }

  // a small diamond over the goal, or an arrow at the screen edge pointing at it
  function renderGoalMarker() {
    if (!SETTINGS.v.goalMarker) return;
    var g = goalTarget();
    if (!g) return;
    var p = G.p, dx = g.x - p.x, dy = g.y - p.y, d = Math.sqrt(dx * dx + dy * dy);
    if (d < 1.6) return;
    var rel = Math.atan2(dy, dx) - p.ang;
    rel = Math.atan2(Math.sin(rel), Math.cos(rel));
    var col = (G.time * 2) % 1 < 0.7 ? '#ffd23e' : '#c89a20', y = 10;
    ctx.fillStyle = col;
    ctx.beginPath();
    if (Math.abs(rel) < 0.52) {
      var sx = Math.round(W / 2 * (1 + Math.tan(rel) / 0.66));
      ctx.moveTo(sx, y - 4); ctx.lineTo(sx + 4, y); ctx.lineTo(sx, y + 4); ctx.lineTo(sx - 4, y);
      ctx.closePath(); ctx.fill();
      ART.drawText(ctx, String(Math.round(d)), sx, y + 7, { color: col, shadow: true, center: true });
    } else {
      var right = rel > 0, ax = right ? W - 6 : 6;
      ctx.moveTo(ax + (right ? 4 : -4), y + 30);
      ctx.lineTo(ax - (right ? 3 : -3), y + 25);
      ctx.lineTo(ax - (right ? 3 : -3), y + 35);
      ctx.closePath(); ctx.fill();
      ART.drawText(ctx, 'GOAL', right ? W - 12 : 12, y + 28, { color: col, shadow: true, right: right });
    }
  }

  function renderUsePrompt() {
    var u = usePrompt();
    if (!u) return;
    var y = HORIZON + 14;
    if (u.verb) {
      var tw = ART.textWidth(u.verb, 1), total = 9 + 4 + tw, x = (W - total) / 2 | 0;
      ctx.fillStyle = 'rgba(0,0,0,0.55)';
      ctx.fillRect(x - 3, y - 3, total + 6, 13);
      ctx.fillStyle = '#e8e0c8';
      ctx.fillRect(x, y - 1, 9, 9);
      ctx.fillStyle = '#14110d';
      ctx.fillRect(x + 1, y, 7, 7);
      ART.drawText(ctx, 'E', x + 3, y + 1, { color: '#ffd23e' });
      ART.drawText(ctx, u.verb, x + 13, y + 1, { color: u.color, shadow: true });
    } else {
      var tw2 = ART.textWidth(u.text, 1);
      ctx.fillStyle = 'rgba(0,0,0,0.55)';
      ctx.fillRect((W - tw2) / 2 - 4, y - 3, tw2 + 8, 13);
      ART.drawText(ctx, u.text, W / 2, y + 1, { color: u.color, shadow: true, center: true });
    }
  }

  function renderLowHealth() {
    var p = G.p;
    if (p.dead || p.hp > 25) return;
    var a = 0.18 + 0.14 * Math.sin(G.time * 5);
    for (var k = 0; k < 6; k++) {
      ctx.fillStyle = 'rgba(200,0,0,' + (a * (1 - k / 6)).toFixed(3) + ')';
      ctx.fillRect(k * 2, 0, 2, VH); ctx.fillRect(W - k * 2 - 2, 0, 2, VH);
      ctx.fillRect(0, k * 2, W, 2); ctx.fillRect(0, VH - k * 2 - 2, W, 2);
    }
  }

  var OBITS = {
    imp: ['AN IMP BURNED YOU DOWN.', 'TIP: STRAFE WITH A AND D TO SIDESTEP FIREBALLS.'],
    gnasher: ['A GNASHER CHEWED YOU UP.', 'TIP: BACK AWAY WHILE YOU SHOOT. GNASHERS ONLY BITE UP CLOSE.'],
    knight: ['THE EMBER KNIGHT CRUSHED YOU.', 'TIP: KEEP YOUR DISTANCE AND BRING SHOTGUN SHELLS.'],
    riley: ['RILEY OUTPLAYED YOU.', 'TIP: WHEN HER VISOR FLASHES WHITE, SHE IS ABOUT TO SHOOT. MOVE!'],
    barrel: ['A BARREL BLEW UP IN YOUR FACE.', 'TIP: SHOOT BARRELS FROM FAR AWAY, WHEN DEMONS ARE NEAR THEM.']
  };

  function renderDeath() {
    var p = G.p;
    if (!p.dead || p.deadT < 1) return;
    var ob = OBITS[G.killer] || ['YOU WERE OVERWHELMED.', 'TIP: FIGHT IN DOORWAYS SO DEMONS COME TO YOU ONE AT A TIME.'];
    ctx.fillStyle = 'rgba(0,0,0,0.45)';
    ctx.fillRect(0, 44, W, 72);
    ART.drawText(ctx, 'YOU DIED', W / 2, 50, { scale: 3, color: HUD_RED, shadow: true, center: true });
    ART.drawText(ctx, ob[0], W / 2, 72, { color: '#e8e0c8', shadow: true, center: true });
    ART.drawText(ctx, ob[1], W / 2, 84, { color: '#8fe0a0', shadow: true, center: true });
    if (p.deadT > 1.2 && (G.time % 1) < 0.7) {
      ART.drawText(ctx, 'CLICK OR PRESS ENTER TO TRY AGAIN', W / 2, 100, { color: '#f0d848', shadow: true, center: true });
    }
    ART.drawText(ctx, 'YOU KEEP THE GEAR YOU STARTED THE LEVEL WITH', W / 2, 108, { color: '#8a8478', shadow: true, center: true });
  }

  function renderMessages() {
    var y = 4;
    for (var i = 0; i < G.msgs.length; i++) {
      var m = G.msgs[i], lines = MENU.wrap(m.text, 78);
      if (m.t < 0.4) ctx.globalAlpha = Math.max(0, m.t / 0.4);
      for (var l = 0; l < lines.length; l++) {
        ART.drawText(ctx, lines[l], 4, y, { color: m.color || '#f0d848', shadow: true });
        y += 7;
      }
      ctx.globalAlpha = 1;
      y += 1;
    }
    var n = G.notice;
    if (n) {
      ctx.globalAlpha = Math.min(1, n.t / 0.4);
      ART.drawText(ctx, n.text, W / 2, 50, { scale: 2, color: n.color, shadow: true, center: true });
      ctx.globalAlpha = 1;
    }
  }

  function renderBossBar() {
    var b = G.boss;
    if (!b || b.state === 'idle' || b.state === 'dead') return;
    var bw = 140, bx = (W - bw) / 2, by = VH - 12;
    var shield = b.shieldT > 0;
    ART.drawText(ctx, shield ? 'RILEY - SHIELDED' : 'RILEY', W / 2, by - 8, { color: shield ? '#ffd23e' : '#6fe0ec', shadow: true, center: true });
    ctx.fillStyle = '#06141c';
    ctx.fillRect(bx - 1, by - 1, bw + 2, 6);
    ctx.fillStyle = shield ? '#ffd23e' : '#3fd8c8';
    ctx.fillRect(bx, by, Math.max(0, b.hp / b.maxHp) * bw, 4);
    ctx.fillStyle = '#06141c'; // phase marks
    ctx.fillRect(bx + bw * 0.33, by, 1, 4);
    ctx.fillRect(bx + bw * 0.66, by, 1, 4);
  }

  function renderHUD() {
    var p = G.p;
    renderStatusBar();
    if (p.dmgFlash > 0) {
      ctx.fillStyle = 'rgba(255,20,10,' + p.dmgFlash.toFixed(3) + ')';
      ctx.fillRect(0, 0, W, VH);
    }
    if (p.bonusFlash > 0) {
      ctx.fillStyle = 'rgba(255,220,80,' + p.bonusFlash.toFixed(3) + ')';
      ctx.fillRect(0, 0, W, VH);
    }
    renderLowHealth();
    if (mapOpen) { renderAutomap(); renderMessages(); return; }
    if (!p.dead && G.started && !MENU.isOpen()) {
      renderHurtDirs();
      renderGoalMarker();
      renderCrosshair();
      renderUsePrompt();
    }
    renderBossBar();
    renderMessages();
    renderDeath();
  }

  function renderAutomap() {
    ctx.fillStyle = 'rgba(0,0,0,0.8)';
    ctx.fillRect(0, 0, W, VH);
    var top = 22, bottom = VH - 14;
    var sc = Math.min((W - 16) / G.mw, (bottom - top) / G.mh);
    var ox = (W - G.mw * sc) / 2, oy = top + (bottom - top - G.mh * sc) / 2;
    var pulse = (G.time * 2) % 1 < 0.6;
    for (var y = 0; y < G.mh; y++) {
      for (var x = 0; x < G.mw; x++) {
        if (!G.seen[y * G.mw + x]) continue;
        var c = G.cells[y * G.mw + x];
        if (c === 0) continue;
        var col = '#6a655c';
        if (c === 6) col = '#c8a030';
        else if (c === 11) col = G.doors[x + ',' + y].found ? '#c8a030' : '#6a655c'; // secrets stay secret
        else if (c === 7) col = '#ff3a2a';
        else if (c === 8) col = '#4a7aff';
        else if (c === 9 || c === 10) col = pulse || c === 10 ? '#58e068' : '#1e5a26';
        ctx.fillStyle = col;
        ctx.fillRect(ox + x * sc, oy + y * sc, Math.max(1, sc - 0.4), Math.max(1, sc - 0.4));
      }
    }
    var goal = goalTarget();
    if (goal && pulse) {
      ctx.fillStyle = '#ffd23e';
      var gx = ox + goal.x * sc, gy = oy + goal.y * sc;
      ctx.fillRect(gx - 3, gy - 3, 7, 1); ctx.fillRect(gx - 3, gy + 3, 7, 1);
      ctx.fillRect(gx - 3, gy - 3, 1, 7); ctx.fillRect(gx + 3, gy - 3, 1, 7);
    }
    // you: a solid arrow
    var p = G.p, px = ox + p.x * sc, py = oy + p.y * sc, ca = Math.cos(p.ang), sa = Math.sin(p.ang);
    ctx.fillStyle = '#f8f4e0';
    ctx.beginPath();
    ctx.moveTo(px + ca * 5, py + sa * 5);
    ctx.lineTo(px - ca * 3 - sa * 3, py - sa * 3 + ca * 3);
    ctx.lineTo(px - ca * 3 + sa * 3, py - sa * 3 - ca * 3);
    ctx.closePath();
    ctx.fill();

    ART.drawText(ctx, G.L.name, 6, 4, { color: '#ff9a28', shadow: true });
    ART.drawText(ctx, 'TAB: CLOSE', W - 6, 4, { color: '#8a8478', right: true });
    ART.drawText(ctx, 'GOAL: ' + currentObjective(), 6, 12, { color: '#f0d848', shadow: true });
    var st = G.stats;
    ART.drawText(ctx, 'KILLS ' + st.kills + '/' + st.totalKills + '  ITEMS ' + st.items + '/' + st.totalItems +
      '  SECRETS ' + st.secrets + '/' + st.totalSecrets + '  TIME ' + fmtTime(G.time), W - 6, 12, { color: '#c8c0b0', right: true });

    // legend
    var lx = 6, ly = VH - 9;
    [['#c8a030', 'DOOR'], ['#ff3a2a', 'RED DOOR'], ['#4a7aff', 'BLUE DOOR'], ['#58e068', 'EXIT'], ['#ffd23e', 'GOAL'], ['#f8f4e0', 'YOU']].forEach(function (l) {
      ctx.fillStyle = l[0];
      ctx.fillRect(lx, ly, 5, 5);
      ART.drawText(ctx, l[1], lx + 8, ly, { color: '#a8a090' });
      lx += 8 + ART.textWidth(l[1], 1) + 12;
    });
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

  function renderTitleBg(c, t) {
    ctx.fillStyle = '#080604';
    ctx.fillRect(0, 0, W, H);
    fireLine(H - 6, t, 0);
    fireLine(H - 2, t * 1.3, 2);
    ART.drawText(ctx, 'FIREBIRD', W / 2, 10, { scale: 4, color: '#e03828', shadow: '#401008', center: true });
    ART.drawText(ctx, 'FIREBIRD', W / 2 - 1, 9, { scale: 4, color: '#ff9a28', center: true });
    ART.drawText(ctx, '3D', W / 2, 34, { scale: 5, color: '#ffd23e', shadow: '#803008', center: true });
    ART.drawText(ctx, 'EPISODE ONE: KNEE-DEEP IN THE ASHES', W / 2, 64, { color: '#c8c0b0', center: true });
    ART.drawText(ctx, 'A NIX GAMES PRODUCTION BY PHOENIX', W / 2, 72, { color: '#6a655c', center: true });
  }

  // background for menus: the title's darkness, or the paused game dimmed
  function menuBg(c, t) {
    if (mode === 'game') {
      ctx.fillStyle = 'rgba(4,3,2,0.86)';
      ctx.fillRect(0, 0, W, VH);
      ctx.fillStyle = '#0a0806';
      ctx.fillRect(0, VH, W, HUD_H);
    } else {
      ctx.fillStyle = '#0a0806';
      ctx.fillRect(0, 0, W, H);
      fireLine(H + 4, t, 1);
    }
    ctx.fillStyle = '#5e2a10';
    ctx.fillRect(40, 33, W - 80, 1);
  }

  function fmtTime(t) {
    t = t | 0;
    var m = (t / 60) | 0, s = t % 60;
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  function onOff(b) { return b ? 'ON' : 'OFF'; }

  function mainScreen() {
    var pr = SETTINGS.progress;
    return {
      drawBg: renderTitleBg, scale: 2, top: 86, gap: 13, descY: 156, footerY: 172,
      items: function () {
        var list = [];
        if (pr.unlocked > 0) list.push({
          label: 'CONTINUE', action: function () { launch(pr.unlocked); },
          desc: function () { return 'START ' + LEVELS[pr.unlocked].name + ' ON ' + diff().name + '.'; }
        });
        list.push(
          { label: 'NEW GAME', action: function () { MENU.push(diffScreen(0)); }, desc: 'START EPISODE ONE FROM THE BEGINNING.' },
          { label: 'LEVEL SELECT', action: function () { MENU.push(levelScreen()); }, desc: 'REPLAY ANY LEVEL YOU HAVE REACHED.' },
          { label: 'OPTIONS', action: function () { MENU.push(optionsScreen()); }, desc: 'MOUSE SPEED, VOLUME, CROSSHAIR, TIPS AND DIFFICULTY.' },
          { label: 'CONTROLS', action: function () { MENU.push(controlsScreen()); }, desc: 'EVERY KEY, ON ONE PAGE.' }
        );
        return list;
      }
    };
  }

  function diffScreen(idx) {
    var list = DIFFS.map(function (d, i) {
      return {
        label: d.name, desc: d.desc,
        action: function () { SETTINGS.v.difficulty = i; SETTINGS.save(); launch(idx); }
      };
    });
    list.push({ label: 'BACK', action: function () { MENU.back(); } });
    return { title: 'DIFFICULTY', drawBg: menuBg, scale: 2, top: 54, gap: 18, descY: 146, sel: SETTINGS.v.difficulty, items: list };
  }

  function levelScreen() {
    var list = LEVELS.map(function (L, i) {
      var open = i <= SETTINGS.progress.unlocked;
      return {
        label: open ? L.name : L.name.split(':')[0] + ': ???',
        disabled: function () { return !open; },
        desc: function () {
          var b = SETTINGS.best(i);
          return (levelInfo(L).boss ? 'BOSS LEVEL.  ' : '') + 'PAR ' + fmtTime(L.par) +
            (b && b.time !== null ? '   BEST ' + fmtTime(b.time) : '   NOT FINISHED YET') + '.  STARTS WITH A PISTOL.';
        },
        action: function () { MENU.push(diffScreen(i)); }
      };
    });
    list.push({ label: 'BACK', action: function () { MENU.back(); } });
    return {
      title: 'LEVEL SELECT', drawBg: menuBg, top: 46, gap: 14, descY: 142, items: list,
      drawExtra: function () {
        var sel = MENU.selected(), idx = LEVELS.map(function (L) { return L.name; }).indexOf(sel && sel.label);
        if (idx >= 0) {
          var b = SETTINGS.best(idx), x = W / 2 - 74;
          SETTINGS.MEDALS.forEach(function (m, k) { medal(ctx, x + k * 38, 124, m, !!(b && b.medals[m]), false); });
        }
        if (SETTINGS.progress.unlocked < LEVELS.length - 1) ART.drawText(ctx, 'FINISH A LEVEL TO UNLOCK THE NEXT ONE.', W / 2, 156, { color: '#6a655c', center: true });
      }
    };
  }

  function optionsScreen() {
    var v = SETTINGS.v;
    function step(key, min, max) {
      return function (dir) {
        var n = v[key] + dir;
        v[key] = n > max ? min : n < min ? max : n;
        SETTINGS.save();
        applySettings();
      };
    }
    function toggle(key) { return function () { v[key] = !v[key]; SETTINGS.save(); }; }
    return {
      title: 'OPTIONS', drawBg: menuBg, top: 42, gap: 12, descY: 156,
      items: [
        { label: 'MOUSE SPEED', slider: [0, 10, function () { return v.sens; }], adjust: step('sens', 1, 10), desc: 'HOW FAST THE VIEW TURNS WHEN YOU MOVE THE MOUSE. LEFT AND RIGHT TO CHANGE.' },
        { label: 'SOUND VOLUME', slider: [0, 10, function () { return v.volume; }], adjust: step('volume', 0, 10), desc: 'LOUDNESS OF EVERYTHING. LEFT AND RIGHT TO CHANGE.' },
        { label: 'MUSIC', value: function () { return onOff(SND.isMusicOn()); }, adjust: function () { SND.setMusic(!SND.isMusicOn()); }, desc: 'PRESS M DURING PLAY TO TOGGLE IT TOO.' },
        { label: 'CROSSHAIR', value: function () { return onOff(v.crosshair); }, adjust: toggle('crosshair'), desc: 'A SMALL AIMING MARK. TURNS RED OVER A DEMON.' },
        { label: 'GOAL MARKER', value: function () { return onOff(v.goalMarker); }, adjust: toggle('goalMarker'), desc: 'POINTS AT YOUR GOAL ONCE YOU HAVE SEEN IT. TURN OFF FOR CLASSIC EXPLORING.' },
        { label: 'SCREEN SHAKE', value: function () { return onOff(v.shake); }, adjust: toggle('shake'), desc: 'THE VIEW KICKS ON SHOTS, HITS AND EXPLOSIONS.' },
        { label: 'TIPS', value: function () { return onOff(v.tips); }, adjust: function () { v.tips = !v.tips; if (v.tips) v.seenTips = {}; SETTINGS.save(); }, desc: 'SHORT HINTS THE FIRST TIME SOMETHING NEW HAPPENS. TURNING THEM ON SHOWS THEM ALL AGAIN.' },
        { label: 'DIFFICULTY', value: function () { return diff().name; }, adjust: step('difficulty', 0, 2), desc: function () { return diff().desc + ' CHANGES TAKE EFFECT RIGHT AWAY.'; } },
        { label: 'BACK', action: function () { MENU.back(); } }
      ]
    };
  }

  var CONTROLS = [
    ['MOVE', 'W A S D   OR   ARROW KEYS'],
    ['TURN AND AIM', 'MOUSE   OR   LEFT / RIGHT'],
    ['FIRE', 'LEFT CLICK   OR   CTRL'],
    ['USE / OPEN', 'E   OR   SPACE'],
    ['RUN', 'HOLD SHIFT'],
    ['WEAPONS', '1 2 3   OR   MOUSE WHEEL'],
    ['LAST WEAPON', 'Q'],
    ['MAP', 'TAB'],
    ['MUSIC', 'M'],
    ['PAUSE', 'ESC']
  ];

  function controlsScreen() {
    return {
      title: 'CONTROLS', drawBg: menuBg, top: 168, gap: 12,
      items: [{ label: 'BACK', action: function () { MENU.back(); } }],
      drawExtra: function () {
        for (var i = 0; i < CONTROLS.length; i++) {
          var y = 42 + i * 11;
          ART.drawText(ctx, CONTROLS[i][0], 140, y, { color: '#c8c0b0', right: true });
          ART.drawText(ctx, CONTROLS[i][1], 152, y, { color: '#ffd23e' });
        }
      }
    };
  }

  function confirmScreen(question, detail, yes) {
    return {
      title: question, drawBg: menuBg, scale: 2, top: 86, gap: 18, sel: 1,
      drawExtra: function () { ART.drawText(ctx, detail, W / 2, 56, { color: '#a8a090', center: true }); },
      items: [
        { label: 'YES', action: yes },
        { label: 'NO', action: function () { MENU.back(); } }
      ]
    };
  }

  function pauseScreen() {
    return {
      title: 'PAUSED', drawBg: menuBg, scale: 2, top: 64, gap: 14, descY: 144,
      items: [
        {
          label: function () { return G.p.dead ? 'TRY AGAIN' : 'RESUME'; },
          action: function () { if (G.p.dead) retryLevel(); beginPlay(); },
          desc: function () { return G.p.dead ? 'RESTART THIS LEVEL WITH THE GEAR YOU BROUGHT IN.' : 'BACK TO THE FIGHT.'; }
        },
        {
          label: 'RESTART LEVEL', desc: 'START THIS LEVEL OVER WITH THE GEAR YOU BROUGHT IN.',
          action: function () {
            MENU.push(confirmScreen('RESTART?', 'YOU WILL LOSE PROGRESS IN THIS LEVEL.', function () { retryLevel(); beginPlay(); }));
          }
        },
        { label: 'OPTIONS', action: function () { MENU.push(optionsScreen()); }, desc: 'MOUSE SPEED, VOLUME, CROSSHAIR, TIPS AND DIFFICULTY.' },
        { label: 'CONTROLS', action: function () { MENU.push(controlsScreen()); }, desc: 'EVERY KEY, ON ONE PAGE.' },
        {
          label: 'QUIT TO TITLE', desc: 'YOUR UNLOCKED LEVELS ARE SAVED.',
          action: function () { MENU.push(confirmScreen('QUIT?', 'PROGRESS IN THIS LEVEL WILL BE LOST.', toTitle)); }
        }
      ],
      footer: 'ARROWS OR MOUSE: CHOOSE   ENTER OR CLICK: SELECT', footerY: 176,
      drawExtra: function () {
        ART.drawText(ctx, G.L.name + '   ' + diff().name, W / 2, 38, { color: '#c8c0b0', center: true });
        ART.drawText(ctx, 'GOAL: ' + currentObjective(), W / 2, 48, { color: '#f0d848', center: true });
        var st = G.stats;
        ART.drawText(ctx, 'KILLS ' + st.kills + '/' + st.totalKills + '   ITEMS ' + st.items + '/' + st.totalItems +
          '   SECRETS ' + st.secrets + '/' + st.totalSecrets + '   TIME ' + fmtTime(G.time), W / 2, 160, { color: '#8a8478', center: true });
      }
    };
  }

  function applySettings() {
    SND.setVolume(SETTINGS.v.volume / 10);
  }

  function launch(idx) {
    startLevel(idx, false);
    beginPlay();
  }

  function toTitle() {
    mode = 'title';
    MENU.open(mainScreen());
    releaseLock();
  }

  function openPause() {
    mapOpen = false;
    MENU.open(pauseScreen());
    SND.play('menu');
  }

  // shown before the level starts, and doubles as the "click to grab the mouse" prompt
  function renderLevelCard(t) {
    ctx.fillStyle = 'rgba(4,3,2,0.7)';
    ctx.fillRect(0, 0, W, H);
    var parts = G.L.name.split(': ');
    ART.drawText(ctx, parts[0], W / 2, 22, { color: '#8a8478', center: true });
    ART.drawText(ctx, parts[1] || G.L.name, W / 2, 32, { scale: 3, color: '#ff9a28', shadow: HUD_SHADOW, center: true });
    ART.drawText(ctx, 'GOAL', W / 2, 60, { color: '#8a8478', center: true });
    ART.drawText(ctx, currentObjective(), W / 2, 69, { scale: 2, color: '#f0d848', shadow: true, center: true });
    ART.drawText(ctx, 'DIFFICULTY: ' + diff().name + '     PAR ' + fmtTime(G.L.par), W / 2, 88, { color: '#a8a090', center: true });
    if ((t % 1) < 0.7) ART.drawText(ctx, 'CLICK TO BEGIN', W / 2, 106, { scale: 2, color: '#ffffff', shadow: true, center: true });
    if (lockFailed) ART.drawText(ctx, 'THE GAME NEEDS THE MOUSE. CLICK THE SCREEN AGAIN.', W / 2, 124, { color: '#ff9a28', center: true });
    ART.drawText(ctx, 'WASD MOVE   MOUSE AIM   CLICK FIRE   E USE   TAB MAP   ESC PAUSE', W / 2, 140, { color: '#8a8478', center: true });
  }

  var interSkip = false, tallyTick = 0;
  function interRoll(t) { return interSkip ? 1 : clamp(t / 1.2, 0, 1); }
  function interDone() { return interRoll(modeT) >= 1; }

  function renderInter(t) {
    ctx.fillStyle = '#0a0806';
    ctx.fillRect(0, 0, W, H);
    fireLine(H - 6, t, 1);
    var st = interStats;
    ART.drawText(ctx, st.name, W / 2, 22, { scale: 2, color: '#ff9a28', shadow: true, center: true });
    ART.drawText(ctx, 'FINISHED!', W / 2, 42, { scale: 2, color: '#e8e0c8', shadow: true, center: true });

    // tally rolls up over time (click to skip)
    var roll = interRoll(t);
    if (roll < 1 && t - tallyTick > 0.07) { tallyTick = t; SND.play('tally'); }
    function pct(a, b) { return b ? Math.round(a / b * 100 * roll) : 100; }
    function row(label, a, b, y) {
      ART.drawText(ctx, label, 90, y, { scale: 2, color: '#c8c0b0' });
      var v = pct(a, b);
      ART.drawText(ctx, v + '%', 240, y, { scale: 2, color: v >= 100 ? '#ffd23e' : HUD_RED, right: true });
    }
    row('KILLS', st.kills, st.totalKills, 70);
    row('ITEMS', st.items, st.totalItems, 90);
    row('SECRETS', st.secrets, st.totalSecrets, 110);
    var beatPar = st.time <= st.par;
    ART.drawText(ctx, 'TIME ' + fmtTime(st.time), 90, 132, { scale: 2, color: beatPar && roll >= 1 ? '#ffd23e' : '#c8c0b0' });
    ART.drawText(ctx, 'PAR ' + fmtTime(st.par), 240, 132, { scale: 2, color: '#c8c0b0', right: true });
    if (roll >= 1) {
      var rec = st.record, x = W / 2 - 70;
      SETTINGS.MEDALS.forEach(function (m, i) { medal(ctx, x + i * 38, 150, m, rec.medals.indexOf(m) >= 0, rec.fresh.indexOf(m) >= 0 && (t % 0.5) < 0.3); });
      if (rec.newBest) ART.drawText(ctx, 'NEW BEST TIME!', W / 2, 142, { color: '#ffd23e', center: true });
    }

    if (roll >= 1 && (t % 1) < 0.7) {
      var next = levelIndex + 1 < LEVELS.length ? 'CLICK OR PRESS ENTER FOR ' + LEVELS[levelIndex + 1].name : 'CLICK OR PRESS ENTER';
      ART.drawText(ctx, next, W / 2, 166, { color: '#f0d848', shadow: true, center: true });
    }
  }

  // a little medal chip: lit if earned, blinking if earned for the first time
  function medal(c, x, y, name, lit, blink) {
    ctx.fillStyle = lit ? (blink ? '#fff4c0' : '#ffd23e') : '#2e2a24';
    ctx.fillRect(x, y, 34, 9);
    ctx.fillStyle = lit ? '#803008' : '#14110d';
    ctx.fillRect(x + 1, y + 1, 32, 7);
    ART.drawText(ctx, name, x + 17, y + 2, { color: lit ? '#ffd23e' : '#4a463c', center: true });
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
      ART.drawText(ctx, lines[i], W / 2, 74 + i * 10, { color: '#e8e0c8', center: true });
    }
    if (t > 1 && (t % 1) < 0.7) ART.drawText(ctx, 'CLICK OR PRESS ENTER FOR THE TITLE SCREEN', W / 2, 170, { color: '#f0d848', shadow: true, center: true });
  }

  // ---- main loop -------------------------------------------------------------

  var last = 0, modeT = 0, lastMode = '';

  function frame(now) {
    var dt = Math.min(0.05, (now - last) / 1000 || 0.016);
    last = now;
    if (mode !== lastMode) { modeT = 0; lastMode = mode; }
    modeT += dt;

    if (mode === 'game' && G) {
      if (!G.started && locked) begin();
      var menu = MENU.isOpen();
      var paused = !AUTO && (!locked || menu);
      if (!paused) {
        if (G.hitstop > 0) G.hitstop -= dt; // a beat of stillness when something dies
        else update(dt);
      }
      renderWorld();
      renderWeapon();
      renderHUD();
      if (!G.started && !AUTO) { renderLevelCard(modeT); setCursor('pointer'); }
      else if (menu) MENU.render(ctx, modeT);
      else if (!locked && !AUTO) {
        // resume was chosen but the browser hasn't handed the mouse back yet
        ctx.fillStyle = 'rgba(0,0,0,0.5)';
        ctx.fillRect(0, 70, W, 24);
        ART.drawText(ctx, 'CLICK TO RESUME', W / 2, 76, { scale: 2, color: '#f0d848', shadow: true, center: true });
        setCursor('pointer');
      }
    } else if (mode === 'title') {
      if (!MENU.isOpen()) MENU.open(mainScreen());
      MENU.render(ctx, modeT);
    } else if (mode === 'inter') {
      renderInter(modeT);
      setCursor('pointer');
    } else if (mode === 'victory') {
      renderVictory(modeT);
      setCursor('pointer');
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
        setFire: function (on) { fireHeld = on; },
        switchWeapon: switchWeapon, cycleWeapon: cycleWeapon, quickSwitch: quickSwitch,
        useTarget: useTarget, usePrompt: usePrompt, useAction: useAction,
        objective: currentObjective, retryLevel: retryLevel, hurtPlayer: hurtPlayer,
        aimTarget: aimTarget, onEnter: onEnter, DIFFS: DIFFS, goalTarget: goalTarget,
        // draw one full frame (world, weapon, HUD, overlays) into the 320x200 buffer
        renderFrame: function (overlay) {
          renderWorld(); renderWeapon(); renderHUD();
          if (overlay === 'card') renderLevelCard(0.1);
          else if (overlay === 'pause') { openPause(); MENU.render(ctx, 0.1); MENU.close(); }
          return low;
        },
        renderTitle: function (screen) {
          var prevMode = mode; mode = 'title';
          MENU.open(mainScreen());
          if (screen === 'options') MENU.push(optionsScreen());
          if (screen === 'controls') MENU.push(controlsScreen());
          if (screen === 'levels') MENU.push(levelScreen());
          if (screen === 'difficulty') MENU.push(diffScreen(0));
          MENU.render(ctx, 0.1);
          MENU.close(); mode = prevMode;
          return low;
        },
        setMode: function (m) { mode = m; },
        setMap: function (on) { mapOpen = on; }
      };
    }
  }

  applySettings();
  if (!AUTO) MENU.open(mainScreen());
  requestAnimationFrame(frame);
})();
