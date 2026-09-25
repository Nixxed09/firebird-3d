// A persona-driven player for FIREBIRD 3D, for headless playtests.
//
// It plays the way Riley decides (see js/riley.js): every decision, the code
// lists the actions that are legal right now, scores them from the persona's
// traits, and does the best one. It plays only through a player's inputs:
// WASD, Shift, E, fire, weapon keys and turning (like a mouse, at a limited
// speed and with aiming error).
//
// What it knows: the level layout (like a player who has opened the automap)
// and what it can see or has recently seen. It does not know where demons are
// until it has line of sight to them, and it only goes after a secret wall once
// it has looked at that wall up close (then presses E on it, if curious enough).
//
// Personas come from ProfileEngine's synthetic-persona package (Big Five
// traits on a -1..1 scale plus risk tolerance and response speed); see
// personaToStyle() for how traits become a play style.
'use strict';

var DOOR = { 6: true, 7: true, 8: true, 11: true };
var EXIT_SWITCH = 9;
var HEALS = { h: 10, '+': 25, P: 100 };

function n01(v) { return Math.max(0, Math.min(1, (v + 1) / 2)); } // -1..1 -> 0..1
function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
function angDiff(a, b) { return Math.atan2(Math.sin(a - b), Math.cos(a - b)); }

// How a personality plays a shooter. Every number here is a design guess,
// written down so it can be argued with.
function personaToStyle(persona) {
  var t = persona.traits || {}, b = persona.behaviors || {};
  var ext = n01(t.extraversion || 0), neu = n01(t.neuroticism || 0), con = n01(t.conscientiousness || 0);
  var opn = n01(t.openness || 0), agr = n01(t.agreeableness || 0), risk = b.risk_tolerance == null ? 0.5 : b.risk_tolerance;
  var speed = { fast: 0.16, medium: 0.28, slow: 0.42 }[b.response_speed] || 0.28;
  return {
    aggression: clamp(0.25 + 0.45 * ext + 0.3 * risk, 0, 1),     // closes in, chases
    retreatHp: Math.round(20 + 30 * neu + 25 * (1 - risk)),       // below this: go heal / back off
    completionism: con,                                            // collects items on the way
    curiosity: opn,                                                // checks suspicious walls
    patience: agr,                                                 // lets demons fight each other
    reaction: speed,                                               // seconds before reacting to a new threat
    aimError: 0.02 + speed * 0.12 + neu * 0.03,                    // radians of wobble in its aim
    turnRate: 7 - speed * 8,                                       // radians per second, mouse-like
    dodge: clamp(0.25 + 0.5 * con + 0.3 * (1 - neu) - speed * 0.6, 0.05, 0.95), // chance to sidestep a fireball
    strafeHabit: t.autonomy_drive == null ? 0 : (t.autonomy_drive > 0.5 ? 1 : -1) * 0.25 // a slight favourite side
  };
}

function PlayBot(FB, persona, rng) {
  this.FB = FB;
  this.persona = persona;
  this.style = personaToStyle(persona);
  this.rng = rng;
  this.reset();
  this.log = { decisions: {}, secretsTried: 0 };
}

PlayBot.prototype.reset = function () {
  this.known = new Map();      // mob -> last time seen
  this.firstSeen = new Map();  // mob -> time first seen (for reaction delay)
  this.plan = null;
  this.decideT = 0;
  this.stuckT = 0; this.lastX = 0; this.lastY = 0; this.unstickT = 0; this.unstickDir = 1;
  this.strafeDir = this.rng() < 0.5 + this.style.strafeHabit ? -1 : 1; this.strafeT = 0;
  this.dodgeT = 0; this.dodgeDir = 1;
  this.useCool = 0; this.pressUse = false;
  this.banned = {}; // goal key -> time until which it is skipped
  this.fightProgress = null; // { target, hp, since }: a fight that stops going anywhere gets dropped
  this.now = 0;
  this.tried = {};  // secret walls already tried
  this.spotted = this.spotted || {}; // secret walls it has actually looked at (kept across retries, like a player's memory)
};

