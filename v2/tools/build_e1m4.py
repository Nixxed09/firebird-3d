# Builds E1M4 "Riley's Trial" for FIREBIRD v2 -> src/levels/e1m4.js
#   python tools/build_e1m4.py
# Designed to the Level Design Codex (GamesOS/docs/LEVEL_DESIGN_CODEX.md): the episode's
# final exam (A2, M4). Nothing new, everything tested. Brief in docs/LEVELS.md.
import json, os

W, H = 36, 39
m = [['#'] * W for _ in range(H)]    # map chars
h = [['0'] * W for _ in range(H)]    # floor heights (digit x 0.25 cells; 'a' = 2.5, 'c' = 3.0)
c = [['.'] * W for _ in range(H)]    # ceilings ('.' = level default)

def room(x0, z0, x1, z1, floor='4', ceil='.', wall=None):
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

# ---- districts (south to north) -------------------------------------------------------
# 1. the peak ledge: you arrive at the top of the world, above the courtyard (enter high, S3)
room(14, 34, 21, 37, floor='8', ceil='q', wall='%')
# 2. the courtyard (hub): limestone, open sky; the arena's beam over the gate is the weenie (S2)
room(8, 22, 27, 33, floor='4', ceil='q', wall='%')
room(14, 34, 21, 37, floor='8', ceil='q')                          # (re-carve the ledge after the wall pass)
for x in range(16, 20):                                            # a stair down the middle...
    for z, d in zip([33, 32, 31], ['7', '6', '5']): put(x, z, '.', d)
# ...and the ledge's sides are a 1-cell drop into the courtyard (three ways down, M1)
for x, z in [(11, 25), (24, 25), (13, 29), (22, 29)]: put(x, z, 'M')   # brass pylons (cover, M3)
# 3. the west wing: the Trial of Ash (E1M1's lessons: jump, climb, ride)
room(1, 16, 6, 31, floor='4', ceil='q', wall='#')
for z, d in zip([28, 27, 26, 25, 24], ['6', '8', 'a', 'c', 'c']):
    put(1, z, '.', d)                                              # a jump-stair up the west wall, half a cell a step
room(1, 16, 6, 19, floor='c', ceil='q')                            # the trial platform, 3 cells up
put(1, 20, '.', 'c'); put(1, 21, '.', 'c'); put(1, 22, '.', 'c'); put(1, 23, '.', 'c')   # the jump-stair's top run
for z in range(20, 29): put(2, z, '#')                             # a wall beside the jump-stair: climb it from the bottom (S6)
put(5, 20, 'L', 'c')                                               # the lift: the other way up, and the shortcut down
put(7, 24, 'D'); put(7, 29, 'D')                                   # two doors into the courtyard: a loop (S5)
# secret: a cracked brick wall at the Trial of Ash's south end
room(2, 33, 4, 34, floor='4', ceil='q')
put(3, 32, 'S')
put(2, 34, '*'); put(3, 34, 'P'); put(4, 34, 'A')
# 4. the east wing: the Trial of Mercury (E1M2's lesson: find the switch, drain it)
room(29, 16, 34, 31, floor='4', ceil='q', wall='H')
for z in range(19, 24):
    for x in range(29, 35): put(x, z, '~', '0')                    # a mercury pool across the wing
room(30, 16, 33, 18, floor='4', ceil='q')                          # the keystone island beyond it
put(35, 27, '=')                                                   # the drain switch on the east wall
put(28, 24, 'D'); put(28, 29, 'D')
# 5. the gate: blue keystone door, then red keystone door
room(17, 16, 18, 21, floor='4', ceil='m', wall='M')
put(17, 21, 'U'); put(18, 21, 'U'); put(17, 17, 'R', '8'); put(18, 17, 'R', '8')   # the red door sits at the top of the stair
# 6. the arena gallery: you enter Riley's arena high and look down on her (S3)
room(12, 13, 23, 15, floor='8', ceil='q', wall='T')
put(17, 16, '.', '8'); put(18, 16, '.', '8')                        # the gate corridor climbs to the gallery...
for x in (17, 18):
    for z, d in zip([20, 19, 18], ['5', '6', '7']): put(x, z, '.', d)   # ...up a stair between the doors
