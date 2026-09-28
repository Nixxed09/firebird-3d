// FIREBIRD 3D v2: the page. Game loop, input (mouselook), sound, HUD and menus.
import { ART, SND } from './ui/globals.js';
import MENUS from '../../js/menu.js';
import { createGame, DIFFS } from './sim/game.js';
import { LEVELS } from './levels.js';
import { makeRng } from './sim/rng.js';
import { createRenderer } from './render/renderer.js';
import { createHud, fmtTime } from './ui/hud.js';
import { loadAssets } from './render/assets.js';
import RILEY from '../../js/riley.js';

var SETTINGS = MENUS.SETTINGS, MENU = MENUS.MENU;
var v = SETTINGS.v;
if (v.invertY === undefined) v.invertY = false;
if (v.fov === undefined) v.fov = 78;

var W = 320, H = 200, VH = 168;
var view = document.getElementById('view'), hudC = document.getElementById('hud');
hudC.width = W; hudC.height = H;
var ctx = hudC.getContext('2d');
ctx.imageSmoothingEnabled = false;

var DEBUG = /debug/.test(location.search);
var game = createGame({
  // ?debug runs are seeded so screenshots and bot runs reproduce exactly; play is random
  levels: LEVELS, rng: makeRng(DEBUG ? (+((/seed=(\d+)/.exec(location.search) || [])[1]) || 1) : (Date.now() & 0xffffffff) >>> 0),
  storage: (function () { try { return window.localStorage; } catch (e) { return null; } })(),
  settings: v, saveSettings: function () { SETTINGS.save(); },
  onProgress: function (i, st) { SETTINGS.unlock(Math.min(i + 1, LEVELS.length - 1)); lastRecord = SETTINGS.record ? SETTINGS.record(i, st) : null; }
});
var lastRecord = null;
var gfx = createRenderer(view, {
  preserve: DEBUG,
  // sounds the renderer makes (spent casings hitting the floor), placed around the listener
  onSound: function (name, pos) { var G = game.state(); if (!G || mode !== 'game') return; var dx = pos.x - G.p.x, dz = pos.z - G.p.z; SND.play(name, Math.sqrt(dx * dx + dz * dz), Math.sin(Math.atan2(dz, dx) - G.p.ang) * 0.7); }
});
var hud = createHud(ctx, game, v);
var mode = 'title', modeT = 0, started = false, mapOpen = false, locked = false, lockFailed = false;

function diff() { return DIFFS[v.difficulty] || DIFFS[1]; }
function applySettings() {
  SND.setVolume(v.volume / 10); gfx.setFov(v.fov);
  gfx.setQuality({ scale: v.quality || 1, bloom: v.bloom !== false, shake: v.shake !== false });
}

// ---- layout: the 3D view sits above the status bar -------------------------------------

function layout() {
  var sw = window.innerWidth, sh = window.innerHeight, w = Math.min(sw, sh * 1.6), h = w / 1.6;
  var left = (sw - w) / 2, top = (sh - h) / 2;
  hudC.style.cssText = 'left:' + left + 'px;top:' + top + 'px;width:' + w + 'px;height:' + h + 'px';
  var vh = Math.round(h * VH / H);
  view.style.cssText = 'left:' + left + 'px;top:' + top + 'px;width:' + w + 'px;height:' + vh + 'px';
  gfx.resize(Math.round(w), vh);
}
window.addEventListener('resize', layout);
layout();

// ---- input ----------------------------------------------------------------------------

var keys = game.keys, fire = false;
function clearInput() { for (var k in keys) keys[k] = false; fire = false; game.setFire(false); }

document.addEventListener('keydown', function (e) {
  if (['Tab', 'Space'].indexOf(e.code) >= 0 || e.code.slice(0, 5) === 'Arrow') e.preventDefault();
  SND.init();
  if (!assetsSettled) return; // still loading
  if (MENU.isOpen()) { SND.startMusic(); MENU.key(e.code); return; }
  if (e.repeat) return;
  if (e.code === 'Enter' || e.code === 'NumpadEnter') { onEnter(); return; }
  if (mode !== 'game') { if (e.code === 'Space') onEnter(); return; }
  if (e.code === 'Escape' && started && !locked) { openPause(); return; }
  keys[e.code] = true;
  var G = game.state();
  if (e.code === 'Tab') { mapOpen = !mapOpen; G.usedMap = true; }
  if (e.code === 'KeyM') { var on = SND.toggleMusic(); G.msgs.push({ text: 'MUSIC ' + (on ? 'ON' : 'OFF'), t: 2 }); }
  if (e.code === 'ControlLeft' || e.code === 'ControlRight') { fire = true; game.setFire(true); }
  if (e.code === 'Digit1') game.switchWeapon('fist');
  if (e.code === 'Digit2') game.switchWeapon('pistol');
  if (e.code === 'Digit3') game.switchWeapon('shotgun');
  if (e.code === 'KeyQ') game.quickSwitch();
});
document.addEventListener('keyup', function (e) {
  keys[e.code] = false;
  if (e.code === 'ControlLeft' || e.code === 'ControlRight') { fire = false; game.setFire(false); }
});
window.addEventListener('blur', clearInput);

