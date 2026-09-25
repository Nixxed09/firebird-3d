// FIREBIRD 3D — art.js
// All textures, sprites, faces and fonts are generated in code at load time.
// No image files needed, so the game runs straight from index.html.
'use strict';

var ART = (function () {

  // ---- helpers -------------------------------------------------------------

  // '#rrggbb' -> 0xAABBGGRR (little-endian RGBA for Uint32 framebuffers)
  function hex(c) {
    var n = parseInt(c.slice(1), 16);
    var r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
    return (0xff000000 | (b << 16) | (g << 8) | r) >>> 0;
  }

  function finish(w, h, data) {
    var canvas = document.createElement('canvas');
    canvas.width = w; canvas.height = h;
    var ctx = canvas.getContext('2d');
    var img = ctx.createImageData(w, h);
    new Uint32Array(img.data.buffer).set(data);
    ctx.putImageData(img, 0, 0);
    return { w: w, h: h, data: data, canvas: canvas };
  }

  // Build a sprite from ASCII rows. legend maps chars to '#rrggbb'.
  // opts.mirror doubles the width by mirroring each row.
  function sprite(rows, legend, opts) {
    opts = opts || {};
    var mirror = !!opts.mirror;
    var hw = rows[0].length;
    for (var i = 0; i < rows.length; i++) {
      if (rows[i].length !== hw) throw new Error('sprite row ' + i + ' length ' + rows[i].length + ' != ' + hw);
    }
    var w = mirror ? hw * 2 : hw, h = rows.length;
    var data = new Uint32Array(w * h);
    for (var y = 0; y < h; y++) {
      var row = rows[y];
      for (var x = 0; x < hw; x++) {
        var col = legend[row[x]];
        if (!col) continue;
        var u = hex(col);
        data[y * w + x] = u;
        if (mirror) data[y * w + (w - 1 - x)] = u;
      }
    }
    return finish(w, h, data);
  }

  // deterministic value noise
  function n2(x, y, seed) {
    var n = (x | 0) * 374761393 + (y | 0) * 668265263 + (seed | 0) * 974711;
    n = (n ^ (n >> 13)) * 1274126177;
    return (((n ^ (n >> 16)) >>> 0) % 1000) / 1000;
  }

  function mix(a, b, t) { // mix two '#rrggbb' colors
    var A = parseInt(a.slice(1), 16), B = parseInt(b.slice(1), 16);
    var r = ((A >> 16) & 255) + (((B >> 16) & 255) - ((A >> 16) & 255)) * t;
    var g = ((A >> 8) & 255) + (((B >> 8) & 255) - ((A >> 8) & 255)) * t;
    var bl = (A & 255) + ((B & 255) - (A & 255)) * t;
    return (0xff000000 | ((bl & 255) << 16) | ((g & 255) << 8) | (r & 255)) >>> 0;
  }

  // ---- wall textures (64x64) ----------------------------------------------

  var TS = 64;

  function makeTex(fn) {
    var data = new Uint32Array(TS * TS);
    for (var y = 0; y < TS; y++)
      for (var x = 0; x < TS; x++)
        data[y * TS + x] = fn(x, y);
    return finish(TS, TS, data);
  }

  function brickTex(seed, base, dark, mortar) {
    return makeTex(function (x, y) {
      var row = (y >> 4);                       // 16px tall bricks
      var off = (row & 1) ? 16 : 0;
      var bx = ((x + off) >> 5);                // 32px wide bricks
      var inMortarY = (y & 15) >= 14;
      var inMortarX = (((x + off) & 31) >= 30);
      if (inMortarY || inMortarX) return mix(mortar, '#000000', n2(x, y, seed) * 0.4);
      var v = n2(x, y, seed) * 0.5 + n2(bx * 31, row * 7, seed + 9) * 0.5;
      var edge = ((y & 15) < 2 || ((x + off) & 31) < 2) ? 0.25 : 0;
      return mix(base, dark, v * 0.65 + edge);
    });
  }

  function stoneTex(seed, base, dark) {
    return makeTex(function (x, y) {
      var cx = x >> 4, cy = y >> 4;
      var jit = n2(cx, cy, seed) * 6 - 3;
      var edge = ((x + jit) % 16 < 1.5) || ((y - jit) % 16 < 1.5);
      var v = n2(x, y, seed + 3) * 0.45 + n2(cx * 5, cy * 3, seed + 7) * 0.55;
      if (edge) return mix(dark, '#000000', 0.5);
      return mix(base, dark, v * 0.7);
    });
  }

  function metalTex(seed, base, dark) {
    return makeTex(function (x, y) {
      var panel = (x >> 4) & 1;
      var seam = (x & 15) < 1 || (y & 31) < 1;
      var rivet = ((x & 15) === 3 || (x & 15) === 12) && ((y & 31) === 4 || (y & 31) === 27);
      var v = n2(x, y, seed) * 0.3 + panel * 0.12 + (y / TS) * 0.15;
      if (seam) return mix(dark, '#000000', 0.6);
      if (rivet) return mix(base, '#ffffff', 0.35);
      return mix(base, dark, v);
    });
  }

  function techTex(seed) {
    return makeTex(function (x, y) {
      var base = '#4a5a52', dark = '#232c28';
      if (y < 6 || y > 57) return mix('#2a3430', '#000000', 0.3 + n2(x, y, seed) * 0.2);
      // glowing light strip
      if (y >= 28 && y <= 33 && (x & 31) > 3 && (x & 31) < 28) {
        var g = (y === 30 || y === 31) ? '#7dff9a' : '#2f8a4a';
        return mix(g, '#000000', n2(x, y, seed) * 0.2);
      }
      var seam = (x & 31) < 2;
      var vent = y > 40 && y < 54 && ((y & 3) < 2) && (x & 31) > 6 && (x & 31) < 26;
      if (seam) return mix(dark, '#000000', 0.5);
      if (vent) return mix('#1a211e', '#000000', 0.3);
      return mix(base, dark, n2(x, y, seed) * 0.5);
    });
  }

  function hellTex(seed) {
    return makeTex(function (x, y) {
      var v = n2(x, y, seed) * 0.4 + n2(x >> 2, y >> 2, seed + 5) * 0.6;
      // glowing lava veins
      var s = Math.sin(x * 0.22 + Math.sin(y * 0.13 + seed) * 2.1) + Math.sin(y * 0.18 + x * 0.05);
      if (s > 1.45) return mix('#ff7a18', '#ffd23e', n2(x, y, seed + 2));
      if (s > 1.2) return mix('#8a1e08', '#ff5a10', 0.5);
      return mix('#4a1410', '#1c0605', v);
    });
  }

  function doorTex(stripe) {
    return makeTex(function (x, y) {
      var base = '#5a5f68', dark = '#2a2d33';
      var seam = Math.abs(x - 32) < 1;                        // central split
      var slat = (y & 15) < 2;
      var edge = x < 3 || x > 60 || y < 3 || y > 60;
      if (stripe && y > 8 && y < 20 && !seam) {
        var c = stripe === 'red' ? '#d02020' : '#2050e0';
        return mix(c, '#000000', ((y === 9 || y === 19) ? 0.5 : 0) + n2(x, y, 40) * 0.2);
      }
      if (seam) return mix('#101216', '#000000', 0.3);
      if (edge) return mix(dark, '#000000', 0.4);
      if (slat) return mix(dark, base, 0.3);
      return mix(base, dark, n2(x, y, 17) * 0.4 + (y / TS) * 0.2);
    });
  }

  function switchTex(on) {
    return makeTex(function (x, y) {
      var base = '#4f4a42', dark = '#28241e';
      var inPanelX = x > 16 && x < 48, inPanelY = y > 14 && y < 50;
      if (inPanelX && inPanelY) {
        var bx = x > 24 && x < 40, by = on ? (y > 32 && y < 46) : (y > 18 && y < 32);
        if (bx && by) return mix(on ? '#30d040' : '#d03030', '#000000', n2(x, y, 3) * 0.25);
        return mix('#1c1a16', '#000000', 0.3);
      }
      var edge = x < 2 || x > 61 || y < 2 || y > 61;
      if (edge) return mix(dark, '#000000', 0.5);
      return mix(base, dark, n2(x, y, 21) * 0.5);
    });
  }

  function floorTexGen(seed, a, b) {
    return makeTex(function (x, y) {
      var tile = ((x >> 4) + (y >> 4)) & 1;
      var seam = (x & 15) < 1 || (y & 15) < 1;
      var v = n2(x, y, seed) * 0.4;
      if (seam) return mix(b, '#000000', 0.55);
      return mix(tile ? a : b, '#000000', v + tile * 0.05);
    });
  }

  // ---- the imp (fire imp) --------------------------------------------------

  var IMP_L = {
    'o': '#1c0e06', 'b': '#9a5226', 'd': '#6b3413', 'c': '#e08a28',
    'h': '#f7b24a', 'e': '#ffe14a', 'm': '#3a1006', 't': '#f0e6c8',
    'x': '#f0e6c8', 'r': '#c03018', 'f': '#ff8a18', 'g': '#ffd23e'
  };

  var IMP_A = [
    '......tt........',
    '.......tt.......',
    '........oooooooo',
    '........obbbbbbb',
    '........obbddddd',
    '........obbeedbb',
    '........obbbbbbb',
    '........obdmtmbb',
    '........obbmmbbb',
    '........oooooobb',
    '....oooooooooooo',
    '...obbbbbbdccccc',
    '..obbbo.obdccchc',
    '..obbo..obdcchhc',
    '..obbo..obddcccc',
    '.obbo...obbdcccc',
    '.obbo...obbddccc',
    '.otto...obbbdddd',
    '.ott....obbbbddd',
    '........obbbbbbd',
    '........oobbbbbb',
    '.........obbo...',
    '.........obbo...',
    '.........obbo...',
    '.........obbo...',
    '.........oddo...',
    '.........oddo...',
    '........obddo...',
    '........odddo...',
    '......ottdddo...',
    '......ooooooo...',
    '................'
  ];

  // second walk frame: legs wider, arms swing
  var IMP_B = IMP_A.slice(0, 21).concat([
    '........obbo....',
    '........obbo....',
    '........obbo....',
    '........obbo....',
    '........oddo....',
    '........oddo....',
    '.......obddo....',
    '.......odddo....',
    '.....ottdddo....',
    '.....oooooo.....',
    '................'
  ]);

  // attack: arms raised beside the head, hands glowing with fire
  var IMP_ATK = [
    '..gf..tt........',
    '.gffg..tt.......',
    '.offo...oooooooo',
    '.otto...obbbbbbb',
    '.obbo...obbddddd',
    '.obbo...obeeedbb',
    '.obbo...obbbbbbb',
    '.obbo...obmmttbb',
    '..obbo..obbmmbbb',
    '..obbo..oooooobb',
    '..obooooooooooo.',
    '...obbbbbdccccc.',
    '....obbobdccchc.',
    '........obdcchhc',
    '........obddcccc',
    '........obbdcccc',
    '........obbddccc',
    '........obbbdddd',
    '........obbbbddd',
    '........obbbbbbd',
    '........oobbbbbb',
    '.........obbo...',
    '.........obbo...',
    '.........obbo...',
    '.........obbo...',
    '.........oddo...',
    '.........oddo...',
    '........obddo...',
    '........odddo...',
    '......ottdddo...',
    '......ooooooo...',
    '................'
  ];

  // pain: eyes squeezed white, flinch
  var IMP_PAIN = IMP_A.slice();
  IMP_PAIN[5] = '........obbxxdbb';
  IMP_PAIN[7] = '........obmmmmbb';

  var IMP_DIE1 = [
    '................',
    '................',
    '................',
    '................',
    '................',
    '................',
    '......tt........',
    '.......tt.......',
    '........oooooooo',
    '........obbbbbbb',
    '........obxxdddb',
    '........obmmmmbb',
    '.....oooooooobbb',
    '...obbbbbbdccccb',
    '..obbbboobdcccbb',
    '.obbbo..obddccbb',
    '.otto...obbddddb',
    '........obbbbbdd',
    '.......oobbbbbbb',
    '......obbbbbbbdd',
    '................',
    '................',
    '................',
    '................',
    '................',
    '................',
    '................',
    '................',
    '................',
    '................',
    '................',
    '................'
  ];

  var IMP_DIE2 = [
    '................', '................', '................', '................',
    '................', '................', '................', '................',
    '................', '................', '................', '................',
    '................',
    '......tt........',
    '.......ttoooooo.',
    '......obbbbbbbbo',
    '.....obbxxddmmbo',
    '....obbbbdddbbbo',
    '...obbddccccbbdd',
    '..obbbbbdddbbbbb',
    '................',
    '................', '................', '................', '................',
    '................', '................', '................', '................',
    '................', '................', '................'
  ];

  var IMP_CORPSE = [
    '................', '................', '................', '................',
    '................', '................', '................', '................',
    '................', '................', '................', '................',
    '................', '................', '................', '................',
    '................', '................', '................', '................',
    '................', '................',
    '..........tt....',
    '....oo....ott...',
    '...obbdoooobbdo.',
    '..obbddbbbdddbbo',
    '.orrbdddddbbdrro',
    '.orrrbbdddbrrro.',
    '..orrrrrrrrrro..',
    '...ooooooooooo..',
    '................',
    '................'
  ];

  // ---- the gnasher (pink demon) -------------------------------------------

  function gnasherLegend(recolor) {
    var L = {
      'o': '#200a10', 'p': '#d06a8a', 'q': '#9a3d5e', 'k': '#e898a8',
      't': '#f2ead0', 'm': '#41101c', 'e': '#ffd23e', 'x': '#f2ead0',
      'r': '#b02030'
    };
    if (recolor) for (var key in recolor) L[key] = recolor[key];
    return L;
  }

  var GNA_A = [
    '................',
    '................',
    '......oooooooooo',
    '.....opppppppppp',
    '....oppkpppppppp',
    '....opppeepppppp',
    '....oppppppppppp',
    '....opmmmmmmmmmm',
    '....opmtmtmtmtmt',
    '....opmmmmmmmmmm',
    '....optmtmtmtmtm',
    '....opqqqqqqqqqq',
    '.....ooooooooooo',
    '...oppppqqpppppp',
    '..opppppoqpppppp',
    '..opppo.oqpppppp',
    '..oppo..oqqppppp',
    '..otto..oqqqpppp',
    '..ott...oqqqqppp',
    '........oqqqqqpp',
    '........ooqqqqqp',
    '.........oqqqo..',
    '.........oqqqo..',
    '.........oqqo...',
    '........oqqqo...',
    '........ottto...',
    '........ooooo...',
    '................',
    '................',
    '................',
    '................',
    '................'
  ];

  var GNA_B = GNA_A.slice(0, 21).concat([
    '........oqqqo...',
    '........oqqqo...',
    '........oqqo....',
    '.......oqqqo....',
    '.......ottto....',
    '.......ooooo....',
    '................',
    '................',
    '................',
    '................'
  ]);

  // attack: jaws wide open
  var GNA_ATK = [
    '................',
    '......oooooooooo',
    '.....opppppppppp',
    '....oppkpppppppp',
    '....opppeepppppp',
    '....opmmmmmmmmmm',
    '....opmttmttmttm',
    '....opmmmmmmmmmm',
    '....opmmmmmmmmmm',
    '....opmmmmmmmmmm',
    '....opmttmttmttm',
    '....opmmmmmmmmmm',
    '....opqqqqqqqqqq',
    '...oppppqqpppppp',
    '..opppppoqpppppp',
    '..opppo.oqpppppp',
    '..oppo..oqqppppp',
    '..otto..oqqqpppp',
    '..ott...oqqqqppp',
    '........oqqqqqpp',
    '........ooqqqqqp',
    '.........oqqqo..',
    '.........oqqqo..',
    '.........oqqo...',
    '........oqqqo...',
    '........ottto...',
    '........ooooo...',
    '................',
    '................',
    '................',
    '................',
    '................'
  ];

  var GNA_PAIN = GNA_A.slice();
  GNA_PAIN[5] = '....opppxxpppppp';

  var GNA_DIE1 = [
    '................', '................', '................', '................',
    '................', '................', '................',
    '......oooooooooo',
    '.....opppppppppp',
    '....oppxxppppppp',
    '....opmmmmmmmmmm',
    '....opmtmtmtmtmt',
    '....opqqqqqqqqqq',
    '...opppppqqppppp',
    '..oppppppqqquppp'.replace('u', 'q'),
    '..oppoooqqqqqppp',
    '..oo...oqqqqqqpp',
    '.......ooqqqqqqp',
    '........oqqqqoo.',
    '................',
    '................', '................', '................', '................',
    '................', '................', '................', '................',
    '................', '................', '................', '................'
  ];

  var GNA_DIE2 = [
    '................', '................', '................', '................',
    '................', '................', '................', '................',
    '................', '................', '................', '................',
    '................', '................',
    '......ooooooooo.',
    '.....oppppppppqo',
    '....opxxpmmttppo',
    '...oppppqqqqppqo',
    '..oqqppppppqqqoo',
    '...ooooooooooo..',
    '................',
    '................', '................', '................', '................',
    '................', '................', '................', '................',
    '................', '................', '................'
  ];

  var GNA_CORPSE = [
    '................', '................', '................', '................',
    '................', '................', '................', '................',
    '................', '................', '................', '................',
    '................', '................', '................', '................',
    '................', '................', '................', '................',
    '................', '................',
    '.......oo.......',
    '.....ooppoo.tt..',
    '...oqpppppqoot..',
    '..oqqpmmttppqqo.',
    '.orrqqppppqqrro.',
    '.orrrqqqqqrrro..',
    '..orrrrrrrrro...',
    '...oooooooooo...',
    '................',
    '................'
  ];

  // ---- Riley (final boss: a sparring hologram) ------------------------------
  // Half sprites, mirrored. The visor and core flash white as her attack tell.

  var RIL_L = {
    'o': '#06141c', 'h': '#1e8aa0', 'H': '#6fe0ec', 's': '#d8fff8',
    'v': '#ffd23e', 'V': '#fff6b0', 'c': '#157a8a', 'C': '#3fd8c8',
    'g': '#ffd23e', 'Y': '#fff6b0'
  };

  var RIL_A = [
    '..........',
    '.....ooooo',
    '...oohhhhh',
    '..ohhHHhhh',
    '..ohHhhhhh',
    '.ohhhhoooo',
    '.ohhhosvvv',
    '.ohhhosvVV',
    '.ohhhossss',
    '.ohhhossss',
    '.ohhhhosss',
    '..ohhhooss',
    '...ooooooo',
    '.....ooccc',
    '...ooccccg',
    '..occcccCg',
    '.occcCcccg',
    '.occcCccgY',
    '.occcCccgY',
    '.occ.Ccccg',
    '.oso.occcg',
    '.oso.occcc',
    '..o..oCCCC',
    '.....occcc',
    '.....occo.',
    '.....occo.',
    '.....occo.',
    '.....oCco.',
    '.....occo.',
    '.....occo.',
    '.....occo.',
    '....ogggo.',
    '....ooooo.',
    '..........'
  ];

  var RIL_B = RIL_A.slice(0, 24).concat([
    '....occo..',
    '....occo..',
    '...occo...',
    '...oCco...',
    '...occo...',
    '..occo....',
    '..occo....',
    '.ogggo....',
    '.ooooo....',
    '..........'
  ]);

  // arms up, gathering light
  var RIL_ATK = RIL_A.slice();
  RIL_ATK[13] = '.o...ooccc';
  RIL_ATK[14] = '.so.occccg';
  RIL_ATK[15] = '.so.occcCg';
  RIL_ATK[16] = '.oc.occccg';
  RIL_ATK[19] = '..o..Ccccg';
  RIL_ATK[20] = '.....occcg';
  RIL_ATK[21] = '.....occcc';

  // Randomly drop pixels to show her de-rezzing out.
  function derez(rows, keep, seed) {
    return rows.map(function (r, y) {
      var out = '';
      for (var x = 0; x < r.length; x++) out += (r[x] !== '.' && n2(x, y, seed) < keep) ? r[x] : '.';
      return out;
    });
  }

  function rileyLegend(recolor) {
    var L = {};
    for (var k in RIL_L) L[k] = RIL_L[k];
    if (recolor) for (var k2 in recolor) L[k2] = recolor[k2];
    return L;
  }

  // ---- HUD face ------------------------------------------------------------

  // Built from a template: eyes and mouth get swapped per state, blood added by tier.
  function buildFace(state) {
    var L = {
      'o': '#1a1008', 'f': '#e85818', 'F': '#ffa018', 's': '#d8a06a',
      'S': '#a8744a', 'w': '#f0ead8', 'k': '#28221a', 'm': '#5a1408',
      't': '#e8e0c8', 'r': '#c01818', 'c': '#b84a10', 'C': '#7e2e08',
      'g': '#888078', 'x': '#301010'
    };
    var skin = state.gray ? { 's': '#9a9488', 'S': '#6e6a60' } : {};
    for (var kk in skin) L[kk] = skin[kk];

    // rows are half-width 12, mirrored to 24 wide, 28 tall
    var eyesOpen = [
      '.osskwwkssss', // brow / eye top
      '.osskwkksss.'.replace('.$', ''),
      '.ossskksssss'
    ];
    var eyesSquint = [
      '.osssookssss',
      '.osskwkksss.',
      '.ossskksssss'
    ];
    var eyesShut = [
      '.osssssossss',
      '.ossooosssss',
      '.osssssossss'
    ];
    var eyesX = [
      '.osskoskssss',
      '.osssksossss',
      '.osskoskssss'
    ];
    var mouthCalm = [
      '..osssssssss',
      '..osssmmmmmm',
      '..osssssssss'
    ];
    var mouthGrim = [
      '..osssssssss',
      '..ossmmmmmmm',
      '..osSmmsssss'
    ];
    var mouthGrin = [
      '..osssmmmmmm',
      '..ossmtttttt',
      '..osssmmmmmm'
    ];
    var mouthOuch = [
      '..ossmmmmmss',
      '..osmmttmmss',
      '..ossmmmmmss'
    ];

    var eyes = state.eyes === 'squint' ? eyesSquint
      : state.eyes === 'shut' ? eyesShut
        : state.eyes === 'x' ? eyesX : eyesOpen;
    var mouth = state.mouth === 'grim' ? mouthGrim
      : state.mouth === 'grin' ? mouthGrin
        : state.mouth === 'ouch' ? mouthOuch : mouthCalm;

    var rows = [
      '.....ffF....',
      '...fFffffF..',
      '..ffFfffffF.',
      '..offffffff.',
      '.offFffffffF',
      '.offffffffff',
      '.offosssssss',
      '.oosssssssss',
      '..ossssssSSS',
      '..osssssssss',
      eyes[0],
      eyes[1],
      eyes[2],
      '..osssssssss',
      '..ossssssSss',
      '..osssssSSss',
      '..ossssssSss',
      '..osssssssss',
      mouth[0],
      mouth[1],
      mouth[2],
      '..osssssssss',
      '...ossssssSS',
      '...ossssssss',
      '....oossssss',
      '..ooccoosSSS'.replace('..', '.o'),
      '.occcccooooo',
      'occCcccccccc'
    ];
    // normalize length 12
    rows = rows.map(function (r) {
      r = r.replace(/\$/g, '');
      if (r.length > 12) r = r.slice(0, 12);
      while (r.length < 12) r += '.';
      return r;
    });
    // blood by damage tier: splats on forehead / cheek
    if (state.blood >= 1) { rows[8] = '..osrrsssSSS'.slice(0, 12); rows[9] = '..ossrssssss'; }
    if (state.blood >= 2) { rows[14] = '..osrssssrss'; rows[15] = '..orrssSSrss'; rows[21] = '..osrsssssrs'; }
    if (state.blood >= 3) { rows[6] = '.offosrrssss'; rows[13] = '..orrsssrrss'; rows[22] = '...orrsssrSS'.slice(0, 12); }
    return sprite(rows, L, { mirror: true });
  }

  // ---- weapons (viewmodel, drawn front-on) --------------------------------

  var GUN_L = {
    'o': '#0e0c0a', 'g': '#4a4e56', 'G': '#6a707c', 'd': '#26282e',
    's': '#d8a06a', 'S': '#a8744a', 'w': '#7a4a28', 'W': '#5a3418',
    'y': '#c8b040', 'k': '#16181c'
  };

  // fist (half 12 wide -> 24, 18 tall)
  var FIST = [
    '............',
    '....oooo....',
    '..oossssoo..',
    '.ossssssss o'.replace(' ', 's'),
    '.osssSsssss.',
    'ossssSSssss.',
    'osssssSssss.',
    'ossssssssss.',
    'osSSsssssss.',
    'ossssssssss.',
    '.ossssssss..',
    '.ossssssss..',
    '..ossssss...',
    '..oswwwws...',
    '..owwWWww...',
    '..owWWWWw...',
    '..owwwwww...',
    '...oooooo...'
  ].map(function (r) { while (r.length < 12) r += '.'; return r.slice(0, 12); });

  // pistol front view, held two-handed. Half 14 wide, mirrored to 28.
  // The right edge of each row is the center of the screen.
  var PISTOL = [
    '...........ooo',
    '..........ookk',
    '..........ogkk',
    '..........ogGd',
    '..........ogGd',
    '.........ooGgd',
    '.........ogGGd',
    '.........ogGGd',
    '.........ogGGd',
    '.........odddd',
    '.........ogGGd',
    '.........ogGGd',
    '.........odddd',
    '..........oggd',
    '..........oggd',
    '..........ogdd',
    '.......ooooddd',
    '.....oossssodd',
    '....ossssssodd',
    '...ossssSssood',
    '..osssssSSssod',
    '..ossssssSssod',
    '..osSSssssssod',
    '..ossssssssood',
    '...osssssssso.',
    '...osssssssso.',
    '....oossssoo..',
    '......oooo....'
  ];

  // shotgun front view: long barrel, wooden pump, two hands. Half 12 -> 24 wide.
  var SHOTGUN = [
    '.........ooo',
    '........ookk',
    '........odkk',
    '........odgd',
    '........odgd',
    '........odgd',
    '........odgd',
    '........odgd',
    '........odgd',
    '........odgd',
    '........oddd',
    '.......ooddd',
    '......oWwwdd',
    '......oWwwwd',
    '......oWWwwd',
    '......oWWwwd',
    '......ooWWwd',
    '.......ooWWd',
    '........oddd',
    '........oggd',
    '.....oooogdd',
    '...oosssoggd',
    '..ossssssogd',
    '..ossSsssogd',
    '.osssSSssood',
    '.ossssssssod',
    '.osSSsssssod',
    '.ossssssssod',
    '..ossssssso.',
    '..ossssssso.',
    '...oosssoo..',
    '.....oooo...'
  ];

  // ---- procedural round sprites -------------------------------------------

  function radial(w, h, fn) {
    var data = new Uint32Array(w * h);
    var cx = (w - 1) / 2, cy = (h - 1) / 2;
    for (var y = 0; y < h; y++)
      for (var x = 0; x < w; x++) {
        var dx = (x - cx) / (w / 2), dy = (y - cy) / (h / 2);
        var d = Math.sqrt(dx * dx + dy * dy);
        var c = fn(d, x, y);
        if (c) data[y * w + x] = c;
      }
    return finish(w, h, data);
  }

  function fireballFrame(seed) {
    return radial(12, 12, function (d, x, y) {
      var j = n2(x, y, seed) * 0.3;
      if (d + j < 0.38) return hex('#fff8d0');
      if (d + j < 0.68) return hex('#ffd23e');
      if (d + j < 0.95) return hex('#ff7a18');
      return 0;
    });
  }

  function greenballFrame(seed) {
    return radial(14, 14, function (d, x, y) {
      var j = n2(x, y, seed) * 0.3;
      if (d + j < 0.38) return hex('#eaffd0');
      if (d + j < 0.68) return hex('#8aff3e');
      if (d + j < 0.95) return hex('#2fa818');
      return 0;
    });
  }

  function explosionFrame(size, seed, hot) {
    return radial(size, size, function (d, x, y) {
      var j = n2(x, y, seed) * 0.55;
      if (d + j < 0.30 * hot) return hex('#fff8d0');
      if (d + j < 0.55 * hot) return hex('#ffd23e');
      if (d + j < 0.80 * hot) return hex('#ff7a18');
      if (d + j < 1.00 * hot) return hex('#a83010');
      return 0;
    });
  }

  function puffFrame(seed, big) {
    return radial(big ? 8 : 6, big ? 8 : 6, function (d, x, y) {
      var j = n2(x, y, seed) * 0.4;
      if (d + j < 0.5) return hex('#c8c4bc');
      if (d + j < 0.9) return hex('#78746c');
      return 0;
    });
  }

  function bloodFrame(seed, big) {
    return radial(big ? 8 : 6, big ? 8 : 6, function (d, x, y) {
      var j = n2(x, y, seed) * 0.45;
      if (d + j < 0.45) return hex('#e04020');
      if (d + j < 0.9) return hex('#901810');
      return 0;
    });
  }

  // barrel: shaded cylinder with fire stripe
  function barrelSprite() {
    var w = 16, h = 22, data = new Uint32Array(w * h);
    for (var y = 0; y < h; y++) {
      for (var x = 0; x < w; x++) {
        var u = Math.abs((x - 7.5) / 7.5);
        if (u > 1) continue;
        var edge = u > 0.88 || y === 0 || y === h - 1;
        var shade = 1 - u * u * 0.75;
        var band = (y === 4 || y === 16);
        var stripe = (y >= 8 && y <= 12);
        var base = stripe ? '#c05010' : '#5c554c';
        if (y >= 1 && y <= 2) base = '#3a352e';
        var c = mix(base, '#000000', 1 - shade + (band ? 0.35 : 0) + n2(x, y, 77) * 0.2);
        if (edge) c = hex('#16130f');
        // glowing coals on top
        if (y === 1 && u < 0.6 && n2(x, y, 8) > 0.4) c = hex('#ff9a28');
        data[y * w + x] = c;
      }
    }
    return finish(w, h, data);
  }

  // torch: stick + animated flame
  function torchSprite(seed) {
    var w = 10, h = 28, data = new Uint32Array(w * h);
    for (var y = 12; y < 28; y++) {
      for (var x = 4; x <= 5; x++) data[y * w + x] = hex(y > 24 ? '#3a2812' : '#6a4a22');
    }
    data[12 * w + 3] = hex('#8a6432'); data[12 * w + 6] = hex('#8a6432');
    for (var y2 = 0; y2 < 12; y2++) {
      for (var x2 = 0; x2 < w; x2++) {
        var dx = (x2 - 4.5) / 4.2, dy = (y2 - 8) / 8;
        var d = Math.sqrt(dx * dx * 1.6 + dy * dy);
        var j = n2(x2, y2, seed) * 0.5;
        if (d + j < 0.45) data[y2 * w + x2] = hex('#fff0b0');
        else if (d + j < 0.75) data[y2 * w + x2] = hex('#ffd23e');
        else if (d + j < 1.0) data[y2 * w + x2] = hex('#ff7a18');
      }
    }
    return finish(w, h, data);
  }

  // simple box pickups
  function boxSprite(w, h, base, dark, deco) {
    var data = new Uint32Array(w * h);
    for (var y = 0; y < h; y++)
      for (var x = 0; x < w; x++) {
        var edge = x === 0 || y === 0 || x === w - 1 || y === h - 1;
        var c = edge ? hex('#14120e') : mix(base, dark, (y / h) * 0.6 + n2(x, y, 5) * 0.15);
        data[y * w + x] = c;
      }
    if (deco) deco(data, w, h);
    return finish(w, h, data);
  }

  function crossDeco(color) {
    return function (data, w, h) {
      var cx = w >> 1, cy = h >> 1, c = hex(color);
      for (var i = -(h >> 2); i <= (h >> 2); i++) { data[(cy + i) * w + cx] = c; data[(cy + i) * w + cx - 1] = c; }
      for (var j = -(w >> 2); j <= (w >> 2); j++) { data[cy * w + cx + j] = c; data[(cy - 1) * w + cx + j] = c; }
    };
  }

  function keycardSprite(color) {
    var rows = [
      'oooooooo',
      'occccccb'.replace('b', 'o'),
      'occwwcco',
      'occwwcco',
      'occcccco',
      'occcccco',
      'ocwwwwco',
      'occcccco',
      'occcccco',
      'oooooooo'
    ];
    return sprite(rows, { 'o': '#14120e', 'c': color, 'w': '#f0ead8' });
  }

  function shotgunPickup() {
    var w = 30, h = 10, data = new Uint32Array(w * h);
    function px(x, y, c) { if (x >= 0 && x < w && y >= 0 && y < h) data[y * w + x] = hex(c); }
    for (var x = 2; x < 22; x++) { px(x, 3, '#3a3e46'); px(x, 4, '#5a5f68'); px(x, 5, '#26282e'); }
    for (var x2 = 8; x2 < 15; x2++) px(x2, 6, '#5a3418'); // pump
    for (var x3 = 21; x3 < 29; x3++) { px(x3, 4 + ((x3 - 21) >> 1), '#5a3418'); px(x3, 5 + ((x3 - 21) >> 1), '#7a4a28'); }
    px(1, 3, '#16130f'); px(1, 4, '#16130f');
    return finish(w, h, data);
  }

  function orbSprite() {
    return radial(14, 14, function (d, x, y) {
      if (d < 0.3) return hex('#fff8d0');
      if (d < 0.6) return hex('#ffd23e');
      if (d < 0.85) return hex('#ff7a18');
      if (d < 1.0) return hex('#a03008');
      return 0;
    });
  }

  function flashSprite() {
    return radial(20, 20, function (d, x, y) {
      var a = Math.atan2(y - 9.5, x - 9.5);
      var star = 0.55 + 0.45 * Math.abs(Math.sin(a * 4));
      if (d < 0.35 * star) return hex('#fff8d0');
      if (d < 0.7 * star) return hex('#ffd23e');
      if (d < 1.0 * star) return hex('#ff7a18');
      return 0;
    });
  }

  // ---- 3x5 bitmap font -----------------------------------------------------

  var GLYPHS = {
    'A': [2, 5, 7, 5, 5], 'B': [6, 5, 6, 5, 6], 'C': [3, 4, 4, 4, 3], 'D': [6, 5, 5, 5, 6],
    'E': [7, 4, 6, 4, 7], 'F': [7, 4, 6, 4, 4], 'G': [3, 4, 5, 5, 3], 'H': [5, 5, 7, 5, 5],
    'I': [7, 2, 2, 2, 7], 'J': [1, 1, 1, 5, 2], 'K': [5, 6, 4, 6, 5], 'L': [4, 4, 4, 4, 7],
    'M': [5, 7, 5, 5, 5], 'N': [6, 5, 5, 5, 5], 'O': [2, 5, 5, 5, 2], 'P': [6, 5, 6, 4, 4],
    'Q': [2, 5, 5, 6, 3], 'R': [6, 5, 6, 6, 5], 'S': [3, 4, 2, 1, 6], 'T': [7, 2, 2, 2, 2],
    'U': [5, 5, 5, 5, 7], 'V': [5, 5, 5, 5, 2], 'W': [5, 5, 5, 7, 5], 'X': [5, 5, 2, 5, 5],
    'Y': [5, 5, 2, 2, 2], 'Z': [7, 1, 2, 4, 7],
    '0': [7, 5, 5, 5, 7], '1': [2, 6, 2, 2, 7], '2': [6, 1, 2, 4, 7], '3': [6, 1, 2, 1, 6],
    '4': [5, 5, 7, 1, 1], '5': [7, 4, 6, 1, 6], '6': [3, 4, 6, 5, 2], '7': [7, 1, 2, 2, 2],
    '8': [7, 5, 7, 5, 7], '9': [2, 5, 3, 1, 6],
    ' ': [0, 0, 0, 0, 0], '.': [0, 0, 0, 0, 2], ',': [0, 0, 0, 2, 4], '!': [2, 2, 2, 0, 2],
    '?': [6, 1, 2, 0, 2], ':': [0, 2, 0, 2, 0], '-': [0, 0, 7, 0, 0], '+': [0, 2, 7, 2, 0],
    '%': [5, 1, 2, 4, 5], '/': [1, 1, 2, 4, 4], "'": [2, 2, 0, 0, 0], '_': [0, 0, 0, 0, 7],
    '>': [4, 2, 1, 2, 4], '<': [1, 2, 4, 2, 1], '"': [5, 5, 0, 0, 0], '=': [0, 7, 0, 7, 0]
  };

  function drawText(ctx, text, x, y, opts) {
    opts = opts || {};
    var s = opts.scale || 1;
    var color = opts.color || '#e8e0c8';
    var shadow = opts.shadow;
    text = String(text).toUpperCase();
    if (opts.center) x -= Math.floor(textWidth(text, s) / 2);
    if (opts.right) x -= textWidth(text, s);
    if (shadow) {
      var sc = typeof shadow === 'string' ? shadow : '#000000';
      drawText(ctx, text, x + s, y + s, { scale: s, color: sc });
    }
    ctx.fillStyle = color;
    for (var i = 0; i < text.length; i++) {
      var g = GLYPHS[text[i]] || GLYPHS['?'];
      for (var r = 0; r < 5; r++) {
        var bits = g[r];
        for (var c = 0; c < 3; c++) {
          if (bits & (4 >> c)) ctx.fillRect(x + c * s, y + r * s, s, s);
        }
      }
      x += 4 * s;
    }
  }

  function textWidth(text, s) { return String(text).length * 4 * (s || 1) - (s || 1); }

  // ---- assemble everything -------------------------------------------------

  var A = {};

  A.tex = {
    1: brickTex(1, '#8a4232', '#4a1e14', '#2a1812'),
    2: stoneTex(2, '#8a8578', '#4a463c'),
    3: metalTex(3, '#5a5f68', '#26282e'),
    4: techTex(4),
    5: hellTex(5),
    6: doorTex(null),
    7: doorTex('red'),
    8: doorTex('blue'),
    9: switchTex(false),
    10: switchTex(true),
    11: brickTex(1, '#8a4232', '#4a1e14', '#2a1812') // secret door: looks like brick
  };

  A.floors = {
    slab: floorTexGen(11, '#4e4a42', '#38342c'),
    tech: floorTexGen(12, '#3c4440', '#2a302c'),
    hell: makeTex(function (x, y) {
      var v = n2(x, y, 13) * 0.5 + n2(x >> 2, y >> 2, 14) * 0.5;
      var s = Math.sin(x * 0.19 + Math.sin(y * 0.11) * 2.0) + Math.sin(y * 0.15);
      if (s > 1.5) return mix('#ff7a18', '#ffd23e', v);
      return mix('#3a100c', '#180404', v);
    }),
    ceilDark: floorTexGen(15, '#2e2b26', '#201d18'),
    ceilTech: makeTex(function (x, y) {
      var lamp = ((x & 31) > 12 && (x & 31) < 20 && (y & 31) > 12 && (y & 31) < 20);
      if (lamp) return mix('#fff0c0', '#c0a860', n2(x, y, 16) * 0.3);
      return mix('#2a2e2c', '#1a1d1b', n2(x, y, 16) * 0.5);
    }),
    ceilHell: makeTex(function (x, y) {
      return mix('#241010', '#100404', n2(x, y, 17) * 0.6);
    })
  };

  var impL = IMP_L, gnaL = gnasherLegend(null);
  var kniL = gnasherLegend({ 'p': '#c8502a', 'q': '#7e2412', 'k': '#e8804a', 'e': '#a0fFff'.toLowerCase() });

  A.mobs = {
    imp: {
      walkA: sprite(IMP_A, impL, { mirror: true }),
      walkB: sprite(IMP_B, impL, { mirror: true }),
      attack: sprite(IMP_ATK, impL, { mirror: true }),
      pain: sprite(IMP_PAIN, impL, { mirror: true }),
      die1: sprite(IMP_DIE1, impL, { mirror: true }),
      die2: sprite(IMP_DIE2, impL, { mirror: true }),
      corpse: sprite(IMP_CORPSE, impL, { mirror: true })
    },
    gnasher: {
      walkA: sprite(GNA_A, gnaL, { mirror: true }),
      walkB: sprite(GNA_B, gnaL, { mirror: true }),
      attack: sprite(GNA_ATK, gnaL, { mirror: true }),
      pain: sprite(GNA_PAIN, gnaL, { mirror: true }),
      die1: sprite(GNA_DIE1, gnaL, { mirror: true }),
      die2: sprite(GNA_DIE2, gnaL, { mirror: true }),
      corpse: sprite(GNA_CORPSE, gnaL, { mirror: true })
    },
    knight: {
      walkA: sprite(GNA_A, kniL, { mirror: true }),
      walkB: sprite(GNA_B, kniL, { mirror: true }),
      attack: sprite(GNA_ATK, kniL, { mirror: true }),
      pain: sprite(GNA_PAIN, kniL, { mirror: true }),
      die1: sprite(GNA_DIE1, kniL, { mirror: true }),
      die2: sprite(GNA_DIE2, kniL, { mirror: true }),
      corpse: sprite(GNA_CORPSE, kniL, { mirror: true })
    },
    riley: {
      walkA: sprite(RIL_A, RIL_L, { mirror: true }),
      walkB: sprite(RIL_B, RIL_L, { mirror: true }),
      attack: sprite(RIL_ATK, rileyLegend({ 'v': '#ffffff', 'V': '#ffffff', 'Y': '#ffffff', 'g': '#fff6b0' }), { mirror: true }),
      pain: sprite(RIL_A, rileyLegend({ 'c': '#e8fffc', 'C': '#ffffff', 'h': '#9ef0f8' }), { mirror: true }),
      shield: sprite(RIL_A, rileyLegend({ 'c': '#c89018', 'C': '#ffd23e', 'h': '#e0a020', 'H': '#fff0a0' }), { mirror: true }),
      die1: sprite(derez(RIL_A, 0.6, 71), rileyLegend({ 'c': '#6fe0ec' }), { mirror: true }),
      die2: sprite(derez(RIL_A, 0.22, 72), rileyLegend({ 'c': '#d8fff8', 'h': '#d8fff8' }), { mirror: true }),
      corpse: null // she logs off, she doesn't leave a body
    }
  };

  A.things = {
    barrel: barrelSprite(),
    torchA: torchSprite(31),
    torchB: torchSprite(87),
    stim: boxSprite(10, 8, '#e8e4dc', '#a8a49c', crossDeco('#d02020')),
    medkit: boxSprite(16, 12, '#e8e4dc', '#a8a49c', crossDeco('#d02020')),
    clip: boxSprite(10, 8, '#7a7468', '#4a463c', function (d, w, h) {
      for (var x = 2; x < w - 2; x += 2) d[2 * w + x] = hex('#c8a030');
    }),
    shells: boxSprite(14, 9, '#b03020', '#5e1810', function (d, w, h) {
      for (var x = 2; x < w - 2; x += 2) { d[3 * w + x] = hex('#c8a030'); d[4 * w + x] = hex('#c8a030'); }
    }),
    armor: sprite([
      '...oooo.',
      '..oggggo',
      '.ogggggg',
      '.oggGGgg',
      '.ogggggg',
      '.ogggggg',
      '..ogggg o'.replace(' ', ''),
      '..oggggg',
      '...ooooo'
    ].map(function (r) { while (r.length < 8) r += '.'; return r.slice(0, 8); }),
      { 'o': '#14120e', 'g': '#3a7a30', 'G': '#6ab858' }, { mirror: true }),
    keyRed: keycardSprite('#d02020'),
    keyBlue: keycardSprite('#2050e0'),
    shotgunPickup: shotgunPickup(),
    orb: orbSprite(),
    fireballA: fireballFrame(41),
    fireballB: fireballFrame(42),
    greenballA: greenballFrame(43),
    greenballB: greenballFrame(44),
    boom1: explosionFrame(24, 51, 0.7),
    boom2: explosionFrame(28, 52, 1.0),
    boom3: explosionFrame(28, 53, 1.25),
    puffA: puffFrame(61, true),
    puffB: puffFrame(62, false),
    bloodA: bloodFrame(63, true),
    bloodB: bloodFrame(64, false)
  };

  A.faces = {
    ok: buildFace({ eyes: 'open', mouth: 'calm', blood: 0 }),
    hurt1: buildFace({ eyes: 'open', mouth: 'grim', blood: 1 }),
    hurt2: buildFace({ eyes: 'squint', mouth: 'grim', blood: 2 }),
    hurt3: buildFace({ eyes: 'squint', mouth: 'ouch', blood: 3 }),
    pain: buildFace({ eyes: 'shut', mouth: 'ouch', blood: 1 }),
    grin: buildFace({ eyes: 'open', mouth: 'grin', blood: 0 }),
    dead: buildFace({ eyes: 'x', mouth: 'ouch', blood: 3, gray: true })
  };

  A.guns = {
    fist: sprite(FIST, GUN_L, { mirror: true }),
    pistol: sprite(PISTOL, GUN_L, { mirror: true }),
    shotgun: sprite(SHOTGUN, GUN_L, { mirror: true }),
    flash: flashSprite()
  };

  A.drawText = drawText;
  A.textWidth = textWidth;
  A.hex = hex;

  return A;
})();
