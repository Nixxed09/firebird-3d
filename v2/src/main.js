// FIREBIRD 3D v2: the page. Game loop, input (mouselook), sound, HUD and menus.
import { ART, SND } from './ui/globals.js';
import MENUS from '../../js/menu.js';
import { createGame, DIFFS } from './sim/game.js';
import { LEVELS } from './levels.js';
import { makeRng } from './sim/rng.js';
import { createRenderer } from './render/renderer.js';
import { createHud, fmtTime } from './ui/hud.js';
import { loadAssets } from './render/assets.js';

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
  levels: LEVELS, rng: makeRng((Date.now() & 0xffffffff) >>> 0),
  storage: (function () { try { return window.localStorage; } catch (e) { return null; } })(),
  settings: v, saveSettings: function () { SETTINGS.save(); },
  onProgress: function (i, st) { SETTINGS.unlock(Math.min(i + 1, LEVELS.length - 1)); lastRecord = SETTINGS.record ? SETTINGS.record(i, st) : null; }
});
var lastRecord = null;
var gfx = createRenderer(view, { preserve: DEBUG });
var hud = createHud(ctx, game, v);
var mode = 'title', modeT = 0, started = false, mapOpen = false, locked = false, lockFailed = false;

function diff() { return DIFFS[v.difficulty] || DIFFS[1]; }
function applySettings() { SND.setVolume(v.volume / 10); gfx.camera.fov = v.fov; gfx.camera.updateProjectionMatrix(); }

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
  if (e.code === 'Digit4') game.switchWeapon('chaingun');
  if (e.code === 'Digit5') game.switchWeapon('rocket');
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
function titleBg(c, t) {
  ctx.fillStyle = 'rgba(8,6,4,0.55)'; ctx.fillRect(0, 0, W, H);
  fireLine(H - 6, t, 0); fireLine(H - 2, t * 1.3, 2);
  ART.drawText(ctx, 'FIREBIRD', W / 2, 10, { scale: 4, color: '#e03828', shadow: '#401008', center: true });
  ART.drawText(ctx, 'FIREBIRD', W / 2 - 1, 9, { scale: 4, color: '#ff9a28', center: true });
  ART.drawText(ctx, '3D', W / 2, 34, { scale: 5, color: '#ffd23e', shadow: '#803008', center: true });
  ART.drawText(ctx, 'EPISODE ONE: KNEE-DEEP IN THE ASHES', W / 2, 64, { color: '#c8c0b0', center: true });
  ART.drawText(ctx, 'A NIX GAMES PRODUCTION BY PHOENIX', W / 2, 72, { color: '#8a8478', center: true });
}
function menuBg(c, t) {
  ctx.fillStyle = mode === 'game' ? 'rgba(4,3,2,0.8)' : 'rgba(8,6,4,0.7)';
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = '#5e2a10'; ctx.fillRect(40, 33, W - 80, 1);
}
function onOff(b) { return b ? 'ON' : 'OFF'; }

