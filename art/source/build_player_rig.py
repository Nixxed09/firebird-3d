"""Executed by build_firebird_art.py with its modeling helpers in scope.

Assemble the modular armor into a rigid-skinned character. All motion is
in-place; Unreal retains ownership of capsule movement and collision.
"""
from mathutils import Matrix, Quaternion

asset('SK_FB_Firebird', 'Articulated bronze Firebird, 21 bones and eleven in-place animation clips')
player_parts = {}


def armor_copy(source, at, bone, scale=(1, 1, 1), rotation=0):
    transform = Matrix.Translation(Vector(at)) @ Matrix.Rotation(rotation, 4, 'X') @ Matrix.Diagonal((*scale, 1))
    for original in ASSETS[source]['collection'].objects:
        if original.type != 'MESH':
            continue
        obj = original.copy()
        obj.data = original.data.copy()
        obj.name = 'Firebird ' + original.name
        CURRENT.objects.link(obj)
        obj.parent = PARENT
        obj.data.transform(transform @ original.matrix_local)
        obj.matrix_basis = Matrix.Identity(4)
        bm = bmesh.new(); bm.from_mesh(obj.data)
        # Baking the small grip bevels into meter-space floats can collapse
        # sub-micron edges. Weld those before skinning and exchange export.
        bmesh.ops.remove_doubles(bm, verts=list(bm.verts), dist=1e-6)
        bmesh.ops.dissolve_degenerate(bm, edges=list(bm.edges), dist=1e-6)
        bm.to_mesh(obj.data); bm.free()
        # Mirrored wing geometry needs its winding corrected before export.
        if transform.determinant() < 0:
            bm = bmesh.new(); bm.from_mesh(obj.data)
            bmesh.ops.reverse_faces(bm, faces=list(bm.faces))
            bm.to_mesh(obj.data); bm.free()
        assigned = bone(original.name) if callable(bone) else bone
        player_parts.setdefault(assigned, []).append(obj)


armor_copy('SM_FB_FirebirdTorso', (0, 0, 1.02), lambda n: 'pelvis' if 'Waist' in n else 'chest')
armor_copy('SM_FB_FirebirdHelmet', (0, 0, 1.56), 'head')
for s, side in ((-1, 'L'), (1, 'R')):
    armor_copy('SM_FB_FirebirdLeg', (s*.12, 0, .78),
               lambda n, side=side: ('foot.' if any(x in n for x in ('boot', 'toe')) else 'thigh.' if 'thigh' in n else 'shin.') + side)
    armor_copy('SM_FB_FirebirdArm', (s*.27, 0, 1.26),
               lambda n, side=side: ('upper_arm.' if 'Upper arm' in n else 'forearm.') + side)
    armor_copy('SM_FB_FeatherWing', (s*.19, .16, 1.22), 'wing.'+side, (s*.85, .85, .85))
    armor_copy('SM_FB_EmberGauntlet', (s*.27, -.23, .91), 'hand.'+side,
               (.8, .8, .8) if s > 0 else (1, 1, 1), math.radians(65) if s > 0 else 0)
armor_copy('SM_FB_SparkCaster', (.27, -.23, .93), 'hand.R', (.8, .8, .8))
# A continuous belt and overlapping hip plates close the gap at the waist.
player_parts.setdefault('pelvis', []).append(ring('Firebird waist belt', (0, 0, .79), .19, .035, .07, 'Bronze', 16))
for s, side in ((-1, 'L'), (1, 'R')):
    player_parts.setdefault('thigh.'+side, []).append(ico('Firebird hip tasset', (s*.17, -.025, .75), (.16, .24, .22), 'Bronze', 1))

bpy.ops.object.select_all(action='DESELECT')
data = bpy.data.armatures.new('Firebird_Player_Skeleton')
player_rig = bpy.data.objects.new('Firebird_Rig', data)
CURRENT.objects.link(player_rig); player_rig.parent = PARENT
player_rig.show_in_front = True
bpy.context.view_layer.objects.active = player_rig; player_rig.select_set(True)
bpy.ops.object.mode_set(mode='EDIT')
defs = [('root', (0, 0, 0), (0, 0, .2), None),
        ('pelvis', (0, 0, .78), (0, 0, .98), 'root'),
        ('chest', (0, 0, .98), (0, 0, 1.35), 'pelvis'),
        ('neck', (0, 0, 1.35), (0, 0, 1.43), 'chest'),
        ('head', (0, 0, 1.43), (0, 0, 1.75), 'neck')]
for s, side in ((-1, 'L'), (1, 'R')):
    defs += [('thigh.'+side, (s*.12, 0, .78), (s*.12, 0, .44), 'pelvis'),
             ('shin.'+side, (s*.12, 0, .44), (s*.12, 0, .13), 'thigh.'+side),
             ('foot.'+side, (s*.12, 0, .13), (s*.12, -.20, .09), 'shin.'+side),
             ('upper_arm.'+side, (s*.27, 0, 1.26), (s*.27, 0, .97), 'chest'),
             ('forearm.'+side, (s*.27, 0, .97), (s*.27, -.23, .93), 'upper_arm.'+side),
             ('hand.'+side, (s*.27, -.23, .93), (s*.27, -.39, .93), 'forearm.'+side),
             ('wing.'+side, (s*.19, .16, 1.22), (s*.48, .22, 1.7), 'chest'),
             ('toe.'+side, (s*.12, -.20, .09), (s*.12, -.23, .06), 'foot.'+side)]