document.addEventListener('pointerlockchange', function () {
  locked = document.pointerLockElement === hudC;
  clearInput();
  if (locked) { lockFailed = false; if (mode === 'game') MENU.close(); if (!started && mode === 'game') begin(); }
  else if (mode === 'game' && started) openPause();
});
document.addEventListener('pointerlockerror', function () { lockFailed = true; });
function requestLock() {
  try { var r = hudC.requestPointerLock({ unadjustedMovement: true }); if (r && r.catch) r.catch(function () { try { hudC.requestPointerLock(); } catch (e2) { lockFailed = true; } }); }
  catch (e) { lockFailed = true; }
}
function releaseLock() { try { document.exitPointerLock(); } catch (e) { } }

function toLow(e) { var r = hudC.getBoundingClientRect(); return { x: (e.clientX - r.left) / r.width * W, y: (e.clientY - r.top) / r.height * H }; }
document.addEventListener('mousemove', function (e) {
  var G = game.state();
  if (locked && mode === 'game' && G && !G.p.dead) {
    var s = 0.00044 * v.sens;
    G.p.ang += e.movementX * s;
    G.p.pitch -= e.movementY * s * (v.invertY ? -1 : 1);
    G.p.pitch = Math.max(-1.3, Math.min(1.3, G.p.pitch));
    return;
  }
  if (MENU.isOpen()) { var pt = toLow(e); hudC.style.cursor = MENU.pointer(pt.x, pt.y) ? 'pointer' : 'default'; }
});
hudC.addEventListener('mousedown', function (e) {
  SND.init(); SND.startMusic();
  if (MENU.isOpen()) { var pt = toLow(e); if (e.button === 0) MENU.click(pt.x, pt.y); return; }
  if (mode === 'game') {
    var G = game.state();
    if (!locked) { MENU.close(); requestLock(); return; }
    if (G.p.dead) { onEnter(); return; }
    if (e.button === 0) { fire = true; game.setFire(true); }
    if (e.button === 2) game.keys.Space = true; // right click also jumps
    return;
  }
  onEnter();
});
document.addEventListener('mouseup', function (e) { if (e.button === 0) { fire = false; game.setFire(false); } if (e.button === 2) game.keys.Space = false; });
hudC.addEventListener('contextmenu', function (e) { e.preventDefault(); });
hudC.addEventListener('wheel', function (e) {
  if (mode === 'game' && locked) { e.preventDefault(); if (e.deltaY) game.cycleWeapon(e.deltaY > 0 ? 1 : -1); }
}, { passive: false });

// ---- flow ----------------------------------------------------------------------------------

var interSkip = false;
function begin() { started = true; }
function launch(i) { game.startLevel(i, false); started = false; mapOpen = false; mode = 'game'; MENU.close(); requestLock(); }
function onEnter() {
  SND.init(); SND.startMusic();
  var m = game.mode();
  if (m === 'inter') {
    if (!interSkip && modeT < 1.3) { interSkip = true; return; }
    interSkip = false;
    game.onEnter(); game.onEnter();
    if (game.mode() === 'game') { started = locked; }
  } else if (m === 'victory') { if (modeT > 1) toTitle(); }
  else if (m === 'game') {
    var G = game.state();
    if (G.p.dead) { if (G.p.deadT > 1.2) { game.retryLevel(); started = locked; } }
    else if (!locked) { MENU.close(); requestLock(); }
  }
}
function toTitle() { game.setMode('title'); mode = 'title'; MENU.open(mainScreen()); releaseLock(); }
function openPause() { mapOpen = false; MENU.open(pauseScreen()); SND.play('menu'); }

// ---- menu screens -----------------------------------------------------------------------------

function fireLine(y, t, seed) {
  for (var x = 0; x < W; x += 2) {
    var n = Math.sin(x * 0.07 + t * 3 + seed) + Math.sin(x * 0.13 - t * 2.2), h2 = 6 + n * 4;
    ctx.fillStyle = n > 0.7 ? '#ffd23e' : n > -0.3 ? '#ff7a18' : '#a83010';
    ctx.fillRect(x, y - h2, 2, h2 + 4);
  }
}
// ---- the showcase: a live 3D scene behind the menus -----------------------------------------
// A separate copy of the game, so menus never touch the real one. Each level has a
// camera shot; the title opens on the Furnace reveal, and Level Select flies to
// whichever level is highlighted.
var showcase = createGame({ levels: LEVELS, rng: makeRng(7), storage: null, settings: { difficulty: 1, tips: false, seenTips: {} } });
var SHOTS = {
  0: { x: 19.5, z: 9.4, y: 2, ang: -1.6, pitch: 0.1, sway: 0.1 },                 // Riley in her sparring arena
  1: { x: 17.5, z: 26.6, y: 2, ang: -Math.PI / 2, pitch: -0.2, sway: 0.18 },        // the Furnace from the gantry
  2: null, 3: null                                                                   // classic layouts: from the start
};
var showLevel = -1, showG = null;
function showLevelAt(i) {
  if (i === showLevel) return;
  showLevel = i;
  showcase.startLevel(i, false);
  showG = showcase.state();
  var shot = SHOTS[i], p = showG.p;
  if (shot) { p.x = shot.x; p.z = shot.z; p.y = shot.y; }
  p.baseAng = shot ? shot.ang : p.ang; p.basePitch = shot ? shot.pitch : 0.05; p.sway = shot ? shot.sway : 0.3;
  showG.msgs.length = 0; showG.notice = null;
}
function driveShowcase(t) {
  var p = showG.p;
  p.ang = p.baseAng + Math.sin(t * 0.11) * p.sway;
  p.pitch = p.basePitch + Math.sin(t * 0.17) * 0.04;
}

