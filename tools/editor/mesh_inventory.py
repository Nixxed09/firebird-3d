# Runs inside the editor: .\tools\ue-py.ps1 -Script tools\editor\mesh_inventory.py
#
# Lists every static mesh and Niagara system in the downloaded packs (everything under /Game
# except Firebird and the Megascans kit, which kit_inventory.py covers), with sizes in cm.
# Reads the asset registry and loads meshes only to measure them; nothing is saved.
# Output: engine/Saved/FabDownloads/mesh-inventory.json
import json
import os

import unreal

reg = unreal.AssetRegistryHelpers.get_asset_registry()
SKIP = ("/Game/Firebird", "/Game/Fab/Megascans", "/Game/Developers", "/Game/Collections", "/Game/__External")
out = []
for cls in ("StaticMesh", "NiagaraSystem"):
    flt = unreal.ARFilter(class_paths=[unreal.TopLevelAssetPath("/Script/Engine" if cls == "StaticMesh" else "/Script/Niagara", cls)],
                          package_paths=["/Game"], recursive_paths=True)
    for ad in reg.get_assets(flt):
        path = str(ad.package_name)
        if path.startswith(SKIP):
            continue
        row = {"kind": "mesh" if cls == "StaticMesh" else "fx", "pack": path.split("/")[2], "path": path,
               "name": str(ad.asset_name)}
        if cls == "StaticMesh":
            obj = ad.get_asset()
            b = obj.get_bounding_box()
            s = b.max - b.min
            row["size_cm"] = [round(s.x), round(s.y), round(s.z)]
            row["min_cm"] = [round(b.min.x), round(b.min.y), round(b.min.z)]
            row["nanite"] = bool(obj.get_editor_property("nanite_settings").enabled)
        out.append(row)

dest = os.path.join(unreal.Paths.convert_relative_path_to_full(unreal.Paths.project_saved_dir()),
                    "FabDownloads", "mesh-inventory.json")
with open(dest, "w", encoding="utf-8") as f:
    json.dump(out, f, indent=1)
unreal.log("FB_PY wrote %d entries to %s" % (len(out), dest))
unreal.log("FB_PY DONE")
