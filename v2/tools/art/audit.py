"""Round-trip proof from delivered GLBs, never the authoring scene."""
import bpy,math,json,sys
from pathlib import Path
sys.path.insert(0,str(Path(__file__).resolve().parent))
import numpy as np
from mathutils import Vector
import kit as k

def pixels():
    bpy.context.scene.render.filepath=str(k.WORK/'audit.png');bpy.ops.render.render(write_still=True)
    im=bpy.data.images.load(str(k.WORK/'audit.png'),check_existing=False)
    data=np.empty(im.size[0]*im.size[1]*4,np.float32);im.pixels.foreach_get(data)
    result=data.reshape(im.size[1],im.size[0],4);bpy.data.images.remove(im);return result

def stage(objects,dark=False):
    s=bpy.context.scene;s.render.engine='CYCLES';s.cycles.samples=16;s.cycles.use_denoising=True
    s.render.resolution_x=512 if dark else 256;s.render.resolution_y=512 if dark else 256;s.render.resolution_percentage=100
    s.world=bpy.data.worlds.new('Audit world');s.world.use_nodes=True
    s.world.node_tree.nodes['Background'].inputs[0].default_value=(.025,.035,.05,1)
    s.world.node_tree.nodes['Background'].inputs[1].default_value=.20 if dark else .5
    s.view_settings.view_transform='AgX'
    bpy.ops.mesh.primitive_plane_add(size=100,location=(0,0,-.012));floor=bpy.context.object
    m=bpy.data.materials.new('Audit floor');m.diffuse_color=(.025,.035,.05,1);floor.data.materials.append(m)
    for pos,power,color in [((3,-4,6),85 if dark else 600,(.5,.66,1)),((-3,2,4),50 if dark else 750,(1,.30,.07))]:
        bpy.ops.object.light_add(type='AREA',location=pos);o=bpy.context.object;o.data.energy=power;o.data.color=color;o.data.size=4
        o.rotation_euler=(Vector((0,0,1))-o.location).to_track_quat('-Z','Y').to_euler()
    bpy.ops.object.camera_add();cam=bpy.context.object;s.camera=cam
    if dark:
        cam.location=(0,-20,1.6);target=Vector((0,0,1.6));cam.data.type='PERSP';cam.data.lens=36/(2*math.tan(math.radians(75)/2));cam.data.sensor_width=36
    else:
        cam.location=(3,-6,2.8);target=Vector((0,0,1.05));cam.data.type='ORTHO';cam.data.ortho_scale=3.6
    cam.rotation_euler=(target-cam.location).to_track_quat('-Z','Y').to_euler()
    return cam

def mesh_positions(objects):
    deps=bpy.context.evaluated_depsgraph_get();allpoints=[]
    for ob in objects:
        if ob.type!='MESH' or ob.name=='shield':continue
        ev=ob.evaluated_get(deps);mesh=ev.to_mesh()
        allpoints.extend([ev.matrix_world@v.co for v in mesh.vertices]);ev.to_mesh_clear()
    return np.array(allpoints)

