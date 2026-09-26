// Demons, pickups and props, built from simple shapes in code. Each model
// animates from the simulation's state: walking, the attack windup (the tell),
// pain, the white hit flash, and a death collapse.
import * as THREE from 'three';

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
    var eye = part(geo('sph', SPH), glow(0xfff0a0, 1.4), s * 0.12, 0.56, 0.24, body); eye.scale.setScalar(0.028); eye.userData.noFlash = true;
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
  var armor = std(0x8a2016, { roughness: 0.35, metalness: 0.6 }), trim = std(0x2a1410, { roughness: 0.5, metalness: 0.4 }), ember = glow(0xff5a10, 4);
  var chest = part(geo('box', BOX), armor, 0, 0.82, 0, body); chest.scale.set(0.5, 0.42, 0.3);
  var belly = part(geo('box', BOX), trim, 0, 0.55, 0, body); belly.scale.set(0.4, 0.16, 0.26);
  var core = part(geo('sph', SPH), ember, 0, 0.84, 0.16, body); core.scale.setScalar(0.07); core.userData.noFlash = true;
  var head = part(geo('box', BOX), armor, 0, 1.12, 0.02, body); head.scale.set(0.2, 0.18, 0.2);
  var visor = part(geo('box', BOX), glow(0xff8a20, 5), 0, 1.13, 0.12, body); visor.scale.set(0.15, 0.03, 0.02); visor.userData.noFlash = true;
  [-1, 1].forEach(function (s) {
    var horn = part(geo('cone', CONE), trim, s * 0.14, 1.26, 0, body); horn.scale.set(0.04, 0.2, 0.04); horn.rotation.z = -s * 0.7;
    var pauldron = part(geo('sph', SPH), armor, s * 0.3, 1.0, 0, body); pauldron.scale.set(0.14, 0.1, 0.14);
    var arm = new THREE.Group(); arm.position.set(s * 0.33, 0.95, 0); body.add(arm); body.userData['arm' + s] = arm;
    var fore = part(geo('box', BOX), armor, 0, -0.25, 0, arm); fore.scale.set(0.13, 0.42, 0.13);
    var fist = part(geo('box', BOX), trim, 0, -0.5, 0.02, arm); fist.scale.set(0.15, 0.13, 0.15);
    var leg = part(geo('box', BOX), trim, s * 0.13, 0.24, 0, body); leg.scale.set(0.15, 0.48, 0.17); body.userData['leg' + s] = leg;
  });
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
  var drum = part(geo('cyl', CYL), std(0x4a5a3a, { roughness: 0.45, metalness: 0.5 }), 0, 0.28, 0, root); drum.scale.set(0.2, 0.55, 0.2);
  [0.08, 0.48].forEach(function (y) { var band = part(geo('cyl', CYL), std(0x2a2e26, { metalness: 0.6, roughness: 0.4 }), 0, y, 0, root); band.scale.set(0.205, 0.03, 0.205); });
  var goo = part(geo('cyl', CYL), glow(0x6aff3a, 2.5), 0, 0.56, 0, root); goo.scale.set(0.16, 0.01, 0.16); goo.userData.noFlash = true;
  var sym = part(geo('box', BOX), glow(0xffd23e, 1.5), 0, 0.3, 0.2, root); sym.scale.set(0.12, 0.12, 0.005); sym.rotation.z = Math.PI / 4; sym.userData.noFlash = true;
  return { obj: root, mats: flashable(root), animate: function () { } };
}

var MAKERS = { imp: imp, gnasher: gnasher, knight: knight, riley: riley, barrel: barrel };

