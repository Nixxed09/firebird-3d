(()=>{var Qm=Object.create;var Gf=Object.defineProperty;var e0=Object.getOwnPropertyDescriptor;var t0=Object.getOwnPropertyNames;var n0=Object.getPrototypeOf,i0=Object.prototype.hasOwnProperty;var Ma=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var r0=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of t0(e))!i0.call(i,r)&&r!==t&&Gf(i,r,{get:()=>e[r],enumerable:!(n=e0(e,r))||n.enumerable});return i};var Sa=(i,e,t)=>(t=i!=null?Qm(n0(i)):{},r0(e||!i||!i.__esModule?Gf(t,"default",{value:i,enumerable:!0}):t,i));var Vf=Ma((aS,xu)=>{"use strict";var s0=(function(){function i(D){var O=parseInt(D.slice(1),16),H=O>>16&255,z=O>>8&255,Y=O&255;return(4278190080|Y<<16|z<<8|H)>>>0}function e(D,O,H){var z=document.createElement("canvas");z.width=D,z.height=O;var Y=z.getContext("2d"),V=Y.createImageData(D,O);return new Uint32Array(V.data.buffer).set(H),Y.putImageData(V,0,0),{w:D,h:O,data:H,canvas:z}}function t(D,O,H){H=H||{};for(var z=!!H.mirror,Y=D[0].length,V=0;V<D.length;V++)if(D[V].length!==Y)throw new Error("sprite row "+V+" length "+D[V].length+" != "+Y);for(var Z=z?Y*2:Y,ue=D.length,xe=new Uint32Array(Z*ue),pe=0;pe<ue;pe++)for(var ye=D[pe],be=0;be<Y;be++){var He=O[ye[be]];if(He){var Xe=i(He);xe[pe*Z+be]=Xe,z&&(xe[pe*Z+(Z-1-be)]=Xe)}}return e(Z,ue,xe)}function n(D,O,H){var z=(D|0)*374761393+(O|0)*668265263+(H|0)*974711;return z=(z^z>>13)*1274126177,((z^z>>16)>>>0)%1e3/1e3}function r(D,O,H){var z=parseInt(D.slice(1),16),Y=parseInt(O.slice(1),16),V=(z>>16&255)+((Y>>16&255)-(z>>16&255))*H,Z=(z>>8&255)+((Y>>8&255)-(z>>8&255))*H,ue=(z&255)+((Y&255)-(z&255))*H;return(4278190080|(ue&255)<<16|(Z&255)<<8|V&255)>>>0}var s=64;function a(D){for(var O=new Uint32Array(s*s),H=0;H<s;H++)for(var z=0;z<s;z++)O[H*s+z]=D(z,H);return e(s,s,O)}function o(D,O,H,z){return a(function(Y,V){var Z=V>>4,ue=Z&1?16:0,xe=Y+ue>>5,pe=(V&15)>=14,ye=(Y+ue&31)>=30;if(pe||ye)return r(z,"#000000",n(Y,V,D)*.4);var be=n(Y,V,D)*.5+n(xe*31,Z*7,D+9)*.5,He=(V&15)<2||(Y+ue&31)<2?.25:0;return r(O,H,be*.65+He)})}function c(D,O,H){return a(function(z,Y){var V=z>>4,Z=Y>>4,ue=n(V,Z,D)*6-3,xe=(z+ue)%16<1.5||(Y-ue)%16<1.5,pe=n(z,Y,D+3)*.45+n(V*5,Z*3,D+7)*.55;return xe?r(H,"#000000",.5):r(O,H,pe*.7)})}function u(D,O,H){return a(function(z,Y){var V=z>>4&1,Z=(z&15)<1||(Y&31)<1,ue=((z&15)===3||(z&15)===12)&&((Y&31)===4||(Y&31)===27),xe=n(z,Y,D)*.3+V*.12+Y/s*.15;return Z?r(H,"#000000",.6):ue?r(O,"#ffffff",.35):r(O,H,xe)})}function l(D){return a(function(O,H){var z="#4a5a52",Y="#232c28";if(H<6||H>57)return r("#2a3430","#000000",.3+n(O,H,D)*.2);if(H>=28&&H<=33&&(O&31)>3&&(O&31)<28){var V=H===30||H===31?"#7dff9a":"#2f8a4a";return r(V,"#000000",n(O,H,D)*.2)}var Z=(O&31)<2,ue=H>40&&H<54&&(H&3)<2&&(O&31)>6&&(O&31)<26;return Z?r(Y,"#000000",.5):ue?r("#1a211e","#000000",.3):r(z,Y,n(O,H,D)*.5)})}function h(D){return a(function(O,H){var z=n(O,H,D)*.4+n(O>>2,H>>2,D+5)*.6,Y=Math.sin(O*.22+Math.sin(H*.13+D)*2.1)+Math.sin(H*.18+O*.05);return Y>1.45?r("#ff7a18","#ffd23e",n(O,H,D+2)):Y>1.2?r("#8a1e08","#ff5a10",.5):r("#4a1410","#1c0605",z)})}function f(D){return a(function(O,H){var z="#5a5f68",Y="#2a2d33",V=Math.abs(O-32)<1,Z=(H&15)<2,ue=O<3||O>60||H<3||H>60;if(D&&H>8&&H<20&&!V){var xe=D==="red"?"#d02020":"#2050e0";return r(xe,"#000000",(H===9||H===19?.5:0)+n(O,H,40)*.2)}return V?r("#101216","#000000",.3):ue?r(Y,"#000000",.4):Z?r(Y,z,.3):r(z,Y,n(O,H,17)*.4+H/s*.2)})}function p(D){return a(function(O,H){var z="#4f4a42",Y="#28241e",V=O>16&&O<48,Z=H>14&&H<50;if(V&&Z){var ue=O>24&&O<40,xe=D?H>32&&H<46:H>18&&H<32;return ue&&xe?r(D?"#30d040":"#d03030","#000000",n(O,H,3)*.25):r("#1c1a16","#000000",.3)}var pe=O<2||O>61||H<2||H>61;return pe?r(Y,"#000000",.5):r(z,Y,n(O,H,21)*.5)})}function g(D,O,H){return a(function(z,Y){var V=(z>>4)+(Y>>4)&1,Z=(z&15)<1||(Y&15)<1,ue=n(z,Y,D)*.4;return Z?r(H,"#000000",.55):r(V?O:H,"#000000",ue+V*.05)})}var y={o:"#1c0e06",b:"#9a5226",d:"#6b3413",c:"#e08a28",h:"#f7b24a",e:"#ffe14a",m:"#3a1006",t:"#f0e6c8",x:"#f0e6c8",r:"#c03018",f:"#ff8a18",g:"#ffd23e"},v=["......tt........",".......tt.......","........oooooooo","........obbbbbbb","........obbddddd","........obbeedbb","........obbbbbbb","........obdmtmbb","........obbmmbbb","........oooooobb","....oooooooooooo","...obbbbbbdccccc","..obbbo.obdccchc","..obbo..obdcchhc","..obbo..obddcccc",".obbo...obbdcccc",".obbo...obbddccc",".otto...obbbdddd",".ott....obbbbddd","........obbbbbbd","........oobbbbbb",".........obbo...",".........obbo...",".........obbo...",".........obbo...",".........oddo...",".........oddo...","........obddo...","........odddo...","......ottdddo...","......ooooooo...","................"],m=v.slice(0,21).concat(["........obbo....","........obbo....","........obbo....","........obbo....","........oddo....","........oddo....",".......obddo....",".......odddo....",".....ottdddo....",".....oooooo.....","................"]),x=["..gf..tt........",".gffg..tt.......",".offo...oooooooo",".otto...obbbbbbb",".obbo...obbddddd",".obbo...obeeedbb",".obbo...obbbbbbb",".obbo...obmmttbb","..obbo..obbmmbbb","..obbo..oooooobb","..obooooooooooo.","...obbbbbdccccc.","....obbobdccchc.","........obdcchhc","........obddcccc","........obbdcccc","........obbddccc","........obbbdddd","........obbbbddd","........obbbbbbd","........oobbbbbb",".........obbo...",".........obbo...",".........obbo...",".........obbo...",".........oddo...",".........oddo...","........obddo...","........odddo...","......ottdddo...","......ooooooo...","................"],R=v.slice();R[5]="........obbxxdbb",R[7]="........obmmmmbb";var E=["................","................","................","................","................","................","......tt........",".......tt.......","........oooooooo","........obbbbbbb","........obxxdddb","........obmmmmbb",".....oooooooobbb","...obbbbbbdccccb","..obbbboobdcccbb",".obbbo..obddccbb",".otto...obbddddb","........obbbbbdd",".......oobbbbbbb","......obbbbbbbdd","................","................","................","................","................","................","................","................","................","................","................","................"],C=["................","................","................","................","................","................","................","................","................","................","................","................","................","......tt........",".......ttoooooo.","......obbbbbbbbo",".....obbxxddmmbo","....obbbbdddbbbo","...obbddccccbbdd","..obbbbbdddbbbbb","................","................","................","................","................","................","................","................","................","................","................","................"],L=["................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","..........tt....","....oo....ott...","...obbdoooobbdo.","..obbddbbbdddbbo",".orrbdddddbbdrro",".orrrbbdddbrrro.","..orrrrrrrrrro..","...ooooooooooo..","................","................"];function N(D){var O={o:"#200a10",p:"#d06a8a",q:"#9a3d5e",k:"#e898a8",t:"#f2ead0",m:"#41101c",e:"#ffd23e",x:"#f2ead0",r:"#b02030"};if(D)for(var H in D)O[H]=D[H];return O}var S=["................","................","......oooooooooo",".....opppppppppp","....oppkpppppppp","....opppeepppppp","....oppppppppppp","....opmmmmmmmmmm","....opmtmtmtmtmt","....opmmmmmmmmmm","....optmtmtmtmtm","....opqqqqqqqqqq",".....ooooooooooo","...oppppqqpppppp","..opppppoqpppppp","..opppo.oqpppppp","..oppo..oqqppppp","..otto..oqqqpppp","..ott...oqqqqppp","........oqqqqqpp","........ooqqqqqp",".........oqqqo..",".........oqqqo..",".........oqqo...","........oqqqo...","........ottto...","........ooooo...","................","................","................","................","................"],_=S.slice(0,21).concat(["........oqqqo...","........oqqqo...","........oqqo....",".......oqqqo....",".......ottto....",".......ooooo....","................","................","................","................"]),b=["................","......oooooooooo",".....opppppppppp","....oppkpppppppp","....opppeepppppp","....opmmmmmmmmmm","....opmttmttmttm","....opmmmmmmmmmm","....opmmmmmmmmmm","....opmmmmmmmmmm","....opmttmttmttm","....opmmmmmmmmmm","....opqqqqqqqqqq","...oppppqqpppppp","..opppppoqpppppp","..opppo.oqpppppp","..oppo..oqqppppp","..otto..oqqqpppp","..ott...oqqqqppp","........oqqqqqpp","........ooqqqqqp",".........oqqqo..",".........oqqqo..",".........oqqo...","........oqqqo...","........ottto...","........ooooo...","................","................","................","................","................"],A=S.slice();A[5]="....opppxxpppppp";var M=["................","................","................","................","................","................","................","......oooooooooo",".....opppppppppp","....oppxxppppppp","....opmmmmmmmmmm","....opmtmtmtmtmt","....opqqqqqqqqqq","...opppppqqppppp","..oppppppqqquppp".replace("u","q"),"..oppoooqqqqqppp","..oo...oqqqqqqpp",".......ooqqqqqqp","........oqqqqoo.","................","................","................","................","................","................","................","................","................","................","................","................","................"],P=["................","................","................","................","................","................","................","................","................","................","................","................","................","................","......ooooooooo.",".....oppppppppqo","....opxxpmmttppo","...oppppqqqqppqo","..oqqppppppqqqoo","...ooooooooooo..","................","................","................","................","................","................","................","................","................","................","................","................"],U=["................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................",".......oo.......",".....ooppoo.tt..","...oqpppppqoot..","..oqqpmmttppqqo.",".orrqqppppqqrro.",".orrrqqqqqrrro..","..orrrrrrrrro...","...oooooooooo...","................","................"],B={o:"#06141c",h:"#1e8aa0",H:"#6fe0ec",s:"#d8fff8",v:"#ffd23e",V:"#fff6b0",c:"#157a8a",C:"#3fd8c8",g:"#ffd23e",Y:"#fff6b0"},K=["..........",".....ooooo","...oohhhhh","..ohhHHhhh","..ohHhhhhh",".ohhhhoooo",".ohhhosvvv",".ohhhosvVV",".ohhhossss",".ohhhossss",".ohhhhosss","..ohhhooss","...ooooooo",".....ooccc","...ooccccg","..occcccCg",".occcCcccg",".occcCccgY",".occcCccgY",".occ.Ccccg",".oso.occcg",".oso.occcc","..o..oCCCC",".....occcc",".....occo.",".....occo.",".....occo.",".....oCco.",".....occo.",".....occo.",".....occo.","....ogggo.","....ooooo.",".........."],J=K.slice(0,24).concat(["....occo..","....occo..","...occo...","...oCco...","...occo...","..occo....","..occo....",".ogggo....",".ooooo....",".........."]),ne=K.slice();ne[13]=".o...ooccc",ne[14]=".so.occccg",ne[15]=".so.occcCg",ne[16]=".oc.occccg",ne[19]="..o..Ccccg",ne[20]=".....occcg",ne[21]=".....occcc";function se(D,O,H){return D.map(function(z,Y){for(var V="",Z=0;Z<z.length;Z++)V+=z[Z]!=="."&&n(Z,Y,H)<O?z[Z]:".";return V})}function ie(D){var O={};for(var H in B)O[H]=B[H];if(D)for(var z in D)O[z]=D[z];return O}function ae(D){var O={o:"#1a1008",f:"#e85818",F:"#ffa018",s:"#d8a06a",S:"#a8744a",w:"#f0ead8",k:"#28221a",m:"#5a1408",t:"#e8e0c8",r:"#c01818",c:"#b84a10",C:"#7e2e08",g:"#888078",x:"#301010"},H=D.gray?{s:"#9a9488",S:"#6e6a60"}:{};for(var z in H)O[z]=H[z];var Y=[".osskwwkssss",".osskwkksss.".replace(".$",""),".ossskksssss"],V=[".osssookssss",".osskwkksss.",".ossskksssss"],Z=[".osssssossss",".ossooosssss",".osssssossss"],ue=[".osskoskssss",".osssksossss",".osskoskssss"],xe=["..osssssssss","..osssmmmmmm","..osssssssss"],pe=["..osssssssss","..ossmmmmmmm","..osSmmsssss"],ye=["..osssmmmmmm","..ossmtttttt","..osssmmmmmm"],be=["..ossmmmmmss","..osmmttmmss","..ossmmmmmss"],He=D.eyes==="squint"?V:D.eyes==="shut"?Z:D.eyes==="x"?ue:Y,Xe=D.mouth==="grim"?pe:D.mouth==="grin"?ye:D.mouth==="ouch"?be:xe,W=[".....ffF....","...fFffffF..","..ffFfffffF.","..offffffff.",".offFffffffF",".offffffffff",".offosssssss",".oosssssssss","..ossssssSSS","..osssssssss",He[0],He[1],He[2],"..osssssssss","..ossssssSss","..osssssSSss","..ossssssSss","..osssssssss",Xe[0],Xe[1],Xe[2],"..osssssssss","...ossssssSS","...ossssssss","....oossssss","..ooccoosSSS".replace("..",".o"),".occcccooooo","occCcccccccc"];return W=W.map(function(Se){for(Se=Se.replace(/\$/g,""),Se.length>12&&(Se=Se.slice(0,12));Se.length<12;)Se+=".";return Se}),D.blood>=1&&(W[8]="..osrrsssSSS".slice(0,12),W[9]="..ossrssssss"),D.blood>=2&&(W[14]="..osrssssrss",W[15]="..orrssSSrss",W[21]="..osrsssssrs"),D.blood>=3&&(W[6]=".offosrrssss",W[13]="..orrsssrrss",W[22]="...orrsssrSS".slice(0,12)),t(W,O,{mirror:!0})}var Re={o:"#0e0c0a",g:"#4a4e56",G:"#6a707c",d:"#26282e",s:"#d8a06a",S:"#a8744a",w:"#7a4a28",W:"#5a3418",y:"#c8b040",k:"#16181c"},Ue=["............","....oooo....","..oossssoo..",".ossssssss o".replace(" ","s"),".osssSsssss.","ossssSSssss.","osssssSssss.","ossssssssss.","osSSsssssss.","ossssssssss.",".ossssssss..",".ossssssss..","..ossssss...","..oswwwws...","..owwWWww...","..owWWWWw...","..owwwwww...","...oooooo..."].map(function(D){for(;D.length<12;)D+=".";return D.slice(0,12)}),$e=["...........ooo","..........ookk","..........ogkk","..........ogGd","..........ogGd",".........ooGgd",".........ogGGd",".........ogGGd",".........ogGGd",".........odddd",".........ogGGd",".........ogGGd",".........odddd","..........oggd","..........oggd","..........ogdd",".......ooooddd",".....oossssodd","....ossssssodd","...ossssSssood","..osssssSSssod","..ossssssSssod","..osSSssssssod","..ossssssssood","...osssssssso.","...osssssssso.","....oossssoo..","......oooo...."],me=[".........ooo","........ookk","........odkk","........odgd","........odgd","........odgd","........odgd","........odgd","........odgd","........odgd","........oddd",".......ooddd","......oWwwdd","......oWwwwd","......oWWwwd","......oWWwwd","......ooWWwd",".......ooWWd","........oddd","........oggd",".....oooogdd","...oosssoggd","..ossssssogd","..ossSsssogd",".osssSSssood",".ossssssssod",".osSSsssssod",".ossssssssod","..ossssssso.","..ossssssso.","...oosssoo..",".....oooo..."];function le(D,O,H){for(var z=new Uint32Array(D*O),Y=(D-1)/2,V=(O-1)/2,Z=0;Z<O;Z++)for(var ue=0;ue<D;ue++){var xe=(ue-Y)/(D/2),pe=(Z-V)/(O/2),ye=Math.sqrt(xe*xe+pe*pe),be=H(ye,ue,Z);be&&(z[Z*D+ue]=be)}return e(D,O,z)}function G(D){return le(12,12,function(O,H,z){var Y=n(H,z,D)*.3;return O+Y<.38?i("#fff8d0"):O+Y<.68?i("#ffd23e"):O+Y<.95?i("#ff7a18"):0})}function j(D){return le(14,14,function(O,H,z){var Y=n(H,z,D)*.3;return O+Y<.38?i("#eaffd0"):O+Y<.68?i("#8aff3e"):O+Y<.95?i("#2fa818"):0})}function de(D,O,H){return le(D,D,function(z,Y,V){var Z=n(Y,V,O)*.55;return z+Z<.3*H?i("#fff8d0"):z+Z<.55*H?i("#ffd23e"):z+Z<.8*H?i("#ff7a18"):z+Z<1*H?i("#a83010"):0})}function ge(D,O){return le(O?8:6,O?8:6,function(H,z,Y){var V=n(z,Y,D)*.4;return H+V<.5?i("#c8c4bc"):H+V<.9?i("#78746c"):0})}function Me(D,O){return le(O?8:6,O?8:6,function(H,z,Y){var V=n(z,Y,D)*.45;return H+V<.45?i("#e04020"):H+V<.9?i("#901810"):0})}function Ge(){for(var D=16,O=22,H=new Uint32Array(D*O),z=0;z<O;z++)for(var Y=0;Y<D;Y++){var V=Math.abs((Y-7.5)/7.5);if(!(V>1)){var Z=V>.88||z===0||z===O-1,ue=1-V*V*.75,xe=z===4||z===16,pe=z>=8&&z<=12,ye=pe?"#c05010":"#5c554c";z>=1&&z<=2&&(ye="#3a352e");var be=r(ye,"#000000",1-ue+(xe?.35:0)+n(Y,z,77)*.2);Z&&(be=i("#16130f")),z===1&&V<.6&&n(Y,z,8)>.4&&(be=i("#ff9a28")),H[z*D+Y]=be}}return e(D,O,H)}function Qe(D){for(var O=10,H=28,z=new Uint32Array(O*H),Y=12;Y<28;Y++)for(var V=4;V<=5;V++)z[Y*O+V]=i(Y>24?"#3a2812":"#6a4a22");z[12*O+3]=i("#8a6432"),z[12*O+6]=i("#8a6432");for(var Z=0;Z<12;Z++)for(var ue=0;ue<O;ue++){var xe=(ue-4.5)/4.2,pe=(Z-8)/8,ye=Math.sqrt(xe*xe*1.6+pe*pe),be=n(ue,Z,D)*.5;ye+be<.45?z[Z*O+ue]=i("#fff0b0"):ye+be<.75?z[Z*O+ue]=i("#ffd23e"):ye+be<1&&(z[Z*O+ue]=i("#ff7a18"))}return e(O,H,z)}function Oe(D,O,H,z,Y){for(var V=new Uint32Array(D*O),Z=0;Z<O;Z++)for(var ue=0;ue<D;ue++){var xe=ue===0||Z===0||ue===D-1||Z===O-1,pe=xe?i("#14120e"):r(H,z,Z/O*.6+n(ue,Z,5)*.15);V[Z*D+ue]=pe}return Y&&Y(V,D,O),e(D,O,V)}function rt(D){return function(O,H,z){for(var Y=H>>1,V=z>>1,Z=i(D),ue=-(z>>2);ue<=z>>2;ue++)O[(V+ue)*H+Y]=Z,O[(V+ue)*H+Y-1]=Z;for(var xe=-(H>>2);xe<=H>>2;xe++)O[V*H+Y+xe]=Z,O[(V-1)*H+Y+xe]=Z}}function gt(D){var O=["oooooooo","occccccb".replace("b","o"),"occwwcco","occwwcco","occcccco","occcccco","ocwwwwco","occcccco","occcccco","oooooooo"];return t(O,{o:"#14120e",c:D,w:"#f0ead8"})}function nt(){var D=30,O=10,H=new Uint32Array(D*O);function z(ue,xe,pe){ue>=0&&ue<D&&xe>=0&&xe<O&&(H[xe*D+ue]=i(pe))}for(var Y=2;Y<22;Y++)z(Y,3,"#3a3e46"),z(Y,4,"#5a5f68"),z(Y,5,"#26282e");for(var V=8;V<15;V++)z(V,6,"#5a3418");for(var Z=21;Z<29;Z++)z(Z,4+(Z-21>>1),"#5a3418"),z(Z,5+(Z-21>>1),"#7a4a28");return z(1,3,"#16130f"),z(1,4,"#16130f"),e(D,O,H)}function vt(){return le(14,14,function(D,O,H){return D<.3?i("#fff8d0"):D<.6?i("#ffd23e"):D<.85?i("#ff7a18"):D<1?i("#a03008"):0})}function Ct(){return le(20,20,function(D,O,H){var z=Math.atan2(H-9.5,O-9.5),Y=.55+.45*Math.abs(Math.sin(z*4));return D<.35*Y?i("#fff8d0"):D<.7*Y?i("#ffd23e"):D<1*Y?i("#ff7a18"):0})}var Qt={A:[2,5,7,5,5],B:[6,5,6,5,6],C:[3,4,4,4,3],D:[6,5,5,5,6],E:[7,4,6,4,7],F:[7,4,6,4,4],G:[3,4,5,5,3],H:[5,5,7,5,5],I:[7,2,2,2,7],J:[1,1,1,5,2],K:[5,6,4,6,5],L:[4,4,4,4,7],M:[5,7,5,5,5],N:[6,5,5,5,5],O:[2,5,5,5,2],P:[6,5,6,4,4],Q:[2,5,5,6,3],R:[6,5,6,6,5],S:[3,4,2,1,6],T:[7,2,2,2,2],U:[5,5,5,5,7],V:[5,5,5,5,2],W:[5,5,5,7,5],X:[5,5,2,5,5],Y:[5,5,2,2,2],Z:[7,1,2,4,7],0:[7,5,5,5,7],1:[2,6,2,2,7],2:[6,1,2,4,7],3:[6,1,2,1,6],4:[5,5,7,1,1],5:[7,4,6,1,6],6:[3,4,6,5,2],7:[7,1,2,2,2],8:[7,5,7,5,7],9:[2,5,3,1,6]," ":[0,0,0,0,0],".":[0,0,0,0,2],",":[0,0,0,2,4],"!":[2,2,2,0,2],"?":[6,1,2,0,2],":":[0,2,0,2,0],"-":[0,0,7,0,0],"+":[0,2,7,2,0],"%":[5,1,2,4,5],"/":[1,1,2,4,4],"'":[2,2,0,0,0],_:[0,0,0,0,7],">":[4,2,1,2,4],"<":[1,2,4,2,1],'"':[5,5,0,0,0],"=":[0,7,0,7,0],"(":[1,2,2,2,1],")":[4,2,2,2,4],"*":[0,5,2,5,0],"#":[5,7,5,7,5],"^":[2,5,0,0,0],"&":[2,5,2,5,3]};function Mt(D,O,H,z,Y){Y=Y||{};var V=Y.scale||1,Z=Y.color||"#e8e0c8",ue=Y.shadow;if(O=String(O).toUpperCase(),Y.center&&(H-=Math.floor(kt(O,V)/2)),Y.right&&(H-=kt(O,V)),ue){var xe=typeof ue=="string"?ue:"#000000";Mt(D,O,H+V,z+V,{scale:V,color:xe})}D.fillStyle=Z;for(var pe=0;pe<O.length;pe++){for(var ye=Qt[O[pe]]||Qt["?"],be=0;be<5;be++)for(var He=ye[be],Xe=0;Xe<3;Xe++)He&4>>Xe&&D.fillRect(H+Xe*V,z+be*V,V,V);H+=4*V}}function kt(D,O){return String(D).length*4*(O||1)-(O||1)}var X={};X.tex={1:o(1,"#8a4232","#4a1e14","#2a1812"),2:c(2,"#8a8578","#4a463c"),3:u(3,"#5a5f68","#26282e"),4:l(4),5:h(5),6:f(null),7:f("red"),8:f("blue"),9:p(!1),10:p(!0),11:o(1,"#8a4232","#4a1e14","#2a1812")},X.floors={slab:g(11,"#4e4a42","#38342c"),tech:g(12,"#3c4440","#2a302c"),hell:a(function(D,O){var H=n(D,O,13)*.5+n(D>>2,O>>2,14)*.5,z=Math.sin(D*.19+Math.sin(O*.11)*2)+Math.sin(O*.15);return z>1.5?r("#ff7a18","#ffd23e",H):r("#3a100c","#180404",H)}),ceilDark:g(15,"#2e2b26","#201d18"),ceilTech:a(function(D,O){var H=(D&31)>12&&(D&31)<20&&(O&31)>12&&(O&31)<20;return H?r("#fff0c0","#c0a860",n(D,O,16)*.3):r("#2a2e2c","#1a1d1b",n(D,O,16)*.5)}),ceilHell:a(function(D,O){return r("#241010","#100404",n(D,O,17)*.6)})};var zt=y,ut=N(null),F=N({p:"#c8502a",q:"#7e2412",k:"#e8804a",e:"#a0fFff".toLowerCase()});X.mobs={imp:{walkA:t(v,zt,{mirror:!0}),walkB:t(m,zt,{mirror:!0}),attack:t(x,zt,{mirror:!0}),pain:t(R,zt,{mirror:!0}),die1:t(E,zt,{mirror:!0}),die2:t(C,zt,{mirror:!0}),corpse:t(L,zt,{mirror:!0})},gnasher:{walkA:t(S,ut,{mirror:!0}),walkB:t(_,ut,{mirror:!0}),attack:t(b,ut,{mirror:!0}),pain:t(A,ut,{mirror:!0}),die1:t(M,ut,{mirror:!0}),die2:t(P,ut,{mirror:!0}),corpse:t(U,ut,{mirror:!0})},knight:{walkA:t(S,F,{mirror:!0}),walkB:t(_,F,{mirror:!0}),attack:t(b,F,{mirror:!0}),pain:t(A,F,{mirror:!0}),die1:t(M,F,{mirror:!0}),die2:t(P,F,{mirror:!0}),corpse:t(U,F,{mirror:!0})},riley:{walkA:t(K,B,{mirror:!0}),walkB:t(J,B,{mirror:!0}),attack:t(ne,ie({v:"#ffffff",V:"#ffffff",Y:"#ffffff",g:"#fff6b0"}),{mirror:!0}),pain:t(K,ie({c:"#e8fffc",C:"#ffffff",h:"#9ef0f8"}),{mirror:!0}),shield:t(K,ie({c:"#c89018",C:"#ffd23e",h:"#e0a020",H:"#fff0a0"}),{mirror:!0}),die1:t(se(K,.6,71),ie({c:"#6fe0ec"}),{mirror:!0}),die2:t(se(K,.22,72),ie({c:"#d8fff8",h:"#d8fff8"}),{mirror:!0}),corpse:null}},X.things={barrel:Ge(),torchA:Qe(31),torchB:Qe(87),stim:Oe(10,8,"#e8e4dc","#a8a49c",rt("#d02020")),medkit:Oe(16,12,"#e8e4dc","#a8a49c",rt("#d02020")),clip:Oe(10,8,"#7a7468","#4a463c",function(D,O,H){for(var z=2;z<O-2;z+=2)D[2*O+z]=i("#c8a030")}),shells:Oe(14,9,"#b03020","#5e1810",function(D,O,H){for(var z=2;z<O-2;z+=2)D[3*O+z]=i("#c8a030"),D[4*O+z]=i("#c8a030")}),armor:t(["...oooo.","..oggggo",".ogggggg",".oggGGgg",".ogggggg",".ogggggg","..ogggg o".replace(" ",""),"..oggggg","...ooooo"].map(function(D){for(;D.length<8;)D+=".";return D.slice(0,8)}),{o:"#14120e",g:"#3a7a30",G:"#6ab858"},{mirror:!0}),keyRed:gt("#d02020"),keyBlue:gt("#2050e0"),shotgunPickup:nt(),orb:vt(),fireballA:G(41),fireballB:G(42),greenballA:j(43),greenballB:j(44),boom1:de(24,51,.7),boom2:de(28,52,1),boom3:de(28,53,1.25),puffA:ge(61,!0),puffB:ge(62,!1),bloodA:Me(63,!0),bloodB:Me(64,!1)},X.faces={ok:ae({eyes:"open",mouth:"calm",blood:0}),hurt1:ae({eyes:"open",mouth:"grim",blood:1}),hurt2:ae({eyes:"squint",mouth:"grim",blood:2}),hurt3:ae({eyes:"squint",mouth:"ouch",blood:3}),pain:ae({eyes:"shut",mouth:"ouch",blood:1}),grin:ae({eyes:"open",mouth:"grin",blood:0}),dead:ae({eyes:"x",mouth:"ouch",blood:3,gray:!0})},X.guns={fist:t(Ue,Re,{mirror:!0}),pistol:t($e,Re,{mirror:!0}),shotgun:t(me,Re,{mirror:!0}),flash:Ct()};var T={};return X.secretTex=function(D){if(T[D])return T[D];for(var O=X.tex[D]||X.tex[1],H=new Uint32Array(O.data),z=0,Y=0;Y<H.length;Y++){var V=H[Y];z+=(V>>16&255)+(V>>8&255)+(V&255)}var Z=z/H.length/3>70;function ue(be){var He=H[be],Xe=He>>16&255,W=He>>8&255,Se=He&255;Z?(Xe*=.35,W*=.35,Se*=.35):(Xe=Xe*.5+110,W=W*.5+95,Se=Se*.5+80),H[be]=(4278190080|(Xe&255)<<16|(W&255)<<8|Se&255)>>>0}for(var xe=22,pe=6;pe<58;pe++)xe+=pe%7===0?1:pe%11===0?-1:0,ue(pe*64+xe),ue(pe*64+xe+1);for(var ye=0;ye<7;ye++)ue((30+ye)*64+xe+2+ye);return T[D]={w:64,h:64,data:H},T[D]},X.drawText=Mt,X.textWidth=kt,X.hex=i,X})();typeof xu!="undefined"&&(xu.exports=s0)});var Wf=Ma((oS,yu)=>{"use strict";var a0=(function(){var i=null,e=null,t=null,n=null,r=!0,s=!1,a=.5;try{r=localStorage.getItem("firebird.music")!=="off"}catch{}function o(){if(i)return i.state==="suspended"&&i.resume(),!0;try{var M=window.AudioContext||window.webkitAudioContext;return M?(i=new M,e=i.createGain(),e.gain.value=a,e.connect(i.destination),t=i.createGain(),t.gain.value=.9,t.connect(e),n=i.createGain(),n.gain.value=.3,n.connect(e),!0):!1}catch{return!1}}function c(M){if(i){var P=i.currentTime+(M.delay||0),U=i.createOscillator();U.type=M.type||"square",U.frequency.setValueAtTime(M.f0,P),M.f1&&U.frequency.exponentialRampToValueAtTime(Math.max(20,M.f1),P+M.dur);var B=i.createGain(),K=M.gain||.3;B.gain.setValueAtTime(1e-4,P),B.gain.exponentialRampToValueAtTime(K,P+(M.attack||.008)),B.gain.exponentialRampToValueAtTime(1e-4,P+M.dur);var J=t;if(M.pan&&i.createStereoPanner){var ne=i.createStereoPanner();ne.pan.value=Math.max(-1,Math.min(1,M.pan)),B.connect(ne),ne.connect(M.bus||t),J=null}else B.connect(M.bus||t);if(M.wobble){var se=i.createOscillator(),ie=i.createGain();se.frequency.value=M.wobble,ie.gain.value=M.f0*.25,se.connect(ie),ie.connect(U.frequency),se.start(P),se.stop(P+M.dur)}U.connect(B),U.start(P),U.stop(P+M.dur+.02)}}var u=null;function l(){if(u)return u;var M=i.sampleRate*1.5;u=i.createBuffer(1,M,i.sampleRate);for(var P=u.getChannelData(0),U=0;U<M;U++)P[U]=Math.random()*2-1;return u}function h(M){if(i){var P=i.currentTime+(M.delay||0),U=i.createBufferSource();U.buffer=l(),U.loop=!0;var B=i.createBiquadFilter();B.type=M.type||"lowpass",B.frequency.setValueAtTime(M.f0||1e3,P),M.f1&&B.frequency.exponentialRampToValueAtTime(Math.max(30,M.f1),P+M.dur),B.Q.value=M.q||.8;var K=i.createGain(),J=M.gain||.3;if(K.gain.setValueAtTime(1e-4,P),K.gain.exponentialRampToValueAtTime(J,P+(M.attack||.006)),K.gain.exponentialRampToValueAtTime(1e-4,P+M.dur),U.connect(B),B.connect(K),M.pan&&i.createStereoPanner){var ne=i.createStereoPanner();ne.pan.value=Math.max(-1,Math.min(1,M.pan)),K.connect(ne),ne.connect(t)}else K.connect(t);U.start(P),U.stop(P+M.dur+.02)}}var f={pistol:function(M,P){h({dur:.14,gain:.5*M,f0:2400,f1:300,pan:P}),c({f0:220,f1:90,dur:.08,type:"square",gain:.2*M,pan:P})},shotgun:function(M,P){h({dur:.38,gain:.8*M,f0:1600,f1:120,pan:P}),c({f0:130,f1:45,dur:.3,type:"sawtooth",gain:.35*M,pan:P})},pump:function(M,P){h({dur:.05,gain:.3*M,f0:900,type:"bandpass",q:2,delay:0,pan:P}),h({dur:.05,gain:.3*M,f0:700,type:"bandpass",q:2,delay:.13,pan:P})},punch:function(M,P){h({dur:.1,gain:.25*M,f0:500,f1:150,pan:P}),c({f0:90,f1:50,dur:.1,type:"sine",gain:.4*M,pan:P})},whiff:function(M,P){h({dur:.12,gain:.15*M,f0:600,f1:1400,type:"bandpass",q:1.5,pan:P})},doorOpen:function(M,P){h({dur:.5,gain:.22*M,f0:200,f1:500,pan:P}),c({f0:70,f1:130,dur:.5,type:"sawtooth",gain:.12*M,pan:P})},doorClose:function(M,P){h({dur:.4,gain:.2*M,f0:400,f1:150,pan:P}),c({f0:120,f1:60,dur:.4,type:"sawtooth",gain:.12*M,pan:P}),c({f0:60,dur:.08,type:"sine",gain:.3*M,delay:.38,pan:P})},locked:function(M,P){c({f0:150,dur:.09,type:"square",gain:.25*M,pan:P}),c({f0:110,dur:.12,type:"square",gain:.25*M,delay:.11,pan:P})},switchFlip:function(M,P){h({dur:.06,gain:.3*M,f0:1200,type:"bandpass",q:2,pan:P}),c({f0:90,f1:55,dur:.18,type:"square",gain:.3*M,delay:.05,pan:P})},pickup:function(M,P){c({f0:660,dur:.06,type:"square",gain:.15*M,pan:P}),c({f0:880,dur:.08,type:"square",gain:.15*M,delay:.06,pan:P})},health:function(M,P){c({f0:440,dur:.08,type:"sine",gain:.25*M,pan:P}),c({f0:587,dur:.12,type:"sine",gain:.25*M,delay:.07,pan:P})},keyPickup:function(M,P){[523,659,784,1047].forEach(function(U,B){c({f0:U,dur:.09,type:"square",gain:.16,delay:B*.07,pan:P})})},weaponUp:function(M,P){[180,260,380,520].forEach(function(U,B){c({f0:U,dur:.08,type:"sawtooth",gain:.18,delay:B*.05,pan:P})})},secret:function(M,P){[880,1108,1318,1760].forEach(function(U,B){c({f0:U,dur:.14,type:"triangle",gain:.2,delay:B*.09,pan:P})})},orb:function(M,P){[220,330,440,660,880].forEach(function(U,B){c({f0:U,dur:.2,type:"triangle",gain:.2,delay:B*.08,pan:P})})},impSight:function(M,P){c({f0:110,f1:55,dur:.5,type:"sawtooth",gain:.3*M,wobble:9,pan:P})},knightSight:function(M,P){c({f0:75,f1:35,dur:.9,type:"sawtooth",gain:.4*M,wobble:6,pan:P})},rileySight:function(M,P){[523,659,784,1047].forEach(function(U,B){c({f0:U,dur:.12,type:"triangle",gain:.22*M,delay:B*.07,pan:P})})},rileyTalk:function(M,P){c({f0:880,f1:1320,dur:.06,type:"square",gain:.08}),c({f0:1320,dur:.05,type:"square",gain:.07,delay:.07})},rileyShoot:function(M,P){c({f0:1400,f1:500,dur:.18,type:"triangle",gain:.25*M,pan:P})},rileyShield:function(M,P){c({f0:300,f1:900,dur:.3,type:"sine",gain:.3*M,wobble:18,pan:P})},rileyDerez:function(M,P){[1568,1319,1047,784,659,523,392].forEach(function(U,B){c({f0:U,dur:.14,type:"triangle",gain:.2,delay:B*.09,pan:P})})},impShoot:function(M,P){h({dur:.22,gain:.25*M,f0:400,f1:1200,type:"bandpass",q:1.5,pan:P})},fireExplode:function(M,P){h({dur:.3,gain:.4*M,f0:900,f1:100,pan:P})},barrelBoom:function(M,P){h({dur:.7,gain:.9*M,f0:1400,f1:60,pan:P}),c({f0:65,f1:28,dur:.6,type:"sine",gain:.6*M,pan:P})},enemyPain:function(M,P){c({f0:200,f1:120,dur:.13,type:"square",gain:.22*M,pan:P})},enemyDie:function(M,P){c({f0:170,f1:40,dur:.5,type:"sawtooth",gain:.3*M,wobble:12,pan:P}),h({dur:.25,gain:.2*M,f0:700,f1:150,delay:.05,pan:P})},playerPain:function(M,P){c({f0:170,f1:90,dur:.16,type:"square",gain:.3,pan:P}),h({dur:.1,gain:.15,f0:500,f1:200,pan:P})},playerDie:function(M,P){c({f0:220,f1:28,dur:1.3,type:"sawtooth",gain:.4,wobble:5,pan:P})},noAmmo:function(M,P){h({dur:.03,gain:.2,f0:1800,type:"bandpass",q:3,pan:P})},tally:function(M,P){c({f0:990,dur:.03,type:"square",gain:.12,pan:P})},menu:function(M,P){c({f0:520,dur:.05,type:"square",gain:.15,pan:P})},menuPick:function(M,P){c({f0:520,dur:.06,type:"square",gain:.18}),c({f0:780,dur:.09,type:"square",gain:.18,delay:.06})}};function p(M,P,U){if(!(!i||i.state==="suspended")){var B=f[M];if(B){var K=1/(1+(P||0)*.13);if(!(K<.04))try{B(K,U||0)}catch{}}}}var g=168,y=60/g/4,v=[164.81,164.81,146.83,130.81,123.47,130.81,146.83,155.56],m=null,x=0,R=0;function E(M,P,U){var B=i.createOscillator(),K=i.createOscillator();B.type="sawtooth",K.type="square",B.frequency.value=P,K.frequency.value=P*.5;var J=i.createBiquadFilter();J.type="lowpass",J.frequency.setValueAtTime(U?1400:800,M),J.frequency.exponentialRampToValueAtTime(200,M+y*1.8);var ne=i.createGain();ne.gain.setValueAtTime(1e-4,M),ne.gain.exponentialRampToValueAtTime(U?.5:.34,M+.005),ne.gain.exponentialRampToValueAtTime(1e-4,M+y*(U?1.9:.9)),B.connect(J),K.connect(J),J.connect(ne),ne.connect(n),B.start(M),B.stop(M+y*2),K.start(M),K.stop(M+y*2)}function C(M,P){if(P==="kick"){var U=i.createOscillator();U.type="sine",U.frequency.setValueAtTime(110,M),U.frequency.exponentialRampToValueAtTime(40,M+.1);var B=i.createGain();B.gain.setValueAtTime(.5,M),B.gain.exponentialRampToValueAtTime(.001,M+.12),U.connect(B),B.connect(n),U.start(M),U.stop(M+.13)}else{var K=i.createBufferSource();K.buffer=l(),K.loop=!0;var J=i.createBiquadFilter();J.type="highpass",J.frequency.value=P==="snare"?1800:6e3;var ne=i.createGain();ne.gain.setValueAtTime(P==="snare"?.3:.12,M),ne.gain.exponentialRampToValueAtTime(.001,M+(P==="snare"?.09:.03)),K.connect(J),J.connect(ne),ne.connect(n),K.start(M),K.stop(M+.1)}}function L(){if(!(!s||!i)){for(;x<i.currentTime+.15;){var M=R%16,P=Math.floor(R/16),U=M>>2,B=M&3,K=82.41;B===0||B===2?E(x,K,!1):B===3&&E(x,v[(P*4+U)%v.length],!0),(M===0||M===8)&&C(x,"kick"),(M===4||M===12)&&C(x,"snare"),(M&1)===0&&C(x,"hat"),x+=y,R++}m=setTimeout(L,40)}}function N(){!i||!r||s||(s=!0,x=i.currentTime+.05,R=0,L())}function S(){s=!1,m&&(clearTimeout(m),m=null)}function _(M){r=!!M;try{localStorage.setItem("firebird.music",r?"on":"off")}catch{}return r?N():S(),r}function b(){return _(!r)}function A(M){a=Math.max(0,Math.min(1,M))*.72,e&&(e.gain.value=a)}return{init:o,play:p,startMusic:N,stopMusic:S,toggleMusic:b,setMusic:_,setVolume:A,isMusicOn:function(){return r}}})();typeof yu!="undefined"&&(yu.exports=a0)});var qf=Ma((cS,Mu)=>{"use strict";var o0=(function(){var i="firebird.settings.v1",e="firebird.progress.v1",t={sens:5,volume:7,crosshair:!0,tips:!0,shake:!0,goalMarker:!0,difficulty:1,seenTips:{}};function n(){try{return window.localStorage}catch{return null}}function r(f){var p=n();if(!p)return null;try{var g=JSON.parse(p.getItem(f));return g&&typeof g=="object"?g:null}catch{return null}}function s(f,p){var g=n();if(g)try{g.setItem(f,JSON.stringify(p))}catch{}}var a={},o=r(i)||{};for(var c in t){var u=c in o&&o[c]!==null&&typeof o[c]==typeof t[c];a[c]=u?o[c]:t[c]}a.sens=Math.max(1,Math.min(10,a.sens|0)),a.volume=Math.max(0,Math.min(10,a.volume|0)),a.difficulty=Math.max(0,Math.min(2,a.difficulty|0));var l=r(e)||{};typeof l.unlocked!="number"&&(l.unlocked=0),(!l.best||typeof l.best!="object")&&(l.best={});var h=["PAR","KILLS","ITEMS","SECRETS"];return{v:a,save:function(){s(i,a)},progress:l,unlock:function(f){f>l.unlocked&&(l.unlocked=f,s(e,l))},record:function(f,p){var g=l.best[f]||{time:null,medals:{}},y=[];p.time<=p.par&&y.push("PAR"),p.kills>=p.totalKills&&y.push("KILLS"),p.items>=p.totalItems&&y.push("ITEMS"),p.secrets>=p.totalSecrets&&y.push("SECRETS");var v=y.filter(function(x){return!g.medals[x]}),m=g.time===null||p.time<g.time;return m&&(g.time=Math.floor(p.time)),y.forEach(function(x){g.medals[x]=!0}),l.best[f]=g,s(e,l),{newBest:m,medals:y,fresh:v}},best:function(f){return l.best[f]||null},MEDALS:h}})(),l0=(function(){var i=[],e=320,t=200;function n(){return i[i.length-1]||null}function r(_){return typeof _=="function"?_():_}function s(_){return r(_.items)||[]}function a(_){return _&&!(_.disabled&&_.disabled())}function o(_,b,A){for(var M=s(_),P=M.length,U=0;U<P;U++){var B=((b+U*A)%P+P)%P;if(a(M[B]))return B}return 0}function c(_){return{screen:_,sel:o(_,_.sel||0,1),hover:-1}}function u(_){i=[c(_)]}function l(_){i.push(c(_)),SND.play("menu")}function h(_){i[i.length-1]=c(_)}function f(){i=[]}function p(){return i.length>0}function g(){if(i.length>1)return i.pop(),SND.play("menu"),!0;var _=n();return _&&_.screen.onBack?(_.screen.onBack(),!0):!1}function y(_){var b=n(),A=s(b.screen).length;A&&(b.sel=o(b.screen,b.sel+_,_),SND.play("menu"))}function v(_,b){a(_)&&(_.adjust?(_.adjust(b||1),SND.play("menu")):_.action&&(SND.play("menuPick"),_.action()))}function m(_){var b=n();if(!b)return!1;var A=s(b.screen),M=A[b.sel];switch(_){case"ArrowUp":case"KeyW":return y(-1),!0;case"ArrowDown":case"KeyS":case"Tab":return y(1),!0;case"ArrowLeft":case"KeyA":return M&&M.adjust&&v(M,-1),!0;case"ArrowRight":case"KeyD":return M&&M.adjust&&v(M,1),!0;case"Enter":case"NumpadEnter":case"Space":return v(M,1),!0;case"Escape":case"Backspace":return g()}return!1}function x(_){var b=_.scale||1;return{s:b,top:_.top||60,gap:_.gap||(b===1?12:14),x0:_.x0||56,x1:_.x1||264,rowH:5*b+5}}function R(_,b,A){for(var M=x(_),P=s(_),U=0;U<P.length;U++){var B=M.top+U*M.gap-3;if(A>=B&&A<B+M.rowH+1&&b>=M.x0-8&&b<=M.x1+8)return U}return-1}function E(_,b){var A=n();if(!A)return!1;var M=R(A.screen,_,b);return A.hover=M,M>=0&&a(s(A.screen)[M])&&M!==A.sel&&(A.sel=M,SND.play("menu")),M>=0&&a(s(A.screen)[M])}function C(_,b){var A=n();if(A){var M=R(A.screen,_,b);if(!(M<0)){var P=s(A.screen)[M];if(a(P)){A.sel=M;var U=x(A.screen),B=P.adjust&&_<U.x1-44&&_>(U.x0+U.x1)/2?-1:1;v(P,B)}}}}function L(_,b){for(var A=String(_).split(" "),M=[],P="",U=0;U<A.length;U++){var B=P?P+" "+A[U]:A[U];B.length>b&&P?(M.push(P),P=A[U]):P=B}return P&&M.push(P),M}function N(_,b,A,M,P){for(var U=M.slider[0],B=M.slider[1],K=M.slider[2](),J=B-U,ne=4,se=1,ie=J*(ne+se)-se,ae=b-ie,Re=0;Re<J;Re++)_.fillStyle=Re<K-U?P?"#ffd23e":"#e03828":"#2e2a24",_.fillRect(ae+Re*(ne+se),A,ne,5);ART.drawText(_,String(K),ae-6,A,{color:P?"#ffd23e":"#8a8478",right:!0})}function S(_,b){var A=n();if(A){var M=A.screen,P=x(M),U=s(M);M.drawBg&&M.drawBg(_,b),M.title&&ART.drawText(_,r(M.title),e/2,M.titleY||14,{scale:3,color:"#ff9a28",shadow:"#401008",center:!0}),M.drawExtra&&M.drawExtra(_,b);for(var B=0;B<U.length;B++){var K=U[B],J=P.top+B*P.gap,ne=B===A.sel,se=a(K),ie=r(K.label);ne&&(_.fillStyle="rgba(255,110,24,0.16)",_.fillRect(P.x0-8,J-3,P.x1-P.x0+16,P.rowH),_.fillStyle="#ff7a18",_.fillRect(P.x0-8,J-3,2,P.rowH),b%.8<.55&&ART.drawText(_,">",P.x0-4,J+(P.s-1)*2,{color:"#ffd23e"}));var ae=se?ne?"#ffd23e":"#c8c0b0":"#4a463c",Re=K.value||K.slider;if(Re)if(ART.drawText(_,ie,P.x0+4,J,{scale:P.s,color:ae,shadow:se}),K.slider)N(_,P.x1,J+(P.s-1)*2,K,ne);else{var Ue=r(K.value);ne&&K.adjust&&(Ue="< "+Ue+" >"),ART.drawText(_,Ue,P.x1,J,{scale:P.s,color:ne?"#ffd23e":"#e03828",right:!0})}else ART.drawText(_,ie,M.alignLeft?P.x0+4:e/2,J,{scale:P.s,color:ae,shadow:se,center:!M.alignLeft})}var $e=U[A.sel],me=$e&&a($e)?r($e.desc):null;if(me)for(var le=L(me,70),G=M.descY||168,j=0;j<le.length;j++)ART.drawText(_,le[j],e/2,G+j*8,{color:"#a8a090",center:!0});var de=M.footer===void 0?"ARROWS OR MOUSE: CHOOSE   ENTER: SELECT   ESC: BACK":r(M.footer);de&&ART.drawText(_,de,e/2,M.footerY||180,{color:"#5e584e",center:!0})}}return{open:u,push:l,replace:h,close:f,back:g,isOpen:p,key:m,pointer:E,click:C,render:S,wrap:L,current:function(){var _=n();return _?_.screen:null},selected:function(){var _=n();return _?s(_.screen)[_.sel]:null},depth:function(){return i.length}}})();typeof Mu!="undefined"&&(Mu.exports={SETTINGS:o0,MENU:l0})});var Xf=Ma((uS,Su)=>{"use strict";var c0=(function(){var i="firebird.riley.v1",e=3;function t(){return{shots:{fist:0,pistol:0,shotgun:0},hits:0,fireDistSum:0,fireDistN:0,strafeL:0,strafeR:0,stillT:0,seenT:0,hideT:0,longestHide:0,said:{}}}function n(b,A){A.los?(b.seenT+=A.dt,b.hideT=0,A.strafe<0?b.strafeL+=A.dt:A.strafe>0&&(b.strafeR+=A.dt),A.moving||(b.stillT+=A.dt)):(b.hideT+=A.dt,b.hideT>b.longestHide&&(b.longestHide=b.hideT))}function r(b,A,M){b.shots[A]=(b.shots[A]||0)+1,b.fireDistSum+=M,b.fireDistN++}function s(b){return b.shots.fist+b.shots.pistol+b.shots.shotgun}function a(b){var A=null,M=0;for(var P in b.shots)b.shots[P]>M&&(M=b.shots[P],A=P);return M>=5?A:null}function o(b){return b.fireDistN?b.fireDistSum/b.fireDistN:0}function c(b){return b.fireDistN<5?0:p((5-o(b))/3)}function u(b){return b.fireDistN<5?0:p((o(b)-6)/4)}function l(b){return b.seenT<4?0:p((b.stillT/b.seenT-.35)/.4)}function h(b){return b.strafeR>=b.strafeL?1:-1}function f(b){var A=b.strafeL+b.strafeR;return A<3?0:p((Math.max(b.strafeL,b.strafeR)/A-.55)/.3)}function p(b){return b<0?0:b>1?1:b}function g(b){var A=[];return b.los?(b.cool.volley<=0&&A.push("volley"),b.cool.lead<=0&&A.push("lead"),b.dist<6&&A.push("backoff"),b.dist>3&&A.push("close"),A.push("flank")):A.push("seek"),b.phase>=2&&b.impsAlive<2&&b.cool.summon<=0&&A.push("summon"),b.phase>=2&&b.los&&b.dist<7&&b.cool.shield<=0&&A.push("shield"),A}function y(b,A,M){var P=0,U=null;switch(b){case"volley":P=1+(M.phase>=3?.4:0);break;case"lead":P=.35+f(A)*1.6,f(A)>.4&&(U="strafe");break;case"backoff":P=.2+c(A)*1.6+(M.playerWeapon==="shotgun"&&M.dist<4?.8:0),c(A)>.4&&(U="rusher");break;case"close":P=.3+u(A)*1.3+l(A)*1.2,l(A)>.4?U="camper":u(A)>.4&&(U="sniper");break;case"flank":P=.45+(M.phase>=2?.35:0)+f(A)*.4;break;case"seek":P=1,A.hideT>3&&(U="hider");break;case"summon":P=.9;break;case"shield":P=M.playerWeapon==="shotgun"?1.4:.25,M.playerWeapon==="shotgun"&&A.shots.shotgun>=6&&(U="shotgun");break}return{move:b,score:P,why:U}}function v(b,A,M,P){if(P=P||Math.random,!b.length)return null;var U=b.map(function(ne){return y(ne,A,M)}),B=0;U.forEach(function(ne){ne.w=ne.score*ne.score,B+=ne.w});for(var K=P()*B,J=0;J<U.length;J++)if(K-=U[J].w,K<=0)return U[J];return U[U.length-1]}var m={fist:"FISTS",pistol:"PISTOL",shotgun:"SHOTGUN"};function x(b,A){if(!A||b.said[A])return null;var M=null;switch(A){case"strafe":M="YOU ALWAYS DODGE "+(h(b)<0?"LEFT":"RIGHT")+". I'M AIMING THERE NOW.";break;case"rusher":M="YOU LIKE IT UP CLOSE. I'LL KEEP MY DISTANCE.";break;case"sniper":M="YOU KEEP YOUR DISTANCE. SO I'M COMING TO YOU.";break;case"camper":M="YOU STAND STILL A LOT. THAT MAKES YOU EASY TO FIND.";break;case"hider":M="HIDING? I CAN FIND YOU. I KNOW THIS ARENA.";break;case"shotgun":M=b.shots.shotgun+" SHOTGUN BLASTS SO FAR. SHIELD UP!";break}return M&&(b.said[A]=!0),M}function R(b,A,M){switch(M=M||{},b){case"intro":return M.memory&&M.memory.lastStyle?"BACK AGAIN! LAST TIME "+M.memory.lastStyle+".":M.memory?"BACK AGAIN! ROUND "+(M.memory.fights+1)+". LET'S GO!":"HI! I'M RILEY. I LEARN HOW YOU PLAY. READY?";case"ease":return"I'M GOING A LITTLE EASIER THIS TIME. JUST A LITTLE.";case"studied":return"YOU BEAT ME "+M.wins+(M.wins===1?" TIME":" TIMES")+". I'VE BEEN PRACTISING.";case"phase2":return"OKAY. I'VE BEEN WATCHING YOU. MY TURN.";case"phase3":return"ALRIGHT, NO MORE HOLDING BACK!";case"summon":return"LITTLE HELP, FRIENDS?";case"friendlyFire":return"HEY! WATCH WHERE YOU THROW THOSE.";case"impsTurned":return"YOU GOT MY IMPS FIGHTING ME? SMART.";case"playerDied":{var P=E(A);return"GOOD FIGHT! YOU HIT ME "+A.hits+(A.hits===1?" TIME":" TIMES")+(P!==null?", "+P+"% ACCURACY":"")+". AGAIN?"}case"defeated":{var U=a(A);return"OKAY, YOU WIN! "+A.hits+" HITS"+(U?" WITH MOSTLY THE "+m[U]:"")+". NICE."}}return null}function E(b){var A=s(b);return A<5?null:Math.min(100,Math.round(b.hits/A*100))}function C(b){var A=a(b);return c(b)>.5&&A?"YOU RUSHED ME WITH THE "+m[A]:u(b)>.5?"YOU FOUGHT ME FROM FAR AWAY":b.longestHide>6?"YOU HID FOR "+Math.round(b.longestHide)+" SECONDS":f(b)>.5?"YOU KEPT DODGING "+(h(b)<0?"LEFT":"RIGHT"):A?"YOU USED THE "+m[A]+" THE MOST":null}function L(b){var A={fights:0,wins:0,lossStreak:0,ease:0,lastStyle:null};try{var M=b&&b.getItem(i);if(M){var P=JSON.parse(M);for(var U in A)P[U]!==void 0&&(A[U]=P[U])}}catch{}return A.ease=Math.max(0,Math.min(e,A.ease|0)),A}function N(b,A){try{b&&b.setItem(i,JSON.stringify(A))}catch{}}function S(b,A,M){return b.fights++,b.lastStyle=C(A),M?(b.wins++,b.lossStreak=0,b.ease=0):(b.lossStreak++,b.ease=Math.min(e,b.lossStreak)),b}function _(b){var A=b.ease,M=b.wins>0&&A===0;return{hpScale:1-.08*A,dmgScale:1-.1*A,coolScale:(1+.12*A)*(M?.9:1),practised:M}}return{MAX_EASE:e,newProfile:t,observe:n,noteShot:r,favWeapon:a,rusher:c,sniper:u,camper:l,strafeSide:h,strafeHabit:f,accuracy:E,legalMoves:g,scoreMove:y,choose:v,insight:x,line:R,describeStyle:C,recall:L,save:N,settle:S,tuning:_}})();typeof Su!="undefined"&&(Su.exports=c0)});var nd=Ma((pS,Eu)=>{"use strict";var Ea=[{name:"E1M1: ASH GATES",floor:"slab",ceil:"ceilDark",par:75,playerAngle:0,map:["#######################X######","####################..t.t....#","####################.........#","####################..i..+...#","####################....A....#","####################.........#","#######################U######","##....................t.t...##","##.t......%%......%%........##","##u...g......i..............##","##.t.......h.....g..........##","##..........................##","####################D#########","###*Pa#########....t.t......##","####S##########.....i.....o.##","##b......######..........io.##","##.......######......h......##","##..p....D........2.........##","##.......######..o..........##","##.......######.t.........t.##","##...h...#####################","##############################"]},{name:"E1M2: THE FURNACE",floor:"tech",ceil:"ceilTech",par:120,playerAngle:-Math.PI/2,map:["###############X################","############..t.t...#...########","############g.......#*PA########","############...+...g#...########","###############R######S#########","########......t.t.......########","########................########","########......b.........########","#......#.i.T........T...#o....o#","#......D................#......#","#..i...#................D..o...#","#......#....g...........#....i.#","#t.t.g.#...T........T...#.o..o.#","#r.a...#...i............#..g...#","########................#.a..h.#","###############..###############","############.b....h.############","############...p....############","############........############","############t......t############","################################"]},{name:"E1M3: DEMON THRONE",floor:"hell",ceil:"ceilHell",par:150,playerAngle:-Math.PI/2,map:["HHHHHHHHHHHHHHHXHHHHHHHHHHHHHHHH","HHHHHHHHHHHHH.t.t..HHHHHHHHHHHHH","HHHHHHHHHHHHH..+...HHHHHHHHHHHHH","HHHHHHHHHHHHHHHRHHHHHHHHHHHHHHHH","HHHHHHt.......t.t........tHHHHHH","HHHHHH.i................i.HHHHHH","HHHHHH..o..............o.tH....H","HH...H....................D..g.H","HH*PAS.........K.........tH.r..H","HH...H....g.........g.....H....H","HHHHHH.a................b.HHHHHH","HHHHHH...i..........i.....HHHHHH","HHHHHHt..................tHHHHHH","HHHHHH...a..h......+..b...HHHHHH","HHHHHH....................HHHHHH","HHHHHHHHHHHHHHHDHHHHHHHHHHHHHHHH","HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH","HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH","HHHHHHHHHHHHHi...iHHHHHHHHHHHHHH","HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH","HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH","HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH","HHHHHHHHHHHt........tHHHHHHHHHHH","HHHHHHHHHHH...b..a...HHHHHHHHHHH","HHHHHHHHHHH....p.....HHHHHHHHHHH","HHHHHHHHHHH..........HHHHHHHHHHH","HHHHHHHHHHHt........tHHHHHHHHHHH","HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH"]},{name:"E1M4: RILEY'S ARENA",floor:"tech",ceil:"ceilTech",par:240,playerAngle:-Math.PI/2,map:["MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMt........................tMMM","MMM..h..........Y.........h..MMM","MMM..........................MMM","MMM....TT..............TT....MMM","MMM....TT....o....o....TT....MMM","MMM..........................MMM","MMM.a......................a.MMM","MMM....TT..............TT....MMM","MMM....TT.......+......TT....MMM","MMM..........................MMM","MMMt.......o........o.......tMMM","MMMMMMMMMMMMMMMUMMMMMMMMMMMMMMMM","TTTTTTTTTTTTTT...TTTTTTTTTTTTTTT","TTTTTTTTTTTTTTt.tTTTTTTTTTTTTTTT","TTi.....o.......o.....iTTTTTTTTT","TT.....................T..g...TT","TT...g.............g..tTt....tTT","TT.......MM...MM.......D....u.TT","TT..b....MM.h.MM....a.tT.a..h.TT","TT.....................Tt....tTT","TT.................o...T..i...TT","TT.....................TTTTTTTTT","TTTTTTTTTTTTTTTDTTTTTTTTTTTTTTTT","TTTTTTTTTTt.........tTTTTTTTTTTT","TTTTTTTTTT..b..2..a..TTTTTTTTTTT","TTTTTTPA*S...........TTTTTTTTTTT","TTTTTTTTTT.....p.....TTTTTTTTTTT","TTTTTTTTTTt...h.....tTTTTTTTTTTT","TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT"]}];(function(){for(var i=0;i<Ea.length;i++){for(var e=Ea[i].map,t=e[0].length,n=0,r=0;r<e.length;r++){if(e[r].length!==t)throw new Error(Ea[i].name+" row "+r+" width "+e[r].length+" != "+t);for(var s=0;s<t;s++)e[r][s]==="p"&&n++}if(n!==1)throw new Error(Ea[i].name+" has "+n+" player starts")}})();typeof Eu!="undefined"&&(Eu.exports=Ea)});var Le=Sa(Vf(),1),bn=Sa(Wf(),1);window.ART=Le.default;window.SND=bn.default;var Hf=Sa(qf(),1);var rn=Sa(Xf(),1);var u0={"#":1,"%":2,M:3,T:4,H:5,D:6,R:7,U:8,X:9,S:11},mi={6:!0,7:!0,8:!0,11:!0},Yf=.25,h0=2,Yn=.3,bu=.55;function Kf(i){return i>="0"&&i<="9"?(i.charCodeAt(0)-48)*Yf:i>="a"&&i<="z"?(i.charCodeAt(0)-87)*Yf:0}function Zf(i){for(var e=i.map,t=e[0].length,n=e.length,r={mw:t,mh:n,cells:new Uint8Array(t*n),floor:new Float32Array(t*n),ceil:new Float32Array(t*n),doors:{},lifts:[]},s=i.ceilHeight||h0,a=0;a<n;a++)for(var o=0;o<t;o++){var c=e[a][o],u=a*t+o,l=u0[c]||0;r.cells[u]=l,r.floor[u]=i.heights?Kf(i.heights[a][o]):0,r.ceil[u]=i.ceilings&&i.ceilings[a][o]!=="."?Kf(i.ceilings[a][o]):s,r.ceil[u]<r.floor[u]+1&&(r.ceil[u]=r.floor[u]+1),mi[l]&&(r.doors[o+","+a]={x:o,z:a,open:0,state:"closed",timer:0,locked:l===7?"red":l===8?"blue":null,secret:l===11,found:!1,used:!1}),c==="L"&&r.lifts.push({x:o,z:a,top:r.floor[u],bottom:0,pos:0,state:"down",wait:0})}for(var h in r.doors){var f=r.doors[h],p=1/0,g=0;ba(r,f.x,f.z).forEach(function(v){r.cells[v.i]===0&&(p=Math.min(p,r.floor[v.i]),g=Math.max(g,r.ceil[v.i]))});var y=f.z*t+f.x;r.floor[y]=p===1/0?0:p,r.ceil[y]=f.secret?g||s:Math.min(g||s,r.floor[y]+1.5)}return r.lifts.forEach(function(v){var m=1/0;ba(r,v.x,v.z).forEach(function(R){var E=r.cells[R.i]===0||mi[r.cells[R.i]];E&&!f0(r,R.x,R.z)&&(m=Math.min(m,r.floor[R.i]))}),v.bottom=m===1/0?0:Math.min(m,v.top),v.pos=v.bottom;var x=v.z*t+v.x;r.floor[x]=v.pos,r.ceil[x]=Math.max(r.ceil[x],v.top+1.2)}),r}function f0(i,e,t){for(var n=0;n<i.lifts.length;n++)if(i.lifts[n].x===e&&i.lifts[n].z===t)return!0;return!1}function ba(i,e,t){var n=[];return[[1,0],[-1,0],[0,1],[0,-1]].forEach(function(r){var s=e+r[0],a=t+r[1];s>=0&&a>=0&&s<i.mw&&a<i.mh&&n.push({x:s,z:a,i:a*i.mw+s})}),n}function ai(i,e,t){return e<0||t<0||e>=i.mw||t>=i.mh?1:i.cells[t*i.mw+e]}function gr(i,e,t){return i.doors[e+","+t]||null}function vr(i,e,t){var n=ai(i,e,t);if(n===0)return!1;if(mi[n]){var r=gr(i,e,t);return!r||r.open<.9}return!0}function vn(i,e,t){return i.floor[t*i.mw+e]}function Li(i,e,t){return i.ceil[t*i.mw+e]}function Hr(i,e,t,n,r,s,a){for(var o=Math.floor(e-n),c=Math.floor(e+n),u=Math.floor(t-n),l=Math.floor(t+n),h=-1/0,f=1/0,p=u;p<=l;p++)for(var g=o;g<=c;g++){if(vr(i,g,p))return{blocked:!0};var y=vn(i,g,p),v=Li(i,g,p);if(y>r+a+1e-4)return{blocked:!0};h=Math.max(h,y),f=Math.min(f,v)}return f<Math.max(r,h)+s-1e-4?{blocked:!0}:{blocked:!1,ground:h,ceil:f}}function Br(i,e,t,n,r,s,a){var o=!0;return t!==0&&(Hr(i,e.x+t,e.z,r,e.y,s,a).blocked?o=!1:e.x+=t),n!==0&&(Hr(i,e.x,e.z+n,r,e.y,s,a).blocked?o=!1:e.z+=n),o}function Go(i,e,t,n){for(var r=Math.floor(e-n),s=Math.floor(e+n),a=Math.floor(t-n),o=Math.floor(t+n),c=-1/0,u=a;u<=o;u++)for(var l=r;l<=s;l++)vr(i,l,u)||(c=Math.max(c,vn(i,l,u)));return c===-1/0?0:c}function Vo(i,e,t,n,r,s,a,o){for(var c=Math.sqrt(r*r+a*a),u=Math.floor(e),l=Math.floor(n),h=c>1e-9?Math.abs(1/r):1e30,f=c>1e-9?Math.abs(1/a):1e30,p=r<0?-1:1,g=a<0?-1:1,y=r<0?(e-u)*h:(u+1-e)*h,v=a<0?(n-l)*f:(l+1-n)*f,m=0,x=0;x<256;x++){var R=Math.min(y,v,o),E=vn(i,u,l),C=Li(i,u,l);if(s<0){var L=(E-t)/s;if(L>=m-1e-6&&L<=R)return _(L,"floor")}else if(s>0){var N=(C-t)/s;if(N>=m-1e-6&&N<=R)return _(N,"ceil")}if(R>=o)return _(o,"none");if(m=R,y<v?(y+=h,u+=p):(v+=f,l+=g),u<0||l<0||u>=i.mw||l>=i.mh)return _(m,"wall");var S=t+s*m;if(vr(i,u,l)||S<vn(i,u,l)||S>Li(i,u,l))return _(m,"wall")}return _(o,"none");function _(b,A){return{dist:b,x:e+r*b,y:t+s*b,z:n+a*b,kind:A,cx:u,cz:l}}}function Ni(i,e,t,n,r,s,a){var o=r-e,c=s-t,u=a-n,l=Math.sqrt(o*o+c*c+u*u);return l<.001?!0:Vo(i,e,t,n,o/l,c/l,u/l,l).dist>=l-.05}var _s=null;function Tu(i,e,t,n,r,s){var a=i.mw,o=a*i.mh;(!_s||_s.length<o)&&(_s=new Int32Array(o)),s.fill(-1);var c=Math.floor(e),u=Math.floor(t);if(!(c<0||u<0||c>=a||u>=i.mh)){var l=0,h=0;for(s[u*a+c]=0,_s[h++]=u*a+c;l<h;){var f=_s[l++],p=s[f];if(!(p>=n))for(var g=f%a,y=f/a|0,v=0;v<4;v++){var m=g+(v===0?1:v===1?-1:0),x=y+(v===2?1:v===3?-1:0);if(!(m<0||x<0||m>=a||x>=i.mh)){var R=x*a+m;s[R]!==-1||!r(f,m,x)||(s[R]=p+1,_s[h++]=R)}}}}}function Jf(i,e,t,n){for(var r=0;r<i.lifts.length;r++){var s=i.lifts[r],a=t(s.x,s.z),o=s.pos;s.state==="down"&&a?(s.state="wait",s.wait=.5):s.state==="wait"?(s.wait-=e,s.wait<=0&&(s.state="up",n&&n(s,"start"))):s.state==="up"?(s.pos=Math.min(s.top,s.pos+e*.9),s.pos>=s.top&&(s.state="top",s.wait=2.5,n&&n(s,"stop"))):s.state==="top"?a?s.wait=2.5:(s.wait-=e)<=0&&(s.state="lower",n&&n(s,"start")):s.state==="lower"&&(a&&s.pos>s.bottom+.05?s.state="up":(s.pos=Math.max(s.bottom,s.pos-e*.9),s.pos<=s.bottom&&(s.state="down",n&&n(s,"stop")))),i.floor[s.z*i.mw+s.x]=s.pos,s.moved=s.pos-o}}var fn={r:.28,h:.9,hCrouch:.55,eye:.8,eyeCrouch:.45,walk:3.2,run:5,jumpV:3.9,gravity:14},Ta={fist:{ammo:null,rate:.5,melee:!0,dmgMin:8,dmgMax:24,knock:.12},pistol:{ammo:"bullets",rate:.42,pellets:1,spread:.025,dmgMin:5,dmgMax:15,knock:.03,shake:.6},shotgun:{ammo:"shells",rate:.95,pellets:7,spread:.1,dmgMin:5,dmgMax:15,knock:.045,shake:2.2},chaingun:{ammo:"bullets",rate:.105,pellets:1,spread:.045,dmgMin:5,dmgMax:12,knock:.018,shake:.35},rocket:{ammo:"rockets",rate:.85,rocket:!0,shake:2.8}},Ki=["fist","pistol","shotgun","chaingun","rocket"],jf={bullets:"BULLETS",shells:"SHELLS",rockets:"ROCKETS"},xs={imp:{hp:40,speed:1.7,radius:.35,painChance:.75,ranged:!0,melee:!1,h:.85,attackDmg:[8,20]},gnasher:{hp:110,speed:2.9,radius:.42,painChance:.5,ranged:!1,melee:!0,h:.7,attackDmg:[4,16],fleeBelow:.4},knight:{hp:400,speed:1.9,radius:.48,painChance:.2,ranged:!0,melee:!0,h:1.3,attackDmg:[10,26]},riley:{hp:900,speed:2.4,radius:.4,painChance:.12,ranged:!0,melee:!0,h:.95,attackDmg:[10,20],boss:!0}},$f={i:"imp",g:"gnasher",K:"knight",Y:"riley"},Qf={h:{msg:"PICKED UP A STIMPACK.",snd:"health"},"+":{msg:"PICKED UP A MEDIKIT.",snd:"health"},b:{msg:"PICKED UP A CLIP.",snd:"pickup"},a:{msg:"PICKED UP A BOX OF SHELLS.",snd:"pickup"},k:{msg:"PICKED UP A BOX OF ROCKETS.",snd:"pickup"},A:{msg:"PICKED UP THE ARMOR!",snd:"pickup"},2:{msg:"YOU GOT THE SHOTGUN!",snd:"weaponUp"},3:{msg:"YOU GOT THE CHAINGUN!",snd:"weaponUp"},4:{msg:"YOU GOT THE ROCKET LAUNCHER!",snd:"weaponUp"},r:{msg:"PICKED UP THE RED KEYCARD.",snd:"keyPickup"},u:{msg:"PICKED UP THE BLUE KEYCARD.",snd:"keyPickup"},P:{msg:"PHOENIX ORB! YOU FEEL REBORN!",snd:"orb"}},kr=[{name:"ROOKIE",dmg:.5,ammo:2,desc:"DEMONS HIT HALF AS HARD AND AMMO IS DOUBLED. GREAT FOR A FIRST RUN."},{name:"WARRIOR",dmg:1,ammo:1,desc:"THE FIGHT AS IT WAS MEANT TO BE."},{name:"INFERNO",dmg:1.5,ammo:1,desc:"DEMONS HIT HARDER. FOR VETERANS WHO KNOW EVERY CORNER."}],ed={run:"TIP: HOLD SHIFT TO RUN.",jump:"TIP: SPACE JUMPS. C CROUCHES. LOOK UP AND DOWN WITH THE MOUSE.",map:"TIP: LOST? PRESS TAB FOR THE MAP.",weapons:"TIP: PRESS 1 TO 5, OR SCROLL THE MOUSE WHEEL, TO SWITCH WEAPONS. Q SWAPS BACK.",key:"TIP: THE MATCHING DOOR IS MARKED IN COLOR ON YOUR MAP (TAB).",lowAmmo:"TIP: LOW ON AMMO? YOUR FIST (1) NEVER RUNS OUT, AND IT IS SILENT.",lowHealth:"TIP: LOW HEALTH! BACK OFF AND LOOK FOR STIMPACKS AND MEDIKITS.",hurtDir:"TIP: THE RED MARKS AROUND YOUR AIM POINT AT WHATEVER HIT YOU.",secret:"TIP: WALLS WITH A CRACK MAY HIDE SECRETS. PRESS E ON THEM.",torches:"TIP: A PAIR OF TORCHES BESIDE A DOOR MEANS IT MATTERS. FOLLOW THEM.",lift:"TIP: STAND ON A GLOWING PLATFORM TO RIDE IT UP.",barrel:"TIP: A DEMON IS NEXT TO A BARREL. SHOOT THE BARREL!",meet_imp:"TIP: IMPS THROW FIREBALLS. STRAFE WITH A AND D TO DODGE.",meet_gnasher:"TIP: GNASHERS CHARGE AND BITE. BACK AWAY WHILE YOU SHOOT.",meet_knight:"TIP: THE EMBER KNIGHT IS TOUGH. KEEP YOUR DISTANCE AND USE SHELLS."};function td(i){i=i||{};var e=i.levels,t=i.rng||Math.random,n=i.storage||null,r=i.settings||{difficulty:1,tips:!1,seenTips:{}},s=i.onProgress||function(){},a={},o=!1,c="title",u=0,l=null,h=null,f={};function p(){return t()}function g(d,w){return d+t()*(w-d)}function y(d,w,k){return d<w?w:d>k?k:d}function v(d,w,k,ce){var Q=d-k,oe=w-ce;return Q*Q+oe*oe}function m(){return kr[r.difficulty]||kr[1]}function x(d,w,k,ce,Q,oe){var he={t:d,name:w,x:k,y:ce,z:Q};if(oe)for(var _e in oe)he[_e]=oe[_e];l.events.push(he)}function R(d,w){w?x("sound",d,w.x,(w.y||0)+.5,w.z):x("sound",d,l.p.x,l.p.y+.8,l.p.z,{local:!0})}function E(d,w,k,ce){var Q=xs[d];return{kind:d,mob:!0,x:w,z:k,y:ce,hp:Q.hp,radius:Q.radius,speed:Q.speed,h:Q.h,state:"idle",st:0,animT:p(),cool:g(.5,1.5),moveAng:0,retarget:0,losT:p()*.3,los:!1,target:null,lostT:0,fleeNext:!1,strafeSide:p()<.5?1:-1,flashT:0}}function C(d){var w=d.map.join("");return{boss:w.indexOf("Y")>=0,keys:{red:w.indexOf("R")>=0||w.indexOf("r")>=0,blue:w.indexOf("U")>=0||w.indexOf("u")>=0}}}function L(d){return{hp:Math.max(d.hp,1),armor:d.armor,ammo:{bullets:d.ammo.bullets,shells:d.ammo.shells,rockets:d.ammo.rockets},shotgun:d.weapons.shotgun,chaingun:d.weapons.chaingun,rocket:d.weapons.rocket,weapon:d.weapon}}function N(d,w,k){u=d;var ce=e[d],Q=Zf(ce),oe=ce.map;O=ce;var he=k||(w&&l?L(l.p):null),_e={x:0,z:0,y:0,ang:ce.playerAngle||0,pitch:0,vx:0,vz:0,vy:0,onGround:!0,crouch:!1,eyeH:fn.eye,hp:he?he.hp:100,armor:he?he.armor:0,ammo:he?{bullets:he.ammo.bullets,shells:he.ammo.shells,rockets:he.ammo.rockets||0}:{bullets:50,shells:0,rockets:0},weapons:{fist:!0,pistol:!0,shotgun:he?he.shotgun:!1,chaingun:he?!!he.chaingun:!1,rocket:he?!!he.rocket:!1},keys:{red:!1,blue:!1},weapon:he&&he.weapon&&(he.weapon==="pistol"||he.weapon==="fist"||he[he.weapon])?he.weapon:"pistol",nextWeapon:null,prevWeapon:null,raiseT:.3,lowerT:0,cool:0,fireT:1,dead:!1,deadT:0,painT:0,grinT:0,dmgFlash:0,bonusFlash:0,jumpHeld:!1,landT:0};B(_e,_e.weapon)||(_e.weapon=K(_e));for(var Te=[],Ye=[],tt=null,dt=0;dt<oe.length;dt++)for(var Gt=0;Gt<oe[0].length;Gt++){var Kt=oe[dt][Gt],an=Gt+.5,en=dt+.5,Pt=vn(Q,Gt,dt);if(Kt==="p")_e.x=an,_e.z=en,_e.y=Pt;else if($f[Kt]){var gn=E($f[Kt],an,en,Pt);gn.kind==="riley"&&D(gn),Te.push(gn)}else Kt==="o"?Te.push({kind:"barrel",mob:!0,barrel:!0,x:an,z:en,y:Pt,hp:15,radius:.3,h:.55,state:"idle",st:0}):Kt==="t"?Te.push({kind:"torch",x:an,z:en,y:Pt,h:.95,animT:p()}):Qf[Kt]?Te.push({kind:"pickup",item:Kt,x:an,z:en,y:Pt,h:.3,bob:p()*6}):Kt==="*"&&Ye.push({x:Gt,z:dt,found:!1});Kt==="X"&&(tt={x:Gt,z:dt})}var jt=0,nn=0;return Te.forEach(function(pt){pt.mob&&!pt.barrel&&jt++,pt.kind==="pickup"&&nn++}),l={L:ce,W:Q,mw:Q.mw,mh:Q.mh,doors:Q.doors,ents:Te,p:_e,secrets:Ye,seen:new Uint8Array(Q.mw*Q.mh),msgs:[],events:[],time:0,notice:null,stats:{kills:0,totalKills:jt,items:0,totalItems:nn,secrets:0,totalSecrets:Ye.length},exitT:-1,flow:new Int16Array(Q.mw*Q.mh),flowT:0,infightSeen:!1,boss:null,shotId:0,firing:!1,input:{strafe:0,moving:!1,vx:0,vz:0},startGear:he,info:C(ce),exitCell:tt,hurtDirs:[],hitT:0,killT:0,blockT:0,shake:0,hitstop:0,killer:null,tipQueue:[],tipT:3,usedMap:!1,ranT:0,jumped:!1,spotT:0,started:!0},Te.forEach(function(pt){pt.kind==="riley"&&(l.boss=pt)}),c="game",b(U(),"#f0d848",3.5),l}function S(){var d=l.startGear;d&&(d={hp:Math.max(d.hp,100),armor:d.armor,ammo:{bullets:Math.max(d.ammo.bullets,50),shells:d.shotgun?Math.max(d.ammo.shells,8):d.ammo.shells,rockets:d.rocket?Math.max(d.ammo.rockets||0,3):0},shotgun:d.shotgun,chaingun:d.chaingun,rocket:d.rocket,weapon:d.weapon}),N(u,!1,d)}function _(d,w,k){l.msgs.push({text:d,t:k||3,color:w}),l.msgs.length>4&&l.msgs.shift()}function b(d,w,k){l.notice={text:d,color:w||"#f0d848",t:k||2.5,max:k||2.5}}function A(d){l&&(l.shake=Math.min(6,Math.max(l.shake,d)))}function M(d){!l||!r.tips||r.seenTips&&r.seenTips[d]||l.tipQueue.indexOf(d)<0&&l.tipQueue.push(d)}function P(d){if(l.tipT-=d,!(l.tipT>0||!l.tipQueue.length)){var w=l.tipQueue.shift();r.seenTips[w]||(r.seenTips[w]=!0,i.saveSettings&&i.saveSettings(),_(ed[w],"#8fe0a0",6),l.tipT=7)}}function U(){if(!l)return"";var d=l.info,w=l.p;return d.keys.blue&&!w.keys.blue?"FIND THE BLUE KEYCARD":d.keys.red&&!w.keys.red?"FIND THE RED KEYCARD":d.boss?"DEFEAT RILEY":"FIND THE EXIT SWITCH"}function B(d,w){var k=Ta[w];return!k.ammo||d.ammo[k.ammo]>0}function K(d){for(var w=Ki.length-1;w>=0;w--){var k=Ki[w];if(d.weapons[k]&&B(d,k))return k}return"fist"}function J(d,w){if(c!=="game"||!l||l.p.dead)return!1;var k=l.p;return k.weapons[d]?B(k,d)?d===k.weapon?(k.nextWeapon&&!(k.lowerT>0)&&(k.nextWeapon=null),!1):d===k.nextWeapon?!1:(k.prevWeapon=k.weapon,k.nextWeapon=d,k.autoFist=!1,!0):(w||(_("NO "+jf[Ta[d].ammo]+" FOR THE "+d.toUpperCase()+"."),R("noAmmo")),!1):(w||_("YOU HAVEN'T FOUND THE "+d.toUpperCase()+" YET."),!1)}function ne(d){for(var w=l.p,k=Ki.indexOf(w.nextWeapon||w.weapon),ce=1;ce<Ki.length;ce++){var Q=Ki[(k+d*ce+Ki.length*2)%Ki.length];if(w.weapons[Q]&&B(w,Q)){J(Q,!0);return}}}function se(){var d=l.p;d.prevWeapon&&d.prevWeapon!==d.weapon&&d.weapons[d.prevWeapon]&&B(d,d.prevWeapon)?J(d.prevWeapon,!0):ne(-1)}function ie(){return l.p.y+l.p.eyeH}function ae(d,w){return Math.sqrt(v(d,w,l.p.x,l.p.z))}function Re(d,w,k,ce,Q,oe){for(var he=l.p,_e=Math.cos(w),Te=Math.cos(d)*_e,Ye=Math.sin(d)*_e,tt=Math.sin(w),dt=he.x,Gt=ie(),Kt=he.z,an=Q?1.4:40,en=Vo(l.W,dt,Gt,Kt,Te,tt,Ye,an),Pt=null,gn=en.dist+.05,jt=0;jt<l.ents.length;jt++){var nn=l.ents[jt];if(!(!nn.mob||nn.state==="die"||nn.state==="dead"||nn.gone)){var pt=Ue(dt,Gt,Kt,Te,tt,Ye,nn);pt!==null&&pt>.1&&pt<gn&&(Pt=nn,gn=pt)}}var ri=k+p()*(ce-k)|0;if(Pt){if(me(Pt,ri),!Pt.barrel){Pt.kind==="riley"&&Pt.shieldT>0?l.blockT=.2:Pt.state==="die"?(l.killT=.3,l.hitstop=Math.max(l.hitstop,.045)):l.hitT=Math.max(l.hitT,.14);var I=xs[Pt.kind];if(oe&&!I.boss){var q=oe*(I.hp>200?.25:1);Br(l.W,Pt,Math.cos(d)*q,Math.sin(d)*q,Pt.radius,Pt.h,Yn)}}x("fx",Pt.barrel||Pt.kind==="riley"?"spark":"blood",dt+Te*gn,Gt+tt*gn,Kt+Ye*gn,{dx:-Te,dy:-tt,dz:-Ye})}else!Q&&en.kind!=="none"?x("fx","puff",en.x-Te*.03,en.y-tt*.03,en.z-Ye*.03,{surface:en.kind}):Q&&R("whiff");return Pt}function Ue(d,w,k,ce,Q,oe,he){var _e=he.radius+.06,Te=d-he.x,Ye=k-he.z,tt=ce*ce+oe*oe,dt=2*(Te*ce+Ye*oe),Gt=Te*Te+Ye*Ye-_e*_e;if(tt<1e-9)return null;var Kt=dt*dt-4*tt*Gt;if(Kt<0)return null;var an=Math.sqrt(Kt),en=(-dt-an)/(2*tt),Pt=(-dt+an)/(2*tt),gn=en>0?en:Pt;if(gn<0)return null;var jt=w+Q*gn;if(jt>=he.y&&jt<=he.y+he.h)return gn;if(Math.abs(Q)>1e-6){var nn=((Q<0?he.y+he.h:he.y)-w)/Q;if(nn>0){var pt=d+ce*nn-he.x,ri=k+oe*nn-he.z;if(pt*pt+ri*ri<=_e*_e)return nn}}return null}function $e(d){return!!d&&!d.gone&&d.state!=="die"&&d.state!=="dead"}function me(d,w,k){if(!(d.state==="die"||d.state==="dead")&&!(d.kind==="riley"&&He(d,k))){if(d.hp-=w,d.flashT=.07,d.barrel){d.blame=$e(k)?k:null,d.hp<=0&&d.state!=="boom"&&(d.state="boom",d.st=.08);return}var ce=xs[d.kind];Oe(d),ce.boss||(k&&k!==d&&$e(k)&&!k.barrel?(d.target!==k&&!l.infightSeen&&ae(d.x,d.z)<14&&(l.infightSeen=!0,_("THE DEMONS TURN ON EACH OTHER!")),d.target=k,d.lostT=0):k||(d.target=null)),d.hp<=0?(d.state="die",d.st=0,l.stats.kills++,ce.boss||R("enemyDie",d),x("fx","gib",d.x,d.y+d.h*.6,d.z,{kind:d.kind})):p()<ce.painChance&&!(ce.boss&&d.state==="windup")&&(d.state="pain",d.st=ce.boss?.25:.35,ce.fleeBelow&&d.hp<ce.hp*ce.fleeBelow&&(d.fleeNext=!0),R("enemyPain",d)),d.kind==="riley"&&Xe(d)}}function le(d){d.state="dead",d.dead=!0,d.gone=!0,R("barrelBoom",d),x("fx","explosion",d.x,d.y+.3,d.z);for(var w=2.3,k=$e(d.blame)?d.blame:null,ce=0;ce<l.ents.length;ce++){var Q=l.ents[ce];if(!(!Q.mob||Q===d||Q.state==="dead"||Q.state==="die")){var oe=Math.sqrt(v(Q.x,Q.z,d.x,d.z)+Math.pow(Q.y-d.y,2));oe<w&&Ni(l.W,d.x,d.y+.3,d.z,Q.x,Q.y+Q.h/2,Q.z)&&(Q.barrel?Q.state!=="boom"&&(Q.state="boom",Q.st=g(.1,.25),Q.blame=k):me(Q,(w-oe)/w*90|0,k))}}Qe(d.x,d.z,10);var he=Math.sqrt(v(l.p.x,l.p.z,d.x,d.z)+Math.pow(l.p.y-d.y,2));A(6/(1+he*.35)),he<w&&Ni(l.W,d.x,d.y+.3,d.z,l.p.x,ie(),l.p.z)&&de((w-he)/w*70|0,d)}function G(){var d=l.p,w=Math.cos(d.pitch),k=Math.cos(d.ang)*w,ce=Math.sin(d.ang)*w,Q=Math.sin(d.pitch);l.ents.push({kind:"proj",playerRocket:!0,owner:d,x:d.x+k*.45,y:ie()-.08+Q*.45,z:d.z+ce*.45,vx:k*18,vy:Q*18,vz:ce*18,h:.2,animT:0,dmg:0})}function j(d){var w=2.6,k=l.p;x("fx","explosion",d.x,d.y,d.z),R("barrelBoom",d);for(var ce=0;ce<l.ents.length;ce++){var Q=l.ents[ce];if(!(!Q.mob||Q.state==="die"||Q.state==="dead")){var oe=Math.sqrt(v(Q.x,Q.z,d.x,d.z)+Math.pow(Q.y+Q.h*.5-d.y,2));oe>=w||!Ni(l.W,d.x,d.y,d.z,Q.x,Q.y+Q.h*.5,Q.z)||me(Q,Math.max(1,Math.round(105*(1-oe/w))))}}var he=Math.sqrt(v(k.x,k.z,d.x,d.z)+Math.pow(ie()-d.y,2));he<w&&Ni(l.W,d.x,d.y,d.z,k.x,ie(),k.z)&&de(Math.round(65*(1-he/w)),d),A(4/(1+he*.4)),Qe(d.x,d.z,16)}function de(d,w){var k=l.p;if(!(k.dead||d<=0||l.exitT>=0)){if(d=Math.max(1,Math.round(d*m().dmg)),w){var ce=Math.atan2(w.z-k.z,w.x-k.x);l.hurtDirs.push({ang:ce,t:1}),l.hurtDirs.length>6&&l.hurtDirs.shift();var Q=Math.atan2(Math.sin(ce-k.ang),Math.cos(ce-k.ang));Math.abs(Q)>.9&&M("hurtDir"),l.killer=w.kind}var oe=Math.min(k.armor,Math.ceil(d/3));k.armor-=oe,d-=oe,k.hp-=d,k.dmgFlash=Math.min(.65,k.dmgFlash+d/55),A(Math.min(4,1+d/8)),k.painT=.6,k.hp<=0?(k.hp=0,k.dead=!0,k.deadT=0,R("playerDie"),z(l.boss)&&(Y(l.boss,rn.default.line("playerDied",l.boss.profile)),Z(l.boss,!1))):(R("playerPain"),k.hp<30&&M("lowHealth"))}}function ge(d,w,k,ce,Q,oe,he){var _e=d.y+d.h*.65,Te=k-d.x,Ye=ce-_e,tt=Q-d.z,dt=Math.sqrt(Te*Te+Ye*Ye+tt*tt)||1,Gt=oe||(w?5.5:7);l.ents.push({kind:"proj",x:d.x+Te/dt*.5,y:_e+Ye/dt*.5,z:d.z+tt/dt*.5,vx:Te/dt*Gt,vy:Ye/dt*Gt,vz:tt/dt*Gt,h:.2,green:!!w,animT:0,owner:d,dmg:he||(w?g(10,28):g(7,20))}),R(d.kind==="riley"?"rileyShoot":"impShoot",d)}function Me(d,w,k){return!vr(l.W,w,k)}function Ge(d,w,k){var ce=l.W,Q=ai(ce,w,k);if(Q!==0){if(!mi[Q])return!1;var oe=gr(ce,w,k);if(!(oe.open>=.9||!oe.locked&&!oe.secret))return!1}return ce.floor[k*ce.mw+w]-ce.floor[d]<=Yn+1e-4}function Qe(d,w,k){var ce=new Int16Array(l.mw*l.mh);Tu(l.W,d,w,k,Me,ce);for(var Q=0;Q<l.ents.length;Q++){var oe=l.ents[Q];!oe.mob||oe.barrel||oe.state!=="idle"||xs[oe.kind].boss||ce[Math.floor(oe.z)*l.mw+Math.floor(oe.x)]>=0&&Oe(oe)}}function Oe(d){d.state==="idle"&&(d.state="chase",d.st=0,R(d.kind==="knight"?"knightSight":d.kind==="riley"?"rileySight":"impSight",d))}function rt(){Tu(l.W,l.p.x,l.p.z,9999,function(d,w,k){var ce=d,Q=l.W,oe=ai(Q,w,k);if(oe!==0){if(!mi[oe])return!1;var he=gr(Q,w,k);if(!(he.open>=.9||!he.locked&&!he.secret))return!1}return Q.floor[ce]-Q.floor[k*Q.mw+w]<=Yn+1e-4},l.flow)}function gt(d){var w=l.mw,k=Math.floor(d.x),ce=Math.floor(d.z),Q=l.flow[ce*w+k];if(Q<=0)return null;for(var oe=-1,he=-1,_e=0;_e<4;_e++){var Te=k+(_e===0?1:_e===1?-1:0),Ye=ce+(_e===2?1:_e===3?-1:0);if(!(Te<0||Ye<0||Te>=w||Ye>=l.mh)){var tt=l.flow[Ye*w+Te];tt>=0&&tt<Q&&(Q=tt,oe=Te,he=Ye)}}return oe<0?null:Math.atan2(he+.5-d.z,oe+.5-d.x)}function nt(d,w){d.state==="closed"||d.state==="closing"?(d.state="opening",w&&(d.used=!0),R("doorOpen",{x:d.x+.5,y:vn(l.W,d.x,d.z),z:d.z+.5}),d.secret&&!d.found&&(d.found=!0)):w&&d.state==="open"&&(d.state="closing",R("doorClose",{x:d.x+.5,y:vn(l.W,d.x,d.z),z:d.z+.5}))}function vt(d,w,k,ce,Q){return d+k>ce&&d-k<ce+1&&w+k>Q&&w-k<Q+1}function Ct(d){if(vt(l.p.x,l.p.z,fn.r,d.x,d.z))return!0;for(var w=0;w<l.ents.length;w++){var k=l.ents[w];if(k.mob&&!k.barrel&&k.state!=="dead"&&k.state!=="die"&&vt(k.x,k.z,k.radius,d.x,d.z))return!0}return!1}function Qt(d){for(var w in l.doors){var k=l.doors[w];if(k.state==="opening")k.open+=d*1.6,k.open>=1&&(k.open=1,k.state="open",k.timer=k.secret?9999:4);else if(k.state==="open")k.timer-=d,k.timer<=0&&!Ct(k)&&(k.state="closing",R("doorClose",{x:k.x+.5,y:0,z:k.z+.5}));else if(k.state==="closing"){if(Ct(k)){k.state="opening";continue}k.open-=d*1.6,k.open<=0&&(k.open=0,k.state="closed")}}}function Mt(d,w,k){return vt(d.x,d.z,(d.radius||fn.r)*.7,w,k)&&Math.abs(d.y-vn(l.W,w,k))<.05}function kt(d){var w=l.p;Jf(l.W,d,function(k,ce){if(Mt(w,k,ce))return!0;for(var Q=0;Q<l.ents.length;Q++){var oe=l.ents[Q];if(oe.mob&&$e(oe)&&Mt(oe,k,ce))return!0}return!1},function(k,ce){R(ce==="start"?"doorOpen":"doorClose",{x:k.x+.5,y:k.pos,z:k.z+.5})}),l.W.lifts.forEach(function(k){k.moved&&[w].concat(l.ents).forEach(function(ce){(ce===w||ce.mob&&$e(ce))&&vt(ce.x,ce.z,(ce.radius||fn.r)*.7,k.x,k.z)&&Math.abs(ce.y-(k.pos-k.moved))<.06&&(ce.y=k.pos)})})}function X(){for(var d=l.p,w=Math.cos(d.ang),k=Math.sin(d.ang),ce=.4;ce<=1.3;ce+=.3){var Q=Math.floor(d.x+w*ce),oe=Math.floor(d.z+k*ce),he=ai(l.W,Q,oe);if(he!==0){if(mi[he]){var _e=gr(l.W,Q,oe);if(_e.open>=.9&&_e.state==="open"&&Math.floor(d.x)===Q&&Math.floor(d.z)===oe)continue;return{kind:"door",door:_e}}return he===9?{kind:"switch",x:Q,z:oe}:null}}return null}function zt(){if(!l||l.p.dead||l.exitT>=0)return null;var d=X();if(!d)return null;if(d.kind==="switch")return{verb:"EXIT LEVEL",color:"#58e068"};var w=d.door;return w.secret&&!w.found?null:w.locked&&!l.p.keys[w.locked]?{need:w.locked,text:w.locked.toUpperCase()+" KEYCARD NEEDED",color:w.locked==="red"?"#ff5a3a":"#6a98ff"}:w.state==="closed"||w.state==="closing"?{verb:"OPEN",color:"#e8e0c8"}:null}function ut(){var d=X();if(d){var w=l.p;if(d.kind==="door"){var k=d.door;k.locked&&!w.keys[k.locked]?(R("locked"),_("YOU NEED THE "+k.locked.toUpperCase()+" KEYCARD."),M("key")):nt(k,!0)}else d.kind==="switch"&&(l.W.cells[d.z*l.mw+d.x]=10,R("switchFlip"),b("LEVEL COMPLETE!","#58e068",2),l.exitT=.8)}}function F(d){d.y=Go(l.W,d.x,d.z,d.radius*.6)}function T(d,w){var k=l.p,ce=xs[d.kind];d.animT+=w,d.st-=w,d.cool-=w,d.flashT-=w,d.target&&!$e(d.target)&&(d.target=null,d.cool=Math.min(d.cool,.4));var Q=d.target,oe=Q?Q.x:k.x,he=Q?Q.z:k.z,_e=Q?Q.y+Q.h*.6:k.y+k.eyeH*.8;d.losT-=w,d.losT<=0&&(d.losT=.2+p()*.1,d.los=Ni(l.W,d.x,d.y+d.h*.8,d.z,oe,_e,he));var Te=oe-d.x,Ye=he-d.z,tt=Math.sqrt(Te*Te+Ye*Ye);if(Q&&(d.lostT=d.los?0:d.lostT+w,d.lostT>4)){d.target=null,d.lostT=0;return}if(d.state==="idle"){d.los&&tt<9&&!k.dead&&Oe(d);return}if(d.state==="pain"){d.st<=0&&(d.fleeNext?(d.fleeNext=!1,d.state="flee",d.st=g(.9,1.6),d.moveAng=Math.atan2(-Ye,-Te)+g(-.6,.6)):d.state="chase");return}if(d.state==="flee"){Br(l.W,d,Math.cos(d.moveAng)*d.speed*1.1*w,Math.sin(d.moveAng)*d.speed*1.1*w,d.radius,d.h,Yn)||(d.moveAng+=(p()<.5?1:-1)*Math.PI/2),F(d),d.st<=0&&(d.state="chase",d.cool=0,d.retarget=0,R("impSight",d));return}if(d.state==="die"){d.st<=-.5&&(d.state="dead");return}if(d.state!=="dead"){if(d.state==="windup"){if(d.st<=0){if(d.state="chase",!Q&&k.dead)return;if(ce.melee&&tt<1.9&&Math.abs(_e-(d.y+d.h*.5))<1.2){if(d.los){var dt=ce.attackDmg[0]+p()*(ce.attackDmg[1]-ce.attackDmg[0])|0;Q?me(Q,dt,d):de(dt,d),R("punch",d)}}else ce.ranged&&d.los&&ge(d,d.kind==="knight",oe,_e,he);d.cool=g(.9,1.9)}return}if(!(!Q&&k.dead)){d.detourT=(d.detourT||0)-w,d.pathT=(d.pathT||0)-w;var Gt=!Q&&Math.abs(k.y-d.y)>Yn,Kt=!Q&&(!d.los||d.pathT>0||Gt)&&d.detourT<=0?gt(d):null;if(d.retarget-=w,Kt!==null)d.moveAng=Kt;else if(d.retarget<=0){d.retarget=g(.35,.8);var an=Math.atan2(Ye,Te);ce.ranged&&!ce.melee&&d.los&&tt<7?(p()<.3&&(d.strafeSide=-d.strafeSide),d.moveAng=an+d.strafeSide*g(1.1,1.8)):d.moveAng=an+(tt>2.2?g(-.7,.7):g(-.25,.25))}var en=ce.melee?.95:1.6;if(tt>en){var Pt=d.x,gn=d.z,jt=Br(l.W,d,Math.cos(d.moveAng)*d.speed*w,Math.sin(d.moveAng)*d.speed*w,d.radius,d.h,Yn);if(!jt&&Kt!==null){var nn=Math.floor(d.x)+.5-d.x,pt=Math.floor(d.z)+.5-d.z;Br(l.W,d,nn*Math.min(1,w*6),pt*Math.min(1,w*6),d.radius,d.h,Yn)}else if(!jt){var ri=Math.floor(d.x+Math.cos(d.moveAng)*.7),I=Math.floor(d.z+Math.sin(d.moveAng)*.7),q=gr(l.W,ri,I);q&&!q.locked&&!q.secret&&q.state==="closed"&&nt(q,!1),d.moveAng+=(p()<.5?1:-1)*Math.PI/2*g(.6,1.2),d.retarget=g(.25,.5),d.pathT=.8}for(var re=0;re<l.ents.length;re++){var ee=l.ents[re];if(!(ee===d||!ee.mob||ee.state==="dead"||ee.state==="die"||ee.gone)){var te=d.x-ee.x,Ee=d.z-ee.z,Ce=te*te+Ee*Ee,we=d.radius+(ee.radius||.3);if(Ce>1e-4&&Ce<we*we&&Math.abs(ee.y-d.y)<.5){var De=Math.sqrt(Ce),Fe=(we-De)*.5;Hr(l.W,d.x+te/De*Fe,d.z+Ee/De*Fe,d.radius,d.y,d.h,Yn).blocked||(d.x+=te/De*Fe,d.z+=Ee/De*Fe)}}}var ot=v(d.x,d.z,Pt,gn),ht=d.speed*w*.3;d.stuckT=ot<ht*ht?(d.stuckT||0)+w:0,d.stuckT>.4&&(d.stuckT=0,d.detourT=g(.5,.9),d.moveAng+=(p()<.5?1:-1)*Math.PI/2,d.retarget=d.detourT),F(d)}d.cool<=0&&d.los&&(ce.melee&&tt<1.4&&Math.abs(_e-(d.y+d.h*.5))<1.2?(d.state="windup",d.st=.35):ce.ranged&&tt>1.2&&tt<14&&p()<w*1.4&&(d.state="windup",d.st=.45))}}}function D(d){var w=rn.default.recall(n);d.mem=w,d.tune=rn.default.tuning(w);var k=H();d.sparring=!!(k&&k.sparring),d.allowed=k&&k.moves?k.moves:null,d.hp=d.maxHp=Math.round(xs.riley.hp*d.tune.hpScale*(k&&k.hpScale||1)),d.profile=rn.default.newProfile(),d.phase=1,d.cools={volley:1,lead:3,summon:8,shield:5,melee:0},d.move=null,d.moveT=0,d.shieldT=0,d.talkT=0,d.flankSide=1,d.attack=null,d.settled=!1}var O=null;function H(){return O&&O.boss}function z(d){return!!d&&d.state!=="idle"&&$e(d)}function Y(d,w,k){return!w||k&&d.talkT>0?!1:(_("RILEY: "+w,"#6fe0ec",4.5),R("rileyTalk"),d.talkT=3.5,!0)}function V(d){var w=d.mem,k=l.L.boss;if(d.sparring&&k&&k.intro&&!(w.fights>0)){Y(d,k.intro);return}Y(d,rn.default.line("intro",d.profile,{memory:w.fights>0?w:null})),w.ease>0?Y(d,rn.default.line("ease",d.profile)):d.tune.practised&&Y(d,rn.default.line("studied",d.profile,{wins:w.wins}))}function Z(d,w){d.settled||(d.settled=!0,rn.default.save(n,rn.default.settle(d.mem,d.profile,w)))}function ue(){var d=0;return l.ents.forEach(function(w){w.summoned&&$e(w)&&d++}),d}function xe(d){for(var w=0,k=0;k<30&&w<2;k++){var ce=p()*Math.PI*2,Q=g(1.5,3.5),oe=d.x+Math.cos(ce)*Q,he=d.z+Math.sin(ce)*Q,_e=Go(l.W,oe,he,.3);if(!(Hr(l.W,oe,he,.4,_e,.85,0).blocked||ae(oe,he)<3||!Ni(l.W,d.x,d.y+.5,d.z,oe,_e+.5,he))){var Te=E("imp",oe,he,_e);Te.summoned=!0,Te.state="chase",l.ents.push(Te),l.stats.totalKills++,x("fx","summon",oe,_e+.4,he),w++}}w&&(Y(d,rn.default.line("summon",d.profile)),R("rileySight",d)),d.cools.summon=18*d.tune.coolScale}function pe(d,w,k,ce){var Q={los:d.los,dist:w,phase:d.phase,cool:d.cools,impsAlive:ue(),playerWeapon:l.p.weapon},oe=rn.default.legalMoves(Q);if(d.allowed){var he=oe.filter(function(Ye){return d.allowed.indexOf(Ye)>=0});he.length&&(oe=he)}var _e=rn.default.choose(oe,d.profile,Q,t);d.move=_e.move,Y(d,rn.default.insight(d.profile,_e.why),!0);var Te=d.profile;switch(_e.move){case"volley":case"lead":d.state="windup",d.attack=_e.move,d.st=_e.move==="volley"?.55:.4,d.moveT=d.st+.2;break;case"backoff":d.moveT=1,d.moveAng=Math.atan2(-ce,-k)+g(-.5,.5);break;case"flank":d.flankSide=rn.default.strafeHabit(Te)>.3?rn.default.strafeSide(Te):p()<.5?1:-1,d.moveT=1.3;break;case"close":d.moveT=1.2;break;case"seek":d.moveT=.8;break;case"summon":xe(d),d.moveT=.8;break;case"shield":d.shieldT=1.6,d.moveT=1.2,d.cools.shield=8*d.tune.coolScale,R("rileyShield",d);break}}function ye(d,w){var k=l.p,ce=d.tune,Q=ce.coolScale*(d.phase>=3?.7:1);if(d.attack==="melee"){w<1.9&&d.los&&(de(g(10,20)*ce.dmgScale|0,d),R("punch",d)),d.cools.melee=1.2;return}if(d.los){var oe=k.y+k.eyeH*.8,he=Math.atan2(k.z-d.z,k.x-d.x);if(d.attack==="volley"){for(var _e=-1;_e<=1;_e++){var Te=he+_e*.2;ge(d,!0,d.x+Math.cos(Te)*w,oe,d.z+Math.sin(Te)*w,6.5,g(8,16)*ce.dmgScale)}d.cools.volley=g(1.6,2.4)*Q}else if(d.attack==="lead"){var Ye=9,tt=w/Ye;ge(d,!0,k.x+l.input.vx*tt,oe,k.z+l.input.vz*tt,Ye,g(10,18)*ce.dmgScale),d.cools.lead=g(1.8,2.8)*Q}}}function be(d,w){var k=l.p,ce=d.profile;d.animT+=w,d.st-=w,d.talkT-=w,d.shieldT-=w,d.moveT-=w,d.flashT-=w;for(var Q in d.cools)d.cools[Q]-=w;d.losT-=w,d.losT<=0&&(d.losT=.15,d.los=Ni(l.W,d.x,d.y+d.h*.85,d.z,k.x,ie(),k.z));var oe=k.x-d.x,he=k.z-d.z,_e=Math.sqrt(oe*oe+he*he);if(d.state==="idle"){d.los&&!k.dead&&(Oe(d),V(d));return}if(d.state==="die"){d.st<=-1.2&&(d.state="dead");return}if(!(d.state==="dead"||k.dead)){if(rn.default.observe(ce,{dt:w,los:d.los,dist:_e,strafe:l.input.strafe,moving:l.input.moving}),d.state==="pain"){d.st<=0&&(d.state="chase");return}if(d.state==="windup"){d.st<=0&&(d.state="chase",ye(d,_e));return}if(_e<1.3&&d.los&&d.cools.melee<=0){d.state="windup",d.attack="melee",d.st=.3;return}if(!(d.moveT<=0&&(pe(d,_e,oe,he),d.state==="windup"))){var Te=Math.atan2(he,oe),Ye=null;switch(d.move){case"backoff":Ye=d.moveAng;break;case"close":Ye=Te;break;case"flank":case"shield":Ye=Te+d.flankSide*1.35;break;case"seek":Ye=gt(d),Ye===null&&(Ye=Te);break}if(Ye!==null){var tt=d.speed*(d.phase>=3?1.25:1)*w;Br(l.W,d,Math.cos(Ye)*tt,Math.sin(Ye)*tt,d.radius,d.h,Yn)||(d.flankSide=-d.flankSide,d.moveAng+=Math.PI/2),F(d)}}}}function He(d,w){if(d.shieldT>0)return x("fx","spark",d.x,d.y+.5,d.z),R("rileyShield",d),!0;if(l.firing&&d.lastShot!==l.shotId&&(d.lastShot=l.shotId,d.profile.hits++),w&&!w.barrel&&w.kind==="imp"){var k=w.target===d?"impsTurned":"friendlyFire";d.profile.said[k]||(d.profile.said[k]=!0,Y(d,rn.default.line(k,d.profile)))}return!1}function Xe(d){if(d.hp<=0){R("rileyDerez",d),Y(d,rn.default.line("defeated",d.profile)),d.sparring&&_("RILEY: THAT WAS JUST PRACTICE. I'LL REMEMBER HOW YOU FIGHT.","#6fe0ec",6),Z(d,!0),l.exitT=d.sparring?6.5:5;return}d.sparring||(d.phase<3&&d.hp<d.maxHp*.33?(d.phase=3,Y(d,rn.default.line("phase3",d.profile))):d.phase<2&&d.hp<d.maxHp*.66&&(d.phase=2,Y(d,rn.default.line("phase2",d.profile)),xe(d)))}function W(){for(var d=l.p,w=ie(),k=12,ce=l.W,Q=Math.floor(d.x),oe=Math.floor(d.z),he=Math.max(0,oe-k);he<=Math.min(l.mh-1,oe+k);he++)for(var _e=Math.max(0,Q-k);_e<=Math.min(l.mw-1,Q+k);_e++){var Te=he*l.mw+_e;l.seen[Te]||vr(ce,_e,he)||Ni(ce,d.x,w,d.z,_e+.5,vn(ce,_e,he)+.4,he+.5)&&(l.seen[Te]=1,ba(ce,_e,he).forEach(function(Ye){ce.cells[Ye.i]!==0&&(l.seen[Ye.i]=1)}))}}function Se(){W();var d=l.p,w=ie();function k(_e,Te){return v(_e.x,_e.z,d.x,d.z)<Te*Te&&Ni(l.W,d.x,w,d.z,_e.x,(_e.y||0)+(_e.h||.3)*.6,_e.z)}for(var ce=0;ce<l.ents.length;ce++){var Q=l.ents[ce];if(Q.kind==="pickup"&&!Q.spotted&&(Q.item==="r"||Q.item==="u")&&k(Q,14)&&(Q.spotted=!0),Q.mob&&!Q.barrel&&$e(Q)&&ed["meet_"+Q.kind]&&!r.seenTips["meet_"+Q.kind]&&k(Q,11)&&M("meet_"+Q.kind),Q.barrel&&!Q.gone&&!r.seenTips.barrel&&k(Q,10))for(var oe=0;oe<l.ents.length;oe++){var he=l.ents[oe];if(he.mob&&!he.barrel&&$e(he)&&he.state!=="idle"&&v(he.x,he.z,Q.x,Q.z)<4){M("barrel");break}}Q.kind==="torch"&&u===0&&l.time>20&&k(Q,5)&&M("torches")}l.W.lifts.forEach(function(_e){v(_e.x+.5,_e.z+.5,d.x,d.z)<16&&M("lift")})}function fe(){var d=l.info,w=l.p,k,ce=d.keys.blue&&!w.keys.blue?"u":d.keys.red&&!w.keys.red?"r":null;if(ce){for(var Q=0;Q<l.ents.length;Q++){var oe=l.ents[Q];if(oe.kind==="pickup"&&oe.item===ce&&!oe.gone)return oe.spotted?{x:oe.x,y:oe.y+.3,z:oe.z}:null}return null}for(k in l.doors){var he=l.doors[k];if(he.locked&&!he.used&&l.seen[he.z*l.mw+he.x])return{x:he.x+.5,y:vn(l.W,he.x,he.z)+.8,z:he.z+.5}}var _e=l.exitCell;if(!d.boss&&_e&&l.seen[_e.z*l.mw+_e.x])return{x:_e.x+.5,y:.8,z:_e.z+.5};var Te=l.boss;return d.boss&&Te&&$e(Te)&&l.seen[Math.floor(Te.z)*l.mw+Math.floor(Te.x)]?{x:Te.x,y:Te.y+Te.h+.3,z:Te.z}:null}function Ae(d){var w=l.p,k=Qf[d.item],ce=m().ammo,Q=null;switch(d.item){case"h":w.hp>=100?Q="HEALTH":w.hp=Math.min(100,w.hp+10);break;case"+":w.hp>=100?Q="HEALTH":w.hp=Math.min(100,w.hp+25);break;case"A":w.armor>=100?Q="ARMOR":(w.armor=100,w.grinT=1);break;case"b":w.ammo.bullets>=200?Q="BULLETS":w.ammo.bullets=Math.min(200,w.ammo.bullets+10*ce);break;case"a":w.ammo.shells>=50?Q="SHELLS":w.ammo.shells=Math.min(50,w.ammo.shells+4*ce);break;case"k":w.ammo.rockets>=30?Q="ROCKETS":w.ammo.rockets=Math.min(30,w.ammo.rockets+3*ce);break;case"2":w.weapons.shotgun=!0,w.ammo.shells=Math.min(50,w.ammo.shells+8*ce),w.grinT=1.2,w.weapon!=="shotgun"&&J("shotgun",!0),b("SHOTGUN!  PRESS 3","#ffd23e",2.5),M("weapons");break;case"3":w.weapons.chaingun=!0,w.ammo.bullets=Math.min(200,w.ammo.bullets+40*ce),w.grinT=1.2,J("chaingun",!0),b("CHAINGUN!  PRESS 4","#ffd23e",2.5);break;case"4":w.weapons.rocket=!0,w.ammo.rockets=Math.min(30,w.ammo.rockets+5*ce),w.grinT=1.2,J("rocket",!0),b("ROCKET LAUNCHER!  PRESS 5","#ffd23e",2.5);break;case"r":case"u":var oe=d.item==="r"?"red":"blue";w.keys[oe]=!0,w.grinT=1,b(oe.toUpperCase()+" KEYCARD",oe==="red"?"#ff5a3a":"#6a98ff",2.5),M("key");break;case"P":w.hp=Math.min(200,w.hp+100),w.grinT=1.2;break}if(Q){d.touching=!0,_(Q+" ALREADY FULL","#8a8478",1.5);return}d.gone=!0,l.stats.items++,w.bonusFlash=Math.min(.35,w.bonusFlash+.22),R(k.snd),x("fx","pickup",d.x,d.y+.3,d.z,{item:d.item}),_(k.msg),w.autoFist&&(d.item==="b"||d.item==="a"||d.item==="k")&&(w.autoFist=!1,J(K(w),!0))}function Pe(d){var w=l.p;if(w.dead){w.deadT+=d,w.eyeH=Math.max(.15,w.eyeH-d*1.2);return}var k=!!a.KeyC;if(!k&&w.crouch){var ce=Hr(l.W,w.x,w.z,fn.r,w.y,fn.h,0);ce.blocked||(w.crouch=!1)}else w.crouch=k;var Q=w.crouch?fn.hCrouch:fn.h,oe=w.crouch?fn.eyeCrouch:fn.eye;w.eyeH+=(oe-w.eyeH)*Math.min(1,d*14);var he=a.ShiftLeft||a.ShiftRight,_e=0,Te=0;(a.KeyW||a.ArrowUp)&&(_e+=1),(a.KeyS||a.ArrowDown)&&(_e-=1),a.KeyA&&(Te-=1),a.KeyD&&(Te+=1),a.ArrowLeft&&(w.ang-=2.6*d),a.ArrowRight&&(w.ang+=2.6*d),a.PageUp&&(w.pitch+=1.6*d),a.PageDown&&(w.pitch-=1.6*d),w.pitch=y(w.pitch,-1.3,1.3),_e&&Te&&(_e*=.7071,Te*=.7071);var Ye=w.crouch?fn.walk*.5:he?fn.run:fn.walk,tt=Math.cos(w.ang),dt=Math.sin(w.ang),Gt=(tt*_e-dt*Te)*Ye,Kt=(dt*_e+tt*Te)*Ye,an=w.onGround?14:3;w.vx+=(Gt-w.vx)*Math.min(1,d*an),w.vz+=(Kt-w.vz)*Math.min(1,d*an),a.Space&&!w.jumpHeld&&w.onGround&&!w.crouch&&(w.vy=fn.jumpV,w.onGround=!1,l.jumped=!0,R("jump")),w.jumpHeld=!!a.Space;var en=w.x,Pt=w.z,gn=w.onGround?Yn:Math.max(0,Math.min(bu,.12));Br(l.W,w,w.vx*d,w.vz*d,fn.r,Q,gn),he&&(_e||Te)&&(l.ranT+=d);var jt=Go(l.W,w.x,w.z,fn.r),nn=Hr(l.W,w.x,w.z,fn.r,Math.max(w.y,jt),Q,10).ceil;w.onGround&&jt<w.y-.02&&jt>w.y-Yn?w.y=jt:w.onGround&&jt<w.y&&(w.onGround=!1),w.onGround&&jt>w.y&&(w.y=jt),w.onGround||(w.vy-=fn.gravity*d,w.y+=w.vy*d,nn!==void 0&&w.y+Q>nn&&(w.y=nn-Q,w.vy>0&&(w.vy=0)),w.y<=jt&&(w.vy<-5&&(A(1.2),w.landT=.25),w.vy<-2&&R("land"),w.y=jt,w.vy=0,w.onGround=!0)),l.input.strafe=Te,l.input.moving=w.x!==en||w.z!==Pt,l.input.vx=(w.x-en)/d,l.input.vz=(w.z-Pt)/d,u===0&&(l.time>14&&l.ranT<.3&&M("run"),l.time>25&&!l.jumped&&M("jump"),l.time>40&&!l.usedMap&&M("map"),l.time>70&&!l.stats.secrets&&M("secret")),a.KeyE?w.usedHeld||(w.usedHeld=!0,ut()):w.usedHeld=!1,w.nextWeapon&&w.raiseT<=0&&!(w.lowerT>0)&&(w.lowerT=.15),w.lowerT>0&&(w.lowerT-=d,w.lowerT<=0&&(w.weapon=w.nextWeapon||w.weapon,w.nextWeapon=null,w.raiseT=.15)),w.raiseT>0&&(w.raiseT-=d),w.cool-=d,w.fireT+=d;var pt=Ta[w.weapon];if(o&&w.cool<=0&&w.raiseT<=0&&w.lowerT<=0&&!w.nextWeapon&&l.exitT<0)if(pt.ammo&&w.ammo[pt.ammo]<=0){R("noAmmo");var ri=K(w);_("OUT OF "+jf[pt.ammo]+"!"),J(ri,!0)&&ri==="fist"&&(w.autoFist=!0),M("lowAmmo"),w.cool=.3}else{if(pt.ammo&&w.ammo[pt.ammo]--,w.cool=pt.rate,w.fireT=0,R(w.weapon==="fist"?"punch":w.weapon==="chaingun"?"pistol":w.weapon==="rocket"?"shotgun":w.weapon),w.weapon==="shotgun"&&R("pump"),pt.melee||(A(pt.shake),x("fx","muzzle",w.x+Math.cos(w.ang)*.4,ie()-.1,w.z+Math.sin(w.ang)*.4,{weapon:w.weapon})),z(l.boss)&&rn.default.noteShot(l.boss.profile,w.weapon,ae(l.boss.x,l.boss.z)),l.shotId++,l.firing=!0,pt.rocket)G();else if(pt.melee)Re(w.ang,w.pitch,pt.dmgMin,pt.dmgMax,!0,pt.knock);else for(var I=0;I<pt.pellets;I++)Re(w.ang+(p()-.5)*2*pt.spread,w.pitch+(p()-.5)*pt.spread,pt.dmgMin,pt.dmgMax,!1,pt.knock);l.firing=!1,pt.melee||Qe(w.x,w.z,14)}for(var q=0;q<l.ents.length;q++){var re=l.ents[q];re.kind!=="pickup"||re.gone||(v(re.x,re.z,w.x,w.z)<.45&&Math.abs(re.y-w.y)<.6?re.touching||Ae(re):re.touching=!1)}for(var ee=l.L.triggers||[],te=f[u]||(f[u]={}),Ee=0;Ee<ee.length;Ee++){var Ce=ee[Ee].box;te[Ee]||w.x<Ce[0]||w.x>Ce[2]+1||w.z<Ce[1]||w.z>Ce[3]+1||(te[Ee]=!0,_("RILEY: "+ee[Ee].say,"#6fe0ec",Math.max(4.5,ee[Ee].say.length/14)),R("rileyTalk"))}var we=Math.floor(w.x),De=Math.floor(w.z);l.secrets.forEach(function(Fe){!Fe.found&&Fe.x===we&&Fe.z===De&&(Fe.found=!0,l.stats.secrets++,R("secret"),b("SECRET AREA FOUND!","#ffd23e",2.5))})}function ve(d){if(!(c!=="game"||!l)){var w=l.p;l.events.length=0,l.time+=d,w.dmgFlash=Math.max(0,w.dmgFlash-d*.8),w.bonusFlash=Math.max(0,w.bonusFlash-d*1.5),w.painT=Math.max(0,w.painT-d),w.grinT=Math.max(0,w.grinT-d),w.landT=Math.max(0,w.landT-d),l.shake=Math.max(0,l.shake-d*14);for(var k=0;k<l.msgs.length;k++)l.msgs[k].t-=d;for(;l.msgs.length&&l.msgs[0].t<=0;)l.msgs.shift();l.notice&&(l.notice.t-=d)<=0&&(l.notice=null),l.hitT-=d,l.killT-=d,l.blockT-=d;for(var ce=l.hurtDirs.length-1;ce>=0;ce--)(l.hurtDirs[ce].t-=d*.9)<=0&&l.hurtDirs.splice(ce,1);if(P(d),l.spotT-=d,l.spotT<=0&&(l.spotT=.3,Se()),l.exitT>=0&&(l.exitT-=d,l.exitT<=0)){h={name:l.L.name,time:l.time,par:l.L.par,kills:l.stats.kills,totalKills:l.stats.totalKills,items:l.stats.items,totalItems:l.stats.totalItems,secrets:l.stats.secrets,totalSecrets:l.stats.totalSecrets},s(u,h),c="inter";return}Qt(d),kt(d),l.flowT-=d,l.flowT<=0&&(l.flowT=.25,rt()),Pe(d);for(var Q=l.ents.length-1;Q>=0;Q--){var oe=l.ents[Q];if(oe.gone){l.ents.splice(Q,1);continue}if(oe.kind==="torch"){oe.animT+=d;continue}if(oe.kind==="pickup"){oe.bob+=d;continue}if(oe.kind==="proj"){oe.animT+=d;for(var he=3,_e=!1,Te=0;Te<he&&!_e;Te++){oe.x+=oe.vx*d/he,oe.y+=oe.vy*d/he,oe.z+=oe.vz*d/he;var Ye=Math.floor(oe.x),tt=Math.floor(oe.z),dt=vr(l.W,Ye,tt)||oe.y<vn(l.W,Ye,tt)||oe.y>Li(l.W,Ye,tt)?"wall":Ke(oe);!dt&&!oe.playerRocket&&!w.dead&&v(oe.x,oe.z,w.x,w.z)<.2&&oe.y>w.y-.1&&oe.y<w.y+(w.crouch?fn.hCrouch:fn.h)+.1&&(dt="player"),dt&&(_e=!0,oe.playerRocket?j(oe):(dt==="player"?(de(oe.dmg|0,{x:oe.x-oe.vx,z:oe.z-oe.vz,kind:oe.owner?oe.owner.kind:"imp"}),R("fireExplode")):(dt!=="wall"&&me(dt,oe.dmg|0,oe.owner),R("fireExplode",oe)),x("fx",oe.green?"greenBurst":"fireBurst",oe.x,oe.y,oe.z)),l.ents.splice(Q,1))}continue}if(oe.barrel){oe.state==="boom"&&(oe.st-=d,oe.st<=0&&le(oe));continue}oe.kind==="riley"?be(oe,d):oe.mob&&T(oe,d)}}}function Ke(d){for(var w=0;w<l.ents.length;w++){var k=l.ents[w];if(!(!k.mob||k===d.owner||!$e(k))&&!(!k.barrel&&d.owner&&k.kind===d.owner.kind)){var ce=k.radius+.1;if(v(d.x,d.z,k.x,k.z)<ce*ce&&d.y>=k.y-.1&&d.y<=k.y+k.h+.1)return k}}return null}function We(){var d=l.p,w=Math.cos(d.pitch),k=Math.cos(d.ang)*w,ce=Math.sin(d.ang)*w,Q=Math.sin(d.pitch),oe=Vo(l.W,d.x,ie(),d.z,k,Q,ce,40),he=null,_e=oe.dist;return l.ents.forEach(function(Te){if(!(!Te.mob||!$e(Te))){var Ye=Ue(d.x,ie(),d.z,k,Q,ce,Te);Ye!==null&&Ye<_e&&(he=Te,_e=Ye)}}),he}var It=!1;function wt(){if(c==="inter"){if(!It){It=!0;return}It=!1,u+1>=e.length?c="victory":N(u+1,!0)}else c==="victory"?c="title":c==="game"&&l&&l.p.dead&&l.p.deadT>1.2&&S()}function Xn(){return{floorAt:function(d,w){return vr(l.W,d,w)&&!(gr(l.W,d,w)&&!gr(l.W,d,w).locked)?null:vn(l.W,d,w)},neighbours:function(d,w){var k=[],ce=vn(l.W,d,w);return ba(l.W,d,w).forEach(function(Q){var oe=ai(l.W,Q.x,Q.z);if(!(oe!==0&&!mi[oe])){var he=vn(l.W,Q.x,Q.z)-ce,_e=he<=.02&&he>=-.02?"walk":he<0?"drop":he<=Yn?"step":he<=bu?"jump":null;_e&&k.push({cx:Q.x,cz:Q.z,cost:_e==="jump"?2:1,kind:_e})}}),k}}}return{keys:a,state:function(){return l},mode:function(){return c},setMode:function(d){c=d},interStats:function(){return h},levelIndex:function(){return u},levels:e,update:ve,startLevel:N,retryLevel:S,onEnter:wt,setFire:function(d){o=!!d},switchWeapon:J,cycleWeapon:ne,quickSwitch:se,useTarget:X,usePrompt:zt,useAction:ut,objective:U,goalTarget:fe,aimTarget:We,hurtPlayer:de,walkGraph:Xn,levelInfo:C,hasAmmo:B,settings:r,DIFFS:kr}}var id=Sa(nd(),1),d0={name:"E1M1: ASH GATES",floor:"slab",ceil:"ceilDark",par:240,playerAngle:0,ceilHeight:2.5,boss:{sparring:!0,hpScale:.4,moves:["volley","lead","flank","close","backoff","seek"],intro:"THERE YOU ARE! LET'S SPAR. I'LL WATCH HOW YOU FIGHT. READY?"},triggers:[{box:[2,25,8,30],say:"HI! I'M RILEY. I'M WAITING FOR YOU AT THE TOP. LOOK AROUND WITH THE MOUSE, MOVE WITH WASD."},{box:[7,26,9,28],say:"DOORS OPEN WITH E. GO ON, TRY IT."},{box:[15,23,28,29],say:"SEE THE SHOTGUN UP THERE? JUMP WITH SPACE."},{box:[14,20,28,22],say:"NICE VIEW. THE BLUE KEYCARD IS DOWN IN THE HALL. THE BLUE DOOR IS ACROSS FROM YOU."},{box:[2,17,5,21],say:"GOT IT? NOW THE BLUE DOOR. THE LIFT BEHIND IT BRINGS YOU UP TO ME."},{box:[20,11,28,15],say:"LAST STOP. GRAB WHAT YOU NEED. WHEN MY VISOR FLASHES WHITE, I'M ABOUT TO SHOOT. MOVE!"}],map:["##############################","##############.t...........t.#","##############...............#","##############....T..Y..T....#","##############....T.....T....#","##############.h...........h.#","##############...............#","##############....T.....T....#","##############.......a.......#","##############........t.t....#","#######################D######","####################..t.t....#","####################.........#","####################.....+...#","####################....A....#","####################...L.....#","#######################U######","##....................t.t...##","##.t......%%......%%........##","##u...g......i..............##","##.t.......h.....g..........##","##..........................##","####################D#########","###*Pa#########....t.t......##","####S##########.....i.....o.##","##b......######..........io.##","##.......######......h......##","##..p....D........2.........##","##.......######..o..........##","##.......######.t.........t.##","##...h...#####################","##############################"],heights:["000000000000000000000000000000","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","000000000000000000000000000000","000000000000000000008888888880","000000000000000000008888888880","000000000000000000008888888880","000000000000000000008888888880","000000000000000000008888888880","000000000000000000000000000000","000000000000000000000000000000","000000000000000000000000000000","000000000000000000000000000000","000000000001234444444444444400","000000000001234444444444444400","000000000000000000000000000000","000000000000000444444444444440","000000000000000444444444444440","000000000000000444444444444440","000000000000000446664444444440","000000000012344446664444444440","000000000000000446664444444440","000000000000000444444444444440","000000000000000000000000000000","000000000000000000000000000000"],ceilings:["..............................","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............................","....................iiiiiiiii.","....................iiiiiiiii.","....................iiiiiiiii.","....................iiiiiiiii.","....................iiiiiiiii.","..............................","..gggggggggggggggggggggggggg..","..gggggggggggggggggggggggggg..","..gggggggggggggggggggggggggg..","..gggggggggggggggggggggggggg..","..gggggggggggggggggggggggggg..","..............................","...............eeeeeeeeeeeeee.","...............eeeeeeeeeeeeee.","...............eeeeeeeeeeeeee.","...............eeeeeeeeeeeeee.",".........cccccceeeeeeeeeeeeee.","...............eeeeeeeeeeeeee.","...............eeeeeeeeeeeeee.","..............................",".............................."]};function wu(i,e){var t=Object.assign({ceilHeight:2},i,{map:i.map.slice()});return e.forEach(function(n){var r=n[0],s=n[1],a=t.map[s];if(!a||a[r]!==".")throw new Error("Weapon pickup must be on an open floor at "+r+","+s);t.map[s]=a.slice(0,r)+n[2]+a.slice(r+1)}),t}var zr=[d0].concat(id.default.slice(1).map(function(i,e){return e===0?wu(i,[[18,7,"3"]]):e===1?wu(i,[[16,23,"4"],[19,23,"k"],[16,13,"k"]]):wu(i,[])}));function rd(i){var e=i>>>0||1;return function(){e=e+1831565813|0;var t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Gd=0,ah=1,Vd=2;var ao=1,Wd=2,ta=3,zi=0,Tn=1,Vn=2,ui=0,na=1,cr=2,oh=3,lh=4,qd=5;var as=100,Xd=101,Yd=102,Kd=103,Zd=104,Jd=200,jd=201,$d=202,Qd=203,ch=204,uh=205,ep=206,tp=207,np=208,ip=209,rp=210,sp=211,ap=212,op=213,lp=214,_l=0,xl=1,yl=2,Us=3,Ml=4,Sl=5,bl=6,Tl=7,Wl=0,cp=1,up=2,Ti=0,oo=1,lo=2,co=3,os=4,uo=5,ho=6,fo=7,ju="attached",hp="detached",hh=300,Pr=301,ls=302,ql=303,Xl=304,po=306,ci=1e3,li=1001,Os=1002,qt=1003,Yl=1004;var cs=1005;var cn=1006,ia=1007;var Ei=1008;var Wn=1009,fh=1010,dh=1011,ra=1012,Kl=1013,wi=1014,jn=1015,En=1016,Zl=1017,Jl=1018,sa=1020,ph=35902,mh=35899,gh=1021,vh=1022,$n=1023,Oi=1026,Lr=1027,jl=1028,$l=1029,Nr=1030,Ql=1031;var ec=1033,mo=33776,go=33777,vo=33778,_o=33779,tc=35840,nc=35841,ic=35842,rc=35843,sc=36196,ac=37492,oc=37496,lc=37488,cc=37489,xo=37490,uc=37491,hc=37808,fc=37809,dc=37810,pc=37811,mc=37812,gc=37813,vc=37814,_c=37815,xc=37816,yc=37817,Mc=37818,Sc=37819,bc=37820,Tc=37821,Ec=36492,wc=36494,Ac=36495,Rc=36283,Cc=36284,yo=36285,Ic=36286,Pc=2200,Lc=2201,fp=2202,Zr=2300,Jr=2301,ml=2302,$u=2303,Xr=2400,Yr=2401,Oa=2402,Nc=2500,dp=2501,_h=0,Mo=1,aa=2,pp=3200;var So=0,mp=1,Qn="",Wt="srgb",Fn="srgb-linear",Fa="linear",At="srgb";var gl=7680;var gp=519,vp=512,_p=513,xp=514,Dc=515,yp=516,Mp=517,Uc=518,Sp=519,xh=35044,oa=35048;var yh="300 es",Mi=2e3,Fs=2001;function p0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function m0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Hs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bp(){let i=Hs("canvas");return i.style.display="block",i}var sd={},Bs=null;function Ha(...i){let e="THREE."+i.shift();Bs?Bs("log",e,...i):console.log(e,...i)}function Tp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ze(...i){i=Tp(i);let e="THREE."+i.shift();if(Bs)Bs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function et(...i){i=Tp(i);let e="THREE."+i.shift();if(Bs)Bs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Kr(...i){let e=i.join(" ");e in sd||(sd[e]=!0,Ze(...i))}function Ep(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var wp={[_l]:xl,[yl]:bl,[Ml]:Tl,[Us]:Sl,[xl]:_l,[bl]:yl,[Tl]:Ml,[Sl]:Us},bi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ad=1234567,Da=Math.PI/180,jr=180/Math.PI;function Si(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Cn[i&255]+Cn[i>>8&255]+Cn[i>>16&255]+Cn[i>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[t&63|128]+Cn[t>>8&255]+"-"+Cn[t>>16&255]+Cn[t>>24&255]+Cn[n&255]+Cn[n>>8&255]+Cn[n>>16&255]+Cn[n>>24&255]).toLowerCase()}function _t(i,e,t){return Math.max(e,Math.min(t,i))}function Mh(i,e){return(i%e+e)%e}function g0(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function v0(i,e,t){return i!==e?(t-i)/(e-i):0}function Ua(i,e,t){return(1-t)*i+t*e}function _0(i,e,t,n){return Ua(i,e,1-Math.exp(-t*n))}function x0(i,e=1){return e-Math.abs(Mh(i,e*2)-e)}function y0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function M0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function S0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function b0(i,e){return i+Math.random()*(e-i)}function T0(i){return i*(.5-Math.random())}function E0(i){i!==void 0&&(ad=i);let e=ad+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function w0(i){return i*Da}function A0(i){return i*jr}function R0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function C0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function I0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function P0(i,e,t,n,r){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),u=s((e+n)/2),l=a((e+n)/2),h=s((e-n)/2),f=a((e-n)/2),p=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*l,c*h,c*f,o*u);break;case"YZY":i.set(c*f,o*l,c*h,o*u);break;case"ZXZ":i.set(c*h,c*f,o*l,o*u);break;case"XZX":i.set(o*l,c*g,c*p,o*u);break;case"YXY":i.set(c*p,o*l,c*g,o*u);break;case"ZYZ":i.set(c*g,c*p,o*l,o*u);break;default:Ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function yi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Nt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Sh={DEG2RAD:Da,RAD2DEG:jr,generateUUID:Si,clamp:_t,euclideanModulo:Mh,mapLinear:g0,inverseLerp:v0,lerp:Ua,damp:_0,pingpong:x0,smoothstep:y0,smootherstep:M0,randInt:S0,randFloat:b0,randFloatSpread:T0,seededRandom:E0,degToRad:w0,radToDeg:A0,isPowerOfTwo:R0,ceilPowerOfTwo:C0,floorPowerOfTwo:I0,setQuaternionFromProperEuler:P0,normalize:Nt,denormalize:yi},Ah=class Ah{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ah.prototype.isVector2=!0;var Je=Ah,Pn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],u=n[r+1],l=n[r+2],h=n[r+3],f=s[a+0],p=s[a+1],g=s[a+2],y=s[a+3];if(h!==y||c!==f||u!==p||l!==g){let v=c*f+u*p+l*g+h*y;v<0&&(f=-f,p=-p,g=-g,y=-y,v=-v);let m=1-o;if(v<.9995){let x=Math.acos(v),R=Math.sin(x);m=Math.sin(m*x)/R,o=Math.sin(o*x)/R,c=c*m+f*o,u=u*m+p*o,l=l*m+g*o,h=h*m+y*o}else{c=c*m+f*o,u=u*m+p*o,l=l*m+g*o,h=h*m+y*o;let x=1/Math.sqrt(c*c+u*u+l*l+h*h);c*=x,u*=x,l*=x,h*=x}}e[t]=c,e[t+1]=u,e[t+2]=l,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],c=n[r+1],u=n[r+2],l=n[r+3],h=s[a],f=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+l*h+c*p-u*f,e[t+1]=c*g+l*f+u*h-o*p,e[t+2]=u*g+l*p+o*f-c*h,e[t+3]=l*g-o*h-c*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(n/2),l=o(r/2),h=o(s/2),f=c(n/2),p=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=f*l*h+u*p*g,this._y=u*p*h-f*l*g,this._z=u*l*g+f*p*h,this._w=u*l*h-f*p*g;break;case"YXZ":this._x=f*l*h+u*p*g,this._y=u*p*h-f*l*g,this._z=u*l*g-f*p*h,this._w=u*l*h+f*p*g;break;case"ZXY":this._x=f*l*h-u*p*g,this._y=u*p*h+f*l*g,this._z=u*l*g+f*p*h,this._w=u*l*h-f*p*g;break;case"ZYX":this._x=f*l*h-u*p*g,this._y=u*p*h+f*l*g,this._z=u*l*g-f*p*h,this._w=u*l*h+f*p*g;break;case"YZX":this._x=f*l*h+u*p*g,this._y=u*p*h+f*l*g,this._z=u*l*g-f*p*h,this._w=u*l*h-f*p*g;break;case"XZY":this._x=f*l*h-u*p*g,this._y=u*p*h-f*l*g,this._z=u*l*g+f*p*h,this._w=u*l*h+f*p*g;break;default:Ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],u=t[2],l=t[6],h=t[10],f=n+o+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(l-c)*p,this._y=(s-u)*p,this._z=(a-r)*p}else if(n>o&&n>h){let p=2*Math.sqrt(1+n-o-h);this._w=(l-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+u)/p}else if(o>h){let p=2*Math.sqrt(1+o-n-h);this._w=(s-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+l)/p}else{let p=2*Math.sqrt(1+h-n-o);this._w=(a-r)/p,this._x=(s+u)/p,this._y=(c+l)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,u=t._z,l=t._w;return this._x=n*l+a*o+r*u-s*c,this._y=r*l+a*c+s*o-n*u,this._z=s*l+a*u+n*c-r*o,this._w=a*l-n*o-r*c-s*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){let u=Math.acos(o),l=Math.sin(u);c=Math.sin(c*u)/l,t=Math.sin(t*u)/l,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Rh=class Rh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(od.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(od.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*r-o*n),l=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+c*u+a*h-o*l,this.y=n+c*l+o*u-s*h,this.z=r+c*h+s*l-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Au.copy(this).projectOnVector(e),this.sub(Au)}reflect(e){return this.sub(Au.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Rh.prototype.isVector3=!0;var $=Rh,Au=new $,od=new Pn,Ch=class Ch{constructor(e,t,n,r,s,a,o,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,u)}set(e,t,n,r,s,a,o,c,u){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=s,l[5]=c,l[6]=n,l[7]=a,l[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],l=n[4],h=n[7],f=n[2],p=n[5],g=n[8],y=r[0],v=r[3],m=r[6],x=r[1],R=r[4],E=r[7],C=r[2],L=r[5],N=r[8];return s[0]=a*y+o*x+c*C,s[3]=a*v+o*R+c*L,s[6]=a*m+o*E+c*N,s[1]=u*y+l*x+h*C,s[4]=u*v+l*R+h*L,s[7]=u*m+l*E+h*N,s[2]=f*y+p*x+g*C,s[5]=f*v+p*R+g*L,s[8]=f*m+p*E+g*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],l=e[8];return t*a*l-t*o*u-n*s*l+n*o*c+r*s*u-r*a*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],l=e[8],h=l*a-o*u,f=o*c-l*s,p=u*s-a*c,g=t*h+n*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=h*y,e[1]=(r*u-l*n)*y,e[2]=(o*n-r*a)*y,e[3]=f*y,e[4]=(l*t-r*c)*y,e[5]=(r*s-o*t)*y,e[6]=p*y,e[7]=(n*c-u*t)*y,e[8]=(a*t-n*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*a+u*o)+a+e,-r*u,r*c,-r*(-u*a+c*o)+o+t,0,0,1),this}scale(e,t){return Kr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ru.makeScale(e,t)),this}rotate(e){return Kr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ru.makeRotation(-e)),this}translate(e,t){return Kr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ru.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ch.prototype.isMatrix3=!0;var at=Ch,Ru=new at,ld=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cd=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function L0(){let i={enabled:!0,workingColorSpace:Fn,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===At&&(r.r=tr(r.r),r.g=tr(r.g),r.b=tr(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===At&&(r.r=Ds(r.r),r.g=Ds(r.g),r.b=Ds(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Qn?Fa:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Kr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Kr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Fn]:{primaries:e,whitePoint:n,transfer:Fa,toXYZ:ld,fromXYZ:cd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:n,transfer:At,toXYZ:ld,fromXYZ:cd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),i}var ct=L0();function tr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ds(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ys,El=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ys===void 0&&(ys=Hs("canvas")),ys.width=e.width,ys.height=e.height;let r=ys.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ys}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Hs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=tr(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(tr(t[n]/255)*255):t[n]=tr(t[n]);return{data:t,width:e.width,height:e.height}}else return Ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},N0=0,ks=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=Si(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Cu(r[a].image)):s.push(Cu(r[a]))}else s=Cu(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Cu(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?El.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ze("Texture: Unable to serialize Texture."),{})}var D0=0,Iu=new $,_n=class i extends bi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=li,r=li,s=cn,a=Ei,o=$n,c=Wn,u=i.DEFAULT_ANISOTROPY,l=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=Si(),this.name="",this.source=new ks(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Iu).x}get height(){return this.source.getSize(Iu).y}get depth(){return this.source.getSize(Iu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ze(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ci:e.x=e.x-Math.floor(e.x);break;case li:e.x=e.x<0?0:1;break;case Os:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ci:e.y=e.y-Math.floor(e.y);break;case li:e.y=e.y<0?0:1;break;case Os:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=hh;_n.DEFAULT_ANISOTROPY=1;var Ih=class Ih{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,u=c[0],l=c[4],h=c[8],f=c[1],p=c[5],g=c[9],y=c[2],v=c[6],m=c[10];if(Math.abs(l-f)<.01&&Math.abs(h-y)<.01&&Math.abs(g-v)<.01){if(Math.abs(l+f)<.1&&Math.abs(h+y)<.1&&Math.abs(g+v)<.1&&Math.abs(u+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(u+1)/2,E=(p+1)/2,C=(m+1)/2,L=(l+f)/4,N=(h+y)/4,S=(g+v)/4;return R>E&&R>C?R<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(R),r=L/n,s=N/n):E>C?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=L/r,s=S/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=N/s,r=S/s),this.set(n,r,s,t),this}let x=Math.sqrt((v-g)*(v-g)+(h-y)*(h-y)+(f-l)*(f-l));return Math.abs(x)<.001&&(x=1),this.x=(v-g)/x,this.y=(h-y)/x,this.z=(f-l)/x,this.w=Math.acos((u+p+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ih.prototype.isVector4=!0;var Dt=Ih,wl=class extends bi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},s=new _n(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new ks(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},pn=class extends wl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ba=class extends _n{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Al=class extends _n{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Vl=class Vl{constructor(e,t,n,r,s,a,o,c,u,l,h,f,p,g,y,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,u,l,h,f,p,g,y,v)}set(e,t,n,r,s,a,o,c,u,l,h,f,p,g,y,v){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=c,m[2]=u,m[6]=l,m[10]=h,m[14]=f,m[3]=p,m[7]=g,m[11]=y,m[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Ms.setFromMatrixColumn(e,0).length(),s=1/Ms.setFromMatrixColumn(e,1).length(),a=1/Ms.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),u=Math.sin(r),l=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let f=a*l,p=a*h,g=o*l,y=o*h;t[0]=c*l,t[4]=-c*h,t[8]=u,t[1]=p+g*u,t[5]=f-y*u,t[9]=-o*c,t[2]=y-f*u,t[6]=g+p*u,t[10]=a*c}else if(e.order==="YXZ"){let f=c*l,p=c*h,g=u*l,y=u*h;t[0]=f+y*o,t[4]=g*o-p,t[8]=a*u,t[1]=a*h,t[5]=a*l,t[9]=-o,t[2]=p*o-g,t[6]=y+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*l,p=c*h,g=u*l,y=u*h;t[0]=f-y*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*l,t[9]=y-f*o,t[2]=-a*u,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*l,p=a*h,g=o*l,y=o*h;t[0]=c*l,t[4]=g*u-p,t[8]=f*u+y,t[1]=c*h,t[5]=y*u+f,t[9]=p*u-g,t[2]=-u,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,p=a*u,g=o*c,y=o*u;t[0]=c*l,t[4]=y-f*h,t[8]=g*h+p,t[1]=h,t[5]=a*l,t[9]=-o*l,t[2]=-u*l,t[6]=p*h+g,t[10]=f-y*h}else if(e.order==="XZY"){let f=a*c,p=a*u,g=o*c,y=o*u;t[0]=c*l,t[4]=-h,t[8]=u*l,t[1]=f*h+y,t[5]=a*l,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*l,t[10]=y*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(U0,e,O0)}lookAt(e,t,n){let r=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),_r.crossVectors(n,Kn),_r.lengthSq()===0&&(Math.abs(n.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),_r.crossVectors(n,Kn)),_r.normalize(),Wo.crossVectors(Kn,_r),r[0]=_r.x,r[4]=Wo.x,r[8]=Kn.x,r[1]=_r.y,r[5]=Wo.y,r[9]=Kn.y,r[2]=_r.z,r[6]=Wo.z,r[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],l=n[1],h=n[5],f=n[9],p=n[13],g=n[2],y=n[6],v=n[10],m=n[14],x=n[3],R=n[7],E=n[11],C=n[15],L=r[0],N=r[4],S=r[8],_=r[12],b=r[1],A=r[5],M=r[9],P=r[13],U=r[2],B=r[6],K=r[10],J=r[14],ne=r[3],se=r[7],ie=r[11],ae=r[15];return s[0]=a*L+o*b+c*U+u*ne,s[4]=a*N+o*A+c*B+u*se,s[8]=a*S+o*M+c*K+u*ie,s[12]=a*_+o*P+c*J+u*ae,s[1]=l*L+h*b+f*U+p*ne,s[5]=l*N+h*A+f*B+p*se,s[9]=l*S+h*M+f*K+p*ie,s[13]=l*_+h*P+f*J+p*ae,s[2]=g*L+y*b+v*U+m*ne,s[6]=g*N+y*A+v*B+m*se,s[10]=g*S+y*M+v*K+m*ie,s[14]=g*_+y*P+v*J+m*ae,s[3]=x*L+R*b+E*U+C*ne,s[7]=x*N+R*A+E*B+C*se,s[11]=x*S+R*M+E*K+C*ie,s[15]=x*_+R*P+E*J+C*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],u=e[13],l=e[2],h=e[6],f=e[10],p=e[14],g=e[3],y=e[7],v=e[11],m=e[15],x=c*p-u*f,R=o*p-u*h,E=o*f-c*h,C=a*p-u*l,L=a*f-c*l,N=a*h-o*l;return t*(y*x-v*R+m*E)-n*(g*x-v*C+m*L)+r*(g*R-y*C+m*N)-s*(g*E-y*L+v*N)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],u=e[6],l=e[10];return t*(a*l-o*u)-n*(s*l-o*c)+r*(s*u-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],l=e[8],h=e[9],f=e[10],p=e[11],g=e[12],y=e[13],v=e[14],m=e[15],x=t*o-n*a,R=t*c-r*a,E=t*u-s*a,C=n*c-r*o,L=n*u-s*o,N=r*u-s*c,S=l*y-h*g,_=l*v-f*g,b=l*m-p*g,A=h*v-f*y,M=h*m-p*y,P=f*m-p*v,U=x*P-R*M+E*A+C*b-L*_+N*S;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/U;return e[0]=(o*P-c*M+u*A)*B,e[1]=(r*M-n*P-s*A)*B,e[2]=(y*N-v*L+m*C)*B,e[3]=(f*L-h*N-p*C)*B,e[4]=(c*b-a*P-u*_)*B,e[5]=(t*P-r*b+s*_)*B,e[6]=(v*E-g*N-m*R)*B,e[7]=(l*N-f*E+p*R)*B,e[8]=(a*M-o*b+u*S)*B,e[9]=(n*b-t*M-s*S)*B,e[10]=(g*L-y*E+m*x)*B,e[11]=(h*E-l*L-p*x)*B,e[12]=(o*_-a*A-c*S)*B,e[13]=(t*A-n*_+r*S)*B,e[14]=(y*R-g*C-v*x)*B,e[15]=(l*C-h*R+f*x)*B,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,u=s*a,l=s*o;return this.set(u*a+n,u*o-r*c,u*c+r*o,0,u*o+r*c,l*o+n,l*c-r*a,0,u*c-r*o,l*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,u=s+s,l=a+a,h=o+o,f=s*u,p=s*l,g=s*h,y=a*l,v=a*h,m=o*h,x=c*u,R=c*l,E=c*h,C=n.x,L=n.y,N=n.z;return r[0]=(1-(y+m))*C,r[1]=(p+E)*C,r[2]=(g-R)*C,r[3]=0,r[4]=(p-E)*L,r[5]=(1-(f+m))*L,r[6]=(v+x)*L,r[7]=0,r[8]=(g+R)*N,r[9]=(v-x)*N,r[10]=(1-(f+y))*N,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Ms.set(r[0],r[1],r[2]).length(),o=Ms.set(r[4],r[5],r[6]).length(),c=Ms.set(r[8],r[9],r[10]).length();s<0&&(a=-a),gi.copy(this);let u=1/a,l=1/o,h=1/c;return gi.elements[0]*=u,gi.elements[1]*=u,gi.elements[2]*=u,gi.elements[4]*=l,gi.elements[5]*=l,gi.elements[6]*=l,gi.elements[8]*=h,gi.elements[9]*=h,gi.elements[10]*=h,t.setFromRotationMatrix(gi),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=Mi,c=!1){let u=this.elements,l=2*s/(t-e),h=2*s/(n-r),f=(t+e)/(t-e),p=(n+r)/(n-r),g,y;if(c)g=s/(a-s),y=a*s/(a-s);else if(o===Mi)g=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===Fs)g=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=l,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=h,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Mi,c=!1){let u=this.elements,l=2/(t-e),h=2/(n-r),f=-(t+e)/(t-e),p=-(n+r)/(n-r),g,y;if(c)g=1/(a-s),y=a/(a-s);else if(o===Mi)g=-2/(a-s),y=-(a+s)/(a-s);else if(o===Fs)g=-1/(a-s),y=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=l,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=h,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=g,u[14]=y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Vl.prototype.isMatrix4=!0;var lt=Vl,Ms=new $,gi=new lt,U0=new $(0,0,0),O0=new $(1,1,1),_r=new $,Wo=new $,Kn=new $,ud=new lt,hd=new Pn,Fi=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],l=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(_t(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-l,p),this._y=0);break;default:Ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ud.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ud,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hd.setFromEuler(this),this.setFromQuaternion(hd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Fi.DEFAULT_ORDER="XYZ";var ka=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},F0=0,fd=new $,Ss=new Pn,Zi=new lt,qo=new $,wa=new $,H0=new $,B0=new Pn,dd=new $(1,0,0),pd=new $(0,1,0),md=new $(0,0,1),gd={type:"added"},k0={type:"removed"},bs={type:"childadded",child:null},Pu={type:"childremoved",child:null},Xt=class i extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new $,t=new Fi,n=new Pn,r=new $(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new at}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(dd,e)}rotateY(e){return this.rotateOnAxis(pd,e)}rotateZ(e){return this.rotateOnAxis(md,e)}translateOnAxis(e,t){return fd.copy(e).applyQuaternion(this.quaternion),this.position.add(fd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dd,e)}translateY(e){return this.translateOnAxis(pd,e)}translateZ(e){return this.translateOnAxis(md,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qo.copy(e):qo.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(wa,qo,this.up):Zi.lookAt(qo,wa,this.up),this.quaternion.setFromRotationMatrix(Zi),r&&(Zi.extractRotation(r.matrixWorld),Ss.setFromRotationMatrix(Zi),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gd),bs.child=e,this.dispatchEvent(bs),bs.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(k0),Pu.child=e,this.dispatchEvent(Pu),Pu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gd),bs.child=e,this.dispatchEvent(bs),bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,e,H0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,B0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let u=0,l=c.length;u<l;u++){let h=c[u];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),u=a(e.textures),l=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),l.length>0&&(n.images=l),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){let c=[];for(let u in o){let l=o[u];delete l.metadata,c.push(l)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Xt.DEFAULT_UP=new $(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var st=class extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}},z0={type:"move"},zs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new st,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new st,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new st,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(let y of e.hand.values()){let v=t.getJointPose(y,n),m=this._getHandJoint(u,y);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}let l=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=l.position.distanceTo(h.position),p=.02,g=.005;u.inputState.pinching&&f>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(z0)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new st;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ap={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},Xo={h:0,s:0,l:0};function Lu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ct.workingColorSpace){if(e=Mh(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Lu(a,s,e+1/3),this.g=Lu(a,s,e),this.b=Lu(a,s,e-1/3)}return ct.colorSpaceToWorking(this,r),this}setStyle(e,t=Wt){function n(s){s!==void 0&&parseFloat(s)<1&&Ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){let n=Ap[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}copyLinearToSRGB(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return ct.workingToColorSpace(In.copy(this),e),Math.round(_t(In.r*255,0,255))*65536+Math.round(_t(In.g*255,0,255))*256+Math.round(_t(In.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(In.copy(this),t);let n=In.r,r=In.g,s=In.b,a=Math.max(n,r,s),o=Math.min(n,r,s),c,u,l=(o+a)/2;if(o===a)c=0,u=0;else{let h=a-o;switch(u=l<=.5?h/(a+o):h/(2-a-o),a){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=u,e.l=l,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=Wt){ct.workingToColorSpace(In.copy(this),e);let t=In.r,n=In.g,r=In.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(xr),this.setHSL(xr.h+e,xr.s+t,xr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xr),e.getHSL(Xo);let n=Ua(xr.h,Xo.h,t),r=Ua(xr.s,Xo.s,t),s=Ua(xr.l,Xo.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},In=new ze;ze.NAMES=Ap;var za=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ze(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Er=class extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fi,this.environmentIntensity=1,this.environmentRotation=new Fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},vi=new $,Ji=new $,Nu=new $,ji=new $,Ts=new $,Es=new $,vd=new $,Du=new $,Uu=new $,Ou=new $,Fu=new Dt,Hu=new Dt,Bu=new Dt,Tr=class i{constructor(e=new $,t=new $,n=new $){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),vi.subVectors(e,t),r.cross(vi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){vi.subVectors(r,t),Ji.subVectors(n,t),Nu.subVectors(e,t);let a=vi.dot(vi),o=vi.dot(Ji),c=vi.dot(Nu),u=Ji.dot(Ji),l=Ji.dot(Nu),h=a*u-o*o;if(h===0)return s.set(0,0,0),null;let f=1/h,p=(u*c-o*l)*f,g=(a*l-o*c)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,ji)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ji.x),c.addScaledVector(a,ji.y),c.addScaledVector(o,ji.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Fu.setScalar(0),Hu.setScalar(0),Bu.setScalar(0),Fu.fromBufferAttribute(e,t),Hu.fromBufferAttribute(e,n),Bu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Fu,s.x),a.addScaledVector(Hu,s.y),a.addScaledVector(Bu,s.z),a}static isFrontFacing(e,t,n,r){return vi.subVectors(n,t),Ji.subVectors(e,t),vi.cross(Ji).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),vi.cross(Ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;Ts.subVectors(r,n),Es.subVectors(s,n),Du.subVectors(e,n);let c=Ts.dot(Du),u=Es.dot(Du);if(c<=0&&u<=0)return t.copy(n);Uu.subVectors(e,r);let l=Ts.dot(Uu),h=Es.dot(Uu);if(l>=0&&h<=l)return t.copy(r);let f=c*h-l*u;if(f<=0&&c>=0&&l<=0)return a=c/(c-l),t.copy(n).addScaledVector(Ts,a);Ou.subVectors(e,s);let p=Ts.dot(Ou),g=Es.dot(Ou);if(g>=0&&p<=g)return t.copy(s);let y=p*u-c*g;if(y<=0&&u>=0&&g<=0)return o=u/(u-g),t.copy(n).addScaledVector(Es,o);let v=l*g-p*h;if(v<=0&&h-l>=0&&p-g>=0)return vd.subVectors(s,r),o=(h-l)/(h-l+(p-g)),t.copy(r).addScaledVector(vd,o);let m=1/(v+y+f);return a=y*m,o=f*m,t.copy(n).addScaledVector(Ts,a).addScaledVector(Es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Hn=class{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,_i):_i.fromBufferAttribute(s,a),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yo.copy(n.boundingBox)),Yo.applyMatrix4(e.matrixWorld),this.union(Yo)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Aa),Ko.subVectors(this.max,Aa),ws.subVectors(e.a,Aa),As.subVectors(e.b,Aa),Rs.subVectors(e.c,Aa),yr.subVectors(As,ws),Mr.subVectors(Rs,As),Gr.subVectors(ws,Rs);let t=[0,-yr.z,yr.y,0,-Mr.z,Mr.y,0,-Gr.z,Gr.y,yr.z,0,-yr.x,Mr.z,0,-Mr.x,Gr.z,0,-Gr.x,-yr.y,yr.x,0,-Mr.y,Mr.x,0,-Gr.y,Gr.x,0];return!ku(t,ws,As,Rs,Ko)||(t=[1,0,0,0,1,0,0,0,1],!ku(t,ws,As,Rs,Ko))?!1:(Zo.crossVectors(yr,Mr),t=[Zo.x,Zo.y,Zo.z],ku(t,ws,As,Rs,Ko))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},$i=[new $,new $,new $,new $,new $,new $,new $,new $],_i=new $,Yo=new Hn,ws=new $,As=new $,Rs=new $,yr=new $,Mr=new $,Gr=new $,Aa=new $,Ko=new $,Zo=new $,Vr=new $;function ku(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Vr.fromArray(i,s);let o=r.x*Math.abs(Vr.x)+r.y*Math.abs(Vr.y)+r.z*Math.abs(Vr.z),c=e.dot(Vr),u=t.dot(Vr),l=n.dot(Vr);if(Math.max(-Math.max(c,u,l),Math.min(c,u,l))>o)return!1}return!0}var dn=new $,Jo=new Je,G0=0,$t=class extends bi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:G0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=xh,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Jo.fromBufferAttribute(this,t),Jo.applyMatrix3(e),this.setXY(t,Jo.x,Jo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix3(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),r=Nt(r,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ga=class extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Va=class extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var St=class extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}},V0=new Hn,Ra=new $,zu=new $,kn=class{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):V0.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ra.subVectors(e,this.center);let t=Ra.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ra,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ra.copy(e.center).add(zu)),this.expandByPoint(Ra.copy(e.center).sub(zu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},W0=0,oi=new lt,Gu=new Xt,Cs=new $,Zn=new Hn,Ca=new Hn,Mn=new $,Yt=class i extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(p0(e)?Va:Ga)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new at().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,t,n){return oi.makeTranslation(e,t,n),this.applyMatrix4(oi),this}scale(e,t,n){return oi.makeScale(e,t,n),this.applyMatrix4(oi),this}lookAt(e){return Gu.lookAt(e),Gu.updateMatrix(),this.applyMatrix4(Gu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new St(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Zn.setFromBufferAttribute(s),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){let n=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Ca.setFromBufferAttribute(o),this.morphTargetsRelative?(Mn.addVectors(Zn.min,Ca.min),Zn.expandByPoint(Mn),Mn.addVectors(Zn.max,Ca.max),Zn.expandByPoint(Mn)):(Zn.expandByPoint(Ca.min),Zn.expandByPoint(Ca.max))}Zn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Mn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Mn));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let u=0,l=o.count;u<l;u++)Mn.fromBufferAttribute(o,u),c&&(Cs.fromBufferAttribute(e,u),Mn.add(Cs)),r=Math.max(r,n.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new $t(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let S=0;S<n.count;S++)o[S]=new $,c[S]=new $;let u=new $,l=new $,h=new $,f=new Je,p=new Je,g=new Je,y=new $,v=new $;function m(S,_,b){u.fromBufferAttribute(n,S),l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,b),f.fromBufferAttribute(s,S),p.fromBufferAttribute(s,_),g.fromBufferAttribute(s,b),l.sub(u),h.sub(u),p.sub(f),g.sub(f);let A=1/(p.x*g.y-g.x*p.y);isFinite(A)&&(y.copy(l).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(A),v.copy(h).multiplyScalar(p.x).addScaledVector(l,-g.x).multiplyScalar(A),o[S].add(y),o[_].add(y),o[b].add(y),c[S].add(v),c[_].add(v),c[b].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let S=0,_=x.length;S<_;++S){let b=x[S],A=b.start,M=b.count;for(let P=A,U=A+M;P<U;P+=3)m(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let R=new $,E=new $,C=new $,L=new $;function N(S){C.fromBufferAttribute(r,S),L.copy(C);let _=o[S];R.copy(_),R.sub(C.multiplyScalar(C.dot(_))).normalize(),E.crossVectors(L,_);let A=E.dot(c[S])<0?-1:1;a.setXYZW(S,R.x,R.y,R.z,A)}for(let S=0,_=x.length;S<_;++S){let b=x[S],A=b.start,M=b.count;for(let P=A,U=A+M;P<U;P+=3)N(e.getX(P+0)),N(e.getX(P+1)),N(e.getX(P+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let r=new $,s=new $,a=new $,o=new $,c=new $,u=new $,l=new $,h=new $;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),y=e.getX(f+1),v=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,v),l.subVectors(a,s),h.subVectors(r,s),l.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,v),o.add(l),c.add(l),u.add(l),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(v,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),l.subVectors(a,s),h.subVectors(r,s),l.cross(h),n.setXYZ(f+0,l.x,l.y,l.z),n.setXYZ(f+1,l.x,l.y,l.z),n.setXYZ(f+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mn.fromBufferAttribute(e,t),Mn.normalize(),e.setXYZ(t,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(o,c){let u=o.array,l=o.itemSize,h=o.normalized,f=new u.constructor(c.length*l),p=0,g=0;for(let y=0,v=c.length;y<v;y++){o.isInterleavedBufferAttribute?p=c[y]*o.data.stride+o.offset:p=c[y]*l;for(let m=0;m<l;m++)f[g++]=u[p++]}return new $t(f,l,h)}if(this.index===null)return Ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let c=r[o],u=e(c,n);t.setAttribute(o,u)}let s=this.morphAttributes;for(let o in s){let c=[],u=s[o];for(let l=0,h=u.length;l<h;l++){let f=u[l],p=e(f,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let u=n[c];e.data.attributes[c]=u.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let u=this.morphAttributes[c],l=[];for(let h=0,f=u.length;h<f;h++){let p=u[h];l.push(p.toJSON(e.data))}l.length>0&&(r[c]=l,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let u in r){let l=r[u];this.setAttribute(u,l.clone(t))}let s=e.morphAttributes;for(let u in s){let l=[],h=s[u];for(let f=0,p=h.length;f<p;f++)l.push(h[f].clone(t));this.morphAttributes[u]=l}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let u=0,l=a.length;u<l;u++){let h=a[u];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=xh,this.updateRanges=[],this.version=0,this.uuid=Si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},On=new $,Vs=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)On.fromBufferAttribute(this,t),On.applyMatrix4(e),this.setXYZ(t,On.x,On.y,On.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)On.fromBufferAttribute(this,t),On.applyNormalMatrix(e),this.setXYZ(t,On.x,On.y,On.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)On.fromBufferAttribute(this,t),On.transformDirection(e),this.setXYZ(t,On.x,On.y,On.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),r=Nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),r=Nt(r,this.array),s=Nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Ha("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new $t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ha("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Vu=new $,q0=new $,X0=new at,xi=class{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Vu.subVectors(n,t).cross(q0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Vu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||X0.getNormalMatrix(e),r=this.coplanarPoint(Vu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Y0=0,Bn=class extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=na,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ch,this.blendDst=uh,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gl,this.stencilZFail=gl,this.stencilZPass=gl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ze(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new xi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Je().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Je().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Qi=new $,Wu=new $,jo=new $,$o=new $,$r=class{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qi.copy(this.origin).addScaledVector(this.direction,t),Qi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Wu.copy(e).add(t).multiplyScalar(.5),jo.copy(t).sub(e).normalize(),$o.copy(this.origin).sub(Wu);let s=e.distanceTo(t)*.5,a=-this.direction.dot(jo),o=$o.dot(this.direction),c=-$o.dot(jo),u=$o.lengthSq(),l=Math.abs(1-a*a),h,f,p,g;if(l>0)if(h=a*c-o,f=a*o-c,g=s*l,h>=0)if(f>=-g)if(f<=g){let y=1/l;h*=y,f*=y,p=h*(h+a*f+2*o)+f*(a*h+f+2*c)+u}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+u;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+u;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+u):f<=g?(h=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+u):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+u);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Wu).addScaledVector(jo,f),p}intersectSphere(e,t){if(e.radius<0)return null;Qi.subVectors(e.center,this.origin);let n=Qi.dot(this.direction),r=Qi.dot(Qi)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c,u=1/this.direction.x,l=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),l>=0?(s=(e.min.y-f.y)*l,a=(e.max.y-f.y)*l):(s=(e.max.y-f.y)*l,a=(e.min.y-f.y)*l),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Qi)!==null}intersectTriangle(e,t,n,r,s){let a=this.origin,o=this.direction,c=o.x,u=o.y,l=o.z,h=e.x-a.x,f=e.y-a.y,p=e.z-a.z,g=t.x-a.x,y=t.y-a.y,v=t.z-a.z,m=n.x-a.x,x=n.y-a.y,R=n.z-a.z,E=Math.abs(c),C=Math.abs(u),L=Math.abs(l),N,S,_,b,A,M,P,U,B,K,J,ne;if(E>=C&&E>=L?(_=c,M=h,B=g,ne=m,c>=0?(N=u,S=l,b=f,A=p,P=y,U=v,K=x,J=R):(N=l,S=u,b=p,A=f,P=v,U=y,K=R,J=x)):C>=L?(_=u,M=f,B=y,ne=x,u>=0?(N=l,S=c,b=p,A=h,P=v,U=g,K=R,J=m):(N=c,S=l,b=h,A=p,P=g,U=v,K=m,J=R)):(_=l,M=p,B=v,ne=R,l>=0?(N=c,S=u,b=h,A=f,P=g,U=y,K=m,J=x):(N=u,S=c,b=f,A=h,P=y,U=g,K=x,J=m)),_===0)return null;let se=N/_,ie=S/_,ae=1/_,Re=b-se*M,Ue=A-ie*M,$e=P-se*B,me=U-ie*B,le=K-se*ne,G=J-ie*ne,j=le*me-G*$e,de=Re*G-Ue*le,ge=$e*Ue-me*Re;if(r){if(j<0||de<0||ge<0)return null}else if((j<0||de<0||ge<0)&&(j>0||de>0||ge>0))return null;let Me=j+de+ge;if(Me===0)return null;let Ge=ae*(j*M+de*B+ge*ne);return(Me>0?Ge<0:Ge>0)?null:this.at(Ge/Me,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ln=class extends Bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.combine=Wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},_d=new lt,Wr=new $r,Qo=new kn,xd=new $,el=new $,tl=new $,nl=new $,qu=new $,il=new $,yd=new $,rl=new $,Be=class extends Xt{constructor(e=new Yt,t=new Ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){il.set(0,0,0);for(let c=0,u=s.length;c<u;c++){let l=o[c],h=s[c];l!==0&&(qu.fromBufferAttribute(h,e),a?il.addScaledVector(qu,l):il.addScaledVector(qu.sub(t),l))}t.add(il)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qo.copy(n.boundingSphere),Qo.applyMatrix4(s),Wr.copy(e.ray).recast(e.near),!(Qo.containsPoint(Wr.origin)===!1&&(Wr.intersectSphere(Qo,xd)===null||Wr.origin.distanceToSquared(xd)>(e.far-e.near)**2))&&(_d.copy(s).invert(),Wr.copy(e.ray).applyMatrix4(_d),!(n.boundingBox!==null&&Wr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Wr)))}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,l=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){let v=f[g],m=a[v.materialIndex],x=Math.max(v.start,p.start),R=Math.min(o.count,Math.min(v.start+v.count,p.start+p.count));for(let E=x,C=R;E<C;E+=3){let L=o.getX(E),N=o.getX(E+1),S=o.getX(E+2);r=sl(this,m,e,n,u,l,h,L,N,S),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let v=g,m=y;v<m;v+=3){let x=o.getX(v),R=o.getX(v+1),E=o.getX(v+2);r=sl(this,a,e,n,u,l,h,x,R,E),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){let v=f[g],m=a[v.materialIndex],x=Math.max(v.start,p.start),R=Math.min(c.count,Math.min(v.start+v.count,p.start+p.count));for(let E=x,C=R;E<C;E+=3){let L=E,N=E+1,S=E+2;r=sl(this,m,e,n,u,l,h,L,N,S),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let v=g,m=y;v<m;v+=3){let x=v,R=v+1,E=v+2;r=sl(this,a,e,n,u,l,h,x,R,E),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}};function K0(i,e,t,n,r,s,a,o){let c;if(e.side===Tn?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===zi,o),c===null)return null;rl.copy(o),rl.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(rl);return u<t.near||u>t.far?null:{distance:u,point:rl.clone(),object:i}}function sl(i,e,t,n,r,s,a,o,c,u){i.getVertexPosition(o,el),i.getVertexPosition(c,tl),i.getVertexPosition(u,nl);let l=K0(i,e,t,n,el,tl,nl,yd);if(l){let h=new $;Tr.getBarycoord(yd,el,tl,nl,h),r&&(l.uv=Tr.getInterpolatedAttribute(r,o,c,u,h,new Je)),s&&(l.uv1=Tr.getInterpolatedAttribute(s,o,c,u,h,new Je)),a&&(l.normal=Tr.getInterpolatedAttribute(a,o,c,u,h,new $),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));let f={a:o,b:c,c:u,normal:new $,materialIndex:0};Tr.getNormal(el,tl,nl,f.normal),l.face=f,l.barycoord=h}return l}var Ia=new Dt,Md=new Dt,Sd=new Dt,Z0=new Dt,bd=new lt,al=new $,Xu=new kn,Td=new lt,Yu=new $r,Wa=class extends Be{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ju,this.bindMatrix=new lt,this.bindMatrixInverse=new lt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Hn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,al),this.boundingBox.expandByPoint(al)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new kn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,al),this.boundingSphere.expandByPoint(al)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xu.copy(this.boundingSphere),Xu.applyMatrix4(r),e.ray.intersectsSphere(Xu)!==!1&&(Td.copy(r).invert(),Yu.copy(e.ray).applyMatrix4(Td),!(this.boundingBox!==null&&Yu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Yu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Dt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ju?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===hp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ze("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;Md.fromBufferAttribute(r.attributes.skinIndex,e),Sd.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(Ia.copy(t),t.set(0,0,0,0)):(Ia.set(...t,1),t.set(0,0,0)),Ia.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let a=Sd.getComponent(s);if(a!==0){let o=Md.getComponent(s);bd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Z0.copy(Ia).applyMatrix4(bd),a)}}return t.isVector4&&(t.w=Ia.w),t.applyMatrix4(this.bindMatrixInverse)}},Ws=class extends Xt{constructor(){super(),this.isBone=!0,this.type="Bone"}},nr=class extends _n{constructor(e=null,t=1,n=1,r,s,a,o,c,u=qt,l=qt,h,f){super(null,a,o,c,u,l,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ed=new lt,J0=new lt,qa=class i{constructor(e=[],t=[]){this.uuid=Si(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ze("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new lt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new lt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:J0;Ed.multiplyMatrices(o,t[s]),Ed.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new nr(t,e,e,$n,jn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let s=e.bones[n],a=t[s];a===void 0&&(Ze("Skeleton: No bone found with UUID:",s),a=new Ws),this.bones.push(a),this.boneInverses.push(new lt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let a=t[r];e.bones.push(a.uuid);let o=n[r];e.boneInverses.push(o.toArray())}return e}},ir=class extends $t{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Is=new lt,wd=new lt,ol=[],Ad=new Hn,j0=new lt,Pa=new Be,La=new kn,Qr=class extends Be{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ir(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,j0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Hn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Is),Ad.copy(e.boundingBox).applyMatrix4(Is),this.boundingBox.union(Ad)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new kn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Is),La.copy(e.boundingSphere).applyMatrix4(Is),this.boundingSphere.union(La)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Pa.geometry=this.geometry,Pa.material=this.material,Pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),La.copy(this.boundingSphere),La.applyMatrix4(n),e.ray.intersectsSphere(La)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Is),wd.multiplyMatrices(n,Is),Pa.matrixWorld=wd,Pa.raycast(e,ol);for(let a=0,o=ol.length;a<o;a++){let c=ol[a];c.instanceId=s,c.object=this,t.push(c)}ol.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ir(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new nr(new Float32Array(r*this.count),r,this.count,jl,jn));let s=this.morphTexture.source.data.data,a=0;for(let u=0;u<n.length;u++)a+=n[u];let o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;return s[c]=o,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},qr=new kn,$0=new Je(.5,.5),ll=new $,qs=class{constructor(e=new xi,t=new xi,n=new xi,r=new xi,s=new xi,a=new xi){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Mi,n=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],u=s[3],l=s[4],h=s[5],f=s[6],p=s[7],g=s[8],y=s[9],v=s[10],m=s[11],x=s[12],R=s[13],E=s[14],C=s[15];if(r[0].setComponents(u-a,p-l,m-g,C-x).normalize(),r[1].setComponents(u+a,p+l,m+g,C+x).normalize(),r[2].setComponents(u+o,p+h,m+y,C+R).normalize(),r[3].setComponents(u-o,p-h,m-y,C-R).normalize(),n)r[4].setComponents(c,f,v,E).normalize(),r[5].setComponents(u-c,p-f,m-v,C-E).normalize();else if(r[4].setComponents(u-c,p-f,m-v,C-E).normalize(),t===Mi)r[5].setComponents(u+c,p+f,m+v,C+E).normalize();else if(t===Fs)r[5].setComponents(c,f,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){qr.center.set(0,0,0);let t=$0.distanceTo(e.center);return qr.radius=.7071067811865476+t,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(ll.x=r.normal.x>0?e.max.x:e.min.x,ll.y=r.normal.y>0?e.max.y:e.min.y,ll.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ll)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Xs=class extends Bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Rl=new $,Cl=new $,Rd=new lt,Na=new $r,cl=new kn,Ku=new $,Cd=new $,es=class extends Xt{constructor(e=new Yt,t=new Xs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Rl.fromBufferAttribute(t,r-1),Cl.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Rl.distanceTo(Cl);e.setAttribute("lineDistance",new St(n,1))}else Ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cl.copy(n.boundingSphere),cl.applyMatrix4(r),cl.radius+=s,e.ray.intersectsSphere(cl)===!1)return;Rd.copy(r).invert(),Na.copy(e.ray).applyMatrix4(Rd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=this.isLineSegments?2:1,l=n.index,f=n.attributes.position;if(l!==null){let p=Math.max(0,a.start),g=Math.min(l.count,a.start+a.count);for(let y=p,v=g-1;y<v;y+=u){let m=l.getX(y),x=l.getX(y+1),R=ul(this,e,Na,c,m,x,y);R&&t.push(R)}if(this.isLineLoop){let y=l.getX(g-1),v=l.getX(p),m=ul(this,e,Na,c,y,v,g-1);m&&t.push(m)}}else{let p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let y=p,v=g-1;y<v;y+=u){let m=ul(this,e,Na,c,y,y+1,y);m&&t.push(m)}if(this.isLineLoop){let y=ul(this,e,Na,c,g-1,p,g-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function ul(i,e,t,n,r,s,a){let o=i.geometry.attributes.position;if(Rl.fromBufferAttribute(o,r),Cl.fromBufferAttribute(o,s),t.distanceSqToSegment(Rl,Cl,Ku,Cd)>n)return;Ku.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(Ku);if(!(u<e.near||u>e.far))return{distance:u,point:Cd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Id=new $,Pd=new $,Xa=class extends es{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Id.fromBufferAttribute(t,r),Pd.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Id.distanceTo(Pd);e.setAttribute("lineDistance",new St(n,1))}else Ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ya=class extends es{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ys=class extends Bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ld=new lt,Qu=new $r,hl=new kn,fl=new $,ts=class extends Xt{constructor(e=new Yt,t=new Ys){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hl.copy(n.boundingSphere),hl.applyMatrix4(r),hl.radius+=s,e.ray.intersectsSphere(hl)===!1)return;Ld.copy(r).invert(),Qu.copy(e.ray).applyMatrix4(Ld);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=f,y=p;g<y;g++){let v=u.getX(g);fl.fromBufferAttribute(h,v),Nd(fl,v,c,r,e,t,this)}}else{let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=f,y=p;g<y;g++)fl.fromBufferAttribute(h,g),Nd(fl,g,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Nd(i,e,t,n,r,s,a){let o=Qu.distanceSqToPoint(i);if(o<t){let c=new $;Qu.closestPointToPoint(i,c),c.applyMatrix4(n);let u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ka=class extends _n{constructor(e=[],t=Pr,n,r,s,a,o,c,u,l){super(e,t,n,r,s,a,o,c,u,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ks=class extends _n{constructor(e,t,n,r,s,a,o,c,u){super(e,t,n,r,s,a,o,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};var wr=class extends _n{constructor(e,t,n=wi,r,s,a,o=qt,c=qt,u,l=Oi,h=1){if(l!==Oi&&l!==Lr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,r,s,a,o,c,l,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ks(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Il=class extends wr{constructor(e,t=wi,n=Pr,r,s,a=qt,o=qt,c,u=Oi){let l={width:e,height:e,depth:1},h=[l,l,l,l,l,l];super(e,e,t,n,r,s,a,o,c,u),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Za=class extends _n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},mn=class i extends Yt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],u=[],l=[],h=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new St(u,3)),this.setAttribute("normal",new St(l,3)),this.setAttribute("uv",new St(h,2));function g(y,v,m,x,R,E,C,L,N,S,_){let b=E/N,A=C/S,M=E/2,P=C/2,U=L/2,B=N+1,K=S+1,J=0,ne=0,se=new $;for(let ie=0;ie<K;ie++){let ae=ie*A-P;for(let Re=0;Re<B;Re++){let Ue=Re*b-M;se[y]=Ue*x,se[v]=ae*R,se[m]=U,u.push(se.x,se.y,se.z),se[y]=0,se[v]=0,se[m]=L>0?1:-1,l.push(se.x,se.y,se.z),h.push(Re/N),h.push(1-ie/S),J+=1}}for(let ie=0;ie<S;ie++)for(let ae=0;ae<N;ae++){let Re=f+ae+B*ie,Ue=f+ae+B*(ie+1),$e=f+(ae+1)+B*(ie+1),me=f+(ae+1)+B*ie;c.push(Re,Ue,me),c.push(Ue,$e,me),ne+=6}o.addGroup(p,ne,_),p+=ne,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Ja=class i extends Yt{constructor(e=1,t=1,n=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let a=[],o=[],c=[],u=[],l=t/2,h=Math.PI/2*e,f=t,p=2*h+f,g=n*2+s,y=r+1,v=new $,m=new $;for(let x=0;x<=g;x++){let R=0,E=0,C=0,L=0;if(x<=n){let _=x/n,b=_*Math.PI/2;E=-l-e*Math.cos(b),C=e*Math.sin(b),L=-e*Math.cos(b),R=_*h}else if(x<=n+s){let _=(x-n)/s;E=-l+_*t,C=e,L=0,R=h+_*f}else{let _=(x-n-s)/n,b=_*Math.PI/2;E=l+e*Math.sin(b),C=e*Math.cos(b),L=e*Math.sin(b),R=h+f+_*h}let N=Math.max(0,Math.min(1,R/p)),S=0;x===0?S=.5/r:x===g&&(S=-.5/r);for(let _=0;_<=r;_++){let b=_/r,A=b*Math.PI*2,M=Math.sin(A),P=Math.cos(A);m.x=-C*P,m.y=E,m.z=C*M,o.push(m.x,m.y,m.z),v.set(-C*P,L,C*M),v.normalize(),c.push(v.x,v.y,v.z),u.push(b+S,N)}if(x>0){let _=(x-1)*y;for(let b=0;b<r;b++){let A=_+b,M=_+b+1,P=x*y+b,U=x*y+b+1;a.push(A,M,P),a.push(M,U,P)}}}this.setIndex(a),this.setAttribute("position",new St(o,3)),this.setAttribute("normal",new St(c,3)),this.setAttribute("uv",new St(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var Zs=class i extends Yt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let u=this;r=Math.floor(r),s=Math.floor(s);let l=[],h=[],f=[],p=[],g=0,y=[],v=n/2,m=0;x(),a===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(l),this.setAttribute("position",new St(h,3)),this.setAttribute("normal",new St(f,3)),this.setAttribute("uv",new St(p,2));function x(){let E=new $,C=new $,L=0,N=(t-e)/n;for(let S=0;S<=s;S++){let _=[],b=S/s,A=b*(t-e)+e;for(let M=0;M<=r;M++){let P=M/r,U=P*c+o,B=Math.sin(U),K=Math.cos(U);C.x=A*B,C.y=-b*n+v,C.z=A*K,h.push(C.x,C.y,C.z),E.set(B,N,K).normalize(),f.push(E.x,E.y,E.z),p.push(P,1-b),_.push(g++)}y.push(_)}for(let S=0;S<r;S++)for(let _=0;_<s;_++){let b=y[_][S],A=y[_+1][S],M=y[_+1][S+1],P=y[_][S+1];(e>0||_!==0)&&(l.push(b,A,P),L+=3),(t>0||_!==s-1)&&(l.push(A,M,P),L+=3)}u.addGroup(m,L,0),m+=L}function R(E){let C=g,L=new Je,N=new $,S=0,_=E===!0?e:t,b=E===!0?1:-1;for(let M=1;M<=r;M++)h.push(0,v*b,0),f.push(0,b,0),p.push(.5,.5),g++;let A=g;for(let M=0;M<=r;M++){let U=M/r*c+o,B=Math.cos(U),K=Math.sin(U);N.x=_*K,N.y=v*b,N.z=_*B,h.push(N.x,N.y,N.z),f.push(0,b,0),L.x=B*.5+.5,L.y=K*.5*b+.5,p.push(L.x,L.y),g++}for(let M=0;M<r;M++){let P=C+M,U=A+M;E===!0?l.push(U,U+1,P):l.push(U+1,U,P),S+=3}u.addGroup(m,S,E===!0?1:2),m+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ja=class i extends Zs{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ns=class i extends Yt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),u=o+1,l=c+1,h=e/o,f=t/c,p=[],g=[],y=[],v=[];for(let m=0;m<l;m++){let x=m*f-a;for(let R=0;R<u;R++){let E=R*h-s;g.push(E,-x,0),y.push(0,0,1),v.push(R/o),v.push(1-m/c)}}for(let m=0;m<c;m++)for(let x=0;x<o;x++){let R=x+u*m,E=x+u*(m+1),C=x+1+u*(m+1),L=x+1+u*m;p.push(R,E,L),p.push(E,C,L)}this.setIndex(p),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(y,3)),this.setAttribute("uv",new St(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ar=class i extends Yt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),u=0,l=[],h=new $,f=new $,p=[],g=[],y=[],v=[];for(let m=0;m<=n;m++){let x=[],R=m/n,E=a+R*o,C=e*Math.cos(E),L=Math.sqrt(e*e-C*C),N=0;m===0&&a===0?N=.5/t:m===n&&c===Math.PI&&(N=-.5/t);for(let S=0;S<=t;S++){let _=S/t,b=r+_*s;h.x=-L*Math.cos(b),h.y=C,h.z=L*Math.sin(b),g.push(h.x,h.y,h.z),f.copy(h).normalize(),y.push(f.x,f.y,f.z),v.push(_+N,1-R),x.push(u++)}l.push(x)}for(let m=0;m<n;m++)for(let x=0;x<t;x++){let R=l[m][x+1],E=l[m][x],C=l[m+1][x],L=l[m+1][x+1];(m!==0||a>0)&&p.push(R,E,L),(m!==n-1||c<Math.PI)&&p.push(E,C,L)}this.setIndex(p),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(y,3)),this.setAttribute("uv",new St(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Rr=class i extends Yt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let c=[],u=[],l=[],h=[],f=new $,p=new $,g=new $;for(let y=0;y<=n;y++){let v=a+y/n*o;for(let m=0;m<=r;m++){let x=m/r*s;p.x=(e+t*Math.cos(v))*Math.cos(x),p.y=(e+t*Math.cos(v))*Math.sin(x),p.z=t*Math.sin(v),u.push(p.x,p.y,p.z),f.x=e*Math.cos(x),f.y=e*Math.sin(x),g.subVectors(p,f).normalize(),l.push(g.x,g.y,g.z),h.push(m/r),h.push(y/n)}}for(let y=1;y<=n;y++)for(let v=1;v<=r;v++){let m=(r+1)*y+v-1,x=(r+1)*(y-1)+v-1,R=(r+1)*(y-1)+v,E=(r+1)*y+v;c.push(m,x,E),c.push(x,R,E)}this.setIndex(c),this.setAttribute("position",new St(u,3)),this.setAttribute("normal",new St(l,3)),this.setAttribute("uv",new St(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function us(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(Dd(r))r.isRenderTargetTexture?(Ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Dd(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Nn(i){let e={};for(let t=0;t<i.length;t++){let n=us(i[t]);for(let r in n)e[r]=n[r]}return e}function Dd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Q0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function bh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}var ur={clone:us,merge:Nn},eg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,tn=class extends Bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eg,this.fragmentShader=tg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=us(e.uniforms),this.uniformsGroups=Q0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new ze().setHex(r.value);break;case"v2":this.uniforms[n].value=new Je().fromArray(r.value);break;case"v3":this.uniforms[n].value=new $().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Dt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new at().fromArray(r.value);break;case"m4":this.uniforms[n].value=new lt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Js=class extends tn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},sn=class extends Bn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=So,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},zn=class extends sn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var $a=class extends Bn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=So,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.combine=Wl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Pl=class extends Bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ll=class extends Bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function br(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function vl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function ng(i){function e(r,s){return i[r]-i[s]}let t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Ud(i,e,t){let n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let c=0;c!==e;++c)r[a++]=i[o+c]}return r}function ig(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}var Hi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break t}a=t.length;break n}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Nl=class extends Hi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xr,endingEnd:Xr}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Yr:s=e,o=2*t-n;break;case Oa:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Yr:a=e,c=2*n-t;break;case Oa:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}let u=(n-t)*.5,l=this.valueSize;this._weightPrev=u/(t-o),this._weightNext=u/(c-n),this._offsetPrev=s*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,l=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(r-t),y=g*g,v=y*g,m=-f*v+2*f*y-f*g,x=(1+f)*v+(-1.5-2*f)*y+(-.5+f)*g+1,R=(-1-p)*v+(1.5+p)*y+.5*g,E=p*v-p*y;for(let C=0;C!==o;++C)s[C]=m*a[l+C]+x*a[u+C]+R*a[c+C]+E*a[h+C];return s}},Qa=class extends Hi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,l=(n-t)/(r-t),h=1-l;for(let f=0;f!==o;++f)s[f]=a[u+f]*h+a[c+f]*l;return s}},Dl=class extends Hi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ul=class extends Hi{interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,l=this.inTangents,h=this.outTangents;if(!l||!h){let g=(n-t)/(r-t),y=1-g;for(let v=0;v!==o;++v)s[v]=a[u+v]*y+a[c+v]*g;return s}let f=o*2,p=e-1;for(let g=0;g!==o;++g){let y=a[u+g],v=a[c+g],m=p*f+g*2,x=h[m],R=h[m+1],E=e*f+g*2,C=l[E],L=l[E+1],N=sg(n,t,x,C,r);s[g]=Rp(N,y,R,L,v)}return s}};function Rp(i,e,t,n,r){let s=1-i;return s*s*s*e+3*s*s*i*t+3*s*i*i*n+i*i*i*r}function rg(i,e,t,n,r){let s=1-i;return 3*s*s*(t-e)+6*s*i*(n-t)+3*i*i*(r-n)}function sg(i,e,t,n,r){let s=(i-e)/(r-e);for(let a=0;a<8;a++){let o=Rp(s,e,t,n,r)-i;if(Math.abs(o)<1e-10)break;let c=rg(s,e,t,n,r);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}var Gn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=br(t,this.TimeBufferType),this.values=br(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:br(e.times,Array),values:br(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),vl(e.settings)&&(n.settings={inTangents:br(e.settings.inTangents,Array),outTangents:br(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Dl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Qa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ul(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Zr:t=this.InterpolantFactoryMethodDiscrete;break;case Jr:t=this.InterpolantFactoryMethodLinear;break;case ml:t=this.InterpolantFactoryMethodSmooth;break;case $u:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ze("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zr;case this.InterpolantFactoryMethodLinear:return Jr;case this.InterpolantFactoryMethodSmooth:return ml;case this.InterpolantFactoryMethodBezier:return $u}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;vl(this.settings)&&(Od(this.settings.inTangents,e),Od(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(et("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(et("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){et("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){et("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&m0(r))for(let o=0,c=r.length;o!==c;++o){let u=r[o];if(isNaN(u)){et("KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ml,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,u=e[o],l=e[o+1];if(u!==l&&(o!==1||u!==e[0]))if(r)c=!0;else{let h=o*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){let y=t[h+g];if(y!==t[f+g]||y!==t[p+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,u=0;u!==n;++u)t[c+u]=t[o+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,vl(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Od(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Gn.prototype.ValueTypeName="";Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=Jr;var rr=class extends Gn{constructor(e,t,n){super(e,t,n)}};rr.prototype.ValueTypeName="bool";rr.prototype.ValueBufferType=Array;rr.prototype.DefaultInterpolation=Zr;rr.prototype.InterpolantFactoryMethodLinear=void 0;rr.prototype.InterpolantFactoryMethodSmooth=void 0;var eo=class extends Gn{constructor(e,t,n,r){super(e,t,n,r)}};eo.prototype.ValueTypeName="color";var sr=class extends Gn{constructor(e,t,n,r){super(e,t,n,r)}};sr.prototype.ValueTypeName="number";var Ol=class extends Hi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t),u=e*o;for(let l=u+o;u!==l;u+=4)Pn.slerpFlat(s,0,a,u-o,a,u,c);return s}},ar=class extends Gn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ol(this.times,this.values,this.getValueSize(),e)}};ar.prototype.ValueTypeName="quaternion";ar.prototype.InterpolantFactoryMethodSmooth=void 0;var or=class extends Gn{constructor(e,t,n){super(e,t,n)}};or.prototype.ValueTypeName="string";or.prototype.ValueBufferType=Array;or.prototype.DefaultInterpolation=Zr;or.prototype.InterpolantFactoryMethodLinear=void 0;or.prototype.InterpolantFactoryMethodSmooth=void 0;var Cr=class extends Gn{constructor(e,t,n,r){super(e,t,n,r)}};Cr.prototype.ValueTypeName="vector";var is=class{constructor(e="",t=-1,n=[],r=Nc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Si(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(og(n[a]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(Gn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let s=t.length,a=[];for(let o=0;o<s;o++){let c=[],u=[];c.push((o+s-1)%s,o,(o+1)%s),u.push(0,1,0);let l=ng(c);c=Ud(c,1,l),u=Ud(u,1,l),!r&&c[0]===0&&(c.push(s),u.push(u[0])),a.push(new sr(".morphTargetInfluences["+t[o].name+"]",c,u).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let u=e[o],l=u.name.match(s);if(l&&l.length>1){let h=l[1],f=r[h];f||(r[h]=f=[]),f.push(u)}}let a=[];for(let o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function ag(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return sr;case"vector":case"vector2":case"vector3":case"vector4":return Cr;case"color":return eo;case"quaternion":return ar;case"bool":case"boolean":return rr;case"string":return or}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function og(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=ag(i.type);if(i.times===void 0){let n=[],r=[];ig(i.keys,n,r,"value"),i.times=n,i.values=r}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),vl(i.settings)&&(t.settings={inTangents:br(i.settings.inTangents,Float32Array),outTangents:br(i.settings.outTangents,Float32Array)}),t}var Ui={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Fd(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Fd(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Fd(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Fl=class{constructor(e,t,n){let r=this,s=!1,a=0,o=0,c,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(l){o++,s===!1&&r.onStart!==void 0&&r.onStart(l,a,o),s=!0},this.itemEnd=function(l){a++,r.onProgress!==void 0&&r.onProgress(l,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(l){r.onError!==void 0&&r.onError(l)},this.resolveURL=function(l){return l=l.normalize("NFC"),c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,h){return u.push(l,h),this},this.removeHandler=function(l){let h=u.indexOf(l);return h!==-1&&u.splice(h,2),this},this.getHandler=function(l){for(let h=0,f=u.length;h<f;h+=2){let p=u[h],g=u[h+1];if(p.global&&(p.lastIndex=0),p.test(l))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Cp=new Fl,Bi=class{constructor(e){this.manager=e!==void 0?e:Cp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Bi.DEFAULT_MATERIAL_NAME="__DEFAULT";var er={},eh=class extends Error{constructor(e,t){super(e),this.response=t}},js=class extends Bi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Ui.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(er[e]!==void 0){er[e].push({onLoad:t,onProgress:n,onError:r});return}er[e]=[],er[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&Ze("FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||u.body===void 0||u.body.getReader===void 0)return u;let l=er[e],h=u.body.getReader(),f=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0,y=0,v=new ReadableStream({start(m){x();function x(){h.read().then(({done:R,value:E})=>{if(R)m.close();else{y+=E.byteLength;let C=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:p});for(let L=0,N=l.length;L<N;L++){let S=l[L];S.onProgress&&S.onProgress(C)}m.enqueue(E),x()}},R=>{m.error(R)})}}});return new Response(v)}else throw new eh(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(c){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(l=>new DOMParser().parseFromString(l,o));case"json":return u.json();default:if(o==="")return u.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return u.arrayBuffer().then(g=>p.decode(g))}}}).then(u=>{Ui.add(`file:${e}`,u);let l=er[e];delete er[e];for(let h=0,f=l.length;h<f;h++){let p=l[h];p.onLoad&&p.onLoad(u)}}).catch(u=>{let l=er[e];if(l===void 0)throw this.manager.itemError(e),u;delete er[e];for(let h=0,f=l.length;h<f;h++){let p=l[h];p.onError&&p.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ps=new WeakMap,Hl=class extends Bi{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Ui.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=Ps.get(a);h===void 0&&(h=[],Ps.set(a,h)),h.push({onLoad:t,onError:r})}return a}let o=Hs("img");function c(){l(),t&&t(this);let h=Ps.get(this)||[];for(let f=0;f<h.length;f++){let p=h[f];p.onLoad&&p.onLoad(this)}Ps.delete(this),s.manager.itemEnd(e)}function u(h){l(),r&&r(h),Ui.remove(`image:${e}`);let f=Ps.get(this)||[];for(let p=0;p<f.length;p++){let g=f[p];g.onError&&g.onError(h)}Ps.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function l(){o.removeEventListener("load",c,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ui.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var rs=class extends Bi{constructor(e){super(e)}load(e,t,n,r){let s=new _n,a=new Hl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},Ir=class extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},$s=class extends Ir{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Zu=new lt,Hd=new $,Bd=new $,Qs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.mapType=Wn,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qs,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Hd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hd),Bd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Zu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Zu,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,u=r?r.y/s.y:0;e.coordinateSystem===Fs||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,.5,.5,0,0,0,1),t.multiply(Zu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},dl=new $,pl=new Pn,Di=new $,to=class extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(dl,pl,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dl,pl,Di.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(dl,pl,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dl,pl,Di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Sr=new $,kd=new Je,zd=new Je,ln=class extends to{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=jr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Da*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jr*2*Math.atan(Math.tan(Da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z),Sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z)}getViewSize(e,t){return this.getViewBounds(e,kd,zd),t.subVectors(zd,kd)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Da*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/u,r*=a.width/c,n*=a.height/u}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},th=class extends Qs{constructor(){super(new ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=jr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},no=class extends Ir{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new th}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},nh=class extends Qs{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0}},Jn=class extends Ir{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new nh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ki=class extends to{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=l*this.view.offsetY,c=o-l*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ih=class extends Qs{constructor(){super(new ki(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ss=class extends Ir{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new ih}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},ea=class extends Ir{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var lr=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Ju=new WeakMap,io=class extends Bi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&Ze("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&Ze("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Ui.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(u=>{Ju.has(a)===!0?(r&&r(Ju.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(u),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(u){return Ui.add(`image-bitmap:${e}`,u),t&&t(u),s.manager.itemEnd(e),u}).catch(function(u){r&&r(u),Ju.set(c,u),Ui.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Ui.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ls=-90,Ns=1,Bl=class extends Xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ln(Ls,Ns,e,t);r.layers=this.layers,this.add(r);let s=new ln(Ls,Ns,e,t);s.layers=this.layers,this.add(s);let a=new ln(Ls,Ns,e,t);a.layers=this.layers,this.add(a);let o=new ln(Ls,Ns,e,t);o.layers=this.layers,this.add(o);let c=new ln(Ls,Ns,e,t);c.layers=this.layers,this.add(c);let u=new ln(Ls,Ns,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(let u of t)this.remove(u);if(e===Mi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,u,l]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(h,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},kl=class extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ro=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=lg.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function lg(){this._document.hidden===!1&&this.reset()}var zl=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,s,a;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:r=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,r=this.valueSize,s=e*r+r,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==r;++o)n[s+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,s,0,o,r)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,r=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let c=t*this._origIndex;this._mixBufferRegion(n,r,c,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let c=t,u=t+t;c!==u;++c)if(n[c]!==n[c+t]){o.setValue(n,r);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let s=n,a=r;s!==a;++s)t[s]=t[r+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,s){if(r>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,r){Pn.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,s){let a=this._workIndex*s;Pn.multiplyQuaternionsFlat(e,a,e,t,e,n),Pn.slerpFlat(e,t,e,t,e,a,r)}_lerp(e,t,n,r,s){let a=1-r;for(let o=0;o!==s;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*r}}_lerpAdditive(e,t,n,r,s){for(let a=0;a!==s;++a){let o=t+a;e[o]=e[o]+e[n+a]*r}}},Th="\\[\\]\\.:\\/",cg=new RegExp("["+Th+"]","g"),Eh="[^"+Th+"]",ug="[^"+Th.replace("\\.","")+"]",hg=/((?:WC+[\/:])*)/.source.replace("WC",Eh),fg=/(WCOD+)?/.source.replace("WCOD",ug),dg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Eh),pg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Eh),mg=new RegExp("^"+hg+fg+dg+pg+"$"),gg=["material","materials","bones","map"],rh=class{constructor(e,t,n){let r=n||Ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ft=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(cg,"")}static parseTrackName(e){let t=mg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);gg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){et("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){et("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let l=0;l<e.length;l++)if(e[l].name===u){u=l;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){et("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){et("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){et("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let a=e[r];if(a===void 0){let u=t.nodeName;et("PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ft.Composite=rh;Ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ft.prototype.GetterByBindingType=[Ft.prototype._getValue_direct,Ft.prototype._getValue_array,Ft.prototype._getValue_arrayElement,Ft.prototype._getValue_toArray];Ft.prototype.SetterByBindingTypeAndVersioning=[[Ft.prototype._setValue_direct,Ft.prototype._setValue_direct_setNeedsUpdate,Ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_array,Ft.prototype._setValue_array_setNeedsUpdate,Ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_arrayElement,Ft.prototype._setValue_arrayElement_setNeedsUpdate,Ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_fromArray,Ft.prototype._setValue_fromArray_setNeedsUpdate,Ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Gl=class{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;let s=t.tracks,a=s.length,o=new Array(a),c={endingStart:Xr,endingEnd:Xr};for(let u=0;u!==a;++u){let l=s[u].createInterpolant(null);o[u]=l,l.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Lc,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let r=this._clip.duration,s=e._clip.duration,a=s/r,o=r/s;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let r=this._mixer,s=r.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,u=o.sampleValues;return c[0]=s,c[1]=s+n,u[0]=e/a,u[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,u=this._propertyBindings;switch(this.blendMode){case dp:for(let l=0,h=c.length;l!==h;++l)c[l].evaluate(a),u[l].accumulateAdditive(o);break;case Nc:default:for(let l=0,h=c.length;l!==h;++l)c[l].evaluate(a),u[l].accumulate(r,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,r=this.time+e,s=this._loopCount,a=n===fp;if(e===0)return s===-1?r:a&&(s&1)===1?t-r:r;if(n===Pc){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),r>=t||r<0){let o=Math.floor(r/t);r-=t*o,s+=Math.abs(o);let c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let u=e<0;this._setEndings(u,!u,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=s,this.time=r;if(a&&(s&1)===1)return t-r}return r}_setEndings(e,t,n){let r=this._interpolantSettings;n?(r.endingStart=Yr,r.endingEnd=Yr):(e?r.endingStart=this.zeroSlopeAtStart?Yr:Xr:r.endingStart=Oa,t?r.endingEnd=this.zeroSlopeAtEnd?Yr:Xr:r.endingEnd=Oa)}_scheduleFading(e,t,n){let r=this._mixer,s=r.time,a=this._weightInterpolant;a===null&&(a=r._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=s,c[0]=t,o[1]=s+e,c[1]=n,this}},vg=new Float32Array(1),so=class extends bi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,r=e._clip.tracks,s=r.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,u=this._bindingsByRootAndName,l=u[c];l===void 0&&(l={},u[c]=l);for(let h=0;h!==s;++h){let f=r[h],p=f.name,g=l[p];if(g!==void 0)++g.referenceCount,a[h]=g;else{if(g=a[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,p));continue}let y=t&&t._propertyBindings[h].binding.parsedPath;g=new zl(Ft.create(n,p,y),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,p),a[h]=g}o[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,n)}let t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){let s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){let s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let r=this._actions,s=this._actionsByClip,a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=r.length,r.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,a=this._actionsByClip,o=a[s],c=o.knownActions,u=c[c.length-1],l=e._byClipCacheIndex;u._byClipCacheIndex=l,c[l]=u,c.pop(),e._byClipCacheIndex=null;let h=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],c.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){let s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){let r=this._bindingsByRootAndName,s=this._bindings,a=r[t];a===void 0&&(a={},r[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,r=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[r],c=t[t.length-1],u=e._cacheIndex;c._cacheIndex=u,t[u]=c,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[r]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Qa(new Float32Array(2),new Float32Array(2),1,vg),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){let r=t||this._root,s=r.uuid,a=typeof e=="string"?is.findByName(r,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],u=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Nc),c!==void 0){let h=c.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;u=c.knownActions[0],a===null&&(a=u._clip)}if(a===null)return null;let l=new Gl(this,a,t,n);return this._bindAction(l,u),this._addInactiveAction(l,o,s),l}existingAction(e,t){let n=t||this._root,r=n.uuid,s=typeof e=="string"?is.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[r]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,r=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let u=0;u!==n;++u)t[u]._update(r,e,s,a);let o=this._bindings,c=this._nActiveBindings;for(let u=0;u!==c;++u)o[u].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,r=this._actionsByClip,s=r[n];if(s!==void 0){let a=s.knownActions;for(let o=0,c=a.length;o!==c;++o){let u=a[o];this._deactivateAction(u);let l=u._cacheIndex,h=t[t.length-1];u._cacheIndex=null,u._byClipCacheIndex=null,h._cacheIndex=l,t[l]=h,t.pop(),this._removeInactiveBindingsForAction(u)}delete r[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(let a in s){let o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Ph=class Ph{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};Ph.prototype.isMatrix2=!0;var sh=Ph;function wh(i,e,t,n){let r=_g(n);switch(t){case gh:return i*e;case jl:return i*e/r.components*r.byteLength;case $l:return i*e/r.components*r.byteLength;case Nr:return i*e*2/r.components*r.byteLength;case Ql:return i*e*2/r.components*r.byteLength;case vh:return i*e*3/r.components*r.byteLength;case $n:return i*e*4/r.components*r.byteLength;case ec:return i*e*4/r.components*r.byteLength;case mo:case go:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case vo:case _o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case nc:case rc:return Math.max(i,16)*Math.max(e,8)/4;case tc:case ic:return Math.max(i,8)*Math.max(e,8)/2;case sc:case ac:case lc:case cc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case oc:case xo:case uc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case dc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case pc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case mc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case gc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case vc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case _c:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case xc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case yc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Sc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case bc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Tc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ec:case wc:case Ac:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Rc:case Cc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case yo:case Ic:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _g(i){switch(i){case Wn:case fh:return{byteLength:1,components:1};case ra:case dh:case En:return{byteLength:2,components:1};case Zl:case Jl:return{byteLength:2,components:4};case wi:case Kl:case jn:return{byteLength:4,components:1};case ph:case mh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?Ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function jp(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function yg(i){let e=new WeakMap;function t(o,c){let u=o.array,l=o.usage,h=u.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,u,l),o.onUploadCallback();let p;if(u instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array!="undefined"&&u instanceof Float16Array)p=i.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=i.SHORT;else if(u instanceof Uint32Array)p=i.UNSIGNED_INT;else if(u instanceof Int32Array)p=i.INT;else if(u instanceof Int8Array)p=i.BYTE;else if(u instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,u){let l=c.array,h=c.updateRanges;if(i.bindBuffer(u,o),h.length===0)i.bufferSubData(u,0,l);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){let g=h[f],y=h[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,h[f]=y)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){let y=h[p];i.bufferSubData(u,y.start*l.BYTES_PER_ELEMENT,l,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let l=e.get(o);(!l||l.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=e.get(o);if(u===void 0)e.set(o,t(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,c),u.version=o.version}}return{get:r,remove:s,update:a}}var Mg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Eg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ag=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Rg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ig=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ng=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Dg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ug=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Og=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Gg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Vg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Wg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Xg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Yg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jg="gl_FragColor = linearToOutputTexel( gl_FragColor );",$g=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ev=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,tv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,av=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ov=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,dv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,pv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_v=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bv=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Tv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ev=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Av=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Iv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Pv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Uv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ov=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Hv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Wv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,jv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$v=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,e_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,t_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,n_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,i_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,r_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,s_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,a_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,o_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,l_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,c_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,u_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,h_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,f_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,d_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,p_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,m_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,g_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,v_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,__=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,x_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,y_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,M_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,S_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,R_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,C_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,I_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,P_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,L_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,D_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,U_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,O_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,k_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,G_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,V_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,X_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,J_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,j_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Q_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ex=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:Mg,alphahash_pars_fragment:Sg,alphamap_fragment:bg,alphamap_pars_fragment:Tg,alphatest_fragment:Eg,alphatest_pars_fragment:wg,aomap_fragment:Ag,aomap_pars_fragment:Rg,batching_pars_vertex:Cg,batching_vertex:Ig,begin_vertex:Pg,beginnormal_vertex:Lg,bsdfs:Ng,iridescence_fragment:Dg,bumpmap_pars_fragment:Ug,clipping_planes_fragment:Og,clipping_planes_pars_fragment:Fg,clipping_planes_pars_vertex:Hg,clipping_planes_vertex:Bg,color_fragment:kg,color_pars_fragment:zg,color_pars_vertex:Gg,color_vertex:Vg,common:Wg,cube_uv_reflection_fragment:qg,defaultnormal_vertex:Xg,displacementmap_pars_vertex:Yg,displacementmap_vertex:Kg,emissivemap_fragment:Zg,emissivemap_pars_fragment:Jg,colorspace_fragment:jg,colorspace_pars_fragment:$g,envmap_fragment:Qg,envmap_common_pars_fragment:ev,envmap_pars_fragment:tv,envmap_pars_vertex:nv,envmap_physical_pars_fragment:dv,envmap_vertex:iv,fog_vertex:rv,fog_pars_vertex:sv,fog_fragment:av,fog_pars_fragment:ov,gradientmap_pars_fragment:lv,lightmap_pars_fragment:cv,lights_lambert_fragment:uv,lights_lambert_pars_fragment:hv,lights_pars_begin:fv,lights_toon_fragment:pv,lights_toon_pars_fragment:mv,lights_phong_fragment:gv,lights_phong_pars_fragment:vv,lights_physical_fragment:_v,lights_physical_pars_fragment:xv,lights_fragment_begin:yv,lights_fragment_maps:Mv,lights_fragment_end:Sv,lightprobes_pars_fragment:bv,logdepthbuf_fragment:Tv,logdepthbuf_pars_fragment:Ev,logdepthbuf_pars_vertex:wv,logdepthbuf_vertex:Av,map_fragment:Rv,map_pars_fragment:Cv,map_particle_fragment:Iv,map_particle_pars_fragment:Pv,metalnessmap_fragment:Lv,metalnessmap_pars_fragment:Nv,morphinstance_vertex:Dv,morphcolor_vertex:Uv,morphnormal_vertex:Ov,morphtarget_pars_vertex:Fv,morphtarget_vertex:Hv,normal_fragment_begin:Bv,normal_fragment_maps:kv,normal_pars_fragment:zv,normal_pars_vertex:Gv,normal_vertex:Vv,normalmap_pars_fragment:Wv,clearcoat_normal_fragment_begin:qv,clearcoat_normal_fragment_maps:Xv,clearcoat_pars_fragment:Yv,iridescence_pars_fragment:Kv,opaque_fragment:Zv,packing:Jv,premultiplied_alpha_fragment:jv,project_vertex:$v,dithering_fragment:Qv,dithering_pars_fragment:e_,roughnessmap_fragment:t_,roughnessmap_pars_fragment:n_,shadowmap_pars_fragment:i_,shadowmap_pars_vertex:r_,shadowmap_vertex:s_,shadowmask_pars_fragment:a_,skinbase_vertex:o_,skinning_pars_vertex:l_,skinning_vertex:c_,skinnormal_vertex:u_,specularmap_fragment:h_,specularmap_pars_fragment:f_,tonemapping_fragment:d_,tonemapping_pars_fragment:p_,transmission_fragment:m_,transmission_pars_fragment:g_,uv_pars_fragment:v_,uv_pars_vertex:__,uv_vertex:x_,worldpos_vertex:y_,background_vert:M_,background_frag:S_,backgroundCube_vert:b_,backgroundCube_frag:T_,cube_vert:E_,cube_frag:w_,depth_vert:A_,depth_frag:R_,distance_vert:C_,distance_frag:I_,equirect_vert:P_,equirect_frag:L_,linedashed_vert:N_,linedashed_frag:D_,meshbasic_vert:U_,meshbasic_frag:O_,meshlambert_vert:F_,meshlambert_frag:H_,meshmatcap_vert:B_,meshmatcap_frag:k_,meshnormal_vert:z_,meshnormal_frag:G_,meshphong_vert:V_,meshphong_frag:W_,meshphysical_vert:q_,meshphysical_frag:X_,meshtoon_vert:Y_,meshtoon_frag:K_,points_vert:Z_,points_frag:J_,shadow_vert:j_,shadow_frag:$_,sprite_vert:Q_,sprite_frag:ex},Ie={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Vi={basic:{uniforms:Nn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Nn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Nn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Nn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Nn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new ze(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Nn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Nn([Ie.points,Ie.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Nn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Nn([Ie.common,Ie.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Nn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Nn([Ie.sprite,Ie.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:Nn([Ie.common,Ie.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:Nn([Ie.lights,Ie.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Vi.physical={uniforms:Nn([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var Oc={r:0,b:0,g:0},tx=new lt,$p=new at;$p.set(-1,0,0,0,1,0,0,0,1);function nx(i,e,t,n,r,s){let a=new ze(0),o=r===!0?0:1,c,u,l=null,h=0,f=null;function p(x){let R=x.isScene===!0?x.background:null;if(R&&R.isTexture){let E=x.backgroundBlurriness>0;R=e.get(R,E)}return R}function g(x){let R=!1,E=p(x);E===null?v(a,o):E&&E.isColor&&(v(E,1),R=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(x,R){let E=p(R);E&&(E.isCubeTexture||E.mapping===po)?(u===void 0&&(u=new Be(new mn(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:us(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,L,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=E,u.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(tx.makeRotationFromEuler(R.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply($p),u.material.toneMapped=ct.getTransfer(E.colorSpace)!==At,(l!==E||h!==E.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,l=E,h=E.version,f=i.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Be(new ns(2,2),new tn({name:"BackgroundMaterial",uniforms:us(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=ct.getTransfer(E.colorSpace)!==At,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(l!==E||h!==E.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,l=E,h=E.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function v(x,R){x.getRGB(Oc,bh(i)),t.buffers.color.setClear(Oc.r,Oc.g,Oc.b,R,s)}function m(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,R=1){a.set(x),o=R,v(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,v(a,o)},render:g,addToRenderList:y,dispose:m}}function ix(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,a=!1;function o(A,M,P,U,B){let K=!1,J=h(A,U,P,M);s!==J&&(s=J,u(s.object)),K=p(A,U,P,B),K&&g(A,U,P,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,E(A,M,P,U),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return i.createVertexArray()}function u(A){return i.bindVertexArray(A)}function l(A){return i.deleteVertexArray(A)}function h(A,M,P,U){let B=U.wireframe===!0,K=n[M.id];K===void 0&&(K={},n[M.id]=K);let J=A.isInstancedMesh===!0?A.id:0,ne=K[J];ne===void 0&&(ne={},K[J]=ne);let se=ne[P.id];se===void 0&&(se={},ne[P.id]=se);let ie=se[B];return ie===void 0&&(ie=f(c()),se[B]=ie),ie}function f(A){let M=[],P=[],U=[];for(let B=0;B<t;B++)M[B]=0,P[B]=0,U[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:P,attributeDivisors:U,object:A,attributes:{},index:null}}function p(A,M,P,U){let B=s.attributes,K=M.attributes,J=0,ne=P.getAttributes();for(let se in ne)if(ne[se].location>=0){let ae=B[se],Re=K[se];if(Re===void 0&&(se==="instanceMatrix"&&A.instanceMatrix&&(Re=A.instanceMatrix),se==="instanceColor"&&A.instanceColor&&(Re=A.instanceColor)),ae===void 0||ae.attribute!==Re||Re&&ae.data!==Re.data)return!0;J++}return s.attributesNum!==J||s.index!==U}function g(A,M,P,U){let B={},K=M.attributes,J=0,ne=P.getAttributes();for(let se in ne)if(ne[se].location>=0){let ae=K[se];ae===void 0&&(se==="instanceMatrix"&&A.instanceMatrix&&(ae=A.instanceMatrix),se==="instanceColor"&&A.instanceColor&&(ae=A.instanceColor));let Re={};Re.attribute=ae,ae&&ae.data&&(Re.data=ae.data),B[se]=Re,J++}s.attributes=B,s.attributesNum=J,s.index=U}function y(){let A=s.newAttributes;for(let M=0,P=A.length;M<P;M++)A[M]=0}function v(A){m(A,0)}function m(A,M){let P=s.newAttributes,U=s.enabledAttributes,B=s.attributeDivisors;P[A]=1,U[A]===0&&(i.enableVertexAttribArray(A),U[A]=1),B[A]!==M&&(i.vertexAttribDivisor(A,M),B[A]=M)}function x(){let A=s.newAttributes,M=s.enabledAttributes;for(let P=0,U=M.length;P<U;P++)M[P]!==A[P]&&(i.disableVertexAttribArray(P),M[P]=0)}function R(A,M,P,U,B,K,J){J===!0?i.vertexAttribIPointer(A,M,P,B,K):i.vertexAttribPointer(A,M,P,U,B,K)}function E(A,M,P,U){y();let B=U.attributes,K=P.getAttributes(),J=M.defaultAttributeValues;for(let ne in K){let se=K[ne];if(se.location>=0){let ie=B[ne];if(ie===void 0&&(ne==="instanceMatrix"&&A.instanceMatrix&&(ie=A.instanceMatrix),ne==="instanceColor"&&A.instanceColor&&(ie=A.instanceColor)),ie!==void 0){let ae=ie.normalized,Re=ie.itemSize,Ue=e.get(ie);if(Ue===void 0)continue;let $e=Ue.buffer,me=Ue.type,le=Ue.bytesPerElement,G=me===i.INT||me===i.UNSIGNED_INT||ie.gpuType===Kl;if(ie.isInterleavedBufferAttribute){let j=ie.data,de=j.stride,ge=ie.offset;if(j.isInstancedInterleavedBuffer){for(let Me=0;Me<se.locationSize;Me++)m(se.location+Me,j.meshPerAttribute);A.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Me=0;Me<se.locationSize;Me++)v(se.location+Me);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let Me=0;Me<se.locationSize;Me++)R(se.location+Me,Re/se.locationSize,me,ae,de*le,(ge+Re/se.locationSize*Me)*le,G)}else{if(ie.isInstancedBufferAttribute){for(let j=0;j<se.locationSize;j++)m(se.location+j,ie.meshPerAttribute);A.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let j=0;j<se.locationSize;j++)v(se.location+j);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let j=0;j<se.locationSize;j++)R(se.location+j,Re/se.locationSize,me,ae,Re*le,Re/se.locationSize*j*le,G)}}else if(J!==void 0){let ae=J[ne];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(se.location,ae);break;case 3:i.vertexAttrib3fv(se.location,ae);break;case 4:i.vertexAttrib4fv(se.location,ae);break;default:i.vertexAttrib1fv(se.location,ae)}}}}x()}function C(){_();for(let A in n){let M=n[A];for(let P in M){let U=M[P];for(let B in U){let K=U[B];for(let J in K)l(K[J].object),delete K[J];delete U[B]}}delete n[A]}}function L(A){if(n[A.id]===void 0)return;let M=n[A.id];for(let P in M){let U=M[P];for(let B in U){let K=U[B];for(let J in K)l(K[J].object),delete K[J];delete U[B]}}delete n[A.id]}function N(A){for(let M in n){let P=n[M];for(let U in P){let B=P[U];if(B[A.id]===void 0)continue;let K=B[A.id];for(let J in K)l(K[J].object),delete K[J];delete B[A.id]}}}function S(A){for(let M in n){let P=n[M],U=A.isInstancedMesh===!0?A.id:0,B=P[U];if(B!==void 0){for(let K in B){let J=B[K];for(let ne in J)l(J[ne].object),delete J[ne];delete B[K]}delete P[U],Object.keys(P).length===0&&delete n[M]}}}function _(){b(),a=!0,s!==r&&(s=r,u(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:_,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:L,releaseStatesOfObject:S,releaseStatesOfProgram:N,initAttributes:y,enableAttribute:v,disableUnusedAttributes:x}}function rx(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,l){l!==0&&(i.drawArraysInstanced(n,c,u,l),t.update(u,n,l))}function o(c,u,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,l);let f=0;for(let p=0;p<l;p++)f+=u[p];t.update(f,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function sx(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let N=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(N){return!(N!==$n&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(N){let S=N===En&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Wn&&N!==jn&&!S&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp",l=c(u);l!==u&&(Ze("WebGLRenderer:",u,"not supported, using",l,"instead."),u=l);let h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),L=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:x,maxVaryings:R,maxFragmentUniforms:E,maxSamples:C,samples:L}}function ax(i){let e=this,t=null,n=0,r=!1,s=!1,a=new xi,o=new at,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||n!==0||r;return r=f,n=h.length,p},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=l(h,f,0)},this.setState=function(h,f,p){let g=h.clippingPlanes,y=h.clipIntersection,v=h.clipShadows,m=i.get(h);if(!r||g===null||g.length===0||s&&!v)s?l(null):u();else{let x=s?0:n,R=x*4,E=m.clippingState||null;c.value=E,E=l(g,f,R,p);for(let C=0;C!==R;++C)E[C]=t[C];m.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(h,f,p,g){let y=h!==null?h.length:0,v=null;if(y!==0){if(v=c.value,g!==!0||v===null){let m=p+y*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(v===null||v.length<m)&&(v=new Float32Array(m));for(let R=0,E=p;R!==y;++R,E+=4)a.copy(h[R]).applyMatrix4(x,o),a.normal.toArray(v,E),v[E+3]=a.constant}c.value=v,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,v}}var ca=4,ox=6,lx=20,cx=256,bo=new ki,Ip=new ze,Lh=null,Nh=0,Dh=0,Uh=!1,ux=new $,hs=new $,ha=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:o=ux}=s;Lh=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),Dh=this._renderer.getActiveMipmapLevel(),Uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Np(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Lh,Nh,Dh),this._renderer.xr.enabled=Uh,e.scissorTest=!1,la(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pr||e.mapping===ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lh=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),Dh=this._renderer.getActiveMipmapLevel(),Uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:En,format:$n,colorSpace:Fn,depthBuffer:!1},r=Pp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pp(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=hx(s)),this._blurMaterial=dx(s,e,t),this._ggxMaterial=fx(s,e,t)}return r}_compileMaterial(e){let t=new Be(new Yt,e);this._renderer.compile(t,bo)}_sceneToCubeUV(e,t,n,r,s){let c=new ln(90,1,t,n),u=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Ip),h.toneMapping=Ti,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Be(new mn,new Ln({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,v=y.material,m=!1,x=e.background;x?x.isColor&&(v.color.copy(x),e.background=null,m=!0):(v.color.copy(Ip),m=!0);for(let R=0;R<6;R++){let E=R%3;E===0?(c.up.set(0,u[R],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+l[R],s.y,s.z)):E===1?(c.up.set(0,0,u[R]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+l[R],s.z)):(c.up.set(0,u[R],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+l[R]));let C=this._cubeSize;la(r,E*C,R>2?C:0,C,C),h.setRenderTarget(r),m&&h.render(y,c),h.render(e,c)}h.toneMapping=p,h.autoClear=f,e.background=x}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Pr||e.mapping===ls;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Np()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lp());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;la(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,bo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,u=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),h=Math.sqrt(u*u-l*l),f=u*1.25,p=h*f,{_lodMax:g}=this,y=this._sizeLods[n],v=3*y*(n>g-ca?n-g+ca:0),m=4*(this._cubeSize-y);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=g-t,la(s,v,m,3*y,2*y),r.setRenderTarget(s),r.render(o,bo),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-n,la(e,v,m,3*y,2*y),r.setRenderTarget(e),r.render(o,bo)}_blur(e,t,n,r){let s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,r,s){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[r];c.material=o;let u=o.uniforms;u.envMap.value=e.texture,u.sigma.value=s,u.mipInt.value=this._lodMax-n;let l=this._sizeLods[r],h=3*l*(r>this._lodMax-ca?r-this._lodMax+ca:0),f=4*(this._cubeSize-l);la(t,h,f,3*l,2*l),a.setRenderTarget(t),a.render(c,bo)}};function hx(i){let e=[],t=[],n=i,r=i-ca+1+ox;for(let s=0;s<r;s++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,u=1+o,l=[c,c,u,c,u,u,c,c,u,u,c,u],h=6,f=6,p=3,g=new Float32Array(p*f*h),y=new Float32Array(p*f*h);for(let m=0;m<h;m++){let x=m%3*2/3-1,R=m>2?0:-1,E=[x,R,0,x+2/3,R,0,x+2/3,R+1,0,x,R,0,x+2/3,R+1,0,x,R+1,0];g.set(E,p*f*m);for(let C=0;C<f;C++){let L=l[C*2]*2-1,N=l[C*2+1]*2-1;m===0?hs.set(1,N,L):m===1?hs.set(-L,1,-N):m===2?hs.set(-L,N,1):m===3?hs.set(-1,N,-L):m===4?hs.set(-L,-1,N):hs.set(L,N,-1),hs.toArray(y,(m*f+C)*p)}}let v=new Yt;v.setAttribute("position",new $t(g,p)),v.setAttribute("outputDirection",new $t(y,p)),t.push(new Be(v,null)),n>ca&&n--}return{lodMeshes:t,sizeLods:e}}function Pp(i,e,t){let n=new pn(i,e,t);return n.texture.mapping=po,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function la(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function fx(i,e,t){return new tn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:cx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function dx(i,e,t){return new tn({name:"SphericalGaussianBlur",defines:{SAMPLES:lx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:kc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Lp(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Np(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function kc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Hc=class extends pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ka(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new mn(5,5,5),s=new tn({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:ui});s.uniforms.tEquirect.value=t;let a=new Be(r,s),o=t.minFilter;return t.minFilter===Ei&&(t.minFilter=cn),new Bl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}};function px(i){let e=new WeakMap,t=new WeakMap,n=null;function r(f,p=!1){return f==null?null:p?a(f):s(f)}function s(f){if(f&&f.isTexture){let p=f.mapping;if(p===ql||p===Xl)if(e.has(f)){let g=e.get(f).texture;return o(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let y=new Hc(g.height);return y.fromEquirectangularTexture(i,f),e.set(f,y),f.addEventListener("dispose",u),o(y.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let p=f.mapping,g=p===ql||p===Xl,y=p===Pr||p===ls;if(g||y){let v=t.get(f),m=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new ha(i)),v=g?n.fromEquirectangular(f,v):n.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,t.set(f,v),v.texture;if(v!==void 0)return v.texture;{let x=f.image;return g&&x&&x.height>0||y&&x&&c(x)?(n===null&&(n=new ha(i)),v=g?n.fromEquirectangular(f):n.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,t.set(f,v),f.addEventListener("dispose",l),v.texture):null}}}return f}function o(f,p){return p===ql?f.mapping=Pr:p===Xl&&(f.mapping=ls),f}function c(f){let p=0,g=6;for(let y=0;y<g;y++)f[y]!==void 0&&p++;return p===g}function u(f){let p=f.target;p.removeEventListener("dispose",u);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function l(f){let p=f.target;p.removeEventListener("dispose",l);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function mx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Kr("WebGLRenderer: "+n+" extension not supported."),r}}}function gx(i,e,t,n){let r={},s=new WeakMap;function a(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];let p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(h){let f=h.attributes;for(let p in f)e.update(f[p],i.ARRAY_BUFFER)}function u(h){let f=[],p=h.index,g=h.attributes.position,y=0;if(g===void 0)return;if(p!==null){let x=p.array;y=p.version;for(let R=0,E=x.length;R<E;R+=3){let C=x[R+0],L=x[R+1],N=x[R+2];f.push(C,L,L,N,N,C)}}else{let x=g.array;y=g.version;for(let R=0,E=x.length/3-1;R<E;R+=3){let C=R+0,L=R+1,N=R+2;f.push(C,L,L,N,N,C)}}let v=new(g.count>=65535?Va:Ga)(f,1);v.version=y;let m=s.get(h);m&&e.remove(m),s.set(h,v)}function l(h){let f=s.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&u(h)}else u(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:l}}function vx(i,e,t){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,f){i.drawElements(n,f,s,h*a),t.update(f,n,1)}function u(h,f,p){p!==0&&(i.drawElementsInstanced(n,f,s,h*a,p),t.update(f,n,p))}function l(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,p);let y=0;for(let v=0;v<p;v++)y+=f[v];t.update(y,n,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=l}function _x(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:et("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function xx(i,e,t){let n=new WeakMap,r=new Dt;function s(a,o,c){let u=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=l!==void 0?l.length:0,f=n.get(o);if(f===void 0||f.count!==h){let _=function(){N.dispose(),n.delete(o),o.removeEventListener("dispose",_)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,v=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],R=0;p===!0&&(R=1),g===!0&&(R=2),y===!0&&(R=3);let E=o.attributes.position.count*R,C=1;E>e.maxTextureSize&&(C=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let L=new Float32Array(E*C*4*h),N=new Ba(L,E,C,h);N.type=jn,N.needsUpdate=!0;let S=R*4;for(let b=0;b<h;b++){let A=v[b],M=m[b],P=x[b],U=E*C*4*b;for(let B=0;B<A.count;B++){let K=B*S;p===!0&&(r.fromBufferAttribute(A,B),L[U+K+0]=r.x,L[U+K+1]=r.y,L[U+K+2]=r.z,L[U+K+3]=0),g===!0&&(r.fromBufferAttribute(M,B),L[U+K+4]=r.x,L[U+K+5]=r.y,L[U+K+6]=r.z,L[U+K+7]=0),y===!0&&(r.fromBufferAttribute(P,B),L[U+K+8]=r.x,L[U+K+9]=r.y,L[U+K+10]=r.z,L[U+K+11]=P.itemSize===4?r.w:1)}}f={count:h,texture:N,size:new Je(E,C)},n.set(o,f),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let y=0;y<u.length;y++)p+=u[y];let g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function yx(i,e,t,n,r){let s=new WeakMap;function a(u){let l=r.render.frame,h=u.geometry,f=e.get(u,h);if(s.get(f)!==l&&(e.update(f),s.set(f,l)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),s.get(u)!==l&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),s.set(u,l))),u.isSkinnedMesh){let p=u.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return f}function o(){s=new WeakMap}function c(u){let l=u.target;l.removeEventListener("dispose",c),n.releaseStatesOfObject(l),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:o}}var Mx={[oo]:"LINEAR_TONE_MAPPING",[lo]:"REINHARD_TONE_MAPPING",[co]:"CINEON_TONE_MAPPING",[os]:"ACES_FILMIC_TONE_MAPPING",[ho]:"AGX_TONE_MAPPING",[fo]:"NEUTRAL_TONE_MAPPING",[uo]:"CUSTOM_TONE_MAPPING"};function Sx(i,e,t,n,r,s){let a=new pn(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,u=new Yt;u.setAttribute("position",new St([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new St([0,2,0,0,2,0],2));let l=new Js({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Be(u,l),f=new ki(-1,1,1,-1,0,1),p=null,g=null,y=!1,v,m=null,x=[],R=!1;this.setSize=function(E,C){a.setSize(E,C),o!==null&&o.setSize(E,C),c!==null&&c.setSize(E,C);for(let L=0;L<x.length;L++){let N=x[L];N.setSize&&N.setSize(E,C)}},this.setEffects=function(E){x=E,R=x.length>0&&x[0].isRenderPass===!0;let C=a.width,L=a.height;x.length>0&&o===null&&(o=new pn(C,L,{type:En,depthBuffer:!1,stencilBuffer:!1}),c=new pn(C,L,{type:En,depthBuffer:!1,stencilBuffer:!1}));for(let N=0;N<x.length;N++){let S=x[N];S.setSize&&S.setSize(C,L)}},this.begin=function(E,C){if(y||E.toneMapping===Ti&&x.length===0)return!1;if(m=C,C!==null){let L=C.width,N=C.height;(a.width!==L||a.height!==N)&&this.setSize(L,N)}return R===!1&&E.setRenderTarget(a),v=E.toneMapping,E.toneMapping=Ti,!0},this.hasRenderPass=function(){return R},this.end=function(E,C){E.toneMapping=v,y=!0;let L=a,N=o;for(let S=0;S<x.length;S++){let _=x[S];_.enabled!==!1&&(_.render(E,N,L,C),_.needsSwap!==!1&&(L=N,N=N===o?c:o))}if(p!==E.outputColorSpace||g!==E.toneMapping){p=E.outputColorSpace,g=E.toneMapping,l.defines={},ct.getTransfer(p)===At&&(l.defines.SRGB_TRANSFER="");let S=Mx[g];S&&(l.defines[S]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=L.texture,E.setRenderTarget(m),E.render(h,f),m=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),u.dispose(),l.dispose()}}var Qp=new _n,Hh=new wr(1,1),em=new Ba,tm=new Al,nm=new Ka,Dp=[],Up=[],Op=new Float32Array(16),Fp=new Float32Array(9),Hp=new Float32Array(4);function fa(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Dp[r];if(s===void 0&&(s=new Float32Array(r),Dp[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function xn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function yn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function zc(i,e){let t=Up[e];t===void 0&&(t=new Int32Array(e),Up[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function bx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Tx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;i.uniform2fv(this.addr,e),yn(t,e)}}function Ex(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xn(t,e))return;i.uniform3fv(this.addr,e),yn(t,e)}}function wx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;i.uniform4fv(this.addr,e),yn(t,e)}}function Ax(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),yn(t,e)}else{if(xn(t,n))return;Hp.set(n),i.uniformMatrix2fv(this.addr,!1,Hp),yn(t,n)}}function Rx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),yn(t,e)}else{if(xn(t,n))return;Fp.set(n),i.uniformMatrix3fv(this.addr,!1,Fp),yn(t,n)}}function Cx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),yn(t,e)}else{if(xn(t,n))return;Op.set(n),i.uniformMatrix4fv(this.addr,!1,Op),yn(t,n)}}function Ix(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Px(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;i.uniform2iv(this.addr,e),yn(t,e)}}function Lx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;i.uniform3iv(this.addr,e),yn(t,e)}}function Nx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;i.uniform4iv(this.addr,e),yn(t,e)}}function Dx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ux(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;i.uniform2uiv(this.addr,e),yn(t,e)}}function Ox(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;i.uniform3uiv(this.addr,e),yn(t,e)}}function Fx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;i.uniform4uiv(this.addr,e),yn(t,e)}}function Hx(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Hh.compareFunction=t.isReversedDepthBuffer()?Uc:Dc,s=Hh):s=Qp,t.setTexture2D(e||s,r)}function Bx(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||tm,r)}function kx(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||nm,r)}function zx(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||em,r)}function Gx(i){switch(i){case 5126:return bx;case 35664:return Tx;case 35665:return Ex;case 35666:return wx;case 35674:return Ax;case 35675:return Rx;case 35676:return Cx;case 5124:case 35670:return Ix;case 35667:case 35671:return Px;case 35668:case 35672:return Lx;case 35669:case 35673:return Nx;case 5125:return Dx;case 36294:return Ux;case 36295:return Ox;case 36296:return Fx;case 35678:case 36198:case 36298:case 36306:case 35682:return Hx;case 35679:case 36299:case 36307:return Bx;case 35680:case 36300:case 36308:case 36293:return kx;case 36289:case 36303:case 36311:case 36292:return zx}}function Vx(i,e){i.uniform1fv(this.addr,e)}function Wx(i,e){let t=fa(e,this.size,2);i.uniform2fv(this.addr,t)}function qx(i,e){let t=fa(e,this.size,3);i.uniform3fv(this.addr,t)}function Xx(i,e){let t=fa(e,this.size,4);i.uniform4fv(this.addr,t)}function Yx(i,e){let t=fa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Kx(i,e){let t=fa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Zx(i,e){let t=fa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Jx(i,e){i.uniform1iv(this.addr,e)}function jx(i,e){i.uniform2iv(this.addr,e)}function $x(i,e){i.uniform3iv(this.addr,e)}function Qx(i,e){i.uniform4iv(this.addr,e)}function ey(i,e){i.uniform1uiv(this.addr,e)}function ty(i,e){i.uniform2uiv(this.addr,e)}function ny(i,e){i.uniform3uiv(this.addr,e)}function iy(i,e){i.uniform4uiv(this.addr,e)}function ry(i,e,t){let n=this.cache,r=e.length,s=zc(t,r);xn(n,s)||(i.uniform1iv(this.addr,s),yn(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Hh:a=Qp;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function sy(i,e,t){let n=this.cache,r=e.length,s=zc(t,r);xn(n,s)||(i.uniform1iv(this.addr,s),yn(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||tm,s[a])}function ay(i,e,t){let n=this.cache,r=e.length,s=zc(t,r);xn(n,s)||(i.uniform1iv(this.addr,s),yn(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||nm,s[a])}function oy(i,e,t){let n=this.cache,r=e.length,s=zc(t,r);xn(n,s)||(i.uniform1iv(this.addr,s),yn(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||em,s[a])}function ly(i){switch(i){case 5126:return Vx;case 35664:return Wx;case 35665:return qx;case 35666:return Xx;case 35674:return Yx;case 35675:return Kx;case 35676:return Zx;case 5124:case 35670:return Jx;case 35667:case 35671:return jx;case 35668:case 35672:return $x;case 35669:case 35673:return Qx;case 5125:return ey;case 36294:return ty;case 36295:return ny;case 36296:return iy;case 35678:case 36198:case 36298:case 36306:case 35682:return ry;case 35679:case 36299:case 36307:return sy;case 35680:case 36300:case 36308:case 36293:return ay;case 36289:case 36303:case 36311:case 36292:return oy}}var Bh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Gx(t.type)}},kh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ly(t.type)}},zh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},Oh=/(\w+)(\])?(\[|\.)?/g;function Bp(i,e){i.seq.push(e),i.map[e.id]=e}function cy(i,e,t){let n=i.name,r=n.length;for(Oh.lastIndex=0;;){let s=Oh.exec(n),a=Oh.lastIndex,o=s[1],c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){Bp(t,u===void 0?new Bh(o,i,e):new kh(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new zh(o),Bp(t,h)),t=h}}}var ua=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);cy(o,c,this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function kp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var uy=37297,hy=0;function fy(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var zp=new at;function dy(i){ct._getMatrix(zp,ct.workingColorSpace,i);let e=`mat3( ${zp.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(i)){case Fa:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return Ze("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Gp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+fy(i.getShaderSource(e),o)}else return s}function py(i,e){let t=dy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var my={[oo]:"Linear",[lo]:"Reinhard",[co]:"Cineon",[os]:"ACESFilmic",[ho]:"AgX",[fo]:"Neutral",[uo]:"Custom"};function gy(i,e){let t=my[e];return t===void 0?(Ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Fc=new $;function vy(){ct.getLuminanceCoefficients(Fc);let i=Fc.x.toFixed(4),e=Fc.y.toFixed(4),t=Fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _y(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Eo).join(`
`)}function xy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),a=s.name,o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Eo(i){return i!==""}function Vp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var My=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gh(i){return i.replace(My,by)}var Sy=new Map;function by(i,e){let t=ft[e];if(t===void 0){let n=Sy.get(e);if(n!==void 0)t=ft[n],Ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Gh(t)}var Ty=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qp(i){return i.replace(Ty,Ey)}function Ey(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var wy={[ao]:"SHADOWMAP_TYPE_PCF",[ta]:"SHADOWMAP_TYPE_VSM"};function Ay(i){return wy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ry={[Pr]:"ENVMAP_TYPE_CUBE",[ls]:"ENVMAP_TYPE_CUBE",[po]:"ENVMAP_TYPE_CUBE_UV"};function Cy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Ry[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Iy={[ls]:"ENVMAP_MODE_REFRACTION"};function Py(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Iy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ly={[Wl]:"ENVMAP_BLENDING_MULTIPLY",[cp]:"ENVMAP_BLENDING_MIX",[up]:"ENVMAP_BLENDING_ADD"};function Ny(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ly[i.combine]||"ENVMAP_BLENDING_NONE"}function Dy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Uy(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Ay(t),u=Cy(t),l=Py(t),h=Ny(t),f=Dy(t),p=_y(t),g=xy(s),y=r.createProgram(),v,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Eo).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Eo).join(`
`),m.length>0&&(m+=`
`)):(v=[Xp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Eo).join(`
`),m=[Xp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ti?"#define TONE_MAPPING":"",t.toneMapping!==Ti?ft.tonemapping_pars_fragment:"",t.toneMapping!==Ti?gy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,py("linearToOutputTexel",t.outputColorSpace),vy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Eo).join(`
`)),a=Gh(a),a=Vp(a,t),a=Wp(a,t),o=Gh(o),o=Vp(o,t),o=Wp(o,t),a=qp(a),o=qp(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",t.glslVersion===yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let R=x+v+a,E=x+m+o,C=kp(r,r.VERTEX_SHADER,R),L=kp(r,r.FRAGMENT_SHADER,E);r.attachShader(y,C),r.attachShader(y,L),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function N(A){if(i.debug.checkShaderErrors){let M=r.getProgramInfoLog(y)||"",P=r.getShaderInfoLog(C)||"",U=r.getShaderInfoLog(L)||"",B=M.trim(),K=P.trim(),J=U.trim(),ne=!0,se=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,C,L);else{let ie=Gp(r,C,"vertex"),ae=Gp(r,L,"fragment");et("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+B+`
`+ie+`
`+ae)}else B!==""?Ze("WebGLProgram: Program Info Log:",B):(K===""||J==="")&&(se=!1);se&&(A.diagnostics={runnable:ne,programLog:B,vertexShader:{log:K,prefix:v},fragmentShader:{log:J,prefix:m}})}r.deleteShader(C),r.deleteShader(L),S=new ua(r,y),_=yy(r,y)}let S;this.getUniforms=function(){return S===void 0&&N(this),S};let _;this.getAttributes=function(){return _===void 0&&N(this),_};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(y,uy)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hy++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=L,this}var Oy=0,Vh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Wh(e),t.set(e,n)),n}},Wh=class{constructor(e){this.id=Oy++,this.code=e,this.usedTimes=0}};function Fy(i){return i===Nr||i===xo||i===yo}function Hy(i,e,t,n,r,s){let a=new ka,o=new Vh,c=new Set,u=[],l=new Map,h=n.logarithmicDepthBuffer,f=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function y(S,_,b,A,M,P){let U=A.fog,B=M.geometry,K=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?A.environment:null,J=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,ne=e.get(S.envMap||K,J),se=ne&&ne.mapping===po?ne.image.height:null,ie=p[S.type];S.precision!==null&&(f=n.getMaxPrecision(S.precision),f!==S.precision&&Ze("WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let ae=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Re=ae!==void 0?ae.length:0,Ue=0;B.morphAttributes.position!==void 0&&(Ue=1),B.morphAttributes.normal!==void 0&&(Ue=2),B.morphAttributes.color!==void 0&&(Ue=3);let $e,me,le,G;if(ie){let It=Vi[ie];$e=It.vertexShader,me=It.fragmentShader}else{$e=S.vertexShader,me=S.fragmentShader;let It=o.getVertexShaderStage(S),wt=o.getFragmentShaderStage(S);o.update(S,It,wt),le=It.id,G=wt.id}let j=i.getRenderTarget(),de=i.state.buffers.depth.getReversed(),ge=M.isInstancedMesh===!0,Me=M.isBatchedMesh===!0,Ge=!!S.map,Qe=!!S.matcap,Oe=!!ne,rt=!!S.aoMap,gt=!!S.lightMap,nt=!!S.bumpMap&&S.wireframe===!1,vt=!!S.normalMap,Ct=!!S.displacementMap,Qt=!!S.emissiveMap,Mt=!!S.metalnessMap,kt=!!S.roughnessMap,X=S.anisotropy>0,zt=S.clearcoat>0,ut=S.dispersion>0,F=S.retroreflectivity>0,T=S.iridescence>0,D=S.sheen>0,O=S.transmission>0,H=X&&!!S.anisotropyMap,z=zt&&!!S.clearcoatMap,Y=zt&&!!S.clearcoatNormalMap,V=zt&&!!S.clearcoatRoughnessMap,Z=T&&!!S.iridescenceMap,ue=T&&!!S.iridescenceThicknessMap,xe=D&&!!S.sheenColorMap,pe=D&&!!S.sheenRoughnessMap,ye=!!S.specularMap,be=!!S.specularColorMap,He=!!S.specularIntensityMap,Xe=O&&!!S.transmissionMap,W=O&&!!S.thicknessMap,Se=!!S.gradientMap,fe=!!S.alphaMap,Ae=S.alphaTest>0,Pe=!!S.alphaHash,ve=!!S.extensions,Ke=Ti;S.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ke=i.toneMapping);let We={shaderID:ie,shaderType:S.type,shaderName:S.name,vertexShader:$e,fragmentShader:me,defines:S.defines,customVertexShaderID:le,customFragmentShaderID:G,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Me,batchingColor:Me&&M._colorsTexture!==null,instancing:ge,instancingColor:ge&&M.instanceColor!==null,instancingMorph:ge&&M.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:Ge,matcap:Qe,envMap:Oe,envMapMode:Oe&&ne.mapping,envMapCubeUVHeight:se,aoMap:rt,lightMap:gt,bumpMap:nt,normalMap:vt,displacementMap:Ct,emissiveMap:Qt,normalMapObjectSpace:vt&&S.normalMapType===mp,normalMapTangentSpace:vt&&S.normalMapType===So,packedNormalMap:vt&&S.normalMapType===So&&Fy(S.normalMap.format),metalnessMap:Mt,roughnessMap:kt,anisotropy:X,anisotropyMap:H,clearcoat:zt,clearcoatMap:z,clearcoatNormalMap:Y,clearcoatRoughnessMap:V,dispersion:ut,retroreflection:F,iridescence:T,iridescenceMap:Z,iridescenceThicknessMap:ue,sheen:D,sheenColorMap:xe,sheenRoughnessMap:pe,specularMap:ye,specularColorMap:be,specularIntensityMap:He,transmission:O,transmissionMap:Xe,thicknessMap:W,gradientMap:Se,opaque:S.transparent===!1&&S.blending===na&&S.alphaToCoverage===!1,alphaMap:fe,alphaTest:Ae,alphaHash:Pe,combine:S.combine,mapUv:Ge&&g(S.map.channel),aoMapUv:rt&&g(S.aoMap.channel),lightMapUv:gt&&g(S.lightMap.channel),bumpMapUv:nt&&g(S.bumpMap.channel),normalMapUv:vt&&g(S.normalMap.channel),displacementMapUv:Ct&&g(S.displacementMap.channel),emissiveMapUv:Qt&&g(S.emissiveMap.channel),metalnessMapUv:Mt&&g(S.metalnessMap.channel),roughnessMapUv:kt&&g(S.roughnessMap.channel),anisotropyMapUv:H&&g(S.anisotropyMap.channel),clearcoatMapUv:z&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:Y&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:pe&&g(S.sheenRoughnessMap.channel),specularMapUv:ye&&g(S.specularMap.channel),specularColorMapUv:be&&g(S.specularColorMap.channel),specularIntensityMapUv:He&&g(S.specularIntensityMap.channel),transmissionMapUv:Xe&&g(S.transmissionMap.channel),thicknessMapUv:W&&g(S.thicknessMap.channel),alphaMapUv:fe&&g(S.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(vt||X),vertexNormals:!!B.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:M.isPoints===!0&&!!B.attributes.uv&&(Ge||fe),fog:!!U,useFog:S.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||B.attributes.normal===void 0&&vt===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:de,skinning:M.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Ue,numSunLights:_.sun.length,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numSunLightShadows:_.sunShadowMap.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numLightProbeGrids:P.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&b.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ke,decodeVideoTexture:Ge&&S.map.isVideoTexture===!0&&ct.getTransfer(S.map.colorSpace)===At,decodeVideoTextureEmissive:Qt&&S.emissiveMap.isVideoTexture===!0&&ct.getTransfer(S.emissiveMap.colorSpace)===At,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Vn,flipSided:S.side===Tn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ve&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&S.extensions.multiDraw===!0||Me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return We.vertexUv1s=c.has(1),We.vertexUv2s=c.has(2),We.vertexUv3s=c.has(3),c.clear(),We}function v(S){let _=[];if(S.shaderID?_.push(S.shaderID):(_.push(S.customVertexShaderID),_.push(S.customFragmentShaderID)),S.defines!==void 0)for(let b in S.defines)_.push(b),_.push(S.defines[b]);return S.isRawShaderMaterial===!1&&(m(_,S),x(_,S),_.push(i.outputColorSpace)),_.push(S.customProgramCacheKey),_.join()}function m(S,_){S.push(_.precision),S.push(_.outputColorSpace),S.push(_.envMapMode),S.push(_.envMapCubeUVHeight),S.push(_.mapUv),S.push(_.alphaMapUv),S.push(_.lightMapUv),S.push(_.aoMapUv),S.push(_.bumpMapUv),S.push(_.normalMapUv),S.push(_.displacementMapUv),S.push(_.emissiveMapUv),S.push(_.metalnessMapUv),S.push(_.roughnessMapUv),S.push(_.anisotropyMapUv),S.push(_.clearcoatMapUv),S.push(_.clearcoatNormalMapUv),S.push(_.clearcoatRoughnessMapUv),S.push(_.iridescenceMapUv),S.push(_.iridescenceThicknessMapUv),S.push(_.sheenColorMapUv),S.push(_.sheenRoughnessMapUv),S.push(_.specularMapUv),S.push(_.specularColorMapUv),S.push(_.specularIntensityMapUv),S.push(_.transmissionMapUv),S.push(_.thicknessMapUv),S.push(_.combine),S.push(_.fogExp2),S.push(_.sizeAttenuation),S.push(_.morphTargetsCount),S.push(_.morphAttributeCount),S.push(_.numSunLights),S.push(_.numDirLights),S.push(_.numPointLights),S.push(_.numSpotLights),S.push(_.numSpotLightMaps),S.push(_.numHemiLights),S.push(_.numRectAreaLights),S.push(_.numSunLightShadows),S.push(_.numDirLightShadows),S.push(_.numPointLightShadows),S.push(_.numSpotLightShadows),S.push(_.numSpotLightShadowsWithMaps),S.push(_.numLightProbes),S.push(_.shadowMapType),S.push(_.toneMapping),S.push(_.numClippingPlanes),S.push(_.numClipIntersection),S.push(_.depthPacking)}function x(S,_){a.disableAll(),_.instancing&&a.enable(0),_.instancingColor&&a.enable(1),_.instancingMorph&&a.enable(2),_.matcap&&a.enable(3),_.envMap&&a.enable(4),_.normalMapObjectSpace&&a.enable(5),_.normalMapTangentSpace&&a.enable(6),_.clearcoat&&a.enable(7),_.iridescence&&a.enable(8),_.alphaTest&&a.enable(9),_.vertexColors&&a.enable(10),_.vertexAlphas&&a.enable(11),_.vertexUv1s&&a.enable(12),_.vertexUv2s&&a.enable(13),_.vertexUv3s&&a.enable(14),_.vertexTangents&&a.enable(15),_.anisotropy&&a.enable(16),_.alphaHash&&a.enable(17),_.batching&&a.enable(18),_.dispersion&&a.enable(19),_.retroreflection&&a.enable(24),_.batchingColor&&a.enable(20),_.gradientMap&&a.enable(21),_.packedNormalMap&&a.enable(22),_.vertexNormals&&a.enable(23),S.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),_.numLightProbeGrids>0&&a.enable(22),_.hasPositionAttribute&&a.enable(23),S.push(a.mask)}function R(S){let _=p[S.type],b;if(_){let A=Vi[_];b=ur.clone(A.uniforms)}else b=S.uniforms;return b}function E(S,_){let b=l.get(_);return b!==void 0?++b.usedTimes:(b=new Uy(i,_,S,r),u.push(b),l.set(_,b)),b}function C(S){if(--S.usedTimes===0){let _=u.indexOf(S);u[_]=u[u.length-1],u.pop(),l.delete(S.cacheKey),S.destroy()}}function L(S){o.remove(S)}function N(){o.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:R,acquireProgram:E,releaseProgram:C,releaseShaderCache:L,programs:u,dispose:N}}function By(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function ky(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Yp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Kp(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,g,y,v,m){let x=i[e];return x===void 0?(x={id:f.id,object:f,geometry:p,material:g,materialVariant:a(f),groupOrder:y,renderOrder:f.renderOrder,z:v,group:m},i[e]=x):(x.id=f.id,x.object=f,x.geometry=p,x.material=g,x.materialVariant=a(f),x.groupOrder=y,x.renderOrder=f.renderOrder,x.z=v,x.group=m),e++,x}function c(f,p,g,y,v,m,x){x.reversedDepth===!0&&(v=-v);let R=o(f,p,g,y,v,m);g.transmission>0?n.push(R):g.transparent===!0?r.push(R):t.push(R)}function u(f,p,g,y,v,m){let x=o(f,p,g,y,v,m);g.transmission>0?n.unshift(x):g.transparent===!0?r.unshift(x):t.unshift(x)}function l(f,p){t.length>1&&t.sort(f||ky),n.length>1&&n.sort(p||Yp),r.length>1&&r.sort(p||Yp)}function h(){for(let f=e,p=i.length;f<p;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:u,finish:h,sort:l}}function zy(){let i=new WeakMap;function e(n,r){let s=i.get(n),a;return s===void 0?(a=new Kp,i.set(n,[a])):r>=s.length?(a=new Kp,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Gy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new $,color:new ze};break;case"SpotLight":t={position:new $,direction:new $,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new $,halfWidth:new $,halfHeight:new $};break}return i[e.id]=t,t}}}function Vy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Wy=0;function qy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Xy(i){let e=new Gy,t=Vy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new $);let r=new $,s=new lt,a=new lt;function o(u){let l=0,h=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,g=0,y=0,v=0,m=0,x=0,R=0,E=0,C=0,L=0,N=0,S=0,_=0,b=0;u.sort(qy);for(let M=0,P=u.length;M<P;M++){let U=u[M],B=U.color,K=U.intensity,J=U.distance,ne=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Nr?ne=U.shadow.map.texture:ne=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)l+=B.r*K,h+=B.g*K,f+=B.b*K;else if(U.isLightProbe){for(let se=0;se<9;se++)n.probe[se].addScaledVector(U.sh.coefficients[se],K);b++}else if(U.isSunLight){let se=e.get(U);if(se.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let ie=U.shadow,ae=t.get(U);ae.shadowIntensity=ie.intensity,ae.shadowBias=ie.bias,ae.shadowNormalBias=ie.normalBias,ae.shadowRadius=ie.radius,ae.shadowMapSize.copy(ie.mapSize).multiply(ie.getFrameExtents()),n.sunShadow[g]=ae,n.sunShadowMap[g]=ne;let Re=ie.getViewportCount();for(let Ue=0;Ue<Re;Ue++)n.sunShadowMatrix[y+Ue]=ie.getMatrix(Ue),n.sunShadowCascade[y+Ue]=ie._cascadeData[Ue];y+=Re,g++}n.sun[p]=se,p++}else if(U.isDirectionalLight){let se=e.get(U);if(se.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let ie=U.shadow,ae=t.get(U);ae.shadowIntensity=ie.intensity,ae.shadowBias=ie.bias,ae.shadowNormalBias=ie.normalBias,ae.shadowRadius=ie.radius,ae.shadowMapSize=ie.mapSize,n.directionalShadow[v]=ae,n.directionalShadowMap[v]=ne,n.directionalShadowMatrix[v]=U.shadow.matrix,C++}n.directional[v]=se,v++}else if(U.isSpotLight){let se=e.get(U);se.position.setFromMatrixPosition(U.matrixWorld),se.color.copy(B).multiplyScalar(K),se.distance=J,se.coneCos=Math.cos(U.angle),se.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),se.decay=U.decay,n.spot[x]=se;let ie=U.shadow;if(U.map&&(n.spotLightMap[S]=U.map,S++,ie.updateMatrices(U),U.castShadow&&_++),n.spotLightMatrix[x]=ie.matrix,U.castShadow){let ae=t.get(U);ae.shadowIntensity=ie.intensity,ae.shadowBias=ie.bias,ae.shadowNormalBias=ie.normalBias,ae.shadowRadius=ie.radius,ae.shadowMapSize=ie.mapSize,n.spotShadow[x]=ae,n.spotShadowMap[x]=ne,N++}x++}else if(U.isRectAreaLight){let se=e.get(U);se.color.copy(B).multiplyScalar(K),se.halfWidth.set(U.width*.5,0,0),se.halfHeight.set(0,U.height*.5,0),n.rectArea[R]=se,R++}else if(U.isPointLight){let se=e.get(U);if(se.color.copy(U.color).multiplyScalar(U.intensity),se.distance=U.distance,se.decay=U.decay,U.castShadow){let ie=U.shadow,ae=t.get(U);ae.shadowIntensity=ie.intensity,ae.shadowBias=ie.bias,ae.shadowNormalBias=ie.normalBias,ae.shadowRadius=ie.radius,ae.shadowMapSize=ie.mapSize,ae.shadowCameraNear=ie.camera.near,ae.shadowCameraFar=ie.camera.far,n.pointShadow[m]=ae,n.pointShadowMap[m]=ne,n.pointShadowMatrix[m]=U.shadow.matrix,L++}n.point[m]=se,m++}else if(U.isHemisphereLight){let se=e.get(U);se.skyColor.copy(U.color).multiplyScalar(K),se.groundColor.copy(U.groundColor).multiplyScalar(K),n.hemi[E]=se,E++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ie.LTC_FLOAT_1,n.rectAreaLTC2=Ie.LTC_FLOAT_2):(n.rectAreaLTC1=Ie.LTC_HALF_1,n.rectAreaLTC2=Ie.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=h,n.ambient[2]=f;let A=n.hash;(A.sunLength!==p||A.directionalLength!==v||A.pointLength!==m||A.spotLength!==x||A.rectAreaLength!==R||A.hemiLength!==E||A.numSunShadows!==g||A.numDirectionalShadows!==C||A.numPointShadows!==L||A.numSpotShadows!==N||A.numSpotMaps!==S||A.numLightProbes!==b)&&(n.sun.length=p,n.directional.length=v,n.spot.length=x,n.rectArea.length=R,n.point.length=m,n.hemi.length=E,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=L,n.pointShadowMap.length=L,n.pointShadowMatrix.length=L,n.spotShadow.length=N,n.spotShadowMap.length=N,n.spotLightMatrix.length=N+S-_,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=_,n.numLightProbes=b,A.sunLength=p,A.directionalLength=v,A.pointLength=m,A.spotLength=x,A.rectAreaLength=R,A.hemiLength=E,A.numSunShadows=g,A.numDirectionalShadows=C,A.numPointShadows=L,A.numSpotShadows=N,A.numSpotMaps=S,A.numLightProbes=b,n.version=Wy++)}function c(u,l){let h=0,f=0,p=0,g=0,y=0,v=0,m=l.matrixWorldInverse;for(let x=0,R=u.length;x<R;x++){let E=u[x];if(E.isSunLight){let C=n.sun[h];C.direction.setFromMatrixPosition(E.matrixWorld),C.direction.transformDirection(m),h++}else if(E.isDirectionalLight){let C=n.directional[f];C.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(m),f++}else if(E.isSpotLight){let C=n.spot[g];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(m),C.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(m),g++}else if(E.isRectAreaLight){let C=n.rectArea[y];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(m),a.identity(),s.copy(E.matrixWorld),s.premultiply(m),a.extractRotation(s),C.halfWidth.set(E.width*.5,0,0),C.halfHeight.set(0,E.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),y++}else if(E.isPointLight){let C=n.point[p];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(m),p++}else if(E.isHemisphereLight){let C=n.hemi[v];C.direction.setFromMatrixPosition(E.matrixWorld),C.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:n}}function Zp(i){let e=new Xy(i),t=[],n=[],r=[];function s(f){h.camera=f,t.length=0,n.length=0,r.length=0}function a(f){t.push(f)}function o(f){n.push(f)}function c(f){r.push(f)}function u(){e.setup(t)}function l(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:u,setupLightsView:l,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Yy(i){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new Zp(i),e.set(r,[o])):s>=a.length?(o=new Zp(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Ky=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Jy=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],jy=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],Jp=new lt,To=new $,Fh=new $;function $y(i,e,t){let n=new qs,r=new Je,s=new Je,a=new Dt,o=new Pl,c=new Ll,u={},l=t.maxTextureSize,h={[zi]:Tn,[Tn]:zi,[Vn]:Vn},f=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:Ky,fragmentShader:Zy}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new Yt;g.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Be(g,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ao;let m=this.type;this.render=function(L,N,S){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||L.length===0)return;this.type===Wd&&(Ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ao);let _=i.getRenderTarget(),b=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),M=i.state;M.setBlending(ui),M.buffers.depth.getReversed()===!0?M.buffers.color.setClear(0,0,0,0):M.buffers.color.setClear(1,1,1,1),M.buffers.depth.setTest(!0),M.setScissorTest(!1);let P=m!==this.type;P&&N.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(B=>B.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,B=L.length;U<B;U++){let K=L[U],J=K.shadow;if(J===void 0){Ze("WebGLShadowMap:",K,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;r.copy(J.mapSize);let ne=J.getFrameExtents();r.multiply(ne),s.copy(J.mapSize),(r.x>l||r.y>l)&&(r.x>l&&(s.x=Math.floor(l/ne.x),r.x=s.x*ne.x,J.mapSize.x=s.x),r.y>l&&(s.y=Math.floor(l/ne.y),r.y=s.y*ne.y,J.mapSize.y=s.y));let se=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=se,J.map===null||P===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===ta){if(K.isPointLight){Ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new pn(r.x,r.y,{format:Nr,type:En,minFilter:cn,magFilter:cn,generateMipmaps:!1}),J.map.texture.name=K.name+".shadowMap",J.map.depthTexture=new wr(r.x,r.y,jn),J.map.depthTexture.name=K.name+".shadowMapDepth",J.map.depthTexture.format=Oi,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=qt,J.map.depthTexture.magFilter=qt}else K.isPointLight?(J.map=new Hc(r.x),J.map.depthTexture=new Il(r.x,wi)):(J.map=new pn(r.x,r.y),J.map.depthTexture=new wr(r.x,r.y,wi)),J.map.depthTexture.name=K.name+".shadowMap",J.map.depthTexture.format=Oi,this.type===ao?(J.map.depthTexture.compareFunction=se?Uc:Dc,J.map.depthTexture.minFilter=cn,J.map.depthTexture.magFilter=cn):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=qt,J.map.depthTexture.magFilter=qt);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==r.x||J.map.height!==r.y)&&J.map.setSize(r.x,r.y);let ie=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();K.isPointLight!==!0&&J.updateMatrices(K,S);for(let ae=0;ae<ie;ae++){let Re=J.getCamera(ae);if(K.isPointLight){let Ue=J.camera,$e=J.matrix,me=K.distance||Ue.far;me!==Ue.far&&(Ue.far=me,Ue.updateProjectionMatrix()),To.setFromMatrixPosition(K.matrixWorld),Ue.position.copy(To),Fh.copy(Ue.position),Fh.add(Jy[ae]),Ue.up.copy(jy[ae]),Ue.lookAt(Fh),Ue.updateMatrixWorld(),$e.makeTranslation(-To.x,-To.y,-To.z),Jp.multiplyMatrices(Ue.projectionMatrix,Ue.matrixWorldInverse),J._frustum.setFromProjectionMatrix(Jp,Ue.coordinateSystem,Ue.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,ae),i.clear();else{ae===0&&(i.setRenderTarget(J.map),i.clear());let Ue=J.getViewport(ae);a.set(s.x*Ue.x,s.y*Ue.y,s.x*Ue.z,s.y*Ue.w),M.viewport(a)}n=J.getFrustum(ae),E(N,S,Re,K,this.type)}J.isPointLightShadow!==!0&&this.type===ta&&x(J,S),J.needsUpdate=!1}m=this.type,v.needsUpdate=!1,i.setRenderTarget(_,b,A)};function x(L,N){let S=e.update(y);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null?L.mapPass=new pn(r.x,r.y,{format:Nr,type:En}):(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)&&L.mapPass.setSize(L.map.width,L.map.height),f.uniforms.shadow_pass.value=L.map.depthTexture,f.uniforms.resolution.value.set(L.map.width,L.map.height),f.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(N,null,S,f,y,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value.set(L.map.width,L.map.height),p.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(N,null,S,p,y,null)}function R(L,N,S,_){let b=null,A=S.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(A!==void 0)b=A;else if(b=S.isPointLight===!0?c:o,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){let M=b.uuid,P=N.uuid,U=u[M];U===void 0&&(U={},u[M]=U);let B=U[P];B===void 0&&(B=b.clone(),U[P]=B,N.addEventListener("dispose",C)),b=B}if(b.visible=N.visible,b.wireframe=N.wireframe,_===ta?b.side=N.shadowSide!==null?N.shadowSide:N.side:b.side=N.shadowSide!==null?N.shadowSide:h[N.side],b.alphaMap=N.alphaMap,b.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,b.map=N.map,b.clipShadows=N.clipShadows,b.clippingPlanes=N.clippingPlanes,b.clipIntersection=N.clipIntersection,b.displacementMap=N.displacementMap,b.displacementScale=N.displacementScale,b.displacementBias=N.displacementBias,b.wireframeLinewidth=N.wireframeLinewidth,b.linewidth=N.linewidth,S.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let M=i.properties.get(b);M.light=S}return b}function E(L,N,S,_,b){if(L.visible===!1)return;if(L.layers.test(N.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&b===ta)&&(!L.frustumCulled||L.intersectsFrustum(n))){L.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,L.matrixWorld);let P=e.update(L),U=L.material;if(Array.isArray(U)){let B=P.groups;for(let K=0,J=B.length;K<J;K++){let ne=B[K],se=U[ne.materialIndex];if(se&&se.visible){let ie=R(L,se,_,b);L.onBeforeShadow(i,L,N,S,P,ie,ne),i.renderBufferDirect(S,null,P,ie,L,ne),L.onAfterShadow(i,L,N,S,P,ie,ne)}}}else if(U.visible){let B=R(L,U,_,b);L.onBeforeShadow(i,L,N,S,P,B,null),i.renderBufferDirect(S,null,P,B,L,null),L.onAfterShadow(i,L,N,S,P,B,null)}}let M=L.children;for(let P=0,U=M.length;P<U;P++)E(M[P],N,S,_,b)}function C(L){L.target.removeEventListener("dispose",C);for(let S in u){let _=u[S],b=L.target.uuid;b in _&&(_[b].dispose(),delete _[b])}}}function Qy(i,e){function t(){let W=!1,Se=new Dt,fe=null,Ae=new Dt(0,0,0,0);return{setMask:function(Pe){fe!==Pe&&!W&&(i.colorMask(Pe,Pe,Pe,Pe),fe=Pe)},setLocked:function(Pe){W=Pe},setClear:function(Pe,ve,Ke,We,It){It===!0&&(Pe*=We,ve*=We,Ke*=We),Se.set(Pe,ve,Ke,We),Ae.equals(Se)===!1&&(i.clearColor(Pe,ve,Ke,We),Ae.copy(Se))},reset:function(){W=!1,fe=null,Ae.set(-1,0,0,0)}}}function n(){let W=!1,Se=!1,fe=null,Ae=null,Pe=null;return{setReversed:function(ve){if(Se!==ve){let Ke=e.get("EXT_clip_control");ve?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT),Se=ve;let We=Pe;Pe=null,this.setClear(We)}},getReversed:function(){return Se},setTest:function(ve){ve?j(i.DEPTH_TEST):de(i.DEPTH_TEST)},setMask:function(ve){fe!==ve&&!W&&(i.depthMask(ve),fe=ve)},setFunc:function(ve){if(Se&&(ve=wp[ve]),Ae!==ve){switch(ve){case _l:i.depthFunc(i.NEVER);break;case xl:i.depthFunc(i.ALWAYS);break;case yl:i.depthFunc(i.LESS);break;case Us:i.depthFunc(i.LEQUAL);break;case Ml:i.depthFunc(i.EQUAL);break;case Sl:i.depthFunc(i.GEQUAL);break;case bl:i.depthFunc(i.GREATER);break;case Tl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ae=ve}},setLocked:function(ve){W=ve},setClear:function(ve){Pe!==ve&&(Pe=ve,Se&&(ve=1-ve),i.clearDepth(ve))},reset:function(){W=!1,fe=null,Ae=null,Pe=null,Se=!1}}}function r(){let W=!1,Se=null,fe=null,Ae=null,Pe=null,ve=null,Ke=null,We=null,It=null;return{setTest:function(wt){W||(wt?j(i.STENCIL_TEST):de(i.STENCIL_TEST))},setMask:function(wt){Se!==wt&&!W&&(i.stencilMask(wt),Se=wt)},setFunc:function(wt,Xn,d){(fe!==wt||Ae!==Xn||Pe!==d)&&(i.stencilFunc(wt,Xn,d),fe=wt,Ae=Xn,Pe=d)},setOp:function(wt,Xn,d){(ve!==wt||Ke!==Xn||We!==d)&&(i.stencilOp(wt,Xn,d),ve=wt,Ke=Xn,We=d)},setLocked:function(wt){W=wt},setClear:function(wt){It!==wt&&(i.clearStencil(wt),It=wt)},reset:function(){W=!1,Se=null,fe=null,Ae=null,Pe=null,ve=null,Ke=null,We=null,It=null}}}let s=new t,a=new n,o=new r,c=new WeakMap,u=new WeakMap,l={},h={},f={},p=new WeakMap,g=[],y=null,v=!1,m=null,x=null,R=null,E=null,C=null,L=null,N=null,S=new ze(0,0,0),_=0,b=!1,A=null,M=null,P=null,U=null,B=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,ne=0,se=i.getParameter(i.VERSION);se.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(se)[1]),J=ne>=1):se.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),J=ne>=2);let ie=null,ae={},Re=i.getParameter(i.SCISSOR_BOX),Ue=i.getParameter(i.VIEWPORT),$e=new Dt().fromArray(Re),me=new Dt().fromArray(Ue);function le(W,Se,fe,Ae){let Pe=new Uint8Array(4),ve=i.createTexture();i.bindTexture(W,ve),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ke=0;Ke<fe;Ke++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Se,0,i.RGBA,1,1,Ae,0,i.RGBA,i.UNSIGNED_BYTE,Pe):i.texImage2D(Se+Ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pe);return ve}let G={};G[i.TEXTURE_2D]=le(i.TEXTURE_2D,i.TEXTURE_2D,1),G[i.TEXTURE_CUBE_MAP]=le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[i.TEXTURE_2D_ARRAY]=le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),G[i.TEXTURE_3D]=le(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(i.DEPTH_TEST),a.setFunc(Us),nt(!1),vt(ah),j(i.CULL_FACE),rt(ui);function j(W){l[W]!==!0&&(i.enable(W),l[W]=!0)}function de(W){l[W]!==!1&&(i.disable(W),l[W]=!1)}function ge(W,Se){return f[W]!==Se?(i.bindFramebuffer(W,Se),f[W]=Se,W===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Se),W===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Se),!0):!1}function Me(W,Se){let fe=g,Ae=!1;if(W){fe=p.get(Se),fe===void 0&&(fe=[],p.set(Se,fe));let Pe=W.textures;if(fe.length!==Pe.length||fe[0]!==i.COLOR_ATTACHMENT0){for(let ve=0,Ke=Pe.length;ve<Ke;ve++)fe[ve]=i.COLOR_ATTACHMENT0+ve;fe.length=Pe.length,Ae=!0}}else fe[0]!==i.BACK&&(fe[0]=i.BACK,Ae=!0);Ae&&i.drawBuffers(fe)}function Ge(W){return y!==W?(i.useProgram(W),y=W,!0):!1}let Qe={[as]:i.FUNC_ADD,[Xd]:i.FUNC_SUBTRACT,[Yd]:i.FUNC_REVERSE_SUBTRACT};Qe[Kd]=i.MIN,Qe[Zd]=i.MAX;let Oe={[Jd]:i.ZERO,[jd]:i.ONE,[$d]:i.SRC_COLOR,[ch]:i.SRC_ALPHA,[rp]:i.SRC_ALPHA_SATURATE,[np]:i.DST_COLOR,[ep]:i.DST_ALPHA,[Qd]:i.ONE_MINUS_SRC_COLOR,[uh]:i.ONE_MINUS_SRC_ALPHA,[ip]:i.ONE_MINUS_DST_COLOR,[tp]:i.ONE_MINUS_DST_ALPHA,[sp]:i.CONSTANT_COLOR,[ap]:i.ONE_MINUS_CONSTANT_COLOR,[op]:i.CONSTANT_ALPHA,[lp]:i.ONE_MINUS_CONSTANT_ALPHA};function rt(W,Se,fe,Ae,Pe,ve,Ke,We,It,wt){if(W===ui){v===!0&&(de(i.BLEND),v=!1);return}if(v===!1&&(j(i.BLEND),v=!0),W!==qd){if(W!==m||wt!==b){if((x!==as||C!==as)&&(i.blendEquation(i.FUNC_ADD),x=as,C=as),wt)switch(W){case na:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cr:i.blendFunc(i.ONE,i.ONE);break;case oh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:et("WebGLState: Invalid blending: ",W);break}else switch(W){case na:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case oh:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lh:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",W);break}R=null,E=null,L=null,N=null,S.set(0,0,0),_=0,m=W,b=wt}return}Pe=Pe||Se,ve=ve||fe,Ke=Ke||Ae,(Se!==x||Pe!==C)&&(i.blendEquationSeparate(Qe[Se],Qe[Pe]),x=Se,C=Pe),(fe!==R||Ae!==E||ve!==L||Ke!==N)&&(i.blendFuncSeparate(Oe[fe],Oe[Ae],Oe[ve],Oe[Ke]),R=fe,E=Ae,L=ve,N=Ke),(We.equals(S)===!1||It!==_)&&(i.blendColor(We.r,We.g,We.b,It),S.copy(We),_=It),m=W,b=!1}function gt(W,Se){W.side===Vn?de(i.CULL_FACE):j(i.CULL_FACE);let fe=W.side===Tn;Se&&(fe=!fe),nt(fe),W.blending===na&&W.transparent===!1?rt(ui):rt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),a.setFunc(W.depthFunc),a.setTest(W.depthTest),a.setMask(W.depthWrite),s.setMask(W.colorWrite);let Ae=W.stencilWrite;o.setTest(Ae),Ae&&(o.setMask(W.stencilWriteMask),o.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),o.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Qt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):de(i.SAMPLE_ALPHA_TO_COVERAGE)}function nt(W){A!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),A=W)}function vt(W){W!==Gd?(j(i.CULL_FACE),W!==M&&(W===ah?i.cullFace(i.BACK):W===Vd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):de(i.CULL_FACE),M=W}function Ct(W){W!==P&&(J&&i.lineWidth(W),P=W)}function Qt(W,Se,fe){W?(j(i.POLYGON_OFFSET_FILL),(U!==Se||B!==fe)&&(U=Se,B=fe,a.getReversed()&&(Se=-Se),i.polygonOffset(Se,fe))):de(i.POLYGON_OFFSET_FILL)}function Mt(W){W?j(i.SCISSOR_TEST):de(i.SCISSOR_TEST)}function kt(W){W===void 0&&(W=i.TEXTURE0+K-1),ie!==W&&(i.activeTexture(W),ie=W)}function X(W,Se,fe){fe===void 0&&(ie===null?fe=i.TEXTURE0+K-1:fe=ie);let Ae=ae[fe];Ae===void 0&&(Ae={type:void 0,texture:void 0},ae[fe]=Ae),(Ae.type!==W||Ae.texture!==Se)&&(ie!==fe&&(i.activeTexture(fe),ie=fe),i.bindTexture(W,Se||G[W]),Ae.type=W,Ae.texture=Se)}function zt(){let W=ae[ie];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function ut(){try{i.compressedTexImage2D(...arguments)}catch(W){et("WebGLState:",W)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(W){et("WebGLState:",W)}}function T(){try{i.texSubImage2D(...arguments)}catch(W){et("WebGLState:",W)}}function D(){try{i.texSubImage3D(...arguments)}catch(W){et("WebGLState:",W)}}function O(){try{i.compressedTexSubImage2D(...arguments)}catch(W){et("WebGLState:",W)}}function H(){try{i.compressedTexSubImage3D(...arguments)}catch(W){et("WebGLState:",W)}}function z(){try{i.texStorage2D(...arguments)}catch(W){et("WebGLState:",W)}}function Y(){try{i.texStorage3D(...arguments)}catch(W){et("WebGLState:",W)}}function V(){try{i.texImage2D(...arguments)}catch(W){et("WebGLState:",W)}}function Z(){try{i.texImage3D(...arguments)}catch(W){et("WebGLState:",W)}}function ue(W){return h[W]!==void 0?h[W]:i.getParameter(W)}function xe(W,Se){h[W]!==Se&&(i.pixelStorei(W,Se),h[W]=Se)}function pe(W){$e.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),$e.copy(W))}function ye(W){me.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),me.copy(W))}function be(W,Se){let fe=u.get(Se);fe===void 0&&(fe=new WeakMap,u.set(Se,fe));let Ae=fe.get(W);Ae===void 0&&(Ae=i.getUniformBlockIndex(Se,W.name),fe.set(W,Ae))}function He(W,Se){let Ae=u.get(Se).get(W);c.get(Se)!==Ae&&(i.uniformBlockBinding(Se,Ae,W.__bindingPointIndex),c.set(Se,Ae))}function Xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),l={},h={},ie=null,ae={},f={},p=new WeakMap,g=[],y=null,v=!1,m=null,x=null,R=null,E=null,C=null,L=null,N=null,S=new ze(0,0,0),_=0,b=!1,A=null,M=null,P=null,U=null,B=null,$e.set(0,0,i.canvas.width,i.canvas.height),me.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:j,disable:de,bindFramebuffer:ge,drawBuffers:Me,useProgram:Ge,setBlending:rt,setMaterial:gt,setFlipSided:nt,setCullFace:vt,setLineWidth:Ct,setPolygonOffset:Qt,setScissorTest:Mt,activeTexture:kt,bindTexture:X,unbindTexture:zt,compressedTexImage2D:ut,compressedTexImage3D:F,texImage2D:V,texImage3D:Z,pixelStorei:xe,getParameter:ue,updateUBOMapping:be,uniformBlockBinding:He,texStorage2D:z,texStorage3D:Y,texSubImage2D:T,texSubImage3D:D,compressedTexSubImage2D:O,compressedTexSubImage3D:H,scissor:pe,viewport:ye,reset:Xe}}function eM(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Je,l=new WeakMap,h=new Set,f,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(F,T){return g?new OffscreenCanvas(F,T):Hs("canvas")}function v(F,T,D){let O=1,H=ut(F);if((H.width>D||H.height>D)&&(O=D/Math.max(H.width,H.height)),O<1)if(typeof HTMLImageElement!="undefined"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&F instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&F instanceof ImageBitmap||typeof VideoFrame!="undefined"&&F instanceof VideoFrame){let z=Math.floor(O*H.width),Y=Math.floor(O*H.height);f===void 0&&(f=y(z,Y));let V=T?y(z,Y):f;return V.width=z,V.height=Y,V.getContext("2d").drawImage(F,0,0,z,Y),Ze("WebGLRenderer: Texture has been resized from ("+H.width+"x"+H.height+") to ("+z+"x"+Y+")."),V}else return"data"in F&&Ze("WebGLRenderer: Image in DataTexture is too big ("+H.width+"x"+H.height+")."),F;return F}function m(F){return F.generateMipmaps}function x(F){i.generateMipmap(F)}function R(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(F,T,D,O,H,z=!1){if(F!==null){if(i[F]!==void 0)return i[F];Ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Y;O&&(Y=e.get("EXT_texture_norm16"),Y||Ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let V=T;if(T===i.RED&&(D===i.FLOAT&&(V=i.R32F),D===i.HALF_FLOAT&&(V=i.R16F),D===i.UNSIGNED_BYTE&&(V=i.R8),D===i.UNSIGNED_SHORT&&Y&&(V=Y.R16_EXT),D===i.SHORT&&Y&&(V=Y.R16_SNORM_EXT)),T===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(V=i.R8UI),D===i.UNSIGNED_SHORT&&(V=i.R16UI),D===i.UNSIGNED_INT&&(V=i.R32UI),D===i.BYTE&&(V=i.R8I),D===i.SHORT&&(V=i.R16I),D===i.INT&&(V=i.R32I)),T===i.RG&&(D===i.FLOAT&&(V=i.RG32F),D===i.HALF_FLOAT&&(V=i.RG16F),D===i.UNSIGNED_BYTE&&(V=i.RG8),D===i.UNSIGNED_SHORT&&Y&&(V=Y.RG16_EXT),D===i.SHORT&&Y&&(V=Y.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(D===i.UNSIGNED_BYTE&&(V=i.RG8UI),D===i.UNSIGNED_SHORT&&(V=i.RG16UI),D===i.UNSIGNED_INT&&(V=i.RG32UI),D===i.BYTE&&(V=i.RG8I),D===i.SHORT&&(V=i.RG16I),D===i.INT&&(V=i.RG32I)),T===i.RGB_INTEGER&&(D===i.UNSIGNED_BYTE&&(V=i.RGB8UI),D===i.UNSIGNED_SHORT&&(V=i.RGB16UI),D===i.UNSIGNED_INT&&(V=i.RGB32UI),D===i.BYTE&&(V=i.RGB8I),D===i.SHORT&&(V=i.RGB16I),D===i.INT&&(V=i.RGB32I)),T===i.RGBA_INTEGER&&(D===i.UNSIGNED_BYTE&&(V=i.RGBA8UI),D===i.UNSIGNED_SHORT&&(V=i.RGBA16UI),D===i.UNSIGNED_INT&&(V=i.RGBA32UI),D===i.BYTE&&(V=i.RGBA8I),D===i.SHORT&&(V=i.RGBA16I),D===i.INT&&(V=i.RGBA32I)),T===i.RGB&&(D===i.UNSIGNED_SHORT&&Y&&(V=Y.RGB16_EXT),D===i.SHORT&&Y&&(V=Y.RGB16_SNORM_EXT),D===i.UNSIGNED_INT_5_9_9_9_REV&&(V=i.RGB9_E5),D===i.UNSIGNED_INT_10F_11F_11F_REV&&(V=i.R11F_G11F_B10F)),T===i.RGBA){let Z=z?Fa:ct.getTransfer(H);D===i.FLOAT&&(V=i.RGBA32F),D===i.HALF_FLOAT&&(V=i.RGBA16F),D===i.UNSIGNED_BYTE&&(V=Z===At?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT&&Y&&(V=Y.RGBA16_EXT),D===i.SHORT&&Y&&(V=Y.RGBA16_SNORM_EXT),D===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function C(F,T){let D;return F?T===null||T===wi||T===sa?D=i.DEPTH24_STENCIL8:T===jn?D=i.DEPTH32F_STENCIL8:T===ra&&(D=i.DEPTH24_STENCIL8,Ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===wi||T===sa?D=i.DEPTH_COMPONENT24:T===jn?D=i.DEPTH_COMPONENT32F:T===ra&&(D=i.DEPTH_COMPONENT16),D}function L(F,T){return m(F)===!0||F.isFramebufferTexture&&F.minFilter!==qt&&F.minFilter!==cn?Math.log2(Math.max(T.width,T.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?T.mipmaps.length:1}function N(F){let T=F.target;T.removeEventListener("dispose",N),_(T),T.isVideoTexture&&l.delete(T),T.isHTMLTexture&&h.delete(T)}function S(F){let T=F.target;T.removeEventListener("dispose",S),A(T)}function _(F){let T=n.get(F);if(T.__webglInit===void 0)return;let D=F.source,O=p.get(D);if(O){let H=O[T.__cacheKey];H.usedTimes--,H.usedTimes===0&&b(F),Object.keys(O).length===0&&p.delete(D)}n.remove(F)}function b(F){let T=n.get(F);i.deleteTexture(T.__webglTexture);let D=F.source,O=p.get(D);delete O[T.__cacheKey],a.memory.textures--}function A(F){let T=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(T.__webglFramebuffer[O]))for(let H=0;H<T.__webglFramebuffer[O].length;H++)i.deleteFramebuffer(T.__webglFramebuffer[O][H]);else i.deleteFramebuffer(T.__webglFramebuffer[O]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[O])}else{if(Array.isArray(T.__webglFramebuffer))for(let O=0;O<T.__webglFramebuffer.length;O++)i.deleteFramebuffer(T.__webglFramebuffer[O]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let O=0;O<T.__webglColorRenderbuffer.length;O++)T.__webglColorRenderbuffer[O]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[O]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let D=F.textures;for(let O=0,H=D.length;O<H;O++){let z=n.get(D[O]);z.__webglTexture&&(i.deleteTexture(z.__webglTexture),a.memory.textures--),n.remove(D[O])}n.remove(F)}let M=0;function P(){M=0}function U(){return M}function B(F){M=F}function K(){let F=M;return F>=r.maxTextures&&Ze("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+r.maxTextures),M+=1,F}function J(F){let T=[];return T.push(F.wrapS),T.push(F.wrapT),T.push(F.wrapR||0),T.push(F.magFilter),T.push(F.minFilter),T.push(F.anisotropy),T.push(F.internalFormat),T.push(F.format),T.push(F.type),T.push(F.generateMipmaps),T.push(F.premultiplyAlpha),T.push(F.flipY),T.push(F.unpackAlignment),T.push(F.colorSpace),T.join()}function ne(F,T){let D=n.get(F);if(F.isVideoTexture&&X(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&D.__version!==F.version){let O=F.image;if(O===null)Ze("WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)Ze("WebGLRenderer: Texture marked for update but image is incomplete");else{de(D,F,T);return}}else F.isExternalTexture&&(D.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+T)}function se(F,T){let D=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&D.__version!==F.version){de(D,F,T);return}else F.isExternalTexture&&(D.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+T)}function ie(F,T){let D=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&D.__version!==F.version){de(D,F,T);return}t.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+T)}function ae(F,T){let D=n.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&D.__version!==F.version){ge(D,F,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+T)}let Re={[ci]:i.REPEAT,[li]:i.CLAMP_TO_EDGE,[Os]:i.MIRRORED_REPEAT},Ue={[qt]:i.NEAREST,[Yl]:i.NEAREST_MIPMAP_NEAREST,[cs]:i.NEAREST_MIPMAP_LINEAR,[cn]:i.LINEAR,[ia]:i.LINEAR_MIPMAP_NEAREST,[Ei]:i.LINEAR_MIPMAP_LINEAR},$e={[vp]:i.NEVER,[Sp]:i.ALWAYS,[_p]:i.LESS,[Dc]:i.LEQUAL,[xp]:i.EQUAL,[Uc]:i.GEQUAL,[yp]:i.GREATER,[Mp]:i.NOTEQUAL};function me(F,T){if(T.type===jn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===cn||T.magFilter===ia||T.magFilter===cs||T.magFilter===Ei||T.minFilter===cn||T.minFilter===ia||T.minFilter===cs||T.minFilter===Ei)&&Ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,Re[T.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,Re[T.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,Re[T.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,Ue[T.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,Ue[T.minFilter]),T.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,$e[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===qt||T.minFilter!==cs&&T.minFilter!==Ei||T.type===jn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let D=e.get("EXT_texture_filter_anisotropic");i.texParameterf(F,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function le(F,T){let D=!1;F.__webglInit===void 0&&(F.__webglInit=!0,T.addEventListener("dispose",N));let O=T.source,H=p.get(O);H===void 0&&(H={},p.set(O,H));let z=J(T);if(z!==F.__cacheKey){H[z]===void 0&&(H[z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,D=!0),H[z].usedTimes++;let Y=H[F.__cacheKey];Y!==void 0&&(H[F.__cacheKey].usedTimes--,Y.usedTimes===0&&b(T)),F.__cacheKey=z,F.__webglTexture=H[z].texture}return D}function G(F,T,D){return Math.floor(Math.floor(F/D)/T)}function j(F,T,D,O){let z=F.updateRanges;if(z.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,D,O,T.data);else{z.sort((xe,pe)=>xe.start-pe.start);let Y=0;for(let xe=1;xe<z.length;xe++){let pe=z[Y],ye=z[xe],be=pe.start+pe.count,He=G(ye.start,T.width,4),Xe=G(pe.start,T.width,4);ye.start<=be+1&&He===Xe&&G(ye.start+ye.count-1,T.width,4)===He?pe.count=Math.max(pe.count,ye.start+ye.count-pe.start):(++Y,z[Y]=ye)}z.length=Y+1;let V=t.getParameter(i.UNPACK_ROW_LENGTH),Z=t.getParameter(i.UNPACK_SKIP_PIXELS),ue=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let xe=0,pe=z.length;xe<pe;xe++){let ye=z[xe],be=Math.floor(ye.start/4),He=Math.ceil(ye.count/4),Xe=be%T.width,W=Math.floor(be/T.width),Se=He,fe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Xe),t.pixelStorei(i.UNPACK_SKIP_ROWS,W),t.texSubImage2D(i.TEXTURE_2D,0,Xe,W,Se,fe,D,O,T.data)}F.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,V),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(i.UNPACK_SKIP_ROWS,ue)}}function de(F,T,D){let O=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(O=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(O=i.TEXTURE_3D);let H=le(F,T),z=T.source;t.bindTexture(O,F.__webglTexture,i.TEXTURE0+D);let Y=n.get(z);if(z.version!==Y.__version||H===!0){if(t.activeTexture(i.TEXTURE0+D),(typeof ImageBitmap!="undefined"&&T.image instanceof ImageBitmap)===!1){let fe=ct.getPrimaries(ct.workingColorSpace),Ae=T.colorSpace===Qn?null:ct.getPrimaries(T.colorSpace),Pe=T.colorSpace===Qn||fe===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe)}t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let Z=v(T.image,!1,r.maxTextureSize);Z=zt(T,Z);let ue=s.convert(T.format,T.colorSpace),xe=s.convert(T.type),pe=E(T.internalFormat,ue,xe,T.normalized,T.colorSpace,T.isVideoTexture);me(O,T);let ye,be=T.mipmaps,He=T.isVideoTexture!==!0,Xe=Y.__version===void 0||H===!0,W=z.dataReady,Se=L(T,Z);if(T.isDepthTexture)pe=C(T.format===Lr,T.type),Xe&&(He?t.texStorage2D(i.TEXTURE_2D,1,pe,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,pe,Z.width,Z.height,0,ue,xe,null));else if(T.isDataTexture)if(be.length>0){He&&Xe&&t.texStorage2D(i.TEXTURE_2D,Se,pe,be[0].width,be[0].height);for(let fe=0,Ae=be.length;fe<Ae;fe++)ye=be[fe],He?W&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,ye.width,ye.height,ue,xe,ye.data):t.texImage2D(i.TEXTURE_2D,fe,pe,ye.width,ye.height,0,ue,xe,ye.data);T.generateMipmaps=!1}else He?(Xe&&t.texStorage2D(i.TEXTURE_2D,Se,pe,Z.width,Z.height),W&&j(T,Z,ue,xe)):t.texImage2D(i.TEXTURE_2D,0,pe,Z.width,Z.height,0,ue,xe,Z.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){He&&Xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,pe,be[0].width,be[0].height,Z.depth);for(let fe=0,Ae=be.length;fe<Ae;fe++)if(ye=be[fe],T.format!==$n)if(ue!==null)if(He){if(W)if(T.layerUpdates.size>0){let Pe=wh(ye.width,ye.height,T.format,T.type);for(let ve of T.layerUpdates){let Ke=ye.data.subarray(ve*Pe/ye.data.BYTES_PER_ELEMENT,(ve+1)*Pe/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,ve,ye.width,ye.height,1,ue,Ke)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,ye.width,ye.height,Z.depth,ue,ye.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,fe,pe,ye.width,ye.height,Z.depth,0,ye.data,0,0);else Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?W&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,ye.width,ye.height,Z.depth,ue,xe,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,fe,pe,ye.width,ye.height,Z.depth,0,ue,xe,ye.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{He&&Xe&&t.texStorage2D(i.TEXTURE_2D,Se,pe,be[0].width,be[0].height);for(let fe=0,Ae=be.length;fe<Ae;fe++)ye=be[fe],T.format!==$n?ue!==null?He?W&&t.compressedTexSubImage2D(i.TEXTURE_2D,fe,0,0,ye.width,ye.height,ue,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,fe,pe,ye.width,ye.height,0,ye.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?W&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,ye.width,ye.height,ue,xe,ye.data):t.texImage2D(i.TEXTURE_2D,fe,pe,ye.width,ye.height,0,ue,xe,ye.data)}else if(T.isDataArrayTexture)if(He){if(Xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,pe,Z.width,Z.height,Z.depth),W)if(T.layerUpdates.size>0){let fe=wh(Z.width,Z.height,T.format,T.type);for(let Ae of T.layerUpdates){let Pe=Z.data.subarray(Ae*fe/Z.data.BYTES_PER_ELEMENT,(Ae+1)*fe/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ae,Z.width,Z.height,1,ue,xe,Pe)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ue,xe,Z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,pe,Z.width,Z.height,Z.depth,0,ue,xe,Z.data);else if(T.isData3DTexture)He?(Xe&&t.texStorage3D(i.TEXTURE_3D,Se,pe,Z.width,Z.height,Z.depth),W&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ue,xe,Z.data)):t.texImage3D(i.TEXTURE_3D,0,pe,Z.width,Z.height,Z.depth,0,ue,xe,Z.data);else if(T.isFramebufferTexture){if(Xe)if(He)t.texStorage2D(i.TEXTURE_2D,Se,pe,Z.width,Z.height);else{let fe=Z.width,Ae=Z.height;for(let Pe=0;Pe<Se;Pe++)t.texImage2D(i.TEXTURE_2D,Pe,pe,fe,Ae,0,ue,xe,null),fe>>=1,Ae>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let fe=i.canvas;if(fe.hasAttribute("layoutsubtree")||fe.setAttribute("layoutsubtree","true"),Z.parentNode!==fe){fe.appendChild(Z),h.add(T),fe.onpaint=Ae=>{let Pe=Ae.changedElements;for(let ve of h)Pe.includes(ve.image)&&(ve.needsUpdate=!0)},fe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Z);else{let Pe=i.RGBA,ve=i.RGBA,Ke=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Pe,ve,Ke,Z)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(be.length>0){if(He&&Xe){let fe=ut(be[0]);t.texStorage2D(i.TEXTURE_2D,Se,pe,fe.width,fe.height)}for(let fe=0,Ae=be.length;fe<Ae;fe++)ye=be[fe],He?W&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,ue,xe,ye):t.texImage2D(i.TEXTURE_2D,fe,pe,ue,xe,ye);T.generateMipmaps=!1}else if(He){if(Xe){let fe=ut(Z);t.texStorage2D(i.TEXTURE_2D,Se,pe,fe.width,fe.height)}W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,xe,Z)}else t.texImage2D(i.TEXTURE_2D,0,pe,ue,xe,Z);m(T)&&x(O),Y.__version=z.version,T.onUpdate&&T.onUpdate(T)}F.__version=T.version}function ge(F,T,D){if(T.image.length!==6)return;let O=le(F,T),H=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+D);let z=n.get(H);if(H.version!==z.__version||O===!0){t.activeTexture(i.TEXTURE0+D);let Y=ct.getPrimaries(ct.workingColorSpace),V=T.colorSpace===Qn?null:ct.getPrimaries(T.colorSpace),Z=T.colorSpace===Qn||Y===V?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let ue=T.isCompressedTexture||T.image[0].isCompressedTexture,xe=T.image[0]&&T.image[0].isDataTexture,pe=[];for(let ve=0;ve<6;ve++)!ue&&!xe?pe[ve]=v(T.image[ve],!0,r.maxCubemapSize):pe[ve]=xe?T.image[ve].image:T.image[ve],pe[ve]=zt(T,pe[ve]);let ye=pe[0],be=s.convert(T.format,T.colorSpace),He=s.convert(T.type),Xe=E(T.internalFormat,be,He,T.normalized,T.colorSpace),W=T.isVideoTexture!==!0,Se=z.__version===void 0||O===!0,fe=H.dataReady,Ae=L(T,ye);me(i.TEXTURE_CUBE_MAP,T);let Pe;if(ue){W&&Se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,Xe,ye.width,ye.height);for(let ve=0;ve<6;ve++){Pe=pe[ve].mipmaps;for(let Ke=0;Ke<Pe.length;Ke++){let We=Pe[Ke];T.format!==$n?be!==null?W?fe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ke,0,0,We.width,We.height,be,We.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ke,Xe,We.width,We.height,0,We.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ke,0,0,We.width,We.height,be,He,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ke,Xe,We.width,We.height,0,be,He,We.data)}}}else{if(Pe=T.mipmaps,W&&Se){Pe.length>0&&Ae++;let ve=ut(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,Xe,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(xe){W?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,pe[ve].width,pe[ve].height,be,He,pe[ve].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Xe,pe[ve].width,pe[ve].height,0,be,He,pe[ve].data);for(let Ke=0;Ke<Pe.length;Ke++){let It=Pe[Ke].image[ve].image;W?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ke+1,0,0,It.width,It.height,be,He,It.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ke+1,Xe,It.width,It.height,0,be,He,It.data)}}else{W?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,be,He,pe[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Xe,be,He,pe[ve]);for(let Ke=0;Ke<Pe.length;Ke++){let We=Pe[Ke];W?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ke+1,0,0,be,He,We.image[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ke+1,Xe,be,He,We.image[ve])}}}m(T)&&x(i.TEXTURE_CUBE_MAP),z.__version=H.version,T.onUpdate&&T.onUpdate(T)}F.__version=T.version}function Me(F,T,D,O,H,z){let Y=s.convert(D.format,D.colorSpace),V=s.convert(D.type),Z=E(D.internalFormat,Y,V,D.normalized,D.colorSpace),ue=n.get(T),xe=n.get(D);if(xe.__renderTarget=T,!ue.__hasExternalTextures){let pe=Math.max(1,T.width>>z),ye=Math.max(1,T.height>>z);H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?t.texImage3D(H,z,Z,pe,ye,T.depth,0,Y,V,null):t.texImage2D(H,z,Z,pe,ye,0,Y,V,null)}t.bindFramebuffer(i.FRAMEBUFFER,F),kt(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,O,H,xe.__webglTexture,0,Mt(T)):(H===i.TEXTURE_2D||H>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,O,H,xe.__webglTexture,z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(F,T,D){if(i.bindRenderbuffer(i.RENDERBUFFER,F),T.depthBuffer){let O=T.depthTexture,H=O&&O.isDepthTexture?O.type:null,z=C(T.stencilBuffer,H),Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;kt(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt(T),z,T.width,T.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt(T),z,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,z,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,F)}else{let O=T.textures;for(let H=0;H<O.length;H++){let z=O[H],Y=s.convert(z.format,z.colorSpace),V=s.convert(z.type),Z=E(z.internalFormat,Y,V,z.normalized,z.colorSpace);kt(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt(T),Z,T.width,T.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt(T),Z,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Z,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Qe(F,T,D){let O=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,F),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let H=n.get(T.depthTexture);if(H.__renderTarget=T,(!H.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),O){if(H.__webglInit===void 0&&(H.__webglInit=!0,T.depthTexture.addEventListener("dispose",N)),H.__webglTexture===void 0){H.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),me(i.TEXTURE_CUBE_MAP,T.depthTexture);let ue=s.convert(T.depthTexture.format),xe=s.convert(T.depthTexture.type),pe;T.depthTexture.format===Oi?pe=i.DEPTH_COMPONENT24:T.depthTexture.format===Lr&&(pe=i.DEPTH24_STENCIL8);for(let ye=0;ye<6;ye++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,pe,T.width,T.height,0,ue,xe,null)}}else ne(T.depthTexture,0);let z=H.__webglTexture,Y=Mt(T),V=O?i.TEXTURE_CUBE_MAP_POSITIVE_X+D:i.TEXTURE_2D,Z=T.depthTexture.format===Lr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===Oi)kt(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,V,z,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,Z,V,z,0);else if(T.depthTexture.format===Lr)kt(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,V,z,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,Z,V,z,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Oe(F){let T=n.get(F),D=F.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==F.depthTexture){let O=F.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),O){let H=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,O.removeEventListener("dispose",H)};O.addEventListener("dispose",H),T.__depthDisposeCallback=H}T.__boundDepthTexture=O}if(F.depthTexture&&!T.__autoAllocateDepthBuffer)if(D)for(let O=0;O<6;O++)Qe(T.__webglFramebuffer[O],F,O);else{let O=F.texture.mipmaps;O&&O.length>0?Qe(T.__webglFramebuffer[0],F,0):Qe(T.__webglFramebuffer,F,0)}else if(D){T.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[O]),T.__webglDepthbuffer[O]===void 0)T.__webglDepthbuffer[O]=i.createRenderbuffer(),Ge(T.__webglDepthbuffer[O],F,!1);else{let H=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=T.__webglDepthbuffer[O];i.bindRenderbuffer(i.RENDERBUFFER,z),i.framebufferRenderbuffer(i.FRAMEBUFFER,H,i.RENDERBUFFER,z)}}else{let O=F.texture.mipmaps;if(O&&O.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Ge(T.__webglDepthbuffer,F,!1);else{let H=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,z),i.framebufferRenderbuffer(i.FRAMEBUFFER,H,i.RENDERBUFFER,z)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(F,T,D){let O=n.get(F);T!==void 0&&Me(O.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&Oe(F)}function gt(F){let T=F.texture,D=n.get(F),O=n.get(T);F.addEventListener("dispose",S);let H=F.textures,z=F.isWebGLCubeRenderTarget===!0,Y=H.length>1;if(Y||(O.__webglTexture===void 0&&(O.__webglTexture=i.createTexture()),O.__version=T.version,a.memory.textures++),z){D.__webglFramebuffer=[];for(let V=0;V<6;V++)if(T.mipmaps&&T.mipmaps.length>0){D.__webglFramebuffer[V]=[];for(let Z=0;Z<T.mipmaps.length;Z++)D.__webglFramebuffer[V][Z]=i.createFramebuffer()}else D.__webglFramebuffer[V]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){D.__webglFramebuffer=[];for(let V=0;V<T.mipmaps.length;V++)D.__webglFramebuffer[V]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(Y)for(let V=0,Z=H.length;V<Z;V++){let ue=n.get(H[V]);ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture(),a.memory.textures++)}if(F.samples>0&&kt(F)===!1){D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let V=0;V<H.length;V++){let Z=H[V];D.__webglColorRenderbuffer[V]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[V]);let ue=s.convert(Z.format,Z.colorSpace),xe=s.convert(Z.type),pe=E(Z.internalFormat,ue,xe,Z.normalized,Z.colorSpace,F.isXRRenderTarget===!0),ye=Mt(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,pe,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+V,i.RENDERBUFFER,D.__webglColorRenderbuffer[V])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),Ge(D.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(z){t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture),me(i.TEXTURE_CUBE_MAP,T);for(let V=0;V<6;V++)if(T.mipmaps&&T.mipmaps.length>0)for(let Z=0;Z<T.mipmaps.length;Z++)Me(D.__webglFramebuffer[V][Z],F,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+V,Z);else Me(D.__webglFramebuffer[V],F,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0);m(T)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Y){for(let V=0,Z=H.length;V<Z;V++){let ue=H[V],xe=n.get(ue),pe=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(pe=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,xe.__webglTexture),me(pe,ue),Me(D.__webglFramebuffer,F,ue,i.COLOR_ATTACHMENT0+V,pe,0),m(ue)&&x(pe)}t.unbindTexture()}else{let V=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(V=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(V,O.__webglTexture),me(V,T),T.mipmaps&&T.mipmaps.length>0)for(let Z=0;Z<T.mipmaps.length;Z++)Me(D.__webglFramebuffer[Z],F,T,i.COLOR_ATTACHMENT0,V,Z);else Me(D.__webglFramebuffer,F,T,i.COLOR_ATTACHMENT0,V,0);m(T)&&x(V),t.unbindTexture()}F.depthBuffer&&Oe(F)}function nt(F){let T=F.textures;for(let D=0,O=T.length;D<O;D++){let H=T[D];if(m(H)){let z=R(F),Y=n.get(H).__webglTexture;t.bindTexture(z,Y),x(z),t.unbindTexture()}}}let vt=[],Ct=[];function Qt(F){if(F.samples>0){if(kt(F)===!1){let T=F.textures,D=F.width,O=F.height,H=i.COLOR_BUFFER_BIT,z=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=n.get(F),V=T.length>1;if(V)for(let ue=0;ue<T.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Y.__webglMultisampledFramebuffer);let Z=F.texture.mipmaps;Z&&Z.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Y.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Y.__webglFramebuffer);for(let ue=0;ue<T.length;ue++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(H|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(H|=i.STENCIL_BUFFER_BIT)),V){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Y.__webglColorRenderbuffer[ue]);let xe=n.get(T[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,xe,0)}i.blitFramebuffer(0,0,D,O,0,0,D,O,H,i.NEAREST),c===!0&&(vt.length=0,Ct.length=0,vt.push(i.COLOR_ATTACHMENT0+ue),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(vt.push(z),Ct.push(z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ct)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,vt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),V)for(let ue=0;ue<T.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,Y.__webglColorRenderbuffer[ue]);let xe=n.get(T[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,xe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Y.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&c){let T=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Mt(F){return Math.min(r.maxSamples,F.samples)}function kt(F){let T=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function X(F){let T=a.render.frame;l.get(F)!==T&&(l.set(F,T),F.update())}function zt(F,T){let D=F.colorSpace,O=F.format,H=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||D!==Fn&&D!==Qn&&(ct.getTransfer(D)===At?(O!==$n||H!==Wn)&&Ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",D)),T}function ut(F){return typeof HTMLImageElement!="undefined"&&F instanceof HTMLImageElement?(u.width=F.naturalWidth||F.width,u.height=F.naturalHeight||F.height):typeof VideoFrame!="undefined"&&F instanceof VideoFrame?(u.width=F.displayWidth,u.height=F.displayHeight):(u.width=F.width,u.height=F.height),u}this.allocateTextureUnit=K,this.resetTextureUnits=P,this.getTextureUnits=U,this.setTextureUnits=B,this.setTexture2D=ne,this.setTexture2DArray=se,this.setTexture3D=ie,this.setTextureCube=ae,this.rebindTextures=rt,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=kt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function tM(i,e){function t(n,r=Qn){let s,a=ct.getTransfer(r);if(n===Wn)return i.UNSIGNED_BYTE;if(n===Zl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Jl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ph)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===mh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===fh)return i.BYTE;if(n===dh)return i.SHORT;if(n===ra)return i.UNSIGNED_SHORT;if(n===Kl)return i.INT;if(n===wi)return i.UNSIGNED_INT;if(n===jn)return i.FLOAT;if(n===En)return i.HALF_FLOAT;if(n===gh)return i.ALPHA;if(n===vh)return i.RGB;if(n===$n)return i.RGBA;if(n===Oi)return i.DEPTH_COMPONENT;if(n===Lr)return i.DEPTH_STENCIL;if(n===jl)return i.RED;if(n===$l)return i.RED_INTEGER;if(n===Nr)return i.RG;if(n===Ql)return i.RG_INTEGER;if(n===ec)return i.RGBA_INTEGER;if(n===mo||n===go||n===vo||n===_o)if(a===At)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===mo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===mo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===go)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_o)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===tc||n===nc||n===ic||n===rc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===tc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ic)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===rc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sc||n===ac||n===oc||n===lc||n===cc||n===xo||n===uc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===sc||n===ac)return a===At?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===oc)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===lc)return s.COMPRESSED_R11_EAC;if(n===cc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===xo)return s.COMPRESSED_RG11_EAC;if(n===uc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===hc||n===fc||n===dc||n===pc||n===mc||n===gc||n===vc||n===_c||n===xc||n===yc||n===Mc||n===Sc||n===bc||n===Tc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===hc)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fc)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===dc)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pc)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===mc)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===gc)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vc)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_c)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xc)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===yc)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mc)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sc)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bc)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Tc)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ec||n===wc||n===Ac)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ec)return a===At?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ac)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rc||n===Cc||n===yo||n===Ic)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Rc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Cc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ic)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===sa?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var nM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,qh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Za(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new tn({vertexShader:nM,fragmentShader:iM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Be(new ns(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xh=class extends bi{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",c=1,u=null,l=null,h=null,f=null,p=null,g=null,y=typeof XRWebGLBinding!="undefined",v=new qh,m={},x=t.getContextAttributes(),R=null,E=null,C=[],L=[],N=new Je,S=null,_=null,b=new ln;b.viewport=new Dt;let A=new ln;A.viewport=new Dt;let M=[b,A],P=new kl,U=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let j=C[G];return j===void 0&&(j=new zs,C[G]=j),j.getTargetRaySpace()},this.getControllerGrip=function(G){let j=C[G];return j===void 0&&(j=new zs,C[G]=j),j.getGripSpace()},this.getHand=function(G){let j=C[G];return j===void 0&&(j=new zs,C[G]=j),j.getHandSpace()};function K(G){let j=L.indexOf(G.inputSource);if(j===-1)return;let de=C[j];de!==void 0&&(de.update(G.inputSource,G.frame,u||a),de.dispatchEvent({type:G.type,data:G.inputSource}))}function J(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",ne);for(let G=0;G<C.length;G++){let j=L[G];j!==null&&(L[G]=null,C[G].disconnect(j))}U=null,B=null,v.reset();for(let G in m)delete m[G];if(e.setRenderTarget(R),p=null,f=null,h=null,r=null,E=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(N.width,N.height,!1),_!==null){let G=_.camera;G.fov=_.fov,G.zoom=_.zoom,G.updateProjectionMatrix(),_=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&Ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&Ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(G){u=G},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(R=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",J),r.addEventListener("inputsourceschange",ne),x.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(N),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,ge=null,Me=null;x.depth&&(Me=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=x.stencil?Lr:Oi,ge=x.stencil?sa:wi);let Ge={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Ge),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new pn(f.textureWidth,f.textureHeight,{format:$n,type:Wn,depthTexture:new wr(f.textureWidth,f.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let de={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,de),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new pn(p.framebufferWidth,p.framebufferHeight,{format:$n,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),le.setContext(r),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ne(G){for(let j=0;j<G.removed.length;j++){let de=G.removed[j],ge=L.indexOf(de);ge>=0&&(L[ge]=null,C[ge].disconnect(de))}for(let j=0;j<G.added.length;j++){let de=G.added[j],ge=L.indexOf(de);if(ge===-1){for(let Ge=0;Ge<C.length;Ge++)if(Ge>=L.length){L.push(de),ge=Ge;break}else if(L[Ge]===null){L[Ge]=de,ge=Ge;break}if(ge===-1)break}let Me=C[ge];Me&&Me.connect(de)}}let se=new $,ie=new $;function ae(G,j,de){se.setFromMatrixPosition(j.matrixWorld),ie.setFromMatrixPosition(de.matrixWorld);let ge=se.distanceTo(ie),Me=j.projectionMatrix.elements,Ge=de.projectionMatrix.elements,Qe=Me[14]/(Me[10]-1),Oe=Me[14]/(Me[10]+1),rt=(Me[9]+1)/Me[5],gt=(Me[9]-1)/Me[5],nt=(Me[8]-1)/Me[0],vt=(Ge[8]+1)/Ge[0],Ct=Qe*nt,Qt=Qe*vt,Mt=ge/(-nt+vt),kt=Mt*-nt;if(j.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(kt),G.translateZ(Mt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Me[10]===-1)G.projectionMatrix.copy(j.projectionMatrix),G.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let X=Qe+Mt,zt=Oe+Mt,ut=Ct-kt,F=Qt+(ge-kt),T=rt*Oe/zt*X,D=gt*Oe/zt*X;G.projectionMatrix.makePerspective(ut,F,T,D,X,zt),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function Re(G,j){j===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(j.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let j=G.near,de=G.far;v.texture!==null&&(v.depthNear>0&&(j=v.depthNear),v.depthFar>0&&(de=v.depthFar)),P.near=A.near=b.near=j,P.far=A.far=b.far=de,(U!==P.near||B!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),U=P.near,B=P.far),P.layers.mask=G.layers.mask|6,b.layers.mask=P.layers.mask&-5,A.layers.mask=P.layers.mask&-3;let ge=G.parent,Me=P.cameras;Re(P,ge);for(let Ge=0;Ge<Me.length;Ge++)Re(Me[Ge],ge);Me.length===2?ae(P,b,A):P.projectionMatrix.copy(b.projectionMatrix),_===null&&G.isPerspectiveCamera&&(_={camera:G,fov:G.fov,zoom:G.zoom}),Ue(G,P,ge)};function Ue(G,j,de){de===null?G.matrix.copy(j.matrixWorld):(G.matrix.copy(de.matrixWorld),G.matrix.invert(),G.matrix.multiply(j.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(j.projectionMatrix),G.projectionMatrixInverse.copy(j.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=jr*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(G){c=G,f!==null&&(f.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(P)},this.getCameraTexture=function(G){return m[G]};let $e=null;function me(G,j){if(l=j.getViewerPose(u||a),g=j,l!==null){let de=l.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let ge=!1;de.length!==P.cameras.length&&(P.cameras.length=0,ge=!0);for(let Oe=0;Oe<de.length;Oe++){let rt=de[Oe],gt=null;if(p!==null)gt=p.getViewport(rt);else{let vt=h.getViewSubImage(f,rt);gt=vt.viewport,Oe===0&&(e.setRenderTargetTextures(E,vt.colorTexture,vt.depthStencilTexture),e.setRenderTarget(E))}let nt=M[Oe];nt===void 0&&(nt=new ln,nt.layers.enable(Oe),nt.viewport=new Dt,M[Oe]=nt),nt.matrix.fromArray(rt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(rt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(gt.x,gt.y,gt.width,gt.height),Oe===0&&(P.matrix.copy(nt.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),ge===!0&&P.cameras.push(nt)}let Me=r.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){h=n.getBinding();let Oe=h.getDepthInformation(de[0]);Oe&&Oe.isValid&&Oe.texture&&v.init(Oe,r.renderState)}if(Me&&Me.includes("camera-access")&&y){e.state.unbindTexture(),h=n.getBinding();for(let Oe=0;Oe<de.length;Oe++){let rt=de[Oe].camera;if(rt){let gt=m[rt];gt||(gt=new Za,m[rt]=gt);let nt=h.getCameraImage(rt);gt.sourceTexture=nt}}}}for(let de=0;de<C.length;de++){let ge=L[de],Me=C[de];ge!==null&&Me!==void 0&&Me.update(ge,j,u||a)}$e&&$e(G,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}let le=new jp;le.setAnimationLoop(me),this.setAnimationLoop=function(G){$e=G},this.dispose=function(){}}},rM=new lt,im=new at;im.set(-1,0,0,0,1,0,0,0,1);function sM(i,e){function t(v,m){v.matrixAutoUpdate===!0&&v.updateMatrix(),m.value.copy(v.matrix)}function n(v,m){m.color.getRGB(v.fogColor.value,bh(i)),m.isFog?(v.fogNear.value=m.near,v.fogFar.value=m.far):m.isFogExp2&&(v.fogDensity.value=m.density)}function r(v,m,x,R,E){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(v,m):m.isMeshLambertMaterial?(s(v,m),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(v,m),h(v,m)):m.isMeshPhongMaterial?(s(v,m),l(v,m),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(v,m),f(v,m),m.isMeshPhysicalMaterial&&p(v,m,E)):m.isMeshMatcapMaterial?(s(v,m),g(v,m)):m.isMeshDepthMaterial?s(v,m):m.isMeshDistanceMaterial?(s(v,m),y(v,m)):m.isMeshNormalMaterial?s(v,m):m.isLineBasicMaterial?(a(v,m),m.isLineDashedMaterial&&o(v,m)):m.isPointsMaterial?c(v,m,x,R):m.isSpriteMaterial?u(v,m):m.isShadowMaterial?(v.color.value.copy(m.color),v.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(v,m){v.opacity.value=m.opacity,m.color&&v.diffuse.value.copy(m.color),m.emissive&&v.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(v.map.value=m.map,t(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.bumpMap&&(v.bumpMap.value=m.bumpMap,t(m.bumpMap,v.bumpMapTransform),v.bumpScale.value=m.bumpScale,m.side===Tn&&(v.bumpScale.value*=-1)),m.normalMap&&(v.normalMap.value=m.normalMap,t(m.normalMap,v.normalMapTransform),v.normalScale.value.copy(m.normalScale),m.side===Tn&&v.normalScale.value.negate()),m.displacementMap&&(v.displacementMap.value=m.displacementMap,t(m.displacementMap,v.displacementMapTransform),v.displacementScale.value=m.displacementScale,v.displacementBias.value=m.displacementBias),m.emissiveMap&&(v.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,v.emissiveMapTransform)),m.specularMap&&(v.specularMap.value=m.specularMap,t(m.specularMap,v.specularMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest);let x=e.get(m),R=x.envMap,E=x.envMapRotation;R&&(v.envMap.value=R,v.envMapRotation.value.setFromMatrix4(rM.makeRotationFromEuler(E)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(im),v.reflectivity.value=m.reflectivity,v.ior.value=m.ior,v.refractionRatio.value=m.refractionRatio),m.lightMap&&(v.lightMap.value=m.lightMap,v.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,v.lightMapTransform)),m.aoMap&&(v.aoMap.value=m.aoMap,v.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,v.aoMapTransform))}function a(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,m.map&&(v.map.value=m.map,t(m.map,v.mapTransform))}function o(v,m){v.dashSize.value=m.dashSize,v.totalSize.value=m.dashSize+m.gapSize,v.scale.value=m.scale}function c(v,m,x,R){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.size.value=m.size*x,v.scale.value=R*.5,m.map&&(v.map.value=m.map,t(m.map,v.uvTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function u(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.rotation.value=m.rotation,m.map&&(v.map.value=m.map,t(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function l(v,m){v.specular.value.copy(m.specular),v.shininess.value=Math.max(m.shininess,1e-4)}function h(v,m){m.gradientMap&&(v.gradientMap.value=m.gradientMap)}function f(v,m){v.metalness.value=m.metalness,m.metalnessMap&&(v.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,v.metalnessMapTransform)),v.roughness.value=m.roughness,m.roughnessMap&&(v.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,v.roughnessMapTransform)),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)}function p(v,m,x){v.ior.value=m.ior,m.sheen>0&&(v.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),v.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(v.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,v.sheenColorMapTransform)),m.sheenRoughnessMap&&(v.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,v.sheenRoughnessMapTransform))),m.clearcoat>0&&(v.clearcoat.value=m.clearcoat,v.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(v.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,v.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(v.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Tn&&v.clearcoatNormalScale.value.negate())),m.dispersion>0&&(v.dispersion.value=m.dispersion),m.retroreflectivity>0&&(v.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(v.iridescence.value=m.iridescence,v.iridescenceIOR.value=m.iridescenceIOR,v.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(v.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,v.iridescenceMapTransform)),m.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),m.transmission>0&&(v.transmission.value=m.transmission,v.transmissionSamplerMap.value=x.texture,v.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(v.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,v.transmissionMapTransform)),v.thickness.value=m.thickness,m.thicknessMap&&(v.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=m.attenuationDistance,v.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(v.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(v.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=m.specularIntensity,v.specularColor.value.copy(m.specularColor),m.specularColorMap&&(v.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,v.specularColorMapTransform)),m.specularIntensityMap&&(v.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,v.specularIntensityMapTransform))}function g(v,m){m.matcap&&(v.matcap.value=m.matcap)}function y(v,m){let x=e.get(m).light;v.referencePosition.value.setFromMatrixPosition(x.matrixWorld),v.nearDistance.value=x.shadow.camera.near,v.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function aM(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,C){let L=C.program;n.uniformBlockBinding(E,L)}function u(E,C){let L=r[E.id];L===void 0&&(v(E),L=l(E),r[E.id]=L,E.addEventListener("dispose",x));let N=C.program;n.updateUBOMapping(E,N);let S=e.render.frame;s[E.id]!==S&&(f(E),s[E.id]=S)}function l(E){let C=h();E.__bindingPointIndex=C;let L=i.createBuffer(),N=E.__size,S=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,L),i.bufferData(i.UNIFORM_BUFFER,N,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,C,L),L}function h(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let C=r[E.id],L=E.uniforms,N=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let S=0,_=L.length;S<_;S++){let b=L[S];if(Array.isArray(b))for(let A=0,M=b.length;A<M;A++)p(b[A],S,A,N);else p(b,S,0,N)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,C,L,N){if(y(E,C,L,N)===!0){let S=E.__offset,_=E.value;if(Array.isArray(_)){let b=0;for(let A=0;A<_.length;A++){let M=_[A],P=m(M);g(M,E.__data,b),typeof M!="number"&&typeof M!="boolean"&&!M.isMatrix3&&!ArrayBuffer.isView(M)&&(b+=P.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(_,E.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,E.__data)}}function g(E,C,L){typeof E=="number"||typeof E=="boolean"?C[0]=E:E.isMatrix3?(C[0]=E.elements[0],C[1]=E.elements[1],C[2]=E.elements[2],C[3]=0,C[4]=E.elements[3],C[5]=E.elements[4],C[6]=E.elements[5],C[7]=0,C[8]=E.elements[6],C[9]=E.elements[7],C[10]=E.elements[8],C[11]=0):ArrayBuffer.isView(E)?C.set(new E.constructor(E.buffer,E.byteOffset,C.length)):E.toArray(C,L)}function y(E,C,L,N){let S=E.value,_=C+"_"+L;if(N[_]===void 0)return typeof S=="number"||typeof S=="boolean"?N[_]=S:ArrayBuffer.isView(S)?N[_]=S.slice():N[_]=S.clone(),!0;{let b=N[_];if(typeof S=="number"||typeof S=="boolean"){if(b!==S)return N[_]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(b.equals(S)===!1)return b.copy(S),!0}}return!1}function v(E){let C=E.uniforms,L=0,N=16;for(let _=0,b=C.length;_<b;_++){let A=Array.isArray(C[_])?C[_]:[C[_]];for(let M=0,P=A.length;M<P;M++){let U=A[M],B=Array.isArray(U.value)?U.value:[U.value];for(let K=0,J=B.length;K<J;K++){let ne=B[K],se=m(ne),ie=L%N,ae=ie%se.boundary,Re=ie+ae;L+=ae,Re!==0&&N-Re<se.storage&&(L+=N-Re),U.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=L,L+=se.storage}}}let S=L%N;return S>0&&(L+=N-S),E.__size=L,E.__cache={},this}function m(E){let C={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(C.boundary=4,C.storage=4):E.isVector2?(C.boundary=8,C.storage=8):E.isVector3||E.isColor?(C.boundary=16,C.storage=12):E.isVector4?(C.boundary=16,C.storage=16):E.isMatrix3?(C.boundary=48,C.storage=48):E.isMatrix4?(C.boundary=64,C.storage=64):E.isTexture?Ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(C.boundary=16,C.storage=E.byteLength):Ze("WebGLRenderer: Unsupported uniform value type.",E),C}function x(E){let C=E.target;C.removeEventListener("dispose",x);let L=a.indexOf(C.__bindingPointIndex);a.splice(L,1),i.deleteBuffer(r[C.id]),delete r[C.id],delete s[C.id]}function R(){for(let E in r)i.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:c,update:u,dispose:R}}var oM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Gi=null;function lM(){return Gi===null&&(Gi=new nr(oM,16,16,Nr,En),Gi.name="DFG_LUT",Gi.minFilter=cn,Gi.magFilter=cn,Gi.wrapS=li,Gi.wrapT=li,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi}var Bc=class{constructor(e={}){let{canvas:t=bp(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Wn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=p,v=new Set([ec,Ql,$l]),m=new Set([Wn,wi,ra,sa,Zl,Jl]),x=new Uint32Array(4),R=new Int32Array(4),E=new $,C=null,L=null,N=[],S=[],_=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,A=!1,M=null,P=null,U=null,B=null;this._outputColorSpace=Wt;let K=0,J=0,ne=null,se=-1,ie=null,ae=new Dt,Re=new Dt,Ue=null,$e=new ze(0),me=0,le=t.width,G=t.height,j=1,de=null,ge=null,Me=new Dt(0,0,le,G),Ge=new Dt(0,0,le,G),Qe=!1,Oe=new qs,rt=!1,gt=!1,nt=new lt,vt=new $,Ct=new Dt,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Mt=!1;function kt(){return ne===null?j:1}let X=n;function zt(I,q){return t.getContext(I,q)}let ut,F,T,D,O,H,z,Y,V,Z,ue,xe,pe,ye,be,He,Xe,W,Se,fe,Ae,Pe,ve;try{let I={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:l,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",It,!1),t.addEventListener("webglcontextrestored",wt,!1),t.addEventListener("webglcontextcreationerror",Xn,!1),X===null){let q="webgl2";if(X=zt(q,I),X===null)throw zt(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ke()}catch(I){throw t.removeEventListener("webglcontextlost",It,!1),t.removeEventListener("webglcontextrestored",wt,!1),t.removeEventListener("webglcontextcreationerror",Xn,!1),et("WebGLRenderer: "+I.message),I}function Ke(){ut=new mx(X),ut.init(),Ae=new tM(X,ut),F=new sx(X,ut,e,Ae),T=new Qy(X,ut),F.reversedDepthBuffer&&f&&T.buffers.depth.setReversed(!0),P=X.createFramebuffer(),U=X.createFramebuffer(),B=X.createFramebuffer(),D=new _x(X),O=new By,H=new eM(X,ut,T,O,F,Ae,D),z=new px(b),Y=new yg(X),Pe=new ix(X,Y),V=new gx(X,Y,D,Pe),Z=new yx(X,V,Y,Pe,D),W=new xx(X,F,H),be=new ax(O),ue=new Hy(b,z,ut,F,Pe,be),xe=new sM(b,O),pe=new zy,ye=new Yy(ut),Xe=new nx(b,z,T,Z,g,c),He=new $y(b,Z,F),ve=new aM(X,D,F,T),Se=new rx(X,ut,D),fe=new vx(X,ut,D),D.programs=ue.programs,b.capabilities=F,b.extensions=ut,b.properties=O,b.renderLists=pe,b.shadowMap=He,b.state=T,b.info=D}y!==Wn&&(_=new Sx(y,t.width,t.height,o,r,s));let We=new Xh(b,X);this.xr=We,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let I=ut.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=ut.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(I){I!==void 0&&(j=I,this.setSize(le,G,!1))},this.getSize=function(I){return I.set(le,G)},this.setSize=function(I,q,re=!0){if(We.isPresenting){Ze("WebGLRenderer: Can't change size while VR device is presenting.");return}le=I,G=q,t.width=Math.floor(I*j),t.height=Math.floor(q*j),re===!0&&(t.style.width=I+"px",t.style.height=q+"px"),_!==null&&_.setSize(t.width,t.height),this.setViewport(0,0,I,q)},this.getDrawingBufferSize=function(I){return I.set(le*j,G*j).floor()},this.setDrawingBufferSize=function(I,q,re){le=I,G=q,j=re,t.width=Math.floor(I*re),t.height=Math.floor(q*re),this.setViewport(0,0,I,q)},this.setEffects=function(I){if(y===Wn){et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let q=0;q<I.length;q++)if(I[q].isOutputPass===!0){Ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(ae)},this.getViewport=function(I){return I.copy(Me)},this.setViewport=function(I,q,re,ee){I.isVector4?Me.set(I.x,I.y,I.z,I.w):Me.set(I,q,re,ee),T.viewport(ae.copy(Me).multiplyScalar(j).round())},this.getScissor=function(I){return I.copy(Ge)},this.setScissor=function(I,q,re,ee){I.isVector4?Ge.set(I.x,I.y,I.z,I.w):Ge.set(I,q,re,ee),T.scissor(Re.copy(Ge).multiplyScalar(j).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(I){T.setScissorTest(Qe=I)},this.setOpaqueSort=function(I){de=I},this.setTransparentSort=function(I){ge=I},this.getClearColor=function(I){return I.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(I=!0,q=!0,re=!0){let ee=0;if(I){let te=!1;if(ne!==null){let Ee=ne.texture.format;te=v.has(Ee)}if(te){let Ee=ne.texture.type,Ce=m.has(Ee),we=Xe.getClearColor(),De=Xe.getClearAlpha(),Fe=we.r,ot=we.g,ht=we.b;Ce?(x[0]=Fe,x[1]=ot,x[2]=ht,x[3]=De,X.clearBufferuiv(X.COLOR,0,x)):(R[0]=Fe,R[1]=ot,R[2]=ht,R[3]=De,X.clearBufferiv(X.COLOR,0,R))}else ee|=X.COLOR_BUFFER_BIT}q&&(ee|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(ee|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&X.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),M=I},this.dispose=function(){t.removeEventListener("webglcontextlost",It,!1),t.removeEventListener("webglcontextrestored",wt,!1),t.removeEventListener("webglcontextcreationerror",Xn,!1),Xe.dispose(),pe.dispose(),ye.dispose(),O.dispose(),z.dispose(),Z.dispose(),Pe.dispose(),ve.dispose(),ue.dispose(),We.dispose(),We.removeEventListener("sessionstart",he),We.removeEventListener("sessionend",_e),Te.stop()};function It(I){I.preventDefault(),Ha("WebGLRenderer: Context Lost."),A=!0}function wt(){Ha("WebGLRenderer: Context Restored."),A=!1;let I=D.autoReset,q=He.enabled,re=He.autoUpdate,ee=He.needsUpdate,te=He.type;Ke(),D.autoReset=I,He.enabled=q,He.autoUpdate=re,He.needsUpdate=ee,He.type=te}function Xn(I){et("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function d(I){let q=I.target;q.removeEventListener("dispose",d),w(q)}function w(I){k(I),O.remove(I)}function k(I){let q=O.get(I).programs;q!==void 0&&(q.forEach(function(re){ue.releaseProgram(re)}),I.isShaderMaterial&&ue.releaseShaderCache(I))}this.renderBufferDirect=function(I,q,re,ee,te,Ee){q===null&&(q=Qt);let Ce=te.isMesh&&te.matrixWorld.determinantAffine()<0,we=jt(I,q,re,ee,te);T.setMaterial(ee,Ce);let De=re.index,Fe=1;if(ee.wireframe===!0){if(De=V.getWireframeAttribute(re),De===void 0)return;Fe=2}let ot=re.drawRange,ht=re.attributes.position,qe=ot.start*Fe,Lt=(ot.start+ot.count)*Fe;Ee!==null&&(qe=Math.max(qe,Ee.start*Fe),Lt=Math.min(Lt,(Ee.start+Ee.count)*Fe)),De!==null?(qe=Math.max(qe,0),Lt=Math.min(Lt,De.count)):ht!=null&&(qe=Math.max(qe,0),Lt=Math.min(Lt,ht.count));let hn=Lt-qe;if(hn<0||hn===1/0)return;Pe.setup(te,ee,we,re,De);let Zt,Bt=Se;if(De!==null&&(Zt=Y.get(De),Bt=fe,Bt.setIndex(Zt)),te.isMesh)ee.wireframe===!0?(T.setLineWidth(ee.wireframeLinewidth*kt()),Bt.setMode(X.LINES)):Bt.setMode(X.TRIANGLES);else if(te.isLine){let Rn=ee.linewidth;Rn===void 0&&(Rn=1),T.setLineWidth(Rn*kt()),te.isLineSegments?Bt.setMode(X.LINES):te.isLineLoop?Bt.setMode(X.LINE_LOOP):Bt.setMode(X.LINE_STRIP)}else te.isPoints?Bt.setMode(X.POINTS):te.isSprite&&Bt.setMode(X.TRIANGLES);if(te.isBatchedMesh)if(ut.get("WEBGL_multi_draw"))Bt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{let Rn=te._multiDrawStarts,ke=te._multiDrawCounts,Un=te._multiDrawCount,Tt=De?Y.get(De).bytesPerElement:1,si=O.get(ee).currentProgram.getUniforms();for(let Pi=0;Pi<Un;Pi++)si.setValue(X,"_gl_DrawID",Pi),Bt.render(Rn[Pi]/Tt,ke[Pi])}else if(te.isInstancedMesh)Bt.renderInstances(qe,hn,te.count);else if(re.isInstancedBufferGeometry){let Rn=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,ke=Math.min(re.instanceCount,Rn);Bt.renderInstances(qe,hn,ke)}else Bt.render(qe,hn)};function ce(I,q,re,ee){M!==null&&I.isNodeMaterial&&M.setObject(ee,I),rt===!0&&be.setState(I,re,!1),I.transparent===!0&&I.side===Vn&&I.forceSinglePass===!1?(I.side=Tn,I.needsUpdate=!0,an(I,q,ee),I.side=zi,I.needsUpdate=!0,an(I,q,ee),I.side=Vn):an(I,q,ee)}this.compile=function(I,q,re=null){re===null&&(re=I),M!==null&&M.renderStart(I,q,re),L=ye.get(re),L.init(q),S.push(L),re.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(L.pushLight(te),te.castShadow&&L.pushShadow(te))}),I!==re&&I.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(L.pushLight(te),te.castShadow&&L.pushShadow(te))}),L.setupLights(),M!==null&&M.updateLights(L.state.lightsArray),gt=this.localClippingEnabled,rt=be.init(this.clippingPlanes,gt),rt===!0&&be.setGlobalState(this.clippingPlanes,q),M!==null&&He.render(L.state.shadowsArray,re,q);let ee=new Set;return I.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;let Ee=te.material;if(Ee)if(Array.isArray(Ee))for(let Ce=0;Ce<Ee.length;Ce++){let we=Ee[Ce];ce(we,re,q,te),ee.add(we)}else ce(Ee,re,q,te),ee.add(Ee)}),L=S.pop(),M!==null&&M.renderEnd(),ee},this.compileAsync=function(I,q,re=null){let ee=this.compile(I,q,re);return new Promise(te=>{function Ee(){if(ee.forEach(function(Ce){let De=O.get(Ce).currentProgram;(De===void 0||De.isReady())&&ee.delete(Ce)}),ee.size===0){te(I);return}setTimeout(Ee,10)}ut.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Q=null;function oe(I){Q&&Q(I)}function he(){Te.stop()}function _e(){Te.start()}let Te=new jp;Te.setAnimationLoop(oe),typeof self!="undefined"&&Te.setContext(self),this.setAnimationLoop=function(I){Q=I,We.setAnimationLoop(I),I===null?Te.stop():Te.start()},We.addEventListener("sessionstart",he),We.addEventListener("sessionend",_e),this.render=function(I,q){if(q!==void 0&&q.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;M!==null&&M.renderStart(I,q);let re=We.enabled===!0&&We.isPresenting===!0,ee=_!==null&&(ne===null||re)&&_.begin(b,ne);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(_===null||_.isCompositing()===!1)&&(We.cameraAutoUpdate===!0&&We.updateCamera(q),q=We.getCamera()),I.isScene===!0&&I.onBeforeRender(b,I,q,ne),L=ye.get(I,S.length),L.init(q),L.state.textureUnits=H.getTextureUnits(),S.push(L),nt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Oe.setFromProjectionMatrix(nt,Mi,q.reversedDepth),gt=this.localClippingEnabled,rt=be.init(this.clippingPlanes,gt),C=pe.get(I,N.length),C.init(),N.push(C),We.enabled===!0&&We.isPresenting===!0){let Ce=b.xr.getDepthSensingMesh();Ce!==null&&Ye(Ce,q,-1/0,b.sortObjects)}Ye(I,q,0,b.sortObjects),C.finish(),M!==null&&M.updateLights(L.state.lightsArray),b.sortObjects===!0&&C.sort(de,ge),Mt=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1,Mt&&Xe.addToRenderList(C,I),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),rt===!0&&be.beginShadows();let te=L.state.shadowsArray;if(He.render(te,I,q),rt===!0&&be.endShadows(),(ee&&_.hasRenderPass())===!1){let Ce=C.opaque,we=C.transmissive;if(L.setupLights(),q.isArrayCamera){let De=q.cameras;if(we.length>0)for(let Fe=0,ot=De.length;Fe<ot;Fe++){let ht=De[Fe];dt(Ce,we,I,ht)}Mt&&Xe.render(I);for(let Fe=0,ot=De.length;Fe<ot;Fe++){let ht=De[Fe];tt(C,I,ht,ht.viewport)}}else we.length>0&&dt(Ce,we,I,q),Mt&&Xe.render(I),tt(C,I,q)}ne!==null&&J===0&&(H.updateMultisampleRenderTarget(ne),H.updateRenderTargetMipmap(ne)),ee&&_.end(b),I.isScene===!0&&I.onAfterRender(b,I,q),Pe.resetDefaultState(),se=-1,ie=null,S.pop(),S.length>0?(L=S[S.length-1],H.setTextureUnits(L.state.textureUnits),rt===!0&&be.setGlobalState(b.clippingPlanes,L.state.camera)):L=null,N.pop(),N.length>0?C=N[N.length-1]:C=null,M!==null&&M.renderEnd()};function Ye(I,q,re,ee){if(I.visible===!1)return;if(I.layers.test(q.layers)){if(I.isGroup)re=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(q);else if(I.isLightProbeGrid)L.pushLightProbeGrid(I);else if(I.isLight)L.pushLight(I),I.castShadow&&L.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||I.intersectsFrustum(Oe)){ee&&Ct.setFromMatrixPosition(I.matrixWorld).applyMatrix4(nt);let Ce=Z.update(I),we=I.material;we.visible&&C.push(I,Ce,we,re,Ct.z,null,q)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||I.intersectsFrustum(Oe))){let Ce=Z.update(I),we=I.material;if(ee&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Ct.copy(I.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Ct.copy(Ce.boundingSphere.center)),Ct.applyMatrix4(I.matrixWorld).applyMatrix4(nt)),Array.isArray(we)){let De=Ce.groups;for(let Fe=0,ot=De.length;Fe<ot;Fe++){let ht=De[Fe],qe=we[ht.materialIndex];qe&&qe.visible&&C.push(I,Ce,qe,re,Ct.z,ht,q)}}else we.visible&&C.push(I,Ce,we,re,Ct.z,null,q)}}let Ee=I.children;for(let Ce=0,we=Ee.length;Ce<we;Ce++)Ye(Ee[Ce],q,re,ee)}function tt(I,q,re,ee){let{opaque:te,transmissive:Ee,transparent:Ce}=I;L.setupLightsView(re),rt===!0&&be.setGlobalState(b.clippingPlanes,re),ee&&T.viewport(ae.copy(ee)),te.length>0&&Gt(te,q,re),Ee.length>0&&Gt(Ee,q,re),Ce.length>0&&Gt(Ce,q,re),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function dt(I,q,re,ee){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ee.id]===void 0){let qe=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ee.id]=new pn(1,1,{generateMipmaps:!0,type:qe?En:Wn,minFilter:Ei,samples:Math.max(4,F.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ct.workingColorSpace})}let Ee=L.state.transmissionRenderTarget[ee.id],Ce=ee.viewport||ae;Ee.setSize(Ce.z*b.transmissionResolutionScale,Ce.w*b.transmissionResolutionScale);let we=b.getRenderTarget(),De=b.getActiveCubeFace(),Fe=b.getActiveMipmapLevel();b.setRenderTarget(Ee),b.getClearColor($e),me=b.getClearAlpha(),me<1&&b.setClearColor(16777215,.5),b.clear(),Mt&&Xe.render(re);let ot=b.toneMapping;b.toneMapping=Ti;let ht=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),L.setupLightsView(ee),rt===!0&&be.setGlobalState(b.clippingPlanes,ee),Gt(I,re,ee),H.updateMultisampleRenderTarget(Ee),H.updateRenderTargetMipmap(Ee),ut.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Lt=0,hn=q.length;Lt<hn;Lt++){let Zt=q[Lt],{object:Bt,geometry:Rn,material:ke,group:Un}=Zt;if(ke.side===Vn&&Bt.layers.test(ee.layers)){let Tt=ke.side;ke.side=Tn,ke.needsUpdate=!0,Kt(Bt,re,ee,Rn,ke,Un),ke.side=Tt,ke.needsUpdate=!0,qe=!0}}qe===!0&&(H.updateMultisampleRenderTarget(Ee),H.updateRenderTargetMipmap(Ee))}b.setRenderTarget(we,De,Fe),b.setClearColor($e,me),ht!==void 0&&(ee.viewport=ht),b.toneMapping=ot}function Gt(I,q,re){let ee=q.isScene===!0?q.overrideMaterial:null;for(let te=0,Ee=I.length;te<Ee;te++){let Ce=I[te],{object:we,geometry:De,group:Fe}=Ce,ot=Ce.material;ot.allowOverride===!0&&ee!==null&&(ot=ee),we.layers.test(re.layers)&&Kt(we,q,re,De,ot,Fe)}}function Kt(I,q,re,ee,te,Ee){M!==null&&te.isNodeMaterial&&M.setObject(I,te),I.onBeforeRender(b,q,re,ee,te,Ee),I.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),te.onBeforeRender(b,q,re,ee,I,Ee),te.transparent===!0&&te.side===Vn&&te.forceSinglePass===!1?(te.side=Tn,te.needsUpdate=!0,b.renderBufferDirect(re,q,ee,te,I,Ee),te.side=zi,te.needsUpdate=!0,b.renderBufferDirect(re,q,ee,te,I,Ee),te.side=Vn):b.renderBufferDirect(re,q,ee,te,I,Ee),I.onAfterRender(b,q,re,ee,te,Ee)}function an(I,q,re){q.isScene!==!0&&(q=Qt);let ee=O.get(I),te=L.state.lights,Ee=L.state.shadowsArray,Ce=te.state.version,we=ue.getParameters(I,te.state,Ee,q,re,L.state.lightProbeGridArray),De=ue.getProgramCacheKey(we),Fe=ee.programs;ee.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?q.environment:null,ee.fog=q.fog;let ot=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;ee.envMap=z.get(I.envMap||ee.environment,ot),ee.envMapRotation=ee.environment!==null&&I.envMap===null?q.environmentRotation:I.envMapRotation,Fe===void 0&&(I.addEventListener("dispose",d),Fe=new Map,ee.programs=Fe);let ht=Fe.get(De);if(ht!==void 0){if(ee.currentProgram===ht&&ee.lightsStateVersion===Ce)return Pt(I,we),ht}else we.uniforms=ue.getUniforms(I),M!==null&&I.isNodeMaterial&&M.build(I,re,we),I.onBeforeCompile(we,b),ht=ue.acquireProgram(we,De),Fe.set(De,ht),ee.uniforms=we.uniforms;let qe=ee.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(qe.clippingPlanes=be.uniform),Pt(I,we),ee.needsLights=pt(I),ee.lightsStateVersion=Ce,ee.needsLights&&(qe.ambientLightColor.value=te.state.ambient,qe.lightProbe.value=te.state.probe,qe.sunLights.value=te.state.sun,qe.sunLightShadows.value=te.state.sunShadow,qe.directionalLights.value=te.state.directional,qe.directionalLightShadows.value=te.state.directionalShadow,qe.spotLights.value=te.state.spot,qe.spotLightShadows.value=te.state.spotShadow,qe.rectAreaLights.value=te.state.rectArea,qe.ltc_1.value=te.state.rectAreaLTC1,qe.ltc_2.value=te.state.rectAreaLTC2,qe.pointLights.value=te.state.point,qe.pointLightShadows.value=te.state.pointShadow,qe.hemisphereLights.value=te.state.hemi,qe.sunShadowMatrix.value=te.state.sunShadowMatrix,qe.sunShadowCascade.value=te.state.sunShadowCascade,qe.directionalShadowMatrix.value=te.state.directionalShadowMatrix,qe.spotLightMatrix.value=te.state.spotLightMatrix,qe.spotLightMap.value=te.state.spotLightMap,qe.pointShadowMatrix.value=te.state.pointShadowMatrix),ee.lightProbeGrid=L.state.lightProbeGridArray.length>0,ee.currentProgram=ht,ee.uniformsList=null,ht}function en(I){if(I.uniformsList===null){let q=I.currentProgram.getUniforms();I.uniformsList=ua.seqWithValue(q.seq,I.uniforms)}return I.uniformsList}function Pt(I,q){let re=O.get(I);re.outputColorSpace=q.outputColorSpace,re.batching=q.batching,re.batchingColor=q.batchingColor,re.instancing=q.instancing,re.instancingColor=q.instancingColor,re.instancingMorph=q.instancingMorph,re.skinning=q.skinning,re.morphTargets=q.morphTargets,re.morphNormals=q.morphNormals,re.morphColors=q.morphColors,re.morphTargetsCount=q.morphTargetsCount,re.numClippingPlanes=q.numClippingPlanes,re.numIntersection=q.numClipIntersection,re.vertexAlphas=q.vertexAlphas,re.vertexTangents=q.vertexTangents,re.toneMapping=q.toneMapping}function gn(I,q){if(I.length===0)return null;if(I.length===1)return I[0].texture!==null?I[0]:null;E.setFromMatrixPosition(q.matrixWorld);for(let re=0,ee=I.length;re<ee;re++){let te=I[re];if(te.texture!==null&&te.boundingBox.containsPoint(E))return te}return null}function jt(I,q,re,ee,te){q.isScene!==!0&&(q=Qt),H.resetTextureUnits();let Ee=q.fog,Ce=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?q.environment:null,we=ne===null?b.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:ct.workingColorSpace,De=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,Fe=z.get(ee.envMap||Ce,De),ot=ee.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,ht=!!re.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),qe=!!re.morphAttributes.position,Lt=!!re.morphAttributes.normal,hn=!!re.morphAttributes.color,Zt=Ti;ee.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Zt=b.toneMapping);let Bt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Rn=Bt!==void 0?Bt.length:0,ke=O.get(ee),Un=L.state.lights;if(rt===!0&&(gt===!0||I!==ie)){let Vt=I===ie&&ee.id===se;be.setState(ee,I,Vt)}let Tt=!1;ee.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Un.state.version||ke.outputColorSpace!==we||te.isBatchedMesh&&ke.batching===!1||!te.isBatchedMesh&&ke.batching===!0||te.isBatchedMesh&&ke.batchingColor===!0&&te._colorsTexture===null||te.isBatchedMesh&&ke.batchingColor===!1&&te._colorsTexture!==null||te.isInstancedMesh&&ke.instancing===!1||!te.isInstancedMesh&&ke.instancing===!0||te.isSkinnedMesh&&ke.skinning===!1||!te.isSkinnedMesh&&ke.skinning===!0||te.isInstancedMesh&&ke.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&ke.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&ke.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&ke.instancingMorph===!1&&te.morphTexture!==null||ke.envMap!==Fe||ee.fog===!0&&ke.fog!==Ee||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==be.numPlanes||ke.numIntersection!==be.numIntersection)||ke.vertexAlphas!==ot||ke.vertexTangents!==ht||ke.morphTargets!==qe||ke.morphNormals!==Lt||ke.morphColors!==hn||ke.toneMapping!==Zt||ke.morphTargetsCount!==Rn||!!ke.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(Tt=!0):(Tt=!0,ke.__version=ee.version);let si=ke.currentProgram;Tt===!0&&(si=an(ee,q,te),M&&ee.isNodeMaterial&&M.onUpdateProgram(ee,si,ke));let Pi=!1,dr=!1,gs=!1,Ot=si.getUniforms(),on=ke.uniforms;if(T.useProgram(si.program)&&(Pi=!0,dr=!0,gs=!0),ee.id!==se&&(se=ee.id,dr=!0),ke.needsLights){let Vt=gn(L.state.lightProbeGridArray,te);ke.lightProbeGrid!==Vt&&(ke.lightProbeGrid=Vt,dr=!0)}if(Pi||ie!==I){T.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),Ot.setValue(X,"projectionMatrix",I.projectionMatrix),Ot.setValue(X,"viewMatrix",I.matrixWorldInverse);let mr=Ot.map.cameraPosition;mr!==void 0&&mr.setValue(X,vt.setFromMatrixPosition(I.matrixWorld)),F.logarithmicDepthBuffer&&Ot.setValue(X,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Ot.setValue(X,"isOrthographic",I.isOrthographicCamera===!0),ie!==I&&(ie=I,dr=!0,gs=!0)}if(ke.needsLights&&(Un.state.sunShadowMap.length>0&&Ot.setValue(X,"sunShadowMap",Un.state.sunShadowMap,H),Un.state.directionalShadowMap.length>0&&Ot.setValue(X,"directionalShadowMap",Un.state.directionalShadowMap,H),Un.state.spotShadowMap.length>0&&Ot.setValue(X,"spotShadowMap",Un.state.spotShadowMap,H),Un.state.pointShadowMap.length>0&&Ot.setValue(X,"pointShadowMap",Un.state.pointShadowMap,H)),te.isSkinnedMesh){Ot.setOptional(X,te,"bindMatrix"),Ot.setOptional(X,te,"bindMatrixInverse");let Vt=te.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),Ot.setValue(X,"boneTexture",Vt.boneTexture,H))}te.isBatchedMesh&&(Ot.setOptional(X,te,"batchingTexture"),Ot.setValue(X,"batchingTexture",te._matricesTexture,H),Ot.setOptional(X,te,"batchingIdTexture"),Ot.setValue(X,"batchingIdTexture",te._indirectTexture,H),Ot.setOptional(X,te,"batchingColorTexture"),te._colorsTexture!==null&&Ot.setValue(X,"batchingColorTexture",te._colorsTexture,H));let pr=re.morphAttributes;if((pr.position!==void 0||pr.normal!==void 0||pr.color!==void 0)&&W.update(te,re,si),(dr||ke.receiveShadow!==te.receiveShadow)&&(ke.receiveShadow=te.receiveShadow,Ot.setValue(X,"receiveShadow",te.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&q.environment!==null&&(on.envMapIntensity.value=q.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=lM()),dr){if(Ot.setValue(X,"toneMappingExposure",b.toneMappingExposure),ke.needsLights&&nn(on,gs),Ee&&ee.fog===!0&&xe.refreshFogUniforms(on,Ee),xe.refreshMaterialUniforms(on,ee,j,G,L.state.transmissionRenderTarget[I.id]),ke.needsLights&&ke.lightProbeGrid){let Vt=ke.lightProbeGrid;on.probesSH.value=Vt.texture,on.probesMin.value.copy(Vt.boundingBox.min),on.probesMax.value.copy(Vt.boundingBox.max),on.probesResolution.value.copy(Vt.resolution)}ua.upload(X,en(ke),on,H)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(ua.upload(X,en(ke),on,H),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Ot.setValue(X,"center",te.center),Ot.setValue(X,"modelViewMatrix",te.modelViewMatrix),Ot.setValue(X,"normalMatrix",te.normalMatrix),Ot.setValue(X,"modelMatrix",te.matrixWorld),ee.uniformsGroups!==void 0){let Vt=ee.uniformsGroups;for(let mr=0,vs=Vt.length;mr<vs;mr++){let zf=Vt[mr];ve.update(zf,si),ve.bind(zf,si)}}return si}function nn(I,q){I.ambientLightColor.needsUpdate=q,I.lightProbe.needsUpdate=q,I.sunLights.needsUpdate=q,I.sunLightShadows.needsUpdate=q,I.directionalLights.needsUpdate=q,I.directionalLightShadows.needsUpdate=q,I.pointLights.needsUpdate=q,I.pointLightShadows.needsUpdate=q,I.spotLights.needsUpdate=q,I.spotLightShadows.needsUpdate=q,I.rectAreaLights.needsUpdate=q,I.hemisphereLights.needsUpdate=q}function pt(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(I,q,re){let ee=O.get(I);ee.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),O.get(I.texture).__webglTexture=q,O.get(I.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:re,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,q){let re=O.get(I);re.__webglFramebuffer=q,re.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(I,q=0,re=0){ne=I,K=q,J=re;let ee=null,te=!1,Ee=!1;if(I){let we=O.get(I);if(we.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(X.FRAMEBUFFER,we.__webglFramebuffer),ae.copy(I.viewport),Re.copy(I.scissor),Ue=I.scissorTest,T.viewport(ae),T.scissor(Re),T.setScissorTest(Ue),se=-1;return}else if(we.__webglFramebuffer===void 0)H.setupRenderTarget(I);else if(we.__hasExternalTextures)H.rebindTextures(I,O.get(I.texture).__webglTexture,O.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let ot=I.depthTexture;if(we.__boundDepthTexture!==ot){if(ot!==null&&O.has(ot)&&(I.width!==ot.image.width||I.height!==ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(I)}}let De=I.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Ee=!0);let Fe=O.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Fe[q])?ee=Fe[q][re]:ee=Fe[q],te=!0):I.samples>0&&H.useMultisampledRTT(I)===!1?ee=O.get(I).__webglMultisampledFramebuffer:Array.isArray(Fe)?ee=Fe[re]:ee=Fe,ae.copy(I.viewport),Re.copy(I.scissor),Ue=I.scissorTest}else ae.copy(Me).multiplyScalar(j).floor(),Re.copy(Ge).multiplyScalar(j).floor(),Ue=Qe;if(re!==0&&(ee=P),T.bindFramebuffer(X.FRAMEBUFFER,ee)&&T.drawBuffers(I,ee),T.viewport(ae),T.scissor(Re),T.setScissorTest(Ue),te){let we=O.get(I.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+q,we.__webglTexture,re)}else if(Ee){let we=q;for(let De=0;De<I.textures.length;De++){let Fe=O.get(I.textures[De]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+De,Fe.__webglTexture,re,we)}}else if(I!==null&&re!==0){let we=O.get(I.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,we.__webglTexture,re)}se=-1};function ri(I){let q=O.get(I);return(q.__readFormat!==I.format||q.__readType!==I.type)&&(q.__readFormat=I.format,q.__readType=I.type,q.__formatReadable=F.textureFormatReadable(I.format),q.__typeReadable=F.textureTypeReadable(I.type)),q}this.readRenderTargetPixels=function(I,q,re,ee,te,Ee,Ce,we=0){if(!(I&&I.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=O.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De){T.bindFramebuffer(X.FRAMEBUFFER,De);try{let Fe=I.textures[we],ot=Fe.format,ht=Fe.type;I.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+we);let qe=ri(Fe);if(qe.__formatReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qe.__typeReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=I.width-ee&&re>=0&&re<=I.height-te&&X.readPixels(q,re,ee,te,Ae.convert(ot),Ae.convert(ht),Ee)}finally{let Fe=ne!==null?O.get(ne).__webglFramebuffer:null;T.bindFramebuffer(X.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(I,q,re,ee,te,Ee,Ce,we=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=O.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De)if(q>=0&&q<=I.width-ee&&re>=0&&re<=I.height-te){T.bindFramebuffer(X.FRAMEBUFFER,De);let Fe=I.textures[we],ot=Fe.format,ht=Fe.type;I.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+we);let qe=ri(Fe);if(qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Lt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Lt),X.bufferData(X.PIXEL_PACK_BUFFER,Ee.byteLength,X.STREAM_READ),X.readPixels(q,re,ee,te,Ae.convert(ot),Ae.convert(ht),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);let hn=ne!==null?O.get(ne).__webglFramebuffer:null;T.bindFramebuffer(X.FRAMEBUFFER,hn);let Zt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await Ep(X,Zt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Lt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Ee),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(Lt),X.deleteSync(Zt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,q=null,re=0){let ee=Math.pow(2,-re),te=Math.floor(I.image.width*ee),Ee=Math.floor(I.image.height*ee),Ce=q!==null?q.x:0,we=q!==null?q.y:0;H.setTexture2D(I,0),X.copyTexSubImage2D(X.TEXTURE_2D,re,0,0,Ce,we,te,Ee),T.unbindTexture()},this.copyTextureToTexture=function(I,q,re=null,ee=null,te=0,Ee=0){let Ce,we,De,Fe,ot,ht,qe,Lt,hn,Zt=I.isCompressedTexture?I.mipmaps[Ee]:I.image;if(re!==null)Ce=re.max.x-re.min.x,we=re.max.y-re.min.y,De=re.isBox3?re.max.z-re.min.z:1,Fe=re.min.x,ot=re.min.y,ht=re.isBox3?re.min.z:0;else{let on=Math.pow(2,-te);Ce=Math.floor(Zt.width*on),we=Math.floor(Zt.height*on),I.isDataArrayTexture?De=Zt.depth:I.isData3DTexture?De=Math.floor(Zt.depth*on):De=1,Fe=0,ot=0,ht=0}ee!==null?(qe=ee.x,Lt=ee.y,hn=ee.z):(qe=0,Lt=0,hn=0);let Bt=Ae.convert(q.format),Rn=Ae.convert(q.type),ke;q.isData3DTexture?(H.setTexture3D(q,0),ke=X.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(H.setTexture2DArray(q,0),ke=X.TEXTURE_2D_ARRAY):(H.setTexture2D(q,0),ke=X.TEXTURE_2D),T.activeTexture(X.TEXTURE0),T.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,q.flipY),T.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),T.pixelStorei(X.UNPACK_ALIGNMENT,q.unpackAlignment);let Un=T.getParameter(X.UNPACK_ROW_LENGTH),Tt=T.getParameter(X.UNPACK_IMAGE_HEIGHT),si=T.getParameter(X.UNPACK_SKIP_PIXELS),Pi=T.getParameter(X.UNPACK_SKIP_ROWS),dr=T.getParameter(X.UNPACK_SKIP_IMAGES);T.pixelStorei(X.UNPACK_ROW_LENGTH,Zt.width),T.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Zt.height),T.pixelStorei(X.UNPACK_SKIP_PIXELS,Fe),T.pixelStorei(X.UNPACK_SKIP_ROWS,ot),T.pixelStorei(X.UNPACK_SKIP_IMAGES,ht);let gs=I.isDataArrayTexture||I.isData3DTexture,Ot=q.isDataArrayTexture||q.isData3DTexture;if(I.isDepthTexture){let on=O.get(I),pr=O.get(q),Vt=O.get(on.__renderTarget),mr=O.get(pr.__renderTarget);T.bindFramebuffer(X.READ_FRAMEBUFFER,Vt.__webglFramebuffer),T.bindFramebuffer(X.DRAW_FRAMEBUFFER,mr.__webglFramebuffer);for(let vs=0;vs<De;vs++)gs&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,O.get(I).__webglTexture,te,ht+vs),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,O.get(q).__webglTexture,Ee,hn+vs)),X.blitFramebuffer(Fe,ot,Ce,we,qe,Lt,Ce,we,X.DEPTH_BUFFER_BIT,X.NEAREST);T.bindFramebuffer(X.READ_FRAMEBUFFER,null),T.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(te!==0||I.isRenderTargetTexture||O.has(I)){let on=O.get(I),pr=O.get(q);T.bindFramebuffer(X.READ_FRAMEBUFFER,U),T.bindFramebuffer(X.DRAW_FRAMEBUFFER,B);for(let Vt=0;Vt<De;Vt++)gs?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,on.__webglTexture,te,ht+Vt):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,on.__webglTexture,te),Ot?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,pr.__webglTexture,Ee,hn+Vt):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,pr.__webglTexture,Ee),te!==0?X.blitFramebuffer(Fe,ot,Ce,we,qe,Lt,Ce,we,X.COLOR_BUFFER_BIT,X.NEAREST):Ot?X.copyTexSubImage3D(ke,Ee,qe,Lt,hn+Vt,Fe,ot,Ce,we):X.copyTexSubImage2D(ke,Ee,qe,Lt,Fe,ot,Ce,we);T.bindFramebuffer(X.READ_FRAMEBUFFER,null),T.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Ot?I.isDataTexture||I.isData3DTexture?X.texSubImage3D(ke,Ee,qe,Lt,hn,Ce,we,De,Bt,Rn,Zt.data):q.isCompressedArrayTexture?X.compressedTexSubImage3D(ke,Ee,qe,Lt,hn,Ce,we,De,Bt,Zt.data):X.texSubImage3D(ke,Ee,qe,Lt,hn,Ce,we,De,Bt,Rn,Zt):I.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Ee,qe,Lt,Ce,we,Bt,Rn,Zt.data):I.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Ee,qe,Lt,Zt.width,Zt.height,Bt,Zt.data):X.texSubImage2D(X.TEXTURE_2D,Ee,qe,Lt,Ce,we,Bt,Rn,Zt);T.pixelStorei(X.UNPACK_ROW_LENGTH,Un),T.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Tt),T.pixelStorei(X.UNPACK_SKIP_PIXELS,si),T.pixelStorei(X.UNPACK_SKIP_ROWS,Pi),T.pixelStorei(X.UNPACK_SKIP_IMAGES,dr),Ee===0&&q.generateMipmaps&&X.generateMipmap(ke),T.unbindTexture()},this.initRenderTarget=function(I){O.get(I).__webglFramebuffer===void 0&&H.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?H.setTextureCube(I,0):I.isData3DTexture?H.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?H.setTexture2DArray(I,0):H.setTexture2D(I,0),T.unbindTexture()},this.resetState=function(){K=0,J=0,ne=null,T.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}};var pa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var ei=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},cM=new ki(-1,1,1,-1,0,1),Yh=class extends Yt{constructor(){super(),this.setAttribute("position",new St([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new St([0,2,0,0,2,0],2))}},uM=new Yh,Dr=class{constructor(e){this._mesh=new Be(uM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,cM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Gc=class extends ei{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof tn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ur.clone(e.uniforms),this.material=new tn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Dr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var wo=class extends ei{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}},Vc=class extends ei{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Wc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Je);this._width=n.width,this._height=n.height,t=new pn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:En}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Gc(pa),this.copyPass.material.blending=ui,this.timer=new ro}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let r=0,s=this.passes.length;r<s;r++){let a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}wo!==void 0&&(a instanceof wo?n=!0:a instanceof Vc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Je);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var qc=class extends ei{constructor(e,t,n=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ze}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}};var rm={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ze(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var ma=class i extends ei{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e!==void 0?new Je(e.x,e.y):new Je(256,256),this.clearColor=new ze(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new pn(s,a,{type:En,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let l=0;l<this.nMips;l++){let h=new pn(s,a,{type:En,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+l,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let f=new pn(s,a,{type:En,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+l,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}let o=rm;this.highPassUniforms=ur.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new tn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let l=0;l<this.nMips;l++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[l])),this.separableBlurMaterials[l].uniforms.invSize.value=new Je(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new $(1,1,1),new $(1,1,1),new $(1,1,1),new $(1,1,1),new $(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ur.clone(pa.uniforms),this.blendMaterial=new tn({uniforms:this.copyUniforms,vertexShader:pa.vertexShader,fragmentShader:pa.fragmentShader,premultipliedAlpha:!0,blending:cr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ze,this._oldClearAlpha=1,this._basic=new Ln,this._fsQuad=new Dr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Je(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(e,t,n,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let r=[],s=[];for(let a=1;a<e;a+=2){let o=t[a],c=a+1<e?t[a+1]:0,u=o+c;r.push((a*o+(a+1)*c)/u),s.push(u)}return new tn({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new Je(.5,.5)},direction:{value:new Je(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:s}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new tn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};ma.BlurDirectionX=new Je(1,0);ma.BlurDirectionY=new Je(0,1);var Ao={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Xc=class extends ei{constructor(){super(),this.isOutputPass=!0,this.uniforms=ur.clone(Ao.uniforms),this.material=new Js({name:Ao.name,uniforms:this.uniforms,vertexShader:Ao.vertexShader,fragmentShader:Ao.fragmentShader}),this._fsQuad=new Dr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ct.getTransfer(this._outputColorSpace)===At&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===oo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===lo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===co?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===os?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ho?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===fo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===uo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Yc=class extends Er{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new mn;e.deleteAttribute("uv");let t=new sn({side:Tn}),n=new sn,r=new Jn(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let s=new Be(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let a=new Qr(e,n,6),o=new Xt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new Be(e,ga(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let u=new Be(e,ga(50));u.position.set(-16.109,18.021,-8.207),u.scale.set(.1,2.425,2.751),this.add(u);let l=new Be(e,ga(17));l.position.set(14.904,12.198,-1.832),l.scale.set(.15,4.265,6.331),this.add(l);let h=new Be(e,ga(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let f=new Be(e,ga(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let p=new Be(e,ga(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function ga(i){return new $a({color:0,emissive:16777215,emissiveIntensity:i})}var bt=128;function jc(i,e,t){var n=i*374761393+e*668265263+t*982451653|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function om(i,e,t,n){var r=Math.floor(i),s=Math.floor(e),a=i-r,o=e-s,c=a*a*(3-2*a),u=o*o*(3-2*o);function l(y,v){return jc((y%t+t)%t,(v%t+t)%t,n)}var h=l(r,s),f=l(r+1,s),p=l(r,s+1),g=l(r+1,s+1);return h+(f-h)*c+(p-h)*u+(h-f-p+g)*c*u}function fr(i,e,t,n){for(var r=0,s=.5,a=1,o=0;o<t;o++)r+=s*om(i*a,e*a,8*a,n+o*17),s*=.5,a*=2;return r}function hi(i,e,t){return i+(e-i)*t}function $c(i){return i<0?0:i>1?1:i}function hr(i){return[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255]}function hM(i,e){e=e||{};for(var t=new Uint8ClampedArray(bt*bt*4),n=new Float32Array(bt*bt),r=e.emissive?new Uint8ClampedArray(bt*bt*4):null,s=new Uint8ClampedArray(bt*bt*4),a=0;a<bt;a++)for(var o=0;o<bt;o++){var c=i(o/bt,a/bt,o,a),u=a*bt+o,l=u*4;t[l]=c.c[0]*255,t[l+1]=c.c[1]*255,t[l+2]=c.c[2]*255,t[l+3]=255,n[u]=c.h;var h=(c.r===void 0?.85:c.r)*255;if(s[l]=h,s[l+1]=h,s[l+2]=h,s[l+3]=255,r){var f=c.e||[0,0,0];r[l]=f[0]*255,r[l+1]=f[1]*255,r[l+2]=f[2]*255,r[l+3]=255}}return{map:Kc(t,!0),normalMap:Kc(fM(n,e.bump||3),!1),roughnessMap:Kc(s,!1),emissiveMap:r?Kc(r,!0):null}}function fM(i,e){for(var t=new Uint8ClampedArray(bt*bt*4),n=0;n<bt;n++)for(var r=0;r<bt;r++){var s=i[n*bt+(r+bt-1)%bt],a=i[n*bt+(r+1)%bt],o=i[(n+bt-1)%bt*bt+r],c=i[(n+1)%bt*bt+r],u=(s-a)*e,l=(o-c)*e,h=1,f=Math.sqrt(u*u+l*l+h*h),p=(n*bt+r)*4;t[p]=(u/f*.5+.5)*255,t[p+1]=(l/f*.5+.5)*255,t[p+2]=(h/f*.5+.5)*255,t[p+3]=255}return t}function Kc(i,e){var t;if(typeof document!="undefined"){var n=document.createElement("canvas");n.width=bt,n.height=bt,n.getContext("2d").putImageData(new ImageData(i,bt,bt),0,0),t=new Ks(n)}else t=new nr(i,bt,bt);return t.wrapS=t.wrapT=ci,t.colorSpace=e?Wt:Qn,t.anisotropy=8,t.magFilter=qt,t.needsUpdate=!0,t}function dM(i,e,t,n){var r=hr(i),s=hr(e),a=hr(t);return function(o,c){var u=8,l=Math.floor(c*u),h=l%2?.5:0,f=o*4+h,p=Math.floor(f),g=f-p,y=c*u-l,v=Math.min(g,1-g)*4*.5,m=Math.min(y,1-y)*.5,x=Math.min(v,m*2),R=fr(o*8,c*8,4,n),E=jc(p&3,l,n),C=fr(o*24,c*24,2,n+5)>.72?.25:0;if(x<.045){var L=.8+R*.4;return{c:[a[0]*L,a[1]*L,a[2]*L],h:.1+R*.1,r:.95}}var N=$c(E*.6+R*.5),S=.8+R*.35-C;return{c:[hi(s[0],r[0],N)*S,hi(s[1],r[1],N)*S,hi(s[2],r[2],N)*S],h:.6+R*.3-C+Math.min(x,.12)*2,r:.8+R*.15}}}function pM(i,e,t){var n=hr(i),r=hr(e);return function(s,a){var o=s*3,c=a*4+Math.floor(s*3)%2*.5,u=o-Math.floor(o),l=c-Math.floor(c),h=jc(Math.floor(o)%3,Math.floor(c)%4,t),f=Math.min(u,1-u,(l<.5?l:1-l)*1.5),p=fr(s*6,a*6,5,t);if(f<.035)return{c:[r[0]*.5,r[1]*.5,r[2]*.5],h:.1,r:.95};var g=$c(p*.8+h*.4),y=.75+p*.4;return{c:[hi(r[0],n[0],g)*y,hi(r[1],n[1],g)*y,hi(r[2],n[2],g)*y],h:.5+p*.5,r:.9}}}function Qc(i,e,t){var n=hr(i),r=hr(e);return function(s,a,o,c){var u=s*2%1,l=a*2%1,h=Math.min(u,1-u,l,1-l)<.012,f=[[.06,.06],[.94,.06],[.06,.94],[.94,.94]].some(function(v){var m=u-v[0],x=l-v[1];return m*m+x*x<9e-4}),p=fr(s*6,a*16,4,t),g=om(s*90,a*4,90,t+3)>.9?.15:0,y=.75+p*.35+g;return h?{c:[r[0]*.4,r[1]*.4,r[2]*.4],h:.1,r:.6}:f?{c:[n[0]*1.2,n[1]*1.2,n[2]*1.2],h:1,r:.35}:{c:[hi(r[0],n[0],p)*y,hi(r[1],n[1],p)*y,hi(r[2],n[2],p)*y],h:.5+p*.1,r:.45+p*.2}}}function mM(i){var e=Qc(5001824,1974568,i);return function(t,n,r,s){var a=e(t,n,r,s),o=Math.abs(n-.5)<.025&&t*4%1>.15&&t*4%1<.85,c=Math.abs(n-.15)<.04&&Math.abs(t*2%1-.5)<.12;return o?{c:[.2,.7,.8],h:.3,r:.3,e:[.15,.85,1]}:c?{c:[.9,.7,.3],h:.8,r:.3,e:[1,.6,.15]}:(a.e=[0,0,0],a)}}function Zh(i){return function(e,t){var n=fr(e*5,t*5,5,i),r=1-Math.abs(fr(e*4,t*4,4,i+9)-.5)*2,s=r>.9?$c((r-.9)*10):0,a=.35+n*.5,o=[.32*a+s*.9,.12*a+s*.35,.08*a];return{c:o,h:n-s*.4,r:.9-s*.5,e:[s*1,s*.35,s*.05]}}}function Kh(i){var e=Qc(6975352,2895412,31),t=i==="red"?[.9,.12,.08]:i==="blue"?[.15,.35,1]:null;return function(n,r,s,a){var o=e(n,r,s,a),c=r>.88&&Math.floor(n*16+r*16)%2===0;return r>.88?{c:c?[.85,.65,.1]:[.08,.08,.08],h:.6,r:.6,e:[0,0,0]}:Math.abs(n-.5)<.012?{c:[.05,.05,.05],h:0,r:.8,e:[0,0,0]}:t&&Math.abs(r-.45)<.05?{c:t,h:.7,r:.3,e:[t[0]*.8,t[1]*.8,t[2]*.8]}:(o.e=[0,0,0],o)}}function sm(i){var e=Qc(5922664,2500654,41);return function(t,n,r,s){var a=e(t,n,r,s),o=Math.abs(t-.5)<.18&&Math.abs(n-.5)<.26;if(o){var c=Math.abs(t-.5)<.04&&(i?n>.5&&n<.72:n>.28&&n<.5),u=Math.abs(t-.5)<.08&&Math.abs(n-(i?.3:.7))<.04,l=i?[.2,1,.3]:[1,.15,.1];return u?{c:l,h:.9,r:.2,e:l}:c?{c:[.8,.8,.75],h:1,r:.3,e:[0,0,0]}:{c:[.06,.07,.06],h:.2,r:.7,e:[0,0,0]}}return a.e=[0,0,0],a}}function Jc(i,e,t,n){var r=hr(i),s=hr(e);return function(a,o){var c=a*4%1,u=o*4%1,l=Math.min(c,1-c,u,1-u),h=jc(Math.floor(a*4),Math.floor(o*4),t),f=fr(a*8,o*8,4,t);if(l<.03)return{c:[s[0]*.4,s[1]*.4,s[2]*.4],h:.05,r:.95};if(n&&(c*10%1<.3||u*10%1<.3)&&l>.08)return{c:[s[0]*.3,s[1]*.3,s[2]*.3],h:.1,r:.6};var p=$c(h*.5+f*.6),g=.7+f*.4;return{c:[hi(s[0],r[0],p)*g,hi(s[1],r[1],p)*g,hi(s[2],r[2],p)*g],h:.5+f*.3,r:n?.5:.8}}}function gM(i){var e=Zh(i);return function(t,n){var r=e(t,n),s=fr(t*3,n*3,3,i+20)>.66;if(s){var a=fr(t*10,n*10,3,i+21);return{c:[1,.45+a*.3,.08],h:0,r:.4,e:[1.2,.45+a*.3,.05]}}return r}}function vM(i){return Jc(2762274,1183760,i,!1)}var am={};function Dn(i,e,t){return am[i]||(am[i]=hM(e,t))}function Jh(i){switch(i){case 1:return Dn("brick",dM(9060914,4857364,2759960,1),{bump:4});case 2:return Dn("stone",pM(9078136,4867644,2),{bump:4});case 3:return Dn("metal",Qc(5922664,2500654,3),{bump:3});case 4:return Dn("tech",mM(4),{emissive:!0,bump:3});case 5:return Dn("hell",Zh(5),{emissive:!0,bump:5});case 6:return Dn("door",Kh(null),{emissive:!0,bump:3});case 7:return Dn("doorRed",Kh("red"),{emissive:!0,bump:3});case 8:return Dn("doorBlue",Kh("blue"),{emissive:!0,bump:3});case 9:return Dn("switchOff",sm(!1),{emissive:!0,bump:3});case 10:return Dn("switchOn",sm(!0),{emissive:!0,bump:3})}return Jh(1)}var Zc=null;function lm(){if(Zc)return Zc;var i=128,e=new Uint8ClampedArray(i*i*4),t=44;function n(c,u,l,h,f,p){if(!(c<0||u<0||c>=i||u>=i)){var g=(u*i+c)*4;e[g]=l,e[g+1]=h,e[g+2]=f,e[g+3]=Math.max(e[g+3],p)}}for(var r=10;r<118;r++)t+=r%7===0?1:r%9===0?-1:0,n(t-1,r,200,190,170,150),n(t+2,r,200,190,170,150),n(t,r,12,10,8,255),n(t+1,r,12,10,8,255);for(var s=0;s<16;s++)n(t+3+s,60+s,12,10,8,255),n(t+3+s,59+s,200,190,170,140);var a;if(typeof document!="undefined"){var o=document.createElement("canvas");o.width=o.height=i,o.getContext("2d").putImageData(new ImageData(e,i,i),0,0),a=new Ks(o)}else a=new nr(e,i,i);return a.colorSpace=Wt,a.magFilter=qt,a.needsUpdate=!0,Zc=new sn({map:a,transparent:!0,alphaTest:.3,depthWrite:!1,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1}),Zc}function cm(i){switch(i){case"tech":return Dn("fTech",Jc(4869718,1842722,11,!0),{bump:3});case"hell":return Dn("fHell",gM(12),{emissive:!0,bump:4});case"ceilTech":return Dn("cTech",Jc(3817030,1316378,13,!0),{bump:2});case"ceilHell":return Dn("cHell",Zh(14),{emissive:!0,bump:4});case"ceilDark":return Dn("cDark",vM(15),{bump:2});default:return Dn("fSlab",Jc(6972506,3025444,10,!1),{bump:3})}}function Wi(i,e){var t=new sn(Object.assign({map:i.map,normalMap:i.normalMap,roughnessMap:i.roughnessMap,roughness:1,metalness:.05},e||{}));return i.emissiveMap&&(t.emissiveMap=i.emissiveMap,t.emissive=new ze(16777215),t.emissiveIntensity=1.6),t}function tu(){this.groups={}}tu.prototype.quad=function(i,e,t,n,r,s,a){var o=this.groups[i]||(this.groups[i]={pos:[],nor:[],uv:[]});[e,t,n,e,n,r].forEach(function(c){o.pos.push(c[0],c[1],c[2]),o.nor.push(s[0],s[1],s[2])}),[a[0],a[1],a[2],a[0],a[2],a[3]].forEach(function(c){o.uv.push(c[0],c[1])})};tu.prototype.meshes=function(i){var e=[];for(var t in this.groups){var n=this.groups[t],r=new Yt;r.setAttribute("position",new St(n.pos,3)),r.setAttribute("normal",new St(n.nor,3)),r.setAttribute("uv",new St(n.uv,2));var s=new Be(r,i(t));s.name=t,e.push(s)}return e};function eu(i,e,t,n,r,s,a){if(!(a-s<.001)){var o,c,u,l,h;r==="E"?(o=[t+1,n+1],c=[t+1,n],u=[-1,0,0],l=n+1,h=n):r==="W"?(o=[t,n],c=[t,n+1],u=[1,0,0],l=n,h=n+1):r==="S"?(o=[t,n+1],c=[t+1,n+1],u=[0,0,-1],l=t,h=t+1):(o=[t+1,n],c=[t,n],u=[0,0,1],l=t+1,h=t),i.quad(e,[o[0],s,o[1]],[c[0],s,c[1]],[c[0],a,c[1]],[o[0],a,o[1]],u,[[l,s],[h,s],[h,a],[l,a]])}}var jh={E:[1,0],W:[-1,0],S:[0,1],N:[0,-1]};function Ro(i,e,t,n,r,s,a,o){i.quad(e,[t,a,r],[t,a,o],[s,a,o],[s,a,r],[0,1,0],[[t,r],[t,o],[s,o],[s,r]]),i.quad(e,[t,n,o],[t,n,r],[s,n,r],[s,n,o],[0,-1,0],[[t,o],[t,r],[s,r],[s,o]]),i.quad(e,[t,n,o],[s,n,o],[s,a,o],[t,a,o],[0,0,1],[[t,n],[s,n],[s,a],[t,a]]),i.quad(e,[s,n,r],[t,n,r],[t,a,r],[s,a,r],[0,0,-1],[[s,n],[t,n],[t,a],[s,a]]),i.quad(e,[s,n,o],[s,n,r],[s,a,r],[s,a,o],[1,0,0],[[o,n],[r,n],[r,a],[o,a]]),i.quad(e,[t,n,r],[t,n,o],[t,a,o],[t,a,r],[-1,0,0],[[r,n],[o,n],[o,a],[r,a]])}function $h(i,e,t,n,r,s,a,o){r==="E"?Ro(i,e,t+1-o,s,n,t+1,s+a,n+1):r==="W"?Ro(i,e,t,s,n,t+o,s+a,n+1):r==="S"?Ro(i,e,t,s,n+1-o,t+1,s+a,n+1):Ro(i,e,t,s,n,t+1,s+a,n+o)}function um(i){for(var e={},t=0;t<i.cells.length;t++){var n=i.cells[t];n>=1&&n<=5&&(e[n]=(e[n]||0)+1)}var r=1,s=-1;for(var a in e)e[a]>s&&(s=e[a],r=+a);return r}function _M(i,e,t){var n=um(i);return[[1,0],[-1,0],[0,1],[0,-1]].forEach(function(r){var s=ai(i,e+r[0],t+r[1]);s>=1&&s<=5&&(n=s)}),n}function hm(i,e){function t(le){return e&&e.texture("tex:"+le)||Jh(le)}function n(le){return e&&e.texture("tex:"+le)||cm(le)}var r=i.W,s=i.L,a=new tu,o=new st,c="wall"+um(r),u={};r.lifts.forEach(function(le){u[le.x+","+le.z]=le});var l=[];function h(le,G){var j=ai(r,le,G);return j===0||!!mi[j]}function f(le,G){var j=u[le+","+G];return j?j.bottom:vn(r,le,G)}for(var p=0;p<r.mh;p++)for(var g=0;g<r.mw;g++)if(h(g,p)){var y=f(g,p),v=Li(r,g,p);u[g+","+p]||a.quad("floor",[g,y,p],[g,y,p+1],[g+1,y,p+1],[g+1,y,p],[0,1,0],[[g,p],[g,p+1],[g+1,p+1],[g+1,p]]),a.quad("ceil",[g,v,p],[g+1,v,p],[g+1,v,p+1],[g,v,p+1],[0,-1,0],[[g,p],[g+1,p],[g+1,p+1],[g,p+1]]);for(var m in jh){var x=g+jh[m][0],R=p+jh[m][1],E=ai(r,x,R);if(!h(x,R)){if(E===9){var C={x,z:R,faces:new tu,dir:m};eu(C.faces,"sw",g,p,m,y,v),l.push(C)}else eu(a,"wall"+(E>=1&&E<=5?E:1),g,p,m,y,v);mi[ai(r,g,p)]||($h(a,"trim",g,p,m,y,.09,.035),v-y>2&&$h(a,"trim",g,p,m,v-.12,.08,.05));continue}var L=f(x,R),N=Li(r,x,R);L>y&&(eu(a,c,g,p,m,y,Math.min(L,v)),L-y>.3&&$h(a,"trim",g,p,m,L-.07,.07,.06)),N<v&&eu(a,c,g,p,m,Math.max(N,y),v)}}for(var S=0;S<r.mh;S++)for(var _=0;_<r.mw;_++)if(!(S%3!==1||ai(r,_,S)!==0)){var b=Li(r,_,S);b-vn(r,_,S)<2.6||Ro(a,"beam",_,b-.2,S+.38,_+1,b,S+.62)}var A={};function M(le){return A[le]?A[le]:le==="floor"?A[le]=Wi(n(s.floor)):le==="ceil"?A[le]=Wi(n(s.ceil)):le==="trim"?A[le]=Wi(t(3),{color:10127992,metalness:.6,roughness:.5}):le==="beam"?A[le]=Wi(t(3),{color:6969930,metalness:.4}):A[le]=Wi(t(+le.slice(4)))}a.meshes(M).forEach(function(le){le.receiveShadow=!0,o.add(le)});var P=Wi(t(9)),U=Wi(t(10));l.forEach(function(le){le.faces.meshes(function(){return P}).forEach(function(G){le.mesh=G,o.add(G)})});var B=[];for(var K in r.doors){var J=r.doors[K],ne=vn(r,J.x,J.z),se=Li(r,J.x,J.z),ie=se-ne,ae;if(J.secret){ae=new Be(new mn(1,ie,1),M("wall"+_M(r,J.x,J.z))),Qh(ae.geometry,1,ie);var Re=lm();[[0,.502,0],[Math.PI,-.502,0],[Math.PI/2,0,.502],[-Math.PI/2,0,-.502]].forEach(function(le){var G=new Be(new ns(.9,Math.min(ie,1.9)*.9),Re);G.rotation.y=le[0],G.position.set(le[2],0,le[1]),ae.add(G)})}else{var Ue=h(J.x-1,J.z)&&h(J.x+1,J.z),$e=Ue?new mn(.22,ie,1):new mn(1,ie,.22);ae=new Be($e,Wi(t(J.locked==="red"?7:J.locked==="blue"?8:6))),Qh(ae.geometry,1,ie)}ae.position.set(J.x+.5,ne+ie/2,J.z+.5),ae.userData={door:J,baseY:ne+ie/2,h:ie},ae.castShadow=!0,o.add(ae),B.push(ae)}var me=r.lifts.map(function(le){var G=Math.max(.2,le.top-le.bottom+.2),j=new Be(new mn(.98,G,.98),Wi(t(4)));return Qh(j.geometry,1,G),j.userData={lift:le,h:G},o.add(j),j});return{group:o,update:function(){B.forEach(function(le){var G=le.userData.door;le.position.y=le.userData.baseY+G.open*le.userData.h*.98,le.visible=G.open<.99}),me.forEach(function(le){var G=le.userData.lift;le.position.set(G.x+.5,G.pos-le.userData.h/2,G.z+.5)}),l.forEach(function(le){le.mesh&&(le.mesh.material=r.cells[le.z*r.mw+le.x]===10?U:P)})}}}function Qh(i,e,t){for(var n=i.attributes.uv,r=0;r<n.count;r++){var s=Math.floor(r/4),a=(s<4,e),o=s===2||s===3?e:t;n.setXY(r,n.getX(r)*a,n.getY(r)*o)}n.needsUpdate=!0}var Co=new $;function fi(i,e,t,n,r,s){let a=2*Math.PI*r/4,o=Math.max(s-2*r,0),c=Math.PI/4;Co.copy(e),Co[n]=0,Co.normalize();let u=.5*a/(a+o),l=1-Co.angleTo(i)/c;return Math.sign(Co[t])===1?l*u:o/(a+o)+u+u*(1-l)}var nu=class i extends mn{constructor(e=1,t=1,n=1,r=2,s=.1){let a=r*2+1;if(s=Math.min(e/2,t/2,n/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:r,radius:s},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new $,u=new $,l=new $(e,t,n).divideScalar(2).subScalar(s),h=this.attributes.position.array,f=this.attributes.normal.array,p=this.attributes.uv.array,g=h.length/6,y=new $,v=.5/a;for(let m=0,x=0;m<h.length;m+=3,x+=2)switch(c.fromArray(h,m),u.copy(c),u.x-=Math.sign(u.x)*v,u.y-=Math.sign(u.y)*v,u.z-=Math.sign(u.z)*v,u.normalize(),h[m+0]=l.x*Math.sign(c.x)+u.x*s,h[m+1]=l.y*Math.sign(c.y)+u.y*s,h[m+2]=l.z*Math.sign(c.z)+u.z*s,f[m+0]=u.x,f[m+1]=u.y,f[m+2]=u.z,Math.floor(m/g)){case 0:y.set(1,0,0),p[x+0]=fi(y,u,"z","y",s,n),p[x+1]=1-fi(y,u,"y","z",s,t);break;case 1:y.set(-1,0,0),p[x+0]=1-fi(y,u,"z","y",s,n),p[x+1]=1-fi(y,u,"y","z",s,t);break;case 2:y.set(0,1,0),p[x+0]=1-fi(y,u,"x","z",s,e),p[x+1]=fi(y,u,"z","x",s,n);break;case 3:y.set(0,-1,0),p[x+0]=1-fi(y,u,"x","z",s,e),p[x+1]=1-fi(y,u,"z","x",s,n);break;case 4:y.set(0,0,1),p[x+0]=1-fi(y,u,"x","y",s,e),p[x+1]=1-fi(y,u,"y","x",s,t);break;case 5:y.set(0,0,-1),p[x+0]=fi(y,u,"x","y",s,e),p[x+1]=1-fi(y,u,"y","x",s,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function ef(i,e){if(e===_h)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===aa||e===Mo){let t=i.getIndex();if(t===null){let s=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)s.push(o);i.setIndex(s),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,r=[];if(e===aa)for(let s=1;s<=n;s++)r.push(t.getX(0)),r.push(t.getX(s)),r.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(r.push(t.getX(s)),r.push(t.getX(s+1)),r.push(t.getX(s+2))):(r.push(t.getX(s+2)),r.push(t.getX(s+1)),r.push(t.getX(s)));return r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(r),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function iu(i){let e=new Map,t=new Map,n=i.clone();return fm(i,n,function(r,s){e.set(s,r),t.set(r,s)}),n.traverse(function(r){if(!r.isSkinnedMesh)return;let s=r,a=e.get(r),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function fm(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)fm(i.children[n],e.children[n],t)}var ru=class extends Bi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new lf(t)}),this.register(function(t){return new cf(t)}),this.register(function(t){return new _f(t)}),this.register(function(t){return new xf(t)}),this.register(function(t){return new yf(t)}),this.register(function(t){return new hf(t)}),this.register(function(t){return new ff(t)}),this.register(function(t){return new df(t)}),this.register(function(t){return new pf(t)}),this.register(function(t){return new of(t)}),this.register(function(t){return new mf(t)}),this.register(function(t){return new uf(t)}),this.register(function(t){return new vf(t)}),this.register(function(t){return new gf(t)}),this.register(function(t){return new sf(t)}),this.register(function(t){return new su(t,mt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new su(t,mt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Mf(t)})}load(e,t,n,r){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let u=lr.extractUrlBase(e);a=lr.resolveURL(u,this.path)}else a=lr.extractUrlBase(e);this.manager.itemStart(e);let o=function(u){r?r(u):console.error(u),s.manager.itemError(e),s.manager.itemEnd(e)},c=new js(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){try{s.parse(u,a,function(l){t(l),s.manager.itemEnd(e)},o)}catch(l){o(l)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s,a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===vm){try{a[mt.KHR_BINARY_GLTF]=new Sf(e)}catch(h){r&&r(h);return}s=JSON.parse(a[mt.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let u=new Cf(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let l=0;l<this.pluginCallbacks.length;l++){let h=this.pluginCallbacks[l](u);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let l=0;l<s.extensionsUsed.length;++l){let h=s.extensionsUsed[l],f=s.extensionsRequired||[];switch(h){case mt.KHR_MATERIALS_UNLIT:a[h]=new af;break;case mt.KHR_DRACO_MESH_COMPRESSION:a[h]=new bf(s,this.dracoLoader);break;case mt.KHR_TEXTURE_TRANSFORM:a[h]=new Tf;break;case mt.KHR_MESH_QUANTIZATION:a[h]=new Ef;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}u.setExtensions(a),u.setPlugins(o),u.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}};function yM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function un(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var mt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},sf=class{constructor(e){this.parser=e,this.name=mt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,r=t.cache.get(n);if(r)return r;let s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],u,l=new ze(16777215);c.color!==void 0&&l.setRGB(c.color[0],c.color[1],c.color[2],Fn);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":u=new ss(l),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new Jn(l),u.distance=h;break;case"spot":u=new no(l),u.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,u.angle=c.spot.outerConeAngle,u.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return u.position.set(0,0,0),qi(u,c),c.intensity!==void 0&&(u.intensity=c.intensity),u.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(u),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},af=class{constructor(){this.name=mt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ln}extendParams(e,t,n){let r=[];e.color=new ze(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Fn),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,Wt))}return Promise.all(r)}},of=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=un(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},lf=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return un(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=un(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Je(s,s)}return Promise.all(r)}},cf=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return un(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=un(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},uf=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return un(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=un(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(r)}},hf=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SHEEN}getMaterialType(e){return un(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=un(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(t.sheenColor=new ze(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],Fn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Wt)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(r)}},ff=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return un(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=un(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(r)}},df=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_VOLUME}getMaterialType(e){return un(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=un(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return t.attenuationColor=new ze().setRGB(s[0],s[1],s[2],Fn),Promise.all(r)}},pf=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IOR}getMaterialType(e){return un(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=un(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},mf=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return un(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=un(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return t.specularColor=new ze().setRGB(s[0],s[1],s[2],Fn),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Wt)),Promise.all(r)}},gf=class{constructor(e){this.parser=e,this.name=mt.EXT_MATERIALS_BUMP}getMaterialType(e){return un(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=un(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(r)}},vf=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return un(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=un(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(r)}},_f=class{constructor(e){this.parser=e,this.name=mt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},xf=class{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=r.images[a.source],c=n.textureLoader;if(o.uri){let u=n.options.manager.getHandler(o.uri);u!==null&&(c=u)}return n.loadTextureImage(e,a.source,c)}},yf=class{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=r.images[a.source],c=n.textureLoader;if(o.uri){let u=n.options.manager.getHandler(o.uri);u!==null&&(c=u)}return n.loadTextureImage(e,a.source,c)}},su=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let c=r.byteOffset||0,u=r.byteLength||0,l=r.count,h=r.byteStride,f=new Uint8Array(o,c,u);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(l,h,f,r.mode,r.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(l*h);return a.decodeGltfBuffer(new Uint8Array(p),l,h,f,r.mode,r.filter),p})})}else return null}},Mf=class{constructor(e){this.name=mt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let u of r.primitives)if(u.mode!==di.TRIANGLES&&u.mode!==di.TRIANGLE_STRIP&&u.mode!==di.TRIANGLE_FAN&&u.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let u in a)o.push(this.parser.getDependency("accessor",a[u]).then(l=>(c[u]=l,c[u])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(u=>{let l=u.pop(),h=l.isGroup?l.children:[l],f=u[0].count,p=[];for(let g of h){let y=new lt,v=new $,m=new Pn,x=new $(1,1,1),R=new Qr(g.geometry,g.material,f);for(let C=0;C<f;C++)c.TRANSLATION&&v.fromBufferAttribute(c.TRANSLATION,C),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,C),c.SCALE&&x.fromBufferAttribute(c.SCALE,C),R.setMatrixAt(C,y.compose(v,m,x));let E=null;for(let C in c)if(C==="_COLOR_0"){let L=c[C];R.instanceColor=new ir(L.array,L.itemSize,L.normalized)}else if(C!=="TRANSLATION"&&C!=="ROTATION"&&C!=="SCALE"){if(E===null){let N=R.geometry;E=new Yt,E.name=N.name;for(let S in N.attributes)E.setAttribute(S,N.attributes[S]);for(let S in N.morphAttributes)E.morphAttributes[S]=N.morphAttributes[S];N.index!==null&&E.setIndex(N.index),E.morphTargetsRelative=N.morphTargetsRelative;for(let S of N.groups)E.addGroup(S.start,S.count,S.materialIndex);N.boundingBox!==null&&(E.boundingBox=N.boundingBox.clone()),N.boundingSphere!==null&&(E.boundingSphere=N.boundingSphere.clone()),E.drawRange.start=N.drawRange.start,E.drawRange.count=N.drawRange.count,E.userData=Object.assign({},N.userData),R.geometry=E}let L=c[C];E.setAttribute(C,new ir(L.array,L.itemSize,L.normalized))}Xt.prototype.copy.call(R,g),this.parser.assignFinalMaterial(R),p.push(R)}return l.isGroup?(l.clear(),l.add(...p),l):p[0]}))}},vm="glTF",Io=12,dm={JSON:1313821514,BIN:5130562},Sf=class{constructor(e){this.name=mt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Io),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==vm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-Io,s=new DataView(e,Io),a=0;for(;a<r;){let o=s.getUint32(a,!0);a+=4;let c=s.getUint32(a,!0);if(a+=4,c===dm.JSON){let u=new Uint8Array(e,Io+a,o);this.content=n.decode(u)}else if(c===dm.BIN){let u=Io+a;this.body=e.slice(u,u+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},bf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=mt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},u={};for(let l in a){let h=Af[l]||l.toLowerCase();o[h]=a[l]}for(let l in e.attributes){let h=Af[l]||l.toLowerCase();if(a[l]!==void 0){let f=n.accessors[e.attributes[l]],p=va[f.componentType];u[h]=p.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(l){return new Promise(function(h,f){r.decodeDracoFile(l,function(p){for(let g in p.attributes){let y=p.attributes[g],v=c[g];v!==void 0&&(y.normalized=v)}h(p)},o,u,Fn,f)})})}},Tf=class{constructor(){this.name=mt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),r=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*r,e.offset.x,-e.repeat.x*r,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Ef=class{constructor(){this.name=mt.KHR_MESH_QUANTIZATION}},au=class extends Hi{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,u=o*3,l=r-t,h=(n-t)/l,f=h*h,p=f*h,g=e*u,y=g-u,v=-2*p+3*f,m=p-f,x=1-v,R=m-f+h;for(let E=0;E!==o;E++){let C=a[y+E+o],L=a[y+E+c]*l,N=a[g+E+o],S=a[g+E]*l;s[E]=x*C+R*L+v*N+m*S}return s}},MM=new Pn,wf=class extends au{interpolate_(e,t,n,r){let s=super.interpolate_(e,t,n,r);return MM.fromArray(s).normalize().toArray(s),s}},di={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},va={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},pm={9728:qt,9729:cn,9984:Yl,9985:ia,9986:cs,9987:Ei},mm={33071:li,33648:Os,10497:ci},tf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Af={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ur={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},SM={CUBICSPLINE:void 0,LINEAR:Jr,STEP:Zr},nf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function bM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new sn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:zi})),i.DefaultMaterial}function fs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function qi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function TM(i,e,t){let n=!1,r=!1,s=!1;for(let u=0,l=e.length;u<l;u++){let h=e[u];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);let a=[],o=[],c=[];for(let u=0,l=e.length;u<l;u++){let h=e[u];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(f)}if(r){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(f)}if(s){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(u){let l=u[0],h=u[1],f=u[2];return n&&(i.morphAttributes.position=l),r&&(i.morphAttributes.normal=h),s&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function EM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function wM(i){let e,t=i.extensions&&i.extensions[mt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+rf(t.attributes):e=i.indices+":"+rf(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+rf(i.targets[n]);return e}function rf(i){let e="",t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Rf(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function AM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var RM=new lt,Cf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new yM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,a=-1;if(typeof navigator!="undefined"&&typeof navigator.userAgent!="undefined"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);r=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&r<17||s&&a<98?this.textureLoader=new rs(this.options.manager):this.textureLoader=new io(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new js(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:n,userData:{}};return fs(s,o,r),qi(o,r),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){let a=t[r].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){let a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),s=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[u,l]of a.children.entries())s(l,o.children[u])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[mt.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(s,a){n.load(lr.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let a=tf[r.type],o=va[r.componentType],c=r.normalized===!0,u=new o(r.count*a);return Promise.resolve(new $t(u,a,c))}let s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],c=tf[r.type],u=va[r.componentType],l=u.BYTES_PER_ELEMENT,h=l*c,f=r.byteOffset||0,p=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0,y,v;if(p&&p!==h){let m=Math.floor(f/p),x="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+m+":"+r.count,R=t.cache.get(x);R||(y=new u(o,m*p,r.count*p/l),R=new Gs(y,p/l),t.cache.add(x,R)),v=new Vs(R,c,f%p/l,g)}else o===null?y=new u(r.count*c):y=new u(o,f,r.count*c),v=new $t(y,c,g);if(r.sparse!==void 0){let m=tf.SCALAR,x=va[r.sparse.indices.componentType],R=r.sparse.indices.byteOffset||0,E=r.sparse.values.byteOffset||0,C=new x(a[1],R,r.sparse.count*m),L=new u(a[2],E,r.sparse.count*c);o!==null&&(v=new $t(v.array.slice(),v.itemSize,v.normalized)),v.normalized=!1;for(let N=0,S=C.length;N<S;N++){let _=C[N];if(v.setX(_,L[N*c]),c>=2&&v.setY(_,L[N*c+1]),c>=3&&v.setZ(_,L[N*c+2]),c>=4&&v.setW(_,L[N*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}v.normalized=g}return v})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let r=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let u=this.loadImageSource(t,n).then(function(l){l.flipY=!1,l.name=a.name||o.name||"",l.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(l.name=o.uri);let f=(s.samplers||{})[a.sampler]||{};return l.magFilter=pm[f.magFilter]||cn,l.minFilter=pm[f.minFilter]||Ei,l.wrapS=mm[f.wrapS]||ci,l.wrapT=mm[f.wrapT]||ci,l.generateMipmaps=!l.isCompressedTexture&&l.minFilter!==qt&&l.minFilter!==cn,r.associations.set(l,{textures:e}),l}).catch(function(){return null});return this.textureCache[c]=u,u}loadImageSource(e,t){let n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=r.images[e],o=self.URL||self.webkitURL,c=a.uri||"",u=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){u=!0;let f=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let l=Promise.resolve(c).then(function(h){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(y){let v=new _n(y);v.needsUpdate=!0,f(v)}),t.load(lr.resolveURL(h,s.path),g,void 0,p)})}).then(function(h){return u===!0&&o.revokeObjectURL(c),qi(h,a),h.userData.mimeType=a.mimeType||AM(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=l,l}assignTexture(e,t,n,r){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[mt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[mt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=s.associations.get(a);a=s.extensions[mt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Ys,Bn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Xs,Bn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(r||s||a){let o="ClonedMaterial:"+n.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return sn}loadMaterial(e){let t=this,n=this.json,r=this.extensions,s=n.materials[e],a,o={},c=s.extensions||{},u=[];if(c[mt.KHR_MATERIALS_UNLIT]){let h=r[mt.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),u.push(h.extendParams(o,s,t))}else{let h=s.pbrMetallicRoughness||{};if(o.color=new ze(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Fn),o.opacity=f[3]}h.baseColorTexture!==void 0&&u.push(t.assignTexture(o,"map",h.baseColorTexture,Wt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),u.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Vn);let l=s.alphaMode||nf.OPAQUE;if(l===nf.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===nf.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Ln&&(u.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Je(1,1),s.normalTexture.scale!==void 0)){let h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&a!==Ln&&(u.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Ln){let h=s.emissiveFactor;o.emissive=new ze().setRGB(h[0],h[1],h[2],Fn)}return s.emissiveTexture!==void 0&&a!==Ln&&u.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Wt)),Promise.all(u).then(function(){let h=new a(o);return s.name&&(h.name=s.name),qi(h,s),t.associations.set(h,{materials:e}),s.extensions&&fs(r,h,s),h})}createUniqueName(e){let t=Ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function s(o){return n[mt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return gm(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let u=e[o],l=wM(u),h=r[l];if(h)a.push(h.promise);else{let f;u.extensions&&u.extensions[mt.KHR_DRACO_MESH_COMPRESSION]?f=s(u):f=gm(new Yt,u,t),u.mode===di.TRIANGLE_STRIP?f=f.then(p=>ef(p,Mo)):u.mode===di.TRIANGLE_FAN&&(f=f.then(p=>ef(p,aa))),r[l]={primitive:u,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,u=a.length;c<u;c++){let l=a[c].material===void 0?bM(this.cache):this.getDependency("material",a[c].material);o.push(l)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let u=c.slice(0,c.length-1),l=c[c.length-1],h=[];for(let p=0,g=l.length;p<g;p++){let y=l[p],v=a[p],m,x=u[p];if(v.mode===di.TRIANGLES||v.mode===di.TRIANGLE_STRIP||v.mode===di.TRIANGLE_FAN||v.mode===void 0){let R=s.isSkinnedMesh===!0,E=y.hasAttribute("skinIndex")&&y.hasAttribute("skinWeight");R&&E===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=R&&E?new Wa(y,x):new Be(y,x),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(v.mode===di.LINES)m=new Xa(y,x);else if(v.mode===di.LINE_STRIP)m=new es(y,x);else if(v.mode===di.LINE_LOOP)m=new Ya(y,x);else if(v.mode===di.POINTS)m=new ts(y,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+v.mode);Object.keys(m.geometry.morphAttributes).length>0&&EM(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),qi(m,s),v.extensions&&fs(r,m,v),t.assignFinalMaterial(m),h.push(m)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return s.extensions&&fs(r,h[0],s),h[0];let f=new st;s.extensions&&fs(r,f,s),t.associations.set(f,{meshes:e});for(let p=0,g=h.length;p<g;p++)f.add(h[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new ln(Sh.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new ki(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),qi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){let s=r.pop(),a=r,o=[],c=[];for(let u=0,l=a.length;u<l;u++){let h=a[u];if(h){o.push(h);let f=new lt;s!==null&&f.fromArray(s.array,u*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new qa(o,c)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],c=[],u=[],l=[];for(let h=0,f=r.channels.length;h<f;h++){let p=r.channels[h],g=r.samplers[p.sampler],y=p.target,v=y.node,m=r.parameters!==void 0?r.parameters[g.input]:g.input,x=r.parameters!==void 0?r.parameters[g.output]:g.output;y.node!==void 0&&(a.push(this.getDependency("node",v)),o.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",x)),u.push(g),l.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(u),Promise.all(l)]).then(function(h){let f=h[0],p=h[1],g=h[2],y=h[3],v=h[4],m=[];for(let R=0,E=f.length;R<E;R++){let C=f[R],L=p[R],N=g[R],S=y[R],_=v[R];if(C===void 0)continue;C.updateMatrix&&C.updateMatrix();let b=n._createAnimationTracks(C,L,N,S,_);if(b)for(let A=0;A<b.length;A++)m.push(b[A])}let x=new is(s,void 0,m);return qi(x,r),x})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,u=r.weights.length;c<u;c++)o.morphTargetInfluences[c]=r.weights[c]}),a})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=r.children||[];for(let u=0,l=o.length;u<l;u++)a.push(n.getDependency("node",o[u]));let c=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),c]).then(function(u){let l=u[0],h=u[1],f=u[2];f!==null&&l.traverse(function(p){p.isSkinnedMesh&&p.bind(f,RM)});for(let p=0,g=h.length;p<g;p++)l.add(h[p]);if(l.userData.pivot!==void 0&&h.length>0){let p=l.userData.pivot,g=h[0];l.pivot=new $().fromArray(p),l.position.x-=p[0],l.position.y-=p[1],l.position.z-=p[2],g.position.set(0,0,0),delete l.userData.pivot}return l})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],c=r._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(u){return r._getNodeRef(r.cameraCache,s.camera,u)})),r._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){o.push(u)}),this.nodeCache[e]=Promise.all(o).then(function(u){let l;if(s.isBone===!0?l=new Ws:u.length>1?l=new st:u.length===1?l=u[0]:l=new Xt,l!==u[0])for(let h=0,f=u.length;h<f;h++)l.add(u[h]);if(s.name&&(l.userData.name=s.name,l.name=a),qi(l,s),s.extensions&&fs(n,l,s),s.matrix!==void 0){let h=new lt;h.fromArray(s.matrix),l.applyMatrix4(h)}else s.translation!==void 0&&l.position.fromArray(s.translation),s.rotation!==void 0&&l.quaternion.fromArray(s.rotation),s.scale!==void 0&&l.scale.fromArray(s.scale);if(!r.associations.has(l))r.associations.set(l,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){let h=r.associations.get(l);r.associations.set(l,{...h})}return r.associations.get(l).nodes=e,l}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,s=new st;n.name&&(s.name=r.createUniqueName(n.name)),qi(s,n),n.extensions&&fs(t,s,n);let a=n.nodes||[],o=[];for(let c=0,u=a.length;c<u;c++)o.push(r.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let l=0,h=c.length;l<h;l++){let f=c[l];f.parent!==null?s.add(iu(f)):s.add(f)}let u=l=>{let h=new Map;for(let[f,p]of r.associations)(f instanceof Bn||f instanceof _n)&&h.set(f,p);return l.traverse(f=>{let p=r.associations.get(f);p!=null&&h.set(f,p)}),h};return r.associations=u(s),s})}_createAnimationTracks(e,t,n,r,s){let a=[],o=e.name?e.name:e.uuid,c=[];function u(p){p.morphTargetInfluences&&c.push(p.name?p.name:p.uuid)}Ur[s.path]===Ur.weights?(u(e),e.isGroup&&e.children.forEach(u)):c.push(o);let l;switch(Ur[s.path]){case Ur.weights:l=sr;break;case Ur.rotation:l=ar;break;case Ur.translation:case Ur.scale:l=Cr;break;default:n.itemSize===1?l=sr:l=Cr;break}let h=r.interpolation!==void 0?SM[r.interpolation]:Jr,f=this._getArrayFromAccessor(n);for(let p=0,g=c.length;p<g;p++){let y=new l(c[p]+"."+Ur[s.path],t.array,f,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),a.push(y)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Rf(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let r=this instanceof ar?wf:au;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function CM(i,e,t){let n=e.attributes,r=new Hn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,u=o.max;if(c!==void 0&&u!==void 0){if(r.set(new $(c[0],c[1],c[2]),new $(u[0],u[1],u[2])),o.normalized){let l=Rf(va[o.componentType]);r.min.multiplyScalar(l),r.max.multiplyScalar(l)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new $,c=new $;for(let u=0,l=s.length;u<l;u++){let h=s[u];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){let y=Rf(va[f.componentType]);c.multiplyScalar(y)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}i.boundingBox=r;let a=new kn;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=a}function gm(i,e,t){let n=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=Af[a]||a.toLowerCase();o in i.attributes||r.push(s(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});r.push(a)}return ct.workingColorSpace!==Fn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ct.workingColorSpace}" not supported.`),qi(i,e),CM(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?TM(i,e.targets,t):i})}var ou=2,If={imp:["imp"],gnasher:["gnasher"],knight:["knight","emberknight","ember_knight"],riley:["riley","rileyhologram"],fist:["fist","fists","fpfist","weaponfist"],pistol:["pistol","fppistol","weaponpistol"],shotgun:["shotgun","fpshotgun","weaponshotgun","pumpshotgun","doublebarrelshotgun"],chaingun:["chaingun","fpchaingun","weaponchaingun","minigun"],rocket:["rocketlauncher","rocket","fprocketlauncher","weaponrocketlauncher","launcher"],crate:["crate","woodencrate","crateintact"],barrel:["barrel","explosivebarrel","toxicbarrel"],torch:["torch","standingtorch"],lamp:["lamp","ceilinglamp","cagedlamp","ceilinglampintact","lampintact"],lampBroken:["lampbroken","ceilinglampbroken","brokenlamp"],pipeStraight:["pipestraight","pipe"],pipeElbow:["pipeelbow","elbow"],pipeValve:["pipevalve","valve"],chain:["chain","hangingchain"],"pickup:h":["medkitsmall","stimpack","smallmedkit","stim"],"pickup:+":["medkitlarge","medkit","largemedkit","medikit"],"pickup:b":["bulletclip","clip","ammoclip","bullets"],"pickup:a":["shellbox","shells","boxofshells"],"pickup:k":["rocketbox","rockets","boxofrockets"],"pickup:A":["armor","armour","armorvest","armourvest","vest"],"pickup:r":["keycardred","redkeycard","keyred"],"pickup:u":["keycardblue","bluekeycard","keyblue"],"pickup:P":["phoenixorb","orb"],"pickup:2":["shotgunpickup","pickupshotgun"],"pickup:3":["chaingunpickup","pickupchaingun"],"pickup:4":["rocketlauncherpickup","pickuprocketlauncher"],"tex:1":["brick"],"tex:2":["stone"],"tex:3":["metalpanel","metal"],"tex:4":["techpanel","tech"],"tex:5":["hellrock","hell"],"tex:6":["door","doorplain"],"tex:7":["doorred","doorredstripe","reddoor"],"tex:8":["doorblue","doorbluestripe","bluedoor"],"tex:9":["switchoff"],"tex:10":["switchon"],"tex:slab":["floorslab","slab"],"tex:tech":["floorgrate","grate"],"tex:hell":["lavafloor","floorlava"],"tex:ceilDark":["ceilingpanel","ceiling"],"tex:ceilTech":["ceilingpanel","ceilingtech"],"tex:ceilHell":["hellrock","ceilinghell"]};function Po(i){return String(i||"").toLowerCase().replace(/\.[a-z0-9]+$/,"").replace(/.*[\/\\]/,"").replace(/[^a-z0-9]/g,"")}function Pf(){var i={models:{},textures:{},ready:!1,loaded:[],problems:[]};return i.model=function(e){for(var t=If[e]||[e],n=0;n<t.length;n++)if(i.models[t[n]])return i.models[t[n]];return null},i.texture=function(e){for(var t=If[e]||[e],n=0;n<t.length;n++)if(i.textures[t[n]])return i.textures[t[n]];return null},i}var IM=["assets","assets/codex","assets/cc0"];function Lf(i){var e=typeof window!="undefined"&&window.FIREBIRD_ASSET_PACK;return e&&Object.prototype.hasOwnProperty.call(e,i)?e[i]:void 0}function _m(i){var e=Lf(i);if(e===void 0)return i;var t=/\.png$/i.test(i)?"image/png":/\.jpe?g$/i.test(i)?"image/jpeg":/\.webp$/i.test(i)?"image/webp":"model/gltf-binary";return"data:"+t+";base64,"+e}function PM(i){var e=Lf(i+"/assets.json");return e!==void 0?Promise.resolve(e):typeof location!="undefined"&&location.protocol==="file:"?Promise.resolve(null):fetch(i+"/assets.json",{cache:"no-cache"}).then(function(t){return t.ok?t.json():null}).catch(function(){return null})}function ym(i,e){var t=typeof window!="undefined"&&window.FIREBIRD_ASSET_PACK;i=i||t&&t.__dirs||IM;var n=Pf(),r=new ru,s=new rs,a=[],o={};return n.ensure=function(l){var h=Array.from(new Set(l||[])).map(function(f){var p=f.indexOf("tex:")===0?n.texture:n.model;if(p(f))return Promise.resolve();if(o[f])return o[f];var g=(If[f]||[f]).map(Po),y=a.filter(function(m){return g.indexOf(m.id)>=0});y.sort(function(m,x){return m.priority-x.priority});var v=y.reduce(function(m,x){return m.then(function(){if(!p(f)){var R=x.entry.file||x.entry.path||x.entry.src;if(typeof location!="undefined"&&location.protocol==="file:"){var E=[R].concat(Object.values(x.entry.maps||x.entry.textures||{})).filter(Boolean);if(E.some(function(C){return Lf(x.dir+"/"+C)===void 0}))return}return u(x.dir,x.entry,x.priority)}})},Promise.resolve()).finally(function(){delete o[f]});return o[f]=v,v});return Promise.all(h).then(function(){return n.ready=!0,n})},Promise.all(i.map(function(l){return PM(l).then(function(h){return{dir:l,man:h}})})).then(function(l){return l.forEach(function(h,f){if(h.man){var p=Array.isArray(h.man)?h.man:h.man.assets||h.man.files||[];p.forEach(function(g){a.push({dir:h.dir,entry:g,priority:f,id:Po(g.id||g.name||g.file)})})}}),n.ensure(e||[])});function c(l,h,f,p){var g=l[h];(!g||g.priority>p)&&(f.priority=p,l[h]=f)}function u(l,h,f){var p=h.file||h.path||h.src,g=String(h.type||h.kind||"").toLowerCase(),y=Po(h.id||h.name||p);if(p&&/\.glb$/i.test(p))return xm(r.loadAsync(_m(l+"/"+p)),2e4).then(function(C){c(n.models,y,{scene:C.scene,animations:C.animations||[],meta:h,type:g,dir:l},f),n.loaded.push(l+":"+y)}).catch(function(C){n.problems.push(l+"/"+p+": "+(C&&C.message||C))});if(g.indexOf("tex")===0||h.maps||h.textures){var v=h.maps||h.textures||{},m={},x=[],R={map:["albedo","basecolor","base_color","color","diffuse"],normalMap:["normal","normalmap"],roughnessMap:["roughness","rough","orm"],emissiveMap:["emissive","emission","glow"]},E=h.filter!=="linear";return Object.keys(R).forEach(function(C){var L=null;Object.keys(v).forEach(function(N){R[C].indexOf(N.toLowerCase().replace(/[^a-z_]/g,""))>=0&&(L=v[N])}),L&&x.push(xm(s.loadAsync(_m(l+"/"+L)),2e4).then(function(N){N.wrapS=N.wrapT=ci,N.anisotropy=8,N.colorSpace=C==="map"||C==="emissiveMap"?Wt:Qn,E&&(N.magFilter=qt),m[C]=N}).catch(function(N){n.problems.push(l+"/"+L+": "+(N&&N.message||N))}))}),Promise.all(x).then(function(){m.map&&(c(n.textures,y,m,f),n.loaded.push(l+":tex:"+y))})}return null}}function xm(i,e){return new Promise(function(t,n){var r=setTimeout(function(){n(new Error("timed out"))},e);i.then(function(s){clearTimeout(r),t(s)},function(s){clearTimeout(r),n(s)})})}function ds(i){var e=iu(i.scene);e.traverse(function(r){r.isMesh&&(r.castShadow=!0,r.frustumCulled=!r.isSkinnedMesh,r.material&&(r.material=Array.isArray(r.material)?r.material.map(function(s){return s.clone()}):r.material.clone()))});var t=i.animations.length?new so(e):null,n={};return i.animations.forEach(function(r){n[Po(r.name).replace(/^.*\|/,"")]=r}),{obj:e,mixer:t,clips:n}}function Lo(i,e){var t=Po(e);if(i[t])return i[t];for(var n in i)if(n.indexOf(t)>=0)return i[n];return null}var Mm={};function Ne(i,e){return Mm[i]||(Mm[i]=e())}function Et(i,e){return new sn(Object.assign({color:i,roughness:.7,metalness:.05},e||{}))}function Sn(i,e){return new sn({color:0,emissive:i,emissiveIntensity:e||3,roughness:1})}function Ve(i,e,t,n,r,s){var a=new Be(i,e);return a.position.set(t,n,r),a.castShadow=!0,(s||this).add(a),a}var ti=function(){return new Ar(1,16,12)},Jt=function(){return new mn(1,1,1)},Or=function(){return new ja(1,1,10)},An=function(){return new Zs(1,1,1,14)},ps=function(){return new Ja(1,1,6,12)};function cu(i){var e=[];return i.traverse(function(t){t.isMesh&&t.material&&!t.userData.noFlash&&(t.material=t.material.clone(),e.push(t.material))}),e}function LM(){var i=new st,e=new st;i.add(e);var t=Et(8007196,{roughness:.6}),n=Et(3806220),r=Et(15259824,{roughness:.4}),s=Ve(Ne("cap",ps),t,0,.5,0,e);s.scale.set(.17,.14,.13),s.rotation.x=.35;var a=Ve(Ne("sph",ti),t,0,.72,.06,e);a.scale.set(.11,.1,.11),[-1,1].forEach(function(c){var u=Ve(Ne("cone",Or),n,c*.07,.83,.02,e);u.scale.set(.025,.12,.025),u.rotation.z=-c*.5;var l=Ve(Ne("sph",ti),Sn(16752672,2),c*.045,.74,.15,e);l.scale.setScalar(.018),l.userData.noFlash=!0;var h=new st;h.position.set(c*.17,.58,.02),e.add(h);var f=Ve(Ne("cap",ps),t,0,-.1,0,h);f.scale.set(.04,.09,.04);var p=Ve(Ne("cone",Or),r,0,-.26,.03,h);p.scale.set(.03,.07,.03),p.rotation.x=Math.PI,h.userData.side=c,e.userData["arm"+c]=h;var g=Ve(Ne("cap",ps),n,c*.08,.18,0,e);g.scale.set(.05,.12,.05),e.userData["leg"+c]=g;var y=Ve(Ne("cone",Or),n,c*.06,.55,-.12,e);y.scale.set(.03,.09,.03),y.rotation.x=-1.2});var o=cu(i);return{obj:i,mats:o,animate:function(c,u){var l=c.state==="chase"||c.state==="flee"?Math.sin(u*9+c.animT):0;e.position.y=Math.abs(l)*.03,e.userData.leg1.rotation.x=l*.6,e.userData["leg-1"].rotation.x=-l*.6;var h=c.state==="windup"?1:0;e.userData.arm1.rotation.x=-l*.5-h*2.4,e.userData["arm-1"].rotation.x=l*.5-h*.4,e.rotation.x=c.state==="pain"?-.35:0}}}function NM(){var i=new st,e=new st;i.add(e);var t=Et(12873850,{roughness:.55}),n=Et(3803152),r=Et(16051416,{roughness:.3}),s=Ve(Ne("sph",ti),t,0,.36,0,e);s.scale.set(.34,.28,.32);var a=new st;a.position.set(0,.3,.12),e.add(a);var o=Ve(Ne("sph",ti),n,0,.04,.12,e);o.scale.set(.24,.1,.12),o.position.y=.33;for(var c=0;c<9;c++){var u=(c/8-.5)*2.4,l=Ve(Ne("cone",Or),r,Math.sin(u)*.22,.42,.14+Math.cos(u)*.14,e);l.scale.set(.028,.08,.028),l.rotation.x=Math.PI;var h=Ve(Ne("cone",Or),r,Math.sin(u)*.2,-.02,Math.cos(u)*.14+.02,a);h.scale.set(.025,.07,.025)}var f=Ve(Ne("sph",ti),t,0,-.04,.02,a);f.scale.set(.26,.08,.22),[-1,1].forEach(function(g){var y=Ve(Ne("sph",ti),Sn(16752688,.9),g*.12,.56,.25,e);y.scale.setScalar(.02),y.userData.noFlash=!0;var v=Ve(Ne("cap",ps),t,g*.18,.1,0,e);v.scale.set(.07,.07,.07),e.userData["leg"+g]=v});var p=cu(i);return{obj:i,mats:p,animate:function(g,y){var v=g.state==="chase"||g.state==="flee"?Math.sin(y*14+g.animT):0;e.position.y=Math.abs(v)*.04,e.userData.leg1.position.z=v*.08,e.userData["leg-1"].position.z=-v*.08;var m=g.state==="windup"?.7:(Math.sin(y*6+g.animT)+1)*.08;a.rotation.x=m,e.rotation.x=g.state==="windup"?.25:g.state==="pain"?-.3:0}}}function DM(){var i=new st,e=new st;i.add(e);var t=Et(9052182,{roughness:.35,metalness:.6}),n=Et(2757648,{roughness:.5,metalness:.4}),r=Sn(16734736,4),s=Ve(Ne("box",Jt),t,0,.82,0,e);s.scale.set(.5,.42,.3);var a=Ve(Ne("box",Jt),n,0,.55,0,e);a.scale.set(.4,.16,.26);var o=Ve(Ne("sph",ti),r,0,.84,.16,e);o.scale.setScalar(.07),o.userData.noFlash=!0;var c=Ve(Ne("box",Jt),t,0,1.12,.02,e);c.scale.set(.2,.18,.2);var u=Ve(Ne("box",Jt),Sn(16747040,5),0,1.13,.12,e);u.scale.set(.15,.03,.02),u.userData.noFlash=!0,[-1,1].forEach(function(h){var f=Ve(Ne("cone",Or),n,h*.14,1.26,0,e);f.scale.set(.04,.2,.04),f.rotation.z=-h*.7;var p=Ve(Ne("sph",ti),t,h*.3,1,0,e);p.scale.set(.14,.1,.14);var g=new st;g.position.set(h*.33,.95,0),e.add(g),e.userData["arm"+h]=g;var y=Ve(Ne("box",Jt),t,0,-.25,0,g);y.scale.set(.13,.42,.13);var v=Ve(Ne("box",Jt),n,0,-.5,.02,g);v.scale.set(.15,.13,.15);var m=Ve(Ne("box",Jt),n,h*.13,.24,0,e);m.scale.set(.15,.48,.17),e.userData["leg"+h]=m});var l=cu(i);return{obj:i,mats:l,animate:function(h,f){var p=h.state==="chase"?Math.sin(f*6+h.animT):0;e.userData.leg1.rotation.x=p*.4,e.userData["leg-1"].rotation.x=-p*.4,e.userData.arm1.rotation.x=h.state==="windup"?-2.2:-p*.3,e.userData["arm-1"].rotation.x=h.state==="windup"?-1.2:p*.3,e.position.y=Math.abs(p)*.03}}}function UM(){var i=new st,e=new st;i.add(e);var t=new sn({color:665648,emissive:4184296,emissiveIntensity:1.2,transparent:!0,opacity:.82,roughness:.3,metalness:.2}),n=new sn({color:0,emissive:10484991,emissiveIntensity:3}),r=Ve(Ne("cap",ps),t,0,.58,0,e);r.scale.set(.13,.16,.09);var s=Ve(Ne("box",Jt),t,0,.4,0,e);s.scale.set(.22,.08,.13);var a=Ve(Ne("sph",ti),t,0,.86,0,e);a.scale.set(.085,.1,.09);var o=Ve(Ne("box",Jt),n,0,.87,.07,e);o.scale.set(.12,.028,.02);var c=Ve(Ne("sph",ti),n,0,.64,.08,e);c.scale.setScalar(.03),[-1,1].forEach(function(f){var p=new st;p.position.set(f*.15,.72,0),e.add(p),e.userData["arm"+f]=p;var g=Ve(Ne("cap",ps),t,0,-.14,0,p);g.scale.set(.035,.13,.035);var y=Ve(Ne("cap",ps),t,f*.07,.18,0,e);y.scale.set(.045,.16,.045),e.userData["leg"+f]=y});var u=new Be(Ne("sph",ti),new sn({color:0,emissive:16765502,emissiveIntensity:1.5,transparent:!0,opacity:.25,side:Vn,depthWrite:!1}));u.scale.setScalar(.62),u.position.y=.5,u.userData.noFlash=!0,i.add(u);var l=[t],h=new Be(new Rr(.34,.012,6,40),n);return h.rotation.x=Math.PI/2,h.position.y=.02,i.add(h),{obj:i,mats:l,animate:function(f,p){var g=f.state==="chase"?Math.sin(p*8+f.animT):0;e.userData.leg1.rotation.x=g*.5,e.userData["leg-1"].rotation.x=-g*.5,e.userData.arm1.rotation.x=f.state==="windup"?-1.5:-g*.4,e.userData["arm-1"].rotation.x=f.state==="windup"?-1.5:g*.4,e.position.y=.03+Math.sin(p*2)*.015;var y=f.state==="windup"&&f.attack!=="melee";n.emissive.setHex(y?16777215:10484991),n.emissiveIntensity=y?8:3,t.opacity=.7+Math.sin(p*23)*.06+(Math.random()<.02?-.3:0),u.visible=f.shieldT>0,u.rotation.y=p*1.5,h.scale.setScalar(1+Math.sin(p*3)*.05)}}}function OM(){var i=new st,e=Ve(Ne("cyl",An),Et(4872762,{roughness:.45,metalness:.5}),0,.28,0,i);e.scale.set(.2,.55,.2),[.08,.48].forEach(function(r){var s=Ve(Ne("cyl",An),Et(2764326,{metalness:.6,roughness:.4}),0,r,0,i);s.scale.set(.205,.03,.205)});var t=Ve(Ne("cyl",An),Sn(7012154,2.5),0,.56,0,i);t.scale.set(.16,.01,.16),t.userData.noFlash=!0;var n=Ve(Ne("box",Jt),Sn(16765502,1.5),0,.3,.2,i);return n.scale.set(.12,.12,.005),n.rotation.z=Math.PI/4,n.userData.noFlash=!0,{obj:i,mats:cu(i),animate:function(){}}}var FM={imp:LM,gnasher:NM,knight:DM,riley:UM,barrel:OM};function HM(i,e){var t=ds(i),n=new st;t.obj.scale.setScalar(1/ou),n.add(t.obj);var r=[],s=[],a=t.obj.getObjectByName("shield");t.obj.traverse(function(h){h.isMesh&&(Array.isArray(h.material)?h.material:[h.material]).forEach(function(f){var p=e.kind==="riley"?.65:1.2;f.emissive&&f.emissiveIntensity>p&&(f.emissiveIntensity=p),/tell/i.test(f.name)||/tell/i.test(h.name)?s.push(f):f.emissive&&r.push(f)})});var o=null,c=null;function u(h,f){if(t.mixer){var p=Lo(t.clips,h)||(h==="attack_windup"?Lo(t.clips,"attack"):null)||Lo(t.clips,"idle");if(p){var g=t.mixer.clipAction(p);o!==g&&(g.reset(),g.setLoop(f?Pc:Lc,1/0),g.clampWhenFinished=!!f,g.play(),o&&o.crossFadeTo(g,.15,!1),o=g)}}}var l={idle:"idle",chase:"walk",flee:"walk",windup:"attack_windup",pain:"pain",die:"death",dead:"death"};return{obj:n,mats:r,animate:function(h,f,p){var g=h.state||"idle";g!==c&&(c==="windup"&&g==="chase"&&Lo(t.clips,"attack")?u("attack",!0):u(l[g]||"idle",g==="pain"||g==="die"||g==="dead"),c=g),o&&o.getClip().name&&/attack$/i.test(o.getClip().name)&&!o.isRunning()&&g==="chase"&&u("walk"),t.mixer&&t.mixer.update(p||0);var y=g==="windup"&&h.attack!=="melee";s.forEach(function(v){v.emissive&&(v.emissive.setHex(y?16777215:10484991),v.emissiveIntensity=y?4.5:.65)}),a&&(a.visible=h.shieldT>0)},authored:!0,clip:function(){return o?o.getClip().name:null}}}function Sm(i,e){var t=e&&e.model(i.kind),n=t?HM(t,i):FM[i.kind](),r=!t&&i.kind==="riley"?i.h/.95:1;n.obj.scale.setScalar(r);var s=0,a=n.animate;return n.debug=function(){return{kind:i.kind,authored:!!n.authored,clip:n.clip?n.clip():null,state:i.state}},n.update=function(o,c,u){n.obj.position.set(i.x,i.y,i.z);var l=i.state==="windup"||i.state==="pain"||i.los?u:i.moveAng||0,h=n.obj.rotation.y,f=-l+Math.PI/2,p=Math.atan2(Math.sin(f-h),Math.cos(f-h));if(n.obj.rotation.y=h+p*Math.min(1,c*10),n.authored)a(i,o,c);else if(i.state==="die"||i.state==="dead"){s+=c;var g=Math.min(1,s/.45);n.obj.rotation.x=-g*1.35,n.obj.position.y=i.y+.05*g,n.obj.scale.setScalar(r*(1-g*.15)),i.kind==="riley"&&(n.obj.visible=s*12%1<.6&&s<1.4)}else a(i,o);var y=i.flashT>0&&i.state!=="dead";n.mats.forEach(function(v){v.userData.base||(v.userData.base={e:v.emissive?v.emissive.getHex():0,i:v.emissiveIntensity}),y?(v.emissive.setHex(16777215),v.emissiveIntensity=1.4):(v.emissive.setHex(v.userData.base.e),v.emissiveIntensity=v.userData.base.i)})},n}function bm(i,e){var t=new st,n=new st;t.add(n);var r=i.item,s=e&&e.model("pickup:"+r);if(s){var a=ds(s);a.obj.scale.setScalar(1/ou),n.add(a.obj)}else if(r==="h"||r==="+"){var o=r==="+",c=Ve(Ne("box",Jt),Et(15789280,{roughness:.5}),0,.1,0,n);c.scale.set(o?.34:.2,o?.2:.14,o?.24:.14);var u=Ve(Ne("box",Jt),Sn(16722458,2),0,.1,0,n);u.scale.set(o?.22:.13,o?.06:.04,o?.245:.145);var l=Ve(Ne("box",Jt),Sn(16722458,2),0,.1,0,n);l.scale.set(o?.07:.045,o?.06:.04,o?.245:.145),l.scale.set(o?.345:.205,o?.06:.04,o?.07:.045)}else if(r==="b"){var h=Ve(Ne("box",Jt),Et(6972504,{metalness:.5,roughness:.4}),0,.08,0,n);h.scale.set(.1,.16,.06);var f=Ve(Ne("box",Jt),Et(14196800,{metalness:.8,roughness:.3}),0,.17,0,n);f.scale.set(.08,.03,.04)}else if(r==="a"){var p=Ve(Ne("box",Jt),Et(10496024,{roughness:.6}),0,.09,0,n);p.scale.set(.3,.18,.18);for(var g=0;g<4;g++){var y=Ve(Ne("cyl",An),Et(14196800,{metalness:.8,roughness:.3}),-.1+g*.066,.2,0,n);y.scale.set(.022,.06,.022)}}else if(r==="k"){var v=Ve(Ne("box",Jt),Et(5453863,{metalness:.25,roughness:.7}),0,.12,0,n);v.scale.set(.32,.22,.23);var m=Ve(Ne("box",Jt),Sn(16747048,1.5),0,.13,.12,n);m.scale.set(.18,.045,.012)}else if(r==="A"){var x=Ve(Ne("box",Jt),Et(3050042,{metalness:.4,roughness:.4}),0,.2,0,n);x.scale.set(.34,.36,.14);var R=Ve(Ne("box",Jt),Sn(8060810,1.2),0,.26,.075,n);R.scale.set(.16,.1,.01)}else if(r==="2"){var E=Nf(!0);E.scale.setScalar(.9),E.rotation.z=.2,E.position.y=.15,n.add(E)}else if(r==="3"||r==="4"){var C=r==="3"?Df(!0):Uf(!0);C.scale.setScalar(.7),C.rotation.z=.2,C.position.y=.2,n.add(C)}else if(r==="r"||r==="u"){var L=r==="r"?16722458:3832575,N=Ve(Ne("box",Jt),Sn(L,2.5),0,.2,0,n);N.scale.set(.16,.22,.015);var S=Ve(Ne("box",Jt),Et(15788760),0,.25,0,n);S.scale.set(.12,.03,.02)}else if(r==="P"){var _=Ve(Ne("sph",ti),Sn(16756800,4),0,.3,0,n);_.scale.setScalar(.14);var b=new Be(new Rr(.2,.012,6,32),Sn(16765502,3));b.position.y=.3,n.add(b)}var A=r==="r"||r==="u"||r==="P"||r==="2"||r==="3"||r==="4";return{obj:t,update:function(M){t.position.set(i.x,i.y,i.z),t.visible=!i.gone,A&&(n.rotation.y=M*1.8+i.bob),n.position.y=A?.08+Math.sin(M*2.5+i.bob)*.05:0}}}function Tm(i,e){var t=new st,n=e&&e.model("torch");if(n){var r=ds(n);return r.obj.scale.setScalar(1/ou),t.add(r.obj),t.position.set(i.x,i.y,i.z),{obj:t,update:function(l){r.mixer&&r.mixer.update(1/60)}}}var s=Ve(Ne("cyl",An),Et(3811866,{metalness:.3}),0,.4,0,t);s.scale.set(.03,.8,.03);var a=Ve(Ne("cyl",An),Et(5917242,{metalness:.6,roughness:.4}),0,.82,0,t);a.scale.set(.1,.06,.1);var o=new st;o.position.y=.9,t.add(o);var c=Ve(Ne("cone",Or),Sn(16747040,5),0,.08,0,o);c.scale.set(.08,.2,.08);var u=Ve(Ne("cone",Or),Sn(16769120,6),0,.05,0,o);return u.scale.set(.045,.12,.045),t.position.set(i.x,i.y,i.z),{obj:t,update:function(l){var h=Math.sin(l*17+i.animT*9)*.5+Math.sin(l*29+i.animT*3)*.5;o.scale.set(1+h*.1,1+h*.25,1+h*.1),o.rotation.y=l*3}}}var BM=function(i,e,t,n){return new nu(i,e,t,3,n)};function wn(i,e,t,n,r){return Ne("rb"+i,function(){return BM(e,t,n,r)})}var uu=function(){return Et(3816772,{metalness:.9,roughness:.3})},hu=function(){return Et(1842724,{metalness:.85,roughness:.4})},kM=function(){return Et(6961690,{roughness:.55,metalness:.05})},lu=function(){return Et(2760988,{roughness:.85})},Em=function(){return Et(3818032,{roughness:.9})};function wm(i,e){var t=!1;i.traverse(function(n){/hand|arm|glove/i.test(n.name)&&(t=!0)}),!t&&(e==="shotgun"||e==="chaingun"||e==="rocket"?(Xi(i,.01,-.07,.08,.4),Xi(i,-.01,-.05,-.2,.1)):e!=="fist"&&Xi(i,0,-.06,.02,.3))}function Xi(i,e,t,n,r){var s=new st;s.position.set(e,t,n),s.rotation.x=r||0,i.add(s);var a=new Be(wn("palm",.07,.05,.09,.02),lu());s.add(a);var o=new Be(wn("fing",.075,.03,.05,.012),lu());o.position.set(0,-.03,-.03),s.add(o);var c=new Be(Ne("cyl",An),Em());return c.scale.set(.045,.28,.045),c.rotation.x=Math.PI/2-.15,c.position.set(.01,-.02,.17),s.add(c),s}function Nf(i){var e=new st,t=uu(),n=hu(),r=kM();[-.019,.019].forEach(function(y){var v=new Be(Ne("cyl",An),t);v.scale.set(.019,.62,.019),v.rotation.x=Math.PI/2,v.position.set(y,0,-.36),e.add(v);var m=new Be(Ne("cyl",An),Et(328965));m.scale.set(.013,.01,.013),m.rotation.x=Math.PI/2,m.position.set(y,0,-.672),e.add(m)});var s=new Be(wn("rib",.012,.01,.6,.004),n);s.position.set(0,.022,-.36),e.add(s);var a=new Be(Ne("sph",ti),Sn(16769184,1.2));a.scale.setScalar(.006),a.position.set(0,.03,-.66),e.add(a);var o=new st;o.position.set(0,-.034,-.3),e.add(o),e.userData.pump=o;var c=new Be(wn("fore",.066,.05,.2,.015),r);o.add(c);for(var u=0;u<5;u++){var l=new Be(wn("grip",.068,.006,.012,.002),Et(3808780));l.position.set(0,-.022,-.08+u*.04),o.add(l)}var h=new Be(wn("recv",.075,.085,.2,.012),n);h.position.set(0,-.012,.02),e.add(h);var f=new Be(wn("port",.005,.03,.07,.003),Et(657930));f.position.set(.039,0,0),e.add(f);var p=new Be(new Rr(.025,.005,6,14,Math.PI),n);p.position.set(0,-.055,.07),p.rotation.set(0,Math.PI/2,Math.PI),e.add(p);var g=new Be(wn("stock",.064,.1,.28,.02),r);return g.position.set(0,-.055,.24),g.rotation.x=-.14,e.add(g),i||(e.userData.pumpHand=Xi(o,-.005,-.045,.01,.1),Xi(e,.01,-.08,.1,.4)),e}function Am(){var i=new st,e=uu(),t=hu(),n=new Be(wn("slide",.042,.042,.19,.008),e);n.position.set(0,.02,-.07),i.add(n),i.userData.slide=n;for(var r=0;r<6;r++){var s=new Be(wn("ser",.044,.03,.004,.001),t);s.position.set(0,.022,0+r*.008-.02),n.add(s),s.position.set(0,0,.06+r*.008)}var a=new Be(wn("frame",.038,.03,.16,.008),t);a.position.set(0,-.012,-.06),i.add(a);var o=new Be(Ne("cyl",An),Et(526344));o.scale.set(.009,.01,.009),o.rotation.x=Math.PI/2,o.position.set(0,.022,-.166),i.add(o);var c=new Be(wn("pgrip",.036,.11,.05,.01),Et(2761760,{roughness:.8}));c.position.set(0,-.07,.01),c.rotation.x=.28,i.add(c);var u=new Be(new Rr(.018,.004,6,14,Math.PI),t);u.position.set(0,-.03,-.035),u.rotation.set(0,Math.PI/2,Math.PI),i.add(u);var l=new Be(wn("sight",.006,.01,.01,.002),Sn(16734762,1.5));l.position.set(0,.046,-.155),i.add(l);var h=new Be(wn("rear",.03,.01,.008,.002),t);return h.position.set(0,.046,.02),i.add(h),Xi(i,0,-.07,.04,.3),i}function Rm(){var i=new st,e=new Be(wn("fist",.1,.085,.11,.03),lu());i.add(e);var t=new Be(wn("knuck",.105,.04,.03,.012),Et(5917242,{metalness:.7,roughness:.35}));t.position.set(0,.02,-.06),i.add(t);var n=new Be(wn("thumb",.03,.03,.06,.012),lu());n.position.set(-.05,-.01,-.02),i.add(n);var r=new Be(Ne("cyl",An),Em());return r.scale.set(.05,.3,.05),r.rotation.x=Math.PI/2,r.position.set(0,-.01,.2),i.add(r),i}function Df(i){var e=new st,t=hu(),n=uu(),r=Ve(Ne("box",Jt),t,0,0,.02,e);r.scale.set(.16,.14,.3);var s=Ve(Ne("cyl",An),n,0,-.1,.06,e);s.scale.set(.12,.16,.12);var a=new st;a.name="barrels",a.position.z=-.25,e.add(a),e.userData.barrels=a;for(var o=0;o<6;o++){var c=o*Math.PI/3,u=Ve(Ne("cyl",An),n,Math.cos(c)*.055,Math.sin(c)*.055,-.27,a);u.scale.set(.019,.54,.019),u.rotation.x=Math.PI/2}var l=Ve(Ne("cyl",An),Et(10774322,{metalness:.7}),0,0,-.47,e);return l.scale.set(.085,.055,.085),l.rotation.x=Math.PI/2,i||(Xi(e,.03,-.12,.13,.3),Xi(e,-.04,-.13,-.23,.15)),e}function Uf(i){var e=new st,t=uu(),n=hu(),r=new st;r.name="tube",e.add(r),e.userData.tube=r;var s=Ve(Ne("cyl",An),n,0,0,-.3,r);s.scale.set(.09,.8,.09),s.rotation.x=Math.PI/2;var a=Ve(Ne("cyl",An),t,0,0,-.7,r);a.scale.set(.11,.07,.11),a.rotation.x=Math.PI/2;var o=Ve(Ne("cyl",An),Et(10308388,{metalness:.5}),0,0,-.22,r);o.scale.set(.102,.07,.102),o.rotation.x=Math.PI/2;var c=Ve(Ne("box",Jt),Sn(16753706,1.5),0,.115,-.47,e);c.scale.set(.025,.025,.08);var u=Ve(Ne("box",Jt),n,0,-.12,.02,e);return u.scale.set(.055,.24,.07),i||(Xi(e,.03,-.15,.1,.25),Xi(e,-.03,-.13,-.3,.1)),e}var ni=3e3;function Cm(i){var e=new Float32Array(ni*3),t=new Float32Array(ni*3),n=new Float32Array(ni),r=new Float32Array(ni),s=new Float32Array(ni*3),a=new Float32Array(ni),o=new Float32Array(ni),c=new Float32Array(ni),u=new Float32Array(ni),l=new Float32Array(ni*3),h=new Uint8Array(ni),f=new Yt;f.setAttribute("position",new $t(e,3).setUsage(oa)),f.setAttribute("color",new $t(t,3).setUsage(oa)),f.setAttribute("size",new $t(n,1).setUsage(oa)),f.setAttribute("alpha",new $t(r,1).setUsage(oa));var p=new tn({uniforms:{scale:{value:600}},vertexShader:["attribute float size; attribute float alpha; attribute vec3 color; varying vec3 vC; varying float vA;","uniform float scale;","void main(){ vC = color; vA = alpha; vec4 mv = modelViewMatrix * vec4(position,1.0);"," gl_PointSize = size * scale / -mv.z; gl_Position = projectionMatrix * mv; }"].join(`
`),fragmentShader:["varying vec3 vC; varying float vA;","void main(){ vec2 d = gl_PointCoord - 0.5; float r = dot(d,d); if (r > 0.25) discard;"," float k = smoothstep(0.25, 0.0, r); gl_FragColor = vec4(vC * k * vA, k * vA); }"].join(`
`),transparent:!0,depthWrite:!1,blending:cr}),g=new ts(f,p);g.frustumCulled=!1,i.add(g);var y=0,v=0;function m(_,b,A,M,P,U,B,K,J,ne,se,ie){var ae=y;y=(y+1)%ni,v=Math.min(ni,v+1),e[ae*3]=_,e[ae*3+1]=b,e[ae*3+2]=A,s[ae*3]=M,s[ae*3+1]=P,s[ae*3+2]=U,l[ae*3]=B[0],l[ae*3+1]=B[1],l[ae*3+2]=B[2],n[ae]=K,a[ae]=o[ae]=J,c[ae]=ne||0,u[ae]=se||0,h[ae]=ie?0:1}function x(_){return(Math.random()-.5)*2*_}for(var R=[],E=0;E<6;E++){var C=new Jn(16755285,0,6,1.6);C.userData={t:0,max:0,peak:0},i.add(C),R.push(C)}var L=0;function N(_,b,A,M,P,U,B){var K=R[L];L=(L+1)%R.length,K.position.set(_,b,A),K.color.setHex(M),K.distance=B||6,K.userData.t=K.userData.max=U,K.userData.peak=P}var S={blood:function(_){for(var b=0;b<14;b++)m(_.x,_.y,_.z,_.dx*1.5+x(1.2),x(1)+1,_.dz*1.5+x(1.2),[.55,.02,.02],.05+Math.random()*.04,.6,9)},spark:function(_){for(var b=0;b<12;b++)m(_.x,_.y,_.z,x(3),x(3)+1,x(3),[1.4,1.1,.5],.025,.35,8);N(_.x,_.y,_.z,10484991,2,.1,3)},puff:function(_){for(var b=0;b<6;b++)m(_.x,_.y,_.z,x(.3),x(.3)+.2,x(.3),[.25,.23,.2],.12,.5,-.2,.3);for(var A=0;A<5;A++)m(_.x,_.y,_.z,x(2.5),x(2.5),x(2.5),[1.6,1,.4],.02,.18,6)},muzzle:function(_){var b=_.weapon==="shotgun";N(_.x,_.y,_.z,16756832,b?6:3.5,.07,b?8:6)},fireBurst:function(_){for(var b=0;b<22;b++)m(_.x,_.y,_.z,x(2),x(2)+.5,x(2),[1.8,.7,.15],.06,.35,2,-.1);N(_.x,_.y,_.z,16742944,4,.25,5)},greenBurst:function(_){for(var b=0;b<22;b++)m(_.x,_.y,_.z,x(2),x(2)+.5,x(2),[.3,1.6,1.8],.06,.35,2,-.1);N(_.x,_.y,_.z,6287615,4,.25,5)},explosion:function(_){for(var b=0;b<90;b++){var A=Math.random()<.5;m(_.x,_.y,_.z,x(4),x(3)+2,x(4),A?[2,1.2,.3]:[1.4,.4,.05],.12+Math.random()*.1,.5+Math.random()*.4,3,.4)}for(var M=0;M<30;M++)m(_.x,_.y+.3,_.z,x(1),Math.random()*1.5,x(1),[.18,.15,.13],.35,1.4,-.5,.6);N(_.x,_.y+.5,_.z,16747056,14,.5,9)},gib:function(_){for(var b=_.kind==="gnasher"?[.6,.15,.2]:[.5,.05,.02],A=0;A<26;A++)m(_.x,_.y,_.z,x(2),Math.random()*3,x(2),b,.06+Math.random()*.05,.9,9);if(_.kind==="riley")for(var M=0;M<60;M++)m(_.x,_.y+Math.random(),_.z,x(1),Math.random()*1.5,x(1),[.3,1.5,1.7],.04,1.4,-.4)},summon:function(_){for(var b=0;b<50;b++)m(_.x+x(.4),_.y,_.z+x(.4),x(.5),Math.random()*2.5,x(.5),[1.8,.5,.1],.07,.8,-1);N(_.x,_.y+.5,_.z,16734736,6,.6,6)},pickup:function(_){for(var b=0;b<16;b++)m(_.x,_.y,_.z,x(1),Math.random()*1.5,x(1),[1.4,1.2,.5],.03,.5,-1)}};return{points:g,event:function(_){S[_.name]&&S[_.name](_)},trail:function(_,b,A,M){m(_,b,A,x(.2),x(.2),x(.2),M?[.3,1.4,1.6]:[1.8,.6,.1],.07,.3,0,-.15)},ember:function(_,b,A){m(_+x(.05),b,A+x(.05),x(.15),.4+Math.random()*.4,x(.15),[1.6,.6,.1],.02,1.1,-.2)},update:function(_,b){p.uniforms.scale.value=b;for(var A=0;A<v;A++){if(a[A]<=0){r[A]=0;continue}a[A]-=_,s[A*3+1]-=c[A]*_,e[A*3]+=s[A*3]*_,e[A*3+1]+=s[A*3+1]*_,e[A*3+2]+=s[A*3+2]*_;var M=Math.max(0,a[A]/o[A]);r[A]=h[A]?M:1,n[A]=Math.max(.005,n[A]+u[A]*_),t[A*3]=l[A*3],t[A*3+1]=l[A*3+1]*(.5+.5*M),t[A*3+2]=l[A*3+2]*M}f.attributes.position.needsUpdate=f.attributes.color.needsUpdate=f.attributes.size.needsUpdate=f.attributes.alpha.needsUpdate=!0,f.setDrawRange(0,v),R.forEach(function(P){var U=P.userData;U.t>0?(U.t-=_,P.intensity=U.peak*Math.max(0,U.t/U.max)):P.intensity=0})}}}var Im={slab:788743,tech:395532,hell:1443332};function Pm(i,e){e=e||{};var t=new Bc({canvas:i,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!e.preserve});t.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),t.toneMapping=os,t.toneMappingExposure=1.45;var n=new ha(t),r=n.fromScene(new Yc,.04).texture;t.outputColorSpace=Wt,t.shadowMap.enabled=!1,t.info.autoReset=!1;var s=new ln(78,16/9,.03,60);s.rotation.order="YXZ";var a=null,o=null,c=null,u=null,l=null,h=new Map,f=[],p=new Map,g=new Er,y=new ln(60,16/9,.01,5),v=new Jn(16756848,0,3,1.5),m=new ss(16767152,1.2);m.position.set(-1,2,1),g.add(new ea(16777215,.35),new $s(16769216,2103312,.8),v,m),g.environment=r,g.environmentIntensity=.6;var x=Pf(),R=new st,E={};g.add(R);var C={fist:{p:[.14,-.15,-.3],ry:0},pistol:{p:[.15,-.14,-.38],ry:.06},shotgun:{p:[.1,-.13,-.2],ry:.04},chaingun:{p:[.12,-.15,-.22],ry:.04},rocket:{p:[.13,-.16,-.2],ry:.04}},L={fist:Rm,pistol:Am,shotgun:Nf,chaingun:Df,rocket:Uf};function N(){Object.keys(E).forEach(function(me){R.remove(E[me])}),E={},Object.keys(C).forEach(function(me){var le=x.model(me),G;if(le){G=new st;var j=ds(le);G.add(j.obj),j.obj.rotation.y=Math.PI,j.obj.updateMatrixWorld(!0);var de=new Hn().setFromObject(j.obj,!0),ge=de.max.z-de.min.z;G.userData.authoredLength=ge;var Me={fist:.2,pistol:.24,shotgun:.85,chaingun:.8,rocket:.9};ge>.001&&Me[me]&&j.obj.scale.multiplyScalar(Me[me]/ge),["pump","slide","barrels","tube"].forEach(function(Qe){var Oe=j.obj.getObjectByName(Qe);Oe&&(G.userData[Qe]=Oe)}),G.userData.authored=!0,le.dir!=="assets"&&wm(G,me)}else if(L[me])G=L[me]();else return;var Ge=C[me];G.position.set(Ge.p[0],Ge.p[1],Ge.p[2]),G.rotation.y=Ge.ry,G.userData.baseZ=Ge.p[2],G.visible=!1,R.add(G),E[me]=G})}N();function S(me,le){me&&(me.userData.z0===void 0&&(me.userData.z0=me.position.z),me.position.z=me.userData.z0+le)}var _=new Be(new Ar(1,10,8),new Ln({color:16765056,transparent:!0,opacity:.9,blending:cr,depthWrite:!1}));_.scale.setScalar(.035),g.add(_);var b=0,A={x:0,y:0},M=0,P=0,U=null,B={w:1,h:1,top:0};function K(me){U=me,a=new Er;var le=Im[me.L.floor]||Im.slab;a.background=new ze(le),a.fog=new za(le,.032),a.environment=r,a.environmentIntensity=.25,a.add(new $s(10520696,2103840,.9)),a.add(new ea(5261384,.5)),u=hm(me,x),a.add(u.group),l=Cm(a),h.clear(),p.clear(),f=[],me.ents.forEach(function(G){if(G.kind==="torch"){var j=Tm(G,x);a.add(j.obj),h.set(G,j);var de=new Jn(16747066,2.2,7.5,1.4);de.position.set(G.x,G.y+1,G.z),de.userData.e=G,a.add(de),f.push(de)}}),ne(me).forEach(function(G){var j=new Jn(13154472,1.6+G.size*.02,4+Math.sqrt(G.size)*1.6,1.1);j.position.set(G.x,G.y,G.z),a.add(j);var de=x.model("lamp");if(de){var ge=ds(de);ge.obj.scale.setScalar(.5),ge.obj.position.set(G.x,G.y+.4,G.z),a.add(ge.obj);return}var Me=new st,Ge=new Be(new mn(.5,.05,.5),new sn({color:0,emissive:16770752,emissiveIntensity:1.1})),Qe=new Be(new mn(.58,.1,.58),new sn({color:2762790,metalness:.8,roughness:.4,wireframe:!0}));Me.add(Ge,Qe),Me.position.set(G.x,G.y+.35,G.z),a.add(Me)}),o=new Wc(t),o.addPass(new qc(a,s)),c=new ma(new Je(256,256),.75,.55,.82),o.addPass(c),o.addPass(new Xc),se(i.clientWidth,i.clientHeight)}function J(me,le,G,j){var de=Math.floor(G)*me.mw+Math.floor(le);return me.cells[de]===0?me.ceil[de]:j}function ne(me){for(var le=me.W,G=new Uint8Array(le.mw*le.mh),j=[],de=0;de<le.cells.length;de++)if(!(G[de]||le.cells[de]!==0)){var ge=[de],Me=0,Ge=0,Qe=0,Oe=0;for(G[de]=1;ge.length;){var rt=ge.pop(),gt=rt%le.mw,nt=rt/le.mw|0;Me+=gt+.5,Ge+=nt+.5,Qe=Math.max(Qe,le.ceil[rt]),Oe++,[[1,0],[-1,0],[0,1],[0,-1]].forEach(function(vt){var Ct=gt+vt[0],Qt=nt+vt[1],Mt=Qt*le.mw+Ct;Ct<0||Qt<0||Ct>=le.mw||Qt>=le.mh||G[Mt]||le.cells[Mt]!==0||(G[Mt]=1,ge.push(Mt))})}Oe>=3&&j.push({x:Me/Oe,z:Ge/Oe,y:J(le,Me/Oe,Ge/Oe,Qe)-.4,size:Oe})}return j}function se(me,le){!me||!le||(t.setSize(me,le,!1),B={w:me,h:le},s.aspect=me/le,s.updateProjectionMatrix(),y.aspect=me/le,y.updateProjectionMatrix(),o&&(o.setSize(me,le),c.resolution.set(me/2,le/2)))}function ie(me,le,G){var j=me.p,de=new Set;me.ents.forEach(function(ge){if(ge.kind==="torch"){h.get(ge).update(le),Math.random()<G*6&&l.ember(ge.x,ge.y+1,ge.z),de.add(ge);return}if(ge.kind==="proj"){var Me=p.get(ge);Me||(Me=new Be(new Ar(ge.playerRocket?.13:.09,10,8),new Ln({color:ge.green?10484991:16756800})),a.add(Me),p.set(ge,Me)),Me.position.set(ge.x,ge.y,ge.z),l.trail(ge.x,ge.y,ge.z,ge.green),de.add(ge);return}if(ge.kind!=="part"){var Ge=h.get(ge);if(!Ge){if(ge.kind==="pickup")Ge=bm(ge,x);else if(ge.mob)Ge=Sm(ge,x);else return;a.add(Ge.obj),h.set(ge,Ge)}ge.kind==="pickup"?Ge.update(le):Ge.update(le,G,Math.atan2(j.z-ge.z,j.x-ge.x)),de.add(ge)}}),h.forEach(function(ge,Me){de.has(Me)||(a.remove(ge.obj),h.delete(Me))}),p.forEach(function(ge,Me){de.has(Me)||(a.remove(ge),p.delete(Me))})}function ae(me){var le=U.p;f.forEach(function(G,j){var de=G.userData.e,ge=Math.sin(me*13+j*7)*.12+Math.sin(me*31+j*3)*.08+(Math.random()-.5)*.08,Me=(de.x-le.x)*(de.x-le.x)+(de.z-le.z)*(de.z-le.z)>400;G.intensity=Me?0:2.2*(1+ge)})}function Re(me,le,G){var j=me.p,de=Math.hypot(me.input.vx||0,me.input.vz||0);j.onGround&&de>.5&&(b+=G*de*2.6);var ge=j.onGround?Math.min(1,de/4):0,Me=Math.atan2(Math.sin(j.ang-M),Math.cos(j.ang-M)),Ge=j.pitch-P;M=j.ang,P=j.pitch,A.x+=(-Me*.6-A.x)*Math.min(1,G*8),A.y+=(Ge*.6-A.y)*Math.min(1,G*8),Object.keys(E).forEach(function(Ct){E[Ct].visible=Ct===j.weapon&&!j.dead});var Qe=E[j.weapon];if(Qe){var Oe=j.fireT,rt=Oe<.12?Math.sin(Oe/.12*Math.PI):0,gt=j.lowerT>0?1-j.lowerT/.15:j.raiseT>0?j.raiseT/.15:0;if(R.position.set(Math.sin(b)*.012*ge+A.x*.1,-Math.abs(Math.cos(b))*.01*ge+A.y*.1-gt*.25-j.landT*.1,0),R.rotation.set(0,0,0),j.weapon==="fist")Qe.position.z=Qe.userData.baseZ-(Oe<.2?Math.sin(Oe/.2*Math.PI)*.18:0),Qe.rotation.x=Oe<.2?-Math.sin(Oe/.2*Math.PI)*.3:0;else{Qe.rotation.x=rt*(j.weapon==="shotgun"?.35:.2),Qe.position.z=Qe.userData.baseZ+rt*.05;var nt=Oe>.3&&Oe<.7?Math.sin((Oe-.3)/.4*Math.PI):0;S(Qe.userData.pump,nt*.09),S(Qe.userData.slide,rt*.04),Qe.userData.barrels&&(Qe.userData.barrels.rotation.z+=G*(j.fireT<.3?30:0))}var vt=Oe<.06&&j.weapon!=="fist"&&!j.dead;_.visible=vt,_.position.set(Qe.position.x,Qe.position.y+(j.weapon==="shotgun"?0:.02),Qe.position.z-(j.weapon==="shotgun"?.7:.18)),_.scale.setScalar((j.weapon==="shotgun"?.06:.035)*(.8+Math.random()*.4)),v.intensity=vt?3:0,v.position.copy(_.position)}}function Ue(me,le,G,j){if(!j)return $e(me,le,G);var de=Math.random,ge=12345;Math.random=function(){return ge=ge*1103515245+12345&2147483647,ge/2147483647};try{return $e(me,le,0)}finally{Math.random=de}}function $e(me,le,G){t.info.reset(),me!==U&&K(me);var j=me.p;u.update(),ie(me,le,G),ae(le),me.events.forEach(function(ge){ge.t==="fx"&&l.event(ge)}),l.update(G,B.h*.9);var de=me.shake*.004;s.position.set(j.x+(Math.random()-.5)*de,j.y+j.eyeH+(Math.random()-.5)*de,j.z+(Math.random()-.5)*de),s.rotation.y=-Math.PI/2-j.ang,s.rotation.x=j.pitch,s.rotation.z=j.dead?Math.min(.5,j.deadT*.6):0,o.render(G),t.autoClear=!1,t.clearDepth(),Re(me,le,G),t.render(g,y),t.autoClear=!0}return{setAssets:function(me){x=me,N(),U=null},assets:function(){return x},debugModels:function(){var me=[];return h.forEach(function(le){le.debug&&me.push(le.debug())}),me},render:Ue,resize:se,renderer:t,camera:s,info:function(){return t.info}}}var Rt=320,zM=200,Ut=168,Lm=32,Of=Ut/2,_a="#e03828",fu="#8a8478",Ff="#401008";function GM(i,e){var t=String(i).split(" "),n=[],r="";return t.forEach(function(s){var a=r?r+" "+s:s;a.length>e&&r?(n.push(r),r=s):r=a}),r&&n.push(r),n}function ms(i){i=i|0;var e=i/60|0,t=i%60;return e+":"+(t<10?"0":"")+t}function Nm(i,e,t){function n(m,x){return m.time*(x||3)%1<.55}function r(m,x,R){return R?n(m,3)?"#ffffff":_a:x?"#ff9a28":_a}function s(m){return m.dead?Le.default.faces.dead:m.grinT>0?Le.default.faces.grin:m.painT>.25?Le.default.faces.pain:m.hp>=80?Le.default.faces.ok:m.hp>=55?Le.default.faces.hurt1:m.hp>=30?Le.default.faces.hurt2:Le.default.faces.hurt3}function a(m){var x=m.p;i.fillStyle="#3a352e",i.fillRect(0,Ut,Rt,Lm),i.fillStyle="#14110d",i.fillRect(0,Ut,Rt,2),i.fillStyle="#57514a",i.fillRect(0,Ut+2,Rt,1),i.fillStyle="#24211c",[46,116,142,178,230,250].forEach(function(N){i.fillRect(N,Ut+4,1,Lm-8)});var R=Ta[x.weapon],E=R.ammo?x.ammo[R.ammo]:-1,C=R.ammo&&E<=(R.ammo==="shells"?4:R.ammo==="rockets"?2:10);Le.default.drawText(i,"AMMO",8,Ut+5,{color:E===0?_a:fu}),Le.default.drawText(i,R.ammo?String(E):"--",40,Ut+12,{scale:3,color:r(m,C,E===0),shadow:Ff,right:!0});var L=x.hp<=25;Le.default.drawText(i,"HEALTH",54,Ut+5,{color:L?_a:fu}),Le.default.drawText(i,x.hp+"%",108,Ut+12,{scale:3,color:r(m,x.hp<=50,L&&!x.dead),shadow:Ff,right:!0}),Le.default.drawText(i,"ARMS",129,Ut+5,{color:fu,center:!0}),Ki.forEach(function(N,S){var _=119+S%3*8,b=Ut+(S<3?11:20),A=x.weapons[N],M=(x.nextWeapon||x.weapon)===N,P=M?"#ffd23e":A?e.hasAmmo(x,N)?"#c8c0b0":"#6a5a4a":"#2a2620";Le.default.drawText(i,String(S+1),_,b,{color:P}),M&&(i.fillStyle="#ffd23e",i.fillRect(_,b+7,5,1))}),i.drawImage(s(x).canvas,148,Ut+3),Le.default.drawText(i,"ARMOR",184,Ut+5,{color:fu}),Le.default.drawText(i,x.armor+"%",226,Ut+12,{scale:3,color:x.armor>0?_a:"#6a4a40",shadow:Ff,right:!0}),[["red","keyRed",5],["blue","keyBlue",18]].forEach(function(N){!x.keys[N[0]]&&!m.info.keys[N[0]]||(i.globalAlpha=x.keys[N[0]]?1:.18,i.drawImage(Le.default.things[N[1]].canvas,236,Ut+N[2]),i.globalAlpha=1)}),Le.default.drawText(i,"BULL "+x.ammo.bullets+"/200",254,Ut+5,{color:R.ammo==="bullets"?"#ffd23e":"#c8c0b0"}),Le.default.drawText(i,"SHEL "+x.ammo.shells+"/50",254,Ut+15,{color:x.weapons.shotgun?R.ammo==="shells"?"#ffd23e":"#c8c0b0":"#6a655c"}),Le.default.drawText(i,"ROKT "+x.ammo.rockets+"/30",254,Ut+25,{color:x.weapons.rocket?R.ammo==="rockets"?"#ffd23e":"#c8c0b0":"#6a655c"})}function o(m){var x=Rt/2,R=Of;if(t.crosshair){var E=e.aimTarget();i.fillStyle=E?E.barrel?"#ff9a28":"#ff4a2a":"rgba(232,224,200,0.8)",i.fillRect(x-5,R,3,1),i.fillRect(x+3,R,3,1),i.fillRect(x,R-5,1,3),i.fillRect(x,R+3,1,3)}var C=m.killT>0?"#ff3a1a":m.blockT>0?"#9aa4a8":m.hitT>0?"#ffffff":null;if(C){i.fillStyle=C;for(var L=m.killT>0?4:3,N=L;N<L+3;N++)i.fillRect(x-N,R-N,1,1),i.fillRect(x+N,R-N,1,1),i.fillRect(x-N,R+N,1,1),i.fillRect(x+N,R+N,1,1)}}function c(m){var x=m.p,R=Rt/2,E=Of,C=34;m.hurtDirs.forEach(function(L){var N=L.ang-x.ang,S=Math.sin(N),_=-Math.cos(N),b=R+S*C,A=E+_*C;i.fillStyle="rgba(255,40,16,"+Math.min(.9,L.t).toFixed(3)+")",i.beginPath(),i.moveTo(b+S*9,A+_*9),i.lineTo(b-_*7,A+S*7),i.lineTo(b+_*7,A-S*7),i.closePath(),i.fill()})}function u(){var m=e.usePrompt();if(m){var x=Of+14;if(m.verb){var R=Le.default.textWidth(m.verb,1),E=13+R,C=(Rt-E)/2|0;i.fillStyle="rgba(0,0,0,0.55)",i.fillRect(C-3,x-3,E+6,13),i.fillStyle="#e8e0c8",i.fillRect(C,x-1,9,9),i.fillStyle="#14110d",i.fillRect(C+1,x,7,7),Le.default.drawText(i,"E",C+3,x+1,{color:"#ffd23e"}),Le.default.drawText(i,m.verb,C+13,x+1,{color:m.color,shadow:!0})}else{var L=Le.default.textWidth(m.text,1);i.fillStyle="rgba(0,0,0,0.55)",i.fillRect((Rt-L)/2-4,x-3,L+8,13),Le.default.drawText(i,m.text,Rt/2,x+1,{color:m.color,shadow:!0,center:!0})}}}function l(m,x){if(!(!t.goalMarker||!x)){var R=e.goalTarget();if(R){var E=m.p,C=Math.hypot(R.x-E.x,R.z-E.z);if(!(C<1.6)){var L={x:R.x,y:R.y,z:R.z},N=VM(x,L),S=m.time*2%1<.7?"#ffd23e":"#c89a20";if(i.fillStyle=S,i.beginPath(),N.inFront&&N.x>8&&N.x<Rt-8&&N.y>8&&N.y<Ut-8){var _=Math.round(N.x),b=Math.round(N.y)-8;i.moveTo(_,b-4),i.lineTo(_+4,b),i.lineTo(_,b+4),i.lineTo(_-4,b),i.closePath(),i.fill(),Le.default.drawText(i,String(Math.round(C*2))+"M",_,b+7,{color:S,shadow:!0,center:!0})}else{var A=Math.atan2(R.z-E.z,R.x-E.x)-E.ang;A=Math.atan2(Math.sin(A),Math.cos(A));var M=A>0,P=M?Rt-6:6,U=40;i.moveTo(P+(M?4:-4),U),i.lineTo(P-(M?3:-3),U-5),i.lineTo(P-(M?3:-3),U+5),i.closePath(),i.fill(),Le.default.drawText(i,"GOAL",M?Rt-12:12,U-2,{color:S,shadow:!0,right:M})}}}}}function h(m){var x=m.p;if(!(x.dead||x.hp>25))for(var R=.18+.14*Math.sin(m.time*5),E=0;E<6;E++)i.fillStyle="rgba(200,0,0,"+(R*(1-E/6)).toFixed(3)+")",i.fillRect(E*2,0,2,Ut),i.fillRect(Rt-E*2-2,0,2,Ut),i.fillRect(0,E*2,Rt,2),i.fillRect(0,Ut-E*2-2,Rt,2)}var f={imp:["AN IMP BURNED YOU DOWN.","TIP: STRAFE WITH A AND D TO SIDESTEP FIREBALLS."],gnasher:["A GNASHER CHEWED YOU UP.","TIP: BACK AWAY WHILE YOU SHOOT, OR JUMP UP WHERE IT CAN'T FOLLOW."],knight:["THE EMBER KNIGHT CRUSHED YOU.","TIP: KEEP YOUR DISTANCE AND BRING SHOTGUN SHELLS."],riley:["RILEY OUTPLAYED YOU.","TIP: WHEN HER VISOR FLASHES WHITE, SHE IS ABOUT TO SHOOT. MOVE!"],barrel:["A BARREL BLEW UP IN YOUR FACE.","TIP: SHOOT BARRELS FROM FAR AWAY, WHEN DEMONS ARE NEAR THEM."]};function p(m){var x=m.p;if(!(!x.dead||x.deadT<1)){var R=f[m.killer]||["YOU WERE OVERWHELMED.","TIP: FIGHT FROM HIGH GROUND SO DEMONS COME TO YOU ONE AT A TIME."];i.fillStyle="rgba(0,0,0,0.5)",i.fillRect(0,44,Rt,72),Le.default.drawText(i,"YOU DIED",Rt/2,50,{scale:3,color:_a,shadow:!0,center:!0}),Le.default.drawText(i,R[0],Rt/2,72,{color:"#e8e0c8",shadow:!0,center:!0}),Le.default.drawText(i,R[1],Rt/2,84,{color:"#8fe0a0",shadow:!0,center:!0}),x.deadT>1.2&&m.time%1<.7&&Le.default.drawText(i,"CLICK OR PRESS ENTER TO TRY AGAIN",Rt/2,100,{color:"#f0d848",shadow:!0,center:!0})}}function g(m){var x=4;m.msgs.forEach(function(E){var C=GM(E.text,78);E.t<.4&&(i.globalAlpha=Math.max(0,E.t/.4)),C.forEach(function(L){Le.default.drawText(i,L,4,x,{color:E.color||"#f0d848",shadow:!0}),x+=7}),i.globalAlpha=1,x+=1});var R=m.notice;R&&(i.globalAlpha=Math.min(1,R.t/.4),Le.default.drawText(i,R.text,Rt/2,50,{scale:2,color:R.color,shadow:!0,center:!0}),i.globalAlpha=1)}function y(m){var x=m.boss;if(!(!x||x.state==="idle"||x.state==="dead")){var R=140,E=(Rt-R)/2,C=Ut-12,L=x.shieldT>0;Le.default.drawText(i,L?"RILEY - SHIELDED":"RILEY",Rt/2,C-8,{color:L?"#ffd23e":"#6fe0ec",shadow:!0,center:!0}),i.fillStyle="#06141c",i.fillRect(E-1,C-1,R+2,6),i.fillStyle=L?"#ffd23e":"#3fd8c8",i.fillRect(E,C,Math.max(0,x.hp/x.maxHp)*R,4),i.fillStyle="#06141c",i.fillRect(E+R*.33,C,1,4),i.fillRect(E+R*.66,C,1,4)}}function v(m){i.fillStyle="rgba(0,0,0,0.8)",i.fillRect(0,0,Rt,Ut);for(var x=22,R=Ut-14,E=Math.min((Rt-16)/m.mw,(R-x)/m.mh),C=(Rt-m.mw*E)/2,L=x+(R-x-m.mh*E)/2,N=m.time*2%1<.6,S=0;S<m.mh;S++)for(var _=0;_<m.mw;_++){var b=S*m.mw+_,A=m.W.cells[b];if(m.seen[b]){var M=null;if(A===0){var P=m.W.floor[b];M="rgb("+(40+P*50|0)+","+(34+P*40|0)+","+(28+P*30|0)+")"}else A===6?M="#c8a030":A===11?M=m.doors[_+","+S].found?"#c8a030":"#6a655c":A===7?M="#ff3a2a":A===8?M="#4a7aff":A===9||A===10?M=N||A===10?"#58e068":"#1e5a26":M="#8a8478";i.fillStyle=M,i.fillRect(C+_*E,L+S*E,Math.max(1,E-.4),Math.max(1,E-.4))}}var U=e.goalTarget();if(U&&N){var B=C+U.x*E,K=L+U.z*E;i.fillStyle="#ffd23e",i.fillRect(B-3,K-3,7,1),i.fillRect(B-3,K+3,7,1),i.fillRect(B-3,K-3,1,7),i.fillRect(B+3,K-3,1,7)}var J=m.p,ne=C+J.x*E,se=L+J.z*E,ie=Math.cos(J.ang),ae=Math.sin(J.ang);i.fillStyle="#f8f4e0",i.beginPath(),i.moveTo(ne+ie*5,se+ae*5),i.lineTo(ne-ie*3-ae*3,se-ae*3+ie*3),i.lineTo(ne-ie*3+ae*3,se-ae*3-ie*3),i.closePath(),i.fill(),Le.default.drawText(i,m.L.name,6,4,{color:"#ff9a28",shadow:!0}),Le.default.drawText(i,"TAB: CLOSE",Rt-6,4,{color:"#8a8478",right:!0}),Le.default.drawText(i,"GOAL: "+e.objective(),6,12,{color:"#f0d848",shadow:!0});var Re=m.stats;Le.default.drawText(i,"KILLS "+Re.kills+"/"+Re.totalKills+"  ITEMS "+Re.items+"/"+Re.totalItems+"  SECRETS "+Re.secrets+"/"+Re.totalSecrets+"  TIME "+ms(m.time),Rt-6,12,{color:"#c8c0b0",right:!0}),Le.default.drawText(i,"BRIGHTER FLOOR = HIGHER GROUND",6,Ut-9,{color:"#a8a090"})}return{draw:function(m,x){i.clearRect(0,0,Rt,zM);var R=m.p;R.dmgFlash>0&&(i.fillStyle="rgba(255,20,10,"+(R.dmgFlash*.8).toFixed(3)+")",i.fillRect(0,0,Rt,Ut)),R.bonusFlash>0&&(i.fillStyle="rgba(255,220,80,"+(R.bonusFlash*.7).toFixed(3)+")",i.fillRect(0,0,Rt,Ut)),h(m),x.map?v(m):!R.dead&&!x.menu&&(c(m),l(m,x.camera),o(m),u()),x.map||y(m),g(m),p(m),a(m)}}}function VM(i,e){var t=i.matrixWorldInverse.elements,n=i.projectionMatrix.elements,r=e.x,s=e.y,a=e.z,o=t[0]*r+t[4]*s+t[8]*a+t[12],c=t[1]*r+t[5]*s+t[9]*a+t[13],u=t[2]*r+t[6]*s+t[10]*a+t[14],l=n[0]*o+n[4]*c+n[8]*u+n[12],h=n[1]*o+n[5]*c+n[9]*u+n[13],f=n[3]*o+n[7]*c+n[11]*u+n[15];return f<=.01?{inFront:!1}:{inFront:!0,x:(l/f*.5+.5)*Rt,y:(1-(h/f*.5+.5))*Ut}}var Ri=Hf.default.SETTINGS,xt=Hf.default.MENU,Ht=Ri.v;Ht.invertY===void 0&&(Ht.invertY=!1);Ht.fov===void 0&&(Ht.fov=78);var yt=320,qn=200,WM=168,km=document.getElementById("view"),pi=document.getElementById("hud");pi.width=yt;pi.height=qn;var je=pi.getContext("2d");je.imageSmoothingEnabled=!1;var mu=/debug/.test(location.search),it=td({levels:zr,rng:rd((Date.now()&4294967295)>>>0),storage:(function(){try{return window.localStorage}catch{return null}})(),settings:Ht,saveSettings:function(){Ri.save()},onProgress:function(i,e){Ri.unlock(Math.min(i+1,zr.length-1)),qM=Ri.record?Ri.record(i,e):null}}),qM=null,Ci=Pm(km,{preserve:mu}),XM=Nm(je,it,Ht),ii="title",Ai=0,Yi=!1,xa=!1,Ii=!1,Fo=!1;function Ho(){return kr[Ht.difficulty]||kr[1]}function zm(){bn.default.setVolume(Ht.volume/10),Ci.camera.fov=Ht.fov,Ci.camera.updateProjectionMatrix()}function Gm(){var i=window.innerWidth,e=window.innerHeight,t=Math.min(i,e*1.6),n=t/1.6,r=(i-t)/2,s=(e-n)/2;pi.style.cssText="left:"+r+"px;top:"+s+"px;width:"+t+"px;height:"+n+"px";var a=Math.round(n*WM/qn);km.style.cssText="left:"+r+"px;top:"+s+"px;width:"+t+"px;height:"+a+"px",Ci.resize(Math.round(t),a)}window.addEventListener("resize",Gm);Gm();var gu=it.keys,zo=!1;function Vm(){for(var i in gu)gu[i]=!1;zo=!1,it.setFire(!1)}document.addEventListener("keydown",function(i){if((["Tab","Space"].indexOf(i.code)>=0||i.code.slice(0,5)==="Arrow")&&i.preventDefault(),bn.default.init(),!!_u){if(xt.isOpen()){bn.default.startMusic(),xt.key(i.code);return}if(!i.repeat){if(i.code==="Enter"||i.code==="NumpadEnter"){vu();return}if(ii!=="game"){i.code==="Space"&&vu();return}if(i.code==="Escape"&&Yi&&!Ii){Xm();return}gu[i.code]=!0;var e=it.state();if(i.code==="Tab"&&(xa=!xa,e.usedMap=!0),i.code==="KeyM"){var t=bn.default.toggleMusic();e.msgs.push({text:"MUSIC "+(t?"ON":"OFF"),t:2})}(i.code==="ControlLeft"||i.code==="ControlRight")&&(zo=!0,it.setFire(!0)),i.code==="Digit1"&&it.switchWeapon("fist"),i.code==="Digit2"&&it.switchWeapon("pistol"),i.code==="Digit3"&&it.switchWeapon("shotgun"),i.code==="Digit4"&&it.switchWeapon("chaingun"),i.code==="Digit5"&&it.switchWeapon("rocket"),i.code==="KeyQ"&&it.quickSwitch()}}});document.addEventListener("keyup",function(i){gu[i.code]=!1,(i.code==="ControlLeft"||i.code==="ControlRight")&&(zo=!1,it.setFire(!1))});window.addEventListener("blur",Vm);document.addEventListener("pointerlockchange",function(){Ii=document.pointerLockElement===pi,Vm(),Ii?(Fo=!1,ii==="game"&&xt.close(),!Yi&&ii==="game"&&KM()):ii==="game"&&Yi&&Xm()});document.addEventListener("pointerlockerror",function(){Fo=!0});function Bo(){try{var i=pi.requestPointerLock({unadjustedMovement:!0});i&&i.catch&&i.catch(function(){try{pi.requestPointerLock()}catch{Fo=!0}})}catch{Fo=!0}}function YM(){try{document.exitPointerLock()}catch{}}function Wm(i){var e=pi.getBoundingClientRect();return{x:(i.clientX-e.left)/e.width*yt,y:(i.clientY-e.top)/e.height*qn}}document.addEventListener("mousemove",function(i){var e=it.state();if(Ii&&ii==="game"&&e&&!e.p.dead){var t=44e-5*Ht.sens;e.p.ang+=i.movementX*t,e.p.pitch-=i.movementY*t*(Ht.invertY?-1:1),e.p.pitch=Math.max(-1.3,Math.min(1.3,e.p.pitch));return}if(xt.isOpen()){var n=Wm(i);pi.style.cursor=xt.pointer(n.x,n.y)?"pointer":"default"}});pi.addEventListener("mousedown",function(i){if(bn.default.init(),bn.default.startMusic(),xt.isOpen()){var e=Wm(i);i.button===0&&xt.click(e.x,e.y);return}if(ii==="game"){var t=it.state();if(!Ii){xt.close(),Bo();return}if(t.p.dead){vu();return}i.button===0&&(zo=!0,it.setFire(!0)),i.button===2&&(it.keys.Space=!0);return}vu()});document.addEventListener("mouseup",function(i){i.button===0&&(zo=!1,it.setFire(!1)),i.button===2&&(it.keys.Space=!1)});pi.addEventListener("contextmenu",function(i){i.preventDefault()});pi.addEventListener("wheel",function(i){ii==="game"&&Ii&&(i.preventDefault(),i.deltaY&&it.cycleWeapon(i.deltaY>0?1:-1))},{passive:!1});var du=!1;function KM(){Yi=!0}function qm(i){it.startLevel(i,!1),Yi=!1,xa=!1,ii="game",xt.close(),Bo()}function vu(){bn.default.init(),bn.default.startMusic();var i=it.mode();if(i==="inter"){if(!du&&Ai<1.3){du=!0;return}du=!1,it.onEnter(),it.onEnter(),it.mode()==="game"&&(Yi=Ii)}else if(i==="victory")Ai>1&&Bf();else if(i==="game"){var e=it.state();e.p.dead?e.p.deadT>1.2&&(it.retryLevel(),Yi=Ii):Ii||(xt.close(),Bo())}}function Bf(){it.setMode("title"),ii="title",xt.open(kf()),YM()}function Xm(){xa=!1,xt.open(jM()),bn.default.play("menu")}function ko(i,e,t){for(var n=0;n<yt;n+=2){var r=Math.sin(n*.07+e*3+t)+Math.sin(n*.13-e*2.2),s=6+r*4;je.fillStyle=r>.7?"#ffd23e":r>-.3?"#ff7a18":"#a83010",je.fillRect(n,i-s,2,s+4)}}function Ym(i,e){je.fillStyle="rgba(8,6,4,0.55)",je.fillRect(0,0,yt,qn),ko(qn-6,e,0),ko(qn-2,e*1.3,2),Le.default.drawText(je,"FIREBIRD",yt/2,10,{scale:4,color:"#e03828",shadow:"#401008",center:!0}),Le.default.drawText(je,"FIREBIRD",yt/2-1,9,{scale:4,color:"#ff9a28",center:!0}),Le.default.drawText(je,"3D",yt/2,34,{scale:5,color:"#ffd23e",shadow:"#803008",center:!0}),Le.default.drawText(je,"EPISODE ONE: KNEE-DEEP IN THE ASHES",yt/2,64,{color:"#c8c0b0",center:!0}),Le.default.drawText(je,"A NIX GAMES PRODUCTION BY PHOENIX",yt/2,72,{color:"#8a8478",center:!0})}function ya(i,e){je.fillStyle=ii==="game"?"rgba(4,3,2,0.8)":"rgba(8,6,4,0.7)",je.fillRect(0,0,yt,qn),je.fillStyle="#5e2a10",je.fillRect(40,33,yt-80,1)}function No(i){return i?"ON":"OFF"}function kf(){var i=Ri.progress;return{drawBg:Ym,scale:2,top:86,gap:13,descY:156,footerY:172,items:function(){var e=[];return i.unlocked>0&&e.push({label:"CONTINUE",action:function(){qm(i.unlocked)},desc:function(){return"START "+zr[i.unlocked].name+" ON "+Ho().name+"."}}),e.push({label:"NEW GAME",action:function(){xt.push(Km(0))},desc:"START EPISODE ONE FROM THE BEGINNING."},{label:"LEVEL SELECT",action:function(){xt.push(ZM())},desc:"REPLAY ANY LEVEL YOU HAVE REACHED."},{label:"OPTIONS",action:function(){xt.push(Zm())},desc:"MOUSE, VOLUME, FIELD OF VIEW, CROSSHAIR, TIPS AND DIFFICULTY."},{label:"CONTROLS",action:function(){xt.push(Jm())},desc:"EVERY KEY, ON ONE PAGE."}),e}}}function Km(i){var e=kr.map(function(t,n){return{label:t.name,desc:t.desc,action:function(){Ht.difficulty=n,Ri.save(),qm(i)}}});return e.push({label:"BACK",action:function(){xt.back()}}),{title:"DIFFICULTY",drawBg:ya,scale:2,top:54,gap:18,descY:146,sel:Ht.difficulty,items:e}}function ZM(){var i=zr.map(function(e,t){var n=t<=Ri.progress.unlocked;return{label:n?e.name:e.name.split(":")[0]+": ???",disabled:function(){return!n},desc:"PAR "+ms(e.par)+".  STARTS WITH A PISTOL.",action:function(){xt.push(Km(t))}}});return i.push({label:"BACK",action:function(){xt.back()}}),{title:"LEVEL SELECT",drawBg:ya,top:46,gap:14,descY:142,items:i}}function Zm(){function i(t,n,r,s){return function(a){var o=Ht[t]+a*(s||1);Ht[t]=o>r?n:o<n?r:o,Ri.save(),zm()}}function e(t){return function(){Ht[t]=!Ht[t],Ri.save()}}return{title:"OPTIONS",drawBg:ya,top:40,gap:11,descY:158,items:[{label:"MOUSE SPEED",slider:[0,10,function(){return Ht.sens}],adjust:i("sens",1,10),desc:"HOW FAST THE VIEW TURNS. LEFT AND RIGHT TO CHANGE."},{label:"INVERT MOUSE Y",value:function(){return No(Ht.invertY)},adjust:e("invertY"),desc:"PUSH THE MOUSE FORWARD TO LOOK DOWN INSTEAD OF UP."},{label:"FIELD OF VIEW",value:function(){return Ht.fov+" DEG"},adjust:i("fov",60,110,5),desc:"HOW WIDE YOU SEE. WIDER SHOWS MORE, NARROWER ZOOMS IN."},{label:"SOUND VOLUME",slider:[0,10,function(){return Ht.volume}],adjust:i("volume",0,10),desc:"LOUDNESS OF EVERYTHING."},{label:"MUSIC",value:function(){return No(bn.default.isMusicOn())},adjust:function(){bn.default.setMusic(!bn.default.isMusicOn())},desc:"PRESS M DURING PLAY TO TOGGLE IT TOO."},{label:"CROSSHAIR",value:function(){return No(Ht.crosshair)},adjust:e("crosshair"),desc:"A SMALL AIMING MARK. TURNS RED OVER A DEMON."},{label:"GOAL MARKER",value:function(){return No(Ht.goalMarker)},adjust:e("goalMarker"),desc:"POINTS AT YOUR GOAL ONCE YOU HAVE SEEN IT."},{label:"TIPS",value:function(){return No(Ht.tips)},adjust:function(){Ht.tips=!Ht.tips,Ht.tips&&(Ht.seenTips={}),Ri.save()},desc:"SHORT HINTS THE FIRST TIME SOMETHING NEW HAPPENS."},{label:"DIFFICULTY",value:function(){return Ho().name},adjust:i("difficulty",0,2),desc:function(){return Ho().desc}},{label:"BACK",action:function(){xt.back()}}]}}var JM=[["MOVE","W A S D   OR   ARROW KEYS"],["LOOK AND AIM","MOUSE (UP AND DOWN TOO)"],["FIRE","LEFT CLICK   OR   CTRL"],["JUMP","SPACE   OR   RIGHT CLICK"],["CROUCH","C"],["USE / OPEN","E"],["RUN","HOLD SHIFT"],["WEAPONS","1 2 3 4 5   OR   MOUSE WHEEL"],["LAST WEAPON","Q"],["MAP","TAB"],["PAUSE","ESC"]];function Jm(){return{title:"CONTROLS",drawBg:ya,top:170,gap:12,items:[{label:"BACK",action:function(){xt.back()}}],drawExtra:function(){JM.forEach(function(i,e){var t=40+e*11;Le.default.drawText(je,i[0],140,t,{color:"#c8c0b0",right:!0}),Le.default.drawText(je,i[1],152,t,{color:"#ffd23e"})})}}}function Dm(i,e,t){return{title:i,drawBg:ya,scale:2,top:86,gap:18,sel:1,drawExtra:function(){Le.default.drawText(je,e,yt/2,56,{color:"#a8a090",center:!0})},items:[{label:"YES",action:t},{label:"NO",action:function(){xt.back()}}]}}function jM(){return{title:"PAUSED",drawBg:ya,scale:2,top:64,gap:14,descY:144,footerY:176,footer:"ARROWS OR MOUSE: CHOOSE   ENTER OR CLICK: SELECT",items:[{label:function(){return it.state().p.dead?"TRY AGAIN":"RESUME"},action:function(){it.state().p.dead&&it.retryLevel(),xt.close(),Bo()},desc:"BACK TO THE FIGHT."},{label:"RESTART LEVEL",desc:"START THIS LEVEL OVER WITH THE GEAR YOU BROUGHT IN.",action:function(){xt.push(Dm("RESTART?","YOU WILL LOSE PROGRESS IN THIS LEVEL.",function(){it.retryLevel(),xt.close(),Bo()}))}},{label:"OPTIONS",action:function(){xt.push(Zm())},desc:"MOUSE, VOLUME, FIELD OF VIEW AND MORE."},{label:"CONTROLS",action:function(){xt.push(Jm())},desc:"EVERY KEY, ON ONE PAGE."},{label:"QUIT TO TITLE",desc:"YOUR UNLOCKED LEVELS ARE SAVED.",action:function(){xt.push(Dm("QUIT?","PROGRESS IN THIS LEVEL WILL BE LOST.",Bf))}}],drawExtra:function(){var i=it.state(),e=i.stats;Le.default.drawText(je,i.L.name+"   "+Ho().name,yt/2,38,{color:"#c8c0b0",center:!0}),Le.default.drawText(je,"GOAL: "+it.objective(),yt/2,48,{color:"#f0d848",center:!0}),Le.default.drawText(je,"KILLS "+e.kills+"/"+e.totalKills+"   ITEMS "+e.items+"/"+e.totalItems+"   SECRETS "+e.secrets+"/"+e.totalSecrets+"   TIME "+ms(i.time),yt/2,160,{color:"#8a8478",center:!0})}}}function $M(i){var e=it.state(),t=e.L.name.split(": ");je.fillStyle="rgba(4,3,2,0.6)",je.fillRect(0,0,yt,qn),Le.default.drawText(je,t[0],yt/2,22,{color:"#8a8478",center:!0}),Le.default.drawText(je,t[1]||e.L.name,yt/2,32,{scale:3,color:"#ff9a28",shadow:"#401008",center:!0}),Le.default.drawText(je,"GOAL",yt/2,60,{color:"#8a8478",center:!0}),Le.default.drawText(je,it.objective(),yt/2,69,{scale:2,color:"#f0d848",shadow:!0,center:!0}),Le.default.drawText(je,"DIFFICULTY: "+Ho().name+"     PAR "+ms(e.L.par),yt/2,88,{color:"#a8a090",center:!0}),i%1<.7&&Le.default.drawText(je,"CLICK TO BEGIN",yt/2,106,{scale:2,color:"#ffffff",shadow:!0,center:!0}),Fo&&Le.default.drawText(je,"THE GAME NEEDS THE MOUSE. CLICK THE SCREEN AGAIN.",yt/2,124,{color:"#ff9a28",center:!0}),Le.default.drawText(je,"WASD MOVE  MOUSE LOOK  CLICK FIRE  SPACE JUMP  E USE  TAB MAP  ESC PAUSE",yt/2,140,{color:"#8a8478",center:!0})}function QM(i){var e=it.interStats();je.fillStyle="rgba(10,8,6,0.88)",je.fillRect(0,0,yt,qn),ko(qn-6,i,1),Le.default.drawText(je,e.name,yt/2,22,{scale:2,color:"#ff9a28",shadow:!0,center:!0}),Le.default.drawText(je,"FINISHED!",yt/2,42,{scale:2,color:"#e8e0c8",shadow:!0,center:!0});var t=du?1:Math.min(1,i/1.2);function n(s,a){return a?Math.round(s/a*100*t):100}if([["KILLS",e.kills,e.totalKills,70],["ITEMS",e.items,e.totalItems,90],["SECRETS",e.secrets,e.totalSecrets,110]].forEach(function(s){Le.default.drawText(je,s[0],90,s[3],{scale:2,color:"#c8c0b0"});var a=n(s[1],s[2]);Le.default.drawText(je,a+"%",240,s[3],{scale:2,color:a>=100?"#ffd23e":"#e03828",right:!0})}),Le.default.drawText(je,"TIME "+ms(e.time),90,132,{scale:2,color:e.time<=e.par&&t>=1?"#ffd23e":"#c8c0b0"}),Le.default.drawText(je,"PAR "+ms(e.par),240,132,{scale:2,color:"#c8c0b0",right:!0}),t>=1&&i%1<.7){var r=it.levelIndex();Le.default.drawText(je,r+1<zr.length?"CLICK OR PRESS ENTER FOR "+zr[r+1].name:"CLICK OR PRESS ENTER",yt/2,166,{color:"#f0d848",shadow:!0,center:!0})}}function eS(i){je.fillStyle="rgba(8,6,4,0.9)",je.fillRect(0,0,yt,qn),ko(qn-8,i,0),ko(qn-4,i*1.3,2),Le.default.drawText(je,"YOU WIN!",yt/2,30,{scale:4,color:"#ffd23e",shadow:"#803008",center:!0}),["THE DEMON THRONE LIES IN ASHES,","AND RILEY TAPS OUT WITH A GRIN:",`"SAME TIME TOMORROW? I'LL BE READY."`,"","THE FIREBIRD CANNOT BE KILLED.","IT ONLY BURNS BRIGHTER.","","THANKS FOR PLAYING, WARRIOR."].forEach(function(e,t){Le.default.drawText(je,e,yt/2,74+t*10,{color:"#e8e0c8",center:!0})}),i>1&&i%1<.7&&Le.default.drawText(je,"CLICK OR PRESS ENTER FOR THE TITLE SCREEN",yt/2,170,{color:"#f0d848",shadow:!0,center:!0})}function tS(i){var e=i.p;i.events.forEach(function(t){if(t.t==="sound"){if(t.local){bn.default.play(t.name);return}var n=t.x-e.x,r=t.z-e.z,s=Math.sqrt(n*n+r*r),a=Math.sin(Math.atan2(r,n)-e.ang)*.7;bn.default.play(t.name,s,a)}})}var Do=1/60,Uo=0,Um=performance.now(),Om="",pu=[],Oo=!1,nS=10;it.startLevel(0,!1);var Fm=it.state();function jm(i){var e=Math.min(.1,(i-Um)/1e3);Um=i;var t=it.mode(),n=ii==="title"?"title":t;n!==Om&&(Ai=0,Om=n),Ai+=e,pu.push(e),pu.length>240&&pu.shift();var r=it.state();if(rS(r),ii==="title"){var s=Fm.p,a=i/1e3;s.ang=a*.12,s.pitch=Math.sin(a*.3)*.15,s.x=5.5+Math.sin(a*.07)*.5,s.z=17.5,Ci.render(Fm,a,e),je.clearRect(0,0,yt,qn),_u?(xt.isOpen()||xt.open(kf()),xt.render(je,Ai)):(Ym(je,Ai),Ai%.8<.55&&Le.default.drawText(je,"LOADING...",yt/2,120,{scale:2,color:"#f0d848",shadow:!0,center:!0}))}else if(t==="game"||t==="inter"||t==="victory"){var o=Oo||t==="game"&&(!Yi||!Ii||xt.isOpen())&&!mu;if(!o&&t==="game")for(Uo+=e;Uo>=Do;){if(r.hitstop>0){r.hitstop-=Do,Uo-=Do;continue}if(it.update(Do),tS(r),Uo-=Do,it.mode()!=="game")break}else Uo=0;r=it.state(),Ci.render(r,Oo?nS:i/1e3,o?0:e,Oo),r.events.length=0,XM.draw(r,{map:xa,menu:xt.isOpen(),camera:Ci.camera}),t==="inter"?QM(Ai):t==="victory"?eS(Ai):Yi?xt.isOpen()?xt.render(je,Ai):!Ii&&!mu&&(je.fillStyle="rgba(0,0,0,0.5)",je.fillRect(0,70,yt,24),Le.default.drawText(je,"CLICK TO RESUME",yt/2,76,{scale:2,color:"#f0d848",shadow:!0,center:!0})):$M(Ai)}requestAnimationFrame(jm)}zm();requestAnimationFrame(jm);var Fr=null,Hm=null,Bm="",_u=!1;function iS(i){if(!i)return[];for(var e=["lamp","fist","pistol","tex:"+i.L.floor,"tex:"+i.L.ceil,"tex:10"],t=i.W.cells,n=new Set,r=0;r<t.length;r++)t[r]>=1&&t[r]<=9&&n.add(t[r]);return n.forEach(function(s){e.push("tex:"+s)}),i.ents.forEach(function(s){s.kind==="torch"?e.push("torch"):s.barrel?e.push("barrel"):s.kind==="pickup"?e.push("pickup:"+s.item):s.mob&&e.push(s.kind)}),Object.keys(i.p.weapons).forEach(function(s){i.p.weapons[s]&&e.push(s)}),Array.from(new Set(e))}function rS(i){if(!(!Fr||!i)){var e=Object.keys(i.p.weapons).filter(function(t){return i.p.weapons[t]}).join(",");Hm===i&&Bm===e||(Hm=i,Bm=e,Fr.ensure(iS(i)).then(function(){Ci.setAssets(Fr)}))}}function $m(){_u||(_u=!0,xt.open(kf()))}ym(void 0,["imp","gnasher","fist","pistol","tex:1","tex:slab","tex:ceilDark"]).then(function(i){Fr=i,i.loaded.length&&Ci.setAssets(i),i.problems.length&&console.info("[assets] "+i.problems.join(" | ")),i.loaded.length&&console.info("[assets] using "+i.loaded.length+" authored assets"),$m()});setTimeout($m,6e3);mu&&(window.FIREBIRD2=Object.assign({},it,{launch:function(i){it.startLevel(i,!1),Yi=!0,ii="game",xt.close()},toTitle:Bf,setMap:function(i){xa=i},freeze:function(i){Oo=!!i},frozen:function(){return Oo},models:function(){return Ci.debugModels()},assets:function(){return Fr?{ready:Fr.ready,loaded:Fr.loaded.slice(),problems:Fr.problems.slice()}:{ready:!1}},frameStats:function(){var i=pu.slice().sort(function(t,n){return t-n});function e(t){return i.length?i[Math.min(i.length-1,Math.floor(i.length*t))]*1e3:0}return{frames:i.length,p50:e(.5),p95:e(.95),p99:e(.99),info:Ci.info().render}},renderInfo:function(){return Ci.info()}}));})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
