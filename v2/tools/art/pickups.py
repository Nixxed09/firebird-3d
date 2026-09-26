"""Readable colour and shape-coded pickups; gun pickups share original gun geometry."""
import math
import kit as k
from kit import box,rod,ell,ring,horn
from weapons import build_gun

def medkit(large=False):
    w=.56 if large else .32;h=.35 if large else .22;d=.28 if large else .18
    box('Medical case',(0,0,h/2),(w,d,h),'white',bevel=.035)
    box('Case seam',(0,0,h*.55),(w+.008,d+.008,.022),'iron',bevel=.006)
    for x in (-w*.37,w*.37):box('Latch',(x,-d*.52,h*.59),(.043,.025,.077),'brass',bevel=.007)
    box('Health vertical',(0,-d*.54,h*.48),(.047,.021,h*.56),'green',bevel=.005)
    box('Health horizontal',(0,-d*.555,h*.48),(h*.56,.022,.047),'green',bevel=.005)
    for x in (-w*.22,w*.22):box('Handle support',(x,0,h+.035),(.032,.048,.07),'black',bevel=.006)
    box('Carry handle',(0,0,h+.07),(w*.47,.048,.035),'black',bevel=.009)
    if large:
        for side in (-1,1):box('Reinforced corner',(side*w*.45,0,h*.45),(.06,d+.025,h*.75),'iron',bevel=.008)

def ammo(kind):
    if kind=='bullet_clip':
        box('Magazine',(0,0,.12),(.15,.085,.24),'iron',bevel=.012)
        for j in range(3):
            rod('Brass cartridge',((j-1)*.047,0,.23),((j-1)*.047,0,.30),.018,'brass',n=10)
            rod('Bullet nose',((j-1)*.047,0,.30),((j-1)*.047,0,.33),.018,'edge',r2=.004,n=10)
        for j in range(4):box('Magazine notch',(0,-.045,.05+j*.043),(.10,.008,.013),'black',bevel=0)
        box('Baseplate',(0,0,.017),(.17,.10,.034),'brass',bevel=.005)
    elif kind=='shell_box':
        box('Shell carrier',(0,0,.08),(.34,.16,.16),'red',bevel=.012)
        for j in range(5):
            x=(j-2)*.062;rod('Shell',(x,0,.12),(x,0,.24),.026,'red',n=10)
            rod('Shell cap',(x,0,.23),(x,0,.26),.029,'brass',n=10)
        box('Shell stripe',(0,-.085,.07),(.25,.008,.035),'white',bevel=0)
    else:
        box('Rocket carrier',(0,0,.12),(.42,.28,.24),'iron',bevel=.022)
        for x in (-.105,.105):
            rod('Rocket casing',(x,0,.12),(x,0,.41),.067,'brass',n=12)
            rod('Rocket nose',(x,0,.41),(x,0,.54),.067,'red',r2=.007,n=12)
            for side in (-1,1):box('Rocket fin',(x+side*.065,0,.24),(.025,.11,.12),'iron',bevel=0)
        box('Hazard band',(0,-.145,.12),(.32,.014,.064),'red',bevel=.003)

def vest():
    box('Vest back',(0,.08,.30),(.43,.09,.52),'cloth',bevel=.04)
    box('Chest plate',(0,-.018,.29),(.42,.17,.45),'iron',bevel=.04)
    for side in (-1,1):
        box('Shoulder strap',(side*.15,.01,.59),(.095,.20,.08),'cloth',bevel=.018)
        for j in range(3):box('Armour lamella',(side*.107,-.112,.19+j*.10),(.19,.045,.074),'edge',bevel=.01)
        box('Waist buckle',(side*.18,-.08,.065),(.09,.08,.05),'brass',bevel=.007)
        o=box('Cyan chevron',(side*.075,-.148,.48),(.17,.012,.026),'cyan',bevel=.002);o.rotation_euler.y=side*.33

def keycard(color):
    box('Keycard',(0,0,.102),(.31,.025,.204),color,bevel=.012)
    box('Contact chip',(-.084,-.016,.12),(.055,.009,.045),'brass',bevel=.003)
    for j in range(5):box('Chip contact',(-.106+j*.011,-.022,.12),(.005,.003,.036),'black',bevel=0)
    box('Access strip',(.066,-.016,.115),(.14,.01,.07),'black',bevel=.005)
    for j in range(3 if color=='red' else 2):box('Access code',(.02+j*.035,-.023,.115),(.019,.008,.039),'ember' if color=='red' else 'cyan',bevel=.003)
    box('Bottom stripe',(0,-.016,.035),(.25,.008,.016),'white',bevel=0)
    for x in (-.12,.12):rod('Card rivet',(x,-.018,.177),(x,-.027,.177),.012,'edge',n=8)

def orb():
    ell('Phoenix heart',(0,0,.32),(.21,.21,.21),'ember',seg=20,rings=12)
    for side in (-1,1):
        o=ring('Orb halo',(0,0,.32),.27,.018,'brass',rot=(math.pi/2,side*.6,0),seg=24)
        for j in range(3):
            horn('Phoenix wing',[(side*.16,0,.28+j*.05),(side*(.31+j*.045),0,.32+j*.08),(side*(.37+j*.055),.025,.49+j*.10)],[.035,.032,.003],'gold',None,8)
    rod('Orb foot',(0,0,0),(0,0,.055),.13,'iron',n=16)
    rod('Orb stem',(0,0,.045),(0,0,.16),.035,'brass',n=12)

def gun(kind):
    objects=build_gun(kind,hands=False)
    # Readable inventory charge cells on the rear distinguish pickup guns at distance.
    start=len(k.PARTS)
    for side in (-1,1):
        rod('Pickup charge cell',(side*.10,.055,.07),(side*.10,.055,.18),.023,'cyan',n=12)
        ring('Cell collar',(side*.10,.055,.08),.028,.009,'brass',seg=16)
    cells=k.PARTS[start:];objects[0]=k.merge([objects[0]]+cells,'weapon')
    return objects

def build():
    jobs=[('medkit_small',lambda:medkit(False)),('medkit_large',lambda:medkit(True)),
          ('bullet_clip',lambda:ammo('bullet_clip')),('shell_box',lambda:ammo('shell_box')),
          ('rocket_box',lambda:ammo('rocket_box')),('armour_vest',vest),
          ('keycard_red',lambda:keycard('red')),('keycard_blue',lambda:keycard('blue')),('phoenix_orb',orb)]
    jobs += [('pickup_'+name,lambda n=name:gun(n)) for name in ('pistol','shotgun','chaingun','rocket_launcher')]
    for name,fn in jobs:
        k.reset();objects=fn()
        if objects is None:objects=[k.merge(list(k.PARTS),name)]
        k.bpy.context.view_layer.update();lo,_=k.bounds(objects)
        for o in objects:o.location.z-=float(lo[2])
        # Rebase main mesh to ground-level origin; moving component pivots stay local.
        objects[0]=k.merge([objects[0]],objects[0].name)
        k.export(name,'pickups',objects,'Ground-level origin; rotate root for idle pickup spin.',(4000,10000) if name.startswith('pickup_') else (200,2000))