// ---- menu look: a dark panel on the left, the scene on the right ---------------------------------
var PANEL = 150;
function panelBg(c, t) {
  ctx.fillStyle = 'rgba(6,4,3,0.84)'; ctx.fillRect(0, 0, PANEL, H);
  for (var i = 0; i < 40; i++) { ctx.fillStyle = 'rgba(6,4,3,' + (0.84 * (1 - i / 40)).toFixed(3) + ')'; ctx.fillRect(PANEL + i, 0, 1, H); }
  ctx.fillStyle = '#ff7a18'; ctx.fillRect(PANEL - 1, 0, 1, H);
  ctx.fillStyle = 'rgba(0,0,0,0.35)'; ctx.fillRect(0, H - 14, W, 14);
}
function logo(x, y) {
  ART.drawText(ctx, 'FIREBIRD', x + 1, y + 1, { scale: 3, color: '#401008' });
  ART.drawText(ctx, 'FIREBIRD', x, y, { scale: 3, color: '#ff9a28' });
  ART.drawText(ctx, '3D', x + 98, y - 2, { scale: 4, color: '#ffd23e', shadow: '#803008' });
  ART.drawText(ctx, 'EPISODE ONE: KNEE-DEEP IN THE ASHES', x, y + 21, { color: '#a8a090' });
}
function heading(text, y) {
  ART.drawText(ctx, text, 14, y || 14, { scale: 2, color: '#ff9a28', shadow: '#401008' });
  ctx.fillStyle = '#5e2a10'; ctx.fillRect(14, (y || 14) + 13, PANEL - 28, 1);
}
function wrapText(text, n) {
  var words = String(text).split(' '), out = [], cur = '';
  words.forEach(function (w) { var nx = cur ? cur + ' ' + w : w; if (nx.length > n && cur) { out.push(cur); cur = w; } else cur = nx; });
  if (cur) out.push(cur);
  return out;
}
// what the highlighted item does, under the menu
function infoLine(y) {
  var it = MENU.selected(), info = it && (typeof it.info === 'function' ? it.info() : it.info);
  if (!info) return;
  wrapText(info, 33).forEach(function (l, i) { ART.drawText(ctx, l, 14, (y || 150) + i * 8, { color: '#a8a090' }); });
}
function footerHint(text) { ART.drawText(ctx, text || 'ARROWS / MOUSE: CHOOSE   ENTER: SELECT   ESC: BACK', 14, H - 10, { color: '#6a655c' }); }
function chip(x, y, text, lit, col) {
  var w = ART.textWidth(text, 1) + 6;
  ctx.fillStyle = lit ? (col || '#ffd23e') : '#2e2a24'; ctx.fillRect(x, y, w, 9);
  ctx.fillStyle = lit ? '#1a0e06' : '#14110d'; ctx.fillRect(x + 1, y + 1, w - 2, 7);
  ART.drawText(ctx, text, x + 3, y + 2, { color: lit ? (col || '#ffd23e') : '#4a463c' });
  return w + 3;
}
function onOff(b) { return b ? 'ON' : 'OFF'; }
var MENU_BOX = { alignLeft: true, x0: 20, x1: 138, footer: '' };
function screen(o) { var s = {}; for (var k in MENU_BOX) s[k] = MENU_BOX[k]; for (var k2 in o) s[k2] = o[k2]; return s; }

// Riley on the title: she remembers whether you've met
var rileyMem = (function () { try { return RILEY.recall(window.localStorage); } catch (e) { return { fights: 0, wins: 0 }; } })();
function rileyGreeting() {
  if (!rileyMem.fights) return "HI! I'M RILEY. COME FIND ME AT THE TOP OF E1M1.";
  if (rileyMem.wins) return "WELCOME BACK. I'VE BEEN PRACTISING SINCE YOU BEAT ME.";
  return 'WELCOME BACK. I STILL REMEMBER HOW YOU FIGHT.';
}

function titleBg(c, t) {
  panelBg(c, t);
  logo(14, 16);
  ART.drawText(ctx, 'A NIX GAMES PRODUCTION BY PHOENIX', 14, H - 24, { color: '#6a655c' });
  // Riley's line, in the scene
  var lines = wrapText('RILEY: ' + rileyGreeting(), 34);
  ctx.fillStyle = 'rgba(0,0,0,0.45)'; ctx.fillRect(170, 150 - 4, 144, lines.length * 8 + 6);
  lines.forEach(function (l, i) { ART.drawText(ctx, l, 174, 150 + i * 8, { color: '#6fe0ec', shadow: true }); });
}