// ---- the map, as the player can know it -------------------------------------

PlayBot.prototype.cell = function (x, y) {
  var G = this.FB.state();
  if (x < 0 || y < 0 || x >= G.mw || y >= G.mh) return 1;
  return G.cells[y * G.mw + x];
};

PlayBot.prototype.walkable = function (x, y) {
  var G = this.FB.state(), c = this.cell(x, y);
  if (c === 0) return true;
  if (!DOOR[c]) return false;
  var d = G.doors[x + ',' + y];
  if (d.open >= 0.9) return true;
  if (d.secret) return d.found;
  if (d.locked) return !!G.p.keys[d.locked];
  return true;
};

// Breadth-first path to the nearest cell where goal(x, y) is true.
PlayBot.prototype.pathTo = function (goal) {
  var G = this.FB.state(), mw = G.mw;
  var sx = Math.floor(G.p.x), sy = Math.floor(G.p.y);
  var prev = new Int32Array(mw * G.mh).fill(-2), q = [sy * mw + sx];
  prev[q[0]] = -1;
  for (var h = 0; h < q.length; h++) {
    var c = q[h], cx = c % mw, cy = (c / mw) | 0;
    if (goal(cx, cy)) {
      var path = [];
      for (var k = c; k !== -1; k = prev[k]) path.unshift({ x: k % mw, y: (k / mw) | 0 });
      return path;
    }
    var nb = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    for (var i = 0; i < 4; i++) {
      var nx = cx + nb[i][0], ny = cy + nb[i][1], nc = ny * mw + nx;
      if (nx < 0 || ny < 0 || nx >= mw || ny >= G.mh || prev[nc] !== -2 || !this.walkable(nx, ny)) continue;
      prev[nc] = c;
      q.push(nc);
    }
  }
  return null;
};

PlayBot.prototype.los = function (ax, ay, bx, by) {
  var dx = bx - ax, dy = by - ay, d = Math.sqrt(dx * dx + dy * dy);
  var steps = Math.ceil(d * 4);
  for (var i = 1; i < steps; i++) {
    var x = Math.floor(ax + dx * i / steps), y = Math.floor(ay + dy * i / steps);
    var c = this.cell(x, y);
    if (c === 0) continue;
    if (DOOR[c]) { var dr = this.FB.state().doors[x + ',' + y]; if (dr && dr.open >= 0.8) continue; }
    return false;
  }
  return true;
};

// ---- perception ------------------------------------------------------------

PlayBot.prototype.perceive = function () {
  var G = this.FB.state(), p = G.p;
  var threats = [];
  for (var i = 0; i < G.ents.length; i++) {
    var e = G.ents[i];
    if (!e.mob || e.barrel || e.state === 'die' || e.state === 'dead' || e.gone) continue;
    var dx = e.x - p.x, dy = e.y - p.y, d = Math.sqrt(dx * dx + dy * dy);
    if (d > 30) continue;
    var inView = Math.abs(angDiff(Math.atan2(dy, dx), p.ang)) < 0.75 || d < 4 || e.state !== 'idle' && d < 12;
    if (inView && this.los(p.x, p.y, e.x, e.y)) {
      if (!this.known.has(e)) this.firstSeen.set(e, this.now);
      this.known.set(e, this.now);
    }
    if (this.known.has(e) && this.now - this.known.get(e) < 4) {
      threats.push({ e: e, d: d, visible: this.known.get(e) === this.now });
    }
  }
  // a secret wall only becomes a goal once it has been in view up close,
  // so the find rate says something about how discoverable it is
  for (var k in G.doors) {
    var dr = G.doors[k];
    if (!dr.secret || dr.found || this.spotted[k]) continue;
    var cx = dr.x + 0.5, cy = dr.y + 0.5, ddx = cx - p.x, ddy = cy - p.y, dd = Math.sqrt(ddx * ddx + ddy * ddy);
    if (dd > 8 || Math.abs(angDiff(Math.atan2(ddy, ddx), p.ang)) > 0.6) continue;
    if (this.los(p.x, p.y, cx - ddx / dd * 0.55, cy - ddy / dd * 0.55)) { this.spotted[k] = true; this.log.secretsSpotted = (this.log.secretsSpotted || 0) + 1; }
  }
  return threats;
};

