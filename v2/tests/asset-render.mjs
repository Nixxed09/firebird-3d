// Renders every authored model through the stock three.js GLTFLoader (the one
// the game uses) and fails on the problems a glTF validator can't see:
//   - it doesn't load
//   - a demon is missing a clip a mob state needs (idle, walk, attack, pain,
//     death; attack_windup falls back to attack, as in src/render/models.js)
//   - it renders near-grey (colour lost on export) or near-black
//   - a cc0/ model has no row in cc0/CREDITS.md
// Warns on triangle budgets (docs/ASSETS.md), textures over 256 px, and ids the
// engine doesn't look for. Writes a contact sheet under neutral white light.
//   node tests/asset-render.mjs [--out dir]
import puppeteer from 'puppeteer-core';
import { build } from 'esbuild';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

var here = path.dirname(fileURLToPath(import.meta.url));
var root = path.join(here, '..');
var argv = process.argv.slice(2);
var OUT = argv.indexOf('--out') >= 0 ? argv[argv.indexOf('--out') + 1] : path.join(root, 'captures');
fs.mkdirSync(OUT, { recursive: true });

var DIRS = ['assets/codex', 'assets/cc0', 'assets'];              // same order as ASSET_DIRS
var KNOWN = ['imp', 'gnasher', 'knight', 'emberknight', 'riley', 'fist', 'pistol', 'shotgun', 'chaingun', 'rocketlauncher',
  'barrel', 'torch', 'lamp', 'lampbroken', 'crate', 'pipestraight', 'pipeelbow', 'pipevalve', 'chain', 'medkitsmall', 'medkitlarge',
  'bulletclip', 'shellbox', 'rocketbox', 'armor', 'keycardred', 'keycardblue', 'phoenixorb', 'shotgunpickup', 'chaingunpickup', 'rocketlauncherpickup'];
var BUDGET = { demon: [1500, 6000], weapon: [2000, 8000], prop: [100, 1500] };
var NEEDED = ['idle', 'walk', 'attack', 'pain', 'death'];
function norm(s) { return String(s || '').toLowerCase().replace(/\.[a-z0-9]+$/, '').replace(/.*[\/\\]/, '').replace(/[^a-z0-9]/g, ''); }
// the loader's rule (src/render/assets.js findClip): exact, then substring
function hasClip(names, want) { var n = norm(want); return names.some(function (c) { return norm(c) === n || norm(c).indexOf(n) >= 0; }); }

// every manifest, in either shape ({assets:[...]} or the older {files:[...]})
var entries = [];
DIRS.forEach(function (d) {
  var mf = path.join(root, d, 'assets.json');
  if (!fs.existsSync(mf)) return;
  var j = JSON.parse(fs.readFileSync(mf, 'utf8'));
  (j.assets || j.files || []).forEach(function (a) {
    if (a.type === 'texture' || !a.file || !/\.glb$/i.test(a.file)) return;   // models only (the older manifest also lists previews and notes)
    if (entries.some(function (x) { return x.dir === d && x.file === a.file; })) return;
    var type = /demon/.test(a.type) ? 'demon' : /weapon/.test(a.type) ? 'weapon' : 'prop';
    entries.push({ dir: d, id: a.id || norm(a.file), file: a.file, type: type });
  });
});
var credits = fs.existsSync(path.join(root, 'assets/cc0/CREDITS.md')) ? fs.readFileSync(path.join(root, 'assets/cc0/CREDITS.md'), 'utf8') : '';

var VIEWER = `
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
window.inspect = async function (b64, clipName) {
  var bin = Uint8Array.from(atob(b64), function (c) { return c.charCodeAt(0); }).buffer;
  var gltf = await new Promise(function (res, rej) { new GLTFLoader().parse(bin, '', res, rej); });
  var obj = gltf.scene, tris = 0, texMax = 0;
  var shield = obj.getObjectByName('shield'); if (shield) shield.visible = false;
  obj.traverse(function (o) {
    if (!o.isMesh) return;
    var g = o.geometry; tris += (g.index ? g.index.count : g.attributes.position.count) / 3;
    (Array.isArray(o.material) ? o.material : [o.material]).forEach(function (m) {
      ['map', 'emissiveMap', 'normalMap', 'roughnessMap', 'metalnessMap'].forEach(function (k) {
        var t = m[k]; if (t && t.image) texMax = Math.max(texMax, t.image.width || 0, t.image.height || 0);
      });
    });
  });
  var clips = gltf.animations.map(function (a) { return a.name; });
  var mixer = new THREE.AnimationMixer(obj);
  var clip = gltf.animations.find(function (a) { return a.name === clipName; }) || gltf.animations[0];
  if (clip) { mixer.clipAction(clip).play(); mixer.update(clip.duration * 0.3); }
  obj.updateMatrixWorld(true);
  // neutral white light on black, so we measure the material's own colour
  var S = 160, r = new THREE.WebGLRenderer({ antialias: false, preserveDrawingBuffer: true });
  r.setSize(S, S, false); r.outputColorSpace = THREE.SRGBColorSpace;
  var scene = new THREE.Scene(); scene.background = new THREE.Color(0x000000);
  scene.add(new THREE.HemisphereLight(0xffffff, 0x444444, 1.2));
  var d = new THREE.DirectionalLight(0xffffff, 1.6); d.position.set(1, 2, 3); scene.add(d);
  scene.add(obj);
  var box = new THREE.Box3().setFromObject(obj), size = box.getSize(new THREE.Vector3()), c = box.getCenter(new THREE.Vector3());
  var h = Math.max(size.x, size.y, size.z, 0.001);
  var cam = new THREE.PerspectiveCamera(40, 1, h / 100, h * 50);
  cam.position.set(c.x + h * 0.7, c.y + h * 0.3, c.z + h * 1.5); cam.lookAt(c);
  r.render(scene, cam);
  var px = new Uint8Array(S * S * 4), gl = r.getContext();
  gl.readPixels(0, 0, S, S, gl.RGBA, gl.UNSIGNED_BYTE, px);
  var n = 0, lum = 0, chroma = 0;
  for (var i = 0; i < px.length; i += 4) {
    var R = px[i], G = px[i + 1], B = px[i + 2];
    if (R + G + B < 6) continue; // background
    n++; lum += 0.299 * R + 0.587 * G + 0.114 * B; chroma += Math.max(R, G, B) - Math.min(R, G, B);
  }
  return { tris: Math.round(tris), texMax: texMax, clips: clips, size: [size.x, size.y, size.z],
    coverage: n / (S * S), lum: n ? lum / n : 0, chroma: n ? chroma / n : 0, png: r.domElement.toDataURL('image/png') };
};`;

