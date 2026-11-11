"""World-space structural materials so every scaled block keeps a real texel scale."""
from pathlib import Path
import json
import unreal
ROOT=Path(__file__).resolve().parents[1]
DEST='/Game/Firebird/ArtKitV01'
eal=unreal.EditorAssetLibrary; mel=unreal.MaterialEditingLibrary
at=unreal.AssetToolsHelpers.get_asset_tools()
tasks=[]
for path in sorted((ROOT/'art'/'surfaces').glob('*.png')):
    t=unreal.AssetImportTask(); t.filename=str(path); t.destination_path=DEST+'/Textures'; t.automated=True; t.replace_existing=True; t.save=True
    tasks.append(t)
at.import_asset_tasks(tasks)
for task in tasks:
    for p in task.imported_object_paths:
        tex=eal.load_asset(p)
        if tex.get_name().endswith('_Normal'):
            tex.set_editor_property('srgb',False); tex.set_editor_property('compression_settings',unreal.TextureCompressionSettings.TC_NORMALMAP); tex.set_editor_property('flip_green_channel',True)
        elif tex.get_name().endswith('_Roughness'):
            tex.set_editor_property('srgb',False); tex.set_editor_property('compression_settings',unreal.TextureCompressionSettings.TC_GRAYSCALE)
        eal.save_loaded_asset(tex)

SAMPLE='''float3 p=P/Scale;
float3 w=pow(abs(N),float3(8,8,8)); w/=max(w.x+w.y+w.z,0.0001);
return Texture2DSample(T,TSampler,p.yz).rgb*w.x+Texture2DSample(T,TSampler,p.xz).rgb*w.y+Texture2DSample(T,TSampler,p.xy).rgb*w.z;'''
NORMAL='''float3 p=P/Scale;
float3 w=pow(abs(N),float3(8,8,8)); w/=max(w.x+w.y+w.z,0.0001);
float2 a=Texture2DSample(T,TSampler,p.yz).rg*2-1;
float2 b=Texture2DSample(T,TSampler,p.xz).rg*2-1;
float2 c=Texture2DSample(T,TSampler,p.xy).rg*2-1;
float3 nx=float3(sqrt(saturate(1-dot(a,a)))*sign(N.x),a.x,a.y);
float3 ny=float3(b.x,sqrt(saturate(1-dot(b,b)))*sign(N.y),b.y);
float3 nz=float3(c.x,c.y,sqrt(saturate(1-dot(c,c)))*sign(N.z));
return normalize(nx*w.x+ny*w.y+nz*w.z);'''

def scalar(m,name,value,x,y):
    n=mel.create_material_expression(m,unreal.MaterialExpressionScalarParameter,x,y); n.set_editor_property('parameter_name',name); n.set_editor_property('default_value',value)
    return n

