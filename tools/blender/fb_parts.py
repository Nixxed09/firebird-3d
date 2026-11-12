# Shared helpers for building pack assets in headless Blender (4.5).
# Every asset script imports this, builds named parts, and calls finish().
#
# Conventions (same as GamesOS toolkit/3d): metres, +Z up. A weapon points down +X
# and its origin is where the trigger hand holds it.
import math, os, sys, json
import bpy, bmesh
from mathutils import Vector

sys.dont_write_bytecode = True


def reset():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    s = bpy.context.scene
    s.unit_settings.system = "METRIC"
    s.unit_settings.scale_length = 1.0
    return s


def args_after_dashes():
    a = sys.argv
    a = a[a.index("--") + 1:] if "--" in a else []
    out = {}
    for i in range(0, len(a) - 1, 2):
        out[a[i].lstrip("-")] = a[i + 1]
    return out


# ---------------------------------------------------------------- materials

def material(name, colour, metallic=0.0, roughness=0.5, grain=None):
    """A plain PBR material. `grain` adds a procedural pattern for Blender renders
    (wood, brushed metal); the bake job turns it into textures for the engine."""
    m = bpy.data.materials.get(name)
    if m:
        return m
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    nt = m.node_tree
    b = nt.nodes["Principled BSDF"]
    b.inputs["Base Color"].default_value = (*colour, 1.0)
    b.inputs["Metallic"].default_value = metallic
    b.inputs["Roughness"].default_value = roughness
    m.diffuse_color = (*colour, 1.0)
    m.metallic = metallic
    m.roughness = roughness
    if grain == "wood":
        tc = nt.nodes.new("ShaderNodeTexCoord")
        mp = nt.nodes.new("ShaderNodeMapping")
        mp.inputs["Scale"].default_value = (5.0, 190.0, 190.0)
        noise = nt.nodes.new("ShaderNodeTexNoise")
        noise.inputs["Scale"].default_value = 1.0
        noise.inputs["Detail"].default_value = 9.0
        noise.inputs["Roughness"].default_value = 0.62
        wave = noise
        ramp = nt.nodes.new("ShaderNodeValToRGB")
        dark = tuple(c * 0.38 for c in colour)
        ramp.color_ramp.elements[0].color = (*dark, 1.0)
        ramp.color_ramp.elements[1].color = (*colour, 1.0)
        ramp.color_ramp.elements[0].position = 0.42
        ramp.color_ramp.elements[1].position = 0.58
        bump = nt.nodes.new("ShaderNodeBump")
        bump.inputs["Strength"].default_value = 0.06
        nt.links.new(tc.outputs["Object"], mp.inputs["Vector"])
        nt.links.new(mp.outputs["Vector"], noise.inputs["Vector"])
        nt.links.new(wave.outputs["Fac"], ramp.inputs["Fac"])
        nt.links.new(ramp.outputs["Color"], b.inputs["Base Color"])
        nt.links.new(wave.outputs["Fac"], bump.inputs["Height"])
        nt.links.new(bump.outputs["Normal"], b.inputs["Normal"])
    elif grain == "metal":
        tc = nt.nodes.new("ShaderNodeTexCoord")
        noise = nt.nodes.new("ShaderNodeTexNoise")
        noise.inputs["Scale"].default_value = 2600.0
        noise.inputs["Detail"].default_value = 3.0
        rr = nt.nodes.new("ShaderNodeMapRange")
        rr.inputs["To Min"].default_value = max(0.05, roughness - 0.05)
        rr.inputs["To Max"].default_value = min(1.0, roughness + 0.07)
        big = nt.nodes.new("ShaderNodeTexNoise")
        big.inputs["Scale"].default_value = 9.0
        big.inputs["Detail"].default_value = 4.0
        mix = nt.nodes.new("ShaderNodeMix")
        mix.data_type = "RGBA"
        fr = nt.nodes.new("ShaderNodeMapRange")
        fr.inputs["To Min"].default_value = 0.55
        mix.inputs["A"].default_value = (*tuple(c * 0.82 for c in colour), 1.0)
        mix.inputs["B"].default_value = (*colour, 1.0)
        nt.links.new(tc.outputs["Object"], noise.inputs["Vector"])
        nt.links.new(tc.outputs["Object"], big.inputs["Vector"])
        nt.links.new(noise.outputs["Fac"], rr.inputs["Value"])
        nt.links.new(rr.outputs["Result"], b.inputs["Roughness"])
        nt.links.new(big.outputs["Fac"], fr.inputs["Value"])
        fr.inputs["To Min"].default_value = 0.88
        nt.links.new(fr.outputs["Result"], mix.inputs["Factor"])
        nt.links.new(mix.outputs["Result"], b.inputs["Base Color"])
    return m


