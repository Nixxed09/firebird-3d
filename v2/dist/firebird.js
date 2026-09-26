(()=>{var Km=Object.create;var Uf=Object.defineProperty;var Zm=Object.getOwnPropertyDescriptor;var Jm=Object.getOwnPropertyNames;var jm=Object.getPrototypeOf,$m=Object.prototype.hasOwnProperty;var Ma=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var Qm=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Jm(e))!$m.call(i,r)&&r!==t&&Uf(i,r,{get:()=>e[r],enumerable:!(n=Zm(e,r))||n.enumerable});return i};var Sa=(i,e,t)=>(t=i!=null?Km(jm(i)):{},Qm(e||!i||!i.__esModule?Uf(t,"default",{value:i,enumerable:!0}):t,i));var Of=Ma((QM,gu)=>{"use strict";var e0=(function(){function i(N){var O=parseInt(N.slice(1),16),F=O>>16&255,z=O>>8&255,j=O&255;return(4278190080|j<<16|z<<8|F)>>>0}function e(N,O,F){var z=document.createElement("canvas");z.width=N,z.height=O;var j=z.getContext("2d"),V=j.createImageData(N,O);return new Uint32Array(V.data.buffer).set(F),j.putImageData(V,0,0),{w:N,h:O,data:F,canvas:z}}function t(N,O,F){F=F||{};for(var z=!!F.mirror,j=N[0].length,V=0;V<N.length;V++)if(N[V].length!==j)throw new Error("sprite row "+V+" length "+N[V].length+" != "+j);for(var K=z?j*2:j,ce=N.length,xe=new Uint32Array(K*ce),de=0;de<ce;de++)for(var ye=N[de],be=0;be<j;be++){var De=O[ye[be]];if(De){var We=i(De);xe[de*K+be]=We,z&&(xe[de*K+(K-1-be)]=We)}}return e(K,ce,xe)}function n(N,O,F){var z=(N|0)*374761393+(O|0)*668265263+(F|0)*974711;return z=(z^z>>13)*1274126177,((z^z>>16)>>>0)%1e3/1e3}function r(N,O,F){var z=parseInt(N.slice(1),16),j=parseInt(O.slice(1),16),V=(z>>16&255)+((j>>16&255)-(z>>16&255))*F,K=(z>>8&255)+((j>>8&255)-(z>>8&255))*F,ce=(z&255)+((j&255)-(z&255))*F;return(4278190080|(ce&255)<<16|(K&255)<<8|V&255)>>>0}var s=64;function a(N){for(var O=new Uint32Array(s*s),F=0;F<s;F++)for(var z=0;z<s;z++)O[F*s+z]=N(z,F);return e(s,s,O)}function o(N,O,F,z){return a(function(j,V){var K=V>>4,ce=K&1?16:0,xe=j+ce>>5,de=(V&15)>=14,ye=(j+ce&31)>=30;if(de||ye)return r(z,"#000000",n(j,V,N)*.4);var be=n(j,V,N)*.5+n(xe*31,K*7,N+9)*.5,De=(V&15)<2||(j+ce&31)<2?.25:0;return r(O,F,be*.65+De)})}function c(N,O,F){return a(function(z,j){var V=z>>4,K=j>>4,ce=n(V,K,N)*6-3,xe=(z+ce)%16<1.5||(j-ce)%16<1.5,de=n(z,j,N+3)*.45+n(V*5,K*3,N+7)*.55;return xe?r(F,"#000000",.5):r(O,F,de*.7)})}function u(N,O,F){return a(function(z,j){var V=z>>4&1,K=(z&15)<1||(j&31)<1,ce=((z&15)===3||(z&15)===12)&&((j&31)===4||(j&31)===27),xe=n(z,j,N)*.3+V*.12+j/s*.15;return K?r(F,"#000000",.6):ce?r(O,"#ffffff",.35):r(O,F,xe)})}function l(N){return a(function(O,F){var z="#4a5a52",j="#232c28";if(F<6||F>57)return r("#2a3430","#000000",.3+n(O,F,N)*.2);if(F>=28&&F<=33&&(O&31)>3&&(O&31)<28){var V=F===30||F===31?"#7dff9a":"#2f8a4a";return r(V,"#000000",n(O,F,N)*.2)}var K=(O&31)<2,ce=F>40&&F<54&&(F&3)<2&&(O&31)>6&&(O&31)<26;return K?r(j,"#000000",.5):ce?r("#1a211e","#000000",.3):r(z,j,n(O,F,N)*.5)})}function h(N){return a(function(O,F){var z=n(O,F,N)*.4+n(O>>2,F>>2,N+5)*.6,j=Math.sin(O*.22+Math.sin(F*.13+N)*2.1)+Math.sin(F*.18+O*.05);return j>1.45?r("#ff7a18","#ffd23e",n(O,F,N+2)):j>1.2?r("#8a1e08","#ff5a10",.5):r("#4a1410","#1c0605",z)})}function f(N){return a(function(O,F){var z="#5a5f68",j="#2a2d33",V=Math.abs(O-32)<1,K=(F&15)<2,ce=O<3||O>60||F<3||F>60;if(N&&F>8&&F<20&&!V){var xe=N==="red"?"#d02020":"#2050e0";return r(xe,"#000000",(F===9||F===19?.5:0)+n(O,F,40)*.2)}return V?r("#101216","#000000",.3):ce?r(j,"#000000",.4):K?r(j,z,.3):r(z,j,n(O,F,17)*.4+F/s*.2)})}function p(N){return a(function(O,F){var z="#4f4a42",j="#28241e",V=O>16&&O<48,K=F>14&&F<50;if(V&&K){var ce=O>24&&O<40,xe=N?F>32&&F<46:F>18&&F<32;return ce&&xe?r(N?"#30d040":"#d03030","#000000",n(O,F,3)*.25):r("#1c1a16","#000000",.3)}var de=O<2||O>61||F<2||F>61;return de?r(j,"#000000",.5):r(z,j,n(O,F,21)*.5)})}function g(N,O,F){return a(function(z,j){var V=(z>>4)+(j>>4)&1,K=(z&15)<1||(j&15)<1,ce=n(z,j,N)*.4;return K?r(F,"#000000",.55):r(V?O:F,"#000000",ce+V*.05)})}var y={o:"#1c0e06",b:"#9a5226",d:"#6b3413",c:"#e08a28",h:"#f7b24a",e:"#ffe14a",m:"#3a1006",t:"#f0e6c8",x:"#f0e6c8",r:"#c03018",f:"#ff8a18",g:"#ffd23e"},v=["......tt........",".......tt.......","........oooooooo","........obbbbbbb","........obbddddd","........obbeedbb","........obbbbbbb","........obdmtmbb","........obbmmbbb","........oooooobb","....oooooooooooo","...obbbbbbdccccc","..obbbo.obdccchc","..obbo..obdcchhc","..obbo..obddcccc",".obbo...obbdcccc",".obbo...obbddccc",".otto...obbbdddd",".ott....obbbbddd","........obbbbbbd","........oobbbbbb",".........obbo...",".........obbo...",".........obbo...",".........obbo...",".........oddo...",".........oddo...","........obddo...","........odddo...","......ottdddo...","......ooooooo...","................"],m=v.slice(0,21).concat(["........obbo....","........obbo....","........obbo....","........obbo....","........oddo....","........oddo....",".......obddo....",".......odddo....",".....ottdddo....",".....oooooo.....","................"]),x=["..gf..tt........",".gffg..tt.......",".offo...oooooooo",".otto...obbbbbbb",".obbo...obbddddd",".obbo...obeeedbb",".obbo...obbbbbbb",".obbo...obmmttbb","..obbo..obbmmbbb","..obbo..oooooobb","..obooooooooooo.","...obbbbbdccccc.","....obbobdccchc.","........obdcchhc","........obddcccc","........obbdcccc","........obbddccc","........obbbdddd","........obbbbddd","........obbbbbbd","........oobbbbbb",".........obbo...",".........obbo...",".........obbo...",".........obbo...",".........oddo...",".........oddo...","........obddo...","........odddo...","......ottdddo...","......ooooooo...","................"],R=v.slice();R[5]="........obbxxdbb",R[7]="........obmmmmbb";var b=["................","................","................","................","................","................","......tt........",".......tt.......","........oooooooo","........obbbbbbb","........obxxdddb","........obmmmmbb",".....oooooooobbb","...obbbbbbdccccb","..obbbboobdcccbb",".obbbo..obddccbb",".otto...obbddddb","........obbbbbdd",".......oobbbbbbb","......obbbbbbbdd","................","................","................","................","................","................","................","................","................","................","................","................"],I=["................","................","................","................","................","................","................","................","................","................","................","................","................","......tt........",".......ttoooooo.","......obbbbbbbbo",".....obbxxddmmbo","....obbbbdddbbbo","...obbddccccbbdd","..obbbbbdddbbbbb","................","................","................","................","................","................","................","................","................","................","................","................"],L=["................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","..........tt....","....oo....ott...","...obbdoooobbdo.","..obbddbbbdddbbo",".orrbdddddbbdrro",".orrrbbdddbrrro.","..orrrrrrrrrro..","...ooooooooooo..","................","................"];function D(N){var O={o:"#200a10",p:"#d06a8a",q:"#9a3d5e",k:"#e898a8",t:"#f2ead0",m:"#41101c",e:"#ffd23e",x:"#f2ead0",r:"#b02030"};if(N)for(var F in N)O[F]=N[F];return O}var S=["................","................","......oooooooooo",".....opppppppppp","....oppkpppppppp","....opppeepppppp","....oppppppppppp","....opmmmmmmmmmm","....opmtmtmtmtmt","....opmmmmmmmmmm","....optmtmtmtmtm","....opqqqqqqqqqq",".....ooooooooooo","...oppppqqpppppp","..opppppoqpppppp","..opppo.oqpppppp","..oppo..oqqppppp","..otto..oqqqpppp","..ott...oqqqqppp","........oqqqqqpp","........ooqqqqqp",".........oqqqo..",".........oqqqo..",".........oqqo...","........oqqqo...","........ottto...","........ooooo...","................","................","................","................","................"],_=S.slice(0,21).concat(["........oqqqo...","........oqqqo...","........oqqo....",".......oqqqo....",".......ottto....",".......ooooo....","................","................","................","................"]),E=["................","......oooooooooo",".....opppppppppp","....oppkpppppppp","....opppeepppppp","....opmmmmmmmmmm","....opmttmttmttm","....opmmmmmmmmmm","....opmmmmmmmmmm","....opmmmmmmmmmm","....opmttmttmttm","....opmmmmmmmmmm","....opqqqqqqqqqq","...oppppqqpppppp","..opppppoqpppppp","..opppo.oqpppppp","..oppo..oqqppppp","..otto..oqqqpppp","..ott...oqqqqppp","........oqqqqqpp","........ooqqqqqp",".........oqqqo..",".........oqqqo..",".........oqqo...","........oqqqo...","........ottto...","........ooooo...","................","................","................","................","................"],A=S.slice();A[5]="....opppxxpppppp";var M=["................","................","................","................","................","................","................","......oooooooooo",".....opppppppppp","....oppxxppppppp","....opmmmmmmmmmm","....opmtmtmtmtmt","....opqqqqqqqqqq","...opppppqqppppp","..oppppppqqquppp".replace("u","q"),"..oppoooqqqqqppp","..oo...oqqqqqqpp",".......ooqqqqqqp","........oqqqqoo.","................","................","................","................","................","................","................","................","................","................","................","................","................"],P=["................","................","................","................","................","................","................","................","................","................","................","................","................","................","......ooooooooo.",".....oppppppppqo","....opxxpmmttppo","...oppppqqqqppqo","..oqqppppppqqqoo","...ooooooooooo..","................","................","................","................","................","................","................","................","................","................","................","................"],U=["................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................",".......oo.......",".....ooppoo.tt..","...oqpppppqoot..","..oqqpmmttppqqo.",".orrqqppppqqrro.",".orrrqqqqqrrro..","..orrrrrrrrro...","...oooooooooo...","................","................"],k={o:"#06141c",h:"#1e8aa0",H:"#6fe0ec",s:"#d8fff8",v:"#ffd23e",V:"#fff6b0",c:"#157a8a",C:"#3fd8c8",g:"#ffd23e",Y:"#fff6b0"},Y=["..........",".....ooooo","...oohhhhh","..ohhHHhhh","..ohHhhhhh",".ohhhhoooo",".ohhhosvvv",".ohhhosvVV",".ohhhossss",".ohhhossss",".ohhhhosss","..ohhhooss","...ooooooo",".....ooccc","...ooccccg","..occcccCg",".occcCcccg",".occcCccgY",".occcCccgY",".occ.Ccccg",".oso.occcg",".oso.occcc","..o..oCCCC",".....occcc",".....occo.",".....occo.",".....occo.",".....oCco.",".....occo.",".....occo.",".....occo.","....ogggo.","....ooooo.",".........."],J=Y.slice(0,24).concat(["....occo..","....occo..","...occo...","...oCco...","...occo...","..occo....","..occo....",".ogggo....",".ooooo....",".........."]),ne=Y.slice();ne[13]=".o...ooccc",ne[14]=".so.occccg",ne[15]=".so.occcCg",ne[16]=".oc.occccg",ne[19]="..o..Ccccg",ne[20]=".....occcg",ne[21]=".....occcc";function ie(N,O,F){return N.map(function(z,j){for(var V="",K=0;K<z.length;K++)V+=z[K]!=="."&&n(K,j,F)<O?z[K]:".";return V})}function se(N){var O={};for(var F in k)O[F]=k[F];if(N)for(var z in N)O[z]=N[z];return O}function re(N){var O={o:"#1a1008",f:"#e85818",F:"#ffa018",s:"#d8a06a",S:"#a8744a",w:"#f0ead8",k:"#28221a",m:"#5a1408",t:"#e8e0c8",r:"#c01818",c:"#b84a10",C:"#7e2e08",g:"#888078",x:"#301010"},F=N.gray?{s:"#9a9488",S:"#6e6a60"}:{};for(var z in F)O[z]=F[z];var j=[".osskwwkssss",".osskwkksss.".replace(".$",""),".ossskksssss"],V=[".osssookssss",".osskwkksss.",".ossskksssss"],K=[".osssssossss",".ossooosssss",".osssssossss"],ce=[".osskoskssss",".osssksossss",".osskoskssss"],xe=["..osssssssss","..osssmmmmmm","..osssssssss"],de=["..osssssssss","..ossmmmmmmm","..osSmmsssss"],ye=["..osssmmmmmm","..ossmtttttt","..osssmmmmmm"],be=["..ossmmmmmss","..osmmttmmss","..ossmmmmmss"],De=N.eyes==="squint"?V:N.eyes==="shut"?K:N.eyes==="x"?ce:j,We=N.mouth==="grim"?de:N.mouth==="grin"?ye:N.mouth==="ouch"?be:xe,q=[".....ffF....","...fFffffF..","..ffFfffffF.","..offffffff.",".offFffffffF",".offffffffff",".offosssssss",".oosssssssss","..ossssssSSS","..osssssssss",De[0],De[1],De[2],"..osssssssss","..ossssssSss","..osssssSSss","..ossssssSss","..osssssssss",We[0],We[1],We[2],"..osssssssss","...ossssssSS","...ossssssss","....oossssss","..ooccoosSSS".replace("..",".o"),".occcccooooo","occCcccccccc"];return q=q.map(function(Se){for(Se=Se.replace(/\$/g,""),Se.length>12&&(Se=Se.slice(0,12));Se.length<12;)Se+=".";return Se}),N.blood>=1&&(q[8]="..osrrsssSSS".slice(0,12),q[9]="..ossrssssss"),N.blood>=2&&(q[14]="..osrssssrss",q[15]="..orrssSSrss",q[21]="..osrsssssrs"),N.blood>=3&&(q[6]=".offosrrssss",q[13]="..orrsssrrss",q[22]="...orrsssrSS".slice(0,12)),t(q,O,{mirror:!0})}var Re={o:"#0e0c0a",g:"#4a4e56",G:"#6a707c",d:"#26282e",s:"#d8a06a",S:"#a8744a",w:"#7a4a28",W:"#5a3418",y:"#c8b040",k:"#16181c"},Ne=["............","....oooo....","..oossssoo..",".ossssssss o".replace(" ","s"),".osssSsssss.","ossssSSssss.","osssssSssss.","ossssssssss.","osSSsssssss.","ossssssssss.",".ossssssss..",".ossssssss..","..ossssss...","..oswwwws...","..owwWWww...","..owWWWWw...","..owwwwww...","...oooooo..."].map(function(N){for(;N.length<12;)N+=".";return N.slice(0,12)}),Qe=["...........ooo","..........ookk","..........ogkk","..........ogGd","..........ogGd",".........ooGgd",".........ogGGd",".........ogGGd",".........ogGGd",".........odddd",".........ogGGd",".........ogGGd",".........odddd","..........oggd","..........oggd","..........ogdd",".......ooooddd",".....oossssodd","....ossssssodd","...ossssSssood","..osssssSSssod","..ossssssSssod","..osSSssssssod","..ossssssssood","...osssssssso.","...osssssssso.","....oossssoo..","......oooo...."],me=[".........ooo","........ookk","........odkk","........odgd","........odgd","........odgd","........odgd","........odgd","........odgd","........odgd","........oddd",".......ooddd","......oWwwdd","......oWwwwd","......oWWwwd","......oWWwwd","......ooWWwd",".......ooWWd","........oddd","........oggd",".....oooogdd","...oosssoggd","..ossssssogd","..ossSsssogd",".osssSSssood",".ossssssssod",".osSSsssssod",".ossssssssod","..ossssssso.","..ossssssso.","...oosssoo..",".....oooo..."];function oe(N,O,F){for(var z=new Uint32Array(N*O),j=(N-1)/2,V=(O-1)/2,K=0;K<O;K++)for(var ce=0;ce<N;ce++){var xe=(ce-j)/(N/2),de=(K-V)/(O/2),ye=Math.sqrt(xe*xe+de*de),be=F(ye,ce,K);be&&(z[K*N+ce]=be)}return e(N,O,z)}function G(N){return oe(12,12,function(O,F,z){var j=n(F,z,N)*.3;return O+j<.38?i("#fff8d0"):O+j<.68?i("#ffd23e"):O+j<.95?i("#ff7a18"):0})}function Z(N){return oe(14,14,function(O,F,z){var j=n(F,z,N)*.3;return O+j<.38?i("#eaffd0"):O+j<.68?i("#8aff3e"):O+j<.95?i("#2fa818"):0})}function fe(N,O,F){return oe(N,N,function(z,j,V){var K=n(j,V,O)*.55;return z+K<.3*F?i("#fff8d0"):z+K<.55*F?i("#ffd23e"):z+K<.8*F?i("#ff7a18"):z+K<1*F?i("#a83010"):0})}function ve(N,O){return oe(O?8:6,O?8:6,function(F,z,j){var V=n(z,j,N)*.4;return F+V<.5?i("#c8c4bc"):F+V<.9?i("#78746c"):0})}function Me(N,O){return oe(O?8:6,O?8:6,function(F,z,j){var V=n(z,j,N)*.45;return F+V<.45?i("#e04020"):F+V<.9?i("#901810"):0})}function Oe(){for(var N=16,O=22,F=new Uint32Array(N*O),z=0;z<O;z++)for(var j=0;j<N;j++){var V=Math.abs((j-7.5)/7.5);if(!(V>1)){var K=V>.88||z===0||z===O-1,ce=1-V*V*.75,xe=z===4||z===16,de=z>=8&&z<=12,ye=de?"#c05010":"#5c554c";z>=1&&z<=2&&(ye="#3a352e");var be=r(ye,"#000000",1-ce+(xe?.35:0)+n(j,z,77)*.2);K&&(be=i("#16130f")),z===1&&V<.6&&n(j,z,8)>.4&&(be=i("#ff9a28")),F[z*N+j]=be}}return e(N,O,F)}function et(N){for(var O=10,F=28,z=new Uint32Array(O*F),j=12;j<28;j++)for(var V=4;V<=5;V++)z[j*O+V]=i(j>24?"#3a2812":"#6a4a22");z[12*O+3]=i("#8a6432"),z[12*O+6]=i("#8a6432");for(var K=0;K<12;K++)for(var ce=0;ce<O;ce++){var xe=(ce-4.5)/4.2,de=(K-8)/8,ye=Math.sqrt(xe*xe*1.6+de*de),be=n(ce,K,N)*.5;ye+be<.45?z[K*O+ce]=i("#fff0b0"):ye+be<.75?z[K*O+ce]=i("#ffd23e"):ye+be<1&&(z[K*O+ce]=i("#ff7a18"))}return e(O,F,z)}function Fe(N,O,F,z,j){for(var V=new Uint32Array(N*O),K=0;K<O;K++)for(var ce=0;ce<N;ce++){var xe=ce===0||K===0||ce===N-1||K===O-1,de=xe?i("#14120e"):r(F,z,K/O*.6+n(ce,K,5)*.15);V[K*N+ce]=de}return j&&j(V,N,O),e(N,O,V)}function nt(N){return function(O,F,z){for(var j=F>>1,V=z>>1,K=i(N),ce=-(z>>2);ce<=z>>2;ce++)O[(V+ce)*F+j]=K,O[(V+ce)*F+j-1]=K;for(var xe=-(F>>2);xe<=F>>2;xe++)O[V*F+j+xe]=K,O[(V-1)*F+j+xe]=K}}function ft(N){var O=["oooooooo","occccccb".replace("b","o"),"occwwcco","occwwcco","occcccco","occcccco","ocwwwwco","occcccco","occcccco","oooooooo"];return t(O,{o:"#14120e",c:N,w:"#f0ead8"})}function it(){var N=30,O=10,F=new Uint32Array(N*O);function z(ce,xe,de){ce>=0&&ce<N&&xe>=0&&xe<O&&(F[xe*N+ce]=i(de))}for(var j=2;j<22;j++)z(j,3,"#3a3e46"),z(j,4,"#5a5f68"),z(j,5,"#26282e");for(var V=8;V<15;V++)z(V,6,"#5a3418");for(var K=21;K<29;K++)z(K,4+(K-21>>1),"#5a3418"),z(K,5+(K-21>>1),"#7a4a28");return z(1,3,"#16130f"),z(1,4,"#16130f"),e(N,O,F)}function Mt(){return oe(14,14,function(N,O,F){return N<.3?i("#fff8d0"):N<.6?i("#ffd23e"):N<.85?i("#ff7a18"):N<1?i("#a03008"):0})}function Rt(){return oe(20,20,function(N,O,F){var z=Math.atan2(F-9.5,O-9.5),j=.55+.45*Math.abs(Math.sin(z*4));return N<.35*j?i("#fff8d0"):N<.7*j?i("#ffd23e"):N<1*j?i("#ff7a18"):0})}var jt={A:[2,5,7,5,5],B:[6,5,6,5,6],C:[3,4,4,4,3],D:[6,5,5,5,6],E:[7,4,6,4,7],F:[7,4,6,4,4],G:[3,4,5,5,3],H:[5,5,7,5,5],I:[7,2,2,2,7],J:[1,1,1,5,2],K:[5,6,4,6,5],L:[4,4,4,4,7],M:[5,7,5,5,5],N:[6,5,5,5,5],O:[2,5,5,5,2],P:[6,5,6,4,4],Q:[2,5,5,6,3],R:[6,5,6,6,5],S:[3,4,2,1,6],T:[7,2,2,2,2],U:[5,5,5,5,7],V:[5,5,5,5,2],W:[5,5,5,7,5],X:[5,5,2,5,5],Y:[5,5,2,2,2],Z:[7,1,2,4,7],0:[7,5,5,5,7],1:[2,6,2,2,7],2:[6,1,2,4,7],3:[6,1,2,1,6],4:[5,5,7,1,1],5:[7,4,6,1,6],6:[3,4,6,5,2],7:[7,1,2,2,2],8:[7,5,7,5,7],9:[2,5,3,1,6]," ":[0,0,0,0,0],".":[0,0,0,0,2],",":[0,0,0,2,4],"!":[2,2,2,0,2],"?":[6,1,2,0,2],":":[0,2,0,2,0],"-":[0,0,7,0,0],"+":[0,2,7,2,0],"%":[5,1,2,4,5],"/":[1,1,2,4,4],"'":[2,2,0,0,0],_:[0,0,0,0,7],">":[4,2,1,2,4],"<":[1,2,4,2,1],'"':[5,5,0,0,0],"=":[0,7,0,7,0],"(":[1,2,2,2,1],")":[4,2,2,2,4],"*":[0,5,2,5,0],"#":[5,7,5,7,5],"^":[2,5,0,0,0],"&":[2,5,2,5,3]};function yt(N,O,F,z,j){j=j||{};var V=j.scale||1,K=j.color||"#e8e0c8",ce=j.shadow;if(O=String(O).toUpperCase(),j.center&&(F-=Math.floor(kt(O,V)/2)),j.right&&(F-=kt(O,V)),ce){var xe=typeof ce=="string"?ce:"#000000";yt(N,O,F+V,z+V,{scale:V,color:xe})}N.fillStyle=K;for(var de=0;de<O.length;de++){for(var ye=jt[O[de]]||jt["?"],be=0;be<5;be++)for(var De=ye[be],We=0;We<3;We++)De&4>>We&&N.fillRect(F+We*V,z+be*V,V,V);F+=4*V}}function kt(N,O){return String(N).length*4*(O||1)-(O||1)}var X={};X.tex={1:o(1,"#8a4232","#4a1e14","#2a1812"),2:c(2,"#8a8578","#4a463c"),3:u(3,"#5a5f68","#26282e"),4:l(4),5:h(5),6:f(null),7:f("red"),8:f("blue"),9:p(!1),10:p(!0),11:o(1,"#8a4232","#4a1e14","#2a1812")},X.floors={slab:g(11,"#4e4a42","#38342c"),tech:g(12,"#3c4440","#2a302c"),hell:a(function(N,O){var F=n(N,O,13)*.5+n(N>>2,O>>2,14)*.5,z=Math.sin(N*.19+Math.sin(O*.11)*2)+Math.sin(O*.15);return z>1.5?r("#ff7a18","#ffd23e",F):r("#3a100c","#180404",F)}),ceilDark:g(15,"#2e2b26","#201d18"),ceilTech:a(function(N,O){var F=(N&31)>12&&(N&31)<20&&(O&31)>12&&(O&31)<20;return F?r("#fff0c0","#c0a860",n(N,O,16)*.3):r("#2a2e2c","#1a1d1b",n(N,O,16)*.5)}),ceilHell:a(function(N,O){return r("#241010","#100404",n(N,O,17)*.6)})};var Dt=y,dt=D(null),H=D({p:"#c8502a",q:"#7e2412",k:"#e8804a",e:"#a0fFff".toLowerCase()});X.mobs={imp:{walkA:t(v,Dt,{mirror:!0}),walkB:t(m,Dt,{mirror:!0}),attack:t(x,Dt,{mirror:!0}),pain:t(R,Dt,{mirror:!0}),die1:t(b,Dt,{mirror:!0}),die2:t(I,Dt,{mirror:!0}),corpse:t(L,Dt,{mirror:!0})},gnasher:{walkA:t(S,dt,{mirror:!0}),walkB:t(_,dt,{mirror:!0}),attack:t(E,dt,{mirror:!0}),pain:t(A,dt,{mirror:!0}),die1:t(M,dt,{mirror:!0}),die2:t(P,dt,{mirror:!0}),corpse:t(U,dt,{mirror:!0})},knight:{walkA:t(S,H,{mirror:!0}),walkB:t(_,H,{mirror:!0}),attack:t(E,H,{mirror:!0}),pain:t(A,H,{mirror:!0}),die1:t(M,H,{mirror:!0}),die2:t(P,H,{mirror:!0}),corpse:t(U,H,{mirror:!0})},riley:{walkA:t(Y,k,{mirror:!0}),walkB:t(J,k,{mirror:!0}),attack:t(ne,se({v:"#ffffff",V:"#ffffff",Y:"#ffffff",g:"#fff6b0"}),{mirror:!0}),pain:t(Y,se({c:"#e8fffc",C:"#ffffff",h:"#9ef0f8"}),{mirror:!0}),shield:t(Y,se({c:"#c89018",C:"#ffd23e",h:"#e0a020",H:"#fff0a0"}),{mirror:!0}),die1:t(ie(Y,.6,71),se({c:"#6fe0ec"}),{mirror:!0}),die2:t(ie(Y,.22,72),se({c:"#d8fff8",h:"#d8fff8"}),{mirror:!0}),corpse:null}},X.things={barrel:Oe(),torchA:et(31),torchB:et(87),stim:Fe(10,8,"#e8e4dc","#a8a49c",nt("#d02020")),medkit:Fe(16,12,"#e8e4dc","#a8a49c",nt("#d02020")),clip:Fe(10,8,"#7a7468","#4a463c",function(N,O,F){for(var z=2;z<O-2;z+=2)N[2*O+z]=i("#c8a030")}),shells:Fe(14,9,"#b03020","#5e1810",function(N,O,F){for(var z=2;z<O-2;z+=2)N[3*O+z]=i("#c8a030"),N[4*O+z]=i("#c8a030")}),armor:t(["...oooo.","..oggggo",".ogggggg",".oggGGgg",".ogggggg",".ogggggg","..ogggg o".replace(" ",""),"..oggggg","...ooooo"].map(function(N){for(;N.length<8;)N+=".";return N.slice(0,8)}),{o:"#14120e",g:"#3a7a30",G:"#6ab858"},{mirror:!0}),keyRed:ft("#d02020"),keyBlue:ft("#2050e0"),shotgunPickup:it(),orb:Mt(),fireballA:G(41),fireballB:G(42),greenballA:Z(43),greenballB:Z(44),boom1:fe(24,51,.7),boom2:fe(28,52,1),boom3:fe(28,53,1.25),puffA:ve(61,!0),puffB:ve(62,!1),bloodA:Me(63,!0),bloodB:Me(64,!1)},X.faces={ok:re({eyes:"open",mouth:"calm",blood:0}),hurt1:re({eyes:"open",mouth:"grim",blood:1}),hurt2:re({eyes:"squint",mouth:"grim",blood:2}),hurt3:re({eyes:"squint",mouth:"ouch",blood:3}),pain:re({eyes:"shut",mouth:"ouch",blood:1}),grin:re({eyes:"open",mouth:"grin",blood:0}),dead:re({eyes:"x",mouth:"ouch",blood:3,gray:!0})},X.guns={fist:t(Ne,Re,{mirror:!0}),pistol:t(Qe,Re,{mirror:!0}),shotgun:t(me,Re,{mirror:!0}),flash:Rt()};var T={};return X.secretTex=function(N){if(T[N])return T[N];for(var O=X.tex[N]||X.tex[1],F=new Uint32Array(O.data),z=0,j=0;j<F.length;j++){var V=F[j];z+=(V>>16&255)+(V>>8&255)+(V&255)}var K=z/F.length/3>70;function ce(be){var De=F[be],We=De>>16&255,q=De>>8&255,Se=De&255;K?(We*=.35,q*=.35,Se*=.35):(We=We*.5+110,q=q*.5+95,Se=Se*.5+80),F[be]=(4278190080|(We&255)<<16|(q&255)<<8|Se&255)>>>0}for(var xe=22,de=6;de<58;de++)xe+=de%7===0?1:de%11===0?-1:0,ce(de*64+xe),ce(de*64+xe+1);for(var ye=0;ye<7;ye++)ce((30+ye)*64+xe+2+ye);return T[N]={w:64,h:64,data:F},T[N]},X.drawText=yt,X.textWidth=kt,X.hex=i,X})();typeof gu!="undefined"&&(gu.exports=e0)});var Ff=Ma((eS,vu)=>{"use strict";var t0=(function(){var i=null,e=null,t=null,n=null,r=!0,s=!1,a=.5;try{r=localStorage.getItem("firebird.music")!=="off"}catch{}function o(){if(i)return i.state==="suspended"&&i.resume(),!0;try{var M=window.AudioContext||window.webkitAudioContext;return M?(i=new M,e=i.createGain(),e.gain.value=a,e.connect(i.destination),t=i.createGain(),t.gain.value=.9,t.connect(e),n=i.createGain(),n.gain.value=.3,n.connect(e),!0):!1}catch{return!1}}function c(M){if(i){var P=i.currentTime+(M.delay||0),U=i.createOscillator();U.type=M.type||"square",U.frequency.setValueAtTime(M.f0,P),M.f1&&U.frequency.exponentialRampToValueAtTime(Math.max(20,M.f1),P+M.dur);var k=i.createGain(),Y=M.gain||.3;k.gain.setValueAtTime(1e-4,P),k.gain.exponentialRampToValueAtTime(Y,P+(M.attack||.008)),k.gain.exponentialRampToValueAtTime(1e-4,P+M.dur);var J=t;if(M.pan&&i.createStereoPanner){var ne=i.createStereoPanner();ne.pan.value=Math.max(-1,Math.min(1,M.pan)),k.connect(ne),ne.connect(M.bus||t),J=null}else k.connect(M.bus||t);if(M.wobble){var ie=i.createOscillator(),se=i.createGain();ie.frequency.value=M.wobble,se.gain.value=M.f0*.25,ie.connect(se),se.connect(U.frequency),ie.start(P),ie.stop(P+M.dur)}U.connect(k),U.start(P),U.stop(P+M.dur+.02)}}var u=null;function l(){if(u)return u;var M=i.sampleRate*1.5;u=i.createBuffer(1,M,i.sampleRate);for(var P=u.getChannelData(0),U=0;U<M;U++)P[U]=Math.random()*2-1;return u}function h(M){if(i){var P=i.currentTime+(M.delay||0),U=i.createBufferSource();U.buffer=l(),U.loop=!0;var k=i.createBiquadFilter();k.type=M.type||"lowpass",k.frequency.setValueAtTime(M.f0||1e3,P),M.f1&&k.frequency.exponentialRampToValueAtTime(Math.max(30,M.f1),P+M.dur),k.Q.value=M.q||.8;var Y=i.createGain(),J=M.gain||.3;if(Y.gain.setValueAtTime(1e-4,P),Y.gain.exponentialRampToValueAtTime(J,P+(M.attack||.006)),Y.gain.exponentialRampToValueAtTime(1e-4,P+M.dur),U.connect(k),k.connect(Y),M.pan&&i.createStereoPanner){var ne=i.createStereoPanner();ne.pan.value=Math.max(-1,Math.min(1,M.pan)),Y.connect(ne),ne.connect(t)}else Y.connect(t);U.start(P),U.stop(P+M.dur+.02)}}var f={pistol:function(M,P){h({dur:.14,gain:.5*M,f0:2400,f1:300,pan:P}),c({f0:220,f1:90,dur:.08,type:"square",gain:.2*M,pan:P})},shotgun:function(M,P){h({dur:.38,gain:.8*M,f0:1600,f1:120,pan:P}),c({f0:130,f1:45,dur:.3,type:"sawtooth",gain:.35*M,pan:P})},pump:function(M,P){h({dur:.05,gain:.3*M,f0:900,type:"bandpass",q:2,delay:0,pan:P}),h({dur:.05,gain:.3*M,f0:700,type:"bandpass",q:2,delay:.13,pan:P})},punch:function(M,P){h({dur:.1,gain:.25*M,f0:500,f1:150,pan:P}),c({f0:90,f1:50,dur:.1,type:"sine",gain:.4*M,pan:P})},whiff:function(M,P){h({dur:.12,gain:.15*M,f0:600,f1:1400,type:"bandpass",q:1.5,pan:P})},doorOpen:function(M,P){h({dur:.5,gain:.22*M,f0:200,f1:500,pan:P}),c({f0:70,f1:130,dur:.5,type:"sawtooth",gain:.12*M,pan:P})},doorClose:function(M,P){h({dur:.4,gain:.2*M,f0:400,f1:150,pan:P}),c({f0:120,f1:60,dur:.4,type:"sawtooth",gain:.12*M,pan:P}),c({f0:60,dur:.08,type:"sine",gain:.3*M,delay:.38,pan:P})},locked:function(M,P){c({f0:150,dur:.09,type:"square",gain:.25*M,pan:P}),c({f0:110,dur:.12,type:"square",gain:.25*M,delay:.11,pan:P})},switchFlip:function(M,P){h({dur:.06,gain:.3*M,f0:1200,type:"bandpass",q:2,pan:P}),c({f0:90,f1:55,dur:.18,type:"square",gain:.3*M,delay:.05,pan:P})},pickup:function(M,P){c({f0:660,dur:.06,type:"square",gain:.15*M,pan:P}),c({f0:880,dur:.08,type:"square",gain:.15*M,delay:.06,pan:P})},health:function(M,P){c({f0:440,dur:.08,type:"sine",gain:.25*M,pan:P}),c({f0:587,dur:.12,type:"sine",gain:.25*M,delay:.07,pan:P})},keyPickup:function(M,P){[523,659,784,1047].forEach(function(U,k){c({f0:U,dur:.09,type:"square",gain:.16,delay:k*.07,pan:P})})},weaponUp:function(M,P){[180,260,380,520].forEach(function(U,k){c({f0:U,dur:.08,type:"sawtooth",gain:.18,delay:k*.05,pan:P})})},secret:function(M,P){[880,1108,1318,1760].forEach(function(U,k){c({f0:U,dur:.14,type:"triangle",gain:.2,delay:k*.09,pan:P})})},orb:function(M,P){[220,330,440,660,880].forEach(function(U,k){c({f0:U,dur:.2,type:"triangle",gain:.2,delay:k*.08,pan:P})})},impSight:function(M,P){c({f0:110,f1:55,dur:.5,type:"sawtooth",gain:.3*M,wobble:9,pan:P})},knightSight:function(M,P){c({f0:75,f1:35,dur:.9,type:"sawtooth",gain:.4*M,wobble:6,pan:P})},rileySight:function(M,P){[523,659,784,1047].forEach(function(U,k){c({f0:U,dur:.12,type:"triangle",gain:.22*M,delay:k*.07,pan:P})})},rileyTalk:function(M,P){c({f0:880,f1:1320,dur:.06,type:"square",gain:.08}),c({f0:1320,dur:.05,type:"square",gain:.07,delay:.07})},rileyShoot:function(M,P){c({f0:1400,f1:500,dur:.18,type:"triangle",gain:.25*M,pan:P})},rileyShield:function(M,P){c({f0:300,f1:900,dur:.3,type:"sine",gain:.3*M,wobble:18,pan:P})},rileyDerez:function(M,P){[1568,1319,1047,784,659,523,392].forEach(function(U,k){c({f0:U,dur:.14,type:"triangle",gain:.2,delay:k*.09,pan:P})})},impShoot:function(M,P){h({dur:.22,gain:.25*M,f0:400,f1:1200,type:"bandpass",q:1.5,pan:P})},fireExplode:function(M,P){h({dur:.3,gain:.4*M,f0:900,f1:100,pan:P})},barrelBoom:function(M,P){h({dur:.7,gain:.9*M,f0:1400,f1:60,pan:P}),c({f0:65,f1:28,dur:.6,type:"sine",gain:.6*M,pan:P})},enemyPain:function(M,P){c({f0:200,f1:120,dur:.13,type:"square",gain:.22*M,pan:P})},enemyDie:function(M,P){c({f0:170,f1:40,dur:.5,type:"sawtooth",gain:.3*M,wobble:12,pan:P}),h({dur:.25,gain:.2*M,f0:700,f1:150,delay:.05,pan:P})},playerPain:function(M,P){c({f0:170,f1:90,dur:.16,type:"square",gain:.3,pan:P}),h({dur:.1,gain:.15,f0:500,f1:200,pan:P})},playerDie:function(M,P){c({f0:220,f1:28,dur:1.3,type:"sawtooth",gain:.4,wobble:5,pan:P})},noAmmo:function(M,P){h({dur:.03,gain:.2,f0:1800,type:"bandpass",q:3,pan:P})},tally:function(M,P){c({f0:990,dur:.03,type:"square",gain:.12,pan:P})},menu:function(M,P){c({f0:520,dur:.05,type:"square",gain:.15,pan:P})},menuPick:function(M,P){c({f0:520,dur:.06,type:"square",gain:.18}),c({f0:780,dur:.09,type:"square",gain:.18,delay:.06})}};function p(M,P,U){if(!(!i||i.state==="suspended")){var k=f[M];if(k){var Y=1/(1+(P||0)*.13);if(!(Y<.04))try{k(Y,U||0)}catch{}}}}var g=168,y=60/g/4,v=[164.81,164.81,146.83,130.81,123.47,130.81,146.83,155.56],m=null,x=0,R=0;function b(M,P,U){var k=i.createOscillator(),Y=i.createOscillator();k.type="sawtooth",Y.type="square",k.frequency.value=P,Y.frequency.value=P*.5;var J=i.createBiquadFilter();J.type="lowpass",J.frequency.setValueAtTime(U?1400:800,M),J.frequency.exponentialRampToValueAtTime(200,M+y*1.8);var ne=i.createGain();ne.gain.setValueAtTime(1e-4,M),ne.gain.exponentialRampToValueAtTime(U?.5:.34,M+.005),ne.gain.exponentialRampToValueAtTime(1e-4,M+y*(U?1.9:.9)),k.connect(J),Y.connect(J),J.connect(ne),ne.connect(n),k.start(M),k.stop(M+y*2),Y.start(M),Y.stop(M+y*2)}function I(M,P){if(P==="kick"){var U=i.createOscillator();U.type="sine",U.frequency.setValueAtTime(110,M),U.frequency.exponentialRampToValueAtTime(40,M+.1);var k=i.createGain();k.gain.setValueAtTime(.5,M),k.gain.exponentialRampToValueAtTime(.001,M+.12),U.connect(k),k.connect(n),U.start(M),U.stop(M+.13)}else{var Y=i.createBufferSource();Y.buffer=l(),Y.loop=!0;var J=i.createBiquadFilter();J.type="highpass",J.frequency.value=P==="snare"?1800:6e3;var ne=i.createGain();ne.gain.setValueAtTime(P==="snare"?.3:.12,M),ne.gain.exponentialRampToValueAtTime(.001,M+(P==="snare"?.09:.03)),Y.connect(J),J.connect(ne),ne.connect(n),Y.start(M),Y.stop(M+.1)}}function L(){if(!(!s||!i)){for(;x<i.currentTime+.15;){var M=R%16,P=Math.floor(R/16),U=M>>2,k=M&3,Y=82.41;k===0||k===2?b(x,Y,!1):k===3&&b(x,v[(P*4+U)%v.length],!0),(M===0||M===8)&&I(x,"kick"),(M===4||M===12)&&I(x,"snare"),(M&1)===0&&I(x,"hat"),x+=y,R++}m=setTimeout(L,40)}}function D(){!i||!r||s||(s=!0,x=i.currentTime+.05,R=0,L())}function S(){s=!1,m&&(clearTimeout(m),m=null)}function _(M){r=!!M;try{localStorage.setItem("firebird.music",r?"on":"off")}catch{}return r?D():S(),r}function E(){return _(!r)}function A(M){a=Math.max(0,Math.min(1,M))*.72,e&&(e.gain.value=a)}return{init:o,play:p,startMusic:D,stopMusic:S,toggleMusic:E,setMusic:_,setVolume:A,isMusicOn:function(){return r}}})();typeof vu!="undefined"&&(vu.exports=t0)});var Hf=Ma((nS,_u)=>{"use strict";var n0=(function(){var i="firebird.settings.v1",e="firebird.progress.v1",t={sens:5,volume:7,crosshair:!0,tips:!0,shake:!0,goalMarker:!0,difficulty:1,seenTips:{}};function n(){try{return window.localStorage}catch{return null}}function r(f){var p=n();if(!p)return null;try{var g=JSON.parse(p.getItem(f));return g&&typeof g=="object"?g:null}catch{return null}}function s(f,p){var g=n();if(g)try{g.setItem(f,JSON.stringify(p))}catch{}}var a={},o=r(i)||{};for(var c in t){var u=c in o&&o[c]!==null&&typeof o[c]==typeof t[c];a[c]=u?o[c]:t[c]}a.sens=Math.max(1,Math.min(10,a.sens|0)),a.volume=Math.max(0,Math.min(10,a.volume|0)),a.difficulty=Math.max(0,Math.min(2,a.difficulty|0));var l=r(e)||{};typeof l.unlocked!="number"&&(l.unlocked=0),(!l.best||typeof l.best!="object")&&(l.best={});var h=["PAR","KILLS","ITEMS","SECRETS"];return{v:a,save:function(){s(i,a)},progress:l,unlock:function(f){f>l.unlocked&&(l.unlocked=f,s(e,l))},record:function(f,p){var g=l.best[f]||{time:null,medals:{}},y=[];p.time<=p.par&&y.push("PAR"),p.kills>=p.totalKills&&y.push("KILLS"),p.items>=p.totalItems&&y.push("ITEMS"),p.secrets>=p.totalSecrets&&y.push("SECRETS");var v=y.filter(function(x){return!g.medals[x]}),m=g.time===null||p.time<g.time;return m&&(g.time=Math.floor(p.time)),y.forEach(function(x){g.medals[x]=!0}),l.best[f]=g,s(e,l),{newBest:m,medals:y,fresh:v}},best:function(f){return l.best[f]||null},MEDALS:h}})(),i0=(function(){var i=[],e=320,t=200;function n(){return i[i.length-1]||null}function r(_){return typeof _=="function"?_():_}function s(_){return r(_.items)||[]}function a(_){return _&&!(_.disabled&&_.disabled())}function o(_,E,A){for(var M=s(_),P=M.length,U=0;U<P;U++){var k=((E+U*A)%P+P)%P;if(a(M[k]))return k}return 0}function c(_){return{screen:_,sel:o(_,_.sel||0,1),hover:-1}}function u(_){i=[c(_)]}function l(_){i.push(c(_)),SND.play("menu")}function h(_){i[i.length-1]=c(_)}function f(){i=[]}function p(){return i.length>0}function g(){if(i.length>1)return i.pop(),SND.play("menu"),!0;var _=n();return _&&_.screen.onBack?(_.screen.onBack(),!0):!1}function y(_){var E=n(),A=s(E.screen).length;A&&(E.sel=o(E.screen,E.sel+_,_),SND.play("menu"))}function v(_,E){a(_)&&(_.adjust?(_.adjust(E||1),SND.play("menu")):_.action&&(SND.play("menuPick"),_.action()))}function m(_){var E=n();if(!E)return!1;var A=s(E.screen),M=A[E.sel];switch(_){case"ArrowUp":case"KeyW":return y(-1),!0;case"ArrowDown":case"KeyS":case"Tab":return y(1),!0;case"ArrowLeft":case"KeyA":return M&&M.adjust&&v(M,-1),!0;case"ArrowRight":case"KeyD":return M&&M.adjust&&v(M,1),!0;case"Enter":case"NumpadEnter":case"Space":return v(M,1),!0;case"Escape":case"Backspace":return g()}return!1}function x(_){var E=_.scale||1;return{s:E,top:_.top||60,gap:_.gap||(E===1?12:14),x0:_.x0||56,x1:_.x1||264,rowH:5*E+5}}function R(_,E,A){for(var M=x(_),P=s(_),U=0;U<P.length;U++){var k=M.top+U*M.gap-3;if(A>=k&&A<k+M.rowH+1&&E>=M.x0-8&&E<=M.x1+8)return U}return-1}function b(_,E){var A=n();if(!A)return!1;var M=R(A.screen,_,E);return A.hover=M,M>=0&&a(s(A.screen)[M])&&M!==A.sel&&(A.sel=M,SND.play("menu")),M>=0&&a(s(A.screen)[M])}function I(_,E){var A=n();if(A){var M=R(A.screen,_,E);if(!(M<0)){var P=s(A.screen)[M];if(a(P)){A.sel=M;var U=x(A.screen),k=P.adjust&&_<U.x1-44&&_>(U.x0+U.x1)/2?-1:1;v(P,k)}}}}function L(_,E){for(var A=String(_).split(" "),M=[],P="",U=0;U<A.length;U++){var k=P?P+" "+A[U]:A[U];k.length>E&&P?(M.push(P),P=A[U]):P=k}return P&&M.push(P),M}function D(_,E,A,M,P){for(var U=M.slider[0],k=M.slider[1],Y=M.slider[2](),J=k-U,ne=4,ie=1,se=J*(ne+ie)-ie,re=E-se,Re=0;Re<J;Re++)_.fillStyle=Re<Y-U?P?"#ffd23e":"#e03828":"#2e2a24",_.fillRect(re+Re*(ne+ie),A,ne,5);ART.drawText(_,String(Y),re-6,A,{color:P?"#ffd23e":"#8a8478",right:!0})}function S(_,E){var A=n();if(A){var M=A.screen,P=x(M),U=s(M);M.drawBg&&M.drawBg(_,E),M.title&&ART.drawText(_,r(M.title),e/2,M.titleY||14,{scale:3,color:"#ff9a28",shadow:"#401008",center:!0}),M.drawExtra&&M.drawExtra(_,E);for(var k=0;k<U.length;k++){var Y=U[k],J=P.top+k*P.gap,ne=k===A.sel,ie=a(Y),se=r(Y.label);ne&&(_.fillStyle="rgba(255,110,24,0.16)",_.fillRect(P.x0-8,J-3,P.x1-P.x0+16,P.rowH),_.fillStyle="#ff7a18",_.fillRect(P.x0-8,J-3,2,P.rowH),E%.8<.55&&ART.drawText(_,">",P.x0-4,J+(P.s-1)*2,{color:"#ffd23e"}));var re=ie?ne?"#ffd23e":"#c8c0b0":"#4a463c",Re=Y.value||Y.slider;if(Re)if(ART.drawText(_,se,P.x0+4,J,{scale:P.s,color:re,shadow:ie}),Y.slider)D(_,P.x1,J+(P.s-1)*2,Y,ne);else{var Ne=r(Y.value);ne&&Y.adjust&&(Ne="< "+Ne+" >"),ART.drawText(_,Ne,P.x1,J,{scale:P.s,color:ne?"#ffd23e":"#e03828",right:!0})}else ART.drawText(_,se,M.alignLeft?P.x0+4:e/2,J,{scale:P.s,color:re,shadow:ie,center:!M.alignLeft})}var Qe=U[A.sel],me=Qe&&a(Qe)?r(Qe.desc):null;if(me)for(var oe=L(me,70),G=M.descY||168,Z=0;Z<oe.length;Z++)ART.drawText(_,oe[Z],e/2,G+Z*8,{color:"#a8a090",center:!0});var fe=M.footer===void 0?"ARROWS OR MOUSE: CHOOSE   ENTER: SELECT   ESC: BACK":r(M.footer);fe&&ART.drawText(_,fe,e/2,M.footerY||180,{color:"#5e584e",center:!0})}}return{open:u,push:l,replace:h,close:f,back:g,isOpen:p,key:m,pointer:b,click:I,render:S,wrap:L,current:function(){var _=n();return _?_.screen:null},selected:function(){var _=n();return _?s(_.screen)[_.sel]:null},depth:function(){return i.length}}})();typeof _u!="undefined"&&(_u.exports={SETTINGS:n0,MENU:i0})});var Bf=Ma((iS,xu)=>{"use strict";var r0=(function(){var i="firebird.riley.v1",e=3;function t(){return{shots:{fist:0,pistol:0,shotgun:0},hits:0,fireDistSum:0,fireDistN:0,strafeL:0,strafeR:0,stillT:0,seenT:0,hideT:0,longestHide:0,said:{}}}function n(E,A){A.los?(E.seenT+=A.dt,E.hideT=0,A.strafe<0?E.strafeL+=A.dt:A.strafe>0&&(E.strafeR+=A.dt),A.moving||(E.stillT+=A.dt)):(E.hideT+=A.dt,E.hideT>E.longestHide&&(E.longestHide=E.hideT))}function r(E,A,M){E.shots[A]=(E.shots[A]||0)+1,E.fireDistSum+=M,E.fireDistN++}function s(E){return E.shots.fist+E.shots.pistol+E.shots.shotgun}function a(E){var A=null,M=0;for(var P in E.shots)E.shots[P]>M&&(M=E.shots[P],A=P);return M>=5?A:null}function o(E){return E.fireDistN?E.fireDistSum/E.fireDistN:0}function c(E){return E.fireDistN<5?0:p((5-o(E))/3)}function u(E){return E.fireDistN<5?0:p((o(E)-6)/4)}function l(E){return E.seenT<4?0:p((E.stillT/E.seenT-.35)/.4)}function h(E){return E.strafeR>=E.strafeL?1:-1}function f(E){var A=E.strafeL+E.strafeR;return A<3?0:p((Math.max(E.strafeL,E.strafeR)/A-.55)/.3)}function p(E){return E<0?0:E>1?1:E}function g(E){var A=[];return E.los?(E.cool.volley<=0&&A.push("volley"),E.cool.lead<=0&&A.push("lead"),E.dist<6&&A.push("backoff"),E.dist>3&&A.push("close"),A.push("flank")):A.push("seek"),E.phase>=2&&E.impsAlive<2&&E.cool.summon<=0&&A.push("summon"),E.phase>=2&&E.los&&E.dist<7&&E.cool.shield<=0&&A.push("shield"),A}function y(E,A,M){var P=0,U=null;switch(E){case"volley":P=1+(M.phase>=3?.4:0);break;case"lead":P=.35+f(A)*1.6,f(A)>.4&&(U="strafe");break;case"backoff":P=.2+c(A)*1.6+(M.playerWeapon==="shotgun"&&M.dist<4?.8:0),c(A)>.4&&(U="rusher");break;case"close":P=.3+u(A)*1.3+l(A)*1.2,l(A)>.4?U="camper":u(A)>.4&&(U="sniper");break;case"flank":P=.45+(M.phase>=2?.35:0)+f(A)*.4;break;case"seek":P=1,A.hideT>3&&(U="hider");break;case"summon":P=.9;break;case"shield":P=M.playerWeapon==="shotgun"?1.4:.25,M.playerWeapon==="shotgun"&&A.shots.shotgun>=6&&(U="shotgun");break}return{move:E,score:P,why:U}}function v(E,A,M,P){if(P=P||Math.random,!E.length)return null;var U=E.map(function(ne){return y(ne,A,M)}),k=0;U.forEach(function(ne){ne.w=ne.score*ne.score,k+=ne.w});for(var Y=P()*k,J=0;J<U.length;J++)if(Y-=U[J].w,Y<=0)return U[J];return U[U.length-1]}var m={fist:"FISTS",pistol:"PISTOL",shotgun:"SHOTGUN"};function x(E,A){if(!A||E.said[A])return null;var M=null;switch(A){case"strafe":M="YOU ALWAYS DODGE "+(h(E)<0?"LEFT":"RIGHT")+". I'M AIMING THERE NOW.";break;case"rusher":M="YOU LIKE IT UP CLOSE. I'LL KEEP MY DISTANCE.";break;case"sniper":M="YOU KEEP YOUR DISTANCE. SO I'M COMING TO YOU.";break;case"camper":M="YOU STAND STILL A LOT. THAT MAKES YOU EASY TO FIND.";break;case"hider":M="HIDING? I CAN FIND YOU. I KNOW THIS ARENA.";break;case"shotgun":M=E.shots.shotgun+" SHOTGUN BLASTS SO FAR. SHIELD UP!";break}return M&&(E.said[A]=!0),M}function R(E,A,M){switch(M=M||{},E){case"intro":return M.memory&&M.memory.lastStyle?"BACK AGAIN! LAST TIME "+M.memory.lastStyle+".":M.memory?"BACK AGAIN! ROUND "+(M.memory.fights+1)+". LET'S GO!":"HI! I'M RILEY. I LEARN HOW YOU PLAY. READY?";case"ease":return"I'M GOING A LITTLE EASIER THIS TIME. JUST A LITTLE.";case"studied":return"YOU BEAT ME "+M.wins+(M.wins===1?" TIME":" TIMES")+". I'VE BEEN PRACTISING.";case"phase2":return"OKAY. I'VE BEEN WATCHING YOU. MY TURN.";case"phase3":return"ALRIGHT, NO MORE HOLDING BACK!";case"summon":return"LITTLE HELP, FRIENDS?";case"friendlyFire":return"HEY! WATCH WHERE YOU THROW THOSE.";case"impsTurned":return"YOU GOT MY IMPS FIGHTING ME? SMART.";case"playerDied":{var P=b(A);return"GOOD FIGHT! YOU HIT ME "+A.hits+(A.hits===1?" TIME":" TIMES")+(P!==null?", "+P+"% ACCURACY":"")+". AGAIN?"}case"defeated":{var U=a(A);return"OKAY, YOU WIN! "+A.hits+" HITS"+(U?" WITH MOSTLY THE "+m[U]:"")+". NICE."}}return null}function b(E){var A=s(E);return A<5?null:Math.min(100,Math.round(E.hits/A*100))}function I(E){var A=a(E);return c(E)>.5&&A?"YOU RUSHED ME WITH THE "+m[A]:u(E)>.5?"YOU FOUGHT ME FROM FAR AWAY":E.longestHide>6?"YOU HID FOR "+Math.round(E.longestHide)+" SECONDS":f(E)>.5?"YOU KEPT DODGING "+(h(E)<0?"LEFT":"RIGHT"):A?"YOU USED THE "+m[A]+" THE MOST":null}function L(E){var A={fights:0,wins:0,lossStreak:0,ease:0,lastStyle:null};try{var M=E&&E.getItem(i);if(M){var P=JSON.parse(M);for(var U in A)P[U]!==void 0&&(A[U]=P[U])}}catch{}return A.ease=Math.max(0,Math.min(e,A.ease|0)),A}function D(E,A){try{E&&E.setItem(i,JSON.stringify(A))}catch{}}function S(E,A,M){return E.fights++,E.lastStyle=I(A),M?(E.wins++,E.lossStreak=0,E.ease=0):(E.lossStreak++,E.ease=Math.min(e,E.lossStreak)),E}function _(E){var A=E.ease,M=E.wins>0&&A===0;return{hpScale:1-.08*A,dmgScale:1-.1*A,coolScale:(1+.12*A)*(M?.9:1),practised:M}}return{MAX_EASE:e,newProfile:t,observe:n,noteShot:r,favWeapon:a,rusher:c,sniper:u,camper:l,strafeSide:h,strafeHabit:f,accuracy:b,legalMoves:g,scoreMove:y,choose:v,insight:x,line:R,describeStyle:I,recall:L,save:D,settle:S,tuning:_}})();typeof xu!="undefined"&&(xu.exports=r0)});var Zf=Ma((oS,Su)=>{"use strict";var Ea=[{name:"E1M1: ASH GATES",floor:"slab",ceil:"ceilDark",par:75,playerAngle:0,map:["#######################X######","####################..t.t....#","####################.........#","####################..i..+...#","####################....A....#","####################.........#","#######################U######","##....................t.t...##","##.t......%%......%%........##","##u...g......i..............##","##.t.......h.....g..........##","##..........................##","####################D#########","###*Pa#########....t.t......##","####S##########.....i.....o.##","##b......######..........io.##","##.......######......h......##","##..p....D........2.........##","##.......######..o..........##","##.......######.t.........t.##","##...h...#####################","##############################"]},{name:"E1M2: THE FURNACE",floor:"tech",ceil:"ceilTech",par:120,playerAngle:-Math.PI/2,map:["###############X################","############..t.t...#...########","############g.......#*PA########","############...+...g#...########","###############R######S#########","########......t.t.......########","########................########","########......b.........########","#......#.i.T........T...#o....o#","#......D................#......#","#..i...#................D..o...#","#......#....g...........#....i.#","#t.t.g.#...T........T...#.o..o.#","#r.a...#...i............#..g...#","########................#.a..h.#","###############..###############","############.b....h.############","############...p....############","############........############","############t......t############","################################"]},{name:"E1M3: DEMON THRONE",floor:"hell",ceil:"ceilHell",par:150,playerAngle:-Math.PI/2,map:["HHHHHHHHHHHHHHHXHHHHHHHHHHHHHHHH","HHHHHHHHHHHHH.t.t..HHHHHHHHHHHHH","HHHHHHHHHHHHH..+...HHHHHHHHHHHHH","HHHHHHHHHHHHHHHRHHHHHHHHHHHHHHHH","HHHHHHt.......t.t........tHHHHHH","HHHHHH.i................i.HHHHHH","HHHHHH..o..............o.tH....H","HH...H....................D..g.H","HH*PAS.........K.........tH.r..H","HH...H....g.........g.....H....H","HHHHHH.a................b.HHHHHH","HHHHHH...i..........i.....HHHHHH","HHHHHHt..................tHHHHHH","HHHHHH...a..h......+..b...HHHHHH","HHHHHH....................HHHHHH","HHHHHHHHHHHHHHHDHHHHHHHHHHHHHHHH","HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH","HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH","HHHHHHHHHHHHHi...iHHHHHHHHHHHHHH","HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH","HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH","HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH","HHHHHHHHHHHt........tHHHHHHHHHHH","HHHHHHHHHHH...b..a...HHHHHHHHHHH","HHHHHHHHHHH....p.....HHHHHHHHHHH","HHHHHHHHHHH..........HHHHHHHHHHH","HHHHHHHHHHHt........tHHHHHHHHHHH","HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH"]},{name:"E1M4: RILEY'S ARENA",floor:"tech",ceil:"ceilTech",par:240,playerAngle:-Math.PI/2,map:["MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMt........................tMMM","MMM..h..........Y.........h..MMM","MMM..........................MMM","MMM....TT..............TT....MMM","MMM....TT....o....o....TT....MMM","MMM..........................MMM","MMM.a......................a.MMM","MMM....TT..............TT....MMM","MMM....TT.......+......TT....MMM","MMM..........................MMM","MMMt.......o........o.......tMMM","MMMMMMMMMMMMMMMUMMMMMMMMMMMMMMMM","TTTTTTTTTTTTTT...TTTTTTTTTTTTTTT","TTTTTTTTTTTTTTt.tTTTTTTTTTTTTTTT","TTi.....o.......o.....iTTTTTTTTT","TT.....................T..g...TT","TT...g.............g..tTt....tTT","TT.......MM...MM.......D....u.TT","TT..b....MM.h.MM....a.tT.a..h.TT","TT.....................Tt....tTT","TT.................o...T..i...TT","TT.....................TTTTTTTTT","TTTTTTTTTTTTTTTDTTTTTTTTTTTTTTTT","TTTTTTTTTTt.........tTTTTTTTTTTT","TTTTTTTTTT..b..2..a..TTTTTTTTTTT","TTTTTTPA*S...........TTTTTTTTTTT","TTTTTTTTTT.....p.....TTTTTTTTTTT","TTTTTTTTTTt...h.....tTTTTTTTTTTT","TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT"]}];(function(){for(var i=0;i<Ea.length;i++){for(var e=Ea[i].map,t=e[0].length,n=0,r=0;r<e.length;r++){if(e[r].length!==t)throw new Error(Ea[i].name+" row "+r+" width "+e[r].length+" != "+t);for(var s=0;s<t;s++)e[r][s]==="p"&&n++}if(n!==1)throw new Error(Ea[i].name+" has "+n+" player starts")}})();typeof Su!="undefined"&&(Su.exports=Ea)});var Le=Sa(Of(),1),Mn=Sa(Ff(),1);window.ART=Le.default;window.SND=Mn.default;var Pf=Sa(Hf(),1);var tn=Sa(Bf(),1);var s0={"#":1,"%":2,M:3,T:4,H:5,D:6,R:7,U:8,X:9,S:11},di={6:!0,7:!0,8:!0,11:!0},kf=.25,a0=2,qn=.3,yu=.55;function zf(i){return i>="0"&&i<="9"?(i.charCodeAt(0)-48)*kf:i>="a"&&i<="z"?(i.charCodeAt(0)-87)*kf:0}function Gf(i){for(var e=i.map,t=e[0].length,n=e.length,r={mw:t,mh:n,cells:new Uint8Array(t*n),floor:new Float32Array(t*n),ceil:new Float32Array(t*n),doors:{},lifts:[]},s=i.ceilHeight||a0,a=0;a<n;a++)for(var o=0;o<t;o++){var c=e[a][o],u=a*t+o,l=s0[c]||0;r.cells[u]=l,r.floor[u]=i.heights?zf(i.heights[a][o]):0,r.ceil[u]=i.ceilings&&i.ceilings[a][o]!=="."?zf(i.ceilings[a][o]):s,r.ceil[u]<r.floor[u]+1&&(r.ceil[u]=r.floor[u]+1),di[l]&&(r.doors[o+","+a]={x:o,z:a,open:0,state:"closed",timer:0,locked:l===7?"red":l===8?"blue":null,secret:l===11,found:!1,used:!1}),c==="L"&&r.lifts.push({x:o,z:a,top:r.floor[u],bottom:0,pos:0,state:"down",wait:0})}for(var h in r.doors){var f=r.doors[h],p=1/0,g=0;ba(r,f.x,f.z).forEach(function(v){r.cells[v.i]===0&&(p=Math.min(p,r.floor[v.i]),g=Math.max(g,r.ceil[v.i]))});var y=f.z*t+f.x;r.floor[y]=p===1/0?0:p,r.ceil[y]=f.secret?g||s:Math.min(g||s,r.floor[y]+1.5)}return r.lifts.forEach(function(v){var m=1/0;ba(r,v.x,v.z).forEach(function(R){var b=r.cells[R.i]===0||di[r.cells[R.i]];b&&!o0(r,R.x,R.z)&&(m=Math.min(m,r.floor[R.i]))}),v.bottom=m===1/0?0:Math.min(m,v.top),v.pos=v.bottom;var x=v.z*t+v.x;r.floor[x]=v.pos,r.ceil[x]=Math.max(r.ceil[x],v.top+1.2)}),r}function o0(i,e,t){for(var n=0;n<i.lifts.length;n++)if(i.lifts[n].x===e&&i.lifts[n].z===t)return!0;return!1}function ba(i,e,t){var n=[];return[[1,0],[-1,0],[0,1],[0,-1]].forEach(function(r){var s=e+r[0],a=t+r[1];s>=0&&a>=0&&s<i.mw&&a<i.mh&&n.push({x:s,z:a,i:a*i.mw+s})}),n}function ii(i,e,t){return e<0||t<0||e>=i.mw||t>=i.mh?1:i.cells[t*i.mw+e]}function mr(i,e,t){return i.doors[e+","+t]||null}function gr(i,e,t){var n=ii(i,e,t);if(n===0)return!1;if(di[n]){var r=mr(i,e,t);return!r||r.open<.9}return!0}function gn(i,e,t){return i.floor[t*i.mw+e]}function Pi(i,e,t){return i.ceil[t*i.mw+e]}function Fr(i,e,t,n,r,s,a){for(var o=Math.floor(e-n),c=Math.floor(e+n),u=Math.floor(t-n),l=Math.floor(t+n),h=-1/0,f=1/0,p=u;p<=l;p++)for(var g=o;g<=c;g++){if(gr(i,g,p))return{blocked:!0};var y=gn(i,g,p),v=Pi(i,g,p);if(y>r+a+1e-4)return{blocked:!0};h=Math.max(h,y),f=Math.min(f,v)}return f<Math.max(r,h)+s-1e-4?{blocked:!0}:{blocked:!1,ground:h,ceil:f}}function Hr(i,e,t,n,r,s,a){var o=!0;return t!==0&&(Fr(i,e.x+t,e.z,r,e.y,s,a).blocked?o=!1:e.x+=t),n!==0&&(Fr(i,e.x,e.z+n,r,e.y,s,a).blocked?o=!1:e.z+=n),o}function zo(i,e,t,n){for(var r=Math.floor(e-n),s=Math.floor(e+n),a=Math.floor(t-n),o=Math.floor(t+n),c=-1/0,u=a;u<=o;u++)for(var l=r;l<=s;l++)gr(i,l,u)||(c=Math.max(c,gn(i,l,u)));return c===-1/0?0:c}function Go(i,e,t,n,r,s,a,o){for(var c=Math.sqrt(r*r+a*a),u=Math.floor(e),l=Math.floor(n),h=c>1e-9?Math.abs(1/r):1e30,f=c>1e-9?Math.abs(1/a):1e30,p=r<0?-1:1,g=a<0?-1:1,y=r<0?(e-u)*h:(u+1-e)*h,v=a<0?(n-l)*f:(l+1-n)*f,m=0,x=0;x<256;x++){var R=Math.min(y,v,o),b=gn(i,u,l),I=Pi(i,u,l);if(s<0){var L=(b-t)/s;if(L>=m-1e-6&&L<=R)return _(L,"floor")}else if(s>0){var D=(I-t)/s;if(D>=m-1e-6&&D<=R)return _(D,"ceil")}if(R>=o)return _(o,"none");if(m=R,y<v?(y+=h,u+=p):(v+=f,l+=g),u<0||l<0||u>=i.mw||l>=i.mh)return _(m,"wall");var S=t+s*m;if(gr(i,u,l)||S<gn(i,u,l)||S>Pi(i,u,l))return _(m,"wall")}return _(o,"none");function _(E,A){return{dist:E,x:e+r*E,y:t+s*E,z:n+a*E,kind:A,cx:u,cz:l}}}function vr(i,e,t,n,r,s,a){var o=r-e,c=s-t,u=a-n,l=Math.sqrt(o*o+c*c+u*u);return l<.001?!0:Go(i,e,t,n,o/l,c/l,u/l,l).dist>=l-.05}var vs=null;function Mu(i,e,t,n,r,s){var a=i.mw,o=a*i.mh;(!vs||vs.length<o)&&(vs=new Int32Array(o)),s.fill(-1);var c=Math.floor(e),u=Math.floor(t);if(!(c<0||u<0||c>=a||u>=i.mh)){var l=0,h=0;for(s[u*a+c]=0,vs[h++]=u*a+c;l<h;){var f=vs[l++],p=s[f];if(!(p>=n))for(var g=f%a,y=f/a|0,v=0;v<4;v++){var m=g+(v===0?1:v===1?-1:0),x=y+(v===2?1:v===3?-1:0);if(!(m<0||x<0||m>=a||x>=i.mh)){var R=x*a+m;s[R]!==-1||!r(f,m,x)||(s[R]=p+1,vs[h++]=R)}}}}}function Vf(i,e,t,n){for(var r=0;r<i.lifts.length;r++){var s=i.lifts[r],a=t(s.x,s.z),o=s.pos;s.state==="down"&&a?(s.state="wait",s.wait=.5):s.state==="wait"?(s.wait-=e,s.wait<=0&&(s.state="up",n&&n(s,"start"))):s.state==="up"?(s.pos=Math.min(s.top,s.pos+e*.9),s.pos>=s.top&&(s.state="top",s.wait=2.5,n&&n(s,"stop"))):s.state==="top"?a?s.wait=2.5:(s.wait-=e)<=0&&(s.state="lower",n&&n(s,"start")):s.state==="lower"&&(a&&s.pos>s.bottom+.05?s.state="up":(s.pos=Math.max(s.bottom,s.pos-e*.9),s.pos<=s.bottom&&(s.state="down",n&&n(s,"stop")))),i.floor[s.z*i.mw+s.x]=s.pos,s.moved=s.pos-o}}var hn={r:.28,h:.9,hCrouch:.55,eye:.8,eyeCrouch:.45,walk:3.2,run:5,jumpV:3.9,gravity:14},Ta={fist:{ammo:null,rate:.5,melee:!0,dmgMin:8,dmgMax:24,knock:.12},pistol:{ammo:"bullets",rate:.42,pellets:1,spread:.025,dmgMin:5,dmgMax:15,knock:.03,shake:.6},shotgun:{ammo:"shells",rate:.95,pellets:7,spread:.1,dmgMin:5,dmgMax:15,knock:.045,shake:2.2}},Yi=["fist","pistol","shotgun"],Wf={bullets:"BULLETS",shells:"SHELLS"},_s={imp:{hp:40,speed:1.7,radius:.35,painChance:.75,ranged:!0,melee:!1,h:.85,attackDmg:[8,20]},gnasher:{hp:110,speed:2.9,radius:.42,painChance:.5,ranged:!1,melee:!0,h:.7,attackDmg:[4,16],fleeBelow:.4},knight:{hp:400,speed:1.9,radius:.48,painChance:.2,ranged:!0,melee:!0,h:1.3,attackDmg:[10,26]},riley:{hp:900,speed:2.4,radius:.4,painChance:.12,ranged:!0,melee:!0,h:.95,attackDmg:[10,20],boss:!0}},qf={i:"imp",g:"gnasher",K:"knight",Y:"riley"},Xf={h:{msg:"PICKED UP A STIMPACK.",snd:"health"},"+":{msg:"PICKED UP A MEDIKIT.",snd:"health"},b:{msg:"PICKED UP A CLIP.",snd:"pickup"},a:{msg:"PICKED UP A BOX OF SHELLS.",snd:"pickup"},A:{msg:"PICKED UP THE ARMOR!",snd:"pickup"},2:{msg:"YOU GOT THE SHOTGUN!",snd:"weaponUp"},r:{msg:"PICKED UP THE RED KEYCARD.",snd:"keyPickup"},u:{msg:"PICKED UP THE BLUE KEYCARD.",snd:"keyPickup"},P:{msg:"PHOENIX ORB! YOU FEEL REBORN!",snd:"orb"}},Br=[{name:"ROOKIE",dmg:.5,ammo:2,desc:"DEMONS HIT HALF AS HARD AND AMMO IS DOUBLED. GREAT FOR A FIRST RUN."},{name:"WARRIOR",dmg:1,ammo:1,desc:"THE FIGHT AS IT WAS MEANT TO BE."},{name:"INFERNO",dmg:1.5,ammo:1,desc:"DEMONS HIT HARDER. FOR VETERANS WHO KNOW EVERY CORNER."}],Yf={run:"TIP: HOLD SHIFT TO RUN.",jump:"TIP: SPACE JUMPS. C CROUCHES. LOOK UP AND DOWN WITH THE MOUSE.",map:"TIP: LOST? PRESS TAB FOR THE MAP.",weapons:"TIP: PRESS 1 2 3, OR SCROLL THE MOUSE WHEEL, TO SWITCH WEAPONS. Q SWAPS BACK.",key:"TIP: THE MATCHING DOOR IS MARKED IN COLOR ON YOUR MAP (TAB).",lowAmmo:"TIP: LOW ON AMMO? YOUR FIST (1) NEVER RUNS OUT, AND IT IS SILENT.",lowHealth:"TIP: LOW HEALTH! BACK OFF AND LOOK FOR STIMPACKS AND MEDIKITS.",hurtDir:"TIP: THE RED MARKS AROUND YOUR AIM POINT AT WHATEVER HIT YOU.",secret:"TIP: WALLS WITH A CRACK MAY HIDE SECRETS. PRESS E ON THEM.",torches:"TIP: A PAIR OF TORCHES BESIDE A DOOR MEANS IT MATTERS. FOLLOW THEM.",lift:"TIP: STAND ON A GLOWING PLATFORM TO RIDE IT UP.",barrel:"TIP: A DEMON IS NEXT TO A BARREL. SHOOT THE BARREL!",meet_imp:"TIP: IMPS THROW FIREBALLS. STRAFE WITH A AND D TO DODGE.",meet_gnasher:"TIP: GNASHERS CHARGE AND BITE. BACK AWAY WHILE YOU SHOOT.",meet_knight:"TIP: THE EMBER KNIGHT IS TOUGH. KEEP YOUR DISTANCE AND USE SHELLS."};function Kf(i){i=i||{};var e=i.levels,t=i.rng||Math.random,n=i.storage||null,r=i.settings||{difficulty:1,tips:!1,seenTips:{}},s=i.onProgress||function(){},a={},o=!1,c="title",u=0,l=null,h=null,f={};function p(){return t()}function g(d,w){return d+t()*(w-d)}function y(d,w,B){return d<w?w:d>B?B:d}function v(d,w,B,ue){var te=d-B,le=w-ue;return te*te+le*le}function m(){return Br[r.difficulty]||Br[1]}function x(d,w,B,ue,te,le){var pe={t:d,name:w,x:B,y:ue,z:te};if(le)for(var _e in le)pe[_e]=le[_e];l.events.push(pe)}function R(d,w){w?x("sound",d,w.x,(w.y||0)+.5,w.z):x("sound",d,l.p.x,l.p.y+.8,l.p.z,{local:!0})}function b(d,w,B,ue){var te=_s[d];return{kind:d,mob:!0,x:w,z:B,y:ue,hp:te.hp,radius:te.radius,speed:te.speed,h:te.h,state:"idle",st:0,animT:p(),cool:g(.5,1.5),moveAng:0,retarget:0,losT:p()*.3,los:!1,target:null,lostT:0,fleeNext:!1,strafeSide:p()<.5?1:-1,flashT:0}}function I(d){var w=d.map.join("");return{boss:w.indexOf("Y")>=0,keys:{red:w.indexOf("R")>=0||w.indexOf("r")>=0,blue:w.indexOf("U")>=0||w.indexOf("u")>=0}}}function L(d){return{hp:Math.max(d.hp,1),armor:d.armor,ammo:{bullets:d.ammo.bullets,shells:d.ammo.shells},shotgun:d.weapons.shotgun,weapon:d.weapon}}function D(d,w,B){u=d;var ue=e[d],te=Gf(ue),le=ue.map;T=ue;var pe=B||(w&&l?L(l.p):null),_e={x:0,z:0,y:0,ang:ue.playerAngle||0,pitch:0,vx:0,vz:0,vy:0,onGround:!0,crouch:!1,eyeH:hn.eye,hp:pe?pe.hp:100,armor:pe?pe.armor:0,ammo:pe?{bullets:pe.ammo.bullets,shells:pe.ammo.shells}:{bullets:50,shells:0},weapons:{fist:!0,pistol:!0,shotgun:pe?pe.shotgun:!1},keys:{red:!1,blue:!1},weapon:pe&&pe.shotgun?pe.weapon:"pistol",nextWeapon:null,prevWeapon:null,raiseT:.3,lowerT:0,cool:0,fireT:1,dead:!1,deadT:0,painT:0,grinT:0,dmgFlash:0,bonusFlash:0,jumpHeld:!1,landT:0};k(_e,_e.weapon)||(_e.weapon=Y(_e));for(var Ee=[],Xe=[],je=null,ct=0;ct<le.length;ct++)for(var Zt=0;Zt<le[0].length;Zt++){var Xt=le[ct][Zt],rn=Zt+.5,$t=ct+.5,Et=gn(te,Zt,ct);if(Xt==="p")_e.x=rn,_e.z=$t,_e.y=Et;else if(qf[Xt]){var cn=b(qf[Xt],rn,$t,Et);cn.kind==="riley"&&H(cn),Ee.push(cn)}else Xt==="o"?Ee.push({kind:"barrel",mob:!0,barrel:!0,x:rn,z:$t,y:Et,hp:15,radius:.3,h:.55,state:"idle",st:0}):Xt==="t"?Ee.push({kind:"torch",x:rn,z:$t,y:Et,h:.95,animT:p()}):Xf[Xt]?Ee.push({kind:"pickup",item:Xt,x:rn,z:$t,y:Et,h:.3,bob:p()*6}):Xt==="*"&&Xe.push({x:Zt,z:ct,found:!1});Xt==="X"&&(je={x:Zt,z:ct})}var Yt=0,en=0;return Ee.forEach(function(pt){pt.mob&&!pt.barrel&&Yt++,pt.kind==="pickup"&&en++}),l={L:ue,W:te,mw:te.mw,mh:te.mh,doors:te.doors,ents:Ee,p:_e,secrets:Xe,seen:new Uint8Array(te.mw*te.mh),msgs:[],events:[],time:0,notice:null,stats:{kills:0,totalKills:Yt,items:0,totalItems:en,secrets:0,totalSecrets:Xe.length},exitT:-1,flow:new Int16Array(te.mw*te.mh),flowT:0,infightSeen:!1,boss:null,shotId:0,firing:!1,input:{strafe:0,moving:!1,vx:0,vz:0},startGear:pe,info:I(ue),exitCell:je,hurtDirs:[],hitT:0,killT:0,blockT:0,shake:0,hitstop:0,killer:null,tipQueue:[],tipT:3,usedMap:!1,ranT:0,jumped:!1,spotT:0,started:!0},Ee.forEach(function(pt){pt.kind==="riley"&&(l.boss=pt)}),c="game",E(U(),"#f0d848",3.5),l}function S(){var d=l.startGear;d&&(d={hp:Math.max(d.hp,100),armor:d.armor,ammo:{bullets:Math.max(d.ammo.bullets,50),shells:d.shotgun?Math.max(d.ammo.shells,8):d.ammo.shells},shotgun:d.shotgun,weapon:d.weapon}),D(u,!1,d)}function _(d,w,B){l.msgs.push({text:d,t:B||3,color:w}),l.msgs.length>4&&l.msgs.shift()}function E(d,w,B){l.notice={text:d,color:w||"#f0d848",t:B||2.5,max:B||2.5}}function A(d){l&&(l.shake=Math.min(6,Math.max(l.shake,d)))}function M(d){!l||!r.tips||r.seenTips&&r.seenTips[d]||l.tipQueue.indexOf(d)<0&&l.tipQueue.push(d)}function P(d){if(l.tipT-=d,!(l.tipT>0||!l.tipQueue.length)){var w=l.tipQueue.shift();r.seenTips[w]||(r.seenTips[w]=!0,i.saveSettings&&i.saveSettings(),_(Yf[w],"#8fe0a0",6),l.tipT=7)}}function U(){if(!l)return"";var d=l.info,w=l.p;return d.keys.blue&&!w.keys.blue?"FIND THE BLUE KEYCARD":d.keys.red&&!w.keys.red?"FIND THE RED KEYCARD":d.boss?"DEFEAT RILEY":"FIND THE EXIT SWITCH"}function k(d,w){var B=Ta[w];return!B.ammo||d.ammo[B.ammo]>0}function Y(d){for(var w=Yi.length-1;w>=0;w--){var B=Yi[w];if(d.weapons[B]&&k(d,B))return B}return"fist"}function J(d,w){if(c!=="game"||!l||l.p.dead)return!1;var B=l.p;return B.weapons[d]?k(B,d)?d===B.weapon?(B.nextWeapon&&!(B.lowerT>0)&&(B.nextWeapon=null),!1):d===B.nextWeapon?!1:(B.prevWeapon=B.weapon,B.nextWeapon=d,B.autoFist=!1,!0):(w||(_("NO "+Wf[Ta[d].ammo]+" FOR THE "+d.toUpperCase()+"."),R("noAmmo")),!1):(w||_("YOU HAVEN'T FOUND THE "+d.toUpperCase()+" YET."),!1)}function ne(d){for(var w=l.p,B=Yi.indexOf(w.nextWeapon||w.weapon),ue=1;ue<Yi.length;ue++){var te=Yi[(B+d*ue+Yi.length*2)%Yi.length];if(w.weapons[te]&&k(w,te)){J(te,!0);return}}}function ie(){var d=l.p;d.prevWeapon&&d.prevWeapon!==d.weapon&&d.weapons[d.prevWeapon]&&k(d,d.prevWeapon)?J(d.prevWeapon,!0):ne(-1)}function se(){return l.p.y+l.p.eyeH}function re(d,w){return Math.sqrt(v(d,w,l.p.x,l.p.z))}function Re(d,w,B,ue,te,le){for(var pe=l.p,_e=Math.cos(w),Ee=Math.cos(d)*_e,Xe=Math.sin(d)*_e,je=Math.sin(w),ct=pe.x,Zt=se(),Xt=pe.z,rn=te?1.4:40,$t=Go(l.W,ct,Zt,Xt,Ee,je,Xe,rn),Et=null,cn=$t.dist+.05,Yt=0;Yt<l.ents.length;Yt++){var en=l.ents[Yt];if(!(!en.mob||en.state==="die"||en.state==="dead"||en.gone)){var pt=Ne(ct,Zt,Xt,Ee,je,Xe,en);pt!==null&&pt>.1&&pt<cn&&(Et=en,cn=pt)}}var fi=B+p()*(ue-B)|0;if(Et){if(me(Et,fi),!Et.barrel){Et.kind==="riley"&&Et.shieldT>0?l.blockT=.2:Et.state==="die"?(l.killT=.3,l.hitstop=Math.max(l.hitstop,.045)):l.hitT=Math.max(l.hitT,.14);var Xi=_s[Et.kind];if(le&&!Xi.boss){var Nn=le*(Xi.hp>200?.25:1);Hr(l.W,Et,Math.cos(d)*Nn,Math.sin(d)*Nn,Et.radius,Et.h,qn)}}x("fx",Et.barrel||Et.kind==="riley"?"spark":"blood",ct+Ee*cn,Zt+je*cn,Xt+Xe*cn,{dx:-Ee,dy:-je,dz:-Xe})}else!te&&$t.kind!=="none"?x("fx","puff",$t.x-Ee*.03,$t.y-je*.03,$t.z-Xe*.03,{surface:$t.kind}):te&&R("whiff");return Et}function Ne(d,w,B,ue,te,le,pe){var _e=pe.radius+.06,Ee=d-pe.x,Xe=B-pe.z,je=ue*ue+le*le,ct=2*(Ee*ue+Xe*le),Zt=Ee*Ee+Xe*Xe-_e*_e;if(je<1e-9)return null;var Xt=ct*ct-4*je*Zt;if(Xt<0)return null;var rn=Math.sqrt(Xt),$t=(-ct-rn)/(2*je),Et=(-ct+rn)/(2*je),cn=$t>0?$t:Et;if(cn<0)return null;var Yt=w+te*cn;if(Yt>=pe.y&&Yt<=pe.y+pe.h)return cn;if(Math.abs(te)>1e-6){var en=((te<0?pe.y+pe.h:pe.y)-w)/te;if(en>0){var pt=d+ue*en-pe.x,fi=B+le*en-pe.z;if(pt*pt+fi*fi<=_e*_e)return en}}return null}function Qe(d){return!!d&&!d.gone&&d.state!=="die"&&d.state!=="dead"}function me(d,w,B){if(!(d.state==="die"||d.state==="dead")&&!(d.kind==="riley"&&ye(d,B))){if(d.hp-=w,d.flashT=.07,d.barrel){d.blame=Qe(B)?B:null,d.hp<=0&&d.state!=="boom"&&(d.state="boom",d.st=.08);return}var ue=_s[d.kind];Oe(d),ue.boss||(B&&B!==d&&Qe(B)&&!B.barrel?(d.target!==B&&!l.infightSeen&&re(d.x,d.z)<14&&(l.infightSeen=!0,_("THE DEMONS TURN ON EACH OTHER!")),d.target=B,d.lostT=0):B||(d.target=null)),d.hp<=0?(d.state="die",d.st=0,l.stats.kills++,ue.boss||R("enemyDie",d),x("fx","gib",d.x,d.y+d.h*.6,d.z,{kind:d.kind})):p()<ue.painChance&&!(ue.boss&&d.state==="windup")&&(d.state="pain",d.st=ue.boss?.25:.35,ue.fleeBelow&&d.hp<ue.hp*ue.fleeBelow&&(d.fleeNext=!0),R("enemyPain",d)),d.kind==="riley"&&be(d)}}function oe(d){d.state="dead",d.dead=!0,d.gone=!0,R("barrelBoom",d),x("fx","explosion",d.x,d.y+.3,d.z);for(var w=2.3,B=Qe(d.blame)?d.blame:null,ue=0;ue<l.ents.length;ue++){var te=l.ents[ue];if(!(!te.mob||te===d||te.state==="dead"||te.state==="die")){var le=Math.sqrt(v(te.x,te.z,d.x,d.z)+Math.pow(te.y-d.y,2));le<w&&vr(l.W,d.x,d.y+.3,d.z,te.x,te.y+te.h/2,te.z)&&(te.barrel?te.state!=="boom"&&(te.state="boom",te.st=g(.1,.25),te.blame=B):me(te,(w-le)/w*90|0,B))}}Me(d.x,d.z,10);var pe=Math.sqrt(v(l.p.x,l.p.z,d.x,d.z)+Math.pow(l.p.y-d.y,2));A(6/(1+pe*.35)),pe<w&&vr(l.W,d.x,d.y+.3,d.z,l.p.x,se(),l.p.z)&&G((w-pe)/w*70|0,d)}function G(d,w){var B=l.p;if(!(B.dead||d<=0||l.exitT>=0)){if(d=Math.max(1,Math.round(d*m().dmg)),w){var ue=Math.atan2(w.z-B.z,w.x-B.x);l.hurtDirs.push({ang:ue,t:1}),l.hurtDirs.length>6&&l.hurtDirs.shift();var te=Math.atan2(Math.sin(ue-B.ang),Math.cos(ue-B.ang));Math.abs(te)>.9&&M("hurtDir"),l.killer=w.kind}var le=Math.min(B.armor,Math.ceil(d/3));B.armor-=le,d-=le,B.hp-=d,B.dmgFlash=Math.min(.65,B.dmgFlash+d/55),A(Math.min(4,1+d/8)),B.painT=.6,B.hp<=0?(B.hp=0,B.dead=!0,B.deadT=0,R("playerDie"),O(l.boss)&&(F(l.boss,tn.default.line("playerDied",l.boss.profile)),j(l.boss,!1))):(R("playerPain"),B.hp<30&&M("lowHealth"))}}function Z(d,w,B,ue,te,le,pe){var _e=d.y+d.h*.65,Ee=B-d.x,Xe=ue-_e,je=te-d.z,ct=Math.sqrt(Ee*Ee+Xe*Xe+je*je)||1,Zt=le||(w?5.5:7);l.ents.push({kind:"proj",x:d.x+Ee/ct*.5,y:_e+Xe/ct*.5,z:d.z+je/ct*.5,vx:Ee/ct*Zt,vy:Xe/ct*Zt,vz:je/ct*Zt,h:.2,green:!!w,animT:0,owner:d,dmg:pe||(w?g(10,28):g(7,20))}),R(d.kind==="riley"?"rileyShoot":"impShoot",d)}function fe(d,w,B){return!gr(l.W,w,B)}function ve(d,w,B){var ue=l.W,te=ii(ue,w,B);if(te!==0){if(!di[te])return!1;var le=mr(ue,w,B);if(!(le.open>=.9||!le.locked&&!le.secret))return!1}return ue.floor[B*ue.mw+w]-ue.floor[d]<=qn+1e-4}function Me(d,w,B){var ue=new Int16Array(l.mw*l.mh);Mu(l.W,d,w,B,fe,ue);for(var te=0;te<l.ents.length;te++){var le=l.ents[te];!le.mob||le.barrel||le.state!=="idle"||_s[le.kind].boss||ue[Math.floor(le.z)*l.mw+Math.floor(le.x)]>=0&&Oe(le)}}function Oe(d){d.state==="idle"&&(d.state="chase",d.st=0,R(d.kind==="knight"?"knightSight":d.kind==="riley"?"rileySight":"impSight",d))}function et(){Mu(l.W,l.p.x,l.p.z,9999,function(d,w,B){var ue=d,te=l.W,le=ii(te,w,B);if(le!==0){if(!di[le])return!1;var pe=mr(te,w,B);if(!(pe.open>=.9||!pe.locked&&!pe.secret))return!1}return te.floor[ue]-te.floor[B*te.mw+w]<=qn+1e-4},l.flow)}function Fe(d){var w=l.mw,B=Math.floor(d.x),ue=Math.floor(d.z),te=l.flow[ue*w+B];if(te<=0)return null;for(var le=-1,pe=-1,_e=0;_e<4;_e++){var Ee=B+(_e===0?1:_e===1?-1:0),Xe=ue+(_e===2?1:_e===3?-1:0);if(!(Ee<0||Xe<0||Ee>=w||Xe>=l.mh)){var je=l.flow[Xe*w+Ee];je>=0&&je<te&&(te=je,le=Ee,pe=Xe)}}return le<0?null:Math.atan2(pe+.5-d.z,le+.5-d.x)}function nt(d,w){d.state==="closed"||d.state==="closing"?(d.state="opening",w&&(d.used=!0),R("doorOpen",{x:d.x+.5,y:gn(l.W,d.x,d.z),z:d.z+.5}),d.secret&&!d.found&&(d.found=!0)):w&&d.state==="open"&&(d.state="closing",R("doorClose",{x:d.x+.5,y:gn(l.W,d.x,d.z),z:d.z+.5}))}function ft(d,w,B,ue,te){return d+B>ue&&d-B<ue+1&&w+B>te&&w-B<te+1}function it(d){if(ft(l.p.x,l.p.z,hn.r,d.x,d.z))return!0;for(var w=0;w<l.ents.length;w++){var B=l.ents[w];if(B.mob&&!B.barrel&&B.state!=="dead"&&B.state!=="die"&&ft(B.x,B.z,B.radius,d.x,d.z))return!0}return!1}function Mt(d){for(var w in l.doors){var B=l.doors[w];if(B.state==="opening")B.open+=d*1.6,B.open>=1&&(B.open=1,B.state="open",B.timer=B.secret?9999:4);else if(B.state==="open")B.timer-=d,B.timer<=0&&!it(B)&&(B.state="closing",R("doorClose",{x:B.x+.5,y:0,z:B.z+.5}));else if(B.state==="closing"){if(it(B)){B.state="opening";continue}B.open-=d*1.6,B.open<=0&&(B.open=0,B.state="closed")}}}function Rt(d,w,B){return ft(d.x,d.z,(d.radius||hn.r)*.7,w,B)&&Math.abs(d.y-gn(l.W,w,B))<.05}function jt(d){var w=l.p;Vf(l.W,d,function(B,ue){if(Rt(w,B,ue))return!0;for(var te=0;te<l.ents.length;te++){var le=l.ents[te];if(le.mob&&Qe(le)&&Rt(le,B,ue))return!0}return!1},function(B,ue){R(ue==="start"?"doorOpen":"doorClose",{x:B.x+.5,y:B.pos,z:B.z+.5})}),l.W.lifts.forEach(function(B){B.moved&&[w].concat(l.ents).forEach(function(ue){(ue===w||ue.mob&&Qe(ue))&&ft(ue.x,ue.z,(ue.radius||hn.r)*.7,B.x,B.z)&&Math.abs(ue.y-(B.pos-B.moved))<.06&&(ue.y=B.pos)})})}function yt(){for(var d=l.p,w=Math.cos(d.ang),B=Math.sin(d.ang),ue=.4;ue<=1.3;ue+=.3){var te=Math.floor(d.x+w*ue),le=Math.floor(d.z+B*ue),pe=ii(l.W,te,le);if(pe!==0){if(di[pe]){var _e=mr(l.W,te,le);if(_e.open>=.9&&_e.state==="open"&&Math.floor(d.x)===te&&Math.floor(d.z)===le)continue;return{kind:"door",door:_e}}return pe===9?{kind:"switch",x:te,z:le}:null}}return null}function kt(){if(!l||l.p.dead||l.exitT>=0)return null;var d=yt();if(!d)return null;if(d.kind==="switch")return{verb:"EXIT LEVEL",color:"#58e068"};var w=d.door;return w.secret&&!w.found?null:w.locked&&!l.p.keys[w.locked]?{need:w.locked,text:w.locked.toUpperCase()+" KEYCARD NEEDED",color:w.locked==="red"?"#ff5a3a":"#6a98ff"}:w.state==="closed"||w.state==="closing"?{verb:"OPEN",color:"#e8e0c8"}:null}function X(){var d=yt();if(d){var w=l.p;if(d.kind==="door"){var B=d.door;B.locked&&!w.keys[B.locked]?(R("locked"),_("YOU NEED THE "+B.locked.toUpperCase()+" KEYCARD."),M("key")):nt(B,!0)}else d.kind==="switch"&&(l.W.cells[d.z*l.mw+d.x]=10,R("switchFlip"),E("LEVEL COMPLETE!","#58e068",2),l.exitT=.8)}}function Dt(d){d.y=zo(l.W,d.x,d.z,d.radius*.6)}function dt(d,w){var B=l.p,ue=_s[d.kind];d.animT+=w,d.st-=w,d.cool-=w,d.flashT-=w,d.target&&!Qe(d.target)&&(d.target=null,d.cool=Math.min(d.cool,.4));var te=d.target,le=te?te.x:B.x,pe=te?te.z:B.z,_e=te?te.y+te.h*.6:B.y+B.eyeH*.8;d.losT-=w,d.losT<=0&&(d.losT=.2+p()*.1,d.los=vr(l.W,d.x,d.y+d.h*.8,d.z,le,_e,pe));var Ee=le-d.x,Xe=pe-d.z,je=Math.sqrt(Ee*Ee+Xe*Xe);if(te&&(d.lostT=d.los?0:d.lostT+w,d.lostT>4)){d.target=null,d.lostT=0;return}if(d.state==="idle"){d.los&&je<9&&!B.dead&&Oe(d);return}if(d.state==="pain"){d.st<=0&&(d.fleeNext?(d.fleeNext=!1,d.state="flee",d.st=g(.9,1.6),d.moveAng=Math.atan2(-Xe,-Ee)+g(-.6,.6)):d.state="chase");return}if(d.state==="flee"){Hr(l.W,d,Math.cos(d.moveAng)*d.speed*1.1*w,Math.sin(d.moveAng)*d.speed*1.1*w,d.radius,d.h,qn)||(d.moveAng+=(p()<.5?1:-1)*Math.PI/2),Dt(d),d.st<=0&&(d.state="chase",d.cool=0,d.retarget=0,R("impSight",d));return}if(d.state==="die"){d.st<=-.5&&(d.state="dead");return}if(d.state!=="dead"){if(d.state==="windup"){if(d.st<=0){if(d.state="chase",!te&&B.dead)return;if(ue.melee&&je<1.9&&Math.abs(_e-(d.y+d.h*.5))<1.2){if(d.los){var ct=ue.attackDmg[0]+p()*(ue.attackDmg[1]-ue.attackDmg[0])|0;te?me(te,ct,d):G(ct,d),R("punch",d)}}else ue.ranged&&d.los&&Z(d,d.kind==="knight",le,_e,pe);d.cool=g(.9,1.9)}return}if(!(!te&&B.dead)){d.detourT=(d.detourT||0)-w,d.pathT=(d.pathT||0)-w;var Zt=!te&&Math.abs(B.y-d.y)>qn,Xt=!te&&(!d.los||d.pathT>0||Zt)&&d.detourT<=0?Fe(d):null;if(d.retarget-=w,Xt!==null)d.moveAng=Xt;else if(d.retarget<=0){d.retarget=g(.35,.8);var rn=Math.atan2(Xe,Ee);ue.ranged&&!ue.melee&&d.los&&je<7?(p()<.3&&(d.strafeSide=-d.strafeSide),d.moveAng=rn+d.strafeSide*g(1.1,1.8)):d.moveAng=rn+(je>2.2?g(-.7,.7):g(-.25,.25))}var $t=ue.melee?.95:1.6;if(je>$t){var Et=d.x,cn=d.z,Yt=Hr(l.W,d,Math.cos(d.moveAng)*d.speed*w,Math.sin(d.moveAng)*d.speed*w,d.radius,d.h,qn);if(!Yt&&Xt!==null){var en=Math.floor(d.x)+.5-d.x,pt=Math.floor(d.z)+.5-d.z;Hr(l.W,d,en*Math.min(1,w*6),pt*Math.min(1,w*6),d.radius,d.h,qn)}else if(!Yt){var fi=Math.floor(d.x+Math.cos(d.moveAng)*.7),Xi=Math.floor(d.z+Math.sin(d.moveAng)*.7),Nn=mr(l.W,fi,Xi);Nn&&!Nn.locked&&!Nn.secret&&Nn.state==="closed"&&nt(Nn,!1),d.moveAng+=(p()<.5?1:-1)*Math.PI/2*g(.6,1.2),d.retarget=g(.25,.5),d.pathT=.8}for(var C=0;C<l.ents.length;C++){var W=l.ents[C];if(!(W===d||!W.mob||W.state==="dead"||W.state==="die"||W.gone)){var ae=d.x-W.x,Q=d.z-W.z,ee=ae*ae+Q*Q,Ae=d.radius+(W.radius||.3);if(ee>1e-4&&ee<Ae*Ae&&Math.abs(W.y-d.y)<.5){var Ie=Math.sqrt(ee),Te=(Ae-Ie)*.5;Fr(l.W,d.x+ae/Ie*Te,d.z+Q/Ie*Te,d.radius,d.y,d.h,qn).blocked||(d.x+=ae/Ie*Te,d.z+=Q/Ie*Te)}}}var Be=v(d.x,d.z,Et,cn),Ge=d.speed*w*.3;d.stuckT=Be<Ge*Ge?(d.stuckT||0)+w:0,d.stuckT>.4&&(d.stuckT=0,d.detourT=g(.5,.9),d.moveAng+=(p()<.5?1:-1)*Math.PI/2,d.retarget=d.detourT),Dt(d)}d.cool<=0&&d.los&&(ue.melee&&je<1.4&&Math.abs(_e-(d.y+d.h*.5))<1.2?(d.state="windup",d.st=.35):ue.ranged&&je>1.2&&je<14&&p()<w*1.4&&(d.state="windup",d.st=.45))}}}function H(d){var w=tn.default.recall(n);d.mem=w,d.tune=tn.default.tuning(w);var B=N();d.sparring=!!(B&&B.sparring),d.allowed=B&&B.moves?B.moves:null,d.hp=d.maxHp=Math.round(_s.riley.hp*d.tune.hpScale*(B&&B.hpScale||1)),d.profile=tn.default.newProfile(),d.phase=1,d.cools={volley:1,lead:3,summon:8,shield:5,melee:0},d.move=null,d.moveT=0,d.shieldT=0,d.talkT=0,d.flankSide=1,d.attack=null,d.settled=!1}var T=null;function N(){return T&&T.boss}function O(d){return!!d&&d.state!=="idle"&&Qe(d)}function F(d,w,B){return!w||B&&d.talkT>0?!1:(_("RILEY: "+w,"#6fe0ec",4.5),R("rileyTalk"),d.talkT=3.5,!0)}function z(d){var w=d.mem,B=l.L.boss;if(d.sparring&&B&&B.intro&&!(w.fights>0)){F(d,B.intro);return}F(d,tn.default.line("intro",d.profile,{memory:w.fights>0?w:null})),w.ease>0?F(d,tn.default.line("ease",d.profile)):d.tune.practised&&F(d,tn.default.line("studied",d.profile,{wins:w.wins}))}function j(d,w){d.settled||(d.settled=!0,tn.default.save(n,tn.default.settle(d.mem,d.profile,w)))}function V(){var d=0;return l.ents.forEach(function(w){w.summoned&&Qe(w)&&d++}),d}function K(d){for(var w=0,B=0;B<30&&w<2;B++){var ue=p()*Math.PI*2,te=g(1.5,3.5),le=d.x+Math.cos(ue)*te,pe=d.z+Math.sin(ue)*te,_e=zo(l.W,le,pe,.3);if(!(Fr(l.W,le,pe,.4,_e,.85,0).blocked||re(le,pe)<3||!vr(l.W,d.x,d.y+.5,d.z,le,_e+.5,pe))){var Ee=b("imp",le,pe,_e);Ee.summoned=!0,Ee.state="chase",l.ents.push(Ee),l.stats.totalKills++,x("fx","summon",le,_e+.4,pe),w++}}w&&(F(d,tn.default.line("summon",d.profile)),R("rileySight",d)),d.cools.summon=18*d.tune.coolScale}function ce(d,w,B,ue){var te={los:d.los,dist:w,phase:d.phase,cool:d.cools,impsAlive:V(),playerWeapon:l.p.weapon},le=tn.default.legalMoves(te);if(d.allowed){var pe=le.filter(function(Xe){return d.allowed.indexOf(Xe)>=0});pe.length&&(le=pe)}var _e=tn.default.choose(le,d.profile,te,t);d.move=_e.move,F(d,tn.default.insight(d.profile,_e.why),!0);var Ee=d.profile;switch(_e.move){case"volley":case"lead":d.state="windup",d.attack=_e.move,d.st=_e.move==="volley"?.55:.4,d.moveT=d.st+.2;break;case"backoff":d.moveT=1,d.moveAng=Math.atan2(-ue,-B)+g(-.5,.5);break;case"flank":d.flankSide=tn.default.strafeHabit(Ee)>.3?tn.default.strafeSide(Ee):p()<.5?1:-1,d.moveT=1.3;break;case"close":d.moveT=1.2;break;case"seek":d.moveT=.8;break;case"summon":K(d),d.moveT=.8;break;case"shield":d.shieldT=1.6,d.moveT=1.2,d.cools.shield=8*d.tune.coolScale,R("rileyShield",d);break}}function xe(d,w){var B=l.p,ue=d.tune,te=ue.coolScale*(d.phase>=3?.7:1);if(d.attack==="melee"){w<1.9&&d.los&&(G(g(10,20)*ue.dmgScale|0,d),R("punch",d)),d.cools.melee=1.2;return}if(d.los){var le=B.y+B.eyeH*.8,pe=Math.atan2(B.z-d.z,B.x-d.x);if(d.attack==="volley"){for(var _e=-1;_e<=1;_e++){var Ee=pe+_e*.2;Z(d,!0,d.x+Math.cos(Ee)*w,le,d.z+Math.sin(Ee)*w,6.5,g(8,16)*ue.dmgScale)}d.cools.volley=g(1.6,2.4)*te}else if(d.attack==="lead"){var Xe=9,je=w/Xe;Z(d,!0,B.x+l.input.vx*je,le,B.z+l.input.vz*je,Xe,g(10,18)*ue.dmgScale),d.cools.lead=g(1.8,2.8)*te}}}function de(d,w){var B=l.p,ue=d.profile;d.animT+=w,d.st-=w,d.talkT-=w,d.shieldT-=w,d.moveT-=w,d.flashT-=w;for(var te in d.cools)d.cools[te]-=w;d.losT-=w,d.losT<=0&&(d.losT=.15,d.los=vr(l.W,d.x,d.y+d.h*.85,d.z,B.x,se(),B.z));var le=B.x-d.x,pe=B.z-d.z,_e=Math.sqrt(le*le+pe*pe);if(d.state==="idle"){d.los&&!B.dead&&(Oe(d),z(d));return}if(d.state==="die"){d.st<=-1.2&&(d.state="dead");return}if(!(d.state==="dead"||B.dead)){if(tn.default.observe(ue,{dt:w,los:d.los,dist:_e,strafe:l.input.strafe,moving:l.input.moving}),d.state==="pain"){d.st<=0&&(d.state="chase");return}if(d.state==="windup"){d.st<=0&&(d.state="chase",xe(d,_e));return}if(_e<1.3&&d.los&&d.cools.melee<=0){d.state="windup",d.attack="melee",d.st=.3;return}if(!(d.moveT<=0&&(ce(d,_e,le,pe),d.state==="windup"))){var Ee=Math.atan2(pe,le),Xe=null;switch(d.move){case"backoff":Xe=d.moveAng;break;case"close":Xe=Ee;break;case"flank":case"shield":Xe=Ee+d.flankSide*1.35;break;case"seek":Xe=Fe(d),Xe===null&&(Xe=Ee);break}if(Xe!==null){var je=d.speed*(d.phase>=3?1.25:1)*w;Hr(l.W,d,Math.cos(Xe)*je,Math.sin(Xe)*je,d.radius,d.h,qn)||(d.flankSide=-d.flankSide,d.moveAng+=Math.PI/2),Dt(d)}}}}function ye(d,w){if(d.shieldT>0)return x("fx","spark",d.x,d.y+.5,d.z),R("rileyShield",d),!0;if(l.firing&&d.lastShot!==l.shotId&&(d.lastShot=l.shotId,d.profile.hits++),w&&!w.barrel&&w.kind==="imp"){var B=w.target===d?"impsTurned":"friendlyFire";d.profile.said[B]||(d.profile.said[B]=!0,F(d,tn.default.line(B,d.profile)))}return!1}function be(d){if(d.hp<=0){R("rileyDerez",d),F(d,tn.default.line("defeated",d.profile)),d.sparring&&_("RILEY: THAT WAS JUST PRACTICE. I'LL REMEMBER HOW YOU FIGHT.","#6fe0ec",6),j(d,!0),l.exitT=d.sparring?6.5:5;return}d.sparring||(d.phase<3&&d.hp<d.maxHp*.33?(d.phase=3,F(d,tn.default.line("phase3",d.profile))):d.phase<2&&d.hp<d.maxHp*.66&&(d.phase=2,F(d,tn.default.line("phase2",d.profile)),K(d)))}function De(){for(var d=l.p,w=se(),B=12,ue=l.W,te=Math.floor(d.x),le=Math.floor(d.z),pe=Math.max(0,le-B);pe<=Math.min(l.mh-1,le+B);pe++)for(var _e=Math.max(0,te-B);_e<=Math.min(l.mw-1,te+B);_e++){var Ee=pe*l.mw+_e;l.seen[Ee]||gr(ue,_e,pe)||vr(ue,d.x,w,d.z,_e+.5,gn(ue,_e,pe)+.4,pe+.5)&&(l.seen[Ee]=1,ba(ue,_e,pe).forEach(function(Xe){ue.cells[Xe.i]!==0&&(l.seen[Xe.i]=1)}))}}function We(){De();var d=l.p,w=se();function B(_e,Ee){return v(_e.x,_e.z,d.x,d.z)<Ee*Ee&&vr(l.W,d.x,w,d.z,_e.x,(_e.y||0)+(_e.h||.3)*.6,_e.z)}for(var ue=0;ue<l.ents.length;ue++){var te=l.ents[ue];if(te.kind==="pickup"&&!te.spotted&&(te.item==="r"||te.item==="u")&&B(te,14)&&(te.spotted=!0),te.mob&&!te.barrel&&Qe(te)&&Yf["meet_"+te.kind]&&!r.seenTips["meet_"+te.kind]&&B(te,11)&&M("meet_"+te.kind),te.barrel&&!te.gone&&!r.seenTips.barrel&&B(te,10))for(var le=0;le<l.ents.length;le++){var pe=l.ents[le];if(pe.mob&&!pe.barrel&&Qe(pe)&&pe.state!=="idle"&&v(pe.x,pe.z,te.x,te.z)<4){M("barrel");break}}te.kind==="torch"&&u===0&&l.time>20&&B(te,5)&&M("torches")}l.W.lifts.forEach(function(_e){v(_e.x+.5,_e.z+.5,d.x,d.z)<16&&M("lift")})}function q(){var d=l.info,w=l.p,B,ue=d.keys.blue&&!w.keys.blue?"u":d.keys.red&&!w.keys.red?"r":null;if(ue){for(var te=0;te<l.ents.length;te++){var le=l.ents[te];if(le.kind==="pickup"&&le.item===ue&&!le.gone)return le.spotted?{x:le.x,y:le.y+.3,z:le.z}:null}return null}for(B in l.doors){var pe=l.doors[B];if(pe.locked&&!pe.used&&l.seen[pe.z*l.mw+pe.x])return{x:pe.x+.5,y:gn(l.W,pe.x,pe.z)+.8,z:pe.z+.5}}var _e=l.exitCell;if(!d.boss&&_e&&l.seen[_e.z*l.mw+_e.x])return{x:_e.x+.5,y:.8,z:_e.z+.5};var Ee=l.boss;return d.boss&&Ee&&Qe(Ee)&&l.seen[Math.floor(Ee.z)*l.mw+Math.floor(Ee.x)]?{x:Ee.x,y:Ee.y+Ee.h+.3,z:Ee.z}:null}function Se(d){var w=l.p,B=Xf[d.item],ue=m().ammo,te=null;switch(d.item){case"h":w.hp>=100?te="HEALTH":w.hp=Math.min(100,w.hp+10);break;case"+":w.hp>=100?te="HEALTH":w.hp=Math.min(100,w.hp+25);break;case"A":w.armor>=100?te="ARMOR":(w.armor=100,w.grinT=1);break;case"b":w.ammo.bullets>=200?te="BULLETS":w.ammo.bullets=Math.min(200,w.ammo.bullets+10*ue);break;case"a":w.ammo.shells>=50?te="SHELLS":w.ammo.shells=Math.min(50,w.ammo.shells+4*ue);break;case"2":w.weapons.shotgun=!0,w.ammo.shells=Math.min(50,w.ammo.shells+8*ue),w.grinT=1.2,w.weapon!=="shotgun"&&J("shotgun",!0),E("SHOTGUN!  PRESS 3","#ffd23e",2.5),M("weapons");break;case"r":case"u":var le=d.item==="r"?"red":"blue";w.keys[le]=!0,w.grinT=1,E(le.toUpperCase()+" KEYCARD",le==="red"?"#ff5a3a":"#6a98ff",2.5),M("key");break;case"P":w.hp=Math.min(200,w.hp+100),w.grinT=1.2;break}if(te){d.touching=!0,_(te+" ALREADY FULL","#8a8478",1.5);return}d.gone=!0,l.stats.items++,w.bonusFlash=Math.min(.35,w.bonusFlash+.22),R(B.snd),x("fx","pickup",d.x,d.y+.3,d.z,{item:d.item}),_(B.msg),w.autoFist&&(d.item==="b"||d.item==="a")&&(w.autoFist=!1,J(Y(w),!0))}function he(d){var w=l.p;if(w.dead){w.deadT+=d,w.eyeH=Math.max(.15,w.eyeH-d*1.2);return}var B=!!a.KeyC;if(!B&&w.crouch){var ue=Fr(l.W,w.x,w.z,hn.r,w.y,hn.h,0);ue.blocked||(w.crouch=!1)}else w.crouch=B;var te=w.crouch?hn.hCrouch:hn.h,le=w.crouch?hn.eyeCrouch:hn.eye;w.eyeH+=(le-w.eyeH)*Math.min(1,d*14);var pe=a.ShiftLeft||a.ShiftRight,_e=0,Ee=0;(a.KeyW||a.ArrowUp)&&(_e+=1),(a.KeyS||a.ArrowDown)&&(_e-=1),a.KeyA&&(Ee-=1),a.KeyD&&(Ee+=1),a.ArrowLeft&&(w.ang-=2.6*d),a.ArrowRight&&(w.ang+=2.6*d),a.PageUp&&(w.pitch+=1.6*d),a.PageDown&&(w.pitch-=1.6*d),w.pitch=y(w.pitch,-1.3,1.3),_e&&Ee&&(_e*=.7071,Ee*=.7071);var Xe=w.crouch?hn.walk*.5:pe?hn.run:hn.walk,je=Math.cos(w.ang),ct=Math.sin(w.ang),Zt=(je*_e-ct*Ee)*Xe,Xt=(ct*_e+je*Ee)*Xe,rn=w.onGround?14:3;w.vx+=(Zt-w.vx)*Math.min(1,d*rn),w.vz+=(Xt-w.vz)*Math.min(1,d*rn),a.Space&&!w.jumpHeld&&w.onGround&&!w.crouch&&(w.vy=hn.jumpV,w.onGround=!1,l.jumped=!0,R("jump")),w.jumpHeld=!!a.Space;var $t=w.x,Et=w.z,cn=w.onGround?qn:Math.max(0,Math.min(yu,.12));Hr(l.W,w,w.vx*d,w.vz*d,hn.r,te,cn),pe&&(_e||Ee)&&(l.ranT+=d);var Yt=zo(l.W,w.x,w.z,hn.r),en=Fr(l.W,w.x,w.z,hn.r,Math.max(w.y,Yt),te,10).ceil;w.onGround&&Yt<w.y-.02&&Yt>w.y-qn?w.y=Yt:w.onGround&&Yt<w.y&&(w.onGround=!1),w.onGround&&Yt>w.y&&(w.y=Yt),w.onGround||(w.vy-=hn.gravity*d,w.y+=w.vy*d,en!==void 0&&w.y+te>en&&(w.y=en-te,w.vy>0&&(w.vy=0)),w.y<=Yt&&(w.vy<-5&&(A(1.2),w.landT=.25),w.vy<-2&&R("land"),w.y=Yt,w.vy=0,w.onGround=!0)),l.input.strafe=Ee,l.input.moving=w.x!==$t||w.z!==Et,l.input.vx=(w.x-$t)/d,l.input.vz=(w.z-Et)/d,u===0&&(l.time>14&&l.ranT<.3&&M("run"),l.time>25&&!l.jumped&&M("jump"),l.time>40&&!l.usedMap&&M("map"),l.time>70&&!l.stats.secrets&&M("secret")),a.KeyE?w.usedHeld||(w.usedHeld=!0,X()):w.usedHeld=!1,w.nextWeapon&&w.raiseT<=0&&!(w.lowerT>0)&&(w.lowerT=.15),w.lowerT>0&&(w.lowerT-=d,w.lowerT<=0&&(w.weapon=w.nextWeapon||w.weapon,w.nextWeapon=null,w.raiseT=.15)),w.raiseT>0&&(w.raiseT-=d),w.cool-=d,w.fireT+=d;var pt=Ta[w.weapon];if(o&&w.cool<=0&&w.raiseT<=0&&w.lowerT<=0&&!w.nextWeapon&&l.exitT<0)if(pt.ammo&&w.ammo[pt.ammo]<=0){R("noAmmo");var fi=Y(w);_("OUT OF "+Wf[pt.ammo]+"!"),J(fi,!0)&&fi==="fist"&&(w.autoFist=!0),M("lowAmmo"),w.cool=.3}else{if(pt.ammo&&w.ammo[pt.ammo]--,w.cool=pt.rate,w.fireT=0,R(w.weapon==="fist"?"punch":w.weapon),w.weapon==="shotgun"&&R("pump"),pt.melee||(A(pt.shake),x("fx","muzzle",w.x+Math.cos(w.ang)*.4,se()-.1,w.z+Math.sin(w.ang)*.4,{weapon:w.weapon})),O(l.boss)&&tn.default.noteShot(l.boss.profile,w.weapon,re(l.boss.x,l.boss.z)),l.shotId++,l.firing=!0,pt.melee)Re(w.ang,w.pitch,pt.dmgMin,pt.dmgMax,!0,pt.knock);else for(var Xi=0;Xi<pt.pellets;Xi++)Re(w.ang+(p()-.5)*2*pt.spread,w.pitch+(p()-.5)*pt.spread,pt.dmgMin,pt.dmgMax,!1,pt.knock);l.firing=!1,pt.melee||Me(w.x,w.z,14)}for(var Nn=0;Nn<l.ents.length;Nn++){var C=l.ents[Nn];C.kind!=="pickup"||C.gone||(v(C.x,C.z,w.x,w.z)<.45&&Math.abs(C.y-w.y)<.6?C.touching||Se(C):C.touching=!1)}for(var W=l.L.triggers||[],ae=f[u]||(f[u]={}),Q=0;Q<W.length;Q++){var ee=W[Q].box;ae[Q]||w.x<ee[0]||w.x>ee[2]+1||w.z<ee[1]||w.z>ee[3]+1||(ae[Q]=!0,_("RILEY: "+W[Q].say,"#6fe0ec",Math.max(4.5,W[Q].say.length/14)),R("rileyTalk"))}var Ae=Math.floor(w.x),Ie=Math.floor(w.z);l.secrets.forEach(function(Te){!Te.found&&Te.x===Ae&&Te.z===Ie&&(Te.found=!0,l.stats.secrets++,R("secret"),E("SECRET AREA FOUND!","#ffd23e",2.5))})}function we(d){if(!(c!=="game"||!l)){var w=l.p;l.events.length=0,l.time+=d,w.dmgFlash=Math.max(0,w.dmgFlash-d*.8),w.bonusFlash=Math.max(0,w.bonusFlash-d*1.5),w.painT=Math.max(0,w.painT-d),w.grinT=Math.max(0,w.grinT-d),w.landT=Math.max(0,w.landT-d),l.shake=Math.max(0,l.shake-d*14);for(var B=0;B<l.msgs.length;B++)l.msgs[B].t-=d;for(;l.msgs.length&&l.msgs[0].t<=0;)l.msgs.shift();l.notice&&(l.notice.t-=d)<=0&&(l.notice=null),l.hitT-=d,l.killT-=d,l.blockT-=d;for(var ue=l.hurtDirs.length-1;ue>=0;ue--)(l.hurtDirs[ue].t-=d*.9)<=0&&l.hurtDirs.splice(ue,1);if(P(d),l.spotT-=d,l.spotT<=0&&(l.spotT=.3,We()),l.exitT>=0&&(l.exitT-=d,l.exitT<=0)){h={name:l.L.name,time:l.time,par:l.L.par,kills:l.stats.kills,totalKills:l.stats.totalKills,items:l.stats.items,totalItems:l.stats.totalItems,secrets:l.stats.secrets,totalSecrets:l.stats.totalSecrets},s(u,h),c="inter";return}Mt(d),jt(d),l.flowT-=d,l.flowT<=0&&(l.flowT=.25,et()),he(d);for(var te=l.ents.length-1;te>=0;te--){var le=l.ents[te];if(le.gone){l.ents.splice(te,1);continue}if(le.kind==="torch"){le.animT+=d;continue}if(le.kind==="pickup"){le.bob+=d;continue}if(le.kind==="proj"){le.animT+=d;for(var pe=3,_e=!1,Ee=0;Ee<pe&&!_e;Ee++){le.x+=le.vx*d/pe,le.y+=le.vy*d/pe,le.z+=le.vz*d/pe;var Xe=Math.floor(le.x),je=Math.floor(le.z),ct=gr(l.W,Xe,je)||le.y<gn(l.W,Xe,je)||le.y>Pi(l.W,Xe,je)?"wall":Pe(le);!ct&&!w.dead&&v(le.x,le.z,w.x,w.z)<.2&&le.y>w.y-.1&&le.y<w.y+(w.crouch?hn.hCrouch:hn.h)+.1&&(ct="player"),ct&&(_e=!0,ct==="player"?(G(le.dmg|0,{x:le.x-le.vx,z:le.z-le.vz,kind:le.owner?le.owner.kind:"imp"}),R("fireExplode")):(ct!=="wall"&&me(ct,le.dmg|0,le.owner),R("fireExplode",le)),x("fx",le.green?"greenBurst":"fireBurst",le.x,le.y,le.z),l.ents.splice(te,1))}continue}if(le.barrel){le.state==="boom"&&(le.st-=d,le.st<=0&&oe(le));continue}le.kind==="riley"?de(le,d):le.mob&&dt(le,d)}}}function Pe(d){for(var w=0;w<l.ents.length;w++){var B=l.ents[w];if(!(!B.mob||B===d.owner||!Qe(B))&&!(!B.barrel&&d.owner&&B.kind===d.owner.kind)){var ue=B.radius+.1;if(v(d.x,d.z,B.x,B.z)<ue*ue&&d.y>=B.y-.1&&d.y<=B.y+B.h+.1)return B}}return null}function ge(){var d=l.p,w=Math.cos(d.pitch),B=Math.cos(d.ang)*w,ue=Math.sin(d.ang)*w,te=Math.sin(d.pitch),le=Go(l.W,d.x,se(),d.z,B,te,ue,40),pe=null,_e=le.dist;return l.ents.forEach(function(Ee){if(!(!Ee.mob||!Qe(Ee))){var Xe=Ne(d.x,se(),d.z,B,te,ue,Ee);Xe!==null&&Xe<_e&&(pe=Ee,_e=Xe)}}),pe}var qe=!1;function ze(){if(c==="inter"){if(!qe){qe=!0;return}qe=!1,u+1>=e.length?c="victory":D(u+1,!0)}else c==="victory"?c="title":c==="game"&&l&&l.p.dead&&l.p.deadT>1.2&&S()}function Ut(){return{floorAt:function(d,w){return gr(l.W,d,w)&&!(mr(l.W,d,w)&&!mr(l.W,d,w).locked)?null:gn(l.W,d,w)},neighbours:function(d,w){var B=[],ue=gn(l.W,d,w);return ba(l.W,d,w).forEach(function(te){var le=ii(l.W,te.x,te.z);if(!(le!==0&&!di[le])){var pe=gn(l.W,te.x,te.z)-ue,_e=pe<=.02&&pe>=-.02?"walk":pe<0?"drop":pe<=qn?"step":pe<=yu?"jump":null;_e&&B.push({cx:te.x,cz:te.z,cost:_e==="jump"?2:1,kind:_e})}}),B}}}return{keys:a,state:function(){return l},mode:function(){return c},setMode:function(d){c=d},interStats:function(){return h},levelIndex:function(){return u},levels:e,update:we,startLevel:D,retryLevel:S,onEnter:ze,setFire:function(d){o=!!d},switchWeapon:J,cycleWeapon:ne,quickSwitch:ie,useTarget:yt,usePrompt:kt,useAction:X,objective:U,goalTarget:q,aimTarget:ge,hurtPlayer:G,walkGraph:Ut,levelInfo:I,hasAmmo:k,settings:r,DIFFS:Br}}var Jf=Sa(Zf(),1),l0={name:"E1M1: ASH GATES",floor:"slab",ceil:"ceilDark",par:240,playerAngle:0,ceilHeight:2.5,boss:{sparring:!0,hpScale:.4,moves:["volley","lead","flank","close","backoff","seek"],intro:"THERE YOU ARE! LET'S SPAR. I'LL WATCH HOW YOU FIGHT. READY?"},triggers:[{box:[2,25,8,30],say:"HI! I'M RILEY. I'M WAITING FOR YOU AT THE TOP. LOOK AROUND WITH THE MOUSE, MOVE WITH WASD."},{box:[7,26,9,28],say:"DOORS OPEN WITH E. GO ON, TRY IT."},{box:[15,23,28,29],say:"SEE THE SHOTGUN UP THERE? JUMP WITH SPACE."},{box:[14,20,28,22],say:"NICE VIEW. THE BLUE KEYCARD IS DOWN IN THE HALL. THE BLUE DOOR IS ACROSS FROM YOU."},{box:[2,17,5,21],say:"GOT IT? NOW THE BLUE DOOR. THE LIFT BEHIND IT BRINGS YOU UP TO ME."},{box:[20,11,28,15],say:"LAST STOP. GRAB WHAT YOU NEED. WHEN MY VISOR FLASHES WHITE, I'M ABOUT TO SHOOT. MOVE!"}],map:["##############################","##############.t...........t.#","##############...............#","##############....T..Y..T....#","##############....T.....T....#","##############.h...........h.#","##############...............#","##############....T.....T....#","##############.......a.......#","##############........t.t....#","#######################D######","####################..t.t....#","####################.........#","####################.....+...#","####################....A....#","####################...L.....#","#######################U######","##....................t.t...##","##.t......%%......%%........##","##u...g......i..............##","##.t.......h.....g..........##","##..........................##","####################D#########","###*Pa#########....t.t......##","####S##########.....i.....o.##","##b......######..........io.##","##.......######......h......##","##..p....D........2.........##","##.......######..o..........##","##.......######.t.........t.##","##...h...#####################","##############################"],heights:["000000000000000000000000000000","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","000000000000000000000000000000","000000000000000000008888888880","000000000000000000008888888880","000000000000000000008888888880","000000000000000000008888888880","000000000000000000008888888880","000000000000000000000000000000","000000000000000000000000000000","000000000000000000000000000000","000000000000000000000000000000","000000000001234444444444444400","000000000001234444444444444400","000000000000000000000000000000","000000000000000444444444444440","000000000000000444444444444440","000000000000000444444444444440","000000000000000446664444444440","000000000012344446664444444440","000000000000000446664444444440","000000000000000444444444444440","000000000000000000000000000000","000000000000000000000000000000"],ceilings:["..............................","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............................","....................iiiiiiiii.","....................iiiiiiiii.","....................iiiiiiiii.","....................iiiiiiiii.","....................iiiiiiiii.","..............................","..gggggggggggggggggggggggggg..","..gggggggggggggggggggggggggg..","..gggggggggggggggggggggggggg..","..gggggggggggggggggggggggggg..","..gggggggggggggggggggggggggg..","..............................","...............eeeeeeeeeeeeee.","...............eeeeeeeeeeeeee.","...............eeeeeeeeeeeeee.","...............eeeeeeeeeeeeee.",".........cccccceeeeeeeeeeeeee.","...............eeeeeeeeeeeeee.","...............eeeeeeeeeeeeee.","..............................",".............................."]},kr=[l0].concat(Jf.default.slice(1).map(function(i){return Object.assign({ceilHeight:2},i)}));function jf(i){var e=i>>>0||1;return function(){e=e+1831565813|0;var t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Ud=0,nh=1,Od=2;var ao=1,Fd=2,ea=3,Bi=0,Sn=1,Gn=2,oi=0,ta=1,lr=2,ih=3,rh=4,Hd=5;var ss=100,Bd=101,kd=102,zd=103,Gd=104,Vd=200,Wd=201,qd=202,Xd=203,sh=204,ah=205,Yd=206,Kd=207,Zd=208,Jd=209,jd=210,$d=211,Qd=212,ep=213,tp=214,vl=0,_l=1,xl=2,Ds=3,yl=4,Ml=5,Sl=6,bl=7,Vl=0,np=1,ip=2,Si=0,oo=1,lo=2,co=3,as=4,uo=5,ho=6,fo=7,Yu="attached",rp="detached",oh=300,Pr=301,os=302,Wl=303,ql=304,po=306,ai=1e3,si=1001,Us=1002,Vt=1003,Xl=1004;var ls=1005;var on=1006,na=1007;var bi=1008;var Vn=1009,lh=1010,ch=1011,ia=1012,Yl=1013,Ti=1014,Zn=1015,bn=1016,Kl=1017,Zl=1018,ra=1020,uh=35902,hh=35899,fh=1021,dh=1022,Jn=1023,Di=1026,Lr=1027,Jl=1028,jl=1029,Nr=1030,$l=1031;var Ql=1033,mo=33776,go=33777,vo=33778,_o=33779,ec=35840,tc=35841,nc=35842,ic=35843,rc=36196,sc=37492,ac=37496,oc=37488,lc=37489,xo=37490,cc=37491,uc=37808,hc=37809,fc=37810,dc=37811,pc=37812,mc=37813,gc=37814,vc=37815,_c=37816,xc=37817,yc=37818,Mc=37819,Sc=37820,bc=37821,Tc=36492,Ec=36494,wc=36495,Ac=36283,Rc=36284,yo=36285,Cc=36286,Ic=2200,Pc=2201,sp=2202,Kr=2300,Zr=2301,pl=2302,Ku=2303,qr=2400,Xr=2401,Oa=2402,Lc=2500,ap=2501,ph=0,Mo=1,sa=2,op=3200;var So=0,lp=1,jn="",Gt="srgb",On="srgb-linear",Fa="linear",wt="srgb";var ml=7680;var cp=519,up=512,hp=513,fp=514,Nc=515,dp=516,pp=517,Dc=518,mp=519,mh=35044,aa=35048;var gh="300 es",xi=2e3,Os=2001;function c0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function u0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Fs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gp(){let i=Fs("canvas");return i.style.display="block",i}var $f={},Hs=null;function Ha(...i){let e="THREE."+i.shift();Hs?Hs("log",e,...i):console.log(e,...i)}function vp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ke(...i){i=vp(i);let e="THREE."+i.shift();if(Hs)Hs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function tt(...i){i=vp(i);let e="THREE."+i.shift();if(Hs)Hs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Yr(...i){let e=i.join(" ");e in $f||($f[e]=!0,Ke(...i))}function _p(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var xp={[vl]:_l,[xl]:Sl,[yl]:bl,[Ds]:Ml,[_l]:vl,[Sl]:xl,[bl]:yl,[Ml]:Ds},Mi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qf=1234567,Da=Math.PI/180,Jr=180/Math.PI;function yi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]).toLowerCase()}function vt(i,e,t){return Math.max(e,Math.min(t,i))}function vh(i,e){return(i%e+e)%e}function h0(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function f0(i,e,t){return i!==e?(t-i)/(e-i):0}function Ua(i,e,t){return(1-t)*i+t*e}function d0(i,e,t,n){return Ua(i,e,1-Math.exp(-t*n))}function p0(i,e=1){return e-Math.abs(vh(i,e*2)-e)}function m0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function g0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function v0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function _0(i,e){return i+Math.random()*(e-i)}function x0(i){return i*(.5-Math.random())}function y0(i){i!==void 0&&(Qf=i);let e=Qf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function M0(i){return i*Da}function S0(i){return i*Jr}function b0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function T0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function E0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function w0(i,e,t,n,r){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),u=s((e+n)/2),l=a((e+n)/2),h=s((e-n)/2),f=a((e-n)/2),p=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*l,c*h,c*f,o*u);break;case"YZY":i.set(c*f,o*l,c*h,o*u);break;case"ZXZ":i.set(c*h,c*f,o*l,o*u);break;case"XZX":i.set(o*l,c*g,c*p,o*u);break;case"YXY":i.set(c*p,o*l,c*g,o*u);break;case"ZYZ":i.set(c*g,c*p,o*l,o*u);break;default:Ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function _i(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var _h={DEG2RAD:Da,RAD2DEG:Jr,generateUUID:yi,clamp:vt,euclideanModulo:vh,mapLinear:h0,inverseLerp:f0,lerp:Ua,damp:d0,pingpong:p0,smoothstep:m0,smootherstep:g0,randInt:v0,randFloat:_0,randFloatSpread:x0,seededRandom:y0,degToRad:M0,radToDeg:S0,isPowerOfTwo:b0,ceilPowerOfTwo:T0,floorPowerOfTwo:E0,setQuaternionFromProperEuler:w0,normalize:Pt,denormalize:_i},bh=class bh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};bh.prototype.isVector2=!0;var Ze=bh,Rn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],u=n[r+1],l=n[r+2],h=n[r+3],f=s[a+0],p=s[a+1],g=s[a+2],y=s[a+3];if(h!==y||c!==f||u!==p||l!==g){let v=c*f+u*p+l*g+h*y;v<0&&(f=-f,p=-p,g=-g,y=-y,v=-v);let m=1-o;if(v<.9995){let x=Math.acos(v),R=Math.sin(x);m=Math.sin(m*x)/R,o=Math.sin(o*x)/R,c=c*m+f*o,u=u*m+p*o,l=l*m+g*o,h=h*m+y*o}else{c=c*m+f*o,u=u*m+p*o,l=l*m+g*o,h=h*m+y*o;let x=1/Math.sqrt(c*c+u*u+l*l+h*h);c*=x,u*=x,l*=x,h*=x}}e[t]=c,e[t+1]=u,e[t+2]=l,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],c=n[r+1],u=n[r+2],l=n[r+3],h=s[a],f=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+l*h+c*p-u*f,e[t+1]=c*g+l*f+u*h-o*p,e[t+2]=u*g+l*p+o*f-c*h,e[t+3]=l*g-o*h-c*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(n/2),l=o(r/2),h=o(s/2),f=c(n/2),p=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=f*l*h+u*p*g,this._y=u*p*h-f*l*g,this._z=u*l*g+f*p*h,this._w=u*l*h-f*p*g;break;case"YXZ":this._x=f*l*h+u*p*g,this._y=u*p*h-f*l*g,this._z=u*l*g-f*p*h,this._w=u*l*h+f*p*g;break;case"ZXY":this._x=f*l*h-u*p*g,this._y=u*p*h+f*l*g,this._z=u*l*g+f*p*h,this._w=u*l*h-f*p*g;break;case"ZYX":this._x=f*l*h-u*p*g,this._y=u*p*h+f*l*g,this._z=u*l*g-f*p*h,this._w=u*l*h+f*p*g;break;case"YZX":this._x=f*l*h+u*p*g,this._y=u*p*h+f*l*g,this._z=u*l*g-f*p*h,this._w=u*l*h-f*p*g;break;case"XZY":this._x=f*l*h-u*p*g,this._y=u*p*h-f*l*g,this._z=u*l*g+f*p*h,this._w=u*l*h+f*p*g;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],u=t[2],l=t[6],h=t[10],f=n+o+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(l-c)*p,this._y=(s-u)*p,this._z=(a-r)*p}else if(n>o&&n>h){let p=2*Math.sqrt(1+n-o-h);this._w=(l-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+u)/p}else if(o>h){let p=2*Math.sqrt(1+o-n-h);this._w=(s-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+l)/p}else{let p=2*Math.sqrt(1+h-n-o);this._w=(a-r)/p,this._x=(s+u)/p,this._y=(c+l)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,u=t._z,l=t._w;return this._x=n*l+a*o+r*u-s*c,this._y=r*l+a*c+s*o-n*u,this._z=s*l+a*u+n*c-r*o,this._w=a*l-n*o-r*c-s*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){let u=Math.acos(o),l=Math.sin(u);c=Math.sin(c*u)/l,t=Math.sin(t*u)/l,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Th=class Th{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ed.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ed.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*r-o*n),l=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+c*u+a*h-o*l,this.y=n+c*l+o*u-s*h,this.z=r+c*h+s*l-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return bu.copy(this).projectOnVector(e),this.sub(bu)}reflect(e){return this.sub(bu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Th.prototype.isVector3=!0;var $=Th,bu=new $,ed=new Rn,Eh=class Eh{constructor(e,t,n,r,s,a,o,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,u)}set(e,t,n,r,s,a,o,c,u){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=s,l[5]=c,l[6]=n,l[7]=a,l[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],l=n[4],h=n[7],f=n[2],p=n[5],g=n[8],y=r[0],v=r[3],m=r[6],x=r[1],R=r[4],b=r[7],I=r[2],L=r[5],D=r[8];return s[0]=a*y+o*x+c*I,s[3]=a*v+o*R+c*L,s[6]=a*m+o*b+c*D,s[1]=u*y+l*x+h*I,s[4]=u*v+l*R+h*L,s[7]=u*m+l*b+h*D,s[2]=f*y+p*x+g*I,s[5]=f*v+p*R+g*L,s[8]=f*m+p*b+g*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],l=e[8];return t*a*l-t*o*u-n*s*l+n*o*c+r*s*u-r*a*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],l=e[8],h=l*a-o*u,f=o*c-l*s,p=u*s-a*c,g=t*h+n*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=h*y,e[1]=(r*u-l*n)*y,e[2]=(o*n-r*a)*y,e[3]=f*y,e[4]=(l*t-r*c)*y,e[5]=(r*s-o*t)*y,e[6]=p*y,e[7]=(n*c-u*t)*y,e[8]=(a*t-n*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*a+u*o)+a+e,-r*u,r*c,-r*(-u*a+c*o)+o+t,0,0,1),this}scale(e,t){return Yr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Tu.makeScale(e,t)),this}rotate(e){return Yr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Tu.makeRotation(-e)),this}translate(e,t){return Yr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Tu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Eh.prototype.isMatrix3=!0;var rt=Eh,Tu=new rt,td=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nd=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function A0(){let i={enabled:!0,workingColorSpace:On,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===wt&&(r.r=er(r.r),r.g=er(r.g),r.b=er(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===wt&&(r.r=Ns(r.r),r.g=Ns(r.g),r.b=Ns(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===jn?Fa:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Yr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Yr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[On]:{primaries:e,whitePoint:n,transfer:Fa,toXYZ:td,fromXYZ:nd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:n,transfer:wt,toXYZ:td,fromXYZ:nd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),i}var ot=A0();function er(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ns(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var xs,Tl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{xs===void 0&&(xs=Fs("canvas")),xs.width=e.width,xs.height=e.height;let r=xs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=xs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Fs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=er(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(er(t[n]/255)*255):t[n]=er(t[n]);return{data:t,width:e.width,height:e.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},R0=0,Bs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=yi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Eu(r[a].image)):s.push(Eu(r[a]))}else s=Eu(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Eu(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Tl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ke("Texture: Unable to serialize Texture."),{})}var C0=0,wu=new $,vn=class i extends Mi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=si,r=si,s=on,a=bi,o=Jn,c=Vn,u=i.DEFAULT_ANISOTROPY,l=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=yi(),this.name="",this.source=new Bs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(wu).x}get height(){return this.source.getSize(wu).y}get depth(){return this.source.getSize(wu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ke(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==oh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ai:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case Us:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ai:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case Us:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=oh;vn.DEFAULT_ANISOTROPY=1;var wh=class wh{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,u=c[0],l=c[4],h=c[8],f=c[1],p=c[5],g=c[9],y=c[2],v=c[6],m=c[10];if(Math.abs(l-f)<.01&&Math.abs(h-y)<.01&&Math.abs(g-v)<.01){if(Math.abs(l+f)<.1&&Math.abs(h+y)<.1&&Math.abs(g+v)<.1&&Math.abs(u+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(u+1)/2,b=(p+1)/2,I=(m+1)/2,L=(l+f)/4,D=(h+y)/4,S=(g+v)/4;return R>b&&R>I?R<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(R),r=L/n,s=D/n):b>I?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=L/r,s=S/r):I<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),n=D/s,r=S/s),this.set(n,r,s,t),this}let x=Math.sqrt((v-g)*(v-g)+(h-y)*(h-y)+(f-l)*(f-l));return Math.abs(x)<.001&&(x=1),this.x=(v-g)/x,this.y=(h-y)/x,this.z=(f-l)/x,this.w=Math.acos((u+p+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};wh.prototype.isVector4=!0;var Lt=wh,El=class extends Mi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},s=new vn(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Bs(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},dn=class extends El{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ba=class extends vn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var wl=class extends vn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Gl=class Gl{constructor(e,t,n,r,s,a,o,c,u,l,h,f,p,g,y,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,u,l,h,f,p,g,y,v)}set(e,t,n,r,s,a,o,c,u,l,h,f,p,g,y,v){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=c,m[2]=u,m[6]=l,m[10]=h,m[14]=f,m[3]=p,m[7]=g,m[11]=y,m[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/ys.setFromMatrixColumn(e,0).length(),s=1/ys.setFromMatrixColumn(e,1).length(),a=1/ys.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),u=Math.sin(r),l=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let f=a*l,p=a*h,g=o*l,y=o*h;t[0]=c*l,t[4]=-c*h,t[8]=u,t[1]=p+g*u,t[5]=f-y*u,t[9]=-o*c,t[2]=y-f*u,t[6]=g+p*u,t[10]=a*c}else if(e.order==="YXZ"){let f=c*l,p=c*h,g=u*l,y=u*h;t[0]=f+y*o,t[4]=g*o-p,t[8]=a*u,t[1]=a*h,t[5]=a*l,t[9]=-o,t[2]=p*o-g,t[6]=y+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*l,p=c*h,g=u*l,y=u*h;t[0]=f-y*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*l,t[9]=y-f*o,t[2]=-a*u,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*l,p=a*h,g=o*l,y=o*h;t[0]=c*l,t[4]=g*u-p,t[8]=f*u+y,t[1]=c*h,t[5]=y*u+f,t[9]=p*u-g,t[2]=-u,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,p=a*u,g=o*c,y=o*u;t[0]=c*l,t[4]=y-f*h,t[8]=g*h+p,t[1]=h,t[5]=a*l,t[9]=-o*l,t[2]=-u*l,t[6]=p*h+g,t[10]=f-y*h}else if(e.order==="XZY"){let f=a*c,p=a*u,g=o*c,y=o*u;t[0]=c*l,t[4]=-h,t[8]=u*l,t[1]=f*h+y,t[5]=a*l,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*l,t[10]=y*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(I0,e,P0)}lookAt(e,t,n){let r=this.elements;return Xn.subVectors(e,t),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),_r.crossVectors(n,Xn),_r.lengthSq()===0&&(Math.abs(n.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),_r.crossVectors(n,Xn)),_r.normalize(),Vo.crossVectors(Xn,_r),r[0]=_r.x,r[4]=Vo.x,r[8]=Xn.x,r[1]=_r.y,r[5]=Vo.y,r[9]=Xn.y,r[2]=_r.z,r[6]=Vo.z,r[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],l=n[1],h=n[5],f=n[9],p=n[13],g=n[2],y=n[6],v=n[10],m=n[14],x=n[3],R=n[7],b=n[11],I=n[15],L=r[0],D=r[4],S=r[8],_=r[12],E=r[1],A=r[5],M=r[9],P=r[13],U=r[2],k=r[6],Y=r[10],J=r[14],ne=r[3],ie=r[7],se=r[11],re=r[15];return s[0]=a*L+o*E+c*U+u*ne,s[4]=a*D+o*A+c*k+u*ie,s[8]=a*S+o*M+c*Y+u*se,s[12]=a*_+o*P+c*J+u*re,s[1]=l*L+h*E+f*U+p*ne,s[5]=l*D+h*A+f*k+p*ie,s[9]=l*S+h*M+f*Y+p*se,s[13]=l*_+h*P+f*J+p*re,s[2]=g*L+y*E+v*U+m*ne,s[6]=g*D+y*A+v*k+m*ie,s[10]=g*S+y*M+v*Y+m*se,s[14]=g*_+y*P+v*J+m*re,s[3]=x*L+R*E+b*U+I*ne,s[7]=x*D+R*A+b*k+I*ie,s[11]=x*S+R*M+b*Y+I*se,s[15]=x*_+R*P+b*J+I*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],u=e[13],l=e[2],h=e[6],f=e[10],p=e[14],g=e[3],y=e[7],v=e[11],m=e[15],x=c*p-u*f,R=o*p-u*h,b=o*f-c*h,I=a*p-u*l,L=a*f-c*l,D=a*h-o*l;return t*(y*x-v*R+m*b)-n*(g*x-v*I+m*L)+r*(g*R-y*I+m*D)-s*(g*b-y*L+v*D)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],u=e[6],l=e[10];return t*(a*l-o*u)-n*(s*l-o*c)+r*(s*u-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],l=e[8],h=e[9],f=e[10],p=e[11],g=e[12],y=e[13],v=e[14],m=e[15],x=t*o-n*a,R=t*c-r*a,b=t*u-s*a,I=n*c-r*o,L=n*u-s*o,D=r*u-s*c,S=l*y-h*g,_=l*v-f*g,E=l*m-p*g,A=h*v-f*y,M=h*m-p*y,P=f*m-p*v,U=x*P-R*M+b*A+I*E-L*_+D*S;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/U;return e[0]=(o*P-c*M+u*A)*k,e[1]=(r*M-n*P-s*A)*k,e[2]=(y*D-v*L+m*I)*k,e[3]=(f*L-h*D-p*I)*k,e[4]=(c*E-a*P-u*_)*k,e[5]=(t*P-r*E+s*_)*k,e[6]=(v*b-g*D-m*R)*k,e[7]=(l*D-f*b+p*R)*k,e[8]=(a*M-o*E+u*S)*k,e[9]=(n*E-t*M-s*S)*k,e[10]=(g*L-y*b+m*x)*k,e[11]=(h*b-l*L-p*x)*k,e[12]=(o*_-a*A-c*S)*k,e[13]=(t*A-n*_+r*S)*k,e[14]=(y*R-g*I-v*x)*k,e[15]=(l*I-h*R+f*x)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,u=s*a,l=s*o;return this.set(u*a+n,u*o-r*c,u*c+r*o,0,u*o+r*c,l*o+n,l*c-r*a,0,u*c-r*o,l*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,u=s+s,l=a+a,h=o+o,f=s*u,p=s*l,g=s*h,y=a*l,v=a*h,m=o*h,x=c*u,R=c*l,b=c*h,I=n.x,L=n.y,D=n.z;return r[0]=(1-(y+m))*I,r[1]=(p+b)*I,r[2]=(g-R)*I,r[3]=0,r[4]=(p-b)*L,r[5]=(1-(f+m))*L,r[6]=(v+x)*L,r[7]=0,r[8]=(g+R)*D,r[9]=(v-x)*D,r[10]=(1-(f+y))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=ys.set(r[0],r[1],r[2]).length(),o=ys.set(r[4],r[5],r[6]).length(),c=ys.set(r[8],r[9],r[10]).length();s<0&&(a=-a),pi.copy(this);let u=1/a,l=1/o,h=1/c;return pi.elements[0]*=u,pi.elements[1]*=u,pi.elements[2]*=u,pi.elements[4]*=l,pi.elements[5]*=l,pi.elements[6]*=l,pi.elements[8]*=h,pi.elements[9]*=h,pi.elements[10]*=h,t.setFromRotationMatrix(pi),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=xi,c=!1){let u=this.elements,l=2*s/(t-e),h=2*s/(n-r),f=(t+e)/(t-e),p=(n+r)/(n-r),g,y;if(c)g=s/(a-s),y=a*s/(a-s);else if(o===xi)g=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===Os)g=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=l,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=h,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=xi,c=!1){let u=this.elements,l=2/(t-e),h=2/(n-r),f=-(t+e)/(t-e),p=-(n+r)/(n-r),g,y;if(c)g=1/(a-s),y=a/(a-s);else if(o===xi)g=-2/(a-s),y=-(a+s)/(a-s);else if(o===Os)g=-1/(a-s),y=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=l,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=h,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=g,u[14]=y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Gl.prototype.isMatrix4=!0;var at=Gl,ys=new $,pi=new at,I0=new $(0,0,0),P0=new $(1,1,1),_r=new $,Vo=new $,Xn=new $,id=new at,rd=new Rn,Ui=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],l=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-l,p),this._y=0);break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return id.makeRotationFromQuaternion(e),this.setFromRotationMatrix(id,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rd.setFromEuler(this),this.setFromQuaternion(rd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ui.DEFAULT_ORDER="XYZ";var ka=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},L0=0,sd=new $,Ms=new Rn,Ki=new at,Wo=new $,wa=new $,N0=new $,D0=new Rn,ad=new $(1,0,0),od=new $(0,1,0),ld=new $(0,0,1),cd={type:"added"},U0={type:"removed"},Ss={type:"childadded",child:null},Au={type:"childremoved",child:null},Wt=class i extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new $,t=new Ui,n=new Rn,r=new $(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new rt}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.premultiply(Ms),this}rotateX(e){return this.rotateOnAxis(ad,e)}rotateY(e){return this.rotateOnAxis(od,e)}rotateZ(e){return this.rotateOnAxis(ld,e)}translateOnAxis(e,t){return sd.copy(e).applyQuaternion(this.quaternion),this.position.add(sd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ad,e)}translateY(e){return this.translateOnAxis(od,e)}translateZ(e){return this.translateOnAxis(ld,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wo.copy(e):Wo.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(wa,Wo,this.up):Ki.lookAt(Wo,wa,this.up),this.quaternion.setFromRotationMatrix(Ki),r&&(Ki.extractRotation(r.matrixWorld),Ms.setFromRotationMatrix(Ki),this.quaternion.premultiply(Ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cd),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(U0),Au.child=e,this.dispatchEvent(Au),Au.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cd),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,e,N0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,D0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let u=0,l=c.length;u<l;u++){let h=c[u];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),u=a(e.textures),l=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),l.length>0&&(n.images=l),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){let c=[];for(let u in o){let l=o[u];delete l.metadata,c.push(l)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Wt.DEFAULT_UP=new $(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var lt=class extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},O0={type:"move"},ks=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(let y of e.hand.values()){let v=t.getJointPose(y,n),m=this._getHandJoint(u,y);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}let l=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=l.position.distanceTo(h.position),p=.02,g=.005;u.inputState.pinching&&f>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(O0)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new lt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},yp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},qo={h:0,s:0,l:0};function Ru(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ke=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ot.workingColorSpace){if(e=vh(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ru(a,s,e+1/3),this.g=Ru(a,s,e),this.b=Ru(a,s,e-1/3)}return ot.colorSpaceToWorking(this,r),this}setStyle(e,t=Gt){function n(s){s!==void 0&&parseFloat(s)<1&&Ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){let n=yp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}copyLinearToSRGB(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return ot.workingToColorSpace(An.copy(this),e),Math.round(vt(An.r*255,0,255))*65536+Math.round(vt(An.g*255,0,255))*256+Math.round(vt(An.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(An.copy(this),t);let n=An.r,r=An.g,s=An.b,a=Math.max(n,r,s),o=Math.min(n,r,s),c,u,l=(o+a)/2;if(o===a)c=0,u=0;else{let h=a-o;switch(u=l<=.5?h/(a+o):h/(2-a-o),a){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=u,e.l=l,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=Gt){ot.workingToColorSpace(An.copy(this),e);let t=An.r,n=An.g,r=An.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(xr),this.setHSL(xr.h+e,xr.s+t,xr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xr),e.getHSL(qo);let n=Ua(xr.h,qo.h,t),r=Ua(xr.s,qo.s,t),s=Ua(xr.l,qo.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},An=new ke;ke.NAMES=yp;var za=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ke(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Er=class extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},mi=new $,Zi=new $,Cu=new $,Ji=new $,bs=new $,Ts=new $,ud=new $,Iu=new $,Pu=new $,Lu=new $,Nu=new Lt,Du=new Lt,Uu=new Lt,Tr=class i{constructor(e=new $,t=new $,n=new $){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),mi.subVectors(e,t),r.cross(mi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){mi.subVectors(r,t),Zi.subVectors(n,t),Cu.subVectors(e,t);let a=mi.dot(mi),o=mi.dot(Zi),c=mi.dot(Cu),u=Zi.dot(Zi),l=Zi.dot(Cu),h=a*u-o*o;if(h===0)return s.set(0,0,0),null;let f=1/h,p=(u*c-o*l)*f,g=(a*l-o*c)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,Ji)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ji.x),c.addScaledVector(a,Ji.y),c.addScaledVector(o,Ji.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Nu.setScalar(0),Du.setScalar(0),Uu.setScalar(0),Nu.fromBufferAttribute(e,t),Du.fromBufferAttribute(e,n),Uu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Nu,s.x),a.addScaledVector(Du,s.y),a.addScaledVector(Uu,s.z),a}static isFrontFacing(e,t,n,r){return mi.subVectors(n,t),Zi.subVectors(e,t),mi.cross(Zi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),mi.cross(Zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;bs.subVectors(r,n),Ts.subVectors(s,n),Iu.subVectors(e,n);let c=bs.dot(Iu),u=Ts.dot(Iu);if(c<=0&&u<=0)return t.copy(n);Pu.subVectors(e,r);let l=bs.dot(Pu),h=Ts.dot(Pu);if(l>=0&&h<=l)return t.copy(r);let f=c*h-l*u;if(f<=0&&c>=0&&l<=0)return a=c/(c-l),t.copy(n).addScaledVector(bs,a);Lu.subVectors(e,s);let p=bs.dot(Lu),g=Ts.dot(Lu);if(g>=0&&p<=g)return t.copy(s);let y=p*u-c*g;if(y<=0&&u>=0&&g<=0)return o=u/(u-g),t.copy(n).addScaledVector(Ts,o);let v=l*g-p*h;if(v<=0&&h-l>=0&&p-g>=0)return ud.subVectors(s,r),o=(h-l)/(h-l+(p-g)),t.copy(r).addScaledVector(ud,o);let m=1/(v+y+f);return a=y*m,o=f*m,t.copy(n).addScaledVector(bs,a).addScaledVector(Ts,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Fn=class{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,gi):gi.fromBufferAttribute(s,a),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xo.copy(n.boundingBox)),Xo.applyMatrix4(e.matrixWorld),this.union(Xo)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Aa),Yo.subVectors(this.max,Aa),Es.subVectors(e.a,Aa),ws.subVectors(e.b,Aa),As.subVectors(e.c,Aa),yr.subVectors(ws,Es),Mr.subVectors(As,ws),zr.subVectors(Es,As);let t=[0,-yr.z,yr.y,0,-Mr.z,Mr.y,0,-zr.z,zr.y,yr.z,0,-yr.x,Mr.z,0,-Mr.x,zr.z,0,-zr.x,-yr.y,yr.x,0,-Mr.y,Mr.x,0,-zr.y,zr.x,0];return!Ou(t,Es,ws,As,Yo)||(t=[1,0,0,0,1,0,0,0,1],!Ou(t,Es,ws,As,Yo))?!1:(Ko.crossVectors(yr,Mr),t=[Ko.x,Ko.y,Ko.z],Ou(t,Es,ws,As,Yo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ji=[new $,new $,new $,new $,new $,new $,new $,new $],gi=new $,Xo=new Fn,Es=new $,ws=new $,As=new $,yr=new $,Mr=new $,zr=new $,Aa=new $,Yo=new $,Ko=new $,Gr=new $;function Ou(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Gr.fromArray(i,s);let o=r.x*Math.abs(Gr.x)+r.y*Math.abs(Gr.y)+r.z*Math.abs(Gr.z),c=e.dot(Gr),u=t.dot(Gr),l=n.dot(Gr);if(Math.max(-Math.max(c,u,l),Math.min(c,u,l))>o)return!1}return!0}var fn=new $,Zo=new Ze,F0=0,Jt=class extends Mi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:F0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=mh,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zo.fromBufferAttribute(this,t),Zo.applyMatrix3(e),this.setXY(t,Zo.x,Zo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix3(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_i(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_i(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_i(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_i(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),r=Pt(r,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ga=class extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Va=class extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var St=class extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}},H0=new Fn,Ra=new $,Fu=new $,Bn=class{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):H0.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ra.subVectors(e,this.center);let t=Ra.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ra,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ra.copy(e.center).add(Fu)),this.expandByPoint(Ra.copy(e.center).sub(Fu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},B0=0,ri=new at,Hu=new Wt,Rs=new $,Yn=new Fn,Ca=new Fn,yn=new $,qt=class i extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(c0(e)?Va:Ga)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new rt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,n){return ri.makeTranslation(e,t,n),this.applyMatrix4(ri),this}scale(e,t,n){return ri.makeScale(e,t,n),this.applyMatrix4(ri),this}lookAt(e){return Hu.lookAt(e),Hu.updateMatrix(),this.applyMatrix4(Hu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new St(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Yn.setFromBufferAttribute(s),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){let n=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Ca.setFromBufferAttribute(o),this.morphTargetsRelative?(yn.addVectors(Yn.min,Ca.min),Yn.expandByPoint(yn),yn.addVectors(Yn.max,Ca.max),Yn.expandByPoint(yn)):(Yn.expandByPoint(Ca.min),Yn.expandByPoint(Ca.max))}Yn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)yn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(yn));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let u=0,l=o.count;u<l;u++)yn.fromBufferAttribute(o,u),c&&(Rs.fromBufferAttribute(e,u),yn.add(Rs)),r=Math.max(r,n.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Jt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let S=0;S<n.count;S++)o[S]=new $,c[S]=new $;let u=new $,l=new $,h=new $,f=new Ze,p=new Ze,g=new Ze,y=new $,v=new $;function m(S,_,E){u.fromBufferAttribute(n,S),l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,E),f.fromBufferAttribute(s,S),p.fromBufferAttribute(s,_),g.fromBufferAttribute(s,E),l.sub(u),h.sub(u),p.sub(f),g.sub(f);let A=1/(p.x*g.y-g.x*p.y);isFinite(A)&&(y.copy(l).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(A),v.copy(h).multiplyScalar(p.x).addScaledVector(l,-g.x).multiplyScalar(A),o[S].add(y),o[_].add(y),o[E].add(y),c[S].add(v),c[_].add(v),c[E].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let S=0,_=x.length;S<_;++S){let E=x[S],A=E.start,M=E.count;for(let P=A,U=A+M;P<U;P+=3)m(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let R=new $,b=new $,I=new $,L=new $;function D(S){I.fromBufferAttribute(r,S),L.copy(I);let _=o[S];R.copy(_),R.sub(I.multiplyScalar(I.dot(_))).normalize(),b.crossVectors(L,_);let A=b.dot(c[S])<0?-1:1;a.setXYZW(S,R.x,R.y,R.z,A)}for(let S=0,_=x.length;S<_;++S){let E=x[S],A=E.start,M=E.count;for(let P=A,U=A+M;P<U;P+=3)D(e.getX(P+0)),D(e.getX(P+1)),D(e.getX(P+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let r=new $,s=new $,a=new $,o=new $,c=new $,u=new $,l=new $,h=new $;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),y=e.getX(f+1),v=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,v),l.subVectors(a,s),h.subVectors(r,s),l.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,v),o.add(l),c.add(l),u.add(l),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(v,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),l.subVectors(a,s),h.subVectors(r,s),l.cross(h),n.setXYZ(f+0,l.x,l.y,l.z),n.setXYZ(f+1,l.x,l.y,l.z),n.setXYZ(f+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(o,c){let u=o.array,l=o.itemSize,h=o.normalized,f=new u.constructor(c.length*l),p=0,g=0;for(let y=0,v=c.length;y<v;y++){o.isInterleavedBufferAttribute?p=c[y]*o.data.stride+o.offset:p=c[y]*l;for(let m=0;m<l;m++)f[g++]=u[p++]}return new Jt(f,l,h)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let c=r[o],u=e(c,n);t.setAttribute(o,u)}let s=this.morphAttributes;for(let o in s){let c=[],u=s[o];for(let l=0,h=u.length;l<h;l++){let f=u[l],p=e(f,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let u=n[c];e.data.attributes[c]=u.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let u=this.morphAttributes[c],l=[];for(let h=0,f=u.length;h<f;h++){let p=u[h];l.push(p.toJSON(e.data))}l.length>0&&(r[c]=l,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let u in r){let l=r[u];this.setAttribute(u,l.clone(t))}let s=e.morphAttributes;for(let u in s){let l=[],h=s[u];for(let f=0,p=h.length;f<p;f++)l.push(h[f].clone(t));this.morphAttributes[u]=l}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let u=0,l=a.length;u<l;u++){let h=a[u];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},zs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=mh,this.updateRanges=[],this.version=0,this.uuid=yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Un=new $,Gs=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.applyMatrix4(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.applyNormalMatrix(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.transformDirection(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=_i(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_i(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_i(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_i(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_i(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),r=Pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),r=Pt(r,this.array),s=Pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Ha("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ha("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Bu=new $,k0=new $,z0=new rt,vi=class{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Bu.subVectors(n,t).cross(k0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Bu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||z0.getNormalMatrix(e),r=this.coplanarPoint(Bu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},G0=0,Hn=class extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=ta,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sh,this.blendDst=ah,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ml,this.stencilZFail=ml,this.stencilZPass=ml,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ke(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new vi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ze().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ze().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var $i=new $,ku=new $,Jo=new $,jo=new $,jr=class{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=$i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,t),$i.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ku.copy(e).add(t).multiplyScalar(.5),Jo.copy(t).sub(e).normalize(),jo.copy(this.origin).sub(ku);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Jo),o=jo.dot(this.direction),c=-jo.dot(Jo),u=jo.lengthSq(),l=Math.abs(1-a*a),h,f,p,g;if(l>0)if(h=a*c-o,f=a*o-c,g=s*l,h>=0)if(f>=-g)if(f<=g){let y=1/l;h*=y,f*=y,p=h*(h+a*f+2*o)+f*(a*h+f+2*c)+u}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+u;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+u;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+u):f<=g?(h=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+u):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+u);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ku).addScaledVector(Jo,f),p}intersectSphere(e,t){if(e.radius<0)return null;$i.subVectors(e.center,this.origin);let n=$i.dot(this.direction),r=$i.dot($i)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c,u=1/this.direction.x,l=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),l>=0?(s=(e.min.y-f.y)*l,a=(e.max.y-f.y)*l):(s=(e.max.y-f.y)*l,a=(e.min.y-f.y)*l),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,t,n,r,s){let a=this.origin,o=this.direction,c=o.x,u=o.y,l=o.z,h=e.x-a.x,f=e.y-a.y,p=e.z-a.z,g=t.x-a.x,y=t.y-a.y,v=t.z-a.z,m=n.x-a.x,x=n.y-a.y,R=n.z-a.z,b=Math.abs(c),I=Math.abs(u),L=Math.abs(l),D,S,_,E,A,M,P,U,k,Y,J,ne;if(b>=I&&b>=L?(_=c,M=h,k=g,ne=m,c>=0?(D=u,S=l,E=f,A=p,P=y,U=v,Y=x,J=R):(D=l,S=u,E=p,A=f,P=v,U=y,Y=R,J=x)):I>=L?(_=u,M=f,k=y,ne=x,u>=0?(D=l,S=c,E=p,A=h,P=v,U=g,Y=R,J=m):(D=c,S=l,E=h,A=p,P=g,U=v,Y=m,J=R)):(_=l,M=p,k=v,ne=R,l>=0?(D=c,S=u,E=h,A=f,P=g,U=y,Y=m,J=x):(D=u,S=c,E=f,A=h,P=y,U=g,Y=x,J=m)),_===0)return null;let ie=D/_,se=S/_,re=1/_,Re=E-ie*M,Ne=A-se*M,Qe=P-ie*k,me=U-se*k,oe=Y-ie*ne,G=J-se*ne,Z=oe*me-G*Qe,fe=Re*G-Ne*oe,ve=Qe*Ne-me*Re;if(r){if(Z<0||fe<0||ve<0)return null}else if((Z<0||fe<0||ve<0)&&(Z>0||fe>0||ve>0))return null;let Me=Z+fe+ve;if(Me===0)return null;let Oe=re*(Z*M+fe*k+ve*ne);return(Me>0?Oe<0:Oe>0)?null:this.at(Oe/Me,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Cn=class extends Hn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=Vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},hd=new at,Vr=new jr,$o=new Bn,fd=new $,Qo=new $,el=new $,tl=new $,zu=new $,nl=new $,dd=new $,il=new $,Ue=class extends Wt{constructor(e=new qt,t=new Cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){nl.set(0,0,0);for(let c=0,u=s.length;c<u;c++){let l=o[c],h=s[c];l!==0&&(zu.fromBufferAttribute(h,e),a?nl.addScaledVector(zu,l):nl.addScaledVector(zu.sub(t),l))}t.add(nl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(s),Vr.copy(e.ray).recast(e.near),!($o.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere($o,fd)===null||Vr.origin.distanceToSquared(fd)>(e.far-e.near)**2))&&(hd.copy(s).invert(),Vr.copy(e.ray).applyMatrix4(hd),!(n.boundingBox!==null&&Vr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Vr)))}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,l=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){let v=f[g],m=a[v.materialIndex],x=Math.max(v.start,p.start),R=Math.min(o.count,Math.min(v.start+v.count,p.start+p.count));for(let b=x,I=R;b<I;b+=3){let L=o.getX(b),D=o.getX(b+1),S=o.getX(b+2);r=rl(this,m,e,n,u,l,h,L,D,S),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let v=g,m=y;v<m;v+=3){let x=o.getX(v),R=o.getX(v+1),b=o.getX(v+2);r=rl(this,a,e,n,u,l,h,x,R,b),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){let v=f[g],m=a[v.materialIndex],x=Math.max(v.start,p.start),R=Math.min(c.count,Math.min(v.start+v.count,p.start+p.count));for(let b=x,I=R;b<I;b+=3){let L=b,D=b+1,S=b+2;r=rl(this,m,e,n,u,l,h,L,D,S),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let v=g,m=y;v<m;v+=3){let x=v,R=v+1,b=v+2;r=rl(this,a,e,n,u,l,h,x,R,b),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}};function V0(i,e,t,n,r,s,a,o){let c;if(e.side===Sn?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===Bi,o),c===null)return null;il.copy(o),il.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(il);return u<t.near||u>t.far?null:{distance:u,point:il.clone(),object:i}}function rl(i,e,t,n,r,s,a,o,c,u){i.getVertexPosition(o,Qo),i.getVertexPosition(c,el),i.getVertexPosition(u,tl);let l=V0(i,e,t,n,Qo,el,tl,dd);if(l){let h=new $;Tr.getBarycoord(dd,Qo,el,tl,h),r&&(l.uv=Tr.getInterpolatedAttribute(r,o,c,u,h,new Ze)),s&&(l.uv1=Tr.getInterpolatedAttribute(s,o,c,u,h,new Ze)),a&&(l.normal=Tr.getInterpolatedAttribute(a,o,c,u,h,new $),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));let f={a:o,b:c,c:u,normal:new $,materialIndex:0};Tr.getNormal(Qo,el,tl,f.normal),l.face=f,l.barycoord=h}return l}var Ia=new Lt,pd=new Lt,md=new Lt,W0=new Lt,gd=new at,sl=new $,Gu=new Bn,vd=new at,Vu=new jr,Wa=class extends Ue{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Yu,this.bindMatrix=new at,this.bindMatrixInverse=new at,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Fn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,sl),this.boundingBox.expandByPoint(sl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Bn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,sl),this.boundingSphere.expandByPoint(sl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gu.copy(this.boundingSphere),Gu.applyMatrix4(r),e.ray.intersectsSphere(Gu)!==!1&&(vd.copy(r).invert(),Vu.copy(e.ray).applyMatrix4(vd),!(this.boundingBox!==null&&Vu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Vu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Lt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Yu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===rp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ke("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;pd.fromBufferAttribute(r.attributes.skinIndex,e),md.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(Ia.copy(t),t.set(0,0,0,0)):(Ia.set(...t,1),t.set(0,0,0)),Ia.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let a=md.getComponent(s);if(a!==0){let o=pd.getComponent(s);gd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(W0.copy(Ia).applyMatrix4(gd),a)}}return t.isVector4&&(t.w=Ia.w),t.applyMatrix4(this.bindMatrixInverse)}},Vs=class extends Wt{constructor(){super(),this.isBone=!0,this.type="Bone"}},tr=class extends vn{constructor(e=null,t=1,n=1,r,s,a,o,c,u=Vt,l=Vt,h,f){super(null,a,o,c,u,l,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},_d=new at,q0=new at,qa=class i{constructor(e=[],t=[]){this.uuid=yi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ke("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new at)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new at;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:q0;_d.multiplyMatrices(o,t[s]),_d.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new tr(t,e,e,Jn,Zn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let s=e.bones[n],a=t[s];a===void 0&&(Ke("Skeleton: No bone found with UUID:",s),a=new Vs),this.bones.push(a),this.boneInverses.push(new at().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let a=t[r];e.bones.push(a.uuid);let o=n[r];e.boneInverses.push(o.toArray())}return e}},nr=class extends Jt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Cs=new at,xd=new at,al=[],yd=new Fn,X0=new at,Pa=new Ue,La=new Bn,$r=class extends Ue{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new nr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,X0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Fn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Cs),yd.copy(e.boundingBox).applyMatrix4(Cs),this.boundingBox.union(yd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Cs),La.copy(e.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(La)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Pa.geometry=this.geometry,Pa.material=this.material,Pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),La.copy(this.boundingSphere),La.applyMatrix4(n),e.ray.intersectsSphere(La)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Cs),xd.multiplyMatrices(n,Cs),Pa.matrixWorld=xd,Pa.raycast(e,al);for(let a=0,o=al.length;a<o;a++){let c=al[a];c.instanceId=s,c.object=this,t.push(c)}al.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new nr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new tr(new Float32Array(r*this.count),r,this.count,Jl,Zn));let s=this.morphTexture.source.data.data,a=0;for(let u=0;u<n.length;u++)a+=n[u];let o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;return s[c]=o,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Wr=new Bn,Y0=new Ze(.5,.5),ol=new $,Ws=class{constructor(e=new vi,t=new vi,n=new vi,r=new vi,s=new vi,a=new vi){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xi,n=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],u=s[3],l=s[4],h=s[5],f=s[6],p=s[7],g=s[8],y=s[9],v=s[10],m=s[11],x=s[12],R=s[13],b=s[14],I=s[15];if(r[0].setComponents(u-a,p-l,m-g,I-x).normalize(),r[1].setComponents(u+a,p+l,m+g,I+x).normalize(),r[2].setComponents(u+o,p+h,m+y,I+R).normalize(),r[3].setComponents(u-o,p-h,m-y,I-R).normalize(),n)r[4].setComponents(c,f,v,b).normalize(),r[5].setComponents(u-c,p-f,m-v,I-b).normalize();else if(r[4].setComponents(u-c,p-f,m-v,I-b).normalize(),t===xi)r[5].setComponents(u+c,p+f,m+v,I+b).normalize();else if(t===Os)r[5].setComponents(c,f,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(e){Wr.center.set(0,0,0);let t=Y0.distanceTo(e.center);return Wr.radius=.7071067811865476+t,Wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(ol.x=r.normal.x>0?e.max.x:e.min.x,ol.y=r.normal.y>0?e.max.y:e.min.y,ol.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ol)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var qs=class extends Hn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Al=new $,Rl=new $,Md=new at,Na=new jr,ll=new Bn,Wu=new $,Sd=new $,Qr=class extends Wt{constructor(e=new qt,t=new qs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Al.fromBufferAttribute(t,r-1),Rl.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Al.distanceTo(Rl);e.setAttribute("lineDistance",new St(n,1))}else Ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ll.copy(n.boundingSphere),ll.applyMatrix4(r),ll.radius+=s,e.ray.intersectsSphere(ll)===!1)return;Md.copy(r).invert(),Na.copy(e.ray).applyMatrix4(Md);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=this.isLineSegments?2:1,l=n.index,f=n.attributes.position;if(l!==null){let p=Math.max(0,a.start),g=Math.min(l.count,a.start+a.count);for(let y=p,v=g-1;y<v;y+=u){let m=l.getX(y),x=l.getX(y+1),R=cl(this,e,Na,c,m,x,y);R&&t.push(R)}if(this.isLineLoop){let y=l.getX(g-1),v=l.getX(p),m=cl(this,e,Na,c,y,v,g-1);m&&t.push(m)}}else{let p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let y=p,v=g-1;y<v;y+=u){let m=cl(this,e,Na,c,y,y+1,y);m&&t.push(m)}if(this.isLineLoop){let y=cl(this,e,Na,c,g-1,p,g-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function cl(i,e,t,n,r,s,a){let o=i.geometry.attributes.position;if(Al.fromBufferAttribute(o,r),Rl.fromBufferAttribute(o,s),t.distanceSqToSegment(Al,Rl,Wu,Sd)>n)return;Wu.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(Wu);if(!(u<e.near||u>e.far))return{distance:u,point:Sd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var bd=new $,Td=new $,Xa=class extends Qr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)bd.fromBufferAttribute(t,r),Td.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+bd.distanceTo(Td);e.setAttribute("lineDistance",new St(n,1))}else Ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ya=class extends Qr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Xs=class extends Hn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ed=new at,Zu=new jr,ul=new Bn,hl=new $,es=class extends Wt{constructor(e=new qt,t=new Xs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ul.copy(n.boundingSphere),ul.applyMatrix4(r),ul.radius+=s,e.ray.intersectsSphere(ul)===!1)return;Ed.copy(r).invert(),Zu.copy(e.ray).applyMatrix4(Ed);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=f,y=p;g<y;g++){let v=u.getX(g);hl.fromBufferAttribute(h,v),wd(hl,v,c,r,e,t,this)}}else{let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=f,y=p;g<y;g++)hl.fromBufferAttribute(h,g),wd(hl,g,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function wd(i,e,t,n,r,s,a){let o=Zu.distanceSqToPoint(i);if(o<t){let c=new $;Zu.closestPointToPoint(i,c),c.applyMatrix4(n);let u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ka=class extends vn{constructor(e=[],t=Pr,n,r,s,a,o,c,u,l){super(e,t,n,r,s,a,o,c,u,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ys=class extends vn{constructor(e,t,n,r,s,a,o,c,u){super(e,t,n,r,s,a,o,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};var wr=class extends vn{constructor(e,t,n=Ti,r,s,a,o=Vt,c=Vt,u,l=Di,h=1){if(l!==Di&&l!==Lr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,r,s,a,o,c,l,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Cl=class extends wr{constructor(e,t=Ti,n=Pr,r,s,a=Vt,o=Vt,c,u=Di){let l={width:e,height:e,depth:1},h=[l,l,l,l,l,l];super(e,e,t,n,r,s,a,o,c,u),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Za=class extends vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},pn=class i extends qt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],u=[],l=[],h=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new St(u,3)),this.setAttribute("normal",new St(l,3)),this.setAttribute("uv",new St(h,2));function g(y,v,m,x,R,b,I,L,D,S,_){let E=b/D,A=I/S,M=b/2,P=I/2,U=L/2,k=D+1,Y=S+1,J=0,ne=0,ie=new $;for(let se=0;se<Y;se++){let re=se*A-P;for(let Re=0;Re<k;Re++){let Ne=Re*E-M;ie[y]=Ne*x,ie[v]=re*R,ie[m]=U,u.push(ie.x,ie.y,ie.z),ie[y]=0,ie[v]=0,ie[m]=L>0?1:-1,l.push(ie.x,ie.y,ie.z),h.push(Re/D),h.push(1-se/S),J+=1}}for(let se=0;se<S;se++)for(let re=0;re<D;re++){let Re=f+re+k*se,Ne=f+re+k*(se+1),Qe=f+(re+1)+k*(se+1),me=f+(re+1)+k*se;c.push(Re,Ne,me),c.push(Ne,Qe,me),ne+=6}o.addGroup(p,ne,_),p+=ne,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Ja=class i extends qt{constructor(e=1,t=1,n=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let a=[],o=[],c=[],u=[],l=t/2,h=Math.PI/2*e,f=t,p=2*h+f,g=n*2+s,y=r+1,v=new $,m=new $;for(let x=0;x<=g;x++){let R=0,b=0,I=0,L=0;if(x<=n){let _=x/n,E=_*Math.PI/2;b=-l-e*Math.cos(E),I=e*Math.sin(E),L=-e*Math.cos(E),R=_*h}else if(x<=n+s){let _=(x-n)/s;b=-l+_*t,I=e,L=0,R=h+_*f}else{let _=(x-n-s)/n,E=_*Math.PI/2;b=l+e*Math.sin(E),I=e*Math.cos(E),L=e*Math.sin(E),R=h+f+_*h}let D=Math.max(0,Math.min(1,R/p)),S=0;x===0?S=.5/r:x===g&&(S=-.5/r);for(let _=0;_<=r;_++){let E=_/r,A=E*Math.PI*2,M=Math.sin(A),P=Math.cos(A);m.x=-I*P,m.y=b,m.z=I*M,o.push(m.x,m.y,m.z),v.set(-I*P,L,I*M),v.normalize(),c.push(v.x,v.y,v.z),u.push(E+S,D)}if(x>0){let _=(x-1)*y;for(let E=0;E<r;E++){let A=_+E,M=_+E+1,P=x*y+E,U=x*y+E+1;a.push(A,M,P),a.push(M,U,P)}}}this.setIndex(a),this.setAttribute("position",new St(o,3)),this.setAttribute("normal",new St(c,3)),this.setAttribute("uv",new St(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var Ks=class i extends qt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let u=this;r=Math.floor(r),s=Math.floor(s);let l=[],h=[],f=[],p=[],g=0,y=[],v=n/2,m=0;x(),a===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(l),this.setAttribute("position",new St(h,3)),this.setAttribute("normal",new St(f,3)),this.setAttribute("uv",new St(p,2));function x(){let b=new $,I=new $,L=0,D=(t-e)/n;for(let S=0;S<=s;S++){let _=[],E=S/s,A=E*(t-e)+e;for(let M=0;M<=r;M++){let P=M/r,U=P*c+o,k=Math.sin(U),Y=Math.cos(U);I.x=A*k,I.y=-E*n+v,I.z=A*Y,h.push(I.x,I.y,I.z),b.set(k,D,Y).normalize(),f.push(b.x,b.y,b.z),p.push(P,1-E),_.push(g++)}y.push(_)}for(let S=0;S<r;S++)for(let _=0;_<s;_++){let E=y[_][S],A=y[_+1][S],M=y[_+1][S+1],P=y[_][S+1];(e>0||_!==0)&&(l.push(E,A,P),L+=3),(t>0||_!==s-1)&&(l.push(A,M,P),L+=3)}u.addGroup(m,L,0),m+=L}function R(b){let I=g,L=new Ze,D=new $,S=0,_=b===!0?e:t,E=b===!0?1:-1;for(let M=1;M<=r;M++)h.push(0,v*E,0),f.push(0,E,0),p.push(.5,.5),g++;let A=g;for(let M=0;M<=r;M++){let U=M/r*c+o,k=Math.cos(U),Y=Math.sin(U);D.x=_*Y,D.y=v*E,D.z=_*k,h.push(D.x,D.y,D.z),f.push(0,E,0),L.x=k*.5+.5,L.y=Y*.5*E+.5,p.push(L.x,L.y),g++}for(let M=0;M<r;M++){let P=I+M,U=A+M;b===!0?l.push(U,U+1,P):l.push(U+1,U,P),S+=3}u.addGroup(m,S,b===!0?1:2),m+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ja=class i extends Ks{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ts=class i extends qt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),u=o+1,l=c+1,h=e/o,f=t/c,p=[],g=[],y=[],v=[];for(let m=0;m<l;m++){let x=m*f-a;for(let R=0;R<u;R++){let b=R*h-s;g.push(b,-x,0),y.push(0,0,1),v.push(R/o),v.push(1-m/c)}}for(let m=0;m<c;m++)for(let x=0;x<o;x++){let R=x+u*m,b=x+u*(m+1),I=x+1+u*(m+1),L=x+1+u*m;p.push(R,b,L),p.push(b,I,L)}this.setIndex(p),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(y,3)),this.setAttribute("uv",new St(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ar=class i extends qt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),u=0,l=[],h=new $,f=new $,p=[],g=[],y=[],v=[];for(let m=0;m<=n;m++){let x=[],R=m/n,b=a+R*o,I=e*Math.cos(b),L=Math.sqrt(e*e-I*I),D=0;m===0&&a===0?D=.5/t:m===n&&c===Math.PI&&(D=-.5/t);for(let S=0;S<=t;S++){let _=S/t,E=r+_*s;h.x=-L*Math.cos(E),h.y=I,h.z=L*Math.sin(E),g.push(h.x,h.y,h.z),f.copy(h).normalize(),y.push(f.x,f.y,f.z),v.push(_+D,1-R),x.push(u++)}l.push(x)}for(let m=0;m<n;m++)for(let x=0;x<t;x++){let R=l[m][x+1],b=l[m][x],I=l[m+1][x],L=l[m+1][x+1];(m!==0||a>0)&&p.push(R,b,L),(m!==n-1||c<Math.PI)&&p.push(b,I,L)}this.setIndex(p),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(y,3)),this.setAttribute("uv",new St(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Rr=class i extends qt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let c=[],u=[],l=[],h=[],f=new $,p=new $,g=new $;for(let y=0;y<=n;y++){let v=a+y/n*o;for(let m=0;m<=r;m++){let x=m/r*s;p.x=(e+t*Math.cos(v))*Math.cos(x),p.y=(e+t*Math.cos(v))*Math.sin(x),p.z=t*Math.sin(v),u.push(p.x,p.y,p.z),f.x=e*Math.cos(x),f.y=e*Math.sin(x),g.subVectors(p,f).normalize(),l.push(g.x,g.y,g.z),h.push(m/r),h.push(y/n)}}for(let y=1;y<=n;y++)for(let v=1;v<=r;v++){let m=(r+1)*y+v-1,x=(r+1)*(y-1)+v-1,R=(r+1)*(y-1)+v,b=(r+1)*y+v;c.push(m,x,b),c.push(x,R,b)}this.setIndex(c),this.setAttribute("position",new St(u,3)),this.setAttribute("normal",new St(l,3)),this.setAttribute("uv",new St(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function cs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(Ad(r))r.isRenderTargetTexture?(Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Ad(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function In(i){let e={};for(let t=0;t<i.length;t++){let n=cs(i[t]);for(let r in n)e[r]=n[r]}return e}function Ad(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function K0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function xh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}var cr={clone:cs,merge:In},Z0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,J0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qt=class extends Hn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Z0,this.fragmentShader=J0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cs(e.uniforms),this.uniformsGroups=K0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new ke().setHex(r.value);break;case"v2":this.uniforms[n].value=new Ze().fromArray(r.value);break;case"v3":this.uniforms[n].value=new $().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Lt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new rt().fromArray(r.value);break;case"m4":this.uniforms[n].value=new at().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Zs=class extends Qt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},nn=class extends Hn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=So,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},kn=class extends nn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var $a=class extends Hn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=So,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=Vl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Il=class extends Hn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=op,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Pl=class extends Hn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function br(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function gl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function j0(i){function e(r,s){return i[r]-i[s]}let t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Rd(i,e,t){let n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let c=0;c!==e;++c)r[a++]=i[o+c]}return r}function $0(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}var Oi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break t}a=t.length;break n}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ll=class extends Oi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qr,endingEnd:qr}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Xr:s=e,o=2*t-n;break;case Oa:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Xr:a=e,c=2*n-t;break;case Oa:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}let u=(n-t)*.5,l=this.valueSize;this._weightPrev=u/(t-o),this._weightNext=u/(c-n),this._offsetPrev=s*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,l=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(r-t),y=g*g,v=y*g,m=-f*v+2*f*y-f*g,x=(1+f)*v+(-1.5-2*f)*y+(-.5+f)*g+1,R=(-1-p)*v+(1.5+p)*y+.5*g,b=p*v-p*y;for(let I=0;I!==o;++I)s[I]=m*a[l+I]+x*a[u+I]+R*a[c+I]+b*a[h+I];return s}},Qa=class extends Oi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,l=(n-t)/(r-t),h=1-l;for(let f=0;f!==o;++f)s[f]=a[u+f]*h+a[c+f]*l;return s}},Nl=class extends Oi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Dl=class extends Oi{interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,l=this.inTangents,h=this.outTangents;if(!l||!h){let g=(n-t)/(r-t),y=1-g;for(let v=0;v!==o;++v)s[v]=a[u+v]*y+a[c+v]*g;return s}let f=o*2,p=e-1;for(let g=0;g!==o;++g){let y=a[u+g],v=a[c+g],m=p*f+g*2,x=h[m],R=h[m+1],b=e*f+g*2,I=l[b],L=l[b+1],D=eg(n,t,x,I,r);s[g]=Mp(D,y,R,L,v)}return s}};function Mp(i,e,t,n,r){let s=1-i;return s*s*s*e+3*s*s*i*t+3*s*i*i*n+i*i*i*r}function Q0(i,e,t,n,r){let s=1-i;return 3*s*s*(t-e)+6*s*i*(n-t)+3*i*i*(r-n)}function eg(i,e,t,n,r){let s=(i-e)/(r-e);for(let a=0;a<8;a++){let o=Mp(s,e,t,n,r)-i;if(Math.abs(o)<1e-10)break;let c=Q0(s,e,t,n,r);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}var zn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=br(t,this.TimeBufferType),this.values=br(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:br(e.times,Array),values:br(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),gl(e.settings)&&(n.settings={inTangents:br(e.settings.inTangents,Array),outTangents:br(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Qa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Dl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Kr:t=this.InterpolantFactoryMethodDiscrete;break;case Zr:t=this.InterpolantFactoryMethodLinear;break;case pl:t=this.InterpolantFactoryMethodSmooth;break;case Ku:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ke("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Kr;case this.InterpolantFactoryMethodLinear:return Zr;case this.InterpolantFactoryMethodSmooth:return pl;case this.InterpolantFactoryMethodBezier:return Ku}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;gl(this.settings)&&(Cd(this.settings.inTangents,e),Cd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(tt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(tt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){tt("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){tt("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&u0(r))for(let o=0,c=r.length;o!==c;++o){let u=r[o];if(isNaN(u)){tt("KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===pl,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,u=e[o],l=e[o+1];if(u!==l&&(o!==1||u!==e[0]))if(r)c=!0;else{let h=o*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){let y=t[h+g];if(y!==t[f+g]||y!==t[p+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,u=0;u!==n;++u)t[c+u]=t[o+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,gl(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Cd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}zn.prototype.ValueTypeName="";zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=Zr;var ir=class extends zn{constructor(e,t,n){super(e,t,n)}};ir.prototype.ValueTypeName="bool";ir.prototype.ValueBufferType=Array;ir.prototype.DefaultInterpolation=Kr;ir.prototype.InterpolantFactoryMethodLinear=void 0;ir.prototype.InterpolantFactoryMethodSmooth=void 0;var eo=class extends zn{constructor(e,t,n,r){super(e,t,n,r)}};eo.prototype.ValueTypeName="color";var rr=class extends zn{constructor(e,t,n,r){super(e,t,n,r)}};rr.prototype.ValueTypeName="number";var Ul=class extends Oi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t),u=e*o;for(let l=u+o;u!==l;u+=4)Rn.slerpFlat(s,0,a,u-o,a,u,c);return s}},sr=class extends zn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ul(this.times,this.values,this.getValueSize(),e)}};sr.prototype.ValueTypeName="quaternion";sr.prototype.InterpolantFactoryMethodSmooth=void 0;var ar=class extends zn{constructor(e,t,n){super(e,t,n)}};ar.prototype.ValueTypeName="string";ar.prototype.ValueBufferType=Array;ar.prototype.DefaultInterpolation=Kr;ar.prototype.InterpolantFactoryMethodLinear=void 0;ar.prototype.InterpolantFactoryMethodSmooth=void 0;var Cr=class extends zn{constructor(e,t,n,r){super(e,t,n,r)}};Cr.prototype.ValueTypeName="vector";var ns=class{constructor(e="",t=-1,n=[],r=Lc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=yi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(ng(n[a]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(zn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let s=t.length,a=[];for(let o=0;o<s;o++){let c=[],u=[];c.push((o+s-1)%s,o,(o+1)%s),u.push(0,1,0);let l=j0(c);c=Rd(c,1,l),u=Rd(u,1,l),!r&&c[0]===0&&(c.push(s),u.push(u[0])),a.push(new rr(".morphTargetInfluences["+t[o].name+"]",c,u).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let u=e[o],l=u.name.match(s);if(l&&l.length>1){let h=l[1],f=r[h];f||(r[h]=f=[]),f.push(u)}}let a=[];for(let o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function tg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return rr;case"vector":case"vector2":case"vector3":case"vector4":return Cr;case"color":return eo;case"quaternion":return sr;case"bool":case"boolean":return ir;case"string":return ar}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function ng(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=tg(i.type);if(i.times===void 0){let n=[],r=[];$0(i.keys,n,r,"value"),i.times=n,i.values=r}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),gl(i.settings)&&(t.settings={inTangents:br(i.settings.inTangents,Float32Array),outTangents:br(i.settings.outTangents,Float32Array)}),t}var Ni={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Id(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Id(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Id(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Ol=class{constructor(e,t,n){let r=this,s=!1,a=0,o=0,c,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(l){o++,s===!1&&r.onStart!==void 0&&r.onStart(l,a,o),s=!0},this.itemEnd=function(l){a++,r.onProgress!==void 0&&r.onProgress(l,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(l){r.onError!==void 0&&r.onError(l)},this.resolveURL=function(l){return l=l.normalize("NFC"),c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,h){return u.push(l,h),this},this.removeHandler=function(l){let h=u.indexOf(l);return h!==-1&&u.splice(h,2),this},this.getHandler=function(l){for(let h=0,f=u.length;h<f;h+=2){let p=u[h],g=u[h+1];if(p.global&&(p.lastIndex=0),p.test(l))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Sp=new Ol,Fi=class{constructor(e){this.manager=e!==void 0?e:Sp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Fi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qi={},Ju=class extends Error{constructor(e,t){super(e),this.response=t}},Js=class extends Fi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Ni.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Qi[e]!==void 0){Qi[e].push({onLoad:t,onProgress:n,onError:r});return}Qi[e]=[],Qi[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&Ke("FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||u.body===void 0||u.body.getReader===void 0)return u;let l=Qi[e],h=u.body.getReader(),f=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0,y=0,v=new ReadableStream({start(m){x();function x(){h.read().then(({done:R,value:b})=>{if(R)m.close();else{y+=b.byteLength;let I=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:p});for(let L=0,D=l.length;L<D;L++){let S=l[L];S.onProgress&&S.onProgress(I)}m.enqueue(b),x()}},R=>{m.error(R)})}}});return new Response(v)}else throw new Ju(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(c){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(l=>new DOMParser().parseFromString(l,o));case"json":return u.json();default:if(o==="")return u.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return u.arrayBuffer().then(g=>p.decode(g))}}}).then(u=>{Ni.add(`file:${e}`,u);let l=Qi[e];delete Qi[e];for(let h=0,f=l.length;h<f;h++){let p=l[h];p.onLoad&&p.onLoad(u)}}).catch(u=>{let l=Qi[e];if(l===void 0)throw this.manager.itemError(e),u;delete Qi[e];for(let h=0,f=l.length;h<f;h++){let p=l[h];p.onError&&p.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Is=new WeakMap,Fl=class extends Fi{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Ni.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=Is.get(a);h===void 0&&(h=[],Is.set(a,h)),h.push({onLoad:t,onError:r})}return a}let o=Fs("img");function c(){l(),t&&t(this);let h=Is.get(this)||[];for(let f=0;f<h.length;f++){let p=h[f];p.onLoad&&p.onLoad(this)}Is.delete(this),s.manager.itemEnd(e)}function u(h){l(),r&&r(h),Ni.remove(`image:${e}`);let f=Is.get(this)||[];for(let p=0;p<f.length;p++){let g=f[p];g.onError&&g.onError(h)}Is.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function l(){o.removeEventListener("load",c,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ni.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var is=class extends Fi{constructor(e){super(e)}load(e,t,n,r){let s=new vn,a=new Fl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},Ir=class extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},js=class extends Ir{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},qu=new at,Pd=new $,Ld=new $,$s=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.mapType=Vn,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ws,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Pd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pd),Ld.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ld),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){qu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(qu,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,u=r?r.y/s.y:0;e.coordinateSystem===Os||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,.5,.5,0,0,0,1),t.multiply(qu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},fl=new $,dl=new Rn,Li=new $,to=class extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(fl,dl,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fl,dl,Li.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(fl,dl,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fl,dl,Li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Sr=new $,Nd=new Ze,Dd=new Ze,an=class extends to{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Jr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Da*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jr*2*Math.atan(Math.tan(Da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z),Sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z)}getViewSize(e,t){return this.getViewBounds(e,Nd,Dd),t.subVectors(Dd,Nd)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Da*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/u,r*=a.width/c,n*=a.height/u}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ju=class extends $s{constructor(){super(new an(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Jr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},no=class extends Ir{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new ju}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},$u=class extends $s{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0}},Kn=class extends Ir{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new $u}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Hi=class extends to{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=l*this.view.offsetY,c=o-l*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Qu=class extends $s{constructor(){super(new Hi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},rs=class extends Ir{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new Qu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Qs=class extends Ir{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var or=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Xu=new WeakMap,io=class extends Fi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&Ke("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&Ke("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Ni.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(u=>{Xu.has(a)===!0?(r&&r(Xu.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(u),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(u){return Ni.add(`image-bitmap:${e}`,u),t&&t(u),s.manager.itemEnd(e),u}).catch(function(u){r&&r(u),Xu.set(c,u),Ni.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Ni.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ps=-90,Ls=1,Hl=class extends Wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new an(Ps,Ls,e,t);r.layers=this.layers,this.add(r);let s=new an(Ps,Ls,e,t);s.layers=this.layers,this.add(s);let a=new an(Ps,Ls,e,t);a.layers=this.layers,this.add(a);let o=new an(Ps,Ls,e,t);o.layers=this.layers,this.add(o);let c=new an(Ps,Ls,e,t);c.layers=this.layers,this.add(c);let u=new an(Ps,Ls,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(let u of t)this.remove(u);if(e===xi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Os)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,u,l]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(h,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Bl=class extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ro=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=ig.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function ig(){this._document.hidden===!1&&this.reset()}var kl=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,s,a;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:r=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,r=this.valueSize,s=e*r+r,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==r;++o)n[s+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,s,0,o,r)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,r=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let c=t*this._origIndex;this._mixBufferRegion(n,r,c,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let c=t,u=t+t;c!==u;++c)if(n[c]!==n[c+t]){o.setValue(n,r);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let s=n,a=r;s!==a;++s)t[s]=t[r+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,s){if(r>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,r){Rn.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,s){let a=this._workIndex*s;Rn.multiplyQuaternionsFlat(e,a,e,t,e,n),Rn.slerpFlat(e,t,e,t,e,a,r)}_lerp(e,t,n,r,s){let a=1-r;for(let o=0;o!==s;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*r}}_lerpAdditive(e,t,n,r,s){for(let a=0;a!==s;++a){let o=t+a;e[o]=e[o]+e[n+a]*r}}},yh="\\[\\]\\.:\\/",rg=new RegExp("["+yh+"]","g"),Mh="[^"+yh+"]",sg="[^"+yh.replace("\\.","")+"]",ag=/((?:WC+[\/:])*)/.source.replace("WC",Mh),og=/(WCOD+)?/.source.replace("WCOD",sg),lg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mh),cg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mh),ug=new RegExp("^"+ag+og+lg+cg+"$"),hg=["material","materials","bones","map"],eh=class{constructor(e,t,n){let r=n||Ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ft=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(rg,"")}static parseTrackName(e){let t=ug.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);hg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){tt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){tt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let l=0;l<e.length;l++)if(e[l].name===u){u=l;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){tt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){tt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){tt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let a=e[r];if(a===void 0){let u=t.nodeName;tt("PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ft.Composite=eh;Ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ft.prototype.GetterByBindingType=[Ft.prototype._getValue_direct,Ft.prototype._getValue_array,Ft.prototype._getValue_arrayElement,Ft.prototype._getValue_toArray];Ft.prototype.SetterByBindingTypeAndVersioning=[[Ft.prototype._setValue_direct,Ft.prototype._setValue_direct_setNeedsUpdate,Ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_array,Ft.prototype._setValue_array_setNeedsUpdate,Ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_arrayElement,Ft.prototype._setValue_arrayElement_setNeedsUpdate,Ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_fromArray,Ft.prototype._setValue_fromArray_setNeedsUpdate,Ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zl=class{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;let s=t.tracks,a=s.length,o=new Array(a),c={endingStart:qr,endingEnd:qr};for(let u=0;u!==a;++u){let l=s[u].createInterpolant(null);o[u]=l,l.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Pc,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let r=this._clip.duration,s=e._clip.duration,a=s/r,o=r/s;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let r=this._mixer,s=r.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,u=o.sampleValues;return c[0]=s,c[1]=s+n,u[0]=e/a,u[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,u=this._propertyBindings;switch(this.blendMode){case ap:for(let l=0,h=c.length;l!==h;++l)c[l].evaluate(a),u[l].accumulateAdditive(o);break;case Lc:default:for(let l=0,h=c.length;l!==h;++l)c[l].evaluate(a),u[l].accumulate(r,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,r=this.time+e,s=this._loopCount,a=n===sp;if(e===0)return s===-1?r:a&&(s&1)===1?t-r:r;if(n===Ic){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),r>=t||r<0){let o=Math.floor(r/t);r-=t*o,s+=Math.abs(o);let c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let u=e<0;this._setEndings(u,!u,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=s,this.time=r;if(a&&(s&1)===1)return t-r}return r}_setEndings(e,t,n){let r=this._interpolantSettings;n?(r.endingStart=Xr,r.endingEnd=Xr):(e?r.endingStart=this.zeroSlopeAtStart?Xr:qr:r.endingStart=Oa,t?r.endingEnd=this.zeroSlopeAtEnd?Xr:qr:r.endingEnd=Oa)}_scheduleFading(e,t,n){let r=this._mixer,s=r.time,a=this._weightInterpolant;a===null&&(a=r._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=s,c[0]=t,o[1]=s+e,c[1]=n,this}},fg=new Float32Array(1),so=class extends Mi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,r=e._clip.tracks,s=r.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,u=this._bindingsByRootAndName,l=u[c];l===void 0&&(l={},u[c]=l);for(let h=0;h!==s;++h){let f=r[h],p=f.name,g=l[p];if(g!==void 0)++g.referenceCount,a[h]=g;else{if(g=a[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,p));continue}let y=t&&t._propertyBindings[h].binding.parsedPath;g=new kl(Ft.create(n,p,y),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,p),a[h]=g}o[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,n)}let t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){let s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){let s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let r=this._actions,s=this._actionsByClip,a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=r.length,r.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,a=this._actionsByClip,o=a[s],c=o.knownActions,u=c[c.length-1],l=e._byClipCacheIndex;u._byClipCacheIndex=l,c[l]=u,c.pop(),e._byClipCacheIndex=null;let h=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],c.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){let s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){let r=this._bindingsByRootAndName,s=this._bindings,a=r[t];a===void 0&&(a={},r[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,r=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[r],c=t[t.length-1],u=e._cacheIndex;c._cacheIndex=u,t[u]=c,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[r]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Qa(new Float32Array(2),new Float32Array(2),1,fg),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){let r=t||this._root,s=r.uuid,a=typeof e=="string"?ns.findByName(r,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],u=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Lc),c!==void 0){let h=c.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;u=c.knownActions[0],a===null&&(a=u._clip)}if(a===null)return null;let l=new zl(this,a,t,n);return this._bindAction(l,u),this._addInactiveAction(l,o,s),l}existingAction(e,t){let n=t||this._root,r=n.uuid,s=typeof e=="string"?ns.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[r]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,r=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let u=0;u!==n;++u)t[u]._update(r,e,s,a);let o=this._bindings,c=this._nActiveBindings;for(let u=0;u!==c;++u)o[u].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,r=this._actionsByClip,s=r[n];if(s!==void 0){let a=s.knownActions;for(let o=0,c=a.length;o!==c;++o){let u=a[o];this._deactivateAction(u);let l=u._cacheIndex,h=t[t.length-1];u._cacheIndex=null,u._byClipCacheIndex=null,h._cacheIndex=l,t[l]=h,t.pop(),this._removeInactiveBindingsForAction(u)}delete r[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(let a in s){let o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Ah=class Ah{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};Ah.prototype.isMatrix2=!0;var th=Ah;function Sh(i,e,t,n){let r=dg(n);switch(t){case fh:return i*e;case Jl:return i*e/r.components*r.byteLength;case jl:return i*e/r.components*r.byteLength;case Nr:return i*e*2/r.components*r.byteLength;case $l:return i*e*2/r.components*r.byteLength;case dh:return i*e*3/r.components*r.byteLength;case Jn:return i*e*4/r.components*r.byteLength;case Ql:return i*e*4/r.components*r.byteLength;case mo:case go:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case vo:case _o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tc:case ic:return Math.max(i,16)*Math.max(e,8)/4;case ec:case nc:return Math.max(i,8)*Math.max(e,8)/2;case rc:case sc:case oc:case lc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ac:case xo:case cc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case uc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case fc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case dc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case pc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case mc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case gc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case vc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case _c:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case xc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case yc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Mc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Sc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case bc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Tc:case Ec:case wc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ac:case Rc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case yo:case Cc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dg(i){switch(i){case Vn:case lh:return{byteLength:1,components:1};case ia:case ch:case bn:return{byteLength:2,components:1};case Kl:case Zl:return{byteLength:2,components:4};case Ti:case Yl:case Zn:return{byteLength:4,components:1};case uh:case hh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?Ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Wp(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function mg(i){let e=new WeakMap;function t(o,c){let u=o.array,l=o.usage,h=u.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,u,l),o.onUploadCallback();let p;if(u instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array!="undefined"&&u instanceof Float16Array)p=i.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=i.SHORT;else if(u instanceof Uint32Array)p=i.UNSIGNED_INT;else if(u instanceof Int32Array)p=i.INT;else if(u instanceof Int8Array)p=i.BYTE;else if(u instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,u){let l=c.array,h=c.updateRanges;if(i.bindBuffer(u,o),h.length===0)i.bufferSubData(u,0,l);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){let g=h[f],y=h[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,h[f]=y)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){let y=h[p];i.bufferSubData(u,y.start*l.BYTES_PER_ELEMENT,l,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let l=e.get(o);(!l||l.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=e.get(o);if(u===void 0)e.set(o,t(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,c),u.version=o.version}}return{get:r,remove:s,update:a}}var gg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vg=`#ifdef USE_ALPHAHASH
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
#endif`,_g=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sg=`#ifdef USE_AOMAP
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
#endif`,bg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tg=`#ifdef USE_BATCHING
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
#endif`,Eg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ag=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cg=`#ifdef USE_IRIDESCENCE
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
#endif`,Ig=`#ifdef USE_BUMPMAP
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
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ug=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Og=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Fg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Hg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Bg=`#define PI 3.141592653589793
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
} // validated`,kg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zg=`vec3 transformedNormal = objectNormal;
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
#endif`,Gg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kg=`#ifdef USE_ENVMAP
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
#endif`,Zg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Jg=`#ifdef USE_ENVMAP
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
#endif`,jg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$g=`#ifdef USE_ENVMAP
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
#endif`,Qg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ev=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iv=`#ifdef USE_GRADIENTMAP
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
}`,rv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,av=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ov=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,lv=`#ifdef USE_ENVMAP
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
#endif`,cv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dv=`PhysicalMaterial material;
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
#endif`,pv=`uniform sampler2D dfgLUT;
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
}`,mv=`
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
#endif`,gv=`#if defined( RE_IndirectDiffuse )
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
#endif`,vv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_v=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,xv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ev=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wv=`#if defined( USE_POINTS_UV )
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
#endif`,Av=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Iv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lv=`#ifdef USE_MORPHTARGETS
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
#endif`,Nv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Uv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ov=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Bv=`#ifdef USE_NORMALMAP
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
#endif`,kv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$v=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,t_=`float getShadowMask() {
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
}`,n_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,i_=`#ifdef USE_SKINNING
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
#endif`,r_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,s_=`#ifdef USE_SKINNING
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
#endif`,a_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,o_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,l_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,c_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,u_=`#ifdef USE_TRANSMISSION
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
#endif`,h_=`#ifdef USE_TRANSMISSION
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
#endif`,f_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,g_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,v_=`uniform sampler2D t2D;
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
}`,__=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S_=`#include <common>
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
}`,b_=`#if DEPTH_PACKING == 3200
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
}`,T_=`#define DISTANCE
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
}`,E_=`#define DISTANCE
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
}`,w_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R_=`uniform float scale;
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
}`,C_=`uniform vec3 diffuse;
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
}`,I_=`#include <common>
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
}`,P_=`uniform vec3 diffuse;
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
}`,L_=`#define LAMBERT
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
}`,N_=`#define LAMBERT
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
}`,D_=`#define MATCAP
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
}`,U_=`#define MATCAP
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
}`,O_=`#define NORMAL
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
}`,F_=`#define NORMAL
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
}`,H_=`#define PHONG
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
}`,B_=`#define PHONG
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
}`,k_=`#define STANDARD
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
}`,z_=`#define STANDARD
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
}`,G_=`#define TOON
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
}`,V_=`#define TOON
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
}`,W_=`uniform float size;
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
}`,q_=`uniform vec3 diffuse;
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
}`,X_=`#include <common>
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
}`,Y_=`uniform vec3 color;
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
}`,K_=`uniform float rotation;
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
}`,Z_=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:gg,alphahash_pars_fragment:vg,alphamap_fragment:_g,alphamap_pars_fragment:xg,alphatest_fragment:yg,alphatest_pars_fragment:Mg,aomap_fragment:Sg,aomap_pars_fragment:bg,batching_pars_vertex:Tg,batching_vertex:Eg,begin_vertex:wg,beginnormal_vertex:Ag,bsdfs:Rg,iridescence_fragment:Cg,bumpmap_pars_fragment:Ig,clipping_planes_fragment:Pg,clipping_planes_pars_fragment:Lg,clipping_planes_pars_vertex:Ng,clipping_planes_vertex:Dg,color_fragment:Ug,color_pars_fragment:Og,color_pars_vertex:Fg,color_vertex:Hg,common:Bg,cube_uv_reflection_fragment:kg,defaultnormal_vertex:zg,displacementmap_pars_vertex:Gg,displacementmap_vertex:Vg,emissivemap_fragment:Wg,emissivemap_pars_fragment:qg,colorspace_fragment:Xg,colorspace_pars_fragment:Yg,envmap_fragment:Kg,envmap_common_pars_fragment:Zg,envmap_pars_fragment:Jg,envmap_pars_vertex:jg,envmap_physical_pars_fragment:lv,envmap_vertex:$g,fog_vertex:Qg,fog_pars_vertex:ev,fog_fragment:tv,fog_pars_fragment:nv,gradientmap_pars_fragment:iv,lightmap_pars_fragment:rv,lights_lambert_fragment:sv,lights_lambert_pars_fragment:av,lights_pars_begin:ov,lights_toon_fragment:cv,lights_toon_pars_fragment:uv,lights_phong_fragment:hv,lights_phong_pars_fragment:fv,lights_physical_fragment:dv,lights_physical_pars_fragment:pv,lights_fragment_begin:mv,lights_fragment_maps:gv,lights_fragment_end:vv,lightprobes_pars_fragment:_v,logdepthbuf_fragment:xv,logdepthbuf_pars_fragment:yv,logdepthbuf_pars_vertex:Mv,logdepthbuf_vertex:Sv,map_fragment:bv,map_pars_fragment:Tv,map_particle_fragment:Ev,map_particle_pars_fragment:wv,metalnessmap_fragment:Av,metalnessmap_pars_fragment:Rv,morphinstance_vertex:Cv,morphcolor_vertex:Iv,morphnormal_vertex:Pv,morphtarget_pars_vertex:Lv,morphtarget_vertex:Nv,normal_fragment_begin:Dv,normal_fragment_maps:Uv,normal_pars_fragment:Ov,normal_pars_vertex:Fv,normal_vertex:Hv,normalmap_pars_fragment:Bv,clearcoat_normal_fragment_begin:kv,clearcoat_normal_fragment_maps:zv,clearcoat_pars_fragment:Gv,iridescence_pars_fragment:Vv,opaque_fragment:Wv,packing:qv,premultiplied_alpha_fragment:Xv,project_vertex:Yv,dithering_fragment:Kv,dithering_pars_fragment:Zv,roughnessmap_fragment:Jv,roughnessmap_pars_fragment:jv,shadowmap_pars_fragment:$v,shadowmap_pars_vertex:Qv,shadowmap_vertex:e_,shadowmask_pars_fragment:t_,skinbase_vertex:n_,skinning_pars_vertex:i_,skinning_vertex:r_,skinnormal_vertex:s_,specularmap_fragment:a_,specularmap_pars_fragment:o_,tonemapping_fragment:l_,tonemapping_pars_fragment:c_,transmission_fragment:u_,transmission_pars_fragment:h_,uv_pars_fragment:f_,uv_pars_vertex:d_,uv_vertex:p_,worldpos_vertex:m_,background_vert:g_,background_frag:v_,backgroundCube_vert:__,backgroundCube_frag:x_,cube_vert:y_,cube_frag:M_,depth_vert:S_,depth_frag:b_,distance_vert:T_,distance_frag:E_,equirect_vert:w_,equirect_frag:A_,linedashed_vert:R_,linedashed_frag:C_,meshbasic_vert:I_,meshbasic_frag:P_,meshlambert_vert:L_,meshlambert_frag:N_,meshmatcap_vert:D_,meshmatcap_frag:U_,meshnormal_vert:O_,meshnormal_frag:F_,meshphong_vert:H_,meshphong_frag:B_,meshphysical_vert:k_,meshphysical_frag:z_,meshtoon_vert:G_,meshtoon_frag:V_,points_vert:W_,points_frag:q_,shadow_vert:X_,shadow_frag:Y_,sprite_vert:K_,sprite_frag:Z_},Ce={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},zi={basic:{uniforms:In([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:In([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ke(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:In([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:In([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:In([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new ke(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:In([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:In([Ce.points,Ce.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:In([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:In([Ce.common,Ce.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:In([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:In([Ce.sprite,Ce.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:In([Ce.common,Ce.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:In([Ce.lights,Ce.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};zi.physical={uniforms:In([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var Uc={r:0,b:0,g:0},J_=new at,qp=new rt;qp.set(-1,0,0,0,1,0,0,0,1);function j_(i,e,t,n,r,s){let a=new ke(0),o=r===!0?0:1,c,u,l=null,h=0,f=null;function p(x){let R=x.isScene===!0?x.background:null;if(R&&R.isTexture){let b=x.backgroundBlurriness>0;R=e.get(R,b)}return R}function g(x){let R=!1,b=p(x);b===null?v(a,o):b&&b.isColor&&(v(b,1),R=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,s):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(x,R){let b=p(R);b&&(b.isCubeTexture||b.mapping===po)?(u===void 0&&(u=new Ue(new pn(1,1,1),new Qt({name:"BackgroundCubeMaterial",uniforms:cs(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,L,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=b,u.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(J_.makeRotationFromEuler(R.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(qp),u.material.toneMapped=ot.getTransfer(b.colorSpace)!==wt,(l!==b||h!==b.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,l=b,h=b.version,f=i.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Ue(new ts(2,2),new Qt({name:"BackgroundMaterial",uniforms:cs(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=ot.getTransfer(b.colorSpace)!==wt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(l!==b||h!==b.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,l=b,h=b.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function v(x,R){x.getRGB(Uc,xh(i)),t.buffers.color.setClear(Uc.r,Uc.g,Uc.b,R,s)}function m(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,R=1){a.set(x),o=R,v(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,v(a,o)},render:g,addToRenderList:y,dispose:m}}function $_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,a=!1;function o(A,M,P,U,k){let Y=!1,J=h(A,U,P,M);s!==J&&(s=J,u(s.object)),Y=p(A,U,P,k),Y&&g(A,U,P,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,b(A,M,P,U),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return i.createVertexArray()}function u(A){return i.bindVertexArray(A)}function l(A){return i.deleteVertexArray(A)}function h(A,M,P,U){let k=U.wireframe===!0,Y=n[M.id];Y===void 0&&(Y={},n[M.id]=Y);let J=A.isInstancedMesh===!0?A.id:0,ne=Y[J];ne===void 0&&(ne={},Y[J]=ne);let ie=ne[P.id];ie===void 0&&(ie={},ne[P.id]=ie);let se=ie[k];return se===void 0&&(se=f(c()),ie[k]=se),se}function f(A){let M=[],P=[],U=[];for(let k=0;k<t;k++)M[k]=0,P[k]=0,U[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:P,attributeDivisors:U,object:A,attributes:{},index:null}}function p(A,M,P,U){let k=s.attributes,Y=M.attributes,J=0,ne=P.getAttributes();for(let ie in ne)if(ne[ie].location>=0){let re=k[ie],Re=Y[ie];if(Re===void 0&&(ie==="instanceMatrix"&&A.instanceMatrix&&(Re=A.instanceMatrix),ie==="instanceColor"&&A.instanceColor&&(Re=A.instanceColor)),re===void 0||re.attribute!==Re||Re&&re.data!==Re.data)return!0;J++}return s.attributesNum!==J||s.index!==U}function g(A,M,P,U){let k={},Y=M.attributes,J=0,ne=P.getAttributes();for(let ie in ne)if(ne[ie].location>=0){let re=Y[ie];re===void 0&&(ie==="instanceMatrix"&&A.instanceMatrix&&(re=A.instanceMatrix),ie==="instanceColor"&&A.instanceColor&&(re=A.instanceColor));let Re={};Re.attribute=re,re&&re.data&&(Re.data=re.data),k[ie]=Re,J++}s.attributes=k,s.attributesNum=J,s.index=U}function y(){let A=s.newAttributes;for(let M=0,P=A.length;M<P;M++)A[M]=0}function v(A){m(A,0)}function m(A,M){let P=s.newAttributes,U=s.enabledAttributes,k=s.attributeDivisors;P[A]=1,U[A]===0&&(i.enableVertexAttribArray(A),U[A]=1),k[A]!==M&&(i.vertexAttribDivisor(A,M),k[A]=M)}function x(){let A=s.newAttributes,M=s.enabledAttributes;for(let P=0,U=M.length;P<U;P++)M[P]!==A[P]&&(i.disableVertexAttribArray(P),M[P]=0)}function R(A,M,P,U,k,Y,J){J===!0?i.vertexAttribIPointer(A,M,P,k,Y):i.vertexAttribPointer(A,M,P,U,k,Y)}function b(A,M,P,U){y();let k=U.attributes,Y=P.getAttributes(),J=M.defaultAttributeValues;for(let ne in Y){let ie=Y[ne];if(ie.location>=0){let se=k[ne];if(se===void 0&&(ne==="instanceMatrix"&&A.instanceMatrix&&(se=A.instanceMatrix),ne==="instanceColor"&&A.instanceColor&&(se=A.instanceColor)),se!==void 0){let re=se.normalized,Re=se.itemSize,Ne=e.get(se);if(Ne===void 0)continue;let Qe=Ne.buffer,me=Ne.type,oe=Ne.bytesPerElement,G=me===i.INT||me===i.UNSIGNED_INT||se.gpuType===Yl;if(se.isInterleavedBufferAttribute){let Z=se.data,fe=Z.stride,ve=se.offset;if(Z.isInstancedInterleavedBuffer){for(let Me=0;Me<ie.locationSize;Me++)m(ie.location+Me,Z.meshPerAttribute);A.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Me=0;Me<ie.locationSize;Me++)v(ie.location+Me);i.bindBuffer(i.ARRAY_BUFFER,Qe);for(let Me=0;Me<ie.locationSize;Me++)R(ie.location+Me,Re/ie.locationSize,me,re,fe*oe,(ve+Re/ie.locationSize*Me)*oe,G)}else{if(se.isInstancedBufferAttribute){for(let Z=0;Z<ie.locationSize;Z++)m(ie.location+Z,se.meshPerAttribute);A.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Z=0;Z<ie.locationSize;Z++)v(ie.location+Z);i.bindBuffer(i.ARRAY_BUFFER,Qe);for(let Z=0;Z<ie.locationSize;Z++)R(ie.location+Z,Re/ie.locationSize,me,re,Re*oe,Re/ie.locationSize*Z*oe,G)}}else if(J!==void 0){let re=J[ne];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(ie.location,re);break;case 3:i.vertexAttrib3fv(ie.location,re);break;case 4:i.vertexAttrib4fv(ie.location,re);break;default:i.vertexAttrib1fv(ie.location,re)}}}}x()}function I(){_();for(let A in n){let M=n[A];for(let P in M){let U=M[P];for(let k in U){let Y=U[k];for(let J in Y)l(Y[J].object),delete Y[J];delete U[k]}}delete n[A]}}function L(A){if(n[A.id]===void 0)return;let M=n[A.id];for(let P in M){let U=M[P];for(let k in U){let Y=U[k];for(let J in Y)l(Y[J].object),delete Y[J];delete U[k]}}delete n[A.id]}function D(A){for(let M in n){let P=n[M];for(let U in P){let k=P[U];if(k[A.id]===void 0)continue;let Y=k[A.id];for(let J in Y)l(Y[J].object),delete Y[J];delete k[A.id]}}}function S(A){for(let M in n){let P=n[M],U=A.isInstancedMesh===!0?A.id:0,k=P[U];if(k!==void 0){for(let Y in k){let J=k[Y];for(let ne in J)l(J[ne].object),delete J[ne];delete k[Y]}delete P[U],Object.keys(P).length===0&&delete n[M]}}}function _(){E(),a=!0,s!==r&&(s=r,u(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:_,resetDefaultState:E,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfObject:S,releaseStatesOfProgram:D,initAttributes:y,enableAttribute:v,disableUnusedAttributes:x}}function Q_(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,l){l!==0&&(i.drawArraysInstanced(n,c,u,l),t.update(u,n,l))}function o(c,u,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,l);let f=0;for(let p=0;p<l;p++)f+=u[p];t.update(f,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function ex(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(D){return!(D!==Jn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){let S=D===bn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Vn&&D!==Zn&&!S&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp",l=c(u);l!==u&&(Ke("WebGLRenderer:",u,"not supported, using",l,"instead."),u=l);let h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=i.getParameter(i.MAX_SAMPLES),L=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:x,maxVaryings:R,maxFragmentUniforms:b,maxSamples:I,samples:L}}function tx(i){let e=this,t=null,n=0,r=!1,s=!1,a=new vi,o=new rt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||n!==0||r;return r=f,n=h.length,p},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=l(h,f,0)},this.setState=function(h,f,p){let g=h.clippingPlanes,y=h.clipIntersection,v=h.clipShadows,m=i.get(h);if(!r||g===null||g.length===0||s&&!v)s?l(null):u();else{let x=s?0:n,R=x*4,b=m.clippingState||null;c.value=b,b=l(g,f,R,p);for(let I=0;I!==R;++I)b[I]=t[I];m.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(h,f,p,g){let y=h!==null?h.length:0,v=null;if(y!==0){if(v=c.value,g!==!0||v===null){let m=p+y*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(v===null||v.length<m)&&(v=new Float32Array(m));for(let R=0,b=p;R!==y;++R,b+=4)a.copy(h[R]).applyMatrix4(x,o),a.normal.toArray(v,b),v[b+3]=a.constant}c.value=v,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,v}}var la=4,nx=6,ix=20,rx=256,bo=new Hi,bp=new ke,Rh=null,Ch=0,Ih=0,Ph=!1,sx=new $,us=new $,ua=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:o=sx}=s;Rh=this._renderer.getRenderTarget(),Ch=this._renderer.getActiveCubeFace(),Ih=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ep(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Rh,Ch,Ih),this._renderer.xr.enabled=Ph,e.scissorTest=!1,oa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pr||e.mapping===os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rh=this._renderer.getRenderTarget(),Ch=this._renderer.getActiveCubeFace(),Ih=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:bn,format:Jn,colorSpace:On,depthBuffer:!1},r=Tp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tp(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ax(s)),this._blurMaterial=lx(s,e,t),this._ggxMaterial=ox(s,e,t)}return r}_compileMaterial(e){let t=new Ue(new qt,e);this._renderer.compile(t,bo)}_sceneToCubeUV(e,t,n,r,s){let c=new an(90,1,t,n),u=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(bp),h.toneMapping=Si,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ue(new pn,new Cn({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,v=y.material,m=!1,x=e.background;x?x.isColor&&(v.color.copy(x),e.background=null,m=!0):(v.color.copy(bp),m=!0);for(let R=0;R<6;R++){let b=R%3;b===0?(c.up.set(0,u[R],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+l[R],s.y,s.z)):b===1?(c.up.set(0,0,u[R]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+l[R],s.z)):(c.up.set(0,u[R],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+l[R]));let I=this._cubeSize;oa(r,b*I,R>2?I:0,I,I),h.setRenderTarget(r),m&&h.render(y,c),h.render(e,c)}h.toneMapping=p,h.autoClear=f,e.background=x}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Pr||e.mapping===os;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ep());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;oa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,bo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,u=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),h=Math.sqrt(u*u-l*l),f=u*1.25,p=h*f,{_lodMax:g}=this,y=this._sizeLods[n],v=3*y*(n>g-la?n-g+la:0),m=4*(this._cubeSize-y);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=g-t,oa(s,v,m,3*y,2*y),r.setRenderTarget(s),r.render(o,bo),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-n,oa(e,v,m,3*y,2*y),r.setRenderTarget(e),r.render(o,bo)}_blur(e,t,n,r){let s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,r,s){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[r];c.material=o;let u=o.uniforms;u.envMap.value=e.texture,u.sigma.value=s,u.mipInt.value=this._lodMax-n;let l=this._sizeLods[r],h=3*l*(r>this._lodMax-la?r-this._lodMax+la:0),f=4*(this._cubeSize-l);oa(t,h,f,3*l,2*l),a.setRenderTarget(t),a.render(c,bo)}};function ax(i){let e=[],t=[],n=i,r=i-la+1+nx;for(let s=0;s<r;s++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,u=1+o,l=[c,c,u,c,u,u,c,c,u,u,c,u],h=6,f=6,p=3,g=new Float32Array(p*f*h),y=new Float32Array(p*f*h);for(let m=0;m<h;m++){let x=m%3*2/3-1,R=m>2?0:-1,b=[x,R,0,x+2/3,R,0,x+2/3,R+1,0,x,R,0,x+2/3,R+1,0,x,R+1,0];g.set(b,p*f*m);for(let I=0;I<f;I++){let L=l[I*2]*2-1,D=l[I*2+1]*2-1;m===0?us.set(1,D,L):m===1?us.set(-L,1,-D):m===2?us.set(-L,D,1):m===3?us.set(-1,D,-L):m===4?us.set(-L,-1,D):us.set(L,D,-1),us.toArray(y,(m*f+I)*p)}}let v=new qt;v.setAttribute("position",new Jt(g,p)),v.setAttribute("outputDirection",new Jt(y,p)),t.push(new Ue(v,null)),n>la&&n--}return{lodMeshes:t,sizeLods:e}}function Tp(i,e,t){let n=new dn(i,e,t);return n.texture.mapping=po,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oa(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function ox(i,e,t){return new Qt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function lx(i,e,t){return new Qt({name:"SphericalGaussianBlur",defines:{SAMPLES:ix,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Ep(){return new Qt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function wp(){return new Qt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Bc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Fc=class extends dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ka(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new pn(5,5,5),s=new Qt({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:oi});s.uniforms.tEquirect.value=t;let a=new Ue(r,s),o=t.minFilter;return t.minFilter===bi&&(t.minFilter=on),new Hl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}};function cx(i){let e=new WeakMap,t=new WeakMap,n=null;function r(f,p=!1){return f==null?null:p?a(f):s(f)}function s(f){if(f&&f.isTexture){let p=f.mapping;if(p===Wl||p===ql)if(e.has(f)){let g=e.get(f).texture;return o(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let y=new Fc(g.height);return y.fromEquirectangularTexture(i,f),e.set(f,y),f.addEventListener("dispose",u),o(y.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let p=f.mapping,g=p===Wl||p===ql,y=p===Pr||p===os;if(g||y){let v=t.get(f),m=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new ua(i)),v=g?n.fromEquirectangular(f,v):n.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,t.set(f,v),v.texture;if(v!==void 0)return v.texture;{let x=f.image;return g&&x&&x.height>0||y&&x&&c(x)?(n===null&&(n=new ua(i)),v=g?n.fromEquirectangular(f):n.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,t.set(f,v),f.addEventListener("dispose",l),v.texture):null}}}return f}function o(f,p){return p===Wl?f.mapping=Pr:p===ql&&(f.mapping=os),f}function c(f){let p=0,g=6;for(let y=0;y<g;y++)f[y]!==void 0&&p++;return p===g}function u(f){let p=f.target;p.removeEventListener("dispose",u);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function l(f){let p=f.target;p.removeEventListener("dispose",l);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function ux(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Yr("WebGLRenderer: "+n+" extension not supported."),r}}}function hx(i,e,t,n){let r={},s=new WeakMap;function a(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];let p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(h){let f=h.attributes;for(let p in f)e.update(f[p],i.ARRAY_BUFFER)}function u(h){let f=[],p=h.index,g=h.attributes.position,y=0;if(g===void 0)return;if(p!==null){let x=p.array;y=p.version;for(let R=0,b=x.length;R<b;R+=3){let I=x[R+0],L=x[R+1],D=x[R+2];f.push(I,L,L,D,D,I)}}else{let x=g.array;y=g.version;for(let R=0,b=x.length/3-1;R<b;R+=3){let I=R+0,L=R+1,D=R+2;f.push(I,L,L,D,D,I)}}let v=new(g.count>=65535?Va:Ga)(f,1);v.version=y;let m=s.get(h);m&&e.remove(m),s.set(h,v)}function l(h){let f=s.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&u(h)}else u(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:l}}function fx(i,e,t){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,f){i.drawElements(n,f,s,h*a),t.update(f,n,1)}function u(h,f,p){p!==0&&(i.drawElementsInstanced(n,f,s,h*a,p),t.update(f,n,p))}function l(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,p);let y=0;for(let v=0;v<p;v++)y+=f[v];t.update(y,n,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=l}function dx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:tt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function px(i,e,t){let n=new WeakMap,r=new Lt;function s(a,o,c){let u=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=l!==void 0?l.length:0,f=n.get(o);if(f===void 0||f.count!==h){let _=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",_)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,v=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],R=0;p===!0&&(R=1),g===!0&&(R=2),y===!0&&(R=3);let b=o.attributes.position.count*R,I=1;b>e.maxTextureSize&&(I=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let L=new Float32Array(b*I*4*h),D=new Ba(L,b,I,h);D.type=Zn,D.needsUpdate=!0;let S=R*4;for(let E=0;E<h;E++){let A=v[E],M=m[E],P=x[E],U=b*I*4*E;for(let k=0;k<A.count;k++){let Y=k*S;p===!0&&(r.fromBufferAttribute(A,k),L[U+Y+0]=r.x,L[U+Y+1]=r.y,L[U+Y+2]=r.z,L[U+Y+3]=0),g===!0&&(r.fromBufferAttribute(M,k),L[U+Y+4]=r.x,L[U+Y+5]=r.y,L[U+Y+6]=r.z,L[U+Y+7]=0),y===!0&&(r.fromBufferAttribute(P,k),L[U+Y+8]=r.x,L[U+Y+9]=r.y,L[U+Y+10]=r.z,L[U+Y+11]=P.itemSize===4?r.w:1)}}f={count:h,texture:D,size:new Ze(b,I)},n.set(o,f),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let y=0;y<u.length;y++)p+=u[y];let g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function mx(i,e,t,n,r){let s=new WeakMap;function a(u){let l=r.render.frame,h=u.geometry,f=e.get(u,h);if(s.get(f)!==l&&(e.update(f),s.set(f,l)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),s.get(u)!==l&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),s.set(u,l))),u.isSkinnedMesh){let p=u.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return f}function o(){s=new WeakMap}function c(u){let l=u.target;l.removeEventListener("dispose",c),n.releaseStatesOfObject(l),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:o}}var gx={[oo]:"LINEAR_TONE_MAPPING",[lo]:"REINHARD_TONE_MAPPING",[co]:"CINEON_TONE_MAPPING",[as]:"ACES_FILMIC_TONE_MAPPING",[ho]:"AGX_TONE_MAPPING",[fo]:"NEUTRAL_TONE_MAPPING",[uo]:"CUSTOM_TONE_MAPPING"};function vx(i,e,t,n,r,s){let a=new dn(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,u=new qt;u.setAttribute("position",new St([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new St([0,2,0,0,2,0],2));let l=new Zs({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Ue(u,l),f=new Hi(-1,1,1,-1,0,1),p=null,g=null,y=!1,v,m=null,x=[],R=!1;this.setSize=function(b,I){a.setSize(b,I),o!==null&&o.setSize(b,I),c!==null&&c.setSize(b,I);for(let L=0;L<x.length;L++){let D=x[L];D.setSize&&D.setSize(b,I)}},this.setEffects=function(b){x=b,R=x.length>0&&x[0].isRenderPass===!0;let I=a.width,L=a.height;x.length>0&&o===null&&(o=new dn(I,L,{type:bn,depthBuffer:!1,stencilBuffer:!1}),c=new dn(I,L,{type:bn,depthBuffer:!1,stencilBuffer:!1}));for(let D=0;D<x.length;D++){let S=x[D];S.setSize&&S.setSize(I,L)}},this.begin=function(b,I){if(y||b.toneMapping===Si&&x.length===0)return!1;if(m=I,I!==null){let L=I.width,D=I.height;(a.width!==L||a.height!==D)&&this.setSize(L,D)}return R===!1&&b.setRenderTarget(a),v=b.toneMapping,b.toneMapping=Si,!0},this.hasRenderPass=function(){return R},this.end=function(b,I){b.toneMapping=v,y=!0;let L=a,D=o;for(let S=0;S<x.length;S++){let _=x[S];_.enabled!==!1&&(_.render(b,D,L,I),_.needsSwap!==!1&&(L=D,D=D===o?c:o))}if(p!==b.outputColorSpace||g!==b.toneMapping){p=b.outputColorSpace,g=b.toneMapping,l.defines={},ot.getTransfer(p)===wt&&(l.defines.SRGB_TRANSFER="");let S=gx[g];S&&(l.defines[S]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=L.texture,b.setRenderTarget(m),b.render(h,f),m=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),u.dispose(),l.dispose()}}var Xp=new vn,Dh=new wr(1,1),Yp=new Ba,Kp=new wl,Zp=new Ka,Ap=[],Rp=[],Cp=new Float32Array(16),Ip=new Float32Array(9),Pp=new Float32Array(4);function ha(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Ap[r];if(s===void 0&&(s=new Float32Array(r),Ap[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function _n(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function xn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function kc(i,e){let t=Rp[e];t===void 0&&(t=new Int32Array(e),Rp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function _x(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function xx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;i.uniform2fv(this.addr,e),xn(t,e)}}function yx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_n(t,e))return;i.uniform3fv(this.addr,e),xn(t,e)}}function Mx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;i.uniform4fv(this.addr,e),xn(t,e)}}function Sx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),xn(t,e)}else{if(_n(t,n))return;Pp.set(n),i.uniformMatrix2fv(this.addr,!1,Pp),xn(t,n)}}function bx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),xn(t,e)}else{if(_n(t,n))return;Ip.set(n),i.uniformMatrix3fv(this.addr,!1,Ip),xn(t,n)}}function Tx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),xn(t,e)}else{if(_n(t,n))return;Cp.set(n),i.uniformMatrix4fv(this.addr,!1,Cp),xn(t,n)}}function Ex(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function wx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;i.uniform2iv(this.addr,e),xn(t,e)}}function Ax(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;i.uniform3iv(this.addr,e),xn(t,e)}}function Rx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;i.uniform4iv(this.addr,e),xn(t,e)}}function Cx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ix(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;i.uniform2uiv(this.addr,e),xn(t,e)}}function Px(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;i.uniform3uiv(this.addr,e),xn(t,e)}}function Lx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;i.uniform4uiv(this.addr,e),xn(t,e)}}function Nx(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Dh.compareFunction=t.isReversedDepthBuffer()?Dc:Nc,s=Dh):s=Xp,t.setTexture2D(e||s,r)}function Dx(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Kp,r)}function Ux(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Zp,r)}function Ox(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Yp,r)}function Fx(i){switch(i){case 5126:return _x;case 35664:return xx;case 35665:return yx;case 35666:return Mx;case 35674:return Sx;case 35675:return bx;case 35676:return Tx;case 5124:case 35670:return Ex;case 35667:case 35671:return wx;case 35668:case 35672:return Ax;case 35669:case 35673:return Rx;case 5125:return Cx;case 36294:return Ix;case 36295:return Px;case 36296:return Lx;case 35678:case 36198:case 36298:case 36306:case 35682:return Nx;case 35679:case 36299:case 36307:return Dx;case 35680:case 36300:case 36308:case 36293:return Ux;case 36289:case 36303:case 36311:case 36292:return Ox}}function Hx(i,e){i.uniform1fv(this.addr,e)}function Bx(i,e){let t=ha(e,this.size,2);i.uniform2fv(this.addr,t)}function kx(i,e){let t=ha(e,this.size,3);i.uniform3fv(this.addr,t)}function zx(i,e){let t=ha(e,this.size,4);i.uniform4fv(this.addr,t)}function Gx(i,e){let t=ha(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Vx(i,e){let t=ha(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Wx(i,e){let t=ha(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function qx(i,e){i.uniform1iv(this.addr,e)}function Xx(i,e){i.uniform2iv(this.addr,e)}function Yx(i,e){i.uniform3iv(this.addr,e)}function Kx(i,e){i.uniform4iv(this.addr,e)}function Zx(i,e){i.uniform1uiv(this.addr,e)}function Jx(i,e){i.uniform2uiv(this.addr,e)}function jx(i,e){i.uniform3uiv(this.addr,e)}function $x(i,e){i.uniform4uiv(this.addr,e)}function Qx(i,e,t){let n=this.cache,r=e.length,s=kc(t,r);_n(n,s)||(i.uniform1iv(this.addr,s),xn(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Dh:a=Xp;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function ey(i,e,t){let n=this.cache,r=e.length,s=kc(t,r);_n(n,s)||(i.uniform1iv(this.addr,s),xn(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Kp,s[a])}function ty(i,e,t){let n=this.cache,r=e.length,s=kc(t,r);_n(n,s)||(i.uniform1iv(this.addr,s),xn(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Zp,s[a])}function ny(i,e,t){let n=this.cache,r=e.length,s=kc(t,r);_n(n,s)||(i.uniform1iv(this.addr,s),xn(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Yp,s[a])}function iy(i){switch(i){case 5126:return Hx;case 35664:return Bx;case 35665:return kx;case 35666:return zx;case 35674:return Gx;case 35675:return Vx;case 35676:return Wx;case 5124:case 35670:return qx;case 35667:case 35671:return Xx;case 35668:case 35672:return Yx;case 35669:case 35673:return Kx;case 5125:return Zx;case 36294:return Jx;case 36295:return jx;case 36296:return $x;case 35678:case 36198:case 36298:case 36306:case 35682:return Qx;case 35679:case 36299:case 36307:return ey;case 35680:case 36300:case 36308:case 36293:return ty;case 36289:case 36303:case 36311:case 36292:return ny}}var Uh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Fx(t.type)}},Oh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=iy(t.type)}},Fh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},Lh=/(\w+)(\])?(\[|\.)?/g;function Lp(i,e){i.seq.push(e),i.map[e.id]=e}function ry(i,e,t){let n=i.name,r=n.length;for(Lh.lastIndex=0;;){let s=Lh.exec(n),a=Lh.lastIndex,o=s[1],c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){Lp(t,u===void 0?new Uh(o,i,e):new Oh(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Fh(o),Lp(t,h)),t=h}}}var ca=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);ry(o,c,this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function Np(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var sy=37297,ay=0;function oy(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Dp=new rt;function ly(i){ot._getMatrix(Dp,ot.workingColorSpace,i);let e=`mat3( ${Dp.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(i)){case Fa:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Up(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+oy(i.getShaderSource(e),o)}else return s}function cy(i,e){let t=ly(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var uy={[oo]:"Linear",[lo]:"Reinhard",[co]:"Cineon",[as]:"ACESFilmic",[ho]:"AgX",[fo]:"Neutral",[uo]:"Custom"};function hy(i,e){let t=uy[e];return t===void 0?(Ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Oc=new $;function fy(){ot.getLuminanceCoefficients(Oc);let i=Oc.x.toFixed(4),e=Oc.y.toFixed(4),t=Oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Eo).join(`
`)}function py(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function my(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),a=s.name,o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Eo(i){return i!==""}function Op(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var gy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hh(i){return i.replace(gy,_y)}var vy=new Map;function _y(i,e){let t=ht[e];if(t===void 0){let n=vy.get(e);if(n!==void 0)t=ht[n],Ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Hh(t)}var xy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hp(i){return i.replace(xy,yy)}function yy(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Bp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var My={[ao]:"SHADOWMAP_TYPE_PCF",[ea]:"SHADOWMAP_TYPE_VSM"};function Sy(i){return My[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var by={[Pr]:"ENVMAP_TYPE_CUBE",[os]:"ENVMAP_TYPE_CUBE",[po]:"ENVMAP_TYPE_CUBE_UV"};function Ty(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":by[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ey={[os]:"ENVMAP_MODE_REFRACTION"};function wy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ey[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ay={[Vl]:"ENVMAP_BLENDING_MULTIPLY",[np]:"ENVMAP_BLENDING_MIX",[ip]:"ENVMAP_BLENDING_ADD"};function Ry(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ay[i.combine]||"ENVMAP_BLENDING_NONE"}function Cy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Iy(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Sy(t),u=Ty(t),l=wy(t),h=Ry(t),f=Cy(t),p=dy(t),g=py(s),y=r.createProgram(),v,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Eo).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Eo).join(`
`),m.length>0&&(m+=`
`)):(v=[Bp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Eo).join(`
`),m=[Bp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?ht.tonemapping_pars_fragment:"",t.toneMapping!==Si?hy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,cy("linearToOutputTexel",t.outputColorSpace),fy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Eo).join(`
`)),a=Hh(a),a=Op(a,t),a=Fp(a,t),o=Hh(o),o=Op(o,t),o=Fp(o,t),a=Hp(a),o=Hp(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",t.glslVersion===gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let R=x+v+a,b=x+m+o,I=Np(r,r.VERTEX_SHADER,R),L=Np(r,r.FRAGMENT_SHADER,b);r.attachShader(y,I),r.attachShader(y,L),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function D(A){if(i.debug.checkShaderErrors){let M=r.getProgramInfoLog(y)||"",P=r.getShaderInfoLog(I)||"",U=r.getShaderInfoLog(L)||"",k=M.trim(),Y=P.trim(),J=U.trim(),ne=!0,ie=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,I,L);else{let se=Up(r,I,"vertex"),re=Up(r,L,"fragment");tt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+k+`
`+se+`
`+re)}else k!==""?Ke("WebGLProgram: Program Info Log:",k):(Y===""||J==="")&&(ie=!1);ie&&(A.diagnostics={runnable:ne,programLog:k,vertexShader:{log:Y,prefix:v},fragmentShader:{log:J,prefix:m}})}r.deleteShader(I),r.deleteShader(L),S=new ca(r,y),_=my(r,y)}let S;this.getUniforms=function(){return S===void 0&&D(this),S};let _;this.getAttributes=function(){return _===void 0&&D(this),_};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(y,sy)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ay++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=I,this.fragmentShader=L,this}var Py=0,Bh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new kh(e),t.set(e,n)),n}},kh=class{constructor(e){this.id=Py++,this.code=e,this.usedTimes=0}};function Ly(i){return i===Nr||i===xo||i===yo}function Ny(i,e,t,n,r,s){let a=new ka,o=new Bh,c=new Set,u=[],l=new Map,h=n.logarithmicDepthBuffer,f=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function y(S,_,E,A,M,P){let U=A.fog,k=M.geometry,Y=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?A.environment:null,J=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,ne=e.get(S.envMap||Y,J),ie=ne&&ne.mapping===po?ne.image.height:null,se=p[S.type];S.precision!==null&&(f=n.getMaxPrecision(S.precision),f!==S.precision&&Ke("WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let re=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Re=re!==void 0?re.length:0,Ne=0;k.morphAttributes.position!==void 0&&(Ne=1),k.morphAttributes.normal!==void 0&&(Ne=2),k.morphAttributes.color!==void 0&&(Ne=3);let Qe,me,oe,G;if(se){let Ut=zi[se];Qe=Ut.vertexShader,me=Ut.fragmentShader}else{Qe=S.vertexShader,me=S.fragmentShader;let Ut=o.getVertexShaderStage(S),d=o.getFragmentShaderStage(S);o.update(S,Ut,d),oe=Ut.id,G=d.id}let Z=i.getRenderTarget(),fe=i.state.buffers.depth.getReversed(),ve=M.isInstancedMesh===!0,Me=M.isBatchedMesh===!0,Oe=!!S.map,et=!!S.matcap,Fe=!!ne,nt=!!S.aoMap,ft=!!S.lightMap,it=!!S.bumpMap&&S.wireframe===!1,Mt=!!S.normalMap,Rt=!!S.displacementMap,jt=!!S.emissiveMap,yt=!!S.metalnessMap,kt=!!S.roughnessMap,X=S.anisotropy>0,Dt=S.clearcoat>0,dt=S.dispersion>0,H=S.retroreflectivity>0,T=S.iridescence>0,N=S.sheen>0,O=S.transmission>0,F=X&&!!S.anisotropyMap,z=Dt&&!!S.clearcoatMap,j=Dt&&!!S.clearcoatNormalMap,V=Dt&&!!S.clearcoatRoughnessMap,K=T&&!!S.iridescenceMap,ce=T&&!!S.iridescenceThicknessMap,xe=N&&!!S.sheenColorMap,de=N&&!!S.sheenRoughnessMap,ye=!!S.specularMap,be=!!S.specularColorMap,De=!!S.specularIntensityMap,We=O&&!!S.transmissionMap,q=O&&!!S.thicknessMap,Se=!!S.gradientMap,he=!!S.alphaMap,we=S.alphaTest>0,Pe=!!S.alphaHash,ge=!!S.extensions,qe=Si;S.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(qe=i.toneMapping);let ze={shaderID:se,shaderType:S.type,shaderName:S.name,vertexShader:Qe,fragmentShader:me,defines:S.defines,customVertexShaderID:oe,customFragmentShaderID:G,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Me,batchingColor:Me&&M._colorsTexture!==null,instancing:ve,instancingColor:ve&&M.instanceColor!==null,instancingMorph:ve&&M.morphTexture!==null,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ot.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:Oe,matcap:et,envMap:Fe,envMapMode:Fe&&ne.mapping,envMapCubeUVHeight:ie,aoMap:nt,lightMap:ft,bumpMap:it,normalMap:Mt,displacementMap:Rt,emissiveMap:jt,normalMapObjectSpace:Mt&&S.normalMapType===lp,normalMapTangentSpace:Mt&&S.normalMapType===So,packedNormalMap:Mt&&S.normalMapType===So&&Ly(S.normalMap.format),metalnessMap:yt,roughnessMap:kt,anisotropy:X,anisotropyMap:F,clearcoat:Dt,clearcoatMap:z,clearcoatNormalMap:j,clearcoatRoughnessMap:V,dispersion:dt,retroreflection:H,iridescence:T,iridescenceMap:K,iridescenceThicknessMap:ce,sheen:N,sheenColorMap:xe,sheenRoughnessMap:de,specularMap:ye,specularColorMap:be,specularIntensityMap:De,transmission:O,transmissionMap:We,thicknessMap:q,gradientMap:Se,opaque:S.transparent===!1&&S.blending===ta&&S.alphaToCoverage===!1,alphaMap:he,alphaTest:we,alphaHash:Pe,combine:S.combine,mapUv:Oe&&g(S.map.channel),aoMapUv:nt&&g(S.aoMap.channel),lightMapUv:ft&&g(S.lightMap.channel),bumpMapUv:it&&g(S.bumpMap.channel),normalMapUv:Mt&&g(S.normalMap.channel),displacementMapUv:Rt&&g(S.displacementMap.channel),emissiveMapUv:jt&&g(S.emissiveMap.channel),metalnessMapUv:yt&&g(S.metalnessMap.channel),roughnessMapUv:kt&&g(S.roughnessMap.channel),anisotropyMapUv:F&&g(S.anisotropyMap.channel),clearcoatMapUv:z&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:j&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:de&&g(S.sheenRoughnessMap.channel),specularMapUv:ye&&g(S.specularMap.channel),specularColorMapUv:be&&g(S.specularColorMap.channel),specularIntensityMapUv:De&&g(S.specularIntensityMap.channel),transmissionMapUv:We&&g(S.transmissionMap.channel),thicknessMapUv:q&&g(S.thicknessMap.channel),alphaMapUv:he&&g(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Mt||X),vertexNormals:!!k.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:M.isPoints===!0&&!!k.attributes.uv&&(Oe||he),fog:!!U,useFog:S.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||k.attributes.normal===void 0&&Mt===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:fe,skinning:M.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Ne,numSunLights:_.sun.length,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numSunLightShadows:_.sunShadowMap.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numLightProbeGrids:P.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:qe,decodeVideoTexture:Oe&&S.map.isVideoTexture===!0&&ot.getTransfer(S.map.colorSpace)===wt,decodeVideoTextureEmissive:jt&&S.emissiveMap.isVideoTexture===!0&&ot.getTransfer(S.emissiveMap.colorSpace)===wt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Gn,flipSided:S.side===Sn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ge&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&S.extensions.multiDraw===!0||Me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function v(S){let _=[];if(S.shaderID?_.push(S.shaderID):(_.push(S.customVertexShaderID),_.push(S.customFragmentShaderID)),S.defines!==void 0)for(let E in S.defines)_.push(E),_.push(S.defines[E]);return S.isRawShaderMaterial===!1&&(m(_,S),x(_,S),_.push(i.outputColorSpace)),_.push(S.customProgramCacheKey),_.join()}function m(S,_){S.push(_.precision),S.push(_.outputColorSpace),S.push(_.envMapMode),S.push(_.envMapCubeUVHeight),S.push(_.mapUv),S.push(_.alphaMapUv),S.push(_.lightMapUv),S.push(_.aoMapUv),S.push(_.bumpMapUv),S.push(_.normalMapUv),S.push(_.displacementMapUv),S.push(_.emissiveMapUv),S.push(_.metalnessMapUv),S.push(_.roughnessMapUv),S.push(_.anisotropyMapUv),S.push(_.clearcoatMapUv),S.push(_.clearcoatNormalMapUv),S.push(_.clearcoatRoughnessMapUv),S.push(_.iridescenceMapUv),S.push(_.iridescenceThicknessMapUv),S.push(_.sheenColorMapUv),S.push(_.sheenRoughnessMapUv),S.push(_.specularMapUv),S.push(_.specularColorMapUv),S.push(_.specularIntensityMapUv),S.push(_.transmissionMapUv),S.push(_.thicknessMapUv),S.push(_.combine),S.push(_.fogExp2),S.push(_.sizeAttenuation),S.push(_.morphTargetsCount),S.push(_.morphAttributeCount),S.push(_.numSunLights),S.push(_.numDirLights),S.push(_.numPointLights),S.push(_.numSpotLights),S.push(_.numSpotLightMaps),S.push(_.numHemiLights),S.push(_.numRectAreaLights),S.push(_.numSunLightShadows),S.push(_.numDirLightShadows),S.push(_.numPointLightShadows),S.push(_.numSpotLightShadows),S.push(_.numSpotLightShadowsWithMaps),S.push(_.numLightProbes),S.push(_.shadowMapType),S.push(_.toneMapping),S.push(_.numClippingPlanes),S.push(_.numClipIntersection),S.push(_.depthPacking)}function x(S,_){a.disableAll(),_.instancing&&a.enable(0),_.instancingColor&&a.enable(1),_.instancingMorph&&a.enable(2),_.matcap&&a.enable(3),_.envMap&&a.enable(4),_.normalMapObjectSpace&&a.enable(5),_.normalMapTangentSpace&&a.enable(6),_.clearcoat&&a.enable(7),_.iridescence&&a.enable(8),_.alphaTest&&a.enable(9),_.vertexColors&&a.enable(10),_.vertexAlphas&&a.enable(11),_.vertexUv1s&&a.enable(12),_.vertexUv2s&&a.enable(13),_.vertexUv3s&&a.enable(14),_.vertexTangents&&a.enable(15),_.anisotropy&&a.enable(16),_.alphaHash&&a.enable(17),_.batching&&a.enable(18),_.dispersion&&a.enable(19),_.retroreflection&&a.enable(24),_.batchingColor&&a.enable(20),_.gradientMap&&a.enable(21),_.packedNormalMap&&a.enable(22),_.vertexNormals&&a.enable(23),S.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),_.numLightProbeGrids>0&&a.enable(22),_.hasPositionAttribute&&a.enable(23),S.push(a.mask)}function R(S){let _=p[S.type],E;if(_){let A=zi[_];E=cr.clone(A.uniforms)}else E=S.uniforms;return E}function b(S,_){let E=l.get(_);return E!==void 0?++E.usedTimes:(E=new Iy(i,_,S,r),u.push(E),l.set(_,E)),E}function I(S){if(--S.usedTimes===0){let _=u.indexOf(S);u[_]=u[u.length-1],u.pop(),l.delete(S.cacheKey),S.destroy()}}function L(S){o.remove(S)}function D(){o.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:R,acquireProgram:b,releaseProgram:I,releaseShaderCache:L,programs:u,dispose:D}}function Dy(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Uy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function kp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function zp(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,g,y,v,m){let x=i[e];return x===void 0?(x={id:f.id,object:f,geometry:p,material:g,materialVariant:a(f),groupOrder:y,renderOrder:f.renderOrder,z:v,group:m},i[e]=x):(x.id=f.id,x.object=f,x.geometry=p,x.material=g,x.materialVariant=a(f),x.groupOrder=y,x.renderOrder=f.renderOrder,x.z=v,x.group=m),e++,x}function c(f,p,g,y,v,m,x){x.reversedDepth===!0&&(v=-v);let R=o(f,p,g,y,v,m);g.transmission>0?n.push(R):g.transparent===!0?r.push(R):t.push(R)}function u(f,p,g,y,v,m){let x=o(f,p,g,y,v,m);g.transmission>0?n.unshift(x):g.transparent===!0?r.unshift(x):t.unshift(x)}function l(f,p){t.length>1&&t.sort(f||Uy),n.length>1&&n.sort(p||kp),r.length>1&&r.sort(p||kp)}function h(){for(let f=e,p=i.length;f<p;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:u,finish:h,sort:l}}function Oy(){let i=new WeakMap;function e(n,r){let s=i.get(n),a;return s===void 0?(a=new zp,i.set(n,[a])):r>=s.length?(a=new zp,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Fy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new $,color:new ke};break;case"SpotLight":t={position:new $,direction:new $,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new $,halfWidth:new $,halfHeight:new $};break}return i[e.id]=t,t}}}function Hy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var By=0;function ky(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function zy(i){let e=new Fy,t=Hy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new $);let r=new $,s=new at,a=new at;function o(u){let l=0,h=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,g=0,y=0,v=0,m=0,x=0,R=0,b=0,I=0,L=0,D=0,S=0,_=0,E=0;u.sort(ky);for(let M=0,P=u.length;M<P;M++){let U=u[M],k=U.color,Y=U.intensity,J=U.distance,ne=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Nr?ne=U.shadow.map.texture:ne=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)l+=k.r*Y,h+=k.g*Y,f+=k.b*Y;else if(U.isLightProbe){for(let ie=0;ie<9;ie++)n.probe[ie].addScaledVector(U.sh.coefficients[ie],Y);E++}else if(U.isSunLight){let ie=e.get(U);if(ie.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let se=U.shadow,re=t.get(U);re.shadowIntensity=se.intensity,re.shadowBias=se.bias,re.shadowNormalBias=se.normalBias,re.shadowRadius=se.radius,re.shadowMapSize.copy(se.mapSize).multiply(se.getFrameExtents()),n.sunShadow[g]=re,n.sunShadowMap[g]=ne;let Re=se.getViewportCount();for(let Ne=0;Ne<Re;Ne++)n.sunShadowMatrix[y+Ne]=se.getMatrix(Ne),n.sunShadowCascade[y+Ne]=se._cascadeData[Ne];y+=Re,g++}n.sun[p]=ie,p++}else if(U.isDirectionalLight){let ie=e.get(U);if(ie.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let se=U.shadow,re=t.get(U);re.shadowIntensity=se.intensity,re.shadowBias=se.bias,re.shadowNormalBias=se.normalBias,re.shadowRadius=se.radius,re.shadowMapSize=se.mapSize,n.directionalShadow[v]=re,n.directionalShadowMap[v]=ne,n.directionalShadowMatrix[v]=U.shadow.matrix,I++}n.directional[v]=ie,v++}else if(U.isSpotLight){let ie=e.get(U);ie.position.setFromMatrixPosition(U.matrixWorld),ie.color.copy(k).multiplyScalar(Y),ie.distance=J,ie.coneCos=Math.cos(U.angle),ie.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),ie.decay=U.decay,n.spot[x]=ie;let se=U.shadow;if(U.map&&(n.spotLightMap[S]=U.map,S++,se.updateMatrices(U),U.castShadow&&_++),n.spotLightMatrix[x]=se.matrix,U.castShadow){let re=t.get(U);re.shadowIntensity=se.intensity,re.shadowBias=se.bias,re.shadowNormalBias=se.normalBias,re.shadowRadius=se.radius,re.shadowMapSize=se.mapSize,n.spotShadow[x]=re,n.spotShadowMap[x]=ne,D++}x++}else if(U.isRectAreaLight){let ie=e.get(U);ie.color.copy(k).multiplyScalar(Y),ie.halfWidth.set(U.width*.5,0,0),ie.halfHeight.set(0,U.height*.5,0),n.rectArea[R]=ie,R++}else if(U.isPointLight){let ie=e.get(U);if(ie.color.copy(U.color).multiplyScalar(U.intensity),ie.distance=U.distance,ie.decay=U.decay,U.castShadow){let se=U.shadow,re=t.get(U);re.shadowIntensity=se.intensity,re.shadowBias=se.bias,re.shadowNormalBias=se.normalBias,re.shadowRadius=se.radius,re.shadowMapSize=se.mapSize,re.shadowCameraNear=se.camera.near,re.shadowCameraFar=se.camera.far,n.pointShadow[m]=re,n.pointShadowMap[m]=ne,n.pointShadowMatrix[m]=U.shadow.matrix,L++}n.point[m]=ie,m++}else if(U.isHemisphereLight){let ie=e.get(U);ie.skyColor.copy(U.color).multiplyScalar(Y),ie.groundColor.copy(U.groundColor).multiplyScalar(Y),n.hemi[b]=ie,b++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=h,n.ambient[2]=f;let A=n.hash;(A.sunLength!==p||A.directionalLength!==v||A.pointLength!==m||A.spotLength!==x||A.rectAreaLength!==R||A.hemiLength!==b||A.numSunShadows!==g||A.numDirectionalShadows!==I||A.numPointShadows!==L||A.numSpotShadows!==D||A.numSpotMaps!==S||A.numLightProbes!==E)&&(n.sun.length=p,n.directional.length=v,n.spot.length=x,n.rectArea.length=R,n.point.length=m,n.hemi.length=b,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.directionalShadowMatrix.length=I,n.pointShadow.length=L,n.pointShadowMap.length=L,n.pointShadowMatrix.length=L,n.spotShadow.length=D,n.spotShadowMap.length=D,n.spotLightMatrix.length=D+S-_,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=_,n.numLightProbes=E,A.sunLength=p,A.directionalLength=v,A.pointLength=m,A.spotLength=x,A.rectAreaLength=R,A.hemiLength=b,A.numSunShadows=g,A.numDirectionalShadows=I,A.numPointShadows=L,A.numSpotShadows=D,A.numSpotMaps=S,A.numLightProbes=E,n.version=By++)}function c(u,l){let h=0,f=0,p=0,g=0,y=0,v=0,m=l.matrixWorldInverse;for(let x=0,R=u.length;x<R;x++){let b=u[x];if(b.isSunLight){let I=n.sun[h];I.direction.setFromMatrixPosition(b.matrixWorld),I.direction.transformDirection(m),h++}else if(b.isDirectionalLight){let I=n.directional[f];I.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(m),f++}else if(b.isSpotLight){let I=n.spot[g];I.position.setFromMatrixPosition(b.matrixWorld),I.position.applyMatrix4(m),I.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(m),g++}else if(b.isRectAreaLight){let I=n.rectArea[y];I.position.setFromMatrixPosition(b.matrixWorld),I.position.applyMatrix4(m),a.identity(),s.copy(b.matrixWorld),s.premultiply(m),a.extractRotation(s),I.halfWidth.set(b.width*.5,0,0),I.halfHeight.set(0,b.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),y++}else if(b.isPointLight){let I=n.point[p];I.position.setFromMatrixPosition(b.matrixWorld),I.position.applyMatrix4(m),p++}else if(b.isHemisphereLight){let I=n.hemi[v];I.direction.setFromMatrixPosition(b.matrixWorld),I.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:n}}function Gp(i){let e=new zy(i),t=[],n=[],r=[];function s(f){h.camera=f,t.length=0,n.length=0,r.length=0}function a(f){t.push(f)}function o(f){n.push(f)}function c(f){r.push(f)}function u(){e.setup(t)}function l(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:u,setupLightsView:l,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Gy(i){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new Gp(i),e.set(r,[o])):s>=a.length?(o=new Gp(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Vy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wy=`uniform sampler2D shadow_pass;
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
}`,qy=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],Xy=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],Vp=new at,To=new $,Nh=new $;function Yy(i,e,t){let n=new Ws,r=new Ze,s=new Ze,a=new Lt,o=new Il,c=new Pl,u={},l=t.maxTextureSize,h={[Bi]:Sn,[Sn]:Bi,[Gn]:Gn},f=new Qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:Vy,fragmentShader:Wy}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new qt;g.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ue(g,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ao;let m=this.type;this.render=function(L,D,S){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||L.length===0)return;this.type===Fd&&(Ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ao);let _=i.getRenderTarget(),E=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),M=i.state;M.setBlending(oi),M.buffers.depth.getReversed()===!0?M.buffers.color.setClear(0,0,0,0):M.buffers.color.setClear(1,1,1,1),M.buffers.depth.setTest(!0),M.setScissorTest(!1);let P=m!==this.type;P&&D.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(k=>k.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,k=L.length;U<k;U++){let Y=L[U],J=Y.shadow;if(J===void 0){Ke("WebGLShadowMap:",Y,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;r.copy(J.mapSize);let ne=J.getFrameExtents();r.multiply(ne),s.copy(J.mapSize),(r.x>l||r.y>l)&&(r.x>l&&(s.x=Math.floor(l/ne.x),r.x=s.x*ne.x,J.mapSize.x=s.x),r.y>l&&(s.y=Math.floor(l/ne.y),r.y=s.y*ne.y,J.mapSize.y=s.y));let ie=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=ie,J.map===null||P===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===ea){if(Y.isPointLight){Ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new dn(r.x,r.y,{format:Nr,type:bn,minFilter:on,magFilter:on,generateMipmaps:!1}),J.map.texture.name=Y.name+".shadowMap",J.map.depthTexture=new wr(r.x,r.y,Zn),J.map.depthTexture.name=Y.name+".shadowMapDepth",J.map.depthTexture.format=Di,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Vt,J.map.depthTexture.magFilter=Vt}else Y.isPointLight?(J.map=new Fc(r.x),J.map.depthTexture=new Cl(r.x,Ti)):(J.map=new dn(r.x,r.y),J.map.depthTexture=new wr(r.x,r.y,Ti)),J.map.depthTexture.name=Y.name+".shadowMap",J.map.depthTexture.format=Di,this.type===ao?(J.map.depthTexture.compareFunction=ie?Dc:Nc,J.map.depthTexture.minFilter=on,J.map.depthTexture.magFilter=on):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Vt,J.map.depthTexture.magFilter=Vt);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==r.x||J.map.height!==r.y)&&J.map.setSize(r.x,r.y);let se=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();Y.isPointLight!==!0&&J.updateMatrices(Y,S);for(let re=0;re<se;re++){let Re=J.getCamera(re);if(Y.isPointLight){let Ne=J.camera,Qe=J.matrix,me=Y.distance||Ne.far;me!==Ne.far&&(Ne.far=me,Ne.updateProjectionMatrix()),To.setFromMatrixPosition(Y.matrixWorld),Ne.position.copy(To),Nh.copy(Ne.position),Nh.add(qy[re]),Ne.up.copy(Xy[re]),Ne.lookAt(Nh),Ne.updateMatrixWorld(),Qe.makeTranslation(-To.x,-To.y,-To.z),Vp.multiplyMatrices(Ne.projectionMatrix,Ne.matrixWorldInverse),J._frustum.setFromProjectionMatrix(Vp,Ne.coordinateSystem,Ne.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,re),i.clear();else{re===0&&(i.setRenderTarget(J.map),i.clear());let Ne=J.getViewport(re);a.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),M.viewport(a)}n=J.getFrustum(re),b(D,S,Re,Y,this.type)}J.isPointLightShadow!==!0&&this.type===ea&&x(J,S),J.needsUpdate=!1}m=this.type,v.needsUpdate=!1,i.setRenderTarget(_,E,A)};function x(L,D){let S=e.update(y);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null?L.mapPass=new dn(r.x,r.y,{format:Nr,type:bn}):(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)&&L.mapPass.setSize(L.map.width,L.map.height),f.uniforms.shadow_pass.value=L.map.depthTexture,f.uniforms.resolution.value.set(L.map.width,L.map.height),f.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(D,null,S,f,y,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value.set(L.map.width,L.map.height),p.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(D,null,S,p,y,null)}function R(L,D,S,_){let E=null,A=S.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(A!==void 0)E=A;else if(E=S.isPointLight===!0?c:o,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let M=E.uuid,P=D.uuid,U=u[M];U===void 0&&(U={},u[M]=U);let k=U[P];k===void 0&&(k=E.clone(),U[P]=k,D.addEventListener("dispose",I)),E=k}if(E.visible=D.visible,E.wireframe=D.wireframe,_===ea?E.side=D.shadowSide!==null?D.shadowSide:D.side:E.side=D.shadowSide!==null?D.shadowSide:h[D.side],E.alphaMap=D.alphaMap,E.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,E.map=D.map,E.clipShadows=D.clipShadows,E.clippingPlanes=D.clippingPlanes,E.clipIntersection=D.clipIntersection,E.displacementMap=D.displacementMap,E.displacementScale=D.displacementScale,E.displacementBias=D.displacementBias,E.wireframeLinewidth=D.wireframeLinewidth,E.linewidth=D.linewidth,S.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let M=i.properties.get(E);M.light=S}return E}function b(L,D,S,_,E){if(L.visible===!1)return;if(L.layers.test(D.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&E===ea)&&(!L.frustumCulled||L.intersectsFrustum(n))){L.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,L.matrixWorld);let P=e.update(L),U=L.material;if(Array.isArray(U)){let k=P.groups;for(let Y=0,J=k.length;Y<J;Y++){let ne=k[Y],ie=U[ne.materialIndex];if(ie&&ie.visible){let se=R(L,ie,_,E);L.onBeforeShadow(i,L,D,S,P,se,ne),i.renderBufferDirect(S,null,P,se,L,ne),L.onAfterShadow(i,L,D,S,P,se,ne)}}}else if(U.visible){let k=R(L,U,_,E);L.onBeforeShadow(i,L,D,S,P,k,null),i.renderBufferDirect(S,null,P,k,L,null),L.onAfterShadow(i,L,D,S,P,k,null)}}let M=L.children;for(let P=0,U=M.length;P<U;P++)b(M[P],D,S,_,E)}function I(L){L.target.removeEventListener("dispose",I);for(let S in u){let _=u[S],E=L.target.uuid;E in _&&(_[E].dispose(),delete _[E])}}}function Ky(i,e){function t(){let q=!1,Se=new Lt,he=null,we=new Lt(0,0,0,0);return{setMask:function(Pe){he!==Pe&&!q&&(i.colorMask(Pe,Pe,Pe,Pe),he=Pe)},setLocked:function(Pe){q=Pe},setClear:function(Pe,ge,qe,ze,Ut){Ut===!0&&(Pe*=ze,ge*=ze,qe*=ze),Se.set(Pe,ge,qe,ze),we.equals(Se)===!1&&(i.clearColor(Pe,ge,qe,ze),we.copy(Se))},reset:function(){q=!1,he=null,we.set(-1,0,0,0)}}}function n(){let q=!1,Se=!1,he=null,we=null,Pe=null;return{setReversed:function(ge){if(Se!==ge){let qe=e.get("EXT_clip_control");ge?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Se=ge;let ze=Pe;Pe=null,this.setClear(ze)}},getReversed:function(){return Se},setTest:function(ge){ge?Z(i.DEPTH_TEST):fe(i.DEPTH_TEST)},setMask:function(ge){he!==ge&&!q&&(i.depthMask(ge),he=ge)},setFunc:function(ge){if(Se&&(ge=xp[ge]),we!==ge){switch(ge){case vl:i.depthFunc(i.NEVER);break;case _l:i.depthFunc(i.ALWAYS);break;case xl:i.depthFunc(i.LESS);break;case Ds:i.depthFunc(i.LEQUAL);break;case yl:i.depthFunc(i.EQUAL);break;case Ml:i.depthFunc(i.GEQUAL);break;case Sl:i.depthFunc(i.GREATER);break;case bl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}we=ge}},setLocked:function(ge){q=ge},setClear:function(ge){Pe!==ge&&(Pe=ge,Se&&(ge=1-ge),i.clearDepth(ge))},reset:function(){q=!1,he=null,we=null,Pe=null,Se=!1}}}function r(){let q=!1,Se=null,he=null,we=null,Pe=null,ge=null,qe=null,ze=null,Ut=null;return{setTest:function(d){q||(d?Z(i.STENCIL_TEST):fe(i.STENCIL_TEST))},setMask:function(d){Se!==d&&!q&&(i.stencilMask(d),Se=d)},setFunc:function(d,w,B){(he!==d||we!==w||Pe!==B)&&(i.stencilFunc(d,w,B),he=d,we=w,Pe=B)},setOp:function(d,w,B){(ge!==d||qe!==w||ze!==B)&&(i.stencilOp(d,w,B),ge=d,qe=w,ze=B)},setLocked:function(d){q=d},setClear:function(d){Ut!==d&&(i.clearStencil(d),Ut=d)},reset:function(){q=!1,Se=null,he=null,we=null,Pe=null,ge=null,qe=null,ze=null,Ut=null}}}let s=new t,a=new n,o=new r,c=new WeakMap,u=new WeakMap,l={},h={},f={},p=new WeakMap,g=[],y=null,v=!1,m=null,x=null,R=null,b=null,I=null,L=null,D=null,S=new ke(0,0,0),_=0,E=!1,A=null,M=null,P=null,U=null,k=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,ne=0,ie=i.getParameter(i.VERSION);ie.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(ie)[1]),J=ne>=1):ie.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),J=ne>=2);let se=null,re={},Re=i.getParameter(i.SCISSOR_BOX),Ne=i.getParameter(i.VIEWPORT),Qe=new Lt().fromArray(Re),me=new Lt().fromArray(Ne);function oe(q,Se,he,we){let Pe=new Uint8Array(4),ge=i.createTexture();i.bindTexture(q,ge),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qe=0;qe<he;qe++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(Se,0,i.RGBA,1,1,we,0,i.RGBA,i.UNSIGNED_BYTE,Pe):i.texImage2D(Se+qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pe);return ge}let G={};G[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),G[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),G[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(i.DEPTH_TEST),a.setFunc(Ds),it(!1),Mt(nh),Z(i.CULL_FACE),nt(oi);function Z(q){l[q]!==!0&&(i.enable(q),l[q]=!0)}function fe(q){l[q]!==!1&&(i.disable(q),l[q]=!1)}function ve(q,Se){return f[q]!==Se?(i.bindFramebuffer(q,Se),f[q]=Se,q===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Se),q===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Se),!0):!1}function Me(q,Se){let he=g,we=!1;if(q){he=p.get(Se),he===void 0&&(he=[],p.set(Se,he));let Pe=q.textures;if(he.length!==Pe.length||he[0]!==i.COLOR_ATTACHMENT0){for(let ge=0,qe=Pe.length;ge<qe;ge++)he[ge]=i.COLOR_ATTACHMENT0+ge;he.length=Pe.length,we=!0}}else he[0]!==i.BACK&&(he[0]=i.BACK,we=!0);we&&i.drawBuffers(he)}function Oe(q){return y!==q?(i.useProgram(q),y=q,!0):!1}let et={[ss]:i.FUNC_ADD,[Bd]:i.FUNC_SUBTRACT,[kd]:i.FUNC_REVERSE_SUBTRACT};et[zd]=i.MIN,et[Gd]=i.MAX;let Fe={[Vd]:i.ZERO,[Wd]:i.ONE,[qd]:i.SRC_COLOR,[sh]:i.SRC_ALPHA,[jd]:i.SRC_ALPHA_SATURATE,[Zd]:i.DST_COLOR,[Yd]:i.DST_ALPHA,[Xd]:i.ONE_MINUS_SRC_COLOR,[ah]:i.ONE_MINUS_SRC_ALPHA,[Jd]:i.ONE_MINUS_DST_COLOR,[Kd]:i.ONE_MINUS_DST_ALPHA,[$d]:i.CONSTANT_COLOR,[Qd]:i.ONE_MINUS_CONSTANT_COLOR,[ep]:i.CONSTANT_ALPHA,[tp]:i.ONE_MINUS_CONSTANT_ALPHA};function nt(q,Se,he,we,Pe,ge,qe,ze,Ut,d){if(q===oi){v===!0&&(fe(i.BLEND),v=!1);return}if(v===!1&&(Z(i.BLEND),v=!0),q!==Hd){if(q!==m||d!==E){if((x!==ss||I!==ss)&&(i.blendEquation(i.FUNC_ADD),x=ss,I=ss),d)switch(q){case ta:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lr:i.blendFunc(i.ONE,i.ONE);break;case ih:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:tt("WebGLState: Invalid blending: ",q);break}else switch(q){case ta:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ih:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rh:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",q);break}R=null,b=null,L=null,D=null,S.set(0,0,0),_=0,m=q,E=d}return}Pe=Pe||Se,ge=ge||he,qe=qe||we,(Se!==x||Pe!==I)&&(i.blendEquationSeparate(et[Se],et[Pe]),x=Se,I=Pe),(he!==R||we!==b||ge!==L||qe!==D)&&(i.blendFuncSeparate(Fe[he],Fe[we],Fe[ge],Fe[qe]),R=he,b=we,L=ge,D=qe),(ze.equals(S)===!1||Ut!==_)&&(i.blendColor(ze.r,ze.g,ze.b,Ut),S.copy(ze),_=Ut),m=q,E=!1}function ft(q,Se){q.side===Gn?fe(i.CULL_FACE):Z(i.CULL_FACE);let he=q.side===Sn;Se&&(he=!he),it(he),q.blending===ta&&q.transparent===!1?nt(oi):nt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),a.setFunc(q.depthFunc),a.setTest(q.depthTest),a.setMask(q.depthWrite),s.setMask(q.colorWrite);let we=q.stencilWrite;o.setTest(we),we&&(o.setMask(q.stencilWriteMask),o.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),o.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),jt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function it(q){A!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),A=q)}function Mt(q){q!==Ud?(Z(i.CULL_FACE),q!==M&&(q===nh?i.cullFace(i.BACK):q===Od?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):fe(i.CULL_FACE),M=q}function Rt(q){q!==P&&(J&&i.lineWidth(q),P=q)}function jt(q,Se,he){q?(Z(i.POLYGON_OFFSET_FILL),(U!==Se||k!==he)&&(U=Se,k=he,a.getReversed()&&(Se=-Se),i.polygonOffset(Se,he))):fe(i.POLYGON_OFFSET_FILL)}function yt(q){q?Z(i.SCISSOR_TEST):fe(i.SCISSOR_TEST)}function kt(q){q===void 0&&(q=i.TEXTURE0+Y-1),se!==q&&(i.activeTexture(q),se=q)}function X(q,Se,he){he===void 0&&(se===null?he=i.TEXTURE0+Y-1:he=se);let we=re[he];we===void 0&&(we={type:void 0,texture:void 0},re[he]=we),(we.type!==q||we.texture!==Se)&&(se!==he&&(i.activeTexture(he),se=he),i.bindTexture(q,Se||G[q]),we.type=q,we.texture=Se)}function Dt(){let q=re[se];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function dt(){try{i.compressedTexImage2D(...arguments)}catch(q){tt("WebGLState:",q)}}function H(){try{i.compressedTexImage3D(...arguments)}catch(q){tt("WebGLState:",q)}}function T(){try{i.texSubImage2D(...arguments)}catch(q){tt("WebGLState:",q)}}function N(){try{i.texSubImage3D(...arguments)}catch(q){tt("WebGLState:",q)}}function O(){try{i.compressedTexSubImage2D(...arguments)}catch(q){tt("WebGLState:",q)}}function F(){try{i.compressedTexSubImage3D(...arguments)}catch(q){tt("WebGLState:",q)}}function z(){try{i.texStorage2D(...arguments)}catch(q){tt("WebGLState:",q)}}function j(){try{i.texStorage3D(...arguments)}catch(q){tt("WebGLState:",q)}}function V(){try{i.texImage2D(...arguments)}catch(q){tt("WebGLState:",q)}}function K(){try{i.texImage3D(...arguments)}catch(q){tt("WebGLState:",q)}}function ce(q){return h[q]!==void 0?h[q]:i.getParameter(q)}function xe(q,Se){h[q]!==Se&&(i.pixelStorei(q,Se),h[q]=Se)}function de(q){Qe.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),Qe.copy(q))}function ye(q){me.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),me.copy(q))}function be(q,Se){let he=u.get(Se);he===void 0&&(he=new WeakMap,u.set(Se,he));let we=he.get(q);we===void 0&&(we=i.getUniformBlockIndex(Se,q.name),he.set(q,we))}function De(q,Se){let we=u.get(Se).get(q);c.get(Se)!==we&&(i.uniformBlockBinding(Se,we,q.__bindingPointIndex),c.set(Se,we))}function We(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),l={},h={},se=null,re={},f={},p=new WeakMap,g=[],y=null,v=!1,m=null,x=null,R=null,b=null,I=null,L=null,D=null,S=new ke(0,0,0),_=0,E=!1,A=null,M=null,P=null,U=null,k=null,Qe.set(0,0,i.canvas.width,i.canvas.height),me.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Z,disable:fe,bindFramebuffer:ve,drawBuffers:Me,useProgram:Oe,setBlending:nt,setMaterial:ft,setFlipSided:it,setCullFace:Mt,setLineWidth:Rt,setPolygonOffset:jt,setScissorTest:yt,activeTexture:kt,bindTexture:X,unbindTexture:Dt,compressedTexImage2D:dt,compressedTexImage3D:H,texImage2D:V,texImage3D:K,pixelStorei:xe,getParameter:ce,updateUBOMapping:be,uniformBlockBinding:De,texStorage2D:z,texStorage3D:j,texSubImage2D:T,texSubImage3D:N,compressedTexSubImage2D:O,compressedTexSubImage3D:F,scissor:de,viewport:ye,reset:We}}function Zy(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ze,l=new WeakMap,h=new Set,f,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(H,T){return g?new OffscreenCanvas(H,T):Fs("canvas")}function v(H,T,N){let O=1,F=dt(H);if((F.width>N||F.height>N)&&(O=N/Math.max(F.width,F.height)),O<1)if(typeof HTMLImageElement!="undefined"&&H instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&H instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&H instanceof ImageBitmap||typeof VideoFrame!="undefined"&&H instanceof VideoFrame){let z=Math.floor(O*F.width),j=Math.floor(O*F.height);f===void 0&&(f=y(z,j));let V=T?y(z,j):f;return V.width=z,V.height=j,V.getContext("2d").drawImage(H,0,0,z,j),Ke("WebGLRenderer: Texture has been resized from ("+F.width+"x"+F.height+") to ("+z+"x"+j+")."),V}else return"data"in H&&Ke("WebGLRenderer: Image in DataTexture is too big ("+F.width+"x"+F.height+")."),H;return H}function m(H){return H.generateMipmaps}function x(H){i.generateMipmap(H)}function R(H){return H.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:H.isWebGL3DRenderTarget?i.TEXTURE_3D:H.isWebGLArrayRenderTarget||H.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(H,T,N,O,F,z=!1){if(H!==null){if(i[H]!==void 0)return i[H];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+H+"'")}let j;O&&(j=e.get("EXT_texture_norm16"),j||Ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let V=T;if(T===i.RED&&(N===i.FLOAT&&(V=i.R32F),N===i.HALF_FLOAT&&(V=i.R16F),N===i.UNSIGNED_BYTE&&(V=i.R8),N===i.UNSIGNED_SHORT&&j&&(V=j.R16_EXT),N===i.SHORT&&j&&(V=j.R16_SNORM_EXT)),T===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(V=i.R8UI),N===i.UNSIGNED_SHORT&&(V=i.R16UI),N===i.UNSIGNED_INT&&(V=i.R32UI),N===i.BYTE&&(V=i.R8I),N===i.SHORT&&(V=i.R16I),N===i.INT&&(V=i.R32I)),T===i.RG&&(N===i.FLOAT&&(V=i.RG32F),N===i.HALF_FLOAT&&(V=i.RG16F),N===i.UNSIGNED_BYTE&&(V=i.RG8),N===i.UNSIGNED_SHORT&&j&&(V=j.RG16_EXT),N===i.SHORT&&j&&(V=j.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(V=i.RG8UI),N===i.UNSIGNED_SHORT&&(V=i.RG16UI),N===i.UNSIGNED_INT&&(V=i.RG32UI),N===i.BYTE&&(V=i.RG8I),N===i.SHORT&&(V=i.RG16I),N===i.INT&&(V=i.RG32I)),T===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(V=i.RGB8UI),N===i.UNSIGNED_SHORT&&(V=i.RGB16UI),N===i.UNSIGNED_INT&&(V=i.RGB32UI),N===i.BYTE&&(V=i.RGB8I),N===i.SHORT&&(V=i.RGB16I),N===i.INT&&(V=i.RGB32I)),T===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(V=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(V=i.RGBA16UI),N===i.UNSIGNED_INT&&(V=i.RGBA32UI),N===i.BYTE&&(V=i.RGBA8I),N===i.SHORT&&(V=i.RGBA16I),N===i.INT&&(V=i.RGBA32I)),T===i.RGB&&(N===i.UNSIGNED_SHORT&&j&&(V=j.RGB16_EXT),N===i.SHORT&&j&&(V=j.RGB16_SNORM_EXT),N===i.UNSIGNED_INT_5_9_9_9_REV&&(V=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(V=i.R11F_G11F_B10F)),T===i.RGBA){let K=z?Fa:ot.getTransfer(F);N===i.FLOAT&&(V=i.RGBA32F),N===i.HALF_FLOAT&&(V=i.RGBA16F),N===i.UNSIGNED_BYTE&&(V=K===wt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT&&j&&(V=j.RGBA16_EXT),N===i.SHORT&&j&&(V=j.RGBA16_SNORM_EXT),N===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function I(H,T){let N;return H?T===null||T===Ti||T===ra?N=i.DEPTH24_STENCIL8:T===Zn?N=i.DEPTH32F_STENCIL8:T===ia&&(N=i.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ti||T===ra?N=i.DEPTH_COMPONENT24:T===Zn?N=i.DEPTH_COMPONENT32F:T===ia&&(N=i.DEPTH_COMPONENT16),N}function L(H,T){return m(H)===!0||H.isFramebufferTexture&&H.minFilter!==Vt&&H.minFilter!==on?Math.log2(Math.max(T.width,T.height))+1:H.mipmaps!==void 0&&H.mipmaps.length>0?H.mipmaps.length:H.isCompressedTexture&&Array.isArray(H.image)?T.mipmaps.length:1}function D(H){let T=H.target;T.removeEventListener("dispose",D),_(T),T.isVideoTexture&&l.delete(T),T.isHTMLTexture&&h.delete(T)}function S(H){let T=H.target;T.removeEventListener("dispose",S),A(T)}function _(H){let T=n.get(H);if(T.__webglInit===void 0)return;let N=H.source,O=p.get(N);if(O){let F=O[T.__cacheKey];F.usedTimes--,F.usedTimes===0&&E(H),Object.keys(O).length===0&&p.delete(N)}n.remove(H)}function E(H){let T=n.get(H);i.deleteTexture(T.__webglTexture);let N=H.source,O=p.get(N);delete O[T.__cacheKey],a.memory.textures--}function A(H){let T=n.get(H);if(H.depthTexture&&(H.depthTexture.dispose(),n.remove(H.depthTexture)),H.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(T.__webglFramebuffer[O]))for(let F=0;F<T.__webglFramebuffer[O].length;F++)i.deleteFramebuffer(T.__webglFramebuffer[O][F]);else i.deleteFramebuffer(T.__webglFramebuffer[O]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[O])}else{if(Array.isArray(T.__webglFramebuffer))for(let O=0;O<T.__webglFramebuffer.length;O++)i.deleteFramebuffer(T.__webglFramebuffer[O]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let O=0;O<T.__webglColorRenderbuffer.length;O++)T.__webglColorRenderbuffer[O]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[O]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let N=H.textures;for(let O=0,F=N.length;O<F;O++){let z=n.get(N[O]);z.__webglTexture&&(i.deleteTexture(z.__webglTexture),a.memory.textures--),n.remove(N[O])}n.remove(H)}let M=0;function P(){M=0}function U(){return M}function k(H){M=H}function Y(){let H=M;return H>=r.maxTextures&&Ke("WebGLTextures: Trying to use "+(H+1)+" texture units while this GPU supports only "+r.maxTextures),M+=1,H}function J(H){let T=[];return T.push(H.wrapS),T.push(H.wrapT),T.push(H.wrapR||0),T.push(H.magFilter),T.push(H.minFilter),T.push(H.anisotropy),T.push(H.internalFormat),T.push(H.format),T.push(H.type),T.push(H.generateMipmaps),T.push(H.premultiplyAlpha),T.push(H.flipY),T.push(H.unpackAlignment),T.push(H.colorSpace),T.join()}function ne(H,T){let N=n.get(H);if(H.isVideoTexture&&X(H),H.isRenderTargetTexture===!1&&H.isExternalTexture!==!0&&H.version>0&&N.__version!==H.version){let O=H.image;if(O===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{fe(N,H,T);return}}else H.isExternalTexture&&(N.__webglTexture=H.sourceTexture?H.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+T)}function ie(H,T){let N=n.get(H);if(H.isRenderTargetTexture===!1&&H.version>0&&N.__version!==H.version){fe(N,H,T);return}else H.isExternalTexture&&(N.__webglTexture=H.sourceTexture?H.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+T)}function se(H,T){let N=n.get(H);if(H.isRenderTargetTexture===!1&&H.version>0&&N.__version!==H.version){fe(N,H,T);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+T)}function re(H,T){let N=n.get(H);if(H.isCubeDepthTexture!==!0&&H.version>0&&N.__version!==H.version){ve(N,H,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+T)}let Re={[ai]:i.REPEAT,[si]:i.CLAMP_TO_EDGE,[Us]:i.MIRRORED_REPEAT},Ne={[Vt]:i.NEAREST,[Xl]:i.NEAREST_MIPMAP_NEAREST,[ls]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[na]:i.LINEAR_MIPMAP_NEAREST,[bi]:i.LINEAR_MIPMAP_LINEAR},Qe={[up]:i.NEVER,[mp]:i.ALWAYS,[hp]:i.LESS,[Nc]:i.LEQUAL,[fp]:i.EQUAL,[Dc]:i.GEQUAL,[dp]:i.GREATER,[pp]:i.NOTEQUAL};function me(H,T){if(T.type===Zn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===on||T.magFilter===na||T.magFilter===ls||T.magFilter===bi||T.minFilter===on||T.minFilter===na||T.minFilter===ls||T.minFilter===bi)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(H,i.TEXTURE_WRAP_S,Re[T.wrapS]),i.texParameteri(H,i.TEXTURE_WRAP_T,Re[T.wrapT]),(H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY)&&i.texParameteri(H,i.TEXTURE_WRAP_R,Re[T.wrapR]),i.texParameteri(H,i.TEXTURE_MAG_FILTER,Ne[T.magFilter]),i.texParameteri(H,i.TEXTURE_MIN_FILTER,Ne[T.minFilter]),T.compareFunction&&(i.texParameteri(H,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(H,i.TEXTURE_COMPARE_FUNC,Qe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Vt||T.minFilter!==ls&&T.minFilter!==bi||T.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(H,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function oe(H,T){let N=!1;H.__webglInit===void 0&&(H.__webglInit=!0,T.addEventListener("dispose",D));let O=T.source,F=p.get(O);F===void 0&&(F={},p.set(O,F));let z=J(T);if(z!==H.__cacheKey){F[z]===void 0&&(F[z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),F[z].usedTimes++;let j=F[H.__cacheKey];j!==void 0&&(F[H.__cacheKey].usedTimes--,j.usedTimes===0&&E(T)),H.__cacheKey=z,H.__webglTexture=F[z].texture}return N}function G(H,T,N){return Math.floor(Math.floor(H/N)/T)}function Z(H,T,N,O){let z=H.updateRanges;if(z.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,N,O,T.data);else{z.sort((xe,de)=>xe.start-de.start);let j=0;for(let xe=1;xe<z.length;xe++){let de=z[j],ye=z[xe],be=de.start+de.count,De=G(ye.start,T.width,4),We=G(de.start,T.width,4);ye.start<=be+1&&De===We&&G(ye.start+ye.count-1,T.width,4)===De?de.count=Math.max(de.count,ye.start+ye.count-de.start):(++j,z[j]=ye)}z.length=j+1;let V=t.getParameter(i.UNPACK_ROW_LENGTH),K=t.getParameter(i.UNPACK_SKIP_PIXELS),ce=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let xe=0,de=z.length;xe<de;xe++){let ye=z[xe],be=Math.floor(ye.start/4),De=Math.ceil(ye.count/4),We=be%T.width,q=Math.floor(be/T.width),Se=De,he=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,We),t.pixelStorei(i.UNPACK_SKIP_ROWS,q),t.texSubImage2D(i.TEXTURE_2D,0,We,q,Se,he,N,O,T.data)}H.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,V),t.pixelStorei(i.UNPACK_SKIP_PIXELS,K),t.pixelStorei(i.UNPACK_SKIP_ROWS,ce)}}function fe(H,T,N){let O=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(O=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(O=i.TEXTURE_3D);let F=oe(H,T),z=T.source;t.bindTexture(O,H.__webglTexture,i.TEXTURE0+N);let j=n.get(z);if(z.version!==j.__version||F===!0){if(t.activeTexture(i.TEXTURE0+N),(typeof ImageBitmap!="undefined"&&T.image instanceof ImageBitmap)===!1){let he=ot.getPrimaries(ot.workingColorSpace),we=T.colorSpace===jn?null:ot.getPrimaries(T.colorSpace),Pe=T.colorSpace===jn||he===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe)}t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let K=v(T.image,!1,r.maxTextureSize);K=Dt(T,K);let ce=s.convert(T.format,T.colorSpace),xe=s.convert(T.type),de=b(T.internalFormat,ce,xe,T.normalized,T.colorSpace,T.isVideoTexture);me(O,T);let ye,be=T.mipmaps,De=T.isVideoTexture!==!0,We=j.__version===void 0||F===!0,q=z.dataReady,Se=L(T,K);if(T.isDepthTexture)de=I(T.format===Lr,T.type),We&&(De?t.texStorage2D(i.TEXTURE_2D,1,de,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,de,K.width,K.height,0,ce,xe,null));else if(T.isDataTexture)if(be.length>0){De&&We&&t.texStorage2D(i.TEXTURE_2D,Se,de,be[0].width,be[0].height);for(let he=0,we=be.length;he<we;he++)ye=be[he],De?q&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,ye.width,ye.height,ce,xe,ye.data):t.texImage2D(i.TEXTURE_2D,he,de,ye.width,ye.height,0,ce,xe,ye.data);T.generateMipmaps=!1}else De?(We&&t.texStorage2D(i.TEXTURE_2D,Se,de,K.width,K.height),q&&Z(T,K,ce,xe)):t.texImage2D(i.TEXTURE_2D,0,de,K.width,K.height,0,ce,xe,K.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){De&&We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,de,be[0].width,be[0].height,K.depth);for(let he=0,we=be.length;he<we;he++)if(ye=be[he],T.format!==Jn)if(ce!==null)if(De){if(q)if(T.layerUpdates.size>0){let Pe=Sh(ye.width,ye.height,T.format,T.type);for(let ge of T.layerUpdates){let qe=ye.data.subarray(ge*Pe/ye.data.BYTES_PER_ELEMENT,(ge+1)*Pe/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,ge,ye.width,ye.height,1,ce,qe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,ye.width,ye.height,K.depth,ce,ye.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,he,de,ye.width,ye.height,K.depth,0,ye.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?q&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,ye.width,ye.height,K.depth,ce,xe,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,he,de,ye.width,ye.height,K.depth,0,ce,xe,ye.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{De&&We&&t.texStorage2D(i.TEXTURE_2D,Se,de,be[0].width,be[0].height);for(let he=0,we=be.length;he<we;he++)ye=be[he],T.format!==Jn?ce!==null?De?q&&t.compressedTexSubImage2D(i.TEXTURE_2D,he,0,0,ye.width,ye.height,ce,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,he,de,ye.width,ye.height,0,ye.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?q&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,ye.width,ye.height,ce,xe,ye.data):t.texImage2D(i.TEXTURE_2D,he,de,ye.width,ye.height,0,ce,xe,ye.data)}else if(T.isDataArrayTexture)if(De){if(We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,de,K.width,K.height,K.depth),q)if(T.layerUpdates.size>0){let he=Sh(K.width,K.height,T.format,T.type);for(let we of T.layerUpdates){let Pe=K.data.subarray(we*he/K.data.BYTES_PER_ELEMENT,(we+1)*he/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,we,K.width,K.height,1,ce,xe,Pe)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ce,xe,K.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,de,K.width,K.height,K.depth,0,ce,xe,K.data);else if(T.isData3DTexture)De?(We&&t.texStorage3D(i.TEXTURE_3D,Se,de,K.width,K.height,K.depth),q&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ce,xe,K.data)):t.texImage3D(i.TEXTURE_3D,0,de,K.width,K.height,K.depth,0,ce,xe,K.data);else if(T.isFramebufferTexture){if(We)if(De)t.texStorage2D(i.TEXTURE_2D,Se,de,K.width,K.height);else{let he=K.width,we=K.height;for(let Pe=0;Pe<Se;Pe++)t.texImage2D(i.TEXTURE_2D,Pe,de,he,we,0,ce,xe,null),he>>=1,we>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let he=i.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),K.parentNode!==he){he.appendChild(K),h.add(T),he.onpaint=we=>{let Pe=we.changedElements;for(let ge of h)Pe.includes(ge.image)&&(ge.needsUpdate=!0)},he.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{let Pe=i.RGBA,ge=i.RGBA,qe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Pe,ge,qe,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(be.length>0){if(De&&We){let he=dt(be[0]);t.texStorage2D(i.TEXTURE_2D,Se,de,he.width,he.height)}for(let he=0,we=be.length;he<we;he++)ye=be[he],De?q&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,ce,xe,ye):t.texImage2D(i.TEXTURE_2D,he,de,ce,xe,ye);T.generateMipmaps=!1}else if(De){if(We){let he=dt(K);t.texStorage2D(i.TEXTURE_2D,Se,de,he.width,he.height)}q&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce,xe,K)}else t.texImage2D(i.TEXTURE_2D,0,de,ce,xe,K);m(T)&&x(O),j.__version=z.version,T.onUpdate&&T.onUpdate(T)}H.__version=T.version}function ve(H,T,N){if(T.image.length!==6)return;let O=oe(H,T),F=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+N);let z=n.get(F);if(F.version!==z.__version||O===!0){t.activeTexture(i.TEXTURE0+N);let j=ot.getPrimaries(ot.workingColorSpace),V=T.colorSpace===jn?null:ot.getPrimaries(T.colorSpace),K=T.colorSpace===jn||j===V?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let ce=T.isCompressedTexture||T.image[0].isCompressedTexture,xe=T.image[0]&&T.image[0].isDataTexture,de=[];for(let ge=0;ge<6;ge++)!ce&&!xe?de[ge]=v(T.image[ge],!0,r.maxCubemapSize):de[ge]=xe?T.image[ge].image:T.image[ge],de[ge]=Dt(T,de[ge]);let ye=de[0],be=s.convert(T.format,T.colorSpace),De=s.convert(T.type),We=b(T.internalFormat,be,De,T.normalized,T.colorSpace),q=T.isVideoTexture!==!0,Se=z.__version===void 0||O===!0,he=F.dataReady,we=L(T,ye);me(i.TEXTURE_CUBE_MAP,T);let Pe;if(ce){q&&Se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,we,We,ye.width,ye.height);for(let ge=0;ge<6;ge++){Pe=de[ge].mipmaps;for(let qe=0;qe<Pe.length;qe++){let ze=Pe[qe];T.format!==Jn?be!==null?q?he&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,qe,0,0,ze.width,ze.height,be,ze.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,qe,We,ze.width,ze.height,0,ze.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,qe,0,0,ze.width,ze.height,be,De,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,qe,We,ze.width,ze.height,0,be,De,ze.data)}}}else{if(Pe=T.mipmaps,q&&Se){Pe.length>0&&we++;let ge=dt(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,we,We,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(xe){q?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,de[ge].width,de[ge].height,be,De,de[ge].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,We,de[ge].width,de[ge].height,0,be,De,de[ge].data);for(let qe=0;qe<Pe.length;qe++){let Ut=Pe[qe].image[ge].image;q?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,qe+1,0,0,Ut.width,Ut.height,be,De,Ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,qe+1,We,Ut.width,Ut.height,0,be,De,Ut.data)}}else{q?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,be,De,de[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,We,be,De,de[ge]);for(let qe=0;qe<Pe.length;qe++){let ze=Pe[qe];q?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,qe+1,0,0,be,De,ze.image[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,qe+1,We,be,De,ze.image[ge])}}}m(T)&&x(i.TEXTURE_CUBE_MAP),z.__version=F.version,T.onUpdate&&T.onUpdate(T)}H.__version=T.version}function Me(H,T,N,O,F,z){let j=s.convert(N.format,N.colorSpace),V=s.convert(N.type),K=b(N.internalFormat,j,V,N.normalized,N.colorSpace),ce=n.get(T),xe=n.get(N);if(xe.__renderTarget=T,!ce.__hasExternalTextures){let de=Math.max(1,T.width>>z),ye=Math.max(1,T.height>>z);F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?t.texImage3D(F,z,K,de,ye,T.depth,0,j,V,null):t.texImage2D(F,z,K,de,ye,0,j,V,null)}t.bindFramebuffer(i.FRAMEBUFFER,H),kt(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,O,F,xe.__webglTexture,0,yt(T)):(F===i.TEXTURE_2D||F>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&F<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,O,F,xe.__webglTexture,z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(H,T,N){if(i.bindRenderbuffer(i.RENDERBUFFER,H),T.depthBuffer){let O=T.depthTexture,F=O&&O.isDepthTexture?O.type:null,z=I(T.stencilBuffer,F),j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;kt(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt(T),z,T.width,T.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt(T),z,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,z,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,H)}else{let O=T.textures;for(let F=0;F<O.length;F++){let z=O[F],j=s.convert(z.format,z.colorSpace),V=s.convert(z.type),K=b(z.internalFormat,j,V,z.normalized,z.colorSpace);kt(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt(T),K,T.width,T.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt(T),K,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,K,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function et(H,T,N){let O=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,H),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let F=n.get(T.depthTexture);if(F.__renderTarget=T,(!F.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),O){if(F.__webglInit===void 0&&(F.__webglInit=!0,T.depthTexture.addEventListener("dispose",D)),F.__webglTexture===void 0){F.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture),me(i.TEXTURE_CUBE_MAP,T.depthTexture);let ce=s.convert(T.depthTexture.format),xe=s.convert(T.depthTexture.type),de;T.depthTexture.format===Di?de=i.DEPTH_COMPONENT24:T.depthTexture.format===Lr&&(de=i.DEPTH24_STENCIL8);for(let ye=0;ye<6;ye++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,de,T.width,T.height,0,ce,xe,null)}}else ne(T.depthTexture,0);let z=F.__webglTexture,j=yt(T),V=O?i.TEXTURE_CUBE_MAP_POSITIVE_X+N:i.TEXTURE_2D,K=T.depthTexture.format===Lr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===Di)kt(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,V,z,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,K,V,z,0);else if(T.depthTexture.format===Lr)kt(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,V,z,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,K,V,z,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Fe(H){let T=n.get(H),N=H.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==H.depthTexture){let O=H.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),O){let F=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,O.removeEventListener("dispose",F)};O.addEventListener("dispose",F),T.__depthDisposeCallback=F}T.__boundDepthTexture=O}if(H.depthTexture&&!T.__autoAllocateDepthBuffer)if(N)for(let O=0;O<6;O++)et(T.__webglFramebuffer[O],H,O);else{let O=H.texture.mipmaps;O&&O.length>0?et(T.__webglFramebuffer[0],H,0):et(T.__webglFramebuffer,H,0)}else if(N){T.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[O]),T.__webglDepthbuffer[O]===void 0)T.__webglDepthbuffer[O]=i.createRenderbuffer(),Oe(T.__webglDepthbuffer[O],H,!1);else{let F=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=T.__webglDepthbuffer[O];i.bindRenderbuffer(i.RENDERBUFFER,z),i.framebufferRenderbuffer(i.FRAMEBUFFER,F,i.RENDERBUFFER,z)}}else{let O=H.texture.mipmaps;if(O&&O.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Oe(T.__webglDepthbuffer,H,!1);else{let F=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,z),i.framebufferRenderbuffer(i.FRAMEBUFFER,F,i.RENDERBUFFER,z)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(H,T,N){let O=n.get(H);T!==void 0&&Me(O.__webglFramebuffer,H,H.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Fe(H)}function ft(H){let T=H.texture,N=n.get(H),O=n.get(T);H.addEventListener("dispose",S);let F=H.textures,z=H.isWebGLCubeRenderTarget===!0,j=F.length>1;if(j||(O.__webglTexture===void 0&&(O.__webglTexture=i.createTexture()),O.__version=T.version,a.memory.textures++),z){N.__webglFramebuffer=[];for(let V=0;V<6;V++)if(T.mipmaps&&T.mipmaps.length>0){N.__webglFramebuffer[V]=[];for(let K=0;K<T.mipmaps.length;K++)N.__webglFramebuffer[V][K]=i.createFramebuffer()}else N.__webglFramebuffer[V]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){N.__webglFramebuffer=[];for(let V=0;V<T.mipmaps.length;V++)N.__webglFramebuffer[V]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(j)for(let V=0,K=F.length;V<K;V++){let ce=n.get(F[V]);ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture(),a.memory.textures++)}if(H.samples>0&&kt(H)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let V=0;V<F.length;V++){let K=F[V];N.__webglColorRenderbuffer[V]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[V]);let ce=s.convert(K.format,K.colorSpace),xe=s.convert(K.type),de=b(K.internalFormat,ce,xe,K.normalized,K.colorSpace,H.isXRRenderTarget===!0),ye=yt(H);i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,de,H.width,H.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+V,i.RENDERBUFFER,N.__webglColorRenderbuffer[V])}i.bindRenderbuffer(i.RENDERBUFFER,null),H.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),Oe(N.__webglDepthRenderbuffer,H,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(z){t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture),me(i.TEXTURE_CUBE_MAP,T);for(let V=0;V<6;V++)if(T.mipmaps&&T.mipmaps.length>0)for(let K=0;K<T.mipmaps.length;K++)Me(N.__webglFramebuffer[V][K],H,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+V,K);else Me(N.__webglFramebuffer[V],H,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0);m(T)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(j){for(let V=0,K=F.length;V<K;V++){let ce=F[V],xe=n.get(ce),de=i.TEXTURE_2D;(H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(de=H.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,xe.__webglTexture),me(de,ce),Me(N.__webglFramebuffer,H,ce,i.COLOR_ATTACHMENT0+V,de,0),m(ce)&&x(de)}t.unbindTexture()}else{let V=i.TEXTURE_2D;if((H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(V=H.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(V,O.__webglTexture),me(V,T),T.mipmaps&&T.mipmaps.length>0)for(let K=0;K<T.mipmaps.length;K++)Me(N.__webglFramebuffer[K],H,T,i.COLOR_ATTACHMENT0,V,K);else Me(N.__webglFramebuffer,H,T,i.COLOR_ATTACHMENT0,V,0);m(T)&&x(V),t.unbindTexture()}H.depthBuffer&&Fe(H)}function it(H){let T=H.textures;for(let N=0,O=T.length;N<O;N++){let F=T[N];if(m(F)){let z=R(H),j=n.get(F).__webglTexture;t.bindTexture(z,j),x(z),t.unbindTexture()}}}let Mt=[],Rt=[];function jt(H){if(H.samples>0){if(kt(H)===!1){let T=H.textures,N=H.width,O=H.height,F=i.COLOR_BUFFER_BIT,z=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=n.get(H),V=T.length>1;if(V)for(let ce=0;ce<T.length;ce++)t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,j.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,j.__webglMultisampledFramebuffer);let K=H.texture.mipmaps;K&&K.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,j.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,j.__webglFramebuffer);for(let ce=0;ce<T.length;ce++){if(H.resolveDepthBuffer&&(H.depthBuffer&&(F|=i.DEPTH_BUFFER_BIT),H.stencilBuffer&&H.resolveStencilBuffer&&(F|=i.STENCIL_BUFFER_BIT)),V){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,j.__webglColorRenderbuffer[ce]);let xe=n.get(T[ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,xe,0)}i.blitFramebuffer(0,0,N,O,0,0,N,O,F,i.NEAREST),c===!0&&(Mt.length=0,Rt.length=0,Mt.push(i.COLOR_ATTACHMENT0+ce),H.depthBuffer&&H.storeMultisampledDepthBuffer===!1&&(Mt.push(z),Rt.push(z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Rt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Mt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),V)for(let ce=0;ce<T.length;ce++){t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,j.__webglColorRenderbuffer[ce]);let xe=n.get(T[ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,j.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,xe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,j.__webglMultisampledFramebuffer)}else if(H.depthBuffer&&H.storeMultisampledDepthBuffer===!1&&c){let T=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function yt(H){return Math.min(r.maxSamples,H.samples)}function kt(H){let T=n.get(H);return H.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function X(H){let T=a.render.frame;l.get(H)!==T&&(l.set(H,T),H.update())}function Dt(H,T){let N=H.colorSpace,O=H.format,F=H.type;return H.isCompressedTexture===!0||H.isVideoTexture===!0||N!==On&&N!==jn&&(ot.getTransfer(N)===wt?(O!==Jn||F!==Vn)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",N)),T}function dt(H){return typeof HTMLImageElement!="undefined"&&H instanceof HTMLImageElement?(u.width=H.naturalWidth||H.width,u.height=H.naturalHeight||H.height):typeof VideoFrame!="undefined"&&H instanceof VideoFrame?(u.width=H.displayWidth,u.height=H.displayHeight):(u.width=H.width,u.height=H.height),u}this.allocateTextureUnit=Y,this.resetTextureUnits=P,this.getTextureUnits=U,this.setTextureUnits=k,this.setTexture2D=ne,this.setTexture2DArray=ie,this.setTexture3D=se,this.setTextureCube=re,this.rebindTextures=nt,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=kt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Jy(i,e){function t(n,r=jn){let s,a=ot.getTransfer(r);if(n===Vn)return i.UNSIGNED_BYTE;if(n===Kl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Zl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===uh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===hh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===lh)return i.BYTE;if(n===ch)return i.SHORT;if(n===ia)return i.UNSIGNED_SHORT;if(n===Yl)return i.INT;if(n===Ti)return i.UNSIGNED_INT;if(n===Zn)return i.FLOAT;if(n===bn)return i.HALF_FLOAT;if(n===fh)return i.ALPHA;if(n===dh)return i.RGB;if(n===Jn)return i.RGBA;if(n===Di)return i.DEPTH_COMPONENT;if(n===Lr)return i.DEPTH_STENCIL;if(n===Jl)return i.RED;if(n===jl)return i.RED_INTEGER;if(n===Nr)return i.RG;if(n===$l)return i.RG_INTEGER;if(n===Ql)return i.RGBA_INTEGER;if(n===mo||n===go||n===vo||n===_o)if(a===wt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===mo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===mo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===go)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_o)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ec||n===tc||n===nc||n===ic)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ec)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ic)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rc||n===sc||n===ac||n===oc||n===lc||n===xo||n===cc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===rc||n===sc)return a===wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ac)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===oc)return s.COMPRESSED_R11_EAC;if(n===lc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===xo)return s.COMPRESSED_RG11_EAC;if(n===cc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===uc||n===hc||n===fc||n===dc||n===pc||n===mc||n===gc||n===vc||n===_c||n===xc||n===yc||n===Mc||n===Sc||n===bc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===uc)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hc)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fc)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===dc)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pc)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mc)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gc)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vc)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_c)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xc)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yc)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Mc)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sc)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bc)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Tc||n===Ec||n===wc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Tc)return a===wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ec)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ac||n===Rc||n===yo||n===Cc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ac)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Rc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ra?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var jy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$y=`
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

}`,zh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Za(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Qt({vertexShader:jy,fragmentShader:$y,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ue(new ts(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gh=class extends Mi{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",c=1,u=null,l=null,h=null,f=null,p=null,g=null,y=typeof XRWebGLBinding!="undefined",v=new zh,m={},x=t.getContextAttributes(),R=null,b=null,I=[],L=[],D=new Ze,S=null,_=null,E=new an;E.viewport=new Lt;let A=new an;A.viewport=new Lt;let M=[E,A],P=new Bl,U=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Z=I[G];return Z===void 0&&(Z=new ks,I[G]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(G){let Z=I[G];return Z===void 0&&(Z=new ks,I[G]=Z),Z.getGripSpace()},this.getHand=function(G){let Z=I[G];return Z===void 0&&(Z=new ks,I[G]=Z),Z.getHandSpace()};function Y(G){let Z=L.indexOf(G.inputSource);if(Z===-1)return;let fe=I[Z];fe!==void 0&&(fe.update(G.inputSource,G.frame,u||a),fe.dispatchEvent({type:G.type,data:G.inputSource}))}function J(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",ne);for(let G=0;G<I.length;G++){let Z=L[G];Z!==null&&(L[G]=null,I[G].disconnect(Z))}U=null,k=null,v.reset();for(let G in m)delete m[G];if(e.setRenderTarget(R),p=null,f=null,h=null,r=null,b=null,oe.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(D.width,D.height,!1),_!==null){let G=_.camera;G.fov=_.fov,G.zoom=_.zoom,G.updateProjectionMatrix(),_=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(G){u=G},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(R=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",J),r.addEventListener("inputsourceschange",ne),x.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(D),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,ve=null,Me=null;x.depth&&(Me=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=x.stencil?Lr:Di,ve=x.stencil?ra:Ti);let Oe={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Oe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new dn(f.textureWidth,f.textureHeight,{format:Jn,type:Vn,depthTexture:new wr(f.textureWidth,f.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let fe={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new dn(p.framebufferWidth,p.framebufferHeight,{format:Jn,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),oe.setContext(r),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ne(G){for(let Z=0;Z<G.removed.length;Z++){let fe=G.removed[Z],ve=L.indexOf(fe);ve>=0&&(L[ve]=null,I[ve].disconnect(fe))}for(let Z=0;Z<G.added.length;Z++){let fe=G.added[Z],ve=L.indexOf(fe);if(ve===-1){for(let Oe=0;Oe<I.length;Oe++)if(Oe>=L.length){L.push(fe),ve=Oe;break}else if(L[Oe]===null){L[Oe]=fe,ve=Oe;break}if(ve===-1)break}let Me=I[ve];Me&&Me.connect(fe)}}let ie=new $,se=new $;function re(G,Z,fe){ie.setFromMatrixPosition(Z.matrixWorld),se.setFromMatrixPosition(fe.matrixWorld);let ve=ie.distanceTo(se),Me=Z.projectionMatrix.elements,Oe=fe.projectionMatrix.elements,et=Me[14]/(Me[10]-1),Fe=Me[14]/(Me[10]+1),nt=(Me[9]+1)/Me[5],ft=(Me[9]-1)/Me[5],it=(Me[8]-1)/Me[0],Mt=(Oe[8]+1)/Oe[0],Rt=et*it,jt=et*Mt,yt=ve/(-it+Mt),kt=yt*-it;if(Z.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(kt),G.translateZ(yt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Me[10]===-1)G.projectionMatrix.copy(Z.projectionMatrix),G.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{let X=et+yt,Dt=Fe+yt,dt=Rt-kt,H=jt+(ve-kt),T=nt*Fe/Dt*X,N=ft*Fe/Dt*X;G.projectionMatrix.makePerspective(dt,H,T,N,X,Dt),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function Re(G,Z){Z===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Z.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let Z=G.near,fe=G.far;v.texture!==null&&(v.depthNear>0&&(Z=v.depthNear),v.depthFar>0&&(fe=v.depthFar)),P.near=A.near=E.near=Z,P.far=A.far=E.far=fe,(U!==P.near||k!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),U=P.near,k=P.far),P.layers.mask=G.layers.mask|6,E.layers.mask=P.layers.mask&-5,A.layers.mask=P.layers.mask&-3;let ve=G.parent,Me=P.cameras;Re(P,ve);for(let Oe=0;Oe<Me.length;Oe++)Re(Me[Oe],ve);Me.length===2?re(P,E,A):P.projectionMatrix.copy(E.projectionMatrix),_===null&&G.isPerspectiveCamera&&(_={camera:G,fov:G.fov,zoom:G.zoom}),Ne(G,P,ve)};function Ne(G,Z,fe){fe===null?G.matrix.copy(Z.matrixWorld):(G.matrix.copy(fe.matrixWorld),G.matrix.invert(),G.matrix.multiply(Z.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Z.projectionMatrix),G.projectionMatrixInverse.copy(Z.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Jr*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(G){c=G,f!==null&&(f.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(P)},this.getCameraTexture=function(G){return m[G]};let Qe=null;function me(G,Z){if(l=Z.getViewerPose(u||a),g=Z,l!==null){let fe=l.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let ve=!1;fe.length!==P.cameras.length&&(P.cameras.length=0,ve=!0);for(let Fe=0;Fe<fe.length;Fe++){let nt=fe[Fe],ft=null;if(p!==null)ft=p.getViewport(nt);else{let Mt=h.getViewSubImage(f,nt);ft=Mt.viewport,Fe===0&&(e.setRenderTargetTextures(b,Mt.colorTexture,Mt.depthStencilTexture),e.setRenderTarget(b))}let it=M[Fe];it===void 0&&(it=new an,it.layers.enable(Fe),it.viewport=new Lt,M[Fe]=it),it.matrix.fromArray(nt.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(nt.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(ft.x,ft.y,ft.width,ft.height),Fe===0&&(P.matrix.copy(it.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),ve===!0&&P.cameras.push(it)}let Me=r.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){h=n.getBinding();let Fe=h.getDepthInformation(fe[0]);Fe&&Fe.isValid&&Fe.texture&&v.init(Fe,r.renderState)}if(Me&&Me.includes("camera-access")&&y){e.state.unbindTexture(),h=n.getBinding();for(let Fe=0;Fe<fe.length;Fe++){let nt=fe[Fe].camera;if(nt){let ft=m[nt];ft||(ft=new Za,m[nt]=ft);let it=h.getCameraImage(nt);ft.sourceTexture=it}}}}for(let fe=0;fe<I.length;fe++){let ve=L[fe],Me=I[fe];ve!==null&&Me!==void 0&&Me.update(ve,Z,u||a)}Qe&&Qe(G,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}let oe=new Wp;oe.setAnimationLoop(me),this.setAnimationLoop=function(G){Qe=G},this.dispose=function(){}}},Qy=new at,Jp=new rt;Jp.set(-1,0,0,0,1,0,0,0,1);function eM(i,e){function t(v,m){v.matrixAutoUpdate===!0&&v.updateMatrix(),m.value.copy(v.matrix)}function n(v,m){m.color.getRGB(v.fogColor.value,xh(i)),m.isFog?(v.fogNear.value=m.near,v.fogFar.value=m.far):m.isFogExp2&&(v.fogDensity.value=m.density)}function r(v,m,x,R,b){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(v,m):m.isMeshLambertMaterial?(s(v,m),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(v,m),h(v,m)):m.isMeshPhongMaterial?(s(v,m),l(v,m),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(v,m),f(v,m),m.isMeshPhysicalMaterial&&p(v,m,b)):m.isMeshMatcapMaterial?(s(v,m),g(v,m)):m.isMeshDepthMaterial?s(v,m):m.isMeshDistanceMaterial?(s(v,m),y(v,m)):m.isMeshNormalMaterial?s(v,m):m.isLineBasicMaterial?(a(v,m),m.isLineDashedMaterial&&o(v,m)):m.isPointsMaterial?c(v,m,x,R):m.isSpriteMaterial?u(v,m):m.isShadowMaterial?(v.color.value.copy(m.color),v.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(v,m){v.opacity.value=m.opacity,m.color&&v.diffuse.value.copy(m.color),m.emissive&&v.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(v.map.value=m.map,t(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.bumpMap&&(v.bumpMap.value=m.bumpMap,t(m.bumpMap,v.bumpMapTransform),v.bumpScale.value=m.bumpScale,m.side===Sn&&(v.bumpScale.value*=-1)),m.normalMap&&(v.normalMap.value=m.normalMap,t(m.normalMap,v.normalMapTransform),v.normalScale.value.copy(m.normalScale),m.side===Sn&&v.normalScale.value.negate()),m.displacementMap&&(v.displacementMap.value=m.displacementMap,t(m.displacementMap,v.displacementMapTransform),v.displacementScale.value=m.displacementScale,v.displacementBias.value=m.displacementBias),m.emissiveMap&&(v.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,v.emissiveMapTransform)),m.specularMap&&(v.specularMap.value=m.specularMap,t(m.specularMap,v.specularMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest);let x=e.get(m),R=x.envMap,b=x.envMapRotation;R&&(v.envMap.value=R,v.envMapRotation.value.setFromMatrix4(Qy.makeRotationFromEuler(b)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(Jp),v.reflectivity.value=m.reflectivity,v.ior.value=m.ior,v.refractionRatio.value=m.refractionRatio),m.lightMap&&(v.lightMap.value=m.lightMap,v.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,v.lightMapTransform)),m.aoMap&&(v.aoMap.value=m.aoMap,v.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,v.aoMapTransform))}function a(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,m.map&&(v.map.value=m.map,t(m.map,v.mapTransform))}function o(v,m){v.dashSize.value=m.dashSize,v.totalSize.value=m.dashSize+m.gapSize,v.scale.value=m.scale}function c(v,m,x,R){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.size.value=m.size*x,v.scale.value=R*.5,m.map&&(v.map.value=m.map,t(m.map,v.uvTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function u(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.rotation.value=m.rotation,m.map&&(v.map.value=m.map,t(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function l(v,m){v.specular.value.copy(m.specular),v.shininess.value=Math.max(m.shininess,1e-4)}function h(v,m){m.gradientMap&&(v.gradientMap.value=m.gradientMap)}function f(v,m){v.metalness.value=m.metalness,m.metalnessMap&&(v.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,v.metalnessMapTransform)),v.roughness.value=m.roughness,m.roughnessMap&&(v.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,v.roughnessMapTransform)),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)}function p(v,m,x){v.ior.value=m.ior,m.sheen>0&&(v.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),v.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(v.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,v.sheenColorMapTransform)),m.sheenRoughnessMap&&(v.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,v.sheenRoughnessMapTransform))),m.clearcoat>0&&(v.clearcoat.value=m.clearcoat,v.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(v.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,v.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(v.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Sn&&v.clearcoatNormalScale.value.negate())),m.dispersion>0&&(v.dispersion.value=m.dispersion),m.retroreflectivity>0&&(v.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(v.iridescence.value=m.iridescence,v.iridescenceIOR.value=m.iridescenceIOR,v.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(v.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,v.iridescenceMapTransform)),m.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),m.transmission>0&&(v.transmission.value=m.transmission,v.transmissionSamplerMap.value=x.texture,v.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(v.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,v.transmissionMapTransform)),v.thickness.value=m.thickness,m.thicknessMap&&(v.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=m.attenuationDistance,v.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(v.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(v.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=m.specularIntensity,v.specularColor.value.copy(m.specularColor),m.specularColorMap&&(v.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,v.specularColorMapTransform)),m.specularIntensityMap&&(v.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,v.specularIntensityMapTransform))}function g(v,m){m.matcap&&(v.matcap.value=m.matcap)}function y(v,m){let x=e.get(m).light;v.referencePosition.value.setFromMatrixPosition(x.matrixWorld),v.nearDistance.value=x.shadow.camera.near,v.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function tM(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,I){let L=I.program;n.uniformBlockBinding(b,L)}function u(b,I){let L=r[b.id];L===void 0&&(v(b),L=l(b),r[b.id]=L,b.addEventListener("dispose",x));let D=I.program;n.updateUBOMapping(b,D);let S=e.render.frame;s[b.id]!==S&&(f(b),s[b.id]=S)}function l(b){let I=h();b.__bindingPointIndex=I;let L=i.createBuffer(),D=b.__size,S=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,L),i.bufferData(i.UNIFORM_BUFFER,D,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,I,L),L}function h(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let I=r[b.id],L=b.uniforms,D=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,I);for(let S=0,_=L.length;S<_;S++){let E=L[S];if(Array.isArray(E))for(let A=0,M=E.length;A<M;A++)p(E[A],S,A,D);else p(E,S,0,D)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,I,L,D){if(y(b,I,L,D)===!0){let S=b.__offset,_=b.value;if(Array.isArray(_)){let E=0;for(let A=0;A<_.length;A++){let M=_[A],P=m(M);g(M,b.__data,E),typeof M!="number"&&typeof M!="boolean"&&!M.isMatrix3&&!ArrayBuffer.isView(M)&&(E+=P.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(_,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,b.__data)}}function g(b,I,L){typeof b=="number"||typeof b=="boolean"?I[0]=b:b.isMatrix3?(I[0]=b.elements[0],I[1]=b.elements[1],I[2]=b.elements[2],I[3]=0,I[4]=b.elements[3],I[5]=b.elements[4],I[6]=b.elements[5],I[7]=0,I[8]=b.elements[6],I[9]=b.elements[7],I[10]=b.elements[8],I[11]=0):ArrayBuffer.isView(b)?I.set(new b.constructor(b.buffer,b.byteOffset,I.length)):b.toArray(I,L)}function y(b,I,L,D){let S=b.value,_=I+"_"+L;if(D[_]===void 0)return typeof S=="number"||typeof S=="boolean"?D[_]=S:ArrayBuffer.isView(S)?D[_]=S.slice():D[_]=S.clone(),!0;{let E=D[_];if(typeof S=="number"||typeof S=="boolean"){if(E!==S)return D[_]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(E.equals(S)===!1)return E.copy(S),!0}}return!1}function v(b){let I=b.uniforms,L=0,D=16;for(let _=0,E=I.length;_<E;_++){let A=Array.isArray(I[_])?I[_]:[I[_]];for(let M=0,P=A.length;M<P;M++){let U=A[M],k=Array.isArray(U.value)?U.value:[U.value];for(let Y=0,J=k.length;Y<J;Y++){let ne=k[Y],ie=m(ne),se=L%D,re=se%ie.boundary,Re=se+re;L+=re,Re!==0&&D-Re<ie.storage&&(L+=D-Re),U.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=L,L+=ie.storage}}}let S=L%D;return S>0&&(L+=D-S),b.__size=L,b.__cache={},this}function m(b){let I={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(I.boundary=4,I.storage=4):b.isVector2?(I.boundary=8,I.storage=8):b.isVector3||b.isColor?(I.boundary=16,I.storage=12):b.isVector4?(I.boundary=16,I.storage=16):b.isMatrix3?(I.boundary=48,I.storage=48):b.isMatrix4?(I.boundary=64,I.storage=64):b.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(I.boundary=16,I.storage=b.byteLength):Ke("WebGLRenderer: Unsupported uniform value type.",b),I}function x(b){let I=b.target;I.removeEventListener("dispose",x);let L=a.indexOf(I.__bindingPointIndex);a.splice(L,1),i.deleteBuffer(r[I.id]),delete r[I.id],delete s[I.id]}function R(){for(let b in r)i.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:c,update:u,dispose:R}}var nM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ki=null;function iM(){return ki===null&&(ki=new tr(nM,16,16,Nr,bn),ki.name="DFG_LUT",ki.minFilter=on,ki.magFilter=on,ki.wrapS=si,ki.wrapT=si,ki.generateMipmaps=!1,ki.needsUpdate=!0),ki}var Hc=class{constructor(e={}){let{canvas:t=gp(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Vn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=p,v=new Set([Ql,$l,jl]),m=new Set([Vn,Ti,ia,ra,Kl,Zl]),x=new Uint32Array(4),R=new Int32Array(4),b=new $,I=null,L=null,D=[],S=[],_=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,A=!1,M=null,P=null,U=null,k=null;this._outputColorSpace=Gt;let Y=0,J=0,ne=null,ie=-1,se=null,re=new Lt,Re=new Lt,Ne=null,Qe=new ke(0),me=0,oe=t.width,G=t.height,Z=1,fe=null,ve=null,Me=new Lt(0,0,oe,G),Oe=new Lt(0,0,oe,G),et=!1,Fe=new Ws,nt=!1,ft=!1,it=new at,Mt=new $,Rt=new Lt,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},yt=!1;function kt(){return ne===null?Z:1}let X=n;function Dt(C,W){return t.getContext(C,W)}let dt,H,T,N,O,F,z,j,V,K,ce,xe,de,ye,be,De,We,q,Se,he,we,Pe,ge;try{let C={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:l,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Ut,!1),t.addEventListener("webglcontextrestored",d,!1),t.addEventListener("webglcontextcreationerror",w,!1),X===null){let W="webgl2";if(X=Dt(W,C),X===null)throw Dt(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}qe()}catch(C){throw t.removeEventListener("webglcontextlost",Ut,!1),t.removeEventListener("webglcontextrestored",d,!1),t.removeEventListener("webglcontextcreationerror",w,!1),tt("WebGLRenderer: "+C.message),C}function qe(){dt=new ux(X),dt.init(),we=new Jy(X,dt),H=new ex(X,dt,e,we),T=new Ky(X,dt),H.reversedDepthBuffer&&f&&T.buffers.depth.setReversed(!0),P=X.createFramebuffer(),U=X.createFramebuffer(),k=X.createFramebuffer(),N=new dx(X),O=new Dy,F=new Zy(X,dt,T,O,H,we,N),z=new cx(E),j=new mg(X),Pe=new $_(X,j),V=new hx(X,j,N,Pe),K=new mx(X,V,j,Pe,N),q=new px(X,H,F),be=new tx(O),ce=new Ny(E,z,dt,H,Pe,be),xe=new eM(E,O),de=new Oy,ye=new Gy(dt),We=new j_(E,z,T,K,g,c),De=new Yy(E,K,H),ge=new tM(X,N,H,T),Se=new Q_(X,dt,N),he=new fx(X,dt,N),N.programs=ce.programs,E.capabilities=H,E.extensions=dt,E.properties=O,E.renderLists=de,E.shadowMap=De,E.state=T,E.info=N}y!==Vn&&(_=new vx(y,t.width,t.height,o,r,s));let ze=new Gh(E,X);this.xr=ze,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let C=dt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=dt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(C){C!==void 0&&(Z=C,this.setSize(oe,G,!1))},this.getSize=function(C){return C.set(oe,G)},this.setSize=function(C,W,ae=!0){if(ze.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=C,G=W,t.width=Math.floor(C*Z),t.height=Math.floor(W*Z),ae===!0&&(t.style.width=C+"px",t.style.height=W+"px"),_!==null&&_.setSize(t.width,t.height),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(oe*Z,G*Z).floor()},this.setDrawingBufferSize=function(C,W,ae){oe=C,G=W,Z=ae,t.width=Math.floor(C*ae),t.height=Math.floor(W*ae),this.setViewport(0,0,C,W)},this.setEffects=function(C){if(y===Vn){tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let W=0;W<C.length;W++)if(C[W].isOutputPass===!0){Ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(re)},this.getViewport=function(C){return C.copy(Me)},this.setViewport=function(C,W,ae,Q){C.isVector4?Me.set(C.x,C.y,C.z,C.w):Me.set(C,W,ae,Q),T.viewport(re.copy(Me).multiplyScalar(Z).round())},this.getScissor=function(C){return C.copy(Oe)},this.setScissor=function(C,W,ae,Q){C.isVector4?Oe.set(C.x,C.y,C.z,C.w):Oe.set(C,W,ae,Q),T.scissor(Re.copy(Oe).multiplyScalar(Z).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(C){T.setScissorTest(et=C)},this.setOpaqueSort=function(C){fe=C},this.setTransparentSort=function(C){ve=C},this.getClearColor=function(C){return C.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(C=!0,W=!0,ae=!0){let Q=0;if(C){let ee=!1;if(ne!==null){let Ae=ne.texture.format;ee=v.has(Ae)}if(ee){let Ae=ne.texture.type,Ie=m.has(Ae),Te=We.getClearColor(),Be=We.getClearAlpha(),Ge=Te.r,ut=Te.g,gt=Te.b;Ie?(x[0]=Ge,x[1]=ut,x[2]=gt,x[3]=Be,X.clearBufferuiv(X.COLOR,0,x)):(R[0]=Ge,R[1]=ut,R[2]=gt,R[3]=Be,X.clearBufferiv(X.COLOR,0,R))}else Q|=X.COLOR_BUFFER_BIT}W&&(Q|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ae&&(Q|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&X.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),M=C},this.dispose=function(){t.removeEventListener("webglcontextlost",Ut,!1),t.removeEventListener("webglcontextrestored",d,!1),t.removeEventListener("webglcontextcreationerror",w,!1),We.dispose(),de.dispose(),ye.dispose(),O.dispose(),z.dispose(),K.dispose(),Pe.dispose(),ge.dispose(),ce.dispose(),ze.dispose(),ze.removeEventListener("sessionstart",Ee),ze.removeEventListener("sessionend",Xe),je.stop()};function Ut(C){C.preventDefault(),Ha("WebGLRenderer: Context Lost."),A=!0}function d(){Ha("WebGLRenderer: Context Restored."),A=!1;let C=N.autoReset,W=De.enabled,ae=De.autoUpdate,Q=De.needsUpdate,ee=De.type;qe(),N.autoReset=C,De.enabled=W,De.autoUpdate=ae,De.needsUpdate=Q,De.type=ee}function w(C){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function B(C){let W=C.target;W.removeEventListener("dispose",B),ue(W)}function ue(C){te(C),O.remove(C)}function te(C){let W=O.get(C).programs;W!==void 0&&(W.forEach(function(ae){ce.releaseProgram(ae)}),C.isShaderMaterial&&ce.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,ae,Q,ee,Ae){W===null&&(W=jt);let Ie=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,Te=pt(C,W,ae,Q,ee);T.setMaterial(Q,Ie);let Be=ae.index,Ge=1;if(Q.wireframe===!0){if(Be=V.getWireframeAttribute(ae),Be===void 0)return;Ge=2}let ut=ae.drawRange,gt=ae.attributes.position,Ve=ut.start*Ge,Ct=(ut.start+ut.count)*Ge;Ae!==null&&(Ve=Math.max(Ve,Ae.start*Ge),Ct=Math.min(Ct,(Ae.start+Ae.count)*Ge)),Be!==null?(Ve=Math.max(Ve,0),Ct=Math.min(Ct,Be.count)):gt!=null&&(Ve=Math.max(Ve,0),Ct=Math.min(Ct,gt.count));let un=Ct-Ve;if(un<0||un===1/0)return;Pe.setup(ee,Q,Te,ae,Be);let Kt,Bt=Se;if(Be!==null&&(Kt=j.get(Be),Bt=he,Bt.setIndex(Kt)),ee.isMesh)Q.wireframe===!0?(T.setLineWidth(Q.wireframeLinewidth*kt()),Bt.setMode(X.LINES)):Bt.setMode(X.TRIANGLES);else if(ee.isLine){let En=Q.linewidth;En===void 0&&(En=1),T.setLineWidth(En*kt()),ee.isLineSegments?Bt.setMode(X.LINES):ee.isLineLoop?Bt.setMode(X.LINE_LOOP):Bt.setMode(X.LINE_STRIP)}else ee.isPoints?Bt.setMode(X.POINTS):ee.isSprite&&Bt.setMode(X.TRIANGLES);if(ee.isBatchedMesh)if(dt.get("WEBGL_multi_draw"))Bt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{let En=ee._multiDrawStarts,He=ee._multiDrawCounts,Dn=ee._multiDrawCount,Tt=Be?j.get(Be).bytesPerElement:1,ni=O.get(Q).currentProgram.getUniforms();for(let Ii=0;Ii<Dn;Ii++)ni.setValue(X,"_gl_DrawID",Ii),Bt.render(En[Ii]/Tt,He[Ii])}else if(ee.isInstancedMesh)Bt.renderInstances(Ve,un,ee.count);else if(ae.isInstancedBufferGeometry){let En=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,He=Math.min(ae.instanceCount,En);Bt.renderInstances(Ve,un,He)}else Bt.render(Ve,un)};function le(C,W,ae,Q){M!==null&&C.isNodeMaterial&&M.setObject(Q,C),nt===!0&&be.setState(C,ae,!1),C.transparent===!0&&C.side===Gn&&C.forceSinglePass===!1?(C.side=Sn,C.needsUpdate=!0,Et(C,W,Q),C.side=Bi,C.needsUpdate=!0,Et(C,W,Q),C.side=Gn):Et(C,W,Q)}this.compile=function(C,W,ae=null){ae===null&&(ae=C),M!==null&&M.renderStart(C,W,ae),L=ye.get(ae),L.init(W),S.push(L),ae.traverseVisible(function(ee){ee.isLight&&ee.layers.test(W.layers)&&(L.pushLight(ee),ee.castShadow&&L.pushShadow(ee))}),C!==ae&&C.traverseVisible(function(ee){ee.isLight&&ee.layers.test(W.layers)&&(L.pushLight(ee),ee.castShadow&&L.pushShadow(ee))}),L.setupLights(),M!==null&&M.updateLights(L.state.lightsArray),ft=this.localClippingEnabled,nt=be.init(this.clippingPlanes,ft),nt===!0&&be.setGlobalState(this.clippingPlanes,W),M!==null&&De.render(L.state.shadowsArray,ae,W);let Q=new Set;return C.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;let Ae=ee.material;if(Ae)if(Array.isArray(Ae))for(let Ie=0;Ie<Ae.length;Ie++){let Te=Ae[Ie];le(Te,ae,W,ee),Q.add(Te)}else le(Ae,ae,W,ee),Q.add(Ae)}),L=S.pop(),M!==null&&M.renderEnd(),Q},this.compileAsync=function(C,W,ae=null){let Q=this.compile(C,W,ae);return new Promise(ee=>{function Ae(){if(Q.forEach(function(Ie){let Be=O.get(Ie).currentProgram;(Be===void 0||Be.isReady())&&Q.delete(Ie)}),Q.size===0){ee(C);return}setTimeout(Ae,10)}dt.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let pe=null;function _e(C){pe&&pe(C)}function Ee(){je.stop()}function Xe(){je.start()}let je=new Wp;je.setAnimationLoop(_e),typeof self!="undefined"&&je.setContext(self),this.setAnimationLoop=function(C){pe=C,ze.setAnimationLoop(C),C===null?je.stop():je.start()},ze.addEventListener("sessionstart",Ee),ze.addEventListener("sessionend",Xe),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;M!==null&&M.renderStart(C,W);let ae=ze.enabled===!0&&ze.isPresenting===!0,Q=_!==null&&(ne===null||ae)&&_.begin(E,ne);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(_===null||_.isCompositing()===!1)&&(ze.cameraAutoUpdate===!0&&ze.updateCamera(W),W=ze.getCamera()),C.isScene===!0&&C.onBeforeRender(E,C,W,ne),L=ye.get(C,S.length),L.init(W),L.state.textureUnits=F.getTextureUnits(),S.push(L),it.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Fe.setFromProjectionMatrix(it,xi,W.reversedDepth),ft=this.localClippingEnabled,nt=be.init(this.clippingPlanes,ft),I=de.get(C,D.length),I.init(),D.push(I),ze.enabled===!0&&ze.isPresenting===!0){let Ie=E.xr.getDepthSensingMesh();Ie!==null&&ct(Ie,W,-1/0,E.sortObjects)}ct(C,W,0,E.sortObjects),I.finish(),M!==null&&M.updateLights(L.state.lightsArray),E.sortObjects===!0&&I.sort(fe,ve),yt=ze.enabled===!1||ze.isPresenting===!1||ze.hasDepthSensing()===!1,yt&&We.addToRenderList(I,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),nt===!0&&be.beginShadows();let ee=L.state.shadowsArray;if(De.render(ee,C,W),nt===!0&&be.endShadows(),(Q&&_.hasRenderPass())===!1){let Ie=I.opaque,Te=I.transmissive;if(L.setupLights(),W.isArrayCamera){let Be=W.cameras;if(Te.length>0)for(let Ge=0,ut=Be.length;Ge<ut;Ge++){let gt=Be[Ge];Xt(Ie,Te,C,gt)}yt&&We.render(C);for(let Ge=0,ut=Be.length;Ge<ut;Ge++){let gt=Be[Ge];Zt(I,C,gt,gt.viewport)}}else Te.length>0&&Xt(Ie,Te,C,W),yt&&We.render(C),Zt(I,C,W)}ne!==null&&J===0&&(F.updateMultisampleRenderTarget(ne),F.updateRenderTargetMipmap(ne)),Q&&_.end(E),C.isScene===!0&&C.onAfterRender(E,C,W),Pe.resetDefaultState(),ie=-1,se=null,S.pop(),S.length>0?(L=S[S.length-1],F.setTextureUnits(L.state.textureUnits),nt===!0&&be.setGlobalState(E.clippingPlanes,L.state.camera)):L=null,D.pop(),D.length>0?I=D[D.length-1]:I=null,M!==null&&M.renderEnd()};function ct(C,W,ae,Q){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)ae=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLightProbeGrid)L.pushLightProbeGrid(C);else if(C.isLight)L.pushLight(C),C.castShadow&&L.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(Fe)){Q&&Rt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(it);let Ie=K.update(C),Te=C.material;Te.visible&&I.push(C,Ie,Te,ae,Rt.z,null,W)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(Fe))){let Ie=K.update(C),Te=C.material;if(Q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Rt.copy(C.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Rt.copy(Ie.boundingSphere.center)),Rt.applyMatrix4(C.matrixWorld).applyMatrix4(it)),Array.isArray(Te)){let Be=Ie.groups;for(let Ge=0,ut=Be.length;Ge<ut;Ge++){let gt=Be[Ge],Ve=Te[gt.materialIndex];Ve&&Ve.visible&&I.push(C,Ie,Ve,ae,Rt.z,gt,W)}}else Te.visible&&I.push(C,Ie,Te,ae,Rt.z,null,W)}}let Ae=C.children;for(let Ie=0,Te=Ae.length;Ie<Te;Ie++)ct(Ae[Ie],W,ae,Q)}function Zt(C,W,ae,Q){let{opaque:ee,transmissive:Ae,transparent:Ie}=C;L.setupLightsView(ae),nt===!0&&be.setGlobalState(E.clippingPlanes,ae),Q&&T.viewport(re.copy(Q)),ee.length>0&&rn(ee,W,ae),Ae.length>0&&rn(Ae,W,ae),Ie.length>0&&rn(Ie,W,ae),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function Xt(C,W,ae,Q){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[Q.id]===void 0){let Ve=dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[Q.id]=new dn(1,1,{generateMipmaps:!0,type:Ve?bn:Vn,minFilter:bi,samples:Math.max(4,H.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ot.workingColorSpace})}let Ae=L.state.transmissionRenderTarget[Q.id],Ie=Q.viewport||re;Ae.setSize(Ie.z*E.transmissionResolutionScale,Ie.w*E.transmissionResolutionScale);let Te=E.getRenderTarget(),Be=E.getActiveCubeFace(),Ge=E.getActiveMipmapLevel();E.setRenderTarget(Ae),E.getClearColor(Qe),me=E.getClearAlpha(),me<1&&E.setClearColor(16777215,.5),E.clear(),yt&&We.render(ae);let ut=E.toneMapping;E.toneMapping=Si;let gt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),L.setupLightsView(Q),nt===!0&&be.setGlobalState(E.clippingPlanes,Q),rn(C,ae,Q),F.updateMultisampleRenderTarget(Ae),F.updateRenderTargetMipmap(Ae),dt.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Ct=0,un=W.length;Ct<un;Ct++){let Kt=W[Ct],{object:Bt,geometry:En,material:He,group:Dn}=Kt;if(He.side===Gn&&Bt.layers.test(Q.layers)){let Tt=He.side;He.side=Sn,He.needsUpdate=!0,$t(Bt,ae,Q,En,He,Dn),He.side=Tt,He.needsUpdate=!0,Ve=!0}}Ve===!0&&(F.updateMultisampleRenderTarget(Ae),F.updateRenderTargetMipmap(Ae))}E.setRenderTarget(Te,Be,Ge),E.setClearColor(Qe,me),gt!==void 0&&(Q.viewport=gt),E.toneMapping=ut}function rn(C,W,ae){let Q=W.isScene===!0?W.overrideMaterial:null;for(let ee=0,Ae=C.length;ee<Ae;ee++){let Ie=C[ee],{object:Te,geometry:Be,group:Ge}=Ie,ut=Ie.material;ut.allowOverride===!0&&Q!==null&&(ut=Q),Te.layers.test(ae.layers)&&$t(Te,W,ae,Be,ut,Ge)}}function $t(C,W,ae,Q,ee,Ae){M!==null&&ee.isNodeMaterial&&M.setObject(C,ee),C.onBeforeRender(E,W,ae,Q,ee,Ae),C.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ee.onBeforeRender(E,W,ae,Q,C,Ae),ee.transparent===!0&&ee.side===Gn&&ee.forceSinglePass===!1?(ee.side=Sn,ee.needsUpdate=!0,E.renderBufferDirect(ae,W,Q,ee,C,Ae),ee.side=Bi,ee.needsUpdate=!0,E.renderBufferDirect(ae,W,Q,ee,C,Ae),ee.side=Gn):E.renderBufferDirect(ae,W,Q,ee,C,Ae),C.onAfterRender(E,W,ae,Q,ee,Ae)}function Et(C,W,ae){W.isScene!==!0&&(W=jt);let Q=O.get(C),ee=L.state.lights,Ae=L.state.shadowsArray,Ie=ee.state.version,Te=ce.getParameters(C,ee.state,Ae,W,ae,L.state.lightProbeGridArray),Be=ce.getProgramCacheKey(Te),Ge=Q.programs;Q.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?W.environment:null,Q.fog=W.fog;let ut=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;Q.envMap=z.get(C.envMap||Q.environment,ut),Q.envMapRotation=Q.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,Ge===void 0&&(C.addEventListener("dispose",B),Ge=new Map,Q.programs=Ge);let gt=Ge.get(Be);if(gt!==void 0){if(Q.currentProgram===gt&&Q.lightsStateVersion===Ie)return Yt(C,Te),gt}else Te.uniforms=ce.getUniforms(C),M!==null&&C.isNodeMaterial&&M.build(C,ae,Te),C.onBeforeCompile(Te,E),gt=ce.acquireProgram(Te,Be),Ge.set(Be,gt),Q.uniforms=Te.uniforms;let Ve=Q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ve.clippingPlanes=be.uniform),Yt(C,Te),Q.needsLights=Xi(C),Q.lightsStateVersion=Ie,Q.needsLights&&(Ve.ambientLightColor.value=ee.state.ambient,Ve.lightProbe.value=ee.state.probe,Ve.sunLights.value=ee.state.sun,Ve.sunLightShadows.value=ee.state.sunShadow,Ve.directionalLights.value=ee.state.directional,Ve.directionalLightShadows.value=ee.state.directionalShadow,Ve.spotLights.value=ee.state.spot,Ve.spotLightShadows.value=ee.state.spotShadow,Ve.rectAreaLights.value=ee.state.rectArea,Ve.ltc_1.value=ee.state.rectAreaLTC1,Ve.ltc_2.value=ee.state.rectAreaLTC2,Ve.pointLights.value=ee.state.point,Ve.pointLightShadows.value=ee.state.pointShadow,Ve.hemisphereLights.value=ee.state.hemi,Ve.sunShadowMatrix.value=ee.state.sunShadowMatrix,Ve.sunShadowCascade.value=ee.state.sunShadowCascade,Ve.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ve.spotLightMatrix.value=ee.state.spotLightMatrix,Ve.spotLightMap.value=ee.state.spotLightMap,Ve.pointShadowMatrix.value=ee.state.pointShadowMatrix),Q.lightProbeGrid=L.state.lightProbeGridArray.length>0,Q.currentProgram=gt,Q.uniformsList=null,gt}function cn(C){if(C.uniformsList===null){let W=C.currentProgram.getUniforms();C.uniformsList=ca.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function Yt(C,W){let ae=O.get(C);ae.outputColorSpace=W.outputColorSpace,ae.batching=W.batching,ae.batchingColor=W.batchingColor,ae.instancing=W.instancing,ae.instancingColor=W.instancingColor,ae.instancingMorph=W.instancingMorph,ae.skinning=W.skinning,ae.morphTargets=W.morphTargets,ae.morphNormals=W.morphNormals,ae.morphColors=W.morphColors,ae.morphTargetsCount=W.morphTargetsCount,ae.numClippingPlanes=W.numClippingPlanes,ae.numIntersection=W.numClipIntersection,ae.vertexAlphas=W.vertexAlphas,ae.vertexTangents=W.vertexTangents,ae.toneMapping=W.toneMapping}function en(C,W){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;b.setFromMatrixPosition(W.matrixWorld);for(let ae=0,Q=C.length;ae<Q;ae++){let ee=C[ae];if(ee.texture!==null&&ee.boundingBox.containsPoint(b))return ee}return null}function pt(C,W,ae,Q,ee){W.isScene!==!0&&(W=jt),F.resetTextureUnits();let Ae=W.fog,Ie=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?W.environment:null,Te=ne===null?E.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:ot.workingColorSpace,Be=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,Ge=z.get(Q.envMap||Ie,Be),ut=Q.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,gt=!!ae.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ve=!!ae.morphAttributes.position,Ct=!!ae.morphAttributes.normal,un=!!ae.morphAttributes.color,Kt=Si;Q.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Kt=E.toneMapping);let Bt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,En=Bt!==void 0?Bt.length:0,He=O.get(Q),Dn=L.state.lights;if(nt===!0&&(ft===!0||C!==se)){let zt=C===se&&Q.id===ie;be.setState(Q,C,zt)}let Tt=!1;Q.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Dn.state.version||He.outputColorSpace!==Te||ee.isBatchedMesh&&He.batching===!1||!ee.isBatchedMesh&&He.batching===!0||ee.isBatchedMesh&&He.batchingColor===!0&&ee._colorsTexture===null||ee.isBatchedMesh&&He.batchingColor===!1&&ee._colorsTexture!==null||ee.isInstancedMesh&&He.instancing===!1||!ee.isInstancedMesh&&He.instancing===!0||ee.isSkinnedMesh&&He.skinning===!1||!ee.isSkinnedMesh&&He.skinning===!0||ee.isInstancedMesh&&He.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&He.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&He.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&He.instancingMorph===!1&&ee.morphTexture!==null||He.envMap!==Ge||Q.fog===!0&&He.fog!==Ae||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==be.numPlanes||He.numIntersection!==be.numIntersection)||He.vertexAlphas!==ut||He.vertexTangents!==gt||He.morphTargets!==Ve||He.morphNormals!==Ct||He.morphColors!==un||He.toneMapping!==Kt||He.morphTargetsCount!==En||!!He.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(Tt=!0):(Tt=!0,He.__version=Q.version);let ni=He.currentProgram;Tt===!0&&(ni=Et(Q,W,ee),M&&Q.isNodeMaterial&&M.onUpdateProgram(Q,ni,He));let Ii=!1,fr=!1,ms=!1,Ot=ni.getUniforms(),sn=He.uniforms;if(T.useProgram(ni.program)&&(Ii=!0,fr=!0,ms=!0),Q.id!==ie&&(ie=Q.id,fr=!0),He.needsLights){let zt=en(L.state.lightProbeGridArray,ee);He.lightProbeGrid!==zt&&(He.lightProbeGrid=zt,fr=!0)}if(Ii||se!==C){T.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ot.setValue(X,"projectionMatrix",C.projectionMatrix),Ot.setValue(X,"viewMatrix",C.matrixWorldInverse);let pr=Ot.map.cameraPosition;pr!==void 0&&pr.setValue(X,Mt.setFromMatrixPosition(C.matrixWorld)),H.logarithmicDepthBuffer&&Ot.setValue(X,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Ot.setValue(X,"isOrthographic",C.isOrthographicCamera===!0),se!==C&&(se=C,fr=!0,ms=!0)}if(He.needsLights&&(Dn.state.sunShadowMap.length>0&&Ot.setValue(X,"sunShadowMap",Dn.state.sunShadowMap,F),Dn.state.directionalShadowMap.length>0&&Ot.setValue(X,"directionalShadowMap",Dn.state.directionalShadowMap,F),Dn.state.spotShadowMap.length>0&&Ot.setValue(X,"spotShadowMap",Dn.state.spotShadowMap,F),Dn.state.pointShadowMap.length>0&&Ot.setValue(X,"pointShadowMap",Dn.state.pointShadowMap,F)),ee.isSkinnedMesh){Ot.setOptional(X,ee,"bindMatrix"),Ot.setOptional(X,ee,"bindMatrixInverse");let zt=ee.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),Ot.setValue(X,"boneTexture",zt.boneTexture,F))}ee.isBatchedMesh&&(Ot.setOptional(X,ee,"batchingTexture"),Ot.setValue(X,"batchingTexture",ee._matricesTexture,F),Ot.setOptional(X,ee,"batchingIdTexture"),Ot.setValue(X,"batchingIdTexture",ee._indirectTexture,F),Ot.setOptional(X,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Ot.setValue(X,"batchingColorTexture",ee._colorsTexture,F));let dr=ae.morphAttributes;if((dr.position!==void 0||dr.normal!==void 0||dr.color!==void 0)&&q.update(ee,ae,ni),(fr||He.receiveShadow!==ee.receiveShadow)&&(He.receiveShadow=ee.receiveShadow,Ot.setValue(X,"receiveShadow",ee.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&W.environment!==null&&(sn.envMapIntensity.value=W.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=iM()),fr){if(Ot.setValue(X,"toneMappingExposure",E.toneMappingExposure),He.needsLights&&fi(sn,ms),Ae&&Q.fog===!0&&xe.refreshFogUniforms(sn,Ae),xe.refreshMaterialUniforms(sn,Q,Z,G,L.state.transmissionRenderTarget[C.id]),He.needsLights&&He.lightProbeGrid){let zt=He.lightProbeGrid;sn.probesSH.value=zt.texture,sn.probesMin.value.copy(zt.boundingBox.min),sn.probesMax.value.copy(zt.boundingBox.max),sn.probesResolution.value.copy(zt.resolution)}ca.upload(X,cn(He),sn,F)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(ca.upload(X,cn(He),sn,F),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Ot.setValue(X,"center",ee.center),Ot.setValue(X,"modelViewMatrix",ee.modelViewMatrix),Ot.setValue(X,"normalMatrix",ee.normalMatrix),Ot.setValue(X,"modelMatrix",ee.matrixWorld),Q.uniformsGroups!==void 0){let zt=Q.uniformsGroups;for(let pr=0,gs=zt.length;pr<gs;pr++){let Df=zt[pr];ge.update(Df,ni),ge.bind(Df,ni)}}return ni}function fi(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.sunLights.needsUpdate=W,C.sunLightShadows.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function Xi(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(C,W,ae){let Q=O.get(C);Q.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),O.get(C.texture).__webglTexture=W,O.get(C.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:ae,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,W){let ae=O.get(C);ae.__webglFramebuffer=W,ae.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,ae=0){ne=C,Y=W,J=ae;let Q=null,ee=!1,Ae=!1;if(C){let Te=O.get(C);if(Te.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(X.FRAMEBUFFER,Te.__webglFramebuffer),re.copy(C.viewport),Re.copy(C.scissor),Ne=C.scissorTest,T.viewport(re),T.scissor(Re),T.setScissorTest(Ne),ie=-1;return}else if(Te.__webglFramebuffer===void 0)F.setupRenderTarget(C);else if(Te.__hasExternalTextures)F.rebindTextures(C,O.get(C.texture).__webglTexture,O.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let ut=C.depthTexture;if(Te.__boundDepthTexture!==ut){if(ut!==null&&O.has(ut)&&(C.width!==ut.image.width||C.height!==ut.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(C)}}let Be=C.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Ae=!0);let Ge=O.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ge[W])?Q=Ge[W][ae]:Q=Ge[W],ee=!0):C.samples>0&&F.useMultisampledRTT(C)===!1?Q=O.get(C).__webglMultisampledFramebuffer:Array.isArray(Ge)?Q=Ge[ae]:Q=Ge,re.copy(C.viewport),Re.copy(C.scissor),Ne=C.scissorTest}else re.copy(Me).multiplyScalar(Z).floor(),Re.copy(Oe).multiplyScalar(Z).floor(),Ne=et;if(ae!==0&&(Q=P),T.bindFramebuffer(X.FRAMEBUFFER,Q)&&T.drawBuffers(C,Q),T.viewport(re),T.scissor(Re),T.setScissorTest(Ne),ee){let Te=O.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+W,Te.__webglTexture,ae)}else if(Ae){let Te=W;for(let Be=0;Be<C.textures.length;Be++){let Ge=O.get(C.textures[Be]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Be,Ge.__webglTexture,ae,Te)}}else if(C!==null&&ae!==0){let Te=O.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Te.__webglTexture,ae)}ie=-1};function Nn(C){let W=O.get(C);return(W.__readFormat!==C.format||W.__readType!==C.type)&&(W.__readFormat=C.format,W.__readType=C.type,W.__formatReadable=H.textureFormatReadable(C.format),W.__typeReadable=H.textureTypeReadable(C.type)),W}this.readRenderTargetPixels=function(C,W,ae,Q,ee,Ae,Ie,Te=0){if(!(C&&C.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=O.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ie!==void 0&&(Be=Be[Ie]),Be){T.bindFramebuffer(X.FRAMEBUFFER,Be);try{let Ge=C.textures[Te],ut=Ge.format,gt=Ge.type;C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Te);let Ve=Nn(Ge);if(Ve.__formatReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ve.__typeReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-Q&&ae>=0&&ae<=C.height-ee&&X.readPixels(W,ae,Q,ee,we.convert(ut),we.convert(gt),Ae)}finally{let Ge=ne!==null?O.get(ne).__webglFramebuffer:null;T.bindFramebuffer(X.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(C,W,ae,Q,ee,Ae,Ie,Te=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=O.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ie!==void 0&&(Be=Be[Ie]),Be)if(W>=0&&W<=C.width-Q&&ae>=0&&ae<=C.height-ee){T.bindFramebuffer(X.FRAMEBUFFER,Be);let Ge=C.textures[Te],ut=Ge.format,gt=Ge.type;C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Te);let Ve=Nn(Ge);if(Ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ct=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Ct),X.bufferData(X.PIXEL_PACK_BUFFER,Ae.byteLength,X.STREAM_READ),X.readPixels(W,ae,Q,ee,we.convert(ut),we.convert(gt),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);let un=ne!==null?O.get(ne).__webglFramebuffer:null;T.bindFramebuffer(X.FRAMEBUFFER,un);let Kt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await _p(X,Kt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Ct),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Ae),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(Ct),X.deleteSync(Kt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,W=null,ae=0){let Q=Math.pow(2,-ae),ee=Math.floor(C.image.width*Q),Ae=Math.floor(C.image.height*Q),Ie=W!==null?W.x:0,Te=W!==null?W.y:0;F.setTexture2D(C,0),X.copyTexSubImage2D(X.TEXTURE_2D,ae,0,0,Ie,Te,ee,Ae),T.unbindTexture()},this.copyTextureToTexture=function(C,W,ae=null,Q=null,ee=0,Ae=0){let Ie,Te,Be,Ge,ut,gt,Ve,Ct,un,Kt=C.isCompressedTexture?C.mipmaps[Ae]:C.image;if(ae!==null)Ie=ae.max.x-ae.min.x,Te=ae.max.y-ae.min.y,Be=ae.isBox3?ae.max.z-ae.min.z:1,Ge=ae.min.x,ut=ae.min.y,gt=ae.isBox3?ae.min.z:0;else{let sn=Math.pow(2,-ee);Ie=Math.floor(Kt.width*sn),Te=Math.floor(Kt.height*sn),C.isDataArrayTexture?Be=Kt.depth:C.isData3DTexture?Be=Math.floor(Kt.depth*sn):Be=1,Ge=0,ut=0,gt=0}Q!==null?(Ve=Q.x,Ct=Q.y,un=Q.z):(Ve=0,Ct=0,un=0);let Bt=we.convert(W.format),En=we.convert(W.type),He;W.isData3DTexture?(F.setTexture3D(W,0),He=X.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(F.setTexture2DArray(W,0),He=X.TEXTURE_2D_ARRAY):(F.setTexture2D(W,0),He=X.TEXTURE_2D),T.activeTexture(X.TEXTURE0),T.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,W.flipY),T.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),T.pixelStorei(X.UNPACK_ALIGNMENT,W.unpackAlignment);let Dn=T.getParameter(X.UNPACK_ROW_LENGTH),Tt=T.getParameter(X.UNPACK_IMAGE_HEIGHT),ni=T.getParameter(X.UNPACK_SKIP_PIXELS),Ii=T.getParameter(X.UNPACK_SKIP_ROWS),fr=T.getParameter(X.UNPACK_SKIP_IMAGES);T.pixelStorei(X.UNPACK_ROW_LENGTH,Kt.width),T.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Kt.height),T.pixelStorei(X.UNPACK_SKIP_PIXELS,Ge),T.pixelStorei(X.UNPACK_SKIP_ROWS,ut),T.pixelStorei(X.UNPACK_SKIP_IMAGES,gt);let ms=C.isDataArrayTexture||C.isData3DTexture,Ot=W.isDataArrayTexture||W.isData3DTexture;if(C.isDepthTexture){let sn=O.get(C),dr=O.get(W),zt=O.get(sn.__renderTarget),pr=O.get(dr.__renderTarget);T.bindFramebuffer(X.READ_FRAMEBUFFER,zt.__webglFramebuffer),T.bindFramebuffer(X.DRAW_FRAMEBUFFER,pr.__webglFramebuffer);for(let gs=0;gs<Be;gs++)ms&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,O.get(C).__webglTexture,ee,gt+gs),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,O.get(W).__webglTexture,Ae,un+gs)),X.blitFramebuffer(Ge,ut,Ie,Te,Ve,Ct,Ie,Te,X.DEPTH_BUFFER_BIT,X.NEAREST);T.bindFramebuffer(X.READ_FRAMEBUFFER,null),T.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(ee!==0||C.isRenderTargetTexture||O.has(C)){let sn=O.get(C),dr=O.get(W);T.bindFramebuffer(X.READ_FRAMEBUFFER,U),T.bindFramebuffer(X.DRAW_FRAMEBUFFER,k);for(let zt=0;zt<Be;zt++)ms?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,sn.__webglTexture,ee,gt+zt):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,sn.__webglTexture,ee),Ot?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,dr.__webglTexture,Ae,un+zt):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,dr.__webglTexture,Ae),ee!==0?X.blitFramebuffer(Ge,ut,Ie,Te,Ve,Ct,Ie,Te,X.COLOR_BUFFER_BIT,X.NEAREST):Ot?X.copyTexSubImage3D(He,Ae,Ve,Ct,un+zt,Ge,ut,Ie,Te):X.copyTexSubImage2D(He,Ae,Ve,Ct,Ge,ut,Ie,Te);T.bindFramebuffer(X.READ_FRAMEBUFFER,null),T.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Ot?C.isDataTexture||C.isData3DTexture?X.texSubImage3D(He,Ae,Ve,Ct,un,Ie,Te,Be,Bt,En,Kt.data):W.isCompressedArrayTexture?X.compressedTexSubImage3D(He,Ae,Ve,Ct,un,Ie,Te,Be,Bt,Kt.data):X.texSubImage3D(He,Ae,Ve,Ct,un,Ie,Te,Be,Bt,En,Kt):C.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Ae,Ve,Ct,Ie,Te,Bt,En,Kt.data):C.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Ae,Ve,Ct,Kt.width,Kt.height,Bt,Kt.data):X.texSubImage2D(X.TEXTURE_2D,Ae,Ve,Ct,Ie,Te,Bt,En,Kt);T.pixelStorei(X.UNPACK_ROW_LENGTH,Dn),T.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Tt),T.pixelStorei(X.UNPACK_SKIP_PIXELS,ni),T.pixelStorei(X.UNPACK_SKIP_ROWS,Ii),T.pixelStorei(X.UNPACK_SKIP_IMAGES,fr),Ae===0&&W.generateMipmaps&&X.generateMipmap(He),T.unbindTexture()},this.initRenderTarget=function(C){O.get(C).__webglFramebuffer===void 0&&F.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?F.setTextureCube(C,0):C.isData3DTexture?F.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?F.setTexture2DArray(C,0):F.setTexture2D(C,0),T.unbindTexture()},this.resetState=function(){Y=0,J=0,ne=null,T.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}};var da={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var $n=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},rM=new Hi(-1,1,1,-1,0,1),Vh=class extends qt{constructor(){super(),this.setAttribute("position",new St([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new St([0,2,0,0,2,0],2))}},sM=new Vh,Dr=class{constructor(e){this._mesh=new Ue(sM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,rM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var zc=class extends $n{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Qt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=cr.clone(e.uniforms),this.material=new Qt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Dr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var wo=class extends $n{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}},Gc=class extends $n{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Vc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Ze);this._width=n.width,this._height=n.height,t=new dn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:bn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new zc(da),this.copyPass.material.blending=oi,this.timer=new ro}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let r=0,s=this.passes.length;r<s;r++){let a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}wo!==void 0&&(a instanceof wo?n=!0:a instanceof Gc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ze);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Wc=class extends $n{constructor(e,t,n=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ke}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}};var jp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ke(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var pa=class i extends $n{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e!==void 0?new Ze(e.x,e.y):new Ze(256,256),this.clearColor=new ke(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new dn(s,a,{type:bn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let l=0;l<this.nMips;l++){let h=new dn(s,a,{type:bn,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+l,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let f=new dn(s,a,{type:bn,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+l,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}let o=jp;this.highPassUniforms=cr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Qt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let l=0;l<this.nMips;l++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[l])),this.separableBlurMaterials[l].uniforms.invSize.value=new Ze(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new $(1,1,1),new $(1,1,1),new $(1,1,1),new $(1,1,1),new $(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=cr.clone(da.uniforms),this.blendMaterial=new Qt({uniforms:this.copyUniforms,vertexShader:da.vertexShader,fragmentShader:da.fragmentShader,premultipliedAlpha:!0,blending:lr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ke,this._oldClearAlpha=1,this._basic=new Cn,this._fsQuad=new Dr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Ze(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(e,t,n,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let r=[],s=[];for(let a=1;a<e;a+=2){let o=t[a],c=a+1<e?t[a+1]:0,u=o+c;r.push((a*o+(a+1)*c)/u),s.push(u)}return new Qt({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new Ze(.5,.5)},direction:{value:new Ze(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:s}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Qt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};pa.BlurDirectionX=new Ze(1,0);pa.BlurDirectionY=new Ze(0,1);var Ao={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var qc=class extends $n{constructor(){super(),this.isOutputPass=!0,this.uniforms=cr.clone(Ao.uniforms),this.material=new Zs({name:Ao.name,uniforms:this.uniforms,vertexShader:Ao.vertexShader,fragmentShader:Ao.fragmentShader}),this._fsQuad=new Dr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ot.getTransfer(this._outputColorSpace)===wt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===oo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===lo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===co?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===as?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ho?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===fo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===uo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Xc=class extends Er{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new pn;e.deleteAttribute("uv");let t=new nn({side:Sn}),n=new nn,r=new Kn(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let s=new Ue(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let a=new $r(e,n,6),o=new Wt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new Ue(e,ma(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let u=new Ue(e,ma(50));u.position.set(-16.109,18.021,-8.207),u.scale.set(.1,2.425,2.751),this.add(u);let l=new Ue(e,ma(17));l.position.set(14.904,12.198,-1.832),l.scale.set(.15,4.265,6.331),this.add(l);let h=new Ue(e,ma(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let f=new Ue(e,ma(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let p=new Ue(e,ma(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function ma(i){return new $a({color:0,emissive:16777215,emissiveIntensity:i})}var bt=128;function Jc(i,e,t){var n=i*374761393+e*668265263+t*982451653|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function em(i,e,t,n){var r=Math.floor(i),s=Math.floor(e),a=i-r,o=e-s,c=a*a*(3-2*a),u=o*o*(3-2*o);function l(y,v){return Jc((y%t+t)%t,(v%t+t)%t,n)}var h=l(r,s),f=l(r+1,s),p=l(r,s+1),g=l(r+1,s+1);return h+(f-h)*c+(p-h)*u+(h-f-p+g)*c*u}function hr(i,e,t,n){for(var r=0,s=.5,a=1,o=0;o<t;o++)r+=s*em(i*a,e*a,8*a,n+o*17),s*=.5,a*=2;return r}function li(i,e,t){return i+(e-i)*t}function jc(i){return i<0?0:i>1?1:i}function ur(i){return[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255]}function aM(i,e){e=e||{};for(var t=new Uint8ClampedArray(bt*bt*4),n=new Float32Array(bt*bt),r=e.emissive?new Uint8ClampedArray(bt*bt*4):null,s=new Uint8ClampedArray(bt*bt*4),a=0;a<bt;a++)for(var o=0;o<bt;o++){var c=i(o/bt,a/bt,o,a),u=a*bt+o,l=u*4;t[l]=c.c[0]*255,t[l+1]=c.c[1]*255,t[l+2]=c.c[2]*255,t[l+3]=255,n[u]=c.h;var h=(c.r===void 0?.85:c.r)*255;if(s[l]=h,s[l+1]=h,s[l+2]=h,s[l+3]=255,r){var f=c.e||[0,0,0];r[l]=f[0]*255,r[l+1]=f[1]*255,r[l+2]=f[2]*255,r[l+3]=255}}return{map:Yc(t,!0),normalMap:Yc(oM(n,e.bump||3),!1),roughnessMap:Yc(s,!1),emissiveMap:r?Yc(r,!0):null}}function oM(i,e){for(var t=new Uint8ClampedArray(bt*bt*4),n=0;n<bt;n++)for(var r=0;r<bt;r++){var s=i[n*bt+(r+bt-1)%bt],a=i[n*bt+(r+1)%bt],o=i[(n+bt-1)%bt*bt+r],c=i[(n+1)%bt*bt+r],u=(s-a)*e,l=(o-c)*e,h=1,f=Math.sqrt(u*u+l*l+h*h),p=(n*bt+r)*4;t[p]=(u/f*.5+.5)*255,t[p+1]=(l/f*.5+.5)*255,t[p+2]=(h/f*.5+.5)*255,t[p+3]=255}return t}function Yc(i,e){var t;if(typeof document!="undefined"){var n=document.createElement("canvas");n.width=bt,n.height=bt,n.getContext("2d").putImageData(new ImageData(i,bt,bt),0,0),t=new Ys(n)}else t=new tr(i,bt,bt);return t.wrapS=t.wrapT=ai,t.colorSpace=e?Gt:jn,t.anisotropy=8,t.magFilter=Vt,t.needsUpdate=!0,t}function lM(i,e,t,n){var r=ur(i),s=ur(e),a=ur(t);return function(o,c){var u=8,l=Math.floor(c*u),h=l%2?.5:0,f=o*4+h,p=Math.floor(f),g=f-p,y=c*u-l,v=Math.min(g,1-g)*4*.5,m=Math.min(y,1-y)*.5,x=Math.min(v,m*2),R=hr(o*8,c*8,4,n),b=Jc(p&3,l,n),I=hr(o*24,c*24,2,n+5)>.72?.25:0;if(x<.045){var L=.8+R*.4;return{c:[a[0]*L,a[1]*L,a[2]*L],h:.1+R*.1,r:.95}}var D=jc(b*.6+R*.5),S=.8+R*.35-I;return{c:[li(s[0],r[0],D)*S,li(s[1],r[1],D)*S,li(s[2],r[2],D)*S],h:.6+R*.3-I+Math.min(x,.12)*2,r:.8+R*.15}}}function cM(i,e,t){var n=ur(i),r=ur(e);return function(s,a){var o=s*3,c=a*4+Math.floor(s*3)%2*.5,u=o-Math.floor(o),l=c-Math.floor(c),h=Jc(Math.floor(o)%3,Math.floor(c)%4,t),f=Math.min(u,1-u,(l<.5?l:1-l)*1.5),p=hr(s*6,a*6,5,t);if(f<.035)return{c:[r[0]*.5,r[1]*.5,r[2]*.5],h:.1,r:.95};var g=jc(p*.8+h*.4),y=.75+p*.4;return{c:[li(r[0],n[0],g)*y,li(r[1],n[1],g)*y,li(r[2],n[2],g)*y],h:.5+p*.5,r:.9}}}function $c(i,e,t){var n=ur(i),r=ur(e);return function(s,a,o,c){var u=s*2%1,l=a*2%1,h=Math.min(u,1-u,l,1-l)<.012,f=[[.06,.06],[.94,.06],[.06,.94],[.94,.94]].some(function(v){var m=u-v[0],x=l-v[1];return m*m+x*x<9e-4}),p=hr(s*6,a*16,4,t),g=em(s*90,a*4,90,t+3)>.9?.15:0,y=.75+p*.35+g;return h?{c:[r[0]*.4,r[1]*.4,r[2]*.4],h:.1,r:.6}:f?{c:[n[0]*1.2,n[1]*1.2,n[2]*1.2],h:1,r:.35}:{c:[li(r[0],n[0],p)*y,li(r[1],n[1],p)*y,li(r[2],n[2],p)*y],h:.5+p*.1,r:.45+p*.2}}}function uM(i){var e=$c(5001824,1974568,i);return function(t,n,r,s){var a=e(t,n,r,s),o=Math.abs(n-.5)<.025&&t*4%1>.15&&t*4%1<.85,c=Math.abs(n-.15)<.04&&Math.abs(t*2%1-.5)<.12;return o?{c:[.2,.7,.8],h:.3,r:.3,e:[.15,.85,1]}:c?{c:[.9,.7,.3],h:.8,r:.3,e:[1,.6,.15]}:(a.e=[0,0,0],a)}}function qh(i){return function(e,t){var n=hr(e*5,t*5,5,i),r=1-Math.abs(hr(e*4,t*4,4,i+9)-.5)*2,s=r>.9?jc((r-.9)*10):0,a=.35+n*.5,o=[.32*a+s*.9,.12*a+s*.35,.08*a];return{c:o,h:n-s*.4,r:.9-s*.5,e:[s*1,s*.35,s*.05]}}}function Wh(i){var e=$c(6975352,2895412,31),t=i==="red"?[.9,.12,.08]:i==="blue"?[.15,.35,1]:null;return function(n,r,s,a){var o=e(n,r,s,a),c=r>.88&&Math.floor(n*16+r*16)%2===0;return r>.88?{c:c?[.85,.65,.1]:[.08,.08,.08],h:.6,r:.6,e:[0,0,0]}:Math.abs(n-.5)<.012?{c:[.05,.05,.05],h:0,r:.8,e:[0,0,0]}:t&&Math.abs(r-.45)<.05?{c:t,h:.7,r:.3,e:[t[0]*.8,t[1]*.8,t[2]*.8]}:(o.e=[0,0,0],o)}}function $p(i){var e=$c(5922664,2500654,41);return function(t,n,r,s){var a=e(t,n,r,s),o=Math.abs(t-.5)<.18&&Math.abs(n-.5)<.26;if(o){var c=Math.abs(t-.5)<.04&&(i?n>.5&&n<.72:n>.28&&n<.5),u=Math.abs(t-.5)<.08&&Math.abs(n-(i?.3:.7))<.04,l=i?[.2,1,.3]:[1,.15,.1];return u?{c:l,h:.9,r:.2,e:l}:c?{c:[.8,.8,.75],h:1,r:.3,e:[0,0,0]}:{c:[.06,.07,.06],h:.2,r:.7,e:[0,0,0]}}return a.e=[0,0,0],a}}function Zc(i,e,t,n){var r=ur(i),s=ur(e);return function(a,o){var c=a*4%1,u=o*4%1,l=Math.min(c,1-c,u,1-u),h=Jc(Math.floor(a*4),Math.floor(o*4),t),f=hr(a*8,o*8,4,t);if(l<.03)return{c:[s[0]*.4,s[1]*.4,s[2]*.4],h:.05,r:.95};if(n&&(c*10%1<.3||u*10%1<.3)&&l>.08)return{c:[s[0]*.3,s[1]*.3,s[2]*.3],h:.1,r:.6};var p=jc(h*.5+f*.6),g=.7+f*.4;return{c:[li(s[0],r[0],p)*g,li(s[1],r[1],p)*g,li(s[2],r[2],p)*g],h:.5+f*.3,r:n?.5:.8}}}function hM(i){var e=qh(i);return function(t,n){var r=e(t,n),s=hr(t*3,n*3,3,i+20)>.66;if(s){var a=hr(t*10,n*10,3,i+21);return{c:[1,.45+a*.3,.08],h:0,r:.4,e:[1.2,.45+a*.3,.05]}}return r}}function fM(i){return Zc(2762274,1183760,i,!1)}var Qp={};function Pn(i,e,t){return Qp[i]||(Qp[i]=aM(e,t))}function Xh(i){switch(i){case 1:return Pn("brick",lM(9060914,4857364,2759960,1),{bump:4});case 2:return Pn("stone",cM(9078136,4867644,2),{bump:4});case 3:return Pn("metal",$c(5922664,2500654,3),{bump:3});case 4:return Pn("tech",uM(4),{emissive:!0,bump:3});case 5:return Pn("hell",qh(5),{emissive:!0,bump:5});case 6:return Pn("door",Wh(null),{emissive:!0,bump:3});case 7:return Pn("doorRed",Wh("red"),{emissive:!0,bump:3});case 8:return Pn("doorBlue",Wh("blue"),{emissive:!0,bump:3});case 9:return Pn("switchOff",$p(!1),{emissive:!0,bump:3});case 10:return Pn("switchOn",$p(!0),{emissive:!0,bump:3})}return Xh(1)}var Kc=null;function tm(){if(Kc)return Kc;var i=128,e=new Uint8ClampedArray(i*i*4),t=44;function n(c,u,l,h,f,p){if(!(c<0||u<0||c>=i||u>=i)){var g=(u*i+c)*4;e[g]=l,e[g+1]=h,e[g+2]=f,e[g+3]=Math.max(e[g+3],p)}}for(var r=10;r<118;r++)t+=r%7===0?1:r%9===0?-1:0,n(t-1,r,200,190,170,150),n(t+2,r,200,190,170,150),n(t,r,12,10,8,255),n(t+1,r,12,10,8,255);for(var s=0;s<16;s++)n(t+3+s,60+s,12,10,8,255),n(t+3+s,59+s,200,190,170,140);var a;if(typeof document!="undefined"){var o=document.createElement("canvas");o.width=o.height=i,o.getContext("2d").putImageData(new ImageData(e,i,i),0,0),a=new Ys(o)}else a=new tr(e,i,i);return a.colorSpace=Gt,a.magFilter=Vt,a.needsUpdate=!0,Kc=new nn({map:a,transparent:!0,alphaTest:.3,depthWrite:!1,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1}),Kc}function nm(i){switch(i){case"tech":return Pn("fTech",Zc(4869718,1842722,11,!0),{bump:3});case"hell":return Pn("fHell",hM(12),{emissive:!0,bump:4});case"ceilTech":return Pn("cTech",Zc(3817030,1316378,13,!0),{bump:2});case"ceilHell":return Pn("cHell",qh(14),{emissive:!0,bump:4});case"ceilDark":return Pn("cDark",fM(15),{bump:2});default:return Pn("fSlab",Zc(6972506,3025444,10,!1),{bump:3})}}function Gi(i,e){var t=new nn(Object.assign({map:i.map,normalMap:i.normalMap,roughnessMap:i.roughnessMap,roughness:1,metalness:.05},e||{}));return i.emissiveMap&&(t.emissiveMap=i.emissiveMap,t.emissive=new ke(16777215),t.emissiveIntensity=1.6),t}function eu(){this.groups={}}eu.prototype.quad=function(i,e,t,n,r,s,a){var o=this.groups[i]||(this.groups[i]={pos:[],nor:[],uv:[]});[e,t,n,e,n,r].forEach(function(c){o.pos.push(c[0],c[1],c[2]),o.nor.push(s[0],s[1],s[2])}),[a[0],a[1],a[2],a[0],a[2],a[3]].forEach(function(c){o.uv.push(c[0],c[1])})};eu.prototype.meshes=function(i){var e=[];for(var t in this.groups){var n=this.groups[t],r=new qt;r.setAttribute("position",new St(n.pos,3)),r.setAttribute("normal",new St(n.nor,3)),r.setAttribute("uv",new St(n.uv,2));var s=new Ue(r,i(t));s.name=t,e.push(s)}return e};function Qc(i,e,t,n,r,s,a){if(!(a-s<.001)){var o,c,u,l,h;r==="E"?(o=[t+1,n+1],c=[t+1,n],u=[-1,0,0],l=n+1,h=n):r==="W"?(o=[t,n],c=[t,n+1],u=[1,0,0],l=n,h=n+1):r==="S"?(o=[t,n+1],c=[t+1,n+1],u=[0,0,-1],l=t,h=t+1):(o=[t+1,n],c=[t,n],u=[0,0,1],l=t+1,h=t),i.quad(e,[o[0],s,o[1]],[c[0],s,c[1]],[c[0],a,c[1]],[o[0],a,o[1]],u,[[l,s],[h,s],[h,a],[l,a]])}}var Yh={E:[1,0],W:[-1,0],S:[0,1],N:[0,-1]};function Ro(i,e,t,n,r,s,a,o){i.quad(e,[t,a,r],[t,a,o],[s,a,o],[s,a,r],[0,1,0],[[t,r],[t,o],[s,o],[s,r]]),i.quad(e,[t,n,o],[t,n,r],[s,n,r],[s,n,o],[0,-1,0],[[t,o],[t,r],[s,r],[s,o]]),i.quad(e,[t,n,o],[s,n,o],[s,a,o],[t,a,o],[0,0,1],[[t,n],[s,n],[s,a],[t,a]]),i.quad(e,[s,n,r],[t,n,r],[t,a,r],[s,a,r],[0,0,-1],[[s,n],[t,n],[t,a],[s,a]]),i.quad(e,[s,n,o],[s,n,r],[s,a,r],[s,a,o],[1,0,0],[[o,n],[r,n],[r,a],[o,a]]),i.quad(e,[t,n,r],[t,n,o],[t,a,o],[t,a,r],[-1,0,0],[[r,n],[o,n],[o,a],[r,a]])}function Kh(i,e,t,n,r,s,a,o){r==="E"?Ro(i,e,t+1-o,s,n,t+1,s+a,n+1):r==="W"?Ro(i,e,t,s,n,t+o,s+a,n+1):r==="S"?Ro(i,e,t,s,n+1-o,t+1,s+a,n+1):Ro(i,e,t,s,n,t+1,s+a,n+o)}function im(i){for(var e={},t=0;t<i.cells.length;t++){var n=i.cells[t];n>=1&&n<=5&&(e[n]=(e[n]||0)+1)}var r=1,s=-1;for(var a in e)e[a]>s&&(s=e[a],r=+a);return r}function dM(i,e,t){var n=im(i);return[[1,0],[-1,0],[0,1],[0,-1]].forEach(function(r){var s=ii(i,e+r[0],t+r[1]);s>=1&&s<=5&&(n=s)}),n}function rm(i,e){function t(oe){return e&&e.texture("tex:"+oe)||Xh(oe)}function n(oe){return e&&e.texture("tex:"+oe)||nm(oe)}var r=i.W,s=i.L,a=new eu,o=new lt,c="wall"+im(r),u={};r.lifts.forEach(function(oe){u[oe.x+","+oe.z]=oe});var l=[];function h(oe,G){var Z=ii(r,oe,G);return Z===0||!!di[Z]}function f(oe,G){var Z=u[oe+","+G];return Z?Z.bottom:gn(r,oe,G)}for(var p=0;p<r.mh;p++)for(var g=0;g<r.mw;g++)if(h(g,p)){var y=f(g,p),v=Pi(r,g,p);u[g+","+p]||a.quad("floor",[g,y,p],[g,y,p+1],[g+1,y,p+1],[g+1,y,p],[0,1,0],[[g,p],[g,p+1],[g+1,p+1],[g+1,p]]),a.quad("ceil",[g,v,p],[g+1,v,p],[g+1,v,p+1],[g,v,p+1],[0,-1,0],[[g,p],[g+1,p],[g+1,p+1],[g,p+1]]);for(var m in Yh){var x=g+Yh[m][0],R=p+Yh[m][1],b=ii(r,x,R);if(!h(x,R)){if(b===9){var I={x,z:R,faces:new eu,dir:m};Qc(I.faces,"sw",g,p,m,y,v),l.push(I)}else Qc(a,"wall"+(b>=1&&b<=5?b:1),g,p,m,y,v);di[ii(r,g,p)]||(Kh(a,"trim",g,p,m,y,.09,.035),v-y>2&&Kh(a,"trim",g,p,m,v-.12,.08,.05));continue}var L=f(x,R),D=Pi(r,x,R);L>y&&(Qc(a,c,g,p,m,y,Math.min(L,v)),L-y>.3&&Kh(a,"trim",g,p,m,L-.07,.07,.06)),D<v&&Qc(a,c,g,p,m,Math.max(D,y),v)}}for(var S=0;S<r.mh;S++)for(var _=0;_<r.mw;_++)if(!(S%3!==1||ii(r,_,S)!==0)){var E=Pi(r,_,S);E-gn(r,_,S)<2.6||Ro(a,"beam",_,E-.2,S+.38,_+1,E,S+.62)}var A={};function M(oe){return A[oe]?A[oe]:oe==="floor"?A[oe]=Gi(n(s.floor)):oe==="ceil"?A[oe]=Gi(n(s.ceil)):oe==="trim"?A[oe]=Gi(t(3),{color:10127992,metalness:.6,roughness:.5}):oe==="beam"?A[oe]=Gi(t(3),{color:6969930,metalness:.4}):A[oe]=Gi(t(+oe.slice(4)))}a.meshes(M).forEach(function(oe){oe.receiveShadow=!0,o.add(oe)});var P=Gi(t(9)),U=Gi(t(10));l.forEach(function(oe){oe.faces.meshes(function(){return P}).forEach(function(G){oe.mesh=G,o.add(G)})});var k=[];for(var Y in r.doors){var J=r.doors[Y],ne=gn(r,J.x,J.z),ie=Pi(r,J.x,J.z),se=ie-ne,re;if(J.secret){re=new Ue(new pn(1,se,1),M("wall"+dM(r,J.x,J.z))),Zh(re.geometry,1,se);var Re=tm();[[0,.502,0],[Math.PI,-.502,0],[Math.PI/2,0,.502],[-Math.PI/2,0,-.502]].forEach(function(oe){var G=new Ue(new ts(.9,Math.min(se,1.9)*.9),Re);G.rotation.y=oe[0],G.position.set(oe[2],0,oe[1]),re.add(G)})}else{var Ne=h(J.x-1,J.z)&&h(J.x+1,J.z),Qe=Ne?new pn(.22,se,1):new pn(1,se,.22);re=new Ue(Qe,Gi(t(J.locked==="red"?7:J.locked==="blue"?8:6))),Zh(re.geometry,1,se)}re.position.set(J.x+.5,ne+se/2,J.z+.5),re.userData={door:J,baseY:ne+se/2,h:se},re.castShadow=!0,o.add(re),k.push(re)}var me=r.lifts.map(function(oe){var G=Math.max(.2,oe.top-oe.bottom+.2),Z=new Ue(new pn(.98,G,.98),Gi(t(4)));return Zh(Z.geometry,1,G),Z.userData={lift:oe,h:G},o.add(Z),Z});return{group:o,update:function(){k.forEach(function(oe){var G=oe.userData.door;oe.position.y=oe.userData.baseY+G.open*oe.userData.h*.98,oe.visible=G.open<.99}),me.forEach(function(oe){var G=oe.userData.lift;oe.position.set(G.x+.5,G.pos-oe.userData.h/2,G.z+.5)}),l.forEach(function(oe){oe.mesh&&(oe.mesh.material=r.cells[oe.z*r.mw+oe.x]===10?U:P)})}}}function Zh(i,e,t){for(var n=i.attributes.uv,r=0;r<n.count;r++){var s=Math.floor(r/4),a=(s<4,e),o=s===2||s===3?e:t;n.setXY(r,n.getX(r)*a,n.getY(r)*o)}n.needsUpdate=!0}var Co=new $;function ci(i,e,t,n,r,s){let a=2*Math.PI*r/4,o=Math.max(s-2*r,0),c=Math.PI/4;Co.copy(e),Co[n]=0,Co.normalize();let u=.5*a/(a+o),l=1-Co.angleTo(i)/c;return Math.sign(Co[t])===1?l*u:o/(a+o)+u+u*(1-l)}var tu=class i extends pn{constructor(e=1,t=1,n=1,r=2,s=.1){let a=r*2+1;if(s=Math.min(e/2,t/2,n/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:r,radius:s},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new $,u=new $,l=new $(e,t,n).divideScalar(2).subScalar(s),h=this.attributes.position.array,f=this.attributes.normal.array,p=this.attributes.uv.array,g=h.length/6,y=new $,v=.5/a;for(let m=0,x=0;m<h.length;m+=3,x+=2)switch(c.fromArray(h,m),u.copy(c),u.x-=Math.sign(u.x)*v,u.y-=Math.sign(u.y)*v,u.z-=Math.sign(u.z)*v,u.normalize(),h[m+0]=l.x*Math.sign(c.x)+u.x*s,h[m+1]=l.y*Math.sign(c.y)+u.y*s,h[m+2]=l.z*Math.sign(c.z)+u.z*s,f[m+0]=u.x,f[m+1]=u.y,f[m+2]=u.z,Math.floor(m/g)){case 0:y.set(1,0,0),p[x+0]=ci(y,u,"z","y",s,n),p[x+1]=1-ci(y,u,"y","z",s,t);break;case 1:y.set(-1,0,0),p[x+0]=1-ci(y,u,"z","y",s,n),p[x+1]=1-ci(y,u,"y","z",s,t);break;case 2:y.set(0,1,0),p[x+0]=1-ci(y,u,"x","z",s,e),p[x+1]=ci(y,u,"z","x",s,n);break;case 3:y.set(0,-1,0),p[x+0]=1-ci(y,u,"x","z",s,e),p[x+1]=1-ci(y,u,"z","x",s,n);break;case 4:y.set(0,0,1),p[x+0]=1-ci(y,u,"x","y",s,e),p[x+1]=1-ci(y,u,"y","x",s,t);break;case 5:y.set(0,0,-1),p[x+0]=ci(y,u,"x","y",s,e),p[x+1]=1-ci(y,u,"y","x",s,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function Jh(i,e){if(e===ph)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===sa||e===Mo){let t=i.getIndex();if(t===null){let s=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)s.push(o);i.setIndex(s),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,r=[];if(e===sa)for(let s=1;s<=n;s++)r.push(t.getX(0)),r.push(t.getX(s)),r.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(r.push(t.getX(s)),r.push(t.getX(s+1)),r.push(t.getX(s+2))):(r.push(t.getX(s+2)),r.push(t.getX(s+1)),r.push(t.getX(s)));return r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(r),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function nu(i){let e=new Map,t=new Map,n=i.clone();return sm(i,n,function(r,s){e.set(s,r),t.set(r,s)}),n.traverse(function(r){if(!r.isSkinnedMesh)return;let s=r,a=e.get(r),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function sm(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)sm(i.children[n],e.children[n],t)}var iu=class extends Fi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new rf(t)}),this.register(function(t){return new sf(t)}),this.register(function(t){return new pf(t)}),this.register(function(t){return new mf(t)}),this.register(function(t){return new gf(t)}),this.register(function(t){return new of(t)}),this.register(function(t){return new lf(t)}),this.register(function(t){return new cf(t)}),this.register(function(t){return new uf(t)}),this.register(function(t){return new nf(t)}),this.register(function(t){return new hf(t)}),this.register(function(t){return new af(t)}),this.register(function(t){return new df(t)}),this.register(function(t){return new ff(t)}),this.register(function(t){return new ef(t)}),this.register(function(t){return new ru(t,mt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new ru(t,mt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new vf(t)})}load(e,t,n,r){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let u=or.extractUrlBase(e);a=or.resolveURL(u,this.path)}else a=or.extractUrlBase(e);this.manager.itemStart(e);let o=function(u){r?r(u):console.error(u),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Js(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){try{s.parse(u,a,function(l){t(l),s.manager.itemEnd(e)},o)}catch(l){o(l)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s,a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===um){try{a[mt.KHR_BINARY_GLTF]=new _f(e)}catch(h){r&&r(h);return}s=JSON.parse(a[mt.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let u=new Ef(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let l=0;l<this.pluginCallbacks.length;l++){let h=this.pluginCallbacks[l](u);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let l=0;l<s.extensionsUsed.length;++l){let h=s.extensionsUsed[l],f=s.extensionsRequired||[];switch(h){case mt.KHR_MATERIALS_UNLIT:a[h]=new tf;break;case mt.KHR_DRACO_MESH_COMPRESSION:a[h]=new xf(s,this.dracoLoader);break;case mt.KHR_TEXTURE_TRANSFORM:a[h]=new yf;break;case mt.KHR_MESH_QUANTIZATION:a[h]=new Mf;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}u.setExtensions(a),u.setPlugins(o),u.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}};function mM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function ln(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var mt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},ef=class{constructor(e){this.parser=e,this.name=mt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,r=t.cache.get(n);if(r)return r;let s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],u,l=new ke(16777215);c.color!==void 0&&l.setRGB(c.color[0],c.color[1],c.color[2],On);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":u=new rs(l),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new Kn(l),u.distance=h;break;case"spot":u=new no(l),u.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,u.angle=c.spot.outerConeAngle,u.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return u.position.set(0,0,0),Vi(u,c),c.intensity!==void 0&&(u.intensity=c.intensity),u.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(u),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},tf=class{constructor(){this.name=mt.KHR_MATERIALS_UNLIT}getMaterialType(){return Cn}extendParams(e,t,n){let r=[];e.color=new ke(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],On),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,Gt))}return Promise.all(r)}},nf=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=ln(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},rf=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return ln(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=ln(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ze(s,s)}return Promise.all(r)}},sf=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return ln(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=ln(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},af=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return ln(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=ln(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(r)}},of=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SHEEN}getMaterialType(e){return ln(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=ln(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(t.sheenColor=new ke(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],On)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Gt)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(r)}},lf=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return ln(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=ln(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(r)}},cf=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_VOLUME}getMaterialType(e){return ln(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=ln(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return t.attenuationColor=new ke().setRGB(s[0],s[1],s[2],On),Promise.all(r)}},uf=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IOR}getMaterialType(e){return ln(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=ln(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},hf=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return ln(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=ln(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return t.specularColor=new ke().setRGB(s[0],s[1],s[2],On),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Gt)),Promise.all(r)}},ff=class{constructor(e){this.parser=e,this.name=mt.EXT_MATERIALS_BUMP}getMaterialType(e){return ln(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=ln(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(r)}},df=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return ln(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=ln(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(r)}},pf=class{constructor(e){this.parser=e,this.name=mt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},mf=class{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=r.images[a.source],c=n.textureLoader;if(o.uri){let u=n.options.manager.getHandler(o.uri);u!==null&&(c=u)}return n.loadTextureImage(e,a.source,c)}},gf=class{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=r.images[a.source],c=n.textureLoader;if(o.uri){let u=n.options.manager.getHandler(o.uri);u!==null&&(c=u)}return n.loadTextureImage(e,a.source,c)}},ru=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let c=r.byteOffset||0,u=r.byteLength||0,l=r.count,h=r.byteStride,f=new Uint8Array(o,c,u);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(l,h,f,r.mode,r.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(l*h);return a.decodeGltfBuffer(new Uint8Array(p),l,h,f,r.mode,r.filter),p})})}else return null}},vf=class{constructor(e){this.name=mt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let u of r.primitives)if(u.mode!==ui.TRIANGLES&&u.mode!==ui.TRIANGLE_STRIP&&u.mode!==ui.TRIANGLE_FAN&&u.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let u in a)o.push(this.parser.getDependency("accessor",a[u]).then(l=>(c[u]=l,c[u])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(u=>{let l=u.pop(),h=l.isGroup?l.children:[l],f=u[0].count,p=[];for(let g of h){let y=new at,v=new $,m=new Rn,x=new $(1,1,1),R=new $r(g.geometry,g.material,f);for(let I=0;I<f;I++)c.TRANSLATION&&v.fromBufferAttribute(c.TRANSLATION,I),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,I),c.SCALE&&x.fromBufferAttribute(c.SCALE,I),R.setMatrixAt(I,y.compose(v,m,x));let b=null;for(let I in c)if(I==="_COLOR_0"){let L=c[I];R.instanceColor=new nr(L.array,L.itemSize,L.normalized)}else if(I!=="TRANSLATION"&&I!=="ROTATION"&&I!=="SCALE"){if(b===null){let D=R.geometry;b=new qt,b.name=D.name;for(let S in D.attributes)b.setAttribute(S,D.attributes[S]);for(let S in D.morphAttributes)b.morphAttributes[S]=D.morphAttributes[S];D.index!==null&&b.setIndex(D.index),b.morphTargetsRelative=D.morphTargetsRelative;for(let S of D.groups)b.addGroup(S.start,S.count,S.materialIndex);D.boundingBox!==null&&(b.boundingBox=D.boundingBox.clone()),D.boundingSphere!==null&&(b.boundingSphere=D.boundingSphere.clone()),b.drawRange.start=D.drawRange.start,b.drawRange.count=D.drawRange.count,b.userData=Object.assign({},D.userData),R.geometry=b}let L=c[I];b.setAttribute(I,new nr(L.array,L.itemSize,L.normalized))}Wt.prototype.copy.call(R,g),this.parser.assignFinalMaterial(R),p.push(R)}return l.isGroup?(l.clear(),l.add(...p),l):p[0]}))}},um="glTF",Io=12,am={JSON:1313821514,BIN:5130562},_f=class{constructor(e){this.name=mt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Io),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==um)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-Io,s=new DataView(e,Io),a=0;for(;a<r;){let o=s.getUint32(a,!0);a+=4;let c=s.getUint32(a,!0);if(a+=4,c===am.JSON){let u=new Uint8Array(e,Io+a,o);this.content=n.decode(u)}else if(c===am.BIN){let u=Io+a;this.body=e.slice(u,u+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},xf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=mt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},u={};for(let l in a){let h=bf[l]||l.toLowerCase();o[h]=a[l]}for(let l in e.attributes){let h=bf[l]||l.toLowerCase();if(a[l]!==void 0){let f=n.accessors[e.attributes[l]],p=ga[f.componentType];u[h]=p.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(l){return new Promise(function(h,f){r.decodeDracoFile(l,function(p){for(let g in p.attributes){let y=p.attributes[g],v=c[g];v!==void 0&&(y.normalized=v)}h(p)},o,u,On,f)})})}},yf=class{constructor(){this.name=mt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),r=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*r,e.offset.x,-e.repeat.x*r,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Mf=class{constructor(){this.name=mt.KHR_MESH_QUANTIZATION}},su=class extends Oi{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,u=o*3,l=r-t,h=(n-t)/l,f=h*h,p=f*h,g=e*u,y=g-u,v=-2*p+3*f,m=p-f,x=1-v,R=m-f+h;for(let b=0;b!==o;b++){let I=a[y+b+o],L=a[y+b+c]*l,D=a[g+b+o],S=a[g+b]*l;s[b]=x*I+R*L+v*D+m*S}return s}},gM=new Rn,Sf=class extends su{interpolate_(e,t,n,r){let s=super.interpolate_(e,t,n,r);return gM.fromArray(s).normalize().toArray(s),s}},ui={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ga={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},om={9728:Vt,9729:on,9984:Xl,9985:na,9986:ls,9987:bi},lm={33071:si,33648:Us,10497:ai},jh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},bf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ur={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},vM={CUBICSPLINE:void 0,LINEAR:Zr,STEP:Kr},$h={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function _M(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new nn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Bi})),i.DefaultMaterial}function hs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Vi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function xM(i,e,t){let n=!1,r=!1,s=!1;for(let u=0,l=e.length;u<l;u++){let h=e[u];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);let a=[],o=[],c=[];for(let u=0,l=e.length;u<l;u++){let h=e[u];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(f)}if(r){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(f)}if(s){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(u){let l=u[0],h=u[1],f=u[2];return n&&(i.morphAttributes.position=l),r&&(i.morphAttributes.normal=h),s&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function yM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function MM(i){let e,t=i.extensions&&i.extensions[mt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Qh(t.attributes):e=i.indices+":"+Qh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+Qh(i.targets[n]);return e}function Qh(i){let e="",t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Tf(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function SM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var bM=new at,Ef=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new mM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,a=-1;if(typeof navigator!="undefined"&&typeof navigator.userAgent!="undefined"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);r=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&r<17||s&&a<98?this.textureLoader=new is(this.options.manager):this.textureLoader=new io(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Js(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:n,userData:{}};return hs(s,o,r),Vi(o,r),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){let a=t[r].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){let a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),s=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[u,l]of a.children.entries())s(l,o.children[u])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[mt.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(s,a){n.load(or.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let a=jh[r.type],o=ga[r.componentType],c=r.normalized===!0,u=new o(r.count*a);return Promise.resolve(new Jt(u,a,c))}let s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],c=jh[r.type],u=ga[r.componentType],l=u.BYTES_PER_ELEMENT,h=l*c,f=r.byteOffset||0,p=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0,y,v;if(p&&p!==h){let m=Math.floor(f/p),x="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+m+":"+r.count,R=t.cache.get(x);R||(y=new u(o,m*p,r.count*p/l),R=new zs(y,p/l),t.cache.add(x,R)),v=new Gs(R,c,f%p/l,g)}else o===null?y=new u(r.count*c):y=new u(o,f,r.count*c),v=new Jt(y,c,g);if(r.sparse!==void 0){let m=jh.SCALAR,x=ga[r.sparse.indices.componentType],R=r.sparse.indices.byteOffset||0,b=r.sparse.values.byteOffset||0,I=new x(a[1],R,r.sparse.count*m),L=new u(a[2],b,r.sparse.count*c);o!==null&&(v=new Jt(v.array.slice(),v.itemSize,v.normalized)),v.normalized=!1;for(let D=0,S=I.length;D<S;D++){let _=I[D];if(v.setX(_,L[D*c]),c>=2&&v.setY(_,L[D*c+1]),c>=3&&v.setZ(_,L[D*c+2]),c>=4&&v.setW(_,L[D*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}v.normalized=g}return v})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let r=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let u=this.loadImageSource(t,n).then(function(l){l.flipY=!1,l.name=a.name||o.name||"",l.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(l.name=o.uri);let f=(s.samplers||{})[a.sampler]||{};return l.magFilter=om[f.magFilter]||on,l.minFilter=om[f.minFilter]||bi,l.wrapS=lm[f.wrapS]||ai,l.wrapT=lm[f.wrapT]||ai,l.generateMipmaps=!l.isCompressedTexture&&l.minFilter!==Vt&&l.minFilter!==on,r.associations.set(l,{textures:e}),l}).catch(function(){return null});return this.textureCache[c]=u,u}loadImageSource(e,t){let n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=r.images[e],o=self.URL||self.webkitURL,c=a.uri||"",u=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){u=!0;let f=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let l=Promise.resolve(c).then(function(h){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(y){let v=new vn(y);v.needsUpdate=!0,f(v)}),t.load(or.resolveURL(h,s.path),g,void 0,p)})}).then(function(h){return u===!0&&o.revokeObjectURL(c),Vi(h,a),h.userData.mimeType=a.mimeType||SM(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=l,l}assignTexture(e,t,n,r){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[mt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[mt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=s.associations.get(a);a=s.extensions[mt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Xs,Hn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new qs,Hn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(r||s||a){let o="ClonedMaterial:"+n.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return nn}loadMaterial(e){let t=this,n=this.json,r=this.extensions,s=n.materials[e],a,o={},c=s.extensions||{},u=[];if(c[mt.KHR_MATERIALS_UNLIT]){let h=r[mt.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),u.push(h.extendParams(o,s,t))}else{let h=s.pbrMetallicRoughness||{};if(o.color=new ke(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],On),o.opacity=f[3]}h.baseColorTexture!==void 0&&u.push(t.assignTexture(o,"map",h.baseColorTexture,Gt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),u.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Gn);let l=s.alphaMode||$h.OPAQUE;if(l===$h.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===$h.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Cn&&(u.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Ze(1,1),s.normalTexture.scale!==void 0)){let h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&a!==Cn&&(u.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Cn){let h=s.emissiveFactor;o.emissive=new ke().setRGB(h[0],h[1],h[2],On)}return s.emissiveTexture!==void 0&&a!==Cn&&u.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Gt)),Promise.all(u).then(function(){let h=new a(o);return s.name&&(h.name=s.name),Vi(h,s),t.associations.set(h,{materials:e}),s.extensions&&hs(r,h,s),h})}createUniqueName(e){let t=Ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function s(o){return n[mt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return cm(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let u=e[o],l=MM(u),h=r[l];if(h)a.push(h.promise);else{let f;u.extensions&&u.extensions[mt.KHR_DRACO_MESH_COMPRESSION]?f=s(u):f=cm(new qt,u,t),u.mode===ui.TRIANGLE_STRIP?f=f.then(p=>Jh(p,Mo)):u.mode===ui.TRIANGLE_FAN&&(f=f.then(p=>Jh(p,sa))),r[l]={primitive:u,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,u=a.length;c<u;c++){let l=a[c].material===void 0?_M(this.cache):this.getDependency("material",a[c].material);o.push(l)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let u=c.slice(0,c.length-1),l=c[c.length-1],h=[];for(let p=0,g=l.length;p<g;p++){let y=l[p],v=a[p],m,x=u[p];if(v.mode===ui.TRIANGLES||v.mode===ui.TRIANGLE_STRIP||v.mode===ui.TRIANGLE_FAN||v.mode===void 0){let R=s.isSkinnedMesh===!0,b=y.hasAttribute("skinIndex")&&y.hasAttribute("skinWeight");R&&b===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=R&&b?new Wa(y,x):new Ue(y,x),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(v.mode===ui.LINES)m=new Xa(y,x);else if(v.mode===ui.LINE_STRIP)m=new Qr(y,x);else if(v.mode===ui.LINE_LOOP)m=new Ya(y,x);else if(v.mode===ui.POINTS)m=new es(y,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+v.mode);Object.keys(m.geometry.morphAttributes).length>0&&yM(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),Vi(m,s),v.extensions&&hs(r,m,v),t.assignFinalMaterial(m),h.push(m)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return s.extensions&&hs(r,h[0],s),h[0];let f=new lt;s.extensions&&hs(r,f,s),t.associations.set(f,{meshes:e});for(let p=0,g=h.length;p<g;p++)f.add(h[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new an(_h.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Hi(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Vi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){let s=r.pop(),a=r,o=[],c=[];for(let u=0,l=a.length;u<l;u++){let h=a[u];if(h){o.push(h);let f=new at;s!==null&&f.fromArray(s.array,u*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new qa(o,c)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],c=[],u=[],l=[];for(let h=0,f=r.channels.length;h<f;h++){let p=r.channels[h],g=r.samplers[p.sampler],y=p.target,v=y.node,m=r.parameters!==void 0?r.parameters[g.input]:g.input,x=r.parameters!==void 0?r.parameters[g.output]:g.output;y.node!==void 0&&(a.push(this.getDependency("node",v)),o.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",x)),u.push(g),l.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(u),Promise.all(l)]).then(function(h){let f=h[0],p=h[1],g=h[2],y=h[3],v=h[4],m=[];for(let R=0,b=f.length;R<b;R++){let I=f[R],L=p[R],D=g[R],S=y[R],_=v[R];if(I===void 0)continue;I.updateMatrix&&I.updateMatrix();let E=n._createAnimationTracks(I,L,D,S,_);if(E)for(let A=0;A<E.length;A++)m.push(E[A])}let x=new ns(s,void 0,m);return Vi(x,r),x})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,u=r.weights.length;c<u;c++)o.morphTargetInfluences[c]=r.weights[c]}),a})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=r.children||[];for(let u=0,l=o.length;u<l;u++)a.push(n.getDependency("node",o[u]));let c=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),c]).then(function(u){let l=u[0],h=u[1],f=u[2];f!==null&&l.traverse(function(p){p.isSkinnedMesh&&p.bind(f,bM)});for(let p=0,g=h.length;p<g;p++)l.add(h[p]);if(l.userData.pivot!==void 0&&h.length>0){let p=l.userData.pivot,g=h[0];l.pivot=new $().fromArray(p),l.position.x-=p[0],l.position.y-=p[1],l.position.z-=p[2],g.position.set(0,0,0),delete l.userData.pivot}return l})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],c=r._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(u){return r._getNodeRef(r.cameraCache,s.camera,u)})),r._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){o.push(u)}),this.nodeCache[e]=Promise.all(o).then(function(u){let l;if(s.isBone===!0?l=new Vs:u.length>1?l=new lt:u.length===1?l=u[0]:l=new Wt,l!==u[0])for(let h=0,f=u.length;h<f;h++)l.add(u[h]);if(s.name&&(l.userData.name=s.name,l.name=a),Vi(l,s),s.extensions&&hs(n,l,s),s.matrix!==void 0){let h=new at;h.fromArray(s.matrix),l.applyMatrix4(h)}else s.translation!==void 0&&l.position.fromArray(s.translation),s.rotation!==void 0&&l.quaternion.fromArray(s.rotation),s.scale!==void 0&&l.scale.fromArray(s.scale);if(!r.associations.has(l))r.associations.set(l,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){let h=r.associations.get(l);r.associations.set(l,{...h})}return r.associations.get(l).nodes=e,l}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,s=new lt;n.name&&(s.name=r.createUniqueName(n.name)),Vi(s,n),n.extensions&&hs(t,s,n);let a=n.nodes||[],o=[];for(let c=0,u=a.length;c<u;c++)o.push(r.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let l=0,h=c.length;l<h;l++){let f=c[l];f.parent!==null?s.add(nu(f)):s.add(f)}let u=l=>{let h=new Map;for(let[f,p]of r.associations)(f instanceof Hn||f instanceof vn)&&h.set(f,p);return l.traverse(f=>{let p=r.associations.get(f);p!=null&&h.set(f,p)}),h};return r.associations=u(s),s})}_createAnimationTracks(e,t,n,r,s){let a=[],o=e.name?e.name:e.uuid,c=[];function u(p){p.morphTargetInfluences&&c.push(p.name?p.name:p.uuid)}Ur[s.path]===Ur.weights?(u(e),e.isGroup&&e.children.forEach(u)):c.push(o);let l;switch(Ur[s.path]){case Ur.weights:l=rr;break;case Ur.rotation:l=sr;break;case Ur.translation:case Ur.scale:l=Cr;break;default:n.itemSize===1?l=rr:l=Cr;break}let h=r.interpolation!==void 0?vM[r.interpolation]:Zr,f=this._getArrayFromAccessor(n);for(let p=0,g=c.length;p<g;p++){let y=new l(c[p]+"."+Ur[s.path],t.array,f,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),a.push(y)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Tf(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let r=this instanceof sr?Sf:su;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function TM(i,e,t){let n=e.attributes,r=new Fn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,u=o.max;if(c!==void 0&&u!==void 0){if(r.set(new $(c[0],c[1],c[2]),new $(u[0],u[1],u[2])),o.normalized){let l=Tf(ga[o.componentType]);r.min.multiplyScalar(l),r.max.multiplyScalar(l)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new $,c=new $;for(let u=0,l=s.length;u<l;u++){let h=s[u];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){let y=Tf(ga[f.componentType]);c.multiplyScalar(y)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}i.boundingBox=r;let a=new Bn;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=a}function cm(i,e,t){let n=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=bf[a]||a.toLowerCase();o in i.attributes||r.push(s(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});r.push(a)}return ot.workingColorSpace!==On&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ot.workingColorSpace}" not supported.`),Vi(i,e),TM(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?xM(i,e.targets,t):i})}var au=2,hm={imp:["imp"],gnasher:["gnasher"],knight:["knight","emberknight","ember_knight"],riley:["riley","rileyhologram"],fist:["fist","fists","fpfist","weaponfist"],pistol:["pistol","fppistol","weaponpistol"],shotgun:["shotgun","fpshotgun","weaponshotgun","pumpshotgun","doublebarrelshotgun"],chaingun:["chaingun","fpchaingun","weaponchaingun","minigun"],rocket:["rocketlauncher","rocket","fprocketlauncher","weaponrocketlauncher","launcher"],crate:["crate","woodencrate","crateintact"],barrel:["barrel","explosivebarrel","toxicbarrel"],torch:["torch","standingtorch"],lamp:["lamp","ceilinglamp","cagedlamp","ceilinglampintact","lampintact"],lampBroken:["lampbroken","ceilinglampbroken","brokenlamp"],pipeStraight:["pipestraight","pipe"],pipeElbow:["pipeelbow","elbow"],pipeValve:["pipevalve","valve"],chain:["chain","hangingchain"],"pickup:h":["medkitsmall","stimpack","smallmedkit","stim"],"pickup:+":["medkitlarge","medkit","largemedkit","medikit"],"pickup:b":["bulletclip","clip","ammoclip","bullets"],"pickup:a":["shellbox","shells","boxofshells"],"pickup:k":["rocketbox","rockets","boxofrockets"],"pickup:A":["armor","armour","armorvest","armourvest","vest"],"pickup:r":["keycardred","redkeycard","keyred"],"pickup:u":["keycardblue","bluekeycard","keyblue"],"pickup:P":["phoenixorb","orb"],"pickup:2":["shotgunpickup","pickupshotgun"],"pickup:3":["chaingunpickup","pickupchaingun"],"pickup:4":["rocketlauncherpickup","pickuprocketlauncher"],"tex:1":["brick"],"tex:2":["stone"],"tex:3":["metalpanel","metal"],"tex:4":["techpanel","tech"],"tex:5":["hellrock","hell"],"tex:6":["door","doorplain"],"tex:7":["doorred","doorredstripe","reddoor"],"tex:8":["doorblue","doorbluestripe","bluedoor"],"tex:9":["switchoff"],"tex:10":["switchon"],"tex:slab":["floorslab","slab"],"tex:tech":["floorgrate","grate"],"tex:hell":["lavafloor","floorlava"],"tex:ceilDark":["ceilingpanel","ceiling"],"tex:ceilTech":["ceilingpanel","ceilingtech"],"tex:ceilHell":["hellrock","ceilinghell"]};function wf(i){return String(i||"").toLowerCase().replace(/\.[a-z0-9]+$/,"").replace(/.*[\/\\]/,"").replace(/[^a-z0-9]/g,"")}function Af(){var i={models:{},textures:{},ready:!1,loaded:[],problems:[]};return i.model=function(e){for(var t=hm[e]||[e],n=0;n<t.length;n++)if(i.models[t[n]])return i.models[t[n]];return null},i.texture=function(e){for(var t=hm[e]||[e],n=0;n<t.length;n++)if(i.textures[t[n]])return i.textures[t[n]];return null},i}var EM=["assets/codex","assets/cc0","assets"];function pm(i){var e=typeof window!="undefined"&&window.FIREBIRD_ASSET_PACK;return e&&Object.prototype.hasOwnProperty.call(e,i)?e[i]:void 0}function fm(i){var e=pm(i);if(e===void 0)return i;var t=/\.png$/i.test(i)?"image/png":/\.jpe?g$/i.test(i)?"image/jpeg":/\.webp$/i.test(i)?"image/webp":"model/gltf-binary";return"data:"+t+";base64,"+e}function wM(i){var e=pm(i+"/assets.json");return e!==void 0?Promise.resolve(e):typeof window!="undefined"&&window.FIREBIRD_ASSET_PACK||typeof location!="undefined"&&location.protocol==="file:"?Promise.resolve(null):fetch(i+"/assets.json",{cache:"no-cache"}).then(function(t){return t.ok?t.json():null}).catch(function(){return null})}function mm(i){var e=typeof window!="undefined"&&window.FIREBIRD_ASSET_PACK;i=i||e&&e.__dirs||EM;var t=Af(),n=new iu,r=new is;return Promise.all(i.map(function(o){return wM(o).then(function(c){return{dir:o,man:c}})})).then(function(o){var c=[];return o.forEach(function(u,l){if(u.man){var h=Array.isArray(u.man)?u.man:u.man.assets||u.man.files||[];h.forEach(function(f){c.push(a(u.dir,f,l))})}}),Promise.all(c)}).then(function(){return t.ready=!0,t});function s(o,c,u,l){var h=o[c];(!h||h.priority>l)&&(u.priority=l,o[c]=u)}function a(o,c,u){var l=c.file||c.path||c.src,h=String(c.type||c.kind||"").toLowerCase(),f=wf(c.id||c.name||l);if(l&&/\.glb$/i.test(l))return dm(n.loadAsync(fm(o+"/"+l)),2e4).then(function(x){s(t.models,f,{scene:x.scene,animations:x.animations||[],meta:c,type:h,dir:o},u),t.loaded.push(o+":"+f)}).catch(function(x){t.problems.push(o+"/"+l+": "+(x&&x.message||x))});if(h.indexOf("tex")===0||c.maps||c.textures){var p=c.maps||c.textures||{},g={},y=[],v={map:["albedo","basecolor","base_color","color","diffuse"],normalMap:["normal","normalmap"],roughnessMap:["roughness","rough","orm"],emissiveMap:["emissive","emission","glow"]},m=c.filter!=="linear";return Object.keys(v).forEach(function(x){var R=null;Object.keys(p).forEach(function(b){v[x].indexOf(b.toLowerCase().replace(/[^a-z_]/g,""))>=0&&(R=p[b])}),R&&y.push(dm(r.loadAsync(fm(o+"/"+R)),2e4).then(function(b){b.wrapS=b.wrapT=ai,b.anisotropy=8,b.colorSpace=x==="map"||x==="emissiveMap"?Gt:jn,m&&(b.magFilter=Vt),g[x]=b}).catch(function(b){t.problems.push(o+"/"+R+": "+(b&&b.message||b))}))}),Promise.all(y).then(function(){g.map&&(s(t.textures,f,g,u),t.loaded.push(o+":tex:"+f))})}return null}}function dm(i,e){return new Promise(function(t,n){var r=setTimeout(function(){n(new Error("timed out"))},e);i.then(function(s){clearTimeout(r),t(s)},function(s){clearTimeout(r),n(s)})})}function fs(i){var e=nu(i.scene);e.traverse(function(r){r.isMesh&&(r.castShadow=!0,r.frustumCulled=!r.isSkinnedMesh,r.material&&(r.material=Array.isArray(r.material)?r.material.map(function(s){return s.clone()}):r.material.clone()))});var t=i.animations.length?new so(e):null,n={};return i.animations.forEach(function(r){n[wf(r.name).replace(/^.*\|/,"")]=r}),{obj:e,mixer:t,clips:n}}function Po(i,e){var t=wf(e);if(i[t])return i[t];for(var n in i)if(n.indexOf(t)>=0)return i[n];return null}var gm={};function Ye(i,e){return gm[i]||(gm[i]=e())}function It(i,e){return new nn(Object.assign({color:i,roughness:.7,metalness:.05},e||{}))}function Ln(i,e){return new nn({color:0,emissive:i,emissiveIntensity:e||3,roughness:1})}function $e(i,e,t,n,r,s){var a=new Ue(i,e);return a.position.set(t,n,r),a.castShadow=!0,(s||this).add(a),a}var Qn=function(){return new Ar(1,16,12)},mn=function(){return new pn(1,1,1)},Or=function(){return new ja(1,1,10)},Ei=function(){return new Ks(1,1,1,14)},ds=function(){return new Ja(1,1,6,12)};function lu(i){var e=[];return i.traverse(function(t){t.isMesh&&t.material&&!t.userData.noFlash&&(t.material=t.material.clone(),e.push(t.material))}),e}function AM(){var i=new lt,e=new lt;i.add(e);var t=It(8007196,{roughness:.6}),n=It(3806220),r=It(15259824,{roughness:.4}),s=$e(Ye("cap",ds),t,0,.5,0,e);s.scale.set(.17,.14,.13),s.rotation.x=.35;var a=$e(Ye("sph",Qn),t,0,.72,.06,e);a.scale.set(.11,.1,.11),[-1,1].forEach(function(c){var u=$e(Ye("cone",Or),n,c*.07,.83,.02,e);u.scale.set(.025,.12,.025),u.rotation.z=-c*.5;var l=$e(Ye("sph",Qn),Ln(16752672,2),c*.045,.74,.15,e);l.scale.setScalar(.018),l.userData.noFlash=!0;var h=new lt;h.position.set(c*.17,.58,.02),e.add(h);var f=$e(Ye("cap",ds),t,0,-.1,0,h);f.scale.set(.04,.09,.04);var p=$e(Ye("cone",Or),r,0,-.26,.03,h);p.scale.set(.03,.07,.03),p.rotation.x=Math.PI,h.userData.side=c,e.userData["arm"+c]=h;var g=$e(Ye("cap",ds),n,c*.08,.18,0,e);g.scale.set(.05,.12,.05),e.userData["leg"+c]=g;var y=$e(Ye("cone",Or),n,c*.06,.55,-.12,e);y.scale.set(.03,.09,.03),y.rotation.x=-1.2});var o=lu(i);return{obj:i,mats:o,animate:function(c,u){var l=c.state==="chase"||c.state==="flee"?Math.sin(u*9+c.animT):0;e.position.y=Math.abs(l)*.03,e.userData.leg1.rotation.x=l*.6,e.userData["leg-1"].rotation.x=-l*.6;var h=c.state==="windup"?1:0;e.userData.arm1.rotation.x=-l*.5-h*2.4,e.userData["arm-1"].rotation.x=l*.5-h*.4,e.rotation.x=c.state==="pain"?-.35:0}}}function RM(){var i=new lt,e=new lt;i.add(e);var t=It(12873850,{roughness:.55}),n=It(3803152),r=It(16051416,{roughness:.3}),s=$e(Ye("sph",Qn),t,0,.36,0,e);s.scale.set(.34,.28,.32);var a=new lt;a.position.set(0,.3,.12),e.add(a);var o=$e(Ye("sph",Qn),n,0,.04,.12,e);o.scale.set(.24,.1,.12),o.position.y=.33;for(var c=0;c<9;c++){var u=(c/8-.5)*2.4,l=$e(Ye("cone",Or),r,Math.sin(u)*.22,.42,.14+Math.cos(u)*.14,e);l.scale.set(.028,.08,.028),l.rotation.x=Math.PI;var h=$e(Ye("cone",Or),r,Math.sin(u)*.2,-.02,Math.cos(u)*.14+.02,a);h.scale.set(.025,.07,.025)}var f=$e(Ye("sph",Qn),t,0,-.04,.02,a);f.scale.set(.26,.08,.22),[-1,1].forEach(function(g){var y=$e(Ye("sph",Qn),Ln(16752688,.9),g*.12,.56,.25,e);y.scale.setScalar(.02),y.userData.noFlash=!0;var v=$e(Ye("cap",ds),t,g*.18,.1,0,e);v.scale.set(.07,.07,.07),e.userData["leg"+g]=v});var p=lu(i);return{obj:i,mats:p,animate:function(g,y){var v=g.state==="chase"||g.state==="flee"?Math.sin(y*14+g.animT):0;e.position.y=Math.abs(v)*.04,e.userData.leg1.position.z=v*.08,e.userData["leg-1"].position.z=-v*.08;var m=g.state==="windup"?.7:(Math.sin(y*6+g.animT)+1)*.08;a.rotation.x=m,e.rotation.x=g.state==="windup"?.25:g.state==="pain"?-.3:0}}}function CM(){var i=new lt,e=new lt;i.add(e);var t=It(9052182,{roughness:.35,metalness:.6}),n=It(2757648,{roughness:.5,metalness:.4}),r=Ln(16734736,4),s=$e(Ye("box",mn),t,0,.82,0,e);s.scale.set(.5,.42,.3);var a=$e(Ye("box",mn),n,0,.55,0,e);a.scale.set(.4,.16,.26);var o=$e(Ye("sph",Qn),r,0,.84,.16,e);o.scale.setScalar(.07),o.userData.noFlash=!0;var c=$e(Ye("box",mn),t,0,1.12,.02,e);c.scale.set(.2,.18,.2);var u=$e(Ye("box",mn),Ln(16747040,5),0,1.13,.12,e);u.scale.set(.15,.03,.02),u.userData.noFlash=!0,[-1,1].forEach(function(h){var f=$e(Ye("cone",Or),n,h*.14,1.26,0,e);f.scale.set(.04,.2,.04),f.rotation.z=-h*.7;var p=$e(Ye("sph",Qn),t,h*.3,1,0,e);p.scale.set(.14,.1,.14);var g=new lt;g.position.set(h*.33,.95,0),e.add(g),e.userData["arm"+h]=g;var y=$e(Ye("box",mn),t,0,-.25,0,g);y.scale.set(.13,.42,.13);var v=$e(Ye("box",mn),n,0,-.5,.02,g);v.scale.set(.15,.13,.15);var m=$e(Ye("box",mn),n,h*.13,.24,0,e);m.scale.set(.15,.48,.17),e.userData["leg"+h]=m});var l=lu(i);return{obj:i,mats:l,animate:function(h,f){var p=h.state==="chase"?Math.sin(f*6+h.animT):0;e.userData.leg1.rotation.x=p*.4,e.userData["leg-1"].rotation.x=-p*.4,e.userData.arm1.rotation.x=h.state==="windup"?-2.2:-p*.3,e.userData["arm-1"].rotation.x=h.state==="windup"?-1.2:p*.3,e.position.y=Math.abs(p)*.03}}}function IM(){var i=new lt,e=new lt;i.add(e);var t=new nn({color:665648,emissive:4184296,emissiveIntensity:1.2,transparent:!0,opacity:.82,roughness:.3,metalness:.2}),n=new nn({color:0,emissive:10484991,emissiveIntensity:3}),r=$e(Ye("cap",ds),t,0,.58,0,e);r.scale.set(.13,.16,.09);var s=$e(Ye("box",mn),t,0,.4,0,e);s.scale.set(.22,.08,.13);var a=$e(Ye("sph",Qn),t,0,.86,0,e);a.scale.set(.085,.1,.09);var o=$e(Ye("box",mn),n,0,.87,.07,e);o.scale.set(.12,.028,.02);var c=$e(Ye("sph",Qn),n,0,.64,.08,e);c.scale.setScalar(.03),[-1,1].forEach(function(f){var p=new lt;p.position.set(f*.15,.72,0),e.add(p),e.userData["arm"+f]=p;var g=$e(Ye("cap",ds),t,0,-.14,0,p);g.scale.set(.035,.13,.035);var y=$e(Ye("cap",ds),t,f*.07,.18,0,e);y.scale.set(.045,.16,.045),e.userData["leg"+f]=y});var u=new Ue(Ye("sph",Qn),new nn({color:0,emissive:16765502,emissiveIntensity:1.5,transparent:!0,opacity:.25,side:Gn,depthWrite:!1}));u.scale.setScalar(.62),u.position.y=.5,u.userData.noFlash=!0,i.add(u);var l=[t],h=new Ue(new Rr(.34,.012,6,40),n);return h.rotation.x=Math.PI/2,h.position.y=.02,i.add(h),{obj:i,mats:l,animate:function(f,p){var g=f.state==="chase"?Math.sin(p*8+f.animT):0;e.userData.leg1.rotation.x=g*.5,e.userData["leg-1"].rotation.x=-g*.5,e.userData.arm1.rotation.x=f.state==="windup"?-1.5:-g*.4,e.userData["arm-1"].rotation.x=f.state==="windup"?-1.5:g*.4,e.position.y=.03+Math.sin(p*2)*.015;var y=f.state==="windup"&&f.attack!=="melee";n.emissive.setHex(y?16777215:10484991),n.emissiveIntensity=y?8:3,t.opacity=.7+Math.sin(p*23)*.06+(Math.random()<.02?-.3:0),u.visible=f.shieldT>0,u.rotation.y=p*1.5,h.scale.setScalar(1+Math.sin(p*3)*.05)}}}function PM(){var i=new lt,e=$e(Ye("cyl",Ei),It(4872762,{roughness:.45,metalness:.5}),0,.28,0,i);e.scale.set(.2,.55,.2),[.08,.48].forEach(function(r){var s=$e(Ye("cyl",Ei),It(2764326,{metalness:.6,roughness:.4}),0,r,0,i);s.scale.set(.205,.03,.205)});var t=$e(Ye("cyl",Ei),Ln(7012154,2.5),0,.56,0,i);t.scale.set(.16,.01,.16),t.userData.noFlash=!0;var n=$e(Ye("box",mn),Ln(16765502,1.5),0,.3,.2,i);return n.scale.set(.12,.12,.005),n.rotation.z=Math.PI/4,n.userData.noFlash=!0,{obj:i,mats:lu(i),animate:function(){}}}var LM={imp:AM,gnasher:RM,knight:CM,riley:IM,barrel:PM};function NM(i,e){var t=fs(i),n=new lt;t.obj.scale.setScalar(1/au),n.add(t.obj);var r=[],s=[],a=t.obj.getObjectByName("shield");t.obj.traverse(function(h){h.isMesh&&(Array.isArray(h.material)?h.material:[h.material]).forEach(function(f){f.emissive&&f.emissiveIntensity>1.2&&(f.emissiveIntensity=1.2),/tell/i.test(f.name)||/tell/i.test(h.name)?s.push(f):f.emissive&&r.push(f)})});var o=null,c=null;function u(h,f){if(t.mixer){var p=Po(t.clips,h)||(h==="attack_windup"?Po(t.clips,"attack"):null)||Po(t.clips,"idle");if(p){var g=t.mixer.clipAction(p);o!==g&&(g.reset(),g.setLoop(f?Ic:Pc,1/0),g.clampWhenFinished=!!f,g.play(),o&&o.crossFadeTo(g,.15,!1),o=g)}}}var l={idle:"idle",chase:"walk",flee:"walk",windup:"attack_windup",pain:"pain",die:"death",dead:"death"};return{obj:n,mats:r,animate:function(h,f,p){var g=h.state||"idle";g!==c&&(c==="windup"&&g==="chase"&&Po(t.clips,"attack")?u("attack",!0):u(l[g]||"idle",g==="pain"||g==="die"||g==="dead"),c=g),o&&o.getClip().name&&/attack$/i.test(o.getClip().name)&&!o.isRunning()&&g==="chase"&&u("walk"),t.mixer&&t.mixer.update(p||0);var y=g==="windup"&&h.attack!=="melee";s.forEach(function(v){v.emissive&&(v.emissive.setHex(y?16777215:10484991),v.emissiveIntensity=y?6:2)}),a&&(a.visible=h.shieldT>0)},authored:!0,clip:function(){return o?o.getClip().name:null}}}function vm(i,e){var t=e&&e.model(i.kind),n=t?NM(t,i):LM[i.kind](),r=!t&&i.kind==="riley"?i.h/.95:1;n.obj.scale.setScalar(r);var s=0,a=n.animate;return n.debug=function(){return{kind:i.kind,authored:!!n.authored,clip:n.clip?n.clip():null,state:i.state}},n.update=function(o,c,u){n.obj.position.set(i.x,i.y,i.z);var l=i.state==="windup"||i.state==="pain"||i.los?u:i.moveAng||0,h=n.obj.rotation.y,f=-l+Math.PI/2,p=Math.atan2(Math.sin(f-h),Math.cos(f-h));if(n.obj.rotation.y=h+p*Math.min(1,c*10),n.authored)a(i,o,c);else if(i.state==="die"||i.state==="dead"){s+=c;var g=Math.min(1,s/.45);n.obj.rotation.x=-g*1.35,n.obj.position.y=i.y+.05*g,n.obj.scale.setScalar(r*(1-g*.15)),i.kind==="riley"&&(n.obj.visible=s*12%1<.6&&s<1.4)}else a(i,o);var y=i.flashT>0&&i.state!=="dead";n.mats.forEach(function(v){v.userData.base||(v.userData.base={e:v.emissive?v.emissive.getHex():0,i:v.emissiveIntensity}),y?(v.emissive.setHex(16777215),v.emissiveIntensity=1.4):(v.emissive.setHex(v.userData.base.e),v.emissiveIntensity=v.userData.base.i)})},n}function _m(i,e){var t=new lt,n=new lt;t.add(n);var r=i.item,s=e&&e.model("pickup:"+r);if(s){var a=fs(s);a.obj.scale.setScalar(1/au),n.add(a.obj)}else if(r==="h"||r==="+"){var o=r==="+",c=$e(Ye("box",mn),It(15789280,{roughness:.5}),0,.1,0,n);c.scale.set(o?.34:.2,o?.2:.14,o?.24:.14);var u=$e(Ye("box",mn),Ln(16722458,2),0,.1,0,n);u.scale.set(o?.22:.13,o?.06:.04,o?.245:.145);var l=$e(Ye("box",mn),Ln(16722458,2),0,.1,0,n);l.scale.set(o?.07:.045,o?.06:.04,o?.245:.145),l.scale.set(o?.345:.205,o?.06:.04,o?.07:.045)}else if(r==="b"){var h=$e(Ye("box",mn),It(6972504,{metalness:.5,roughness:.4}),0,.08,0,n);h.scale.set(.1,.16,.06);var f=$e(Ye("box",mn),It(14196800,{metalness:.8,roughness:.3}),0,.17,0,n);f.scale.set(.08,.03,.04)}else if(r==="a"){var p=$e(Ye("box",mn),It(10496024,{roughness:.6}),0,.09,0,n);p.scale.set(.3,.18,.18);for(var g=0;g<4;g++){var y=$e(Ye("cyl",Ei),It(14196800,{metalness:.8,roughness:.3}),-.1+g*.066,.2,0,n);y.scale.set(.022,.06,.022)}}else if(r==="A"){var v=$e(Ye("box",mn),It(3050042,{metalness:.4,roughness:.4}),0,.2,0,n);v.scale.set(.34,.36,.14);var m=$e(Ye("box",mn),Ln(8060810,1.2),0,.26,.075,n);m.scale.set(.16,.1,.01)}else if(r==="2"){var x=Rf(!0);x.scale.setScalar(.9),x.rotation.z=.2,x.position.y=.15,n.add(x)}else if(r==="r"||r==="u"){var R=r==="r"?16722458:3832575,b=$e(Ye("box",mn),Ln(R,2.5),0,.2,0,n);b.scale.set(.16,.22,.015);var I=$e(Ye("box",mn),It(15788760),0,.25,0,n);I.scale.set(.12,.03,.02)}else if(r==="P"){var L=$e(Ye("sph",Qn),Ln(16756800,4),0,.3,0,n);L.scale.setScalar(.14);var D=new Ue(new Rr(.2,.012,6,32),Ln(16765502,3));D.position.y=.3,n.add(D)}var S=r==="r"||r==="u"||r==="P"||r==="2";return{obj:t,update:function(_){t.position.set(i.x,i.y,i.z),t.visible=!i.gone,S&&(n.rotation.y=_*1.8+i.bob),n.position.y=S?.08+Math.sin(_*2.5+i.bob)*.05:0}}}function xm(i,e){var t=new lt,n=e&&e.model("torch");if(n){var r=fs(n);return r.obj.scale.setScalar(1/au),t.add(r.obj),t.position.set(i.x,i.y,i.z),{obj:t,update:function(l){r.mixer&&r.mixer.update(1/60)}}}var s=$e(Ye("cyl",Ei),It(3811866,{metalness:.3}),0,.4,0,t);s.scale.set(.03,.8,.03);var a=$e(Ye("cyl",Ei),It(5917242,{metalness:.6,roughness:.4}),0,.82,0,t);a.scale.set(.1,.06,.1);var o=new lt;o.position.y=.9,t.add(o);var c=$e(Ye("cone",Or),Ln(16747040,5),0,.08,0,o);c.scale.set(.08,.2,.08);var u=$e(Ye("cone",Or),Ln(16769120,6),0,.05,0,o);return u.scale.set(.045,.12,.045),t.position.set(i.x,i.y,i.z),{obj:t,update:function(l){var h=Math.sin(l*17+i.animT*9)*.5+Math.sin(l*29+i.animT*3)*.5;o.scale.set(1+h*.1,1+h*.25,1+h*.1),o.rotation.y=l*3}}}var DM=function(i,e,t,n){return new tu(i,e,t,3,n)};function Tn(i,e,t,n,r){return Ye("rb"+i,function(){return DM(e,t,n,r)})}var ym=function(){return It(3816772,{metalness:.9,roughness:.3})},Mm=function(){return It(1842724,{metalness:.85,roughness:.4})},UM=function(){return It(6961690,{roughness:.55,metalness:.05})},ou=function(){return It(2760988,{roughness:.85})},Sm=function(){return It(3818032,{roughness:.9})};function bm(i,e){var t=!1;i.traverse(function(n){/hand|arm|glove/i.test(n.name)&&(t=!0)}),!t&&(e==="shotgun"||e==="chaingun"||e==="rocket"?(va(i,.01,-.07,.08,.4),va(i,-.01,-.05,-.2,.1)):e!=="fist"&&va(i,0,-.06,.02,.3))}function va(i,e,t,n,r){var s=new lt;s.position.set(e,t,n),s.rotation.x=r||0,i.add(s);var a=new Ue(Tn("palm",.07,.05,.09,.02),ou());s.add(a);var o=new Ue(Tn("fing",.075,.03,.05,.012),ou());o.position.set(0,-.03,-.03),s.add(o);var c=new Ue(Ye("cyl",Ei),Sm());return c.scale.set(.045,.28,.045),c.rotation.x=Math.PI/2-.15,c.position.set(.01,-.02,.17),s.add(c),s}function Rf(i){var e=new lt,t=ym(),n=Mm(),r=UM();[-.019,.019].forEach(function(y){var v=new Ue(Ye("cyl",Ei),t);v.scale.set(.019,.62,.019),v.rotation.x=Math.PI/2,v.position.set(y,0,-.36),e.add(v);var m=new Ue(Ye("cyl",Ei),It(328965));m.scale.set(.013,.01,.013),m.rotation.x=Math.PI/2,m.position.set(y,0,-.672),e.add(m)});var s=new Ue(Tn("rib",.012,.01,.6,.004),n);s.position.set(0,.022,-.36),e.add(s);var a=new Ue(Ye("sph",Qn),Ln(16769184,1.2));a.scale.setScalar(.006),a.position.set(0,.03,-.66),e.add(a);var o=new lt;o.position.set(0,-.034,-.3),e.add(o),e.userData.pump=o;var c=new Ue(Tn("fore",.066,.05,.2,.015),r);o.add(c);for(var u=0;u<5;u++){var l=new Ue(Tn("grip",.068,.006,.012,.002),It(3808780));l.position.set(0,-.022,-.08+u*.04),o.add(l)}var h=new Ue(Tn("recv",.075,.085,.2,.012),n);h.position.set(0,-.012,.02),e.add(h);var f=new Ue(Tn("port",.005,.03,.07,.003),It(657930));f.position.set(.039,0,0),e.add(f);var p=new Ue(new Rr(.025,.005,6,14,Math.PI),n);p.position.set(0,-.055,.07),p.rotation.set(0,Math.PI/2,Math.PI),e.add(p);var g=new Ue(Tn("stock",.064,.1,.28,.02),r);return g.position.set(0,-.055,.24),g.rotation.x=-.14,e.add(g),i||(e.userData.pumpHand=va(o,-.005,-.045,.01,.1),va(e,.01,-.08,.1,.4)),e}function Tm(){var i=new lt,e=ym(),t=Mm(),n=new Ue(Tn("slide",.042,.042,.19,.008),e);n.position.set(0,.02,-.07),i.add(n),i.userData.slide=n;for(var r=0;r<6;r++){var s=new Ue(Tn("ser",.044,.03,.004,.001),t);s.position.set(0,.022,0+r*.008-.02),n.add(s),s.position.set(0,0,.06+r*.008)}var a=new Ue(Tn("frame",.038,.03,.16,.008),t);a.position.set(0,-.012,-.06),i.add(a);var o=new Ue(Ye("cyl",Ei),It(526344));o.scale.set(.009,.01,.009),o.rotation.x=Math.PI/2,o.position.set(0,.022,-.166),i.add(o);var c=new Ue(Tn("pgrip",.036,.11,.05,.01),It(2761760,{roughness:.8}));c.position.set(0,-.07,.01),c.rotation.x=.28,i.add(c);var u=new Ue(new Rr(.018,.004,6,14,Math.PI),t);u.position.set(0,-.03,-.035),u.rotation.set(0,Math.PI/2,Math.PI),i.add(u);var l=new Ue(Tn("sight",.006,.01,.01,.002),Ln(16734762,1.5));l.position.set(0,.046,-.155),i.add(l);var h=new Ue(Tn("rear",.03,.01,.008,.002),t);return h.position.set(0,.046,.02),i.add(h),va(i,0,-.07,.04,.3),i}function Em(){var i=new lt,e=new Ue(Tn("fist",.1,.085,.11,.03),ou());i.add(e);var t=new Ue(Tn("knuck",.105,.04,.03,.012),It(5917242,{metalness:.7,roughness:.35}));t.position.set(0,.02,-.06),i.add(t);var n=new Ue(Tn("thumb",.03,.03,.06,.012),ou());n.position.set(-.05,-.01,-.02),i.add(n);var r=new Ue(Ye("cyl",Ei),Sm());return r.scale.set(.05,.3,.05),r.rotation.x=Math.PI/2,r.position.set(0,-.01,.2),i.add(r),i}var ei=3e3;function wm(i){var e=new Float32Array(ei*3),t=new Float32Array(ei*3),n=new Float32Array(ei),r=new Float32Array(ei),s=new Float32Array(ei*3),a=new Float32Array(ei),o=new Float32Array(ei),c=new Float32Array(ei),u=new Float32Array(ei),l=new Float32Array(ei*3),h=new Uint8Array(ei),f=new qt;f.setAttribute("position",new Jt(e,3).setUsage(aa)),f.setAttribute("color",new Jt(t,3).setUsage(aa)),f.setAttribute("size",new Jt(n,1).setUsage(aa)),f.setAttribute("alpha",new Jt(r,1).setUsage(aa));var p=new Qt({uniforms:{scale:{value:600}},vertexShader:["attribute float size; attribute float alpha; attribute vec3 color; varying vec3 vC; varying float vA;","uniform float scale;","void main(){ vC = color; vA = alpha; vec4 mv = modelViewMatrix * vec4(position,1.0);"," gl_PointSize = size * scale / -mv.z; gl_Position = projectionMatrix * mv; }"].join(`
`),fragmentShader:["varying vec3 vC; varying float vA;","void main(){ vec2 d = gl_PointCoord - 0.5; float r = dot(d,d); if (r > 0.25) discard;"," float k = smoothstep(0.25, 0.0, r); gl_FragColor = vec4(vC * k * vA, k * vA); }"].join(`
`),transparent:!0,depthWrite:!1,blending:lr}),g=new es(f,p);g.frustumCulled=!1,i.add(g);var y=0,v=0;function m(_,E,A,M,P,U,k,Y,J,ne,ie,se){var re=y;y=(y+1)%ei,v=Math.min(ei,v+1),e[re*3]=_,e[re*3+1]=E,e[re*3+2]=A,s[re*3]=M,s[re*3+1]=P,s[re*3+2]=U,l[re*3]=k[0],l[re*3+1]=k[1],l[re*3+2]=k[2],n[re]=Y,a[re]=o[re]=J,c[re]=ne||0,u[re]=ie||0,h[re]=se?0:1}function x(_){return(Math.random()-.5)*2*_}for(var R=[],b=0;b<6;b++){var I=new Kn(16755285,0,6,1.6);I.userData={t:0,max:0,peak:0},i.add(I),R.push(I)}var L=0;function D(_,E,A,M,P,U,k){var Y=R[L];L=(L+1)%R.length,Y.position.set(_,E,A),Y.color.setHex(M),Y.distance=k||6,Y.userData.t=Y.userData.max=U,Y.userData.peak=P}var S={blood:function(_){for(var E=0;E<14;E++)m(_.x,_.y,_.z,_.dx*1.5+x(1.2),x(1)+1,_.dz*1.5+x(1.2),[.55,.02,.02],.05+Math.random()*.04,.6,9)},spark:function(_){for(var E=0;E<12;E++)m(_.x,_.y,_.z,x(3),x(3)+1,x(3),[1.4,1.1,.5],.025,.35,8);D(_.x,_.y,_.z,10484991,2,.1,3)},puff:function(_){for(var E=0;E<6;E++)m(_.x,_.y,_.z,x(.3),x(.3)+.2,x(.3),[.25,.23,.2],.12,.5,-.2,.3);for(var A=0;A<5;A++)m(_.x,_.y,_.z,x(2.5),x(2.5),x(2.5),[1.6,1,.4],.02,.18,6)},muzzle:function(_){var E=_.weapon==="shotgun";D(_.x,_.y,_.z,16756832,E?6:3.5,.07,E?8:6)},fireBurst:function(_){for(var E=0;E<22;E++)m(_.x,_.y,_.z,x(2),x(2)+.5,x(2),[1.8,.7,.15],.06,.35,2,-.1);D(_.x,_.y,_.z,16742944,4,.25,5)},greenBurst:function(_){for(var E=0;E<22;E++)m(_.x,_.y,_.z,x(2),x(2)+.5,x(2),[.3,1.6,1.8],.06,.35,2,-.1);D(_.x,_.y,_.z,6287615,4,.25,5)},explosion:function(_){for(var E=0;E<90;E++){var A=Math.random()<.5;m(_.x,_.y,_.z,x(4),x(3)+2,x(4),A?[2,1.2,.3]:[1.4,.4,.05],.12+Math.random()*.1,.5+Math.random()*.4,3,.4)}for(var M=0;M<30;M++)m(_.x,_.y+.3,_.z,x(1),Math.random()*1.5,x(1),[.18,.15,.13],.35,1.4,-.5,.6);D(_.x,_.y+.5,_.z,16747056,14,.5,9)},gib:function(_){for(var E=_.kind==="gnasher"?[.6,.15,.2]:[.5,.05,.02],A=0;A<26;A++)m(_.x,_.y,_.z,x(2),Math.random()*3,x(2),E,.06+Math.random()*.05,.9,9);if(_.kind==="riley")for(var M=0;M<60;M++)m(_.x,_.y+Math.random(),_.z,x(1),Math.random()*1.5,x(1),[.3,1.5,1.7],.04,1.4,-.4)},summon:function(_){for(var E=0;E<50;E++)m(_.x+x(.4),_.y,_.z+x(.4),x(.5),Math.random()*2.5,x(.5),[1.8,.5,.1],.07,.8,-1);D(_.x,_.y+.5,_.z,16734736,6,.6,6)},pickup:function(_){for(var E=0;E<16;E++)m(_.x,_.y,_.z,x(1),Math.random()*1.5,x(1),[1.4,1.2,.5],.03,.5,-1)}};return{points:g,event:function(_){S[_.name]&&S[_.name](_)},trail:function(_,E,A,M){m(_,E,A,x(.2),x(.2),x(.2),M?[.3,1.4,1.6]:[1.8,.6,.1],.07,.3,0,-.15)},ember:function(_,E,A){m(_+x(.05),E,A+x(.05),x(.15),.4+Math.random()*.4,x(.15),[1.6,.6,.1],.02,1.1,-.2)},update:function(_,E){p.uniforms.scale.value=E;for(var A=0;A<v;A++){if(a[A]<=0){r[A]=0;continue}a[A]-=_,s[A*3+1]-=c[A]*_,e[A*3]+=s[A*3]*_,e[A*3+1]+=s[A*3+1]*_,e[A*3+2]+=s[A*3+2]*_;var M=Math.max(0,a[A]/o[A]);r[A]=h[A]?M:1,n[A]=Math.max(.005,n[A]+u[A]*_),t[A*3]=l[A*3],t[A*3+1]=l[A*3+1]*(.5+.5*M),t[A*3+2]=l[A*3+2]*M}f.attributes.position.needsUpdate=f.attributes.color.needsUpdate=f.attributes.size.needsUpdate=f.attributes.alpha.needsUpdate=!0,f.setDrawRange(0,v),R.forEach(function(P){var U=P.userData;U.t>0?(U.t-=_,P.intensity=U.peak*Math.max(0,U.t/U.max)):P.intensity=0})}}}var Am={slab:788743,tech:395532,hell:1443332};function Rm(i,e){e=e||{};var t=new Hc({canvas:i,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!e.preserve});t.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),t.toneMapping=as,t.toneMappingExposure=1.45;var n=new ua(t),r=n.fromScene(new Xc,.04).texture;t.outputColorSpace=Gt,t.shadowMap.enabled=!1,t.info.autoReset=!1;var s=new an(78,16/9,.03,60);s.rotation.order="YXZ";var a=null,o=null,c=null,u=null,l=null,h=new Map,f=[],p=new Map,g=new Er,y=new an(60,16/9,.01,5),v=new Kn(16756848,0,3,1.5),m=new rs(16767152,1.2);m.position.set(-1,2,1),g.add(new Qs(16777215,.35),new js(16769216,2103312,.8),v,m),g.environment=r,g.environmentIntensity=.6;var x=Af(),R=new lt,b={};g.add(R);var I={fist:{p:[.14,-.15,-.3],ry:0},pistol:{p:[.15,-.14,-.38],ry:.06},shotgun:{p:[.1,-.13,-.2],ry:.04},chaingun:{p:[.12,-.15,-.22],ry:.04},rocket:{p:[.13,-.16,-.2],ry:.04}},L={fist:Em,pistol:Tm,shotgun:Rf};function D(){Object.keys(b).forEach(function(me){R.remove(b[me])}),b={},Object.keys(I).forEach(function(me){var oe=x.model(me),G;if(oe){G=new lt;var Z=fs(oe);G.add(Z.obj),Z.obj.rotation.y=Math.PI,Z.obj.updateMatrixWorld(!0);var fe=new Fn().setFromObject(Z.obj,!0),ve=fe.max.z-fe.min.z;G.userData.authoredLength=ve;var Me={fist:.2,pistol:.24,shotgun:.85,chaingun:.8,rocket:.9};ve>.001&&Me[me]&&Z.obj.scale.multiplyScalar(Me[me]/ve),["pump","slide","barrels","tube"].forEach(function(et){var Fe=Z.obj.getObjectByName(et);Fe&&(G.userData[et]=Fe)}),G.userData.authored=!0,bm(G,me)}else if(L[me])G=L[me]();else return;var Oe=I[me];G.position.set(Oe.p[0],Oe.p[1],Oe.p[2]),G.rotation.y=Oe.ry,G.userData.baseZ=Oe.p[2],G.visible=!1,R.add(G),b[me]=G})}D();function S(me,oe){me&&(me.userData.z0===void 0&&(me.userData.z0=me.position.z),me.position.z=me.userData.z0+oe)}var _=new Ue(new Ar(1,10,8),new Cn({color:16765056,transparent:!0,opacity:.9,blending:lr,depthWrite:!1}));_.scale.setScalar(.035),g.add(_);var E=0,A={x:0,y:0},M=0,P=0,U=null,k={w:1,h:1,top:0};function Y(me){U=me,a=new Er;var oe=Am[me.L.floor]||Am.slab;a.background=new ke(oe),a.fog=new za(oe,.032),a.environment=r,a.environmentIntensity=.25,a.add(new js(10520696,2103840,.9)),a.add(new Qs(5261384,.5)),u=rm(me,x),a.add(u.group),l=wm(a),h.clear(),p.clear(),f=[],me.ents.forEach(function(G){if(G.kind==="torch"){var Z=xm(G,x);a.add(Z.obj),h.set(G,Z);var fe=new Kn(16747066,2.2,7.5,1.4);fe.position.set(G.x,G.y+1,G.z),fe.userData.e=G,a.add(fe),f.push(fe)}}),ne(me).forEach(function(G){var Z=new Kn(13154472,1.6+G.size*.02,4+Math.sqrt(G.size)*1.6,1.1);Z.position.set(G.x,G.y,G.z),a.add(Z);var fe=x.model("lamp");if(fe){var ve=fs(fe);ve.obj.scale.setScalar(.5),ve.obj.position.set(G.x,G.y+.4,G.z),a.add(ve.obj);return}var Me=new lt,Oe=new Ue(new pn(.5,.05,.5),new nn({color:0,emissive:16770752,emissiveIntensity:1.1})),et=new Ue(new pn(.58,.1,.58),new nn({color:2762790,metalness:.8,roughness:.4,wireframe:!0}));Me.add(Oe,et),Me.position.set(G.x,G.y+.35,G.z),a.add(Me)}),o=new Vc(t),o.addPass(new Wc(a,s)),c=new pa(new Ze(256,256),.75,.55,.82),o.addPass(c),o.addPass(new qc),ie(i.clientWidth,i.clientHeight)}function J(me,oe,G,Z){var fe=Math.floor(G)*me.mw+Math.floor(oe);return me.cells[fe]===0?me.ceil[fe]:Z}function ne(me){for(var oe=me.W,G=new Uint8Array(oe.mw*oe.mh),Z=[],fe=0;fe<oe.cells.length;fe++)if(!(G[fe]||oe.cells[fe]!==0)){var ve=[fe],Me=0,Oe=0,et=0,Fe=0;for(G[fe]=1;ve.length;){var nt=ve.pop(),ft=nt%oe.mw,it=nt/oe.mw|0;Me+=ft+.5,Oe+=it+.5,et=Math.max(et,oe.ceil[nt]),Fe++,[[1,0],[-1,0],[0,1],[0,-1]].forEach(function(Mt){var Rt=ft+Mt[0],jt=it+Mt[1],yt=jt*oe.mw+Rt;Rt<0||jt<0||Rt>=oe.mw||jt>=oe.mh||G[yt]||oe.cells[yt]!==0||(G[yt]=1,ve.push(yt))})}Fe>=3&&Z.push({x:Me/Fe,z:Oe/Fe,y:J(oe,Me/Fe,Oe/Fe,et)-.4,size:Fe})}return Z}function ie(me,oe){!me||!oe||(t.setSize(me,oe,!1),k={w:me,h:oe},s.aspect=me/oe,s.updateProjectionMatrix(),y.aspect=me/oe,y.updateProjectionMatrix(),o&&(o.setSize(me,oe),c.resolution.set(me/2,oe/2)))}function se(me,oe,G){var Z=me.p,fe=new Set;me.ents.forEach(function(ve){if(ve.kind==="torch"){h.get(ve).update(oe),Math.random()<G*6&&l.ember(ve.x,ve.y+1,ve.z),fe.add(ve);return}if(ve.kind==="proj"){var Me=p.get(ve);Me||(Me=new Ue(new Ar(.09,10,8),new Cn({color:ve.green?10484991:16756800})),a.add(Me),p.set(ve,Me)),Me.position.set(ve.x,ve.y,ve.z),l.trail(ve.x,ve.y,ve.z,ve.green),fe.add(ve);return}if(ve.kind!=="part"){var Oe=h.get(ve);if(!Oe){if(ve.kind==="pickup")Oe=_m(ve,x);else if(ve.mob)Oe=vm(ve,x);else return;a.add(Oe.obj),h.set(ve,Oe)}ve.kind==="pickup"?Oe.update(oe):Oe.update(oe,G,Math.atan2(Z.z-ve.z,Z.x-ve.x)),fe.add(ve)}}),h.forEach(function(ve,Me){fe.has(Me)||(a.remove(ve.obj),h.delete(Me))}),p.forEach(function(ve,Me){fe.has(Me)||(a.remove(ve),p.delete(Me))})}function re(me){var oe=U.p;f.forEach(function(G,Z){var fe=G.userData.e,ve=Math.sin(me*13+Z*7)*.12+Math.sin(me*31+Z*3)*.08+(Math.random()-.5)*.08,Me=(fe.x-oe.x)*(fe.x-oe.x)+(fe.z-oe.z)*(fe.z-oe.z)>400;G.intensity=Me?0:2.2*(1+ve)})}function Re(me,oe,G){var Z=me.p,fe=Math.hypot(me.input.vx||0,me.input.vz||0);Z.onGround&&fe>.5&&(E+=G*fe*2.6);var ve=Z.onGround?Math.min(1,fe/4):0,Me=Math.atan2(Math.sin(Z.ang-M),Math.cos(Z.ang-M)),Oe=Z.pitch-P;M=Z.ang,P=Z.pitch,A.x+=(-Me*.6-A.x)*Math.min(1,G*8),A.y+=(Oe*.6-A.y)*Math.min(1,G*8),Object.keys(b).forEach(function(Rt){b[Rt].visible=Rt===Z.weapon&&!Z.dead});var et=b[Z.weapon];if(et){var Fe=Z.fireT,nt=Fe<.12?Math.sin(Fe/.12*Math.PI):0,ft=Z.lowerT>0?1-Z.lowerT/.15:Z.raiseT>0?Z.raiseT/.15:0;if(R.position.set(Math.sin(E)*.012*ve+A.x*.1,-Math.abs(Math.cos(E))*.01*ve+A.y*.1-ft*.25-Z.landT*.1,0),R.rotation.set(0,0,0),Z.weapon==="fist")et.position.z=et.userData.baseZ-(Fe<.2?Math.sin(Fe/.2*Math.PI)*.18:0),et.rotation.x=Fe<.2?-Math.sin(Fe/.2*Math.PI)*.3:0;else{et.rotation.x=nt*(Z.weapon==="shotgun"?.35:.2),et.position.z=et.userData.baseZ+nt*.05;var it=Fe>.3&&Fe<.7?Math.sin((Fe-.3)/.4*Math.PI):0;S(et.userData.pump,it*.09),S(et.userData.slide,nt*.04),et.userData.barrels&&(et.userData.barrels.rotation.z+=G*(Z.fireT<.3?30:0))}var Mt=Fe<.06&&Z.weapon!=="fist"&&!Z.dead;_.visible=Mt,_.position.set(et.position.x,et.position.y+(Z.weapon==="shotgun"?0:.02),et.position.z-(Z.weapon==="shotgun"?.7:.18)),_.scale.setScalar((Z.weapon==="shotgun"?.06:.035)*(.8+Math.random()*.4)),v.intensity=Mt?3:0,v.position.copy(_.position)}}function Ne(me,oe,G,Z){if(!Z)return Qe(me,oe,G);var fe=Math.random,ve=12345;Math.random=function(){return ve=ve*1103515245+12345&2147483647,ve/2147483647};try{return Qe(me,oe,0)}finally{Math.random=fe}}function Qe(me,oe,G){t.info.reset(),me!==U&&Y(me);var Z=me.p;u.update(),se(me,oe,G),re(oe),me.events.forEach(function(ve){ve.t==="fx"&&l.event(ve)}),l.update(G,k.h*.9);var fe=me.shake*.004;s.position.set(Z.x+(Math.random()-.5)*fe,Z.y+Z.eyeH+(Math.random()-.5)*fe,Z.z+(Math.random()-.5)*fe),s.rotation.y=-Math.PI/2-Z.ang,s.rotation.x=Z.pitch,s.rotation.z=Z.dead?Math.min(.5,Z.deadT*.6):0,o.render(G),t.autoClear=!1,t.clearDepth(),Re(me,oe,G),t.render(g,y),t.autoClear=!0}return{setAssets:function(me){x=me,D(),U=null},assets:function(){return x},debugModels:function(){var me=[];return h.forEach(function(oe){oe.debug&&me.push(oe.debug())}),me},render:Ne,resize:ie,renderer:t,camera:s,info:function(){return t.info}}}var At=320,OM=200,Nt=168,Cm=32,Cf=Nt/2,_a="#e03828",cu="#8a8478",If="#401008";function FM(i,e){var t=String(i).split(" "),n=[],r="";return t.forEach(function(s){var a=r?r+" "+s:s;a.length>e&&r?(n.push(r),r=s):r=a}),r&&n.push(r),n}function ps(i){i=i|0;var e=i/60|0,t=i%60;return e+":"+(t<10?"0":"")+t}function Im(i,e,t){function n(m,x){return m.time*(x||3)%1<.55}function r(m,x,R){return R?n(m,3)?"#ffffff":_a:x?"#ff9a28":_a}function s(m){return m.dead?Le.default.faces.dead:m.grinT>0?Le.default.faces.grin:m.painT>.25?Le.default.faces.pain:m.hp>=80?Le.default.faces.ok:m.hp>=55?Le.default.faces.hurt1:m.hp>=30?Le.default.faces.hurt2:Le.default.faces.hurt3}function a(m){var x=m.p;i.fillStyle="#3a352e",i.fillRect(0,Nt,At,Cm),i.fillStyle="#14110d",i.fillRect(0,Nt,At,2),i.fillStyle="#57514a",i.fillRect(0,Nt+2,At,1),i.fillStyle="#24211c",[46,116,142,178,230,250].forEach(function(D){i.fillRect(D,Nt+4,1,Cm-8)});var R=Ta[x.weapon],b=R.ammo?x.ammo[R.ammo]:-1,I=R.ammo&&b<=(R.ammo==="shells"?4:10);Le.default.drawText(i,"AMMO",8,Nt+5,{color:b===0?_a:cu}),Le.default.drawText(i,R.ammo?String(b):"--",40,Nt+12,{scale:3,color:r(m,I,b===0),shadow:If,right:!0});var L=x.hp<=25;Le.default.drawText(i,"HEALTH",54,Nt+5,{color:L?_a:cu}),Le.default.drawText(i,x.hp+"%",108,Nt+12,{scale:3,color:r(m,x.hp<=50,L&&!x.dead),shadow:If,right:!0}),Le.default.drawText(i,"ARMS",129,Nt+5,{color:cu,center:!0}),Yi.forEach(function(D,S){var _=119+S*8,E=x.weapons[D],A=(x.nextWeapon||x.weapon)===D,M=A?"#ffd23e":E?e.hasAmmo(x,D)?"#c8c0b0":"#6a5a4a":"#2a2620";Le.default.drawText(i,String(S+1),_,Nt+13,{scale:2,color:M}),A&&(i.fillStyle="#ffd23e",i.fillRect(_,Nt+25,6,1))}),i.drawImage(s(x).canvas,148,Nt+3),Le.default.drawText(i,"ARMOR",184,Nt+5,{color:cu}),Le.default.drawText(i,x.armor+"%",226,Nt+12,{scale:3,color:x.armor>0?_a:"#6a4a40",shadow:If,right:!0}),[["red","keyRed",5],["blue","keyBlue",18]].forEach(function(D){!x.keys[D[0]]&&!m.info.keys[D[0]]||(i.globalAlpha=x.keys[D[0]]?1:.18,i.drawImage(Le.default.things[D[1]].canvas,236,Nt+D[2]),i.globalAlpha=1)}),Le.default.drawText(i,"BULL "+x.ammo.bullets+"/200",254,Nt+8,{color:R.ammo==="bullets"?"#ffd23e":"#c8c0b0"}),Le.default.drawText(i,"SHEL "+x.ammo.shells+"/50",254,Nt+19,{color:x.weapons.shotgun?R.ammo==="shells"?"#ffd23e":"#c8c0b0":"#6a655c"})}function o(m){var x=At/2,R=Cf;if(t.crosshair){var b=e.aimTarget();i.fillStyle=b?b.barrel?"#ff9a28":"#ff4a2a":"rgba(232,224,200,0.8)",i.fillRect(x-5,R,3,1),i.fillRect(x+3,R,3,1),i.fillRect(x,R-5,1,3),i.fillRect(x,R+3,1,3)}var I=m.killT>0?"#ff3a1a":m.blockT>0?"#9aa4a8":m.hitT>0?"#ffffff":null;if(I){i.fillStyle=I;for(var L=m.killT>0?4:3,D=L;D<L+3;D++)i.fillRect(x-D,R-D,1,1),i.fillRect(x+D,R-D,1,1),i.fillRect(x-D,R+D,1,1),i.fillRect(x+D,R+D,1,1)}}function c(m){var x=m.p,R=At/2,b=Cf,I=34;m.hurtDirs.forEach(function(L){var D=L.ang-x.ang,S=Math.sin(D),_=-Math.cos(D),E=R+S*I,A=b+_*I;i.fillStyle="rgba(255,40,16,"+Math.min(.9,L.t).toFixed(3)+")",i.beginPath(),i.moveTo(E+S*9,A+_*9),i.lineTo(E-_*7,A+S*7),i.lineTo(E+_*7,A-S*7),i.closePath(),i.fill()})}function u(){var m=e.usePrompt();if(m){var x=Cf+14;if(m.verb){var R=Le.default.textWidth(m.verb,1),b=13+R,I=(At-b)/2|0;i.fillStyle="rgba(0,0,0,0.55)",i.fillRect(I-3,x-3,b+6,13),i.fillStyle="#e8e0c8",i.fillRect(I,x-1,9,9),i.fillStyle="#14110d",i.fillRect(I+1,x,7,7),Le.default.drawText(i,"E",I+3,x+1,{color:"#ffd23e"}),Le.default.drawText(i,m.verb,I+13,x+1,{color:m.color,shadow:!0})}else{var L=Le.default.textWidth(m.text,1);i.fillStyle="rgba(0,0,0,0.55)",i.fillRect((At-L)/2-4,x-3,L+8,13),Le.default.drawText(i,m.text,At/2,x+1,{color:m.color,shadow:!0,center:!0})}}}function l(m,x){if(!(!t.goalMarker||!x)){var R=e.goalTarget();if(R){var b=m.p,I=Math.hypot(R.x-b.x,R.z-b.z);if(!(I<1.6)){var L={x:R.x,y:R.y,z:R.z},D=HM(x,L),S=m.time*2%1<.7?"#ffd23e":"#c89a20";if(i.fillStyle=S,i.beginPath(),D.inFront&&D.x>8&&D.x<At-8&&D.y>8&&D.y<Nt-8){var _=Math.round(D.x),E=Math.round(D.y)-8;i.moveTo(_,E-4),i.lineTo(_+4,E),i.lineTo(_,E+4),i.lineTo(_-4,E),i.closePath(),i.fill(),Le.default.drawText(i,String(Math.round(I*2))+"M",_,E+7,{color:S,shadow:!0,center:!0})}else{var A=Math.atan2(R.z-b.z,R.x-b.x)-b.ang;A=Math.atan2(Math.sin(A),Math.cos(A));var M=A>0,P=M?At-6:6,U=40;i.moveTo(P+(M?4:-4),U),i.lineTo(P-(M?3:-3),U-5),i.lineTo(P-(M?3:-3),U+5),i.closePath(),i.fill(),Le.default.drawText(i,"GOAL",M?At-12:12,U-2,{color:S,shadow:!0,right:M})}}}}}function h(m){var x=m.p;if(!(x.dead||x.hp>25))for(var R=.18+.14*Math.sin(m.time*5),b=0;b<6;b++)i.fillStyle="rgba(200,0,0,"+(R*(1-b/6)).toFixed(3)+")",i.fillRect(b*2,0,2,Nt),i.fillRect(At-b*2-2,0,2,Nt),i.fillRect(0,b*2,At,2),i.fillRect(0,Nt-b*2-2,At,2)}var f={imp:["AN IMP BURNED YOU DOWN.","TIP: STRAFE WITH A AND D TO SIDESTEP FIREBALLS."],gnasher:["A GNASHER CHEWED YOU UP.","TIP: BACK AWAY WHILE YOU SHOOT, OR JUMP UP WHERE IT CAN'T FOLLOW."],knight:["THE EMBER KNIGHT CRUSHED YOU.","TIP: KEEP YOUR DISTANCE AND BRING SHOTGUN SHELLS."],riley:["RILEY OUTPLAYED YOU.","TIP: WHEN HER VISOR FLASHES WHITE, SHE IS ABOUT TO SHOOT. MOVE!"],barrel:["A BARREL BLEW UP IN YOUR FACE.","TIP: SHOOT BARRELS FROM FAR AWAY, WHEN DEMONS ARE NEAR THEM."]};function p(m){var x=m.p;if(!(!x.dead||x.deadT<1)){var R=f[m.killer]||["YOU WERE OVERWHELMED.","TIP: FIGHT FROM HIGH GROUND SO DEMONS COME TO YOU ONE AT A TIME."];i.fillStyle="rgba(0,0,0,0.5)",i.fillRect(0,44,At,72),Le.default.drawText(i,"YOU DIED",At/2,50,{scale:3,color:_a,shadow:!0,center:!0}),Le.default.drawText(i,R[0],At/2,72,{color:"#e8e0c8",shadow:!0,center:!0}),Le.default.drawText(i,R[1],At/2,84,{color:"#8fe0a0",shadow:!0,center:!0}),x.deadT>1.2&&m.time%1<.7&&Le.default.drawText(i,"CLICK OR PRESS ENTER TO TRY AGAIN",At/2,100,{color:"#f0d848",shadow:!0,center:!0})}}function g(m){var x=4;m.msgs.forEach(function(b){var I=FM(b.text,78);b.t<.4&&(i.globalAlpha=Math.max(0,b.t/.4)),I.forEach(function(L){Le.default.drawText(i,L,4,x,{color:b.color||"#f0d848",shadow:!0}),x+=7}),i.globalAlpha=1,x+=1});var R=m.notice;R&&(i.globalAlpha=Math.min(1,R.t/.4),Le.default.drawText(i,R.text,At/2,50,{scale:2,color:R.color,shadow:!0,center:!0}),i.globalAlpha=1)}function y(m){var x=m.boss;if(!(!x||x.state==="idle"||x.state==="dead")){var R=140,b=(At-R)/2,I=Nt-12,L=x.shieldT>0;Le.default.drawText(i,L?"RILEY - SHIELDED":"RILEY",At/2,I-8,{color:L?"#ffd23e":"#6fe0ec",shadow:!0,center:!0}),i.fillStyle="#06141c",i.fillRect(b-1,I-1,R+2,6),i.fillStyle=L?"#ffd23e":"#3fd8c8",i.fillRect(b,I,Math.max(0,x.hp/x.maxHp)*R,4),i.fillStyle="#06141c",i.fillRect(b+R*.33,I,1,4),i.fillRect(b+R*.66,I,1,4)}}function v(m){i.fillStyle="rgba(0,0,0,0.8)",i.fillRect(0,0,At,Nt);for(var x=22,R=Nt-14,b=Math.min((At-16)/m.mw,(R-x)/m.mh),I=(At-m.mw*b)/2,L=x+(R-x-m.mh*b)/2,D=m.time*2%1<.6,S=0;S<m.mh;S++)for(var _=0;_<m.mw;_++){var E=S*m.mw+_,A=m.W.cells[E];if(m.seen[E]){var M=null;if(A===0){var P=m.W.floor[E];M="rgb("+(40+P*50|0)+","+(34+P*40|0)+","+(28+P*30|0)+")"}else A===6?M="#c8a030":A===11?M=m.doors[_+","+S].found?"#c8a030":"#6a655c":A===7?M="#ff3a2a":A===8?M="#4a7aff":A===9||A===10?M=D||A===10?"#58e068":"#1e5a26":M="#8a8478";i.fillStyle=M,i.fillRect(I+_*b,L+S*b,Math.max(1,b-.4),Math.max(1,b-.4))}}var U=e.goalTarget();if(U&&D){var k=I+U.x*b,Y=L+U.z*b;i.fillStyle="#ffd23e",i.fillRect(k-3,Y-3,7,1),i.fillRect(k-3,Y+3,7,1),i.fillRect(k-3,Y-3,1,7),i.fillRect(k+3,Y-3,1,7)}var J=m.p,ne=I+J.x*b,ie=L+J.z*b,se=Math.cos(J.ang),re=Math.sin(J.ang);i.fillStyle="#f8f4e0",i.beginPath(),i.moveTo(ne+se*5,ie+re*5),i.lineTo(ne-se*3-re*3,ie-re*3+se*3),i.lineTo(ne-se*3+re*3,ie-re*3-se*3),i.closePath(),i.fill(),Le.default.drawText(i,m.L.name,6,4,{color:"#ff9a28",shadow:!0}),Le.default.drawText(i,"TAB: CLOSE",At-6,4,{color:"#8a8478",right:!0}),Le.default.drawText(i,"GOAL: "+e.objective(),6,12,{color:"#f0d848",shadow:!0});var Re=m.stats;Le.default.drawText(i,"KILLS "+Re.kills+"/"+Re.totalKills+"  ITEMS "+Re.items+"/"+Re.totalItems+"  SECRETS "+Re.secrets+"/"+Re.totalSecrets+"  TIME "+ps(m.time),At-6,12,{color:"#c8c0b0",right:!0}),Le.default.drawText(i,"BRIGHTER FLOOR = HIGHER GROUND",6,Nt-9,{color:"#a8a090"})}return{draw:function(m,x){i.clearRect(0,0,At,OM);var R=m.p;R.dmgFlash>0&&(i.fillStyle="rgba(255,20,10,"+(R.dmgFlash*.8).toFixed(3)+")",i.fillRect(0,0,At,Nt)),R.bonusFlash>0&&(i.fillStyle="rgba(255,220,80,"+(R.bonusFlash*.7).toFixed(3)+")",i.fillRect(0,0,At,Nt)),h(m),x.map?v(m):!R.dead&&!x.menu&&(c(m),l(m,x.camera),o(m),u()),x.map||y(m),g(m),p(m),a(m)}}}function HM(i,e){var t=i.matrixWorldInverse.elements,n=i.projectionMatrix.elements,r=e.x,s=e.y,a=e.z,o=t[0]*r+t[4]*s+t[8]*a+t[12],c=t[1]*r+t[5]*s+t[9]*a+t[13],u=t[2]*r+t[6]*s+t[10]*a+t[14],l=n[0]*o+n[4]*c+n[8]*u+n[12],h=n[1]*o+n[5]*c+n[9]*u+n[13],f=n[3]*o+n[7]*c+n[11]*u+n[15];return f<=.01?{inFront:!1}:{inFront:!0,x:(l/f*.5+.5)*At,y:(1-(h/f*.5+.5))*Nt}}var Ri=Pf.default.SETTINGS,_t=Pf.default.MENU,Ht=Ri.v;Ht.invertY===void 0&&(Ht.invertY=!1);Ht.fov===void 0&&(Ht.fov=78);var xt=320,Wn=200,BM=168,Um=document.getElementById("view"),hi=document.getElementById("hud");hi.width=xt;hi.height=Wn;var Je=hi.getContext("2d");Je.imageSmoothingEnabled=!1;var fu=/debug/.test(location.search),st=Kf({levels:kr,rng:jf((Date.now()&4294967295)>>>0),storage:(function(){try{return window.localStorage}catch{return null}})(),settings:Ht,saveSettings:function(){Ri.save()},onProgress:function(i,e){Ri.unlock(Math.min(i+1,kr.length-1)),kM=Ri.record?Ri.record(i,e):null}}),kM=null,Wi=Rm(Um,{preserve:fu}),zM=Im(Je,st,Ht),ti="title",wi=0,qi=!1,xa=!1,Ci=!1,Oo=!1;function Fo(){return Br[Ht.difficulty]||Br[1]}function Om(){Mn.default.setVolume(Ht.volume/10),Wi.camera.fov=Ht.fov,Wi.camera.updateProjectionMatrix()}function Fm(){var i=window.innerWidth,e=window.innerHeight,t=Math.min(i,e*1.6),n=t/1.6,r=(i-t)/2,s=(e-n)/2;hi.style.cssText="left:"+r+"px;top:"+s+"px;width:"+t+"px;height:"+n+"px";var a=Math.round(n*BM/Wn);Um.style.cssText="left:"+r+"px;top:"+s+"px;width:"+t+"px;height:"+a+"px",Wi.resize(Math.round(t),a)}window.addEventListener("resize",Fm);Fm();var du=st.keys,ko=!1;function Hm(){for(var i in du)du[i]=!1;ko=!1,st.setFire(!1)}document.addEventListener("keydown",function(i){if((["Tab","Space"].indexOf(i.code)>=0||i.code.slice(0,5)==="Arrow")&&i.preventDefault(),Mn.default.init(),!!mu){if(_t.isOpen()){Mn.default.startMusic(),_t.key(i.code);return}if(!i.repeat){if(i.code==="Enter"||i.code==="NumpadEnter"){pu();return}if(ti!=="game"){i.code==="Space"&&pu();return}if(i.code==="Escape"&&qi&&!Ci){zm();return}du[i.code]=!0;var e=st.state();if(i.code==="Tab"&&(xa=!xa,e.usedMap=!0),i.code==="KeyM"){var t=Mn.default.toggleMusic();e.msgs.push({text:"MUSIC "+(t?"ON":"OFF"),t:2})}(i.code==="ControlLeft"||i.code==="ControlRight")&&(ko=!0,st.setFire(!0)),i.code==="Digit1"&&st.switchWeapon("fist"),i.code==="Digit2"&&st.switchWeapon("pistol"),i.code==="Digit3"&&st.switchWeapon("shotgun"),i.code==="KeyQ"&&st.quickSwitch()}}});document.addEventListener("keyup",function(i){du[i.code]=!1,(i.code==="ControlLeft"||i.code==="ControlRight")&&(ko=!1,st.setFire(!1))});window.addEventListener("blur",Hm);document.addEventListener("pointerlockchange",function(){Ci=document.pointerLockElement===hi,Hm(),Ci?(Oo=!1,ti==="game"&&_t.close(),!qi&&ti==="game"&&VM()):ti==="game"&&qi&&zm()});document.addEventListener("pointerlockerror",function(){Oo=!0});function Ho(){try{var i=hi.requestPointerLock({unadjustedMovement:!0});i&&i.catch&&i.catch(function(){try{hi.requestPointerLock()}catch{Oo=!0}})}catch{Oo=!0}}function GM(){try{document.exitPointerLock()}catch{}}function Bm(i){var e=hi.getBoundingClientRect();return{x:(i.clientX-e.left)/e.width*xt,y:(i.clientY-e.top)/e.height*Wn}}document.addEventListener("mousemove",function(i){var e=st.state();if(Ci&&ti==="game"&&e&&!e.p.dead){var t=44e-5*Ht.sens;e.p.ang+=i.movementX*t,e.p.pitch-=i.movementY*t*(Ht.invertY?-1:1),e.p.pitch=Math.max(-1.3,Math.min(1.3,e.p.pitch));return}if(_t.isOpen()){var n=Bm(i);hi.style.cursor=_t.pointer(n.x,n.y)?"pointer":"default"}});hi.addEventListener("mousedown",function(i){if(Mn.default.init(),Mn.default.startMusic(),_t.isOpen()){var e=Bm(i);i.button===0&&_t.click(e.x,e.y);return}if(ti==="game"){var t=st.state();if(!Ci){_t.close(),Ho();return}if(t.p.dead){pu();return}i.button===0&&(ko=!0,st.setFire(!0)),i.button===2&&(st.keys.Space=!0);return}pu()});document.addEventListener("mouseup",function(i){i.button===0&&(ko=!1,st.setFire(!1)),i.button===2&&(st.keys.Space=!1)});hi.addEventListener("contextmenu",function(i){i.preventDefault()});hi.addEventListener("wheel",function(i){ti==="game"&&Ci&&(i.preventDefault(),i.deltaY&&st.cycleWeapon(i.deltaY>0?1:-1))},{passive:!1});var uu=!1;function VM(){qi=!0}function km(i){st.startLevel(i,!1),qi=!1,xa=!1,ti="game",_t.close(),Ho()}function pu(){Mn.default.init(),Mn.default.startMusic();var i=st.mode();if(i==="inter"){if(!uu&&wi<1.3){uu=!0;return}uu=!1,st.onEnter(),st.onEnter(),st.mode()==="game"&&(qi=Ci)}else if(i==="victory")wi>1&&Lf();else if(i==="game"){var e=st.state();e.p.dead?e.p.deadT>1.2&&(st.retryLevel(),qi=Ci):Ci||(_t.close(),Ho())}}function Lf(){st.setMode("title"),ti="title",_t.open(Nf()),GM()}function zm(){xa=!1,_t.open(XM()),Mn.default.play("menu")}function Bo(i,e,t){for(var n=0;n<xt;n+=2){var r=Math.sin(n*.07+e*3+t)+Math.sin(n*.13-e*2.2),s=6+r*4;Je.fillStyle=r>.7?"#ffd23e":r>-.3?"#ff7a18":"#a83010",Je.fillRect(n,i-s,2,s+4)}}function Gm(i,e){Je.fillStyle="rgba(8,6,4,0.55)",Je.fillRect(0,0,xt,Wn),Bo(Wn-6,e,0),Bo(Wn-2,e*1.3,2),Le.default.drawText(Je,"FIREBIRD",xt/2,10,{scale:4,color:"#e03828",shadow:"#401008",center:!0}),Le.default.drawText(Je,"FIREBIRD",xt/2-1,9,{scale:4,color:"#ff9a28",center:!0}),Le.default.drawText(Je,"3D",xt/2,34,{scale:5,color:"#ffd23e",shadow:"#803008",center:!0}),Le.default.drawText(Je,"EPISODE ONE: KNEE-DEEP IN THE ASHES",xt/2,64,{color:"#c8c0b0",center:!0}),Le.default.drawText(Je,"A NIX GAMES PRODUCTION BY PHOENIX",xt/2,72,{color:"#8a8478",center:!0})}function ya(i,e){Je.fillStyle=ti==="game"?"rgba(4,3,2,0.8)":"rgba(8,6,4,0.7)",Je.fillRect(0,0,xt,Wn),Je.fillStyle="#5e2a10",Je.fillRect(40,33,xt-80,1)}function Lo(i){return i?"ON":"OFF"}function Nf(){var i=Ri.progress;return{drawBg:Gm,scale:2,top:86,gap:13,descY:156,footerY:172,items:function(){var e=[];return i.unlocked>0&&e.push({label:"CONTINUE",action:function(){km(i.unlocked)},desc:function(){return"START "+kr[i.unlocked].name+" ON "+Fo().name+"."}}),e.push({label:"NEW GAME",action:function(){_t.push(Vm(0))},desc:"START EPISODE ONE FROM THE BEGINNING."},{label:"LEVEL SELECT",action:function(){_t.push(WM())},desc:"REPLAY ANY LEVEL YOU HAVE REACHED."},{label:"OPTIONS",action:function(){_t.push(Wm())},desc:"MOUSE, VOLUME, FIELD OF VIEW, CROSSHAIR, TIPS AND DIFFICULTY."},{label:"CONTROLS",action:function(){_t.push(qm())},desc:"EVERY KEY, ON ONE PAGE."}),e}}}function Vm(i){var e=Br.map(function(t,n){return{label:t.name,desc:t.desc,action:function(){Ht.difficulty=n,Ri.save(),km(i)}}});return e.push({label:"BACK",action:function(){_t.back()}}),{title:"DIFFICULTY",drawBg:ya,scale:2,top:54,gap:18,descY:146,sel:Ht.difficulty,items:e}}function WM(){var i=kr.map(function(e,t){var n=t<=Ri.progress.unlocked;return{label:n?e.name:e.name.split(":")[0]+": ???",disabled:function(){return!n},desc:"PAR "+ps(e.par)+".  STARTS WITH A PISTOL.",action:function(){_t.push(Vm(t))}}});return i.push({label:"BACK",action:function(){_t.back()}}),{title:"LEVEL SELECT",drawBg:ya,top:46,gap:14,descY:142,items:i}}function Wm(){function i(t,n,r,s){return function(a){var o=Ht[t]+a*(s||1);Ht[t]=o>r?n:o<n?r:o,Ri.save(),Om()}}function e(t){return function(){Ht[t]=!Ht[t],Ri.save()}}return{title:"OPTIONS",drawBg:ya,top:40,gap:11,descY:158,items:[{label:"MOUSE SPEED",slider:[0,10,function(){return Ht.sens}],adjust:i("sens",1,10),desc:"HOW FAST THE VIEW TURNS. LEFT AND RIGHT TO CHANGE."},{label:"INVERT MOUSE Y",value:function(){return Lo(Ht.invertY)},adjust:e("invertY"),desc:"PUSH THE MOUSE FORWARD TO LOOK DOWN INSTEAD OF UP."},{label:"FIELD OF VIEW",value:function(){return Ht.fov+" DEG"},adjust:i("fov",60,110,5),desc:"HOW WIDE YOU SEE. WIDER SHOWS MORE, NARROWER ZOOMS IN."},{label:"SOUND VOLUME",slider:[0,10,function(){return Ht.volume}],adjust:i("volume",0,10),desc:"LOUDNESS OF EVERYTHING."},{label:"MUSIC",value:function(){return Lo(Mn.default.isMusicOn())},adjust:function(){Mn.default.setMusic(!Mn.default.isMusicOn())},desc:"PRESS M DURING PLAY TO TOGGLE IT TOO."},{label:"CROSSHAIR",value:function(){return Lo(Ht.crosshair)},adjust:e("crosshair"),desc:"A SMALL AIMING MARK. TURNS RED OVER A DEMON."},{label:"GOAL MARKER",value:function(){return Lo(Ht.goalMarker)},adjust:e("goalMarker"),desc:"POINTS AT YOUR GOAL ONCE YOU HAVE SEEN IT."},{label:"TIPS",value:function(){return Lo(Ht.tips)},adjust:function(){Ht.tips=!Ht.tips,Ht.tips&&(Ht.seenTips={}),Ri.save()},desc:"SHORT HINTS THE FIRST TIME SOMETHING NEW HAPPENS."},{label:"DIFFICULTY",value:function(){return Fo().name},adjust:i("difficulty",0,2),desc:function(){return Fo().desc}},{label:"BACK",action:function(){_t.back()}}]}}var qM=[["MOVE","W A S D   OR   ARROW KEYS"],["LOOK AND AIM","MOUSE (UP AND DOWN TOO)"],["FIRE","LEFT CLICK   OR   CTRL"],["JUMP","SPACE   OR   RIGHT CLICK"],["CROUCH","C"],["USE / OPEN","E"],["RUN","HOLD SHIFT"],["WEAPONS","1 2 3   OR   MOUSE WHEEL"],["LAST WEAPON","Q"],["MAP","TAB"],["PAUSE","ESC"]];function qm(){return{title:"CONTROLS",drawBg:ya,top:170,gap:12,items:[{label:"BACK",action:function(){_t.back()}}],drawExtra:function(){qM.forEach(function(i,e){var t=40+e*11;Le.default.drawText(Je,i[0],140,t,{color:"#c8c0b0",right:!0}),Le.default.drawText(Je,i[1],152,t,{color:"#ffd23e"})})}}}function Pm(i,e,t){return{title:i,drawBg:ya,scale:2,top:86,gap:18,sel:1,drawExtra:function(){Le.default.drawText(Je,e,xt/2,56,{color:"#a8a090",center:!0})},items:[{label:"YES",action:t},{label:"NO",action:function(){_t.back()}}]}}function XM(){return{title:"PAUSED",drawBg:ya,scale:2,top:64,gap:14,descY:144,footerY:176,footer:"ARROWS OR MOUSE: CHOOSE   ENTER OR CLICK: SELECT",items:[{label:function(){return st.state().p.dead?"TRY AGAIN":"RESUME"},action:function(){st.state().p.dead&&st.retryLevel(),_t.close(),Ho()},desc:"BACK TO THE FIGHT."},{label:"RESTART LEVEL",desc:"START THIS LEVEL OVER WITH THE GEAR YOU BROUGHT IN.",action:function(){_t.push(Pm("RESTART?","YOU WILL LOSE PROGRESS IN THIS LEVEL.",function(){st.retryLevel(),_t.close(),Ho()}))}},{label:"OPTIONS",action:function(){_t.push(Wm())},desc:"MOUSE, VOLUME, FIELD OF VIEW AND MORE."},{label:"CONTROLS",action:function(){_t.push(qm())},desc:"EVERY KEY, ON ONE PAGE."},{label:"QUIT TO TITLE",desc:"YOUR UNLOCKED LEVELS ARE SAVED.",action:function(){_t.push(Pm("QUIT?","PROGRESS IN THIS LEVEL WILL BE LOST.",Lf))}}],drawExtra:function(){var i=st.state(),e=i.stats;Le.default.drawText(Je,i.L.name+"   "+Fo().name,xt/2,38,{color:"#c8c0b0",center:!0}),Le.default.drawText(Je,"GOAL: "+st.objective(),xt/2,48,{color:"#f0d848",center:!0}),Le.default.drawText(Je,"KILLS "+e.kills+"/"+e.totalKills+"   ITEMS "+e.items+"/"+e.totalItems+"   SECRETS "+e.secrets+"/"+e.totalSecrets+"   TIME "+ps(i.time),xt/2,160,{color:"#8a8478",center:!0})}}}function YM(i){var e=st.state(),t=e.L.name.split(": ");Je.fillStyle="rgba(4,3,2,0.6)",Je.fillRect(0,0,xt,Wn),Le.default.drawText(Je,t[0],xt/2,22,{color:"#8a8478",center:!0}),Le.default.drawText(Je,t[1]||e.L.name,xt/2,32,{scale:3,color:"#ff9a28",shadow:"#401008",center:!0}),Le.default.drawText(Je,"GOAL",xt/2,60,{color:"#8a8478",center:!0}),Le.default.drawText(Je,st.objective(),xt/2,69,{scale:2,color:"#f0d848",shadow:!0,center:!0}),Le.default.drawText(Je,"DIFFICULTY: "+Fo().name+"     PAR "+ps(e.L.par),xt/2,88,{color:"#a8a090",center:!0}),i%1<.7&&Le.default.drawText(Je,"CLICK TO BEGIN",xt/2,106,{scale:2,color:"#ffffff",shadow:!0,center:!0}),Oo&&Le.default.drawText(Je,"THE GAME NEEDS THE MOUSE. CLICK THE SCREEN AGAIN.",xt/2,124,{color:"#ff9a28",center:!0}),Le.default.drawText(Je,"WASD MOVE  MOUSE LOOK  CLICK FIRE  SPACE JUMP  E USE  TAB MAP  ESC PAUSE",xt/2,140,{color:"#8a8478",center:!0})}function KM(i){var e=st.interStats();Je.fillStyle="rgba(10,8,6,0.88)",Je.fillRect(0,0,xt,Wn),Bo(Wn-6,i,1),Le.default.drawText(Je,e.name,xt/2,22,{scale:2,color:"#ff9a28",shadow:!0,center:!0}),Le.default.drawText(Je,"FINISHED!",xt/2,42,{scale:2,color:"#e8e0c8",shadow:!0,center:!0});var t=uu?1:Math.min(1,i/1.2);function n(s,a){return a?Math.round(s/a*100*t):100}if([["KILLS",e.kills,e.totalKills,70],["ITEMS",e.items,e.totalItems,90],["SECRETS",e.secrets,e.totalSecrets,110]].forEach(function(s){Le.default.drawText(Je,s[0],90,s[3],{scale:2,color:"#c8c0b0"});var a=n(s[1],s[2]);Le.default.drawText(Je,a+"%",240,s[3],{scale:2,color:a>=100?"#ffd23e":"#e03828",right:!0})}),Le.default.drawText(Je,"TIME "+ps(e.time),90,132,{scale:2,color:e.time<=e.par&&t>=1?"#ffd23e":"#c8c0b0"}),Le.default.drawText(Je,"PAR "+ps(e.par),240,132,{scale:2,color:"#c8c0b0",right:!0}),t>=1&&i%1<.7){var r=st.levelIndex();Le.default.drawText(Je,r+1<kr.length?"CLICK OR PRESS ENTER FOR "+kr[r+1].name:"CLICK OR PRESS ENTER",xt/2,166,{color:"#f0d848",shadow:!0,center:!0})}}function ZM(i){Je.fillStyle="rgba(8,6,4,0.9)",Je.fillRect(0,0,xt,Wn),Bo(Wn-8,i,0),Bo(Wn-4,i*1.3,2),Le.default.drawText(Je,"YOU WIN!",xt/2,30,{scale:4,color:"#ffd23e",shadow:"#803008",center:!0}),["THE DEMON THRONE LIES IN ASHES,","AND RILEY TAPS OUT WITH A GRIN:",`"SAME TIME TOMORROW? I'LL BE READY."`,"","THE FIREBIRD CANNOT BE KILLED.","IT ONLY BURNS BRIGHTER.","","THANKS FOR PLAYING, WARRIOR."].forEach(function(e,t){Le.default.drawText(Je,e,xt/2,74+t*10,{color:"#e8e0c8",center:!0})}),i>1&&i%1<.7&&Le.default.drawText(Je,"CLICK OR PRESS ENTER FOR THE TITLE SCREEN",xt/2,170,{color:"#f0d848",shadow:!0,center:!0})}function JM(i){var e=i.p;i.events.forEach(function(t){if(t.t==="sound"){if(t.local){Mn.default.play(t.name);return}var n=t.x-e.x,r=t.z-e.z,s=Math.sqrt(n*n+r*r),a=Math.sin(Math.atan2(r,n)-e.ang)*.7;Mn.default.play(t.name,s,a)}})}var No=1/60,Do=0,Lm=performance.now(),Nm="",hu=[],Uo=!1,jM=10;st.startLevel(0,!1);var Dm=st.state();function Xm(i){var e=Math.min(.1,(i-Lm)/1e3);Lm=i;var t=st.mode(),n=ti==="title"?"title":t;n!==Nm&&(wi=0,Nm=n),wi+=e,hu.push(e),hu.length>240&&hu.shift();var r=st.state();if(ti==="title"){var s=Dm.p,a=i/1e3;s.ang=a*.12,s.pitch=Math.sin(a*.3)*.15,s.x=5.5+Math.sin(a*.07)*.5,s.z=17.5,Wi.render(Dm,a,e),Je.clearRect(0,0,xt,Wn),mu?(_t.isOpen()||_t.open(Nf()),_t.render(Je,wi)):(Gm(Je,wi),wi%.8<.55&&Le.default.drawText(Je,"LOADING...",xt/2,120,{scale:2,color:"#f0d848",shadow:!0,center:!0}))}else if(t==="game"||t==="inter"||t==="victory"){var o=Uo||t==="game"&&(!qi||!Ci||_t.isOpen())&&!fu;if(!o&&t==="game")for(Do+=e;Do>=No;){if(r.hitstop>0){r.hitstop-=No,Do-=No;continue}if(st.update(No),JM(r),Do-=No,st.mode()!=="game")break}else Do=0;r=st.state(),Wi.render(r,Uo?jM:i/1e3,o?0:e,Uo),r.events.length=0,zM.draw(r,{map:xa,menu:_t.isOpen(),camera:Wi.camera}),t==="inter"?KM(wi):t==="victory"?ZM(wi):qi?_t.isOpen()?_t.render(Je,wi):!Ci&&!fu&&(Je.fillStyle="rgba(0,0,0,0.5)",Je.fillRect(0,70,xt,24),Le.default.drawText(Je,"CLICK TO RESUME",xt/2,76,{scale:2,color:"#f0d848",shadow:!0,center:!0})):YM(wi)}requestAnimationFrame(Xm)}Om();requestAnimationFrame(Xm);var Ai=null,mu=!1;function Ym(i){mu||(mu=!0,Ai=i||{ready:!0,loaded:[],problems:["timed out; using built-in art"]},Ai.loaded.length&&Wi.setAssets(Ai),Ai.problems.length&&console.info("[assets] "+Ai.problems.join(" | ")),Ai.loaded.length&&console.info("[assets] using "+Ai.loaded.length+" authored assets"),_t.open(Nf()))}mm().then(Ym);setTimeout(function(){Ym(null)},6e3);fu&&(window.FIREBIRD2=Object.assign({},st,{launch:function(i){st.startLevel(i,!1),qi=!0,ti="game",_t.close()},toTitle:Lf,setMap:function(i){xa=i},freeze:function(i){Uo=!!i},frozen:function(){return Uo},models:function(){return Wi.debugModels()},assets:function(){return Ai?{ready:Ai.ready,loaded:Ai.loaded.slice(),problems:Ai.problems.slice()}:{ready:!1}},frameStats:function(){var i=hu.slice().sort(function(t,n){return t-n});function e(t){return i.length?i[Math.min(i.length-1,Math.floor(i.length*t))]*1e3:0}return{frames:i.length,p50:e(.5),p95:e(.95),p99:e(.99),info:Wi.info().render}},renderInfo:function(){return Wi.info()}}));})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
