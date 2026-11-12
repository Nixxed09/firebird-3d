// The cover's mood in 3D: Ashgate is knee-deep in ash and still burning.
//  - air(): embers drifting up and ash flakes drifting down around the player,
//    in a box that wraps with the camera, so the air is never empty.
//  - gradePass(): the colour grade. Shadows sink to ember brown instead of
//    black, highlights warm toward amber, the edges fall off into a dark ember
//    vignette, with a whisper of film grain. Cyan (restored power) and crimson
//    (danger) keep their colour: the grade only bends the darks and the warm end.
import * as THREE from 'three';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';

// Each level's mood. The episode gets hotter the deeper you go: ash and dusk
// at the gates, the furnace red-hot, the engine crimson-dark, and Riley's
// Trial at the top of the world in gold. (S1: every level its own district.)
//   fog: what the distance fades into; sky/ground/hemi: the fill light;
//   embers/ash: how much burns in the air; lift/warm/vig: the colour grade;
//   floor/ceil: surface swaps (textures.js)
var BASE = { fog: 0x2e1609, fogDensity: 0.026, sky: 0xffb27a, ground: 0x2a140c, hemi: 0.85, embers: 0.6, ash: 0.8,
  lift: [0.016, 0.006, 0.003], warm: [1.06, 0.98, 0.88], vig: [0.22, 0.08, 0.03] };
export var MOODS = {
  E1M1: { ceil: 'ceilVault', embers: 0.55, ash: 1.0 },
  E1M2: { fog: 0x3a1206, sky: 0xff9a5a, ground: 0x30100a, embers: 1.0, ash: 0.45, floor: 'tech', ceil: 'ceilHell',
    lift: [0.024, 0.006, 0.002], warm: [1.09, 0.96, 0.84], vig: [0.28, 0.06, 0.02] },
  E1M3: { fog: 0x2a0e0c, sky: 0xd88a74, ground: 0x200a0a, hemi: 0.75, embers: 0.75, ash: 0.7, floor: 'basalt', ceil: 'ceilVault',
    lift: [0.020, 0.004, 0.004], warm: [1.05, 0.97, 0.9], vig: [0.24, 0.05, 0.04] },
  E1M4: { fog: 0x34211a, fogDensity: 0.02, sky: 0xffd2a0, ground: 0x2a1a12, hemi: 1.0, embers: 0.85, ash: 0.35, floor: 'star', ceil: 'ceilVault',
    lift: [0.016, 0.010, 0.006], warm: [1.07, 1.0, 0.86], vig: [0.22, 0.12, 0.05] }
};
export function moodFor(L) {
  var code = String(L.name || '').split(':')[0], m = {};
  for (var k in BASE) m[k] = BASE[k];
  var o = MOODS[code] || {};
  for (var k2 in o) m[k2] = o[k2];
  return m;
}

