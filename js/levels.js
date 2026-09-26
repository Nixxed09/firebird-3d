// FIREBIRD 3D — levels.js
// Maps are ASCII grids. Every row in a map must be the same width.
//
// Walls:  # brick   % stone   M metal   T tech   H hellrock
//         D door    R red-key door     U blue-key door
//         X exit switch      S secret door (looks like a plain wall)
// Floor:  . empty floor
// Things: p player start     i imp        g gnasher     K ember knight
//         Y riley (final boss, one per level)
//         o exploding barrel t torch      * secret area marker
//         Torches come in pairs beside doors that matter (key doors, exits,
//         key rooms) so players learn to follow them.
//         h stimpack  + medkit  A armor   P phoenix orb
//         b bullet clip  a shell box  2 shotgun  r red key  u blue key
'use strict';

var LEVELS = [
  {
    name: 'E1M1: ASH GATES',
    floor: 'slab', ceil: 'ceilDark',
    par: 75,
    playerAngle: 0, // facing east
    map: [
      '#######################X######',
      '####################..t.t....#',
      '####################.........#',
      '####################..i..+...#',
      '####################....A....#',
      '####################.........#',
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
    ]
  },
  {
    name: 'E1M2: THE FURNACE',
    floor: 'tech', ceil: 'ceilTech',
    par: 120,
    playerAngle: -Math.PI / 2, // facing north
    map: [
      '###############X################',
      '############..t.t...#...########',
      '############g.......#*PA########',
      '############...+...g#...########',
      '###############R######S#########',
      '########......t.t.......########',
      '########................########',
      '########......b.........########',
      '#......#.i.T........T...#o....o#',
      '#......D................#......#',
      '#..i...#................D..o...#',
      '#......#....g...........#....i.#',
      '#t.t.g.#...T........T...#.o..o.#',
      '#r.a...#...i............#..g...#',
      '########................#.a..h.#',
      '###############..###############',
      '############.b....h.############',
      '############...p....############',
      '############........############',
      '############t......t############',
      '################################'
    ]
  },
  {
    name: 'E1M3: DEMON THRONE',
    floor: 'hell', ceil: 'ceilHell',
    par: 150,
    playerAngle: -Math.PI / 2, // facing north
    map: [
      'HHHHHHHHHHHHHHHXHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHH.t.t..HHHHHHHHHHHHH',
      'HHHHHHHHHHHHH..+...HHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHRHHHHHHHHHHHHHHHH',
      'HHHHHHt.......t.t........tHHHHHH',
      'HHHHHH.i................i.HHHHHH',
      'HHHHHH..o..............o.tH....H',
      'HH...H....................D..g.H',
      'HH*PAS.........K.........tH.r..H',
      'HH...H....g.........g.....H....H',
      'HHHHHH.a................b.HHHHHH',
      'HHHHHH...i..........i.....HHHHHH',
      'HHHHHHt..................tHHHHHH',
      'HHHHHH...a..h......+..b...HHHHHH',
      'HHHHHH....................HHHHHH',
      'HHHHHHHHHHHHHHHDHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHi...iHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHt........tHHHHHHHHHHH',
      'HHHHHHHHHHH...b..a...HHHHHHHHHHH',
      'HHHHHHHHHHH....p.....HHHHHHHHHHH',
      'HHHHHHHHHHH..........HHHHHHHHHHH',
      'HHHHHHHHHHHt........tHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH'
    ]
  },
  {
    // The finale. Riley waits in the arena at the top and has no exit switch:
    // beating her ends the episode.
    name: 'E1M4: RILEY\'S ARENA',
    floor: 'tech', ceil: 'ceilTech',
    par: 240,
    playerAngle: -Math.PI / 2, // facing north
    map: [
      'MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM',
      'MMMt........................tMMM',
      'MMM..h..........Y.........h..MMM',
      'MMM..........................MMM',
      'MMM....TT..............TT....MMM',
      'MMM....TT....o....o....TT....MMM',
      'MMM..........................MMM',
      'MMM.a......................a.MMM',
      'MMM....TT..............TT....MMM',
      'MMM....TT.......+......TT....MMM',
      'MMM..........................MMM',
      'MMMt.......o........o.......tMMM',
      'MMMMMMMMMMMMMMMUMMMMMMMMMMMMMMMM',
      'TTTTTTTTTTTTTT...TTTTTTTTTTTTTTT',
      'TTTTTTTTTTTTTTt.tTTTTTTTTTTTTTTT',
      'TTi.....o.......o.....iTTTTTTTTT',
      'TT.....................T..g...TT',
      'TT...g.............g..tTt....tTT',
      'TT.......MM...MM.......D....u.TT',
      'TT..b....MM.h.MM....a.tT.a..h.TT',
      'TT.....................Tt....tTT',
      'TT.................o...T..i...TT',
      'TT.....................TTTTTTTTT',
      'TTTTTTTTTTTTTTTDTTTTTTTTTTTTTTTT',
      'TTTTTTTTTTt.........tTTTTTTTTTTT',
      'TTTTTTTTTT..b..2..a..TTTTTTTTTTT',
      'TTTTTTPA*S...........TTTTTTTTTTT',
      'TTTTTTTTTT.....p.....TTTTTTTTTTT',
      'TTTTTTTTTTt...h.....tTTTTTTTTTTT',
      'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
    ]
  }
];

// sanity-check every map at load: equal row widths, exactly one player start
(function () {
  for (var L = 0; L < LEVELS.length; L++) {
    var m = LEVELS[L].map, w = m[0].length, starts = 0;
    for (var y = 0; y < m.length; y++) {
      if (m[y].length !== w)
        throw new Error(LEVELS[L].name + ' row ' + y + ' width ' + m[y].length + ' != ' + w);
      for (var x = 0; x < w; x++) if (m[y][x] === 'p') starts++;
    }
    if (starts !== 1) throw new Error(LEVELS[L].name + ' has ' + starts + ' player starts');
  }
})();

if (typeof module !== 'undefined') module.exports = LEVELS;
