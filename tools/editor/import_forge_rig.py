# Runs inside the editor: .\tools\ue-py.ps1 -Script tools\editor\import_forge_rig.py
# Imports every rigged asset the pack forge has exported (engine/Saved/PackForge/<pack>/<asset>/<asset>_rig.fbx,
# written when a part declares a motion) into /Game/Firebird/Packs/<Pack>/ as a skeletal mesh SK_<asset> with
# its skeleton and the animation <asset>_operate (one cycle of every moving part). If import_forge_asset.py
# has already built M_<asset> from the baked textures, that material is put on every slot.
# Reports the bones and the animation's length, so "it can be animated" is a checked fact, not a hope.
import os, glob, sys
import unreal

root = os.path.join(unreal.Paths.project_saved_dir(), "PackForge")
tools = unreal.AssetToolsHelpers.get_asset_tools()
eal = unreal.EditorAssetLibrary
eas = unreal.get_editor_subsystem(unreal.EditorActorSubsystem)
shown = 0
if "pose" in sys.argv:
    for a in eas.get_all_level_actors():
        if a.actor_has_tag("FORGE_PREVIEW"):
            eas.destroy_actor(a)

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
        # the list comes back as copies: build new entries and set the whole list
        slots = [unreal.SkeletalMaterial(material_interface=mat, material_slot_name=s.get_editor_property("material_slot_name"))
                 for s in sk.get_editor_property("materials")]
        sk.set_editor_property("materials", slots)
        eal.save_asset(dest + "/SK_" + asset, only_if_is_dirty=False)
    bones = [str(b) for b in unreal.SkeletalMeshEditorSubsystem.get_default_object().get_lod_count(sk) and
             [sk.skeleton.get_reference_pose().get_bone_names()][0]] if hasattr(sk.skeleton, "get_reference_pose") else []
    anims = []
    obj = unreal.load_asset(dest + "/SK_" + asset + "_Anim")   # a re-import does not list it again
    if isinstance(obj, unreal.AnimSequence):
        anims.append("%s %.2fs" % (obj.get_name(), obj.get_play_length()))
    unreal.log("FB_PY %s: skeletal, bones %s, animations %s, material %s" % (
        asset, bones, anims, "M_" + asset if mat else "none (run import_forge_asset.py after a bake)"))
    unreal.log("FB_PY imported %s" % paths)
    # -ScriptArgs "pose 0.45": stand the rigged asset in the open level, held at that point of its cycle
    # (tagged FORGE_PREVIEW, never saved), so a picture can show the parts really move in the engine.
    if "pose" in sys.argv:
        at = float(sys.argv[sys.argv.index("pose") + 1])
        anim = unreal.load_asset(dest + "/SK_" + asset + "_Anim")
        actor = eas.spawn_actor_from_class(unreal.SkeletalMeshActor, unreal.Vector(-250.0 + shown * 60.0, 0.0, 150.0),
                                           unreal.Rotator(0.0, 0.0, 90.0))
        comp = actor.skeletal_mesh_component
        comp.set_skinned_asset_and_update(sk)
        if mat:
            for i in range(comp.get_num_materials()):
                comp.set_material(i, mat)
        unreal.log("FB_PY %s slots now: %s" % (asset, [str(m.material_interface.get_name()) if m.material_interface else "None"
                                                      for m in sk.get_editor_property("materials")]))
        comp.set_update_animation_in_editor(True)
        comp.set_animation_mode(unreal.AnimationMode.ANIMATION_SINGLE_NODE)
        comp.set_animation(anim)
        comp.set_position(at * anim.get_play_length(), False)
        comp.set_play_rate(0.0)
        actor.tags = [unreal.Name("FORGE_PREVIEW")]
        actor.set_actor_label("FORGE_PREVIEW_rig_" + asset)
        shown += 1
        unreal.log("FB_PY posed %s at %.2f of its cycle" % (asset, at))
unreal.log("FB_PY DONE")
