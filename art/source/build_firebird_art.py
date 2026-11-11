"""Original Firebird art kit. Blender 4.5: blender -b --python this_file.py

Meters, Z up, characters face -Y. All textures are authored deterministically.
Run with -- --skip-render to rebuild source and exports without beauty renders.
"""
import bpy
import bmesh
import math
import json
import random
import sys
from pathlib import Path
from mathutils import Vector
import numpy as np

ROOT = Path(__file__).resolve().parents[1]
for folder in ('exports', 'textures', 'renders'):
    (ROOT / folder).mkdir(exist_ok=True)
random.seed(1907)
bpy.ops.wm.read_factory_settings(use_empty=True)
LIB = bpy.context.scene
LIB.name = '01 - Editable asset library'
LIB.unit_settings.system = 'METRIC'
LIB.unit_settings.scale_length = 1.0
ASSETS = {}
MAT = {}
CURRENT = None
PARENT = None


def texture(name, pixels, color=True):
    h, w = pixels.shape[:2]
    image = bpy.data.images.new(name, width=w, height=h, alpha=False)
    image.colorspace_settings.name = 'sRGB' if color else 'Non-Color'
    rgba = np.ones((h, w, 4), dtype=np.float32)
    rgba[:, :, :3] = pixels if pixels.ndim == 3 else pixels[:, :, None]
    image.pixels.foreach_set(rgba.ravel())
    image.filepath_raw = str(ROOT / 'textures' / (name + '.png'))
    image.file_format = 'PNG'
    image.save()
    return image


def material(name, rgb, roughness=.65, metallic=0, emission=0, stone=False):
    m = bpy.data.materials.new('M_FB_' + name)
    m.diffuse_color = (*rgb, 1)
    m.use_nodes = True
    n, links = m.node_tree.nodes, m.node_tree.links
    bs = n.get('Principled BSDF')
    bs.inputs['Base Color'].default_value = (*rgb, 1)
    bs.inputs['Metallic'].default_value = metallic
    bs.inputs['Roughness'].default_value = roughness
    if emission:
        bs.inputs['Emission Color'].default_value = (*rgb, 1)
        bs.inputs['Emission Strength'].default_value = emission
    else:
        size = 512
        rng = np.random.default_rng(sum(map(ord, name)))
        field = rng.normal(size=(size, size))
        spectrum = np.fft.rfft2(field)
        fy = np.fft.fftfreq(size)[:, None]
        fx = np.fft.rfftfreq(size)[None, :]
        freq = np.sqrt(fx * fx + fy * fy)
        noise = np.fft.irfft2(spectrum / np.maximum(freq, .008) ** 1.25, s=field.shape)
        noise = (noise - noise.min()) / (noise.max() - noise.min())
        grain = rng.random((size, size))
        base = np.array(rgb)[None, None, :] * (.73 + .30 * noise[:, :, None])
        base = np.broadcast_to(base, (size, size, 3)).copy()
        base += (grain[:, :, None] - .5) * (.035 if stone else .015)
        if metallic:
            patina = np.clip((noise - .67) * 2.8, 0, .62)
            base = base * (1 - patina[:, :, None]) + np.array([.065, .17, .14]) * patina[:, :, None]
        rough = np.clip(roughness + (noise - .5) * .24 + (grain - .5) * .08, .08, 1)
        height = noise * (.75 if stone else .15) + grain * (.2 if stone else .035)
        if name == 'AshShell':
            yy, xx = np.mgrid[0:size, 0:size].astype(float) / size
            distances = []
            for px, py in rng.random((22, 2)):
                vx = np.minimum(abs(xx-px), 1-abs(xx-px))
                vy = np.minimum(abs(yy-py), 1-abs(yy-py))
                distances.append(np.sqrt(vx*vx+vy*vy))
            nearest = np.partition(np.stack(distances), 1, axis=0)
            crack = np.clip(1 - (nearest[1]-nearest[0])/.0035, 0, 1)
            base *= 1-crack[:,:,None]*.7
            height -= crack*.48
        dx = np.roll(height, 1, 1) - np.roll(height, -1, 1)
        dy = np.roll(height, 1, 0) - np.roll(height, -1, 0)
        normals = np.stack((dx * .6, dy * .6, np.ones_like(dx)), axis=-1)
        normals /= np.linalg.norm(normals, axis=-1, keepdims=True)
        for suffix, arr, target, color in [('BaseColor', np.clip(base, 0, 1), 'Base Color', True), ('Roughness', rough, 'Roughness', False), ('Normal', normals * .5 + .5, None, False)]:
            tex = n.new('ShaderNodeTexImage')
            tex.image = texture(name + '_' + suffix, arr.astype(np.float32), color)
            if target:
                links.new(tex.outputs['Color'], bs.inputs[target])
            else:
                normal = n.new('ShaderNodeNormalMap')
                links.new(tex.outputs['Color'], normal.inputs['Color'])
                links.new(normal.outputs['Normal'], bs.inputs['Normal'])
    MAT[name] = m
    return m


material('Limestone', (.64, .57, .44), .8, stone=True)
material('AshShell', (.43, .45, .43), .83, stone=True)
material('Basalt', (.065, .079, .085), .72, stone=True)
material('Bronze', (.48, .255, .075), .34, .82)
material('GoldEdge', (.68, .44, .16), .29, .85)
material('Obsidian', (.025, .028, .036), .38, .2)
material('Crimson', (.48, .002, .009), .24, .2, 1.2)
material('Aether', (.025, .62, .8), .25, .25, 2.2)
material('Amber', (1, .28, .025), .28, .15, 3.0)


def asset(name, description):
    global CURRENT, PARENT
    CURRENT = bpy.data.collections.new(name)
    LIB.collection.children.link(CURRENT)
    root = bpy.data.objects.new(name + '_ROOT', None)
    CURRENT.objects.link(root)
    PARENT = root
    root['description'] = description
    ASSETS[name] = {'collection': CURRENT, 'root': root, 'description': description}
    return root


def finish(obj, name, mat, bevel=0):
    obj.name = name
    for c in list(obj.users_collection):
        c.objects.unlink(obj)
    CURRENT.objects.link(obj)
    obj.parent = PARENT
    if mat:
        obj.data.materials.append(MAT[mat])
    bpy.context.view_layer.objects.active = obj
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    if bevel:
        mod = obj.modifiers.new('Crafted edge bevel', 'BEVEL')
        mod.width = bevel
        mod.segments = 2
        bpy.ops.object.modifier_apply(modifier=mod.name)
    if obj.type == 'MESH':
        bpy.ops.object.mode_set(mode='EDIT')
        bpy.ops.mesh.select_all(action='SELECT')
        bpy.ops.uv.smart_project(angle_limit=1.15, island_margin=.015)
        bpy.ops.object.mode_set(mode='OBJECT')
        for p in obj.data.polygons:
            p.use_smooth = False
        bm=bmesh.new(); bm.from_mesh(obj.data)
        if bm.edges and all(e.is_manifold for e in bm.edges) and bm.calc_volume(signed=True)<0:
            bmesh.ops.reverse_faces(bm,faces=list(bm.faces)); bm.to_mesh(obj.data)
        bm.free()
    return obj


def cube(name, loc, dims, mat, bevel=.02, rot=None):
    bpy.ops.mesh.primitive_cube_add(size=1, location=loc)
    o = bpy.context.object
    o.dimensions = dims
    if rot:
        o.rotation_euler = rot
    return finish(o, name, mat, bevel)


