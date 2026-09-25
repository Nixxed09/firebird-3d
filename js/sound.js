// FIREBIRD 3D — sound.js
// All sound effects and music are synthesized with WebAudio. No audio files.
'use strict';

var SND = (function () {

  var ac = null, master = null, sfxG = null, musG = null;
  var musicOn = true, musicRunning = false;

  function init() {
    if (ac) { if (ac.state === 'suspended') ac.resume(); return true; }
    try {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return false;
      ac = new AC();
      master = ac.createGain(); master.gain.value = 0.5; master.connect(ac.destination);
      sfxG = ac.createGain(); sfxG.gain.value = 0.9; sfxG.connect(master);
      musG = ac.createGain(); musG.gain.value = 0.3; musG.connect(master);
      try { musicOn = localStorage.getItem('firebird.music') !== 'off'; } catch (e) { }
      return true;
    } catch (e) { return false; }
  }

  function tone(o) {
    // o: {f0, f1, dur, type, gain, pan, delay, wobble}
    if (!ac) return;
    var t0 = ac.currentTime + (o.delay || 0);
    var osc = ac.createOscillator();
    osc.type = o.type || 'square';
    osc.frequency.setValueAtTime(o.f0, t0);
    if (o.f1) osc.frequency.exponentialRampToValueAtTime(Math.max(20, o.f1), t0 + o.dur);
    var g = ac.createGain();
    var peak = o.gain || 0.3;
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(peak, t0 + (o.attack || 0.008));
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + o.dur);
    var dest = sfxG;
    if (o.pan && ac.createStereoPanner) {
      var p = ac.createStereoPanner(); p.pan.value = Math.max(-1, Math.min(1, o.pan));
      g.connect(p); p.connect(o.bus || sfxG); dest = null;
    } else {
      g.connect(o.bus || sfxG);
    }
    if (o.wobble) {
      var lfo = ac.createOscillator(), lg = ac.createGain();
      lfo.frequency.value = o.wobble; lg.gain.value = o.f0 * 0.25;
      lfo.connect(lg); lg.connect(osc.frequency);
      lfo.start(t0); lfo.stop(t0 + o.dur);
    }
    osc.connect(g);
    osc.start(t0); osc.stop(t0 + o.dur + 0.02);
  }

  var noiseBuf = null;
  function getNoise() {
    if (noiseBuf) return noiseBuf;
    var len = ac.sampleRate * 1.5;
    noiseBuf = ac.createBuffer(1, len, ac.sampleRate);
    var d = noiseBuf.getChannelData(0);
    for (var i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    return noiseBuf;
  }

  function noise(o) {
    // o: {dur, gain, f0, f1, type('lowpass'|'highpass'|'bandpass'), q, pan, delay}
    if (!ac) return;
    var t0 = ac.currentTime + (o.delay || 0);
    var src = ac.createBufferSource();
    src.buffer = getNoise(); src.loop = true;
    var flt = ac.createBiquadFilter();
    flt.type = o.type || 'lowpass';
    flt.frequency.setValueAtTime(o.f0 || 1000, t0);
    if (o.f1) flt.frequency.exponentialRampToValueAtTime(Math.max(30, o.f1), t0 + o.dur);
    flt.Q.value = o.q || 0.8;
    var g = ac.createGain();
    var peak = o.gain || 0.3;
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(peak, t0 + (o.attack || 0.006));
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + o.dur);
    src.connect(flt); flt.connect(g);
    if (o.pan && ac.createStereoPanner) {
      var p = ac.createStereoPanner(); p.pan.value = Math.max(-1, Math.min(1, o.pan));
      g.connect(p); p.connect(sfxG);
    } else g.connect(sfxG);
    src.start(t0); src.stop(t0 + o.dur + 0.02);
  }

  // Each effect takes v = volume scale (distance attenuation) and pan (-1..1)
  var FX = {
    pistol: function (v, pan) {
      noise({ dur: 0.14, gain: 0.5 * v, f0: 2400, f1: 300, pan: pan });
      tone({ f0: 220, f1: 90, dur: 0.08, type: 'square', gain: 0.2 * v, pan: pan });
    },
    shotgun: function (v, pan) {
      noise({ dur: 0.38, gain: 0.8 * v, f0: 1600, f1: 120, pan: pan });
      tone({ f0: 130, f1: 45, dur: 0.3, type: 'sawtooth', gain: 0.35 * v, pan: pan });
    },
    pump: function (v, pan) {
      noise({ dur: 0.05, gain: 0.3 * v, f0: 900, type: 'bandpass', q: 2, delay: 0, pan: pan });
      noise({ dur: 0.05, gain: 0.3 * v, f0: 700, type: 'bandpass', q: 2, delay: 0.13, pan: pan });
    },
    punch: function (v, pan) {
      noise({ dur: 0.1, gain: 0.25 * v, f0: 500, f1: 150, pan: pan });
      tone({ f0: 90, f1: 50, dur: 0.1, type: 'sine', gain: 0.4 * v, pan: pan });
    },
    whiff: function (v, pan) { noise({ dur: 0.12, gain: 0.15 * v, f0: 600, f1: 1400, type: 'bandpass', q: 1.5, pan: pan }); },
    doorOpen: function (v, pan) {
      noise({ dur: 0.5, gain: 0.22 * v, f0: 200, f1: 500, pan: pan });
      tone({ f0: 70, f1: 130, dur: 0.5, type: 'sawtooth', gain: 0.12 * v, pan: pan });
    },
    doorClose: function (v, pan) {
      noise({ dur: 0.4, gain: 0.2 * v, f0: 400, f1: 150, pan: pan });
      tone({ f0: 120, f1: 60, dur: 0.4, type: 'sawtooth', gain: 0.12 * v, pan: pan });
      tone({ f0: 60, dur: 0.08, type: 'sine', gain: 0.3 * v, delay: 0.38, pan: pan });
    },
    locked: function (v, pan) {
      tone({ f0: 150, dur: 0.09, type: 'square', gain: 0.25 * v, pan: pan });
      tone({ f0: 110, dur: 0.12, type: 'square', gain: 0.25 * v, delay: 0.11, pan: pan });
    },
    switchFlip: function (v, pan) {
      noise({ dur: 0.06, gain: 0.3 * v, f0: 1200, type: 'bandpass', q: 2, pan: pan });
      tone({ f0: 90, f1: 55, dur: 0.18, type: 'square', gain: 0.3 * v, delay: 0.05, pan: pan });
    },
    pickup: function (v, pan) {
      tone({ f0: 660, dur: 0.06, type: 'square', gain: 0.15 * v, pan: pan });
      tone({ f0: 880, dur: 0.08, type: 'square', gain: 0.15 * v, delay: 0.06, pan: pan });
    },
    health: function (v, pan) {
      tone({ f0: 440, dur: 0.08, type: 'sine', gain: 0.25 * v, pan: pan });
      tone({ f0: 587, dur: 0.12, type: 'sine', gain: 0.25 * v, delay: 0.07, pan: pan });
    },
    keyPickup: function (v, pan) {
      [523, 659, 784, 1047].forEach(function (f, i) {
        tone({ f0: f, dur: 0.09, type: 'square', gain: 0.16, delay: i * 0.07, pan: pan });
      });
    },
    weaponUp: function (v, pan) {
      [180, 260, 380, 520].forEach(function (f, i) {
        tone({ f0: f, dur: 0.08, type: 'sawtooth', gain: 0.18, delay: i * 0.05, pan: pan });
      });
    },
    secret: function (v, pan) {
      [880, 1108, 1318, 1760].forEach(function (f, i) {
        tone({ f0: f, dur: 0.14, type: 'triangle', gain: 0.2, delay: i * 0.09, pan: pan });
      });
    },
    orb: function (v, pan) {
      [220, 330, 440, 660, 880].forEach(function (f, i) {
        tone({ f0: f, dur: 0.2, type: 'triangle', gain: 0.2, delay: i * 0.08, pan: pan });
      });
    },
    impSight: function (v, pan) { tone({ f0: 110, f1: 55, dur: 0.5, type: 'sawtooth', gain: 0.3 * v, wobble: 9, pan: pan }); },
    knightSight: function (v, pan) { tone({ f0: 75, f1: 35, dur: 0.9, type: 'sawtooth', gain: 0.4 * v, wobble: 6, pan: pan }); },
    rileySight: function (v, pan) {
      [523, 659, 784, 1047].forEach(function (f, i) {
        tone({ f0: f, dur: 0.12, type: 'triangle', gain: 0.22 * v, delay: i * 0.07, pan: pan });
      });
    },
    rileyTalk: function (v, pan) {
      tone({ f0: 880, f1: 1320, dur: 0.06, type: 'square', gain: 0.08 });
      tone({ f0: 1320, dur: 0.05, type: 'square', gain: 0.07, delay: 0.07 });
    },
    rileyShoot: function (v, pan) { tone({ f0: 1400, f1: 500, dur: 0.18, type: 'triangle', gain: 0.25 * v, pan: pan }); },
    rileyShield: function (v, pan) { tone({ f0: 300, f1: 900, dur: 0.3, type: 'sine', gain: 0.3 * v, wobble: 18, pan: pan }); },
    rileyDerez: function (v, pan) {
      [1568, 1319, 1047, 784, 659, 523, 392].forEach(function (f, i) {
        tone({ f0: f, dur: 0.14, type: 'triangle', gain: 0.2, delay: i * 0.09, pan: pan });
      });
    },
    impShoot: function (v, pan) { noise({ dur: 0.22, gain: 0.25 * v, f0: 400, f1: 1200, type: 'bandpass', q: 1.5, pan: pan }); },
    fireExplode: function (v, pan) {
      noise({ dur: 0.3, gain: 0.4 * v, f0: 900, f1: 100, pan: pan });
    },
    barrelBoom: function (v, pan) {
      noise({ dur: 0.7, gain: 0.9 * v, f0: 1400, f1: 60, pan: pan });
      tone({ f0: 65, f1: 28, dur: 0.6, type: 'sine', gain: 0.6 * v, pan: pan });
    },
    enemyPain: function (v, pan) { tone({ f0: 200, f1: 120, dur: 0.13, type: 'square', gain: 0.22 * v, pan: pan }); },
    enemyDie: function (v, pan) {
      tone({ f0: 170, f1: 40, dur: 0.5, type: 'sawtooth', gain: 0.3 * v, wobble: 12, pan: pan });
      noise({ dur: 0.25, gain: 0.2 * v, f0: 700, f1: 150, delay: 0.05, pan: pan });
    },
    playerPain: function (v, pan) {
      tone({ f0: 170, f1: 90, dur: 0.16, type: 'square', gain: 0.3, pan: pan });
      noise({ dur: 0.1, gain: 0.15, f0: 500, f1: 200, pan: pan });
    },
    playerDie: function (v, pan) {
      tone({ f0: 220, f1: 28, dur: 1.3, type: 'sawtooth', gain: 0.4, wobble: 5, pan: pan });
    },
    noAmmo: function (v, pan) { noise({ dur: 0.03, gain: 0.2, f0: 1800, type: 'bandpass', q: 3, pan: pan }); },
    tally: function (v, pan) { tone({ f0: 990, dur: 0.03, type: 'square', gain: 0.12, pan: pan }); },
    menu: function (v, pan) { tone({ f0: 520, dur: 0.05, type: 'square', gain: 0.15, pan: pan }); },
    menuPick: function (v, pan) {
      tone({ f0: 520, dur: 0.06, type: 'square', gain: 0.18 });
      tone({ f0: 780, dur: 0.09, type: 'square', gain: 0.18, delay: 0.06 });
    }
  };

  function play(name, dist, pan) {
    if (!ac || ac.state === 'suspended') return;
    var fn = FX[name];
    if (!fn) return;
    var v = 1 / (1 + (dist || 0) * 0.13);
    if (v < 0.04) return;
    try { fn(v, pan || 0); } catch (e) { }
  }

  // ---- music: driving bass gallop ------------------------------------------

  var BPM = 168, STEP = 60 / BPM / 4;
  var walk = [164.81, 164.81, 146.83, 130.81, 123.47, 130.81, 146.83, 155.56];
  var musTimer = null, nextStepTime = 0, stepIdx = 0;

  function bassNote(t, f, accent) {
    var osc = ac.createOscillator(), osc2 = ac.createOscillator();
    osc.type = 'sawtooth'; osc2.type = 'square';
    osc.frequency.value = f; osc2.frequency.value = f * 0.5;
    var flt = ac.createBiquadFilter();
    flt.type = 'lowpass';
    flt.frequency.setValueAtTime(accent ? 1400 : 800, t);
    flt.frequency.exponentialRampToValueAtTime(200, t + STEP * 1.8);
    var g = ac.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(accent ? 0.5 : 0.34, t + 0.005);
    g.gain.exponentialRampToValueAtTime(0.0001, t + STEP * (accent ? 1.9 : 0.9));
    osc.connect(flt); osc2.connect(flt); flt.connect(g); g.connect(musG);
    osc.start(t); osc.stop(t + STEP * 2);
    osc2.start(t); osc2.stop(t + STEP * 2);
  }

  function drum(t, kind) {
    if (kind === 'kick') {
      var o = ac.createOscillator(); o.type = 'sine';
      o.frequency.setValueAtTime(110, t);
      o.frequency.exponentialRampToValueAtTime(40, t + 0.1);
      var g = ac.createGain();
      g.gain.setValueAtTime(0.5, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
      o.connect(g); g.connect(musG); o.start(t); o.stop(t + 0.13);
    } else {
      var src = ac.createBufferSource(); src.buffer = getNoise(); src.loop = true;
      var f = ac.createBiquadFilter();
      f.type = 'highpass'; f.frequency.value = kind === 'snare' ? 1800 : 6000;
      var g2 = ac.createGain();
      g2.gain.setValueAtTime(kind === 'snare' ? 0.3 : 0.12, t);
      g2.gain.exponentialRampToValueAtTime(0.001, t + (kind === 'snare' ? 0.09 : 0.03));
      src.connect(f); f.connect(g2); g2.connect(musG);
      src.start(t); src.stop(t + 0.1);
    }
  }

  function scheduler() {
    if (!musicRunning || !ac) return;
    while (nextStepTime < ac.currentTime + 0.15) {
      var s = stepIdx % 16;                      // step in bar
      var bar = Math.floor(stepIdx / 16);
      var group = s >> 2, gs = s & 3;            // 4 groups of 4 sixteenths
      var E = 82.41;
      if (gs === 0) bassNote(nextStepTime, E, false);
      else if (gs === 2) bassNote(nextStepTime, E, false);
      else if (gs === 3) bassNote(nextStepTime, walk[(bar * 4 + group) % walk.length], true);
      if (s === 0 || s === 8) drum(nextStepTime, 'kick');
      if (s === 4 || s === 12) drum(nextStepTime, 'snare');
      if ((s & 1) === 0) drum(nextStepTime, 'hat');
      nextStepTime += STEP;
      stepIdx++;
    }
    musTimer = setTimeout(scheduler, 40);
  }

  function startMusic() {
    if (!ac || !musicOn || musicRunning) return;
    musicRunning = true;
    nextStepTime = ac.currentTime + 0.05;
    stepIdx = 0;
    scheduler();
  }

  function stopMusic() {
    musicRunning = false;
    if (musTimer) { clearTimeout(musTimer); musTimer = null; }
  }

  function toggleMusic() {
    musicOn = !musicOn;
    try { localStorage.setItem('firebird.music', musicOn ? 'on' : 'off'); } catch (e) { }
    if (musicOn) startMusic(); else stopMusic();
    return musicOn;
  }

  return {
    init: init,
    play: play,
    startMusic: startMusic,
    stopMusic: stopMusic,
    toggleMusic: toggleMusic,
    isMusicOn: function () { return musicOn; }
  };
})();
