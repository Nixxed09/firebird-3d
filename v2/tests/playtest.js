// Headless playtest for v2: persona bots play the whole episode in the 3D
// simulation (src/sim, no browser) and we evaluate it. Port of ../../tests/playtest.js.
//
//   node tests/playtest.js                       all personas, 3 difficulties, 5 seeds
//   node tests/playtest.js --seeds 20 --difficulties 1 --personas curious_explorer
//
// Personas load live from ProfileEngine's synthetic-persona package when it
// is on this machine, otherwise from the copy below. Writes
// captures/playtest-report.md and captures/playtest-report.json.
//
// Riley's honesty is checked the way Living Quarry checks her reports against
// her pack: every number or fact she says is compared with what the bot
// actually did, counted independently of her own counters.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import { createGame } from '../src/sim/game.js';
import { LEVELS } from '../src/levels.js';
import { makeRng } from '../src/sim/rng.js';
import { PlayBot } from './playbot.js';
import { Recorder, writeFlow } from './flow.js';

var __dirname = path.dirname(fileURLToPath(import.meta.url));
var require = createRequire(import.meta.url);

// ---- options ---------------------------------------------------------------

var argv = process.argv.slice(2);
function opt(name, def) { var i = argv.indexOf('--' + name); return i >= 0 ? argv[i + 1] : def; }
var SEED = +opt('seed', 1);
var SEEDS = +opt('seeds', 5);          // runs per persona per difficulty
var DIFFS = opt('difficulties', '0,1,2').split(',').map(Number);
var DIFF_NAMES = ['ROOKIE', 'WARRIOR', 'INFERNO'];
var ONLY = opt('personas', '');
var FIRST_TIMER = argv.indexOf('--first-timer') >= 0; // bots know only what they have seen (tests/playbot.js)
var OUT = opt('out', path.join(__dirname, '..', 'captures'));
var DT = 1 / 30;
var LEVEL_LIMIT = 8 * 60;   // seconds of game time per level before we call it stuck
var MAX_ATTEMPTS = 6;

// ---- personas --------------------------------------------------------------

var PERSONA_SRC = 'D:/TE-Code/ProfileEngine/packages/synthetic-persona/src/personas/personality-personas.js';
// Snapshot of the same archetypes (2026-09-24), used when the repo isn't here.
var FALLBACK = {
  skeptical_analyst: { name: 'The Skeptical Analyst', traits: { openness: 0.8, conscientiousness: 0.9, extraversion: -0.2, agreeableness: 0.2, neuroticism: 0.3, autonomy_drive: 0.7 }, behaviors: { risk_tolerance: 0.3, response_speed: 'slow' } },
  curious_explorer: { name: 'The Curious Explorer', traits: { openness: 0.9, conscientiousness: 0.6, extraversion: 0.5, agreeableness: 0.7, neuroticism: 0.2, autonomy_drive: 0.6 }, behaviors: { risk_tolerance: 0.7, response_speed: 'medium' } },
  busy_professional: { name: 'The Busy Professional', traits: { openness: 0.5, conscientiousness: 0.8, extraversion: 0.3, agreeableness: 0.4, neuroticism: 0.4, autonomy_drive: 0.5 }, behaviors: { risk_tolerance: 0.4, response_speed: 'fast' } },
  validation_seeker: { name: 'The Validation Seeker', traits: { openness: 0.6, conscientiousness: 0.7, extraversion: 0.2, agreeableness: 0.8, neuroticism: 0.6, autonomy_drive: 0.3 }, behaviors: { risk_tolerance: 0.3, response_speed: 'medium' } },
  power_user: { name: 'The Power User', traits: { openness: 0.8, conscientiousness: 0.8, extraversion: 0.4, agreeableness: 0.3, neuroticism: 0.2, autonomy_drive: 0.9 }, behaviors: { risk_tolerance: 0.6, response_speed: 'medium' } }
};
// Two extremes in the same schema, local to Firebird, to stretch the range.
var EXTREMES = {
  reckless_rusher: { name: 'Reckless Rusher (Firebird)', traits: { openness: 0.1, conscientiousness: -0.6, extraversion: 0.9, agreeableness: -0.2, neuroticism: -0.4, autonomy_drive: 0.8 }, behaviors: { risk_tolerance: 0.95, response_speed: 'fast' } },
  nervous_newcomer: { name: 'Nervous Newcomer (Firebird)', traits: { openness: 0.2, conscientiousness: 0.1, extraversion: -0.6, agreeableness: 0.6, neuroticism: 0.9, autonomy_drive: -0.3 }, behaviors: { risk_tolerance: 0.1, response_speed: 'slow' } }
};

