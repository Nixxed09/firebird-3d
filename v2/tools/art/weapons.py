"""Original forge-tool firearms. -Y muzzle direction, local grip at the origin."""
import math
import kit as k
from kit import box,ell,rod,ring

def hand(side=1,forward=0,fist=False):
    x=side*.19 if fist else (.10 if side==1 else -.12)
    y=forward
    rod('Sleeve',(x,y+.43,-.19),(x,y+.14,-.11),.105,'cloth',r2=.085,n=20)
    for j in range(3):ring('Sleeve seam',(x,y+.20+j*.07,-.135),.09,.009,'black',rot=(math.pi/2,0,0),seg=20 if fist else 12)
    rod('Cuff',(x,y+.10,-.10),(x,y+.17,-.12),.09,'leather',n=20)
    ell('Glove palm',(x,y+.035,-.07),(.092,.115,.066),'leather',seg=20 if fist else 14,rings=12 if fist else 8)
    box('Knuckle armour',(x,y-.028,-.034),(.16,.06,.065),'iron',bevel=.016)
    for j in range(4):
        xx=x+(j-1.5)*.038
        ell('Finger',(xx,y-.048,-.08),(.023,.041,.042),'leather',seg=12 if fist else 10,rings=8 if fist else 6)
        box('Knuckle pad',(xx,y-.066,-.04),(.03,.027,.022),'brass',bevel=.005)
    ell('Thumb',(x-side*.078,y+.012,-.091),(.038,.06,.036),'leather',seg=12,rings=8)
    for j in range(3):box('Sleeve stitch',(x+.093*side,y+.22+j*.045,-.13),(.004,.025,.015),'brass',bevel=.001)

def bore(x,y,z,r=.045,length=.3,n=20):
    rod('Barrel jacket',(x,y+length,z),(x,y,z),r,'iron',n=n)
    ring('Muzzle rim',(x,y-.005,z),r*.88,r*.12,'edge',rot=(math.pi/2,0,0),seg=n)
    rod('Recessed bore',(x,y-.002,z),(x,y+.009,z),r*.72,'black',n=n)

def grip():
    o=box('Grip',(0,.015,-.075),(.105,.13,.23),'leather',bevel=.025);o.rotation_euler.x=-.18
    for j in range(5):box('Grip rib',(0,.084,-.16+j*.035),(.108,.015,.014),'black',bevel=.003)
    # Three bars leave a real open trigger-guard silhouette.
    box('Guard front',(0,-.115,-.065),(.028,.025,.10),'iron',bevel=.006)
    box('Guard base',(0,-.064,-.115),(.035,.13,.025),'iron',bevel=.006)
    o=box('Trigger',(0,-.071,-.045),(.019,.022,.07),'brass',bevel=.006);o.rotation_euler.x=.3

