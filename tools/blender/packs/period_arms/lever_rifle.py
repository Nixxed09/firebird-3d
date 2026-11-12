# Period Arms pack, asset 1: a brass-framed lever-action repeating rifle of the late
# 1860s to 1870s (our own model of the type; no maker's name or marks on it).
# Run by forge.ps1. Muzzle points down +X, up is +Z, the shooter's right is -Y.
# Origin: bottom rear corner of the frame, just ahead of the grip.
import os, sys, math
sys.dont_write_bytecode = True
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", ".."))
import bpy
from mathutils import Matrix
from fb_parts import *
from fb_parts import _interp

opt = args_after_dashes()
reset()

BLUED = material("M_BluedSteel", (0.040, 0.046, 0.062), 1.0, 0.36, grain="metal")
BRASS = material("M_Brass", (0.66, 0.47, 0.19), 1.0, 0.42, grain="metal")
STEEL = material("M_CaseSteel", (0.085, 0.085, 0.095), 1.0, 0.48, grain="metal")
WALNUT = material("M_Walnut", (0.115, 0.046, 0.020), 0.0, 0.38, grain="wood")
BLACK = material("M_Bore", (0.004, 0.004, 0.004), 0.0, 0.9)

# ---- main lines (metres)
FRAME_W = 0.032
FRAME_X1 = 0.205                       # front of the frame
FRAME_TOP = 0.0655
AF = 0.0225                            # octagon barrel across the flats: 70% of the frame width
BARREL_Z = FRAME_TOP - 0.004 - AF / 2  # barrel centre line
BARREL_R = AF / 2 / math.cos(math.radians(22.5))
MUZZLE_X = 0.815
TUBE_R = 0.0068                        # magazine tube: 60% of the barrel
TUBE_Z = BARREL_Z - AF / 2 - TUBE_R - 0.0004
top_flat = BARREL_Z + AF / 2


def rounded(x0, x1, z0, z1, r, n=6):
    pts = []
    for cx, cz, a0 in ((x1 - r, z0 + r, -90), (x1 - r, z1 - r, 0), (x0 + r, z1 - r, 90), (x0 + r, z0 + r, 180)):
        for k in range(n + 1):
            t = math.radians(a0 + 90 * k / n)
            pts.append((cx + r * math.cos(t), cz + r * math.sin(t)))
    return pts


# ---- frame (brass): curved belly, concave sweep from the top down to the wrist
frame = prism("Frame", [
    (-0.006, -0.0180), (0.020, -0.0100), (0.050, -0.0030), (0.080, -0.0004), (0.130, 0.0006), (0.170, 0.0030), (FRAME_X1, 0.0065),
    (FRAME_X1, FRAME_TOP), (0.064, FRAME_TOP), (0.052, 0.0620), (0.040, 0.0550), (0.028, 0.0470), (0.014, 0.0400),
    (0.000, 0.0340), (-0.006, 0.0310)], FRAME_W, BRASS, bevel_w=0.0026)
frame.modifiers["Bevel"].segments = 4
cut(frame, box("c1", -0.02, 0.050, -0.0050, 0.0050, 0.012, 0.09, None, 0))      # hammer slot
cut(frame, box("c2", 0.095, 0.172, -0.0088, 0.0088, 0.058, 0.09, None, 0))      # top opening

for side, y in (("R", -FRAME_W / 2), ("L", FRAME_W / 2)):
    plate = prism("SidePlate_" + side, rounded(0.060, 0.176, 0.012, 0.053, 0.013), 0.0012, BRASS, y=y, bevel_w=0.0004)
    if side == "R":      # loading gate: a spoon-shaped pocket with a steel gate set down in it
        gate_pts = rounded(0.126, 0.166, 0.019, 0.037, 0.0085)
        cut(plate, prism("cg", gate_pts, 0.01, None, y=y, bevel_w=0))
        prism("LoadingGate", gate_pts, 0.0010, STEEL, y=y + 0.0004, bevel_w=0.0004)
    for i, (sx, sz) in enumerate(((0.068, 0.045), (0.168, 0.020), (0.191, 0.050))):
        s = tube("Screw_%s%d" % (side, i), y - 0.0011, y + 0.0011, sz, 0.0027, STEEL, y=sx, sides=14, axis="Y", bevel_w=0.0003)
        slot = box("cs", -0.004, 0.004, -0.0006, 0.0006, -0.00035, 0.00035, None, 0)
        slot.data.transform(Matrix.Rotation(math.radians(20 + 50 * i), 4, "Y"))
        slot.data.transform(Matrix.Translation((sx, y + (-0.0011 if y < 0 else 0.0011), sz)))
        cut(s, slot)