var BLURBS = {
  E1M1: 'RILEY TEACHES YOU THE ROPES ON THE WAY UP, THEN SPARS WITH YOU IN HER ARENA.',
  E1M2: 'DRAIN THE FURNACE, TAKE THE RED KEY, AND SURVIVE THE FORGE.',
  E1M3: 'THE EMBER KNIGHT WAITS ON THE DEMON THRONE.',
  E1M4: 'RILEY REMEMBERS HOW YOU FOUGHT. THIS TIME SHE IS NOT HOLDING BACK.'
};

function mainScreen() {
  var pr = SETTINGS.progress;
  return screen({
    drawBg: titleBg, scale: 2, top: 62, gap: 14,
    drawExtra: function () { infoLine(136); footerHint(); },
    items: function () {
      var list = [];
      if (pr.unlocked > 0) list.push({ label: 'CONTINUE', action: function () { launch(pr.unlocked); }, info: function () { return LEVELS[pr.unlocked].name + ' ON ' + diff().name + '.'; } });
      list.push(
        { label: 'NEW GAME', action: function () { MENU.push(diffScreen(0)); }, info: 'START THE EPISODE FROM THE BEGINNING.' },
        { label: 'LEVELS', action: function () { MENU.push(levelScreen()); }, info: 'PICK A LEVEL, SEE YOUR BEST TIMES AND MEDALS.' },
        { label: 'OPTIONS', action: function () { MENU.push(optionsScreen(0)); }, info: 'CONTROLS, VIDEO, AUDIO AND GAMEPLAY.' },
        { label: 'CONTROLS', action: function () { MENU.push(controlsScreen()); }, info: 'EVERY KEY, ON ONE PAGE.' }
      );
      return list;
    }
  });
}

function diffScreen(idx) {
  var list = DIFFS.map(function (d, i) { return { label: d.name, info: d.desc, action: function () { v.difficulty = i; SETTINGS.save(); launch(idx); } }; });
  list.push({ label: 'BACK', action: function () { MENU.back(); } });
  return screen({
    drawBg: panelBg, scale: 2, top: 46, gap: 16, sel: v.difficulty, items: list,
    drawExtra: function () { heading('DIFFICULTY'); infoLine(118); ART.drawText(ctx, LEVELS[idx].name, 14, 32, { color: '#c8c0b0' }); footerHint(); }
  });
}

function levelScreen() {
  var list = LEVELS.map(function (L, i) {
    var open = i <= SETTINGS.progress.unlocked, code = L.name.split(':')[0];
    return {
      label: open ? L.name.replace(': ', '  ') : code + '  LOCKED', level: i,
      disabled: function () { return !open; },
      action: function () { MENU.push(diffScreen(i)); }
    };
  });
  list.push({ label: 'BACK', action: function () { MENU.back(); } });
  var sel = Math.min(SETTINGS.progress.unlocked, LEVELS.length - 1);
  return screen({
    drawBg: panelBg, scale: 1, top: 40, gap: 13, sel: sel, items: list,
    drawExtra: function () {
      heading('LEVELS');
      var it = MENU.selected(), i = it && it.level !== undefined ? it.level : showLevel;
      if (it && it.level !== undefined) showLevelAt(i);
      levelCardInfo(i);
      footerHint();
    }
  });
}

// the level card, on the right over the preview
function levelCardInfo(i) {
  var L = LEVELS[i], code = L.name.split(':')[0], name = L.name.split(': ')[1] || L.name;
  var open = i <= SETTINGS.progress.unlocked, best = SETTINGS.best ? SETTINGS.best(i) : null;
  var x = 172, blurb = wrapText(BLURBS[code] || '', 34), cardH = 58 + blurb.length * 8, y = 166 - cardH;
  ctx.fillStyle = 'rgba(6,4,3,0.72)'; ctx.fillRect(x - 6, y - 6, W - x, cardH);
  ctx.fillStyle = '#ff7a18'; ctx.fillRect(x - 6, y - 6, 1, cardH);
  ART.drawText(ctx, code + (L.heights ? '   REBUILT IN 3D' : '   CLASSIC LAYOUT'), x, y, { color: L.heights ? '#8fe0a0' : '#8a8478' });
  ART.drawText(ctx, name, x, y + 9, { scale: 2, color: '#ff9a28', shadow: '#401008' });
  blurb.forEach(function (l, k) { ART.drawText(ctx, l, x, y + 25 + k * 8, { color: '#c8c0b0' }); });
  var info = game.levelInfo(L), row = y + 28 + blurb.length * 8;
  if (info.boss) chip(x, row - 1, 'BOSS: RILEY', true, '#6fe0ec');
  ART.drawText(ctx, 'PAR ' + fmtTime(L.par) + (best && best.time !== null ? '   BEST ' + fmtTime(best.time) : ''), info.boss ? x + 60 : x, row + 1, { color: '#a8a090' });
  var cx = x;
  (SETTINGS.MEDALS || ['PAR', 'KILLS', 'ITEMS', 'SECRETS']).forEach(function (m) { cx += chip(cx, row + 12, m, !!(best && best.medals && best.medals[m])); });
  if (!open) {
    ctx.fillStyle = 'rgba(0,0,0,0.55)'; ctx.fillRect(x - 5, y - 5, W - x - 1, cardH - 2);
    ART.drawText(ctx, 'LOCKED', x + 60, y + 22, { scale: 2, color: '#ff9a28', shadow: true });
    ART.drawText(ctx, 'FINISH THE LEVEL BEFORE IT', x + 30, y + 42, { color: '#a8a090' });
  }
}

