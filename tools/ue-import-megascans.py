# Runs INSIDE the Unreal editor. Imports Megascans "_ue_<tier>.zip" downloads from fab.com
# the same way the Fab plugin's "Add to project" does (see the engine's
# Plugins/Fab/Source/Fab/Private/Workflows/QuixelImportWorkflow.cpp).
#
# Use tools\ue-import-megascans.ps1, which runs this through the open editor.
# Result: engine/Saved/FabDownloads/import-result.json
import json
import os
import sys
import zipfile

import unreal

ZIP_DIR = sys.argv[1] if len(sys.argv) > 1 else os.path.join(
    unreal.Paths.convert_relative_path_to_full(unreal.Paths.project_saved_dir()), "FabDownloads")
RESULT = os.path.join(ZIP_DIR, "import-result.json")
TIERS = {"raw": "Raw", "high": "High", "mid": "Medium", "low": "Low"}
SUBTYPES = {"3d": ("3D", "MODEL3D"), "surface": ("Surfaces", "SURFACE"), "3dplant": ("Plants", "PLANT")}
_keep_alive = []


def log(msg):
    unreal.log("FB_MEGASCANS " + msg)


def sanitize(name):
    return "".join(c if (c.isalnum() or c == "_") else "_" for c in name)


def patch_displacement(gltf_path, meta):
    """The Fab plugin copies the displacement numbers from the json into the gltf. Do the same."""
    scale, bias = meta.get("displacement_scale_tier1", -1), meta.get("displacement_bias_tier1", -1)
    if scale is None or bias is None or scale < 0 or bias < 0:
        return
    with open(gltf_path, "r", encoding="utf-8") as f:
        gltf = json.load(f)
    for mat in gltf.get("materials", []):
        mat.setdefault("extras", {}).setdefault("overrides", {})["displacement"] = {"magnitude": scale, "center": bias}
    with open(gltf_path, "w", encoding="utf-8") as f:
        json.dump(gltf, f, indent=2)


def ensure_project_materials():
    """The Megascans parent materials live in the editor-only Fab plugin (/Fab/Materials).
    A packaged game cannot load those, so keep a copy in the project (/Game/Fab/Materials)."""
    eal = unreal.EditorAssetLibrary
    if not eal.does_directory_exist("/Game/Fab/Materials"):
        log("copying /Fab/Materials to /Game/Fab/Materials (slow the first time)")
        eal.duplicate_directory("/Fab/Materials", "/Game/Fab/Materials")
        eal.save_directory("/Game/Fab/Materials", only_if_is_dirty=False, recursive=True)


def reparent_to_project(dest):
    """Point imported material instances at the project copy of their parent material."""
    eal = unreal.EditorAssetLibrary
    changed = 0
    for path in eal.list_assets(dest, recursive=True):
        mi = unreal.load_asset(path)
        if not isinstance(mi, unreal.MaterialInstanceConstant):
            continue
        parent = mi.get_editor_property("parent")
        ppath = parent.get_path_name() if parent else ""
        if ppath.startswith("/Fab/"):
            new_parent = unreal.load_asset("/Game" + ppath.split(".")[0])
            if new_parent:
                unreal.MaterialEditingLibrary.set_material_instance_parent(mi, new_parent)
                unreal.MaterialEditingLibrary.update_material_instance(mi)
                eal.save_asset(path, only_if_is_dirty=False)
                changed += 1
    return changed


