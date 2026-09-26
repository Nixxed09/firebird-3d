// Builds the level's 3D surfaces from the simulation's grid: floors and
// ceilings at each cell's height, walls, step and ledge faces, and the moving
// parts (doors that rise, secret walls, lifts, the exit switch).
import * as THREE from 'three';
import { DOOR_IDS, floorAt, ceilAt, cellAt } from '../sim/world.js';
import { wallSet, floorSet, makeMaterial, crackOverlay } from './textures.js';

// collects quads per material, then makes one mesh per material
function Batch() { this.groups = {}; }
Batch.prototype.quad = function (key, a, b, c, d, n, uvs) {
  var g = this.groups[key] || (this.groups[key] = { pos: [], nor: [], uv: [] });
  [a, b, c, a, c, d].forEach(function (p) { g.pos.push(p[0], p[1], p[2]); g.nor.push(n[0], n[1], n[2]); });
  [uvs[0], uvs[1], uvs[2], uvs[0], uvs[2], uvs[3]].forEach(function (t) { g.uv.push(t[0], t[1]); });
};
Batch.prototype.meshes = function (materialFor) {
  var out = [];
  for (var k in this.groups) {
    var g = this.groups[k], geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(g.pos, 3));
    geo.setAttribute('normal', new THREE.Float32BufferAttribute(g.nor, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(g.uv, 2));
    var mesh = new THREE.Mesh(geo, materialFor(k));
    mesh.name = k;
    out.push(mesh);
  }
  return out;
};

// one vertical wall face on the edge of cell (x, z) toward direction dir, from y0 to y1
function wallFace(batch, key, x, z, dir, y0, y1) {
  if (y1 - y0 < 1e-3) return;
  var a, b, n, u0, u1;
  if (dir === 'E') { a = [x + 1, z + 1]; b = [x + 1, z]; n = [-1, 0, 0]; u0 = z + 1; u1 = z; }
  else if (dir === 'W') { a = [x, z]; b = [x, z + 1]; n = [1, 0, 0]; u0 = z; u1 = z + 1; }
  else if (dir === 'S') { a = [x, z + 1]; b = [x + 1, z + 1]; n = [0, 0, -1]; u0 = x; u1 = x + 1; }
  else { a = [x + 1, z]; b = [x, z]; n = [0, 0, 1]; u0 = x + 1; u1 = x; }
  batch.quad(key,
    [a[0], y0, a[1]], [b[0], y0, b[1]], [b[0], y1, b[1]], [a[0], y1, a[1]], n,
    [[u0, y0], [u1, y0], [u1, y1], [u0, y1]]);
}

var DIRS = { E: [1, 0], W: [-1, 0], S: [0, 1], N: [0, -1] };

// an axis-aligned box's visible faces, into a batch
function boxInto(batch, key, x0, y0, z0, x1, y1, z1) {
  batch.quad(key, [x0, y1, z0], [x0, y1, z1], [x1, y1, z1], [x1, y1, z0], [0, 1, 0], [[x0, z0], [x0, z1], [x1, z1], [x1, z0]]);
  batch.quad(key, [x0, y0, z1], [x0, y0, z0], [x1, y0, z0], [x1, y0, z1], [0, -1, 0], [[x0, z1], [x0, z0], [x1, z0], [x1, z1]]);
  batch.quad(key, [x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1], [0, 0, 1], [[x0, y0], [x1, y0], [x1, y1], [x0, y1]]);
  batch.quad(key, [x1, y0, z0], [x0, y0, z0], [x0, y1, z0], [x1, y1, z0], [0, 0, -1], [[x1, y0], [x0, y0], [x0, y1], [x1, y1]]);
  batch.quad(key, [x1, y0, z1], [x1, y0, z0], [x1, y1, z0], [x1, y1, z1], [1, 0, 0], [[z1, y0], [z0, y0], [z0, y1], [z1, y1]]);
  batch.quad(key, [x0, y0, z0], [x0, y0, z1], [x0, y1, z1], [x0, y1, z0], [-1, 0, 0], [[z0, y0], [z1, y0], [z1, y1], [z0, y1]]);
}

