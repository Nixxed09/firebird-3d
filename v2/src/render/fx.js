// Particles (sparks, blood, smoke, fire, embers) and a small pool of real
// lights, so a muzzle flash or an explosion lights up the room around it.
import * as THREE from 'three';

var MAX = 3000;

function canvasTex(size, draw) {
  var t;
  if (typeof document !== 'undefined') {
    var cv = document.createElement('canvas'); cv.width = cv.height = size;
    draw(cv.getContext('2d'), size);
    t = new THREE.CanvasTexture(cv);
  } else t = new THREE.Texture();
  t.colorSpace = THREE.SRGBColorSpace; t.magFilter = THREE.NearestFilter;
  return t;
}
// a bullet hole: a dark pit with a scorched, chipped rim
var holeTex = canvasTex(32, function (c, n) {
  var g = c.createRadialGradient(n / 2, n / 2, 1, n / 2, n / 2, n / 2);
  g.addColorStop(0, 'rgba(0,0,0,1)'); g.addColorStop(0.28, 'rgba(10,8,6,0.95)'); g.addColorStop(0.55, 'rgba(30,24,18,0.55)'); g.addColorStop(1, 'rgba(0,0,0,0)');
  c.fillStyle = g; c.fillRect(0, 0, n, n);
  // a pale chipped rim, so the hole reads on dark rock as well as light brick
  c.strokeStyle = 'rgba(190,175,150,0.55)'; c.lineWidth = 1.5; c.beginPath(); c.arc(n / 2, n / 2, n * 0.2, 0, 6.28); c.stroke();
  for (var i = 0; i < 9; i++) { var a = Math.random() * 6.28, r = 5 + Math.random() * 6; c.fillStyle = i % 3 ? 'rgba(20,16,12,0.7)' : 'rgba(200,185,160,0.6)'; c.fillRect(n / 2 + Math.cos(a) * r, n / 2 + Math.sin(a) * r, 2, 2); }
});
// a blood splat on the floor: a chunky blob with droplets (kid-level, not gory)
var bloodTex = canvasTex(32, function (c, n) {
  c.fillStyle = 'rgba(120,8,8,0.9)';
  for (var i = 0; i < 7; i++) { var a = Math.random() * 6.28, r = Math.random() * 7; c.beginPath(); c.arc(n / 2 + Math.cos(a) * r, n / 2 + Math.sin(a) * r, 3 + Math.random() * 4, 0, 6.28); c.fill(); }
  c.fillStyle = 'rgba(90,4,4,0.85)';
  for (var j = 0; j < 8; j++) { var b = Math.random() * 6.28, d = 9 + Math.random() * 5; c.fillRect(n / 2 + Math.cos(b) * d, n / 2 + Math.sin(b) * d, 2, 2); }
});
// the muzzle flash: a hot core and a ragged four-point star
export var flashTex = canvasTex(64, function (c, n) {
  c.translate(n / 2, n / 2);
  for (var k = 0; k < 8; k++) {
    var len = k % 2 ? n * 0.22 : n * 0.48;
    c.rotate(Math.PI / 4);
    var g = c.createLinearGradient(0, 0, len, 0);
    g.addColorStop(0, 'rgba(255,250,220,1)'); g.addColorStop(0.4, 'rgba(255,190,80,0.9)'); g.addColorStop(1, 'rgba(255,90,20,0)');
    c.fillStyle = g; c.beginPath(); c.moveTo(0, -n * 0.05); c.lineTo(len, 0); c.lineTo(0, n * 0.05); c.fill();
  }
  var core = c.createRadialGradient(0, 0, 0, 0, 0, n * 0.2);
  core.addColorStop(0, 'rgba(255,255,240,1)'); core.addColorStop(1, 'rgba(255,160,60,0)');
  c.fillStyle = core; c.beginPath(); c.arc(0, 0, n * 0.2, 0, 6.28); c.fill();
});

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

  // decals: bullet holes and blood splats that stay (oldest reused first)
  var decalGeo = new THREE.PlaneGeometry(1, 1), decals = [], nextDecal = 0, MAX_DECALS = 180;
  var holeMat = new THREE.MeshBasicMaterial({ map: holeTex, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 });
  var bloodMat = new THREE.MeshBasicMaterial({ map: bloodTex, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 });
  function decal(x, y, z, nx, ny, nz, size, mat) {
    var d = decals[nextDecal];
    if (!d) { d = new THREE.Mesh(decalGeo, mat); d.renderOrder = 1; scene.add(d); decals[nextDecal] = d; }
    d.material = mat;
    d.position.set(x + nx * 0.004, y + ny * 0.004, z + nz * 0.004);
    d.lookAt(x + nx, y + ny, z + nz);
    d.rotateZ(Math.random() * 6.28);
    d.scale.setScalar(size);
    d.visible = true;
    nextDecal = (nextDecal + 1) % MAX_DECALS;
  }
  // which way the hit surface faces: floors and ceilings are easy; a wall hit sits on a cell edge
  function normalOf(e) {
    if (e.surface === 'floor') return [0, 1, 0];
    if (e.surface === 'ceil') return [0, -1, 0];
    var fx = e.x - Math.round(e.x), fz = e.z - Math.round(e.z);
    if (Math.abs(fx) < Math.abs(fz)) return [e.dx > 0 ? -1 : 1, 0, 0];
    return [0, 0, e.dz > 0 ? -1 : 1];
  }
  // tracers: a bright streak from the muzzle to the hit, gone in a few frames
  var tracerMat = new THREE.MeshBasicMaterial({ color: 0xffd890, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false });
  var tracerGeo = new THREE.BoxGeometry(0.012, 0.012, 1), tracers = [], nextTracer = 0;
  for (var ti = 0; ti < 24; ti++) { var tm = new THREE.Mesh(tracerGeo, tracerMat.clone()); tm.visible = false; tm.userData.t = 0; scene.add(tm); tracers.push(tm); }
  function tracer(e) {
    var dx = e.x2 - e.x, dy = e.y2 - e.y, dz = e.z2 - e.z, len = Math.sqrt(dx * dx + dy * dy + dz * dz);
    if (len < 1) return;
    // start a little ahead of the eye (at the barrel) and draw a short streak partway along the shot
    var s0 = Math.min(0.9, len * 0.2), seg = Math.min(len - s0, 2.5 + Math.random() * 2), s1 = s0 + Math.random() * Math.max(0, len - s0 - seg);
    var tm = tracers[nextTracer]; nextTracer = (nextTracer + 1) % tracers.length;
    var ux = dx / len, uy = dy / len, uz = dz / len, mid = s1 + seg / 2;
    tm.position.set(e.x + ux * mid, e.y - 0.08 + uy * mid, e.z + uz * mid);
    tm.lookAt(e.x + ux * (mid + 1), e.y - 0.08 + uy * (mid + 1), e.z + uz * (mid + 1));
    tm.scale.set(1, 1, seg);
    tm.visible = true; tm.userData.t = 0.05; tm.material.opacity = 0.9;
  }
  // shell casings: little brass (or red shotgun) cases that fly out right, bounce and settle
  var casingGeo = new THREE.CylinderGeometry(0.012, 0.012, 0.04, 6), shellGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.07, 8);
  var brass = new THREE.MeshStandardMaterial({ color: 0xc89a40, metalness: 0.9, roughness: 0.3 });
  var red = new THREE.MeshStandardMaterial({ color: 0xa02818, roughness: 0.5 });
  var casings = [], nextCasing = 0, pending = [];
  function casing(e) {
    var c = casings[nextCasing];
    if (!c) { c = new THREE.Mesh(casingGeo, brass); scene.add(c); casings[nextCasing] = c; }
    var sg = e.weapon === 'shotgun';
    c.geometry = sg ? shellGeo : casingGeo; c.material = sg ? red : brass;
    var rx = -Math.sin(e.ang), rz = Math.cos(e.ang); // to the player's right
    c.position.set(e.x + Math.cos(e.ang) * 0.25 + rx * 0.12, e.y, e.z + Math.sin(e.ang) * 0.25 + rz * 0.12);
    c.userData = { vx: rx * (1.4 + Math.random()) + Math.cos(e.ang) * 0.3, vy: 1.6 + Math.random() * 0.8, vz: rz * (1.4 + Math.random()) + Math.sin(e.ang) * 0.3,
      spin: 10 + Math.random() * 10, life: 6, bounced: 0 };
    c.visible = true;
    nextCasing = (nextCasing + 1) % 30;
  }

  var FX = {
    blood: function (e) {
      var n = e.kill ? 26 : 14;
      for (var i = 0; i < n; i++) spawn(e.x, e.y, e.z, -e.dx * (1.5 + Math.random() * 2) + r(1.2), r(1) + 1.2, -e.dz * (1.5 + Math.random() * 2) + r(1.2), [0.55, 0.02, 0.02], 0.05 + Math.random() * 0.05, 0.6, 9);
      // a splat on the floor behind the demon, sometimes
      if (e.floorY !== undefined && (e.kill || Math.random() < 0.35)) decal(e.x - e.dx * 0.5 + r(0.3), e.floorY + 0.002, e.z - e.dz * 0.5 + r(0.3), 0, 1, 0, e.kill ? 0.7 : 0.4, bloodMat);
    },
    spark: function (e) {
      for (var i = 0; i < 12; i++) spawn(e.x, e.y, e.z, r(3), r(3) + 1, r(3), [1.4, 1.1, 0.5], 0.025, 0.35, 8);
      flash(e.x, e.y, e.z, 0x9ffcff, 2, 0.1, 3);
    },
    puff: function (e) {
      var nrm = normalOf(e), metal = e.cell === 3 || e.cell === 4 || e.cell === 6 || e.cell === 7 || e.cell === 8;
      decal(e.x, e.y, e.z, nrm[0], nrm[1], nrm[2], 0.09 + Math.random() * 0.04, holeMat);
      // sparks jump off the surface (lots off metal), dust drifts off stone and brick
      var sparks = metal ? 12 : 5;
      for (var j = 0; j < sparks; j++) spawn(e.x, e.y, e.z, nrm[0] * 2 + r(2), nrm[1] * 2 + r(1.5) + 1, nrm[2] * 2 + r(2), [1.8, 1.2, 0.5], 0.018, 0.2 + Math.random() * 0.15, 7);
      var dust = metal ? [0.3, 0.3, 0.32] : [0.36, 0.3, 0.24];
      for (var i = 0; i < (metal ? 3 : 7); i++) spawn(e.x, e.y, e.z, nrm[0] * 0.6 + r(0.3), nrm[1] * 0.6 + r(0.3) + 0.2, nrm[2] * 0.6 + r(0.3), dust, 0.1, 0.6 + Math.random() * 0.4, -0.2, 0.35);
      if (metal) flash(e.x + nrm[0] * 0.1, e.y + nrm[1] * 0.1, e.z + nrm[2] * 0.1, 0xffc070, 1.2, 0.05, 2);
    },
    tracer: function (e) { tracer(e); },
    casing: function (e) { if (e.delay) pending.push({ t: e.delay, e: e }); else casing(e); },
    muzzle: function (e) {
      var big = e.weapon === 'shotgun';
      flash(e.x, e.y, e.z, 0xffb060, big ? 7 : 4, 0.07, big ? 9 : 6);
      // a curl of smoke from the barrel that hangs for a moment
      for (var i = 0; i < (big ? 8 : 3); i++) spawn(e.x, e.y + 0.05, e.z, r(0.15), 0.25 + Math.random() * 0.3, r(0.15), [0.2, 0.19, 0.18], 0.06, 0.9 + Math.random() * 0.5, -0.3, 0.12);
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

  var fx = {
    points: points,
    stats: function () {
      return { decals: decals.filter(function (d) { return d && d.visible; }).length, tracers: tracers.filter(function (t) { return t.visible; }).length,
        casings: casings.filter(function (c) { return c && c.visible; }).length };
    },
    event: function (e) { if (FX[e.name]) FX[e.name](e); },
    // a trail behind anything glowing that moves (fireballs)
    trail: function (x, y, z, green) {
      spawn(x, y, z, r(0.2), r(0.2), r(0.2), green ? [0.3, 1.4, 1.6] : [1.8, 0.6, 0.1], 0.07, 0.3, 0, -0.15);
    },
    ember: function (x, y, z) { spawn(x + r(0.05), y, z + r(0.05), r(0.15), 0.4 + Math.random() * 0.4, r(0.15), [1.6, 0.6, 0.1], 0.02, 1.1, -0.2); },
    update: function (dt, pixelScale, floorAt) {
      tracers.forEach(function (tm) { if (tm.visible) { tm.userData.t -= dt; tm.material.opacity = Math.max(0, tm.userData.t / 0.05) * 0.9; if (tm.userData.t <= 0) tm.visible = false; } });
      for (var pi = pending.length - 1; pi >= 0; pi--) if ((pending[pi].t -= dt) <= 0) { casing(pending[pi].e); pending.splice(pi, 1); }
      casings.forEach(function (c) {
        if (!c || !c.visible) return;
        var u = c.userData;
        u.life -= dt;
        if (u.life <= 0) { c.visible = false; return; }
        u.vy -= 9 * dt;
        c.position.x += u.vx * dt; c.position.y += u.vy * dt; c.position.z += u.vz * dt;
        c.rotation.x += u.spin * dt; c.rotation.z += u.spin * 0.7 * dt;
        var fy = floorAt ? floorAt(c.position.x, c.position.z) : 0;
        if (c.position.y < fy + 0.012) {
          c.position.y = fy + 0.012;
          if (u.vy < -0.5 && u.bounced < 3) { u.vy = -u.vy * 0.35; u.vx *= 0.5; u.vz *= 0.5; u.spin *= 0.5; u.bounced++; if (fx.onTink) fx.onTink(c.position); }
          else { u.vy = 0; u.vx *= 0.8; u.vz *= 0.8; u.spin *= 0.8; c.rotation.x = Math.PI / 2; }
        }
      });
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
  return fx;
}
