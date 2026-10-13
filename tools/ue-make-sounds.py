# Synthesizes every FIREBIRD sound effect as a 44.1 kHz 16-bit mono WAV into
# engine/Content/Firebird/Sounds/Source/. No samples, no downloads: each sound is
# a recipe below, in the STYLE_GUIDE's audio identity (warm and driving, bell
# and choir colour; Hollows knock, rasp and crack like glass, never scream).
# Recipes grew out of v2's WebAudio synth (js/sound.js), rebuilt with more body.
#   python tools/ue-make-sounds.py            -> writes the WAVs
#   python tools/ue-make-sounds.py --sample   -> also docs/evidence/ue-sound/all-sounds.wav
import os
import sys
import wave

import numpy as np
from scipy import signal

SR = 44100
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "engine", "Content", "Firebird", "Sounds", "Source")
rng = np.random.default_rng(1993)   # fixed seed: the same bytes every run


# ---- building blocks ---------------------------------------------------------

def n(dur):
    return int(SR * dur)


def silence(dur):
    return np.zeros(n(dur))


def sweep(f0, f1, dur, curve="exp"):
    """frequency per sample, f0 -> f1"""
    k = np.linspace(0, 1, n(dur), endpoint=False)
    if curve == "exp":
        return f0 * (f1 / f0) ** k
    return f0 + (f1 - f0) * k


def osc(f0, f1, dur, kind="sine", curve="exp"):
    f = sweep(f0, f1, dur, curve)
    ph = 2 * np.pi * np.cumsum(f) / SR
    if kind == "sine":
        return np.sin(ph)
    if kind == "tri":
        return 2 / np.pi * np.arcsin(np.sin(ph))
    if kind == "saw":
        return 2 * ((ph / (2 * np.pi)) % 1.0) - 1
    if kind == "square":
        return np.sign(np.sin(ph)) * 0.7
    raise ValueError(kind)


def env(dur, attack=0.005, release=None, curve=4.0, hold=0.0):
    """attack ramp, optional hold, then an exponential-ish fall to zero"""
    m = n(dur)
    e = np.ones(m)
    a = max(1, n(attack))
    e[:a] = np.linspace(0, 1, a)
    h = a + n(hold)
    if h < m:
        k = np.linspace(0, 1, m - h)
        e[h:] = (1 - k) ** curve
    return e


def swell(dur, peak_at=0.8, curve=2.0):
    """rises to a peak, then falls fast: a crescendo"""
    m = n(dur)
    p = max(1, int(m * peak_at))
    e = np.zeros(m)
    e[:p] = np.linspace(0, 1, p) ** curve
    e[p:] = np.linspace(1, 0, m - p) ** 1.5
    return e


def noise(dur, color="white"):
    w = rng.standard_normal(n(dur))
    if color == "brown":
        w = np.cumsum(w)
        w = signal.lfilter([1], [1, -0.995], np.diff(w, prepend=0))
        w /= np.max(np.abs(w)) + 1e-9
    return w


def filt(x, kind, f, q=None, order=2):
    nyq = SR / 2
    if kind == "band":
        lo, hi = f
        b, a = signal.butter(order, [max(20, lo) / nyq, min(hi, nyq * 0.95) / nyq], btype="band")
    else:
        b, a = signal.butter(order, min(f, nyq * 0.95) / nyq, btype="low" if kind == "low" else "high")
    return signal.lfilter(b, a, x)


def swept_band(x, f0, f1, width=0.5, order=2, block=256):
    """band-pass whose centre glides f0 -> f1 (block-wise, state carried)"""
    out = np.zeros_like(x)
    cs = sweep(f0, f1, len(x) / SR)
    zi = None
    for i in range(0, len(x), block):
        c = cs[min(i, len(cs) - 1)]
        lo, hi = c * (1 - width / 2), c * (1 + width / 2)
        b, a = signal.butter(order, [max(20, lo) / (SR / 2), min(hi, SR / 2 * 0.95) / (SR / 2)], btype="band")
        if zi is None:
            zi = signal.lfilter_zi(b, a) * 0
        seg, zi = signal.lfilter(b, a, x[i:i + block], zi=zi)
        out[i:i + block] = seg
    return out


