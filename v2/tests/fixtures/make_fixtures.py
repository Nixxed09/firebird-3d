# Builds tiny test assets that follow docs/ASSETS.md, to prove the loader
# end to end before real art exists. Run:
#   "C:\Program Files\Blender Foundation\Blender 4.5\blender.exe" -b -P tests/fixtures/make_fixtures.py
# Output: tests/fixtures/assets/ (assets.json, *.glb, textures/*.png)
import bpy, math, os, json

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, 'assets')
os.makedirs(os.path.join(OUT, 'textures'), exist_ok=True)

def reset():
    bpy.ops.wm.read_factory_settings(use_empty=True)

def mat(name, rgb, emit=None, strength=0.0):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    b = m.node_tree.nodes['Principled BSDF']
    b.inputs['Base Color'].default_value = (*rgb, 1)
    b.inputs['Roughness'].default_value = 0.6
    if emit:
        b.inputs['Emission Color'].default_value = (*emit, 1)
        b.inputs['Emission Strength'].default_value = strength
    return m

def export(name):
    path = os.path.join(OUT, name + '.glb')
    bpy.ops.export_scene.gltf(filepath=path, export_format='GLB', export_animations=True, export_apply=False)
    return path

# ---- test imp: 1.7 m, faces +Z (Blender -Y forward -> glTF +Z), origin at feet, 6 clips
reset()
bpy.ops.object.armature_add(location=(0, 0, 0))
arm = bpy.context.object; arm.name = 'imp_rig'
bpy.ops.object.mode_set(mode='EDIT')
root = arm.data.edit_bones[0]; root.name = 'hips'; root.head = (0, 0, 0.8); root.tail = (0, 0, 1.2)
chest = arm.data.edit_bones.new('chest'); chest.head = (0, 0, 1.2); chest.tail = (0, 0, 1.6); chest.parent = root
armb = arm.data.edit_bones.new('arm'); armb.head = (0.25, 0, 1.4); armb.tail = (0.25, 0, 0.9); armb.parent = chest
bpy.ops.object.mode_set(mode='OBJECT')
skin = mat('imp_skin', (0.45, 0.12, 0.06))
eyes = mat('imp_eyes', (1, 0.6, 0.1), (1, 0.6, 0.1), 5)
parts = []
bpy.ops.mesh.primitive_cube_add(size=1, location=(0, 0, 0.9)); b = bpy.context.object; b.scale = (0.35, 0.25, 0.9); b.data.materials.append(skin); parts.append(b)
bpy.ops.mesh.primitive_uv_sphere_add(radius=0.18, location=(0, 0, 1.55)); h = bpy.context.object; h.data.materials.append(skin); parts.append(h)
bpy.ops.mesh.primitive_cube_add(size=1, location=(0.3, 0, 1.15)); a = bpy.context.object; a.scale = (0.1, 0.1, 0.5); a.data.materials.append(skin); parts.append(a)
for sx in (-0.07, 0.07):
    bpy.ops.mesh.primitive_uv_sphere_add(radius=0.035, location=(sx, -0.16, 1.58)); e = bpy.context.object; e.data.materials.append(eyes); parts.append(e)
bpy.ops.object.select_all(action='DESELECT')
for p in parts: p.select_set(True)
bpy.context.view_layer.objects.active = parts[0]
bpy.ops.object.join()
body = bpy.context.object; body.name = 'imp_body'
body.select_set(True); arm.select_set(True); bpy.context.view_layer.objects.active = arm
bpy.ops.object.parent_set(type='ARMATURE_AUTO')
bpy.ops.object.mode_set(mode='POSE')
pb = arm.pose.bones
def clip(name, frames):
    act = bpy.data.actions.new(name)
    arm.animation_data_create(); arm.animation_data.action = act
    for f, poses in frames:
        for bone, rot in poses.items():
            pb[bone].rotation_mode = 'XYZ'
            pb[bone].rotation_euler = rot
            pb[bone].keyframe_insert('rotation_euler', frame=f)
    track = arm.animation_data.nla_tracks.new(); track.name = name
    track.strips.new(name, 1, act)
    arm.animation_data.action = None