function mainScreen() {
  var pr = SETTINGS.progress;
  return {
    drawBg: titleBg, scale: 2, top: 86, gap: 13, descY: 156, footerY: 172,
    items: function () {
      var list = [];
      if (pr.unlocked > 0) list.push({ label: 'CONTINUE', action: function () { launch(pr.unlocked); }, desc: function () { return 'START ' + LEVELS[pr.unlocked].name + ' ON ' + diff().name + '.'; } });
      list.push(
        { label: 'NEW GAME', action: function () { MENU.push(diffScreen(0)); }, desc: 'START EPISODE ONE FROM THE BEGINNING.' },
        { label: 'LEVEL SELECT', action: function () { MENU.push(levelScreen()); }, desc: 'REPLAY ANY LEVEL YOU HAVE REACHED.' },
        { label: 'OPTIONS', action: function () { MENU.push(optionsScreen()); }, desc: 'MOUSE, VOLUME, FIELD OF VIEW, CROSSHAIR, TIPS AND DIFFICULTY.' },
        { label: 'CONTROLS', action: function () { MENU.push(controlsScreen()); }, desc: 'EVERY KEY, ON ONE PAGE.' }
      );
      return list;
    }
  };
}
function diffScreen(idx) {
  var list = DIFFS.map(function (d, i) { return { label: d.name, desc: d.desc, action: function () { v.difficulty = i; SETTINGS.save(); launch(idx); } }; });
  list.push({ label: 'BACK', action: function () { MENU.back(); } });
  return { title: 'DIFFICULTY', drawBg: menuBg, scale: 2, top: 54, gap: 18, descY: 146, sel: v.difficulty, items: list };
}
function levelScreen() {
  var list = LEVELS.map(function (L, i) {
    var open = i <= SETTINGS.progress.unlocked;
    return { label: open ? L.name : L.name.split(':')[0] + ': ???', disabled: function () { return !open; }, desc: 'PAR ' + fmtTime(L.par) + '.  STARTS WITH A PISTOL.', action: function () { MENU.push(diffScreen(i)); } };
  });
  list.push({ label: 'BACK', action: function () { MENU.back(); } });
  return { title: 'LEVEL SELECT', drawBg: menuBg, top: 46, gap: 14, descY: 142, items: list };
}
function optionsScreen() {
  function step(key, min, max, by) { return function (dir) { var n = v[key] + dir * (by || 1); v[key] = n > max ? min : n < min ? max : n; SETTINGS.save(); applySettings(); }; }
  function toggle(key) { return function () { v[key] = !v[key]; SETTINGS.save(); }; }
  return {
    title: 'OPTIONS', drawBg: menuBg, top: 40, gap: 11, descY: 158,
    items: [
      { label: 'MOUSE SPEED', slider: [0, 10, function () { return v.sens; }], adjust: step('sens', 1, 10), desc: 'HOW FAST THE VIEW TURNS. LEFT AND RIGHT TO CHANGE.' },
      { label: 'INVERT MOUSE Y', value: function () { return onOff(v.invertY); }, adjust: toggle('invertY'), desc: 'PUSH THE MOUSE FORWARD TO LOOK DOWN INSTEAD OF UP.' },
      { label: 'FIELD OF VIEW', value: function () { return v.fov + ' DEG'; }, adjust: step('fov', 60, 110, 5), desc: 'HOW WIDE YOU SEE. WIDER SHOWS MORE, NARROWER ZOOMS IN.' },
      { label: 'SOUND VOLUME', slider: [0, 10, function () { return v.volume; }], adjust: step('volume', 0, 10), desc: 'LOUDNESS OF EVERYTHING.' },
      { label: 'MUSIC', value: function () { return onOff(SND.isMusicOn()); }, adjust: function () { SND.setMusic(!SND.isMusicOn()); }, desc: 'PRESS M DURING PLAY TO TOGGLE IT TOO.' },
      { label: 'CROSSHAIR', value: function () { return onOff(v.crosshair); }, adjust: toggle('crosshair'), desc: 'A SMALL AIMING MARK. TURNS RED OVER A DEMON.' },
      { label: 'GOAL MARKER', value: function () { return onOff(v.goalMarker); }, adjust: toggle('goalMarker'), desc: 'POINTS AT YOUR GOAL ONCE YOU HAVE SEEN IT.' },
      { label: 'TIPS', value: function () { return onOff(v.tips); }, adjust: function () { v.tips = !v.tips; if (v.tips) v.seenTips = {}; SETTINGS.save(); }, desc: 'SHORT HINTS THE FIRST TIME SOMETHING NEW HAPPENS.' },
      { label: 'DIFFICULTY', value: function () { return diff().name; }, adjust: step('difficulty', 0, 2), desc: function () { return diff().desc; } },
      { label: 'BACK', action: function () { MENU.back(); } }
    ]
  };
}
var CONTROLS = [
  ['MOVE', 'W A S D   OR   ARROW KEYS'], ['LOOK AND AIM', 'MOUSE (UP AND DOWN TOO)'], ['FIRE', 'LEFT CLICK   OR   CTRL'],
  ['JUMP', 'SPACE   OR   RIGHT CLICK'], ['CROUCH', 'C'], ['USE / OPEN', 'E'], ['RUN', 'HOLD SHIFT'],
  ['WEAPONS', '1 2 3 4 5   OR   MOUSE WHEEL'], ['LAST WEAPON', 'Q'], ['MAP', 'TAB'], ['PAUSE', 'ESC']
];
function controlsScreen() {
  return {
    title: 'CONTROLS', drawBg: menuBg, top: 170, gap: 12, items: [{ label: 'BACK', action: function () { MENU.back(); } }],
    drawExtra: function () { CONTROLS.forEach(function (c, i) { var y = 40 + i * 11; ART.drawText(ctx, c[0], 140, y, { color: '#c8c0b0', right: true }); ART.drawText(ctx, c[1], 152, y, { color: '#ffd23e' }); }); }
  };
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

function playEvents(G) {
  var p = G.p;
  G.events.forEach(function (e) {
    if (e.t !== 'sound') return;
    if (e.local) { SND.play(e.name); return; }
    var dx = e.x - p.x, dz = e.z - p.z, d = Math.sqrt(dx * dx + dz * dz);
    var pan = Math.sin(Math.atan2(dz, dx) - p.ang) * 0.7;
    SND.play(e.name, d, pan);
  });
}

// ---- the loop: fixed-step simulation, render every frame ---------------------------------------------

var STEP = 1 / 60, acc = 0, last = performance.now(), lastMode = '', frames = [];
var frozen = false, FROZEN_T = 10; // ?debug freeze(): no sim steps, a pinned render clock
// the title screen shows a slow fly-through of E1M1 behind the menu
game.startLevel(0, false);
var attract = game.state();
function frame(now) {
  var dt = Math.min(0.1, (now - last) / 1000); last = now;
  var gm = game.mode(), m = mode === 'title' ? 'title' : gm;
  if (m !== lastMode) { modeT = 0; lastMode = m; }
  modeT += dt;
  frames.push(dt); if (frames.length > 240) frames.shift();
  var G = game.state();
  refreshArt(G);
  if (mode === 'title') {
    // attract mode: drift the camera through the level
    var p = attract.p, t = now / 1000;
    p.ang = t * 0.12; p.pitch = Math.sin(t * 0.3) * 0.15; p.x = 5.5 + Math.sin(t * 0.07) * 0.5; p.z = 17.5;
    gfx.render(attract, t, dt);
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
    gfx.render(G, frozen ? FROZEN_T : now / 1000, paused ? 0 : dt, frozen);
    G.events.length = 0;
    hud.draw(G, { map: mapOpen, menu: MENU.isOpen(), camera: gfx.camera });
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

// Open the menu after the compact starter art is ready. The full level kit
// loads in the background as levels and weapons change.
var assetReg = null, assetLevel = null, assetGear = '', assetsSettled = false;
function artFor(G) {
  if (!G) return [];
  var keys = ['lamp', 'fist', 'pistol', 'tex:' + G.L.floor, 'tex:' + G.L.ceil, 'tex:10'];
  var cells = G.W.cells, used = new Set();
  for (var i = 0; i < cells.length; i++) if (cells[i] >= 1 && cells[i] <= 9) used.add(cells[i]);
  used.forEach(function (id) { keys.push('tex:' + id); });
  G.ents.forEach(function (e) {
    if (e.kind === 'torch') keys.push('torch');
    else if (e.barrel) keys.push('barrel');
    else if (e.kind === 'pickup') keys.push('pickup:' + e.item);
    else if (e.mob) keys.push(e.kind);
  });
  Object.keys(G.p.weapons).forEach(function (gun) { if (G.p.weapons[gun]) keys.push(gun); });
  return Array.from(new Set(keys));
}
function refreshArt(G) {
  if (!assetReg || !G) return;
  var gear = Object.keys(G.p.weapons).filter(function (k) { return G.p.weapons[k]; }).join(',');
  if (assetLevel === G && assetGear === gear) return;
  assetLevel = G; assetGear = gear;
  assetReg.ensure(artFor(G)).then(function () { gfx.setAssets(assetReg); });
}
function assetsDone() {
  if (assetsSettled) return;
  assetsSettled = true;
  MENU.open(mainScreen());
}
loadAssets(undefined, ['imp', 'gnasher', 'fist', 'pistol', 'tex:1', 'tex:slab', 'tex:ceilDark']).then(function (reg) {
  assetReg = reg;
  if (reg.loaded.length) gfx.setAssets(reg);
  if (reg.problems.length) console.info('[assets] ' + reg.problems.join(' | '));
  if (reg.loaded.length) console.info('[assets] using ' + reg.loaded.length + ' authored assets');
  assetsDone();
});
setTimeout(assetsDone, 6000);

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
