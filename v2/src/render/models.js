// Demons, pickups and props, built from simple shapes in code. Each model
// animates from the simulation's state: walking, the attack windup (the tell),
// pain, the white hit flash, and a death collapse.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { instance, findClip, CELL } from './assets.js';

var geoCache = {};
function geo(key, make) { return geoCache[key] || (geoCache[key] = make()); }
function std(color, o) { return new THREE.MeshStandardMaterial(Object.assign({ color: color, roughness: 0.7, metalness: 0.05 }, o || {})); }
function glow(color, intensity) { return new THREE.MeshStandardMaterial({ color: 0x000000, emissive: color, emissiveIntensity: intensity || 3, roughness: 1 }); }

function part(g, m, x, y, z, parent) {
  var mesh = new THREE.Mesh(g, m);
  mesh.position.set(x, y, z);
  mesh.castShadow = true;
  (parent || this).add(mesh);
  return mesh;
}

var SPH = function () { return new THREE.SphereGeometry(1, 16, 12); };
var BOX = function () { return new THREE.BoxGeometry(1, 1, 1); };
var CONE = function () { return new THREE.ConeGeometry(1, 1, 10); };
var CYL = function () { return new THREE.CylinderGeometry(1, 1, 1, 14); };
var CAP = function () { return new THREE.CapsuleGeometry(1, 1, 6, 12); };

// all body materials of a model, so the hit flash can light them together
function flashable(root) {
  var mats = [];
  root.traverse(function (o) { if (o.isMesh && o.material && !o.userData.noFlash) { o.material = o.material.clone(); mats.push(o.material); } });
  return mats;
}

// ---- demons -----------------------------------------------------------------------------

function imp() {
  var root = new THREE.Group(), body = new THREE.Group();
  root.add(body);
  var skin = std(0x7a2e1c, { roughness: 0.6 }), dark = std(0x3a140c), claw = std(0xe8d8b0, { roughness: 0.4 });
  var torso = part(geo('cap', CAP), skin, 0, 0.5, 0, body); torso.scale.set(0.17, 0.14, 0.13); torso.rotation.x = 0.35;
  var head = part(geo('sph', SPH), skin, 0, 0.72, 0.06, body); head.scale.set(0.11, 0.1, 0.11);
  [-1, 1].forEach(function (s) {
    var horn = part(geo('cone', CONE), dark, s * 0.07, 0.83, 0.02, body); horn.scale.set(0.025, 0.12, 0.025); horn.rotation.z = -s * 0.5;
    var eye = part(geo('sph', SPH), glow(0xffa020, 2), s * 0.045, 0.74, 0.15, body); eye.scale.setScalar(0.018); eye.userData.noFlash = true;
    var arm = new THREE.Group(); arm.position.set(s * 0.17, 0.58, 0.02); body.add(arm);
    var up = part(geo('cap', CAP), skin, 0, -0.1, 0, arm); up.scale.set(0.04, 0.09, 0.04);
    var cl = part(geo('cone', CONE), claw, 0, -0.26, 0.03, arm); cl.scale.set(0.03, 0.07, 0.03); cl.rotation.x = Math.PI;
    arm.userData.side = s; body.userData['arm' + s] = arm;
    var leg = part(geo('cap', CAP), dark, s * 0.08, 0.18, 0, body); leg.scale.set(0.05, 0.12, 0.05); body.userData['leg' + s] = leg;
    var spike = part(geo('cone', CONE), dark, s * 0.06, 0.55, -0.12, body); spike.scale.set(0.03, 0.09, 0.03); spike.rotation.x = -1.2;
  });
  var mats = flashable(root);
  return {
    obj: root, mats: mats,
    animate: function (e, t) {
      var walk = e.state === 'chase' || e.state === 'flee' ? Math.sin(t * 9 + e.animT) : 0;
      body.position.y = Math.abs(walk) * 0.03;
      body.userData.leg1.rotation.x = walk * 0.6; body.userData['leg-1'].rotation.x = -walk * 0.6;
      var throwUp = e.state === 'windup' ? 1 : 0;
      body.userData.arm1.rotation.x = -walk * 0.5 - throwUp * 2.4;
      body.userData['arm-1'].rotation.x = walk * 0.5 - throwUp * 0.4;
      body.rotation.x = e.state === 'pain' ? -0.35 : 0;
    }
  };
}