# ---------------------------------------------------------------- mesh makers

def _obj(name, bm, mat, smooth=True, collection="Asset"):
    me = bpy.data.meshes.new(name)
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    bm.to_mesh(me)
    bm.free()
    for p in me.polygons:
        p.use_smooth = smooth
    ob = bpy.data.objects.new(name, me)
    col = bpy.data.collections.get(collection)
    if not col:
        col = bpy.data.collections.new(collection)
        bpy.context.scene.collection.children.link(col)
    col.objects.link(ob)
    if mat:
        me.materials.append(mat)
    return ob


def bevel(ob, width=0.0006, segments=2, angle=35.0):
    m = ob.modifiers.new("Bevel", "BEVEL")
    m.width = width
    m.segments = segments
    m.limit_method = "ANGLE"
    m.angle_limit = math.radians(angle)
    m.harden_normals = False
    w = ob.modifiers.new("Normals", "WEIGHTED_NORMAL")
    w.keep_sharp = False
    return ob


def prism(name, pts_xz, width, mat, y=0.0, bevel_w=0.0006, smooth=True):
    """A side profile (points in X,Z) pushed out to `width` along Y, centred on y."""
    bm = bmesh.new()
    vs = [bm.verts.new((x, y - width / 2, z)) for x, z in pts_xz]
    f = bm.faces.new(vs)
    r = bmesh.ops.extrude_face_region(bm, geom=[f])
    bmesh.ops.translate(bm, vec=(0, width, 0), verts=[e for e in r["geom"] if isinstance(e, bmesh.types.BMVert)])
    ob = _obj(name, bm, mat, smooth)
    if bevel_w:
        bevel(ob, bevel_w)
    return ob


def box(name, x0, x1, y0, y1, z0, z1, mat, bevel_w=0.0005):
    bm = bmesh.new()
    bmesh.ops.create_cube(bm, size=1.0)
    for v in bm.verts:
        v.co.x = x0 if v.co.x < 0 else x1
        v.co.y = y0 if v.co.y < 0 else y1
        v.co.z = z0 if v.co.z < 0 else z1
    ob = _obj(name, bm, mat)
    if bevel_w:
        bevel(ob, bevel_w)
    return ob


def tube(name, x0, x1, z, radius, mat, y=0.0, sides=24, smooth=True, spin=0.0, bevel_w=0.0, axis="X"):
    """A cylinder along X (or along Y when axis='Y', then x0,x1 are y0,y1 and y is x)."""
    bm = bmesh.new()
    rings = []
    for a in (x0, x1):
        ring = []
        for i in range(sides):
            t = spin + 2 * math.pi * i / sides
            c, s = math.cos(t) * radius, math.sin(t) * radius
            co = (a, y + c, z + s) if axis == "X" else (y + c, a, z + s)
            ring.append(bm.verts.new(co))
        rings.append(ring)
    for i in range(sides):
        j = (i + 1) % sides
        bm.faces.new((rings[0][i], rings[0][j], rings[1][j], rings[1][i]))
    bm.faces.new(rings[0])
    bm.faces.new(list(reversed(rings[1])))
    ob = _obj(name, bm, mat, smooth)
    if smooth:
        for p in ob.data.polygons:
            if len(p.vertices) > 4:
                p.use_smooth = False
    if bevel_w:
        bevel(ob, bevel_w, angle=50.0)
    return ob


