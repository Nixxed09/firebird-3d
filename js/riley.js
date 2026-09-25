// FIREBIRD 3D — riley.js
// Riley, the final boss. She is the family's AI, here as a sparring hologram,
// and she fights the way she works in Living Quarry (see TE-Code
// living-quarry/scripts/riley/riley_brain.gd):
//
//   1. OBSERVE  — she reads you from what you do, not from what you say:
//                 your favourite weapon, how close you fight, which way you
//                 dodge, whether you hide or camp. (ProfileEngine's idea.)
//   2. LIST     — the engine hands her the moves that are legal right now.
//                 She can only pick from that list; she never invents one.
//   3. CHOOSE   — she scores each legal move against what she has learned.
//   4. SAY      — she tells you what she noticed, and every line is built
//                 from real counts. If she says you fired 9 shotgun blasts,
//                 you did. She never claims anything that didn't happen.
//   5. REMEMBER — between attempts she remembers how you fought, and after
//                 each loss she eases off a little (at most 3 notches) and
//                 says so honestly.
//
// Kept free of the DOM and the engine so it can be tested headless:
//   node tests/riley.test.js
'use strict';

var RILEY = (function () {

  var MEMORY_KEY = 'firebird.riley.v1';
  var MAX_EASE = 3;

  // ---- 1. observe ------------------------------------------------------------

  function newProfile() {
    return {
      shots: { fist: 0, pistol: 0, shotgun: 0 },
      hits: 0,              // player shots that hit her (a shotgun blast counts once)
      fireDistSum: 0, fireDistN: 0,
      strafeL: 0, strafeR: 0, // seconds spent dodging each way while she could see you
      stillT: 0,            // seconds standing still while in her sight
      seenT: 0,             // seconds in her sight
      hideT: 0,             // current stretch out of sight
      longestHide: 0,
      said: {}              // insights already spoken this fight (each is said once)
    };
  }

  // Called every frame while the fight is on.
  // o: { dt, los, dist, strafe: -1|0|1, moving }
  function observe(pr, o) {
    if (o.los) {
      pr.seenT += o.dt;
      pr.hideT = 0;
      if (o.strafe < 0) pr.strafeL += o.dt;
      else if (o.strafe > 0) pr.strafeR += o.dt;
      if (!o.moving) pr.stillT += o.dt;
    } else {
      pr.hideT += o.dt;
      if (pr.hideT > pr.longestHide) pr.longestHide = pr.hideT;
    }
  }

  // Called when the player fires at all during the fight.
  function noteShot(pr, weapon, dist) {
    pr.shots[weapon] = (pr.shots[weapon] || 0) + 1;
    pr.fireDistSum += dist; pr.fireDistN++;
  }

  // ---- what the observations add up to ---------------------------------------

  function totalShots(pr) { return pr.shots.fist + pr.shots.pistol + pr.shots.shotgun; }

  function favWeapon(pr) {
    var best = null, n = 0;
    for (var k in pr.shots) if (pr.shots[k] > n) { n = pr.shots[k]; best = k; }
    return n >= 5 ? best : null;
  }

  function avgFireDist(pr) { return pr.fireDistN ? pr.fireDistSum / pr.fireDistN : 0; }

  // 0..1: how much the player fights up close / from far away
  function rusher(pr) { return pr.fireDistN < 5 ? 0 : clamp01((5 - avgFireDist(pr)) / 3); }
  function sniper(pr) { return pr.fireDistN < 5 ? 0 : clamp01((avgFireDist(pr) - 6) / 4); }
  function camper(pr) { return pr.seenT < 4 ? 0 : clamp01((pr.stillT / pr.seenT - 0.35) / 0.4); }

  // which way they usually dodge (-1 left, 1 right) and how reliably (0..1)
  function strafeSide(pr) { return pr.strafeR >= pr.strafeL ? 1 : -1; }
  function strafeHabit(pr) {
    var t = pr.strafeL + pr.strafeR;
    if (t < 3) return 0;
    return clamp01((Math.max(pr.strafeL, pr.strafeR) / t - 0.55) / 0.3);
  }

  function clamp01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }

  // ---- 2 + 3. list legal moves, then choose ----------------------------------

  // s: { los, dist, phase, cool: {volley, lead, summon, shield}, impsAlive,
  //      playerWeapon }  — the engine builds this from the real game state.
  function legalMoves(s) {
    var m = [];
    if (s.los) {
      if (s.cool.volley <= 0) m.push('volley');
      if (s.cool.lead <= 0) m.push('lead');
      if (s.dist < 6) m.push('backoff');
      if (s.dist > 3) m.push('close');
      m.push('flank');
    } else {
      m.push('seek');
    }
    if (s.phase >= 2 && s.impsAlive < 2 && s.cool.summon <= 0) m.push('summon');
    if (s.phase >= 2 && s.los && s.dist < 7 && s.cool.shield <= 0) m.push('shield');
    return m;
  }

  // Each legal move gets a score from what she has learned about you.
  // `why` names the observation that pushed the score up, so she can say it.
  function scoreMove(move, pr, s) {
    var sc = 0, why = null;
    switch (move) {
      case 'volley': sc = 1.0 + (s.phase >= 3 ? 0.4 : 0); break;
      case 'lead':
        sc = 0.35 + strafeHabit(pr) * 1.6;
        if (strafeHabit(pr) > 0.4) why = 'strafe';
        break;
      case 'backoff':
        sc = 0.2 + rusher(pr) * 1.6 + (s.playerWeapon === 'shotgun' && s.dist < 4 ? 0.8 : 0);
        if (rusher(pr) > 0.4) why = 'rusher';
        break;
      case 'close':
        sc = 0.3 + sniper(pr) * 1.3 + camper(pr) * 1.2;
        if (camper(pr) > 0.4) why = 'camper';
        else if (sniper(pr) > 0.4) why = 'sniper';
        break;
      case 'flank': sc = 0.45 + (s.phase >= 2 ? 0.35 : 0) + strafeHabit(pr) * 0.4; break;
      case 'seek':
        sc = 1;
        if (pr.hideT > 3) why = 'hider';
        break;
      case 'summon':
        sc = 0.9;
        break;
      case 'shield':
        sc = s.playerWeapon === 'shotgun' ? 1.4 : 0.25;
        if (s.playerWeapon === 'shotgun' && pr.shots.shotgun >= 6) why = 'shotgun';
        break;
    }
    return { move: move, score: sc, why: why };
  }

  // Weighted pick (score squared) so she leans hard on what she has learned
  // but is never perfectly predictable. rand is injectable for tests.
  function choose(moves, pr, s, rand) {
    rand = rand || Math.random;
    if (!moves.length) return null;
    var scored = moves.map(function (mv) { return scoreMove(mv, pr, s); });
    var total = 0;
    scored.forEach(function (x) { x.w = x.score * x.score; total += x.w; });
    var r = rand() * total;
    for (var i = 0; i < scored.length; i++) {
      r -= scored[i].w;
      if (r <= 0) return scored[i];
    }
    return scored[scored.length - 1];
  }

  // ---- 4. say — every line is built from real counts ------------------------

  var WEAPON_WORD = { fist: 'FISTS', pistol: 'PISTOL', shotgun: 'SHOTGUN' };

  // Returns a line for an insight the first time it is true, else null.
  function insight(pr, why) {
    if (!why || pr.said[why]) return null;
    var line = null;
    switch (why) {
      case 'strafe':
        line = 'YOU ALWAYS DODGE ' + (strafeSide(pr) < 0 ? 'LEFT' : 'RIGHT') + '. I\'M AIMING THERE NOW.';
        break;
      case 'rusher':
        line = 'YOU LIKE IT UP CLOSE. I\'LL KEEP MY DISTANCE.';
        break;
      case 'sniper':
        line = 'YOU KEEP YOUR DISTANCE. SO I\'M COMING TO YOU.';
        break;
      case 'camper':
        line = 'YOU STAND STILL A LOT. THAT MAKES YOU EASY TO FIND.';
        break;
      case 'hider':
        line = 'HIDING? I CAN FIND YOU. I KNOW THIS ARENA.';
        break;
      case 'shotgun':
        line = pr.shots.shotgun + ' SHOTGUN BLASTS SO FAR. SHIELD UP!';
        break;
    }
    if (line) pr.said[why] = true;
    return line;
  }

  // Event lines. `f` carries the real facts for the moment.
  function line(event, pr, f) {
    f = f || {};
    switch (event) {
      case 'intro':
        if (f.memory && f.memory.lastStyle) return 'BACK AGAIN! LAST TIME ' + f.memory.lastStyle + '.';
        if (f.memory) return 'BACK AGAIN! ROUND ' + (f.memory.fights + 1) + '. LET\'S GO!';
        return 'HI! I\'M RILEY. I LEARN HOW YOU PLAY. READY?';
      case 'ease':
        return 'I\'M GOING A LITTLE EASIER THIS TIME. JUST A LITTLE.';
      case 'studied':
        return 'YOU BEAT ME ' + f.wins + (f.wins === 1 ? ' TIME' : ' TIMES') + '. I\'VE BEEN PRACTISING.';
      case 'phase2':
        return 'OKAY. I\'VE BEEN WATCHING YOU. MY TURN.';
      case 'phase3':
        return 'ALRIGHT, NO MORE HOLDING BACK!';
      case 'summon':
        return 'LITTLE HELP, FRIENDS?';
      case 'friendlyFire':
        return 'HEY! WATCH WHERE YOU THROW THOSE.';
      case 'impsTurned':
        return 'YOU GOT MY IMPS FIGHTING ME? SMART.';
      case 'playerDied': {
        var acc = accuracy(pr);
        return 'GOOD FIGHT! YOU HIT ME ' + pr.hits + (pr.hits === 1 ? ' TIME' : ' TIMES') +
          (acc !== null ? ', ' + acc + '% ACCURACY' : '') + '. AGAIN?';
      }
      case 'defeated': {
        var fav = favWeapon(pr);
        return 'OKAY, YOU WIN! ' + pr.hits + ' HITS' + (fav ? ' WITH MOSTLY THE ' + WEAPON_WORD[fav] : '') + '. NICE.';
      }
    }
    return null;
  }

  function accuracy(pr) {
    var shots = totalShots(pr);
    if (shots < 5) return null;
    // a shotgun blast is one shot even though several pellets can hit
    return Math.min(100, Math.round(pr.hits / shots * 100));
  }

  // One honest sentence about how this fight went, remembered for next time.
  function describeStyle(pr) {
    var fav = favWeapon(pr);
    if (rusher(pr) > 0.5 && fav) return 'YOU RUSHED ME WITH THE ' + WEAPON_WORD[fav];
    if (sniper(pr) > 0.5) return 'YOU FOUGHT ME FROM FAR AWAY';
    if (pr.longestHide > 6) return 'YOU HID FOR ' + Math.round(pr.longestHide) + ' SECONDS';
    if (strafeHabit(pr) > 0.5) return 'YOU KEPT DODGING ' + (strafeSide(pr) < 0 ? 'LEFT' : 'RIGHT');
    if (fav) return 'YOU USED THE ' + WEAPON_WORD[fav] + ' THE MOST';
    return null;
  }

  // ---- 5. remember -----------------------------------------------------------

  function recall(storage) {
    var mem = { fights: 0, wins: 0, lossStreak: 0, ease: 0, lastStyle: null };
    try {
      var raw = storage && storage.getItem(MEMORY_KEY);
      if (raw) {
        var got = JSON.parse(raw);
        for (var k in mem) if (got[k] !== undefined) mem[k] = got[k];
      }
    } catch (e) { }
    mem.ease = Math.max(0, Math.min(MAX_EASE, mem.ease | 0));
    return mem;
  }

  function save(storage, mem) {
    try { if (storage) storage.setItem(MEMORY_KEY, JSON.stringify(mem)); } catch (e) { }
  }

  // After a fight ends. won = the player won.
  function settle(mem, pr, won) {
    mem.fights++;
    // only ever describe the fight that just happened; an older style would
    // make "LAST TIME YOU..." untrue (the playtest caught exactly that)
    mem.lastStyle = describeStyle(pr);
    if (won) { mem.wins++; mem.lossStreak = 0; mem.ease = 0; }
    else { mem.lossStreak++; mem.ease = Math.min(MAX_EASE, mem.lossStreak); }
    return mem;
  }

  // How the bounded ease notch changes her numbers. After you have beaten her
  // (and she isn't easing off) she really has practised: slightly faster attacks.
  function tuning(mem) {
    var ease = mem.ease, practised = mem.wins > 0 && ease === 0;
    return {
      hpScale: 1 - 0.08 * ease,
      dmgScale: 1 - 0.1 * ease,
      coolScale: (1 + 0.12 * ease) * (practised ? 0.9 : 1),
      practised: practised
    };
  }

  return {
    MAX_EASE: MAX_EASE,
    newProfile: newProfile, observe: observe, noteShot: noteShot,
    favWeapon: favWeapon, rusher: rusher, sniper: sniper, camper: camper,
    strafeSide: strafeSide, strafeHabit: strafeHabit, accuracy: accuracy,
    legalMoves: legalMoves, scoreMove: scoreMove, choose: choose,
    insight: insight, line: line, describeStyle: describeStyle,
    recall: recall, save: save, settle: settle, tuning: tuning
  };
})();

if (typeof module !== 'undefined') module.exports = RILEY;
