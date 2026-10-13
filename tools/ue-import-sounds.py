# Imports engine/Content/Firebird/Sounds/Source/*.wav as SoundWave assets in
# /Game/Firebird/Sounds (run by tools/ue-import-sounds.ps1 in the editor's Python).
# The *_loop sounds are marked looping. Re-running replaces the assets.
import glob
import os

import unreal

DEST = "/Game/Firebird/Sounds"
src = os.path.join(unreal.Paths.convert_relative_path_to_full(unreal.Paths.project_content_dir()), "Firebird", "Sounds", "Source")
files = sorted(glob.glob(os.path.join(src, "*.wav")))
tasks = []
for f in files:
    t = unreal.AssetImportTask()
    t.set_editor_property("filename", f)
    t.set_editor_property("destination_path", DEST)
    t.set_editor_property("replace_existing", True)
    t.set_editor_property("automated", True)
    t.set_editor_property("save", False)
    tasks.append(t)
unreal.AssetToolsHelpers.get_asset_tools().import_asset_tasks(tasks)

count = 0
for f in files:
    name = os.path.splitext(os.path.basename(f))[0]
    path = DEST + "/" + name
    wave = unreal.EditorAssetLibrary.load_asset(path)
    if not wave:
        unreal.log_error("FB_SOUNDS missing after import: " + path)
        continue
    wave.set_editor_property("looping", name.endswith("_loop"))
    unreal.EditorAssetLibrary.save_asset(path, only_if_is_dirty=False)
    count += 1
unreal.log("FB_SOUNDS imported %d of %d into %s" % (count, len(files), DEST))