function gnasher() {
  var root = new THREE.Group(), body = new THREE.Group();
  root.add(body);
  var skin = std(0xc4707a, { roughness: 0.55 }), inner = std(0x3a0810), tooth = std(0xf4ecd8, { roughness: 0.3 });
  var torso = part(geo('sph', SPH), skin, 0, 0.36, 0, body); torso.scale.set(0.34, 0.28, 0.32);
  var jaw = new THREE.Group(); jaw.position.set(0, 0.3, 0.12); body.add(jaw);
  var mouth = part(geo('sph', SPH), inner, 0, 0.04, 0.12, body); mouth.scale.set(0.24, 0.1, 0.12); mouth.position.y = 0.33;
  for (var i = 0; i < 9; i++) {
    var a = (i / 8 - 0.5) * 2.4;
    var t1 = part(geo('cone', CONE), tooth, Math.sin(a) * 0.22, 0.42, 0.14 + Math.cos(a) * 0.14, body); t1.scale.set(0.028, 0.08, 0.028); t1.rotation.x = Math.PI;
    var t2 = part(geo('cone', CONE), tooth, Math.sin(a) * 0.2, -0.02, Math.cos(a) * 0.14 + 0.02, jaw); t2.scale.set(0.025, 0.07, 0.025);
  }
  var lower = part(geo('sph', SPH), skin, 0, -0.04, 0.02, jaw); lower.scale.set(0.26, 0.08, 0.22);
  [-1, 1].forEach(function (s) {
    var eye = part(geo('sph', SPH), glow(0xffa030, 0.9), s * 0.12, 0.56, 0.25, body); eye.scale.setScalar(0.02); eye.userData.noFlash = true;
    var leg = part(geo('cap', CAP), skin, s * 0.18, 0.1, 0, body); leg.scale.set(0.07, 0.07, 0.07); body.userData['leg' + s] = leg;
  });
  var mats = flashable(root);
  return {
    obj: root, mats: mats,
    animate: function (e, t) {
      var walk = e.state === 'chase' || e.state === 'flee' ? Math.sin(t * 14 + e.animT) : 0;
      body.position.y = Math.abs(walk) * 0.04;
      body.userData.leg1.position.z = walk * 0.08; body.userData['leg-1'].position.z = -walk * 0.08;
      var chomp = e.state === 'windup' ? 0.7 : (Math.sin(t * 6 + e.animT) + 1) * 0.08;
      jaw.rotation.x = chomp;
      body.rotation.x = e.state === 'windup' ? 0.25 : e.state === 'pain' ? -0.3 : 0;
    }
  };
}

function knight() {
  var root = new THREE.Group(), body = new THREE.Group();
  root.add(body);
  // the Reset Warden: an Overseer construct of basalt plates in brass frames, a red-mercury heart
  var armor = std(0x24201f, { roughness: 0.55, metalness: 0.3 }), trim = std(0x9a7640, { roughness: 0.3, metalness: 0.85 }), ember = glow(0xff1a30, 4);
  var chest = part(geo('box', BOX), armor, 0, 0.82, 0, body); chest.scale.set(0.5, 0.42, 0.3);
  var belly = part(geo('box', BOX), trim, 0, 0.55, 0, body); belly.scale.set(0.4, 0.16, 0.26);
  var core = part(geo('sph', SPH), ember, 0, 0.84, 0.16, body); core.scale.setScalar(0.07); core.userData.noFlash = true;
  var head = part(geo('box', BOX), armor, 0, 1.12, 0.02, body); head.scale.set(0.2, 0.18, 0.2);
  var visor = part(geo('box', BOX), glow(0xff2a3a, 5), 0, 1.13, 0.12, body); visor.scale.set(0.15, 0.03, 0.02); visor.userData.noFlash = true;
  [-1, 1].forEach(function (s) {
    var seam = part(geo('box', BOX), glow(0xff1a30, 2), s * 0.12, 0.82, 0.152, body); seam.scale.set(0.02, 0.36, 0.01); seam.userData.noFlash = true;
    var pauldron = part(geo('sph', SPH), armor, s * 0.3, 1.0, 0, body); pauldron.scale.set(0.14, 0.1, 0.14);
    var arm = new THREE.Group(); arm.position.set(s * 0.33, 0.95, 0); body.add(arm); body.userData['arm' + s] = arm;
    var fore = part(geo('box', BOX), armor, 0, -0.25, 0, arm); fore.scale.set(0.13, 0.42, 0.13);
    var fist = part(geo('box', BOX), trim, 0, -0.5, 0.02, arm); fist.scale.set(0.15, 0.13, 0.15);
    var leg = part(geo('box', BOX), armor, s * 0.13, 0.24, 0, body); leg.scale.set(0.15, 0.48, 0.17); body.userData['leg' + s] = leg;
  });
  // a brass spire on its head instead of horns: the reset engine's antenna
  var spire = part(geo('cone', CONE), trim, 0, 1.33, 0.02, body); spire.scale.set(0.05, 0.24, 0.05);
  var ringH = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.015, 6, 20), trim); ringH.rotation.x = Math.PI / 2; ringH.position.set(0, 1.22, 0.02); body.add(ringH);
  var mats = flashable(root);
  return {
    obj: root, mats: mats,
    animate: function (e, t) {
      var walk = e.state === 'chase' ? Math.sin(t * 6 + e.animT) : 0;
      body.userData.leg1.rotation.x = walk * 0.4; body.userData['leg-1'].rotation.x = -walk * 0.4;
      body.userData.arm1.rotation.x = e.state === 'windup' ? -2.2 : -walk * 0.3;
      body.userData['arm-1'].rotation.x = e.state === 'windup' ? -1.2 : walk * 0.3;
      body.position.y = Math.abs(walk) * 0.03;
    }
  };
}

