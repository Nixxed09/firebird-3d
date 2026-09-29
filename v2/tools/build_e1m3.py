# Builds E1M3 "The Reset Engine" for FIREBIRD v2 -> src/levels/e1m3.js
#   python tools/build_e1m3.py
# Painted from rectangles like E1M2, then checked with node tools/lab.mjs 2.
# The brief is in docs/LEVELS.md; the world is STYLE_GUIDE.md (Old Earth: Ashgate).
import json, os

W, H = 36, 41
m = [['#'] * W for _ in range(H)]    # map chars
h = [['0'] * W for _ in range(H)]    # floor heights (digit x 0.25 cells)
c = [['.'] * W for _ in range(H)]    # ceilings ('.' = level default)

def room(x0, z0, x1, z1, floor='2', ceil='.', wall=None):
    if wall:
        for z in range(z0 - 1, z1 + 2):
            for x in range(x0 - 1, x1 + 2):
                if 0 <= x < W and 0 <= z < H and m[z][x] in '#%MTH': m[z][x] = wall
    for z in range(z0, z1 + 1):
        for x in range(x0, x1 + 1):
            m[z][x] = '.'; h[z][x] = floor; c[z][x] = ceil

def put(x, z, ch, floor=None):
    m[z][x] = ch
    if floor is not None: h[z][x] = floor

# ---- districts (south to north: the way you go) --------------------------------------
# 1. the buried street: mudflood brick, a low ceiling (compression before the reveal)
room(14, 35, 21, 38, floor='6', ceil='e', wall='#')
for x, z in [(14, 35), (21, 36)]: put(x, z, '#')                 # half-buried rubble
# 2. the balcony: the street breaks out high above the engine hall (S3 overlook, S2 weenie)
room(12, 32, 23, 34, floor='6', ceil='m')
# 3. the engine hall (hub): Overseer basalt, 11 m ceiling, the reset engine's core in the middle
room(6, 18, 29, 28, floor='2', ceil='m', wall='H')
for x in (12, 13, 22, 23):                                        # two stairs down from the balcony
    for z, d in zip([31, 30, 29], ['5', '4', '3']):
        m[z][x] = '.'; h[z][x] = d; c[z][x] = 'm'
room(14, 29, 21, 31, floor='2', ceil='m')                         # between the stairs: drop straight down (a third way)
for z in range(21, 27):                                           # the mercury moat around the core
    for x in range(15, 21): put(x, z, '~', '0')
for z in range(22, 26):                                           # the core: the weenie you see from the first step
    for x in range(16, 20): put(x, z, 'H')
for x, z in [(9, 21), (26, 21), (9, 26), (26, 26)]: put(x, z, 'M')   # brass pylons: cover and circling (M2, M3)
for x, z in [(12, 20), (23, 20), (12, 24), (23, 24), (7, 23), (28, 23)]: put(x, z, 'M')   # more pylons: close fights, broken sightlines (M2)
for x in (15, 20): put(x, 28, 'T')                                  # two resonance consoles below the balcony
# 4. the seal corridor north of the hall: three basalt seals block it until their levers are pulled
room(17, 12, 18, 17, floor='2', ceil='k', wall='H')
for z in (13, 15, 17):
    for x in (17, 18): h[z][x] = 'a'                               # a raised seal: 2.5 cells, a wall until lowered
# 5. the west wing: the bell works (Tartarian limestone, cyan light); its seal lever is up the bell tower
room(1, 16, 4, 29, floor='1', ceil='k', wall='%')
room(1, 16, 4, 18, floor='6', ceil='k')                           # the bell tower platform, 1.5 cells up
for z, d in zip([23, 22, 21, 20, 19], ['2', '3', '4', '5', '6']):
    m[z][4] = '.'; h[z][4] = d; c[z][4] = 'k'                      # the stair up the tower's east side
