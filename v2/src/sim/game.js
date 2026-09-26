// FIREBIRD 3D v2 simulation: everything that happens in the game, with no
// drawing and no sound. The renderer and audio read G.events and the state.
// Deterministic: every random roll goes through the injected rng.
import RILEY from '../../../js/riley.js';
import {
  buildWorld, DOOR_IDS, cellAt, doorAt, solidCell, floorAt, ceilAt, probe, slideMove,
  groundUnder, castRay, hasLOS, flood, updateLifts, nbrs, STEP_UP, JUMP_UP
} from './world.js';

export var PLAYER = { r: 0.28, h: 0.9, hCrouch: 0.55, eye: 0.8, eyeCrouch: 0.45, walk: 3.2, run: 5.0, jumpV: 3.9, gravity: 14 };

export var WEAPONS = {
  fist: { ammo: null, rate: 0.5, melee: true, dmgMin: 8, dmgMax: 24, knock: 0.12 },
  pistol: { ammo: 'bullets', rate: 0.42, pellets: 1, spread: 0.025, dmgMin: 5, dmgMax: 15, knock: 0.03, shake: 0.6 },
  shotgun: { ammo: 'shells', rate: 0.95, pellets: 7, spread: 0.10, dmgMin: 5, dmgMax: 15, knock: 0.045, shake: 2.2 }
};
export var WEAPON_ORDER = ['fist', 'pistol', 'shotgun'];
var AMMO_NAMES = { bullets: 'BULLETS', shells: 'SHELLS' };

// h = body height in cells (1 cell = 2 m)
export var MOBS = {
  imp: { hp: 40, speed: 1.7, radius: 0.35, painChance: 0.75, ranged: true, melee: false, h: 0.85, attackDmg: [8, 20] },
  gnasher: { hp: 110, speed: 2.9, radius: 0.42, painChance: 0.5, ranged: false, melee: true, h: 0.7, attackDmg: [4, 16], fleeBelow: 0.4 },
  knight: { hp: 400, speed: 1.9, radius: 0.48, painChance: 0.2, ranged: true, melee: true, h: 1.3, attackDmg: [10, 26] },
  riley: { hp: 900, speed: 2.4, radius: 0.4, painChance: 0.12, ranged: true, melee: true, h: 0.95, attackDmg: [10, 20], boss: true }
};
var MOB_CHARS = { i: 'imp', g: 'gnasher', K: 'knight', Y: 'riley' };

export var ITEMS = {
  h: { msg: 'PICKED UP A STIMPACK.', snd: 'health' },
  '+': { msg: 'PICKED UP A MEDIKIT.', snd: 'health' },
  b: { msg: 'PICKED UP A CLIP.', snd: 'pickup' },
  a: { msg: 'PICKED UP A BOX OF SHELLS.', snd: 'pickup' },
  A: { msg: 'PICKED UP THE ARMOR!', snd: 'pickup' },
  2: { msg: 'YOU GOT THE SHOTGUN!', snd: 'weaponUp' },
  r: { msg: 'PICKED UP THE RED KEYCARD.', snd: 'keyPickup' },
  u: { msg: 'PICKED UP THE BLUE KEYCARD.', snd: 'keyPickup' },
  P: { msg: 'PHOENIX ORB! YOU FEEL REBORN!', snd: 'orb' }
};

export var DIFFS = [
  { name: 'ROOKIE', dmg: 0.5, ammo: 2, desc: 'DEMONS HIT HALF AS HARD AND AMMO IS DOUBLED. GREAT FOR A FIRST RUN.' },
  { name: 'WARRIOR', dmg: 1, ammo: 1, desc: 'THE FIGHT AS IT WAS MEANT TO BE.' },
  { name: 'INFERNO', dmg: 1.5, ammo: 1, desc: 'DEMONS HIT HARDER. FOR VETERANS WHO KNOW EVERY CORNER.' }
];

var TIPS = {
  run: 'TIP: HOLD SHIFT TO RUN.',
  jump: 'TIP: SPACE JUMPS. C CROUCHES. LOOK UP AND DOWN WITH THE MOUSE.',
  map: 'TIP: LOST? PRESS TAB FOR THE MAP.',
  weapons: 'TIP: PRESS 1 2 3, OR SCROLL THE MOUSE WHEEL, TO SWITCH WEAPONS. Q SWAPS BACK.',
  key: 'TIP: THE MATCHING DOOR IS MARKED IN COLOR ON YOUR MAP (TAB).',
  lowAmmo: 'TIP: LOW ON AMMO? YOUR FIST (1) NEVER RUNS OUT, AND IT IS SILENT.',
  lowHealth: 'TIP: LOW HEALTH! BACK OFF AND LOOK FOR STIMPACKS AND MEDIKITS.',
  hurtDir: 'TIP: THE RED MARKS AROUND YOUR AIM POINT AT WHATEVER HIT YOU.',
  secret: 'TIP: WALLS WITH A CRACK MAY HIDE SECRETS. PRESS E ON THEM.',
  torches: 'TIP: A PAIR OF TORCHES BESIDE A DOOR MEANS IT MATTERS. FOLLOW THEM.',
  lift: 'TIP: STAND ON A GLOWING PLATFORM TO RIDE IT UP.',
  barrel: 'TIP: A DEMON IS NEXT TO A BARREL. SHOOT THE BARREL!',
  meet_imp: 'TIP: IMPS THROW FIREBALLS. STRAFE WITH A AND D TO DODGE.',
  meet_gnasher: 'TIP: GNASHERS CHARGE AND BITE. BACK AWAY WHILE YOU SHOOT.',
  meet_knight: 'TIP: THE EMBER KNIGHT IS TOUGH. KEEP YOUR DISTANCE AND USE SHELLS.'
};

