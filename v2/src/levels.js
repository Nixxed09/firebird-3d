// FIREBIRD 3D v2 levels: the classic ASCII maps (js/levels.js) plus height.
// heights: one digit per cell, floor at digit x 0.25 cells (0.5 m); 0-9 then a-z.
// 'L' in a map is a lift: it rests at its lowest neighbour and rises to its own height.
import { E1M2 } from './levels/e1m2.js';
import { E1M3 } from './levels/e1m3.js';
import { E1M4 } from './levels/e1m4.js';

var E1M1 = {
  name: 'E1M1: ASH GATES', floor: 'slab', ceil: 'ceilDark', par: 240, playerAngle: 0, ceilHeight: 2.5,
  // Riley waits at the top to spar: she only uses what this level has taught,
  // taps out early, and remembers how you fought for the rematch in E1M4
  boss: {
    sparring: true, hpScale: 0.65, moves: ['volley', 'lead', 'flank', 'close', 'backoff', 'seek'],
    intro: "THERE YOU ARE! LET'S SPAR. I'LL WATCH HOW YOU FIGHT. READY?"
  },
  // Riley on the radio: each line plays once, when you walk into its box [x0, z0, x1, z1]
  // the shortcut home (codex U8, contract S5): a stone gate between the hall and the start room sinks
  // once you reach the hall, so it opens from the far side
  events: [
    { when: { enter: [2, 17, 19, 21] }, do: [{ lower: [7, 22, 7, 24], to: 0, speed: 1.2, look: 1 }, { say: "HEAR THAT? A SHORTCUT BACK TO WHERE YOU STARTED JUST OPENED." }] },
    // the sparring match is the level's climax (codex U12). The first 16 s are Riley alone, which teaches
    // "keep moving" for her Trial (M4); then a bigger wave of Hollows joins and the fight peaks
    { when: { enter: [15, 1, 28, 8] }, do: [{ after: 16, do: [{ say: "HOLLOWS! THEY HEARD US. KEEP GOING, WE CAN TAKE THEM TOO." }, { shake: 2 },
      { wave: 'sparAdds', spawn: [{ kind: 'imp', x: 15, z: 2 }, { kind: 'imp', x: 28, z: 2 }, { kind: 'imp', x: 21, z: 1 }, { kind: 'gnasher', x: 21, z: 8 }] }] }] }
  ],
  triggers: [
    { box: [2, 25, 8, 30], say: "HI! I'M RILEY. I'M WAITING FOR YOU AT THE TOP. LOOK AROUND WITH THE MOUSE, MOVE WITH WASD, THEN HEAD FOR THAT DOOR AHEAD." },
    { box: [7, 26, 9, 28], say: "DOORS OPEN WITH E. GO ON, TRY IT." },
    { box: [15, 23, 28, 29], say: "SEE THE BELL BLASTER UP THERE? JUMP WITH SPACE." },
    { box: [14, 20, 28, 22], say: "NICE VIEW. THE BLUE KEYSTONE IS DOWN IN THE HALL. THE BLUE DOOR IS ACROSS FROM YOU." },
    { box: [2, 17, 5, 21], say: "GOT IT? NOW THE BLUE DOOR. THE LIFT BEHIND IT BRINGS YOU UP TO ME." },
    { box: [20, 11, 28, 15], say: "LAST STOP. GRAB WHAT YOU NEED. WHEN MY VISOR FLASHES WHITE, I'M ABOUT TO SHOOT. MOVE!" }
  ],
  map: [
      '##############################',
      '##############.t...........t.#',
      '##############......a........#',
      '##############....T..Y..T....#',
      '##############....T.....T....#',
      '##############.h...........h.#',
      '##############...............#',
      '##############....T.....T....#',
      '##############..b....a....b..#',
      '##############........t.t....#',
      '#######################D######',
      '####################..t.t....#',
      '####################.........#',
      '####################.....+...#',
      '####################....A....#',
      '####################...L.....#',
      '#######################U######',
      '##....................t.t...##',
      '##.t......%%......%%..g.....##',
      '##u...g......................##',
      '##.t.......h................##',
      '##..........................##',
      '#######.############D#########',
      '###*Pa#.#######....t.t......##',
      '####S##.#######...........o.##',
      '##.......######..........io.##',
      '##.....b.######......h......##',
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
      '0000000a0000000000000000000000',
      '0000000a0000000444444444444440',
      '0000000a0000000444444444444440',
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

// every level is built to the Level Design Codex by tools/build_e1m*.py (E1M1 is authored above)
export var LEVELS = [E1M1, E1M2, E1M3, E1M4];