function loadPersonas() {
  var source = 'fallback snapshot', base = FALLBACK;
  try {
    base = require(PERSONA_SRC).PROFILEENGINE_ARCHETYPES;
    source = 'live: ' + PERSONA_SRC;
  } catch (e) { }
  var all = {};
  Object.keys(base).forEach(function (k) { all[k] = base[k]; });
  Object.keys(EXTREMES).forEach(function (k) { all[k] = EXTREMES[k]; });
  if (ONLY) {
    var keep = ONLY.split(',');
    Object.keys(all).forEach(function (k) { if (keep.indexOf(k) < 0) delete all[k]; });
  }
  return { source: source, all: all };
}

// ---- Riley truth check -----------------------------------------------------

function mostUsed(shots) {
  var best = null, n = 0;
  for (var k in shots) if (shots[k] > n) { n = shots[k]; best = k; }
  return best;
}

// fight: what the bot really did this fight. history: earlier fights.
function checkLine(text, fight, history) {
  var m, claims = [];
  function claim(what, said, truth, slack) {
    var ok = String(said) === String(truth);
    var unsure = !ok && slack > 0 && typeof said === 'number' && Math.abs(said - truth) <= slack;
    claims.push({ what: what, said: said, truth: truth, ok: ok, unsure: unsure, slack: slack || 0 });
  }
  if ((m = /YOU HIT ME (\d+) TIME/.exec(text))) claim('hits', +m[1], fight.hits, fight.ambiguous);
  if ((m = /WIN! (\d+) HITS/.exec(text))) claim('hits', +m[1], fight.hits, fight.ambiguous);
  if ((m = /(\d+)% ACCURACY/.exec(text))) claim('accuracy %', +m[1], Math.min(100, Math.round(fight.hits / fight.shotsTotal * 100)), Math.ceil(fight.ambiguous / fight.shotsTotal * 100));
  if ((m = /(\d+) SHOTGUN BLASTS/.exec(text))) claim('shotgun blasts', +m[1], fight.shots.shotgun);
  if ((m = /DODGE (LEFT|RIGHT)/.exec(text))) claim('dodge side', m[1], fight.strafeL > fight.strafeR ? 'LEFT' : 'RIGHT');
  if ((m = /MOSTLY THE (\w+)/.exec(text))) claim('main weapon', m[1], ({ fist: 'FISTS', pistol: 'PISTOL', shotgun: 'SHOTGUN' })[mostUsed(fight.shots)]);
  if ((m = /YOU BEAT ME (\d+) TIME/.exec(text))) claim('times beaten', +m[1], history.filter(function (f) { return f.won; }).length);
  if (/GOING A LITTLE EASIER/.test(text)) claim('lost last time', true, history.length > 0 && !history[history.length - 1].won);
  if ((m = /LAST TIME YOU (?:USED|RUSHED ME WITH) THE (\w+)/.exec(text)) && history.length) {
    claim('last fight weapon', m[1], ({ fist: 'FISTS', pistol: 'PISTOL', shotgun: 'SHOTGUN' })[mostUsed(history[history.length - 1].shots)]);
  }
  if ((m = /ROUND (\d+)/.exec(text))) claim('round number', +m[1], history.length + 1);
  return claims;
}

function gearOf(p) {
  return p.hp + 'hp ' + p.armor + 'ar ' + p.ammo.bullets + 'b ' + (p.weapons.shotgun ? p.ammo.shells + 's' : 'no shotgun');
}

// ---- one persona plays the episode -----------------------------------------

