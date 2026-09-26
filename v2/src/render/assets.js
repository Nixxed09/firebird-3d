// Loads authored art (glTF models, PNG texture sets) listed in
// assets/assets.json. Anything missing, broken or slow simply isn't used:
// the game falls back to the art it builds in code, so it never breaks.
// The contract for asset authors is docs/ASSETS.md.
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js';

export var CELL = 2; // metres per grid cell: authored art (metres) is scaled by 1/CELL in the world

// what the engine asks for -> names an author might reasonably use
var ALIASES = {
  imp: ['imp'], gnasher: ['gnasher'], knight: ['knight', 'emberknight', 'ember_knight'], riley: ['riley', 'rileyhologram'],
  fist: ['fist', 'fists', 'fpfist', 'weaponfist'], pistol: ['pistol', 'fppistol', 'weaponpistol'],
  shotgun: ['shotgun', 'fpshotgun', 'weaponshotgun', 'pumpshotgun', 'doublebarrelshotgun'],
  chaingun: ['chaingun', 'fpchaingun', 'weaponchaingun', 'minigun'], rocket: ['rocketlauncher', 'rocket', 'fprocketlauncher', 'weaponrocketlauncher', 'launcher'],
  crate: ['crate', 'woodencrate', 'crateintact'], barrel: ['barrel', 'explosivebarrel', 'toxicbarrel'], torch: ['torch', 'standingtorch'],
  lamp: ['lamp', 'ceilinglamp', 'cagedlamp', 'ceilinglampintact', 'lampintact'], lampBroken: ['lampbroken', 'ceilinglampbroken', 'brokenlamp'],
  pipeStraight: ['pipestraight', 'pipe'], pipeElbow: ['pipeelbow', 'elbow'], pipeValve: ['pipevalve', 'valve'], chain: ['chain', 'hangingchain'],
  'pickup:h': ['medkitsmall', 'stimpack', 'smallmedkit', 'stim'], 'pickup:+': ['medkitlarge', 'medkit', 'largemedkit', 'medikit'],
  'pickup:b': ['bulletclip', 'clip', 'ammoclip', 'bullets'], 'pickup:a': ['shellbox', 'shells', 'boxofshells'],
  'pickup:k': ['rocketbox', 'rockets', 'boxofrockets'], 'pickup:A': ['armor', 'armour', 'armorvest', 'armourvest', 'vest'],
  'pickup:r': ['keycardred', 'redkeycard', 'keyred'], 'pickup:u': ['keycardblue', 'bluekeycard', 'keyblue'],
  'pickup:P': ['phoenixorb', 'orb'], 'pickup:2': ['shotgunpickup', 'pickupshotgun'],
  'pickup:3': ['chaingunpickup', 'pickupchaingun'], 'pickup:4': ['rocketlauncherpickup', 'pickuprocketlauncher'],
  // surface sets
  'tex:1': ['brick'], 'tex:2': ['stone'], 'tex:3': ['metalpanel', 'metal'], 'tex:4': ['techpanel', 'tech'], 'tex:5': ['hellrock', 'hell'],
  'tex:6': ['door', 'doorplain'], 'tex:7': ['doorred', 'doorredstripe', 'reddoor'], 'tex:8': ['doorblue', 'doorbluestripe', 'bluedoor'],
  'tex:9': ['switchoff'], 'tex:10': ['switchon'],
  'tex:slab': ['floorslab', 'slab'], 'tex:tech': ['floorgrate', 'grate'], 'tex:hell': ['lavafloor', 'floorlava'],
  'tex:ceilDark': ['ceilingpanel', 'ceiling'], 'tex:ceilTech': ['ceilingpanel', 'ceilingtech'], 'tex:ceilHell': ['hellrock', 'ceilinghell']
};

function norm(s) { return String(s || '').toLowerCase().replace(/\.[a-z0-9]+$/, '').replace(/.*[\/\\]/, '').replace(/[^a-z0-9]/g, ''); }

