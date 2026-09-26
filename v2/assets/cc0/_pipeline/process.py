"""Turn the raw CC0 downloads into contract-ready models (docs/ASSETS.md).

    blender -b -P assets/cc0/_pipeline/process.py [-- id id ...]

For each entry in sources.json: import raw/<id>.glb, scale to the target
height (demons, props) or length (weapons), put the origin at the feet (or
the bottom centre for weapons), rename the animation clips to the engine's
names and drop the rest, apply any recolour (Riley's palette and her
`tell` material), add Riley's `shield` node, and export assets/cc0/<id>.glb.
"""
import bpy, json, math, os, sys
from mathutils import Matrix, Vector

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.normpath(os.path.join(HERE, '..'))
SOURCES = json.load(open(os.path.join(HERE, 'sources.json'), encoding='utf8'))['sources']
ONLY = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else []


def lin(hexcol):
    h = hexcol.lstrip('#')
    out = []
    for i in (0, 2, 4):
        c = int(h[i:i + 2], 16) / 255
        out.append(c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4)
    return out


def base(name):
    return name.split('|')[-1].split('.')[0]


def bounds():
    """World-space bounds of all meshes, in the armature's rest pose."""
    for arm in [o for o in bpy.data.objects if o.type == 'ARMATURE']:
        arm.data.pose_position = 'REST'
    bpy.context.view_layer.update()
    dg = bpy.context.evaluated_depsgraph_get()
    lo, hi = Vector((1e9, 1e9, 1e9)), Vector((-1e9, -1e9, -1e9))
    for o in bpy.data.objects:
        if o.type != 'MESH':
            continue
        ev = o.evaluated_get(dg)
        for corner in ev.bound_box:
            w = o.matrix_world @ Vector(corner)
            lo = Vector((min(lo[i], w[i]) for i in range(3)))
            hi = Vector((max(hi[i], w[i]) for i in range(3)))
    for arm in [o for o in bpy.data.objects if o.type == 'ARMATURE']:
        arm.data.pose_position = 'POSE'
    return lo, hi


def clean_import():
    """Remove what Blender's glTF importer adds: the icosphere it uses to draw
    bones (it would export as a 2 m mesh), and the active action and NLA
    tracks it stacks on the armature (they would blend into every exported
    clip, which laid the imp flat on the floor)."""
    for o in list(bpy.data.objects):
        if o.type == 'MESH' and o.name.startswith('Icosphere') and o.parent is None and not o.data.materials:
            bpy.data.objects.remove(o, do_unlink=True)
    for o in bpy.data.objects:
        ad = o.animation_data
        if ad:
            ad.action = None
            for t in list(ad.nla_tracks):
                ad.nla_tracks.remove(t)


def orient_weapon():
    """Point the muzzle along glTF +Z (Blender -Y) and return the grip.
    The grip is the lower part of the gun; the muzzle is the far end from it."""
    dg = bpy.context.evaluated_depsgraph_get()
    pts = []
    for o in bpy.data.objects:
        if o.type == 'MESH':
            m = o.evaluated_get(dg).to_mesh()
            pts += [o.matrix_world @ v.co for v in m.vertices]
            o.evaluated_get(dg).to_mesh_clear()
    lo = Vector((min(p.x for p in pts), min(p.y for p in pts), min(p.z for p in pts)))
    hi = Vector((max(p.x for p in pts), max(p.y for p in pts), max(p.z for p in pts)))
    axis = 0 if hi.x - lo.x > hi.y - lo.y else 1
    low = [p for p in pts if p.z < lo.z + 0.45 * (hi.z - lo.z)]
    grip_along = sum(p[axis] for p in low) / len(low)
    muzzle_pos = abs(hi[axis] - grip_along) > abs(grip_along - lo[axis])   # muzzle at the + end?
    angle = {(0, True): -math.pi / 2, (0, False): math.pi / 2, (1, True): math.pi, (1, False): 0}[(axis, muzzle_pos)]
    R = Matrix.Rotation(angle, 4, 'Z')
    for o in roots():
        o.matrix_world = R @ o.matrix_world
    bpy.context.view_layer.update()


def grip_point():
    dg = bpy.context.evaluated_depsgraph_get()
    pts = []
    for o in bpy.data.objects:
        if o.type == 'MESH':
            m = o.evaluated_get(dg).to_mesh()
            pts += [o.matrix_world @ v.co for v in m.vertices]
            o.evaluated_get(dg).to_mesh_clear()
    lo_z = min(p.z for p in pts); hi_z = max(p.z for p in pts)
    low = [p for p in pts if p.z < lo_z + 0.45 * (hi_z - lo_z)]
    n = len(low)
    return Vector((sum(p.x for p in low) / n, sum(p.y for p in low) / n, sum(p.z for p in low) / n))


