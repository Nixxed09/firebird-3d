// FIREBIRD 3D — menu.js
// Player settings and level progress (saved in the browser), and the menu
// UI used by the title screen, pause menu and options. The engine builds the
// screens (what each item does); this file draws them and handles input.
'use strict';

var SETTINGS = (function () {
  var KEY = 'firebird.settings.v1', PKEY = 'firebird.progress.v1';
  var DEFAULTS = { sens: 5, volume: 7, crosshair: true, tips: true, shake: true, goalMarker: true, difficulty: 1, seenTips: {} };

  function store() { try { return window.localStorage; } catch (e) { return null; } }
  function read(key) {
    var s = store();
    if (!s) return null;
    try { var v = JSON.parse(s.getItem(key)); return v && typeof v === 'object' ? v : null; } catch (e) { return null; }
  }
  function write(key, v) {
    var s = store();
    if (s) try { s.setItem(key, JSON.stringify(v)); } catch (e) { }
  }

  var v = {}, saved = read(KEY) || {};
  for (var k in DEFAULTS) {
    var ok = k in saved && saved[k] !== null && typeof saved[k] === typeof DEFAULTS[k];
    v[k] = ok ? saved[k] : DEFAULTS[k];
  }
  v.sens = Math.max(1, Math.min(10, v.sens | 0));
  v.volume = Math.max(0, Math.min(10, v.volume | 0));
  v.difficulty = Math.max(0, Math.min(2, v.difficulty | 0));

  var progress = read(PKEY) || {};
  if (typeof progress.unlocked !== 'number') progress.unlocked = 0;
  if (!progress.best || typeof progress.best !== 'object') progress.best = {};

  var MEDALS = ['PAR', 'KILLS', 'ITEMS', 'SECRETS'];

  return {
    v: v,
    save: function () { write(KEY, v); },
    progress: progress,
    // the furthest level the player may start from
    unlock: function (idx) {
      if (idx > progress.unlocked) { progress.unlocked = idx; write(PKEY, progress); }
    },
    // Keep the best time and every medal ever earned on a level.
    // Returns { newBest, medals: [...earned this run], fresh: [...earned for the first time] }.
    record: function (idx, st) {
      var b = progress.best[idx] || { time: null, medals: {} };
      var got = [];
      if (st.time <= st.par) got.push('PAR');
      if (st.kills >= st.totalKills) got.push('KILLS');
      if (st.items >= st.totalItems) got.push('ITEMS');
      if (st.secrets >= st.totalSecrets) got.push('SECRETS');
      var fresh = got.filter(function (m) { return !b.medals[m]; });
      var newBest = b.time === null || st.time < b.time;
      if (newBest) b.time = Math.floor(st.time);
      got.forEach(function (m) { b.medals[m] = true; });
      progress.best[idx] = b;
      write(PKEY, progress);
      return { newBest: newBest, medals: got, fresh: fresh };
    },
    best: function (idx) { return progress.best[idx] || null; },
    MEDALS: MEDALS
  };
})();