def cylinder(name, loc, radius, depth, mat, verts=16, rot=None, radius_top=None):
    bpy.ops.mesh.primitive_cone_add(vertices=verts, radius1=radius, radius2=radius if radius_top is None else radius_top, depth=depth, location=loc)
    o = bpy.context.object
    if rot:
        o.rotation_euler = rot
    return finish(o, name, mat, .008 if radius > .04 else .002)


def ico(name, loc, dims, mat, sub=1):
    bpy.ops.mesh.primitive_ico_sphere_add(subdivisions=sub, radius=1, location=loc)
    o = bpy.context.object
    o.scale = Vector(dims) / 2
    return finish(o, name, mat)


def bar(name, a, b, width, mat, depth=None):
    d = Vector(b) - Vector(a)
    o = cube(name, (Vector(a) + Vector(b)) / 2, (width, depth or width, d.length), mat, min(width * .15, .018))
    o.rotation_euler = d.to_track_quat('Z', 'Y').to_euler()
    return o


def mesh(name, verts, faces, mat, bevel=0):
    data = bpy.data.meshes.new(name)
    data.from_pydata(verts, [], faces)
    data.update()
    bm=bmesh.new()
    bm.from_mesh(data)
    bmesh.ops.recalc_face_normals(bm,faces=list(bm.faces))
    bm.to_mesh(data)
    bm.free()
    obj = bpy.data.objects.new(name, data)
    CURRENT.objects.link(obj)
    bpy.ops.object.select_all(action='DESELECT')
    obj.select_set(True)
    bpy.context.view_layer.objects.active = obj
    return finish(obj, name, mat, bevel)


def ring(name, center, radius, width, depth, mat, segments=48, plane='XY', start=0, end=math.tau):
    verts, faces = [], []
    closed = abs(end-start-math.tau)<1e-5
    count = segments if closed else segments+1
    for i in range(count):
        t = start + (end - start) * i / segments
        for r, z in [(radius - width/2, -depth/2), (radius + width/2, -depth/2), (radius + width/2, depth/2), (radius - width/2, depth/2)]:
            p = (r * math.cos(t), r * math.sin(t), z)
            if plane == 'XZ':
                p = (p[0], p[2], p[1])
            elif plane == 'YZ':
                p = (p[2], p[0], p[1])
            verts.append(tuple(Vector(center) + Vector(p)))
    for i in range(segments):
        for j in range(4):
            a, b = 4*i+j, 4*i+(j+1)%4
            faces.append((a, b, (b+4)%(count*4), (a+4)%(count*4)))
    if not closed:
        faces.extend([(3, 2, 1, 0), tuple(4*segments+j for j in range(4))])
    return mesh(name, verts, faces, mat, min(.003, width*.15, depth*.15))


def lathe(name, center, profile, mat, segments=32):
    verts = [(center[0] + r*math.cos(i*math.tau/segments), center[1] + r*math.sin(i*math.tau/segments), center[2]+z) for z,r in profile for i in range(segments)]
    faces = []
    for j in range(len(profile)-1):
        for i in range(segments):
            a = j*segments+i
            b = j*segments+(i+1)%segments
            faces.append((a,b,b+segments,a+segments))
    return mesh(name, verts, faces, mat, .004)


def star(name, center, radius, mat, plane='XY'):
    verts = [center]
    for i in range(16):
        t = i*math.tau/16
        r = radius if i%2 == 0 else radius*.32
        p = (r*math.sin(t), r*math.cos(t), 0)
        if plane == 'XZ':
            p = (p[0], p[2], p[1])
        verts.append(tuple(Vector(center)+Vector(p)))
    return mesh(name, verts, [(0,(i+1)%16+1,i+1) for i in range(16)], mat)


def bolts(center, radius, count=8, plane='XY', size=.016):
    for i in range(count):
        t = i*math.tau/count
        p = (math.cos(t)*radius, math.sin(t)*radius, 0)
        if plane == 'XZ': p = (p[0], p[2], p[1])
        ico('Bronze rivet', Vector(center)+Vector(p), (size,size,size), 'GoldEdge')


# Architecture: 4 m modular grid, deliberately quiet combat surfaces.
asset('SM_FB_Arch_4m', '4m wide, 5m high bell-civic arch; open 2.9m passage')
for x in (-1.73, 1.73):
    cube('Stepped limestone foot', (x,0,.16), (.64,.95,.32), 'Limestone', .04)
    cube('Pier', (x,0,1.67), (.48,.62,2.7), 'Limestone', .045)
    cube('Bronze pier seam', (x,-.326,1.7), (.025,.018,2.5), 'Bronze', .003)
    cube('Arch spring capital', (x,0,3.05), (.7,.9,.22), 'Limestone', .028)
    cube('Capital bronze edge', (x,0,2.9), (.59,.74,.05), 'Bronze', .007)
for i in range(15):
    ring('Individual arch voussoir', (0,0,3.06), 1.72, .48, .68, 'Limestone', 2, 'XZ', i*math.pi/15+.012, (i+1)*math.pi/15-.012)
ring('Inner bronze archivolt', (0,-.36,3.06), 1.475, .035, .045, 'Bronze', 48, 'XZ', 0, math.pi)
cube('Crown keystone', (0,-.02,4.76), (.35,.84,.52), 'Limestone', .04)
star('Crown star', (0,-.451,4.76), .17, 'Bronze', 'XZ')

asset('SM_FB_Column_4m', 'Octagonal civic pillar, 4m high, foot pivot')
for z,r,d,m in [(.13,.53,.26,'Basalt'),(.32,.49,.16,'Limestone'),(.46,.48,.12,'Bronze'),(1.92,.45,2.8,'Limestone'),(3.38,.48,.12,'Bronze'),(3.58,.5,.28,'Limestone'),(3.83,.58,.22,'Limestone')]:
    cylinder('Octagonal column course', (0,0,z), r,d,m,8)
for i in range(8):
    a = i*math.tau/8 + math.pi/8
    x,y = .42*math.cos(a),.42*math.sin(a)
    bar('Conductive flute', (x,y,.57),(x,y,3.27),.018,'Bronze')
ring('Collar detail', (0,0,3.49), .435,.025,.035,'GoldEdge',32)

asset('SM_FB_Wall_4m', '4m limestone wall bay, 4m high, 0.4m thick')
cube('Wall mass', (0,.08,2), (4,.36,4), 'Basalt', .02)
for row in range(8):
    widths = [1,1,1,1] if row%2 == 0 else [.5,1,1,1,.5]
    x = -2
    for width in widths:
        cube('Dressed stone block', (x+width/2,-.13,row*.47+.31), (width-.02,.25,.445), 'Limestone', .017)
        x += width
for z in (.1,3.93):
    cube('Wall cornice', (0,-.15,z), (4,.55,.17), 'Limestone', .026)
cube('Horizontal bronze inlay', (0,-.269,3.66), (4,.015,.026),'Bronze',.002)

asset('SM_FB_Floor_4m', '4m basalt paving tile with eight-point brass star')
cube('Paving bed', (0,0,-.08),(4,4,.16),'Basalt',.015)
for x in range(4):
    for y in range(4):
        cube('Paving slab', (x-1.5,y-1.5,.005),(.985,.985,.055),'Basalt',.012)