var OPTION_TABS = ['CONTROLS', 'VIDEO', 'AUDIO', 'GAMEPLAY'];
var DEFAULTS2 = { sens: 5, invertY: false, fov: 78, quality: 1, bloom: true, shake: true, fps: false, volume: 7, crosshair: true, goalMarker: true, tips: true, difficulty: 1 };
function optionsScreen(tab) {
  function step(key, min, max, by) { return function (dir) { var n = +(v[key] + dir * (by || 1)).toFixed(2); v[key] = n > max ? min : n < min ? max : n; SETTINGS.save(); applySettings(); }; }
  function toggle(key) { return function () { v[key] = !v[key]; SETTINGS.save(); applySettings(); }; }
  var section = {
    label: 'SECTION', value: function () { return OPTION_TABS[tab]; },
    adjust: function (dir) { MENU.replace(optionsScreen((tab + dir + OPTION_TABS.length) % OPTION_TABS.length)); },
    info: 'LEFT AND RIGHT TO SWITCH BETWEEN CONTROLS, VIDEO, AUDIO AND GAMEPLAY.'
  };
  var pages = [
    [
      { label: 'MOUSE SPEED', slider: [0, 10, function () { return v.sens; }], adjust: step('sens', 1, 10), info: 'HOW FAST THE VIEW TURNS.' },
      { label: 'INVERT Y', value: function () { return onOff(v.invertY); }, adjust: toggle('invertY'), info: 'PUSH THE MOUSE FORWARD TO LOOK DOWN INSTEAD OF UP.' },
      { label: 'FIELD OF VIEW', value: function () { return v.fov; }, adjust: step('fov', 60, 110, 5), info: 'HOW WIDE YOU SEE, IN DEGREES. WIDER SHOWS MORE.' }
    ],
    [
      { label: 'RESOLUTION', value: function () { return Math.round((v.quality || 1) * 100) + '%'; }, adjust: step('quality', 0.5, 1, 0.25), info: 'LOWER IS FASTER ON SLOW COMPUTERS, AND CHUNKIER.' },
      { label: 'GLOW', value: function () { return onOff(v.bloom !== false); }, adjust: toggle('bloom'), info: 'THE SOFT GLOW AROUND FIRE, LAVA AND LIGHTS.' },
      { label: 'SCREEN SHAKE', value: function () { return onOff(v.shake !== false); }, adjust: toggle('shake'), info: 'THE VIEW KICKS ON SHOTS, HITS AND EXPLOSIONS.' },
      { label: 'SHOW FPS', value: function () { return onOff(!!v.fps); }, adjust: toggle('fps'), info: 'FRAMES PER SECOND, IN THE CORNER.' }
    ],
    [
      { label: 'VOLUME', slider: [0, 10, function () { return v.volume; }], adjust: step('volume', 0, 10), info: 'LOUDNESS OF EVERYTHING.' },
      { label: 'MUSIC', value: function () { return onOff(SND.isMusicOn()); }, adjust: function () { SND.setMusic(!SND.isMusicOn()); }, info: 'PRESS M DURING PLAY TO TOGGLE IT TOO.' }
    ],
    [
      { label: 'DIFFICULTY', value: function () { return diff().name; }, adjust: step('difficulty', 0, 2), info: function () { return diff().desc; } },
      { label: 'CROSSHAIR', value: function () { return onOff(v.crosshair); }, adjust: toggle('crosshair'), info: 'A SMALL AIMING MARK. TURNS RED OVER A DEMON.' },
      { label: 'GOAL MARKER', value: function () { return onOff(v.goalMarker); }, adjust: toggle('goalMarker'), info: 'POINTS AT YOUR GOAL ONCE YOU HAVE SEEN IT.' },
      { label: 'TIPS', value: function () { return onOff(v.tips); }, adjust: function () { v.tips = !v.tips; if (v.tips) v.seenTips = {}; SETTINGS.save(); }, info: 'SHORT HINTS THE FIRST TIME SOMETHING NEW HAPPENS. ON AGAIN SHOWS THEM ALL.' },
      { label: 'RESET ALL', action: function () { MENU.push(confirmScreen('RESET?', 'EVERY OPTION BACK TO ITS DEFAULT.', function () { for (var k in DEFAULTS2) v[k] = DEFAULTS2[k]; SETTINGS.save(); applySettings(); MENU.back(); })); }, info: 'EVERY OPTION BACK TO ITS DEFAULT. PROGRESS AND MEDALS ARE KEPT.' }
    ]
  ];
  var items = [section].concat(pages[tab]).concat([{ label: 'BACK', action: function () { MENU.back(); } }]);
  return screen({
    drawBg: panelBg, x1: 142, scale: 1, top: 44, gap: 13, items: items,
    drawExtra: function () {
      heading('OPTIONS');
      // the tab strip
      var x = 14;
      OPTION_TABS.forEach(function (t2, i) { x += chip(x, 32, t2, i === tab); });
      infoLine(44 + items.length * 13 + 6);
      footerHint('ARROWS / MOUSE: CHOOSE   LEFT / RIGHT: CHANGE   ESC: BACK');
    }
  });
}