def bell(f, dur, bright=1.0, decay=1.0):
    """an inharmonic bell: Tartarian bronze, struck once"""
    parts = [(0.5, 0.35, 1.6), (1.0, 1.0, 1.0), (2.0, 0.55, 0.7), (2.76, 0.4 * bright, 0.5),
             (5.4, 0.22 * bright, 0.3), (8.93, 0.1 * bright, 0.18)]
    out = np.zeros(n(dur))
    for ratio, amp, life in parts:
        if f * ratio > SR / 2 * 0.9:
            continue
        out += amp * osc(f * ratio, f * ratio, dur) * env(dur, 0.002, curve=3.0 / (life * decay))
    return out / 2.2


def crackle(dur, density=60, bright=4000):
    """embers popping: sparse clicks, each a tiny filtered burst"""
    out = np.zeros(n(dur))
    count = int(density * dur)
    for _ in range(count):
        at = rng.integers(0, max(1, n(dur) - 400))
        length = rng.integers(40, 300)
        click = rng.standard_normal(length) * np.linspace(1, 0, length) ** 2 * rng.uniform(0.3, 1.0)
        out[at:at + length] += click
    return filt(out, "high", bright * 0.5)


def voice(f, dur, formants=((700, 1.0), (1150, 0.6), (2600, 0.25)), vibrato=5.0, detune=0.004):
    """a soft choir 'aah': three detuned saws through vowel formants"""
    out = np.zeros(n(dur))
    vib = 1 + 0.004 * np.sin(2 * np.pi * vibrato * np.arange(n(dur)) / SR + rng.uniform(0, 6))
    for d in (-detune, 0, detune):
        ph = 2 * np.pi * np.cumsum(f * (1 + d) * vib) / SR
        out += 2 * ((ph / (2 * np.pi)) % 1.0) - 1
    shaped = np.zeros_like(out)
    for fc, g in formants:
        shaped += g * filt(out, "band", (fc * 0.85, fc * 1.15))
    return shaped / 3


def room(x, size=0.6, wet=0.25, tone=5000, circular=False):
    """a stone-hall reverb: convolution with a decaying noise tail"""
    ir_len = n(size)
    ir = rng.standard_normal(ir_len) * np.exp(-np.linspace(0, 7, ir_len))
    ir = filt(ir, "low", tone)
    ir /= np.sqrt(np.sum(ir ** 2)) + 1e-9
    if circular:
        L = len(x)
        tail = np.fft.irfft(np.fft.rfft(x, L) * np.fft.rfft(ir[:L] if ir_len > L else np.pad(ir, (0, L - ir_len)), L), L)
        return x * (1 - wet) + tail * wet * 1.5
    tail = signal.fftconvolve(x, ir)[:len(x)]
    return x * (1 - wet) + tail * wet * 1.5


def mix(*parts):
    L = max(len(p) for p in parts)
    out = np.zeros(L)
    for p in parts:
        out[:len(p)] += p
    return out


def at(x, delay):
    return np.concatenate([silence(delay), x])


def fade(x, fin=0.002, fout=0.01):
    x = x.copy()
    a, b = n(fin), n(fout)
    if a:
        x[:a] *= np.linspace(0, 1, a)
    if b:
        x[-b:] *= np.linspace(1, 0, b)
    return x


def master(x, peak_db=-1.0, drive=1.2):
    """gentle saturation for warmth, then normalize to the peak"""
    x = np.tanh(x * drive) / np.tanh(drive)
    x = x - np.mean(x)
    p = np.max(np.abs(x)) + 1e-9
    return x / p * 10 ** (peak_db / 20)


# ---- the sounds ----------------------------------------------------------------

def footstep(v):
    pitch = [1.0, 0.9, 1.12][v]
    thud = osc(110 * pitch, 50, 0.07) * env(0.07, 0.002, curve=3)
    grit = filt(noise(0.05), "band", (700 * pitch, 2400 * pitch)) * env(0.05, 0.001, curve=5) * 0.55
    return master(room(mix(thud, grit), 0.25, 0.12), -6)