ring('Paving medallion outer', (0,0,.037),1.62,.024,.007,'Bronze',64)
ring('Paving medallion inner', (0,0,.037),1.48,.012,.007,'Bronze',64)
for i in range(16):
    t=i*math.tau/16
    t2=(i+1)*math.tau/16
    r=1.34 if i%2==0 else .43
    r2=.43 if i%2==0 else 1.34
    bar('Eight-point civic star outline',(r*math.sin(t),r*math.cos(t),.042),(r2*math.sin(t2),r2*math.cos(t2),.042),.018,'Bronze',.006)
for x in (-1.95,1.95):
    cube('Border inlay', (x,0,.038),(.014,4,.005),'Bronze',0)
    cube('Border inlay', (0,x,.038),(4,.014,.005),'Bronze',0)

asset('SM_FB_Bell', 'Hollow bronze bell with modeled inner wall and clapper')
profile = [(0,.72),(.055,.74),(.14,.65),(.24,.56),(.55,.46),(.94,.38),(1.08,.27),(1.12,.15),(1.07,.11),(.96,.29),(.53,.38),(.2,.48),(.08,.65),(0,.66),(0,.72)]
lathe('Resonance bell body',(0,0,0),profile,'Bronze',48)
for z,r in [(.11,.69),(.22,.574),(.81,.414),(1.02,.33)]:
    ring('Bell raised molding',(0,0,z),r,.023,.03,'GoldEdge',48)
cylinder('Clapper spindle',(0,0,.53),.035,.9,'Obsidian',12)
ico('Clapper',(0,0,.04),(.25,.25,.29),'GoldEdge',2)
ring('Hanging crown',(0,0,1.25),.15,.045,.05,'Bronze',24,'XZ')
for i in range(8):
    t=i*math.tau/8
    ico('Bell star stud',(.49*math.cos(t),.49*math.sin(t),.5),(.06,.06,.12),'GoldEdge')

asset('SM_FB_Lantern', '1.9m paired navigation lantern in bronze cage')
for z,r,d,m in [(.08,.32,.16,'Basalt'),(.2,.25,.12,'Bronze'),(.7,.105,.95,'Bronze'),(1.17,.24,.1,'Bronze'),(1.24,.29,.08,'GoldEdge'),(1.7,.28,.08,'Bronze')]:
    cylinder('Lantern turned pedestal',(0,0,z),r,d,m,12)
ico('Amber flame crystal',(0,0,1.47),(.23,.23,.42),'Amber',2)
for i in range(8):
    a=i*math.tau/8
    bar('Cage upright',(.245*math.cos(a),.245*math.sin(a),1.25),(.245*math.cos(a),.245*math.sin(a),1.69),.022,'Bronze')
cylinder('Lantern roof',(0,0,1.8),.32,.2,'Bronze',12,radius_top=.1)
ico('Finial',(0,0,1.97),(.095,.095,.22),'GoldEdge',1)

asset('SM_FB_Waystone', 'Restored waystone: cyan ring and floating faceted crystal')
for z,r,d,m in [(.12,1.05,.24,'Basalt'),(.3,.86,.12,'Limestone'),(.41,.7,.12,'Bronze')]:
    cylinder('Waystone plinth',(0,0,z),r,d,m,8)
ring('Waystone outer ring',(0,0,1.67),1.06,.15,.24,'Bronze',64,'XZ')
ring('Waystone luminous channel',(0,-.13,1.67),.958,.029,.022,'Aether',64,'XZ')
ring('Waystone face rim',(0,-.15,1.67),1.08,.018,.025,'GoldEdge',64,'XZ')
for i in range(8):
    a=i*math.tau/8
    x,z=1.055*math.sin(a),1.67+1.055*math.cos(a)
    o=cube('Ring keystone',(x,-.06,z),(.16,.32,.24),'Limestone',.018)
    o.rotation_euler[1]=a
ico('Restored crystal',(0,0,1.67),(.46,.38,1.08),'Aether',1)
for z in (.6,.72):
    ring('Crystal hover ring',(0,0,z),.27,.024,.03,'GoldEdge',32)

asset('SM_FB_MercuryCask', 'Explosive ruby vessel in protective brass bands')
lathe('Mercury containment',(0,0,0),[(0,.28),(.1,.34),(.75,.34),(.88,.27),(.91,.17)],'Obsidian',24)
cylinder('Crimson inner reservoir',(0,0,.45),.345,.55,'Crimson',24)
for z in (.1,.22,.67,.8):
    ring('Cask brass hoop',(0,0,z),.37,.055,.07,'Bronze',24)
for i in range(8):
    a=i*math.tau/8
    bar('Vessel stave',(.355*math.cos(a),.355*math.sin(a),.12),(.355*math.cos(a),.355*math.sin(a),.79),.054,'Bronze',.025)
cylinder('Sealed cap',(0,0,.91),.2,.08,'Bronze',12)

# Weapon lies along -Y; origin is palm attachment, true size ~0.55m.
asset('SM_FB_SparkCaster', 'Open bronze resonance instrument; grip origin, muzzle -Y')
bar('Ceramic palm grip',(0,.06,-.085),(0,.09,-.23),.065,'Obsidian',.075)
for z in np.linspace(-.215,-.10,6):
    cylinder('Grip rib',(0,.08,float(z)),.045,.011,'Bronze',12)
ico('Grip heel',(0,.082,-.235),(.105,.085,.065),'Bronze',2)
star('Grip sun medallion',(0,.036,-.224),.028,'GoldEdge','XZ')
bar('Resonator keel',(0,.11,-.036),(0,-.33,-.036),.036,'Bronze',.026)
ico('Faceted aether spindle',(0,-.15,.022),(.069,.39,.082),'Aether',1)
for y,r in [(.075,.065),(-.025,.079),(-.18,.081),(-.30,.072)]:
    ring('Resonator collar',(0,y,.016),r,.012,.019,'Bronze',32,'XZ')
    ring('Fine collar edging',(0,y-.011,.016),r+.003,.004,.004,'GoldEdge',32,'XZ')
    bolts((0,y-.014,.016),r,8,'XZ',.009)
for i in range(6):
    t=i*math.tau/6
    a=(.059*math.cos(t),.08,.016+.059*math.sin(t))
    b=(.076*math.cos(t),-.19,.016+.076*math.sin(t))
    c=(.063*math.cos(t),-.34,.016+.063*math.sin(t))
    bar('Bronze crystal cage',a,b,.01,'Bronze')
    bar('Bronze crystal cage',b,c,.01,'Bronze')
ring('Bell mouth',(0,-.357,.016),.096,.017,.037,'Bronze',32,'XZ')
ring('Muzzle live rim',(0,-.379,.016),.078,.004,.004,'Aether',32,'XZ')
for i in range(8):
    a=i*math.tau/8
    bar('Mouth petal',(.055*math.cos(a),-.30,.016+.055*math.sin(a)),(.098*math.cos(a),-.355,.016+.098*math.sin(a)),.017,'GoldEdge',.01)
ring('Rear cap',(0,.107,.016),.055,.018,.015,'Bronze',24,'XZ')
star('Rear solar medallion',(0,.118,.016),.042,'GoldEdge','XZ')

# Hollow: rigid armor weighted to a real articulated skeleton.
asset('SK_FB_Hollow', '1.85m ash-shell enemy, rigid-weight armor rig and five animation actions')
parts = {}
def bonepart(o,bone):
    parts.setdefault(bone,[]).append(o)
    return o

