# Runs inside the editor. Lists every Megascans piece with its size, so a room can be planned.
# Output: engine/Saved/FabDownloads/kit-inventory.json
import json
import os

import unreal

eal = unreal.EditorAssetLibrary
out = []
for path in eal.list_assets("/Game/Fab/Megascans", recursive=True):
    obj = unreal.load_asset(path)
    if isinstance(obj, unreal.StaticMesh):
        b = obj.get_bounding_box()
        size = b.max - b.min
        out.append({
            "kind": "mesh", "path": path.split(".")[0], "piece": path.split("/")[5],
            "size_cm": [round(size.x), round(size.y), round(size.z)],
            "min_cm": [round(b.min.x), round(b.min.y), round(b.min.z)],
        })
    elif isinstance(obj, unreal.MaterialInstanceConstant) and "/Surfaces/" in path:
        out.append({"kind": "surface", "path": path.split(".")[0], "piece": path.split("/")[5]})

dest = os.path.join(unreal.Paths.convert_relative_path_to_full(unreal.Paths.project_saved_dir()),
                    "FabDownloads", "kit-inventory.json")
with open(dest, "w", encoding="utf-8") as f:
    json.dump(out, f, indent=1)
unreal.log("FB_PY wrote %d entries to %s" % (len(out), dest))
unreal.log("FB_PY DONE")
