# Job B2 "Look": render a built asset from fixed views on a neutral stage, so an
# agent or a person can judge it. Run by forge.ps1:
#   blender -b <asset.blend> --python render_views.py -- --out <folder> [--detail x0,x1] [--fp 1]
# Writes side_right, side_left, top, quarter_front, quarter_rear, detail, (first_person)
# and sheet.png (all views on one page).
import math, os, sys
import bpy
from mathutils import Vector

sys.dont_write_bytecode = True
a = sys.argv[sys.argv.index("--") + 1:] if "--" in sys.argv else []
opt = {a[i].lstrip("-"): a[i + 1] for i in range(0, len(a) - 1, 2)}
out = opt["out"]
os.makedirs(out, exist_ok=True)
W, H = 1280, 640

scene = bpy.context.scene
objs = [o for o in bpy.data.collections["Asset"].objects if o.type == "MESH"]
lo, hi = Vector((1e9,) * 3), Vector((-1e9,) * 3)
for o in objs:
    for c in o.bound_box:
        w = o.matrix_world @ Vector(c)
        for i in range(3):
            lo[i], hi[i] = min(lo[i], w[i]), max(hi[i], w[i])
mid, size = (lo + hi) / 2, hi - lo
L = max(size)

# ---- stage: soft grey world, three area lights, a floor far enough below not to crowd
world = bpy.data.worlds.new("Stage")
world.use_nodes = True
nt = world.node_tree
bg = nt.nodes["Background"]
tc = nt.nodes.new("ShaderNodeTexCoord")
sep = nt.nodes.new("ShaderNodeSeparateXYZ")
ramp = nt.nodes.new("ShaderNodeValToRGB")
ramp.color_ramp.elements[0].position = 0.35
ramp.color_ramp.elements[0].color = (0.035, 0.035, 0.04, 1)
ramp.color_ramp.elements[1].position = 0.75
ramp.color_ramp.elements[1].color = (0.55, 0.56, 0.6, 1)
mapr = nt.nodes.new("ShaderNodeMapRange")
mapr.inputs["From Min"].default_value = -1.0
nt.links.new(tc.outputs["Generated"], sep.inputs["Vector"])
nt.links.new(sep.outputs["Z"], mapr.inputs["Value"])
nt.links.new(mapr.outputs["Result"], ramp.inputs["Fac"])
nt.links.new(ramp.outputs["Color"], bg.inputs["Color"])
bg.inputs["Strength"].default_value = 1.0
scene.world = world


def light(name, loc, energy, size_m, colour=(1, 1, 1)):
    d = bpy.data.lights.new(name, "AREA")
    d.energy, d.size, d.color = energy, size_m, colour
    o = bpy.data.objects.new(name, d)
    o.location = loc
    scene.collection.objects.link(o)
    o.rotation_euler = (mid - Vector(loc)).to_track_quat("-Z", "Y").to_euler()
    return o


E = 60.0 * L * L
light("Key", mid + Vector((0.5 * L, -0.9 * L, 1.0 * L)), E * 1.6, 0.8 * L, (1.0, 0.96, 0.9))
light("Fill", mid + Vector((-0.6 * L, 0.9 * L, 0.5 * L)), E * 0.7, 1.2 * L, (0.85, 0.9, 1.0))
light("Rim", mid + Vector((-0.2 * L, 0.3 * L, -0.8 * L)), E * 0.35, 1.0 * L)

for eng in ("BLENDER_EEVEE_NEXT", "BLENDER_EEVEE", "CYCLES"):
    try:
        scene.render.engine = eng
        break
    except TypeError:
        continue
if scene.render.engine == "CYCLES":
    scene.cycles.samples = 48
else:
    try:
        scene.eevee.taa_render_samples = 48
        scene.eevee.use_gtao = True
    except Exception:
        pass
scene.render.resolution_x, scene.render.resolution_y = W, H
scene.render.film_transparent = False
scene.view_settings.view_transform = "AgX"
scene.view_settings.look = "AgX - Medium High Contrast"

cam_d = bpy.data.cameras.new("Cam")
cam = bpy.data.objects.new("Cam", cam_d)
scene.collection.objects.link(cam)
scene.camera = cam
cam_d.clip_start, cam_d.clip_end = 0.005, 100


def shoot(name, pos, target, ortho=None, lens=70.0):
    cam.location = pos
    cam.rotation_euler = (Vector(target) - Vector(pos)).to_track_quat("-Z", "Y").to_euler()
    if ortho:
        cam_d.type, cam_d.ortho_scale = "ORTHO", ortho
    else:
        cam_d.type, cam_d.lens = "PERSP", lens
    scene.render.filepath = os.path.join(out, name + ".png")
    bpy.ops.render.render(write_still=True)
    return scene.render.filepath


shots = []
fit = max(size.x * 1.08, size.z * 2.3)
shots.append(shoot("side_right", mid + Vector((0, -3 * L, 0)), mid, ortho=fit))
shots.append(shoot("side_left", mid + Vector((0, 3 * L, 0)), mid, ortho=fit))
shots.append(shoot("top", mid + Vector((0, 0, 3 * L)), mid, ortho=fit))
shots.append(shoot("quarter_front", mid + Vector((1.05 * L, -0.75 * L, 0.42 * L)), mid + Vector((0.08 * L, 0, 0)), lens=75))
shots.append(shoot("quarter_rear", mid + Vector((-1.05 * L, -0.75 * L, 0.42 * L)), mid - Vector((0.08 * L, 0, 0)), lens=75))
if "detail" in opt:
    x0, x1 = [float(v) for v in opt["detail"].split(",")]
    c = Vector(((x0 + x1) / 2, mid.y, mid.z))
    d = (x1 - x0)
    shots.append(shoot("detail_right", c + Vector((0.25 * d, -1.5 * d, 0.45 * d)), c, lens=60))
    shots.append(shoot("detail_left", c + Vector((-0.2 * d, 1.5 * d, 0.5 * d)), c, lens=60))
if opt.get("fp"):
    # the eye of a player holding it low on the right: behind, above, left of the gun
    eye = Vector((lo.x + 0.16 * size.x, 0.060, hi.z + 0.050))
    shots.append(shoot("first_person", eye, Vector((hi.x, -0.012, hi.z - 0.02)), lens=24))

# ---- one page with every view
import numpy as np
cols = 2
rows = (len(shots) + 1) // 2
sheet = np.zeros((rows * H, cols * W, 4), dtype=np.float32)
sheet[..., 3] = 1.0
for i, p in enumerate(shots):
    im = bpy.data.images.load(p)
    px = np.array(im.pixels[:], dtype=np.float32).reshape(H, W, 4)
    r, c = i // cols, i % cols
    y0 = (rows - 1 - r) * H
    sheet[y0:y0 + H, c * W:(c + 1) * W] = px
simg = bpy.data.images.new("sheet", cols * W, rows * H)
simg.pixels = sheet.ravel()
simg.filepath_raw = os.path.join(out, "sheet.png")
simg.file_format = "PNG"
simg.save()
print("FORGE_RENDER_OK views=%d engine=%s out=%s" % (len(shots), scene.render.engine, out))