def plate(name,center,width,height,depth,mat='AshShell',bone='chest',tilt=0):
    # Uneven pentagonal slabs with an angular raised ridge, not scaled boxes.
    w,h,d=width/2,height/2,depth/2
    outline=[(-w*.76,-h*.76),(-w,h*.3),(-w*.45,h),(.48*w,.88*h),(w,.13*h),(.63*w,-.85*h),(0,-h)]
    verts=[(x,d,z) for x,z in outline]+[(x,-d,z) for x,z in outline]+[(0,-d-.035,0)]
    count=len(outline)
    faces=[tuple(range(count-1,-1,-1))]
    for i in range(count):
        j=(i+1)%count
        faces.extend([(i,j,j+count,i+count),(count+i,count+j,count*2)])
    o=mesh(name,verts,faces,mat,.008)
    o.location=center
    o.rotation_euler[1]=tilt
    return bonepart(o,bone)

bonepart(ico('Dark hollow torso',(0,.015,1.13),(.48,.32,.60),'Obsidian',2),'chest')
bonepart(ico('Pelvic core',(0,.035,.83),(.32,.28,.27),'Obsidian',1),'pelvis')
bonepart(ico('Ruby chest heart',(0,-.175,1.27),(.13,.085,.33),'Crimson',1),'chest')
for s in (-1,1):
    plate('Layered breastplate',(s*.139,-.146,1.3),.265,.39,.12,bone='chest',tilt=s*-.22)
    for i in range(3):
        plate('Overlapping rib shell',(s*(.151-i*.015),-.13,1.15-i*.1),.19,.17,.10,bone='chest',tilt=s*.2)
    plate('Hip shell',(s*.105,-.096,.82),.22,.25,.13,bone='pelvis',tilt=s*.2)
    side='L' if s<0 else 'R'
    shoulder=(s*.32,.015,1.42)
    elbow=(s*.44,-.02,1.08)
    wrist=(s*.48,-.09,.72)
    for loc,dim,b in [(shoulder,(.23,.24,.24),'upper_arm'),(elbow,(.135,.15,.15),'forearm'),(wrist,(.10,.11,.11),'hand')]:
        bonepart(ico('Exposed dark joint',loc,dim,'Obsidian',2),b+'.'+side)
    for i in range(3):
        plate('Shoulder shell', (s*(.285+i*.045),-.02,1.48-i*.045), .29,.24,.26,bone='upper_arm.'+side,tilt=s*(.35+i*.12))
    plate('Upper arm slab',(s*.386,-.018,1.24),.19,.32,.19,bone='upper_arm.'+side,tilt=s*.25)
    plate('Forearm shield',(s*.47,-.071,.925),.235,.39,.22,bone='forearm.'+side,tilt=s*.08)
    bonepart(ring('Wrist bronze restraint',(s*.485,-.09,.735),.075,.019,.039,'Bronze',16),'hand.'+side)
    plate('Palm stone',(s*.487,-.11,.644),.17,.20,.095,bone='hand.'+side)
    for f in range(3):
        x=s*.487+(f-1)*.055
        bonepart(bar('Articulated stone finger',(x,-.12,.59),(x,-.155,.50),.035,'AshShell'),'hand.'+side)
        bonepart(bar('Finger curled tip',(x,-.155,.50),(x,-.2,.49),.032,'AshShell'),'hand.'+side)
    bonepart(bar('Opposing thumb',(s*.405,-.12,.66),(s*.37,-.20,.58),.047,'AshShell'),'hand.'+side)
    hip=(s*.125,.02,.84)
    knee=(s*.17,-.09,.46)
    ankle=(s*.18,.02,.13)
    for loc,bone in [(hip,'thigh.'+side),(knee,'shin.'+side)]:
        bonepart(ico('Leg joint',loc,(.16,.18,.17),'Obsidian',2),bone)
    plate('Thigh plate',(s*.146,-.045,.65),.255,.39,.24,bone='thigh.'+side,tilt=s*-.08)
    plate('Angular knee',(s*.17,-.155,.445),.21,.18,.15,bone='shin.'+side)
    plate('Shin shell',(s*.18,-.03,.28),.2,.34,.17,bone='shin.'+side)
    bonepart(ico('Broad stone foot',(s*.185,-.12,.085),(.24,.43,.17),'AshShell',1),'foot.'+side)
    for f in (-1,0,1):
        plate('Toe plate',(s*.185+f*.065,-.26,.075),.075,.09,.13,bone='foot.'+side)
# Forward cowl and narrow visor make a mask, never a skull.
bonepart(ico('Neck',(0,.025,1.53),(.18,.17,.20),'Obsidian',1),'neck')
bonepart(ico('Dark mask interior',(0,-.067,1.67),(.245,.25,.31),'Obsidian',1),'head')
plate('Mask brow',(0,-.175,1.775),.255,.19,.13,bone='head')
plate('Mask chin',(0,-.182,1.608),.20,.24,.1,bone='head')
bonepart(cube('Crimson eye slit',(0,-.239,1.707),(.181,.022,.018),'Crimson',.003),'head')
for s in (-1,1):
    plate('Tall cowl side',(s*.133,-.015,1.67),.125,.39,.21,bone='head',tilt=s*.16)
    plate('Back carapace',(s*.13,.145,1.33),.29,.43,.14,bone='chest',tilt=s*.13)

bpy.ops.object.select_all(action='DESELECT')
arm_data=bpy.data.armatures.new('Firebird_Hollow_Skeleton')
rig=bpy.data.objects.new('Hollow_Rig',arm_data)
CURRENT.objects.link(rig)
rig.parent=PARENT
rig.show_in_front=True
bpy.context.view_layer.objects.active=rig
rig.select_set(True)
bpy.ops.object.mode_set(mode='EDIT')
bone_defs=[('root',(0,0,0),(0,0,.2),None),('pelvis',(0,.025,.8),(0,.025,1.02),'root'),('chest',(0,.025,1.02),(0,0,1.47),'pelvis'),('neck',(0,0,1.47),(0,-.04,1.56),'chest'),('head',(0,-.04,1.56),(0,-.06,1.83),'neck')]
for s,side in [(-1,'L'),(1,'R')]:
    bone_defs.extend([('upper_arm.'+side,(s*.32,.015,1.42),(s*.44,-.02,1.08),'chest'),('forearm.'+side,(s*.44,-.02,1.08),(s*.48,-.09,.72),'upper_arm.'+side),('hand.'+side,(s*.48,-.09,.72),(s*.487,-.12,.5),'forearm.'+side),('thigh.'+side,(s*.125,.02,.84),(s*.17,-.09,.46),'pelvis'),('shin.'+side,(s*.17,-.09,.46),(s*.18,.02,.13),'thigh.'+side),('foot.'+side,(s*.18,.02,.13),(s*.18,-.26,.075),'shin.'+side)])
for name,head,tail,parent in bone_defs:
    b=arm_data.edit_bones.new(name)
    b.head=head; b.tail=tail
    if parent: b.parent=arm_data.edit_bones[parent]
bpy.ops.object.mode_set(mode='OBJECT')
for bone,objects in parts.items():
    for o in objects:
        vg=o.vertex_groups.new(name=bone)
        vg.add(list(range(len(o.data.vertices))),1,'REPLACE')
        mod=o.modifiers.new('Rigid armor skin','ARMATURE')
        mod.object=rig
        o.parent=rig
