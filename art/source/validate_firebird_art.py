"""Validate the saved source, skinning, GLB payloads and FBX round trip in Blender."""
import bpy
import bmesh
import json
import struct
import math
from pathlib import Path
from mathutils import Vector

ROOT=Path(__file__).resolve().parents[1]
bpy.ops.wm.open_mainfile(filepath=str(ROOT/'Firebird_ArtKit_v01.blend'))
manifest=json.loads((ROOT/'asset-manifest.json').read_text())
report={'assets':[],'errors':[]}

def require(condition,message):
    if not condition: report['errors'].append(message)

bpy.context.window.scene=bpy.data.scenes['01 - Editable asset library']
bpy.data.objects['Hollow_Rig'].data.pose_position='REST'
bpy.data.objects['Firebird_Rig'].data.pose_position='REST'
bpy.context.scene.frame_set(1)
for asset in manifest['assets']:
    name=asset['name']
    collection=bpy.data.collections[name]
    meshes=[o for o in collection.objects if o.type=='MESH']
    root=bpy.data.objects[name+'_ROOT']
    bpy.context.view_layer.update()
    deps=bpy.context.evaluated_depsgraph_get()
    root_eval=root.evaluated_get(deps)
    evaluated=[o.evaluated_get(deps) for o in meshes]
    points=[root_eval.matrix_world.inverted()@o.matrix_world@Vector(v) for o in evaluated for v in o.bound_box]
    dims=[max(p[i] for p in points)-min(p[i] for p in points) for i in range(3)]
    for o in meshes:
        require(bool(o.data.uv_layers),name+': missing UV '+o.name)
        require(all(math.isfinite(x) for v in o.data.vertices for x in v.co),name+': invalid vertices')
        require(bool(o.data.materials),name+': missing material '+o.name)
        require(all(p.area>1e-12 for p in o.data.polygons),name+': zero area polygon '+o.name)
        bm=bmesh.new()
        bm.from_mesh(o.data)
        if all(edge.is_manifold for edge in bm.edges):
            require(bm.calc_volume(signed=True)>0,name+': inward-facing closed mesh '+o.name)
        bm.free()
    data=(ROOT/asset['glb']).read_bytes()
    magic,version,length=struct.unpack_from('<III',data)
    require(magic==0x46546C67 and version==2 and length==len(data),name+': invalid GLB header')
    chunk_len,chunk_type=struct.unpack_from('<II',data,12)
    gltf=json.loads(data[20:20+chunk_len])
    require(bool(gltf.get('meshes')),name+': empty GLB')
    require(all('bufferView' in i for i in gltf.get('images',[])),name+': external GLB image')
    entry={'name':name,'dimensions_m':[round(d,4) for d in dims],'triangles':asset['triangles'],'uv_checked':True,'glb_embedded_images':len(gltf.get('images',[])),'glb_animations':[a.get('name') for a in gltf.get('animations',[])]}
    report['assets'].append(entry)
    if name.startswith('SK_'):
        require(1.7<dims[2]<2,name+': incorrect height')
        expected=asset['animations']
        require(sorted(entry['glb_animations'])==sorted(expected),name+': incorrect GLB animation clips')
        require(bool(gltf.get('skins')),name+': GLB missing skeleton')
        for o in meshes:
            require(all(abs(sum(g.weight for g in v.groups)-1)<1e-5 for v in o.data.vertices),name+': unweighted vertices '+o.name)
rig=bpy.data.objects['Hollow_Rig']
rig.data.pose_position='POSE'
scene=bpy.context.scene
for track in rig.animation_data.nla_tracks: track.mute=True
action=bpy.data.actions['A_FB_Hollow_Windup']
rig.animation_data.action=action
scene.frame_set(1); bpy.context.view_layer.update()
before=rig.pose.bones['hand.R'].matrix.translation.copy()
scene.frame_set(18); bpy.context.view_layer.update()
after=rig.pose.bones['hand.R'].matrix.translation.copy()
report['windup_hand_travel_m']=(after-before).length
require(report['windup_hand_travel_m']>.2,'Windup animation does not move the right hand')

rig=bpy.data.objects['Firebird_Rig']; rig.data.pose_position='POSE'
for track in rig.animation_data.nla_tracks: track.mute=True
report['player_animation_checks']={}
for clip,bone,start,end,minimum in [('Run','foot.L',1,7,.12),('Punch','hand.L',1,7,.20),('Fire','hand.R',1,3,.01)]:
    rig.animation_data.action=bpy.data.actions['A_FB_Firebird_'+clip]
    scene.frame_set(start); bpy.context.view_layer.update(); before=rig.pose.bones[bone].matrix.translation.copy()
    scene.frame_set(end); bpy.context.view_layer.update(); after=rig.pose.bones[bone].matrix.translation.copy()
    distance=(after-before).length
    report['player_animation_checks'][clip+'_travel_m']=distance
    require(distance>minimum,'Player '+clip+' has insufficient articulation')
