"""Analytic periodic surface pixels: 14 seamless 1024px PBR sets, 2m per repeat."""
import math,json
import numpy as np
import bpy
import kit as k
import png

N=1024
Y,X=np.mgrid[0:N,0:N].astype(np.float32)/(N-1)
TAU=math.tau
G=.5+.23*np.sin(TAU*(X*17+Y*7))+.17*np.cos(TAU*(X*31-Y*13))+.10*np.sin(TAU*(X*53+Y*43))
W=.5+.25*np.sin(TAU*(X*3+Y*2))+.25*np.cos(TAU*(X*2-Y*3))

def rect(x0,y0,x1,y1):return (X>=x0)&(X<=x1)&(Y>=y0)&(Y<=y1)
def soft(v,lo,hi):return np.clip((v-lo)/(hi-lo),0,1)
def torus_distance(a,b):return np.minimum(np.abs(a-b),1-np.abs(a-b))

def cells():
    # Toroidal Voronoi gap, distorted by periodic trigonometric warping.
    u=(X+.023*np.sin(TAU*Y*3))%1;v=(Y+.026*np.sin(TAU*X*2))%1
    rng=np.random.default_rng(7309);dist=[]
    for a,b in rng.uniform(0,1,(18,2)):
        dist.append(torus_distance(u,a)**2+torus_distance(v,b)**2)
    near=np.partition(np.stack(dist),1,axis=0)[:2]
    return np.sqrt(near[1])-np.sqrt(near[0])

GAP=cells()

def make(name):
    h=.012*G; rough=np.full_like(X,.82);rgb=np.zeros((N,N,3),np.float32);em=np.zeros_like(rgb)
    def paint(mask,color):rgb[mask]=color
    if name in ('brick','stone','floor_slab'):
        rows=4 if name=='brick' else 2;cols=3 if name=='brick' else 2
        row=np.floor(Y*rows).astype(int);u=(X*cols+(row%2)*(.5 if name!='floor_slab' else 0))%1;v=(Y*rows)%1
        edge=np.minimum.reduce([u,1-u,v,1-v]);face=soft(edge,.02,.075)
        brick_variation=.84+.16*np.sin((np.floor(X*cols+(row%2)*.5)+row*3)*2.19)
        color={'brick':(.22,.062,.027),'stone':(.145,.14,.12),'floor_slab':(.10,.125,.135)}[name]
        rgb[:]=(.022,.018,.015)
        rgb=rgb*(1-face[:,:,None])+np.array(color)[None,None,:]*face[:,:,None]*(.75+.18*W+.12*G)[:,:,None]*brick_variation[:,:,None]
        h+=face*.055
        # Hairline fractures remain inside each block.
        crack=(np.abs(u-(.27+.018*np.sin(v*19)))<.003)&(v>.16)&(v<.50)
        rgb[crack]*=.52;h[crack]-=.006
        rough=.86+.10*(1-face)-.05*G
    elif name in ('hellrock','lava_floor'):
        crack=1-soft(GAP,.006,.032 if name=='lava_floor' else .018)
        rgb[:]=(.035,.020,.024);rgb*= (.65+.7*W+.2*G)[:,:,None]
        rgb+=crack[:,:,None]*np.array((.58,.065,.003))
        em=crack[:,:,None]**2*np.array((1,.16,.008))
        h+=soft(GAP,0,.045)*.12;rough=.88-crack*.40
        if name=='lava_floor':
            flow=.8+.2*np.sin(TAU*(X*6+Y*4));em*=flow[:,:,None]
    elif name=='floor_grate':
        u=(X*8)%1;v=(Y*8)%1
        metal=(u<.16)|(v<.16)
        rgb[:]=(.006,.009,.012);paint(metal,(.105,.135,.145));h+=metal*.045
        lip=((u>.12)&(u<.18))|((v>.12)&(v<.18));paint(lip,(.16,.18,.18));h+=lip*.012
        # Under-grate warm forge light; opaque albedo keeps the surface one cheap plane.
        inner=(u>.28)&(u<.81)&(v>.28)&(v<.81);em[inner]=(.038,.006,.001)
        rough[:]=.63;rough[~metal]=.94
    else:
        rgb[:]=(.064,.087,.103);rgb*= (.77+.23*W)[:,:,None];rough[:]=.65
        panel=rect(.035,.035,.965,.965);h+=panel*.027
        border=~rect(.07,.07,.93,.93);rgb[border]*=.36
        # Exposed edge band and symmetric captive bolts.
        rim=panel&~rect(.049,.049,.951,.951);paint(rim,(.16,.19,.20));h+=rim*.017
        for px in (.095,.905):
            for py in (.095,.905):
                d=np.sqrt((X-px)**2+(Y-py)**2);bolt=d<.013
                paint(bolt,(.32,.23,.10));h+=bolt*.02
                slot=bolt&(np.abs(X-px)<.002);paint(slot,(.014,.018,.022));h-=slot*.006
        if name=='metal_panel':
            for yy in (.27,.73):
                rib=rect(.14,yy-.023,.86,yy+.023);paint(rib,(.13,.16,.17));h+=rib*.021
            seam=rect(.497,.12,.503,.88);paint(seam,(.016,.02,.02));h-=seam*.016
        elif name=='tech_panel':
            for xx in (.15,.85):
                strip=rect(xx-.016,.16,xx+.016,.84);paint(strip,(.025,.42,.51));em[strip]=(.02,.75,1);h+=strip*.012
            screen=rect(.27,.34,.73,.68);paint(screen,(.01,.027,.035));h-=screen*.012
            for j in range(6):
                line=rect(.31,.39+j*.04,.63-(j%3)*.055,.402+j*.04);paint(line,(.065,.38,.30));em[line]=(.02,.28,.16)
            for px in (.32,.50,.68):
                led=(X-px)**2+(Y-.23)**2<.009**2;paint(led,(.9,.15,.02));em[led]=(1,.08,.001)
        elif name=='ceiling_panel':
            for j in range(9):
                vent=rect(.20,.20+j*.062,.80,.228+j*.062);paint(vent,(.012,.02,.024));h-=vent*.022
                edge=rect(.20,.227+j*.062,.80,.234+j*.062);paint(edge,(.19,.20,.19));h+=edge*.007
        elif name.startswith('door'):
            center=rect(.49,.07,.51,.93);paint(center,(.009,.012,.016));h-=center*.05
            for xx in (.22,.72):
                bevel=rect(xx,.20,xx+.06,.8);paint(bevel,(.14,.16,.17));h+=bevel*.033
            if name!='door':
                stripe=rect(.10,.69,.90,.76)
                color=(.56,.017,.006) if name=='door_red' else (.015,.11,.56)
                paint(stripe,color);h+=stripe*.001
            for xx in (.40,.56):
                handle=rect(xx,.38,xx+.04,.52);paint(handle,(.36,.24,.06));h+=handle*.06
        elif name.startswith('switch'):
            recess=rect(.29,.23,.71,.77);paint(recess,(.008,.012,.017));h-=recess*.04
            on=name=='switch_on';lever=rect(.38,.48 if on else .29,.62,.71 if on else .52)
            paint(lever,(.17,.21,.23));h+=lever*.085
            lamp=rect(.39,.81,.61,.85);paint(lamp,(.03,.6,.12) if on else (.40,.025,.008));em[lamp]=(.015,.8,.12) if on else (.2,.006,.001)
            indicator=rect(.43,.56 if on else .35,.57,.60 if on else .39);paint(indicator,(.60,.54,.30));h+=indicator*.003
        rgb*= (.91+.09*G)[:,:,None]
        # Warm oxidation concentrated at exposed edges, authored without random pixels.
        rust=(W>.78)&border;rgb[rust]=rgb[rust]*.5+np.array((.09,.025,.004))
    # Tangent-space OpenGL (+Y) normal; world height amplitude is in metres per 2m tile.
    dx=(np.roll(h,-1,axis=1)-np.roll(h,1,axis=1))*(N-1)/4
    dy=(np.roll(h,-1,axis=0)-np.roll(h,1,axis=0))*(N-1)/4
    normal=np.stack((-dx,-dy,np.ones_like(dx)),2);normal/=np.linalg.norm(normal,axis=2,keepdims=True);normal=normal*.5+.5
    maps={'albedo':np.clip(rgb,0,1),'normal':normal,'roughness':np.repeat(np.clip(rough,0,1)[:,:,None],3,2),'emissive':np.clip(em,0,1)}
    for pixels in maps.values():
        # Endpoint samples are welded for exact byte-identical opposite edges.
        pixels[-1,:,:]=pixels[0,:,:];pixels[:,-1,:]=pixels[:,0,:]
    return maps