// ---- decide: list legal actions, score them, pick one ----------------------

PlayBot.prototype.options = function (threats) {
  var G = this.FB.state(), p = G.p, st = this.style, self = this, opts = [];
  var hurt = p.hp < st.retreatHp;
  // nearly out of ammo: any sensible player goes looking before picking a fight
  var dry = p.ammo.bullets < 15 && (!p.weapons.shotgun || p.ammo.shells < 3);

  threats.forEach(function (t) {
    if (!t.visible && self.now - self.known.get(t.e) > 2) return;
    // two demons already fighting each other: a patient player lets them
    if (t.e.target && t.e.target !== null && st.patience > 0.6 && !t.e.target.barrel) return;
    var sc = 1.2 + st.aggression * 0.8 - t.d * 0.04 + (t.e.kind === 'riley' ? 0.6 : 0) + (t.e.state !== 'idle' ? 0.4 : 0);
    if (hurt && t.e.kind !== 'riley') sc -= 0.6;
    if (dry && t.d > 3) sc -= 1.2; // only punch what is already in your face
    if (self.banned['fight:' + t.e.id] > self.now) return;
    opts.push({ kind: 'fight', target: t.e, score: sc, key: 'fight' });
  });

  var pickups = G.ents.filter(function (e) { return e.kind === 'pickup' && !e.gone; });
  pickups.forEach(function (e) {
    var it = e.item, sc = null, key = 'item:' + Math.floor(e.x) + ',' + Math.floor(e.y);
    if (self.banned[key] > self.now) return;
    if (HEALS[it]) { if (p.hp >= 100 && it !== 'P') return; sc = hurt ? 2.2 : 0.35 + st.completionism * 0.5 + (it === 'P' ? 0.8 : 0); }
    else if (it === 'r' || it === 'u') sc = 1.6;
    else if (it === '2') sc = dry ? 2.2 : 1.5;
    else if (it === 'A') sc = p.armor < 50 ? 0.9 : 0.2;
    else if (it === 'a') sc = dry ? 2.0 : p.ammo.shells < 12 && p.weapons.shotgun ? 1.0 : 0.3 + st.completionism * 0.3;
    else if (it === 'b') sc = dry ? 2.0 : p.ammo.bullets < 30 ? 0.9 : 0.25 + st.completionism * 0.3;
    if (sc === null) return;
    var d = Math.sqrt(Math.pow(e.x - p.x, 2) + Math.pow(e.y - p.y, 2));
    opts.push({ kind: 'item', target: e, score: sc - d * 0.04, key: key, gx: Math.floor(e.x), gy: Math.floor(e.y) });
  });

  // the level's goal: its boss while alive, then the exit switch if it has one
  if (G.boss && G.boss.state !== 'dead' && G.boss.state !== 'die') {
    opts.push({ kind: 'boss', target: G.boss, score: 0.8 + st.aggression * 0.3 - st.completionism * 0.3, key: 'boss' });
  } else if (this.hasExit()) {
    opts.push({ kind: 'exit', score: 0.7 + (1 - st.completionism) * 0.5, key: 'exit' });
  }

  // suspicious walls (secret doors look different from their neighbours)
  // secret areas behind walls already opened: step inside, it's why you opened them
  G.secrets.forEach(function (sec) {
    if (sec.found) return;
    var key = 'area:' + sec.x + ',' + sec.y;
    opts.push({ kind: 'item', target: { x: sec.x + 0.5, y: sec.y + 0.5 }, score: 0.5 + st.curiosity * 0.6, key: key, gx: sec.x, gy: sec.y });
  });
  if (st.curiosity > 0.55) {
    for (var k in G.doors) {
      var dr = G.doors[k];
      if (!dr.secret || dr.found || !this.spotted[k] || this.tried[k] || this.banned['secret:' + k] > this.now) continue;
      opts.push({ kind: 'secret', door: dr, score: 0.3 + st.curiosity * 0.5, key: 'secret:' + k });
    }
  }
  return opts;
};