WORLD_SETS=('LimestoneBlocks','BasaltPavers','MudBrick','BronzePanels','CeilingStone','CutStone')
for name in WORLD_SETS:
    full=DEST+'/Materials/M_FB_World_'+name
    m=eal.load_asset(full) if eal.does_asset_exist(full) else at.create_asset('M_FB_World_'+name,DEST+'/Materials',unreal.Material,unreal.MaterialFactoryNew())
    mel.delete_all_material_expressions(m)
    m.set_editor_property('tangent_space_normal',False)
    pos=mel.create_material_expression(m,unreal.MaterialExpressionWorldPosition,-1200,0)
    normal=mel.create_material_expression(m,unreal.MaterialExpressionVertexNormalWS,-1200,140)
    scale=scalar(m,'TileSize',85 if name=='CutStone' else 200,-1200,260)
    tint=mel.create_material_expression(m,unreal.MaterialExpressionVectorParameter,-700,-240)
    tint.set_editor_property('parameter_name','Color'); tint.set_editor_property('default_value',unreal.LinearColor(1,1,1,1))
    for i,(suffix,prop) in enumerate([('BaseColor',unreal.MaterialProperty.MP_BASE_COLOR),('Roughness',unreal.MaterialProperty.MP_ROUGHNESS),('Normal',unreal.MaterialProperty.MP_NORMAL)]):
        tex=mel.create_material_expression(m,unreal.MaterialExpressionTextureObject,-1200,450+i*250)
        tex.set_editor_property('texture',eal.load_asset(DEST+'/Textures/'+('Limestone' if name=='CutStone' else name)+'_'+suffix))
        code=mel.create_material_expression(m,unreal.MaterialExpressionCustom,-500,i*250)
        code.set_editor_property('code',NORMAL if suffix=='Normal' else SAMPLE)
        code.set_editor_property('output_type',unreal.CustomMaterialOutputType.CMOT_FLOAT3)
        inputs=[]
        for key in ('P','N','Scale','T'):
            c=unreal.CustomInput(); c.set_editor_property('input_name',key); inputs.append(c)
        code.set_editor_property('inputs',inputs)
        for node,key in [(pos,'P'),(normal,'N'),(scale,'Scale'),(tex,'T')]: mel.connect_material_expressions(node,'',code,key)
        if suffix=='BaseColor':
            mul=mel.create_material_expression(m,unreal.MaterialExpressionMultiply,-150,0)
            mel.connect_material_expressions(code,'',mul,'A'); mel.connect_material_expressions(tint,'',mul,'B')
            weather=mel.create_material_expression(m,unreal.MaterialExpressionCustom,100,0)
            weather.set_editor_property('output_type',unreal.CustomMaterialOutputType.CMOT_FLOAT3)
            wi=[]
            for key in ('P','C','N'):
                c=unreal.CustomInput(); c.set_editor_property('input_name',key); wi.append(c)
            weather.set_editor_property('inputs',wi)
            weather.set_editor_property('code','''float broad=.5+.25*sin(P.x*.007+sin(P.y*.011))+.25*sin(P.z*.018+P.y*.008);
float stains=saturate(.5+.32*sin(P.x*.031+sin(P.y*.025))+.2*sin(P.x*.091+P.y*.067));
float foot=exp(-max(P.z,0)/90.0)*(1-abs(N.z));
return C*(.88+.18*broad)*lerp(float3(1,1,1),float3(.55,.49,.4),foot*stains*.65);''')
            for node,key in [(mul,'C'),(pos,'P'),(normal,'N')]: mel.connect_material_expressions(node,'',weather,key)
            mel.connect_material_property(weather,'',prop)
        else: mel.connect_material_property(code,'',prop)
    metal=scalar(m,'Metallic',.78 if name=='BronzePanels' else 0,-400,850)
    mel.connect_material_property(metal,'',unreal.MaterialProperty.MP_METALLIC)
    mel.recompile_material(m); eal.save_loaded_asset(m)
    unreal.log('FB_WORLD_MATERIAL '+name)

# Red mercury has a slow moving crust and narrow hot seams instead of a flat emissive plane.
name='M_FB_MercuryFlow'; full=DEST+'/Materials/'+name
m=eal.load_asset(full) if eal.does_asset_exist(full) else at.create_asset(name,DEST+'/Materials',unreal.Material,unreal.MaterialFactoryNew())
mel.delete_all_material_expressions(m)
pos=mel.create_material_expression(m,unreal.MaterialExpressionWorldPosition,-700,0)
time=mel.create_material_expression(m,unreal.MaterialExpressionTime,-700,150)
flow=mel.create_material_expression(m,unreal.MaterialExpressionCustom,-300,0)
flow.set_editor_property('output_type',unreal.CustomMaterialOutputType.CMOT_FLOAT3)
inp=[]
for key in ('P','Time'):
    c=unreal.CustomInput(); c.set_editor_property('input_name',key); inp.append(c)
flow.set_editor_property('inputs',inp)
flow.set_editor_property('code','''float2 q=P.xy/185+float2(Time*.012,Time*.008);
float n=sin(q.x*2.7+sin(q.y*2.1))+.55*sin(q.y*4.4+sin(q.x*3.3))+.19*sin(q.x*11.7+q.y*7.3);
float vein=pow(saturate(1-abs(n)*2.8),3);
float hot=pow(vein,8)*.2;
return lerp(float3(.018,.003,.006),float3(.55,.014,.006),vein)+float3(.5,.075,.006)*hot;''')
mel.connect_material_expressions(pos,'',flow,'P'); mel.connect_material_expressions(time,'',flow,'Time')
mel.connect_material_property(flow,'',unreal.MaterialProperty.MP_BASE_COLOR)
power=scalar(m,'Emissive',2.4,-300,200)
mul=mel.create_material_expression(m,unreal.MaterialExpressionMultiply,0,100)
mel.connect_material_expressions(flow,'',mul,'A'); mel.connect_material_expressions(power,'',mul,'B')
mel.connect_material_property(mul,'',unreal.MaterialProperty.MP_EMISSIVE_COLOR)
rough=scalar(m,'Roughness',.32,-300,300); mel.connect_material_property(rough,'',unreal.MaterialProperty.MP_ROUGHNESS)
metal=scalar(m,'Metallic',.5,-300,400); mel.connect_material_property(metal,'',unreal.MaterialProperty.MP_METALLIC)
mel.recompile_material(m); eal.save_loaded_asset(m)

