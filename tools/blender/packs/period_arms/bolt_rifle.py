# Period Arms pack, asset 2: a bolt-action infantry rifle of the 1890s (our own model of
# the type; no maker's name or marks on it).
# Run by forge.ps1. Muzzle points down +X, up is +Z, the shooter's right is -Y.
# Origin: under the rear of the action, where the trigger hand closes on the wrist.
#
# Parts list (rough sizes in millimetres)
#   Stock          walnut   one piece, butt to nose cap, 1145 long, straight wrist 44 x 38,
#                           52 wide at the action, barrel channel cut to the bore line, finger grooves,
#                           heel 50 below the bore line
#   Handguard      walnut   half-round shell over the barrel, rear sight to lower band, 230 long
#   ButtPlate      steel    128 x 49, slightly curved, top tang, two screws
#   Receiver       blued    tube 34 across, open on top and to the right; RearBridge and ReceiverRing 37
#   Barrel         blued    755 long, 30 at the chamber, a step, then 25 down to 16
#   Muzzle, Bore   blued    plain crown with an 8 bore
#   Bolt           satin    20 across, 186 long          MOVES: turns and slides on the bore line
#     collar, round handle root, tapered handle, 21 ball knob, extractor, shroud, safety spindle
#     and wing, cocking piece and flange ride on it
#   FloorStrap     blued    strap let into the belly, a screw at each end
#   Magazine       blued    box 22 wide, 84 long, stands 48 below the stock; side ribs, flange, floorplate
#   TriggerGuard   blued    flat strap 15 x 3 in an oval bow that meets the magazine
#   Trigger        steel    MOVES: hinge at its top
#   LowerBand, NoseCap      blued, 2 thick round the wood and the barrel; band springs; bayonet lug
#   RearSight      blued    base 83 long with curved ramp walls, leaf, slider, notch plate
#   FrontSight     blued    low band 25 long, ramp, blade
#   CleaningRod    steel    in the forend, 80 showing past the nose cap
#   CrossBolts (2) with escutcheons, BoltStop lever, sling loops (front on the lower band, rear on a plate)
import os, sys, math
sys.dont_write_bytecode = True
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", ".."))
import bpy, bmesh
from mathutils import Matrix
from fb_parts import *
from fb_parts import _interp, _obj

opt = args_after_dashes()
reset()

BLUED = material("M_BluedSteel", (0.040, 0.046, 0.062), 1.0, 0.36, grain="metal")
FITTING = material("M_BluedSteelWorn", (0.060, 0.064, 0.074), 1.0, 0.48, grain="metal")
STEEL = material("M_GreySteel", (0.11, 0.11, 0.12), 1.0, 0.52, grain="metal")
BRIGHT = material("M_SatinSteel", (0.30, 0.30, 0.32), 1.0, 0.50, grain="metal")
WALNUT = material("M_WalnutOiled", (0.090, 0.036, 0.016), 0.0, 0.62, grain="wood")
BLACK = material("M_Bore", (0.004, 0.004, 0.004), 0.0, 0.9)
for n in WALNUT.node_tree.nodes:          # tighter grain than the shared default
    if n.type == "MAPPING":
        n.inputs["Scale"].default_value = (7.0, 300.0, 300.0)
    if n.type == "VALTORGB":              # a third of the default grain contrast
        n.color_ramp.elements[0].color = (0.090 * 0.72, 0.036 * 0.72, 0.016 * 0.72, 1.0)
    if n.type == "BSDF_PRINCIPLED":       # an oil finish has no bright rim
        n.inputs["Specular IOR Level"].default_value = 0.2

BZ = 0.050            # bore line
FLAT = BZ + 0.001     # the stock's top edge beside the barrel
MUZZLE_X = 0.966
STOCK_X0, STOCK_X1 = -0.285, 0.860
POWER = 2.6


# ---------------------------------------------------------------- local helpers
def solid(ob):
    """Apply every modifier now, so a cut can follow a subsurf."""
    bpy.context.view_layer.objects.active = ob
    for m in list(ob.modifiers):
        bpy.ops.object.modifier_apply(modifier=m.name)
    return ob


def ball(name, x, y, z, r, mat):
    bm = bmesh.new()
    bmesh.ops.create_uvsphere(bm, u_segments=18, v_segments=10, radius=r)
    bmesh.ops.translate(bm, vec=(x, y, z), verts=bm.verts)
    return _obj(name, bm, mat)