for z in range(19, 24): m[z][3] = '%'                              # a rail: climb it from the bottom (S6)
put(2, 15, '=')                                                    # lever 1 (the west seal), on the tower's back wall
for x, z in [(2, 26), (1, 21)]: put(x, z, 'M')                     # bronze bells standing on the floor: cover
put(5, 24, 'D'); put(5, 28, 'D')                                   # two doors into the hall: a loop (S5)
# the secret: a cracked limestone wall at the bell works' south end hides a nook
room(1, 31, 3, 32, floor='1', ceil='k')
put(2, 30, 'S')
put(1, 32, '*'); put(2, 32, 'P'); put(3, 32, 'A')
# 6. the east wing: the mercury foundry (basalt); its lever is on an island across a stone bridge
room(31, 16, 34, 29, floor='1', ceil='k', wall='H')
for z in range(20, 23):
    for x in range(31, 35): put(x, z, '~', '0')                    # a mercury channel across the foundry...
for z in range(20, 23): put(32, z, '.', '2'); put(33, z, '.', '2')   # ...with a stone bridge over it
put(33, 15, '=')                                                    # lever 2 (the east seal)
put(30, 24, 'D'); put(30, 28, 'D')                                 # two doors: a loop
# 7. the gallery over the hall's north-west corner: a lift up, lever 3, and a view over everything
room(7, 16, 12, 17, floor='8', ceil='m')
put(13, 17, 'L', '8')                                              # the lift: rides from the hall floor to the gallery
put(9, 15, '=')                                                     # lever 3 (the gallery seal)
# 8. the engine room (finale): the reset engine itself, side platforms, pillars, mercury channels
room(6, 1, 29, 10, floor='2', ceil='q', wall='H')
room(6, 1, 8, 10, floor='6', ceil='q'); room(27, 1, 29, 10, floor='6', ceil='q')   # high ground, 1 m up
put(9, 5, '.', '4'); put(26, 5, '.', '4')                          # a step up to each platform
for z in range(3, 6):
    for x in range(15, 21): put(x, z, 'H')                         # the engine block
for z in range(7, 10): put(13, z, '~', '0'); put(22, z, '~', '0')    # mercury channels: jump them or go round
for x, z in [(11, 3), (24, 3), (11, 8), (24, 8), (17, 8), (18, 8)]: put(x, z, 'H')   # pillars to circle, and a low wall in front of the engine
put(17, 0, 'X')                                                     # the waystone, in the north wall...
put(17, 1, '.', 'a'); put(18, 1, '.', 'a')                          # ...behind a basalt plinth that sinks when the engine dies
put(17, 11, 'D'); put(18, 11, 'D')                                  # the doors from the seal corridor

# ---- things --------------------------------------------------------------------------
put(17, 37, 'p')
for x, z in [(14, 38), (21, 38)]: put(x, z, 't')
for x, z in [(12, 32), (23, 32)]: put(x, z, 't')                    # torches at the stair heads
for x, z in [(16, 18), (19, 18)]: put(x, z, 't')                    # a torch pair at the seal corridor: it matters
for x, z in [(6, 23), (6, 29 - 1), (29, 23), (29, 27)]: put(x, z, 't')   # torch pairs at the wing doors
for x, z in [(10, 2), (25, 2)]: put(x, z, 't')
# Hollows: first seen from far (P6); each wing has one idea
put(10, 24, 'i'); put(25, 24, 'i'); put(13, 20, 'i')              # hall: two by the pylons, one under the gallery
put(2, 19, 'i'); put(2, 24, 'i'); put(1, 17, 'i')                  # bell works: one guarding the lever up top
put(32, 26, 'g'); put(33, 18, 'g'); put(31, 17, 'i')               # foundry: hounds on the floor, a Hollow on the island
put(10, 16, 'i')                                                    # a Hollow on the gallery, shooting down
put(26, 20, 'o'); put(8, 27, 'o')                                   # mercury casks near Hollows
# pickups: push forward (C2), health after hard bits (E1)
put(18, 36, '2'); put(16, 36, 'a'); put(19, 33, 'b')               # the Bell Blaster is in the street: every run has it
put(7, 19, 'h'); put(21, 27, 'b')
put(4, 27, '+'); put(1, 25, 'a'); put(34, 17, 'A'); put(34, 28, 'h')
put(11, 16, 'a')
put(7, 2, '+'); put(28, 9, 'a'); put(12, 5, 'b')                    # the engine room: enough to win, not to relax