// Riley: a sparring hologram. Her visor and chest flash white just before she shoots.
function riley() {
  var root = new THREE.Group(), body = new THREE.Group();
  root.add(body);
  var holo = new THREE.MeshStandardMaterial({ color: 0x0a2830, emissive: 0x3fd8e8, emissiveIntensity: 1.2, transparent: true, opacity: 0.82, roughness: 0.3, metalness: 0.2 });
  var core = new THREE.MeshStandardMaterial({ color: 0x000000, emissive: 0x9ffcff, emissiveIntensity: 3 });
  var torso = part(geo('cap', CAP), holo, 0, 0.58, 0, body); torso.scale.set(0.13, 0.16, 0.09);
  var hips = part(geo('box', BOX), holo, 0, 0.4, 0, body); hips.scale.set(0.22, 0.08, 0.13);
  var head = part(geo('sph', SPH), holo, 0, 0.86, 0, body); head.scale.set(0.085, 0.1, 0.09);
  var visor = part(geo('box', BOX), core, 0, 0.87, 0.07, body); visor.scale.set(0.12, 0.028, 0.02);
  var chest = part(geo('sph', SPH), core, 0, 0.64, 0.08, body); chest.scale.setScalar(0.03);
  [-1, 1].forEach(function (s) {
    var arm = new THREE.Group(); arm.position.set(s * 0.15, 0.72, 0); body.add(arm); body.userData['arm' + s] = arm;
    var a1 = part(geo('cap', CAP), holo, 0, -0.14, 0, arm); a1.scale.set(0.035, 0.13, 0.035);
    var leg = part(geo('cap', CAP), holo, s * 0.07, 0.18, 0, body); leg.scale.set(0.045, 0.16, 0.045); body.userData['leg' + s] = leg;
  });
  var shield = new THREE.Mesh(geo('sph', SPH), new THREE.MeshStandardMaterial({ color: 0x000000, emissive: 0xffd23e, emissiveIntensity: 1.5, transparent: true, opacity: 0.25, side: THREE.DoubleSide, depthWrite: false }));
  shield.scale.setScalar(0.62); shield.position.y = 0.5; shield.userData.noFlash = true;
  root.add(shield);
  var mats = [holo];
  var ring = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.012, 6, 40), core); ring.rotation.x = Math.PI / 2; ring.position.y = 0.02; root.add(ring);
  return {
    obj: root, mats: mats,
    animate: function (e, t) {
      var walk = e.state === 'chase' ? Math.sin(t * 8 + e.animT) : 0;
      body.userData.leg1.rotation.x = walk * 0.5; body.userData['leg-1'].rotation.x = -walk * 0.5;
      body.userData.arm1.rotation.x = e.state === 'windup' ? -1.5 : -walk * 0.4;
      body.userData['arm-1'].rotation.x = e.state === 'windup' ? -1.5 : walk * 0.4;
      body.position.y = 0.03 + Math.sin(t * 2) * 0.015; // she hovers a little
      var tell = e.state === 'windup' && e.attack !== 'melee';
      core.emissive.setHex(tell ? 0xffffff : 0x9ffcff);
      core.emissiveIntensity = tell ? 8 : 3;
      holo.opacity = 0.7 + Math.sin(t * 23) * 0.06 + (Math.random() < 0.02 ? -0.3 : 0); // holographic flicker
      shield.visible = e.shieldT > 0;
      shield.rotation.y = t * 1.5;
      ring.scale.setScalar(1 + Math.sin(t * 3) * 0.05);
    }
  };
}