def roots():
    return [o for o in bpy.data.objects if o.parent is None]


def scale_and_place(src):
    lo, hi = bounds()
    size = hi - lo
    if src['type'] == 'weapon':
        s = src['length'] / max(size.x, size.y)       # longest horizontal extent
    else:
        s = src['height'] / size.z                   # Blender is Z-up
    for o in roots():
        o.location = o.location * s
        o.scale = o.scale * s
    bpy.context.view_layer.update()
    lo, hi = bounds()
    # feet at the origin; weapons: the grip
    shift = grip_point() if src['type'] == 'weapon' else Vector(((lo.x + hi.x) / 2, (lo.y + hi.y) / 2, lo.z))
    for o in roots():
        o.location = o.location - shift
    bpy.context.view_layer.update()
    return bounds()


def clips(src):
    want = src.get('clips', {})
    by_base = {}
    for a in list(bpy.data.actions):
        by_base.setdefault(base(a.name), a)
    keep = set()
    for target, source in want.items():
        a = by_base.get(source)
        if not a:
            print('  WARNING %s: no clip %s for %s' % (src['id'], source, target))
            continue
        if a in keep:            # the same source clip used twice
            a = a.copy()
        a.name = target
        a.use_fake_user = True
        keep.add(a)
    for a in list(bpy.data.actions):
        if a not in keep:
            bpy.data.actions.remove(a, do_unlink=True)
    return sorted(a.name for a in keep)


def recolor(src):
    for mat in bpy.data.materials:
        rc = src.get('recolor', {}).get(base(mat.name))
        if not rc or not mat.use_nodes:
            continue
        bsdf = next((n for n in mat.node_tree.nodes if n.type == 'BSDF_PRINCIPLED'), None)
        if not bsdf:
            continue
        for link in list(bsdf.inputs['Base Color'].links):
            mat.node_tree.links.remove(link)
        bsdf.inputs['Base Color'].default_value = lin(rc['color']) + [1]
        if rc.get('emit'):
            bsdf.inputs['Emission Color'].default_value = lin(rc['color']) + [1]
            bsdf.inputs['Emission Strength'].default_value = rc['emit']
        if rc.get('rename'):
            mat.name = rc['rename']


def add_shield(src, height):
    sh = src.get('shield')
    if not sh:
        return
    arm = next((o for o in bpy.data.objects if o.type == 'ARMATURE'), None)
    bpy.ops.mesh.primitive_ico_sphere_add(subdivisions=2, radius=sh['radius'], location=(0, 0, height * 0.5))
    ball = bpy.context.active_object
    ball.name = ball.data.name = 'shield'
    mat = bpy.data.materials.new('shield')
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes['Principled BSDF']
    bsdf.inputs['Base Color'].default_value = lin(sh['color']) + [1]
    bsdf.inputs['Emission Color'].default_value = lin(sh['color']) + [1]
    bsdf.inputs['Emission Strength'].default_value = 1.0
    bsdf.inputs['Alpha'].default_value = sh['alpha']
    mat.surface_render_method = 'BLENDED'
    ball.data.materials.append(mat)
    if arm:
        mw = ball.matrix_world.copy()
        ball.parent = arm
        ball.matrix_world = mw


def tris():
    dg = bpy.context.evaluated_depsgraph_get()
    n = 0
    for o in bpy.data.objects:
        if o.type == 'MESH':
            m = o.evaluated_get(dg).to_mesh()
            m.calc_loop_triangles()
            n += len(m.loop_triangles)
            o.evaluated_get(dg).to_mesh_clear()
    return n


for src in SOURCES:
    if ONLY and src['id'] not in ONLY:
        continue
    raw = os.path.join(HERE, 'raw', src['id'] + '.glb')
    bpy.ops.wm.read_factory_settings(use_empty=True)
    # models with several skins (the imp's trident) break if Blender guesses a
    # bind pose per skin; use the rest pose as the bind pose instead
    bpy.ops.import_scene.gltf(filepath=raw, guess_original_bind_pose=False)
    clean_import()
    if src['type'] == 'weapon':
        orient_weapon()
    lo, hi = scale_and_place(src)
    kept = clips(src)
    recolor(src)
    add_shield(src, hi.z - lo.z)
    out = os.path.join(OUT, src['id'] + '.glb')
    bpy.ops.export_scene.gltf(filepath=out, export_format='GLB', export_yup=True, export_apply=False,
                              export_animations=bool(kept), export_animation_mode='ACTIONS')
    size = hi - lo
    print('OK %s: %.2f x %.2f x %.2f m (w x d x h), %d tris, clips %s, %d KB' % (
        src['id'], size.x, size.y, size.z, tris(), kept, os.path.getsize(out) // 1024))
