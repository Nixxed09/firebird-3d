# Export a built asset for the engine. Run by forge.ps1 -Export:
#   blender -b <asset.blend> --python export_asset.py -- --out <folder> --name <asset>
# Writes <name>.fbx (Unreal: centimetres, X forward, Z up) and <name>.glb, with
# modifiers applied. Parts that move (custom property forge_part) stay separate
# objects with their origin on the hinge; everything else is joined into "<name>_body"
# so the engine gets a few meshes, not forty.
import os, sys, json
import bpy

sys.dont_write_bytecode = True
a = sys.argv[sys.argv.index("--") + 1:]
opt = {a[i].lstrip("-"): a[i + 1] for i in range(0, len(a) - 1, 2)}
out, name = opt["out"], opt["name"]

col = bpy.data.collections["Asset"]
bpy.ops.object.select_all(action="DESELECT")
for ob in col.objects:
    ob.select_set(True)
bpy.context.view_layer.objects.active = col.objects[0]
bpy.ops.object.convert(target="MESH")          # applies every modifier

movers = [o for o in col.objects if o.get("forge_part")]
# children of a mover (the lever's loop) join their parent
for m in movers:
    kids = [o for o in col.objects if o.parent == m]
    if kids:
        bpy.ops.object.select_all(action="DESELECT")
        for k in kids:
            k.select_set(True)
        m.select_set(True)
        bpy.context.view_layer.objects.active = m
        bpy.ops.object.join()
    m.name = "%s_%s" % (name, m["forge_part"])
static = [o for o in col.objects if not o.get("forge_part")]
bpy.ops.object.select_all(action="DESELECT")
for o in static:
    o.select_set(True)
bpy.context.view_layer.objects.active = static[0]
bpy.ops.object.join()
body = bpy.context.view_layer.objects.active
body.name = name + "_body"
for o in col.objects:
    o.data.name = o.name
    if o is not body:
        o.parent = body

tris = {o.name: sum(len(p.vertices) - 2 for p in o.data.polygons) for o in col.objects}
bpy.ops.object.select_all(action="DESELECT")
for o in col.objects:
    o.select_set(True)
fbx = os.path.join(out, name + ".fbx")
bpy.ops.export_scene.fbx(filepath=fbx, use_selection=True, apply_scale_options="FBX_SCALE_UNITS",
                         axis_forward="-Y", axis_up="Z", mesh_smooth_type="FACE", use_mesh_modifiers=True,
                         bake_space_transform=False, object_types={"MESH"})
glb = os.path.join(out, name + ".glb")
bpy.ops.export_scene.gltf(filepath=glb, use_selection=True, export_apply=True)
with open(os.path.join(out, name + ".export.json"), "w") as f:
    json.dump({"fbx": fbx, "glb": glb, "meshes": tris, "triangles": sum(tris.values())}, f, indent=1)
print("FORGE_EXPORT_OK meshes=%d triangles=%d" % (len(tris), sum(tris.values())))