function barrel() {
  var root = new THREE.Group();
  // a mercury cask: a dark basalt-glass vessel in brass bands, red mercury glowing through a window
  var drum = part(geo('cyl', CYL), std(0x2a2222, { roughness: 0.3, metalness: 0.4 }), 0, 0.28, 0, root); drum.scale.set(0.2, 0.55, 0.2);
  [0.06, 0.28, 0.5].forEach(function (y) { var band = part(geo('cyl', CYL), std(0xa87e42, { metalness: 0.85, roughness: 0.3 }), 0, y, 0, root); band.scale.set(0.207, 0.035, 0.207); });
  var goo = part(geo('cyl', CYL), glow(0xff1a30, 2.5), 0, 0.56, 0, root); goo.scale.set(0.16, 0.01, 0.16); goo.userData.noFlash = true;
  var sym = part(geo('box', BOX), glow(0xff2a3a, 2), 0, 0.39, 0.2, root); sym.scale.set(0.1, 0.1, 0.005); sym.rotation.z = Math.PI / 4; sym.userData.noFlash = true;
  return { obj: root, mats: flashable(root), animate: function () { } };
}

var MAKERS = { imp: imp, gnasher: gnasher, knight: knight, riley: riley, barrel: barrel };

// An authored (glTF) demon or prop: clips follow the simulation's state.
// Clip names: idle, walk, attack_windup, attack, pain, death.
// Hollows (STYLE_GUIDE.md): an ash crust over trapped light. The base colour goes to soot
// and a network of thin red-mercury cracks glows through it, fixed to the body.
function ashShell(m, strength) {
  if (!m || m.userData.ash) return;
  m.userData.ash = true;
  m.onBeforeCompile = function (sh) {
    sh.uniforms.ashGlow = { value: 0.9 * strength };
    sh.vertexShader = 'varying vec3 vAshP;\n' + sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\nvAshP = position;');
    // soot: grey out whatever colour (or texture) the model brought, keeping its light and shade
    sh.fragmentShader = 'varying vec3 vAshP; uniform float ashGlow;\n' + sh.fragmentShader.replace('#include <color_fragment>',
      '#include <color_fragment>\n{ float l = dot(diffuseColor.rgb, vec3(0.3, 0.55, 0.15)); diffuseColor.rgb = mix(vec3(l), diffuseColor.rgb, 0.12) * vec3(0.5, 0.46, 0.45) + 0.03; }'
    ).replace('#include <emissivemap_fragment>', [
      '#include <emissivemap_fragment>',
      '{ vec3 q = vAshP * 7.0;',
      '  float n = sin(q.x * 1.3 + sin(q.y * 1.7)) * sin(q.y * 1.1 + sin(q.z * 1.9)) * sin(q.z * 1.5 + sin(q.x * 1.2));',
      '  float crack = smoothstep(0.07, 0.0, abs(n));',
      '  totalEmissiveRadiance += vec3(1.0, 0.07, 0.14) * crack * ashGlow; }'
    ].join('\n'));
  };
  m.customProgramCacheKey = function () { return 'ash' + strength; };
  m.needsUpdate = true;
}

function authored(entry, e) {
  var inst = instance(entry), root = new THREE.Group();
  inst.obj.scale.setScalar(1 / CELL);
  root.add(inst.obj);
  var mats = [], tell = [], shield = inst.obj.getObjectByName('shield');
  var hollow = e && (e.kind === 'imp' || e.kind === 'gnasher' || e.kind === 'knight');
  inst.obj.traverse(function (o) {
    if (!o.isMesh) return;
    (Array.isArray(o.material) ? o.material : [o.material]).forEach(function (m) {
      if (hollow) ashShell(m, e.kind === 'knight' ? 1.4 : 1);
      // authored glow is capped so eyes and accents don't bloom into a glare
      if (m.emissive && m.emissiveIntensity > 1.2) m.emissiveIntensity = 1.2;
      if (/tell/i.test(m.name) || /tell/i.test(o.name)) tell.push(m); else if (m.emissive) mats.push(m);
    });
  });
  var current = null, lastState = null;
  function play(name, once) {
    if (!inst.mixer) return;
    var clip = findClip(inst.clips, name) || (name === 'attack_windup' ? findClip(inst.clips, 'attack') : null) || findClip(inst.clips, 'idle');
    if (!clip) return;
    var act = inst.mixer.clipAction(clip);
    if (current === act) return;
    act.reset();
    act.setLoop(once ? THREE.LoopOnce : THREE.LoopRepeat, Infinity);
    act.clampWhenFinished = !!once;
    act.play();
    if (current) current.crossFadeTo(act, 0.15, false);
    current = act;
  }
  var STATE_CLIP = { idle: 'idle', chase: 'walk', flee: 'walk', windup: 'attack_windup', pain: 'pain', die: 'death', dead: 'death' };
  return {
    obj: root, mats: mats,
    animate: function (ent, t, dt) {
      var st = ent.state || 'idle';
      if (st !== lastState) {
        if (lastState === 'windup' && st === 'chase' && findClip(inst.clips, 'attack')) play('attack', true);
        else play(STATE_CLIP[st] || 'idle', st === 'pain' || st === 'die' || st === 'dead');
        lastState = st;
      }
      if (current && current.getClip().name && /attack$/i.test(current.getClip().name) && !current.isRunning() && st === 'chase') play('walk');
      if (inst.mixer) inst.mixer.update(dt || 0);
      var tellOn = st === 'windup' && ent.attack !== 'melee';
      tell.forEach(function (m) { if (m.emissive) { m.emissive.setHex(tellOn ? 0xffffff : 0x9ffcff); m.emissiveIntensity = tellOn ? 6 : 2; } });
      if (shield) shield.visible = ent.shieldT > 0;
    },
    authored: true,
    clip: function () { return current ? current.getClip().name : null; }
  };
}