def _interp(table, x):
    """table: [(x, value), ...] sorted by x. Straight lines between the points."""
    if x <= table[0][0]:
        return table[0][1]
    for (xa, va), (xb, vb) in zip(table, table[1:]):
        if x <= xb:
            t = (x - xa) / (xb - xa)
            return va + (vb - va) * t
    return table[-1][1]


def _soft(vals, passes):
    for _ in range(passes):
        vals = [vals[0]] + [(a + 2 * b + c) / 4 for a, b, c in zip(vals, vals[1:], vals[2:])] + [vals[-1]]
    return vals


def loft(name, x0, x1, top, bottom, width, mat, steps=28, sides=28, power=2.3, cap=True, y=0.0, subsurf=1, soften=3):
    """A rounded body along X whose top line, bottom line and width are tables of
    (x, value). Cross sections are superellipses (power 2 = ellipse, higher = boxier).
    Good for stocks, forends, grips, handles."""
    bm = bmesh.new()
    rings = []
    xs = [x0 + (x1 - x0) * k / steps for k in range(steps + 1)]
    tops = _soft([_interp(top, x) for x in xs], soften)
    bots = _soft([_interp(bottom, x) for x in xs], soften)
    wids = _soft([_interp(width, x) for x in xs], soften)
    for x, zt, zb, w in zip(xs, tops, bots, wids):
        zc, h = (zt + zb) / 2, (zt - zb) / 2
        ring = []
        for i in range(sides):
            t = 2 * math.pi * i / sides
            c, s = math.cos(t), math.sin(t)
            yy = math.copysign(abs(c) ** (2 / power), c) * w / 2
            zz = math.copysign(abs(s) ** (2 / power), s) * h
            ring.append(bm.verts.new((x, y + yy, zc + zz)))
        rings.append(ring)
    for a, b in zip(rings, rings[1:]):
        for i in range(sides):
            j = (i + 1) % sides
            bm.faces.new((a[i], a[j], b[j], b[i]))
    if cap:
        bm.faces.new(rings[0])
        bm.faces.new(list(reversed(rings[-1])))
    ob = _obj(name, bm, mat)
    if subsurf:
        m = ob.modifiers.new("Subsurf", "SUBSURF")
        m.levels = subsurf
        m.render_levels = subsurf
        # keep the end caps crisp
        cr = ob.data.attributes.new("crease_edge", "FLOAT", "EDGE")
        me = ob.data
        for e in me.edges:
            xs = [me.vertices[v].co.x for v in e.vertices]
            if abs(xs[0] - xs[1]) < 1e-7 and (abs(xs[0] - x0) < 1e-6 or abs(xs[0] - x1) < 1e-6):
                cr.data[e.index].value = 1.0
    return ob


def fillet(points, r, closed=False, n=7):
    """Round the corners of a path in X,Z. Returns many points."""
    out = []
    P = [Vector((x, 0, z)) for x, z in points]
    idx = range(len(P)) if closed else range(1, len(P) - 1)
    if not closed:
        out.append((P[0].x, P[0].z))
    for i in idx:
        a, b, c = P[i - 1], P[i], P[(i + 1) % len(P)]
        u, v = (a - b).normalized(), (c - b).normalized()
        ang = u.angle(v)
        ri = r[i] if isinstance(r, (list, tuple)) else r
        d = min(ri / math.tan(ang / 2), (a - b).length * 0.49, (c - b).length * 0.49)
        rr = d * math.tan(ang / 2)
        centre = b + (u + v).normalized() * (rr / math.sin(ang / 2))
        s, e = b + u * d - centre, b + v * d - centre
        for k in range(n + 1):
            p = centre + s.normalized().slerp(e.normalized(), k / n) * rr
            out.append((p.x, p.z))
    if not closed:
        out.append((P[-1].x, P[-1].z))
    return out


