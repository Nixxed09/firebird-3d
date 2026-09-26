(()=>{var Xm=Object.create;var Df=Object.defineProperty;var qm=Object.getOwnPropertyDescriptor;var Ym=Object.getOwnPropertyNames;var Km=Object.getPrototypeOf,Zm=Object.prototype.hasOwnProperty;var ya=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var Jm=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Ym(e))!Zm.call(i,r)&&r!==t&&Df(i,r,{get:()=>e[r],enumerable:!(n=qm(e,r))||n.enumerable});return i};var Ma=(i,e,t)=>(t=i!=null?Xm(Km(i)):{},Jm(e||!i||!i.__esModule?Df(t,"default",{value:i,enumerable:!0}):t,i));var Uf=ya((jM,mu)=>{"use strict";var jm=(function(){function i(N){var O=parseInt(N.slice(1),16),H=O>>16&255,z=O>>8&255,$=O&255;return(4278190080|$<<16|z<<8|H)>>>0}function e(N,O,H){var z=document.createElement("canvas");z.width=N,z.height=O;var $=z.getContext("2d"),V=$.createImageData(N,O);return new Uint32Array(V.data.buffer).set(H),$.putImageData(V,0,0),{w:N,h:O,data:H,canvas:z}}function t(N,O,H){H=H||{};for(var z=!!H.mirror,$=N[0].length,V=0;V<N.length;V++)if(N[V].length!==$)throw new Error("sprite row "+V+" length "+N[V].length+" != "+$);for(var K=z?$*2:$,ue=N.length,xe=new Uint32Array(K*ue),de=0;de<ue;de++)for(var ye=N[de],be=0;be<$;be++){var De=O[ye[be]];if(De){var Ge=i(De);xe[de*K+be]=Ge,z&&(xe[de*K+(K-1-be)]=Ge)}}return e(K,ue,xe)}function n(N,O,H){var z=(N|0)*374761393+(O|0)*668265263+(H|0)*974711;return z=(z^z>>13)*1274126177,((z^z>>16)>>>0)%1e3/1e3}function r(N,O,H){var z=parseInt(N.slice(1),16),$=parseInt(O.slice(1),16),V=(z>>16&255)+(($>>16&255)-(z>>16&255))*H,K=(z>>8&255)+(($>>8&255)-(z>>8&255))*H,ue=(z&255)+(($&255)-(z&255))*H;return(4278190080|(ue&255)<<16|(K&255)<<8|V&255)>>>0}var s=64;function a(N){for(var O=new Uint32Array(s*s),H=0;H<s;H++)for(var z=0;z<s;z++)O[H*s+z]=N(z,H);return e(s,s,O)}function o(N,O,H,z){return a(function($,V){var K=V>>4,ue=K&1?16:0,xe=$+ue>>5,de=(V&15)>=14,ye=($+ue&31)>=30;if(de||ye)return r(z,"#000000",n($,V,N)*.4);var be=n($,V,N)*.5+n(xe*31,K*7,N+9)*.5,De=(V&15)<2||($+ue&31)<2?.25:0;return r(O,H,be*.65+De)})}function l(N,O,H){return a(function(z,$){var V=z>>4,K=$>>4,ue=n(V,K,N)*6-3,xe=(z+ue)%16<1.5||($-ue)%16<1.5,de=n(z,$,N+3)*.45+n(V*5,K*3,N+7)*.55;return xe?r(H,"#000000",.5):r(O,H,de*.7)})}function u(N,O,H){return a(function(z,$){var V=z>>4&1,K=(z&15)<1||($&31)<1,ue=((z&15)===3||(z&15)===12)&&(($&31)===4||($&31)===27),xe=n(z,$,N)*.3+V*.12+$/s*.15;return K?r(H,"#000000",.6):ue?r(O,"#ffffff",.35):r(O,H,xe)})}function c(N){return a(function(O,H){var z="#4a5a52",$="#232c28";if(H<6||H>57)return r("#2a3430","#000000",.3+n(O,H,N)*.2);if(H>=28&&H<=33&&(O&31)>3&&(O&31)<28){var V=H===30||H===31?"#7dff9a":"#2f8a4a";return r(V,"#000000",n(O,H,N)*.2)}var K=(O&31)<2,ue=H>40&&H<54&&(H&3)<2&&(O&31)>6&&(O&31)<26;return K?r($,"#000000",.5):ue?r("#1a211e","#000000",.3):r(z,$,n(O,H,N)*.5)})}function h(N){return a(function(O,H){var z=n(O,H,N)*.4+n(O>>2,H>>2,N+5)*.6,$=Math.sin(O*.22+Math.sin(H*.13+N)*2.1)+Math.sin(H*.18+O*.05);return $>1.45?r("#ff7a18","#ffd23e",n(O,H,N+2)):$>1.2?r("#8a1e08","#ff5a10",.5):r("#4a1410","#1c0605",z)})}function f(N){return a(function(O,H){var z="#5a5f68",$="#2a2d33",V=Math.abs(O-32)<1,K=(H&15)<2,ue=O<3||O>60||H<3||H>60;if(N&&H>8&&H<20&&!V){var xe=N==="red"?"#d02020":"#2050e0";return r(xe,"#000000",(H===9||H===19?.5:0)+n(O,H,40)*.2)}return V?r("#101216","#000000",.3):ue?r($,"#000000",.4):K?r($,z,.3):r(z,$,n(O,H,17)*.4+H/s*.2)})}function p(N){return a(function(O,H){var z="#4f4a42",$="#28241e",V=O>16&&O<48,K=H>14&&H<50;if(V&&K){var ue=O>24&&O<40,xe=N?H>32&&H<46:H>18&&H<32;return ue&&xe?r(N?"#30d040":"#d03030","#000000",n(O,H,3)*.25):r("#1c1a16","#000000",.3)}var de=O<2||O>61||H<2||H>61;return de?r($,"#000000",.5):r(z,$,n(O,H,21)*.5)})}function g(N,O,H){return a(function(z,$){var V=(z>>4)+($>>4)&1,K=(z&15)<1||($&15)<1,ue=n(z,$,N)*.4;return K?r(H,"#000000",.55):r(V?O:H,"#000000",ue+V*.05)})}var y={o:"#1c0e06",b:"#9a5226",d:"#6b3413",c:"#e08a28",h:"#f7b24a",e:"#ffe14a",m:"#3a1006",t:"#f0e6c8",x:"#f0e6c8",r:"#c03018",f:"#ff8a18",g:"#ffd23e"},v=["......tt........",".......tt.......","........oooooooo","........obbbbbbb","........obbddddd","........obbeedbb","........obbbbbbb","........obdmtmbb","........obbmmbbb","........oooooobb","....oooooooooooo","...obbbbbbdccccc","..obbbo.obdccchc","..obbo..obdcchhc","..obbo..obddcccc",".obbo...obbdcccc",".obbo...obbddccc",".otto...obbbdddd",".ott....obbbbddd","........obbbbbbd","........oobbbbbb",".........obbo...",".........obbo...",".........obbo...",".........obbo...",".........oddo...",".........oddo...","........obddo...","........odddo...","......ottdddo...","......ooooooo...","................"],m=v.slice(0,21).concat(["........obbo....","........obbo....","........obbo....","........obbo....","........oddo....","........oddo....",".......obddo....",".......odddo....",".....ottdddo....",".....oooooo.....","................"]),_=["..gf..tt........",".gffg..tt.......",".offo...oooooooo",".otto...obbbbbbb",".obbo...obbddddd",".obbo...obeeedbb",".obbo...obbbbbbb",".obbo...obmmttbb","..obbo..obbmmbbb","..obbo..oooooobb","..obooooooooooo.","...obbbbbdccccc.","....obbobdccchc.","........obdcchhc","........obddcccc","........obbdcccc","........obbddccc","........obbbdddd","........obbbbddd","........obbbbbbd","........oobbbbbb",".........obbo...",".........obbo...",".........obbo...",".........obbo...",".........oddo...",".........oddo...","........obddo...","........odddo...","......ottdddo...","......ooooooo...","................"],L=v.slice();L[5]="........obbxxdbb",L[7]="........obmmmmbb";var E=["................","................","................","................","................","................","......tt........",".......tt.......","........oooooooo","........obbbbbbb","........obxxdddb","........obmmmmbb",".....oooooooobbb","...obbbbbbdccccb","..obbbboobdcccbb",".obbbo..obddccbb",".otto...obbddddb","........obbbbbdd",".......oobbbbbbb","......obbbbbbbdd","................","................","................","................","................","................","................","................","................","................","................","................"],C=["................","................","................","................","................","................","................","................","................","................","................","................","................","......tt........",".......ttoooooo.","......obbbbbbbbo",".....obbxxddmmbo","....obbbbdddbbbo","...obbddccccbbdd","..obbbbbdddbbbbb","................","................","................","................","................","................","................","................","................","................","................","................"],P=["................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","..........tt....","....oo....ott...","...obbdoooobbdo.","..obbddbbbdddbbo",".orrbdddddbbdrro",".orrrbbdddbrrro.","..orrrrrrrrrro..","...ooooooooooo..","................","................"];function U(N){var O={o:"#200a10",p:"#d06a8a",q:"#9a3d5e",k:"#e898a8",t:"#f2ead0",m:"#41101c",e:"#ffd23e",x:"#f2ead0",r:"#b02030"};if(N)for(var H in N)O[H]=N[H];return O}var M=["................","................","......oooooooooo",".....opppppppppp","....oppkpppppppp","....opppeepppppp","....oppppppppppp","....opmmmmmmmmmm","....opmtmtmtmtmt","....opmmmmmmmmmm","....optmtmtmtmtm","....opqqqqqqqqqq",".....ooooooooooo","...oppppqqpppppp","..opppppoqpppppp","..opppo.oqpppppp","..oppo..oqqppppp","..otto..oqqqpppp","..ott...oqqqqppp","........oqqqqqpp","........ooqqqqqp",".........oqqqo..",".........oqqqo..",".........oqqo...","........oqqqo...","........ottto...","........ooooo...","................","................","................","................","................"],x=M.slice(0,21).concat(["........oqqqo...","........oqqqo...","........oqqo....",".......oqqqo....",".......ottto....",".......ooooo....","................","................","................","................"]),w=["................","......oooooooooo",".....opppppppppp","....oppkpppppppp","....opppeepppppp","....opmmmmmmmmmm","....opmttmttmttm","....opmmmmmmmmmm","....opmmmmmmmmmm","....opmmmmmmmmmm","....opmttmttmttm","....opmmmmmmmmmm","....opqqqqqqqqqq","...oppppqqpppppp","..opppppoqpppppp","..opppo.oqpppppp","..oppo..oqqppppp","..otto..oqqqpppp","..ott...oqqqqppp","........oqqqqqpp","........ooqqqqqp",".........oqqqo..",".........oqqqo..",".........oqqo...","........oqqqo...","........ottto...","........ooooo...","................","................","................","................","................"],A=M.slice();A[5]="....opppxxpppppp";var S=["................","................","................","................","................","................","................","......oooooooooo",".....opppppppppp","....oppxxppppppp","....opmmmmmmmmmm","....opmtmtmtmtmt","....opqqqqqqqqqq","...opppppqqppppp","..oppppppqqquppp".replace("u","q"),"..oppoooqqqqqppp","..oo...oqqqqqqpp",".......ooqqqqqqp","........oqqqqoo.","................","................","................","................","................","................","................","................","................","................","................","................","................"],I=["................","................","................","................","................","................","................","................","................","................","................","................","................","................","......ooooooooo.",".....oppppppppqo","....opxxpmmttppo","...oppppqqqqppqo","..oqqppppppqqqoo","...ooooooooooo..","................","................","................","................","................","................","................","................","................","................","................","................"],D=["................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................",".......oo.......",".....ooppoo.tt..","...oqpppppqoot..","..oqqpmmttppqqo.",".orrqqppppqqrro.",".orrrqqqqqrrro..","..orrrrrrrrro...","...oooooooooo...","................","................"],k={o:"#06141c",h:"#1e8aa0",H:"#6fe0ec",s:"#d8fff8",v:"#ffd23e",V:"#fff6b0",c:"#157a8a",C:"#3fd8c8",g:"#ffd23e",Y:"#fff6b0"},Y=["..........",".....ooooo","...oohhhhh","..ohhHHhhh","..ohHhhhhh",".ohhhhoooo",".ohhhosvvv",".ohhhosvVV",".ohhhossss",".ohhhossss",".ohhhhosss","..ohhhooss","...ooooooo",".....ooccc","...ooccccg","..occcccCg",".occcCcccg",".occcCccgY",".occcCccgY",".occ.Ccccg",".oso.occcg",".oso.occcc","..o..oCCCC",".....occcc",".....occo.",".....occo.",".....occo.",".....oCco.",".....occo.",".....occo.",".....occo.","....ogggo.","....ooooo.",".........."],j=Y.slice(0,24).concat(["....occo..","....occo..","...occo...","...oCco...","...occo...","..occo....","..occo....",".ogggo....",".ooooo....",".........."]),se=Y.slice();se[13]=".o...ooccc",se[14]=".so.occccg",se[15]=".so.occcCg",se[16]=".oc.occccg",se[19]="..o..Ccccg",se[20]=".....occcg",se[21]=".....occcc";function ne(N,O,H){return N.map(function(z,$){for(var V="",K=0;K<z.length;K++)V+=z[K]!=="."&&n(K,$,H)<O?z[K]:".";return V})}function le(N){var O={};for(var H in k)O[H]=k[H];if(N)for(var z in N)O[z]=N[z];return O}function ae(N){var O={o:"#1a1008",f:"#e85818",F:"#ffa018",s:"#d8a06a",S:"#a8744a",w:"#f0ead8",k:"#28221a",m:"#5a1408",t:"#e8e0c8",r:"#c01818",c:"#b84a10",C:"#7e2e08",g:"#888078",x:"#301010"},H=N.gray?{s:"#9a9488",S:"#6e6a60"}:{};for(var z in H)O[z]=H[z];var $=[".osskwwkssss",".osskwkksss.".replace(".$",""),".ossskksssss"],V=[".osssookssss",".osskwkksss.",".ossskksssss"],K=[".osssssossss",".ossooosssss",".osssssossss"],ue=[".osskoskssss",".osssksossss",".osskoskssss"],xe=["..osssssssss","..osssmmmmmm","..osssssssss"],de=["..osssssssss","..ossmmmmmmm","..osSmmsssss"],ye=["..osssmmmmmm","..ossmtttttt","..osssmmmmmm"],be=["..ossmmmmmss","..osmmttmmss","..ossmmmmmss"],De=N.eyes==="squint"?V:N.eyes==="shut"?K:N.eyes==="x"?ue:$,Ge=N.mouth==="grim"?de:N.mouth==="grin"?ye:N.mouth==="ouch"?be:xe,W=[".....ffF....","...fFffffF..","..ffFfffffF.","..offffffff.",".offFffffffF",".offffffffff",".offosssssss",".oosssssssss","..ossssssSSS","..osssssssss",De[0],De[1],De[2],"..osssssssss","..ossssssSss","..osssssSSss","..ossssssSss","..osssssssss",Ge[0],Ge[1],Ge[2],"..osssssssss","...ossssssSS","...ossssssss","....oossssss","..ooccoosSSS".replace("..",".o"),".occcccooooo","occCcccccccc"];return W=W.map(function(Se){for(Se=Se.replace(/\$/g,""),Se.length>12&&(Se=Se.slice(0,12));Se.length<12;)Se+=".";return Se}),N.blood>=1&&(W[8]="..osrrsssSSS".slice(0,12),W[9]="..ossrssssss"),N.blood>=2&&(W[14]="..osrssssrss",W[15]="..orrssSSrss",W[21]="..osrsssssrs"),N.blood>=3&&(W[6]=".offosrrssss",W[13]="..orrsssrrss",W[22]="...orrsssrSS".slice(0,12)),t(W,O,{mirror:!0})}var we={o:"#0e0c0a",g:"#4a4e56",G:"#6a707c",d:"#26282e",s:"#d8a06a",S:"#a8744a",w:"#7a4a28",W:"#5a3418",y:"#c8b040",k:"#16181c"},Ee=["............","....oooo....","..oossssoo..",".ossssssss o".replace(" ","s"),".osssSsssss.","ossssSSssss.","osssssSssss.","ossssssssss.","osSSsssssss.","ossssssssss.",".ossssssss..",".ossssssss..","..ossssss...","..oswwwws...","..owwWWww...","..owWWWWw...","..owwwwww...","...oooooo..."].map(function(N){for(;N.length<12;)N+=".";return N.slice(0,12)}),it=["...........ooo","..........ookk","..........ogkk","..........ogGd","..........ogGd",".........ooGgd",".........ogGGd",".........ogGGd",".........ogGGd",".........odddd",".........ogGGd",".........ogGGd",".........odddd","..........oggd","..........oggd","..........ogdd",".......ooooddd",".....oossssodd","....ossssssodd","...ossssSssood","..osssssSSssod","..ossssssSssod","..osSSssssssod","..ossssssssood","...osssssssso.","...osssssssso.","....oossssoo..","......oooo...."],ge=[".........ooo","........ookk","........odkk","........odgd","........odgd","........odgd","........odgd","........odgd","........odgd","........odgd","........oddd",".......ooddd","......oWwwdd","......oWwwwd","......oWWwwd","......oWWwwd","......ooWWwd",".......ooWWd","........oddd","........oggd",".....oooogdd","...oosssoggd","..ossssssogd","..ossSsssogd",".osssSSssood",".ossssssssod",".osSSsssssod",".ossssssssod","..ossssssso.","..ossssssso.","...oosssoo..",".....oooo..."];function oe(N,O,H){for(var z=new Uint32Array(N*O),$=(N-1)/2,V=(O-1)/2,K=0;K<O;K++)for(var ue=0;ue<N;ue++){var xe=(ue-$)/(N/2),de=(K-V)/(O/2),ye=Math.sqrt(xe*xe+de*de),be=H(ye,ue,K);be&&(z[K*N+ue]=be)}return e(N,O,z)}function G(N){return oe(12,12,function(O,H,z){var $=n(H,z,N)*.3;return O+$<.38?i("#fff8d0"):O+$<.68?i("#ffd23e"):O+$<.95?i("#ff7a18"):0})}function Z(N){return oe(14,14,function(O,H,z){var $=n(H,z,N)*.3;return O+$<.38?i("#eaffd0"):O+$<.68?i("#8aff3e"):O+$<.95?i("#2fa818"):0})}function fe(N,O,H){return oe(N,N,function(z,$,V){var K=n($,V,O)*.55;return z+K<.3*H?i("#fff8d0"):z+K<.55*H?i("#ffd23e"):z+K<.8*H?i("#ff7a18"):z+K<1*H?i("#a83010"):0})}function me(N,O){return oe(O?8:6,O?8:6,function(H,z,$){var V=n(z,$,N)*.4;return H+V<.5?i("#c8c4bc"):H+V<.9?i("#78746c"):0})}function _e(N,O){return oe(O?8:6,O?8:6,function(H,z,$){var V=n(z,$,N)*.45;return H+V<.45?i("#e04020"):H+V<.9?i("#901810"):0})}function He(){for(var N=16,O=22,H=new Uint32Array(N*O),z=0;z<O;z++)for(var $=0;$<N;$++){var V=Math.abs(($-7.5)/7.5);if(!(V>1)){var K=V>.88||z===0||z===O-1,ue=1-V*V*.75,xe=z===4||z===16,de=z>=8&&z<=12,ye=de?"#c05010":"#5c554c";z>=1&&z<=2&&(ye="#3a352e");var be=r(ye,"#000000",1-ue+(xe?.35:0)+n($,z,77)*.2);K&&(be=i("#16130f")),z===1&&V<.6&&n($,z,8)>.4&&(be=i("#ff9a28")),H[z*N+$]=be}}return e(N,O,H)}function Je(N){for(var O=10,H=28,z=new Uint32Array(O*H),$=12;$<28;$++)for(var V=4;V<=5;V++)z[$*O+V]=i($>24?"#3a2812":"#6a4a22");z[12*O+3]=i("#8a6432"),z[12*O+6]=i("#8a6432");for(var K=0;K<12;K++)for(var ue=0;ue<O;ue++){var xe=(ue-4.5)/4.2,de=(K-8)/8,ye=Math.sqrt(xe*xe*1.6+de*de),be=n(ue,K,N)*.5;ye+be<.45?z[K*O+ue]=i("#fff0b0"):ye+be<.75?z[K*O+ue]=i("#ffd23e"):ye+be<1&&(z[K*O+ue]=i("#ff7a18"))}return e(O,H,z)}function Oe(N,O,H,z,$){for(var V=new Uint32Array(N*O),K=0;K<O;K++)for(var ue=0;ue<N;ue++){var xe=ue===0||K===0||ue===N-1||K===O-1,de=xe?i("#14120e"):r(H,z,K/O*.6+n(ue,K,5)*.15);V[K*N+ue]=de}return $&&$(V,N,O),e(N,O,V)}function je(N){return function(O,H,z){for(var $=H>>1,V=z>>1,K=i(N),ue=-(z>>2);ue<=z>>2;ue++)O[(V+ue)*H+$]=K,O[(V+ue)*H+$-1]=K;for(var xe=-(H>>2);xe<=H>>2;xe++)O[V*H+$+xe]=K,O[(V-1)*H+$+xe]=K}}function dt(N){var O=["oooooooo","occccccb".replace("b","o"),"occwwcco","occwwcco","occcccco","occcccco","ocwwwwco","occcccco","occcccco","oooooooo"];return t(O,{o:"#14120e",c:N,w:"#f0ead8"})}function et(){var N=30,O=10,H=new Uint32Array(N*O);function z(ue,xe,de){ue>=0&&ue<N&&xe>=0&&xe<O&&(H[xe*N+ue]=i(de))}for(var $=2;$<22;$++)z($,3,"#3a3e46"),z($,4,"#5a5f68"),z($,5,"#26282e");for(var V=8;V<15;V++)z(V,6,"#5a3418");for(var K=21;K<29;K++)z(K,4+(K-21>>1),"#5a3418"),z(K,5+(K-21>>1),"#7a4a28");return z(1,3,"#16130f"),z(1,4,"#16130f"),e(N,O,H)}function vt(){return oe(14,14,function(N,O,H){return N<.3?i("#fff8d0"):N<.6?i("#ffd23e"):N<.85?i("#ff7a18"):N<1?i("#a03008"):0})}function Ct(){return oe(20,20,function(N,O,H){var z=Math.atan2(H-9.5,O-9.5),$=.55+.45*Math.abs(Math.sin(z*4));return N<.35*$?i("#fff8d0"):N<.7*$?i("#ffd23e"):N<1*$?i("#ff7a18"):0})}var Wt={A:[2,5,7,5,5],B:[6,5,6,5,6],C:[3,4,4,4,3],D:[6,5,5,5,6],E:[7,4,6,4,7],F:[7,4,6,4,4],G:[3,4,5,5,3],H:[5,5,7,5,5],I:[7,2,2,2,7],J:[1,1,1,5,2],K:[5,6,4,6,5],L:[4,4,4,4,7],M:[5,7,5,5,5],N:[6,5,5,5,5],O:[2,5,5,5,2],P:[6,5,6,4,4],Q:[2,5,5,6,3],R:[6,5,6,6,5],S:[3,4,2,1,6],T:[7,2,2,2,2],U:[5,5,5,5,7],V:[5,5,5,5,2],W:[5,5,5,7,5],X:[5,5,2,5,5],Y:[5,5,2,2,2],Z:[7,1,2,4,7],0:[7,5,5,5,7],1:[2,6,2,2,7],2:[6,1,2,4,7],3:[6,1,2,1,6],4:[5,5,7,1,1],5:[7,4,6,1,6],6:[3,4,6,5,2],7:[7,1,2,2,2],8:[7,5,7,5,7],9:[2,5,3,1,6]," ":[0,0,0,0,0],".":[0,0,0,0,2],",":[0,0,0,2,4],"!":[2,2,2,0,2],"?":[6,1,2,0,2],":":[0,2,0,2,0],"-":[0,0,7,0,0],"+":[0,2,7,2,0],"%":[5,1,2,4,5],"/":[1,1,2,4,4],"'":[2,2,0,0,0],_:[0,0,0,0,7],">":[4,2,1,2,4],"<":[1,2,4,2,1],'"':[5,5,0,0,0],"=":[0,7,0,7,0],"(":[1,2,2,2,1],")":[4,2,2,2,4],"*":[0,5,2,5,0],"#":[5,7,5,7,5],"^":[2,5,0,0,0],"&":[2,5,2,5,3]};function Mt(N,O,H,z,$){$=$||{};var V=$.scale||1,K=$.color||"#e8e0c8",ue=$.shadow;if(O=String(O).toUpperCase(),$.center&&(H-=Math.floor(Ot(O,V)/2)),$.right&&(H-=Ot(O,V)),ue){var xe=typeof ue=="string"?ue:"#000000";Mt(N,O,H+V,z+V,{scale:V,color:xe})}N.fillStyle=K;for(var de=0;de<O.length;de++){for(var ye=Wt[O[de]]||Wt["?"],be=0;be<5;be++)for(var De=ye[be],Ge=0;Ge<3;Ge++)De&4>>Ge&&N.fillRect(H+Ge*V,z+be*V,V,V);H+=4*V}}function Ot(N,O){return String(N).length*4*(O||1)-(O||1)}var X={};X.tex={1:o(1,"#8a4232","#4a1e14","#2a1812"),2:l(2,"#8a8578","#4a463c"),3:u(3,"#5a5f68","#26282e"),4:c(4),5:h(5),6:f(null),7:f("red"),8:f("blue"),9:p(!1),10:p(!0),11:o(1,"#8a4232","#4a1e14","#2a1812")},X.floors={slab:g(11,"#4e4a42","#38342c"),tech:g(12,"#3c4440","#2a302c"),hell:a(function(N,O){var H=n(N,O,13)*.5+n(N>>2,O>>2,14)*.5,z=Math.sin(N*.19+Math.sin(O*.11)*2)+Math.sin(O*.15);return z>1.5?r("#ff7a18","#ffd23e",H):r("#3a100c","#180404",H)}),ceilDark:g(15,"#2e2b26","#201d18"),ceilTech:a(function(N,O){var H=(N&31)>12&&(N&31)<20&&(O&31)>12&&(O&31)<20;return H?r("#fff0c0","#c0a860",n(N,O,16)*.3):r("#2a2e2c","#1a1d1b",n(N,O,16)*.5)}),ceilHell:a(function(N,O){return r("#241010","#100404",n(N,O,17)*.6)})};var Ht=y,ct=U(null),F=U({p:"#c8502a",q:"#7e2412",k:"#e8804a",e:"#a0fFff".toLowerCase()});X.mobs={imp:{walkA:t(v,Ht,{mirror:!0}),walkB:t(m,Ht,{mirror:!0}),attack:t(_,Ht,{mirror:!0}),pain:t(L,Ht,{mirror:!0}),die1:t(E,Ht,{mirror:!0}),die2:t(C,Ht,{mirror:!0}),corpse:t(P,Ht,{mirror:!0})},gnasher:{walkA:t(M,ct,{mirror:!0}),walkB:t(x,ct,{mirror:!0}),attack:t(w,ct,{mirror:!0}),pain:t(A,ct,{mirror:!0}),die1:t(S,ct,{mirror:!0}),die2:t(I,ct,{mirror:!0}),corpse:t(D,ct,{mirror:!0})},knight:{walkA:t(M,F,{mirror:!0}),walkB:t(x,F,{mirror:!0}),attack:t(w,F,{mirror:!0}),pain:t(A,F,{mirror:!0}),die1:t(S,F,{mirror:!0}),die2:t(I,F,{mirror:!0}),corpse:t(D,F,{mirror:!0})},riley:{walkA:t(Y,k,{mirror:!0}),walkB:t(j,k,{mirror:!0}),attack:t(se,le({v:"#ffffff",V:"#ffffff",Y:"#ffffff",g:"#fff6b0"}),{mirror:!0}),pain:t(Y,le({c:"#e8fffc",C:"#ffffff",h:"#9ef0f8"}),{mirror:!0}),shield:t(Y,le({c:"#c89018",C:"#ffd23e",h:"#e0a020",H:"#fff0a0"}),{mirror:!0}),die1:t(ne(Y,.6,71),le({c:"#6fe0ec"}),{mirror:!0}),die2:t(ne(Y,.22,72),le({c:"#d8fff8",h:"#d8fff8"}),{mirror:!0}),corpse:null}},X.things={barrel:He(),torchA:Je(31),torchB:Je(87),stim:Oe(10,8,"#e8e4dc","#a8a49c",je("#d02020")),medkit:Oe(16,12,"#e8e4dc","#a8a49c",je("#d02020")),clip:Oe(10,8,"#7a7468","#4a463c",function(N,O,H){for(var z=2;z<O-2;z+=2)N[2*O+z]=i("#c8a030")}),shells:Oe(14,9,"#b03020","#5e1810",function(N,O,H){for(var z=2;z<O-2;z+=2)N[3*O+z]=i("#c8a030"),N[4*O+z]=i("#c8a030")}),armor:t(["...oooo.","..oggggo",".ogggggg",".oggGGgg",".ogggggg",".ogggggg","..ogggg o".replace(" ",""),"..oggggg","...ooooo"].map(function(N){for(;N.length<8;)N+=".";return N.slice(0,8)}),{o:"#14120e",g:"#3a7a30",G:"#6ab858"},{mirror:!0}),keyRed:dt("#d02020"),keyBlue:dt("#2050e0"),shotgunPickup:et(),orb:vt(),fireballA:G(41),fireballB:G(42),greenballA:Z(43),greenballB:Z(44),boom1:fe(24,51,.7),boom2:fe(28,52,1),boom3:fe(28,53,1.25),puffA:me(61,!0),puffB:me(62,!1),bloodA:_e(63,!0),bloodB:_e(64,!1)},X.faces={ok:ae({eyes:"open",mouth:"calm",blood:0}),hurt1:ae({eyes:"open",mouth:"grim",blood:1}),hurt2:ae({eyes:"squint",mouth:"grim",blood:2}),hurt3:ae({eyes:"squint",mouth:"ouch",blood:3}),pain:ae({eyes:"shut",mouth:"ouch",blood:1}),grin:ae({eyes:"open",mouth:"grin",blood:0}),dead:ae({eyes:"x",mouth:"ouch",blood:3,gray:!0})},X.guns={fist:t(Ee,we,{mirror:!0}),pistol:t(it,we,{mirror:!0}),shotgun:t(ge,we,{mirror:!0}),flash:Ct()};var b={};return X.secretTex=function(N){if(b[N])return b[N];for(var O=X.tex[N]||X.tex[1],H=new Uint32Array(O.data),z=0,$=0;$<H.length;$++){var V=H[$];z+=(V>>16&255)+(V>>8&255)+(V&255)}var K=z/H.length/3>70;function ue(be){var De=H[be],Ge=De>>16&255,W=De>>8&255,Se=De&255;K?(Ge*=.35,W*=.35,Se*=.35):(Ge=Ge*.5+110,W=W*.5+95,Se=Se*.5+80),H[be]=(4278190080|(Ge&255)<<16|(W&255)<<8|Se&255)>>>0}for(var xe=22,de=6;de<58;de++)xe+=de%7===0?1:de%11===0?-1:0,ue(de*64+xe),ue(de*64+xe+1);for(var ye=0;ye<7;ye++)ue((30+ye)*64+xe+2+ye);return b[N]={w:64,h:64,data:H},b[N]},X.drawText=Mt,X.textWidth=Ot,X.hex=i,X})();typeof mu!="undefined"&&(mu.exports=jm)});var Of=ya(($M,gu)=>{"use strict";var $m=(function(){var i=null,e=null,t=null,n=null,r=!0,s=!1,a=.5;try{r=localStorage.getItem("firebird.music")!=="off"}catch{}function o(){if(i)return i.state==="suspended"&&i.resume(),!0;try{var S=window.AudioContext||window.webkitAudioContext;return S?(i=new S,e=i.createGain(),e.gain.value=a,e.connect(i.destination),t=i.createGain(),t.gain.value=.9,t.connect(e),n=i.createGain(),n.gain.value=.3,n.connect(e),!0):!1}catch{return!1}}function l(S){if(i){var I=i.currentTime+(S.delay||0),D=i.createOscillator();D.type=S.type||"square",D.frequency.setValueAtTime(S.f0,I),S.f1&&D.frequency.exponentialRampToValueAtTime(Math.max(20,S.f1),I+S.dur);var k=i.createGain(),Y=S.gain||.3;k.gain.setValueAtTime(1e-4,I),k.gain.exponentialRampToValueAtTime(Y,I+(S.attack||.008)),k.gain.exponentialRampToValueAtTime(1e-4,I+S.dur);var j=t;if(S.pan&&i.createStereoPanner){var se=i.createStereoPanner();se.pan.value=Math.max(-1,Math.min(1,S.pan)),k.connect(se),se.connect(S.bus||t),j=null}else k.connect(S.bus||t);if(S.wobble){var ne=i.createOscillator(),le=i.createGain();ne.frequency.value=S.wobble,le.gain.value=S.f0*.25,ne.connect(le),le.connect(D.frequency),ne.start(I),ne.stop(I+S.dur)}D.connect(k),D.start(I),D.stop(I+S.dur+.02)}}var u=null;function c(){if(u)return u;var S=i.sampleRate*1.5;u=i.createBuffer(1,S,i.sampleRate);for(var I=u.getChannelData(0),D=0;D<S;D++)I[D]=Math.random()*2-1;return u}function h(S){if(i){var I=i.currentTime+(S.delay||0),D=i.createBufferSource();D.buffer=c(),D.loop=!0;var k=i.createBiquadFilter();k.type=S.type||"lowpass",k.frequency.setValueAtTime(S.f0||1e3,I),S.f1&&k.frequency.exponentialRampToValueAtTime(Math.max(30,S.f1),I+S.dur),k.Q.value=S.q||.8;var Y=i.createGain(),j=S.gain||.3;if(Y.gain.setValueAtTime(1e-4,I),Y.gain.exponentialRampToValueAtTime(j,I+(S.attack||.006)),Y.gain.exponentialRampToValueAtTime(1e-4,I+S.dur),D.connect(k),k.connect(Y),S.pan&&i.createStereoPanner){var se=i.createStereoPanner();se.pan.value=Math.max(-1,Math.min(1,S.pan)),Y.connect(se),se.connect(t)}else Y.connect(t);D.start(I),D.stop(I+S.dur+.02)}}var f={pistol:function(S,I){h({dur:.14,gain:.5*S,f0:2400,f1:300,pan:I}),l({f0:220,f1:90,dur:.08,type:"square",gain:.2*S,pan:I})},shotgun:function(S,I){h({dur:.38,gain:.8*S,f0:1600,f1:120,pan:I}),l({f0:130,f1:45,dur:.3,type:"sawtooth",gain:.35*S,pan:I})},pump:function(S,I){h({dur:.05,gain:.3*S,f0:900,type:"bandpass",q:2,delay:0,pan:I}),h({dur:.05,gain:.3*S,f0:700,type:"bandpass",q:2,delay:.13,pan:I})},punch:function(S,I){h({dur:.1,gain:.25*S,f0:500,f1:150,pan:I}),l({f0:90,f1:50,dur:.1,type:"sine",gain:.4*S,pan:I})},whiff:function(S,I){h({dur:.12,gain:.15*S,f0:600,f1:1400,type:"bandpass",q:1.5,pan:I})},doorOpen:function(S,I){h({dur:.5,gain:.22*S,f0:200,f1:500,pan:I}),l({f0:70,f1:130,dur:.5,type:"sawtooth",gain:.12*S,pan:I})},doorClose:function(S,I){h({dur:.4,gain:.2*S,f0:400,f1:150,pan:I}),l({f0:120,f1:60,dur:.4,type:"sawtooth",gain:.12*S,pan:I}),l({f0:60,dur:.08,type:"sine",gain:.3*S,delay:.38,pan:I})},locked:function(S,I){l({f0:150,dur:.09,type:"square",gain:.25*S,pan:I}),l({f0:110,dur:.12,type:"square",gain:.25*S,delay:.11,pan:I})},switchFlip:function(S,I){h({dur:.06,gain:.3*S,f0:1200,type:"bandpass",q:2,pan:I}),l({f0:90,f1:55,dur:.18,type:"square",gain:.3*S,delay:.05,pan:I})},pickup:function(S,I){l({f0:660,dur:.06,type:"square",gain:.15*S,pan:I}),l({f0:880,dur:.08,type:"square",gain:.15*S,delay:.06,pan:I})},health:function(S,I){l({f0:440,dur:.08,type:"sine",gain:.25*S,pan:I}),l({f0:587,dur:.12,type:"sine",gain:.25*S,delay:.07,pan:I})},keyPickup:function(S,I){[523,659,784,1047].forEach(function(D,k){l({f0:D,dur:.09,type:"square",gain:.16,delay:k*.07,pan:I})})},weaponUp:function(S,I){[180,260,380,520].forEach(function(D,k){l({f0:D,dur:.08,type:"sawtooth",gain:.18,delay:k*.05,pan:I})})},secret:function(S,I){[880,1108,1318,1760].forEach(function(D,k){l({f0:D,dur:.14,type:"triangle",gain:.2,delay:k*.09,pan:I})})},orb:function(S,I){[220,330,440,660,880].forEach(function(D,k){l({f0:D,dur:.2,type:"triangle",gain:.2,delay:k*.08,pan:I})})},impSight:function(S,I){l({f0:110,f1:55,dur:.5,type:"sawtooth",gain:.3*S,wobble:9,pan:I})},knightSight:function(S,I){l({f0:75,f1:35,dur:.9,type:"sawtooth",gain:.4*S,wobble:6,pan:I})},rileySight:function(S,I){[523,659,784,1047].forEach(function(D,k){l({f0:D,dur:.12,type:"triangle",gain:.22*S,delay:k*.07,pan:I})})},rileyTalk:function(S,I){l({f0:880,f1:1320,dur:.06,type:"square",gain:.08}),l({f0:1320,dur:.05,type:"square",gain:.07,delay:.07})},rileyShoot:function(S,I){l({f0:1400,f1:500,dur:.18,type:"triangle",gain:.25*S,pan:I})},rileyShield:function(S,I){l({f0:300,f1:900,dur:.3,type:"sine",gain:.3*S,wobble:18,pan:I})},rileyDerez:function(S,I){[1568,1319,1047,784,659,523,392].forEach(function(D,k){l({f0:D,dur:.14,type:"triangle",gain:.2,delay:k*.09,pan:I})})},impShoot:function(S,I){h({dur:.22,gain:.25*S,f0:400,f1:1200,type:"bandpass",q:1.5,pan:I})},fireExplode:function(S,I){h({dur:.3,gain:.4*S,f0:900,f1:100,pan:I})},barrelBoom:function(S,I){h({dur:.7,gain:.9*S,f0:1400,f1:60,pan:I}),l({f0:65,f1:28,dur:.6,type:"sine",gain:.6*S,pan:I})},enemyPain:function(S,I){l({f0:200,f1:120,dur:.13,type:"square",gain:.22*S,pan:I})},enemyDie:function(S,I){l({f0:170,f1:40,dur:.5,type:"sawtooth",gain:.3*S,wobble:12,pan:I}),h({dur:.25,gain:.2*S,f0:700,f1:150,delay:.05,pan:I})},playerPain:function(S,I){l({f0:170,f1:90,dur:.16,type:"square",gain:.3,pan:I}),h({dur:.1,gain:.15,f0:500,f1:200,pan:I})},playerDie:function(S,I){l({f0:220,f1:28,dur:1.3,type:"sawtooth",gain:.4,wobble:5,pan:I})},noAmmo:function(S,I){h({dur:.03,gain:.2,f0:1800,type:"bandpass",q:3,pan:I})},tally:function(S,I){l({f0:990,dur:.03,type:"square",gain:.12,pan:I})},menu:function(S,I){l({f0:520,dur:.05,type:"square",gain:.15,pan:I})},menuPick:function(S,I){l({f0:520,dur:.06,type:"square",gain:.18}),l({f0:780,dur:.09,type:"square",gain:.18,delay:.06})}};function p(S,I,D){if(!(!i||i.state==="suspended")){var k=f[S];if(k){var Y=1/(1+(I||0)*.13);if(!(Y<.04))try{k(Y,D||0)}catch{}}}}var g=168,y=60/g/4,v=[164.81,164.81,146.83,130.81,123.47,130.81,146.83,155.56],m=null,_=0,L=0;function E(S,I,D){var k=i.createOscillator(),Y=i.createOscillator();k.type="sawtooth",Y.type="square",k.frequency.value=I,Y.frequency.value=I*.5;var j=i.createBiquadFilter();j.type="lowpass",j.frequency.setValueAtTime(D?1400:800,S),j.frequency.exponentialRampToValueAtTime(200,S+y*1.8);var se=i.createGain();se.gain.setValueAtTime(1e-4,S),se.gain.exponentialRampToValueAtTime(D?.5:.34,S+.005),se.gain.exponentialRampToValueAtTime(1e-4,S+y*(D?1.9:.9)),k.connect(j),Y.connect(j),j.connect(se),se.connect(n),k.start(S),k.stop(S+y*2),Y.start(S),Y.stop(S+y*2)}function C(S,I){if(I==="kick"){var D=i.createOscillator();D.type="sine",D.frequency.setValueAtTime(110,S),D.frequency.exponentialRampToValueAtTime(40,S+.1);var k=i.createGain();k.gain.setValueAtTime(.5,S),k.gain.exponentialRampToValueAtTime(.001,S+.12),D.connect(k),k.connect(n),D.start(S),D.stop(S+.13)}else{var Y=i.createBufferSource();Y.buffer=c(),Y.loop=!0;var j=i.createBiquadFilter();j.type="highpass",j.frequency.value=I==="snare"?1800:6e3;var se=i.createGain();se.gain.setValueAtTime(I==="snare"?.3:.12,S),se.gain.exponentialRampToValueAtTime(.001,S+(I==="snare"?.09:.03)),Y.connect(j),j.connect(se),se.connect(n),Y.start(S),Y.stop(S+.1)}}function P(){if(!(!s||!i)){for(;_<i.currentTime+.15;){var S=L%16,I=Math.floor(L/16),D=S>>2,k=S&3,Y=82.41;k===0||k===2?E(_,Y,!1):k===3&&E(_,v[(I*4+D)%v.length],!0),(S===0||S===8)&&C(_,"kick"),(S===4||S===12)&&C(_,"snare"),(S&1)===0&&C(_,"hat"),_+=y,L++}m=setTimeout(P,40)}}function U(){!i||!r||s||(s=!0,_=i.currentTime+.05,L=0,P())}function M(){s=!1,m&&(clearTimeout(m),m=null)}function x(S){r=!!S;try{localStorage.setItem("firebird.music",r?"on":"off")}catch{}return r?U():M(),r}function w(){return x(!r)}function A(S){a=Math.max(0,Math.min(1,S))*.72,e&&(e.gain.value=a)}return{init:o,play:p,startMusic:U,stopMusic:M,toggleMusic:w,setMusic:x,setVolume:A,isMusicOn:function(){return r}}})();typeof gu!="undefined"&&(gu.exports=$m)});var Ff=ya((eS,vu)=>{"use strict";var Qm=(function(){var i="firebird.settings.v1",e="firebird.progress.v1",t={sens:5,volume:7,crosshair:!0,tips:!0,shake:!0,goalMarker:!0,difficulty:1,seenTips:{}};function n(){try{return window.localStorage}catch{return null}}function r(f){var p=n();if(!p)return null;try{var g=JSON.parse(p.getItem(f));return g&&typeof g=="object"?g:null}catch{return null}}function s(f,p){var g=n();if(g)try{g.setItem(f,JSON.stringify(p))}catch{}}var a={},o=r(i)||{};for(var l in t){var u=l in o&&o[l]!==null&&typeof o[l]==typeof t[l];a[l]=u?o[l]:t[l]}a.sens=Math.max(1,Math.min(10,a.sens|0)),a.volume=Math.max(0,Math.min(10,a.volume|0)),a.difficulty=Math.max(0,Math.min(2,a.difficulty|0));var c=r(e)||{};typeof c.unlocked!="number"&&(c.unlocked=0),(!c.best||typeof c.best!="object")&&(c.best={});var h=["PAR","KILLS","ITEMS","SECRETS"];return{v:a,save:function(){s(i,a)},progress:c,unlock:function(f){f>c.unlocked&&(c.unlocked=f,s(e,c))},record:function(f,p){var g=c.best[f]||{time:null,medals:{}},y=[];p.time<=p.par&&y.push("PAR"),p.kills>=p.totalKills&&y.push("KILLS"),p.items>=p.totalItems&&y.push("ITEMS"),p.secrets>=p.totalSecrets&&y.push("SECRETS");var v=y.filter(function(_){return!g.medals[_]}),m=g.time===null||p.time<g.time;return m&&(g.time=Math.floor(p.time)),y.forEach(function(_){g.medals[_]=!0}),c.best[f]=g,s(e,c),{newBest:m,medals:y,fresh:v}},best:function(f){return c.best[f]||null},MEDALS:h}})(),e0=(function(){var i=[],e=320,t=200;function n(){return i[i.length-1]||null}function r(x){return typeof x=="function"?x():x}function s(x){return r(x.items)||[]}function a(x){return x&&!(x.disabled&&x.disabled())}function o(x,w,A){for(var S=s(x),I=S.length,D=0;D<I;D++){var k=((w+D*A)%I+I)%I;if(a(S[k]))return k}return 0}function l(x){return{screen:x,sel:o(x,x.sel||0,1),hover:-1}}function u(x){i=[l(x)]}function c(x){i.push(l(x)),SND.play("menu")}function h(x){i[i.length-1]=l(x)}function f(){i=[]}function p(){return i.length>0}function g(){if(i.length>1)return i.pop(),SND.play("menu"),!0;var x=n();return x&&x.screen.onBack?(x.screen.onBack(),!0):!1}function y(x){var w=n(),A=s(w.screen).length;A&&(w.sel=o(w.screen,w.sel+x,x),SND.play("menu"))}function v(x,w){a(x)&&(x.adjust?(x.adjust(w||1),SND.play("menu")):x.action&&(SND.play("menuPick"),x.action()))}function m(x){var w=n();if(!w)return!1;var A=s(w.screen),S=A[w.sel];switch(x){case"ArrowUp":case"KeyW":return y(-1),!0;case"ArrowDown":case"KeyS":case"Tab":return y(1),!0;case"ArrowLeft":case"KeyA":return S&&S.adjust&&v(S,-1),!0;case"ArrowRight":case"KeyD":return S&&S.adjust&&v(S,1),!0;case"Enter":case"NumpadEnter":case"Space":return v(S,1),!0;case"Escape":case"Backspace":return g()}return!1}function _(x){var w=x.scale||1;return{s:w,top:x.top||60,gap:x.gap||(w===1?12:14),x0:x.x0||56,x1:x.x1||264,rowH:5*w+5}}function L(x,w,A){for(var S=_(x),I=s(x),D=0;D<I.length;D++){var k=S.top+D*S.gap-3;if(A>=k&&A<k+S.rowH+1&&w>=S.x0-8&&w<=S.x1+8)return D}return-1}function E(x,w){var A=n();if(!A)return!1;var S=L(A.screen,x,w);return A.hover=S,S>=0&&a(s(A.screen)[S])&&S!==A.sel&&(A.sel=S,SND.play("menu")),S>=0&&a(s(A.screen)[S])}function C(x,w){var A=n();if(A){var S=L(A.screen,x,w);if(!(S<0)){var I=s(A.screen)[S];if(a(I)){A.sel=S;var D=_(A.screen),k=I.adjust&&x<D.x1-44&&x>(D.x0+D.x1)/2?-1:1;v(I,k)}}}}function P(x,w){for(var A=String(x).split(" "),S=[],I="",D=0;D<A.length;D++){var k=I?I+" "+A[D]:A[D];k.length>w&&I?(S.push(I),I=A[D]):I=k}return I&&S.push(I),S}function U(x,w,A,S,I){for(var D=S.slider[0],k=S.slider[1],Y=S.slider[2](),j=k-D,se=4,ne=1,le=j*(se+ne)-ne,ae=w-le,we=0;we<j;we++)x.fillStyle=we<Y-D?I?"#ffd23e":"#e03828":"#2e2a24",x.fillRect(ae+we*(se+ne),A,se,5);ART.drawText(x,String(Y),ae-6,A,{color:I?"#ffd23e":"#8a8478",right:!0})}function M(x,w){var A=n();if(A){var S=A.screen,I=_(S),D=s(S);S.drawBg&&S.drawBg(x,w),S.title&&ART.drawText(x,r(S.title),e/2,S.titleY||14,{scale:3,color:"#ff9a28",shadow:"#401008",center:!0}),S.drawExtra&&S.drawExtra(x,w);for(var k=0;k<D.length;k++){var Y=D[k],j=I.top+k*I.gap,se=k===A.sel,ne=a(Y),le=r(Y.label);se&&(x.fillStyle="rgba(255,110,24,0.16)",x.fillRect(I.x0-8,j-3,I.x1-I.x0+16,I.rowH),x.fillStyle="#ff7a18",x.fillRect(I.x0-8,j-3,2,I.rowH),w%.8<.55&&ART.drawText(x,">",I.x0-4,j+(I.s-1)*2,{color:"#ffd23e"}));var ae=ne?se?"#ffd23e":"#c8c0b0":"#4a463c",we=Y.value||Y.slider;if(we)if(ART.drawText(x,le,I.x0+4,j,{scale:I.s,color:ae,shadow:ne}),Y.slider)U(x,I.x1,j+(I.s-1)*2,Y,se);else{var Ee=r(Y.value);se&&Y.adjust&&(Ee="< "+Ee+" >"),ART.drawText(x,Ee,I.x1,j,{scale:I.s,color:se?"#ffd23e":"#e03828",right:!0})}else ART.drawText(x,le,S.alignLeft?I.x0+4:e/2,j,{scale:I.s,color:ae,shadow:ne,center:!S.alignLeft})}var it=D[A.sel],ge=it&&a(it)?r(it.desc):null;if(ge)for(var oe=P(ge,70),G=S.descY||168,Z=0;Z<oe.length;Z++)ART.drawText(x,oe[Z],e/2,G+Z*8,{color:"#a8a090",center:!0});var fe=S.footer===void 0?"ARROWS OR MOUSE: CHOOSE   ENTER: SELECT   ESC: BACK":r(S.footer);fe&&ART.drawText(x,fe,e/2,S.footerY||180,{color:"#5e584e",center:!0})}}return{open:u,push:c,replace:h,close:f,back:g,isOpen:p,key:m,pointer:E,click:C,render:M,wrap:P,current:function(){var x=n();return x?x.screen:null},selected:function(){var x=n();return x?s(x.screen)[x.sel]:null},depth:function(){return i.length}}})();typeof vu!="undefined"&&(vu.exports={SETTINGS:Qm,MENU:e0})});var Hf=ya((tS,_u)=>{"use strict";var t0=(function(){var i="firebird.riley.v1",e=3;function t(){return{shots:{fist:0,pistol:0,shotgun:0},hits:0,fireDistSum:0,fireDistN:0,strafeL:0,strafeR:0,stillT:0,seenT:0,hideT:0,longestHide:0,said:{}}}function n(w,A){A.los?(w.seenT+=A.dt,w.hideT=0,A.strafe<0?w.strafeL+=A.dt:A.strafe>0&&(w.strafeR+=A.dt),A.moving||(w.stillT+=A.dt)):(w.hideT+=A.dt,w.hideT>w.longestHide&&(w.longestHide=w.hideT))}function r(w,A,S){w.shots[A]=(w.shots[A]||0)+1,w.fireDistSum+=S,w.fireDistN++}function s(w){return w.shots.fist+w.shots.pistol+w.shots.shotgun}function a(w){var A=null,S=0;for(var I in w.shots)w.shots[I]>S&&(S=w.shots[I],A=I);return S>=5?A:null}function o(w){return w.fireDistN?w.fireDistSum/w.fireDistN:0}function l(w){return w.fireDistN<5?0:p((5-o(w))/3)}function u(w){return w.fireDistN<5?0:p((o(w)-6)/4)}function c(w){return w.seenT<4?0:p((w.stillT/w.seenT-.35)/.4)}function h(w){return w.strafeR>=w.strafeL?1:-1}function f(w){var A=w.strafeL+w.strafeR;return A<3?0:p((Math.max(w.strafeL,w.strafeR)/A-.55)/.3)}function p(w){return w<0?0:w>1?1:w}function g(w){var A=[];return w.los?(w.cool.volley<=0&&A.push("volley"),w.cool.lead<=0&&A.push("lead"),w.dist<6&&A.push("backoff"),w.dist>3&&A.push("close"),A.push("flank")):A.push("seek"),w.phase>=2&&w.impsAlive<2&&w.cool.summon<=0&&A.push("summon"),w.phase>=2&&w.los&&w.dist<7&&w.cool.shield<=0&&A.push("shield"),A}function y(w,A,S){var I=0,D=null;switch(w){case"volley":I=1+(S.phase>=3?.4:0);break;case"lead":I=.35+f(A)*1.6,f(A)>.4&&(D="strafe");break;case"backoff":I=.2+l(A)*1.6+(S.playerWeapon==="shotgun"&&S.dist<4?.8:0),l(A)>.4&&(D="rusher");break;case"close":I=.3+u(A)*1.3+c(A)*1.2,c(A)>.4?D="camper":u(A)>.4&&(D="sniper");break;case"flank":I=.45+(S.phase>=2?.35:0)+f(A)*.4;break;case"seek":I=1,A.hideT>3&&(D="hider");break;case"summon":I=.9;break;case"shield":I=S.playerWeapon==="shotgun"?1.4:.25,S.playerWeapon==="shotgun"&&A.shots.shotgun>=6&&(D="shotgun");break}return{move:w,score:I,why:D}}function v(w,A,S,I){if(I=I||Math.random,!w.length)return null;var D=w.map(function(se){return y(se,A,S)}),k=0;D.forEach(function(se){se.w=se.score*se.score,k+=se.w});for(var Y=I()*k,j=0;j<D.length;j++)if(Y-=D[j].w,Y<=0)return D[j];return D[D.length-1]}var m={fist:"FISTS",pistol:"PISTOL",shotgun:"SHOTGUN"};function _(w,A){if(!A||w.said[A])return null;var S=null;switch(A){case"strafe":S="YOU ALWAYS DODGE "+(h(w)<0?"LEFT":"RIGHT")+". I'M AIMING THERE NOW.";break;case"rusher":S="YOU LIKE IT UP CLOSE. I'LL KEEP MY DISTANCE.";break;case"sniper":S="YOU KEEP YOUR DISTANCE. SO I'M COMING TO YOU.";break;case"camper":S="YOU STAND STILL A LOT. THAT MAKES YOU EASY TO FIND.";break;case"hider":S="HIDING? I CAN FIND YOU. I KNOW THIS ARENA.";break;case"shotgun":S=w.shots.shotgun+" SHOTGUN BLASTS SO FAR. SHIELD UP!";break}return S&&(w.said[A]=!0),S}function L(w,A,S){switch(S=S||{},w){case"intro":return S.memory&&S.memory.lastStyle?"BACK AGAIN! LAST TIME "+S.memory.lastStyle+".":S.memory?"BACK AGAIN! ROUND "+(S.memory.fights+1)+". LET'S GO!":"HI! I'M RILEY. I LEARN HOW YOU PLAY. READY?";case"ease":return"I'M GOING A LITTLE EASIER THIS TIME. JUST A LITTLE.";case"studied":return"YOU BEAT ME "+S.wins+(S.wins===1?" TIME":" TIMES")+". I'VE BEEN PRACTISING.";case"phase2":return"OKAY. I'VE BEEN WATCHING YOU. MY TURN.";case"phase3":return"ALRIGHT, NO MORE HOLDING BACK!";case"summon":return"LITTLE HELP, FRIENDS?";case"friendlyFire":return"HEY! WATCH WHERE YOU THROW THOSE.";case"impsTurned":return"YOU GOT MY IMPS FIGHTING ME? SMART.";case"playerDied":{var I=E(A);return"GOOD FIGHT! YOU HIT ME "+A.hits+(A.hits===1?" TIME":" TIMES")+(I!==null?", "+I+"% ACCURACY":"")+". AGAIN?"}case"defeated":{var D=a(A);return"OKAY, YOU WIN! "+A.hits+" HITS"+(D?" WITH MOSTLY THE "+m[D]:"")+". NICE."}}return null}function E(w){var A=s(w);return A<5?null:Math.min(100,Math.round(w.hits/A*100))}function C(w){var A=a(w);return l(w)>.5&&A?"YOU RUSHED ME WITH THE "+m[A]:u(w)>.5?"YOU FOUGHT ME FROM FAR AWAY":w.longestHide>6?"YOU HID FOR "+Math.round(w.longestHide)+" SECONDS":f(w)>.5?"YOU KEPT DODGING "+(h(w)<0?"LEFT":"RIGHT"):A?"YOU USED THE "+m[A]+" THE MOST":null}function P(w){var A={fights:0,wins:0,lossStreak:0,ease:0,lastStyle:null};try{var S=w&&w.getItem(i);if(S){var I=JSON.parse(S);for(var D in A)I[D]!==void 0&&(A[D]=I[D])}}catch{}return A.ease=Math.max(0,Math.min(e,A.ease|0)),A}function U(w,A){try{w&&w.setItem(i,JSON.stringify(A))}catch{}}function M(w,A,S){return w.fights++,w.lastStyle=C(A),S?(w.wins++,w.lossStreak=0,w.ease=0):(w.lossStreak++,w.ease=Math.min(e,w.lossStreak)),w}function x(w){var A=w.ease,S=w.wins>0&&A===0;return{hpScale:1-.08*A,dmgScale:1-.1*A,coolScale:(1+.12*A)*(S?.9:1),practised:S}}return{MAX_EASE:e,newProfile:t,observe:n,noteShot:r,favWeapon:a,rusher:l,sniper:u,camper:c,strafeSide:h,strafeHabit:f,accuracy:E,legalMoves:g,scoreMove:y,choose:v,insight:_,line:L,describeStyle:C,recall:P,save:U,settle:M,tuning:x}})();typeof _u!="undefined"&&(_u.exports=t0)});var Kf=ya((sS,Mu)=>{"use strict";var Ta=[{name:"E1M1: ASH GATES",floor:"slab",ceil:"ceilDark",par:75,playerAngle:0,map:["#######################X######","####################..t.t....#","####################.........#","####################..i..+...#","####################....A....#","####################.........#","#######################U######","##....................t.t...##","##.t......%%......%%........##","##u...g......i..............##","##.t.......h.....g..........##","##..........................##","####################D#########","###*Pa#########....t.t......##","####S##########.....i.....o.##","##b......######..........io.##","##.......######......h......##","##..p....D........2.........##","##.......######..o..........##","##.......######.t.........t.##","##...h...#####################","##############################"]},{name:"E1M2: THE FURNACE",floor:"tech",ceil:"ceilTech",par:120,playerAngle:-Math.PI/2,map:["###############X################","############..t.t...#...########","############g.......#*PA########","############...+...g#...########","###############R######S#########","########......t.t.......########","########................########","########......b.........########","#......#.i.T........T...#o....o#","#......D................#......#","#..i...#................D..o...#","#......#....g...........#....i.#","#t.t.g.#...T........T...#.o..o.#","#r.a...#...i............#..g...#","########................#.a..h.#","###############..###############","############.b....h.############","############...p....############","############........############","############t......t############","################################"]},{name:"E1M3: DEMON THRONE",floor:"hell",ceil:"ceilHell",par:150,playerAngle:-Math.PI/2,map:["HHHHHHHHHHHHHHHXHHHHHHHHHHHHHHHH","HHHHHHHHHHHHH.t.t..HHHHHHHHHHHHH","HHHHHHHHHHHHH..+...HHHHHHHHHHHHH","HHHHHHHHHHHHHHHRHHHHHHHHHHHHHHHH","HHHHHHt.......t.t........tHHHHHH","HHHHHH.i................i.HHHHHH","HHHHHH..o..............o.tH....H","HH...H....................D..g.H","HH*PAS.........K.........tH.r..H","HH...H....g.........g.....H....H","HHHHHH.a................b.HHHHHH","HHHHHH...i..........i.....HHHHHH","HHHHHHt..................tHHHHHH","HHHHHH...a..h......+..b...HHHHHH","HHHHHH....................HHHHHH","HHHHHHHHHHHHHHHDHHHHHHHHHHHHHHHH","HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH","HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH","HHHHHHHHHHHHHi...iHHHHHHHHHHHHHH","HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH","HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH","HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH","HHHHHHHHHHHt........tHHHHHHHHHHH","HHHHHHHHHHH...b..a...HHHHHHHHHHH","HHHHHHHHHHH....p.....HHHHHHHHHHH","HHHHHHHHHHH..........HHHHHHHHHHH","HHHHHHHHHHHt........tHHHHHHHHHHH","HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH"]},{name:"E1M4: RILEY'S ARENA",floor:"tech",ceil:"ceilTech",par:240,playerAngle:-Math.PI/2,map:["MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMt........................tMMM","MMM..h..........Y.........h..MMM","MMM..........................MMM","MMM....TT..............TT....MMM","MMM....TT....o....o....TT....MMM","MMM..........................MMM","MMM.a......................a.MMM","MMM....TT..............TT....MMM","MMM....TT.......+......TT....MMM","MMM..........................MMM","MMMt.......o........o.......tMMM","MMMMMMMMMMMMMMMUMMMMMMMMMMMMMMMM","TTTTTTTTTTTTTT...TTTTTTTTTTTTTTT","TTTTTTTTTTTTTTt.tTTTTTTTTTTTTTTT","TTi.....o.......o.....iTTTTTTTTT","TT.....................T..g...TT","TT...g.............g..tTt....tTT","TT.......MM...MM.......D....u.TT","TT..b....MM.h.MM....a.tT.a..h.TT","TT.....................Tt....tTT","TT.................o...T..i...TT","TT.....................TTTTTTTTT","TTTTTTTTTTTTTTTDTTTTTTTTTTTTTTTT","TTTTTTTTTTt.........tTTTTTTTTTTT","TTTTTTTTTT..b..2..a..TTTTTTTTTTT","TTTTTTPA*S...........TTTTTTTTTTT","TTTTTTTTTT.....p.....TTTTTTTTTTT","TTTTTTTTTTt...h.....tTTTTTTTTTTT","TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT"]}];(function(){for(var i=0;i<Ta.length;i++){for(var e=Ta[i].map,t=e[0].length,n=0,r=0;r<e.length;r++){if(e[r].length!==t)throw new Error(Ta[i].name+" row "+r+" width "+e[r].length+" != "+t);for(var s=0;s<t;s++)e[r][s]==="p"&&n++}if(n!==1)throw new Error(Ta[i].name+" has "+n+" player starts")}})();typeof Mu!="undefined"&&(Mu.exports=Ta)});var Pe=Ma(Uf(),1),_n=Ma(Of(),1);window.ART=Pe.default;window.SND=_n.default;var If=Ma(Ff(),1);var Qt=Ma(Hf(),1);var n0={"#":1,"%":2,M:3,T:4,H:5,D:6,R:7,U:8,X:9,S:11},fi={6:!0,7:!0,8:!0,11:!0},Bf=.25,i0=2,Wn=.3,xu=.55;function kf(i){return i>="0"&&i<="9"?(i.charCodeAt(0)-48)*Bf:i>="a"&&i<="z"?(i.charCodeAt(0)-87)*Bf:0}function zf(i){for(var e=i.map,t=e[0].length,n=e.length,r={mw:t,mh:n,cells:new Uint8Array(t*n),floor:new Float32Array(t*n),ceil:new Float32Array(t*n),doors:{},lifts:[]},s=i.ceilHeight||i0,a=0;a<n;a++)for(var o=0;o<t;o++){var l=e[a][o],u=a*t+o,c=n0[l]||0;r.cells[u]=c,r.floor[u]=i.heights?kf(i.heights[a][o]):0,r.ceil[u]=i.ceilings&&i.ceilings[a][o]!=="."?kf(i.ceilings[a][o]):s,r.ceil[u]<r.floor[u]+1&&(r.ceil[u]=r.floor[u]+1),fi[c]&&(r.doors[o+","+a]={x:o,z:a,open:0,state:"closed",timer:0,locked:c===7?"red":c===8?"blue":null,secret:c===11,found:!1,used:!1}),l==="L"&&r.lifts.push({x:o,z:a,top:r.floor[u],bottom:0,pos:0,state:"down",wait:0})}for(var h in r.doors){var f=r.doors[h],p=1/0,g=0;Sa(r,f.x,f.z).forEach(function(v){r.cells[v.i]===0&&(p=Math.min(p,r.floor[v.i]),g=Math.max(g,r.ceil[v.i]))});var y=f.z*t+f.x;r.floor[y]=p===1/0?0:p,r.ceil[y]=f.secret?g||s:Math.min(g||s,r.floor[y]+1.5)}return r.lifts.forEach(function(v){var m=1/0;Sa(r,v.x,v.z).forEach(function(L){var E=r.cells[L.i]===0||fi[r.cells[L.i]];E&&!r0(r,L.x,L.z)&&(m=Math.min(m,r.floor[L.i]))}),v.bottom=m===1/0?0:Math.min(m,v.top),v.pos=v.bottom;var _=v.z*t+v.x;r.floor[_]=v.pos,r.ceil[_]=Math.max(r.ceil[_],v.top+1.2)}),r}function r0(i,e,t){for(var n=0;n<i.lifts.length;n++)if(i.lifts[n].x===e&&i.lifts[n].z===t)return!0;return!1}function Sa(i,e,t){var n=[];return[[1,0],[-1,0],[0,1],[0,-1]].forEach(function(r){var s=e+r[0],a=t+r[1];s>=0&&a>=0&&s<i.mw&&a<i.mh&&n.push({x:s,z:a,i:a*i.mw+s})}),n}function ii(i,e,t){return e<0||t<0||e>=i.mw||t>=i.mh?1:i.cells[t*i.mw+e]}function pr(i,e,t){return i.doors[e+","+t]||null}function mr(i,e,t){var n=ii(i,e,t);if(n===0)return!1;if(fi[n]){var r=pr(i,e,t);return!r||r.open<.9}return!0}function dn(i,e,t){return i.floor[t*i.mw+e]}function Ri(i,e,t){return i.ceil[t*i.mw+e]}function Or(i,e,t,n,r,s,a){for(var o=Math.floor(e-n),l=Math.floor(e+n),u=Math.floor(t-n),c=Math.floor(t+n),h=-1/0,f=1/0,p=u;p<=c;p++)for(var g=o;g<=l;g++){if(mr(i,g,p))return{blocked:!0};var y=dn(i,g,p),v=Ri(i,g,p);if(y>r+a+1e-4)return{blocked:!0};h=Math.max(h,y),f=Math.min(f,v)}return f<Math.max(r,h)+s-1e-4?{blocked:!0}:{blocked:!1,ground:h,ceil:f}}function Fr(i,e,t,n,r,s,a){var o=!0;return t!==0&&(Or(i,e.x+t,e.z,r,e.y,s,a).blocked?o=!1:e.x+=t),n!==0&&(Or(i,e.x,e.z+n,r,e.y,s,a).blocked?o=!1:e.z+=n),o}function zo(i,e,t,n){for(var r=Math.floor(e-n),s=Math.floor(e+n),a=Math.floor(t-n),o=Math.floor(t+n),l=-1/0,u=a;u<=o;u++)for(var c=r;c<=s;c++)mr(i,c,u)||(l=Math.max(l,dn(i,c,u)));return l===-1/0?0:l}function Go(i,e,t,n,r,s,a,o){for(var l=Math.sqrt(r*r+a*a),u=Math.floor(e),c=Math.floor(n),h=l>1e-9?Math.abs(1/r):1e30,f=l>1e-9?Math.abs(1/a):1e30,p=r<0?-1:1,g=a<0?-1:1,y=r<0?(e-u)*h:(u+1-e)*h,v=a<0?(n-c)*f:(c+1-n)*f,m=0,_=0;_<256;_++){var L=Math.min(y,v,o),E=dn(i,u,c),C=Ri(i,u,c);if(s<0){var P=(E-t)/s;if(P>=m-1e-6&&P<=L)return x(P,"floor")}else if(s>0){var U=(C-t)/s;if(U>=m-1e-6&&U<=L)return x(U,"ceil")}if(L>=o)return x(o,"none");if(m=L,y<v?(y+=h,u+=p):(v+=f,c+=g),u<0||c<0||u>=i.mw||c>=i.mh)return x(m,"wall");var M=t+s*m;if(mr(i,u,c)||M<dn(i,u,c)||M>Ri(i,u,c))return x(m,"wall")}return x(o,"none");function x(w,A){return{dist:w,x:e+r*w,y:t+s*w,z:n+a*w,kind:A,cx:u,cz:c}}}function gr(i,e,t,n,r,s,a){var o=r-e,l=s-t,u=a-n,c=Math.sqrt(o*o+l*l+u*u);return c<.001?!0:Go(i,e,t,n,o/c,l/c,u/c,c).dist>=c-.05}var gs=null;function yu(i,e,t,n,r,s){var a=i.mw,o=a*i.mh;(!gs||gs.length<o)&&(gs=new Int32Array(o)),s.fill(-1);var l=Math.floor(e),u=Math.floor(t);if(!(l<0||u<0||l>=a||u>=i.mh)){var c=0,h=0;for(s[u*a+l]=0,gs[h++]=u*a+l;c<h;){var f=gs[c++],p=s[f];if(!(p>=n))for(var g=f%a,y=f/a|0,v=0;v<4;v++){var m=g+(v===0?1:v===1?-1:0),_=y+(v===2?1:v===3?-1:0);if(!(m<0||_<0||m>=a||_>=i.mh)){var L=_*a+m;s[L]!==-1||!r(f,m,_)||(s[L]=p+1,gs[h++]=L)}}}}}function Gf(i,e,t,n){for(var r=0;r<i.lifts.length;r++){var s=i.lifts[r],a=t(s.x,s.z),o=s.pos;s.state==="down"&&a?(s.state="wait",s.wait=.5):s.state==="wait"?(s.wait-=e,s.wait<=0&&(s.state="up",n&&n(s,"start"))):s.state==="up"?(s.pos=Math.min(s.top,s.pos+e*.9),s.pos>=s.top&&(s.state="top",s.wait=2.5,n&&n(s,"stop"))):s.state==="top"?a?s.wait=2.5:(s.wait-=e)<=0&&(s.state="lower",n&&n(s,"start")):s.state==="lower"&&(a&&s.pos>s.bottom+.05?s.state="up":(s.pos=Math.max(s.bottom,s.pos-e*.9),s.pos<=s.bottom&&(s.state="down",n&&n(s,"stop")))),i.floor[s.z*i.mw+s.x]=s.pos,s.moved=s.pos-o}}var ln={r:.28,h:.9,hCrouch:.55,eye:.8,eyeCrouch:.45,walk:3.2,run:5,jumpV:3.9,gravity:14},ba={fist:{ammo:null,rate:.5,melee:!0,dmgMin:8,dmgMax:24,knock:.12},pistol:{ammo:"bullets",rate:.42,pellets:1,spread:.025,dmgMin:5,dmgMax:15,knock:.03,shake:.6},shotgun:{ammo:"shells",rate:.95,pellets:7,spread:.1,dmgMin:5,dmgMax:15,knock:.045,shake:2.2}},Xi=["fist","pistol","shotgun"],Vf={bullets:"BULLETS",shells:"SHELLS"},vs={imp:{hp:40,speed:1.7,radius:.35,painChance:.75,ranged:!0,melee:!1,h:.85,attackDmg:[8,20]},gnasher:{hp:110,speed:2.9,radius:.42,painChance:.5,ranged:!1,melee:!0,h:.7,attackDmg:[4,16],fleeBelow:.4},knight:{hp:400,speed:1.9,radius:.48,painChance:.2,ranged:!0,melee:!0,h:1.3,attackDmg:[10,26]},riley:{hp:900,speed:2.4,radius:.4,painChance:.12,ranged:!0,melee:!0,h:.95,attackDmg:[10,20],boss:!0}},Wf={i:"imp",g:"gnasher",K:"knight",Y:"riley"},Xf={h:{msg:"PICKED UP A STIMPACK.",snd:"health"},"+":{msg:"PICKED UP A MEDIKIT.",snd:"health"},b:{msg:"PICKED UP A CLIP.",snd:"pickup"},a:{msg:"PICKED UP A BOX OF SHELLS.",snd:"pickup"},A:{msg:"PICKED UP THE ARMOR!",snd:"pickup"},2:{msg:"YOU GOT THE SHOTGUN!",snd:"weaponUp"},r:{msg:"PICKED UP THE RED KEYCARD.",snd:"keyPickup"},u:{msg:"PICKED UP THE BLUE KEYCARD.",snd:"keyPickup"},P:{msg:"PHOENIX ORB! YOU FEEL REBORN!",snd:"orb"}},Hr=[{name:"ROOKIE",dmg:.5,ammo:2,desc:"DEMONS HIT HALF AS HARD AND AMMO IS DOUBLED. GREAT FOR A FIRST RUN."},{name:"WARRIOR",dmg:1,ammo:1,desc:"THE FIGHT AS IT WAS MEANT TO BE."},{name:"INFERNO",dmg:1.5,ammo:1,desc:"DEMONS HIT HARDER. FOR VETERANS WHO KNOW EVERY CORNER."}],qf={run:"TIP: HOLD SHIFT TO RUN.",jump:"TIP: SPACE JUMPS. C CROUCHES. LOOK UP AND DOWN WITH THE MOUSE.",map:"TIP: LOST? PRESS TAB FOR THE MAP.",weapons:"TIP: PRESS 1 2 3, OR SCROLL THE MOUSE WHEEL, TO SWITCH WEAPONS. Q SWAPS BACK.",key:"TIP: THE MATCHING DOOR IS MARKED IN COLOR ON YOUR MAP (TAB).",lowAmmo:"TIP: LOW ON AMMO? YOUR FIST (1) NEVER RUNS OUT, AND IT IS SILENT.",lowHealth:"TIP: LOW HEALTH! BACK OFF AND LOOK FOR STIMPACKS AND MEDIKITS.",hurtDir:"TIP: THE RED MARKS AROUND YOUR AIM POINT AT WHATEVER HIT YOU.",secret:"TIP: WALLS WITH A CRACK MAY HIDE SECRETS. PRESS E ON THEM.",torches:"TIP: A PAIR OF TORCHES BESIDE A DOOR MEANS IT MATTERS. FOLLOW THEM.",lift:"TIP: STAND ON A GLOWING PLATFORM TO RIDE IT UP.",barrel:"TIP: A DEMON IS NEXT TO A BARREL. SHOOT THE BARREL!",meet_imp:"TIP: IMPS THROW FIREBALLS. STRAFE WITH A AND D TO DODGE.",meet_gnasher:"TIP: GNASHERS CHARGE AND BITE. BACK AWAY WHILE YOU SHOOT.",meet_knight:"TIP: THE EMBER KNIGHT IS TOUGH. KEEP YOUR DISTANCE AND USE SHELLS."};function Yf(i){i=i||{};var e=i.levels,t=i.rng||Math.random,n=i.storage||null,r=i.settings||{difficulty:1,tips:!1,seenTips:{}},s=i.onProgress||function(){},a={},o=!1,l="title",u=0,c=null,h=null;function f(){return t()}function p(d,T){return d+t()*(T-d)}function g(d,T,B){return d<T?T:d>B?B:d}function y(d,T,B,ie){var Q=d-B,re=T-ie;return Q*Q+re*re}function v(){return Hr[r.difficulty]||Hr[1]}function m(d,T,B,ie,Q,re){var pe={t:d,name:T,x:B,y:ie,z:Q};if(re)for(var Me in re)pe[Me]=re[Me];c.events.push(pe)}function _(d,T){T?m("sound",d,T.x,(T.y||0)+.5,T.z):m("sound",d,c.p.x,c.p.y+.8,c.p.z,{local:!0})}function L(d,T,B,ie){var Q=vs[d];return{kind:d,mob:!0,x:T,z:B,y:ie,hp:Q.hp,radius:Q.radius,speed:Q.speed,h:Q.h,state:"idle",st:0,animT:f(),cool:p(.5,1.5),moveAng:0,retarget:0,losT:f()*.3,los:!1,target:null,lostT:0,fleeNext:!1,strafeSide:f()<.5?1:-1,flashT:0}}function E(d){var T=d.map.join("");return{boss:T.indexOf("Y")>=0,keys:{red:T.indexOf("R")>=0||T.indexOf("r")>=0,blue:T.indexOf("U")>=0||T.indexOf("u")>=0}}}function C(d){return{hp:Math.max(d.hp,1),armor:d.armor,ammo:{bullets:d.ammo.bullets,shells:d.ammo.shells},shotgun:d.weapons.shotgun,weapon:d.weapon}}function P(d,T,B){u=d;var ie=e[d],Q=zf(ie),re=ie.map,pe=B||(T&&c?C(c.p):null),Me={x:0,z:0,y:0,ang:ie.playerAngle||0,pitch:0,vx:0,vz:0,vy:0,onGround:!0,crouch:!1,eyeH:ln.eye,hp:pe?pe.hp:100,armor:pe?pe.armor:0,ammo:pe?{bullets:pe.ammo.bullets,shells:pe.ammo.shells}:{bullets:50,shells:0},weapons:{fist:!0,pistol:!0,shotgun:pe?pe.shotgun:!1},keys:{red:!1,blue:!1},weapon:pe&&pe.shotgun?pe.weapon:"pistol",nextWeapon:null,prevWeapon:null,raiseT:.3,lowerT:0,cool:0,fireT:1,dead:!1,deadT:0,painT:0,grinT:0,dmgFlash:0,bonusFlash:0,jumpHeld:!1,landT:0};D(Me,Me.weapon)||(Me.weapon=k(Me));for(var Le=[],We=[],Qe=null,ut=0;ut<re.length;ut++)for(var Kt=0;Kt<re[0].length;Kt++){var Et=re[ut][Kt],an=Kt+.5,Jt=ut+.5,wt=dn(Q,Kt,ut);if(Et==="p")Me.x=an,Me.z=Jt,Me.y=wt;else if(Wf[Et]){var $t=L(Wf[Et],an,Jt,wt);$t.kind==="riley"&&ct($t),Le.push($t)}else Et==="o"?Le.push({kind:"barrel",mob:!0,barrel:!0,x:an,z:Jt,y:wt,hp:15,radius:.3,h:.55,state:"idle",st:0}):Et==="t"?Le.push({kind:"torch",x:an,z:Jt,y:wt,h:.95,animT:f()}):Xf[Et]?Le.push({kind:"pickup",item:Et,x:an,z:Jt,y:wt,h:.3,bob:f()*6}):Et==="*"&&We.push({x:Kt,z:ut,found:!1});Et==="X"&&(Qe={x:Kt,z:ut})}var Xt=0,qt=0;return Le.forEach(function(ht){ht.mob&&!ht.barrel&&Xt++,ht.kind==="pickup"&&qt++}),c={L:ie,W:Q,mw:Q.mw,mh:Q.mh,doors:Q.doors,ents:Le,p:Me,secrets:We,seen:new Uint8Array(Q.mw*Q.mh),msgs:[],events:[],time:0,notice:null,stats:{kills:0,totalKills:Xt,items:0,totalItems:qt,secrets:0,totalSecrets:We.length},exitT:-1,flow:new Int16Array(Q.mw*Q.mh),flowT:0,infightSeen:!1,boss:null,shotId:0,firing:!1,input:{strafe:0,moving:!1,vx:0,vz:0},startGear:pe,info:E(ie),exitCell:Qe,hurtDirs:[],hitT:0,killT:0,blockT:0,shake:0,hitstop:0,killer:null,tipQueue:[],tipT:3,usedMap:!1,ranT:0,jumped:!1,spotT:0,started:!0},Le.forEach(function(ht){ht.kind==="riley"&&(c.boss=ht)}),l="game",M(ie.name),x(I(),"#f0d848",3.5),c}function U(){var d=c.startGear;d&&(d={hp:Math.max(d.hp,100),armor:d.armor,ammo:{bullets:Math.max(d.ammo.bullets,50),shells:d.shotgun?Math.max(d.ammo.shells,8):d.ammo.shells},shotgun:d.shotgun,weapon:d.weapon}),P(u,!1,d)}function M(d,T,B){c.msgs.push({text:d,t:B||3,color:T}),c.msgs.length>4&&c.msgs.shift()}function x(d,T,B){c.notice={text:d,color:T||"#f0d848",t:B||2.5,max:B||2.5}}function w(d){c&&(c.shake=Math.min(6,Math.max(c.shake,d)))}function A(d){!c||!r.tips||r.seenTips&&r.seenTips[d]||c.tipQueue.indexOf(d)<0&&c.tipQueue.push(d)}function S(d){if(c.tipT-=d,!(c.tipT>0||!c.tipQueue.length)){var T=c.tipQueue.shift();r.seenTips[T]||(r.seenTips[T]=!0,i.saveSettings&&i.saveSettings(),M(qf[T],"#8fe0a0",6),c.tipT=7)}}function I(){if(!c)return"";var d=c.info,T=c.p;return d.keys.blue&&!T.keys.blue?"FIND THE BLUE KEYCARD":d.keys.red&&!T.keys.red?"FIND THE RED KEYCARD":d.boss?"DEFEAT RILEY":"FIND THE EXIT SWITCH"}function D(d,T){var B=ba[T];return!B.ammo||d.ammo[B.ammo]>0}function k(d){for(var T=Xi.length-1;T>=0;T--){var B=Xi[T];if(d.weapons[B]&&D(d,B))return B}return"fist"}function Y(d,T){if(l!=="game"||!c||c.p.dead)return!1;var B=c.p;return B.weapons[d]?D(B,d)?d===B.weapon?(B.nextWeapon&&!(B.lowerT>0)&&(B.nextWeapon=null),!1):d===B.nextWeapon?!1:(B.prevWeapon=B.weapon,B.nextWeapon=d,B.autoFist=!1,!0):(T||(M("NO "+Vf[ba[d].ammo]+" FOR THE "+d.toUpperCase()+"."),_("noAmmo")),!1):(T||M("YOU HAVEN'T FOUND THE "+d.toUpperCase()+" YET."),!1)}function j(d){for(var T=c.p,B=Xi.indexOf(T.nextWeapon||T.weapon),ie=1;ie<Xi.length;ie++){var Q=Xi[(B+d*ie+Xi.length*2)%Xi.length];if(T.weapons[Q]&&D(T,Q)){Y(Q,!0);return}}}function se(){var d=c.p;d.prevWeapon&&d.prevWeapon!==d.weapon&&d.weapons[d.prevWeapon]&&D(d,d.prevWeapon)?Y(d.prevWeapon,!0):j(-1)}function ne(){return c.p.y+c.p.eyeH}function le(d,T){return Math.sqrt(y(d,T,c.p.x,c.p.z))}function ae(d,T,B,ie,Q,re){for(var pe=c.p,Me=Math.cos(T),Le=Math.cos(d)*Me,We=Math.sin(d)*Me,Qe=Math.sin(T),ut=pe.x,Kt=ne(),Et=pe.z,an=Q?1.4:40,Jt=Go(c.W,ut,Kt,Et,Le,Qe,We,an),wt=null,$t=Jt.dist+.05,Xt=0;Xt<c.ents.length;Xt++){var qt=c.ents[Xt];if(!(!qt.mob||qt.state==="die"||qt.state==="dead"||qt.gone)){var ht=we(ut,Kt,Et,Le,Qe,We,qt);ht!==null&&ht>.1&&ht<$t&&(wt=qt,$t=ht)}}var ti=B+f()*(ie-B)|0;if(wt){if(it(wt,ti),!wt.barrel){wt.kind==="riley"&&wt.shieldT>0?c.blockT=.2:wt.state==="die"?(c.killT=.3,c.hitstop=Math.max(c.hitstop,.045)):c.hitT=Math.max(c.hitT,.14);var Vi=vs[wt.kind];if(re&&!Vi.boss){var Un=re*(Vi.hp>200?.25:1);Fr(c.W,wt,Math.cos(d)*Un,Math.sin(d)*Un,wt.radius,wt.h,Wn)}}m("fx",wt.barrel||wt.kind==="riley"?"spark":"blood",ut+Le*$t,Kt+Qe*$t,Et+We*$t,{dx:-Le,dy:-Qe,dz:-We})}else!Q&&Jt.kind!=="none"?m("fx","puff",Jt.x-Le*.03,Jt.y-Qe*.03,Jt.z-We*.03,{surface:Jt.kind}):Q&&_("whiff");return wt}function we(d,T,B,ie,Q,re,pe){var Me=pe.radius+.06,Le=d-pe.x,We=B-pe.z,Qe=ie*ie+re*re,ut=2*(Le*ie+We*re),Kt=Le*Le+We*We-Me*Me;if(Qe<1e-9)return null;var Et=ut*ut-4*Qe*Kt;if(Et<0)return null;var an=Math.sqrt(Et),Jt=(-ut-an)/(2*Qe),wt=(-ut+an)/(2*Qe),$t=Jt>0?Jt:wt;if($t<0)return null;var Xt=T+Q*$t;if(Xt>=pe.y&&Xt<=pe.y+pe.h)return $t;if(Math.abs(Q)>1e-6){var qt=((Q<0?pe.y+pe.h:pe.y)-T)/Q;if(qt>0){var ht=d+ie*qt-pe.x,ti=B+re*qt-pe.z;if(ht*ht+ti*ti<=Me*Me)return qt}}return null}function Ee(d){return!!d&&!d.gone&&d.state!=="die"&&d.state!=="dead"}function it(d,T,B){if(!(d.state==="die"||d.state==="dead")&&!(d.kind==="riley"&&ue(d,B))){if(d.hp-=T,d.flashT=.07,d.barrel){d.blame=Ee(B)?B:null,d.hp<=0&&d.state!=="boom"&&(d.state="boom",d.st=.08);return}var ie=vs[d.kind];_e(d),ie.boss||(B&&B!==d&&Ee(B)&&!B.barrel?(d.target!==B&&!c.infightSeen&&le(d.x,d.z)<14&&(c.infightSeen=!0,M("THE DEMONS TURN ON EACH OTHER!")),d.target=B,d.lostT=0):B||(d.target=null)),d.hp<=0?(d.state="die",d.st=0,c.stats.kills++,ie.boss||_("enemyDie",d),m("fx","gib",d.x,d.y+d.h*.6,d.z,{kind:d.kind})):f()<ie.painChance&&!(ie.boss&&d.state==="windup")&&(d.state="pain",d.st=ie.boss?.25:.35,ie.fleeBelow&&d.hp<ie.hp*ie.fleeBelow&&(d.fleeNext=!0),_("enemyPain",d)),d.kind==="riley"&&xe(d)}}function ge(d){d.state="dead",d.dead=!0,d.gone=!0,_("barrelBoom",d),m("fx","explosion",d.x,d.y+.3,d.z);for(var T=2.3,B=Ee(d.blame)?d.blame:null,ie=0;ie<c.ents.length;ie++){var Q=c.ents[ie];if(!(!Q.mob||Q===d||Q.state==="dead"||Q.state==="die")){var re=Math.sqrt(y(Q.x,Q.z,d.x,d.z)+Math.pow(Q.y-d.y,2));re<T&&gr(c.W,d.x,d.y+.3,d.z,Q.x,Q.y+Q.h/2,Q.z)&&(Q.barrel?Q.state!=="boom"&&(Q.state="boom",Q.st=p(.1,.25),Q.blame=B):it(Q,(T-re)/T*90|0,B))}}me(d.x,d.z,10);var pe=Math.sqrt(y(c.p.x,c.p.z,d.x,d.z)+Math.pow(c.p.y-d.y,2));w(6/(1+pe*.35)),pe<T&&gr(c.W,d.x,d.y+.3,d.z,c.p.x,ne(),c.p.z)&&oe((T-pe)/T*70|0,d)}function oe(d,T){var B=c.p;if(!(B.dead||d<=0||c.exitT>=0)){if(d=Math.max(1,Math.round(d*v().dmg)),T){var ie=Math.atan2(T.z-B.z,T.x-B.x);c.hurtDirs.push({ang:ie,t:1}),c.hurtDirs.length>6&&c.hurtDirs.shift();var Q=Math.atan2(Math.sin(ie-B.ang),Math.cos(ie-B.ang));Math.abs(Q)>.9&&A("hurtDir"),c.killer=T.kind}var re=Math.min(B.armor,Math.ceil(d/3));B.armor-=re,d-=re,B.hp-=d,B.dmgFlash=Math.min(.65,B.dmgFlash+d/55),w(Math.min(4,1+d/8)),B.painT=.6,B.hp<=0?(B.hp=0,B.dead=!0,B.deadT=0,_("playerDie"),F(c.boss)&&(b(c.boss,Qt.default.line("playerDied",c.boss.profile)),O(c.boss,!1))):(_("playerPain"),B.hp<30&&A("lowHealth"))}}function G(d,T,B,ie,Q,re,pe){var Me=d.y+d.h*.65,Le=B-d.x,We=ie-Me,Qe=Q-d.z,ut=Math.sqrt(Le*Le+We*We+Qe*Qe)||1,Kt=re||(T?5.5:7);c.ents.push({kind:"proj",x:d.x+Le/ut*.5,y:Me+We/ut*.5,z:d.z+Qe/ut*.5,vx:Le/ut*Kt,vy:We/ut*Kt,vz:Qe/ut*Kt,h:.2,green:!!T,animT:0,owner:d,dmg:pe||(T?p(10,28):p(7,20))}),_(d.kind==="riley"?"rileyShoot":"impShoot",d)}function Z(d,T,B){return!mr(c.W,T,B)}function fe(d,T,B){var ie=c.W,Q=ii(ie,T,B);if(Q!==0){if(!fi[Q])return!1;var re=pr(ie,T,B);if(!(re.open>=.9||!re.locked&&!re.secret))return!1}return ie.floor[B*ie.mw+T]-ie.floor[d]<=Wn+1e-4}function me(d,T,B){var ie=new Int16Array(c.mw*c.mh);yu(c.W,d,T,B,Z,ie);for(var Q=0;Q<c.ents.length;Q++){var re=c.ents[Q];!re.mob||re.barrel||re.state!=="idle"||vs[re.kind].boss||ie[Math.floor(re.z)*c.mw+Math.floor(re.x)]>=0&&_e(re)}}function _e(d){d.state==="idle"&&(d.state="chase",d.st=0,_(d.kind==="knight"?"knightSight":d.kind==="riley"?"rileySight":"impSight",d))}function He(){yu(c.W,c.p.x,c.p.z,9999,function(d,T,B){var ie=d,Q=c.W,re=ii(Q,T,B);if(re!==0){if(!fi[re])return!1;var pe=pr(Q,T,B);if(!(pe.open>=.9||!pe.locked&&!pe.secret))return!1}return Q.floor[ie]-Q.floor[B*Q.mw+T]<=Wn+1e-4},c.flow)}function Je(d){var T=c.mw,B=Math.floor(d.x),ie=Math.floor(d.z),Q=c.flow[ie*T+B];if(Q<=0)return null;for(var re=-1,pe=-1,Me=0;Me<4;Me++){var Le=B+(Me===0?1:Me===1?-1:0),We=ie+(Me===2?1:Me===3?-1:0);if(!(Le<0||We<0||Le>=T||We>=c.mh)){var Qe=c.flow[We*T+Le];Qe>=0&&Qe<Q&&(Q=Qe,re=Le,pe=We)}}return re<0?null:Math.atan2(pe+.5-d.z,re+.5-d.x)}function Oe(d,T){d.state==="closed"||d.state==="closing"?(d.state="opening",T&&(d.used=!0),_("doorOpen",{x:d.x+.5,y:dn(c.W,d.x,d.z),z:d.z+.5}),d.secret&&!d.found&&(d.found=!0)):T&&d.state==="open"&&(d.state="closing",_("doorClose",{x:d.x+.5,y:dn(c.W,d.x,d.z),z:d.z+.5}))}function je(d,T,B,ie,Q){return d+B>ie&&d-B<ie+1&&T+B>Q&&T-B<Q+1}function dt(d){if(je(c.p.x,c.p.z,ln.r,d.x,d.z))return!0;for(var T=0;T<c.ents.length;T++){var B=c.ents[T];if(B.mob&&!B.barrel&&B.state!=="dead"&&B.state!=="die"&&je(B.x,B.z,B.radius,d.x,d.z))return!0}return!1}function et(d){for(var T in c.doors){var B=c.doors[T];if(B.state==="opening")B.open+=d*1.6,B.open>=1&&(B.open=1,B.state="open",B.timer=B.secret?9999:4);else if(B.state==="open")B.timer-=d,B.timer<=0&&!dt(B)&&(B.state="closing",_("doorClose",{x:B.x+.5,y:0,z:B.z+.5}));else if(B.state==="closing"){if(dt(B)){B.state="opening";continue}B.open-=d*1.6,B.open<=0&&(B.open=0,B.state="closed")}}}function vt(d,T,B){return je(d.x,d.z,(d.radius||ln.r)*.7,T,B)&&Math.abs(d.y-dn(c.W,T,B))<.05}function Ct(d){var T=c.p;Gf(c.W,d,function(B,ie){if(vt(T,B,ie))return!0;for(var Q=0;Q<c.ents.length;Q++){var re=c.ents[Q];if(re.mob&&Ee(re)&&vt(re,B,ie))return!0}return!1},function(B,ie){_(ie==="start"?"doorOpen":"doorClose",{x:B.x+.5,y:B.pos,z:B.z+.5})}),c.W.lifts.forEach(function(B){B.moved&&[T].concat(c.ents).forEach(function(ie){(ie===T||ie.mob&&Ee(ie))&&je(ie.x,ie.z,(ie.radius||ln.r)*.7,B.x,B.z)&&Math.abs(ie.y-(B.pos-B.moved))<.06&&(ie.y=B.pos)})})}function Wt(){for(var d=c.p,T=Math.cos(d.ang),B=Math.sin(d.ang),ie=.4;ie<=1.3;ie+=.3){var Q=Math.floor(d.x+T*ie),re=Math.floor(d.z+B*ie),pe=ii(c.W,Q,re);if(pe!==0){if(fi[pe]){var Me=pr(c.W,Q,re);if(Me.open>=.9&&Me.state==="open"&&Math.floor(d.x)===Q&&Math.floor(d.z)===re)continue;return{kind:"door",door:Me}}return pe===9?{kind:"switch",x:Q,z:re}:null}}return null}function Mt(){if(!c||c.p.dead||c.exitT>=0)return null;var d=Wt();if(!d)return null;if(d.kind==="switch")return{verb:"EXIT LEVEL",color:"#58e068"};var T=d.door;return T.secret&&!T.found?null:T.locked&&!c.p.keys[T.locked]?{need:T.locked,text:T.locked.toUpperCase()+" KEYCARD NEEDED",color:T.locked==="red"?"#ff5a3a":"#6a98ff"}:T.state==="closed"||T.state==="closing"?{verb:"OPEN",color:"#e8e0c8"}:null}function Ot(){var d=Wt();if(d){var T=c.p;if(d.kind==="door"){var B=d.door;B.locked&&!T.keys[B.locked]?(_("locked"),M("YOU NEED THE "+B.locked.toUpperCase()+" KEYCARD."),A("key")):Oe(B,!0)}else d.kind==="switch"&&(c.W.cells[d.z*c.mw+d.x]=10,_("switchFlip"),x("LEVEL COMPLETE!","#58e068",2),c.exitT=.8)}}function X(d){d.y=zo(c.W,d.x,d.z,d.radius*.6)}function Ht(d,T){var B=c.p,ie=vs[d.kind];d.animT+=T,d.st-=T,d.cool-=T,d.flashT-=T,d.target&&!Ee(d.target)&&(d.target=null,d.cool=Math.min(d.cool,.4));var Q=d.target,re=Q?Q.x:B.x,pe=Q?Q.z:B.z,Me=Q?Q.y+Q.h*.6:B.y+B.eyeH*.8;d.losT-=T,d.losT<=0&&(d.losT=.2+f()*.1,d.los=gr(c.W,d.x,d.y+d.h*.8,d.z,re,Me,pe));var Le=re-d.x,We=pe-d.z,Qe=Math.sqrt(Le*Le+We*We);if(Q&&(d.lostT=d.los?0:d.lostT+T,d.lostT>4)){d.target=null,d.lostT=0;return}if(d.state==="idle"){d.los&&Qe<9&&!B.dead&&_e(d);return}if(d.state==="pain"){d.st<=0&&(d.fleeNext?(d.fleeNext=!1,d.state="flee",d.st=p(.9,1.6),d.moveAng=Math.atan2(-We,-Le)+p(-.6,.6)):d.state="chase");return}if(d.state==="flee"){Fr(c.W,d,Math.cos(d.moveAng)*d.speed*1.1*T,Math.sin(d.moveAng)*d.speed*1.1*T,d.radius,d.h,Wn)||(d.moveAng+=(f()<.5?1:-1)*Math.PI/2),X(d),d.st<=0&&(d.state="chase",d.cool=0,d.retarget=0,_("impSight",d));return}if(d.state==="die"){d.st<=-.5&&(d.state="dead");return}if(d.state!=="dead"){if(d.state==="windup"){if(d.st<=0){if(d.state="chase",!Q&&B.dead)return;if(ie.melee&&Qe<1.9&&Math.abs(Me-(d.y+d.h*.5))<1.2){if(d.los){var ut=ie.attackDmg[0]+f()*(ie.attackDmg[1]-ie.attackDmg[0])|0;Q?it(Q,ut,d):oe(ut,d),_("punch",d)}}else ie.ranged&&d.los&&G(d,d.kind==="knight",re,Me,pe);d.cool=p(.9,1.9)}return}if(!(!Q&&B.dead)){d.detourT=(d.detourT||0)-T,d.pathT=(d.pathT||0)-T;var Kt=!Q&&Math.abs(B.y-d.y)>Wn,Et=!Q&&(!d.los||d.pathT>0||Kt)&&d.detourT<=0?Je(d):null;if(d.retarget-=T,Et!==null)d.moveAng=Et;else if(d.retarget<=0){d.retarget=p(.35,.8);var an=Math.atan2(We,Le);ie.ranged&&!ie.melee&&d.los&&Qe<7?(f()<.3&&(d.strafeSide=-d.strafeSide),d.moveAng=an+d.strafeSide*p(1.1,1.8)):d.moveAng=an+(Qe>2.2?p(-.7,.7):p(-.25,.25))}var Jt=ie.melee?.95:1.6;if(Qe>Jt){var wt=d.x,$t=d.z,Xt=Fr(c.W,d,Math.cos(d.moveAng)*d.speed*T,Math.sin(d.moveAng)*d.speed*T,d.radius,d.h,Wn);if(!Xt&&Et!==null){var qt=Math.floor(d.x)+.5-d.x,ht=Math.floor(d.z)+.5-d.z;Fr(c.W,d,qt*Math.min(1,T*6),ht*Math.min(1,T*6),d.radius,d.h,Wn)}else if(!Xt){var ti=Math.floor(d.x+Math.cos(d.moveAng)*.7),Vi=Math.floor(d.z+Math.sin(d.moveAng)*.7),Un=pr(c.W,ti,Vi);Un&&!Un.locked&&!Un.secret&&Un.state==="closed"&&Oe(Un,!1),d.moveAng+=(f()<.5?1:-1)*Math.PI/2*p(.6,1.2),d.retarget=p(.25,.5),d.pathT=.8}for(var On=0;On<c.ents.length;On++){var Vn=c.ents[On];if(!(Vn===d||!Vn.mob||Vn.state==="dead"||Vn.state==="die"||Vn.gone)){var Wi=d.x-Vn.x,R=d.z-Vn.z,q=Wi*Wi+R*R,ce=d.radius+(Vn.radius||.3);if(q>1e-4&&q<ce*ce&&Math.abs(Vn.y-d.y)<.5){var ee=Math.sqrt(q),te=(ce-ee)*.5;Or(c.W,d.x+Wi/ee*te,d.z+R/ee*te,d.radius,d.y,d.h,Wn).blocked||(d.x+=Wi/ee*te,d.z+=R/ee*te)}}}var Ae=y(d.x,d.z,wt,$t),Ne=d.speed*T*.3;d.stuckT=Ae<Ne*Ne?(d.stuckT||0)+T:0,d.stuckT>.4&&(d.stuckT=0,d.detourT=p(.5,.9),d.moveAng+=(f()<.5?1:-1)*Math.PI/2,d.retarget=d.detourT),X(d)}d.cool<=0&&d.los&&(ie.melee&&Qe<1.4&&Math.abs(Me-(d.y+d.h*.5))<1.2?(d.state="windup",d.st=.35):ie.ranged&&Qe>1.2&&Qe<14&&f()<T*1.4&&(d.state="windup",d.st=.45))}}}function ct(d){var T=Qt.default.recall(n);d.mem=T,d.tune=Qt.default.tuning(T),d.hp=d.maxHp=Math.round(vs.riley.hp*d.tune.hpScale),d.profile=Qt.default.newProfile(),d.phase=1,d.cools={volley:1,lead:3,summon:8,shield:5,melee:0},d.move=null,d.moveT=0,d.shieldT=0,d.talkT=0,d.flankSide=1,d.attack=null,d.settled=!1}function F(d){return!!d&&d.state!=="idle"&&Ee(d)}function b(d,T,B){return!T||B&&d.talkT>0?!1:(M("RILEY: "+T,"#6fe0ec",4.5),_("rileyTalk"),d.talkT=3.5,!0)}function N(d){var T=d.mem;b(d,Qt.default.line("intro",d.profile,{memory:T.fights>0?T:null})),T.ease>0?b(d,Qt.default.line("ease",d.profile)):d.tune.practised&&b(d,Qt.default.line("studied",d.profile,{wins:T.wins}))}function O(d,T){d.settled||(d.settled=!0,Qt.default.save(n,Qt.default.settle(d.mem,d.profile,T)))}function H(){var d=0;return c.ents.forEach(function(T){T.summoned&&Ee(T)&&d++}),d}function z(d){for(var T=0,B=0;B<30&&T<2;B++){var ie=f()*Math.PI*2,Q=p(1.5,3.5),re=d.x+Math.cos(ie)*Q,pe=d.z+Math.sin(ie)*Q,Me=zo(c.W,re,pe,.3);if(!(Or(c.W,re,pe,.4,Me,.85,0).blocked||le(re,pe)<3||!gr(c.W,d.x,d.y+.5,d.z,re,Me+.5,pe))){var Le=L("imp",re,pe,Me);Le.summoned=!0,Le.state="chase",c.ents.push(Le),c.stats.totalKills++,m("fx","summon",re,Me+.4,pe),T++}}T&&(b(d,Qt.default.line("summon",d.profile)),_("rileySight",d)),d.cools.summon=18*d.tune.coolScale}function $(d,T,B,ie){var Q={los:d.los,dist:T,phase:d.phase,cool:d.cools,impsAlive:H(),playerWeapon:c.p.weapon},re=Qt.default.choose(Qt.default.legalMoves(Q),d.profile,Q,t);d.move=re.move,b(d,Qt.default.insight(d.profile,re.why),!0);var pe=d.profile;switch(re.move){case"volley":case"lead":d.state="windup",d.attack=re.move,d.st=re.move==="volley"?.55:.4,d.moveT=d.st+.2;break;case"backoff":d.moveT=1,d.moveAng=Math.atan2(-ie,-B)+p(-.5,.5);break;case"flank":d.flankSide=Qt.default.strafeHabit(pe)>.3?Qt.default.strafeSide(pe):f()<.5?1:-1,d.moveT=1.3;break;case"close":d.moveT=1.2;break;case"seek":d.moveT=.8;break;case"summon":z(d),d.moveT=.8;break;case"shield":d.shieldT=1.6,d.moveT=1.2,d.cools.shield=8*d.tune.coolScale,_("rileyShield",d);break}}function V(d,T){var B=c.p,ie=d.tune,Q=ie.coolScale*(d.phase>=3?.7:1);if(d.attack==="melee"){T<1.9&&d.los&&(oe(p(10,20)*ie.dmgScale|0,d),_("punch",d)),d.cools.melee=1.2;return}if(d.los){var re=B.y+B.eyeH*.8,pe=Math.atan2(B.z-d.z,B.x-d.x);if(d.attack==="volley"){for(var Me=-1;Me<=1;Me++){var Le=pe+Me*.2;G(d,!0,d.x+Math.cos(Le)*T,re,d.z+Math.sin(Le)*T,6.5,p(8,16)*ie.dmgScale)}d.cools.volley=p(1.6,2.4)*Q}else if(d.attack==="lead"){var We=9,Qe=T/We;G(d,!0,B.x+c.input.vx*Qe,re,B.z+c.input.vz*Qe,We,p(10,18)*ie.dmgScale),d.cools.lead=p(1.8,2.8)*Q}}}function K(d,T){var B=c.p,ie=d.profile;d.animT+=T,d.st-=T,d.talkT-=T,d.shieldT-=T,d.moveT-=T,d.flashT-=T;for(var Q in d.cools)d.cools[Q]-=T;d.losT-=T,d.losT<=0&&(d.losT=.15,d.los=gr(c.W,d.x,d.y+d.h*.85,d.z,B.x,ne(),B.z));var re=B.x-d.x,pe=B.z-d.z,Me=Math.sqrt(re*re+pe*pe);if(d.state==="idle"){d.los&&!B.dead&&(_e(d),N(d));return}if(d.state==="die"){d.st<=-1.2&&(d.state="dead");return}if(!(d.state==="dead"||B.dead)){if(Qt.default.observe(ie,{dt:T,los:d.los,dist:Me,strafe:c.input.strafe,moving:c.input.moving}),d.state==="pain"){d.st<=0&&(d.state="chase");return}if(d.state==="windup"){d.st<=0&&(d.state="chase",V(d,Me));return}if(Me<1.3&&d.los&&d.cools.melee<=0){d.state="windup",d.attack="melee",d.st=.3;return}if(!(d.moveT<=0&&($(d,Me,re,pe),d.state==="windup"))){var Le=Math.atan2(pe,re),We=null;switch(d.move){case"backoff":We=d.moveAng;break;case"close":We=Le;break;case"flank":case"shield":We=Le+d.flankSide*1.35;break;case"seek":We=Je(d),We===null&&(We=Le);break}if(We!==null){var Qe=d.speed*(d.phase>=3?1.25:1)*T;Fr(c.W,d,Math.cos(We)*Qe,Math.sin(We)*Qe,d.radius,d.h,Wn)||(d.flankSide=-d.flankSide,d.moveAng+=Math.PI/2),X(d)}}}}function ue(d,T){if(d.shieldT>0)return m("fx","spark",d.x,d.y+.5,d.z),_("rileyShield",d),!0;if(c.firing&&d.lastShot!==c.shotId&&(d.lastShot=c.shotId,d.profile.hits++),T&&!T.barrel&&T.kind==="imp"){var B=T.target===d?"impsTurned":"friendlyFire";d.profile.said[B]||(d.profile.said[B]=!0,b(d,Qt.default.line(B,d.profile)))}return!1}function xe(d){if(d.hp<=0){_("rileyDerez",d),b(d,Qt.default.line("defeated",d.profile)),O(d,!0),c.exitT=5;return}d.phase<3&&d.hp<d.maxHp*.33?(d.phase=3,b(d,Qt.default.line("phase3",d.profile))):d.phase<2&&d.hp<d.maxHp*.66&&(d.phase=2,b(d,Qt.default.line("phase2",d.profile)),z(d))}function de(){for(var d=c.p,T=ne(),B=12,ie=c.W,Q=Math.floor(d.x),re=Math.floor(d.z),pe=Math.max(0,re-B);pe<=Math.min(c.mh-1,re+B);pe++)for(var Me=Math.max(0,Q-B);Me<=Math.min(c.mw-1,Q+B);Me++){var Le=pe*c.mw+Me;c.seen[Le]||mr(ie,Me,pe)||gr(ie,d.x,T,d.z,Me+.5,dn(ie,Me,pe)+.4,pe+.5)&&(c.seen[Le]=1,Sa(ie,Me,pe).forEach(function(We){ie.cells[We.i]!==0&&(c.seen[We.i]=1)}))}}function ye(){de();var d=c.p,T=ne();function B(Me,Le){return y(Me.x,Me.z,d.x,d.z)<Le*Le&&gr(c.W,d.x,T,d.z,Me.x,(Me.y||0)+(Me.h||.3)*.6,Me.z)}for(var ie=0;ie<c.ents.length;ie++){var Q=c.ents[ie];if(Q.kind==="pickup"&&!Q.spotted&&(Q.item==="r"||Q.item==="u")&&B(Q,14)&&(Q.spotted=!0),Q.mob&&!Q.barrel&&Ee(Q)&&qf["meet_"+Q.kind]&&!r.seenTips["meet_"+Q.kind]&&B(Q,11)&&A("meet_"+Q.kind),Q.barrel&&!Q.gone&&!r.seenTips.barrel&&B(Q,10))for(var re=0;re<c.ents.length;re++){var pe=c.ents[re];if(pe.mob&&!pe.barrel&&Ee(pe)&&pe.state!=="idle"&&y(pe.x,pe.z,Q.x,Q.z)<4){A("barrel");break}}Q.kind==="torch"&&u===0&&c.time>20&&B(Q,5)&&A("torches")}c.W.lifts.forEach(function(Me){y(Me.x+.5,Me.z+.5,d.x,d.z)<16&&A("lift")})}function be(){var d=c.info,T=c.p,B,ie=d.keys.blue&&!T.keys.blue?"u":d.keys.red&&!T.keys.red?"r":null;if(ie){for(var Q=0;Q<c.ents.length;Q++){var re=c.ents[Q];if(re.kind==="pickup"&&re.item===ie&&!re.gone)return re.spotted?{x:re.x,y:re.y+.3,z:re.z}:null}return null}for(B in c.doors){var pe=c.doors[B];if(pe.locked&&!pe.used&&c.seen[pe.z*c.mw+pe.x])return{x:pe.x+.5,y:dn(c.W,pe.x,pe.z)+.8,z:pe.z+.5}}var Me=c.exitCell;return!d.boss&&Me&&c.seen[Me.z*c.mw+Me.x]?{x:Me.x+.5,y:.8,z:Me.z+.5}:null}function De(d){var T=c.p,B=Xf[d.item],ie=v().ammo,Q=null;switch(d.item){case"h":T.hp>=100?Q="HEALTH":T.hp=Math.min(100,T.hp+10);break;case"+":T.hp>=100?Q="HEALTH":T.hp=Math.min(100,T.hp+25);break;case"A":T.armor>=100?Q="ARMOR":(T.armor=100,T.grinT=1);break;case"b":T.ammo.bullets>=200?Q="BULLETS":T.ammo.bullets=Math.min(200,T.ammo.bullets+10*ie);break;case"a":T.ammo.shells>=50?Q="SHELLS":T.ammo.shells=Math.min(50,T.ammo.shells+4*ie);break;case"2":T.weapons.shotgun=!0,T.ammo.shells=Math.min(50,T.ammo.shells+8*ie),T.grinT=1.2,T.weapon!=="shotgun"&&Y("shotgun",!0),x("SHOTGUN!  PRESS 3","#ffd23e",2.5),A("weapons");break;case"r":case"u":var re=d.item==="r"?"red":"blue";T.keys[re]=!0,T.grinT=1,x(re.toUpperCase()+" KEYCARD",re==="red"?"#ff5a3a":"#6a98ff",2.5),A("key");break;case"P":T.hp=Math.min(200,T.hp+100),T.grinT=1.2;break}if(Q){d.touching=!0,M(Q+" ALREADY FULL","#8a8478",1.5);return}d.gone=!0,c.stats.items++,T.bonusFlash=Math.min(.35,T.bonusFlash+.22),_(B.snd),m("fx","pickup",d.x,d.y+.3,d.z,{item:d.item}),M(B.msg),T.autoFist&&(d.item==="b"||d.item==="a")&&(T.autoFist=!1,Y(k(T),!0))}function Ge(d){var T=c.p;if(T.dead){T.deadT+=d,T.eyeH=Math.max(.15,T.eyeH-d*1.2);return}var B=!!a.KeyC;if(!B&&T.crouch){var ie=Or(c.W,T.x,T.z,ln.r,T.y,ln.h,0);ie.blocked||(T.crouch=!1)}else T.crouch=B;var Q=T.crouch?ln.hCrouch:ln.h,re=T.crouch?ln.eyeCrouch:ln.eye;T.eyeH+=(re-T.eyeH)*Math.min(1,d*14);var pe=a.ShiftLeft||a.ShiftRight,Me=0,Le=0;(a.KeyW||a.ArrowUp)&&(Me+=1),(a.KeyS||a.ArrowDown)&&(Me-=1),a.KeyA&&(Le-=1),a.KeyD&&(Le+=1),a.ArrowLeft&&(T.ang-=2.6*d),a.ArrowRight&&(T.ang+=2.6*d),a.PageUp&&(T.pitch+=1.6*d),a.PageDown&&(T.pitch-=1.6*d),T.pitch=g(T.pitch,-1.3,1.3),Me&&Le&&(Me*=.7071,Le*=.7071);var We=T.crouch?ln.walk*.5:pe?ln.run:ln.walk,Qe=Math.cos(T.ang),ut=Math.sin(T.ang),Kt=(Qe*Me-ut*Le)*We,Et=(ut*Me+Qe*Le)*We,an=T.onGround?14:3;T.vx+=(Kt-T.vx)*Math.min(1,d*an),T.vz+=(Et-T.vz)*Math.min(1,d*an),a.Space&&!T.jumpHeld&&T.onGround&&!T.crouch&&(T.vy=ln.jumpV,T.onGround=!1,c.jumped=!0,_("jump")),T.jumpHeld=!!a.Space;var Jt=T.x,wt=T.z,$t=T.onGround?Wn:Math.max(0,Math.min(xu,.12));Fr(c.W,T,T.vx*d,T.vz*d,ln.r,Q,$t),pe&&(Me||Le)&&(c.ranT+=d);var Xt=zo(c.W,T.x,T.z,ln.r),qt=Or(c.W,T.x,T.z,ln.r,Math.max(T.y,Xt),Q,10).ceil;T.onGround&&Xt<T.y-.02&&Xt>T.y-Wn?T.y=Xt:T.onGround&&Xt<T.y&&(T.onGround=!1),T.onGround&&Xt>T.y&&(T.y=Xt),T.onGround||(T.vy-=ln.gravity*d,T.y+=T.vy*d,qt!==void 0&&T.y+Q>qt&&(T.y=qt-Q,T.vy>0&&(T.vy=0)),T.y<=Xt&&(T.vy<-5&&(w(1.2),T.landT=.25),T.vy<-2&&_("land"),T.y=Xt,T.vy=0,T.onGround=!0)),c.input.strafe=Le,c.input.moving=T.x!==Jt||T.z!==wt,c.input.vx=(T.x-Jt)/d,c.input.vz=(T.z-wt)/d,u===0&&(c.time>14&&c.ranT<.3&&A("run"),c.time>25&&!c.jumped&&A("jump"),c.time>40&&!c.usedMap&&A("map"),c.time>70&&!c.stats.secrets&&A("secret")),a.KeyE?T.usedHeld||(T.usedHeld=!0,Ot()):T.usedHeld=!1,T.nextWeapon&&T.raiseT<=0&&!(T.lowerT>0)&&(T.lowerT=.15),T.lowerT>0&&(T.lowerT-=d,T.lowerT<=0&&(T.weapon=T.nextWeapon||T.weapon,T.nextWeapon=null,T.raiseT=.15)),T.raiseT>0&&(T.raiseT-=d),T.cool-=d,T.fireT+=d;var ht=ba[T.weapon];if(o&&T.cool<=0&&T.raiseT<=0&&T.lowerT<=0&&!T.nextWeapon&&c.exitT<0)if(ht.ammo&&T.ammo[ht.ammo]<=0){_("noAmmo");var ti=k(T);M("OUT OF "+Vf[ht.ammo]+"!"),Y(ti,!0)&&ti==="fist"&&(T.autoFist=!0),A("lowAmmo"),T.cool=.3}else{if(ht.ammo&&T.ammo[ht.ammo]--,T.cool=ht.rate,T.fireT=0,_(T.weapon==="fist"?"punch":T.weapon),T.weapon==="shotgun"&&_("pump"),ht.melee||(w(ht.shake),m("fx","muzzle",T.x+Math.cos(T.ang)*.4,ne()-.1,T.z+Math.sin(T.ang)*.4,{weapon:T.weapon})),F(c.boss)&&Qt.default.noteShot(c.boss.profile,T.weapon,le(c.boss.x,c.boss.z)),c.shotId++,c.firing=!0,ht.melee)ae(T.ang,T.pitch,ht.dmgMin,ht.dmgMax,!0,ht.knock);else for(var Vi=0;Vi<ht.pellets;Vi++)ae(T.ang+(f()-.5)*2*ht.spread,T.pitch+(f()-.5)*ht.spread,ht.dmgMin,ht.dmgMax,!1,ht.knock);c.firing=!1,ht.melee||me(T.x,T.z,14)}for(var Un=0;Un<c.ents.length;Un++){var On=c.ents[Un];On.kind!=="pickup"||On.gone||(y(On.x,On.z,T.x,T.z)<.45&&Math.abs(On.y-T.y)<.6?On.touching||De(On):On.touching=!1)}var Vn=Math.floor(T.x),Wi=Math.floor(T.z);c.secrets.forEach(function(R){!R.found&&R.x===Vn&&R.z===Wi&&(R.found=!0,c.stats.secrets++,_("secret"),x("SECRET AREA FOUND!","#ffd23e",2.5))})}function W(d){if(!(l!=="game"||!c)){var T=c.p;c.events.length=0,c.time+=d,T.dmgFlash=Math.max(0,T.dmgFlash-d*.8),T.bonusFlash=Math.max(0,T.bonusFlash-d*1.5),T.painT=Math.max(0,T.painT-d),T.grinT=Math.max(0,T.grinT-d),T.landT=Math.max(0,T.landT-d),c.shake=Math.max(0,c.shake-d*14);for(var B=0;B<c.msgs.length;B++)c.msgs[B].t-=d;for(;c.msgs.length&&c.msgs[0].t<=0;)c.msgs.shift();c.notice&&(c.notice.t-=d)<=0&&(c.notice=null),c.hitT-=d,c.killT-=d,c.blockT-=d;for(var ie=c.hurtDirs.length-1;ie>=0;ie--)(c.hurtDirs[ie].t-=d*.9)<=0&&c.hurtDirs.splice(ie,1);if(S(d),c.spotT-=d,c.spotT<=0&&(c.spotT=.3,ye()),c.exitT>=0&&(c.exitT-=d,c.exitT<=0)){h={name:c.L.name,time:c.time,par:c.L.par,kills:c.stats.kills,totalKills:c.stats.totalKills,items:c.stats.items,totalItems:c.stats.totalItems,secrets:c.stats.secrets,totalSecrets:c.stats.totalSecrets},s(u,h),l="inter";return}et(d),Ct(d),c.flowT-=d,c.flowT<=0&&(c.flowT=.25,He()),Ge(d);for(var Q=c.ents.length-1;Q>=0;Q--){var re=c.ents[Q];if(re.gone){c.ents.splice(Q,1);continue}if(re.kind==="torch"){re.animT+=d;continue}if(re.kind==="pickup"){re.bob+=d;continue}if(re.kind==="proj"){re.animT+=d;for(var pe=3,Me=!1,Le=0;Le<pe&&!Me;Le++){re.x+=re.vx*d/pe,re.y+=re.vy*d/pe,re.z+=re.vz*d/pe;var We=Math.floor(re.x),Qe=Math.floor(re.z),ut=mr(c.W,We,Qe)||re.y<dn(c.W,We,Qe)||re.y>Ri(c.W,We,Qe)?"wall":Se(re);!ut&&!T.dead&&y(re.x,re.z,T.x,T.z)<.2&&re.y>T.y-.1&&re.y<T.y+(T.crouch?ln.hCrouch:ln.h)+.1&&(ut="player"),ut&&(Me=!0,ut==="player"?(oe(re.dmg|0,{x:re.x-re.vx,z:re.z-re.vz,kind:re.owner?re.owner.kind:"imp"}),_("fireExplode")):(ut!=="wall"&&it(ut,re.dmg|0,re.owner),_("fireExplode",re)),m("fx",re.green?"greenBurst":"fireBurst",re.x,re.y,re.z),c.ents.splice(Q,1))}continue}if(re.barrel){re.state==="boom"&&(re.st-=d,re.st<=0&&ge(re));continue}re.kind==="riley"?K(re,d):re.mob&&Ht(re,d)}}}function Se(d){for(var T=0;T<c.ents.length;T++){var B=c.ents[T];if(!(!B.mob||B===d.owner||!Ee(B))&&!(!B.barrel&&d.owner&&B.kind===d.owner.kind)){var ie=B.radius+.1;if(y(d.x,d.z,B.x,B.z)<ie*ie&&d.y>=B.y-.1&&d.y<=B.y+B.h+.1)return B}}return null}function he(){var d=c.p,T=Math.cos(d.pitch),B=Math.cos(d.ang)*T,ie=Math.sin(d.ang)*T,Q=Math.sin(d.pitch),re=Go(c.W,d.x,ne(),d.z,B,Q,ie,40),pe=null,Me=re.dist;return c.ents.forEach(function(Le){if(!(!Le.mob||!Ee(Le))){var We=we(d.x,ne(),d.z,B,Q,ie,Le);We!==null&&We<Me&&(pe=Le,Me=We)}}),pe}var Te=!1;function Ie(){if(l==="inter"){if(!Te){Te=!0;return}Te=!1,u+1>=e.length?l="victory":P(u+1,!0)}else l==="victory"?l="title":l==="game"&&c&&c.p.dead&&c.p.deadT>1.2&&U()}function ve(){return{floorAt:function(d,T){return mr(c.W,d,T)&&!(pr(c.W,d,T)&&!pr(c.W,d,T).locked)?null:dn(c.W,d,T)},neighbours:function(d,T){var B=[],ie=dn(c.W,d,T);return Sa(c.W,d,T).forEach(function(Q){var re=ii(c.W,Q.x,Q.z);if(!(re!==0&&!fi[re])){var pe=dn(c.W,Q.x,Q.z)-ie,Me=pe<=.02&&pe>=-.02?"walk":pe<0?"drop":pe<=Wn?"step":pe<=xu?"jump":null;Me&&B.push({cx:Q.x,cz:Q.z,cost:Me==="jump"?2:1,kind:Me})}}),B}}}return{keys:a,state:function(){return c},mode:function(){return l},setMode:function(d){l=d},interStats:function(){return h},levelIndex:function(){return u},levels:e,update:W,startLevel:P,retryLevel:U,onEnter:Ie,setFire:function(d){o=!!d},switchWeapon:Y,cycleWeapon:j,quickSwitch:se,useTarget:Wt,usePrompt:Mt,useAction:Ot,objective:I,goalTarget:be,aimTarget:he,hurtPlayer:oe,walkGraph:ve,levelInfo:E,hasAmmo:D,settings:r,DIFFS:Hr}}var Zf=Ma(Kf(),1),s0={name:"E1M1: ASH GATES",floor:"slab",ceil:"ceilDark",par:90,playerAngle:0,ceilHeight:2.5,map:["#######################X######","####################..t.t....#","####################.........#","####################..i..+...#","####################....A....#","####################...L.....#","#######################U######","##....................t.t...##","##.t......%%......%%........##","##u...g......i..............##","##.t.......h.....g..........##","##..........................##","####################D#########","###*Pa#########....t.t......##","####S##########.....i.....o.##","##b......######..........io.##","##.......######......h......##","##..p....D........2.........##","##.......######..o..........##","##.......######.t.........t.##","##...h...#####################","##############################"],heights:["000000000000000000000000000000","000000000000000000008888888880","000000000000000000008888888880","000000000000000000008888888880","000000000000000000008888888880","000000000000000000008888888880","000000000000000000000000000000","000000000000000000000000000000","000000000000000000000000000000","000000000000000000000000000000","000000000001234444444444444400","000000000001234444444444444400","000000000000000000000000000000","000000000000000444444444444440","000000000000000444444444444440","000000000000000444444444444440","000000000000000446664444444440","000000000012344446664444444440","000000000000000446664444444440","000000000000000444444444444440","000000000000000000000000000000","000000000000000000000000000000"],ceilings:["..............................","....................iiiiiiiii.","....................iiiiiiiii.","....................iiiiiiiii.","....................iiiiiiiii.","....................iiiiiiiii.","..............................","..gggggggggggggggggggggggggg..","..gggggggggggggggggggggggggg..","..gggggggggggggggggggggggggg..","..gggggggggggggggggggggggggg..","..gggggggggggggggggggggggggg..","..............................","...............eeeeeeeeeeeeee.","...............eeeeeeeeeeeeee.","...............eeeeeeeeeeeeee.","...............eeeeeeeeeeeeee.",".........cccccceeeeeeeeeeeeee.","...............eeeeeeeeeeeeee.","...............eeeeeeeeeeeeee.","..............................",".............................."]},Br=[s0].concat(Zf.default.slice(1).map(function(i){return Object.assign({ceilHeight:2},i)}));function Jf(i){var e=i>>>0||1;return function(){e=e+1831565813|0;var t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Dd=0,th=1,Ud=2;var so=1,Od=2,Qs=3,Oi=0,xn=1,kn=2,oi=0,ea=1,ar=2,nh=3,ih=4,Fd=5;var rs=100,Hd=101,Bd=102,kd=103,zd=104,Gd=200,Vd=201,Wd=202,Xd=203,rh=204,sh=205,qd=206,Yd=207,Kd=208,Zd=209,Jd=210,jd=211,$d=212,Qd=213,ep=214,vl=0,_l=1,xl=2,Ns=3,yl=4,Ml=5,Sl=6,bl=7,Vl=0,tp=1,np=2,Mi=0,ao=1,oo=2,lo=3,ss=4,co=5,uo=6,ho=7,qu="attached",ip="detached",ah=300,Ir=301,as=302,Wl=303,Xl=304,fo=306,ai=1e3,si=1001,Ds=1002,zt=1003,ql=1004;var os=1005;var rn=1006,ta=1007;var Si=1008;var zn=1009,oh=1010,lh=1011,na=1012,Yl=1013,bi=1014,Kn=1015,yn=1016,Kl=1017,Zl=1018,ia=1020,ch=35902,uh=35899,hh=1021,fh=1022,Zn=1023,Pi=1026,Pr=1027,Jl=1028,jl=1029,Lr=1030,$l=1031;var Ql=1033,po=33776,mo=33777,go=33778,vo=33779,ec=35840,tc=35841,nc=35842,ic=35843,rc=36196,sc=37492,ac=37496,oc=37488,lc=37489,_o=37490,cc=37491,uc=37808,hc=37809,fc=37810,dc=37811,pc=37812,mc=37813,gc=37814,vc=37815,_c=37816,xc=37817,yc=37818,Mc=37819,Sc=37820,bc=37821,Tc=36492,Ec=36494,wc=36495,Ac=36283,Rc=36284,xo=36285,Cc=36286,Ic=2200,Pc=2201,rp=2202,Yr=2300,Kr=2301,pl=2302,Yu=2303,Wr=2400,Xr=2401,Ua=2402,Lc=2500,sp=2501,dh=0,yo=1,ra=2,ap=3200;var Mo=0,op=1,Jn="",kt="srgb",Ln="srgb-linear",Oa="linear",bt="srgb";var ml=7680;var lp=519,cp=512,up=513,hp=514,Nc=515,fp=516,dp=517,Dc=518,pp=519,ph=35044,sa=35048;var mh="300 es",_i=2e3,Us=2001;function a0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function o0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Os(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function mp(){let i=Os("canvas");return i.style.display="block",i}var jf={},Fs=null;function Fa(...i){let e="THREE."+i.shift();Fs?Fs("log",e,...i):console.log(e,...i)}function gp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function qe(...i){i=gp(i);let e="THREE."+i.shift();if(Fs)Fs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function $e(...i){i=gp(i);let e="THREE."+i.shift();if(Fs)Fs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function qr(...i){let e=i.join(" ");e in jf||(jf[e]=!0,qe(...i))}function vp(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var _p={[vl]:_l,[xl]:Sl,[yl]:bl,[Ns]:Ml,[_l]:vl,[Sl]:xl,[bl]:yl,[Ml]:Ns},yi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$f=1234567,Na=Math.PI/180,Zr=180/Math.PI;function xi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]).toLowerCase()}function mt(i,e,t){return Math.max(e,Math.min(t,i))}function gh(i,e){return(i%e+e)%e}function l0(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function c0(i,e,t){return i!==e?(t-i)/(e-i):0}function Da(i,e,t){return(1-t)*i+t*e}function u0(i,e,t,n){return Da(i,e,1-Math.exp(-t*n))}function h0(i,e=1){return e-Math.abs(gh(i,e*2)-e)}function f0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function d0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function p0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function m0(i,e){return i+Math.random()*(e-i)}function g0(i){return i*(.5-Math.random())}function v0(i){i!==void 0&&($f=i);let e=$f+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _0(i){return i*Na}function x0(i){return i*Zr}function y0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function M0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function S0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function b0(i,e,t,n,r){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),u=s((e+n)/2),c=a((e+n)/2),h=s((e-n)/2),f=a((e-n)/2),p=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*c,l*h,l*f,o*u);break;case"YZY":i.set(l*f,o*c,l*h,o*u);break;case"ZXZ":i.set(l*h,l*f,o*c,o*u);break;case"XZX":i.set(o*c,l*g,l*p,o*u);break;case"YXY":i.set(l*p,o*c,l*g,o*u);break;case"ZYZ":i.set(l*g,l*p,o*c,o*u);break;default:qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function vi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function It(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var vh={DEG2RAD:Na,RAD2DEG:Zr,generateUUID:xi,clamp:mt,euclideanModulo:gh,mapLinear:l0,inverseLerp:c0,lerp:Da,damp:u0,pingpong:h0,smoothstep:f0,smootherstep:d0,randInt:p0,randFloat:m0,randFloatSpread:g0,seededRandom:v0,degToRad:_0,radToDeg:x0,isPowerOfTwo:y0,ceilPowerOfTwo:M0,floorPowerOfTwo:S0,setQuaternionFromProperEuler:b0,normalize:It,denormalize:vi},Sh=class Sh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Sh.prototype.isVector2=!0;var Ye=Sh,En=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],u=n[r+1],c=n[r+2],h=n[r+3],f=s[a+0],p=s[a+1],g=s[a+2],y=s[a+3];if(h!==y||l!==f||u!==p||c!==g){let v=l*f+u*p+c*g+h*y;v<0&&(f=-f,p=-p,g=-g,y=-y,v=-v);let m=1-o;if(v<.9995){let _=Math.acos(v),L=Math.sin(_);m=Math.sin(m*_)/L,o=Math.sin(o*_)/L,l=l*m+f*o,u=u*m+p*o,c=c*m+g*o,h=h*m+y*o}else{l=l*m+f*o,u=u*m+p*o,c=c*m+g*o,h=h*m+y*o;let _=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=_,u*=_,c*=_,h*=_}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],l=n[r+1],u=n[r+2],c=n[r+3],h=s[a],f=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+c*h+l*p-u*f,e[t+1]=l*g+c*f+u*h-o*p,e[t+2]=u*g+c*p+o*f-l*h,e[t+3]=c*g-o*h-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(n/2),c=o(r/2),h=o(s/2),f=l(n/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*c*h+u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h-f*p*g;break;case"YXZ":this._x=f*c*h+u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h+f*p*g;break;case"ZXY":this._x=f*c*h-u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h-f*p*g;break;case"ZYX":this._x=f*c*h-u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h+f*p*g;break;case"YZX":this._x=f*c*h+u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h-f*p*g;break;case"XZY":this._x=f*c*h-u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h+f*p*g;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],u=t[2],c=t[6],h=t[10],f=n+o+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(a-r)*p}else if(n>o&&n>h){let p=2*Math.sqrt(1+n-o-h);this._w=(c-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+u)/p}else if(o>h){let p=2*Math.sqrt(1+o-n-h);this._w=(s-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+c)/p}else{let p=2*Math.sqrt(1+h-n-o);this._w=(a-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,u=t._z,c=t._w;return this._x=n*c+a*o+r*u-s*l,this._y=r*c+a*l+s*o-n*u,this._z=s*c+a*u+n*l-r*o,this._w=a*c-n*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let u=Math.acos(o),c=Math.sin(u);l=Math.sin(l*u)/c,t=Math.sin(t*u)/c,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},bh=class bh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*n),c=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+l*u+a*h-o*c,this.y=n+l*c+o*u-s*h,this.z=r+l*h+s*c-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Su.copy(this).projectOnVector(e),this.sub(Su)}reflect(e){return this.sub(Su.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};bh.prototype.isVector3=!0;var J=bh,Su=new J,Qf=new En,Th=class Th{constructor(e,t,n,r,s,a,o,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,u)}set(e,t,n,r,s,a,o,l,u){let c=this.elements;return c[0]=e,c[1]=r,c[2]=o,c[3]=t,c[4]=s,c[5]=l,c[6]=n,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],u=n[1],c=n[4],h=n[7],f=n[2],p=n[5],g=n[8],y=r[0],v=r[3],m=r[6],_=r[1],L=r[4],E=r[7],C=r[2],P=r[5],U=r[8];return s[0]=a*y+o*_+l*C,s[3]=a*v+o*L+l*P,s[6]=a*m+o*E+l*U,s[1]=u*y+c*_+h*C,s[4]=u*v+c*L+h*P,s[7]=u*m+c*E+h*U,s[2]=f*y+p*_+g*C,s[5]=f*v+p*L+g*P,s[8]=f*m+p*E+g*U,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return t*a*c-t*o*u-n*s*c+n*o*l+r*s*u-r*a*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],h=c*a-o*u,f=o*l-c*s,p=u*s-a*l,g=t*h+n*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=h*y,e[1]=(r*u-c*n)*y,e[2]=(o*n-r*a)*y,e[3]=f*y,e[4]=(c*t-r*l)*y,e[5]=(r*s-o*t)*y,e[6]=p*y,e[7]=(n*l-u*t)*y,e[8]=(a*t-n*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let l=Math.cos(s),u=Math.sin(s);return this.set(n*l,n*u,-n*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+t,0,0,1),this}scale(e,t){return qr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(bu.makeScale(e,t)),this}rotate(e){return qr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(bu.makeRotation(-e)),this}translate(e,t){return qr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(bu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Th.prototype.isMatrix3=!0;var tt=Th,bu=new tt,ed=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),td=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function T0(){let i={enabled:!0,workingColorSpace:Ln,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===bt&&(r.r=$i(r.r),r.g=$i(r.g),r.b=$i(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===bt&&(r.r=Ls(r.r),r.g=Ls(r.g),r.b=Ls(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Jn?Oa:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return qr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return qr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ln]:{primaries:e,whitePoint:n,transfer:Oa,toXYZ:ed,fromXYZ:td,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:e,whitePoint:n,transfer:bt,toXYZ:ed,fromXYZ:td,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}}),i}var st=T0();function $i(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ls(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var _s,Tl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{_s===void 0&&(_s=Os("canvas")),_s.width=e.width,_s.height=e.height;let r=_s.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=_s}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Os("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=$i(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($i(t[n]/255)*255):t[n]=$i(t[n]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},E0=0,Hs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=xi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Tu(r[a].image)):s.push(Tu(r[a]))}else s=Tu(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Tu(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Tl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}var w0=0,Eu=new J,pn=class i extends yi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=si,r=si,s=rn,a=Si,o=Zn,l=zn,u=i.DEFAULT_ANISOTROPY,c=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=xi(),this.name="",this.source=new Hs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Eu).x}get height(){return this.source.getSize(Eu).y}get depth(){return this.source.getSize(Eu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ah)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ai:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case Ds:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ai:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case Ds:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=ah;pn.DEFAULT_ANISOTROPY=1;var Eh=class Eh{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,u=l[0],c=l[4],h=l[8],f=l[1],p=l[5],g=l[9],y=l[2],v=l[6],m=l[10];if(Math.abs(c-f)<.01&&Math.abs(h-y)<.01&&Math.abs(g-v)<.01){if(Math.abs(c+f)<.1&&Math.abs(h+y)<.1&&Math.abs(g+v)<.1&&Math.abs(u+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let L=(u+1)/2,E=(p+1)/2,C=(m+1)/2,P=(c+f)/4,U=(h+y)/4,M=(g+v)/4;return L>E&&L>C?L<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(L),r=P/n,s=U/n):E>C?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=P/r,s=M/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=U/s,r=M/s),this.set(n,r,s,t),this}let _=Math.sqrt((v-g)*(v-g)+(h-y)*(h-y)+(f-c)*(f-c));return Math.abs(_)<.001&&(_=1),this.x=(v-g)/_,this.y=(h-y)/_,this.z=(f-c)/_,this.w=Math.acos((u+p+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Eh.prototype.isVector4=!0;var Pt=Eh,El=class extends yi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},s=new pn(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Hs(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},un=class extends El{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ha=class extends pn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var wl=class extends pn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Gl=class Gl{constructor(e,t,n,r,s,a,o,l,u,c,h,f,p,g,y,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,u,c,h,f,p,g,y,v)}set(e,t,n,r,s,a,o,l,u,c,h,f,p,g,y,v){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=u,m[6]=c,m[10]=h,m[14]=f,m[3]=p,m[7]=g,m[11]=y,m[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/xs.setFromMatrixColumn(e,0).length(),s=1/xs.setFromMatrixColumn(e,1).length(),a=1/xs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let f=a*c,p=a*h,g=o*c,y=o*h;t[0]=l*c,t[4]=-l*h,t[8]=u,t[1]=p+g*u,t[5]=f-y*u,t[9]=-o*l,t[2]=y-f*u,t[6]=g+p*u,t[10]=a*l}else if(e.order==="YXZ"){let f=l*c,p=l*h,g=u*c,y=u*h;t[0]=f+y*o,t[4]=g*o-p,t[8]=a*u,t[1]=a*h,t[5]=a*c,t[9]=-o,t[2]=p*o-g,t[6]=y+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*c,p=l*h,g=u*c,y=u*h;t[0]=f-y*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*c,t[9]=y-f*o,t[2]=-a*u,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*c,p=a*h,g=o*c,y=o*h;t[0]=l*c,t[4]=g*u-p,t[8]=f*u+y,t[1]=l*h,t[5]=y*u+f,t[9]=p*u-g,t[2]=-u,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,p=a*u,g=o*l,y=o*u;t[0]=l*c,t[4]=y-f*h,t[8]=g*h+p,t[1]=h,t[5]=a*c,t[9]=-o*c,t[2]=-u*c,t[6]=p*h+g,t[10]=f-y*h}else if(e.order==="XZY"){let f=a*l,p=a*u,g=o*l,y=o*u;t[0]=l*c,t[4]=-h,t[8]=u*c,t[1]=f*h+y,t[5]=a*c,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*c,t[10]=y*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(A0,e,R0)}lookAt(e,t,n){let r=this.elements;return Xn.subVectors(e,t),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),vr.crossVectors(n,Xn),vr.lengthSq()===0&&(Math.abs(n.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),vr.crossVectors(n,Xn)),vr.normalize(),Vo.crossVectors(Xn,vr),r[0]=vr.x,r[4]=Vo.x,r[8]=Xn.x,r[1]=vr.y,r[5]=Vo.y,r[9]=Xn.y,r[2]=vr.z,r[6]=Vo.z,r[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],u=n[12],c=n[1],h=n[5],f=n[9],p=n[13],g=n[2],y=n[6],v=n[10],m=n[14],_=n[3],L=n[7],E=n[11],C=n[15],P=r[0],U=r[4],M=r[8],x=r[12],w=r[1],A=r[5],S=r[9],I=r[13],D=r[2],k=r[6],Y=r[10],j=r[14],se=r[3],ne=r[7],le=r[11],ae=r[15];return s[0]=a*P+o*w+l*D+u*se,s[4]=a*U+o*A+l*k+u*ne,s[8]=a*M+o*S+l*Y+u*le,s[12]=a*x+o*I+l*j+u*ae,s[1]=c*P+h*w+f*D+p*se,s[5]=c*U+h*A+f*k+p*ne,s[9]=c*M+h*S+f*Y+p*le,s[13]=c*x+h*I+f*j+p*ae,s[2]=g*P+y*w+v*D+m*se,s[6]=g*U+y*A+v*k+m*ne,s[10]=g*M+y*S+v*Y+m*le,s[14]=g*x+y*I+v*j+m*ae,s[3]=_*P+L*w+E*D+C*se,s[7]=_*U+L*A+E*k+C*ne,s[11]=_*M+L*S+E*Y+C*le,s[15]=_*x+L*I+E*j+C*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],c=e[2],h=e[6],f=e[10],p=e[14],g=e[3],y=e[7],v=e[11],m=e[15],_=l*p-u*f,L=o*p-u*h,E=o*f-l*h,C=a*p-u*c,P=a*f-l*c,U=a*h-o*c;return t*(y*_-v*L+m*E)-n*(g*_-v*C+m*P)+r*(g*L-y*C+m*U)-s*(g*E-y*P+v*U)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],u=e[6],c=e[10];return t*(a*c-o*u)-n*(s*c-o*l)+r*(s*u-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],h=e[9],f=e[10],p=e[11],g=e[12],y=e[13],v=e[14],m=e[15],_=t*o-n*a,L=t*l-r*a,E=t*u-s*a,C=n*l-r*o,P=n*u-s*o,U=r*u-s*l,M=c*y-h*g,x=c*v-f*g,w=c*m-p*g,A=h*v-f*y,S=h*m-p*y,I=f*m-p*v,D=_*I-L*S+E*A+C*w-P*x+U*M;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/D;return e[0]=(o*I-l*S+u*A)*k,e[1]=(r*S-n*I-s*A)*k,e[2]=(y*U-v*P+m*C)*k,e[3]=(f*P-h*U-p*C)*k,e[4]=(l*w-a*I-u*x)*k,e[5]=(t*I-r*w+s*x)*k,e[6]=(v*E-g*U-m*L)*k,e[7]=(c*U-f*E+p*L)*k,e[8]=(a*S-o*w+u*M)*k,e[9]=(n*w-t*S-s*M)*k,e[10]=(g*P-y*E+m*_)*k,e[11]=(h*E-c*P-p*_)*k,e[12]=(o*x-a*A-l*M)*k,e[13]=(t*A-n*x+r*M)*k,e[14]=(y*L-g*C-v*_)*k,e[15]=(c*C-h*L+f*_)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,u=s*a,c=s*o;return this.set(u*a+n,u*o-r*l,u*l+r*o,0,u*o+r*l,c*o+n,c*l-r*a,0,u*l-r*o,c*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,u=s+s,c=a+a,h=o+o,f=s*u,p=s*c,g=s*h,y=a*c,v=a*h,m=o*h,_=l*u,L=l*c,E=l*h,C=n.x,P=n.y,U=n.z;return r[0]=(1-(y+m))*C,r[1]=(p+E)*C,r[2]=(g-L)*C,r[3]=0,r[4]=(p-E)*P,r[5]=(1-(f+m))*P,r[6]=(v+_)*P,r[7]=0,r[8]=(g+L)*U,r[9]=(v-_)*U,r[10]=(1-(f+y))*U,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=xs.set(r[0],r[1],r[2]).length(),o=xs.set(r[4],r[5],r[6]).length(),l=xs.set(r[8],r[9],r[10]).length();s<0&&(a=-a),di.copy(this);let u=1/a,c=1/o,h=1/l;return di.elements[0]*=u,di.elements[1]*=u,di.elements[2]*=u,di.elements[4]*=c,di.elements[5]*=c,di.elements[6]*=c,di.elements[8]*=h,di.elements[9]*=h,di.elements[10]*=h,t.setFromRotationMatrix(di),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,r,s,a,o=_i,l=!1){let u=this.elements,c=2*s/(t-e),h=2*s/(n-r),f=(t+e)/(t-e),p=(n+r)/(n-r),g,y;if(l)g=s/(a-s),y=a*s/(a-s);else if(o===_i)g=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===Us)g=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=h,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=_i,l=!1){let u=this.elements,c=2/(t-e),h=2/(n-r),f=-(t+e)/(t-e),p=-(n+r)/(n-r),g,y;if(l)g=1/(a-s),y=a/(a-s);else if(o===_i)g=-2/(a-s),y=-(a+s)/(a-s);else if(o===Us)g=-1/(a-s),y=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=h,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=g,u[14]=y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Gl.prototype.isMatrix4=!0;var rt=Gl,xs=new J,di=new rt,A0=new J(0,0,0),R0=new J(1,1,1),vr=new J,Vo=new J,Xn=new J,nd=new rt,id=new En,Li=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],c=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(mt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return id.setFromEuler(this),this.setFromQuaternion(id,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Li.DEFAULT_ORDER="XYZ";var Ba=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},C0=0,rd=new J,ys=new En,qi=new rt,Wo=new J,Ea=new J,I0=new J,P0=new En,sd=new J(1,0,0),ad=new J(0,1,0),od=new J(0,0,1),ld={type:"added"},L0={type:"removed"},Ms={type:"childadded",child:null},wu={type:"childremoved",child:null},Gt=class i extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new J,t=new Li,n=new En,r=new J(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rt},normalMatrix:{value:new tt}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(sd,e)}rotateY(e){return this.rotateOnAxis(ad,e)}rotateZ(e){return this.rotateOnAxis(od,e)}translateOnAxis(e,t){return rd.copy(e).applyQuaternion(this.quaternion),this.position.add(rd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sd,e)}translateY(e){return this.translateOnAxis(ad,e)}translateZ(e){return this.translateOnAxis(od,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wo.copy(e):Wo.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(Ea,Wo,this.up):qi.lookAt(Wo,Ea,this.up),this.quaternion.setFromRotationMatrix(qi),r&&(qi.extractRotation(r.matrixWorld),ys.setFromRotationMatrix(qi),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ld),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(L0),wu.child=e,this.dispatchEvent(wu),wu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ld),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,e,I0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,P0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){let h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),u=a(e.textures),c=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),c.length>0&&(n.images=c),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){let l=[];for(let u in o){let c=o[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Gt.DEFAULT_UP=new J(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var at=class extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},N0={type:"move"},Bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new at,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new at,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new at,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(let y of e.hand.values()){let v=t.getJointPose(y,n),m=this._getHandJoint(u,y);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}let c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=c.position.distanceTo(h.position),p=.02,g=.005;u.inputState.pinching&&f>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(N0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new at;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},xp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},Xo={h:0,s:0,l:0};function Au(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Be=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=st.workingColorSpace){if(e=gh(e,1),t=mt(t,0,1),n=mt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Au(a,s,e+1/3),this.g=Au(a,s,e),this.b=Au(a,s,e-1/3)}return st.colorSpaceToWorking(this,r),this}setStyle(e,t=kt){function n(s){s!==void 0&&parseFloat(s)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){let n=xp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return st.workingToColorSpace(Tn.copy(this),e),Math.round(mt(Tn.r*255,0,255))*65536+Math.round(mt(Tn.g*255,0,255))*256+Math.round(mt(Tn.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(Tn.copy(this),t);let n=Tn.r,r=Tn.g,s=Tn.b,a=Math.max(n,r,s),o=Math.min(n,r,s),l,u,c=(o+a)/2;if(o===a)l=0,u=0;else{let h=a-o;switch(u=c<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=kt){st.workingToColorSpace(Tn.copy(this),e);let t=Tn.r,n=Tn.g,r=Tn.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(_r),this.setHSL(_r.h+e,_r.s+t,_r.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_r),e.getHSL(Xo);let n=Da(_r.h,Xo.h,t),r=Da(_r.s,Xo.s,t),s=Da(_r.l,Xo.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tn=new Be;Be.NAMES=xp;var ka=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Be(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Tr=class extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},pi=new J,Yi=new J,Ru=new J,Ki=new J,Ss=new J,bs=new J,cd=new J,Cu=new J,Iu=new J,Pu=new J,Lu=new Pt,Nu=new Pt,Du=new Pt,br=class i{constructor(e=new J,t=new J,n=new J){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),pi.subVectors(e,t),r.cross(pi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){pi.subVectors(r,t),Yi.subVectors(n,t),Ru.subVectors(e,t);let a=pi.dot(pi),o=pi.dot(Yi),l=pi.dot(Ru),u=Yi.dot(Yi),c=Yi.dot(Ru),h=a*u-o*o;if(h===0)return s.set(0,0,0),null;let f=1/h,p=(u*l-o*c)*f,g=(a*c-o*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,Ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ki.x),l.addScaledVector(a,Ki.y),l.addScaledVector(o,Ki.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return Lu.setScalar(0),Nu.setScalar(0),Du.setScalar(0),Lu.fromBufferAttribute(e,t),Nu.fromBufferAttribute(e,n),Du.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Lu,s.x),a.addScaledVector(Nu,s.y),a.addScaledVector(Du,s.z),a}static isFrontFacing(e,t,n,r){return pi.subVectors(n,t),Yi.subVectors(e,t),pi.cross(Yi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),pi.cross(Yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;Ss.subVectors(r,n),bs.subVectors(s,n),Cu.subVectors(e,n);let l=Ss.dot(Cu),u=bs.dot(Cu);if(l<=0&&u<=0)return t.copy(n);Iu.subVectors(e,r);let c=Ss.dot(Iu),h=bs.dot(Iu);if(c>=0&&h<=c)return t.copy(r);let f=l*h-c*u;if(f<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(n).addScaledVector(Ss,a);Pu.subVectors(e,s);let p=Ss.dot(Pu),g=bs.dot(Pu);if(g>=0&&p<=g)return t.copy(s);let y=p*u-l*g;if(y<=0&&u>=0&&g<=0)return o=u/(u-g),t.copy(n).addScaledVector(bs,o);let v=c*g-p*h;if(v<=0&&h-c>=0&&p-g>=0)return cd.subVectors(s,r),o=(h-c)/(h-c+(p-g)),t.copy(r).addScaledVector(cd,o);let m=1/(v+y+f);return a=y*m,o=f*m,t.copy(n).addScaledVector(Ss,a).addScaledVector(bs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Nn=class{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,mi):mi.fromBufferAttribute(s,a),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qo.copy(n.boundingBox)),qo.applyMatrix4(e.matrixWorld),this.union(qo)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wa),Yo.subVectors(this.max,wa),Ts.subVectors(e.a,wa),Es.subVectors(e.b,wa),ws.subVectors(e.c,wa),xr.subVectors(Es,Ts),yr.subVectors(ws,Es),kr.subVectors(Ts,ws);let t=[0,-xr.z,xr.y,0,-yr.z,yr.y,0,-kr.z,kr.y,xr.z,0,-xr.x,yr.z,0,-yr.x,kr.z,0,-kr.x,-xr.y,xr.x,0,-yr.y,yr.x,0,-kr.y,kr.x,0];return!Uu(t,Ts,Es,ws,Yo)||(t=[1,0,0,0,1,0,0,0,1],!Uu(t,Ts,Es,ws,Yo))?!1:(Ko.crossVectors(xr,yr),t=[Ko.x,Ko.y,Ko.z],Uu(t,Ts,Es,ws,Yo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Zi=[new J,new J,new J,new J,new J,new J,new J,new J],mi=new J,qo=new Nn,Ts=new J,Es=new J,ws=new J,xr=new J,yr=new J,kr=new J,wa=new J,Yo=new J,Ko=new J,zr=new J;function Uu(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){zr.fromArray(i,s);let o=r.x*Math.abs(zr.x)+r.y*Math.abs(zr.y)+r.z*Math.abs(zr.z),l=e.dot(zr),u=t.dot(zr),c=n.dot(zr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}var cn=new J,Zo=new Ye,D0=0,Zt=class extends yi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:D0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ph,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zo.fromBufferAttribute(this,t),Zo.applyMatrix3(e),this.setXY(t,Zo.x,Zo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),r=It(r,this.array),s=It(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var za=class extends Zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ga=class extends Zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var xt=class extends Zt{constructor(e,t,n){super(new Float32Array(e),t,n)}},U0=new Nn,Aa=new J,Ou=new J,Fn=class{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):U0.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Aa.subVectors(e,this.center);let t=Aa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Aa,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ou.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Aa.copy(e.center).add(Ou)),this.expandByPoint(Aa.copy(e.center).sub(Ou))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},O0=0,ri=new rt,Fu=new Gt,As=new J,qn=new Nn,Ra=new Nn,vn=new J,Vt=class i extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(a0(e)?Ga:za)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new tt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,n){return ri.makeTranslation(e,t,n),this.applyMatrix4(ri),this}scale(e,t,n){return ri.makeScale(e,t,n),this.applyMatrix4(ri),this}lookAt(e){return Fu.lookAt(e),Fu.updateMatrix(),this.applyMatrix4(Fu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xt(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];qn.setFromBufferAttribute(s),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){let n=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Ra.setFromBufferAttribute(o),this.morphTargetsRelative?(vn.addVectors(qn.min,Ra.min),qn.expandByPoint(vn),vn.addVectors(qn.max,Ra.max),qn.expandByPoint(vn)):(qn.expandByPoint(Ra.min),qn.expandByPoint(Ra.max))}qn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)vn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(vn));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)vn.fromBufferAttribute(o,u),l&&(As.fromBufferAttribute(e,u),vn.add(As)),r=Math.max(r,n.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Zt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let M=0;M<n.count;M++)o[M]=new J,l[M]=new J;let u=new J,c=new J,h=new J,f=new Ye,p=new Ye,g=new Ye,y=new J,v=new J;function m(M,x,w){u.fromBufferAttribute(n,M),c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,w),f.fromBufferAttribute(s,M),p.fromBufferAttribute(s,x),g.fromBufferAttribute(s,w),c.sub(u),h.sub(u),p.sub(f),g.sub(f);let A=1/(p.x*g.y-g.x*p.y);isFinite(A)&&(y.copy(c).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(A),v.copy(h).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(A),o[M].add(y),o[x].add(y),o[w].add(y),l[M].add(v),l[x].add(v),l[w].add(v))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let M=0,x=_.length;M<x;++M){let w=_[M],A=w.start,S=w.count;for(let I=A,D=A+S;I<D;I+=3)m(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let L=new J,E=new J,C=new J,P=new J;function U(M){C.fromBufferAttribute(r,M),P.copy(C);let x=o[M];L.copy(x),L.sub(C.multiplyScalar(C.dot(x))).normalize(),E.crossVectors(P,x);let A=E.dot(l[M])<0?-1:1;a.setXYZW(M,L.x,L.y,L.z,A)}for(let M=0,x=_.length;M<x;++M){let w=_[M],A=w.start,S=w.count;for(let I=A,D=A+S;I<D;I+=3)U(e.getX(I+0)),U(e.getX(I+1)),U(e.getX(I+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let r=new J,s=new J,a=new J,o=new J,l=new J,u=new J,c=new J,h=new J;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),y=e.getX(f+1),v=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,v),c.subVectors(a,s),h.subVectors(r,s),c.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),u.fromBufferAttribute(n,v),o.add(c),l.add(c),u.add(c),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(v,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),c.subVectors(a,s),h.subVectors(r,s),c.cross(h),n.setXYZ(f+0,c.x,c.y,c.z),n.setXYZ(f+1,c.x,c.y,c.z),n.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vn.fromBufferAttribute(e,t),vn.normalize(),e.setXYZ(t,vn.x,vn.y,vn.z)}toNonIndexed(){function e(o,l){let u=o.array,c=o.itemSize,h=o.normalized,f=new u.constructor(l.length*c),p=0,g=0;for(let y=0,v=l.length;y<v;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*c;for(let m=0;m<c;m++)f[g++]=u[p++]}return new Zt(f,c,h)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let l=r[o],u=e(l,n);t.setAttribute(o,u)}let s=this.morphAttributes;for(let o in s){let l=[],u=s[o];for(let c=0,h=u.length;c<h;c++){let f=u[c],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let u=n[l];e.data.attributes[l]=u.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let u=this.morphAttributes[l],c=[];for(let h=0,f=u.length;h<f;h++){let p=u[h];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let u in r){let c=r[u];this.setAttribute(u,c.clone(t))}let s=e.morphAttributes;for(let u in s){let c=[],h=s[u];for(let f=0,p=h.length;f<p;f++)c.push(h[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let u=0,c=a.length;u<c;u++){let h=a[u];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ks=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ph,this.updateRanges=[],this.version=0,this.uuid=xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Pn=new J,zs=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.applyMatrix4(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.applyNormalMatrix(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.transformDirection(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=vi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=vi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=vi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=vi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=vi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array),r=It(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array),r=It(r,this.array),s=It(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Fa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Fa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Hu=new J,F0=new J,H0=new tt,gi=class{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Hu.subVectors(n,t).cross(F0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Hu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||H0.getNormalMatrix(e),r=this.coplanarPoint(Hu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},B0=0,Dn=class extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=ea,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rh,this.blendDst=sh,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ml,this.stencilZFail=ml,this.stencilZPass=ml,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new gi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ye().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ye().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ji=new J,Bu=new J,Jo=new J,jo=new J,Jr=class{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ji.copy(this.origin).addScaledVector(this.direction,t),Ji.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Bu.copy(e).add(t).multiplyScalar(.5),Jo.copy(t).sub(e).normalize(),jo.copy(this.origin).sub(Bu);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Jo),o=jo.dot(this.direction),l=-jo.dot(Jo),u=jo.lengthSq(),c=Math.abs(1-a*a),h,f,p,g;if(c>0)if(h=a*l-o,f=a*o-l,g=s*c,h>=0)if(f>=-g)if(f<=g){let y=1/c;h*=y,f*=y,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+u}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+u;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+u;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+u):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+u);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Bu).addScaledVector(Jo,f),p}intersectSphere(e,t){if(e.radius<0)return null;Ji.subVectors(e.center,this.origin);let n=Ji.dot(this.direction),r=Ji.dot(Ji)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l,u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,a=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,a=(e.min.y-f.y)*c),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ji)!==null}intersectTriangle(e,t,n,r,s){let a=this.origin,o=this.direction,l=o.x,u=o.y,c=o.z,h=e.x-a.x,f=e.y-a.y,p=e.z-a.z,g=t.x-a.x,y=t.y-a.y,v=t.z-a.z,m=n.x-a.x,_=n.y-a.y,L=n.z-a.z,E=Math.abs(l),C=Math.abs(u),P=Math.abs(c),U,M,x,w,A,S,I,D,k,Y,j,se;if(E>=C&&E>=P?(x=l,S=h,k=g,se=m,l>=0?(U=u,M=c,w=f,A=p,I=y,D=v,Y=_,j=L):(U=c,M=u,w=p,A=f,I=v,D=y,Y=L,j=_)):C>=P?(x=u,S=f,k=y,se=_,u>=0?(U=c,M=l,w=p,A=h,I=v,D=g,Y=L,j=m):(U=l,M=c,w=h,A=p,I=g,D=v,Y=m,j=L)):(x=c,S=p,k=v,se=L,c>=0?(U=l,M=u,w=h,A=f,I=g,D=y,Y=m,j=_):(U=u,M=l,w=f,A=h,I=y,D=g,Y=_,j=m)),x===0)return null;let ne=U/x,le=M/x,ae=1/x,we=w-ne*S,Ee=A-le*S,it=I-ne*k,ge=D-le*k,oe=Y-ne*se,G=j-le*se,Z=oe*ge-G*it,fe=we*G-Ee*oe,me=it*Ee-ge*we;if(r){if(Z<0||fe<0||me<0)return null}else if((Z<0||fe<0||me<0)&&(Z>0||fe>0||me>0))return null;let _e=Z+fe+me;if(_e===0)return null;let He=ae*(Z*S+fe*k+me*se);return(_e>0?He<0:He>0)?null:this.at(He/_e,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wn=class extends Dn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=Vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ud=new rt,Gr=new Jr,$o=new Fn,hd=new J,Qo=new J,el=new J,tl=new J,ku=new J,nl=new J,fd=new J,il=new J,Ue=class extends Gt{constructor(e=new Vt,t=new wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){nl.set(0,0,0);for(let l=0,u=s.length;l<u;l++){let c=o[l],h=s[l];c!==0&&(ku.fromBufferAttribute(h,e),a?nl.addScaledVector(ku,c):nl.addScaledVector(ku.sub(t),c))}t.add(nl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(s),Gr.copy(e.ray).recast(e.near),!($o.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere($o,hd)===null||Gr.origin.distanceToSquared(hd)>(e.far-e.near)**2))&&(ud.copy(s).invert(),Gr.copy(e.ray).applyMatrix4(ud),!(n.boundingBox!==null&&Gr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gr)))}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){let v=f[g],m=a[v.materialIndex],_=Math.max(v.start,p.start),L=Math.min(o.count,Math.min(v.start+v.count,p.start+p.count));for(let E=_,C=L;E<C;E+=3){let P=o.getX(E),U=o.getX(E+1),M=o.getX(E+2);r=rl(this,m,e,n,u,c,h,P,U,M),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let v=g,m=y;v<m;v+=3){let _=o.getX(v),L=o.getX(v+1),E=o.getX(v+2);r=rl(this,a,e,n,u,c,h,_,L,E),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){let v=f[g],m=a[v.materialIndex],_=Math.max(v.start,p.start),L=Math.min(l.count,Math.min(v.start+v.count,p.start+p.count));for(let E=_,C=L;E<C;E+=3){let P=E,U=E+1,M=E+2;r=rl(this,m,e,n,u,c,h,P,U,M),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let v=g,m=y;v<m;v+=3){let _=v,L=v+1,E=v+2;r=rl(this,a,e,n,u,c,h,_,L,E),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}};function k0(i,e,t,n,r,s,a,o){let l;if(e.side===xn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===Oi,o),l===null)return null;il.copy(o),il.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(il);return u<t.near||u>t.far?null:{distance:u,point:il.clone(),object:i}}function rl(i,e,t,n,r,s,a,o,l,u){i.getVertexPosition(o,Qo),i.getVertexPosition(l,el),i.getVertexPosition(u,tl);let c=k0(i,e,t,n,Qo,el,tl,fd);if(c){let h=new J;br.getBarycoord(fd,Qo,el,tl,h),r&&(c.uv=br.getInterpolatedAttribute(r,o,l,u,h,new Ye)),s&&(c.uv1=br.getInterpolatedAttribute(s,o,l,u,h,new Ye)),a&&(c.normal=br.getInterpolatedAttribute(a,o,l,u,h,new J),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));let f={a:o,b:l,c:u,normal:new J,materialIndex:0};br.getNormal(Qo,el,tl,f.normal),c.face=f,c.barycoord=h}return c}var Ca=new Pt,dd=new Pt,pd=new Pt,z0=new Pt,md=new rt,sl=new J,zu=new Fn,gd=new rt,Gu=new Jr,Va=class extends Ue{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=qu,this.bindMatrix=new rt,this.bindMatrixInverse=new rt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Nn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,sl),this.boundingBox.expandByPoint(sl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Fn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,sl),this.boundingSphere.expandByPoint(sl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zu.copy(this.boundingSphere),zu.applyMatrix4(r),e.ray.intersectsSphere(zu)!==!1&&(gd.copy(r).invert(),Gu.copy(e.ray).applyMatrix4(gd),!(this.boundingBox!==null&&Gu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Gu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Pt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===qu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ip?this.bindMatrixInverse.copy(this.bindMatrix).invert():qe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;dd.fromBufferAttribute(r.attributes.skinIndex,e),pd.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(Ca.copy(t),t.set(0,0,0,0)):(Ca.set(...t,1),t.set(0,0,0)),Ca.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let a=pd.getComponent(s);if(a!==0){let o=dd.getComponent(s);md.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(z0.copy(Ca).applyMatrix4(md),a)}}return t.isVector4&&(t.w=Ca.w),t.applyMatrix4(this.bindMatrixInverse)}},Gs=class extends Gt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Qi=class extends pn{constructor(e=null,t=1,n=1,r,s,a,o,l,u=zt,c=zt,h,f){super(null,a,o,l,u,c,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},vd=new rt,G0=new rt,Wa=class i{constructor(e=[],t=[]){this.uuid=xi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){qe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new rt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new rt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:G0;vd.multiplyMatrices(o,t[s]),vd.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Qi(t,e,e,Zn,Kn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let s=e.bones[n],a=t[s];a===void 0&&(qe("Skeleton: No bone found with UUID:",s),a=new Gs),this.bones.push(a),this.boneInverses.push(new rt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let a=t[r];e.bones.push(a.uuid);let o=n[r];e.boneInverses.push(o.toArray())}return e}},er=class extends Zt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Rs=new rt,_d=new rt,al=[],xd=new Nn,V0=new rt,Ia=new Ue,Pa=new Fn,jr=class extends Ue{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new er(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,V0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Nn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Rs),xd.copy(e.boundingBox).applyMatrix4(Rs),this.boundingBox.union(xd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Rs),Pa.copy(e.boundingSphere).applyMatrix4(Rs),this.boundingSphere.union(Pa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Ia.geometry=this.geometry,Ia.material=this.material,Ia.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pa.copy(this.boundingSphere),Pa.applyMatrix4(n),e.ray.intersectsSphere(Pa)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Rs),_d.multiplyMatrices(n,Rs),Ia.matrixWorld=_d,Ia.raycast(e,al);for(let a=0,o=al.length;a<o;a++){let l=al[a];l.instanceId=s,l.object=this,t.push(l)}al.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new er(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qi(new Float32Array(r*this.count),r,this.count,Jl,Kn));let s=this.morphTexture.source.data.data,a=0;for(let u=0;u<n.length;u++)a+=n[u];let o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;return s[l]=o,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Vr=new Fn,W0=new Ye(.5,.5),ol=new J,Vs=class{constructor(e=new gi,t=new gi,n=new gi,r=new gi,s=new gi,a=new gi){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=_i,n=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],u=s[3],c=s[4],h=s[5],f=s[6],p=s[7],g=s[8],y=s[9],v=s[10],m=s[11],_=s[12],L=s[13],E=s[14],C=s[15];if(r[0].setComponents(u-a,p-c,m-g,C-_).normalize(),r[1].setComponents(u+a,p+c,m+g,C+_).normalize(),r[2].setComponents(u+o,p+h,m+y,C+L).normalize(),r[3].setComponents(u-o,p-h,m-y,C-L).normalize(),n)r[4].setComponents(l,f,v,E).normalize(),r[5].setComponents(u-l,p-f,m-v,C-E).normalize();else if(r[4].setComponents(u-l,p-f,m-v,C-E).normalize(),t===_i)r[5].setComponents(u+l,p+f,m+v,C+E).normalize();else if(t===Us)r[5].setComponents(l,f,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vr)}intersectsSprite(e){Vr.center.set(0,0,0);let t=W0.distanceTo(e.center);return Vr.radius=.7071067811865476+t,Vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(ol.x=r.normal.x>0?e.max.x:e.min.x,ol.y=r.normal.y>0?e.max.y:e.min.y,ol.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ol)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ws=class extends Dn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Al=new J,Rl=new J,yd=new rt,La=new Jr,ll=new Fn,Vu=new J,Md=new J,$r=class extends Gt{constructor(e=new Vt,t=new Ws){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Al.fromBufferAttribute(t,r-1),Rl.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Al.distanceTo(Rl);e.setAttribute("lineDistance",new xt(n,1))}else qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ll.copy(n.boundingSphere),ll.applyMatrix4(r),ll.radius+=s,e.ray.intersectsSphere(ll)===!1)return;yd.copy(r).invert(),La.copy(e.ray).applyMatrix4(yd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=this.isLineSegments?2:1,c=n.index,f=n.attributes.position;if(c!==null){let p=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let y=p,v=g-1;y<v;y+=u){let m=c.getX(y),_=c.getX(y+1),L=cl(this,e,La,l,m,_,y);L&&t.push(L)}if(this.isLineLoop){let y=c.getX(g-1),v=c.getX(p),m=cl(this,e,La,l,y,v,g-1);m&&t.push(m)}}else{let p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let y=p,v=g-1;y<v;y+=u){let m=cl(this,e,La,l,y,y+1,y);m&&t.push(m)}if(this.isLineLoop){let y=cl(this,e,La,l,g-1,p,g-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function cl(i,e,t,n,r,s,a){let o=i.geometry.attributes.position;if(Al.fromBufferAttribute(o,r),Rl.fromBufferAttribute(o,s),t.distanceSqToSegment(Al,Rl,Vu,Md)>n)return;Vu.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(Vu);if(!(u<e.near||u>e.far))return{distance:u,point:Md.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Sd=new J,bd=new J,Xa=class extends $r{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Sd.fromBufferAttribute(t,r),bd.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Sd.distanceTo(bd);e.setAttribute("lineDistance",new xt(n,1))}else qe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},qa=class extends $r{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Xs=class extends Dn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Td=new rt,Ku=new Jr,ul=new Fn,hl=new J,Qr=class extends Gt{constructor(e=new Vt,t=new Xs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ul.copy(n.boundingSphere),ul.applyMatrix4(r),ul.radius+=s,e.ray.intersectsSphere(ul)===!1)return;Td.copy(r).invert(),Ku.copy(e.ray).applyMatrix4(Td);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=f,y=p;g<y;g++){let v=u.getX(g);hl.fromBufferAttribute(h,v),Ed(hl,v,l,r,e,t,this)}}else{let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=f,y=p;g<y;g++)hl.fromBufferAttribute(h,g),Ed(hl,g,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Ed(i,e,t,n,r,s,a){let o=Ku.distanceSqToPoint(i);if(o<t){let l=new J;Ku.closestPointToPoint(i,l),l.applyMatrix4(n);let u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ya=class extends pn{constructor(e=[],t=Ir,n,r,s,a,o,l,u,c){super(e,t,n,r,s,a,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},qs=class extends pn{constructor(e,t,n,r,s,a,o,l,u){super(e,t,n,r,s,a,o,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Er=class extends pn{constructor(e,t,n=bi,r,s,a,o=zt,l=zt,u,c=Pi,h=1){if(c!==Pi&&c!==Pr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,r,s,a,o,l,c,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Cl=class extends Er{constructor(e,t=bi,n=Ir,r,s,a=zt,o=zt,l,u=Pi){let c={width:e,height:e,depth:1},h=[c,c,c,c,c,c];super(e,e,t,n,r,s,a,o,l,u),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ka=class extends pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},hn=class i extends Vt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],u=[],c=[],h=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new xt(u,3)),this.setAttribute("normal",new xt(c,3)),this.setAttribute("uv",new xt(h,2));function g(y,v,m,_,L,E,C,P,U,M,x){let w=E/U,A=C/M,S=E/2,I=C/2,D=P/2,k=U+1,Y=M+1,j=0,se=0,ne=new J;for(let le=0;le<Y;le++){let ae=le*A-I;for(let we=0;we<k;we++){let Ee=we*w-S;ne[y]=Ee*_,ne[v]=ae*L,ne[m]=D,u.push(ne.x,ne.y,ne.z),ne[y]=0,ne[v]=0,ne[m]=P>0?1:-1,c.push(ne.x,ne.y,ne.z),h.push(we/U),h.push(1-le/M),j+=1}}for(let le=0;le<M;le++)for(let ae=0;ae<U;ae++){let we=f+ae+k*le,Ee=f+ae+k*(le+1),it=f+(ae+1)+k*(le+1),ge=f+(ae+1)+k*le;l.push(we,Ee,ge),l.push(Ee,it,ge),se+=6}o.addGroup(p,se,x),p+=se,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Za=class i extends Vt{constructor(e=1,t=1,n=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let a=[],o=[],l=[],u=[],c=t/2,h=Math.PI/2*e,f=t,p=2*h+f,g=n*2+s,y=r+1,v=new J,m=new J;for(let _=0;_<=g;_++){let L=0,E=0,C=0,P=0;if(_<=n){let x=_/n,w=x*Math.PI/2;E=-c-e*Math.cos(w),C=e*Math.sin(w),P=-e*Math.cos(w),L=x*h}else if(_<=n+s){let x=(_-n)/s;E=-c+x*t,C=e,P=0,L=h+x*f}else{let x=(_-n-s)/n,w=x*Math.PI/2;E=c+e*Math.sin(w),C=e*Math.cos(w),P=e*Math.sin(w),L=h+f+x*h}let U=Math.max(0,Math.min(1,L/p)),M=0;_===0?M=.5/r:_===g&&(M=-.5/r);for(let x=0;x<=r;x++){let w=x/r,A=w*Math.PI*2,S=Math.sin(A),I=Math.cos(A);m.x=-C*I,m.y=E,m.z=C*S,o.push(m.x,m.y,m.z),v.set(-C*I,P,C*S),v.normalize(),l.push(v.x,v.y,v.z),u.push(w+M,U)}if(_>0){let x=(_-1)*y;for(let w=0;w<r;w++){let A=x+w,S=x+w+1,I=_*y+w,D=_*y+w+1;a.push(A,S,I),a.push(S,D,I)}}}this.setIndex(a),this.setAttribute("position",new xt(o,3)),this.setAttribute("normal",new xt(l,3)),this.setAttribute("uv",new xt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var Ys=class i extends Vt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let u=this;r=Math.floor(r),s=Math.floor(s);let c=[],h=[],f=[],p=[],g=0,y=[],v=n/2,m=0;_(),a===!1&&(e>0&&L(!0),t>0&&L(!1)),this.setIndex(c),this.setAttribute("position",new xt(h,3)),this.setAttribute("normal",new xt(f,3)),this.setAttribute("uv",new xt(p,2));function _(){let E=new J,C=new J,P=0,U=(t-e)/n;for(let M=0;M<=s;M++){let x=[],w=M/s,A=w*(t-e)+e;for(let S=0;S<=r;S++){let I=S/r,D=I*l+o,k=Math.sin(D),Y=Math.cos(D);C.x=A*k,C.y=-w*n+v,C.z=A*Y,h.push(C.x,C.y,C.z),E.set(k,U,Y).normalize(),f.push(E.x,E.y,E.z),p.push(I,1-w),x.push(g++)}y.push(x)}for(let M=0;M<r;M++)for(let x=0;x<s;x++){let w=y[x][M],A=y[x+1][M],S=y[x+1][M+1],I=y[x][M+1];(e>0||x!==0)&&(c.push(w,A,I),P+=3),(t>0||x!==s-1)&&(c.push(A,S,I),P+=3)}u.addGroup(m,P,0),m+=P}function L(E){let C=g,P=new Ye,U=new J,M=0,x=E===!0?e:t,w=E===!0?1:-1;for(let S=1;S<=r;S++)h.push(0,v*w,0),f.push(0,w,0),p.push(.5,.5),g++;let A=g;for(let S=0;S<=r;S++){let D=S/r*l+o,k=Math.cos(D),Y=Math.sin(D);U.x=x*Y,U.y=v*w,U.z=x*k,h.push(U.x,U.y,U.z),f.push(0,w,0),P.x=k*.5+.5,P.y=Y*.5*w+.5,p.push(P.x,P.y),g++}for(let S=0;S<r;S++){let I=C+S,D=A+S;E===!0?c.push(D,D+1,I):c.push(D+1,D,I),M+=3}u.addGroup(m,M,E===!0?1:2),m+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ja=class i extends Ys{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var es=class i extends Vt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),u=o+1,c=l+1,h=e/o,f=t/l,p=[],g=[],y=[],v=[];for(let m=0;m<c;m++){let _=m*f-a;for(let L=0;L<u;L++){let E=L*h-s;g.push(E,-_,0),y.push(0,0,1),v.push(L/o),v.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<o;_++){let L=_+u*m,E=_+u*(m+1),C=_+1+u*(m+1),P=_+1+u*m;p.push(L,E,P),p.push(E,C,P)}this.setIndex(p),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(y,3)),this.setAttribute("uv",new xt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var wr=class i extends Vt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),u=0,c=[],h=new J,f=new J,p=[],g=[],y=[],v=[];for(let m=0;m<=n;m++){let _=[],L=m/n,E=a+L*o,C=e*Math.cos(E),P=Math.sqrt(e*e-C*C),U=0;m===0&&a===0?U=.5/t:m===n&&l===Math.PI&&(U=-.5/t);for(let M=0;M<=t;M++){let x=M/t,w=r+x*s;h.x=-P*Math.cos(w),h.y=C,h.z=P*Math.sin(w),g.push(h.x,h.y,h.z),f.copy(h).normalize(),y.push(f.x,f.y,f.z),v.push(x+U,1-L),_.push(u++)}c.push(_)}for(let m=0;m<n;m++)for(let _=0;_<t;_++){let L=c[m][_+1],E=c[m][_],C=c[m+1][_],P=c[m+1][_+1];(m!==0||a>0)&&p.push(L,E,P),(m!==n-1||l<Math.PI)&&p.push(E,C,P)}this.setIndex(p),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(y,3)),this.setAttribute("uv",new xt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ar=class i extends Vt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let l=[],u=[],c=[],h=[],f=new J,p=new J,g=new J;for(let y=0;y<=n;y++){let v=a+y/n*o;for(let m=0;m<=r;m++){let _=m/r*s;p.x=(e+t*Math.cos(v))*Math.cos(_),p.y=(e+t*Math.cos(v))*Math.sin(_),p.z=t*Math.sin(v),u.push(p.x,p.y,p.z),f.x=e*Math.cos(_),f.y=e*Math.sin(_),g.subVectors(p,f).normalize(),c.push(g.x,g.y,g.z),h.push(m/r),h.push(y/n)}}for(let y=1;y<=n;y++)for(let v=1;v<=r;v++){let m=(r+1)*y+v-1,_=(r+1)*(y-1)+v-1,L=(r+1)*(y-1)+v,E=(r+1)*y+v;l.push(m,_,E),l.push(_,L,E)}this.setIndex(l),this.setAttribute("position",new xt(u,3)),this.setAttribute("normal",new xt(c,3)),this.setAttribute("uv",new xt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function ls(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(wd(r))r.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(wd(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function An(i){let e={};for(let t=0;t<i.length;t++){let n=ls(i[t]);for(let r in n)e[r]=n[r]}return e}function wd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function X0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function _h(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}var or={clone:ls,merge:An},q0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Y0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,jt=class extends Dn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=q0,this.fragmentShader=Y0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ls(e.uniforms),this.uniformsGroups=X0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Be().setHex(r.value);break;case"v2":this.uniforms[n].value=new Ye().fromArray(r.value);break;case"v3":this.uniforms[n].value=new J().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Pt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new tt().fromArray(r.value);break;case"m4":this.uniforms[n].value=new rt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ks=class extends jt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},en=class extends Dn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mo,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Hn=class extends en{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ja=class extends Dn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mo,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=Vl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Il=class extends Dn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ap,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Pl=class extends Dn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Sr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function gl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function K0(i){function e(r,s){return i[r]-i[s]}let t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Ad(i,e,t){let n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let l=0;l!==e;++l)r[a++]=i[o+l]}return r}function Z0(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}var Ni=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break t}a=t.length;break n}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ll=class extends Ni{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wr,endingEnd:Wr}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Xr:s=e,o=2*t-n;break;case Ua:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Xr:a=e,l=2*n-t;break;case Ua:a=1,l=n+r[1]-r[0];break;default:a=e-1,l=t}let u=(n-t)*.5,c=this.valueSize;this._weightPrev=u/(t-o),this._weightNext=u/(l-n),this._offsetPrev=s*c,this._offsetNext=a*c}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,c=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(r-t),y=g*g,v=y*g,m=-f*v+2*f*y-f*g,_=(1+f)*v+(-1.5-2*f)*y+(-.5+f)*g+1,L=(-1-p)*v+(1.5+p)*y+.5*g,E=p*v-p*y;for(let C=0;C!==o;++C)s[C]=m*a[c+C]+_*a[u+C]+L*a[l+C]+E*a[h+C];return s}},$a=class extends Ni{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,c=(n-t)/(r-t),h=1-c;for(let f=0;f!==o;++f)s[f]=a[u+f]*h+a[l+f]*c;return s}},Nl=class extends Ni{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Dl=class extends Ni{interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,c=this.inTangents,h=this.outTangents;if(!c||!h){let g=(n-t)/(r-t),y=1-g;for(let v=0;v!==o;++v)s[v]=a[u+v]*y+a[l+v]*g;return s}let f=o*2,p=e-1;for(let g=0;g!==o;++g){let y=a[u+g],v=a[l+g],m=p*f+g*2,_=h[m],L=h[m+1],E=e*f+g*2,C=c[E],P=c[E+1],U=j0(n,t,_,C,r);s[g]=yp(U,y,L,P,v)}return s}};function yp(i,e,t,n,r){let s=1-i;return s*s*s*e+3*s*s*i*t+3*s*i*i*n+i*i*i*r}function J0(i,e,t,n,r){let s=1-i;return 3*s*s*(t-e)+6*s*i*(n-t)+3*i*i*(r-n)}function j0(i,e,t,n,r){let s=(i-e)/(r-e);for(let a=0;a<8;a++){let o=yp(s,e,t,n,r)-i;if(Math.abs(o)<1e-10)break;let l=J0(s,e,t,n,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var Bn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Sr(t,this.TimeBufferType),this.values=Sr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Sr(e.times,Array),values:Sr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),gl(e.settings)&&(n.settings={inTangents:Sr(e.settings.inTangents,Array),outTangents:Sr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $a(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Dl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Yr:t=this.InterpolantFactoryMethodDiscrete;break;case Kr:t=this.InterpolantFactoryMethodLinear;break;case pl:t=this.InterpolantFactoryMethodSmooth;break;case Yu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return qe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yr;case this.InterpolantFactoryMethodLinear:return Kr;case this.InterpolantFactoryMethodSmooth:return pl;case this.InterpolantFactoryMethodBezier:return Yu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;gl(this.settings)&&(Rd(this.settings.inTangents,e),Rd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&($e("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&($e("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){$e("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){$e("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&o0(r))for(let o=0,l=r.length;o!==l;++o){let u=r[o];if(isNaN(u)){$e("KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===pl,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,u=e[o],c=e[o+1];if(u!==c&&(o!==1||u!==e[0]))if(r)l=!0;else{let h=o*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){let y=t[h+g];if(y!==t[f+g]||y!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,u=0;u!==n;++u)t[l+u]=t[o+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,gl(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Rd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Bn.prototype.ValueTypeName="";Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=Kr;var tr=class extends Bn{constructor(e,t,n){super(e,t,n)}};tr.prototype.ValueTypeName="bool";tr.prototype.ValueBufferType=Array;tr.prototype.DefaultInterpolation=Yr;tr.prototype.InterpolantFactoryMethodLinear=void 0;tr.prototype.InterpolantFactoryMethodSmooth=void 0;var Qa=class extends Bn{constructor(e,t,n,r){super(e,t,n,r)}};Qa.prototype.ValueTypeName="color";var nr=class extends Bn{constructor(e,t,n,r){super(e,t,n,r)}};nr.prototype.ValueTypeName="number";var Ul=class extends Ni{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(r-t),u=e*o;for(let c=u+o;u!==c;u+=4)En.slerpFlat(s,0,a,u-o,a,u,l);return s}},ir=class extends Bn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ul(this.times,this.values,this.getValueSize(),e)}};ir.prototype.ValueTypeName="quaternion";ir.prototype.InterpolantFactoryMethodSmooth=void 0;var rr=class extends Bn{constructor(e,t,n){super(e,t,n)}};rr.prototype.ValueTypeName="string";rr.prototype.ValueBufferType=Array;rr.prototype.DefaultInterpolation=Yr;rr.prototype.InterpolantFactoryMethodLinear=void 0;rr.prototype.InterpolantFactoryMethodSmooth=void 0;var Rr=class extends Bn{constructor(e,t,n,r){super(e,t,n,r)}};Rr.prototype.ValueTypeName="vector";var ts=class{constructor(e="",t=-1,n=[],r=Lc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=xi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Q0(n[a]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(Bn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let s=t.length,a=[];for(let o=0;o<s;o++){let l=[],u=[];l.push((o+s-1)%s,o,(o+1)%s),u.push(0,1,0);let c=K0(l);l=Ad(l,1,c),u=Ad(u,1,c),!r&&l[0]===0&&(l.push(s),u.push(u[0])),a.push(new nr(".morphTargetInfluences["+t[o].name+"]",l,u).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let u=e[o],c=u.name.match(s);if(c&&c.length>1){let h=c[1],f=r[h];f||(r[h]=f=[]),f.push(u)}}let a=[];for(let o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function $0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return nr;case"vector":case"vector2":case"vector3":case"vector4":return Rr;case"color":return Qa;case"quaternion":return ir;case"bool":case"boolean":return tr;case"string":return rr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Q0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=$0(i.type);if(i.times===void 0){let n=[],r=[];Z0(i.keys,n,r,"value"),i.times=n,i.values=r}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),gl(i.settings)&&(t.settings={inTangents:Sr(i.settings.inTangents,Float32Array),outTangents:Sr(i.settings.outTangents,Float32Array)}),t}var Ii={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Cd(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Cd(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Cd(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Ol=class{constructor(e,t,n){let r=this,s=!1,a=0,o=0,l,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(c){o++,s===!1&&r.onStart!==void 0&&r.onStart(c,a,o),s=!0},this.itemEnd=function(c){a++,r.onProgress!==void 0&&r.onProgress(c,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,h){return u.push(c,h),this},this.removeHandler=function(c){let h=u.indexOf(c);return h!==-1&&u.splice(h,2),this},this.getHandler=function(c){for(let h=0,f=u.length;h<f;h+=2){let p=u[h],g=u[h+1];if(p.global&&(p.lastIndex=0),p.test(c))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Mp=new Ol,Di=class{constructor(e){this.manager=e!==void 0?e:Mp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Di.DEFAULT_MATERIAL_NAME="__DEFAULT";var ji={},Zu=class extends Error{constructor(e,t){super(e),this.response=t}},Zs=class extends Di{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Ii.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(ji[e]!==void 0){ji[e].push({onLoad:t,onProgress:n,onError:r});return}ji[e]=[],ji[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&qe("FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||u.body===void 0||u.body.getReader===void 0)return u;let c=ji[e],h=u.body.getReader(),f=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0,y=0,v=new ReadableStream({start(m){_();function _(){h.read().then(({done:L,value:E})=>{if(L)m.close();else{y+=E.byteLength;let C=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:p});for(let P=0,U=c.length;P<U;P++){let M=c[P];M.onProgress&&M.onProgress(C)}m.enqueue(E),_()}},L=>{m.error(L)})}}});return new Response(v)}else throw new Zu(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(c=>new DOMParser().parseFromString(c,o));case"json":return u.json();default:if(o==="")return u.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return u.arrayBuffer().then(g=>p.decode(g))}}}).then(u=>{Ii.add(`file:${e}`,u);let c=ji[e];delete ji[e];for(let h=0,f=c.length;h<f;h++){let p=c[h];p.onLoad&&p.onLoad(u)}}).catch(u=>{let c=ji[e];if(c===void 0)throw this.manager.itemError(e),u;delete ji[e];for(let h=0,f=c.length;h<f;h++){let p=c[h];p.onError&&p.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Cs=new WeakMap,Fl=class extends Di{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Ii.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=Cs.get(a);h===void 0&&(h=[],Cs.set(a,h)),h.push({onLoad:t,onError:r})}return a}let o=Os("img");function l(){c(),t&&t(this);let h=Cs.get(this)||[];for(let f=0;f<h.length;f++){let p=h[f];p.onLoad&&p.onLoad(this)}Cs.delete(this),s.manager.itemEnd(e)}function u(h){c(),r&&r(h),Ii.remove(`image:${e}`);let f=Cs.get(this)||[];for(let p=0;p<f.length;p++){let g=f[p];g.onError&&g.onError(h)}Cs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){o.removeEventListener("load",l,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ii.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var ns=class extends Di{constructor(e){super(e)}load(e,t,n,r){let s=new pn,a=new Fl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},Cr=class extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Js=class extends Cr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Wu=new rt,Id=new J,Pd=new J,js=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.mapType=zn,this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vs,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Id.setFromMatrixPosition(e.matrixWorld),t.position.copy(Id),Pd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Wu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Wu,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,u=r?r.y/s.y:0;e.coordinateSystem===Us||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+u,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+u,0,0,.5,.5,0,0,0,1),t.multiply(Wu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},fl=new J,dl=new En,Ci=new J,eo=class extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=_i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(fl,dl,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fl,dl,Ci.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(fl,dl,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fl,dl,Ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Mr=new J,Ld=new Ye,Nd=new Ye,nn=class extends eo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Zr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Na*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zr*2*Math.atan(Math.tan(Na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z),Mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z)}getViewSize(e,t){return this.getViewBounds(e,Ld,Nd),t.subVectors(Nd,Ld)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Na*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/u,r*=a.width/l,n*=a.height/u}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ju=class extends js{constructor(){super(new nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Zr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},to=class extends Cr{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Ju}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},ju=class extends js{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0}},Yn=class extends Cr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new ju}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ui=class extends eo{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},$u=class extends js{constructor(){super(new Ui(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},is=class extends Cr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new $u}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},$s=class extends Cr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var sr=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Xu=new WeakMap,no=class extends Di{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&qe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&qe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Ii.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(u=>{Xu.has(a)===!0?(r&&r(Xu.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(u),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(u){return Ii.add(`image-bitmap:${e}`,u),t&&t(u),s.manager.itemEnd(e),u}).catch(function(u){r&&r(u),Xu.set(l,u),Ii.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Ii.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Is=-90,Ps=1,Hl=class extends Gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new nn(Is,Ps,e,t);r.layers=this.layers,this.add(r);let s=new nn(Is,Ps,e,t);s.layers=this.layers,this.add(s);let a=new nn(Is,Ps,e,t);a.layers=this.layers,this.add(a);let o=new nn(Is,Ps,e,t);o.layers=this.layers,this.add(o);let l=new nn(Is,Ps,e,t);l.layers=this.layers,this.add(l);let u=new nn(Is,Ps,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(let u of t)this.remove(u);if(e===_i)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Us)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,u,c]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(h,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Bl=class extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},io=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=eg.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function eg(){this._document.hidden===!1&&this.reset()}var kl=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,s,a;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:r=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,r=this.valueSize,s=e*r+r,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==r;++o)n[s+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,s,0,o,r)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,r=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let l=t*this._origIndex;this._mixBufferRegion(n,r,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let l=t,u=t+t;l!==u;++l)if(n[l]!==n[l+t]){o.setValue(n,r);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let s=n,a=r;s!==a;++s)t[s]=t[r+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,s){if(r>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,r){En.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,s){let a=this._workIndex*s;En.multiplyQuaternionsFlat(e,a,e,t,e,n),En.slerpFlat(e,t,e,t,e,a,r)}_lerp(e,t,n,r,s){let a=1-r;for(let o=0;o!==s;++o){let l=t+o;e[l]=e[l]*a+e[n+o]*r}}_lerpAdditive(e,t,n,r,s){for(let a=0;a!==s;++a){let o=t+a;e[o]=e[o]+e[n+a]*r}}},xh="\\[\\]\\.:\\/",tg=new RegExp("["+xh+"]","g"),yh="[^"+xh+"]",ng="[^"+xh.replace("\\.","")+"]",ig=/((?:WC+[\/:])*)/.source.replace("WC",yh),rg=/(WCOD+)?/.source.replace("WCOD",ng),sg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yh),ag=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yh),og=new RegExp("^"+ig+rg+sg+ag+"$"),lg=["material","materials","bones","map"],Qu=class{constructor(e,t,n){let r=n||Dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Dt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(tg,"")}static parseTrackName(e){let t=og.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);lg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){$e("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){$e("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===u){u=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){$e("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){$e("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){$e("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let a=e[r];if(a===void 0){let u=t.nodeName;$e("PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Dt.Composite=Qu;Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zl=class{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;let s=t.tracks,a=s.length,o=new Array(a),l={endingStart:Wr,endingEnd:Wr};for(let u=0;u!==a;++u){let c=s[u].createInterpolant(null);o[u]=c,c.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Pc,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let r=this._clip.duration,s=e._clip.duration,a=s/r,o=r/s;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let r=this._mixer,s=r.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,u=o.sampleValues;return l[0]=s,l[1]=s+n,u[0]=e/a,u[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,u=this._propertyBindings;switch(this.blendMode){case sp:for(let c=0,h=l.length;c!==h;++c)l[c].evaluate(a),u[c].accumulateAdditive(o);break;case Lc:default:for(let c=0,h=l.length;c!==h;++c)l[c].evaluate(a),u[c].accumulate(r,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,r=this.time+e,s=this._loopCount,a=n===rp;if(e===0)return s===-1?r:a&&(s&1)===1?t-r:r;if(n===Ic){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),r>=t||r<0){let o=Math.floor(r/t);r-=t*o,s+=Math.abs(o);let l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let u=e<0;this._setEndings(u,!u,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=s,this.time=r;if(a&&(s&1)===1)return t-r}return r}_setEndings(e,t,n){let r=this._interpolantSettings;n?(r.endingStart=Xr,r.endingEnd=Xr):(e?r.endingStart=this.zeroSlopeAtStart?Xr:Wr:r.endingStart=Ua,t?r.endingEnd=this.zeroSlopeAtEnd?Xr:Wr:r.endingEnd=Ua)}_scheduleFading(e,t,n){let r=this._mixer,s=r.time,a=this._weightInterpolant;a===null&&(a=r._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=n,this}},cg=new Float32Array(1),ro=class extends yi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,r=e._clip.tracks,s=r.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,u=this._bindingsByRootAndName,c=u[l];c===void 0&&(c={},u[l]=c);for(let h=0;h!==s;++h){let f=r[h],p=f.name,g=c[p];if(g!==void 0)++g.referenceCount,a[h]=g;else{if(g=a[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,p));continue}let y=t&&t._propertyBindings[h].binding.parsedPath;g=new kl(Dt.create(n,p,y),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,p),a[h]=g}o[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,n)}let t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){let s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){let s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let r=this._actions,s=this._actionsByClip,a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=r.length,r.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,u=l[l.length-1],c=e._byClipCacheIndex;u._byClipCacheIndex=c,l[c]=u,l.pop(),e._byClipCacheIndex=null;let h=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){let s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){let r=this._bindingsByRootAndName,s=this._bindings,a=r[t];a===void 0&&(a={},r[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,r=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[r],l=t[t.length-1],u=e._cacheIndex;l._cacheIndex=u,t[u]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[r]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new $a(new Float32Array(2),new Float32Array(2),1,cg),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){let r=t||this._root,s=r.uuid,a=typeof e=="string"?ts.findByName(r,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],u=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Lc),l!==void 0){let h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;u=l.knownActions[0],a===null&&(a=u._clip)}if(a===null)return null;let c=new zl(this,a,t,n);return this._bindAction(c,u),this._addInactiveAction(c,o,s),c}existingAction(e,t){let n=t||this._root,r=n.uuid,s=typeof e=="string"?ts.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[r]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,r=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let u=0;u!==n;++u)t[u]._update(r,e,s,a);let o=this._bindings,l=this._nActiveBindings;for(let u=0;u!==l;++u)o[u].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,r=this._actionsByClip,s=r[n];if(s!==void 0){let a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){let u=a[o];this._deactivateAction(u);let c=u._cacheIndex,h=t[t.length-1];u._cacheIndex=null,u._byClipCacheIndex=null,h._cacheIndex=c,t[c]=h,t.pop(),this._removeInactiveBindingsForAction(u)}delete r[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(let a in s){let o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var wh=class wh{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};wh.prototype.isMatrix2=!0;var eh=wh;function Mh(i,e,t,n){let r=ug(n);switch(t){case hh:return i*e;case Jl:return i*e/r.components*r.byteLength;case jl:return i*e/r.components*r.byteLength;case Lr:return i*e*2/r.components*r.byteLength;case $l:return i*e*2/r.components*r.byteLength;case fh:return i*e*3/r.components*r.byteLength;case Zn:return i*e*4/r.components*r.byteLength;case Ql:return i*e*4/r.components*r.byteLength;case po:case mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case go:case vo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tc:case ic:return Math.max(i,16)*Math.max(e,8)/4;case ec:case nc:return Math.max(i,8)*Math.max(e,8)/2;case rc:case sc:case oc:case lc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ac:case _o:case cc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case uc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case fc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case dc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case pc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case mc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case gc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case vc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case _c:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case xc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case yc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Mc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Sc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case bc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Tc:case Ec:case wc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ac:case Rc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case xo:case Cc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ug(i){switch(i){case zn:case oh:return{byteLength:1,components:1};case na:case lh:case yn:return{byteLength:2,components:1};case Kl:case Zl:return{byteLength:2,components:4};case bi:case Yl:case Kn:return{byteLength:4,components:1};case ch:case uh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Vp(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function fg(i){let e=new WeakMap;function t(o,l){let u=o.array,c=o.usage,h=u.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,u,c),o.onUploadCallback();let p;if(u instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array!="undefined"&&u instanceof Float16Array)p=i.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=i.SHORT;else if(u instanceof Uint32Array)p=i.UNSIGNED_INT;else if(u instanceof Int32Array)p=i.INT;else if(u instanceof Int8Array)p=i.BYTE;else if(u instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,u){let c=l.array,h=l.updateRanges;if(i.bindBuffer(u,o),h.length===0)i.bufferSubData(u,0,c);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){let g=h[f],y=h[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,h[f]=y)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){let y=h[p];i.bufferSubData(u,y.start*c.BYTES_PER_ELEMENT,c,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=e.get(o);if(u===void 0)e.set(o,t(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}var dg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pg=`#ifdef USE_ALPHAHASH
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
#endif`,mg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_g=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xg=`#ifdef USE_AOMAP
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
#endif`,yg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mg=`#ifdef USE_BATCHING
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
#endif`,Sg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wg=`#ifdef USE_IRIDESCENCE
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
#endif`,Ag=`#ifdef USE_BUMPMAP
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
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ng=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Dg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ug=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Og=`#define PI 3.141592653589793
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
} // validated`,Fg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hg=`vec3 transformedNormal = objectNormal;
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
#endif`,Bg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xg=`#ifdef USE_ENVMAP
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
#endif`,qg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Yg=`#ifdef USE_ENVMAP
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
#endif`,Kg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zg=`#ifdef USE_ENVMAP
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
#endif`,Jg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$g=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ev=`#ifdef USE_GRADIENTMAP
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
}`,tv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,sv=`#ifdef USE_ENVMAP
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
#endif`,av=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ov=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uv=`PhysicalMaterial material;
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
#endif`,hv=`uniform sampler2D dfgLUT;
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
}`,fv=`
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
#endif`,dv=`#if defined( RE_IndirectDiffuse )
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
#endif`,pv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mv=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,gv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_v=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bv=`#if defined( USE_POINTS_UV )
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
#endif`,Tv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ev=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Av=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cv=`#ifdef USE_MORPHTARGETS
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
#endif`,Iv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ov=`#ifdef USE_NORMALMAP
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
#endif`,Fv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$v=`float getShadowMask() {
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
}`,Qv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,e_=`#ifdef USE_SKINNING
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
#endif`,t_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,n_=`#ifdef USE_SKINNING
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
#endif`,i_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,r_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,s_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,a_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,o_=`#ifdef USE_TRANSMISSION
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
#endif`,l_=`#ifdef USE_TRANSMISSION
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
#endif`,c_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,d_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,p_=`uniform sampler2D t2D;
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
}`,m_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,v_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,__=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x_=`#include <common>
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
}`,y_=`#if DEPTH_PACKING == 3200
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
}`,M_=`#define DISTANCE
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
}`,S_=`#define DISTANCE
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
}`,b_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,T_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E_=`uniform float scale;
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
}`,w_=`uniform vec3 diffuse;
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
}`,A_=`#include <common>
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
}`,R_=`uniform vec3 diffuse;
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
}`,C_=`#define LAMBERT
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
}`,I_=`#define LAMBERT
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
}`,P_=`#define MATCAP
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
}`,L_=`#define MATCAP
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
}`,N_=`#define NORMAL
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
}`,D_=`#define NORMAL
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
}`,U_=`#define PHONG
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
}`,O_=`#define PHONG
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
}`,F_=`#define STANDARD
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
}`,H_=`#define STANDARD
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
}`,B_=`#define TOON
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
}`,k_=`#define TOON
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
}`,z_=`uniform float size;
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
}`,G_=`uniform vec3 diffuse;
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
}`,V_=`#include <common>
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
}`,W_=`uniform vec3 color;
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
}`,X_=`uniform float rotation;
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
}`,q_=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:dg,alphahash_pars_fragment:pg,alphamap_fragment:mg,alphamap_pars_fragment:gg,alphatest_fragment:vg,alphatest_pars_fragment:_g,aomap_fragment:xg,aomap_pars_fragment:yg,batching_pars_vertex:Mg,batching_vertex:Sg,begin_vertex:bg,beginnormal_vertex:Tg,bsdfs:Eg,iridescence_fragment:wg,bumpmap_pars_fragment:Ag,clipping_planes_fragment:Rg,clipping_planes_pars_fragment:Cg,clipping_planes_pars_vertex:Ig,clipping_planes_vertex:Pg,color_fragment:Lg,color_pars_fragment:Ng,color_pars_vertex:Dg,color_vertex:Ug,common:Og,cube_uv_reflection_fragment:Fg,defaultnormal_vertex:Hg,displacementmap_pars_vertex:Bg,displacementmap_vertex:kg,emissivemap_fragment:zg,emissivemap_pars_fragment:Gg,colorspace_fragment:Vg,colorspace_pars_fragment:Wg,envmap_fragment:Xg,envmap_common_pars_fragment:qg,envmap_pars_fragment:Yg,envmap_pars_vertex:Kg,envmap_physical_pars_fragment:sv,envmap_vertex:Zg,fog_vertex:Jg,fog_pars_vertex:jg,fog_fragment:$g,fog_pars_fragment:Qg,gradientmap_pars_fragment:ev,lightmap_pars_fragment:tv,lights_lambert_fragment:nv,lights_lambert_pars_fragment:iv,lights_pars_begin:rv,lights_toon_fragment:av,lights_toon_pars_fragment:ov,lights_phong_fragment:lv,lights_phong_pars_fragment:cv,lights_physical_fragment:uv,lights_physical_pars_fragment:hv,lights_fragment_begin:fv,lights_fragment_maps:dv,lights_fragment_end:pv,lightprobes_pars_fragment:mv,logdepthbuf_fragment:gv,logdepthbuf_pars_fragment:vv,logdepthbuf_pars_vertex:_v,logdepthbuf_vertex:xv,map_fragment:yv,map_pars_fragment:Mv,map_particle_fragment:Sv,map_particle_pars_fragment:bv,metalnessmap_fragment:Tv,metalnessmap_pars_fragment:Ev,morphinstance_vertex:wv,morphcolor_vertex:Av,morphnormal_vertex:Rv,morphtarget_pars_vertex:Cv,morphtarget_vertex:Iv,normal_fragment_begin:Pv,normal_fragment_maps:Lv,normal_pars_fragment:Nv,normal_pars_vertex:Dv,normal_vertex:Uv,normalmap_pars_fragment:Ov,clearcoat_normal_fragment_begin:Fv,clearcoat_normal_fragment_maps:Hv,clearcoat_pars_fragment:Bv,iridescence_pars_fragment:kv,opaque_fragment:zv,packing:Gv,premultiplied_alpha_fragment:Vv,project_vertex:Wv,dithering_fragment:Xv,dithering_pars_fragment:qv,roughnessmap_fragment:Yv,roughnessmap_pars_fragment:Kv,shadowmap_pars_fragment:Zv,shadowmap_pars_vertex:Jv,shadowmap_vertex:jv,shadowmask_pars_fragment:$v,skinbase_vertex:Qv,skinning_pars_vertex:e_,skinning_vertex:t_,skinnormal_vertex:n_,specularmap_fragment:i_,specularmap_pars_fragment:r_,tonemapping_fragment:s_,tonemapping_pars_fragment:a_,transmission_fragment:o_,transmission_pars_fragment:l_,uv_pars_fragment:c_,uv_pars_vertex:u_,uv_vertex:h_,worldpos_vertex:f_,background_vert:d_,background_frag:p_,backgroundCube_vert:m_,backgroundCube_frag:g_,cube_vert:v_,cube_frag:__,depth_vert:x_,depth_frag:y_,distance_vert:M_,distance_frag:S_,equirect_vert:b_,equirect_frag:T_,linedashed_vert:E_,linedashed_frag:w_,meshbasic_vert:A_,meshbasic_frag:R_,meshlambert_vert:C_,meshlambert_frag:I_,meshmatcap_vert:P_,meshmatcap_frag:L_,meshnormal_vert:N_,meshnormal_frag:D_,meshphong_vert:U_,meshphong_frag:O_,meshphysical_vert:F_,meshphysical_frag:H_,meshtoon_vert:B_,meshtoon_frag:k_,points_vert:z_,points_frag:G_,shadow_vert:V_,shadow_frag:W_,sprite_vert:X_,sprite_frag:q_},Re={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Hi={basic:{uniforms:An([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:An([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:An([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:An([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:An([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Be(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:An([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:An([Re.points,Re.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:An([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:An([Re.common,Re.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:An([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:An([Re.sprite,Re.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distance:{uniforms:An([Re.common,Re.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distance_vert,fragmentShader:lt.distance_frag},shadow:{uniforms:An([Re.lights,Re.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};Hi.physical={uniforms:An([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};var Uc={r:0,b:0,g:0},Y_=new rt,Wp=new tt;Wp.set(-1,0,0,0,1,0,0,0,1);function K_(i,e,t,n,r,s){let a=new Be(0),o=r===!0?0:1,l,u,c=null,h=0,f=null;function p(_){let L=_.isScene===!0?_.background:null;if(L&&L.isTexture){let E=_.backgroundBlurriness>0;L=e.get(L,E)}return L}function g(_){let L=!1,E=p(_);E===null?v(a,o):E&&E.isColor&&(v(E,1),L=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||L)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(_,L){let E=p(L);E&&(E.isCubeTexture||E.mapping===fo)?(u===void 0&&(u=new Ue(new hn(1,1,1),new jt({name:"BackgroundCubeMaterial",uniforms:ls(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,P,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=E,u.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Y_.makeRotationFromEuler(L.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Wp),u.material.toneMapped=st.getTransfer(E.colorSpace)!==bt,(c!==E||h!==E.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,c=E,h=E.version,f=i.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Ue(new es(2,2),new jt({name:"BackgroundMaterial",uniforms:ls(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,l.material.toneMapped=st.getTransfer(E.colorSpace)!==bt,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(c!==E||h!==E.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,c=E,h=E.version,f=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function v(_,L){_.getRGB(Uc,_h(i)),t.buffers.color.setClear(Uc.r,Uc.g,Uc.b,L,s)}function m(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,L=1){a.set(_),o=L,v(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,v(a,o)},render:g,addToRenderList:y,dispose:m}}function Z_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,a=!1;function o(A,S,I,D,k){let Y=!1,j=h(A,D,I,S);s!==j&&(s=j,u(s.object)),Y=p(A,D,I,k),Y&&g(A,D,I,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,E(A,S,I,D),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return i.createVertexArray()}function u(A){return i.bindVertexArray(A)}function c(A){return i.deleteVertexArray(A)}function h(A,S,I,D){let k=D.wireframe===!0,Y=n[S.id];Y===void 0&&(Y={},n[S.id]=Y);let j=A.isInstancedMesh===!0?A.id:0,se=Y[j];se===void 0&&(se={},Y[j]=se);let ne=se[I.id];ne===void 0&&(ne={},se[I.id]=ne);let le=ne[k];return le===void 0&&(le=f(l()),ne[k]=le),le}function f(A){let S=[],I=[],D=[];for(let k=0;k<t;k++)S[k]=0,I[k]=0,D[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:I,attributeDivisors:D,object:A,attributes:{},index:null}}function p(A,S,I,D){let k=s.attributes,Y=S.attributes,j=0,se=I.getAttributes();for(let ne in se)if(se[ne].location>=0){let ae=k[ne],we=Y[ne];if(we===void 0&&(ne==="instanceMatrix"&&A.instanceMatrix&&(we=A.instanceMatrix),ne==="instanceColor"&&A.instanceColor&&(we=A.instanceColor)),ae===void 0||ae.attribute!==we||we&&ae.data!==we.data)return!0;j++}return s.attributesNum!==j||s.index!==D}function g(A,S,I,D){let k={},Y=S.attributes,j=0,se=I.getAttributes();for(let ne in se)if(se[ne].location>=0){let ae=Y[ne];ae===void 0&&(ne==="instanceMatrix"&&A.instanceMatrix&&(ae=A.instanceMatrix),ne==="instanceColor"&&A.instanceColor&&(ae=A.instanceColor));let we={};we.attribute=ae,ae&&ae.data&&(we.data=ae.data),k[ne]=we,j++}s.attributes=k,s.attributesNum=j,s.index=D}function y(){let A=s.newAttributes;for(let S=0,I=A.length;S<I;S++)A[S]=0}function v(A){m(A,0)}function m(A,S){let I=s.newAttributes,D=s.enabledAttributes,k=s.attributeDivisors;I[A]=1,D[A]===0&&(i.enableVertexAttribArray(A),D[A]=1),k[A]!==S&&(i.vertexAttribDivisor(A,S),k[A]=S)}function _(){let A=s.newAttributes,S=s.enabledAttributes;for(let I=0,D=S.length;I<D;I++)S[I]!==A[I]&&(i.disableVertexAttribArray(I),S[I]=0)}function L(A,S,I,D,k,Y,j){j===!0?i.vertexAttribIPointer(A,S,I,k,Y):i.vertexAttribPointer(A,S,I,D,k,Y)}function E(A,S,I,D){y();let k=D.attributes,Y=I.getAttributes(),j=S.defaultAttributeValues;for(let se in Y){let ne=Y[se];if(ne.location>=0){let le=k[se];if(le===void 0&&(se==="instanceMatrix"&&A.instanceMatrix&&(le=A.instanceMatrix),se==="instanceColor"&&A.instanceColor&&(le=A.instanceColor)),le!==void 0){let ae=le.normalized,we=le.itemSize,Ee=e.get(le);if(Ee===void 0)continue;let it=Ee.buffer,ge=Ee.type,oe=Ee.bytesPerElement,G=ge===i.INT||ge===i.UNSIGNED_INT||le.gpuType===Yl;if(le.isInterleavedBufferAttribute){let Z=le.data,fe=Z.stride,me=le.offset;if(Z.isInstancedInterleavedBuffer){for(let _e=0;_e<ne.locationSize;_e++)m(ne.location+_e,Z.meshPerAttribute);A.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let _e=0;_e<ne.locationSize;_e++)v(ne.location+_e);i.bindBuffer(i.ARRAY_BUFFER,it);for(let _e=0;_e<ne.locationSize;_e++)L(ne.location+_e,we/ne.locationSize,ge,ae,fe*oe,(me+we/ne.locationSize*_e)*oe,G)}else{if(le.isInstancedBufferAttribute){for(let Z=0;Z<ne.locationSize;Z++)m(ne.location+Z,le.meshPerAttribute);A.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Z=0;Z<ne.locationSize;Z++)v(ne.location+Z);i.bindBuffer(i.ARRAY_BUFFER,it);for(let Z=0;Z<ne.locationSize;Z++)L(ne.location+Z,we/ne.locationSize,ge,ae,we*oe,we/ne.locationSize*Z*oe,G)}}else if(j!==void 0){let ae=j[se];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(ne.location,ae);break;case 3:i.vertexAttrib3fv(ne.location,ae);break;case 4:i.vertexAttrib4fv(ne.location,ae);break;default:i.vertexAttrib1fv(ne.location,ae)}}}}_()}function C(){x();for(let A in n){let S=n[A];for(let I in S){let D=S[I];for(let k in D){let Y=D[k];for(let j in Y)c(Y[j].object),delete Y[j];delete D[k]}}delete n[A]}}function P(A){if(n[A.id]===void 0)return;let S=n[A.id];for(let I in S){let D=S[I];for(let k in D){let Y=D[k];for(let j in Y)c(Y[j].object),delete Y[j];delete D[k]}}delete n[A.id]}function U(A){for(let S in n){let I=n[S];for(let D in I){let k=I[D];if(k[A.id]===void 0)continue;let Y=k[A.id];for(let j in Y)c(Y[j].object),delete Y[j];delete k[A.id]}}}function M(A){for(let S in n){let I=n[S],D=A.isInstancedMesh===!0?A.id:0,k=I[D];if(k!==void 0){for(let Y in k){let j=k[Y];for(let se in j)c(j[se].object),delete j[se];delete k[Y]}delete I[D],Object.keys(I).length===0&&delete n[S]}}}function x(){w(),a=!0,s!==r&&(s=r,u(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:x,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfObject:M,releaseStatesOfProgram:U,initAttributes:y,enableAttribute:v,disableUnusedAttributes:_}}function J_(i,e,t){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,c){c!==0&&(i.drawArraysInstanced(n,l,u,c),t.update(u,n,c))}function o(l,u,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,c);let f=0;for(let p=0;p<c;p++)f+=u[p];t.update(f,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function j_(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let U=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(U){return!(U!==Zn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(U){let M=U===yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==zn&&U!==Kn&&!M&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp",c=l(u);c!==u&&(qe("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);let h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),L=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),P=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:_,maxVaryings:L,maxFragmentUniforms:E,maxSamples:C,samples:P}}function $_(i){let e=this,t=null,n=0,r=!1,s=!1,a=new gi,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||n!==0||r;return r=f,n=h.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=c(h,f,0)},this.setState=function(h,f,p){let g=h.clippingPlanes,y=h.clipIntersection,v=h.clipShadows,m=i.get(h);if(!r||g===null||g.length===0||s&&!v)s?c(null):u();else{let _=s?0:n,L=_*4,E=m.clippingState||null;l.value=E,E=c(g,f,L,p);for(let C=0;C!==L;++C)E[C]=t[C];m.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(h,f,p,g){let y=h!==null?h.length:0,v=null;if(y!==0){if(v=l.value,g!==!0||v===null){let m=p+y*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(v===null||v.length<m)&&(v=new Float32Array(m));for(let L=0,E=p;L!==y;++L,E+=4)a.copy(h[L]).applyMatrix4(_,o),a.normal.toArray(v,E),v[E+3]=a.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,v}}var oa=4,Q_=6,ex=20,tx=256,So=new Ui,Sp=new Be,Ah=null,Rh=0,Ch=0,Ih=!1,nx=new J,cs=new J,ca=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:o=nx}=s;Ah=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ep(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ah,Rh,Ch),this._renderer.xr.enabled=Ih,e.scissorTest=!1,aa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ir||e.mapping===as?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ah=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:yn,format:Zn,colorSpace:Ln,depthBuffer:!1},r=bp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bp(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ix(s)),this._blurMaterial=sx(s,e,t),this._ggxMaterial=rx(s,e,t)}return r}_compileMaterial(e){let t=new Ue(new Vt,e);this._renderer.compile(t,So)}_sceneToCubeUV(e,t,n,r,s){let l=new nn(90,1,t,n),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Sp),h.toneMapping=Mi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ue(new hn,new wn({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,v=y.material,m=!1,_=e.background;_?_.isColor&&(v.color.copy(_),e.background=null,m=!0):(v.color.copy(Sp),m=!0);for(let L=0;L<6;L++){let E=L%3;E===0?(l.up.set(0,u[L],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[L],s.y,s.z)):E===1?(l.up.set(0,0,u[L]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[L],s.z)):(l.up.set(0,u[L],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[L]));let C=this._cubeSize;aa(r,E*C,L>2?C:0,C,C),h.setRenderTarget(r),m&&h.render(y,l),h.render(e,l)}h.toneMapping=p,h.autoClear=f,e.background=_}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Ir||e.mapping===as;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ep()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tp());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=e;let l=this._cubeSize;aa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,So)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,u=n/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),h=Math.sqrt(u*u-c*c),f=u*1.25,p=h*f,{_lodMax:g}=this,y=this._sizeLods[n],v=3*y*(n>g-oa?n-g+oa:0),m=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,aa(s,v,m,3*y,2*y),r.setRenderTarget(s),r.render(o,So),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,aa(e,v,m,3*y,2*y),r.setRenderTarget(e),r.render(o,So)}_blur(e,t,n,r){let s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,r,s){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;let u=o.uniforms;u.envMap.value=e.texture,u.sigma.value=s,u.mipInt.value=this._lodMax-n;let c=this._sizeLods[r],h=3*c*(r>this._lodMax-oa?r-this._lodMax+oa:0),f=4*(this._cubeSize-c);aa(t,h,f,3*c,2*c),a.setRenderTarget(t),a.render(l,So)}};function ix(i){let e=[],t=[],n=i,r=i-oa+1+Q_;for(let s=0;s<r;s++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,u=1+o,c=[l,l,u,l,u,u,l,l,u,u,l,u],h=6,f=6,p=3,g=new Float32Array(p*f*h),y=new Float32Array(p*f*h);for(let m=0;m<h;m++){let _=m%3*2/3-1,L=m>2?0:-1,E=[_,L,0,_+2/3,L,0,_+2/3,L+1,0,_,L,0,_+2/3,L+1,0,_,L+1,0];g.set(E,p*f*m);for(let C=0;C<f;C++){let P=c[C*2]*2-1,U=c[C*2+1]*2-1;m===0?cs.set(1,U,P):m===1?cs.set(-P,1,-U):m===2?cs.set(-P,U,1):m===3?cs.set(-1,U,-P):m===4?cs.set(-P,-1,U):cs.set(P,U,-1),cs.toArray(y,(m*f+C)*p)}}let v=new Vt;v.setAttribute("position",new Zt(g,p)),v.setAttribute("outputDirection",new Zt(y,p)),t.push(new Ue(v,null)),n>oa&&n--}return{lodMeshes:t,sizeLods:e}}function bp(i,e,t){let n=new un(i,e,t);return n.texture.mapping=fo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function aa(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function rx(i,e,t){return new jt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:tx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function sx(i,e,t){return new jt({name:"SphericalGaussianBlur",defines:{SAMPLES:ex,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Tp(){return new jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Ep(){return new jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bc(),fragmentShader:`

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
	`}var Fc=class extends un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ya(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new hn(5,5,5),s=new jt({name:"CubemapFromEquirect",uniforms:ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:oi});s.uniforms.tEquirect.value=t;let a=new Ue(r,s),o=t.minFilter;return t.minFilter===Si&&(t.minFilter=rn),new Hl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}};function ax(i){let e=new WeakMap,t=new WeakMap,n=null;function r(f,p=!1){return f==null?null:p?a(f):s(f)}function s(f){if(f&&f.isTexture){let p=f.mapping;if(p===Wl||p===Xl)if(e.has(f)){let g=e.get(f).texture;return o(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let y=new Fc(g.height);return y.fromEquirectangularTexture(i,f),e.set(f,y),f.addEventListener("dispose",u),o(y.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let p=f.mapping,g=p===Wl||p===Xl,y=p===Ir||p===as;if(g||y){let v=t.get(f),m=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new ca(i)),v=g?n.fromEquirectangular(f,v):n.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,t.set(f,v),v.texture;if(v!==void 0)return v.texture;{let _=f.image;return g&&_&&_.height>0||y&&_&&l(_)?(n===null&&(n=new ca(i)),v=g?n.fromEquirectangular(f):n.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,t.set(f,v),f.addEventListener("dispose",c),v.texture):null}}}return f}function o(f,p){return p===Wl?f.mapping=Ir:p===Xl&&(f.mapping=as),f}function l(f){let p=0,g=6;for(let y=0;y<g;y++)f[y]!==void 0&&p++;return p===g}function u(f){let p=f.target;p.removeEventListener("dispose",u);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function c(f){let p=f.target;p.removeEventListener("dispose",c);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function ox(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&qr("WebGLRenderer: "+n+" extension not supported."),r}}}function lx(i,e,t,n){let r={},s=new WeakMap;function a(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];let p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let p in f)e.update(f[p],i.ARRAY_BUFFER)}function u(h){let f=[],p=h.index,g=h.attributes.position,y=0;if(g===void 0)return;if(p!==null){let _=p.array;y=p.version;for(let L=0,E=_.length;L<E;L+=3){let C=_[L+0],P=_[L+1],U=_[L+2];f.push(C,P,P,U,U,C)}}else{let _=g.array;y=g.version;for(let L=0,E=_.length/3-1;L<E;L+=3){let C=L+0,P=L+1,U=L+2;f.push(C,P,P,U,U,C)}}let v=new(g.count>=65535?Ga:za)(f,1);v.version=y;let m=s.get(h);m&&e.remove(m),s.set(h,v)}function c(h){let f=s.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&u(h)}else u(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:c}}function cx(i,e,t){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,f){i.drawElements(n,f,s,h*a),t.update(f,n,1)}function u(h,f,p){p!==0&&(i.drawElementsInstanced(n,f,s,h*a,p),t.update(f,n,p))}function c(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,p);let y=0;for(let v=0;v<p;v++)y+=f[v];t.update(y,n,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c}function ux(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:$e("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function hx(i,e,t){let n=new WeakMap,r=new Pt;function s(a,o,l){let u=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=c!==void 0?c.length:0,f=n.get(o);if(f===void 0||f.count!==h){let x=function(){U.dispose(),n.delete(o),o.removeEventListener("dispose",x)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,v=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],L=0;p===!0&&(L=1),g===!0&&(L=2),y===!0&&(L=3);let E=o.attributes.position.count*L,C=1;E>e.maxTextureSize&&(C=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let P=new Float32Array(E*C*4*h),U=new Ha(P,E,C,h);U.type=Kn,U.needsUpdate=!0;let M=L*4;for(let w=0;w<h;w++){let A=v[w],S=m[w],I=_[w],D=E*C*4*w;for(let k=0;k<A.count;k++){let Y=k*M;p===!0&&(r.fromBufferAttribute(A,k),P[D+Y+0]=r.x,P[D+Y+1]=r.y,P[D+Y+2]=r.z,P[D+Y+3]=0),g===!0&&(r.fromBufferAttribute(S,k),P[D+Y+4]=r.x,P[D+Y+5]=r.y,P[D+Y+6]=r.z,P[D+Y+7]=0),y===!0&&(r.fromBufferAttribute(I,k),P[D+Y+8]=r.x,P[D+Y+9]=r.y,P[D+Y+10]=r.z,P[D+Y+11]=I.itemSize===4?r.w:1)}}f={count:h,texture:U,size:new Ye(E,C)},n.set(o,f),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let y=0;y<u.length;y++)p+=u[y];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",u)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function fx(i,e,t,n,r){let s=new WeakMap;function a(u){let c=r.render.frame,h=u.geometry,f=e.get(u,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==c&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),s.set(u,c))),u.isSkinnedMesh){let p=u.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return f}function o(){s=new WeakMap}function l(u){let c=u.target;c.removeEventListener("dispose",l),n.releaseStatesOfObject(c),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}var dx={[ao]:"LINEAR_TONE_MAPPING",[oo]:"REINHARD_TONE_MAPPING",[lo]:"CINEON_TONE_MAPPING",[ss]:"ACES_FILMIC_TONE_MAPPING",[uo]:"AGX_TONE_MAPPING",[ho]:"NEUTRAL_TONE_MAPPING",[co]:"CUSTOM_TONE_MAPPING"};function px(i,e,t,n,r,s){let a=new un(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,u=new Vt;u.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new xt([0,2,0,0,2,0],2));let c=new Ks({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Ue(u,c),f=new Ui(-1,1,1,-1,0,1),p=null,g=null,y=!1,v,m=null,_=[],L=!1;this.setSize=function(E,C){a.setSize(E,C),o!==null&&o.setSize(E,C),l!==null&&l.setSize(E,C);for(let P=0;P<_.length;P++){let U=_[P];U.setSize&&U.setSize(E,C)}},this.setEffects=function(E){_=E,L=_.length>0&&_[0].isRenderPass===!0;let C=a.width,P=a.height;_.length>0&&o===null&&(o=new un(C,P,{type:yn,depthBuffer:!1,stencilBuffer:!1}),l=new un(C,P,{type:yn,depthBuffer:!1,stencilBuffer:!1}));for(let U=0;U<_.length;U++){let M=_[U];M.setSize&&M.setSize(C,P)}},this.begin=function(E,C){if(y||E.toneMapping===Mi&&_.length===0)return!1;if(m=C,C!==null){let P=C.width,U=C.height;(a.width!==P||a.height!==U)&&this.setSize(P,U)}return L===!1&&E.setRenderTarget(a),v=E.toneMapping,E.toneMapping=Mi,!0},this.hasRenderPass=function(){return L},this.end=function(E,C){E.toneMapping=v,y=!0;let P=a,U=o;for(let M=0;M<_.length;M++){let x=_[M];x.enabled!==!1&&(x.render(E,U,P,C),x.needsSwap!==!1&&(P=U,U=U===o?l:o))}if(p!==E.outputColorSpace||g!==E.toneMapping){p=E.outputColorSpace,g=E.toneMapping,c.defines={},st.getTransfer(p)===bt&&(c.defines.SRGB_TRANSFER="");let M=dx[g];M&&(c.defines[M]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=P.texture,E.setRenderTarget(m),E.render(h,f),m=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),c.dispose()}}var Xp=new pn,Nh=new Er(1,1),qp=new Ha,Yp=new wl,Kp=new Ya,wp=[],Ap=[],Rp=new Float32Array(16),Cp=new Float32Array(9),Ip=new Float32Array(4);function ua(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=wp[r];if(s===void 0&&(s=new Float32Array(r),wp[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function mn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function gn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function kc(i,e){let t=Ap[e];t===void 0&&(t=new Int32Array(e),Ap[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function mx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function gx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2fv(this.addr,e),gn(t,e)}}function vx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mn(t,e))return;i.uniform3fv(this.addr,e),gn(t,e)}}function _x(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4fv(this.addr,e),gn(t,e)}}function xx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;Ip.set(n),i.uniformMatrix2fv(this.addr,!1,Ip),gn(t,n)}}function yx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;Cp.set(n),i.uniformMatrix3fv(this.addr,!1,Cp),gn(t,n)}}function Mx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;Rp.set(n),i.uniformMatrix4fv(this.addr,!1,Rp),gn(t,n)}}function Sx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function bx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2iv(this.addr,e),gn(t,e)}}function Tx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;i.uniform3iv(this.addr,e),gn(t,e)}}function Ex(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4iv(this.addr,e),gn(t,e)}}function wx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ax(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2uiv(this.addr,e),gn(t,e)}}function Rx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;i.uniform3uiv(this.addr,e),gn(t,e)}}function Cx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4uiv(this.addr,e),gn(t,e)}}function Ix(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Nh.compareFunction=t.isReversedDepthBuffer()?Dc:Nc,s=Nh):s=Xp,t.setTexture2D(e||s,r)}function Px(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Yp,r)}function Lx(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Kp,r)}function Nx(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||qp,r)}function Dx(i){switch(i){case 5126:return mx;case 35664:return gx;case 35665:return vx;case 35666:return _x;case 35674:return xx;case 35675:return yx;case 35676:return Mx;case 5124:case 35670:return Sx;case 35667:case 35671:return bx;case 35668:case 35672:return Tx;case 35669:case 35673:return Ex;case 5125:return wx;case 36294:return Ax;case 36295:return Rx;case 36296:return Cx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ix;case 35679:case 36299:case 36307:return Px;case 35680:case 36300:case 36308:case 36293:return Lx;case 36289:case 36303:case 36311:case 36292:return Nx}}function Ux(i,e){i.uniform1fv(this.addr,e)}function Ox(i,e){let t=ua(e,this.size,2);i.uniform2fv(this.addr,t)}function Fx(i,e){let t=ua(e,this.size,3);i.uniform3fv(this.addr,t)}function Hx(i,e){let t=ua(e,this.size,4);i.uniform4fv(this.addr,t)}function Bx(i,e){let t=ua(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function kx(i,e){let t=ua(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function zx(i,e){let t=ua(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Gx(i,e){i.uniform1iv(this.addr,e)}function Vx(i,e){i.uniform2iv(this.addr,e)}function Wx(i,e){i.uniform3iv(this.addr,e)}function Xx(i,e){i.uniform4iv(this.addr,e)}function qx(i,e){i.uniform1uiv(this.addr,e)}function Yx(i,e){i.uniform2uiv(this.addr,e)}function Kx(i,e){i.uniform3uiv(this.addr,e)}function Zx(i,e){i.uniform4uiv(this.addr,e)}function Jx(i,e,t){let n=this.cache,r=e.length,s=kc(t,r);mn(n,s)||(i.uniform1iv(this.addr,s),gn(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Nh:a=Xp;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function jx(i,e,t){let n=this.cache,r=e.length,s=kc(t,r);mn(n,s)||(i.uniform1iv(this.addr,s),gn(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Yp,s[a])}function $x(i,e,t){let n=this.cache,r=e.length,s=kc(t,r);mn(n,s)||(i.uniform1iv(this.addr,s),gn(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Kp,s[a])}function Qx(i,e,t){let n=this.cache,r=e.length,s=kc(t,r);mn(n,s)||(i.uniform1iv(this.addr,s),gn(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||qp,s[a])}function ey(i){switch(i){case 5126:return Ux;case 35664:return Ox;case 35665:return Fx;case 35666:return Hx;case 35674:return Bx;case 35675:return kx;case 35676:return zx;case 5124:case 35670:return Gx;case 35667:case 35671:return Vx;case 35668:case 35672:return Wx;case 35669:case 35673:return Xx;case 5125:return qx;case 36294:return Yx;case 36295:return Kx;case 36296:return Zx;case 35678:case 36198:case 36298:case 36306:case 35682:return Jx;case 35679:case 36299:case 36307:return jx;case 35680:case 36300:case 36308:case 36293:return $x;case 36289:case 36303:case 36311:case 36292:return Qx}}var Dh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Dx(t.type)}},Uh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ey(t.type)}},Oh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},Ph=/(\w+)(\])?(\[|\.)?/g;function Pp(i,e){i.seq.push(e),i.map[e.id]=e}function ty(i,e,t){let n=i.name,r=n.length;for(Ph.lastIndex=0;;){let s=Ph.exec(n),a=Ph.lastIndex,o=s[1],l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){Pp(t,u===void 0?new Dh(o,i,e):new Uh(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Oh(o),Pp(t,h)),t=h}}}var la=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);ty(o,l,this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function Lp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var ny=37297,iy=0;function ry(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Np=new tt;function sy(i){st._getMatrix(Np,st.workingColorSpace,i);let e=`mat3( ${Np.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(i)){case Oa:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Dp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+ry(i.getShaderSource(e),o)}else return s}function ay(i,e){let t=sy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var oy={[ao]:"Linear",[oo]:"Reinhard",[lo]:"Cineon",[ss]:"ACESFilmic",[uo]:"AgX",[ho]:"Neutral",[co]:"Custom"};function ly(i,e){let t=oy[e];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Oc=new J;function cy(){st.getLuminanceCoefficients(Oc);let i=Oc.x.toFixed(4),e=Oc.y.toFixed(4),t=Oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(To).join(`
`)}function hy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function fy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),a=s.name,o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function To(i){return i!==""}function Up(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Op(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var dy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fh(i){return i.replace(dy,my)}var py=new Map;function my(i,e){let t=lt[e];if(t===void 0){let n=py.get(e);if(n!==void 0)t=lt[n],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Fh(t)}var gy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fp(i){return i.replace(gy,vy)}function vy(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var _y={[so]:"SHADOWMAP_TYPE_PCF",[Qs]:"SHADOWMAP_TYPE_VSM"};function xy(i){return _y[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var yy={[Ir]:"ENVMAP_TYPE_CUBE",[as]:"ENVMAP_TYPE_CUBE",[fo]:"ENVMAP_TYPE_CUBE_UV"};function My(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":yy[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Sy={[as]:"ENVMAP_MODE_REFRACTION"};function by(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Sy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ty={[Vl]:"ENVMAP_BLENDING_MULTIPLY",[tp]:"ENVMAP_BLENDING_MIX",[np]:"ENVMAP_BLENDING_ADD"};function Ey(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ty[i.combine]||"ENVMAP_BLENDING_NONE"}function wy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ay(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=xy(t),u=My(t),c=by(t),h=Ey(t),f=wy(t),p=uy(t),g=hy(s),y=r.createProgram(),v,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(To).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(To).join(`
`),m.length>0&&(m+=`
`)):(v=[Hp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(To).join(`
`),m=[Hp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mi?"#define TONE_MAPPING":"",t.toneMapping!==Mi?lt.tonemapping_pars_fragment:"",t.toneMapping!==Mi?ly("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,ay("linearToOutputTexel",t.outputColorSpace),cy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(To).join(`
`)),a=Fh(a),a=Up(a,t),a=Op(a,t),o=Fh(o),o=Up(o,t),o=Op(o,t),a=Fp(a),o=Fp(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",t.glslVersion===mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let L=_+v+a,E=_+m+o,C=Lp(r,r.VERTEX_SHADER,L),P=Lp(r,r.FRAGMENT_SHADER,E);r.attachShader(y,C),r.attachShader(y,P),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function U(A){if(i.debug.checkShaderErrors){let S=r.getProgramInfoLog(y)||"",I=r.getShaderInfoLog(C)||"",D=r.getShaderInfoLog(P)||"",k=S.trim(),Y=I.trim(),j=D.trim(),se=!0,ne=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(se=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,C,P);else{let le=Dp(r,C,"vertex"),ae=Dp(r,P,"fragment");$e("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+k+`
`+le+`
`+ae)}else k!==""?qe("WebGLProgram: Program Info Log:",k):(Y===""||j==="")&&(ne=!1);ne&&(A.diagnostics={runnable:se,programLog:k,vertexShader:{log:Y,prefix:v},fragmentShader:{log:j,prefix:m}})}r.deleteShader(C),r.deleteShader(P),M=new la(r,y),x=fy(r,y)}let M;this.getUniforms=function(){return M===void 0&&U(this),M};let x;this.getAttributes=function(){return x===void 0&&U(this),x};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(y,ny)),w},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=iy++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=P,this}var Ry=0,Hh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Bh(e),t.set(e,n)),n}},Bh=class{constructor(e){this.id=Ry++,this.code=e,this.usedTimes=0}};function Cy(i){return i===Lr||i===_o||i===xo}function Iy(i,e,t,n,r,s){let a=new Ba,o=new Hh,l=new Set,u=[],c=new Map,h=n.logarithmicDepthBuffer,f=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return l.add(M),M===0?"uv":`uv${M}`}function y(M,x,w,A,S,I){let D=A.fog,k=S.geometry,Y=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?A.environment:null,j=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,se=e.get(M.envMap||Y,j),ne=se&&se.mapping===fo?se.image.height:null,le=p[M.type];M.precision!==null&&(f=n.getMaxPrecision(M.precision),f!==M.precision&&qe("WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let ae=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,we=ae!==void 0?ae.length:0,Ee=0;k.morphAttributes.position!==void 0&&(Ee=1),k.morphAttributes.normal!==void 0&&(Ee=2),k.morphAttributes.color!==void 0&&(Ee=3);let it,ge,oe,G;if(le){let B=Hi[le];it=B.vertexShader,ge=B.fragmentShader}else{it=M.vertexShader,ge=M.fragmentShader;let B=o.getVertexShaderStage(M),ie=o.getFragmentShaderStage(M);o.update(M,B,ie),oe=B.id,G=ie.id}let Z=i.getRenderTarget(),fe=i.state.buffers.depth.getReversed(),me=S.isInstancedMesh===!0,_e=S.isBatchedMesh===!0,He=!!M.map,Je=!!M.matcap,Oe=!!se,je=!!M.aoMap,dt=!!M.lightMap,et=!!M.bumpMap&&M.wireframe===!1,vt=!!M.normalMap,Ct=!!M.displacementMap,Wt=!!M.emissiveMap,Mt=!!M.metalnessMap,Ot=!!M.roughnessMap,X=M.anisotropy>0,Ht=M.clearcoat>0,ct=M.dispersion>0,F=M.retroreflectivity>0,b=M.iridescence>0,N=M.sheen>0,O=M.transmission>0,H=X&&!!M.anisotropyMap,z=Ht&&!!M.clearcoatMap,$=Ht&&!!M.clearcoatNormalMap,V=Ht&&!!M.clearcoatRoughnessMap,K=b&&!!M.iridescenceMap,ue=b&&!!M.iridescenceThicknessMap,xe=N&&!!M.sheenColorMap,de=N&&!!M.sheenRoughnessMap,ye=!!M.specularMap,be=!!M.specularColorMap,De=!!M.specularIntensityMap,Ge=O&&!!M.transmissionMap,W=O&&!!M.thicknessMap,Se=!!M.gradientMap,he=!!M.alphaMap,Te=M.alphaTest>0,Ie=!!M.alphaHash,ve=!!M.extensions,d=Mi;M.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(d=i.toneMapping);let T={shaderID:le,shaderType:M.type,shaderName:M.name,vertexShader:it,fragmentShader:ge,defines:M.defines,customVertexShaderID:oe,customFragmentShaderID:G,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:_e,batchingColor:_e&&S._colorsTexture!==null,instancing:me,instancingColor:me&&S.instanceColor!==null,instancingMorph:me&&S.morphTexture!==null,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:st.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:He,matcap:Je,envMap:Oe,envMapMode:Oe&&se.mapping,envMapCubeUVHeight:ne,aoMap:je,lightMap:dt,bumpMap:et,normalMap:vt,displacementMap:Ct,emissiveMap:Wt,normalMapObjectSpace:vt&&M.normalMapType===op,normalMapTangentSpace:vt&&M.normalMapType===Mo,packedNormalMap:vt&&M.normalMapType===Mo&&Cy(M.normalMap.format),metalnessMap:Mt,roughnessMap:Ot,anisotropy:X,anisotropyMap:H,clearcoat:Ht,clearcoatMap:z,clearcoatNormalMap:$,clearcoatRoughnessMap:V,dispersion:ct,retroreflection:F,iridescence:b,iridescenceMap:K,iridescenceThicknessMap:ue,sheen:N,sheenColorMap:xe,sheenRoughnessMap:de,specularMap:ye,specularColorMap:be,specularIntensityMap:De,transmission:O,transmissionMap:Ge,thicknessMap:W,gradientMap:Se,opaque:M.transparent===!1&&M.blending===ea&&M.alphaToCoverage===!1,alphaMap:he,alphaTest:Te,alphaHash:Ie,combine:M.combine,mapUv:He&&g(M.map.channel),aoMapUv:je&&g(M.aoMap.channel),lightMapUv:dt&&g(M.lightMap.channel),bumpMapUv:et&&g(M.bumpMap.channel),normalMapUv:vt&&g(M.normalMap.channel),displacementMapUv:Ct&&g(M.displacementMap.channel),emissiveMapUv:Wt&&g(M.emissiveMap.channel),metalnessMapUv:Mt&&g(M.metalnessMap.channel),roughnessMapUv:Ot&&g(M.roughnessMap.channel),anisotropyMapUv:H&&g(M.anisotropyMap.channel),clearcoatMapUv:z&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:$&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:de&&g(M.sheenRoughnessMap.channel),specularMapUv:ye&&g(M.specularMap.channel),specularColorMapUv:be&&g(M.specularColorMap.channel),specularIntensityMapUv:De&&g(M.specularIntensityMap.channel),transmissionMapUv:Ge&&g(M.transmissionMap.channel),thicknessMapUv:W&&g(M.thicknessMap.channel),alphaMapUv:he&&g(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(vt||X),vertexNormals:!!k.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:S.isPoints===!0&&!!k.attributes.uv&&(He||he),fog:!!D,useFog:M.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||k.attributes.normal===void 0&&vt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:fe,skinning:S.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Ee,numSunLights:x.sun.length,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numSunLightShadows:x.sunShadowMap.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:d,decodeVideoTexture:He&&M.map.isVideoTexture===!0&&st.getTransfer(M.map.colorSpace)===bt,decodeVideoTextureEmissive:Wt&&M.emissiveMap.isVideoTexture===!0&&st.getTransfer(M.emissiveMap.colorSpace)===bt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===kn,flipSided:M.side===xn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ve&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&M.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return T.vertexUv1s=l.has(1),T.vertexUv2s=l.has(2),T.vertexUv3s=l.has(3),l.clear(),T}function v(M){let x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(let w in M.defines)x.push(w),x.push(M.defines[w]);return M.isRawShaderMaterial===!1&&(m(x,M),_(x,M),x.push(i.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function m(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numSunLights),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numSunLightShadows),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function _(M,x){a.disableAll(),x.instancing&&a.enable(0),x.instancingColor&&a.enable(1),x.instancingMorph&&a.enable(2),x.matcap&&a.enable(3),x.envMap&&a.enable(4),x.normalMapObjectSpace&&a.enable(5),x.normalMapTangentSpace&&a.enable(6),x.clearcoat&&a.enable(7),x.iridescence&&a.enable(8),x.alphaTest&&a.enable(9),x.vertexColors&&a.enable(10),x.vertexAlphas&&a.enable(11),x.vertexUv1s&&a.enable(12),x.vertexUv2s&&a.enable(13),x.vertexUv3s&&a.enable(14),x.vertexTangents&&a.enable(15),x.anisotropy&&a.enable(16),x.alphaHash&&a.enable(17),x.batching&&a.enable(18),x.dispersion&&a.enable(19),x.retroreflection&&a.enable(24),x.batchingColor&&a.enable(20),x.gradientMap&&a.enable(21),x.packedNormalMap&&a.enable(22),x.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),x.numLightProbeGrids>0&&a.enable(22),x.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function L(M){let x=p[M.type],w;if(x){let A=Hi[x];w=or.clone(A.uniforms)}else w=M.uniforms;return w}function E(M,x){let w=c.get(x);return w!==void 0?++w.usedTimes:(w=new Ay(i,x,M,r),u.push(w),c.set(x,w)),w}function C(M){if(--M.usedTimes===0){let x=u.indexOf(M);u[x]=u[u.length-1],u.pop(),c.delete(M.cacheKey),M.destroy()}}function P(M){o.remove(M)}function U(){o.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:L,acquireProgram:E,releaseProgram:C,releaseShaderCache:P,programs:u,dispose:U}}function Py(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Ly(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Bp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function kp(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,g,y,v,m){let _=i[e];return _===void 0?(_={id:f.id,object:f,geometry:p,material:g,materialVariant:a(f),groupOrder:y,renderOrder:f.renderOrder,z:v,group:m},i[e]=_):(_.id=f.id,_.object=f,_.geometry=p,_.material=g,_.materialVariant=a(f),_.groupOrder=y,_.renderOrder=f.renderOrder,_.z=v,_.group=m),e++,_}function l(f,p,g,y,v,m,_){_.reversedDepth===!0&&(v=-v);let L=o(f,p,g,y,v,m);g.transmission>0?n.push(L):g.transparent===!0?r.push(L):t.push(L)}function u(f,p,g,y,v,m){let _=o(f,p,g,y,v,m);g.transmission>0?n.unshift(_):g.transparent===!0?r.unshift(_):t.unshift(_)}function c(f,p){t.length>1&&t.sort(f||Ly),n.length>1&&n.sort(p||Bp),r.length>1&&r.sort(p||Bp)}function h(){for(let f=e,p=i.length;f<p;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:u,finish:h,sort:c}}function Ny(){let i=new WeakMap;function e(n,r){let s=i.get(n),a;return s===void 0?(a=new kp,i.set(n,[a])):r>=s.length?(a=new kp,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Dy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new J,color:new Be};break;case"SpotLight":t={position:new J,direction:new J,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new J,halfWidth:new J,halfHeight:new J};break}return i[e.id]=t,t}}}function Uy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Oy=0;function Fy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Hy(i){let e=new Dy,t=Uy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new J);let r=new J,s=new rt,a=new rt;function o(u){let c=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,y=0,v=0,m=0,_=0,L=0,E=0,C=0,P=0,U=0,M=0,x=0,w=0;u.sort(Fy);for(let S=0,I=u.length;S<I;S++){let D=u[S],k=D.color,Y=D.intensity,j=D.distance,se=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Lr?se=D.shadow.map.texture:se=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)c+=k.r*Y,h+=k.g*Y,f+=k.b*Y;else if(D.isLightProbe){for(let ne=0;ne<9;ne++)n.probe[ne].addScaledVector(D.sh.coefficients[ne],Y);w++}else if(D.isSunLight){let ne=e.get(D);if(ne.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let le=D.shadow,ae=t.get(D);ae.shadowIntensity=le.intensity,ae.shadowBias=le.bias,ae.shadowNormalBias=le.normalBias,ae.shadowRadius=le.radius,ae.shadowMapSize.copy(le.mapSize).multiply(le.getFrameExtents()),n.sunShadow[g]=ae,n.sunShadowMap[g]=se;let we=le.getViewportCount();for(let Ee=0;Ee<we;Ee++)n.sunShadowMatrix[y+Ee]=le.getMatrix(Ee),n.sunShadowCascade[y+Ee]=le._cascadeData[Ee];y+=we,g++}n.sun[p]=ne,p++}else if(D.isDirectionalLight){let ne=e.get(D);if(ne.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let le=D.shadow,ae=t.get(D);ae.shadowIntensity=le.intensity,ae.shadowBias=le.bias,ae.shadowNormalBias=le.normalBias,ae.shadowRadius=le.radius,ae.shadowMapSize=le.mapSize,n.directionalShadow[v]=ae,n.directionalShadowMap[v]=se,n.directionalShadowMatrix[v]=D.shadow.matrix,C++}n.directional[v]=ne,v++}else if(D.isSpotLight){let ne=e.get(D);ne.position.setFromMatrixPosition(D.matrixWorld),ne.color.copy(k).multiplyScalar(Y),ne.distance=j,ne.coneCos=Math.cos(D.angle),ne.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),ne.decay=D.decay,n.spot[_]=ne;let le=D.shadow;if(D.map&&(n.spotLightMap[M]=D.map,M++,le.updateMatrices(D),D.castShadow&&x++),n.spotLightMatrix[_]=le.matrix,D.castShadow){let ae=t.get(D);ae.shadowIntensity=le.intensity,ae.shadowBias=le.bias,ae.shadowNormalBias=le.normalBias,ae.shadowRadius=le.radius,ae.shadowMapSize=le.mapSize,n.spotShadow[_]=ae,n.spotShadowMap[_]=se,U++}_++}else if(D.isRectAreaLight){let ne=e.get(D);ne.color.copy(k).multiplyScalar(Y),ne.halfWidth.set(D.width*.5,0,0),ne.halfHeight.set(0,D.height*.5,0),n.rectArea[L]=ne,L++}else if(D.isPointLight){let ne=e.get(D);if(ne.color.copy(D.color).multiplyScalar(D.intensity),ne.distance=D.distance,ne.decay=D.decay,D.castShadow){let le=D.shadow,ae=t.get(D);ae.shadowIntensity=le.intensity,ae.shadowBias=le.bias,ae.shadowNormalBias=le.normalBias,ae.shadowRadius=le.radius,ae.shadowMapSize=le.mapSize,ae.shadowCameraNear=le.camera.near,ae.shadowCameraFar=le.camera.far,n.pointShadow[m]=ae,n.pointShadowMap[m]=se,n.pointShadowMatrix[m]=D.shadow.matrix,P++}n.point[m]=ne,m++}else if(D.isHemisphereLight){let ne=e.get(D);ne.skyColor.copy(D.color).multiplyScalar(Y),ne.groundColor.copy(D.groundColor).multiplyScalar(Y),n.hemi[E]=ne,E++}}L>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=h,n.ambient[2]=f;let A=n.hash;(A.sunLength!==p||A.directionalLength!==v||A.pointLength!==m||A.spotLength!==_||A.rectAreaLength!==L||A.hemiLength!==E||A.numSunShadows!==g||A.numDirectionalShadows!==C||A.numPointShadows!==P||A.numSpotShadows!==U||A.numSpotMaps!==M||A.numLightProbes!==w)&&(n.sun.length=p,n.directional.length=v,n.spot.length=_,n.rectArea.length=L,n.point.length=m,n.hemi.length=E,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=P,n.pointShadowMap.length=P,n.pointShadowMatrix.length=P,n.spotShadow.length=U,n.spotShadowMap.length=U,n.spotLightMatrix.length=U+M-x,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=x,n.numLightProbes=w,A.sunLength=p,A.directionalLength=v,A.pointLength=m,A.spotLength=_,A.rectAreaLength=L,A.hemiLength=E,A.numSunShadows=g,A.numDirectionalShadows=C,A.numPointShadows=P,A.numSpotShadows=U,A.numSpotMaps=M,A.numLightProbes=w,n.version=Oy++)}function l(u,c){let h=0,f=0,p=0,g=0,y=0,v=0,m=c.matrixWorldInverse;for(let _=0,L=u.length;_<L;_++){let E=u[_];if(E.isSunLight){let C=n.sun[h];C.direction.setFromMatrixPosition(E.matrixWorld),C.direction.transformDirection(m),h++}else if(E.isDirectionalLight){let C=n.directional[f];C.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(m),f++}else if(E.isSpotLight){let C=n.spot[g];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(m),C.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(m),g++}else if(E.isRectAreaLight){let C=n.rectArea[y];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(m),a.identity(),s.copy(E.matrixWorld),s.premultiply(m),a.extractRotation(s),C.halfWidth.set(E.width*.5,0,0),C.halfHeight.set(0,E.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),y++}else if(E.isPointLight){let C=n.point[p];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(m),p++}else if(E.isHemisphereLight){let C=n.hemi[v];C.direction.setFromMatrixPosition(E.matrixWorld),C.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function zp(i){let e=new Hy(i),t=[],n=[],r=[];function s(f){h.camera=f,t.length=0,n.length=0,r.length=0}function a(f){t.push(f)}function o(f){n.push(f)}function l(f){r.push(f)}function u(){e.setup(t)}function c(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:u,setupLightsView:c,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function By(i){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new zp(i),e.set(r,[o])):s>=a.length?(o=new zp(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var ky=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zy=`uniform sampler2D shadow_pass;
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
}`,Gy=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],Vy=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],Gp=new rt,bo=new J,Lh=new J;function Wy(i,e,t){let n=new Vs,r=new Ye,s=new Ye,a=new Pt,o=new Il,l=new Pl,u={},c=t.maxTextureSize,h={[Oi]:xn,[xn]:Oi,[kn]:kn},f=new jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:ky,fragmentShader:zy}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new Vt;g.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ue(g,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=so;let m=this.type;this.render=function(P,U,M){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||P.length===0)return;this.type===Od&&(qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=so);let x=i.getRenderTarget(),w=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),S=i.state;S.setBlending(oi),S.buffers.depth.getReversed()===!0?S.buffers.color.setClear(0,0,0,0):S.buffers.color.setClear(1,1,1,1),S.buffers.depth.setTest(!0),S.setScissorTest(!1);let I=m!==this.type;I&&U.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(k=>k.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,k=P.length;D<k;D++){let Y=P[D],j=Y.shadow;if(j===void 0){qe("WebGLShadowMap:",Y,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);let se=j.getFrameExtents();r.multiply(se),s.copy(j.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/se.x),r.x=s.x*se.x,j.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/se.y),r.y=s.y*se.y,j.mapSize.y=s.y));let ne=i.state.buffers.depth.getReversed();if(j.camera._reversedDepth=ne,j.map===null||I===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===Qs){if(Y.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new un(r.x,r.y,{format:Lr,type:yn,minFilter:rn,magFilter:rn,generateMipmaps:!1}),j.map.texture.name=Y.name+".shadowMap",j.map.depthTexture=new Er(r.x,r.y,Kn),j.map.depthTexture.name=Y.name+".shadowMapDepth",j.map.depthTexture.format=Pi,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=zt,j.map.depthTexture.magFilter=zt}else Y.isPointLight?(j.map=new Fc(r.x),j.map.depthTexture=new Cl(r.x,bi)):(j.map=new un(r.x,r.y),j.map.depthTexture=new Er(r.x,r.y,bi)),j.map.depthTexture.name=Y.name+".shadowMap",j.map.depthTexture.format=Pi,this.type===so?(j.map.depthTexture.compareFunction=ne?Dc:Nc,j.map.depthTexture.minFilter=rn,j.map.depthTexture.magFilter=rn):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=zt,j.map.depthTexture.magFilter=zt);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==r.x||j.map.height!==r.y)&&j.map.setSize(r.x,r.y);let le=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();Y.isPointLight!==!0&&j.updateMatrices(Y,M);for(let ae=0;ae<le;ae++){let we=j.getCamera(ae);if(Y.isPointLight){let Ee=j.camera,it=j.matrix,ge=Y.distance||Ee.far;ge!==Ee.far&&(Ee.far=ge,Ee.updateProjectionMatrix()),bo.setFromMatrixPosition(Y.matrixWorld),Ee.position.copy(bo),Lh.copy(Ee.position),Lh.add(Gy[ae]),Ee.up.copy(Vy[ae]),Ee.lookAt(Lh),Ee.updateMatrixWorld(),it.makeTranslation(-bo.x,-bo.y,-bo.z),Gp.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),j._frustum.setFromProjectionMatrix(Gp,Ee.coordinateSystem,Ee.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)i.setRenderTarget(j.map,ae),i.clear();else{ae===0&&(i.setRenderTarget(j.map),i.clear());let Ee=j.getViewport(ae);a.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),S.viewport(a)}n=j.getFrustum(ae),E(U,M,we,Y,this.type)}j.isPointLightShadow!==!0&&this.type===Qs&&_(j,M),j.needsUpdate=!1}m=this.type,v.needsUpdate=!1,i.setRenderTarget(x,w,A)};function _(P,U){let M=e.update(y);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null?P.mapPass=new un(r.x,r.y,{format:Lr,type:yn}):(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)&&P.mapPass.setSize(P.map.width,P.map.height),f.uniforms.shadow_pass.value=P.map.depthTexture,f.uniforms.resolution.value.set(P.map.width,P.map.height),f.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(U,null,M,f,y,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value.set(P.map.width,P.map.height),p.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(U,null,M,p,y,null)}function L(P,U,M,x){let w=null,A=M.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(A!==void 0)w=A;else if(w=M.isPointLight===!0?l:o,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){let S=w.uuid,I=U.uuid,D=u[S];D===void 0&&(D={},u[S]=D);let k=D[I];k===void 0&&(k=w.clone(),D[I]=k,U.addEventListener("dispose",C)),w=k}if(w.visible=U.visible,w.wireframe=U.wireframe,x===Qs?w.side=U.shadowSide!==null?U.shadowSide:U.side:w.side=U.shadowSide!==null?U.shadowSide:h[U.side],w.alphaMap=U.alphaMap,w.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,w.map=U.map,w.clipShadows=U.clipShadows,w.clippingPlanes=U.clippingPlanes,w.clipIntersection=U.clipIntersection,w.displacementMap=U.displacementMap,w.displacementScale=U.displacementScale,w.displacementBias=U.displacementBias,w.wireframeLinewidth=U.wireframeLinewidth,w.linewidth=U.linewidth,M.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let S=i.properties.get(w);S.light=M}return w}function E(P,U,M,x,w){if(P.visible===!1)return;if(P.layers.test(U.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&w===Qs)&&(!P.frustumCulled||P.intersectsFrustum(n))){P.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,P.matrixWorld);let I=e.update(P),D=P.material;if(Array.isArray(D)){let k=I.groups;for(let Y=0,j=k.length;Y<j;Y++){let se=k[Y],ne=D[se.materialIndex];if(ne&&ne.visible){let le=L(P,ne,x,w);P.onBeforeShadow(i,P,U,M,I,le,se),i.renderBufferDirect(M,null,I,le,P,se),P.onAfterShadow(i,P,U,M,I,le,se)}}}else if(D.visible){let k=L(P,D,x,w);P.onBeforeShadow(i,P,U,M,I,k,null),i.renderBufferDirect(M,null,I,k,P,null),P.onAfterShadow(i,P,U,M,I,k,null)}}let S=P.children;for(let I=0,D=S.length;I<D;I++)E(S[I],U,M,x,w)}function C(P){P.target.removeEventListener("dispose",C);for(let M in u){let x=u[M],w=P.target.uuid;w in x&&(x[w].dispose(),delete x[w])}}}function Xy(i,e){function t(){let W=!1,Se=new Pt,he=null,Te=new Pt(0,0,0,0);return{setMask:function(Ie){he!==Ie&&!W&&(i.colorMask(Ie,Ie,Ie,Ie),he=Ie)},setLocked:function(Ie){W=Ie},setClear:function(Ie,ve,d,T,B){B===!0&&(Ie*=T,ve*=T,d*=T),Se.set(Ie,ve,d,T),Te.equals(Se)===!1&&(i.clearColor(Ie,ve,d,T),Te.copy(Se))},reset:function(){W=!1,he=null,Te.set(-1,0,0,0)}}}function n(){let W=!1,Se=!1,he=null,Te=null,Ie=null;return{setReversed:function(ve){if(Se!==ve){let d=e.get("EXT_clip_control");ve?d.clipControlEXT(d.LOWER_LEFT_EXT,d.ZERO_TO_ONE_EXT):d.clipControlEXT(d.LOWER_LEFT_EXT,d.NEGATIVE_ONE_TO_ONE_EXT),Se=ve;let T=Ie;Ie=null,this.setClear(T)}},getReversed:function(){return Se},setTest:function(ve){ve?Z(i.DEPTH_TEST):fe(i.DEPTH_TEST)},setMask:function(ve){he!==ve&&!W&&(i.depthMask(ve),he=ve)},setFunc:function(ve){if(Se&&(ve=_p[ve]),Te!==ve){switch(ve){case vl:i.depthFunc(i.NEVER);break;case _l:i.depthFunc(i.ALWAYS);break;case xl:i.depthFunc(i.LESS);break;case Ns:i.depthFunc(i.LEQUAL);break;case yl:i.depthFunc(i.EQUAL);break;case Ml:i.depthFunc(i.GEQUAL);break;case Sl:i.depthFunc(i.GREATER);break;case bl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Te=ve}},setLocked:function(ve){W=ve},setClear:function(ve){Ie!==ve&&(Ie=ve,Se&&(ve=1-ve),i.clearDepth(ve))},reset:function(){W=!1,he=null,Te=null,Ie=null,Se=!1}}}function r(){let W=!1,Se=null,he=null,Te=null,Ie=null,ve=null,d=null,T=null,B=null;return{setTest:function(ie){W||(ie?Z(i.STENCIL_TEST):fe(i.STENCIL_TEST))},setMask:function(ie){Se!==ie&&!W&&(i.stencilMask(ie),Se=ie)},setFunc:function(ie,Q,re){(he!==ie||Te!==Q||Ie!==re)&&(i.stencilFunc(ie,Q,re),he=ie,Te=Q,Ie=re)},setOp:function(ie,Q,re){(ve!==ie||d!==Q||T!==re)&&(i.stencilOp(ie,Q,re),ve=ie,d=Q,T=re)},setLocked:function(ie){W=ie},setClear:function(ie){B!==ie&&(i.clearStencil(ie),B=ie)},reset:function(){W=!1,Se=null,he=null,Te=null,Ie=null,ve=null,d=null,T=null,B=null}}}let s=new t,a=new n,o=new r,l=new WeakMap,u=new WeakMap,c={},h={},f={},p=new WeakMap,g=[],y=null,v=!1,m=null,_=null,L=null,E=null,C=null,P=null,U=null,M=new Be(0,0,0),x=0,w=!1,A=null,S=null,I=null,D=null,k=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,se=0,ne=i.getParameter(i.VERSION);ne.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(ne)[1]),j=se>=1):ne.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),j=se>=2);let le=null,ae={},we=i.getParameter(i.SCISSOR_BOX),Ee=i.getParameter(i.VIEWPORT),it=new Pt().fromArray(we),ge=new Pt().fromArray(Ee);function oe(W,Se,he,Te){let Ie=new Uint8Array(4),ve=i.createTexture();i.bindTexture(W,ve),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let d=0;d<he;d++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Se,0,i.RGBA,1,1,Te,0,i.RGBA,i.UNSIGNED_BYTE,Ie):i.texImage2D(Se+d,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ie);return ve}let G={};G[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),G[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),G[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(i.DEPTH_TEST),a.setFunc(Ns),et(!1),vt(th),Z(i.CULL_FACE),je(oi);function Z(W){c[W]!==!0&&(i.enable(W),c[W]=!0)}function fe(W){c[W]!==!1&&(i.disable(W),c[W]=!1)}function me(W,Se){return f[W]!==Se?(i.bindFramebuffer(W,Se),f[W]=Se,W===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Se),W===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Se),!0):!1}function _e(W,Se){let he=g,Te=!1;if(W){he=p.get(Se),he===void 0&&(he=[],p.set(Se,he));let Ie=W.textures;if(he.length!==Ie.length||he[0]!==i.COLOR_ATTACHMENT0){for(let ve=0,d=Ie.length;ve<d;ve++)he[ve]=i.COLOR_ATTACHMENT0+ve;he.length=Ie.length,Te=!0}}else he[0]!==i.BACK&&(he[0]=i.BACK,Te=!0);Te&&i.drawBuffers(he)}function He(W){return y!==W?(i.useProgram(W),y=W,!0):!1}let Je={[rs]:i.FUNC_ADD,[Hd]:i.FUNC_SUBTRACT,[Bd]:i.FUNC_REVERSE_SUBTRACT};Je[kd]=i.MIN,Je[zd]=i.MAX;let Oe={[Gd]:i.ZERO,[Vd]:i.ONE,[Wd]:i.SRC_COLOR,[rh]:i.SRC_ALPHA,[Jd]:i.SRC_ALPHA_SATURATE,[Kd]:i.DST_COLOR,[qd]:i.DST_ALPHA,[Xd]:i.ONE_MINUS_SRC_COLOR,[sh]:i.ONE_MINUS_SRC_ALPHA,[Zd]:i.ONE_MINUS_DST_COLOR,[Yd]:i.ONE_MINUS_DST_ALPHA,[jd]:i.CONSTANT_COLOR,[$d]:i.ONE_MINUS_CONSTANT_COLOR,[Qd]:i.CONSTANT_ALPHA,[ep]:i.ONE_MINUS_CONSTANT_ALPHA};function je(W,Se,he,Te,Ie,ve,d,T,B,ie){if(W===oi){v===!0&&(fe(i.BLEND),v=!1);return}if(v===!1&&(Z(i.BLEND),v=!0),W!==Fd){if(W!==m||ie!==w){if((_!==rs||C!==rs)&&(i.blendEquation(i.FUNC_ADD),_=rs,C=rs),ie)switch(W){case ea:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ar:i.blendFunc(i.ONE,i.ONE);break;case nh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ih:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:$e("WebGLState: Invalid blending: ",W);break}else switch(W){case ea:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ar:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case nh:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ih:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",W);break}L=null,E=null,P=null,U=null,M.set(0,0,0),x=0,m=W,w=ie}return}Ie=Ie||Se,ve=ve||he,d=d||Te,(Se!==_||Ie!==C)&&(i.blendEquationSeparate(Je[Se],Je[Ie]),_=Se,C=Ie),(he!==L||Te!==E||ve!==P||d!==U)&&(i.blendFuncSeparate(Oe[he],Oe[Te],Oe[ve],Oe[d]),L=he,E=Te,P=ve,U=d),(T.equals(M)===!1||B!==x)&&(i.blendColor(T.r,T.g,T.b,B),M.copy(T),x=B),m=W,w=!1}function dt(W,Se){W.side===kn?fe(i.CULL_FACE):Z(i.CULL_FACE);let he=W.side===xn;Se&&(he=!he),et(he),W.blending===ea&&W.transparent===!1?je(oi):je(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),a.setFunc(W.depthFunc),a.setTest(W.depthTest),a.setMask(W.depthWrite),s.setMask(W.colorWrite);let Te=W.stencilWrite;o.setTest(Te),Te&&(o.setMask(W.stencilWriteMask),o.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),o.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Wt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(W){A!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),A=W)}function vt(W){W!==Dd?(Z(i.CULL_FACE),W!==S&&(W===th?i.cullFace(i.BACK):W===Ud?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):fe(i.CULL_FACE),S=W}function Ct(W){W!==I&&(j&&i.lineWidth(W),I=W)}function Wt(W,Se,he){W?(Z(i.POLYGON_OFFSET_FILL),(D!==Se||k!==he)&&(D=Se,k=he,a.getReversed()&&(Se=-Se),i.polygonOffset(Se,he))):fe(i.POLYGON_OFFSET_FILL)}function Mt(W){W?Z(i.SCISSOR_TEST):fe(i.SCISSOR_TEST)}function Ot(W){W===void 0&&(W=i.TEXTURE0+Y-1),le!==W&&(i.activeTexture(W),le=W)}function X(W,Se,he){he===void 0&&(le===null?he=i.TEXTURE0+Y-1:he=le);let Te=ae[he];Te===void 0&&(Te={type:void 0,texture:void 0},ae[he]=Te),(Te.type!==W||Te.texture!==Se)&&(le!==he&&(i.activeTexture(he),le=he),i.bindTexture(W,Se||G[W]),Te.type=W,Te.texture=Se)}function Ht(){let W=ae[le];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function ct(){try{i.compressedTexImage2D(...arguments)}catch(W){$e("WebGLState:",W)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(W){$e("WebGLState:",W)}}function b(){try{i.texSubImage2D(...arguments)}catch(W){$e("WebGLState:",W)}}function N(){try{i.texSubImage3D(...arguments)}catch(W){$e("WebGLState:",W)}}function O(){try{i.compressedTexSubImage2D(...arguments)}catch(W){$e("WebGLState:",W)}}function H(){try{i.compressedTexSubImage3D(...arguments)}catch(W){$e("WebGLState:",W)}}function z(){try{i.texStorage2D(...arguments)}catch(W){$e("WebGLState:",W)}}function $(){try{i.texStorage3D(...arguments)}catch(W){$e("WebGLState:",W)}}function V(){try{i.texImage2D(...arguments)}catch(W){$e("WebGLState:",W)}}function K(){try{i.texImage3D(...arguments)}catch(W){$e("WebGLState:",W)}}function ue(W){return h[W]!==void 0?h[W]:i.getParameter(W)}function xe(W,Se){h[W]!==Se&&(i.pixelStorei(W,Se),h[W]=Se)}function de(W){it.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),it.copy(W))}function ye(W){ge.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),ge.copy(W))}function be(W,Se){let he=u.get(Se);he===void 0&&(he=new WeakMap,u.set(Se,he));let Te=he.get(W);Te===void 0&&(Te=i.getUniformBlockIndex(Se,W.name),he.set(W,Te))}function De(W,Se){let Te=u.get(Se).get(W);l.get(Se)!==Te&&(i.uniformBlockBinding(Se,Te,W.__bindingPointIndex),l.set(Se,Te))}function Ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),c={},h={},le=null,ae={},f={},p=new WeakMap,g=[],y=null,v=!1,m=null,_=null,L=null,E=null,C=null,P=null,U=null,M=new Be(0,0,0),x=0,w=!1,A=null,S=null,I=null,D=null,k=null,it.set(0,0,i.canvas.width,i.canvas.height),ge.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Z,disable:fe,bindFramebuffer:me,drawBuffers:_e,useProgram:He,setBlending:je,setMaterial:dt,setFlipSided:et,setCullFace:vt,setLineWidth:Ct,setPolygonOffset:Wt,setScissorTest:Mt,activeTexture:Ot,bindTexture:X,unbindTexture:Ht,compressedTexImage2D:ct,compressedTexImage3D:F,texImage2D:V,texImage3D:K,pixelStorei:xe,getParameter:ue,updateUBOMapping:be,uniformBlockBinding:De,texStorage2D:z,texStorage3D:$,texSubImage2D:b,texSubImage3D:N,compressedTexSubImage2D:O,compressedTexSubImage3D:H,scissor:de,viewport:ye,reset:Ge}}function qy(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ye,c=new WeakMap,h=new Set,f,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(F,b){return g?new OffscreenCanvas(F,b):Os("canvas")}function v(F,b,N){let O=1,H=ct(F);if((H.width>N||H.height>N)&&(O=N/Math.max(H.width,H.height)),O<1)if(typeof HTMLImageElement!="undefined"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&F instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&F instanceof ImageBitmap||typeof VideoFrame!="undefined"&&F instanceof VideoFrame){let z=Math.floor(O*H.width),$=Math.floor(O*H.height);f===void 0&&(f=y(z,$));let V=b?y(z,$):f;return V.width=z,V.height=$,V.getContext("2d").drawImage(F,0,0,z,$),qe("WebGLRenderer: Texture has been resized from ("+H.width+"x"+H.height+") to ("+z+"x"+$+")."),V}else return"data"in F&&qe("WebGLRenderer: Image in DataTexture is too big ("+H.width+"x"+H.height+")."),F;return F}function m(F){return F.generateMipmaps}function _(F){i.generateMipmap(F)}function L(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(F,b,N,O,H,z=!1){if(F!==null){if(i[F]!==void 0)return i[F];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let $;O&&($=e.get("EXT_texture_norm16"),$||qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let V=b;if(b===i.RED&&(N===i.FLOAT&&(V=i.R32F),N===i.HALF_FLOAT&&(V=i.R16F),N===i.UNSIGNED_BYTE&&(V=i.R8),N===i.UNSIGNED_SHORT&&$&&(V=$.R16_EXT),N===i.SHORT&&$&&(V=$.R16_SNORM_EXT)),b===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(V=i.R8UI),N===i.UNSIGNED_SHORT&&(V=i.R16UI),N===i.UNSIGNED_INT&&(V=i.R32UI),N===i.BYTE&&(V=i.R8I),N===i.SHORT&&(V=i.R16I),N===i.INT&&(V=i.R32I)),b===i.RG&&(N===i.FLOAT&&(V=i.RG32F),N===i.HALF_FLOAT&&(V=i.RG16F),N===i.UNSIGNED_BYTE&&(V=i.RG8),N===i.UNSIGNED_SHORT&&$&&(V=$.RG16_EXT),N===i.SHORT&&$&&(V=$.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(V=i.RG8UI),N===i.UNSIGNED_SHORT&&(V=i.RG16UI),N===i.UNSIGNED_INT&&(V=i.RG32UI),N===i.BYTE&&(V=i.RG8I),N===i.SHORT&&(V=i.RG16I),N===i.INT&&(V=i.RG32I)),b===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(V=i.RGB8UI),N===i.UNSIGNED_SHORT&&(V=i.RGB16UI),N===i.UNSIGNED_INT&&(V=i.RGB32UI),N===i.BYTE&&(V=i.RGB8I),N===i.SHORT&&(V=i.RGB16I),N===i.INT&&(V=i.RGB32I)),b===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(V=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(V=i.RGBA16UI),N===i.UNSIGNED_INT&&(V=i.RGBA32UI),N===i.BYTE&&(V=i.RGBA8I),N===i.SHORT&&(V=i.RGBA16I),N===i.INT&&(V=i.RGBA32I)),b===i.RGB&&(N===i.UNSIGNED_SHORT&&$&&(V=$.RGB16_EXT),N===i.SHORT&&$&&(V=$.RGB16_SNORM_EXT),N===i.UNSIGNED_INT_5_9_9_9_REV&&(V=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(V=i.R11F_G11F_B10F)),b===i.RGBA){let K=z?Oa:st.getTransfer(H);N===i.FLOAT&&(V=i.RGBA32F),N===i.HALF_FLOAT&&(V=i.RGBA16F),N===i.UNSIGNED_BYTE&&(V=K===bt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT&&$&&(V=$.RGBA16_EXT),N===i.SHORT&&$&&(V=$.RGBA16_SNORM_EXT),N===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function C(F,b){let N;return F?b===null||b===bi||b===ia?N=i.DEPTH24_STENCIL8:b===Kn?N=i.DEPTH32F_STENCIL8:b===na&&(N=i.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===bi||b===ia?N=i.DEPTH_COMPONENT24:b===Kn?N=i.DEPTH_COMPONENT32F:b===na&&(N=i.DEPTH_COMPONENT16),N}function P(F,b){return m(F)===!0||F.isFramebufferTexture&&F.minFilter!==zt&&F.minFilter!==rn?Math.log2(Math.max(b.width,b.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?b.mipmaps.length:1}function U(F){let b=F.target;b.removeEventListener("dispose",U),x(b),b.isVideoTexture&&c.delete(b),b.isHTMLTexture&&h.delete(b)}function M(F){let b=F.target;b.removeEventListener("dispose",M),A(b)}function x(F){let b=n.get(F);if(b.__webglInit===void 0)return;let N=F.source,O=p.get(N);if(O){let H=O[b.__cacheKey];H.usedTimes--,H.usedTimes===0&&w(F),Object.keys(O).length===0&&p.delete(N)}n.remove(F)}function w(F){let b=n.get(F);i.deleteTexture(b.__webglTexture);let N=F.source,O=p.get(N);delete O[b.__cacheKey],a.memory.textures--}function A(F){let b=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(b.__webglFramebuffer[O]))for(let H=0;H<b.__webglFramebuffer[O].length;H++)i.deleteFramebuffer(b.__webglFramebuffer[O][H]);else i.deleteFramebuffer(b.__webglFramebuffer[O]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[O])}else{if(Array.isArray(b.__webglFramebuffer))for(let O=0;O<b.__webglFramebuffer.length;O++)i.deleteFramebuffer(b.__webglFramebuffer[O]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let O=0;O<b.__webglColorRenderbuffer.length;O++)b.__webglColorRenderbuffer[O]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[O]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let N=F.textures;for(let O=0,H=N.length;O<H;O++){let z=n.get(N[O]);z.__webglTexture&&(i.deleteTexture(z.__webglTexture),a.memory.textures--),n.remove(N[O])}n.remove(F)}let S=0;function I(){S=0}function D(){return S}function k(F){S=F}function Y(){let F=S;return F>=r.maxTextures&&qe("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+r.maxTextures),S+=1,F}function j(F){let b=[];return b.push(F.wrapS),b.push(F.wrapT),b.push(F.wrapR||0),b.push(F.magFilter),b.push(F.minFilter),b.push(F.anisotropy),b.push(F.internalFormat),b.push(F.format),b.push(F.type),b.push(F.generateMipmaps),b.push(F.premultiplyAlpha),b.push(F.flipY),b.push(F.unpackAlignment),b.push(F.colorSpace),b.join()}function se(F,b){let N=n.get(F);if(F.isVideoTexture&&X(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&N.__version!==F.version){let O=F.image;if(O===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{fe(N,F,b);return}}else F.isExternalTexture&&(N.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+b)}function ne(F,b){let N=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&N.__version!==F.version){fe(N,F,b);return}else F.isExternalTexture&&(N.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+b)}function le(F,b){let N=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&N.__version!==F.version){fe(N,F,b);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+b)}function ae(F,b){let N=n.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&N.__version!==F.version){me(N,F,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+b)}let we={[ai]:i.REPEAT,[si]:i.CLAMP_TO_EDGE,[Ds]:i.MIRRORED_REPEAT},Ee={[zt]:i.NEAREST,[ql]:i.NEAREST_MIPMAP_NEAREST,[os]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[ta]:i.LINEAR_MIPMAP_NEAREST,[Si]:i.LINEAR_MIPMAP_LINEAR},it={[cp]:i.NEVER,[pp]:i.ALWAYS,[up]:i.LESS,[Nc]:i.LEQUAL,[hp]:i.EQUAL,[Dc]:i.GEQUAL,[fp]:i.GREATER,[dp]:i.NOTEQUAL};function ge(F,b){if(b.type===Kn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===rn||b.magFilter===ta||b.magFilter===os||b.magFilter===Si||b.minFilter===rn||b.minFilter===ta||b.minFilter===os||b.minFilter===Si)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,we[b.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,we[b.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,we[b.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,Ee[b.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,Ee[b.minFilter]),b.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,it[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===zt||b.minFilter!==os&&b.minFilter!==Si||b.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(F,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function oe(F,b){let N=!1;F.__webglInit===void 0&&(F.__webglInit=!0,b.addEventListener("dispose",U));let O=b.source,H=p.get(O);H===void 0&&(H={},p.set(O,H));let z=j(b);if(z!==F.__cacheKey){H[z]===void 0&&(H[z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),H[z].usedTimes++;let $=H[F.__cacheKey];$!==void 0&&(H[F.__cacheKey].usedTimes--,$.usedTimes===0&&w(b)),F.__cacheKey=z,F.__webglTexture=H[z].texture}return N}function G(F,b,N){return Math.floor(Math.floor(F/N)/b)}function Z(F,b,N,O){let z=F.updateRanges;if(z.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,N,O,b.data);else{z.sort((xe,de)=>xe.start-de.start);let $=0;for(let xe=1;xe<z.length;xe++){let de=z[$],ye=z[xe],be=de.start+de.count,De=G(ye.start,b.width,4),Ge=G(de.start,b.width,4);ye.start<=be+1&&De===Ge&&G(ye.start+ye.count-1,b.width,4)===De?de.count=Math.max(de.count,ye.start+ye.count-de.start):(++$,z[$]=ye)}z.length=$+1;let V=t.getParameter(i.UNPACK_ROW_LENGTH),K=t.getParameter(i.UNPACK_SKIP_PIXELS),ue=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let xe=0,de=z.length;xe<de;xe++){let ye=z[xe],be=Math.floor(ye.start/4),De=Math.ceil(ye.count/4),Ge=be%b.width,W=Math.floor(be/b.width),Se=De,he=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ge),t.pixelStorei(i.UNPACK_SKIP_ROWS,W),t.texSubImage2D(i.TEXTURE_2D,0,Ge,W,Se,he,N,O,b.data)}F.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,V),t.pixelStorei(i.UNPACK_SKIP_PIXELS,K),t.pixelStorei(i.UNPACK_SKIP_ROWS,ue)}}function fe(F,b,N){let O=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(O=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(O=i.TEXTURE_3D);let H=oe(F,b),z=b.source;t.bindTexture(O,F.__webglTexture,i.TEXTURE0+N);let $=n.get(z);if(z.version!==$.__version||H===!0){if(t.activeTexture(i.TEXTURE0+N),(typeof ImageBitmap!="undefined"&&b.image instanceof ImageBitmap)===!1){let he=st.getPrimaries(st.workingColorSpace),Te=b.colorSpace===Jn?null:st.getPrimaries(b.colorSpace),Ie=b.colorSpace===Jn||he===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie)}t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let K=v(b.image,!1,r.maxTextureSize);K=Ht(b,K);let ue=s.convert(b.format,b.colorSpace),xe=s.convert(b.type),de=E(b.internalFormat,ue,xe,b.normalized,b.colorSpace,b.isVideoTexture);ge(O,b);let ye,be=b.mipmaps,De=b.isVideoTexture!==!0,Ge=$.__version===void 0||H===!0,W=z.dataReady,Se=P(b,K);if(b.isDepthTexture)de=C(b.format===Pr,b.type),Ge&&(De?t.texStorage2D(i.TEXTURE_2D,1,de,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,de,K.width,K.height,0,ue,xe,null));else if(b.isDataTexture)if(be.length>0){De&&Ge&&t.texStorage2D(i.TEXTURE_2D,Se,de,be[0].width,be[0].height);for(let he=0,Te=be.length;he<Te;he++)ye=be[he],De?W&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,ye.width,ye.height,ue,xe,ye.data):t.texImage2D(i.TEXTURE_2D,he,de,ye.width,ye.height,0,ue,xe,ye.data);b.generateMipmaps=!1}else De?(Ge&&t.texStorage2D(i.TEXTURE_2D,Se,de,K.width,K.height),W&&Z(b,K,ue,xe)):t.texImage2D(i.TEXTURE_2D,0,de,K.width,K.height,0,ue,xe,K.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){De&&Ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,de,be[0].width,be[0].height,K.depth);for(let he=0,Te=be.length;he<Te;he++)if(ye=be[he],b.format!==Zn)if(ue!==null)if(De){if(W)if(b.layerUpdates.size>0){let Ie=Mh(ye.width,ye.height,b.format,b.type);for(let ve of b.layerUpdates){let d=ye.data.subarray(ve*Ie/ye.data.BYTES_PER_ELEMENT,(ve+1)*Ie/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,ve,ye.width,ye.height,1,ue,d)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,ye.width,ye.height,K.depth,ue,ye.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,he,de,ye.width,ye.height,K.depth,0,ye.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?W&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,ye.width,ye.height,K.depth,ue,xe,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,he,de,ye.width,ye.height,K.depth,0,ue,xe,ye.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{De&&Ge&&t.texStorage2D(i.TEXTURE_2D,Se,de,be[0].width,be[0].height);for(let he=0,Te=be.length;he<Te;he++)ye=be[he],b.format!==Zn?ue!==null?De?W&&t.compressedTexSubImage2D(i.TEXTURE_2D,he,0,0,ye.width,ye.height,ue,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,he,de,ye.width,ye.height,0,ye.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?W&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,ye.width,ye.height,ue,xe,ye.data):t.texImage2D(i.TEXTURE_2D,he,de,ye.width,ye.height,0,ue,xe,ye.data)}else if(b.isDataArrayTexture)if(De){if(Ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,de,K.width,K.height,K.depth),W)if(b.layerUpdates.size>0){let he=Mh(K.width,K.height,b.format,b.type);for(let Te of b.layerUpdates){let Ie=K.data.subarray(Te*he/K.data.BYTES_PER_ELEMENT,(Te+1)*he/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Te,K.width,K.height,1,ue,xe,Ie)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ue,xe,K.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,de,K.width,K.height,K.depth,0,ue,xe,K.data);else if(b.isData3DTexture)De?(Ge&&t.texStorage3D(i.TEXTURE_3D,Se,de,K.width,K.height,K.depth),W&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ue,xe,K.data)):t.texImage3D(i.TEXTURE_3D,0,de,K.width,K.height,K.depth,0,ue,xe,K.data);else if(b.isFramebufferTexture){if(Ge)if(De)t.texStorage2D(i.TEXTURE_2D,Se,de,K.width,K.height);else{let he=K.width,Te=K.height;for(let Ie=0;Ie<Se;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,de,he,Te,0,ue,xe,null),he>>=1,Te>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let he=i.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),K.parentNode!==he){he.appendChild(K),h.add(b),he.onpaint=Te=>{let Ie=Te.changedElements;for(let ve of h)Ie.includes(ve.image)&&(ve.needsUpdate=!0)},he.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{let Ie=i.RGBA,ve=i.RGBA,d=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ie,ve,d,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(be.length>0){if(De&&Ge){let he=ct(be[0]);t.texStorage2D(i.TEXTURE_2D,Se,de,he.width,he.height)}for(let he=0,Te=be.length;he<Te;he++)ye=be[he],De?W&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,ue,xe,ye):t.texImage2D(i.TEXTURE_2D,he,de,ue,xe,ye);b.generateMipmaps=!1}else if(De){if(Ge){let he=ct(K);t.texStorage2D(i.TEXTURE_2D,Se,de,he.width,he.height)}W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,xe,K)}else t.texImage2D(i.TEXTURE_2D,0,de,ue,xe,K);m(b)&&_(O),$.__version=z.version,b.onUpdate&&b.onUpdate(b)}F.__version=b.version}function me(F,b,N){if(b.image.length!==6)return;let O=oe(F,b),H=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+N);let z=n.get(H);if(H.version!==z.__version||O===!0){t.activeTexture(i.TEXTURE0+N);let $=st.getPrimaries(st.workingColorSpace),V=b.colorSpace===Jn?null:st.getPrimaries(b.colorSpace),K=b.colorSpace===Jn||$===V?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let ue=b.isCompressedTexture||b.image[0].isCompressedTexture,xe=b.image[0]&&b.image[0].isDataTexture,de=[];for(let ve=0;ve<6;ve++)!ue&&!xe?de[ve]=v(b.image[ve],!0,r.maxCubemapSize):de[ve]=xe?b.image[ve].image:b.image[ve],de[ve]=Ht(b,de[ve]);let ye=de[0],be=s.convert(b.format,b.colorSpace),De=s.convert(b.type),Ge=E(b.internalFormat,be,De,b.normalized,b.colorSpace),W=b.isVideoTexture!==!0,Se=z.__version===void 0||O===!0,he=H.dataReady,Te=P(b,ye);ge(i.TEXTURE_CUBE_MAP,b);let Ie;if(ue){W&&Se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,Ge,ye.width,ye.height);for(let ve=0;ve<6;ve++){Ie=de[ve].mipmaps;for(let d=0;d<Ie.length;d++){let T=Ie[d];b.format!==Zn?be!==null?W?he&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,d,0,0,T.width,T.height,be,T.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,d,Ge,T.width,T.height,0,T.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,d,0,0,T.width,T.height,be,De,T.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,d,Ge,T.width,T.height,0,be,De,T.data)}}}else{if(Ie=b.mipmaps,W&&Se){Ie.length>0&&Te++;let ve=ct(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,Ge,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(xe){W?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,de[ve].width,de[ve].height,be,De,de[ve].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Ge,de[ve].width,de[ve].height,0,be,De,de[ve].data);for(let d=0;d<Ie.length;d++){let B=Ie[d].image[ve].image;W?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,d+1,0,0,B.width,B.height,be,De,B.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,d+1,Ge,B.width,B.height,0,be,De,B.data)}}else{W?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,be,De,de[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Ge,be,De,de[ve]);for(let d=0;d<Ie.length;d++){let T=Ie[d];W?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,d+1,0,0,be,De,T.image[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,d+1,Ge,be,De,T.image[ve])}}}m(b)&&_(i.TEXTURE_CUBE_MAP),z.__version=H.version,b.onUpdate&&b.onUpdate(b)}F.__version=b.version}function _e(F,b,N,O,H,z){let $=s.convert(N.format,N.colorSpace),V=s.convert(N.type),K=E(N.internalFormat,$,V,N.normalized,N.colorSpace),ue=n.get(b),xe=n.get(N);if(xe.__renderTarget=b,!ue.__hasExternalTextures){let de=Math.max(1,b.width>>z),ye=Math.max(1,b.height>>z);H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?t.texImage3D(H,z,K,de,ye,b.depth,0,$,V,null):t.texImage2D(H,z,K,de,ye,0,$,V,null)}t.bindFramebuffer(i.FRAMEBUFFER,F),Ot(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,O,H,xe.__webglTexture,0,Mt(b)):(H===i.TEXTURE_2D||H>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,O,H,xe.__webglTexture,z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(F,b,N){if(i.bindRenderbuffer(i.RENDERBUFFER,F),b.depthBuffer){let O=b.depthTexture,H=O&&O.isDepthTexture?O.type:null,z=C(b.stencilBuffer,H),$=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ot(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt(b),z,b.width,b.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt(b),z,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,z,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,F)}else{let O=b.textures;for(let H=0;H<O.length;H++){let z=O[H],$=s.convert(z.format,z.colorSpace),V=s.convert(z.type),K=E(z.internalFormat,$,V,z.normalized,z.colorSpace);Ot(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt(b),K,b.width,b.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt(b),K,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,K,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Je(F,b,N){let O=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,F),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let H=n.get(b.depthTexture);if(H.__renderTarget=b,(!H.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),O){if(H.__webglInit===void 0&&(H.__webglInit=!0,b.depthTexture.addEventListener("dispose",U)),H.__webglTexture===void 0){H.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),ge(i.TEXTURE_CUBE_MAP,b.depthTexture);let ue=s.convert(b.depthTexture.format),xe=s.convert(b.depthTexture.type),de;b.depthTexture.format===Pi?de=i.DEPTH_COMPONENT24:b.depthTexture.format===Pr&&(de=i.DEPTH24_STENCIL8);for(let ye=0;ye<6;ye++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,de,b.width,b.height,0,ue,xe,null)}}else se(b.depthTexture,0);let z=H.__webglTexture,$=Mt(b),V=O?i.TEXTURE_CUBE_MAP_POSITIVE_X+N:i.TEXTURE_2D,K=b.depthTexture.format===Pr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===Pi)Ot(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,V,z,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,K,V,z,0);else if(b.depthTexture.format===Pr)Ot(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,V,z,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,K,V,z,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Oe(F){let b=n.get(F),N=F.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==F.depthTexture){let O=F.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),O){let H=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,O.removeEventListener("dispose",H)};O.addEventListener("dispose",H),b.__depthDisposeCallback=H}b.__boundDepthTexture=O}if(F.depthTexture&&!b.__autoAllocateDepthBuffer)if(N)for(let O=0;O<6;O++)Je(b.__webglFramebuffer[O],F,O);else{let O=F.texture.mipmaps;O&&O.length>0?Je(b.__webglFramebuffer[0],F,0):Je(b.__webglFramebuffer,F,0)}else if(N){b.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[O]),b.__webglDepthbuffer[O]===void 0)b.__webglDepthbuffer[O]=i.createRenderbuffer(),He(b.__webglDepthbuffer[O],F,!1);else{let H=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=b.__webglDepthbuffer[O];i.bindRenderbuffer(i.RENDERBUFFER,z),i.framebufferRenderbuffer(i.FRAMEBUFFER,H,i.RENDERBUFFER,z)}}else{let O=F.texture.mipmaps;if(O&&O.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),He(b.__webglDepthbuffer,F,!1);else{let H=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,z),i.framebufferRenderbuffer(i.FRAMEBUFFER,H,i.RENDERBUFFER,z)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(F,b,N){let O=n.get(F);b!==void 0&&_e(O.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Oe(F)}function dt(F){let b=F.texture,N=n.get(F),O=n.get(b);F.addEventListener("dispose",M);let H=F.textures,z=F.isWebGLCubeRenderTarget===!0,$=H.length>1;if($||(O.__webglTexture===void 0&&(O.__webglTexture=i.createTexture()),O.__version=b.version,a.memory.textures++),z){N.__webglFramebuffer=[];for(let V=0;V<6;V++)if(b.mipmaps&&b.mipmaps.length>0){N.__webglFramebuffer[V]=[];for(let K=0;K<b.mipmaps.length;K++)N.__webglFramebuffer[V][K]=i.createFramebuffer()}else N.__webglFramebuffer[V]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){N.__webglFramebuffer=[];for(let V=0;V<b.mipmaps.length;V++)N.__webglFramebuffer[V]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if($)for(let V=0,K=H.length;V<K;V++){let ue=n.get(H[V]);ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture(),a.memory.textures++)}if(F.samples>0&&Ot(F)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let V=0;V<H.length;V++){let K=H[V];N.__webglColorRenderbuffer[V]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[V]);let ue=s.convert(K.format,K.colorSpace),xe=s.convert(K.type),de=E(K.internalFormat,ue,xe,K.normalized,K.colorSpace,F.isXRRenderTarget===!0),ye=Mt(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,de,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+V,i.RENDERBUFFER,N.__webglColorRenderbuffer[V])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),He(N.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(z){t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture),ge(i.TEXTURE_CUBE_MAP,b);for(let V=0;V<6;V++)if(b.mipmaps&&b.mipmaps.length>0)for(let K=0;K<b.mipmaps.length;K++)_e(N.__webglFramebuffer[V][K],F,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+V,K);else _e(N.__webglFramebuffer[V],F,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0);m(b)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($){for(let V=0,K=H.length;V<K;V++){let ue=H[V],xe=n.get(ue),de=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(de=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,xe.__webglTexture),ge(de,ue),_e(N.__webglFramebuffer,F,ue,i.COLOR_ATTACHMENT0+V,de,0),m(ue)&&_(de)}t.unbindTexture()}else{let V=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(V=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(V,O.__webglTexture),ge(V,b),b.mipmaps&&b.mipmaps.length>0)for(let K=0;K<b.mipmaps.length;K++)_e(N.__webglFramebuffer[K],F,b,i.COLOR_ATTACHMENT0,V,K);else _e(N.__webglFramebuffer,F,b,i.COLOR_ATTACHMENT0,V,0);m(b)&&_(V),t.unbindTexture()}F.depthBuffer&&Oe(F)}function et(F){let b=F.textures;for(let N=0,O=b.length;N<O;N++){let H=b[N];if(m(H)){let z=L(F),$=n.get(H).__webglTexture;t.bindTexture(z,$),_(z),t.unbindTexture()}}}let vt=[],Ct=[];function Wt(F){if(F.samples>0){if(Ot(F)===!1){let b=F.textures,N=F.width,O=F.height,H=i.COLOR_BUFFER_BIT,z=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=n.get(F),V=b.length>1;if(V)for(let ue=0;ue<b.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,$.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,$.__webglMultisampledFramebuffer);let K=F.texture.mipmaps;K&&K.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,$.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,$.__webglFramebuffer);for(let ue=0;ue<b.length;ue++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(H|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(H|=i.STENCIL_BUFFER_BIT)),V){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,$.__webglColorRenderbuffer[ue]);let xe=n.get(b[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,xe,0)}i.blitFramebuffer(0,0,N,O,0,0,N,O,H,i.NEAREST),l===!0&&(vt.length=0,Ct.length=0,vt.push(i.COLOR_ATTACHMENT0+ue),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(vt.push(z),Ct.push(z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ct)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,vt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),V)for(let ue=0;ue<b.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,$.__webglColorRenderbuffer[ue]);let xe=n.get(b[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,$.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,xe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,$.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&l){let b=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Mt(F){return Math.min(r.maxSamples,F.samples)}function Ot(F){let b=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function X(F){let b=a.render.frame;c.get(F)!==b&&(c.set(F,b),F.update())}function Ht(F,b){let N=F.colorSpace,O=F.format,H=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||N!==Ln&&N!==Jn&&(st.getTransfer(N)===bt?(O!==Zn||H!==zn)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",N)),b}function ct(F){return typeof HTMLImageElement!="undefined"&&F instanceof HTMLImageElement?(u.width=F.naturalWidth||F.width,u.height=F.naturalHeight||F.height):typeof VideoFrame!="undefined"&&F instanceof VideoFrame?(u.width=F.displayWidth,u.height=F.displayHeight):(u.width=F.width,u.height=F.height),u}this.allocateTextureUnit=Y,this.resetTextureUnits=I,this.getTextureUnits=D,this.setTextureUnits=k,this.setTexture2D=se,this.setTexture2DArray=ne,this.setTexture3D=le,this.setTextureCube=ae,this.rebindTextures=je,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Ot,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Yy(i,e){function t(n,r=Jn){let s,a=st.getTransfer(r);if(n===zn)return i.UNSIGNED_BYTE;if(n===Kl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Zl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ch)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===uh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===oh)return i.BYTE;if(n===lh)return i.SHORT;if(n===na)return i.UNSIGNED_SHORT;if(n===Yl)return i.INT;if(n===bi)return i.UNSIGNED_INT;if(n===Kn)return i.FLOAT;if(n===yn)return i.HALF_FLOAT;if(n===hh)return i.ALPHA;if(n===fh)return i.RGB;if(n===Zn)return i.RGBA;if(n===Pi)return i.DEPTH_COMPONENT;if(n===Pr)return i.DEPTH_STENCIL;if(n===Jl)return i.RED;if(n===jl)return i.RED_INTEGER;if(n===Lr)return i.RG;if(n===$l)return i.RG_INTEGER;if(n===Ql)return i.RGBA_INTEGER;if(n===po||n===mo||n===go||n===vo)if(a===bt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===po)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===po)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===mo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===go)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ec||n===tc||n===nc||n===ic)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ec)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ic)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rc||n===sc||n===ac||n===oc||n===lc||n===_o||n===cc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===rc||n===sc)return a===bt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ac)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===oc)return s.COMPRESSED_R11_EAC;if(n===lc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===_o)return s.COMPRESSED_RG11_EAC;if(n===cc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===uc||n===hc||n===fc||n===dc||n===pc||n===mc||n===gc||n===vc||n===_c||n===xc||n===yc||n===Mc||n===Sc||n===bc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===uc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===dc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_c)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Mc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Tc||n===Ec||n===wc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Tc)return a===bt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ec)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ac||n===Rc||n===xo||n===Cc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ac)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Rc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ia?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Ky=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zy=`
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

}`,kh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ka(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new jt({vertexShader:Ky,fragmentShader:Zy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ue(new es(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zh=class extends yi{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",l=1,u=null,c=null,h=null,f=null,p=null,g=null,y=typeof XRWebGLBinding!="undefined",v=new kh,m={},_=t.getContextAttributes(),L=null,E=null,C=[],P=[],U=new Ye,M=null,x=null,w=new nn;w.viewport=new Pt;let A=new nn;A.viewport=new Pt;let S=[w,A],I=new Bl,D=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Z=C[G];return Z===void 0&&(Z=new Bs,C[G]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(G){let Z=C[G];return Z===void 0&&(Z=new Bs,C[G]=Z),Z.getGripSpace()},this.getHand=function(G){let Z=C[G];return Z===void 0&&(Z=new Bs,C[G]=Z),Z.getHandSpace()};function Y(G){let Z=P.indexOf(G.inputSource);if(Z===-1)return;let fe=C[Z];fe!==void 0&&(fe.update(G.inputSource,G.frame,u||a),fe.dispatchEvent({type:G.type,data:G.inputSource}))}function j(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",se);for(let G=0;G<C.length;G++){let Z=P[G];Z!==null&&(P[G]=null,C[G].disconnect(Z))}D=null,k=null,v.reset();for(let G in m)delete m[G];if(e.setRenderTarget(L),p=null,f=null,h=null,r=null,E=null,oe.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(U.width,U.height,!1),x!==null){let G=x.camera;G.fov=x.fov,G.zoom=x.zoom,G.updateProjectionMatrix(),x=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(G){u=G},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(L=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",j),r.addEventListener("inputsourceschange",se),_.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(U),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,me=null,_e=null;_.depth&&(_e=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=_.stencil?Pr:Pi,me=_.stencil?ia:bi);let He={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(He),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new un(f.textureWidth,f.textureHeight,{format:Zn,type:zn,depthTexture:new Er(f.textureWidth,f.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let fe={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new un(p.framebufferWidth,p.framebufferHeight,{format:Zn,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),oe.setContext(r),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function se(G){for(let Z=0;Z<G.removed.length;Z++){let fe=G.removed[Z],me=P.indexOf(fe);me>=0&&(P[me]=null,C[me].disconnect(fe))}for(let Z=0;Z<G.added.length;Z++){let fe=G.added[Z],me=P.indexOf(fe);if(me===-1){for(let He=0;He<C.length;He++)if(He>=P.length){P.push(fe),me=He;break}else if(P[He]===null){P[He]=fe,me=He;break}if(me===-1)break}let _e=C[me];_e&&_e.connect(fe)}}let ne=new J,le=new J;function ae(G,Z,fe){ne.setFromMatrixPosition(Z.matrixWorld),le.setFromMatrixPosition(fe.matrixWorld);let me=ne.distanceTo(le),_e=Z.projectionMatrix.elements,He=fe.projectionMatrix.elements,Je=_e[14]/(_e[10]-1),Oe=_e[14]/(_e[10]+1),je=(_e[9]+1)/_e[5],dt=(_e[9]-1)/_e[5],et=(_e[8]-1)/_e[0],vt=(He[8]+1)/He[0],Ct=Je*et,Wt=Je*vt,Mt=me/(-et+vt),Ot=Mt*-et;if(Z.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ot),G.translateZ(Mt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),_e[10]===-1)G.projectionMatrix.copy(Z.projectionMatrix),G.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{let X=Je+Mt,Ht=Oe+Mt,ct=Ct-Ot,F=Wt+(me-Ot),b=je*Oe/Ht*X,N=dt*Oe/Ht*X;G.projectionMatrix.makePerspective(ct,F,b,N,X,Ht),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function we(G,Z){Z===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Z.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let Z=G.near,fe=G.far;v.texture!==null&&(v.depthNear>0&&(Z=v.depthNear),v.depthFar>0&&(fe=v.depthFar)),I.near=A.near=w.near=Z,I.far=A.far=w.far=fe,(D!==I.near||k!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),D=I.near,k=I.far),I.layers.mask=G.layers.mask|6,w.layers.mask=I.layers.mask&-5,A.layers.mask=I.layers.mask&-3;let me=G.parent,_e=I.cameras;we(I,me);for(let He=0;He<_e.length;He++)we(_e[He],me);_e.length===2?ae(I,w,A):I.projectionMatrix.copy(w.projectionMatrix),x===null&&G.isPerspectiveCamera&&(x={camera:G,fov:G.fov,zoom:G.zoom}),Ee(G,I,me)};function Ee(G,Z,fe){fe===null?G.matrix.copy(Z.matrixWorld):(G.matrix.copy(fe.matrixWorld),G.matrix.invert(),G.matrix.multiply(Z.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Z.projectionMatrix),G.projectionMatrixInverse.copy(Z.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Zr*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(I)},this.getCameraTexture=function(G){return m[G]};let it=null;function ge(G,Z){if(c=Z.getViewerPose(u||a),g=Z,c!==null){let fe=c.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let me=!1;fe.length!==I.cameras.length&&(I.cameras.length=0,me=!0);for(let Oe=0;Oe<fe.length;Oe++){let je=fe[Oe],dt=null;if(p!==null)dt=p.getViewport(je);else{let vt=h.getViewSubImage(f,je);dt=vt.viewport,Oe===0&&(e.setRenderTargetTextures(E,vt.colorTexture,vt.depthStencilTexture),e.setRenderTarget(E))}let et=S[Oe];et===void 0&&(et=new nn,et.layers.enable(Oe),et.viewport=new Pt,S[Oe]=et),et.matrix.fromArray(je.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(je.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(dt.x,dt.y,dt.width,dt.height),Oe===0&&(I.matrix.copy(et.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),me===!0&&I.cameras.push(et)}let _e=r.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){h=n.getBinding();let Oe=h.getDepthInformation(fe[0]);Oe&&Oe.isValid&&Oe.texture&&v.init(Oe,r.renderState)}if(_e&&_e.includes("camera-access")&&y){e.state.unbindTexture(),h=n.getBinding();for(let Oe=0;Oe<fe.length;Oe++){let je=fe[Oe].camera;if(je){let dt=m[je];dt||(dt=new Ka,m[je]=dt);let et=h.getCameraImage(je);dt.sourceTexture=et}}}}for(let fe=0;fe<C.length;fe++){let me=P[fe],_e=C[fe];me!==null&&_e!==void 0&&_e.update(me,Z,u||a)}it&&it(G,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}let oe=new Vp;oe.setAnimationLoop(ge),this.setAnimationLoop=function(G){it=G},this.dispose=function(){}}},Jy=new rt,Zp=new tt;Zp.set(-1,0,0,0,1,0,0,0,1);function jy(i,e){function t(v,m){v.matrixAutoUpdate===!0&&v.updateMatrix(),m.value.copy(v.matrix)}function n(v,m){m.color.getRGB(v.fogColor.value,_h(i)),m.isFog?(v.fogNear.value=m.near,v.fogFar.value=m.far):m.isFogExp2&&(v.fogDensity.value=m.density)}function r(v,m,_,L,E){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(v,m):m.isMeshLambertMaterial?(s(v,m),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(v,m),h(v,m)):m.isMeshPhongMaterial?(s(v,m),c(v,m),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(v,m),f(v,m),m.isMeshPhysicalMaterial&&p(v,m,E)):m.isMeshMatcapMaterial?(s(v,m),g(v,m)):m.isMeshDepthMaterial?s(v,m):m.isMeshDistanceMaterial?(s(v,m),y(v,m)):m.isMeshNormalMaterial?s(v,m):m.isLineBasicMaterial?(a(v,m),m.isLineDashedMaterial&&o(v,m)):m.isPointsMaterial?l(v,m,_,L):m.isSpriteMaterial?u(v,m):m.isShadowMaterial?(v.color.value.copy(m.color),v.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(v,m){v.opacity.value=m.opacity,m.color&&v.diffuse.value.copy(m.color),m.emissive&&v.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(v.map.value=m.map,t(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.bumpMap&&(v.bumpMap.value=m.bumpMap,t(m.bumpMap,v.bumpMapTransform),v.bumpScale.value=m.bumpScale,m.side===xn&&(v.bumpScale.value*=-1)),m.normalMap&&(v.normalMap.value=m.normalMap,t(m.normalMap,v.normalMapTransform),v.normalScale.value.copy(m.normalScale),m.side===xn&&v.normalScale.value.negate()),m.displacementMap&&(v.displacementMap.value=m.displacementMap,t(m.displacementMap,v.displacementMapTransform),v.displacementScale.value=m.displacementScale,v.displacementBias.value=m.displacementBias),m.emissiveMap&&(v.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,v.emissiveMapTransform)),m.specularMap&&(v.specularMap.value=m.specularMap,t(m.specularMap,v.specularMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest);let _=e.get(m),L=_.envMap,E=_.envMapRotation;L&&(v.envMap.value=L,v.envMapRotation.value.setFromMatrix4(Jy.makeRotationFromEuler(E)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(Zp),v.reflectivity.value=m.reflectivity,v.ior.value=m.ior,v.refractionRatio.value=m.refractionRatio),m.lightMap&&(v.lightMap.value=m.lightMap,v.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,v.lightMapTransform)),m.aoMap&&(v.aoMap.value=m.aoMap,v.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,v.aoMapTransform))}function a(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,m.map&&(v.map.value=m.map,t(m.map,v.mapTransform))}function o(v,m){v.dashSize.value=m.dashSize,v.totalSize.value=m.dashSize+m.gapSize,v.scale.value=m.scale}function l(v,m,_,L){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.size.value=m.size*_,v.scale.value=L*.5,m.map&&(v.map.value=m.map,t(m.map,v.uvTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function u(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.rotation.value=m.rotation,m.map&&(v.map.value=m.map,t(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function c(v,m){v.specular.value.copy(m.specular),v.shininess.value=Math.max(m.shininess,1e-4)}function h(v,m){m.gradientMap&&(v.gradientMap.value=m.gradientMap)}function f(v,m){v.metalness.value=m.metalness,m.metalnessMap&&(v.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,v.metalnessMapTransform)),v.roughness.value=m.roughness,m.roughnessMap&&(v.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,v.roughnessMapTransform)),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)}function p(v,m,_){v.ior.value=m.ior,m.sheen>0&&(v.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),v.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(v.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,v.sheenColorMapTransform)),m.sheenRoughnessMap&&(v.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,v.sheenRoughnessMapTransform))),m.clearcoat>0&&(v.clearcoat.value=m.clearcoat,v.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(v.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,v.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(v.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===xn&&v.clearcoatNormalScale.value.negate())),m.dispersion>0&&(v.dispersion.value=m.dispersion),m.retroreflectivity>0&&(v.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(v.iridescence.value=m.iridescence,v.iridescenceIOR.value=m.iridescenceIOR,v.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(v.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,v.iridescenceMapTransform)),m.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),m.transmission>0&&(v.transmission.value=m.transmission,v.transmissionSamplerMap.value=_.texture,v.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(v.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,v.transmissionMapTransform)),v.thickness.value=m.thickness,m.thicknessMap&&(v.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=m.attenuationDistance,v.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(v.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(v.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=m.specularIntensity,v.specularColor.value.copy(m.specularColor),m.specularColorMap&&(v.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,v.specularColorMapTransform)),m.specularIntensityMap&&(v.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,v.specularIntensityMapTransform))}function g(v,m){m.matcap&&(v.matcap.value=m.matcap)}function y(v,m){let _=e.get(m).light;v.referencePosition.value.setFromMatrixPosition(_.matrixWorld),v.nearDistance.value=_.shadow.camera.near,v.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function $y(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,C){let P=C.program;n.uniformBlockBinding(E,P)}function u(E,C){let P=r[E.id];P===void 0&&(v(E),P=c(E),r[E.id]=P,E.addEventListener("dispose",_));let U=C.program;n.updateUBOMapping(E,U);let M=e.render.frame;s[E.id]!==M&&(f(E),s[E.id]=M)}function c(E){let C=h();E.__bindingPointIndex=C;let P=i.createBuffer(),U=E.__size,M=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,P),i.bufferData(i.UNIFORM_BUFFER,U,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,C,P),P}function h(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let C=r[E.id],P=E.uniforms,U=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let M=0,x=P.length;M<x;M++){let w=P[M];if(Array.isArray(w))for(let A=0,S=w.length;A<S;A++)p(w[A],M,A,U);else p(w,M,0,U)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,C,P,U){if(y(E,C,P,U)===!0){let M=E.__offset,x=E.value;if(Array.isArray(x)){let w=0;for(let A=0;A<x.length;A++){let S=x[A],I=m(S);g(S,E.__data,w),typeof S!="number"&&typeof S!="boolean"&&!S.isMatrix3&&!ArrayBuffer.isView(S)&&(w+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(x,E.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,E.__data)}}function g(E,C,P){typeof E=="number"||typeof E=="boolean"?C[0]=E:E.isMatrix3?(C[0]=E.elements[0],C[1]=E.elements[1],C[2]=E.elements[2],C[3]=0,C[4]=E.elements[3],C[5]=E.elements[4],C[6]=E.elements[5],C[7]=0,C[8]=E.elements[6],C[9]=E.elements[7],C[10]=E.elements[8],C[11]=0):ArrayBuffer.isView(E)?C.set(new E.constructor(E.buffer,E.byteOffset,C.length)):E.toArray(C,P)}function y(E,C,P,U){let M=E.value,x=C+"_"+P;if(U[x]===void 0)return typeof M=="number"||typeof M=="boolean"?U[x]=M:ArrayBuffer.isView(M)?U[x]=M.slice():U[x]=M.clone(),!0;{let w=U[x];if(typeof M=="number"||typeof M=="boolean"){if(w!==M)return U[x]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(w.equals(M)===!1)return w.copy(M),!0}}return!1}function v(E){let C=E.uniforms,P=0,U=16;for(let x=0,w=C.length;x<w;x++){let A=Array.isArray(C[x])?C[x]:[C[x]];for(let S=0,I=A.length;S<I;S++){let D=A[S],k=Array.isArray(D.value)?D.value:[D.value];for(let Y=0,j=k.length;Y<j;Y++){let se=k[Y],ne=m(se),le=P%U,ae=le%ne.boundary,we=le+ae;P+=ae,we!==0&&U-we<ne.storage&&(P+=U-we),D.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=P,P+=ne.storage}}}let M=P%U;return M>0&&(P+=U-M),E.__size=P,E.__cache={},this}function m(E){let C={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(C.boundary=4,C.storage=4):E.isVector2?(C.boundary=8,C.storage=8):E.isVector3||E.isColor?(C.boundary=16,C.storage=12):E.isVector4?(C.boundary=16,C.storage=16):E.isMatrix3?(C.boundary=48,C.storage=48):E.isMatrix4?(C.boundary=64,C.storage=64):E.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(C.boundary=16,C.storage=E.byteLength):qe("WebGLRenderer: Unsupported uniform value type.",E),C}function _(E){let C=E.target;C.removeEventListener("dispose",_);let P=a.indexOf(C.__bindingPointIndex);a.splice(P,1),i.deleteBuffer(r[C.id]),delete r[C.id],delete s[C.id]}function L(){for(let E in r)i.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:l,update:u,dispose:L}}var Qy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Fi=null;function eM(){return Fi===null&&(Fi=new Qi(Qy,16,16,Lr,yn),Fi.name="DFG_LUT",Fi.minFilter=rn,Fi.magFilter=rn,Fi.wrapS=si,Fi.wrapT=si,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}var Hc=class{constructor(e={}){let{canvas:t=mp(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=zn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=p,v=new Set([Ql,$l,jl]),m=new Set([zn,bi,na,ia,Kl,Zl]),_=new Uint32Array(4),L=new Int32Array(4),E=new J,C=null,P=null,U=[],M=[],x=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,A=!1,S=null,I=null,D=null,k=null;this._outputColorSpace=kt;let Y=0,j=0,se=null,ne=-1,le=null,ae=new Pt,we=new Pt,Ee=null,it=new Be(0),ge=0,oe=t.width,G=t.height,Z=1,fe=null,me=null,_e=new Pt(0,0,oe,G),He=new Pt(0,0,oe,G),Je=!1,Oe=new Vs,je=!1,dt=!1,et=new rt,vt=new J,Ct=new Pt,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Mt=!1;function Ot(){return se===null?Z:1}let X=n;function Ht(R,q){return t.getContext(R,q)}let ct,F,b,N,O,H,z,$,V,K,ue,xe,de,ye,be,De,Ge,W,Se,he,Te,Ie,ve;try{let R={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",B,!1),t.addEventListener("webglcontextrestored",ie,!1),t.addEventListener("webglcontextcreationerror",Q,!1),X===null){let q="webgl2";if(X=Ht(q,R),X===null)throw Ht(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}d()}catch(R){throw t.removeEventListener("webglcontextlost",B,!1),t.removeEventListener("webglcontextrestored",ie,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),$e("WebGLRenderer: "+R.message),R}function d(){ct=new ox(X),ct.init(),Te=new Yy(X,ct),F=new j_(X,ct,e,Te),b=new Xy(X,ct),F.reversedDepthBuffer&&f&&b.buffers.depth.setReversed(!0),I=X.createFramebuffer(),D=X.createFramebuffer(),k=X.createFramebuffer(),N=new ux(X),O=new Py,H=new qy(X,ct,b,O,F,Te,N),z=new ax(w),$=new fg(X),Ie=new Z_(X,$),V=new lx(X,$,N,Ie),K=new fx(X,V,$,Ie,N),W=new hx(X,F,H),be=new $_(O),ue=new Iy(w,z,ct,F,Ie,be),xe=new jy(w,O),de=new Ny,ye=new By(ct),Ge=new K_(w,z,b,K,g,l),De=new Wy(w,K,F),ve=new $y(X,N,F,b),Se=new J_(X,ct,N),he=new cx(X,ct,N),N.programs=ue.programs,w.capabilities=F,w.extensions=ct,w.properties=O,w.renderLists=de,w.shadowMap=De,w.state=b,w.info=N}y!==zn&&(x=new px(y,t.width,t.height,o,r,s));let T=new zh(w,X);this.xr=T,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let R=ct.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=ct.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(R){R!==void 0&&(Z=R,this.setSize(oe,G,!1))},this.getSize=function(R){return R.set(oe,G)},this.setSize=function(R,q,ce=!0){if(T.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=R,G=q,t.width=Math.floor(R*Z),t.height=Math.floor(q*Z),ce===!0&&(t.style.width=R+"px",t.style.height=q+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(oe*Z,G*Z).floor()},this.setDrawingBufferSize=function(R,q,ce){oe=R,G=q,Z=ce,t.width=Math.floor(R*ce),t.height=Math.floor(q*ce),this.setViewport(0,0,R,q)},this.setEffects=function(R){if(y===zn){$e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let q=0;q<R.length;q++)if(R[q].isOutputPass===!0){qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(ae)},this.getViewport=function(R){return R.copy(_e)},this.setViewport=function(R,q,ce,ee){R.isVector4?_e.set(R.x,R.y,R.z,R.w):_e.set(R,q,ce,ee),b.viewport(ae.copy(_e).multiplyScalar(Z).round())},this.getScissor=function(R){return R.copy(He)},this.setScissor=function(R,q,ce,ee){R.isVector4?He.set(R.x,R.y,R.z,R.w):He.set(R,q,ce,ee),b.scissor(we.copy(He).multiplyScalar(Z).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(R){b.setScissorTest(Je=R)},this.setOpaqueSort=function(R){fe=R},this.setTransparentSort=function(R){me=R},this.getClearColor=function(R){return R.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,ce=!0){let ee=0;if(R){let te=!1;if(se!==null){let Ae=se.texture.format;te=v.has(Ae)}if(te){let Ae=se.texture.type,Ne=m.has(Ae),Ce=Ge.getClearColor(),ke=Ge.getClearAlpha(),Xe=Ce.r,ot=Ce.g,pt=Ce.b;Ne?(_[0]=Xe,_[1]=ot,_[2]=pt,_[3]=ke,X.clearBufferuiv(X.COLOR,0,_)):(L[0]=Xe,L[1]=ot,L[2]=pt,L[3]=ke,X.clearBufferiv(X.COLOR,0,L))}else ee|=X.COLOR_BUFFER_BIT}q&&(ee|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(ee|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&X.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),S=R},this.dispose=function(){t.removeEventListener("webglcontextlost",B,!1),t.removeEventListener("webglcontextrestored",ie,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),Ge.dispose(),de.dispose(),ye.dispose(),O.dispose(),z.dispose(),K.dispose(),Ie.dispose(),ve.dispose(),ue.dispose(),T.dispose(),T.removeEventListener("sessionstart",ut),T.removeEventListener("sessionend",Kt),Et.stop()};function B(R){R.preventDefault(),Fa("WebGLRenderer: Context Lost."),A=!0}function ie(){Fa("WebGLRenderer: Context Restored."),A=!1;let R=N.autoReset,q=De.enabled,ce=De.autoUpdate,ee=De.needsUpdate,te=De.type;d(),N.autoReset=R,De.enabled=q,De.autoUpdate=ce,De.needsUpdate=ee,De.type=te}function Q(R){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function re(R){let q=R.target;q.removeEventListener("dispose",re),pe(q)}function pe(R){Me(R),O.remove(R)}function Me(R){let q=O.get(R).programs;q!==void 0&&(q.forEach(function(ce){ue.releaseProgram(ce)}),R.isShaderMaterial&&ue.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,ce,ee,te,Ae){q===null&&(q=Wt);let Ne=te.isMesh&&te.matrixWorld.determinantAffine()<0,Ce=Un(R,q,ce,ee,te);b.setMaterial(ee,Ne);let ke=ce.index,Xe=1;if(ee.wireframe===!0){if(ke=V.getWireframeAttribute(ce),ke===void 0)return;Xe=2}let ot=ce.drawRange,pt=ce.attributes.position,ze=ot.start*Xe,At=(ot.start+ot.count)*Xe;Ae!==null&&(ze=Math.max(ze,Ae.start*Xe),At=Math.min(At,(Ae.start+Ae.count)*Xe)),ke!==null?(ze=Math.max(ze,0),At=Math.min(At,ke.count)):pt!=null&&(ze=Math.max(ze,0),At=Math.min(At,pt.count));let on=At-ze;if(on<0||on===1/0)return;Ie.setup(te,ee,Ce,ce,ke);let Yt,Ft=Se;if(ke!==null&&(Yt=$.get(ke),Ft=he,Ft.setIndex(Yt)),te.isMesh)ee.wireframe===!0?(b.setLineWidth(ee.wireframeLinewidth*Ot()),Ft.setMode(X.LINES)):Ft.setMode(X.TRIANGLES);else if(te.isLine){let Sn=ee.linewidth;Sn===void 0&&(Sn=1),b.setLineWidth(Sn*Ot()),te.isLineSegments?Ft.setMode(X.LINES):te.isLineLoop?Ft.setMode(X.LINE_LOOP):Ft.setMode(X.LINE_STRIP)}else te.isPoints?Ft.setMode(X.POINTS):te.isSprite&&Ft.setMode(X.TRIANGLES);if(te.isBatchedMesh)if(ct.get("WEBGL_multi_draw"))Ft.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{let Sn=te._multiDrawStarts,Fe=te._multiDrawCounts,In=te._multiDrawCount,St=ke?$.get(ke).bytesPerElement:1,ni=O.get(ee).currentProgram.getUniforms();for(let Ai=0;Ai<In;Ai++)ni.setValue(X,"_gl_DrawID",Ai),Ft.render(Sn[Ai]/St,Fe[Ai])}else if(te.isInstancedMesh)Ft.renderInstances(ze,on,te.count);else if(ce.isInstancedBufferGeometry){let Sn=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Fe=Math.min(ce.instanceCount,Sn);Ft.renderInstances(ze,on,Fe)}else Ft.render(ze,on)};function Le(R,q,ce,ee){S!==null&&R.isNodeMaterial&&S.setObject(ee,R),je===!0&&be.setState(R,ce,!1),R.transparent===!0&&R.side===kn&&R.forceSinglePass===!1?(R.side=xn,R.needsUpdate=!0,qt(R,q,ee),R.side=Oi,R.needsUpdate=!0,qt(R,q,ee),R.side=kn):qt(R,q,ee)}this.compile=function(R,q,ce=null){ce===null&&(ce=R),S!==null&&S.renderStart(R,q,ce),P=ye.get(ce),P.init(q),M.push(P),ce.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(P.pushLight(te),te.castShadow&&P.pushShadow(te))}),R!==ce&&R.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(P.pushLight(te),te.castShadow&&P.pushShadow(te))}),P.setupLights(),S!==null&&S.updateLights(P.state.lightsArray),dt=this.localClippingEnabled,je=be.init(this.clippingPlanes,dt),je===!0&&be.setGlobalState(this.clippingPlanes,q),S!==null&&De.render(P.state.shadowsArray,ce,q);let ee=new Set;return R.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;let Ae=te.material;if(Ae)if(Array.isArray(Ae))for(let Ne=0;Ne<Ae.length;Ne++){let Ce=Ae[Ne];Le(Ce,ce,q,te),ee.add(Ce)}else Le(Ae,ce,q,te),ee.add(Ae)}),P=M.pop(),S!==null&&S.renderEnd(),ee},this.compileAsync=function(R,q,ce=null){let ee=this.compile(R,q,ce);return new Promise(te=>{function Ae(){if(ee.forEach(function(Ne){let ke=O.get(Ne).currentProgram;(ke===void 0||ke.isReady())&&ee.delete(Ne)}),ee.size===0){te(R);return}setTimeout(Ae,10)}ct.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let We=null;function Qe(R){We&&We(R)}function ut(){Et.stop()}function Kt(){Et.start()}let Et=new Vp;Et.setAnimationLoop(Qe),typeof self!="undefined"&&Et.setContext(self),this.setAnimationLoop=function(R){We=R,T.setAnimationLoop(R),R===null?Et.stop():Et.start()},T.addEventListener("sessionstart",ut),T.addEventListener("sessionend",Kt),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;S!==null&&S.renderStart(R,q);let ce=T.enabled===!0&&T.isPresenting===!0,ee=x!==null&&(se===null||ce)&&x.begin(w,se);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),T.enabled===!0&&T.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(T.cameraAutoUpdate===!0&&T.updateCamera(q),q=T.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,q,se),P=ye.get(R,M.length),P.init(q),P.state.textureUnits=H.getTextureUnits(),M.push(P),et.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Oe.setFromProjectionMatrix(et,_i,q.reversedDepth),dt=this.localClippingEnabled,je=be.init(this.clippingPlanes,dt),C=de.get(R,U.length),C.init(),U.push(C),T.enabled===!0&&T.isPresenting===!0){let Ne=w.xr.getDepthSensingMesh();Ne!==null&&an(Ne,q,-1/0,w.sortObjects)}an(R,q,0,w.sortObjects),C.finish(),S!==null&&S.updateLights(P.state.lightsArray),w.sortObjects===!0&&C.sort(fe,me),Mt=T.enabled===!1||T.isPresenting===!1||T.hasDepthSensing()===!1,Mt&&Ge.addToRenderList(C,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),je===!0&&be.beginShadows();let te=P.state.shadowsArray;if(De.render(te,R,q),je===!0&&be.endShadows(),(ee&&x.hasRenderPass())===!1){let Ne=C.opaque,Ce=C.transmissive;if(P.setupLights(),q.isArrayCamera){let ke=q.cameras;if(Ce.length>0)for(let Xe=0,ot=ke.length;Xe<ot;Xe++){let pt=ke[Xe];wt(Ne,Ce,R,pt)}Mt&&Ge.render(R);for(let Xe=0,ot=ke.length;Xe<ot;Xe++){let pt=ke[Xe];Jt(C,R,pt,pt.viewport)}}else Ce.length>0&&wt(Ne,Ce,R,q),Mt&&Ge.render(R),Jt(C,R,q)}se!==null&&j===0&&(H.updateMultisampleRenderTarget(se),H.updateRenderTargetMipmap(se)),ee&&x.end(w),R.isScene===!0&&R.onAfterRender(w,R,q),Ie.resetDefaultState(),ne=-1,le=null,M.pop(),M.length>0?(P=M[M.length-1],H.setTextureUnits(P.state.textureUnits),je===!0&&be.setGlobalState(w.clippingPlanes,P.state.camera)):P=null,U.pop(),U.length>0?C=U[U.length-1]:C=null,S!==null&&S.renderEnd()};function an(R,q,ce,ee){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)ce=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLightProbeGrid)P.pushLightProbeGrid(R);else if(R.isLight)P.pushLight(R),R.castShadow&&P.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(Oe)){ee&&Ct.setFromMatrixPosition(R.matrixWorld).applyMatrix4(et);let Ne=K.update(R),Ce=R.material;Ce.visible&&C.push(R,Ne,Ce,ce,Ct.z,null,q)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(Oe))){let Ne=K.update(R),Ce=R.material;if(ee&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ct.copy(R.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Ct.copy(Ne.boundingSphere.center)),Ct.applyMatrix4(R.matrixWorld).applyMatrix4(et)),Array.isArray(Ce)){let ke=Ne.groups;for(let Xe=0,ot=ke.length;Xe<ot;Xe++){let pt=ke[Xe],ze=Ce[pt.materialIndex];ze&&ze.visible&&C.push(R,Ne,ze,ce,Ct.z,pt,q)}}else Ce.visible&&C.push(R,Ne,Ce,ce,Ct.z,null,q)}}let Ae=R.children;for(let Ne=0,Ce=Ae.length;Ne<Ce;Ne++)an(Ae[Ne],q,ce,ee)}function Jt(R,q,ce,ee){let{opaque:te,transmissive:Ae,transparent:Ne}=R;P.setupLightsView(ce),je===!0&&be.setGlobalState(w.clippingPlanes,ce),ee&&b.viewport(ae.copy(ee)),te.length>0&&$t(te,q,ce),Ae.length>0&&$t(Ae,q,ce),Ne.length>0&&$t(Ne,q,ce),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function wt(R,q,ce,ee){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[ee.id]===void 0){let ze=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[ee.id]=new un(1,1,{generateMipmaps:!0,type:ze?yn:zn,minFilter:Si,samples:Math.max(4,F.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:st.workingColorSpace})}let Ae=P.state.transmissionRenderTarget[ee.id],Ne=ee.viewport||ae;Ae.setSize(Ne.z*w.transmissionResolutionScale,Ne.w*w.transmissionResolutionScale);let Ce=w.getRenderTarget(),ke=w.getActiveCubeFace(),Xe=w.getActiveMipmapLevel();w.setRenderTarget(Ae),w.getClearColor(it),ge=w.getClearAlpha(),ge<1&&w.setClearColor(16777215,.5),w.clear(),Mt&&Ge.render(ce);let ot=w.toneMapping;w.toneMapping=Mi;let pt=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),P.setupLightsView(ee),je===!0&&be.setGlobalState(w.clippingPlanes,ee),$t(R,ce,ee),H.updateMultisampleRenderTarget(Ae),H.updateRenderTargetMipmap(Ae),ct.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let At=0,on=q.length;At<on;At++){let Yt=q[At],{object:Ft,geometry:Sn,material:Fe,group:In}=Yt;if(Fe.side===kn&&Ft.layers.test(ee.layers)){let St=Fe.side;Fe.side=xn,Fe.needsUpdate=!0,Xt(Ft,ce,ee,Sn,Fe,In),Fe.side=St,Fe.needsUpdate=!0,ze=!0}}ze===!0&&(H.updateMultisampleRenderTarget(Ae),H.updateRenderTargetMipmap(Ae))}w.setRenderTarget(Ce,ke,Xe),w.setClearColor(it,ge),pt!==void 0&&(ee.viewport=pt),w.toneMapping=ot}function $t(R,q,ce){let ee=q.isScene===!0?q.overrideMaterial:null;for(let te=0,Ae=R.length;te<Ae;te++){let Ne=R[te],{object:Ce,geometry:ke,group:Xe}=Ne,ot=Ne.material;ot.allowOverride===!0&&ee!==null&&(ot=ee),Ce.layers.test(ce.layers)&&Xt(Ce,q,ce,ke,ot,Xe)}}function Xt(R,q,ce,ee,te,Ae){S!==null&&te.isNodeMaterial&&S.setObject(R,te),R.onBeforeRender(w,q,ce,ee,te,Ae),R.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),te.onBeforeRender(w,q,ce,ee,R,Ae),te.transparent===!0&&te.side===kn&&te.forceSinglePass===!1?(te.side=xn,te.needsUpdate=!0,w.renderBufferDirect(ce,q,ee,te,R,Ae),te.side=Oi,te.needsUpdate=!0,w.renderBufferDirect(ce,q,ee,te,R,Ae),te.side=kn):w.renderBufferDirect(ce,q,ee,te,R,Ae),R.onAfterRender(w,q,ce,ee,te,Ae)}function qt(R,q,ce){q.isScene!==!0&&(q=Wt);let ee=O.get(R),te=P.state.lights,Ae=P.state.shadowsArray,Ne=te.state.version,Ce=ue.getParameters(R,te.state,Ae,q,ce,P.state.lightProbeGridArray),ke=ue.getProgramCacheKey(Ce),Xe=ee.programs;ee.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?q.environment:null,ee.fog=q.fog;let ot=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ee.envMap=z.get(R.envMap||ee.environment,ot),ee.envMapRotation=ee.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,Xe===void 0&&(R.addEventListener("dispose",re),Xe=new Map,ee.programs=Xe);let pt=Xe.get(ke);if(pt!==void 0){if(ee.currentProgram===pt&&ee.lightsStateVersion===Ne)return ti(R,Ce),pt}else Ce.uniforms=ue.getUniforms(R),S!==null&&R.isNodeMaterial&&S.build(R,ce,Ce),R.onBeforeCompile(Ce,w),pt=ue.acquireProgram(Ce,ke),Xe.set(ke,pt),ee.uniforms=Ce.uniforms;let ze=ee.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ze.clippingPlanes=be.uniform),ti(R,Ce),ee.needsLights=Vn(R),ee.lightsStateVersion=Ne,ee.needsLights&&(ze.ambientLightColor.value=te.state.ambient,ze.lightProbe.value=te.state.probe,ze.sunLights.value=te.state.sun,ze.sunLightShadows.value=te.state.sunShadow,ze.directionalLights.value=te.state.directional,ze.directionalLightShadows.value=te.state.directionalShadow,ze.spotLights.value=te.state.spot,ze.spotLightShadows.value=te.state.spotShadow,ze.rectAreaLights.value=te.state.rectArea,ze.ltc_1.value=te.state.rectAreaLTC1,ze.ltc_2.value=te.state.rectAreaLTC2,ze.pointLights.value=te.state.point,ze.pointLightShadows.value=te.state.pointShadow,ze.hemisphereLights.value=te.state.hemi,ze.sunShadowMatrix.value=te.state.sunShadowMatrix,ze.sunShadowCascade.value=te.state.sunShadowCascade,ze.directionalShadowMatrix.value=te.state.directionalShadowMatrix,ze.spotLightMatrix.value=te.state.spotLightMatrix,ze.spotLightMap.value=te.state.spotLightMap,ze.pointShadowMatrix.value=te.state.pointShadowMatrix),ee.lightProbeGrid=P.state.lightProbeGridArray.length>0,ee.currentProgram=pt,ee.uniformsList=null,pt}function ht(R){if(R.uniformsList===null){let q=R.currentProgram.getUniforms();R.uniformsList=la.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function ti(R,q){let ce=O.get(R);ce.outputColorSpace=q.outputColorSpace,ce.batching=q.batching,ce.batchingColor=q.batchingColor,ce.instancing=q.instancing,ce.instancingColor=q.instancingColor,ce.instancingMorph=q.instancingMorph,ce.skinning=q.skinning,ce.morphTargets=q.morphTargets,ce.morphNormals=q.morphNormals,ce.morphColors=q.morphColors,ce.morphTargetsCount=q.morphTargetsCount,ce.numClippingPlanes=q.numClippingPlanes,ce.numIntersection=q.numClipIntersection,ce.vertexAlphas=q.vertexAlphas,ce.vertexTangents=q.vertexTangents,ce.toneMapping=q.toneMapping}function Vi(R,q){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;E.setFromMatrixPosition(q.matrixWorld);for(let ce=0,ee=R.length;ce<ee;ce++){let te=R[ce];if(te.texture!==null&&te.boundingBox.containsPoint(E))return te}return null}function Un(R,q,ce,ee,te){q.isScene!==!0&&(q=Wt),H.resetTextureUnits();let Ae=q.fog,Ne=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?q.environment:null,Ce=se===null?w.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:st.workingColorSpace,ke=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,Xe=z.get(ee.envMap||Ne,ke),ot=ee.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pt=!!ce.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),ze=!!ce.morphAttributes.position,At=!!ce.morphAttributes.normal,on=!!ce.morphAttributes.color,Yt=Mi;ee.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Yt=w.toneMapping);let Ft=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,Sn=Ft!==void 0?Ft.length:0,Fe=O.get(ee),In=P.state.lights;if(je===!0&&(dt===!0||R!==le)){let Bt=R===le&&ee.id===ne;be.setState(ee,R,Bt)}let St=!1;ee.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==In.state.version||Fe.outputColorSpace!==Ce||te.isBatchedMesh&&Fe.batching===!1||!te.isBatchedMesh&&Fe.batching===!0||te.isBatchedMesh&&Fe.batchingColor===!0&&te._colorsTexture===null||te.isBatchedMesh&&Fe.batchingColor===!1&&te._colorsTexture!==null||te.isInstancedMesh&&Fe.instancing===!1||!te.isInstancedMesh&&Fe.instancing===!0||te.isSkinnedMesh&&Fe.skinning===!1||!te.isSkinnedMesh&&Fe.skinning===!0||te.isInstancedMesh&&Fe.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Fe.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Fe.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Fe.instancingMorph===!1&&te.morphTexture!==null||Fe.envMap!==Xe||ee.fog===!0&&Fe.fog!==Ae||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==be.numPlanes||Fe.numIntersection!==be.numIntersection)||Fe.vertexAlphas!==ot||Fe.vertexTangents!==pt||Fe.morphTargets!==ze||Fe.morphNormals!==At||Fe.morphColors!==on||Fe.toneMapping!==Yt||Fe.morphTargetsCount!==Sn||!!Fe.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(St=!0):(St=!0,Fe.__version=ee.version);let ni=Fe.currentProgram;St===!0&&(ni=qt(ee,q,te),S&&ee.isNodeMaterial&&S.onUpdateProgram(ee,ni,Fe));let Ai=!1,hr=!1,ps=!1,Nt=ni.getUniforms(),tn=Fe.uniforms;if(b.useProgram(ni.program)&&(Ai=!0,hr=!0,ps=!0),ee.id!==ne&&(ne=ee.id,hr=!0),Fe.needsLights){let Bt=Vi(P.state.lightProbeGridArray,te);Fe.lightProbeGrid!==Bt&&(Fe.lightProbeGrid=Bt,hr=!0)}if(Ai||le!==R){b.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Nt.setValue(X,"projectionMatrix",R.projectionMatrix),Nt.setValue(X,"viewMatrix",R.matrixWorldInverse);let dr=Nt.map.cameraPosition;dr!==void 0&&dr.setValue(X,vt.setFromMatrixPosition(R.matrixWorld)),F.logarithmicDepthBuffer&&Nt.setValue(X,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Nt.setValue(X,"isOrthographic",R.isOrthographicCamera===!0),le!==R&&(le=R,hr=!0,ps=!0)}if(Fe.needsLights&&(In.state.sunShadowMap.length>0&&Nt.setValue(X,"sunShadowMap",In.state.sunShadowMap,H),In.state.directionalShadowMap.length>0&&Nt.setValue(X,"directionalShadowMap",In.state.directionalShadowMap,H),In.state.spotShadowMap.length>0&&Nt.setValue(X,"spotShadowMap",In.state.spotShadowMap,H),In.state.pointShadowMap.length>0&&Nt.setValue(X,"pointShadowMap",In.state.pointShadowMap,H)),te.isSkinnedMesh){Nt.setOptional(X,te,"bindMatrix"),Nt.setOptional(X,te,"bindMatrixInverse");let Bt=te.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),Nt.setValue(X,"boneTexture",Bt.boneTexture,H))}te.isBatchedMesh&&(Nt.setOptional(X,te,"batchingTexture"),Nt.setValue(X,"batchingTexture",te._matricesTexture,H),Nt.setOptional(X,te,"batchingIdTexture"),Nt.setValue(X,"batchingIdTexture",te._indirectTexture,H),Nt.setOptional(X,te,"batchingColorTexture"),te._colorsTexture!==null&&Nt.setValue(X,"batchingColorTexture",te._colorsTexture,H));let fr=ce.morphAttributes;if((fr.position!==void 0||fr.normal!==void 0||fr.color!==void 0)&&W.update(te,ce,ni),(hr||Fe.receiveShadow!==te.receiveShadow)&&(Fe.receiveShadow=te.receiveShadow,Nt.setValue(X,"receiveShadow",te.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&q.environment!==null&&(tn.envMapIntensity.value=q.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=eM()),hr){if(Nt.setValue(X,"toneMappingExposure",w.toneMappingExposure),Fe.needsLights&&On(tn,ps),Ae&&ee.fog===!0&&xe.refreshFogUniforms(tn,Ae),xe.refreshMaterialUniforms(tn,ee,Z,G,P.state.transmissionRenderTarget[R.id]),Fe.needsLights&&Fe.lightProbeGrid){let Bt=Fe.lightProbeGrid;tn.probesSH.value=Bt.texture,tn.probesMin.value.copy(Bt.boundingBox.min),tn.probesMax.value.copy(Bt.boundingBox.max),tn.probesResolution.value.copy(Bt.resolution)}la.upload(X,ht(Fe),tn,H)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(la.upload(X,ht(Fe),tn,H),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Nt.setValue(X,"center",te.center),Nt.setValue(X,"modelViewMatrix",te.modelViewMatrix),Nt.setValue(X,"normalMatrix",te.normalMatrix),Nt.setValue(X,"modelMatrix",te.matrixWorld),ee.uniformsGroups!==void 0){let Bt=ee.uniformsGroups;for(let dr=0,ms=Bt.length;dr<ms;dr++){let Nf=Bt[dr];ve.update(Nf,ni),ve.bind(Nf,ni)}}return ni}function On(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.sunLights.needsUpdate=q,R.sunLightShadows.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Vn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(R,q,ce){let ee=O.get(R);ee.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),O.get(R.texture).__webglTexture=q,O.get(R.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:ce,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){let ce=O.get(R);ce.__webglFramebuffer=q,ce.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(R,q=0,ce=0){se=R,Y=q,j=ce;let ee=null,te=!1,Ae=!1;if(R){let Ce=O.get(R);if(Ce.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(X.FRAMEBUFFER,Ce.__webglFramebuffer),ae.copy(R.viewport),we.copy(R.scissor),Ee=R.scissorTest,b.viewport(ae),b.scissor(we),b.setScissorTest(Ee),ne=-1;return}else if(Ce.__webglFramebuffer===void 0)H.setupRenderTarget(R);else if(Ce.__hasExternalTextures)H.rebindTextures(R,O.get(R.texture).__webglTexture,O.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let ot=R.depthTexture;if(Ce.__boundDepthTexture!==ot){if(ot!==null&&O.has(ot)&&(R.width!==ot.image.width||R.height!==ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(R)}}let ke=R.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ae=!0);let Xe=O.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Xe[q])?ee=Xe[q][ce]:ee=Xe[q],te=!0):R.samples>0&&H.useMultisampledRTT(R)===!1?ee=O.get(R).__webglMultisampledFramebuffer:Array.isArray(Xe)?ee=Xe[ce]:ee=Xe,ae.copy(R.viewport),we.copy(R.scissor),Ee=R.scissorTest}else ae.copy(_e).multiplyScalar(Z).floor(),we.copy(He).multiplyScalar(Z).floor(),Ee=Je;if(ce!==0&&(ee=I),b.bindFramebuffer(X.FRAMEBUFFER,ee)&&b.drawBuffers(R,ee),b.viewport(ae),b.scissor(we),b.setScissorTest(Ee),te){let Ce=O.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ce.__webglTexture,ce)}else if(Ae){let Ce=q;for(let ke=0;ke<R.textures.length;ke++){let Xe=O.get(R.textures[ke]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+ke,Xe.__webglTexture,ce,Ce)}}else if(R!==null&&ce!==0){let Ce=O.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ce.__webglTexture,ce)}ne=-1};function Wi(R){let q=O.get(R);return(q.__readFormat!==R.format||q.__readType!==R.type)&&(q.__readFormat=R.format,q.__readType=R.type,q.__formatReadable=F.textureFormatReadable(R.format),q.__typeReadable=F.textureTypeReadable(R.type)),q}this.readRenderTargetPixels=function(R,q,ce,ee,te,Ae,Ne,Ce=0){if(!(R&&R.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=O.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ne!==void 0&&(ke=ke[Ne]),ke){b.bindFramebuffer(X.FRAMEBUFFER,ke);try{let Xe=R.textures[Ce],ot=Xe.format,pt=Xe.type;R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ce);let ze=Wi(Xe);if(ze.__formatReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ze.__typeReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-ee&&ce>=0&&ce<=R.height-te&&X.readPixels(q,ce,ee,te,Te.convert(ot),Te.convert(pt),Ae)}finally{let Xe=se!==null?O.get(se).__webglFramebuffer:null;b.bindFramebuffer(X.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(R,q,ce,ee,te,Ae,Ne,Ce=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=O.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ne!==void 0&&(ke=ke[Ne]),ke)if(q>=0&&q<=R.width-ee&&ce>=0&&ce<=R.height-te){b.bindFramebuffer(X.FRAMEBUFFER,ke);let Xe=R.textures[Ce],ot=Xe.format,pt=Xe.type;R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ce);let ze=Wi(Xe);if(ze.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ze.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let At=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,At),X.bufferData(X.PIXEL_PACK_BUFFER,Ae.byteLength,X.STREAM_READ),X.readPixels(q,ce,ee,te,Te.convert(ot),Te.convert(pt),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);let on=se!==null?O.get(se).__webglFramebuffer:null;b.bindFramebuffer(X.FRAMEBUFFER,on);let Yt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await vp(X,Yt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,At),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Ae),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(At),X.deleteSync(Yt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,ce=0){let ee=Math.pow(2,-ce),te=Math.floor(R.image.width*ee),Ae=Math.floor(R.image.height*ee),Ne=q!==null?q.x:0,Ce=q!==null?q.y:0;H.setTexture2D(R,0),X.copyTexSubImage2D(X.TEXTURE_2D,ce,0,0,Ne,Ce,te,Ae),b.unbindTexture()},this.copyTextureToTexture=function(R,q,ce=null,ee=null,te=0,Ae=0){let Ne,Ce,ke,Xe,ot,pt,ze,At,on,Yt=R.isCompressedTexture?R.mipmaps[Ae]:R.image;if(ce!==null)Ne=ce.max.x-ce.min.x,Ce=ce.max.y-ce.min.y,ke=ce.isBox3?ce.max.z-ce.min.z:1,Xe=ce.min.x,ot=ce.min.y,pt=ce.isBox3?ce.min.z:0;else{let tn=Math.pow(2,-te);Ne=Math.floor(Yt.width*tn),Ce=Math.floor(Yt.height*tn),R.isDataArrayTexture?ke=Yt.depth:R.isData3DTexture?ke=Math.floor(Yt.depth*tn):ke=1,Xe=0,ot=0,pt=0}ee!==null?(ze=ee.x,At=ee.y,on=ee.z):(ze=0,At=0,on=0);let Ft=Te.convert(q.format),Sn=Te.convert(q.type),Fe;q.isData3DTexture?(H.setTexture3D(q,0),Fe=X.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(H.setTexture2DArray(q,0),Fe=X.TEXTURE_2D_ARRAY):(H.setTexture2D(q,0),Fe=X.TEXTURE_2D),b.activeTexture(X.TEXTURE0),b.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,q.flipY),b.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),b.pixelStorei(X.UNPACK_ALIGNMENT,q.unpackAlignment);let In=b.getParameter(X.UNPACK_ROW_LENGTH),St=b.getParameter(X.UNPACK_IMAGE_HEIGHT),ni=b.getParameter(X.UNPACK_SKIP_PIXELS),Ai=b.getParameter(X.UNPACK_SKIP_ROWS),hr=b.getParameter(X.UNPACK_SKIP_IMAGES);b.pixelStorei(X.UNPACK_ROW_LENGTH,Yt.width),b.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Yt.height),b.pixelStorei(X.UNPACK_SKIP_PIXELS,Xe),b.pixelStorei(X.UNPACK_SKIP_ROWS,ot),b.pixelStorei(X.UNPACK_SKIP_IMAGES,pt);let ps=R.isDataArrayTexture||R.isData3DTexture,Nt=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){let tn=O.get(R),fr=O.get(q),Bt=O.get(tn.__renderTarget),dr=O.get(fr.__renderTarget);b.bindFramebuffer(X.READ_FRAMEBUFFER,Bt.__webglFramebuffer),b.bindFramebuffer(X.DRAW_FRAMEBUFFER,dr.__webglFramebuffer);for(let ms=0;ms<ke;ms++)ps&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,O.get(R).__webglTexture,te,pt+ms),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,O.get(q).__webglTexture,Ae,on+ms)),X.blitFramebuffer(Xe,ot,Ne,Ce,ze,At,Ne,Ce,X.DEPTH_BUFFER_BIT,X.NEAREST);b.bindFramebuffer(X.READ_FRAMEBUFFER,null),b.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(te!==0||R.isRenderTargetTexture||O.has(R)){let tn=O.get(R),fr=O.get(q);b.bindFramebuffer(X.READ_FRAMEBUFFER,D),b.bindFramebuffer(X.DRAW_FRAMEBUFFER,k);for(let Bt=0;Bt<ke;Bt++)ps?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,tn.__webglTexture,te,pt+Bt):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,tn.__webglTexture,te),Nt?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,fr.__webglTexture,Ae,on+Bt):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,fr.__webglTexture,Ae),te!==0?X.blitFramebuffer(Xe,ot,Ne,Ce,ze,At,Ne,Ce,X.COLOR_BUFFER_BIT,X.NEAREST):Nt?X.copyTexSubImage3D(Fe,Ae,ze,At,on+Bt,Xe,ot,Ne,Ce):X.copyTexSubImage2D(Fe,Ae,ze,At,Xe,ot,Ne,Ce);b.bindFramebuffer(X.READ_FRAMEBUFFER,null),b.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Nt?R.isDataTexture||R.isData3DTexture?X.texSubImage3D(Fe,Ae,ze,At,on,Ne,Ce,ke,Ft,Sn,Yt.data):q.isCompressedArrayTexture?X.compressedTexSubImage3D(Fe,Ae,ze,At,on,Ne,Ce,ke,Ft,Yt.data):X.texSubImage3D(Fe,Ae,ze,At,on,Ne,Ce,ke,Ft,Sn,Yt):R.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Ae,ze,At,Ne,Ce,Ft,Sn,Yt.data):R.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Ae,ze,At,Yt.width,Yt.height,Ft,Yt.data):X.texSubImage2D(X.TEXTURE_2D,Ae,ze,At,Ne,Ce,Ft,Sn,Yt);b.pixelStorei(X.UNPACK_ROW_LENGTH,In),b.pixelStorei(X.UNPACK_IMAGE_HEIGHT,St),b.pixelStorei(X.UNPACK_SKIP_PIXELS,ni),b.pixelStorei(X.UNPACK_SKIP_ROWS,Ai),b.pixelStorei(X.UNPACK_SKIP_IMAGES,hr),Ae===0&&q.generateMipmaps&&X.generateMipmap(Fe),b.unbindTexture()},this.initRenderTarget=function(R){O.get(R).__webglFramebuffer===void 0&&H.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?H.setTextureCube(R,0):R.isData3DTexture?H.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?H.setTexture2DArray(R,0):H.setTexture2D(R,0),b.unbindTexture()},this.resetState=function(){Y=0,j=0,se=null,b.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}};var fa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var jn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},tM=new Ui(-1,1,1,-1,0,1),Gh=class extends Vt{constructor(){super(),this.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new xt([0,2,0,0,2,0],2))}},nM=new Gh,Nr=class{constructor(e){this._mesh=new Ue(nM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,tM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var zc=class extends jn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof jt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=or.clone(e.uniforms),this.material=new jt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Nr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Eo=class extends jn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}},Gc=class extends jn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Vc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Ye);this._width=n.width,this._height=n.height,t=new un(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:yn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new zc(fa),this.copyPass.material.blending=oi,this.timer=new io}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let r=0,s=this.passes.length;r<s;r++){let a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Eo!==void 0&&(a instanceof Eo?n=!0:a instanceof Gc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ye);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Wc=class extends jn{constructor(e,t,n=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Be}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}};var Jp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Be(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var da=class i extends jn{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e!==void 0?new Ye(e.x,e.y):new Ye(256,256),this.clearColor=new Be(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new un(s,a,{type:yn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){let h=new un(s,a,{type:yn,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+c,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let f=new un(s,a,{type:yn,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+c,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}let o=Jp;this.highPassUniforms=or.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new jt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new Ye(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new J(1,1,1),new J(1,1,1),new J(1,1,1),new J(1,1,1),new J(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=or.clone(fa.uniforms),this.blendMaterial=new jt({uniforms:this.copyUniforms,vertexShader:fa.vertexShader,fragmentShader:fa.fragmentShader,premultipliedAlpha:!0,blending:ar,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Be,this._oldClearAlpha=1,this._basic=new wn,this._fsQuad=new Nr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Ye(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(e,t,n,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let r=[],s=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,u=o+l;r.push((a*o+(a+1)*l)/u),s.push(u)}return new jt({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new Ye(.5,.5)},direction:{value:new Ye(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:s}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new jt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};da.BlurDirectionX=new Ye(1,0);da.BlurDirectionY=new Ye(0,1);var wo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Xc=class extends jn{constructor(){super(),this.isOutputPass=!0,this.uniforms=or.clone(wo.uniforms),this.material=new Ks({name:wo.name,uniforms:this.uniforms,vertexShader:wo.vertexShader,fragmentShader:wo.fragmentShader}),this._fsQuad=new Nr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},st.getTransfer(this._outputColorSpace)===bt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ao?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===oo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===lo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ss?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===uo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ho?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===co&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var qc=class extends Tr{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new hn;e.deleteAttribute("uv");let t=new en({side:xn}),n=new en,r=new Yn(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let s=new Ue(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let a=new jr(e,n,6),o=new Gt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Ue(e,pa(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let u=new Ue(e,pa(50));u.position.set(-16.109,18.021,-8.207),u.scale.set(.1,2.425,2.751),this.add(u);let c=new Ue(e,pa(17));c.position.set(14.904,12.198,-1.832),c.scale.set(.15,4.265,6.331),this.add(c);let h=new Ue(e,pa(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let f=new Ue(e,pa(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let p=new Ue(e,pa(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function pa(i){return new ja({color:0,emissive:16777215,emissiveIntensity:i})}var yt=128;function Jc(i,e,t){var n=i*374761393+e*668265263+t*982451653|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function Qp(i,e,t,n){var r=Math.floor(i),s=Math.floor(e),a=i-r,o=e-s,l=a*a*(3-2*a),u=o*o*(3-2*o);function c(y,v){return Jc((y%t+t)%t,(v%t+t)%t,n)}var h=c(r,s),f=c(r+1,s),p=c(r,s+1),g=c(r+1,s+1);return h+(f-h)*l+(p-h)*u+(h-f-p+g)*l*u}function cr(i,e,t,n){for(var r=0,s=.5,a=1,o=0;o<t;o++)r+=s*Qp(i*a,e*a,8*a,n+o*17),s*=.5,a*=2;return r}function li(i,e,t){return i+(e-i)*t}function jc(i){return i<0?0:i>1?1:i}function lr(i){return[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255]}function iM(i,e){e=e||{};for(var t=new Uint8ClampedArray(yt*yt*4),n=new Float32Array(yt*yt),r=e.emissive?new Uint8ClampedArray(yt*yt*4):null,s=new Uint8ClampedArray(yt*yt*4),a=0;a<yt;a++)for(var o=0;o<yt;o++){var l=i(o/yt,a/yt,o,a),u=a*yt+o,c=u*4;t[c]=l.c[0]*255,t[c+1]=l.c[1]*255,t[c+2]=l.c[2]*255,t[c+3]=255,n[u]=l.h;var h=(l.r===void 0?.85:l.r)*255;if(s[c]=h,s[c+1]=h,s[c+2]=h,s[c+3]=255,r){var f=l.e||[0,0,0];r[c]=f[0]*255,r[c+1]=f[1]*255,r[c+2]=f[2]*255,r[c+3]=255}}return{map:Yc(t,!0),normalMap:Yc(rM(n,e.bump||3),!1),roughnessMap:Yc(s,!1),emissiveMap:r?Yc(r,!0):null}}function rM(i,e){for(var t=new Uint8ClampedArray(yt*yt*4),n=0;n<yt;n++)for(var r=0;r<yt;r++){var s=i[n*yt+(r+yt-1)%yt],a=i[n*yt+(r+1)%yt],o=i[(n+yt-1)%yt*yt+r],l=i[(n+1)%yt*yt+r],u=(s-a)*e,c=(o-l)*e,h=1,f=Math.sqrt(u*u+c*c+h*h),p=(n*yt+r)*4;t[p]=(u/f*.5+.5)*255,t[p+1]=(c/f*.5+.5)*255,t[p+2]=(h/f*.5+.5)*255,t[p+3]=255}return t}function Yc(i,e){var t;if(typeof document!="undefined"){var n=document.createElement("canvas");n.width=yt,n.height=yt,n.getContext("2d").putImageData(new ImageData(i,yt,yt),0,0),t=new qs(n)}else t=new Qi(i,yt,yt);return t.wrapS=t.wrapT=ai,t.colorSpace=e?kt:Jn,t.anisotropy=8,t.magFilter=zt,t.needsUpdate=!0,t}function sM(i,e,t,n){var r=lr(i),s=lr(e),a=lr(t);return function(o,l){var u=8,c=Math.floor(l*u),h=c%2?.5:0,f=o*4+h,p=Math.floor(f),g=f-p,y=l*u-c,v=Math.min(g,1-g)*4*.5,m=Math.min(y,1-y)*.5,_=Math.min(v,m*2),L=cr(o*8,l*8,4,n),E=Jc(p&3,c,n),C=cr(o*24,l*24,2,n+5)>.72?.25:0;if(_<.045){var P=.8+L*.4;return{c:[a[0]*P,a[1]*P,a[2]*P],h:.1+L*.1,r:.95}}var U=jc(E*.6+L*.5),M=.8+L*.35-C;return{c:[li(s[0],r[0],U)*M,li(s[1],r[1],U)*M,li(s[2],r[2],U)*M],h:.6+L*.3-C+Math.min(_,.12)*2,r:.8+L*.15}}}function aM(i,e,t){var n=lr(i),r=lr(e);return function(s,a){var o=s*3,l=a*4+Math.floor(s*3)%2*.5,u=o-Math.floor(o),c=l-Math.floor(l),h=Jc(Math.floor(o)%3,Math.floor(l)%4,t),f=Math.min(u,1-u,(c<.5?c:1-c)*1.5),p=cr(s*6,a*6,5,t);if(f<.035)return{c:[r[0]*.5,r[1]*.5,r[2]*.5],h:.1,r:.95};var g=jc(p*.8+h*.4),y=.75+p*.4;return{c:[li(r[0],n[0],g)*y,li(r[1],n[1],g)*y,li(r[2],n[2],g)*y],h:.5+p*.5,r:.9}}}function $c(i,e,t){var n=lr(i),r=lr(e);return function(s,a,o,l){var u=s*2%1,c=a*2%1,h=Math.min(u,1-u,c,1-c)<.012,f=[[.06,.06],[.94,.06],[.06,.94],[.94,.94]].some(function(v){var m=u-v[0],_=c-v[1];return m*m+_*_<9e-4}),p=cr(s*6,a*16,4,t),g=Qp(s*90,a*4,90,t+3)>.9?.15:0,y=.75+p*.35+g;return h?{c:[r[0]*.4,r[1]*.4,r[2]*.4],h:.1,r:.6}:f?{c:[n[0]*1.2,n[1]*1.2,n[2]*1.2],h:1,r:.35}:{c:[li(r[0],n[0],p)*y,li(r[1],n[1],p)*y,li(r[2],n[2],p)*y],h:.5+p*.1,r:.45+p*.2}}}function oM(i){var e=$c(5001824,1974568,i);return function(t,n,r,s){var a=e(t,n,r,s),o=Math.abs(n-.5)<.025&&t*4%1>.15&&t*4%1<.85,l=Math.abs(n-.15)<.04&&Math.abs(t*2%1-.5)<.12;return o?{c:[.2,.7,.8],h:.3,r:.3,e:[.15,.85,1]}:l?{c:[.9,.7,.3],h:.8,r:.3,e:[1,.6,.15]}:(a.e=[0,0,0],a)}}function Wh(i){return function(e,t){var n=cr(e*5,t*5,5,i),r=1-Math.abs(cr(e*4,t*4,4,i+9)-.5)*2,s=r>.9?jc((r-.9)*10):0,a=.35+n*.5,o=[.32*a+s*.9,.12*a+s*.35,.08*a];return{c:o,h:n-s*.4,r:.9-s*.5,e:[s*1,s*.35,s*.05]}}}function Vh(i){var e=$c(6975352,2895412,31),t=i==="red"?[.9,.12,.08]:i==="blue"?[.15,.35,1]:null;return function(n,r,s,a){var o=e(n,r,s,a),l=r>.88&&Math.floor(n*16+r*16)%2===0;return r>.88?{c:l?[.85,.65,.1]:[.08,.08,.08],h:.6,r:.6,e:[0,0,0]}:Math.abs(n-.5)<.012?{c:[.05,.05,.05],h:0,r:.8,e:[0,0,0]}:t&&Math.abs(r-.45)<.05?{c:t,h:.7,r:.3,e:[t[0]*.8,t[1]*.8,t[2]*.8]}:(o.e=[0,0,0],o)}}function jp(i){var e=$c(5922664,2500654,41);return function(t,n,r,s){var a=e(t,n,r,s),o=Math.abs(t-.5)<.18&&Math.abs(n-.5)<.26;if(o){var l=Math.abs(t-.5)<.04&&(i?n>.5&&n<.72:n>.28&&n<.5),u=Math.abs(t-.5)<.08&&Math.abs(n-(i?.3:.7))<.04,c=i?[.2,1,.3]:[1,.15,.1];return u?{c,h:.9,r:.2,e:c}:l?{c:[.8,.8,.75],h:1,r:.3,e:[0,0,0]}:{c:[.06,.07,.06],h:.2,r:.7,e:[0,0,0]}}return a.e=[0,0,0],a}}function Zc(i,e,t,n){var r=lr(i),s=lr(e);return function(a,o){var l=a*4%1,u=o*4%1,c=Math.min(l,1-l,u,1-u),h=Jc(Math.floor(a*4),Math.floor(o*4),t),f=cr(a*8,o*8,4,t);if(c<.03)return{c:[s[0]*.4,s[1]*.4,s[2]*.4],h:.05,r:.95};if(n&&(l*10%1<.3||u*10%1<.3)&&c>.08)return{c:[s[0]*.3,s[1]*.3,s[2]*.3],h:.1,r:.6};var p=jc(h*.5+f*.6),g=.7+f*.4;return{c:[li(s[0],r[0],p)*g,li(s[1],r[1],p)*g,li(s[2],r[2],p)*g],h:.5+f*.3,r:n?.5:.8}}}function lM(i){var e=Wh(i);return function(t,n){var r=e(t,n),s=cr(t*3,n*3,3,i+20)>.66;if(s){var a=cr(t*10,n*10,3,i+21);return{c:[1,.45+a*.3,.08],h:0,r:.4,e:[1.2,.45+a*.3,.05]}}return r}}function cM(i){return Zc(2762274,1183760,i,!1)}var $p={};function Rn(i,e,t){return $p[i]||($p[i]=iM(e,t))}function Xh(i){switch(i){case 1:return Rn("brick",sM(9060914,4857364,2759960,1),{bump:4});case 2:return Rn("stone",aM(9078136,4867644,2),{bump:4});case 3:return Rn("metal",$c(5922664,2500654,3),{bump:3});case 4:return Rn("tech",oM(4),{emissive:!0,bump:3});case 5:return Rn("hell",Wh(5),{emissive:!0,bump:5});case 6:return Rn("door",Vh(null),{emissive:!0,bump:3});case 7:return Rn("doorRed",Vh("red"),{emissive:!0,bump:3});case 8:return Rn("doorBlue",Vh("blue"),{emissive:!0,bump:3});case 9:return Rn("switchOff",jp(!1),{emissive:!0,bump:3});case 10:return Rn("switchOn",jp(!0),{emissive:!0,bump:3})}return Xh(1)}var Kc=null;function em(){if(Kc)return Kc;var i=128,e=new Uint8ClampedArray(i*i*4),t=44;function n(l,u,c,h,f,p){if(!(l<0||u<0||l>=i||u>=i)){var g=(u*i+l)*4;e[g]=c,e[g+1]=h,e[g+2]=f,e[g+3]=Math.max(e[g+3],p)}}for(var r=10;r<118;r++)t+=r%7===0?1:r%9===0?-1:0,n(t-1,r,200,190,170,150),n(t+2,r,200,190,170,150),n(t,r,12,10,8,255),n(t+1,r,12,10,8,255);for(var s=0;s<16;s++)n(t+3+s,60+s,12,10,8,255),n(t+3+s,59+s,200,190,170,140);var a;if(typeof document!="undefined"){var o=document.createElement("canvas");o.width=o.height=i,o.getContext("2d").putImageData(new ImageData(e,i,i),0,0),a=new qs(o)}else a=new Qi(e,i,i);return a.colorSpace=kt,a.magFilter=zt,a.needsUpdate=!0,Kc=new en({map:a,transparent:!0,alphaTest:.3,depthWrite:!1,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1}),Kc}function tm(i){switch(i){case"tech":return Rn("fTech",Zc(4869718,1842722,11,!0),{bump:3});case"hell":return Rn("fHell",lM(12),{emissive:!0,bump:4});case"ceilTech":return Rn("cTech",Zc(3817030,1316378,13,!0),{bump:2});case"ceilHell":return Rn("cHell",Wh(14),{emissive:!0,bump:4});case"ceilDark":return Rn("cDark",cM(15),{bump:2});default:return Rn("fSlab",Zc(6972506,3025444,10,!1),{bump:3})}}function Bi(i,e){var t=new en(Object.assign({map:i.map,normalMap:i.normalMap,roughnessMap:i.roughnessMap,roughness:1,metalness:.05},e||{}));return i.emissiveMap&&(t.emissiveMap=i.emissiveMap,t.emissive=new Be(16777215),t.emissiveIntensity=1.6),t}function eu(){this.groups={}}eu.prototype.quad=function(i,e,t,n,r,s,a){var o=this.groups[i]||(this.groups[i]={pos:[],nor:[],uv:[]});[e,t,n,e,n,r].forEach(function(l){o.pos.push(l[0],l[1],l[2]),o.nor.push(s[0],s[1],s[2])}),[a[0],a[1],a[2],a[0],a[2],a[3]].forEach(function(l){o.uv.push(l[0],l[1])})};eu.prototype.meshes=function(i){var e=[];for(var t in this.groups){var n=this.groups[t],r=new Vt;r.setAttribute("position",new xt(n.pos,3)),r.setAttribute("normal",new xt(n.nor,3)),r.setAttribute("uv",new xt(n.uv,2));var s=new Ue(r,i(t));s.name=t,e.push(s)}return e};function Qc(i,e,t,n,r,s,a){if(!(a-s<.001)){var o,l,u,c,h;r==="E"?(o=[t+1,n+1],l=[t+1,n],u=[-1,0,0],c=n+1,h=n):r==="W"?(o=[t,n],l=[t,n+1],u=[1,0,0],c=n,h=n+1):r==="S"?(o=[t,n+1],l=[t+1,n+1],u=[0,0,-1],c=t,h=t+1):(o=[t+1,n],l=[t,n],u=[0,0,1],c=t+1,h=t),i.quad(e,[o[0],s,o[1]],[l[0],s,l[1]],[l[0],a,l[1]],[o[0],a,o[1]],u,[[c,s],[h,s],[h,a],[c,a]])}}var qh={E:[1,0],W:[-1,0],S:[0,1],N:[0,-1]};function Ao(i,e,t,n,r,s,a,o){i.quad(e,[t,a,r],[t,a,o],[s,a,o],[s,a,r],[0,1,0],[[t,r],[t,o],[s,o],[s,r]]),i.quad(e,[t,n,o],[t,n,r],[s,n,r],[s,n,o],[0,-1,0],[[t,o],[t,r],[s,r],[s,o]]),i.quad(e,[t,n,o],[s,n,o],[s,a,o],[t,a,o],[0,0,1],[[t,n],[s,n],[s,a],[t,a]]),i.quad(e,[s,n,r],[t,n,r],[t,a,r],[s,a,r],[0,0,-1],[[s,n],[t,n],[t,a],[s,a]]),i.quad(e,[s,n,o],[s,n,r],[s,a,r],[s,a,o],[1,0,0],[[o,n],[r,n],[r,a],[o,a]]),i.quad(e,[t,n,r],[t,n,o],[t,a,o],[t,a,r],[-1,0,0],[[r,n],[o,n],[o,a],[r,a]])}function Yh(i,e,t,n,r,s,a,o){r==="E"?Ao(i,e,t+1-o,s,n,t+1,s+a,n+1):r==="W"?Ao(i,e,t,s,n,t+o,s+a,n+1):r==="S"?Ao(i,e,t,s,n+1-o,t+1,s+a,n+1):Ao(i,e,t,s,n,t+1,s+a,n+o)}function nm(i){for(var e={},t=0;t<i.cells.length;t++){var n=i.cells[t];n>=1&&n<=5&&(e[n]=(e[n]||0)+1)}var r=1,s=-1;for(var a in e)e[a]>s&&(s=e[a],r=+a);return r}function uM(i,e,t){var n=nm(i);return[[1,0],[-1,0],[0,1],[0,-1]].forEach(function(r){var s=ii(i,e+r[0],t+r[1]);s>=1&&s<=5&&(n=s)}),n}function im(i,e){function t(oe){return e&&e.texture("tex:"+oe)||Xh(oe)}function n(oe){return e&&e.texture("tex:"+oe)||tm(oe)}var r=i.W,s=i.L,a=new eu,o=new at,l="wall"+nm(r),u={};r.lifts.forEach(function(oe){u[oe.x+","+oe.z]=oe});var c=[];function h(oe,G){var Z=ii(r,oe,G);return Z===0||!!fi[Z]}function f(oe,G){var Z=u[oe+","+G];return Z?Z.bottom:dn(r,oe,G)}for(var p=0;p<r.mh;p++)for(var g=0;g<r.mw;g++)if(h(g,p)){var y=f(g,p),v=Ri(r,g,p);u[g+","+p]||a.quad("floor",[g,y,p],[g,y,p+1],[g+1,y,p+1],[g+1,y,p],[0,1,0],[[g,p],[g,p+1],[g+1,p+1],[g+1,p]]),a.quad("ceil",[g,v,p],[g+1,v,p],[g+1,v,p+1],[g,v,p+1],[0,-1,0],[[g,p],[g+1,p],[g+1,p+1],[g,p+1]]);for(var m in qh){var _=g+qh[m][0],L=p+qh[m][1],E=ii(r,_,L);if(!h(_,L)){if(E===9){var C={x:_,z:L,faces:new eu,dir:m};Qc(C.faces,"sw",g,p,m,y,v),c.push(C)}else Qc(a,"wall"+(E>=1&&E<=5?E:1),g,p,m,y,v);fi[ii(r,g,p)]||(Yh(a,"trim",g,p,m,y,.09,.035),v-y>2&&Yh(a,"trim",g,p,m,v-.12,.08,.05));continue}var P=f(_,L),U=Ri(r,_,L);P>y&&(Qc(a,l,g,p,m,y,Math.min(P,v)),P-y>.3&&Yh(a,"trim",g,p,m,P-.07,.07,.06)),U<v&&Qc(a,l,g,p,m,Math.max(U,y),v)}}for(var M=0;M<r.mh;M++)for(var x=0;x<r.mw;x++)if(!(M%3!==1||ii(r,x,M)!==0)){var w=Ri(r,x,M);w-dn(r,x,M)<2.6||Ao(a,"beam",x,w-.2,M+.38,x+1,w,M+.62)}var A={};function S(oe){return A[oe]?A[oe]:oe==="floor"?A[oe]=Bi(n(s.floor)):oe==="ceil"?A[oe]=Bi(n(s.ceil)):oe==="trim"?A[oe]=Bi(t(3),{color:10127992,metalness:.6,roughness:.5}):oe==="beam"?A[oe]=Bi(t(3),{color:6969930,metalness:.4}):A[oe]=Bi(t(+oe.slice(4)))}a.meshes(S).forEach(function(oe){oe.receiveShadow=!0,o.add(oe)});var I=Bi(t(9)),D=Bi(t(10));c.forEach(function(oe){oe.faces.meshes(function(){return I}).forEach(function(G){oe.mesh=G,o.add(G)})});var k=[];for(var Y in r.doors){var j=r.doors[Y],se=dn(r,j.x,j.z),ne=Ri(r,j.x,j.z),le=ne-se,ae;if(j.secret){ae=new Ue(new hn(1,le,1),S("wall"+uM(r,j.x,j.z))),Kh(ae.geometry,1,le);var we=em();[[0,.502,0],[Math.PI,-.502,0],[Math.PI/2,0,.502],[-Math.PI/2,0,-.502]].forEach(function(oe){var G=new Ue(new es(.9,Math.min(le,1.9)*.9),we);G.rotation.y=oe[0],G.position.set(oe[2],0,oe[1]),ae.add(G)})}else{var Ee=h(j.x-1,j.z)&&h(j.x+1,j.z),it=Ee?new hn(.22,le,1):new hn(1,le,.22);ae=new Ue(it,Bi(t(j.locked==="red"?7:j.locked==="blue"?8:6))),Kh(ae.geometry,1,le)}ae.position.set(j.x+.5,se+le/2,j.z+.5),ae.userData={door:j,baseY:se+le/2,h:le},ae.castShadow=!0,o.add(ae),k.push(ae)}var ge=r.lifts.map(function(oe){var G=Math.max(.2,oe.top-oe.bottom+.2),Z=new Ue(new hn(.98,G,.98),Bi(t(4)));return Kh(Z.geometry,1,G),Z.userData={lift:oe,h:G},o.add(Z),Z});return{group:o,update:function(){k.forEach(function(oe){var G=oe.userData.door;oe.position.y=oe.userData.baseY+G.open*oe.userData.h*.98,oe.visible=G.open<.99}),ge.forEach(function(oe){var G=oe.userData.lift;oe.position.set(G.x+.5,G.pos-oe.userData.h/2,G.z+.5)}),c.forEach(function(oe){oe.mesh&&(oe.mesh.material=r.cells[oe.z*r.mw+oe.x]===10?D:I)})}}}function Kh(i,e,t){for(var n=i.attributes.uv,r=0;r<n.count;r++){var s=Math.floor(r/4),a=(s<4,e),o=s===2||s===3?e:t;n.setXY(r,n.getX(r)*a,n.getY(r)*o)}n.needsUpdate=!0}var Ro=new J;function ci(i,e,t,n,r,s){let a=2*Math.PI*r/4,o=Math.max(s-2*r,0),l=Math.PI/4;Ro.copy(e),Ro[n]=0,Ro.normalize();let u=.5*a/(a+o),c=1-Ro.angleTo(i)/l;return Math.sign(Ro[t])===1?c*u:o/(a+o)+u+u*(1-c)}var tu=class i extends hn{constructor(e=1,t=1,n=1,r=2,s=.1){let a=r*2+1;if(s=Math.min(e/2,t/2,n/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:r,radius:s},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new J,u=new J,c=new J(e,t,n).divideScalar(2).subScalar(s),h=this.attributes.position.array,f=this.attributes.normal.array,p=this.attributes.uv.array,g=h.length/6,y=new J,v=.5/a;for(let m=0,_=0;m<h.length;m+=3,_+=2)switch(l.fromArray(h,m),u.copy(l),u.x-=Math.sign(u.x)*v,u.y-=Math.sign(u.y)*v,u.z-=Math.sign(u.z)*v,u.normalize(),h[m+0]=c.x*Math.sign(l.x)+u.x*s,h[m+1]=c.y*Math.sign(l.y)+u.y*s,h[m+2]=c.z*Math.sign(l.z)+u.z*s,f[m+0]=u.x,f[m+1]=u.y,f[m+2]=u.z,Math.floor(m/g)){case 0:y.set(1,0,0),p[_+0]=ci(y,u,"z","y",s,n),p[_+1]=1-ci(y,u,"y","z",s,t);break;case 1:y.set(-1,0,0),p[_+0]=1-ci(y,u,"z","y",s,n),p[_+1]=1-ci(y,u,"y","z",s,t);break;case 2:y.set(0,1,0),p[_+0]=1-ci(y,u,"x","z",s,e),p[_+1]=ci(y,u,"z","x",s,n);break;case 3:y.set(0,-1,0),p[_+0]=1-ci(y,u,"x","z",s,e),p[_+1]=1-ci(y,u,"z","x",s,n);break;case 4:y.set(0,0,1),p[_+0]=1-ci(y,u,"x","y",s,e),p[_+1]=1-ci(y,u,"y","x",s,t);break;case 5:y.set(0,0,-1),p[_+0]=ci(y,u,"x","y",s,e),p[_+1]=1-ci(y,u,"y","x",s,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function Zh(i,e){if(e===dh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ra||e===yo){let t=i.getIndex();if(t===null){let s=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)s.push(o);i.setIndex(s),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,r=[];if(e===ra)for(let s=1;s<=n;s++)r.push(t.getX(0)),r.push(t.getX(s)),r.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(r.push(t.getX(s)),r.push(t.getX(s+1)),r.push(t.getX(s+2))):(r.push(t.getX(s+2)),r.push(t.getX(s+1)),r.push(t.getX(s)));return r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(r),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function nu(i){let e=new Map,t=new Map,n=i.clone();return rm(i,n,function(r,s){e.set(s,r),t.set(r,s)}),n.traverse(function(r){if(!r.isSkinnedMesh)return;let s=r,a=e.get(r),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function rm(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)rm(i.children[n],e.children[n],t)}var iu=class extends Di{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new nf(t)}),this.register(function(t){return new rf(t)}),this.register(function(t){return new df(t)}),this.register(function(t){return new pf(t)}),this.register(function(t){return new mf(t)}),this.register(function(t){return new af(t)}),this.register(function(t){return new of(t)}),this.register(function(t){return new lf(t)}),this.register(function(t){return new cf(t)}),this.register(function(t){return new tf(t)}),this.register(function(t){return new uf(t)}),this.register(function(t){return new sf(t)}),this.register(function(t){return new ff(t)}),this.register(function(t){return new hf(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new ru(t,ft.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new ru(t,ft.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new gf(t)})}load(e,t,n,r){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let u=sr.extractUrlBase(e);a=sr.resolveURL(u,this.path)}else a=sr.extractUrlBase(e);this.manager.itemStart(e);let o=function(u){r?r(u):console.error(u),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Zs(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(u){try{s.parse(u,a,function(c){t(c),s.manager.itemEnd(e)},o)}catch(c){o(c)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s,a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===cm){try{a[ft.KHR_BINARY_GLTF]=new vf(e)}catch(h){r&&r(h);return}s=JSON.parse(a[ft.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let u=new Tf(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){let h=this.pluginCallbacks[c](u);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let c=0;c<s.extensionsUsed.length;++c){let h=s.extensionsUsed[c],f=s.extensionsRequired||[];switch(h){case ft.KHR_MATERIALS_UNLIT:a[h]=new ef;break;case ft.KHR_DRACO_MESH_COMPRESSION:a[h]=new _f(s,this.dracoLoader);break;case ft.KHR_TEXTURE_TRANSFORM:a[h]=new xf;break;case ft.KHR_MESH_QUANTIZATION:a[h]=new yf;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}u.setExtensions(a),u.setPlugins(o),u.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}};function fM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function sn(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var ft={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Qh=class{constructor(e){this.parser=e,this.name=ft.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,r=t.cache.get(n);if(r)return r;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],u,c=new Be(16777215);l.color!==void 0&&c.setRGB(l.color[0],l.color[1],l.color[2],Ln);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":u=new is(c),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new Yn(c),u.distance=h;break;case"spot":u=new to(c),u.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,u.angle=l.spot.outerConeAngle,u.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return u.position.set(0,0,0),ki(u,l),l.intensity!==void 0&&(u.intensity=l.intensity),u.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(u),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},ef=class{constructor(){this.name=ft.KHR_MATERIALS_UNLIT}getMaterialType(){return wn}extendParams(e,t,n){let r=[];e.color=new Be(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Ln),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,kt))}return Promise.all(r)}},tf=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},nf=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Hn:null}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ye(s,s)}return Promise.all(r)}},rf=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_DISPERSION}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Hn:null}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},sf=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Hn:null}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(r)}},af=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SHEEN}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Hn:null}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(t.sheenColor=new Be(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],Ln)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,kt)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(r)}},of=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Hn:null}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(r)}},lf=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_VOLUME}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Hn:null}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return t.attenuationColor=new Be().setRGB(s[0],s[1],s[2],Ln),Promise.all(r)}},cf=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IOR}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Hn:null}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},uf=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SPECULAR}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Hn:null}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return t.specularColor=new Be().setRGB(s[0],s[1],s[2],Ln),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,kt)),Promise.all(r)}},hf=class{constructor(e){this.parser=e,this.name=ft.EXT_MATERIALS_BUMP}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Hn:null}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(r)}},ff=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Hn:null}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(r)}},df=class{constructor(e){this.parser=e,this.name=ft.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},pf=class{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=r.images[a.source],l=n.textureLoader;if(o.uri){let u=n.options.manager.getHandler(o.uri);u!==null&&(l=u)}return n.loadTextureImage(e,a.source,l)}},mf=class{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=r.images[a.source],l=n.textureLoader;if(o.uri){let u=n.options.manager.getHandler(o.uri);u!==null&&(l=u)}return n.loadTextureImage(e,a.source,l)}},ru=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let l=r.byteOffset||0,u=r.byteLength||0,c=r.count,h=r.byteStride,f=new Uint8Array(o,l,u);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(c,h,f,r.mode,r.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(c*h);return a.decodeGltfBuffer(new Uint8Array(p),c,h,f,r.mode,r.filter),p})})}else return null}},gf=class{constructor(e){this.name=ft.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let u of r.primitives)if(u.mode!==ui.TRIANGLES&&u.mode!==ui.TRIANGLE_STRIP&&u.mode!==ui.TRIANGLE_FAN&&u.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let u in a)o.push(this.parser.getDependency("accessor",a[u]).then(c=>(l[u]=c,l[u])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(u=>{let c=u.pop(),h=c.isGroup?c.children:[c],f=u[0].count,p=[];for(let g of h){let y=new rt,v=new J,m=new En,_=new J(1,1,1),L=new jr(g.geometry,g.material,f);for(let C=0;C<f;C++)l.TRANSLATION&&v.fromBufferAttribute(l.TRANSLATION,C),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,C),l.SCALE&&_.fromBufferAttribute(l.SCALE,C),L.setMatrixAt(C,y.compose(v,m,_));let E=null;for(let C in l)if(C==="_COLOR_0"){let P=l[C];L.instanceColor=new er(P.array,P.itemSize,P.normalized)}else if(C!=="TRANSLATION"&&C!=="ROTATION"&&C!=="SCALE"){if(E===null){let U=L.geometry;E=new Vt,E.name=U.name;for(let M in U.attributes)E.setAttribute(M,U.attributes[M]);for(let M in U.morphAttributes)E.morphAttributes[M]=U.morphAttributes[M];U.index!==null&&E.setIndex(U.index),E.morphTargetsRelative=U.morphTargetsRelative;for(let M of U.groups)E.addGroup(M.start,M.count,M.materialIndex);U.boundingBox!==null&&(E.boundingBox=U.boundingBox.clone()),U.boundingSphere!==null&&(E.boundingSphere=U.boundingSphere.clone()),E.drawRange.start=U.drawRange.start,E.drawRange.count=U.drawRange.count,E.userData=Object.assign({},U.userData),L.geometry=E}let P=l[C];E.setAttribute(C,new er(P.array,P.itemSize,P.normalized))}Gt.prototype.copy.call(L,g),this.parser.assignFinalMaterial(L),p.push(L)}return c.isGroup?(c.clear(),c.add(...p),c):p[0]}))}},cm="glTF",Co=12,sm={JSON:1313821514,BIN:5130562},vf=class{constructor(e){this.name=ft.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Co),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==cm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-Co,s=new DataView(e,Co),a=0;for(;a<r;){let o=s.getUint32(a,!0);a+=4;let l=s.getUint32(a,!0);if(a+=4,l===sm.JSON){let u=new Uint8Array(e,Co+a,o);this.content=n.decode(u)}else if(l===sm.BIN){let u=Co+a;this.body=e.slice(u,u+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},_f=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ft.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},u={};for(let c in a){let h=Sf[c]||c.toLowerCase();o[h]=a[c]}for(let c in e.attributes){let h=Sf[c]||c.toLowerCase();if(a[c]!==void 0){let f=n.accessors[e.attributes[c]],p=ma[f.componentType];u[h]=p.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(c){return new Promise(function(h,f){r.decodeDracoFile(c,function(p){for(let g in p.attributes){let y=p.attributes[g],v=l[g];v!==void 0&&(y.normalized=v)}h(p)},o,u,Ln,f)})})}},xf=class{constructor(){this.name=ft.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),r=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*r,e.offset.x,-e.repeat.x*r,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},yf=class{constructor(){this.name=ft.KHR_MESH_QUANTIZATION}},su=class extends Ni{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,u=o*3,c=r-t,h=(n-t)/c,f=h*h,p=f*h,g=e*u,y=g-u,v=-2*p+3*f,m=p-f,_=1-v,L=m-f+h;for(let E=0;E!==o;E++){let C=a[y+E+o],P=a[y+E+l]*c,U=a[g+E+o],M=a[g+E]*c;s[E]=_*C+L*P+v*U+m*M}return s}},dM=new En,Mf=class extends su{interpolate_(e,t,n,r){let s=super.interpolate_(e,t,n,r);return dM.fromArray(s).normalize().toArray(s),s}},ui={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ma={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},am={9728:zt,9729:rn,9984:ql,9985:ta,9986:os,9987:Si},om={33071:si,33648:Ds,10497:ai},Jh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Sf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Dr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},pM={CUBICSPLINE:void 0,LINEAR:Kr,STEP:Yr},jh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function mM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new en({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Oi})),i.DefaultMaterial}function us(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ki(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function gM(i,e,t){let n=!1,r=!1,s=!1;for(let u=0,c=e.length;u<c;u++){let h=e[u];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);let a=[],o=[],l=[];for(let u=0,c=e.length;u<c;u++){let h=e[u];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(f)}if(r){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(f)}if(s){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(u){let c=u[0],h=u[1],f=u[2];return n&&(i.morphAttributes.position=c),r&&(i.morphAttributes.normal=h),s&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function vM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function _M(i){let e,t=i.extensions&&i.extensions[ft.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+$h(t.attributes):e=i.indices+":"+$h(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+$h(i.targets[n]);return e}function $h(i){let e="",t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function bf(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function xM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var yM=new rt,Tf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new fM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,a=-1;if(typeof navigator!="undefined"&&typeof navigator.userAgent!="undefined"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);r=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&r<17||s&&a<98?this.textureLoader=new ns(this.options.manager):this.textureLoader=new no(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Zs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:n,userData:{}};return us(s,o,r),ki(o,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){let a=t[r].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){let a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),s=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[u,c]of a.children.entries())s(c,o.children[u])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ft.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(s,a){n.load(sr.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let a=Jh[r.type],o=ma[r.componentType],l=r.normalized===!0,u=new o(r.count*a);return Promise.resolve(new Zt(u,a,l))}let s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],l=Jh[r.type],u=ma[r.componentType],c=u.BYTES_PER_ELEMENT,h=c*l,f=r.byteOffset||0,p=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0,y,v;if(p&&p!==h){let m=Math.floor(f/p),_="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+m+":"+r.count,L=t.cache.get(_);L||(y=new u(o,m*p,r.count*p/c),L=new ks(y,p/c),t.cache.add(_,L)),v=new zs(L,l,f%p/c,g)}else o===null?y=new u(r.count*l):y=new u(o,f,r.count*l),v=new Zt(y,l,g);if(r.sparse!==void 0){let m=Jh.SCALAR,_=ma[r.sparse.indices.componentType],L=r.sparse.indices.byteOffset||0,E=r.sparse.values.byteOffset||0,C=new _(a[1],L,r.sparse.count*m),P=new u(a[2],E,r.sparse.count*l);o!==null&&(v=new Zt(v.array.slice(),v.itemSize,v.normalized)),v.normalized=!1;for(let U=0,M=C.length;U<M;U++){let x=C[U];if(v.setX(x,P[U*l]),l>=2&&v.setY(x,P[U*l+1]),l>=3&&v.setZ(x,P[U*l+2]),l>=4&&v.setW(x,P[U*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}v.normalized=g}return v})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let r=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let u=this.loadImageSource(t,n).then(function(c){c.flipY=!1,c.name=a.name||o.name||"",c.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(c.name=o.uri);let f=(s.samplers||{})[a.sampler]||{};return c.magFilter=am[f.magFilter]||rn,c.minFilter=am[f.minFilter]||Si,c.wrapS=om[f.wrapS]||ai,c.wrapT=om[f.wrapT]||ai,c.generateMipmaps=!c.isCompressedTexture&&c.minFilter!==zt&&c.minFilter!==rn,r.associations.set(c,{textures:e}),c}).catch(function(){return null});return this.textureCache[l]=u,u}loadImageSource(e,t){let n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=r.images[e],o=self.URL||self.webkitURL,l=a.uri||"",u=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){u=!0;let f=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let c=Promise.resolve(l).then(function(h){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(y){let v=new pn(y);v.needsUpdate=!0,f(v)}),t.load(sr.resolveURL(h,s.path),g,void 0,p)})}).then(function(h){return u===!0&&o.revokeObjectURL(l),ki(h,a),h.userData.mimeType=a.mimeType||xM(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=c,c}assignTexture(e,t,n,r){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[ft.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[ft.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=s.associations.get(a);a=s.extensions[ft.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Xs,Dn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Ws,Dn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(r||s||a){let o="ClonedMaterial:"+n.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return en}loadMaterial(e){let t=this,n=this.json,r=this.extensions,s=n.materials[e],a,o={},l=s.extensions||{},u=[];if(l[ft.KHR_MATERIALS_UNLIT]){let h=r[ft.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),u.push(h.extendParams(o,s,t))}else{let h=s.pbrMetallicRoughness||{};if(o.color=new Be(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Ln),o.opacity=f[3]}h.baseColorTexture!==void 0&&u.push(t.assignTexture(o,"map",h.baseColorTexture,kt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),u.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=kn);let c=s.alphaMode||jh.OPAQUE;if(c===jh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,c===jh.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==wn&&(u.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Ye(1,1),s.normalTexture.scale!==void 0)){let h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&a!==wn&&(u.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==wn){let h=s.emissiveFactor;o.emissive=new Be().setRGB(h[0],h[1],h[2],Ln)}return s.emissiveTexture!==void 0&&a!==wn&&u.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,kt)),Promise.all(u).then(function(){let h=new a(o);return s.name&&(h.name=s.name),ki(h,s),t.associations.set(h,{materials:e}),s.extensions&&us(r,h,s),h})}createUniqueName(e){let t=Dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function s(o){return n[ft.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return lm(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let u=e[o],c=_M(u),h=r[c];if(h)a.push(h.promise);else{let f;u.extensions&&u.extensions[ft.KHR_DRACO_MESH_COMPRESSION]?f=s(u):f=lm(new Vt,u,t),u.mode===ui.TRIANGLE_STRIP?f=f.then(p=>Zh(p,yo)):u.mode===ui.TRIANGLE_FAN&&(f=f.then(p=>Zh(p,ra))),r[c]={primitive:u,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,u=a.length;l<u;l++){let c=a[l].material===void 0?mM(this.cache):this.getDependency("material",a[l].material);o.push(c)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let u=l.slice(0,l.length-1),c=l[l.length-1],h=[];for(let p=0,g=c.length;p<g;p++){let y=c[p],v=a[p],m,_=u[p];if(v.mode===ui.TRIANGLES||v.mode===ui.TRIANGLE_STRIP||v.mode===ui.TRIANGLE_FAN||v.mode===void 0){let L=s.isSkinnedMesh===!0,E=y.hasAttribute("skinIndex")&&y.hasAttribute("skinWeight");L&&E===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=L&&E?new Va(y,_):new Ue(y,_),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(v.mode===ui.LINES)m=new Xa(y,_);else if(v.mode===ui.LINE_STRIP)m=new $r(y,_);else if(v.mode===ui.LINE_LOOP)m=new qa(y,_);else if(v.mode===ui.POINTS)m=new Qr(y,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+v.mode);Object.keys(m.geometry.morphAttributes).length>0&&vM(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),ki(m,s),v.extensions&&us(r,m,v),t.assignFinalMaterial(m),h.push(m)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return s.extensions&&us(r,h[0],s),h[0];let f=new at;s.extensions&&us(r,f,s),t.associations.set(f,{meshes:e});for(let p=0,g=h.length;p<g;p++)f.add(h[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new nn(vh.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Ui(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ki(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){let s=r.pop(),a=r,o=[],l=[];for(let u=0,c=a.length;u<c;u++){let h=a[u];if(h){o.push(h);let f=new rt;s!==null&&f.fromArray(s.array,u*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new Wa(o,l)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],l=[],u=[],c=[];for(let h=0,f=r.channels.length;h<f;h++){let p=r.channels[h],g=r.samplers[p.sampler],y=p.target,v=y.node,m=r.parameters!==void 0?r.parameters[g.input]:g.input,_=r.parameters!==void 0?r.parameters[g.output]:g.output;y.node!==void 0&&(a.push(this.getDependency("node",v)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",_)),u.push(g),c.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(u),Promise.all(c)]).then(function(h){let f=h[0],p=h[1],g=h[2],y=h[3],v=h[4],m=[];for(let L=0,E=f.length;L<E;L++){let C=f[L],P=p[L],U=g[L],M=y[L],x=v[L];if(C===void 0)continue;C.updateMatrix&&C.updateMatrix();let w=n._createAnimationTracks(C,P,U,M,x);if(w)for(let A=0;A<w.length;A++)m.push(w[A])}let _=new ts(s,void 0,m);return ki(_,r),_})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,u=r.weights.length;l<u;l++)o.morphTargetInfluences[l]=r.weights[l]}),a})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=r.children||[];for(let u=0,c=o.length;u<c;u++)a.push(n.getDependency("node",o[u]));let l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),l]).then(function(u){let c=u[0],h=u[1],f=u[2];f!==null&&c.traverse(function(p){p.isSkinnedMesh&&p.bind(f,yM)});for(let p=0,g=h.length;p<g;p++)c.add(h[p]);if(c.userData.pivot!==void 0&&h.length>0){let p=c.userData.pivot,g=h[0];c.pivot=new J().fromArray(p),c.position.x-=p[0],c.position.y-=p[1],c.position.z-=p[2],g.position.set(0,0,0),delete c.userData.pivot}return c})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],l=r._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(u){return r._getNodeRef(r.cameraCache,s.camera,u)})),r._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){o.push(u)}),this.nodeCache[e]=Promise.all(o).then(function(u){let c;if(s.isBone===!0?c=new Gs:u.length>1?c=new at:u.length===1?c=u[0]:c=new Gt,c!==u[0])for(let h=0,f=u.length;h<f;h++)c.add(u[h]);if(s.name&&(c.userData.name=s.name,c.name=a),ki(c,s),s.extensions&&us(n,c,s),s.matrix!==void 0){let h=new rt;h.fromArray(s.matrix),c.applyMatrix4(h)}else s.translation!==void 0&&c.position.fromArray(s.translation),s.rotation!==void 0&&c.quaternion.fromArray(s.rotation),s.scale!==void 0&&c.scale.fromArray(s.scale);if(!r.associations.has(c))r.associations.set(c,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){let h=r.associations.get(c);r.associations.set(c,{...h})}return r.associations.get(c).nodes=e,c}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,s=new at;n.name&&(s.name=r.createUniqueName(n.name)),ki(s,n),n.extensions&&us(t,s,n);let a=n.nodes||[],o=[];for(let l=0,u=a.length;l<u;l++)o.push(r.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let c=0,h=l.length;c<h;c++){let f=l[c];f.parent!==null?s.add(nu(f)):s.add(f)}let u=c=>{let h=new Map;for(let[f,p]of r.associations)(f instanceof Dn||f instanceof pn)&&h.set(f,p);return c.traverse(f=>{let p=r.associations.get(f);p!=null&&h.set(f,p)}),h};return r.associations=u(s),s})}_createAnimationTracks(e,t,n,r,s){let a=[],o=e.name?e.name:e.uuid,l=[];function u(p){p.morphTargetInfluences&&l.push(p.name?p.name:p.uuid)}Dr[s.path]===Dr.weights?(u(e),e.isGroup&&e.children.forEach(u)):l.push(o);let c;switch(Dr[s.path]){case Dr.weights:c=nr;break;case Dr.rotation:c=ir;break;case Dr.translation:case Dr.scale:c=Rr;break;default:n.itemSize===1?c=nr:c=Rr;break}let h=r.interpolation!==void 0?pM[r.interpolation]:Kr,f=this._getArrayFromAccessor(n);for(let p=0,g=l.length;p<g;p++){let y=new c(l[p]+"."+Dr[s.path],t.array,f,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),a.push(y)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=bf(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let r=this instanceof ir?Mf:su;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function MM(i,e,t){let n=e.attributes,r=new Nn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,u=o.max;if(l!==void 0&&u!==void 0){if(r.set(new J(l[0],l[1],l[2]),new J(u[0],u[1],u[2])),o.normalized){let c=bf(ma[o.componentType]);r.min.multiplyScalar(c),r.max.multiplyScalar(c)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new J,l=new J;for(let u=0,c=s.length;u<c;u++){let h=s[u];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){let y=bf(ma[f.componentType]);l.multiplyScalar(y)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}i.boundingBox=r;let a=new Fn;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=a}function lm(i,e,t){let n=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=Sf[a]||a.toLowerCase();o in i.attributes||r.push(s(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});r.push(a)}return st.workingColorSpace!==Ln&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${st.workingColorSpace}" not supported.`),ki(i,e),MM(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?gM(i,e.targets,t):i})}var au=2,um={imp:["imp"],gnasher:["gnasher"],knight:["knight","emberknight","ember_knight"],riley:["riley","rileyhologram"],fist:["fist","fists","fpfist","weaponfist"],pistol:["pistol","fppistol","weaponpistol"],shotgun:["shotgun","fpshotgun","weaponshotgun","pumpshotgun","doublebarrelshotgun"],chaingun:["chaingun","fpchaingun","weaponchaingun","minigun"],rocket:["rocketlauncher","rocket","fprocketlauncher","weaponrocketlauncher","launcher"],crate:["crate","woodencrate","crateintact"],barrel:["barrel","explosivebarrel","toxicbarrel"],torch:["torch","standingtorch"],lamp:["lamp","ceilinglamp","cagedlamp","ceilinglampintact","lampintact"],lampBroken:["lampbroken","ceilinglampbroken","brokenlamp"],pipeStraight:["pipestraight","pipe"],pipeElbow:["pipeelbow","elbow"],pipeValve:["pipevalve","valve"],chain:["chain","hangingchain"],"pickup:h":["medkitsmall","stimpack","smallmedkit","stim"],"pickup:+":["medkitlarge","medkit","largemedkit","medikit"],"pickup:b":["bulletclip","clip","ammoclip","bullets"],"pickup:a":["shellbox","shells","boxofshells"],"pickup:k":["rocketbox","rockets","boxofrockets"],"pickup:A":["armor","armour","armorvest","armourvest","vest"],"pickup:r":["keycardred","redkeycard","keyred"],"pickup:u":["keycardblue","bluekeycard","keyblue"],"pickup:P":["phoenixorb","orb"],"pickup:2":["shotgunpickup","pickupshotgun"],"pickup:3":["chaingunpickup","pickupchaingun"],"pickup:4":["rocketlauncherpickup","pickuprocketlauncher"],"tex:1":["brick"],"tex:2":["stone"],"tex:3":["metalpanel","metal"],"tex:4":["techpanel","tech"],"tex:5":["hellrock","hell"],"tex:6":["door","doorplain"],"tex:7":["doorred","doorredstripe","reddoor"],"tex:8":["doorblue","doorbluestripe","bluedoor"],"tex:9":["switchoff"],"tex:10":["switchon"],"tex:slab":["floorslab","slab"],"tex:tech":["floorgrate","grate"],"tex:hell":["lavafloor","floorlava"],"tex:ceilDark":["ceilingpanel","ceiling"],"tex:ceilTech":["ceilingpanel","ceilingtech"],"tex:ceilHell":["hellrock","ceilinghell"]};function Ef(i){return String(i||"").toLowerCase().replace(/\.[a-z0-9]+$/,"").replace(/.*[\/\\]/,"").replace(/[^a-z0-9]/g,"")}function wf(){var i={models:{},textures:{},ready:!1,loaded:[],problems:[]};return i.model=function(e){for(var t=um[e]||[e],n=0;n<t.length;n++)if(i.models[t[n]])return i.models[t[n]];return null},i.texture=function(e){for(var t=um[e]||[e],n=0;n<t.length;n++)if(i.textures[t[n]])return i.textures[t[n]];return null},i}var SM=["assets/codex","assets/cc0","assets"];function dm(i){var e=typeof window!="undefined"&&window.FIREBIRD_ASSET_PACK;return e&&Object.prototype.hasOwnProperty.call(e,i)?e[i]:void 0}function hm(i){var e=dm(i);if(e===void 0)return i;var t=/\.png$/i.test(i)?"image/png":/\.jpe?g$/i.test(i)?"image/jpeg":/\.webp$/i.test(i)?"image/webp":"model/gltf-binary";return"data:"+t+";base64,"+e}function bM(i){var e=dm(i+"/assets.json");return e!==void 0?Promise.resolve(e):typeof window!="undefined"&&window.FIREBIRD_ASSET_PACK||typeof location!="undefined"&&location.protocol==="file:"?Promise.resolve(null):fetch(i+"/assets.json",{cache:"no-cache"}).then(function(t){return t.ok?t.json():null}).catch(function(){return null})}function pm(i){var e=typeof window!="undefined"&&window.FIREBIRD_ASSET_PACK;i=i||e&&e.__dirs||SM;var t=wf(),n=new iu,r=new ns;return Promise.all(i.map(function(o){return bM(o).then(function(l){return{dir:o,man:l}})})).then(function(o){var l=[];return o.forEach(function(u,c){if(u.man){var h=Array.isArray(u.man)?u.man:u.man.assets||u.man.files||[];h.forEach(function(f){l.push(a(u.dir,f,c))})}}),Promise.all(l)}).then(function(){return t.ready=!0,t});function s(o,l,u,c){var h=o[l];(!h||h.priority>c)&&(u.priority=c,o[l]=u)}function a(o,l,u){var c=l.file||l.path||l.src,h=String(l.type||l.kind||"").toLowerCase(),f=Ef(l.id||l.name||c);if(c&&/\.glb$/i.test(c))return fm(n.loadAsync(hm(o+"/"+c)),2e4).then(function(_){s(t.models,f,{scene:_.scene,animations:_.animations||[],meta:l,type:h,dir:o},u),t.loaded.push(o+":"+f)}).catch(function(_){t.problems.push(o+"/"+c+": "+(_&&_.message||_))});if(h.indexOf("tex")===0||l.maps||l.textures){var p=l.maps||l.textures||{},g={},y=[],v={map:["albedo","basecolor","base_color","color","diffuse"],normalMap:["normal","normalmap"],roughnessMap:["roughness","rough","orm"],emissiveMap:["emissive","emission","glow"]},m=l.filter!=="linear";return Object.keys(v).forEach(function(_){var L=null;Object.keys(p).forEach(function(E){v[_].indexOf(E.toLowerCase().replace(/[^a-z_]/g,""))>=0&&(L=p[E])}),L&&y.push(fm(r.loadAsync(hm(o+"/"+L)),2e4).then(function(E){E.wrapS=E.wrapT=ai,E.anisotropy=8,E.colorSpace=_==="map"||_==="emissiveMap"?kt:Jn,m&&(E.magFilter=zt),g[_]=E}).catch(function(E){t.problems.push(o+"/"+L+": "+(E&&E.message||E))}))}),Promise.all(y).then(function(){g.map&&(s(t.textures,f,g,u),t.loaded.push(o+":tex:"+f))})}return null}}function fm(i,e){return new Promise(function(t,n){var r=setTimeout(function(){n(new Error("timed out"))},e);i.then(function(s){clearTimeout(r),t(s)},function(s){clearTimeout(r),n(s)})})}function hs(i){var e=nu(i.scene);e.traverse(function(r){r.isMesh&&(r.castShadow=!0,r.frustumCulled=!r.isSkinnedMesh,r.material&&(r.material=Array.isArray(r.material)?r.material.map(function(s){return s.clone()}):r.material.clone()))});var t=i.animations.length?new ro(e):null,n={};return i.animations.forEach(function(r){n[Ef(r.name).replace(/^.*\|/,"")]=r}),{obj:e,mixer:t,clips:n}}function Io(i,e){var t=Ef(e);if(i[t])return i[t];for(var n in i)if(n.indexOf(t)>=0)return i[n];return null}var mm={};function Ve(i,e){return mm[i]||(mm[i]=e())}function Rt(i,e){return new en(Object.assign({color:i,roughness:.7,metalness:.05},e||{}))}function Cn(i,e){return new en({color:0,emissive:i,emissiveIntensity:e||3,roughness:1})}function Ke(i,e,t,n,r,s){var a=new Ue(i,e);return a.position.set(t,n,r),a.castShadow=!0,(s||this).add(a),a}var $n=function(){return new wr(1,16,12)},fn=function(){return new hn(1,1,1)},Ur=function(){return new Ja(1,1,10)},Ti=function(){return new Ys(1,1,1,14)},fs=function(){return new Za(1,1,6,12)};function lu(i){var e=[];return i.traverse(function(t){t.isMesh&&t.material&&!t.userData.noFlash&&(t.material=t.material.clone(),e.push(t.material))}),e}function TM(){var i=new at,e=new at;i.add(e);var t=Rt(8007196,{roughness:.6}),n=Rt(3806220),r=Rt(15259824,{roughness:.4}),s=Ke(Ve("cap",fs),t,0,.5,0,e);s.scale.set(.17,.14,.13),s.rotation.x=.35;var a=Ke(Ve("sph",$n),t,0,.72,.06,e);a.scale.set(.11,.1,.11),[-1,1].forEach(function(l){var u=Ke(Ve("cone",Ur),n,l*.07,.83,.02,e);u.scale.set(.025,.12,.025),u.rotation.z=-l*.5;var c=Ke(Ve("sph",$n),Cn(16752672,2),l*.045,.74,.15,e);c.scale.setScalar(.018),c.userData.noFlash=!0;var h=new at;h.position.set(l*.17,.58,.02),e.add(h);var f=Ke(Ve("cap",fs),t,0,-.1,0,h);f.scale.set(.04,.09,.04);var p=Ke(Ve("cone",Ur),r,0,-.26,.03,h);p.scale.set(.03,.07,.03),p.rotation.x=Math.PI,h.userData.side=l,e.userData["arm"+l]=h;var g=Ke(Ve("cap",fs),n,l*.08,.18,0,e);g.scale.set(.05,.12,.05),e.userData["leg"+l]=g;var y=Ke(Ve("cone",Ur),n,l*.06,.55,-.12,e);y.scale.set(.03,.09,.03),y.rotation.x=-1.2});var o=lu(i);return{obj:i,mats:o,animate:function(l,u){var c=l.state==="chase"||l.state==="flee"?Math.sin(u*9+l.animT):0;e.position.y=Math.abs(c)*.03,e.userData.leg1.rotation.x=c*.6,e.userData["leg-1"].rotation.x=-c*.6;var h=l.state==="windup"?1:0;e.userData.arm1.rotation.x=-c*.5-h*2.4,e.userData["arm-1"].rotation.x=c*.5-h*.4,e.rotation.x=l.state==="pain"?-.35:0}}}function EM(){var i=new at,e=new at;i.add(e);var t=Rt(12873850,{roughness:.55}),n=Rt(3803152),r=Rt(16051416,{roughness:.3}),s=Ke(Ve("sph",$n),t,0,.36,0,e);s.scale.set(.34,.28,.32);var a=new at;a.position.set(0,.3,.12),e.add(a);var o=Ke(Ve("sph",$n),n,0,.04,.12,e);o.scale.set(.24,.1,.12),o.position.y=.33;for(var l=0;l<9;l++){var u=(l/8-.5)*2.4,c=Ke(Ve("cone",Ur),r,Math.sin(u)*.22,.42,.14+Math.cos(u)*.14,e);c.scale.set(.028,.08,.028),c.rotation.x=Math.PI;var h=Ke(Ve("cone",Ur),r,Math.sin(u)*.2,-.02,Math.cos(u)*.14+.02,a);h.scale.set(.025,.07,.025)}var f=Ke(Ve("sph",$n),t,0,-.04,.02,a);f.scale.set(.26,.08,.22),[-1,1].forEach(function(g){var y=Ke(Ve("sph",$n),Cn(16752688,.9),g*.12,.56,.25,e);y.scale.setScalar(.02),y.userData.noFlash=!0;var v=Ke(Ve("cap",fs),t,g*.18,.1,0,e);v.scale.set(.07,.07,.07),e.userData["leg"+g]=v});var p=lu(i);return{obj:i,mats:p,animate:function(g,y){var v=g.state==="chase"||g.state==="flee"?Math.sin(y*14+g.animT):0;e.position.y=Math.abs(v)*.04,e.userData.leg1.position.z=v*.08,e.userData["leg-1"].position.z=-v*.08;var m=g.state==="windup"?.7:(Math.sin(y*6+g.animT)+1)*.08;a.rotation.x=m,e.rotation.x=g.state==="windup"?.25:g.state==="pain"?-.3:0}}}function wM(){var i=new at,e=new at;i.add(e);var t=Rt(9052182,{roughness:.35,metalness:.6}),n=Rt(2757648,{roughness:.5,metalness:.4}),r=Cn(16734736,4),s=Ke(Ve("box",fn),t,0,.82,0,e);s.scale.set(.5,.42,.3);var a=Ke(Ve("box",fn),n,0,.55,0,e);a.scale.set(.4,.16,.26);var o=Ke(Ve("sph",$n),r,0,.84,.16,e);o.scale.setScalar(.07),o.userData.noFlash=!0;var l=Ke(Ve("box",fn),t,0,1.12,.02,e);l.scale.set(.2,.18,.2);var u=Ke(Ve("box",fn),Cn(16747040,5),0,1.13,.12,e);u.scale.set(.15,.03,.02),u.userData.noFlash=!0,[-1,1].forEach(function(h){var f=Ke(Ve("cone",Ur),n,h*.14,1.26,0,e);f.scale.set(.04,.2,.04),f.rotation.z=-h*.7;var p=Ke(Ve("sph",$n),t,h*.3,1,0,e);p.scale.set(.14,.1,.14);var g=new at;g.position.set(h*.33,.95,0),e.add(g),e.userData["arm"+h]=g;var y=Ke(Ve("box",fn),t,0,-.25,0,g);y.scale.set(.13,.42,.13);var v=Ke(Ve("box",fn),n,0,-.5,.02,g);v.scale.set(.15,.13,.15);var m=Ke(Ve("box",fn),n,h*.13,.24,0,e);m.scale.set(.15,.48,.17),e.userData["leg"+h]=m});var c=lu(i);return{obj:i,mats:c,animate:function(h,f){var p=h.state==="chase"?Math.sin(f*6+h.animT):0;e.userData.leg1.rotation.x=p*.4,e.userData["leg-1"].rotation.x=-p*.4,e.userData.arm1.rotation.x=h.state==="windup"?-2.2:-p*.3,e.userData["arm-1"].rotation.x=h.state==="windup"?-1.2:p*.3,e.position.y=Math.abs(p)*.03}}}function AM(){var i=new at,e=new at;i.add(e);var t=new en({color:665648,emissive:4184296,emissiveIntensity:1.2,transparent:!0,opacity:.82,roughness:.3,metalness:.2}),n=new en({color:0,emissive:10484991,emissiveIntensity:3}),r=Ke(Ve("cap",fs),t,0,.58,0,e);r.scale.set(.13,.16,.09);var s=Ke(Ve("box",fn),t,0,.4,0,e);s.scale.set(.22,.08,.13);var a=Ke(Ve("sph",$n),t,0,.86,0,e);a.scale.set(.085,.1,.09);var o=Ke(Ve("box",fn),n,0,.87,.07,e);o.scale.set(.12,.028,.02);var l=Ke(Ve("sph",$n),n,0,.64,.08,e);l.scale.setScalar(.03),[-1,1].forEach(function(f){var p=new at;p.position.set(f*.15,.72,0),e.add(p),e.userData["arm"+f]=p;var g=Ke(Ve("cap",fs),t,0,-.14,0,p);g.scale.set(.035,.13,.035);var y=Ke(Ve("cap",fs),t,f*.07,.18,0,e);y.scale.set(.045,.16,.045),e.userData["leg"+f]=y});var u=new Ue(Ve("sph",$n),new en({color:0,emissive:16765502,emissiveIntensity:1.5,transparent:!0,opacity:.25,side:kn,depthWrite:!1}));u.scale.setScalar(.62),u.position.y=.5,u.userData.noFlash=!0,i.add(u);var c=[t],h=new Ue(new Ar(.34,.012,6,40),n);return h.rotation.x=Math.PI/2,h.position.y=.02,i.add(h),{obj:i,mats:c,animate:function(f,p){var g=f.state==="chase"?Math.sin(p*8+f.animT):0;e.userData.leg1.rotation.x=g*.5,e.userData["leg-1"].rotation.x=-g*.5,e.userData.arm1.rotation.x=f.state==="windup"?-1.5:-g*.4,e.userData["arm-1"].rotation.x=f.state==="windup"?-1.5:g*.4,e.position.y=.03+Math.sin(p*2)*.015;var y=f.state==="windup"&&f.attack!=="melee";n.emissive.setHex(y?16777215:10484991),n.emissiveIntensity=y?8:3,t.opacity=.7+Math.sin(p*23)*.06+(Math.random()<.02?-.3:0),u.visible=f.shieldT>0,u.rotation.y=p*1.5,h.scale.setScalar(1+Math.sin(p*3)*.05)}}}function RM(){var i=new at,e=Ke(Ve("cyl",Ti),Rt(4872762,{roughness:.45,metalness:.5}),0,.28,0,i);e.scale.set(.2,.55,.2),[.08,.48].forEach(function(r){var s=Ke(Ve("cyl",Ti),Rt(2764326,{metalness:.6,roughness:.4}),0,r,0,i);s.scale.set(.205,.03,.205)});var t=Ke(Ve("cyl",Ti),Cn(7012154,2.5),0,.56,0,i);t.scale.set(.16,.01,.16),t.userData.noFlash=!0;var n=Ke(Ve("box",fn),Cn(16765502,1.5),0,.3,.2,i);return n.scale.set(.12,.12,.005),n.rotation.z=Math.PI/4,n.userData.noFlash=!0,{obj:i,mats:lu(i),animate:function(){}}}var CM={imp:TM,gnasher:EM,knight:wM,riley:AM,barrel:RM};function IM(i,e){var t=hs(i),n=new at;t.obj.scale.setScalar(1/au),n.add(t.obj);var r=[],s=[],a=t.obj.getObjectByName("shield");t.obj.traverse(function(h){h.isMesh&&(Array.isArray(h.material)?h.material:[h.material]).forEach(function(f){f.emissive&&f.emissiveIntensity>1.2&&(f.emissiveIntensity=1.2),/tell/i.test(f.name)||/tell/i.test(h.name)?s.push(f):f.emissive&&r.push(f)})});var o=null,l=null;function u(h,f){if(t.mixer){var p=Io(t.clips,h)||(h==="attack_windup"?Io(t.clips,"attack"):null)||Io(t.clips,"idle");if(p){var g=t.mixer.clipAction(p);o!==g&&(g.reset(),g.setLoop(f?Ic:Pc,1/0),g.clampWhenFinished=!!f,g.play(),o&&o.crossFadeTo(g,.15,!1),o=g)}}}var c={idle:"idle",chase:"walk",flee:"walk",windup:"attack_windup",pain:"pain",die:"death",dead:"death"};return{obj:n,mats:r,animate:function(h,f,p){var g=h.state||"idle";g!==l&&(l==="windup"&&g==="chase"&&Io(t.clips,"attack")?u("attack",!0):u(c[g]||"idle",g==="pain"||g==="die"||g==="dead"),l=g),o&&o.getClip().name&&/attack$/i.test(o.getClip().name)&&!o.isRunning()&&g==="chase"&&u("walk"),t.mixer&&t.mixer.update(p||0);var y=g==="windup"&&h.attack!=="melee";s.forEach(function(v){v.emissive&&(v.emissive.setHex(y?16777215:10484991),v.emissiveIntensity=y?6:2)}),a&&(a.visible=h.shieldT>0)},authored:!0,clip:function(){return o?o.getClip().name:null}}}function gm(i,e){var t=e&&e.model(i.kind),n=t?IM(t,i):CM[i.kind](),r=!t&&i.kind==="riley"?i.h/.95:1;n.obj.scale.setScalar(r);var s=0,a=n.animate;return n.debug=function(){return{kind:i.kind,authored:!!n.authored,clip:n.clip?n.clip():null,state:i.state}},n.update=function(o,l,u){n.obj.position.set(i.x,i.y,i.z);var c=i.state==="windup"||i.state==="pain"||i.los?u:i.moveAng||0,h=n.obj.rotation.y,f=-c+Math.PI/2,p=Math.atan2(Math.sin(f-h),Math.cos(f-h));if(n.obj.rotation.y=h+p*Math.min(1,l*10),n.authored)a(i,o,l);else if(i.state==="die"||i.state==="dead"){s+=l;var g=Math.min(1,s/.45);n.obj.rotation.x=-g*1.35,n.obj.position.y=i.y+.05*g,n.obj.scale.setScalar(r*(1-g*.15)),i.kind==="riley"&&(n.obj.visible=s*12%1<.6&&s<1.4)}else a(i,o);var y=i.flashT>0&&i.state!=="dead";n.mats.forEach(function(v){v.userData.base||(v.userData.base={e:v.emissive?v.emissive.getHex():0,i:v.emissiveIntensity}),y?(v.emissive.setHex(16777215),v.emissiveIntensity=1.4):(v.emissive.setHex(v.userData.base.e),v.emissiveIntensity=v.userData.base.i)})},n}function vm(i,e){var t=new at,n=new at;t.add(n);var r=i.item,s=e&&e.model("pickup:"+r);if(s){var a=hs(s);a.obj.scale.setScalar(1/au),n.add(a.obj)}else if(r==="h"||r==="+"){var o=r==="+",l=Ke(Ve("box",fn),Rt(15789280,{roughness:.5}),0,.1,0,n);l.scale.set(o?.34:.2,o?.2:.14,o?.24:.14);var u=Ke(Ve("box",fn),Cn(16722458,2),0,.1,0,n);u.scale.set(o?.22:.13,o?.06:.04,o?.245:.145);var c=Ke(Ve("box",fn),Cn(16722458,2),0,.1,0,n);c.scale.set(o?.07:.045,o?.06:.04,o?.245:.145),c.scale.set(o?.345:.205,o?.06:.04,o?.07:.045)}else if(r==="b"){var h=Ke(Ve("box",fn),Rt(6972504,{metalness:.5,roughness:.4}),0,.08,0,n);h.scale.set(.1,.16,.06);var f=Ke(Ve("box",fn),Rt(14196800,{metalness:.8,roughness:.3}),0,.17,0,n);f.scale.set(.08,.03,.04)}else if(r==="a"){var p=Ke(Ve("box",fn),Rt(10496024,{roughness:.6}),0,.09,0,n);p.scale.set(.3,.18,.18);for(var g=0;g<4;g++){var y=Ke(Ve("cyl",Ti),Rt(14196800,{metalness:.8,roughness:.3}),-.1+g*.066,.2,0,n);y.scale.set(.022,.06,.022)}}else if(r==="A"){var v=Ke(Ve("box",fn),Rt(3050042,{metalness:.4,roughness:.4}),0,.2,0,n);v.scale.set(.34,.36,.14);var m=Ke(Ve("box",fn),Cn(8060810,1.2),0,.26,.075,n);m.scale.set(.16,.1,.01)}else if(r==="2"){var _=Af(!0);_.scale.setScalar(.9),_.rotation.z=.2,_.position.y=.15,n.add(_)}else if(r==="r"||r==="u"){var L=r==="r"?16722458:3832575,E=Ke(Ve("box",fn),Cn(L,2.5),0,.2,0,n);E.scale.set(.16,.22,.015);var C=Ke(Ve("box",fn),Rt(15788760),0,.25,0,n);C.scale.set(.12,.03,.02)}else if(r==="P"){var P=Ke(Ve("sph",$n),Cn(16756800,4),0,.3,0,n);P.scale.setScalar(.14);var U=new Ue(new Ar(.2,.012,6,32),Cn(16765502,3));U.position.y=.3,n.add(U)}var M=r==="r"||r==="u"||r==="P"||r==="2";return{obj:t,update:function(x){t.position.set(i.x,i.y,i.z),t.visible=!i.gone,M&&(n.rotation.y=x*1.8+i.bob),n.position.y=M?.08+Math.sin(x*2.5+i.bob)*.05:0}}}function _m(i,e){var t=new at,n=e&&e.model("torch");if(n){var r=hs(n);return r.obj.scale.setScalar(1/au),t.add(r.obj),t.position.set(i.x,i.y,i.z),{obj:t,update:function(c){r.mixer&&r.mixer.update(1/60)}}}var s=Ke(Ve("cyl",Ti),Rt(3811866,{metalness:.3}),0,.4,0,t);s.scale.set(.03,.8,.03);var a=Ke(Ve("cyl",Ti),Rt(5917242,{metalness:.6,roughness:.4}),0,.82,0,t);a.scale.set(.1,.06,.1);var o=new at;o.position.y=.9,t.add(o);var l=Ke(Ve("cone",Ur),Cn(16747040,5),0,.08,0,o);l.scale.set(.08,.2,.08);var u=Ke(Ve("cone",Ur),Cn(16769120,6),0,.05,0,o);return u.scale.set(.045,.12,.045),t.position.set(i.x,i.y,i.z),{obj:t,update:function(c){var h=Math.sin(c*17+i.animT*9)*.5+Math.sin(c*29+i.animT*3)*.5;o.scale.set(1+h*.1,1+h*.25,1+h*.1),o.rotation.y=c*3}}}var PM=function(i,e,t,n){return new tu(i,e,t,3,n)};function Mn(i,e,t,n,r){return Ve("rb"+i,function(){return PM(e,t,n,r)})}var xm=function(){return Rt(3816772,{metalness:.9,roughness:.3})},ym=function(){return Rt(1842724,{metalness:.85,roughness:.4})},LM=function(){return Rt(6961690,{roughness:.55,metalness:.05})},ou=function(){return Rt(2760988,{roughness:.85})},Mm=function(){return Rt(3818032,{roughness:.9})};function Sm(i,e){var t=!1;i.traverse(function(n){/hand|arm|glove/i.test(n.name)&&(t=!0)}),!t&&(e==="shotgun"||e==="chaingun"||e==="rocket"?(ga(i,.01,-.07,.08,.4),ga(i,-.01,-.05,-.2,.1)):e!=="fist"&&ga(i,0,-.06,.02,.3))}function ga(i,e,t,n,r){var s=new at;s.position.set(e,t,n),s.rotation.x=r||0,i.add(s);var a=new Ue(Mn("palm",.07,.05,.09,.02),ou());s.add(a);var o=new Ue(Mn("fing",.075,.03,.05,.012),ou());o.position.set(0,-.03,-.03),s.add(o);var l=new Ue(Ve("cyl",Ti),Mm());return l.scale.set(.045,.28,.045),l.rotation.x=Math.PI/2-.15,l.position.set(.01,-.02,.17),s.add(l),s}function Af(i){var e=new at,t=xm(),n=ym(),r=LM();[-.019,.019].forEach(function(y){var v=new Ue(Ve("cyl",Ti),t);v.scale.set(.019,.62,.019),v.rotation.x=Math.PI/2,v.position.set(y,0,-.36),e.add(v);var m=new Ue(Ve("cyl",Ti),Rt(328965));m.scale.set(.013,.01,.013),m.rotation.x=Math.PI/2,m.position.set(y,0,-.672),e.add(m)});var s=new Ue(Mn("rib",.012,.01,.6,.004),n);s.position.set(0,.022,-.36),e.add(s);var a=new Ue(Ve("sph",$n),Cn(16769184,1.2));a.scale.setScalar(.006),a.position.set(0,.03,-.66),e.add(a);var o=new at;o.position.set(0,-.034,-.3),e.add(o),e.userData.pump=o;var l=new Ue(Mn("fore",.066,.05,.2,.015),r);o.add(l);for(var u=0;u<5;u++){var c=new Ue(Mn("grip",.068,.006,.012,.002),Rt(3808780));c.position.set(0,-.022,-.08+u*.04),o.add(c)}var h=new Ue(Mn("recv",.075,.085,.2,.012),n);h.position.set(0,-.012,.02),e.add(h);var f=new Ue(Mn("port",.005,.03,.07,.003),Rt(657930));f.position.set(.039,0,0),e.add(f);var p=new Ue(new Ar(.025,.005,6,14,Math.PI),n);p.position.set(0,-.055,.07),p.rotation.set(0,Math.PI/2,Math.PI),e.add(p);var g=new Ue(Mn("stock",.064,.1,.28,.02),r);return g.position.set(0,-.055,.24),g.rotation.x=-.14,e.add(g),i||(e.userData.pumpHand=ga(o,-.005,-.045,.01,.1),ga(e,.01,-.08,.1,.4)),e}function bm(){var i=new at,e=xm(),t=ym(),n=new Ue(Mn("slide",.042,.042,.19,.008),e);n.position.set(0,.02,-.07),i.add(n),i.userData.slide=n;for(var r=0;r<6;r++){var s=new Ue(Mn("ser",.044,.03,.004,.001),t);s.position.set(0,.022,0+r*.008-.02),n.add(s),s.position.set(0,0,.06+r*.008)}var a=new Ue(Mn("frame",.038,.03,.16,.008),t);a.position.set(0,-.012,-.06),i.add(a);var o=new Ue(Ve("cyl",Ti),Rt(526344));o.scale.set(.009,.01,.009),o.rotation.x=Math.PI/2,o.position.set(0,.022,-.166),i.add(o);var l=new Ue(Mn("pgrip",.036,.11,.05,.01),Rt(2761760,{roughness:.8}));l.position.set(0,-.07,.01),l.rotation.x=.28,i.add(l);var u=new Ue(new Ar(.018,.004,6,14,Math.PI),t);u.position.set(0,-.03,-.035),u.rotation.set(0,Math.PI/2,Math.PI),i.add(u);var c=new Ue(Mn("sight",.006,.01,.01,.002),Cn(16734762,1.5));c.position.set(0,.046,-.155),i.add(c);var h=new Ue(Mn("rear",.03,.01,.008,.002),t);return h.position.set(0,.046,.02),i.add(h),ga(i,0,-.07,.04,.3),i}function Tm(){var i=new at,e=new Ue(Mn("fist",.1,.085,.11,.03),ou());i.add(e);var t=new Ue(Mn("knuck",.105,.04,.03,.012),Rt(5917242,{metalness:.7,roughness:.35}));t.position.set(0,.02,-.06),i.add(t);var n=new Ue(Mn("thumb",.03,.03,.06,.012),ou());n.position.set(-.05,-.01,-.02),i.add(n);var r=new Ue(Ve("cyl",Ti),Mm());return r.scale.set(.05,.3,.05),r.rotation.x=Math.PI/2,r.position.set(0,-.01,.2),i.add(r),i}var Qn=3e3;function Em(i){var e=new Float32Array(Qn*3),t=new Float32Array(Qn*3),n=new Float32Array(Qn),r=new Float32Array(Qn),s=new Float32Array(Qn*3),a=new Float32Array(Qn),o=new Float32Array(Qn),l=new Float32Array(Qn),u=new Float32Array(Qn),c=new Float32Array(Qn*3),h=new Uint8Array(Qn),f=new Vt;f.setAttribute("position",new Zt(e,3).setUsage(sa)),f.setAttribute("color",new Zt(t,3).setUsage(sa)),f.setAttribute("size",new Zt(n,1).setUsage(sa)),f.setAttribute("alpha",new Zt(r,1).setUsage(sa));var p=new jt({uniforms:{scale:{value:600}},vertexShader:["attribute float size; attribute float alpha; attribute vec3 color; varying vec3 vC; varying float vA;","uniform float scale;","void main(){ vC = color; vA = alpha; vec4 mv = modelViewMatrix * vec4(position,1.0);"," gl_PointSize = size * scale / -mv.z; gl_Position = projectionMatrix * mv; }"].join(`
`),fragmentShader:["varying vec3 vC; varying float vA;","void main(){ vec2 d = gl_PointCoord - 0.5; float r = dot(d,d); if (r > 0.25) discard;"," float k = smoothstep(0.25, 0.0, r); gl_FragColor = vec4(vC * k * vA, k * vA); }"].join(`
`),transparent:!0,depthWrite:!1,blending:ar}),g=new Qr(f,p);g.frustumCulled=!1,i.add(g);var y=0,v=0;function m(x,w,A,S,I,D,k,Y,j,se,ne,le){var ae=y;y=(y+1)%Qn,v=Math.min(Qn,v+1),e[ae*3]=x,e[ae*3+1]=w,e[ae*3+2]=A,s[ae*3]=S,s[ae*3+1]=I,s[ae*3+2]=D,c[ae*3]=k[0],c[ae*3+1]=k[1],c[ae*3+2]=k[2],n[ae]=Y,a[ae]=o[ae]=j,l[ae]=se||0,u[ae]=ne||0,h[ae]=le?0:1}function _(x){return(Math.random()-.5)*2*x}for(var L=[],E=0;E<6;E++){var C=new Yn(16755285,0,6,1.6);C.userData={t:0,max:0,peak:0},i.add(C),L.push(C)}var P=0;function U(x,w,A,S,I,D,k){var Y=L[P];P=(P+1)%L.length,Y.position.set(x,w,A),Y.color.setHex(S),Y.distance=k||6,Y.userData.t=Y.userData.max=D,Y.userData.peak=I}var M={blood:function(x){for(var w=0;w<14;w++)m(x.x,x.y,x.z,x.dx*1.5+_(1.2),_(1)+1,x.dz*1.5+_(1.2),[.55,.02,.02],.05+Math.random()*.04,.6,9)},spark:function(x){for(var w=0;w<12;w++)m(x.x,x.y,x.z,_(3),_(3)+1,_(3),[1.4,1.1,.5],.025,.35,8);U(x.x,x.y,x.z,10484991,2,.1,3)},puff:function(x){for(var w=0;w<6;w++)m(x.x,x.y,x.z,_(.3),_(.3)+.2,_(.3),[.25,.23,.2],.12,.5,-.2,.3);for(var A=0;A<5;A++)m(x.x,x.y,x.z,_(2.5),_(2.5),_(2.5),[1.6,1,.4],.02,.18,6)},muzzle:function(x){var w=x.weapon==="shotgun";U(x.x,x.y,x.z,16756832,w?6:3.5,.07,w?8:6)},fireBurst:function(x){for(var w=0;w<22;w++)m(x.x,x.y,x.z,_(2),_(2)+.5,_(2),[1.8,.7,.15],.06,.35,2,-.1);U(x.x,x.y,x.z,16742944,4,.25,5)},greenBurst:function(x){for(var w=0;w<22;w++)m(x.x,x.y,x.z,_(2),_(2)+.5,_(2),[.3,1.6,1.8],.06,.35,2,-.1);U(x.x,x.y,x.z,6287615,4,.25,5)},explosion:function(x){for(var w=0;w<90;w++){var A=Math.random()<.5;m(x.x,x.y,x.z,_(4),_(3)+2,_(4),A?[2,1.2,.3]:[1.4,.4,.05],.12+Math.random()*.1,.5+Math.random()*.4,3,.4)}for(var S=0;S<30;S++)m(x.x,x.y+.3,x.z,_(1),Math.random()*1.5,_(1),[.18,.15,.13],.35,1.4,-.5,.6);U(x.x,x.y+.5,x.z,16747056,14,.5,9)},gib:function(x){for(var w=x.kind==="gnasher"?[.6,.15,.2]:[.5,.05,.02],A=0;A<26;A++)m(x.x,x.y,x.z,_(2),Math.random()*3,_(2),w,.06+Math.random()*.05,.9,9);if(x.kind==="riley")for(var S=0;S<60;S++)m(x.x,x.y+Math.random(),x.z,_(1),Math.random()*1.5,_(1),[.3,1.5,1.7],.04,1.4,-.4)},summon:function(x){for(var w=0;w<50;w++)m(x.x+_(.4),x.y,x.z+_(.4),_(.5),Math.random()*2.5,_(.5),[1.8,.5,.1],.07,.8,-1);U(x.x,x.y+.5,x.z,16734736,6,.6,6)},pickup:function(x){for(var w=0;w<16;w++)m(x.x,x.y,x.z,_(1),Math.random()*1.5,_(1),[1.4,1.2,.5],.03,.5,-1)}};return{points:g,event:function(x){M[x.name]&&M[x.name](x)},trail:function(x,w,A,S){m(x,w,A,_(.2),_(.2),_(.2),S?[.3,1.4,1.6]:[1.8,.6,.1],.07,.3,0,-.15)},ember:function(x,w,A){m(x+_(.05),w,A+_(.05),_(.15),.4+Math.random()*.4,_(.15),[1.6,.6,.1],.02,1.1,-.2)},update:function(x,w){p.uniforms.scale.value=w;for(var A=0;A<v;A++){if(a[A]<=0){r[A]=0;continue}a[A]-=x,s[A*3+1]-=l[A]*x,e[A*3]+=s[A*3]*x,e[A*3+1]+=s[A*3+1]*x,e[A*3+2]+=s[A*3+2]*x;var S=Math.max(0,a[A]/o[A]);r[A]=h[A]?S:1,n[A]=Math.max(.005,n[A]+u[A]*x),t[A*3]=c[A*3],t[A*3+1]=c[A*3+1]*(.5+.5*S),t[A*3+2]=c[A*3+2]*S}f.attributes.position.needsUpdate=f.attributes.color.needsUpdate=f.attributes.size.needsUpdate=f.attributes.alpha.needsUpdate=!0,f.setDrawRange(0,v),L.forEach(function(I){var D=I.userData;D.t>0?(D.t-=x,I.intensity=D.peak*Math.max(0,D.t/D.max)):I.intensity=0})}}}var wm={slab:788743,tech:395532,hell:1443332};function Am(i,e){e=e||{};var t=new Hc({canvas:i,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!e.preserve});t.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),t.toneMapping=ss,t.toneMappingExposure=1.45;var n=new ca(t),r=n.fromScene(new qc,.04).texture;t.outputColorSpace=kt,t.shadowMap.enabled=!1,t.info.autoReset=!1;var s=new nn(78,16/9,.03,60);s.rotation.order="YXZ";var a=null,o=null,l=null,u=null,c=null,h=new Map,f=[],p=new Map,g=new Tr,y=new nn(60,16/9,.01,5),v=new Yn(16756848,0,3,1.5),m=new is(16767152,1.2);m.position.set(-1,2,1),g.add(new $s(16777215,.35),new Js(16769216,2103312,.8),v,m),g.environment=r,g.environmentIntensity=.6;var _=wf(),L=new at,E={};g.add(L);var C={fist:{p:[.14,-.15,-.3],ry:0},pistol:{p:[.15,-.14,-.38],ry:.06},shotgun:{p:[.1,-.13,-.2],ry:.04},chaingun:{p:[.12,-.15,-.22],ry:.04},rocket:{p:[.13,-.16,-.2],ry:.04}},P={fist:Tm,pistol:bm,shotgun:Af};function U(){Object.keys(E).forEach(function(ge){L.remove(E[ge])}),E={},Object.keys(C).forEach(function(ge){var oe=_.model(ge),G;if(oe){G=new at;var Z=hs(oe);G.add(Z.obj),Z.obj.rotation.y=Math.PI,Z.obj.updateMatrixWorld(!0);var fe=new Nn().setFromObject(Z.obj,!0),me=fe.max.z-fe.min.z;G.userData.authoredLength=me;var _e={fist:.2,pistol:.24,shotgun:.85,chaingun:.8,rocket:.9};me>.001&&_e[ge]&&Z.obj.scale.multiplyScalar(_e[ge]/me),["pump","slide","barrels","tube"].forEach(function(Je){var Oe=Z.obj.getObjectByName(Je);Oe&&(G.userData[Je]=Oe)}),G.userData.authored=!0,Sm(G,ge)}else if(P[ge])G=P[ge]();else return;var He=C[ge];G.position.set(He.p[0],He.p[1],He.p[2]),G.rotation.y=He.ry,G.userData.baseZ=He.p[2],G.visible=!1,L.add(G),E[ge]=G})}U();function M(ge,oe){ge&&(ge.userData.z0===void 0&&(ge.userData.z0=ge.position.z),ge.position.z=ge.userData.z0+oe)}var x=new Ue(new wr(1,10,8),new wn({color:16765056,transparent:!0,opacity:.9,blending:ar,depthWrite:!1}));x.scale.setScalar(.035),g.add(x);var w=0,A={x:0,y:0},S=0,I=0,D=null,k={w:1,h:1,top:0};function Y(ge){D=ge,a=new Tr;var oe=wm[ge.L.floor]||wm.slab;a.background=new Be(oe),a.fog=new ka(oe,.032),a.environment=r,a.environmentIntensity=.25,a.add(new Js(10520696,2103840,.9)),a.add(new $s(5261384,.5)),u=im(ge,_),a.add(u.group),c=Em(a),h.clear(),p.clear(),f=[],ge.ents.forEach(function(G){if(G.kind==="torch"){var Z=_m(G,_);a.add(Z.obj),h.set(G,Z);var fe=new Yn(16747066,2.2,7.5,1.4);fe.position.set(G.x,G.y+1,G.z),fe.userData.e=G,a.add(fe),f.push(fe)}}),se(ge).forEach(function(G){var Z=new Yn(13154472,1.6+G.size*.02,4+Math.sqrt(G.size)*1.6,1.1);Z.position.set(G.x,G.y,G.z),a.add(Z);var fe=_.model("lamp");if(fe){var me=hs(fe);me.obj.scale.setScalar(.5),me.obj.position.set(G.x,G.y+.4,G.z),a.add(me.obj);return}var _e=new at,He=new Ue(new hn(.5,.05,.5),new en({color:0,emissive:16770752,emissiveIntensity:1.1})),Je=new Ue(new hn(.58,.1,.58),new en({color:2762790,metalness:.8,roughness:.4,wireframe:!0}));_e.add(He,Je),_e.position.set(G.x,G.y+.35,G.z),a.add(_e)}),o=new Vc(t),o.addPass(new Wc(a,s)),l=new da(new Ye(256,256),.75,.55,.82),o.addPass(l),o.addPass(new Xc),ne(i.clientWidth,i.clientHeight)}function j(ge,oe,G,Z){var fe=Math.floor(G)*ge.mw+Math.floor(oe);return ge.cells[fe]===0?ge.ceil[fe]:Z}function se(ge){for(var oe=ge.W,G=new Uint8Array(oe.mw*oe.mh),Z=[],fe=0;fe<oe.cells.length;fe++)if(!(G[fe]||oe.cells[fe]!==0)){var me=[fe],_e=0,He=0,Je=0,Oe=0;for(G[fe]=1;me.length;){var je=me.pop(),dt=je%oe.mw,et=je/oe.mw|0;_e+=dt+.5,He+=et+.5,Je=Math.max(Je,oe.ceil[je]),Oe++,[[1,0],[-1,0],[0,1],[0,-1]].forEach(function(vt){var Ct=dt+vt[0],Wt=et+vt[1],Mt=Wt*oe.mw+Ct;Ct<0||Wt<0||Ct>=oe.mw||Wt>=oe.mh||G[Mt]||oe.cells[Mt]!==0||(G[Mt]=1,me.push(Mt))})}Oe>=3&&Z.push({x:_e/Oe,z:He/Oe,y:j(oe,_e/Oe,He/Oe,Je)-.4,size:Oe})}return Z}function ne(ge,oe){!ge||!oe||(t.setSize(ge,oe,!1),k={w:ge,h:oe},s.aspect=ge/oe,s.updateProjectionMatrix(),y.aspect=ge/oe,y.updateProjectionMatrix(),o&&(o.setSize(ge,oe),l.resolution.set(ge/2,oe/2)))}function le(ge,oe,G){var Z=ge.p,fe=new Set;ge.ents.forEach(function(me){if(me.kind==="torch"){h.get(me).update(oe),Math.random()<G*6&&c.ember(me.x,me.y+1,me.z),fe.add(me);return}if(me.kind==="proj"){var _e=p.get(me);_e||(_e=new Ue(new wr(.09,10,8),new wn({color:me.green?10484991:16756800})),a.add(_e),p.set(me,_e)),_e.position.set(me.x,me.y,me.z),c.trail(me.x,me.y,me.z,me.green),fe.add(me);return}if(me.kind!=="part"){var He=h.get(me);if(!He){if(me.kind==="pickup")He=vm(me,_);else if(me.mob)He=gm(me,_);else return;a.add(He.obj),h.set(me,He)}me.kind==="pickup"?He.update(oe):He.update(oe,G,Math.atan2(Z.z-me.z,Z.x-me.x)),fe.add(me)}}),h.forEach(function(me,_e){fe.has(_e)||(a.remove(me.obj),h.delete(_e))}),p.forEach(function(me,_e){fe.has(_e)||(a.remove(me),p.delete(_e))})}function ae(ge){var oe=D.p;f.forEach(function(G,Z){var fe=G.userData.e,me=Math.sin(ge*13+Z*7)*.12+Math.sin(ge*31+Z*3)*.08+(Math.random()-.5)*.08,_e=(fe.x-oe.x)*(fe.x-oe.x)+(fe.z-oe.z)*(fe.z-oe.z)>400;G.intensity=_e?0:2.2*(1+me)})}function we(ge,oe,G){var Z=ge.p,fe=Math.hypot(ge.input.vx||0,ge.input.vz||0);Z.onGround&&fe>.5&&(w+=G*fe*2.6);var me=Z.onGround?Math.min(1,fe/4):0,_e=Math.atan2(Math.sin(Z.ang-S),Math.cos(Z.ang-S)),He=Z.pitch-I;S=Z.ang,I=Z.pitch,A.x+=(-_e*.6-A.x)*Math.min(1,G*8),A.y+=(He*.6-A.y)*Math.min(1,G*8),Object.keys(E).forEach(function(Ct){E[Ct].visible=Ct===Z.weapon&&!Z.dead});var Je=E[Z.weapon];if(Je){var Oe=Z.fireT,je=Oe<.12?Math.sin(Oe/.12*Math.PI):0,dt=Z.lowerT>0?1-Z.lowerT/.15:Z.raiseT>0?Z.raiseT/.15:0;if(L.position.set(Math.sin(w)*.012*me+A.x*.1,-Math.abs(Math.cos(w))*.01*me+A.y*.1-dt*.25-Z.landT*.1,0),L.rotation.set(0,0,0),Z.weapon==="fist")Je.position.z=Je.userData.baseZ-(Oe<.2?Math.sin(Oe/.2*Math.PI)*.18:0),Je.rotation.x=Oe<.2?-Math.sin(Oe/.2*Math.PI)*.3:0;else{Je.rotation.x=je*(Z.weapon==="shotgun"?.35:.2),Je.position.z=Je.userData.baseZ+je*.05;var et=Oe>.3&&Oe<.7?Math.sin((Oe-.3)/.4*Math.PI):0;M(Je.userData.pump,et*.09),M(Je.userData.slide,je*.04),Je.userData.barrels&&(Je.userData.barrels.rotation.z+=G*(Z.fireT<.3?30:0))}var vt=Oe<.06&&Z.weapon!=="fist"&&!Z.dead;x.visible=vt,x.position.set(Je.position.x,Je.position.y+(Z.weapon==="shotgun"?0:.02),Je.position.z-(Z.weapon==="shotgun"?.7:.18)),x.scale.setScalar((Z.weapon==="shotgun"?.06:.035)*(.8+Math.random()*.4)),v.intensity=vt?3:0,v.position.copy(x.position)}}function Ee(ge,oe,G,Z){if(!Z)return it(ge,oe,G);var fe=Math.random,me=12345;Math.random=function(){return me=me*1103515245+12345&2147483647,me/2147483647};try{return it(ge,oe,0)}finally{Math.random=fe}}function it(ge,oe,G){t.info.reset(),ge!==D&&Y(ge);var Z=ge.p;u.update(),le(ge,oe,G),ae(oe),ge.events.forEach(function(me){me.t==="fx"&&c.event(me)}),c.update(G,k.h*.9);var fe=ge.shake*.004;s.position.set(Z.x+(Math.random()-.5)*fe,Z.y+Z.eyeH+(Math.random()-.5)*fe,Z.z+(Math.random()-.5)*fe),s.rotation.y=-Math.PI/2-Z.ang,s.rotation.x=Z.pitch,s.rotation.z=Z.dead?Math.min(.5,Z.deadT*.6):0,o.render(G),t.autoClear=!1,t.clearDepth(),we(ge,oe,G),t.render(g,y),t.autoClear=!0}return{setAssets:function(ge){_=ge,U(),D=null},assets:function(){return _},debugModels:function(){var ge=[];return h.forEach(function(oe){oe.debug&&ge.push(oe.debug())}),ge},render:Ee,resize:ne,renderer:t,camera:s,info:function(){return t.info}}}var Tt=320,NM=200,Lt=168,Rm=32,Rf=Lt/2,va="#e03828",cu="#8a8478",Cf="#401008";function DM(i,e){var t=String(i).split(" "),n=[],r="";return t.forEach(function(s){var a=r?r+" "+s:s;a.length>e&&r?(n.push(r),r=s):r=a}),r&&n.push(r),n}function ds(i){i=i|0;var e=i/60|0,t=i%60;return e+":"+(t<10?"0":"")+t}function Cm(i,e,t){function n(m,_){return m.time*(_||3)%1<.55}function r(m,_,L){return L?n(m,3)?"#ffffff":va:_?"#ff9a28":va}function s(m){return m.dead?Pe.default.faces.dead:m.grinT>0?Pe.default.faces.grin:m.painT>.25?Pe.default.faces.pain:m.hp>=80?Pe.default.faces.ok:m.hp>=55?Pe.default.faces.hurt1:m.hp>=30?Pe.default.faces.hurt2:Pe.default.faces.hurt3}function a(m){var _=m.p;i.fillStyle="#3a352e",i.fillRect(0,Lt,Tt,Rm),i.fillStyle="#14110d",i.fillRect(0,Lt,Tt,2),i.fillStyle="#57514a",i.fillRect(0,Lt+2,Tt,1),i.fillStyle="#24211c",[46,116,142,178,230,250].forEach(function(U){i.fillRect(U,Lt+4,1,Rm-8)});var L=ba[_.weapon],E=L.ammo?_.ammo[L.ammo]:-1,C=L.ammo&&E<=(L.ammo==="shells"?4:10);Pe.default.drawText(i,"AMMO",8,Lt+5,{color:E===0?va:cu}),Pe.default.drawText(i,L.ammo?String(E):"--",40,Lt+12,{scale:3,color:r(m,C,E===0),shadow:Cf,right:!0});var P=_.hp<=25;Pe.default.drawText(i,"HEALTH",54,Lt+5,{color:P?va:cu}),Pe.default.drawText(i,_.hp+"%",108,Lt+12,{scale:3,color:r(m,_.hp<=50,P&&!_.dead),shadow:Cf,right:!0}),Pe.default.drawText(i,"ARMS",129,Lt+5,{color:cu,center:!0}),Xi.forEach(function(U,M){var x=119+M*8,w=_.weapons[U],A=(_.nextWeapon||_.weapon)===U,S=A?"#ffd23e":w?e.hasAmmo(_,U)?"#c8c0b0":"#6a5a4a":"#2a2620";Pe.default.drawText(i,String(M+1),x,Lt+13,{scale:2,color:S}),A&&(i.fillStyle="#ffd23e",i.fillRect(x,Lt+25,6,1))}),i.drawImage(s(_).canvas,148,Lt+3),Pe.default.drawText(i,"ARMOR",184,Lt+5,{color:cu}),Pe.default.drawText(i,_.armor+"%",226,Lt+12,{scale:3,color:_.armor>0?va:"#6a4a40",shadow:Cf,right:!0}),[["red","keyRed",5],["blue","keyBlue",18]].forEach(function(U){!_.keys[U[0]]&&!m.info.keys[U[0]]||(i.globalAlpha=_.keys[U[0]]?1:.18,i.drawImage(Pe.default.things[U[1]].canvas,236,Lt+U[2]),i.globalAlpha=1)}),Pe.default.drawText(i,"BULL "+_.ammo.bullets+"/200",254,Lt+8,{color:L.ammo==="bullets"?"#ffd23e":"#c8c0b0"}),Pe.default.drawText(i,"SHEL "+_.ammo.shells+"/50",254,Lt+19,{color:_.weapons.shotgun?L.ammo==="shells"?"#ffd23e":"#c8c0b0":"#6a655c"})}function o(m){var _=Tt/2,L=Rf;if(t.crosshair){var E=e.aimTarget();i.fillStyle=E?E.barrel?"#ff9a28":"#ff4a2a":"rgba(232,224,200,0.8)",i.fillRect(_-5,L,3,1),i.fillRect(_+3,L,3,1),i.fillRect(_,L-5,1,3),i.fillRect(_,L+3,1,3)}var C=m.killT>0?"#ff3a1a":m.blockT>0?"#9aa4a8":m.hitT>0?"#ffffff":null;if(C){i.fillStyle=C;for(var P=m.killT>0?4:3,U=P;U<P+3;U++)i.fillRect(_-U,L-U,1,1),i.fillRect(_+U,L-U,1,1),i.fillRect(_-U,L+U,1,1),i.fillRect(_+U,L+U,1,1)}}function l(m){var _=m.p,L=Tt/2,E=Rf,C=34;m.hurtDirs.forEach(function(P){var U=P.ang-_.ang,M=Math.sin(U),x=-Math.cos(U),w=L+M*C,A=E+x*C;i.fillStyle="rgba(255,40,16,"+Math.min(.9,P.t).toFixed(3)+")",i.beginPath(),i.moveTo(w+M*9,A+x*9),i.lineTo(w-x*7,A+M*7),i.lineTo(w+x*7,A-M*7),i.closePath(),i.fill()})}function u(){var m=e.usePrompt();if(m){var _=Rf+14;if(m.verb){var L=Pe.default.textWidth(m.verb,1),E=13+L,C=(Tt-E)/2|0;i.fillStyle="rgba(0,0,0,0.55)",i.fillRect(C-3,_-3,E+6,13),i.fillStyle="#e8e0c8",i.fillRect(C,_-1,9,9),i.fillStyle="#14110d",i.fillRect(C+1,_,7,7),Pe.default.drawText(i,"E",C+3,_+1,{color:"#ffd23e"}),Pe.default.drawText(i,m.verb,C+13,_+1,{color:m.color,shadow:!0})}else{var P=Pe.default.textWidth(m.text,1);i.fillStyle="rgba(0,0,0,0.55)",i.fillRect((Tt-P)/2-4,_-3,P+8,13),Pe.default.drawText(i,m.text,Tt/2,_+1,{color:m.color,shadow:!0,center:!0})}}}function c(m,_){if(!(!t.goalMarker||!_)){var L=e.goalTarget();if(L){var E=m.p,C=Math.hypot(L.x-E.x,L.z-E.z);if(!(C<1.6)){var P={x:L.x,y:L.y,z:L.z},U=UM(_,P),M=m.time*2%1<.7?"#ffd23e":"#c89a20";if(i.fillStyle=M,i.beginPath(),U.inFront&&U.x>8&&U.x<Tt-8&&U.y>8&&U.y<Lt-8){var x=Math.round(U.x),w=Math.round(U.y)-8;i.moveTo(x,w-4),i.lineTo(x+4,w),i.lineTo(x,w+4),i.lineTo(x-4,w),i.closePath(),i.fill(),Pe.default.drawText(i,String(Math.round(C*2))+"M",x,w+7,{color:M,shadow:!0,center:!0})}else{var A=Math.atan2(L.z-E.z,L.x-E.x)-E.ang;A=Math.atan2(Math.sin(A),Math.cos(A));var S=A>0,I=S?Tt-6:6,D=40;i.moveTo(I+(S?4:-4),D),i.lineTo(I-(S?3:-3),D-5),i.lineTo(I-(S?3:-3),D+5),i.closePath(),i.fill(),Pe.default.drawText(i,"GOAL",S?Tt-12:12,D-2,{color:M,shadow:!0,right:S})}}}}}function h(m){var _=m.p;if(!(_.dead||_.hp>25))for(var L=.18+.14*Math.sin(m.time*5),E=0;E<6;E++)i.fillStyle="rgba(200,0,0,"+(L*(1-E/6)).toFixed(3)+")",i.fillRect(E*2,0,2,Lt),i.fillRect(Tt-E*2-2,0,2,Lt),i.fillRect(0,E*2,Tt,2),i.fillRect(0,Lt-E*2-2,Tt,2)}var f={imp:["AN IMP BURNED YOU DOWN.","TIP: STRAFE WITH A AND D TO SIDESTEP FIREBALLS."],gnasher:["A GNASHER CHEWED YOU UP.","TIP: BACK AWAY WHILE YOU SHOOT, OR JUMP UP WHERE IT CAN'T FOLLOW."],knight:["THE EMBER KNIGHT CRUSHED YOU.","TIP: KEEP YOUR DISTANCE AND BRING SHOTGUN SHELLS."],riley:["RILEY OUTPLAYED YOU.","TIP: WHEN HER VISOR FLASHES WHITE, SHE IS ABOUT TO SHOOT. MOVE!"],barrel:["A BARREL BLEW UP IN YOUR FACE.","TIP: SHOOT BARRELS FROM FAR AWAY, WHEN DEMONS ARE NEAR THEM."]};function p(m){var _=m.p;if(!(!_.dead||_.deadT<1)){var L=f[m.killer]||["YOU WERE OVERWHELMED.","TIP: FIGHT FROM HIGH GROUND SO DEMONS COME TO YOU ONE AT A TIME."];i.fillStyle="rgba(0,0,0,0.5)",i.fillRect(0,44,Tt,72),Pe.default.drawText(i,"YOU DIED",Tt/2,50,{scale:3,color:va,shadow:!0,center:!0}),Pe.default.drawText(i,L[0],Tt/2,72,{color:"#e8e0c8",shadow:!0,center:!0}),Pe.default.drawText(i,L[1],Tt/2,84,{color:"#8fe0a0",shadow:!0,center:!0}),_.deadT>1.2&&m.time%1<.7&&Pe.default.drawText(i,"CLICK OR PRESS ENTER TO TRY AGAIN",Tt/2,100,{color:"#f0d848",shadow:!0,center:!0})}}function g(m){var _=4;m.msgs.forEach(function(E){var C=DM(E.text,78);E.t<.4&&(i.globalAlpha=Math.max(0,E.t/.4)),C.forEach(function(P){Pe.default.drawText(i,P,4,_,{color:E.color||"#f0d848",shadow:!0}),_+=7}),i.globalAlpha=1,_+=1});var L=m.notice;L&&(i.globalAlpha=Math.min(1,L.t/.4),Pe.default.drawText(i,L.text,Tt/2,50,{scale:2,color:L.color,shadow:!0,center:!0}),i.globalAlpha=1)}function y(m){var _=m.boss;if(!(!_||_.state==="idle"||_.state==="dead")){var L=140,E=(Tt-L)/2,C=Lt-12,P=_.shieldT>0;Pe.default.drawText(i,P?"RILEY - SHIELDED":"RILEY",Tt/2,C-8,{color:P?"#ffd23e":"#6fe0ec",shadow:!0,center:!0}),i.fillStyle="#06141c",i.fillRect(E-1,C-1,L+2,6),i.fillStyle=P?"#ffd23e":"#3fd8c8",i.fillRect(E,C,Math.max(0,_.hp/_.maxHp)*L,4),i.fillStyle="#06141c",i.fillRect(E+L*.33,C,1,4),i.fillRect(E+L*.66,C,1,4)}}function v(m){i.fillStyle="rgba(0,0,0,0.8)",i.fillRect(0,0,Tt,Lt);for(var _=22,L=Lt-14,E=Math.min((Tt-16)/m.mw,(L-_)/m.mh),C=(Tt-m.mw*E)/2,P=_+(L-_-m.mh*E)/2,U=m.time*2%1<.6,M=0;M<m.mh;M++)for(var x=0;x<m.mw;x++){var w=M*m.mw+x,A=m.W.cells[w];if(m.seen[w]){var S=null;if(A===0){var I=m.W.floor[w];S="rgb("+(40+I*50|0)+","+(34+I*40|0)+","+(28+I*30|0)+")"}else A===6?S="#c8a030":A===11?S=m.doors[x+","+M].found?"#c8a030":"#6a655c":A===7?S="#ff3a2a":A===8?S="#4a7aff":A===9||A===10?S=U||A===10?"#58e068":"#1e5a26":S="#8a8478";i.fillStyle=S,i.fillRect(C+x*E,P+M*E,Math.max(1,E-.4),Math.max(1,E-.4))}}var D=e.goalTarget();if(D&&U){var k=C+D.x*E,Y=P+D.z*E;i.fillStyle="#ffd23e",i.fillRect(k-3,Y-3,7,1),i.fillRect(k-3,Y+3,7,1),i.fillRect(k-3,Y-3,1,7),i.fillRect(k+3,Y-3,1,7)}var j=m.p,se=C+j.x*E,ne=P+j.z*E,le=Math.cos(j.ang),ae=Math.sin(j.ang);i.fillStyle="#f8f4e0",i.beginPath(),i.moveTo(se+le*5,ne+ae*5),i.lineTo(se-le*3-ae*3,ne-ae*3+le*3),i.lineTo(se-le*3+ae*3,ne-ae*3-le*3),i.closePath(),i.fill(),Pe.default.drawText(i,m.L.name,6,4,{color:"#ff9a28",shadow:!0}),Pe.default.drawText(i,"TAB: CLOSE",Tt-6,4,{color:"#8a8478",right:!0}),Pe.default.drawText(i,"GOAL: "+e.objective(),6,12,{color:"#f0d848",shadow:!0});var we=m.stats;Pe.default.drawText(i,"KILLS "+we.kills+"/"+we.totalKills+"  ITEMS "+we.items+"/"+we.totalItems+"  SECRETS "+we.secrets+"/"+we.totalSecrets+"  TIME "+ds(m.time),Tt-6,12,{color:"#c8c0b0",right:!0}),Pe.default.drawText(i,"BRIGHTER FLOOR = HIGHER GROUND",6,Lt-9,{color:"#a8a090"})}return{draw:function(m,_){i.clearRect(0,0,Tt,NM);var L=m.p;L.dmgFlash>0&&(i.fillStyle="rgba(255,20,10,"+(L.dmgFlash*.8).toFixed(3)+")",i.fillRect(0,0,Tt,Lt)),L.bonusFlash>0&&(i.fillStyle="rgba(255,220,80,"+(L.bonusFlash*.7).toFixed(3)+")",i.fillRect(0,0,Tt,Lt)),h(m),_.map?v(m):!L.dead&&!_.menu&&(l(m),c(m,_.camera),o(m),u()),_.map||y(m),g(m),p(m),a(m)}}}function UM(i,e){var t=i.matrixWorldInverse.elements,n=i.projectionMatrix.elements,r=e.x,s=e.y,a=e.z,o=t[0]*r+t[4]*s+t[8]*a+t[12],l=t[1]*r+t[5]*s+t[9]*a+t[13],u=t[2]*r+t[6]*s+t[10]*a+t[14],c=n[0]*o+n[4]*l+n[8]*u+n[12],h=n[1]*o+n[5]*l+n[9]*u+n[13],f=n[3]*o+n[7]*l+n[11]*u+n[15];return f<=.01?{inFront:!1}:{inFront:!0,x:(c/f*.5+.5)*Tt,y:(1-(h/f*.5+.5))*Lt}}var Ei=If.default.SETTINGS,gt=If.default.MENU,Ut=Ei.v;Ut.invertY===void 0&&(Ut.invertY=!1);Ut.fov===void 0&&(Ut.fov=78);var _t=320,Gn=200,OM=168,Dm=document.getElementById("view"),hi=document.getElementById("hud");hi.width=_t;hi.height=Gn;var Ze=hi.getContext("2d");Ze.imageSmoothingEnabled=!1;var fu=/debug/.test(location.search),nt=Yf({levels:Br,rng:Jf((Date.now()&4294967295)>>>0),storage:(function(){try{return window.localStorage}catch{return null}})(),settings:Ut,saveSettings:function(){Ei.save()},onProgress:function(i,e){Ei.unlock(Math.min(i+1,Br.length-1)),FM=Ei.record?Ei.record(i,e):null}}),FM=null,zi=Am(Dm,{preserve:fu}),HM=Cm(Ze,nt,Ut),ei="title",ur=0,Gi=!1,_a=!1,wi=!1,Oo=!1;function Fo(){return Hr[Ut.difficulty]||Hr[1]}function Um(){_n.default.setVolume(Ut.volume/10),zi.camera.fov=Ut.fov,zi.camera.updateProjectionMatrix()}function Om(){var i=window.innerWidth,e=window.innerHeight,t=Math.min(i,e*1.6),n=t/1.6,r=(i-t)/2,s=(e-n)/2;hi.style.cssText="left:"+r+"px;top:"+s+"px;width:"+t+"px;height:"+n+"px";var a=Math.round(n*OM/Gn);Dm.style.cssText="left:"+r+"px;top:"+s+"px;width:"+t+"px;height:"+a+"px",zi.resize(Math.round(t),a)}window.addEventListener("resize",Om);Om();var du=nt.keys,ko=!1;function Fm(){for(var i in du)du[i]=!1;ko=!1,nt.setFire(!1)}document.addEventListener("keydown",function(i){if((["Tab","Space"].indexOf(i.code)>=0||i.code.slice(0,5)==="Arrow")&&i.preventDefault(),_n.default.init(),gt.isOpen()){_n.default.startMusic(),gt.key(i.code);return}if(!i.repeat){if(i.code==="Enter"||i.code==="NumpadEnter"){pu();return}if(ei!=="game"){i.code==="Space"&&pu();return}if(i.code==="Escape"&&Gi&&!wi){km();return}du[i.code]=!0;var e=nt.state();if(i.code==="Tab"&&(_a=!_a,e.usedMap=!0),i.code==="KeyM"){var t=_n.default.toggleMusic();e.msgs.push({text:"MUSIC "+(t?"ON":"OFF"),t:2})}(i.code==="ControlLeft"||i.code==="ControlRight")&&(ko=!0,nt.setFire(!0)),i.code==="Digit1"&&nt.switchWeapon("fist"),i.code==="Digit2"&&nt.switchWeapon("pistol"),i.code==="Digit3"&&nt.switchWeapon("shotgun"),i.code==="KeyQ"&&nt.quickSwitch()}});document.addEventListener("keyup",function(i){du[i.code]=!1,(i.code==="ControlLeft"||i.code==="ControlRight")&&(ko=!1,nt.setFire(!1))});window.addEventListener("blur",Fm);document.addEventListener("pointerlockchange",function(){wi=document.pointerLockElement===hi,Fm(),wi?(Oo=!1,ei==="game"&&gt.close(),!Gi&&ei==="game"&&kM()):ei==="game"&&Gi&&km()});document.addEventListener("pointerlockerror",function(){Oo=!0});function Ho(){try{var i=hi.requestPointerLock({unadjustedMovement:!0});i&&i.catch&&i.catch(function(){try{hi.requestPointerLock()}catch{Oo=!0}})}catch{Oo=!0}}function BM(){try{document.exitPointerLock()}catch{}}function Hm(i){var e=hi.getBoundingClientRect();return{x:(i.clientX-e.left)/e.width*_t,y:(i.clientY-e.top)/e.height*Gn}}document.addEventListener("mousemove",function(i){var e=nt.state();if(wi&&ei==="game"&&e&&!e.p.dead){var t=44e-5*Ut.sens;e.p.ang+=i.movementX*t,e.p.pitch-=i.movementY*t*(Ut.invertY?-1:1),e.p.pitch=Math.max(-1.3,Math.min(1.3,e.p.pitch));return}if(gt.isOpen()){var n=Hm(i);hi.style.cursor=gt.pointer(n.x,n.y)?"pointer":"default"}});hi.addEventListener("mousedown",function(i){if(_n.default.init(),_n.default.startMusic(),gt.isOpen()){var e=Hm(i);i.button===0&&gt.click(e.x,e.y);return}if(ei==="game"){var t=nt.state();if(!wi){gt.close(),Ho();return}if(t.p.dead){pu();return}i.button===0&&(ko=!0,nt.setFire(!0)),i.button===2&&(nt.keys.Space=!0);return}pu()});document.addEventListener("mouseup",function(i){i.button===0&&(ko=!1,nt.setFire(!1)),i.button===2&&(nt.keys.Space=!1)});hi.addEventListener("contextmenu",function(i){i.preventDefault()});hi.addEventListener("wheel",function(i){ei==="game"&&wi&&(i.preventDefault(),i.deltaY&&nt.cycleWeapon(i.deltaY>0?1:-1))},{passive:!1});var uu=!1;function kM(){Gi=!0}function Bm(i){nt.startLevel(i,!1),Gi=!1,_a=!1,ei="game",gt.close(),Ho()}function pu(){_n.default.init(),_n.default.startMusic();var i=nt.mode();if(i==="inter"){if(!uu&&ur<1.3){uu=!0;return}uu=!1,nt.onEnter(),nt.onEnter(),nt.mode()==="game"&&(Gi=wi)}else if(i==="victory")ur>1&&Pf();else if(i==="game"){var e=nt.state();e.p.dead?e.p.deadT>1.2&&(nt.retryLevel(),Gi=wi):wi||(gt.close(),Ho())}}function Pf(){nt.setMode("title"),ei="title",gt.open(Lf()),BM()}function km(){_a=!1,gt.open(WM()),_n.default.play("menu")}function Bo(i,e,t){for(var n=0;n<_t;n+=2){var r=Math.sin(n*.07+e*3+t)+Math.sin(n*.13-e*2.2),s=6+r*4;Ze.fillStyle=r>.7?"#ffd23e":r>-.3?"#ff7a18":"#a83010",Ze.fillRect(n,i-s,2,s+4)}}function zM(i,e){Ze.fillStyle="rgba(8,6,4,0.55)",Ze.fillRect(0,0,_t,Gn),Bo(Gn-6,e,0),Bo(Gn-2,e*1.3,2),Pe.default.drawText(Ze,"FIREBIRD",_t/2,10,{scale:4,color:"#e03828",shadow:"#401008",center:!0}),Pe.default.drawText(Ze,"FIREBIRD",_t/2-1,9,{scale:4,color:"#ff9a28",center:!0}),Pe.default.drawText(Ze,"3D",_t/2,34,{scale:5,color:"#ffd23e",shadow:"#803008",center:!0}),Pe.default.drawText(Ze,"EPISODE ONE: KNEE-DEEP IN THE ASHES",_t/2,64,{color:"#c8c0b0",center:!0}),Pe.default.drawText(Ze,"A NIX GAMES PRODUCTION BY PHOENIX",_t/2,72,{color:"#8a8478",center:!0})}function xa(i,e){Ze.fillStyle=ei==="game"?"rgba(4,3,2,0.8)":"rgba(8,6,4,0.7)",Ze.fillRect(0,0,_t,Gn),Ze.fillStyle="#5e2a10",Ze.fillRect(40,33,_t-80,1)}function Po(i){return i?"ON":"OFF"}function Lf(){var i=Ei.progress;return{drawBg:zM,scale:2,top:86,gap:13,descY:156,footerY:172,items:function(){var e=[];return i.unlocked>0&&e.push({label:"CONTINUE",action:function(){Bm(i.unlocked)},desc:function(){return"START "+Br[i.unlocked].name+" ON "+Fo().name+"."}}),e.push({label:"NEW GAME",action:function(){gt.push(zm(0))},desc:"START EPISODE ONE FROM THE BEGINNING."},{label:"LEVEL SELECT",action:function(){gt.push(GM())},desc:"REPLAY ANY LEVEL YOU HAVE REACHED."},{label:"OPTIONS",action:function(){gt.push(Gm())},desc:"MOUSE, VOLUME, FIELD OF VIEW, CROSSHAIR, TIPS AND DIFFICULTY."},{label:"CONTROLS",action:function(){gt.push(Vm())},desc:"EVERY KEY, ON ONE PAGE."}),e}}}function zm(i){var e=Hr.map(function(t,n){return{label:t.name,desc:t.desc,action:function(){Ut.difficulty=n,Ei.save(),Bm(i)}}});return e.push({label:"BACK",action:function(){gt.back()}}),{title:"DIFFICULTY",drawBg:xa,scale:2,top:54,gap:18,descY:146,sel:Ut.difficulty,items:e}}function GM(){var i=Br.map(function(e,t){var n=t<=Ei.progress.unlocked;return{label:n?e.name:e.name.split(":")[0]+": ???",disabled:function(){return!n},desc:"PAR "+ds(e.par)+".  STARTS WITH A PISTOL.",action:function(){gt.push(zm(t))}}});return i.push({label:"BACK",action:function(){gt.back()}}),{title:"LEVEL SELECT",drawBg:xa,top:46,gap:14,descY:142,items:i}}function Gm(){function i(t,n,r,s){return function(a){var o=Ut[t]+a*(s||1);Ut[t]=o>r?n:o<n?r:o,Ei.save(),Um()}}function e(t){return function(){Ut[t]=!Ut[t],Ei.save()}}return{title:"OPTIONS",drawBg:xa,top:40,gap:11,descY:158,items:[{label:"MOUSE SPEED",slider:[0,10,function(){return Ut.sens}],adjust:i("sens",1,10),desc:"HOW FAST THE VIEW TURNS. LEFT AND RIGHT TO CHANGE."},{label:"INVERT MOUSE Y",value:function(){return Po(Ut.invertY)},adjust:e("invertY"),desc:"PUSH THE MOUSE FORWARD TO LOOK DOWN INSTEAD OF UP."},{label:"FIELD OF VIEW",value:function(){return Ut.fov+" DEG"},adjust:i("fov",60,110,5),desc:"HOW WIDE YOU SEE. WIDER SHOWS MORE, NARROWER ZOOMS IN."},{label:"SOUND VOLUME",slider:[0,10,function(){return Ut.volume}],adjust:i("volume",0,10),desc:"LOUDNESS OF EVERYTHING."},{label:"MUSIC",value:function(){return Po(_n.default.isMusicOn())},adjust:function(){_n.default.setMusic(!_n.default.isMusicOn())},desc:"PRESS M DURING PLAY TO TOGGLE IT TOO."},{label:"CROSSHAIR",value:function(){return Po(Ut.crosshair)},adjust:e("crosshair"),desc:"A SMALL AIMING MARK. TURNS RED OVER A DEMON."},{label:"GOAL MARKER",value:function(){return Po(Ut.goalMarker)},adjust:e("goalMarker"),desc:"POINTS AT YOUR GOAL ONCE YOU HAVE SEEN IT."},{label:"TIPS",value:function(){return Po(Ut.tips)},adjust:function(){Ut.tips=!Ut.tips,Ut.tips&&(Ut.seenTips={}),Ei.save()},desc:"SHORT HINTS THE FIRST TIME SOMETHING NEW HAPPENS."},{label:"DIFFICULTY",value:function(){return Fo().name},adjust:i("difficulty",0,2),desc:function(){return Fo().desc}},{label:"BACK",action:function(){gt.back()}}]}}var VM=[["MOVE","W A S D   OR   ARROW KEYS"],["LOOK AND AIM","MOUSE (UP AND DOWN TOO)"],["FIRE","LEFT CLICK   OR   CTRL"],["JUMP","SPACE   OR   RIGHT CLICK"],["CROUCH","C"],["USE / OPEN","E"],["RUN","HOLD SHIFT"],["WEAPONS","1 2 3   OR   MOUSE WHEEL"],["LAST WEAPON","Q"],["MAP","TAB"],["PAUSE","ESC"]];function Vm(){return{title:"CONTROLS",drawBg:xa,top:170,gap:12,items:[{label:"BACK",action:function(){gt.back()}}],drawExtra:function(){VM.forEach(function(i,e){var t=40+e*11;Pe.default.drawText(Ze,i[0],140,t,{color:"#c8c0b0",right:!0}),Pe.default.drawText(Ze,i[1],152,t,{color:"#ffd23e"})})}}}function Im(i,e,t){return{title:i,drawBg:xa,scale:2,top:86,gap:18,sel:1,drawExtra:function(){Pe.default.drawText(Ze,e,_t/2,56,{color:"#a8a090",center:!0})},items:[{label:"YES",action:t},{label:"NO",action:function(){gt.back()}}]}}function WM(){return{title:"PAUSED",drawBg:xa,scale:2,top:64,gap:14,descY:144,footerY:176,footer:"ARROWS OR MOUSE: CHOOSE   ENTER OR CLICK: SELECT",items:[{label:function(){return nt.state().p.dead?"TRY AGAIN":"RESUME"},action:function(){nt.state().p.dead&&nt.retryLevel(),gt.close(),Ho()},desc:"BACK TO THE FIGHT."},{label:"RESTART LEVEL",desc:"START THIS LEVEL OVER WITH THE GEAR YOU BROUGHT IN.",action:function(){gt.push(Im("RESTART?","YOU WILL LOSE PROGRESS IN THIS LEVEL.",function(){nt.retryLevel(),gt.close(),Ho()}))}},{label:"OPTIONS",action:function(){gt.push(Gm())},desc:"MOUSE, VOLUME, FIELD OF VIEW AND MORE."},{label:"CONTROLS",action:function(){gt.push(Vm())},desc:"EVERY KEY, ON ONE PAGE."},{label:"QUIT TO TITLE",desc:"YOUR UNLOCKED LEVELS ARE SAVED.",action:function(){gt.push(Im("QUIT?","PROGRESS IN THIS LEVEL WILL BE LOST.",Pf))}}],drawExtra:function(){var i=nt.state(),e=i.stats;Pe.default.drawText(Ze,i.L.name+"   "+Fo().name,_t/2,38,{color:"#c8c0b0",center:!0}),Pe.default.drawText(Ze,"GOAL: "+nt.objective(),_t/2,48,{color:"#f0d848",center:!0}),Pe.default.drawText(Ze,"KILLS "+e.kills+"/"+e.totalKills+"   ITEMS "+e.items+"/"+e.totalItems+"   SECRETS "+e.secrets+"/"+e.totalSecrets+"   TIME "+ds(i.time),_t/2,160,{color:"#8a8478",center:!0})}}}function XM(i){var e=nt.state(),t=e.L.name.split(": ");Ze.fillStyle="rgba(4,3,2,0.6)",Ze.fillRect(0,0,_t,Gn),Pe.default.drawText(Ze,t[0],_t/2,22,{color:"#8a8478",center:!0}),Pe.default.drawText(Ze,t[1]||e.L.name,_t/2,32,{scale:3,color:"#ff9a28",shadow:"#401008",center:!0}),Pe.default.drawText(Ze,"GOAL",_t/2,60,{color:"#8a8478",center:!0}),Pe.default.drawText(Ze,nt.objective(),_t/2,69,{scale:2,color:"#f0d848",shadow:!0,center:!0}),Pe.default.drawText(Ze,"DIFFICULTY: "+Fo().name+"     PAR "+ds(e.L.par),_t/2,88,{color:"#a8a090",center:!0}),i%1<.7&&Pe.default.drawText(Ze,"CLICK TO BEGIN",_t/2,106,{scale:2,color:"#ffffff",shadow:!0,center:!0}),Oo&&Pe.default.drawText(Ze,"THE GAME NEEDS THE MOUSE. CLICK THE SCREEN AGAIN.",_t/2,124,{color:"#ff9a28",center:!0}),Pe.default.drawText(Ze,"WASD MOVE  MOUSE LOOK  CLICK FIRE  SPACE JUMP  E USE  TAB MAP  ESC PAUSE",_t/2,140,{color:"#8a8478",center:!0})}function qM(i){var e=nt.interStats();Ze.fillStyle="rgba(10,8,6,0.88)",Ze.fillRect(0,0,_t,Gn),Bo(Gn-6,i,1),Pe.default.drawText(Ze,e.name,_t/2,22,{scale:2,color:"#ff9a28",shadow:!0,center:!0}),Pe.default.drawText(Ze,"FINISHED!",_t/2,42,{scale:2,color:"#e8e0c8",shadow:!0,center:!0});var t=uu?1:Math.min(1,i/1.2);function n(s,a){return a?Math.round(s/a*100*t):100}if([["KILLS",e.kills,e.totalKills,70],["ITEMS",e.items,e.totalItems,90],["SECRETS",e.secrets,e.totalSecrets,110]].forEach(function(s){Pe.default.drawText(Ze,s[0],90,s[3],{scale:2,color:"#c8c0b0"});var a=n(s[1],s[2]);Pe.default.drawText(Ze,a+"%",240,s[3],{scale:2,color:a>=100?"#ffd23e":"#e03828",right:!0})}),Pe.default.drawText(Ze,"TIME "+ds(e.time),90,132,{scale:2,color:e.time<=e.par&&t>=1?"#ffd23e":"#c8c0b0"}),Pe.default.drawText(Ze,"PAR "+ds(e.par),240,132,{scale:2,color:"#c8c0b0",right:!0}),t>=1&&i%1<.7){var r=nt.levelIndex();Pe.default.drawText(Ze,r+1<Br.length?"CLICK OR PRESS ENTER FOR "+Br[r+1].name:"CLICK OR PRESS ENTER",_t/2,166,{color:"#f0d848",shadow:!0,center:!0})}}function YM(i){Ze.fillStyle="rgba(8,6,4,0.9)",Ze.fillRect(0,0,_t,Gn),Bo(Gn-8,i,0),Bo(Gn-4,i*1.3,2),Pe.default.drawText(Ze,"YOU WIN!",_t/2,30,{scale:4,color:"#ffd23e",shadow:"#803008",center:!0}),["THE DEMON THRONE LIES IN ASHES,","AND RILEY TAPS OUT WITH A GRIN:",`"SAME TIME TOMORROW? I'LL BE READY."`,"","THE FIREBIRD CANNOT BE KILLED.","IT ONLY BURNS BRIGHTER.","","THANKS FOR PLAYING, WARRIOR."].forEach(function(e,t){Pe.default.drawText(Ze,e,_t/2,74+t*10,{color:"#e8e0c8",center:!0})}),i>1&&i%1<.7&&Pe.default.drawText(Ze,"CLICK OR PRESS ENTER FOR THE TITLE SCREEN",_t/2,170,{color:"#f0d848",shadow:!0,center:!0})}function KM(i){var e=i.p;i.events.forEach(function(t){if(t.t==="sound"){if(t.local){_n.default.play(t.name);return}var n=t.x-e.x,r=t.z-e.z,s=Math.sqrt(n*n+r*r),a=Math.sin(Math.atan2(r,n)-e.ang)*.7;_n.default.play(t.name,s,a)}})}var Lo=1/60,No=0,Pm=performance.now(),Lm="",hu=[],Uo=!1,ZM=10;nt.startLevel(0,!1);var Nm=nt.state();function Wm(i){var e=Math.min(.1,(i-Pm)/1e3);Pm=i;var t=nt.mode(),n=ei==="title"?"title":t;n!==Lm&&(ur=0,Lm=n),ur+=e,hu.push(e),hu.length>240&&hu.shift();var r=nt.state();if(ei==="title"){var s=Nm.p,a=i/1e3;s.ang=a*.12,s.pitch=Math.sin(a*.3)*.15,s.x=5.5+Math.sin(a*.07)*.5,s.z=17.5,zi.render(Nm,a,e),gt.isOpen()||gt.open(Lf()),Ze.clearRect(0,0,_t,Gn),gt.render(Ze,ur)}else if(t==="game"||t==="inter"||t==="victory"){var o=Uo||t==="game"&&(!Gi||!wi||gt.isOpen())&&!fu;if(!o&&t==="game")for(No+=e;No>=Lo;){if(r.hitstop>0){r.hitstop-=Lo,No-=Lo;continue}if(nt.update(Lo),KM(r),No-=Lo,nt.mode()!=="game")break}else No=0;r=nt.state(),zi.render(r,Uo?ZM:i/1e3,o?0:e,Uo),r.events.length=0,HM.draw(r,{map:_a,menu:gt.isOpen(),camera:zi.camera}),t==="inter"?qM(ur):t==="victory"?YM(ur):Gi?gt.isOpen()?gt.render(Ze,ur):!wi&&!fu&&(Ze.fillStyle="rgba(0,0,0,0.5)",Ze.fillRect(0,70,_t,24),Pe.default.drawText(Ze,"CLICK TO RESUME",_t/2,76,{scale:2,color:"#f0d848",shadow:!0,center:!0})):XM(ur)}requestAnimationFrame(Wm)}Um();gt.open(Lf());requestAnimationFrame(Wm);var Do=null;pm().then(function(i){Do=i,i.loaded.length&&zi.setAssets(i),i.problems.length&&console.info("[assets] "+i.problems.join(" | ")),i.loaded.length&&console.info("[assets] using "+i.loaded.length+" authored assets")});fu&&(window.FIREBIRD2=Object.assign({},nt,{launch:function(i){nt.startLevel(i,!1),Gi=!0,ei="game",gt.close()},toTitle:Pf,setMap:function(i){_a=i},freeze:function(i){Uo=!!i},frozen:function(){return Uo},models:function(){return zi.debugModels()},assets:function(){return Do?{ready:Do.ready,loaded:Do.loaded.slice(),problems:Do.problems.slice()}:{ready:!1}},frameStats:function(){var i=hu.slice().sort(function(t,n){return t-n});function e(t){return i.length?i[Math.min(i.length-1,Math.floor(i.length*t))]*1e3:0}return{frames:i.length,p50:e(.5),p95:e(.95),p99:e(.99),info:zi.info().render}},renderInfo:function(){return zi.info()}}));})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