export function makeMob(e, assets) {
  var entry = assets && assets.model(e.kind);
  var m = entry ? authored(entry, e) : MAKERS[e.kind](), scale = !entry && e.kind === 'riley' ? e.h / 0.95 : 1;
  m.obj.scale.setScalar(scale);
  var dieT = 0;
  var base = m.animate;
  m.debug = function () { return { kind: e.kind, authored: !!m.authored, clip: m.clip ? m.clip() : null, state: e.state }; };
  m.update = function (t, dt, towardPlayer) {
    m.obj.position.set(e.x, e.y, e.z);
    // face the way it moves, or you when it attacks or sees you
    var face = e.state === 'windup' || e.state === 'pain' || e.los ? towardPlayer : (e.moveAng || 0);
    var cur = m.obj.rotation.y, want = -face + Math.PI / 2, dd = Math.atan2(Math.sin(want - cur), Math.cos(want - cur));
    m.obj.rotation.y = cur + dd * Math.min(1, dt * 10);
    if (m.authored) {
      base(e, t, dt);
    } else if (e.state === 'die' || e.state === 'dead') {
      dieT += dt;
      var k = Math.min(1, dieT / 0.45);
      m.obj.rotation.x = -k * 1.35;
      m.obj.position.y = e.y + 0.05 * k;
      m.obj.scale.setScalar(scale * (1 - k * 0.15));
      if (e.kind === 'riley') { m.obj.visible = (dieT * 12) % 1 < 0.6 && dieT < 1.4; }
    } else {
      base(e, t);
    }
    var flash = e.flashT > 0 && e.state !== 'dead';
    m.mats.forEach(function (mt) {
      if (!mt.userData.base) mt.userData.base = { e: mt.emissive ? mt.emissive.getHex() : 0, i: mt.emissiveIntensity };
      if (flash) { mt.emissive.setHex(0xffffff); mt.emissiveIntensity = 1.4; }
      else { mt.emissive.setHex(mt.userData.base.e); mt.emissiveIntensity = mt.userData.base.i; }
    });
  };
  return m;
}

// ---- pickups -----------------------------------------------------------------------------