var CONTROLS = [
  ['MOVE', 'W A S D  /  ARROWS'], ['LOOK AND AIM', 'MOUSE'], ['FIRE', 'LEFT CLICK  /  CTRL'],
  ['JUMP', 'SPACE  /  RIGHT CLICK'], ['CROUCH', 'C'], ['USE / OPEN', 'E'], ['RUN', 'HOLD SHIFT'],
  ['WEAPONS', '1 2 3  /  WHEEL'], ['LAST WEAPON', 'Q'], ['MAP', 'TAB'], ['MUSIC', 'M'], ['PAUSE', 'ESC']
];
function controlsScreen() {
  return screen({
    drawBg: panelBg, scale: 2, top: 172, gap: 12, items: [{ label: 'BACK', action: function () { MENU.back(); } }],
    drawExtra: function () {
      heading('CONTROLS');
      CONTROLS.forEach(function (c, i) {
        var y = 36 + i * 11;
        ART.drawText(ctx, c[0], 14, y, { color: '#c8c0b0' });
        ART.drawText(ctx, c[1], 76, y, { color: '#ffd23e' });
      });
      footerHint();
    }
  });
}

function menuBg(c, t) {
  ctx.fillStyle = mode === 'game' ? 'rgba(4,3,2,0.8)' : 'rgba(8,6,4,0.7)';
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = '#5e2a10'; ctx.fillRect(40, 33, W - 80, 1);
}

function confirmScreen(q, detail, yes) {
  return { title: q, drawBg: menuBg, scale: 2, top: 86, gap: 18, sel: 1, drawExtra: function () { ART.drawText(ctx, detail, W / 2, 56, { color: '#a8a090', center: true }); }, items: [{ label: 'YES', action: yes }, { label: 'NO', action: function () { MENU.back(); } }] };
}
function pauseScreen() {
  return {
    title: 'PAUSED', drawBg: menuBg, scale: 2, top: 64, gap: 14, descY: 144, footerY: 176, footer: 'ARROWS OR MOUSE: CHOOSE   ENTER OR CLICK: SELECT',
    items: [
      { label: function () { return game.state().p.dead ? 'TRY AGAIN' : 'RESUME'; }, action: function () { if (game.state().p.dead) game.retryLevel(); MENU.close(); requestLock(); }, desc: 'BACK TO THE FIGHT.' },
      { label: 'RESTART LEVEL', desc: 'START THIS LEVEL OVER WITH THE GEAR YOU BROUGHT IN.', action: function () { MENU.push(confirmScreen('RESTART?', 'YOU WILL LOSE PROGRESS IN THIS LEVEL.', function () { game.retryLevel(); MENU.close(); requestLock(); })); } },
      { label: 'OPTIONS', action: function () { MENU.push(optionsScreen()); }, desc: 'MOUSE, VOLUME, FIELD OF VIEW AND MORE.' },
      { label: 'CONTROLS', action: function () { MENU.push(controlsScreen()); }, desc: 'EVERY KEY, ON ONE PAGE.' },
      { label: 'QUIT TO TITLE', desc: 'YOUR UNLOCKED LEVELS ARE SAVED.', action: function () { MENU.push(confirmScreen('QUIT?', 'PROGRESS IN THIS LEVEL WILL BE LOST.', toTitle)); } }
    ],
    drawExtra: function () {
      var G = game.state(), st = G.stats;
      ART.drawText(ctx, G.L.name + '   ' + diff().name, W / 2, 38, { color: '#c8c0b0', center: true });
      ART.drawText(ctx, 'GOAL: ' + game.objective(), W / 2, 48, { color: '#f0d848', center: true });
      ART.drawText(ctx, 'KILLS ' + st.kills + '/' + st.totalKills + '   ITEMS ' + st.items + '/' + st.totalItems + '   SECRETS ' + st.secrets + '/' + st.totalSecrets + '   TIME ' + fmtTime(G.time), W / 2, 160, { color: '#8a8478', center: true });
    }
  };
}