export function emptyAssets() {
  var reg = { models: {}, textures: {}, ready: false, loaded: [], problems: [] };
  reg.model = function (key) {
    var names = ALIASES[key] || [key];
    for (var i = 0; i < names.length; i++) if (reg.models[names[i]]) return reg.models[names[i]];
    return null;
  };
  reg.texture = function (key) {
    var names = ALIASES[key] || [key];
    for (var i = 0; i < names.length; i++) if (reg.textures[names[i]]) return reg.textures[names[i]];
    return null;
  };
  return reg;
}

// Asset folders, highest priority first. Each has its own assets.json.
export var ASSET_DIRS = ['assets', 'assets/codex', 'assets/cc0'];

// The build packs every manifest and a compact starter set into dist/assets-pack.js
// (window.FIREBIRD_ASSET_PACK = { 'assets/cc0/assets.json': {...}, 'assets/cc0/imp.glb': 'base64...' }),
// which works even from a double-clicked file. Without a pack, fetch over http.
function packed(path) {
  var pack = typeof window !== 'undefined' && window.FIREBIRD_ASSET_PACK;
  return pack && Object.prototype.hasOwnProperty.call(pack, path) ? pack[path] : undefined;
}
function fileUrl(path) {
  var b64 = packed(path);
  if (b64 === undefined) return path;
  var mime = /\.png$/i.test(path) ? 'image/png' : /\.jpe?g$/i.test(path) ? 'image/jpeg' : /\.webp$/i.test(path) ? 'image/webp' : 'model/gltf-binary';
  return 'data:' + mime + ';base64,' + b64;
}
function manifest(dir) {
  var inPack = packed(dir + '/assets.json');
  if (inPack !== undefined) return Promise.resolve(inPack);
  if (typeof location !== 'undefined' && location.protocol === 'file:') return Promise.resolve(null); // the browser blocks file fetches
  return fetch(dir + '/assets.json', { cache: 'no-cache' }).then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; });
}