export function makePickup(e, assets) {
  var root = new THREE.Group(), inner = new THREE.Group();
  root.add(inner);
  var it = e.item, entry = assets && assets.model('pickup:' + it);
  if (entry) {
    var pi = instance(entry); pi.obj.scale.setScalar(1 / CELL); inner.add(pi.obj);
  } else if (it === 'h' || it === '+') {
    // a life shard (h) or a healing crystal (+): warm gold light in a brass setting
    var big = it === '+', oct = geo('oct', function () { return new THREE.OctahedronGeometry(1, 0); });
    var base = part(geo('cyl', CYL), std(0x9a7640, { metalness: 0.85, roughness: 0.35 }), 0, 0.03, 0, inner); base.scale.set(big ? 0.13 : 0.08, 0.03, big ? 0.13 : 0.08);
    var gem = part(oct, glow(0xffd070, 2.4), 0, big ? 0.2 : 0.14, 0, inner); gem.scale.set(big ? 0.09 : 0.055, big ? 0.16 : 0.1, big ? 0.09 : 0.055);
    if (big) [-1, 1].forEach(function (sd) { var sm = part(oct, glow(0xffe8b0, 2), sd * 0.1, 0.1, 0, inner); sm.scale.set(0.04, 0.07, 0.04); });
  } else if (it === 'b') {
    // a spark cell: a brass canister with a cyan charge window
    var clip = part(geo('cyl', CYL), std(0xb08a48, { metalness: 0.85, roughness: 0.3 }), 0, 0.09, 0, inner); clip.scale.set(0.05, 0.16, 0.05);
    var tip = part(geo('cyl', CYL), glow(0x8ff0ff, 2), 0, 0.09, 0, inner); tip.scale.set(0.052, 0.07, 0.052);
  } else if (it === 'a') {
    // bell charges: a bronze-banded crate of fat gold charges
    var sb = part(geo('box', BOX), std(0x5a3e24, { roughness: 0.7 }), 0, 0.09, 0, inner); sb.scale.set(0.3, 0.18, 0.18);
    var bd = part(geo('box', BOX), std(0xb08a48, { metalness: 0.85, roughness: 0.3 }), 0, 0.09, 0, inner); bd.scale.set(0.31, 0.04, 0.185);
    for (var i = 0; i < 4; i++) { var sh = part(geo('cyl', CYL), std(0xe0b050, { metalness: 0.9, roughness: 0.25 }), -0.1 + i * 0.066, 0.2, 0, inner); sh.scale.set(0.026, 0.06, 0.026); }
  } else if (it === 'A') {
    // the brass ward: a breastplate with an aether star at its heart
    var vest = part(geo('box', BOX), std(0xb08a48, { metalness: 0.85, roughness: 0.3 }), 0, 0.2, 0, inner); vest.scale.set(0.34, 0.36, 0.14);
    var plate = part(geo('oct', function () { return new THREE.OctahedronGeometry(1, 0); }), glow(0x8ff0ff, 1.8), 0, 0.26, 0.075, inner); plate.scale.set(0.07, 0.07, 0.02);
  } else if (it === '2') {
    var gun = shotgunModel(true); gun.scale.setScalar(0.9); gun.rotation.z = 0.2; gun.position.y = 0.15; inner.add(gun);
  } else if (it === 'r' || it === 'u') {
    var col = it === 'r' ? 0xff2a1a : 0x3a7aff;
    // a keystone: a glowing wedge of crystal in a brass collar
    var card = part(geo('oct', function () { return new THREE.OctahedronGeometry(1, 0); }), glow(col, 2.5), 0, 0.22, 0, inner); card.scale.set(0.09, 0.15, 0.05);
    var stripe = part(geo('box', BOX), std(0xb08a48, { metalness: 0.85, roughness: 0.3 }), 0, 0.22, 0, inner); stripe.scale.set(0.12, 0.03, 0.07);
  } else if (it === 'P') {
    var orb = part(geo('sph', SPH), glow(0xffb040, 4), 0, 0.3, 0, inner); orb.scale.setScalar(0.14);
    var halo = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.012, 6, 32), glow(0xffd23e, 3)); halo.position.y = 0.3; inner.add(halo);
  }
  var spin = it === 'r' || it === 'u' || it === 'P' || it === '2' || it === 'h' || it === '+';
  return {
    obj: root,
    update: function (t) {
      root.position.set(e.x, e.y, e.z);
      root.visible = !e.gone;
      if (spin) inner.rotation.y = t * 1.8 + e.bob;
      inner.position.y = spin ? 0.08 + Math.sin(t * 2.5 + e.bob) * 0.05 : 0;
    }
  };
}

export function makeTorch(e, assets) {
  var root = new THREE.Group(), entry = assets && assets.model('torch');
  if (entry) {
    var ti = instance(entry); ti.obj.scale.setScalar(1 / CELL); root.add(ti.obj);
    root.position.set(e.x, e.y, e.z);
    return { obj: root, update: function (t) { if (ti.mixer) ti.mixer.update(1 / 60); } };
  }
  var pole = part(geo('cyl', CYL), std(0x3a2a1a, { metalness: 0.3 }), 0, 0.4, 0, root); pole.scale.set(0.03, 0.8, 0.03);
  var bowl = part(geo('cyl', CYL), std(0x5a4a3a, { metalness: 0.6, roughness: 0.4 }), 0, 0.82, 0, root); bowl.scale.set(0.1, 0.06, 0.1);
  var flame = new THREE.Group(); flame.position.y = 0.9; root.add(flame);
  var f1 = part(geo('cone', CONE), glow(0xff8a20, 5), 0, 0.08, 0, flame); f1.scale.set(0.08, 0.2, 0.08);
  var f2 = part(geo('cone', CONE), glow(0xffe060, 6), 0, 0.05, 0, flame); f2.scale.set(0.045, 0.12, 0.045);
  root.position.set(e.x, e.y, e.z);
  return {
    obj: root,
    update: function (t) {
      var n = Math.sin(t * 17 + e.animT * 9) * 0.5 + Math.sin(t * 29 + e.animT * 3) * 0.5;
      flame.scale.set(1 + n * 0.1, 1 + n * 0.25, 1 + n * 0.1);
      flame.rotation.y = t * 3;
    }
  };
}

