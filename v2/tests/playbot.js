// A persona-driven player for FIREBIRD 3D v2, for headless playtests.
//
// Port of the classic bot (../../tests/playbot.js) to the 3D simulation. It
// decides the way Riley does: list the actions legal right now, score them
// from the persona's traits, do the best one. It plays only through a
// player's inputs: WASD, Shift, Space (jump), E, fire, weapon keys, and aim
// by turning yaw and pitch at a limited speed with some error.
//
// What it knows: the level layout and the physics' own movement rules
// (game.walkGraph(): walk / step / jump / drop, plus lifts). It sees demons
// only in 3D line of sight from its eyes, and it only goes after a secret wall
// once it has looked at that wall up close.
//
// First-timer mode (opts.firstTimer): the bot knows only what the game has
// marked as seen (G.seen, the automap's knowledge: line of sight within 12
// cells). It plans only through seen cells, goes for pickups, the exit and the
// boss only once seen, and otherwise explores: it scores the edge of what it
// knows by distance, how much is unseen there, doors, torch-flanked doors (the
// levels' cue language), torches, and the direction of the in-game goal
// marker (game.goalTarget(), which itself only points at things seen). The cue
// behind each exploration step is logged, so the playtest shows which cues
// actually lead players.
import { hasLOS, cellAt, floorAt } from '../src/sim/world.js';

var DOOR = { 6: true, 7: true, 8: true, 11: true };
var EXIT_SWITCH = 9;
var HEALS = { h: 10, '+': 25, P: 100 };
var NB = [[1, 0], [-1, 0], [0, 1], [0, -1]];

function n01(v) { return Math.max(0, Math.min(1, (v + 1) / 2)); } // -1..1 -> 0..1
function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
function angDiff(a, b) { return Math.atan2(Math.sin(a - b), Math.cos(a - b)); }

// How a personality plays a shooter. Every number is a design guess, written
// down so it can be argued with. Same mapping as the classic bot.
export function personaToStyle(persona) {
  var t = persona.traits || {}, b = persona.behaviors || {};
  var ext = n01(t.extraversion || 0), neu = n01(t.neuroticism || 0), con = n01(t.conscientiousness || 0);
  var opn = n01(t.openness || 0), agr = n01(t.agreeableness || 0), risk = b.risk_tolerance == null ? 0.5 : b.risk_tolerance;
  var speed = { fast: 0.16, medium: 0.28, slow: 0.42 }[b.response_speed] || 0.28;
  return {
    aggression: clamp(0.25 + 0.45 * ext + 0.3 * risk, 0, 1),
    retreatHp: Math.round(20 + 30 * neu + 25 * (1 - risk)),
    completionism: con,
    curiosity: opn,
    patience: agr,
    reaction: speed,
    aimError: 0.02 + speed * 0.12 + neu * 0.03,
    turnRate: 7 - speed * 8,
    dodge: clamp(0.25 + 0.5 * con + 0.3 * (1 - neu) - speed * 0.6, 0.05, 0.95),
    strafeHabit: t.autonomy_drive == null ? 0 : (t.autonomy_drive > 0.5 ? 1 : -1) * 0.25
  };
}

export function PlayBot(game, persona, rng, opts) {
  this.firstTimer = !!(opts && opts.firstTimer);
  this.game = game;
  this.persona = persona;
  this.style = personaToStyle(persona);
  this.rng = rng;
  this.spotted = {};
  this.log = { decisions: {}, secretsTried: 0, secretsSpotted: 0, abandonedFights: 0, jumps: 0, explored: 0, cues: {} };
  this.reset();
}

PlayBot.prototype.reset = function () {
  this.known = new Map();
  this.firstSeen = new Map();
  this.plan = null;
  this.decideT = 0;
  this.stuckT = 0; this.lastX = 0; this.lastZ = 0; this.unstickT = 0; this.unstickDir = 1; this.stuckCount = 0;
  this.strafeDir = this.rng() < 0.5 + this.style.strafeHabit ? -1 : 1; this.strafeT = 0;
  this.dodgeT = 0; this.dodgeDir = 1;
  this.useCool = 0; this.pressUse = false; this.pressJump = false;
  this.banned = {};
  this.tried = {};
  this.fightProgress = null;
  this.frontierCache = null; // its time stamp would outlive the clock reset below
  this.metBoss = false;
  this.now = 0;
};