function levelCard(t) {
  var G = game.state(), parts = G.L.name.split(': ');
  ctx.fillStyle = 'rgba(4,3,2,0.6)'; ctx.fillRect(0, 0, W, H);
  ART.drawText(ctx, parts[0], W / 2, 22, { color: '#8a8478', center: true });
  ART.drawText(ctx, parts[1] || G.L.name, W / 2, 32, { scale: 3, color: '#ff9a28', shadow: '#401008', center: true });
  ART.drawText(ctx, 'GOAL', W / 2, 60, { color: '#8a8478', center: true });
  ART.drawText(ctx, game.objective(), W / 2, 69, { scale: 2, color: '#f0d848', shadow: true, center: true });
  ART.drawText(ctx, 'DIFFICULTY: ' + diff().name + '     PAR ' + fmtTime(G.L.par), W / 2, 88, { color: '#a8a090', center: true });
  if ((t % 1) < 0.7) ART.drawText(ctx, 'CLICK TO BEGIN', W / 2, 106, { scale: 2, color: '#ffffff', shadow: true, center: true });
  if (lockFailed) ART.drawText(ctx, 'THE GAME NEEDS THE MOUSE. CLICK THE SCREEN AGAIN.', W / 2, 124, { color: '#ff9a28', center: true });
  ART.drawText(ctx, 'WASD MOVE  MOUSE LOOK  CLICK FIRE  SPACE JUMP  E USE  TAB MAP  ESC PAUSE', W / 2, 140, { color: '#8a8478', center: true });
}

function interScreen(t) {
  var st = game.interStats();
  ctx.fillStyle = 'rgba(10,8,6,0.88)'; ctx.fillRect(0, 0, W, H);
  fireLine(H - 6, t, 1);
  ART.drawText(ctx, st.name, W / 2, 22, { scale: 2, color: '#ff9a28', shadow: true, center: true });
  ART.drawText(ctx, 'FINISHED!', W / 2, 42, { scale: 2, color: '#e8e0c8', shadow: true, center: true });
  var roll = interSkip ? 1 : Math.min(1, t / 1.2);
  function pct(a, b) { return b ? Math.round(a / b * 100 * roll) : 100; }
  [['KILLS', st.kills, st.totalKills, 70], ['ITEMS', st.items, st.totalItems, 90], ['SECRETS', st.secrets, st.totalSecrets, 110]].forEach(function (r) {
    ART.drawText(ctx, r[0], 90, r[3], { scale: 2, color: '#c8c0b0' });
    var n = pct(r[1], r[2]);
    ART.drawText(ctx, n + '%', 240, r[3], { scale: 2, color: n >= 100 ? '#ffd23e' : '#e03828', right: true });
  });
  ART.drawText(ctx, 'TIME ' + fmtTime(st.time), 90, 132, { scale: 2, color: st.time <= st.par && roll >= 1 ? '#ffd23e' : '#c8c0b0' });
  ART.drawText(ctx, 'PAR ' + fmtTime(st.par), 240, 132, { scale: 2, color: '#c8c0b0', right: true });
  if (roll >= 1 && (t % 1) < 0.7) {
    var li = game.levelIndex();
    ART.drawText(ctx, li + 1 < LEVELS.length ? 'CLICK OR PRESS ENTER FOR ' + LEVELS[li + 1].name : 'CLICK OR PRESS ENTER', W / 2, 166, { color: '#f0d848', shadow: true, center: true });
  }
}
function victoryScreen(t) {
  ctx.fillStyle = 'rgba(8,6,4,0.9)'; ctx.fillRect(0, 0, W, H);
  fireLine(H - 8, t, 0); fireLine(H - 4, t * 1.3, 2);
  ART.drawText(ctx, 'YOU WIN!', W / 2, 30, { scale: 4, color: '#ffd23e', shadow: '#803008', center: true });
  ['THE DEMON THRONE LIES IN ASHES,', 'AND RILEY TAPS OUT WITH A GRIN:', '"SAME TIME TOMORROW? I\'LL BE READY."', '', 'THE FIREBIRD CANNOT BE KILLED.', 'IT ONLY BURNS BRIGHTER.', '', 'THANKS FOR PLAYING, WARRIOR.']
    .forEach(function (l, i) { ART.drawText(ctx, l, W / 2, 74 + i * 10, { color: '#e8e0c8', center: true }); });
  if (t > 1 && (t % 1) < 0.7) ART.drawText(ctx, 'CLICK OR PRESS ENTER FOR THE TITLE SCREEN', W / 2, 170, { color: '#f0d848', shadow: true, center: true });
}

// ---- sound: the simulation's events, placed around the listener ----------------------------------

// v2's richer versions of classic sounds
var SOUND_V2 = { pistol: 'pistol2', shotgun: 'shotgun2' };
function playEvents(G) {
  var p = G.p;
  G.events.forEach(function (e) {
    if (e.t !== 'sound') return;
    if (e.local) { SND.play(SOUND_V2[e.name] || e.name); return; }
    var dx = e.x - p.x, dz = e.z - p.z, d = Math.sqrt(dx * dx + dz * dz);
    var pan = Math.sin(Math.atan2(dz, dx) - p.ang) * 0.7;
    SND.play(e.name, d, pan);
  });
}

// ---- the loop: fixed-step simulation, render every frame ---------------------------------------------

