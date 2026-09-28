// Procedural surface textures: every wall, floor and door is painted in code
// at 256x256, with a height field turned into a normal map so light catches
// the mortar, rivets and cracks. No image files.
import * as THREE from 'three';

var N = 128; // retro-modern: chunky, readable texels (DUSK / Ultrakill), with modern lighting on top

// ---- tiling noise ------------------------------------------------------------------

function hash(x, y, s) {
  var h = (x * 374761393 + y * 668265263 + s * 982451653) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}
// value noise that wraps every `period` cells, so textures tile seamlessly
function vnoise(x, y, period, s) {
  var xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
  var u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
  function g(a, b) { return hash(((a % period) + period) % period, ((b % period) + period) % period, s); }
  var a = g(xi, yi), b = g(xi + 1, yi), c = g(xi, yi + 1), d = g(xi + 1, yi + 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}
function fbm(x, y, oct, s) {
  var sum = 0, amp = 0.5, f = 1;
  for (var o = 0; o < oct; o++) { sum += amp * vnoise(x * f, y * f, 8 * f, s + o * 17); amp *= 0.5; f *= 2; }
  return sum;
}
function mix(a, b, t) { return a + (b - a) * t; }
function clamp01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
function rgb(hex) { return [(hex >> 16 & 255) / 255, (hex >> 8 & 255) / 255, (hex & 255) / 255]; }

// ---- painting a surface ---------------------------------------------------------------

// paint(u, v) returns { c: [r,g,b] 0..1, h: height 0..1, e: [r,g,b] emissive or null, r: roughness }
function bake(paint, opts) {
  opts = opts || {};
  var col = new Uint8ClampedArray(N * N * 4), hgt = new Float32Array(N * N);
  var emi = opts.emissive ? new Uint8ClampedArray(N * N * 4) : null;
  var rough = new Uint8ClampedArray(N * N * 4);
  for (var y = 0; y < N; y++) {
    for (var x = 0; x < N; x++) {
      var o = paint(x / N, y / N, x, y), i = y * N + x, k = i * 4;
      col[k] = o.c[0] * 255; col[k + 1] = o.c[1] * 255; col[k + 2] = o.c[2] * 255; col[k + 3] = 255;
      hgt[i] = o.h;
      var r = (o.r === undefined ? 0.85 : o.r) * 255;
      rough[k] = r; rough[k + 1] = r; rough[k + 2] = r; rough[k + 3] = 255;
      if (emi) { var e = o.e || [0, 0, 0]; emi[k] = e[0] * 255; emi[k + 1] = e[1] * 255; emi[k + 2] = e[2] * 255; emi[k + 3] = 255; }
    }
  }
  return {
    map: tex(col, true), normalMap: tex(normals(hgt, opts.bump || 3), false),
    roughnessMap: tex(rough, false), emissiveMap: emi ? tex(emi, true) : null
  };
}

function normals(h, strength) {
  var out = new Uint8ClampedArray(N * N * 4);
  for (var y = 0; y < N; y++) for (var x = 0; x < N; x++) {
    var l = h[y * N + ((x + N - 1) % N)], r = h[y * N + ((x + 1) % N)];
    var u = h[((y + N - 1) % N) * N + x], d = h[((y + 1) % N) * N + x];
    var nx = (l - r) * strength, ny = (u - d) * strength, nz = 1;
    var len = Math.sqrt(nx * nx + ny * ny + nz * nz), k = (y * N + x) * 4;
    out[k] = (nx / len * 0.5 + 0.5) * 255; out[k + 1] = (ny / len * 0.5 + 0.5) * 255; out[k + 2] = (nz / len * 0.5 + 0.5) * 255; out[k + 3] = 255;
  }
  return out;
}

function tex(data, srgb) {
  var t;
  if (typeof document !== 'undefined') {
    var cv = document.createElement('canvas');
    cv.width = N; cv.height = N;
    cv.getContext('2d').putImageData(new ImageData(data, N, N), 0, 0);
    t = new THREE.CanvasTexture(cv);
  } else {
    t = new THREE.DataTexture(data, N, N);
  }
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  t.anisotropy = 8;
  t.magFilter = THREE.NearestFilter; // retro-modern: chunky texels up close, like DUSK
  t.needsUpdate = true;
  return t;
}

// ---- the surfaces ----------------------------------------------------------------------

function brick(base, dark, mortar, seed) {
  var B = rgb(base), D = rgb(dark), M = rgb(mortar);
  return function (u, v) {
    var rows = 8, row = Math.floor(v * rows), off = row % 2 ? 0.5 : 0;
    var bu = u * 4 + off, col = Math.floor(bu);
    var fu = bu - col, fv = v * rows - row;
    var edge = Math.min(fu, 1 - fu) * 4 * 0.5, edgeV = Math.min(fv, 1 - fv) * 0.5;
    var e = Math.min(edge, edgeV * 2);
    var n = fbm(u * 8, v * 8, 4, seed), bn = hash(col & 3, row, seed);
    var chip = fbm(u * 24, v * 24, 2, seed + 5) > 0.72 ? 0.25 : 0;
    if (e < 0.045) {
      var mn = 0.8 + n * 0.4;
      return { c: [M[0] * mn, M[1] * mn, M[2] * mn], h: 0.1 + n * 0.1, r: 0.95 };
    }
    var t = clamp01(bn * 0.6 + n * 0.5), s = 0.8 + n * 0.35 - chip;
    return {
      c: [mix(D[0], B[0], t) * s, mix(D[1], B[1], t) * s, mix(D[2], B[2], t) * s],
      h: 0.6 + n * 0.3 - chip + Math.min(e, 0.12) * 2, r: 0.8 + n * 0.15
    };
  };
}

function stone(base, dark, seed) {
  var B = rgb(base), D = rgb(dark);
  return function (u, v) {
    var cu = u * 3, cv = v * 4 + (Math.floor(u * 3) % 2) * 0.5;
    var fu = cu - Math.floor(cu), fv = cv - Math.floor(cv), bid = hash(Math.floor(cu) % 3, Math.floor(cv) % 4, seed);
    var e = Math.min(fu, 1 - fu, (fv < 0.5 ? fv : 1 - fv) * 1.5);
    var n = fbm(u * 6, v * 6, 5, seed);
    if (e < 0.012) return { c: [0.62, 0.42, 0.2], h: 0.35, r: 0.35 };   // a bronze seam inlaid in the joint
    if (e < 0.035) return { c: [D[0] * 0.5, D[1] * 0.5, D[2] * 0.5], h: 0.1, r: 0.95 };
    var t = clamp01(n * 0.8 + bid * 0.4), s = 0.8 + n * 0.3;
    return { c: [mix(D[0], B[0], t) * s, mix(D[1], B[1], t) * s, mix(D[2], B[2], t) * s], h: 0.5 + n * 0.5, r: 0.9 };
  };
}

function metal(base, dark, seed) {
  var B = rgb(base), D = rgb(dark);
  return function (u, v, x, y) {
    var pu = (u * 2) % 1, pv = (v * 2) % 1;
    var seam = Math.min(pu, 1 - pu, pv, 1 - pv) < 0.012;
    var riv = [[0.06, 0.06], [0.94, 0.06], [0.06, 0.94], [0.94, 0.94]].some(function (r) { var dx = pu - r[0], dy = pv - r[1]; return dx * dx + dy * dy < 0.0009; });
    var n = fbm(u * 6, v * 16, 4, seed), scratch = vnoise(u * 90, v * 4, 90, seed + 3) > 0.9 ? 0.15 : 0;
    var s = 0.75 + n * 0.35 + scratch;
    if (seam) return { c: [D[0] * 0.4, D[1] * 0.4, D[2] * 0.4], h: 0.1, r: 0.6 };
    if (riv) return { c: [B[0] * 1.2, B[1] * 1.2, B[2] * 1.2], h: 1, r: 0.35 };
    return { c: [mix(D[0], B[0], n) * s, mix(D[1], B[1], n) * s, mix(D[2], B[2], n) * s], h: 0.5 + n * 0.1, r: 0.45 + n * 0.2 };
  };
}

function tech(seed) {
  var m = metal(0x5e4c34, 0x221a12, seed);   // dark bronze housing
  return function (u, v, x, y) {
    var o = m(u, v, x, y);
    var strip = Math.abs(v - 0.5) < 0.025 && (u * 4) % 1 > 0.15 && (u * 4) % 1 < 0.85;
    var lamp = Math.abs(v - 0.15) < 0.04 && Math.abs(((u * 2) % 1) - 0.5) < 0.12;
    if (strip) return { c: [0.2, 0.7, 0.8], h: 0.3, r: 0.3, e: [0.15, 0.85, 1.0] };
    if (lamp) return { c: [0.9, 0.7, 0.3], h: 0.8, r: 0.3, e: [1.0, 0.6, 0.15] };
    o.e = [0, 0, 0];
    return o;
  };
}

// Overseer basalt: big dark cut blocks with red mercury glowing in the joints
function hellrock(seed, dim) {
  return function (u, v) {
    var cu = u * 2, row = Math.floor(v * 3), cv = v * 3;
    cu += (row % 2) * 0.5;
    var fu = cu - Math.floor(cu), fv = cv - row;
    var e = Math.min(fu, 1 - fu, fv, 1 - fv) * 2;
    var n = fbm(u * 6, v * 6, 5, seed), bid = hash(Math.floor(cu) & 1, row % 3, seed);
    var s = 0.55 + n * 0.45 + bid * 0.15;
    if (e < 0.025) return dim ? { c: [0.25, 0.03, 0.04], h: 0.05, r: 0.6, e: [0.12, 0.01, 0.02] } : { c: [0.9, 0.06, 0.12], h: 0.05, r: 0.3, e: [0.9, 0.04, 0.1] };   // the mercury seam (dim underfoot and overhead)
    if (e < 0.05) return { c: [0.05, 0.04, 0.045], h: 0.15, r: 0.9, e: [0.18, 0.01, 0.02] };         // scorched edge
    return { c: [0.13 * s, 0.115 * s, 0.12 * s], h: 0.5 + n * 0.5, r: 0.85 - n * 0.2, e: [0, 0, 0] };
  };
}
// red mercury as a liquid: bright and heavy, with darker cooling swirls
function mercury(seed) {
  return function (u, v) {
    var n = fbm(u * 4, v * 4, 4, seed), w = fbm(u * 9 + n * 2, v * 9, 3, seed + 3);
    var k = clamp01(0.35 + w * 0.9 - (n > 0.62 ? (n - 0.62) * 3 : 0));
    return { c: [0.3 + k * 0.55, 0.01 + k * 0.04, 0.03 + k * 0.06], h: 0.2 + w * 0.2, r: 0.2, e: [0.18 + k * 0.62, k * 0.03, 0.02 + k * 0.06] };
  };
}

function door(stripe) {
  var m = metal(0x8a6a42, 0x30241a, 31);
  var S = stripe === 'red' ? [0.9, 0.12, 0.08] : stripe === 'blue' ? [0.15, 0.35, 1.0] : null;
  return function (u, v, x, y) {
    var o = m(u, v, x, y);
    // a gold band with a row of inset diamonds (Tartarian ornament, not a hazard stripe)
    var bu = (u * 8) % 1, bv = (v - 0.88) / 0.12, inset = Math.abs(bu - 0.5) + Math.abs(bv - 0.5) < 0.32;
    if (v > 0.88) return { c: inset ? [0.2, 0.13, 0.07] : [0.9, 0.68, 0.3], h: inset ? 0.3 : 0.85, r: inset ? 0.7 : 0.3, e: [0, 0, 0] };
    if (Math.abs(u - 0.5) < 0.012) return { c: [0.05, 0.05, 0.05], h: 0, r: 0.8, e: [0, 0, 0] }; // centre seam
    if (S && Math.abs(v - 0.45) < 0.05) return { c: S, h: 0.7, r: 0.3, e: [S[0] * 0.8, S[1] * 0.8, S[2] * 0.8] };
    o.e = [0, 0, 0];
    return o;
  };
}

function switchPanel(on) {
  var m = metal(0x7a5e3a, 0x2a2016, 41);
  return function (u, v, x, y) {
    var o = m(u, v, x, y);
    var inBox = Math.abs(u - 0.5) < 0.18 && Math.abs(v - 0.5) < 0.26;
    if (inBox) {
      var lever = Math.abs(u - 0.5) < 0.04 && (on ? v > 0.5 && v < 0.72 : v > 0.28 && v < 0.5);
      var lamp = Math.abs(u - 0.5) < 0.08 && Math.abs(v - (on ? 0.3 : 0.7)) < 0.04;
      var L = on ? [0.35, 0.95, 1] : [1, 0.1, 0.16];
      if (lamp) return { c: L, h: 0.9, r: 0.2, e: L };
      if (lever) return { c: [0.8, 0.8, 0.75], h: 1, r: 0.3, e: [0, 0, 0] };
      return { c: [0.06, 0.07, 0.06], h: 0.2, r: 0.7, e: [0, 0, 0] };
    }
    o.e = [0, 0, 0];
    return o;
  };
}

function floorTiles(base, dark, seed, grate) {
  var B = rgb(base), D = rgb(dark);
  return function (u, v) {
    var tu = (u * 4) % 1, tv = (v * 4) % 1, e = Math.min(tu, 1 - tu, tv, 1 - tv);
    var id = hash(Math.floor(u * 4), Math.floor(v * 4), seed), n = fbm(u * 8, v * 8, 4, seed);
    if (e < 0.03) return { c: [D[0] * 0.4, D[1] * 0.4, D[2] * 0.4], h: 0.05, r: 0.95 };
    if (grate && ((tu * 10) % 1 < 0.3 || (tv * 10) % 1 < 0.3) && e > 0.08) return { c: [D[0] * 0.3, D[1] * 0.3, D[2] * 0.3], h: 0.1, r: 0.6 };
    var t = clamp01(id * 0.5 + n * 0.6), s = 0.7 + n * 0.4;
    return { c: [mix(D[0], B[0], t) * s, mix(D[1], B[1], t) * s, mix(D[2], B[2], t) * s], h: 0.5 + n * 0.3, r: grate ? 0.5 : 0.8 };
  };
}

function lavaFloor(seed) {
  var h = hellrock(seed, true);
  return function (u, v) {
    var o = h(u, v), pool = fbm(u * 3, v * 3, 3, seed + 20) > 0.66;
    if (pool) {
      var n = fbm(u * 10, v * 10, 3, seed + 21);
      return { c: [1, 0.1 + n * 0.18, 0.16], h: 0, r: 0.25, e: [1.3, 0.08 + n * 0.16, 0.18] };
    }
    return o;
  };
}

function ceilingPanels(seed) {
  return floorTiles(0x2a2622, 0x121010, seed, false);
}

// cache: textures are built once per page
var cache = {};
function once(key, fn, opts) { return cache[key] || (cache[key] = bake(fn, opts)); }

// wall ids from world.js; 11 (secret) copies its host wall per level
export function wallSet(id) {
  switch (id) {
    case 1: return once('brick', brick(0x7e4632, 0x3e2016, 0x3a3026, 1), { bump: 4 });   // mudflood brick
    case 2: return once('stone', stone(0xbcae92, 0x6e6452, 2), { bump: 4 });   // Tartarian limestone
    case 3: return once('metal', metal(0x9a7a46, 0x3a2a16, 3), { bump: 3 });   // aged brass
    case 4: return once('tech', tech(4), { emissive: true, bump: 3 });
    case 5: return once('hell', hellrock(5), { emissive: true, bump: 5 });
    case 6: return once('door', door(null), { emissive: true, bump: 3 });
    case 7: return once('doorRed', door('red'), { emissive: true, bump: 3 });
    case 8: return once('doorBlue', door('blue'), { emissive: true, bump: 3 });
    case 9: return once('switchOff', switchPanel(false), { emissive: true, bump: 3 });
    case 10: return once('switchOn', switchPanel(true), { emissive: true, bump: 3 });
  }
  return wallSet(1);
}

// A see-through hairline crack that reads on any wall: a dark core with a
// pale rim, laid over the host wall's own material.
var crackMat = null;
export function crackOverlay() {
  if (crackMat) return crackMat;
  var M = 128, data = new Uint8ClampedArray(M * M * 4), x = 44;
  function px(cx, cy, r, g, b, a) { if (cx < 0 || cy < 0 || cx >= M || cy >= M) return; var k = (cy * M + cx) * 4; data[k] = r; data[k + 1] = g; data[k + 2] = b; data[k + 3] = Math.max(data[k + 3], a); }
  for (var y = 10; y < 118; y++) {
    x += (y % 7 === 0) ? 1 : (y % 9 === 0) ? -1 : 0;
    px(x - 1, y, 200, 190, 170, 150); px(x + 2, y, 200, 190, 170, 150);   // pale rim
    px(x, y, 12, 10, 8, 255); px(x + 1, y, 12, 10, 8, 255);              // dark core
  }
  for (var k2 = 0; k2 < 16; k2++) { px(x + 3 + k2, 60 + k2, 12, 10, 8, 255); px(x + 3 + k2, 59 + k2, 200, 190, 170, 140); }
  var t;
  if (typeof document !== 'undefined') {
    var cv = document.createElement('canvas'); cv.width = cv.height = M;
    cv.getContext('2d').putImageData(new ImageData(data, M, M), 0, 0);
    t = new THREE.CanvasTexture(cv);
  } else t = new THREE.DataTexture(data, M, M);
  t.colorSpace = THREE.SRGBColorSpace; t.magFilter = THREE.NearestFilter; t.needsUpdate = true;
  crackMat = new THREE.MeshStandardMaterial({ map: t, transparent: true, alphaTest: 0.3, depthWrite: false, roughness: 1, polygonOffset: true, polygonOffsetFactor: -1 });
  return crackMat;
}

export function floorSet(name) {
  switch (name) {
    case 'tech': return once('fTech', floorTiles(0x6a5638, 0x241c12, 11, true), { bump: 3 });
    case 'hell': return once('fHell', lavaFloor(12), { emissive: true, bump: 4 });
    case 'mercury': return once('fMercury', mercury(16), { emissive: true, bump: 1 });
    case 'ceilTech': return once('cTech', floorTiles(0x4a3e2c, 0x18140e, 13, true), { bump: 2 });
    case 'ceilHell': return once('cHell', hellrock(14, true), { emissive: true, bump: 4 });
    case 'ceilDark': return once('cDark', ceilingPanels(15), { bump: 2 });
    default: return once('fSlab', floorTiles(0x8e846e, 0x3c362a, 10, false), { bump: 3 });   // limestone paving
  }
}

export function makeMaterial(set, extra) {
  var m = new THREE.MeshStandardMaterial(Object.assign({
    map: set.map, normalMap: set.normalMap, roughnessMap: set.roughnessMap, roughness: 1, metalness: 0.05
  }, extra || {}));
  if (set.emissiveMap) { m.emissiveMap = set.emissiveMap; m.emissive = new THREE.Color(0xffffff); m.emissiveIntensity = 1.6; }
  return m;
}