z = (0, 0, 0)
clip('idle', [(1, {'chest': z, 'arm': z}), (30, {'chest': (0.05, 0, 0), 'arm': z}), (60, {'chest': z, 'arm': z})])
clip('walk', [(1, {'hips': (0, 0, 0.15), 'arm': (0.5, 0, 0)}), (12, {'hips': (0, 0, -0.15), 'arm': (-0.5, 0, 0)}), (24, {'hips': (0, 0, 0.15), 'arm': (0.5, 0, 0)})])
clip('attack_windup', [(1, {'arm': z}), (10, {'arm': (-2.4, 0, 0)})])
clip('attack', [(1, {'arm': (-2.4, 0, 0)}), (6, {'arm': (1.0, 0, 0)}), (14, {'arm': z})])
clip('pain', [(1, {'chest': z}), (5, {'chest': (-0.5, 0, 0)}), (14, {'chest': z})])
clip('death', [(1, {'hips': z}), (20, {'hips': (-1.5, 0, 0)})])
bpy.ops.object.mode_set(mode='OBJECT')
export('imp')

# ---- test pistol: origin at the grip, with a separate "slide" node
reset()
steel = mat('steel', (0.2, 0.21, 0.24))
bpy.ops.mesh.primitive_cube_add(size=1, location=(0, 0, -0.05)); g = bpy.context.object; g.name = 'grip'; g.scale = (0.035, 0.05, 0.11); g.data.materials.append(steel)
bpy.ops.mesh.primitive_cube_add(size=1, location=(0, -0.08, 0.03)); s = bpy.context.object; s.name = 'slide'; s.scale = (0.04, 0.2, 0.045); s.data.materials.append(mat('slide_steel', (0.55, 0.56, 0.6)))
s.parent = g
export('pistol')

# ---- test barrel: a prop, no animation
reset()
bpy.ops.mesh.primitive_cylinder_add(radius=0.4, depth=1.1, location=(0, 0, 0.55)); c = bpy.context.object; c.name = 'barrel'
c.data.materials.append(mat('drum', (0.2, 0.35, 0.15), (0.4, 1, 0.2), 0.4))
export('barrel')

# ---- test brick texture set: checker so it is obvious in the game
reset()
def img(name, fn):
    im = bpy.data.images.new(name, 64, 64, alpha=False)
    px = []
    for y in range(64):
        for x in range(64):
            px.extend(fn(x, y))
    im.pixels = px
    im.filepath_raw = os.path.join(OUT, 'textures', name + '.png'); im.file_format = 'PNG'; im.save()
img('brick_albedo', lambda x, y: (0.9, 0.2, 0.9, 1) if ((x // 8) + (y // 8)) % 2 else (0.1, 0.9, 0.3, 1))
img('brick_normal', lambda x, y: (0.5, 0.5, 1, 1))

man = {'version': 1, 'assets': [
    {'id': 'imp', 'type': 'demon', 'file': 'imp.glb', 'size_m': [0.7, 1.7, 0.5], 'animations': ['idle', 'walk', 'attack_windup', 'attack', 'pain', 'death']},
    {'id': 'pistol', 'type': 'weapon', 'file': 'pistol.glb', 'nodes': ['slide']},
    {'id': 'barrel', 'type': 'prop', 'file': 'barrel.glb'},
    {'id': 'brick', 'type': 'texture', 'maps': {'albedo': 'textures/brick_albedo.png', 'normal': 'textures/brick_normal.png'}}
]}
with open(os.path.join(OUT, 'assets.json'), 'w') as f: json.dump(man, f, indent=2)
print('fixtures written to', OUT)