def ride(child, parent):
    child.parent = parent
    child.matrix_parent_inverse = parent.matrix_world.inverted()
    return child


def vtube(name, x, y, z0, z1, r, mat, sides=14, bevel_w=0.0003):
    """A cylinder standing on Z."""
    ob = tube(name, 0.0, z1 - z0, 0.0, r, mat, sides=sides, bevel_w=bevel_w)
    ob.data.transform(Matrix.Rotation(math.radians(-90), 4, "Y"))
    ob.data.transform(Matrix.Translation((x, y, z0)))
    return ob


def vscrew(name, x, y, z, r=0.0036, turn=30.0):
    """A slotted screw head seen from below, its face at height z."""
    s = vtube(name, x, y, z, z + 0.0012, r, STEEL)
    slot = box("c_slot", -0.006, 0.006, -0.0005, 0.0005, -0.0004, 0.0004, None, 0)
    slot.data.transform(Matrix.Rotation(math.radians(turn), 4, "Z"))
    slot.data.transform(Matrix.Translation((x, y, z)))
    return cut(s, slot)


def yscrew(name, x, z, y_face, side, r=0.0026, turn=20.0, collar=0.0042, proud=0.0007):
    """A slotted cross-bolt head with a round escutcheon on the stock's side (side -1 right, +1 left)."""
    lo, hi = sorted((y_face - side * 0.002, y_face + side * 0.0003))
    tube(name + "_Plate", lo, hi, z, collar, STEEL, y=x, sides=18, axis="Y", bevel_w=0.0002)
    lo, hi = sorted((y_face - side * 0.002, y_face + side * proud))
    s = tube(name, lo, hi, z, r, BLUED, y=x, sides=14, axis="Y", bevel_w=0.0002)
    slot = box("c_slot", -0.006, 0.006, -0.0005, 0.0005, -0.0004, 0.0004, None, 0)
    slot.data.transform(Matrix.Rotation(math.radians(turn), 4, "Y"))
    slot.data.transform(Matrix.Translation((x, y_face + side * proud, z)))
    return cut(s, slot)


def loop(name, x, z_top, half_w, depth, mat, wire=0.0036):
    """An oval wire loop hanging across the gun (a sling swivel)."""
    pts = fillet([(-half_w, 0.0), (half_w, 0.0), (half_w, -depth), (-half_w, -depth)], min(half_w, depth / 2) * 0.9, closed=True)
    ob = sweep(name, pts, wire, wire, mat, cyclic=True)
    ob.data.transform(Matrix.Rotation(math.radians(90), 4, "Z"))
    ob.data.transform(Matrix.Translation((x, 0.0, z_top)))
    return ob


def strap(name, table, x0, x1, width, side, mat, thick=0.0026, sink=0.0020, n=12):
    xs = [x0 + (x1 - x0) * k / n for k in range(n + 1)]
    inner = [(x, _interp(table, x) - side * sink) for x in xs]
    outer = [(x, _interp(table, x) + side * (thick - sink)) for x in reversed(xs)]
    pts = inner + outer if side > 0 else list(reversed(inner + outer))
    return prism(name, pts, width, mat, bevel_w=0.0003)


# ---------------------------------------------------------------- wood
stock_top = [(-0.290, 0.006), (-0.108, 0.042), (-0.090, 0.035), (0.000, 0.036), (0.040, 0.051),
             (0.075, 0.064), (0.860, 0.064)]                       # straight comb, a comb nose, a level wrist
stock_bot = [(-0.290, -0.120), (-0.060, -0.012), (-0.030, -0.008), (0.000, -0.001), (0.020, 0.000),
             (0.210, 0.000), (0.300, 0.014), (0.560, 0.021), (0.860, 0.026)]   # the toe line is dead straight
stock_w = [(-0.290, 0.048), (-0.140, 0.045), (-0.070, 0.037), (0.000, 0.038), (0.060, 0.046), (0.110, 0.048),
           (0.200, 0.048), (0.320, 0.040), (0.560, 0.036), (0.860, 0.032)]


def half_w(x, z=None):
    """Half the stock's width at x (at height z, default its widest)."""
    w = _interp(stock_w, x) / 2
    if z is None:
        return w
    t, b = _interp(stock_top, x), _interp(stock_bot, x)
    rel = min(0.999, abs((z - (t + b) / 2) / ((t - b) / 2)))
    return w * (1 - rel ** POWER) ** (1 / POWER)