export function createGame(opts) {
  opts = opts || {};
  var LEVELS = opts.levels;
  var rng = opts.rng || Math.random;
  var storage = opts.storage || null;
  var settings = opts.settings || { difficulty: 1, tips: false, seenTips: {} };
  var onProgress = opts.onProgress || function () { };

  var keys = {};
  var fireHeld = false;
  var mode = 'title';
  var levelIndex = 0;
  var G = null;
  var interStats = null;

  function rnd() { return rng(); }
  function rndIn(a, b) { return a + rng() * (b - a); }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function d2(ax, az, bx, bz) { var dx = ax - bx, dz = az - bz; return dx * dx + dz * dz; }
  function diff() { return DIFFS[settings.difficulty] || DIFFS[1]; }

  function ev(t, name, x, y, z, extra) {
    var e = { t: t, name: name, x: x, y: y, z: z };
    if (extra) for (var k in extra) e[k] = extra[k];
    G.events.push(e);
  }
  function sound(name, at) {
    if (at) ev('sound', name, at.x, (at.y || 0) + 0.5, at.z); else ev('sound', name, G.p.x, G.p.y + 0.8, G.p.z, { local: true });
  }

  // ---- level setup ---------------------------------------------------------------

  function makeMob(kind, x, z, y) {
    var def = MOBS[kind];
    return {
      kind: kind, mob: true, x: x, z: z, y: y, hp: def.hp, radius: def.radius, speed: def.speed, h: def.h,
      state: 'idle', st: 0, animT: rnd(), cool: rndIn(0.5, 1.5), moveAng: 0, retarget: 0,
      losT: rnd() * 0.3, los: false, target: null, lostT: 0, fleeNext: false, strafeSide: rnd() < 0.5 ? 1 : -1, flashT: 0
    };
  }

  function levelInfo(L) {
    var s = L.map.join('');
    return {
      boss: s.indexOf('Y') >= 0,
      keys: { red: s.indexOf('R') >= 0 || s.indexOf('r') >= 0, blue: s.indexOf('U') >= 0 || s.indexOf('u') >= 0 }
    };
  }

  function snapshotGear(p) {
    return { hp: Math.max(p.hp, 1), armor: p.armor, ammo: { bullets: p.ammo.bullets, shells: p.ammo.shells }, shotgun: p.weapons.shotgun, weapon: p.weapon };
  }

  function startLevel(idx, keepGear, gear) {
    levelIndex = idx;
    var L = LEVELS[idx];
    var W = buildWorld(L);
    var m = L.map;
    var old = gear || (keepGear && G ? snapshotGear(G.p) : null);
    var p = {
      x: 0, z: 0, y: 0, ang: L.playerAngle || 0, pitch: 0, vx: 0, vz: 0, vy: 0, onGround: true, crouch: false, eyeH: PLAYER.eye,
      hp: old ? old.hp : 100, armor: old ? old.armor : 0,
      ammo: old ? { bullets: old.ammo.bullets, shells: old.ammo.shells } : { bullets: 50, shells: 0 },
      weapons: { fist: true, pistol: true, shotgun: old ? old.shotgun : false },
      keys: { red: false, blue: false },
      weapon: old && old.shotgun ? old.weapon : 'pistol',
      nextWeapon: null, prevWeapon: null, raiseT: 0.3, lowerT: 0, cool: 0, fireT: 1,
      dead: false, deadT: 0, painT: 0, grinT: 0, dmgFlash: 0, bonusFlash: 0, jumpHeld: false, landT: 0
    };
    if (!hasAmmo(p, p.weapon)) p.weapon = bestWeapon(p);

    var ents = [], secrets = [], exitCell = null;
    for (var z = 0; z < m.length; z++) {
      for (var x = 0; x < m[0].length; x++) {
        var ch = m[z][x], cx = x + 0.5, cz = z + 0.5, fy = floorAt(W, x, z);
        if (ch === 'p') { p.x = cx; p.z = cz; p.y = fy; }
        else if (MOB_CHARS[ch]) { var mob = makeMob(MOB_CHARS[ch], cx, cz, fy); if (mob.kind === 'riley') setupRiley(mob); ents.push(mob); }
        else if (ch === 'o') ents.push({ kind: 'barrel', mob: true, barrel: true, x: cx, z: cz, y: fy, hp: 15, radius: 0.3, h: 0.55, state: 'idle', st: 0 });
        else if (ch === 't') ents.push({ kind: 'torch', x: cx, z: cz, y: fy, h: 0.95, animT: rnd() });
        else if (ITEMS[ch]) ents.push({ kind: 'pickup', item: ch, x: cx, z: cz, y: fy, h: 0.3, bob: rnd() * 6 });
        else if (ch === '*') secrets.push({ x: x, z: z, found: false });
        if (ch === 'X') exitCell = { x: x, z: z };
      }
    }
    var totalKills = 0, totalItems = 0;
    ents.forEach(function (e) { if (e.mob && !e.barrel) totalKills++; if (e.kind === 'pickup') totalItems++; });

    G = {
      L: L, W: W, mw: W.mw, mh: W.mh, doors: W.doors, ents: ents, p: p, secrets: secrets,
      seen: new Uint8Array(W.mw * W.mh), msgs: [], events: [], time: 0, notice: null,
      stats: { kills: 0, totalKills: totalKills, items: 0, totalItems: totalItems, secrets: 0, totalSecrets: secrets.length },
      exitT: -1, flow: new Int16Array(W.mw * W.mh), flowT: 0, infightSeen: false, boss: null,
      shotId: 0, firing: false, input: { strafe: 0, moving: false, vx: 0, vz: 0 },
      startGear: old, info: levelInfo(L), exitCell: exitCell,
      hurtDirs: [], hitT: 0, killT: 0, blockT: 0, shake: 0, hitstop: 0, killer: null,
      tipQueue: [], tipT: 3, usedMap: false, ranT: 0, jumped: false, spotT: 0, started: true
    };
    ents.forEach(function (e) { if (e.kind === 'riley') G.boss = e; });
    mode = 'game';
    message(L.name);
    notice(currentObjective(), '#f0d848', 3.5);
    return G;
  }

  function retryLevel() {
    var g = G.startGear;
    if (g) {
      g = { hp: Math.max(g.hp, 100), armor: g.armor, ammo: { bullets: Math.max(g.ammo.bullets, 50), shells: g.shotgun ? Math.max(g.ammo.shells, 8) : g.ammo.shells }, shotgun: g.shotgun, weapon: g.weapon };
    }
    startLevel(levelIndex, false, g);
  }

  function message(text, color, secs) {
    G.msgs.push({ text: text, t: secs || 3, color: color });
    if (G.msgs.length > 4) G.msgs.shift();
  }
  function notice(text, color, secs) { G.notice = { text: text, color: color || '#f0d848', t: secs || 2.5, max: secs || 2.5 }; }
  function shake(px) { if (G) G.shake = Math.min(6, Math.max(G.shake, px)); }

  function tip(id) {
    if (!G || !settings.tips || (settings.seenTips && settings.seenTips[id])) return;
    if (G.tipQueue.indexOf(id) < 0) G.tipQueue.push(id);
  }
  function updateTips(dt) {
    G.tipT -= dt;
    if (G.tipT > 0 || !G.tipQueue.length) return;
    var id = G.tipQueue.shift();
    if (settings.seenTips[id]) return;
    settings.seenTips[id] = true;
    if (opts.saveSettings) opts.saveSettings();
    message(TIPS[id], '#8fe0a0', 6);
    G.tipT = 7;
  }

  function currentObjective() {
    if (!G) return '';
    var info = G.info, p = G.p;
    if (info.keys.blue && !p.keys.blue) return 'FIND THE BLUE KEYCARD';
    if (info.keys.red && !p.keys.red) return 'FIND THE RED KEYCARD';
    if (info.boss) return 'DEFEAT RILEY';
    return 'FIND THE EXIT SWITCH';
  }

  // ---- weapons -----------------------------------------------------------------

  function hasAmmo(p, name) { var w = WEAPONS[name]; return !w.ammo || p.ammo[w.ammo] > 0; }
  function bestWeapon(p) {
    for (var i = WEAPON_ORDER.length - 1; i >= 0; i--) { var n = WEAPON_ORDER[i]; if (p.weapons[n] && hasAmmo(p, n)) return n; }
    return 'fist';
  }
  function switchWeapon(name, quiet) {
    if (mode !== 'game' || !G || G.p.dead) return false;
    var p = G.p;
    if (!p.weapons[name]) { if (!quiet) message('YOU HAVEN\'T FOUND THE ' + name.toUpperCase() + ' YET.'); return false; }
    if (!hasAmmo(p, name)) { if (!quiet) { message('NO ' + AMMO_NAMES[WEAPONS[name].ammo] + ' FOR THE ' + name.toUpperCase() + '.'); sound('noAmmo'); } return false; }
    if (name === p.weapon) { if (p.nextWeapon && !(p.lowerT > 0)) p.nextWeapon = null; return false; }
    if (name === p.nextWeapon) return false;
    p.prevWeapon = p.weapon; p.nextWeapon = name; p.autoFist = false;
    return true;
  }
  function cycleWeapon(dir) {
    var p = G.p, cur = WEAPON_ORDER.indexOf(p.nextWeapon || p.weapon);
    for (var k = 1; k < WEAPON_ORDER.length; k++) {
      var n = WEAPON_ORDER[(cur + dir * k + WEAPON_ORDER.length * 2) % WEAPON_ORDER.length];
      if (p.weapons[n] && hasAmmo(p, n)) { switchWeapon(n, true); return; }
    }
  }
  function quickSwitch() {
    var p = G.p;
    if (p.prevWeapon && p.prevWeapon !== p.weapon && p.weapons[p.prevWeapon] && hasAmmo(p, p.prevWeapon)) switchWeapon(p.prevWeapon, true);
    else cycleWeapon(-1);
  }

  function eyeY() { return G.p.y + G.p.eyeH; }
  function playerDist(x, z) { return Math.sqrt(d2(x, z, G.p.x, G.p.z)); }

  // hitscan in 3D: yaw + pitch; demons are upright cylinders
  function fireHitscan(yaw, pitch, dmgMin, dmgMax, isMelee, knock) {
    var p = G.p, cp = Math.cos(pitch);
    var dx = Math.cos(yaw) * cp, dz = Math.sin(yaw) * cp, dy = Math.sin(pitch);
    var ox = p.x, oy = eyeY(), oz = p.z, range = isMelee ? 1.4 : 40;
    var wall = castRay(G.W, ox, oy, oz, dx, dy, dz, range);
    var best = null, bestT = wall.dist + 0.05;
    for (var i = 0; i < G.ents.length; i++) {
      var e = G.ents[i];
      if (!e.mob || e.state === 'die' || e.state === 'dead' || e.gone) continue;
      var t = rayCylinder(ox, oy, oz, dx, dy, dz, e);
      if (t !== null && t > 0.1 && t < bestT) { best = e; bestT = t; }
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
          slideMove(G.W, best, Math.cos(yaw) * kb, Math.sin(yaw) * kb, best.radius, best.h, STEP_UP);
        }
      }
      ev('fx', best.barrel || best.kind === 'riley' ? 'spark' : 'blood', ox + dx * bestT, oy + dy * bestT, oz + dz * bestT, { dx: -dx, dy: -dy, dz: -dz });
    } else if (!isMelee && wall.kind !== 'none') {
      ev('fx', 'puff', wall.x - dx * 0.03, wall.y - dy * 0.03, wall.z - dz * 0.03, { surface: wall.kind });
    } else if (isMelee) sound('whiff');
    return best;
  }

  // distance along a ray to an upright cylinder (feet e.y, height e.h), or null
  function rayCylinder(ox, oy, oz, dx, dy, dz, e) {
    var r = e.radius + 0.06, fx = ox - e.x, fz = oz - e.z;
    var a = dx * dx + dz * dz, b = 2 * (fx * dx + fz * dz), c = fx * fx + fz * fz - r * r;
    if (a < 1e-9) return null;
    var disc = b * b - 4 * a * c;
    if (disc < 0) return null;
    var sq = Math.sqrt(disc), t0 = (-b - sq) / (2 * a), t1 = (-b + sq) / (2 * a);
    var t = t0 > 0 ? t0 : t1;
    if (t < 0) return null;
    var y = oy + dy * t;
    if (y >= e.y && y <= e.y + e.h) return t;
    // entering through the top or bottom cap
    if (Math.abs(dy) > 1e-6) {
      var tc = ((dy < 0 ? e.y + e.h : e.y) - oy) / dy;
      if (tc > 0) { var hx = ox + dx * tc - e.x, hz = oz + dz * tc - e.z; if (hx * hx + hz * hz <= r * r) return tc; }
    }
    return null;
  }

  function alive(e) { return !!e && !e.gone && e.state !== 'die' && e.state !== 'dead'; }

  // ---- damage --------------------------------------------------------------------

  function damageMob(e, dmg, src) {
    if (e.state === 'die' || e.state === 'dead') return;
    if (e.kind === 'riley' && rileyTakeHit(e, src)) return;
    e.hp -= dmg;
    e.flashT = 0.07;
    if (e.barrel) {
      e.blame = alive(src) ? src : null;
      if (e.hp <= 0 && e.state !== 'boom') { e.state = 'boom'; e.st = 0.08; }
      return;
    }
    var def = MOBS[e.kind];
    wakeMob(e);
    if (def.boss) { /* no grudges */ }
    else if (src && src !== e && alive(src) && !src.barrel) {
      if (e.target !== src && !G.infightSeen && playerDist(e.x, e.z) < 14) { G.infightSeen = true; message('THE DEMONS TURN ON EACH OTHER!'); }
      e.target = src; e.lostT = 0;
    } else if (!src) e.target = null;
    if (e.hp <= 0) {
      e.state = 'die'; e.st = 0;
      G.stats.kills++;
      if (!def.boss) sound('enemyDie', e);
      ev('fx', 'gib', e.x, e.y + e.h * 0.6, e.z, { kind: e.kind });
    } else if (rnd() < def.painChance && !(def.boss && e.state === 'windup')) {
      e.state = 'pain'; e.st = def.boss ? 0.25 : 0.35;
      if (def.fleeBelow && e.hp < def.hp * def.fleeBelow) e.fleeNext = true;
      sound('enemyPain', e);
    }
    if (e.kind === 'riley') rileyAfterHit(e);
  }

  function explodeBarrel(e) {
    e.state = 'dead'; e.dead = true; e.gone = true;
    sound('barrelBoom', e);
    ev('fx', 'explosion', e.x, e.y + 0.3, e.z);
    var R = 2.3, blame = alive(e.blame) ? e.blame : null;
    for (var i = 0; i < G.ents.length; i++) {
      var o = G.ents[i];
      if (!o.mob || o === e || o.state === 'dead' || o.state === 'die') continue;
      var d = Math.sqrt(d2(o.x, o.z, e.x, e.z) + Math.pow(o.y - e.y, 2));
      if (d < R && hasLOS(G.W, e.x, e.y + 0.3, e.z, o.x, o.y + o.h / 2, o.z)) {
        if (o.barrel) { if (o.state !== 'boom') { o.state = 'boom'; o.st = rndIn(0.1, 0.25); o.blame = blame; } }
        else damageMob(o, ((R - d) / R * 90) | 0, blame);
      }
    }
    makeNoise(e.x, e.z, 10);
    var pd = Math.sqrt(d2(G.p.x, G.p.z, e.x, e.z) + Math.pow(G.p.y - e.y, 2));
    shake(6 / (1 + pd * 0.35));
    if (pd < R && hasLOS(G.W, e.x, e.y + 0.3, e.z, G.p.x, eyeY(), G.p.z)) hurtPlayer(((R - pd) / R * 70) | 0, e);
  }

  function hurtPlayer(dmg, src) {
    var p = G.p;
    if (p.dead || dmg <= 0 || G.exitT >= 0) return;
    dmg = Math.max(1, Math.round(dmg * diff().dmg));
    if (src) {
      var a = Math.atan2(src.z - p.z, src.x - p.x);
      G.hurtDirs.push({ ang: a, t: 1 });
      if (G.hurtDirs.length > 6) G.hurtDirs.shift();
      var rel = Math.atan2(Math.sin(a - p.ang), Math.cos(a - p.ang));
      if (Math.abs(rel) > 0.9) tip('hurtDir');
      G.killer = src.kind;
    }
    var absorbed = Math.min(p.armor, Math.ceil(dmg / 3));
    p.armor -= absorbed; dmg -= absorbed; p.hp -= dmg;
    p.dmgFlash = Math.min(0.65, p.dmgFlash + dmg / 55);
    shake(Math.min(4, 1 + dmg / 8));
    p.painT = 0.6;
    if (p.hp <= 0) {
      p.hp = 0; p.dead = true; p.deadT = 0;
      sound('playerDie');
      if (rileyActive(G.boss)) { rileySay(G.boss, RILEY.line('playerDied', G.boss.profile)); rileySettle(G.boss, false); }
    } else {
      sound('playerPain');
      if (p.hp < 30) tip('lowHealth');
    }
  }

  function throwProjectile(e, green, tx, ty, tz, speed, dmg) {
    var sy = e.y + e.h * 0.65;
    var dx = tx - e.x, dy = ty - sy, dz = tz - e.z;
    var d = Math.sqrt(dx * dx + dy * dy + dz * dz) || 1;
    var sp = speed || (green ? 5.5 : 7);
    G.ents.push({
      kind: 'proj', x: e.x + dx / d * 0.5, y: sy + dy / d * 0.5, z: e.z + dz / d * 0.5,
      vx: dx / d * sp, vy: dy / d * sp, vz: dz / d * sp, h: 0.2, green: !!green, animT: 0, owner: e,
      dmg: dmg || (green ? rndIn(10, 28) : rndIn(7, 20))
    });
    sound(e.kind === 'riley' ? 'rileyShoot' : 'impShoot', e);
  }

  // ---- hearing and paths --------------------------------------------------------

  function soundPasses(from, x, z) { return !solidCell(G.W, x, z); }

  // a demon can walk to a neighbour if it's open (or a door it can open) and the step is small
  function mobStep(from, x, z) {
    var W = G.W, c = cellAt(W, x, z);
    if (c !== 0) {
      if (!DOOR_IDS[c]) return false;
      var d = doorAt(W, x, z);
      if (!(d.open >= 0.9 || (!d.locked && !d.secret))) return false;
    }
    return W.floor[z * W.mw + x] - W.floor[from] <= STEP_UP + 1e-4;
  }

  function makeNoise(x, z, steps) {
    var heard = new Int16Array(G.mw * G.mh);
    flood(G.W, x, z, steps, soundPasses, heard);
    for (var i = 0; i < G.ents.length; i++) {
      var e = G.ents[i];
      if (!e.mob || e.barrel || e.state !== 'idle' || MOBS[e.kind].boss) continue;
      if (heard[Math.floor(e.z) * G.mw + Math.floor(e.x)] >= 0) wakeMob(e);
    }
  }

  function wakeMob(e) {
    if (e.state !== 'idle') return;
    e.state = 'chase'; e.st = 0;
    sound(e.kind === 'knight' ? 'knightSight' : e.kind === 'riley' ? 'rileySight' : 'impSight', e);
  }

  // flow runs backwards from the player: a demon follows falling numbers,
  // so the flood asks "can a demon walk from there to here?"
  function updateFlow() {
    flood(G.W, G.p.x, G.p.z, 9999, function (from, x, z) {
      var to = from, W = G.W, c = cellAt(W, x, z);
      if (c !== 0) {
        if (!DOOR_IDS[c]) return false;
        var d = doorAt(W, x, z);
        if (!(d.open >= 0.9 || (!d.locked && !d.secret))) return false;
      }
      return W.floor[to] - W.floor[z * W.mw + x] <= STEP_UP + 1e-4;
    }, G.flow);
  }

  function flowHeading(e) {
    var mw = G.mw, cx = Math.floor(e.x), cz = Math.floor(e.z);
    var best = G.flow[cz * mw + cx];
    if (best <= 0) return null;
    var bx = -1, bz = -1;
    for (var k = 0; k < 4; k++) {
      var nx = cx + (k === 0 ? 1 : k === 1 ? -1 : 0), nz = cz + (k === 2 ? 1 : k === 3 ? -1 : 0);
      if (nx < 0 || nz < 0 || nx >= mw || nz >= G.mh) continue;
      var f = G.flow[nz * mw + nx];
      if (f >= 0 && f < best) { best = f; bx = nx; bz = nz; }
    }
    if (bx < 0) return null;
    return Math.atan2(bz + 0.5 - e.z, bx + 0.5 - e.x);
  }

  // ---- doors, lifts, use -------------------------------------------------------------

  function openDoor(d, byPlayer) {
    if (d.state === 'closed' || d.state === 'closing') {
      d.state = 'opening';
      if (byPlayer) d.used = true;
      sound('doorOpen', { x: d.x + 0.5, y: floorAt(G.W, d.x, d.z), z: d.z + 0.5 });
      if (d.secret && !d.found) d.found = true;
    } else if (byPlayer && d.state === 'open') {
      d.state = 'closing';
      sound('doorClose', { x: d.x + 0.5, y: floorAt(G.W, d.x, d.z), z: d.z + 0.5 });
    }
  }
  function overlapsCell(x, z, r, cx, cz) { return x + r > cx && x - r < cx + 1 && z + r > cz && z - r < cz + 1; }
  function entityInDoor(d) {
    if (overlapsCell(G.p.x, G.p.z, PLAYER.r, d.x, d.z)) return true;
    for (var i = 0; i < G.ents.length; i++) {
      var e = G.ents[i];
      if (e.mob && !e.barrel && e.state !== 'dead' && e.state !== 'die' && overlapsCell(e.x, e.z, e.radius, d.x, d.z)) return true;
    }
    return false;
  }
  function updateDoors(dt) {
    for (var k in G.doors) {
      var d = G.doors[k];
      if (d.state === 'opening') { d.open += dt * 1.6; if (d.open >= 1) { d.open = 1; d.state = 'open'; d.timer = d.secret ? 9999 : 4; } }
      else if (d.state === 'open') {
        d.timer -= dt;
        if (d.timer <= 0 && !entityInDoor(d)) { d.state = 'closing'; sound('doorClose', { x: d.x + 0.5, y: 0, z: d.z + 0.5 }); }
      } else if (d.state === 'closing') {
        if (entityInDoor(d)) { d.state = 'opening'; continue; }
        d.open -= dt * 1.6;
        if (d.open <= 0) { d.open = 0; d.state = 'closed'; }
      }
    }
  }

  function standing(e, x, z) { return overlapsCell(e.x, e.z, (e.radius || PLAYER.r) * 0.7, x, z) && Math.abs(e.y - floorAt(G.W, x, z)) < 0.05; }

  function updateLiftsAll(dt) {
    var p = G.p;
    updateLifts(G.W, dt, function (x, z) {
      if (standing(p, x, z)) return true;
      for (var i = 0; i < G.ents.length; i++) { var e = G.ents[i]; if (e.mob && alive(e) && standing(e, x, z)) return true; }
      return false;
    }, function (lf, what) { sound(what === 'start' ? 'doorOpen' : 'doorClose', { x: lf.x + 0.5, y: lf.pos, z: lf.z + 0.5 }); });
    // riders move with the platform
    G.W.lifts.forEach(function (lf) {
      if (!lf.moved) return;
      [p].concat(G.ents).forEach(function (e) {
        if ((e === p || (e.mob && alive(e))) && overlapsCell(e.x, e.z, (e.radius || PLAYER.r) * 0.7, lf.x, lf.z) && Math.abs(e.y - (lf.pos - lf.moved)) < 0.06) e.y = lf.pos;
      });
    });
  }

  function useTarget() {
    var p = G.p, c = Math.cos(p.ang), s = Math.sin(p.ang);
    for (var t = 0.4; t <= 1.3; t += 0.3) {
      var cx = Math.floor(p.x + c * t), cz = Math.floor(p.z + s * t);
      var id = cellAt(G.W, cx, cz);
      if (id === 0) continue;
      if (DOOR_IDS[id]) {
        var d = doorAt(G.W, cx, cz);
        if (d.open >= 0.9 && d.state === 'open' && Math.floor(p.x) === cx && Math.floor(p.z) === cz) continue;
        return { kind: 'door', door: d };
      }
      if (id === 9) return { kind: 'switch', x: cx, z: cz };
      return null;
    }
    return null;
  }
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
      if (d.locked && !p.keys[d.locked]) { sound('locked'); message('YOU NEED THE ' + d.locked.toUpperCase() + ' KEYCARD.'); tip('key'); }
      else openDoor(d, true);
    } else if (u.kind === 'switch') {
      G.W.cells[u.z * G.mw + u.x] = 10;
      sound('switchFlip');
      notice('LEVEL COMPLETE!', '#58e068', 2);
      G.exitT = 0.8;
    }
  }

  // ---- demons ---------------------------------------------------------------------

  function mobGround(e) { e.y = groundUnder(G.W, e.x, e.z, e.radius * 0.6); }

  function updateMob(e, dt) {
    var p = G.p, def = MOBS[e.kind];
    e.animT += dt; e.st -= dt; e.cool -= dt; e.flashT -= dt;
    if (e.target && !alive(e.target)) { e.target = null; e.cool = Math.min(e.cool, 0.4); }
    var tgt = e.target;
    var tx = tgt ? tgt.x : p.x, tz = tgt ? tgt.z : p.z, ty = tgt ? tgt.y + tgt.h * 0.6 : p.y + p.eyeH * 0.8;
    e.losT -= dt;
    if (e.losT <= 0) { e.losT = 0.2 + rnd() * 0.1; e.los = hasLOS(G.W, e.x, e.y + e.h * 0.8, e.z, tx, ty, tz); }
    var dx = tx - e.x, dz = tz - e.z, d = Math.sqrt(dx * dx + dz * dz);
    if (tgt) { e.lostT = e.los ? 0 : e.lostT + dt; if (e.lostT > 4) { e.target = null; e.lostT = 0; return; } }

    if (e.state === 'idle') { if (e.los && d < 9 && !p.dead) wakeMob(e); return; }
    if (e.state === 'pain') {
      if (e.st <= 0) {
        if (e.fleeNext) { e.fleeNext = false; e.state = 'flee'; e.st = rndIn(0.9, 1.6); e.moveAng = Math.atan2(-dz, -dx) + rndIn(-0.6, 0.6); }
        else e.state = 'chase';
      }
      return;
    }
    if (e.state === 'flee') {
      if (!slideMove(G.W, e, Math.cos(e.moveAng) * e.speed * 1.1 * dt, Math.sin(e.moveAng) * e.speed * 1.1 * dt, e.radius, e.h, STEP_UP)) e.moveAng += (rnd() < 0.5 ? 1 : -1) * Math.PI / 2;
      mobGround(e);
      if (e.st <= 0) { e.state = 'chase'; e.cool = 0; e.retarget = 0; sound('impSight', e); }
      return;
    }
    if (e.state === 'die') { if (e.st <= -0.5) e.state = 'dead'; return; }
    if (e.state === 'dead') return;

    if (e.state === 'windup') {
      if (e.st <= 0) {
        e.state = 'chase';
        if (!tgt && p.dead) return;
        if (def.melee && d < 1.9 && Math.abs(ty - (e.y + e.h * 0.5)) < 1.2) {
          if (e.los) {
            var dmg = (def.attackDmg[0] + rnd() * (def.attackDmg[1] - def.attackDmg[0])) | 0;
            if (tgt) damageMob(tgt, dmg, e); else hurtPlayer(dmg, e);
            sound('punch', e);
          }
        } else if (def.ranged && e.los) throwProjectile(e, e.kind === 'knight', tx, ty, tz);
        e.cool = rndIn(0.9, 1.9);
      }
      return;
    }

    if (!tgt && p.dead) return;
    e.detourT = (e.detourT || 0) - dt;
    e.pathT = (e.pathT || 0) - dt;
    // can't see you, or can see you but you're up/down a level: follow the route
    var otherLevel = !tgt && Math.abs(p.y - e.y) > STEP_UP;
    var pathing = !tgt && (!e.los || e.pathT > 0 || otherLevel) && e.detourT <= 0 ? flowHeading(e) : null;
    e.retarget -= dt;
    if (pathing !== null) e.moveAng = pathing;
    else if (e.retarget <= 0) {
      e.retarget = rndIn(0.35, 0.8);
      var toT = Math.atan2(dz, dx);
      if (def.ranged && !def.melee && e.los && d < 7) { if (rnd() < 0.3) e.strafeSide = -e.strafeSide; e.moveAng = toT + e.strafeSide * rndIn(1.1, 1.8); }
      else e.moveAng = toT + (d > 2.2 ? rndIn(-0.7, 0.7) : rndIn(-0.25, 0.25));
    }
    var stopDist = def.melee ? 0.95 : 1.6;
    if (d > stopDist) {
      var sx0 = e.x, sz0 = e.z;
      var moved = slideMove(G.W, e, Math.cos(e.moveAng) * e.speed * dt, Math.sin(e.moveAng) * e.speed * dt, e.radius, e.h, STEP_UP);
      if (!moved && pathing !== null) {
        // hugging a ledge or corner: ease back toward the middle of this cell's lane
        var ccx = Math.floor(e.x) + 0.5 - e.x, ccz = Math.floor(e.z) + 0.5 - e.z;
        slideMove(G.W, e, ccx * Math.min(1, dt * 6), ccz * Math.min(1, dt * 6), e.radius, e.h, STEP_UP);
      } else if (!moved) {
        var ax = Math.floor(e.x + Math.cos(e.moveAng) * 0.7), az = Math.floor(e.z + Math.sin(e.moveAng) * 0.7);
        var dr = doorAt(G.W, ax, az);
        if (dr && !dr.locked && !dr.secret && dr.state === 'closed') openDoor(dr, false);
        e.moveAng += (rnd() < 0.5 ? 1 : -1) * Math.PI / 2 * rndIn(0.6, 1.2);
        e.retarget = rndIn(0.25, 0.5);
        e.pathT = 0.8;
      }
      for (var i = 0; i < G.ents.length; i++) {
        var o = G.ents[i];
        if (o === e || !o.mob || o.state === 'dead' || o.state === 'die' || o.gone) continue;
        var ox = e.x - o.x, oz = e.z - o.z, od2 = ox * ox + oz * oz, min = e.radius + (o.radius || 0.3);
        if (od2 > 1e-4 && od2 < min * min && Math.abs(o.y - e.y) < 0.5) {
          var od = Math.sqrt(od2), push = (min - od) * 0.5;
          if (!probe(G.W, e.x + ox / od * push, e.z + oz / od * push, e.radius, e.y, e.h, STEP_UP).blocked) { e.x += ox / od * push; e.z += oz / od * push; }
        }
      }
      var moved2 = d2(e.x, e.z, sx0, sz0), want = e.speed * dt * 0.3;
      e.stuckT = moved2 < want * want ? (e.stuckT || 0) + dt : 0;
      if (e.stuckT > 0.4) { e.stuckT = 0; e.detourT = rndIn(0.5, 0.9); e.moveAng += (rnd() < 0.5 ? 1 : -1) * Math.PI / 2; e.retarget = e.detourT; }
      mobGround(e);
    }
    if (e.cool <= 0 && e.los) {
      if (def.melee && d < 1.4 && Math.abs(ty - (e.y + e.h * 0.5)) < 1.2) { e.state = 'windup'; e.st = 0.35; }
      else if (def.ranged && d > 1.2 && d < 14 && rnd() < dt * 1.4) { e.state = 'windup'; e.st = 0.45; }
    }
  }

  // ---- Riley -----------------------------------------------------------------------

  function setupRiley(e) {
    var mem = RILEY.recall(storage);
    e.mem = mem; e.tune = RILEY.tuning(mem);
    e.hp = e.maxHp = Math.round(MOBS.riley.hp * e.tune.hpScale);
    e.profile = RILEY.newProfile();
    e.phase = 1;
    e.cools = { volley: 1, lead: 3, summon: 8, shield: 5, melee: 0 };
    e.move = null; e.moveT = 0; e.shieldT = 0; e.talkT = 0; e.flankSide = 1; e.attack = null; e.settled = false;
  }
  function rileyActive(e) { return !!e && e.state !== 'idle' && alive(e); }
  function rileySay(e, text, isInsight) {
    if (!text || (isInsight && e.talkT > 0)) return false;
    message('RILEY: ' + text, '#6fe0ec', 4.5);
    sound('rileyTalk');
    e.talkT = 3.5;
    return true;
  }
  function rileyIntro(e) {
    var mem = e.mem;
    rileySay(e, RILEY.line('intro', e.profile, { memory: mem.fights > 0 ? mem : null }));
    if (mem.ease > 0) rileySay(e, RILEY.line('ease', e.profile));
    else if (e.tune.practised) rileySay(e, RILEY.line('studied', e.profile, { wins: mem.wins }));
  }
  function rileySettle(e, won) {
    if (e.settled) return;
    e.settled = true;
    RILEY.save(storage, RILEY.settle(e.mem, e.profile, won));
  }
  function countSummoned() { var n = 0; G.ents.forEach(function (e) { if (e.summoned && alive(e)) n++; }); return n; }
  function rileySummon(e) {
    var made = 0;
    for (var tries = 0; tries < 30 && made < 2; tries++) {
      var a = rnd() * Math.PI * 2, r = rndIn(1.5, 3.5), x = e.x + Math.cos(a) * r, z = e.z + Math.sin(a) * r;
      var fy = groundUnder(G.W, x, z, 0.3);
      if (probe(G.W, x, z, 0.4, fy, 0.85, 0).blocked || playerDist(x, z) < 3 || !hasLOS(G.W, e.x, e.y + 0.5, e.z, x, fy + 0.5, z)) continue;
      var imp = makeMob('imp', x, z, fy);
      imp.summoned = true; imp.state = 'chase';
      G.ents.push(imp);
      G.stats.totalKills++;
      ev('fx', 'summon', x, fy + 0.4, z);
      made++;
    }
    if (made) { rileySay(e, RILEY.line('summon', e.profile)); sound('rileySight', e); }
    e.cools.summon = 18 * e.tune.coolScale;
  }
  function rileyChoose(e, d, dx, dz) {
    var s = { los: e.los, dist: d, phase: e.phase, cool: e.cools, impsAlive: countSummoned(), playerWeapon: G.p.weapon };
    var pick = RILEY.choose(RILEY.legalMoves(s), e.profile, s, rng);
    e.move = pick.move;
    rileySay(e, RILEY.insight(e.profile, pick.why), true);
    var pr = e.profile;
    switch (pick.move) {
      case 'volley': case 'lead':
        e.state = 'windup'; e.attack = pick.move; e.st = pick.move === 'volley' ? 0.55 : 0.4; e.moveT = e.st + 0.2; break;
      case 'backoff': e.moveT = 1.0; e.moveAng = Math.atan2(-dz, -dx) + rndIn(-0.5, 0.5); break;
      case 'flank': e.flankSide = RILEY.strafeHabit(pr) > 0.3 ? RILEY.strafeSide(pr) : (rnd() < 0.5 ? 1 : -1); e.moveT = 1.3; break;
      case 'close': e.moveT = 1.2; break;
      case 'seek': e.moveT = 0.8; break;
      case 'summon': rileySummon(e); e.moveT = 0.8; break;
      case 'shield': e.shieldT = 1.6; e.moveT = 1.2; e.cools.shield = 8 * e.tune.coolScale; sound('rileyShield', e); break;
    }
  }
  function rileyAttack(e, d) {
    var p = G.p, tune = e.tune, cs = tune.coolScale * (e.phase >= 3 ? 0.7 : 1);
    if (e.attack === 'melee') {
      if (d < 1.9 && e.los) { hurtPlayer((rndIn(10, 20) * tune.dmgScale) | 0, e); sound('punch', e); }
      e.cools.melee = 1.2;
      return;
    }
    if (!e.los) return;
    var ty = p.y + p.eyeH * 0.8, base = Math.atan2(p.z - e.z, p.x - e.x);
    if (e.attack === 'volley') {
      for (var k = -1; k <= 1; k++) {
        var a = base + k * 0.2;
        throwProjectile(e, true, e.x + Math.cos(a) * d, ty, e.z + Math.sin(a) * d, 6.5, rndIn(8, 16) * tune.dmgScale);
      }
      e.cools.volley = rndIn(1.6, 2.4) * cs;
    } else if (e.attack === 'lead') {
      var sp = 9, t = d / sp;
      throwProjectile(e, true, p.x + G.input.vx * t, ty, p.z + G.input.vz * t, sp, rndIn(10, 18) * tune.dmgScale);
      e.cools.lead = rndIn(1.8, 2.8) * cs;
    }
  }
  function updateRiley(e, dt) {
    var p = G.p, pr = e.profile;
    e.animT += dt; e.st -= dt; e.talkT -= dt; e.shieldT -= dt; e.moveT -= dt; e.flashT -= dt;
    for (var ck in e.cools) e.cools[ck] -= dt;
    e.losT -= dt;
    if (e.losT <= 0) { e.losT = 0.15; e.los = hasLOS(G.W, e.x, e.y + e.h * 0.85, e.z, p.x, eyeY(), p.z); }
    var dx = p.x - e.x, dz = p.z - e.z, d = Math.sqrt(dx * dx + dz * dz);
    if (e.state === 'idle') { if (e.los && !p.dead) { wakeMob(e); rileyIntro(e); } return; }
    if (e.state === 'die') { if (e.st <= -1.2) e.state = 'dead'; return; }
    if (e.state === 'dead' || p.dead) return;
    RILEY.observe(pr, { dt: dt, los: e.los, dist: d, strafe: G.input.strafe, moving: G.input.moving });
    if (e.state === 'pain') { if (e.st <= 0) e.state = 'chase'; return; }
    if (e.state === 'windup') { if (e.st <= 0) { e.state = 'chase'; rileyAttack(e, d); } return; }
    if (d < 1.3 && e.los && e.cools.melee <= 0) { e.state = 'windup'; e.attack = 'melee'; e.st = 0.3; return; }
    if (e.moveT <= 0) { rileyChoose(e, d, dx, dz); if (e.state === 'windup') return; }
    var toP = Math.atan2(dz, dx), ang = null;
    switch (e.move) {
      case 'backoff': ang = e.moveAng; break;
      case 'close': ang = toP; break;
      case 'flank': case 'shield': ang = toP + e.flankSide * 1.35; break;
      case 'seek': ang = flowHeading(e); if (ang === null) ang = toP; break;
    }
    if (ang === null) return;
    var sp = e.speed * (e.phase >= 3 ? 1.25 : 1) * dt;
    if (!slideMove(G.W, e, Math.cos(ang) * sp, Math.sin(ang) * sp, e.radius, e.h, STEP_UP)) { e.flankSide = -e.flankSide; e.moveAng += Math.PI / 2; }
    mobGround(e);
  }
  function rileyTakeHit(e, src) {
    if (e.shieldT > 0) { ev('fx', 'spark', e.x, e.y + 0.5, e.z); sound('rileyShield', e); return true; }
    if (G.firing && e.lastShot !== G.shotId) { e.lastShot = G.shotId; e.profile.hits++; }
    if (src && !src.barrel && src.kind === 'imp') {
      var why = src.target === e ? 'impsTurned' : 'friendlyFire';
      if (!e.profile.said[why]) { e.profile.said[why] = true; rileySay(e, RILEY.line(why, e.profile)); }
    }
    return false;
  }
  function rileyAfterHit(e) {
    if (e.hp <= 0) {
      sound('rileyDerez', e);
      rileySay(e, RILEY.line('defeated', e.profile));
      rileySettle(e, true);
      G.exitT = 5;
      return;
    }
    if (e.phase < 3 && e.hp < e.maxHp * 0.33) { e.phase = 3; rileySay(e, RILEY.line('phase3', e.profile)); }
    else if (e.phase < 2 && e.hp < e.maxHp * 0.66) { e.phase = 2; rileySay(e, RILEY.line('phase2', e.profile)); rileySummon(e); }
  }

  // ---- goals and first sightings ------------------------------------------------

  // mark the cells you can see (and the walls around them) for the automap and goal marker
  function markSeen() {
    var p = G.p, ey = eyeY(), R = 12, W = G.W, px = Math.floor(p.x), pz = Math.floor(p.z);
    for (var z = Math.max(0, pz - R); z <= Math.min(G.mh - 1, pz + R); z++) {
      for (var x = Math.max(0, px - R); x <= Math.min(G.mw - 1, px + R); x++) {
        var i = z * G.mw + x;
        if (G.seen[i] || solidCell(W, x, z)) continue;
        if (!hasLOS(W, p.x, ey, p.z, x + 0.5, floorAt(W, x, z) + 0.4, z + 0.5)) continue;
        G.seen[i] = 1;
        nbrs(W, x, z).forEach(function (n) { if (W.cells[n.i] !== 0) G.seen[n.i] = 1; });
      }
    }
  }

  function spotThings() {
    markSeen();
    var p = G.p, ey = eyeY();
    function close(e, r) { return d2(e.x, e.z, p.x, p.z) < r * r && hasLOS(G.W, p.x, ey, p.z, e.x, (e.y || 0) + (e.h || 0.3) * 0.6, e.z); }
    for (var i = 0; i < G.ents.length; i++) {
      var e = G.ents[i];
      if (e.kind === 'pickup' && !e.spotted && (e.item === 'r' || e.item === 'u') && close(e, 14)) e.spotted = true;
      if (e.mob && !e.barrel && alive(e) && TIPS['meet_' + e.kind] && !settings.seenTips['meet_' + e.kind] && close(e, 11)) tip('meet_' + e.kind);
      if (e.barrel && !e.gone && !settings.seenTips.barrel && close(e, 10)) {
        for (var j = 0; j < G.ents.length; j++) {
          var m2 = G.ents[j];
          if (m2.mob && !m2.barrel && alive(m2) && m2.state !== 'idle' && d2(m2.x, m2.z, e.x, e.z) < 4) { tip('barrel'); break; }
        }
      }
      if (e.kind === 'torch' && levelIndex === 0 && G.time > 20 && close(e, 5)) tip('torches');
    }
    G.W.lifts.forEach(function (lf) { if (d2(lf.x + 0.5, lf.z + 0.5, p.x, p.z) < 16) tip('lift'); });
  }

  function goalTarget() {
    var info = G.info, p = G.p, k;
    var need = info.keys.blue && !p.keys.blue ? 'u' : info.keys.red && !p.keys.red ? 'r' : null;
    if (need) {
      for (var i = 0; i < G.ents.length; i++) {
        var e = G.ents[i];
        if (e.kind === 'pickup' && e.item === need && !e.gone) return e.spotted ? { x: e.x, y: e.y + 0.3, z: e.z } : null;
      }
      return null;
    }
    for (k in G.doors) {
      var d = G.doors[k];
      if (d.locked && !d.used && G.seen[d.z * G.mw + d.x]) return { x: d.x + 0.5, y: floorAt(G.W, d.x, d.z) + 0.8, z: d.z + 0.5 };
    }
    var ex = G.exitCell;
    if (!info.boss && ex && G.seen[ex.z * G.mw + ex.x]) return { x: ex.x + 0.5, y: 0.8, z: ex.z + 0.5 };
    return null;
  }

  // ---- pickups ---------------------------------------------------------------------

  function tryPickup(e) {
    var p = G.p, it = ITEMS[e.item], am = diff().ammo, full = null;
    switch (e.item) {
      case 'h': if (p.hp >= 100) full = 'HEALTH'; else p.hp = Math.min(100, p.hp + 10); break;
      case '+': if (p.hp >= 100) full = 'HEALTH'; else p.hp = Math.min(100, p.hp + 25); break;
      case 'A': if (p.armor >= 100) full = 'ARMOR'; else { p.armor = 100; p.grinT = 1; } break;
      case 'b': if (p.ammo.bullets >= 200) full = 'BULLETS'; else p.ammo.bullets = Math.min(200, p.ammo.bullets + 10 * am); break;
      case 'a': if (p.ammo.shells >= 50) full = 'SHELLS'; else p.ammo.shells = Math.min(50, p.ammo.shells + 4 * am); break;
      case '2':
        p.weapons.shotgun = true; p.ammo.shells = Math.min(50, p.ammo.shells + 8 * am); p.grinT = 1.2;
        if (p.weapon !== 'shotgun') switchWeapon('shotgun', true);
        notice('SHOTGUN!  PRESS 3', '#ffd23e', 2.5); tip('weapons'); break;
      case 'r': case 'u':
        var col = e.item === 'r' ? 'red' : 'blue';
        p.keys[col] = true; p.grinT = 1;
        notice(col.toUpperCase() + ' KEYCARD', col === 'red' ? '#ff5a3a' : '#6a98ff', 2.5); tip('key'); break;
      case 'P': p.hp = Math.min(200, p.hp + 100); p.grinT = 1.2; break;
    }
    if (full) { e.touching = true; message(full + ' ALREADY FULL', '#8a8478', 1.5); return; }
    e.gone = true;
    G.stats.items++;
    p.bonusFlash = Math.min(0.35, p.bonusFlash + 0.22);
    sound(it.snd);
    ev('fx', 'pickup', e.x, e.y + 0.3, e.z, { item: e.item });
    message(it.msg);
    if (p.autoFist && (e.item === 'b' || e.item === 'a')) { p.autoFist = false; switchWeapon(bestWeapon(p), true); }
  }

  // ---- the player ----------------------------------------------------------------

  function updatePlayer(dt) {
    var p = G.p;
    if (p.dead) { p.deadT += dt; p.eyeH = Math.max(0.15, p.eyeH - dt * 1.2); return; }

    // crouch (can't stand up under a low ceiling)
    var wantCrouch = !!keys.KeyC;
    if (!wantCrouch && p.crouch) {
      var room = probe(G.W, p.x, p.z, PLAYER.r, p.y, PLAYER.h, 0);
      if (!room.blocked) p.crouch = false;
    } else p.crouch = wantCrouch;
    var h = p.crouch ? PLAYER.hCrouch : PLAYER.h, targetEye = p.crouch ? PLAYER.eyeCrouch : PLAYER.eye;
    p.eyeH += (targetEye - p.eyeH) * Math.min(1, dt * 14);

    // wish direction
    var run = keys.ShiftLeft || keys.ShiftRight;
    var mvF = 0, mvS = 0;
    if (keys.KeyW || keys.ArrowUp) mvF += 1;
    if (keys.KeyS || keys.ArrowDown) mvF -= 1;
    if (keys.KeyA) mvS -= 1;
    if (keys.KeyD) mvS += 1;
    if (keys.ArrowLeft) p.ang -= 2.6 * dt;
    if (keys.ArrowRight) p.ang += 2.6 * dt;
    if (keys.PageUp) p.pitch += 1.6 * dt;
    if (keys.PageDown) p.pitch -= 1.6 * dt;
    p.pitch = clamp(p.pitch, -1.3, 1.3);
    if (mvF && mvS) { mvF *= 0.7071; mvS *= 0.7071; }
    var speed = (p.crouch ? PLAYER.walk * 0.5 : run ? PLAYER.run : PLAYER.walk);
    var c = Math.cos(p.ang), s = Math.sin(p.ang);
    var wx = (c * mvF - s * mvS) * speed, wz = (s * mvF + c * mvS) * speed;
    var accel = p.onGround ? 14 : 3;
    p.vx += (wx - p.vx) * Math.min(1, dt * accel);
    p.vz += (wz - p.vz) * Math.min(1, dt * accel);

    // jump
    if (keys.Space && !p.jumpHeld && p.onGround && !p.crouch) { p.vy = PLAYER.jumpV; p.onGround = false; G.jumped = true; sound('jump'); }
    p.jumpHeld = !!keys.Space;

    var ox = p.x, oz = p.z;
    // step while grounded, but only a jump's worth of clearance while airborne
    var step = p.onGround ? STEP_UP : Math.max(0, Math.min(JUMP_UP, 0.12));
    slideMove(G.W, p, p.vx * dt, p.vz * dt, PLAYER.r, h, step);
    if (run && (mvF || mvS)) G.ranT += dt;

    // vertical
    var ground = groundUnder(G.W, p.x, p.z, PLAYER.r);
    var ceil = probe(G.W, p.x, p.z, PLAYER.r, Math.max(p.y, ground), h, 10).ceil;
    if (p.onGround && ground < p.y - 0.02 && ground > p.y - STEP_UP) p.y = ground; // walk down steps
    else if (p.onGround && ground < p.y) p.onGround = false;                   // walked off a ledge
    if (p.onGround && ground > p.y) p.y = ground;                              // stepped up
    if (!p.onGround) {
      p.vy -= PLAYER.gravity * dt;
      p.y += p.vy * dt;
      if (ceil !== undefined && p.y + h > ceil) { p.y = ceil - h; if (p.vy > 0) p.vy = 0; }
      if (p.y <= ground) {
        if (p.vy < -5) { shake(1.2); p.landT = 0.25; }
        if (p.vy < -2) sound('land');
        p.y = ground; p.vy = 0; p.onGround = true;
      }
    }

    G.input.strafe = mvS;
    G.input.moving = p.x !== ox || p.z !== oz;
    G.input.vx = (p.x - ox) / dt; G.input.vz = (p.z - oz) / dt;

    if (levelIndex === 0) {
      if (G.time > 14 && G.ranT < 0.3) tip('run');
      if (G.time > 25 && !G.jumped) tip('jump');
      if (G.time > 40 && !G.usedMap) tip('map');
      if (G.time > 70 && !G.stats.secrets) tip('secret');
    }

    // use
    if (keys.KeyE) { if (!p.usedHeld) { p.usedHeld = true; useAction(); } } else p.usedHeld = false;

    // weapon switching
    if (p.nextWeapon && p.raiseT <= 0 && !(p.lowerT > 0)) p.lowerT = 0.15;
    if (p.lowerT > 0) { p.lowerT -= dt; if (p.lowerT <= 0) { p.weapon = p.nextWeapon || p.weapon; p.nextWeapon = null; p.raiseT = 0.15; } }
    if (p.raiseT > 0) p.raiseT -= dt;

    // firing
    p.cool -= dt; p.fireT += dt;
    var wep = WEAPONS[p.weapon];
    if (fireHeld && p.cool <= 0 && p.raiseT <= 0 && p.lowerT <= 0 && !p.nextWeapon && G.exitT < 0) {
      if (wep.ammo && p.ammo[wep.ammo] <= 0) {
        sound('noAmmo');
        var fallback = bestWeapon(p);
        message('OUT OF ' + AMMO_NAMES[wep.ammo] + '!');
        if (switchWeapon(fallback, true) && fallback === 'fist') p.autoFist = true;
        tip('lowAmmo');
        p.cool = 0.3;
      } else {
        if (wep.ammo) p.ammo[wep.ammo]--;
        p.cool = wep.rate; p.fireT = 0;
        sound(p.weapon === 'fist' ? 'punch' : p.weapon);
        if (p.weapon === 'shotgun') sound('pump');
        if (!wep.melee) { shake(wep.shake); ev('fx', 'muzzle', p.x + Math.cos(p.ang) * 0.4, eyeY() - 0.1, p.z + Math.sin(p.ang) * 0.4, { weapon: p.weapon }); }
        if (rileyActive(G.boss)) RILEY.noteShot(G.boss.profile, p.weapon, playerDist(G.boss.x, G.boss.z));
        G.shotId++; G.firing = true;
        if (wep.melee) fireHitscan(p.ang, p.pitch, wep.dmgMin, wep.dmgMax, true, wep.knock);
        else for (var pl = 0; pl < wep.pellets; pl++) {
          fireHitscan(p.ang + (rnd() - 0.5) * 2 * wep.spread, p.pitch + (rnd() - 0.5) * wep.spread, wep.dmgMin, wep.dmgMax, false, wep.knock);
        }
        G.firing = false;
        if (!wep.melee) makeNoise(p.x, p.z, 14);
      }
    }

    // pickups (must be at about the same height)
    for (var j = 0; j < G.ents.length; j++) {
      var e2 = G.ents[j];
      if (e2.kind !== 'pickup' || e2.gone) continue;
      if (d2(e2.x, e2.z, p.x, p.z) < 0.45 && Math.abs(e2.y - p.y) < 0.6) { if (!e2.touching) tryPickup(e2); }
      else e2.touching = false;
    }
    // secret floors
    var pcx = Math.floor(p.x), pcz = Math.floor(p.z);
    G.secrets.forEach(function (sec) {
      if (!sec.found && sec.x === pcx && sec.z === pcz) { sec.found = true; G.stats.secrets++; sound('secret'); notice('SECRET AREA FOUND!', '#ffd23e', 2.5); }
    });
  }

  // ---- the frame ----------------------------------------------------------------------

  function update(dt) {
    if (mode !== 'game' || !G) return;
    var p = G.p;
    G.events.length = 0;
    G.time += dt;
    p.dmgFlash = Math.max(0, p.dmgFlash - dt * 0.8);
    p.bonusFlash = Math.max(0, p.bonusFlash - dt * 1.5);
    p.painT = Math.max(0, p.painT - dt); p.grinT = Math.max(0, p.grinT - dt); p.landT = Math.max(0, p.landT - dt);
    G.shake = Math.max(0, G.shake - dt * 14);
    for (var i = 0; i < G.msgs.length; i++) G.msgs[i].t -= dt;
    while (G.msgs.length && G.msgs[0].t <= 0) G.msgs.shift();
    if (G.notice && (G.notice.t -= dt) <= 0) G.notice = null;
    G.hitT -= dt; G.killT -= dt; G.blockT -= dt;
    for (var hd = G.hurtDirs.length - 1; hd >= 0; hd--) if ((G.hurtDirs[hd].t -= dt * 0.9) <= 0) G.hurtDirs.splice(hd, 1);
    updateTips(dt);
    G.spotT -= dt;
    if (G.spotT <= 0) { G.spotT = 0.3; spotThings(); }

    if (G.exitT >= 0) {
      G.exitT -= dt;
      if (G.exitT <= 0) {
        interStats = {
          name: G.L.name, time: G.time, par: G.L.par, kills: G.stats.kills, totalKills: G.stats.totalKills,
          items: G.stats.items, totalItems: G.stats.totalItems, secrets: G.stats.secrets, totalSecrets: G.stats.totalSecrets
        };
        onProgress(levelIndex, interStats);
        mode = 'inter';
        return;
      }
    }

    updateDoors(dt);
    updateLiftsAll(dt);
    G.flowT -= dt;
    if (G.flowT <= 0) { G.flowT = 0.25; updateFlow(); }
    updatePlayer(dt);

    for (var k = G.ents.length - 1; k >= 0; k--) {
      var e = G.ents[k];
      if (e.gone) { G.ents.splice(k, 1); continue; }
      if (e.kind === 'torch') { e.animT += dt; continue; }
      if (e.kind === 'pickup') { e.bob += dt; continue; }
      if (e.kind === 'proj') {
        e.animT += dt;
        var steps = 3, hitSomething = false;
        for (var s2 = 0; s2 < steps && !hitSomething; s2++) {
          e.x += e.vx * dt / steps; e.y += e.vy * dt / steps; e.z += e.vz * dt / steps;
          var cx = Math.floor(e.x), cz = Math.floor(e.z);
          var victim = solidCell(G.W, cx, cz) || e.y < floorAt(G.W, cx, cz) || e.y > ceilAt(G.W, cx, cz) ? 'wall' : projectileVictim(e);
          if (!victim && !p.dead && d2(e.x, e.z, p.x, p.z) < 0.2 && e.y > p.y - 0.1 && e.y < p.y + (p.crouch ? PLAYER.hCrouch : PLAYER.h) + 0.1) victim = 'player';
          if (!victim) continue;
          hitSomething = true;
          if (victim === 'player') { hurtPlayer(e.dmg | 0, { x: e.x - e.vx, z: e.z - e.vz, kind: e.owner ? e.owner.kind : 'imp' }); sound('fireExplode'); }
          else { if (victim !== 'wall') damageMob(victim, e.dmg | 0, e.owner); sound('fireExplode', e); }
          ev('fx', e.green ? 'greenBurst' : 'fireBurst', e.x, e.y, e.z);
          G.ents.splice(k, 1);
        }
        continue;
      }
      if (e.barrel) { if (e.state === 'boom') { e.st -= dt; if (e.st <= 0) explodeBarrel(e); } continue; }
      if (e.kind === 'riley') updateRiley(e, dt);
      else if (e.mob) updateMob(e, dt);
    }
  }

  function projectileVictim(pr) {
    for (var i = 0; i < G.ents.length; i++) {
      var m2 = G.ents[i];
      if (!m2.mob || m2 === pr.owner || !alive(m2)) continue;
      if (!m2.barrel && pr.owner && m2.kind === pr.owner.kind) continue;
      var r = m2.radius + 0.1;
      if (d2(pr.x, pr.z, m2.x, m2.z) < r * r && pr.y >= m2.y - 0.1 && pr.y <= m2.y + m2.h + 0.1) return m2;
    }
    return null;
  }

  // the demon (or barrel) under the crosshair
  function aimTarget() {
    var p = G.p, cp = Math.cos(p.pitch), dx = Math.cos(p.ang) * cp, dz = Math.sin(p.ang) * cp, dy = Math.sin(p.pitch);
    var wall = castRay(G.W, p.x, eyeY(), p.z, dx, dy, dz, 40), best = null, bestT = wall.dist;
    G.ents.forEach(function (e) {
      if (!e.mob || !alive(e)) return;
      var t = rayCylinder(p.x, eyeY(), p.z, dx, dy, dz, e);
      if (t !== null && t < bestT) { best = e; bestT = t; }
    });
    return best;
  }

  // ---- level flow ----------------------------------------------------------------------

  var interSkip = false;
  function onEnter() {
    if (mode === 'inter') {
      if (!interSkip) { interSkip = true; return; }
      interSkip = false;
      if (levelIndex + 1 >= LEVELS.length) mode = 'victory';
      else startLevel(levelIndex + 1, true);
    } else if (mode === 'victory') mode = 'title';
    else if (mode === 'game' && G && G.p.dead && G.p.deadT > 1.2) retryLevel();
  }

  // for bots: the same movement rules the physics uses
  function walkGraph() {
    return {
      floorAt: function (cx, cz) { return solidCell(G.W, cx, cz) && !(doorAt(G.W, cx, cz) && !doorAt(G.W, cx, cz).locked) ? null : floorAt(G.W, cx, cz); },
      neighbours: function (cx, cz) {
        var out = [], from = floorAt(G.W, cx, cz);
        nbrs(G.W, cx, cz).forEach(function (n) {
          var c = cellAt(G.W, n.x, n.z);
          if (c !== 0 && !(DOOR_IDS[c])) return;
          var dh = floorAt(G.W, n.x, n.z) - from;
          var kind = dh <= 0.02 && dh >= -0.02 ? 'walk' : dh < 0 ? 'drop' : dh <= STEP_UP ? 'step' : dh <= JUMP_UP ? 'jump' : null;
          if (kind) out.push({ cx: n.x, cz: n.z, cost: kind === 'jump' ? 2 : 1, kind: kind });
        });
        return out;
      }
    };
  }

  return {
    keys: keys,
    state: function () { return G; },
    mode: function () { return mode; },
    setMode: function (m2) { mode = m2; },
    interStats: function () { return interStats; },
    levelIndex: function () { return levelIndex; },
    levels: LEVELS,
    update: update, startLevel: startLevel, retryLevel: retryLevel, onEnter: onEnter,
    setFire: function (on) { fireHeld = !!on; },
    switchWeapon: switchWeapon, cycleWeapon: cycleWeapon, quickSwitch: quickSwitch,
    useTarget: useTarget, usePrompt: usePrompt, useAction: useAction,
    objective: currentObjective, goalTarget: goalTarget, aimTarget: aimTarget,
    hurtPlayer: hurtPlayer, walkGraph: walkGraph, levelInfo: levelInfo,
    hasAmmo: hasAmmo, settings: settings, DIFFS: DIFFS
  };
}