rig.animation_data_create()
for action_name,length in [('Idle',60),('Walk',32),('Windup',20),('Cracked',36),('Release',30)]:
    action=bpy.data.actions.new('A_FB_Hollow_'+action_name)
    action.use_fake_user=True
    rig.animation_data.action=action
    for frame in range(1,length+1):
        phase=(frame-1)/max(length-1,1)
        for b in rig.pose.bones:
            b.rotation_mode='XYZ'; b.rotation_euler=(0,0,0); b.location=(0,0,0); b.scale=(1,1,1)
        if action_name=='Idle':
            rig.pose.bones['chest'].rotation_euler[0]=.035*math.sin(phase*math.tau)
            rig.pose.bones['head'].rotation_euler[1]=.055*math.sin(phase*math.tau)
        elif action_name=='Walk':
            for s,side in [(-1,'L'),(1,'R')]:
                swing=math.sin(phase*math.tau)*s
                rig.pose.bones['thigh.'+side].rotation_euler[0]=.34*swing
                rig.pose.bones['shin.'+side].rotation_euler[0]=max(0,-swing)*.38
                rig.pose.bones['upper_arm.'+side].rotation_euler[0]=-.19*swing
            rig.pose.bones['root'].location[2]=.015*(1-math.cos(phase*math.tau*2))
        elif action_name=='Windup':
            anticipation=min(phase/.85,1)
            rig.pose.bones['upper_arm.R'].rotation_euler[0]=-1.8*anticipation
            rig.pose.bones['forearm.R'].rotation_euler[0]=-.7*anticipation
            rig.pose.bones['chest'].rotation_euler[1]=-.18*anticipation
        elif action_name=='Cracked':
            rig.pose.bones['chest'].rotation_euler[0]=.27+.025*math.sin(phase*math.tau*4)
            rig.pose.bones['head'].rotation_euler[0]=.22
            for side in ('L','R'): rig.pose.bones['thigh.'+side].rotation_euler[0]=.14
        elif action_name=='Release':
            rig.pose.bones['chest'].rotation_euler[0]=-.22*phase
            rig.pose.bones['upper_arm.L'].rotation_euler[2]=-.45*phase
            rig.pose.bones['upper_arm.R'].rotation_euler[2]=.45*phase
            rig.pose.bones['root'].location[2]=.16*phase
        for b in rig.pose.bones:
            b.keyframe_insert('rotation_euler',frame=frame,group=b.name)
            b.keyframe_insert('location',frame=frame,group=b.name)
    track=rig.animation_data.nla_tracks.new()
    track.name=action.name
    track.strips.new(action.name,1,action)
    track.mute=True
rig.animation_data.action=None
for b in rig.pose.bones:
    b.rotation_euler=(0,0,0); b.location=(0,0,0)
LIB.render.fps=30
LIB.frame_set(1)


# Complete the playable slice: ceiling shell, cornice, hands and co-op armor.
asset('SM_FB_Vault_10m', '10m clear-span stone barrel vault, 4m long, spring pivot')
for j in range(16):
    a0=j*math.pi/16+.003
    a1=(j+1)*math.pi/16-.003
    vs=[]
    for x in (-2,2):
        for radius in (1,1.045):
            for a in (a0,a1):
                vs.append((x,5*radius*math.cos(a),3*radius*math.sin(a)))
    mesh('Vault stone course',vs,[(0,1,3,2),(4,6,7,5),(0,4,5,1),(2,3,7,6),(0,2,6,4),(1,5,7,3)],'Limestone',.008)
for x in (-1.98,1.98):
    for j in range(32):
        a=j*math.pi/32; b=(j+1)*math.pi/32
        bar('Vault bronze rib',(x,4.96*math.cos(a),2.96*math.sin(a)),(x,4.96*math.cos(b),2.96*math.sin(b)),.045,'Bronze')

asset('SM_FB_Cornice_4m', '4m molded limestone cornice with bronze edge')
for z,y,h,d,m in [(0,0,.16,.32,'Limestone'),(.14,-.035,.10,.39,'Bronze'),(.28,-.07,.18,.5,'Limestone'),(.42,-.1,.08,.58,'Limestone')]:
    cube('Cornice molding',(0,y,z),(4,d,h),m,.012)

asset('SM_FB_EmberGauntlet', 'Armored left fist, wrist pivot, fingers toward -Y')
cylinder('Brass wrist cuff',(0,.06,0),.072,.13,'Bronze',12,(math.pi/2,0,0))
cylinder('Dark wrist inset',(0,.08,0),.064,.15,'Obsidian',12,(math.pi/2,0,0))
cube('Backhand armor',(0,-.075,.018),(.15,.18,.10),'Bronze',.025)
star('Gauntlet sun sigil',(0,-.072,.07),.048,'GoldEdge')
ico('Amber hand core',(0,-.075,.079),(.045,.06,.016),'Amber',1)
for i in range(4):
    x=(i-1.5)*.038
    cube('Armored knuckle',(x,-.177,.023),(.035,.06,.055),'GoldEdge',.011)
    cube('Curled finger',(x,-.18,-.026),(.033,.058,.05),'Obsidian',.009)
cube('Thumb armor',(.089,-.08,-.012),(.053,.09,.065),'Bronze',.013,rot=(0,0,-.5))

asset('SM_FB_FirebirdHelmet', 'Faceted Firebird helmet with swept phoenix crest')
ico('Helmet ceramic shell',(0,0,0),(.30,.29,.34),'Obsidian',2)
ico('Bronze forehead',(0,-.095,.088),(.26,.14,.12),'Bronze',1)
cube('Aether visor',(0,-.145,.017),(.225,.035,.041),'Aether',.012)
for s in (-1,1):
    ico('Helmet cheek guard',(s*.117,-.065,-.065),(.095,.15,.19),'Bronze',1)
for i in range(3):
    mesh('Phoenix crown feather',[(-.015,-.04+i*.08,.14),(.015,-.04+i*.08,.14),(.012,.13+i*.07,.34-i*.025),(-.012,.13+i*.07,.34-i*.025),(-.008,.16+i*.05,.12),(.008,.16+i*.05,.12)],[(0,1,2,3),(3,2,5,4),(0,4,5,1),(0,3,4),(1,5,2)],'GoldEdge',.003)

asset('SM_FB_FirebirdTorso', 'Layered bronze flight cuirass, chest-centered pivot')
ico('Dark underarmor',(0,0,0),(.45,.27,.64),'Obsidian',2)
cylinder('Articulated neck',(0,0,.37),.07,.20,'Obsidian',12)
ring('Raised gorget',(0,0,.32),.10,.025,.055,'Bronze',16)
for s in (-1,1):
    ico('Swept breastplate',(s*.115,-.065,.13),(.26,.22,.30),'Bronze',1)
    for i in range(3):
        ico('Waist lamella',(s*.08,-.065,-.065-i*.085),(.2,.16,.14),'Bronze',1)
    ico('Shoulder pauldron',(s*.27,0,.24),(.22,.32,.20),'GoldEdge',1)
star('Chest solar seal',(0,-.175,.14),.09,'GoldEdge','XZ')
ico('Phoenix heart',(0,-.18,.14),(.05,.025,.065),'Aether',1)

asset('SM_FB_FeatherWing', 'Articulated silhouette of five swept bronze phoenix feathers')
for i in range(5):
    x=i*.10
    mesh('Swept metal feather',[(x,0,0),(x+.09,0,0),(x+.16,.10,.50-i*.055),(x+.10,.18,.73-i*.085),(x+.045,.06,.43-i*.045),(x+.05,-.025,.10)],[(0,1,2,3,4),(0,5,1),(1,5,2),(2,5,3),(3,5,4),(4,5,0)],'Bronze',.006)
    bar('Feather luminous edge',(x+.025,0,.08),(x+.10,.16,.64-i*.075),.009,'Amber')

