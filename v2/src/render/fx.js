// Particles (sparks, blood, smoke, fire, embers) and a small pool of real
// lights, so a muzzle flash or an explosion lights up the room around it.
import * as THREE from 'three';

var MAX = 3000;

export function makeFx(scene) {
  var pos = new Float32Array(MAX * 3), col = new Float32Array(MAX * 3), size = new Float32Array(MAX), alpha = new Float32Array(MAX);
  var vel = new Float32Array(MAX * 3), life = new Float32Array(MAX), maxLife = new Float32Array(MAX), grav = new Float32Array(MAX), grow = new Float32Array(MAX);
  var baseCol = new Float32Array(MAX * 3), fade = new Uint8Array(MAX);
  var geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage));
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3).setUsage(THREE.DynamicDrawUsage));
  geo.setAttribute('size', new THREE.BufferAttribute(size, 1).setUsage(THREE.DynamicDrawUsage));
  geo.setAttribute('alpha', new THREE.BufferAttribute(alpha, 1).setUsage(THREE.DynamicDrawUsage));
  var additive = new THREE.ShaderMaterial({
    uniforms: { scale: { value: 600 } },
    vertexShader: [
      'attribute float size; attribute float alpha; attribute vec3 color; varying vec3 vC; varying float vA;',
      'uniform float scale;',
      'void main(){ vC = color; vA = alpha; vec4 mv = modelViewMatrix * vec4(position,1.0);',
      ' gl_PointSize = size * scale / -mv.z; gl_Position = projectionMatrix * mv; }'
    ].join('\n'),
    fragmentShader: [
      'varying vec3 vC; varying float vA;',
      'void main(){ vec2 d = gl_PointCoord - 0.5; float r = dot(d,d); if (r > 0.25) discard;',
      ' float k = smoothstep(0.25, 0.0, r); gl_FragColor = vec4(vC * k * vA, k * vA); }'
    ].join('\n'),
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
  });
  var points = new THREE.Points(geo, additive);
  points.frustumCulled = false;
  scene.add(points);
  var next = 0, count = 0;

  function spawn(x, y, z, vx, vy, vz, c, s, l, g, gr, noFade) {
    var i = next; next = (next + 1) % MAX; count = Math.min(MAX, count + 1);
    pos[i * 3] = x; pos[i * 3 + 1] = y; pos[i * 3 + 2] = z;
    vel[i * 3] = vx; vel[i * 3 + 1] = vy; vel[i * 3 + 2] = vz;
    baseCol[i * 3] = c[0]; baseCol[i * 3 + 1] = c[1]; baseCol[i * 3 + 2] = c[2];
    size[i] = s; life[i] = maxLife[i] = l; grav[i] = g || 0; grow[i] = gr || 0; fade[i] = noFade ? 0 : 1;
  }
  function r(a) { return (Math.random() - 0.5) * 2 * a; }

  // light pool: reused, never added or removed (so shaders don't recompile)
  var lights = [];
  for (var li = 0; li < 6; li++) {
    var L = new THREE.PointLight(0xffaa55, 0, 6, 1.6);
    L.userData = { t: 0, max: 0, peak: 0 };
    scene.add(L); lights.push(L);
  }
  var nextLight = 0;
  function flash(x, y, z, color, peak, secs, dist) {
    var L = lights[nextLight]; nextLight = (nextLight + 1) % lights.length;
    L.position.set(x, y, z); L.color.setHex(color); L.distance = dist || 6;
    L.userData.t = L.userData.max = secs; L.userData.peak = peak;
  }

  var FX = {
    blood: function (e) {
      for (var i = 0; i < 14; i++) spawn(e.x, e.y, e.z, e.dx * 1.5 + r(1.2), r(1) + 1, e.dz * 1.5 + r(1.2), [0.55, 0.02, 0.02], 0.05 + Math.random() * 0.04, 0.6, 9);
    },
    spark: function (e) {
      for (var i = 0; i < 12; i++) spawn(e.x, e.y, e.z, r(3), r(3) + 1, r(3), [1.4, 1.1, 0.5], 0.025, 0.35, 8);
      flash(e.x, e.y, e.z, 0x9ffcff, 2, 0.1, 3);
    },
    puff: function (e) {
      for (var i = 0; i < 6; i++) spawn(e.x, e.y, e.z, r(0.3), r(0.3) + 0.2, r(0.3), [0.25, 0.23, 0.2], 0.12, 0.5, -0.2, 0.3);
      for (var j = 0; j < 5; j++) spawn(e.x, e.y, e.z, r(2.5), r(2.5), r(2.5), [1.6, 1.0, 0.4], 0.02, 0.18, 6);
    },
    muzzle: function (e) {
      var big = e.weapon === 'shotgun';
      flash(e.x, e.y, e.z, 0xffb060, big ? 6 : 3.5, 0.07, big ? 8 : 6);
    },
    fireBurst: function (e) {
      for (var i = 0; i < 22; i++) spawn(e.x, e.y, e.z, r(2), r(2) + 0.5, r(2), [1.8, 0.7, 0.15], 0.06, 0.35, 2, -0.1);
      flash(e.x, e.y, e.z, 0xff7a20, 4, 0.25, 5);
    },
    greenBurst: function (e) {
      for (var i = 0; i < 22; i++) spawn(e.x, e.y, e.z, r(2), r(2) + 0.5, r(2), [0.3, 1.6, 1.8], 0.06, 0.35, 2, -0.1);
      flash(e.x, e.y, e.z, 0x5ff0ff, 4, 0.25, 5);
    },
    explosion: function (e) {
      for (var i = 0; i < 90; i++) {
        var hot = Math.random() < 0.5;
        spawn(e.x, e.y, e.z, r(4), r(3) + 2, r(4), hot ? [2, 1.2, 0.3] : [1.4, 0.4, 0.05], 0.12 + Math.random() * 0.1, 0.5 + Math.random() * 0.4, 3, 0.4);
      }
      for (var j = 0; j < 30; j++) spawn(e.x, e.y + 0.3, e.z, r(1), Math.random() * 1.5, r(1), [0.18, 0.15, 0.13], 0.35, 1.4, -0.5, 0.6);
      flash(e.x, e.y + 0.5, e.z, 0xff8a30, 14, 0.5, 9);
    },
    gib: function (e) {
      var c = e.kind === 'gnasher' ? [0.6, 0.15, 0.2] : [0.5, 0.05, 0.02];
      for (var i = 0; i < 26; i++) spawn(e.x, e.y, e.z, r(2), Math.random() * 3, r(2), c, 0.06 + Math.random() * 0.05, 0.9, 9);
      if (e.kind === 'riley') for (var k = 0; k < 60; k++) spawn(e.x, e.y + Math.random(), e.z, r(1), Math.random() * 1.5, r(1), [0.3, 1.5, 1.7], 0.04, 1.4, -0.4);
    },
    summon: function (e) {
      for (var i = 0; i < 50; i++) spawn(e.x + r(0.4), e.y, e.z + r(0.4), r(0.5), Math.random() * 2.5, r(0.5), [1.8, 0.5, 0.1], 0.07, 0.8, -1);
      flash(e.x, e.y + 0.5, e.z, 0xff5a10, 6, 0.6, 6);
    },
    pickup: function (e) {
      for (var i = 0; i < 16; i++) spawn(e.x, e.y, e.z, r(1), Math.random() * 1.5, r(1), [1.4, 1.2, 0.5], 0.03, 0.5, -1);
    }
  };

  return {
    points: points,
    event: function (e) { if (FX[e.name]) FX[e.name](e); },
    // a trail behind anything glowing that moves (fireballs)
    trail: function (x, y, z, green) {
      spawn(x, y, z, r(0.2), r(0.2), r(0.2), green ? [0.3, 1.4, 1.6] : [1.8, 0.6, 0.1], 0.07, 0.3, 0, -0.15);
    },
    ember: function (x, y, z) { spawn(x + r(0.05), y, z + r(0.05), r(0.15), 0.4 + Math.random() * 0.4, r(0.15), [1.6, 0.6, 0.1], 0.02, 1.1, -0.2); },
    update: function (dt, pixelScale) {
      additive.uniforms.scale.value = pixelScale;
      for (var i = 0; i < count; i++) {
        if (life[i] <= 0) { alpha[i] = 0; continue; }
        life[i] -= dt;
        vel[i * 3 + 1] -= grav[i] * dt;
        pos[i * 3] += vel[i * 3] * dt; pos[i * 3 + 1] += vel[i * 3 + 1] * dt; pos[i * 3 + 2] += vel[i * 3 + 2] * dt;
        var k = Math.max(0, life[i] / maxLife[i]);
        alpha[i] = fade[i] ? k : 1;
        size[i] = Math.max(0.005, size[i] + grow[i] * dt);
        col[i * 3] = baseCol[i * 3]; col[i * 3 + 1] = baseCol[i * 3 + 1] * (0.5 + 0.5 * k); col[i * 3 + 2] = baseCol[i * 3 + 2] * k;
      }
      geo.attributes.position.needsUpdate = geo.attributes.color.needsUpdate = geo.attributes.size.needsUpdate = geo.attributes.alpha.needsUpdate = true;
      geo.setDrawRange(0, count);
      lights.forEach(function (L) {
        var u = L.userData;
        if (u.t > 0) { u.t -= dt; L.intensity = u.peak * Math.max(0, u.t / u.max); } else L.intensity = 0;
      });
    }
  };
}