var bundle = await build({ stdin: { contents: VIEWER, resolveDir: root, loader: 'js' }, bundle: true, format: 'iife', write: false, logLevel: 'warning' });
var browser = await puppeteer.launch({
  executablePath: process.env.CHROME || 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new', args: ['--use-angle=d3d11', '--enable-gpu', '--ignore-gpu-blocklist']
});
var page = await browser.newPage();
await page.setContent('<html><body></body></html>');
await page.addScriptTag({ content: bundle.outputFiles[0].text });

var fails = 0, warns = 0, thumbs = [];
console.log('Asset render check: ' + entries.length + ' models in ' + DIRS.join(', '));
for (var e of entries) {
  var file = path.join(root, e.dir, e.file), label = e.dir.replace('assets/', '').replace('assets', 'root') + '/' + e.id;
  var problems = [], notes = [];
  if (!fs.existsSync(file)) { console.log('  FAIL ' + label + ': file missing (' + e.file + ')'); fails++; continue; }
  var s;
  try { s = await page.evaluate(function (b, c) { return window.inspect(b, c); }, fs.readFileSync(file).toString('base64'), 'idle'); }
  catch (err) { console.log('  FAIL ' + label + ': does not load: ' + err.message.split('\n')[0]); fails++; continue; }
  if (e.type === 'demon') {
    var missing = NEEDED.filter(function (c) { return !hasClip(s.clips, c); });
    if (missing.length) problems.push('no clip for ' + missing.join(', ') + ' (has: ' + (s.clips.join(', ') || 'none') + ')');
    if (s.chroma < 20) problems.push('renders near-grey (colour ' + s.chroma.toFixed(0) + '/255): colour lost on export?');
  }
  else if (s.chroma < 3) notes.push('no colour at all (' + s.chroma.toFixed(1) + '/255): fine for bare metal, a bug for wood, fire or paint');
  if (s.lum < 18) problems.push('renders near-black (brightness ' + s.lum.toFixed(0) + '/255)');
  if (e.dir === 'assets/cc0' && credits.indexOf('`' + e.id + '`') < 0) problems.push('no row in cc0/CREDITS.md');
  var b = BUDGET[e.type];
  if (b && (s.tris < b[0] || s.tris > b[1])) notes.push(s.tris + ' tris (budget ' + b[0] + '-' + b[1] + ')');
  if (s.texMax > 256) notes.push('texture ' + s.texMax + ' px (retro look wants <= 256)');
  if (KNOWN.indexOf(norm(e.id)) < 0) notes.push('id "' + e.id + '" is not one the engine looks for');
  var line = label + ' (' + e.type + ', ' + s.tris + ' tris, colour ' + s.chroma.toFixed(0) + ', brightness ' + s.lum.toFixed(0) + ')';
  if (problems.length) { fails++; console.log('  FAIL ' + line + ': ' + problems.join('; ')); }
  else console.log('  ok   ' + line);
  notes.forEach(function (nt) { warns++; console.log('       warn: ' + nt); });
  thumbs.push({ label: label, png: s.png, bad: problems.length > 0 });
}

// contact sheet of what was checked, failures outlined in red
var sheet = await page.evaluate(async function (thumbs) {
  var S = 160, cols = 6, rows = Math.ceil(thumbs.length / cols);
  var c = document.createElement('canvas'); c.width = cols * S; c.height = rows * (S + 16);
  var x = c.getContext('2d'); x.fillStyle = '#111'; x.fillRect(0, 0, c.width, c.height);
  for (var i = 0; i < thumbs.length; i++) {
    var img = new Image(); img.src = thumbs[i].png; await img.decode();
    var px = (i % cols) * S, py = Math.floor(i / cols) * (S + 16);
    x.drawImage(img, px, py);
    if (thumbs[i].bad) { x.strokeStyle = '#ff3030'; x.lineWidth = 3; x.strokeRect(px + 1, py + 1, S - 2, S - 2); }
    x.fillStyle = thumbs[i].bad ? '#ff6060' : '#e8e0c8'; x.font = '11px monospace'; x.fillText(thumbs[i].label, px + 3, py + S + 12);
  }
  return c.toDataURL('image/png');
}, thumbs);
fs.writeFileSync(path.join(OUT, 'asset-render.png'), Buffer.from(sheet.split(',')[1], 'base64'));
await browser.close();
console.log((fails ? 'ASSET CHECK FAILED: ' + fails + ' model(s)' : 'asset check passed') + (warns ? ', ' + warns + ' warning(s)' : '') + '. Sheet: ' + path.join(OUT, 'asset-render.png'));
process.exit(fails ? 1 : 0);
