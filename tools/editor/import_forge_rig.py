# Runs inside the editor: .\tools\ue-py.ps1 -Script tools\editor\import_forge_rig.py
# Imports every rigged asset the pack forge has exported (engine/Saved/PackForge/<pack>/<asset>/<asset>_rig.fbx,
# written when a part declares a motion) into /Game/Firebird/Packs/<Pack>/ as a skeletal mesh SK_<asset> with
# its skeleton and the animation <asset>_operate (one cycle of every moving part). If import_forge_asset.py
# has already built M_<asset> from the baked textures, that material is put on every slot.
# Reports the bones and the animation's length, so "it can be animated" is a checked fact, not a hope.
import os, glob
import unreal

root = os.path.join(unreal.Paths.project_saved_dir(), "PackForge")
tools = unreal.AssetToolsHelpers.get_asset_tools()
eal = unreal.EditorAssetLibrary

for fbx in sorted(glob.glob(os.path.join(root, "*", "*", "*_rig.fbx"))):
    asset = os.path.splitext(os.path.basename(fbx))[0][:-4]
    pack = os.path.basename(os.path.dirname(os.path.dirname(fbx)))
    dest = "/Game/Firebird/Packs/" + "".join(w.capitalize() for w in pack.split("_"))
    ui = unreal.FbxImportUI()
    ui.import_mesh = True
    ui.import_as_skeletal = True
    ui.mesh_type_to_import = unreal.FBXImportType.FBXIT_SKELETAL_MESH
    ui.import_materials = False
    ui.import_textures = False
    ui.import_animations = True
    ui.create_physics_asset = False
    ui.skeletal_mesh_import_data.normal_import_method = unreal.FBXNormalImportMethod.FBXNIM_IMPORT_NORMALS
    t = unreal.AssetImportTask()
    t.filename, t.destination_path, t.destination_name = fbx, dest, "SK_" + asset
    t.automated, t.replace_existing, t.save = True, True, True
    t.options = ui
    tools.import_asset_tasks([t])
    paths = [str(p) for p in t.imported_object_paths]
    sk = unreal.load_asset(dest + "/SK_" + asset)
    if not sk or not isinstance(sk, unreal.SkeletalMesh):
        unreal.log_error("FB_PY no skeletal mesh for %s (%s)" % (asset, paths))
        continue
    mat = unreal.load_asset(dest + "/M_" + asset)
    if mat:
        slots = sk.get_editor_property("materials")
        for s in slots:
            s.set_editor_property("material_interface", mat)
        sk.set_editor_property("materials", slots)
        eal.save_asset(dest + "/SK_" + asset, only_if_is_dirty=False)
    bones = [str(b) for b in unreal.SkeletalMeshEditorSubsystem.get_default_object().get_lod_count(sk) and
             [sk.skeleton.get_reference_pose().get_bone_names()][0]] if hasattr(sk.skeleton, "get_reference_pose") else []
    anims = []
    for p in paths:
        obj = unreal.load_asset(p.split(".")[0])
        if isinstance(obj, unreal.AnimSequence):
            anims.append("%s %.2fs" % (obj.get_name(), obj.get_play_length()))
    unreal.log("FB_PY %s: skeletal, bones %s, animations %s, material %s" % (
        asset, bones, anims, "M_" + asset if mat else "none (run import_forge_asset.py after a bake)"))
    unreal.log("FB_PY imported %s" % paths)
unreal.log("FB_PY DONE")