asset('SM_FB_FirebirdLeg', 'Hip-pivot armored leg with articulated knee and plated boot')
ico('Obsidian thigh',(0,0,-.15),(.20,.23,.38),'Obsidian',2)
ico('Bronze thigh plate',(0,-.072,-.14),(.19,.13,.30),'Bronze',1)
cylinder('Knee joint',(0,0,-.34),.087,.16,'Obsidian',12,(0,math.pi/2,0))
ico('Knee shield',(0,-.07,-.34),(.19,.15,.19),'GoldEdge',1)
ico('Greave underarmor',(0,0,-.51),(.16,.19,.34),'Obsidian',2)
for z in (-.43,-.52,-.61):
    ico('Overlapping greave',(0,-.06,z),(.18,.14,.17),'Bronze',1)
cube('Armored boot',(0,-.057,-.69),(.20,.32,.14),'Obsidian',.035)
cube('Bronze toe cap',(0,-.15,-.66),(.20,.15,.08),'Bronze',.022)
bar('Greave gold ridge',(0,-.13,-.40),(0,-.13,-.63),.012,'GoldEdge')

asset('SM_FB_FirebirdArm', 'Shoulder-pivot armored arm with bent forearm')
ico('Upper arm underarmor',(0,0,-.14),(.17,.18,.31),'Obsidian',2)
ico('Upper arm plate',(0,-.05,-.12),(.19,.17,.24),'Bronze',1)
ico('Elbow joint',(0,0,-.29),(.18,.18,.18),'Obsidian',2)
bar('Forearm sleeve',(0,0,-.29),(0,-.23,-.33),.14,'Obsidian')
bar('Forearm bracer',(0,-.035,-.27),(0,-.20,-.31),.16,'Bronze',.12)
for y in (-.07,-.16):
    cube('Bracer band',(0,y,-.31),(.17,.025,.14),'GoldEdge',.006)

asset('SM_FB_RubbleCluster', 'Low perimeter cluster of chipped limestone and basalt')
for i in range(11):
    x=random.uniform(-.65,.65); y=random.uniform(-.26,.26)
    h=random.uniform(.055,.19)
    o=ico('Masonry chip',(x,y,h*.43),(random.uniform(.12,.38),random.uniform(.10,.27),h),'Limestone' if i%3 else 'Basalt',1)
    o.rotation_euler[2]=random.uniform(0,math.tau)

asset('SM_FB_StarPlaque', 'Bronze eight-point civic seal on a dark octagonal plaque')
cylinder('Octagonal backing',(0,0,0),.42,.045,'Obsidian',8,(math.pi/2,0,0))
star('Civic sun seal',(0,-.031,0),.32,'Bronze','XZ')
ring('Seal inner ring',(0,-.055,0),.125,.012,.018,'GoldEdge',32,plane='XZ')
ico('Seal amber center',(0,-.072,0),(.09,.035,.09),'Amber',1)

asset('SM_FB_ResonanceRing', 'One-meter open resonance halo for expanding release effects')
ring('Resonance arc',(0,0,0),.48,.012,.008,'Amber',64)
for i in range(8):
    a=i*math.tau/8
    bar('Resonance tick',(.425*math.cos(a),.425*math.sin(a),0),(.49*math.cos(a),.49*math.sin(a),0),.009,'Amber')

asset('SM_FB_AshShard', 'Angular one-meter ash-shell fragment for scaled runtime debris')
mesh('Broken ash flake',[(-.45,-.3,-.05),(.5,-.2,0),(.3,.45,-.02),(-.35,.3,0),(-.18,-.12,.18),(.23,.1,.13)],[(0,3,2,1),(0,1,4),(1,5,4),(1,2,5),(2,3,5),(3,4,5),(3,0,4)],'AshShell',.012)

asset('SM_FB_LightMote', 'Faceted rising light seed for amber releases and crimson embers')
mesh('Light seed',[(0,0,.5),(0,0,-.5),(.25,0,0),(0,.25,0),(-.25,0,0),(0,-.25,0)],[(0,2,3),(0,3,4),(0,4,5),(0,5,2),(1,3,2),(1,4,3),(1,5,4),(1,2,5)],'Amber')

# Export each asset before gallery placement; textures embedded in GLB, copied for FBX.
manifest={'version':1,'units':'meters','up':'Z','forward':'-Y','generator':'art/source/build_firebird_art.py','materials':{},'assets':[]}
for name,m in MAT.items():
    bs=m.node_tree.nodes.get('Principled BSDF')
    manifest['materials'][m.name]={'base_color':list(m.diffuse_color),'metallic':bs.inputs['Metallic'].default_value,'roughness':bs.inputs['Roughness'].default_value,'emission':bs.inputs['Emission Strength'].default_value}
for name,record in ASSETS.items():
    bpy.ops.object.select_all(action='DESELECT')
    meshes=[o for o in record['collection'].objects if o.type=='MESH']
    for o in record['collection'].objects: o.select_set(True)
    bpy.context.view_layer.objects.active=record['root']
    tri=sum(sum(len(p.vertices)-2 for p in o.data.polygons) for o in meshes)
    bpy.ops.export_scene.fbx(filepath=str(ROOT/'exports'/(name+'.fbx')),use_selection=True,object_types={'EMPTY','MESH','ARMATURE'},axis_forward='-Y',axis_up='Z',apply_unit_scale=True,mesh_smooth_type='FACE',add_leaf_bones=False,bake_anim=name.startswith('SK_'),bake_anim_use_all_actions=True,bake_anim_use_nla_strips=False,path_mode='COPY',embed_textures=True)
    bpy.ops.export_scene.gltf(filepath=str(ROOT/'exports'/(name+'.glb')),export_format='GLB',use_selection=True,export_animations=True,export_animation_mode='ACTIONS',export_nla_strips=True,export_yup=True)
    manifest['assets'].append({'name':name,'description':record['description'],'triangles':tri,'mesh_parts':len(meshes),'fbx':'exports/'+name+'.fbx','glb':'exports/'+name+'.glb'})
    record['root'].asset_mark()
    record['root'].asset_data.description=record['description']
    print('FB_ART_EXPORTED',name,tri,flush=True)
# Export the player after the original kit, so the Hollow's legacy all-action
# export cannot accidentally pick up player clips sharing common bone names.
exec(compile((ROOT/'source'/'build_player_rig.py').read_text(), 'build_player_rig.py', 'exec'))
name='SK_FB_Firebird'; record=ASSETS[name]
bpy.ops.object.select_all(action='DESELECT')
for o in record['collection'].objects: o.select_set(True)
bpy.context.view_layer.objects.active=player_rig
for track in player_rig.animation_data.nla_tracks: track.mute=False
bpy.ops.export_scene.fbx(filepath=str(ROOT/'exports'/(name+'.fbx')),use_selection=True,object_types={'EMPTY','MESH','ARMATURE'},axis_forward='-Y',axis_up='Z',apply_unit_scale=True,mesh_smooth_type='FACE',add_leaf_bones=False,bake_anim=True,bake_anim_use_all_actions=False,bake_anim_use_nla_strips=True,path_mode='COPY',embed_textures=True)
for track in player_rig.animation_data.nla_tracks: track.mute=True
bpy.ops.export_scene.gltf(filepath=str(ROOT/'exports'/(name+'.glb')),export_format='GLB',use_selection=True,export_animations=True,export_animation_mode='ACTIONS',export_anim_single_armature=False,export_nla_strips=True,export_yup=True)
meshes=[o for o in record['collection'].objects if o.type=='MESH']
tri=sum(sum(len(p.vertices)-2 for p in o.data.polygons) for o in meshes)
manifest['assets'].append({'name':name,'description':record['description'],'triangles':tri,'mesh_parts':len(meshes),'fbx':'exports/'+name+'.fbx','glb':'exports/'+name+'.glb','animations':['A_FB_Firebird_'+n for n,_ in player_clips]})
next(a for a in manifest['assets'] if a['name']=='SK_FB_Hollow')['animations']=['A_FB_Hollow_'+n for n in ('Idle','Walk','Windup','Cracked','Release')]
record['root'].asset_mark(); record['root'].asset_data.description=record['description']
(ROOT/'asset-manifest.json').write_text(json.dumps(manifest,indent=2),encoding='utf-8')

