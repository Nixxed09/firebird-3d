// Contact sheet for 3D models: renders each .glb in a pose, in the game's
// retro-modern look (a third of the resolution, nearest-pixel upscale, warm
// key light, cool rim, fog), in real Chrome. For choosing and reviewing assets.
//   node tests/asset-sheet.mjs out.png "model.glb|Clip|label" ...
// Clip is an animation name (posed 40% through); leave it empty for a still.
import puppeteer from 'puppeteer-core';
import { build } from 'esbuild';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

var here = path.dirname(fileURLToPath(import.meta.url));
var args = process.argv.slice(2), out = args.shift();
if (!out || !args.length) { console.log('usage: node tests/asset-sheet.mjs out.png "file.glb|Clip|label" ...'); process.exit(1); }

var VIEWER = `
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
var CELL = 240, LOW = 3;
window.renderSheet = async function (models, cols) {
  var rows = Math.ceil(models.length / cols);
  var out = document.createElement('canvas');
  out.width = cols * CELL; out.height = rows * (CELL + 18);
  var octx = out.getContext('2d');
  octx.fillStyle = '#111'; octx.fillRect(0, 0, out.width, out.height);
  octx.imageSmoothingEnabled = false;
  var r = new THREE.WebGLRenderer({ antialias: false, preserveDrawingBuffer: true });
  r.setSize(CELL / LOW, CELL / LOW, false);
  r.outputColorSpace = THREE.SRGBColorSpace;
  var loader = new GLTFLoader();
  for (var i = 0; i < models.length; i++) {
    var m = models[i];
    var bin = Uint8Array.from(atob(m.b64), function (c) { return c.charCodeAt(0); }).buffer;
    var gltf = await new Promise(function (res, rej) { loader.parse(bin, '', res, rej); });
    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1410);
    scene.fog = new THREE.Fog(0x1a1410, 6, 14);
    scene.add(new THREE.HemisphereLight(0x8899aa, 0x201008, 0.9));
    var key = new THREE.DirectionalLight(0xffc080, 2.2); key.position.set(2, 3, 2); scene.add(key);
    var rim = new THREE.DirectionalLight(0x60c0ff, 1.2); rim.position.set(-2, 2, -3); scene.add(rim);
    var obj = gltf.scene; scene.add(obj);
    var mixer = new THREE.AnimationMixer(obj), clip = null;
    if (m.clip) clip = gltf.animations.find(function (a) { return a.name.replace(/^.*\\|/, '') === m.clip; });
    if (clip) { mixer.clipAction(clip).play(); mixer.update(clip.duration * 0.4); }
    obj.updateMatrixWorld(true);
    var box = new THREE.Box3().setFromObject(obj), size = box.getSize(new THREE.Vector3()), c = box.getCenter(new THREE.Vector3());
    var h = Math.max(size.y, size.x * 0.8, 0.001);
    var cam = new THREE.PerspectiveCamera(40, 1, h / 100, h * 50);
    cam.position.set(c.x + h * 0.9, c.y + h * 0.25, c.z + h * 1.6); cam.lookAt(c);
    scene.fog.near = h * 1.5; scene.fog.far = h * 5;
    r.render(scene, cam);
    var x = (i % cols) * CELL, y = Math.floor(i / cols) * (CELL + 18);
    octx.drawImage(r.domElement, x, y, CELL, CELL);
    octx.fillStyle = '#e8e0c8'; octx.font = '12px monospace';
    octx.fillText(m.label + (m.clip ? ' / ' + m.clip : '') + (clip || !m.clip ? '' : ' (no clip)'), x + 4, y + CELL + 13);
    octx.fillText('h ' + size.y.toFixed(2), x + CELL - 58, y + 14);
  }
  return out.toDataURL('image/png');
};`;

var bundle = await build({
  stdin: { contents: VIEWER, resolveDir: path.join(here, '..'), loader: 'js' },
  bundle: true, format: 'iife', write: false, logLevel: 'warning'
});
var models = args.map(function (a) {
  var p = a.split('|');
  return { b64: fs.readFileSync(p[0]).toString('base64'), clip: p[1] || null, label: p[2] || path.basename(p[0]) };
});
var browser = await puppeteer.launch({
  executablePath: process.env.CHROME || 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new', args: ['--use-angle=d3d11', '--enable-gpu', '--ignore-gpu-blocklist']
});
var page = await browser.newPage();
page.on('pageerror', function (e) { console.log('page error: ' + e.message); });
await page.setContent('<html><body></body></html>');
await page.addScriptTag({ content: bundle.outputFiles[0].text });
var url = await page.evaluate(function (m) { return window.renderSheet(m, 4); }, models);
fs.writeFileSync(out, Buffer.from(url.split(',')[1], 'base64'));
await browser.close();
console.log('wrote ' + out);