def jump():
    whoosh = swept_band(noise(0.2), 400, 1300, 0.7) * swell(0.2, 0.35) * 0.8
    lift = osc(180, 330, 0.16, "tri") * env(0.16, 0.01, curve=2) * 0.35
    return master(mix(whoosh, lift), -4)


def land():
    thud = osc(85, 38, 0.18) * env(0.18, 0.002, curve=3)
    dust = filt(noise(0.14), "low", 900) * env(0.14, 0.002, curve=4) * 0.7
    return master(room(mix(thud, dust), 0.3, 0.15), -3)


def dash():
    d = 0.42
    whoosh = swept_band(noise(d), 300, 2600, 0.8) * swell(d, 0.3, 1.5)
    roar = filt(noise(d, "brown"), "low", 500) * swell(d, 0.25) * 0.8
    embers = crackle(d, 90, 3500) * swell(d, 0.4, 1.0) * 0.5
    flare = osc(140, 70, d, "saw") * env(d, 0.01, curve=3) * 0.12
    return master(room(mix(whoosh, roar, embers, filt(flare, "low", 900)), 0.4, 0.15), -2)


def slide():
    d = 0.75
    scrape = filt(noise(d), "band", (1400, 3400)) * (0.6 + 0.4 * filt(rng.standard_normal(n(d)), "low", 40))
    scrape *= env(d, 0.03, curve=1.6)
    body = filt(noise(d, "brown"), "low", 300) * env(d, 0.02, curve=2) * 0.6
    sparks = crackle(d, 50, 5000) * env(d, 0.01, curve=2) * 0.4
    return master(mix(scrape * 0.7, body, sparks), -5)


def spark_fire():
    crack = filt(noise(0.04), "high", 2200) * env(0.04, 0.0005, curve=6)
    chirp = osc(2600, 820, 0.09, "sine") * env(0.09, 0.001, curve=2.2) * 0.7
    shimmer = osc(5200, 1800, 0.06, "tri") * env(0.06, 0.001, curve=3) * 0.2
    thump = osc(140, 55, 0.07) * env(0.07, 0.001, curve=3) * 0.8
    return master(room(mix(crack, chirp, shimmer, thump), 0.35, 0.18, 7000), -1.5, 1.6)


def spark_hit_wall():
    tick = filt(noise(0.035), "band", (2500, 6000)) * env(0.035, 0.0005, curve=5)
    ping = bell(3100, 0.18, 0.6, 2.5) * 0.35
    chips = crackle(0.12, 120, 6000) * env(0.12, 0.001, curve=3) * 0.4
    return master(mix(tick, ping, chips), -7)


def spark_hit_hollow():
    # a hollow knock: ash shell, woody and empty inside
    knock = (osc(240, 200, 0.14) + 0.5 * osc(370, 330, 0.14)) * env(0.14, 0.001, curve=5)
    wood = filt(noise(0.06), "band", (650, 1300)) * env(0.06, 0.001, curve=5) * 0.9
    sizzle = filt(noise(0.12), "high", 4000) * env(0.12, 0.001, curve=3) * 0.15
    return master(room(mix(knock, wood, sizzle), 0.2, 0.1), -3)


def fist_swing():
    d = 0.17
    whoosh = swept_band(noise(d), 450, 1600, 0.7) * swell(d, 0.45, 1.3)
    flame = filt(noise(d, "brown"), "low", 700) * swell(d, 0.5) * 0.5
    return master(mix(whoosh, flame), -6)


def fist_hit():
    thump = osc(120, 42, 0.22) * env(0.22, 0.001, curve=3.5)
    smack = filt(noise(0.07), "low", 1800) * env(0.07, 0.0005, curve=4) * 1.2
    knock = osc(190, 160, 0.12) * env(0.12, 0.001, curve=5) * 0.6
    embers = crackle(0.25, 60, 3000) * env(0.25, 0.005, curve=2) * 0.35
    return master(room(mix(thump, smack, knock, embers), 0.35, 0.15), -1, 1.8)


