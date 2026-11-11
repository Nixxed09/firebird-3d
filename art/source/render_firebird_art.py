"""Render the saved Blender source without rebuilding or changing its assets."""
from pathlib import Path
import bpy
import sys
from mathutils import Vector

root = Path(__file__).resolve().parents[1]
bpy.ops.wm.open_mainfile(filepath=str(root / 'Firebird_ArtKit_v01.blend'))
prefs = bpy.context.preferences.addons['cycles'].preferences
try:
    prefs.compute_device_type = 'OPTIX'
    prefs.get_devices()
    for device in prefs.devices:
        device.use = device.type == 'OPTIX'
    gpu = any(d.use for d in prefs.devices)
except Exception:
    gpu = False

for scene_name, filename in [
    ('02 - Ashgate courtyard', 'ashgate-courtyard-v01.png'),
    ('03 - Hero asset turntable', 'hollow-v01.png'),
    ('04 - Firebird player', 'firebird-player-v01.png'),
    ('03 - Hero asset turntable', 'spark-caster-v01.png'),
]:
    if '--player-only' in sys.argv and filename != 'firebird-player-v01.png': continue
    scene = bpy.data.scenes[scene_name]
    scene.cycles.device = 'GPU' if gpu else 'CPU'
    if filename == 'hollow-v01.png':
        scene.camera.location = (2.5, -4.8, 2.25)
        scene.camera.rotation_euler = (Vector((0, 0, 1.02)) - scene.camera.location).to_track_quat('-Z', 'Y').to_euler()
        scene.camera.data.ortho_scale = 2.5
    elif filename == 'spark-caster-v01.png':
        scene.camera.location = (4.4, -3, 2)
        scene.camera.rotation_euler = (Vector((3, 0, .9)) - scene.camera.location).to_track_quat('-Z', 'Y').to_euler()
        scene.camera.data.ortho_scale = 1.95
    scene.render.filepath = str(root / 'renders' / filename)
    bpy.ops.render.render(write_still=True, scene=scene.name)
    print('FB_RENDER_OK', filename, flush=True)