// a strip along the foot of a wall (baseboard) or under a ledge lip
function strip(batch, key, x, z, dir, y, h, d) {
  if (dir === 'E') boxInto(batch, key, x + 1 - d, y, z, x + 1, y + h, z + 1);
  else if (dir === 'W') boxInto(batch, key, x, y, z, x + d, y + h, z + 1);
  else if (dir === 'S') boxInto(batch, key, x, y, z + 1 - d, x + 1, y + h, z + 1);
  else boxInto(batch, key, x, y, z, x + 1, y + h, z + d);
}

// the most common wall in the level, used for step and ledge faces
function mainWall(W) {
  var count = {};
  for (var i = 0; i < W.cells.length; i++) { var c = W.cells[i]; if (c >= 1 && c <= 5) count[c] = (count[c] || 0) + 1; }
  var best = 1, n = -1;
  for (var k in count) if (count[k] > n) { n = count[k]; best = +k; }
  return best;
}

function hostWall(W, x, z) {
  var host = mainWall(W);
  [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(function (o) {
    var c = cellAt(W, x + o[0], z + o[1]);
    if (c >= 1 && c <= 5) host = c;
  });
  return host;
}

export function buildLevel(G, assets) {
  // an authored surface set when there is one, else the built-in painted one
  function wallTex(id) { return (assets && assets.texture('tex:' + id)) || wallSet(id); }
  function floorTex(name) { return (assets && assets.texture('tex:' + name)) || floorSet(name); }
  var W = G.W, L = G.L, batch = new Batch(), group = new THREE.Group();
  var trim = 'wall' + mainWall(W);
  var lifts = {}; W.lifts.forEach(function (lf) { lifts[lf.x + ',' + lf.z] = lf; });
  var switches = [];

  function open(x, z) { var c = cellAt(W, x, z); return c === 0 || !!DOOR_IDS[c]; }
  function base(x, z) { var lf = lifts[x + ',' + z]; return lf ? lf.bottom : floorAt(W, x, z); }

  for (var z = 0; z < W.mh; z++) {
    for (var x = 0; x < W.mw; x++) {
      if (!open(x, z)) continue;
      var f = base(x, z), c = ceilAt(W, x, z);
      if (!lifts[x + ',' + z]) {
        batch.quad('floor', [x, f, z], [x, f, z + 1], [x + 1, f, z + 1], [x + 1, f, z], [0, 1, 0],
          [[x, z], [x, z + 1], [x + 1, z + 1], [x + 1, z]]);
      }
      batch.quad('ceil', [x, c, z], [x + 1, c, z], [x + 1, c, z + 1], [x, c, z + 1], [0, -1, 0],
        [[x, z], [x + 1, z], [x + 1, z + 1], [x, z + 1]]);
      for (var d in DIRS) {
        var nx = x + DIRS[d][0], nz = z + DIRS[d][1], nc = cellAt(W, nx, nz);
        if (!open(nx, nz)) {
          if (nc === 9) { var sw = { x: nx, z: nz, faces: new Batch(), dir: d }; wallFace(sw.faces, 'sw', x, z, d, f, c); switches.push(sw); }
          else wallFace(batch, 'wall' + (nc >= 1 && nc <= 5 ? nc : 1), x, z, d, f, c);
          if (!DOOR_IDS[cellAt(W, x, z)]) {
            strip(batch, 'trim', x, z, d, f, 0.09, 0.035);          // baseboard
            if (c - f > 2) strip(batch, 'trim', x, z, d, c - 0.12, 0.08, 0.05); // crown moulding in tall rooms
          }
          continue;
        }
        var nf = base(nx, nz), ncl = ceilAt(W, nx, nz);
        if (nf > f) {
          wallFace(batch, trim, x, z, d, f, Math.min(nf, c));   // a step or ledge face
          if (nf - f > 0.3) strip(batch, 'trim', x, z, d, nf - 0.07, 0.07, 0.06); // a lip on real ledges
        }
        if (ncl < c) wallFace(batch, trim, x, z, d, Math.max(ncl, f), c); // a lintel above an opening
      }
    }
  }

  // beams across tall ceilings every third row, so big rooms have a sense of scale
  for (var bz = 0; bz < W.mh; bz++) for (var bx = 0; bx < W.mw; bx++) {
    if (bz % 3 !== 1 || cellAt(W, bx, bz) !== 0) continue;
    var bc = ceilAt(W, bx, bz);
    if (bc - floorAt(W, bx, bz) < 2.6) continue;
    boxInto(batch, 'beam', bx, bc - 0.2, bz + 0.38, bx + 1, bc, bz + 0.62);
  }

  var mats = {};
  function mat(key) {
    if (mats[key]) return mats[key];
    if (key === 'floor') return (mats[key] = makeMaterial(floorTex(L.floor)));
    if (key === 'ceil') return (mats[key] = makeMaterial(floorTex(L.ceil)));
    if (key === 'trim') return (mats[key] = makeMaterial(wallTex(3), { color: 0x9a8a78, metalness: 0.6, roughness: 0.5 }));
    if (key === 'beam') return (mats[key] = makeMaterial(wallTex(3), { color: 0x6a5a4a, metalness: 0.4 }));
    return (mats[key] = makeMaterial(wallTex(+key.slice(4))));
  }
  batch.meshes(mat).forEach(function (m) { m.receiveShadow = true; group.add(m); });

  // exit switches: their own meshes so the texture can flip when pressed
  var switchOff = makeMaterial(wallTex(9)), switchOn = makeMaterial(wallTex(10));
  switches.forEach(function (sw) {
    sw.faces.meshes(function () { return switchOff; }).forEach(function (m) { sw.mesh = m; group.add(m); });
  });

  // doors rise into the ceiling; secret walls are full blocks that rise
  var doors = [];
  for (var dk in W.doors) {
    var dr = W.doors[dk], df = floorAt(W, dr.x, dr.z), dc = ceilAt(W, dr.x, dr.z), h = dc - df, mesh;
    if (dr.secret) {
      // the very same material as the wall it hides in, plus a see-through crack on each face
      mesh = new THREE.Mesh(new THREE.BoxGeometry(1, h, 1), mat('wall' + hostWall(W, dr.x, dr.z)));
      setBoxUV(mesh.geometry, 1, h);
      var crack = crackOverlay();
      [[0, 0.502, 0], [Math.PI, -0.502, 0], [Math.PI / 2, 0, 0.502], [-Math.PI / 2, 0, -0.502]].forEach(function (f) {
        var q = new THREE.Mesh(new THREE.PlaneGeometry(0.9, Math.min(h, 1.9) * 0.9), crack);
        q.rotation.y = f[0]; q.position.set(f[2], 0, f[1]);
        mesh.add(q);
      });
    } else {
      var alongX = open(dr.x - 1, dr.z) && open(dr.x + 1, dr.z);
      var geo = alongX ? new THREE.BoxGeometry(0.22, h, 1) : new THREE.BoxGeometry(1, h, 0.22);
      mesh = new THREE.Mesh(geo, makeMaterial(wallTex(dr.locked === 'red' ? 7 : dr.locked === 'blue' ? 8 : 6)));
      setBoxUV(mesh.geometry, 1, h);
    }
    mesh.position.set(dr.x + 0.5, df + h / 2, dr.z + 0.5);
    mesh.userData = { door: dr, baseY: df + h / 2, h: h };
    mesh.castShadow = true;
    group.add(mesh);
    doors.push(mesh);
  }

  // lifts: a glowing-edged platform block
  var liftMeshes = W.lifts.map(function (lf) {
    var h = Math.max(0.2, lf.top - lf.bottom + 0.2);
    var m = new THREE.Mesh(new THREE.BoxGeometry(0.98, h, 0.98), makeMaterial(wallTex(4)));
    setBoxUV(m.geometry, 1, h);
    m.userData = { lift: lf, h: h };
    group.add(m);
    return m;
  });

  return {
    group: group,
    update: function () {
      doors.forEach(function (m) {
        var d = m.userData.door;
        m.position.y = m.userData.baseY + d.open * m.userData.h * 0.98;
        m.visible = d.open < 0.99;
      });
      liftMeshes.forEach(function (m) { var lf = m.userData.lift; m.position.set(lf.x + 0.5, lf.pos - m.userData.h / 2, lf.z + 0.5); });
      switches.forEach(function (sw) { if (sw.mesh) sw.mesh.material = W.cells[sw.z * W.mw + sw.x] === 10 ? switchOn : switchOff; });
    }
  };
}

// world-scale UVs on a box so its texture matches the walls around it
function setBoxUV(geo, w, h) {
  var uv = geo.attributes.uv;
  for (var i = 0; i < uv.count; i++) {
    var face = Math.floor(i / 4);
    var su = face < 4 ? w : w, sv = face === 2 || face === 3 ? w : h;
    uv.setXY(i, uv.getX(i) * su, uv.getY(i) * sv);
  }
  uv.needsUpdate = true;
}