PlayBot.prototype.G = function () { return this.game.state(); };

// ---- the map, as the player can know it -------------------------------------

PlayBot.prototype.cell = function (x, z) {
  var G = this.G();
  if (x < 0 || z < 0 || x >= G.mw || z >= G.mh) return 1;
  return cellAt(G.W, x, z);
};

// can the player pass through this cell at all (doors: only if it can open them)?
// what the player knows: seen cells, and the one it stands on
PlayBot.prototype.knows = function (x, z) {
  var G = this.G();
  return !!G.seen[z * G.mw + x] || (x === Math.floor(G.p.x) && z === Math.floor(G.p.z));
};

PlayBot.prototype.passable = function (x, z) {
  if (this.firstTimer && !this.knows(x, z)) return false;
  var G = this.G(), c = this.cell(x, z);
  if (c === 0) return true;
  if (!DOOR[c]) return false;
  var d = G.doors[x + ',' + z];
  if (d.open >= 0.9) return true;
  if (d.secret) return d.found;
  if (d.locked) return !!G.p.keys[d.locked];
  return true;
};

PlayBot.prototype.liftAt = function (x, z) {
  var lifts = this.G().W.lifts || [];
  for (var i = 0; i < lifts.length; i++) if (lifts[i].x === x && lifts[i].z === z) return lifts[i];
  return null;
};

// Neighbours by the physics' rules, plus lifts: from a lift cell you can
// reach anything at its top once it has carried you up.
PlayBot.prototype.edges = function (x, z) {
  var self = this, graph = this.graph, out = [];
  graph.neighbours(x, z).forEach(function (n) { if (self.passable(n.cx, n.cz)) out.push(n); });
  var lf = this.liftAt(x, z);
  if (lf) {
    NB.forEach(function (o) {
      var nx = x + o[0], nz = z + o[1];
      if (!self.passable(nx, nz) || out.some(function (e) { return e.cx === nx && e.cz === nz; })) return;
      if (Math.abs(floorAt(self.G().W, nx, nz) - lf.top) < 0.3) out.push({ cx: nx, cz: nz, cost: 3, kind: 'lift' });
    });
  }
  // stepping onto a lift that is up above you: it comes down when stood on
  NB.forEach(function (o) {
    var nx = x + o[0], nz = z + o[1], l2 = self.liftAt(nx, nz);
    if (l2 && !out.some(function (e) { return e.cx === nx && e.cz === nz; })) out.push({ cx: nx, cz: nz, cost: 2, kind: 'onto-lift' });
  });
  return out;
};

// Cheapest path (jumps and lifts cost more) to the nearest cell where goal() is true.
PlayBot.prototype.pathTo = function (goal) {
  var G = this.G(), mw = G.mw;
  this.graph = this.game.walkGraph();
  var sx = Math.floor(G.p.x), sz = Math.floor(G.p.z), start = sz * mw + sx;
  var dist = new Map([[start, 0]]), prev = new Map([[start, null]]), kind = new Map([[start, 'walk']]);
  var open = [start];
  while (open.length) {
    var bi = 0;
    for (var i = 1; i < open.length; i++) if (dist.get(open[i]) < dist.get(open[bi])) bi = i;
    var c = open.splice(bi, 1)[0], cx = c % mw, cz = (c / mw) | 0;
    if (goal(cx, cz)) {
      var path = [];
      for (var k = c; k !== null; k = prev.get(k)) path.unshift({ x: k % mw, z: (k / mw) | 0, kind: kind.get(k) });
      return path;
    }
    var here = dist.get(c);
    this.edges(cx, cz).forEach(function (e) {
      var n = e.cz * mw + e.cx, nd = here + e.cost;
      if (dist.has(n) && dist.get(n) <= nd) return;
      if (!dist.has(n)) open.push(n);
      dist.set(n, nd); prev.set(n, c); kind.set(n, e.kind);
    });
  }
  return null;
};

