# Builds E1M2 "The Furnace" for FIREBIRD 3D v2 -> src/levels/e1m2.js
#   python tools/build_e1m2.py
# Painted from rectangles so the layout is easy to change and re-check with
# node tools/lab.mjs 1. The brief is in docs/LEVELS.md.
import json, os

W, H = 36, 30
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

# ---- districts ----------------------------------------------------------------
# hub: the foundry floor around the lava pit (brick), 11 m ceiling
room(8, 12, 27, 23, floor='2', ceil='m')
# the lava pit, and the furnace tower in it: the landmark you see from everywhere (S1, S2)
for z in range(14, 20):
    for x in range(14, 22): put(x, z, '~', '0')
for z in (16, 17):
    for x in (17, 18): put(x, z, 'H')
# arrival gantry: enter high and look down over the hub (S3), stairs on both sides (M1)
room(12, 24, 23, 27, floor='8', ceil='m')
for i, z in enumerate(range(24, 28)):
    pass
stairs = ['3', '4', '5', '6', '7']  # climbing from the hub (0.5) to the gantry (2.0)
for i, z in enumerate([23, 24, 25, 26]):
    pass
# west and east staircases down the gantry sides: x 12-13 and 22-23, from z27 (top) to z23 (bottom)
for x in (12, 13, 22, 23):
    for z, d in zip([27, 26, 25, 24, 23], ['7', '6', '5', '4', '3']):
        m[z][x] = '.'; h[z][x] = d; c[z][x] = 'm'
# the gantry lip overlooks the hub; you can also just drop off it (a third way down)
# west wing: the coal bunkers (stone, dark), floor 0.25
room(1, 8, 6, 24, floor='1', ceil='e', wall='%')
room(1, 8, 6, 10, floor='3', ceil='e')           # the switch ledge: jump up (0.5)
for x, z in [(3, 14), (4, 14), (2, 19), (3, 19)]: put(x, z, '%')   # bunker walls to weave through
put(3, 7, '=')                                    # the drain switch, on the ledge's back wall
put(7, 13, 'D'); put(7, 21, 'D')                  # two doors into the hub: a loop (M3, S5)
# east wing: the cooling tanks (metal), floor 0.25, with a tank platform up top
room(29, 8, 34, 24, floor='1', ceil='k', wall='M')
room(29, 8, 33, 12, floor='8', ceil='k')          # tank tops, 4 m up: an overlook (S3); the stair lands at z12
for z, d in zip([18, 17, 16, 15, 14, 13, 12], ['2', '3', '4', '5', '6', '7', '8']):
    m[z][34] = '.'; h[z][34] = d; c[z][34] = 'k'  # a stair up the east wall (with the room's tall ceiling)
m[8][34] = 'M'; m[9][34] = 'M'; m[10][34] = 'M'; m[11][34] = 'M'
for z in range(13, 18): m[z][33] = 'M'   # a rail along the stair's open side: you climb it from the bottom (S6)
for x, z in [(30, 15), (31, 15), (30, 20), (31, 20)]: put(x, z, 'M')   # tanks at floor level: cover
put(28, 14, 'D'); put(28, 21, 'D')                # two doors: a loop
# cover around the pit, so the hub has close and mid ranges, not one long sightline (M2, M6)
for x, z in [(11, 15), (11, 20), (24, 15), (24, 20)]: put(x, z, 'T')
# the forge arena, north (hellrock), behind the red door
room(9, 2, 26, 10, floor='2', ceil='q', wall='H')
room(9, 2, 11, 10, floor='6', ceil='q')           # side platforms, 1 m up, with stairs
room(24, 2, 26, 10, floor='6', ceil='q')
for x, d in zip([12], ['4']): pass
for z in (6,):
    put(12, z, '.', '4'); put(23, z, '.', '4')    # one step up to each platform
for x in range(14, 22): put(x, 4, '~', '0')        # a lava channel across the arena, with a gap at each end: jump it or go round
for x, z in [(14, 7), (21, 7), (14, 8), (21, 8)]: put(x, z, 'H')   # pillars to circle (M3, C1)
put(17, 1, 'X')                                    # the exit switch, in the north wall...
put(17, 2, '.', '8')                               # ...behind a raised plinth that sinks when you win
put(17, 11, 'R')                                   # the red door from the hub
# secret: a cracked stone wall at the west wing's south end hides a supply nook
room(1, 26, 3, 27, floor='1', ceil='e')
put(2, 25, 'S')
put(1, 27, '*'); put(2, 27, 'P'); put(3, 27, 'a')

