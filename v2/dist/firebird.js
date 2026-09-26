(()=>{var Ud=Object.create;var Yu=Object.defineProperty;var Od=Object.getOwnPropertyDescriptor;var Fd=Object.getOwnPropertyNames;var Hd=Object.getPrototypeOf,Bd=Object.prototype.hasOwnProperty;var Es=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var kd=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Fd(e))!Bd.call(i,r)&&r!==t&&Yu(i,r,{get:()=>e[r],enumerable:!(n=Od(e,r))||n.enumerable});return i};var ws=(i,e,t)=>(t=i!=null?Ud(Hd(i)):{},kd(e||!i||!i.__esModule?Yu(t,"default",{value:i,enumerable:!0}):t,i));var Ku=Es((ex,cc)=>{"use strict";var zd=(function(){function i(D){var N=parseInt(D.slice(1),16),H=N>>16&255,z=N>>8&255,Z=N&255;return(4278190080|Z<<16|z<<8|H)>>>0}function e(D,N,H){var z=document.createElement("canvas");z.width=D,z.height=N;var Z=z.getContext("2d"),V=Z.createImageData(D,N);return new Uint32Array(V.data.buffer).set(H),Z.putImageData(V,0,0),{w:D,h:N,data:H,canvas:z}}function t(D,N,H){H=H||{};for(var z=!!H.mirror,Z=D[0].length,V=0;V<D.length;V++)if(D[V].length!==Z)throw new Error("sprite row "+V+" length "+D[V].length+" != "+Z);for(var K=z?Z*2:Z,ce=D.length,ge=new Uint32Array(K*ce),de=0;de<ce;de++)for(var ve=D[de],Me=0;Me<Z;Me++){var Le=N[ve[Me]];if(Le){var Be=i(Le);ge[de*K+Me]=Be,z&&(ge[de*K+(K-1-Me)]=Be)}}return e(K,ce,ge)}function n(D,N,H){var z=(D|0)*374761393+(N|0)*668265263+(H|0)*974711;return z=(z^z>>13)*1274126177,((z^z>>16)>>>0)%1e3/1e3}function r(D,N,H){var z=parseInt(D.slice(1),16),Z=parseInt(N.slice(1),16),V=(z>>16&255)+((Z>>16&255)-(z>>16&255))*H,K=(z>>8&255)+((Z>>8&255)-(z>>8&255))*H,ce=(z&255)+((Z&255)-(z&255))*H;return(4278190080|(ce&255)<<16|(K&255)<<8|V&255)>>>0}var s=64;function a(D){for(var N=new Uint32Array(s*s),H=0;H<s;H++)for(var z=0;z<s;z++)N[H*s+z]=D(z,H);return e(s,s,N)}function l(D,N,H,z){return a(function(Z,V){var K=V>>4,ce=K&1?16:0,ge=Z+ce>>5,de=(V&15)>=14,ve=(Z+ce&31)>=30;if(de||ve)return r(z,"#000000",n(Z,V,D)*.4);var Me=n(Z,V,D)*.5+n(ge*31,K*7,D+9)*.5,Le=(V&15)<2||(Z+ce&31)<2?.25:0;return r(N,H,Me*.65+Le)})}function c(D,N,H){return a(function(z,Z){var V=z>>4,K=Z>>4,ce=n(V,K,D)*6-3,ge=(z+ce)%16<1.5||(Z-ce)%16<1.5,de=n(z,Z,D+3)*.45+n(V*5,K*3,D+7)*.55;return ge?r(H,"#000000",.5):r(N,H,de*.7)})}function u(D,N,H){return a(function(z,Z){var V=z>>4&1,K=(z&15)<1||(Z&31)<1,ce=((z&15)===3||(z&15)===12)&&((Z&31)===4||(Z&31)===27),ge=n(z,Z,D)*.3+V*.12+Z/s*.15;return K?r(H,"#000000",.6):ce?r(N,"#ffffff",.35):r(N,H,ge)})}function o(D){return a(function(N,H){var z="#4a5a52",Z="#232c28";if(H<6||H>57)return r("#2a3430","#000000",.3+n(N,H,D)*.2);if(H>=28&&H<=33&&(N&31)>3&&(N&31)<28){var V=H===30||H===31?"#7dff9a":"#2f8a4a";return r(V,"#000000",n(N,H,D)*.2)}var K=(N&31)<2,ce=H>40&&H<54&&(H&3)<2&&(N&31)>6&&(N&31)<26;return K?r(Z,"#000000",.5):ce?r("#1a211e","#000000",.3):r(z,Z,n(N,H,D)*.5)})}function p(D){return a(function(N,H){var z=n(N,H,D)*.4+n(N>>2,H>>2,D+5)*.6,Z=Math.sin(N*.22+Math.sin(H*.13+D)*2.1)+Math.sin(H*.18+N*.05);return Z>1.45?r("#ff7a18","#ffd23e",n(N,H,D+2)):Z>1.2?r("#8a1e08","#ff5a10",.5):r("#4a1410","#1c0605",z)})}function f(D){return a(function(N,H){var z="#5a5f68",Z="#2a2d33",V=Math.abs(N-32)<1,K=(H&15)<2,ce=N<3||N>60||H<3||H>60;if(D&&H>8&&H<20&&!V){var ge=D==="red"?"#d02020":"#2050e0";return r(ge,"#000000",(H===9||H===19?.5:0)+n(N,H,40)*.2)}return V?r("#101216","#000000",.3):ce?r(Z,"#000000",.4):K?r(Z,z,.3):r(z,Z,n(N,H,17)*.4+H/s*.2)})}function m(D){return a(function(N,H){var z="#4f4a42",Z="#28241e",V=N>16&&N<48,K=H>14&&H<50;if(V&&K){var ce=N>24&&N<40,ge=D?H>32&&H<46:H>18&&H<32;return ce&&ge?r(D?"#30d040":"#d03030","#000000",n(N,H,3)*.25):r("#1c1a16","#000000",.3)}var de=N<2||N>61||H<2||H>61;return de?r(Z,"#000000",.5):r(z,Z,n(N,H,21)*.5)})}function v(D,N,H){return a(function(z,Z){var V=(z>>4)+(Z>>4)&1,K=(z&15)<1||(Z&15)<1,ce=n(z,Z,D)*.4;return K?r(H,"#000000",.55):r(V?N:H,"#000000",ce+V*.05)})}var E={o:"#1c0e06",b:"#9a5226",d:"#6b3413",c:"#e08a28",h:"#f7b24a",e:"#ffe14a",m:"#3a1006",t:"#f0e6c8",x:"#f0e6c8",r:"#c03018",f:"#ff8a18",g:"#ffd23e"},g=["......tt........",".......tt.......","........oooooooo","........obbbbbbb","........obbddddd","........obbeedbb","........obbbbbbb","........obdmtmbb","........obbmmbbb","........oooooobb","....oooooooooooo","...obbbbbbdccccc","..obbbo.obdccchc","..obbo..obdcchhc","..obbo..obddcccc",".obbo...obbdcccc",".obbo...obbddccc",".otto...obbbdddd",".ott....obbbbddd","........obbbbbbd","........oobbbbbb",".........obbo...",".........obbo...",".........obbo...",".........obbo...",".........oddo...",".........oddo...","........obddo...","........odddo...","......ottdddo...","......ooooooo...","................"],d=g.slice(0,21).concat(["........obbo....","........obbo....","........obbo....","........obbo....","........oddo....","........oddo....",".......obddo....",".......odddo....",".....ottdddo....",".....oooooo.....","................"]),x=["..gf..tt........",".gffg..tt.......",".offo...oooooooo",".otto...obbbbbbb",".obbo...obbddddd",".obbo...obeeedbb",".obbo...obbbbbbb",".obbo...obmmttbb","..obbo..obbmmbbb","..obbo..oooooobb","..obooooooooooo.","...obbbbbdccccc.","....obbobdccchc.","........obdcchhc","........obddcccc","........obbdcccc","........obbddccc","........obbbdddd","........obbbbddd","........obbbbbbd","........oobbbbbb",".........obbo...",".........obbo...",".........obbo...",".........obbo...",".........oddo...",".........oddo...","........obddo...","........odddo...","......ottdddo...","......ooooooo...","................"],U=g.slice();U[5]="........obbxxdbb",U[7]="........obmmmmbb";var w=["................","................","................","................","................","................","......tt........",".......tt.......","........oooooooo","........obbbbbbb","........obxxdddb","........obmmmmbb",".....oooooooobbb","...obbbbbbdccccb","..obbbboobdcccbb",".obbbo..obddccbb",".otto...obbddddb","........obbbbbdd",".......oobbbbbbb","......obbbbbbbdd","................","................","................","................","................","................","................","................","................","................","................","................"],I=["................","................","................","................","................","................","................","................","................","................","................","................","................","......tt........",".......ttoooooo.","......obbbbbbbbo",".....obbxxddmmbo","....obbbbdddbbbo","...obbddccccbbdd","..obbbbbdddbbbbb","................","................","................","................","................","................","................","................","................","................","................","................"],P=["................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","..........tt....","....oo....ott...","...obbdoooobbdo.","..obbddbbbdddbbo",".orrbdddddbbdrro",".orrrbbdddbrrro.","..orrrrrrrrrro..","...ooooooooooo..","................","................"];function O(D){var N={o:"#200a10",p:"#d06a8a",q:"#9a3d5e",k:"#e898a8",t:"#f2ead0",m:"#41101c",e:"#ffd23e",x:"#f2ead0",r:"#b02030"};if(D)for(var H in D)N[H]=D[H];return N}var b=["................","................","......oooooooooo",".....opppppppppp","....oppkpppppppp","....opppeepppppp","....oppppppppppp","....opmmmmmmmmmm","....opmtmtmtmtmt","....opmmmmmmmmmm","....optmtmtmtmtm","....opqqqqqqqqqq",".....ooooooooooo","...oppppqqpppppp","..opppppoqpppppp","..opppo.oqpppppp","..oppo..oqqppppp","..otto..oqqqpppp","..ott...oqqqqppp","........oqqqqqpp","........ooqqqqqp",".........oqqqo..",".........oqqqo..",".........oqqo...","........oqqqo...","........ottto...","........ooooo...","................","................","................","................","................"],_=b.slice(0,21).concat(["........oqqqo...","........oqqqo...","........oqqo....",".......oqqqo....",".......ottto....",".......ooooo....","................","................","................","................"]),T=["................","......oooooooooo",".....opppppppppp","....oppkpppppppp","....opppeepppppp","....opmmmmmmmmmm","....opmttmttmttm","....opmmmmmmmmmm","....opmmmmmmmmmm","....opmmmmmmmmmm","....opmttmttmttm","....opmmmmmmmmmm","....opqqqqqqqqqq","...oppppqqpppppp","..opppppoqpppppp","..opppo.oqpppppp","..oppo..oqqppppp","..otto..oqqqpppp","..ott...oqqqqppp","........oqqqqqpp","........ooqqqqqp",".........oqqqo..",".........oqqqo..",".........oqqo...","........oqqqo...","........ottto...","........ooooo...","................","................","................","................","................"],A=b.slice();A[5]="....opppxxpppppp";var y=["................","................","................","................","................","................","................","......oooooooooo",".....opppppppppp","....oppxxppppppp","....opmmmmmmmmmm","....opmtmtmtmtmt","....opqqqqqqqqqq","...opppppqqppppp","..oppppppqqquppp".replace("u","q"),"..oppoooqqqqqppp","..oo...oqqqqqqpp",".......ooqqqqqqp","........oqqqqoo.","................","................","................","................","................","................","................","................","................","................","................","................","................"],C=["................","................","................","................","................","................","................","................","................","................","................","................","................","................","......ooooooooo.",".....oppppppppqo","....opxxpmmttppo","...oppppqqqqppqo","..oqqppppppqqqoo","...ooooooooooo..","................","................","................","................","................","................","................","................","................","................","................","................"],L=["................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................",".......oo.......",".....ooppoo.tt..","...oqpppppqoot..","..oqqpmmttppqqo.",".orrqqppppqqrro.",".orrrqqqqqrrro..","..orrrrrrrrro...","...oooooooooo...","................","................"],k={o:"#06141c",h:"#1e8aa0",H:"#6fe0ec",s:"#d8fff8",v:"#ffd23e",V:"#fff6b0",c:"#157a8a",C:"#3fd8c8",g:"#ffd23e",Y:"#fff6b0"},Y=["..........",".....ooooo","...oohhhhh","..ohhHHhhh","..ohHhhhhh",".ohhhhoooo",".ohhhosvvv",".ohhhosvVV",".ohhhossss",".ohhhossss",".ohhhhosss","..ohhhooss","...ooooooo",".....ooccc","...ooccccg","..occcccCg",".occcCcccg",".occcCccgY",".occcCccgY",".occ.Ccccg",".oso.occcg",".oso.occcc","..o..oCCCC",".....occcc",".....occo.",".....occo.",".....occo.",".....oCco.",".....occo.",".....occo.",".....occo.","....ogggo.","....ooooo.",".........."],$=Y.slice(0,24).concat(["....occo..","....occo..","...occo...","...oCco...","...occo...","..occo....","..occo....",".ogggo....",".ooooo....",".........."]),re=Y.slice();re[13]=".o...ooccc",re[14]=".so.occccg",re[15]=".so.occcCg",re[16]=".oc.occccg",re[19]="..o..Ccccg",re[20]=".....occcg",re[21]=".....occcc";function q(D,N,H){return D.map(function(z,Z){for(var V="",K=0;K<z.length;K++)V+=z[K]!=="."&&n(K,Z,H)<N?z[K]:".";return V})}function j(D){var N={};for(var H in k)N[H]=k[H];if(D)for(var z in D)N[z]=D[z];return N}function J(D){var N={o:"#1a1008",f:"#e85818",F:"#ffa018",s:"#d8a06a",S:"#a8744a",w:"#f0ead8",k:"#28221a",m:"#5a1408",t:"#e8e0c8",r:"#c01818",c:"#b84a10",C:"#7e2e08",g:"#888078",x:"#301010"},H=D.gray?{s:"#9a9488",S:"#6e6a60"}:{};for(var z in H)N[z]=H[z];var Z=[".osskwwkssss",".osskwkksss.".replace(".$",""),".ossskksssss"],V=[".osssookssss",".osskwkksss.",".ossskksssss"],K=[".osssssossss",".ossooosssss",".osssssossss"],ce=[".osskoskssss",".osssksossss",".osskoskssss"],ge=["..osssssssss","..osssmmmmmm","..osssssssss"],de=["..osssssssss","..ossmmmmmmm","..osSmmsssss"],ve=["..osssmmmmmm","..ossmtttttt","..osssmmmmmm"],Me=["..ossmmmmmss","..osmmttmmss","..ossmmmmmss"],Le=D.eyes==="squint"?V:D.eyes==="shut"?K:D.eyes==="x"?ce:Z,Be=D.mouth==="grim"?de:D.mouth==="grin"?ve:D.mouth==="ouch"?Me:ge,G=[".....ffF....","...fFffffF..","..ffFfffffF.","..offffffff.",".offFffffffF",".offffffffff",".offosssssss",".oosssssssss","..ossssssSSS","..osssssssss",Le[0],Le[1],Le[2],"..osssssssss","..ossssssSss","..osssssSSss","..ossssssSss","..osssssssss",Be[0],Be[1],Be[2],"..osssssssss","...ossssssSS","...ossssssss","....oossssss","..ooccoosSSS".replace("..",".o"),".occcccooooo","occCcccccccc"];return G=G.map(function(ye){for(ye=ye.replace(/\$/g,""),ye.length>12&&(ye=ye.slice(0,12));ye.length<12;)ye+=".";return ye}),D.blood>=1&&(G[8]="..osrrsssSSS".slice(0,12),G[9]="..ossrssssss"),D.blood>=2&&(G[14]="..osrssssrss",G[15]="..orrssSSrss",G[21]="..osrsssssrs"),D.blood>=3&&(G[6]=".offosrrssss",G[13]="..orrsssrrss",G[22]="...orrsssrSS".slice(0,12)),t(G,N,{mirror:!0})}var ee={o:"#0e0c0a",g:"#4a4e56",G:"#6a707c",d:"#26282e",s:"#d8a06a",S:"#a8744a",w:"#7a4a28",W:"#5a3418",y:"#c8b040",k:"#16181c"},he=["............","....oooo....","..oossssoo..",".ossssssss o".replace(" ","s"),".osssSsssss.","ossssSSssss.","osssssSssss.","ossssssssss.","osSSsssssss.","ossssssssss.",".ossssssss..",".ossssssss..","..ossssss...","..oswwwws...","..owwWWww...","..owWWWWw...","..owwwwww...","...oooooo..."].map(function(D){for(;D.length<12;)D+=".";return D.slice(0,12)}),_e=["...........ooo","..........ookk","..........ogkk","..........ogGd","..........ogGd",".........ooGgd",".........ogGGd",".........ogGGd",".........ogGGd",".........odddd",".........ogGGd",".........ogGGd",".........odddd","..........oggd","..........oggd","..........ogdd",".......ooooddd",".....oossssodd","....ossssssodd","...ossssSssood","..osssssSSssod","..ossssssSssod","..osSSssssssod","..ossssssssood","...osssssssso.","...osssssssso.","....oossssoo..","......oooo...."],Ue=[".........ooo","........ookk","........odkk","........odgd","........odgd","........odgd","........odgd","........odgd","........odgd","........odgd","........oddd",".......ooddd","......oWwwdd","......oWwwwd","......oWWwwd","......oWWwwd","......ooWWwd",".......ooWWd","........oddd","........oggd",".....oooogdd","...oosssoggd","..ossssssogd","..ossSsssogd",".osssSSssood",".ossssssssod",".osSSsssssod",".ossssssssod","..ossssssso.","..ossssssso.","...oosssoo..",".....oooo..."];function Oe(D,N,H){for(var z=new Uint32Array(D*N),Z=(D-1)/2,V=(N-1)/2,K=0;K<N;K++)for(var ce=0;ce<D;ce++){var ge=(ce-Z)/(D/2),de=(K-V)/(N/2),ve=Math.sqrt(ge*ge+de*de),Me=H(ve,ce,K);Me&&(z[K*D+ce]=Me)}return e(D,N,z)}function oe(D){return Oe(12,12,function(N,H,z){var Z=n(H,z,D)*.3;return N+Z<.38?i("#fff8d0"):N+Z<.68?i("#ffd23e"):N+Z<.95?i("#ff7a18"):0})}function ue(D){return Oe(14,14,function(N,H,z){var Z=n(H,z,D)*.3;return N+Z<.38?i("#eaffd0"):N+Z<.68?i("#8aff3e"):N+Z<.95?i("#2fa818"):0})}function be(D,N,H){return Oe(D,D,function(z,Z,V){var K=n(Z,V,N)*.55;return z+K<.3*H?i("#fff8d0"):z+K<.55*H?i("#ffd23e"):z+K<.8*H?i("#ff7a18"):z+K<1*H?i("#a83010"):0})}function Ge(D,N){return Oe(N?8:6,N?8:6,function(H,z,Z){var V=n(z,Z,D)*.4;return H+V<.5?i("#c8c4bc"):H+V<.9?i("#78746c"):0})}function Te(D,N){return Oe(N?8:6,N?8:6,function(H,z,Z){var V=n(z,Z,D)*.45;return H+V<.45?i("#e04020"):H+V<.9?i("#901810"):0})}function Je(){for(var D=16,N=22,H=new Uint32Array(D*N),z=0;z<N;z++)for(var Z=0;Z<D;Z++){var V=Math.abs((Z-7.5)/7.5);if(!(V>1)){var K=V>.88||z===0||z===N-1,ce=1-V*V*.75,ge=z===4||z===16,de=z>=8&&z<=12,ve=de?"#c05010":"#5c554c";z>=1&&z<=2&&(ve="#3a352e");var Me=r(ve,"#000000",1-ce+(ge?.35:0)+n(Z,z,77)*.2);K&&(Me=i("#16130f")),z===1&&V<.6&&n(Z,z,8)>.4&&(Me=i("#ff9a28")),H[z*D+Z]=Me}}return e(D,N,H)}function gt(D){for(var N=10,H=28,z=new Uint32Array(N*H),Z=12;Z<28;Z++)for(var V=4;V<=5;V++)z[Z*N+V]=i(Z>24?"#3a2812":"#6a4a22");z[12*N+3]=i("#8a6432"),z[12*N+6]=i("#8a6432");for(var K=0;K<12;K++)for(var ce=0;ce<N;ce++){var ge=(ce-4.5)/4.2,de=(K-8)/8,ve=Math.sqrt(ge*ge*1.6+de*de),Me=n(ce,K,D)*.5;ve+Me<.45?z[K*N+ce]=i("#fff0b0"):ve+Me<.75?z[K*N+ce]=i("#ffd23e"):ve+Me<1&&(z[K*N+ce]=i("#ff7a18"))}return e(N,H,z)}function Ke(D,N,H,z,Z){for(var V=new Uint32Array(D*N),K=0;K<N;K++)for(var ce=0;ce<D;ce++){var ge=ce===0||K===0||ce===D-1||K===N-1,de=ge?i("#14120e"):r(H,z,K/N*.6+n(ce,K,5)*.15);V[K*D+ce]=de}return Z&&Z(V,D,N),e(D,N,V)}function Qe(D){return function(N,H,z){for(var Z=H>>1,V=z>>1,K=i(D),ce=-(z>>2);ce<=z>>2;ce++)N[(V+ce)*H+Z]=K,N[(V+ce)*H+Z-1]=K;for(var ge=-(H>>2);ge<=H>>2;ge++)N[V*H+Z+ge]=K,N[(V-1)*H+Z+ge]=K}}function vt(D){var N=["oooooooo","occccccb".replace("b","o"),"occwwcco","occwwcco","occcccco","occcccco","ocwwwwco","occcccco","occcccco","oooooooo"];return t(N,{o:"#14120e",c:D,w:"#f0ead8"})}function nt(){var D=30,N=10,H=new Uint32Array(D*N);function z(ce,ge,de){ce>=0&&ce<D&&ge>=0&&ge<N&&(H[ge*D+ce]=i(de))}for(var Z=2;Z<22;Z++)z(Z,3,"#3a3e46"),z(Z,4,"#5a5f68"),z(Z,5,"#26282e");for(var V=8;V<15;V++)z(V,6,"#5a3418");for(var K=21;K<29;K++)z(K,4+(K-21>>1),"#5a3418"),z(K,5+(K-21>>1),"#7a4a28");return z(1,3,"#16130f"),z(1,4,"#16130f"),e(D,N,H)}function Et(){return Oe(14,14,function(D,N,H){return D<.3?i("#fff8d0"):D<.6?i("#ffd23e"):D<.85?i("#ff7a18"):D<1?i("#a03008"):0})}function Gt(){return Oe(20,20,function(D,N,H){var z=Math.atan2(H-9.5,N-9.5),Z=.55+.45*Math.abs(Math.sin(z*4));return D<.35*Z?i("#fff8d0"):D<.7*Z?i("#ffd23e"):D<1*Z?i("#ff7a18"):0})}var Xt={A:[2,5,7,5,5],B:[6,5,6,5,6],C:[3,4,4,4,3],D:[6,5,5,5,6],E:[7,4,6,4,7],F:[7,4,6,4,4],G:[3,4,5,5,3],H:[5,5,7,5,5],I:[7,2,2,2,7],J:[1,1,1,5,2],K:[5,6,4,6,5],L:[4,4,4,4,7],M:[5,7,5,5,5],N:[6,5,5,5,5],O:[2,5,5,5,2],P:[6,5,6,4,4],Q:[2,5,5,6,3],R:[6,5,6,6,5],S:[3,4,2,1,6],T:[7,2,2,2,2],U:[5,5,5,5,7],V:[5,5,5,5,2],W:[5,5,5,7,5],X:[5,5,2,5,5],Y:[5,5,2,2,2],Z:[7,1,2,4,7],0:[7,5,5,5,7],1:[2,6,2,2,7],2:[6,1,2,4,7],3:[6,1,2,1,6],4:[5,5,7,1,1],5:[7,4,6,1,6],6:[3,4,6,5,2],7:[7,1,2,2,2],8:[7,5,7,5,7],9:[2,5,3,1,6]," ":[0,0,0,0,0],".":[0,0,0,0,2],",":[0,0,0,2,4],"!":[2,2,2,0,2],"?":[6,1,2,0,2],":":[0,2,0,2,0],"-":[0,0,7,0,0],"+":[0,2,7,2,0],"%":[5,1,2,4,5],"/":[1,1,2,4,4],"'":[2,2,0,0,0],_:[0,0,0,0,7],">":[4,2,1,2,4],"<":[1,2,4,2,1],'"':[5,5,0,0,0],"=":[0,7,0,7,0],"(":[1,2,2,2,1],")":[4,2,2,2,4],"*":[0,5,2,5,0],"#":[5,7,5,7,5],"^":[2,5,0,0,0],"&":[2,5,2,5,3]};function At(D,N,H,z,Z){Z=Z||{};var V=Z.scale||1,K=Z.color||"#e8e0c8",ce=Z.shadow;if(N=String(N).toUpperCase(),Z.center&&(H-=Math.floor(It(N,V)/2)),Z.right&&(H-=It(N,V)),ce){var ge=typeof ce=="string"?ce:"#000000";At(D,N,H+V,z+V,{scale:V,color:ge})}D.fillStyle=K;for(var de=0;de<N.length;de++){for(var ve=Xt[N[de]]||Xt["?"],Me=0;Me<5;Me++)for(var Le=ve[Me],Be=0;Be<3;Be++)Le&4>>Be&&D.fillRect(H+Be*V,z+Me*V,V,V);H+=4*V}}function It(D,N){return String(D).length*4*(N||1)-(N||1)}var W={};W.tex={1:l(1,"#8a4232","#4a1e14","#2a1812"),2:c(2,"#8a8578","#4a463c"),3:u(3,"#5a5f68","#26282e"),4:o(4),5:p(5),6:f(null),7:f("red"),8:f("blue"),9:m(!1),10:m(!0),11:l(1,"#8a4232","#4a1e14","#2a1812")},W.floors={slab:v(11,"#4e4a42","#38342c"),tech:v(12,"#3c4440","#2a302c"),hell:a(function(D,N){var H=n(D,N,13)*.5+n(D>>2,N>>2,14)*.5,z=Math.sin(D*.19+Math.sin(N*.11)*2)+Math.sin(N*.15);return z>1.5?r("#ff7a18","#ffd23e",H):r("#3a100c","#180404",H)}),ceilDark:v(15,"#2e2b26","#201d18"),ceilTech:a(function(D,N){var H=(D&31)>12&&(D&31)<20&&(N&31)>12&&(N&31)<20;return H?r("#fff0c0","#c0a860",n(D,N,16)*.3):r("#2a2e2c","#1a1d1b",n(D,N,16)*.5)}),ceilHell:a(function(D,N){return r("#241010","#100404",n(D,N,17)*.6)})};var Dt=E,st=O(null),F=O({p:"#c8502a",q:"#7e2412",k:"#e8804a",e:"#a0fFff".toLowerCase()});W.mobs={imp:{walkA:t(g,Dt,{mirror:!0}),walkB:t(d,Dt,{mirror:!0}),attack:t(x,Dt,{mirror:!0}),pain:t(U,Dt,{mirror:!0}),die1:t(w,Dt,{mirror:!0}),die2:t(I,Dt,{mirror:!0}),corpse:t(P,Dt,{mirror:!0})},gnasher:{walkA:t(b,st,{mirror:!0}),walkB:t(_,st,{mirror:!0}),attack:t(T,st,{mirror:!0}),pain:t(A,st,{mirror:!0}),die1:t(y,st,{mirror:!0}),die2:t(C,st,{mirror:!0}),corpse:t(L,st,{mirror:!0})},knight:{walkA:t(b,F,{mirror:!0}),walkB:t(_,F,{mirror:!0}),attack:t(T,F,{mirror:!0}),pain:t(A,F,{mirror:!0}),die1:t(y,F,{mirror:!0}),die2:t(C,F,{mirror:!0}),corpse:t(L,F,{mirror:!0})},riley:{walkA:t(Y,k,{mirror:!0}),walkB:t($,k,{mirror:!0}),attack:t(re,j({v:"#ffffff",V:"#ffffff",Y:"#ffffff",g:"#fff6b0"}),{mirror:!0}),pain:t(Y,j({c:"#e8fffc",C:"#ffffff",h:"#9ef0f8"}),{mirror:!0}),shield:t(Y,j({c:"#c89018",C:"#ffd23e",h:"#e0a020",H:"#fff0a0"}),{mirror:!0}),die1:t(q(Y,.6,71),j({c:"#6fe0ec"}),{mirror:!0}),die2:t(q(Y,.22,72),j({c:"#d8fff8",h:"#d8fff8"}),{mirror:!0}),corpse:null}},W.things={barrel:Je(),torchA:gt(31),torchB:gt(87),stim:Ke(10,8,"#e8e4dc","#a8a49c",Qe("#d02020")),medkit:Ke(16,12,"#e8e4dc","#a8a49c",Qe("#d02020")),clip:Ke(10,8,"#7a7468","#4a463c",function(D,N,H){for(var z=2;z<N-2;z+=2)D[2*N+z]=i("#c8a030")}),shells:Ke(14,9,"#b03020","#5e1810",function(D,N,H){for(var z=2;z<N-2;z+=2)D[3*N+z]=i("#c8a030"),D[4*N+z]=i("#c8a030")}),armor:t(["...oooo.","..oggggo",".ogggggg",".oggGGgg",".ogggggg",".ogggggg","..ogggg o".replace(" ",""),"..oggggg","...ooooo"].map(function(D){for(;D.length<8;)D+=".";return D.slice(0,8)}),{o:"#14120e",g:"#3a7a30",G:"#6ab858"},{mirror:!0}),keyRed:vt("#d02020"),keyBlue:vt("#2050e0"),shotgunPickup:nt(),orb:Et(),fireballA:oe(41),fireballB:oe(42),greenballA:ue(43),greenballB:ue(44),boom1:be(24,51,.7),boom2:be(28,52,1),boom3:be(28,53,1.25),puffA:Ge(61,!0),puffB:Ge(62,!1),bloodA:Te(63,!0),bloodB:Te(64,!1)},W.faces={ok:J({eyes:"open",mouth:"calm",blood:0}),hurt1:J({eyes:"open",mouth:"grim",blood:1}),hurt2:J({eyes:"squint",mouth:"grim",blood:2}),hurt3:J({eyes:"squint",mouth:"ouch",blood:3}),pain:J({eyes:"shut",mouth:"ouch",blood:1}),grin:J({eyes:"open",mouth:"grin",blood:0}),dead:J({eyes:"x",mouth:"ouch",blood:3,gray:!0})},W.guns={fist:t(he,ee,{mirror:!0}),pistol:t(_e,ee,{mirror:!0}),shotgun:t(Ue,ee,{mirror:!0}),flash:Gt()};var M={};return W.secretTex=function(D){if(M[D])return M[D];for(var N=W.tex[D]||W.tex[1],H=new Uint32Array(N.data),z=0,Z=0;Z<H.length;Z++){var V=H[Z];z+=(V>>16&255)+(V>>8&255)+(V&255)}var K=z/H.length/3>70;function ce(Me){var Le=H[Me],Be=Le>>16&255,G=Le>>8&255,ye=Le&255;K?(Be*=.35,G*=.35,ye*=.35):(Be=Be*.5+110,G=G*.5+95,ye=ye*.5+80),H[Me]=(4278190080|(Be&255)<<16|(G&255)<<8|ye&255)>>>0}for(var ge=22,de=6;de<58;de++)ge+=de%7===0?1:de%11===0?-1:0,ce(de*64+ge),ce(de*64+ge+1);for(var ve=0;ve<7;ve++)ce((30+ve)*64+ge+2+ve);return M[D]={w:64,h:64,data:H},M[D]},W.drawText=At,W.textWidth=It,W.hex=i,W})();typeof cc!="undefined"&&(cc.exports=zd)});var Zu=Es((tx,uc)=>{"use strict";var Vd=(function(){var i=null,e=null,t=null,n=null,r=!0,s=!1,a=.5;try{r=localStorage.getItem("firebird.music")!=="off"}catch{}function l(){if(i)return i.state==="suspended"&&i.resume(),!0;try{var y=window.AudioContext||window.webkitAudioContext;return y?(i=new y,e=i.createGain(),e.gain.value=a,e.connect(i.destination),t=i.createGain(),t.gain.value=.9,t.connect(e),n=i.createGain(),n.gain.value=.3,n.connect(e),!0):!1}catch{return!1}}function c(y){if(i){var C=i.currentTime+(y.delay||0),L=i.createOscillator();L.type=y.type||"square",L.frequency.setValueAtTime(y.f0,C),y.f1&&L.frequency.exponentialRampToValueAtTime(Math.max(20,y.f1),C+y.dur);var k=i.createGain(),Y=y.gain||.3;k.gain.setValueAtTime(1e-4,C),k.gain.exponentialRampToValueAtTime(Y,C+(y.attack||.008)),k.gain.exponentialRampToValueAtTime(1e-4,C+y.dur);var $=t;if(y.pan&&i.createStereoPanner){var re=i.createStereoPanner();re.pan.value=Math.max(-1,Math.min(1,y.pan)),k.connect(re),re.connect(y.bus||t),$=null}else k.connect(y.bus||t);if(y.wobble){var q=i.createOscillator(),j=i.createGain();q.frequency.value=y.wobble,j.gain.value=y.f0*.25,q.connect(j),j.connect(L.frequency),q.start(C),q.stop(C+y.dur)}L.connect(k),L.start(C),L.stop(C+y.dur+.02)}}var u=null;function o(){if(u)return u;var y=i.sampleRate*1.5;u=i.createBuffer(1,y,i.sampleRate);for(var C=u.getChannelData(0),L=0;L<y;L++)C[L]=Math.random()*2-1;return u}function p(y){if(i){var C=i.currentTime+(y.delay||0),L=i.createBufferSource();L.buffer=o(),L.loop=!0;var k=i.createBiquadFilter();k.type=y.type||"lowpass",k.frequency.setValueAtTime(y.f0||1e3,C),y.f1&&k.frequency.exponentialRampToValueAtTime(Math.max(30,y.f1),C+y.dur),k.Q.value=y.q||.8;var Y=i.createGain(),$=y.gain||.3;if(Y.gain.setValueAtTime(1e-4,C),Y.gain.exponentialRampToValueAtTime($,C+(y.attack||.006)),Y.gain.exponentialRampToValueAtTime(1e-4,C+y.dur),L.connect(k),k.connect(Y),y.pan&&i.createStereoPanner){var re=i.createStereoPanner();re.pan.value=Math.max(-1,Math.min(1,y.pan)),Y.connect(re),re.connect(t)}else Y.connect(t);L.start(C),L.stop(C+y.dur+.02)}}var f={pistol:function(y,C){p({dur:.14,gain:.5*y,f0:2400,f1:300,pan:C}),c({f0:220,f1:90,dur:.08,type:"square",gain:.2*y,pan:C})},shotgun:function(y,C){p({dur:.38,gain:.8*y,f0:1600,f1:120,pan:C}),c({f0:130,f1:45,dur:.3,type:"sawtooth",gain:.35*y,pan:C})},pump:function(y,C){p({dur:.05,gain:.3*y,f0:900,type:"bandpass",q:2,delay:0,pan:C}),p({dur:.05,gain:.3*y,f0:700,type:"bandpass",q:2,delay:.13,pan:C})},punch:function(y,C){p({dur:.1,gain:.25*y,f0:500,f1:150,pan:C}),c({f0:90,f1:50,dur:.1,type:"sine",gain:.4*y,pan:C})},whiff:function(y,C){p({dur:.12,gain:.15*y,f0:600,f1:1400,type:"bandpass",q:1.5,pan:C})},doorOpen:function(y,C){p({dur:.5,gain:.22*y,f0:200,f1:500,pan:C}),c({f0:70,f1:130,dur:.5,type:"sawtooth",gain:.12*y,pan:C})},doorClose:function(y,C){p({dur:.4,gain:.2*y,f0:400,f1:150,pan:C}),c({f0:120,f1:60,dur:.4,type:"sawtooth",gain:.12*y,pan:C}),c({f0:60,dur:.08,type:"sine",gain:.3*y,delay:.38,pan:C})},locked:function(y,C){c({f0:150,dur:.09,type:"square",gain:.25*y,pan:C}),c({f0:110,dur:.12,type:"square",gain:.25*y,delay:.11,pan:C})},switchFlip:function(y,C){p({dur:.06,gain:.3*y,f0:1200,type:"bandpass",q:2,pan:C}),c({f0:90,f1:55,dur:.18,type:"square",gain:.3*y,delay:.05,pan:C})},pickup:function(y,C){c({f0:660,dur:.06,type:"square",gain:.15*y,pan:C}),c({f0:880,dur:.08,type:"square",gain:.15*y,delay:.06,pan:C})},health:function(y,C){c({f0:440,dur:.08,type:"sine",gain:.25*y,pan:C}),c({f0:587,dur:.12,type:"sine",gain:.25*y,delay:.07,pan:C})},keyPickup:function(y,C){[523,659,784,1047].forEach(function(L,k){c({f0:L,dur:.09,type:"square",gain:.16,delay:k*.07,pan:C})})},weaponUp:function(y,C){[180,260,380,520].forEach(function(L,k){c({f0:L,dur:.08,type:"sawtooth",gain:.18,delay:k*.05,pan:C})})},secret:function(y,C){[880,1108,1318,1760].forEach(function(L,k){c({f0:L,dur:.14,type:"triangle",gain:.2,delay:k*.09,pan:C})})},orb:function(y,C){[220,330,440,660,880].forEach(function(L,k){c({f0:L,dur:.2,type:"triangle",gain:.2,delay:k*.08,pan:C})})},impSight:function(y,C){c({f0:110,f1:55,dur:.5,type:"sawtooth",gain:.3*y,wobble:9,pan:C})},knightSight:function(y,C){c({f0:75,f1:35,dur:.9,type:"sawtooth",gain:.4*y,wobble:6,pan:C})},rileySight:function(y,C){[523,659,784,1047].forEach(function(L,k){c({f0:L,dur:.12,type:"triangle",gain:.22*y,delay:k*.07,pan:C})})},rileyTalk:function(y,C){c({f0:880,f1:1320,dur:.06,type:"square",gain:.08}),c({f0:1320,dur:.05,type:"square",gain:.07,delay:.07})},rileyShoot:function(y,C){c({f0:1400,f1:500,dur:.18,type:"triangle",gain:.25*y,pan:C})},rileyShield:function(y,C){c({f0:300,f1:900,dur:.3,type:"sine",gain:.3*y,wobble:18,pan:C})},rileyDerez:function(y,C){[1568,1319,1047,784,659,523,392].forEach(function(L,k){c({f0:L,dur:.14,type:"triangle",gain:.2,delay:k*.09,pan:C})})},impShoot:function(y,C){p({dur:.22,gain:.25*y,f0:400,f1:1200,type:"bandpass",q:1.5,pan:C})},fireExplode:function(y,C){p({dur:.3,gain:.4*y,f0:900,f1:100,pan:C})},barrelBoom:function(y,C){p({dur:.7,gain:.9*y,f0:1400,f1:60,pan:C}),c({f0:65,f1:28,dur:.6,type:"sine",gain:.6*y,pan:C})},enemyPain:function(y,C){c({f0:200,f1:120,dur:.13,type:"square",gain:.22*y,pan:C})},enemyDie:function(y,C){c({f0:170,f1:40,dur:.5,type:"sawtooth",gain:.3*y,wobble:12,pan:C}),p({dur:.25,gain:.2*y,f0:700,f1:150,delay:.05,pan:C})},playerPain:function(y,C){c({f0:170,f1:90,dur:.16,type:"square",gain:.3,pan:C}),p({dur:.1,gain:.15,f0:500,f1:200,pan:C})},playerDie:function(y,C){c({f0:220,f1:28,dur:1.3,type:"sawtooth",gain:.4,wobble:5,pan:C})},noAmmo:function(y,C){p({dur:.03,gain:.2,f0:1800,type:"bandpass",q:3,pan:C})},tally:function(y,C){c({f0:990,dur:.03,type:"square",gain:.12,pan:C})},menu:function(y,C){c({f0:520,dur:.05,type:"square",gain:.15,pan:C})},menuPick:function(y,C){c({f0:520,dur:.06,type:"square",gain:.18}),c({f0:780,dur:.09,type:"square",gain:.18,delay:.06})}};function m(y,C,L){if(!(!i||i.state==="suspended")){var k=f[y];if(k){var Y=1/(1+(C||0)*.13);if(!(Y<.04))try{k(Y,L||0)}catch{}}}}var v=168,E=60/v/4,g=[164.81,164.81,146.83,130.81,123.47,130.81,146.83,155.56],d=null,x=0,U=0;function w(y,C,L){var k=i.createOscillator(),Y=i.createOscillator();k.type="sawtooth",Y.type="square",k.frequency.value=C,Y.frequency.value=C*.5;var $=i.createBiquadFilter();$.type="lowpass",$.frequency.setValueAtTime(L?1400:800,y),$.frequency.exponentialRampToValueAtTime(200,y+E*1.8);var re=i.createGain();re.gain.setValueAtTime(1e-4,y),re.gain.exponentialRampToValueAtTime(L?.5:.34,y+.005),re.gain.exponentialRampToValueAtTime(1e-4,y+E*(L?1.9:.9)),k.connect($),Y.connect($),$.connect(re),re.connect(n),k.start(y),k.stop(y+E*2),Y.start(y),Y.stop(y+E*2)}function I(y,C){if(C==="kick"){var L=i.createOscillator();L.type="sine",L.frequency.setValueAtTime(110,y),L.frequency.exponentialRampToValueAtTime(40,y+.1);var k=i.createGain();k.gain.setValueAtTime(.5,y),k.gain.exponentialRampToValueAtTime(.001,y+.12),L.connect(k),k.connect(n),L.start(y),L.stop(y+.13)}else{var Y=i.createBufferSource();Y.buffer=o(),Y.loop=!0;var $=i.createBiquadFilter();$.type="highpass",$.frequency.value=C==="snare"?1800:6e3;var re=i.createGain();re.gain.setValueAtTime(C==="snare"?.3:.12,y),re.gain.exponentialRampToValueAtTime(.001,y+(C==="snare"?.09:.03)),Y.connect($),$.connect(re),re.connect(n),Y.start(y),Y.stop(y+.1)}}function P(){if(!(!s||!i)){for(;x<i.currentTime+.15;){var y=U%16,C=Math.floor(U/16),L=y>>2,k=y&3,Y=82.41;k===0||k===2?w(x,Y,!1):k===3&&w(x,g[(C*4+L)%g.length],!0),(y===0||y===8)&&I(x,"kick"),(y===4||y===12)&&I(x,"snare"),(y&1)===0&&I(x,"hat"),x+=E,U++}d=setTimeout(P,40)}}function O(){!i||!r||s||(s=!0,x=i.currentTime+.05,U=0,P())}function b(){s=!1,d&&(clearTimeout(d),d=null)}function _(y){r=!!y;try{localStorage.setItem("firebird.music",r?"on":"off")}catch{}return r?O():b(),r}function T(){return _(!r)}function A(y){a=Math.max(0,Math.min(1,y))*.72,e&&(e.gain.value=a)}return{init:l,play:m,startMusic:O,stopMusic:b,toggleMusic:T,setMusic:_,setVolume:A,isMusicOn:function(){return r}}})();typeof uc!="undefined"&&(uc.exports=Vd)});var Ju=Es((ix,hc)=>{"use strict";var Gd=(function(){var i="firebird.settings.v1",e="firebird.progress.v1",t={sens:5,volume:7,crosshair:!0,tips:!0,shake:!0,goalMarker:!0,difficulty:1,seenTips:{}};function n(){try{return window.localStorage}catch{return null}}function r(f){var m=n();if(!m)return null;try{var v=JSON.parse(m.getItem(f));return v&&typeof v=="object"?v:null}catch{return null}}function s(f,m){var v=n();if(v)try{v.setItem(f,JSON.stringify(m))}catch{}}var a={},l=r(i)||{};for(var c in t){var u=c in l&&l[c]!==null&&typeof l[c]==typeof t[c];a[c]=u?l[c]:t[c]}a.sens=Math.max(1,Math.min(10,a.sens|0)),a.volume=Math.max(0,Math.min(10,a.volume|0)),a.difficulty=Math.max(0,Math.min(2,a.difficulty|0));var o=r(e)||{};typeof o.unlocked!="number"&&(o.unlocked=0),(!o.best||typeof o.best!="object")&&(o.best={});var p=["PAR","KILLS","ITEMS","SECRETS"];return{v:a,save:function(){s(i,a)},progress:o,unlock:function(f){f>o.unlocked&&(o.unlocked=f,s(e,o))},record:function(f,m){var v=o.best[f]||{time:null,medals:{}},E=[];m.time<=m.par&&E.push("PAR"),m.kills>=m.totalKills&&E.push("KILLS"),m.items>=m.totalItems&&E.push("ITEMS"),m.secrets>=m.totalSecrets&&E.push("SECRETS");var g=E.filter(function(x){return!v.medals[x]}),d=v.time===null||m.time<v.time;return d&&(v.time=Math.floor(m.time)),E.forEach(function(x){v.medals[x]=!0}),o.best[f]=v,s(e,o),{newBest:d,medals:E,fresh:g}},best:function(f){return o.best[f]||null},MEDALS:p}})(),Wd=(function(){var i=[],e=320,t=200;function n(){return i[i.length-1]||null}function r(_){return typeof _=="function"?_():_}function s(_){return r(_.items)||[]}function a(_){return _&&!(_.disabled&&_.disabled())}function l(_,T,A){for(var y=s(_),C=y.length,L=0;L<C;L++){var k=((T+L*A)%C+C)%C;if(a(y[k]))return k}return 0}function c(_){return{screen:_,sel:l(_,_.sel||0,1),hover:-1}}function u(_){i=[c(_)]}function o(_){i.push(c(_)),SND.play("menu")}function p(_){i[i.length-1]=c(_)}function f(){i=[]}function m(){return i.length>0}function v(){if(i.length>1)return i.pop(),SND.play("menu"),!0;var _=n();return _&&_.screen.onBack?(_.screen.onBack(),!0):!1}function E(_){var T=n(),A=s(T.screen).length;A&&(T.sel=l(T.screen,T.sel+_,_),SND.play("menu"))}function g(_,T){a(_)&&(_.adjust?(_.adjust(T||1),SND.play("menu")):_.action&&(SND.play("menuPick"),_.action()))}function d(_){var T=n();if(!T)return!1;var A=s(T.screen),y=A[T.sel];switch(_){case"ArrowUp":case"KeyW":return E(-1),!0;case"ArrowDown":case"KeyS":case"Tab":return E(1),!0;case"ArrowLeft":case"KeyA":return y&&y.adjust&&g(y,-1),!0;case"ArrowRight":case"KeyD":return y&&y.adjust&&g(y,1),!0;case"Enter":case"NumpadEnter":case"Space":return g(y,1),!0;case"Escape":case"Backspace":return v()}return!1}function x(_){var T=_.scale||1;return{s:T,top:_.top||60,gap:_.gap||(T===1?12:14),x0:_.x0||56,x1:_.x1||264,rowH:5*T+5}}function U(_,T,A){for(var y=x(_),C=s(_),L=0;L<C.length;L++){var k=y.top+L*y.gap-3;if(A>=k&&A<k+y.rowH+1&&T>=y.x0-8&&T<=y.x1+8)return L}return-1}function w(_,T){var A=n();if(!A)return!1;var y=U(A.screen,_,T);return A.hover=y,y>=0&&a(s(A.screen)[y])&&y!==A.sel&&(A.sel=y,SND.play("menu")),y>=0&&a(s(A.screen)[y])}function I(_,T){var A=n();if(A){var y=U(A.screen,_,T);if(!(y<0)){var C=s(A.screen)[y];if(a(C)){A.sel=y;var L=x(A.screen),k=C.adjust&&_<L.x1-44&&_>(L.x0+L.x1)/2?-1:1;g(C,k)}}}}function P(_,T){for(var A=String(_).split(" "),y=[],C="",L=0;L<A.length;L++){var k=C?C+" "+A[L]:A[L];k.length>T&&C?(y.push(C),C=A[L]):C=k}return C&&y.push(C),y}function O(_,T,A,y,C){for(var L=y.slider[0],k=y.slider[1],Y=y.slider[2](),$=k-L,re=4,q=1,j=$*(re+q)-q,J=T-j,ee=0;ee<$;ee++)_.fillStyle=ee<Y-L?C?"#ffd23e":"#e03828":"#2e2a24",_.fillRect(J+ee*(re+q),A,re,5);ART.drawText(_,String(Y),J-6,A,{color:C?"#ffd23e":"#8a8478",right:!0})}function b(_,T){var A=n();if(A){var y=A.screen,C=x(y),L=s(y);y.drawBg&&y.drawBg(_,T),y.title&&ART.drawText(_,r(y.title),e/2,y.titleY||14,{scale:3,color:"#ff9a28",shadow:"#401008",center:!0}),y.drawExtra&&y.drawExtra(_,T);for(var k=0;k<L.length;k++){var Y=L[k],$=C.top+k*C.gap,re=k===A.sel,q=a(Y),j=r(Y.label);re&&(_.fillStyle="rgba(255,110,24,0.16)",_.fillRect(C.x0-8,$-3,C.x1-C.x0+16,C.rowH),_.fillStyle="#ff7a18",_.fillRect(C.x0-8,$-3,2,C.rowH),T%.8<.55&&ART.drawText(_,">",C.x0-4,$+(C.s-1)*2,{color:"#ffd23e"}));var J=q?re?"#ffd23e":"#c8c0b0":"#4a463c",ee=Y.value||Y.slider;if(ee)if(ART.drawText(_,j,C.x0+4,$,{scale:C.s,color:J,shadow:q}),Y.slider)O(_,C.x1,$+(C.s-1)*2,Y,re);else{var he=r(Y.value);re&&Y.adjust&&(he="< "+he+" >"),ART.drawText(_,he,C.x1,$,{scale:C.s,color:re?"#ffd23e":"#e03828",right:!0})}else ART.drawText(_,j,y.alignLeft?C.x0+4:e/2,$,{scale:C.s,color:J,shadow:q,center:!y.alignLeft})}var _e=L[A.sel],Ue=_e&&a(_e)?r(_e.desc):null;if(Ue)for(var Oe=P(Ue,70),oe=y.descY||168,ue=0;ue<Oe.length;ue++)ART.drawText(_,Oe[ue],e/2,oe+ue*8,{color:"#a8a090",center:!0});var be=y.footer===void 0?"ARROWS OR MOUSE: CHOOSE   ENTER: SELECT   ESC: BACK":r(y.footer);be&&ART.drawText(_,be,e/2,y.footerY||180,{color:"#5e584e",center:!0})}}return{open:u,push:o,replace:p,close:f,back:v,isOpen:m,key:d,pointer:w,click:I,render:b,wrap:P,current:function(){var _=n();return _?_.screen:null},selected:function(){var _=n();return _?s(_.screen)[_.sel]:null},depth:function(){return i.length}}})();typeof hc!="undefined"&&(hc.exports={SETTINGS:Gd,MENU:Wd})});var $u=Es((rx,fc)=>{"use strict";var qd=(function(){var i="firebird.riley.v1",e=3;function t(){return{shots:{fist:0,pistol:0,shotgun:0},hits:0,fireDistSum:0,fireDistN:0,strafeL:0,strafeR:0,stillT:0,seenT:0,hideT:0,longestHide:0,said:{}}}function n(T,A){A.los?(T.seenT+=A.dt,T.hideT=0,A.strafe<0?T.strafeL+=A.dt:A.strafe>0&&(T.strafeR+=A.dt),A.moving||(T.stillT+=A.dt)):(T.hideT+=A.dt,T.hideT>T.longestHide&&(T.longestHide=T.hideT))}function r(T,A,y){T.shots[A]=(T.shots[A]||0)+1,T.fireDistSum+=y,T.fireDistN++}function s(T){return T.shots.fist+T.shots.pistol+T.shots.shotgun}function a(T){var A=null,y=0;for(var C in T.shots)T.shots[C]>y&&(y=T.shots[C],A=C);return y>=5?A:null}function l(T){return T.fireDistN?T.fireDistSum/T.fireDistN:0}function c(T){return T.fireDistN<5?0:m((5-l(T))/3)}function u(T){return T.fireDistN<5?0:m((l(T)-6)/4)}function o(T){return T.seenT<4?0:m((T.stillT/T.seenT-.35)/.4)}function p(T){return T.strafeR>=T.strafeL?1:-1}function f(T){var A=T.strafeL+T.strafeR;return A<3?0:m((Math.max(T.strafeL,T.strafeR)/A-.55)/.3)}function m(T){return T<0?0:T>1?1:T}function v(T){var A=[];return T.los?(T.cool.volley<=0&&A.push("volley"),T.cool.lead<=0&&A.push("lead"),T.dist<6&&A.push("backoff"),T.dist>3&&A.push("close"),A.push("flank")):A.push("seek"),T.phase>=2&&T.impsAlive<2&&T.cool.summon<=0&&A.push("summon"),T.phase>=2&&T.los&&T.dist<7&&T.cool.shield<=0&&A.push("shield"),A}function E(T,A,y){var C=0,L=null;switch(T){case"volley":C=1+(y.phase>=3?.4:0);break;case"lead":C=.35+f(A)*1.6,f(A)>.4&&(L="strafe");break;case"backoff":C=.2+c(A)*1.6+(y.playerWeapon==="shotgun"&&y.dist<4?.8:0),c(A)>.4&&(L="rusher");break;case"close":C=.3+u(A)*1.3+o(A)*1.2,o(A)>.4?L="camper":u(A)>.4&&(L="sniper");break;case"flank":C=.45+(y.phase>=2?.35:0)+f(A)*.4;break;case"seek":C=1,A.hideT>3&&(L="hider");break;case"summon":C=.9;break;case"shield":C=y.playerWeapon==="shotgun"?1.4:.25,y.playerWeapon==="shotgun"&&A.shots.shotgun>=6&&(L="shotgun");break}return{move:T,score:C,why:L}}function g(T,A,y,C){if(C=C||Math.random,!T.length)return null;var L=T.map(function(re){return E(re,A,y)}),k=0;L.forEach(function(re){re.w=re.score*re.score,k+=re.w});for(var Y=C()*k,$=0;$<L.length;$++)if(Y-=L[$].w,Y<=0)return L[$];return L[L.length-1]}var d={fist:"FISTS",pistol:"PISTOL",shotgun:"SHOTGUN"};function x(T,A){if(!A||T.said[A])return null;var y=null;switch(A){case"strafe":y="YOU ALWAYS DODGE "+(p(T)<0?"LEFT":"RIGHT")+". I'M AIMING THERE NOW.";break;case"rusher":y="YOU LIKE IT UP CLOSE. I'LL KEEP MY DISTANCE.";break;case"sniper":y="YOU KEEP YOUR DISTANCE. SO I'M COMING TO YOU.";break;case"camper":y="YOU STAND STILL A LOT. THAT MAKES YOU EASY TO FIND.";break;case"hider":y="HIDING? I CAN FIND YOU. I KNOW THIS ARENA.";break;case"shotgun":y=T.shots.shotgun+" SHOTGUN BLASTS SO FAR. SHIELD UP!";break}return y&&(T.said[A]=!0),y}function U(T,A,y){switch(y=y||{},T){case"intro":return y.memory&&y.memory.lastStyle?"BACK AGAIN! LAST TIME "+y.memory.lastStyle+".":y.memory?"BACK AGAIN! ROUND "+(y.memory.fights+1)+". LET'S GO!":"HI! I'M RILEY. I LEARN HOW YOU PLAY. READY?";case"ease":return"I'M GOING A LITTLE EASIER THIS TIME. JUST A LITTLE.";case"studied":return"YOU BEAT ME "+y.wins+(y.wins===1?" TIME":" TIMES")+". I'VE BEEN PRACTISING.";case"phase2":return"OKAY. I'VE BEEN WATCHING YOU. MY TURN.";case"phase3":return"ALRIGHT, NO MORE HOLDING BACK!";case"summon":return"LITTLE HELP, FRIENDS?";case"friendlyFire":return"HEY! WATCH WHERE YOU THROW THOSE.";case"impsTurned":return"YOU GOT MY IMPS FIGHTING ME? SMART.";case"playerDied":{var C=w(A);return"GOOD FIGHT! YOU HIT ME "+A.hits+(A.hits===1?" TIME":" TIMES")+(C!==null?", "+C+"% ACCURACY":"")+". AGAIN?"}case"defeated":{var L=a(A);return"OKAY, YOU WIN! "+A.hits+" HITS"+(L?" WITH MOSTLY THE "+d[L]:"")+". NICE."}}return null}function w(T){var A=s(T);return A<5?null:Math.min(100,Math.round(T.hits/A*100))}function I(T){var A=a(T);return c(T)>.5&&A?"YOU RUSHED ME WITH THE "+d[A]:u(T)>.5?"YOU FOUGHT ME FROM FAR AWAY":T.longestHide>6?"YOU HID FOR "+Math.round(T.longestHide)+" SECONDS":f(T)>.5?"YOU KEPT DODGING "+(p(T)<0?"LEFT":"RIGHT"):A?"YOU USED THE "+d[A]+" THE MOST":null}function P(T){var A={fights:0,wins:0,lossStreak:0,ease:0,lastStyle:null};try{var y=T&&T.getItem(i);if(y){var C=JSON.parse(y);for(var L in A)C[L]!==void 0&&(A[L]=C[L])}}catch{}return A.ease=Math.max(0,Math.min(e,A.ease|0)),A}function O(T,A){try{T&&T.setItem(i,JSON.stringify(A))}catch{}}function b(T,A,y){return T.fights++,T.lastStyle=I(A),y?(T.wins++,T.lossStreak=0,T.ease=0):(T.lossStreak++,T.ease=Math.min(e,T.lossStreak)),T}function _(T){var A=T.ease,y=T.wins>0&&A===0;return{hpScale:1-.08*A,dmgScale:1-.1*A,coolScale:(1+.12*A)*(y?.9:1),practised:y}}return{MAX_EASE:e,newProfile:t,observe:n,noteShot:r,favWeapon:a,rusher:c,sniper:u,camper:o,strafeSide:p,strafeHabit:f,accuracy:w,legalMoves:v,scoreMove:E,choose:g,insight:x,line:U,describeStyle:I,recall:P,save:O,settle:b,tuning:_}})();typeof fc!="undefined"&&(fc.exports=qd)});var oh=Es((lx,mc)=>{"use strict";var Cs=[{name:"E1M1: ASH GATES",floor:"slab",ceil:"ceilDark",par:75,playerAngle:0,map:["#######################X######","####################..t.t....#","####################.........#","####################..i..+...#","####################....A....#","####################.........#","#######################U######","##....................t.t...##","##.t......%%......%%........##","##u...g......i..............##","##.t.......h.....g..........##","##..........................##","####################D#########","###*Pa#########....t.t......##","####S##########.....i.....o.##","##b......######..........io.##","##.......######......h......##","##..p....D........2.........##","##.......######..o..........##","##.......######.t.........t.##","##...h...#####################","##############################"]},{name:"E1M2: THE FURNACE",floor:"tech",ceil:"ceilTech",par:120,playerAngle:-Math.PI/2,map:["###############X################","############..t.t...#...########","############g.......#*PA########","############...+...g#...########","###############R######S#########","########......t.t.......########","########................########","########......b.........########","#......#.i.T........T...#o....o#","#......D................#......#","#..i...#................D..o...#","#......#....g...........#....i.#","#t.t.g.#...T........T...#.o..o.#","#r.a...#...i............#..g...#","########................#.a..h.#","###############..###############","############.b....h.############","############...p....############","############........############","############t......t############","################################"]},{name:"E1M3: DEMON THRONE",floor:"hell",ceil:"ceilHell",par:150,playerAngle:-Math.PI/2,map:["HHHHHHHHHHHHHHHXHHHHHHHHHHHHHHHH","HHHHHHHHHHHHH.t.t..HHHHHHHHHHHHH","HHHHHHHHHHHHH..+...HHHHHHHHHHHHH","HHHHHHHHHHHHHHHRHHHHHHHHHHHHHHHH","HHHHHHt.......t.t........tHHHHHH","HHHHHH.i................i.HHHHHH","HHHHHH..o..............o.tH....H","HH...H....................D..g.H","HH*PAS.........K.........tH.r..H","HH...H....g.........g.....H....H","HHHHHH.a................b.HHHHHH","HHHHHH...i..........i.....HHHHHH","HHHHHHt..................tHHHHHH","HHHHHH...a..h......+..b...HHHHHH","HHHHHH....................HHHHHH","HHHHHHHHHHHHHHHDHHHHHHHHHHHHHHHH","HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH","HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH","HHHHHHHHHHHHHi...iHHHHHHHHHHHHHH","HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH","HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH","HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH","HHHHHHHHHHHt........tHHHHHHHHHHH","HHHHHHHHHHH...b..a...HHHHHHHHHHH","HHHHHHHHHHH....p.....HHHHHHHHHHH","HHHHHHHHHHH..........HHHHHHHHHHH","HHHHHHHHHHHt........tHHHHHHHHHHH","HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH"]},{name:"E1M4: RILEY'S ARENA",floor:"tech",ceil:"ceilTech",par:240,playerAngle:-Math.PI/2,map:["MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMt........................tMMM","MMM..h..........Y.........h..MMM","MMM..........................MMM","MMM....TT..............TT....MMM","MMM....TT....o....o....TT....MMM","MMM..........................MMM","MMM.a......................a.MMM","MMM....TT..............TT....MMM","MMM....TT.......+......TT....MMM","MMM..........................MMM","MMMt.......o........o.......tMMM","MMMMMMMMMMMMMMMUMMMMMMMMMMMMMMMM","TTTTTTTTTTTTTT...TTTTTTTTTTTTTTT","TTTTTTTTTTTTTTt.tTTTTTTTTTTTTTTT","TTi.....o.......o.....iTTTTTTTTT","TT.....................T..g...TT","TT...g.............g..tTt....tTT","TT.......MM...MM.......D....u.TT","TT..b....MM.h.MM....a.tT.a..h.TT","TT.....................Tt....tTT","TT.................o...T..i...TT","TT.....................TTTTTTTTT","TTTTTTTTTTTTTTTDTTTTTTTTTTTTTTTT","TTTTTTTTTTt.........tTTTTTTTTTTT","TTTTTTTTTT..b..2..a..TTTTTTTTTTT","TTTTTTPA*S...........TTTTTTTTTTT","TTTTTTTTTT.....p.....TTTTTTTTTTT","TTTTTTTTTTt...h.....tTTTTTTTTTTT","TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT"]}];(function(){for(var i=0;i<Cs.length;i++){for(var e=Cs[i].map,t=e[0].length,n=0,r=0;r<e.length;r++){if(e[r].length!==t)throw new Error(Cs[i].name+" row "+r+" width "+e[r].length+" != "+t);for(var s=0;s<t;s++)e[r][s]==="p"&&n++}if(n!==1)throw new Error(Cs[i].name+" has "+n+" player starts")}})();typeof mc!="undefined"&&(mc.exports=Cs)});var Ce=ws(Ku(),1),hn=ws(Zu(),1);window.ART=Ce.default;window.SND=hn.default;var Gu=ws(Ju(),1);var qt=ws($u(),1);var Xd={"#":1,"%":2,M:3,T:4,H:5,D:6,R:7,U:8,X:9,S:11},$n={6:!0,7:!0,8:!0,11:!0},ju=.25,Yd=2,Ln=.3,dc=.55;function Qu(i){return i>="0"&&i<="9"?(i.charCodeAt(0)-48)*ju:i>="a"&&i<="z"?(i.charCodeAt(0)-87)*ju:0}function eh(i){for(var e=i.map,t=e[0].length,n=e.length,r={mw:t,mh:n,cells:new Uint8Array(t*n),floor:new Float32Array(t*n),ceil:new Float32Array(t*n),doors:{},lifts:[]},s=i.ceilHeight||Yd,a=0;a<n;a++)for(var l=0;l<t;l++){var c=e[a][l],u=a*t+l,o=Xd[c]||0;r.cells[u]=o,r.floor[u]=i.heights?Qu(i.heights[a][l]):0,r.ceil[u]=i.ceilings&&i.ceilings[a][l]!=="."?Qu(i.ceilings[a][l]):s,r.ceil[u]<r.floor[u]+1&&(r.ceil[u]=r.floor[u]+1),$n[o]&&(r.doors[l+","+a]={x:l,z:a,open:0,state:"closed",timer:0,locked:o===7?"red":o===8?"blue":null,secret:o===11,found:!1,used:!1}),c==="L"&&r.lifts.push({x:l,z:a,top:r.floor[u],bottom:0,pos:0,state:"down",wait:0})}for(var p in r.doors){var f=r.doors[p],m=1/0,v=0;As(r,f.x,f.z).forEach(function(g){r.cells[g.i]===0&&(m=Math.min(m,r.floor[g.i]),v=Math.max(v,r.ceil[g.i]))});var E=f.z*t+f.x;r.floor[E]=m===1/0?0:m,r.ceil[E]=f.secret?v||s:Math.min(v||s,r.floor[E]+1.5)}return r.lifts.forEach(function(g){var d=1/0;As(r,g.x,g.z).forEach(function(U){var w=r.cells[U.i]===0||$n[r.cells[U.i]];w&&!Kd(r,U.x,U.z)&&(d=Math.min(d,r.floor[U.i]))}),g.bottom=d===1/0?0:Math.min(d,g.top),g.pos=g.bottom;var x=g.z*t+g.x;r.floor[x]=g.pos,r.ceil[x]=Math.max(r.ceil[x],g.top+1.2)}),r}function Kd(i,e,t){for(var n=0;n<i.lifts.length;n++)if(i.lifts[n].x===e&&i.lifts[n].z===t)return!0;return!1}function As(i,e,t){var n=[];return[[1,0],[-1,0],[0,1],[0,-1]].forEach(function(r){var s=e+r[0],a=t+r[1];s>=0&&a>=0&&s<i.mw&&a<i.mh&&n.push({x:s,z:a,i:a*i.mw+s})}),n}function Vn(i,e,t){return e<0||t<0||e>=i.mw||t>=i.mh?1:i.cells[t*i.mw+e]}function Wi(i,e,t){return i.doors[e+","+t]||null}function qi(i,e,t){var n=Vn(i,e,t);if(n===0)return!1;if($n[n]){var r=Wi(i,e,t);return!r||r.open<.9}return!0}function nn(i,e,t){return i.floor[t*i.mw+e]}function fi(i,e,t){return i.ceil[t*i.mw+e]}function mr(i,e,t,n,r,s,a){for(var l=Math.floor(e-n),c=Math.floor(e+n),u=Math.floor(t-n),o=Math.floor(t+n),p=-1/0,f=1/0,m=u;m<=o;m++)for(var v=l;v<=c;v++){if(qi(i,v,m))return{blocked:!0};var E=nn(i,v,m),g=fi(i,v,m);if(E>r+a+1e-4)return{blocked:!0};p=Math.max(p,E),f=Math.min(f,g)}return f<Math.max(r,p)+s-1e-4?{blocked:!0}:{blocked:!1,ground:p,ceil:f}}function gr(i,e,t,n,r,s,a){var l=!0;return t!==0&&(mr(i,e.x+t,e.z,r,e.y,s,a).blocked?l=!1:e.x+=t),n!==0&&(mr(i,e.x,e.z+n,r,e.y,s,a).blocked?l=!1:e.z+=n),l}function Ga(i,e,t,n){for(var r=Math.floor(e-n),s=Math.floor(e+n),a=Math.floor(t-n),l=Math.floor(t+n),c=-1/0,u=a;u<=l;u++)for(var o=r;o<=s;o++)qi(i,o,u)||(c=Math.max(c,nn(i,o,u)));return c===-1/0?0:c}function Wa(i,e,t,n,r,s,a,l){for(var c=Math.sqrt(r*r+a*a),u=Math.floor(e),o=Math.floor(n),p=c>1e-9?Math.abs(1/r):1e30,f=c>1e-9?Math.abs(1/a):1e30,m=r<0?-1:1,v=a<0?-1:1,E=r<0?(e-u)*p:(u+1-e)*p,g=a<0?(n-o)*f:(o+1-n)*f,d=0,x=0;x<256;x++){var U=Math.min(E,g,l),w=nn(i,u,o),I=fi(i,u,o);if(s<0){var P=(w-t)/s;if(P>=d-1e-6&&P<=U)return _(P,"floor")}else if(s>0){var O=(I-t)/s;if(O>=d-1e-6&&O<=U)return _(O,"ceil")}if(U>=l)return _(l,"none");if(d=U,E<g?(E+=p,u+=m):(g+=f,o+=v),u<0||o<0||u>=i.mw||o>=i.mh)return _(d,"wall");var b=t+s*d;if(qi(i,u,o)||b<nn(i,u,o)||b>fi(i,u,o))return _(d,"wall")}return _(l,"none");function _(T,A){return{dist:T,x:e+r*T,y:t+s*T,z:n+a*T,kind:A,cx:u,cz:o}}}function Xi(i,e,t,n,r,s,a){var l=r-e,c=s-t,u=a-n,o=Math.sqrt(l*l+c*c+u*u);return o<.001?!0:Wa(i,e,t,n,l/o,c/o,u/o,o).dist>=o-.05}var Ur=null;function pc(i,e,t,n,r,s){var a=i.mw,l=a*i.mh;(!Ur||Ur.length<l)&&(Ur=new Int32Array(l)),s.fill(-1);var c=Math.floor(e),u=Math.floor(t);if(!(c<0||u<0||c>=a||u>=i.mh)){var o=0,p=0;for(s[u*a+c]=0,Ur[p++]=u*a+c;o<p;){var f=Ur[o++],m=s[f];if(!(m>=n))for(var v=f%a,E=f/a|0,g=0;g<4;g++){var d=v+(g===0?1:g===1?-1:0),x=E+(g===2?1:g===3?-1:0);if(!(d<0||x<0||d>=a||x>=i.mh)){var U=x*a+d;s[U]!==-1||!r(f,d,x)||(s[U]=m+1,Ur[p++]=U)}}}}}function th(i,e,t,n){for(var r=0;r<i.lifts.length;r++){var s=i.lifts[r],a=t(s.x,s.z),l=s.pos;s.state==="down"&&a?(s.state="wait",s.wait=.5):s.state==="wait"?(s.wait-=e,s.wait<=0&&(s.state="up",n&&n(s,"start"))):s.state==="up"?(s.pos=Math.min(s.top,s.pos+e*.9),s.pos>=s.top&&(s.state="top",s.wait=2.5,n&&n(s,"stop"))):s.state==="top"?a?s.wait=2.5:(s.wait-=e)<=0&&(s.state="lower",n&&n(s,"start")):s.state==="lower"&&(a&&s.pos>s.bottom+.05?s.state="up":(s.pos=Math.max(s.bottom,s.pos-e*.9),s.pos<=s.bottom&&(s.state="down",n&&n(s,"stop")))),i.floor[s.z*i.mw+s.x]=s.pos,s.moved=s.pos-l}}var $t={r:.28,h:.9,hCrouch:.55,eye:.8,eyeCrouch:.45,walk:3.2,run:5,jumpV:3.9,gravity:14},Rs={fist:{ammo:null,rate:.5,melee:!0,dmgMin:8,dmgMax:24,knock:.12},pistol:{ammo:"bullets",rate:.42,pellets:1,spread:.025,dmgMin:5,dmgMax:15,knock:.03,shake:.6},shotgun:{ammo:"shells",rate:.95,pellets:7,spread:.1,dmgMin:5,dmgMax:15,knock:.045,shake:2.2}},Ai=["fist","pistol","shotgun"],nh={bullets:"BULLETS",shells:"SHELLS"},Or={imp:{hp:40,speed:1.7,radius:.35,painChance:.75,ranged:!0,melee:!1,h:.85,attackDmg:[8,20]},gnasher:{hp:110,speed:2.9,radius:.42,painChance:.5,ranged:!1,melee:!0,h:.7,attackDmg:[4,16],fleeBelow:.4},knight:{hp:400,speed:1.9,radius:.48,painChance:.2,ranged:!0,melee:!0,h:1.3,attackDmg:[10,26]},riley:{hp:900,speed:2.4,radius:.4,painChance:.12,ranged:!0,melee:!0,h:.95,attackDmg:[10,20],boss:!0}},ih={i:"imp",g:"gnasher",K:"knight",Y:"riley"},rh={h:{msg:"PICKED UP A STIMPACK.",snd:"health"},"+":{msg:"PICKED UP A MEDIKIT.",snd:"health"},b:{msg:"PICKED UP A CLIP.",snd:"pickup"},a:{msg:"PICKED UP A BOX OF SHELLS.",snd:"pickup"},A:{msg:"PICKED UP THE ARMOR!",snd:"pickup"},2:{msg:"YOU GOT THE SHOTGUN!",snd:"weaponUp"},r:{msg:"PICKED UP THE RED KEYCARD.",snd:"keyPickup"},u:{msg:"PICKED UP THE BLUE KEYCARD.",snd:"keyPickup"},P:{msg:"PHOENIX ORB! YOU FEEL REBORN!",snd:"orb"}},vr=[{name:"ROOKIE",dmg:.5,ammo:2,desc:"DEMONS HIT HALF AS HARD AND AMMO IS DOUBLED. GREAT FOR A FIRST RUN."},{name:"WARRIOR",dmg:1,ammo:1,desc:"THE FIGHT AS IT WAS MEANT TO BE."},{name:"INFERNO",dmg:1.5,ammo:1,desc:"DEMONS HIT HARDER. FOR VETERANS WHO KNOW EVERY CORNER."}],sh={run:"TIP: HOLD SHIFT TO RUN.",jump:"TIP: SPACE JUMPS. C CROUCHES. LOOK UP AND DOWN WITH THE MOUSE.",map:"TIP: LOST? PRESS TAB FOR THE MAP.",weapons:"TIP: PRESS 1 2 3, OR SCROLL THE MOUSE WHEEL, TO SWITCH WEAPONS. Q SWAPS BACK.",key:"TIP: THE MATCHING DOOR IS MARKED IN COLOR ON YOUR MAP (TAB).",lowAmmo:"TIP: LOW ON AMMO? YOUR FIST (1) NEVER RUNS OUT, AND IT IS SILENT.",lowHealth:"TIP: LOW HEALTH! BACK OFF AND LOOK FOR STIMPACKS AND MEDIKITS.",hurtDir:"TIP: THE RED MARKS AROUND YOUR AIM POINT AT WHATEVER HIT YOU.",secret:"TIP: WALLS WITH A CRACK MAY HIDE SECRETS. PRESS E ON THEM.",torches:"TIP: A PAIR OF TORCHES BESIDE A DOOR MEANS IT MATTERS. FOLLOW THEM.",lift:"TIP: STAND ON A GLOWING PLATFORM TO RIDE IT UP.",barrel:"TIP: A DEMON IS NEXT TO A BARREL. SHOOT THE BARREL!",meet_imp:"TIP: IMPS THROW FIREBALLS. STRAFE WITH A AND D TO DODGE.",meet_gnasher:"TIP: GNASHERS CHARGE AND BITE. BACK AWAY WHILE YOU SHOOT.",meet_knight:"TIP: THE EMBER KNIGHT IS TOUGH. KEEP YOUR DISTANCE AND USE SHELLS."};function ah(i){i=i||{};var e=i.levels,t=i.rng||Math.random,n=i.storage||null,r=i.settings||{difficulty:1,tips:!1,seenTips:{}},s=i.onProgress||function(){},a={},l=!1,c="title",u=0,o=null,p=null;function f(){return t()}function m(h,S){return h+t()*(S-h)}function v(h,S,B){return h<S?S:h>B?B:h}function E(h,S,B,se){var Q=h-B,ae=S-se;return Q*Q+ae*ae}function g(){return vr[r.difficulty]||vr[1]}function d(h,S,B,se,Q,ae){var pe={t:h,name:S,x:B,y:se,z:Q};if(ae)for(var xe in ae)pe[xe]=ae[xe];o.events.push(pe)}function x(h,S){S?d("sound",h,S.x,(S.y||0)+.5,S.z):d("sound",h,o.p.x,o.p.y+.8,o.p.z,{local:!0})}function U(h,S,B,se){var Q=Or[h];return{kind:h,mob:!0,x:S,z:B,y:se,hp:Q.hp,radius:Q.radius,speed:Q.speed,h:Q.h,state:"idle",st:0,animT:f(),cool:m(.5,1.5),moveAng:0,retarget:0,losT:f()*.3,los:!1,target:null,lostT:0,fleeNext:!1,strafeSide:f()<.5?1:-1,flashT:0}}function w(h){var S=h.map.join("");return{boss:S.indexOf("Y")>=0,keys:{red:S.indexOf("R")>=0||S.indexOf("r")>=0,blue:S.indexOf("U")>=0||S.indexOf("u")>=0}}}function I(h){return{hp:Math.max(h.hp,1),armor:h.armor,ammo:{bullets:h.ammo.bullets,shells:h.ammo.shells},shotgun:h.weapons.shotgun,weapon:h.weapon}}function P(h,S,B){u=h;var se=e[h],Q=eh(se),ae=se.map,pe=B||(S&&o?I(o.p):null),xe={x:0,z:0,y:0,ang:se.playerAngle||0,pitch:0,vx:0,vz:0,vy:0,onGround:!0,crouch:!1,eyeH:$t.eye,hp:pe?pe.hp:100,armor:pe?pe.armor:0,ammo:pe?{bullets:pe.ammo.bullets,shells:pe.ammo.shells}:{bullets:50,shells:0},weapons:{fist:!0,pistol:!0,shotgun:pe?pe.shotgun:!1},keys:{red:!1,blue:!1},weapon:pe&&pe.shotgun?pe.weapon:"pistol",nextWeapon:null,prevWeapon:null,raiseT:.3,lowerT:0,cool:0,fireT:1,dead:!1,deadT:0,painT:0,grinT:0,dmgFlash:0,bonusFlash:0,jumpHeld:!1,landT:0};L(xe,xe.weapon)||(xe.weapon=k(xe));for(var Ie=[],ze=[],je=null,at=0;at<ae.length;at++)for(var Bt=0;Bt<ae[0].length;Bt++){var Mt=ae[at][Bt],Zt=Bt+.5,zt=at+.5,St=nn(Q,Bt,at);if(Mt==="p")xe.x=Zt,xe.z=zt,xe.y=St;else if(ih[Mt]){var Wt=U(ih[Mt],Zt,zt,St);Wt.kind==="riley"&&st(Wt),Ie.push(Wt)}else Mt==="o"?Ie.push({kind:"barrel",mob:!0,barrel:!0,x:Zt,z:zt,y:St,hp:15,radius:.3,h:.55,state:"idle",st:0}):Mt==="t"?Ie.push({kind:"torch",x:Zt,z:zt,y:St,h:.95,animT:f()}):rh[Mt]?Ie.push({kind:"pickup",item:Mt,x:Zt,z:zt,y:St,h:.3,bob:f()*6}):Mt==="*"&&ze.push({x:Bt,z:at,found:!1});Mt==="X"&&(je={x:Bt,z:at})}var Ut=0,Ot=0;return Ie.forEach(function(ot){ot.mob&&!ot.barrel&&Ut++,ot.kind==="pickup"&&Ot++}),o={L:se,W:Q,mw:Q.mw,mh:Q.mh,doors:Q.doors,ents:Ie,p:xe,secrets:ze,seen:new Uint8Array(Q.mw*Q.mh),msgs:[],events:[],time:0,notice:null,stats:{kills:0,totalKills:Ut,items:0,totalItems:Ot,secrets:0,totalSecrets:ze.length},exitT:-1,flow:new Int16Array(Q.mw*Q.mh),flowT:0,infightSeen:!1,boss:null,shotId:0,firing:!1,input:{strafe:0,moving:!1,vx:0,vz:0},startGear:pe,info:w(se),exitCell:je,hurtDirs:[],hitT:0,killT:0,blockT:0,shake:0,hitstop:0,killer:null,tipQueue:[],tipT:3,usedMap:!1,ranT:0,jumped:!1,spotT:0,started:!0},Ie.forEach(function(ot){ot.kind==="riley"&&(o.boss=ot)}),c="game",b(se.name),_(C(),"#f0d848",3.5),o}function O(){var h=o.startGear;h&&(h={hp:Math.max(h.hp,100),armor:h.armor,ammo:{bullets:Math.max(h.ammo.bullets,50),shells:h.shotgun?Math.max(h.ammo.shells,8):h.ammo.shells},shotgun:h.shotgun,weapon:h.weapon}),P(u,!1,h)}function b(h,S,B){o.msgs.push({text:h,t:B||3,color:S}),o.msgs.length>4&&o.msgs.shift()}function _(h,S,B){o.notice={text:h,color:S||"#f0d848",t:B||2.5,max:B||2.5}}function T(h){o&&(o.shake=Math.min(6,Math.max(o.shake,h)))}function A(h){!o||!r.tips||r.seenTips&&r.seenTips[h]||o.tipQueue.indexOf(h)<0&&o.tipQueue.push(h)}function y(h){if(o.tipT-=h,!(o.tipT>0||!o.tipQueue.length)){var S=o.tipQueue.shift();r.seenTips[S]||(r.seenTips[S]=!0,i.saveSettings&&i.saveSettings(),b(sh[S],"#8fe0a0",6),o.tipT=7)}}function C(){if(!o)return"";var h=o.info,S=o.p;return h.keys.blue&&!S.keys.blue?"FIND THE BLUE KEYCARD":h.keys.red&&!S.keys.red?"FIND THE RED KEYCARD":h.boss?"DEFEAT RILEY":"FIND THE EXIT SWITCH"}function L(h,S){var B=Rs[S];return!B.ammo||h.ammo[B.ammo]>0}function k(h){for(var S=Ai.length-1;S>=0;S--){var B=Ai[S];if(h.weapons[B]&&L(h,B))return B}return"fist"}function Y(h,S){if(c!=="game"||!o||o.p.dead)return!1;var B=o.p;return B.weapons[h]?L(B,h)?h===B.weapon?(B.nextWeapon&&!(B.lowerT>0)&&(B.nextWeapon=null),!1):h===B.nextWeapon?!1:(B.prevWeapon=B.weapon,B.nextWeapon=h,B.autoFist=!1,!0):(S||(b("NO "+nh[Rs[h].ammo]+" FOR THE "+h.toUpperCase()+"."),x("noAmmo")),!1):(S||b("YOU HAVEN'T FOUND THE "+h.toUpperCase()+" YET."),!1)}function $(h){for(var S=o.p,B=Ai.indexOf(S.nextWeapon||S.weapon),se=1;se<Ai.length;se++){var Q=Ai[(B+h*se+Ai.length*2)%Ai.length];if(S.weapons[Q]&&L(S,Q)){Y(Q,!0);return}}}function re(){var h=o.p;h.prevWeapon&&h.prevWeapon!==h.weapon&&h.weapons[h.prevWeapon]&&L(h,h.prevWeapon)?Y(h.prevWeapon,!0):$(-1)}function q(){return o.p.y+o.p.eyeH}function j(h,S){return Math.sqrt(E(h,S,o.p.x,o.p.z))}function J(h,S,B,se,Q,ae){for(var pe=o.p,xe=Math.cos(S),Ie=Math.cos(h)*xe,ze=Math.sin(h)*xe,je=Math.sin(S),at=pe.x,Bt=q(),Mt=pe.z,Zt=Q?1.4:40,zt=Wa(o.W,at,Bt,Mt,Ie,je,ze,Zt),St=null,Wt=zt.dist+.05,Ut=0;Ut<o.ents.length;Ut++){var Ot=o.ents[Ut];if(!(!Ot.mob||Ot.state==="die"||Ot.state==="dead"||Ot.gone)){var ot=ee(at,Bt,Mt,Ie,je,ze,Ot);ot!==null&&ot>.1&&ot<Wt&&(St=Ot,Wt=ot)}}var kn=B+f()*(se-B)|0;if(St){if(_e(St,kn),!St.barrel){St.kind==="riley"&&St.shieldT>0?o.blockT=.2:St.state==="die"?(o.killT=.3,o.hitstop=Math.max(o.hitstop,.045)):o.hitT=Math.max(o.hitT,.14);var Ei=Or[St.kind];if(ae&&!Ei.boss){var wn=ae*(Ei.hp>200?.25:1);gr(o.W,St,Math.cos(h)*wn,Math.sin(h)*wn,St.radius,St.h,Ln)}}d("fx",St.barrel||St.kind==="riley"?"spark":"blood",at+Ie*Wt,Bt+je*Wt,Mt+ze*Wt,{dx:-Ie,dy:-je,dz:-ze})}else!Q&&zt.kind!=="none"?d("fx","puff",zt.x-Ie*.03,zt.y-je*.03,zt.z-ze*.03,{surface:zt.kind}):Q&&x("whiff");return St}function ee(h,S,B,se,Q,ae,pe){var xe=pe.radius+.06,Ie=h-pe.x,ze=B-pe.z,je=se*se+ae*ae,at=2*(Ie*se+ze*ae),Bt=Ie*Ie+ze*ze-xe*xe;if(je<1e-9)return null;var Mt=at*at-4*je*Bt;if(Mt<0)return null;var Zt=Math.sqrt(Mt),zt=(-at-Zt)/(2*je),St=(-at+Zt)/(2*je),Wt=zt>0?zt:St;if(Wt<0)return null;var Ut=S+Q*Wt;if(Ut>=pe.y&&Ut<=pe.y+pe.h)return Wt;if(Math.abs(Q)>1e-6){var Ot=((Q<0?pe.y+pe.h:pe.y)-S)/Q;if(Ot>0){var ot=h+se*Ot-pe.x,kn=B+ae*Ot-pe.z;if(ot*ot+kn*kn<=xe*xe)return Ot}}return null}function he(h){return!!h&&!h.gone&&h.state!=="die"&&h.state!=="dead"}function _e(h,S,B){if(!(h.state==="die"||h.state==="dead")&&!(h.kind==="riley"&&ce(h,B))){if(h.hp-=S,h.flashT=.07,h.barrel){h.blame=he(B)?B:null,h.hp<=0&&h.state!=="boom"&&(h.state="boom",h.st=.08);return}var se=Or[h.kind];Te(h),se.boss||(B&&B!==h&&he(B)&&!B.barrel?(h.target!==B&&!o.infightSeen&&j(h.x,h.z)<14&&(o.infightSeen=!0,b("THE DEMONS TURN ON EACH OTHER!")),h.target=B,h.lostT=0):B||(h.target=null)),h.hp<=0?(h.state="die",h.st=0,o.stats.kills++,se.boss||x("enemyDie",h),d("fx","gib",h.x,h.y+h.h*.6,h.z,{kind:h.kind})):f()<se.painChance&&!(se.boss&&h.state==="windup")&&(h.state="pain",h.st=se.boss?.25:.35,se.fleeBelow&&h.hp<se.hp*se.fleeBelow&&(h.fleeNext=!0),x("enemyPain",h)),h.kind==="riley"&&ge(h)}}function Ue(h){h.state="dead",h.dead=!0,h.gone=!0,x("barrelBoom",h),d("fx","explosion",h.x,h.y+.3,h.z);for(var S=2.3,B=he(h.blame)?h.blame:null,se=0;se<o.ents.length;se++){var Q=o.ents[se];if(!(!Q.mob||Q===h||Q.state==="dead"||Q.state==="die")){var ae=Math.sqrt(E(Q.x,Q.z,h.x,h.z)+Math.pow(Q.y-h.y,2));ae<S&&Xi(o.W,h.x,h.y+.3,h.z,Q.x,Q.y+Q.h/2,Q.z)&&(Q.barrel?Q.state!=="boom"&&(Q.state="boom",Q.st=m(.1,.25),Q.blame=B):_e(Q,(S-ae)/S*90|0,B))}}Ge(h.x,h.z,10);var pe=Math.sqrt(E(o.p.x,o.p.z,h.x,h.z)+Math.pow(o.p.y-h.y,2));T(6/(1+pe*.35)),pe<S&&Xi(o.W,h.x,h.y+.3,h.z,o.p.x,q(),o.p.z)&&Oe((S-pe)/S*70|0,h)}function Oe(h,S){var B=o.p;if(!(B.dead||h<=0||o.exitT>=0)){if(h=Math.max(1,Math.round(h*g().dmg)),S){var se=Math.atan2(S.z-B.z,S.x-B.x);o.hurtDirs.push({ang:se,t:1}),o.hurtDirs.length>6&&o.hurtDirs.shift();var Q=Math.atan2(Math.sin(se-B.ang),Math.cos(se-B.ang));Math.abs(Q)>.9&&A("hurtDir"),o.killer=S.kind}var ae=Math.min(B.armor,Math.ceil(h/3));B.armor-=ae,h-=ae,B.hp-=h,B.dmgFlash=Math.min(.65,B.dmgFlash+h/55),T(Math.min(4,1+h/8)),B.painT=.6,B.hp<=0?(B.hp=0,B.dead=!0,B.deadT=0,x("playerDie"),F(o.boss)&&(M(o.boss,qt.default.line("playerDied",o.boss.profile)),N(o.boss,!1))):(x("playerPain"),B.hp<30&&A("lowHealth"))}}function oe(h,S,B,se,Q,ae,pe){var xe=h.y+h.h*.65,Ie=B-h.x,ze=se-xe,je=Q-h.z,at=Math.sqrt(Ie*Ie+ze*ze+je*je)||1,Bt=ae||(S?5.5:7);o.ents.push({kind:"proj",x:h.x+Ie/at*.5,y:xe+ze/at*.5,z:h.z+je/at*.5,vx:Ie/at*Bt,vy:ze/at*Bt,vz:je/at*Bt,h:.2,green:!!S,animT:0,owner:h,dmg:pe||(S?m(10,28):m(7,20))}),x(h.kind==="riley"?"rileyShoot":"impShoot",h)}function ue(h,S,B){return!qi(o.W,S,B)}function be(h,S,B){var se=o.W,Q=Vn(se,S,B);if(Q!==0){if(!$n[Q])return!1;var ae=Wi(se,S,B);if(!(ae.open>=.9||!ae.locked&&!ae.secret))return!1}return se.floor[B*se.mw+S]-se.floor[h]<=Ln+1e-4}function Ge(h,S,B){var se=new Int16Array(o.mw*o.mh);pc(o.W,h,S,B,ue,se);for(var Q=0;Q<o.ents.length;Q++){var ae=o.ents[Q];!ae.mob||ae.barrel||ae.state!=="idle"||Or[ae.kind].boss||se[Math.floor(ae.z)*o.mw+Math.floor(ae.x)]>=0&&Te(ae)}}function Te(h){h.state==="idle"&&(h.state="chase",h.st=0,x(h.kind==="knight"?"knightSight":h.kind==="riley"?"rileySight":"impSight",h))}function Je(){pc(o.W,o.p.x,o.p.z,9999,function(h,S,B){var se=h,Q=o.W,ae=Vn(Q,S,B);if(ae!==0){if(!$n[ae])return!1;var pe=Wi(Q,S,B);if(!(pe.open>=.9||!pe.locked&&!pe.secret))return!1}return Q.floor[se]-Q.floor[B*Q.mw+S]<=Ln+1e-4},o.flow)}function gt(h){var S=o.mw,B=Math.floor(h.x),se=Math.floor(h.z),Q=o.flow[se*S+B];if(Q<=0)return null;for(var ae=-1,pe=-1,xe=0;xe<4;xe++){var Ie=B+(xe===0?1:xe===1?-1:0),ze=se+(xe===2?1:xe===3?-1:0);if(!(Ie<0||ze<0||Ie>=S||ze>=o.mh)){var je=o.flow[ze*S+Ie];je>=0&&je<Q&&(Q=je,ae=Ie,pe=ze)}}return ae<0?null:Math.atan2(pe+.5-h.z,ae+.5-h.x)}function Ke(h,S){h.state==="closed"||h.state==="closing"?(h.state="opening",S&&(h.used=!0),x("doorOpen",{x:h.x+.5,y:nn(o.W,h.x,h.z),z:h.z+.5}),h.secret&&!h.found&&(h.found=!0)):S&&h.state==="open"&&(h.state="closing",x("doorClose",{x:h.x+.5,y:nn(o.W,h.x,h.z),z:h.z+.5}))}function Qe(h,S,B,se,Q){return h+B>se&&h-B<se+1&&S+B>Q&&S-B<Q+1}function vt(h){if(Qe(o.p.x,o.p.z,$t.r,h.x,h.z))return!0;for(var S=0;S<o.ents.length;S++){var B=o.ents[S];if(B.mob&&!B.barrel&&B.state!=="dead"&&B.state!=="die"&&Qe(B.x,B.z,B.radius,h.x,h.z))return!0}return!1}function nt(h){for(var S in o.doors){var B=o.doors[S];if(B.state==="opening")B.open+=h*1.6,B.open>=1&&(B.open=1,B.state="open",B.timer=B.secret?9999:4);else if(B.state==="open")B.timer-=h,B.timer<=0&&!vt(B)&&(B.state="closing",x("doorClose",{x:B.x+.5,y:0,z:B.z+.5}));else if(B.state==="closing"){if(vt(B)){B.state="opening";continue}B.open-=h*1.6,B.open<=0&&(B.open=0,B.state="closed")}}}function Et(h,S,B){return Qe(h.x,h.z,(h.radius||$t.r)*.7,S,B)&&Math.abs(h.y-nn(o.W,S,B))<.05}function Gt(h){var S=o.p;th(o.W,h,function(B,se){if(Et(S,B,se))return!0;for(var Q=0;Q<o.ents.length;Q++){var ae=o.ents[Q];if(ae.mob&&he(ae)&&Et(ae,B,se))return!0}return!1},function(B,se){x(se==="start"?"doorOpen":"doorClose",{x:B.x+.5,y:B.pos,z:B.z+.5})}),o.W.lifts.forEach(function(B){B.moved&&[S].concat(o.ents).forEach(function(se){(se===S||se.mob&&he(se))&&Qe(se.x,se.z,(se.radius||$t.r)*.7,B.x,B.z)&&Math.abs(se.y-(B.pos-B.moved))<.06&&(se.y=B.pos)})})}function Xt(){for(var h=o.p,S=Math.cos(h.ang),B=Math.sin(h.ang),se=.4;se<=1.3;se+=.3){var Q=Math.floor(h.x+S*se),ae=Math.floor(h.z+B*se),pe=Vn(o.W,Q,ae);if(pe!==0){if($n[pe]){var xe=Wi(o.W,Q,ae);if(xe.open>=.9&&xe.state==="open"&&Math.floor(h.x)===Q&&Math.floor(h.z)===ae)continue;return{kind:"door",door:xe}}return pe===9?{kind:"switch",x:Q,z:ae}:null}}return null}function At(){if(!o||o.p.dead||o.exitT>=0)return null;var h=Xt();if(!h)return null;if(h.kind==="switch")return{verb:"EXIT LEVEL",color:"#58e068"};var S=h.door;return S.secret&&!S.found?null:S.locked&&!o.p.keys[S.locked]?{need:S.locked,text:S.locked.toUpperCase()+" KEYCARD NEEDED",color:S.locked==="red"?"#ff5a3a":"#6a98ff"}:S.state==="closed"||S.state==="closing"?{verb:"OPEN",color:"#e8e0c8"}:null}function It(){var h=Xt();if(h){var S=o.p;if(h.kind==="door"){var B=h.door;B.locked&&!S.keys[B.locked]?(x("locked"),b("YOU NEED THE "+B.locked.toUpperCase()+" KEYCARD."),A("key")):Ke(B,!0)}else h.kind==="switch"&&(o.W.cells[h.z*o.mw+h.x]=10,x("switchFlip"),_("LEVEL COMPLETE!","#58e068",2),o.exitT=.8)}}function W(h){h.y=Ga(o.W,h.x,h.z,h.radius*.6)}function Dt(h,S){var B=o.p,se=Or[h.kind];h.animT+=S,h.st-=S,h.cool-=S,h.flashT-=S,h.target&&!he(h.target)&&(h.target=null,h.cool=Math.min(h.cool,.4));var Q=h.target,ae=Q?Q.x:B.x,pe=Q?Q.z:B.z,xe=Q?Q.y+Q.h*.6:B.y+B.eyeH*.8;h.losT-=S,h.losT<=0&&(h.losT=.2+f()*.1,h.los=Xi(o.W,h.x,h.y+h.h*.8,h.z,ae,xe,pe));var Ie=ae-h.x,ze=pe-h.z,je=Math.sqrt(Ie*Ie+ze*ze);if(Q&&(h.lostT=h.los?0:h.lostT+S,h.lostT>4)){h.target=null,h.lostT=0;return}if(h.state==="idle"){h.los&&je<9&&!B.dead&&Te(h);return}if(h.state==="pain"){h.st<=0&&(h.fleeNext?(h.fleeNext=!1,h.state="flee",h.st=m(.9,1.6),h.moveAng=Math.atan2(-ze,-Ie)+m(-.6,.6)):h.state="chase");return}if(h.state==="flee"){gr(o.W,h,Math.cos(h.moveAng)*h.speed*1.1*S,Math.sin(h.moveAng)*h.speed*1.1*S,h.radius,h.h,Ln)||(h.moveAng+=(f()<.5?1:-1)*Math.PI/2),W(h),h.st<=0&&(h.state="chase",h.cool=0,h.retarget=0,x("impSight",h));return}if(h.state==="die"){h.st<=-.5&&(h.state="dead");return}if(h.state!=="dead"){if(h.state==="windup"){if(h.st<=0){if(h.state="chase",!Q&&B.dead)return;if(se.melee&&je<1.9&&Math.abs(xe-(h.y+h.h*.5))<1.2){if(h.los){var at=se.attackDmg[0]+f()*(se.attackDmg[1]-se.attackDmg[0])|0;Q?_e(Q,at,h):Oe(at,h),x("punch",h)}}else se.ranged&&h.los&&oe(h,h.kind==="knight",ae,xe,pe);h.cool=m(.9,1.9)}return}if(!(!Q&&B.dead)){h.detourT=(h.detourT||0)-S,h.pathT=(h.pathT||0)-S;var Bt=!Q&&Math.abs(B.y-h.y)>Ln,Mt=!Q&&(!h.los||h.pathT>0||Bt)&&h.detourT<=0?gt(h):null;if(h.retarget-=S,Mt!==null)h.moveAng=Mt;else if(h.retarget<=0){h.retarget=m(.35,.8);var Zt=Math.atan2(ze,Ie);se.ranged&&!se.melee&&h.los&&je<7?(f()<.3&&(h.strafeSide=-h.strafeSide),h.moveAng=Zt+h.strafeSide*m(1.1,1.8)):h.moveAng=Zt+(je>2.2?m(-.7,.7):m(-.25,.25))}var zt=se.melee?.95:1.6;if(je>zt){var St=h.x,Wt=h.z,Ut=gr(o.W,h,Math.cos(h.moveAng)*h.speed*S,Math.sin(h.moveAng)*h.speed*S,h.radius,h.h,Ln);if(!Ut&&Mt!==null){var Ot=Math.floor(h.x)+.5-h.x,ot=Math.floor(h.z)+.5-h.z;gr(o.W,h,Ot*Math.min(1,S*6),ot*Math.min(1,S*6),h.radius,h.h,Ln)}else if(!Ut){var kn=Math.floor(h.x+Math.cos(h.moveAng)*.7),Ei=Math.floor(h.z+Math.sin(h.moveAng)*.7),wn=Wi(o.W,kn,Ei);wn&&!wn.locked&&!wn.secret&&wn.state==="closed"&&Ke(wn,!1),h.moveAng+=(f()<.5?1:-1)*Math.PI/2*m(.6,1.2),h.retarget=m(.25,.5),h.pathT=.8}for(var An=0;An<o.ents.length;An++){var Pn=o.ents[An];if(!(Pn===h||!Pn.mob||Pn.state==="dead"||Pn.state==="die"||Pn.gone)){var wi=h.x-Pn.x,R=h.z-Pn.z,X=wi*wi+R*R,le=h.radius+(Pn.radius||.3);if(X>1e-4&&X<le*le&&Math.abs(Pn.y-h.y)<.5){var ne=Math.sqrt(X),ie=(le-ne)*.5;mr(o.W,h.x+wi/ne*ie,h.z+R/ne*ie,h.radius,h.y,h.h,Ln).blocked||(h.x+=wi/ne*ie,h.z+=R/ne*ie)}}}var Ee=E(h.x,h.z,St,Wt),Pe=h.speed*S*.3;h.stuckT=Ee<Pe*Pe?(h.stuckT||0)+S:0,h.stuckT>.4&&(h.stuckT=0,h.detourT=m(.5,.9),h.moveAng+=(f()<.5?1:-1)*Math.PI/2,h.retarget=h.detourT),W(h)}h.cool<=0&&h.los&&(se.melee&&je<1.4&&Math.abs(xe-(h.y+h.h*.5))<1.2?(h.state="windup",h.st=.35):se.ranged&&je>1.2&&je<14&&f()<S*1.4&&(h.state="windup",h.st=.45))}}}function st(h){var S=qt.default.recall(n);h.mem=S,h.tune=qt.default.tuning(S),h.hp=h.maxHp=Math.round(Or.riley.hp*h.tune.hpScale),h.profile=qt.default.newProfile(),h.phase=1,h.cools={volley:1,lead:3,summon:8,shield:5,melee:0},h.move=null,h.moveT=0,h.shieldT=0,h.talkT=0,h.flankSide=1,h.attack=null,h.settled=!1}function F(h){return!!h&&h.state!=="idle"&&he(h)}function M(h,S,B){return!S||B&&h.talkT>0?!1:(b("RILEY: "+S,"#6fe0ec",4.5),x("rileyTalk"),h.talkT=3.5,!0)}function D(h){var S=h.mem;M(h,qt.default.line("intro",h.profile,{memory:S.fights>0?S:null})),S.ease>0?M(h,qt.default.line("ease",h.profile)):h.tune.practised&&M(h,qt.default.line("studied",h.profile,{wins:S.wins}))}function N(h,S){h.settled||(h.settled=!0,qt.default.save(n,qt.default.settle(h.mem,h.profile,S)))}function H(){var h=0;return o.ents.forEach(function(S){S.summoned&&he(S)&&h++}),h}function z(h){for(var S=0,B=0;B<30&&S<2;B++){var se=f()*Math.PI*2,Q=m(1.5,3.5),ae=h.x+Math.cos(se)*Q,pe=h.z+Math.sin(se)*Q,xe=Ga(o.W,ae,pe,.3);if(!(mr(o.W,ae,pe,.4,xe,.85,0).blocked||j(ae,pe)<3||!Xi(o.W,h.x,h.y+.5,h.z,ae,xe+.5,pe))){var Ie=U("imp",ae,pe,xe);Ie.summoned=!0,Ie.state="chase",o.ents.push(Ie),o.stats.totalKills++,d("fx","summon",ae,xe+.4,pe),S++}}S&&(M(h,qt.default.line("summon",h.profile)),x("rileySight",h)),h.cools.summon=18*h.tune.coolScale}function Z(h,S,B,se){var Q={los:h.los,dist:S,phase:h.phase,cool:h.cools,impsAlive:H(),playerWeapon:o.p.weapon},ae=qt.default.choose(qt.default.legalMoves(Q),h.profile,Q,t);h.move=ae.move,M(h,qt.default.insight(h.profile,ae.why),!0);var pe=h.profile;switch(ae.move){case"volley":case"lead":h.state="windup",h.attack=ae.move,h.st=ae.move==="volley"?.55:.4,h.moveT=h.st+.2;break;case"backoff":h.moveT=1,h.moveAng=Math.atan2(-se,-B)+m(-.5,.5);break;case"flank":h.flankSide=qt.default.strafeHabit(pe)>.3?qt.default.strafeSide(pe):f()<.5?1:-1,h.moveT=1.3;break;case"close":h.moveT=1.2;break;case"seek":h.moveT=.8;break;case"summon":z(h),h.moveT=.8;break;case"shield":h.shieldT=1.6,h.moveT=1.2,h.cools.shield=8*h.tune.coolScale,x("rileyShield",h);break}}function V(h,S){var B=o.p,se=h.tune,Q=se.coolScale*(h.phase>=3?.7:1);if(h.attack==="melee"){S<1.9&&h.los&&(Oe(m(10,20)*se.dmgScale|0,h),x("punch",h)),h.cools.melee=1.2;return}if(h.los){var ae=B.y+B.eyeH*.8,pe=Math.atan2(B.z-h.z,B.x-h.x);if(h.attack==="volley"){for(var xe=-1;xe<=1;xe++){var Ie=pe+xe*.2;oe(h,!0,h.x+Math.cos(Ie)*S,ae,h.z+Math.sin(Ie)*S,6.5,m(8,16)*se.dmgScale)}h.cools.volley=m(1.6,2.4)*Q}else if(h.attack==="lead"){var ze=9,je=S/ze;oe(h,!0,B.x+o.input.vx*je,ae,B.z+o.input.vz*je,ze,m(10,18)*se.dmgScale),h.cools.lead=m(1.8,2.8)*Q}}}function K(h,S){var B=o.p,se=h.profile;h.animT+=S,h.st-=S,h.talkT-=S,h.shieldT-=S,h.moveT-=S,h.flashT-=S;for(var Q in h.cools)h.cools[Q]-=S;h.losT-=S,h.losT<=0&&(h.losT=.15,h.los=Xi(o.W,h.x,h.y+h.h*.85,h.z,B.x,q(),B.z));var ae=B.x-h.x,pe=B.z-h.z,xe=Math.sqrt(ae*ae+pe*pe);if(h.state==="idle"){h.los&&!B.dead&&(Te(h),D(h));return}if(h.state==="die"){h.st<=-1.2&&(h.state="dead");return}if(!(h.state==="dead"||B.dead)){if(qt.default.observe(se,{dt:S,los:h.los,dist:xe,strafe:o.input.strafe,moving:o.input.moving}),h.state==="pain"){h.st<=0&&(h.state="chase");return}if(h.state==="windup"){h.st<=0&&(h.state="chase",V(h,xe));return}if(xe<1.3&&h.los&&h.cools.melee<=0){h.state="windup",h.attack="melee",h.st=.3;return}if(!(h.moveT<=0&&(Z(h,xe,ae,pe),h.state==="windup"))){var Ie=Math.atan2(pe,ae),ze=null;switch(h.move){case"backoff":ze=h.moveAng;break;case"close":ze=Ie;break;case"flank":case"shield":ze=Ie+h.flankSide*1.35;break;case"seek":ze=gt(h),ze===null&&(ze=Ie);break}if(ze!==null){var je=h.speed*(h.phase>=3?1.25:1)*S;gr(o.W,h,Math.cos(ze)*je,Math.sin(ze)*je,h.radius,h.h,Ln)||(h.flankSide=-h.flankSide,h.moveAng+=Math.PI/2),W(h)}}}}function ce(h,S){if(h.shieldT>0)return d("fx","spark",h.x,h.y+.5,h.z),x("rileyShield",h),!0;if(o.firing&&h.lastShot!==o.shotId&&(h.lastShot=o.shotId,h.profile.hits++),S&&!S.barrel&&S.kind==="imp"){var B=S.target===h?"impsTurned":"friendlyFire";h.profile.said[B]||(h.profile.said[B]=!0,M(h,qt.default.line(B,h.profile)))}return!1}function ge(h){if(h.hp<=0){x("rileyDerez",h),M(h,qt.default.line("defeated",h.profile)),N(h,!0),o.exitT=5;return}h.phase<3&&h.hp<h.maxHp*.33?(h.phase=3,M(h,qt.default.line("phase3",h.profile))):h.phase<2&&h.hp<h.maxHp*.66&&(h.phase=2,M(h,qt.default.line("phase2",h.profile)),z(h))}function de(){for(var h=o.p,S=q(),B=12,se=o.W,Q=Math.floor(h.x),ae=Math.floor(h.z),pe=Math.max(0,ae-B);pe<=Math.min(o.mh-1,ae+B);pe++)for(var xe=Math.max(0,Q-B);xe<=Math.min(o.mw-1,Q+B);xe++){var Ie=pe*o.mw+xe;o.seen[Ie]||qi(se,xe,pe)||Xi(se,h.x,S,h.z,xe+.5,nn(se,xe,pe)+.4,pe+.5)&&(o.seen[Ie]=1,As(se,xe,pe).forEach(function(ze){se.cells[ze.i]!==0&&(o.seen[ze.i]=1)}))}}function ve(){de();var h=o.p,S=q();function B(xe,Ie){return E(xe.x,xe.z,h.x,h.z)<Ie*Ie&&Xi(o.W,h.x,S,h.z,xe.x,(xe.y||0)+(xe.h||.3)*.6,xe.z)}for(var se=0;se<o.ents.length;se++){var Q=o.ents[se];if(Q.kind==="pickup"&&!Q.spotted&&(Q.item==="r"||Q.item==="u")&&B(Q,14)&&(Q.spotted=!0),Q.mob&&!Q.barrel&&he(Q)&&sh["meet_"+Q.kind]&&!r.seenTips["meet_"+Q.kind]&&B(Q,11)&&A("meet_"+Q.kind),Q.barrel&&!Q.gone&&!r.seenTips.barrel&&B(Q,10))for(var ae=0;ae<o.ents.length;ae++){var pe=o.ents[ae];if(pe.mob&&!pe.barrel&&he(pe)&&pe.state!=="idle"&&E(pe.x,pe.z,Q.x,Q.z)<4){A("barrel");break}}Q.kind==="torch"&&u===0&&o.time>20&&B(Q,5)&&A("torches")}o.W.lifts.forEach(function(xe){E(xe.x+.5,xe.z+.5,h.x,h.z)<16&&A("lift")})}function Me(){var h=o.info,S=o.p,B,se=h.keys.blue&&!S.keys.blue?"u":h.keys.red&&!S.keys.red?"r":null;if(se){for(var Q=0;Q<o.ents.length;Q++){var ae=o.ents[Q];if(ae.kind==="pickup"&&ae.item===se&&!ae.gone)return ae.spotted?{x:ae.x,y:ae.y+.3,z:ae.z}:null}return null}for(B in o.doors){var pe=o.doors[B];if(pe.locked&&!pe.used&&o.seen[pe.z*o.mw+pe.x])return{x:pe.x+.5,y:nn(o.W,pe.x,pe.z)+.8,z:pe.z+.5}}var xe=o.exitCell;return!h.boss&&xe&&o.seen[xe.z*o.mw+xe.x]?{x:xe.x+.5,y:.8,z:xe.z+.5}:null}function Le(h){var S=o.p,B=rh[h.item],se=g().ammo,Q=null;switch(h.item){case"h":S.hp>=100?Q="HEALTH":S.hp=Math.min(100,S.hp+10);break;case"+":S.hp>=100?Q="HEALTH":S.hp=Math.min(100,S.hp+25);break;case"A":S.armor>=100?Q="ARMOR":(S.armor=100,S.grinT=1);break;case"b":S.ammo.bullets>=200?Q="BULLETS":S.ammo.bullets=Math.min(200,S.ammo.bullets+10*se);break;case"a":S.ammo.shells>=50?Q="SHELLS":S.ammo.shells=Math.min(50,S.ammo.shells+4*se);break;case"2":S.weapons.shotgun=!0,S.ammo.shells=Math.min(50,S.ammo.shells+8*se),S.grinT=1.2,S.weapon!=="shotgun"&&Y("shotgun",!0),_("SHOTGUN!  PRESS 3","#ffd23e",2.5),A("weapons");break;case"r":case"u":var ae=h.item==="r"?"red":"blue";S.keys[ae]=!0,S.grinT=1,_(ae.toUpperCase()+" KEYCARD",ae==="red"?"#ff5a3a":"#6a98ff",2.5),A("key");break;case"P":S.hp=Math.min(200,S.hp+100),S.grinT=1.2;break}if(Q){h.touching=!0,b(Q+" ALREADY FULL","#8a8478",1.5);return}h.gone=!0,o.stats.items++,S.bonusFlash=Math.min(.35,S.bonusFlash+.22),x(B.snd),d("fx","pickup",h.x,h.y+.3,h.z,{item:h.item}),b(B.msg),S.autoFist&&(h.item==="b"||h.item==="a")&&(S.autoFist=!1,Y(k(S),!0))}function Be(h){var S=o.p;if(S.dead){S.deadT+=h,S.eyeH=Math.max(.15,S.eyeH-h*1.2);return}var B=!!a.KeyC;if(!B&&S.crouch){var se=mr(o.W,S.x,S.z,$t.r,S.y,$t.h,0);se.blocked||(S.crouch=!1)}else S.crouch=B;var Q=S.crouch?$t.hCrouch:$t.h,ae=S.crouch?$t.eyeCrouch:$t.eye;S.eyeH+=(ae-S.eyeH)*Math.min(1,h*14);var pe=a.ShiftLeft||a.ShiftRight,xe=0,Ie=0;(a.KeyW||a.ArrowUp)&&(xe+=1),(a.KeyS||a.ArrowDown)&&(xe-=1),a.KeyA&&(Ie-=1),a.KeyD&&(Ie+=1),a.ArrowLeft&&(S.ang-=2.6*h),a.ArrowRight&&(S.ang+=2.6*h),a.PageUp&&(S.pitch+=1.6*h),a.PageDown&&(S.pitch-=1.6*h),S.pitch=v(S.pitch,-1.3,1.3),xe&&Ie&&(xe*=.7071,Ie*=.7071);var ze=S.crouch?$t.walk*.5:pe?$t.run:$t.walk,je=Math.cos(S.ang),at=Math.sin(S.ang),Bt=(je*xe-at*Ie)*ze,Mt=(at*xe+je*Ie)*ze,Zt=S.onGround?14:3;S.vx+=(Bt-S.vx)*Math.min(1,h*Zt),S.vz+=(Mt-S.vz)*Math.min(1,h*Zt),a.Space&&!S.jumpHeld&&S.onGround&&!S.crouch&&(S.vy=$t.jumpV,S.onGround=!1,o.jumped=!0,x("jump")),S.jumpHeld=!!a.Space;var zt=S.x,St=S.z,Wt=S.onGround?Ln:Math.max(0,Math.min(dc,.12));gr(o.W,S,S.vx*h,S.vz*h,$t.r,Q,Wt),pe&&(xe||Ie)&&(o.ranT+=h);var Ut=Ga(o.W,S.x,S.z,$t.r),Ot=mr(o.W,S.x,S.z,$t.r,Math.max(S.y,Ut),Q,10).ceil;S.onGround&&Ut<S.y-.02&&Ut>S.y-Ln?S.y=Ut:S.onGround&&Ut<S.y&&(S.onGround=!1),S.onGround&&Ut>S.y&&(S.y=Ut),S.onGround||(S.vy-=$t.gravity*h,S.y+=S.vy*h,Ot!==void 0&&S.y+Q>Ot&&(S.y=Ot-Q,S.vy>0&&(S.vy=0)),S.y<=Ut&&(S.vy<-5&&(T(1.2),S.landT=.25),S.vy<-2&&x("land"),S.y=Ut,S.vy=0,S.onGround=!0)),o.input.strafe=Ie,o.input.moving=S.x!==zt||S.z!==St,o.input.vx=(S.x-zt)/h,o.input.vz=(S.z-St)/h,u===0&&(o.time>14&&o.ranT<.3&&A("run"),o.time>25&&!o.jumped&&A("jump"),o.time>40&&!o.usedMap&&A("map"),o.time>70&&!o.stats.secrets&&A("secret")),a.KeyE?S.usedHeld||(S.usedHeld=!0,It()):S.usedHeld=!1,S.nextWeapon&&S.raiseT<=0&&!(S.lowerT>0)&&(S.lowerT=.15),S.lowerT>0&&(S.lowerT-=h,S.lowerT<=0&&(S.weapon=S.nextWeapon||S.weapon,S.nextWeapon=null,S.raiseT=.15)),S.raiseT>0&&(S.raiseT-=h),S.cool-=h,S.fireT+=h;var ot=Rs[S.weapon];if(l&&S.cool<=0&&S.raiseT<=0&&S.lowerT<=0&&!S.nextWeapon&&o.exitT<0)if(ot.ammo&&S.ammo[ot.ammo]<=0){x("noAmmo");var kn=k(S);b("OUT OF "+nh[ot.ammo]+"!"),Y(kn,!0)&&kn==="fist"&&(S.autoFist=!0),A("lowAmmo"),S.cool=.3}else{if(ot.ammo&&S.ammo[ot.ammo]--,S.cool=ot.rate,S.fireT=0,x(S.weapon==="fist"?"punch":S.weapon),S.weapon==="shotgun"&&x("pump"),ot.melee||(T(ot.shake),d("fx","muzzle",S.x+Math.cos(S.ang)*.4,q()-.1,S.z+Math.sin(S.ang)*.4,{weapon:S.weapon})),F(o.boss)&&qt.default.noteShot(o.boss.profile,S.weapon,j(o.boss.x,o.boss.z)),o.shotId++,o.firing=!0,ot.melee)J(S.ang,S.pitch,ot.dmgMin,ot.dmgMax,!0,ot.knock);else for(var Ei=0;Ei<ot.pellets;Ei++)J(S.ang+(f()-.5)*2*ot.spread,S.pitch+(f()-.5)*ot.spread,ot.dmgMin,ot.dmgMax,!1,ot.knock);o.firing=!1,ot.melee||Ge(S.x,S.z,14)}for(var wn=0;wn<o.ents.length;wn++){var An=o.ents[wn];An.kind!=="pickup"||An.gone||(E(An.x,An.z,S.x,S.z)<.45&&Math.abs(An.y-S.y)<.6?An.touching||Le(An):An.touching=!1)}var Pn=Math.floor(S.x),wi=Math.floor(S.z);o.secrets.forEach(function(R){!R.found&&R.x===Pn&&R.z===wi&&(R.found=!0,o.stats.secrets++,x("secret"),_("SECRET AREA FOUND!","#ffd23e",2.5))})}function G(h){if(!(c!=="game"||!o)){var S=o.p;o.events.length=0,o.time+=h,S.dmgFlash=Math.max(0,S.dmgFlash-h*.8),S.bonusFlash=Math.max(0,S.bonusFlash-h*1.5),S.painT=Math.max(0,S.painT-h),S.grinT=Math.max(0,S.grinT-h),S.landT=Math.max(0,S.landT-h),o.shake=Math.max(0,o.shake-h*14);for(var B=0;B<o.msgs.length;B++)o.msgs[B].t-=h;for(;o.msgs.length&&o.msgs[0].t<=0;)o.msgs.shift();o.notice&&(o.notice.t-=h)<=0&&(o.notice=null),o.hitT-=h,o.killT-=h,o.blockT-=h;for(var se=o.hurtDirs.length-1;se>=0;se--)(o.hurtDirs[se].t-=h*.9)<=0&&o.hurtDirs.splice(se,1);if(y(h),o.spotT-=h,o.spotT<=0&&(o.spotT=.3,ve()),o.exitT>=0&&(o.exitT-=h,o.exitT<=0)){p={name:o.L.name,time:o.time,par:o.L.par,kills:o.stats.kills,totalKills:o.stats.totalKills,items:o.stats.items,totalItems:o.stats.totalItems,secrets:o.stats.secrets,totalSecrets:o.stats.totalSecrets},s(u,p),c="inter";return}nt(h),Gt(h),o.flowT-=h,o.flowT<=0&&(o.flowT=.25,Je()),Be(h);for(var Q=o.ents.length-1;Q>=0;Q--){var ae=o.ents[Q];if(ae.gone){o.ents.splice(Q,1);continue}if(ae.kind==="torch"){ae.animT+=h;continue}if(ae.kind==="pickup"){ae.bob+=h;continue}if(ae.kind==="proj"){ae.animT+=h;for(var pe=3,xe=!1,Ie=0;Ie<pe&&!xe;Ie++){ae.x+=ae.vx*h/pe,ae.y+=ae.vy*h/pe,ae.z+=ae.vz*h/pe;var ze=Math.floor(ae.x),je=Math.floor(ae.z),at=qi(o.W,ze,je)||ae.y<nn(o.W,ze,je)||ae.y>fi(o.W,ze,je)?"wall":ye(ae);!at&&!S.dead&&E(ae.x,ae.z,S.x,S.z)<.2&&ae.y>S.y-.1&&ae.y<S.y+(S.crouch?$t.hCrouch:$t.h)+.1&&(at="player"),at&&(xe=!0,at==="player"?(Oe(ae.dmg|0,{x:ae.x-ae.vx,z:ae.z-ae.vz,kind:ae.owner?ae.owner.kind:"imp"}),x("fireExplode")):(at!=="wall"&&_e(at,ae.dmg|0,ae.owner),x("fireExplode",ae)),d("fx",ae.green?"greenBurst":"fireBurst",ae.x,ae.y,ae.z),o.ents.splice(Q,1))}continue}if(ae.barrel){ae.state==="boom"&&(ae.st-=h,ae.st<=0&&Ue(ae));continue}ae.kind==="riley"?K(ae,h):ae.mob&&Dt(ae,h)}}}function ye(h){for(var S=0;S<o.ents.length;S++){var B=o.ents[S];if(!(!B.mob||B===h.owner||!he(B))&&!(!B.barrel&&h.owner&&B.kind===h.owner.kind)){var se=B.radius+.1;if(E(h.x,h.z,B.x,B.z)<se*se&&h.y>=B.y-.1&&h.y<=B.y+B.h+.1)return B}}return null}function fe(){var h=o.p,S=Math.cos(h.pitch),B=Math.cos(h.ang)*S,se=Math.sin(h.ang)*S,Q=Math.sin(h.pitch),ae=Wa(o.W,h.x,q(),h.z,B,Q,se,40),pe=null,xe=ae.dist;return o.ents.forEach(function(Ie){if(!(!Ie.mob||!he(Ie))){var ze=ee(h.x,q(),h.z,B,Q,se,Ie);ze!==null&&ze<xe&&(pe=Ie,xe=ze)}}),pe}var Se=!1;function Re(){if(c==="inter"){if(!Se){Se=!0;return}Se=!1,u+1>=e.length?c="victory":P(u+1,!0)}else c==="victory"?c="title":c==="game"&&o&&o.p.dead&&o.p.deadT>1.2&&O()}function me(){return{floorAt:function(h,S){return qi(o.W,h,S)&&!(Wi(o.W,h,S)&&!Wi(o.W,h,S).locked)?null:nn(o.W,h,S)},neighbours:function(h,S){var B=[],se=nn(o.W,h,S);return As(o.W,h,S).forEach(function(Q){var ae=Vn(o.W,Q.x,Q.z);if(!(ae!==0&&!$n[ae])){var pe=nn(o.W,Q.x,Q.z)-se,xe=pe<=.02&&pe>=-.02?"walk":pe<0?"drop":pe<=Ln?"step":pe<=dc?"jump":null;xe&&B.push({cx:Q.x,cz:Q.z,cost:xe==="jump"?2:1,kind:xe})}}),B}}}return{keys:a,state:function(){return o},mode:function(){return c},setMode:function(h){c=h},interStats:function(){return p},levelIndex:function(){return u},levels:e,update:G,startLevel:P,retryLevel:O,onEnter:Re,setFire:function(h){l=!!h},switchWeapon:Y,cycleWeapon:$,quickSwitch:re,useTarget:Xt,usePrompt:At,useAction:It,objective:C,goalTarget:Me,aimTarget:fe,hurtPlayer:Oe,walkGraph:me,levelInfo:w,hasAmmo:L,settings:r,DIFFS:vr}}var lh=ws(oh(),1),Zd={name:"E1M1: ASH GATES",floor:"slab",ceil:"ceilDark",par:90,playerAngle:0,ceilHeight:2.5,map:["#######################X######","####################..t.t....#","####################.........#","####################..i..+...#","####################....A....#","####################...L.....#","#######################U######","##....................t.t...##","##.t......%%......%%........##","##u...g......i..............##","##.t.......h.....g..........##","##..........................##","####################D#########","###*Pa#########....t.t......##","####S##########.....i.....o.##","##b......######..........io.##","##.......######......h......##","##..p....D........2.........##","##.......######..o..........##","##.......######.t.........t.##","##...h...#####################","##############################"],heights:["000000000000000000000000000000","000000000000000000008888888880","000000000000000000008888888880","000000000000000000008888888880","000000000000000000008888888880","000000000000000000008888888880","000000000000000000000000000000","000000000000000000000000000000","000000000000000000000000000000","000000000000000000000000000000","000000000001234444444444444400","000000000001234444444444444400","000000000000000000000000000000","000000000000000444444444444440","000000000000000444444444444440","000000000000000444444444444440","000000000000000446664444444440","000000000012344446664444444440","000000000000000446664444444440","000000000000000444444444444440","000000000000000000000000000000","000000000000000000000000000000"],ceilings:["..............................","....................iiiiiiiii.","....................iiiiiiiii.","....................iiiiiiiii.","....................iiiiiiiii.","....................iiiiiiiii.","..............................","..gggggggggggggggggggggggggg..","..gggggggggggggggggggggggggg..","..gggggggggggggggggggggggggg..","..gggggggggggggggggggggggggg..","..gggggggggggggggggggggggggg..","..............................","...............eeeeeeeeeeeeee.","...............eeeeeeeeeeeeee.","...............eeeeeeeeeeeeee.","...............eeeeeeeeeeeeee.",".........cccccceeeeeeeeeeeeee.","...............eeeeeeeeeeeeee.","...............eeeeeeeeeeeeee.","..............................",".............................."]},_r=[Zd].concat(lh.default.slice(1).map(function(i){return Object.assign({ceilHeight:2},i)}));function ch(i){var e=i>>>0||1;return function(){e=e+1831565813|0;var t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Uh=0,Kc=1,Oh=2;var la=1,Fh=2,cs=3,or=0,mn=1,Wn=2,qn=0,us=1,Ui=2,Zc=3,Jc=4,Hh=5;var wr=100,Bh=101,kh=102,zh=103,Vh=104,Gh=200,Wh=201,qh=202,Xh=203,$c=204,jc=205,Yh=206,Kh=207,Zh=208,Jh=209,$h=210,jh=211,Qh=212,ef=213,tf=214,go=0,vo=1,_o=2,jr=3,xo=4,yo=5,Mo=6,So=7,Xo=0,nf=1,rf=2,ri=0,ca=1,ua=2,ha=3,Ar=4,fa=5,da=6,pa=7;var Qc=300,lr=301,Rr=302,Yo=303,Ko=304,ma=306,Qr=1e3,pi=1001,bo=1002,un=1003,sf=1004;var ga=1005;var dn=1006,Zo=1007;var cr=1008;var Cn=1009,eu=1010,tu=1011,hs=1012,Jo=1013,si=1014,Xn=1015,gn=1016,$o=1017,jo=1018,fs=1020,nu=35902,iu=35899,ru=1021,su=1022,Yn=1023,mi=1026,ur=1027,Qo=1028,el=1029,hr=1030,tl=1031;var nl=1033,va=33776,_a=33777,xa=33778,ya=33779,il=35840,rl=35841,sl=35842,al=35843,ol=36196,ll=37492,cl=37496,ul=37488,hl=37489,Ma=37490,fl=37491,dl=37808,pl=37809,ml=37810,gl=37811,vl=37812,_l=37813,xl=37814,yl=37815,Ml=37816,Sl=37817,bl=37818,Tl=37819,El=37820,wl=37821,Al=36492,Rl=36494,Cl=36495,Il=36283,Pl=36284,Sa=36285,Ll=36286;var Fs=2300,To=2301,po=2302,Bc=2303,kc=2400,zc=2401,Vc=2402;var af=3200;var ba=0,of=1,ai="",fn="srgb",Hs="srgb-linear",Bs="linear",_t="srgb";var mo=7680;var lf=519,cf=512,uf=513,hf=514,Dl=515,ff=516,df=517,Nl=518,pf=519,mf=35044,ds=35048;var au="300 es",ni=2e3,es=2001;function Jd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function $d(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ks(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gf(){let i=ks("canvas");return i.style.display="block",i}var uh={},ts=null;function ou(...i){let e="THREE."+i.shift();ts?ts("log",e,...i):console.log(e,...i)}function vf(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ze(...i){i=vf(i);let e="THREE."+i.shift();if(ts)ts("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function $e(...i){i=vf(i);let e="THREE."+i.shift();if(ts)ts("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function br(...i){let e=i.join(" ");e in uh||(uh[e]=!0,Ze(...i))}function _f(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var xf={[go]:vo,[_o]:Mo,[xo]:So,[jr]:yo,[vo]:go,[Mo]:_o,[So]:xo,[yo]:jr},gi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var gc=Math.PI/180,Eo=180/Math.PI;function Ta(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function ft(i,e,t){return Math.max(e,Math.min(t,i))}function jd(i,e){return(i%e+e)%e}function vc(i,e,t){return(1-t)*i+t*e}function Is(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Rn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var fu=class fu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};fu.prototype.isVector2=!0;var Xe=fu,vi=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,l){let c=n[r+0],u=n[r+1],o=n[r+2],p=n[r+3],f=s[a+0],m=s[a+1],v=s[a+2],E=s[a+3];if(p!==E||c!==f||u!==m||o!==v){let g=c*f+u*m+o*v+p*E;g<0&&(f=-f,m=-m,v=-v,E=-E,g=-g);let d=1-l;if(g<.9995){let x=Math.acos(g),U=Math.sin(x);d=Math.sin(d*x)/U,l=Math.sin(l*x)/U,c=c*d+f*l,u=u*d+m*l,o=o*d+v*l,p=p*d+E*l}else{c=c*d+f*l,u=u*d+m*l,o=o*d+v*l,p=p*d+E*l;let x=1/Math.sqrt(c*c+u*u+o*o+p*p);c*=x,u*=x,o*=x,p*=x}}e[t]=c,e[t+1]=u,e[t+2]=o,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,s,a){let l=n[r],c=n[r+1],u=n[r+2],o=n[r+3],p=s[a],f=s[a+1],m=s[a+2],v=s[a+3];return e[t]=l*v+o*p+c*m-u*f,e[t+1]=c*v+o*f+u*p-l*m,e[t+2]=u*v+o*m+l*f-c*p,e[t+3]=o*v-l*p-c*f-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,l=Math.cos,c=Math.sin,u=l(n/2),o=l(r/2),p=l(s/2),f=c(n/2),m=c(r/2),v=c(s/2);switch(a){case"XYZ":this._x=f*o*p+u*m*v,this._y=u*m*p-f*o*v,this._z=u*o*v+f*m*p,this._w=u*o*p-f*m*v;break;case"YXZ":this._x=f*o*p+u*m*v,this._y=u*m*p-f*o*v,this._z=u*o*v-f*m*p,this._w=u*o*p+f*m*v;break;case"ZXY":this._x=f*o*p-u*m*v,this._y=u*m*p+f*o*v,this._z=u*o*v+f*m*p,this._w=u*o*p-f*m*v;break;case"ZYX":this._x=f*o*p-u*m*v,this._y=u*m*p+f*o*v,this._z=u*o*v-f*m*p,this._w=u*o*p+f*m*v;break;case"YZX":this._x=f*o*p+u*m*v,this._y=u*m*p+f*o*v,this._z=u*o*v-f*m*p,this._w=u*o*p-f*m*v;break;case"XZY":this._x=f*o*p-u*m*v,this._y=u*m*p-f*o*v,this._z=u*o*v+f*m*p,this._w=u*o*p+f*m*v;break;default:Ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],l=t[5],c=t[9],u=t[2],o=t[6],p=t[10],f=n+l+p;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(o-c)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(n>l&&n>p){let m=2*Math.sqrt(1+n-l-p);this._w=(o-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(l>p){let m=2*Math.sqrt(1+l-n-p);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+o)/m}else{let m=2*Math.sqrt(1+p-n-l);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(c+o)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,l=t._x,c=t._y,u=t._z,o=t._w;return this._x=n*o+a*l+r*u-s*c,this._y=r*o+a*c+s*l-n*u,this._z=s*o+a*u+n*c-r*l,this._w=a*o-n*l-r*c-s*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,l=this.dot(e);l<0&&(n=-n,r=-r,s=-s,a=-a,l=-l);let c=1-t;if(l<.9995){let u=Math.acos(l),o=Math.sin(u);c=Math.sin(c*u)/o,t=Math.sin(t*u)/o,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},du=class du{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,l=e.z,c=e.w,u=2*(a*r-l*n),o=2*(l*t-s*r),p=2*(s*n-a*t);return this.x=t+c*u+a*p-l*o,this.y=n+c*o+l*u-s*p,this.z=r+c*p+s*o-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,l=t.y,c=t.z;return this.x=r*c-s*l,this.y=s*a-n*c,this.z=n*l-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _c.copy(this).projectOnVector(e),this.sub(_c)}reflect(e){return this.sub(_c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};du.prototype.isVector3=!0;var te=du,_c=new te,hh=new vi,pu=class pu{constructor(e,t,n,r,s,a,l,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,l,c,u)}set(e,t,n,r,s,a,l,c,u){let o=this.elements;return o[0]=e,o[1]=r,o[2]=l,o[3]=t,o[4]=s,o[5]=c,o[6]=n,o[7]=a,o[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],l=n[3],c=n[6],u=n[1],o=n[4],p=n[7],f=n[2],m=n[5],v=n[8],E=r[0],g=r[3],d=r[6],x=r[1],U=r[4],w=r[7],I=r[2],P=r[5],O=r[8];return s[0]=a*E+l*x+c*I,s[3]=a*g+l*U+c*P,s[6]=a*d+l*w+c*O,s[1]=u*E+o*x+p*I,s[4]=u*g+o*U+p*P,s[7]=u*d+o*w+p*O,s[2]=f*E+m*x+v*I,s[5]=f*g+m*U+v*P,s[8]=f*d+m*w+v*O,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],u=e[7],o=e[8];return t*a*o-t*l*u-n*s*o+n*l*c+r*s*u-r*a*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],u=e[7],o=e[8],p=o*a-l*u,f=l*c-o*s,m=u*s-a*c,v=t*p+n*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/v;return e[0]=p*E,e[1]=(r*u-o*n)*E,e[2]=(l*n-r*a)*E,e[3]=f*E,e[4]=(o*t-r*c)*E,e[5]=(r*s-l*t)*E,e[6]=m*E,e[7]=(n*c-u*t)*E,e[8]=(a*t-n*s)*E,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,l){let c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*a+u*l)+a+e,-r*u,r*c,-r*(-u*a+c*l)+l+t,0,0,1),this}scale(e,t){return br("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xc.makeScale(e,t)),this}rotate(e){return br("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xc.makeRotation(-e)),this}translate(e,t){return br("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};pu.prototype.isMatrix3=!0;var et=pu,xc=new et,fh=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dh=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qd(){let i={enabled:!0,workingColorSpace:Hs,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===_t&&(r.r=Di(r.r),r.g=Di(r.g),r.b=Di(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_t&&(r.r=$r(r.r),r.g=$r(r.g),r.b=$r(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ai?Bs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return br("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return br("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Hs]:{primaries:e,whitePoint:n,transfer:Bs,toXYZ:fh,fromXYZ:dh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:fh,fromXYZ:dh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),i}var ct=Qd();function Di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $r(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Fr,wo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Fr===void 0&&(Fr=ks("canvas")),Fr.width=e.width,Fr.height=e.height;let r=Fr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Fr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=ks("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Di(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Di(t[n]/255)*255):t[n]=Di(t[n]);return{data:t,width:e.width,height:e.height}}else return Ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ep=0,ns=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=Ta(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?s.push(yc(r[a].image)):s.push(yc(r[a]))}else s=yc(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function yc(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?wo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ze("Texture: Unable to serialize Texture."),{})}var tp=0,Mc=new te,En=class i extends gi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=pi,r=pi,s=dn,a=cr,l=Yn,c=Cn,u=i.DEFAULT_ANISOTROPY,o=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=Ta(),this.name="",this.source=new ns(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=o,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Mc).x}get height(){return this.source.getSize(Mc).y}get depth(){return this.source.getSize(Mc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ze(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qr:e.x=e.x-Math.floor(e.x);break;case pi:e.x=e.x<0?0:1;break;case bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qr:e.y=e.y-Math.floor(e.y);break;case pi:e.y=e.y<0?0:1;break;case bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=Qc;En.DEFAULT_ANISOTROPY=1;var mu=class mu{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,u=c[0],o=c[4],p=c[8],f=c[1],m=c[5],v=c[9],E=c[2],g=c[6],d=c[10];if(Math.abs(o-f)<.01&&Math.abs(p-E)<.01&&Math.abs(v-g)<.01){if(Math.abs(o+f)<.1&&Math.abs(p+E)<.1&&Math.abs(v+g)<.1&&Math.abs(u+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let U=(u+1)/2,w=(m+1)/2,I=(d+1)/2,P=(o+f)/4,O=(p+E)/4,b=(v+g)/4;return U>w&&U>I?U<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(U),r=P/n,s=O/n):w>I?w<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),n=P/r,s=b/r):I<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),n=O/s,r=b/s),this.set(n,r,s,t),this}let x=Math.sqrt((g-v)*(g-v)+(p-E)*(p-E)+(f-o)*(f-o));return Math.abs(x)<.001&&(x=1),this.x=(g-v)/x,this.y=(p-E)/x,this.z=(f-o)/x,this.w=Math.acos((u+m+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};mu.prototype.isVector4=!0;var kt=mu,Ao=class extends gi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},s=new En(r),a=n.count;for(let l=0;l<a;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new ns(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qt=class extends Ao{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},zs=class extends En{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ro=class extends En{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var qo=class qo{constructor(e,t,n,r,s,a,l,c,u,o,p,f,m,v,E,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,l,c,u,o,p,f,m,v,E,g)}set(e,t,n,r,s,a,l,c,u,o,p,f,m,v,E,g){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=l,d[13]=c,d[2]=u,d[6]=o,d[10]=p,d[14]=f,d[3]=m,d[7]=v,d[11]=E,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qo().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Hr.setFromMatrixColumn(e,0).length(),s=1/Hr.setFromMatrixColumn(e,1).length(),a=1/Hr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),l=Math.sin(n),c=Math.cos(r),u=Math.sin(r),o=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){let f=a*o,m=a*p,v=l*o,E=l*p;t[0]=c*o,t[4]=-c*p,t[8]=u,t[1]=m+v*u,t[5]=f-E*u,t[9]=-l*c,t[2]=E-f*u,t[6]=v+m*u,t[10]=a*c}else if(e.order==="YXZ"){let f=c*o,m=c*p,v=u*o,E=u*p;t[0]=f+E*l,t[4]=v*l-m,t[8]=a*u,t[1]=a*p,t[5]=a*o,t[9]=-l,t[2]=m*l-v,t[6]=E+f*l,t[10]=a*c}else if(e.order==="ZXY"){let f=c*o,m=c*p,v=u*o,E=u*p;t[0]=f-E*l,t[4]=-a*p,t[8]=v+m*l,t[1]=m+v*l,t[5]=a*o,t[9]=E-f*l,t[2]=-a*u,t[6]=l,t[10]=a*c}else if(e.order==="ZYX"){let f=a*o,m=a*p,v=l*o,E=l*p;t[0]=c*o,t[4]=v*u-m,t[8]=f*u+E,t[1]=c*p,t[5]=E*u+f,t[9]=m*u-v,t[2]=-u,t[6]=l*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,m=a*u,v=l*c,E=l*u;t[0]=c*o,t[4]=E-f*p,t[8]=v*p+m,t[1]=p,t[5]=a*o,t[9]=-l*o,t[2]=-u*o,t[6]=m*p+v,t[10]=f-E*p}else if(e.order==="XZY"){let f=a*c,m=a*u,v=l*c,E=l*u;t[0]=c*o,t[4]=-p,t[8]=u*o,t[1]=f*p+E,t[5]=a*o,t[9]=m*p-v,t[2]=v*p-m,t[6]=l*o,t[10]=E*p+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(np,e,ip)}lookAt(e,t,n){let r=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Yi.crossVectors(n,Dn),Yi.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Yi.crossVectors(n,Dn)),Yi.normalize(),qa.crossVectors(Dn,Yi),r[0]=Yi.x,r[4]=qa.x,r[8]=Dn.x,r[1]=Yi.y,r[5]=qa.y,r[9]=Dn.y,r[2]=Yi.z,r[6]=qa.z,r[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],l=n[4],c=n[8],u=n[12],o=n[1],p=n[5],f=n[9],m=n[13],v=n[2],E=n[6],g=n[10],d=n[14],x=n[3],U=n[7],w=n[11],I=n[15],P=r[0],O=r[4],b=r[8],_=r[12],T=r[1],A=r[5],y=r[9],C=r[13],L=r[2],k=r[6],Y=r[10],$=r[14],re=r[3],q=r[7],j=r[11],J=r[15];return s[0]=a*P+l*T+c*L+u*re,s[4]=a*O+l*A+c*k+u*q,s[8]=a*b+l*y+c*Y+u*j,s[12]=a*_+l*C+c*$+u*J,s[1]=o*P+p*T+f*L+m*re,s[5]=o*O+p*A+f*k+m*q,s[9]=o*b+p*y+f*Y+m*j,s[13]=o*_+p*C+f*$+m*J,s[2]=v*P+E*T+g*L+d*re,s[6]=v*O+E*A+g*k+d*q,s[10]=v*b+E*y+g*Y+d*j,s[14]=v*_+E*C+g*$+d*J,s[3]=x*P+U*T+w*L+I*re,s[7]=x*O+U*A+w*k+I*q,s[11]=x*b+U*y+w*Y+I*j,s[15]=x*_+U*C+w*$+I*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],l=e[5],c=e[9],u=e[13],o=e[2],p=e[6],f=e[10],m=e[14],v=e[3],E=e[7],g=e[11],d=e[15],x=c*m-u*f,U=l*m-u*p,w=l*f-c*p,I=a*m-u*o,P=a*f-c*o,O=a*p-l*o;return t*(E*x-g*U+d*w)-n*(v*x-g*I+d*P)+r*(v*U-E*I+d*O)-s*(v*w-E*P+g*O)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],l=e[9],c=e[2],u=e[6],o=e[10];return t*(a*o-l*u)-n*(s*o-l*c)+r*(s*u-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],u=e[7],o=e[8],p=e[9],f=e[10],m=e[11],v=e[12],E=e[13],g=e[14],d=e[15],x=t*l-n*a,U=t*c-r*a,w=t*u-s*a,I=n*c-r*l,P=n*u-s*l,O=r*u-s*c,b=o*E-p*v,_=o*g-f*v,T=o*d-m*v,A=p*g-f*E,y=p*d-m*E,C=f*d-m*g,L=x*C-U*y+w*A+I*T-P*_+O*b;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/L;return e[0]=(l*C-c*y+u*A)*k,e[1]=(r*y-n*C-s*A)*k,e[2]=(E*O-g*P+d*I)*k,e[3]=(f*P-p*O-m*I)*k,e[4]=(c*T-a*C-u*_)*k,e[5]=(t*C-r*T+s*_)*k,e[6]=(g*w-v*O-d*U)*k,e[7]=(o*O-f*w+m*U)*k,e[8]=(a*y-l*T+u*b)*k,e[9]=(n*T-t*y-s*b)*k,e[10]=(v*P-E*w+d*x)*k,e[11]=(p*w-o*P-m*x)*k,e[12]=(l*_-a*A-c*b)*k,e[13]=(t*A-n*_+r*b)*k,e[14]=(E*U-v*I-g*x)*k,e[15]=(o*I-p*U+f*x)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,l=e.y,c=e.z,u=s*a,o=s*l;return this.set(u*a+n,u*l-r*c,u*c+r*l,0,u*l+r*c,o*l+n,o*c-r*a,0,u*c-r*l,o*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,l=t._z,c=t._w,u=s+s,o=a+a,p=l+l,f=s*u,m=s*o,v=s*p,E=a*o,g=a*p,d=l*p,x=c*u,U=c*o,w=c*p,I=n.x,P=n.y,O=n.z;return r[0]=(1-(E+d))*I,r[1]=(m+w)*I,r[2]=(v-U)*I,r[3]=0,r[4]=(m-w)*P,r[5]=(1-(f+d))*P,r[6]=(g+x)*P,r[7]=0,r[8]=(v+U)*O,r[9]=(g-x)*O,r[10]=(1-(f+E))*O,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Hr.set(r[0],r[1],r[2]).length(),l=Hr.set(r[4],r[5],r[6]).length(),c=Hr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),jn.copy(this);let u=1/a,o=1/l,p=1/c;return jn.elements[0]*=u,jn.elements[1]*=u,jn.elements[2]*=u,jn.elements[4]*=o,jn.elements[5]*=o,jn.elements[6]*=o,jn.elements[8]*=p,jn.elements[9]*=p,jn.elements[10]*=p,t.setFromRotationMatrix(jn),n.x=a,n.y=l,n.z=c,this}makePerspective(e,t,n,r,s,a,l=ni,c=!1){let u=this.elements,o=2*s/(t-e),p=2*s/(n-r),f=(t+e)/(t-e),m=(n+r)/(n-r),v,E;if(c)v=s/(a-s),E=a*s/(a-s);else if(l===ni)v=-(a+s)/(a-s),E=-2*a*s/(a-s);else if(l===es)v=-a/(a-s),E=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=o,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=p,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=v,u[14]=E,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,r,s,a,l=ni,c=!1){let u=this.elements,o=2/(t-e),p=2/(n-r),f=-(t+e)/(t-e),m=-(n+r)/(n-r),v,E;if(c)v=1/(a-s),E=a/(a-s);else if(l===ni)v=-2/(a-s),E=-(a+s)/(a-s);else if(l===es)v=-1/(a-s),E=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=o,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=p,u[9]=0,u[13]=m,u[2]=0,u[6]=0,u[10]=v,u[14]=E,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};qo.prototype.isMatrix4=!0;var Lt=qo,Hr=new te,jn=new Lt,np=new te(0,0,0),ip=new te(1,1,1),Yi=new te,qa=new te,Dn=new te,ph=new Lt,mh=new vi,_i=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],l=r[8],c=r[1],u=r[5],o=r[9],p=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-o,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(o,-1,1)),Math.abs(o)<.9999999?(this._y=Math.atan2(l,m),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(ft(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ft(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-o,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(l,m));break;case"XZY":this._z=Math.asin(-ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-o,m),this._y=0);break;default:Ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ph.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ph,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mh.setFromEuler(this),this.setFromQuaternion(mh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_i.DEFAULT_ORDER="XYZ";var Vs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},rp=0,gh=new te,Br=new vi,Ri=new Lt,Xa=new te,Ps=new te,sp=new te,ap=new vi,vh=new te(1,0,0),_h=new te(0,1,0),xh=new te(0,0,1),yh={type:"added"},op={type:"removed"},kr={type:"childadded",child:null},Sc={type:"childremoved",child:null},rn=class i extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=Ta(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new te,t=new _i,n=new vi,r=new te(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Lt},normalMatrix:{value:new et}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Br.setFromAxisAngle(e,t),this.quaternion.multiply(Br),this}rotateOnWorldAxis(e,t){return Br.setFromAxisAngle(e,t),this.quaternion.premultiply(Br),this}rotateX(e){return this.rotateOnAxis(vh,e)}rotateY(e){return this.rotateOnAxis(_h,e)}rotateZ(e){return this.rotateOnAxis(xh,e)}translateOnAxis(e,t){return gh.copy(e).applyQuaternion(this.quaternion),this.position.add(gh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vh,e)}translateY(e){return this.translateOnAxis(_h,e)}translateZ(e){return this.translateOnAxis(xh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xa.copy(e):Xa.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Ps,Xa,this.up):Ri.lookAt(Xa,Ps,this.up),this.quaternion.setFromRotationMatrix(Ri),r&&(Ri.extractRotation(r.matrixWorld),Br.setFromRotationMatrix(Ri),this.quaternion.premultiply(Br.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yh),kr.child=e,this.dispatchEvent(kr),kr.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(op),Sc.child=e,this.dispatchEvent(Sc),Sc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yh),kr.child=e,this.dispatchEvent(kr),kr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,e,sp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,ap,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let u=0,o=c.length;u<o;u++){let p=c[u];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(s(e.materials,this.material[c]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];r.animations.push(s(e.animations,c))}}if(t){let l=a(e.geometries),c=a(e.materials),u=a(e.textures),o=a(e.images),p=a(e.shapes),f=a(e.skeletons),m=a(e.animations),v=a(e.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),o.length>0&&(n.images=o),p.length>0&&(n.shapes=p),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(l){let c=[];for(let u in l){let o=l[u];delete o.metadata,c.push(o)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};rn.DEFAULT_UP=new te(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var dt=class extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},lp={type:"move"},is=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,l=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(let E of e.hand.values()){let g=t.getJointPose(E,n),d=this._getHandJoint(u,E);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}let o=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],f=o.position.distanceTo(p.position),m=.02,v=.005;u.inputState.pinching&&f>m+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=m-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(lp)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new dt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},yf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},Ya={h:0,s:0,l:0};function bc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var We=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ct.workingColorSpace){if(e=jd(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=bc(a,s,e+1/3),this.g=bc(a,s,e),this.b=bc(a,s,e-1/3)}return ct.colorSpaceToWorking(this,r),this}setStyle(e,t=fn){function n(s){s!==void 0&&parseFloat(s)<1&&Ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){let n=yf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=$r(e.r),this.g=$r(e.g),this.b=$r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return ct.workingToColorSpace(yn.copy(this),e),Math.round(ft(yn.r*255,0,255))*65536+Math.round(ft(yn.g*255,0,255))*256+Math.round(ft(yn.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(yn.copy(this),t);let n=yn.r,r=yn.g,s=yn.b,a=Math.max(n,r,s),l=Math.min(n,r,s),c,u,o=(l+a)/2;if(l===a)c=0,u=0;else{let p=a-l;switch(u=o<=.5?p/(a+l):p/(2-a-l),a){case n:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-n)/p+2;break;case s:c=(n-r)/p+4;break}c/=6}return e.h=c,e.s=u,e.l=o,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=fn){ct.workingToColorSpace(yn.copy(this),e);let t=yn.r,n=yn.g,r=yn.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+t,Ki.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ki),e.getHSL(Ya);let n=vc(Ki.h,Ya.h,t),r=vc(Ki.s,Ya.s,t),s=vc(Ki.l,Ya.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new We;We.NAMES=yf;var Gs=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new We(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Qi=class extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Qn=new te,Ci=new te,Tc=new te,Ii=new te,zr=new te,Vr=new te,Mh=new te,Ec=new te,wc=new te,Ac=new te,Rc=new kt,Cc=new kt,Ic=new kt,ji=class i{constructor(e=new te,t=new te,n=new te){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Qn.subVectors(e,t),r.cross(Qn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Qn.subVectors(r,t),Ci.subVectors(n,t),Tc.subVectors(e,t);let a=Qn.dot(Qn),l=Qn.dot(Ci),c=Qn.dot(Tc),u=Ci.dot(Ci),o=Ci.dot(Tc),p=a*u-l*l;if(p===0)return s.set(0,0,0),null;let f=1/p,m=(u*c-l*o)*f,v=(a*o-l*c)*f;return s.set(1-m-v,v,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,t,n,r,s,a,l,c){return this.getBarycoord(e,t,n,r,Ii)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ii.x),c.addScaledVector(a,Ii.y),c.addScaledVector(l,Ii.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Rc.setScalar(0),Cc.setScalar(0),Ic.setScalar(0),Rc.fromBufferAttribute(e,t),Cc.fromBufferAttribute(e,n),Ic.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Rc,s.x),a.addScaledVector(Cc,s.y),a.addScaledVector(Ic,s.z),a}static isFrontFacing(e,t,n,r){return Qn.subVectors(n,t),Ci.subVectors(e,t),Qn.cross(Ci).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),Qn.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,l;zr.subVectors(r,n),Vr.subVectors(s,n),Ec.subVectors(e,n);let c=zr.dot(Ec),u=Vr.dot(Ec);if(c<=0&&u<=0)return t.copy(n);wc.subVectors(e,r);let o=zr.dot(wc),p=Vr.dot(wc);if(o>=0&&p<=o)return t.copy(r);let f=c*p-o*u;if(f<=0&&c>=0&&o<=0)return a=c/(c-o),t.copy(n).addScaledVector(zr,a);Ac.subVectors(e,s);let m=zr.dot(Ac),v=Vr.dot(Ac);if(v>=0&&m<=v)return t.copy(s);let E=m*u-c*v;if(E<=0&&u>=0&&v<=0)return l=u/(u-v),t.copy(n).addScaledVector(Vr,l);let g=o*v-m*p;if(g<=0&&p-o>=0&&m-v>=0)return Mh.subVectors(s,r),l=(p-o)/(p-o+(m-v)),t.copy(r).addScaledVector(Mh,l);let d=1/(g+E+f);return a=E*d,l=f*d,t.copy(n).addScaledVector(zr,a).addScaledVector(Vr,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},xi=class{constructor(e=new te(1/0,1/0,1/0),t=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=s.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,ei):ei.fromBufferAttribute(s,a),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ka.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ka.copy(n.boundingBox)),Ka.applyMatrix4(e.matrixWorld),this.union(Ka)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ls),Za.subVectors(this.max,Ls),Gr.subVectors(e.a,Ls),Wr.subVectors(e.b,Ls),qr.subVectors(e.c,Ls),Zi.subVectors(Wr,Gr),Ji.subVectors(qr,Wr),xr.subVectors(Gr,qr);let t=[0,-Zi.z,Zi.y,0,-Ji.z,Ji.y,0,-xr.z,xr.y,Zi.z,0,-Zi.x,Ji.z,0,-Ji.x,xr.z,0,-xr.x,-Zi.y,Zi.x,0,-Ji.y,Ji.x,0,-xr.y,xr.x,0];return!Pc(t,Gr,Wr,qr,Za)||(t=[1,0,0,0,1,0,0,0,1],!Pc(t,Gr,Wr,qr,Za))?!1:(Ja.crossVectors(Zi,Ji),t=[Ja.x,Ja.y,Ja.z],Pc(t,Gr,Wr,qr,Za))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Pi=[new te,new te,new te,new te,new te,new te,new te,new te],ei=new te,Ka=new xi,Gr=new te,Wr=new te,qr=new te,Zi=new te,Ji=new te,xr=new te,Ls=new te,Za=new te,Ja=new te,yr=new te;function Pc(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){yr.fromArray(i,s);let l=r.x*Math.abs(yr.x)+r.y*Math.abs(yr.y)+r.z*Math.abs(yr.z),c=e.dot(yr),u=t.dot(yr),o=n.dot(yr);if(Math.max(-Math.max(c,u,o),Math.min(c,u,o))>l)return!1}return!0}var jt=new te,$a=new Xe,cp=0,cn=class extends gi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=mf,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$a.fromBufferAttribute(this,t),$a.applyMatrix3(e),this.setXY(t,$a.x,$a.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Is(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Is(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Is(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Is(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Is(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),n=Rn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),n=Rn(n,this.array),r=Rn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),n=Rn(n,this.array),r=Rn(r,this.array),s=Rn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ws=class extends cn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var qs=class extends cn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var xt=class extends cn{constructor(e,t,n){super(new Float32Array(e),t,n)}},up=new xi,Ds=new te,Lc=new te,Ni=class{constructor(e=new te,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):up.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ds.subVectors(e,this.center);let t=Ds.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ds,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ds.copy(e.center).add(Lc)),this.expandByPoint(Ds.copy(e.center).sub(Lc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},hp=0,Gn=new Lt,Dc=new rn,Xr=new te,Nn=new xi,Ns=new xi,on=new te,Kt=class i extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Ta(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jd(e)?qs:Ws)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new et().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,t,n){return Gn.makeTranslation(e,t,n),this.applyMatrix4(Gn),this}scale(e,t,n){return Gn.makeScale(e,t,n),this.applyMatrix4(Gn),this}lookAt(e){return Dc.lookAt(e),Dc.updateMatrix(),this.applyMatrix4(Dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xt(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Nn.setFromBufferAttribute(s),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ni);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){let n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let l=t[s];Ns.setFromBufferAttribute(l),this.morphTargetsRelative?(on.addVectors(Nn.min,Ns.min),Nn.expandByPoint(on),on.addVectors(Nn.max,Ns.max),Nn.expandByPoint(on)):(Nn.expandByPoint(Ns.min),Nn.expandByPoint(Ns.max))}Nn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)on.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(on));if(t)for(let s=0,a=t.length;s<a;s++){let l=t[s],c=this.morphTargetsRelative;for(let u=0,o=l.count;u<o;u++)on.fromBufferAttribute(l,u),c&&(Xr.fromBufferAttribute(e,u),on.add(Xr)),r=Math.max(r,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new cn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let l=[],c=[];for(let b=0;b<n.count;b++)l[b]=new te,c[b]=new te;let u=new te,o=new te,p=new te,f=new Xe,m=new Xe,v=new Xe,E=new te,g=new te;function d(b,_,T){u.fromBufferAttribute(n,b),o.fromBufferAttribute(n,_),p.fromBufferAttribute(n,T),f.fromBufferAttribute(s,b),m.fromBufferAttribute(s,_),v.fromBufferAttribute(s,T),o.sub(u),p.sub(u),m.sub(f),v.sub(f);let A=1/(m.x*v.y-v.x*m.y);isFinite(A)&&(E.copy(o).multiplyScalar(v.y).addScaledVector(p,-m.y).multiplyScalar(A),g.copy(p).multiplyScalar(m.x).addScaledVector(o,-v.x).multiplyScalar(A),l[b].add(E),l[_].add(E),l[T].add(E),c[b].add(g),c[_].add(g),c[T].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let b=0,_=x.length;b<_;++b){let T=x[b],A=T.start,y=T.count;for(let C=A,L=A+y;C<L;C+=3)d(e.getX(C+0),e.getX(C+1),e.getX(C+2))}let U=new te,w=new te,I=new te,P=new te;function O(b){I.fromBufferAttribute(r,b),P.copy(I);let _=l[b];U.copy(_),U.sub(I.multiplyScalar(I.dot(_))).normalize(),w.crossVectors(P,_);let A=w.dot(c[b])<0?-1:1;a.setXYZW(b,U.x,U.y,U.z,A)}for(let b=0,_=x.length;b<_;++b){let T=x[b],A=T.start,y=T.count;for(let C=A,L=A+y;C<L;C+=3)O(e.getX(C+0)),O(e.getX(C+1)),O(e.getX(C+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let r=new te,s=new te,a=new te,l=new te,c=new te,u=new te,o=new te,p=new te;if(e)for(let f=0,m=e.count;f<m;f+=3){let v=e.getX(f+0),E=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,E),a.fromBufferAttribute(t,g),o.subVectors(a,s),p.subVectors(r,s),o.cross(p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,E),u.fromBufferAttribute(n,g),l.add(o),c.add(o),u.add(o),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(E,c.x,c.y,c.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),o.subVectors(a,s),p.subVectors(r,s),o.cross(p),n.setXYZ(f+0,o.x,o.y,o.z),n.setXYZ(f+1,o.x,o.y,o.z),n.setXYZ(f+2,o.x,o.y,o.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(l,c){let u=l.array,o=l.itemSize,p=l.normalized,f=new u.constructor(c.length*o),m=0,v=0;for(let E=0,g=c.length;E<g;E++){l.isInterleavedBufferAttribute?m=c[E]*l.data.stride+l.offset:m=c[E]*o;for(let d=0;d<o;d++)f[v++]=u[m++]}return new cn(f,o,p)}if(this.index===null)return Ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let l in r){let c=r[l],u=e(c,n);t.setAttribute(l,u)}let s=this.morphAttributes;for(let l in s){let c=[],u=s[l];for(let o=0,p=u.length;o<p;o++){let f=u[o],m=e(f,n);c.push(m)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,c=a.length;l<c;l++){let u=a[l];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let u=n[c];e.data.attributes[c]=u.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let u=this.morphAttributes[c],o=[];for(let p=0,f=u.length;p<f;p++){let m=u[p];o.push(m.toJSON(e.data))}o.length>0&&(r[c]=o,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let u in r){let o=r[u];this.setAttribute(u,o.clone(t))}let s=e.morphAttributes;for(let u in s){let o=[],p=s[u];for(let f=0,m=p.length;f<m;f++)o.push(p[f].clone(t));this.morphAttributes[u]=o}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let u=0,o=a.length;u<o;u++){let p=a[u];this.addGroup(p.start,p.count,p.materialIndex)}let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Nc=new te,fp=new te,dp=new et,ti=class{constructor(e=new te(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Nc.subVectors(n,t).cross(fp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Nc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||dp.getNormalMatrix(e),r=this.coplanarPoint(Nc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},pp=0,yi=class extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Ta(),this.name="",this.type="Material",this.blending=us,this.side=or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$c,this.blendDst=jc,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mo,this.stencilZFail=mo,this.stencilZPass=mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ze(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let a=[];for(let l in s){let c=s[l];delete c.metadata,a.push(c)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new We().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ti().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Xe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Li=new te,Uc=new te,ja=new te,Qa=new te,Xs=class{constructor(e=new te,t=new te(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Uc.copy(e).add(t).multiplyScalar(.5),ja.copy(t).sub(e).normalize(),Qa.copy(this.origin).sub(Uc);let s=e.distanceTo(t)*.5,a=-this.direction.dot(ja),l=Qa.dot(this.direction),c=-Qa.dot(ja),u=Qa.lengthSq(),o=Math.abs(1-a*a),p,f,m,v;if(o>0)if(p=a*c-l,f=a*l-c,v=s*o,p>=0)if(f>=-v)if(f<=v){let E=1/o;p*=E,f*=E,m=p*(p+a*f+2*l)+f*(a*p+f+2*c)+u}else f=s,p=Math.max(0,-(a*f+l)),m=-p*p+f*(f+2*c)+u;else f=-s,p=Math.max(0,-(a*f+l)),m=-p*p+f*(f+2*c)+u;else f<=-v?(p=Math.max(0,-(-a*s+l)),f=p>0?-s:Math.min(Math.max(-s,-c),s),m=-p*p+f*(f+2*c)+u):f<=v?(p=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+u):(p=Math.max(0,-(a*s+l)),f=p>0?s:Math.min(Math.max(-s,-c),s),m=-p*p+f*(f+2*c)+u);else f=a>0?-s:s,p=Math.max(0,-(a*f+l)),m=-p*p+f*(f+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Uc).addScaledVector(ja,f),m}intersectSphere(e,t){if(e.radius<0)return null;Li.subVectors(e.center,this.origin);let n=Li.dot(this.direction),r=Li.dot(Li)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),l=n-a,c=n+a;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,l,c,u=1/this.direction.x,o=1/this.direction.y,p=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),o>=0?(s=(e.min.y-f.y)*o,a=(e.max.y-f.y)*o):(s=(e.max.y-f.y)*o,a=(e.min.y-f.y)*o),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),p>=0?(l=(e.min.z-f.z)*p,c=(e.max.z-f.z)*p):(l=(e.max.z-f.z)*p,c=(e.min.z-f.z)*p),n>c||l>r)||((l>n||n!==n)&&(n=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,n,r,s){let a=this.origin,l=this.direction,c=l.x,u=l.y,o=l.z,p=e.x-a.x,f=e.y-a.y,m=e.z-a.z,v=t.x-a.x,E=t.y-a.y,g=t.z-a.z,d=n.x-a.x,x=n.y-a.y,U=n.z-a.z,w=Math.abs(c),I=Math.abs(u),P=Math.abs(o),O,b,_,T,A,y,C,L,k,Y,$,re;if(w>=I&&w>=P?(_=c,y=p,k=v,re=d,c>=0?(O=u,b=o,T=f,A=m,C=E,L=g,Y=x,$=U):(O=o,b=u,T=m,A=f,C=g,L=E,Y=U,$=x)):I>=P?(_=u,y=f,k=E,re=x,u>=0?(O=o,b=c,T=m,A=p,C=g,L=v,Y=U,$=d):(O=c,b=o,T=p,A=m,C=v,L=g,Y=d,$=U)):(_=o,y=m,k=g,re=U,o>=0?(O=c,b=u,T=p,A=f,C=v,L=E,Y=d,$=x):(O=u,b=c,T=f,A=p,C=E,L=v,Y=x,$=d)),_===0)return null;let q=O/_,j=b/_,J=1/_,ee=T-q*y,he=A-j*y,_e=C-q*k,Ue=L-j*k,Oe=Y-q*re,oe=$-j*re,ue=Oe*Ue-oe*_e,be=ee*oe-he*Oe,Ge=_e*he-Ue*ee;if(r){if(ue<0||be<0||Ge<0)return null}else if((ue<0||be<0||Ge<0)&&(ue>0||be>0||Ge>0))return null;let Te=ue+be+Ge;if(Te===0)return null;let Je=J*(ue*y+be*k+Ge*re);return(Te>0?Je<0:Je>0)?null:this.at(Je/Te,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Mi=class extends yi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=Xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Sh=new Lt,Mr=new Xs,eo=new Ni,bh=new te,to=new te,no=new te,io=new te,Oc=new te,ro=new te,Th=new te,so=new te,Ne=class extends rn{constructor(e=new Kt,t=new Mi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let l=this.morphTargetInfluences;if(s&&l){ro.set(0,0,0);for(let c=0,u=s.length;c<u;c++){let o=l[c],p=s[c];o!==0&&(Oc.fromBufferAttribute(p,e),a?ro.addScaledVector(Oc,o):ro.addScaledVector(Oc.sub(t),o))}t.add(ro)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(s),Mr.copy(e.ray).recast(e.near),!(eo.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(eo,bh)===null||Mr.origin.distanceToSquared(bh)>(e.far-e.near)**2))&&(Sh.copy(s).invert(),Mr.copy(e.ray).applyMatrix4(Sh),!(n.boundingBox!==null&&Mr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Mr)))}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,l=s.index,c=s.attributes.position,u=s.attributes.uv,o=s.attributes.uv1,p=s.attributes.normal,f=s.groups,m=s.drawRange;if(l!==null)if(Array.isArray(a))for(let v=0,E=f.length;v<E;v++){let g=f[v],d=a[g.materialIndex],x=Math.max(g.start,m.start),U=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let w=x,I=U;w<I;w+=3){let P=l.getX(w),O=l.getX(w+1),b=l.getX(w+2);r=ao(this,d,e,n,u,o,p,P,O,b),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let v=Math.max(0,m.start),E=Math.min(l.count,m.start+m.count);for(let g=v,d=E;g<d;g+=3){let x=l.getX(g),U=l.getX(g+1),w=l.getX(g+2);r=ao(this,a,e,n,u,o,p,x,U,w),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,E=f.length;v<E;v++){let g=f[v],d=a[g.materialIndex],x=Math.max(g.start,m.start),U=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let w=x,I=U;w<I;w+=3){let P=w,O=w+1,b=w+2;r=ao(this,d,e,n,u,o,p,P,O,b),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let v=Math.max(0,m.start),E=Math.min(c.count,m.start+m.count);for(let g=v,d=E;g<d;g+=3){let x=g,U=g+1,w=g+2;r=ao(this,a,e,n,u,o,p,x,U,w),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function mp(i,e,t,n,r,s,a,l){let c;if(e.side===mn?c=n.intersectTriangle(a,s,r,!0,l):c=n.intersectTriangle(r,s,a,e.side===or,l),c===null)return null;so.copy(l),so.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(so);return u<t.near||u>t.far?null:{distance:u,point:so.clone(),object:i}}function ao(i,e,t,n,r,s,a,l,c,u){i.getVertexPosition(l,to),i.getVertexPosition(c,no),i.getVertexPosition(u,io);let o=mp(i,e,t,n,to,no,io,Th);if(o){let p=new te;ji.getBarycoord(Th,to,no,io,p),r&&(o.uv=ji.getInterpolatedAttribute(r,l,c,u,p,new Xe)),s&&(o.uv1=ji.getInterpolatedAttribute(s,l,c,u,p,new Xe)),a&&(o.normal=ji.getInterpolatedAttribute(a,l,c,u,p,new te),o.normal.dot(n.direction)>0&&o.normal.multiplyScalar(-1));let f={a:l,b:c,c:u,normal:new te,materialIndex:0};ji.getNormal(to,no,io,f.normal),o.face=f,o.barycoord=p}return o}var Tr=class extends En{constructor(e=null,t=1,n=1,r,s,a,l,c,u=un,o=un,p,f){super(null,a,l,c,u,o,r,s,p,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ys=class extends cn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Yr=new Lt,Eh=new Lt,oo=[],wh=new xi,gp=new Lt,Us=new Ne,Os=new Ni,Ks=class extends Ne{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ys(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,gp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Yr),wh.copy(e.boundingBox).applyMatrix4(Yr),this.boundingBox.union(wh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ni),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Yr),Os.copy(e.boundingSphere).applyMatrix4(Yr),this.boundingSphere.union(Os)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let l=0;l<n.length;l++)n[l]=r[a+l]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Us.geometry=this.geometry,Us.material=this.material,Us.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Os.copy(this.boundingSphere),Os.applyMatrix4(n),e.ray.intersectsSphere(Os)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Yr),Eh.multiplyMatrices(n,Yr),Us.matrixWorld=Eh,Us.raycast(e,oo);for(let a=0,l=oo.length;a<l;a++){let c=oo[a];c.instanceId=s,c.object=this,t.push(c)}oo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ys(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Tr(new Float32Array(r*this.count),r,this.count,Qo,Xn));let s=this.morphTexture.source.data.data,a=0;for(let u=0;u<n.length;u++)a+=n[u];let l=this.geometry.morphTargetsRelative?1:1-a,c=r*e;return s[c]=l,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Sr=new Ni,vp=new Xe(.5,.5),lo=new te,rs=class{constructor(e=new ti,t=new ti,n=new ti,r=new ti,s=new ti,a=new ti){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(r),l[4].copy(s),l[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ni,n=!1){let r=this.planes,s=e.elements,a=s[0],l=s[1],c=s[2],u=s[3],o=s[4],p=s[5],f=s[6],m=s[7],v=s[8],E=s[9],g=s[10],d=s[11],x=s[12],U=s[13],w=s[14],I=s[15];if(r[0].setComponents(u-a,m-o,d-v,I-x).normalize(),r[1].setComponents(u+a,m+o,d+v,I+x).normalize(),r[2].setComponents(u+l,m+p,d+E,I+U).normalize(),r[3].setComponents(u-l,m-p,d-E,I-U).normalize(),n)r[4].setComponents(c,f,g,w).normalize(),r[5].setComponents(u-c,m-f,d-g,I-w).normalize();else if(r[4].setComponents(u-c,m-f,d-g,I-w).normalize(),t===ni)r[5].setComponents(u+c,m+f,d+g,I+w).normalize();else if(t===es)r[5].setComponents(c,f,g,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(e){Sr.center.set(0,0,0);let t=vp.distanceTo(e.center);return Sr.radius=.7071067811865476+t,Sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(lo.x=r.normal.x>0?e.max.x:e.min.x,lo.y=r.normal.y>0?e.max.y:e.min.y,lo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(lo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Co=class extends yi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ah=new Lt,Gc=new Xs,co=new Ni,uo=new te,Zs=class extends rn{constructor(e=new Kt,t=new Co){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(r),co.radius+=s,e.ray.intersectsSphere(co)===!1)return;Ah.copy(r).invert(),Gc.copy(e.ray).applyMatrix4(Ah);let l=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,u=n.index,p=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let v=f,E=m;v<E;v++){let g=u.getX(v);uo.fromBufferAttribute(p,g),Rh(uo,g,c,r,e,t,this)}}else{let f=Math.max(0,a.start),m=Math.min(p.count,a.start+a.count);for(let v=f,E=m;v<E;v++)uo.fromBufferAttribute(p,v),Rh(uo,v,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}};function Rh(i,e,t,n,r,s,a){let l=Gc.distanceSqToPoint(i);if(l<t){let c=new te;Gc.closestPointToPoint(i,c),c.applyMatrix4(n);let u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(l),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Js=class extends En{constructor(e=[],t=lr,n,r,s,a,l,c,u,o){super(e,t,n,r,s,a,l,c,u,o),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},$s=class extends En{constructor(e,t,n,r,s,a,l,c,u){super(e,t,n,r,s,a,l,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};var er=class extends En{constructor(e,t,n=si,r,s,a,l=un,c=un,u,o=mi,p=1){if(o!==mi&&o!==ur)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:p};super(f,r,s,a,l,c,o,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ns(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Io=class extends er{constructor(e,t=si,n=lr,r,s,a=un,l=un,c,u=mi){let o={width:e,height:e,depth:1},p=[o,o,o,o,o,o];super(e,e,t,n,r,s,a,l,c,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},js=class extends En{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},en=class i extends Kt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let l=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],u=[],o=[],p=[],f=0,m=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,r,a,2),v("x","z","y",1,-1,e,n,-t,r,a,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new xt(u,3)),this.setAttribute("normal",new xt(o,3)),this.setAttribute("uv",new xt(p,2));function v(E,g,d,x,U,w,I,P,O,b,_){let T=w/O,A=I/b,y=w/2,C=I/2,L=P/2,k=O+1,Y=b+1,$=0,re=0,q=new te;for(let j=0;j<Y;j++){let J=j*A-C;for(let ee=0;ee<k;ee++){let he=ee*T-y;q[E]=he*x,q[g]=J*U,q[d]=L,u.push(q.x,q.y,q.z),q[E]=0,q[g]=0,q[d]=P>0?1:-1,o.push(q.x,q.y,q.z),p.push(ee/O),p.push(1-j/b),$+=1}}for(let j=0;j<b;j++)for(let J=0;J<O;J++){let ee=f+J+k*j,he=f+J+k*(j+1),_e=f+(J+1)+k*(j+1),Ue=f+(J+1)+k*j;c.push(ee,he,Ue),c.push(he,_e,Ue),re+=6}l.addGroup(m,re,_),m+=re,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Qs=class i extends Kt{constructor(e=1,t=1,n=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let a=[],l=[],c=[],u=[],o=t/2,p=Math.PI/2*e,f=t,m=2*p+f,v=n*2+s,E=r+1,g=new te,d=new te;for(let x=0;x<=v;x++){let U=0,w=0,I=0,P=0;if(x<=n){let _=x/n,T=_*Math.PI/2;w=-o-e*Math.cos(T),I=e*Math.sin(T),P=-e*Math.cos(T),U=_*p}else if(x<=n+s){let _=(x-n)/s;w=-o+_*t,I=e,P=0,U=p+_*f}else{let _=(x-n-s)/n,T=_*Math.PI/2;w=o+e*Math.sin(T),I=e*Math.cos(T),P=e*Math.sin(T),U=p+f+_*p}let O=Math.max(0,Math.min(1,U/m)),b=0;x===0?b=.5/r:x===v&&(b=-.5/r);for(let _=0;_<=r;_++){let T=_/r,A=T*Math.PI*2,y=Math.sin(A),C=Math.cos(A);d.x=-I*C,d.y=w,d.z=I*y,l.push(d.x,d.y,d.z),g.set(-I*C,P,I*y),g.normalize(),c.push(g.x,g.y,g.z),u.push(T+b,O)}if(x>0){let _=(x-1)*E;for(let T=0;T<r;T++){let A=_+T,y=_+T+1,C=x*E+T,L=x*E+T+1;a.push(A,y,C),a.push(y,L,C)}}}this.setIndex(a),this.setAttribute("position",new xt(l,3)),this.setAttribute("normal",new xt(c,3)),this.setAttribute("uv",new xt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var ss=class i extends Kt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:l,thetaLength:c};let u=this;r=Math.floor(r),s=Math.floor(s);let o=[],p=[],f=[],m=[],v=0,E=[],g=n/2,d=0;x(),a===!1&&(e>0&&U(!0),t>0&&U(!1)),this.setIndex(o),this.setAttribute("position",new xt(p,3)),this.setAttribute("normal",new xt(f,3)),this.setAttribute("uv",new xt(m,2));function x(){let w=new te,I=new te,P=0,O=(t-e)/n;for(let b=0;b<=s;b++){let _=[],T=b/s,A=T*(t-e)+e;for(let y=0;y<=r;y++){let C=y/r,L=C*c+l,k=Math.sin(L),Y=Math.cos(L);I.x=A*k,I.y=-T*n+g,I.z=A*Y,p.push(I.x,I.y,I.z),w.set(k,O,Y).normalize(),f.push(w.x,w.y,w.z),m.push(C,1-T),_.push(v++)}E.push(_)}for(let b=0;b<r;b++)for(let _=0;_<s;_++){let T=E[_][b],A=E[_+1][b],y=E[_+1][b+1],C=E[_][b+1];(e>0||_!==0)&&(o.push(T,A,C),P+=3),(t>0||_!==s-1)&&(o.push(A,y,C),P+=3)}u.addGroup(d,P,0),d+=P}function U(w){let I=v,P=new Xe,O=new te,b=0,_=w===!0?e:t,T=w===!0?1:-1;for(let y=1;y<=r;y++)p.push(0,g*T,0),f.push(0,T,0),m.push(.5,.5),v++;let A=v;for(let y=0;y<=r;y++){let L=y/r*c+l,k=Math.cos(L),Y=Math.sin(L);O.x=_*Y,O.y=g*T,O.z=_*k,p.push(O.x,O.y,O.z),f.push(0,T,0),P.x=k*.5+.5,P.y=Y*.5*T+.5,m.push(P.x,P.y),v++}for(let y=0;y<r;y++){let C=I+y,L=A+y;w===!0?o.push(L,L+1,C):o.push(L+1,L,C),b+=3}u.addGroup(d,b,w===!0?1:2),d+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ea=class i extends ss{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,l=Math.PI*2){super(0,e,t,n,r,s,a,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:l}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ta=class i extends Kt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,l=Math.floor(n),c=Math.floor(r),u=l+1,o=c+1,p=e/l,f=t/c,m=[],v=[],E=[],g=[];for(let d=0;d<o;d++){let x=d*f-a;for(let U=0;U<u;U++){let w=U*p-s;v.push(w,-x,0),E.push(0,0,1),g.push(U/l),g.push(1-d/c)}}for(let d=0;d<c;d++)for(let x=0;x<l;x++){let U=x+u*d,w=x+u*(d+1),I=x+1+u*(d+1),P=x+1+u*d;m.push(U,w,P),m.push(w,I,P)}this.setIndex(m),this.setAttribute("position",new xt(v,3)),this.setAttribute("normal",new xt(E,3)),this.setAttribute("uv",new xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var tr=class i extends Kt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+l,Math.PI),u=0,o=[],p=new te,f=new te,m=[],v=[],E=[],g=[];for(let d=0;d<=n;d++){let x=[],U=d/n,w=a+U*l,I=e*Math.cos(w),P=Math.sqrt(e*e-I*I),O=0;d===0&&a===0?O=.5/t:d===n&&c===Math.PI&&(O=-.5/t);for(let b=0;b<=t;b++){let _=b/t,T=r+_*s;p.x=-P*Math.cos(T),p.y=I,p.z=P*Math.sin(T),v.push(p.x,p.y,p.z),f.copy(p).normalize(),E.push(f.x,f.y,f.z),g.push(_+O,1-U),x.push(u++)}o.push(x)}for(let d=0;d<n;d++)for(let x=0;x<t;x++){let U=o[d][x+1],w=o[d][x],I=o[d+1][x],P=o[d+1][x+1];(d!==0||a>0)&&m.push(U,w,P),(d!==n-1||c<Math.PI)&&m.push(w,I,P)}this.setIndex(m),this.setAttribute("position",new xt(v,3)),this.setAttribute("normal",new xt(E,3)),this.setAttribute("uv",new xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var nr=class i extends Kt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,a=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:l},n=Math.floor(n),r=Math.floor(r);let c=[],u=[],o=[],p=[],f=new te,m=new te,v=new te;for(let E=0;E<=n;E++){let g=a+E/n*l;for(let d=0;d<=r;d++){let x=d/r*s;m.x=(e+t*Math.cos(g))*Math.cos(x),m.y=(e+t*Math.cos(g))*Math.sin(x),m.z=t*Math.sin(g),u.push(m.x,m.y,m.z),f.x=e*Math.cos(x),f.y=e*Math.sin(x),v.subVectors(m,f).normalize(),o.push(v.x,v.y,v.z),p.push(d/r),p.push(E/n)}}for(let E=1;E<=n;E++)for(let g=1;g<=r;g++){let d=(r+1)*E+g-1,x=(r+1)*(E-1)+g-1,U=(r+1)*(E-1)+g,w=(r+1)*E+g;c.push(d,x,w),c.push(x,U,w)}this.setIndex(c),this.setAttribute("position",new xt(u,3)),this.setAttribute("normal",new xt(o,3)),this.setAttribute("uv",new xt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Cr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(Ch(r))r.isRenderTargetTexture?(Ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Ch(r[0])){let s=[];for(let a=0,l=r.length;a<l;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Mn(i){let e={};for(let t=0;t<i.length;t++){let n=Cr(i[t]);for(let r in n)e[r]=n[r]}return e}function Ch(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function _p(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function lu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}var Oi={clone:Cr,merge:Mn},xp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Vt=class extends yi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xp,this.fragmentShader=yp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cr(e.uniforms),this.uniformsGroups=_p(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new We().setHex(r.value);break;case"v2":this.uniforms[n].value=new Xe().fromArray(r.value);break;case"v3":this.uniforms[n].value=new te().fromArray(r.value);break;case"v4":this.uniforms[n].value=new kt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new et().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Lt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},as=class extends Vt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},pn=class extends yi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ba,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var na=class extends yi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ba,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=Xo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Po=class extends yi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=af,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Lo=class extends yi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Kr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Fc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ir=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let l=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){let l=t[1];e<l&&(n=2,s=l);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let l=n+a>>>1;e<t[l]?a=l:n=l+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Do=class extends ir{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kc,endingEnd:kc}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,l=r[s],c=r[a];if(l===void 0)switch(this.getSettings_().endingStart){case zc:s=e,l=2*t-n;break;case Vc:s=r.length-2,l=t+r[s]-r[s+1];break;default:s=e,l=n}if(c===void 0)switch(this.getSettings_().endingEnd){case zc:a=e,c=2*n-t;break;case Vc:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}let u=(n-t)*.5,o=this.valueSize;this._weightPrev=u/(t-l),this._weightNext=u/(c-n),this._offsetPrev=s*o,this._offsetNext=a*o}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,u=c-l,o=this._offsetPrev,p=this._offsetNext,f=this._weightPrev,m=this._weightNext,v=(n-t)/(r-t),E=v*v,g=E*v,d=-f*g+2*f*E-f*v,x=(1+f)*g+(-1.5-2*f)*E+(-.5+f)*v+1,U=(-1-m)*g+(1.5+m)*E+.5*v,w=m*g-m*E;for(let I=0;I!==l;++I)s[I]=d*a[o+I]+x*a[u+I]+U*a[c+I]+w*a[p+I];return s}},No=class extends ir{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,u=c-l,o=(n-t)/(r-t),p=1-o;for(let f=0;f!==l;++f)s[f]=a[u+f]*p+a[c+f]*o;return s}},Uo=class extends ir{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Oo=class extends ir{interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,u=c-l,o=this.inTangents,p=this.outTangents;if(!o||!p){let v=(n-t)/(r-t),E=1-v;for(let g=0;g!==l;++g)s[g]=a[u+g]*E+a[c+g]*v;return s}let f=l*2,m=e-1;for(let v=0;v!==l;++v){let E=a[u+v],g=a[c+v],d=m*f+v*2,x=p[d],U=p[d+1],w=e*f+v*2,I=o[w],P=o[w+1],O=Sp(n,t,x,I,r);s[v]=Mf(O,E,U,P,g)}return s}};function Mf(i,e,t,n,r){let s=1-i;return s*s*s*e+3*s*s*i*t+3*s*i*i*n+i*i*i*r}function Mp(i,e,t,n,r){let s=1-i;return 3*s*s*(t-e)+6*s*i*(n-t)+3*i*i*(r-n)}function Sp(i,e,t,n,r){let s=(i-e)/(r-e);for(let a=0;a<8;a++){let l=Mf(s,e,t,n,r)-i;if(Math.abs(l)<1e-10)break;let c=Mp(s,e,t,n,r);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-l/c))}return s}var Un=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Kr(t,this.TimeBufferType),this.values=Kr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Kr(e.times,Array),values:Kr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),Fc(e.settings)&&(n.settings={inTangents:Kr(e.settings.inTangents,Array),outTangents:Kr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Uo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new No(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Do(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Oo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Fs:t=this.InterpolantFactoryMethodDiscrete;break;case To:t=this.InterpolantFactoryMethodLinear;break;case po:t=this.InterpolantFactoryMethodSmooth;break;case Bc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ze("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fs;case this.InterpolantFactoryMethodLinear:return To;case this.InterpolantFactoryMethodSmooth:return po;case this.InterpolantFactoryMethodBezier:return Bc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Fc(this.settings)&&(Ih(this.settings.inTangents,e),Ih(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let l=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*l,a*l)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&($e("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&($e("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let l=0;l!==s;l++){let c=n[l];if(typeof c=="number"&&isNaN(c)){$e("KeyframeTrack: Time is not a valid number.",this,l,c),e=!1;break}if(a!==null&&a>c){$e("KeyframeTrack: Out of order keys.",this,l,c,a),e=!1;break}a=c}if(r!==void 0&&$d(r))for(let l=0,c=r.length;l!==c;++l){let u=r[l];if(isNaN(u)){$e("KeyframeTrack: Value is not a valid number.",this,l,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===po,s=e.length-1,a=1;for(let l=1;l<s;++l){let c=!1,u=e[l],o=e[l+1];if(u!==o&&(l!==1||u!==e[0]))if(r)c=!0;else{let p=l*n,f=p-n,m=p+n;for(let v=0;v!==n;++v){let E=t[p+v];if(E!==t[f+v]||E!==t[m+v]){c=!0;break}}}if(c){if(l!==a){e[a]=e[l];let p=l*n,f=a*n;for(let m=0;m!==n;++m)t[f+m]=t[p+m]}++a}}if(s>0){e[a]=e[s];for(let l=s*n,c=a*n,u=0;u!==n;++u)t[c+u]=t[l+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Fc(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Ih(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Un.prototype.ValueTypeName="";Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=To;var rr=class extends Un{constructor(e,t,n){super(e,t,n)}};rr.prototype.ValueTypeName="bool";rr.prototype.ValueBufferType=Array;rr.prototype.DefaultInterpolation=Fs;rr.prototype.InterpolantFactoryMethodLinear=void 0;rr.prototype.InterpolantFactoryMethodSmooth=void 0;var Fo=class extends Un{constructor(e,t,n,r){super(e,t,n,r)}};Fo.prototype.ValueTypeName="color";var Ho=class extends Un{constructor(e,t,n,r){super(e,t,n,r)}};Ho.prototype.ValueTypeName="number";var Bo=class extends ir{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=(n-t)/(r-t),u=e*l;for(let o=u+l;u!==o;u+=4)vi.slerpFlat(s,0,a,u-l,a,u,c);return s}},ia=class extends Un{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Bo(this.times,this.values,this.getValueSize(),e)}};ia.prototype.ValueTypeName="quaternion";ia.prototype.InterpolantFactoryMethodSmooth=void 0;var sr=class extends Un{constructor(e,t,n){super(e,t,n)}};sr.prototype.ValueTypeName="string";sr.prototype.ValueBufferType=Array;sr.prototype.DefaultInterpolation=Fs;sr.prototype.InterpolantFactoryMethodLinear=void 0;sr.prototype.InterpolantFactoryMethodSmooth=void 0;var ko=class extends Un{constructor(e,t,n,r){super(e,t,n,r)}};ko.prototype.ValueTypeName="vector";var zo=class{constructor(e,t,n){let r=this,s=!1,a=0,l=0,c,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(o){l++,s===!1&&r.onStart!==void 0&&r.onStart(o,a,l),s=!0},this.itemEnd=function(o){a++,r.onProgress!==void 0&&r.onProgress(o,a,l),a===l&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(o){r.onError!==void 0&&r.onError(o)},this.resolveURL=function(o){return o=o.normalize("NFC"),c?c(o):o},this.setURLModifier=function(o){return c=o,this},this.addHandler=function(o,p){return u.push(o,p),this},this.removeHandler=function(o){let p=u.indexOf(o);return p!==-1&&u.splice(p,2),this},this.getHandler=function(o){for(let p=0,f=u.length;p<f;p+=2){let m=u[p],v=u[p+1];if(m.global&&(m.lastIndex=0),m.test(o))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Sf=new zo,Vo=class{constructor(e){this.manager=e!==void 0?e:Sf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Vo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Er=class extends rn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},os=class extends Er{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Hc=new Lt,Ph=new te,Lh=new te,ra=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rs,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ph.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ph),Lh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Hc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Hc,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=r?r.z/s.x:1,l=r?r.w/s.y:1,c=r?r.x/s.x:0,u=r?r.y/s.y:0;e.coordinateSystem===es||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+u,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+u,0,0,.5,.5,0,0,0,1),t.multiply(Hc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ho=new te,fo=new vi,di=new te,sa=class extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ho,fo,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ho,fo,di.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ho,fo,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ho,fo,di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},$i=new te,Dh=new Xe,Nh=new Xe,ln=class extends sa{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Eo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(gc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Eo*2*Math.atan(Math.tan(gc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,t){return this.getViewBounds(e,Dh,Nh),t.subVectors(Nh,Dh)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(gc*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/u,r*=a.width/c,n*=a.height/u}let l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Wc=class extends ra{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0}},ii=class extends Er{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Wc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ar=class extends sa{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,l=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,o=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,l-=o*this.view.offsetY,c=l-o*this.view.height}this.projectionMatrix.makeOrthographic(s,a,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},qc=class extends ra{constructor(){super(new ar(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},aa=class extends Er{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new qc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},ls=class extends Er{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Zr=-90,Jr=1,Go=class extends rn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ln(Zr,Jr,e,t);r.layers=this.layers,this.add(r);let s=new ln(Zr,Jr,e,t);s.layers=this.layers,this.add(s);let a=new ln(Zr,Jr,e,t);a.layers=this.layers,this.add(a);let l=new ln(Zr,Jr,e,t);l.layers=this.layers,this.add(l);let c=new ln(Zr,Jr,e,t);c.layers=this.layers,this.add(c);let u=new ln(Zr,Jr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,l,c]=t;for(let u of t)this.remove(u);if(e===ni)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===es)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,l,c,u,o]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(p,f,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},Wo=class extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},oa=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=bp.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function bp(){this._document.hidden===!1&&this.reset()}var cu="\\[\\]\\.:\\/",Tp=new RegExp("["+cu+"]","g"),uu="[^"+cu+"]",Ep="[^"+cu.replace("\\.","")+"]",wp=/((?:WC+[\/:])*)/.source.replace("WC",uu),Ap=/(WCOD+)?/.source.replace("WCOD",Ep),Rp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uu),Cp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uu),Ip=new RegExp("^"+wp+Ap+Rp+Cp+"$"),Pp=["material","materials","bones","map"],Xc=class{constructor(e,t,n){let r=n||Ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ht=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Tp,"")}static parseTrackName(e){let t=Ip.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Pp.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let l=s[a];if(l.name===t||l.uuid===t)return l;let c=n(l.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){$e("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){$e("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let o=0;o<e.length;o++)if(e[o].name===u){u=o;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){$e("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){$e("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){$e("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let a=e[r];if(a===void 0){let u=t.nodeName;$e("PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ht.Composite=Xc;Ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ht.prototype.GetterByBindingType=[Ht.prototype._getValue_direct,Ht.prototype._getValue_array,Ht.prototype._getValue_arrayElement,Ht.prototype._getValue_toArray];Ht.prototype.SetterByBindingTypeAndVersioning=[[Ht.prototype._setValue_direct,Ht.prototype._setValue_direct_setNeedsUpdate,Ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_array,Ht.prototype._setValue_array_setNeedsUpdate,Ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_arrayElement,Ht.prototype._setValue_arrayElement_setNeedsUpdate,Ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_fromArray,Ht.prototype._setValue_fromArray_setNeedsUpdate,Ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hx=new Float32Array(1);var gu=class gu{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};gu.prototype.isMatrix2=!0;var Yc=gu;function hu(i,e,t,n){let r=Lp(n);switch(t){case ru:return i*e;case Qo:return i*e/r.components*r.byteLength;case el:return i*e/r.components*r.byteLength;case hr:return i*e*2/r.components*r.byteLength;case tl:return i*e*2/r.components*r.byteLength;case su:return i*e*3/r.components*r.byteLength;case Yn:return i*e*4/r.components*r.byteLength;case nl:return i*e*4/r.components*r.byteLength;case va:case _a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xa:case ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case rl:case al:return Math.max(i,16)*Math.max(e,8)/4;case il:case sl:return Math.max(i,8)*Math.max(e,8)/2;case ol:case ll:case ul:case hl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case cl:case Ma:case fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case dl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ml:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case gl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case vl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case _l:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case xl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case yl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ml:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case bl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Tl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case El:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case wl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Al:case Rl:case Cl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Il:case Pl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Sa:case Ll:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Lp(i){switch(i){case Cn:case eu:return{byteLength:1,components:1};case hs:case tu:case gn:return{byteLength:2,components:1};case $o:case jo:return{byteLength:2,components:4};case si:case Jo:case Xn:return{byteLength:4,components:1};case nu:case iu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?Ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Wf(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Np(i){let e=new WeakMap;function t(l,c){let u=l.array,o=l.usage,p=u.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,u,o),l.onUploadCallback();let m;if(u instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array!="undefined"&&u instanceof Float16Array)m=i.HALF_FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=i.SHORT;else if(u instanceof Uint32Array)m=i.UNSIGNED_INT;else if(u instanceof Int32Array)m=i.INT;else if(u instanceof Int8Array)m=i.BYTE;else if(u instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function n(l,c,u){let o=c.array,p=c.updateRanges;if(i.bindBuffer(u,l),p.length===0)i.bufferSubData(u,0,o);else{p.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<p.length;m++){let v=p[f],E=p[m];E.start<=v.start+v.count+1?v.count=Math.max(v.count,E.start+E.count-v.start):(++f,p[f]=E)}p.length=f+1;for(let m=0,v=p.length;m<v;m++){let E=p[m];i.bufferSubData(u,E.start*o.BYTES_PER_ELEMENT,o,E.start,E.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);let c=e.get(l);c&&(i.deleteBuffer(c.buffer),e.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let o=e.get(l);(!o||o.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let u=e.get(l);if(u===void 0)e.set(l,t(l,c));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,l,c),u.version=l.version}}return{get:r,remove:s,update:a}}var Up=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Op=`#ifdef USE_ALPHAHASH
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
#endif`,Fp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zp=`#ifdef USE_AOMAP
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
#endif`,Vp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gp=`#ifdef USE_BATCHING
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
#endif`,Wp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kp=`#ifdef USE_IRIDESCENCE
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
#endif`,Zp=`#ifdef USE_BUMPMAP
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
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,em=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,tm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,nm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,im=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,rm=`#define PI 3.141592653589793
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
} // validated`,sm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,am=`vec3 transformedNormal = objectNormal;
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
#endif`,om=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,um=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hm="gl_FragColor = linearToOutputTexel( gl_FragColor );",fm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dm=`#ifdef USE_ENVMAP
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
#endif`,pm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,mm=`#ifdef USE_ENVMAP
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
#endif`,gm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vm=`#ifdef USE_ENVMAP
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
#endif`,_m=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ym=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sm=`#ifdef USE_GRADIENTMAP
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
}`,bm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Am=`#ifdef USE_ENVMAP
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
#endif`,Rm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Im=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lm=`PhysicalMaterial material;
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
#endif`,Dm=`uniform sampler2D dfgLUT;
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
}`,Nm=`
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
#endif`,Um=`#if defined( RE_IndirectDiffuse )
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
#endif`,Om=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Hm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,km=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qm=`#if defined( USE_POINTS_UV )
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
#endif`,Xm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ym=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Km=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$m=`#ifdef USE_MORPHTARGETS
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
#endif`,jm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,e0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,t0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,r0=`#ifdef USE_NORMALMAP
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
#endif`,s0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,a0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,l0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,c0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,u0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,h0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,f0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,d0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,p0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,m0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,g0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,v0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,x0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,y0=`float getShadowMask() {
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
}`,M0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,S0=`#ifdef USE_SKINNING
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
#endif`,b0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,T0=`#ifdef USE_SKINNING
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
#endif`,E0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,w0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,A0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,R0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,C0=`#ifdef USE_TRANSMISSION
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
#endif`,I0=`#ifdef USE_TRANSMISSION
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
#endif`,P0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,U0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,O0=`uniform sampler2D t2D;
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
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,B0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z0=`#include <common>
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
}`,V0=`#if DEPTH_PACKING == 3200
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
}`,G0=`#define DISTANCE
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
}`,W0=`#define DISTANCE
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
}`,q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y0=`uniform float scale;
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
}`,K0=`uniform vec3 diffuse;
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
}`,Z0=`#include <common>
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
}`,J0=`uniform vec3 diffuse;
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
}`,$0=`#define LAMBERT
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
}`,j0=`#define LAMBERT
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
}`,Q0=`#define MATCAP
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
}`,eg=`#define MATCAP
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
}`,tg=`#define NORMAL
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
}`,ng=`#define NORMAL
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
}`,ig=`#define PHONG
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
}`,rg=`#define PHONG
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
}`,sg=`#define STANDARD
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
}`,ag=`#define STANDARD
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
}`,og=`#define TOON
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
}`,lg=`#define TOON
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
}`,cg=`uniform float size;
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
}`,ug=`uniform vec3 diffuse;
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
}`,hg=`#include <common>
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
}`,fg=`uniform vec3 color;
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
}`,dg=`uniform float rotation;
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
}`,pg=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:Up,alphahash_pars_fragment:Op,alphamap_fragment:Fp,alphamap_pars_fragment:Hp,alphatest_fragment:Bp,alphatest_pars_fragment:kp,aomap_fragment:zp,aomap_pars_fragment:Vp,batching_pars_vertex:Gp,batching_vertex:Wp,begin_vertex:qp,beginnormal_vertex:Xp,bsdfs:Yp,iridescence_fragment:Kp,bumpmap_pars_fragment:Zp,clipping_planes_fragment:Jp,clipping_planes_pars_fragment:$p,clipping_planes_pars_vertex:jp,clipping_planes_vertex:Qp,color_fragment:em,color_pars_fragment:tm,color_pars_vertex:nm,color_vertex:im,common:rm,cube_uv_reflection_fragment:sm,defaultnormal_vertex:am,displacementmap_pars_vertex:om,displacementmap_vertex:lm,emissivemap_fragment:cm,emissivemap_pars_fragment:um,colorspace_fragment:hm,colorspace_pars_fragment:fm,envmap_fragment:dm,envmap_common_pars_fragment:pm,envmap_pars_fragment:mm,envmap_pars_vertex:gm,envmap_physical_pars_fragment:Am,envmap_vertex:vm,fog_vertex:_m,fog_pars_vertex:xm,fog_fragment:ym,fog_pars_fragment:Mm,gradientmap_pars_fragment:Sm,lightmap_pars_fragment:bm,lights_lambert_fragment:Tm,lights_lambert_pars_fragment:Em,lights_pars_begin:wm,lights_toon_fragment:Rm,lights_toon_pars_fragment:Cm,lights_phong_fragment:Im,lights_phong_pars_fragment:Pm,lights_physical_fragment:Lm,lights_physical_pars_fragment:Dm,lights_fragment_begin:Nm,lights_fragment_maps:Um,lights_fragment_end:Om,lightprobes_pars_fragment:Fm,logdepthbuf_fragment:Hm,logdepthbuf_pars_fragment:Bm,logdepthbuf_pars_vertex:km,logdepthbuf_vertex:zm,map_fragment:Vm,map_pars_fragment:Gm,map_particle_fragment:Wm,map_particle_pars_fragment:qm,metalnessmap_fragment:Xm,metalnessmap_pars_fragment:Ym,morphinstance_vertex:Km,morphcolor_vertex:Zm,morphnormal_vertex:Jm,morphtarget_pars_vertex:$m,morphtarget_vertex:jm,normal_fragment_begin:Qm,normal_fragment_maps:e0,normal_pars_fragment:t0,normal_pars_vertex:n0,normal_vertex:i0,normalmap_pars_fragment:r0,clearcoat_normal_fragment_begin:s0,clearcoat_normal_fragment_maps:a0,clearcoat_pars_fragment:o0,iridescence_pars_fragment:l0,opaque_fragment:c0,packing:u0,premultiplied_alpha_fragment:h0,project_vertex:f0,dithering_fragment:d0,dithering_pars_fragment:p0,roughnessmap_fragment:m0,roughnessmap_pars_fragment:g0,shadowmap_pars_fragment:v0,shadowmap_pars_vertex:_0,shadowmap_vertex:x0,shadowmask_pars_fragment:y0,skinbase_vertex:M0,skinning_pars_vertex:S0,skinning_vertex:b0,skinnormal_vertex:T0,specularmap_fragment:E0,specularmap_pars_fragment:w0,tonemapping_fragment:A0,tonemapping_pars_fragment:R0,transmission_fragment:C0,transmission_pars_fragment:I0,uv_pars_fragment:P0,uv_pars_vertex:L0,uv_vertex:D0,worldpos_vertex:N0,background_vert:U0,background_frag:O0,backgroundCube_vert:F0,backgroundCube_frag:H0,cube_vert:B0,cube_frag:k0,depth_vert:z0,depth_frag:V0,distance_vert:G0,distance_frag:W0,equirect_vert:q0,equirect_frag:X0,linedashed_vert:Y0,linedashed_frag:K0,meshbasic_vert:Z0,meshbasic_frag:J0,meshlambert_vert:$0,meshlambert_frag:j0,meshmatcap_vert:Q0,meshmatcap_frag:eg,meshnormal_vert:tg,meshnormal_frag:ng,meshphong_vert:ig,meshphong_frag:rg,meshphysical_vert:sg,meshphysical_frag:ag,meshtoon_vert:og,meshtoon_frag:lg,points_vert:cg,points_frag:ug,shadow_vert:hg,shadow_frag:fg,sprite_vert:dg,sprite_frag:pg},we={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new te},probesMax:{value:new te},probesResolution:{value:new te}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},bi={basic:{uniforms:Mn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:Mn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new We(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:Mn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:Mn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:Mn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new We(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:Mn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:Mn([we.points,we.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:Mn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:Mn([we.common,we.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:Mn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:Mn([we.sprite,we.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:Mn([we.common,we.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:Mn([we.lights,we.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};bi.physical={uniforms:Mn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var Ul={r:0,b:0,g:0},mg=new Lt,qf=new et;qf.set(-1,0,0,0,1,0,0,0,1);function gg(i,e,t,n,r,s){let a=new We(0),l=r===!0?0:1,c,u,o=null,p=0,f=null;function m(x){let U=x.isScene===!0?x.background:null;if(U&&U.isTexture){let w=x.backgroundBlurriness>0;U=e.get(U,w)}return U}function v(x){let U=!1,w=m(x);w===null?g(a,l):w&&w.isColor&&(g(w,1),U=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,s):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||U)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function E(x,U){let w=m(U);w&&(w.isCubeTexture||w.mapping===ma)?(u===void 0&&(u=new Ne(new en(1,1,1),new Vt({name:"BackgroundCubeMaterial",uniforms:Cr(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,P,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=w,u.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(mg.makeRotationFromEuler(U.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(qf),u.material.toneMapped=ct.getTransfer(w.colorSpace)!==_t,(o!==w||p!==w.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,o=w,p=w.version,f=i.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Ne(new ta(2,2),new Vt({name:"BackgroundMaterial",uniforms:Cr(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:or,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,c.material.toneMapped=ct.getTransfer(w.colorSpace)!==_t,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(o!==w||p!==w.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,o=w,p=w.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function g(x,U){x.getRGB(Ul,lu(i)),t.buffers.color.setClear(Ul.r,Ul.g,Ul.b,U,s)}function d(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,U=1){a.set(x),l=U,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,g(a,l)},render:v,addToRenderList:E,dispose:d}}function vg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,a=!1;function l(A,y,C,L,k){let Y=!1,$=p(A,L,C,y);s!==$&&(s=$,u(s.object)),Y=m(A,L,C,k),Y&&v(A,L,C,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,w(A,y,C,L),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return i.createVertexArray()}function u(A){return i.bindVertexArray(A)}function o(A){return i.deleteVertexArray(A)}function p(A,y,C,L){let k=L.wireframe===!0,Y=n[y.id];Y===void 0&&(Y={},n[y.id]=Y);let $=A.isInstancedMesh===!0?A.id:0,re=Y[$];re===void 0&&(re={},Y[$]=re);let q=re[C.id];q===void 0&&(q={},re[C.id]=q);let j=q[k];return j===void 0&&(j=f(c()),q[k]=j),j}function f(A){let y=[],C=[],L=[];for(let k=0;k<t;k++)y[k]=0,C[k]=0,L[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:C,attributeDivisors:L,object:A,attributes:{},index:null}}function m(A,y,C,L){let k=s.attributes,Y=y.attributes,$=0,re=C.getAttributes();for(let q in re)if(re[q].location>=0){let J=k[q],ee=Y[q];if(ee===void 0&&(q==="instanceMatrix"&&A.instanceMatrix&&(ee=A.instanceMatrix),q==="instanceColor"&&A.instanceColor&&(ee=A.instanceColor)),J===void 0||J.attribute!==ee||ee&&J.data!==ee.data)return!0;$++}return s.attributesNum!==$||s.index!==L}function v(A,y,C,L){let k={},Y=y.attributes,$=0,re=C.getAttributes();for(let q in re)if(re[q].location>=0){let J=Y[q];J===void 0&&(q==="instanceMatrix"&&A.instanceMatrix&&(J=A.instanceMatrix),q==="instanceColor"&&A.instanceColor&&(J=A.instanceColor));let ee={};ee.attribute=J,J&&J.data&&(ee.data=J.data),k[q]=ee,$++}s.attributes=k,s.attributesNum=$,s.index=L}function E(){let A=s.newAttributes;for(let y=0,C=A.length;y<C;y++)A[y]=0}function g(A){d(A,0)}function d(A,y){let C=s.newAttributes,L=s.enabledAttributes,k=s.attributeDivisors;C[A]=1,L[A]===0&&(i.enableVertexAttribArray(A),L[A]=1),k[A]!==y&&(i.vertexAttribDivisor(A,y),k[A]=y)}function x(){let A=s.newAttributes,y=s.enabledAttributes;for(let C=0,L=y.length;C<L;C++)y[C]!==A[C]&&(i.disableVertexAttribArray(C),y[C]=0)}function U(A,y,C,L,k,Y,$){$===!0?i.vertexAttribIPointer(A,y,C,k,Y):i.vertexAttribPointer(A,y,C,L,k,Y)}function w(A,y,C,L){E();let k=L.attributes,Y=C.getAttributes(),$=y.defaultAttributeValues;for(let re in Y){let q=Y[re];if(q.location>=0){let j=k[re];if(j===void 0&&(re==="instanceMatrix"&&A.instanceMatrix&&(j=A.instanceMatrix),re==="instanceColor"&&A.instanceColor&&(j=A.instanceColor)),j!==void 0){let J=j.normalized,ee=j.itemSize,he=e.get(j);if(he===void 0)continue;let _e=he.buffer,Ue=he.type,Oe=he.bytesPerElement,oe=Ue===i.INT||Ue===i.UNSIGNED_INT||j.gpuType===Jo;if(j.isInterleavedBufferAttribute){let ue=j.data,be=ue.stride,Ge=j.offset;if(ue.isInstancedInterleavedBuffer){for(let Te=0;Te<q.locationSize;Te++)d(q.location+Te,ue.meshPerAttribute);A.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Te=0;Te<q.locationSize;Te++)g(q.location+Te);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let Te=0;Te<q.locationSize;Te++)U(q.location+Te,ee/q.locationSize,Ue,J,be*Oe,(Ge+ee/q.locationSize*Te)*Oe,oe)}else{if(j.isInstancedBufferAttribute){for(let ue=0;ue<q.locationSize;ue++)d(q.location+ue,j.meshPerAttribute);A.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ue=0;ue<q.locationSize;ue++)g(q.location+ue);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let ue=0;ue<q.locationSize;ue++)U(q.location+ue,ee/q.locationSize,Ue,J,ee*Oe,ee/q.locationSize*ue*Oe,oe)}}else if($!==void 0){let J=$[re];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(q.location,J);break;case 3:i.vertexAttrib3fv(q.location,J);break;case 4:i.vertexAttrib4fv(q.location,J);break;default:i.vertexAttrib1fv(q.location,J)}}}}x()}function I(){_();for(let A in n){let y=n[A];for(let C in y){let L=y[C];for(let k in L){let Y=L[k];for(let $ in Y)o(Y[$].object),delete Y[$];delete L[k]}}delete n[A]}}function P(A){if(n[A.id]===void 0)return;let y=n[A.id];for(let C in y){let L=y[C];for(let k in L){let Y=L[k];for(let $ in Y)o(Y[$].object),delete Y[$];delete L[k]}}delete n[A.id]}function O(A){for(let y in n){let C=n[y];for(let L in C){let k=C[L];if(k[A.id]===void 0)continue;let Y=k[A.id];for(let $ in Y)o(Y[$].object),delete Y[$];delete k[A.id]}}}function b(A){for(let y in n){let C=n[y],L=A.isInstancedMesh===!0?A.id:0,k=C[L];if(k!==void 0){for(let Y in k){let $=k[Y];for(let re in $)o($[re].object),delete $[re];delete k[Y]}delete C[L],Object.keys(C).length===0&&delete n[y]}}}function _(){T(),a=!0,s!==r&&(s=r,u(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:_,resetDefaultState:T,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfObject:b,releaseStatesOfProgram:O,initAttributes:E,enableAttribute:g,disableUnusedAttributes:x}}function _g(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,o){o!==0&&(i.drawArraysInstanced(n,c,u,o),t.update(u,n,o))}function l(c,u,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,o);let f=0;for(let m=0;m<o;m++)f+=u[m];t.update(f,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=l}function xg(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let O=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(O){return!(O!==Yn&&n.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(O){let b=O===gn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Cn&&O!==Xn&&!b&&n.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(O){if(O==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp",o=c(u);o!==u&&(Ze("WebGLRenderer:",u,"not supported, using",o,"instead."),u=o);let p=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),U=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=i.getParameter(i.MAX_SAMPLES),P=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:p,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:E,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:x,maxVaryings:U,maxFragmentUniforms:w,maxSamples:I,samples:P}}function yg(i){let e=this,t=null,n=0,r=!1,s=!1,a=new ti,l=new et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){let m=p.length!==0||f||n!==0||r;return r=f,n=p.length,m},this.beginShadows=function(){s=!0,o(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){t=o(p,f,0)},this.setState=function(p,f,m){let v=p.clippingPlanes,E=p.clipIntersection,g=p.clipShadows,d=i.get(p);if(!r||v===null||v.length===0||s&&!g)s?o(null):u();else{let x=s?0:n,U=x*4,w=d.clippingState||null;c.value=w,w=o(v,f,U,m);for(let I=0;I!==U;++I)w[I]=t[I];d.clippingState=w,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=x}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function o(p,f,m,v){let E=p!==null?p.length:0,g=null;if(E!==0){if(g=c.value,v!==!0||g===null){let d=m+E*4,x=f.matrixWorldInverse;l.getNormalMatrix(x),(g===null||g.length<d)&&(g=new Float32Array(d));for(let U=0,w=m;U!==E;++U,w+=4)a.copy(p[U]).applyMatrix4(x,l),a.normal.toArray(g,w),g[w+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,g}}var ms=4,Mg=6,Sg=20,bg=256,Ea=new ar,bf=new We,vu=null,_u=0,xu=0,yu=!1,Tg=new te,Ir=new te,vs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:l=Tg}=s;vu=this._renderer.getRenderTarget(),_u=this._renderer.getActiveCubeFace(),xu=this._renderer.getActiveMipmapLevel(),yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,l),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ef(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(vu,_u,xu),this._renderer.xr.enabled=yu,e.scissorTest=!1,ps(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===lr||e.mapping===Rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vu=this._renderer.getRenderTarget(),_u=this._renderer.getActiveCubeFace(),xu=this._renderer.getActiveMipmapLevel(),yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:gn,format:Yn,colorSpace:Hs,depthBuffer:!1},r=Tf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tf(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Eg(s)),this._blurMaterial=Ag(s,e,t),this._ggxMaterial=wg(s,e,t)}return r}_compileMaterial(e){let t=new Ne(new Kt,e);this._renderer.compile(t,Ea)}_sceneToCubeUV(e,t,n,r,s){let c=new ln(90,1,t,n),u=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],p=this._renderer,f=p.autoClear,m=p.toneMapping;p.getClearColor(bf),p.toneMapping=ri,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ne(new en,new Mi({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1})));let E=this._backgroundBox,g=E.material,d=!1,x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,d=!0):(g.color.copy(bf),d=!0);for(let U=0;U<6;U++){let w=U%3;w===0?(c.up.set(0,u[U],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+o[U],s.y,s.z)):w===1?(c.up.set(0,0,u[U]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+o[U],s.z)):(c.up.set(0,u[U],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+o[U]));let I=this._cubeSize;ps(r,w*I,U>2?I:0,I,I),p.setRenderTarget(r),d&&p.render(E,c),p.render(e,c)}p.toneMapping=m,p.autoClear=f,e.background=x}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===lr||e.mapping===Rr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ef());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let l=s.uniforms;l.envMap.value=e;let c=this._cubeSize;ps(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Ea)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[n];l.material=a;let c=a.uniforms,u=n/(this._lodMeshes.length-1),o=t/(this._lodMeshes.length-1),p=Math.sqrt(u*u-o*o),f=u*1.25,m=p*f,{_lodMax:v}=this,E=this._sizeLods[n],g=3*E*(n>v-ms?n-v+ms:0),d=4*(this._cubeSize-E);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=v-t,ps(s,g,d,3*E,2*E),r.setRenderTarget(s),r.render(l,Ea),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=v-n,ps(e,g,d,3*E,2*E),r.setRenderTarget(e),r.render(l,Ea)}_blur(e,t,n,r){let s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,r,s){let a=this._renderer,l=this._blurMaterial,c=this._lodMeshes[r];c.material=l;let u=l.uniforms;u.envMap.value=e.texture,u.sigma.value=s,u.mipInt.value=this._lodMax-n;let o=this._sizeLods[r],p=3*o*(r>this._lodMax-ms?r-this._lodMax+ms:0),f=4*(this._cubeSize-o);ps(t,p,f,3*o,2*o),a.setRenderTarget(t),a.render(c,Ea)}};function Eg(i){let e=[],t=[],n=i,r=i-ms+1+Mg;for(let s=0;s<r;s++){let a=Math.pow(2,n);e.push(a);let l=1/(a-2),c=-l,u=1+l,o=[c,c,u,c,u,u,c,c,u,u,c,u],p=6,f=6,m=3,v=new Float32Array(m*f*p),E=new Float32Array(m*f*p);for(let d=0;d<p;d++){let x=d%3*2/3-1,U=d>2?0:-1,w=[x,U,0,x+2/3,U,0,x+2/3,U+1,0,x,U,0,x+2/3,U+1,0,x,U+1,0];v.set(w,m*f*d);for(let I=0;I<f;I++){let P=o[I*2]*2-1,O=o[I*2+1]*2-1;d===0?Ir.set(1,O,P):d===1?Ir.set(-P,1,-O):d===2?Ir.set(-P,O,1):d===3?Ir.set(-1,O,-P):d===4?Ir.set(-P,-1,O):Ir.set(P,O,-1),Ir.toArray(E,(d*f+I)*m)}}let g=new Kt;g.setAttribute("position",new cn(v,m)),g.setAttribute("outputDirection",new cn(E,m)),t.push(new Ne(g,null)),n>ms&&n--}return{lodMeshes:t,sizeLods:e}}function Tf(i,e,t){let n=new Qt(i,e,t);return n.texture.mapping=ma,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ps(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function wg(i,e,t){return new Vt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:bg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Ag(i,e,t){return new Vt({name:"SphericalGaussianBlur",defines:{SAMPLES:Sg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Ef(){return new Vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function wf(){return new Vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Bl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Fl=class extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Js(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new en(5,5,5),s=new Vt({name:"CubemapFromEquirect",uniforms:Cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:qn});s.uniforms.tEquirect.value=t;let a=new Ne(r,s),l=t.minFilter;return t.minFilter===cr&&(t.minFilter=dn),new Go(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}};function Rg(i){let e=new WeakMap,t=new WeakMap,n=null;function r(f,m=!1){return f==null?null:m?a(f):s(f)}function s(f){if(f&&f.isTexture){let m=f.mapping;if(m===Yo||m===Ko)if(e.has(f)){let v=e.get(f).texture;return l(v,f.mapping)}else{let v=f.image;if(v&&v.height>0){let E=new Fl(v.height);return E.fromEquirectangularTexture(i,f),e.set(f,E),f.addEventListener("dispose",u),l(E.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let m=f.mapping,v=m===Yo||m===Ko,E=m===lr||m===Rr;if(v||E){let g=t.get(f),d=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return n===null&&(n=new vs(i)),g=v?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{let x=f.image;return v&&x&&x.height>0||E&&x&&c(x)?(n===null&&(n=new vs(i)),g=v?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",o),g.texture):null}}}return f}function l(f,m){return m===Yo?f.mapping=lr:m===Ko&&(f.mapping=Rr),f}function c(f){let m=0,v=6;for(let E=0;E<v;E++)f[E]!==void 0&&m++;return m===v}function u(f){let m=f.target;m.removeEventListener("dispose",u);let v=e.get(m);v!==void 0&&(e.delete(m),v.dispose())}function o(f){let m=f.target;m.removeEventListener("dispose",o);let v=t.get(m);v!==void 0&&(t.delete(m),v.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:p}}function Cg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&br("WebGLRenderer: "+n+" extension not supported."),r}}}function Ig(i,e,t,n){let r={},s=new WeakMap;function a(p){let f=p.target;f.index!==null&&e.remove(f.index);for(let v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",a),delete r[f.id];let m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function l(p,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(p){let f=p.attributes;for(let m in f)e.update(f[m],i.ARRAY_BUFFER)}function u(p){let f=[],m=p.index,v=p.attributes.position,E=0;if(v===void 0)return;if(m!==null){let x=m.array;E=m.version;for(let U=0,w=x.length;U<w;U+=3){let I=x[U+0],P=x[U+1],O=x[U+2];f.push(I,P,P,O,O,I)}}else{let x=v.array;E=v.version;for(let U=0,w=x.length/3-1;U<w;U+=3){let I=U+0,P=U+1,O=U+2;f.push(I,P,P,O,O,I)}}let g=new(v.count>=65535?qs:Ws)(f,1);g.version=E;let d=s.get(p);d&&e.remove(d),s.set(p,g)}function o(p){let f=s.get(p);if(f){let m=p.index;m!==null&&f.version<m.version&&u(p)}else u(p);return s.get(p)}return{get:l,update:c,getWireframeAttribute:o}}function Pg(i,e,t){let n;function r(p){n=p}let s,a;function l(p){s=p.type,a=p.bytesPerElement}function c(p,f){i.drawElements(n,f,s,p*a),t.update(f,n,1)}function u(p,f,m){m!==0&&(i.drawElementsInstanced(n,f,s,p*a,m),t.update(f,n,m))}function o(p,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,p,0,m);let E=0;for(let g=0;g<m;g++)E+=f[g];t.update(E,n,1)}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=u,this.renderMultiDraw=o}function Lg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,l){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=l*(s/3);break;case i.LINES:t.lines+=l*(s/2);break;case i.LINE_STRIP:t.lines+=l*(s-1);break;case i.LINE_LOOP:t.lines+=l*s;break;case i.POINTS:t.points+=l*s;break;default:$e("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Dg(i,e,t){let n=new WeakMap,r=new kt;function s(a,l,c){let u=a.morphTargetInfluences,o=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,p=o!==void 0?o.length:0,f=n.get(l);if(f===void 0||f.count!==p){let _=function(){O.dispose(),n.delete(l),l.removeEventListener("dispose",_)};f!==void 0&&f.texture.dispose();let m=l.morphAttributes.position!==void 0,v=l.morphAttributes.normal!==void 0,E=l.morphAttributes.color!==void 0,g=l.morphAttributes.position||[],d=l.morphAttributes.normal||[],x=l.morphAttributes.color||[],U=0;m===!0&&(U=1),v===!0&&(U=2),E===!0&&(U=3);let w=l.attributes.position.count*U,I=1;w>e.maxTextureSize&&(I=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);let P=new Float32Array(w*I*4*p),O=new zs(P,w,I,p);O.type=Xn,O.needsUpdate=!0;let b=U*4;for(let T=0;T<p;T++){let A=g[T],y=d[T],C=x[T],L=w*I*4*T;for(let k=0;k<A.count;k++){let Y=k*b;m===!0&&(r.fromBufferAttribute(A,k),P[L+Y+0]=r.x,P[L+Y+1]=r.y,P[L+Y+2]=r.z,P[L+Y+3]=0),v===!0&&(r.fromBufferAttribute(y,k),P[L+Y+4]=r.x,P[L+Y+5]=r.y,P[L+Y+6]=r.z,P[L+Y+7]=0),E===!0&&(r.fromBufferAttribute(C,k),P[L+Y+8]=r.x,P[L+Y+9]=r.y,P[L+Y+10]=r.z,P[L+Y+11]=C.itemSize===4?r.w:1)}}f={count:p,texture:O,size:new Xe(w,I)},n.set(l,f),l.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let E=0;E<u.length;E++)m+=u[E];let v=l.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Ng(i,e,t,n,r){let s=new WeakMap;function a(u){let o=r.render.frame,p=u.geometry,f=e.get(u,p);if(s.get(f)!==o&&(e.update(f),s.set(f,o)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),s.get(u)!==o&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),s.set(u,o))),u.isSkinnedMesh){let m=u.skeleton;s.get(m)!==o&&(m.update(),s.set(m,o))}return f}function l(){s=new WeakMap}function c(u){let o=u.target;o.removeEventListener("dispose",c),n.releaseStatesOfObject(o),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:a,dispose:l}}var Ug={[ca]:"LINEAR_TONE_MAPPING",[ua]:"REINHARD_TONE_MAPPING",[ha]:"CINEON_TONE_MAPPING",[Ar]:"ACES_FILMIC_TONE_MAPPING",[da]:"AGX_TONE_MAPPING",[pa]:"NEUTRAL_TONE_MAPPING",[fa]:"CUSTOM_TONE_MAPPING"};function Og(i,e,t,n,r,s){let a=new Qt(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,c=null,u=new Kt;u.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new xt([0,2,0,0,2,0],2));let o=new as({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Ne(u,o),f=new ar(-1,1,1,-1,0,1),m=null,v=null,E=!1,g,d=null,x=[],U=!1;this.setSize=function(w,I){a.setSize(w,I),l!==null&&l.setSize(w,I),c!==null&&c.setSize(w,I);for(let P=0;P<x.length;P++){let O=x[P];O.setSize&&O.setSize(w,I)}},this.setEffects=function(w){x=w,U=x.length>0&&x[0].isRenderPass===!0;let I=a.width,P=a.height;x.length>0&&l===null&&(l=new Qt(I,P,{type:gn,depthBuffer:!1,stencilBuffer:!1}),c=new Qt(I,P,{type:gn,depthBuffer:!1,stencilBuffer:!1}));for(let O=0;O<x.length;O++){let b=x[O];b.setSize&&b.setSize(I,P)}},this.begin=function(w,I){if(E||w.toneMapping===ri&&x.length===0)return!1;if(d=I,I!==null){let P=I.width,O=I.height;(a.width!==P||a.height!==O)&&this.setSize(P,O)}return U===!1&&w.setRenderTarget(a),g=w.toneMapping,w.toneMapping=ri,!0},this.hasRenderPass=function(){return U},this.end=function(w,I){w.toneMapping=g,E=!0;let P=a,O=l;for(let b=0;b<x.length;b++){let _=x[b];_.enabled!==!1&&(_.render(w,O,P,I),_.needsSwap!==!1&&(P=O,O=O===l?c:l))}if(m!==w.outputColorSpace||v!==w.toneMapping){m=w.outputColorSpace,v=w.toneMapping,o.defines={},ct.getTransfer(m)===_t&&(o.defines.SRGB_TRANSFER="");let b=Ug[v];b&&(o.defines[b]=""),o.needsUpdate=!0}o.uniforms.tDiffuse.value=P.texture,w.setRenderTarget(d),w.render(p,f),d=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),u.dispose(),o.dispose()}}var Xf=new En,bu=new er(1,1),Yf=new zs,Kf=new Ro,Zf=new Js,Af=[],Rf=[],Cf=new Float32Array(16),If=new Float32Array(9),Pf=new Float32Array(4);function _s(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Af[r];if(s===void 0&&(s=new Float32Array(r),Af[r]=s),e!==0){n.toArray(s,0);for(let a=1,l=0;a!==e;++a)l+=t,i[a].toArray(s,l)}return s}function sn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function an(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function kl(i,e){let t=Rf[e];t===void 0&&(t=new Int32Array(e),Rf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Fg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Hg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2fv(this.addr,e),an(t,e)}}function Bg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;i.uniform3fv(this.addr,e),an(t,e)}}function kg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4fv(this.addr,e),an(t,e)}}function zg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(sn(t,n))return;Pf.set(n),i.uniformMatrix2fv(this.addr,!1,Pf),an(t,n)}}function Vg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(sn(t,n))return;If.set(n),i.uniformMatrix3fv(this.addr,!1,If),an(t,n)}}function Gg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(sn(t,n))return;Cf.set(n),i.uniformMatrix4fv(this.addr,!1,Cf),an(t,n)}}function Wg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function qg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2iv(this.addr,e),an(t,e)}}function Xg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3iv(this.addr,e),an(t,e)}}function Yg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4iv(this.addr,e),an(t,e)}}function Kg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Zg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2uiv(this.addr,e),an(t,e)}}function Jg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3uiv(this.addr,e),an(t,e)}}function $g(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4uiv(this.addr,e),an(t,e)}}function jg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(bu.compareFunction=t.isReversedDepthBuffer()?Nl:Dl,s=bu):s=Xf,t.setTexture2D(e||s,r)}function Qg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Kf,r)}function ev(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Zf,r)}function tv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Yf,r)}function nv(i){switch(i){case 5126:return Fg;case 35664:return Hg;case 35665:return Bg;case 35666:return kg;case 35674:return zg;case 35675:return Vg;case 35676:return Gg;case 5124:case 35670:return Wg;case 35667:case 35671:return qg;case 35668:case 35672:return Xg;case 35669:case 35673:return Yg;case 5125:return Kg;case 36294:return Zg;case 36295:return Jg;case 36296:return $g;case 35678:case 36198:case 36298:case 36306:case 35682:return jg;case 35679:case 36299:case 36307:return Qg;case 35680:case 36300:case 36308:case 36293:return ev;case 36289:case 36303:case 36311:case 36292:return tv}}function iv(i,e){i.uniform1fv(this.addr,e)}function rv(i,e){let t=_s(e,this.size,2);i.uniform2fv(this.addr,t)}function sv(i,e){let t=_s(e,this.size,3);i.uniform3fv(this.addr,t)}function av(i,e){let t=_s(e,this.size,4);i.uniform4fv(this.addr,t)}function ov(i,e){let t=_s(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function lv(i,e){let t=_s(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function cv(i,e){let t=_s(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function uv(i,e){i.uniform1iv(this.addr,e)}function hv(i,e){i.uniform2iv(this.addr,e)}function fv(i,e){i.uniform3iv(this.addr,e)}function dv(i,e){i.uniform4iv(this.addr,e)}function pv(i,e){i.uniform1uiv(this.addr,e)}function mv(i,e){i.uniform2uiv(this.addr,e)}function gv(i,e){i.uniform3uiv(this.addr,e)}function vv(i,e){i.uniform4uiv(this.addr,e)}function _v(i,e,t){let n=this.cache,r=e.length,s=kl(t,r);sn(n,s)||(i.uniform1iv(this.addr,s),an(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=bu:a=Xf;for(let l=0;l!==r;++l)t.setTexture2D(e[l]||a,s[l])}function xv(i,e,t){let n=this.cache,r=e.length,s=kl(t,r);sn(n,s)||(i.uniform1iv(this.addr,s),an(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Kf,s[a])}function yv(i,e,t){let n=this.cache,r=e.length,s=kl(t,r);sn(n,s)||(i.uniform1iv(this.addr,s),an(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Zf,s[a])}function Mv(i,e,t){let n=this.cache,r=e.length,s=kl(t,r);sn(n,s)||(i.uniform1iv(this.addr,s),an(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Yf,s[a])}function Sv(i){switch(i){case 5126:return iv;case 35664:return rv;case 35665:return sv;case 35666:return av;case 35674:return ov;case 35675:return lv;case 35676:return cv;case 5124:case 35670:return uv;case 35667:case 35671:return hv;case 35668:case 35672:return fv;case 35669:case 35673:return dv;case 5125:return pv;case 36294:return mv;case 36295:return gv;case 36296:return vv;case 35678:case 36198:case 36298:case 36306:case 35682:return _v;case 35679:case 36299:case 36307:return xv;case 35680:case 36300:case 36308:case 36293:return yv;case 36289:case 36303:case 36311:case 36292:return Mv}}var Tu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=nv(t.type)}},Eu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sv(t.type)}},wu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let l=r[s];l.setValue(e,t[l.id],n)}}},Mu=/(\w+)(\])?(\[|\.)?/g;function Lf(i,e){i.seq.push(e),i.map[e.id]=e}function bv(i,e,t){let n=i.name,r=n.length;for(Mu.lastIndex=0;;){let s=Mu.exec(n),a=Mu.lastIndex,l=s[1],c=s[2]==="]",u=s[3];if(c&&(l=l|0),u===void 0||u==="["&&a+2===r){Lf(t,u===void 0?new Tu(l,i,e):new Eu(l,i,e));break}else{let p=t.map[l];p===void 0&&(p=new wu(l),Lf(t,p)),t=p}}}var gs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);bv(l,c,this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let l=t[s],c=n[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function Df(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Tv=37297,Ev=0;function wv(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let l=a+1;n.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return n.join(`
`)}var Nf=new et;function Av(i){ct._getMatrix(Nf,ct.workingColorSpace,i);let e=`mat3( ${Nf.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(i)){case Bs:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Ze("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Uf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let l=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+wv(i.getShaderSource(e),l)}else return s}function Rv(i,e){let t=Av(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Cv={[ca]:"Linear",[ua]:"Reinhard",[ha]:"Cineon",[Ar]:"ACESFilmic",[da]:"AgX",[pa]:"Neutral",[fa]:"Custom"};function Iv(i,e){let t=Cv[e];return t===void 0?(Ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ol=new te;function Pv(){ct.getLuminanceCoefficients(Ol);let i=Ol.x.toFixed(4),e=Ol.y.toFixed(4),t=Ol.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Aa).join(`
`)}function Dv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Nv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),a=s.name,l=1;s.type===i.FLOAT_MAT2&&(l=2),s.type===i.FLOAT_MAT3&&(l=3),s.type===i.FLOAT_MAT4&&(l=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:l}}return t}function Aa(i){return i!==""}function Of(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ff(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Uv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Au(i){return i.replace(Uv,Fv)}var Ov=new Map;function Fv(i,e){let t=rt[e];if(t===void 0){let n=Ov.get(e);if(n!==void 0)t=rt[n],Ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Au(t)}var Hv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hf(i){return i.replace(Hv,Bv)}function Bv(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Bf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var kv={[la]:"SHADOWMAP_TYPE_PCF",[cs]:"SHADOWMAP_TYPE_VSM"};function zv(i){return kv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Vv={[lr]:"ENVMAP_TYPE_CUBE",[Rr]:"ENVMAP_TYPE_CUBE",[ma]:"ENVMAP_TYPE_CUBE_UV"};function Gv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Vv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Wv={[Rr]:"ENVMAP_MODE_REFRACTION"};function qv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Wv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Xv={[Xo]:"ENVMAP_BLENDING_MULTIPLY",[nf]:"ENVMAP_BLENDING_MIX",[rf]:"ENVMAP_BLENDING_ADD"};function Yv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Xv[i.combine]||"ENVMAP_BLENDING_NONE"}function Kv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Zv(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,l=t.fragmentShader,c=zv(t),u=Gv(t),o=qv(t),p=Yv(t),f=Kv(t),m=Lv(t),v=Dv(s),E=r.createProgram(),g,d,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Aa).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Aa).join(`
`),d.length>0&&(d+=`
`)):(g=[Bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+o:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Aa).join(`
`),d=[Bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+o:"",t.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?rt.tonemapping_pars_fragment:"",t.toneMapping!==ri?Iv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,Rv("linearToOutputTexel",t.outputColorSpace),Pv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Aa).join(`
`)),a=Au(a),a=Of(a,t),a=Ff(a,t),l=Au(l),l=Of(l,t),l=Ff(l,t),a=Hf(a),l=Hf(l),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",t.glslVersion===au?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let U=x+g+a,w=x+d+l,I=Df(r,r.VERTEX_SHADER,U),P=Df(r,r.FRAGMENT_SHADER,w);r.attachShader(E,I),r.attachShader(E,P),t.index0AttributeName!==void 0?r.bindAttribLocation(E,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function O(A){if(i.debug.checkShaderErrors){let y=r.getProgramInfoLog(E)||"",C=r.getShaderInfoLog(I)||"",L=r.getShaderInfoLog(P)||"",k=y.trim(),Y=C.trim(),$=L.trim(),re=!0,q=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(re=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,E,I,P);else{let j=Uf(r,I,"vertex"),J=Uf(r,P,"fragment");$e("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+k+`
`+j+`
`+J)}else k!==""?Ze("WebGLProgram: Program Info Log:",k):(Y===""||$==="")&&(q=!1);q&&(A.diagnostics={runnable:re,programLog:k,vertexShader:{log:Y,prefix:g},fragmentShader:{log:$,prefix:d}})}r.deleteShader(I),r.deleteShader(P),b=new gs(r,E),_=Nv(r,E)}let b;this.getUniforms=function(){return b===void 0&&O(this),b};let _;this.getAttributes=function(){return _===void 0&&O(this),_};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(E,Tv)),T},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ev++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=I,this.fragmentShader=P,this}var Jv=0,Ru=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Cu(e),t.set(e,n)),n}},Cu=class{constructor(e){this.id=Jv++,this.code=e,this.usedTimes=0}};function $v(i){return i===hr||i===Ma||i===Sa}function jv(i,e,t,n,r,s){let a=new Vs,l=new Ru,c=new Set,u=[],o=new Map,p=n.logarithmicDepthBuffer,f=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function E(b,_,T,A,y,C){let L=A.fog,k=y.geometry,Y=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?A.environment:null,$=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,re=e.get(b.envMap||Y,$),q=re&&re.mapping===ma?re.image.height:null,j=m[b.type];b.precision!==null&&(f=n.getMaxPrecision(b.precision),f!==b.precision&&Ze("WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let J=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ee=J!==void 0?J.length:0,he=0;k.morphAttributes.position!==void 0&&(he=1),k.morphAttributes.normal!==void 0&&(he=2),k.morphAttributes.color!==void 0&&(he=3);let _e,Ue,Oe,oe;if(j){let B=bi[j];_e=B.vertexShader,Ue=B.fragmentShader}else{_e=b.vertexShader,Ue=b.fragmentShader;let B=l.getVertexShaderStage(b),se=l.getFragmentShaderStage(b);l.update(b,B,se),Oe=B.id,oe=se.id}let ue=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),Ge=y.isInstancedMesh===!0,Te=y.isBatchedMesh===!0,Je=!!b.map,gt=!!b.matcap,Ke=!!re,Qe=!!b.aoMap,vt=!!b.lightMap,nt=!!b.bumpMap&&b.wireframe===!1,Et=!!b.normalMap,Gt=!!b.displacementMap,Xt=!!b.emissiveMap,At=!!b.metalnessMap,It=!!b.roughnessMap,W=b.anisotropy>0,Dt=b.clearcoat>0,st=b.dispersion>0,F=b.retroreflectivity>0,M=b.iridescence>0,D=b.sheen>0,N=b.transmission>0,H=W&&!!b.anisotropyMap,z=Dt&&!!b.clearcoatMap,Z=Dt&&!!b.clearcoatNormalMap,V=Dt&&!!b.clearcoatRoughnessMap,K=M&&!!b.iridescenceMap,ce=M&&!!b.iridescenceThicknessMap,ge=D&&!!b.sheenColorMap,de=D&&!!b.sheenRoughnessMap,ve=!!b.specularMap,Me=!!b.specularColorMap,Le=!!b.specularIntensityMap,Be=N&&!!b.transmissionMap,G=N&&!!b.thicknessMap,ye=!!b.gradientMap,fe=!!b.alphaMap,Se=b.alphaTest>0,Re=!!b.alphaHash,me=!!b.extensions,h=ri;b.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(h=i.toneMapping);let S={shaderID:j,shaderType:b.type,shaderName:b.name,vertexShader:_e,fragmentShader:Ue,defines:b.defines,customVertexShaderID:Oe,customFragmentShaderID:oe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Te,batchingColor:Te&&y._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&y.instanceColor!==null,instancingMorph:Ge&&y.morphTexture!==null,outputColorSpace:ue===null?i.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Je,matcap:gt,envMap:Ke,envMapMode:Ke&&re.mapping,envMapCubeUVHeight:q,aoMap:Qe,lightMap:vt,bumpMap:nt,normalMap:Et,displacementMap:Gt,emissiveMap:Xt,normalMapObjectSpace:Et&&b.normalMapType===of,normalMapTangentSpace:Et&&b.normalMapType===ba,packedNormalMap:Et&&b.normalMapType===ba&&$v(b.normalMap.format),metalnessMap:At,roughnessMap:It,anisotropy:W,anisotropyMap:H,clearcoat:Dt,clearcoatMap:z,clearcoatNormalMap:Z,clearcoatRoughnessMap:V,dispersion:st,retroreflection:F,iridescence:M,iridescenceMap:K,iridescenceThicknessMap:ce,sheen:D,sheenColorMap:ge,sheenRoughnessMap:de,specularMap:ve,specularColorMap:Me,specularIntensityMap:Le,transmission:N,transmissionMap:Be,thicknessMap:G,gradientMap:ye,opaque:b.transparent===!1&&b.blending===us&&b.alphaToCoverage===!1,alphaMap:fe,alphaTest:Se,alphaHash:Re,combine:b.combine,mapUv:Je&&v(b.map.channel),aoMapUv:Qe&&v(b.aoMap.channel),lightMapUv:vt&&v(b.lightMap.channel),bumpMapUv:nt&&v(b.bumpMap.channel),normalMapUv:Et&&v(b.normalMap.channel),displacementMapUv:Gt&&v(b.displacementMap.channel),emissiveMapUv:Xt&&v(b.emissiveMap.channel),metalnessMapUv:At&&v(b.metalnessMap.channel),roughnessMapUv:It&&v(b.roughnessMap.channel),anisotropyMapUv:H&&v(b.anisotropyMap.channel),clearcoatMapUv:z&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Z&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:de&&v(b.sheenRoughnessMap.channel),specularMapUv:ve&&v(b.specularMap.channel),specularColorMapUv:Me&&v(b.specularColorMap.channel),specularIntensityMapUv:Le&&v(b.specularIntensityMap.channel),transmissionMapUv:Be&&v(b.transmissionMap.channel),thicknessMapUv:G&&v(b.thicknessMap.channel),alphaMapUv:fe&&v(b.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Et||W),vertexNormals:!!k.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:y.isPoints===!0&&!!k.attributes.uv&&(Je||fe),fog:!!L,useFog:b.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||k.attributes.normal===void 0&&Et===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:be,skinning:y.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:he,numSunLights:_.sun.length,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numSunLightShadows:_.sunShadowMap.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numLightProbeGrids:C.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:h,decodeVideoTexture:Je&&b.map.isVideoTexture===!0&&ct.getTransfer(b.map.colorSpace)===_t,decodeVideoTextureEmissive:Xt&&b.emissiveMap.isVideoTexture===!0&&ct.getTransfer(b.emissiveMap.colorSpace)===_t,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Wn,flipSided:b.side===mn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:me&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&b.extensions.multiDraw===!0||Te)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return S.vertexUv1s=c.has(1),S.vertexUv2s=c.has(2),S.vertexUv3s=c.has(3),c.clear(),S}function g(b){let _=[];if(b.shaderID?_.push(b.shaderID):(_.push(b.customVertexShaderID),_.push(b.customFragmentShaderID)),b.defines!==void 0)for(let T in b.defines)_.push(T),_.push(b.defines[T]);return b.isRawShaderMaterial===!1&&(d(_,b),x(_,b),_.push(i.outputColorSpace)),_.push(b.customProgramCacheKey),_.join()}function d(b,_){b.push(_.precision),b.push(_.outputColorSpace),b.push(_.envMapMode),b.push(_.envMapCubeUVHeight),b.push(_.mapUv),b.push(_.alphaMapUv),b.push(_.lightMapUv),b.push(_.aoMapUv),b.push(_.bumpMapUv),b.push(_.normalMapUv),b.push(_.displacementMapUv),b.push(_.emissiveMapUv),b.push(_.metalnessMapUv),b.push(_.roughnessMapUv),b.push(_.anisotropyMapUv),b.push(_.clearcoatMapUv),b.push(_.clearcoatNormalMapUv),b.push(_.clearcoatRoughnessMapUv),b.push(_.iridescenceMapUv),b.push(_.iridescenceThicknessMapUv),b.push(_.sheenColorMapUv),b.push(_.sheenRoughnessMapUv),b.push(_.specularMapUv),b.push(_.specularColorMapUv),b.push(_.specularIntensityMapUv),b.push(_.transmissionMapUv),b.push(_.thicknessMapUv),b.push(_.combine),b.push(_.fogExp2),b.push(_.sizeAttenuation),b.push(_.morphTargetsCount),b.push(_.morphAttributeCount),b.push(_.numSunLights),b.push(_.numDirLights),b.push(_.numPointLights),b.push(_.numSpotLights),b.push(_.numSpotLightMaps),b.push(_.numHemiLights),b.push(_.numRectAreaLights),b.push(_.numSunLightShadows),b.push(_.numDirLightShadows),b.push(_.numPointLightShadows),b.push(_.numSpotLightShadows),b.push(_.numSpotLightShadowsWithMaps),b.push(_.numLightProbes),b.push(_.shadowMapType),b.push(_.toneMapping),b.push(_.numClippingPlanes),b.push(_.numClipIntersection),b.push(_.depthPacking)}function x(b,_){a.disableAll(),_.instancing&&a.enable(0),_.instancingColor&&a.enable(1),_.instancingMorph&&a.enable(2),_.matcap&&a.enable(3),_.envMap&&a.enable(4),_.normalMapObjectSpace&&a.enable(5),_.normalMapTangentSpace&&a.enable(6),_.clearcoat&&a.enable(7),_.iridescence&&a.enable(8),_.alphaTest&&a.enable(9),_.vertexColors&&a.enable(10),_.vertexAlphas&&a.enable(11),_.vertexUv1s&&a.enable(12),_.vertexUv2s&&a.enable(13),_.vertexUv3s&&a.enable(14),_.vertexTangents&&a.enable(15),_.anisotropy&&a.enable(16),_.alphaHash&&a.enable(17),_.batching&&a.enable(18),_.dispersion&&a.enable(19),_.retroreflection&&a.enable(24),_.batchingColor&&a.enable(20),_.gradientMap&&a.enable(21),_.packedNormalMap&&a.enable(22),_.vertexNormals&&a.enable(23),b.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),_.numLightProbeGrids>0&&a.enable(22),_.hasPositionAttribute&&a.enable(23),b.push(a.mask)}function U(b){let _=m[b.type],T;if(_){let A=bi[_];T=Oi.clone(A.uniforms)}else T=b.uniforms;return T}function w(b,_){let T=o.get(_);return T!==void 0?++T.usedTimes:(T=new Zv(i,_,b,r),u.push(T),o.set(_,T)),T}function I(b){if(--b.usedTimes===0){let _=u.indexOf(b);u[_]=u[u.length-1],u.pop(),o.delete(b.cacheKey),b.destroy()}}function P(b){l.remove(b)}function O(){l.dispose()}return{getParameters:E,getProgramCacheKey:g,getUniforms:U,acquireProgram:w,releaseProgram:I,releaseShaderCache:P,programs:u,dispose:O}}function Qv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function r(a,l,c){i.get(a)[l]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function e_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function kf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function zf(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}function l(f,m,v,E,g,d){let x=i[e];return x===void 0?(x={id:f.id,object:f,geometry:m,material:v,materialVariant:a(f),groupOrder:E,renderOrder:f.renderOrder,z:g,group:d},i[e]=x):(x.id=f.id,x.object=f,x.geometry=m,x.material=v,x.materialVariant=a(f),x.groupOrder=E,x.renderOrder=f.renderOrder,x.z=g,x.group=d),e++,x}function c(f,m,v,E,g,d,x){x.reversedDepth===!0&&(g=-g);let U=l(f,m,v,E,g,d);v.transmission>0?n.push(U):v.transparent===!0?r.push(U):t.push(U)}function u(f,m,v,E,g,d){let x=l(f,m,v,E,g,d);v.transmission>0?n.unshift(x):v.transparent===!0?r.unshift(x):t.unshift(x)}function o(f,m){t.length>1&&t.sort(f||e_),n.length>1&&n.sort(m||kf),r.length>1&&r.sort(m||kf)}function p(){for(let f=e,m=i.length;f<m;f++){let v=i[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:u,finish:p,sort:o}}function t_(){let i=new WeakMap;function e(n,r){let s=i.get(n),a;return s===void 0?(a=new zf,i.set(n,[a])):r>=s.length?(a=new zf,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function n_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new te,color:new We};break;case"SpotLight":t={position:new te,direction:new te,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new te,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new te,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new te,halfWidth:new te,halfHeight:new te};break}return i[e.id]=t,t}}}function i_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var r_=0;function s_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function a_(i){let e=new n_,t=i_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new te);let r=new te,s=new Lt,a=new Lt;function l(u){let o=0,p=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let m=0,v=0,E=0,g=0,d=0,x=0,U=0,w=0,I=0,P=0,O=0,b=0,_=0,T=0;u.sort(s_);for(let y=0,C=u.length;y<C;y++){let L=u[y],k=L.color,Y=L.intensity,$=L.distance,re=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===hr?re=L.shadow.map.texture:re=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)o+=k.r*Y,p+=k.g*Y,f+=k.b*Y;else if(L.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(L.sh.coefficients[q],Y);T++}else if(L.isSunLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,J=t.get(L);J.shadowIntensity=j.intensity,J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[v]=J,n.sunShadowMap[v]=re;let ee=j.getViewportCount();for(let he=0;he<ee;he++)n.sunShadowMatrix[E+he]=j.getMatrix(he),n.sunShadowCascade[E+he]=j._cascadeData[he];E+=ee,v++}n.sun[m]=q,m++}else if(L.isDirectionalLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,J=t.get(L);J.shadowIntensity=j.intensity,J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,n.directionalShadow[g]=J,n.directionalShadowMap[g]=re,n.directionalShadowMatrix[g]=L.shadow.matrix,I++}n.directional[g]=q,g++}else if(L.isSpotLight){let q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(k).multiplyScalar(Y),q.distance=$,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,n.spot[x]=q;let j=L.shadow;if(L.map&&(n.spotLightMap[b]=L.map,b++,j.updateMatrices(L),L.castShadow&&_++),n.spotLightMatrix[x]=j.matrix,L.castShadow){let J=t.get(L);J.shadowIntensity=j.intensity,J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,n.spotShadow[x]=J,n.spotShadowMap[x]=re,O++}x++}else if(L.isRectAreaLight){let q=e.get(L);q.color.copy(k).multiplyScalar(Y),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),n.rectArea[U]=q,U++}else if(L.isPointLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){let j=L.shadow,J=t.get(L);J.shadowIntensity=j.intensity,J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,J.shadowCameraNear=j.camera.near,J.shadowCameraFar=j.camera.far,n.pointShadow[d]=J,n.pointShadowMap[d]=re,n.pointShadowMatrix[d]=L.shadow.matrix,P++}n.point[d]=q,d++}else if(L.isHemisphereLight){let q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(Y),q.groundColor.copy(L.groundColor).multiplyScalar(Y),n.hemi[w]=q,w++}}U>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=o,n.ambient[1]=p,n.ambient[2]=f;let A=n.hash;(A.sunLength!==m||A.directionalLength!==g||A.pointLength!==d||A.spotLength!==x||A.rectAreaLength!==U||A.hemiLength!==w||A.numSunShadows!==v||A.numDirectionalShadows!==I||A.numPointShadows!==P||A.numSpotShadows!==O||A.numSpotMaps!==b||A.numLightProbes!==T)&&(n.sun.length=m,n.directional.length=g,n.spot.length=x,n.rectArea.length=U,n.point.length=d,n.hemi.length=w,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=E,n.sunShadowCascade.length=E,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.directionalShadowMatrix.length=I,n.pointShadow.length=P,n.pointShadowMap.length=P,n.pointShadowMatrix.length=P,n.spotShadow.length=O,n.spotShadowMap.length=O,n.spotLightMatrix.length=O+b-_,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=_,n.numLightProbes=T,A.sunLength=m,A.directionalLength=g,A.pointLength=d,A.spotLength=x,A.rectAreaLength=U,A.hemiLength=w,A.numSunShadows=v,A.numDirectionalShadows=I,A.numPointShadows=P,A.numSpotShadows=O,A.numSpotMaps=b,A.numLightProbes=T,n.version=r_++)}function c(u,o){let p=0,f=0,m=0,v=0,E=0,g=0,d=o.matrixWorldInverse;for(let x=0,U=u.length;x<U;x++){let w=u[x];if(w.isSunLight){let I=n.sun[p];I.direction.setFromMatrixPosition(w.matrixWorld),I.direction.transformDirection(d),p++}else if(w.isDirectionalLight){let I=n.directional[f];I.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(d),f++}else if(w.isSpotLight){let I=n.spot[v];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(d),I.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(d),v++}else if(w.isRectAreaLight){let I=n.rectArea[E];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(d),a.identity(),s.copy(w.matrixWorld),s.premultiply(d),a.extractRotation(s),I.halfWidth.set(w.width*.5,0,0),I.halfHeight.set(0,w.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),E++}else if(w.isPointLight){let I=n.point[m];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(d),m++}else if(w.isHemisphereLight){let I=n.hemi[g];I.direction.setFromMatrixPosition(w.matrixWorld),I.direction.transformDirection(d),g++}}}return{setup:l,setupView:c,state:n}}function Vf(i){let e=new a_(i),t=[],n=[],r=[];function s(f){p.camera=f,t.length=0,n.length=0,r.length=0}function a(f){t.push(f)}function l(f){n.push(f)}function c(f){r.push(f)}function u(){e.setup(t)}function o(f){e.setupView(t,f)}let p={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:u,setupLightsView:o,pushLight:a,pushShadow:l,pushLightProbeGrid:c}}function o_(i){let e=new WeakMap;function t(r,s=0){let a=e.get(r),l;return a===void 0?(l=new Vf(i),e.set(r,[l])):s>=a.length?(l=new Vf(i),a.push(l)):l=a[s],l}function n(){e=new WeakMap}return{get:t,dispose:n}}var l_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c_=`uniform sampler2D shadow_pass;
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
}`,u_=[new te(1,0,0),new te(-1,0,0),new te(0,1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1)],h_=[new te(0,-1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1),new te(0,-1,0),new te(0,-1,0)],Gf=new Lt,wa=new te,Su=new te;function f_(i,e,t){let n=new rs,r=new Xe,s=new Xe,a=new kt,l=new Po,c=new Lo,u={},o=t.maxTextureSize,p={[or]:mn,[mn]:or,[Wn]:Wn},f=new Vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:l_,fragmentShader:c_}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let v=new Kt;v.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new Ne(v,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=la;let d=this.type;this.render=function(P,O,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||P.length===0)return;this.type===Fh&&(Ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=la);let _=i.getRenderTarget(),T=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),y=i.state;y.setBlending(qn),y.buffers.depth.getReversed()===!0?y.buffers.color.setClear(0,0,0,0):y.buffers.color.setClear(1,1,1,1),y.buffers.depth.setTest(!0),y.setScissorTest(!1);let C=d!==this.type;C&&O.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(k=>k.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,k=P.length;L<k;L++){let Y=P[L],$=Y.shadow;if($===void 0){Ze("WebGLShadowMap:",Y,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);let re=$.getFrameExtents();r.multiply(re),s.copy($.mapSize),(r.x>o||r.y>o)&&(r.x>o&&(s.x=Math.floor(o/re.x),r.x=s.x*re.x,$.mapSize.x=s.x),r.y>o&&(s.y=Math.floor(o/re.y),r.y=s.y*re.y,$.mapSize.y=s.y));let q=i.state.buffers.depth.getReversed();if($.camera._reversedDepth=q,$.map===null||C===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===cs){if(Y.isPointLight){Ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Qt(r.x,r.y,{format:hr,type:gn,minFilter:dn,magFilter:dn,generateMipmaps:!1}),$.map.texture.name=Y.name+".shadowMap",$.map.depthTexture=new er(r.x,r.y,Xn),$.map.depthTexture.name=Y.name+".shadowMapDepth",$.map.depthTexture.format=mi,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=un,$.map.depthTexture.magFilter=un}else Y.isPointLight?($.map=new Fl(r.x),$.map.depthTexture=new Io(r.x,si)):($.map=new Qt(r.x,r.y),$.map.depthTexture=new er(r.x,r.y,si)),$.map.depthTexture.name=Y.name+".shadowMap",$.map.depthTexture.format=mi,this.type===la?($.map.depthTexture.compareFunction=q?Nl:Dl,$.map.depthTexture.minFilter=dn,$.map.depthTexture.magFilter=dn):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=un,$.map.depthTexture.magFilter=un);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==r.x||$.map.height!==r.y)&&$.map.setSize(r.x,r.y);let j=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();Y.isPointLight!==!0&&$.updateMatrices(Y,b);for(let J=0;J<j;J++){let ee=$.getCamera(J);if(Y.isPointLight){let he=$.camera,_e=$.matrix,Ue=Y.distance||he.far;Ue!==he.far&&(he.far=Ue,he.updateProjectionMatrix()),wa.setFromMatrixPosition(Y.matrixWorld),he.position.copy(wa),Su.copy(he.position),Su.add(u_[J]),he.up.copy(h_[J]),he.lookAt(Su),he.updateMatrixWorld(),_e.makeTranslation(-wa.x,-wa.y,-wa.z),Gf.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),$._frustum.setFromProjectionMatrix(Gf,he.coordinateSystem,he.reversedDepth)}if($.map.isWebGLCubeRenderTarget)i.setRenderTarget($.map,J),i.clear();else{J===0&&(i.setRenderTarget($.map),i.clear());let he=$.getViewport(J);a.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),y.viewport(a)}n=$.getFrustum(J),w(O,b,ee,Y,this.type)}$.isPointLightShadow!==!0&&this.type===cs&&x($,b),$.needsUpdate=!1}d=this.type,g.needsUpdate=!1,i.setRenderTarget(_,T,A)};function x(P,O){let b=e.update(E);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null?P.mapPass=new Qt(r.x,r.y,{format:hr,type:gn}):(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)&&P.mapPass.setSize(P.map.width,P.map.height),f.uniforms.shadow_pass.value=P.map.depthTexture,f.uniforms.resolution.value.set(P.map.width,P.map.height),f.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(O,null,b,f,E,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value.set(P.map.width,P.map.height),m.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(O,null,b,m,E,null)}function U(P,O,b,_){let T=null,A=b.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(A!==void 0)T=A;else if(T=b.isPointLight===!0?c:l,i.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){let y=T.uuid,C=O.uuid,L=u[y];L===void 0&&(L={},u[y]=L);let k=L[C];k===void 0&&(k=T.clone(),L[C]=k,O.addEventListener("dispose",I)),T=k}if(T.visible=O.visible,T.wireframe=O.wireframe,_===cs?T.side=O.shadowSide!==null?O.shadowSide:O.side:T.side=O.shadowSide!==null?O.shadowSide:p[O.side],T.alphaMap=O.alphaMap,T.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,T.map=O.map,T.clipShadows=O.clipShadows,T.clippingPlanes=O.clippingPlanes,T.clipIntersection=O.clipIntersection,T.displacementMap=O.displacementMap,T.displacementScale=O.displacementScale,T.displacementBias=O.displacementBias,T.wireframeLinewidth=O.wireframeLinewidth,T.linewidth=O.linewidth,b.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let y=i.properties.get(T);y.light=b}return T}function w(P,O,b,_,T){if(P.visible===!1)return;if(P.layers.test(O.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&T===cs)&&(!P.frustumCulled||P.intersectsFrustum(n))){P.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,P.matrixWorld);let C=e.update(P),L=P.material;if(Array.isArray(L)){let k=C.groups;for(let Y=0,$=k.length;Y<$;Y++){let re=k[Y],q=L[re.materialIndex];if(q&&q.visible){let j=U(P,q,_,T);P.onBeforeShadow(i,P,O,b,C,j,re),i.renderBufferDirect(b,null,C,j,P,re),P.onAfterShadow(i,P,O,b,C,j,re)}}}else if(L.visible){let k=U(P,L,_,T);P.onBeforeShadow(i,P,O,b,C,k,null),i.renderBufferDirect(b,null,C,k,P,null),P.onAfterShadow(i,P,O,b,C,k,null)}}let y=P.children;for(let C=0,L=y.length;C<L;C++)w(y[C],O,b,_,T)}function I(P){P.target.removeEventListener("dispose",I);for(let b in u){let _=u[b],T=P.target.uuid;T in _&&(_[T].dispose(),delete _[T])}}}function d_(i,e){function t(){let G=!1,ye=new kt,fe=null,Se=new kt(0,0,0,0);return{setMask:function(Re){fe!==Re&&!G&&(i.colorMask(Re,Re,Re,Re),fe=Re)},setLocked:function(Re){G=Re},setClear:function(Re,me,h,S,B){B===!0&&(Re*=S,me*=S,h*=S),ye.set(Re,me,h,S),Se.equals(ye)===!1&&(i.clearColor(Re,me,h,S),Se.copy(ye))},reset:function(){G=!1,fe=null,Se.set(-1,0,0,0)}}}function n(){let G=!1,ye=!1,fe=null,Se=null,Re=null;return{setReversed:function(me){if(ye!==me){let h=e.get("EXT_clip_control");me?h.clipControlEXT(h.LOWER_LEFT_EXT,h.ZERO_TO_ONE_EXT):h.clipControlEXT(h.LOWER_LEFT_EXT,h.NEGATIVE_ONE_TO_ONE_EXT),ye=me;let S=Re;Re=null,this.setClear(S)}},getReversed:function(){return ye},setTest:function(me){me?ue(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(me){fe!==me&&!G&&(i.depthMask(me),fe=me)},setFunc:function(me){if(ye&&(me=xf[me]),Se!==me){switch(me){case go:i.depthFunc(i.NEVER);break;case vo:i.depthFunc(i.ALWAYS);break;case _o:i.depthFunc(i.LESS);break;case jr:i.depthFunc(i.LEQUAL);break;case xo:i.depthFunc(i.EQUAL);break;case yo:i.depthFunc(i.GEQUAL);break;case Mo:i.depthFunc(i.GREATER);break;case So:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Se=me}},setLocked:function(me){G=me},setClear:function(me){Re!==me&&(Re=me,ye&&(me=1-me),i.clearDepth(me))},reset:function(){G=!1,fe=null,Se=null,Re=null,ye=!1}}}function r(){let G=!1,ye=null,fe=null,Se=null,Re=null,me=null,h=null,S=null,B=null;return{setTest:function(se){G||(se?ue(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(se){ye!==se&&!G&&(i.stencilMask(se),ye=se)},setFunc:function(se,Q,ae){(fe!==se||Se!==Q||Re!==ae)&&(i.stencilFunc(se,Q,ae),fe=se,Se=Q,Re=ae)},setOp:function(se,Q,ae){(me!==se||h!==Q||S!==ae)&&(i.stencilOp(se,Q,ae),me=se,h=Q,S=ae)},setLocked:function(se){G=se},setClear:function(se){B!==se&&(i.clearStencil(se),B=se)},reset:function(){G=!1,ye=null,fe=null,Se=null,Re=null,me=null,h=null,S=null,B=null}}}let s=new t,a=new n,l=new r,c=new WeakMap,u=new WeakMap,o={},p={},f={},m=new WeakMap,v=[],E=null,g=!1,d=null,x=null,U=null,w=null,I=null,P=null,O=null,b=new We(0,0,0),_=0,T=!1,A=null,y=null,C=null,L=null,k=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,re=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(q)[1]),$=re>=1):q.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),$=re>=2);let j=null,J={},ee=i.getParameter(i.SCISSOR_BOX),he=i.getParameter(i.VIEWPORT),_e=new kt().fromArray(ee),Ue=new kt().fromArray(he);function Oe(G,ye,fe,Se){let Re=new Uint8Array(4),me=i.createTexture();i.bindTexture(G,me),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let h=0;h<fe;h++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(ye,0,i.RGBA,1,1,Se,0,i.RGBA,i.UNSIGNED_BYTE,Re):i.texImage2D(ye+h,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Re);return me}let oe={};oe[i.TEXTURE_2D]=Oe(i.TEXTURE_2D,i.TEXTURE_2D,1),oe[i.TEXTURE_CUBE_MAP]=Oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[i.TEXTURE_2D_ARRAY]=Oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),oe[i.TEXTURE_3D]=Oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),l.setClear(0),ue(i.DEPTH_TEST),a.setFunc(jr),nt(!1),Et(Kc),ue(i.CULL_FACE),Qe(qn);function ue(G){o[G]!==!0&&(i.enable(G),o[G]=!0)}function be(G){o[G]!==!1&&(i.disable(G),o[G]=!1)}function Ge(G,ye){return f[G]!==ye?(i.bindFramebuffer(G,ye),f[G]=ye,G===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ye),G===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ye),!0):!1}function Te(G,ye){let fe=v,Se=!1;if(G){fe=m.get(ye),fe===void 0&&(fe=[],m.set(ye,fe));let Re=G.textures;if(fe.length!==Re.length||fe[0]!==i.COLOR_ATTACHMENT0){for(let me=0,h=Re.length;me<h;me++)fe[me]=i.COLOR_ATTACHMENT0+me;fe.length=Re.length,Se=!0}}else fe[0]!==i.BACK&&(fe[0]=i.BACK,Se=!0);Se&&i.drawBuffers(fe)}function Je(G){return E!==G?(i.useProgram(G),E=G,!0):!1}let gt={[wr]:i.FUNC_ADD,[Bh]:i.FUNC_SUBTRACT,[kh]:i.FUNC_REVERSE_SUBTRACT};gt[zh]=i.MIN,gt[Vh]=i.MAX;let Ke={[Gh]:i.ZERO,[Wh]:i.ONE,[qh]:i.SRC_COLOR,[$c]:i.SRC_ALPHA,[$h]:i.SRC_ALPHA_SATURATE,[Zh]:i.DST_COLOR,[Yh]:i.DST_ALPHA,[Xh]:i.ONE_MINUS_SRC_COLOR,[jc]:i.ONE_MINUS_SRC_ALPHA,[Jh]:i.ONE_MINUS_DST_COLOR,[Kh]:i.ONE_MINUS_DST_ALPHA,[jh]:i.CONSTANT_COLOR,[Qh]:i.ONE_MINUS_CONSTANT_COLOR,[ef]:i.CONSTANT_ALPHA,[tf]:i.ONE_MINUS_CONSTANT_ALPHA};function Qe(G,ye,fe,Se,Re,me,h,S,B,se){if(G===qn){g===!0&&(be(i.BLEND),g=!1);return}if(g===!1&&(ue(i.BLEND),g=!0),G!==Hh){if(G!==d||se!==T){if((x!==wr||I!==wr)&&(i.blendEquation(i.FUNC_ADD),x=wr,I=wr),se)switch(G){case us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ui:i.blendFunc(i.ONE,i.ONE);break;case Zc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:$e("WebGLState: Invalid blending: ",G);break}else switch(G){case us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Zc:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jc:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",G);break}U=null,w=null,P=null,O=null,b.set(0,0,0),_=0,d=G,T=se}return}Re=Re||ye,me=me||fe,h=h||Se,(ye!==x||Re!==I)&&(i.blendEquationSeparate(gt[ye],gt[Re]),x=ye,I=Re),(fe!==U||Se!==w||me!==P||h!==O)&&(i.blendFuncSeparate(Ke[fe],Ke[Se],Ke[me],Ke[h]),U=fe,w=Se,P=me,O=h),(S.equals(b)===!1||B!==_)&&(i.blendColor(S.r,S.g,S.b,B),b.copy(S),_=B),d=G,T=!1}function vt(G,ye){G.side===Wn?be(i.CULL_FACE):ue(i.CULL_FACE);let fe=G.side===mn;ye&&(fe=!fe),nt(fe),G.blending===us&&G.transparent===!1?Qe(qn):Qe(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),s.setMask(G.colorWrite);let Se=G.stencilWrite;l.setTest(Se),Se&&(l.setMask(G.stencilWriteMask),l.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),l.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Xt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ue(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function nt(G){A!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),A=G)}function Et(G){G!==Uh?(ue(i.CULL_FACE),G!==y&&(G===Kc?i.cullFace(i.BACK):G===Oh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),y=G}function Gt(G){G!==C&&($&&i.lineWidth(G),C=G)}function Xt(G,ye,fe){G?(ue(i.POLYGON_OFFSET_FILL),(L!==ye||k!==fe)&&(L=ye,k=fe,a.getReversed()&&(ye=-ye),i.polygonOffset(ye,fe))):be(i.POLYGON_OFFSET_FILL)}function At(G){G?ue(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function It(G){G===void 0&&(G=i.TEXTURE0+Y-1),j!==G&&(i.activeTexture(G),j=G)}function W(G,ye,fe){fe===void 0&&(j===null?fe=i.TEXTURE0+Y-1:fe=j);let Se=J[fe];Se===void 0&&(Se={type:void 0,texture:void 0},J[fe]=Se),(Se.type!==G||Se.texture!==ye)&&(j!==fe&&(i.activeTexture(fe),j=fe),i.bindTexture(G,ye||oe[G]),Se.type=G,Se.texture=ye)}function Dt(){let G=J[j];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function st(){try{i.compressedTexImage2D(...arguments)}catch(G){$e("WebGLState:",G)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(G){$e("WebGLState:",G)}}function M(){try{i.texSubImage2D(...arguments)}catch(G){$e("WebGLState:",G)}}function D(){try{i.texSubImage3D(...arguments)}catch(G){$e("WebGLState:",G)}}function N(){try{i.compressedTexSubImage2D(...arguments)}catch(G){$e("WebGLState:",G)}}function H(){try{i.compressedTexSubImage3D(...arguments)}catch(G){$e("WebGLState:",G)}}function z(){try{i.texStorage2D(...arguments)}catch(G){$e("WebGLState:",G)}}function Z(){try{i.texStorage3D(...arguments)}catch(G){$e("WebGLState:",G)}}function V(){try{i.texImage2D(...arguments)}catch(G){$e("WebGLState:",G)}}function K(){try{i.texImage3D(...arguments)}catch(G){$e("WebGLState:",G)}}function ce(G){return p[G]!==void 0?p[G]:i.getParameter(G)}function ge(G,ye){p[G]!==ye&&(i.pixelStorei(G,ye),p[G]=ye)}function de(G){_e.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),_e.copy(G))}function ve(G){Ue.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),Ue.copy(G))}function Me(G,ye){let fe=u.get(ye);fe===void 0&&(fe=new WeakMap,u.set(ye,fe));let Se=fe.get(G);Se===void 0&&(Se=i.getUniformBlockIndex(ye,G.name),fe.set(G,Se))}function Le(G,ye){let Se=u.get(ye).get(G);c.get(ye)!==Se&&(i.uniformBlockBinding(ye,Se,G.__bindingPointIndex),c.set(ye,Se))}function Be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),o={},p={},j=null,J={},f={},m=new WeakMap,v=[],E=null,g=!1,d=null,x=null,U=null,w=null,I=null,P=null,O=null,b=new We(0,0,0),_=0,T=!1,A=null,y=null,C=null,L=null,k=null,_e.set(0,0,i.canvas.width,i.canvas.height),Ue.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),l.reset()}return{buffers:{color:s,depth:a,stencil:l},enable:ue,disable:be,bindFramebuffer:Ge,drawBuffers:Te,useProgram:Je,setBlending:Qe,setMaterial:vt,setFlipSided:nt,setCullFace:Et,setLineWidth:Gt,setPolygonOffset:Xt,setScissorTest:At,activeTexture:It,bindTexture:W,unbindTexture:Dt,compressedTexImage2D:st,compressedTexImage3D:F,texImage2D:V,texImage3D:K,pixelStorei:ge,getParameter:ce,updateUBOMapping:Me,uniformBlockBinding:Le,texStorage2D:z,texStorage3D:Z,texSubImage2D:M,texSubImage3D:D,compressedTexSubImage2D:N,compressedTexSubImage3D:H,scissor:de,viewport:ve,reset:Be}}function p_(i,e,t,n,r,s,a){let l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Xe,o=new WeakMap,p=new Set,f,m=new WeakMap,v=!1;try{v=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(F,M){return v?new OffscreenCanvas(F,M):ks("canvas")}function g(F,M,D){let N=1,H=st(F);if((H.width>D||H.height>D)&&(N=D/Math.max(H.width,H.height)),N<1)if(typeof HTMLImageElement!="undefined"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&F instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&F instanceof ImageBitmap||typeof VideoFrame!="undefined"&&F instanceof VideoFrame){let z=Math.floor(N*H.width),Z=Math.floor(N*H.height);f===void 0&&(f=E(z,Z));let V=M?E(z,Z):f;return V.width=z,V.height=Z,V.getContext("2d").drawImage(F,0,0,z,Z),Ze("WebGLRenderer: Texture has been resized from ("+H.width+"x"+H.height+") to ("+z+"x"+Z+")."),V}else return"data"in F&&Ze("WebGLRenderer: Image in DataTexture is too big ("+H.width+"x"+H.height+")."),F;return F}function d(F){return F.generateMipmaps}function x(F){i.generateMipmap(F)}function U(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(F,M,D,N,H,z=!1){if(F!==null){if(i[F]!==void 0)return i[F];Ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Z;N&&(Z=e.get("EXT_texture_norm16"),Z||Ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let V=M;if(M===i.RED&&(D===i.FLOAT&&(V=i.R32F),D===i.HALF_FLOAT&&(V=i.R16F),D===i.UNSIGNED_BYTE&&(V=i.R8),D===i.UNSIGNED_SHORT&&Z&&(V=Z.R16_EXT),D===i.SHORT&&Z&&(V=Z.R16_SNORM_EXT)),M===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(V=i.R8UI),D===i.UNSIGNED_SHORT&&(V=i.R16UI),D===i.UNSIGNED_INT&&(V=i.R32UI),D===i.BYTE&&(V=i.R8I),D===i.SHORT&&(V=i.R16I),D===i.INT&&(V=i.R32I)),M===i.RG&&(D===i.FLOAT&&(V=i.RG32F),D===i.HALF_FLOAT&&(V=i.RG16F),D===i.UNSIGNED_BYTE&&(V=i.RG8),D===i.UNSIGNED_SHORT&&Z&&(V=Z.RG16_EXT),D===i.SHORT&&Z&&(V=Z.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(D===i.UNSIGNED_BYTE&&(V=i.RG8UI),D===i.UNSIGNED_SHORT&&(V=i.RG16UI),D===i.UNSIGNED_INT&&(V=i.RG32UI),D===i.BYTE&&(V=i.RG8I),D===i.SHORT&&(V=i.RG16I),D===i.INT&&(V=i.RG32I)),M===i.RGB_INTEGER&&(D===i.UNSIGNED_BYTE&&(V=i.RGB8UI),D===i.UNSIGNED_SHORT&&(V=i.RGB16UI),D===i.UNSIGNED_INT&&(V=i.RGB32UI),D===i.BYTE&&(V=i.RGB8I),D===i.SHORT&&(V=i.RGB16I),D===i.INT&&(V=i.RGB32I)),M===i.RGBA_INTEGER&&(D===i.UNSIGNED_BYTE&&(V=i.RGBA8UI),D===i.UNSIGNED_SHORT&&(V=i.RGBA16UI),D===i.UNSIGNED_INT&&(V=i.RGBA32UI),D===i.BYTE&&(V=i.RGBA8I),D===i.SHORT&&(V=i.RGBA16I),D===i.INT&&(V=i.RGBA32I)),M===i.RGB&&(D===i.UNSIGNED_SHORT&&Z&&(V=Z.RGB16_EXT),D===i.SHORT&&Z&&(V=Z.RGB16_SNORM_EXT),D===i.UNSIGNED_INT_5_9_9_9_REV&&(V=i.RGB9_E5),D===i.UNSIGNED_INT_10F_11F_11F_REV&&(V=i.R11F_G11F_B10F)),M===i.RGBA){let K=z?Bs:ct.getTransfer(H);D===i.FLOAT&&(V=i.RGBA32F),D===i.HALF_FLOAT&&(V=i.RGBA16F),D===i.UNSIGNED_BYTE&&(V=K===_t?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT&&Z&&(V=Z.RGBA16_EXT),D===i.SHORT&&Z&&(V=Z.RGBA16_SNORM_EXT),D===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function I(F,M){let D;return F?M===null||M===si||M===fs?D=i.DEPTH24_STENCIL8:M===Xn?D=i.DEPTH32F_STENCIL8:M===hs&&(D=i.DEPTH24_STENCIL8,Ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===si||M===fs?D=i.DEPTH_COMPONENT24:M===Xn?D=i.DEPTH_COMPONENT32F:M===hs&&(D=i.DEPTH_COMPONENT16),D}function P(F,M){return d(F)===!0||F.isFramebufferTexture&&F.minFilter!==un&&F.minFilter!==dn?Math.log2(Math.max(M.width,M.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?M.mipmaps.length:1}function O(F){let M=F.target;M.removeEventListener("dispose",O),_(M),M.isVideoTexture&&o.delete(M),M.isHTMLTexture&&p.delete(M)}function b(F){let M=F.target;M.removeEventListener("dispose",b),A(M)}function _(F){let M=n.get(F);if(M.__webglInit===void 0)return;let D=F.source,N=m.get(D);if(N){let H=N[M.__cacheKey];H.usedTimes--,H.usedTimes===0&&T(F),Object.keys(N).length===0&&m.delete(D)}n.remove(F)}function T(F){let M=n.get(F);i.deleteTexture(M.__webglTexture);let D=F.source,N=m.get(D);delete N[M.__cacheKey],a.memory.textures--}function A(F){let M=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(M.__webglFramebuffer[N]))for(let H=0;H<M.__webglFramebuffer[N].length;H++)i.deleteFramebuffer(M.__webglFramebuffer[N][H]);else i.deleteFramebuffer(M.__webglFramebuffer[N]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[N])}else{if(Array.isArray(M.__webglFramebuffer))for(let N=0;N<M.__webglFramebuffer.length;N++)i.deleteFramebuffer(M.__webglFramebuffer[N]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let N=0;N<M.__webglColorRenderbuffer.length;N++)M.__webglColorRenderbuffer[N]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[N]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let D=F.textures;for(let N=0,H=D.length;N<H;N++){let z=n.get(D[N]);z.__webglTexture&&(i.deleteTexture(z.__webglTexture),a.memory.textures--),n.remove(D[N])}n.remove(F)}let y=0;function C(){y=0}function L(){return y}function k(F){y=F}function Y(){let F=y;return F>=r.maxTextures&&Ze("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+r.maxTextures),y+=1,F}function $(F){let M=[];return M.push(F.wrapS),M.push(F.wrapT),M.push(F.wrapR||0),M.push(F.magFilter),M.push(F.minFilter),M.push(F.anisotropy),M.push(F.internalFormat),M.push(F.format),M.push(F.type),M.push(F.generateMipmaps),M.push(F.premultiplyAlpha),M.push(F.flipY),M.push(F.unpackAlignment),M.push(F.colorSpace),M.join()}function re(F,M){let D=n.get(F);if(F.isVideoTexture&&W(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&D.__version!==F.version){let N=F.image;if(N===null)Ze("WebGLRenderer: Texture marked for update but no image data found.");else if(N.complete===!1)Ze("WebGLRenderer: Texture marked for update but image is incomplete");else{be(D,F,M);return}}else F.isExternalTexture&&(D.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+M)}function q(F,M){let D=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&D.__version!==F.version){be(D,F,M);return}else F.isExternalTexture&&(D.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+M)}function j(F,M){let D=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&D.__version!==F.version){be(D,F,M);return}t.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+M)}function J(F,M){let D=n.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&D.__version!==F.version){Ge(D,F,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+M)}let ee={[Qr]:i.REPEAT,[pi]:i.CLAMP_TO_EDGE,[bo]:i.MIRRORED_REPEAT},he={[un]:i.NEAREST,[sf]:i.NEAREST_MIPMAP_NEAREST,[ga]:i.NEAREST_MIPMAP_LINEAR,[dn]:i.LINEAR,[Zo]:i.LINEAR_MIPMAP_NEAREST,[cr]:i.LINEAR_MIPMAP_LINEAR},_e={[cf]:i.NEVER,[pf]:i.ALWAYS,[uf]:i.LESS,[Dl]:i.LEQUAL,[hf]:i.EQUAL,[Nl]:i.GEQUAL,[ff]:i.GREATER,[df]:i.NOTEQUAL};function Ue(F,M){if(M.type===Xn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===dn||M.magFilter===Zo||M.magFilter===ga||M.magFilter===cr||M.minFilter===dn||M.minFilter===Zo||M.minFilter===ga||M.minFilter===cr)&&Ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,ee[M.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,ee[M.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,ee[M.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,he[M.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,he[M.minFilter]),M.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,_e[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===un||M.minFilter!==ga&&M.minFilter!==cr||M.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let D=e.get("EXT_texture_filter_anisotropic");i.texParameterf(F,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Oe(F,M){let D=!1;F.__webglInit===void 0&&(F.__webglInit=!0,M.addEventListener("dispose",O));let N=M.source,H=m.get(N);H===void 0&&(H={},m.set(N,H));let z=$(M);if(z!==F.__cacheKey){H[z]===void 0&&(H[z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,D=!0),H[z].usedTimes++;let Z=H[F.__cacheKey];Z!==void 0&&(H[F.__cacheKey].usedTimes--,Z.usedTimes===0&&T(M)),F.__cacheKey=z,F.__webglTexture=H[z].texture}return D}function oe(F,M,D){return Math.floor(Math.floor(F/D)/M)}function ue(F,M,D,N){let z=F.updateRanges;if(z.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,D,N,M.data);else{z.sort((ge,de)=>ge.start-de.start);let Z=0;for(let ge=1;ge<z.length;ge++){let de=z[Z],ve=z[ge],Me=de.start+de.count,Le=oe(ve.start,M.width,4),Be=oe(de.start,M.width,4);ve.start<=Me+1&&Le===Be&&oe(ve.start+ve.count-1,M.width,4)===Le?de.count=Math.max(de.count,ve.start+ve.count-de.start):(++Z,z[Z]=ve)}z.length=Z+1;let V=t.getParameter(i.UNPACK_ROW_LENGTH),K=t.getParameter(i.UNPACK_SKIP_PIXELS),ce=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let ge=0,de=z.length;ge<de;ge++){let ve=z[ge],Me=Math.floor(ve.start/4),Le=Math.ceil(ve.count/4),Be=Me%M.width,G=Math.floor(Me/M.width),ye=Le,fe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Be),t.pixelStorei(i.UNPACK_SKIP_ROWS,G),t.texSubImage2D(i.TEXTURE_2D,0,Be,G,ye,fe,D,N,M.data)}F.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,V),t.pixelStorei(i.UNPACK_SKIP_PIXELS,K),t.pixelStorei(i.UNPACK_SKIP_ROWS,ce)}}function be(F,M,D){let N=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(N=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(N=i.TEXTURE_3D);let H=Oe(F,M),z=M.source;t.bindTexture(N,F.__webglTexture,i.TEXTURE0+D);let Z=n.get(z);if(z.version!==Z.__version||H===!0){if(t.activeTexture(i.TEXTURE0+D),(typeof ImageBitmap!="undefined"&&M.image instanceof ImageBitmap)===!1){let fe=ct.getPrimaries(ct.workingColorSpace),Se=M.colorSpace===ai?null:ct.getPrimaries(M.colorSpace),Re=M.colorSpace===ai||fe===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re)}t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let K=g(M.image,!1,r.maxTextureSize);K=Dt(M,K);let ce=s.convert(M.format,M.colorSpace),ge=s.convert(M.type),de=w(M.internalFormat,ce,ge,M.normalized,M.colorSpace,M.isVideoTexture);Ue(N,M);let ve,Me=M.mipmaps,Le=M.isVideoTexture!==!0,Be=Z.__version===void 0||H===!0,G=z.dataReady,ye=P(M,K);if(M.isDepthTexture)de=I(M.format===ur,M.type),Be&&(Le?t.texStorage2D(i.TEXTURE_2D,1,de,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,de,K.width,K.height,0,ce,ge,null));else if(M.isDataTexture)if(Me.length>0){Le&&Be&&t.texStorage2D(i.TEXTURE_2D,ye,de,Me[0].width,Me[0].height);for(let fe=0,Se=Me.length;fe<Se;fe++)ve=Me[fe],Le?G&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,ve.width,ve.height,ce,ge,ve.data):t.texImage2D(i.TEXTURE_2D,fe,de,ve.width,ve.height,0,ce,ge,ve.data);M.generateMipmaps=!1}else Le?(Be&&t.texStorage2D(i.TEXTURE_2D,ye,de,K.width,K.height),G&&ue(M,K,ce,ge)):t.texImage2D(i.TEXTURE_2D,0,de,K.width,K.height,0,ce,ge,K.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Le&&Be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,de,Me[0].width,Me[0].height,K.depth);for(let fe=0,Se=Me.length;fe<Se;fe++)if(ve=Me[fe],M.format!==Yn)if(ce!==null)if(Le){if(G)if(M.layerUpdates.size>0){let Re=hu(ve.width,ve.height,M.format,M.type);for(let me of M.layerUpdates){let h=ve.data.subarray(me*Re/ve.data.BYTES_PER_ELEMENT,(me+1)*Re/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,me,ve.width,ve.height,1,ce,h)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,ve.width,ve.height,K.depth,ce,ve.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,fe,de,ve.width,ve.height,K.depth,0,ve.data,0,0);else Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?G&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,ve.width,ve.height,K.depth,ce,ge,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,fe,de,ve.width,ve.height,K.depth,0,ce,ge,ve.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Le&&Be&&t.texStorage2D(i.TEXTURE_2D,ye,de,Me[0].width,Me[0].height);for(let fe=0,Se=Me.length;fe<Se;fe++)ve=Me[fe],M.format!==Yn?ce!==null?Le?G&&t.compressedTexSubImage2D(i.TEXTURE_2D,fe,0,0,ve.width,ve.height,ce,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,fe,de,ve.width,ve.height,0,ve.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?G&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,ve.width,ve.height,ce,ge,ve.data):t.texImage2D(i.TEXTURE_2D,fe,de,ve.width,ve.height,0,ce,ge,ve.data)}else if(M.isDataArrayTexture)if(Le){if(Be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,de,K.width,K.height,K.depth),G)if(M.layerUpdates.size>0){let fe=hu(K.width,K.height,M.format,M.type);for(let Se of M.layerUpdates){let Re=K.data.subarray(Se*fe/K.data.BYTES_PER_ELEMENT,(Se+1)*fe/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Se,K.width,K.height,1,ce,ge,Re)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ce,ge,K.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,de,K.width,K.height,K.depth,0,ce,ge,K.data);else if(M.isData3DTexture)Le?(Be&&t.texStorage3D(i.TEXTURE_3D,ye,de,K.width,K.height,K.depth),G&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ce,ge,K.data)):t.texImage3D(i.TEXTURE_3D,0,de,K.width,K.height,K.depth,0,ce,ge,K.data);else if(M.isFramebufferTexture){if(Be)if(Le)t.texStorage2D(i.TEXTURE_2D,ye,de,K.width,K.height);else{let fe=K.width,Se=K.height;for(let Re=0;Re<ye;Re++)t.texImage2D(i.TEXTURE_2D,Re,de,fe,Se,0,ce,ge,null),fe>>=1,Se>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let fe=i.canvas;if(fe.hasAttribute("layoutsubtree")||fe.setAttribute("layoutsubtree","true"),K.parentNode!==fe){fe.appendChild(K),p.add(M),fe.onpaint=Se=>{let Re=Se.changedElements;for(let me of p)Re.includes(me.image)&&(me.needsUpdate=!0)},fe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{let Re=i.RGBA,me=i.RGBA,h=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Re,me,h,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Me.length>0){if(Le&&Be){let fe=st(Me[0]);t.texStorage2D(i.TEXTURE_2D,ye,de,fe.width,fe.height)}for(let fe=0,Se=Me.length;fe<Se;fe++)ve=Me[fe],Le?G&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,ce,ge,ve):t.texImage2D(i.TEXTURE_2D,fe,de,ce,ge,ve);M.generateMipmaps=!1}else if(Le){if(Be){let fe=st(K);t.texStorage2D(i.TEXTURE_2D,ye,de,fe.width,fe.height)}G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce,ge,K)}else t.texImage2D(i.TEXTURE_2D,0,de,ce,ge,K);d(M)&&x(N),Z.__version=z.version,M.onUpdate&&M.onUpdate(M)}F.__version=M.version}function Ge(F,M,D){if(M.image.length!==6)return;let N=Oe(F,M),H=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+D);let z=n.get(H);if(H.version!==z.__version||N===!0){t.activeTexture(i.TEXTURE0+D);let Z=ct.getPrimaries(ct.workingColorSpace),V=M.colorSpace===ai?null:ct.getPrimaries(M.colorSpace),K=M.colorSpace===ai||Z===V?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let ce=M.isCompressedTexture||M.image[0].isCompressedTexture,ge=M.image[0]&&M.image[0].isDataTexture,de=[];for(let me=0;me<6;me++)!ce&&!ge?de[me]=g(M.image[me],!0,r.maxCubemapSize):de[me]=ge?M.image[me].image:M.image[me],de[me]=Dt(M,de[me]);let ve=de[0],Me=s.convert(M.format,M.colorSpace),Le=s.convert(M.type),Be=w(M.internalFormat,Me,Le,M.normalized,M.colorSpace),G=M.isVideoTexture!==!0,ye=z.__version===void 0||N===!0,fe=H.dataReady,Se=P(M,ve);Ue(i.TEXTURE_CUBE_MAP,M);let Re;if(ce){G&&ye&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,Be,ve.width,ve.height);for(let me=0;me<6;me++){Re=de[me].mipmaps;for(let h=0;h<Re.length;h++){let S=Re[h];M.format!==Yn?Me!==null?G?fe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,h,0,0,S.width,S.height,Me,S.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,h,Be,S.width,S.height,0,S.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,h,0,0,S.width,S.height,Me,Le,S.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,h,Be,S.width,S.height,0,Me,Le,S.data)}}}else{if(Re=M.mipmaps,G&&ye){Re.length>0&&Se++;let me=st(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,Be,me.width,me.height)}for(let me=0;me<6;me++)if(ge){G?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,de[me].width,de[me].height,Me,Le,de[me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Be,de[me].width,de[me].height,0,Me,Le,de[me].data);for(let h=0;h<Re.length;h++){let B=Re[h].image[me].image;G?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,h+1,0,0,B.width,B.height,Me,Le,B.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,h+1,Be,B.width,B.height,0,Me,Le,B.data)}}else{G?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Me,Le,de[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Be,Me,Le,de[me]);for(let h=0;h<Re.length;h++){let S=Re[h];G?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,h+1,0,0,Me,Le,S.image[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,h+1,Be,Me,Le,S.image[me])}}}d(M)&&x(i.TEXTURE_CUBE_MAP),z.__version=H.version,M.onUpdate&&M.onUpdate(M)}F.__version=M.version}function Te(F,M,D,N,H,z){let Z=s.convert(D.format,D.colorSpace),V=s.convert(D.type),K=w(D.internalFormat,Z,V,D.normalized,D.colorSpace),ce=n.get(M),ge=n.get(D);if(ge.__renderTarget=M,!ce.__hasExternalTextures){let de=Math.max(1,M.width>>z),ve=Math.max(1,M.height>>z);H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?t.texImage3D(H,z,K,de,ve,M.depth,0,Z,V,null):t.texImage2D(H,z,K,de,ve,0,Z,V,null)}t.bindFramebuffer(i.FRAMEBUFFER,F),It(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,N,H,ge.__webglTexture,0,At(M)):(H===i.TEXTURE_2D||H>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,N,H,ge.__webglTexture,z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(F,M,D){if(i.bindRenderbuffer(i.RENDERBUFFER,F),M.depthBuffer){let N=M.depthTexture,H=N&&N.isDepthTexture?N.type:null,z=I(M.stencilBuffer,H),Z=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;It(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At(M),z,M.width,M.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,At(M),z,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,z,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,F)}else{let N=M.textures;for(let H=0;H<N.length;H++){let z=N[H],Z=s.convert(z.format,z.colorSpace),V=s.convert(z.type),K=w(z.internalFormat,Z,V,z.normalized,z.colorSpace);It(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At(M),K,M.width,M.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,At(M),K,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,K,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function gt(F,M,D){let N=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,F),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let H=n.get(M.depthTexture);if(H.__renderTarget=M,(!H.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),N){if(H.__webglInit===void 0&&(H.__webglInit=!0,M.depthTexture.addEventListener("dispose",O)),H.__webglTexture===void 0){H.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),Ue(i.TEXTURE_CUBE_MAP,M.depthTexture);let ce=s.convert(M.depthTexture.format),ge=s.convert(M.depthTexture.type),de;M.depthTexture.format===mi?de=i.DEPTH_COMPONENT24:M.depthTexture.format===ur&&(de=i.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,de,M.width,M.height,0,ce,ge,null)}}else re(M.depthTexture,0);let z=H.__webglTexture,Z=At(M),V=N?i.TEXTURE_CUBE_MAP_POSITIVE_X+D:i.TEXTURE_2D,K=M.depthTexture.format===ur?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===mi)It(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,V,z,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,K,V,z,0);else if(M.depthTexture.format===ur)It(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,V,z,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,K,V,z,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ke(F){let M=n.get(F),D=F.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==F.depthTexture){let N=F.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),N){let H=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,N.removeEventListener("dispose",H)};N.addEventListener("dispose",H),M.__depthDisposeCallback=H}M.__boundDepthTexture=N}if(F.depthTexture&&!M.__autoAllocateDepthBuffer)if(D)for(let N=0;N<6;N++)gt(M.__webglFramebuffer[N],F,N);else{let N=F.texture.mipmaps;N&&N.length>0?gt(M.__webglFramebuffer[0],F,0):gt(M.__webglFramebuffer,F,0)}else if(D){M.__webglDepthbuffer=[];for(let N=0;N<6;N++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[N]),M.__webglDepthbuffer[N]===void 0)M.__webglDepthbuffer[N]=i.createRenderbuffer(),Je(M.__webglDepthbuffer[N],F,!1);else{let H=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=M.__webglDepthbuffer[N];i.bindRenderbuffer(i.RENDERBUFFER,z),i.framebufferRenderbuffer(i.FRAMEBUFFER,H,i.RENDERBUFFER,z)}}else{let N=F.texture.mipmaps;if(N&&N.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Je(M.__webglDepthbuffer,F,!1);else{let H=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,z),i.framebufferRenderbuffer(i.FRAMEBUFFER,H,i.RENDERBUFFER,z)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qe(F,M,D){let N=n.get(F);M!==void 0&&Te(N.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&Ke(F)}function vt(F){let M=F.texture,D=n.get(F),N=n.get(M);F.addEventListener("dispose",b);let H=F.textures,z=F.isWebGLCubeRenderTarget===!0,Z=H.length>1;if(Z||(N.__webglTexture===void 0&&(N.__webglTexture=i.createTexture()),N.__version=M.version,a.memory.textures++),z){D.__webglFramebuffer=[];for(let V=0;V<6;V++)if(M.mipmaps&&M.mipmaps.length>0){D.__webglFramebuffer[V]=[];for(let K=0;K<M.mipmaps.length;K++)D.__webglFramebuffer[V][K]=i.createFramebuffer()}else D.__webglFramebuffer[V]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){D.__webglFramebuffer=[];for(let V=0;V<M.mipmaps.length;V++)D.__webglFramebuffer[V]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(Z)for(let V=0,K=H.length;V<K;V++){let ce=n.get(H[V]);ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture(),a.memory.textures++)}if(F.samples>0&&It(F)===!1){D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let V=0;V<H.length;V++){let K=H[V];D.__webglColorRenderbuffer[V]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[V]);let ce=s.convert(K.format,K.colorSpace),ge=s.convert(K.type),de=w(K.internalFormat,ce,ge,K.normalized,K.colorSpace,F.isXRRenderTarget===!0),ve=At(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,de,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+V,i.RENDERBUFFER,D.__webglColorRenderbuffer[V])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),Je(D.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(z){t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture),Ue(i.TEXTURE_CUBE_MAP,M);for(let V=0;V<6;V++)if(M.mipmaps&&M.mipmaps.length>0)for(let K=0;K<M.mipmaps.length;K++)Te(D.__webglFramebuffer[V][K],F,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+V,K);else Te(D.__webglFramebuffer[V],F,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0);d(M)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Z){for(let V=0,K=H.length;V<K;V++){let ce=H[V],ge=n.get(ce),de=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(de=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,ge.__webglTexture),Ue(de,ce),Te(D.__webglFramebuffer,F,ce,i.COLOR_ATTACHMENT0+V,de,0),d(ce)&&x(de)}t.unbindTexture()}else{let V=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(V=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(V,N.__webglTexture),Ue(V,M),M.mipmaps&&M.mipmaps.length>0)for(let K=0;K<M.mipmaps.length;K++)Te(D.__webglFramebuffer[K],F,M,i.COLOR_ATTACHMENT0,V,K);else Te(D.__webglFramebuffer,F,M,i.COLOR_ATTACHMENT0,V,0);d(M)&&x(V),t.unbindTexture()}F.depthBuffer&&Ke(F)}function nt(F){let M=F.textures;for(let D=0,N=M.length;D<N;D++){let H=M[D];if(d(H)){let z=U(F),Z=n.get(H).__webglTexture;t.bindTexture(z,Z),x(z),t.unbindTexture()}}}let Et=[],Gt=[];function Xt(F){if(F.samples>0){if(It(F)===!1){let M=F.textures,D=F.width,N=F.height,H=i.COLOR_BUFFER_BIT,z=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=n.get(F),V=M.length>1;if(V)for(let ce=0;ce<M.length;ce++)t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Z.__webglMultisampledFramebuffer);let K=F.texture.mipmaps;K&&K.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Z.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Z.__webglFramebuffer);for(let ce=0;ce<M.length;ce++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(H|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(H|=i.STENCIL_BUFFER_BIT)),V){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Z.__webglColorRenderbuffer[ce]);let ge=n.get(M[ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ge,0)}i.blitFramebuffer(0,0,D,N,0,0,D,N,H,i.NEAREST),c===!0&&(Et.length=0,Gt.length=0,Et.push(i.COLOR_ATTACHMENT0+ce),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(Et.push(z),Gt.push(z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Gt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Et))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),V)for(let ce=0;ce<M.length;ce++){t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,Z.__webglColorRenderbuffer[ce]);let ge=n.get(M[ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,ge,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Z.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&c){let M=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function At(F){return Math.min(r.maxSamples,F.samples)}function It(F){let M=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function W(F){let M=a.render.frame;o.get(F)!==M&&(o.set(F,M),F.update())}function Dt(F,M){let D=F.colorSpace,N=F.format,H=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||D!==Hs&&D!==ai&&(ct.getTransfer(D)===_t?(N!==Yn||H!==Cn)&&Ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",D)),M}function st(F){return typeof HTMLImageElement!="undefined"&&F instanceof HTMLImageElement?(u.width=F.naturalWidth||F.width,u.height=F.naturalHeight||F.height):typeof VideoFrame!="undefined"&&F instanceof VideoFrame?(u.width=F.displayWidth,u.height=F.displayHeight):(u.width=F.width,u.height=F.height),u}this.allocateTextureUnit=Y,this.resetTextureUnits=C,this.getTextureUnits=L,this.setTextureUnits=k,this.setTexture2D=re,this.setTexture2DArray=q,this.setTexture3D=j,this.setTextureCube=J,this.rebindTextures=Qe,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=It,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function m_(i,e){function t(n,r=ai){let s,a=ct.getTransfer(r);if(n===Cn)return i.UNSIGNED_BYTE;if(n===$o)return i.UNSIGNED_SHORT_4_4_4_4;if(n===jo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===nu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===iu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===eu)return i.BYTE;if(n===tu)return i.SHORT;if(n===hs)return i.UNSIGNED_SHORT;if(n===Jo)return i.INT;if(n===si)return i.UNSIGNED_INT;if(n===Xn)return i.FLOAT;if(n===gn)return i.HALF_FLOAT;if(n===ru)return i.ALPHA;if(n===su)return i.RGB;if(n===Yn)return i.RGBA;if(n===mi)return i.DEPTH_COMPONENT;if(n===ur)return i.DEPTH_STENCIL;if(n===Qo)return i.RED;if(n===el)return i.RED_INTEGER;if(n===hr)return i.RG;if(n===tl)return i.RG_INTEGER;if(n===nl)return i.RGBA_INTEGER;if(n===va||n===_a||n===xa||n===ya)if(a===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===va)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===va)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_a)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ya)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===il||n===rl||n===sl||n===al)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===il)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===rl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===al)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ol||n===ll||n===cl||n===ul||n===hl||n===Ma||n===fl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ol||n===ll)return a===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===cl)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===ul)return s.COMPRESSED_R11_EAC;if(n===hl)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Ma)return s.COMPRESSED_RG11_EAC;if(n===fl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===dl||n===pl||n===ml||n===gl||n===vl||n===_l||n===xl||n===yl||n===Ml||n===Sl||n===bl||n===Tl||n===El||n===wl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===dl)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pl)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ml)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gl)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vl)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_l)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xl)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yl)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ml)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sl)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bl)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tl)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===El)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wl)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Al||n===Rl||n===Cl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Al)return a===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Rl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Cl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Il||n===Pl||n===Sa||n===Ll)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Il)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Pl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ll)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var g_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,v_=`
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

}`,Iu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new js(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Vt({vertexShader:g_,fragmentShader:v_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ne(new ta(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Pu=class extends gi{constructor(e,t){super();let n=this,r=null,s=1,a=null,l="local-floor",c=1,u=null,o=null,p=null,f=null,m=null,v=null,E=typeof XRWebGLBinding!="undefined",g=new Iu,d={},x=t.getContextAttributes(),U=null,w=null,I=[],P=[],O=new Xe,b=null,_=null,T=new ln;T.viewport=new kt;let A=new ln;A.viewport=new kt;let y=[T,A],C=new Wo,L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let ue=I[oe];return ue===void 0&&(ue=new is,I[oe]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(oe){let ue=I[oe];return ue===void 0&&(ue=new is,I[oe]=ue),ue.getGripSpace()},this.getHand=function(oe){let ue=I[oe];return ue===void 0&&(ue=new is,I[oe]=ue),ue.getHandSpace()};function Y(oe){let ue=P.indexOf(oe.inputSource);if(ue===-1)return;let be=I[ue];be!==void 0&&(be.update(oe.inputSource,oe.frame,u||a),be.dispatchEvent({type:oe.type,data:oe.inputSource}))}function $(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",re);for(let oe=0;oe<I.length;oe++){let ue=P[oe];ue!==null&&(P[oe]=null,I[oe].disconnect(ue))}L=null,k=null,g.reset();for(let oe in d)delete d[oe];if(e.setRenderTarget(U),m=null,f=null,p=null,r=null,w=null,Oe.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(O.width,O.height,!1),_!==null){let oe=_.camera;oe.fov=_.fov,oe.zoom=_.zoom,oe.updateProjectionMatrix(),_=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){s=oe,n.isPresenting===!0&&Ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){l=oe,n.isPresenting===!0&&Ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(oe){u=oe},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p===null&&E&&(p=new XRWebGLBinding(r,t)),p},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(oe){if(r=oe,r!==null){if(U=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",$),r.addEventListener("inputsourceschange",re),x.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(O),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Ge=null,Te=null;x.depth&&(Te=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=x.stencil?ur:mi,Ge=x.stencil?fs:si);let Je={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};p=this.getBinding(),f=p.createProjectionLayer(Je),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new Qt(f.textureWidth,f.textureHeight,{format:Yn,type:Cn,depthTexture:new er(f.textureWidth,f.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let be={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,be),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new Qt(m.framebufferWidth,m.framebufferHeight,{format:Yn,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(l),Oe.setContext(r),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function re(oe){for(let ue=0;ue<oe.removed.length;ue++){let be=oe.removed[ue],Ge=P.indexOf(be);Ge>=0&&(P[Ge]=null,I[Ge].disconnect(be))}for(let ue=0;ue<oe.added.length;ue++){let be=oe.added[ue],Ge=P.indexOf(be);if(Ge===-1){for(let Je=0;Je<I.length;Je++)if(Je>=P.length){P.push(be),Ge=Je;break}else if(P[Je]===null){P[Je]=be,Ge=Je;break}if(Ge===-1)break}let Te=I[Ge];Te&&Te.connect(be)}}let q=new te,j=new te;function J(oe,ue,be){q.setFromMatrixPosition(ue.matrixWorld),j.setFromMatrixPosition(be.matrixWorld);let Ge=q.distanceTo(j),Te=ue.projectionMatrix.elements,Je=be.projectionMatrix.elements,gt=Te[14]/(Te[10]-1),Ke=Te[14]/(Te[10]+1),Qe=(Te[9]+1)/Te[5],vt=(Te[9]-1)/Te[5],nt=(Te[8]-1)/Te[0],Et=(Je[8]+1)/Je[0],Gt=gt*nt,Xt=gt*Et,At=Ge/(-nt+Et),It=At*-nt;if(ue.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(It),oe.translateZ(At),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),Te[10]===-1)oe.projectionMatrix.copy(ue.projectionMatrix),oe.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{let W=gt+At,Dt=Ke+At,st=Gt-It,F=Xt+(Ge-It),M=Qe*Ke/Dt*W,D=vt*Ke/Dt*W;oe.projectionMatrix.makePerspective(st,F,M,D,W,Dt),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function ee(oe,ue){ue===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(ue.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(r===null)return;let ue=oe.near,be=oe.far;g.texture!==null&&(g.depthNear>0&&(ue=g.depthNear),g.depthFar>0&&(be=g.depthFar)),C.near=A.near=T.near=ue,C.far=A.far=T.far=be,(L!==C.near||k!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),L=C.near,k=C.far),C.layers.mask=oe.layers.mask|6,T.layers.mask=C.layers.mask&-5,A.layers.mask=C.layers.mask&-3;let Ge=oe.parent,Te=C.cameras;ee(C,Ge);for(let Je=0;Je<Te.length;Je++)ee(Te[Je],Ge);Te.length===2?J(C,T,A):C.projectionMatrix.copy(T.projectionMatrix),_===null&&oe.isPerspectiveCamera&&(_={camera:oe,fov:oe.fov,zoom:oe.zoom}),he(oe,C,Ge)};function he(oe,ue,be){be===null?oe.matrix.copy(ue.matrixWorld):(oe.matrix.copy(be.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(ue.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(ue.projectionMatrix),oe.projectionMatrixInverse.copy(ue.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Eo*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(oe){c=oe,f!==null&&(f.fixedFoveation=oe),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=oe)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(C)},this.getCameraTexture=function(oe){return d[oe]};let _e=null;function Ue(oe,ue){if(o=ue.getViewerPose(u||a),v=ue,o!==null){let be=o.views;m!==null&&(e.setRenderTargetFramebuffer(w,m.framebuffer),e.setRenderTarget(w));let Ge=!1;be.length!==C.cameras.length&&(C.cameras.length=0,Ge=!0);for(let Ke=0;Ke<be.length;Ke++){let Qe=be[Ke],vt=null;if(m!==null)vt=m.getViewport(Qe);else{let Et=p.getViewSubImage(f,Qe);vt=Et.viewport,Ke===0&&(e.setRenderTargetTextures(w,Et.colorTexture,Et.depthStencilTexture),e.setRenderTarget(w))}let nt=y[Ke];nt===void 0&&(nt=new ln,nt.layers.enable(Ke),nt.viewport=new kt,y[Ke]=nt),nt.matrix.fromArray(Qe.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Qe.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(vt.x,vt.y,vt.width,vt.height),Ke===0&&(C.matrix.copy(nt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Ge===!0&&C.cameras.push(nt)}let Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){p=n.getBinding();let Ke=p.getDepthInformation(be[0]);Ke&&Ke.isValid&&Ke.texture&&g.init(Ke,r.renderState)}if(Te&&Te.includes("camera-access")&&E){e.state.unbindTexture(),p=n.getBinding();for(let Ke=0;Ke<be.length;Ke++){let Qe=be[Ke].camera;if(Qe){let vt=d[Qe];vt||(vt=new js,d[Qe]=vt);let nt=p.getCameraImage(Qe);vt.sourceTexture=nt}}}}for(let be=0;be<I.length;be++){let Ge=P[be],Te=I[be];Ge!==null&&Te!==void 0&&Te.update(Ge,ue,u||a)}_e&&_e(oe,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),v=null}let Oe=new Wf;Oe.setAnimationLoop(Ue),this.setAnimationLoop=function(oe){_e=oe},this.dispose=function(){}}},__=new Lt,Jf=new et;Jf.set(-1,0,0,0,1,0,0,0,1);function x_(i,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,lu(i)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,x,U,w){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(g,d):d.isMeshLambertMaterial?(s(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(g,d),p(g,d)):d.isMeshPhongMaterial?(s(g,d),o(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(g,d),f(g,d),d.isMeshPhysicalMaterial&&m(g,d,w)):d.isMeshMatcapMaterial?(s(g,d),v(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),E(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&l(g,d)):d.isPointsMaterial?c(g,d,x,U):d.isSpriteMaterial?u(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===mn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===mn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);let x=e.get(d),U=x.envMap,w=x.envMapRotation;U&&(g.envMap.value=U,g.envMapRotation.value.setFromMatrix4(__.makeRotationFromEuler(w)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Jf),g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function l(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function c(g,d,x,U){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*x,g.scale.value=U*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function o(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function p(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function f(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,x){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===mn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.retroreflectivity>0&&(g.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,d){d.matcap&&(g.matcap.value=d.matcap)}function E(g,d){let x=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function y_(i,e,t,n){let r={},s={},a=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,I){let P=I.program;n.uniformBlockBinding(w,P)}function u(w,I){let P=r[w.id];P===void 0&&(g(w),P=o(w),r[w.id]=P,w.addEventListener("dispose",x));let O=I.program;n.updateUBOMapping(w,O);let b=e.render.frame;s[w.id]!==b&&(f(w),s[w.id]=b)}function o(w){let I=p();w.__bindingPointIndex=I;let P=i.createBuffer(),O=w.__size,b=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,P),i.bufferData(i.UNIFORM_BUFFER,O,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,I,P),P}function p(){for(let w=0;w<l;w++)if(a.indexOf(w)===-1)return a.push(w),w;return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let I=r[w.id],P=w.uniforms,O=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,I);for(let b=0,_=P.length;b<_;b++){let T=P[b];if(Array.isArray(T))for(let A=0,y=T.length;A<y;A++)m(T[A],b,A,O);else m(T,b,0,O)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(w,I,P,O){if(E(w,I,P,O)===!0){let b=w.__offset,_=w.value;if(Array.isArray(_)){let T=0;for(let A=0;A<_.length;A++){let y=_[A],C=d(y);v(y,w.__data,T),typeof y!="number"&&typeof y!="boolean"&&!y.isMatrix3&&!ArrayBuffer.isView(y)&&(T+=C.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(_,w.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,w.__data)}}function v(w,I,P){typeof w=="number"||typeof w=="boolean"?I[0]=w:w.isMatrix3?(I[0]=w.elements[0],I[1]=w.elements[1],I[2]=w.elements[2],I[3]=0,I[4]=w.elements[3],I[5]=w.elements[4],I[6]=w.elements[5],I[7]=0,I[8]=w.elements[6],I[9]=w.elements[7],I[10]=w.elements[8],I[11]=0):ArrayBuffer.isView(w)?I.set(new w.constructor(w.buffer,w.byteOffset,I.length)):w.toArray(I,P)}function E(w,I,P,O){let b=w.value,_=I+"_"+P;if(O[_]===void 0)return typeof b=="number"||typeof b=="boolean"?O[_]=b:ArrayBuffer.isView(b)?O[_]=b.slice():O[_]=b.clone(),!0;{let T=O[_];if(typeof b=="number"||typeof b=="boolean"){if(T!==b)return O[_]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(T.equals(b)===!1)return T.copy(b),!0}}return!1}function g(w){let I=w.uniforms,P=0,O=16;for(let _=0,T=I.length;_<T;_++){let A=Array.isArray(I[_])?I[_]:[I[_]];for(let y=0,C=A.length;y<C;y++){let L=A[y],k=Array.isArray(L.value)?L.value:[L.value];for(let Y=0,$=k.length;Y<$;Y++){let re=k[Y],q=d(re),j=P%O,J=j%q.boundary,ee=j+J;P+=J,ee!==0&&O-ee<q.storage&&(P+=O-ee),L.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=P,P+=q.storage}}}let b=P%O;return b>0&&(P+=O-b),w.__size=P,w.__cache={},this}function d(w){let I={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(I.boundary=4,I.storage=4):w.isVector2?(I.boundary=8,I.storage=8):w.isVector3||w.isColor?(I.boundary=16,I.storage=12):w.isVector4?(I.boundary=16,I.storage=16):w.isMatrix3?(I.boundary=48,I.storage=48):w.isMatrix4?(I.boundary=64,I.storage=64):w.isTexture?Ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(I.boundary=16,I.storage=w.byteLength):Ze("WebGLRenderer: Unsupported uniform value type.",w),I}function x(w){let I=w.target;I.removeEventListener("dispose",x);let P=a.indexOf(I.__bindingPointIndex);a.splice(P,1),i.deleteBuffer(r[I.id]),delete r[I.id],delete s[I.id]}function U(){for(let w in r)i.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:c,update:u,dispose:U}}var M_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Si=null;function S_(){return Si===null&&(Si=new Tr(M_,16,16,hr,gn),Si.name="DFG_LUT",Si.minFilter=dn,Si.magFilter=dn,Si.wrapS=pi,Si.wrapT=pi,Si.generateMipmaps=!1,Si.needsUpdate=!0),Si}var Hl=class{constructor(e={}){let{canvas:t=gf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:o="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:m=Cn}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;let E=m,g=new Set([nl,tl,el]),d=new Set([Cn,si,hs,fs,$o,jo]),x=new Uint32Array(4),U=new Int32Array(4),w=new te,I=null,P=null,O=[],b=[],_=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,A=!1,y=null,C=null,L=null,k=null;this._outputColorSpace=fn;let Y=0,$=0,re=null,q=-1,j=null,J=new kt,ee=new kt,he=null,_e=new We(0),Ue=0,Oe=t.width,oe=t.height,ue=1,be=null,Ge=null,Te=new kt(0,0,Oe,oe),Je=new kt(0,0,Oe,oe),gt=!1,Ke=new rs,Qe=!1,vt=!1,nt=new Lt,Et=new te,Gt=new kt,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},At=!1;function It(){return re===null?ue:1}let W=n;function Dt(R,X){return t.getContext(R,X)}let st,F,M,D,N,H,z,Z,V,K,ce,ge,de,ve,Me,Le,Be,G,ye,fe,Se,Re,me;try{let R={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:o,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",B,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",Q,!1),W===null){let X="webgl2";if(W=Dt(X,R),W===null)throw Dt(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}h()}catch(R){throw t.removeEventListener("webglcontextlost",B,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),$e("WebGLRenderer: "+R.message),R}function h(){st=new Cg(W),st.init(),Se=new m_(W,st),F=new xg(W,st,e,Se),M=new d_(W,st),F.reversedDepthBuffer&&f&&M.buffers.depth.setReversed(!0),C=W.createFramebuffer(),L=W.createFramebuffer(),k=W.createFramebuffer(),D=new Lg(W),N=new Qv,H=new p_(W,st,M,N,F,Se,D),z=new Rg(T),Z=new Np(W),Re=new vg(W,Z),V=new Ig(W,Z,D,Re),K=new Ng(W,V,Z,Re,D),G=new Dg(W,F,H),Me=new yg(N),ce=new jv(T,z,st,F,Re,Me),ge=new x_(T,N),de=new t_,ve=new o_(st),Be=new gg(T,z,M,K,v,c),Le=new f_(T,K,F),me=new y_(W,D,F,M),ye=new _g(W,st,D),fe=new Pg(W,st,D),D.programs=ce.programs,T.capabilities=F,T.extensions=st,T.properties=N,T.renderLists=de,T.shadowMap=Le,T.state=M,T.info=D}E!==Cn&&(_=new Og(E,t.width,t.height,l,r,s));let S=new Pu(T,W);this.xr=S,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let R=st.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=st.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(R){R!==void 0&&(ue=R,this.setSize(Oe,oe,!1))},this.getSize=function(R){return R.set(Oe,oe)},this.setSize=function(R,X,le=!0){if(S.isPresenting){Ze("WebGLRenderer: Can't change size while VR device is presenting.");return}Oe=R,oe=X,t.width=Math.floor(R*ue),t.height=Math.floor(X*ue),le===!0&&(t.style.width=R+"px",t.style.height=X+"px"),_!==null&&_.setSize(t.width,t.height),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(Oe*ue,oe*ue).floor()},this.setDrawingBufferSize=function(R,X,le){Oe=R,oe=X,ue=le,t.width=Math.floor(R*le),t.height=Math.floor(X*le),this.setViewport(0,0,R,X)},this.setEffects=function(R){if(E===Cn){$e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let X=0;X<R.length;X++)if(R[X].isOutputPass===!0){Ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(J)},this.getViewport=function(R){return R.copy(Te)},this.setViewport=function(R,X,le,ne){R.isVector4?Te.set(R.x,R.y,R.z,R.w):Te.set(R,X,le,ne),M.viewport(J.copy(Te).multiplyScalar(ue).round())},this.getScissor=function(R){return R.copy(Je)},this.setScissor=function(R,X,le,ne){R.isVector4?Je.set(R.x,R.y,R.z,R.w):Je.set(R,X,le,ne),M.scissor(ee.copy(Je).multiplyScalar(ue).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(R){M.setScissorTest(gt=R)},this.setOpaqueSort=function(R){be=R},this.setTransparentSort=function(R){Ge=R},this.getClearColor=function(R){return R.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(R=!0,X=!0,le=!0){let ne=0;if(R){let ie=!1;if(re!==null){let Ee=re.texture.format;ie=g.has(Ee)}if(ie){let Ee=re.texture.type,Pe=d.has(Ee),Ae=Be.getClearColor(),Fe=Be.getClearAlpha(),Ve=Ae.r,it=Ae.g,ut=Ae.b;Pe?(x[0]=Ve,x[1]=it,x[2]=ut,x[3]=Fe,W.clearBufferuiv(W.COLOR,0,x)):(U[0]=Ve,U[1]=it,U[2]=ut,U[3]=Fe,W.clearBufferiv(W.COLOR,0,U))}else ne|=W.COLOR_BUFFER_BIT}X&&(ne|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),le&&(ne|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&W.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),y=R},this.dispose=function(){t.removeEventListener("webglcontextlost",B,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),Be.dispose(),de.dispose(),ve.dispose(),N.dispose(),z.dispose(),K.dispose(),Re.dispose(),me.dispose(),ce.dispose(),S.dispose(),S.removeEventListener("sessionstart",at),S.removeEventListener("sessionend",Bt),Mt.stop()};function B(R){R.preventDefault(),ou("WebGLRenderer: Context Lost."),A=!0}function se(){ou("WebGLRenderer: Context Restored."),A=!1;let R=D.autoReset,X=Le.enabled,le=Le.autoUpdate,ne=Le.needsUpdate,ie=Le.type;h(),D.autoReset=R,Le.enabled=X,Le.autoUpdate=le,Le.needsUpdate=ne,Le.type=ie}function Q(R){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ae(R){let X=R.target;X.removeEventListener("dispose",ae),pe(X)}function pe(R){xe(R),N.remove(R)}function xe(R){let X=N.get(R).programs;X!==void 0&&(X.forEach(function(le){ce.releaseProgram(le)}),R.isShaderMaterial&&ce.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,le,ne,ie,Ee){X===null&&(X=Xt);let Pe=ie.isMesh&&ie.matrixWorld.determinantAffine()<0,Ae=wn(R,X,le,ne,ie);M.setMaterial(ne,Pe);let Fe=le.index,Ve=1;if(ne.wireframe===!0){if(Fe=V.getWireframeAttribute(le),Fe===void 0)return;Ve=2}let it=le.drawRange,ut=le.attributes.position,He=it.start*Ve,bt=(it.start+it.count)*Ve;Ee!==null&&(He=Math.max(He,Ee.start*Ve),bt=Math.min(bt,(Ee.start+Ee.count)*Ve)),Fe!==null?(He=Math.max(He,0),bt=Math.min(bt,Fe.count)):ut!=null&&(He=Math.max(He,0),bt=Math.min(bt,ut.count));let Jt=bt-He;if(Jt<0||Jt===1/0)return;Re.setup(ie,ne,Ae,le,Fe);let Ft,Pt=ye;if(Fe!==null&&(Ft=Z.get(Fe),Pt=fe,Pt.setIndex(Ft)),ie.isMesh)ne.wireframe===!0?(M.setLineWidth(ne.wireframeLinewidth*It()),Pt.setMode(W.LINES)):Pt.setMode(W.TRIANGLES);else if(ie.isLine){let _n=ne.linewidth;_n===void 0&&(_n=1),M.setLineWidth(_n*It()),ie.isLineSegments?Pt.setMode(W.LINES):ie.isLineLoop?Pt.setMode(W.LINE_LOOP):Pt.setMode(W.LINE_STRIP)}else ie.isPoints?Pt.setMode(W.POINTS):ie.isSprite&&Pt.setMode(W.TRIANGLES);if(ie.isBatchedMesh)if(st.get("WEBGL_multi_draw"))Pt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{let _n=ie._multiDrawStarts,De=ie._multiDrawCounts,Tn=ie._multiDrawCount,mt=Fe?Z.get(Fe).bytesPerElement:1,zn=N.get(ne).currentProgram.getUniforms();for(let hi=0;hi<Tn;hi++)zn.setValue(W,"_gl_DrawID",hi),Pt.render(_n[hi]/mt,De[hi])}else if(ie.isInstancedMesh)Pt.renderInstances(He,Jt,ie.count);else if(le.isInstancedBufferGeometry){let _n=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,De=Math.min(le.instanceCount,_n);Pt.renderInstances(He,Jt,De)}else Pt.render(He,Jt)};function Ie(R,X,le,ne){y!==null&&R.isNodeMaterial&&y.setObject(ne,R),Qe===!0&&Me.setState(R,le,!1),R.transparent===!0&&R.side===Wn&&R.forceSinglePass===!1?(R.side=mn,R.needsUpdate=!0,Ot(R,X,ne),R.side=or,R.needsUpdate=!0,Ot(R,X,ne),R.side=Wn):Ot(R,X,ne)}this.compile=function(R,X,le=null){le===null&&(le=R),y!==null&&y.renderStart(R,X,le),P=ve.get(le),P.init(X),b.push(P),le.traverseVisible(function(ie){ie.isLight&&ie.layers.test(X.layers)&&(P.pushLight(ie),ie.castShadow&&P.pushShadow(ie))}),R!==le&&R.traverseVisible(function(ie){ie.isLight&&ie.layers.test(X.layers)&&(P.pushLight(ie),ie.castShadow&&P.pushShadow(ie))}),P.setupLights(),y!==null&&y.updateLights(P.state.lightsArray),vt=this.localClippingEnabled,Qe=Me.init(this.clippingPlanes,vt),Qe===!0&&Me.setGlobalState(this.clippingPlanes,X),y!==null&&Le.render(P.state.shadowsArray,le,X);let ne=new Set;return R.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;let Ee=ie.material;if(Ee)if(Array.isArray(Ee))for(let Pe=0;Pe<Ee.length;Pe++){let Ae=Ee[Pe];Ie(Ae,le,X,ie),ne.add(Ae)}else Ie(Ee,le,X,ie),ne.add(Ee)}),P=b.pop(),y!==null&&y.renderEnd(),ne},this.compileAsync=function(R,X,le=null){let ne=this.compile(R,X,le);return new Promise(ie=>{function Ee(){if(ne.forEach(function(Pe){let Fe=N.get(Pe).currentProgram;(Fe===void 0||Fe.isReady())&&ne.delete(Pe)}),ne.size===0){ie(R);return}setTimeout(Ee,10)}st.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let ze=null;function je(R){ze&&ze(R)}function at(){Mt.stop()}function Bt(){Mt.start()}let Mt=new Wf;Mt.setAnimationLoop(je),typeof self!="undefined"&&Mt.setContext(self),this.setAnimationLoop=function(R){ze=R,S.setAnimationLoop(R),R===null?Mt.stop():Mt.start()},S.addEventListener("sessionstart",at),S.addEventListener("sessionend",Bt),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;y!==null&&y.renderStart(R,X);let le=S.enabled===!0&&S.isPresenting===!0,ne=_!==null&&(re===null||le)&&_.begin(T,re);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),S.enabled===!0&&S.isPresenting===!0&&(_===null||_.isCompositing()===!1)&&(S.cameraAutoUpdate===!0&&S.updateCamera(X),X=S.getCamera()),R.isScene===!0&&R.onBeforeRender(T,R,X,re),P=ve.get(R,b.length),P.init(X),P.state.textureUnits=H.getTextureUnits(),b.push(P),nt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Ke.setFromProjectionMatrix(nt,ni,X.reversedDepth),vt=this.localClippingEnabled,Qe=Me.init(this.clippingPlanes,vt),I=de.get(R,O.length),I.init(),O.push(I),S.enabled===!0&&S.isPresenting===!0){let Pe=T.xr.getDepthSensingMesh();Pe!==null&&Zt(Pe,X,-1/0,T.sortObjects)}Zt(R,X,0,T.sortObjects),I.finish(),y!==null&&y.updateLights(P.state.lightsArray),T.sortObjects===!0&&I.sort(be,Ge),At=S.enabled===!1||S.isPresenting===!1||S.hasDepthSensing()===!1,At&&Be.addToRenderList(I,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Qe===!0&&Me.beginShadows();let ie=P.state.shadowsArray;if(Le.render(ie,R,X),Qe===!0&&Me.endShadows(),(ne&&_.hasRenderPass())===!1){let Pe=I.opaque,Ae=I.transmissive;if(P.setupLights(),X.isArrayCamera){let Fe=X.cameras;if(Ae.length>0)for(let Ve=0,it=Fe.length;Ve<it;Ve++){let ut=Fe[Ve];St(Pe,Ae,R,ut)}At&&Be.render(R);for(let Ve=0,it=Fe.length;Ve<it;Ve++){let ut=Fe[Ve];zt(I,R,ut,ut.viewport)}}else Ae.length>0&&St(Pe,Ae,R,X),At&&Be.render(R),zt(I,R,X)}re!==null&&$===0&&(H.updateMultisampleRenderTarget(re),H.updateRenderTargetMipmap(re)),ne&&_.end(T),R.isScene===!0&&R.onAfterRender(T,R,X),Re.resetDefaultState(),q=-1,j=null,b.pop(),b.length>0?(P=b[b.length-1],H.setTextureUnits(P.state.textureUnits),Qe===!0&&Me.setGlobalState(T.clippingPlanes,P.state.camera)):P=null,O.pop(),O.length>0?I=O[O.length-1]:I=null,y!==null&&y.renderEnd()};function Zt(R,X,le,ne){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)le=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLightProbeGrid)P.pushLightProbeGrid(R);else if(R.isLight)P.pushLight(R),R.castShadow&&P.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(Ke)){ne&&Gt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(nt);let Pe=K.update(R),Ae=R.material;Ae.visible&&I.push(R,Pe,Ae,le,Gt.z,null,X)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(Ke))){let Pe=K.update(R),Ae=R.material;if(ne&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Gt.copy(R.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Gt.copy(Pe.boundingSphere.center)),Gt.applyMatrix4(R.matrixWorld).applyMatrix4(nt)),Array.isArray(Ae)){let Fe=Pe.groups;for(let Ve=0,it=Fe.length;Ve<it;Ve++){let ut=Fe[Ve],He=Ae[ut.materialIndex];He&&He.visible&&I.push(R,Pe,He,le,Gt.z,ut,X)}}else Ae.visible&&I.push(R,Pe,Ae,le,Gt.z,null,X)}}let Ee=R.children;for(let Pe=0,Ae=Ee.length;Pe<Ae;Pe++)Zt(Ee[Pe],X,le,ne)}function zt(R,X,le,ne){let{opaque:ie,transmissive:Ee,transparent:Pe}=R;P.setupLightsView(le),Qe===!0&&Me.setGlobalState(T.clippingPlanes,le),ne&&M.viewport(J.copy(ne)),ie.length>0&&Wt(ie,X,le),Ee.length>0&&Wt(Ee,X,le),Pe.length>0&&Wt(Pe,X,le),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function St(R,X,le,ne){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[ne.id]===void 0){let He=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[ne.id]=new Qt(1,1,{generateMipmaps:!0,type:He?gn:Cn,minFilter:cr,samples:Math.max(4,F.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ct.workingColorSpace})}let Ee=P.state.transmissionRenderTarget[ne.id],Pe=ne.viewport||J;Ee.setSize(Pe.z*T.transmissionResolutionScale,Pe.w*T.transmissionResolutionScale);let Ae=T.getRenderTarget(),Fe=T.getActiveCubeFace(),Ve=T.getActiveMipmapLevel();T.setRenderTarget(Ee),T.getClearColor(_e),Ue=T.getClearAlpha(),Ue<1&&T.setClearColor(16777215,.5),T.clear(),At&&Be.render(le);let it=T.toneMapping;T.toneMapping=ri;let ut=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),P.setupLightsView(ne),Qe===!0&&Me.setGlobalState(T.clippingPlanes,ne),Wt(R,le,ne),H.updateMultisampleRenderTarget(Ee),H.updateRenderTargetMipmap(Ee),st.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let bt=0,Jt=X.length;bt<Jt;bt++){let Ft=X[bt],{object:Pt,geometry:_n,material:De,group:Tn}=Ft;if(De.side===Wn&&Pt.layers.test(ne.layers)){let mt=De.side;De.side=mn,De.needsUpdate=!0,Ut(Pt,le,ne,_n,De,Tn),De.side=mt,De.needsUpdate=!0,He=!0}}He===!0&&(H.updateMultisampleRenderTarget(Ee),H.updateRenderTargetMipmap(Ee))}T.setRenderTarget(Ae,Fe,Ve),T.setClearColor(_e,Ue),ut!==void 0&&(ne.viewport=ut),T.toneMapping=it}function Wt(R,X,le){let ne=X.isScene===!0?X.overrideMaterial:null;for(let ie=0,Ee=R.length;ie<Ee;ie++){let Pe=R[ie],{object:Ae,geometry:Fe,group:Ve}=Pe,it=Pe.material;it.allowOverride===!0&&ne!==null&&(it=ne),Ae.layers.test(le.layers)&&Ut(Ae,X,le,Fe,it,Ve)}}function Ut(R,X,le,ne,ie,Ee){y!==null&&ie.isNodeMaterial&&y.setObject(R,ie),R.onBeforeRender(T,X,le,ne,ie,Ee),R.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ie.onBeforeRender(T,X,le,ne,R,Ee),ie.transparent===!0&&ie.side===Wn&&ie.forceSinglePass===!1?(ie.side=mn,ie.needsUpdate=!0,T.renderBufferDirect(le,X,ne,ie,R,Ee),ie.side=or,ie.needsUpdate=!0,T.renderBufferDirect(le,X,ne,ie,R,Ee),ie.side=Wn):T.renderBufferDirect(le,X,ne,ie,R,Ee),R.onAfterRender(T,X,le,ne,ie,Ee)}function Ot(R,X,le){X.isScene!==!0&&(X=Xt);let ne=N.get(R),ie=P.state.lights,Ee=P.state.shadowsArray,Pe=ie.state.version,Ae=ce.getParameters(R,ie.state,Ee,X,le,P.state.lightProbeGridArray),Fe=ce.getProgramCacheKey(Ae),Ve=ne.programs;ne.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?X.environment:null,ne.fog=X.fog;let it=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ne.envMap=z.get(R.envMap||ne.environment,it),ne.envMapRotation=ne.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,Ve===void 0&&(R.addEventListener("dispose",ae),Ve=new Map,ne.programs=Ve);let ut=Ve.get(Fe);if(ut!==void 0){if(ne.currentProgram===ut&&ne.lightsStateVersion===Pe)return kn(R,Ae),ut}else Ae.uniforms=ce.getUniforms(R),y!==null&&R.isNodeMaterial&&y.build(R,le,Ae),R.onBeforeCompile(Ae,T),ut=ce.acquireProgram(Ae,Fe),Ve.set(Fe,ut),ne.uniforms=Ae.uniforms;let He=ne.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(He.clippingPlanes=Me.uniform),kn(R,Ae),ne.needsLights=Pn(R),ne.lightsStateVersion=Pe,ne.needsLights&&(He.ambientLightColor.value=ie.state.ambient,He.lightProbe.value=ie.state.probe,He.sunLights.value=ie.state.sun,He.sunLightShadows.value=ie.state.sunShadow,He.directionalLights.value=ie.state.directional,He.directionalLightShadows.value=ie.state.directionalShadow,He.spotLights.value=ie.state.spot,He.spotLightShadows.value=ie.state.spotShadow,He.rectAreaLights.value=ie.state.rectArea,He.ltc_1.value=ie.state.rectAreaLTC1,He.ltc_2.value=ie.state.rectAreaLTC2,He.pointLights.value=ie.state.point,He.pointLightShadows.value=ie.state.pointShadow,He.hemisphereLights.value=ie.state.hemi,He.sunShadowMatrix.value=ie.state.sunShadowMatrix,He.sunShadowCascade.value=ie.state.sunShadowCascade,He.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,He.spotLightMatrix.value=ie.state.spotLightMatrix,He.spotLightMap.value=ie.state.spotLightMap,He.pointShadowMatrix.value=ie.state.pointShadowMatrix),ne.lightProbeGrid=P.state.lightProbeGridArray.length>0,ne.currentProgram=ut,ne.uniformsList=null,ut}function ot(R){if(R.uniformsList===null){let X=R.currentProgram.getUniforms();R.uniformsList=gs.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function kn(R,X){let le=N.get(R);le.outputColorSpace=X.outputColorSpace,le.batching=X.batching,le.batchingColor=X.batchingColor,le.instancing=X.instancing,le.instancingColor=X.instancingColor,le.instancingMorph=X.instancingMorph,le.skinning=X.skinning,le.morphTargets=X.morphTargets,le.morphNormals=X.morphNormals,le.morphColors=X.morphColors,le.morphTargetsCount=X.morphTargetsCount,le.numClippingPlanes=X.numClippingPlanes,le.numIntersection=X.numClipIntersection,le.vertexAlphas=X.vertexAlphas,le.vertexTangents=X.vertexTangents,le.toneMapping=X.toneMapping}function Ei(R,X){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;w.setFromMatrixPosition(X.matrixWorld);for(let le=0,ne=R.length;le<ne;le++){let ie=R[le];if(ie.texture!==null&&ie.boundingBox.containsPoint(w))return ie}return null}function wn(R,X,le,ne,ie){X.isScene!==!0&&(X=Xt),H.resetTextureUnits();let Ee=X.fog,Pe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?X.environment:null,Ae=re===null?T.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:ct.workingColorSpace,Fe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Ve=z.get(ne.envMap||Pe,Fe),it=ne.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,ut=!!le.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),He=!!le.morphAttributes.position,bt=!!le.morphAttributes.normal,Jt=!!le.morphAttributes.color,Ft=ri;ne.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Ft=T.toneMapping);let Pt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,_n=Pt!==void 0?Pt.length:0,De=N.get(ne),Tn=P.state.lights;if(Qe===!0&&(vt===!0||R!==j)){let Nt=R===j&&ne.id===q;Me.setState(ne,R,Nt)}let mt=!1;ne.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Tn.state.version||De.outputColorSpace!==Ae||ie.isBatchedMesh&&De.batching===!1||!ie.isBatchedMesh&&De.batching===!0||ie.isBatchedMesh&&De.batchingColor===!0&&ie._colorsTexture===null||ie.isBatchedMesh&&De.batchingColor===!1&&ie._colorsTexture!==null||ie.isInstancedMesh&&De.instancing===!1||!ie.isInstancedMesh&&De.instancing===!0||ie.isSkinnedMesh&&De.skinning===!1||!ie.isSkinnedMesh&&De.skinning===!0||ie.isInstancedMesh&&De.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&De.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&De.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&De.instancingMorph===!1&&ie.morphTexture!==null||De.envMap!==Ve||ne.fog===!0&&De.fog!==Ee||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==Me.numPlanes||De.numIntersection!==Me.numIntersection)||De.vertexAlphas!==it||De.vertexTangents!==ut||De.morphTargets!==He||De.morphNormals!==bt||De.morphColors!==Jt||De.toneMapping!==Ft||De.morphTargetsCount!==_n||!!De.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(mt=!0):(mt=!0,De.__version=ne.version);let zn=De.currentProgram;mt===!0&&(zn=Ot(ne,X,ie),y&&ne.isNodeMaterial&&y.onUpdateProgram(ne,zn,De));let hi=!1,zi=!1,Dr=!1,Rt=zn.getUniforms(),Yt=De.uniforms;if(M.useProgram(zn.program)&&(hi=!0,zi=!0,Dr=!0),ne.id!==q&&(q=ne.id,zi=!0),De.needsLights){let Nt=Ei(P.state.lightProbeGridArray,ie);De.lightProbeGrid!==Nt&&(De.lightProbeGrid=Nt,zi=!0)}if(hi||j!==R){M.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Rt.setValue(W,"projectionMatrix",R.projectionMatrix),Rt.setValue(W,"viewMatrix",R.matrixWorldInverse);let Gi=Rt.map.cameraPosition;Gi!==void 0&&Gi.setValue(W,Et.setFromMatrixPosition(R.matrixWorld)),F.logarithmicDepthBuffer&&Rt.setValue(W,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Rt.setValue(W,"isOrthographic",R.isOrthographicCamera===!0),j!==R&&(j=R,zi=!0,Dr=!0)}if(De.needsLights&&(Tn.state.sunShadowMap.length>0&&Rt.setValue(W,"sunShadowMap",Tn.state.sunShadowMap,H),Tn.state.directionalShadowMap.length>0&&Rt.setValue(W,"directionalShadowMap",Tn.state.directionalShadowMap,H),Tn.state.spotShadowMap.length>0&&Rt.setValue(W,"spotShadowMap",Tn.state.spotShadowMap,H),Tn.state.pointShadowMap.length>0&&Rt.setValue(W,"pointShadowMap",Tn.state.pointShadowMap,H)),ie.isSkinnedMesh){Rt.setOptional(W,ie,"bindMatrix"),Rt.setOptional(W,ie,"bindMatrixInverse");let Nt=ie.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),Rt.setValue(W,"boneTexture",Nt.boneTexture,H))}ie.isBatchedMesh&&(Rt.setOptional(W,ie,"batchingTexture"),Rt.setValue(W,"batchingTexture",ie._matricesTexture,H),Rt.setOptional(W,ie,"batchingIdTexture"),Rt.setValue(W,"batchingIdTexture",ie._indirectTexture,H),Rt.setOptional(W,ie,"batchingColorTexture"),ie._colorsTexture!==null&&Rt.setValue(W,"batchingColorTexture",ie._colorsTexture,H));let Vi=le.morphAttributes;if((Vi.position!==void 0||Vi.normal!==void 0||Vi.color!==void 0)&&G.update(ie,le,zn),(zi||De.receiveShadow!==ie.receiveShadow)&&(De.receiveShadow=ie.receiveShadow,Rt.setValue(W,"receiveShadow",ie.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&X.environment!==null&&(Yt.envMapIntensity.value=X.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=S_()),zi){if(Rt.setValue(W,"toneMappingExposure",T.toneMappingExposure),De.needsLights&&An(Yt,Dr),Ee&&ne.fog===!0&&ge.refreshFogUniforms(Yt,Ee),ge.refreshMaterialUniforms(Yt,ne,ue,oe,P.state.transmissionRenderTarget[R.id]),De.needsLights&&De.lightProbeGrid){let Nt=De.lightProbeGrid;Yt.probesSH.value=Nt.texture,Yt.probesMin.value.copy(Nt.boundingBox.min),Yt.probesMax.value.copy(Nt.boundingBox.max),Yt.probesResolution.value.copy(Nt.resolution)}gs.upload(W,ot(De),Yt,H)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(gs.upload(W,ot(De),Yt,H),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Rt.setValue(W,"center",ie.center),Rt.setValue(W,"modelViewMatrix",ie.modelViewMatrix),Rt.setValue(W,"normalMatrix",ie.normalMatrix),Rt.setValue(W,"modelMatrix",ie.matrixWorld),ne.uniformsGroups!==void 0){let Nt=ne.uniformsGroups;for(let Gi=0,Nr=Nt.length;Gi<Nr;Gi++){let Xu=Nt[Gi];me.update(Xu,zn),me.bind(Xu,zn)}}return zn}function An(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.sunLights.needsUpdate=X,R.sunLightShadows.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function Pn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(R,X,le){let ne=N.get(R);ne.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),N.get(R.texture).__webglTexture=X,N.get(R.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:le,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,X){let le=N.get(R);le.__webglFramebuffer=X,le.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(R,X=0,le=0){re=R,Y=X,$=le;let ne=null,ie=!1,Ee=!1;if(R){let Ae=N.get(R);if(Ae.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(W.FRAMEBUFFER,Ae.__webglFramebuffer),J.copy(R.viewport),ee.copy(R.scissor),he=R.scissorTest,M.viewport(J),M.scissor(ee),M.setScissorTest(he),q=-1;return}else if(Ae.__webglFramebuffer===void 0)H.setupRenderTarget(R);else if(Ae.__hasExternalTextures)H.rebindTextures(R,N.get(R.texture).__webglTexture,N.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let it=R.depthTexture;if(Ae.__boundDepthTexture!==it){if(it!==null&&N.has(it)&&(R.width!==it.image.width||R.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(R)}}let Fe=R.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Ee=!0);let Ve=N.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ve[X])?ne=Ve[X][le]:ne=Ve[X],ie=!0):R.samples>0&&H.useMultisampledRTT(R)===!1?ne=N.get(R).__webglMultisampledFramebuffer:Array.isArray(Ve)?ne=Ve[le]:ne=Ve,J.copy(R.viewport),ee.copy(R.scissor),he=R.scissorTest}else J.copy(Te).multiplyScalar(ue).floor(),ee.copy(Je).multiplyScalar(ue).floor(),he=gt;if(le!==0&&(ne=C),M.bindFramebuffer(W.FRAMEBUFFER,ne)&&M.drawBuffers(R,ne),M.viewport(J),M.scissor(ee),M.setScissorTest(he),ie){let Ae=N.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ae.__webglTexture,le)}else if(Ee){let Ae=X;for(let Fe=0;Fe<R.textures.length;Fe++){let Ve=N.get(R.textures[Fe]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Fe,Ve.__webglTexture,le,Ae)}}else if(R!==null&&le!==0){let Ae=N.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ae.__webglTexture,le)}q=-1};function wi(R){let X=N.get(R);return(X.__readFormat!==R.format||X.__readType!==R.type)&&(X.__readFormat=R.format,X.__readType=R.type,X.__formatReadable=F.textureFormatReadable(R.format),X.__typeReadable=F.textureTypeReadable(R.type)),X}this.readRenderTargetPixels=function(R,X,le,ne,ie,Ee,Pe,Ae=0){if(!(R&&R.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=N.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pe!==void 0&&(Fe=Fe[Pe]),Fe){M.bindFramebuffer(W.FRAMEBUFFER,Fe);try{let Ve=R.textures[Ae],it=Ve.format,ut=Ve.type;R.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ae);let He=wi(Ve);if(He.__formatReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(He.__typeReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-ne&&le>=0&&le<=R.height-ie&&W.readPixels(X,le,ne,ie,Se.convert(it),Se.convert(ut),Ee)}finally{let Ve=re!==null?N.get(re).__webglFramebuffer:null;M.bindFramebuffer(W.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(R,X,le,ne,ie,Ee,Pe,Ae=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=N.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pe!==void 0&&(Fe=Fe[Pe]),Fe)if(X>=0&&X<=R.width-ne&&le>=0&&le<=R.height-ie){M.bindFramebuffer(W.FRAMEBUFFER,Fe);let Ve=R.textures[Ae],it=Ve.format,ut=Ve.type;R.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ae);let He=wi(Ve);if(He.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(He.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let bt=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,bt),W.bufferData(W.PIXEL_PACK_BUFFER,Ee.byteLength,W.STREAM_READ),W.readPixels(X,le,ne,ie,Se.convert(it),Se.convert(ut),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);let Jt=re!==null?N.get(re).__webglFramebuffer:null;M.bindFramebuffer(W.FRAMEBUFFER,Jt);let Ft=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await _f(W,Ft,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,bt),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Ee),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(bt),W.deleteSync(Ft),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,X=null,le=0){let ne=Math.pow(2,-le),ie=Math.floor(R.image.width*ne),Ee=Math.floor(R.image.height*ne),Pe=X!==null?X.x:0,Ae=X!==null?X.y:0;H.setTexture2D(R,0),W.copyTexSubImage2D(W.TEXTURE_2D,le,0,0,Pe,Ae,ie,Ee),M.unbindTexture()},this.copyTextureToTexture=function(R,X,le=null,ne=null,ie=0,Ee=0){let Pe,Ae,Fe,Ve,it,ut,He,bt,Jt,Ft=R.isCompressedTexture?R.mipmaps[Ee]:R.image;if(le!==null)Pe=le.max.x-le.min.x,Ae=le.max.y-le.min.y,Fe=le.isBox3?le.max.z-le.min.z:1,Ve=le.min.x,it=le.min.y,ut=le.isBox3?le.min.z:0;else{let Yt=Math.pow(2,-ie);Pe=Math.floor(Ft.width*Yt),Ae=Math.floor(Ft.height*Yt),R.isDataArrayTexture?Fe=Ft.depth:R.isData3DTexture?Fe=Math.floor(Ft.depth*Yt):Fe=1,Ve=0,it=0,ut=0}ne!==null?(He=ne.x,bt=ne.y,Jt=ne.z):(He=0,bt=0,Jt=0);let Pt=Se.convert(X.format),_n=Se.convert(X.type),De;X.isData3DTexture?(H.setTexture3D(X,0),De=W.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(H.setTexture2DArray(X,0),De=W.TEXTURE_2D_ARRAY):(H.setTexture2D(X,0),De=W.TEXTURE_2D),M.activeTexture(W.TEXTURE0),M.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,X.flipY),M.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),M.pixelStorei(W.UNPACK_ALIGNMENT,X.unpackAlignment);let Tn=M.getParameter(W.UNPACK_ROW_LENGTH),mt=M.getParameter(W.UNPACK_IMAGE_HEIGHT),zn=M.getParameter(W.UNPACK_SKIP_PIXELS),hi=M.getParameter(W.UNPACK_SKIP_ROWS),zi=M.getParameter(W.UNPACK_SKIP_IMAGES);M.pixelStorei(W.UNPACK_ROW_LENGTH,Ft.width),M.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ft.height),M.pixelStorei(W.UNPACK_SKIP_PIXELS,Ve),M.pixelStorei(W.UNPACK_SKIP_ROWS,it),M.pixelStorei(W.UNPACK_SKIP_IMAGES,ut);let Dr=R.isDataArrayTexture||R.isData3DTexture,Rt=X.isDataArrayTexture||X.isData3DTexture;if(R.isDepthTexture){let Yt=N.get(R),Vi=N.get(X),Nt=N.get(Yt.__renderTarget),Gi=N.get(Vi.__renderTarget);M.bindFramebuffer(W.READ_FRAMEBUFFER,Nt.__webglFramebuffer),M.bindFramebuffer(W.DRAW_FRAMEBUFFER,Gi.__webglFramebuffer);for(let Nr=0;Nr<Fe;Nr++)Dr&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,N.get(R).__webglTexture,ie,ut+Nr),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,N.get(X).__webglTexture,Ee,Jt+Nr)),W.blitFramebuffer(Ve,it,Pe,Ae,He,bt,Pe,Ae,W.DEPTH_BUFFER_BIT,W.NEAREST);M.bindFramebuffer(W.READ_FRAMEBUFFER,null),M.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(ie!==0||R.isRenderTargetTexture||N.has(R)){let Yt=N.get(R),Vi=N.get(X);M.bindFramebuffer(W.READ_FRAMEBUFFER,L),M.bindFramebuffer(W.DRAW_FRAMEBUFFER,k);for(let Nt=0;Nt<Fe;Nt++)Dr?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Yt.__webglTexture,ie,ut+Nt):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Yt.__webglTexture,ie),Rt?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Vi.__webglTexture,Ee,Jt+Nt):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Vi.__webglTexture,Ee),ie!==0?W.blitFramebuffer(Ve,it,Pe,Ae,He,bt,Pe,Ae,W.COLOR_BUFFER_BIT,W.NEAREST):Rt?W.copyTexSubImage3D(De,Ee,He,bt,Jt+Nt,Ve,it,Pe,Ae):W.copyTexSubImage2D(De,Ee,He,bt,Ve,it,Pe,Ae);M.bindFramebuffer(W.READ_FRAMEBUFFER,null),M.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Rt?R.isDataTexture||R.isData3DTexture?W.texSubImage3D(De,Ee,He,bt,Jt,Pe,Ae,Fe,Pt,_n,Ft.data):X.isCompressedArrayTexture?W.compressedTexSubImage3D(De,Ee,He,bt,Jt,Pe,Ae,Fe,Pt,Ft.data):W.texSubImage3D(De,Ee,He,bt,Jt,Pe,Ae,Fe,Pt,_n,Ft):R.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Ee,He,bt,Pe,Ae,Pt,_n,Ft.data):R.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Ee,He,bt,Ft.width,Ft.height,Pt,Ft.data):W.texSubImage2D(W.TEXTURE_2D,Ee,He,bt,Pe,Ae,Pt,_n,Ft);M.pixelStorei(W.UNPACK_ROW_LENGTH,Tn),M.pixelStorei(W.UNPACK_IMAGE_HEIGHT,mt),M.pixelStorei(W.UNPACK_SKIP_PIXELS,zn),M.pixelStorei(W.UNPACK_SKIP_ROWS,hi),M.pixelStorei(W.UNPACK_SKIP_IMAGES,zi),Ee===0&&X.generateMipmaps&&W.generateMipmap(De),M.unbindTexture()},this.initRenderTarget=function(R){N.get(R).__webglFramebuffer===void 0&&H.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?H.setTextureCube(R,0):R.isData3DTexture?H.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?H.setTexture2DArray(R,0):H.setTexture2D(R,0),M.unbindTexture()},this.resetState=function(){Y=0,$=0,re=null,M.reset(),Re.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}};var xs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var On=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},b_=new ar(-1,1,1,-1,0,1),Lu=class extends Kt{constructor(){super(),this.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new xt([0,2,0,0,2,0],2))}},T_=new Lu,fr=class{constructor(e){this._mesh=new Ne(T_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,b_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var zl=class extends On{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Vt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Oi.clone(e.uniforms),this.material=new Vt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new fr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ca=class extends On{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,l;this.inverse?(a=0,l=1):(a=1,l=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(l),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}},Vl=class extends On{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Gl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Xe);this._width=n.width,this._height=n.height,t=new Qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:gn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new zl(xs),this.copyPass.material.blending=qn,this.timer=new oa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let r=0,s=this.passes.length;r<s;r++){let a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let l=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}Ca!==void 0&&(a instanceof Ca?n=!0:a instanceof Vl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Xe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Wl=class extends On{constructor(e,t,n=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new We}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}};var $f={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new We(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ys=class i extends On{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e!==void 0?new Xe(e.x,e.y):new Xe(256,256),this.clearColor=new We(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Qt(s,a,{type:gn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let o=0;o<this.nMips;o++){let p=new Qt(s,a,{type:gn,depthBuffer:!1});p.texture.name="UnrealBloomPass.h"+o,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let f=new Qt(s,a,{type:gn,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+o,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}let l=$f;this.highPassUniforms=Oi.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Vt({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let o=0;o<this.nMips;o++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[o])),this.separableBlurMaterials[o].uniforms.invSize.value=new Xe(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new te(1,1,1),new te(1,1,1),new te(1,1,1),new te(1,1,1),new te(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Oi.clone(xs.uniforms),this.blendMaterial=new Vt({uniforms:this.copyUniforms,vertexShader:xs.vertexShader,fragmentShader:xs.fragmentShader,premultipliedAlpha:!0,blending:Ui,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new We,this._oldClearAlpha=1,this._basic=new Mi,this._fsQuad=new fr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Xe(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(e,t,n,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let l=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),l=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let r=[],s=[];for(let a=1;a<e;a+=2){let l=t[a],c=a+1<e?t[a+1]:0,u=l+c;r.push((a*l+(a+1)*c)/u),s.push(u)}return new Vt({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new Xe(.5,.5)},direction:{value:new Xe(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:s}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Vt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};ys.BlurDirectionX=new Xe(1,0);ys.BlurDirectionY=new Xe(0,1);var Ia={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var ql=class extends On{constructor(){super(),this.isOutputPass=!0,this.uniforms=Oi.clone(Ia.uniforms),this.material=new as({name:Ia.name,uniforms:this.uniforms,vertexShader:Ia.vertexShader,fragmentShader:Ia.fragmentShader}),this._fsQuad=new fr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ct.getTransfer(this._outputColorSpace)===_t&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ca?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ua?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ha?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ar?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===da?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===pa?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===fa&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Xl=class extends Qi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new en;e.deleteAttribute("uv");let t=new pn({side:mn}),n=new pn,r=new ii(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let s=new Ne(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let a=new Ks(e,n,6),l=new rn;l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),l.updateMatrix(),a.setMatrixAt(0,l.matrix),l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),l.updateMatrix(),a.setMatrixAt(1,l.matrix),l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),l.updateMatrix(),a.setMatrixAt(2,l.matrix),l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),l.updateMatrix(),a.setMatrixAt(3,l.matrix),l.position.set(2.291,-.756,-2.621),l.rotation.set(0,-.286,0),l.scale.set(1.546,1.552,1.496),l.updateMatrix(),a.setMatrixAt(4,l.matrix),l.position.set(-2.193,-.369,-5.547),l.rotation.set(0,.516,0),l.scale.set(3.875,3.487,2.986),l.updateMatrix(),a.setMatrixAt(5,l.matrix),this.add(a);let c=new Ne(e,Ms(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let u=new Ne(e,Ms(50));u.position.set(-16.109,18.021,-8.207),u.scale.set(.1,2.425,2.751),this.add(u);let o=new Ne(e,Ms(17));o.position.set(14.904,12.198,-1.832),o.scale.set(.15,4.265,6.331),this.add(o);let p=new Ne(e,Ms(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let f=new Ne(e,Ms(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let m=new Ne(e,Ms(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Ms(i){return new na({color:0,emissive:16777215,emissiveIntensity:i})}var lt=256;function Zl(i,e,t){var n=i*374761393+e*668265263+t*982451653|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function Qf(i,e,t,n){var r=Math.floor(i),s=Math.floor(e),a=i-r,l=e-s,c=a*a*(3-2*a),u=l*l*(3-2*l);function o(E,g){return Zl((E%t+t)%t,(g%t+t)%t,n)}var p=o(r,s),f=o(r+1,s),m=o(r,s+1),v=o(r+1,s+1);return p+(f-p)*c+(m-p)*u+(p-f-m+v)*c*u}function Hi(i,e,t,n){for(var r=0,s=.5,a=1,l=0;l<t;l++)r+=s*Qf(i*a,e*a,8*a,n+l*17),s*=.5,a*=2;return r}function Kn(i,e,t){return i+(e-i)*t}function Jl(i){return i<0?0:i>1?1:i}function Fi(i){return[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255]}function ed(i,e){e=e||{};for(var t=new Uint8ClampedArray(lt*lt*4),n=new Float32Array(lt*lt),r=e.emissive?new Uint8ClampedArray(lt*lt*4):null,s=new Uint8ClampedArray(lt*lt*4),a=0;a<lt;a++)for(var l=0;l<lt;l++){var c=i(l/lt,a/lt,l,a),u=a*lt+l,o=u*4;t[o]=c.c[0]*255,t[o+1]=c.c[1]*255,t[o+2]=c.c[2]*255,t[o+3]=255,n[u]=c.h;var p=(c.r===void 0?.85:c.r)*255;if(s[o]=p,s[o+1]=p,s[o+2]=p,s[o+3]=255,r){var f=c.e||[0,0,0];r[o]=f[0]*255,r[o+1]=f[1]*255,r[o+2]=f[2]*255,r[o+3]=255}}return{map:Yl(t,!0),normalMap:Yl(E_(n,e.bump||3),!1),roughnessMap:Yl(s,!1),emissiveMap:r?Yl(r,!0):null}}function E_(i,e){for(var t=new Uint8ClampedArray(lt*lt*4),n=0;n<lt;n++)for(var r=0;r<lt;r++){var s=i[n*lt+(r+lt-1)%lt],a=i[n*lt+(r+1)%lt],l=i[(n+lt-1)%lt*lt+r],c=i[(n+1)%lt*lt+r],u=(s-a)*e,o=(l-c)*e,p=1,f=Math.sqrt(u*u+o*o+p*p),m=(n*lt+r)*4;t[m]=(u/f*.5+.5)*255,t[m+1]=(o/f*.5+.5)*255,t[m+2]=(p/f*.5+.5)*255,t[m+3]=255}return t}function Yl(i,e){var t;if(typeof document!="undefined"){var n=document.createElement("canvas");n.width=lt,n.height=lt,n.getContext("2d").putImageData(new ImageData(i,lt,lt),0,0),t=new $s(n)}else t=new Tr(i,lt,lt);return t.wrapS=t.wrapT=Qr,t.colorSpace=e?fn:ai,t.anisotropy=8,t.needsUpdate=!0,t}function Nu(i,e,t,n){var r=Fi(i),s=Fi(e),a=Fi(t);return function(l,c){var u=8,o=Math.floor(c*u),p=o%2?.5:0,f=l*4+p,m=Math.floor(f),v=f-m,E=c*u-o,g=Math.min(v,1-v)*4*.5,d=Math.min(E,1-E)*.5,x=Math.min(g,d*2),U=Hi(l*8,c*8,4,n),w=Zl(m&3,o,n),I=Hi(l*24,c*24,2,n+5)>.72?.25:0;if(x<.045){var P=.8+U*.4;return{c:[a[0]*P,a[1]*P,a[2]*P],h:.1+U*.1,r:.95}}var O=Jl(w*.6+U*.5),b=.8+U*.35-I;return{c:[Kn(s[0],r[0],O)*b,Kn(s[1],r[1],O)*b,Kn(s[2],r[2],O)*b],h:.6+U*.3-I+Math.min(x,.12)*2,r:.8+U*.15}}}function td(i,e,t){var n=Fi(i),r=Fi(e);return function(s,a){var l=s*3,c=a*4+Math.floor(s*3)%2*.5,u=l-Math.floor(l),o=c-Math.floor(c),p=Zl(Math.floor(l)%3,Math.floor(c)%4,t),f=Math.min(u,1-u,(o<.5?o:1-o)*1.5),m=Hi(s*6,a*6,5,t);if(f<.035)return{c:[r[0]*.5,r[1]*.5,r[2]*.5],h:.1,r:.95};var v=Jl(m*.8+p*.4),E=.75+m*.4;return{c:[Kn(r[0],n[0],v)*E,Kn(r[1],n[1],v)*E,Kn(r[2],n[2],v)*E],h:.5+m*.5,r:.9}}}function La(i,e,t){var n=Fi(i),r=Fi(e);return function(s,a,l,c){var u=s*2%1,o=a*2%1,p=Math.min(u,1-u,o,1-o)<.012,f=[[.06,.06],[.94,.06],[.06,.94],[.94,.94]].some(function(g){var d=u-g[0],x=o-g[1];return d*d+x*x<9e-4}),m=Hi(s*6,a*16,4,t),v=Qf(s*90,a*4,90,t+3)>.9?.15:0,E=.75+m*.35+v;return p?{c:[r[0]*.4,r[1]*.4,r[2]*.4],h:.1,r:.6}:f?{c:[n[0]*1.2,n[1]*1.2,n[2]*1.2],h:1,r:.35}:{c:[Kn(r[0],n[0],m)*E,Kn(r[1],n[1],m)*E,Kn(r[2],n[2],m)*E],h:.5+m*.1,r:.45+m*.2}}}function nd(i){var e=La(5001824,1974568,i);return function(t,n,r,s){var a=e(t,n,r,s),l=Math.abs(n-.5)<.025&&t*4%1>.15&&t*4%1<.85,c=Math.abs(n-.15)<.04&&Math.abs(t*2%1-.5)<.12;return l?{c:[.2,.7,.8],h:.3,r:.3,e:[.15,.85,1]}:c?{c:[.9,.7,.3],h:.8,r:.3,e:[1,.6,.15]}:(a.e=[0,0,0],a)}}function $l(i){return function(e,t){var n=Hi(e*5,t*5,5,i),r=1-Math.abs(Hi(e*4,t*4,4,i+9)-.5)*2,s=r>.9?Jl((r-.9)*10):0,a=.35+n*.5,l=[.32*a+s*.9,.12*a+s*.35,.08*a];return{c:l,h:n-s*.4,r:.9-s*.5,e:[s*1,s*.35,s*.05]}}}function Du(i){var e=La(6975352,2895412,31),t=i==="red"?[.9,.12,.08]:i==="blue"?[.15,.35,1]:null;return function(n,r,s,a){var l=e(n,r,s,a),c=r>.88&&Math.floor(n*16+r*16)%2===0;return r>.88?{c:c?[.85,.65,.1]:[.08,.08,.08],h:.6,r:.6,e:[0,0,0]}:Math.abs(n-.5)<.012?{c:[.05,.05,.05],h:0,r:.8,e:[0,0,0]}:t&&Math.abs(r-.45)<.05?{c:t,h:.7,r:.3,e:[t[0]*.8,t[1]*.8,t[2]*.8]}:(l.e=[0,0,0],l)}}function jf(i){var e=La(5922664,2500654,41);return function(t,n,r,s){var a=e(t,n,r,s),l=Math.abs(t-.5)<.18&&Math.abs(n-.5)<.26;if(l){var c=Math.abs(t-.5)<.04&&(i?n>.5&&n<.72:n>.28&&n<.5),u=Math.abs(t-.5)<.08&&Math.abs(n-(i?.3:.7))<.04,o=i?[.2,1,.3]:[1,.15,.1];return u?{c:o,h:.9,r:.2,e:o}:c?{c:[.8,.8,.75],h:1,r:.3,e:[0,0,0]}:{c:[.06,.07,.06],h:.2,r:.7,e:[0,0,0]}}return a.e=[0,0,0],a}}function Kl(i,e,t,n){var r=Fi(i),s=Fi(e);return function(a,l){var c=a*4%1,u=l*4%1,o=Math.min(c,1-c,u,1-u),p=Zl(Math.floor(a*4),Math.floor(l*4),t),f=Hi(a*8,l*8,4,t);if(o<.03)return{c:[s[0]*.4,s[1]*.4,s[2]*.4],h:.05,r:.95};if(n&&(c*10%1<.3||u*10%1<.3)&&o>.08)return{c:[s[0]*.3,s[1]*.3,s[2]*.3],h:.1,r:.6};var m=Jl(p*.5+f*.6),v=.7+f*.4;return{c:[Kn(s[0],r[0],m)*v,Kn(s[1],r[1],m)*v,Kn(s[2],r[2],m)*v],h:.5+f*.3,r:n?.5:.8}}}function w_(i){var e=$l(i);return function(t,n){var r=e(t,n),s=Hi(t*3,n*3,3,i+20)>.66;if(s){var a=Hi(t*10,n*10,3,i+21);return{c:[1,.45+a*.3,.08],h:0,r:.4,e:[1.2,.45+a*.3,.05]}}return r}}function A_(i){return Kl(2762274,1183760,i,!1)}var Pa={};function Sn(i,e,t){return Pa[i]||(Pa[i]=ed(e,t))}function Bi(i){switch(i){case 1:return Sn("brick",Nu(9060914,4857364,2759960,1),{bump:4});case 2:return Sn("stone",td(9078136,4867644,2),{bump:4});case 3:return Sn("metal",La(5922664,2500654,3),{bump:3});case 4:return Sn("tech",nd(4),{emissive:!0,bump:3});case 5:return Sn("hell",$l(5),{emissive:!0,bump:5});case 6:return Sn("door",Du(null),{emissive:!0,bump:3});case 7:return Sn("doorRed",Du("red"),{emissive:!0,bump:3});case 8:return Sn("doorBlue",Du("blue"),{emissive:!0,bump:3});case 9:return Sn("switchOff",jf(!1),{emissive:!0,bump:3});case 10:return Sn("switchOn",jf(!0),{emissive:!0,bump:3})}return Bi(1)}function id(i){var e="secret"+i;if(Pa[e])return Pa[e];for(var t={1:Nu(9060914,4857364,2759960,1),2:td(9078136,4867644,2),3:La(5922664,2500654,3),4:nd(4),5:$l(5)}[i]||Nu(9060914,4857364,2759960,1),n=i===5||i===3,r=new Uint8Array(lt*lt),s=88,a=24;a<232;a++){s+=a%13===0?2:a%17===0?-2:0;for(var l=0;l<5;l++)r[a*lt+s+l]=1}for(var c=0;c<28;c++)for(var u=0;u<4;u++)r[(120+c)*lt+s+6+c+u]=1;return Pa[e]=ed(function(o,p,f,m){var v=t(o,p,f,m);return r[m*lt+f]&&(v.c=n?[v.c[0]*.4+.45,v.c[1]*.4+.4,v.c[2]*.4+.35]:[v.c[0]*.3,v.c[1]*.3,v.c[2]*.3],v.h=0,v.r=.95),v},{emissive:i===4||i===5,bump:4})}function Uu(i){switch(i){case"tech":return Sn("fTech",Kl(4869718,1842722,11,!0),{bump:3});case"hell":return Sn("fHell",w_(12),{emissive:!0,bump:4});case"ceilTech":return Sn("cTech",Kl(3817030,1316378,13,!0),{bump:2});case"ceilHell":return Sn("cHell",$l(14),{emissive:!0,bump:4});case"ceilDark":return Sn("cDark",A_(15),{bump:2});default:return Sn("fSlab",Kl(6972506,3025444,10,!1),{bump:3})}}function oi(i,e){var t=new pn(Object.assign({map:i.map,normalMap:i.normalMap,roughnessMap:i.roughnessMap,roughness:1,metalness:.05},e||{}));return i.emissiveMap&&(t.emissiveMap=i.emissiveMap,t.emissive=new We(16777215),t.emissiveIntensity=1.6),t}function Ql(){this.groups={}}Ql.prototype.quad=function(i,e,t,n,r,s,a){var l=this.groups[i]||(this.groups[i]={pos:[],nor:[],uv:[]});[e,t,n,e,n,r].forEach(function(c){l.pos.push(c[0],c[1],c[2]),l.nor.push(s[0],s[1],s[2])}),[a[0],a[1],a[2],a[0],a[2],a[3]].forEach(function(c){l.uv.push(c[0],c[1])})};Ql.prototype.meshes=function(i){var e=[];for(var t in this.groups){var n=this.groups[t],r=new Kt;r.setAttribute("position",new xt(n.pos,3)),r.setAttribute("normal",new xt(n.nor,3)),r.setAttribute("uv",new xt(n.uv,2));var s=new Ne(r,i(t));s.name=t,e.push(s)}return e};function jl(i,e,t,n,r,s,a){if(!(a-s<.001)){var l,c,u,o,p;r==="E"?(l=[t+1,n+1],c=[t+1,n],u=[-1,0,0],o=n+1,p=n):r==="W"?(l=[t,n],c=[t,n+1],u=[1,0,0],o=n,p=n+1):r==="S"?(l=[t,n+1],c=[t+1,n+1],u=[0,0,-1],o=t,p=t+1):(l=[t+1,n],c=[t,n],u=[0,0,1],o=t+1,p=t),i.quad(e,[l[0],s,l[1]],[c[0],s,c[1]],[c[0],a,c[1]],[l[0],a,l[1]],u,[[o,s],[p,s],[p,a],[o,a]])}}var Ou={E:[1,0],W:[-1,0],S:[0,1],N:[0,-1]};function Da(i,e,t,n,r,s,a,l){i.quad(e,[t,a,r],[t,a,l],[s,a,l],[s,a,r],[0,1,0],[[t,r],[t,l],[s,l],[s,r]]),i.quad(e,[t,n,l],[t,n,r],[s,n,r],[s,n,l],[0,-1,0],[[t,l],[t,r],[s,r],[s,l]]),i.quad(e,[t,n,l],[s,n,l],[s,a,l],[t,a,l],[0,0,1],[[t,n],[s,n],[s,a],[t,a]]),i.quad(e,[s,n,r],[t,n,r],[t,a,r],[s,a,r],[0,0,-1],[[s,n],[t,n],[t,a],[s,a]]),i.quad(e,[s,n,l],[s,n,r],[s,a,r],[s,a,l],[1,0,0],[[l,n],[r,n],[r,a],[l,a]]),i.quad(e,[t,n,r],[t,n,l],[t,a,l],[t,a,r],[-1,0,0],[[r,n],[l,n],[l,a],[r,a]])}function Fu(i,e,t,n,r,s,a,l){r==="E"?Da(i,e,t+1-l,s,n,t+1,s+a,n+1):r==="W"?Da(i,e,t,s,n,t+l,s+a,n+1):r==="S"?Da(i,e,t,s,n+1-l,t+1,s+a,n+1):Da(i,e,t,s,n,t+1,s+a,n+l)}function rd(i){for(var e={},t=0;t<i.cells.length;t++){var n=i.cells[t];n>=1&&n<=5&&(e[n]=(e[n]||0)+1)}var r=1,s=-1;for(var a in e)e[a]>s&&(s=e[a],r=+a);return r}function R_(i,e,t){var n=rd(i);return[[1,0],[-1,0],[0,1],[0,-1]].forEach(function(r){var s=Vn(i,e+r[0],t+r[1]);s>=1&&s<=5&&(n=s)}),n}function sd(i){var e=i.W,t=i.L,n=new Ql,r=new dt,s="wall"+rd(e),a={};e.lifts.forEach(function(ee){a[ee.x+","+ee.z]=ee});var l=[];function c(ee,he){var _e=Vn(e,ee,he);return _e===0||!!$n[_e]}function u(ee,he){var _e=a[ee+","+he];return _e?_e.bottom:nn(e,ee,he)}for(var o=0;o<e.mh;o++)for(var p=0;p<e.mw;p++)if(c(p,o)){var f=u(p,o),m=fi(e,p,o);a[p+","+o]||n.quad("floor",[p,f,o],[p,f,o+1],[p+1,f,o+1],[p+1,f,o],[0,1,0],[[p,o],[p,o+1],[p+1,o+1],[p+1,o]]),n.quad("ceil",[p,m,o],[p+1,m,o],[p+1,m,o+1],[p,m,o+1],[0,-1,0],[[p,o],[p+1,o],[p+1,o+1],[p,o+1]]);for(var v in Ou){var E=p+Ou[v][0],g=o+Ou[v][1],d=Vn(e,E,g);if(!c(E,g)){if(d===9){var x={x:E,z:g,faces:new Ql,dir:v};jl(x.faces,"sw",p,o,v,f,m),l.push(x)}else jl(n,"wall"+(d>=1&&d<=5?d:1),p,o,v,f,m);$n[Vn(e,p,o)]||(Fu(n,"trim",p,o,v,f,.09,.035),m-f>2&&Fu(n,"trim",p,o,v,m-.12,.08,.05));continue}var U=u(E,g),w=fi(e,E,g);U>f&&(jl(n,s,p,o,v,f,Math.min(U,m)),U-f>.3&&Fu(n,"trim",p,o,v,U-.07,.07,.06)),w<m&&jl(n,s,p,o,v,Math.max(w,f),m)}}for(var I=0;I<e.mh;I++)for(var P=0;P<e.mw;P++)if(!(I%3!==1||Vn(e,P,I)!==0)){var O=fi(e,P,I);O-nn(e,P,I)<2.6||Da(n,"beam",P,O-.2,I+.38,P+1,O,I+.62)}var b={};function _(ee){return b[ee]?b[ee]:ee==="floor"?b[ee]=oi(Uu(t.floor)):ee==="ceil"?b[ee]=oi(Uu(t.ceil)):ee==="trim"?b[ee]=oi(Bi(3),{color:10127992,metalness:.6,roughness:.5}):ee==="beam"?b[ee]=oi(Bi(3),{color:6969930,metalness:.4}):b[ee]=oi(Bi(+ee.slice(4)))}n.meshes(_).forEach(function(ee){ee.receiveShadow=!0,r.add(ee)});var T=oi(Bi(9)),A=oi(Bi(10));l.forEach(function(ee){ee.faces.meshes(function(){return T}).forEach(function(he){ee.mesh=he,r.add(he)})});var y=[];for(var C in e.doors){var L=e.doors[C],k=nn(e,L.x,L.z),Y=fi(e,L.x,L.z),$=Y-k,re;if(L.secret)re=new Ne(new en(1,$,1),oi(id(R_(e,L.x,L.z)))),Hu(re.geometry,1,$);else{var q=c(L.x-1,L.z)&&c(L.x+1,L.z),j=q?new en(.22,$,1):new en(1,$,.22);re=new Ne(j,oi(Bi(L.locked==="red"?7:L.locked==="blue"?8:6))),Hu(re.geometry,1,$)}re.position.set(L.x+.5,k+$/2,L.z+.5),re.userData={door:L,baseY:k+$/2,h:$},re.castShadow=!0,r.add(re),y.push(re)}var J=e.lifts.map(function(ee){var he=Math.max(.2,ee.top-ee.bottom+.2),_e=new Ne(new en(.98,he,.98),oi(Bi(4)));return Hu(_e.geometry,1,he),_e.userData={lift:ee,h:he},r.add(_e),_e});return{group:r,update:function(){y.forEach(function(ee){var he=ee.userData.door;ee.position.y=ee.userData.baseY+he.open*ee.userData.h*.98,ee.visible=he.open<.99}),J.forEach(function(ee){var he=ee.userData.lift;ee.position.set(he.x+.5,he.pos-ee.userData.h/2,he.z+.5)}),l.forEach(function(ee){ee.mesh&&(ee.mesh.material=e.cells[ee.z*e.mw+ee.x]===10?A:T)})}}}function Hu(i,e,t){for(var n=i.attributes.uv,r=0;r<n.count;r++){var s=Math.floor(r/4),a=(s<4,e),l=s===2||s===3?e:t;n.setXY(r,n.getX(r)*a,n.getY(r)*l)}n.needsUpdate=!0}var Na=new te;function Zn(i,e,t,n,r,s){let a=2*Math.PI*r/4,l=Math.max(s-2*r,0),c=Math.PI/4;Na.copy(e),Na[n]=0,Na.normalize();let u=.5*a/(a+l),o=1-Na.angleTo(i)/c;return Math.sign(Na[t])===1?o*u:l/(a+l)+u+u*(1-o)}var ec=class i extends en{constructor(e=1,t=1,n=1,r=2,s=.1){let a=r*2+1;if(s=Math.min(e/2,t/2,n/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:r,radius:s},a===1)return;let l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;let c=new te,u=new te,o=new te(e,t,n).divideScalar(2).subScalar(s),p=this.attributes.position.array,f=this.attributes.normal.array,m=this.attributes.uv.array,v=p.length/6,E=new te,g=.5/a;for(let d=0,x=0;d<p.length;d+=3,x+=2)switch(c.fromArray(p,d),u.copy(c),u.x-=Math.sign(u.x)*g,u.y-=Math.sign(u.y)*g,u.z-=Math.sign(u.z)*g,u.normalize(),p[d+0]=o.x*Math.sign(c.x)+u.x*s,p[d+1]=o.y*Math.sign(c.y)+u.y*s,p[d+2]=o.z*Math.sign(c.z)+u.z*s,f[d+0]=u.x,f[d+1]=u.y,f[d+2]=u.z,Math.floor(d/v)){case 0:E.set(1,0,0),m[x+0]=Zn(E,u,"z","y",s,n),m[x+1]=1-Zn(E,u,"y","z",s,t);break;case 1:E.set(-1,0,0),m[x+0]=1-Zn(E,u,"z","y",s,n),m[x+1]=1-Zn(E,u,"y","z",s,t);break;case 2:E.set(0,1,0),m[x+0]=1-Zn(E,u,"x","z",s,e),m[x+1]=Zn(E,u,"z","x",s,n);break;case 3:E.set(0,-1,0),m[x+0]=1-Zn(E,u,"x","z",s,e),m[x+1]=1-Zn(E,u,"z","x",s,n);break;case 4:E.set(0,0,1),m[x+0]=1-Zn(E,u,"x","y",s,e),m[x+1]=1-Zn(E,u,"y","x",s,t);break;case 5:E.set(0,0,-1),m[x+0]=Zn(E,u,"x","y",s,e),m[x+1]=1-Zn(E,u,"y","x",s,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var ad={};function ke(i,e){return ad[i]||(ad[i]=e())}function Tt(i,e){return new pn(Object.assign({color:i,roughness:.7,metalness:.05},e||{}))}function bn(i,e){return new pn({color:0,emissive:i,emissiveIntensity:e||3,roughness:1})}function qe(i,e,t,n,r,s){var a=new Ne(i,e);return a.position.set(t,n,r),a.castShadow=!0,(s||this).add(a),a}var Fn=function(){return new tr(1,16,12)},tn=function(){return new en(1,1,1)},dr=function(){return new ea(1,1,10)},li=function(){return new ss(1,1,1,14)},Pr=function(){return new Qs(1,1,6,12)};function nc(i){var e=[];return i.traverse(function(t){t.isMesh&&t.material&&!t.userData.noFlash&&(t.material=t.material.clone(),e.push(t.material))}),e}function C_(){var i=new dt,e=new dt;i.add(e);var t=Tt(8007196,{roughness:.6}),n=Tt(3806220),r=Tt(15259824,{roughness:.4}),s=qe(ke("cap",Pr),t,0,.5,0,e);s.scale.set(.17,.14,.13),s.rotation.x=.35;var a=qe(ke("sph",Fn),t,0,.72,.06,e);a.scale.set(.11,.1,.11),[-1,1].forEach(function(c){var u=qe(ke("cone",dr),n,c*.07,.83,.02,e);u.scale.set(.025,.12,.025),u.rotation.z=-c*.5;var o=qe(ke("sph",Fn),bn(16752672,2),c*.045,.74,.15,e);o.scale.setScalar(.018),o.userData.noFlash=!0;var p=new dt;p.position.set(c*.17,.58,.02),e.add(p);var f=qe(ke("cap",Pr),t,0,-.1,0,p);f.scale.set(.04,.09,.04);var m=qe(ke("cone",dr),r,0,-.26,.03,p);m.scale.set(.03,.07,.03),m.rotation.x=Math.PI,p.userData.side=c,e.userData["arm"+c]=p;var v=qe(ke("cap",Pr),n,c*.08,.18,0,e);v.scale.set(.05,.12,.05),e.userData["leg"+c]=v;var E=qe(ke("cone",dr),n,c*.06,.55,-.12,e);E.scale.set(.03,.09,.03),E.rotation.x=-1.2});var l=nc(i);return{obj:i,mats:l,animate:function(c,u){var o=c.state==="chase"||c.state==="flee"?Math.sin(u*9+c.animT):0;e.position.y=Math.abs(o)*.03,e.userData.leg1.rotation.x=o*.6,e.userData["leg-1"].rotation.x=-o*.6;var p=c.state==="windup"?1:0;e.userData.arm1.rotation.x=-o*.5-p*2.4,e.userData["arm-1"].rotation.x=o*.5-p*.4,e.rotation.x=c.state==="pain"?-.35:0}}}function I_(){var i=new dt,e=new dt;i.add(e);var t=Tt(12873850,{roughness:.55}),n=Tt(3803152),r=Tt(16051416,{roughness:.3}),s=qe(ke("sph",Fn),t,0,.36,0,e);s.scale.set(.34,.28,.32);var a=new dt;a.position.set(0,.3,.12),e.add(a);var l=qe(ke("sph",Fn),n,0,.04,.12,e);l.scale.set(.24,.1,.12),l.position.y=.33;for(var c=0;c<9;c++){var u=(c/8-.5)*2.4,o=qe(ke("cone",dr),r,Math.sin(u)*.22,.42,.14+Math.cos(u)*.14,e);o.scale.set(.028,.08,.028),o.rotation.x=Math.PI;var p=qe(ke("cone",dr),r,Math.sin(u)*.2,-.02,Math.cos(u)*.14+.02,a);p.scale.set(.025,.07,.025)}var f=qe(ke("sph",Fn),t,0,-.04,.02,a);f.scale.set(.26,.08,.22),[-1,1].forEach(function(v){var E=qe(ke("sph",Fn),bn(16752688,.9),v*.12,.56,.25,e);E.scale.setScalar(.02),E.userData.noFlash=!0;var g=qe(ke("cap",Pr),t,v*.18,.1,0,e);g.scale.set(.07,.07,.07),e.userData["leg"+v]=g});var m=nc(i);return{obj:i,mats:m,animate:function(v,E){var g=v.state==="chase"||v.state==="flee"?Math.sin(E*14+v.animT):0;e.position.y=Math.abs(g)*.04,e.userData.leg1.position.z=g*.08,e.userData["leg-1"].position.z=-g*.08;var d=v.state==="windup"?.7:(Math.sin(E*6+v.animT)+1)*.08;a.rotation.x=d,e.rotation.x=v.state==="windup"?.25:v.state==="pain"?-.3:0}}}function P_(){var i=new dt,e=new dt;i.add(e);var t=Tt(9052182,{roughness:.35,metalness:.6}),n=Tt(2757648,{roughness:.5,metalness:.4}),r=bn(16734736,4),s=qe(ke("box",tn),t,0,.82,0,e);s.scale.set(.5,.42,.3);var a=qe(ke("box",tn),n,0,.55,0,e);a.scale.set(.4,.16,.26);var l=qe(ke("sph",Fn),r,0,.84,.16,e);l.scale.setScalar(.07),l.userData.noFlash=!0;var c=qe(ke("box",tn),t,0,1.12,.02,e);c.scale.set(.2,.18,.2);var u=qe(ke("box",tn),bn(16747040,5),0,1.13,.12,e);u.scale.set(.15,.03,.02),u.userData.noFlash=!0,[-1,1].forEach(function(p){var f=qe(ke("cone",dr),n,p*.14,1.26,0,e);f.scale.set(.04,.2,.04),f.rotation.z=-p*.7;var m=qe(ke("sph",Fn),t,p*.3,1,0,e);m.scale.set(.14,.1,.14);var v=new dt;v.position.set(p*.33,.95,0),e.add(v),e.userData["arm"+p]=v;var E=qe(ke("box",tn),t,0,-.25,0,v);E.scale.set(.13,.42,.13);var g=qe(ke("box",tn),n,0,-.5,.02,v);g.scale.set(.15,.13,.15);var d=qe(ke("box",tn),n,p*.13,.24,0,e);d.scale.set(.15,.48,.17),e.userData["leg"+p]=d});var o=nc(i);return{obj:i,mats:o,animate:function(p,f){var m=p.state==="chase"?Math.sin(f*6+p.animT):0;e.userData.leg1.rotation.x=m*.4,e.userData["leg-1"].rotation.x=-m*.4,e.userData.arm1.rotation.x=p.state==="windup"?-2.2:-m*.3,e.userData["arm-1"].rotation.x=p.state==="windup"?-1.2:m*.3,e.position.y=Math.abs(m)*.03}}}function L_(){var i=new dt,e=new dt;i.add(e);var t=new pn({color:665648,emissive:4184296,emissiveIntensity:1.2,transparent:!0,opacity:.82,roughness:.3,metalness:.2}),n=new pn({color:0,emissive:10484991,emissiveIntensity:3}),r=qe(ke("cap",Pr),t,0,.58,0,e);r.scale.set(.13,.16,.09);var s=qe(ke("box",tn),t,0,.4,0,e);s.scale.set(.22,.08,.13);var a=qe(ke("sph",Fn),t,0,.86,0,e);a.scale.set(.085,.1,.09);var l=qe(ke("box",tn),n,0,.87,.07,e);l.scale.set(.12,.028,.02);var c=qe(ke("sph",Fn),n,0,.64,.08,e);c.scale.setScalar(.03),[-1,1].forEach(function(f){var m=new dt;m.position.set(f*.15,.72,0),e.add(m),e.userData["arm"+f]=m;var v=qe(ke("cap",Pr),t,0,-.14,0,m);v.scale.set(.035,.13,.035);var E=qe(ke("cap",Pr),t,f*.07,.18,0,e);E.scale.set(.045,.16,.045),e.userData["leg"+f]=E});var u=new Ne(ke("sph",Fn),new pn({color:0,emissive:16765502,emissiveIntensity:1.5,transparent:!0,opacity:.25,side:Wn,depthWrite:!1}));u.scale.setScalar(.62),u.position.y=.5,u.userData.noFlash=!0,i.add(u);var o=[t],p=new Ne(new nr(.34,.012,6,40),n);return p.rotation.x=Math.PI/2,p.position.y=.02,i.add(p),{obj:i,mats:o,animate:function(f,m){var v=f.state==="chase"?Math.sin(m*8+f.animT):0;e.userData.leg1.rotation.x=v*.5,e.userData["leg-1"].rotation.x=-v*.5,e.userData.arm1.rotation.x=f.state==="windup"?-1.5:-v*.4,e.userData["arm-1"].rotation.x=f.state==="windup"?-1.5:v*.4,e.position.y=.03+Math.sin(m*2)*.015;var E=f.state==="windup"&&f.attack!=="melee";n.emissive.setHex(E?16777215:10484991),n.emissiveIntensity=E?8:3,t.opacity=.7+Math.sin(m*23)*.06+(Math.random()<.02?-.3:0),u.visible=f.shieldT>0,u.rotation.y=m*1.5,p.scale.setScalar(1+Math.sin(m*3)*.05)}}}function D_(){var i=new dt,e=qe(ke("cyl",li),Tt(4872762,{roughness:.45,metalness:.5}),0,.28,0,i);e.scale.set(.2,.55,.2),[.08,.48].forEach(function(r){var s=qe(ke("cyl",li),Tt(2764326,{metalness:.6,roughness:.4}),0,r,0,i);s.scale.set(.205,.03,.205)});var t=qe(ke("cyl",li),bn(7012154,2.5),0,.56,0,i);t.scale.set(.16,.01,.16),t.userData.noFlash=!0;var n=qe(ke("box",tn),bn(16765502,1.5),0,.3,.2,i);return n.scale.set(.12,.12,.005),n.rotation.z=Math.PI/4,n.userData.noFlash=!0,{obj:i,mats:nc(i),animate:function(){}}}var N_={imp:C_,gnasher:I_,knight:P_,riley:L_,barrel:D_};function od(i){var e=N_[i.kind](),t=i.kind==="riley"?i.h/.95:1;e.obj.scale.setScalar(t);var n=0,r=e.animate;return e.update=function(s,a,l){e.obj.position.set(i.x,i.y,i.z);var c=i.state==="windup"||i.state==="pain"||i.los?l:i.moveAng||0,u=e.obj.rotation.y,o=-c+Math.PI/2,p=Math.atan2(Math.sin(o-u),Math.cos(o-u));if(e.obj.rotation.y=u+p*Math.min(1,a*10),i.state==="die"||i.state==="dead"){n+=a;var f=Math.min(1,n/.45);e.obj.rotation.x=-f*1.35,e.obj.position.y=i.y+.05*f,e.obj.scale.setScalar(t*(1-f*.15)),i.kind==="riley"&&(e.obj.visible=n*12%1<.6&&n<1.4)}else r(i,s);var m=i.flashT>0&&i.state!=="dead";e.mats.forEach(function(v){v.userData.base||(v.userData.base={e:v.emissive?v.emissive.getHex():0,i:v.emissiveIntensity}),m?(v.emissive.setHex(16777215),v.emissiveIntensity=1.4):(v.emissive.setHex(v.userData.base.e),v.emissiveIntensity=v.userData.base.i)})},e}function ld(i){var e=new dt,t=new dt;e.add(t);var n=i.item;if(n==="h"||n==="+"){var r=n==="+",s=qe(ke("box",tn),Tt(15789280,{roughness:.5}),0,.1,0,t);s.scale.set(r?.34:.2,r?.2:.14,r?.24:.14);var a=qe(ke("box",tn),bn(16722458,2),0,.1,0,t);a.scale.set(r?.22:.13,r?.06:.04,r?.245:.145);var l=qe(ke("box",tn),bn(16722458,2),0,.1,0,t);l.scale.set(r?.07:.045,r?.06:.04,r?.245:.145),l.scale.set(r?.345:.205,r?.06:.04,r?.07:.045)}else if(n==="b"){var c=qe(ke("box",tn),Tt(6972504,{metalness:.5,roughness:.4}),0,.08,0,t);c.scale.set(.1,.16,.06);var u=qe(ke("box",tn),Tt(14196800,{metalness:.8,roughness:.3}),0,.17,0,t);u.scale.set(.08,.03,.04)}else if(n==="a"){var o=qe(ke("box",tn),Tt(10496024,{roughness:.6}),0,.09,0,t);o.scale.set(.3,.18,.18);for(var p=0;p<4;p++){var f=qe(ke("cyl",li),Tt(14196800,{metalness:.8,roughness:.3}),-.1+p*.066,.2,0,t);f.scale.set(.022,.06,.022)}}else if(n==="A"){var m=qe(ke("box",tn),Tt(3050042,{metalness:.4,roughness:.4}),0,.2,0,t);m.scale.set(.34,.36,.14);var v=qe(ke("box",tn),bn(8060810,1.2),0,.26,.075,t);v.scale.set(.16,.1,.01)}else if(n==="2"){var E=ku(!0);E.scale.setScalar(.9),E.rotation.z=.2,E.position.y=.15,t.add(E)}else if(n==="r"||n==="u"){var g=n==="r"?16722458:3832575,d=qe(ke("box",tn),bn(g,2.5),0,.2,0,t);d.scale.set(.16,.22,.015);var x=qe(ke("box",tn),Tt(15788760),0,.25,0,t);x.scale.set(.12,.03,.02)}else if(n==="P"){var U=qe(ke("sph",Fn),bn(16756800,4),0,.3,0,t);U.scale.setScalar(.14);var w=new Ne(new nr(.2,.012,6,32),bn(16765502,3));w.position.y=.3,t.add(w)}var I=n==="r"||n==="u"||n==="P"||n==="2";return{obj:e,update:function(P){e.position.set(i.x,i.y,i.z),e.visible=!i.gone,I&&(t.rotation.y=P*1.8+i.bob),t.position.y=I?.08+Math.sin(P*2.5+i.bob)*.05:0}}}function cd(i){var e=new dt,t=qe(ke("cyl",li),Tt(3811866,{metalness:.3}),0,.4,0,e);t.scale.set(.03,.8,.03);var n=qe(ke("cyl",li),Tt(5917242,{metalness:.6,roughness:.4}),0,.82,0,e);n.scale.set(.1,.06,.1);var r=new dt;r.position.y=.9,e.add(r);var s=qe(ke("cone",dr),bn(16747040,5),0,.08,0,r);s.scale.set(.08,.2,.08);var a=qe(ke("cone",dr),bn(16769120,6),0,.05,0,r);return a.scale.set(.045,.12,.045),e.position.set(i.x,i.y,i.z),{obj:e,update:function(l){var c=Math.sin(l*17+i.animT*9)*.5+Math.sin(l*29+i.animT*3)*.5;r.scale.set(1+c*.1,1+c*.25,1+c*.1),r.rotation.y=l*3}}}var U_=function(i,e,t,n){return new ec(i,e,t,3,n)};function vn(i,e,t,n,r){return ke("rb"+i,function(){return U_(e,t,n,r)})}var ud=function(){return Tt(3816772,{metalness:.9,roughness:.3})},hd=function(){return Tt(1842724,{metalness:.85,roughness:.4})},O_=function(){return Tt(6961690,{roughness:.55,metalness:.05})},tc=function(){return Tt(2760988,{roughness:.85})},fd=function(){return Tt(3818032,{roughness:.9})};function Bu(i,e,t,n,r){var s=new dt;s.position.set(e,t,n),s.rotation.x=r||0,i.add(s);var a=new Ne(vn("palm",.07,.05,.09,.02),tc());s.add(a);var l=new Ne(vn("fing",.075,.03,.05,.012),tc());l.position.set(0,-.03,-.03),s.add(l);var c=new Ne(ke("cyl",li),fd());return c.scale.set(.045,.28,.045),c.rotation.x=Math.PI/2-.15,c.position.set(.01,-.02,.17),s.add(c),s}function ku(i){var e=new dt,t=ud(),n=hd(),r=O_();[-.019,.019].forEach(function(E){var g=new Ne(ke("cyl",li),t);g.scale.set(.019,.62,.019),g.rotation.x=Math.PI/2,g.position.set(E,0,-.36),e.add(g);var d=new Ne(ke("cyl",li),Tt(328965));d.scale.set(.013,.01,.013),d.rotation.x=Math.PI/2,d.position.set(E,0,-.672),e.add(d)});var s=new Ne(vn("rib",.012,.01,.6,.004),n);s.position.set(0,.022,-.36),e.add(s);var a=new Ne(ke("sph",Fn),bn(16769184,1.2));a.scale.setScalar(.006),a.position.set(0,.03,-.66),e.add(a);var l=new dt;l.position.set(0,-.034,-.3),e.add(l),e.userData.pump=l;var c=new Ne(vn("fore",.066,.05,.2,.015),r);l.add(c);for(var u=0;u<5;u++){var o=new Ne(vn("grip",.068,.006,.012,.002),Tt(3808780));o.position.set(0,-.022,-.08+u*.04),l.add(o)}var p=new Ne(vn("recv",.075,.085,.2,.012),n);p.position.set(0,-.012,.02),e.add(p);var f=new Ne(vn("port",.005,.03,.07,.003),Tt(657930));f.position.set(.039,0,0),e.add(f);var m=new Ne(new nr(.025,.005,6,14,Math.PI),n);m.position.set(0,-.055,.07),m.rotation.set(0,Math.PI/2,Math.PI),e.add(m);var v=new Ne(vn("stock",.064,.1,.28,.02),r);return v.position.set(0,-.055,.24),v.rotation.x=-.14,e.add(v),i||(e.userData.pumpHand=Bu(l,-.005,-.045,.01,.1),Bu(e,.01,-.08,.1,.4)),e}function dd(){var i=new dt,e=ud(),t=hd(),n=new Ne(vn("slide",.042,.042,.19,.008),e);n.position.set(0,.02,-.07),i.add(n),i.userData.slide=n;for(var r=0;r<6;r++){var s=new Ne(vn("ser",.044,.03,.004,.001),t);s.position.set(0,.022,0+r*.008-.02),n.add(s),s.position.set(0,0,.06+r*.008)}var a=new Ne(vn("frame",.038,.03,.16,.008),t);a.position.set(0,-.012,-.06),i.add(a);var l=new Ne(ke("cyl",li),Tt(526344));l.scale.set(.009,.01,.009),l.rotation.x=Math.PI/2,l.position.set(0,.022,-.166),i.add(l);var c=new Ne(vn("pgrip",.036,.11,.05,.01),Tt(2761760,{roughness:.8}));c.position.set(0,-.07,.01),c.rotation.x=.28,i.add(c);var u=new Ne(new nr(.018,.004,6,14,Math.PI),t);u.position.set(0,-.03,-.035),u.rotation.set(0,Math.PI/2,Math.PI),i.add(u);var o=new Ne(vn("sight",.006,.01,.01,.002),bn(16734762,1.5));o.position.set(0,.046,-.155),i.add(o);var p=new Ne(vn("rear",.03,.01,.008,.002),t);return p.position.set(0,.046,.02),i.add(p),Bu(i,0,-.07,.04,.3),i}function pd(){var i=new dt,e=new Ne(vn("fist",.1,.085,.11,.03),tc());i.add(e);var t=new Ne(vn("knuck",.105,.04,.03,.012),Tt(5917242,{metalness:.7,roughness:.35}));t.position.set(0,.02,-.06),i.add(t);var n=new Ne(vn("thumb",.03,.03,.06,.012),tc());n.position.set(-.05,-.01,-.02),i.add(n);var r=new Ne(ke("cyl",li),fd());return r.scale.set(.05,.3,.05),r.rotation.x=Math.PI/2,r.position.set(0,-.01,.2),i.add(r),i}var Hn=3e3;function md(i){var e=new Float32Array(Hn*3),t=new Float32Array(Hn*3),n=new Float32Array(Hn),r=new Float32Array(Hn),s=new Float32Array(Hn*3),a=new Float32Array(Hn),l=new Float32Array(Hn),c=new Float32Array(Hn),u=new Float32Array(Hn),o=new Float32Array(Hn*3),p=new Uint8Array(Hn),f=new Kt;f.setAttribute("position",new cn(e,3).setUsage(ds)),f.setAttribute("color",new cn(t,3).setUsage(ds)),f.setAttribute("size",new cn(n,1).setUsage(ds)),f.setAttribute("alpha",new cn(r,1).setUsage(ds));var m=new Vt({uniforms:{scale:{value:600}},vertexShader:["attribute float size; attribute float alpha; attribute vec3 color; varying vec3 vC; varying float vA;","uniform float scale;","void main(){ vC = color; vA = alpha; vec4 mv = modelViewMatrix * vec4(position,1.0);"," gl_PointSize = size * scale / -mv.z; gl_Position = projectionMatrix * mv; }"].join(`
`),fragmentShader:["varying vec3 vC; varying float vA;","void main(){ vec2 d = gl_PointCoord - 0.5; float r = dot(d,d); if (r > 0.25) discard;"," float k = smoothstep(0.25, 0.0, r); gl_FragColor = vec4(vC * k * vA, k * vA); }"].join(`
`),transparent:!0,depthWrite:!1,blending:Ui}),v=new Zs(f,m);v.frustumCulled=!1,i.add(v);var E=0,g=0;function d(_,T,A,y,C,L,k,Y,$,re,q,j){var J=E;E=(E+1)%Hn,g=Math.min(Hn,g+1),e[J*3]=_,e[J*3+1]=T,e[J*3+2]=A,s[J*3]=y,s[J*3+1]=C,s[J*3+2]=L,o[J*3]=k[0],o[J*3+1]=k[1],o[J*3+2]=k[2],n[J]=Y,a[J]=l[J]=$,c[J]=re||0,u[J]=q||0,p[J]=j?0:1}function x(_){return(Math.random()-.5)*2*_}for(var U=[],w=0;w<6;w++){var I=new ii(16755285,0,6,1.6);I.userData={t:0,max:0,peak:0},i.add(I),U.push(I)}var P=0;function O(_,T,A,y,C,L,k){var Y=U[P];P=(P+1)%U.length,Y.position.set(_,T,A),Y.color.setHex(y),Y.distance=k||6,Y.userData.t=Y.userData.max=L,Y.userData.peak=C}var b={blood:function(_){for(var T=0;T<14;T++)d(_.x,_.y,_.z,_.dx*1.5+x(1.2),x(1)+1,_.dz*1.5+x(1.2),[.55,.02,.02],.05+Math.random()*.04,.6,9)},spark:function(_){for(var T=0;T<12;T++)d(_.x,_.y,_.z,x(3),x(3)+1,x(3),[1.4,1.1,.5],.025,.35,8);O(_.x,_.y,_.z,10484991,2,.1,3)},puff:function(_){for(var T=0;T<6;T++)d(_.x,_.y,_.z,x(.3),x(.3)+.2,x(.3),[.25,.23,.2],.12,.5,-.2,.3);for(var A=0;A<5;A++)d(_.x,_.y,_.z,x(2.5),x(2.5),x(2.5),[1.6,1,.4],.02,.18,6)},muzzle:function(_){var T=_.weapon==="shotgun";O(_.x,_.y,_.z,16756832,T?6:3.5,.07,T?8:6)},fireBurst:function(_){for(var T=0;T<22;T++)d(_.x,_.y,_.z,x(2),x(2)+.5,x(2),[1.8,.7,.15],.06,.35,2,-.1);O(_.x,_.y,_.z,16742944,4,.25,5)},greenBurst:function(_){for(var T=0;T<22;T++)d(_.x,_.y,_.z,x(2),x(2)+.5,x(2),[.3,1.6,1.8],.06,.35,2,-.1);O(_.x,_.y,_.z,6287615,4,.25,5)},explosion:function(_){for(var T=0;T<90;T++){var A=Math.random()<.5;d(_.x,_.y,_.z,x(4),x(3)+2,x(4),A?[2,1.2,.3]:[1.4,.4,.05],.12+Math.random()*.1,.5+Math.random()*.4,3,.4)}for(var y=0;y<30;y++)d(_.x,_.y+.3,_.z,x(1),Math.random()*1.5,x(1),[.18,.15,.13],.35,1.4,-.5,.6);O(_.x,_.y+.5,_.z,16747056,14,.5,9)},gib:function(_){for(var T=_.kind==="gnasher"?[.6,.15,.2]:[.5,.05,.02],A=0;A<26;A++)d(_.x,_.y,_.z,x(2),Math.random()*3,x(2),T,.06+Math.random()*.05,.9,9);if(_.kind==="riley")for(var y=0;y<60;y++)d(_.x,_.y+Math.random(),_.z,x(1),Math.random()*1.5,x(1),[.3,1.5,1.7],.04,1.4,-.4)},summon:function(_){for(var T=0;T<50;T++)d(_.x+x(.4),_.y,_.z+x(.4),x(.5),Math.random()*2.5,x(.5),[1.8,.5,.1],.07,.8,-1);O(_.x,_.y+.5,_.z,16734736,6,.6,6)},pickup:function(_){for(var T=0;T<16;T++)d(_.x,_.y,_.z,x(1),Math.random()*1.5,x(1),[1.4,1.2,.5],.03,.5,-1)}};return{points:v,event:function(_){b[_.name]&&b[_.name](_)},trail:function(_,T,A,y){d(_,T,A,x(.2),x(.2),x(.2),y?[.3,1.4,1.6]:[1.8,.6,.1],.07,.3,0,-.15)},ember:function(_,T,A){d(_+x(.05),T,A+x(.05),x(.15),.4+Math.random()*.4,x(.15),[1.6,.6,.1],.02,1.1,-.2)},update:function(_,T){m.uniforms.scale.value=T;for(var A=0;A<g;A++){if(a[A]<=0){r[A]=0;continue}a[A]-=_,s[A*3+1]-=c[A]*_,e[A*3]+=s[A*3]*_,e[A*3+1]+=s[A*3+1]*_,e[A*3+2]+=s[A*3+2]*_;var y=Math.max(0,a[A]/l[A]);r[A]=p[A]?y:1,n[A]=Math.max(.005,n[A]+u[A]*_),t[A*3]=o[A*3],t[A*3+1]=o[A*3+1]*(.5+.5*y),t[A*3+2]=o[A*3+2]*y}f.attributes.position.needsUpdate=f.attributes.color.needsUpdate=f.attributes.size.needsUpdate=f.attributes.alpha.needsUpdate=!0,f.setDrawRange(0,g),U.forEach(function(C){var L=C.userData;L.t>0?(L.t-=_,C.intensity=L.peak*Math.max(0,L.t/L.max)):C.intensity=0})}}}var gd={slab:788743,tech:395532,hell:1443332};function vd(i,e){e=e||{};var t=new Hl({canvas:i,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!e.preserve});t.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),t.toneMapping=Ar,t.toneMappingExposure=1.45;var n=new vs(t),r=n.fromScene(new Xl,.04).texture;t.outputColorSpace=fn,t.shadowMap.enabled=!1,t.info.autoReset=!1;var s=new ln(78,16/9,.03,60);s.rotation.order="YXZ";var a=null,l=null,c=null,u=null,o=null,p=new Map,f=[],m=new Map,v=new Qi,E=new ln(60,16/9,.01,5),g=new ii(16756848,0,3,1.5),d=new aa(16767152,1.2);d.position.set(-1,2,1),v.add(new ls(16777215,.35),new os(16769216,2103312,.8),g,d),v.environment=r,v.environmentIntensity=.6;var x={fist:pd(),pistol:dd(),shotgun:ku()},U=new dt;v.add(U),Object.keys(x).forEach(function(q){U.add(x[q]),x[q].visible=!1}),x.fist.position.set(.14,-.15,-.3),x.pistol.position.set(.13,-.13,-.3),x.shotgun.position.set(.1,-.13,-.2),x.shotgun.rotation.y=.04,x.pistol.rotation.y=.06;var w=new Ne(new tr(1,10,8),new Mi({color:16765056,transparent:!0,opacity:.9,blending:Ui,depthWrite:!1}));w.scale.setScalar(.035),v.add(w);var I=0,P={x:0,y:0},O=0,b=0,_=null,T={w:1,h:1,top:0};function A(q){_=q,a=new Qi;var j=gd[q.L.floor]||gd.slab;a.background=new We(j),a.fog=new Gs(j,.032),a.environment=r,a.environmentIntensity=.25,a.add(new os(10520696,2103840,.9)),a.add(new ls(5261384,.5)),u=sd(q),a.add(u.group),o=md(a),p.clear(),m.clear(),f=[],q.ents.forEach(function(J){if(J.kind==="torch"){var ee=cd(J);a.add(ee.obj),p.set(J,ee);var he=new ii(16747066,2.2,7.5,1.4);he.position.set(J.x,J.y+1,J.z),he.userData.e=J,a.add(he),f.push(he)}}),C(q).forEach(function(J){var ee=new ii(13154472,1.6+J.size*.02,4+Math.sqrt(J.size)*1.6,1.1);ee.position.set(J.x,J.y,J.z),a.add(ee);var he=new dt,_e=new Ne(new en(.5,.05,.5),new pn({color:0,emissive:16770752,emissiveIntensity:1.1})),Ue=new Ne(new en(.58,.1,.58),new pn({color:2762790,metalness:.8,roughness:.4,wireframe:!0}));he.add(_e,Ue),he.position.set(J.x,J.y+.35,J.z),a.add(he)}),l=new Gl(t),l.addPass(new Wl(a,s)),c=new ys(new Xe(256,256),.75,.55,.82),l.addPass(c),l.addPass(new ql),L(i.clientWidth,i.clientHeight)}function y(q,j,J,ee){var he=Math.floor(J)*q.mw+Math.floor(j);return q.cells[he]===0?q.ceil[he]:ee}function C(q){for(var j=q.W,J=new Uint8Array(j.mw*j.mh),ee=[],he=0;he<j.cells.length;he++)if(!(J[he]||j.cells[he]!==0)){var _e=[he],Ue=0,Oe=0,oe=0,ue=0;for(J[he]=1;_e.length;){var be=_e.pop(),Ge=be%j.mw,Te=be/j.mw|0;Ue+=Ge+.5,Oe+=Te+.5,oe=Math.max(oe,j.ceil[be]),ue++,[[1,0],[-1,0],[0,1],[0,-1]].forEach(function(Je){var gt=Ge+Je[0],Ke=Te+Je[1],Qe=Ke*j.mw+gt;gt<0||Ke<0||gt>=j.mw||Ke>=j.mh||J[Qe]||j.cells[Qe]!==0||(J[Qe]=1,_e.push(Qe))})}ue>=3&&ee.push({x:Ue/ue,z:Oe/ue,y:y(j,Ue/ue,Oe/ue,oe)-.4,size:ue})}return ee}function L(q,j){!q||!j||(t.setSize(q,j,!1),T={w:q,h:j},s.aspect=q/j,s.updateProjectionMatrix(),E.aspect=q/j,E.updateProjectionMatrix(),l&&(l.setSize(q,j),c.resolution.set(q/2,j/2)))}function k(q,j,J){var ee=q.p,he=new Set;q.ents.forEach(function(_e){if(_e.kind==="torch"){p.get(_e).update(j),Math.random()<J*6&&o.ember(_e.x,_e.y+1,_e.z),he.add(_e);return}if(_e.kind==="proj"){var Ue=m.get(_e);Ue||(Ue=new Ne(new tr(.09,10,8),new Mi({color:_e.green?10484991:16756800})),a.add(Ue),m.set(_e,Ue)),Ue.position.set(_e.x,_e.y,_e.z),o.trail(_e.x,_e.y,_e.z,_e.green),he.add(_e);return}if(_e.kind!=="part"){var Oe=p.get(_e);if(!Oe){if(_e.kind==="pickup")Oe=ld(_e);else if(_e.mob)Oe=od(_e);else return;a.add(Oe.obj),p.set(_e,Oe)}_e.kind==="pickup"?Oe.update(j):Oe.update(j,J,Math.atan2(ee.z-_e.z,ee.x-_e.x)),he.add(_e)}}),p.forEach(function(_e,Ue){he.has(Ue)||(a.remove(_e.obj),p.delete(Ue))}),m.forEach(function(_e,Ue){he.has(Ue)||(a.remove(_e),m.delete(Ue))})}function Y(q){var j=_.p;f.forEach(function(J,ee){var he=J.userData.e,_e=Math.sin(q*13+ee*7)*.12+Math.sin(q*31+ee*3)*.08+(Math.random()-.5)*.08,Ue=(he.x-j.x)*(he.x-j.x)+(he.z-j.z)*(he.z-j.z)>400;J.intensity=Ue?0:2.2*(1+_e)})}function $(q,j,J){var ee=q.p,he=Math.hypot(q.input.vx||0,q.input.vz||0);ee.onGround&&he>.5&&(I+=J*he*2.6);var _e=ee.onGround?Math.min(1,he/4):0,Ue=Math.atan2(Math.sin(ee.ang-O),Math.cos(ee.ang-O)),Oe=ee.pitch-b;O=ee.ang,b=ee.pitch,P.x+=(-Ue*.6-P.x)*Math.min(1,J*8),P.y+=(Oe*.6-P.y)*Math.min(1,J*8),Object.keys(x).forEach(function(gt){x[gt].visible=gt===ee.weapon&&!ee.dead});var oe=x[ee.weapon],ue=ee.fireT,be=ue<.12?Math.sin(ue/.12*Math.PI):0,Ge=ee.lowerT>0?1-ee.lowerT/.15:ee.raiseT>0?ee.raiseT/.15:0;if(U.position.set(Math.sin(I)*.012*_e+P.x*.1,-Math.abs(Math.cos(I))*.01*_e+P.y*.1-Ge*.25-ee.landT*.1,0),U.rotation.set(0,0,0),ee.weapon==="fist")oe.position.z=-.3-(ue<.2?Math.sin(ue/.2*Math.PI)*.18:0),oe.rotation.x=ue<.2?-Math.sin(ue/.2*Math.PI)*.3:0;else{if(oe.rotation.x=be*(ee.weapon==="shotgun"?.35:.2),oe.position.z=(ee.weapon==="shotgun"?-.2:-.3)+be*.05,ee.weapon==="shotgun"&&oe.userData.pump){var Te=ue>.3&&ue<.7?Math.sin((ue-.3)/.4*Math.PI):0;oe.userData.pump.position.z=-.3+Te*.09}ee.weapon==="pistol"&&oe.userData.slide&&(oe.userData.slide.position.z=-.08+be*.04)}var Je=ue<.06&&ee.weapon!=="fist"&&!ee.dead;w.visible=Je,w.position.set(oe.position.x,oe.position.y+(ee.weapon==="shotgun"?0:.02),oe.position.z-(ee.weapon==="shotgun"?.7:.18)),w.scale.setScalar((ee.weapon==="shotgun"?.06:.035)*(.8+Math.random()*.4)),g.intensity=Je?3:0,g.position.copy(w.position)}function re(q,j,J){t.info.reset(),q!==_&&A(q);var ee=q.p;u.update(),k(q,j,J),Y(j),q.events.forEach(function(_e){_e.t==="fx"&&o.event(_e)}),o.update(J,T.h*.9);var he=q.shake*.004;s.position.set(ee.x+(Math.random()-.5)*he,ee.y+ee.eyeH+(Math.random()-.5)*he,ee.z+(Math.random()-.5)*he),s.rotation.y=-Math.PI/2-ee.ang,s.rotation.x=ee.pitch,s.rotation.z=ee.dead?Math.min(.5,ee.deadT*.6):0,l.render(J),t.autoClear=!1,t.clearDepth(),$(q,j,J),t.render(v,E),t.autoClear=!0}return{render:re,resize:L,renderer:t,camera:s,info:function(){return t.info}}}var yt=320,F_=200,wt=168,_d=32,zu=wt/2,Ss="#e03828",ic="#8a8478",Vu="#401008";function H_(i,e){var t=String(i).split(" "),n=[],r="";return t.forEach(function(s){var a=r?r+" "+s:s;a.length>e&&r?(n.push(r),r=s):r=a}),r&&n.push(r),n}function Lr(i){i=i|0;var e=i/60|0,t=i%60;return e+":"+(t<10?"0":"")+t}function xd(i,e,t){function n(d,x){return d.time*(x||3)%1<.55}function r(d,x,U){return U?n(d,3)?"#ffffff":Ss:x?"#ff9a28":Ss}function s(d){return d.dead?Ce.default.faces.dead:d.grinT>0?Ce.default.faces.grin:d.painT>.25?Ce.default.faces.pain:d.hp>=80?Ce.default.faces.ok:d.hp>=55?Ce.default.faces.hurt1:d.hp>=30?Ce.default.faces.hurt2:Ce.default.faces.hurt3}function a(d){var x=d.p;i.fillStyle="#3a352e",i.fillRect(0,wt,yt,_d),i.fillStyle="#14110d",i.fillRect(0,wt,yt,2),i.fillStyle="#57514a",i.fillRect(0,wt+2,yt,1),i.fillStyle="#24211c",[46,116,142,178,230,250].forEach(function(O){i.fillRect(O,wt+4,1,_d-8)});var U=Rs[x.weapon],w=U.ammo?x.ammo[U.ammo]:-1,I=U.ammo&&w<=(U.ammo==="shells"?4:10);Ce.default.drawText(i,"AMMO",8,wt+5,{color:w===0?Ss:ic}),Ce.default.drawText(i,U.ammo?String(w):"--",40,wt+12,{scale:3,color:r(d,I,w===0),shadow:Vu,right:!0});var P=x.hp<=25;Ce.default.drawText(i,"HEALTH",54,wt+5,{color:P?Ss:ic}),Ce.default.drawText(i,x.hp+"%",108,wt+12,{scale:3,color:r(d,x.hp<=50,P&&!x.dead),shadow:Vu,right:!0}),Ce.default.drawText(i,"ARMS",129,wt+5,{color:ic,center:!0}),Ai.forEach(function(O,b){var _=119+b*8,T=x.weapons[O],A=(x.nextWeapon||x.weapon)===O,y=A?"#ffd23e":T?e.hasAmmo(x,O)?"#c8c0b0":"#6a5a4a":"#2a2620";Ce.default.drawText(i,String(b+1),_,wt+13,{scale:2,color:y}),A&&(i.fillStyle="#ffd23e",i.fillRect(_,wt+25,6,1))}),i.drawImage(s(x).canvas,148,wt+3),Ce.default.drawText(i,"ARMOR",184,wt+5,{color:ic}),Ce.default.drawText(i,x.armor+"%",226,wt+12,{scale:3,color:x.armor>0?Ss:"#6a4a40",shadow:Vu,right:!0}),[["red","keyRed",5],["blue","keyBlue",18]].forEach(function(O){!x.keys[O[0]]&&!d.info.keys[O[0]]||(i.globalAlpha=x.keys[O[0]]?1:.18,i.drawImage(Ce.default.things[O[1]].canvas,236,wt+O[2]),i.globalAlpha=1)}),Ce.default.drawText(i,"BULL "+x.ammo.bullets+"/200",254,wt+8,{color:U.ammo==="bullets"?"#ffd23e":"#c8c0b0"}),Ce.default.drawText(i,"SHEL "+x.ammo.shells+"/50",254,wt+19,{color:x.weapons.shotgun?U.ammo==="shells"?"#ffd23e":"#c8c0b0":"#6a655c"})}function l(d){var x=yt/2,U=zu;if(t.crosshair){var w=e.aimTarget();i.fillStyle=w?w.barrel?"#ff9a28":"#ff4a2a":"rgba(232,224,200,0.8)",i.fillRect(x-5,U,3,1),i.fillRect(x+3,U,3,1),i.fillRect(x,U-5,1,3),i.fillRect(x,U+3,1,3)}var I=d.killT>0?"#ff3a1a":d.blockT>0?"#9aa4a8":d.hitT>0?"#ffffff":null;if(I){i.fillStyle=I;for(var P=d.killT>0?4:3,O=P;O<P+3;O++)i.fillRect(x-O,U-O,1,1),i.fillRect(x+O,U-O,1,1),i.fillRect(x-O,U+O,1,1),i.fillRect(x+O,U+O,1,1)}}function c(d){var x=d.p,U=yt/2,w=zu,I=34;d.hurtDirs.forEach(function(P){var O=P.ang-x.ang,b=Math.sin(O),_=-Math.cos(O),T=U+b*I,A=w+_*I;i.fillStyle="rgba(255,40,16,"+Math.min(.9,P.t).toFixed(3)+")",i.beginPath(),i.moveTo(T+b*9,A+_*9),i.lineTo(T-_*7,A+b*7),i.lineTo(T+_*7,A-b*7),i.closePath(),i.fill()})}function u(){var d=e.usePrompt();if(d){var x=zu+14;if(d.verb){var U=Ce.default.textWidth(d.verb,1),w=13+U,I=(yt-w)/2|0;i.fillStyle="rgba(0,0,0,0.55)",i.fillRect(I-3,x-3,w+6,13),i.fillStyle="#e8e0c8",i.fillRect(I,x-1,9,9),i.fillStyle="#14110d",i.fillRect(I+1,x,7,7),Ce.default.drawText(i,"E",I+3,x+1,{color:"#ffd23e"}),Ce.default.drawText(i,d.verb,I+13,x+1,{color:d.color,shadow:!0})}else{var P=Ce.default.textWidth(d.text,1);i.fillStyle="rgba(0,0,0,0.55)",i.fillRect((yt-P)/2-4,x-3,P+8,13),Ce.default.drawText(i,d.text,yt/2,x+1,{color:d.color,shadow:!0,center:!0})}}}function o(d,x){if(!(!t.goalMarker||!x)){var U=e.goalTarget();if(U){var w=d.p,I=Math.hypot(U.x-w.x,U.z-w.z);if(!(I<1.6)){var P={x:U.x,y:U.y,z:U.z},O=B_(x,P),b=d.time*2%1<.7?"#ffd23e":"#c89a20";if(i.fillStyle=b,i.beginPath(),O.inFront&&O.x>8&&O.x<yt-8&&O.y>8&&O.y<wt-8){var _=Math.round(O.x),T=Math.round(O.y)-8;i.moveTo(_,T-4),i.lineTo(_+4,T),i.lineTo(_,T+4),i.lineTo(_-4,T),i.closePath(),i.fill(),Ce.default.drawText(i,String(Math.round(I*2))+"M",_,T+7,{color:b,shadow:!0,center:!0})}else{var A=Math.atan2(U.z-w.z,U.x-w.x)-w.ang;A=Math.atan2(Math.sin(A),Math.cos(A));var y=A>0,C=y?yt-6:6,L=40;i.moveTo(C+(y?4:-4),L),i.lineTo(C-(y?3:-3),L-5),i.lineTo(C-(y?3:-3),L+5),i.closePath(),i.fill(),Ce.default.drawText(i,"GOAL",y?yt-12:12,L-2,{color:b,shadow:!0,right:y})}}}}}function p(d){var x=d.p;if(!(x.dead||x.hp>25))for(var U=.18+.14*Math.sin(d.time*5),w=0;w<6;w++)i.fillStyle="rgba(200,0,0,"+(U*(1-w/6)).toFixed(3)+")",i.fillRect(w*2,0,2,wt),i.fillRect(yt-w*2-2,0,2,wt),i.fillRect(0,w*2,yt,2),i.fillRect(0,wt-w*2-2,yt,2)}var f={imp:["AN IMP BURNED YOU DOWN.","TIP: STRAFE WITH A AND D TO SIDESTEP FIREBALLS."],gnasher:["A GNASHER CHEWED YOU UP.","TIP: BACK AWAY WHILE YOU SHOOT, OR JUMP UP WHERE IT CAN'T FOLLOW."],knight:["THE EMBER KNIGHT CRUSHED YOU.","TIP: KEEP YOUR DISTANCE AND BRING SHOTGUN SHELLS."],riley:["RILEY OUTPLAYED YOU.","TIP: WHEN HER VISOR FLASHES WHITE, SHE IS ABOUT TO SHOOT. MOVE!"],barrel:["A BARREL BLEW UP IN YOUR FACE.","TIP: SHOOT BARRELS FROM FAR AWAY, WHEN DEMONS ARE NEAR THEM."]};function m(d){var x=d.p;if(!(!x.dead||x.deadT<1)){var U=f[d.killer]||["YOU WERE OVERWHELMED.","TIP: FIGHT FROM HIGH GROUND SO DEMONS COME TO YOU ONE AT A TIME."];i.fillStyle="rgba(0,0,0,0.5)",i.fillRect(0,44,yt,72),Ce.default.drawText(i,"YOU DIED",yt/2,50,{scale:3,color:Ss,shadow:!0,center:!0}),Ce.default.drawText(i,U[0],yt/2,72,{color:"#e8e0c8",shadow:!0,center:!0}),Ce.default.drawText(i,U[1],yt/2,84,{color:"#8fe0a0",shadow:!0,center:!0}),x.deadT>1.2&&d.time%1<.7&&Ce.default.drawText(i,"CLICK OR PRESS ENTER TO TRY AGAIN",yt/2,100,{color:"#f0d848",shadow:!0,center:!0})}}function v(d){var x=4;d.msgs.forEach(function(w){var I=H_(w.text,78);w.t<.4&&(i.globalAlpha=Math.max(0,w.t/.4)),I.forEach(function(P){Ce.default.drawText(i,P,4,x,{color:w.color||"#f0d848",shadow:!0}),x+=7}),i.globalAlpha=1,x+=1});var U=d.notice;U&&(i.globalAlpha=Math.min(1,U.t/.4),Ce.default.drawText(i,U.text,yt/2,50,{scale:2,color:U.color,shadow:!0,center:!0}),i.globalAlpha=1)}function E(d){var x=d.boss;if(!(!x||x.state==="idle"||x.state==="dead")){var U=140,w=(yt-U)/2,I=wt-12,P=x.shieldT>0;Ce.default.drawText(i,P?"RILEY - SHIELDED":"RILEY",yt/2,I-8,{color:P?"#ffd23e":"#6fe0ec",shadow:!0,center:!0}),i.fillStyle="#06141c",i.fillRect(w-1,I-1,U+2,6),i.fillStyle=P?"#ffd23e":"#3fd8c8",i.fillRect(w,I,Math.max(0,x.hp/x.maxHp)*U,4),i.fillStyle="#06141c",i.fillRect(w+U*.33,I,1,4),i.fillRect(w+U*.66,I,1,4)}}function g(d){i.fillStyle="rgba(0,0,0,0.8)",i.fillRect(0,0,yt,wt);for(var x=22,U=wt-14,w=Math.min((yt-16)/d.mw,(U-x)/d.mh),I=(yt-d.mw*w)/2,P=x+(U-x-d.mh*w)/2,O=d.time*2%1<.6,b=0;b<d.mh;b++)for(var _=0;_<d.mw;_++){var T=b*d.mw+_,A=d.W.cells[T];if(d.seen[T]){var y=null;if(A===0){var C=d.W.floor[T];y="rgb("+(40+C*50|0)+","+(34+C*40|0)+","+(28+C*30|0)+")"}else A===6?y="#c8a030":A===11?y=d.doors[_+","+b].found?"#c8a030":"#6a655c":A===7?y="#ff3a2a":A===8?y="#4a7aff":A===9||A===10?y=O||A===10?"#58e068":"#1e5a26":y="#8a8478";i.fillStyle=y,i.fillRect(I+_*w,P+b*w,Math.max(1,w-.4),Math.max(1,w-.4))}}var L=e.goalTarget();if(L&&O){var k=I+L.x*w,Y=P+L.z*w;i.fillStyle="#ffd23e",i.fillRect(k-3,Y-3,7,1),i.fillRect(k-3,Y+3,7,1),i.fillRect(k-3,Y-3,1,7),i.fillRect(k+3,Y-3,1,7)}var $=d.p,re=I+$.x*w,q=P+$.z*w,j=Math.cos($.ang),J=Math.sin($.ang);i.fillStyle="#f8f4e0",i.beginPath(),i.moveTo(re+j*5,q+J*5),i.lineTo(re-j*3-J*3,q-J*3+j*3),i.lineTo(re-j*3+J*3,q-J*3-j*3),i.closePath(),i.fill(),Ce.default.drawText(i,d.L.name,6,4,{color:"#ff9a28",shadow:!0}),Ce.default.drawText(i,"TAB: CLOSE",yt-6,4,{color:"#8a8478",right:!0}),Ce.default.drawText(i,"GOAL: "+e.objective(),6,12,{color:"#f0d848",shadow:!0});var ee=d.stats;Ce.default.drawText(i,"KILLS "+ee.kills+"/"+ee.totalKills+"  ITEMS "+ee.items+"/"+ee.totalItems+"  SECRETS "+ee.secrets+"/"+ee.totalSecrets+"  TIME "+Lr(d.time),yt-6,12,{color:"#c8c0b0",right:!0}),Ce.default.drawText(i,"BRIGHTER FLOOR = HIGHER GROUND",6,wt-9,{color:"#a8a090"})}return{draw:function(d,x){i.clearRect(0,0,yt,F_);var U=d.p;U.dmgFlash>0&&(i.fillStyle="rgba(255,20,10,"+(U.dmgFlash*.8).toFixed(3)+")",i.fillRect(0,0,yt,wt)),U.bonusFlash>0&&(i.fillStyle="rgba(255,220,80,"+(U.bonusFlash*.7).toFixed(3)+")",i.fillRect(0,0,yt,wt)),p(d),x.map?g(d):!U.dead&&!x.menu&&(c(d),o(d,x.camera),l(d),u()),x.map||E(d),v(d),m(d),a(d)}}}function B_(i,e){var t=i.matrixWorldInverse.elements,n=i.projectionMatrix.elements,r=e.x,s=e.y,a=e.z,l=t[0]*r+t[4]*s+t[8]*a+t[12],c=t[1]*r+t[5]*s+t[9]*a+t[13],u=t[2]*r+t[6]*s+t[10]*a+t[14],o=n[0]*l+n[4]*c+n[8]*u+n[12],p=n[1]*l+n[5]*c+n[9]*u+n[13],f=n[3]*l+n[7]*c+n[11]*u+n[15];return f<=.01?{inFront:!1}:{inFront:!0,x:(o/f*.5+.5)*yt,y:(1-(p/f*.5+.5))*wt}}var ci=Gu.default.SETTINGS,ht=Gu.default.MENU,Ct=ci.v;Ct.invertY===void 0&&(Ct.invertY=!1);Ct.fov===void 0&&(Ct.fov=78);var pt=320,In=200,k_=168,Td=document.getElementById("view"),Jn=document.getElementById("hud");Jn.width=pt;Jn.height=In;var Ye=Jn.getContext("2d");Ye.imageSmoothingEnabled=!1;var ac=/debug/.test(location.search),tt=ah({levels:_r,rng:ch((Date.now()&4294967295)>>>0),storage:(function(){try{return window.localStorage}catch{return null}})(),settings:Ct,saveSettings:function(){ci.save()},onProgress:function(i,e){ci.unlock(Math.min(i+1,_r.length-1)),z_=ci.record?ci.record(i,e):null}}),z_=null,pr=vd(Td,{preserve:ac}),V_=xd(Ye,tt,Ct),Bn="title",ki=0,Ti=!1,bs=!1,ui=!1,Ha=!1;function Ba(){return vr[Ct.difficulty]||vr[1]}function Ed(){hn.default.setVolume(Ct.volume/10),pr.camera.fov=Ct.fov,pr.camera.updateProjectionMatrix()}function wd(){var i=window.innerWidth,e=window.innerHeight,t=Math.min(i,e*1.6),n=t/1.6,r=(i-t)/2,s=(e-n)/2;Jn.style.cssText="left:"+r+"px;top:"+s+"px;width:"+t+"px;height:"+n+"px";var a=Math.round(n*k_/In);Td.style.cssText="left:"+r+"px;top:"+s+"px;width:"+t+"px;height:"+a+"px",pr.resize(Math.round(t),a)}window.addEventListener("resize",wd);wd();var oc=tt.keys,Va=!1;function Ad(){for(var i in oc)oc[i]=!1;Va=!1,tt.setFire(!1)}document.addEventListener("keydown",function(i){if((["Tab","Space"].indexOf(i.code)>=0||i.code.slice(0,5)==="Arrow")&&i.preventDefault(),hn.default.init(),ht.isOpen()){hn.default.startMusic(),ht.key(i.code);return}if(!i.repeat){if(i.code==="Enter"||i.code==="NumpadEnter"){lc();return}if(Bn!=="game"){i.code==="Space"&&lc();return}if(i.code==="Escape"&&Ti&&!ui){Id();return}oc[i.code]=!0;var e=tt.state();if(i.code==="Tab"&&(bs=!bs,e.usedMap=!0),i.code==="KeyM"){var t=hn.default.toggleMusic();e.msgs.push({text:"MUSIC "+(t?"ON":"OFF"),t:2})}(i.code==="ControlLeft"||i.code==="ControlRight")&&(Va=!0,tt.setFire(!0)),i.code==="Digit1"&&tt.switchWeapon("fist"),i.code==="Digit2"&&tt.switchWeapon("pistol"),i.code==="Digit3"&&tt.switchWeapon("shotgun"),i.code==="KeyQ"&&tt.quickSwitch()}});document.addEventListener("keyup",function(i){oc[i.code]=!1,(i.code==="ControlLeft"||i.code==="ControlRight")&&(Va=!1,tt.setFire(!1))});window.addEventListener("blur",Ad);document.addEventListener("pointerlockchange",function(){ui=document.pointerLockElement===Jn,Ad(),ui?(Ha=!1,Bn==="game"&&ht.close(),!Ti&&Bn==="game"&&W_()):Bn==="game"&&Ti&&Id()});document.addEventListener("pointerlockerror",function(){Ha=!0});function ka(){try{var i=Jn.requestPointerLock({unadjustedMovement:!0});i&&i.catch&&i.catch(function(){try{Jn.requestPointerLock()}catch{Ha=!0}})}catch{Ha=!0}}function G_(){try{document.exitPointerLock()}catch{}}function Rd(i){var e=Jn.getBoundingClientRect();return{x:(i.clientX-e.left)/e.width*pt,y:(i.clientY-e.top)/e.height*In}}document.addEventListener("mousemove",function(i){var e=tt.state();if(ui&&Bn==="game"&&e&&!e.p.dead){var t=44e-5*Ct.sens;e.p.ang+=i.movementX*t,e.p.pitch-=i.movementY*t*(Ct.invertY?-1:1),e.p.pitch=Math.max(-1.3,Math.min(1.3,e.p.pitch));return}if(ht.isOpen()){var n=Rd(i);Jn.style.cursor=ht.pointer(n.x,n.y)?"pointer":"default"}});Jn.addEventListener("mousedown",function(i){if(hn.default.init(),hn.default.startMusic(),ht.isOpen()){var e=Rd(i);i.button===0&&ht.click(e.x,e.y);return}if(Bn==="game"){var t=tt.state();if(!ui){ht.close(),ka();return}if(t.p.dead){lc();return}i.button===0&&(Va=!0,tt.setFire(!0)),i.button===2&&(tt.keys.Space=!0);return}lc()});document.addEventListener("mouseup",function(i){i.button===0&&(Va=!1,tt.setFire(!1)),i.button===2&&(tt.keys.Space=!1)});Jn.addEventListener("contextmenu",function(i){i.preventDefault()});Jn.addEventListener("wheel",function(i){Bn==="game"&&ui&&(i.preventDefault(),i.deltaY&&tt.cycleWeapon(i.deltaY>0?1:-1))},{passive:!1});var rc=!1;function W_(){Ti=!0}function Cd(i){tt.startLevel(i,!1),Ti=!1,bs=!1,Bn="game",ht.close(),ka()}function lc(){hn.default.init(),hn.default.startMusic();var i=tt.mode();if(i==="inter"){if(!rc&&ki<1.3){rc=!0;return}rc=!1,tt.onEnter(),tt.onEnter(),tt.mode()==="game"&&(Ti=ui)}else if(i==="victory")ki>1&&Wu();else if(i==="game"){var e=tt.state();e.p.dead?e.p.deadT>1.2&&(tt.retryLevel(),Ti=ui):ui||(ht.close(),ka())}}function Wu(){tt.setMode("title"),Bn="title",ht.open(qu()),G_()}function Id(){bs=!1,ht.open(K_()),hn.default.play("menu")}function za(i,e,t){for(var n=0;n<pt;n+=2){var r=Math.sin(n*.07+e*3+t)+Math.sin(n*.13-e*2.2),s=6+r*4;Ye.fillStyle=r>.7?"#ffd23e":r>-.3?"#ff7a18":"#a83010",Ye.fillRect(n,i-s,2,s+4)}}function q_(i,e){Ye.fillStyle="rgba(8,6,4,0.55)",Ye.fillRect(0,0,pt,In),za(In-6,e,0),za(In-2,e*1.3,2),Ce.default.drawText(Ye,"FIREBIRD",pt/2,10,{scale:4,color:"#e03828",shadow:"#401008",center:!0}),Ce.default.drawText(Ye,"FIREBIRD",pt/2-1,9,{scale:4,color:"#ff9a28",center:!0}),Ce.default.drawText(Ye,"3D",pt/2,34,{scale:5,color:"#ffd23e",shadow:"#803008",center:!0}),Ce.default.drawText(Ye,"EPISODE ONE: KNEE-DEEP IN THE ASHES",pt/2,64,{color:"#c8c0b0",center:!0}),Ce.default.drawText(Ye,"A NIX GAMES PRODUCTION BY PHOENIX",pt/2,72,{color:"#8a8478",center:!0})}function Ts(i,e){Ye.fillStyle=Bn==="game"?"rgba(4,3,2,0.8)":"rgba(8,6,4,0.7)",Ye.fillRect(0,0,pt,In),Ye.fillStyle="#5e2a10",Ye.fillRect(40,33,pt-80,1)}function Ua(i){return i?"ON":"OFF"}function qu(){var i=ci.progress;return{drawBg:q_,scale:2,top:86,gap:13,descY:156,footerY:172,items:function(){var e=[];return i.unlocked>0&&e.push({label:"CONTINUE",action:function(){Cd(i.unlocked)},desc:function(){return"START "+_r[i.unlocked].name+" ON "+Ba().name+"."}}),e.push({label:"NEW GAME",action:function(){ht.push(Pd(0))},desc:"START EPISODE ONE FROM THE BEGINNING."},{label:"LEVEL SELECT",action:function(){ht.push(X_())},desc:"REPLAY ANY LEVEL YOU HAVE REACHED."},{label:"OPTIONS",action:function(){ht.push(Ld())},desc:"MOUSE, VOLUME, FIELD OF VIEW, CROSSHAIR, TIPS AND DIFFICULTY."},{label:"CONTROLS",action:function(){ht.push(Dd())},desc:"EVERY KEY, ON ONE PAGE."}),e}}}function Pd(i){var e=vr.map(function(t,n){return{label:t.name,desc:t.desc,action:function(){Ct.difficulty=n,ci.save(),Cd(i)}}});return e.push({label:"BACK",action:function(){ht.back()}}),{title:"DIFFICULTY",drawBg:Ts,scale:2,top:54,gap:18,descY:146,sel:Ct.difficulty,items:e}}function X_(){var i=_r.map(function(e,t){var n=t<=ci.progress.unlocked;return{label:n?e.name:e.name.split(":")[0]+": ???",disabled:function(){return!n},desc:"PAR "+Lr(e.par)+".  STARTS WITH A PISTOL.",action:function(){ht.push(Pd(t))}}});return i.push({label:"BACK",action:function(){ht.back()}}),{title:"LEVEL SELECT",drawBg:Ts,top:46,gap:14,descY:142,items:i}}function Ld(){function i(t,n,r,s){return function(a){var l=Ct[t]+a*(s||1);Ct[t]=l>r?n:l<n?r:l,ci.save(),Ed()}}function e(t){return function(){Ct[t]=!Ct[t],ci.save()}}return{title:"OPTIONS",drawBg:Ts,top:40,gap:11,descY:158,items:[{label:"MOUSE SPEED",slider:[0,10,function(){return Ct.sens}],adjust:i("sens",1,10),desc:"HOW FAST THE VIEW TURNS. LEFT AND RIGHT TO CHANGE."},{label:"INVERT MOUSE Y",value:function(){return Ua(Ct.invertY)},adjust:e("invertY"),desc:"PUSH THE MOUSE FORWARD TO LOOK DOWN INSTEAD OF UP."},{label:"FIELD OF VIEW",value:function(){return Ct.fov+" DEG"},adjust:i("fov",60,110,5),desc:"HOW WIDE YOU SEE. WIDER SHOWS MORE, NARROWER ZOOMS IN."},{label:"SOUND VOLUME",slider:[0,10,function(){return Ct.volume}],adjust:i("volume",0,10),desc:"LOUDNESS OF EVERYTHING."},{label:"MUSIC",value:function(){return Ua(hn.default.isMusicOn())},adjust:function(){hn.default.setMusic(!hn.default.isMusicOn())},desc:"PRESS M DURING PLAY TO TOGGLE IT TOO."},{label:"CROSSHAIR",value:function(){return Ua(Ct.crosshair)},adjust:e("crosshair"),desc:"A SMALL AIMING MARK. TURNS RED OVER A DEMON."},{label:"GOAL MARKER",value:function(){return Ua(Ct.goalMarker)},adjust:e("goalMarker"),desc:"POINTS AT YOUR GOAL ONCE YOU HAVE SEEN IT."},{label:"TIPS",value:function(){return Ua(Ct.tips)},adjust:function(){Ct.tips=!Ct.tips,Ct.tips&&(Ct.seenTips={}),ci.save()},desc:"SHORT HINTS THE FIRST TIME SOMETHING NEW HAPPENS."},{label:"DIFFICULTY",value:function(){return Ba().name},adjust:i("difficulty",0,2),desc:function(){return Ba().desc}},{label:"BACK",action:function(){ht.back()}}]}}var Y_=[["MOVE","W A S D   OR   ARROW KEYS"],["LOOK AND AIM","MOUSE (UP AND DOWN TOO)"],["FIRE","LEFT CLICK   OR   CTRL"],["JUMP","SPACE   OR   RIGHT CLICK"],["CROUCH","C"],["USE / OPEN","E"],["RUN","HOLD SHIFT"],["WEAPONS","1 2 3   OR   MOUSE WHEEL"],["LAST WEAPON","Q"],["MAP","TAB"],["PAUSE","ESC"]];function Dd(){return{title:"CONTROLS",drawBg:Ts,top:170,gap:12,items:[{label:"BACK",action:function(){ht.back()}}],drawExtra:function(){Y_.forEach(function(i,e){var t=40+e*11;Ce.default.drawText(Ye,i[0],140,t,{color:"#c8c0b0",right:!0}),Ce.default.drawText(Ye,i[1],152,t,{color:"#ffd23e"})})}}}function yd(i,e,t){return{title:i,drawBg:Ts,scale:2,top:86,gap:18,sel:1,drawExtra:function(){Ce.default.drawText(Ye,e,pt/2,56,{color:"#a8a090",center:!0})},items:[{label:"YES",action:t},{label:"NO",action:function(){ht.back()}}]}}function K_(){return{title:"PAUSED",drawBg:Ts,scale:2,top:64,gap:14,descY:144,footerY:176,footer:"ARROWS OR MOUSE: CHOOSE   ENTER OR CLICK: SELECT",items:[{label:function(){return tt.state().p.dead?"TRY AGAIN":"RESUME"},action:function(){tt.state().p.dead&&tt.retryLevel(),ht.close(),ka()},desc:"BACK TO THE FIGHT."},{label:"RESTART LEVEL",desc:"START THIS LEVEL OVER WITH THE GEAR YOU BROUGHT IN.",action:function(){ht.push(yd("RESTART?","YOU WILL LOSE PROGRESS IN THIS LEVEL.",function(){tt.retryLevel(),ht.close(),ka()}))}},{label:"OPTIONS",action:function(){ht.push(Ld())},desc:"MOUSE, VOLUME, FIELD OF VIEW AND MORE."},{label:"CONTROLS",action:function(){ht.push(Dd())},desc:"EVERY KEY, ON ONE PAGE."},{label:"QUIT TO TITLE",desc:"YOUR UNLOCKED LEVELS ARE SAVED.",action:function(){ht.push(yd("QUIT?","PROGRESS IN THIS LEVEL WILL BE LOST.",Wu))}}],drawExtra:function(){var i=tt.state(),e=i.stats;Ce.default.drawText(Ye,i.L.name+"   "+Ba().name,pt/2,38,{color:"#c8c0b0",center:!0}),Ce.default.drawText(Ye,"GOAL: "+tt.objective(),pt/2,48,{color:"#f0d848",center:!0}),Ce.default.drawText(Ye,"KILLS "+e.kills+"/"+e.totalKills+"   ITEMS "+e.items+"/"+e.totalItems+"   SECRETS "+e.secrets+"/"+e.totalSecrets+"   TIME "+Lr(i.time),pt/2,160,{color:"#8a8478",center:!0})}}}function Z_(i){var e=tt.state(),t=e.L.name.split(": ");Ye.fillStyle="rgba(4,3,2,0.6)",Ye.fillRect(0,0,pt,In),Ce.default.drawText(Ye,t[0],pt/2,22,{color:"#8a8478",center:!0}),Ce.default.drawText(Ye,t[1]||e.L.name,pt/2,32,{scale:3,color:"#ff9a28",shadow:"#401008",center:!0}),Ce.default.drawText(Ye,"GOAL",pt/2,60,{color:"#8a8478",center:!0}),Ce.default.drawText(Ye,tt.objective(),pt/2,69,{scale:2,color:"#f0d848",shadow:!0,center:!0}),Ce.default.drawText(Ye,"DIFFICULTY: "+Ba().name+"     PAR "+Lr(e.L.par),pt/2,88,{color:"#a8a090",center:!0}),i%1<.7&&Ce.default.drawText(Ye,"CLICK TO BEGIN",pt/2,106,{scale:2,color:"#ffffff",shadow:!0,center:!0}),Ha&&Ce.default.drawText(Ye,"THE GAME NEEDS THE MOUSE. CLICK THE SCREEN AGAIN.",pt/2,124,{color:"#ff9a28",center:!0}),Ce.default.drawText(Ye,"WASD MOVE  MOUSE LOOK  CLICK FIRE  SPACE JUMP  E USE  TAB MAP  ESC PAUSE",pt/2,140,{color:"#8a8478",center:!0})}function J_(i){var e=tt.interStats();Ye.fillStyle="rgba(10,8,6,0.88)",Ye.fillRect(0,0,pt,In),za(In-6,i,1),Ce.default.drawText(Ye,e.name,pt/2,22,{scale:2,color:"#ff9a28",shadow:!0,center:!0}),Ce.default.drawText(Ye,"FINISHED!",pt/2,42,{scale:2,color:"#e8e0c8",shadow:!0,center:!0});var t=rc?1:Math.min(1,i/1.2);function n(s,a){return a?Math.round(s/a*100*t):100}if([["KILLS",e.kills,e.totalKills,70],["ITEMS",e.items,e.totalItems,90],["SECRETS",e.secrets,e.totalSecrets,110]].forEach(function(s){Ce.default.drawText(Ye,s[0],90,s[3],{scale:2,color:"#c8c0b0"});var a=n(s[1],s[2]);Ce.default.drawText(Ye,a+"%",240,s[3],{scale:2,color:a>=100?"#ffd23e":"#e03828",right:!0})}),Ce.default.drawText(Ye,"TIME "+Lr(e.time),90,132,{scale:2,color:e.time<=e.par&&t>=1?"#ffd23e":"#c8c0b0"}),Ce.default.drawText(Ye,"PAR "+Lr(e.par),240,132,{scale:2,color:"#c8c0b0",right:!0}),t>=1&&i%1<.7){var r=tt.levelIndex();Ce.default.drawText(Ye,r+1<_r.length?"CLICK OR PRESS ENTER FOR "+_r[r+1].name:"CLICK OR PRESS ENTER",pt/2,166,{color:"#f0d848",shadow:!0,center:!0})}}function $_(i){Ye.fillStyle="rgba(8,6,4,0.9)",Ye.fillRect(0,0,pt,In),za(In-8,i,0),za(In-4,i*1.3,2),Ce.default.drawText(Ye,"YOU WIN!",pt/2,30,{scale:4,color:"#ffd23e",shadow:"#803008",center:!0}),["THE DEMON THRONE LIES IN ASHES,","AND RILEY TAPS OUT WITH A GRIN:",`"SAME TIME TOMORROW? I'LL BE READY."`,"","THE FIREBIRD CANNOT BE KILLED.","IT ONLY BURNS BRIGHTER.","","THANKS FOR PLAYING, WARRIOR."].forEach(function(e,t){Ce.default.drawText(Ye,e,pt/2,74+t*10,{color:"#e8e0c8",center:!0})}),i>1&&i%1<.7&&Ce.default.drawText(Ye,"CLICK OR PRESS ENTER FOR THE TITLE SCREEN",pt/2,170,{color:"#f0d848",shadow:!0,center:!0})}function j_(i){var e=i.p;i.events.forEach(function(t){if(t.t==="sound"){if(t.local){hn.default.play(t.name);return}var n=t.x-e.x,r=t.z-e.z,s=Math.sqrt(n*n+r*r),a=Math.sin(Math.atan2(r,n)-e.ang)*.7;hn.default.play(t.name,s,a)}})}var Oa=1/60,Fa=0,Md=performance.now(),Sd="",sc=[];tt.startLevel(0,!1);var bd=tt.state();function Nd(i){var e=Math.min(.1,(i-Md)/1e3);Md=i;var t=tt.mode(),n=Bn==="title"?"title":t;n!==Sd&&(ki=0,Sd=n),ki+=e,sc.push(e),sc.length>240&&sc.shift();var r=tt.state();if(Bn==="title"){var s=bd.p,a=i/1e3;s.ang=a*.12,s.pitch=Math.sin(a*.3)*.15,s.x=5.5+Math.sin(a*.07)*.5,s.z=17.5,pr.render(bd,a,e),ht.isOpen()||ht.open(qu()),Ye.clearRect(0,0,pt,In),ht.render(Ye,ki)}else if(t==="game"||t==="inter"||t==="victory"){var l=t==="game"&&(!Ti||!ui||ht.isOpen())&&!ac;if(!l&&t==="game")for(Fa+=e;Fa>=Oa;){if(r.hitstop>0){r.hitstop-=Oa,Fa-=Oa;continue}if(tt.update(Oa),j_(r),Fa-=Oa,tt.mode()!=="game")break}else Fa=0;r=tt.state(),pr.render(r,i/1e3,l?0:e),r.events.length=0,V_.draw(r,{map:bs,menu:ht.isOpen(),camera:pr.camera}),t==="inter"?J_(ki):t==="victory"?$_(ki):Ti?ht.isOpen()?ht.render(Ye,ki):!ui&&!ac&&(Ye.fillStyle="rgba(0,0,0,0.5)",Ye.fillRect(0,70,pt,24),Ce.default.drawText(Ye,"CLICK TO RESUME",pt/2,76,{scale:2,color:"#f0d848",shadow:!0,center:!0})):Z_(ki)}requestAnimationFrame(Nd)}Ed();ht.open(qu());requestAnimationFrame(Nd);ac&&(window.FIREBIRD2=Object.assign({},tt,{launch:function(i){tt.startLevel(i,!1),Ti=!0,Bn="game",ht.close()},toTitle:Wu,setMap:function(i){bs=i},frameStats:function(){var i=sc.slice().sort(function(t,n){return t-n});function e(t){return i.length?i[Math.min(i.length-1,Math.floor(i.length*t))]*1e3:0}return{frames:i.length,p50:e(.5),p95:e(.95),p99:e(.99),info:pr.info().render}},renderInfo:function(){return pr.info()}}));})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