stock = loft("Stock", STOCK_X0, STOCK_X1, stock_top, stock_bot, stock_w, WALNUT, steps=60, sides=20, power=POWER, soften=1)
BUTT_C, BUTT_H = -0.057, 0.065


def butt_curve(z):     # a shallow hollow in the butt
    return 0.008 * (1 - ((z - BUTT_C) / BUTT_H) ** 2) - 0.003


for v in stock.data.vertices:
    if v.co.x < STOCK_X0 + 0.018:
        v.co.x += butt_curve(v.co.z) * (STOCK_X0 + 0.018 - v.co.x) / 0.018
solid(stock)
cut(stock, box("c_channel", 0.000, 0.900, -0.1, 0.1, FLAT, 0.2, None, 0))          # barrel channel: flat top edges
for s in (-1, 1):                                                                 # finger grooves
    yc = s * (half_w(0.30) + 0.0022)
    cut(stock, loft("c_groove", 0.232, 0.368,
                    [(0.232, 0.0365), (0.250, 0.0405), (0.350, 0.0405), (0.368, 0.0365)],
                    [(0.232, 0.0355), (0.250, 0.0315), (0.350, 0.0315), (0.368, 0.0355)],
                    [(0.232, 0.002), (0.250, 0.012), (0.350, 0.012), (0.368, 0.002)], None,
                    steps=14, sides=14, power=2.0, subsurf=0, soften=1, y=yc))
bevel(stock, 0.0007)

butt = loft("ButtPlate", STOCK_X0 - 0.0080, STOCK_X0 + 0.0005, [(0, 0.0070)], [(0, -0.1215)], [(0, 0.0492)], FITTING,
            steps=2, sides=24, power=POWER, subsurf=0, soften=0)
bevel(butt, 0.0012)
for v in butt.data.vertices:
    v.co.x += butt_curve(v.co.z)
strap("ButtTang", stock_top, STOCK_X0 - 0.001, STOCK_X0 + 0.040, 0.0180, +1, FITTING, thick=0.0050, sink=0.0040)
for i, z in enumerate((-0.028, -0.095)):
    x = STOCK_X0 - 0.0092 + butt_curve(z)
    s = tube("ButtScrew%d" % i, x, x + 0.0022, z, 0.0042, BLUED, sides=14, bevel_w=0.0003)
    slot = box("c_slot", -0.0005, 0.0005, -0.006, 0.006, -0.0005, 0.0005, None, 0)
    slot.data.transform(Matrix.Rotation(math.radians(35 + 50 * i), 4, "X"))
    slot.data.transform(Matrix.Translation((x, 0.0, z)))
    cut(s, slot)

HG0, HG1 = 0.345, 0.563
CREST = 0.0135
hg = loft("Handguard", HG0, HG1, [(0, FLAT + CREST)], [(0, FLAT - CREST)],
          [(x, 2 * half_w(x, FLAT)) for x in (HG0, 0.42, 0.50, HG1)], WALNUT, steps=10, sides=24, power=2.3, soften=0)
solid(hg)
cut(hg, box("c_hg", 0.30, 0.60, -0.1, 0.1, -0.1, FLAT + 0.0006, None, 0))         # a half shell, a hair above the stock
bevel(hg, 0.0006)

# ---------------------------------------------------------------- receiver and barrel
receiver = tube("Receiver", 0.040, 0.215, BZ, 0.0170, BLUED, sides=28, bevel_w=0.0006)
cut(receiver, tube("c_bore", 0.030, 0.200, BZ, 0.0101, None, sides=22))
cut(receiver, box("c_port", 0.078, 0.168, -0.030, 0.0098, BZ + 0.0035, BZ + 0.030, None, 0))
bridge = tube("RearBridge", 0.040, 0.077, BZ, 0.0186, BLUED, sides=28, bevel_w=0.0015)
cut(bridge, tube("c_bore2", 0.030, 0.090, BZ, 0.0101, None, sides=22))
cut(bridge, box("c_guide", 0.030, 0.090, -0.0045, 0.0045, BZ + 0.0125, BZ + 0.030, None, 0))   # charger guide slot
tube("ReceiverRing", 0.168, 0.216, BZ, 0.0186, BLUED, sides=28, bevel_w=0.0015)
tube("GasHole", 0.0170, 0.01875, BZ + 0.003, 0.0018, BLACK, y=0.192, sides=10, axis="Y")
prism("BoltStop", [(0.042, BZ - 0.005), (0.080, BZ - 0.004), (0.080, BZ + 0.004), (0.052, BZ + 0.006), (0.038, BZ + 0.013),
                   (0.034, BZ + 0.009), (0.042, BZ + 0.004)], 0.0040, BLUED, y=0.0200, bevel_w=0.0008)