PlayBot.prototype.decide = function (threats) {
  var self = this, best = null;
  var opts = this.options(threats).filter(function (o) { return !(self.banned[o.key] > self.now); });
  for (var i = 0; i < opts.length; i++) {
    opts[i].score += (this.rng() - 0.5) * 0.1;
    if (!best || opts[i].score > best.score) best = opts[i];
  }
  // stick with the current plan unless something is clearly better
  if (this.plan && best && this.plan.key === best.key && this.plan.target === best.target) return;
  if (this.plan && best && this.plan.kind !== 'fight' && best.kind !== 'fight' && best.score < this.plan.score + 0.25 &&
      opts.some(function (o) { return o.key === this.plan.key; }, this)) return;
  this.plan = best;
  if (best) this.log.decisions[best.kind] = (this.log.decisions[best.kind] || 0) + 1;
};

// ---- act -------------------------------------------------------------------

PlayBot.prototype.setMove = function (worldAng, run) {
  var p = this.FB.state().p, keys = this.FB.keys;
  keys.KeyW = keys.KeyS = keys.KeyA = keys.KeyD = false;
  keys.ShiftLeft = !!run;
  if (worldAng === null) return;
  var rel = angDiff(worldAng, p.ang), f = Math.cos(rel), s = Math.sin(rel);
  if (f > 0.38) keys.KeyW = true; else if (f < -0.38) keys.KeyS = true;
  if (s > 0.38) keys.KeyD = true; else if (s < -0.38) keys.KeyA = true;
};

PlayBot.prototype.turnToward = function (ang, dt) {
  var p = this.FB.state().p, d = angDiff(ang, p.ang), max = this.style.turnRate * dt;
  p.ang += clamp(d, -max, max);
  return Math.abs(angDiff(ang, p.ang));
};

// walk a path; returns the heading, pressing E at closed doors on the way
PlayBot.prototype.follow = function (path, dt) {
  var G = this.FB.state(), p = G.p;
  if (!path || path.length < 2) return null;
  var next = path[1], c = this.cell(next.x, next.y);
  if (DOOR[c]) {
    var d = G.doors[next.x + ',' + next.y];
    if (d.open < 0.9) {
      var toDoor = Math.atan2(next.y + 0.5 - p.y, next.x + 0.5 - p.x);
      this.turnToward(toDoor, dt);
      if (d.state === 'closed' || d.state === 'closing') this.use();
      var dist = Math.hypot(next.x + 0.5 - p.x, next.y + 0.5 - p.y);
      return dist > 1.0 ? toDoor : null;
    }
  }
  // look ahead: aim for the furthest of the next cells still in a straight line of sight
  var target = next;
  for (var i = 2; i < Math.min(path.length, 5); i++) {
    if (this.los(p.x, p.y, path[i].x + 0.5, path[i].y + 0.5) && !DOOR[this.cell(path[i].x, path[i].y)]) target = path[i]; else break;
  }
  return Math.atan2(target.y + 0.5 - p.y, target.x + 0.5 - p.x);
};

PlayBot.prototype.use = function () {
  if (this.useCool > 0) return;
  this.pressUse = true;
  this.useCool = 0.35;
};