var BOX = 18, HIGH = 7; // the wrap box around the camera, in cells
export function makeAir(scene, mood) {
  var N = 520, pos = new Float32Array(N * 3), col = new Float32Array(N * 3), size = new Float32Array(N), alpha = new Float32Array(N);
  var seed = new Float32Array(N), kind = new Uint8Array(N);
  var rnd = (function () { var a = 987654; return function () { a = (a * 1103515245 + 12345) & 0x7fffffff; return a / 0x7fffffff; }; })();
  for (var i = 0; i < N; i++) {
    kind[i] = rnd() < 0.55 * mood.embers / (mood.embers + mood.ash * 0.6) ? 1 : 0; // 1 ember, 0 ash
    pos[i * 3] = rnd() * BOX; pos[i * 3 + 1] = rnd() * HIGH; pos[i * 3 + 2] = rnd() * BOX;
    seed[i] = rnd() * 100;
    if (kind[i]) { var hot = rnd(); col[i * 3] = 1; col[i * 3 + 1] = 0.35 + hot * 0.4; col[i * 3 + 2] = 0.05 + hot * 0.12; size[i] = 0.018 + rnd() * 0.02; }
    else { var g = 0.25 + rnd() * 0.2; col[i * 3] = g * 1.05; col[i * 3 + 1] = g; col[i * 3 + 2] = g * 0.95; size[i] = 0.025 + rnd() * 0.03; }
  }
  var geo = new THREE.BufferGeometry(), draw = new Float32Array(N * 3);
  geo.setAttribute('position', new THREE.BufferAttribute(draw, 3).setUsage(THREE.DynamicDrawUsage));
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  geo.setAttribute('size', new THREE.BufferAttribute(size, 1));
  geo.setAttribute('alpha', new THREE.BufferAttribute(alpha, 1).setUsage(THREE.DynamicDrawUsage));
  // embers add light; ash is drawn the same way but dim, so it reads as grey flecks against the glow
  var mat = new THREE.ShaderMaterial({
    uniforms: { scale: { value: 600 } },
    vertexShader: [
      'attribute float size; attribute float alpha; attribute vec3 color; varying vec3 vC; varying float vA;',
      'uniform float scale;',
      'void main(){ vC = color; vA = alpha; vec4 mv = modelViewMatrix * vec4(position,1.0);',
      ' gl_PointSize = max(1.5, size * scale / -mv.z); gl_Position = projectionMatrix * mv; }'
    ].join('\n'),
    fragmentShader: [
      'varying vec3 vC; varying float vA;',
      'void main(){ vec2 d = gl_PointCoord - 0.5; float r = dot(d,d); if (r > 0.25) discard;',
      ' float k = smoothstep(0.25, 0.02, r); gl_FragColor = vec4(vC * k * vA, k * vA); }'
    ].join('\n'),
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
  });
  var points = new THREE.Points(geo, mat);
  points.frustumCulled = false;
  points.renderOrder = 2;
  scene.add(points);
  return {
    setScale: function (s) { mat.uniforms.scale.value = s; },
    // t: render clock (pinned when frozen, so screenshots are stable)
    update: function (cam, t) {
      var ox = cam.x - BOX / 2, oz = cam.z - BOX / 2, oy = cam.y - 2;
      for (var i = 0; i < N; i++) {
        var s = seed[i], k = i * 3, x, y, z, a;
        if (kind[i]) { // embers climb and weave, flaring and fading
          y = pos[k + 1] + t * (0.35 + (s % 1) * 0.4);
          x = pos[k] + Math.sin(t * 0.9 + s) * 0.35 + t * 0.05;
          z = pos[k + 2] + Math.cos(t * 0.7 + s * 1.3) * 0.35;
          a = (0.55 + 0.45 * Math.sin(t * (3 + s % 4) + s)) * mood.embers * 1.4;
        } else { // ash sinks slowly and tumbles
          y = pos[k + 1] - t * (0.12 + (s % 1) * 0.12);
          x = pos[k] + Math.sin(t * 0.4 + s) * 0.6;
          z = pos[k + 2] + Math.sin(t * 0.33 + s * 0.7) * 0.6;
          a = 0.5 * mood.ash;
        }
        x = ((x - ox) % BOX + BOX) % BOX; z = ((z - oz) % BOX + BOX) % BOX; y = ((y - oy) % HIGH + HIGH) % HIGH;
        // fade at the edges of the box, so particles never pop in or out
        var ex = Math.min(x, BOX - x), ez = Math.min(z, BOX - z), ey = Math.min(y, HIGH - y);
        a *= Math.min(1, ex / 2) * Math.min(1, ez / 2) * Math.min(1, ey / 1.2);
        draw[k] = ox + x; draw[k + 1] = oy + y; draw[k + 2] = oz + z;
        alpha[i] = Math.max(0, a);
      }
      geo.attributes.position.needsUpdate = true;
      geo.attributes.alpha.needsUpdate = true;
    }
  };
}

export function gradePass(mood) {
  var pass = new ShaderPass({
    uniforms: {
      tDiffuse: { value: null },
      uLift: { value: new THREE.Vector3().fromArray(mood.lift) },
      uWarm: { value: new THREE.Vector3().fromArray(mood.warm) },
      uVig: { value: new THREE.Vector3().fromArray(mood.vig) },
      uAspect: { value: 1.6 },
      uTime: { value: 0 },
      uHurt: { value: 0 }
    },
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: [
      'uniform sampler2D tDiffuse; uniform vec3 uLift; uniform vec3 uWarm; uniform vec3 uVig;',
      'uniform float uAspect; uniform float uTime; uniform float uHurt; varying vec2 vUv;',
      'float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }',
      'void main(){',
      '  vec4 src = texture2D(tDiffuse, vUv); vec3 c = src.rgb;',
      '  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));',
      // ember shadows: the darks sink to brown, never to dead black
      '  c += uLift * (1.0 - smoothstep(0.0, 0.18, l));',
      // a warm lean on the bright end; saturated colours (cyan, crimson) keep most of theirs
      '  float sat = max(c.r, max(c.g, c.b)) - min(c.r, min(c.g, c.b));',
      '  float warmK = smoothstep(0.05, 0.9, l) * (1.0 - clamp(sat * 1.6, 0.0, 0.8));',
      '  c *= mix(vec3(1.0), uWarm, warmK);',
      // the vignette falls off into dark ember, like the cover's background
      '  vec2 d = vUv - 0.5; d.x *= uAspect;',
      '  float v = smoothstep(0.95, 0.32, length(d));',
      '  c = mix(c * uVig * 2.2, c, v);',
      // hurt: the edges flush crimson for a moment
      '  c = mix(c, vec3(0.6, 0.02, 0.01), uHurt * (1.0 - v) * 0.6);',
      // film grain, strongest in the darks
      '  c += (hash(vUv * 731.0 + fract(uTime * 7.0)) - 0.5) * 0.011 * (1.0 - smoothstep(0.0, 0.5, l));',
      '  gl_FragColor = vec4(max(c, 0.0), src.a);',
      '}'
    ].join('\n')
  });
  pass.setMood = function (m) {
    pass.uniforms.uLift.value.fromArray(m.lift); pass.uniforms.uWarm.value.fromArray(m.warm); pass.uniforms.uVig.value.fromArray(m.vig);
  };
  return pass;
}
