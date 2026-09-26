"""Shared modeling, UV, embedded PBR, skinning, export and turntable tools.
Author in Blender Z up / -Y forward. The glTF exporter maps this to Y up / +Z.
All geometry and texture pixels are authored here; no external art inputs.
"""
import bpy, math, json, struct
import numpy as np
from pathlib import Path
from mathutils import Vector

ROOT = Path(__file__).resolve().parents[2] / 'assets'
WORK = Path(__file__).resolve().parent / '.work'
ROOT.mkdir(exist_ok=True, parents=True)
WORK.mkdir(exist_ok=True)
ANIMS = ['idle','walk','attack_windup','attack','pain','death']
PARTS=[]
M={}

def image(name, rgb, path=None, noncolor=False):
    h,w=rgb.shape[:2]
    im=bpy.data.images.new(name,width=w,height=h,alpha=True)
    if noncolor: im.colorspace_settings.name='Non-Color'
    a=np.ones((h,w,4),dtype=np.float32); a[:,:,:rgb.shape[2]]=rgb
    im.pixels.foreach_set(a.ravel()); im.file_format='PNG'
    im.filepath_raw=str(path or WORK/(name+'.png')); im.save(); im.pack()
    return im

def materials():
    # Shared 128px swatches keep each GLB small; authored periodic grain and scratches.
    y,x=np.mgrid[0:128,0:128]/128
    grain=.94+.035*np.sin(x*math.tau*29)*np.sin(y*math.tau*23)+.025*np.cos((x+y)*math.tau*13)
    scratch=np.maximum(0,np.cos((x*31+y*2)*math.tau))**28
    base=image('forge_grain',np.repeat((grain-.1*scratch)[:,:,None],3,2))
    normal=np.stack((.5+.035*np.sin(x*math.tau*29),.5+.035*np.sin(y*math.tau*23),np.full_like(x,.998)),2)
    norm=image('forge_normal',normal,noncolor=True)
    orm=image('forge_roughness',np.stack((np.ones_like(x),.65+.15*grain,np.ones_like(x)),2),noncolor=True)
    emi=image('forge_emission',np.repeat((.85+.15*np.cos(y*math.tau*16))[:,:,None],3,2))
    palette={
      'skin':((.30,.065,.028),.08,.82), 'char':((.045,.027,.025),.08,.85),
      'bone':((.72,.49,.23),.15,.48), 'iron':((.07,.105,.13),.8,.62),
      'edge':((.28,.35,.39),.85,.42), 'brass':((.48,.24,.055),.75,.48),
      'black':((.008,.014,.021),.25,.75), 'cloth':((.075,.11,.10),0,.9),
      'leather':((.075,.037,.02),0,.8), 'wood':((.25,.105,.038),0,.9),
      'white':((.7,.76,.68),.1,.5), 'red':((.52,.022,.012),.2,.65),
      'blue':((.015,.13,.48),.3,.48), 'green':((.028,.32,.08),.2,.6),
      'ember':((1,.115,.008),.2,.4), 'cyan':((.01,.55,.85),.35,.35),
      'gold':((1,.55,.035),.3,.3), 'tell':((.015,.65,1),.1,.25),
      'holo':((.015,.35,.6),.2,.32), 'shield':((.8,.38,.025),.15,.25),
    }
    for name,(c,metal,rough) in palette.items():
        mat=bpy.data.materials.new(name); mat.use_nodes=True
        n=mat.node_tree.nodes; l=mat.node_tree.links; p=n.get('Principled BSDF')
        p.inputs['Base Color'].default_value=(*c,1)
        # Multiplication by a constant exports as baseColorFactor via glTF's supported Mix node.
        t=n.new('ShaderNodeTexImage'); t.image=base
        mix=n.new('ShaderNodeMixRGB'); mix.blend_type='MULTIPLY'; mix.inputs[0].default_value=1
        mix.inputs[2].default_value=(*c,1); l.new(t.outputs['Color'],mix.inputs[1]); l.new(mix.outputs[0],p.inputs['Base Color'])
        p.inputs['Metallic'].default_value=metal
        t=n.new('ShaderNodeTexImage'); t.image=orm
        sep=n.new('ShaderNodeSeparateColor'); l.new(t.outputs['Color'],sep.inputs[0]); l.new(sep.outputs['Green'],p.inputs['Roughness'])
        p.inputs['Roughness'].default_value=rough
        t=n.new('ShaderNodeTexImage'); t.image=norm
        normalnode=n.new('ShaderNodeNormalMap'); l.new(t.outputs['Color'],normalnode.inputs['Color']); l.new(normalnode.outputs[0],p.inputs['Normal'])
        if name in ('ember','cyan','gold','tell','holo','shield','green'):
            p.inputs['Emission Color'].default_value=(*c,1); p.inputs['Emission Strength'].default_value=2 if name not in ('holo','shield') else .5
            t=n.new('ShaderNodeTexImage'); t.image=emi
            mix=n.new('ShaderNodeMixRGB'); mix.blend_type='MULTIPLY'; mix.inputs[0].default_value=1; mix.inputs[2].default_value=(*c,1)
            l.new(t.outputs[0],mix.inputs[1]); l.new(mix.outputs[0],p.inputs['Emission Color'])
        if name in ('holo','shield'):
            p.inputs['Alpha'].default_value=.68 if name=='holo' else .12
            mat.surface_render_method='DITHERED'; mat.use_transparency_overlap=False
        M[name]=mat

