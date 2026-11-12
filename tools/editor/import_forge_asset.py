# Runs inside the editor: .\tools\ue-py.ps1 -Script tools\editor\import_forge_asset.py
# Imports every asset the pack forge has exported (engine/Saved/PackForge/<pack>/<asset>/<asset>.fbx)
# into /Game/Firebird/Packs/<Pack>/ as one static mesh each.
#
# A baked asset (forge.ps1 -Texture) has textured/<asset>_albedo.png, _normal.png and _orm.png beside it.
# Those are imported as T_<asset>_* and one material, M_<asset>, is built from them and put on every
# slot: albedo to base colour, normal (green flipped: Blender bakes OpenGL normals), and the packed image's
# red, green and blue to ambient occlusion, roughness and metallic. An asset with no bake keeps the flat
# materials the FBX names.
#
# With -ScriptArgs preview a copy of each is stood up in the open level for a look (tagged FORGE_PREVIEW;
# any earlier preview is removed first; this script never saves the level).
import os, glob, sys
PREVIEW = "preview" in sys.argv
import unreal

root = os.path.join(unreal.Paths.project_saved_dir(), "PackForge")
eas = unreal.get_editor_subsystem(unreal.EditorActorSubsystem)
tools = unreal.AssetToolsHelpers.get_asset_tools()
mel = unreal.MaterialEditingLibrary
eal = unreal.EditorAssetLibrary
for a in eas.get_all_level_actors():
    if a.actor_has_tag("FORGE_PREVIEW"):
        eas.destroy_actor(a)


def import_texture(png, dest, name, kind):
    t = unreal.AssetImportTask()
    t.filename, t.destination_path, t.destination_name = png, dest, name
    t.automated, t.replace_existing, t.save = True, True, False
    tools.import_asset_tasks([t])
    tex = unreal.load_asset(dest + "/" + name)
    if kind == "normal":
        tex.set_editor_property("compression_settings", unreal.TextureCompressionSettings.TC_NORMALMAP)
        tex.set_editor_property("srgb", False)
        tex.set_editor_property("flip_green_channel", True)
    elif kind == "orm":
        tex.set_editor_property("compression_settings", unreal.TextureCompressionSettings.TC_MASKS)
        tex.set_editor_property("srgb", False)
    eal.save_asset(dest + "/" + name, only_if_is_dirty=False)
    return tex


def build_material(dest, asset, tex):
    path = dest + "/M_" + asset
    mat = unreal.load_asset(path)
    if not mat:
        mat = tools.create_asset("M_" + asset, dest, unreal.Material, unreal.MaterialFactoryNew())
    mel.delete_all_material_expressions(mat)
    P = unreal.MaterialProperty
    S = unreal.MaterialSamplerType
    spec = (("albedo", S.SAMPLERTYPE_COLOR, (("RGB", P.MP_BASE_COLOR),)),
            ("normal", S.SAMPLERTYPE_NORMAL, (("RGB", P.MP_NORMAL),)),
            ("orm", S.SAMPLERTYPE_MASKS, (("R", P.MP_AMBIENT_OCCLUSION), ("G", P.MP_ROUGHNESS), ("B", P.MP_METALLIC))))
    for i, (kind, sampler, outs) in enumerate(spec):
        n = mel.create_material_expression(mat, unreal.MaterialExpressionTextureSample, -420, i * 280)
        n.set_editor_property("texture", tex[kind])
        n.set_editor_property("sampler_type", sampler)
        for pin, prop in outs:
            mel.connect_material_property(n, pin, prop)
    mel.recompile_material(mat)
    eal.save_asset(path, only_if_is_dirty=False)
    return mat


n = 0
for fbx in sorted(glob.glob(os.path.join(root, "*", "*", "*.fbx"))):
    asset = os.path.splitext(os.path.basename(fbx))[0]
    pack = os.path.basename(os.path.dirname(os.path.dirname(fbx)))
    dest = "/Game/Firebird/Packs/" + "".join(w.capitalize() for w in pack.split("_"))
    baked = {k: os.path.join(os.path.dirname(fbx), "textured", "%s_%s.png" % (asset, k)) for k in ("albedo", "normal", "orm")}
    has_bake = all(os.path.exists(p) for p in baked.values())
    ui = unreal.FbxImportUI()
    ui.import_mesh = True
    ui.import_as_skeletal = False
    ui.import_materials = not has_bake
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
    mesh = unreal.load_asset(dest + "/SM_" + asset)
    if not mesh:
        unreal.log_error("FB_PY no mesh for " + asset)
        continue
    if has_bake:
        tex = {k: import_texture(p, dest, "T_%s_%s" % (asset, k), k) for k, p in baked.items()}
        mat = build_material(dest, asset, tex)
        for i in range(len(mesh.static_materials)):
            mesh.set_material(i, mat)
        eal.save_asset(dest + "/SM_" + asset, only_if_is_dirty=False)
    b = mesh.get_bounds()
    unreal.log("FB_PY %s: %d triangles, size cm %s, %d material slots, %s" % (
        asset, mesh.get_num_triangles(0), [round(v * 2, 1) for v in (b.box_extent.x, b.box_extent.y, b.box_extent.z)],
        len(mesh.static_materials), "baked textures" if has_bake else "flat colours"))
    if not PREVIEW:
        continue
    actor = eas.spawn_actor_from_object(mesh, unreal.Vector(-250.0 + n * 60.0, 0.0, 150.0), unreal.Rotator(0.0, 0.0, 90.0))
    actor.tags = [unreal.Name("FORGE_PREVIEW")]
    actor.set_actor_label("FORGE_PREVIEW_" + asset)
    n += 1
world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world()
unreal.log("FB_PY level %s, previews %d" % (world.get_name(), n))
unreal.log("FB_PY DONE")
