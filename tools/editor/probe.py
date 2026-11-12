import unreal

mel = unreal.MaterialEditingLibrary
for p in ("/Game/Fab/Megascans/Surfaces/churchruin_wall_stone_rough_01_xjvuadj_4k/High",
          "/Game/Fab/Megascans/Surfaces/churchruin_floor_stone_01_xjvtfjt_4k/High"):
    for a in unreal.EditorAssetLibrary.list_assets(p, recursive=True):
        o = unreal.load_asset(a)
        if isinstance(o, unreal.MaterialInstanceConstant):
            unreal.log("FB_PY MI %s parent=%s" % (a, o.get_editor_property("parent").get_path_name()))
            unreal.log("FB_PY scalars=%s" % [(str(n), round(mel.get_material_instance_scalar_parameter_value(o, n), 3)) for n in mel.get_scalar_parameter_names(o)])
            unreal.log("FB_PY vectors=%s" % [str(n) for n in mel.get_vector_parameter_names(o)])
            unreal.log("FB_PY switches=%s" % [str(n) for n in mel.get_static_switch_parameter_names(o)])
les = unreal.get_editor_subsystem(unreal.LevelEditorSubsystem)
unreal.log("FB_PY level=%s" % unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world().get_path_name())
unreal.log("FB_PY niagara=%s" % [str(a) for a in unreal.EditorAssetLibrary.list_assets("/Niagara/DefaultAssets", recursive=True)][:12])
unreal.log("FB_PY DONE")
