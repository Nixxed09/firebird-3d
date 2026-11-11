"""Import the original Blender kit into its own Unreal content folder.

Run through ue-import-art-kit.ps1. Does not replace gameplay actors or maps.
API reference: https://dev.epicgames.com/documentation/en-us/unreal-engine/python-api/class/FbxImportUI
"""
import json
import re
from pathlib import Path
import unreal

ROOT=Path(__file__).resolve().parents[1]
ART=ROOT/'art'
DEST='/Game/Firebird/ArtKitV01'
manifest=json.loads((ART/'asset-manifest.json').read_text(encoding='utf-8'))
asset_tools=unreal.AssetToolsHelpers.get_asset_tools()
mesh_tools=unreal.get_editor_subsystem(unreal.StaticMeshEditorSubsystem)
eal=unreal.EditorAssetLibrary
mel=unreal.MaterialEditingLibrary
report={'destination':DEST,'meshes':[],'materials':[],'textures':[],'errors':[]}
selection=re.search(r'(?:^|\s)-FBArtMesh=(\w+)',unreal.SystemLibrary.get_command_line())
only_mesh=selection.group(1) if selection else None
if only_mesh:
    if only_mesh not in [a['name'] for a in manifest['assets']]: raise ValueError('Unknown art mesh '+only_mesh)
    report=json.loads((ART/'unreal-import-report.json').read_text())
    report['meshes']=[m for m in report['meshes'] if m['name']!=only_mesh]
    report['errors']=[]
    report.pop('fresh_process_reload_passed',None)
    report.pop('reload_errors',None)



def import_task(file,dest,options=None):
    t=unreal.AssetImportTask()
    t.set_editor_property('filename',str(file))
    t.set_editor_property('destination_path',dest)
    t.set_editor_property('destination_name',file.stem)
    t.set_editor_property('automated',True)
    t.set_editor_property('replace_existing',True)
    t.set_editor_property('save',True)
    if options: t.set_editor_property('options',options)
    return t


if not only_mesh:
    tex_tasks=[import_task(p,DEST+'/Textures') for p in sorted((ART/'textures').glob('*.png'))]
    asset_tools.import_asset_tasks(tex_tasks)
    for task in tex_tasks:
        for path in task.get_editor_property('imported_object_paths'):
            tex=eal.load_asset(path)
            if not isinstance(tex,unreal.Texture2D): continue
            name=tex.get_name()
            if name.endswith('_Normal'):
                tex.set_editor_property('srgb',False)
                tex.set_editor_property('compression_settings',unreal.TextureCompressionSettings.TC_NORMALMAP)
                tex.set_editor_property('flip_green_channel',True)
            elif name.endswith('_Roughness'):
                tex.set_editor_property('srgb',False)
                tex.set_editor_property('compression_settings',unreal.TextureCompressionSettings.TC_GRAYSCALE)
            eal.save_loaded_asset(tex)
            report['textures'].append(path)

    materials={}
    for name,settings in manifest['materials'].items():
        path=DEST+'/Materials/'+name
        mat=eal.load_asset(path) if eal.does_asset_exist(path) else asset_tools.create_asset(name,DEST+'/Materials',unreal.Material,unreal.MaterialFactoryNew())
        mel.delete_all_material_expressions(mat)
        mat.set_editor_property('used_with_skeletal_mesh',True)
        mat.set_editor_property('used_with_instanced_static_meshes',True)
        short=name.removeprefix('M_FB_')
        for suffix,prop in [('BaseColor',unreal.MaterialProperty.MP_BASE_COLOR),('Roughness',unreal.MaterialProperty.MP_ROUGHNESS),('Normal',unreal.MaterialProperty.MP_NORMAL)]:
            tpath=DEST+'/Textures/'+short+'_'+suffix
            if eal.does_asset_exist(tpath):
                node=mel.create_material_expression(mat,unreal.MaterialExpressionTextureSample,-500,len(mat.get_name())*10)
                node.set_editor_property('texture',eal.load_asset(tpath))
                if suffix=='Normal': node.set_editor_property('sampler_type',unreal.MaterialSamplerType.SAMPLERTYPE_NORMAL)
                elif suffix=='Roughness': node.set_editor_property('sampler_type',unreal.MaterialSamplerType.SAMPLERTYPE_LINEAR_GRAYSCALE)
                mel.connect_material_property(node,'RGB' if suffix!='Roughness' else 'R',prop)
        metal=mel.create_material_expression(mat,unreal.MaterialExpressionConstant,-400,300)
        metal.set_editor_property('r',settings['metallic'])
        mel.connect_material_property(metal,'',unreal.MaterialProperty.MP_METALLIC)
        if settings['emission']:
            color=mel.create_material_expression(mat,unreal.MaterialExpressionVectorParameter,-600,0)
            color.set_editor_property('parameter_name','Color')
            color.set_editor_property('default_value',unreal.LinearColor(*settings['base_color']))
            power=mel.create_material_expression(mat,unreal.MaterialExpressionScalarParameter,-600,150)
            power.set_editor_property('parameter_name','Emissive')
            power.set_editor_property('default_value',settings['emission'])
            mul=mel.create_material_expression(mat,unreal.MaterialExpressionMultiply,-250,150)
            mel.connect_material_expressions(color,'',mul,'A')
            mel.connect_material_expressions(power,'',mul,'B')
            mel.connect_material_property(color,'',unreal.MaterialProperty.MP_BASE_COLOR)
            mel.connect_material_property(mul,'',unreal.MaterialProperty.MP_EMISSIVE_COLOR)
            rough=mel.create_material_expression(mat,unreal.MaterialExpressionConstant,-400,400)
            rough.set_editor_property('r',settings['roughness'])
            mel.connect_material_property(rough,'',unreal.MaterialProperty.MP_ROUGHNESS)
        mel.recompile_material(mat)
        eal.save_loaded_asset(mat)
        materials[name]=mat
        report['materials'].append(path)