tube("BoltStopPin", 0.0195, 0.0228, BZ, 0.0024, STEEL, y=0.072, sides=12, axis="Y", bevel_w=0.0003)

R = [(0.200, 0.0150), (0.285, 0.0148), (0.300, 0.0125), (0.963, 0.0078)]
loft("Barrel", 0.205, 0.960, [(x, BZ + r) for x, r in R], [(x, BZ - r) for x, r in R], [(x, 2 * r) for x, r in R],
     BLUED, steps=40, sides=20, power=2.0, subsurf=0, soften=0)
muzzle = tube("Muzzle", 0.958, MUZZLE_X, BZ, 0.0079, BLUED, sides=20, bevel_w=0.0012)
cut(muzzle, tube("c_muz", 0.940, 0.975, BZ, 0.0040, None, sides=18))
tube("Bore", 0.9602, 0.9615, BZ, 0.0042, BLACK, sides=18)

# ---------------------------------------------------------------- bolt (one moving group)
bolt = tube("Bolt", 0.012, 0.198, BZ, 0.0100, BRIGHT, sides=22, bevel_w=0.0005)
pivot(bolt, 0.030, 0.0, BZ)
HR = [(0.004, 0.0062), (0.018, 0.0056), (0.056, 0.0046)]
handle = loft("BoltHandle", 0.004, 0.056, [(x, r) for x, r in HR], [(x, -r) for x, r in HR], [(x, 2 * r) for x, r in HR],
              BRIGHT, steps=8, sides=16, power=2.0, subsurf=0, soften=0)
handle.data.transform(Matrix.Rotation(math.radians(-90), 4, "Z"))
handle.data.transform(Matrix.Translation((0.030, 0.0, BZ)))
for part in (
    tube("BoltCollar", 0.022, 0.038, BZ, 0.0118, BRIGHT, sides=22, bevel_w=0.0006),
    tube("BoltHandleRoot", -0.0185, -0.0080, BZ, 0.0078, BRIGHT, y=0.030, sides=18, axis="Y", bevel_w=0.0010),
    handle,
    ball("BoltKnob", 0.030, -0.0645, BZ, 0.0105, BRIGHT),
    box("Extractor", 0.046, 0.197, -0.0116, -0.0088, BZ - 0.0045, BZ + 0.0045, BRIGHT, 0.0006),
    tube("BoltShroud", -0.012, 0.014, BZ, 0.0112, BLUED, sides=22, bevel_w=0.0010),
    tube("SafetySpindle", -0.012, 0.014, BZ + 0.0118, 0.0040, BLUED, sides=14, bevel_w=0.0005),
    prism("SafetyWing", [(-0.009, BZ + 0.0125), (0.009, BZ + 0.0125), (0.007, BZ + 0.0205), (0.000, BZ + 0.0225),
                         (-0.008, BZ + 0.0205)], 0.0060, BLUED, bevel_w=0.0012),
    tube("CockingPiece", -0.030, -0.012, BZ, 0.0076, BLUED, sides=18, bevel_w=0.0005),
    tube("CockingFlange", -0.038, -0.030, BZ, 0.0104, BLUED, sides=20, smooth=False, bevel_w=0.0008),
    tube("CockingButton", -0.041, -0.038, BZ, 0.0050, BLUED, sides=14, bevel_w=0.0005),
):
    ride(part, bolt)