def glass(dur, base, count, spread=0.02):
    """a glassy crack: high inharmonic pings fired in a quick ripple"""
    out = np.zeros(n(dur))
    for i in range(count):
        f = base * rng.uniform(0.8, 1.8)
        ping = osc(f, f * 0.97, dur * 0.6) * env(dur * 0.6, 0.0005, curve=8) * rng.uniform(0.4, 1.0)
        out = mix(out, at(ping, i * spread * rng.uniform(0.6, 1.4)))[:n(dur)]
    snap = filt(noise(0.03), "high", 3500) * env(0.03, 0.0003, curve=6) * 1.3
    return mix(out / max(1, count / 3), snap)


def crack():
    c1 = glass(0.35, 3200, 6)
    c2 = at(glass(0.3, 2600, 5), 0.07)
    c3 = at(glass(0.25, 4000, 4), 0.13)
    groan = osc(160, 110, 0.35, "tri") * env(0.35, 0.02, curve=2) * 0.25   # the shell giving way
    return master(room(mix(c1, c2 * 0.8, c3 * 0.7, groan), 0.5, 0.2, 8000), -2)


def release():
    # the reward: light freed from the shell. A rising bell arpeggio in D major,
    # a choir swelling up underneath, a whoosh that climbs, all in a stone hall.
    d = 2.2
    notes = [587.33, 880.0, 1174.66, 1479.98]   # D5 A5 D6 F#6
    bells = np.zeros(n(d))
    for i, f in enumerate(notes):
        bells += at(bell(f, d - i * 0.07, 1.0, 1.2) * (1.0 - i * 0.1), i * 0.07)[:n(d)]
    choir = np.zeros(n(d))
    for f in (293.66, 369.99, 440.0, 587.33):   # D4 F#4 A4 D5
        choir += voice(f, d) * swell(d, 0.35, 1.2)
    rise = swept_band(noise(d), 300, 6000, 0.5) * swell(d, 0.25, 2) * 0.35
    shimmer = filt(noise(d), "high", 7000) * swell(d, 0.3) * 0.08
    sub = osc(73.4, 73.4, d) * env(d, 0.02, curve=3) * 0.3   # D2 underneath: weight
    return master(room(mix(bells * 1.1, choir * 0.55, rise, shimmer, sub), 1.6, 0.35, 6500), -1)


def hollow_break():
    c = glass(0.4, 2800, 9, 0.015)
    knock = osc(150, 90, 0.3) * env(0.3, 0.001, curve=3) * 0.8
    crumble = np.zeros(n(0.8))
    for i in range(40):   # ash grains falling
        g = filt(noise(0.03), "band", (300, 1400)) * env(0.03, 0.001, curve=4) * rng.uniform(0.1, 0.5)
        crumble = mix(crumble, at(g, 0.05 + i * 0.016 * rng.uniform(0.5, 1.5)))[:n(0.8)]
    lightup = osc(660, 1320, 0.5, "sine") * swell(0.5, 0.3) * 0.18   # a little of the light escaping
    return master(room(mix(c, knock, crumble, at(lightup, 0.1)), 0.6, 0.2), -1.5)


def hollow_windup():
    # the tell: a dry rasp that climbs for 0.65 s, then cuts. Must read from across a room.
    d = 0.65
    rasp_mod = 0.55 + 0.45 * np.sign(np.sin(2 * np.pi * np.cumsum(sweep(28, 55, d)) / SR))
    rasp = swept_band(noise(d), 350, 1900, 0.6) * rasp_mod
    tone = filt(osc(110, 330, d, "saw"), "low", 1800) * 0.3
    seethe = filt(noise(d), "high", 5000) * 0.12
    e = swell(d, 0.97, 1.6)
    return master(mix(rasp, tone, seethe) * e, -2)


def ember_throw():
    d = 0.45
    whoosh = swept_band(noise(d), 1400, 600, 0.6) * env(d, 0.02, curve=1.5)
    sizzle = filt(noise(d), "high", 4500) * (0.5 + 0.5 * np.sin(2 * np.pi * 23 * np.arange(n(d)) / SR)) * env(d, 0.01, curve=2) * 0.35
    pop = crackle(d, 40, 3000) * env(d, 0.01) * 0.3
    return master(mix(whoosh, sizzle, pop), -4)