PlayBot.prototype.eye = function () { var p = this.G().p; return { x: p.x, y: p.y + p.eyeH, z: p.z }; };

PlayBot.prototype.sees = function (x, y, z) {
  var e = this.eye();
  return hasLOS(this.G().W, e.x, e.y, e.z, x, y, z);
};

// ---- perception ------------------------------------------------------------

PlayBot.prototype.perceive = function () {
  var G = this.G(), p = G.p, threats = [];
  for (var i = 0; i < G.ents.length; i++) {
    var e = G.ents[i];
    if (!e.mob || e.barrel || e.state === 'die' || e.state === 'dead' || e.gone) continue;
    var dx = e.x - p.x, dz = e.z - p.z, d = Math.sqrt(dx * dx + dz * dz);
    if (d > 30) continue;
    var inView = Math.abs(angDiff(Math.atan2(dz, dx), p.ang)) < 0.75 || d < 4 || (e.state !== 'idle' && d < 12);
    if (inView && this.sees(e.x, e.y + e.h * 0.6, e.z)) {
      if (!this.known.has(e)) this.firstSeen.set(e, this.now);
      this.known.set(e, this.now);
    }
    if (this.known.has(e) && this.now - this.known.get(e) < 4) threats.push({ e: e, d: d, visible: this.known.get(e) === this.now });
  }
  // a secret wall becomes a goal only once it has been in view up close
  for (var k in G.doors) {
    var dr = G.doors[k];
    if (!dr.secret || dr.found || this.spotted[k]) continue;
    var cx = dr.x + 0.5, cz = dr.z + 0.5, ddx = cx - p.x, ddz = cz - p.z, dd = Math.sqrt(ddx * ddx + ddz * ddz);
    if (dd > 8 || Math.abs(angDiff(Math.atan2(ddz, ddx), p.ang)) > 0.6) continue;
    if (this.sees(cx - ddx / dd * 0.55, p.y + p.eyeH, cz - ddz / dd * 0.55)) { this.spotted[k] = true; this.log.secretsSpotted++; }
  }
  return threats;
};

// ---- decide: list legal actions, score them, pick one ----------------------