else:
    materials={name:eal.load_asset(DEST+'/Materials/'+name) for name in manifest['materials']}
    if not all(materials.values()): raise RuntimeError('Run a full import before importing one mesh')

# The legacy importer consumes these FbxImportUI settings deterministically.
unreal.SystemLibrary.execute_console_command(None,'Interchange.FeatureFlags.Import.FBX 0')
for item in manifest['assets']:
    name=item['name']
    if only_mesh and name!=only_mesh: continue
    skeletal=name.startswith('SK_')
    existing_path=DEST+'/Meshes/'+name
    if skeletal and eal.does_asset_exist(existing_path):
        existing=eal.load_asset(existing_path)
        # Repair an incomplete earlier import whose dependency package was not saved.
        if existing and not existing.get_editor_property('skeleton'):
            eal.delete_asset(existing_path)
    options=unreal.FbxImportUI()
    options.set_editor_property('automated_import_should_detect_type',False)
    options.set_editor_property('import_mesh',True)
    options.set_editor_property('import_as_skeletal',skeletal)
    options.set_editor_property('mesh_type_to_import',unreal.FBXImportType.FBXIT_SKELETAL_MESH if skeletal else unreal.FBXImportType.FBXIT_STATIC_MESH)
    options.set_editor_property('import_materials',False)
    options.set_editor_property('import_textures',False)
    options.set_editor_property('import_animations',False)
    if skeletal:
        options.set_editor_property('create_physics_asset',False)
        options.skeletal_mesh_import_data.set_editor_property('import_morph_targets',False)
        options.skeletal_mesh_import_data.set_editor_property('normal_import_method',unreal.FBXNormalImportMethod.FBXNIM_IMPORT_NORMALS)
    else:
        options.static_mesh_import_data.set_editor_property('combine_meshes',True)
        options.static_mesh_import_data.set_editor_property('auto_generate_collision',False)
        options.static_mesh_import_data.set_editor_property('generate_lightmap_u_vs',True)
        options.static_mesh_import_data.set_editor_property('normal_import_method',unreal.FBXNormalImportMethod.FBXNIM_IMPORT_NORMALS)
    task=import_task(ART/item['fbx'],DEST+'/Meshes',options)
    asset_tools.import_asset_tasks([task])
    candidates=[eal.load_asset(p) for p in task.get_editor_property('imported_object_paths')]
    mesh=next((m for m in candidates if isinstance(m,unreal.SkeletalMesh if skeletal else unreal.StaticMesh)),None)
    if not mesh:
        report['errors'].append('Missing mesh '+name)
        continue
    slots=mesh.get_editor_property('materials' if skeletal else 'static_materials')
    for i,slot in enumerate(slots):
        slot_name=str(slot.get_editor_property('material_slot_name'))
        mat=materials.get(slot_name)
        if mat:
            if skeletal: slot.set_editor_property('material_interface',mat)
            else: mesh.set_material(i,mat)
        else: report['errors'].append(name+': unknown material slot '+slot_name)
    if skeletal: mesh.set_editor_property('materials',slots)
    else:
        body=mesh.get_editor_property('body_setup')
        if body: body.set_editor_property('collision_trace_flag',unreal.CollisionTraceFlag.CTF_USE_COMPLEX_AS_SIMPLE)
        if item['triangles']>1500:
            reductions=[]
            for ratio,screen in ((1,1),(.55,.20),(.28,.08)):
                level=unreal.StaticMeshReductionSettings()
                level.set_editor_property('percent_triangles',ratio)
                level.set_editor_property('screen_size',screen)
                reductions.append(level)
            opts=unreal.StaticMeshReductionOptions()
            opts.set_editor_property('auto_compute_lod_screen_size',False)
            opts.set_editor_property('reduction_settings',reductions)
            count=mesh_tools.set_lods(mesh,opts)
            if count!=3: report['errors'].append(name+': expected three LODs, got '+str(count))
    eal.save_loaded_asset(mesh)
    if skeletal:
        skeleton=mesh.get_editor_property('skeleton')
        if not skeleton: raise RuntimeError(name+' has no skeleton')
        eal.save_loaded_asset(skeleton,only_if_is_dirty=False)
        anim_options=unreal.FbxImportUI()
        anim_options.set_editor_property('automated_import_should_detect_type',False)
        anim_options.set_editor_property('mesh_type_to_import',unreal.FBXImportType.FBXIT_ANIMATION)
        anim_options.set_editor_property('import_mesh',False)
        anim_options.set_editor_property('import_animations',True)
        anim_options.set_editor_property('skeleton',skeleton)
        anim_task=import_task(ART/item['fbx'],DEST+'/Animations',anim_options)
        asset_tools.import_asset_tasks([anim_task])
        for animation_path in anim_task.get_editor_property('imported_object_paths'):
            eal.save_asset(animation_path,only_if_is_dirty=False)
    report['meshes'].append({'name':name,'path':mesh.get_path_name(),'slots':len(slots),'class':mesh.get_class().get_name(),'lod_count':mesh_tools.get_lod_count(mesh) if not skeletal else 1})
    unreal.log('FB_ART_IMPORTED '+name)
# AssetImportTask.save saves the primary mesh, but not every generated skeleton
# and animation package. Explicitly save the whole generated content subtree.
eal.save_directory(DEST,only_if_is_dirty=False,recursive=True)
report['animations']=[p for p in eal.list_assets(DEST+'/Animations',recursive=True) if isinstance(eal.load_asset(p),unreal.AnimSequence)]
report['passed']=len(report['meshes'])==len(manifest['assets']) and len(report['animations'])==sum(len(a.get('animations',[])) for a in manifest['assets']) and not report['errors']
(ART/'unreal-import-report.json').write_text(json.dumps(report,indent=2),encoding='utf-8')
if not report['passed']: raise RuntimeError('Art import validation failed: '+json.dumps(report))
unreal.log('FB_ART_IMPORT_OK %d meshes, %d animations, %d materials' % (len(report['meshes']),len(report['animations']),len(report['materials'])))