def reset():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    PARTS.clear(); M.clear()
    s=bpy.context.scene; s.unit_settings.system='METRIC'; s.render.fps=24
    materials()

def finish(o,name,mat,bone=None,bevel=0):
    o.name=name; o.data.materials.append(M[mat] if isinstance(mat,str) else mat)
    bpy.context.view_layer.objects.active=o
    bpy.ops.object.transform_apply(location=False,rotation=False,scale=True)
    if bevel:
        b=o.modifiers.new('Forged chamfer','BEVEL'); b.width=bevel; b.segments=2
        bpy.ops.object.modifier_apply(modifier=b.name)
    if bone:
        g=o.vertex_groups.new(name=bone); g.add(list(range(len(o.data.vertices))),1,'REPLACE')
    PARTS.append(o)
    return o

def box(name,p,size,mat='iron',bone=None,bevel=.018):
    bpy.ops.mesh.primitive_cube_add(size=1,location=p); o=bpy.context.object; o.dimensions=size
    return finish(o,name,mat,bone,min(bevel,min(size)*.2))

def ell(name,p,size,mat='skin',bone=None,seg=14,rings=8):
    bpy.ops.mesh.primitive_uv_sphere_add(segments=seg,ring_count=rings,radius=1,location=p)
    o=bpy.context.object; o.scale=size
    for f in o.data.polygons:f.use_smooth=True
    return finish(o,name,mat,bone)

def rod(name,a,b,r,mat='iron',bone=None,r2=None,n=12):
    d=Vector(b)-Vector(a)
    bpy.ops.mesh.primitive_cone_add(vertices=n,radius1=r,radius2=r if r2 is None else r2,depth=d.length,location=(Vector(a)+Vector(b))/2)
    o=bpy.context.object; o.rotation_euler=d.to_track_quat('Z','Y').to_euler()
    for f in o.data.polygons:f.use_smooth=len(f.vertices)==4
    return finish(o,name,mat,bone)

def horn(name,points,radii,mat='bone',bone='head',n=10):
    # Curved tapered sweep, triangulated caps; pointed terminal ring avoids zero-area faces.
    vs=[]; fs=[]
    for i,(p,r) in enumerate(zip(points,radii)):
        tangent=Vector(points[min(i+1,len(points)-1)])-Vector(points[max(i-1,0)])
        q=tangent.to_track_quat('Z','Y')
        for j in range(n):vs.append(Vector(p)+q@Vector((r*math.cos(j*math.tau/n),r*math.sin(j*math.tau/n),0)))
    for i in range(len(points)-1):
        for j in range(n):
            a=i*n+j;b=i*n+(j+1)%n;fs.append((a,b,b+n,a+n))
    fs += [tuple(reversed(range(n))),tuple(range((len(points)-1)*n,len(points)*n))]
    mesh=bpy.data.meshes.new(name); mesh.from_pydata(vs,[],fs); mesh.update()
    o=bpy.data.objects.new(name,mesh); bpy.context.collection.objects.link(o)
    return finish(o,name,mat,bone)

def ring(name,p,r,t,mat='iron',bone=None,rot=(0,0,0),seg=24):
    bpy.ops.mesh.primitive_torus_add(major_segments=seg,minor_segments=6,location=p,major_radius=r,minor_radius=t,rotation=rot)
    return finish(bpy.context.object,name,mat,bone)

def merge(parts,name,pivot=(0,0,0)):
    bpy.ops.object.select_all(action='DESELECT')
    for o in parts:o.select_set(True)
    bpy.context.view_layer.objects.active=parts[0]; bpy.ops.object.join(); o=bpy.context.object; o.name=name
    bpy.context.scene.cursor.location=pivot; bpy.ops.object.origin_set(type='ORIGIN_CURSOR')
    bpy.ops.object.transform_apply(location=False,rotation=True,scale=True)
    return o

