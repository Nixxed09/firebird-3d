# Runs inside the editor: .\tools\ue-py.ps1 -Script tools\editor\import_forge_asset.py
# Imports every asset the pack forge has exported (engine/Saved/PackForge/<pack>/<asset>/<asset>.fbx)
# into /Game/Firebird/Packs/<Pack>/ as one static mesh each, then stands a copy up in the
# open level for a look, ONLY when run with -ScriptArgs preview (tagged FORGE_PREVIEW; any earlier
# preview is removed first; this script never saves the level).
import os, glob, sys
PREVIEW = "preview" in sys.argv
import unreal

root = os.path.join(unreal.Paths.project_saved_dir(), "PackForge")
eas = unreal.get_editor_subsystem(unreal.EditorActorSubsystem)
tools = unreal.AssetToolsHelpers.get_asset_tools()
for a in eas.get_all_level_actors():
    if a.actor_has_tag("FORGE_PREVIEW"):
        eas.destroy_actor(a)

n = 0
for fbx in sorted(glob.glob(os.path.join(root, "*", "*", "*.fbx"))):
    asset = os.path.splitext(os.path.basename(fbx))[0]
    pack = os.path.basename(os.path.dirname(os.path.dirname(fbx)))
    dest = "/Game/Firebird/Packs/" + "".join(w.capitalize() for w in pack.split("_"))
    ui = unreal.FbxImportUI()
    ui.import_mesh = True
    ui.import_as_skeletal = False
    ui.import_materials = True
    ui.import_textures = False
    ui.import_animations = False
    ui.static_mesh_import_data.combine_meshes = True
    ui.static_mesh_import_data.auto_generate_collision = True
    ui.static_mesh_import_data.normal_import_method = unreal.FBXNormalImportMethod.FBXNIM_IMPORT_NORMALS
    t = unreal.AssetImportTask()
    t.filename, t.destination_path, t.destination_name = fbx, dest, "SM_" + asset
    t.automated, t.replace_existing, t.save = True, True, True
    t.options = ui
    tools.import_asset_tasks([t])
    paths = list(t.imported_object_paths)
    unreal.log("FB_PY imported %s -> %s" % (asset, paths))
    mesh = unreal.load_asset(dest + "/SM_" + asset)
    if not mesh:
        unreal.log_error("FB_PY no mesh for " + asset)
        continue
    b = mesh.get_bounds()
    unreal.log("FB_PY %s: %d triangles, size cm %s, %d materials" % (
        asset, mesh.get_num_triangles(0), [round(v * 2, 1) for v in (b.box_extent.x, b.box_extent.y, b.box_extent.z)],
        len(mesh.static_materials)))
    if not PREVIEW:
        continue
    actor = eas.spawn_actor_from_object(mesh, unreal.Vector(-250.0 + n * 60.0, 0.0, 150.0), unreal.Rotator(0.0, 0.0, 90.0))
    actor.tags = [unreal.Name("FORGE_PREVIEW")]
    actor.set_actor_label("FORGE_PREVIEW_" + asset)
    n += 1
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world()
unreal.log("FB_PY level %s, previews %d" % (world.get_name(), n))
unreal.log("FB_PY DONE")