# ---- bolt, carrier, hammer
bolt = tube("Bolt", 0.034, 0.178, FRAME_TOP - 0.0082, 0.0074, STEEL, sides=20, bevel_w=0.0005)
carrier = box("Carrier", 0.097, 0.170, -0.0082, 0.0082, 0.038, 0.0500, BRASS, 0.0006)
def sh(pts, dx=0.012, dz=-0.018):      # hammer moved forward and down to where the reference photo has it
    return [(x + dx, z + dz) for x, z in pts]


hammer = prism("Hammer", sh([
    (0.008, 0.036), (0.033, 0.036), (0.033, 0.060), (0.0300, 0.0668), (0.0215, 0.0722), (0.0100, 0.0760),
    (-0.0020, 0.0790), (-0.0080, 0.0776), (-0.0086, 0.0742), (0.0000, 0.0716), (0.0058, 0.0662), (0.0060, 0.0500)]),
    0.0090, STEEL, bevel_w=0.0011)
pivot(hammer, 0.032, 0.0, 0.022)
pad = prism("HammerPad", sh([(-0.0092, 0.0772), (-0.0020, 0.0793), (0.0040, 0.0780), (0.0040, 0.0764), (-0.0020, 0.0774),
                          (-0.0092, 0.0754)]), 0.0128, STEEL, bevel_w=0.0005)
pad.parent = hammer
pad.matrix_parent_inverse = hammer.matrix_world.inverted()

# ---- barrel (octagon, a flat on top), bore, magazine tube
barrel = tube("Barrel", FRAME_X1 - 0.004, MUZZLE_X, BARREL_Z, BARREL_R, BLUED, sides=8, smooth=False, spin=math.radians(22.5))
cut(barrel, tube("cb", MUZZLE_X - 0.03, MUZZLE_X + 0.01, BARREL_Z, 0.0057, None, sides=20))
tube("Bore", MUZZLE_X - 0.029, MUZZLE_X - 0.027, BARREL_Z, 0.0060, BLACK, sides=20)
tube("MagTube", FRAME_X1 - 0.004, 0.792, TUBE_Z, TUBE_R, BLUED, sides=24, bevel_w=0.0004)
tube("MagCap", 0.790, 0.799, TUBE_Z, TUBE_R + 0.0007, BLUED, sides=24, bevel_w=0.0008)
band = loft("FrontBand", 0.752, 0.763, [(0, top_flat + 0.0012)], [(0, TUBE_Z - TUBE_R - 0.0012)],
            [(0, AF + 0.0030)], BLUED, steps=1, sides=28, power=2.6, subsurf=0, soften=0)
bevel(band, 0.0006)
tube("BandPin", -0.0135, 0.0135, BARREL_Z - AF / 2, 0.0016, STEEL, y=0.7575, sides=12, axis="Y")

# ---- wood: forend and stock
loft("Forend", FRAME_X1 - 0.001, 0.452,
     top=[(0.20, BARREL_Z + 0.001), (0.46, BARREL_Z + 0.001)],
     bottom=[(0.20, 0.0105), (0.30, 0.0115), (0.46, 0.0150)],
     width=[(0.20, 0.0335), (0.33, 0.0345), (0.46, 0.0315)], mat=WALNUT, power=2.6)
cap = loft("ForendCap", 0.4515, 0.4655, [(0, BARREL_Z + 0.0016)], [(0, 0.0140)], [(0, 0.0327)], BRASS,
           steps=1, power=2.6, subsurf=0, soften=0)
bevel(cap, 0.0008)

# stock lines read off the reference photo with tools/blender/ref_trace.py (art/reference/period_arms/lever_rifle/side_right_a.jpg)
stock_top = [(-0.345, -0.0290), (-0.318, -0.0275), (-0.259, -0.0175), (-0.172, -0.0040), (-0.118, 0.0045), (-0.100, 0.0030),
             (-0.084, -0.0030), (-0.055, 0.0040), (-0.026, 0.0160), (0.004, 0.0310)]
stock_bot = [(-0.345, -0.1620), (-0.318, -0.1600), (-0.259, -0.1425), (-0.172, -0.1085), (-0.113, -0.0845), (-0.084, -0.0725),
             (-0.045, -0.0440), (0.004, -0.0180)]
stock_w = [(-0.345, 0.0400), (-0.120, 0.0375), (-0.065, 0.0300), (0.004, 0.0308)]
stock = loft("Stock", -0.338, 0.002, stock_top, stock_bot, stock_w, WALNUT, steps=40, sides=32, power=2.3, soften=2)


def crescent(z):         # how far the butt curves forward at height z: deep in the middle, pointed heel and toe
    return 0.020 * (1 - ((z + 0.0955) / 0.068) ** 2) - 0.008