var MENU = (function () {
  // A screen is { title, items, top, gap, scale, drawBg(ctx, t), drawExtra(ctx, t),
  //               footer, onBack, sel }.
  // An item is { label, action(), value() -> string, adjust(dir), slider: [min, max, get],
  //              disabled() -> bool, desc: string | fn }.
  var stack = [];
  var W = 320, H = 200;

  function top() { return stack[stack.length - 1] || null; }
  function val(x) { return typeof x === 'function' ? x() : x; }
  function items(sc) { return val(sc.items) || []; }
  function usable(it) { return it && !(it.disabled && it.disabled()); }

  function firstUsable(sc, from, dir) {
    var list = items(sc), n = list.length;
    for (var k = 0; k < n; k++) {
      var i = ((from + k * dir) % n + n) % n;
      if (usable(list[i])) return i;
    }
    return 0;
  }

  function frame(sc) {
    return { screen: sc, sel: firstUsable(sc, sc.sel || 0, 1), hover: -1 };
  }

  function open(sc) { stack = [frame(sc)]; }
  function push(sc) { stack.push(frame(sc)); SND.play('menu'); }
  function replace(sc) { stack[stack.length - 1] = frame(sc); }
  function close() { stack = []; }
  function isOpen() { return stack.length > 0; }

  function back() {
    if (stack.length > 1) { stack.pop(); SND.play('menu'); return true; }
    var f = top();
    if (f && f.screen.onBack) { f.screen.onBack(); return true; }
    return false;
  }

  function move(dir) {
    var f = top(), n = items(f.screen).length;
    if (!n) return;
    f.sel = firstUsable(f.screen, f.sel + dir, dir);
    SND.play('menu');
  }

  function activate(it, dir) {
    if (!usable(it)) return;
    if (it.adjust) {
      it.adjust(dir || 1);
      SND.play('menu');
    } else if (it.action) {
      SND.play('menuPick');
      it.action();
    }
  }

  function key(code) {
    var f = top();
    if (!f) return false;
    var list = items(f.screen), it = list[f.sel];
    switch (code) {
      case 'ArrowUp': case 'KeyW': move(-1); return true;
      case 'ArrowDown': case 'KeyS': case 'Tab': move(1); return true;
      case 'ArrowLeft': case 'KeyA': if (it && it.adjust) activate(it, -1); return true;
      case 'ArrowRight': case 'KeyD': if (it && it.adjust) activate(it, 1); return true;
      case 'Enter': case 'NumpadEnter': case 'Space': activate(it, 1); return true;
      case 'Escape': case 'Backspace': return back();
    }
    return false;
  }

  // ---- layout ---------------------------------------------------------------

  function geometry(sc) {
    var s = sc.scale || 1;
    return {
      s: s, top: sc.top || 60, gap: sc.gap || (s === 1 ? 12 : 14),
      x0: sc.x0 || 56, x1: sc.x1 || 264, rowH: 5 * s + 5
    };
  }

  function rowAt(sc, x, y) {
    var g = geometry(sc), list = items(sc);
    for (var i = 0; i < list.length; i++) {
      var ry = g.top + i * g.gap - 3;
      if (y >= ry && y < ry + g.rowH + 1 && x >= g.x0 - 8 && x <= g.x1 + 8) return i;
    }
    return -1;
  }

  // returns true if the pointer is over something clickable
  function pointer(x, y) {
    var f = top();
    if (!f) return false;
    var i = rowAt(f.screen, x, y);
    f.hover = i;
    if (i >= 0 && usable(items(f.screen)[i]) && i !== f.sel) { f.sel = i; SND.play('menu'); }
    return i >= 0 && usable(items(f.screen)[i]);
  }

  function click(x, y) {
    var f = top();
    if (!f) return;
    var i = rowAt(f.screen, x, y);
    if (i < 0) return;
    var it = items(f.screen)[i];
    if (!usable(it)) return;
    f.sel = i;
    // on a setting row, clicking the left half of the value turns it down
    var g = geometry(f.screen);
    var dir = it.adjust && x < g.x1 - 44 && x > (g.x0 + g.x1) / 2 ? -1 : 1;
    activate(it, dir);
  }

  // ---- drawing --------------------------------------------------------------

  function wrap(text, maxChars) {
    var words = String(text).split(' '), lines = [], cur = '';
    for (var i = 0; i < words.length; i++) {
      var next = cur ? cur + ' ' + words[i] : words[i];
      if (next.length > maxChars && cur) { lines.push(cur); cur = words[i]; }
      else cur = next;
    }
    if (cur) lines.push(cur);
    return lines;
  }

  function drawSlider(ctx, x1, y, it, selected) {
    var min = it.slider[0], max = it.slider[1], v = it.slider[2]();
    var n = max - min, bw = 4, gap = 1, wTot = n * (bw + gap) - gap;
    var x = x1 - wTot;
    for (var k = 0; k < n; k++) {
      ctx.fillStyle = k < v - min ? (selected ? '#ffd23e' : '#e03828') : '#2e2a24';
      ctx.fillRect(x + k * (bw + gap), y, bw, 5);
    }
    ART.drawText(ctx, String(v), x - 6, y, { color: selected ? '#ffd23e' : '#8a8478', right: true });
  }

  function render(ctx, t) {
    var f = top();
    if (!f) return;
    var sc = f.screen, g = geometry(sc), list = items(sc);
    if (sc.drawBg) sc.drawBg(ctx, t);
    if (sc.title) {
      ART.drawText(ctx, val(sc.title), W / 2, sc.titleY || 14, { scale: 3, color: '#ff9a28', shadow: '#401008', center: true });
    }
    if (sc.drawExtra) sc.drawExtra(ctx, t);

    for (var i = 0; i < list.length; i++) {
      var it = list[i], y = g.top + i * g.gap, sel = i === f.sel, on = usable(it);
      var label = val(it.label);
      if (sel) {
        ctx.fillStyle = 'rgba(255,110,24,0.16)';
        ctx.fillRect(g.x0 - 8, y - 3, g.x1 - g.x0 + 16, g.rowH);
        ctx.fillStyle = '#ff7a18';
        ctx.fillRect(g.x0 - 8, y - 3, 2, g.rowH);
        if ((t % 0.8) < 0.55) ART.drawText(ctx, '>', g.x0 - 4, y + (g.s - 1) * 2, { color: '#ffd23e' });
      }
      var col = !on ? '#4a463c' : sel ? '#ffd23e' : '#c8c0b0';
      var hasValue = it.value || it.slider;
      if (hasValue) {
        ART.drawText(ctx, label, g.x0 + 4, y, { scale: g.s, color: col, shadow: on });
        if (it.slider) drawSlider(ctx, g.x1, y + (g.s - 1) * 2, it, sel);
        else {
          var v = val(it.value);
          if (sel && it.adjust) v = '< ' + v + ' >';
          ART.drawText(ctx, v, g.x1, y, { scale: g.s, color: sel ? '#ffd23e' : '#e03828', right: true });
        }
      } else {
        ART.drawText(ctx, label, sc.alignLeft ? g.x0 + 4 : W / 2, y, { scale: g.s, color: col, shadow: on, center: !sc.alignLeft });
      }
    }

    // what the highlighted item does
    var cur = list[f.sel], desc = cur && usable(cur) ? val(cur.desc) : null;
    if (desc) {
      var lines = wrap(desc, 70), dy = sc.descY || 168;
      for (var l = 0; l < lines.length; l++) {
        ART.drawText(ctx, lines[l], W / 2, dy + l * 8, { color: '#a8a090', center: true });
      }
    }
    var footer = sc.footer === undefined ? 'ARROWS OR MOUSE: CHOOSE   ENTER: SELECT   ESC: BACK' : val(sc.footer);
    if (footer) ART.drawText(ctx, footer, W / 2, sc.footerY || 180, { color: '#5e584e', center: true });
  }

  return {
    open: open, push: push, replace: replace, close: close, back: back, isOpen: isOpen,
    key: key, pointer: pointer, click: click, render: render, wrap: wrap,
    current: function () { var f = top(); return f ? f.screen : null; },
    selected: function () { var f = top(); return f ? items(f.screen)[f.sel] : null; },
    depth: function () { return stack.length; }
  };
})();

if (typeof module !== 'undefined') module.exports = { SETTINGS: SETTINGS, MENU: MENU };
