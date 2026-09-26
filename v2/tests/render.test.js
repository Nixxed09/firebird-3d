import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { buildWorld } from '../src/sim/world.js';
import { buildLevel } from '../src/render/level.js';

test('all four room walls face inward and close the room from floor to ceiling', () => {
  const L = { floor: 'slab', ceil: 'ceilDark', map: ['###', '#p#', '###'] };
  const W = buildWorld(L);
  const texture = { map: null, normalMap: null, roughnessMap: null };
  const room = buildLevel({ W, L }, { texture: () => texture });
  room.group.updateMatrixWorld(true);
  for (const y of [0.15, 0.8, 1.85]) {
    for (const dir of [[1, 0, 0], [-1, 0, 0], [0, 0, 1], [0, 0, -1]]) {
      const ray = new THREE.Raycaster(new THREE.Vector3(1.5, y, 1.5), new THREE.Vector3(...dir), 0, 2);
      const hit = ray.intersectObject(room.group, true)[0];
      assert.ok(hit && hit.object.name === 'wall1', `visible wall at y=${y}, direction ${dir}`);
      assert.ok(Math.abs(hit.distance - 0.5) < 0.001, 'wall sits at the cell edge');
    }
  }
});