var STEP = 1 / 60, acc = 0, last = performance.now(), lastMode = '', frames = [];
var frozen = false, FROZEN_T = 10; // ?debug freeze(): no sim steps, a pinned render clock
var weaponShown = null;
function showWeapon(on) { if (on !== weaponShown) { weaponShown = on; gfx.setQuality({ weapon: on }); } }
function frame(now) {
  var dt = Math.min(0.1, (now - last) / 1000); last = now;
  var gm = game.mode(), m = mode === 'title' ? 'title' : gm;
  if (m !== lastMode) { modeT = 0; lastMode = m; }
  modeT += dt;
  frames.push(dt); if (frames.length > 240) frames.shift();
  var G = game.state();
  if (mode === 'title') {
    // the showcase: a slow cinematic shot of a level behind the menu
    var t = now / 1000;
    if (!showG) showLevelAt(1);
    driveShowcase(t);
    showWeapon(false);
    gfx.render(showG, t, dt);
    ctx.clearRect(0, 0, W, H);
    if (!assetsSettled) {
      titleBg(ctx, modeT);
      if ((modeT % 0.8) < 0.55) ART.drawText(ctx, 'LOADING...', W / 2, 120, { scale: 2, color: '#f0d848', shadow: true, center: true });
    } else {
      if (!MENU.isOpen()) MENU.open(mainScreen());
      MENU.render(ctx, modeT);
    }
  } else if (gm === 'game' || gm === 'inter' || gm === 'victory') {
    var paused = frozen || (gm === 'game' && (!started || !locked || MENU.isOpen()) && !DEBUG);
    if (!paused && gm === 'game') {
      acc += dt;
      while (acc >= STEP) {
        if (G.hitstop > 0) { G.hitstop -= STEP; acc -= STEP; continue; }
        game.update(STEP); playEvents(G); acc -= STEP;
        if (game.mode() !== 'game') break;
      }
    } else acc = 0;
    G = game.state();
    showWeapon(true);
    gfx.render(G, frozen ? FROZEN_T : now / 1000, paused ? 0 : dt, frozen);
    G.events.length = 0;
    hud.draw(G, { map: mapOpen, menu: MENU.isOpen(), camera: gfx.camera });
    if (v.fps) {
      var sorted = frames.slice().sort(function (a2, b2) { return a2 - b2; }), med = sorted[sorted.length >> 1] || 0.016;
      ART.drawText(ctx, Math.round(1 / med) + ' FPS', W - 4, VH - 9, { color: '#8fe0a0', shadow: true, right: true });
    }
    if (gm === 'inter') interScreen(modeT);
    else if (gm === 'victory') victoryScreen(modeT);
    else if (!started) levelCard(modeT);
    else if (MENU.isOpen()) MENU.render(ctx, modeT);
    else if (!locked && !DEBUG) {
      ctx.fillStyle = 'rgba(0,0,0,0.5)'; ctx.fillRect(0, 70, W, 24);
      ART.drawText(ctx, 'CLICK TO RESUME', W / 2, 76, { scale: 2, color: '#f0d848', shadow: true, center: true });
    }
  }
  requestAnimationFrame(frame);
}
applySettings();
requestAnimationFrame(frame);

// Authored art loads before the menu opens, so a level never starts with
// half-loaded art that pops in mid-play. If it's slow or broken, the built-in
// art is used after a few seconds.
var assetReg = null, assetsSettled = false;
function assetsDone(reg) {
  if (assetsSettled) return;
  assetsSettled = true;
  assetReg = reg || { ready: true, loaded: [], problems: ['timed out; using built-in art'] };
  if (assetReg.loaded.length) gfx.setAssets(assetReg);
  if (assetReg.problems.length) console.info('[assets] ' + assetReg.problems.join(' | '));
  if (assetReg.loaded.length) console.info('[assets] using ' + assetReg.loaded.length + ' authored assets');
  MENU.open(mainScreen());
}
loadAssets().then(assetsDone);
setTimeout(function () { assetsDone(null); }, 6000);

// ?debug: a handle for automated checks and screenshots
if (DEBUG) {
  window.FIREBIRD2 = Object.assign({}, game, {
    launch: function (i) { game.startLevel(i, false); started = true; mode = 'game'; MENU.close(); },
    toTitle: toTitle,
    setMap: function (on) { mapOpen = on; },
    // freeze(true): stop the simulation and pin the render clock, so the same
    // spot renders the same pixels every run (screenshot baselines)
    freeze: function (on) { frozen = !!on; },
    frozen: function () { return frozen; },
    models: function () { return gfx.debugModels(); },
    fxStats: function () { return gfx.fxStats(); },
    // which authored assets loaded, and anything that failed
    assets: function () { return assetReg ? { ready: assetReg.ready, loaded: assetReg.loaded.slice(), problems: assetReg.problems.slice() } : { ready: false }; },
    frameStats: function () {
      var s = frames.slice().sort(function (a, b) { return a - b; });
      function q(f) { return s.length ? s[Math.min(s.length - 1, Math.floor(s.length * f))] * 1000 : 0; }
      return { frames: s.length, p50: q(0.5), p95: q(0.95), p99: q(0.99), info: gfx.info().render };
    },
    renderInfo: function () { return gfx.info(); }
  });
}
