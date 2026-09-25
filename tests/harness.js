// Loads the real game engine into node with a stubbed browser, for tools that
// drive it (tests/playtest.js). Scripts load in the same order as index.html.
//
// Every call to create() builds a brand-new sandbox: its own engine, its own
// localStorage and its own seeded Math.random. Nothing one run does can leak
// into the next, so any run can be replayed exactly from its seed.
'use strict';
var fs = require('fs');
var path = require('path');
var vm = require('vm');

var ROOT = path.join(__dirname, '..');

function ctxStub() {
  return new Proxy({}, {
    get: function (t, k) {
      if (k === 'createImageData') return function (w, h) { return { data: new Uint8ClampedArray(w * h * 4) }; };
      if (k === 'measureText') return function () { return { width: 0 }; };
      if (k in t) return t[k];
      return function () { };
    },
    set: function (t, k, v) { t[k] = v; return true; }
  });
}
function canvasStub() {
  return { width: 320, height: 200, style: {}, getContext: function () { return ctxStub(); }, addEventListener: function () { } };
}

var scripts = null;
function engineScripts() {
  if (scripts) return scripts;
  var html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  var re = /<script src="([^"]+)"><\/script>/g, m;
  scripts = [];
  while ((m = re.exec(html))) {
    var file = path.join(ROOT, m[1]);
    scripts.push(new vm.Script(fs.readFileSync(file, 'utf8'), { filename: file }));
  }
  return scripts;
}

// mulberry32, installed as the sandbox's Math.random
function seeded(n) {
  var s = n >>> 0;
  return function () {
    s = (s + 0x6D2B79F5) >>> 0;
    var t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// A fresh game. Returns { FB, env, store, random }: FB is the engine's debug
// hook, env the sandbox's globals (LEVELS, SETTINGS, RILEY, ...).
function create(seed) {
  var store = {};
  var env = {
    console: console,
    addEventListener: function () { },
    localStorage: {
      getItem: function (k) { return k in store ? store[k] : null; },
      setItem: function (k, v) { store[k] = String(v); },
      removeItem: function (k) { delete store[k]; }
    },
    document: {
      getElementById: canvasStub, createElement: canvasStub, body: { style: {} },
      addEventListener: function () { }, pointerLockElement: null
    },
    location: { search: '?autostart&level=0&debug' },
    requestAnimationFrame: function () { }
  };
  env.window = env;
  vm.createContext(env);
  var random = seeded(seed == null ? 1 : seed);
  vm.runInContext('Math', env).random = random;
  engineScripts().forEach(function (s) { s.runInContext(env); });
  return { FB: env.FIREBIRD, env: env, store: store, random: random };
}

module.exports = { create: create };