PlayBot.prototype.options = function (threats) {
  var G = this.G(), p = G.p, st = this.style, self = this, opts = [];
  var hurt = p.hp < st.retreatHp;
  var dry = p.ammo.bullets < 15 && (!p.weapons.shotgun || p.ammo.shells < 3);

  threats.forEach(function (t) {
    if (!t.visible && self.now - self.known.get(t.e) > 2) return;
    if (t.e.target && st.patience > 0.6 && !t.e.target.barrel) return; // let demons fight each other
    if (self.banned['fight:' + t.e.botId] > self.now) return;
    var sc = 1.2 + st.aggression * 0.8 - t.d * 0.04 + (t.e.kind === 'riley' ? 0.6 : 0) + (t.e.state !== 'idle' ? 0.4 : 0);
    if (hurt && t.e.kind !== 'riley') sc -= 0.6;
    if (dry && t.d > 3) sc -= 1.2;
    opts.push({ kind: 'fight', target: t.e, score: sc, key: 'fight' });
  });

  G.ents.forEach(function (e) {
    if (e.kind !== 'pickup' || e.gone) return;
    if (self.firstTimer && !self.knows(Math.floor(e.x), Math.floor(e.z))) return;
    var it = e.item, sc = null, key = 'item:' + Math.floor(e.x) + ',' + Math.floor(e.z);
    if (HEALS[it]) { if (p.hp >= 100 && it !== 'P') return; sc = hurt ? 2.2 : 0.35 + st.completionism * 0.5 + (it === 'P' ? 0.8 : 0); }
    else if (it === 'r' || it === 'u') sc = 1.6;
    else if (it === '2') sc = dry ? 2.2 : 1.5;
    else if (it === 'A') sc = p.armor < 50 ? 0.9 : 0.2;
    else if (it === 'a') sc = dry ? 2.0 : p.ammo.shells < 12 && p.weapons.shotgun ? 1.0 : 0.3 + st.completionism * 0.3;
    else if (it === 'b') sc = dry ? 2.0 : p.ammo.bullets < 30 ? 0.9 : 0.25 + st.completionism * 0.3;
    if (sc === null) return;
    var d = Math.hypot(e.x - p.x, e.z - p.z);
    opts.push({ kind: 'item', target: e, score: sc - d * 0.04, key: key, gx: Math.floor(e.x), gz: Math.floor(e.z) });
  });

  G.secrets.forEach(function (sec) {
    if (sec.found || (self.firstTimer && !self.knows(sec.x, sec.z))) return;
    opts.push({ kind: 'item', target: { x: sec.x + 0.5, z: sec.z + 0.5 }, score: 0.5 + st.curiosity * 0.6, key: 'area:' + sec.x + ',' + sec.z, gx: sec.x, gz: sec.z });
  });

  var bossAlive = G.boss && G.boss.state !== 'dead' && G.boss.state !== 'die';
  if (bossAlive && this.firstTimer && this.knows(Math.floor(G.boss.x), Math.floor(G.boss.z))) this.metBoss = true;
  if (bossAlive) {
    if (!this.firstTimer || this.metBoss) opts.push({ kind: 'boss', target: G.boss, score: 0.8 + st.aggression * 0.3 - st.completionism * 0.3, key: 'boss' });
  } else if (G.exitCell && (!this.firstTimer || this.knows(G.exitCell.x, G.exitCell.z))) {
    opts.push({ kind: 'exit', score: 0.7 + (1 - st.completionism) * 0.5, key: 'exit' });
  }
  if (this.firstTimer) {
    var fr = this.frontier();
    if (fr) opts.push({ kind: 'explore', score: fr.score, key: 'explore:' + fr.x + ',' + fr.z, gx: fr.x, gz: fr.z, cue: fr.cue });
  }

  if (st.curiosity > 0.55) {
    for (var k in G.doors) {
      var dr = G.doors[k];
      if (!dr.secret || dr.found || !this.spotted[k] || this.tried[k]) continue;
      opts.push({ kind: 'secret', door: dr, score: 0.3 + st.curiosity * 0.5, key: 'secret:' + k });
    }
  }
  return opts.filter(function (o) { return !(self.banned[o.key] > self.now); });
};

PlayBot.prototype.decide = function (threats) {
  var opts = this.options(threats), best = null, self = this;
  opts.forEach(function (o) {
    o.score += (self.rng() - 0.5) * 0.1;
    if (!best || o.score > best.score) best = o;
  });
  if (this.plan && best && this.plan.key === best.key && this.plan.target === best.target) return;
  if (this.plan && best && this.plan.kind !== 'fight' && best.kind !== 'fight' && best.score < this.plan.score + 0.25 &&
      opts.some(function (o) { return o.key === self.plan.key; })) return;
  this.plan = best;
  if (best) this.log.decisions[best.kind] = (this.log.decisions[best.kind] || 0) + 1;
};

// ---- act -------------------------------------------------------------------

PlayBot.prototype.setMove = function (worldAng, run) {
  var p = this.G().p, keys = this.game.keys;
  keys.KeyW = keys.KeyS = keys.KeyA = keys.KeyD = false;
  keys.ShiftLeft = !!run;
  if (worldAng === null) return;
  var rel = angDiff(worldAng, p.ang), f = Math.cos(rel), s = Math.sin(rel);
  if (f > 0.38) keys.KeyW = true; else if (f < -0.38) keys.KeyS = true;
  if (s > 0.38) keys.KeyD = true; else if (s < -0.38) keys.KeyA = true;
};

// turn yaw (and pitch, when given) like a mouse; returns the remaining yaw error
PlayBot.prototype.turnToward = function (ang, dt, pitch) {
  var p = this.G().p, max = this.style.turnRate * dt;
  p.ang += clamp(angDiff(ang, p.ang), -max, max);
  var want = pitch === undefined ? 0 : pitch;
  p.pitch += clamp(want - p.pitch, -max, max);
  return Math.abs(angDiff(ang, p.ang));
};