for name, head, tail, parent in defs:
    bone = data.edit_bones.new(name); bone.head = head; bone.tail = tail
    if parent: bone.parent = data.edit_bones[parent]
bpy.ops.object.mode_set(mode='OBJECT')
for name, objects in player_parts.items():
    for obj in objects:
        obj.vertex_groups.clear()
        group = obj.vertex_groups.new(name=name)
        group.add(list(range(len(obj.data.vertices))), 1, 'REPLACE')
        mod = obj.modifiers.new('Articulated armor', 'ARMATURE'); mod.object = player_rig
        obj.parent = player_rig


def turn(bone, radians, axis=(1, 0, 0)):
    """Express a character-space axis in this bone's rest frame."""
    b = player_rig.pose.bones[bone]
    local_axis = b.bone.matrix_local.to_3x3().inverted() @ Vector(axis)
    b.rotation_quaternion = b.rotation_quaternion @ Quaternion(local_axis, radians)


def root_height(height):
    b = player_rig.pose.bones['root']
    b.location = b.bone.matrix_local.to_3x3().inverted() @ Vector((0, 0, height))


player_clips = [('Idle', 61), ('Run', 25), ('Back', 25), ('StrafeL', 25), ('StrafeR', 25),
                ('Crouch', 33), ('Jump', 19), ('Fall', 25), ('Down', 31), ('Punch', 13), ('Fire', 9)]
player_rig.animation_data_create()
for name, frames in player_clips:
    action = bpy.data.actions.new('A_FB_Firebird_'+name)
    action.use_fake_user = True; player_rig.animation_data.action = action
    for frame in range(1, frames+1):
        phase = (frame-1)/(frames-1); wave = math.sin(phase*math.tau)
        for b in player_rig.pose.bones:
            b.rotation_mode = 'QUATERNION'; b.rotation_quaternion = (1, 0, 0, 0)
            b.location = (0, 0, 0); b.scale = (1, 1, 1)
        turn('chest', .018*wave)
        for s, side in ((-1, 'L'), (1, 'R')):
            turn('wing.'+side, s*(.08+.035*wave), (0, 1, 0))
        if name in ('Run', 'Back', 'StrafeL', 'StrafeR'):
            backward = -1 if name == 'Back' else 1
            strafe = name.startswith('Strafe')
            for s, side in ((-1, 'L'), (1, 'R')):
                swing = wave*s
                turn('thigh.'+side, -.63*swing*backward if not strafe else -.16*swing)
                turn('shin.'+side, .10+.95*max(0, -swing))
                turn('foot.'+side, -.15-.24*max(0, -swing))
                if strafe:
                    turn('thigh.'+side, .38*swing*(-1 if name == 'StrafeL' else 1), (0, 1, 0))
                turn('upper_arm.'+side, .16*swing if side == 'L' else .045*swing)
                turn('wing.'+side, .045*s*math.cos(phase*math.tau), (0, 1, 0))
            turn('chest', .12)
            turn('pelvis', .045*wave, (0, 0, 1))
            root_height(.022*(1-math.cos(phase*math.tau*2)))
        elif name == 'Crouch':
            root_height(-.50)
            for s, side in ((-1, 'L'), (1, 'R')):
                turn('thigh.'+side, -1.35+.06*s*wave)
                turn('shin.'+side, 2.7-.06*s*wave)
                turn('foot.'+side, -1.35)
                turn('wing.'+side, s*1.15, (0, 1, 0))
            turn('chest', 1.3); turn('neck', -.25)
            turn('upper_arm.R', -.7); turn('forearm.R', -.6)
            turn('upper_arm.L', -.4); turn('forearm.L', -.4)
        elif name in ('Jump', 'Fall'):
            for s, side in ((-1, 'L'), (1, 'R')):
                turn('thigh.'+side, -.55 if s < 0 else .12)
                turn('shin.'+side, .85 if s < 0 else .5)
                turn('foot.'+side, -.25)
                turn('wing.'+side, s*.4, (0, 1, 0))
            turn('chest', .15 if name == 'Jump' else -.08)
        elif name == 'Down':
            root_height(-.42)
            for side in ('L', 'R'):
                turn('thigh.'+side, -.65); turn('shin.'+side, 1.85); turn('foot.'+side, -.55)
            turn('chest', .65); turn('head', .25)
        elif name == 'Punch':
            hit = math.sin(math.pi*phase)**2
            turn('upper_arm.L', -1.15*hit)
            turn('forearm.L', .95*hit)
            turn('chest', -.18*hit, (0, 0, 1))
            turn('wing.L', -.18*hit, (0, 1, 0))
        elif name == 'Fire':
            kick = math.sin(math.pi*phase)*math.exp(-phase*2)
            turn('upper_arm.R', -.17*kick); turn('forearm.R', -.16*kick)
            turn('chest', -.04*kick)
        for b in player_rig.pose.bones:
            b.keyframe_insert('rotation_quaternion', frame=frame, group=b.name)
            b.keyframe_insert('location', frame=frame, group=b.name)
    track = player_rig.animation_data.nla_tracks.new(); track.name = action.name
    track.strips.new(action.name, 1, action); track.mute = True
player_rig.animation_data.action = None
for b in player_rig.pose.bones:
    b.rotation_quaternion = (1, 0, 0, 0); b.location = (0, 0, 0)
LIB.frame_set(1)
