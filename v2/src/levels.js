// FIREBIRD 3D v2 levels: the classic ASCII maps (js/levels.js) plus height.
// heights: one digit per cell, floor at digit x 0.25 cells (0.5 m); 0-9 then a-z.
// 'L' in a map is a lift: it rests at its lowest neighbour and rises to its own height.
import CLASSIC from '../../js/levels.js';

var E1M1 = {
  name: 'E1M1: ASH GATES', floor: 'slab', ceil: 'ceilDark', par: 240, playerAngle: 0, ceilHeight: 2.5,
  // Riley waits at the top to spar: she only uses what this level has taught,
  // taps out early, and remembers how you fought for the rematch in E1M4
  boss: {
    sparring: true, hpScale: 0.4, moves: ['volley', 'lead', 'flank', 'close', 'backoff', 'seek'],
    intro: "THERE YOU ARE! LET'S SPAR. I'LL WATCH HOW YOU FIGHT. READY?"
  },
  // Riley on the radio: each line plays once, when you walk into its box [x0, z0, x1, z1]
  triggers: [
    { box: [2, 25, 8, 30], say: "HI! I'M RILEY. I'M WAITING FOR YOU AT THE TOP. LOOK AROUND WITH THE MOUSE, MOVE WITH WASD." },
    { box: [7, 26, 9, 28], say: "DOORS OPEN WITH E. GO ON, TRY IT." },
    { box: [15, 23, 28, 29], say: "SEE THE SHOTGUN UP THERE? JUMP WITH SPACE." },
    { box: [14, 20, 28, 22], say: "NICE VIEW. THE BLUE KEYCARD IS DOWN IN THE HALL. THE BLUE DOOR IS ACROSS FROM YOU." },
    { box: [2, 17, 5, 21], say: "GOT IT? NOW THE BLUE DOOR. THE LIFT BEHIND IT BRINGS YOU UP TO ME." },
    { box: [20, 11, 28, 15], say: "LAST STOP. GRAB WHAT YOU NEED. WHEN MY VISOR FLASHES WHITE, I'M ABOUT TO SHOOT. MOVE!" }
  ],
  map: [
      '##############################',
      '##############.t...........t.#',
      '##############...............#',
      '##############....T..Y..T....#',
      '##############....T.....T....#',
      '##############.h...........h.#',
      '##############...............#',
      '##############....T.....T....#',
      '##############.......a.......#',
      '##############........t.t....#',
      '#######################D######',
      '####################..t.t....#',
      '####################.........#',
      '####################.....+...#',
      '####################....A....#',
      '####################...L.....#',
      '#######################U######',
      '##....................t.t...##',
      '##.t......%%......%%........##',
      '##u...g......i..............##',
      '##.t.......h.....g..........##',
      '##..........................##',
      '####################D#########',
      '###*Pa#########....t.t......##',
      '####S##########.....i.....o.##',
      '##b......######..........io.##',
      '##.......######......h......##',
      '##..p....D........2.........##',
      '##.......######..o..........##',
      '##.......######.t.........t.##',
      '##...h...#####################',
      '##############################'
  ],
  heights: [
      '000000000000000000000000000000',
      '00000000000000aa88888888888aa0',
      '00000000000000aa88888888888aa0',
      '00000000000000aa88888888888aa0',
      '00000000000000aa88888888888aa0',
      '00000000000000aa88888888888aa0',
      '00000000000000aa88888888888aa0',
      '00000000000000aa88888888888aa0',
      '00000000000000aa88888888888aa0',
      '00000000000000aa88888888888aa0',
      '000000000000000000000000000000',
      '000000000000000000008888888880',
      '000000000000000000008888888880',
      '000000000000000000008888888880',
      '000000000000000000008888888880',
      '000000000000000000008888888880',
      '000000000000000000000000000000',
      '000000000000000000000000000000',
      '000000000000000000000000000000',
      '000000000000000000000000000000',
      '000000000001234444444444444400',
      '000000000001234444444444444400',
      '000000000000000000000000000000',
      '000000000000000444444444444440',
      '000000000000000444444444444440',
      '000000000000000444444444444440',
      '000000000000000446664444444440',
      '000000000012344446664444444440',
      '000000000000000446664444444440',
      '000000000000000444444444444440',
      '000000000000000000000000000000',
      '000000000000000000000000000000'
  ],
  // ceilings: absolute height per cell, same digits as heights ('.' = ceilHeight, 5 m)
  ceilings: [
      '..............................',
      '..............qqqqqqqqqqqqqqq.',
      '..............qqqqqqqqqqqqqqq.',
      '..............qqqqqqqqqqqqqqq.',
      '..............qqqqqqqqqqqqqqq.',
      '..............qqqqqqqqqqqqqqq.',
      '..............qqqqqqqqqqqqqqq.',
      '..............qqqqqqqqqqqqqqq.',
      '..............qqqqqqqqqqqqqqq.',
      '..............qqqqqqqqqqqqqqq.',
      '..............................',
      '....................iiiiiiiii.',
      '....................iiiiiiiii.',
      '....................iiiiiiiii.',
      '....................iiiiiiiii.',
      '....................iiiiiiiii.',
      '..............................',
      '..gggggggggggggggggggggggggg..',
      '..gggggggggggggggggggggggggg..',
      '..gggggggggggggggggggggggggg..',
      '..gggggggggggggggggggggggggg..',
      '..gggggggggggggggggggggggggg..',
      '..............................',
      '...............eeeeeeeeeeeeee.',
      '...............eeeeeeeeeeeeee.',
      '...............eeeeeeeeeeeeee.',
      '...............eeeeeeeeeeeeee.',
      '.........cccccceeeeeeeeeeeeee.',
      '...............eeeeeeeeeeeeee.',
      '...............eeeeeeeeeeeeee.',
      '..............................',
      '..............................'
  ]
};

// Place the later weapons along the main route, with ammo on both sides of
// the pickup. Copy the classic maps before changing them.
function place(L, marks) {
  var copy = Object.assign({ ceilHeight: 2 }, L, { map: L.map.slice() });
  marks.forEach(function (m) {
    var x = m[0], z = m[1], row = copy.map[z];
    if (!row || row[x] !== '.') throw new Error('Weapon pickup must be on an open floor at ' + x + ',' + z);
    copy.map[z] = row.slice(0, x) + m[2] + row.slice(x + 1);
  });
  return copy;
}
export var LEVELS = [E1M1].concat(CLASSIC.slice(1).map(function (L, i) {
  if (i === 0) return place(L, [[18, 7, '3']]);
  if (i === 1) return place(L, [[16, 23, '4'], [19, 23, 'k'], [16, 13, 'k']]);
  return place(L, []);
}));