# ---- events: the level's moments -------------------------------------------------------
SEAL = {1: [17, 13, 18, 13], 2: [17, 15, 18, 15], 3: [17, 17, 18, 17]}
# each seal the engine loses, it answers: a small wave you see coming (P6), smaller than the finale
def seal_lever(x, z, n, name, line, answer):
    return {'when': {'use': [x, z]}, 'do': [
        {'notice': 'THE ' + name + ' SEAL IS DOWN'}, {'shake': 2},
        {'lower': SEAL[n], 'to': 0.5, 'speed': 0.5}, {'say': line},
        {'after': 2.5, 'do': [{'wave': 'answer' + str(n), 'spawn': answer}]}]}

events = [
    # the engine room's cyan lights wait for the engine to die
    {'when': {'start': True}, 'do': [{'light': 'relit', 'on': False}, {'light': 'relitW', 'on': False}, {'light': 'relitE', 'on': False}, {'light': 'relitHall', 'on': False}]},
    seal_lever(2, 15, 1, 'WEST', "THE WEST SEAL IS DOWN. HEAR THAT BELL? THE ENGINE HEARD IT TOO. HOLLOWS, DOWN BELOW!",
               [{'kind': 'imp', 'x': 2, 'z': 27}, {'kind': 'imp', 'x': 1, 'z': 28}]),
    seal_lever(33, 15, 2, 'EAST', "THE EAST SEAL IS DOWN. SOMETHING'S COMING OVER THE BRIDGE!",
               [{'kind': 'gnasher', 'x': 33, 'z': 27}, {'kind': 'imp', 'x': 31, 'z': 28}]),
    seal_lever(9, 15, 3, 'GALLERY', "THE GALLERY SEAL IS DOWN. HOLLOWS IN THE HALL! YOU'VE GOT THE HIGH GROUND, USE IT.",
               [{'kind': 'imp', 'x': 11, 'z': 25}, {'kind': 'imp', 'x': 24, 'z': 25}, {'kind': 'gnasher', 'x': 17, 'z': 28}]),
    # the finale: step into the engine room -> doors seal, the Warden climbs out of the engine
    {'when': {'enter': [9, 2, 26, 9]}, 'do': [
        {'seal': ['17,11', '18,11']}, {'notice': 'THE RESET WARDEN!'}, {'shake': 3},
        {'say': "THAT'S THE WARDEN. IT WAS A KNIGHT ONCE, SWORN TO A FIRE DRAKE, UNTIL THE OVERSEERS HOLLOWED IT OUT. STAY MOVING, USE THE PILLARS, RING IT WITH THE BELL BLASTER."},
        {'after': 1.5, 'do': [{'wave': 'warden', 'spawn': [{'kind': 'knight', 'x': 17, 'z': 6}]},
                              {'wave': 'escort', 'spawn': [{'kind': 'imp', 'x': 7, 'z': 3}, {'kind': 'imp', 'x': 28, 'z': 3}]}]},
        {'after': 10, 'do': [{'say': "IT'S CALLING HOLLOWS OUT OF THE WALLS!"}, {'shake': 2}, {'wave': 'adds1', 'spawn': [
            {'kind': 'gnasher', 'x': 9, 'z': 9}, {'kind': 'gnasher', 'x': 26, 'z': 9}, {'kind': 'imp', 'x': 12, 'z': 2}]}]},
        {'after': 22, 'do': [{'say': "HERE COMES EVERYTHING IT'S GOT. DON'T STOP MOVING!"}, {'shake': 3}, {'wave': 'adds2', 'spawn': [
            {'kind': 'imp', 'x': 7, 'z': 9}, {'kind': 'imp', 'x': 28, 'z': 9}, {'kind': 'imp', 'x': 23, 'z': 2},
            {'kind': 'gnasher', 'x': 12, 'z': 9}, {'kind': 'gnasher', 'x': 23, 'z': 9}]}]}]},
    # the engine dies: the mercury drains, the crimson goes out, Ashgate's cyan comes back on
    {'when': {'cleared': 'warden'}, 'do': [
        {'notice': 'THE ENGINE IS SILENT'}, {'shake': 4},
        {'light': 'engine', 'on': False}, {'light': 'core', 'on': False},
        {'light': 'relit', 'on': True}, {'light': 'relitW', 'on': True}, {'light': 'relitE', 'on': True}, {'light': 'relitHall', 'on': True},
        {'lava': [13, 7, 22, 9], 'on': False}, {'lava': [15, 21, 20, 26], 'on': False},
        {'open': ['17,11', '18,11']},
        {'say': "YOU DID IT! THE ENGINE'S DEAD AND THE CITY'S LIGHTS ARE COMING BACK. THE WAYSTONE'S BEHIND IT. COME FIND ME AFTER."},
        {'lower': [17, 1, 18, 1], 'to': 0.5, 'speed': 1.0}]},
]

