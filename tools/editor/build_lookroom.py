# Runs inside the editor: .\tools\ue-py.ps1 -Script tools\editor\build_lookroom.py
#
# Lays out /Game/Firebird/Maps/L_LookRoom from the Megascans church ruin kit.
# The map is a normal saved level: after this runs, anyone can move, add or delete
# pieces by hand in the editor. Running the script again REPLACES everything it placed
# (actors tagged "LR"). Actors without that tag are left alone, so hand-placed additions
# survive as long as they do not carry the tag.
#
# Units are centimetres. X runs west (-) to east (+), Y south (-) to north (+).
import unreal

MAP = "/Game/Firebird/Maps/L_LookRoom"
MAT_DIR = "/Game/Firebird/Materials/LookRoom"
KIT = "/Game/Fab/Megascans"
TAG = unreal.Name("LR")

eal = unreal.EditorAssetLibrary
mel = unreal.MaterialEditingLibrary
les = unreal.get_editor_subsystem(unreal.LevelEditorSubsystem)
eas = unreal.get_editor_subsystem(unreal.EditorActorSubsystem)
CUBE = unreal.load_asset("/Engine/BasicShapes/Cube")
PLANE = unreal.load_asset("/Engine/BasicShapes/Plane")


def log(m):
    unreal.log("FB_PY " + m)


def setp(obj, name, value):
    """Set an editor property; log and carry on if this engine version names it differently."""
    try:
        obj.set_editor_property(name, value)
    except Exception as e:
        log("WARN could not set %s: %s" % (name, str(e)[:120]))


# ---------------------------------------------------------------- kit lookup
_meshes = []
for _p in eal.list_assets(KIT + "/3D", recursive=True):
    _o = unreal.load_asset(_p)
    if isinstance(_o, unreal.StaticMesh):
        _b = _o.get_bounding_box()
        _meshes.append((_p.split("/")[5], round(_b.max.x - _b.min.x), round(_b.max.z - _b.min.z), _o))


def kit(piece, width=None, height=None):
    """Find a kit mesh by part of its folder name, and optionally its width/height in cm."""
    hits = [m for m in _meshes if piece in m[0]
            and (width is None or abs(m[1] - width) <= 3) and (height is None or abs(m[2] - height) <= 3)]
    if not hits:
        raise RuntimeError("kit piece not found: %s %s %s" % (piece, width, height))
    mesh = hits[0][3]
    # Walkable and shootable: use the mesh itself for collision.
    bs = mesh.get_editor_property("body_setup")
    if bs and bs.get_editor_property("collision_trace_flag") != unreal.CollisionTraceFlag.CTF_USE_COMPLEX_AS_SIMPLE:
        bs.set_editor_property("collision_trace_flag", unreal.CollisionTraceFlag.CTF_USE_COMPLEX_AS_SIMPLE)
        eal.save_loaded_asset(mesh, only_if_is_dirty=False)
    return mesh


def surface(piece):
    for p in eal.list_assets(KIT + "/Surfaces", recursive=True):
        if piece in p:
            o = unreal.load_asset(p)
            if isinstance(o, unreal.MaterialInstanceConstant):
                return o
    raise RuntimeError("surface not found: " + piece)


def tiled(name, piece, tiling, brightness=1.0):
    """A child material instance of a kit surface with its own tiling. Kit materials stay untouched."""
    path = "%s/%s" % (MAT_DIR, name)
    mi = unreal.load_asset(path) if eal.does_asset_exist(path) else None
    if mi is None:
        mi = unreal.AssetToolsHelpers.get_asset_tools().create_asset(
            name, MAT_DIR, unreal.MaterialInstanceConstant, unreal.MaterialInstanceConstantFactoryNew())
    mel.set_material_instance_parent(mi, surface(piece))
    mel.set_material_instance_scalar_parameter_value(mi, "Tiling", tiling)
    mel.set_material_instance_scalar_parameter_value(mi, "Brightness", brightness)
    mel.update_material_instance(mi)
    eal.save_loaded_asset(mi, only_if_is_dirty=False)
    return mi