# Courtyard built from linked copies of exported geometry, not a painted backdrop.
SHOT=bpy.data.scenes.new('02 - Ashgate courtyard')
bpy.context.window.scene=SHOT
SHOT.unit_settings.system='METRIC'
SHOT.render.engine='CYCLES'
SHOT.cycles.samples=48
SHOT.cycles.use_denoising=True
try:
    prefs=bpy.context.preferences.addons['cycles'].preferences
    prefs.compute_device_type='OPTIX'
    prefs.get_devices()
    devices=[d for d in prefs.devices if d.type=='OPTIX']
    if devices:
        for d in prefs.devices: d.use=d.type=='OPTIX'
        SHOT.cycles.device='GPU'
except Exception as exc:
    print('Cycles CPU fallback:',exc)
SHOT.render.resolution_x=1600
SHOT.render.resolution_y=1100
SHOT.render.resolution_percentage=100
SHOT.world=bpy.data.worlds.new('Ember dusk world')
SHOT.world.use_nodes=True
SHOT.world.node_tree.nodes['Background'].inputs[0].default_value=(.085,.11,.16,1)
SHOT.world.node_tree.nodes['Background'].inputs[1].default_value=.4
SHOT.view_settings.view_transform='AgX'
SHOT.view_settings.look='AgX - Medium High Contrast'
CURRENT=bpy.data.collections.new('Courtyard assembly')
SHOT.collection.children.link(CURRENT)
PARENT=None


def place(name,loc=(0,0,0),angle=0,scale=1):
    root=bpy.data.objects.new(name+'_placed',None)
    CURRENT.objects.link(root)
    root.location=loc
    root.rotation_euler[2]=angle
    root.scale=(scale,scale,scale)
    for original in ASSETS[name]['collection'].objects:
        if original.type!='MESH': continue
        o=original.copy()
        o.data=original.data
        CURRENT.objects.link(o)
        o.parent=root
        o.matrix_parent_inverse.identity()
        for mod in list(o.modifiers):
            if mod.type=='ARMATURE': o.modifiers.remove(mod)
    return root


for x in (-4,0,4):
    for y in (-4,0,4): place('SM_FB_Floor_4m',(x,y,0))
for x in (-5.5,5.5):
    for y in (-3,1,5): place('SM_FB_Column_4m',(x,y,0))
for x in (-4,0,4): place('SM_FB_Arch_4m',(x,5,0))
for x in (-6,6):
    for y in (-3,1): place('SM_FB_Arch_4m',(x,y,0),math.pi/2)
for x in (-4,4): place('SM_FB_Wall_4m',(x,5.35,0))
for x in (-4,0,4): place('SM_FB_Bell',(x,5,2.85),0,.78)
place('SM_FB_Waystone',(0,4.55,.36))
for z,width,y in [(.08,4.0,3.2),(.20,3.4,3.65),(.32,2.8,4.0)]:
    cube('Waystone broad stair',(0,y,z),(width,1.25,.16),'Limestone',.025)
for x,y in [(-4,-3),(4,-3),(-2,3),(2,3)]: place('SM_FB_Lantern',(x,y,.04))
place('SM_FB_MercuryCask',(4.6,2.9,.04))
place('SM_FB_MercuryCask',(4.3,3.65,.04))
place('SK_FB_Hollow',(-1.1,.3,.04),-.22)
place('SK_FB_Hollow',(2.5,1.9,.04),.3)
# Upper bell tower skyline: open bays, octagonal drum and copper ribbed dome.
cube('Tower load-bearing sill',(0,5.0,4.92),(4.1,1.25,.28),'Limestone',.04)
cube('Tower sill bronze seam',(0,4.35,4.95),(4.12,.035,.045),'Bronze',.006)
for x in (-1.88,1.88):
    cube('Tower spring buttress',(x,5.06,4.01),(.38,.78,1.7),'Limestone',.035)
for x in (-1.45,1.45):
    cube('Upper bell pier',(x,5.0,5.8),(.45,.6,2.15),'Limestone',.035)
ring('Upper bell arch',(0,5,6.75),1.45,.32,.48,'Limestone',32,'XZ',0,math.pi)
cylinder('Bell tower cornice',(0,5,8.22),1.84,.27,'Limestone',8)
lathe('Copper tower dome',(0,5,8.3),[(0,1.66),(.30,1.59),(.68,1.38),(1.05,1.04),(1.36,.61),(1.51,.18)],'Bronze',32)
for i in range(12):
    a=i*math.tau/12
    profile=[(8.35,1.68),(8.61,1.60),(8.99,1.4),(9.36,1.06),(9.67,.62),(9.82,.18)]
    for (z,r),(z2,r2) in zip(profile,profile[1:]):
        bar('Raised dome rib',(r*math.cos(a),5+r*math.sin(a),z),(r2*math.cos(a),5+r2*math.sin(a),z2),.045,'GoldEdge')
cylinder('Tower finial',(0,5,10.01),.18,.47,'GoldEdge',8,radius_top=.035)
ico('Tower beacon',(0,5,10.30),(.17,.17,.34),'Amber',1)
# Restrained loose stones at the perimeter; clear combat center.
for i in range(32):
    x=random.choice([-1,1])*random.uniform(5.05,5.7)
    y=random.uniform(-5.5,4.5)
    o=ico('Fallen masonry',(x,y,.11),(random.uniform(.15,.45),random.uniform(.14,.32),random.uniform(.12,.25)),'Limestone',1)
    o.rotation_euler[2]=random.uniform(0,math.tau)
cube('Presentation foundation',(0,0,-.32),(12.6,12.6,.44),'Obsidian',.12)


def area(name,loc,power,color,size,target):
    data=bpy.data.lights.new(name,'AREA')
    data.energy=power; data.color=color; data.shape='DISK'; data.size=size
    o=bpy.data.objects.new(name,data)
    SHOT.collection.objects.link(o)
    o.location=loc
    o.rotation_euler=(Vector(target)-o.location).to_track_quat('-Z','Y').to_euler()
    return o


area('Warm dusk key',(-6,-4,12),2300,(1,.67,.38),8,(0,2,1))
area('Soft blue fill',(5,-2,7),1700,(.43,.67,1),7,(0,1,1))
area('Upper bell rim',(1,8,10),2800,(1,.59,.28),6,(0,1,3))
area('Waystone bounce',(0,4.1,2.0),130,(.05,.7,1),2,(0,0,1))
for x,y in [(-4,-3),(4,-3),(-2,3),(2,3)]:
    d=bpy.data.lights.new('Lantern warm pool','POINT'); d.energy=35; d.color=(1,.33,.065); d.shadow_soft_size=.35
    o=bpy.data.objects.new(d.name,d); SHOT.collection.objects.link(o); o.location=(x,y,1.55)