# 7. the arena: resonance panels (Riley's aqua), high ground at both sides, pillars, room to circle
room(5, 1, 30, 12, floor='4', ceil='q', wall='T')
room(12, 13, 23, 15, floor='8', ceil='q')                          # (re-carve the gallery)
for x in (12, 13, 22, 23):                                         # stairs down from the gallery
    for z, d in zip([12, 11, 10], ['7', '6', '5']): put(x, z, '.', d)
room(5, 1, 7, 11, floor='8', ceil='q'); room(28, 1, 30, 11, floor='8', ceil='q')   # side platforms, 1 cell up
for x, d in [(10, '5'), (9, '6'), (8, '7')]: put(x, 6, '.', d)     # stairs up to each platform
for x, d in [(25, '5'), (26, '6'), (27, '7')]: put(x, 6, '.', d)
for x, z in [(11, 3), (24, 3), (11, 9), (24, 9)]: put(x, z, 'M')   # brass pillars to circle
# (the Trial's one twist: four stones rise out of the floor at (14,4) (21,4) (14,8) (21,8); see events)

# ---- things ------------------------------------------------------------------------------
put(17, 36, 'p')
for x, z in [(14, 37), (21, 37)]: put(x, z, 't')
for x, z in [(16, 22), (19, 22)]: put(x, z, 't')                   # a torch pair at the gate: it matters (N2)
for x, z in [(8, 23), (8, 28), (27, 23), (27, 28)]: put(x, z, 't')  # torch pairs at the wing doors
for x, z in [(6, 2), (29, 2), (6, 11), (29, 11)]: put(x, z, 't')
put(17, 3, 'Y')                                                    # Riley, waiting in her arena
# Hollows: each kind met alone first, seen from a distance (U3, P6)
put(10, 23, 'i')                                                   # the first Hollow: alone, below the ledge, far off
put(4, 17, 'i'); put(3, 30, 'i')                                   # the Trial of Ash: one on the platform, one by the door
put(33, 30, 'g')                                                   # the first hound: alone, across the mercury wing
put(26, 31, 'o'); put(9, 32, 'o')                                  # mercury casks in the courtyard corners
# pickups (E2: the arena gets the most; Riley is 900+ hp and summons)
put(18, 35, 'b'); put(16, 35, 'a'); put(12, 30, 'h')
put(3, 18, 'u'); put(6, 16, 'a'); put(4, 26, 'b'); put(5, 30, 'h'); put(3, 28, 'a')   # ammo for the ambush below         # the blue keystone on the Trial of Ash
put(31, 17, 'r'); put(33, 16, '+'); put(30, 27, 'a'); put(34, 30, 'b')     # the red keystone on the island
put(15, 14, 'a'); put(20, 14, 'b')                                  # on the gallery, before you drop in
put(6, 3, 'A'); put(29, 3, '+'); put(6, 10, 'a'); put(29, 10, 'a')  # high ground pays (risk and reward)
put(9, 1, 'b'); put(26, 1, 'b'); put(9, 12, 'h'); put(26, 12, 'h'); put(17, 12, 'a')

