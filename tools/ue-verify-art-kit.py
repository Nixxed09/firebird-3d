"""Fresh-process proof that imported meshes and animation dependencies were saved."""
import json
from pathlib import Path
import unreal

path=Path(__file__).resolve().parents[1]/'art'/'unreal-import-report.json'
report=json.loads(path.read_text(encoding='utf-8'))
errors=[]
mesh_tools=unreal.get_editor_subsystem(unreal.StaticMeshEditorSubsystem)
for record in report['meshes']:
    asset=unreal.EditorAssetLibrary.load_asset(record['path'])
    if not asset or asset.get_class().get_name()!=record['class']:
        errors.append('Cannot reload '+record['path'])
    if isinstance(asset,unreal.SkeletalMesh) and not asset.get_editor_property('skeleton'):
        errors.append(record['name']+': skeleton missing after editor restart')
    if isinstance(asset,unreal.StaticMesh):
        count=mesh_tools.get_lod_count(asset)
        triangles=[asset.get_num_triangles(i) for i in range(count)]
        record['lod_triangles']=triangles
        if count!=record.get('lod_count',1): errors.append('LOD count did not persist: '+record['name'])
        if count>1 and not (triangles[0]>triangles[1]>=triangles[2]>0): errors.append('LOD reduction ineffective: '+record['name'])
for p in report['materials']+report['textures']+report['animations']+report.get('world_materials',[])+report.get('structural_textures',[]):
    asset=unreal.EditorAssetLibrary.load_asset(p)
    if not asset: errors.append('Cannot reload '+p)
    if isinstance(asset,unreal.AnimSequence) and not asset.get_editor_property('skeleton'):
        errors.append('Animation skeleton missing '+p)
manifest=json.loads((path.parent/'asset-manifest.json').read_text())
expected=sum(len(a.get('animations',[])) for a in manifest['assets'])
if len(report['animations'])!=expected: errors.append('Expected '+str(expected)+' saved animations')
for item in manifest['assets']:
    if not item.get('animations'): continue
    mesh=unreal.EditorAssetLibrary.load_asset(report['destination']+'/Meshes/'+item['name'])
    skeleton=mesh.get_editor_property('skeleton')
    for clip in item['animations']:
        matches=[p for p in report['animations'] if p.split('.')[-1].endswith(clip)]
        if len(matches)!=1:
            errors.append('Expected one saved clip '+clip)
            continue
        animation=unreal.EditorAssetLibrary.load_asset(matches[0])
        if animation.get_editor_property('skeleton')!=skeleton:
            errors.append('Wrong skeleton for '+clip)
        if animation.get_editor_property('sequence_length')<=0:
            errors.append('Empty animation '+clip)
report['fresh_process_reload_passed']=not errors
report['reload_errors']=errors
path.write_text(json.dumps(report,indent=2),encoding='utf-8')
if errors: raise RuntimeError(str(errors))
unreal.log('FB_ART_RELOAD_OK')