def ember_hit_player():
    hiss = filt(noise(0.35), "high", 3000) * env(0.35, 0.001, curve=2.5) * 0.7
    thud = osc(100, 45, 0.18) * env(0.18, 0.001, curve=3)
    pops = crackle(0.35, 120, 3000) * env(0.35, 0.002, curve=2) * 0.5
    return master(mix(hiss, thud, pops), -2)


def player_hurt():
    # a dull hit and a short falling "huh": a knock, not a scream
    thud = osc(130, 60, 0.15) * env(0.15, 0.001, curve=3)
    oof = voice(220, 0.18, ((500, 1.0), (900, 0.5), (2400, 0.15))) * env(0.18, 0.01, curve=2)
    oof = oof * np.linspace(1, 0.6, len(oof))
    return master(mix(thud, oof * 0.7), -3)


def player_death():
    # the flame gutters: a slow falling tone, a last few embers, a soft low bell
    d = 1.4
    fall = filt(osc(420, 70, d, "saw"), "low", 1400) * env(d, 0.02, curve=1.6) * 0.5
    embers = crackle(d, 30, 2500) * env(d, 0.01, curve=2.5) * 0.5
    low = bell(146.83, d, 0.4, 0.8) * 0.6
    return master(room(mix(fall, embers, at(low, 0.25)[:n(d)]), 1.0, 0.3), -3)


def respawn():
    # it only burns brighter: a roar that climbs into a bright bell
    d = 1.3
    roar = swept_band(noise(d), 180, 3800, 0.9) * swell(d, 0.75, 1.5)
    rise = osc(220, 880, d, "tri") * swell(d, 0.8, 2) * 0.35
    embers = crackle(d, 80, 3500) * swell(d, 0.7) * 0.4
    ding = at(bell(880, 0.9, 1.0, 1.2), d * 0.75)
    return master(room(mix(roar, rise, embers, ding * 0.9), 0.9, 0.25), -1.5)


def riley_radio():
    d = 0.3
    beep1 = osc(1400, 1400, 0.06, "square") * env(0.06, 0.002, curve=1.5)
    beep2 = at(osc(1850, 1850, 0.08, "square") * env(0.08, 0.002, curve=1.5), 0.08)
    static = filt(noise(d), "band", (1500, 4500)) * env(d, 0.005, curve=1.5) * 0.25
    radio = filt(mix(beep1, beep2, static), "band", (500, 4000))
    return master(radio, -8)


def ui_tick():
    return master(mix(bell(1760, 0.16, 0.5, 2.5), filt(noise(0.01), "high", 4000) * env(0.01, 0.0005) * 0.2), -9)


def ambience_loop():
    # distant fire and ash wind, 8 s, seamless
    d = 8.0
    m = n(d)
    fire = filt(noise(d + 1, "brown"), "low", 380) * 0.9
    wind_amt = 0.5 + 0.5 * np.sin(2 * np.pi * np.arange(n(d + 1)) / SR / (d + 1) * 2) ** 2
    wind = swept_band(noise(d + 1), 500, 900, 0.9) * wind_amt * 0.5
    pops = crackle(d + 1, 12, 2500) * 0.6
    x = mix(fire, wind, pops)
    # crossfade the extra second into the head so the loop has no seam
    tail = x[m:]
    head = x[:m].copy()
    k = np.linspace(0, 1, len(tail))
    head[:len(tail)] = head[:len(tail)] * k + tail * (1 - k)
    return master(head, -14, 1.0)