def prepare(objects):
    for o in objects:
        if o.type!='MESH':continue
        bpy.ops.object.select_all(action='DESELECT'); o.select_set(True); bpy.context.view_layer.objects.active=o
        bpy.ops.object.transform_apply(location=False,rotation=True,scale=True)
        bpy.ops.object.mode_set(mode='EDIT'); bpy.ops.mesh.select_all(action='SELECT')
        bpy.ops.uv.smart_project(angle_limit=1.1,island_margin=.015)
        bpy.ops.object.mode_set(mode='OBJECT')
        mod=o.modifiers.new('Explicit triangles','TRIANGULATE'); bpy.ops.object.modifier_apply(modifier=mod.name)

def rig(bones):
    bpy.ops.object.armature_add(location=(0,0,0)); arm=bpy.context.object;arm.name='rig'
    bpy.ops.object.mode_set(mode='EDIT'); arm.data.edit_bones.remove(arm.data.edit_bones[0])
    for name,(head,tail,parent) in bones.items():
        b=arm.data.edit_bones.new(name); b.head=head;b.tail=tail
        if parent:b.parent=arm.data.edit_bones[parent]
    bpy.ops.object.mode_set(mode='OBJECT')
    return arm

def animate(arm,kind):
    for name in ANIMS:
        arm.animation_data_create(); action=bpy.data.actions.new(name); arm.animation_data.action=action
        duration={'idle':48,'walk':24,'attack_windup':18,'attack':12,'pain':10,'death':30}[name]
        for frame in sorted(set([0,duration//4,duration//2,duration*3//4,duration])):
            t=frame/duration; wave=math.sin(t*math.tau)
            for b in arm.pose.bones:b.rotation_mode='XYZ'; b.rotation_euler=(0,0,0);b.location=(0,0,0)
            def rot(b,x=0,y=0,z=0):
                if b in arm.pose.bones:arm.pose.bones[b].rotation_euler=(x,y,z)
            root=arm.pose.bones['root']
            if name=='idle':
                root.location.y=.015*math.sin(t*math.tau);rot('head',.025*wave);rot('jaw',.04*(1+wave))
            elif name=='walk':
                root.location.y=.025*(1-math.cos(t*math.tau*2))
                rot('leg.L',.55*wave);rot('leg.R',-.55*wave);rot('arm.L',-.35*wave);rot('arm.R',.35*wave);rot('jaw',.07*(1+wave))
            elif name=='attack_windup':
                rot('spine',-.17*t);rot('head',-.16*t)
                rot('arm.R',-1.7*t,z=-.25*t);rot('arm.L',-.8*t,z=.2*t);rot('jaw',.5*t)
                if kind=='gnasher':root.location.y=-.16*t;rot('spine',.22*t)
            elif name=='attack':
                k=max(0,1-t*2);rot('arm.R',-1.7*k-1.15*math.sin(t*math.pi));rot('arm.L',-.8*k);rot('spine',.2*math.sin(t*math.pi));rot('jaw',.5*k)
                if kind=='gnasher':root.location.z=-.22*math.sin(t*math.pi)
            elif name=='pain':rot('spine',-.25*math.sin(t*math.pi));rot('head',-.3*math.sin(t*math.pi));rot('arm.L',z=.2*math.sin(t*math.pi))
            else:
                q=min(1,t*1.5);root.rotation_euler.x=-math.pi*.46*q;root.location.y=-.38*q;rot('arm.L',z=.4*q);rot('arm.R',z=-.4*q);rot('leg.L',.5*q)
            for b in arm.pose.bones:
                b.keyframe_insert('rotation_euler',frame=frame,group=b.name);b.keyframe_insert('location',frame=frame,group=b.name)
        track=arm.animation_data.nla_tracks.new();track.name=name;track.strips.new(name,0,action);track.mute=True
        arm.animation_data.action=None
    for b in arm.pose.bones:b.rotation_euler=(0,0,0);b.location=(0,0,0)
    bpy.context.scene.frame_set(0)

def bounds(objects):
    pts=[o.matrix_world@Vector(v) for o in objects if o.type=='MESH' for v in o.bound_box]
    return np.min(pts,axis=0),np.max(pts,axis=0)

def preview(name,objects):
    s=bpy.context.scene
    s.render.engine='CYCLES';s.cycles.samples=12;s.cycles.use_denoising=True
    s.render.resolution_x=256;s.render.resolution_y=256;s.render.resolution_percentage=100
    s.world=bpy.data.worlds.new('Preview world');s.world.use_nodes=True
    s.world.node_tree.nodes['Background'].inputs[0].default_value=(.045,.065,.09,1)
    s.world.node_tree.nodes['Background'].inputs[1].default_value=.35
    s.view_settings.view_transform='AgX'
    lo,hi=bounds(objects);target=Vector((lo+hi)/2);size=max(hi-lo)
    # Matte floor, three broad studio lights; camera circles the authored asset.
    bpy.ops.mesh.primitive_plane_add(size=size*200,location=(0,0,float(lo[2])-.012))
    floor=bpy.context.object;floor.name='preview_floor';floor.data.materials.append(M['black'])
    for pos,power,color in [((3,-4,5),450,(1,.72,.48)),((-3,-1,3),330,(.38,.65,1)),((1,3,4),600,(1,.28,.07))]:
        bpy.ops.object.light_add(type='AREA',location=target+Vector(pos)*size*.65)
        light=bpy.context.object;light.data.energy=power*size*size;light.data.color=color;light.data.shape='DISK';light.data.size=size*2
        light.rotation_euler=(target-light.location).to_track_quat('-Z','Y').to_euler()
    bpy.ops.object.camera_add();cam=bpy.context.object;cam.data.type='ORTHO';cam.data.ortho_scale=size*1.36;s.camera=cam
    tiles=[]
    for i,angle in enumerate((20,110,200,290)):
        a=math.radians(angle);cam.location=target+Vector((math.sin(a)*size*3,-math.cos(a)*size*3,size*.85))
        cam.rotation_euler=(target-cam.location).to_track_quat('-Z','Y').to_euler()
        s.render.filepath=str(WORK/'frame.png');bpy.ops.render.render(write_still=True)
        im=bpy.data.images.load(str(WORK/'frame.png'),check_existing=False)
        px=np.empty(256*256*4,dtype=np.float32);im.pixels.foreach_get(px);tiles.append(px.reshape(256,256,4));bpy.data.images.remove(im)
    # In image coordinates top row is front/side; bottom is rear/opposite side.
    sheet=np.concatenate((np.concatenate(tiles[2:],axis=1),np.concatenate(tiles[:2],axis=1)),axis=0)
    dest=ROOT/'previews'/f'{name}.png';dest.parent.mkdir(exist_ok=True)
    image(name+'_turntable',sheet,path=dest)

def export(name,group,objects,notes='',budget=(200,2000)):
    prepare(objects);bpy.context.view_layer.update()
    lo,hi=bounds(objects)
    tri=sum(len(o.data.polygons) for o in objects if o.type=='MESH')
    if not budget[0]<=tri<=budget[1]:raise RuntimeError(f'{name}: {tri} triangles outside {budget}')
    bpy.ops.object.select_all(action='DESELECT')
    for o in objects:o.select_set(True)
    bpy.context.view_layer.objects.active=objects[0]
    dest=ROOT/group/f'{name}.glb';dest.parent.mkdir(exist_ok=True)
    bpy.ops.export_scene.gltf(filepath=str(dest),export_format='GLB',use_selection=True,
        export_yup=True,export_apply=False,export_tangents=True,export_animations=True,export_animation_mode='ACTIONS',
        export_anim_single_armature=True,export_force_sampling=True,export_frame_step=2,
        export_anim_slide_to_zero=True,export_materials='EXPORT',export_extras=True)
    meta={'file':str(dest.relative_to(ROOT)).replace('\\','/'),'type':group,'size_m':[round(float(hi[0]-lo[0]),4),round(float(hi[2]-lo[2]),4),round(float(hi[1]-lo[1]),4)],'triangles':tri,'budget':list(budget),'notes':notes}
    (dest.with_suffix('.meta.json')).write_text(json.dumps(meta,indent=2)+'\n')
    preview(name,objects)
    print(f'ASSET {name}: {tri} triangles, {dest.stat().st_size} bytes',flush=True)

def manifest():
    entries=[]
    for p in sorted(ROOT.rglob('*')):
        if not p.is_file() or p.name in ('assets.json',):continue
        rel=p.relative_to(ROOT).as_posix();e={'file':rel,'type':p.suffix[1:],'bytes':p.stat().st_size,'size_m':None,'triangles':0,'animations':[],'nodes':[]}
        if p.suffix=='.glb':
            data=p.read_bytes();length=struct.unpack_from('<I',data,12)[0];g=json.loads(data[20:20+length])
            e.update(json.loads(p.with_suffix('.meta.json').read_text()));e['animations']=[a['name'] for a in g.get('animations',[])];e['nodes']=[n.get('name','') for n in g.get('nodes',[])]
            e['materials']=[m.get('name','') for m in g.get('materials',[])];e['preview']='previews/'+p.stem+'.png'
            e['texture_sizes']=[[128,128]] # validator replaces with parsed embedded PNG dimensions
        elif p.suffix=='.png':
            raw=p.read_bytes();e['pixels']=list(struct.unpack_from('>II',raw,16))
            e['type']='preview' if p.parent.name=='previews' else 'texture'
            if p.parent.name=='surfaces':e['size_m']=[2,2,0]
        entries.append(e)
    (ROOT/'assets.json').write_text(json.dumps({'schema':1,'units':'metres','up':'+Y','forward':'+Z','files':entries},indent=2)+'\n')
