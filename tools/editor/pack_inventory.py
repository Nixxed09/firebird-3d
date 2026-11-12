# Runs inside the editor: .\tools\ue-py.ps1 -Script tools\editor\pack_inventory.py
# Writes engine/Saved/FabDownloads/pack-inventory.json: for every pack folder in /Game
# (everything except Firebird and Fab), how many assets of each kind it has, and the
# paths of its maps, Niagara systems, skeletal meshes and blueprints.
import json, os, collections
import unreal

reg = unreal.AssetRegistryHelpers.get_asset_registry()
skip = {"Firebird", "Fab", "Collections", "Developers", "__ExternalActors__", "__ExternalObjects__"}
root = unreal.Paths.project_content_dir()
packs = sorted(d for d in os.listdir(root) if os.path.isdir(os.path.join(root, d)) and d not in skip)
keep = {"World", "NiagaraSystem", "SkeletalMesh", "Blueprint", "ParticleSystem"}
out = {}
for p in packs:
    counts = collections.Counter()
    paths = collections.defaultdict(list)
    for a in reg.get_assets_by_path("/Game/" + p, recursive=True):
        c = str(a.asset_class_path.asset_name)
        counts[c] += 1
        if c in keep:
            paths[c].append(str(a.package_name))
    out[p] = {"counts": dict(counts), "paths": {k: sorted(v) for k, v in paths.items()}}
    unreal.log("FB_PY %s: %s" % (p, ", ".join("%s %d" % kv for kv in counts.most_common(7))))
dest = os.path.join(unreal.Paths.project_saved_dir(), "FabDownloads", "pack-inventory.json")
with open(dest, "w") as f:
    json.dump(out, f, indent=1)
unreal.log("FB_PY wrote " + dest)
unreal.log("FB_PY DONE")