# Loop seams must match exactly, otherwise they visibly pop every stride.
for clip in ('Idle','Run','Back','StrafeL','StrafeR','Crouch'):
    action=bpy.data.actions['A_FB_Firebird_'+clip]; rig.animation_data.action=action
    scene.frame_set(int(action.frame_range[0])); bpy.context.view_layer.update()
    first={b.name:b.matrix.copy() for b in rig.pose.bones}
    scene.frame_set(int(action.frame_range[1])); bpy.context.view_layer.update()
    error=max(abs(b.matrix[r][c]-first[b.name][r][c]) for b in rig.pose.bones for r in range(4) for c in range(4))
    require(error<1e-5,'Player '+clip+' loop seam mismatch')
rig.animation_data.action=bpy.data.actions['A_FB_Firebird_Crouch']
scene.frame_set(1); bpy.context.view_layer.update()
report['player_crouch_head_height_m']=rig.pose.bones['head'].matrix.translation.z
require(report['player_crouch_head_height_m']<1.25,'Crouch head must fit below the course gate')
require(abs(rig.pose.bones['root'].matrix.translation.z+.5)<.001,'Crouch root translation must be vertical')
heights=[]
for frame in (1,9,17,25,33):
    scene.frame_set(frame); bpy.context.view_layer.update()
    deps=bpy.context.evaluated_depsgraph_get()
    pivot=bpy.data.objects['SK_FB_Firebird_ROOT'].matrix_world.inverted()
    for obj in bpy.data.collections['SK_FB_Firebird'].objects:
        if obj.type!='MESH': continue
        evaluated=obj.evaluated_get(deps)
        heights.extend((pivot@evaluated.matrix_world@v.co).z for v in evaluated.data.vertices)
report['player_crouch_bounds_z_m']=[min(heights),max(heights)]
# CharacterMovement maintains a 1.9--2.4cm floor gap (UE's MIN_FLOOR_DIST /
# MAX_FLOOR_DIST). Test both extremes in world space, including the crest.
report['player_crouch_world_bounds_z_m']=[min(heights)+.019,max(heights)+.024]
require(min(heights)+.019>0,'Crouch weapon or armor penetrates the floor')
require(max(heights)+.024<1.1,'Full crouch silhouette must clear the 110cm gate')

# Reimport the real exchange files into a fresh scene to catch unit/axis mistakes.
for name in ('SM_FB_SparkCaster','SM_FB_Arch_4m','SK_FB_Hollow','SK_FB_Firebird'):
    bpy.ops.wm.read_factory_settings(use_empty=True)
    bpy.ops.import_scene.fbx(filepath=str(ROOT/'exports'/(name+'.fbx')))
    scene=bpy.context.scene
    for o in scene.objects:
        if o.type=='ARMATURE' and o.animation_data:
            o.data.pose_position='REST'
            o.animation_data.action=None
            for b in o.pose.bones: b.rotation_euler=(0,0,0); b.rotation_quaternion=(1,0,0,0); b.location=(0,0,0); b.scale=(1,1,1)
    scene.frame_set(1); bpy.context.view_layer.update()
    deps=bpy.context.evaluated_depsgraph_get()
    evaluated=[o.evaluated_get(deps) for o in scene.objects if o.type=='MESH']
    points=[o.matrix_world@Vector(v) for o in evaluated for v in o.bound_box]
    dims=sorted(max(p[i] for p in points)-min(p[i] for p in points) for i in range(3))
    source=next(a for a in report['assets'] if a['name']==name)
    expected=sorted(source['dimensions_m'])
    require(all(abs(a-b)<.005 for a,b in zip(dims,expected)),name+': FBX roundtrip dimensions changed '+str(dims))
    source['fbx_roundtrip_dimensions_m']=[round(d,4) for d in dims]
    if name.startswith('SK_'):
        bone_actions=[a for a in bpy.data.actions if any(c.data_path.startswith('pose.bones[') for c in a.fcurves)]
        source['fbx_roundtrip_actions']=len(bone_actions)
        expected=next(a['animations'] for a in manifest['assets'] if a['name']==name)
        require(len(bone_actions)==len(expected),name+': incorrect FBX skeletal clip count')
report['passed']=not report['errors']
(ROOT/'validation.json').write_text(json.dumps(report,indent=2),encoding='utf-8')
print('FB_ART_VALIDATION',json.dumps(report),flush=True)
if report['errors']: raise RuntimeError('Art validation failed: '+str(report['errors']))