# ---- things --------------------------------------------------------------------
put(17, 26, 'p')
for x, z in [(12, 23), (23, 23)]: put(x, z, 't')                   # torches at the gantry stairs
for x, z in [(16, 12), (18, 12), (8, 12), (8, 22), (27, 12), (27, 22)]: put(x, z, 't')  # torch pairs: red door, wing doors
for x, z in [(13, 3), (22, 3)]: put(x, z, 't')
# demons: seen from a distance first (P6); each wing teaches one thing
put(10, 17, 'i'); put(25, 17, 'i')                 # two imps in the hub, one per side, seen from the gantry
put(3, 12, 'i'); put(5, 21, 'i'); put(2, 9, 'i')   # west wing: imps in the dark, one guarding the switch
put(32, 18, 'g'); put(30, 23, 'g'); put(32, 9, 'i')  # east wing: gnashers on the floor, an imp on the tanks
# pickups: push forward (C2), health after hard bits (E1)
put(19, 25, 'b'); put(9, 13, 'a'); put(26, 22, 'b'); put(4, 23, 'h'); put(33, 23, '+')
put(31, 10, 'r'); put(33, 9, 'A'); put(10, 21, 'h')
put(16, 9, 'a'); put(19, 9, 'a'); put(10, 3, 'h'); put(25, 3, '+'); put(17, 6, 'b')
put(26, 13, 'o'); put(9, 23, 'o')                  # barrels by the hub corners

# ---- events: the level's moments ------------------------------------------------
events = [
    # the set piece: pull the drain switch -> the pit empties and rises into a floor (a new middle lane, the shortcut)
    {'when': {'use': [3, 7]}, 'do': [
        {'notice': 'THE FURNACE IS DRAINING!'}, {'shake': 3},
        {'say': "YOU DID IT! THE PIT'S DRAINING. THAT'S A SHORTCUT STRAIGHT TO THE RED DOOR."},
        {'lava': [14, 14, 21, 19], 'on': False},
        {'raise': [14, 14, 21, 19], 'to': 0.5, 'speed': 0.25}]},
    # the finale: step into the forge -> doors seal, a warning, then the waves (P6, C5, C1-C4)
    {'when': {'enter': [12, 5, 23, 9]}, 'do': [
        {'seal': ['17,11']}, {'notice': 'SEALED IN!'}, {'shake': 2},
        {'say': "IT'S A TRAP! KEEP MOVING, USE THE PILLARS AND THE HIGH GROUND."},
        {'after': 2.0, 'do': [{'wave': 'forge1', 'spawn': [
            {'kind': 'imp', 'x': 10, 'z': 3}, {'kind': 'imp', 'x': 25, 'z': 3}, {'kind': 'gnasher', 'x': 17, 'z': 3}]}]}]},
    {'when': {'cleared': 'forge1'}, 'do': [
        {'say': 'ONE MORE WAVE. THEY ALWAYS SEND ONE MORE.'},
        {'after': 1.5, 'do': [{'wave': 'forge2', 'spawn': [
            {'kind': 'gnasher', 'x': 10, 'z': 9}, {'kind': 'gnasher', 'x': 25, 'z': 9}, {'kind': 'imp', 'x': 10, 'z': 5},
            {'kind': 'imp', 'x': 25, 'z': 5}]}]}]},
    {'when': {'cleared': 'forge2'}, 'do': [
        {'notice': 'FORGE CLEARED!'}, {'open': ['17,11']},
        {'say': "THAT WAS AWESOME. THE EXIT SWITCH IS BEHIND THE PLINTH. IT'S SINKING NOW."},
        {'lower': [17, 2, 17, 2], 'to': 0.5, 'speed': 0.6}]},
]

triggers = [
    {'box': [14, 24, 21, 27], 'say': "WELCOME TO THE FURNACE! SEE THE LAVA PIT? A SWITCH SOMEWHERE DRAINS IT. THE RED DOOR BEHIND IT LEADS OUT."},
    {'box': [1, 11, 6, 24], 'say': "DARK IN HERE. LISTEN FOR THE IMPS BEFORE YOU SEE THEM."},
    {'box': [29, 12, 34, 24], 'say': "THE RED KEYCARD IS UP ON THE TANKS. THE STAIRS ARE ON THE FAR WALL."},
]

lights = [
    {'id': 'pit', 'x': 17.5, 'z': 17, 'y': 1.2, 'color': 0xff6a1a, 'intensity': 5, 'dist': 14},
    {'id': 'forge', 'x': 17.5, 'z': 5, 'y': 3, 'color': 0xff4a10, 'intensity': 4, 'dist': 14},
    {'id': 'tanks', 'x': 31.5, 'z': 16, 'y': 3.5, 'color': 0x6aa8ff, 'intensity': 2.5, 'dist': 12},
    {'id': 'bunkerflicker', 'x': 3.5, 'z': 16, 'y': 2.5, 'color': 0xffc080, 'intensity': 1.6, 'dist': 8, 'flicker': True},
]

def rows(a): return [''.join(r) for r in a]
level = {
    'name': 'E1M2: THE FURNACE', 'floor': 'slab', 'ceil': 'ceilDark', 'par': 300, 'playerAngle': -1.5707963,
    'ceilHeight': 2.5, 'map': rows(m), 'heights': rows(h), 'ceilings': rows(c),
    'events': events, 'triggers': triggers, 'lights': lights,
    'darkZones': [[1, 8, 6, 27]],   # no room fill light in the bunkers: only the flickering lamp
}
out = os.path.join(os.path.dirname(__file__), '..', 'src', 'levels', 'e1m2.js')
os.makedirs(os.path.dirname(out), exist_ok=True)
with open(out, 'w', encoding='utf8') as f:
    f.write('// Generated by tools/build_e1m2.py. Edit that, not this.\n')
    f.write('export var E1M2 = ' + json.dumps(level, indent=1) + ';\n')
print('wrote', out)
for r in rows(m): print(r)
