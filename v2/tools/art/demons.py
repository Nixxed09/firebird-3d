"""Four original forge creatures, weighted component meshes and six action clips."""
import math
import bpy
import kit as k
from kit import box,ell,rod,horn,ring

def humanoid(kind):
    knight=kind=='ember_knight';holo=kind=='riley'
    skin='holo' if holo else 'iron' if knight else 'skin'
    accent='cyan' if holo else 'ember';body='spine'
    # Shared anatomy ratios; each character gets distinct silhouette and face treatment.
    ell('Ribcage',(0,.04,1.02),(.29,.20,.33),skin,body)
    ell('Pelvis',(0,.03,.69),(.20,.16,.18),'black' if knight else skin,'root')
    ell('Neck',(0,-.07,1.3),(.12,.12,.15),skin,'head')
    ell('Face',(0,-.13,1.43),(.205,.19,.20),skin,'head')
    if not holo:
        for side in (-1,1):
            horn('Swept furnace horn',[(side*.14,-.10,1.54),(side*.24,.01,1.68),(side*.29,.14,1.77),(side*.25,.21,1.86)],[.085,.065,.032,.003],'brass' if knight else 'bone','head')
            o=box('Heavy brow',(side*.10,-.294,1.49),(.19,.075,.06),'iron' if knight else 'char','head');o.rotation_euler.y=side*.17
            ell('Hot eye',(side*.105,-.314,1.45),(.063,.023,.03),accent,'head',12,8)
        ell('Dark maw',(0,-.298,1.345),(.13,.035,.055),'black','head')
        for j in range(6):
            x=(j-2.5)*.04
            rod('Fang',(x,-.33,1.38),(x,-.34,1.325),.017,'bone','head',.002,8)
        if knight:
            box('Visor',(0,-.327,1.456),(.28,.019,.027),accent,'head')
            box('Brow crest',(0,-.17,1.62),(.07,.26,.16),'brass','head')
    else:
        box('Friendly visor',(0,-.293,1.445),(.31,.045,.095),'tell','head',.025)
        for side in (-1,1):
            rod('Ear pod',(side*.195,-.10,1.43),(side*.22,-.10,1.43),.065,'brass','head',n=16)
        box('Chin guard',(0,-.255,1.32),(.19,.05,.05),'iron','head')
        for j in range(3):box('Crown projection',(0,-.03+j*.07,1.635),(.13,.021,.022),'cyan','head',.006)
    for side,label in ((-1,'L'),(1,'R')):
        arm='arm.'+label;leg='leg.'+label
        ell('Deltoid',(side*.31,.015,1.19),(.16,.165,.18),skin,arm)
        rod('Upper arm',(side*.34,0,1.15),(side*.43,-.055,.94),.10,skin,arm,.085,16)
        ell('Elbow',(side*.43,-.055,.94),(.095,.095,.095),'char' if not holo else 'cyan',arm,12,8)
        rod('Forearm',(side*.43,-.055,.94),(side*.49,-.13,.72),.115,skin,arm,.075,16)
        ell('Palm',(side*.49,-.14,.68),(.09,.08,.11),skin,arm,12,8)
        for j in range(3):
            x=side*.49+(j-1)*.06
            horn('Hooked finger',[(x,-.16,.64),(x,-.19,.57),(x,-.245,.56)],[.025,.019,.002],'edge' if holo else 'bone',arm,8)
        rod('Thigh',(side*.12,.025,.70),(side*.17,.085,.39),.115,skin,leg,.08,16)
        ell('Knee',(side*.17,.03,.38),(.105,.105,.105),'iron' if knight else skin,leg,12,8)
        rod('Shin',(side*.17,.09,.35),(side*.17,.04,.10),.075,skin,leg,.065,16)
        box('Split boot',(side*.17,-.075,.08),(.20,.33,.16),'iron' if knight else 'char' if not holo else 'holo',leg)
        if not holo:
            for j in (-1,1):rod('Toe talon',(side*.17+j*.055,-.19,.055),(side*.17+j*.055,-.28,.025),.027,'bone',leg,.002,8)
        if knight or holo:
            box('Shoulder plate',(side*.34,0,1.27),(.34,.32,.16),'iron' if knight else 'holo',arm,.04)
            box('Vambrace',(side*.465,-.09,.84),(.22,.21,.22),'brass' if knight else 'iron',arm,.03)
            box('Shin guard',(side*.17,-.035,.26),(.17,.10,.28),'iron',leg,.03)
            for z in (.19,.29):box('Shin light',(side*.17,-.091,z),(.10,.012,.022),accent,leg,.003)
            if knight:
                for j in range(3):rod('Pauldron chimney',(side*(.25+j*.10),.04,1.34),(side*(.27+j*.12),.045,1.50-j*.03),.047,'char',arm,.02,8)
    if knight:
        for side in (-1,1):
            for j in range(3):
                o=box('Layered cuirass',(side*.16,-.133,1.20-j*.12),(.28,.15,.11),'iron',body,.018);o.rotation_euler.y=side*.14
                box('Cuirass ember seam',(side*.17,-.215,1.15-j*.12),(.17,.016,.021),'ember',body,.002)
        ring('Core bezel',(0,-.224,1.02),.125,.025,'brass',body,(math.pi/2,0,0))
        ell('Furnace core',(0,-.238,1.02),(.10,.035,.10),'ember',body,16,10)
        for x in (-.052,0,.052):box('Core grille',(x,-.279,1.02),(.018,.018,.19),'iron',body,.003)
    elif holo:
        box('Chest harness',(0,-.15,1.08),(.40,.12,.30),'iron',body,.03)
        for side in (-1,1):
            box('Harness lamp',(side*.135,-.216,1.13),(.04,.012,.16),'cyan',body,.006)
        # Phoenix chevron emblem, a geometric original studio motif.
        for side in (-1,1):
            o=box('Phoenix wing',(side*.046,-.225,1.065),(.10,.018,.022),'gold',body,.003);o.rotation_euler.y=side*.45
        for j in range(4):ring('Projection bands',(0,.02,.86+j*.115),.215,.006,'cyan',body,seg=20)
    else:
        for j in range(4):horn('Back ember spine',[(0,.19,1.18-j*.12),(0,.30,1.24-j*.12),(0,.39,1.28-j*.12)],[.065,.035,.002],'char',body,8)
        for side in (-1,1):
            for j in range(3):
                o=box('Rib ember fissure',(side*.15,-.15,1.15-j*.09),(.14,.025,.022),'ember',body,.002);o.rotation_euler.y=side*.30