# ---------------------------------------------------------------- placing
def _finish(actor, folder, scale=None):
    if scale:
        actor.set_actor_scale3d(unreal.Vector(*scale))
    actor.set_folder_path("LookRoom/" + folder)
    actor.set_editor_property("tags", [TAG])
    return actor


def place(mesh, x, y, z, yaw=0.0, folder="Kit", scale=None, pitch=0.0, roll=0.0, material=None):
    a = eas.spawn_actor_from_object(mesh, unreal.Vector(x, y, z), unreal.Rotator(roll=roll, pitch=pitch, yaw=yaw))
    if material:
        a.static_mesh_component.set_material(0, material)
    return _finish(a, folder, scale)


def spawn(cls, x, y, z, folder, yaw=0.0, pitch=0.0):
    a = eas.spawn_actor_from_class(cls, unreal.Vector(x, y, z), unreal.Rotator(roll=0.0, pitch=pitch, yaw=yaw))
    return _finish(a, folder)


def point_light(x, y, z, colour, intensity, radius, folder="Lights", shadows=True):
    a = spawn(unreal.PointLight, x, y, z, folder)
    c = a.light_component
    c.set_mobility(unreal.ComponentMobility.MOVABLE)
    setp(c, "intensity_units", unreal.LightUnits.CANDELAS)
    c.set_intensity(intensity)
    c.set_light_color(unreal.LinearColor(*colour))
    c.set_attenuation_radius(radius)
    c.set_cast_shadows(shadows)
    setp(c, "volumetric_scattering_intensity", 0.15)   # lamps light the stone, not the air
    return a


# ---------------------------------------------------------------- level
if eal.does_asset_exist(MAP):
    les.load_level(MAP)
else:
    les.new_level(MAP)
for a in eas.get_all_level_actors():
    if TAG in a.get_editor_property("tags"):
        eas.destroy_actor(a)

M_WALL = tiled("MI_LR_Wall", "wall_stone_rough_01", 2.0)
M_WALL_B = tiled("MI_LR_WallDark", "wall_stone_rough_03", 2.0, 0.8)
M_FLOOR = tiled("MI_LR_Floor", "floor_stone_01", 2.0)
M_GALLERY = tiled("MI_LR_GalleryFloor", "floor_stone_02", 2.0)
M_SMOOTH = tiled("MI_LR_Smooth", "texture_stone_smooth_01", 2.0)

EXPOSURE = 1.1                     # manual exposure: higher is brighter
# The air and the sky. These five numbers are most of the room's mood; change them here.
SHAFTS = 12.0                      # how strongly the sun lights the haze (0.45 = barely seen)
FOG = 0.03                         # haze density
FOG_THICK = 1.0                    # how fast the haze swallows distance
SKY = (0.10, 0.07, 0.055)          # sky brightness and tint (1,1,1 = a clear bright sky)
SKY_FILL = 1.0                     # how much the sky lights the shadows
L, W, H = 3200, 2000, 800          # inside length (X), width (Y), wall height
HX, HY = L // 2, W // 2
T = 80                             # wall thickness
AISLE = 400                        # side aisle depth
GAL_Z = 420                        # gallery walking height