triggers = [
    {'box': [14, 35, 21, 38], 'say': "THIS STREET USED TO BE THE TOP OF THE CITY. THE OVERSEERS' ENGINE IS BURYING IT. THE BELL BLASTER'S RIGHT THERE, GRAB IT."},
    {'box': [12, 32, 23, 34], 'say': "THERE IT IS: THE RESET ENGINE. THREE SEALS BLOCK THE WAY IN. EACH ONE HAS A LEVER: WEST, EAST, AND UP ON THAT GALLERY."},
    {'box': [1, 19, 4, 29], 'say': "THE BELL WORKS. THE LEVER'S UP THE TOWER. THE STAIRS START AT THE BOTTOM."},
    {'box': [31, 23, 34, 29], 'say': "CAREFUL, THAT CHANNEL IS RED MERCURY. TAKE THE BRIDGE. THE HOUNDS WON'T WAIT."},
    {'box': [14, 12, 21, 17], 'say': "ALL THREE SEALS ARE DOWN. THE WARDEN'S BEHIND THOSE DOORS. HEALTH AND AMMO FIRST?"},
]

lights = [
    {'id': 'core', 'x': 17.5, 'z': 23.5, 'y': 3.5, 'color': 0xff2a30, 'intensity': 5, 'dist': 16},
    {'id': 'engine', 'x': 17.5, 'z': 6.5, 'y': 3.5, 'color': 0xff2a30, 'intensity': 4.5, 'dist': 16},
    {'id': 'relit', 'x': 17.5, 'z': 7.5, 'y': 3, 'color': 0x8ff0ff, 'intensity': 12, 'dist': 22},
    {'id': 'relitW', 'x': 9.5, 'z': 5.5, 'y': 3, 'color': 0x8ff0ff, 'intensity': 6, 'dist': 12},
    {'id': 'relitE', 'x': 25.5, 'z': 5.5, 'y': 3, 'color': 0x8ff0ff, 'intensity': 6, 'dist': 12},
    {'id': 'relitHall', 'x': 17.5, 'z': 23.5, 'y': 5, 'color': 0x8ff0ff, 'intensity': 9, 'dist': 20},
    {'id': 'bells', 'x': 2.5, 'z': 22, 'y': 3.5, 'color': 0x8fe0ff, 'intensity': 2.4, 'dist': 11},
    {'id': 'foundry', 'x': 32.5, 'z': 21, 'y': 1.5, 'color': 0xff2a30, 'intensity': 3, 'dist': 10},
    {'id': 'street', 'x': 17.5, 'z': 37, 'y': 2.4, 'color': 0xffc080, 'intensity': 1.4, 'dist': 8, 'flicker': True},
]

def rows(a): return [''.join(r) for r in a]
level = {
    'name': 'E1M3: THE RESET ENGINE', 'floor': 'slab', 'ceil': 'ceilDark', 'par': 330, 'playerAngle': -1.5707963,
    'ceilHeight': 2.5, 'map': rows(m), 'heights': rows(h), 'ceilings': rows(c),
    'levers': [[2, 15], [33, 15], [9, 15]], 'leverGoal': 'PULL THE SEAL LEVERS',
    'events': events, 'triggers': triggers, 'lights': lights,
    'darkZones': [[14, 35, 21, 38]],   # the buried street: only its flickering lamp
}
out = os.path.join(os.path.dirname(__file__), '..', 'src', 'levels', 'e1m3.js')
with open(out, 'w', encoding='utf8') as f:
    f.write('// Generated by tools/build_e1m3.py. Edit that, not this.\n')
    f.write('export var E1M3 = ' + json.dumps(level, indent=1) + ';\n')
print('wrote', out)
for i, r in enumerate(rows(m)): print('%2d %s' % (i, r))
