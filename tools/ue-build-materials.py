# Builds the slice's two base materials (run by tools/ue-build-materials.ps1 in
# the editor's Python). Everything in the slice is a tinted instance of these:
#   M_FB_Surface: lit. Color, Emissive (x Color), Roughness, Metallic.
#   M_FB_Glow:    unlit additive light: Color x Emissive. Tracers, embers, motes.
import unreal

PATH = "/Game/Firebird/Materials"
tools = unreal.AssetToolsHelpers.get_asset_tools()
mel = unreal.MaterialEditingLibrary
eal = unreal.EditorAssetLibrary


def fresh(name):
    full = PATH + "/" + name
    if eal.does_asset_exist(full):
        eal.delete_asset(full)
    return tools.create_asset(name, PATH, unreal.Material, unreal.MaterialFactoryNew())


def vec(m, name, default, x, y):
    e = mel.create_material_expression(m, unreal.MaterialExpressionVectorParameter, x, y)
    e.set_editor_property("parameter_name", name)
    e.set_editor_property("default_value", default)
    return e


def scalar(m, name, default, x, y):
    e = mel.create_material_expression(m, unreal.MaterialExpressionScalarParameter, x, y)
    e.set_editor_property("parameter_name", name)
    e.set_editor_property("default_value", default)
    return e


# ---- the lit surface ----
m = fresh("M_FB_Surface")
col = vec(m, "Color", unreal.LinearColor(0.5, 0.5, 0.5, 1.0), -600, 0)
emi = scalar(m, "Emissive", 0.0, -600, 200)
rough = scalar(m, "Roughness", 0.75, -600, 300)
metal = scalar(m, "Metallic", 0.0, -600, 400)
mul = mel.create_material_expression(m, unreal.MaterialExpressionMultiply, -300, 200)
mel.connect_material_expressions(col, "", mul, "A")
mel.connect_material_expressions(emi, "", mul, "B")
mel.connect_material_property(col, "", unreal.MaterialProperty.MP_BASE_COLOR)
mel.connect_material_property(mul, "", unreal.MaterialProperty.MP_EMISSIVE_COLOR)
mel.connect_material_property(rough, "", unreal.MaterialProperty.MP_ROUGHNESS)
mel.connect_material_property(metal, "", unreal.MaterialProperty.MP_METALLIC)
mel.recompile_material(m)
eal.save_asset(m.get_path_name())

# ---- the glow ----
g = fresh("M_FB_Glow")
g.set_editor_property("shading_model", unreal.MaterialShadingModel.MSM_UNLIT)
g.set_editor_property("blend_mode", unreal.BlendMode.BLEND_ADDITIVE)
gcol = vec(g, "Color", unreal.LinearColor(1.0, 0.5, 0.1, 1.0), -600, 0)
gemi = scalar(g, "Emissive", 4.0, -600, 200)
gmul = mel.create_material_expression(g, unreal.MaterialExpressionMultiply, -300, 100)
mel.connect_material_expressions(gcol, "", gmul, "A")
mel.connect_material_expressions(gemi, "", gmul, "B")
mel.connect_material_property(gmul, "", unreal.MaterialProperty.MP_EMISSIVE_COLOR)
mel.recompile_material(g)
eal.save_asset(g.get_path_name())

unreal.log("FB_MATERIALS built " + PATH)
