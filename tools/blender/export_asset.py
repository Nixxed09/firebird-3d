# Export a built asset for the engine. Run by forge.ps1 -Export:
#   blender -b <asset.blend> --python export_asset.py -- --out <folder> --name <asset>
#
# Writes
#   <name>.fbx      static: modifiers applied; parts that move (custom property forge_part) stay separate
#                   objects with their origin on the hinge, everything else is joined into "<name>_body"
#   <name>.glb      the same, for other engines
#   <name>_rig.fbx  only when a part declares a motion (fb_parts.motion): ONE mesh skinned to a skeleton
#                   with a root bone and a bone per moving part on its hinge, and an animation
#                   "<name>_operate" that plays every declared motion once over 30 frames. This is the file
#                   a first-person weapon uses, so the bolt, lever, hammer and trigger can be animated.
import os, sys, json, math
import bpy
from mathutils import Matrix, Euler, Vector

sys.dont_write_bytecode = True
a = sys.argv[sys.argv.index("--") + 1:]
opt = {a[i].lstrip("-"): a[i + 1] for i in range(0, len(a) - 1, 2)}
out, name = opt["out"], opt["name"]
FRAMES = 30

col = bpy.data.collections["Asset"]
vl = bpy.context.view_layer


def select(objs, active):
    bpy.ops.object.select_all(action="DESELECT")
    for o in objs:
        o.select_set(True)
    vl.objects.active = active


select(col.objects, col.objects[0])
bpy.ops.object.convert(target="MESH")          # applies every modifier

movers = [o for o in col.objects if o.get("forge_part")]
# children of a mover (the lever's loop, the bolt's handle) join their parent
for m in movers:
    kids = [o for o in col.objects if o.parent == m]
    if kids:
        select(kids + [m], m)
        bpy.ops.object.join()
    m.name = "%s_%s" % (name, m["forge_part"])
static = [o for o in col.objects if not o.get("forge_part")]
select(static, static[0])
bpy.ops.object.join()
body = vl.objects.active
body.name = name + "_body"
for o in col.objects:
    o.data.name = o.name
    if o is not body:
        o.parent = body

tris = {o.name: sum(len(p.vertices) - 2 for p in o.data.polygons) for o in col.objects}
select(col.objects, body)
fbx = os.path.join(out, name + ".fbx")
bpy.ops.export_scene.fbx(filepath=fbx, use_selection=True, apply_scale_options="FBX_SCALE_UNITS",
                         axis_forward="-Y", axis_up="Z", mesh_smooth_type="FACE", use_mesh_modifiers=True,
                         bake_space_transform=False, object_types={"MESH"},
                         path_mode="COPY", embed_textures=True)     # baked textures travel inside the FBX
glb = os.path.join(out, name + ".glb")
bpy.ops.export_scene.gltf(filepath=glb, use_selection=True, export_apply=True)
report = {"fbx": fbx, "glb": glb, "meshes": tris, "triangles": sum(tris.values())}

# ---------------------------------------------------------------- the rigged file
movers = [o for o in col.objects if o.get("forge_part")]
motions = {o["forge_part"]: json.loads(o["forge_motion"]) for o in movers if o.get("forge_motion")}
if motions:
    pivots = {o["forge_part"]: o.matrix_world.translation.copy() for o in movers}
    arm_d = bpy.data.armatures.new(name + "_rig")
    arm = bpy.data.objects.new(name + "_rig", arm_d)
    col.objects.link(arm)
    select([arm], arm)
    bpy.ops.object.mode_set(mode="EDIT")
    rb = arm_d.edit_bones.new("root")
    rb.head, rb.tail = (0, 0, 0), (0, 0.05, 0)
    for part, p in pivots.items():
        b = arm_d.edit_bones.new(part)
        b.head, b.tail = p, p + Vector((0, 0.03, 0))
        b.parent = rb
    bpy.ops.object.mode_set(mode="OBJECT")
    meshes = [o for o in col.objects if o.type == "MESH"]
    for o in meshes:                        # rigid skinning: every vertex belongs wholly to one bone
        g = o.vertex_groups.new(name=o.get("forge_part") or "root")
        g.add(list(range(len(o.data.vertices))), 1.0, "REPLACE")
    select([o for o in meshes if o is not body], body)
    bpy.ops.object.parent_clear(type="CLEAR_KEEP_TRANSFORM")
    select(meshes, body)
    bpy.ops.object.join()
    body.name = body.data.name = name
    body.modifiers.new("Armature", "ARMATURE").object = arm
    body.parent = arm

    scene = bpy.context.scene
    scene.frame_start, scene.frame_end = 0, FRAMES
    scene.render.fps = 30
    for part, steps in motions.items():
        pb = arm.pose.bones[part]
        rest = pb.bone.matrix_local.copy()
        p = pivots[part]
        for st in steps:
            rot = Euler([math.radians(v) for v in st.get("rot", (0, 0, 0))], "XYZ").to_matrix().to_4x4()
            m = Matrix.Translation(Vector(st.get("move", (0, 0, 0)))) @ Matrix.Translation(p) @ rot @ Matrix.Translation(-p)
            pb.matrix = m @ rest
            vl.update()
            f = round(st["t"] * FRAMES)
            pb.keyframe_insert("location", frame=f)
            pb.keyframe_insert("rotation_quaternion", frame=f)
    if arm.animation_data and arm.animation_data.action:
        arm.animation_data.action.name = name + "_operate"
    scene.frame_set(0)
    select([arm, body], arm)
    rig = os.path.join(out, name + "_rig.fbx")
    bpy.ops.export_scene.fbx(filepath=rig, use_selection=True, apply_scale_options="FBX_SCALE_UNITS",
                             axis_forward="-Y", axis_up="Z", mesh_smooth_type="FACE", use_mesh_modifiers=False,
                             object_types={"MESH", "ARMATURE"}, add_leaf_bones=False, bake_anim=True,
                             bake_anim_use_all_actions=False, bake_anim_use_nla_strips=False,
                             bake_anim_simplify_factor=0.0, path_mode="COPY", embed_textures=True)
    report.update({"rig": rig, "bones": ["root"] + list(pivots), "animation": name + "_operate", "frames": FRAMES})

with open(os.path.join(out, name + ".export.json"), "w") as f:
    json.dump(report, f, indent=1)
print("FORGE_EXPORT_OK meshes=%d triangles=%d rig=%s" % (len(tris), sum(tris.values()), "yes" if motions else "no"))