PlayBot.prototype.use = function () {
  if (this.useCool > 0) return;
  this.pressUse = true;
  this.useCool = 0.35;
};

// walk a path; handles doors, jumps and lifts; returns the heading or null
PlayBot.prototype.follow = function (path, dt) {
  var G = this.G(), p = G.p;
  if (!path || path.length < 2) return null;
  var next = path[1], c = this.cell(next.x, next.z);
  var toNext = Math.atan2(next.z + 0.5 - p.z, next.x + 0.5 - p.x);
  var distNext = Math.hypot(next.x + 0.5 - p.x, next.z + 0.5 - p.z);
  if (DOOR[c]) {
    var d = G.doors[next.x + ',' + next.z];
    if (d.open < 0.9) {
      this.turnToward(toNext, dt);
      if (d.state === 'closed' || d.state === 'closing') this.use();
      return distNext > 1.0 ? toNext : null;
    }
  }
  if (next.kind === 'jump') {
    // run at the ledge and jump from close to its edge
    if (distNext < 1.05 && p.onGround && Math.abs(angDiff(toNext, p.ang)) < 0.4) { this.pressJump = true; this.log.jumps++; }
    this.turnToward(toNext, dt);
    return toNext;
  }
  if (next.kind === 'lift') {
    // ride: stand on the lift's centre until it reaches the top
    var lf = this.liftAt(path[0].x, path[0].z);
    if (lf && Math.abs(lf.pos - lf.top) > 0.05) {
      var toMid = Math.atan2(path[0].z + 0.5 - p.z, path[0].x + 0.5 - p.x);
      return Math.hypot(path[0].x + 0.5 - p.x, path[0].z + 0.5 - p.z) > 0.2 ? toMid : null;
    }
  }
  var target = next;
  for (var i = 2; i < Math.min(path.length, 5); i++) {
    var pi = path[i];
    if (pi.kind !== 'walk' || DOOR[this.cell(pi.x, pi.z)]) break;
    if (this.sees(pi.x + 0.5, floorAt(G.W, pi.x, pi.z) + 0.5, pi.z + 0.5) && this.groundHolds(p.x, p.z, pi.x + 0.5, pi.z + 0.5)) target = pi; else break;
  }
  return Math.atan2(target.z + 0.5 - p.z, target.x + 0.5 - p.x);
};

// A shortcut is only safe if the ground along it holds: every cell under the
// straight line (and a body's width either side) is passable and no lower than
// both ends. Without this, cutting a corner at the top of E1M2's open-sided
// stair walked the bot off the edge, and it fell and climbed again forever.
PlayBot.prototype.groundHolds = function (ax, az, bx, bz) {
  var W = this.G().W, lo = Math.min(floorAt(W, Math.floor(ax), Math.floor(az)), floorAt(W, Math.floor(bx), Math.floor(bz)));
  var d = Math.hypot(bx - ax, bz - az), n = Math.max(2, Math.ceil(d * 6)), nx = -(bz - az) / (d || 1), nz = (bx - ax) / (d || 1);
  for (var i = 0; i <= n; i++) {
    for (var side = -1; side <= 1; side++) {
      var x = ax + (bx - ax) * i / n + nx * side * 0.28, z = az + (bz - az) * i / n + nz * side * 0.28;
      var cx = Math.floor(x), cz = Math.floor(z);
      if (!this.passable(cx, cz) || floorAt(W, cx, cz) < lo - 0.05) return false;
    }
  }
  return true;
};

PlayBot.prototype.chooseWeapon = function (d) {
  var p = this.G().p, want = 'pistol';
  if (p.weapons.shotgun && p.ammo.shells > 0 && d < 7) want = 'shotgun';
  else if (p.ammo.bullets <= 0) want = p.weapons.shotgun && p.ammo.shells > 0 ? 'shotgun' : 'fist';
  if (p.weapon !== want && !p.nextWeapon) this.game.switchWeapon(want);
};