camdata=bpy.data.cameras.new('Ashgate beauty camera')
cam=bpy.data.objects.new('Ashgate beauty camera',camdata)
SHOT.collection.objects.link(cam)
cam.location=(17,-24,15.5)
cam.rotation_euler=(Vector((0,1.4,4.0))-cam.location).to_track_quat('-Z','Y').to_euler()
camdata.type='PERSP'; camdata.lens=43
SHOT.camera=cam
SHOT.use_nodes=True
nodes=SHOT.node_tree.nodes; links=SHOT.node_tree.links
nodes.clear()
rl=nodes.new('CompositorNodeRLayers')
glare=nodes.new('CompositorNodeGlare'); glare.glare_type='FOG_GLOW'; glare.threshold=1.8; glare.quality='HIGH'
composite=nodes.new('CompositorNodeComposite')
links.new(rl.outputs['Image'],glare.inputs['Image']); links.new(glare.outputs['Image'],composite.inputs['Image'])

# Product presentation scene for the two hero assets.
PRODUCT=bpy.data.scenes.new('03 - Hero asset turntable')
PRODUCT.world=SHOT.world
PRODUCT.render.engine='CYCLES'; PRODUCT.cycles.samples=48; PRODUCT.cycles.use_denoising=True
PRODUCT.cycles.device=SHOT.cycles.device
PRODUCT.render.resolution_x=1400; PRODUCT.render.resolution_y=1400; PRODUCT.render.resolution_percentage=100
PRODUCT.view_settings.view_transform='AgX'
PRODUCT.view_settings.look='AgX - Medium High Contrast'
bpy.context.window.scene=PRODUCT
CURRENT=bpy.data.collections.new('Hero showcase'); PRODUCT.collection.children.link(CURRENT)
PARENT=None
hollow_preview=place('SK_FB_Hollow',(0,0,.13))
cylinder('Hollow display plinth',(0,0,.06),.8,.12,'Obsidian',64)
ring('Display bronze rim',(0,0,.12),.79,.012,.008,'Bronze',64)
weapon_preview=place('SM_FB_SparkCaster',(3,0,.95),0,2.8)
weapon_preview.rotation_euler=(math.radians(-55),math.radians(-20),math.radians(20))
cylinder('Caster display plinth',(3,0,.06),.85,.12,'Obsidian',64)
cube('Studio floor',(0,0,-.06),(200,200,.06),'Obsidian',0)
oldshot=SHOT; SHOT=PRODUCT
area('Hero softbox',(-3,-4,5),650,(1,.81,.59),4,(0,0,1))
area('Hero rim',(2,1.5,4),900,(.38,.64,1),3,(0,0,1))
area('Hero front fill',(1,-4,2),170,(.7,.82,1),3,(0,0,1))
area('Caster softbox',(1,-3,4),550,(1,.82,.6),3,(3,0,1))
area('Caster rim',(5,1,3),650,(.5,.75,1),2,(3,0,1))
SHOT=oldshot
pcdata=bpy.data.cameras.new('Hero asset camera'); pc=bpy.data.objects.new('Hero asset camera',pcdata)
PRODUCT.collection.objects.link(pc)
pc.location=(2.5,-4.8,2.25)
pc.rotation_euler=(Vector((0,0,1.02))-pc.location).to_track_quat('-Z','Y').to_euler()
pcdata.type='ORTHO'; pcdata.ortho_scale=2.5
PRODUCT.camera=pc

# Assembled player provides an editable character reference, not just loose armor.
PLAYER=bpy.data.scenes.new('04 - Firebird player')
PLAYER.world=PRODUCT.world
PLAYER.render.engine='CYCLES'; PLAYER.cycles.samples=48; PLAYER.cycles.use_denoising=True
PLAYER.cycles.device=PRODUCT.cycles.device
PLAYER.render.resolution_x=1400; PLAYER.render.resolution_y=1400; PLAYER.render.resolution_percentage=100
PLAYER.view_settings.view_transform='AgX'; PLAYER.view_settings.look='AgX - Medium High Contrast'
bpy.context.window.scene=PLAYER
CURRENT=bpy.data.collections.new('Assembled Firebird'); PLAYER.collection.children.link(CURRENT); PARENT=None
place('SK_FB_Firebird')
cylinder('Player display plinth',(0,0,-.02),.85,.08,'Obsidian',64)
ring('Player plinth bronze rim',(0,0,.025),.84,.012,.008,'Bronze',64)
cube('Player studio floor',(0,0,-.08),(200,200,.05),'Obsidian',0)
oldshot=SHOT; SHOT=PLAYER
area('Player key',(-3,-4,4),800,(1,.83,.62),4,(0,0,1))
area('Player rim',(2,1,3),1000,(.32,.65,1),3,(0,0,1))
area('Player fill',(2,-3,2),400,(.74,.84,1),3,(0,0,1))
SHOT=oldshot
pdata=bpy.data.cameras.new('Firebird portrait'); pcam=bpy.data.objects.new('Firebird portrait',pdata); PLAYER.collection.objects.link(pcam)
pcam.location=(2.6,-5,2.05); pcam.rotation_euler=(Vector((0,0,.95))-pcam.location).to_track_quat('-Z','Y').to_euler()
pdata.type='ORTHO'; pdata.ortho_scale=2.5; PLAYER.camera=pcam

# Library layout stays editable and grouped; exports retain origin pivots.
for i,(name,record) in enumerate(ASSETS.items()):
    record['root'].location=((i%4)*6,(i//4)*6,0)
for scene in (LIB,SHOT,PRODUCT,PLAYER):
    scene['Art status']='Original playable Unreal art pass. See README.txt for integration and validation.'
for image in bpy.data.images:
    if image.source=='FILE': image.pack()
bpy.context.window.scene=SHOT
for screen in bpy.data.screens:
    for a in screen.areas:
        if a.type=='VIEW_3D':
            a.spaces.active.region_3d.view_perspective='CAMERA'
            a.spaces.active.shading.type='MATERIAL'
bpy.ops.wm.save_as_mainfile(filepath=str(ROOT/'Firebird_ArtKit_v01.blend'))
if '--skip-render' not in sys.argv:
    SHOT.render.filepath=str(ROOT/'renders'/'ashgate-courtyard-v01.png')
    bpy.ops.render.render(write_still=True,scene=SHOT.name)
    PRODUCT.render.filepath=str(ROOT/'renders'/'hollow-v01.png')
    bpy.ops.render.render(write_still=True,scene=PRODUCT.name)
    pc.location=(4.4,-3,2.0)
    pc.rotation_euler=(Vector((3,0,.9))-pc.location).to_track_quat('-Z','Y').to_euler()
    pcdata.ortho_scale=1.95
    PRODUCT.render.filepath=str(ROOT/'renders'/'spark-caster-v01.png')
    bpy.ops.render.render(write_still=True,scene=PRODUCT.name)
    PLAYER.render.filepath=str(ROOT/'renders'/'firebird-player-v01.png')
    bpy.ops.render.render(write_still=True,scene=PLAYER.name)
bpy.context.window.scene=SHOT
bpy.ops.wm.save_as_mainfile(filepath=str(ROOT/'Firebird_ArtKit_v01.blend'))
print('FB_ART_COMPLETE',ROOT,flush=True)