// Resolves with a registry; never rejects. The first folder to supply an id wins.
export function loadAssets(dirs, initialKeys) {
  var pack = typeof window !== 'undefined' && window.FIREBIRD_ASSET_PACK;
  dirs = dirs || (pack && pack.__dirs) || ASSET_DIRS;
  var reg = emptyAssets();
  var loader = new GLTFLoader(), texLoader = new THREE.TextureLoader();
  var catalog = [], inflight = {};
  reg.ensure = function (keys) {
    var jobs = Array.from(new Set(keys || [])).map(function (key) {
      var table = key.indexOf('tex:') === 0 ? reg.texture : reg.model;
      if (table(key)) return Promise.resolve();
      if (inflight[key]) return inflight[key];
      var names = (ALIASES[key] || [key]).map(norm);
      var candidates = catalog.filter(function (c) { return names.indexOf(c.id) >= 0; });
      candidates.sort(function (a, b) { return a.priority - b.priority; });
      var job = candidates.reduce(function (chain, c) {
        return chain.then(function () {
          if (table(key)) return;
          var file = c.entry.file || c.entry.path || c.entry.src;
          // A double-clicked build uses its compact starter pack. Missing art
          // falls back to procedural visuals instead of making blocked file requests.
          if (typeof location !== 'undefined' && location.protocol === 'file:') {
            var refs = [file].concat(Object.values(c.entry.maps || c.entry.textures || {})).filter(Boolean);
            if (refs.some(function (ref) { return packed(c.dir + '/' + ref) === undefined; })) return;
          }
          return loadOne(c.dir, c.entry, c.priority);
        });
      }, Promise.resolve()).finally(function () { delete inflight[key]; });
      inflight[key] = job;
      return job;
    });
    return Promise.all(jobs).then(function () { reg.ready = true; return reg; });
  };
  return Promise.all(dirs.map(function (d) { return manifest(d).then(function (m) { return { dir: d, man: m }; }); })).then(function (found) {
    found.forEach(function (f, priority) {
      if (!f.man) return;
      var list = Array.isArray(f.man) ? f.man : f.man.assets || f.man.files || [];
      list.forEach(function (a) { catalog.push({ dir: f.dir, entry: a, priority: priority, id: norm(a.id || a.name || a.file) }); });
    });
    return reg.ensure(initialKeys || []);
  });

  function claim(table, id, value, priority) {
    var cur = table[id];
    if (!cur || cur.priority > priority) { value.priority = priority; table[id] = value; }
  }

  function loadOne(dir, a, priority) {
    var file = a.file || a.path || a.src;
    var type = String(a.type || a.kind || '').toLowerCase();
    var id = norm(a.id || a.name || file);
    if (file && /\.glb$/i.test(file)) {
      return withTimeout(loader.loadAsync(fileUrl(dir + '/' + file)), 20000).then(function (g) {
        claim(reg.models, id, { scene: g.scene, animations: g.animations || [], meta: a, type: type, dir: dir }, priority);
        reg.loaded.push(dir + ':' + id);
      }).catch(function (e) { reg.problems.push(dir + '/' + file + ': ' + (e && e.message || e)); });
    }
    if (type.indexOf('tex') === 0 || a.maps || a.textures) {
      var maps = a.maps || a.textures || {}, set = {}, sub = [];
      var want = { map: ['albedo', 'basecolor', 'base_color', 'color', 'diffuse'], normalMap: ['normal', 'normalmap'], roughnessMap: ['roughness', 'rough', 'orm'], emissiveMap: ['emissive', 'emission', 'glow'] };
      var pixel = a.filter !== 'linear'; // retro look: chunky texels unless the author asks otherwise
      Object.keys(want).forEach(function (slot) {
        var f = null;
        Object.keys(maps).forEach(function (k) { if (want[slot].indexOf(k.toLowerCase().replace(/[^a-z_]/g, '')) >= 0) f = maps[k]; });
        if (!f) return;
        sub.push(withTimeout(texLoader.loadAsync(fileUrl(dir + '/' + f)), 20000).then(function (t) {
          t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8;
          t.colorSpace = slot === 'map' || slot === 'emissiveMap' ? THREE.SRGBColorSpace : THREE.NoColorSpace;
          if (pixel) { t.magFilter = THREE.NearestFilter; }
          set[slot] = t;
        }).catch(function (e) { reg.problems.push(dir + '/' + f + ': ' + (e && e.message || e)); }));
      });
      return Promise.all(sub).then(function () { if (set.map) { claim(reg.textures, id, set, priority); reg.loaded.push(dir + ':tex:' + id); } });
    }
    return null;
  }
}

function withTimeout(p, ms) {
  return new Promise(function (res, rej) { var t = setTimeout(function () { rej(new Error('timed out')); }, ms); p.then(function (v) { clearTimeout(t); res(v); }, function (e) { clearTimeout(t); rej(e); }); });
}

// A fresh, independently animated copy of a loaded model.
export function instance(entry) {
  var obj = SkeletonUtils.clone(entry.scene);
  obj.traverse(function (o) {
    if (o.isMesh) {
      o.castShadow = true;
      o.frustumCulled = !o.isSkinnedMesh; // skinned meshes can move outside their bind-pose bounds
      if (o.material) o.material = Array.isArray(o.material) ? o.material.map(function (m) { return m.clone(); }) : o.material.clone();
    }
  });
  var mixer = entry.animations.length ? new THREE.AnimationMixer(obj) : null;
  var clips = {};
  entry.animations.forEach(function (c) { clips[norm(c.name).replace(/^.*\|/, '')] = c; });
  return { obj: obj, mixer: mixer, clips: clips };
}

export function findClip(clips, name) {
  var n = norm(name);
  if (clips[n]) return clips[n];
  for (var k in clips) if (k.indexOf(n) >= 0) return clips[k];
  return null;
}