for v in stock.data.vertices:
    if v.co.x < -0.320:
        v.co.x += crescent(v.co.z) * (-0.320 - v.co.x) / 0.018
butt = loft("ButtPlate", -0.3470, -0.3375, [(-0.35, -0.0272), (-0.33, -0.0265)], [(-0.35, -0.1645), (-0.33, -0.1600)],
            [(0, 0.0410)], BRASS, steps=2, sides=32, power=2.3, subsurf=0, soften=0)
bevel(butt, 0.0012)
for v in butt.data.vertices:
    v.co.x += crescent(v.co.z)


def strap(name, table, x0, x1, width, side, thick=0.0013, sink=0.0010, n=12):
    """A brass strap let into the wood, following the stock line (side +1 top, -1 bottom)."""
    xs = [x0 + (x1 - x0) * k / n for k in range(n + 1)]
    inner = [(x, _interp(table, x) - side * sink) for x in xs]
    outer = [(x, _interp(table, x) + side * (thick - sink)) for x in reversed(xs)]
    pts = inner + outer if side > 0 else list(reversed(inner + outer))
    return prism(name, pts, width, BRASS, bevel_w=0.0003)


strap("UpperTang", stock_top, -0.058, 0.000, 0.0120, +1)
strap("LowerTang", stock_bot, -0.052, 0.000, 0.0105, -1)

# ---- lever: ONE flat steel bar. It runs back under the frame, drops into the trigger bow,
# comes up, runs back along the wrist as the top of the finger loop, round the back,
# forward along the bottom and up to meet itself behind the trigger bow.
LEVER_PIVOT = (0.150, 0.0, 0.004)
lever = sweep("Lever", fillet([
    (0.153, -0.0040), (0.100, -0.0040), (0.094, -0.0470), (0.042, -0.0500), (0.024, -0.0150),
    (-0.036, -0.0450), (-0.050, -0.0670), (-0.038, -0.0800), (0.034, -0.0500)],
    [0, 0.008, 0.012, 0.012, 0.007, 0.012, 0.010, 0.010, 0]), 0.0080, 0.0118, STEEL)
pivot(lever, *LEVER_PIVOT)
tube("LeverPin", -FRAME_W / 2 - 0.0006, FRAME_W / 2 + 0.0006, 0.0085, 0.0024, STEEL, y=0.150, sides=14, axis="Y")

trigger = prism("Trigger", [(0.056, 0.002), (0.0575, -0.008), (0.055, -0.016), (0.051, -0.0225), (0.0535, -0.0240),
                            (0.058, -0.017), (0.0625, -0.008), (0.064, 0.002)], 0.0050, STEEL, bevel_w=0.0008)
pivot(trigger, 0.060, 0.0, 0.004)

# ---- sights
prism("RearSightBase", [(0.262, top_flat - 0.0005), (0.318, top_flat - 0.0005), (0.318, top_flat + 0.0016),
                        (0.300, top_flat + 0.0026), (0.262, top_flat + 0.0026)], 0.0100, BLUED, bevel_w=0.0004)
leaf = prism("RearSightLeaf", [(0.262, top_flat + 0.0024), (0.2665, top_flat + 0.0024), (0.2665, top_flat + 0.0115),
                               (0.262, top_flat + 0.0125)], 0.0180, BLUED, bevel_w=0.0003)
cut(leaf, box("cn", 0.25, 0.28, -0.0016, 0.0016, top_flat + 0.0080, top_flat + 0.02, None, 0))
cut(leaf, tube("cn2", 0.25, 0.28, top_flat + 0.0150, 0.0060, None, sides=20))
prism("FrontSightBase", [(0.780, top_flat - 0.0005), (0.800, top_flat - 0.0005), (0.798, top_flat + 0.0020),
                         (0.782, top_flat + 0.0020)], 0.0085, BLUED, bevel_w=0.0004)
prism("FrontSightBlade", [(0.783, top_flat + 0.0018), (0.797, top_flat + 0.0018), (0.7955, top_flat + 0.0088),
                          (0.7895, top_flat + 0.0100)], 0.0020, BRASS, bevel_w=0.0003)

for ob, role in ((lever, "lever"), (hammer, "hammer"), (trigger, "trigger"), (bolt, "bolt"), (carrier, "carrier")):
    ob["forge_part"] = role

finish(opt["out"], {"asset": "lever_rifle", "pack": "period_arms",
                    "moving_parts": {"lever": list(LEVER_PIVOT), "hammer": [0.032, 0.0, 0.022], "trigger": [0.060, 0.0, 0.004]}})