# ---- events --------------------------------------------------------------------------------
STONES = [[14, 4, 14, 4], [21, 4, 21, 4], [14, 8, 14, 8], [21, 8, 21, 8]]
events = [
    # the Trial of Mercury: the switch drains the pool into floor (the Furnace's lesson, once more)
    {'when': {'use': [35, 27]}, 'do': [
        {'notice': 'THE MERCURY IS DRAINING!'}, {'shake': 2},
        {'lava': [29, 19, 34, 23], 'on': False},
        {'raise': [29, 19, 34, 23], 'to': 1.0, 'speed': 0.8},   # quick, so nobody waits in the pool as it rises
        {'say': "THERE IT GOES. THE KEYSTONE'S ON THE ISLAND. WATCH OUT, THE HOLLOWS HEARD THAT."},
        {'after': 3, 'do': [{'wave': 'island', 'spawn': [{'kind': 'imp', 'x': 32, 'z': 16}, {'kind': 'imp', 'x': 30, 'z': 16}]}]}]},
    # the blue keystone taken: Hollows come in below, seen from the way down (fills the quiet walk back, U10)
    {'when': {'pickup': 'u'}, 'do': [
        {'say': "GOT IT! CAREFUL, SOMETHING HEARD YOU. LOOK DOWN."},
        {'after': 1.5, 'do': [{'wave': 'ashAnswer', 'spawn': [{'kind': 'imp', 'x': 4, 'z': 29}, {'kind': 'imp', 'x': 5, 'z': 31}]}]}]},
    # into the arena: the gate seals behind you; the Trial begins
    {'when': {'enter': [5, 1, 30, 12]}, 'do': [
        {'seal': ['17,17', '18,17']}, {'notice': "RILEY'S TRIAL"}, {'shake': 1},
        # the one twist (U2): stones rise out of the floor and change the cover. Warned first (U5)
        {'after': 42, 'do': [{'notice': 'THE FLOOR IS MOVING!'}, {'shake': 2}]},
        {'after': 44, 'do': [{'raise': s, 'to': 2.0, 'speed': 0.8} for s in STONES]}]},
]

triggers = [
    {'box': [14, 34, 21, 37], 'say': "YOU MADE IT TO THE TOP OF THE WORLD. MY TRIAL IS PAST THAT GATE. TWO KEYSTONES OPEN IT: ONE IN THE TRIAL OF ASH, WEST, ONE IN THE TRIAL OF MERCURY, EAST."},
    {'box': [1, 20, 6, 31], 'say': "THE TRIAL OF ASH. EVERYTHING FROM THE GATES: JUMP UP THE STEPS, OR RIDE THE LIFT."},
    {'box': [29, 24, 34, 31], 'say': "THE TRIAL OF MERCURY. YOU'VE DRAINED ONE OF THESE BEFORE. FIND THE SWITCH."},
    {'box': [17, 18, 18, 20], 'say': "BOTH KEYSTONES. OKAY. COME UP AND SHOW ME WHAT YOU'VE LEARNED."},
]

lights = [
    {'id': 'beam', 'x': 17.5, 'z': 6.5, 'y': 6, 'color': 0x8ff0ff, 'intensity': 6, 'dist': 26},
    {'id': 'arenaW', 'x': 7.5, 'z': 6.5, 'y': 3, 'color': 0x8fe0ff, 'intensity': 2.5, 'dist': 12},
    {'id': 'arenaE', 'x': 27.5, 'z': 6.5, 'y': 3, 'color': 0x8fe0ff, 'intensity': 2.5, 'dist': 12},
    {'id': 'ash', 'x': 3.5, 'z': 24, 'y': 3, 'color': 0xffa060, 'intensity': 2.4, 'dist': 12},
    {'id': 'mercury', 'x': 31.5, 'z': 21, 'y': 1.5, 'color': 0xff2a30, 'intensity': 3, 'dist': 10},
    {'id': 'court', 'x': 17.5, 'z': 27, 'y': 5, 'color': 0xffe0b0, 'intensity': 2, 'dist': 16},
]

def rows(a): return [''.join(r) for r in a]
level = {
    'name': "E1M4: RILEY'S TRIAL", 'floor': 'slab', 'ceil': 'ceilDark', 'par': 300, 'playerAngle': -1.5707963,
    'ceilHeight': 2.5, 'map': rows(m), 'heights': rows(h), 'ceilings': rows(c),
    'intro': ['THE TOP OF THE WORLD. A SEALED WAYSTONE.', 'RILEY REMEMBERS HOW YOU FOUGHT.'],
    'events': events, 'triggers': triggers, 'lights': lights,
}
out = os.path.join(os.path.dirname(__file__), '..', 'src', 'levels', 'e1m4.js')
with open(out, 'w', encoding='utf8') as f:
    f.write('// Generated by tools/build_e1m4.py. Edit that, not this.\n')
    f.write('export var E1M4 = ' + json.dumps(level, indent=1) + ';\n')
print('wrote', out)
for i, r in enumerate(rows(m)): print('%2d %s' % (i, r))