// ---- weapons (also used by the view model) ------------------------------------------------

var RB = function (w, h, d, r) { return new RoundedBoxGeometry(w, h, d, 3, r); };
function rbox(key, w, h, d, r) { return geo('rb' + key, function () { return RB(w, h, d, r); }); }
var gunMetal = function () { return std(0x3a3d44, { metalness: 0.9, roughness: 0.3 }); };
var blued = function () { return std(0x1c1e24, { metalness: 0.85, roughness: 0.4 }); };
var gunWood = function () { return std(0x6a3a1a, { roughness: 0.55, metalness: 0.05 }); };
var gloveMat = function () { return std(0x2a211c, { roughness: 0.85 }); };
var sleeveMat = function () { return std(0x4a3426, { roughness: 0.9 }); };   // soot-brown leather
var brassMat = function () { return std(0xb08a48, { metalness: 0.9, roughness: 0.3 }); };
var bronzeMat = function () { return std(0x4e3620, { metalness: 0.85, roughness: 0.4 }); };

// authored guns without arms get the built-in gloved hand at the grip
export function addHand(gun, weapon) {
  var has = false;
  gun.traverse(function (o) { if (/hand|arm|glove/i.test(o.name)) has = true; });
  if (has) return;
  if (weapon === 'shotgun' || weapon === 'chaingun' || weapon === 'rocket') { hand(gun, 0.01, -0.07, 0.08, 0.4); hand(gun, -0.01, -0.05, -0.2, 0.1); }
  else if (weapon !== 'fist') hand(gun, 0, -0.06, 0.02, 0.3);
}

function hand(parent, x, y, z, rx) {
  var h = new THREE.Group(); h.position.set(x, y, z); h.rotation.x = rx || 0; parent.add(h);
  var palm = new THREE.Mesh(rbox('palm', 0.07, 0.05, 0.09, 0.02), gloveMat()); h.add(palm);
  var fingers = new THREE.Mesh(rbox('fing', 0.075, 0.03, 0.05, 0.012), gloveMat()); fingers.position.set(0, -0.03, -0.03); h.add(fingers);
  var sleeve = new THREE.Mesh(geo('cyl', CYL), sleeveMat()); sleeve.scale.set(0.045, 0.28, 0.045); sleeve.rotation.x = Math.PI / 2 - 0.15; sleeve.position.set(0.01, -0.02, 0.17); h.add(sleeve);
  return h;
}

// The Bell Blaster (slot 3): a Tartarian bell on a brass barrel. One ring, seven tones.
// Same node layout as the old shotgun (pump, hands) so the view model animates it.
export function shotgunModel(noHands) {
  var g = new THREE.Group(), brass = brassMat(), dark = bronzeMat(), wood = gunWood();
  var tube = new THREE.Mesh(geo('cyl', CYL), brass); tube.scale.set(0.026, 0.46, 0.026); tube.rotation.x = Math.PI / 2; tube.position.set(0, 0, -0.33); g.add(tube);
  [-0.2, -0.33, -0.46].forEach(function (z) { var ring = new THREE.Mesh(geo('ring', function () { return new THREE.TorusGeometry(0.031, 0.007, 6, 18); }), dark); ring.position.set(0, 0, z); g.add(ring); });
  // the bell: flared, open, bronze outside and gold-lit inside
  var bell = new THREE.Mesh(geo('bell', function () { return new THREE.CylinderGeometry(0.03, 0.078, 0.13, 20, 1, true); }), std(0xc89a50, { metalness: 0.9, roughness: 0.25, side: THREE.DoubleSide }));
  bell.rotation.x = Math.PI / 2; bell.position.set(0, 0, -0.62); g.add(bell);
  var lip = new THREE.Mesh(geo('lip', function () { return new THREE.TorusGeometry(0.078, 0.008, 6, 24); }), dark); lip.position.set(0, 0, -0.685); g.add(lip);
  var throat = new THREE.Mesh(geo('sph', SPH), glow(0xffc860, 1.4)); throat.scale.set(0.028, 0.028, 0.01); throat.position.set(0, 0, -0.57); g.add(throat);
  var pump = new THREE.Group(); pump.position.set(0, -0.036, -0.28); g.add(pump); g.userData.pump = pump;
  var fore = new THREE.Mesh(rbox('fore', 0.064, 0.048, 0.19, 0.015), wood); pump.add(fore);
  [-0.06, 0.06].forEach(function (z) { var band = new THREE.Mesh(rbox('band', 0.068, 0.052, 0.014, 0.004), brass); band.position.z = z; pump.add(band); });
  var recv = new THREE.Mesh(rbox('recv', 0.078, 0.09, 0.2, 0.014), brass); recv.position.set(0, -0.012, 0.02); g.add(recv);
  // the resonance crystal in the receiver: it glows while the bell is charged
  [-1, 1].forEach(function (sd) { var win = new THREE.Mesh(rbox('win', 0.006, 0.04, 0.08, 0.003), glow(0xffc860, 1.8)); win.position.set(sd * 0.04, -0.005, 0.02); g.add(win); });
  var guard = new THREE.Mesh(new THREE.TorusGeometry(0.025, 0.005, 6, 14, Math.PI), dark); guard.position.set(0, -0.058, 0.07); guard.rotation.set(0, Math.PI / 2, Math.PI); g.add(guard);
  var stock = new THREE.Mesh(rbox('stock', 0.062, 0.1, 0.27, 0.02), wood); stock.position.set(0, -0.055, 0.24); stock.rotation.x = -0.14; g.add(stock);
  var cap = new THREE.Mesh(rbox('cap', 0.066, 0.104, 0.02, 0.006), brass); cap.position.set(0, -0.075, 0.37); cap.rotation.x = -0.14; g.add(cap);
  if (!noHands) {
    g.userData.pumpHand = hand(pump, -0.005, -0.045, 0.01, 0.1);
    hand(g, 0.01, -0.08, 0.1, 0.4);
  }
  return g;
}