PlayBot.prototype.incoming = function () {
  var G = this.G(), p = G.p;
  for (var i = 0; i < G.ents.length; i++) {
    var e = G.ents[i];
    if (e.kind !== 'proj') continue;
    var dx = p.x - e.x, dz = p.z - e.z, d = Math.sqrt(dx * dx + dz * dz);
    if (d > 5) continue;
    var sp = Math.sqrt(e.vx * e.vx + e.vz * e.vz) || 1;
    if ((dx * e.vx + dz * e.vz) / (d * sp) > 0.93) return e;
  }
  return null;
};

PlayBot.prototype.fight = function (e, dt) {
  var G = this.G(), p = G.p, st = this.style;
  var dx = e.x - p.x, dz = e.z - p.z, d = Math.sqrt(dx * dx + dz * dz);
  if (this.known.get(e) !== this.now) {
    this.game.setFire(false);
    if (st.aggression < 0.45 && e.kind !== 'riley') return this.setMove(null);
    var path = this.pathTo(function (x, z) { return x === Math.floor(e.x) && z === Math.floor(e.z); });
    var h = this.follow(path, dt);
    if (h !== null) this.turnToward(h, dt);
    return this.setMove(h, true);
  }
  this.chooseWeapon(d);
  var wob = function (self) { return (self.rng() - 0.5) * 2 * st.aimError; };
  var eyeY = p.y + p.eyeH, aimY = e.y + e.h * 0.6;
  var pitch = Math.atan2(aimY - eyeY, Math.max(0.3, d)) + wob(this) * 0.5;
  var err = this.turnToward(Math.atan2(dz, dx) + wob(this), dt, pitch);
  var reacted = this.now - this.firstSeen.get(e) > st.reaction;
  this.game.setFire(reacted && err < Math.atan2(e.radius * 0.9, d) + 0.03);

  var want = p.weapon === 'fist' ? 0.9 : st.aggression > 0.6 ? 2.5 : st.aggression > 0.4 ? 4.5 : 6.5;
  var toward = Math.atan2(dz, dx), move;
  this.strafeT -= dt;
  if (this.strafeT <= 0) {
    this.strafeT = 0.5 + this.rng() * 1.2;
    if (this.rng() < 0.45 - st.strafeHabit) this.strafeDir = -this.strafeDir;
  }
  if (d > want + 1) move = toward + this.strafeDir * 0.5;
  else if (d < want - 1) move = toward + Math.PI - this.strafeDir * 0.5;
  else move = toward + this.strafeDir * Math.PI / 2;
  this.dodgeT -= dt;
  if (this.incoming() && this.dodgeT <= 0 && this.rng() < st.dodge * dt * 8) {
    this.dodgeT = 0.5;
    this.dodgeDir = this.rng() < 0.5 ? 1 : -1;
  }
  if (this.dodgeT > 0) move = toward + this.dodgeDir * Math.PI / 2;
  this.setMove(move, st.aggression > 0.5 || this.dodgeT > 0);
};

PlayBot.prototype.goTo = function (goal, dt, arrive) {
  var path = this.pathTo(goal);
  if (!path) { this.banned[this.plan.key] = this.now + 15; this.plan = null; return this.setMove(null); }
  if (path.length === 1 && arrive) return arrive();
  var h = this.follow(path, dt);
  if (h !== null) this.turnToward(h, dt);
  this.setMove(h, true);
};