def music_loop():
    # a short warm bed: Dm Bb F C at 100 bpm, 4 bars = 9.6 s. Drums pulse, a bell
    # motif turns over the chords, the choir holds them. Sits under the action.
    bpm, bars = 100, 4
    beat = 60 / bpm
    d = beat * 4 * bars
    m = n(d)
    out = np.zeros(m)

    def place(x, t, g=1.0):
        i = n(t)
        seg = x[:max(0, m - i)]
        out[i:i + len(seg)] += seg * g

    chords = [(146.83, 174.61, 220.0), (116.54, 146.83, 174.61), (174.61, 220.0, 261.63), (130.81, 164.81, 196.0)]
    roots = [73.42, 58.27, 87.31, 65.41]
    motif = [587.33, 440.0, 698.46, 659.25, 587.33, 440.0, 523.25, 440.0]   # D A F E D A C A
    for b in range(bars):
        t0 = b * beat * 4
        # choir pad and bass
        for f in chords[b]:
            place(voice(f * 2, beat * 4) * swell(beat * 4, 0.4, 1.0), t0, 0.18)
        place(filt(osc(roots[b], roots[b], beat * 4, "saw"), "low", 260) * env(beat * 4, 0.02, curve=0.8), t0, 0.35)
        for q in range(4):
            t = t0 + q * beat
            kick = osc(110, 42, 0.25) * env(0.25, 0.001, curve=4)
            place(kick, t, 0.9 if q % 2 == 0 else 0.55)
            place(filt(noise(0.06), "high", 6000) * env(0.06, 0.001, curve=4), t + beat / 2, 0.12)   # off-beat hat
            if q == 1 or q == 3:   # a soft frame-drum on 2 and 4
                place(mix(osc(190, 140, 0.18) * env(0.18, 0.001, curve=4), filt(noise(0.12), "band", (300, 1200)) * env(0.12, 0.001, curve=4) * 0.6), t, 0.4)
        for e in range(2):
            f = motif[(b * 2 + e) % len(motif)]
            place(bell(f, beat * 2, 0.8, 1.0), t0 + e * beat * 2, 0.22)
            place(bell(f * 1.5, beat, 0.6, 1.4), t0 + e * beat * 2 + beat, 0.1)
    out = room(out, 1.2, 0.25, 6000, circular=True)   # circular: the tail wraps, so it loops clean
    return master(out, -10, 1.1)


SOUNDS = {
    "footstep_1": lambda: footstep(0), "footstep_2": lambda: footstep(1), "footstep_3": lambda: footstep(2),
    "jump": jump, "land": land, "dash": dash, "slide": slide,
    "spark_fire": spark_fire, "spark_hit_wall": spark_hit_wall, "spark_hit_hollow": spark_hit_hollow,
    "fist_swing": fist_swing, "fist_hit": fist_hit, "crack": crack, "release": release,
    "hollow_break": hollow_break, "hollow_windup": hollow_windup,
    "ember_throw": ember_throw, "ember_hit_player": ember_hit_player,
    "player_hurt": player_hurt, "player_death": player_death, "respawn": respawn,
    "riley_radio": riley_radio, "ui_tick": ui_tick,
    "ambience_loop": ambience_loop, "music_loop": music_loop,
}


def write(path, x):
    pcm = (np.clip(x, -1, 1) * 32767).astype("<i2")
    with wave.open(path, "wb") as w:
        w.setnchannels(1)
        w.setsampwidth(2)
        w.setframerate(SR)
        w.writeframes(pcm.tobytes())


def main():
    os.makedirs(OUT, exist_ok=True)
    rendered = {}
    for name, make in SOUNDS.items():
        x = fade(make())
        write(os.path.join(OUT, name + ".wav"), x)
        rendered[name] = x
        print("FB_SOUND_WAV %-18s %.2f s" % (name, len(x) / SR))
    if "--sample" in sys.argv:
        ev = os.path.join(ROOT, "docs", "evidence", "ue-sound")
        os.makedirs(ev, exist_ok=True)
        parts, lines, t = [], [], 0.0
        for name, x in rendered.items():
            if name.endswith("_loop"):
                x = x[:n(4.0)] * np.concatenate([np.ones(n(3.5)), np.linspace(1, 0, n(0.5))])
            lines.append("%6.2f s  %s" % (t, name))
            parts += [x, silence(0.6)]
            t += len(x) / SR + 0.6
        write(os.path.join(ev, "all-sounds.wav"), np.concatenate(parts))
        with open(os.path.join(ev, "all-sounds.txt"), "w") as f:
            f.write("all-sounds.wav: every FIREBIRD sound in order, 0.6 s apart (loops cut to 4 s)\n")
            f.write("\n".join(lines) + "\n")
        print("FB_SOUND_SAMPLE %s (%.1f s)" % (os.path.join(ev, "all-sounds.wav"), t))
    print("FB_SOUND_WAVS_OK %d" % len(SOUNDS))


if __name__ == "__main__":
    main()
