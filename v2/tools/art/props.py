"""Compact environmental forge props, including intact/damaged variants."""
import math
import kit as k
from kit import box,rod,ring,ell,horn

def crate():
    for side in (-1,1):
        for j in range(5):
            box('Vertical timber',(side*.46,(j-2)*.18,.5),(.075,.174,.94),'wood',bevel=0)
            box('Face timber',((j-2)*.18,side*.46,.5),(.174,.075,.94),'wood',bevel=0)
            box('Lid timber',((j-2)*.18,0,.5+side*.46),(.174,.9,.075),'wood',bevel=0)
        for z in (.15,.85):
            box('Iron strap',(0,side*.507,z),(1.0,.018,.065),'iron',bevel=0)
            box('Side strap',(side*.507,0,z),(.018,1.0,.065),'iron',bevel=0)
        o=box('Diagonal brace',(0,side*.517,.5),(.10,.025,1.05),'wood',bevel=.005);o.rotation_euler.y=side*.68
        for x in (-.40,.40):
            for z in (.15,.85):rod('Square nail',(x,side*.513,z),(x,side*.528,z),.024,'brass',n=6)
    whole=k.merge(list(k.PARTS),'whole');pieces=[]
    for i in range(6):
        # Interior stowed shards never intersect the exterior; spawn/burst them on break.
        o=box(f'debris_{i+1}',((i%3-1)*.24,0,.38+(i//3)*.23),(.19,.65,.16),'wood',bevel=.009)
        o['breakable_piece']=True;o['default_hidden']=True;pieces.append(o)
    return [whole]+pieces

def barrel():
    rod('Drum',(0,0,.045),(0,0,.94),.32,'iron',n=24)
    for z in (.08,.28,.70,.94):ring('Rolled hoop',(0,0,z),.327,.022,'black',seg=20)
    rod('Toxic lid',(0,0,.941),(0,0,.96),.29,'green',n=24)
    rod('Cap',(0,.12,.96),(0,.12,1.01),.05,'brass',n=12)
    box('Hazard plate',(0,-.322,.5),(.27,.018,.27),'brass',bevel=0)
    for side in (-1,1):
        o=box('Hazard chevron',(side*.052,-.337,.50),(.14,.013,.037),'black',bevel=0);o.rotation_euler.y=side*.65
    box('Warning lamp',(0,-.342,.595),(.045,.009,.026),'green',bevel=0)

def torch():
    rod('Foot',(0,0,0),(0,0,.08),.26,'iron',n=16)
    rod('Stem',(0,0,.08),(0,0,1.18),.06,'iron',n=12)
    for z in (.16,.75,1.1):ring('Stem collar',(0,0,z),.075,.018,'brass',seg=12)
    rod('Fire bowl',(0,0,1.16),(0,0,1.34),.12,'iron',r2=.25,n=16)
    for j in range(5):
        a=j*math.tau/5;x=.12*math.cos(a);y=.12*math.sin(a)
        horn('Amber flame',[(x,y,1.29),(x*.8,y*.8,1.49),(x+.045,y,1.72+(j%2)*.1)],[.082,.058,.003],'ember',None,8)
    ell('Hot flame heart',(0,0,1.43),(.095,.095,.20),'gold',seg=12,rings=8)

def lamp(broken=False):
    rod('Ceiling rose',(0,0,.76),(0,0,.82),.21,'iron',n=16)
    rod('Hanger',(0,0,.60),(0,0,.78),.04,'iron',n=12)
    rod('Cap',(0,0,.55),(0,0,.62),.23,'iron',n=16)
    for z in (.06,.53):ring('Cage rim',(0,0,z),.23,.017,'brass',seg=16)
    for j in range(8):
        a=j*math.tau/8;x=.23*math.cos(a);y=.23*math.sin(a)
        if broken and j in (4,5):rod('Bent broken cage',(x,y,.06),(x*1.35,y*1.35,.23),.013,'iron',n=8)
        else:rod('Cage bar',(x,y,.06),(x,y,.53),.013,'iron',n=8)
    rod('Lamp socket',(0,0,.46),(0,0,.56),.085,'black',n=12)
    if broken:
        horn('Exposed wire',[(-.03,0,.45),(-.03,.02,.29),(.02,.05,.25)],[.009,.009,.008],'brass',None,6)
        rod('Broken bulb',(0,0,.36),(0,0,.45),.064,'black',n=8)
    else:
        ell('Amber bulb',(0,0,.31),(.11,.11,.19),'gold',seg=12,rings=8)
        rod('Base disc',(0,0,0),(0,0,.05),.23,'iron',n=16)

def flange(z=0,x=0,y=0):
    rod('Flange',(x,y,z),(x,y,z+.055),.16,'iron',n=16)
    for j in range(6):
        a=j*math.tau/6
        rod('Bolt',(x+.125*math.cos(a),y+.125*math.sin(a),z+.055),(x+.125*math.cos(a),y+.125*math.sin(a),z+.08),.02,'brass',n=6)

def pipe(kind):
    rod('Straight pipe',(0,0,.03),(0,0,.79),.095,'iron',n=16);flange()
    if kind=='pipe_elbow':
        points=[(.24-.24*math.cos(i*math.pi/10),0,.79+.24*math.sin(i*math.pi/10)) for i in range(6)]
        horn('Swept elbow',points,[.095]*6,'iron',None,12)
        rod('Outlet',(.24,0,1.03),(.45,0,1.03),.095,'iron',n=16)
        rod('Outlet flange',(.42,0,1.03),(.48,0,1.03),.16,'iron',n=16)
    else:
        flange(.77)
        if kind=='pipe_valve':
            rod('Valve body',(0,-.02,.40),(0,-.18,.40),.15,'brass',n=16)
            rod('Valve spindle',(0,-.18,.40),(0,-.33,.40),.032,'edge',n=12)
            ring('Red handwheel',(0,-.34,.40),.22,.024,'red',rot=(math.pi/2,0,0),seg=20)
            for j in range(4):
                a=j*math.tau/4;rod('Wheel spoke',(0,-.34,.40),(.21*math.cos(a),-.34,.40+.21*math.sin(a)),.012,'iron',n=8)

def chain():
    for j in range(8):
        o=ring('Forged link',(0,0,.12+j*.17),.10,.022,'iron',rot=(math.pi/2,0,math.pi/2*(j%2)),seg=16)
        # Stretch in world height after rotation for long industrial links.
        for v in o.data.vertices:v.co.y*=1.25

def build():
    jobs=[('wooden_crate',crate),('explosive_barrel',barrel),('standing_torch',torch),
          ('ceiling_lamp',lambda:lamp(False)),('ceiling_lamp_broken',lambda:lamp(True)),
          ('pipe_straight',lambda:pipe('pipe_straight')),('pipe_elbow',lambda:pipe('pipe_elbow')),
          ('pipe_valve',lambda:pipe('pipe_valve')),('hanging_chain',chain)]
    for name,fn in jobs:
        k.reset();objects=fn()
        if objects is None:objects=[k.merge(list(k.PARTS),name)]
        # Ground the complete rest bounds, preserving separate crate node pivots.
        k.bpy.context.view_layer.update();lo,_=k.bounds(objects)
        for o in objects:
            for v in o.data.vertices:v.co.z-=float(lo[2])
        k.export(name,'props',objects,'Crate: hide debris_1..6 until break, then hide whole and scatter shards.' if name=='wooden_crate' else 'Origin at base; mount ceiling lamp by top extent.',(200,2000))