# ---------------------------------------------------------------- floor strap, magazine, guard, trigger
box("FloorStrap", -0.050, 0.202, -0.0078, 0.0078, -0.0004, 0.0040, FITTING, 0.0005)
box("MagazineFlange", 0.100, 0.193, -0.0130, 0.0130, -0.0014, 0.0030, FITTING, 0.0006)
vscrew("GuardScrewRear", -0.040, 0.0, -0.0014)
vscrew("GuardScrewFront", 0.198, 0.0, -0.0014, turn=75.0)
MAG = [(0.104, 0.008), (0.104, -0.048), (0.188, -0.048), (0.188, 0.008)]
prism("Magazine", fillet(MAG, [0.0004, 0.004, 0.016, 0.0004], closed=True, n=7), 0.0220, FITTING, bevel_w=0.0016)
prism("MagazineRib", fillet([(0.111, -0.004), (0.111, -0.041), (0.181, -0.041), (0.181, -0.004)],
                            [0.003, 0.003, 0.011, 0.003], closed=True, n=5), 0.0236, FITTING, bevel_w=0.0008)
prism("MagazineFloor", [(0.1035, -0.0472), (0.1035, -0.0505), (0.1720, -0.0505), (0.1720, -0.0472)],
      0.0236, FITTING, bevel_w=0.0008)
tube("MagazinePin", -0.0122, 0.0122, -0.0440, 0.0018, STEEL, y=0.108, sides=12, axis="Y", bevel_w=0.0003)
sweep("TriggerGuard", fillet([(0.105, -0.014), (0.104, -0.039), (0.028, -0.039), (0.008, 0.001)],
                             [0, 0.019, 0.021, 0], n=14), 0.0034, 0.0150, FITTING)
trigger = prism("Trigger", [(0.060, 0.004), (0.0615, -0.008), (0.059, -0.016), (0.055, -0.0225), (0.0575, -0.024),
                            (0.062, -0.017), (0.0665, -0.008), (0.068, 0.004)], 0.0060, STEEL, bevel_w=0.0012)
pivot(trigger, 0.064, 0.0, 0.006)
for i, (x, z) in enumerate(((0.195, 0.028), (0.014, 0.020))):
    for side in (-1, 1):
        yscrew("CrossBolt%d%s" % (i, "R" if side < 0 else "L"), x, z, side * half_w(x, z), side, turn=20 + 60 * i)

# ---------------------------------------------------------------- bands, nose cap, rod, sling loops
BAND_X0, BAND_X1 = 0.553, 0.566
BX = (BAND_X0 + BAND_X1) / 2
band = loft("LowerBand", BAND_X0, BAND_X1, [(0, FLAT + CREST + 0.0018)], [(0, _interp(stock_bot, BX) - 0.0018)],
            [(0, 2 * half_w(BX) + 0.0036)], FITTING, steps=1, sides=28, power=2.5, subsurf=0, soften=0)
bevel(band, 0.0005)
box("BandLug", BX - 0.005, BX + 0.005, -0.0040, 0.0040, 0.0120, 0.0200, FITTING, 0.0008)
tube("BandScrew", -0.0052, 0.0052, 0.0155, 0.0022, STEEL, y=BX, sides=12, axis="Y", bevel_w=0.0003)
loop("SlingLoopFront", BX, 0.0155, 0.0190, 0.0240, FITTING)

NOSE_X0, NOSE_X1 = 0.830, 0.866
nose = loft("NoseCap", NOSE_X0, NOSE_X1, [(0, BZ + 0.0103)], [(0, _interp(stock_bot, 0.85) - 0.0020)],
            [(0, 2 * half_w(0.85) + 0.0040)], FITTING, steps=1, sides=28, power=2.5, subsurf=0, soften=0)
bevel(nose, 0.0008)
tube("NoseScrew", -half_w(0.85) - 0.0026, half_w(0.85) + 0.0026, 0.0370, 0.0026, STEEL, y=0.850, sides=12, axis="Y", bevel_w=0.0003)
box("BayonetLug", 0.826, 0.862, -0.0050, 0.0050, 0.0125, 0.0245, FITTING, 0.0006)
box("BayonetRail", 0.826, 0.862, -0.0075, 0.0075, 0.0100, 0.0135, FITTING, 0.0006)
for name, x0 in (("BandSpring", BAND_X1 + 0.003), ("NoseSpring", NOSE_X0 - 0.058)):
    hw = half_w(x0 + 0.03, 0.040)
    box(name, x0, x0 + 0.055, -hw - 0.0003, -hw + 0.003, 0.0380, 0.0420, FITTING, 0.0005)
    tube(name + "Pin", -hw - 0.0010, -hw + 0.002, 0.0400, 0.0016, BLUED, y=x0 + 0.048, sides=10, axis="Y")
