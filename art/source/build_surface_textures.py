"""Author seamless structural PBR surfaces in Blender; no external source images."""
import bpy
import numpy as np
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]/'surfaces'
ROOT.mkdir(exist_ok=True)
N=1024
yy,xx=np.mgrid[0:N,0:N].astype(float)/N
rng=np.random.default_rng(20261013)
noise=np.zeros((N,N))
for scale,amp in [(5,.45),(15,.25),(60,.18),(180,.12)]:
    field=rng.normal(size=(N,N))
    fy=np.fft.fftfreq(N)[:,None]; fx=np.fft.rfftfreq(N)[None,:]
    spectrum=np.fft.rfft2(field)*np.exp(-(fx*fx+fy*fy)*(N/scale)**2)
    layer=np.fft.irfft2(spectrum,s=(N,N))
    layer=(layer-layer.min())/(layer.max()-layer.min())
    noise+=layer*amp
grain=rng.random((N,N))

def save(name,arr,color):
    image=bpy.data.images.new(name,width=N,height=N,alpha=False)
    image.colorspace_settings.name='sRGB' if color else 'Non-Color'
    rgba=np.ones((N,N,4),dtype=np.float32)
    rgba[:,:,:3]=arr if arr.ndim==3 else arr[:,:,None]
    image.pixels.foreach_set(rgba.ravel())
    image.filepath_raw=str(ROOT/(name+'.png')); image.file_format='PNG'; image.save()
    bpy.data.images.remove(image)

for name,col,cols,rows,offset,rough,metal in [
    ('LimestoneBlocks',(.46,.405,.31),4,4,.5,.79,False),
    ('BasaltPavers',(.085,.095,.105),2,2,0,.62,False),
    ('MudBrick',(.16,.102,.065),4,8,.5,.88,False),
    ('BronzePanels',(.37,.20,.065),2,2,0,.4,True),
    ('CeilingStone',(.29,.265,.22),4,4,0,.83,False)]:
    row=np.floor(yy*rows)
    u=(xx*cols+row*offset)%1; v=yy*rows%1
    edge=np.minimum(np.minimum(u,1-u),np.minimum(v,1-v))
    joint=np.clip((edge-.009)/.024,0,1)
    bevel=joint*joint*(3-2*joint)
    cell=np.floor(xx*cols+row*offset)%cols
    variation=.86+.18*((np.sin(cell*14.23+row*63.71)*43758.5)%1)
    color=np.array(col)[None,None,:]*(variation*(.81+.32*noise))[:,:,None]
    color=color*bevel[:,:,None]+np.array([.029,.026,.023])[None,None,:]*(1-bevel[:,:,None])
    height=.20*bevel+.018*noise+.004*(grain-.5)
    roughmap=np.clip(rough+(noise-.5)*.20+(1-bevel)*.08,0,1)
    if metal:
        patina=np.clip((noise-.61)*2.8,0,.65)
        color=color*(1-patina[:,:,None])+np.array([.047,.13,.10])*patina[:,:,None]
        rivet=np.minimum.reduce([np.sqrt((u-a)**2+(v-b)**2) for a in (.06,.94) for b in (.06,.94)])
        head=np.clip((.018-rivet)/.008,0,1)
        height+=head*.065
        color=color*(1-head[:,:,None])+np.array([.49,.29,.09])*head[:,:,None]
        roughmap-=head*.10
    dx=(np.roll(height,1,1)-np.roll(height,-1,1))*N/10
    dy=(np.roll(height,1,0)-np.roll(height,-1,0))*N/10
    normal=np.stack((dx,dy,np.ones_like(dx)),axis=-1)
    normal/=np.linalg.norm(normal,axis=-1,keepdims=True)
    save(name+'_BaseColor',np.clip(color,0,1),True)
    save(name+'_Roughness',np.clip(roughmap,0,1),False)
    save(name+'_Normal',normal*.5+.5,False)
print('FB_SURFACES_OK 5 structural PBR sets')