export function makeMob(e) {
  var m = MAKERS[e.kind](), scale = e.kind === 'riley' ? e.h / 0.95 : 1;
  m.obj.scale.setScalar(scale);
  var dieT = 0;
  var base = m.animate;
  m.update = function (t, dt, towardPlayer) {
    m.obj.position.set(e.x, e.y, e.z);
    // face the way it moves, or you when it attacks or sees you
    var face = e.state === 'windup' || e.state === 'pain' || e.los ? towardPlayer : (e.moveAng || 0);
    var cur = m.obj.rotation.y, want = -face + Math.PI / 2, dd = Math.atan2(Math.sin(want - cur), Math.cos(want - cur));
    m.obj.rotation.y = cur + dd * Math.min(1, dt * 10);
    if (e.state === 'die' || e.state === 'dead') {
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

export function makePickup(e) {
  var root = new THREE.Group(), inner = new THREE.Group();
  root.add(inner);
  var it = e.item;
  if (it === 'h' || it === '+') {
    var big = it === '+';
    var box = part(geo('box', BOX), std(0xf0ece0, { roughness: 0.5 }), 0, 0.1, 0, inner); box.scale.set(big ? 0.34 : 0.2, big ? 0.2 : 0.14, big ? 0.24 : 0.14);
    var c1 = part(geo('box', BOX), glow(0xff2a1a, 2), 0, 0.1, 0, inner); c1.scale.set(big ? 0.22 : 0.13, big ? 0.06 : 0.04, big ? 0.245 : 0.145);
    var c2 = part(geo('box', BOX), glow(0xff2a1a, 2), 0, 0.1, 0, inner); c2.scale.set(big ? 0.07 : 0.045, big ? 0.06 : 0.04, big ? 0.245 : 0.145);
    c2.scale.set(big ? 0.345 : 0.205, big ? 0.06 : 0.04, big ? 0.07 : 0.045);
  } else if (it === 'b') {
    var clip = part(geo('box', BOX), std(0x6a6458, { metalness: 0.5, roughness: 0.4 }), 0, 0.08, 0, inner); clip.scale.set(0.1, 0.16, 0.06);
    var tip = part(geo('box', BOX), std(0xd8a040, { metalness: 0.8, roughness: 0.3 }), 0, 0.17, 0, inner); tip.scale.set(0.08, 0.03, 0.04);
  } else if (it === 'a') {
    var sb = part(geo('box', BOX), std(0xa02818, { roughness: 0.6 }), 0, 0.09, 0, inner); sb.scale.set(0.3, 0.18, 0.18);
    for (var i = 0; i < 4; i++) { var sh = part(geo('cyl', CYL), std(0xd8a040, { metalness: 0.8, roughness: 0.3 }), -0.1 + i * 0.066, 0.2, 0, inner); sh.scale.set(0.022, 0.06, 0.022); }
  } else if (it === 'A') {
    var vest = part(geo('box', BOX), std(0x2e8a3a, { metalness: 0.4, roughness: 0.4 }), 0, 0.2, 0, inner); vest.scale.set(0.34, 0.36, 0.14);
    var plate = part(geo('box', BOX), glow(0x7aff8a, 1.2), 0, 0.26, 0.075, inner); plate.scale.set(0.16, 0.1, 0.01);
  } else if (it === '2') {
    var gun = shotgunModel(); gun.scale.setScalar(0.9); gun.rotation.z = 0.2; gun.position.y = 0.15; inner.add(gun);
  } else if (it === 'r' || it === 'u') {
    var col = it === 'r' ? 0xff2a1a : 0x3a7aff;
    var card = part(geo('box', BOX), glow(col, 2.5), 0, 0.2, 0, inner); card.scale.set(0.16, 0.22, 0.015);
    var stripe = part(geo('box', BOX), std(0xf0ead8), 0, 0.25, 0, inner); stripe.scale.set(0.12, 0.03, 0.02);
  } else if (it === 'P') {
    var orb = part(geo('sph', SPH), glow(0xffb040, 4), 0, 0.3, 0, inner); orb.scale.setScalar(0.14);
    var halo = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.012, 6, 32), glow(0xffd23e, 3)); halo.position.y = 0.3; inner.add(halo);
  }
  var spin = it === 'r' || it === 'u' || it === 'P' || it === '2';
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

export function makeTorch(e) {
  var root = new THREE.Group();
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

var gunMetal = function () { return std(0x2a2c30, { metalness: 0.85, roughness: 0.35 }); };
var gunWood = function () { return std(0x5a3418, { roughness: 0.6 }); };

export function shotgunModel() {
  var g = new THREE.Group(), metal = gunMetal(), wood = gunWood();
  var barrel1 = part(geo('cyl', CYL), metal, -0.018, 0, -0.35, g); barrel1.scale.set(0.018, 0.6, 0.018); barrel1.rotation.x = Math.PI / 2;
  var barrel2 = part(geo('cyl', CYL), metal, 0.018, 0, -0.35, g); barrel2.scale.set(0.018, 0.6, 0.018); barrel2.rotation.x = Math.PI / 2;
  var pump = part(geo('box', BOX), wood, 0, -0.035, -0.3, g); pump.scale.set(0.06, 0.045, 0.22); g.userData.pump = pump;
  var recv = part(geo('box', BOX), metal, 0, -0.01, 0.02, g); recv.scale.set(0.07, 0.08, 0.2);
  var stock = part(geo('box', BOX), wood, 0, -0.05, 0.22, g); stock.scale.set(0.06, 0.1, 0.26); stock.rotation.x = -0.15;
  return g;
}

export function pistolModel() {
  var g = new THREE.Group(), metal = gunMetal();
  var slide = part(geo('box', BOX), metal, 0, 0.02, -0.08, g); slide.scale.set(0.045, 0.05, 0.22); g.userData.slide = slide;
  var grip = part(geo('box', BOX), std(0x1a1a1c, { roughness: 0.7 }), 0, -0.07, 0.02, g); grip.scale.set(0.04, 0.13, 0.06); grip.rotation.x = 0.25;
  var sight = part(geo('box', BOX), glow(0xff5a2a, 2), 0, 0.05, -0.17, g); sight.scale.set(0.008, 0.01, 0.01);
  return g;
}

export function fistModel() {
  var g = new THREE.Group(), skin = std(0xc08a60, { roughness: 0.6 }), glove = std(0x3a2a20, { roughness: 0.8 });
  var hand = part(geo('box', BOX), glove, 0, 0, 0, g); hand.scale.set(0.1, 0.09, 0.12);
  var knuck = part(geo('box', BOX), glove, 0, 0.02, -0.07, g); knuck.scale.set(0.1, 0.05, 0.04);
  var wrist = part(geo('cyl', CYL), skin, 0, -0.02, 0.12, g); wrist.scale.set(0.045, 0.14, 0.045); wrist.rotation.x = Math.PI / 2;
  return g;
}
