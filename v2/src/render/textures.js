// Procedural surface textures: every wall, floor and door is painted in code
// at 256x256, with a height field turned into a normal map so light catches
// the mortar, rivets and cracks. No image files.
import * as THREE from 'three';

var N = 256;

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
    if (e < 0.035) return { c: [D[0] * 0.5, D[1] * 0.5, D[2] * 0.5], h: 0.1, r: 0.95 };
    var t = clamp01(n * 0.8 + bid * 0.4), s = 0.75 + n * 0.4;
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
  var m = metal(0x4c5260, 0x1e2128, seed);
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

function hellrock(seed) {
  return function (u, v) {
    var n = fbm(u * 5, v * 5, 5, seed), ridge = 1 - Math.abs(fbm(u * 4, v * 4, 4, seed + 9) - 0.5) * 2;
    var lava = ridge > 0.9 ? clamp01((ridge - 0.9) * 10) : 0;
    var s = 0.35 + n * 0.5;
    var c = [0.32 * s + lava * 0.9, 0.12 * s + lava * 0.35, 0.08 * s];
    return { c: c, h: n - lava * 0.4, r: 0.9 - lava * 0.5, e: [lava * 1.0, lava * 0.35, lava * 0.05] };
  };
}

function door(stripe) {
  var m = metal(0x6a6f78, 0x2c2e34, 31);
  var S = stripe === 'red' ? [0.9, 0.12, 0.08] : stripe === 'blue' ? [0.15, 0.35, 1.0] : null;
  return function (u, v, x, y) {
    var o = m(u, v, x, y);
    var hazard = v > 0.88 && ((Math.floor(u * 16 + v * 16) % 2) === 0);
    if (v > 0.88) return { c: hazard ? [0.85, 0.65, 0.1] : [0.08, 0.08, 0.08], h: 0.6, r: 0.6, e: [0, 0, 0] };
    if (Math.abs(u - 0.5) < 0.012) return { c: [0.05, 0.05, 0.05], h: 0, r: 0.8, e: [0, 0, 0] }; // centre seam
    if (S && Math.abs(v - 0.45) < 0.05) return { c: S, h: 0.7, r: 0.3, e: [S[0] * 0.8, S[1] * 0.8, S[2] * 0.8] };
    o.e = [0, 0, 0];
    return o;
  };
}

function switchPanel(on) {
  var m = metal(0x5a5f68, 0x26282e, 41);
  return function (u, v, x, y) {
    var o = m(u, v, x, y);
    var inBox = Math.abs(u - 0.5) < 0.18 && Math.abs(v - 0.5) < 0.26;
    if (inBox) {
      var lever = Math.abs(u - 0.5) < 0.04 && (on ? v > 0.5 && v < 0.72 : v > 0.28 && v < 0.5);
      var lamp = Math.abs(u - 0.5) < 0.08 && Math.abs(v - (on ? 0.3 : 0.7)) < 0.04;
      var L = on ? [0.2, 1, 0.3] : [1, 0.15, 0.1];
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
  var h = hellrock(seed);
  return function (u, v) {
    var o = h(u, v), pool = fbm(u * 3, v * 3, 3, seed + 20) > 0.66;
    if (pool) {
      var n = fbm(u * 10, v * 10, 3, seed + 21);
      return { c: [1, 0.45 + n * 0.3, 0.08], h: 0, r: 0.4, e: [1.2, 0.45 + n * 0.3, 0.05] };
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
    case 1: return once('brick', brick(0x8a4232, 0x4a1e14, 0x2a1d18, 1), { bump: 4 });
    case 2: return once('stone', stone(0x8a8578, 0x4a463c, 2), { bump: 4 });
    case 3: return once('metal', metal(0x5a5f68, 0x26282e, 3), { bump: 3 });
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

// a secret wall: its host plus a hairline crack, dark on light walls, pale on dark
export function secretSet(hostId) {
  var key = 'secret' + hostId;
  if (cache[key]) return cache[key];
  var host = { 1: brick(0x8a4232, 0x4a1e14, 0x2a1d18, 1), 2: stone(0x8a8578, 0x4a463c, 2), 3: metal(0x5a5f68, 0x26282e, 3), 4: tech(4), 5: hellrock(5) }[hostId] || brick(0x8a4232, 0x4a1e14, 0x2a1d18, 1);
  var dark = hostId === 5 || hostId === 3;
  var crack = new Uint8Array(N * N), x = 88;
  for (var y = 24; y < 232; y++) {
    x += (y % 13 === 0) ? 2 : (y % 17 === 0) ? -2 : 0;
    for (var w = 0; w < 5; w++) crack[y * N + x + w] = 1;
  }
  for (var k = 0; k < 28; k++) for (var w2 = 0; w2 < 4; w2++) crack[(120 + k) * N + x + 6 + k + w2] = 1;
  return (cache[key] = bake(function (u, v, px, py) {
    var o = host(u, v, px, py);
    if (crack[py * N + px]) {
      o.c = dark ? [o.c[0] * 0.4 + 0.45, o.c[1] * 0.4 + 0.4, o.c[2] * 0.4 + 0.35] : [o.c[0] * 0.3, o.c[1] * 0.3, o.c[2] * 0.3];
      o.h = 0; o.r = 0.95;
    }
    return o;
  }, { emissive: hostId === 4 || hostId === 5, bump: 4 }));
}

export function floorSet(name) {
  switch (name) {
    case 'tech': return once('fTech', floorTiles(0x4a4e56, 0x1c1e22, 11, true), { bump: 3 });
    case 'hell': return once('fHell', lavaFloor(12), { emissive: true, bump: 4 });
    case 'ceilTech': return once('cTech', floorTiles(0x3a3e46, 0x14161a, 13, true), { bump: 2 });
    case 'ceilHell': return once('cHell', hellrock(14), { emissive: true, bump: 4 });
    case 'ceilDark': return once('cDark', ceilingPanels(15), { bump: 2 });
    default: return once('fSlab', floorTiles(0x6a645a, 0x2e2a24, 10, false), { bump: 3 });
  }
}

export function makeMaterial(set, extra) {
  var m = new THREE.MeshStandardMaterial(Object.assign({
    map: set.map, normalMap: set.normalMap, roughnessMap: set.roughnessMap, roughness: 1, metalness: 0.05
  }, extra || {}));
  if (set.emissiveMap) { m.emissiveMap = set.emissiveMap; m.emissive = new THREE.Color(0xffffff); m.emissiveIntensity = 1.6; }
  return m;
}