// The Spark Caster (slot 2): a brass caster with copper coils and an aether crystal at the tip.
export function pistolModel() {
  var g = new THREE.Group(), brass = brassMat(), dark = bronzeMat();
  var slide = new THREE.Mesh(rbox('slide', 0.042, 0.04, 0.18, 0.01), brass); slide.position.set(0, 0.02, -0.07); g.add(slide); g.userData.slide = slide;
  for (var i = 0; i < 3; i++) { var coil = new THREE.Mesh(geo('coil', function () { return new THREE.TorusGeometry(0.024, 0.005, 6, 16); }), std(0xb8683a, { metalness: 0.9, roughness: 0.3 })); coil.position.set(0, 0, -0.02 - i * 0.03); slide.add(coil); }
  var frame = new THREE.Mesh(rbox('frame', 0.036, 0.03, 0.15, 0.008), dark); frame.position.set(0, -0.012, -0.055); g.add(frame);
  var crystal = new THREE.Mesh(geo('oct', function () { return new THREE.OctahedronGeometry(1, 0); }), glow(0x8ff0ff, 2.2)); crystal.scale.set(0.014, 0.014, 0.03); crystal.position.set(0, 0.02, -0.175); g.add(crystal);
  var grip = new THREE.Mesh(rbox('pgrip', 0.036, 0.11, 0.05, 0.012), gunWood()); grip.position.set(0, -0.07, 0.01); grip.rotation.x = 0.28; g.add(grip);
  var pommel = new THREE.Mesh(rbox('pom', 0.04, 0.014, 0.054, 0.005), brass); pommel.position.set(0, -0.123, 0.026); pommel.rotation.x = 0.28; g.add(pommel);
  var guard = new THREE.Mesh(new THREE.TorusGeometry(0.018, 0.004, 6, 14, Math.PI), dark); guard.position.set(0, -0.03, -0.035); guard.rotation.set(0, Math.PI / 2, Math.PI); g.add(guard);
  var sight = new THREE.Mesh(rbox('sight', 0.006, 0.01, 0.01, 0.002), glow(0x8ff0ff, 1.5)); sight.position.set(0, 0.046, -0.14); g.add(sight);
  hand(g, 0, -0.07, 0.04, 0.3);
  return g;
}

export function fistModel() {
  var g = new THREE.Group();
  var fist = new THREE.Mesh(rbox('fist', 0.1, 0.085, 0.11, 0.03), gloveMat()); g.add(fist);
  var knuckles = new THREE.Mesh(rbox('knuck', 0.105, 0.04, 0.03, 0.012), std(0x5a4a3a, { metalness: 0.7, roughness: 0.35 })); knuckles.position.set(0, 0.02, -0.06); g.add(knuckles);
  var thumb = new THREE.Mesh(rbox('thumb', 0.03, 0.03, 0.06, 0.012), gloveMat()); thumb.position.set(-0.05, -0.01, -0.02); g.add(thumb);
  var sleeve = new THREE.Mesh(geo('cyl', CYL), sleeveMat()); sleeve.scale.set(0.05, 0.3, 0.05); sleeve.rotation.x = Math.PI / 2; sleeve.position.set(0, -0.01, 0.2); g.add(sleeve);
  return g;
}