def build():
    dest=k.ROOT/'proof';dest.mkdir(exist_ok=True)
    rows=[];distant=[];results=[]
    for name,height in [('imp',1.7),('gnasher',1.4),('ember_knight',2.6),('riley',1.9)]:
        bpy.ops.wm.read_factory_settings(use_empty=True)
        bpy.ops.import_scene.gltf(filepath=str(k.ROOT/'demons'/f'{name}.glb'))
        # Importer creates an Icosphere bone-widget mesh; it is not delivered model geometry.
        objects=[o for o in bpy.context.scene.objects if o.type=='ARMATURE' or o.name in ('body','shield')]
        arm=next(o for o in objects if o.type=='ARMATURE')
        if 'shield' in bpy.data.objects:bpy.data.objects['shield'].hide_render=True
        actions={}
        for track in arm.animation_data.nla_tracks:
            for strip in track.strips:
                for clip in k.ANIMS:
                    if strip.action.name==clip or strip.action.name.startswith(clip+'_'):
                        actions[clip]=(strip.action,strip.action_slot)
            track.mute=True
        if set(actions)!=set(k.ANIMS):raise RuntimeError(f'{name}: imported clip mapping {list(actions)}')
        arm.animation_data.action=None
        for b in arm.pose.bones:b.rotation_quaternion=(1,0,0,0);b.rotation_euler=(0,0,0);b.location=(0,0,0);b.scale=(1,1,1)
        bpy.context.scene.frame_set(0);bpy.context.view_layer.update()
        rest=mesh_positions(objects);h=float(rest[:,2].max()-rest[:,2].min())
        if abs(h-height)>.015:raise RuntimeError(f'{name}: imported height {h} != {height}')
        if abs(float(rest[:,2].min()))>.015:raise RuntimeError(f'{name}: origin is not at feet')
        stage(objects);tiles=[];motion={}
        for clip in k.ANIMS:
            action,slot=actions[clip];arm.animation_data.action=action;arm.animation_data.action_slot=slot
            end=action.frame_range[1];time=end if clip in ('attack_windup','death') else end*.25
            bpy.context.scene.frame_set(int(time));bpy.context.view_layer.update()
            posed=mesh_positions(objects)
            delta=float(np.max(np.linalg.norm(posed-rest,axis=1)));motion[clip]={'sample_frame':int(time),'max_vertex_displacement_m':round(delta,5)}
            if delta<.001:raise RuntimeError(f'{name}/{clip}: no visible skin deformation')
            tiles.append(pixels())
        rows.append(np.concatenate(tiles,axis=1))
        if name=='riley':
            action,slot=actions['idle'];arm.animation_data.action=action;arm.animation_data.action_slot=slot
            bpy.context.scene.frame_set(int(action.frame_range[1]*.25))
            tell=bpy.data.materials['tell'].node_tree.nodes.get('Principled BSDF')
            original=tuple(tell.inputs['Emission Color'].default_value)
            tell.inputs['Emission Color'].default_value=(1,1,1,1)
            k.image('riley_white_tell',np.concatenate([tiles[0],pixels()],axis=1),path=dest/'riley_tell.png')
            tell.inputs['Emission Color'].default_value=original
        # The dark scene uses a real perspective camera, 20m away at 1.6m eye height.
        arm.animation_data.action=None
        for b in arm.pose.bones:b.rotation_quaternion=(1,0,0,0);b.rotation_euler=(0,0,0);b.location=(0,0,0);b.scale=(1,1,1)
        for ob in list(bpy.context.scene.objects):
            if ob not in objects:bpy.data.objects.remove(ob,do_unlink=True)
        bpy.context.scene.frame_set(0);stage(objects,dark=True);distant.append(pixels())
        results.append({'file':f'demons/{name}.glb','height_m':round(h,5),'feet_y_m':round(float(rest[:,2].min()),5),'animations':motion})
    k.image('animation_audit',np.concatenate(list(reversed(rows)),axis=0),path=dest/'animation_poses.png')
    k.image('visibility_audit',np.concatenate(distant,axis=1),path=dest/'visibility_20m.png')
    catalogue=[];names=[]
    for group in ('demons','weapons','props','pickups'):
        for model in sorted((k.ROOT/group).glob('*.glb')):
            im=bpy.data.images.load(str(k.ROOT/'previews'/f'{model.stem}.png'),check_existing=False)
            px=np.empty(512*512*4,np.float32);im.pixels.foreach_get(px)
            catalogue.append(px.reshape(512,512,4)[256:,:256]);names.append(model.stem);bpy.data.images.remove(im)
    while len(catalogue)%8:catalogue.append(np.zeros((256,256,4),np.float32))
    sheet=np.concatenate([np.concatenate(catalogue[j:j+8],axis=1) for j in reversed(range(0,len(catalogue),8))],axis=0)
    k.image('model_catalogue',sheet,path=dest/'model_catalogue.png')
    (dest/'roundtrip.json').write_text(json.dumps({'source':'Re-imported delivered GLBs in Blender 4.5','clip_columns':k.ANIMS,'model_rows':['imp','gnasher','ember_knight','riley'],'model_catalogue_order':names,'visibility':{'distance_m':20,'eye_height_m':1.6,'horizontal_fov_degrees':75,'pixels_per_view':[512,512],'shield_hidden':True},'results':results},indent=2)+'\n')

if __name__=='__main__':build();k.manifest()