# Floor: 4 m tiles, each showing the 2 m scan twice, so the joints line up.
for ix in range(L // 400):
    for iy in range(W // 400):
        place(PLANE, -HX + 200 + ix * 400, -HY + 200 + iy * 400, 0, folder="Floor",
              scale=(4, 4, 1), material=M_FLOOR)


def wall_panel(x, y, z, yaw, mat=M_WALL, size=(4, 0.8, 4), folder="Walls"):
    place(CUBE, x, y, z, yaw, folder, size, material=mat)


# Long walls (north and south), two rows of 4 m panels.
for ix in range(L // 400):
    x = -HX + 200 + ix * 400
    for row in range(2):
        z = 200 + row * 400
        wall_panel(x, HY + T / 2, z, 0)
        wall_panel(x, -HY - T / 2, z, 0)
# East wall (solid) and west wall (a gap in the middle for the great window).
for iy in range(W // 400):
    y = -HY + 200 + iy * 400
    for row in range(2):
        z = 200 + row * 400
        wall_panel(HX + T / 2, y, z, 90)
        if abs(y) > 100:
            wall_panel(-HX - T / 2, y, z, 90)

BUT = kit("butress_stone_m_03")                 # 67 x 66 x 319
# West wall: the great window, with stone below and above it.
WIN = kit("window_stone_modular_10")            # 453 wide, 536 tall, pivot at one bottom corner
SILL = 130
place(WIN, -HX - T / 2, -226, SILL, 90, "WestWindow")
place(CUBE, -HX - T / 2, 0, SILL / 2, 90, "WestWindow", (4, 0.8, SILL / 100.0), material=M_WALL_B)
for side in (1, -1):                             # stone behind the two top corners of the pointed frame
    place(CUBE, -HX - T / 2 - 10, side * 160, SILL + 536 - 70, 90, "WestWindow", (1.35, 0.5, 1.4), material=M_WALL_B)
place(CUBE, -HX - T / 2, 0, (SILL + 536 + H) / 2, 90, "WestWindow",
      (4, 0.8, (H - SILL - 536) / 100.0), material=M_WALL_B)

# Dress the west wall so it is not one flat face: a skirt at the foot, a string course over the
# window, and buttresses each side of it.
SKIRT = kit("wall_stone_skirt_01")              # 235 x 57 x 43, pivot at its middle
y = -HY + 118
while y < HY:
    if abs(y) > 240:
        place(SKIRT, -HX + 26, y, 0, 90, "WestWindow")
    y += 235
COURSE = kit("trim_stone_rough_01")             # 300 x 39 x 25, pivot at one end
for z in (SILL + 536 + 24, SILL - 26):
    y = -HY + 50
    while y + 300 <= HY:
        if z > 400 or abs(y + 150) > 240:
            place(COURSE, -HX + 16, y, z, 90, "WestWindow")
        y += 300
for side in (1, -1):
    for off in (330, 760):
        for z in (0, 319):
            place(BUT, -HX + 30, side * off, z, 90, "WestWindow")

# Arcades: columns with arches on top, both sides, carrying the galleries.
COL = kit("column_stone_02", 73, 201)
ARCH = kit("arch_stone_modular_03")             # 350 wide, 202 tall, pivot at the left foot
BAYS = 7
ARC_X0 = -BAYS * 350 / 2.0
for side in (1, -1):
    y = side * (HY - AISLE)
    for i in range(BAYS + 1):
        place(COL, ARC_X0 + i * 350, y, 0, 0, "Arcade")
    for i in range(BAYS):
        place(ARCH, ARC_X0 + i * 350, y, 200, 0, "Arcade")

# Galleries: a walkway over each aisle and across the east end. The north one stops short
# to leave room for the stairs.
STAIR_X0, STAIR_X1 = 380, 1200
for side in (1, -1):
    y = side * (HY - AISLE / 2)
    for ix in range(L // 400):
        x = -HX + 200 + ix * 400
        if x > 1200:
            continue                                   # east end is the cross gallery
        if side == 1 and STAIR_X0 - 200 < x < STAIR_X1 + 200:
            continue                                   # stairwell
        place(CUBE, x, y, GAL_Z - 10, 0, "Gallery", (4, 4, 0.2), material=M_GALLERY)
for iy in range(W // 400):
    place(CUBE, 1400, -HY + 200 + iy * 400, GAL_Z - 10, 0, "Gallery", (4, 4, 0.2), material=M_GALLERY)

# Low wall along the gallery edges so nobody walks off by accident.
RAIL = kit("wall_stone_top_01")                 # 300 x 69 x 40, pivot at one end
for side in (1, -1):
    y = side * (HY - AISLE + 20)
    x = -HX + 40
    end = 1200 if side == -1 else STAIR_X0 - 200
    while x + 300 <= end + 5:
        place(RAIL, x, y, GAL_Z, 0, "Gallery")
        place(RAIL, x, y, GAL_Z + 40, 0, "Gallery")
        x += 300
y = -HY + AISLE + 60
while y + 300 <= HY - AISLE - 20:
    place(RAIL, 1220, y, GAL_Z, 90, "Gallery")
    place(RAIL, 1220, y, GAL_Z + 40, 90, "Gallery")
    y += 300

# Stairs in the north aisle, climbing east up to the cross gallery.
STEP = kit("stairs_stone_step_01")              # 124 x 41 x 19
n_steps = int(GAL_Z / 19)
run = (STAIR_X1 - STAIR_X0) / float(n_steps)
for i in range(n_steps):
    for lane in (-1, 0, 1):
        place(STEP, STAIR_X0 + i * run, HY - AISLE / 2 + lane * 124, i * 19, 90, "Stairs")
# Solid ramp hidden under the steps so feet never catch.
place(CUBE, (STAIR_X0 + STAIR_X1) / 2, HY - AISLE / 2, GAL_Z / 2 - 30, 0, "Stairs",
      ((STAIR_X1 - STAIR_X0) / 100.0 + 0.3, 3.6, 0.3), pitch=27.0, material=M_WALL_B)

# East end: a blind doorway under the cross gallery, and buttresses along the side walls.
door = place(kit("door_stone_modular_01"), HX - 40, 0, 0, 90, "EastDoor")
door.static_mesh_component.set_cast_shadow(False)   # or the lamp in front throws a black halo round it
for x in (-1400, -700, 0, 700):
    place(BUT, x, HY - 30, 0, 0, "Walls")
    place(BUT, x, -HY + 30, 0, 180, "Walls")

# Roof: closed over the east two thirds, broken open over the west end.
for ix in range(L // 400):
    x = -HX + 200 + ix * 400
    if x < -600:
        continue
    for iy in range(W // 400):
        place(CUBE, x, -HY + 200 + iy * 400, H + 20, 0, "Roof", (4, 4, 0.4), material=M_WALL_B)

# The fallen roof and loose stone under the hole.
place(kit("roof_stone_rough_01"), -1000, 150, 0, 25, "Rubble")
place(kit("gable_stone_edge_02"), -1150, -380, 45, 70, "Rubble", roll=90)

# Break up the straight edge of the hole in the roof with hanging and fallen courses of stone.
import random
rng = random.Random(7)                           # fixed seed: the same ruin every time
COURSES = [kit("wall_stone_modular_01", 300, 40), kit("wall_stone_top_02"), kit("wall_stone_modular_02", 300, 55)]
y = -HY + 40
while y < HY - 200:
    step = rng.choice([220, 260, 300])
    place(rng.choice(COURSES), -600 - rng.randint(0, 110), y, H - rng.randint(0, 30),
          90 + rng.randint(-14, 14), "Roof", pitch=rng.randint(-10, 10), roll=rng.randint(-6, 6))
    if rng.random() < 0.45:                      # some have dropped to the floor below
        place(rng.choice(COURSES), -640 - rng.randint(0, 260), y + rng.randint(-60, 60), 4,
              rng.randint(0, 359), "Rubble", roll=rng.choice([0, 0, 90]))
    y += step
for side in (1, -1):                             # and along the two side edges of the hole
    x = -HX + 60
    while x < -700:
        place(rng.choice(COURSES), x, side * (HY - 60 - rng.randint(0, 90)), H - rng.randint(0, 25),
              rng.randint(-10, 10), "Roof", pitch=rng.randint(-6, 6))
        x += rng.choice([260, 300, 340])

# Blind windows high on the side walls, at gallery level.
SIDEWIN = kit("window_stone_modular_05")        # 200 x 200, pivot at one bottom corner
for x in (-1300, -500, 300):
    place(SIDEWIN, x, HY - 25, GAL_Z + 90, 0, "Walls")
    place(SIDEWIN, x + 200, -HY + 25, GAL_Z + 90, 180, "Walls")
SLABS = [kit("floor_stone_slab_01"), kit("floor_stone_slab_02"), kit("floor_stone_slab_05"), kit("floor_stone_slab_03")]
for i, (x, y, yaw) in enumerate([(-800, 420, 15), (-1150, -120, 70), (-560, 60, 130), (-1320, 330, 40),
                                 (-380, -420, 95), (-900, -520, 10)]):
    place(SLABS[i % len(SLABS)], x, y, 2, yaw, "Rubble")

# ---------------------------------------------------------------- timber and props (other packs)
SALOON = "/Game/Scene_Saloon/Assets/MS/3D/"


def pack(name):
    """A mesh from the Megascans saloon pack, or None if the pack is not in the project."""
    path = "%s%s/SM_%s" % (SALOON, name, name)
    if not eal.does_asset_exist(path):
        log("WARN pack mesh missing: " + name)
        return None
    return unreal.load_asset(path)


def prop(name, x, y, z=0.0, yaw=0.0, folder="Props", scale=None, pitch=0.0, roll=0.0):
    m = pack(name)
    return place(m, x, y, z, yaw, folder, scale, pitch, roll) if m else None


# Roof timbers. The stone roof sits on tie beams that cross the hall wall to wall; each is two
# 4 m beams stretched to 10 m. Over the broken west end some are left, burnt, and some came down.
BEAM = "Ind_Sup_Beam_Wood_Old_04"                # 402 x 42 x 27, pivot at its middle
BEAM_Z = H - 45
for x in range(-400, HX, 400):                   # under the closed roof
    for side in (1, -1):
        prop(BEAM, x, side * 500, BEAM_Z, 90, "Roof", (2.5, 1.7, 2.4))
for x, y0, pitch, roll in [(-900, 500, 0, 0), (-900, -500, 0, 4), (-1300, -520, -3, 0)]:   # still up, in the open
    prop(BEAM, x, y0, BEAM_Z, 90, "Roof", (2.5, 1.7, 2.4), pitch=pitch, roll=roll)
prop(BEAM, -1300, 640, BEAM_Z - 170, 90, "Roof", (1.8, 1.7, 2.4), pitch=-28)               # snapped, hanging from the north wall
prop(BEAM, -1180, 80, 150, 20, "Rubble", (2.2, 1.7, 2.4), pitch=24)                        # one end on the fallen roof
prop(BEAM, -760, -200, 16, 115, "Rubble", (2.0, 1.7, 2.4), roll=12)                        # flat on the floor
prop("Ind_Con_Supplies_Plank_wood_Long_01", -700, 250, 6, 40, "Rubble")
prop("Ind_Con_Supplies_Plank_wood_Long_01", -640, 300, 9, 75, "Rubble", roll=8)

# A few things people left: stores by the east door and under the south gallery.
for x, y, yaw, name in [(1380, -330, 0, "His_Med_Storage_Barrel_Wood_Worn_02"),
                        (1450, -270, 40, "His_Med_Storage_Barrel_Wood_Worn_01"),
                        (1385, -245, 110, "His_Med_Storage_Barrel_Wood_Worn_01"),
                        (1430, 330, 200, "Res_Sto_Chest_Wood_Worn_08"),
                        (-300, -860, 15, "His_Med_Storage_Barrel_Wood_Worn_02"),
                        (-230, -900, 70, "His_Med_Storage_Barrel_Wood_Worn_01"),
                        (700, 880, 185, "Res_Sto_Chest_Wood_Worn_08")]:
    prop(name, x, y, 0, yaw)
prop("His_Wil_Cart_Wheel_Wood_Old_01", 1500, 420, 74, 0, pitch=78)                         # leaning on the east wall

# The waystone: a short pillar on a plinth with the freed light held above it. The only cool
# colour in the room.
place(kit("pillar_stone_modular_01", 67, 49), 600, 0, 0, 0, "Waystone")
place(kit("pillar_stone_modular_01", 47, 100), 600, 0, 49, 0, "Waystone")


def glow(name, colour, strength):
    """An unlit glowing material: one colour, brighter than white so it blooms."""
    path = "%s/%s" % (MAT_DIR, name)
    if eal.does_asset_exist(path):
        return unreal.load_asset(path)
    mat = unreal.AssetToolsHelpers.get_asset_tools().create_asset(name, MAT_DIR, unreal.Material, unreal.MaterialFactoryNew())
    mat.set_editor_property("shading_model", unreal.MaterialShadingModel.MSM_UNLIT)
    c = mel.create_material_expression(mat, unreal.MaterialExpressionConstant3Vector, -300, 0)
    c.set_editor_property("constant", unreal.LinearColor(colour[0] * strength, colour[1] * strength, colour[2] * strength, 1.0))
    mel.connect_material_property(c, "", unreal.MaterialProperty.MP_EMISSIVE_COLOR)
    mel.recompile_material(mat)
    eal.save_loaded_asset(mat, only_if_is_dirty=False)
    return mat


orb = place(unreal.load_asset("/Engine/BasicShapes/Sphere"), 600, 0, 186, 0, "Waystone", (0.2, 0.2, 0.2),
            material=glow("M_LR_WaystoneGlow", (0.25, 0.85, 1.0), 40.0))
orb.static_mesh_component.set_collision_enabled(unreal.CollisionEnabled.NO_COLLISION)
orb.static_mesh_component.set_cast_shadow(False)

# The city outside: three burnt-out fronts beyond the west wall, seen through the great window
# and over the broken roof. Far enough away that nobody reaches them.
TOWN = "/Game/Gothic_Environment/Meshes/Gothic_buildings/SM_Gothic_building_09"   # 19 x 13 x 28 m
if eal.does_asset_exist(TOWN):
    town = unreal.load_asset(TOWN)
    for x, y, z, yaw in [(-HX - 2700, -250, -250, 15), (-HX - 3600, 1700, -400, 80), (-HX - 3100, -2300, -300, -35)]:
        t = place(town, x, y, z, yaw, "Skyline")
        t.static_mesh_component.set_collision_enabled(unreal.CollisionEnabled.NO_COLLISION)
else:
    log("WARN skyline pack missing")

# ---------------------------------------------------------------- light and air
sun = spawn(unreal.DirectionalLight, 0, 0, 1500, "Lights", yaw=4.0, pitch=-17.0)
sc = sun.light_component
sc.set_mobility(unreal.ComponentMobility.MOVABLE)
sc.set_intensity(5.0)
sc.set_light_color(unreal.LinearColor(1.0, 0.48, 0.20))
setp(sc, "atmosphere_sun_light", True)
setp(sc, "volumetric_scattering_intensity", SHAFTS)  # the sun shows as shafts in the smoky air

# The sky is a city on fire at dusk: dim and brown, never brighter than the flames inside.
atm = spawn(unreal.SkyAtmosphere, 0, 0, 0, "Lights")
ac = atm.get_component_by_class(unreal.SkyAtmosphereComponent)
setp(ac, "sky_luminance_factor", unreal.LinearColor(*SKY))
setp(ac, "mie_scattering_scale", 0.03)             # thick haze round the sun
spawn(unreal.VolumetricCloud, 0, 0, 0, "Lights")   # cloud for the low sun to catch
sky = spawn(unreal.SkyLight, 0, 0, 1200, "Lights")
kc = sky.light_component
kc.set_mobility(unreal.ComponentMobility.MOVABLE)
setp(kc, "real_time_capture", True)
kc.set_intensity(SKY_FILL)

fog = spawn(unreal.ExponentialHeightFog, 0, 0, 100, "Lights")
fc = fog.component
setp(fc, "fog_density", FOG)
setp(fc, "fog_height_falloff", 0.05)
setp(fc, "fog_inscattering_luminance", unreal.LinearColor(0.20, 0.11, 0.06))
setp(fc, "enable_volumetric_fog", True)
setp(fc, "volumetric_fog_scattering_distribution", 0.75)
setp(fc, "volumetric_fog_albedo", unreal.Color(r=255, g=214, b=170, a=255))
setp(fc, "volumetric_fog_extinction_scale", FOG_THICK)
setp(fc, "volumetric_fog_distance", 8000.0)

# Small warm lights with darkness between them: one under each gallery end and by the door.
WARM = (1.0, 0.48, 0.16)
NICHE = kit("wall_stone_niche_01")              # 80 x 43 x 98: each aisle light sits in one
for x, y in [(-1000, 1), (200, 1), (-1000, -1), (200, -1), (1050, -1)]:
    n = place(NICHE, x, y * (HY - 18), 150, 0 if y > 0 else 180, "Walls")
    n.static_mesh_component.set_cast_shadow(False)     # or its own lamp throws a black frame on the wall
    point_light(x, y * (HY - 90), 190, WARM, 26.0, 900)
point_light(1480, 0, 230, WARM, 70.0, 1000)
# Up on the gallery: two fire bowls on stone blocks (the flames are added with the other fires).
BOWLS = [(1400, 600), (1400, -600)]
for x, y in BOWLS:
    place(kit("pillar_stone_modular_01", 67, 49), x, y, GAL_Z, 0, "Gallery")
    point_light(x, y, GAL_Z + 150, WARM, 45.0, 1100)
# The one cool light.
point_light(600, 0, 186, (0.25, 0.85, 1.0), 7.0, 330, shadows=False)
for dx, dy in [(70, 0), (-35, 60), (-35, -60)]:            # so the stone itself catches the glow
    point_light(600 + dx, dy, 110, (0.25, 0.85, 1.0), 0.6, 140, shadows=False)

ppv = spawn(unreal.PostProcessVolume, 0, 0, 200, "Lights")
ppv.set_editor_property("unbound", True)
s = ppv.get_editor_property("settings")
for name, value in [("auto_exposure_method", unreal.AutoExposureMethod.AEM_MANUAL),
                    ("auto_exposure_bias", EXPOSURE),
                    ("auto_exposure_apply_physical_camera_exposure", False),
                    ("bloom_intensity", 0.6),
                    ("vignette_intensity", 0.5),
                    ("local_exposure_shadow_contrast_scale", 0.75),      # keep some stone in the shadows
                    ("local_exposure_highlight_contrast_scale", 0.85),   # keep the fire from burning out
                    ("film_grain_intensity", 0.12)]:
    setp(s, "override_" + name, True)
    setp(s, name, value)
ppv.set_editor_property("settings", s)

# ---------------------------------------------------------------- fire
# Real flames, so every warm glow has a source you can see. Effects are from the
# Vefects "Perfect Fire VFX" pack; if the pack is missing the room still builds.
def fire(name, x, y, z, light=0.0, radius=1200, scale=1.0):
    path = "/Game/Vefects/Free_Fire/Shared/Particles/" + name
    if not eal.does_asset_exist(path):
        log("WARN fire effect missing: " + name)
        return
    a = eas.spawn_actor_from_object(unreal.load_asset(path), unreal.Vector(x, y, z), unreal.Rotator(0, 0, 0))
    _finish(a, "Fire", (scale, scale, scale))
    if light:
        point_light(x, y, z + 90, (1.0, 0.42, 0.12), light, radius, "Fire")


for x, y in [(-1000, 1), (200, 1), (-1000, -1), (200, -1), (1050, -1)]:
    fire("NS_Fire_Small", x, y * (HY - 52), 150, scale=0.5)          # a flame on the lip of each wall niche
fire("NS_Fire_Big_Smoke", -1010, 170, 70, light=40.0, radius=1500)   # the fallen roof burns
fire("NS_Fire_Floor_01", -820, -410, 6, light=14.0)
fire("NS_Fire_Medium_Smoke", -1310, 320, 10, light=18.0)
fire("NS_Fire_Floor_02", -520, 80, 6, light=8.0, radius=800)
fire("NS_Fire_Small", -380, -430, 20)
for x, y in BOWLS:
    fire("NS_Fire_Medium", x, y, GAL_Z + 50, scale=0.7)

# Four starts, spread out, all facing the middle.
for x, y, yaw in [(1300, 500, 200), (1300, -500, 160), (-200, 700, -90), (-200, -700, 90)]:
    spawn(unreal.PlayerStart, x, y, 110, "Starts", yaw=yaw)

les.editor_set_game_view(True)     # hide editor icons in the viewport
les.save_current_level()
log("placed %d actors in %s" % (len([a for a in eas.get_all_level_actors() if TAG in a.get_editor_property("tags")]), MAP))
log("DONE")