tube("CleaningRod", 0.840, 0.908, 0.0345, 0.0030, STEEL, sides=12)
rod = tube("CleaningRodHead", 0.908, 0.920, 0.0345, 0.0042, STEEL, sides=14, bevel_w=0.0005)
cut(rod, box("c_rod", 0.915, 0.930, -0.0007, 0.0007, 0.02, 0.05, None, 0))

SX = -0.223
strap("SlingPlate", stock_bot, SX - 0.017, SX + 0.017, 0.0160, -1, FITTING, thick=0.0034, sink=0.0024)
zr = _interp(stock_bot, SX)
box("SlingPost", SX - 0.004, SX + 0.004, -0.0030, 0.0030, zr - 0.0080, zr - 0.0005, FITTING, 0.0008)
loop("SlingLoopRear", SX, zr - 0.0045, 0.0190, 0.0240, FITTING)

# ---------------------------------------------------------------- sights
S0 = BZ + 0.0170
prism("RearSightBase", [(0.262, BZ + 0.008), (0.345, BZ + 0.008), (0.345, S0 - 0.002), (0.341, S0), (0.262, S0)],
      0.0160, BLUED, bevel_w=0.0006)
RAMP = [(0.264, S0 + 0.0080), (0.280, S0 + 0.0074), (0.296, S0 + 0.0060), (0.312, S0 + 0.0040), (0.328, S0 + 0.0018), (0.341, S0 + 0.0004)]
for s in (-1, 1):
    prism("RearSightRamp" + ("R" if s < 0 else "L"), [(0.264, S0 - 0.001), (0.341, S0 - 0.001)] + list(reversed(RAMP)),
          0.0026, BLUED, y=s * 0.0067, bevel_w=0.0004)
prism("RearSightLeaf", [(0.270, S0 + 0.0076), (0.340, S0 + 0.0008), (0.340, S0 + 0.0032), (0.270, S0 + 0.0100)],
      0.0096, BLUED, bevel_w=0.0003)
tube("RearSightHinge", -0.0085, 0.0085, S0 + 0.0020, 0.0020, STEEL, y=0.340, sides=12, axis="Y")
notch = prism("RearSightNotch", [(0.2665, S0 + 0.0074), (0.2705, S0 + 0.0074), (0.2705, S0 + 0.0150), (0.2665, S0 + 0.0150)],
              0.0130, BLUED, bevel_w=0.0003)
cut(notch, prism("c_v", [(0.25, S0 + 0.0125), (0.29, S0 + 0.0125), (0.29, 1.0), (0.25, 1.0)], 0.0016, None, bevel_w=0))
slider = prism("RearSightSlider", [(0.299, S0 + 0.0042), (0.310, S0 + 0.0031), (0.310, S0 + 0.0078), (0.299, S0 + 0.0089)],
               0.0195, BLUED, bevel_w=0.0006)

tube("FrontSightBand", 0.922, 0.947, BZ, 0.0092, BLUED, sides=20, bevel_w=0.0006)
prism("FrontSightRamp", [(0.923, BZ + 0.0080), (0.946, BZ + 0.0080), (0.944, BZ + 0.0120), (0.925, BZ + 0.0120)],
      0.0075, BLUED, bevel_w=0.0005)
prism("FrontSightBlade", [(0.927, BZ + 0.0115), (0.944, BZ + 0.0115), (0.942, BZ + 0.0190), (0.934, BZ + 0.0205)],
      0.0020, BLUED, bevel_w=0.0003)

# The bolt lifts a quarter turn, draws back 85 mm, returns and turns down. The trigger rocks.
motion(bolt, "bolt", [{"t": 0}, {"t": 0.2, "rot": [-90, 0, 0]}, {"t": 0.45, "rot": [-90, 0, 0], "move": [-0.085, 0, 0]},
                      {"t": 0.7, "rot": [-90, 0, 0]}, {"t": 0.85}, {"t": 1}])
motion(trigger, "trigger", [{"t": 0}, {"t": 0.85}, {"t": 0.92, "rot": [0, 10, 0]}, {"t": 1}])

finish(opt["out"], {"asset": "bolt_rifle", "pack": "period_arms",
                    "moving_parts": {"bolt": [0.030, 0.0, BZ], "trigger": [0.064, 0.0, 0.006]}})