PlayBot.prototype.step = function (dt) {
  var G = this.G(), p = G.p, keys = this.game.keys, self = this;
  this.now += dt;
  this.useCool -= dt;
  keys.KeyE = this.pressUse; this.pressUse = false;
  keys.Space = this.pressJump; this.pressJump = false;
  if (p.dead) { this.game.setFire(false); this.setMove(null); return; }

  var threats = this.perceive();
  this.decideT -= dt;
  if (this.decideT <= 0 || !this.plan) { this.decideT = 0.25; this.decide(threats); }
  var plan = this.plan;
  if (!plan) { this.game.setFire(false); return this.setMove(null); }
  if (plan.kind !== 'fight') { this.game.setFire(false); }

  var moved = Math.hypot(p.x - this.lastX, p.z - this.lastZ);
  this.lastX = p.x; this.lastZ = p.z;
  var trying = keys.KeyW || keys.KeyS || keys.KeyA || keys.KeyD;
  this.stuckT = trying && moved < 0.3 * dt ? this.stuckT + dt : Math.max(0, this.stuckT - dt);
  if (this.unstickT > 0) { this.unstickT -= dt; this.setMove(p.ang + this.unstickDir * 2.2, false); return; }
  if (this.stuckT > 0.8) {
    this.stuckT = 0; this.unstickT = 0.35; this.unstickDir = -this.unstickDir;
    if (++this.stuckCount % 6 === 0 && plan.kind !== 'fight') { this.banned[plan.key] = this.now + 20; this.plan = null; }
    return;
  }

  switch (plan.kind) {
    case 'fight': {
      var fp = this.fightProgress, tg = plan.target;
      if (!fp || fp.target !== tg || tg.hp < fp.hp) this.fightProgress = fp = { target: tg, hp: tg.hp, since: this.now };
      if (this.now - fp.since > 10) {
        tg.botId = tg.botId || (this.nextId = (this.nextId || 0) + 1);
        this.banned['fight:' + tg.botId] = this.now + 12;
        this.log.abandonedFights++;
        this.fightProgress = null; this.plan = null; this.game.setFire(false);
        return this.setMove(null);
      }
      return this.fight(tg, dt);
    }
    case 'boss': return this.goTo(function (x, z) {
      var b = plan.target;
      return Math.hypot(x + 0.5 - b.x, z + 0.5 - b.z) < 9 &&
        hasLOS(G.W, x + 0.5, floorAt(G.W, x, z) + p.eyeH, z + 0.5, b.x, b.y + b.h * 0.6, b.z);
    }, dt, function () { self.known.set(plan.target, self.now); self.firstSeen.set(plan.target, self.firstSeen.get(plan.target) || self.now); });
    case 'item': return this.goTo(function (x, z) { return x === plan.gx && z === plan.gz; }, dt, function () {
      var t = plan.target, a = Math.atan2(t.z - p.z, t.x - p.x);
      self.setMove(a, false);
      self.turnToward(a, dt);
    });
    case 'exit': return this.goTo(function (x, z) { return self.adjacentTo(x, z, EXIT_SWITCH); }, dt, function () {
      var sw = self.adjacentTo(Math.floor(p.x), Math.floor(p.z), EXIT_SWITCH);
      var a = Math.atan2(sw.z + 0.5 - p.z, sw.x + 0.5 - p.x);
      var err = self.turnToward(a, dt);
      self.setMove(err < 0.3 ? a : null, false);
      if (err < 0.2) self.use();
    });
    case 'explore': return this.goTo(function (x, z) { return x === plan.gx && z === plan.gz; }, dt, function () {
      // reached the edge: whatever is visible from here is now seen; move on
      self.banned[plan.key] = self.now + 30;
      self.log.explored++;
      self.log.cues[plan.cue] = (self.log.cues[plan.cue] || 0) + 1;
      self.frontierCache = null;
      self.plan = null;
    });
    case 'secret': {
      var dr = plan.door;
      return this.goTo(function (x, z) { return Math.abs(x - dr.x) + Math.abs(z - dr.z) === 1 && self.cell(x, z) === 0; }, dt, function () {
        var a = Math.atan2(dr.z + 0.5 - p.z, dr.x + 0.5 - p.x);
        if (self.turnToward(a, dt) < 0.15) {
          self.use();
          self.tried[dr.x + ',' + dr.z] = true;
          self.log.secretsTried++;
          self.plan = null;
        }
        self.setMove(null);
      });
    }
  }
};

