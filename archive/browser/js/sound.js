// FIREBIRD 3D — sound.js
// All sound effects and music are synthesized with WebAudio. No audio files.
'use strict';

var SND = (function () {

  var ac = null, master = null, sfxG = null, musG = null;
  var musicOn = true, musicRunning = false, volume = 0.5;
  try { musicOn = localStorage.getItem('firebird.music') !== 'off'; } catch (e) { }

  function init() {
    if (ac) { if (ac.state === 'suspended') ac.resume(); return true; }
    try {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return false;
      ac = new AC();
      master = ac.createGain(); master.gain.value = volume; master.connect(ac.destination);
      sfxG = ac.createGain(); sfxG.gain.value = 0.9; sfxG.connect(master);
      musG = ac.createGain(); musG.gain.value = 0.3; musG.connect(master);
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
    // Hollows (STYLE_GUIDE.md audio): hollow knocks, dry rasps, a glassy crack
    // when they break. No growls, no screams.
    impSight: function (v, pan) {
      noise({ dur: 0.35, gain: 0.22 * v, f0: 900, f1: 2400, type: 'bandpass', q: 4, pan: pan });                 // a dry rasp, like ash breathing
      tone({ f0: 180, f1: 150, dur: 0.08, type: 'triangle', gain: 0.25 * v, pan: pan, delay: 0.3 });               // knock
      tone({ f0: 180, f1: 150, dur: 0.08, type: 'triangle', gain: 0.2 * v, pan: pan, delay: 0.42 });               // knock
    },
    // the Reset Warden wakes: a basalt engine turning over and a cracked bronze bell
    knightSight: function (v, pan) {
      tone({ f0: 55, f1: 62, dur: 0.9, type: 'sine', gain: 0.45 * v, pan: pan });
      noise({ dur: 0.5, gain: 0.2 * v, f0: 300, f1: 120, type: 'lowpass', pan: pan });
      [[196, 0.1], [196 * 2.63, 0.05], [196 * 4.9, 0.025]].forEach(function (b) { tone({ f0: b[0], f1: b[0] * 0.98, dur: 1.1, type: 'sine', gain: b[1] * v, pan: pan, delay: 0.15 }); });
    },
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
    // the shell knocks when hit, and breaks like glass with the light going up
    enemyPain: function (v, pan) {
      tone({ f0: 240, f1: 170, dur: 0.07, type: 'triangle', gain: 0.24 * v, pan: pan });
      noise({ dur: 0.06, gain: 0.12 * v, f0: 1600, type: 'bandpass', q: 2, pan: pan });
    },
    enemyDie: function (v, pan) {
      noise({ dur: 0.12, gain: 0.3 * v, f0: 6000, f1: 2500, type: 'highpass', q: 0.8, pan: pan });                 // the crack
      noise({ dur: 0.4, gain: 0.12 * v, f0: 900, f1: 250, pan: pan, delay: 0.04 });                               // ash falls
      tone({ f0: 523, f1: 1046, dur: 0.45, type: 'sine', gain: 0.1 * v, pan: pan, delay: 0.08 });                  // the light rises
      tone({ f0: 784, f1: 1568, dur: 0.45, type: 'sine', gain: 0.06 * v, pan: pan, delay: 0.14 });
    },
    playerPain: function (v, pan) {
      tone({ f0: 170, f1: 90, dur: 0.16, type: 'square', gain: 0.3, pan: pan });
      noise({ dur: 0.1, gain: 0.15, f0: 500, f1: 200, pan: pan });
    },
    // the flame gutters, then a single ember glows: the Firebird always comes back
    playerDie: function (v, pan) {
      noise({ dur: 0.9, gain: 0.3, f0: 1800, f1: 120, pan: pan });
      tone({ f0: 330, f1: 110, dur: 0.9, type: 'triangle', gain: 0.25, pan: pan });
      tone({ f0: 440, f1: 660, dur: 0.6, type: 'sine', gain: 0.1, pan: pan, delay: 1.0 });
    },
    noAmmo: function (v, pan) { noise({ dur: 0.03, gain: 0.2, f0: 1800, type: 'bandpass', q: 3, pan: pan }); },
    // ---- v2 (WebGL) weapon sounds: layered thump + crack + tail. The classic
    // game keeps its own pistol/shotgun sounds above.
    pistol2: function (v, pan) {
      tone({ f0: 160, f1: 55, dur: 0.12, type: 'sine', gain: 0.45 * v, pan: pan });                               // the thump
      noise({ dur: 0.05, gain: 0.55 * v, f0: 5200, f1: 1800, type: 'highpass', q: 0.7, pan: pan });              // the crack
      noise({ dur: 0.32, gain: 0.22 * v, f0: 1400, f1: 180, pan: pan, delay: 0.02 });                            // the tail in the room
      tone({ f0: 2400, f1: 1100, dur: 0.09, type: 'triangle', gain: 0.1 * v, pan: pan });                          // the Spark Caster's aether chirp
    },
    shotgun2: function (v, pan) {
      tone({ f0: 110, f1: 32, dur: 0.34, type: 'sine', gain: 0.8 * v, pan: pan });
      tone({ f0: 70, f1: 30, dur: 0.22, type: 'triangle', gain: 0.4 * v, pan: pan });
      noise({ dur: 0.09, gain: 0.8 * v, f0: 4200, f1: 900, type: 'highpass', q: 0.6, pan: pan });
      noise({ dur: 0.6, gain: 0.35 * v, f0: 1100, f1: 90, pan: pan, delay: 0.03 });
      // the Bell Blaster rings: a bell's inharmonic partials under the boom
      [[392, 0.12], [392 * 2.76, 0.06], [392 * 5.4, 0.03]].forEach(function (b) { tone({ f0: b[0], f1: b[0] * 0.995, dur: 0.9, type: 'sine', gain: b[1] * v, pan: pan, delay: 0.02 }); });
    },
    // a hit on a Hollow: a dull knock on its ash shell and a dry crackle (v2 keeps the old name)
    hitFlesh: function (v, pan) {
      tone({ f0: 210, f1: 90, dur: 0.07, type: 'triangle', gain: 0.3 * v, pan: pan });
      noise({ dur: 0.05, gain: 0.28 * v, f0: 2600, type: 'bandpass', q: 1.6, pan: pan });
    },
    killConfirm: function (v, pan) {
      tone({ f0: 90, f1: 40, dur: 0.18, type: 'sine', gain: 0.5 * v, pan: pan });
      noise({ dur: 0.08, gain: 0.3 * v, f0: 5200, f1: 2600, type: 'highpass', q: 0.8, pan: pan });                // the shell cracks like glass
      tone({ f0: 660, f1: 990, dur: 0.25, type: 'sine', gain: 0.08 * v, pan: pan, delay: 0.04 });                  // and the light goes up
      tone({ f0: 990, f1: 1480, dur: 0.3, type: 'sine', gain: 0.05 * v, pan: pan, delay: 0.1 });
    },
    ricochet: function (v, pan) {
      var f = 1800 + Math.random() * 2400;
      tone({ f0: f, f1: f * 0.55, dur: 0.14 + Math.random() * 0.1, type: 'sine', gain: 0.08 * v, pan: pan });
    },
    casingTink: function (v, pan) {
      var f = 3200 + Math.random() * 1600;
      tone({ f0: f, f1: f * 0.9, dur: 0.05, type: 'triangle', gain: 0.05 * v, pan: pan });
    },
    // UI: soft bell ticks and chimes
    tally: function (v, pan) { tone({ f0: 1320, f1: 1310, dur: 0.06, type: 'sine', gain: 0.12, pan: pan }); },
    menu: function (v, pan) {
      tone({ f0: 880, f1: 875, dur: 0.12, type: 'sine', gain: 0.14, pan: pan });
      tone({ f0: 880 * 2.76, dur: 0.05, type: 'sine', gain: 0.03, pan: pan });
    },
    menuPick: function (v, pan) {
      tone({ f0: 660, f1: 655, dur: 0.3, type: 'sine', gain: 0.16 });
      tone({ f0: 990, f1: 985, dur: 0.4, type: 'sine', gain: 0.14, delay: 0.07 });
      tone({ f0: 990 * 2.76, dur: 0.12, type: 'sine', gain: 0.03, delay: 0.07 });
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

  // Tartarian bell: inharmonic partials, long ring (STYLE_GUIDE.md: bell and choir colour)
  function bell(t, f, gain) {
    [[1, 1], [2.76, 0.4], [5.4, 0.18], [0.5, 0.35]].forEach(function (pp) {
      var o = ac.createOscillator(), g = ac.createGain();
      o.type = 'sine'; o.frequency.value = f * pp[0];
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(gain * pp[1], t + 0.004);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 1.6 / Math.sqrt(pp[0]));
      o.connect(g); g.connect(musG); o.start(t); o.stop(t + 1.7);
    });
  }

  // a soft choir "aah": detuned sines swelling over two bars
  function choir(t, freqs) {
    var len = STEP * 32;
    freqs.forEach(function (f) {
      [-4, 4].forEach(function (cents) {
        var o = ac.createOscillator(), g = ac.createGain(), flt = ac.createBiquadFilter();
        o.type = 'triangle'; o.frequency.value = f * Math.pow(2, cents / 1200);
        flt.type = 'lowpass'; flt.frequency.value = 1200;
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(0.035, t + len * 0.4);
        g.gain.exponentialRampToValueAtTime(0.0001, t + len);
        o.connect(flt); flt.connect(g); g.connect(musG); o.start(t); o.stop(t + len + 0.05);
      });
    });
  }
  var CHORDS = [[329.63, 392, 493.88], [293.66, 369.99, 440], [261.63, 329.63, 392], [246.94, 311.13, 369.99]];

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
      // a bell on every other downbeat, and a choir swell every two bars
      if (s === 0 && bar % 2 === 0) bell(nextStepTime, [659.25, 587.33, 523.25, 493.88][(bar >> 1) % 4], 0.07);
      if (s === 0 && bar % 2 === 0) choir(nextStepTime, CHORDS[(bar >> 1) % 4]);
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

  function setMusic(on) {
    musicOn = !!on;
    try { localStorage.setItem('firebird.music', musicOn ? 'on' : 'off'); } catch (e) { }
    if (musicOn) startMusic(); else stopMusic();
    return musicOn;
  }

  function toggleMusic() { return setMusic(!musicOn); }

  // 0 = silent, 1 = loudest
  function setVolume(v) {
    volume = Math.max(0, Math.min(1, v)) * 0.72;
    if (master) master.gain.value = volume;
  }

  return {
    init: init,
    play: play,
    startMusic: startMusic,
    stopMusic: stopMusic,
    toggleMusic: toggleMusic,
    setMusic: setMusic,
    setVolume: setVolume,
    isMusicOn: function () { return musicOn; }
  };
})();

if (typeof module !== 'undefined') module.exports = SND;