# Existing UV materials gain per-instance tint and hit flash without replacing texture detail.
for name in ('AshShell','Bronze','GoldEdge','Obsidian'):
    m=eal.load_asset(DEST+'/Materials/M_FB_'+name)
    if not m: continue
    # Rebuild from the fixed UV texture set; avoids stacking tint nodes on rerun.
    mel.delete_all_material_expressions(m)
    m.set_editor_property('used_with_skeletal_mesh',True)
    for suffix,prop in [('BaseColor',unreal.MaterialProperty.MP_BASE_COLOR),('Roughness',unreal.MaterialProperty.MP_ROUGHNESS),('Normal',unreal.MaterialProperty.MP_NORMAL)]:
        tex=mel.create_material_expression(m,unreal.MaterialExpressionTextureSample,-600,0)
        tex.set_editor_property('texture',eal.load_asset(DEST+'/Textures/'+name+'_'+suffix))
        if suffix=='Normal': tex.set_editor_property('sampler_type',unreal.MaterialSamplerType.SAMPLERTYPE_NORMAL)
        elif suffix=='Roughness': tex.set_editor_property('sampler_type',unreal.MaterialSamplerType.SAMPLERTYPE_LINEAR_GRAYSCALE)
        if suffix=='BaseColor':
            tint=mel.create_material_expression(m,unreal.MaterialExpressionVectorParameter,-600,-200); tint.set_editor_property('parameter_name','Color'); tint.set_editor_property('default_value',unreal.LinearColor(1,1,1,1))
            mul=mel.create_material_expression(m,unreal.MaterialExpressionMultiply,-250,0)
            mel.connect_material_expressions(tex,'RGB',mul,'A'); mel.connect_material_expressions(tint,'',mul,'B'); mel.connect_material_property(mul,'',prop)
        else: mel.connect_material_property(tex,'R' if suffix=='Roughness' else 'RGB',prop)
    metal=scalar(m,'Metallic',.82 if name in ('Bronze','GoldEdge') else .05,-500,450); mel.connect_material_property(metal,'',unreal.MaterialProperty.MP_METALLIC)
    flash=scalar(m,'HitFlash',0,-500,600); mel.connect_material_property(flash,'',unreal.MaterialProperty.MP_EMISSIVE_COLOR)
    if name=='AshShell':
        m.set_editor_property('blend_mode',unreal.BlendMode.BLEND_MASKED)
        pos=mel.create_material_expression(m,unreal.MaterialExpressionWorldPosition,-700,800)
        dissolve=scalar(m,'Dissolve',0,-700,950)
        mask=mel.create_material_expression(m,unreal.MaterialExpressionCustom,-250,800)
        mask.set_editor_property('output_type',unreal.CustomMaterialOutputType.CMOT_FLOAT1)
        inputs=[]
        for key in ('P','D'):
            c=unreal.CustomInput(); c.set_editor_property('input_name',key); inputs.append(c)
        mask.set_editor_property('inputs',inputs)
        mask.set_editor_property('code','''float3 q=P/6.5; float3 cell=floor(q); float3 f=frac(q); f=f*f*(3-2*f);
float n=0;
[unroll] for(int k=0;k<8;k++) {
    float3 o=float3(k&1,(k>>1)&1,(k>>2)&1);
    float h=frac(sin(dot(cell+o,float3(127.1,311.7,74.7)))*43758.5453);
    float3 w=lerp(1-f,f,o); n+=h*w.x*w.y*w.z;
}
return D<=0 ? 1 : saturate((n-D)*12+.5);''')
        mel.connect_material_expressions(pos,'',mask,'P'); mel.connect_material_expressions(dissolve,'',mask,'D')
        mel.connect_material_property(mask,'',unreal.MaterialProperty.MP_OPACITY_MASK)
    mel.recompile_material(m); eal.save_loaded_asset(m)
for p in eal.list_assets(DEST+'/Materials',recursive=True):
    m=eal.load_asset(p)
    if isinstance(m,unreal.Material):
        m.set_editor_property('used_with_instanced_static_meshes',True)
        mel.recompile_material(m)
        eal.save_loaded_asset(m,only_if_is_dirty=False)
eal.save_directory(DEST,only_if_is_dirty=False,recursive=True)
report_path=ROOT/'art'/'unreal-import-report.json'
report=json.loads(report_path.read_text(encoding='utf-8'))
report['world_materials']=[DEST+'/Materials/M_FB_World_'+n for n in WORLD_SETS]
report['world_materials'].append(DEST+'/Materials/M_FB_MercuryFlow')
report['structural_textures']=[DEST+'/Textures/'+p.stem for p in sorted((ROOT/'art'/'surfaces').glob('*.png'))]
report_path.write_text(json.dumps(report,indent=2),encoding='utf-8')
unreal.log('FB_WORLD_MATERIALS_OK')