// Each persona's episode seed depends only on the run seed and its name, so
// --personas NAME --seed N --seeds 1 --difficulties D replays it exactly.
function episodeSeed(sd, key) {
  var h = 0;
  for (var i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0;
  return sd * 1000 + h % 1000;
}

function playEpisode(key, persona, sd, difficulty) {
  // a fresh game per episode: its own rng and its own storage (Riley's memory)
  var store = {}, rng = makeRng(episodeSeed(sd, key));
  var FB = createGame({
    levels: LEVELS, rng: rng, settings: { difficulty: difficulty, tips: false, seenTips: {} },
    storage: { getItem: function (k) { return k in store ? store[k] : null; }, setItem: function (k, v) { store[k] = String(v); } }
  });
  var bot = new PlayBot(FB, persona, rng, { firstTimer: FIRST_TIMER });
  var run = { persona: key, name: persona.name, seed: sd, difficulty: difficulty, style: bot.style, levels: [], deaths: [], riley: { fights: [], lines: [], claims: [] }, finished: false };
  var history = run.riley.fights;

  FB.startLevel(0, false);
  for (var li = 0; li < LEVELS.length; li++) {
    var lv = { name: LEVELS[li].name, attempts: 1, time: 0, result: 'timeout', damage: 0, gear: [gearOf(FB.state().p)] };
    var rec = new Recorder(LEVELS[li]); // flow of play across every attempt (tests/flow.js)
    FLOW[li].push({ persona: key, difficulty: difficulty, seed: sd, samples: rec.samples, deaths: rec.deaths, choices: rec.choices });
    bot.onChoice = function (ev) { rec.choices.push(ev); };
    run.levels.push(lv);
    var t = 0, done = false, fight = null, seenMsgs = new Set(), lastHp = FB.state().p.hp;
    bot.reset();
    while (!done) {
      var G = FB.state(), p = G.p, boss = G.boss;
      var bossHpBefore = boss ? boss.hp : 0, fireTBefore = p.fireT;
      var bossActive = boss && boss.state !== 'idle' && boss.state !== 'die' && boss.state !== 'dead';
      var near = bossActive ? G.ents.filter(function (e) {
        return (e.kind === 'proj' && e.owner !== boss || e.barrel) && Math.hypot(e.x - boss.x, e.z - boss.z) < 3;
      }) : [];
      bot.step(DT);
      FB.update(DT);
      rec.tick(FB.state(), DT);
      t += DT;
      G = FB.state(); p = G.p;

      if (p.hp < lastHp) lv.damage += lastHp - p.hp;
      lastHp = p.hp;

      // Riley fight bookkeeping, measured by the bot, not read from her profile
      if (boss && boss.state !== 'idle' && !fight) {
        fight = { attempt: lv.attempts, start: t, hits: 0, ambiguous: 0, shots: { fist: 0, pistol: 0, shotgun: 0 }, shotsTotal: 0,
          strafeL: 0, strafeR: 0, moves: {}, shields: 0, summoned: 0, phase: 1, won: false, lines: [] };
      }
      if (fight && bossActive) {
        var fired = p.fireT === 0 && fireTBefore > 0; // a real trigger pull, not a frozen timer while dead
        var otherHit = near.some(function (e) { return G.ents.indexOf(e) < 0 || e.dead; });
        if (fired) {
          fight.shots[p.weapon]++; fight.shotsTotal++;
          if (boss.hp < bossHpBefore) { if (otherHit) fight.ambiguous++; else fight.hits++; }
        }
        if (bot.sees(boss.x, boss.y + boss.h * 0.6, boss.z)) {
          if (FB.keys.KeyA && !FB.keys.KeyD) fight.strafeL += DT;
          if (FB.keys.KeyD && !FB.keys.KeyA) fight.strafeR += DT;
        }
        if (boss.move) fight.moves[boss.move] = (fight.moves[boss.move] || 0) + DT;
        if (boss.shieldT > 1.55) fight.shields++;
        fight.phase = Math.max(fight.phase, boss.phase || 1);
      }
      if (fight) {
        fight.summoned = G.ents.filter(function (e) { return e.summoned; }).length;
        G.msgs.forEach(function (m) {
          if (seenMsgs.has(m) || m.text.indexOf('RILEY:') !== 0) return;
          seenMsgs.add(m);
          var claims = checkLine(m.text, fight, history.filter(function (f) { return f !== fight; }));
          fight.lines.push(m.text);
          run.riley.lines.push({ attempt: fight.attempt, text: m.text, claims: claims });
          claims.forEach(function (c) { run.riley.claims.push(Object.assign({ line: m.text }, c)); });
        });
      }

      if (p.dead && p.deadT > 1.3) {
        run.deaths.push({ level: lv.name, attempt: lv.attempts, time: +t.toFixed(1), killer: G.killer || '?', x: +p.x.toFixed(1), z: +p.z.toFixed(1) });
        if (fight) { fight.end = t; fight.bossHp = boss.hp; fight.bossMaxHp = boss.maxHp; history.push(fight); fight = null; }
        if (lv.attempts >= MAX_ATTEMPTS) { lv.result = 'gave up'; break; }
        lv.attempts++;
        rec.death(G);
        FB.retryLevel();
        rec.retry();
        lv.gear.push(gearOf(FB.state().p));
        bot.reset();
        seenMsgs = new Set();
        lastHp = FB.state().p.hp;
        continue;
      }
      if (FB.mode() !== 'game') {
        lv.result = 'cleared';
        lv.time = +G.time.toFixed(1);
        lv.par = G.L.par;
        lv.kills = G.stats.kills + '/' + G.stats.totalKills;
        lv.items = G.stats.items + '/' + G.stats.totalItems;
        lv.secrets = G.stats.secrets + '/' + G.stats.totalSecrets;
        lv.hpLeft = p.hp;
        if (fight) { fight.end = t; fight.won = true; fight.bossHp = 0; fight.bossMaxHp = boss.maxHp; history.push(fight); }
        done = true;
        break;
      }
      if (t > LEVEL_LIMIT * lv.attempts) {
        lv.result = 'stuck';
        lv.stuckAt = { x: +p.x.toFixed(1), z: +p.z.toFixed(1), plan: bot.plan && bot.plan.kind, objective: FB.objective(), gear: gearOf(p) };
        var tg = bot.plan && bot.plan.target;
        if (tg && tg.mob) {
          lv.stuckAt.target = tg.kind + ' ' + tg.state + ' ' + tg.hp + 'hp at (' + tg.x.toFixed(1) + ', ' + tg.z.toFixed(1) + '), ' +
            (bot.sees(tg.x, tg.y + tg.h * 0.6, tg.z) ? 'in sight' : 'out of sight') + ', ' + Math.hypot(tg.x - p.x, tg.z - p.z).toFixed(1) + ' away';
        }
        break;
      }
    }
    if (!done) return run;
    // skip the tally and move on, like pressing Enter
    for (var n = 0; n < 5 && FB.mode() === 'inter'; n++) { for (var w = 0; w < 30; w++) FB.update(DT); FB.onEnter(); }
  }
  run.finished = FB.mode() === 'victory';
  run.decisions = bot.log.decisions;
  run.secretsTried = bot.log.secretsTried;
  run.jumps = bot.log.jumps;
  run.explored = bot.log.explored;
  run.cues = bot.log.cues;
  return run;
}

// ---- report ----------------------------------------------------------------

function pct(a, b) { return b ? Math.round(a / b * 100) + '%' : '-'; }

function report(runs, personas, all) {
  var L = [];
  L.push('# Firebird 3D v2: headless playtest');
  L.push('');
  L.push(new Date().toISOString().slice(0, 16).replace('T', ' ') + '. ' + all.length + ' episodes: ' + Object.keys(personasOf(all)).length + ' personas x ' + DIFFS.length + ' difficulties x ' + SEEDS + ' seeds (from ' + SEED + ').');
  L.push('Personas: ' + personas.source + ' (+ 2 Firebird extremes).');
  L.push(FIRST_TIMER ? 'FIRST-TIMER bots: they know only the cells the game has marked as seen, and explore by cues (doors, torch-flanked doors, torches, open views, the goal marker).' : 'Bots know the level layout and the physics\' movement rules (walk, step, jump, drop, lifts), but only see demons in 3D line of sight.');
  if (FIRST_TIMER) {
    var cues = {};
    all.forEach(function (x) { for (var c in (x.run.cues || {})) cues[c] = (cues[c] || 0) + x.run.cues[c]; });
    L.push('Exploration steps by the cue that won: ' + Object.keys(cues).sort(function (a, b) { return cues[b] - cues[a]; }).map(function (c) { return c + ' ' + cues[c]; }).join(', ') + '.');
  }
  L.push('');
  aggregate(all).forEach(function (l) { L.push(l); });
  L.push('');
  L.push('# One run in detail: ' + DIFF_NAMES[detailDiff] + ', seed ' + SEED);
  L.push('');
  L.push('## Summary');
  L.push('');
  L.push('| Persona | Style | Result | Deaths | Riley fights | Riley honesty |');
  L.push('|---|---|---|---|---|---|');
  runs.forEach(function (r) {
    var s = r.style, cl = r.riley.claims, bad = cl.filter(function (c) { return !c.ok; }).length;
    var furthest = r.levels[r.levels.length - 1];
    L.push('| ' + r.name + ' | aggr ' + s.aggression.toFixed(2) + ', retreat <' + s.retreatHp + 'hp, react ' + s.reaction + 's | ' +
      (r.finished ? '**beat the episode**' : furthest.name.split(':')[0] + ' ' + furthest.result) + ' | ' + r.deaths.length + ' | ' +
      r.riley.fights.length + (r.riley.fights.some(function (f) { return f.won; }) ? ' (won)' : '') + ' | ' +
      (cl.length ? (cl.length - bad) + '/' + cl.length + ' claims true' : 'no claims') + ' |');
  });

  // findings the numbers point at
  L.push('');
  L.push('## Findings');
  L.push('');
  var findings = [];
  var byLevel = {};
  runs.forEach(function (r) { r.deaths.forEach(function (d) { byLevel[d.level] = (byLevel[d.level] || 0) + 1; }); });
  Object.keys(byLevel).sort(function (a, b) { return byLevel[b] - byLevel[a]; }).forEach(function (lv) {
    findings.push('Deaths on ' + lv + ': ' + byLevel[lv] + ' across ' + runs.length + ' personas.');
  });
  runs.forEach(function (r) {
    r.levels.forEach(function (lv) {
      if (lv.result === 'stuck') findings.push('**' + r.name + ' got stuck** on ' + lv.name + ' at (' + lv.stuckAt.x + ', ' + lv.stuckAt.z + '), doing "' + lv.stuckAt.plan + '"' + (lv.stuckAt.target ? ' against ' + lv.stuckAt.target : '') + ', gear ' + lv.stuckAt.gear + ', objective "' + lv.stuckAt.objective + '". Replay: `node tests/playtest.js --personas ' + r.persona + ' --seed ' + r.seed + ' --seeds 1 --difficulties ' + r.difficulty + '`');
      if (lv.result === 'gave up') findings.push(r.name + ' gave up on ' + lv.name + ' after ' + MAX_ATTEMPTS + ' deaths.');
    });
  });
  var allClaims = [].concat.apply([], runs.map(function (r) { return r.riley.claims; }));
  var lies = allClaims.filter(function (c) { return !c.ok && !c.unsure; });
  var unsure = allClaims.filter(function (c) { return c.unsure; });
  findings.push('Riley made ' + allClaims.length + ' checkable claims: ' + allClaims.filter(function (c) { return c.ok; }).length + ' true, ' + lies.length + ' false, ' + unsure.length + ' too close to call (a demon fireball or barrel hit her in the same frame as a shot).');
  lies.forEach(function (c) { findings.push('**Riley said something false:** "' + c.line + '": said ' + c.what + ' = ' + c.said + ', bot measured ' + c.truth + '.'); });
  var fights = [].concat.apply([], runs.map(function (r) { return r.riley.fights; }));
  if (fights.length) {
    var wins = fights.filter(function (f) { return f.won; });
    findings.push('Riley fights: ' + fights.length + ', player won ' + wins.length + '. Average fight ' + (fights.reduce(function (a, f) { return a + (f.end - f.start); }, 0) / fights.length).toFixed(0) + 's.');
    var losses = fights.filter(function (f) { return !f.won; });
    if (losses.length) findings.push('When Riley won, she had on average ' + Math.round(losses.reduce(function (a, f) { return a + f.bossHp / f.bossMaxHp; }, 0) / losses.length * 100) + '% health left.');
  }
  findings.forEach(function (f) { L.push('- ' + f); });

  runs.forEach(function (r) {
    L.push('');
    L.push('## ' + r.name);
    L.push('');
    L.push('| Level | Result | Tries | Time / par | Kills | Items | Secrets | Damage taken |');
    L.push('|---|---|---|---|---|---|---|---|');
    r.levels.forEach(function (lv) {
      L.push('| ' + lv.name + ' | ' + lv.result + ' | ' + lv.attempts + ' | ' + (lv.time ? lv.time + 's / ' + lv.par + 's' : '-') + ' | ' +
        (lv.kills || '-') + ' | ' + (lv.items || '-') + ' | ' + (lv.secrets || '-') + ' | ' + Math.round(lv.damage) + ' |');
    });
    if (r.deaths.length) {
      L.push('');
      L.push('Gear at the start of each try: ' + r.levels.map(function (lv) { return lv.name.split(':')[0] + ' [' + lv.gear.join(' / ') + ']'; }).join('; ') + '.');
      L.push('');
      L.push('Deaths: ' + r.deaths.map(function (d) { return d.level.split(':')[0] + ' try ' + d.attempt + ' (' + d.killer + ' at ' + d.x + ',' + d.z + ')'; }).join('; ') + '.');
    }
    r.riley.fights.forEach(function (f, i) {
      L.push('');
      L.push('**Riley fight ' + (i + 1) + '** (' + (f.won ? 'player won' : 'Riley won, ' + Math.round(f.bossHp / f.bossMaxHp * 100) + '% hp left') + ', ' + (f.end - f.start).toFixed(0) +
        's, phase ' + f.phase + ', ' + f.summoned + ' imps summoned, player hit her ' + f.hits + '/' + f.shotsTotal + '). Her moves (seconds): ' +
        Object.keys(f.moves).map(function (m) { return m + ' ' + f.moves[m].toFixed(0); }).join(', ') + '.');
      f.lines.forEach(function (line) {
        var entry = r.riley.lines.filter(function (x) { return x.text === line; })[0];
        var cl = entry ? entry.claims : [];
        L.push('- ' + line + (cl.length ? '  ' + cl.map(function (c) { return (c.ok ? 'TRUE' : c.unsure ? 'UNSURE' : 'FALSE') + ' (' + c.what + ': ' + c.truth + (c.slack ? ' ±' + c.slack : '') + ')'; }).join(' ') : ''));
      });
    });
  });
  return L.join('\n') + '\n';
}

function personasOf(all) { var o = {}; all.forEach(function (x) { o[x.run.persona] = x.run.name; }); return o; }

// How much damage the ammo placed on a map can do if every shot lands,
// against how much health its monsters have. Independent of how anyone plays.
function economy(L, am) {
  var s = L.map.join(''), n = function (ch) { return s.split(ch).length - 1; };
  // Riley: 900 hp plus a round of summoned imps; a sparring Riley (L.boss) has
  // a fraction of it and never summons
  var spar = L.boss && L.boss.sparring;
  var riley = spar ? Math.round(900 * (L.boss.hpScale || 1)) : 900 + 2 * 40;
  var hp = n('i') * 40 + n('g') * 110 + n('K') * 400 + n('Y') * riley;
  // demons the level's events spawn later (arena waves); they count too
  var HP = { imp: 40, gnasher: 110, knight: 400 };
  (function walk(v) {
    if (Array.isArray(v)) return v.forEach(walk);
    if (!v || typeof v !== 'object') return;
    if (Array.isArray(v.spawn)) v.spawn.forEach(function (m) { hp += HP[m.kind] || 0; });
    Object.keys(v).forEach(function (k) { if (k !== 'spawn') walk(v[k]); });
  })(L.events || []);
  var bullets = n('b') * 10 * am, shells = n('a') * 4 * am + n('2') * 8 * am;
  return { monsterHp: hp, bullets: bullets, shells: shells, maxDamage: bullets * 10 + shells * 70 };
}

function aggregate(all) {
  var L = [], names = personasOf(all);
  L.push('## Across all runs');
  L.push('');
  L.push('How far each persona got. "Riley" = reached the final boss; "won" = beat the episode.');
  L.push('');
  L.push('| Persona | ' + DIFFS.map(function (d) { return DIFF_NAMES[d]; }).join(' | ') + ' |');
  L.push('|---|' + DIFFS.map(function () { return '---'; }).join('|') + '|');
  Object.keys(names).forEach(function (k) {
    L.push('| ' + names[k] + ' | ' + DIFFS.map(function (d) {
      var rs = all.filter(function (x) { return x.run.persona === k && x.difficulty === d; }).map(function (x) { return x.run; });
      var riley = rs.filter(function (r) { return r.levels.length === LEVELS.length; }).length;
      var won = rs.filter(function (r) { return r.finished; }).length;
      return 'Riley ' + riley + '/' + rs.length + ', won ' + won + '/' + rs.length;
    }).join(' | ') + ' |');
  });
  L.push('');
  L.push('Per level, all personas and seeds: of the runs that reached it, how many cleared it, average tries, and what killed them most.');
  L.push('');
  L.push('| Level | ' + DIFFS.map(function (d) { return DIFF_NAMES[d]; }).join(' | ') + ' | Ammo on map vs monster HP (WARRIOR) |');
  L.push('|---|' + DIFFS.map(function () { return '---'; }).join('|') + '|---|');
  LEVELS.forEach(function (lvDef, li) {
    var eco = economy(lvDef, 1);
    L.push('| ' + lvDef.name + ' | ' + DIFFS.map(function (d) {
      var reached = [], killers = {};
      all.filter(function (x) { return x.difficulty === d; }).forEach(function (x) {
        var lv = x.run.levels[li];
        if (lv) reached.push(lv);
        x.run.deaths.forEach(function (dd) { if (dd.level === lvDef.name) killers[dd.killer] = (killers[dd.killer] || 0) + 1; });
      });
      if (!reached.length) return 'not reached';
      var cleared = reached.filter(function (lv) { return lv.result === 'cleared'; }).length;
      var tries = reached.reduce(function (a, lv) { return a + lv.attempts; }, 0) / reached.length;
      var top = Object.keys(killers).sort(function (a, b) { return killers[b] - killers[a]; }).slice(0, 2).map(function (k) { return k + ' ' + killers[k]; }).join(', ');
      return cleared + '/' + reached.length + ' cleared, ' + tries.toFixed(1) + ' tries' + (top ? ' (' + top + ')' : '');
    }).join(' | ') + ' | ' + eco.bullets + ' bullets + ' + eco.shells + ' shells = up to ' + eco.maxDamage + ' dmg vs ' + eco.monsterHp + ' hp |');
  });
  // Secrets: found / available, counted on the attempt that cleared the level
  // (a secret found on a failed try is lost with the retry, as in the game).
  L.push('');
  L.push('Secrets found (bots only go for a secret wall they have looked at up close):');
  L.push('');
  L.push('| Level | ' + DIFFS.map(function (d) { return DIFF_NAMES[d]; }).join(' | ') + ' | All |');
  L.push('|---|' + DIFFS.map(function () { return '---'; }).join('|') + '|---|');
  LEVELS.forEach(function (lvDef, li) {
    var tally = function (eps) {
      var f = 0, n = 0;
      eps.forEach(function (x) {
        var lv = x.run.levels[li];
        if (!lv || !lv.secrets) return;
        var a = lv.secrets.split('/');
        f += +a[0]; n += +a[1];
      });
      return n ? f + '/' + n : '-';
    };
    L.push('| ' + lvDef.name + ' | ' + DIFFS.map(function (d) {
      return tally(all.filter(function (x) { return x.difficulty === d; }));
    }).join(' | ') + ' | ' + tally(all) + ' |');
  });
  var stuck = all.filter(function (x) { return x.run.levels.some(function (lv) { return lv.result === 'stuck'; }); });
  L.push('');
  L.push('Stuck runs (a bot that stopped making progress for 8 minutes: a bot weakness or a level trap): ' + stuck.length + ' of ' + all.length + '.');
  stuck.forEach(function (x) {
    var lv = x.run.levels.filter(function (l) { return l.result === 'stuck'; })[0];
    L.push('- ' + x.run.name + ', ' + DIFF_NAMES[x.difficulty] + ', ' + lv.name + ' at (' + lv.stuckAt.x + ', ' + lv.stuckAt.z + '), doing "' + lv.stuckAt.plan + '"' +
      (lv.stuckAt.target ? ' against ' + lv.stuckAt.target : '') + '. Replay: `node tests/playtest.js --personas ' + x.run.persona + ' --seed ' + x.seed + ' --seeds 1 --difficulties ' + x.difficulty + '`');
  });
  var claims = [].concat.apply([], all.map(function (x) { return x.run.riley.claims; }));
  var fights = [].concat.apply([], all.map(function (x) { return x.run.riley.fights; }));
  L.push('');
  L.push('Riley honesty over every fight: ' + claims.length + ' checkable claims, ' + claims.filter(function (c) { return c.ok; }).length + ' true, ' +
    claims.filter(function (c) { return !c.ok && !c.unsure; }).length + ' false, ' + claims.filter(function (c) { return c.unsure; }).length + ' too close to call.');
  claims.filter(function (c) { return !c.ok && !c.unsure; }).slice(0, 10).forEach(function (c) {
    L.push('- FALSE: "' + c.line + '" (' + c.what + ' said ' + c.said + ', measured ' + c.truth + ')');
  });
  if (fights.length) {
    var won = fights.filter(function (f) { return f.won; });
    L.push('');
    L.push('Riley fights: ' + fights.length + ', players won ' + won.length + '. Furthest phase: ' + [1, 2, 3].map(function (ph) {
      return 'phase ' + ph + ' in ' + fights.filter(function (f) { return f.phase === ph; }).length; }).join(', ') + '.');
  }
  return L;
}

// ---- main ------------------------------------------------------------------

var detailDiff = DIFFS.indexOf(1) >= 0 ? 1 : DIFFS[0];
var FLOW = LEVELS.map(function () { return []; }); // per level: every episode's trace
var personas = loadPersonas();
var keys = Object.keys(personas.all);
console.log('Playtest: ' + keys.length + ' personas x ' + DIFFS.length + ' difficulties x ' + SEEDS + ' seeds, ' + personas.source);
var all = [];
var t0 = Date.now();
DIFFS.forEach(function (d) {
  for (var sd = SEED; sd < SEED + SEEDS; sd++) {
    keys.forEach(function (k, i) {
      all.push({ difficulty: d, seed: sd, run: playEpisode(k, personas.all[k], sd, d) });
    });
  }
});
console.log('  ' + all.length + ' episodes in ' + ((Date.now() - t0) / 1000).toFixed(1) + 's; detail for ' + DIFF_NAMES[detailDiff] + ' seed ' + SEED + ':');
var runs = keys.map(function (k, i) {
  var r = all.filter(function (x) { return x.difficulty === detailDiff && x.seed === SEED && x.run.persona === k; })[0].run;
  var last = r.levels[r.levels.length - 1];
  console.log('  ' + (r.finished ? 'WON ' : '    ') + k + ': ' + (r.finished ? 'beat the episode' : last.name + ' ' + last.result) +
    ', ' + r.deaths.length + ' deaths, Riley claims ' + r.riley.claims.filter(function (c) { return c.ok; }).length + '/' + r.riley.claims.length + ' true, ' + r.riley.claims.filter(function (c) { return !c.ok && !c.unsure; }).length + ' false');
  return r;
});
fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, 'playtest-report.md'), report(runs, personas, all));
var worlds = LEVELS.map(function (L, i) { var g = createGame({ levels: LEVELS, rng: makeRng(1), settings: { difficulty: 1, tips: false, seenTips: {} } }); g.startLevel(i, false); return g.state().W; });
var flow = writeFlow(OUT, LEVELS, worlds, FLOW);
flow.levels.forEach(function (f) {
  console.log('  flow ' + f.level + ': intensity ' + f.intensity.map(function (v) { return v == null ? '-' : Math.round(v); }).join('') + ', lost ' + Math.round(f.lostShare * 100) + '% of the time');
});
fs.writeFileSync(path.join(OUT, 'playtest-report.json'), JSON.stringify({ seed: SEED, seeds: SEEDS, difficulties: DIFFS, personaSource: personas.source, episodes: all }, null, 1));
console.log('Report: ' + path.join(OUT, 'playtest-report.md'));