def build():
    dest=k.ROOT/'surfaces';dest.mkdir(exist_ok=True)
    names=['brick','stone','metal_panel','tech_panel','hellrock','floor_slab','floor_grate','lava_floor','ceiling_panel','door','door_red','door_blue','switch_off','switch_on']
    report=[];thumbs=[]
    for name in names:
        maps=make(name)
        for channel,pixels in maps.items():
            path=dest/f'{name}_{channel}.png'
            png.save(path,pixels,channel)
            # Read saved PNG through Blender to verify dimensions and both seamless edges.
            read=bpy.data.images.load(str(path),check_existing=False);a=np.empty(N*N*4,np.float32);read.pixels.foreach_get(a);a=a.reshape(N,N,4)
            seam=max(float(np.max(np.abs(a[0]-a[-1]))),float(np.max(np.abs(a[:,0]-a[:,-1]))))
            if seam!=0:raise RuntimeError(f'{path}: seam {seam}')
            report.append({'file':path.relative_to(k.ROOT).as_posix(),'pixels':[N,N],'tile_m':[2,2],'edge_max_error':seam,'bytes':path.stat().st_size})
            bpy.data.images.remove(read)
        thumbs.append(np.clip(maps['albedo'][::4,::4,:]+maps['emissive'][::4,::4,:]*.6,0,1))
        print('SURFACE '+name,flush=True)
    while len(thumbs)<16:thumbs.append(np.zeros((256,256,3),np.float32))
    sheet=np.concatenate([np.concatenate(thumbs[j:j+4],axis=1) for j in (12,8,4,0)],axis=0)
    k.image('surface_catalogue',sheet,path=k.ROOT/'surface_catalogue.png')
    (k.ROOT/'surface_validation.json').write_text(json.dumps({'sets':len(names),'maps':len(report),'edge_test':'Decoded PNG opposite edges, exact equality on all channels','results':report},indent=2)+'\n')