def import_one(zip_path):
    base = os.path.splitext(os.path.basename(zip_path))[0]          # ..._xjtrdby_ue_high
    out_dir = os.path.join(ZIP_DIR, base + "_extracted")
    if not os.path.isdir(out_dir):
        with zipfile.ZipFile(zip_path) as z:
            z.extractall(out_dir)
    gltfs = [f for f in os.listdir(out_dir) if f.lower().endswith(".gltf")]
    jsons = [f for f in os.listdir(out_dir) if f.lower().endswith(".json")]
    if len(gltfs) != 1 or len(jsons) != 1:
        return {"zip": base, "ok": False, "why": "expected one .gltf and one .json, found %d and %d" % (len(gltfs), len(jsons))}
    gltf_path = os.path.join(out_dir, gltfs[0]).replace("\\", "/")
    with open(os.path.join(out_dir, jsons[0]), "r", encoding="utf-8") as f:
        meta = json.load(f)

    cats = meta.get("categories") or []
    if not cats or cats[0] not in SUBTYPES:
        return {"zip": base, "ok": False, "why": "unsupported Megascans category %s" % cats[:2]}
    subtype, import_type = SUBTYPES[cats[0]]
    tier = TIERS.get(base.rsplit("_", 1)[-1].lower(), "High")
    # A readable folder name: the zip name without the id and tier, e.g. arch_stone_modular_01
    short = base.split("_ue_")[0]
    short = short.replace("historic_medieval_churchruin_", "churchruin_")
    dest = "/Game/Fab/Megascans/%s/%s/%s" % (subtype, sanitize(short), tier)

    if unreal.EditorAssetLibrary.does_directory_have_assets(dest, recursive=True):
        return {"zip": base, "ok": True, "dest": dest, "skipped": "already imported",
                "reparented": reparent_to_project(dest)}

    patch_displacement(gltf_path, meta)

    pipelines = []
    assets_pipeline = None
    for path in ("/Interchange/Pipelines/DefaultGLTFAssetsPipeline", "/Interchange/Pipelines/DefaultGLTFPipeline"):
        p = unreal.load_asset(path)
        if p:
            pipelines.append(p)
            if isinstance(p, unreal.InterchangeGenericAssetsPipeline):
                assets_pipeline = p
    if assets_pipeline is None:
        return {"zip": base, "ok": False, "why": "DefaultGLTFAssetsPipeline did not load"}

    mesh = assets_pipeline.get_editor_property("mesh_pipeline")
    is_model = import_type != "SURFACE"
    mesh.set_editor_property("import_static_meshes", is_model)
    mesh.set_editor_property("import_skeletal_meshes", False)
    if is_model:
        mesh.set_editor_property("build_nanite", True)
    assets_pipeline.get_editor_property("material_pipeline").set_editor_property(
        "material_import", unreal.InterchangeMaterialImportOption.IMPORT_AS_MATERIAL_INSTANCES)

    ms = unreal.new_object(unreal.InterchangeMegascansPipeline)
    ms.set_editor_property("megascan_import_type", getattr(unreal.MegascanImportType, import_type))
    _keep_alive.append(ms)
    pipelines.append(ms)

    params = unreal.ImportAssetParameters()
    params.set_editor_property("is_automated", True)
    params.set_editor_property("override_pipelines", [unreal.SoftObjectPath(p.get_path_name()) for p in pipelines])

    source = unreal.InterchangeManager.create_source_data(gltf_path)
    manager = unreal.InterchangeManager.get_interchange_manager_scripted()
    ok = manager.import_asset(dest, source, params)
    assets = unreal.EditorAssetLibrary.list_assets(dest, recursive=True)
    reparented = 0
    if assets:
        reparented = reparent_to_project(dest)
        unreal.EditorAssetLibrary.save_directory(dest, only_if_is_dirty=False, recursive=True)
    return {"zip": base, "ok": bool(ok) and bool(assets), "dest": dest, "reparented": reparented,
            "assets": [str(a) for a in assets]}


def main():
    ensure_project_materials()
    zips = sorted(f for f in os.listdir(ZIP_DIR) if f.lower().endswith(".zip"))
    results = []
    for z in zips:
        try:
            r = import_one(os.path.join(ZIP_DIR, z))
        except Exception as e:  # keep going; one bad pack must not stop the rest
            r = {"zip": z, "ok": False, "why": "%s: %s" % (type(e).__name__, e)}
        log(json.dumps(r)[:300])
        results.append(r)
    with open(RESULT, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=1)
    log("DONE %d ok of %d" % (sum(1 for r in results if r.get("ok")), len(results)))


main()