PlayBot.prototype.chooseWeapon = function (d) {
  var p = this.FB.state().p, want = 'pistol';
  if (p.weapons.shotgun && p.ammo.shells > 0 && d < 7) want = 'shotgun';
  else if (p.ammo.bullets <= 0) want = p.weapons.shotgun && p.ammo.shells > 0 ? 'shotgun' : 'fist';
  if (p.weapon !== want && !p.nextWeapon) this.FB.switchWeapon(want);
};

PlayBot.prototype.incoming = function () {
  var G = this.FB.state(), p = G.p;
  for (var i = 0; i < G.ents.length; i++) {
    var e = G.ents[i];
    if (e.kind !== 'proj') continue;
    var dx = p.x - e.x, dy = p.y - e.y, d = Math.sqrt(dx * dx + dy * dy);
    if (d > 5) continue;
    var sp = Math.sqrt(e.vx * e.vx + e.vy * e.vy) || 1;
    if ((dx * e.vx + dy * e.vy) / (d * sp) > 0.93) return e;
  }
  return null;
};

PlayBot.prototype.fight = function (t, dt) {
  var G = this.FB.state(), p = G.p, st = this.style, e = t;
  var dx = e.x - p.x, dy = e.y - p.y, d = Math.sqrt(dx * dx + dy * dy);
  var visible = this.known.get(e) === this.now;
  if (!visible) {
    // lost sight: chase along the map if bold, otherwise hold and wait
    this.FB.setFire(false);
    if (st.aggression < 0.45 && e.kind !== 'riley') return this.setMove(null);
    var path = this.pathTo(function (x, y) { return x === Math.floor(e.x) && y === Math.floor(e.y); });
    var h = this.follow(path, dt);
    if (h !== null) this.turnToward(h, dt);
    return this.setMove(h, true);
  }
  this.chooseWeapon(d);
  var wobble = (this.rng() - 0.5) * 2 * st.aimError;
  var err = this.turnToward(Math.atan2(dy, dx) + wobble, dt);
  var reacted = this.now - this.firstSeen.get(e) > st.reaction;
  var tolerance = Math.atan2(e.radius * 0.9, d);
  this.FB.setFire(reacted && err < tolerance + 0.03);

  // movement: keep the persona's preferred range, and strafe
  var want = p.weapon === 'fist' ? 0.9 : st.aggression > 0.6 ? 2.5 : st.aggression > 0.4 ? 4.5 : 6.5;
  var toward = Math.atan2(dy, dx), move;
  this.strafeT -= dt;
  if (this.strafeT <= 0) {
    this.strafeT = 0.5 + this.rng() * 1.2;
    if (this.rng() < 0.45 - st.strafeHabit) this.strafeDir = -this.strafeDir;
  }
  var side = toward + this.strafeDir * Math.PI / 2;
  if (d > want + 1) move = toward + this.strafeDir * 0.5;
  else if (d < want - 1) move = toward + Math.PI - this.strafeDir * 0.5;
  else move = side;
  // sidestep an incoming fireball if it notices in time
  this.dodgeT -= dt;
  var inc = this.incoming();
  if (inc && this.dodgeT <= 0 && this.rng() < st.dodge * dt * 8) {
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
  var G = this.FB.state(), p = G.p, keys = this.FB.keys, self = this;
  this.now += dt;
  this.useCool -= dt;
  keys.KeyE = this.pressUse;
  this.pressUse = false;
  if (p.dead) { this.FB.setFire(false); this.setMove(null); return; }

  var threats = this.perceive();
  this.decideT -= dt;
  if (this.decideT <= 0 || !this.plan) { this.decideT = 0.25; this.decide(threats); }
  var plan = this.plan;
  if (!plan) { this.FB.setFire(false); return this.setMove(null); }
  if (plan.kind !== 'fight') this.FB.setFire(false);

  // stuck on something? back off and try a different angle for a moment
  var moved = Math.hypot(p.x - this.lastX, p.y - this.lastY);
  this.lastX = p.x; this.lastY = p.y;
  var trying = keys.KeyW || keys.KeyS || keys.KeyA || keys.KeyD;
  this.stuckT = trying && moved < 0.3 * dt ? this.stuckT + dt : Math.max(0, this.stuckT - dt);
  if (this.unstickT > 0) {
    this.unstickT -= dt;
    this.setMove(p.ang + this.unstickDir * 2.2, false);
    return;
  }
  if (this.stuckT > 0.8) {
    this.stuckT = 0; this.unstickT = 0.35; this.unstickDir = -this.unstickDir;
    if ((this.stuckCount = (this.stuckCount || 0) + 1) % 6 === 0 && plan.kind !== 'fight') { this.banned[plan.key] = this.now + 20; this.plan = null; }
    return;
  }

  switch (plan.kind) {
    case 'fight': {
      // no damage dealt for 10 seconds (wedged, or out of reach): give it up for a while
      var fp = this.fightProgress, tg = plan.target;
      if (!fp || fp.target !== tg || tg.hp < fp.hp) this.fightProgress = fp = { target: tg, hp: tg.hp, since: this.now };
      if (this.now - fp.since > 10) {
        tg.id = tg.id || (this.nextId = (this.nextId || 0) + 1);
        this.banned['fight:' + tg.id] = this.now + 12;
        this.log.abandonedFights = (this.log.abandonedFights || 0) + 1;
        this.fightProgress = null; this.plan = null; this.FB.setFire(false);
        return this.setMove(null);
      }
      return this.fight(tg, dt);
    }
    case 'boss': return this.goTo(function (x, y) {
      return self.los(x + 0.5, y + 0.5, plan.target.x, plan.target.y) && Math.hypot(x + 0.5 - plan.target.x, y + 0.5 - plan.target.y) < 9;
    }, dt, function () { p.ang = Math.atan2(plan.target.y - p.y, plan.target.x - p.x); self.known.set(plan.target, self.now); });
    case 'item': return this.goTo(function (x, y) { return x === plan.gx && y === plan.gy; }, dt, function () {
      // on the item's cell: step onto its centre
      var t = plan.target;
      self.setMove(Math.atan2(t.y - p.y, t.x - p.x), false);
      self.turnToward(Math.atan2(t.y - p.y, t.x - p.x), dt);
    });
    case 'exit': return this.goTo(function (x, y) { return self.adjacentTo(x, y, EXIT_SWITCH); }, dt, function () {
      var sw = self.adjacentTo(Math.floor(p.x), Math.floor(p.y), EXIT_SWITCH);
      var err = self.turnToward(Math.atan2(sw.y + 0.5 - p.y, sw.x + 0.5 - p.x), dt);
      self.setMove(err < 0.3 ? Math.atan2(sw.y + 0.5 - p.y, sw.x + 0.5 - p.x) : null, false);
      if (err < 0.2) self.use();
    });
    case 'secret': {
      var dr = plan.door;
      return this.goTo(function (x, y) { return Math.abs(x - dr.x) + Math.abs(y - dr.y) === 1; }, dt, function () {
        var a = Math.atan2(dr.y + 0.5 - p.y, dr.x + 0.5 - p.x);
        if (self.turnToward(a, dt) < 0.15) {
          self.use();
          self.tried[dr.x + ',' + dr.y] = true;
          self.log.secretsTried++;
          self.plan = null;
        }
        self.setMove(null);
      });
    }
  }
};

PlayBot.prototype.hasExit = function () {
  var G = this.FB.state();
  for (var i = 0; i < G.cells.length; i++) if (G.cells[i] === EXIT_SWITCH) return true;
  return false;
};

PlayBot.prototype.adjacentTo = function (x, y, id) {
  if (!this.walkable(x, y)) return null;
  var nb = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  for (var i = 0; i < 4; i++) if (this.cell(x + nb[i][0], y + nb[i][1]) === id) return { x: x + nb[i][0], y: y + nb[i][1] };
  return null;
};

module.exports = { PlayBot: PlayBot, personaToStyle: personaToStyle };