// The best cell on the edge of what the bot knows, scored by the cues a
// first-time player would follow. Recomputed at most once a second.
PlayBot.prototype.frontier = function () {
  if (this.frontierCache && this.now - this.frontierCache.t < 1) return this.frontierCache.best;
  var G = this.G(), p = G.p, mw = G.mw, mh = G.mh, self = this;
  this.graph = this.game.walkGraph();
  var start = Math.floor(p.z) * mw + Math.floor(p.x), dist = new Map([[start, 0]]), q = [start];
  for (var h = 0; h < q.length; h++) {
    var c = q[h];
    this.edges(c % mw, (c / mw) | 0).forEach(function (e) {
      var n = e.cz * mw + e.cx;
      if (!dist.has(n)) { dist.set(n, dist.get(c) + 1); q.push(n); }
    });
  }
  var goal = this.game.goalTarget ? this.game.goalTarget() : null;
  var torches = G.ents.filter(function (e) { return e.kind === 'torch' && self.knows(Math.floor(e.x), Math.floor(e.z)); });
  function unseen(x, z) { return x >= 0 && z >= 0 && x < mw && z < mh && !G.seen[z * mw + x]; }
  var best = null, cands = [];
  dist.forEach(function (d, c) {
    var x = c % mw, z = (c / mw) | 0;
    if (!NB.some(function (o) { return unseen(x + o[0], z + o[1]); })) return;
    if (self.banned['explore:' + x + ',' + z] > self.now) return;
    var open = 0;
    for (var dz = -2; dz <= 2; dz++) for (var dx = -2; dx <= 2; dx++) if (unseen(x + dx, z + dz)) open++;
    var sc = 0.55 - d * 0.03 + open * 0.02, cue = 'open', torchTerm = 0, door = null;
    if (DOOR[self.cell(x, z)]) door = { x: x, z: z };
    else NB.forEach(function (o) { if (!door && DOOR[self.cell(x + o[0], z + o[1])]) door = { x: x + o[0], z: z + o[1] }; });
    var lit = torches.filter(function (t) { return Math.hypot(t.x - (x + 0.5), t.z - (z + 0.5)) < 2.2; }).length;
    if (door) { sc += 0.4; cue = 'door'; if (lit) { torchTerm = 0.5 + 0.2 * Math.min(2, lit); cue = 'torch-door'; } }
    else if (lit) { torchTerm = 0.25; cue = 'torch'; }
    sc += torchTerm;
    if (goal) {
      var gd = Math.hypot(goal.x - (x + 0.5), goal.z - (z + 0.5));
      sc += 0.8 * Math.max(0, 1 - gd / 20);
      if (gd < 8) cue += '+marker';
    }
    var cand = { x: x, z: z, score: sc, base: sc - torchTerm, cue: cue, torchDoor: cue.indexOf('torch-door') === 0, door: door };
    cands.push(cand);
    if (!best || sc > best.score) best = cand;
  });
  this.noteChoice(cands, best);
  this.frontierCache = { t: this.now, best: best };
  return best;
};

// N2: a real choice is 2+ frontier targets within 20% of the best score
// without the torch bonus. Report it once per new pick (the frontier is
// recomputed every second on the way there).
PlayBot.prototype.noteChoice = function (cands, best) {
  if (!this.onChoice || !best || cands.length < 2) return;
  var top = cands.reduce(function (a, c) { return c.base > a ? c.base : a; }, -Infinity);
  var near = cands.filter(function (c) { return top - c.base <= 0.2 * Math.abs(top); });
  if (near.length < 2 || near.indexOf(best) < 0) return;
  var key = best.x + ',' + best.z;
  if (key === this.lastChoice) return;
  this.lastChoice = key;
  this.onChoice({
    x: best.x, z: best.z, torchChosen: best.torchDoor,
    torchOptions: near.filter(function (c) { return c.torchDoor; }).length, options: near.length,
    door: best.door
  });
};

PlayBot.prototype.adjacentTo = function (x, z, id) {
  if (!this.passable(x, z)) return null;
  for (var i = 0; i < 4; i++) if (this.cell(x + NB[i][0], z + NB[i][1]) === id) return { x: x + NB[i][0], z: z + NB[i][1] };
  return null;
};