def sweep(name, pts_xz, thickness, width, mat, cyclic=False, y=0.0, chamfer=0.3):
    """A flat bar bent along a path in the X,Z plane (levers, guards, straps, hoops).
    thickness is in the plane, width is across it (along Y). Use fillet() for the path."""
    bm = bmesh.new()
    n = len(pts_xz)
    t2, w2 = thickness / 2, width / 2
    c = min(t2, w2) * chamfer * 2
    sec = [(-t2 + c, -w2), (t2 - c, -w2), (t2, -w2 + c), (t2, w2 - c), (t2 - c, w2), (-t2 + c, w2), (-t2, w2 - c), (-t2, -w2 + c)]
    rings = []
    for i, (x, z) in enumerate(pts_xz):
        a = pts_xz[(i - 1) % n] if (cyclic or i > 0) else pts_xz[i]
        b = pts_xz[(i + 1) % n] if (cyclic or i < n - 1) else pts_xz[i]
        tx, tz = b[0] - a[0], b[1] - a[1]
        l = math.hypot(tx, tz) or 1.0
        nx, nz = -tz / l, tx / l
        rings.append([bm.verts.new((x + nx * s, y + w, z + nz * s)) for s, w in sec])
    pairs = list(zip(rings, rings[1:])) + ([(rings[-1], rings[0])] if cyclic else [])
    for a, b in pairs:
        for i in range(8):
            j = (i + 1) % 8
            bm.faces.new((a[i], a[j], b[j], b[i]))
    if not cyclic:
        bm.faces.new(rings[0])
        bm.faces.new(list(reversed(rings[-1])))
    ob = _obj(name, bm, mat)
    w = ob.modifiers.new("Normals", "WEIGHTED_NORMAL")
    return ob

def cut(ob, cutter):
    """Boolean difference; the cutter is deleted."""
    m = ob.modifiers.new("Cut", "BOOLEAN")
    m.operation = "DIFFERENCE"
    m.object = cutter
    m.solver = "EXACT"
    bpy.context.view_layer.objects.active = ob
    # booleans must come before bevels
    while ob.modifiers[0].name != "Cut":
        bpy.ops.object.modifier_move_up(modifier="Cut")
    bpy.ops.object.modifier_apply(modifier="Cut")
    bpy.data.objects.remove(cutter)
    return ob


def pivot(ob, x, y, z):
    """Move the object's origin to a point (the hinge a moving part turns on)."""
    d = Vector((x, y, z)) - ob.location
    ob.data.transform(__import__("mathutils").Matrix.Translation(-d))
    ob.location = Vector((x, y, z))
    bpy.context.view_layer.update()
    return ob


def mirror_y(ob):
    m = ob.modifiers.new("Mirror", "MIRROR")
    m.use_axis = (False, True, False)
    return ob


# ---------------------------------------------------------------- finish

def finish(out_blend, report_extra=None):
    """Apply modifiers, count triangles per part, save the .blend and a JSON report."""
    scene = bpy.context.scene
    parts = {}
    total = 0
    dg = bpy.context.evaluated_depsgraph_get()
    lo = Vector((1e9,) * 3)
    hi = Vector((-1e9,) * 3)
    for ob in bpy.data.collections["Asset"].objects:
        if ob.type != "MESH":
            continue
        me = ob.evaluated_get(dg).to_mesh()
        tris = sum(len(p.vertices) - 2 for p in me.polygons)
        for v in me.vertices:
            w = ob.matrix_world @ v.co
            for i in range(3):
                lo[i] = min(lo[i], w[i])
                hi[i] = max(hi[i], w[i])
        parts[ob.name] = {"triangles": tris, "material": ob.data.materials[0].name if ob.data.materials else None}
        total += tris
    os.makedirs(os.path.dirname(out_blend), exist_ok=True)
    bpy.ops.wm.save_as_mainfile(filepath=out_blend)
    rep = {"blend": out_blend, "triangles": total, "parts": parts,
           "size_m": [round(hi[i] - lo[i], 4) for i in range(3)],
           "min": [round(v, 4) for v in lo], "max": [round(v, 4) for v in hi]}
    if report_extra:
        rep.update(report_extra)
    with open(os.path.splitext(out_blend)[0] + ".build.json", "w") as f:
        json.dump(rep, f, indent=1)
    print("FORGE_BUILD_OK triangles=%d parts=%d size=%s" % (total, len(parts), rep["size_m"]))
    return rep
