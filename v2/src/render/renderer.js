// The WebGL renderer: reads the simulation state each frame and draws it.
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { buildLevel } from './level.js';
import { makeMob, makePickup, makeTorch, shotgunModel, pistolModel, fistModel, chaingunModel, rocketModel, addHand } from './models.js';
import { makeFx } from './fx.js';
import { emptyAssets, instance } from './assets.js';

var FOG = { slab: 0x0c0907, tech: 0x06090c, hell: 0x160604 };

export function createRenderer(canvas, opts) {
  opts = opts || {};
  var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, powerPreference: 'high-performance', preserveDrawingBuffer: !!opts.preserve });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.45;
  // something for metal to reflect: without it, guns and armour render black
  var pmrem = new THREE.PMREMGenerator(renderer);
  var envMap = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = false;
  renderer.info.autoReset = false; // count the whole frame (world, bloom, weapon), not just the last pass

  var camera = new THREE.PerspectiveCamera(78, 16 / 9, 0.03, 60);
  camera.rotation.order = 'YXZ';
  var scene = null, composer = null, bloom = null, level = null, fx = null;
  var models = new Map(), torchLights = [], projs = new Map();
  var viewScene = new THREE.Scene(), viewCam = new THREE.PerspectiveCamera(60, 16 / 9, 0.01, 5);
  var viewLight = new THREE.PointLight(0xffb070, 0, 3, 1.5);
  var viewKey = new THREE.DirectionalLight(0xffd8b0, 1.2); viewKey.position.set(-1, 2, 1);
  viewScene.add(new THREE.AmbientLight(0xffffff, 0.35), new THREE.HemisphereLight(0xffe0c0, 0x201810, 0.8), viewLight, viewKey);
  viewScene.environment = envMap;
  viewScene.environmentIntensity = 0.6;
  var assets = emptyAssets();
  var gunRig = new THREE.Group(), guns = {};
  viewScene.add(gunRig);
  // where each weapon sits in view (metres, camera space); authored guns have their origin at the grip
  var GUN_POSE = {
    fist: { p: [0.14, -0.15, -0.3], ry: 0 }, pistol: { p: [0.15, -0.14, -0.38], ry: 0.06 }, shotgun: { p: [0.1, -0.13, -0.2], ry: 0.04 },
    chaingun: { p: [0.18, -0.17, -0.22], ry: 0.28 }, rocket: { p: [0.18, -0.16, -0.2], ry: 0.26 }
  };
  var BUILT_IN = { fist: fistModel, pistol: pistolModel, shotgun: shotgunModel, chaingun: chaingunModel, rocket: rocketModel };
  function makeGuns() {
    Object.keys(guns).forEach(function (k) { gunRig.remove(guns[k]); });
    guns = {};
    Object.keys(GUN_POSE).forEach(function (k) {
      var entry = assets.model(k), g;
      if (entry) {
        g = new THREE.Group();
        var inst = instance(entry); g.add(inst.obj);
        inst.obj.rotation.y = Math.PI; // authored models face +Z; the view camera looks down -Z
        // fit any authored gun to the same on-screen length as the built-in one
        inst.obj.updateMatrixWorld(true);
        var box = new THREE.Box3().setFromObject(inst.obj, true), len = box.max.z - box.min.z;
        g.userData.authoredLength = len;
        var WANT = { fist: 0.2, pistol: 0.24, shotgun: 0.85, chaingun: 0.68, rocket: 0.72 };
        if (len > 1e-3 && WANT[k]) inst.obj.scale.multiplyScalar(WANT[k] / len);
        ['pump', 'slide', 'barrels', 'tube'].forEach(function (n) { var node = inst.obj.getObjectByName(n); if (node) g.userData[n] = node; });
        g.userData.authored = true;
        // FIREBIRD's original weapon kit already contains both glove and sleeve meshes.
        if (entry.dir !== 'assets') addHand(g, k);
      } else if (BUILT_IN[k]) g = BUILT_IN[k]();
      else return;
      // The larger fallback guns use the same screen footprint as authored art.
      if (!entry && (k === 'chaingun' || k === 'rocket')) g.scale.setScalar(k === 'rocket' ? 0.45 : 0.48);
      g.updateMatrixWorld(true);
      var gunBox = new THREE.Box3().setFromObject(g, true);
      var muzzlePart = k === 'chaingun' ? g.userData.barrels : k === 'rocket' ? g.userData.tube : k === 'pistol' ? g.userData.slide : null;
      var muzzleBox = muzzlePart ? new THREE.Box3().setFromObject(muzzlePart, true) : gunBox;
      g.userData.muzzle = new THREE.Vector3(
        (muzzleBox.min.x + muzzleBox.max.x) * 0.5,
        (muzzleBox.min.y + muzzleBox.max.y) * 0.5,
        muzzleBox.min.z + 0.015
      ).divide(g.scale);
      var pose = GUN_POSE[k];
      // Keep the rear of a heavy gun in front of the view camera. Authored
      // grips can extend behind their origin and otherwise fill the screen.
      var baseZ = k === 'chaingun' || k === 'rocket' ? -0.27 - gunBox.max.z : pose.p[2];
      g.position.set(pose.p[0], pose.p[1], baseZ); g.rotation.y = pose.ry;
      g.userData.baseZ = baseZ;
      g.visible = false;
      gunRig.add(g); guns[k] = g;
    });
  }
  makeGuns();
  // moving parts slide along their own z from wherever the artist put them
  function offsetZ(node, dz) {
    if (!node) return;
    if (node.userData.z0 === undefined) node.userData.z0 = node.position.z;
    node.position.z = node.userData.z0 + dz;
  }
  var flashSprite = new THREE.Mesh(new THREE.SphereGeometry(1, 10, 8), new THREE.MeshBasicMaterial({ color: 0xffd080, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false }));
  flashSprite.scale.setScalar(0.035);
  viewScene.add(flashSprite);
  var bob = 0, sway = { x: 0, y: 0 }, lastAng = 0, lastPitch = 0, G0 = null, viewport = { w: 1, h: 1, top: 0 };

  function buildScene(G) {
    G0 = G;
    scene = new THREE.Scene();
    var fogCol = FOG[G.L.floor] || FOG.slab;
    scene.background = new THREE.Color(fogCol);
    scene.fog = new THREE.FogExp2(fogCol, 0.032);
    scene.environment = envMap;
    scene.environmentIntensity = 0.25;
    scene.add(new THREE.HemisphereLight(0xa08878, 0x201a20, 0.9));
    scene.add(new THREE.AmbientLight(0x504848, 0.5));
    level = buildLevel(G, assets);
    scene.add(level.group);
    fx = makeFx(scene);
    models.clear(); projs.clear(); torchLights = [];
    // a warm light at every torch (a fixed number, so shaders never recompile mid-fight)
    G.ents.forEach(function (e) {
      if (e.kind !== 'torch') return;
      var m = makeTorch(e, assets); scene.add(m.obj); models.set(e, m);
      var L = new THREE.PointLight(0xff8a3a, 2.2, 7.5, 1.4);
      L.position.set(e.x, e.y + 1.0, e.z);
      L.userData.e = e;
      scene.add(L); torchLights.push(L);
    });
    // a soft fill light in every room, up near the ceiling, so nothing is pitch black
    rooms(G).forEach(function (r) {
      var fill = new THREE.PointLight(0xc8b8a8, 1.6 + r.size * 0.02, 4 + Math.sqrt(r.size) * 1.6, 1.1);
      fill.position.set(r.x, r.y, r.z);
      scene.add(fill);
      // and the fixture it comes from: a caged lamp on the ceiling
      var lampEntry = assets.model('lamp');
      if (lampEntry) {
        var li = instance(lampEntry); li.obj.scale.setScalar(0.5); li.obj.position.set(r.x, r.y + 0.4, r.z); scene.add(li.obj);
        return;
      }
      var lamp = new THREE.Group();
      var panel = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.05, 0.5), new THREE.MeshStandardMaterial({ color: 0x000000, emissive: 0xffe6c0, emissiveIntensity: 1.1 }));
      var cage = new THREE.Mesh(new THREE.BoxGeometry(0.58, 0.1, 0.58), new THREE.MeshStandardMaterial({ color: 0x2a2826, metalness: 0.8, roughness: 0.4, wireframe: true }));
      lamp.add(panel, cage);
      lamp.position.set(r.x, r.y + 0.35, r.z);
      scene.add(lamp);
    });
    composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.75, 0.55, 0.82);
    composer.addPass(bloom);
    composer.addPass(new OutputPass());
    resize(canvas.clientWidth, canvas.clientHeight);
  }

  // w x h is the 3D view's own size (the page keeps it above the status bar)
  function ceilUnder(W, x, z, fallback) {
    var i = Math.floor(z) * W.mw + Math.floor(x);
    return W.cells[i] === 0 ? W.ceil[i] : fallback;
  }

  // open areas bounded by walls and doors, with their centre and size
  function rooms(G) {
    var W = G.W, seen = new Uint8Array(W.mw * W.mh), out = [];
    for (var i = 0; i < W.cells.length; i++) {
      if (seen[i] || W.cells[i] !== 0) continue;
      var q = [i], sx = 0, sz = 0, top = 0, n = 0; seen[i] = 1;
      while (q.length) {
        var c = q.pop(), x = c % W.mw, z = (c / W.mw) | 0;
        sx += x + 0.5; sz += z + 0.5; top = Math.max(top, W.ceil[c]); n++;
        [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(function (o) {
          var nx = x + o[0], nz = z + o[1], ni = nz * W.mw + nx;
          if (nx < 0 || nz < 0 || nx >= W.mw || nz >= W.mh || seen[ni] || W.cells[ni] !== 0) return;
          seen[ni] = 1; q.push(ni);
        });
      }
      if (n >= 3) out.push({ x: sx / n, z: sz / n, y: ceilUnder(W, sx / n, sz / n, top) - 0.4, size: n });
    }
    return out;
  }

  function resize(w, h) {
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    viewport = { w: w, h: h };
    camera.aspect = w / h; camera.updateProjectionMatrix();
    viewCam.aspect = w / h; viewCam.updateProjectionMatrix();
    if (composer) { composer.setSize(w, h); bloom.resolution.set(w / 2, h / 2); }
  }

  function syncEntities(G, t, dt) {
    var p = G.p, seen = new Set();
    G.ents.forEach(function (e) {
      if (e.kind === 'torch') { models.get(e).update(t); if (Math.random() < dt * 6) fx.ember(e.x, e.y + 1.0, e.z); seen.add(e); return; }
      if (e.kind === 'proj') {
        var pm = projs.get(e);
        if (!pm) {
          pm = new THREE.Mesh(new THREE.SphereGeometry(e.playerRocket ? 0.13 : 0.09, 10, 8), new THREE.MeshBasicMaterial({ color: e.green ? 0x9ffcff : 0xffb040 }));
          scene.add(pm); projs.set(e, pm);
        }
        pm.position.set(e.x, e.y, e.z);
        fx.trail(e.x, e.y, e.z, e.green);
        seen.add(e);
        return;
      }
      if (e.kind === 'part') return;
      var m = models.get(e);
      if (!m) {
        if (e.kind === 'pickup') m = makePickup(e, assets);
        else if (e.mob) m = makeMob(e, assets);
        else return;
        scene.add(m.obj); models.set(e, m);
      }
      if (e.kind === 'pickup') m.update(t);
      else m.update(t, dt, Math.atan2(p.z - e.z, p.x - e.x));
      seen.add(e);
    });
    models.forEach(function (m, e) { if (!seen.has(e)) { scene.remove(m.obj); models.delete(e); } });
    projs.forEach(function (m, e) { if (!seen.has(e)) { scene.remove(m); projs.delete(e); } });
  }

  function updateTorches(t) {
    var p = G0.p;
    torchLights.forEach(function (L, i) {
      var e = L.userData.e;
      var n = Math.sin(t * 13 + i * 7) * 0.12 + Math.sin(t * 31 + i * 3) * 0.08 + (Math.random() - 0.5) * 0.08;
      var far = (e.x - p.x) * (e.x - p.x) + (e.z - p.z) * (e.z - p.z) > 400; // skip lights you can't see from here
      L.intensity = far ? 0 : 2.2 * (1 + n);
    });
  }

  function drawView(G, t, dt) {
    var p = G.p;
    // bob while walking, sway against the turn, kick on firing
    var speed = Math.hypot(G.input.vx || 0, G.input.vz || 0);
    if (p.onGround && speed > 0.5) bob += dt * speed * 2.6;
    var bobAmt = p.onGround ? Math.min(1, speed / 4) : 0;
    var dAng = Math.atan2(Math.sin(p.ang - lastAng), Math.cos(p.ang - lastAng)), dPitch = p.pitch - lastPitch;
    lastAng = p.ang; lastPitch = p.pitch;
    sway.x += (-dAng * 0.6 - sway.x) * Math.min(1, dt * 8);
    sway.y += (dPitch * 0.6 - sway.y) * Math.min(1, dt * 8);
    Object.keys(guns).forEach(function (k) { guns[k].visible = k === p.weapon && !p.dead; });
    var g = guns[p.weapon];
    if (!g) return;
    var ft = p.fireT, kick = ft < 0.12 ? Math.sin(ft / 0.12 * Math.PI) : 0;
    var raise = p.lowerT > 0 ? (1 - p.lowerT / 0.15) : p.raiseT > 0 ? p.raiseT / 0.15 : 0;
    gunRig.position.set(Math.sin(bob) * 0.012 * bobAmt + sway.x * 0.1, -Math.abs(Math.cos(bob)) * 0.01 * bobAmt + sway.y * 0.1 - raise * 0.25 - p.landT * 0.1, 0);
    gunRig.rotation.set(0, 0, 0);
    if (p.weapon === 'fist') {
      g.position.z = g.userData.baseZ - (ft < 0.2 ? Math.sin(ft / 0.2 * Math.PI) * 0.18 : 0);
      g.rotation.x = ft < 0.2 ? -Math.sin(ft / 0.2 * Math.PI) * 0.3 : 0;
    } else {
      g.rotation.x = kick * (p.weapon === 'shotgun' ? 0.35 : 0.2);
      g.position.z = g.userData.baseZ + kick * 0.05;
      var pt = ft > 0.3 && ft < 0.7 ? Math.sin((ft - 0.3) / 0.4 * Math.PI) : 0;
      offsetZ(g.userData.pump, pt * 0.09);
      offsetZ(g.userData.slide, kick * 0.04);
      if (g.userData.barrels) g.userData.barrels.rotation.z += dt * (p.fireT < 0.3 ? 30 : 0);
    }
    var flashing = ft < 0.06 && p.weapon !== 'fist' && !p.dead;
    flashSprite.visible = flashing;
    g.updateMatrixWorld(true);
    flashSprite.position.copy(g.localToWorld(g.userData.muzzle.clone()));
    flashSprite.scale.setScalar((p.weapon === 'shotgun' ? 0.06 : 0.035) * (0.8 + Math.random() * 0.4));
    viewLight.intensity = flashing ? 3 : 0;
    viewLight.position.copy(flashSprite.position);
  }

  // frozen: the same picture every time (for screenshot baselines). Visual-only
  // randomness (flicker, embers, shake) comes from a fixed seed for this frame.
  function render(G, t, dt, frozen) {
    if (!frozen) return renderFrame(G, t, dt);
    var real = Math.random, a = 12345;
    Math.random = function () { a = (a * 1103515245 + 12345) & 0x7fffffff; return a / 0x7fffffff; };
    try { return renderFrame(G, t, 0); } finally { Math.random = real; }
  }

  function renderFrame(G, t, dt) {
    renderer.info.reset();
    if (G !== G0) buildScene(G);
    var p = G.p;
    level.update();
    syncEntities(G, t, dt);
    updateTorches(t);
    G.events.forEach(function (e) { if (e.t === 'fx') fx.event(e); });
    fx.update(dt, viewport.h * 0.9);
    // camera at the eye, with shake
    var sk = G.shake * 0.004;
    camera.position.set(p.x + (Math.random() - 0.5) * sk, p.y + p.eyeH + (Math.random() - 0.5) * sk, p.z + (Math.random() - 0.5) * sk);
    camera.rotation.y = -Math.PI / 2 - p.ang;
    camera.rotation.x = p.pitch;
    camera.rotation.z = p.dead ? Math.min(0.5, p.deadT * 0.6) : 0;
    composer.render(dt);
    // the weapon on top, with its own depth so it never clips into walls
    renderer.autoClear = false;
    renderer.clearDepth();
    drawView(G, t, dt);
    renderer.render(viewScene, viewCam);
    renderer.autoClear = true;
  }

  return {
    // swap in authored art once it has loaded; the scene rebuilds on the next frame
    setAssets: function (reg) { assets = reg; makeGuns(); G0 = null; },
    assets: function () { return assets; },
    debugModels: function () { var out = []; models.forEach(function (m) { if (m.debug) out.push(m.debug()); }); return out; },
    render: render, resize: resize, renderer: renderer, camera: camera,
    info: function () { return renderer.info; }
  };
}