def gnasher():
    ell('Coal belly',(0,.12,.79),(.52,.36,.45),'char','spine',20,12)
    ell('Upper muzzle',(0,-.12,1.02),(.51,.27,.26),'skin','head',20,12)
    ell('Mouth cavity',(0,-.34,.80),(.45,.13,.24),'black','head',20,12)
    ell('Lower jaw',(0,-.15,.55),(.47,.29,.13),'skin','jaw',20,10)
    for j in range(11):
        x=(j-5)*.073; yy=-.395-.07*(1-(x/.44)**2)
        rod('Upper tooth',(x,yy,.965),(x,yy-.015,.78+abs(x)*.17),.033,'bone','head',.003,8)
        rod('Lower tooth',(x,yy,.585),(x,yy-.015,.74-abs(x)*.10),.028,'bone','jaw',.003,8)
    for side,label in ((-1,'L'),(1,'R')):
        ell('Eye socket',(side*.26,-.326,1.16),(.15,.075,.09),'char','head',12,8)
        ell('Glowing eye',(side*.27,-.391,1.16),(.09,.024,.044),'ember','head',12,8)
        horn('Side horn',[(side*.43,.03,1.13),(side*.58,.08,1.28),(side*.52,.09,1.40)],[.09,.055,.003],'bone','head')
        leg='leg.'+label
        ell('Haunch',(side*.34,.07,.35),(.20,.20,.25),'skin',leg,16,10)
        box('Stomping foot',(side*.35,-.11,.11),(.33,.42,.22),'char',leg,.04)
        for j in range(3):rod('Foot tooth',(side*.35+(j-1)*.095,-.29,.10),(side*.35+(j-1)*.095,-.38,.04),.035,'bone',leg,.003,8)
    for j in range(5):
        ell('Back clinker',((j-2)*.18,.385,.88),(.085,.065,.14),'skin','spine',12,8)
    for j in range(3):box('Belly ember',(0,-.20,.36+j*.045),(.22,.045,.015),'ember','spine',.003)

def build():
    for kind,height in [('imp',1.7),('gnasher',1.4),('ember_knight',2.6),('riley',1.9)]:
        k.reset()
        if kind=='gnasher':gnasher()
        else:humanoid(kind)
        body=k.merge(list(k.PARTS),'body')
        # Scale authored rest anatomy exactly to requested standing height.
        k.bpy.context.view_layer.update();lo,hi=k.bounds([body]);scale=height/(hi[2]-lo[2])
        for v in body.data.vertices:v.co.z-=float(lo[2]);v.co*=scale
        def p(v):return (v[0]*scale,v[1]*scale,(v[2]-float(lo[2]))*scale)
        bones={
          'root':(p((0,0,.65)),p((0,0,.85)),None),
          'spine':(p((0,0,.8)),p((0,0,1.2)),'root'),
          'head':(p((0,0,1.2)),p((0,0,1.5)),'spine'),
          'jaw':(p((0,-.03,.63)),p((0,-.25,.59)),'head'),
          'arm.L':(p((-.29,0,1.22)),p((-.45,-.08,.85)),'spine'),
          'arm.R':(p((.29,0,1.22)),p((.45,-.08,.85)),'spine'),
          'leg.L':(p((-.13,0,.65)),p((-.17,0,.12)),'root'),
          'leg.R':(p((.13,0,.65)),p((.17,0,.12)),'root'),
        }
        arm=k.rig(bones);mod=body.modifiers.new('Skin','ARMATURE');mod.object=arm
        k.animate(arm,kind);objects=[body,arm]
        if kind=='riley':
            shield=ell('shield',(0,0,.95),(.78,.62,.95),'shield',None,20,12)
            shield['activation']='Toggle shield.visible for invulnerability; separate translucent gold bubble.'
            objects.append(shield)
        k.export(kind,'demons',objects,'Six in-place clips; +Z forward. Riley tell material supports runtime white emissive flash.' if kind=='riley' else 'Six in-place clips; windup precedes attack; no gore.',(3000,8000))