def build_gun(kind,hands=True):
    static=[];moving=[]
    if kind=='fist':
        hand(1,0,True);hand(-1,.09,True)
        return [k.merge(list(k.PARTS),'fists')]
    grip()
    box('Receiver',(0,-.075,.084),(.17,.35,.15),'iron',bevel=.023)
    for side in (-1,1):
        box('Receiver inset',(side*.086,-.055,.10),(.01,.19,.065),'black',bevel=.003)
        for j in range(3):rod('Receiver pin',(side*.09,-.12+j*.075,.10),(side*.10,-.12+j*.075,.10),.012,'brass',n=10)
    box('Phoenix identifier',(0,.108,.13),(.065,.018,.03),'ember',bevel=.004)
    if kind=='pistol':
        static=list(k.PARTS);start=len(k.PARTS)
        box('Forged slide',(0,-.13,.18),(.155,.47,.12),'edge',bevel=.02)
        box('Slide top recess',(0,-.12,.244),(.085,.30,.007),'black',bevel=.002)
        for side in (-1,1):
            for j in range(6):box('Slide serration',(side*.079,.038-j*.025,.183),(.008,.009,.070),'black',bevel=.002)
        box('Front sight',(0,-.335,.26),(.025,.028,.035),'ember',bevel=.004)
        for side in (-1,1):box('Rear sight',(side*.045,.065,.259),(.022,.026,.034),'brass',bevel=.004)
        moving=k.PARTS[start:];bore(0,-.37,.17,.046,.14)
        static+=k.PARTS[start+len(moving):];pivot=(0,-.13,.18);node='slide'
    elif kind=='shotgun':
        box('Breech',(0,-.24,.16),(.26,.25,.19),'brass',bevel=.028)
        for x in (-.083,.083):bore(x,-.94,.17,.065,.67)
        box('Top bridge',(0,-.59,.234),(.042,.67,.033),'iron',bevel=.007)
        box('Front bead',(0,-.9,.263),(.022,.023,.023),'ember',bevel=.004)
        rod('Magazine tube',(0,-.78,.05),(0,-.21,.05),.041,'iron',n=20)
        static=list(k.PARTS);start=len(k.PARTS)
        box('Pump shell',(0,-.56,-.01),(.23,.27,.12),'wood',bevel=.025)
        for j in range(7):box('Pump rib',(0,-.45-j*.032,-.022),(.242,.013,.108),'black',bevel=.004)
        for side in (-1,1):box('Action rail',(side*.09,-.37,.03),(.018,.30,.018),'edge',bevel=.003)
        moving=k.PARTS[start:];pivot=(0,-.56,-.01);node='pump'
    elif kind=='chaingun':
        box('Motor housing',(0,-.24,.17),(.36,.36,.32),'iron',bevel=.04)
        for side in (-1,1):
            rod('Feed drum',(side*.17,-.18,.10),(side*.30,-.18,.10),.18,'brass',n=24)
            ring('Drum trim',(side*.305,-.18,.10),.14,.018,'black',rot=(0,math.pi/2,0),seg=20)
        for j in range(5):box('Motor vent',(0,-.15-j*.039,.338),(.24,.013,.012),'black',bevel=.003)
        static=list(k.PARTS);start=len(k.PARTS)
        for j in range(6):
            a=j*math.tau/6;bore(math.cos(a)*.115,-.94,.17+math.sin(a)*.115,.04,.61,n=12)
        for y in (-.45,-.83):
            ring('Barrel brace',(0,y,.17),.16,.024,'brass',rot=(math.pi/2,0,0),seg=24)
            for j in range(6):
                a=j*math.tau/6
                rod('Brace spoke',(0,y,.17),(.14*math.cos(a),y,.17+.14*math.sin(a)),.018,'iron',n=8)
        rod('Central spindle',(0,-.85,.17),(0,-.36,.17),.033,'black',n=16)
        moving=k.PARTS[start:];pivot=(0,-.50,.17);node='barrels'
    else:
        box('Shoulder frame',(0,.16,.05),(.28,.25,.25),'iron',bevel=.04)
        box('Back cushion',(0,.295,.07),(.25,.04,.22),'leather',bevel=.018)
        for side in (-1,1):box('Carry rail',(side*.13,-.19,.39),(.035,.35,.035),'brass',bevel=.007)
        box('Sight housing',(.21,-.19,.28),(.095,.15,.10),'black',bevel=.014)
        box('Sight emitter',(.21,-.272,.28),(.055,.012,.05),'cyan',bevel=.006)
        static=list(k.PARTS);start=len(k.PARTS)
        bore(0,-.90,.20,.17,1.06)
        for y in (-.82,-.58,-.24,.09):ring('Tube reinforcing band',(0,y,.20),.176,.017,'brass',rot=(math.pi/2,0,0),seg=24)
        for side in (-1,1):
            for j in range(6):box('Tube heat slot',(side*.166,-.41+j*.055,.21),(.008,.024,.07),'black',bevel=.002)
        box('Tube caution stripe',(0,-.64,.367),(.09,.075,.012),'red',bevel=.003)
        moving=k.PARTS[start:];pivot=(0,-.32,.20);node='tube'
    if hands:
        start=len(k.PARTS);hand(1,0)
        if kind!='pistol':hand(-1,-.47)
        static+=k.PARTS[start:]
    base=k.merge(static,'weapon');part=k.merge(moving,node,pivot)
    return [base,part]

def build():
    for kind in ('fist','pistol','shotgun','chaingun','rocket_launcher'):
        k.reset();objects=build_gun(kind)
        k.export(kind,'weapons',objects,'Grip origin; muzzle +Z. Gloved hands and sleeves. Animate named moving node in local coordinates.',(4000,10000))
