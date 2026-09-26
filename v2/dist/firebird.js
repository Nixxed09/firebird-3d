(()=>{var Ed=Object.create;var Bu=Object.defineProperty;var wd=Object.getOwnPropertyDescriptor;var Ad=Object.getOwnPropertyNames;var Rd=Object.getPrototypeOf,Cd=Object.prototype.hasOwnProperty;var bs=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var Id=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Ad(e))!Cd.call(i,r)&&r!==t&&Bu(i,r,{get:()=>e[r],enumerable:!(n=wd(e,r))||n.enumerable});return i};var Ts=(i,e,t)=>(t=i!=null?Ed(Rd(i)):{},Id(e||!i||!i.__esModule?Bu(t,"default",{value:i,enumerable:!0}):t,i));var zu=bs((G_,ic)=>{"use strict";var Pd=(function(){function i(D){var N=parseInt(D.slice(1),16),H=N>>16&255,V=N>>8&255,j=N&255;return(4278190080|j<<16|V<<8|H)>>>0}function e(D,N,H){var V=document.createElement("canvas");V.width=D,V.height=N;var j=V.getContext("2d"),G=j.createImageData(D,N);return new Uint32Array(G.data.buffer).set(H),j.putImageData(G,0,0),{w:D,h:N,data:H,canvas:V}}function t(D,N,H){H=H||{};for(var V=!!H.mirror,j=D[0].length,G=0;G<D.length;G++)if(D[G].length!==j)throw new Error("sprite row "+G+" length "+D[G].length+" != "+j);for(var Z=V?j*2:j,le=D.length,ge=new Uint32Array(Z*le),fe=0;fe<le;fe++)for(var ve=D[fe],ye=0;ye<j;ye++){var Pe=N[ve[ye]];if(Pe){var He=i(Pe);ge[fe*Z+ye]=He,V&&(ge[fe*Z+(Z-1-ye)]=He)}}return e(Z,le,ge)}function n(D,N,H){var V=(D|0)*374761393+(N|0)*668265263+(H|0)*974711;return V=(V^V>>13)*1274126177,((V^V>>16)>>>0)%1e3/1e3}function r(D,N,H){var V=parseInt(D.slice(1),16),j=parseInt(N.slice(1),16),G=(V>>16&255)+((j>>16&255)-(V>>16&255))*H,Z=(V>>8&255)+((j>>8&255)-(V>>8&255))*H,le=(V&255)+((j&255)-(V&255))*H;return(4278190080|(le&255)<<16|(Z&255)<<8|G&255)>>>0}var s=64;function a(D){for(var N=new Uint32Array(s*s),H=0;H<s;H++)for(var V=0;V<s;V++)N[H*s+V]=D(V,H);return e(s,s,N)}function l(D,N,H,V){return a(function(j,G){var Z=G>>4,le=Z&1?16:0,ge=j+le>>5,fe=(G&15)>=14,ve=(j+le&31)>=30;if(fe||ve)return r(V,"#000000",n(j,G,D)*.4);var ye=n(j,G,D)*.5+n(ge*31,Z*7,D+9)*.5,Pe=(G&15)<2||(j+le&31)<2?.25:0;return r(N,H,ye*.65+Pe)})}function c(D,N,H){return a(function(V,j){var G=V>>4,Z=j>>4,le=n(G,Z,D)*6-3,ge=(V+le)%16<1.5||(j-le)%16<1.5,fe=n(V,j,D+3)*.45+n(G*5,Z*3,D+7)*.55;return ge?r(H,"#000000",.5):r(N,H,fe*.7)})}function h(D,N,H){return a(function(V,j){var G=V>>4&1,Z=(V&15)<1||(j&31)<1,le=((V&15)===3||(V&15)===12)&&((j&31)===4||(j&31)===27),ge=n(V,j,D)*.3+G*.12+j/s*.15;return Z?r(H,"#000000",.6):le?r(N,"#ffffff",.35):r(N,H,ge)})}function o(D){return a(function(N,H){var V="#4a5a52",j="#232c28";if(H<6||H>57)return r("#2a3430","#000000",.3+n(N,H,D)*.2);if(H>=28&&H<=33&&(N&31)>3&&(N&31)<28){var G=H===30||H===31?"#7dff9a":"#2f8a4a";return r(G,"#000000",n(N,H,D)*.2)}var Z=(N&31)<2,le=H>40&&H<54&&(H&3)<2&&(N&31)>6&&(N&31)<26;return Z?r(j,"#000000",.5):le?r("#1a211e","#000000",.3):r(V,j,n(N,H,D)*.5)})}function p(D){return a(function(N,H){var V=n(N,H,D)*.4+n(N>>2,H>>2,D+5)*.6,j=Math.sin(N*.22+Math.sin(H*.13+D)*2.1)+Math.sin(H*.18+N*.05);return j>1.45?r("#ff7a18","#ffd23e",n(N,H,D+2)):j>1.2?r("#8a1e08","#ff5a10",.5):r("#4a1410","#1c0605",V)})}function f(D){return a(function(N,H){var V="#5a5f68",j="#2a2d33",G=Math.abs(N-32)<1,Z=(H&15)<2,le=N<3||N>60||H<3||H>60;if(D&&H>8&&H<20&&!G){var ge=D==="red"?"#d02020":"#2050e0";return r(ge,"#000000",(H===9||H===19?.5:0)+n(N,H,40)*.2)}return G?r("#101216","#000000",.3):le?r(j,"#000000",.4):Z?r(j,V,.3):r(V,j,n(N,H,17)*.4+H/s*.2)})}function m(D){return a(function(N,H){var V="#4f4a42",j="#28241e",G=N>16&&N<48,Z=H>14&&H<50;if(G&&Z){var le=N>24&&N<40,ge=D?H>32&&H<46:H>18&&H<32;return le&&ge?r(D?"#30d040":"#d03030","#000000",n(N,H,3)*.25):r("#1c1a16","#000000",.3)}var fe=N<2||N>61||H<2||H>61;return fe?r(j,"#000000",.5):r(V,j,n(N,H,21)*.5)})}function v(D,N,H){return a(function(V,j){var G=(V>>4)+(j>>4)&1,Z=(V&15)<1||(j&15)<1,le=n(V,j,D)*.4;return Z?r(H,"#000000",.55):r(G?N:H,"#000000",le+G*.05)})}var w={o:"#1c0e06",b:"#9a5226",d:"#6b3413",c:"#e08a28",h:"#f7b24a",e:"#ffe14a",m:"#3a1006",t:"#f0e6c8",x:"#f0e6c8",r:"#c03018",f:"#ff8a18",g:"#ffd23e"},g=["......tt........",".......tt.......","........oooooooo","........obbbbbbb","........obbddddd","........obbeedbb","........obbbbbbb","........obdmtmbb","........obbmmbbb","........oooooobb","....oooooooooooo","...obbbbbbdccccc","..obbbo.obdccchc","..obbo..obdcchhc","..obbo..obddcccc",".obbo...obbdcccc",".obbo...obbddccc",".otto...obbbdddd",".ott....obbbbddd","........obbbbbbd","........oobbbbbb",".........obbo...",".........obbo...",".........obbo...",".........obbo...",".........oddo...",".........oddo...","........obddo...","........odddo...","......ottdddo...","......ooooooo...","................"],d=g.slice(0,21).concat(["........obbo....","........obbo....","........obbo....","........obbo....","........oddo....","........oddo....",".......obddo....",".......odddo....",".....ottdddo....",".....oooooo.....","................"]),x=["..gf..tt........",".gffg..tt.......",".offo...oooooooo",".otto...obbbbbbb",".obbo...obbddddd",".obbo...obeeedbb",".obbo...obbbbbbb",".obbo...obmmttbb","..obbo..obbmmbbb","..obbo..oooooobb","..obooooooooooo.","...obbbbbdccccc.","....obbobdccchc.","........obdcchhc","........obddcccc","........obbdcccc","........obbddccc","........obbbdddd","........obbbbddd","........obbbbbbd","........oobbbbbb",".........obbo...",".........obbo...",".........obbo...",".........obbo...",".........oddo...",".........oddo...","........obddo...","........odddo...","......ottdddo...","......ooooooo...","................"],U=g.slice();U[5]="........obbxxdbb",U[7]="........obmmmmbb";var A=["................","................","................","................","................","................","......tt........",".......tt.......","........oooooooo","........obbbbbbb","........obxxdddb","........obmmmmbb",".....oooooooobbb","...obbbbbbdccccb","..obbbboobdcccbb",".obbbo..obddccbb",".otto...obbddddb","........obbbbbdd",".......oobbbbbbb","......obbbbbbbdd","................","................","................","................","................","................","................","................","................","................","................","................"],I=["................","................","................","................","................","................","................","................","................","................","................","................","................","......tt........",".......ttoooooo.","......obbbbbbbbo",".....obbxxddmmbo","....obbbbdddbbbo","...obbddccccbbdd","..obbbbbdddbbbbb","................","................","................","................","................","................","................","................","................","................","................","................"],P=["................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","..........tt....","....oo....ott...","...obbdoooobbdo.","..obbddbbbdddbbo",".orrbdddddbbdrro",".orrrbbdddbrrro.","..orrrrrrrrrro..","...ooooooooooo..","................","................"];function O(D){var N={o:"#200a10",p:"#d06a8a",q:"#9a3d5e",k:"#e898a8",t:"#f2ead0",m:"#41101c",e:"#ffd23e",x:"#f2ead0",r:"#b02030"};if(D)for(var H in D)N[H]=D[H];return N}var b=["................","................","......oooooooooo",".....opppppppppp","....oppkpppppppp","....opppeepppppp","....oppppppppppp","....opmmmmmmmmmm","....opmtmtmtmtmt","....opmmmmmmmmmm","....optmtmtmtmtm","....opqqqqqqqqqq",".....ooooooooooo","...oppppqqpppppp","..opppppoqpppppp","..opppo.oqpppppp","..oppo..oqqppppp","..otto..oqqqpppp","..ott...oqqqqppp","........oqqqqqpp","........ooqqqqqp",".........oqqqo..",".........oqqqo..",".........oqqo...","........oqqqo...","........ottto...","........ooooo...","................","................","................","................","................"],_=b.slice(0,21).concat(["........oqqqo...","........oqqqo...","........oqqo....",".......oqqqo....",".......ottto....",".......ooooo....","................","................","................","................"]),T=["................","......oooooooooo",".....opppppppppp","....oppkpppppppp","....opppeepppppp","....opmmmmmmmmmm","....opmttmttmttm","....opmmmmmmmmmm","....opmmmmmmmmmm","....opmmmmmmmmmm","....opmttmttmttm","....opmmmmmmmmmm","....opqqqqqqqqqq","...oppppqqpppppp","..opppppoqpppppp","..opppo.oqpppppp","..oppo..oqqppppp","..otto..oqqqpppp","..ott...oqqqqppp","........oqqqqqpp","........ooqqqqqp",".........oqqqo..",".........oqqqo..",".........oqqo...","........oqqqo...","........ottto...","........ooooo...","................","................","................","................","................"],E=b.slice();E[5]="....opppxxpppppp";var y=["................","................","................","................","................","................","................","......oooooooooo",".....opppppppppp","....oppxxppppppp","....opmmmmmmmmmm","....opmtmtmtmtmt","....opqqqqqqqqqq","...opppppqqppppp","..oppppppqqquppp".replace("u","q"),"..oppoooqqqqqppp","..oo...oqqqqqqpp",".......ooqqqqqqp","........oqqqqoo.","................","................","................","................","................","................","................","................","................","................","................","................","................"],C=["................","................","................","................","................","................","................","................","................","................","................","................","................","................","......ooooooooo.",".....oppppppppqo","....opxxpmmttppo","...oppppqqqqppqo","..oqqppppppqqqoo","...ooooooooooo..","................","................","................","................","................","................","................","................","................","................","................","................"],L=["................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................",".......oo.......",".....ooppoo.tt..","...oqpppppqoot..","..oqqpmmttppqqo.",".orrqqppppqqrro.",".orrrqqqqqrrro..","..orrrrrrrrro...","...oooooooooo...","................","................"],z={o:"#06141c",h:"#1e8aa0",H:"#6fe0ec",s:"#d8fff8",v:"#ffd23e",V:"#fff6b0",c:"#157a8a",C:"#3fd8c8",g:"#ffd23e",Y:"#fff6b0"},K=["..........",".....ooooo","...oohhhhh","..ohhHHhhh","..ohHhhhhh",".ohhhhoooo",".ohhhosvvv",".ohhhosvVV",".ohhhossss",".ohhhossss",".ohhhhosss","..ohhhooss","...ooooooo",".....ooccc","...ooccccg","..occcccCg",".occcCcccg",".occcCccgY",".occcCccgY",".occ.Ccccg",".oso.occcg",".oso.occcc","..o..oCCCC",".....occcc",".....occo.",".....occo.",".....occo.",".....oCco.",".....occo.",".....occo.",".....occo.","....ogggo.","....ooooo.",".........."],ee=K.slice(0,24).concat(["....occo..","....occo..","...occo...","...oCco...","...occo...","..occo....","..occo....",".ogggo....",".ooooo....",".........."]),J=K.slice();J[13]=".o...ooccc",J[14]=".so.occccg",J[15]=".so.occcCg",J[16]=".oc.occccg",J[19]="..o..Ccccg",J[20]=".....occcg",J[21]=".....occcc";function k(D,N,H){return D.map(function(V,j){for(var G="",Z=0;Z<V.length;Z++)G+=V[Z]!=="."&&n(Z,j,H)<N?V[Z]:".";return G})}function $(D){var N={};for(var H in z)N[H]=z[H];if(D)for(var V in D)N[V]=D[V];return N}function X(D){var N={o:"#1a1008",f:"#e85818",F:"#ffa018",s:"#d8a06a",S:"#a8744a",w:"#f0ead8",k:"#28221a",m:"#5a1408",t:"#e8e0c8",r:"#c01818",c:"#b84a10",C:"#7e2e08",g:"#888078",x:"#301010"},H=D.gray?{s:"#9a9488",S:"#6e6a60"}:{};for(var V in H)N[V]=H[V];var j=[".osskwwkssss",".osskwkksss.".replace(".$",""),".ossskksssss"],G=[".osssookssss",".osskwkksss.",".ossskksssss"],Z=[".osssssossss",".ossooosssss",".osssssossss"],le=[".osskoskssss",".osssksossss",".osskoskssss"],ge=["..osssssssss","..osssmmmmmm","..osssssssss"],fe=["..osssssssss","..ossmmmmmmm","..osSmmsssss"],ve=["..osssmmmmmm","..ossmtttttt","..osssmmmmmm"],ye=["..ossmmmmmss","..osmmttmmss","..ossmmmmmss"],Pe=D.eyes==="squint"?G:D.eyes==="shut"?Z:D.eyes==="x"?le:j,He=D.mouth==="grim"?fe:D.mouth==="grin"?ve:D.mouth==="ouch"?ye:ge,W=[".....ffF....","...fFffffF..","..ffFfffffF.","..offffffff.",".offFffffffF",".offffffffff",".offosssssss",".oosssssssss","..ossssssSSS","..osssssssss",Pe[0],Pe[1],Pe[2],"..osssssssss","..ossssssSss","..osssssSSss","..ossssssSss","..osssssssss",He[0],He[1],He[2],"..osssssssss","...ossssssSS","...ossssssss","....oossssss","..ooccoosSSS".replace("..",".o"),".occcccooooo","occCcccccccc"];return W=W.map(function(xe){for(xe=xe.replace(/\$/g,""),xe.length>12&&(xe=xe.slice(0,12));xe.length<12;)xe+=".";return xe}),D.blood>=1&&(W[8]="..osrrsssSSS".slice(0,12),W[9]="..ossrssssss"),D.blood>=2&&(W[14]="..osrssssrss",W[15]="..orrssSSrss",W[21]="..osrsssssrs"),D.blood>=3&&(W[6]=".offosrrssss",W[13]="..orrsssrrss",W[22]="...orrsssrSS".slice(0,12)),t(W,N,{mirror:!0})}var me={o:"#0e0c0a",g:"#4a4e56",G:"#6a707c",d:"#26282e",s:"#d8a06a",S:"#a8744a",w:"#7a4a28",W:"#5a3418",y:"#c8b040",k:"#16181c"},he=["............","....oooo....","..oossssoo..",".ossssssss o".replace(" ","s"),".osssSsssss.","ossssSSssss.","osssssSssss.","ossssssssss.","osSSsssssss.","ossssssssss.",".ossssssss..",".ossssssss..","..ossssss...","..oswwwws...","..owwWWww...","..owWWWWw...","..owwwwww...","...oooooo..."].map(function(D){for(;D.length<12;)D+=".";return D.slice(0,12)}),ke=["...........ooo","..........ookk","..........ogkk","..........ogGd","..........ogGd",".........ooGgd",".........ogGGd",".........ogGGd",".........ogGGd",".........odddd",".........ogGGd",".........ogGGd",".........odddd","..........oggd","..........oggd","..........ogdd",".......ooooddd",".....oossssodd","....ossssssodd","...ossssSssood","..osssssSSssod","..ossssssSssod","..osSSssssssod","..ossssssssood","...osssssssso.","...osssssssso.","....oossssoo..","......oooo...."],Ge=[".........ooo","........ookk","........odkk","........odgd","........odgd","........odgd","........odgd","........odgd","........odgd","........odgd","........oddd",".......ooddd","......oWwwdd","......oWwwwd","......oWWwwd","......oWWwwd","......ooWWwd",".......ooWWd","........oddd","........oggd",".....oooogdd","...oosssoggd","..ossssssogd","..ossSsssogd",".osssSSssood",".ossssssssod",".osSSsssssod",".ossssssssod","..ossssssso.","..ossssssso.","...oosssoo..",".....oooo..."];function De(D,N,H){for(var V=new Uint32Array(D*N),j=(D-1)/2,G=(N-1)/2,Z=0;Z<N;Z++)for(var le=0;le<D;le++){var ge=(le-j)/(D/2),fe=(Z-G)/(N/2),ve=Math.sqrt(ge*ge+fe*fe),ye=H(ve,le,Z);ye&&(V[Z*D+le]=ye)}return e(D,N,V)}function ae(D){return De(12,12,function(N,H,V){var j=n(H,V,D)*.3;return N+j<.38?i("#fff8d0"):N+j<.68?i("#ffd23e"):N+j<.95?i("#ff7a18"):0})}function ce(D){return De(14,14,function(N,H,V){var j=n(H,V,D)*.3;return N+j<.38?i("#eaffd0"):N+j<.68?i("#8aff3e"):N+j<.95?i("#2fa818"):0})}function be(D,N,H){return De(D,D,function(V,j,G){var Z=n(j,G,N)*.55;return V+Z<.3*H?i("#fff8d0"):V+Z<.55*H?i("#ffd23e"):V+Z<.8*H?i("#ff7a18"):V+Z<1*H?i("#a83010"):0})}function Ve(D,N){return De(N?8:6,N?8:6,function(H,V,j){var G=n(V,j,D)*.4;return H+G<.5?i("#c8c4bc"):H+G<.9?i("#78746c"):0})}function Se(D,N){return De(N?8:6,N?8:6,function(H,V,j){var G=n(V,j,D)*.45;return H+G<.45?i("#e04020"):H+G<.9?i("#901810"):0})}function Ke(){for(var D=16,N=22,H=new Uint32Array(D*N),V=0;V<N;V++)for(var j=0;j<D;j++){var G=Math.abs((j-7.5)/7.5);if(!(G>1)){var Z=G>.88||V===0||V===N-1,le=1-G*G*.75,ge=V===4||V===16,fe=V>=8&&V<=12,ve=fe?"#c05010":"#5c554c";V>=1&&V<=2&&(ve="#3a352e");var ye=r(ve,"#000000",1-le+(ge?.35:0)+n(j,V,77)*.2);Z&&(ye=i("#16130f")),V===1&&G<.6&&n(j,V,8)>.4&&(ye=i("#ff9a28")),H[V*D+j]=ye}}return e(D,N,H)}function bt(D){for(var N=10,H=28,V=new Uint32Array(N*H),j=12;j<28;j++)for(var G=4;G<=5;G++)V[j*N+G]=i(j>24?"#3a2812":"#6a4a22");V[12*N+3]=i("#8a6432"),V[12*N+6]=i("#8a6432");for(var Z=0;Z<12;Z++)for(var le=0;le<N;le++){var ge=(le-4.5)/4.2,fe=(Z-8)/8,ve=Math.sqrt(ge*ge*1.6+fe*fe),ye=n(le,Z,D)*.5;ve+ye<.45?V[Z*N+le]=i("#fff0b0"):ve+ye<.75?V[Z*N+le]=i("#ffd23e"):ve+ye<1&&(V[Z*N+le]=i("#ff7a18"))}return e(N,H,V)}function Ye(D,N,H,V,j){for(var G=new Uint32Array(D*N),Z=0;Z<N;Z++)for(var le=0;le<D;le++){var ge=le===0||Z===0||le===D-1||Z===N-1,fe=ge?i("#14120e"):r(H,V,Z/N*.6+n(le,Z,5)*.15);G[Z*D+le]=fe}return j&&j(G,D,N),e(D,N,G)}function et(D){return function(N,H,V){for(var j=H>>1,G=V>>1,Z=i(D),le=-(V>>2);le<=V>>2;le++)N[(G+le)*H+j]=Z,N[(G+le)*H+j-1]=Z;for(var ge=-(H>>2);ge<=H>>2;ge++)N[G*H+j+ge]=Z,N[(G-1)*H+j+ge]=Z}}function mt(D){var N=["oooooooo","occccccb".replace("b","o"),"occwwcco","occwwcco","occcccco","occcccco","ocwwwwco","occcccco","occcccco","oooooooo"];return t(N,{o:"#14120e",c:D,w:"#f0ead8"})}function tt(){var D=30,N=10,H=new Uint32Array(D*N);function V(le,ge,fe){le>=0&&le<D&&ge>=0&&ge<N&&(H[ge*D+le]=i(fe))}for(var j=2;j<22;j++)V(j,3,"#3a3e46"),V(j,4,"#5a5f68"),V(j,5,"#26282e");for(var G=8;G<15;G++)V(G,6,"#5a3418");for(var Z=21;Z<29;Z++)V(Z,4+(Z-21>>1),"#5a3418"),V(Z,5+(Z-21>>1),"#7a4a28");return V(1,3,"#16130f"),V(1,4,"#16130f"),e(D,N,H)}function Tt(){return De(14,14,function(D,N,H){return D<.3?i("#fff8d0"):D<.6?i("#ffd23e"):D<.85?i("#ff7a18"):D<1?i("#a03008"):0})}function Wt(){return De(20,20,function(D,N,H){var V=Math.atan2(H-9.5,N-9.5),j=.55+.45*Math.abs(Math.sin(V*4));return D<.35*j?i("#fff8d0"):D<.7*j?i("#ffd23e"):D<1*j?i("#ff7a18"):0})}var Yt={A:[2,5,7,5,5],B:[6,5,6,5,6],C:[3,4,4,4,3],D:[6,5,5,5,6],E:[7,4,6,4,7],F:[7,4,6,4,4],G:[3,4,5,5,3],H:[5,5,7,5,5],I:[7,2,2,2,7],J:[1,1,1,5,2],K:[5,6,4,6,5],L:[4,4,4,4,7],M:[5,7,5,5,5],N:[6,5,5,5,5],O:[2,5,5,5,2],P:[6,5,6,4,4],Q:[2,5,5,6,3],R:[6,5,6,6,5],S:[3,4,2,1,6],T:[7,2,2,2,2],U:[5,5,5,5,7],V:[5,5,5,5,2],W:[5,5,5,7,5],X:[5,5,2,5,5],Y:[5,5,2,2,2],Z:[7,1,2,4,7],0:[7,5,5,5,7],1:[2,6,2,2,7],2:[6,1,2,4,7],3:[6,1,2,1,6],4:[5,5,7,1,1],5:[7,4,6,1,6],6:[3,4,6,5,2],7:[7,1,2,2,2],8:[7,5,7,5,7],9:[2,5,3,1,6]," ":[0,0,0,0,0],".":[0,0,0,0,2],",":[0,0,0,2,4],"!":[2,2,2,0,2],"?":[6,1,2,0,2],":":[0,2,0,2,0],"-":[0,0,7,0,0],"+":[0,2,7,2,0],"%":[5,1,2,4,5],"/":[1,1,2,4,4],"'":[2,2,0,0,0],_:[0,0,0,0,7],">":[4,2,1,2,4],"<":[1,2,4,2,1],'"':[5,5,0,0,0],"=":[0,7,0,7,0],"(":[1,2,2,2,1],")":[4,2,2,2,4],"*":[0,5,2,5,0],"#":[5,7,5,7,5],"^":[2,5,0,0,0],"&":[2,5,2,5,3]};function wt(D,N,H,V,j){j=j||{};var G=j.scale||1,Z=j.color||"#e8e0c8",le=j.shadow;if(N=String(N).toUpperCase(),j.center&&(H-=Math.floor(It(N,G)/2)),j.right&&(H-=It(N,G)),le){var ge=typeof le=="string"?le:"#000000";wt(D,N,H+G,V+G,{scale:G,color:ge})}D.fillStyle=Z;for(var fe=0;fe<N.length;fe++){for(var ve=Yt[N[fe]]||Yt["?"],ye=0;ye<5;ye++)for(var Pe=ve[ye],He=0;He<3;He++)Pe&4>>He&&D.fillRect(H+He*G,V+ye*G,G,G);H+=4*G}}function It(D,N){return String(D).length*4*(N||1)-(N||1)}var q={};q.tex={1:l(1,"#8a4232","#4a1e14","#2a1812"),2:c(2,"#8a8578","#4a463c"),3:h(3,"#5a5f68","#26282e"),4:o(4),5:p(5),6:f(null),7:f("red"),8:f("blue"),9:m(!1),10:m(!0),11:l(1,"#8a4232","#4a1e14","#2a1812")},q.floors={slab:v(11,"#4e4a42","#38342c"),tech:v(12,"#3c4440","#2a302c"),hell:a(function(D,N){var H=n(D,N,13)*.5+n(D>>2,N>>2,14)*.5,V=Math.sin(D*.19+Math.sin(N*.11)*2)+Math.sin(N*.15);return V>1.5?r("#ff7a18","#ffd23e",H):r("#3a100c","#180404",H)}),ceilDark:v(15,"#2e2b26","#201d18"),ceilTech:a(function(D,N){var H=(D&31)>12&&(D&31)<20&&(N&31)>12&&(N&31)<20;return H?r("#fff0c0","#c0a860",n(D,N,16)*.3):r("#2a2e2c","#1a1d1b",n(D,N,16)*.5)}),ceilHell:a(function(D,N){return r("#241010","#100404",n(D,N,17)*.6)})};var Dt=w,rt=O(null),F=O({p:"#c8502a",q:"#7e2412",k:"#e8804a",e:"#a0fFff".toLowerCase()});q.mobs={imp:{walkA:t(g,Dt,{mirror:!0}),walkB:t(d,Dt,{mirror:!0}),attack:t(x,Dt,{mirror:!0}),pain:t(U,Dt,{mirror:!0}),die1:t(A,Dt,{mirror:!0}),die2:t(I,Dt,{mirror:!0}),corpse:t(P,Dt,{mirror:!0})},gnasher:{walkA:t(b,rt,{mirror:!0}),walkB:t(_,rt,{mirror:!0}),attack:t(T,rt,{mirror:!0}),pain:t(E,rt,{mirror:!0}),die1:t(y,rt,{mirror:!0}),die2:t(C,rt,{mirror:!0}),corpse:t(L,rt,{mirror:!0})},knight:{walkA:t(b,F,{mirror:!0}),walkB:t(_,F,{mirror:!0}),attack:t(T,F,{mirror:!0}),pain:t(E,F,{mirror:!0}),die1:t(y,F,{mirror:!0}),die2:t(C,F,{mirror:!0}),corpse:t(L,F,{mirror:!0})},riley:{walkA:t(K,z,{mirror:!0}),walkB:t(ee,z,{mirror:!0}),attack:t(J,$({v:"#ffffff",V:"#ffffff",Y:"#ffffff",g:"#fff6b0"}),{mirror:!0}),pain:t(K,$({c:"#e8fffc",C:"#ffffff",h:"#9ef0f8"}),{mirror:!0}),shield:t(K,$({c:"#c89018",C:"#ffd23e",h:"#e0a020",H:"#fff0a0"}),{mirror:!0}),die1:t(k(K,.6,71),$({c:"#6fe0ec"}),{mirror:!0}),die2:t(k(K,.22,72),$({c:"#d8fff8",h:"#d8fff8"}),{mirror:!0}),corpse:null}},q.things={barrel:Ke(),torchA:bt(31),torchB:bt(87),stim:Ye(10,8,"#e8e4dc","#a8a49c",et("#d02020")),medkit:Ye(16,12,"#e8e4dc","#a8a49c",et("#d02020")),clip:Ye(10,8,"#7a7468","#4a463c",function(D,N,H){for(var V=2;V<N-2;V+=2)D[2*N+V]=i("#c8a030")}),shells:Ye(14,9,"#b03020","#5e1810",function(D,N,H){for(var V=2;V<N-2;V+=2)D[3*N+V]=i("#c8a030"),D[4*N+V]=i("#c8a030")}),armor:t(["...oooo.","..oggggo",".ogggggg",".oggGGgg",".ogggggg",".ogggggg","..ogggg o".replace(" ",""),"..oggggg","...ooooo"].map(function(D){for(;D.length<8;)D+=".";return D.slice(0,8)}),{o:"#14120e",g:"#3a7a30",G:"#6ab858"},{mirror:!0}),keyRed:mt("#d02020"),keyBlue:mt("#2050e0"),shotgunPickup:tt(),orb:Tt(),fireballA:ae(41),fireballB:ae(42),greenballA:ce(43),greenballB:ce(44),boom1:be(24,51,.7),boom2:be(28,52,1),boom3:be(28,53,1.25),puffA:Ve(61,!0),puffB:Ve(62,!1),bloodA:Se(63,!0),bloodB:Se(64,!1)},q.faces={ok:X({eyes:"open",mouth:"calm",blood:0}),hurt1:X({eyes:"open",mouth:"grim",blood:1}),hurt2:X({eyes:"squint",mouth:"grim",blood:2}),hurt3:X({eyes:"squint",mouth:"ouch",blood:3}),pain:X({eyes:"shut",mouth:"ouch",blood:1}),grin:X({eyes:"open",mouth:"grin",blood:0}),dead:X({eyes:"x",mouth:"ouch",blood:3,gray:!0})},q.guns={fist:t(he,me,{mirror:!0}),pistol:t(ke,me,{mirror:!0}),shotgun:t(Ge,me,{mirror:!0}),flash:Wt()};var M={};return q.secretTex=function(D){if(M[D])return M[D];for(var N=q.tex[D]||q.tex[1],H=new Uint32Array(N.data),V=0,j=0;j<H.length;j++){var G=H[j];V+=(G>>16&255)+(G>>8&255)+(G&255)}var Z=V/H.length/3>70;function le(ye){var Pe=H[ye],He=Pe>>16&255,W=Pe>>8&255,xe=Pe&255;Z?(He*=.35,W*=.35,xe*=.35):(He=He*.5+110,W=W*.5+95,xe=xe*.5+80),H[ye]=(4278190080|(He&255)<<16|(W&255)<<8|xe&255)>>>0}for(var ge=22,fe=6;fe<58;fe++)ge+=fe%7===0?1:fe%11===0?-1:0,le(fe*64+ge),le(fe*64+ge+1);for(var ve=0;ve<7;ve++)le((30+ve)*64+ge+2+ve);return M[D]={w:64,h:64,data:H},M[D]},q.drawText=wt,q.textWidth=It,q.hex=i,q})();typeof ic!="undefined"&&(ic.exports=Pd)});var ku=bs((W_,rc)=>{"use strict";var Ld=(function(){var i=null,e=null,t=null,n=null,r=!0,s=!1,a=.5;try{r=localStorage.getItem("firebird.music")!=="off"}catch{}function l(){if(i)return i.state==="suspended"&&i.resume(),!0;try{var y=window.AudioContext||window.webkitAudioContext;return y?(i=new y,e=i.createGain(),e.gain.value=a,e.connect(i.destination),t=i.createGain(),t.gain.value=.9,t.connect(e),n=i.createGain(),n.gain.value=.3,n.connect(e),!0):!1}catch{return!1}}function c(y){if(i){var C=i.currentTime+(y.delay||0),L=i.createOscillator();L.type=y.type||"square",L.frequency.setValueAtTime(y.f0,C),y.f1&&L.frequency.exponentialRampToValueAtTime(Math.max(20,y.f1),C+y.dur);var z=i.createGain(),K=y.gain||.3;z.gain.setValueAtTime(1e-4,C),z.gain.exponentialRampToValueAtTime(K,C+(y.attack||.008)),z.gain.exponentialRampToValueAtTime(1e-4,C+y.dur);var ee=t;if(y.pan&&i.createStereoPanner){var J=i.createStereoPanner();J.pan.value=Math.max(-1,Math.min(1,y.pan)),z.connect(J),J.connect(y.bus||t),ee=null}else z.connect(y.bus||t);if(y.wobble){var k=i.createOscillator(),$=i.createGain();k.frequency.value=y.wobble,$.gain.value=y.f0*.25,k.connect($),$.connect(L.frequency),k.start(C),k.stop(C+y.dur)}L.connect(z),L.start(C),L.stop(C+y.dur+.02)}}var h=null;function o(){if(h)return h;var y=i.sampleRate*1.5;h=i.createBuffer(1,y,i.sampleRate);for(var C=h.getChannelData(0),L=0;L<y;L++)C[L]=Math.random()*2-1;return h}function p(y){if(i){var C=i.currentTime+(y.delay||0),L=i.createBufferSource();L.buffer=o(),L.loop=!0;var z=i.createBiquadFilter();z.type=y.type||"lowpass",z.frequency.setValueAtTime(y.f0||1e3,C),y.f1&&z.frequency.exponentialRampToValueAtTime(Math.max(30,y.f1),C+y.dur),z.Q.value=y.q||.8;var K=i.createGain(),ee=y.gain||.3;if(K.gain.setValueAtTime(1e-4,C),K.gain.exponentialRampToValueAtTime(ee,C+(y.attack||.006)),K.gain.exponentialRampToValueAtTime(1e-4,C+y.dur),L.connect(z),z.connect(K),y.pan&&i.createStereoPanner){var J=i.createStereoPanner();J.pan.value=Math.max(-1,Math.min(1,y.pan)),K.connect(J),J.connect(t)}else K.connect(t);L.start(C),L.stop(C+y.dur+.02)}}var f={pistol:function(y,C){p({dur:.14,gain:.5*y,f0:2400,f1:300,pan:C}),c({f0:220,f1:90,dur:.08,type:"square",gain:.2*y,pan:C})},shotgun:function(y,C){p({dur:.38,gain:.8*y,f0:1600,f1:120,pan:C}),c({f0:130,f1:45,dur:.3,type:"sawtooth",gain:.35*y,pan:C})},pump:function(y,C){p({dur:.05,gain:.3*y,f0:900,type:"bandpass",q:2,delay:0,pan:C}),p({dur:.05,gain:.3*y,f0:700,type:"bandpass",q:2,delay:.13,pan:C})},punch:function(y,C){p({dur:.1,gain:.25*y,f0:500,f1:150,pan:C}),c({f0:90,f1:50,dur:.1,type:"sine",gain:.4*y,pan:C})},whiff:function(y,C){p({dur:.12,gain:.15*y,f0:600,f1:1400,type:"bandpass",q:1.5,pan:C})},doorOpen:function(y,C){p({dur:.5,gain:.22*y,f0:200,f1:500,pan:C}),c({f0:70,f1:130,dur:.5,type:"sawtooth",gain:.12*y,pan:C})},doorClose:function(y,C){p({dur:.4,gain:.2*y,f0:400,f1:150,pan:C}),c({f0:120,f1:60,dur:.4,type:"sawtooth",gain:.12*y,pan:C}),c({f0:60,dur:.08,type:"sine",gain:.3*y,delay:.38,pan:C})},locked:function(y,C){c({f0:150,dur:.09,type:"square",gain:.25*y,pan:C}),c({f0:110,dur:.12,type:"square",gain:.25*y,delay:.11,pan:C})},switchFlip:function(y,C){p({dur:.06,gain:.3*y,f0:1200,type:"bandpass",q:2,pan:C}),c({f0:90,f1:55,dur:.18,type:"square",gain:.3*y,delay:.05,pan:C})},pickup:function(y,C){c({f0:660,dur:.06,type:"square",gain:.15*y,pan:C}),c({f0:880,dur:.08,type:"square",gain:.15*y,delay:.06,pan:C})},health:function(y,C){c({f0:440,dur:.08,type:"sine",gain:.25*y,pan:C}),c({f0:587,dur:.12,type:"sine",gain:.25*y,delay:.07,pan:C})},keyPickup:function(y,C){[523,659,784,1047].forEach(function(L,z){c({f0:L,dur:.09,type:"square",gain:.16,delay:z*.07,pan:C})})},weaponUp:function(y,C){[180,260,380,520].forEach(function(L,z){c({f0:L,dur:.08,type:"sawtooth",gain:.18,delay:z*.05,pan:C})})},secret:function(y,C){[880,1108,1318,1760].forEach(function(L,z){c({f0:L,dur:.14,type:"triangle",gain:.2,delay:z*.09,pan:C})})},orb:function(y,C){[220,330,440,660,880].forEach(function(L,z){c({f0:L,dur:.2,type:"triangle",gain:.2,delay:z*.08,pan:C})})},impSight:function(y,C){c({f0:110,f1:55,dur:.5,type:"sawtooth",gain:.3*y,wobble:9,pan:C})},knightSight:function(y,C){c({f0:75,f1:35,dur:.9,type:"sawtooth",gain:.4*y,wobble:6,pan:C})},rileySight:function(y,C){[523,659,784,1047].forEach(function(L,z){c({f0:L,dur:.12,type:"triangle",gain:.22*y,delay:z*.07,pan:C})})},rileyTalk:function(y,C){c({f0:880,f1:1320,dur:.06,type:"square",gain:.08}),c({f0:1320,dur:.05,type:"square",gain:.07,delay:.07})},rileyShoot:function(y,C){c({f0:1400,f1:500,dur:.18,type:"triangle",gain:.25*y,pan:C})},rileyShield:function(y,C){c({f0:300,f1:900,dur:.3,type:"sine",gain:.3*y,wobble:18,pan:C})},rileyDerez:function(y,C){[1568,1319,1047,784,659,523,392].forEach(function(L,z){c({f0:L,dur:.14,type:"triangle",gain:.2,delay:z*.09,pan:C})})},impShoot:function(y,C){p({dur:.22,gain:.25*y,f0:400,f1:1200,type:"bandpass",q:1.5,pan:C})},fireExplode:function(y,C){p({dur:.3,gain:.4*y,f0:900,f1:100,pan:C})},barrelBoom:function(y,C){p({dur:.7,gain:.9*y,f0:1400,f1:60,pan:C}),c({f0:65,f1:28,dur:.6,type:"sine",gain:.6*y,pan:C})},enemyPain:function(y,C){c({f0:200,f1:120,dur:.13,type:"square",gain:.22*y,pan:C})},enemyDie:function(y,C){c({f0:170,f1:40,dur:.5,type:"sawtooth",gain:.3*y,wobble:12,pan:C}),p({dur:.25,gain:.2*y,f0:700,f1:150,delay:.05,pan:C})},playerPain:function(y,C){c({f0:170,f1:90,dur:.16,type:"square",gain:.3,pan:C}),p({dur:.1,gain:.15,f0:500,f1:200,pan:C})},playerDie:function(y,C){c({f0:220,f1:28,dur:1.3,type:"sawtooth",gain:.4,wobble:5,pan:C})},noAmmo:function(y,C){p({dur:.03,gain:.2,f0:1800,type:"bandpass",q:3,pan:C})},tally:function(y,C){c({f0:990,dur:.03,type:"square",gain:.12,pan:C})},menu:function(y,C){c({f0:520,dur:.05,type:"square",gain:.15,pan:C})},menuPick:function(y,C){c({f0:520,dur:.06,type:"square",gain:.18}),c({f0:780,dur:.09,type:"square",gain:.18,delay:.06})}};function m(y,C,L){if(!(!i||i.state==="suspended")){var z=f[y];if(z){var K=1/(1+(C||0)*.13);if(!(K<.04))try{z(K,L||0)}catch{}}}}var v=168,w=60/v/4,g=[164.81,164.81,146.83,130.81,123.47,130.81,146.83,155.56],d=null,x=0,U=0;function A(y,C,L){var z=i.createOscillator(),K=i.createOscillator();z.type="sawtooth",K.type="square",z.frequency.value=C,K.frequency.value=C*.5;var ee=i.createBiquadFilter();ee.type="lowpass",ee.frequency.setValueAtTime(L?1400:800,y),ee.frequency.exponentialRampToValueAtTime(200,y+w*1.8);var J=i.createGain();J.gain.setValueAtTime(1e-4,y),J.gain.exponentialRampToValueAtTime(L?.5:.34,y+.005),J.gain.exponentialRampToValueAtTime(1e-4,y+w*(L?1.9:.9)),z.connect(ee),K.connect(ee),ee.connect(J),J.connect(n),z.start(y),z.stop(y+w*2),K.start(y),K.stop(y+w*2)}function I(y,C){if(C==="kick"){var L=i.createOscillator();L.type="sine",L.frequency.setValueAtTime(110,y),L.frequency.exponentialRampToValueAtTime(40,y+.1);var z=i.createGain();z.gain.setValueAtTime(.5,y),z.gain.exponentialRampToValueAtTime(.001,y+.12),L.connect(z),z.connect(n),L.start(y),L.stop(y+.13)}else{var K=i.createBufferSource();K.buffer=o(),K.loop=!0;var ee=i.createBiquadFilter();ee.type="highpass",ee.frequency.value=C==="snare"?1800:6e3;var J=i.createGain();J.gain.setValueAtTime(C==="snare"?.3:.12,y),J.gain.exponentialRampToValueAtTime(.001,y+(C==="snare"?.09:.03)),K.connect(ee),ee.connect(J),J.connect(n),K.start(y),K.stop(y+.1)}}function P(){if(!(!s||!i)){for(;x<i.currentTime+.15;){var y=U%16,C=Math.floor(U/16),L=y>>2,z=y&3,K=82.41;z===0||z===2?A(x,K,!1):z===3&&A(x,g[(C*4+L)%g.length],!0),(y===0||y===8)&&I(x,"kick"),(y===4||y===12)&&I(x,"snare"),(y&1)===0&&I(x,"hat"),x+=w,U++}d=setTimeout(P,40)}}function O(){!i||!r||s||(s=!0,x=i.currentTime+.05,U=0,P())}function b(){s=!1,d&&(clearTimeout(d),d=null)}function _(y){r=!!y;try{localStorage.setItem("firebird.music",r?"on":"off")}catch{}return r?O():b(),r}function T(){return _(!r)}function E(y){a=Math.max(0,Math.min(1,y))*.72,e&&(e.gain.value=a)}return{init:l,play:m,startMusic:O,stopMusic:b,toggleMusic:T,setMusic:_,setVolume:E,isMusicOn:function(){return r}}})();typeof rc!="undefined"&&(rc.exports=Ld)});var Vu=bs((X_,sc)=>{"use strict";var Dd=(function(){var i="firebird.settings.v1",e="firebird.progress.v1",t={sens:5,volume:7,crosshair:!0,tips:!0,shake:!0,goalMarker:!0,difficulty:1,seenTips:{}};function n(){try{return window.localStorage}catch{return null}}function r(f){var m=n();if(!m)return null;try{var v=JSON.parse(m.getItem(f));return v&&typeof v=="object"?v:null}catch{return null}}function s(f,m){var v=n();if(v)try{v.setItem(f,JSON.stringify(m))}catch{}}var a={},l=r(i)||{};for(var c in t){var h=c in l&&l[c]!==null&&typeof l[c]==typeof t[c];a[c]=h?l[c]:t[c]}a.sens=Math.max(1,Math.min(10,a.sens|0)),a.volume=Math.max(0,Math.min(10,a.volume|0)),a.difficulty=Math.max(0,Math.min(2,a.difficulty|0));var o=r(e)||{};typeof o.unlocked!="number"&&(o.unlocked=0),(!o.best||typeof o.best!="object")&&(o.best={});var p=["PAR","KILLS","ITEMS","SECRETS"];return{v:a,save:function(){s(i,a)},progress:o,unlock:function(f){f>o.unlocked&&(o.unlocked=f,s(e,o))},record:function(f,m){var v=o.best[f]||{time:null,medals:{}},w=[];m.time<=m.par&&w.push("PAR"),m.kills>=m.totalKills&&w.push("KILLS"),m.items>=m.totalItems&&w.push("ITEMS"),m.secrets>=m.totalSecrets&&w.push("SECRETS");var g=w.filter(function(x){return!v.medals[x]}),d=v.time===null||m.time<v.time;return d&&(v.time=Math.floor(m.time)),w.forEach(function(x){v.medals[x]=!0}),o.best[f]=v,s(e,o),{newBest:d,medals:w,fresh:g}},best:function(f){return o.best[f]||null},MEDALS:p}})(),Nd=(function(){var i=[],e=320,t=200;function n(){return i[i.length-1]||null}function r(_){return typeof _=="function"?_():_}function s(_){return r(_.items)||[]}function a(_){return _&&!(_.disabled&&_.disabled())}function l(_,T,E){for(var y=s(_),C=y.length,L=0;L<C;L++){var z=((T+L*E)%C+C)%C;if(a(y[z]))return z}return 0}function c(_){return{screen:_,sel:l(_,_.sel||0,1),hover:-1}}function h(_){i=[c(_)]}function o(_){i.push(c(_)),SND.play("menu")}function p(_){i[i.length-1]=c(_)}function f(){i=[]}function m(){return i.length>0}function v(){if(i.length>1)return i.pop(),SND.play("menu"),!0;var _=n();return _&&_.screen.onBack?(_.screen.onBack(),!0):!1}function w(_){var T=n(),E=s(T.screen).length;E&&(T.sel=l(T.screen,T.sel+_,_),SND.play("menu"))}function g(_,T){a(_)&&(_.adjust?(_.adjust(T||1),SND.play("menu")):_.action&&(SND.play("menuPick"),_.action()))}function d(_){var T=n();if(!T)return!1;var E=s(T.screen),y=E[T.sel];switch(_){case"ArrowUp":case"KeyW":return w(-1),!0;case"ArrowDown":case"KeyS":case"Tab":return w(1),!0;case"ArrowLeft":case"KeyA":return y&&y.adjust&&g(y,-1),!0;case"ArrowRight":case"KeyD":return y&&y.adjust&&g(y,1),!0;case"Enter":case"NumpadEnter":case"Space":return g(y,1),!0;case"Escape":case"Backspace":return v()}return!1}function x(_){var T=_.scale||1;return{s:T,top:_.top||60,gap:_.gap||(T===1?12:14),x0:_.x0||56,x1:_.x1||264,rowH:5*T+5}}function U(_,T,E){for(var y=x(_),C=s(_),L=0;L<C.length;L++){var z=y.top+L*y.gap-3;if(E>=z&&E<z+y.rowH+1&&T>=y.x0-8&&T<=y.x1+8)return L}return-1}function A(_,T){var E=n();if(!E)return!1;var y=U(E.screen,_,T);return E.hover=y,y>=0&&a(s(E.screen)[y])&&y!==E.sel&&(E.sel=y,SND.play("menu")),y>=0&&a(s(E.screen)[y])}function I(_,T){var E=n();if(E){var y=U(E.screen,_,T);if(!(y<0)){var C=s(E.screen)[y];if(a(C)){E.sel=y;var L=x(E.screen),z=C.adjust&&_<L.x1-44&&_>(L.x0+L.x1)/2?-1:1;g(C,z)}}}}function P(_,T){for(var E=String(_).split(" "),y=[],C="",L=0;L<E.length;L++){var z=C?C+" "+E[L]:E[L];z.length>T&&C?(y.push(C),C=E[L]):C=z}return C&&y.push(C),y}function O(_,T,E,y,C){for(var L=y.slider[0],z=y.slider[1],K=y.slider[2](),ee=z-L,J=4,k=1,$=ee*(J+k)-k,X=T-$,me=0;me<ee;me++)_.fillStyle=me<K-L?C?"#ffd23e":"#e03828":"#2e2a24",_.fillRect(X+me*(J+k),E,J,5);ART.drawText(_,String(K),X-6,E,{color:C?"#ffd23e":"#8a8478",right:!0})}function b(_,T){var E=n();if(E){var y=E.screen,C=x(y),L=s(y);y.drawBg&&y.drawBg(_,T),y.title&&ART.drawText(_,r(y.title),e/2,y.titleY||14,{scale:3,color:"#ff9a28",shadow:"#401008",center:!0}),y.drawExtra&&y.drawExtra(_,T);for(var z=0;z<L.length;z++){var K=L[z],ee=C.top+z*C.gap,J=z===E.sel,k=a(K),$=r(K.label);J&&(_.fillStyle="rgba(255,110,24,0.16)",_.fillRect(C.x0-8,ee-3,C.x1-C.x0+16,C.rowH),_.fillStyle="#ff7a18",_.fillRect(C.x0-8,ee-3,2,C.rowH),T%.8<.55&&ART.drawText(_,">",C.x0-4,ee+(C.s-1)*2,{color:"#ffd23e"}));var X=k?J?"#ffd23e":"#c8c0b0":"#4a463c",me=K.value||K.slider;if(me)if(ART.drawText(_,$,C.x0+4,ee,{scale:C.s,color:X,shadow:k}),K.slider)O(_,C.x1,ee+(C.s-1)*2,K,J);else{var he=r(K.value);J&&K.adjust&&(he="< "+he+" >"),ART.drawText(_,he,C.x1,ee,{scale:C.s,color:J?"#ffd23e":"#e03828",right:!0})}else ART.drawText(_,$,y.alignLeft?C.x0+4:e/2,ee,{scale:C.s,color:X,shadow:k,center:!y.alignLeft})}var ke=L[E.sel],Ge=ke&&a(ke)?r(ke.desc):null;if(Ge)for(var De=P(Ge,70),ae=y.descY||168,ce=0;ce<De.length;ce++)ART.drawText(_,De[ce],e/2,ae+ce*8,{color:"#a8a090",center:!0});var be=y.footer===void 0?"ARROWS OR MOUSE: CHOOSE   ENTER: SELECT   ESC: BACK":r(y.footer);be&&ART.drawText(_,be,e/2,y.footerY||180,{color:"#5e584e",center:!0})}}return{open:h,push:o,replace:p,close:f,back:v,isOpen:m,key:d,pointer:A,click:I,render:b,wrap:P,current:function(){var _=n();return _?_.screen:null},selected:function(){var _=n();return _?s(_.screen)[_.sel]:null},depth:function(){return i.length}}})();typeof sc!="undefined"&&(sc.exports={SETTINGS:Dd,MENU:Nd})});var Gu=bs((Y_,ac)=>{"use strict";var Ud=(function(){var i="firebird.riley.v1",e=3;function t(){return{shots:{fist:0,pistol:0,shotgun:0},hits:0,fireDistSum:0,fireDistN:0,strafeL:0,strafeR:0,stillT:0,seenT:0,hideT:0,longestHide:0,said:{}}}function n(T,E){E.los?(T.seenT+=E.dt,T.hideT=0,E.strafe<0?T.strafeL+=E.dt:E.strafe>0&&(T.strafeR+=E.dt),E.moving||(T.stillT+=E.dt)):(T.hideT+=E.dt,T.hideT>T.longestHide&&(T.longestHide=T.hideT))}function r(T,E,y){T.shots[E]=(T.shots[E]||0)+1,T.fireDistSum+=y,T.fireDistN++}function s(T){return T.shots.fist+T.shots.pistol+T.shots.shotgun}function a(T){var E=null,y=0;for(var C in T.shots)T.shots[C]>y&&(y=T.shots[C],E=C);return y>=5?E:null}function l(T){return T.fireDistN?T.fireDistSum/T.fireDistN:0}function c(T){return T.fireDistN<5?0:m((5-l(T))/3)}function h(T){return T.fireDistN<5?0:m((l(T)-6)/4)}function o(T){return T.seenT<4?0:m((T.stillT/T.seenT-.35)/.4)}function p(T){return T.strafeR>=T.strafeL?1:-1}function f(T){var E=T.strafeL+T.strafeR;return E<3?0:m((Math.max(T.strafeL,T.strafeR)/E-.55)/.3)}function m(T){return T<0?0:T>1?1:T}function v(T){var E=[];return T.los?(T.cool.volley<=0&&E.push("volley"),T.cool.lead<=0&&E.push("lead"),T.dist<6&&E.push("backoff"),T.dist>3&&E.push("close"),E.push("flank")):E.push("seek"),T.phase>=2&&T.impsAlive<2&&T.cool.summon<=0&&E.push("summon"),T.phase>=2&&T.los&&T.dist<7&&T.cool.shield<=0&&E.push("shield"),E}function w(T,E,y){var C=0,L=null;switch(T){case"volley":C=1+(y.phase>=3?.4:0);break;case"lead":C=.35+f(E)*1.6,f(E)>.4&&(L="strafe");break;case"backoff":C=.2+c(E)*1.6+(y.playerWeapon==="shotgun"&&y.dist<4?.8:0),c(E)>.4&&(L="rusher");break;case"close":C=.3+h(E)*1.3+o(E)*1.2,o(E)>.4?L="camper":h(E)>.4&&(L="sniper");break;case"flank":C=.45+(y.phase>=2?.35:0)+f(E)*.4;break;case"seek":C=1,E.hideT>3&&(L="hider");break;case"summon":C=.9;break;case"shield":C=y.playerWeapon==="shotgun"?1.4:.25,y.playerWeapon==="shotgun"&&E.shots.shotgun>=6&&(L="shotgun");break}return{move:T,score:C,why:L}}function g(T,E,y,C){if(C=C||Math.random,!T.length)return null;var L=T.map(function(J){return w(J,E,y)}),z=0;L.forEach(function(J){J.w=J.score*J.score,z+=J.w});for(var K=C()*z,ee=0;ee<L.length;ee++)if(K-=L[ee].w,K<=0)return L[ee];return L[L.length-1]}var d={fist:"FISTS",pistol:"PISTOL",shotgun:"SHOTGUN"};function x(T,E){if(!E||T.said[E])return null;var y=null;switch(E){case"strafe":y="YOU ALWAYS DODGE "+(p(T)<0?"LEFT":"RIGHT")+". I'M AIMING THERE NOW.";break;case"rusher":y="YOU LIKE IT UP CLOSE. I'LL KEEP MY DISTANCE.";break;case"sniper":y="YOU KEEP YOUR DISTANCE. SO I'M COMING TO YOU.";break;case"camper":y="YOU STAND STILL A LOT. THAT MAKES YOU EASY TO FIND.";break;case"hider":y="HIDING? I CAN FIND YOU. I KNOW THIS ARENA.";break;case"shotgun":y=T.shots.shotgun+" SHOTGUN BLASTS SO FAR. SHIELD UP!";break}return y&&(T.said[E]=!0),y}function U(T,E,y){switch(y=y||{},T){case"intro":return y.memory&&y.memory.lastStyle?"BACK AGAIN! LAST TIME "+y.memory.lastStyle+".":y.memory?"BACK AGAIN! ROUND "+(y.memory.fights+1)+". LET'S GO!":"HI! I'M RILEY. I LEARN HOW YOU PLAY. READY?";case"ease":return"I'M GOING A LITTLE EASIER THIS TIME. JUST A LITTLE.";case"studied":return"YOU BEAT ME "+y.wins+(y.wins===1?" TIME":" TIMES")+". I'VE BEEN PRACTISING.";case"phase2":return"OKAY. I'VE BEEN WATCHING YOU. MY TURN.";case"phase3":return"ALRIGHT, NO MORE HOLDING BACK!";case"summon":return"LITTLE HELP, FRIENDS?";case"friendlyFire":return"HEY! WATCH WHERE YOU THROW THOSE.";case"impsTurned":return"YOU GOT MY IMPS FIGHTING ME? SMART.";case"playerDied":{var C=A(E);return"GOOD FIGHT! YOU HIT ME "+E.hits+(E.hits===1?" TIME":" TIMES")+(C!==null?", "+C+"% ACCURACY":"")+". AGAIN?"}case"defeated":{var L=a(E);return"OKAY, YOU WIN! "+E.hits+" HITS"+(L?" WITH MOSTLY THE "+d[L]:"")+". NICE."}}return null}function A(T){var E=s(T);return E<5?null:Math.min(100,Math.round(T.hits/E*100))}function I(T){var E=a(T);return c(T)>.5&&E?"YOU RUSHED ME WITH THE "+d[E]:h(T)>.5?"YOU FOUGHT ME FROM FAR AWAY":T.longestHide>6?"YOU HID FOR "+Math.round(T.longestHide)+" SECONDS":f(T)>.5?"YOU KEPT DODGING "+(p(T)<0?"LEFT":"RIGHT"):E?"YOU USED THE "+d[E]+" THE MOST":null}function P(T){var E={fights:0,wins:0,lossStreak:0,ease:0,lastStyle:null};try{var y=T&&T.getItem(i);if(y){var C=JSON.parse(y);for(var L in E)C[L]!==void 0&&(E[L]=C[L])}}catch{}return E.ease=Math.max(0,Math.min(e,E.ease|0)),E}function O(T,E){try{T&&T.setItem(i,JSON.stringify(E))}catch{}}function b(T,E,y){return T.fights++,T.lastStyle=I(E),y?(T.wins++,T.lossStreak=0,T.ease=0):(T.lossStreak++,T.ease=Math.min(e,T.lossStreak)),T}function _(T){var E=T.ease,y=T.wins>0&&E===0;return{hpScale:1-.08*E,dmgScale:1-.1*E,coolScale:(1+.12*E)*(y?.9:1),practised:y}}return{MAX_EASE:e,newProfile:t,observe:n,noteShot:r,favWeapon:a,rusher:c,sniper:h,camper:o,strafeSide:p,strafeHabit:f,accuracy:A,legalMoves:v,scoreMove:w,choose:g,insight:x,line:U,describeStyle:I,recall:P,save:O,settle:b,tuning:_}})();typeof ac!="undefined"&&(ac.exports=Ud)});var Qu=bs(($_,cc)=>{"use strict";var As=[{name:"E1M1: ASH GATES",floor:"slab",ceil:"ceilDark",par:75,playerAngle:0,map:["#######################X######","####################..t.t....#","####################.........#","####################..i..+...#","####################....A....#","####################.........#","#######################U######","##....................t.t...##","##.t......%%......%%........##","##u...g......i..............##","##.t.......h.....g..........##","##..........................##","####################D#########","###*Pa#########....t.t......##","####S##########.....i.....o.##","##b......######..........io.##","##.......######......h......##","##..p....D........2.........##","##.......######..o..........##","##.......######.t.........t.##","##...h...#####################","##############################"]},{name:"E1M2: THE FURNACE",floor:"tech",ceil:"ceilTech",par:120,playerAngle:-Math.PI/2,map:["###############X################","############..t.t...#...########","############g.......#*PA########","############...+...g#...########","###############R######S#########","########......t.t.......########","########................########","########......b.........########","#......#.i.T........T...#o....o#","#......D................#......#","#..i...#................D..o...#","#......#....g...........#....i.#","#t.t.g.#...T........T...#.o..o.#","#r.a...#...i............#..g...#","########................#.a..h.#","###############..###############","############.b....h.############","############...p....############","############........############","############t......t############","################################"]},{name:"E1M3: DEMON THRONE",floor:"hell",ceil:"ceilHell",par:150,playerAngle:-Math.PI/2,map:["HHHHHHHHHHHHHHHXHHHHHHHHHHHHHHHH","HHHHHHHHHHHHH.t.t..HHHHHHHHHHHHH","HHHHHHHHHHHHH..+...HHHHHHHHHHHHH","HHHHHHHHHHHHHHHRHHHHHHHHHHHHHHHH","HHHHHHt.......t.t........tHHHHHH","HHHHHH.i................i.HHHHHH","HHHHHH..o..............o.tH....H","HH...H....................D..g.H","HH*PAS.........K.........tH.r..H","HH...H....g.........g.....H....H","HHHHHH.a................b.HHHHHH","HHHHHH...i..........i.....HHHHHH","HHHHHHt..................tHHHHHH","HHHHHH...a..h......+..b...HHHHHH","HHHHHH....................HHHHHH","HHHHHHHHHHHHHHHDHHHHHHHHHHHHHHHH","HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH","HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH","HHHHHHHHHHHHHi...iHHHHHHHHHHHHHH","HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH","HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH","HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH","HHHHHHHHHHHt........tHHHHHHHHHHH","HHHHHHHHHHH...b..a...HHHHHHHHHHH","HHHHHHHHHHH....p.....HHHHHHHHHHH","HHHHHHHHHHH..........HHHHHHHHHHH","HHHHHHHHHHHt........tHHHHHHHHHHH","HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH"]},{name:"E1M4: RILEY'S ARENA",floor:"tech",ceil:"ceilTech",par:240,playerAngle:-Math.PI/2,map:["MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMt........................tMMM","MMM..h..........Y.........h..MMM","MMM..........................MMM","MMM....TT..............TT....MMM","MMM....TT....o....o....TT....MMM","MMM..........................MMM","MMM.a......................a.MMM","MMM....TT..............TT....MMM","MMM....TT.......+......TT....MMM","MMM..........................MMM","MMMt.......o........o.......tMMM","MMMMMMMMMMMMMMMUMMMMMMMMMMMMMMMM","TTTTTTTTTTTTTT...TTTTTTTTTTTTTTT","TTTTTTTTTTTTTTt.tTTTTTTTTTTTTTTT","TTi.....o.......o.....iTTTTTTTTT","TT.....................T..g...TT","TT...g.............g..tTt....tTT","TT.......MM...MM.......D....u.TT","TT..b....MM.h.MM....a.tT.a..h.TT","TT.....................Tt....tTT","TT.................o...T..i...TT","TT.....................TTTTTTTTT","TTTTTTTTTTTTTTTDTTTTTTTTTTTTTTTT","TTTTTTTTTTt.........tTTTTTTTTTTT","TTTTTTTTTT..b..2..a..TTTTTTTTTTT","TTTTTTPA*S...........TTTTTTTTTTT","TTTTTTTTTT.....p.....TTTTTTTTTTT","TTTTTTTTTTt...h.....tTTTTTTTTTTT","TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT"]}];(function(){for(var i=0;i<As.length;i++){for(var e=As[i].map,t=e[0].length,n=0,r=0;r<e.length;r++){if(e[r].length!==t)throw new Error(As[i].name+" row "+r+" width "+e[r].length+" != "+t);for(var s=0;s<t;s++)e[r][s]==="p"&&n++}if(n!==1)throw new Error(As[i].name+" has "+n+" player starts")}})();typeof cc!="undefined"&&(cc.exports=As)});var Re=Ts(zu(),1),un=Ts(ku(),1);window.ART=Re.default;window.SND=un.default;var Uu=Ts(Vu(),1);var Xt=Ts(Gu(),1);var Od={"#":1,"%":2,M:3,T:4,H:5,D:6,R:7,U:8,X:9,S:11},ai={6:!0,7:!0,8:!0,11:!0},Wu=.25,Fd=2,Pn=.3,oc=.55;function qu(i){return i>="0"&&i<="9"?(i.charCodeAt(0)-48)*Wu:i>="a"&&i<="z"?(i.charCodeAt(0)-87)*Wu:0}function Xu(i){for(var e=i.map,t=e[0].length,n=e.length,r={mw:t,mh:n,cells:new Uint8Array(t*n),floor:new Float32Array(t*n),ceil:new Float32Array(t*n),doors:{},lifts:[]},s=i.ceilHeight||Fd,a=0;a<n;a++)for(var l=0;l<t;l++){var c=e[a][l],h=a*t+l,o=Od[c]||0;r.cells[h]=o,r.floor[h]=i.heights?qu(i.heights[a][l]):0,r.ceil[h]=i.ceilings&&i.ceilings[a][l]!=="."?qu(i.ceilings[a][l]):s,r.ceil[h]<r.floor[h]+1&&(r.ceil[h]=r.floor[h]+1),ai[o]&&(r.doors[l+","+a]={x:l,z:a,open:0,state:"closed",timer:0,locked:o===7?"red":o===8?"blue":null,secret:o===11,found:!1,used:!1}),c==="L"&&r.lifts.push({x:l,z:a,top:r.floor[h],bottom:0,pos:0,state:"down",wait:0})}for(var p in r.doors){var f=r.doors[p],m=1/0,v=0;Es(r,f.x,f.z).forEach(function(g){r.cells[g.i]===0&&(m=Math.min(m,r.floor[g.i]),v=Math.max(v,r.ceil[g.i]))});var w=f.z*t+f.x;r.floor[w]=m===1/0?0:m,r.ceil[w]=f.secret?v||s:Math.min(v||s,r.floor[w]+1.5)}return r.lifts.forEach(function(g){var d=1/0;Es(r,g.x,g.z).forEach(function(U){var A=r.cells[U.i]===0||ai[r.cells[U.i]];A&&!Hd(r,U.x,U.z)&&(d=Math.min(d,r.floor[U.i]))}),g.bottom=d===1/0?0:Math.min(d,g.top),g.pos=g.bottom;var x=g.z*t+g.x;r.floor[x]=g.pos,r.ceil[x]=Math.max(r.ceil[x],g.top+1.2)}),r}function Hd(i,e,t){for(var n=0;n<i.lifts.length;n++)if(i.lifts[n].x===e&&i.lifts[n].z===t)return!0;return!1}function Es(i,e,t){var n=[];return[[1,0],[-1,0],[0,1],[0,-1]].forEach(function(r){var s=e+r[0],a=t+r[1];s>=0&&a>=0&&s<i.mw&&a<i.mh&&n.push({x:s,z:a,i:a*i.mw+s})}),n}function oi(i,e,t){return e<0||t<0||e>=i.mw||t>=i.mh?1:i.cells[t*i.mw+e]}function ki(i,e,t){return i.doors[e+","+t]||null}function Vi(i,e,t){var n=oi(i,e,t);if(n===0)return!1;if(ai[n]){var r=ki(i,e,t);return!r||r.open<.9}return!0}function sn(i,e,t){return i.floor[t*i.mw+e]}function Si(i,e,t){return i.ceil[t*i.mw+e]}function hr(i,e,t,n,r,s,a){for(var l=Math.floor(e-n),c=Math.floor(e+n),h=Math.floor(t-n),o=Math.floor(t+n),p=-1/0,f=1/0,m=h;m<=o;m++)for(var v=l;v<=c;v++){if(Vi(i,v,m))return{blocked:!0};var w=sn(i,v,m),g=Si(i,v,m);if(w>r+a+1e-4)return{blocked:!0};p=Math.max(p,w),f=Math.min(f,g)}return f<Math.max(r,p)+s-1e-4?{blocked:!0}:{blocked:!1,ground:p,ceil:f}}function fr(i,e,t,n,r,s,a){var l=!0;return t!==0&&(hr(i,e.x+t,e.z,r,e.y,s,a).blocked?l=!1:e.x+=t),n!==0&&(hr(i,e.x,e.z+n,r,e.y,s,a).blocked?l=!1:e.z+=n),l}function Ba(i,e,t,n){for(var r=Math.floor(e-n),s=Math.floor(e+n),a=Math.floor(t-n),l=Math.floor(t+n),c=-1/0,h=a;h<=l;h++)for(var o=r;o<=s;o++)Vi(i,o,h)||(c=Math.max(c,sn(i,o,h)));return c===-1/0?0:c}function za(i,e,t,n,r,s,a,l){for(var c=Math.sqrt(r*r+a*a),h=Math.floor(e),o=Math.floor(n),p=c>1e-9?Math.abs(1/r):1e30,f=c>1e-9?Math.abs(1/a):1e30,m=r<0?-1:1,v=a<0?-1:1,w=r<0?(e-h)*p:(h+1-e)*p,g=a<0?(n-o)*f:(o+1-n)*f,d=0,x=0;x<256;x++){var U=Math.min(w,g,l),A=sn(i,h,o),I=Si(i,h,o);if(s<0){var P=(A-t)/s;if(P>=d-1e-6&&P<=U)return _(P,"floor")}else if(s>0){var O=(I-t)/s;if(O>=d-1e-6&&O<=U)return _(O,"ceil")}if(U>=l)return _(l,"none");if(d=U,w<g?(w+=p,h+=m):(g+=f,o+=v),h<0||o<0||h>=i.mw||o>=i.mh)return _(d,"wall");var b=t+s*d;if(Vi(i,h,o)||b<sn(i,h,o)||b>Si(i,h,o))return _(d,"wall")}return _(l,"none");function _(T,E){return{dist:T,x:e+r*T,y:t+s*T,z:n+a*T,kind:E,cx:h,cz:o}}}function Gi(i,e,t,n,r,s,a){var l=r-e,c=s-t,h=a-n,o=Math.sqrt(l*l+c*c+h*h);return o<.001?!0:za(i,e,t,n,l/o,c/o,h/o,o).dist>=o-.05}var Lr=null;function lc(i,e,t,n,r,s){var a=i.mw,l=a*i.mh;(!Lr||Lr.length<l)&&(Lr=new Int32Array(l)),s.fill(-1);var c=Math.floor(e),h=Math.floor(t);if(!(c<0||h<0||c>=a||h>=i.mh)){var o=0,p=0;for(s[h*a+c]=0,Lr[p++]=h*a+c;o<p;){var f=Lr[o++],m=s[f];if(!(m>=n))for(var v=f%a,w=f/a|0,g=0;g<4;g++){var d=v+(g===0?1:g===1?-1:0),x=w+(g===2?1:g===3?-1:0);if(!(d<0||x<0||d>=a||x>=i.mh)){var U=x*a+d;s[U]!==-1||!r(f,d,x)||(s[U]=m+1,Lr[p++]=U)}}}}}function Yu(i,e,t,n){for(var r=0;r<i.lifts.length;r++){var s=i.lifts[r],a=t(s.x,s.z),l=s.pos;s.state==="down"&&a?(s.state="wait",s.wait=.5):s.state==="wait"?(s.wait-=e,s.wait<=0&&(s.state="up",n&&n(s,"start"))):s.state==="up"?(s.pos=Math.min(s.top,s.pos+e*.9),s.pos>=s.top&&(s.state="top",s.wait=2.5,n&&n(s,"stop"))):s.state==="top"?a?s.wait=2.5:(s.wait-=e)<=0&&(s.state="lower",n&&n(s,"start")):s.state==="lower"&&(a&&s.pos>s.bottom+.05?s.state="up":(s.pos=Math.max(s.bottom,s.pos-e*.9),s.pos<=s.bottom&&(s.state="down",n&&n(s,"stop")))),i.floor[s.z*i.mw+s.x]=s.pos,s.moved=s.pos-l}}var jt={r:.28,h:.9,hCrouch:.55,eye:.8,eyeCrouch:.45,walk:3.2,run:5,jumpV:3.9,gravity:14},ws={fist:{ammo:null,rate:.5,melee:!0,dmgMin:8,dmgMax:24,knock:.12},pistol:{ammo:"bullets",rate:.42,pellets:1,spread:.025,dmgMin:5,dmgMax:15,knock:.03,shake:.6},shotgun:{ammo:"shells",rate:.95,pellets:7,spread:.1,dmgMin:5,dmgMax:15,knock:.045,shake:2.2}},bi=["fist","pistol","shotgun"],Ku={bullets:"BULLETS",shells:"SHELLS"},Dr={imp:{hp:40,speed:1.7,radius:.35,painChance:.75,ranged:!0,melee:!1,h:.85,attackDmg:[8,20]},gnasher:{hp:110,speed:2.9,radius:.42,painChance:.5,ranged:!1,melee:!0,h:.7,attackDmg:[4,16],fleeBelow:.4},knight:{hp:400,speed:1.9,radius:.48,painChance:.2,ranged:!0,melee:!0,h:1.3,attackDmg:[10,26]},riley:{hp:900,speed:2.4,radius:.4,painChance:.12,ranged:!0,melee:!0,h:.95,attackDmg:[10,20],boss:!0}},Zu={i:"imp",g:"gnasher",K:"knight",Y:"riley"},Ju={h:{msg:"PICKED UP A STIMPACK.",snd:"health"},"+":{msg:"PICKED UP A MEDIKIT.",snd:"health"},b:{msg:"PICKED UP A CLIP.",snd:"pickup"},a:{msg:"PICKED UP A BOX OF SHELLS.",snd:"pickup"},A:{msg:"PICKED UP THE ARMOR!",snd:"pickup"},2:{msg:"YOU GOT THE SHOTGUN!",snd:"weaponUp"},r:{msg:"PICKED UP THE RED KEYCARD.",snd:"keyPickup"},u:{msg:"PICKED UP THE BLUE KEYCARD.",snd:"keyPickup"},P:{msg:"PHOENIX ORB! YOU FEEL REBORN!",snd:"orb"}},dr=[{name:"ROOKIE",dmg:.5,ammo:2,desc:"DEMONS HIT HALF AS HARD AND AMMO IS DOUBLED. GREAT FOR A FIRST RUN."},{name:"WARRIOR",dmg:1,ammo:1,desc:"THE FIGHT AS IT WAS MEANT TO BE."},{name:"INFERNO",dmg:1.5,ammo:1,desc:"DEMONS HIT HARDER. FOR VETERANS WHO KNOW EVERY CORNER."}],$u={run:"TIP: HOLD SHIFT TO RUN.",jump:"TIP: SPACE JUMPS. C CROUCHES. LOOK UP AND DOWN WITH THE MOUSE.",map:"TIP: LOST? PRESS TAB FOR THE MAP.",weapons:"TIP: PRESS 1 2 3, OR SCROLL THE MOUSE WHEEL, TO SWITCH WEAPONS. Q SWAPS BACK.",key:"TIP: THE MATCHING DOOR IS MARKED IN COLOR ON YOUR MAP (TAB).",lowAmmo:"TIP: LOW ON AMMO? YOUR FIST (1) NEVER RUNS OUT, AND IT IS SILENT.",lowHealth:"TIP: LOW HEALTH! BACK OFF AND LOOK FOR STIMPACKS AND MEDIKITS.",hurtDir:"TIP: THE RED MARKS AROUND YOUR AIM POINT AT WHATEVER HIT YOU.",secret:"TIP: WALLS WITH A CRACK MAY HIDE SECRETS. PRESS E ON THEM.",torches:"TIP: A PAIR OF TORCHES BESIDE A DOOR MEANS IT MATTERS. FOLLOW THEM.",lift:"TIP: STAND ON A GLOWING PLATFORM TO RIDE IT UP.",barrel:"TIP: A DEMON IS NEXT TO A BARREL. SHOOT THE BARREL!",meet_imp:"TIP: IMPS THROW FIREBALLS. STRAFE WITH A AND D TO DODGE.",meet_gnasher:"TIP: GNASHERS CHARGE AND BITE. BACK AWAY WHILE YOU SHOOT.",meet_knight:"TIP: THE EMBER KNIGHT IS TOUGH. KEEP YOUR DISTANCE AND USE SHELLS."};function ju(i){i=i||{};var e=i.levels,t=i.rng||Math.random,n=i.storage||null,r=i.settings||{difficulty:1,tips:!1,seenTips:{}},s=i.onProgress||function(){},a={},l=!1,c="title",h=0,o=null,p=null;function f(){return t()}function m(u,S){return u+t()*(S-u)}function v(u,S,B){return u<S?S:u>B?B:u}function w(u,S,B,re){var Q=u-B,se=S-re;return Q*Q+se*se}function g(){return dr[r.difficulty]||dr[1]}function d(u,S,B,re,Q,se){var de={t:u,name:S,x:B,y:re,z:Q};if(se)for(var _e in se)de[_e]=se[_e];o.events.push(de)}function x(u,S){S?d("sound",u,S.x,(S.y||0)+.5,S.z):d("sound",u,o.p.x,o.p.y+.8,o.p.z,{local:!0})}function U(u,S,B,re){var Q=Dr[u];return{kind:u,mob:!0,x:S,z:B,y:re,hp:Q.hp,radius:Q.radius,speed:Q.speed,h:Q.h,state:"idle",st:0,animT:f(),cool:m(.5,1.5),moveAng:0,retarget:0,losT:f()*.3,los:!1,target:null,lostT:0,fleeNext:!1,strafeSide:f()<.5?1:-1,flashT:0}}function A(u){var S=u.map.join("");return{boss:S.indexOf("Y")>=0,keys:{red:S.indexOf("R")>=0||S.indexOf("r")>=0,blue:S.indexOf("U")>=0||S.indexOf("u")>=0}}}function I(u){return{hp:Math.max(u.hp,1),armor:u.armor,ammo:{bullets:u.ammo.bullets,shells:u.ammo.shells},shotgun:u.weapons.shotgun,weapon:u.weapon}}function P(u,S,B){h=u;var re=e[u],Q=Xu(re),se=re.map,de=B||(S&&o?I(o.p):null),_e={x:0,z:0,y:0,ang:re.playerAngle||0,pitch:0,vx:0,vz:0,vy:0,onGround:!0,crouch:!1,eyeH:jt.eye,hp:de?de.hp:100,armor:de?de.armor:0,ammo:de?{bullets:de.ammo.bullets,shells:de.ammo.shells}:{bullets:50,shells:0},weapons:{fist:!0,pistol:!0,shotgun:de?de.shotgun:!1},keys:{red:!1,blue:!1},weapon:de&&de.shotgun?de.weapon:"pistol",nextWeapon:null,prevWeapon:null,raiseT:.3,lowerT:0,cool:0,fireT:1,dead:!1,deadT:0,painT:0,grinT:0,dmgFlash:0,bonusFlash:0,jumpHeld:!1,landT:0};L(_e,_e.weapon)||(_e.weapon=z(_e));for(var Ce=[],Be=[],$e=null,st=0;st<se.length;st++)for(var Bt=0;Bt<se[0].length;Bt++){var yt=se[st][Bt],Jt=Bt+.5,Vt=st+.5,Mt=sn(Q,Bt,st);if(yt==="p")_e.x=Jt,_e.z=Vt,_e.y=Mt;else if(Zu[yt]){var qt=U(Zu[yt],Jt,Vt,Mt);qt.kind==="riley"&&rt(qt),Ce.push(qt)}else yt==="o"?Ce.push({kind:"barrel",mob:!0,barrel:!0,x:Jt,z:Vt,y:Mt,hp:15,radius:.3,h:.55,state:"idle",st:0}):yt==="t"?Ce.push({kind:"torch",x:Jt,z:Vt,y:Mt,h:.95,animT:f()}):Ju[yt]?Ce.push({kind:"pickup",item:yt,x:Jt,z:Vt,y:Mt,h:.3,bob:f()*6}):yt==="*"&&Be.push({x:Bt,z:st,found:!1});yt==="X"&&($e={x:Bt,z:st})}var Ut=0,Ot=0;return Ce.forEach(function(at){at.mob&&!at.barrel&&Ut++,at.kind==="pickup"&&Ot++}),o={L:re,W:Q,mw:Q.mw,mh:Q.mh,doors:Q.doors,ents:Ce,p:_e,secrets:Be,seen:new Uint8Array(Q.mw*Q.mh),msgs:[],events:[],time:0,notice:null,stats:{kills:0,totalKills:Ut,items:0,totalItems:Ot,secrets:0,totalSecrets:Be.length},exitT:-1,flow:new Int16Array(Q.mw*Q.mh),flowT:0,infightSeen:!1,boss:null,shotId:0,firing:!1,input:{strafe:0,moving:!1,vx:0,vz:0},startGear:de,info:A(re),exitCell:$e,hurtDirs:[],hitT:0,killT:0,blockT:0,shake:0,hitstop:0,killer:null,tipQueue:[],tipT:3,usedMap:!1,ranT:0,jumped:!1,spotT:0,started:!0},Ce.forEach(function(at){at.kind==="riley"&&(o.boss=at)}),c="game",b(re.name),_(C(),"#f0d848",3.5),o}function O(){var u=o.startGear;u&&(u={hp:Math.max(u.hp,100),armor:u.armor,ammo:{bullets:Math.max(u.ammo.bullets,50),shells:u.shotgun?Math.max(u.ammo.shells,8):u.ammo.shells},shotgun:u.shotgun,weapon:u.weapon}),P(h,!1,u)}function b(u,S,B){o.msgs.push({text:u,t:B||3,color:S}),o.msgs.length>4&&o.msgs.shift()}function _(u,S,B){o.notice={text:u,color:S||"#f0d848",t:B||2.5,max:B||2.5}}function T(u){o&&(o.shake=Math.min(6,Math.max(o.shake,u)))}function E(u){!o||!r.tips||r.seenTips&&r.seenTips[u]||o.tipQueue.indexOf(u)<0&&o.tipQueue.push(u)}function y(u){if(o.tipT-=u,!(o.tipT>0||!o.tipQueue.length)){var S=o.tipQueue.shift();r.seenTips[S]||(r.seenTips[S]=!0,i.saveSettings&&i.saveSettings(),b($u[S],"#8fe0a0",6),o.tipT=7)}}function C(){if(!o)return"";var u=o.info,S=o.p;return u.keys.blue&&!S.keys.blue?"FIND THE BLUE KEYCARD":u.keys.red&&!S.keys.red?"FIND THE RED KEYCARD":u.boss?"DEFEAT RILEY":"FIND THE EXIT SWITCH"}function L(u,S){var B=ws[S];return!B.ammo||u.ammo[B.ammo]>0}function z(u){for(var S=bi.length-1;S>=0;S--){var B=bi[S];if(u.weapons[B]&&L(u,B))return B}return"fist"}function K(u,S){if(c!=="game"||!o||o.p.dead)return!1;var B=o.p;return B.weapons[u]?L(B,u)?u===B.weapon?(B.nextWeapon&&!(B.lowerT>0)&&(B.nextWeapon=null),!1):u===B.nextWeapon?!1:(B.prevWeapon=B.weapon,B.nextWeapon=u,B.autoFist=!1,!0):(S||(b("NO "+Ku[ws[u].ammo]+" FOR THE "+u.toUpperCase()+"."),x("noAmmo")),!1):(S||b("YOU HAVEN'T FOUND THE "+u.toUpperCase()+" YET."),!1)}function ee(u){for(var S=o.p,B=bi.indexOf(S.nextWeapon||S.weapon),re=1;re<bi.length;re++){var Q=bi[(B+u*re+bi.length*2)%bi.length];if(S.weapons[Q]&&L(S,Q)){K(Q,!0);return}}}function J(){var u=o.p;u.prevWeapon&&u.prevWeapon!==u.weapon&&u.weapons[u.prevWeapon]&&L(u,u.prevWeapon)?K(u.prevWeapon,!0):ee(-1)}function k(){return o.p.y+o.p.eyeH}function $(u,S){return Math.sqrt(w(u,S,o.p.x,o.p.z))}function X(u,S,B,re,Q,se){for(var de=o.p,_e=Math.cos(S),Ce=Math.cos(u)*_e,Be=Math.sin(u)*_e,$e=Math.sin(S),st=de.x,Bt=k(),yt=de.z,Jt=Q?1.4:40,Vt=za(o.W,st,Bt,yt,Ce,$e,Be,Jt),Mt=null,qt=Vt.dist+.05,Ut=0;Ut<o.ents.length;Ut++){var Ot=o.ents[Ut];if(!(!Ot.mob||Ot.state==="die"||Ot.state==="dead"||Ot.gone)){var at=me(st,Bt,yt,Ce,$e,Be,Ot);at!==null&&at>.1&&at<qt&&(Mt=Ot,qt=at)}}var Hn=B+f()*(re-B)|0;if(Mt){if(ke(Mt,Hn),!Mt.barrel){Mt.kind==="riley"&&Mt.shieldT>0?o.blockT=.2:Mt.state==="die"?(o.killT=.3,o.hitstop=Math.max(o.hitstop,.045)):o.hitT=Math.max(o.hitT,.14);var yi=Dr[Mt.kind];if(se&&!yi.boss){var Tn=se*(yi.hp>200?.25:1);fr(o.W,Mt,Math.cos(u)*Tn,Math.sin(u)*Tn,Mt.radius,Mt.h,Pn)}}d("fx",Mt.barrel||Mt.kind==="riley"?"spark":"blood",st+Ce*qt,Bt+$e*qt,yt+Be*qt,{dx:-Ce,dy:-$e,dz:-Be})}else!Q&&Vt.kind!=="none"?d("fx","puff",Vt.x-Ce*.03,Vt.y-$e*.03,Vt.z-Be*.03,{surface:Vt.kind}):Q&&x("whiff");return Mt}function me(u,S,B,re,Q,se,de){var _e=de.radius+.06,Ce=u-de.x,Be=B-de.z,$e=re*re+se*se,st=2*(Ce*re+Be*se),Bt=Ce*Ce+Be*Be-_e*_e;if($e<1e-9)return null;var yt=st*st-4*$e*Bt;if(yt<0)return null;var Jt=Math.sqrt(yt),Vt=(-st-Jt)/(2*$e),Mt=(-st+Jt)/(2*$e),qt=Vt>0?Vt:Mt;if(qt<0)return null;var Ut=S+Q*qt;if(Ut>=de.y&&Ut<=de.y+de.h)return qt;if(Math.abs(Q)>1e-6){var Ot=((Q<0?de.y+de.h:de.y)-S)/Q;if(Ot>0){var at=u+re*Ot-de.x,Hn=B+se*Ot-de.z;if(at*at+Hn*Hn<=_e*_e)return Ot}}return null}function he(u){return!!u&&!u.gone&&u.state!=="die"&&u.state!=="dead"}function ke(u,S,B){if(!(u.state==="die"||u.state==="dead")&&!(u.kind==="riley"&&le(u,B))){if(u.hp-=S,u.flashT=.07,u.barrel){u.blame=he(B)?B:null,u.hp<=0&&u.state!=="boom"&&(u.state="boom",u.st=.08);return}var re=Dr[u.kind];Se(u),re.boss||(B&&B!==u&&he(B)&&!B.barrel?(u.target!==B&&!o.infightSeen&&$(u.x,u.z)<14&&(o.infightSeen=!0,b("THE DEMONS TURN ON EACH OTHER!")),u.target=B,u.lostT=0):B||(u.target=null)),u.hp<=0?(u.state="die",u.st=0,o.stats.kills++,re.boss||x("enemyDie",u),d("fx","gib",u.x,u.y+u.h*.6,u.z,{kind:u.kind})):f()<re.painChance&&!(re.boss&&u.state==="windup")&&(u.state="pain",u.st=re.boss?.25:.35,re.fleeBelow&&u.hp<re.hp*re.fleeBelow&&(u.fleeNext=!0),x("enemyPain",u)),u.kind==="riley"&&ge(u)}}function Ge(u){u.state="dead",u.dead=!0,u.gone=!0,x("barrelBoom",u),d("fx","explosion",u.x,u.y+.3,u.z);for(var S=2.3,B=he(u.blame)?u.blame:null,re=0;re<o.ents.length;re++){var Q=o.ents[re];if(!(!Q.mob||Q===u||Q.state==="dead"||Q.state==="die")){var se=Math.sqrt(w(Q.x,Q.z,u.x,u.z)+Math.pow(Q.y-u.y,2));se<S&&Gi(o.W,u.x,u.y+.3,u.z,Q.x,Q.y+Q.h/2,Q.z)&&(Q.barrel?Q.state!=="boom"&&(Q.state="boom",Q.st=m(.1,.25),Q.blame=B):ke(Q,(S-se)/S*90|0,B))}}Ve(u.x,u.z,10);var de=Math.sqrt(w(o.p.x,o.p.z,u.x,u.z)+Math.pow(o.p.y-u.y,2));T(6/(1+de*.35)),de<S&&Gi(o.W,u.x,u.y+.3,u.z,o.p.x,k(),o.p.z)&&De((S-de)/S*70|0,u)}function De(u,S){var B=o.p;if(!(B.dead||u<=0||o.exitT>=0)){if(u=Math.max(1,Math.round(u*g().dmg)),S){var re=Math.atan2(S.z-B.z,S.x-B.x);o.hurtDirs.push({ang:re,t:1}),o.hurtDirs.length>6&&o.hurtDirs.shift();var Q=Math.atan2(Math.sin(re-B.ang),Math.cos(re-B.ang));Math.abs(Q)>.9&&E("hurtDir"),o.killer=S.kind}var se=Math.min(B.armor,Math.ceil(u/3));B.armor-=se,u-=se,B.hp-=u,B.dmgFlash=Math.min(.65,B.dmgFlash+u/55),T(Math.min(4,1+u/8)),B.painT=.6,B.hp<=0?(B.hp=0,B.dead=!0,B.deadT=0,x("playerDie"),F(o.boss)&&(M(o.boss,Xt.default.line("playerDied",o.boss.profile)),N(o.boss,!1))):(x("playerPain"),B.hp<30&&E("lowHealth"))}}function ae(u,S,B,re,Q,se,de){var _e=u.y+u.h*.65,Ce=B-u.x,Be=re-_e,$e=Q-u.z,st=Math.sqrt(Ce*Ce+Be*Be+$e*$e)||1,Bt=se||(S?5.5:7);o.ents.push({kind:"proj",x:u.x+Ce/st*.5,y:_e+Be/st*.5,z:u.z+$e/st*.5,vx:Ce/st*Bt,vy:Be/st*Bt,vz:$e/st*Bt,h:.2,green:!!S,animT:0,owner:u,dmg:de||(S?m(10,28):m(7,20))}),x(u.kind==="riley"?"rileyShoot":"impShoot",u)}function ce(u,S,B){return!Vi(o.W,S,B)}function be(u,S,B){var re=o.W,Q=oi(re,S,B);if(Q!==0){if(!ai[Q])return!1;var se=ki(re,S,B);if(!(se.open>=.9||!se.locked&&!se.secret))return!1}return re.floor[B*re.mw+S]-re.floor[u]<=Pn+1e-4}function Ve(u,S,B){var re=new Int16Array(o.mw*o.mh);lc(o.W,u,S,B,ce,re);for(var Q=0;Q<o.ents.length;Q++){var se=o.ents[Q];!se.mob||se.barrel||se.state!=="idle"||Dr[se.kind].boss||re[Math.floor(se.z)*o.mw+Math.floor(se.x)]>=0&&Se(se)}}function Se(u){u.state==="idle"&&(u.state="chase",u.st=0,x(u.kind==="knight"?"knightSight":u.kind==="riley"?"rileySight":"impSight",u))}function Ke(){lc(o.W,o.p.x,o.p.z,9999,function(u,S,B){var re=u,Q=o.W,se=oi(Q,S,B);if(se!==0){if(!ai[se])return!1;var de=ki(Q,S,B);if(!(de.open>=.9||!de.locked&&!de.secret))return!1}return Q.floor[re]-Q.floor[B*Q.mw+S]<=Pn+1e-4},o.flow)}function bt(u){var S=o.mw,B=Math.floor(u.x),re=Math.floor(u.z),Q=o.flow[re*S+B];if(Q<=0)return null;for(var se=-1,de=-1,_e=0;_e<4;_e++){var Ce=B+(_e===0?1:_e===1?-1:0),Be=re+(_e===2?1:_e===3?-1:0);if(!(Ce<0||Be<0||Ce>=S||Be>=o.mh)){var $e=o.flow[Be*S+Ce];$e>=0&&$e<Q&&(Q=$e,se=Ce,de=Be)}}return se<0?null:Math.atan2(de+.5-u.z,se+.5-u.x)}function Ye(u,S){u.state==="closed"||u.state==="closing"?(u.state="opening",S&&(u.used=!0),x("doorOpen",{x:u.x+.5,y:sn(o.W,u.x,u.z),z:u.z+.5}),u.secret&&!u.found&&(u.found=!0)):S&&u.state==="open"&&(u.state="closing",x("doorClose",{x:u.x+.5,y:sn(o.W,u.x,u.z),z:u.z+.5}))}function et(u,S,B,re,Q){return u+B>re&&u-B<re+1&&S+B>Q&&S-B<Q+1}function mt(u){if(et(o.p.x,o.p.z,jt.r,u.x,u.z))return!0;for(var S=0;S<o.ents.length;S++){var B=o.ents[S];if(B.mob&&!B.barrel&&B.state!=="dead"&&B.state!=="die"&&et(B.x,B.z,B.radius,u.x,u.z))return!0}return!1}function tt(u){for(var S in o.doors){var B=o.doors[S];if(B.state==="opening")B.open+=u*1.6,B.open>=1&&(B.open=1,B.state="open",B.timer=B.secret?9999:4);else if(B.state==="open")B.timer-=u,B.timer<=0&&!mt(B)&&(B.state="closing",x("doorClose",{x:B.x+.5,y:0,z:B.z+.5}));else if(B.state==="closing"){if(mt(B)){B.state="opening";continue}B.open-=u*1.6,B.open<=0&&(B.open=0,B.state="closed")}}}function Tt(u,S,B){return et(u.x,u.z,(u.radius||jt.r)*.7,S,B)&&Math.abs(u.y-sn(o.W,S,B))<.05}function Wt(u){var S=o.p;Yu(o.W,u,function(B,re){if(Tt(S,B,re))return!0;for(var Q=0;Q<o.ents.length;Q++){var se=o.ents[Q];if(se.mob&&he(se)&&Tt(se,B,re))return!0}return!1},function(B,re){x(re==="start"?"doorOpen":"doorClose",{x:B.x+.5,y:B.pos,z:B.z+.5})}),o.W.lifts.forEach(function(B){B.moved&&[S].concat(o.ents).forEach(function(re){(re===S||re.mob&&he(re))&&et(re.x,re.z,(re.radius||jt.r)*.7,B.x,B.z)&&Math.abs(re.y-(B.pos-B.moved))<.06&&(re.y=B.pos)})})}function Yt(){for(var u=o.p,S=Math.cos(u.ang),B=Math.sin(u.ang),re=.4;re<=1.3;re+=.3){var Q=Math.floor(u.x+S*re),se=Math.floor(u.z+B*re),de=oi(o.W,Q,se);if(de!==0){if(ai[de]){var _e=ki(o.W,Q,se);if(_e.open>=.9&&_e.state==="open"&&Math.floor(u.x)===Q&&Math.floor(u.z)===se)continue;return{kind:"door",door:_e}}return de===9?{kind:"switch",x:Q,z:se}:null}}return null}function wt(){if(!o||o.p.dead||o.exitT>=0)return null;var u=Yt();if(!u)return null;if(u.kind==="switch")return{verb:"EXIT LEVEL",color:"#58e068"};var S=u.door;return S.secret&&!S.found?null:S.locked&&!o.p.keys[S.locked]?{need:S.locked,text:S.locked.toUpperCase()+" KEYCARD NEEDED",color:S.locked==="red"?"#ff5a3a":"#6a98ff"}:S.state==="closed"||S.state==="closing"?{verb:"OPEN",color:"#e8e0c8"}:null}function It(){var u=Yt();if(u){var S=o.p;if(u.kind==="door"){var B=u.door;B.locked&&!S.keys[B.locked]?(x("locked"),b("YOU NEED THE "+B.locked.toUpperCase()+" KEYCARD."),E("key")):Ye(B,!0)}else u.kind==="switch"&&(o.W.cells[u.z*o.mw+u.x]=10,x("switchFlip"),_("LEVEL COMPLETE!","#58e068",2),o.exitT=.8)}}function q(u){u.y=Ba(o.W,u.x,u.z,u.radius*.6)}function Dt(u,S){var B=o.p,re=Dr[u.kind];u.animT+=S,u.st-=S,u.cool-=S,u.flashT-=S,u.target&&!he(u.target)&&(u.target=null,u.cool=Math.min(u.cool,.4));var Q=u.target,se=Q?Q.x:B.x,de=Q?Q.z:B.z,_e=Q?Q.y+Q.h*.6:B.y+B.eyeH*.8;u.losT-=S,u.losT<=0&&(u.losT=.2+f()*.1,u.los=Gi(o.W,u.x,u.y+u.h*.8,u.z,se,_e,de));var Ce=se-u.x,Be=de-u.z,$e=Math.sqrt(Ce*Ce+Be*Be);if(Q&&(u.lostT=u.los?0:u.lostT+S,u.lostT>4)){u.target=null,u.lostT=0;return}if(u.state==="idle"){u.los&&$e<9&&!B.dead&&Se(u);return}if(u.state==="pain"){u.st<=0&&(u.fleeNext?(u.fleeNext=!1,u.state="flee",u.st=m(.9,1.6),u.moveAng=Math.atan2(-Be,-Ce)+m(-.6,.6)):u.state="chase");return}if(u.state==="flee"){fr(o.W,u,Math.cos(u.moveAng)*u.speed*1.1*S,Math.sin(u.moveAng)*u.speed*1.1*S,u.radius,u.h,Pn)||(u.moveAng+=(f()<.5?1:-1)*Math.PI/2),q(u),u.st<=0&&(u.state="chase",u.cool=0,u.retarget=0,x("impSight",u));return}if(u.state==="die"){u.st<=-.5&&(u.state="dead");return}if(u.state!=="dead"){if(u.state==="windup"){if(u.st<=0){if(u.state="chase",!Q&&B.dead)return;if(re.melee&&$e<1.9&&Math.abs(_e-(u.y+u.h*.5))<1.2){if(u.los){var st=re.attackDmg[0]+f()*(re.attackDmg[1]-re.attackDmg[0])|0;Q?ke(Q,st,u):De(st,u),x("punch",u)}}else re.ranged&&u.los&&ae(u,u.kind==="knight",se,_e,de);u.cool=m(.9,1.9)}return}if(!(!Q&&B.dead)){u.detourT=(u.detourT||0)-S,u.pathT=(u.pathT||0)-S;var Bt=!Q&&Math.abs(B.y-u.y)>Pn,yt=!Q&&(!u.los||u.pathT>0||Bt)&&u.detourT<=0?bt(u):null;if(u.retarget-=S,yt!==null)u.moveAng=yt;else if(u.retarget<=0){u.retarget=m(.35,.8);var Jt=Math.atan2(Be,Ce);re.ranged&&!re.melee&&u.los&&$e<7?(f()<.3&&(u.strafeSide=-u.strafeSide),u.moveAng=Jt+u.strafeSide*m(1.1,1.8)):u.moveAng=Jt+($e>2.2?m(-.7,.7):m(-.25,.25))}var Vt=re.melee?.95:1.6;if($e>Vt){var Mt=u.x,qt=u.z,Ut=fr(o.W,u,Math.cos(u.moveAng)*u.speed*S,Math.sin(u.moveAng)*u.speed*S,u.radius,u.h,Pn);if(!Ut&&yt!==null){var Ot=Math.floor(u.x)+.5-u.x,at=Math.floor(u.z)+.5-u.z;fr(o.W,u,Ot*Math.min(1,S*6),at*Math.min(1,S*6),u.radius,u.h,Pn)}else if(!Ut){var Hn=Math.floor(u.x+Math.cos(u.moveAng)*.7),yi=Math.floor(u.z+Math.sin(u.moveAng)*.7),Tn=ki(o.W,Hn,yi);Tn&&!Tn.locked&&!Tn.secret&&Tn.state==="closed"&&Ye(Tn,!1),u.moveAng+=(f()<.5?1:-1)*Math.PI/2*m(.6,1.2),u.retarget=m(.25,.5),u.pathT=.8}for(var En=0;En<o.ents.length;En++){var In=o.ents[En];if(!(In===u||!In.mob||In.state==="dead"||In.state==="die"||In.gone)){var Mi=u.x-In.x,R=u.z-In.z,Y=Mi*Mi+R*R,oe=u.radius+(In.radius||.3);if(Y>1e-4&&Y<oe*oe&&Math.abs(In.y-u.y)<.5){var ne=Math.sqrt(Y),ie=(oe-ne)*.5;hr(o.W,u.x+Mi/ne*ie,u.z+R/ne*ie,u.radius,u.y,u.h,Pn).blocked||(u.x+=Mi/ne*ie,u.z+=R/ne*ie)}}}var Te=w(u.x,u.z,Mt,qt),Ie=u.speed*S*.3;u.stuckT=Te<Ie*Ie?(u.stuckT||0)+S:0,u.stuckT>.4&&(u.stuckT=0,u.detourT=m(.5,.9),u.moveAng+=(f()<.5?1:-1)*Math.PI/2,u.retarget=u.detourT),q(u)}u.cool<=0&&u.los&&(re.melee&&$e<1.4&&Math.abs(_e-(u.y+u.h*.5))<1.2?(u.state="windup",u.st=.35):re.ranged&&$e>1.2&&$e<14&&f()<S*1.4&&(u.state="windup",u.st=.45))}}}function rt(u){var S=Xt.default.recall(n);u.mem=S,u.tune=Xt.default.tuning(S),u.hp=u.maxHp=Math.round(Dr.riley.hp*u.tune.hpScale),u.profile=Xt.default.newProfile(),u.phase=1,u.cools={volley:1,lead:3,summon:8,shield:5,melee:0},u.move=null,u.moveT=0,u.shieldT=0,u.talkT=0,u.flankSide=1,u.attack=null,u.settled=!1}function F(u){return!!u&&u.state!=="idle"&&he(u)}function M(u,S,B){return!S||B&&u.talkT>0?!1:(b("RILEY: "+S,"#6fe0ec",4.5),x("rileyTalk"),u.talkT=3.5,!0)}function D(u){var S=u.mem;M(u,Xt.default.line("intro",u.profile,{memory:S.fights>0?S:null})),S.ease>0?M(u,Xt.default.line("ease",u.profile)):u.tune.practised&&M(u,Xt.default.line("studied",u.profile,{wins:S.wins}))}function N(u,S){u.settled||(u.settled=!0,Xt.default.save(n,Xt.default.settle(u.mem,u.profile,S)))}function H(){var u=0;return o.ents.forEach(function(S){S.summoned&&he(S)&&u++}),u}function V(u){for(var S=0,B=0;B<30&&S<2;B++){var re=f()*Math.PI*2,Q=m(1.5,3.5),se=u.x+Math.cos(re)*Q,de=u.z+Math.sin(re)*Q,_e=Ba(o.W,se,de,.3);if(!(hr(o.W,se,de,.4,_e,.85,0).blocked||$(se,de)<3||!Gi(o.W,u.x,u.y+.5,u.z,se,_e+.5,de))){var Ce=U("imp",se,de,_e);Ce.summoned=!0,Ce.state="chase",o.ents.push(Ce),o.stats.totalKills++,d("fx","summon",se,_e+.4,de),S++}}S&&(M(u,Xt.default.line("summon",u.profile)),x("rileySight",u)),u.cools.summon=18*u.tune.coolScale}function j(u,S,B,re){var Q={los:u.los,dist:S,phase:u.phase,cool:u.cools,impsAlive:H(),playerWeapon:o.p.weapon},se=Xt.default.choose(Xt.default.legalMoves(Q),u.profile,Q,t);u.move=se.move,M(u,Xt.default.insight(u.profile,se.why),!0);var de=u.profile;switch(se.move){case"volley":case"lead":u.state="windup",u.attack=se.move,u.st=se.move==="volley"?.55:.4,u.moveT=u.st+.2;break;case"backoff":u.moveT=1,u.moveAng=Math.atan2(-re,-B)+m(-.5,.5);break;case"flank":u.flankSide=Xt.default.strafeHabit(de)>.3?Xt.default.strafeSide(de):f()<.5?1:-1,u.moveT=1.3;break;case"close":u.moveT=1.2;break;case"seek":u.moveT=.8;break;case"summon":V(u),u.moveT=.8;break;case"shield":u.shieldT=1.6,u.moveT=1.2,u.cools.shield=8*u.tune.coolScale,x("rileyShield",u);break}}function G(u,S){var B=o.p,re=u.tune,Q=re.coolScale*(u.phase>=3?.7:1);if(u.attack==="melee"){S<1.9&&u.los&&(De(m(10,20)*re.dmgScale|0,u),x("punch",u)),u.cools.melee=1.2;return}if(u.los){var se=B.y+B.eyeH*.8,de=Math.atan2(B.z-u.z,B.x-u.x);if(u.attack==="volley"){for(var _e=-1;_e<=1;_e++){var Ce=de+_e*.2;ae(u,!0,u.x+Math.cos(Ce)*S,se,u.z+Math.sin(Ce)*S,6.5,m(8,16)*re.dmgScale)}u.cools.volley=m(1.6,2.4)*Q}else if(u.attack==="lead"){var Be=9,$e=S/Be;ae(u,!0,B.x+o.input.vx*$e,se,B.z+o.input.vz*$e,Be,m(10,18)*re.dmgScale),u.cools.lead=m(1.8,2.8)*Q}}}function Z(u,S){var B=o.p,re=u.profile;u.animT+=S,u.st-=S,u.talkT-=S,u.shieldT-=S,u.moveT-=S,u.flashT-=S;for(var Q in u.cools)u.cools[Q]-=S;u.losT-=S,u.losT<=0&&(u.losT=.15,u.los=Gi(o.W,u.x,u.y+u.h*.85,u.z,B.x,k(),B.z));var se=B.x-u.x,de=B.z-u.z,_e=Math.sqrt(se*se+de*de);if(u.state==="idle"){u.los&&!B.dead&&(Se(u),D(u));return}if(u.state==="die"){u.st<=-1.2&&(u.state="dead");return}if(!(u.state==="dead"||B.dead)){if(Xt.default.observe(re,{dt:S,los:u.los,dist:_e,strafe:o.input.strafe,moving:o.input.moving}),u.state==="pain"){u.st<=0&&(u.state="chase");return}if(u.state==="windup"){u.st<=0&&(u.state="chase",G(u,_e));return}if(_e<1.3&&u.los&&u.cools.melee<=0){u.state="windup",u.attack="melee",u.st=.3;return}if(!(u.moveT<=0&&(j(u,_e,se,de),u.state==="windup"))){var Ce=Math.atan2(de,se),Be=null;switch(u.move){case"backoff":Be=u.moveAng;break;case"close":Be=Ce;break;case"flank":case"shield":Be=Ce+u.flankSide*1.35;break;case"seek":Be=bt(u),Be===null&&(Be=Ce);break}if(Be!==null){var $e=u.speed*(u.phase>=3?1.25:1)*S;fr(o.W,u,Math.cos(Be)*$e,Math.sin(Be)*$e,u.radius,u.h,Pn)||(u.flankSide=-u.flankSide,u.moveAng+=Math.PI/2),q(u)}}}}function le(u,S){if(u.shieldT>0)return d("fx","spark",u.x,u.y+.5,u.z),x("rileyShield",u),!0;if(o.firing&&u.lastShot!==o.shotId&&(u.lastShot=o.shotId,u.profile.hits++),S&&!S.barrel&&S.kind==="imp"){var B=S.target===u?"impsTurned":"friendlyFire";u.profile.said[B]||(u.profile.said[B]=!0,M(u,Xt.default.line(B,u.profile)))}return!1}function ge(u){if(u.hp<=0){x("rileyDerez",u),M(u,Xt.default.line("defeated",u.profile)),N(u,!0),o.exitT=5;return}u.phase<3&&u.hp<u.maxHp*.33?(u.phase=3,M(u,Xt.default.line("phase3",u.profile))):u.phase<2&&u.hp<u.maxHp*.66&&(u.phase=2,M(u,Xt.default.line("phase2",u.profile)),V(u))}function fe(){for(var u=o.p,S=k(),B=12,re=o.W,Q=Math.floor(u.x),se=Math.floor(u.z),de=Math.max(0,se-B);de<=Math.min(o.mh-1,se+B);de++)for(var _e=Math.max(0,Q-B);_e<=Math.min(o.mw-1,Q+B);_e++){var Ce=de*o.mw+_e;o.seen[Ce]||Vi(re,_e,de)||Gi(re,u.x,S,u.z,_e+.5,sn(re,_e,de)+.4,de+.5)&&(o.seen[Ce]=1,Es(re,_e,de).forEach(function(Be){re.cells[Be.i]!==0&&(o.seen[Be.i]=1)}))}}function ve(){fe();var u=o.p,S=k();function B(_e,Ce){return w(_e.x,_e.z,u.x,u.z)<Ce*Ce&&Gi(o.W,u.x,S,u.z,_e.x,(_e.y||0)+(_e.h||.3)*.6,_e.z)}for(var re=0;re<o.ents.length;re++){var Q=o.ents[re];if(Q.kind==="pickup"&&!Q.spotted&&(Q.item==="r"||Q.item==="u")&&B(Q,14)&&(Q.spotted=!0),Q.mob&&!Q.barrel&&he(Q)&&$u["meet_"+Q.kind]&&!r.seenTips["meet_"+Q.kind]&&B(Q,11)&&E("meet_"+Q.kind),Q.barrel&&!Q.gone&&!r.seenTips.barrel&&B(Q,10))for(var se=0;se<o.ents.length;se++){var de=o.ents[se];if(de.mob&&!de.barrel&&he(de)&&de.state!=="idle"&&w(de.x,de.z,Q.x,Q.z)<4){E("barrel");break}}Q.kind==="torch"&&h===0&&o.time>20&&B(Q,5)&&E("torches")}o.W.lifts.forEach(function(_e){w(_e.x+.5,_e.z+.5,u.x,u.z)<16&&E("lift")})}function ye(){var u=o.info,S=o.p,B,re=u.keys.blue&&!S.keys.blue?"u":u.keys.red&&!S.keys.red?"r":null;if(re){for(var Q=0;Q<o.ents.length;Q++){var se=o.ents[Q];if(se.kind==="pickup"&&se.item===re&&!se.gone)return se.spotted?{x:se.x,y:se.y+.3,z:se.z}:null}return null}for(B in o.doors){var de=o.doors[B];if(de.locked&&!de.used&&o.seen[de.z*o.mw+de.x])return{x:de.x+.5,y:sn(o.W,de.x,de.z)+.8,z:de.z+.5}}var _e=o.exitCell;return!u.boss&&_e&&o.seen[_e.z*o.mw+_e.x]?{x:_e.x+.5,y:.8,z:_e.z+.5}:null}function Pe(u){var S=o.p,B=Ju[u.item],re=g().ammo,Q=null;switch(u.item){case"h":S.hp>=100?Q="HEALTH":S.hp=Math.min(100,S.hp+10);break;case"+":S.hp>=100?Q="HEALTH":S.hp=Math.min(100,S.hp+25);break;case"A":S.armor>=100?Q="ARMOR":(S.armor=100,S.grinT=1);break;case"b":S.ammo.bullets>=200?Q="BULLETS":S.ammo.bullets=Math.min(200,S.ammo.bullets+10*re);break;case"a":S.ammo.shells>=50?Q="SHELLS":S.ammo.shells=Math.min(50,S.ammo.shells+4*re);break;case"2":S.weapons.shotgun=!0,S.ammo.shells=Math.min(50,S.ammo.shells+8*re),S.grinT=1.2,S.weapon!=="shotgun"&&K("shotgun",!0),_("SHOTGUN!  PRESS 3","#ffd23e",2.5),E("weapons");break;case"r":case"u":var se=u.item==="r"?"red":"blue";S.keys[se]=!0,S.grinT=1,_(se.toUpperCase()+" KEYCARD",se==="red"?"#ff5a3a":"#6a98ff",2.5),E("key");break;case"P":S.hp=Math.min(200,S.hp+100),S.grinT=1.2;break}if(Q){u.touching=!0,b(Q+" ALREADY FULL","#8a8478",1.5);return}u.gone=!0,o.stats.items++,S.bonusFlash=Math.min(.35,S.bonusFlash+.22),x(B.snd),d("fx","pickup",u.x,u.y+.3,u.z,{item:u.item}),b(B.msg),S.autoFist&&(u.item==="b"||u.item==="a")&&(S.autoFist=!1,K(z(S),!0))}function He(u){var S=o.p;if(S.dead){S.deadT+=u,S.eyeH=Math.max(.15,S.eyeH-u*1.2);return}var B=!!a.KeyC;if(!B&&S.crouch){var re=hr(o.W,S.x,S.z,jt.r,S.y,jt.h,0);re.blocked||(S.crouch=!1)}else S.crouch=B;var Q=S.crouch?jt.hCrouch:jt.h,se=S.crouch?jt.eyeCrouch:jt.eye;S.eyeH+=(se-S.eyeH)*Math.min(1,u*14);var de=a.ShiftLeft||a.ShiftRight,_e=0,Ce=0;(a.KeyW||a.ArrowUp)&&(_e+=1),(a.KeyS||a.ArrowDown)&&(_e-=1),a.KeyA&&(Ce-=1),a.KeyD&&(Ce+=1),a.ArrowLeft&&(S.ang-=2.6*u),a.ArrowRight&&(S.ang+=2.6*u),a.PageUp&&(S.pitch+=1.6*u),a.PageDown&&(S.pitch-=1.6*u),S.pitch=v(S.pitch,-1.3,1.3),_e&&Ce&&(_e*=.7071,Ce*=.7071);var Be=S.crouch?jt.walk*.5:de?jt.run:jt.walk,$e=Math.cos(S.ang),st=Math.sin(S.ang),Bt=($e*_e-st*Ce)*Be,yt=(st*_e+$e*Ce)*Be,Jt=S.onGround?14:3;S.vx+=(Bt-S.vx)*Math.min(1,u*Jt),S.vz+=(yt-S.vz)*Math.min(1,u*Jt),a.Space&&!S.jumpHeld&&S.onGround&&!S.crouch&&(S.vy=jt.jumpV,S.onGround=!1,o.jumped=!0,x("jump")),S.jumpHeld=!!a.Space;var Vt=S.x,Mt=S.z,qt=S.onGround?Pn:Math.max(0,Math.min(oc,.12));fr(o.W,S,S.vx*u,S.vz*u,jt.r,Q,qt),de&&(_e||Ce)&&(o.ranT+=u);var Ut=Ba(o.W,S.x,S.z,jt.r),Ot=hr(o.W,S.x,S.z,jt.r,Math.max(S.y,Ut),Q,10).ceil;S.onGround&&Ut<S.y-.02&&Ut>S.y-Pn?S.y=Ut:S.onGround&&Ut<S.y&&(S.onGround=!1),S.onGround&&Ut>S.y&&(S.y=Ut),S.onGround||(S.vy-=jt.gravity*u,S.y+=S.vy*u,Ot!==void 0&&S.y+Q>Ot&&(S.y=Ot-Q,S.vy>0&&(S.vy=0)),S.y<=Ut&&(S.vy<-5&&(T(1.2),S.landT=.25),S.vy<-2&&x("land"),S.y=Ut,S.vy=0,S.onGround=!0)),o.input.strafe=Ce,o.input.moving=S.x!==Vt||S.z!==Mt,o.input.vx=(S.x-Vt)/u,o.input.vz=(S.z-Mt)/u,h===0&&(o.time>14&&o.ranT<.3&&E("run"),o.time>25&&!o.jumped&&E("jump"),o.time>40&&!o.usedMap&&E("map"),o.time>70&&!o.stats.secrets&&E("secret")),a.KeyE?S.usedHeld||(S.usedHeld=!0,It()):S.usedHeld=!1,S.nextWeapon&&S.raiseT<=0&&!(S.lowerT>0)&&(S.lowerT=.15),S.lowerT>0&&(S.lowerT-=u,S.lowerT<=0&&(S.weapon=S.nextWeapon||S.weapon,S.nextWeapon=null,S.raiseT=.15)),S.raiseT>0&&(S.raiseT-=u),S.cool-=u,S.fireT+=u;var at=ws[S.weapon];if(l&&S.cool<=0&&S.raiseT<=0&&S.lowerT<=0&&!S.nextWeapon&&o.exitT<0)if(at.ammo&&S.ammo[at.ammo]<=0){x("noAmmo");var Hn=z(S);b("OUT OF "+Ku[at.ammo]+"!"),K(Hn,!0)&&Hn==="fist"&&(S.autoFist=!0),E("lowAmmo"),S.cool=.3}else{if(at.ammo&&S.ammo[at.ammo]--,S.cool=at.rate,S.fireT=0,x(S.weapon==="fist"?"punch":S.weapon),S.weapon==="shotgun"&&x("pump"),at.melee||(T(at.shake),d("fx","muzzle",S.x+Math.cos(S.ang)*.4,k()-.1,S.z+Math.sin(S.ang)*.4,{weapon:S.weapon})),F(o.boss)&&Xt.default.noteShot(o.boss.profile,S.weapon,$(o.boss.x,o.boss.z)),o.shotId++,o.firing=!0,at.melee)X(S.ang,S.pitch,at.dmgMin,at.dmgMax,!0,at.knock);else for(var yi=0;yi<at.pellets;yi++)X(S.ang+(f()-.5)*2*at.spread,S.pitch+(f()-.5)*at.spread,at.dmgMin,at.dmgMax,!1,at.knock);o.firing=!1,at.melee||Ve(S.x,S.z,14)}for(var Tn=0;Tn<o.ents.length;Tn++){var En=o.ents[Tn];En.kind!=="pickup"||En.gone||(w(En.x,En.z,S.x,S.z)<.45&&Math.abs(En.y-S.y)<.6?En.touching||Pe(En):En.touching=!1)}var In=Math.floor(S.x),Mi=Math.floor(S.z);o.secrets.forEach(function(R){!R.found&&R.x===In&&R.z===Mi&&(R.found=!0,o.stats.secrets++,x("secret"),_("SECRET AREA FOUND!","#ffd23e",2.5))})}function W(u){if(!(c!=="game"||!o)){var S=o.p;o.events.length=0,o.time+=u,S.dmgFlash=Math.max(0,S.dmgFlash-u*.8),S.bonusFlash=Math.max(0,S.bonusFlash-u*1.5),S.painT=Math.max(0,S.painT-u),S.grinT=Math.max(0,S.grinT-u),S.landT=Math.max(0,S.landT-u),o.shake=Math.max(0,o.shake-u*14);for(var B=0;B<o.msgs.length;B++)o.msgs[B].t-=u;for(;o.msgs.length&&o.msgs[0].t<=0;)o.msgs.shift();o.notice&&(o.notice.t-=u)<=0&&(o.notice=null),o.hitT-=u,o.killT-=u,o.blockT-=u;for(var re=o.hurtDirs.length-1;re>=0;re--)(o.hurtDirs[re].t-=u*.9)<=0&&o.hurtDirs.splice(re,1);if(y(u),o.spotT-=u,o.spotT<=0&&(o.spotT=.3,ve()),o.exitT>=0&&(o.exitT-=u,o.exitT<=0)){p={name:o.L.name,time:o.time,par:o.L.par,kills:o.stats.kills,totalKills:o.stats.totalKills,items:o.stats.items,totalItems:o.stats.totalItems,secrets:o.stats.secrets,totalSecrets:o.stats.totalSecrets},s(h,p),c="inter";return}tt(u),Wt(u),o.flowT-=u,o.flowT<=0&&(o.flowT=.25,Ke()),He(u);for(var Q=o.ents.length-1;Q>=0;Q--){var se=o.ents[Q];if(se.gone){o.ents.splice(Q,1);continue}if(se.kind==="torch"){se.animT+=u;continue}if(se.kind==="pickup"){se.bob+=u;continue}if(se.kind==="proj"){se.animT+=u;for(var de=3,_e=!1,Ce=0;Ce<de&&!_e;Ce++){se.x+=se.vx*u/de,se.y+=se.vy*u/de,se.z+=se.vz*u/de;var Be=Math.floor(se.x),$e=Math.floor(se.z),st=Vi(o.W,Be,$e)||se.y<sn(o.W,Be,$e)||se.y>Si(o.W,Be,$e)?"wall":xe(se);!st&&!S.dead&&w(se.x,se.z,S.x,S.z)<.2&&se.y>S.y-.1&&se.y<S.y+(S.crouch?jt.hCrouch:jt.h)+.1&&(st="player"),st&&(_e=!0,st==="player"?(De(se.dmg|0,{x:se.x-se.vx,z:se.z-se.vz,kind:se.owner?se.owner.kind:"imp"}),x("fireExplode")):(st!=="wall"&&ke(st,se.dmg|0,se.owner),x("fireExplode",se)),d("fx",se.green?"greenBurst":"fireBurst",se.x,se.y,se.z),o.ents.splice(Q,1))}continue}if(se.barrel){se.state==="boom"&&(se.st-=u,se.st<=0&&Ge(se));continue}se.kind==="riley"?Z(se,u):se.mob&&Dt(se,u)}}}function xe(u){for(var S=0;S<o.ents.length;S++){var B=o.ents[S];if(!(!B.mob||B===u.owner||!he(B))&&!(!B.barrel&&u.owner&&B.kind===u.owner.kind)){var re=B.radius+.1;if(w(u.x,u.z,B.x,B.z)<re*re&&u.y>=B.y-.1&&u.y<=B.y+B.h+.1)return B}}return null}function ue(){var u=o.p,S=Math.cos(u.pitch),B=Math.cos(u.ang)*S,re=Math.sin(u.ang)*S,Q=Math.sin(u.pitch),se=za(o.W,u.x,k(),u.z,B,Q,re,40),de=null,_e=se.dist;return o.ents.forEach(function(Ce){if(!(!Ce.mob||!he(Ce))){var Be=me(u.x,k(),u.z,B,Q,re,Ce);Be!==null&&Be<_e&&(de=Ce,_e=Be)}}),de}var Me=!1;function Ae(){if(c==="inter"){if(!Me){Me=!0;return}Me=!1,h+1>=e.length?c="victory":P(h+1,!0)}else c==="victory"?c="title":c==="game"&&o&&o.p.dead&&o.p.deadT>1.2&&O()}function pe(){return{floorAt:function(u,S){return Vi(o.W,u,S)&&!(ki(o.W,u,S)&&!ki(o.W,u,S).locked)?null:sn(o.W,u,S)},neighbours:function(u,S){var B=[],re=sn(o.W,u,S);return Es(o.W,u,S).forEach(function(Q){var se=oi(o.W,Q.x,Q.z);if(!(se!==0&&!ai[se])){var de=sn(o.W,Q.x,Q.z)-re,_e=de<=.02&&de>=-.02?"walk":de<0?"drop":de<=Pn?"step":de<=oc?"jump":null;_e&&B.push({cx:Q.x,cz:Q.z,cost:_e==="jump"?2:1,kind:_e})}}),B}}}return{keys:a,state:function(){return o},mode:function(){return c},setMode:function(u){c=u},interStats:function(){return p},levelIndex:function(){return h},levels:e,update:W,startLevel:P,retryLevel:O,onEnter:Ae,setFire:function(u){l=!!u},switchWeapon:K,cycleWeapon:ee,quickSwitch:J,useTarget:Yt,usePrompt:wt,useAction:It,objective:C,goalTarget:ye,aimTarget:ue,hurtPlayer:De,walkGraph:pe,levelInfo:A,hasAmmo:L,settings:r,DIFFS:dr}}var eh=Ts(Qu(),1),Bd={name:"E1M1: ASH GATES",floor:"slab",ceil:"ceilDark",par:90,playerAngle:0,ceilHeight:3.5,map:["#######################X######","####################..t.t....#","####################.........#","####################..i..+...#","####################....A....#","####################...L.....#","#######################U######","##....................t.t...##","##.t......%%......%%........##","##u...g......i..............##","##.t.......h.....g..........##","##..........................##","####################D#########","###*Pa#########....t.t......##","####S##########.....i.....o.##","##b......######..........io.##","##.......######......h......##","##..p....D........2.........##","##.......######..o..........##","##.......######.t.........t.##","##...h...#####################","##############################"],heights:["000000000000000000000000000000","000000000000000000008888888880","000000000000000000008888888880","000000000000000000008888888880","000000000000000000008888888880","000000000000000000008888888880","000000000000000000000000000000","000000000000000000000000000000","000000000000000000000000000000","000000000000000000000000000000","000000000001234444444444444400","000000000001234444444444444400","000000000000000000000000000000","000000000000000444444444444440","000000000000000444444444444440","000000000000000444444444444440","000000000000000446664444444440","000000000012344446664444444440","000000000000000446664444444440","000000000000000444444444444440","000000000000000000000000000000","000000000000000000000000000000"]},pr=[Bd].concat(eh.default.slice(1).map(function(i){return Object.assign({ceilHeight:2},i)}));function th(i){var e=i>>>0||1;return function(){e=e+1831565813|0;var t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Ah=0,Vc=1,Rh=2;var aa=1,Ch=2,os=3,ir=0,dn=1,kn=2,Vn=0,ls=1,Pi=2,Gc=3,Wc=4,Ih=5;var Sr=100,Ph=101,Lh=102,Dh=103,Nh=104,Uh=200,Oh=201,Fh=202,Hh=203,qc=204,Xc=205,Bh=206,zh=207,kh=208,Vh=209,Gh=210,Wh=211,qh=212,Xh=213,Yh=214,ho=0,fo=1,po=2,Zr=3,mo=4,go=5,vo=6,_o=7,Vo=0,Kh=1,Zh=2,ei=0,oa=1,la=2,ca=3,br=4,ua=5,ha=6,fa=7;var Yc=300,rr=301,Tr=302,Go=303,Wo=304,da=306,Jr=1e3,ci=1001,xo=1002,cn=1003,Jh=1004;var pa=1005;var fn=1006,qo=1007;var sr=1008;var Rn=1009,Kc=1010,Zc=1011,cs=1012,Xo=1013,ti=1014,Gn=1015,pn=1016,Yo=1017,Ko=1018,us=1020,Jc=35902,$c=35899,jc=1021,Qc=1022,Wn=1023,ui=1026,ar=1027,Zo=1028,Jo=1029,or=1030,$o=1031;var jo=1033,ma=33776,ga=33777,va=33778,_a=33779,Qo=35840,el=35841,tl=35842,nl=35843,il=36196,rl=37492,sl=37496,al=37488,ol=37489,xa=37490,ll=37491,cl=37808,ul=37809,hl=37810,fl=37811,dl=37812,pl=37813,ml=37814,gl=37815,vl=37816,_l=37817,xl=37818,yl=37819,Ml=37820,Sl=37821,bl=36492,Tl=36494,El=36495,wl=36283,Al=36284,ya=36285,Rl=36286;var Us=2300,yo=2301,co=2302,Dc=2303,Nc=2400,Uc=2401,Oc=2402;var $h=3200;var Ma=0,jh=1,ni="",hn="srgb",Os="srgb-linear",Fs="linear",vt="srgb";var uo=7680;var Qh=519,ef=512,tf=513,nf=514,Cl=515,rf=516,sf=517,Il=518,af=519,of=35044,hs=35048;var eu="300 es",jn=2e3,$r=2001;function zd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function kd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Hs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lf(){let i=Hs("canvas");return i.style.display="block",i}var nh={},jr=null;function tu(...i){let e="THREE."+i.shift();jr?jr("log",e,...i):console.log(e,...i)}function cf(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ze(...i){i=cf(i);let e="THREE."+i.shift();if(jr)jr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Je(...i){i=cf(i);let e="THREE."+i.shift();if(jr)jr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function xr(...i){let e=i.join(" ");e in nh||(nh[e]=!0,Ze(...i))}function uf(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var hf={[ho]:fo,[po]:vo,[mo]:_o,[Zr]:go,[fo]:ho,[vo]:po,[_o]:mo,[go]:Zr},hi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var uc=Math.PI/180,Mo=180/Math.PI;function Sa(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function ft(i,e,t){return Math.max(e,Math.min(t,i))}function Vd(i,e){return(i%e+e)%e}function hc(i,e,t){return(1-t)*i+t*e}function Rs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function wn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var au=class au{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};au.prototype.isVector2=!0;var qe=au,fi=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,l){let c=n[r+0],h=n[r+1],o=n[r+2],p=n[r+3],f=s[a+0],m=s[a+1],v=s[a+2],w=s[a+3];if(p!==w||c!==f||h!==m||o!==v){let g=c*f+h*m+o*v+p*w;g<0&&(f=-f,m=-m,v=-v,w=-w,g=-g);let d=1-l;if(g<.9995){let x=Math.acos(g),U=Math.sin(x);d=Math.sin(d*x)/U,l=Math.sin(l*x)/U,c=c*d+f*l,h=h*d+m*l,o=o*d+v*l,p=p*d+w*l}else{c=c*d+f*l,h=h*d+m*l,o=o*d+v*l,p=p*d+w*l;let x=1/Math.sqrt(c*c+h*h+o*o+p*p);c*=x,h*=x,o*=x,p*=x}}e[t]=c,e[t+1]=h,e[t+2]=o,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,s,a){let l=n[r],c=n[r+1],h=n[r+2],o=n[r+3],p=s[a],f=s[a+1],m=s[a+2],v=s[a+3];return e[t]=l*v+o*p+c*m-h*f,e[t+1]=c*v+o*f+h*p-l*m,e[t+2]=h*v+o*m+l*f-c*p,e[t+3]=o*v-l*p-c*f-h*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,l=Math.cos,c=Math.sin,h=l(n/2),o=l(r/2),p=l(s/2),f=c(n/2),m=c(r/2),v=c(s/2);switch(a){case"XYZ":this._x=f*o*p+h*m*v,this._y=h*m*p-f*o*v,this._z=h*o*v+f*m*p,this._w=h*o*p-f*m*v;break;case"YXZ":this._x=f*o*p+h*m*v,this._y=h*m*p-f*o*v,this._z=h*o*v-f*m*p,this._w=h*o*p+f*m*v;break;case"ZXY":this._x=f*o*p-h*m*v,this._y=h*m*p+f*o*v,this._z=h*o*v+f*m*p,this._w=h*o*p-f*m*v;break;case"ZYX":this._x=f*o*p-h*m*v,this._y=h*m*p+f*o*v,this._z=h*o*v-f*m*p,this._w=h*o*p+f*m*v;break;case"YZX":this._x=f*o*p+h*m*v,this._y=h*m*p+f*o*v,this._z=h*o*v-f*m*p,this._w=h*o*p-f*m*v;break;case"XZY":this._x=f*o*p-h*m*v,this._y=h*m*p-f*o*v,this._z=h*o*v+f*m*p,this._w=h*o*p+f*m*v;break;default:Ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],l=t[5],c=t[9],h=t[2],o=t[6],p=t[10],f=n+l+p;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(o-c)*m,this._y=(s-h)*m,this._z=(a-r)*m}else if(n>l&&n>p){let m=2*Math.sqrt(1+n-l-p);this._w=(o-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+h)/m}else if(l>p){let m=2*Math.sqrt(1+l-n-p);this._w=(s-h)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+o)/m}else{let m=2*Math.sqrt(1+p-n-l);this._w=(a-r)/m,this._x=(s+h)/m,this._y=(c+o)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,l=t._x,c=t._y,h=t._z,o=t._w;return this._x=n*o+a*l+r*h-s*c,this._y=r*o+a*c+s*l-n*h,this._z=s*o+a*h+n*c-r*l,this._w=a*o-n*l-r*c-s*h,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,l=this.dot(e);l<0&&(n=-n,r=-r,s=-s,a=-a,l=-l);let c=1-t;if(l<.9995){let h=Math.acos(l),o=Math.sin(h);c=Math.sin(c*h)/o,t=Math.sin(t*h)/o,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ou=class ou{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ih.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ih.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,l=e.z,c=e.w,h=2*(a*r-l*n),o=2*(l*t-s*r),p=2*(s*n-a*t);return this.x=t+c*h+a*p-l*o,this.y=n+c*o+l*h-s*p,this.z=r+c*p+s*o-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,l=t.y,c=t.z;return this.x=r*c-s*l,this.y=s*a-n*c,this.z=n*l-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fc.copy(this).projectOnVector(e),this.sub(fc)}reflect(e){return this.sub(fc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ou.prototype.isVector3=!0;var te=ou,fc=new te,ih=new fi,lu=class lu{constructor(e,t,n,r,s,a,l,c,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,l,c,h)}set(e,t,n,r,s,a,l,c,h){let o=this.elements;return o[0]=e,o[1]=r,o[2]=l,o[3]=t,o[4]=s,o[5]=c,o[6]=n,o[7]=a,o[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],l=n[3],c=n[6],h=n[1],o=n[4],p=n[7],f=n[2],m=n[5],v=n[8],w=r[0],g=r[3],d=r[6],x=r[1],U=r[4],A=r[7],I=r[2],P=r[5],O=r[8];return s[0]=a*w+l*x+c*I,s[3]=a*g+l*U+c*P,s[6]=a*d+l*A+c*O,s[1]=h*w+o*x+p*I,s[4]=h*g+o*U+p*P,s[7]=h*d+o*A+p*O,s[2]=f*w+m*x+v*I,s[5]=f*g+m*U+v*P,s[8]=f*d+m*A+v*O,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],h=e[7],o=e[8];return t*a*o-t*l*h-n*s*o+n*l*c+r*s*h-r*a*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],h=e[7],o=e[8],p=o*a-l*h,f=l*c-o*s,m=h*s-a*c,v=t*p+n*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let w=1/v;return e[0]=p*w,e[1]=(r*h-o*n)*w,e[2]=(l*n-r*a)*w,e[3]=f*w,e[4]=(o*t-r*c)*w,e[5]=(r*s-l*t)*w,e[6]=m*w,e[7]=(n*c-h*t)*w,e[8]=(a*t-n*s)*w,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,l){let c=Math.cos(s),h=Math.sin(s);return this.set(n*c,n*h,-n*(c*a+h*l)+a+e,-r*h,r*c,-r*(-h*a+c*l)+l+t,0,0,1),this}scale(e,t){return xr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(dc.makeScale(e,t)),this}rotate(e){return xr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(dc.makeRotation(-e)),this}translate(e,t){return xr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(dc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};lu.prototype.isMatrix3=!0;var je=lu,dc=new je,rh=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sh=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gd(){let i={enabled:!0,workingColorSpace:Os,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===vt&&(r.r=Ci(r.r),r.g=Ci(r.g),r.b=Ci(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===vt&&(r.r=Kr(r.r),r.g=Kr(r.g),r.b=Kr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ni?Fs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return xr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return xr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Os]:{primaries:e,whitePoint:n,transfer:Fs,toXYZ:rh,fromXYZ:sh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:rh,fromXYZ:sh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),i}var lt=Gd();function Ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Kr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Nr,So=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Nr===void 0&&(Nr=Hs("canvas")),Nr.width=e.width,Nr.height=e.height;let r=Nr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Nr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Hs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ci(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ci(t[n]/255)*255):t[n]=Ci(t[n]);return{data:t,width:e.width,height:e.height}}else return Ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Wd=0,Qr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=Sa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?s.push(pc(r[a].image)):s.push(pc(r[a]))}else s=pc(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function pc(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?So.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ze("Texture: Unable to serialize Texture."),{})}var qd=0,mc=new te,Mn=class i extends hi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ci,r=ci,s=fn,a=sr,l=Wn,c=Rn,h=i.DEFAULT_ANISOTROPY,o=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Sa(),this.name="",this.source=new Qr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=o,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(mc).x}get height(){return this.source.getSize(mc).y}get depth(){return this.source.getSize(mc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ze(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jr:e.x=e.x-Math.floor(e.x);break;case ci:e.x=e.x<0?0:1;break;case xo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jr:e.y=e.y-Math.floor(e.y);break;case ci:e.y=e.y<0?0:1;break;case xo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=Yc;Mn.DEFAULT_ANISOTROPY=1;var cu=class cu{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,h=c[0],o=c[4],p=c[8],f=c[1],m=c[5],v=c[9],w=c[2],g=c[6],d=c[10];if(Math.abs(o-f)<.01&&Math.abs(p-w)<.01&&Math.abs(v-g)<.01){if(Math.abs(o+f)<.1&&Math.abs(p+w)<.1&&Math.abs(v+g)<.1&&Math.abs(h+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let U=(h+1)/2,A=(m+1)/2,I=(d+1)/2,P=(o+f)/4,O=(p+w)/4,b=(v+g)/4;return U>A&&U>I?U<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(U),r=P/n,s=O/n):A>I?A<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),n=P/r,s=b/r):I<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),n=O/s,r=b/s),this.set(n,r,s,t),this}let x=Math.sqrt((g-v)*(g-v)+(p-w)*(p-w)+(f-o)*(f-o));return Math.abs(x)<.001&&(x=1),this.x=(g-v)/x,this.y=(p-w)/x,this.z=(f-o)/x,this.w=Math.acos((h+m+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};cu.prototype.isVector4=!0;var zt=cu,bo=class extends hi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},s=new Mn(r),a=n.count;for(let l=0;l<a;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Qr(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},en=class extends bo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Bs=class extends Mn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var To=class extends Mn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ko=class ko{constructor(e,t,n,r,s,a,l,c,h,o,p,f,m,v,w,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,l,c,h,o,p,f,m,v,w,g)}set(e,t,n,r,s,a,l,c,h,o,p,f,m,v,w,g){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=l,d[13]=c,d[2]=h,d[6]=o,d[10]=p,d[14]=f,d[3]=m,d[7]=v,d[11]=w,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ko().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Ur.setFromMatrixColumn(e,0).length(),s=1/Ur.setFromMatrixColumn(e,1).length(),a=1/Ur.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),l=Math.sin(n),c=Math.cos(r),h=Math.sin(r),o=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){let f=a*o,m=a*p,v=l*o,w=l*p;t[0]=c*o,t[4]=-c*p,t[8]=h,t[1]=m+v*h,t[5]=f-w*h,t[9]=-l*c,t[2]=w-f*h,t[6]=v+m*h,t[10]=a*c}else if(e.order==="YXZ"){let f=c*o,m=c*p,v=h*o,w=h*p;t[0]=f+w*l,t[4]=v*l-m,t[8]=a*h,t[1]=a*p,t[5]=a*o,t[9]=-l,t[2]=m*l-v,t[6]=w+f*l,t[10]=a*c}else if(e.order==="ZXY"){let f=c*o,m=c*p,v=h*o,w=h*p;t[0]=f-w*l,t[4]=-a*p,t[8]=v+m*l,t[1]=m+v*l,t[5]=a*o,t[9]=w-f*l,t[2]=-a*h,t[6]=l,t[10]=a*c}else if(e.order==="ZYX"){let f=a*o,m=a*p,v=l*o,w=l*p;t[0]=c*o,t[4]=v*h-m,t[8]=f*h+w,t[1]=c*p,t[5]=w*h+f,t[9]=m*h-v,t[2]=-h,t[6]=l*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,m=a*h,v=l*c,w=l*h;t[0]=c*o,t[4]=w-f*p,t[8]=v*p+m,t[1]=p,t[5]=a*o,t[9]=-l*o,t[2]=-h*o,t[6]=m*p+v,t[10]=f-w*p}else if(e.order==="XZY"){let f=a*c,m=a*h,v=l*c,w=l*h;t[0]=c*o,t[4]=-p,t[8]=h*o,t[1]=f*p+w,t[5]=a*o,t[9]=m*p-v,t[2]=v*p-m,t[6]=l*o,t[10]=w*p+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xd,e,Yd)}lookAt(e,t,n){let r=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Wi.crossVectors(n,Ln),Wi.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Wi.crossVectors(n,Ln)),Wi.normalize(),ka.crossVectors(Ln,Wi),r[0]=Wi.x,r[4]=ka.x,r[8]=Ln.x,r[1]=Wi.y,r[5]=ka.y,r[9]=Ln.y,r[2]=Wi.z,r[6]=ka.z,r[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],l=n[4],c=n[8],h=n[12],o=n[1],p=n[5],f=n[9],m=n[13],v=n[2],w=n[6],g=n[10],d=n[14],x=n[3],U=n[7],A=n[11],I=n[15],P=r[0],O=r[4],b=r[8],_=r[12],T=r[1],E=r[5],y=r[9],C=r[13],L=r[2],z=r[6],K=r[10],ee=r[14],J=r[3],k=r[7],$=r[11],X=r[15];return s[0]=a*P+l*T+c*L+h*J,s[4]=a*O+l*E+c*z+h*k,s[8]=a*b+l*y+c*K+h*$,s[12]=a*_+l*C+c*ee+h*X,s[1]=o*P+p*T+f*L+m*J,s[5]=o*O+p*E+f*z+m*k,s[9]=o*b+p*y+f*K+m*$,s[13]=o*_+p*C+f*ee+m*X,s[2]=v*P+w*T+g*L+d*J,s[6]=v*O+w*E+g*z+d*k,s[10]=v*b+w*y+g*K+d*$,s[14]=v*_+w*C+g*ee+d*X,s[3]=x*P+U*T+A*L+I*J,s[7]=x*O+U*E+A*z+I*k,s[11]=x*b+U*y+A*K+I*$,s[15]=x*_+U*C+A*ee+I*X,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],l=e[5],c=e[9],h=e[13],o=e[2],p=e[6],f=e[10],m=e[14],v=e[3],w=e[7],g=e[11],d=e[15],x=c*m-h*f,U=l*m-h*p,A=l*f-c*p,I=a*m-h*o,P=a*f-c*o,O=a*p-l*o;return t*(w*x-g*U+d*A)-n*(v*x-g*I+d*P)+r*(v*U-w*I+d*O)-s*(v*A-w*P+g*O)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],l=e[9],c=e[2],h=e[6],o=e[10];return t*(a*o-l*h)-n*(s*o-l*c)+r*(s*h-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],h=e[7],o=e[8],p=e[9],f=e[10],m=e[11],v=e[12],w=e[13],g=e[14],d=e[15],x=t*l-n*a,U=t*c-r*a,A=t*h-s*a,I=n*c-r*l,P=n*h-s*l,O=r*h-s*c,b=o*w-p*v,_=o*g-f*v,T=o*d-m*v,E=p*g-f*w,y=p*d-m*w,C=f*d-m*g,L=x*C-U*y+A*E+I*T-P*_+O*b;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/L;return e[0]=(l*C-c*y+h*E)*z,e[1]=(r*y-n*C-s*E)*z,e[2]=(w*O-g*P+d*I)*z,e[3]=(f*P-p*O-m*I)*z,e[4]=(c*T-a*C-h*_)*z,e[5]=(t*C-r*T+s*_)*z,e[6]=(g*A-v*O-d*U)*z,e[7]=(o*O-f*A+m*U)*z,e[8]=(a*y-l*T+h*b)*z,e[9]=(n*T-t*y-s*b)*z,e[10]=(v*P-w*A+d*x)*z,e[11]=(p*A-o*P-m*x)*z,e[12]=(l*_-a*E-c*b)*z,e[13]=(t*E-n*_+r*b)*z,e[14]=(w*U-v*I-g*x)*z,e[15]=(o*I-p*U+f*x)*z,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,l=e.y,c=e.z,h=s*a,o=s*l;return this.set(h*a+n,h*l-r*c,h*c+r*l,0,h*l+r*c,o*l+n,o*c-r*a,0,h*c-r*l,o*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,l=t._z,c=t._w,h=s+s,o=a+a,p=l+l,f=s*h,m=s*o,v=s*p,w=a*o,g=a*p,d=l*p,x=c*h,U=c*o,A=c*p,I=n.x,P=n.y,O=n.z;return r[0]=(1-(w+d))*I,r[1]=(m+A)*I,r[2]=(v-U)*I,r[3]=0,r[4]=(m-A)*P,r[5]=(1-(f+d))*P,r[6]=(g+x)*P,r[7]=0,r[8]=(v+U)*O,r[9]=(g-x)*O,r[10]=(1-(f+w))*O,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Ur.set(r[0],r[1],r[2]).length(),l=Ur.set(r[4],r[5],r[6]).length(),c=Ur.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Kn.copy(this);let h=1/a,o=1/l,p=1/c;return Kn.elements[0]*=h,Kn.elements[1]*=h,Kn.elements[2]*=h,Kn.elements[4]*=o,Kn.elements[5]*=o,Kn.elements[6]*=o,Kn.elements[8]*=p,Kn.elements[9]*=p,Kn.elements[10]*=p,t.setFromRotationMatrix(Kn),n.x=a,n.y=l,n.z=c,this}makePerspective(e,t,n,r,s,a,l=jn,c=!1){let h=this.elements,o=2*s/(t-e),p=2*s/(n-r),f=(t+e)/(t-e),m=(n+r)/(n-r),v,w;if(c)v=s/(a-s),w=a*s/(a-s);else if(l===jn)v=-(a+s)/(a-s),w=-2*a*s/(a-s);else if(l===$r)v=-a/(a-s),w=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=o,h[4]=0,h[8]=f,h[12]=0,h[1]=0,h[5]=p,h[9]=m,h[13]=0,h[2]=0,h[6]=0,h[10]=v,h[14]=w,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,r,s,a,l=jn,c=!1){let h=this.elements,o=2/(t-e),p=2/(n-r),f=-(t+e)/(t-e),m=-(n+r)/(n-r),v,w;if(c)v=1/(a-s),w=a/(a-s);else if(l===jn)v=-2/(a-s),w=-(a+s)/(a-s);else if(l===$r)v=-1/(a-s),w=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=o,h[4]=0,h[8]=0,h[12]=f,h[1]=0,h[5]=p,h[9]=0,h[13]=m,h[2]=0,h[6]=0,h[10]=v,h[14]=w,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ko.prototype.isMatrix4=!0;var Lt=ko,Ur=new te,Kn=new Lt,Xd=new te(0,0,0),Yd=new te(1,1,1),Wi=new te,ka=new te,Ln=new te,ah=new Lt,oh=new fi,di=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],l=r[8],c=r[1],h=r[5],o=r[9],p=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-o,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(o,-1,1)),Math.abs(o)<.9999999?(this._y=Math.atan2(l,m),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(ft(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ft(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-o,h),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(l,m));break;case"XZY":this._z=Math.asin(-ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-o,m),this._y=0);break;default:Ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ah.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ah,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return oh.setFromEuler(this),this.setFromQuaternion(oh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};di.DEFAULT_ORDER="XYZ";var zs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Kd=0,lh=new te,Or=new fi,Ti=new Lt,Va=new te,Cs=new te,Zd=new te,Jd=new fi,ch=new te(1,0,0),uh=new te(0,1,0),hh=new te(0,0,1),fh={type:"added"},$d={type:"removed"},Fr={type:"childadded",child:null},gc={type:"childremoved",child:null},tn=class i extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=Sa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new te,t=new di,n=new fi,r=new te(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Lt},normalMatrix:{value:new je}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Or.setFromAxisAngle(e,t),this.quaternion.multiply(Or),this}rotateOnWorldAxis(e,t){return Or.setFromAxisAngle(e,t),this.quaternion.premultiply(Or),this}rotateX(e){return this.rotateOnAxis(ch,e)}rotateY(e){return this.rotateOnAxis(uh,e)}rotateZ(e){return this.rotateOnAxis(hh,e)}translateOnAxis(e,t){return lh.copy(e).applyQuaternion(this.quaternion),this.position.add(lh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ch,e)}translateY(e){return this.translateOnAxis(uh,e)}translateZ(e){return this.translateOnAxis(hh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Va.copy(e):Va.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Cs,Va,this.up):Ti.lookAt(Va,Cs,this.up),this.quaternion.setFromRotationMatrix(Ti),r&&(Ti.extractRotation(r.matrixWorld),Or.setFromRotationMatrix(Ti),this.quaternion.premultiply(Or.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fh),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($d),gc.child=e,this.dispatchEvent(gc),gc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fh),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,e,Zd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,Jd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let h=0,o=c.length;h<o;h++){let p=c[h];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(s(e.materials,this.material[c]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];r.animations.push(s(e.animations,c))}}if(t){let l=a(e.geometries),c=a(e.materials),h=a(e.textures),o=a(e.images),p=a(e.shapes),f=a(e.skeletons),m=a(e.animations),v=a(e.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),o.length>0&&(n.images=o),p.length>0&&(n.shapes=p),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(l){let c=[];for(let h in l){let o=l[h];delete o.metadata,c.push(o)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};tn.DEFAULT_UP=new te(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gt=class extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}},jd={type:"move"},es=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,l=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(let w of e.hand.values()){let g=t.getJointPose(w,n),d=this._getHandJoint(h,w);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}let o=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],f=o.position.distanceTo(p.position),m=.02,v=.005;h.inputState.pinching&&f>m+v?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&f<=m-v&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(jd)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new gt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ff={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},Ga={h:0,s:0,l:0};function vc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var We=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=lt.workingColorSpace){if(e=Vd(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=vc(a,s,e+1/3),this.g=vc(a,s,e),this.b=vc(a,s,e-1/3)}return lt.colorSpaceToWorking(this,r),this}setStyle(e,t=hn){function n(s){s!==void 0&&parseFloat(s)<1&&Ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hn){let n=ff[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=Kr(e.r),this.g=Kr(e.g),this.b=Kr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return lt.workingToColorSpace(vn.copy(this),e),Math.round(ft(vn.r*255,0,255))*65536+Math.round(ft(vn.g*255,0,255))*256+Math.round(ft(vn.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(vn.copy(this),t);let n=vn.r,r=vn.g,s=vn.b,a=Math.max(n,r,s),l=Math.min(n,r,s),c,h,o=(l+a)/2;if(l===a)c=0,h=0;else{let p=a-l;switch(h=o<=.5?p/(a+l):p/(2-a-l),a){case n:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-n)/p+2;break;case s:c=(n-r)/p+4;break}c/=6}return e.h=c,e.s=h,e.l=o,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=hn){lt.workingToColorSpace(vn.copy(this),e);let t=vn.r,n=vn.g,r=vn.b;return e!==hn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(Ga);let n=hc(qi.h,Ga.h,t),r=hc(qi.s,Ga.s,t),s=hc(qi.l,Ga.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vn=new We;We.NAMES=ff;var ks=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new We(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ji=class extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Zn=new te,Ei=new te,_c=new te,wi=new te,Hr=new te,Br=new te,dh=new te,xc=new te,yc=new te,Mc=new te,Sc=new zt,bc=new zt,Tc=new zt,Zi=class i{constructor(e=new te,t=new te,n=new te){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Zn.subVectors(e,t),r.cross(Zn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Zn.subVectors(r,t),Ei.subVectors(n,t),_c.subVectors(e,t);let a=Zn.dot(Zn),l=Zn.dot(Ei),c=Zn.dot(_c),h=Ei.dot(Ei),o=Ei.dot(_c),p=a*h-l*l;if(p===0)return s.set(0,0,0),null;let f=1/p,m=(h*c-l*o)*f,v=(a*o-l*c)*f;return s.set(1-m-v,v,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,t,n,r,s,a,l,c){return this.getBarycoord(e,t,n,r,wi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,wi.x),c.addScaledVector(a,wi.y),c.addScaledVector(l,wi.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Sc.setScalar(0),bc.setScalar(0),Tc.setScalar(0),Sc.fromBufferAttribute(e,t),bc.fromBufferAttribute(e,n),Tc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Sc,s.x),a.addScaledVector(bc,s.y),a.addScaledVector(Tc,s.z),a}static isFrontFacing(e,t,n,r){return Zn.subVectors(n,t),Ei.subVectors(e,t),Zn.cross(Ei).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Zn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,l;Hr.subVectors(r,n),Br.subVectors(s,n),xc.subVectors(e,n);let c=Hr.dot(xc),h=Br.dot(xc);if(c<=0&&h<=0)return t.copy(n);yc.subVectors(e,r);let o=Hr.dot(yc),p=Br.dot(yc);if(o>=0&&p<=o)return t.copy(r);let f=c*p-o*h;if(f<=0&&c>=0&&o<=0)return a=c/(c-o),t.copy(n).addScaledVector(Hr,a);Mc.subVectors(e,s);let m=Hr.dot(Mc),v=Br.dot(Mc);if(v>=0&&m<=v)return t.copy(s);let w=m*h-c*v;if(w<=0&&h>=0&&v<=0)return l=h/(h-v),t.copy(n).addScaledVector(Br,l);let g=o*v-m*p;if(g<=0&&p-o>=0&&m-v>=0)return dh.subVectors(s,r),l=(p-o)/(p-o+(m-v)),t.copy(r).addScaledVector(dh,l);let d=1/(g+w+f);return a=w*d,l=f*d,t.copy(n).addScaledVector(Hr,a).addScaledVector(Br,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},pi=class{constructor(e=new te(1/0,1/0,1/0),t=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=s.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,Jn):Jn.fromBufferAttribute(s,a),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wa.copy(n.boundingBox)),Wa.applyMatrix4(e.matrixWorld),this.union(Wa)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Is),qa.subVectors(this.max,Is),zr.subVectors(e.a,Is),kr.subVectors(e.b,Is),Vr.subVectors(e.c,Is),Xi.subVectors(kr,zr),Yi.subVectors(Vr,kr),mr.subVectors(zr,Vr);let t=[0,-Xi.z,Xi.y,0,-Yi.z,Yi.y,0,-mr.z,mr.y,Xi.z,0,-Xi.x,Yi.z,0,-Yi.x,mr.z,0,-mr.x,-Xi.y,Xi.x,0,-Yi.y,Yi.x,0,-mr.y,mr.x,0];return!Ec(t,zr,kr,Vr,qa)||(t=[1,0,0,0,1,0,0,0,1],!Ec(t,zr,kr,Vr,qa))?!1:(Xa.crossVectors(Xi,Yi),t=[Xa.x,Xa.y,Xa.z],Ec(t,zr,kr,Vr,qa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ai=[new te,new te,new te,new te,new te,new te,new te,new te],Jn=new te,Wa=new pi,zr=new te,kr=new te,Vr=new te,Xi=new te,Yi=new te,mr=new te,Is=new te,qa=new te,Xa=new te,gr=new te;function Ec(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){gr.fromArray(i,s);let l=r.x*Math.abs(gr.x)+r.y*Math.abs(gr.y)+r.z*Math.abs(gr.z),c=e.dot(gr),h=t.dot(gr),o=n.dot(gr);if(Math.max(-Math.max(c,h,o),Math.min(c,h,o))>l)return!1}return!0}var Qt=new te,Ya=new qe,Qd=0,ln=class extends hi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=of,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ya.fromBufferAttribute(this,t),Ya.applyMatrix3(e),this.setXY(t,Ya.x,Ya.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Rs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rs(t,this.array)),t}setX(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rs(t,this.array)),t}setY(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rs(t,this.array)),t}setW(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),n=wn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),n=wn(n,this.array),r=wn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),n=wn(n,this.array),r=wn(r,this.array),s=wn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Vs=class extends ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Gs=class extends ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var _t=class extends ln{constructor(e,t,n){super(new Float32Array(e),t,n)}},ep=new pi,Ps=new te,wc=new te,Ii=class{constructor(e=new te,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ep.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ps.subVectors(e,this.center);let t=Ps.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ps,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ps.copy(e.center).add(wc)),this.expandByPoint(Ps.copy(e.center).sub(wc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},tp=0,zn=new Lt,Ac=new tn,Gr=new te,Dn=new pi,Ls=new pi,an=new te,Zt=class i extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=Sa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zd(e)?Gs:Vs)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,t,n){return zn.makeTranslation(e,t,n),this.applyMatrix4(zn),this}scale(e,t,n){return zn.makeScale(e,t,n),this.applyMatrix4(zn),this}lookAt(e){return Ac.lookAt(e),Ac.updateMatrix(),this.applyMatrix4(Ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _t(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Dn.setFromBufferAttribute(s),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ii);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){let n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let l=t[s];Ls.setFromBufferAttribute(l),this.morphTargetsRelative?(an.addVectors(Dn.min,Ls.min),Dn.expandByPoint(an),an.addVectors(Dn.max,Ls.max),Dn.expandByPoint(an)):(Dn.expandByPoint(Ls.min),Dn.expandByPoint(Ls.max))}Dn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)an.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(an));if(t)for(let s=0,a=t.length;s<a;s++){let l=t[s],c=this.morphTargetsRelative;for(let h=0,o=l.count;h<o;h++)an.fromBufferAttribute(l,h),c&&(Gr.fromBufferAttribute(e,h),an.add(Gr)),r=Math.max(r,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ln(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let l=[],c=[];for(let b=0;b<n.count;b++)l[b]=new te,c[b]=new te;let h=new te,o=new te,p=new te,f=new qe,m=new qe,v=new qe,w=new te,g=new te;function d(b,_,T){h.fromBufferAttribute(n,b),o.fromBufferAttribute(n,_),p.fromBufferAttribute(n,T),f.fromBufferAttribute(s,b),m.fromBufferAttribute(s,_),v.fromBufferAttribute(s,T),o.sub(h),p.sub(h),m.sub(f),v.sub(f);let E=1/(m.x*v.y-v.x*m.y);isFinite(E)&&(w.copy(o).multiplyScalar(v.y).addScaledVector(p,-m.y).multiplyScalar(E),g.copy(p).multiplyScalar(m.x).addScaledVector(o,-v.x).multiplyScalar(E),l[b].add(w),l[_].add(w),l[T].add(w),c[b].add(g),c[_].add(g),c[T].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let b=0,_=x.length;b<_;++b){let T=x[b],E=T.start,y=T.count;for(let C=E,L=E+y;C<L;C+=3)d(e.getX(C+0),e.getX(C+1),e.getX(C+2))}let U=new te,A=new te,I=new te,P=new te;function O(b){I.fromBufferAttribute(r,b),P.copy(I);let _=l[b];U.copy(_),U.sub(I.multiplyScalar(I.dot(_))).normalize(),A.crossVectors(P,_);let E=A.dot(c[b])<0?-1:1;a.setXYZW(b,U.x,U.y,U.z,E)}for(let b=0,_=x.length;b<_;++b){let T=x[b],E=T.start,y=T.count;for(let C=E,L=E+y;C<L;C+=3)O(e.getX(C+0)),O(e.getX(C+1)),O(e.getX(C+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let r=new te,s=new te,a=new te,l=new te,c=new te,h=new te,o=new te,p=new te;if(e)for(let f=0,m=e.count;f<m;f+=3){let v=e.getX(f+0),w=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,w),a.fromBufferAttribute(t,g),o.subVectors(a,s),p.subVectors(r,s),o.cross(p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,w),h.fromBufferAttribute(n,g),l.add(o),c.add(o),h.add(o),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(w,c.x,c.y,c.z),n.setXYZ(g,h.x,h.y,h.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),o.subVectors(a,s),p.subVectors(r,s),o.cross(p),n.setXYZ(f+0,o.x,o.y,o.z),n.setXYZ(f+1,o.x,o.y,o.z),n.setXYZ(f+2,o.x,o.y,o.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(l,c){let h=l.array,o=l.itemSize,p=l.normalized,f=new h.constructor(c.length*o),m=0,v=0;for(let w=0,g=c.length;w<g;w++){l.isInterleavedBufferAttribute?m=c[w]*l.data.stride+l.offset:m=c[w]*o;for(let d=0;d<o;d++)f[v++]=h[m++]}return new ln(f,o,p)}if(this.index===null)return Ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let l in r){let c=r[l],h=e(c,n);t.setAttribute(l,h)}let s=this.morphAttributes;for(let l in s){let c=[],h=s[l];for(let o=0,p=h.length;o<p;o++){let f=h[o],m=e(f,n);c.push(m)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,c=a.length;l<c;l++){let h=a[l];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(e[h]=c[h]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let h=n[c];e.data.attributes[c]=h.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],o=[];for(let p=0,f=h.length;p<f;p++){let m=h[p];o.push(m.toJSON(e.data))}o.length>0&&(r[c]=o,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let h in r){let o=r[h];this.setAttribute(h,o.clone(t))}let s=e.morphAttributes;for(let h in s){let o=[],p=s[h];for(let f=0,m=p.length;f<m;f++)o.push(p[f].clone(t));this.morphAttributes[h]=o}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let h=0,o=a.length;h<o;h++){let p=a[h];this.addGroup(p.start,p.count,p.materialIndex)}let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Rc=new te,np=new te,ip=new je,$n=class{constructor(e=new te(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Rc.subVectors(n,t).cross(np.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Rc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ip.getNormalMatrix(e),r=this.coplanarPoint(Rc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},rp=0,mi=class extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=Sa(),this.name="",this.type="Material",this.blending=ls,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qc,this.blendDst=Xc,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=uo,this.stencilZFail=uo,this.stencilZPass=uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ze(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let a=[];for(let l in s){let c=s[l];delete c.metadata,a.push(c)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new We().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new $n().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new qe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ri=new te,Cc=new te,Ka=new te,Za=new te,Ws=class{constructor(e=new te,t=new te(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,t),Ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Cc.copy(e).add(t).multiplyScalar(.5),Ka.copy(t).sub(e).normalize(),Za.copy(this.origin).sub(Cc);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Ka),l=Za.dot(this.direction),c=-Za.dot(Ka),h=Za.lengthSq(),o=Math.abs(1-a*a),p,f,m,v;if(o>0)if(p=a*c-l,f=a*l-c,v=s*o,p>=0)if(f>=-v)if(f<=v){let w=1/o;p*=w,f*=w,m=p*(p+a*f+2*l)+f*(a*p+f+2*c)+h}else f=s,p=Math.max(0,-(a*f+l)),m=-p*p+f*(f+2*c)+h;else f=-s,p=Math.max(0,-(a*f+l)),m=-p*p+f*(f+2*c)+h;else f<=-v?(p=Math.max(0,-(-a*s+l)),f=p>0?-s:Math.min(Math.max(-s,-c),s),m=-p*p+f*(f+2*c)+h):f<=v?(p=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+h):(p=Math.max(0,-(a*s+l)),f=p>0?s:Math.min(Math.max(-s,-c),s),m=-p*p+f*(f+2*c)+h);else f=a>0?-s:s,p=Math.max(0,-(a*f+l)),m=-p*p+f*(f+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Cc).addScaledVector(Ka,f),m}intersectSphere(e,t){if(e.radius<0)return null;Ri.subVectors(e.center,this.origin);let n=Ri.dot(this.direction),r=Ri.dot(Ri)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),l=n-a,c=n+a;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,l,c,h=1/this.direction.x,o=1/this.direction.y,p=1/this.direction.z,f=this.origin;return h>=0?(n=(e.min.x-f.x)*h,r=(e.max.x-f.x)*h):(n=(e.max.x-f.x)*h,r=(e.min.x-f.x)*h),o>=0?(s=(e.min.y-f.y)*o,a=(e.max.y-f.y)*o):(s=(e.max.y-f.y)*o,a=(e.min.y-f.y)*o),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),p>=0?(l=(e.min.z-f.z)*p,c=(e.max.z-f.z)*p):(l=(e.max.z-f.z)*p,c=(e.min.z-f.z)*p),n>c||l>r)||((l>n||n!==n)&&(n=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,t,n,r,s){let a=this.origin,l=this.direction,c=l.x,h=l.y,o=l.z,p=e.x-a.x,f=e.y-a.y,m=e.z-a.z,v=t.x-a.x,w=t.y-a.y,g=t.z-a.z,d=n.x-a.x,x=n.y-a.y,U=n.z-a.z,A=Math.abs(c),I=Math.abs(h),P=Math.abs(o),O,b,_,T,E,y,C,L,z,K,ee,J;if(A>=I&&A>=P?(_=c,y=p,z=v,J=d,c>=0?(O=h,b=o,T=f,E=m,C=w,L=g,K=x,ee=U):(O=o,b=h,T=m,E=f,C=g,L=w,K=U,ee=x)):I>=P?(_=h,y=f,z=w,J=x,h>=0?(O=o,b=c,T=m,E=p,C=g,L=v,K=U,ee=d):(O=c,b=o,T=p,E=m,C=v,L=g,K=d,ee=U)):(_=o,y=m,z=g,J=U,o>=0?(O=c,b=h,T=p,E=f,C=v,L=w,K=d,ee=x):(O=h,b=c,T=f,E=p,C=w,L=v,K=x,ee=d)),_===0)return null;let k=O/_,$=b/_,X=1/_,me=T-k*y,he=E-$*y,ke=C-k*z,Ge=L-$*z,De=K-k*J,ae=ee-$*J,ce=De*Ge-ae*ke,be=me*ae-he*De,Ve=ke*he-Ge*me;if(r){if(ce<0||be<0||Ve<0)return null}else if((ce<0||be<0||Ve<0)&&(ce>0||be>0||Ve>0))return null;let Se=ce+be+Ve;if(Se===0)return null;let Ke=X*(ce*y+be*z+Ve*J);return(Se>0?Ke<0:Ke>0)?null:this.at(Ke/Se,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gi=class extends mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=Vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ph=new Lt,vr=new Ws,Ja=new Ii,mh=new te,$a=new te,ja=new te,Qa=new te,Ic=new te,eo=new te,gh=new te,to=new te,ut=class extends tn{constructor(e=new Zt,t=new gi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let l=this.morphTargetInfluences;if(s&&l){eo.set(0,0,0);for(let c=0,h=s.length;c<h;c++){let o=l[c],p=s[c];o!==0&&(Ic.fromBufferAttribute(p,e),a?eo.addScaledVector(Ic,o):eo.addScaledVector(Ic.sub(t),o))}t.add(eo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ja.copy(n.boundingSphere),Ja.applyMatrix4(s),vr.copy(e.ray).recast(e.near),!(Ja.containsPoint(vr.origin)===!1&&(vr.intersectSphere(Ja,mh)===null||vr.origin.distanceToSquared(mh)>(e.far-e.near)**2))&&(ph.copy(s).invert(),vr.copy(e.ray).applyMatrix4(ph),!(n.boundingBox!==null&&vr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vr)))}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,l=s.index,c=s.attributes.position,h=s.attributes.uv,o=s.attributes.uv1,p=s.attributes.normal,f=s.groups,m=s.drawRange;if(l!==null)if(Array.isArray(a))for(let v=0,w=f.length;v<w;v++){let g=f[v],d=a[g.materialIndex],x=Math.max(g.start,m.start),U=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let A=x,I=U;A<I;A+=3){let P=l.getX(A),O=l.getX(A+1),b=l.getX(A+2);r=no(this,d,e,n,h,o,p,P,O,b),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let v=Math.max(0,m.start),w=Math.min(l.count,m.start+m.count);for(let g=v,d=w;g<d;g+=3){let x=l.getX(g),U=l.getX(g+1),A=l.getX(g+2);r=no(this,a,e,n,h,o,p,x,U,A),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,w=f.length;v<w;v++){let g=f[v],d=a[g.materialIndex],x=Math.max(g.start,m.start),U=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let A=x,I=U;A<I;A+=3){let P=A,O=A+1,b=A+2;r=no(this,d,e,n,h,o,p,P,O,b),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let v=Math.max(0,m.start),w=Math.min(c.count,m.start+m.count);for(let g=v,d=w;g<d;g+=3){let x=g,U=g+1,A=g+2;r=no(this,a,e,n,h,o,p,x,U,A),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function sp(i,e,t,n,r,s,a,l){let c;if(e.side===dn?c=n.intersectTriangle(a,s,r,!0,l):c=n.intersectTriangle(r,s,a,e.side===ir,l),c===null)return null;to.copy(l),to.applyMatrix4(i.matrixWorld);let h=t.ray.origin.distanceTo(to);return h<t.near||h>t.far?null:{distance:h,point:to.clone(),object:i}}function no(i,e,t,n,r,s,a,l,c,h){i.getVertexPosition(l,$a),i.getVertexPosition(c,ja),i.getVertexPosition(h,Qa);let o=sp(i,e,t,n,$a,ja,Qa,gh);if(o){let p=new te;Zi.getBarycoord(gh,$a,ja,Qa,p),r&&(o.uv=Zi.getInterpolatedAttribute(r,l,c,h,p,new qe)),s&&(o.uv1=Zi.getInterpolatedAttribute(s,l,c,h,p,new qe)),a&&(o.normal=Zi.getInterpolatedAttribute(a,l,c,h,p,new te),o.normal.dot(n.direction)>0&&o.normal.multiplyScalar(-1));let f={a:l,b:c,c:h,normal:new te,materialIndex:0};Zi.getNormal($a,ja,Qa,f.normal),o.face=f,o.barycoord=p}return o}var yr=class extends Mn{constructor(e=null,t=1,n=1,r,s,a,l,c,h=cn,o=cn,p,f){super(null,a,l,c,h,o,r,s,p,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qs=class extends ln{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Wr=new Lt,vh=new Lt,io=[],_h=new pi,ap=new Lt,Ds=new ut,Ns=new Ii,Xs=class extends ut{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new qs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,ap)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wr),_h.copy(e.boundingBox).applyMatrix4(Wr),this.boundingBox.union(_h)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ii),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wr),Ns.copy(e.boundingSphere).applyMatrix4(Wr),this.boundingSphere.union(Ns)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let l=0;l<n.length;l++)n[l]=r[a+l]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Ds.geometry=this.geometry,Ds.material=this.material,Ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ns.copy(this.boundingSphere),Ns.applyMatrix4(n),e.ray.intersectsSphere(Ns)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Wr),vh.multiplyMatrices(n,Wr),Ds.matrixWorld=vh,Ds.raycast(e,io);for(let a=0,l=io.length;a<l;a++){let c=io[a];c.instanceId=s,c.object=this,t.push(c)}io.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new qs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new yr(new Float32Array(r*this.count),r,this.count,Zo,Gn));let s=this.morphTexture.source.data.data,a=0;for(let h=0;h<n.length;h++)a+=n[h];let l=this.geometry.morphTargetsRelative?1:1-a,c=r*e;return s[c]=l,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},_r=new Ii,op=new qe(.5,.5),ro=new te,ts=class{constructor(e=new $n,t=new $n,n=new $n,r=new $n,s=new $n,a=new $n){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(r),l[4].copy(s),l[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=jn,n=!1){let r=this.planes,s=e.elements,a=s[0],l=s[1],c=s[2],h=s[3],o=s[4],p=s[5],f=s[6],m=s[7],v=s[8],w=s[9],g=s[10],d=s[11],x=s[12],U=s[13],A=s[14],I=s[15];if(r[0].setComponents(h-a,m-o,d-v,I-x).normalize(),r[1].setComponents(h+a,m+o,d+v,I+x).normalize(),r[2].setComponents(h+l,m+p,d+w,I+U).normalize(),r[3].setComponents(h-l,m-p,d-w,I-U).normalize(),n)r[4].setComponents(c,f,g,A).normalize(),r[5].setComponents(h-c,m-f,d-g,I-A).normalize();else if(r[4].setComponents(h-c,m-f,d-g,I-A).normalize(),t===jn)r[5].setComponents(h+c,m+f,d+g,I+A).normalize();else if(t===$r)r[5].setComponents(c,f,g,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_r.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(e){_r.center.set(0,0,0);let t=op.distanceTo(e.center);return _r.radius=.7071067811865476+t,_r.applyMatrix4(e.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(ro.x=r.normal.x>0?e.max.x:e.min.x,ro.y=r.normal.y>0?e.max.y:e.min.y,ro.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ro)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Eo=class extends mi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},xh=new Lt,Fc=new Ws,so=new Ii,ao=new te,Ys=class extends tn{constructor(e=new Zt,t=new Eo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(r),so.radius+=s,e.ray.intersectsSphere(so)===!1)return;xh.copy(r).invert(),Fc.copy(e.ray).applyMatrix4(xh);let l=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,h=n.index,p=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let v=f,w=m;v<w;v++){let g=h.getX(v);ao.fromBufferAttribute(p,g),yh(ao,g,c,r,e,t,this)}}else{let f=Math.max(0,a.start),m=Math.min(p.count,a.start+a.count);for(let v=f,w=m;v<w;v++)ao.fromBufferAttribute(p,v),yh(ao,v,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}};function yh(i,e,t,n,r,s,a){let l=Fc.distanceSqToPoint(i);if(l<t){let c=new te;Fc.closestPointToPoint(i,c),c.applyMatrix4(n);let h=r.ray.origin.distanceTo(c);if(h<r.near||h>r.far)return;s.push({distance:h,distanceToRay:Math.sqrt(l),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ks=class extends Mn{constructor(e=[],t=rr,n,r,s,a,l,c,h,o){super(e,t,n,r,s,a,l,c,h,o),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Zs=class extends Mn{constructor(e,t,n,r,s,a,l,c,h){super(e,t,n,r,s,a,l,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var $i=class extends Mn{constructor(e,t,n=ti,r,s,a,l=cn,c=cn,h,o=ui,p=1){if(o!==ui&&o!==ar)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:p};super(f,r,s,a,l,c,o,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},wo=class extends $i{constructor(e,t=ti,n=rr,r,s,a=cn,l=cn,c,h=ui){let o={width:e,height:e,depth:1},p=[o,o,o,o,o,o];super(e,e,t,n,r,s,a,l,c,h),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Js=class extends Mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Sn=class i extends Zt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let l=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],h=[],o=[],p=[],f=0,m=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,r,a,2),v("x","z","y",1,-1,e,n,-t,r,a,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new _t(h,3)),this.setAttribute("normal",new _t(o,3)),this.setAttribute("uv",new _t(p,2));function v(w,g,d,x,U,A,I,P,O,b,_){let T=A/O,E=I/b,y=A/2,C=I/2,L=P/2,z=O+1,K=b+1,ee=0,J=0,k=new te;for(let $=0;$<K;$++){let X=$*E-C;for(let me=0;me<z;me++){let he=me*T-y;k[w]=he*x,k[g]=X*U,k[d]=L,h.push(k.x,k.y,k.z),k[w]=0,k[g]=0,k[d]=P>0?1:-1,o.push(k.x,k.y,k.z),p.push(me/O),p.push(1-$/b),ee+=1}}for(let $=0;$<b;$++)for(let X=0;X<O;X++){let me=f+X+z*$,he=f+X+z*($+1),ke=f+(X+1)+z*($+1),Ge=f+(X+1)+z*$;c.push(me,he,Ge),c.push(he,ke,Ge),J+=6}l.addGroup(m,J,_),m+=J,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},$s=class i extends Zt{constructor(e=1,t=1,n=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let a=[],l=[],c=[],h=[],o=t/2,p=Math.PI/2*e,f=t,m=2*p+f,v=n*2+s,w=r+1,g=new te,d=new te;for(let x=0;x<=v;x++){let U=0,A=0,I=0,P=0;if(x<=n){let _=x/n,T=_*Math.PI/2;A=-o-e*Math.cos(T),I=e*Math.sin(T),P=-e*Math.cos(T),U=_*p}else if(x<=n+s){let _=(x-n)/s;A=-o+_*t,I=e,P=0,U=p+_*f}else{let _=(x-n-s)/n,T=_*Math.PI/2;A=o+e*Math.sin(T),I=e*Math.cos(T),P=e*Math.sin(T),U=p+f+_*p}let O=Math.max(0,Math.min(1,U/m)),b=0;x===0?b=.5/r:x===v&&(b=-.5/r);for(let _=0;_<=r;_++){let T=_/r,E=T*Math.PI*2,y=Math.sin(E),C=Math.cos(E);d.x=-I*C,d.y=A,d.z=I*y,l.push(d.x,d.y,d.z),g.set(-I*C,P,I*y),g.normalize(),c.push(g.x,g.y,g.z),h.push(T+b,O)}if(x>0){let _=(x-1)*w;for(let T=0;T<r;T++){let E=_+T,y=_+T+1,C=x*w+T,L=x*w+T+1;a.push(E,y,C),a.push(y,L,C)}}}this.setIndex(a),this.setAttribute("position",new _t(l,3)),this.setAttribute("normal",new _t(c,3)),this.setAttribute("uv",new _t(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var ns=class i extends Zt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:l,thetaLength:c};let h=this;r=Math.floor(r),s=Math.floor(s);let o=[],p=[],f=[],m=[],v=0,w=[],g=n/2,d=0;x(),a===!1&&(e>0&&U(!0),t>0&&U(!1)),this.setIndex(o),this.setAttribute("position",new _t(p,3)),this.setAttribute("normal",new _t(f,3)),this.setAttribute("uv",new _t(m,2));function x(){let A=new te,I=new te,P=0,O=(t-e)/n;for(let b=0;b<=s;b++){let _=[],T=b/s,E=T*(t-e)+e;for(let y=0;y<=r;y++){let C=y/r,L=C*c+l,z=Math.sin(L),K=Math.cos(L);I.x=E*z,I.y=-T*n+g,I.z=E*K,p.push(I.x,I.y,I.z),A.set(z,O,K).normalize(),f.push(A.x,A.y,A.z),m.push(C,1-T),_.push(v++)}w.push(_)}for(let b=0;b<r;b++)for(let _=0;_<s;_++){let T=w[_][b],E=w[_+1][b],y=w[_+1][b+1],C=w[_][b+1];(e>0||_!==0)&&(o.push(T,E,C),P+=3),(t>0||_!==s-1)&&(o.push(E,y,C),P+=3)}h.addGroup(d,P,0),d+=P}function U(A){let I=v,P=new qe,O=new te,b=0,_=A===!0?e:t,T=A===!0?1:-1;for(let y=1;y<=r;y++)p.push(0,g*T,0),f.push(0,T,0),m.push(.5,.5),v++;let E=v;for(let y=0;y<=r;y++){let L=y/r*c+l,z=Math.cos(L),K=Math.sin(L);O.x=_*K,O.y=g*T,O.z=_*z,p.push(O.x,O.y,O.z),f.push(0,T,0),P.x=z*.5+.5,P.y=K*.5*T+.5,m.push(P.x,P.y),v++}for(let y=0;y<r;y++){let C=I+y,L=E+y;A===!0?o.push(L,L+1,C):o.push(L+1,L,C),b+=3}h.addGroup(d,b,A===!0?1:2),d+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},js=class i extends ns{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,l=Math.PI*2){super(0,e,t,n,r,s,a,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:l}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Qs=class i extends Zt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,l=Math.floor(n),c=Math.floor(r),h=l+1,o=c+1,p=e/l,f=t/c,m=[],v=[],w=[],g=[];for(let d=0;d<o;d++){let x=d*f-a;for(let U=0;U<h;U++){let A=U*p-s;v.push(A,-x,0),w.push(0,0,1),g.push(U/l),g.push(1-d/c)}}for(let d=0;d<c;d++)for(let x=0;x<l;x++){let U=x+h*d,A=x+h*(d+1),I=x+1+h*(d+1),P=x+1+h*d;m.push(U,A,P),m.push(A,I,P)}this.setIndex(m),this.setAttribute("position",new _t(v,3)),this.setAttribute("normal",new _t(w,3)),this.setAttribute("uv",new _t(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var ji=class i extends Zt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+l,Math.PI),h=0,o=[],p=new te,f=new te,m=[],v=[],w=[],g=[];for(let d=0;d<=n;d++){let x=[],U=d/n,A=a+U*l,I=e*Math.cos(A),P=Math.sqrt(e*e-I*I),O=0;d===0&&a===0?O=.5/t:d===n&&c===Math.PI&&(O=-.5/t);for(let b=0;b<=t;b++){let _=b/t,T=r+_*s;p.x=-P*Math.cos(T),p.y=I,p.z=P*Math.sin(T),v.push(p.x,p.y,p.z),f.copy(p).normalize(),w.push(f.x,f.y,f.z),g.push(_+O,1-U),x.push(h++)}o.push(x)}for(let d=0;d<n;d++)for(let x=0;x<t;x++){let U=o[d][x+1],A=o[d][x],I=o[d+1][x],P=o[d+1][x+1];(d!==0||a>0)&&m.push(U,A,P),(d!==n-1||c<Math.PI)&&m.push(A,I,P)}this.setIndex(m),this.setAttribute("position",new _t(v,3)),this.setAttribute("normal",new _t(w,3)),this.setAttribute("uv",new _t(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var is=class i extends Zt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,a=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:l},n=Math.floor(n),r=Math.floor(r);let c=[],h=[],o=[],p=[],f=new te,m=new te,v=new te;for(let w=0;w<=n;w++){let g=a+w/n*l;for(let d=0;d<=r;d++){let x=d/r*s;m.x=(e+t*Math.cos(g))*Math.cos(x),m.y=(e+t*Math.cos(g))*Math.sin(x),m.z=t*Math.sin(g),h.push(m.x,m.y,m.z),f.x=e*Math.cos(x),f.y=e*Math.sin(x),v.subVectors(m,f).normalize(),o.push(v.x,v.y,v.z),p.push(d/r),p.push(w/n)}}for(let w=1;w<=n;w++)for(let g=1;g<=r;g++){let d=(r+1)*w+g-1,x=(r+1)*(w-1)+g-1,U=(r+1)*(w-1)+g,A=(r+1)*w+g;c.push(d,x,A),c.push(x,U,A)}this.setIndex(c),this.setAttribute("position",new _t(h,3)),this.setAttribute("normal",new _t(o,3)),this.setAttribute("uv",new _t(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Er(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(Mh(r))r.isRenderTargetTexture?(Ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Mh(r[0])){let s=[];for(let a=0,l=r.length;a<l;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function _n(i){let e={};for(let t=0;t<i.length;t++){let n=Er(i[t]);for(let r in n)e[r]=n[r]}return e}function Mh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function lp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function nu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var Li={clone:Er,merge:_n},cp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,up=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Gt=class extends mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cp,this.fragmentShader=up,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Er(e.uniforms),this.uniformsGroups=lp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new We().setHex(r.value);break;case"v2":this.uniforms[n].value=new qe().fromArray(r.value);break;case"v3":this.uniforms[n].value=new te().fromArray(r.value);break;case"v4":this.uniforms[n].value=new zt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new je().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Lt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},rs=class extends Gt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},An=class extends mi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ma,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ea=class extends mi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ma,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=Vo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ao=class extends mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$h,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ro=class extends mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function qr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Pc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Qi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let l=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){let l=t[1];e<l&&(n=2,s=l);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let l=n+a>>>1;e<t[l]?a=l:n=l+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Co=class extends Qi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nc,endingEnd:Nc}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,l=r[s],c=r[a];if(l===void 0)switch(this.getSettings_().endingStart){case Uc:s=e,l=2*t-n;break;case Oc:s=r.length-2,l=t+r[s]-r[s+1];break;default:s=e,l=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Uc:a=e,c=2*n-t;break;case Oc:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}let h=(n-t)*.5,o=this.valueSize;this._weightPrev=h/(t-l),this._weightNext=h/(c-n),this._offsetPrev=s*o,this._offsetNext=a*o}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,h=c-l,o=this._offsetPrev,p=this._offsetNext,f=this._weightPrev,m=this._weightNext,v=(n-t)/(r-t),w=v*v,g=w*v,d=-f*g+2*f*w-f*v,x=(1+f)*g+(-1.5-2*f)*w+(-.5+f)*v+1,U=(-1-m)*g+(1.5+m)*w+.5*v,A=m*g-m*w;for(let I=0;I!==l;++I)s[I]=d*a[o+I]+x*a[h+I]+U*a[c+I]+A*a[p+I];return s}},Io=class extends Qi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,h=c-l,o=(n-t)/(r-t),p=1-o;for(let f=0;f!==l;++f)s[f]=a[h+f]*p+a[c+f]*o;return s}},Po=class extends Qi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Lo=class extends Qi{interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,h=c-l,o=this.inTangents,p=this.outTangents;if(!o||!p){let v=(n-t)/(r-t),w=1-v;for(let g=0;g!==l;++g)s[g]=a[h+g]*w+a[c+g]*v;return s}let f=l*2,m=e-1;for(let v=0;v!==l;++v){let w=a[h+v],g=a[c+v],d=m*f+v*2,x=p[d],U=p[d+1],A=e*f+v*2,I=o[A],P=o[A+1],O=fp(n,t,x,I,r);s[v]=df(O,w,U,P,g)}return s}};function df(i,e,t,n,r){let s=1-i;return s*s*s*e+3*s*s*i*t+3*s*i*i*n+i*i*i*r}function hp(i,e,t,n,r){let s=1-i;return 3*s*s*(t-e)+6*s*i*(n-t)+3*i*i*(r-n)}function fp(i,e,t,n,r){let s=(i-e)/(r-e);for(let a=0;a<8;a++){let l=df(s,e,t,n,r)-i;if(Math.abs(l)<1e-10)break;let c=hp(s,e,t,n,r);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-l/c))}return s}var Nn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qr(t,this.TimeBufferType),this.values=qr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qr(e.times,Array),values:qr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),Pc(e.settings)&&(n.settings={inTangents:qr(e.settings.inTangents,Array),outTangents:qr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Po(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Io(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Co(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Lo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Us:t=this.InterpolantFactoryMethodDiscrete;break;case yo:t=this.InterpolantFactoryMethodLinear;break;case co:t=this.InterpolantFactoryMethodSmooth;break;case Dc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ze("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Us;case this.InterpolantFactoryMethodLinear:return yo;case this.InterpolantFactoryMethodSmooth:return co;case this.InterpolantFactoryMethodBezier:return Dc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Pc(this.settings)&&(Sh(this.settings.inTangents,e),Sh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let l=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*l,a*l)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Je("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(Je("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let l=0;l!==s;l++){let c=n[l];if(typeof c=="number"&&isNaN(c)){Je("KeyframeTrack: Time is not a valid number.",this,l,c),e=!1;break}if(a!==null&&a>c){Je("KeyframeTrack: Out of order keys.",this,l,c,a),e=!1;break}a=c}if(r!==void 0&&kd(r))for(let l=0,c=r.length;l!==c;++l){let h=r[l];if(isNaN(h)){Je("KeyframeTrack: Value is not a valid number.",this,l,h),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===co,s=e.length-1,a=1;for(let l=1;l<s;++l){let c=!1,h=e[l],o=e[l+1];if(h!==o&&(l!==1||h!==e[0]))if(r)c=!0;else{let p=l*n,f=p-n,m=p+n;for(let v=0;v!==n;++v){let w=t[p+v];if(w!==t[f+v]||w!==t[m+v]){c=!0;break}}}if(c){if(l!==a){e[a]=e[l];let p=l*n,f=a*n;for(let m=0;m!==n;++m)t[f+m]=t[p+m]}++a}}if(s>0){e[a]=e[s];for(let l=s*n,c=a*n,h=0;h!==n;++h)t[c+h]=t[l+h];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Pc(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Sh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Nn.prototype.ValueTypeName="";Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=yo;var er=class extends Nn{constructor(e,t,n){super(e,t,n)}};er.prototype.ValueTypeName="bool";er.prototype.ValueBufferType=Array;er.prototype.DefaultInterpolation=Us;er.prototype.InterpolantFactoryMethodLinear=void 0;er.prototype.InterpolantFactoryMethodSmooth=void 0;var Do=class extends Nn{constructor(e,t,n,r){super(e,t,n,r)}};Do.prototype.ValueTypeName="color";var No=class extends Nn{constructor(e,t,n,r){super(e,t,n,r)}};No.prototype.ValueTypeName="number";var Uo=class extends Qi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=(n-t)/(r-t),h=e*l;for(let o=h+l;h!==o;h+=4)fi.slerpFlat(s,0,a,h-l,a,h,c);return s}},ta=class extends Nn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Uo(this.times,this.values,this.getValueSize(),e)}};ta.prototype.ValueTypeName="quaternion";ta.prototype.InterpolantFactoryMethodSmooth=void 0;var tr=class extends Nn{constructor(e,t,n){super(e,t,n)}};tr.prototype.ValueTypeName="string";tr.prototype.ValueBufferType=Array;tr.prototype.DefaultInterpolation=Us;tr.prototype.InterpolantFactoryMethodLinear=void 0;tr.prototype.InterpolantFactoryMethodSmooth=void 0;var Oo=class extends Nn{constructor(e,t,n,r){super(e,t,n,r)}};Oo.prototype.ValueTypeName="vector";var Fo=class{constructor(e,t,n){let r=this,s=!1,a=0,l=0,c,h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(o){l++,s===!1&&r.onStart!==void 0&&r.onStart(o,a,l),s=!0},this.itemEnd=function(o){a++,r.onProgress!==void 0&&r.onProgress(o,a,l),a===l&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(o){r.onError!==void 0&&r.onError(o)},this.resolveURL=function(o){return o=o.normalize("NFC"),c?c(o):o},this.setURLModifier=function(o){return c=o,this},this.addHandler=function(o,p){return h.push(o,p),this},this.removeHandler=function(o){let p=h.indexOf(o);return p!==-1&&h.splice(p,2),this},this.getHandler=function(o){for(let p=0,f=h.length;p<f;p+=2){let m=h[p],v=h[p+1];if(m.global&&(m.lastIndex=0),m.test(o))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},pf=new Fo,Ho=class{constructor(e){this.manager=e!==void 0?e:pf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ho.DEFAULT_MATERIAL_NAME="__DEFAULT";var Mr=class extends tn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ss=class extends Mr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Lc=new Lt,bh=new te,Th=new te,na=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ts,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;bh.setFromMatrixPosition(e.matrixWorld),t.position.copy(bh),Th.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Th),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Lc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Lc,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=r?r.z/s.x:1,l=r?r.w/s.y:1,c=r?r.x/s.x:0,h=r?r.y/s.y:0;e.coordinateSystem===$r||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+h,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+h,0,0,.5,.5,0,0,0,1),t.multiply(Lc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},oo=new te,lo=new fi,li=new te,ia=class extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(oo,lo,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oo,lo,li.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(oo,lo,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oo,lo,li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ki=new te,Eh=new qe,wh=new qe,on=class extends ia{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Mo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(uc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mo*2*Math.atan(Math.tan(uc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,t){return this.getViewBounds(e,Eh,wh),t.subVectors(wh,Eh)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(uc*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,h=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/h,r*=a.width/c,n*=a.height/h}let l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Hc=class extends na{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0}},Qn=class extends Mr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Hc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},nr=class extends ia{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,l=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,o=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,a=s+h*this.view.width,l-=o*this.view.offsetY,c=l-o*this.view.height}this.projectionMatrix.makeOrthographic(s,a,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Bc=class extends na{constructor(){super(new nr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ra=class extends Mr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new Bc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},as=class extends Mr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Xr=-90,Yr=1,Bo=class extends tn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new on(Xr,Yr,e,t);r.layers=this.layers,this.add(r);let s=new on(Xr,Yr,e,t);s.layers=this.layers,this.add(s);let a=new on(Xr,Yr,e,t);a.layers=this.layers,this.add(a);let l=new on(Xr,Yr,e,t);l.layers=this.layers,this.add(l);let c=new on(Xr,Yr,e,t);c.layers=this.layers,this.add(c);let h=new on(Xr,Yr,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,l,c]=t;for(let h of t)this.remove(h);if(e===jn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===$r)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,l,c,h,o]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let w=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),n.texture.generateMipmaps=w,e.setRenderTarget(n,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(p,f,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},zo=class extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},sa=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=dp.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function dp(){this._document.hidden===!1&&this.reset()}var iu="\\[\\]\\.:\\/",pp=new RegExp("["+iu+"]","g"),ru="[^"+iu+"]",mp="[^"+iu.replace("\\.","")+"]",gp=/((?:WC+[\/:])*)/.source.replace("WC",ru),vp=/(WCOD+)?/.source.replace("WCOD",mp),_p=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ru),xp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ru),yp=new RegExp("^"+gp+vp+_p+xp+"$"),Mp=["material","materials","bones","map"],zc=class{constructor(e,t,n){let r=n||Ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ht=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(pp,"")}static parseTrackName(e){let t=yp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Mp.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let l=s[a];if(l.name===t||l.uuid===t)return l;let c=n(l.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let o=0;o<e.length;o++)if(e[o].name===h){h=o;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){Je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}let a=e[r];if(a===void 0){let h=t.nodeName;Je("PropertyBinding: Trying to update property for track: "+h+"."+r+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ht.Composite=zc;Ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ht.prototype.GetterByBindingType=[Ht.prototype._getValue_direct,Ht.prototype._getValue_array,Ht.prototype._getValue_arrayElement,Ht.prototype._getValue_toArray];Ht.prototype.SetterByBindingTypeAndVersioning=[[Ht.prototype._setValue_direct,Ht.prototype._setValue_direct_setNeedsUpdate,Ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_array,Ht.prototype._setValue_array_setNeedsUpdate,Ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_arrayElement,Ht.prototype._setValue_arrayElement_setNeedsUpdate,Ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_fromArray,Ht.prototype._setValue_fromArray_setNeedsUpdate,Ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ex=new Float32Array(1);var uu=class uu{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};uu.prototype.isMatrix2=!0;var kc=uu;function su(i,e,t,n){let r=Sp(n);switch(t){case jc:return i*e;case Zo:return i*e/r.components*r.byteLength;case Jo:return i*e/r.components*r.byteLength;case or:return i*e*2/r.components*r.byteLength;case $o:return i*e*2/r.components*r.byteLength;case Qc:return i*e*3/r.components*r.byteLength;case Wn:return i*e*4/r.components*r.byteLength;case jo:return i*e*4/r.components*r.byteLength;case ma:case ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case va:case _a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case el:case nl:return Math.max(i,16)*Math.max(e,8)/4;case Qo:case tl:return Math.max(i,8)*Math.max(e,8)/2;case il:case rl:case al:case ol:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case sl:case xa:case ll:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ul:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case hl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case fl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case dl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case pl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ml:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case gl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case vl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case _l:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case xl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case yl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ml:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Sl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case bl:case Tl:case El:return Math.ceil(i/4)*Math.ceil(e/4)*16;case wl:case Al:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ya:case Rl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sp(i){switch(i){case Rn:case Kc:return{byteLength:1,components:1};case cs:case Zc:case pn:return{byteLength:2,components:1};case Yo:case Ko:return{byteLength:2,components:4};case ti:case Xo:case Gn:return{byteLength:4,components:1};case Jc:case $c:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?Ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Of(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Tp(i){let e=new WeakMap;function t(l,c){let h=l.array,o=l.usage,p=h.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,h,o),l.onUploadCallback();let m;if(h instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array!="undefined"&&h instanceof Float16Array)m=i.HALF_FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)m=i.SHORT;else if(h instanceof Uint32Array)m=i.UNSIGNED_INT;else if(h instanceof Int32Array)m=i.INT;else if(h instanceof Int8Array)m=i.BYTE;else if(h instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:p}}function n(l,c,h){let o=c.array,p=c.updateRanges;if(i.bindBuffer(h,l),p.length===0)i.bufferSubData(h,0,o);else{p.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<p.length;m++){let v=p[f],w=p[m];w.start<=v.start+v.count+1?v.count=Math.max(v.count,w.start+w.count-v.start):(++f,p[f]=w)}p.length=f+1;for(let m=0,v=p.length;m<v;m++){let w=p[m];i.bufferSubData(h,w.start*o.BYTES_PER_ELEMENT,o,w.start,w.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);let c=e.get(l);c&&(i.deleteBuffer(c.buffer),e.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let o=e.get(l);(!o||o.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let h=e.get(l);if(h===void 0)e.set(l,t(l,c));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,l,c),h.version=l.version}}return{get:r,remove:s,update:a}}var Ep=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wp=`#ifdef USE_ALPHAHASH
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
#endif`,Ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ip=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pp=`#ifdef USE_AOMAP
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
#endif`,Lp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dp=`#ifdef USE_BATCHING
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
#endif`,Np=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Up=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hp=`#ifdef USE_IRIDESCENCE
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
#endif`,Bp=`#ifdef USE_BUMPMAP
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
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Xp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Yp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Kp=`#define PI 3.141592653589793
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
} // validated`,Zp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jp=`vec3 transformedNormal = objectNormal;
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
#endif`,$p=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,em=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tm="gl_FragColor = linearToOutputTexel( gl_FragColor );",nm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,im=`#ifdef USE_ENVMAP
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
#endif`,rm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,sm=`#ifdef USE_ENVMAP
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
#endif`,am=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,om=`#ifdef USE_ENVMAP
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
#endif`,lm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,um=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fm=`#ifdef USE_GRADIENTMAP
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
}`,dm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,vm=`#ifdef USE_ENVMAP
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
#endif`,_m=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ym=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sm=`PhysicalMaterial material;
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
#endif`,bm=`uniform sampler2D dfgLUT;
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
}`,Tm=`
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
#endif`,Em=`#if defined( RE_IndirectDiffuse )
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
#endif`,wm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Am=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Rm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Um=`#if defined( USE_POINTS_UV )
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
#endif`,Om=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,km=`#ifdef USE_MORPHTARGETS
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
#endif`,Vm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ym=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Km=`#ifdef USE_NORMALMAP
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
#endif`,Zm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$m=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,e0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,t0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,n0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,i0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,r0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,s0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,a0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,o0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,l0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,u0=`float getShadowMask() {
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
}`,h0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,f0=`#ifdef USE_SKINNING
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
#endif`,d0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,p0=`#ifdef USE_SKINNING
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
#endif`,m0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,g0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,v0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,x0=`#ifdef USE_TRANSMISSION
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
#endif`,y0=`#ifdef USE_TRANSMISSION
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
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,E0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w0=`uniform sampler2D t2D;
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
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P0=`#include <common>
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
}`,L0=`#if DEPTH_PACKING == 3200
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
}`,D0=`#define DISTANCE
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
}`,N0=`#define DISTANCE
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
}`,U0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,O0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F0=`uniform float scale;
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
}`,H0=`uniform vec3 diffuse;
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
}`,B0=`#include <common>
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
}`,z0=`uniform vec3 diffuse;
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
}`,k0=`#define LAMBERT
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
}`,V0=`#define LAMBERT
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
}`,G0=`#define MATCAP
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
}`,W0=`#define MATCAP
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
}`,q0=`#define NORMAL
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
}`,X0=`#define NORMAL
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
}`,Y0=`#define PHONG
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
}`,K0=`#define PHONG
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
}`,Z0=`#define STANDARD
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
}`,J0=`#define STANDARD
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
}`,$0=`#define TOON
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
}`,j0=`#define TOON
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
}`,Q0=`uniform float size;
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
}`,eg=`uniform vec3 diffuse;
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
}`,tg=`#include <common>
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
}`,ng=`uniform vec3 color;
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
}`,ig=`uniform float rotation;
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
}`,rg=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:Ep,alphahash_pars_fragment:wp,alphamap_fragment:Ap,alphamap_pars_fragment:Rp,alphatest_fragment:Cp,alphatest_pars_fragment:Ip,aomap_fragment:Pp,aomap_pars_fragment:Lp,batching_pars_vertex:Dp,batching_vertex:Np,begin_vertex:Up,beginnormal_vertex:Op,bsdfs:Fp,iridescence_fragment:Hp,bumpmap_pars_fragment:Bp,clipping_planes_fragment:zp,clipping_planes_pars_fragment:kp,clipping_planes_pars_vertex:Vp,clipping_planes_vertex:Gp,color_fragment:Wp,color_pars_fragment:qp,color_pars_vertex:Xp,color_vertex:Yp,common:Kp,cube_uv_reflection_fragment:Zp,defaultnormal_vertex:Jp,displacementmap_pars_vertex:$p,displacementmap_vertex:jp,emissivemap_fragment:Qp,emissivemap_pars_fragment:em,colorspace_fragment:tm,colorspace_pars_fragment:nm,envmap_fragment:im,envmap_common_pars_fragment:rm,envmap_pars_fragment:sm,envmap_pars_vertex:am,envmap_physical_pars_fragment:vm,envmap_vertex:om,fog_vertex:lm,fog_pars_vertex:cm,fog_fragment:um,fog_pars_fragment:hm,gradientmap_pars_fragment:fm,lightmap_pars_fragment:dm,lights_lambert_fragment:pm,lights_lambert_pars_fragment:mm,lights_pars_begin:gm,lights_toon_fragment:_m,lights_toon_pars_fragment:xm,lights_phong_fragment:ym,lights_phong_pars_fragment:Mm,lights_physical_fragment:Sm,lights_physical_pars_fragment:bm,lights_fragment_begin:Tm,lights_fragment_maps:Em,lights_fragment_end:wm,lightprobes_pars_fragment:Am,logdepthbuf_fragment:Rm,logdepthbuf_pars_fragment:Cm,logdepthbuf_pars_vertex:Im,logdepthbuf_vertex:Pm,map_fragment:Lm,map_pars_fragment:Dm,map_particle_fragment:Nm,map_particle_pars_fragment:Um,metalnessmap_fragment:Om,metalnessmap_pars_fragment:Fm,morphinstance_vertex:Hm,morphcolor_vertex:Bm,morphnormal_vertex:zm,morphtarget_pars_vertex:km,morphtarget_vertex:Vm,normal_fragment_begin:Gm,normal_fragment_maps:Wm,normal_pars_fragment:qm,normal_pars_vertex:Xm,normal_vertex:Ym,normalmap_pars_fragment:Km,clearcoat_normal_fragment_begin:Zm,clearcoat_normal_fragment_maps:Jm,clearcoat_pars_fragment:$m,iridescence_pars_fragment:jm,opaque_fragment:Qm,packing:e0,premultiplied_alpha_fragment:t0,project_vertex:n0,dithering_fragment:i0,dithering_pars_fragment:r0,roughnessmap_fragment:s0,roughnessmap_pars_fragment:a0,shadowmap_pars_fragment:o0,shadowmap_pars_vertex:l0,shadowmap_vertex:c0,shadowmask_pars_fragment:u0,skinbase_vertex:h0,skinning_pars_vertex:f0,skinning_vertex:d0,skinnormal_vertex:p0,specularmap_fragment:m0,specularmap_pars_fragment:g0,tonemapping_fragment:v0,tonemapping_pars_fragment:_0,transmission_fragment:x0,transmission_pars_fragment:y0,uv_pars_fragment:M0,uv_pars_vertex:S0,uv_vertex:b0,worldpos_vertex:T0,background_vert:E0,background_frag:w0,backgroundCube_vert:A0,backgroundCube_frag:R0,cube_vert:C0,cube_frag:I0,depth_vert:P0,depth_frag:L0,distance_vert:D0,distance_frag:N0,equirect_vert:U0,equirect_frag:O0,linedashed_vert:F0,linedashed_frag:H0,meshbasic_vert:B0,meshbasic_frag:z0,meshlambert_vert:k0,meshlambert_frag:V0,meshmatcap_vert:G0,meshmatcap_frag:W0,meshnormal_vert:q0,meshnormal_frag:X0,meshphong_vert:Y0,meshphong_frag:K0,meshphysical_vert:Z0,meshphysical_frag:J0,meshtoon_vert:$0,meshtoon_frag:j0,points_vert:Q0,points_frag:eg,shadow_vert:tg,shadow_frag:ng,sprite_vert:ig,sprite_frag:rg},Ee={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new te},probesMax:{value:new te},probesResolution:{value:new te}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},_i={basic:{uniforms:_n([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:_n([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new We(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:_n([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:_n([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:_n([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new We(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:_n([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:_n([Ee.points,Ee.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:_n([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:_n([Ee.common,Ee.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:_n([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:_n([Ee.sprite,Ee.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:_n([Ee.common,Ee.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:_n([Ee.lights,Ee.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};_i.physical={uniforms:_n([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};var Pl={r:0,b:0,g:0},sg=new Lt,Ff=new je;Ff.set(-1,0,0,0,1,0,0,0,1);function ag(i,e,t,n,r,s){let a=new We(0),l=r===!0?0:1,c,h,o=null,p=0,f=null;function m(x){let U=x.isScene===!0?x.background:null;if(U&&U.isTexture){let A=x.backgroundBlurriness>0;U=e.get(U,A)}return U}function v(x){let U=!1,A=m(x);A===null?g(a,l):A&&A.isColor&&(g(A,1),U=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,s):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||U)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function w(x,U){let A=m(U);A&&(A.isCubeTexture||A.mapping===da)?(h===void 0&&(h=new ut(new Sn(1,1,1),new Gt({name:"BackgroundCubeMaterial",uniforms:Er(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,P,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=A,h.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(sg.makeRotationFromEuler(U.backgroundRotation)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Ff),h.material.toneMapped=lt.getTransfer(A.colorSpace)!==vt,(o!==A||p!==A.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,o=A,p=A.version,f=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new ut(new Qs(2,2),new Gt({name:"BackgroundMaterial",uniforms:Er(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,c.material.toneMapped=lt.getTransfer(A.colorSpace)!==vt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(o!==A||p!==A.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,o=A,p=A.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function g(x,U){x.getRGB(Pl,nu(i)),t.buffers.color.setClear(Pl.r,Pl.g,Pl.b,U,s)}function d(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,U=1){a.set(x),l=U,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,g(a,l)},render:v,addToRenderList:w,dispose:d}}function og(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,a=!1;function l(E,y,C,L,z){let K=!1,ee=p(E,L,C,y);s!==ee&&(s=ee,h(s.object)),K=m(E,L,C,z),K&&v(E,L,C,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,A(E,y,C,L),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return i.createVertexArray()}function h(E){return i.bindVertexArray(E)}function o(E){return i.deleteVertexArray(E)}function p(E,y,C,L){let z=L.wireframe===!0,K=n[y.id];K===void 0&&(K={},n[y.id]=K);let ee=E.isInstancedMesh===!0?E.id:0,J=K[ee];J===void 0&&(J={},K[ee]=J);let k=J[C.id];k===void 0&&(k={},J[C.id]=k);let $=k[z];return $===void 0&&($=f(c()),k[z]=$),$}function f(E){let y=[],C=[],L=[];for(let z=0;z<t;z++)y[z]=0,C[z]=0,L[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:C,attributeDivisors:L,object:E,attributes:{},index:null}}function m(E,y,C,L){let z=s.attributes,K=y.attributes,ee=0,J=C.getAttributes();for(let k in J)if(J[k].location>=0){let X=z[k],me=K[k];if(me===void 0&&(k==="instanceMatrix"&&E.instanceMatrix&&(me=E.instanceMatrix),k==="instanceColor"&&E.instanceColor&&(me=E.instanceColor)),X===void 0||X.attribute!==me||me&&X.data!==me.data)return!0;ee++}return s.attributesNum!==ee||s.index!==L}function v(E,y,C,L){let z={},K=y.attributes,ee=0,J=C.getAttributes();for(let k in J)if(J[k].location>=0){let X=K[k];X===void 0&&(k==="instanceMatrix"&&E.instanceMatrix&&(X=E.instanceMatrix),k==="instanceColor"&&E.instanceColor&&(X=E.instanceColor));let me={};me.attribute=X,X&&X.data&&(me.data=X.data),z[k]=me,ee++}s.attributes=z,s.attributesNum=ee,s.index=L}function w(){let E=s.newAttributes;for(let y=0,C=E.length;y<C;y++)E[y]=0}function g(E){d(E,0)}function d(E,y){let C=s.newAttributes,L=s.enabledAttributes,z=s.attributeDivisors;C[E]=1,L[E]===0&&(i.enableVertexAttribArray(E),L[E]=1),z[E]!==y&&(i.vertexAttribDivisor(E,y),z[E]=y)}function x(){let E=s.newAttributes,y=s.enabledAttributes;for(let C=0,L=y.length;C<L;C++)y[C]!==E[C]&&(i.disableVertexAttribArray(C),y[C]=0)}function U(E,y,C,L,z,K,ee){ee===!0?i.vertexAttribIPointer(E,y,C,z,K):i.vertexAttribPointer(E,y,C,L,z,K)}function A(E,y,C,L){w();let z=L.attributes,K=C.getAttributes(),ee=y.defaultAttributeValues;for(let J in K){let k=K[J];if(k.location>=0){let $=z[J];if($===void 0&&(J==="instanceMatrix"&&E.instanceMatrix&&($=E.instanceMatrix),J==="instanceColor"&&E.instanceColor&&($=E.instanceColor)),$!==void 0){let X=$.normalized,me=$.itemSize,he=e.get($);if(he===void 0)continue;let ke=he.buffer,Ge=he.type,De=he.bytesPerElement,ae=Ge===i.INT||Ge===i.UNSIGNED_INT||$.gpuType===Xo;if($.isInterleavedBufferAttribute){let ce=$.data,be=ce.stride,Ve=$.offset;if(ce.isInstancedInterleavedBuffer){for(let Se=0;Se<k.locationSize;Se++)d(k.location+Se,ce.meshPerAttribute);E.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Se=0;Se<k.locationSize;Se++)g(k.location+Se);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let Se=0;Se<k.locationSize;Se++)U(k.location+Se,me/k.locationSize,Ge,X,be*De,(Ve+me/k.locationSize*Se)*De,ae)}else{if($.isInstancedBufferAttribute){for(let ce=0;ce<k.locationSize;ce++)d(k.location+ce,$.meshPerAttribute);E.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ce=0;ce<k.locationSize;ce++)g(k.location+ce);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let ce=0;ce<k.locationSize;ce++)U(k.location+ce,me/k.locationSize,Ge,X,me*De,me/k.locationSize*ce*De,ae)}}else if(ee!==void 0){let X=ee[J];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(k.location,X);break;case 3:i.vertexAttrib3fv(k.location,X);break;case 4:i.vertexAttrib4fv(k.location,X);break;default:i.vertexAttrib1fv(k.location,X)}}}}x()}function I(){_();for(let E in n){let y=n[E];for(let C in y){let L=y[C];for(let z in L){let K=L[z];for(let ee in K)o(K[ee].object),delete K[ee];delete L[z]}}delete n[E]}}function P(E){if(n[E.id]===void 0)return;let y=n[E.id];for(let C in y){let L=y[C];for(let z in L){let K=L[z];for(let ee in K)o(K[ee].object),delete K[ee];delete L[z]}}delete n[E.id]}function O(E){for(let y in n){let C=n[y];for(let L in C){let z=C[L];if(z[E.id]===void 0)continue;let K=z[E.id];for(let ee in K)o(K[ee].object),delete K[ee];delete z[E.id]}}}function b(E){for(let y in n){let C=n[y],L=E.isInstancedMesh===!0?E.id:0,z=C[L];if(z!==void 0){for(let K in z){let ee=z[K];for(let J in ee)o(ee[J].object),delete ee[J];delete z[K]}delete C[L],Object.keys(C).length===0&&delete n[y]}}}function _(){T(),a=!0,s!==r&&(s=r,h(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:_,resetDefaultState:T,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfObject:b,releaseStatesOfProgram:O,initAttributes:w,enableAttribute:g,disableUnusedAttributes:x}}function lg(i,e,t){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,o){o!==0&&(i.drawArraysInstanced(n,c,h,o),t.update(h,n,o))}function l(c,h,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,o);let f=0;for(let m=0;m<o;m++)f+=h[m];t.update(f,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=l}function cg(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let O=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(O){return!(O!==Wn&&n.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(O){let b=O===pn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Rn&&O!==Gn&&!b&&n.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(O){if(O==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp",o=c(h);o!==h&&(Ze("WebGLRenderer:",h,"not supported, using",o,"instead."),h=o);let p=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),U=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=i.getParameter(i.MAX_SAMPLES),P=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:p,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:w,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:x,maxVaryings:U,maxFragmentUniforms:A,maxSamples:I,samples:P}}function ug(i){let e=this,t=null,n=0,r=!1,s=!1,a=new $n,l=new je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){let m=p.length!==0||f||n!==0||r;return r=f,n=p.length,m},this.beginShadows=function(){s=!0,o(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){t=o(p,f,0)},this.setState=function(p,f,m){let v=p.clippingPlanes,w=p.clipIntersection,g=p.clipShadows,d=i.get(p);if(!r||v===null||v.length===0||s&&!g)s?o(null):h();else{let x=s?0:n,U=x*4,A=d.clippingState||null;c.value=A,A=o(v,f,U,m);for(let I=0;I!==U;++I)A[I]=t[I];d.clippingState=A,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=x}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function o(p,f,m,v){let w=p!==null?p.length:0,g=null;if(w!==0){if(g=c.value,v!==!0||g===null){let d=m+w*4,x=f.matrixWorldInverse;l.getNormalMatrix(x),(g===null||g.length<d)&&(g=new Float32Array(d));for(let U=0,A=m;U!==w;++U,A+=4)a.copy(p[U]).applyMatrix4(x,l),a.normal.toArray(g,A),g[A+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,g}}var ds=4,hg=6,fg=20,dg=256,ba=new nr,mf=new We,hu=null,fu=0,du=0,pu=!1,pg=new te,wr=new te,ms=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:l=pg}=s;hu=this._renderer.getRenderTarget(),fu=this._renderer.getActiveCubeFace(),du=this._renderer.getActiveMipmapLevel(),pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,l),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_f(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(hu,fu,du),this._renderer.xr.enabled=pu,e.scissorTest=!1,fs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rr||e.mapping===Tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hu=this._renderer.getRenderTarget(),fu=this._renderer.getActiveCubeFace(),du=this._renderer.getActiveMipmapLevel(),pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:pn,format:Wn,colorSpace:Os,depthBuffer:!1},r=gf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gf(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=mg(s)),this._blurMaterial=vg(s,e,t),this._ggxMaterial=gg(s,e,t)}return r}_compileMaterial(e){let t=new ut(new Zt,e);this._renderer.compile(t,ba)}_sceneToCubeUV(e,t,n,r,s){let c=new on(90,1,t,n),h=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],p=this._renderer,f=p.autoClear,m=p.toneMapping;p.getClearColor(mf),p.toneMapping=ei,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ut(new Sn,new gi({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1})));let w=this._backgroundBox,g=w.material,d=!1,x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,d=!0):(g.color.copy(mf),d=!0);for(let U=0;U<6;U++){let A=U%3;A===0?(c.up.set(0,h[U],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+o[U],s.y,s.z)):A===1?(c.up.set(0,0,h[U]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+o[U],s.z)):(c.up.set(0,h[U],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+o[U]));let I=this._cubeSize;fs(r,A*I,U>2?I:0,I,I),p.setRenderTarget(r),d&&p.render(w,c),p.render(e,c)}p.toneMapping=m,p.autoClear=f,e.background=x}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===rr||e.mapping===Tr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_f()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vf());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let l=s.uniforms;l.envMap.value=e;let c=this._cubeSize;fs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,ba)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[n];l.material=a;let c=a.uniforms,h=n/(this._lodMeshes.length-1),o=t/(this._lodMeshes.length-1),p=Math.sqrt(h*h-o*o),f=h*1.25,m=p*f,{_lodMax:v}=this,w=this._sizeLods[n],g=3*w*(n>v-ds?n-v+ds:0),d=4*(this._cubeSize-w);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=v-t,fs(s,g,d,3*w,2*w),r.setRenderTarget(s),r.render(l,ba),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=v-n,fs(e,g,d,3*w,2*w),r.setRenderTarget(e),r.render(l,ba)}_blur(e,t,n,r){let s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,r,s){let a=this._renderer,l=this._blurMaterial,c=this._lodMeshes[r];c.material=l;let h=l.uniforms;h.envMap.value=e.texture,h.sigma.value=s,h.mipInt.value=this._lodMax-n;let o=this._sizeLods[r],p=3*o*(r>this._lodMax-ds?r-this._lodMax+ds:0),f=4*(this._cubeSize-o);fs(t,p,f,3*o,2*o),a.setRenderTarget(t),a.render(c,ba)}};function mg(i){let e=[],t=[],n=i,r=i-ds+1+hg;for(let s=0;s<r;s++){let a=Math.pow(2,n);e.push(a);let l=1/(a-2),c=-l,h=1+l,o=[c,c,h,c,h,h,c,c,h,h,c,h],p=6,f=6,m=3,v=new Float32Array(m*f*p),w=new Float32Array(m*f*p);for(let d=0;d<p;d++){let x=d%3*2/3-1,U=d>2?0:-1,A=[x,U,0,x+2/3,U,0,x+2/3,U+1,0,x,U,0,x+2/3,U+1,0,x,U+1,0];v.set(A,m*f*d);for(let I=0;I<f;I++){let P=o[I*2]*2-1,O=o[I*2+1]*2-1;d===0?wr.set(1,O,P):d===1?wr.set(-P,1,-O):d===2?wr.set(-P,O,1):d===3?wr.set(-1,O,-P):d===4?wr.set(-P,-1,O):wr.set(P,O,-1),wr.toArray(w,(d*f+I)*m)}}let g=new Zt;g.setAttribute("position",new ln(v,m)),g.setAttribute("outputDirection",new ln(w,m)),t.push(new ut(g,null)),n>ds&&n--}return{lodMeshes:t,sizeLods:e}}function gf(i,e,t){let n=new en(i,e,t);return n.texture.mapping=da,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function gg(i,e,t){return new Gt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:dg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ul(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function vg(i,e,t){return new Gt({name:"SphericalGaussianBlur",defines:{SAMPLES:fg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ul(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function vf(){return new Gt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ul(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function _f(){return new Gt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Ul(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Dl=class extends en{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ks(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Sn(5,5,5),s=new Gt({name:"CubemapFromEquirect",uniforms:Er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:Vn});s.uniforms.tEquirect.value=t;let a=new ut(r,s),l=t.minFilter;return t.minFilter===sr&&(t.minFilter=fn),new Bo(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}};function _g(i){let e=new WeakMap,t=new WeakMap,n=null;function r(f,m=!1){return f==null?null:m?a(f):s(f)}function s(f){if(f&&f.isTexture){let m=f.mapping;if(m===Go||m===Wo)if(e.has(f)){let v=e.get(f).texture;return l(v,f.mapping)}else{let v=f.image;if(v&&v.height>0){let w=new Dl(v.height);return w.fromEquirectangularTexture(i,f),e.set(f,w),f.addEventListener("dispose",h),l(w.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let m=f.mapping,v=m===Go||m===Wo,w=m===rr||m===Tr;if(v||w){let g=t.get(f),d=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return n===null&&(n=new ms(i)),g=v?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{let x=f.image;return v&&x&&x.height>0||w&&x&&c(x)?(n===null&&(n=new ms(i)),g=v?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",o),g.texture):null}}}return f}function l(f,m){return m===Go?f.mapping=rr:m===Wo&&(f.mapping=Tr),f}function c(f){let m=0,v=6;for(let w=0;w<v;w++)f[w]!==void 0&&m++;return m===v}function h(f){let m=f.target;m.removeEventListener("dispose",h);let v=e.get(m);v!==void 0&&(e.delete(m),v.dispose())}function o(f){let m=f.target;m.removeEventListener("dispose",o);let v=t.get(m);v!==void 0&&(t.delete(m),v.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:p}}function xg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&xr("WebGLRenderer: "+n+" extension not supported."),r}}}function yg(i,e,t,n){let r={},s=new WeakMap;function a(p){let f=p.target;f.index!==null&&e.remove(f.index);for(let v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",a),delete r[f.id];let m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function l(p,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(p){let f=p.attributes;for(let m in f)e.update(f[m],i.ARRAY_BUFFER)}function h(p){let f=[],m=p.index,v=p.attributes.position,w=0;if(v===void 0)return;if(m!==null){let x=m.array;w=m.version;for(let U=0,A=x.length;U<A;U+=3){let I=x[U+0],P=x[U+1],O=x[U+2];f.push(I,P,P,O,O,I)}}else{let x=v.array;w=v.version;for(let U=0,A=x.length/3-1;U<A;U+=3){let I=U+0,P=U+1,O=U+2;f.push(I,P,P,O,O,I)}}let g=new(v.count>=65535?Gs:Vs)(f,1);g.version=w;let d=s.get(p);d&&e.remove(d),s.set(p,g)}function o(p){let f=s.get(p);if(f){let m=p.index;m!==null&&f.version<m.version&&h(p)}else h(p);return s.get(p)}return{get:l,update:c,getWireframeAttribute:o}}function Mg(i,e,t){let n;function r(p){n=p}let s,a;function l(p){s=p.type,a=p.bytesPerElement}function c(p,f){i.drawElements(n,f,s,p*a),t.update(f,n,1)}function h(p,f,m){m!==0&&(i.drawElementsInstanced(n,f,s,p*a,m),t.update(f,n,m))}function o(p,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,p,0,m);let w=0;for(let g=0;g<m;g++)w+=f[g];t.update(w,n,1)}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=o}function Sg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,l){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=l*(s/3);break;case i.LINES:t.lines+=l*(s/2);break;case i.LINE_STRIP:t.lines+=l*(s-1);break;case i.LINE_LOOP:t.lines+=l*s;break;case i.POINTS:t.points+=l*s;break;default:Je("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function bg(i,e,t){let n=new WeakMap,r=new zt;function s(a,l,c){let h=a.morphTargetInfluences,o=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,p=o!==void 0?o.length:0,f=n.get(l);if(f===void 0||f.count!==p){let _=function(){O.dispose(),n.delete(l),l.removeEventListener("dispose",_)};f!==void 0&&f.texture.dispose();let m=l.morphAttributes.position!==void 0,v=l.morphAttributes.normal!==void 0,w=l.morphAttributes.color!==void 0,g=l.morphAttributes.position||[],d=l.morphAttributes.normal||[],x=l.morphAttributes.color||[],U=0;m===!0&&(U=1),v===!0&&(U=2),w===!0&&(U=3);let A=l.attributes.position.count*U,I=1;A>e.maxTextureSize&&(I=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);let P=new Float32Array(A*I*4*p),O=new Bs(P,A,I,p);O.type=Gn,O.needsUpdate=!0;let b=U*4;for(let T=0;T<p;T++){let E=g[T],y=d[T],C=x[T],L=A*I*4*T;for(let z=0;z<E.count;z++){let K=z*b;m===!0&&(r.fromBufferAttribute(E,z),P[L+K+0]=r.x,P[L+K+1]=r.y,P[L+K+2]=r.z,P[L+K+3]=0),v===!0&&(r.fromBufferAttribute(y,z),P[L+K+4]=r.x,P[L+K+5]=r.y,P[L+K+6]=r.z,P[L+K+7]=0),w===!0&&(r.fromBufferAttribute(C,z),P[L+K+8]=r.x,P[L+K+9]=r.y,P[L+K+10]=r.z,P[L+K+11]=C.itemSize===4?r.w:1)}}f={count:p,texture:O,size:new qe(A,I)},n.set(l,f),l.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let w=0;w<h.length;w++)m+=h[w];let v=l.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Tg(i,e,t,n,r){let s=new WeakMap;function a(h){let o=r.render.frame,p=h.geometry,f=e.get(h,p);if(s.get(f)!==o&&(e.update(f),s.set(f,o)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),s.get(h)!==o&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),s.set(h,o))),h.isSkinnedMesh){let m=h.skeleton;s.get(m)!==o&&(m.update(),s.set(m,o))}return f}function l(){s=new WeakMap}function c(h){let o=h.target;o.removeEventListener("dispose",c),n.releaseStatesOfObject(o),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:a,dispose:l}}var Eg={[oa]:"LINEAR_TONE_MAPPING",[la]:"REINHARD_TONE_MAPPING",[ca]:"CINEON_TONE_MAPPING",[br]:"ACES_FILMIC_TONE_MAPPING",[ha]:"AGX_TONE_MAPPING",[fa]:"NEUTRAL_TONE_MAPPING",[ua]:"CUSTOM_TONE_MAPPING"};function wg(i,e,t,n,r,s){let a=new en(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,c=null,h=new Zt;h.setAttribute("position",new _t([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new _t([0,2,0,0,2,0],2));let o=new rs({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new ut(h,o),f=new nr(-1,1,1,-1,0,1),m=null,v=null,w=!1,g,d=null,x=[],U=!1;this.setSize=function(A,I){a.setSize(A,I),l!==null&&l.setSize(A,I),c!==null&&c.setSize(A,I);for(let P=0;P<x.length;P++){let O=x[P];O.setSize&&O.setSize(A,I)}},this.setEffects=function(A){x=A,U=x.length>0&&x[0].isRenderPass===!0;let I=a.width,P=a.height;x.length>0&&l===null&&(l=new en(I,P,{type:pn,depthBuffer:!1,stencilBuffer:!1}),c=new en(I,P,{type:pn,depthBuffer:!1,stencilBuffer:!1}));for(let O=0;O<x.length;O++){let b=x[O];b.setSize&&b.setSize(I,P)}},this.begin=function(A,I){if(w||A.toneMapping===ei&&x.length===0)return!1;if(d=I,I!==null){let P=I.width,O=I.height;(a.width!==P||a.height!==O)&&this.setSize(P,O)}return U===!1&&A.setRenderTarget(a),g=A.toneMapping,A.toneMapping=ei,!0},this.hasRenderPass=function(){return U},this.end=function(A,I){A.toneMapping=g,w=!0;let P=a,O=l;for(let b=0;b<x.length;b++){let _=x[b];_.enabled!==!1&&(_.render(A,O,P,I),_.needsSwap!==!1&&(P=O,O=O===l?c:l))}if(m!==A.outputColorSpace||v!==A.toneMapping){m=A.outputColorSpace,v=A.toneMapping,o.defines={},lt.getTransfer(m)===vt&&(o.defines.SRGB_TRANSFER="");let b=Eg[v];b&&(o.defines[b]=""),o.needsUpdate=!0}o.uniforms.tDiffuse.value=P.texture,A.setRenderTarget(d),A.render(p,f),d=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),h.dispose(),o.dispose()}}var Hf=new Mn,vu=new $i(1,1),Bf=new Bs,zf=new To,kf=new Ks,xf=[],yf=[],Mf=new Float32Array(16),Sf=new Float32Array(9),bf=new Float32Array(4);function gs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=xf[r];if(s===void 0&&(s=new Float32Array(r),xf[r]=s),e!==0){n.toArray(s,0);for(let a=1,l=0;a!==e;++a)l+=t,i[a].toArray(s,l)}return s}function nn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function rn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ol(i,e){let t=yf[e];t===void 0&&(t=new Int32Array(e),yf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ag(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Rg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2fv(this.addr,e),rn(t,e)}}function Cg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;i.uniform3fv(this.addr,e),rn(t,e)}}function Ig(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4fv(this.addr,e),rn(t,e)}}function Pg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,n))return;bf.set(n),i.uniformMatrix2fv(this.addr,!1,bf),rn(t,n)}}function Lg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,n))return;Sf.set(n),i.uniformMatrix3fv(this.addr,!1,Sf),rn(t,n)}}function Dg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,n))return;Mf.set(n),i.uniformMatrix4fv(this.addr,!1,Mf),rn(t,n)}}function Ng(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ug(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2iv(this.addr,e),rn(t,e)}}function Og(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;i.uniform3iv(this.addr,e),rn(t,e)}}function Fg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4iv(this.addr,e),rn(t,e)}}function Hg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Bg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2uiv(this.addr,e),rn(t,e)}}function zg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;i.uniform3uiv(this.addr,e),rn(t,e)}}function kg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4uiv(this.addr,e),rn(t,e)}}function Vg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(vu.compareFunction=t.isReversedDepthBuffer()?Il:Cl,s=vu):s=Hf,t.setTexture2D(e||s,r)}function Gg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||zf,r)}function Wg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||kf,r)}function qg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Bf,r)}function Xg(i){switch(i){case 5126:return Ag;case 35664:return Rg;case 35665:return Cg;case 35666:return Ig;case 35674:return Pg;case 35675:return Lg;case 35676:return Dg;case 5124:case 35670:return Ng;case 35667:case 35671:return Ug;case 35668:case 35672:return Og;case 35669:case 35673:return Fg;case 5125:return Hg;case 36294:return Bg;case 36295:return zg;case 36296:return kg;case 35678:case 36198:case 36298:case 36306:case 35682:return Vg;case 35679:case 36299:case 36307:return Gg;case 35680:case 36300:case 36308:case 36293:return Wg;case 36289:case 36303:case 36311:case 36292:return qg}}function Yg(i,e){i.uniform1fv(this.addr,e)}function Kg(i,e){let t=gs(e,this.size,2);i.uniform2fv(this.addr,t)}function Zg(i,e){let t=gs(e,this.size,3);i.uniform3fv(this.addr,t)}function Jg(i,e){let t=gs(e,this.size,4);i.uniform4fv(this.addr,t)}function $g(i,e){let t=gs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function jg(i,e){let t=gs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Qg(i,e){let t=gs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ev(i,e){i.uniform1iv(this.addr,e)}function tv(i,e){i.uniform2iv(this.addr,e)}function nv(i,e){i.uniform3iv(this.addr,e)}function iv(i,e){i.uniform4iv(this.addr,e)}function rv(i,e){i.uniform1uiv(this.addr,e)}function sv(i,e){i.uniform2uiv(this.addr,e)}function av(i,e){i.uniform3uiv(this.addr,e)}function ov(i,e){i.uniform4uiv(this.addr,e)}function lv(i,e,t){let n=this.cache,r=e.length,s=Ol(t,r);nn(n,s)||(i.uniform1iv(this.addr,s),rn(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=vu:a=Hf;for(let l=0;l!==r;++l)t.setTexture2D(e[l]||a,s[l])}function cv(i,e,t){let n=this.cache,r=e.length,s=Ol(t,r);nn(n,s)||(i.uniform1iv(this.addr,s),rn(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||zf,s[a])}function uv(i,e,t){let n=this.cache,r=e.length,s=Ol(t,r);nn(n,s)||(i.uniform1iv(this.addr,s),rn(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||kf,s[a])}function hv(i,e,t){let n=this.cache,r=e.length,s=Ol(t,r);nn(n,s)||(i.uniform1iv(this.addr,s),rn(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Bf,s[a])}function fv(i){switch(i){case 5126:return Yg;case 35664:return Kg;case 35665:return Zg;case 35666:return Jg;case 35674:return $g;case 35675:return jg;case 35676:return Qg;case 5124:case 35670:return ev;case 35667:case 35671:return tv;case 35668:case 35672:return nv;case 35669:case 35673:return iv;case 5125:return rv;case 36294:return sv;case 36295:return av;case 36296:return ov;case 35678:case 36198:case 36298:case 36306:case 35682:return lv;case 35679:case 36299:case 36307:return cv;case 35680:case 36300:case 36308:case 36293:return uv;case 36289:case 36303:case 36311:case 36292:return hv}}var _u=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Xg(t.type)}},xu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fv(t.type)}},yu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let l=r[s];l.setValue(e,t[l.id],n)}}},mu=/(\w+)(\])?(\[|\.)?/g;function Tf(i,e){i.seq.push(e),i.map[e.id]=e}function dv(i,e,t){let n=i.name,r=n.length;for(mu.lastIndex=0;;){let s=mu.exec(n),a=mu.lastIndex,l=s[1],c=s[2]==="]",h=s[3];if(c&&(l=l|0),h===void 0||h==="["&&a+2===r){Tf(t,h===void 0?new _u(l,i,e):new xu(l,i,e));break}else{let p=t.map[l];p===void 0&&(p=new yu(l),Tf(t,p)),t=p}}}var ps=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);dv(l,c,this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let l=t[s],c=n[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function Ef(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var pv=37297,mv=0;function gv(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let l=a+1;n.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return n.join(`
`)}var wf=new je;function vv(i){lt._getMatrix(wf,lt.workingColorSpace,i);let e=`mat3( ${wf.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(i)){case Fs:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return Ze("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Af(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let l=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+gv(i.getShaderSource(e),l)}else return s}function _v(i,e){let t=vv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var xv={[oa]:"Linear",[la]:"Reinhard",[ca]:"Cineon",[br]:"ACESFilmic",[ha]:"AgX",[fa]:"Neutral",[ua]:"Custom"};function yv(i,e){let t=xv[e];return t===void 0?(Ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ll=new te;function Mv(){lt.getLuminanceCoefficients(Ll);let i=Ll.x.toFixed(4),e=Ll.y.toFixed(4),t=Ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ea).join(`
`)}function bv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Tv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),a=s.name,l=1;s.type===i.FLOAT_MAT2&&(l=2),s.type===i.FLOAT_MAT3&&(l=3),s.type===i.FLOAT_MAT4&&(l=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:l}}return t}function Ea(i){return i!==""}function Rf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ev=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mu(i){return i.replace(Ev,Av)}var wv=new Map;function Av(i,e){let t=it[e];if(t===void 0){let n=wv.get(e);if(n!==void 0)t=it[n],Ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Mu(t)}var Rv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function If(i){return i.replace(Rv,Cv)}function Cv(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Pf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Iv={[aa]:"SHADOWMAP_TYPE_PCF",[os]:"SHADOWMAP_TYPE_VSM"};function Pv(i){return Iv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Lv={[rr]:"ENVMAP_TYPE_CUBE",[Tr]:"ENVMAP_TYPE_CUBE",[da]:"ENVMAP_TYPE_CUBE_UV"};function Dv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Lv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Nv={[Tr]:"ENVMAP_MODE_REFRACTION"};function Uv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Nv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ov={[Vo]:"ENVMAP_BLENDING_MULTIPLY",[Kh]:"ENVMAP_BLENDING_MIX",[Zh]:"ENVMAP_BLENDING_ADD"};function Fv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ov[i.combine]||"ENVMAP_BLENDING_NONE"}function Hv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Bv(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,l=t.fragmentShader,c=Pv(t),h=Dv(t),o=Uv(t),p=Fv(t),f=Hv(t),m=Sv(t),v=bv(s),w=r.createProgram(),g,d,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ea).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ea).join(`
`),d.length>0&&(d+=`
`)):(g=[Pf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+o:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ea).join(`
`),d=[Pf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+o:"",t.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ei?"#define TONE_MAPPING":"",t.toneMapping!==ei?it.tonemapping_pars_fragment:"",t.toneMapping!==ei?yv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,_v("linearToOutputTexel",t.outputColorSpace),Mv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ea).join(`
`)),a=Mu(a),a=Rf(a,t),a=Cf(a,t),l=Mu(l),l=Rf(l,t),l=Cf(l,t),a=If(a),l=If(l),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",t.glslVersion===eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let U=x+g+a,A=x+d+l,I=Ef(r,r.VERTEX_SHADER,U),P=Ef(r,r.FRAGMENT_SHADER,A);r.attachShader(w,I),r.attachShader(w,P),t.index0AttributeName!==void 0?r.bindAttribLocation(w,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(w,0,"position"),r.linkProgram(w);function O(E){if(i.debug.checkShaderErrors){let y=r.getProgramInfoLog(w)||"",C=r.getShaderInfoLog(I)||"",L=r.getShaderInfoLog(P)||"",z=y.trim(),K=C.trim(),ee=L.trim(),J=!0,k=!0;if(r.getProgramParameter(w,r.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,w,I,P);else{let $=Af(r,I,"vertex"),X=Af(r,P,"fragment");Je("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(w,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+z+`
`+$+`
`+X)}else z!==""?Ze("WebGLProgram: Program Info Log:",z):(K===""||ee==="")&&(k=!1);k&&(E.diagnostics={runnable:J,programLog:z,vertexShader:{log:K,prefix:g},fragmentShader:{log:ee,prefix:d}})}r.deleteShader(I),r.deleteShader(P),b=new ps(r,w),_=Tv(r,w)}let b;this.getUniforms=function(){return b===void 0&&O(this),b};let _;this.getAttributes=function(){return _===void 0&&O(this),_};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(w,pv)),T},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mv++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=I,this.fragmentShader=P,this}var zv=0,Su=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new bu(e),t.set(e,n)),n}},bu=class{constructor(e){this.id=zv++,this.code=e,this.usedTimes=0}};function kv(i){return i===or||i===xa||i===ya}function Vv(i,e,t,n,r,s){let a=new zs,l=new Su,c=new Set,h=[],o=new Map,p=n.logarithmicDepthBuffer,f=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function w(b,_,T,E,y,C){let L=E.fog,z=y.geometry,K=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?E.environment:null,ee=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,J=e.get(b.envMap||K,ee),k=J&&J.mapping===da?J.image.height:null,$=m[b.type];b.precision!==null&&(f=n.getMaxPrecision(b.precision),f!==b.precision&&Ze("WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let X=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,me=X!==void 0?X.length:0,he=0;z.morphAttributes.position!==void 0&&(he=1),z.morphAttributes.normal!==void 0&&(he=2),z.morphAttributes.color!==void 0&&(he=3);let ke,Ge,De,ae;if($){let B=_i[$];ke=B.vertexShader,Ge=B.fragmentShader}else{ke=b.vertexShader,Ge=b.fragmentShader;let B=l.getVertexShaderStage(b),re=l.getFragmentShaderStage(b);l.update(b,B,re),De=B.id,ae=re.id}let ce=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),Ve=y.isInstancedMesh===!0,Se=y.isBatchedMesh===!0,Ke=!!b.map,bt=!!b.matcap,Ye=!!J,et=!!b.aoMap,mt=!!b.lightMap,tt=!!b.bumpMap&&b.wireframe===!1,Tt=!!b.normalMap,Wt=!!b.displacementMap,Yt=!!b.emissiveMap,wt=!!b.metalnessMap,It=!!b.roughnessMap,q=b.anisotropy>0,Dt=b.clearcoat>0,rt=b.dispersion>0,F=b.retroreflectivity>0,M=b.iridescence>0,D=b.sheen>0,N=b.transmission>0,H=q&&!!b.anisotropyMap,V=Dt&&!!b.clearcoatMap,j=Dt&&!!b.clearcoatNormalMap,G=Dt&&!!b.clearcoatRoughnessMap,Z=M&&!!b.iridescenceMap,le=M&&!!b.iridescenceThicknessMap,ge=D&&!!b.sheenColorMap,fe=D&&!!b.sheenRoughnessMap,ve=!!b.specularMap,ye=!!b.specularColorMap,Pe=!!b.specularIntensityMap,He=N&&!!b.transmissionMap,W=N&&!!b.thicknessMap,xe=!!b.gradientMap,ue=!!b.alphaMap,Me=b.alphaTest>0,Ae=!!b.alphaHash,pe=!!b.extensions,u=ei;b.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(u=i.toneMapping);let S={shaderID:$,shaderType:b.type,shaderName:b.name,vertexShader:ke,fragmentShader:Ge,defines:b.defines,customVertexShaderID:De,customFragmentShaderID:ae,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Se,batchingColor:Se&&y._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&y.instanceColor!==null,instancingMorph:Ve&&y.morphTexture!==null,outputColorSpace:ce===null?i.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Ke,matcap:bt,envMap:Ye,envMapMode:Ye&&J.mapping,envMapCubeUVHeight:k,aoMap:et,lightMap:mt,bumpMap:tt,normalMap:Tt,displacementMap:Wt,emissiveMap:Yt,normalMapObjectSpace:Tt&&b.normalMapType===jh,normalMapTangentSpace:Tt&&b.normalMapType===Ma,packedNormalMap:Tt&&b.normalMapType===Ma&&kv(b.normalMap.format),metalnessMap:wt,roughnessMap:It,anisotropy:q,anisotropyMap:H,clearcoat:Dt,clearcoatMap:V,clearcoatNormalMap:j,clearcoatRoughnessMap:G,dispersion:rt,retroreflection:F,iridescence:M,iridescenceMap:Z,iridescenceThicknessMap:le,sheen:D,sheenColorMap:ge,sheenRoughnessMap:fe,specularMap:ve,specularColorMap:ye,specularIntensityMap:Pe,transmission:N,transmissionMap:He,thicknessMap:W,gradientMap:xe,opaque:b.transparent===!1&&b.blending===ls&&b.alphaToCoverage===!1,alphaMap:ue,alphaTest:Me,alphaHash:Ae,combine:b.combine,mapUv:Ke&&v(b.map.channel),aoMapUv:et&&v(b.aoMap.channel),lightMapUv:mt&&v(b.lightMap.channel),bumpMapUv:tt&&v(b.bumpMap.channel),normalMapUv:Tt&&v(b.normalMap.channel),displacementMapUv:Wt&&v(b.displacementMap.channel),emissiveMapUv:Yt&&v(b.emissiveMap.channel),metalnessMapUv:wt&&v(b.metalnessMap.channel),roughnessMapUv:It&&v(b.roughnessMap.channel),anisotropyMapUv:H&&v(b.anisotropyMap.channel),clearcoatMapUv:V&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:j&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:le&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:fe&&v(b.sheenRoughnessMap.channel),specularMapUv:ve&&v(b.specularMap.channel),specularColorMapUv:ye&&v(b.specularColorMap.channel),specularIntensityMapUv:Pe&&v(b.specularIntensityMap.channel),transmissionMapUv:He&&v(b.transmissionMap.channel),thicknessMapUv:W&&v(b.thicknessMap.channel),alphaMapUv:ue&&v(b.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Tt||q),vertexNormals:!!z.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:y.isPoints===!0&&!!z.attributes.uv&&(Ke||ue),fog:!!L,useFog:b.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||z.attributes.normal===void 0&&Tt===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:be,skinning:y.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:he,numSunLights:_.sun.length,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numSunLightShadows:_.sunShadowMap.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numLightProbeGrids:C.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:u,decodeVideoTexture:Ke&&b.map.isVideoTexture===!0&&lt.getTransfer(b.map.colorSpace)===vt,decodeVideoTextureEmissive:Yt&&b.emissiveMap.isVideoTexture===!0&&lt.getTransfer(b.emissiveMap.colorSpace)===vt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===kn,flipSided:b.side===dn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:pe&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&b.extensions.multiDraw===!0||Se)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return S.vertexUv1s=c.has(1),S.vertexUv2s=c.has(2),S.vertexUv3s=c.has(3),c.clear(),S}function g(b){let _=[];if(b.shaderID?_.push(b.shaderID):(_.push(b.customVertexShaderID),_.push(b.customFragmentShaderID)),b.defines!==void 0)for(let T in b.defines)_.push(T),_.push(b.defines[T]);return b.isRawShaderMaterial===!1&&(d(_,b),x(_,b),_.push(i.outputColorSpace)),_.push(b.customProgramCacheKey),_.join()}function d(b,_){b.push(_.precision),b.push(_.outputColorSpace),b.push(_.envMapMode),b.push(_.envMapCubeUVHeight),b.push(_.mapUv),b.push(_.alphaMapUv),b.push(_.lightMapUv),b.push(_.aoMapUv),b.push(_.bumpMapUv),b.push(_.normalMapUv),b.push(_.displacementMapUv),b.push(_.emissiveMapUv),b.push(_.metalnessMapUv),b.push(_.roughnessMapUv),b.push(_.anisotropyMapUv),b.push(_.clearcoatMapUv),b.push(_.clearcoatNormalMapUv),b.push(_.clearcoatRoughnessMapUv),b.push(_.iridescenceMapUv),b.push(_.iridescenceThicknessMapUv),b.push(_.sheenColorMapUv),b.push(_.sheenRoughnessMapUv),b.push(_.specularMapUv),b.push(_.specularColorMapUv),b.push(_.specularIntensityMapUv),b.push(_.transmissionMapUv),b.push(_.thicknessMapUv),b.push(_.combine),b.push(_.fogExp2),b.push(_.sizeAttenuation),b.push(_.morphTargetsCount),b.push(_.morphAttributeCount),b.push(_.numSunLights),b.push(_.numDirLights),b.push(_.numPointLights),b.push(_.numSpotLights),b.push(_.numSpotLightMaps),b.push(_.numHemiLights),b.push(_.numRectAreaLights),b.push(_.numSunLightShadows),b.push(_.numDirLightShadows),b.push(_.numPointLightShadows),b.push(_.numSpotLightShadows),b.push(_.numSpotLightShadowsWithMaps),b.push(_.numLightProbes),b.push(_.shadowMapType),b.push(_.toneMapping),b.push(_.numClippingPlanes),b.push(_.numClipIntersection),b.push(_.depthPacking)}function x(b,_){a.disableAll(),_.instancing&&a.enable(0),_.instancingColor&&a.enable(1),_.instancingMorph&&a.enable(2),_.matcap&&a.enable(3),_.envMap&&a.enable(4),_.normalMapObjectSpace&&a.enable(5),_.normalMapTangentSpace&&a.enable(6),_.clearcoat&&a.enable(7),_.iridescence&&a.enable(8),_.alphaTest&&a.enable(9),_.vertexColors&&a.enable(10),_.vertexAlphas&&a.enable(11),_.vertexUv1s&&a.enable(12),_.vertexUv2s&&a.enable(13),_.vertexUv3s&&a.enable(14),_.vertexTangents&&a.enable(15),_.anisotropy&&a.enable(16),_.alphaHash&&a.enable(17),_.batching&&a.enable(18),_.dispersion&&a.enable(19),_.retroreflection&&a.enable(24),_.batchingColor&&a.enable(20),_.gradientMap&&a.enable(21),_.packedNormalMap&&a.enable(22),_.vertexNormals&&a.enable(23),b.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),_.numLightProbeGrids>0&&a.enable(22),_.hasPositionAttribute&&a.enable(23),b.push(a.mask)}function U(b){let _=m[b.type],T;if(_){let E=_i[_];T=Li.clone(E.uniforms)}else T=b.uniforms;return T}function A(b,_){let T=o.get(_);return T!==void 0?++T.usedTimes:(T=new Bv(i,_,b,r),h.push(T),o.set(_,T)),T}function I(b){if(--b.usedTimes===0){let _=h.indexOf(b);h[_]=h[h.length-1],h.pop(),o.delete(b.cacheKey),b.destroy()}}function P(b){l.remove(b)}function O(){l.dispose()}return{getParameters:w,getProgramCacheKey:g,getUniforms:U,acquireProgram:A,releaseProgram:I,releaseShaderCache:P,programs:h,dispose:O}}function Gv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function r(a,l,c){i.get(a)[l]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Wv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Lf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Df(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}function l(f,m,v,w,g,d){let x=i[e];return x===void 0?(x={id:f.id,object:f,geometry:m,material:v,materialVariant:a(f),groupOrder:w,renderOrder:f.renderOrder,z:g,group:d},i[e]=x):(x.id=f.id,x.object=f,x.geometry=m,x.material=v,x.materialVariant=a(f),x.groupOrder=w,x.renderOrder=f.renderOrder,x.z=g,x.group=d),e++,x}function c(f,m,v,w,g,d,x){x.reversedDepth===!0&&(g=-g);let U=l(f,m,v,w,g,d);v.transmission>0?n.push(U):v.transparent===!0?r.push(U):t.push(U)}function h(f,m,v,w,g,d){let x=l(f,m,v,w,g,d);v.transmission>0?n.unshift(x):v.transparent===!0?r.unshift(x):t.unshift(x)}function o(f,m){t.length>1&&t.sort(f||Wv),n.length>1&&n.sort(m||Lf),r.length>1&&r.sort(m||Lf)}function p(){for(let f=e,m=i.length;f<m;f++){let v=i[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:h,finish:p,sort:o}}function qv(){let i=new WeakMap;function e(n,r){let s=i.get(n),a;return s===void 0?(a=new Df,i.set(n,[a])):r>=s.length?(a=new Df,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Xv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new te,color:new We};break;case"SpotLight":t={position:new te,direction:new te,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new te,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new te,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new te,halfWidth:new te,halfHeight:new te};break}return i[e.id]=t,t}}}function Yv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Kv=0;function Zv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Jv(i){let e=new Xv,t=Yv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new te);let r=new te,s=new Lt,a=new Lt;function l(h){let o=0,p=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let m=0,v=0,w=0,g=0,d=0,x=0,U=0,A=0,I=0,P=0,O=0,b=0,_=0,T=0;h.sort(Zv);for(let y=0,C=h.length;y<C;y++){let L=h[y],z=L.color,K=L.intensity,ee=L.distance,J=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===or?J=L.shadow.map.texture:J=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)o+=z.r*K,p+=z.g*K,f+=z.b*K;else if(L.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(L.sh.coefficients[k],K);T++}else if(L.isSunLight){let k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let $=L.shadow,X=t.get(L);X.shadowIntensity=$.intensity,X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[v]=X,n.sunShadowMap[v]=J;let me=$.getViewportCount();for(let he=0;he<me;he++)n.sunShadowMatrix[w+he]=$.getMatrix(he),n.sunShadowCascade[w+he]=$._cascadeData[he];w+=me,v++}n.sun[m]=k,m++}else if(L.isDirectionalLight){let k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let $=L.shadow,X=t.get(L);X.shadowIntensity=$.intensity,X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,n.directionalShadow[g]=X,n.directionalShadowMap[g]=J,n.directionalShadowMatrix[g]=L.shadow.matrix,I++}n.directional[g]=k,g++}else if(L.isSpotLight){let k=e.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(z).multiplyScalar(K),k.distance=ee,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,n.spot[x]=k;let $=L.shadow;if(L.map&&(n.spotLightMap[b]=L.map,b++,$.updateMatrices(L),L.castShadow&&_++),n.spotLightMatrix[x]=$.matrix,L.castShadow){let X=t.get(L);X.shadowIntensity=$.intensity,X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=J,O++}x++}else if(L.isRectAreaLight){let k=e.get(L);k.color.copy(z).multiplyScalar(K),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),n.rectArea[U]=k,U++}else if(L.isPointLight){let k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),k.distance=L.distance,k.decay=L.decay,L.castShadow){let $=L.shadow,X=t.get(L);X.shadowIntensity=$.intensity,X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,X.shadowCameraNear=$.camera.near,X.shadowCameraFar=$.camera.far,n.pointShadow[d]=X,n.pointShadowMap[d]=J,n.pointShadowMatrix[d]=L.shadow.matrix,P++}n.point[d]=k,d++}else if(L.isHemisphereLight){let k=e.get(L);k.skyColor.copy(L.color).multiplyScalar(K),k.groundColor.copy(L.groundColor).multiplyScalar(K),n.hemi[A]=k,A++}}U>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=o,n.ambient[1]=p,n.ambient[2]=f;let E=n.hash;(E.sunLength!==m||E.directionalLength!==g||E.pointLength!==d||E.spotLength!==x||E.rectAreaLength!==U||E.hemiLength!==A||E.numSunShadows!==v||E.numDirectionalShadows!==I||E.numPointShadows!==P||E.numSpotShadows!==O||E.numSpotMaps!==b||E.numLightProbes!==T)&&(n.sun.length=m,n.directional.length=g,n.spot.length=x,n.rectArea.length=U,n.point.length=d,n.hemi.length=A,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=w,n.sunShadowCascade.length=w,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.directionalShadowMatrix.length=I,n.pointShadow.length=P,n.pointShadowMap.length=P,n.pointShadowMatrix.length=P,n.spotShadow.length=O,n.spotShadowMap.length=O,n.spotLightMatrix.length=O+b-_,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=_,n.numLightProbes=T,E.sunLength=m,E.directionalLength=g,E.pointLength=d,E.spotLength=x,E.rectAreaLength=U,E.hemiLength=A,E.numSunShadows=v,E.numDirectionalShadows=I,E.numPointShadows=P,E.numSpotShadows=O,E.numSpotMaps=b,E.numLightProbes=T,n.version=Kv++)}function c(h,o){let p=0,f=0,m=0,v=0,w=0,g=0,d=o.matrixWorldInverse;for(let x=0,U=h.length;x<U;x++){let A=h[x];if(A.isSunLight){let I=n.sun[p];I.direction.setFromMatrixPosition(A.matrixWorld),I.direction.transformDirection(d),p++}else if(A.isDirectionalLight){let I=n.directional[f];I.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(d),f++}else if(A.isSpotLight){let I=n.spot[v];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(d),I.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(d),v++}else if(A.isRectAreaLight){let I=n.rectArea[w];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(d),a.identity(),s.copy(A.matrixWorld),s.premultiply(d),a.extractRotation(s),I.halfWidth.set(A.width*.5,0,0),I.halfHeight.set(0,A.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),w++}else if(A.isPointLight){let I=n.point[m];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(d),m++}else if(A.isHemisphereLight){let I=n.hemi[g];I.direction.setFromMatrixPosition(A.matrixWorld),I.direction.transformDirection(d),g++}}}return{setup:l,setupView:c,state:n}}function Nf(i){let e=new Jv(i),t=[],n=[],r=[];function s(f){p.camera=f,t.length=0,n.length=0,r.length=0}function a(f){t.push(f)}function l(f){n.push(f)}function c(f){r.push(f)}function h(){e.setup(t)}function o(f){e.setupView(t,f)}let p={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:h,setupLightsView:o,pushLight:a,pushShadow:l,pushLightProbeGrid:c}}function $v(i){let e=new WeakMap;function t(r,s=0){let a=e.get(r),l;return a===void 0?(l=new Nf(i),e.set(r,[l])):s>=a.length?(l=new Nf(i),a.push(l)):l=a[s],l}function n(){e=new WeakMap}return{get:t,dispose:n}}var jv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qv=`uniform sampler2D shadow_pass;
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
}`,e_=[new te(1,0,0),new te(-1,0,0),new te(0,1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1)],t_=[new te(0,-1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1),new te(0,-1,0),new te(0,-1,0)],Uf=new Lt,Ta=new te,gu=new te;function n_(i,e,t){let n=new ts,r=new qe,s=new qe,a=new zt,l=new Ao,c=new Ro,h={},o=t.maxTextureSize,p={[ir]:dn,[dn]:ir,[kn]:kn},f=new Gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:jv,fragmentShader:Qv}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let v=new Zt;v.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let w=new ut(v,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=aa;let d=this.type;this.render=function(P,O,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||P.length===0)return;this.type===Ch&&(Ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=aa);let _=i.getRenderTarget(),T=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),y=i.state;y.setBlending(Vn),y.buffers.depth.getReversed()===!0?y.buffers.color.setClear(0,0,0,0):y.buffers.color.setClear(1,1,1,1),y.buffers.depth.setTest(!0),y.setScissorTest(!1);let C=d!==this.type;C&&O.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(z=>z.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,z=P.length;L<z;L++){let K=P[L],ee=K.shadow;if(ee===void 0){Ze("WebGLShadowMap:",K,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;r.copy(ee.mapSize);let J=ee.getFrameExtents();r.multiply(J),s.copy(ee.mapSize),(r.x>o||r.y>o)&&(r.x>o&&(s.x=Math.floor(o/J.x),r.x=s.x*J.x,ee.mapSize.x=s.x),r.y>o&&(s.y=Math.floor(o/J.y),r.y=s.y*J.y,ee.mapSize.y=s.y));let k=i.state.buffers.depth.getReversed();if(ee.camera._reversedDepth=k,ee.map===null||C===!0){if(ee.map!==null&&(ee.map.depthTexture!==null&&(ee.map.depthTexture.dispose(),ee.map.depthTexture=null),ee.map.dispose()),this.type===os){if(K.isPointLight){Ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ee.map=new en(r.x,r.y,{format:or,type:pn,minFilter:fn,magFilter:fn,generateMipmaps:!1}),ee.map.texture.name=K.name+".shadowMap",ee.map.depthTexture=new $i(r.x,r.y,Gn),ee.map.depthTexture.name=K.name+".shadowMapDepth",ee.map.depthTexture.format=ui,ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=cn,ee.map.depthTexture.magFilter=cn}else K.isPointLight?(ee.map=new Dl(r.x),ee.map.depthTexture=new wo(r.x,ti)):(ee.map=new en(r.x,r.y),ee.map.depthTexture=new $i(r.x,r.y,ti)),ee.map.depthTexture.name=K.name+".shadowMap",ee.map.depthTexture.format=ui,this.type===aa?(ee.map.depthTexture.compareFunction=k?Il:Cl,ee.map.depthTexture.minFilter=fn,ee.map.depthTexture.magFilter=fn):(ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=cn,ee.map.depthTexture.magFilter=cn);ee.camera.updateProjectionMatrix()}ee.map.isWebGLCubeRenderTarget!==!0&&(ee.map.width!==r.x||ee.map.height!==r.y)&&ee.map.setSize(r.x,r.y);let $=ee.map.isWebGLCubeRenderTarget?6:ee.getViewportCount();K.isPointLight!==!0&&ee.updateMatrices(K,b);for(let X=0;X<$;X++){let me=ee.getCamera(X);if(K.isPointLight){let he=ee.camera,ke=ee.matrix,Ge=K.distance||he.far;Ge!==he.far&&(he.far=Ge,he.updateProjectionMatrix()),Ta.setFromMatrixPosition(K.matrixWorld),he.position.copy(Ta),gu.copy(he.position),gu.add(e_[X]),he.up.copy(t_[X]),he.lookAt(gu),he.updateMatrixWorld(),ke.makeTranslation(-Ta.x,-Ta.y,-Ta.z),Uf.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),ee._frustum.setFromProjectionMatrix(Uf,he.coordinateSystem,he.reversedDepth)}if(ee.map.isWebGLCubeRenderTarget)i.setRenderTarget(ee.map,X),i.clear();else{X===0&&(i.setRenderTarget(ee.map),i.clear());let he=ee.getViewport(X);a.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),y.viewport(a)}n=ee.getFrustum(X),A(O,b,me,K,this.type)}ee.isPointLightShadow!==!0&&this.type===os&&x(ee,b),ee.needsUpdate=!1}d=this.type,g.needsUpdate=!1,i.setRenderTarget(_,T,E)};function x(P,O){let b=e.update(w);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null?P.mapPass=new en(r.x,r.y,{format:or,type:pn}):(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)&&P.mapPass.setSize(P.map.width,P.map.height),f.uniforms.shadow_pass.value=P.map.depthTexture,f.uniforms.resolution.value.set(P.map.width,P.map.height),f.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(O,null,b,f,w,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value.set(P.map.width,P.map.height),m.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(O,null,b,m,w,null)}function U(P,O,b,_){let T=null,E=b.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(E!==void 0)T=E;else if(T=b.isPointLight===!0?c:l,i.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){let y=T.uuid,C=O.uuid,L=h[y];L===void 0&&(L={},h[y]=L);let z=L[C];z===void 0&&(z=T.clone(),L[C]=z,O.addEventListener("dispose",I)),T=z}if(T.visible=O.visible,T.wireframe=O.wireframe,_===os?T.side=O.shadowSide!==null?O.shadowSide:O.side:T.side=O.shadowSide!==null?O.shadowSide:p[O.side],T.alphaMap=O.alphaMap,T.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,T.map=O.map,T.clipShadows=O.clipShadows,T.clippingPlanes=O.clippingPlanes,T.clipIntersection=O.clipIntersection,T.displacementMap=O.displacementMap,T.displacementScale=O.displacementScale,T.displacementBias=O.displacementBias,T.wireframeLinewidth=O.wireframeLinewidth,T.linewidth=O.linewidth,b.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let y=i.properties.get(T);y.light=b}return T}function A(P,O,b,_,T){if(P.visible===!1)return;if(P.layers.test(O.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&T===os)&&(!P.frustumCulled||P.intersectsFrustum(n))){P.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,P.matrixWorld);let C=e.update(P),L=P.material;if(Array.isArray(L)){let z=C.groups;for(let K=0,ee=z.length;K<ee;K++){let J=z[K],k=L[J.materialIndex];if(k&&k.visible){let $=U(P,k,_,T);P.onBeforeShadow(i,P,O,b,C,$,J),i.renderBufferDirect(b,null,C,$,P,J),P.onAfterShadow(i,P,O,b,C,$,J)}}}else if(L.visible){let z=U(P,L,_,T);P.onBeforeShadow(i,P,O,b,C,z,null),i.renderBufferDirect(b,null,C,z,P,null),P.onAfterShadow(i,P,O,b,C,z,null)}}let y=P.children;for(let C=0,L=y.length;C<L;C++)A(y[C],O,b,_,T)}function I(P){P.target.removeEventListener("dispose",I);for(let b in h){let _=h[b],T=P.target.uuid;T in _&&(_[T].dispose(),delete _[T])}}}function i_(i,e){function t(){let W=!1,xe=new zt,ue=null,Me=new zt(0,0,0,0);return{setMask:function(Ae){ue!==Ae&&!W&&(i.colorMask(Ae,Ae,Ae,Ae),ue=Ae)},setLocked:function(Ae){W=Ae},setClear:function(Ae,pe,u,S,B){B===!0&&(Ae*=S,pe*=S,u*=S),xe.set(Ae,pe,u,S),Me.equals(xe)===!1&&(i.clearColor(Ae,pe,u,S),Me.copy(xe))},reset:function(){W=!1,ue=null,Me.set(-1,0,0,0)}}}function n(){let W=!1,xe=!1,ue=null,Me=null,Ae=null;return{setReversed:function(pe){if(xe!==pe){let u=e.get("EXT_clip_control");pe?u.clipControlEXT(u.LOWER_LEFT_EXT,u.ZERO_TO_ONE_EXT):u.clipControlEXT(u.LOWER_LEFT_EXT,u.NEGATIVE_ONE_TO_ONE_EXT),xe=pe;let S=Ae;Ae=null,this.setClear(S)}},getReversed:function(){return xe},setTest:function(pe){pe?ce(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(pe){ue!==pe&&!W&&(i.depthMask(pe),ue=pe)},setFunc:function(pe){if(xe&&(pe=hf[pe]),Me!==pe){switch(pe){case ho:i.depthFunc(i.NEVER);break;case fo:i.depthFunc(i.ALWAYS);break;case po:i.depthFunc(i.LESS);break;case Zr:i.depthFunc(i.LEQUAL);break;case mo:i.depthFunc(i.EQUAL);break;case go:i.depthFunc(i.GEQUAL);break;case vo:i.depthFunc(i.GREATER);break;case _o:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Me=pe}},setLocked:function(pe){W=pe},setClear:function(pe){Ae!==pe&&(Ae=pe,xe&&(pe=1-pe),i.clearDepth(pe))},reset:function(){W=!1,ue=null,Me=null,Ae=null,xe=!1}}}function r(){let W=!1,xe=null,ue=null,Me=null,Ae=null,pe=null,u=null,S=null,B=null;return{setTest:function(re){W||(re?ce(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(re){xe!==re&&!W&&(i.stencilMask(re),xe=re)},setFunc:function(re,Q,se){(ue!==re||Me!==Q||Ae!==se)&&(i.stencilFunc(re,Q,se),ue=re,Me=Q,Ae=se)},setOp:function(re,Q,se){(pe!==re||u!==Q||S!==se)&&(i.stencilOp(re,Q,se),pe=re,u=Q,S=se)},setLocked:function(re){W=re},setClear:function(re){B!==re&&(i.clearStencil(re),B=re)},reset:function(){W=!1,xe=null,ue=null,Me=null,Ae=null,pe=null,u=null,S=null,B=null}}}let s=new t,a=new n,l=new r,c=new WeakMap,h=new WeakMap,o={},p={},f={},m=new WeakMap,v=[],w=null,g=!1,d=null,x=null,U=null,A=null,I=null,P=null,O=null,b=new We(0,0,0),_=0,T=!1,E=null,y=null,C=null,L=null,z=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ee=!1,J=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(k)[1]),ee=J>=1):k.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),ee=J>=2);let $=null,X={},me=i.getParameter(i.SCISSOR_BOX),he=i.getParameter(i.VIEWPORT),ke=new zt().fromArray(me),Ge=new zt().fromArray(he);function De(W,xe,ue,Me){let Ae=new Uint8Array(4),pe=i.createTexture();i.bindTexture(W,pe),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let u=0;u<ue;u++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(xe,0,i.RGBA,1,1,Me,0,i.RGBA,i.UNSIGNED_BYTE,Ae):i.texImage2D(xe+u,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ae);return pe}let ae={};ae[i.TEXTURE_2D]=De(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=De(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[i.TEXTURE_2D_ARRAY]=De(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=De(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),l.setClear(0),ce(i.DEPTH_TEST),a.setFunc(Zr),tt(!1),Tt(Vc),ce(i.CULL_FACE),et(Vn);function ce(W){o[W]!==!0&&(i.enable(W),o[W]=!0)}function be(W){o[W]!==!1&&(i.disable(W),o[W]=!1)}function Ve(W,xe){return f[W]!==xe?(i.bindFramebuffer(W,xe),f[W]=xe,W===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=xe),W===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=xe),!0):!1}function Se(W,xe){let ue=v,Me=!1;if(W){ue=m.get(xe),ue===void 0&&(ue=[],m.set(xe,ue));let Ae=W.textures;if(ue.length!==Ae.length||ue[0]!==i.COLOR_ATTACHMENT0){for(let pe=0,u=Ae.length;pe<u;pe++)ue[pe]=i.COLOR_ATTACHMENT0+pe;ue.length=Ae.length,Me=!0}}else ue[0]!==i.BACK&&(ue[0]=i.BACK,Me=!0);Me&&i.drawBuffers(ue)}function Ke(W){return w!==W?(i.useProgram(W),w=W,!0):!1}let bt={[Sr]:i.FUNC_ADD,[Ph]:i.FUNC_SUBTRACT,[Lh]:i.FUNC_REVERSE_SUBTRACT};bt[Dh]=i.MIN,bt[Nh]=i.MAX;let Ye={[Uh]:i.ZERO,[Oh]:i.ONE,[Fh]:i.SRC_COLOR,[qc]:i.SRC_ALPHA,[Gh]:i.SRC_ALPHA_SATURATE,[kh]:i.DST_COLOR,[Bh]:i.DST_ALPHA,[Hh]:i.ONE_MINUS_SRC_COLOR,[Xc]:i.ONE_MINUS_SRC_ALPHA,[Vh]:i.ONE_MINUS_DST_COLOR,[zh]:i.ONE_MINUS_DST_ALPHA,[Wh]:i.CONSTANT_COLOR,[qh]:i.ONE_MINUS_CONSTANT_COLOR,[Xh]:i.CONSTANT_ALPHA,[Yh]:i.ONE_MINUS_CONSTANT_ALPHA};function et(W,xe,ue,Me,Ae,pe,u,S,B,re){if(W===Vn){g===!0&&(be(i.BLEND),g=!1);return}if(g===!1&&(ce(i.BLEND),g=!0),W!==Ih){if(W!==d||re!==T){if((x!==Sr||I!==Sr)&&(i.blendEquation(i.FUNC_ADD),x=Sr,I=Sr),re)switch(W){case ls:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pi:i.blendFunc(i.ONE,i.ONE);break;case Gc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Je("WebGLState: Invalid blending: ",W);break}else switch(W){case ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Gc:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wc:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",W);break}U=null,A=null,P=null,O=null,b.set(0,0,0),_=0,d=W,T=re}return}Ae=Ae||xe,pe=pe||ue,u=u||Me,(xe!==x||Ae!==I)&&(i.blendEquationSeparate(bt[xe],bt[Ae]),x=xe,I=Ae),(ue!==U||Me!==A||pe!==P||u!==O)&&(i.blendFuncSeparate(Ye[ue],Ye[Me],Ye[pe],Ye[u]),U=ue,A=Me,P=pe,O=u),(S.equals(b)===!1||B!==_)&&(i.blendColor(S.r,S.g,S.b,B),b.copy(S),_=B),d=W,T=!1}function mt(W,xe){W.side===kn?be(i.CULL_FACE):ce(i.CULL_FACE);let ue=W.side===dn;xe&&(ue=!ue),tt(ue),W.blending===ls&&W.transparent===!1?et(Vn):et(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),a.setFunc(W.depthFunc),a.setTest(W.depthTest),a.setMask(W.depthWrite),s.setMask(W.colorWrite);let Me=W.stencilWrite;l.setTest(Me),Me&&(l.setMask(W.stencilWriteMask),l.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),l.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Yt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(W){E!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),E=W)}function Tt(W){W!==Ah?(ce(i.CULL_FACE),W!==y&&(W===Vc?i.cullFace(i.BACK):W===Rh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),y=W}function Wt(W){W!==C&&(ee&&i.lineWidth(W),C=W)}function Yt(W,xe,ue){W?(ce(i.POLYGON_OFFSET_FILL),(L!==xe||z!==ue)&&(L=xe,z=ue,a.getReversed()&&(xe=-xe),i.polygonOffset(xe,ue))):be(i.POLYGON_OFFSET_FILL)}function wt(W){W?ce(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function It(W){W===void 0&&(W=i.TEXTURE0+K-1),$!==W&&(i.activeTexture(W),$=W)}function q(W,xe,ue){ue===void 0&&($===null?ue=i.TEXTURE0+K-1:ue=$);let Me=X[ue];Me===void 0&&(Me={type:void 0,texture:void 0},X[ue]=Me),(Me.type!==W||Me.texture!==xe)&&($!==ue&&(i.activeTexture(ue),$=ue),i.bindTexture(W,xe||ae[W]),Me.type=W,Me.texture=xe)}function Dt(){let W=X[$];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function rt(){try{i.compressedTexImage2D(...arguments)}catch(W){Je("WebGLState:",W)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(W){Je("WebGLState:",W)}}function M(){try{i.texSubImage2D(...arguments)}catch(W){Je("WebGLState:",W)}}function D(){try{i.texSubImage3D(...arguments)}catch(W){Je("WebGLState:",W)}}function N(){try{i.compressedTexSubImage2D(...arguments)}catch(W){Je("WebGLState:",W)}}function H(){try{i.compressedTexSubImage3D(...arguments)}catch(W){Je("WebGLState:",W)}}function V(){try{i.texStorage2D(...arguments)}catch(W){Je("WebGLState:",W)}}function j(){try{i.texStorage3D(...arguments)}catch(W){Je("WebGLState:",W)}}function G(){try{i.texImage2D(...arguments)}catch(W){Je("WebGLState:",W)}}function Z(){try{i.texImage3D(...arguments)}catch(W){Je("WebGLState:",W)}}function le(W){return p[W]!==void 0?p[W]:i.getParameter(W)}function ge(W,xe){p[W]!==xe&&(i.pixelStorei(W,xe),p[W]=xe)}function fe(W){ke.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),ke.copy(W))}function ve(W){Ge.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),Ge.copy(W))}function ye(W,xe){let ue=h.get(xe);ue===void 0&&(ue=new WeakMap,h.set(xe,ue));let Me=ue.get(W);Me===void 0&&(Me=i.getUniformBlockIndex(xe,W.name),ue.set(W,Me))}function Pe(W,xe){let Me=h.get(xe).get(W);c.get(xe)!==Me&&(i.uniformBlockBinding(xe,Me,W.__bindingPointIndex),c.set(xe,Me))}function He(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),o={},p={},$=null,X={},f={},m=new WeakMap,v=[],w=null,g=!1,d=null,x=null,U=null,A=null,I=null,P=null,O=null,b=new We(0,0,0),_=0,T=!1,E=null,y=null,C=null,L=null,z=null,ke.set(0,0,i.canvas.width,i.canvas.height),Ge.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),l.reset()}return{buffers:{color:s,depth:a,stencil:l},enable:ce,disable:be,bindFramebuffer:Ve,drawBuffers:Se,useProgram:Ke,setBlending:et,setMaterial:mt,setFlipSided:tt,setCullFace:Tt,setLineWidth:Wt,setPolygonOffset:Yt,setScissorTest:wt,activeTexture:It,bindTexture:q,unbindTexture:Dt,compressedTexImage2D:rt,compressedTexImage3D:F,texImage2D:G,texImage3D:Z,pixelStorei:ge,getParameter:le,updateUBOMapping:ye,uniformBlockBinding:Pe,texStorage2D:V,texStorage3D:j,texSubImage2D:M,texSubImage3D:D,compressedTexSubImage2D:N,compressedTexSubImage3D:H,scissor:fe,viewport:ve,reset:He}}function r_(i,e,t,n,r,s,a){let l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new qe,o=new WeakMap,p=new Set,f,m=new WeakMap,v=!1;try{v=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(F,M){return v?new OffscreenCanvas(F,M):Hs("canvas")}function g(F,M,D){let N=1,H=rt(F);if((H.width>D||H.height>D)&&(N=D/Math.max(H.width,H.height)),N<1)if(typeof HTMLImageElement!="undefined"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&F instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&F instanceof ImageBitmap||typeof VideoFrame!="undefined"&&F instanceof VideoFrame){let V=Math.floor(N*H.width),j=Math.floor(N*H.height);f===void 0&&(f=w(V,j));let G=M?w(V,j):f;return G.width=V,G.height=j,G.getContext("2d").drawImage(F,0,0,V,j),Ze("WebGLRenderer: Texture has been resized from ("+H.width+"x"+H.height+") to ("+V+"x"+j+")."),G}else return"data"in F&&Ze("WebGLRenderer: Image in DataTexture is too big ("+H.width+"x"+H.height+")."),F;return F}function d(F){return F.generateMipmaps}function x(F){i.generateMipmap(F)}function U(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(F,M,D,N,H,V=!1){if(F!==null){if(i[F]!==void 0)return i[F];Ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let j;N&&(j=e.get("EXT_texture_norm16"),j||Ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let G=M;if(M===i.RED&&(D===i.FLOAT&&(G=i.R32F),D===i.HALF_FLOAT&&(G=i.R16F),D===i.UNSIGNED_BYTE&&(G=i.R8),D===i.UNSIGNED_SHORT&&j&&(G=j.R16_EXT),D===i.SHORT&&j&&(G=j.R16_SNORM_EXT)),M===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(G=i.R8UI),D===i.UNSIGNED_SHORT&&(G=i.R16UI),D===i.UNSIGNED_INT&&(G=i.R32UI),D===i.BYTE&&(G=i.R8I),D===i.SHORT&&(G=i.R16I),D===i.INT&&(G=i.R32I)),M===i.RG&&(D===i.FLOAT&&(G=i.RG32F),D===i.HALF_FLOAT&&(G=i.RG16F),D===i.UNSIGNED_BYTE&&(G=i.RG8),D===i.UNSIGNED_SHORT&&j&&(G=j.RG16_EXT),D===i.SHORT&&j&&(G=j.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(D===i.UNSIGNED_BYTE&&(G=i.RG8UI),D===i.UNSIGNED_SHORT&&(G=i.RG16UI),D===i.UNSIGNED_INT&&(G=i.RG32UI),D===i.BYTE&&(G=i.RG8I),D===i.SHORT&&(G=i.RG16I),D===i.INT&&(G=i.RG32I)),M===i.RGB_INTEGER&&(D===i.UNSIGNED_BYTE&&(G=i.RGB8UI),D===i.UNSIGNED_SHORT&&(G=i.RGB16UI),D===i.UNSIGNED_INT&&(G=i.RGB32UI),D===i.BYTE&&(G=i.RGB8I),D===i.SHORT&&(G=i.RGB16I),D===i.INT&&(G=i.RGB32I)),M===i.RGBA_INTEGER&&(D===i.UNSIGNED_BYTE&&(G=i.RGBA8UI),D===i.UNSIGNED_SHORT&&(G=i.RGBA16UI),D===i.UNSIGNED_INT&&(G=i.RGBA32UI),D===i.BYTE&&(G=i.RGBA8I),D===i.SHORT&&(G=i.RGBA16I),D===i.INT&&(G=i.RGBA32I)),M===i.RGB&&(D===i.UNSIGNED_SHORT&&j&&(G=j.RGB16_EXT),D===i.SHORT&&j&&(G=j.RGB16_SNORM_EXT),D===i.UNSIGNED_INT_5_9_9_9_REV&&(G=i.RGB9_E5),D===i.UNSIGNED_INT_10F_11F_11F_REV&&(G=i.R11F_G11F_B10F)),M===i.RGBA){let Z=V?Fs:lt.getTransfer(H);D===i.FLOAT&&(G=i.RGBA32F),D===i.HALF_FLOAT&&(G=i.RGBA16F),D===i.UNSIGNED_BYTE&&(G=Z===vt?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT&&j&&(G=j.RGBA16_EXT),D===i.SHORT&&j&&(G=j.RGBA16_SNORM_EXT),D===i.UNSIGNED_SHORT_4_4_4_4&&(G=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(G=i.RGB5_A1)}return(G===i.R16F||G===i.R32F||G===i.RG16F||G===i.RG32F||G===i.RGBA16F||G===i.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function I(F,M){let D;return F?M===null||M===ti||M===us?D=i.DEPTH24_STENCIL8:M===Gn?D=i.DEPTH32F_STENCIL8:M===cs&&(D=i.DEPTH24_STENCIL8,Ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ti||M===us?D=i.DEPTH_COMPONENT24:M===Gn?D=i.DEPTH_COMPONENT32F:M===cs&&(D=i.DEPTH_COMPONENT16),D}function P(F,M){return d(F)===!0||F.isFramebufferTexture&&F.minFilter!==cn&&F.minFilter!==fn?Math.log2(Math.max(M.width,M.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?M.mipmaps.length:1}function O(F){let M=F.target;M.removeEventListener("dispose",O),_(M),M.isVideoTexture&&o.delete(M),M.isHTMLTexture&&p.delete(M)}function b(F){let M=F.target;M.removeEventListener("dispose",b),E(M)}function _(F){let M=n.get(F);if(M.__webglInit===void 0)return;let D=F.source,N=m.get(D);if(N){let H=N[M.__cacheKey];H.usedTimes--,H.usedTimes===0&&T(F),Object.keys(N).length===0&&m.delete(D)}n.remove(F)}function T(F){let M=n.get(F);i.deleteTexture(M.__webglTexture);let D=F.source,N=m.get(D);delete N[M.__cacheKey],a.memory.textures--}function E(F){let M=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(M.__webglFramebuffer[N]))for(let H=0;H<M.__webglFramebuffer[N].length;H++)i.deleteFramebuffer(M.__webglFramebuffer[N][H]);else i.deleteFramebuffer(M.__webglFramebuffer[N]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[N])}else{if(Array.isArray(M.__webglFramebuffer))for(let N=0;N<M.__webglFramebuffer.length;N++)i.deleteFramebuffer(M.__webglFramebuffer[N]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let N=0;N<M.__webglColorRenderbuffer.length;N++)M.__webglColorRenderbuffer[N]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[N]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let D=F.textures;for(let N=0,H=D.length;N<H;N++){let V=n.get(D[N]);V.__webglTexture&&(i.deleteTexture(V.__webglTexture),a.memory.textures--),n.remove(D[N])}n.remove(F)}let y=0;function C(){y=0}function L(){return y}function z(F){y=F}function K(){let F=y;return F>=r.maxTextures&&Ze("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+r.maxTextures),y+=1,F}function ee(F){let M=[];return M.push(F.wrapS),M.push(F.wrapT),M.push(F.wrapR||0),M.push(F.magFilter),M.push(F.minFilter),M.push(F.anisotropy),M.push(F.internalFormat),M.push(F.format),M.push(F.type),M.push(F.generateMipmaps),M.push(F.premultiplyAlpha),M.push(F.flipY),M.push(F.unpackAlignment),M.push(F.colorSpace),M.join()}function J(F,M){let D=n.get(F);if(F.isVideoTexture&&q(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&D.__version!==F.version){let N=F.image;if(N===null)Ze("WebGLRenderer: Texture marked for update but no image data found.");else if(N.complete===!1)Ze("WebGLRenderer: Texture marked for update but image is incomplete");else{be(D,F,M);return}}else F.isExternalTexture&&(D.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+M)}function k(F,M){let D=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&D.__version!==F.version){be(D,F,M);return}else F.isExternalTexture&&(D.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+M)}function $(F,M){let D=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&D.__version!==F.version){be(D,F,M);return}t.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+M)}function X(F,M){let D=n.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&D.__version!==F.version){Ve(D,F,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+M)}let me={[Jr]:i.REPEAT,[ci]:i.CLAMP_TO_EDGE,[xo]:i.MIRRORED_REPEAT},he={[cn]:i.NEAREST,[Jh]:i.NEAREST_MIPMAP_NEAREST,[pa]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[qo]:i.LINEAR_MIPMAP_NEAREST,[sr]:i.LINEAR_MIPMAP_LINEAR},ke={[ef]:i.NEVER,[af]:i.ALWAYS,[tf]:i.LESS,[Cl]:i.LEQUAL,[nf]:i.EQUAL,[Il]:i.GEQUAL,[rf]:i.GREATER,[sf]:i.NOTEQUAL};function Ge(F,M){if(M.type===Gn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===fn||M.magFilter===qo||M.magFilter===pa||M.magFilter===sr||M.minFilter===fn||M.minFilter===qo||M.minFilter===pa||M.minFilter===sr)&&Ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,me[M.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,me[M.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,me[M.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,he[M.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,he[M.minFilter]),M.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,ke[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===cn||M.minFilter!==pa&&M.minFilter!==sr||M.type===Gn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let D=e.get("EXT_texture_filter_anisotropic");i.texParameterf(F,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function De(F,M){let D=!1;F.__webglInit===void 0&&(F.__webglInit=!0,M.addEventListener("dispose",O));let N=M.source,H=m.get(N);H===void 0&&(H={},m.set(N,H));let V=ee(M);if(V!==F.__cacheKey){H[V]===void 0&&(H[V]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,D=!0),H[V].usedTimes++;let j=H[F.__cacheKey];j!==void 0&&(H[F.__cacheKey].usedTimes--,j.usedTimes===0&&T(M)),F.__cacheKey=V,F.__webglTexture=H[V].texture}return D}function ae(F,M,D){return Math.floor(Math.floor(F/D)/M)}function ce(F,M,D,N){let V=F.updateRanges;if(V.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,D,N,M.data);else{V.sort((ge,fe)=>ge.start-fe.start);let j=0;for(let ge=1;ge<V.length;ge++){let fe=V[j],ve=V[ge],ye=fe.start+fe.count,Pe=ae(ve.start,M.width,4),He=ae(fe.start,M.width,4);ve.start<=ye+1&&Pe===He&&ae(ve.start+ve.count-1,M.width,4)===Pe?fe.count=Math.max(fe.count,ve.start+ve.count-fe.start):(++j,V[j]=ve)}V.length=j+1;let G=t.getParameter(i.UNPACK_ROW_LENGTH),Z=t.getParameter(i.UNPACK_SKIP_PIXELS),le=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let ge=0,fe=V.length;ge<fe;ge++){let ve=V[ge],ye=Math.floor(ve.start/4),Pe=Math.ceil(ve.count/4),He=ye%M.width,W=Math.floor(ye/M.width),xe=Pe,ue=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,He),t.pixelStorei(i.UNPACK_SKIP_ROWS,W),t.texSubImage2D(i.TEXTURE_2D,0,He,W,xe,ue,D,N,M.data)}F.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,G),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(i.UNPACK_SKIP_ROWS,le)}}function be(F,M,D){let N=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(N=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(N=i.TEXTURE_3D);let H=De(F,M),V=M.source;t.bindTexture(N,F.__webglTexture,i.TEXTURE0+D);let j=n.get(V);if(V.version!==j.__version||H===!0){if(t.activeTexture(i.TEXTURE0+D),(typeof ImageBitmap!="undefined"&&M.image instanceof ImageBitmap)===!1){let ue=lt.getPrimaries(lt.workingColorSpace),Me=M.colorSpace===ni?null:lt.getPrimaries(M.colorSpace),Ae=M.colorSpace===ni||ue===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae)}t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let Z=g(M.image,!1,r.maxTextureSize);Z=Dt(M,Z);let le=s.convert(M.format,M.colorSpace),ge=s.convert(M.type),fe=A(M.internalFormat,le,ge,M.normalized,M.colorSpace,M.isVideoTexture);Ge(N,M);let ve,ye=M.mipmaps,Pe=M.isVideoTexture!==!0,He=j.__version===void 0||H===!0,W=V.dataReady,xe=P(M,Z);if(M.isDepthTexture)fe=I(M.format===ar,M.type),He&&(Pe?t.texStorage2D(i.TEXTURE_2D,1,fe,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,fe,Z.width,Z.height,0,le,ge,null));else if(M.isDataTexture)if(ye.length>0){Pe&&He&&t.texStorage2D(i.TEXTURE_2D,xe,fe,ye[0].width,ye[0].height);for(let ue=0,Me=ye.length;ue<Me;ue++)ve=ye[ue],Pe?W&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,ve.width,ve.height,le,ge,ve.data):t.texImage2D(i.TEXTURE_2D,ue,fe,ve.width,ve.height,0,le,ge,ve.data);M.generateMipmaps=!1}else Pe?(He&&t.texStorage2D(i.TEXTURE_2D,xe,fe,Z.width,Z.height),W&&ce(M,Z,le,ge)):t.texImage2D(i.TEXTURE_2D,0,fe,Z.width,Z.height,0,le,ge,Z.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Pe&&He&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,fe,ye[0].width,ye[0].height,Z.depth);for(let ue=0,Me=ye.length;ue<Me;ue++)if(ve=ye[ue],M.format!==Wn)if(le!==null)if(Pe){if(W)if(M.layerUpdates.size>0){let Ae=su(ve.width,ve.height,M.format,M.type);for(let pe of M.layerUpdates){let u=ve.data.subarray(pe*Ae/ve.data.BYTES_PER_ELEMENT,(pe+1)*Ae/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,pe,ve.width,ve.height,1,le,u)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,ve.width,ve.height,Z.depth,le,ve.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,fe,ve.width,ve.height,Z.depth,0,ve.data,0,0);else Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?W&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,ve.width,ve.height,Z.depth,le,ge,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,fe,ve.width,ve.height,Z.depth,0,le,ge,ve.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Pe&&He&&t.texStorage2D(i.TEXTURE_2D,xe,fe,ye[0].width,ye[0].height);for(let ue=0,Me=ye.length;ue<Me;ue++)ve=ye[ue],M.format!==Wn?le!==null?Pe?W&&t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,ve.width,ve.height,le,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,fe,ve.width,ve.height,0,ve.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?W&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,ve.width,ve.height,le,ge,ve.data):t.texImage2D(i.TEXTURE_2D,ue,fe,ve.width,ve.height,0,le,ge,ve.data)}else if(M.isDataArrayTexture)if(Pe){if(He&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,fe,Z.width,Z.height,Z.depth),W)if(M.layerUpdates.size>0){let ue=su(Z.width,Z.height,M.format,M.type);for(let Me of M.layerUpdates){let Ae=Z.data.subarray(Me*ue/Z.data.BYTES_PER_ELEMENT,(Me+1)*ue/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Me,Z.width,Z.height,1,le,ge,Ae)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,le,ge,Z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,fe,Z.width,Z.height,Z.depth,0,le,ge,Z.data);else if(M.isData3DTexture)Pe?(He&&t.texStorage3D(i.TEXTURE_3D,xe,fe,Z.width,Z.height,Z.depth),W&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,le,ge,Z.data)):t.texImage3D(i.TEXTURE_3D,0,fe,Z.width,Z.height,Z.depth,0,le,ge,Z.data);else if(M.isFramebufferTexture){if(He)if(Pe)t.texStorage2D(i.TEXTURE_2D,xe,fe,Z.width,Z.height);else{let ue=Z.width,Me=Z.height;for(let Ae=0;Ae<xe;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,fe,ue,Me,0,le,ge,null),ue>>=1,Me>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let ue=i.canvas;if(ue.hasAttribute("layoutsubtree")||ue.setAttribute("layoutsubtree","true"),Z.parentNode!==ue){ue.appendChild(Z),p.add(M),ue.onpaint=Me=>{let Ae=Me.changedElements;for(let pe of p)Ae.includes(pe.image)&&(pe.needsUpdate=!0)},ue.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Z);else{let Ae=i.RGBA,pe=i.RGBA,u=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ae,pe,u,Z)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ye.length>0){if(Pe&&He){let ue=rt(ye[0]);t.texStorage2D(i.TEXTURE_2D,xe,fe,ue.width,ue.height)}for(let ue=0,Me=ye.length;ue<Me;ue++)ve=ye[ue],Pe?W&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,le,ge,ve):t.texImage2D(i.TEXTURE_2D,ue,fe,le,ge,ve);M.generateMipmaps=!1}else if(Pe){if(He){let ue=rt(Z);t.texStorage2D(i.TEXTURE_2D,xe,fe,ue.width,ue.height)}W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le,ge,Z)}else t.texImage2D(i.TEXTURE_2D,0,fe,le,ge,Z);d(M)&&x(N),j.__version=V.version,M.onUpdate&&M.onUpdate(M)}F.__version=M.version}function Ve(F,M,D){if(M.image.length!==6)return;let N=De(F,M),H=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+D);let V=n.get(H);if(H.version!==V.__version||N===!0){t.activeTexture(i.TEXTURE0+D);let j=lt.getPrimaries(lt.workingColorSpace),G=M.colorSpace===ni?null:lt.getPrimaries(M.colorSpace),Z=M.colorSpace===ni||j===G?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let le=M.isCompressedTexture||M.image[0].isCompressedTexture,ge=M.image[0]&&M.image[0].isDataTexture,fe=[];for(let pe=0;pe<6;pe++)!le&&!ge?fe[pe]=g(M.image[pe],!0,r.maxCubemapSize):fe[pe]=ge?M.image[pe].image:M.image[pe],fe[pe]=Dt(M,fe[pe]);let ve=fe[0],ye=s.convert(M.format,M.colorSpace),Pe=s.convert(M.type),He=A(M.internalFormat,ye,Pe,M.normalized,M.colorSpace),W=M.isVideoTexture!==!0,xe=V.__version===void 0||N===!0,ue=H.dataReady,Me=P(M,ve);Ge(i.TEXTURE_CUBE_MAP,M);let Ae;if(le){W&&xe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,He,ve.width,ve.height);for(let pe=0;pe<6;pe++){Ae=fe[pe].mipmaps;for(let u=0;u<Ae.length;u++){let S=Ae[u];M.format!==Wn?ye!==null?W?ue&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,u,0,0,S.width,S.height,ye,S.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,u,He,S.width,S.height,0,S.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,u,0,0,S.width,S.height,ye,Pe,S.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,u,He,S.width,S.height,0,ye,Pe,S.data)}}}else{if(Ae=M.mipmaps,W&&xe){Ae.length>0&&Me++;let pe=rt(fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,He,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(ge){W?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,fe[pe].width,fe[pe].height,ye,Pe,fe[pe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,He,fe[pe].width,fe[pe].height,0,ye,Pe,fe[pe].data);for(let u=0;u<Ae.length;u++){let B=Ae[u].image[pe].image;W?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,u+1,0,0,B.width,B.height,ye,Pe,B.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,u+1,He,B.width,B.height,0,ye,Pe,B.data)}}else{W?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ye,Pe,fe[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,He,ye,Pe,fe[pe]);for(let u=0;u<Ae.length;u++){let S=Ae[u];W?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,u+1,0,0,ye,Pe,S.image[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,u+1,He,ye,Pe,S.image[pe])}}}d(M)&&x(i.TEXTURE_CUBE_MAP),V.__version=H.version,M.onUpdate&&M.onUpdate(M)}F.__version=M.version}function Se(F,M,D,N,H,V){let j=s.convert(D.format,D.colorSpace),G=s.convert(D.type),Z=A(D.internalFormat,j,G,D.normalized,D.colorSpace),le=n.get(M),ge=n.get(D);if(ge.__renderTarget=M,!le.__hasExternalTextures){let fe=Math.max(1,M.width>>V),ve=Math.max(1,M.height>>V);H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?t.texImage3D(H,V,Z,fe,ve,M.depth,0,j,G,null):t.texImage2D(H,V,Z,fe,ve,0,j,G,null)}t.bindFramebuffer(i.FRAMEBUFFER,F),It(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,N,H,ge.__webglTexture,0,wt(M)):(H===i.TEXTURE_2D||H>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,N,H,ge.__webglTexture,V),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ke(F,M,D){if(i.bindRenderbuffer(i.RENDERBUFFER,F),M.depthBuffer){let N=M.depthTexture,H=N&&N.isDepthTexture?N.type:null,V=I(M.stencilBuffer,H),j=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;It(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt(M),V,M.width,M.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt(M),V,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,V,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,F)}else{let N=M.textures;for(let H=0;H<N.length;H++){let V=N[H],j=s.convert(V.format,V.colorSpace),G=s.convert(V.type),Z=A(V.internalFormat,j,G,V.normalized,V.colorSpace);It(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt(M),Z,M.width,M.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt(M),Z,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Z,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(F,M,D){let N=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,F),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let H=n.get(M.depthTexture);if(H.__renderTarget=M,(!H.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),N){if(H.__webglInit===void 0&&(H.__webglInit=!0,M.depthTexture.addEventListener("dispose",O)),H.__webglTexture===void 0){H.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),Ge(i.TEXTURE_CUBE_MAP,M.depthTexture);let le=s.convert(M.depthTexture.format),ge=s.convert(M.depthTexture.type),fe;M.depthTexture.format===ui?fe=i.DEPTH_COMPONENT24:M.depthTexture.format===ar&&(fe=i.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,fe,M.width,M.height,0,le,ge,null)}}else J(M.depthTexture,0);let V=H.__webglTexture,j=wt(M),G=N?i.TEXTURE_CUBE_MAP_POSITIVE_X+D:i.TEXTURE_2D,Z=M.depthTexture.format===ar?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===ui)It(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,G,V,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,Z,G,V,0);else if(M.depthTexture.format===ar)It(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,G,V,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,Z,G,V,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ye(F){let M=n.get(F),D=F.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==F.depthTexture){let N=F.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),N){let H=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,N.removeEventListener("dispose",H)};N.addEventListener("dispose",H),M.__depthDisposeCallback=H}M.__boundDepthTexture=N}if(F.depthTexture&&!M.__autoAllocateDepthBuffer)if(D)for(let N=0;N<6;N++)bt(M.__webglFramebuffer[N],F,N);else{let N=F.texture.mipmaps;N&&N.length>0?bt(M.__webglFramebuffer[0],F,0):bt(M.__webglFramebuffer,F,0)}else if(D){M.__webglDepthbuffer=[];for(let N=0;N<6;N++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[N]),M.__webglDepthbuffer[N]===void 0)M.__webglDepthbuffer[N]=i.createRenderbuffer(),Ke(M.__webglDepthbuffer[N],F,!1);else{let H=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=M.__webglDepthbuffer[N];i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,H,i.RENDERBUFFER,V)}}else{let N=F.texture.mipmaps;if(N&&N.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Ke(M.__webglDepthbuffer,F,!1);else{let H=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,H,i.RENDERBUFFER,V)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function et(F,M,D){let N=n.get(F);M!==void 0&&Se(N.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&Ye(F)}function mt(F){let M=F.texture,D=n.get(F),N=n.get(M);F.addEventListener("dispose",b);let H=F.textures,V=F.isWebGLCubeRenderTarget===!0,j=H.length>1;if(j||(N.__webglTexture===void 0&&(N.__webglTexture=i.createTexture()),N.__version=M.version,a.memory.textures++),V){D.__webglFramebuffer=[];for(let G=0;G<6;G++)if(M.mipmaps&&M.mipmaps.length>0){D.__webglFramebuffer[G]=[];for(let Z=0;Z<M.mipmaps.length;Z++)D.__webglFramebuffer[G][Z]=i.createFramebuffer()}else D.__webglFramebuffer[G]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){D.__webglFramebuffer=[];for(let G=0;G<M.mipmaps.length;G++)D.__webglFramebuffer[G]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(j)for(let G=0,Z=H.length;G<Z;G++){let le=n.get(H[G]);le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture(),a.memory.textures++)}if(F.samples>0&&It(F)===!1){D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let G=0;G<H.length;G++){let Z=H[G];D.__webglColorRenderbuffer[G]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[G]);let le=s.convert(Z.format,Z.colorSpace),ge=s.convert(Z.type),fe=A(Z.internalFormat,le,ge,Z.normalized,Z.colorSpace,F.isXRRenderTarget===!0),ve=wt(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,fe,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+G,i.RENDERBUFFER,D.__webglColorRenderbuffer[G])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),Ke(D.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(V){t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture),Ge(i.TEXTURE_CUBE_MAP,M);for(let G=0;G<6;G++)if(M.mipmaps&&M.mipmaps.length>0)for(let Z=0;Z<M.mipmaps.length;Z++)Se(D.__webglFramebuffer[G][Z],F,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+G,Z);else Se(D.__webglFramebuffer[G],F,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0);d(M)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(j){for(let G=0,Z=H.length;G<Z;G++){let le=H[G],ge=n.get(le),fe=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(fe=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,ge.__webglTexture),Ge(fe,le),Se(D.__webglFramebuffer,F,le,i.COLOR_ATTACHMENT0+G,fe,0),d(le)&&x(fe)}t.unbindTexture()}else{let G=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(G=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(G,N.__webglTexture),Ge(G,M),M.mipmaps&&M.mipmaps.length>0)for(let Z=0;Z<M.mipmaps.length;Z++)Se(D.__webglFramebuffer[Z],F,M,i.COLOR_ATTACHMENT0,G,Z);else Se(D.__webglFramebuffer,F,M,i.COLOR_ATTACHMENT0,G,0);d(M)&&x(G),t.unbindTexture()}F.depthBuffer&&Ye(F)}function tt(F){let M=F.textures;for(let D=0,N=M.length;D<N;D++){let H=M[D];if(d(H)){let V=U(F),j=n.get(H).__webglTexture;t.bindTexture(V,j),x(V),t.unbindTexture()}}}let Tt=[],Wt=[];function Yt(F){if(F.samples>0){if(It(F)===!1){let M=F.textures,D=F.width,N=F.height,H=i.COLOR_BUFFER_BIT,V=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=n.get(F),G=M.length>1;if(G)for(let le=0;le<M.length;le++)t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,j.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,j.__webglMultisampledFramebuffer);let Z=F.texture.mipmaps;Z&&Z.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,j.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,j.__webglFramebuffer);for(let le=0;le<M.length;le++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(H|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(H|=i.STENCIL_BUFFER_BIT)),G){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,j.__webglColorRenderbuffer[le]);let ge=n.get(M[le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ge,0)}i.blitFramebuffer(0,0,D,N,0,0,D,N,H,i.NEAREST),c===!0&&(Tt.length=0,Wt.length=0,Tt.push(i.COLOR_ATTACHMENT0+le),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(Tt.push(V),Wt.push(V),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Wt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Tt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),G)for(let le=0;le<M.length;le++){t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,j.__webglColorRenderbuffer[le]);let ge=n.get(M[le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,j.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,ge,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,j.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&c){let M=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function wt(F){return Math.min(r.maxSamples,F.samples)}function It(F){let M=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function q(F){let M=a.render.frame;o.get(F)!==M&&(o.set(F,M),F.update())}function Dt(F,M){let D=F.colorSpace,N=F.format,H=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||D!==Os&&D!==ni&&(lt.getTransfer(D)===vt?(N!==Wn||H!==Rn)&&Ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",D)),M}function rt(F){return typeof HTMLImageElement!="undefined"&&F instanceof HTMLImageElement?(h.width=F.naturalWidth||F.width,h.height=F.naturalHeight||F.height):typeof VideoFrame!="undefined"&&F instanceof VideoFrame?(h.width=F.displayWidth,h.height=F.displayHeight):(h.width=F.width,h.height=F.height),h}this.allocateTextureUnit=K,this.resetTextureUnits=C,this.getTextureUnits=L,this.setTextureUnits=z,this.setTexture2D=J,this.setTexture2DArray=k,this.setTexture3D=$,this.setTextureCube=X,this.rebindTextures=et,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=It,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function s_(i,e){function t(n,r=ni){let s,a=lt.getTransfer(r);if(n===Rn)return i.UNSIGNED_BYTE;if(n===Yo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ko)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$c)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Kc)return i.BYTE;if(n===Zc)return i.SHORT;if(n===cs)return i.UNSIGNED_SHORT;if(n===Xo)return i.INT;if(n===ti)return i.UNSIGNED_INT;if(n===Gn)return i.FLOAT;if(n===pn)return i.HALF_FLOAT;if(n===jc)return i.ALPHA;if(n===Qc)return i.RGB;if(n===Wn)return i.RGBA;if(n===ui)return i.DEPTH_COMPONENT;if(n===ar)return i.DEPTH_STENCIL;if(n===Zo)return i.RED;if(n===Jo)return i.RED_INTEGER;if(n===or)return i.RG;if(n===$o)return i.RG_INTEGER;if(n===jo)return i.RGBA_INTEGER;if(n===ma||n===ga||n===va||n===_a)if(a===vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ma)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ma)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ga)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===va)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_a)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qo||n===el||n===tl||n===nl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Qo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===el)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===tl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===il||n===rl||n===sl||n===al||n===ol||n===xa||n===ll)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===il||n===rl)return a===vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===sl)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===al)return s.COMPRESSED_R11_EAC;if(n===ol)return s.COMPRESSED_SIGNED_R11_EAC;if(n===xa)return s.COMPRESSED_RG11_EAC;if(n===ll)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===cl||n===ul||n===hl||n===fl||n===dl||n===pl||n===ml||n===gl||n===vl||n===_l||n===xl||n===yl||n===Ml||n===Sl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===cl)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ul)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hl)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fl)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===dl)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pl)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ml)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gl)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vl)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_l)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xl)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yl)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ml)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sl)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bl||n===Tl||n===El)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===bl)return a===vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Tl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===El)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wl||n===Al||n===ya||n===Rl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===wl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Al)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ya)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Rl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===us?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var a_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,o_=`
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

}`,Tu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Js(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Gt({vertexShader:a_,fragmentShader:o_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new Qs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Eu=class extends hi{constructor(e,t){super();let n=this,r=null,s=1,a=null,l="local-floor",c=1,h=null,o=null,p=null,f=null,m=null,v=null,w=typeof XRWebGLBinding!="undefined",g=new Tu,d={},x=t.getContextAttributes(),U=null,A=null,I=[],P=[],O=new qe,b=null,_=null,T=new on;T.viewport=new zt;let E=new on;E.viewport=new zt;let y=[T,E],C=new zo,L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let ce=I[ae];return ce===void 0&&(ce=new es,I[ae]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(ae){let ce=I[ae];return ce===void 0&&(ce=new es,I[ae]=ce),ce.getGripSpace()},this.getHand=function(ae){let ce=I[ae];return ce===void 0&&(ce=new es,I[ae]=ce),ce.getHandSpace()};function K(ae){let ce=P.indexOf(ae.inputSource);if(ce===-1)return;let be=I[ce];be!==void 0&&(be.update(ae.inputSource,ae.frame,h||a),be.dispatchEvent({type:ae.type,data:ae.inputSource}))}function ee(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",J);for(let ae=0;ae<I.length;ae++){let ce=P[ae];ce!==null&&(P[ae]=null,I[ae].disconnect(ce))}L=null,z=null,g.reset();for(let ae in d)delete d[ae];if(e.setRenderTarget(U),m=null,f=null,p=null,r=null,A=null,De.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(O.width,O.height,!1),_!==null){let ae=_.camera;ae.fov=_.fov,ae.zoom=_.zoom,ae.updateProjectionMatrix(),_=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){s=ae,n.isPresenting===!0&&Ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){l=ae,n.isPresenting===!0&&Ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(ae){h=ae},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p===null&&w&&(p=new XRWebGLBinding(r,t)),p},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(ae){if(r=ae,r!==null){if(U=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",J),x.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(O),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Ve=null,Se=null;x.depth&&(Se=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=x.stencil?ar:ui,Ve=x.stencil?us:ti);let Ke={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};p=this.getBinding(),f=p.createProjectionLayer(Ke),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new en(f.textureWidth,f.textureHeight,{format:Wn,type:Rn,depthTexture:new $i(f.textureWidth,f.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let be={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,be),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),A=new en(m.framebufferWidth,m.framebufferHeight,{format:Wn,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await r.requestReferenceSpace(l),De.setContext(r),De.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function J(ae){for(let ce=0;ce<ae.removed.length;ce++){let be=ae.removed[ce],Ve=P.indexOf(be);Ve>=0&&(P[Ve]=null,I[Ve].disconnect(be))}for(let ce=0;ce<ae.added.length;ce++){let be=ae.added[ce],Ve=P.indexOf(be);if(Ve===-1){for(let Ke=0;Ke<I.length;Ke++)if(Ke>=P.length){P.push(be),Ve=Ke;break}else if(P[Ke]===null){P[Ke]=be,Ve=Ke;break}if(Ve===-1)break}let Se=I[Ve];Se&&Se.connect(be)}}let k=new te,$=new te;function X(ae,ce,be){k.setFromMatrixPosition(ce.matrixWorld),$.setFromMatrixPosition(be.matrixWorld);let Ve=k.distanceTo($),Se=ce.projectionMatrix.elements,Ke=be.projectionMatrix.elements,bt=Se[14]/(Se[10]-1),Ye=Se[14]/(Se[10]+1),et=(Se[9]+1)/Se[5],mt=(Se[9]-1)/Se[5],tt=(Se[8]-1)/Se[0],Tt=(Ke[8]+1)/Ke[0],Wt=bt*tt,Yt=bt*Tt,wt=Ve/(-tt+Tt),It=wt*-tt;if(ce.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(It),ae.translateZ(wt),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),Se[10]===-1)ae.projectionMatrix.copy(ce.projectionMatrix),ae.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{let q=bt+wt,Dt=Ye+wt,rt=Wt-It,F=Yt+(Ve-It),M=et*Ye/Dt*q,D=mt*Ye/Dt*q;ae.projectionMatrix.makePerspective(rt,F,M,D,q,Dt),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function me(ae,ce){ce===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(ce.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(r===null)return;let ce=ae.near,be=ae.far;g.texture!==null&&(g.depthNear>0&&(ce=g.depthNear),g.depthFar>0&&(be=g.depthFar)),C.near=E.near=T.near=ce,C.far=E.far=T.far=be,(L!==C.near||z!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),L=C.near,z=C.far),C.layers.mask=ae.layers.mask|6,T.layers.mask=C.layers.mask&-5,E.layers.mask=C.layers.mask&-3;let Ve=ae.parent,Se=C.cameras;me(C,Ve);for(let Ke=0;Ke<Se.length;Ke++)me(Se[Ke],Ve);Se.length===2?X(C,T,E):C.projectionMatrix.copy(T.projectionMatrix),_===null&&ae.isPerspectiveCamera&&(_={camera:ae,fov:ae.fov,zoom:ae.zoom}),he(ae,C,Ve)};function he(ae,ce,be){be===null?ae.matrix.copy(ce.matrixWorld):(ae.matrix.copy(be.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(ce.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(ce.projectionMatrix),ae.projectionMatrixInverse.copy(ce.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Mo*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(ae){c=ae,f!==null&&(f.fixedFoveation=ae),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ae)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(C)},this.getCameraTexture=function(ae){return d[ae]};let ke=null;function Ge(ae,ce){if(o=ce.getViewerPose(h||a),v=ce,o!==null){let be=o.views;m!==null&&(e.setRenderTargetFramebuffer(A,m.framebuffer),e.setRenderTarget(A));let Ve=!1;be.length!==C.cameras.length&&(C.cameras.length=0,Ve=!0);for(let Ye=0;Ye<be.length;Ye++){let et=be[Ye],mt=null;if(m!==null)mt=m.getViewport(et);else{let Tt=p.getViewSubImage(f,et);mt=Tt.viewport,Ye===0&&(e.setRenderTargetTextures(A,Tt.colorTexture,Tt.depthStencilTexture),e.setRenderTarget(A))}let tt=y[Ye];tt===void 0&&(tt=new on,tt.layers.enable(Ye),tt.viewport=new zt,y[Ye]=tt),tt.matrix.fromArray(et.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(et.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(mt.x,mt.y,mt.width,mt.height),Ye===0&&(C.matrix.copy(tt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Ve===!0&&C.cameras.push(tt)}let Se=r.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&w){p=n.getBinding();let Ye=p.getDepthInformation(be[0]);Ye&&Ye.isValid&&Ye.texture&&g.init(Ye,r.renderState)}if(Se&&Se.includes("camera-access")&&w){e.state.unbindTexture(),p=n.getBinding();for(let Ye=0;Ye<be.length;Ye++){let et=be[Ye].camera;if(et){let mt=d[et];mt||(mt=new Js,d[et]=mt);let tt=p.getCameraImage(et);mt.sourceTexture=tt}}}}for(let be=0;be<I.length;be++){let Ve=P[be],Se=I[be];Ve!==null&&Se!==void 0&&Se.update(Ve,ce,h||a)}ke&&ke(ae,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),v=null}let De=new Of;De.setAnimationLoop(Ge),this.setAnimationLoop=function(ae){ke=ae},this.dispose=function(){}}},l_=new Lt,Vf=new je;Vf.set(-1,0,0,0,1,0,0,0,1);function c_(i,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,nu(i)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,x,U,A){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(g,d):d.isMeshLambertMaterial?(s(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(g,d),p(g,d)):d.isMeshPhongMaterial?(s(g,d),o(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(g,d),f(g,d),d.isMeshPhysicalMaterial&&m(g,d,A)):d.isMeshMatcapMaterial?(s(g,d),v(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),w(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&l(g,d)):d.isPointsMaterial?c(g,d,x,U):d.isSpriteMaterial?h(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===dn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===dn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);let x=e.get(d),U=x.envMap,A=x.envMapRotation;U&&(g.envMap.value=U,g.envMapRotation.value.setFromMatrix4(l_.makeRotationFromEuler(A)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Vf),g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function l(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function c(g,d,x,U){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*x,g.scale.value=U*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function o(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function p(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function f(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,x){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===dn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.retroreflectivity>0&&(g.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,d){d.matcap&&(g.matcap.value=d.matcap)}function w(g,d){let x=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function u_(i,e,t,n){let r={},s={},a=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,I){let P=I.program;n.uniformBlockBinding(A,P)}function h(A,I){let P=r[A.id];P===void 0&&(g(A),P=o(A),r[A.id]=P,A.addEventListener("dispose",x));let O=I.program;n.updateUBOMapping(A,O);let b=e.render.frame;s[A.id]!==b&&(f(A),s[A.id]=b)}function o(A){let I=p();A.__bindingPointIndex=I;let P=i.createBuffer(),O=A.__size,b=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,P),i.bufferData(i.UNIFORM_BUFFER,O,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,I,P),P}function p(){for(let A=0;A<l;A++)if(a.indexOf(A)===-1)return a.push(A),A;return Je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){let I=r[A.id],P=A.uniforms,O=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,I);for(let b=0,_=P.length;b<_;b++){let T=P[b];if(Array.isArray(T))for(let E=0,y=T.length;E<y;E++)m(T[E],b,E,O);else m(T,b,0,O)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(A,I,P,O){if(w(A,I,P,O)===!0){let b=A.__offset,_=A.value;if(Array.isArray(_)){let T=0;for(let E=0;E<_.length;E++){let y=_[E],C=d(y);v(y,A.__data,T),typeof y!="number"&&typeof y!="boolean"&&!y.isMatrix3&&!ArrayBuffer.isView(y)&&(T+=C.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(_,A.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,A.__data)}}function v(A,I,P){typeof A=="number"||typeof A=="boolean"?I[0]=A:A.isMatrix3?(I[0]=A.elements[0],I[1]=A.elements[1],I[2]=A.elements[2],I[3]=0,I[4]=A.elements[3],I[5]=A.elements[4],I[6]=A.elements[5],I[7]=0,I[8]=A.elements[6],I[9]=A.elements[7],I[10]=A.elements[8],I[11]=0):ArrayBuffer.isView(A)?I.set(new A.constructor(A.buffer,A.byteOffset,I.length)):A.toArray(I,P)}function w(A,I,P,O){let b=A.value,_=I+"_"+P;if(O[_]===void 0)return typeof b=="number"||typeof b=="boolean"?O[_]=b:ArrayBuffer.isView(b)?O[_]=b.slice():O[_]=b.clone(),!0;{let T=O[_];if(typeof b=="number"||typeof b=="boolean"){if(T!==b)return O[_]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(T.equals(b)===!1)return T.copy(b),!0}}return!1}function g(A){let I=A.uniforms,P=0,O=16;for(let _=0,T=I.length;_<T;_++){let E=Array.isArray(I[_])?I[_]:[I[_]];for(let y=0,C=E.length;y<C;y++){let L=E[y],z=Array.isArray(L.value)?L.value:[L.value];for(let K=0,ee=z.length;K<ee;K++){let J=z[K],k=d(J),$=P%O,X=$%k.boundary,me=$+X;P+=X,me!==0&&O-me<k.storage&&(P+=O-me),L.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=P,P+=k.storage}}}let b=P%O;return b>0&&(P+=O-b),A.__size=P,A.__cache={},this}function d(A){let I={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(I.boundary=4,I.storage=4):A.isVector2?(I.boundary=8,I.storage=8):A.isVector3||A.isColor?(I.boundary=16,I.storage=12):A.isVector4?(I.boundary=16,I.storage=16):A.isMatrix3?(I.boundary=48,I.storage=48):A.isMatrix4?(I.boundary=64,I.storage=64):A.isTexture?Ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(I.boundary=16,I.storage=A.byteLength):Ze("WebGLRenderer: Unsupported uniform value type.",A),I}function x(A){let I=A.target;I.removeEventListener("dispose",x);let P=a.indexOf(I.__bindingPointIndex);a.splice(P,1),i.deleteBuffer(r[I.id]),delete r[I.id],delete s[I.id]}function U(){for(let A in r)i.deleteBuffer(r[A]);a=[],r={},s={}}return{bind:c,update:h,dispose:U}}var h_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),vi=null;function f_(){return vi===null&&(vi=new yr(h_,16,16,or,pn),vi.name="DFG_LUT",vi.minFilter=fn,vi.magFilter=fn,vi.wrapS=ci,vi.wrapT=ci,vi.generateMipmaps=!1,vi.needsUpdate=!0),vi}var Nl=class{constructor(e={}){let{canvas:t=lf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:o="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:m=Rn}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;let w=m,g=new Set([jo,$o,Jo]),d=new Set([Rn,ti,cs,us,Yo,Ko]),x=new Uint32Array(4),U=new Int32Array(4),A=new te,I=null,P=null,O=[],b=[],_=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,y=null,C=null,L=null,z=null;this._outputColorSpace=hn;let K=0,ee=0,J=null,k=-1,$=null,X=new zt,me=new zt,he=null,ke=new We(0),Ge=0,De=t.width,ae=t.height,ce=1,be=null,Ve=null,Se=new zt(0,0,De,ae),Ke=new zt(0,0,De,ae),bt=!1,Ye=new ts,et=!1,mt=!1,tt=new Lt,Tt=new te,Wt=new zt,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},wt=!1;function It(){return J===null?ce:1}let q=n;function Dt(R,Y){return t.getContext(R,Y)}let rt,F,M,D,N,H,V,j,G,Z,le,ge,fe,ve,ye,Pe,He,W,xe,ue,Me,Ae,pe;try{let R={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:o,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",B,!1),t.addEventListener("webglcontextrestored",re,!1),t.addEventListener("webglcontextcreationerror",Q,!1),q===null){let Y="webgl2";if(q=Dt(Y,R),q===null)throw Dt(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}u()}catch(R){throw t.removeEventListener("webglcontextlost",B,!1),t.removeEventListener("webglcontextrestored",re,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),Je("WebGLRenderer: "+R.message),R}function u(){rt=new xg(q),rt.init(),Me=new s_(q,rt),F=new cg(q,rt,e,Me),M=new i_(q,rt),F.reversedDepthBuffer&&f&&M.buffers.depth.setReversed(!0),C=q.createFramebuffer(),L=q.createFramebuffer(),z=q.createFramebuffer(),D=new Sg(q),N=new Gv,H=new r_(q,rt,M,N,F,Me,D),V=new _g(T),j=new Tp(q),Ae=new og(q,j),G=new yg(q,j,D,Ae),Z=new Tg(q,G,j,Ae,D),W=new bg(q,F,H),ye=new ug(N),le=new Vv(T,V,rt,F,Ae,ye),ge=new c_(T,N),fe=new qv,ve=new $v(rt),He=new ag(T,V,M,Z,v,c),Pe=new n_(T,Z,F),pe=new u_(q,D,F,M),xe=new lg(q,rt,D),ue=new Mg(q,rt,D),D.programs=le.programs,T.capabilities=F,T.extensions=rt,T.properties=N,T.renderLists=fe,T.shadowMap=Pe,T.state=M,T.info=D}w!==Rn&&(_=new wg(w,t.width,t.height,l,r,s));let S=new Eu(T,q);this.xr=S,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let R=rt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=rt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(R){R!==void 0&&(ce=R,this.setSize(De,ae,!1))},this.getSize=function(R){return R.set(De,ae)},this.setSize=function(R,Y,oe=!0){if(S.isPresenting){Ze("WebGLRenderer: Can't change size while VR device is presenting.");return}De=R,ae=Y,t.width=Math.floor(R*ce),t.height=Math.floor(Y*ce),oe===!0&&(t.style.width=R+"px",t.style.height=Y+"px"),_!==null&&_.setSize(t.width,t.height),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(De*ce,ae*ce).floor()},this.setDrawingBufferSize=function(R,Y,oe){De=R,ae=Y,ce=oe,t.width=Math.floor(R*oe),t.height=Math.floor(Y*oe),this.setViewport(0,0,R,Y)},this.setEffects=function(R){if(w===Rn){Je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Y=0;Y<R.length;Y++)if(R[Y].isOutputPass===!0){Ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(X)},this.getViewport=function(R){return R.copy(Se)},this.setViewport=function(R,Y,oe,ne){R.isVector4?Se.set(R.x,R.y,R.z,R.w):Se.set(R,Y,oe,ne),M.viewport(X.copy(Se).multiplyScalar(ce).round())},this.getScissor=function(R){return R.copy(Ke)},this.setScissor=function(R,Y,oe,ne){R.isVector4?Ke.set(R.x,R.y,R.z,R.w):Ke.set(R,Y,oe,ne),M.scissor(me.copy(Ke).multiplyScalar(ce).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(R){M.setScissorTest(bt=R)},this.setOpaqueSort=function(R){be=R},this.setTransparentSort=function(R){Ve=R},this.getClearColor=function(R){return R.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,oe=!0){let ne=0;if(R){let ie=!1;if(J!==null){let Te=J.texture.format;ie=g.has(Te)}if(ie){let Te=J.texture.type,Ie=d.has(Te),we=He.getClearColor(),Oe=He.getClearAlpha(),ze=we.r,nt=we.g,ct=we.b;Ie?(x[0]=ze,x[1]=nt,x[2]=ct,x[3]=Oe,q.clearBufferuiv(q.COLOR,0,x)):(U[0]=ze,U[1]=nt,U[2]=ct,U[3]=Oe,q.clearBufferiv(q.COLOR,0,U))}else ne|=q.COLOR_BUFFER_BIT}Y&&(ne|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(ne|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&q.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),y=R},this.dispose=function(){t.removeEventListener("webglcontextlost",B,!1),t.removeEventListener("webglcontextrestored",re,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),He.dispose(),fe.dispose(),ve.dispose(),N.dispose(),V.dispose(),Z.dispose(),Ae.dispose(),pe.dispose(),le.dispose(),S.dispose(),S.removeEventListener("sessionstart",st),S.removeEventListener("sessionend",Bt),yt.stop()};function B(R){R.preventDefault(),tu("WebGLRenderer: Context Lost."),E=!0}function re(){tu("WebGLRenderer: Context Restored."),E=!1;let R=D.autoReset,Y=Pe.enabled,oe=Pe.autoUpdate,ne=Pe.needsUpdate,ie=Pe.type;u(),D.autoReset=R,Pe.enabled=Y,Pe.autoUpdate=oe,Pe.needsUpdate=ne,Pe.type=ie}function Q(R){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function se(R){let Y=R.target;Y.removeEventListener("dispose",se),de(Y)}function de(R){_e(R),N.remove(R)}function _e(R){let Y=N.get(R).programs;Y!==void 0&&(Y.forEach(function(oe){le.releaseProgram(oe)}),R.isShaderMaterial&&le.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,oe,ne,ie,Te){Y===null&&(Y=Yt);let Ie=ie.isMesh&&ie.matrixWorld.determinantAffine()<0,we=Tn(R,Y,oe,ne,ie);M.setMaterial(ne,Ie);let Oe=oe.index,ze=1;if(ne.wireframe===!0){if(Oe=G.getWireframeAttribute(oe),Oe===void 0)return;ze=2}let nt=oe.drawRange,ct=oe.attributes.position,Fe=nt.start*ze,St=(nt.start+nt.count)*ze;Te!==null&&(Fe=Math.max(Fe,Te.start*ze),St=Math.min(St,(Te.start+Te.count)*ze)),Oe!==null?(Fe=Math.max(Fe,0),St=Math.min(St,Oe.count)):ct!=null&&(Fe=Math.max(Fe,0),St=Math.min(St,ct.count));let $t=St-Fe;if($t<0||$t===1/0)return;Ae.setup(ie,ne,we,oe,Oe);let Ft,Pt=xe;if(Oe!==null&&(Ft=j.get(Oe),Pt=ue,Pt.setIndex(Ft)),ie.isMesh)ne.wireframe===!0?(M.setLineWidth(ne.wireframeLinewidth*It()),Pt.setMode(q.LINES)):Pt.setMode(q.TRIANGLES);else if(ie.isLine){let mn=ne.linewidth;mn===void 0&&(mn=1),M.setLineWidth(mn*It()),ie.isLineSegments?Pt.setMode(q.LINES):ie.isLineLoop?Pt.setMode(q.LINE_LOOP):Pt.setMode(q.LINE_STRIP)}else ie.isPoints?Pt.setMode(q.POINTS):ie.isSprite&&Pt.setMode(q.TRIANGLES);if(ie.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))Pt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{let mn=ie._multiDrawStarts,Le=ie._multiDrawCounts,yn=ie._multiDrawCount,pt=Oe?j.get(Oe).bytesPerElement:1,Bn=N.get(ne).currentProgram.getUniforms();for(let si=0;si<yn;si++)Bn.setValue(q,"_gl_DrawID",si),Pt.render(mn[si]/pt,Le[si])}else if(ie.isInstancedMesh)Pt.renderInstances(Fe,$t,ie.count);else if(oe.isInstancedBufferGeometry){let mn=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Le=Math.min(oe.instanceCount,mn);Pt.renderInstances(Fe,$t,Le)}else Pt.render(Fe,$t)};function Ce(R,Y,oe,ne){y!==null&&R.isNodeMaterial&&y.setObject(ne,R),et===!0&&ye.setState(R,oe,!1),R.transparent===!0&&R.side===kn&&R.forceSinglePass===!1?(R.side=dn,R.needsUpdate=!0,Ot(R,Y,ne),R.side=ir,R.needsUpdate=!0,Ot(R,Y,ne),R.side=kn):Ot(R,Y,ne)}this.compile=function(R,Y,oe=null){oe===null&&(oe=R),y!==null&&y.renderStart(R,Y,oe),P=ve.get(oe),P.init(Y),b.push(P),oe.traverseVisible(function(ie){ie.isLight&&ie.layers.test(Y.layers)&&(P.pushLight(ie),ie.castShadow&&P.pushShadow(ie))}),R!==oe&&R.traverseVisible(function(ie){ie.isLight&&ie.layers.test(Y.layers)&&(P.pushLight(ie),ie.castShadow&&P.pushShadow(ie))}),P.setupLights(),y!==null&&y.updateLights(P.state.lightsArray),mt=this.localClippingEnabled,et=ye.init(this.clippingPlanes,mt),et===!0&&ye.setGlobalState(this.clippingPlanes,Y),y!==null&&Pe.render(P.state.shadowsArray,oe,Y);let ne=new Set;return R.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;let Te=ie.material;if(Te)if(Array.isArray(Te))for(let Ie=0;Ie<Te.length;Ie++){let we=Te[Ie];Ce(we,oe,Y,ie),ne.add(we)}else Ce(Te,oe,Y,ie),ne.add(Te)}),P=b.pop(),y!==null&&y.renderEnd(),ne},this.compileAsync=function(R,Y,oe=null){let ne=this.compile(R,Y,oe);return new Promise(ie=>{function Te(){if(ne.forEach(function(Ie){let Oe=N.get(Ie).currentProgram;(Oe===void 0||Oe.isReady())&&ne.delete(Ie)}),ne.size===0){ie(R);return}setTimeout(Te,10)}rt.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Be=null;function $e(R){Be&&Be(R)}function st(){yt.stop()}function Bt(){yt.start()}let yt=new Of;yt.setAnimationLoop($e),typeof self!="undefined"&&yt.setContext(self),this.setAnimationLoop=function(R){Be=R,S.setAnimationLoop(R),R===null?yt.stop():yt.start()},S.addEventListener("sessionstart",st),S.addEventListener("sessionend",Bt),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;y!==null&&y.renderStart(R,Y);let oe=S.enabled===!0&&S.isPresenting===!0,ne=_!==null&&(J===null||oe)&&_.begin(T,J);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),S.enabled===!0&&S.isPresenting===!0&&(_===null||_.isCompositing()===!1)&&(S.cameraAutoUpdate===!0&&S.updateCamera(Y),Y=S.getCamera()),R.isScene===!0&&R.onBeforeRender(T,R,Y,J),P=ve.get(R,b.length),P.init(Y),P.state.textureUnits=H.getTextureUnits(),b.push(P),tt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Ye.setFromProjectionMatrix(tt,jn,Y.reversedDepth),mt=this.localClippingEnabled,et=ye.init(this.clippingPlanes,mt),I=fe.get(R,O.length),I.init(),O.push(I),S.enabled===!0&&S.isPresenting===!0){let Ie=T.xr.getDepthSensingMesh();Ie!==null&&Jt(Ie,Y,-1/0,T.sortObjects)}Jt(R,Y,0,T.sortObjects),I.finish(),y!==null&&y.updateLights(P.state.lightsArray),T.sortObjects===!0&&I.sort(be,Ve),wt=S.enabled===!1||S.isPresenting===!1||S.hasDepthSensing()===!1,wt&&He.addToRenderList(I,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),et===!0&&ye.beginShadows();let ie=P.state.shadowsArray;if(Pe.render(ie,R,Y),et===!0&&ye.endShadows(),(ne&&_.hasRenderPass())===!1){let Ie=I.opaque,we=I.transmissive;if(P.setupLights(),Y.isArrayCamera){let Oe=Y.cameras;if(we.length>0)for(let ze=0,nt=Oe.length;ze<nt;ze++){let ct=Oe[ze];Mt(Ie,we,R,ct)}wt&&He.render(R);for(let ze=0,nt=Oe.length;ze<nt;ze++){let ct=Oe[ze];Vt(I,R,ct,ct.viewport)}}else we.length>0&&Mt(Ie,we,R,Y),wt&&He.render(R),Vt(I,R,Y)}J!==null&&ee===0&&(H.updateMultisampleRenderTarget(J),H.updateRenderTargetMipmap(J)),ne&&_.end(T),R.isScene===!0&&R.onAfterRender(T,R,Y),Ae.resetDefaultState(),k=-1,$=null,b.pop(),b.length>0?(P=b[b.length-1],H.setTextureUnits(P.state.textureUnits),et===!0&&ye.setGlobalState(T.clippingPlanes,P.state.camera)):P=null,O.pop(),O.length>0?I=O[O.length-1]:I=null,y!==null&&y.renderEnd()};function Jt(R,Y,oe,ne){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)oe=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLightProbeGrid)P.pushLightProbeGrid(R);else if(R.isLight)P.pushLight(R),R.castShadow&&P.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(Ye)){ne&&Wt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(tt);let Ie=Z.update(R),we=R.material;we.visible&&I.push(R,Ie,we,oe,Wt.z,null,Y)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(Ye))){let Ie=Z.update(R),we=R.material;if(ne&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Wt.copy(R.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Wt.copy(Ie.boundingSphere.center)),Wt.applyMatrix4(R.matrixWorld).applyMatrix4(tt)),Array.isArray(we)){let Oe=Ie.groups;for(let ze=0,nt=Oe.length;ze<nt;ze++){let ct=Oe[ze],Fe=we[ct.materialIndex];Fe&&Fe.visible&&I.push(R,Ie,Fe,oe,Wt.z,ct,Y)}}else we.visible&&I.push(R,Ie,we,oe,Wt.z,null,Y)}}let Te=R.children;for(let Ie=0,we=Te.length;Ie<we;Ie++)Jt(Te[Ie],Y,oe,ne)}function Vt(R,Y,oe,ne){let{opaque:ie,transmissive:Te,transparent:Ie}=R;P.setupLightsView(oe),et===!0&&ye.setGlobalState(T.clippingPlanes,oe),ne&&M.viewport(X.copy(ne)),ie.length>0&&qt(ie,Y,oe),Te.length>0&&qt(Te,Y,oe),Ie.length>0&&qt(Ie,Y,oe),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Mt(R,Y,oe,ne){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[ne.id]===void 0){let Fe=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[ne.id]=new en(1,1,{generateMipmaps:!0,type:Fe?pn:Rn,minFilter:sr,samples:Math.max(4,F.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:lt.workingColorSpace})}let Te=P.state.transmissionRenderTarget[ne.id],Ie=ne.viewport||X;Te.setSize(Ie.z*T.transmissionResolutionScale,Ie.w*T.transmissionResolutionScale);let we=T.getRenderTarget(),Oe=T.getActiveCubeFace(),ze=T.getActiveMipmapLevel();T.setRenderTarget(Te),T.getClearColor(ke),Ge=T.getClearAlpha(),Ge<1&&T.setClearColor(16777215,.5),T.clear(),wt&&He.render(oe);let nt=T.toneMapping;T.toneMapping=ei;let ct=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),P.setupLightsView(ne),et===!0&&ye.setGlobalState(T.clippingPlanes,ne),qt(R,oe,ne),H.updateMultisampleRenderTarget(Te),H.updateRenderTargetMipmap(Te),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let St=0,$t=Y.length;St<$t;St++){let Ft=Y[St],{object:Pt,geometry:mn,material:Le,group:yn}=Ft;if(Le.side===kn&&Pt.layers.test(ne.layers)){let pt=Le.side;Le.side=dn,Le.needsUpdate=!0,Ut(Pt,oe,ne,mn,Le,yn),Le.side=pt,Le.needsUpdate=!0,Fe=!0}}Fe===!0&&(H.updateMultisampleRenderTarget(Te),H.updateRenderTargetMipmap(Te))}T.setRenderTarget(we,Oe,ze),T.setClearColor(ke,Ge),ct!==void 0&&(ne.viewport=ct),T.toneMapping=nt}function qt(R,Y,oe){let ne=Y.isScene===!0?Y.overrideMaterial:null;for(let ie=0,Te=R.length;ie<Te;ie++){let Ie=R[ie],{object:we,geometry:Oe,group:ze}=Ie,nt=Ie.material;nt.allowOverride===!0&&ne!==null&&(nt=ne),we.layers.test(oe.layers)&&Ut(we,Y,oe,Oe,nt,ze)}}function Ut(R,Y,oe,ne,ie,Te){y!==null&&ie.isNodeMaterial&&y.setObject(R,ie),R.onBeforeRender(T,Y,oe,ne,ie,Te),R.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ie.onBeforeRender(T,Y,oe,ne,R,Te),ie.transparent===!0&&ie.side===kn&&ie.forceSinglePass===!1?(ie.side=dn,ie.needsUpdate=!0,T.renderBufferDirect(oe,Y,ne,ie,R,Te),ie.side=ir,ie.needsUpdate=!0,T.renderBufferDirect(oe,Y,ne,ie,R,Te),ie.side=kn):T.renderBufferDirect(oe,Y,ne,ie,R,Te),R.onAfterRender(T,Y,oe,ne,ie,Te)}function Ot(R,Y,oe){Y.isScene!==!0&&(Y=Yt);let ne=N.get(R),ie=P.state.lights,Te=P.state.shadowsArray,Ie=ie.state.version,we=le.getParameters(R,ie.state,Te,Y,oe,P.state.lightProbeGridArray),Oe=le.getProgramCacheKey(we),ze=ne.programs;ne.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Y.environment:null,ne.fog=Y.fog;let nt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ne.envMap=V.get(R.envMap||ne.environment,nt),ne.envMapRotation=ne.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,ze===void 0&&(R.addEventListener("dispose",se),ze=new Map,ne.programs=ze);let ct=ze.get(Oe);if(ct!==void 0){if(ne.currentProgram===ct&&ne.lightsStateVersion===Ie)return Hn(R,we),ct}else we.uniforms=le.getUniforms(R),y!==null&&R.isNodeMaterial&&y.build(R,oe,we),R.onBeforeCompile(we,T),ct=le.acquireProgram(we,Oe),ze.set(Oe,ct),ne.uniforms=we.uniforms;let Fe=ne.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Fe.clippingPlanes=ye.uniform),Hn(R,we),ne.needsLights=In(R),ne.lightsStateVersion=Ie,ne.needsLights&&(Fe.ambientLightColor.value=ie.state.ambient,Fe.lightProbe.value=ie.state.probe,Fe.sunLights.value=ie.state.sun,Fe.sunLightShadows.value=ie.state.sunShadow,Fe.directionalLights.value=ie.state.directional,Fe.directionalLightShadows.value=ie.state.directionalShadow,Fe.spotLights.value=ie.state.spot,Fe.spotLightShadows.value=ie.state.spotShadow,Fe.rectAreaLights.value=ie.state.rectArea,Fe.ltc_1.value=ie.state.rectAreaLTC1,Fe.ltc_2.value=ie.state.rectAreaLTC2,Fe.pointLights.value=ie.state.point,Fe.pointLightShadows.value=ie.state.pointShadow,Fe.hemisphereLights.value=ie.state.hemi,Fe.sunShadowMatrix.value=ie.state.sunShadowMatrix,Fe.sunShadowCascade.value=ie.state.sunShadowCascade,Fe.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Fe.spotLightMatrix.value=ie.state.spotLightMatrix,Fe.spotLightMap.value=ie.state.spotLightMap,Fe.pointShadowMatrix.value=ie.state.pointShadowMatrix),ne.lightProbeGrid=P.state.lightProbeGridArray.length>0,ne.currentProgram=ct,ne.uniformsList=null,ct}function at(R){if(R.uniformsList===null){let Y=R.currentProgram.getUniforms();R.uniformsList=ps.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Hn(R,Y){let oe=N.get(R);oe.outputColorSpace=Y.outputColorSpace,oe.batching=Y.batching,oe.batchingColor=Y.batchingColor,oe.instancing=Y.instancing,oe.instancingColor=Y.instancingColor,oe.instancingMorph=Y.instancingMorph,oe.skinning=Y.skinning,oe.morphTargets=Y.morphTargets,oe.morphNormals=Y.morphNormals,oe.morphColors=Y.morphColors,oe.morphTargetsCount=Y.morphTargetsCount,oe.numClippingPlanes=Y.numClippingPlanes,oe.numIntersection=Y.numClipIntersection,oe.vertexAlphas=Y.vertexAlphas,oe.vertexTangents=Y.vertexTangents,oe.toneMapping=Y.toneMapping}function yi(R,Y){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;A.setFromMatrixPosition(Y.matrixWorld);for(let oe=0,ne=R.length;oe<ne;oe++){let ie=R[oe];if(ie.texture!==null&&ie.boundingBox.containsPoint(A))return ie}return null}function Tn(R,Y,oe,ne,ie){Y.isScene!==!0&&(Y=Yt),H.resetTextureUnits();let Te=Y.fog,Ie=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?Y.environment:null,we=J===null?T.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:lt.workingColorSpace,Oe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,ze=V.get(ne.envMap||Ie,Oe),nt=ne.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,ct=!!oe.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Fe=!!oe.morphAttributes.position,St=!!oe.morphAttributes.normal,$t=!!oe.morphAttributes.color,Ft=ei;ne.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ft=T.toneMapping);let Pt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,mn=Pt!==void 0?Pt.length:0,Le=N.get(ne),yn=P.state.lights;if(et===!0&&(mt===!0||R!==$)){let Nt=R===$&&ne.id===k;ye.setState(ne,R,Nt)}let pt=!1;ne.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==yn.state.version||Le.outputColorSpace!==we||ie.isBatchedMesh&&Le.batching===!1||!ie.isBatchedMesh&&Le.batching===!0||ie.isBatchedMesh&&Le.batchingColor===!0&&ie._colorsTexture===null||ie.isBatchedMesh&&Le.batchingColor===!1&&ie._colorsTexture!==null||ie.isInstancedMesh&&Le.instancing===!1||!ie.isInstancedMesh&&Le.instancing===!0||ie.isSkinnedMesh&&Le.skinning===!1||!ie.isSkinnedMesh&&Le.skinning===!0||ie.isInstancedMesh&&Le.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&Le.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&Le.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&Le.instancingMorph===!1&&ie.morphTexture!==null||Le.envMap!==ze||ne.fog===!0&&Le.fog!==Te||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==ye.numPlanes||Le.numIntersection!==ye.numIntersection)||Le.vertexAlphas!==nt||Le.vertexTangents!==ct||Le.morphTargets!==Fe||Le.morphNormals!==St||Le.morphColors!==$t||Le.toneMapping!==Ft||Le.morphTargetsCount!==mn||!!Le.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(pt=!0):(pt=!0,Le.__version=ne.version);let Bn=Le.currentProgram;pt===!0&&(Bn=Ot(ne,Y,ie),y&&ne.isNodeMaterial&&y.onUpdateProgram(ne,Bn,Le));let si=!1,Hi=!1,Ir=!1,At=Bn.getUniforms(),Kt=Le.uniforms;if(M.useProgram(Bn.program)&&(si=!0,Hi=!0,Ir=!0),ne.id!==k&&(k=ne.id,Hi=!0),Le.needsLights){let Nt=yi(P.state.lightProbeGridArray,ie);Le.lightProbeGrid!==Nt&&(Le.lightProbeGrid=Nt,Hi=!0)}if(si||$!==R){M.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),At.setValue(q,"projectionMatrix",R.projectionMatrix),At.setValue(q,"viewMatrix",R.matrixWorldInverse);let zi=At.map.cameraPosition;zi!==void 0&&zi.setValue(q,Tt.setFromMatrixPosition(R.matrixWorld)),F.logarithmicDepthBuffer&&At.setValue(q,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&At.setValue(q,"isOrthographic",R.isOrthographicCamera===!0),$!==R&&($=R,Hi=!0,Ir=!0)}if(Le.needsLights&&(yn.state.sunShadowMap.length>0&&At.setValue(q,"sunShadowMap",yn.state.sunShadowMap,H),yn.state.directionalShadowMap.length>0&&At.setValue(q,"directionalShadowMap",yn.state.directionalShadowMap,H),yn.state.spotShadowMap.length>0&&At.setValue(q,"spotShadowMap",yn.state.spotShadowMap,H),yn.state.pointShadowMap.length>0&&At.setValue(q,"pointShadowMap",yn.state.pointShadowMap,H)),ie.isSkinnedMesh){At.setOptional(q,ie,"bindMatrix"),At.setOptional(q,ie,"bindMatrixInverse");let Nt=ie.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),At.setValue(q,"boneTexture",Nt.boneTexture,H))}ie.isBatchedMesh&&(At.setOptional(q,ie,"batchingTexture"),At.setValue(q,"batchingTexture",ie._matricesTexture,H),At.setOptional(q,ie,"batchingIdTexture"),At.setValue(q,"batchingIdTexture",ie._indirectTexture,H),At.setOptional(q,ie,"batchingColorTexture"),ie._colorsTexture!==null&&At.setValue(q,"batchingColorTexture",ie._colorsTexture,H));let Bi=oe.morphAttributes;if((Bi.position!==void 0||Bi.normal!==void 0||Bi.color!==void 0)&&W.update(ie,oe,Bn),(Hi||Le.receiveShadow!==ie.receiveShadow)&&(Le.receiveShadow=ie.receiveShadow,At.setValue(q,"receiveShadow",ie.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&Y.environment!==null&&(Kt.envMapIntensity.value=Y.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=f_()),Hi){if(At.setValue(q,"toneMappingExposure",T.toneMappingExposure),Le.needsLights&&En(Kt,Ir),Te&&ne.fog===!0&&ge.refreshFogUniforms(Kt,Te),ge.refreshMaterialUniforms(Kt,ne,ce,ae,P.state.transmissionRenderTarget[R.id]),Le.needsLights&&Le.lightProbeGrid){let Nt=Le.lightProbeGrid;Kt.probesSH.value=Nt.texture,Kt.probesMin.value.copy(Nt.boundingBox.min),Kt.probesMax.value.copy(Nt.boundingBox.max),Kt.probesResolution.value.copy(Nt.resolution)}ps.upload(q,at(Le),Kt,H)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(ps.upload(q,at(Le),Kt,H),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&At.setValue(q,"center",ie.center),At.setValue(q,"modelViewMatrix",ie.modelViewMatrix),At.setValue(q,"normalMatrix",ie.normalMatrix),At.setValue(q,"modelMatrix",ie.matrixWorld),ne.uniformsGroups!==void 0){let Nt=ne.uniformsGroups;for(let zi=0,Pr=Nt.length;zi<Pr;zi++){let Hu=Nt[zi];pe.update(Hu,Bn),pe.bind(Hu,Bn)}}return Bn}function En(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.sunLights.needsUpdate=Y,R.sunLightShadows.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function In(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(R,Y,oe){let ne=N.get(R);ne.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),N.get(R.texture).__webglTexture=Y,N.get(R.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:oe,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){let oe=N.get(R);oe.__webglFramebuffer=Y,oe.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(R,Y=0,oe=0){J=R,K=Y,ee=oe;let ne=null,ie=!1,Te=!1;if(R){let we=N.get(R);if(we.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(q.FRAMEBUFFER,we.__webglFramebuffer),X.copy(R.viewport),me.copy(R.scissor),he=R.scissorTest,M.viewport(X),M.scissor(me),M.setScissorTest(he),k=-1;return}else if(we.__webglFramebuffer===void 0)H.setupRenderTarget(R);else if(we.__hasExternalTextures)H.rebindTextures(R,N.get(R.texture).__webglTexture,N.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let nt=R.depthTexture;if(we.__boundDepthTexture!==nt){if(nt!==null&&N.has(nt)&&(R.width!==nt.image.width||R.height!==nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(R)}}let Oe=R.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Te=!0);let ze=N.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ze[Y])?ne=ze[Y][oe]:ne=ze[Y],ie=!0):R.samples>0&&H.useMultisampledRTT(R)===!1?ne=N.get(R).__webglMultisampledFramebuffer:Array.isArray(ze)?ne=ze[oe]:ne=ze,X.copy(R.viewport),me.copy(R.scissor),he=R.scissorTest}else X.copy(Se).multiplyScalar(ce).floor(),me.copy(Ke).multiplyScalar(ce).floor(),he=bt;if(oe!==0&&(ne=C),M.bindFramebuffer(q.FRAMEBUFFER,ne)&&M.drawBuffers(R,ne),M.viewport(X),M.scissor(me),M.setScissorTest(he),ie){let we=N.get(R.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,we.__webglTexture,oe)}else if(Te){let we=Y;for(let Oe=0;Oe<R.textures.length;Oe++){let ze=N.get(R.textures[Oe]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Oe,ze.__webglTexture,oe,we)}}else if(R!==null&&oe!==0){let we=N.get(R.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,we.__webglTexture,oe)}k=-1};function Mi(R){let Y=N.get(R);return(Y.__readFormat!==R.format||Y.__readType!==R.type)&&(Y.__readFormat=R.format,Y.__readType=R.type,Y.__formatReadable=F.textureFormatReadable(R.format),Y.__typeReadable=F.textureTypeReadable(R.type)),Y}this.readRenderTargetPixels=function(R,Y,oe,ne,ie,Te,Ie,we=0){if(!(R&&R.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=N.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(Oe=Oe[Ie]),Oe){M.bindFramebuffer(q.FRAMEBUFFER,Oe);try{let ze=R.textures[we],nt=ze.format,ct=ze.type;R.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+we);let Fe=Mi(ze);if(Fe.__formatReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Fe.__typeReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-ne&&oe>=0&&oe<=R.height-ie&&q.readPixels(Y,oe,ne,ie,Me.convert(nt),Me.convert(ct),Te)}finally{let ze=J!==null?N.get(J).__webglFramebuffer:null;M.bindFramebuffer(q.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(R,Y,oe,ne,ie,Te,Ie,we=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=N.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(Oe=Oe[Ie]),Oe)if(Y>=0&&Y<=R.width-ne&&oe>=0&&oe<=R.height-ie){M.bindFramebuffer(q.FRAMEBUFFER,Oe);let ze=R.textures[we],nt=ze.format,ct=ze.type;R.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+we);let Fe=Mi(ze);if(Fe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Fe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let St=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,St),q.bufferData(q.PIXEL_PACK_BUFFER,Te.byteLength,q.STREAM_READ),q.readPixels(Y,oe,ne,ie,Me.convert(nt),Me.convert(ct),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);let $t=J!==null?N.get(J).__webglFramebuffer:null;M.bindFramebuffer(q.FRAMEBUFFER,$t);let Ft=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await uf(q,Ft,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,St),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Te),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(St),q.deleteSync(Ft),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,oe=0){let ne=Math.pow(2,-oe),ie=Math.floor(R.image.width*ne),Te=Math.floor(R.image.height*ne),Ie=Y!==null?Y.x:0,we=Y!==null?Y.y:0;H.setTexture2D(R,0),q.copyTexSubImage2D(q.TEXTURE_2D,oe,0,0,Ie,we,ie,Te),M.unbindTexture()},this.copyTextureToTexture=function(R,Y,oe=null,ne=null,ie=0,Te=0){let Ie,we,Oe,ze,nt,ct,Fe,St,$t,Ft=R.isCompressedTexture?R.mipmaps[Te]:R.image;if(oe!==null)Ie=oe.max.x-oe.min.x,we=oe.max.y-oe.min.y,Oe=oe.isBox3?oe.max.z-oe.min.z:1,ze=oe.min.x,nt=oe.min.y,ct=oe.isBox3?oe.min.z:0;else{let Kt=Math.pow(2,-ie);Ie=Math.floor(Ft.width*Kt),we=Math.floor(Ft.height*Kt),R.isDataArrayTexture?Oe=Ft.depth:R.isData3DTexture?Oe=Math.floor(Ft.depth*Kt):Oe=1,ze=0,nt=0,ct=0}ne!==null?(Fe=ne.x,St=ne.y,$t=ne.z):(Fe=0,St=0,$t=0);let Pt=Me.convert(Y.format),mn=Me.convert(Y.type),Le;Y.isData3DTexture?(H.setTexture3D(Y,0),Le=q.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(H.setTexture2DArray(Y,0),Le=q.TEXTURE_2D_ARRAY):(H.setTexture2D(Y,0),Le=q.TEXTURE_2D),M.activeTexture(q.TEXTURE0),M.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,Y.flipY),M.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),M.pixelStorei(q.UNPACK_ALIGNMENT,Y.unpackAlignment);let yn=M.getParameter(q.UNPACK_ROW_LENGTH),pt=M.getParameter(q.UNPACK_IMAGE_HEIGHT),Bn=M.getParameter(q.UNPACK_SKIP_PIXELS),si=M.getParameter(q.UNPACK_SKIP_ROWS),Hi=M.getParameter(q.UNPACK_SKIP_IMAGES);M.pixelStorei(q.UNPACK_ROW_LENGTH,Ft.width),M.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Ft.height),M.pixelStorei(q.UNPACK_SKIP_PIXELS,ze),M.pixelStorei(q.UNPACK_SKIP_ROWS,nt),M.pixelStorei(q.UNPACK_SKIP_IMAGES,ct);let Ir=R.isDataArrayTexture||R.isData3DTexture,At=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){let Kt=N.get(R),Bi=N.get(Y),Nt=N.get(Kt.__renderTarget),zi=N.get(Bi.__renderTarget);M.bindFramebuffer(q.READ_FRAMEBUFFER,Nt.__webglFramebuffer),M.bindFramebuffer(q.DRAW_FRAMEBUFFER,zi.__webglFramebuffer);for(let Pr=0;Pr<Oe;Pr++)Ir&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,N.get(R).__webglTexture,ie,ct+Pr),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,N.get(Y).__webglTexture,Te,$t+Pr)),q.blitFramebuffer(ze,nt,Ie,we,Fe,St,Ie,we,q.DEPTH_BUFFER_BIT,q.NEAREST);M.bindFramebuffer(q.READ_FRAMEBUFFER,null),M.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(ie!==0||R.isRenderTargetTexture||N.has(R)){let Kt=N.get(R),Bi=N.get(Y);M.bindFramebuffer(q.READ_FRAMEBUFFER,L),M.bindFramebuffer(q.DRAW_FRAMEBUFFER,z);for(let Nt=0;Nt<Oe;Nt++)Ir?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Kt.__webglTexture,ie,ct+Nt):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Kt.__webglTexture,ie),At?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Bi.__webglTexture,Te,$t+Nt):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Bi.__webglTexture,Te),ie!==0?q.blitFramebuffer(ze,nt,Ie,we,Fe,St,Ie,we,q.COLOR_BUFFER_BIT,q.NEAREST):At?q.copyTexSubImage3D(Le,Te,Fe,St,$t+Nt,ze,nt,Ie,we):q.copyTexSubImage2D(Le,Te,Fe,St,ze,nt,Ie,we);M.bindFramebuffer(q.READ_FRAMEBUFFER,null),M.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else At?R.isDataTexture||R.isData3DTexture?q.texSubImage3D(Le,Te,Fe,St,$t,Ie,we,Oe,Pt,mn,Ft.data):Y.isCompressedArrayTexture?q.compressedTexSubImage3D(Le,Te,Fe,St,$t,Ie,we,Oe,Pt,Ft.data):q.texSubImage3D(Le,Te,Fe,St,$t,Ie,we,Oe,Pt,mn,Ft):R.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Te,Fe,St,Ie,we,Pt,mn,Ft.data):R.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Te,Fe,St,Ft.width,Ft.height,Pt,Ft.data):q.texSubImage2D(q.TEXTURE_2D,Te,Fe,St,Ie,we,Pt,mn,Ft);M.pixelStorei(q.UNPACK_ROW_LENGTH,yn),M.pixelStorei(q.UNPACK_IMAGE_HEIGHT,pt),M.pixelStorei(q.UNPACK_SKIP_PIXELS,Bn),M.pixelStorei(q.UNPACK_SKIP_ROWS,si),M.pixelStorei(q.UNPACK_SKIP_IMAGES,Hi),Te===0&&Y.generateMipmaps&&q.generateMipmap(Le),M.unbindTexture()},this.initRenderTarget=function(R){N.get(R).__webglFramebuffer===void 0&&H.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?H.setTextureCube(R,0):R.isData3DTexture?H.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?H.setTexture2DArray(R,0):H.setTexture2D(R,0),M.unbindTexture()},this.resetState=function(){K=0,ee=0,J=null,M.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}};var vs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Un=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},d_=new nr(-1,1,1,-1,0,1),wu=class extends Zt{constructor(){super(),this.setAttribute("position",new _t([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new _t([0,2,0,0,2,0],2))}},p_=new wu,lr=class{constructor(e){this._mesh=new ut(p_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,d_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Fl=class extends Un{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Gt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Li.clone(e.uniforms),this.material=new Gt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new lr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Aa=class extends Un{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,l;this.inverse?(a=0,l=1):(a=1,l=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(l),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}},Hl=class extends Un{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Bl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new qe);this._width=n.width,this._height=n.height,t=new en(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:pn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Fl(vs),this.copyPass.material.blending=Vn,this.timer=new sa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let r=0,s=this.passes.length;r<s;r++){let a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let l=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}Aa!==void 0&&(a instanceof Aa?n=!0:a instanceof Hl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new qe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var zl=class extends Un{constructor(e,t,n=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new We}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}};var Gf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new We(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var _s=class i extends Un{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e!==void 0?new qe(e.x,e.y):new qe(256,256),this.clearColor=new We(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new en(s,a,{type:pn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let o=0;o<this.nMips;o++){let p=new en(s,a,{type:pn,depthBuffer:!1});p.texture.name="UnrealBloomPass.h"+o,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let f=new en(s,a,{type:pn,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+o,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}let l=Gf;this.highPassUniforms=Li.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Gt({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let o=0;o<this.nMips;o++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[o])),this.separableBlurMaterials[o].uniforms.invSize.value=new qe(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new te(1,1,1),new te(1,1,1),new te(1,1,1),new te(1,1,1),new te(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Li.clone(vs.uniforms),this.blendMaterial=new Gt({uniforms:this.copyUniforms,vertexShader:vs.vertexShader,fragmentShader:vs.fragmentShader,premultipliedAlpha:!0,blending:Pi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new We,this._oldClearAlpha=1,this._basic=new gi,this._fsQuad=new lr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.invSize.value=new qe(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(e,t,n,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let l=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),l=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let r=[],s=[];for(let a=1;a<e;a+=2){let l=t[a],c=a+1<e?t[a+1]:0,h=l+c;r.push((a*l+(a+1)*c)/h),s.push(h)}return new Gt({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new qe(.5,.5)},direction:{value:new qe(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:s}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Gt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};_s.BlurDirectionX=new qe(1,0);_s.BlurDirectionY=new qe(0,1);var Ra={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var kl=class extends Un{constructor(){super(),this.isOutputPass=!0,this.uniforms=Li.clone(Ra.uniforms),this.material=new rs({name:Ra.name,uniforms:this.uniforms,vertexShader:Ra.vertexShader,fragmentShader:Ra.fragmentShader}),this._fsQuad=new lr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},lt.getTransfer(this._outputColorSpace)===vt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===oa?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===la?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ca?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===br?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ha?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===fa?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ua&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Vl=class extends Ji{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Sn;e.deleteAttribute("uv");let t=new An({side:dn}),n=new An,r=new Qn(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let s=new ut(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let a=new Xs(e,n,6),l=new tn;l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),l.updateMatrix(),a.setMatrixAt(0,l.matrix),l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),l.updateMatrix(),a.setMatrixAt(1,l.matrix),l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),l.updateMatrix(),a.setMatrixAt(2,l.matrix),l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),l.updateMatrix(),a.setMatrixAt(3,l.matrix),l.position.set(2.291,-.756,-2.621),l.rotation.set(0,-.286,0),l.scale.set(1.546,1.552,1.496),l.updateMatrix(),a.setMatrixAt(4,l.matrix),l.position.set(-2.193,-.369,-5.547),l.rotation.set(0,.516,0),l.scale.set(3.875,3.487,2.986),l.updateMatrix(),a.setMatrixAt(5,l.matrix),this.add(a);let c=new ut(e,xs(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let h=new ut(e,xs(50));h.position.set(-16.109,18.021,-8.207),h.scale.set(.1,2.425,2.751),this.add(h);let o=new ut(e,xs(17));o.position.set(14.904,12.198,-1.832),o.scale.set(.15,4.265,6.331),this.add(o);let p=new ut(e,xs(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let f=new ut(e,xs(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let m=new ut(e,xs(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function xs(i){return new ea({color:0,emissive:16777215,emissiveIntensity:i})}var ot=256;function ql(i,e,t){var n=i*374761393+e*668265263+t*982451653|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function qf(i,e,t,n){var r=Math.floor(i),s=Math.floor(e),a=i-r,l=e-s,c=a*a*(3-2*a),h=l*l*(3-2*l);function o(w,g){return ql((w%t+t)%t,(g%t+t)%t,n)}var p=o(r,s),f=o(r+1,s),m=o(r,s+1),v=o(r+1,s+1);return p+(f-p)*c+(m-p)*h+(p-f-m+v)*c*h}function Ni(i,e,t,n){for(var r=0,s=.5,a=1,l=0;l<t;l++)r+=s*qf(i*a,e*a,8*a,n+l*17),s*=.5,a*=2;return r}function qn(i,e,t){return i+(e-i)*t}function Xl(i){return i<0?0:i>1?1:i}function Di(i){return[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255]}function Xf(i,e){e=e||{};for(var t=new Uint8ClampedArray(ot*ot*4),n=new Float32Array(ot*ot),r=e.emissive?new Uint8ClampedArray(ot*ot*4):null,s=new Uint8ClampedArray(ot*ot*4),a=0;a<ot;a++)for(var l=0;l<ot;l++){var c=i(l/ot,a/ot,l,a),h=a*ot+l,o=h*4;t[o]=c.c[0]*255,t[o+1]=c.c[1]*255,t[o+2]=c.c[2]*255,t[o+3]=255,n[h]=c.h;var p=(c.r===void 0?.85:c.r)*255;if(s[o]=p,s[o+1]=p,s[o+2]=p,s[o+3]=255,r){var f=c.e||[0,0,0];r[o]=f[0]*255,r[o+1]=f[1]*255,r[o+2]=f[2]*255,r[o+3]=255}}return{map:Gl(t,!0),normalMap:Gl(m_(n,e.bump||3),!1),roughnessMap:Gl(s,!1),emissiveMap:r?Gl(r,!0):null}}function m_(i,e){for(var t=new Uint8ClampedArray(ot*ot*4),n=0;n<ot;n++)for(var r=0;r<ot;r++){var s=i[n*ot+(r+ot-1)%ot],a=i[n*ot+(r+1)%ot],l=i[(n+ot-1)%ot*ot+r],c=i[(n+1)%ot*ot+r],h=(s-a)*e,o=(l-c)*e,p=1,f=Math.sqrt(h*h+o*o+p*p),m=(n*ot+r)*4;t[m]=(h/f*.5+.5)*255,t[m+1]=(o/f*.5+.5)*255,t[m+2]=(p/f*.5+.5)*255,t[m+3]=255}return t}function Gl(i,e){var t;if(typeof document!="undefined"){var n=document.createElement("canvas");n.width=ot,n.height=ot,n.getContext("2d").putImageData(new ImageData(i,ot,ot),0,0),t=new Zs(n)}else t=new yr(i,ot,ot);return t.wrapS=t.wrapT=Jr,t.colorSpace=e?hn:ni,t.anisotropy=8,t.needsUpdate=!0,t}function Ru(i,e,t,n){var r=Di(i),s=Di(e),a=Di(t);return function(l,c){var h=8,o=Math.floor(c*h),p=o%2?.5:0,f=l*4+p,m=Math.floor(f),v=f-m,w=c*h-o,g=Math.min(v,1-v)*4*.5,d=Math.min(w,1-w)*.5,x=Math.min(g,d*2),U=Ni(l*8,c*8,4,n),A=ql(m&3,o,n),I=Ni(l*24,c*24,2,n+5)>.72?.25:0;if(x<.045){var P=.8+U*.4;return{c:[a[0]*P,a[1]*P,a[2]*P],h:.1+U*.1,r:.95}}var O=Xl(A*.6+U*.5),b=.8+U*.35-I;return{c:[qn(s[0],r[0],O)*b,qn(s[1],r[1],O)*b,qn(s[2],r[2],O)*b],h:.6+U*.3-I+Math.min(x,.12)*2,r:.8+U*.15}}}function Yf(i,e,t){var n=Di(i),r=Di(e);return function(s,a){var l=s*3,c=a*4+Math.floor(s*3)%2*.5,h=l-Math.floor(l),o=c-Math.floor(c),p=ql(Math.floor(l)%3,Math.floor(c)%4,t),f=Math.min(h,1-h,(o<.5?o:1-o)*1.5),m=Ni(s*6,a*6,5,t);if(f<.035)return{c:[r[0]*.5,r[1]*.5,r[2]*.5],h:.1,r:.95};var v=Xl(m*.8+p*.4),w=.75+m*.4;return{c:[qn(r[0],n[0],v)*w,qn(r[1],n[1],v)*w,qn(r[2],n[2],v)*w],h:.5+m*.5,r:.9}}}function Ia(i,e,t){var n=Di(i),r=Di(e);return function(s,a,l,c){var h=s*2%1,o=a*2%1,p=Math.min(h,1-h,o,1-o)<.012,f=[[.06,.06],[.94,.06],[.06,.94],[.94,.94]].some(function(g){var d=h-g[0],x=o-g[1];return d*d+x*x<9e-4}),m=Ni(s*6,a*16,4,t),v=qf(s*90,a*4,90,t+3)>.9?.15:0,w=.75+m*.35+v;return p?{c:[r[0]*.4,r[1]*.4,r[2]*.4],h:.1,r:.6}:f?{c:[n[0]*1.2,n[1]*1.2,n[2]*1.2],h:1,r:.35}:{c:[qn(r[0],n[0],m)*w,qn(r[1],n[1],m)*w,qn(r[2],n[2],m)*w],h:.5+m*.1,r:.45+m*.2}}}function Kf(i){var e=Ia(5001824,1974568,i);return function(t,n,r,s){var a=e(t,n,r,s),l=Math.abs(n-.5)<.025&&t*4%1>.15&&t*4%1<.85,c=Math.abs(n-.15)<.04&&Math.abs(t*2%1-.5)<.12;return l?{c:[.2,.7,.8],h:.3,r:.3,e:[.15,.85,1]}:c?{c:[.9,.7,.3],h:.8,r:.3,e:[1,.6,.15]}:(a.e=[0,0,0],a)}}function Yl(i){return function(e,t){var n=Ni(e*5,t*5,5,i),r=1-Math.abs(Ni(e*4,t*4,4,i+9)-.5)*2,s=r>.9?Xl((r-.9)*10):0,a=.35+n*.5,l=[.32*a+s*.9,.12*a+s*.35,.08*a];return{c:l,h:n-s*.4,r:.9-s*.5,e:[s*1,s*.35,s*.05]}}}function Au(i){var e=Ia(6975352,2895412,31),t=i==="red"?[.9,.12,.08]:i==="blue"?[.15,.35,1]:null;return function(n,r,s,a){var l=e(n,r,s,a),c=r>.88&&Math.floor(n*16+r*16)%2===0;return r>.88?{c:c?[.85,.65,.1]:[.08,.08,.08],h:.6,r:.6,e:[0,0,0]}:Math.abs(n-.5)<.012?{c:[.05,.05,.05],h:0,r:.8,e:[0,0,0]}:t&&Math.abs(r-.45)<.05?{c:t,h:.7,r:.3,e:[t[0]*.8,t[1]*.8,t[2]*.8]}:(l.e=[0,0,0],l)}}function Wf(i){var e=Ia(5922664,2500654,41);return function(t,n,r,s){var a=e(t,n,r,s),l=Math.abs(t-.5)<.18&&Math.abs(n-.5)<.26;if(l){var c=Math.abs(t-.5)<.04&&(i?n>.5&&n<.72:n>.28&&n<.5),h=Math.abs(t-.5)<.08&&Math.abs(n-(i?.3:.7))<.04,o=i?[.2,1,.3]:[1,.15,.1];return h?{c:o,h:.9,r:.2,e:o}:c?{c:[.8,.8,.75],h:1,r:.3,e:[0,0,0]}:{c:[.06,.07,.06],h:.2,r:.7,e:[0,0,0]}}return a.e=[0,0,0],a}}function Wl(i,e,t,n){var r=Di(i),s=Di(e);return function(a,l){var c=a*4%1,h=l*4%1,o=Math.min(c,1-c,h,1-h),p=ql(Math.floor(a*4),Math.floor(l*4),t),f=Ni(a*8,l*8,4,t);if(o<.03)return{c:[s[0]*.4,s[1]*.4,s[2]*.4],h:.05,r:.95};if(n&&(c*10%1<.3||h*10%1<.3)&&o>.08)return{c:[s[0]*.3,s[1]*.3,s[2]*.3],h:.1,r:.6};var m=Xl(p*.5+f*.6),v=.7+f*.4;return{c:[qn(s[0],r[0],m)*v,qn(s[1],r[1],m)*v,qn(s[2],r[2],m)*v],h:.5+f*.3,r:n?.5:.8}}}function g_(i){var e=Yl(i);return function(t,n){var r=e(t,n),s=Ni(t*3,n*3,3,i+20)>.66;if(s){var a=Ni(t*10,n*10,3,i+21);return{c:[1,.45+a*.3,.08],h:0,r:.4,e:[1.2,.45+a*.3,.05]}}return r}}function v_(i){return Wl(2762274,1183760,i,!1)}var Ca={};function xn(i,e,t){return Ca[i]||(Ca[i]=Xf(e,t))}function Ar(i){switch(i){case 1:return xn("brick",Ru(9060914,4857364,2759960,1),{bump:4});case 2:return xn("stone",Yf(9078136,4867644,2),{bump:4});case 3:return xn("metal",Ia(5922664,2500654,3),{bump:3});case 4:return xn("tech",Kf(4),{emissive:!0,bump:3});case 5:return xn("hell",Yl(5),{emissive:!0,bump:5});case 6:return xn("door",Au(null),{emissive:!0,bump:3});case 7:return xn("doorRed",Au("red"),{emissive:!0,bump:3});case 8:return xn("doorBlue",Au("blue"),{emissive:!0,bump:3});case 9:return xn("switchOff",Wf(!1),{emissive:!0,bump:3});case 10:return xn("switchOn",Wf(!0),{emissive:!0,bump:3})}return Ar(1)}function Zf(i){var e="secret"+i;if(Ca[e])return Ca[e];for(var t={1:Ru(9060914,4857364,2759960,1),2:Yf(9078136,4867644,2),3:Ia(5922664,2500654,3),4:Kf(4),5:Yl(5)}[i]||Ru(9060914,4857364,2759960,1),n=i===5||i===3,r=new Uint8Array(ot*ot),s=88,a=24;a<232;a++){s+=a%13===0?2:a%17===0?-2:0;for(var l=0;l<5;l++)r[a*ot+s+l]=1}for(var c=0;c<28;c++)for(var h=0;h<4;h++)r[(120+c)*ot+s+6+c+h]=1;return Ca[e]=Xf(function(o,p,f,m){var v=t(o,p,f,m);return r[m*ot+f]&&(v.c=n?[v.c[0]*.4+.45,v.c[1]*.4+.4,v.c[2]*.4+.35]:[v.c[0]*.3,v.c[1]*.3,v.c[2]*.3],v.h=0,v.r=.95),v},{emissive:i===4||i===5,bump:4})}function Cu(i){switch(i){case"tech":return xn("fTech",Wl(4869718,1842722,11,!0),{bump:3});case"hell":return xn("fHell",g_(12),{emissive:!0,bump:4});case"ceilTech":return xn("cTech",Wl(3817030,1316378,13,!0),{bump:2});case"ceilHell":return xn("cHell",Yl(14),{emissive:!0,bump:4});case"ceilDark":return xn("cDark",v_(15),{bump:2});default:return xn("fSlab",Wl(6972506,3025444,10,!1),{bump:3})}}function Ui(i,e){var t=new An(Object.assign({map:i.map,normalMap:i.normalMap,roughnessMap:i.roughnessMap,roughness:1,metalness:.05},e||{}));return i.emissiveMap&&(t.emissiveMap=i.emissiveMap,t.emissive=new We(16777215),t.emissiveIntensity=1.6),t}function Zl(){this.groups={}}Zl.prototype.quad=function(i,e,t,n,r,s,a){var l=this.groups[i]||(this.groups[i]={pos:[],nor:[],uv:[]});[e,t,n,e,n,r].forEach(function(c){l.pos.push(c[0],c[1],c[2]),l.nor.push(s[0],s[1],s[2])}),[a[0],a[1],a[2],a[0],a[2],a[3]].forEach(function(c){l.uv.push(c[0],c[1])})};Zl.prototype.meshes=function(i){var e=[];for(var t in this.groups){var n=this.groups[t],r=new Zt;r.setAttribute("position",new _t(n.pos,3)),r.setAttribute("normal",new _t(n.nor,3)),r.setAttribute("uv",new _t(n.uv,2));var s=new ut(r,i(t));s.name=t,e.push(s)}return e};function Kl(i,e,t,n,r,s,a){if(!(a-s<.001)){var l,c,h,o,p;r==="E"?(l=[t+1,n+1],c=[t+1,n],h=[-1,0,0],o=n+1,p=n):r==="W"?(l=[t,n],c=[t,n+1],h=[1,0,0],o=n,p=n+1):r==="S"?(l=[t,n+1],c=[t+1,n+1],h=[0,0,-1],o=t,p=t+1):(l=[t+1,n],c=[t,n],h=[0,0,1],o=t+1,p=t),i.quad(e,[l[0],s,l[1]],[c[0],s,c[1]],[c[0],a,c[1]],[l[0],a,l[1]],h,[[o,s],[p,s],[p,a],[o,a]])}}var Iu={E:[1,0],W:[-1,0],S:[0,1],N:[0,-1]};function Jf(i){for(var e={},t=0;t<i.cells.length;t++){var n=i.cells[t];n>=1&&n<=5&&(e[n]=(e[n]||0)+1)}var r=1,s=-1;for(var a in e)e[a]>s&&(s=e[a],r=+a);return r}function __(i,e,t){var n=Jf(i);return[[1,0],[-1,0],[0,1],[0,-1]].forEach(function(r){var s=oi(i,e+r[0],t+r[1]);s>=1&&s<=5&&(n=s)}),n}function $f(i){var e=i.W,t=i.L,n=new Zl,r=new gt,s="wall"+Jf(e),a={};e.lifts.forEach(function(k){a[k.x+","+k.z]=k});var l=[];function c(k,$){var X=oi(e,k,$);return X===0||!!ai[X]}function h(k,$){var X=a[k+","+$];return X?X.bottom:sn(e,k,$)}for(var o=0;o<e.mh;o++)for(var p=0;p<e.mw;p++)if(c(p,o)){var f=h(p,o),m=Si(e,p,o);a[p+","+o]||n.quad("floor",[p,f,o],[p,f,o+1],[p+1,f,o+1],[p+1,f,o],[0,1,0],[[p,o],[p,o+1],[p+1,o+1],[p+1,o]]),n.quad("ceil",[p,m,o],[p+1,m,o],[p+1,m,o+1],[p,m,o+1],[0,-1,0],[[p,o],[p+1,o],[p+1,o+1],[p,o+1]]);for(var v in Iu){var w=p+Iu[v][0],g=o+Iu[v][1],d=oi(e,w,g);if(!c(w,g)){if(d===9){var x={x:w,z:g,faces:new Zl,dir:v};Kl(x.faces,"sw",p,o,v,f,m),l.push(x)}else Kl(n,"wall"+(d>=1&&d<=5?d:1),p,o,v,f,m);continue}var U=h(w,g),A=Si(e,w,g);U>f&&Kl(n,s,p,o,v,f,Math.min(U,m)),A<m&&Kl(n,s,p,o,v,Math.max(A,f),m)}}var I={};function P(k){return I[k]?I[k]:k==="floor"?I[k]=Ui(Cu(t.floor)):k==="ceil"?I[k]=Ui(Cu(t.ceil)):I[k]=Ui(Ar(+k.slice(4)))}n.meshes(P).forEach(function(k){k.receiveShadow=!0,r.add(k)});var O=Ui(Ar(9)),b=Ui(Ar(10));l.forEach(function(k){k.faces.meshes(function(){return O}).forEach(function($){k.mesh=$,r.add($)})});var _=[];for(var T in e.doors){var E=e.doors[T],y=sn(e,E.x,E.z),C=Si(e,E.x,E.z),L=C-y,z;if(E.secret)z=new ut(new Sn(1,L,1),Ui(Zf(__(e,E.x,E.z)))),Pu(z.geometry,1,L);else{var K=c(E.x-1,E.z)&&c(E.x+1,E.z),ee=K?new Sn(.22,L,1):new Sn(1,L,.22);z=new ut(ee,Ui(Ar(E.locked==="red"?7:E.locked==="blue"?8:6))),Pu(z.geometry,1,L)}z.position.set(E.x+.5,y+L/2,E.z+.5),z.userData={door:E,baseY:y+L/2,h:L},z.castShadow=!0,r.add(z),_.push(z)}var J=e.lifts.map(function(k){var $=Math.max(.2,k.top-k.bottom+.2),X=new ut(new Sn(.98,$,.98),Ui(Ar(4)));return Pu(X.geometry,1,$),X.userData={lift:k,h:$},r.add(X),X});return{group:r,update:function(){_.forEach(function(k){var $=k.userData.door;k.position.y=k.userData.baseY+$.open*k.userData.h*.98,k.visible=$.open<.99}),J.forEach(function(k){var $=k.userData.lift;k.position.set($.x+.5,$.pos-k.userData.h/2,$.z+.5)}),l.forEach(function(k){k.mesh&&(k.mesh.material=e.cells[k.z*e.mw+k.x]===10?b:O)})}}}function Pu(i,e,t){for(var n=i.attributes.uv,r=0;r<n.count;r++){var s=Math.floor(r/4),a=(s<4,e),l=s===2||s===3?e:t;n.setXY(r,n.getX(r)*a,n.getY(r)*l)}n.needsUpdate=!0}var jf={};function Ne(i,e){return jf[i]||(jf[i]=e())}function kt(i,e){return new An(Object.assign({color:i,roughness:.7,metalness:.05},e||{}))}function bn(i,e){return new An({color:0,emissive:i,emissiveIntensity:e||3,roughness:1})}function Ue(i,e,t,n,r,s){var a=new ut(i,e);return a.position.set(t,n,r),a.castShadow=!0,(s||this).add(a),a}var Xn=function(){return new ji(1,16,12)},Rt=function(){return new Sn(1,1,1)},cr=function(){return new js(1,1,10)},Oi=function(){return new ns(1,1,1,14)},Rr=function(){return new $s(1,1,6,12)};function Jl(i){var e=[];return i.traverse(function(t){t.isMesh&&t.material&&!t.userData.noFlash&&(t.material=t.material.clone(),e.push(t.material))}),e}function x_(){var i=new gt,e=new gt;i.add(e);var t=kt(8007196,{roughness:.6}),n=kt(3806220),r=kt(15259824,{roughness:.4}),s=Ue(Ne("cap",Rr),t,0,.5,0,e);s.scale.set(.17,.14,.13),s.rotation.x=.35;var a=Ue(Ne("sph",Xn),t,0,.72,.06,e);a.scale.set(.11,.1,.11),[-1,1].forEach(function(c){var h=Ue(Ne("cone",cr),n,c*.07,.83,.02,e);h.scale.set(.025,.12,.025),h.rotation.z=-c*.5;var o=Ue(Ne("sph",Xn),bn(16752672,2),c*.045,.74,.15,e);o.scale.setScalar(.018),o.userData.noFlash=!0;var p=new gt;p.position.set(c*.17,.58,.02),e.add(p);var f=Ue(Ne("cap",Rr),t,0,-.1,0,p);f.scale.set(.04,.09,.04);var m=Ue(Ne("cone",cr),r,0,-.26,.03,p);m.scale.set(.03,.07,.03),m.rotation.x=Math.PI,p.userData.side=c,e.userData["arm"+c]=p;var v=Ue(Ne("cap",Rr),n,c*.08,.18,0,e);v.scale.set(.05,.12,.05),e.userData["leg"+c]=v;var w=Ue(Ne("cone",cr),n,c*.06,.55,-.12,e);w.scale.set(.03,.09,.03),w.rotation.x=-1.2});var l=Jl(i);return{obj:i,mats:l,animate:function(c,h){var o=c.state==="chase"||c.state==="flee"?Math.sin(h*9+c.animT):0;e.position.y=Math.abs(o)*.03,e.userData.leg1.rotation.x=o*.6,e.userData["leg-1"].rotation.x=-o*.6;var p=c.state==="windup"?1:0;e.userData.arm1.rotation.x=-o*.5-p*2.4,e.userData["arm-1"].rotation.x=o*.5-p*.4,e.rotation.x=c.state==="pain"?-.35:0}}}function y_(){var i=new gt,e=new gt;i.add(e);var t=kt(12873850,{roughness:.55}),n=kt(3803152),r=kt(16051416,{roughness:.3}),s=Ue(Ne("sph",Xn),t,0,.36,0,e);s.scale.set(.34,.28,.32);var a=new gt;a.position.set(0,.3,.12),e.add(a);var l=Ue(Ne("sph",Xn),n,0,.04,.12,e);l.scale.set(.24,.1,.12),l.position.y=.33;for(var c=0;c<9;c++){var h=(c/8-.5)*2.4,o=Ue(Ne("cone",cr),r,Math.sin(h)*.22,.42,.14+Math.cos(h)*.14,e);o.scale.set(.028,.08,.028),o.rotation.x=Math.PI;var p=Ue(Ne("cone",cr),r,Math.sin(h)*.2,-.02,Math.cos(h)*.14+.02,a);p.scale.set(.025,.07,.025)}var f=Ue(Ne("sph",Xn),t,0,-.04,.02,a);f.scale.set(.26,.08,.22),[-1,1].forEach(function(v){var w=Ue(Ne("sph",Xn),bn(16773280,1.4),v*.12,.56,.24,e);w.scale.setScalar(.028),w.userData.noFlash=!0;var g=Ue(Ne("cap",Rr),t,v*.18,.1,0,e);g.scale.set(.07,.07,.07),e.userData["leg"+v]=g});var m=Jl(i);return{obj:i,mats:m,animate:function(v,w){var g=v.state==="chase"||v.state==="flee"?Math.sin(w*14+v.animT):0;e.position.y=Math.abs(g)*.04,e.userData.leg1.position.z=g*.08,e.userData["leg-1"].position.z=-g*.08;var d=v.state==="windup"?.7:(Math.sin(w*6+v.animT)+1)*.08;a.rotation.x=d,e.rotation.x=v.state==="windup"?.25:v.state==="pain"?-.3:0}}}function M_(){var i=new gt,e=new gt;i.add(e);var t=kt(9052182,{roughness:.35,metalness:.6}),n=kt(2757648,{roughness:.5,metalness:.4}),r=bn(16734736,4),s=Ue(Ne("box",Rt),t,0,.82,0,e);s.scale.set(.5,.42,.3);var a=Ue(Ne("box",Rt),n,0,.55,0,e);a.scale.set(.4,.16,.26);var l=Ue(Ne("sph",Xn),r,0,.84,.16,e);l.scale.setScalar(.07),l.userData.noFlash=!0;var c=Ue(Ne("box",Rt),t,0,1.12,.02,e);c.scale.set(.2,.18,.2);var h=Ue(Ne("box",Rt),bn(16747040,5),0,1.13,.12,e);h.scale.set(.15,.03,.02),h.userData.noFlash=!0,[-1,1].forEach(function(p){var f=Ue(Ne("cone",cr),n,p*.14,1.26,0,e);f.scale.set(.04,.2,.04),f.rotation.z=-p*.7;var m=Ue(Ne("sph",Xn),t,p*.3,1,0,e);m.scale.set(.14,.1,.14);var v=new gt;v.position.set(p*.33,.95,0),e.add(v),e.userData["arm"+p]=v;var w=Ue(Ne("box",Rt),t,0,-.25,0,v);w.scale.set(.13,.42,.13);var g=Ue(Ne("box",Rt),n,0,-.5,.02,v);g.scale.set(.15,.13,.15);var d=Ue(Ne("box",Rt),n,p*.13,.24,0,e);d.scale.set(.15,.48,.17),e.userData["leg"+p]=d});var o=Jl(i);return{obj:i,mats:o,animate:function(p,f){var m=p.state==="chase"?Math.sin(f*6+p.animT):0;e.userData.leg1.rotation.x=m*.4,e.userData["leg-1"].rotation.x=-m*.4,e.userData.arm1.rotation.x=p.state==="windup"?-2.2:-m*.3,e.userData["arm-1"].rotation.x=p.state==="windup"?-1.2:m*.3,e.position.y=Math.abs(m)*.03}}}function S_(){var i=new gt,e=new gt;i.add(e);var t=new An({color:665648,emissive:4184296,emissiveIntensity:1.2,transparent:!0,opacity:.82,roughness:.3,metalness:.2}),n=new An({color:0,emissive:10484991,emissiveIntensity:3}),r=Ue(Ne("cap",Rr),t,0,.58,0,e);r.scale.set(.13,.16,.09);var s=Ue(Ne("box",Rt),t,0,.4,0,e);s.scale.set(.22,.08,.13);var a=Ue(Ne("sph",Xn),t,0,.86,0,e);a.scale.set(.085,.1,.09);var l=Ue(Ne("box",Rt),n,0,.87,.07,e);l.scale.set(.12,.028,.02);var c=Ue(Ne("sph",Xn),n,0,.64,.08,e);c.scale.setScalar(.03),[-1,1].forEach(function(f){var m=new gt;m.position.set(f*.15,.72,0),e.add(m),e.userData["arm"+f]=m;var v=Ue(Ne("cap",Rr),t,0,-.14,0,m);v.scale.set(.035,.13,.035);var w=Ue(Ne("cap",Rr),t,f*.07,.18,0,e);w.scale.set(.045,.16,.045),e.userData["leg"+f]=w});var h=new ut(Ne("sph",Xn),new An({color:0,emissive:16765502,emissiveIntensity:1.5,transparent:!0,opacity:.25,side:kn,depthWrite:!1}));h.scale.setScalar(.62),h.position.y=.5,h.userData.noFlash=!0,i.add(h);var o=[t],p=new ut(new is(.34,.012,6,40),n);return p.rotation.x=Math.PI/2,p.position.y=.02,i.add(p),{obj:i,mats:o,animate:function(f,m){var v=f.state==="chase"?Math.sin(m*8+f.animT):0;e.userData.leg1.rotation.x=v*.5,e.userData["leg-1"].rotation.x=-v*.5,e.userData.arm1.rotation.x=f.state==="windup"?-1.5:-v*.4,e.userData["arm-1"].rotation.x=f.state==="windup"?-1.5:v*.4,e.position.y=.03+Math.sin(m*2)*.015;var w=f.state==="windup"&&f.attack!=="melee";n.emissive.setHex(w?16777215:10484991),n.emissiveIntensity=w?8:3,t.opacity=.7+Math.sin(m*23)*.06+(Math.random()<.02?-.3:0),h.visible=f.shieldT>0,h.rotation.y=m*1.5,p.scale.setScalar(1+Math.sin(m*3)*.05)}}}function b_(){var i=new gt,e=Ue(Ne("cyl",Oi),kt(4872762,{roughness:.45,metalness:.5}),0,.28,0,i);e.scale.set(.2,.55,.2),[.08,.48].forEach(function(r){var s=Ue(Ne("cyl",Oi),kt(2764326,{metalness:.6,roughness:.4}),0,r,0,i);s.scale.set(.205,.03,.205)});var t=Ue(Ne("cyl",Oi),bn(7012154,2.5),0,.56,0,i);t.scale.set(.16,.01,.16),t.userData.noFlash=!0;var n=Ue(Ne("box",Rt),bn(16765502,1.5),0,.3,.2,i);return n.scale.set(.12,.12,.005),n.rotation.z=Math.PI/4,n.userData.noFlash=!0,{obj:i,mats:Jl(i),animate:function(){}}}var T_={imp:x_,gnasher:y_,knight:M_,riley:S_,barrel:b_};function Qf(i){var e=T_[i.kind](),t=i.kind==="riley"?i.h/.95:1;e.obj.scale.setScalar(t);var n=0,r=e.animate;return e.update=function(s,a,l){e.obj.position.set(i.x,i.y,i.z);var c=i.state==="windup"||i.state==="pain"||i.los?l:i.moveAng||0,h=e.obj.rotation.y,o=-c+Math.PI/2,p=Math.atan2(Math.sin(o-h),Math.cos(o-h));if(e.obj.rotation.y=h+p*Math.min(1,a*10),i.state==="die"||i.state==="dead"){n+=a;var f=Math.min(1,n/.45);e.obj.rotation.x=-f*1.35,e.obj.position.y=i.y+.05*f,e.obj.scale.setScalar(t*(1-f*.15)),i.kind==="riley"&&(e.obj.visible=n*12%1<.6&&n<1.4)}else r(i,s);var m=i.flashT>0&&i.state!=="dead";e.mats.forEach(function(v){v.userData.base||(v.userData.base={e:v.emissive?v.emissive.getHex():0,i:v.emissiveIntensity}),m?(v.emissive.setHex(16777215),v.emissiveIntensity=1.4):(v.emissive.setHex(v.userData.base.e),v.emissiveIntensity=v.userData.base.i)})},e}function ed(i){var e=new gt,t=new gt;e.add(t);var n=i.item;if(n==="h"||n==="+"){var r=n==="+",s=Ue(Ne("box",Rt),kt(15789280,{roughness:.5}),0,.1,0,t);s.scale.set(r?.34:.2,r?.2:.14,r?.24:.14);var a=Ue(Ne("box",Rt),bn(16722458,2),0,.1,0,t);a.scale.set(r?.22:.13,r?.06:.04,r?.245:.145);var l=Ue(Ne("box",Rt),bn(16722458,2),0,.1,0,t);l.scale.set(r?.07:.045,r?.06:.04,r?.245:.145),l.scale.set(r?.345:.205,r?.06:.04,r?.07:.045)}else if(n==="b"){var c=Ue(Ne("box",Rt),kt(6972504,{metalness:.5,roughness:.4}),0,.08,0,t);c.scale.set(.1,.16,.06);var h=Ue(Ne("box",Rt),kt(14196800,{metalness:.8,roughness:.3}),0,.17,0,t);h.scale.set(.08,.03,.04)}else if(n==="a"){var o=Ue(Ne("box",Rt),kt(10496024,{roughness:.6}),0,.09,0,t);o.scale.set(.3,.18,.18);for(var p=0;p<4;p++){var f=Ue(Ne("cyl",Oi),kt(14196800,{metalness:.8,roughness:.3}),-.1+p*.066,.2,0,t);f.scale.set(.022,.06,.022)}}else if(n==="A"){var m=Ue(Ne("box",Rt),kt(3050042,{metalness:.4,roughness:.4}),0,.2,0,t);m.scale.set(.34,.36,.14);var v=Ue(Ne("box",Rt),bn(8060810,1.2),0,.26,.075,t);v.scale.set(.16,.1,.01)}else if(n==="2"){var w=Lu();w.scale.setScalar(.9),w.rotation.z=.2,w.position.y=.15,t.add(w)}else if(n==="r"||n==="u"){var g=n==="r"?16722458:3832575,d=Ue(Ne("box",Rt),bn(g,2.5),0,.2,0,t);d.scale.set(.16,.22,.015);var x=Ue(Ne("box",Rt),kt(15788760),0,.25,0,t);x.scale.set(.12,.03,.02)}else if(n==="P"){var U=Ue(Ne("sph",Xn),bn(16756800,4),0,.3,0,t);U.scale.setScalar(.14);var A=new ut(new is(.2,.012,6,32),bn(16765502,3));A.position.y=.3,t.add(A)}var I=n==="r"||n==="u"||n==="P"||n==="2";return{obj:e,update:function(P){e.position.set(i.x,i.y,i.z),e.visible=!i.gone,I&&(t.rotation.y=P*1.8+i.bob),t.position.y=I?.08+Math.sin(P*2.5+i.bob)*.05:0}}}function td(i){var e=new gt,t=Ue(Ne("cyl",Oi),kt(3811866,{metalness:.3}),0,.4,0,e);t.scale.set(.03,.8,.03);var n=Ue(Ne("cyl",Oi),kt(5917242,{metalness:.6,roughness:.4}),0,.82,0,e);n.scale.set(.1,.06,.1);var r=new gt;r.position.y=.9,e.add(r);var s=Ue(Ne("cone",cr),bn(16747040,5),0,.08,0,r);s.scale.set(.08,.2,.08);var a=Ue(Ne("cone",cr),bn(16769120,6),0,.05,0,r);return a.scale.set(.045,.12,.045),e.position.set(i.x,i.y,i.z),{obj:e,update:function(l){var c=Math.sin(l*17+i.animT*9)*.5+Math.sin(l*29+i.animT*3)*.5;r.scale.set(1+c*.1,1+c*.25,1+c*.1),r.rotation.y=l*3}}}var nd=function(){return kt(2763824,{metalness:.85,roughness:.35})},E_=function(){return kt(5911576,{roughness:.6})};function Lu(){var i=new gt,e=nd(),t=E_(),n=Ue(Ne("cyl",Oi),e,-.018,0,-.35,i);n.scale.set(.018,.6,.018),n.rotation.x=Math.PI/2;var r=Ue(Ne("cyl",Oi),e,.018,0,-.35,i);r.scale.set(.018,.6,.018),r.rotation.x=Math.PI/2;var s=Ue(Ne("box",Rt),t,0,-.035,-.3,i);s.scale.set(.06,.045,.22),i.userData.pump=s;var a=Ue(Ne("box",Rt),e,0,-.01,.02,i);a.scale.set(.07,.08,.2);var l=Ue(Ne("box",Rt),t,0,-.05,.22,i);return l.scale.set(.06,.1,.26),l.rotation.x=-.15,i}function id(){var i=new gt,e=nd(),t=Ue(Ne("box",Rt),e,0,.02,-.08,i);t.scale.set(.045,.05,.22),i.userData.slide=t;var n=Ue(Ne("box",Rt),kt(1710620,{roughness:.7}),0,-.07,.02,i);n.scale.set(.04,.13,.06),n.rotation.x=.25;var r=Ue(Ne("box",Rt),bn(16734762,2),0,.05,-.17,i);return r.scale.set(.008,.01,.01),i}function rd(){var i=new gt,e=kt(12618336,{roughness:.6}),t=kt(3811872,{roughness:.8}),n=Ue(Ne("box",Rt),t,0,0,0,i);n.scale.set(.1,.09,.12);var r=Ue(Ne("box",Rt),t,0,.02,-.07,i);r.scale.set(.1,.05,.04);var s=Ue(Ne("cyl",Oi),e,0,-.02,.12,i);return s.scale.set(.045,.14,.045),s.rotation.x=Math.PI/2,i}var On=3e3;function sd(i){var e=new Float32Array(On*3),t=new Float32Array(On*3),n=new Float32Array(On),r=new Float32Array(On),s=new Float32Array(On*3),a=new Float32Array(On),l=new Float32Array(On),c=new Float32Array(On),h=new Float32Array(On),o=new Float32Array(On*3),p=new Uint8Array(On),f=new Zt;f.setAttribute("position",new ln(e,3).setUsage(hs)),f.setAttribute("color",new ln(t,3).setUsage(hs)),f.setAttribute("size",new ln(n,1).setUsage(hs)),f.setAttribute("alpha",new ln(r,1).setUsage(hs));var m=new Gt({uniforms:{scale:{value:600}},vertexShader:["attribute float size; attribute float alpha; attribute vec3 color; varying vec3 vC; varying float vA;","uniform float scale;","void main(){ vC = color; vA = alpha; vec4 mv = modelViewMatrix * vec4(position,1.0);"," gl_PointSize = size * scale / -mv.z; gl_Position = projectionMatrix * mv; }"].join(`
`),fragmentShader:["varying vec3 vC; varying float vA;","void main(){ vec2 d = gl_PointCoord - 0.5; float r = dot(d,d); if (r > 0.25) discard;"," float k = smoothstep(0.25, 0.0, r); gl_FragColor = vec4(vC * k * vA, k * vA); }"].join(`
`),transparent:!0,depthWrite:!1,blending:Pi}),v=new Ys(f,m);v.frustumCulled=!1,i.add(v);var w=0,g=0;function d(_,T,E,y,C,L,z,K,ee,J,k,$){var X=w;w=(w+1)%On,g=Math.min(On,g+1),e[X*3]=_,e[X*3+1]=T,e[X*3+2]=E,s[X*3]=y,s[X*3+1]=C,s[X*3+2]=L,o[X*3]=z[0],o[X*3+1]=z[1],o[X*3+2]=z[2],n[X]=K,a[X]=l[X]=ee,c[X]=J||0,h[X]=k||0,p[X]=$?0:1}function x(_){return(Math.random()-.5)*2*_}for(var U=[],A=0;A<6;A++){var I=new Qn(16755285,0,6,1.6);I.userData={t:0,max:0,peak:0},i.add(I),U.push(I)}var P=0;function O(_,T,E,y,C,L,z){var K=U[P];P=(P+1)%U.length,K.position.set(_,T,E),K.color.setHex(y),K.distance=z||6,K.userData.t=K.userData.max=L,K.userData.peak=C}var b={blood:function(_){for(var T=0;T<14;T++)d(_.x,_.y,_.z,_.dx*1.5+x(1.2),x(1)+1,_.dz*1.5+x(1.2),[.55,.02,.02],.05+Math.random()*.04,.6,9)},spark:function(_){for(var T=0;T<12;T++)d(_.x,_.y,_.z,x(3),x(3)+1,x(3),[1.4,1.1,.5],.025,.35,8);O(_.x,_.y,_.z,10484991,2,.1,3)},puff:function(_){for(var T=0;T<6;T++)d(_.x,_.y,_.z,x(.3),x(.3)+.2,x(.3),[.25,.23,.2],.12,.5,-.2,.3);for(var E=0;E<5;E++)d(_.x,_.y,_.z,x(2.5),x(2.5),x(2.5),[1.6,1,.4],.02,.18,6)},muzzle:function(_){var T=_.weapon==="shotgun";O(_.x,_.y,_.z,16756832,T?6:3.5,.07,T?8:6)},fireBurst:function(_){for(var T=0;T<22;T++)d(_.x,_.y,_.z,x(2),x(2)+.5,x(2),[1.8,.7,.15],.06,.35,2,-.1);O(_.x,_.y,_.z,16742944,4,.25,5)},greenBurst:function(_){for(var T=0;T<22;T++)d(_.x,_.y,_.z,x(2),x(2)+.5,x(2),[.3,1.6,1.8],.06,.35,2,-.1);O(_.x,_.y,_.z,6287615,4,.25,5)},explosion:function(_){for(var T=0;T<90;T++){var E=Math.random()<.5;d(_.x,_.y,_.z,x(4),x(3)+2,x(4),E?[2,1.2,.3]:[1.4,.4,.05],.12+Math.random()*.1,.5+Math.random()*.4,3,.4)}for(var y=0;y<30;y++)d(_.x,_.y+.3,_.z,x(1),Math.random()*1.5,x(1),[.18,.15,.13],.35,1.4,-.5,.6);O(_.x,_.y+.5,_.z,16747056,14,.5,9)},gib:function(_){for(var T=_.kind==="gnasher"?[.6,.15,.2]:[.5,.05,.02],E=0;E<26;E++)d(_.x,_.y,_.z,x(2),Math.random()*3,x(2),T,.06+Math.random()*.05,.9,9);if(_.kind==="riley")for(var y=0;y<60;y++)d(_.x,_.y+Math.random(),_.z,x(1),Math.random()*1.5,x(1),[.3,1.5,1.7],.04,1.4,-.4)},summon:function(_){for(var T=0;T<50;T++)d(_.x+x(.4),_.y,_.z+x(.4),x(.5),Math.random()*2.5,x(.5),[1.8,.5,.1],.07,.8,-1);O(_.x,_.y+.5,_.z,16734736,6,.6,6)},pickup:function(_){for(var T=0;T<16;T++)d(_.x,_.y,_.z,x(1),Math.random()*1.5,x(1),[1.4,1.2,.5],.03,.5,-1)}};return{points:v,event:function(_){b[_.name]&&b[_.name](_)},trail:function(_,T,E,y){d(_,T,E,x(.2),x(.2),x(.2),y?[.3,1.4,1.6]:[1.8,.6,.1],.07,.3,0,-.15)},ember:function(_,T,E){d(_+x(.05),T,E+x(.05),x(.15),.4+Math.random()*.4,x(.15),[1.6,.6,.1],.02,1.1,-.2)},update:function(_,T){m.uniforms.scale.value=T;for(var E=0;E<g;E++){if(a[E]<=0){r[E]=0;continue}a[E]-=_,s[E*3+1]-=c[E]*_,e[E*3]+=s[E*3]*_,e[E*3+1]+=s[E*3+1]*_,e[E*3+2]+=s[E*3+2]*_;var y=Math.max(0,a[E]/l[E]);r[E]=p[E]?y:1,n[E]=Math.max(.005,n[E]+h[E]*_),t[E*3]=o[E*3],t[E*3+1]=o[E*3+1]*(.5+.5*y),t[E*3+2]=o[E*3+2]*y}f.attributes.position.needsUpdate=f.attributes.color.needsUpdate=f.attributes.size.needsUpdate=f.attributes.alpha.needsUpdate=!0,f.setDrawRange(0,g),U.forEach(function(C){var L=C.userData;L.t>0?(L.t-=_,C.intensity=L.peak*Math.max(0,L.t/L.max)):C.intensity=0})}}}var ad={slab:788743,tech:395532,hell:1443332};function od(i,e){e=e||{};var t=new Nl({canvas:i,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!e.preserve});t.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),t.toneMapping=br,t.toneMappingExposure=1.45;var n=new ms(t),r=n.fromScene(new Vl,.04).texture;t.outputColorSpace=hn,t.shadowMap.enabled=!1,t.info.autoReset=!1;var s=new on(78,16/9,.03,60);s.rotation.order="YXZ";var a=null,l=null,c=null,h=null,o=null,p=new Map,f=[],m=new Map,v=new Ji,w=new on(60,16/9,.01,5),g=new Qn(16756848,0,3,1.5),d=new ra(16767152,1.2);d.position.set(-1,2,1),v.add(new as(16777215,.35),new ss(16769216,2103312,.8),g,d),v.environment=r,v.environmentIntensity=.6;var x={fist:rd(),pistol:id(),shotgun:Lu()},U=new gt;v.add(U),Object.keys(x).forEach(function(J){U.add(x[J]),x[J].visible=!1}),x.fist.position.set(.12,-.14,-.3),x.pistol.position.set(.1,-.1,-.28),x.shotgun.position.set(.1,-.12,-.22);var A=new ut(new ji(1,10,8),new gi({color:16765056,transparent:!0,opacity:.9,blending:Pi,depthWrite:!1}));A.scale.setScalar(.035),v.add(A);var I=0,P={x:0,y:0},O=0,b=0,_=null,T={w:1,h:1,top:0};function E(J){_=J,a=new Ji;var k=ad[J.L.floor]||ad.slab;a.background=new We(k),a.fog=new ks(k,.032),a.environment=r,a.environmentIntensity=.25,a.add(new ss(10520696,2103840,.9)),a.add(new as(5261384,.5)),h=$f(J),a.add(h.group),o=sd(a),p.clear(),m.clear(),f=[],J.ents.forEach(function($){if($.kind==="torch"){var X=td($);a.add(X.obj),p.set($,X);var me=new Qn(16747066,2.2,7.5,1.4);me.position.set($.x,$.y+1,$.z),me.userData.e=$,a.add(me),f.push(me)}}),y(J).forEach(function($){var X=new Qn(13154472,1.6+$.size*.02,4+Math.sqrt($.size)*1.6,1.1);X.position.set($.x,$.y,$.z),a.add(X)}),l=new Bl(t),l.addPass(new zl(a,s)),c=new _s(new qe(256,256),.75,.55,.82),l.addPass(c),l.addPass(new kl),C(i.clientWidth,i.clientHeight)}function y(J){for(var k=J.W,$=new Uint8Array(k.mw*k.mh),X=[],me=0;me<k.cells.length;me++)if(!($[me]||k.cells[me]!==0)){var he=[me],ke=0,Ge=0,De=0,ae=0;for($[me]=1;he.length;){var ce=he.pop(),be=ce%k.mw,Ve=ce/k.mw|0;ke+=be+.5,Ge+=Ve+.5,De=Math.max(De,k.ceil[ce]),ae++,[[1,0],[-1,0],[0,1],[0,-1]].forEach(function(Se){var Ke=be+Se[0],bt=Ve+Se[1],Ye=bt*k.mw+Ke;Ke<0||bt<0||Ke>=k.mw||bt>=k.mh||$[Ye]||k.cells[Ye]!==0||($[Ye]=1,he.push(Ye))})}ae>=3&&X.push({x:ke/ae,z:Ge/ae,y:De-.4,size:ae})}return X}function C(J,k){!J||!k||(t.setSize(J,k,!1),T={w:J,h:k},s.aspect=J/k,s.updateProjectionMatrix(),w.aspect=J/k,w.updateProjectionMatrix(),l&&(l.setSize(J,k),c.resolution.set(J/2,k/2)))}function L(J,k,$){var X=J.p,me=new Set;J.ents.forEach(function(he){if(he.kind==="torch"){p.get(he).update(k),Math.random()<$*6&&o.ember(he.x,he.y+1,he.z),me.add(he);return}if(he.kind==="proj"){var ke=m.get(he);ke||(ke=new ut(new ji(.09,10,8),new gi({color:he.green?10484991:16756800})),a.add(ke),m.set(he,ke)),ke.position.set(he.x,he.y,he.z),o.trail(he.x,he.y,he.z,he.green),me.add(he);return}if(he.kind!=="part"){var Ge=p.get(he);if(!Ge){if(he.kind==="pickup")Ge=ed(he);else if(he.mob)Ge=Qf(he);else return;a.add(Ge.obj),p.set(he,Ge)}he.kind==="pickup"?Ge.update(k):Ge.update(k,$,Math.atan2(X.z-he.z,X.x-he.x)),me.add(he)}}),p.forEach(function(he,ke){me.has(ke)||(a.remove(he.obj),p.delete(ke))}),m.forEach(function(he,ke){me.has(ke)||(a.remove(he),m.delete(ke))})}function z(J){var k=_.p;f.forEach(function($,X){var me=$.userData.e,he=Math.sin(J*13+X*7)*.12+Math.sin(J*31+X*3)*.08+(Math.random()-.5)*.08,ke=(me.x-k.x)*(me.x-k.x)+(me.z-k.z)*(me.z-k.z)>400;$.intensity=ke?0:2.2*(1+he)})}function K(J,k,$){var X=J.p,me=Math.hypot(J.input.vx||0,J.input.vz||0);X.onGround&&me>.5&&(I+=$*me*2.6);var he=X.onGround?Math.min(1,me/4):0,ke=Math.atan2(Math.sin(X.ang-O),Math.cos(X.ang-O)),Ge=X.pitch-b;O=X.ang,b=X.pitch,P.x+=(-ke*.6-P.x)*Math.min(1,$*8),P.y+=(Ge*.6-P.y)*Math.min(1,$*8),Object.keys(x).forEach(function(Ke){x[Ke].visible=Ke===X.weapon&&!X.dead});var De=x[X.weapon],ae=X.fireT,ce=ae<.12?Math.sin(ae/.12*Math.PI):0,be=X.lowerT>0?1-X.lowerT/.15:X.raiseT>0?X.raiseT/.15:0;if(U.position.set(Math.sin(I)*.012*he+P.x*.1,-Math.abs(Math.cos(I))*.01*he+P.y*.1-be*.25-X.landT*.1,0),U.rotation.set(0,0,0),X.weapon==="fist")De.position.z=-.3-(ae<.2?Math.sin(ae/.2*Math.PI)*.18:0),De.rotation.x=ae<.2?-Math.sin(ae/.2*Math.PI)*.3:0;else{if(De.rotation.x=ce*(X.weapon==="shotgun"?.35:.2),De.position.z=(X.weapon==="shotgun"?-.22:-.28)+ce*.05,X.weapon==="shotgun"&&De.userData.pump){var Ve=ae>.3&&ae<.7?Math.sin((ae-.3)/.4*Math.PI):0;De.userData.pump.position.z=-.3+Ve*.09}X.weapon==="pistol"&&De.userData.slide&&(De.userData.slide.position.z=-.08+ce*.04)}var Se=ae<.06&&X.weapon!=="fist"&&!X.dead;A.visible=Se,A.position.set(De.position.x,De.position.y+.02,De.position.z-(X.weapon==="shotgun"?.68:.22)),A.scale.setScalar((X.weapon==="shotgun"?.06:.035)*(.8+Math.random()*.4)),g.intensity=Se?3:0,g.position.copy(A.position)}function ee(J,k,$){t.info.reset(),J!==_&&E(J);var X=J.p;h.update(),L(J,k,$),z(k),J.events.forEach(function(he){he.t==="fx"&&o.event(he)}),o.update($,T.h*.9);var me=J.shake*.004;s.position.set(X.x+(Math.random()-.5)*me,X.y+X.eyeH+(Math.random()-.5)*me,X.z+(Math.random()-.5)*me),s.rotation.y=-Math.PI/2-X.ang,s.rotation.x=X.pitch,s.rotation.z=X.dead?Math.min(.5,X.deadT*.6):0,l.render($),t.autoClear=!1,t.clearDepth(),K(J,k,$),t.render(v,w),t.autoClear=!0}return{render:ee,resize:C,renderer:t,camera:s,info:function(){return t.info}}}var xt=320,w_=200,Et=168,ld=32,Du=Et/2,ys="#e03828",$l="#8a8478",Nu="#401008";function A_(i,e){var t=String(i).split(" "),n=[],r="";return t.forEach(function(s){var a=r?r+" "+s:s;a.length>e&&r?(n.push(r),r=s):r=a}),r&&n.push(r),n}function Cr(i){i=i|0;var e=i/60|0,t=i%60;return e+":"+(t<10?"0":"")+t}function cd(i,e,t){function n(d,x){return d.time*(x||3)%1<.55}function r(d,x,U){return U?n(d,3)?"#ffffff":ys:x?"#ff9a28":ys}function s(d){return d.dead?Re.default.faces.dead:d.grinT>0?Re.default.faces.grin:d.painT>.25?Re.default.faces.pain:d.hp>=80?Re.default.faces.ok:d.hp>=55?Re.default.faces.hurt1:d.hp>=30?Re.default.faces.hurt2:Re.default.faces.hurt3}function a(d){var x=d.p;i.fillStyle="#3a352e",i.fillRect(0,Et,xt,ld),i.fillStyle="#14110d",i.fillRect(0,Et,xt,2),i.fillStyle="#57514a",i.fillRect(0,Et+2,xt,1),i.fillStyle="#24211c",[46,116,142,178,230,250].forEach(function(O){i.fillRect(O,Et+4,1,ld-8)});var U=ws[x.weapon],A=U.ammo?x.ammo[U.ammo]:-1,I=U.ammo&&A<=(U.ammo==="shells"?4:10);Re.default.drawText(i,"AMMO",8,Et+5,{color:A===0?ys:$l}),Re.default.drawText(i,U.ammo?String(A):"--",40,Et+12,{scale:3,color:r(d,I,A===0),shadow:Nu,right:!0});var P=x.hp<=25;Re.default.drawText(i,"HEALTH",54,Et+5,{color:P?ys:$l}),Re.default.drawText(i,x.hp+"%",108,Et+12,{scale:3,color:r(d,x.hp<=50,P&&!x.dead),shadow:Nu,right:!0}),Re.default.drawText(i,"ARMS",129,Et+5,{color:$l,center:!0}),bi.forEach(function(O,b){var _=119+b*8,T=x.weapons[O],E=(x.nextWeapon||x.weapon)===O,y=E?"#ffd23e":T?e.hasAmmo(x,O)?"#c8c0b0":"#6a5a4a":"#2a2620";Re.default.drawText(i,String(b+1),_,Et+13,{scale:2,color:y}),E&&(i.fillStyle="#ffd23e",i.fillRect(_,Et+25,6,1))}),i.drawImage(s(x).canvas,148,Et+3),Re.default.drawText(i,"ARMOR",184,Et+5,{color:$l}),Re.default.drawText(i,x.armor+"%",226,Et+12,{scale:3,color:x.armor>0?ys:"#6a4a40",shadow:Nu,right:!0}),[["red","keyRed",5],["blue","keyBlue",18]].forEach(function(O){!x.keys[O[0]]&&!d.info.keys[O[0]]||(i.globalAlpha=x.keys[O[0]]?1:.18,i.drawImage(Re.default.things[O[1]].canvas,236,Et+O[2]),i.globalAlpha=1)}),Re.default.drawText(i,"BULL "+x.ammo.bullets+"/200",254,Et+8,{color:U.ammo==="bullets"?"#ffd23e":"#c8c0b0"}),Re.default.drawText(i,"SHEL "+x.ammo.shells+"/50",254,Et+19,{color:x.weapons.shotgun?U.ammo==="shells"?"#ffd23e":"#c8c0b0":"#6a655c"})}function l(d){var x=xt/2,U=Du;if(t.crosshair){var A=e.aimTarget();i.fillStyle=A?A.barrel?"#ff9a28":"#ff4a2a":"rgba(232,224,200,0.8)",i.fillRect(x-5,U,3,1),i.fillRect(x+3,U,3,1),i.fillRect(x,U-5,1,3),i.fillRect(x,U+3,1,3)}var I=d.killT>0?"#ff3a1a":d.blockT>0?"#9aa4a8":d.hitT>0?"#ffffff":null;if(I){i.fillStyle=I;for(var P=d.killT>0?4:3,O=P;O<P+3;O++)i.fillRect(x-O,U-O,1,1),i.fillRect(x+O,U-O,1,1),i.fillRect(x-O,U+O,1,1),i.fillRect(x+O,U+O,1,1)}}function c(d){var x=d.p,U=xt/2,A=Du,I=34;d.hurtDirs.forEach(function(P){var O=P.ang-x.ang,b=Math.sin(O),_=-Math.cos(O),T=U+b*I,E=A+_*I;i.fillStyle="rgba(255,40,16,"+Math.min(.9,P.t).toFixed(3)+")",i.beginPath(),i.moveTo(T+b*9,E+_*9),i.lineTo(T-_*7,E+b*7),i.lineTo(T+_*7,E-b*7),i.closePath(),i.fill()})}function h(){var d=e.usePrompt();if(d){var x=Du+14;if(d.verb){var U=Re.default.textWidth(d.verb,1),A=13+U,I=(xt-A)/2|0;i.fillStyle="rgba(0,0,0,0.55)",i.fillRect(I-3,x-3,A+6,13),i.fillStyle="#e8e0c8",i.fillRect(I,x-1,9,9),i.fillStyle="#14110d",i.fillRect(I+1,x,7,7),Re.default.drawText(i,"E",I+3,x+1,{color:"#ffd23e"}),Re.default.drawText(i,d.verb,I+13,x+1,{color:d.color,shadow:!0})}else{var P=Re.default.textWidth(d.text,1);i.fillStyle="rgba(0,0,0,0.55)",i.fillRect((xt-P)/2-4,x-3,P+8,13),Re.default.drawText(i,d.text,xt/2,x+1,{color:d.color,shadow:!0,center:!0})}}}function o(d,x){if(!(!t.goalMarker||!x)){var U=e.goalTarget();if(U){var A=d.p,I=Math.hypot(U.x-A.x,U.z-A.z);if(!(I<1.6)){var P={x:U.x,y:U.y,z:U.z},O=R_(x,P),b=d.time*2%1<.7?"#ffd23e":"#c89a20";if(i.fillStyle=b,i.beginPath(),O.inFront&&O.x>8&&O.x<xt-8&&O.y>8&&O.y<Et-8){var _=Math.round(O.x),T=Math.round(O.y)-8;i.moveTo(_,T-4),i.lineTo(_+4,T),i.lineTo(_,T+4),i.lineTo(_-4,T),i.closePath(),i.fill(),Re.default.drawText(i,String(Math.round(I*2))+"M",_,T+7,{color:b,shadow:!0,center:!0})}else{var E=Math.atan2(U.z-A.z,U.x-A.x)-A.ang;E=Math.atan2(Math.sin(E),Math.cos(E));var y=E>0,C=y?xt-6:6,L=40;i.moveTo(C+(y?4:-4),L),i.lineTo(C-(y?3:-3),L-5),i.lineTo(C-(y?3:-3),L+5),i.closePath(),i.fill(),Re.default.drawText(i,"GOAL",y?xt-12:12,L-2,{color:b,shadow:!0,right:y})}}}}}function p(d){var x=d.p;if(!(x.dead||x.hp>25))for(var U=.18+.14*Math.sin(d.time*5),A=0;A<6;A++)i.fillStyle="rgba(200,0,0,"+(U*(1-A/6)).toFixed(3)+")",i.fillRect(A*2,0,2,Et),i.fillRect(xt-A*2-2,0,2,Et),i.fillRect(0,A*2,xt,2),i.fillRect(0,Et-A*2-2,xt,2)}var f={imp:["AN IMP BURNED YOU DOWN.","TIP: STRAFE WITH A AND D TO SIDESTEP FIREBALLS."],gnasher:["A GNASHER CHEWED YOU UP.","TIP: BACK AWAY WHILE YOU SHOOT, OR JUMP UP WHERE IT CAN'T FOLLOW."],knight:["THE EMBER KNIGHT CRUSHED YOU.","TIP: KEEP YOUR DISTANCE AND BRING SHOTGUN SHELLS."],riley:["RILEY OUTPLAYED YOU.","TIP: WHEN HER VISOR FLASHES WHITE, SHE IS ABOUT TO SHOOT. MOVE!"],barrel:["A BARREL BLEW UP IN YOUR FACE.","TIP: SHOOT BARRELS FROM FAR AWAY, WHEN DEMONS ARE NEAR THEM."]};function m(d){var x=d.p;if(!(!x.dead||x.deadT<1)){var U=f[d.killer]||["YOU WERE OVERWHELMED.","TIP: FIGHT FROM HIGH GROUND SO DEMONS COME TO YOU ONE AT A TIME."];i.fillStyle="rgba(0,0,0,0.5)",i.fillRect(0,44,xt,72),Re.default.drawText(i,"YOU DIED",xt/2,50,{scale:3,color:ys,shadow:!0,center:!0}),Re.default.drawText(i,U[0],xt/2,72,{color:"#e8e0c8",shadow:!0,center:!0}),Re.default.drawText(i,U[1],xt/2,84,{color:"#8fe0a0",shadow:!0,center:!0}),x.deadT>1.2&&d.time%1<.7&&Re.default.drawText(i,"CLICK OR PRESS ENTER TO TRY AGAIN",xt/2,100,{color:"#f0d848",shadow:!0,center:!0})}}function v(d){var x=4;d.msgs.forEach(function(A){var I=A_(A.text,78);A.t<.4&&(i.globalAlpha=Math.max(0,A.t/.4)),I.forEach(function(P){Re.default.drawText(i,P,4,x,{color:A.color||"#f0d848",shadow:!0}),x+=7}),i.globalAlpha=1,x+=1});var U=d.notice;U&&(i.globalAlpha=Math.min(1,U.t/.4),Re.default.drawText(i,U.text,xt/2,50,{scale:2,color:U.color,shadow:!0,center:!0}),i.globalAlpha=1)}function w(d){var x=d.boss;if(!(!x||x.state==="idle"||x.state==="dead")){var U=140,A=(xt-U)/2,I=Et-12,P=x.shieldT>0;Re.default.drawText(i,P?"RILEY - SHIELDED":"RILEY",xt/2,I-8,{color:P?"#ffd23e":"#6fe0ec",shadow:!0,center:!0}),i.fillStyle="#06141c",i.fillRect(A-1,I-1,U+2,6),i.fillStyle=P?"#ffd23e":"#3fd8c8",i.fillRect(A,I,Math.max(0,x.hp/x.maxHp)*U,4),i.fillStyle="#06141c",i.fillRect(A+U*.33,I,1,4),i.fillRect(A+U*.66,I,1,4)}}function g(d){i.fillStyle="rgba(0,0,0,0.8)",i.fillRect(0,0,xt,Et);for(var x=22,U=Et-14,A=Math.min((xt-16)/d.mw,(U-x)/d.mh),I=(xt-d.mw*A)/2,P=x+(U-x-d.mh*A)/2,O=d.time*2%1<.6,b=0;b<d.mh;b++)for(var _=0;_<d.mw;_++){var T=b*d.mw+_,E=d.W.cells[T];if(d.seen[T]){var y=null;if(E===0){var C=d.W.floor[T];y="rgb("+(40+C*50|0)+","+(34+C*40|0)+","+(28+C*30|0)+")"}else E===6?y="#c8a030":E===11?y=d.doors[_+","+b].found?"#c8a030":"#6a655c":E===7?y="#ff3a2a":E===8?y="#4a7aff":E===9||E===10?y=O||E===10?"#58e068":"#1e5a26":y="#8a8478";i.fillStyle=y,i.fillRect(I+_*A,P+b*A,Math.max(1,A-.4),Math.max(1,A-.4))}}var L=e.goalTarget();if(L&&O){var z=I+L.x*A,K=P+L.z*A;i.fillStyle="#ffd23e",i.fillRect(z-3,K-3,7,1),i.fillRect(z-3,K+3,7,1),i.fillRect(z-3,K-3,1,7),i.fillRect(z+3,K-3,1,7)}var ee=d.p,J=I+ee.x*A,k=P+ee.z*A,$=Math.cos(ee.ang),X=Math.sin(ee.ang);i.fillStyle="#f8f4e0",i.beginPath(),i.moveTo(J+$*5,k+X*5),i.lineTo(J-$*3-X*3,k-X*3+$*3),i.lineTo(J-$*3+X*3,k-X*3-$*3),i.closePath(),i.fill(),Re.default.drawText(i,d.L.name,6,4,{color:"#ff9a28",shadow:!0}),Re.default.drawText(i,"TAB: CLOSE",xt-6,4,{color:"#8a8478",right:!0}),Re.default.drawText(i,"GOAL: "+e.objective(),6,12,{color:"#f0d848",shadow:!0});var me=d.stats;Re.default.drawText(i,"KILLS "+me.kills+"/"+me.totalKills+"  ITEMS "+me.items+"/"+me.totalItems+"  SECRETS "+me.secrets+"/"+me.totalSecrets+"  TIME "+Cr(d.time),xt-6,12,{color:"#c8c0b0",right:!0}),Re.default.drawText(i,"BRIGHTER FLOOR = HIGHER GROUND",6,Et-9,{color:"#a8a090"})}return{draw:function(d,x){i.clearRect(0,0,xt,w_);var U=d.p;U.dmgFlash>0&&(i.fillStyle="rgba(255,20,10,"+(U.dmgFlash*.8).toFixed(3)+")",i.fillRect(0,0,xt,Et)),U.bonusFlash>0&&(i.fillStyle="rgba(255,220,80,"+(U.bonusFlash*.7).toFixed(3)+")",i.fillRect(0,0,xt,Et)),p(d),x.map?g(d):!U.dead&&!x.menu&&(c(d),o(d,x.camera),l(d),h()),x.map||w(d),v(d),m(d),a(d)}}}function R_(i,e){var t=i.matrixWorldInverse.elements,n=i.projectionMatrix.elements,r=e.x,s=e.y,a=e.z,l=t[0]*r+t[4]*s+t[8]*a+t[12],c=t[1]*r+t[5]*s+t[9]*a+t[13],h=t[2]*r+t[6]*s+t[10]*a+t[14],o=n[0]*l+n[4]*c+n[8]*h+n[12],p=n[1]*l+n[5]*c+n[9]*h+n[13],f=n[3]*l+n[7]*c+n[11]*h+n[15];return f<=.01?{inFront:!1}:{inFront:!0,x:(o/f*.5+.5)*xt,y:(1-(p/f*.5+.5))*Et}}var ii=Uu.default.SETTINGS,ht=Uu.default.MENU,Ct=ii.v;Ct.invertY===void 0&&(Ct.invertY=!1);Ct.fov===void 0&&(Ct.fov=78);var dt=320,Cn=200,C_=168,pd=document.getElementById("view"),Yn=document.getElementById("hud");Yn.width=dt;Yn.height=Cn;var Xe=Yn.getContext("2d");Xe.imageSmoothingEnabled=!1;var ec=/debug/.test(location.search),Qe=ju({levels:pr,rng:th((Date.now()&4294967295)>>>0),storage:(function(){try{return window.localStorage}catch{return null}})(),settings:Ct,saveSettings:function(){ii.save()},onProgress:function(i,e){ii.unlock(Math.min(i+1,pr.length-1)),I_=ii.record?ii.record(i,e):null}}),I_=null,ur=od(pd,{preserve:ec}),P_=cd(Xe,Qe,Ct),Fn="title",Fi=0,xi=!1,Ms=!1,ri=!1,Na=!1;function Ua(){return dr[Ct.difficulty]||dr[1]}function md(){un.default.setVolume(Ct.volume/10),ur.camera.fov=Ct.fov,ur.camera.updateProjectionMatrix()}function gd(){var i=window.innerWidth,e=window.innerHeight,t=Math.min(i,e*1.6),n=t/1.6,r=(i-t)/2,s=(e-n)/2;Yn.style.cssText="left:"+r+"px;top:"+s+"px;width:"+t+"px;height:"+n+"px";var a=Math.round(n*C_/Cn);pd.style.cssText="left:"+r+"px;top:"+s+"px;width:"+t+"px;height:"+a+"px",ur.resize(Math.round(t),a)}window.addEventListener("resize",gd);gd();var tc=Qe.keys,Ha=!1;function vd(){for(var i in tc)tc[i]=!1;Ha=!1,Qe.setFire(!1)}document.addEventListener("keydown",function(i){if((["Tab","Space"].indexOf(i.code)>=0||i.code.slice(0,5)==="Arrow")&&i.preventDefault(),un.default.init(),ht.isOpen()){un.default.startMusic(),ht.key(i.code);return}if(!i.repeat){if(i.code==="Enter"||i.code==="NumpadEnter"){nc();return}if(Fn!=="game"){i.code==="Space"&&nc();return}if(i.code==="Escape"&&xi&&!ri){yd();return}tc[i.code]=!0;var e=Qe.state();if(i.code==="Tab"&&(Ms=!Ms,e.usedMap=!0),i.code==="KeyM"){var t=un.default.toggleMusic();e.msgs.push({text:"MUSIC "+(t?"ON":"OFF"),t:2})}(i.code==="ControlLeft"||i.code==="ControlRight")&&(Ha=!0,Qe.setFire(!0)),i.code==="Digit1"&&Qe.switchWeapon("fist"),i.code==="Digit2"&&Qe.switchWeapon("pistol"),i.code==="Digit3"&&Qe.switchWeapon("shotgun"),i.code==="KeyQ"&&Qe.quickSwitch()}});document.addEventListener("keyup",function(i){tc[i.code]=!1,(i.code==="ControlLeft"||i.code==="ControlRight")&&(Ha=!1,Qe.setFire(!1))});window.addEventListener("blur",vd);document.addEventListener("pointerlockchange",function(){ri=document.pointerLockElement===Yn,vd(),ri?(Na=!1,Fn==="game"&&ht.close(),!xi&&Fn==="game"&&D_()):Fn==="game"&&xi&&yd()});document.addEventListener("pointerlockerror",function(){Na=!0});function Oa(){try{var i=Yn.requestPointerLock({unadjustedMovement:!0});i&&i.catch&&i.catch(function(){try{Yn.requestPointerLock()}catch{Na=!0}})}catch{Na=!0}}function L_(){try{document.exitPointerLock()}catch{}}function _d(i){var e=Yn.getBoundingClientRect();return{x:(i.clientX-e.left)/e.width*dt,y:(i.clientY-e.top)/e.height*Cn}}document.addEventListener("mousemove",function(i){var e=Qe.state();if(ri&&Fn==="game"&&e&&!e.p.dead){var t=44e-5*Ct.sens;e.p.ang+=i.movementX*t,e.p.pitch-=i.movementY*t*(Ct.invertY?-1:1),e.p.pitch=Math.max(-1.3,Math.min(1.3,e.p.pitch));return}if(ht.isOpen()){var n=_d(i);Yn.style.cursor=ht.pointer(n.x,n.y)?"pointer":"default"}});Yn.addEventListener("mousedown",function(i){if(un.default.init(),un.default.startMusic(),ht.isOpen()){var e=_d(i);i.button===0&&ht.click(e.x,e.y);return}if(Fn==="game"){var t=Qe.state();if(!ri){ht.close(),Oa();return}if(t.p.dead){nc();return}i.button===0&&(Ha=!0,Qe.setFire(!0)),i.button===2&&(Qe.keys.Space=!0);return}nc()});document.addEventListener("mouseup",function(i){i.button===0&&(Ha=!1,Qe.setFire(!1)),i.button===2&&(Qe.keys.Space=!1)});Yn.addEventListener("contextmenu",function(i){i.preventDefault()});Yn.addEventListener("wheel",function(i){Fn==="game"&&ri&&(i.preventDefault(),i.deltaY&&Qe.cycleWeapon(i.deltaY>0?1:-1))},{passive:!1});var jl=!1;function D_(){xi=!0}function xd(i){Qe.startLevel(i,!1),xi=!1,Ms=!1,Fn="game",ht.close(),Oa()}function nc(){un.default.init(),un.default.startMusic();var i=Qe.mode();if(i==="inter"){if(!jl&&Fi<1.3){jl=!0;return}jl=!1,Qe.onEnter(),Qe.onEnter(),Qe.mode()==="game"&&(xi=ri)}else if(i==="victory")Fi>1&&Ou();else if(i==="game"){var e=Qe.state();e.p.dead?e.p.deadT>1.2&&(Qe.retryLevel(),xi=ri):ri||(ht.close(),Oa())}}function Ou(){Qe.setMode("title"),Fn="title",ht.open(Fu()),L_()}function yd(){Ms=!1,ht.open(F_()),un.default.play("menu")}function Fa(i,e,t){for(var n=0;n<dt;n+=2){var r=Math.sin(n*.07+e*3+t)+Math.sin(n*.13-e*2.2),s=6+r*4;Xe.fillStyle=r>.7?"#ffd23e":r>-.3?"#ff7a18":"#a83010",Xe.fillRect(n,i-s,2,s+4)}}function N_(i,e){Xe.fillStyle="rgba(8,6,4,0.55)",Xe.fillRect(0,0,dt,Cn),Fa(Cn-6,e,0),Fa(Cn-2,e*1.3,2),Re.default.drawText(Xe,"FIREBIRD",dt/2,10,{scale:4,color:"#e03828",shadow:"#401008",center:!0}),Re.default.drawText(Xe,"FIREBIRD",dt/2-1,9,{scale:4,color:"#ff9a28",center:!0}),Re.default.drawText(Xe,"3D",dt/2,34,{scale:5,color:"#ffd23e",shadow:"#803008",center:!0}),Re.default.drawText(Xe,"EPISODE ONE: KNEE-DEEP IN THE ASHES",dt/2,64,{color:"#c8c0b0",center:!0}),Re.default.drawText(Xe,"A NIX GAMES PRODUCTION BY PHOENIX",dt/2,72,{color:"#8a8478",center:!0})}function Ss(i,e){Xe.fillStyle=Fn==="game"?"rgba(4,3,2,0.8)":"rgba(8,6,4,0.7)",Xe.fillRect(0,0,dt,Cn),Xe.fillStyle="#5e2a10",Xe.fillRect(40,33,dt-80,1)}function Pa(i){return i?"ON":"OFF"}function Fu(){var i=ii.progress;return{drawBg:N_,scale:2,top:86,gap:13,descY:156,footerY:172,items:function(){var e=[];return i.unlocked>0&&e.push({label:"CONTINUE",action:function(){xd(i.unlocked)},desc:function(){return"START "+pr[i.unlocked].name+" ON "+Ua().name+"."}}),e.push({label:"NEW GAME",action:function(){ht.push(Md(0))},desc:"START EPISODE ONE FROM THE BEGINNING."},{label:"LEVEL SELECT",action:function(){ht.push(U_())},desc:"REPLAY ANY LEVEL YOU HAVE REACHED."},{label:"OPTIONS",action:function(){ht.push(Sd())},desc:"MOUSE, VOLUME, FIELD OF VIEW, CROSSHAIR, TIPS AND DIFFICULTY."},{label:"CONTROLS",action:function(){ht.push(bd())},desc:"EVERY KEY, ON ONE PAGE."}),e}}}function Md(i){var e=dr.map(function(t,n){return{label:t.name,desc:t.desc,action:function(){Ct.difficulty=n,ii.save(),xd(i)}}});return e.push({label:"BACK",action:function(){ht.back()}}),{title:"DIFFICULTY",drawBg:Ss,scale:2,top:54,gap:18,descY:146,sel:Ct.difficulty,items:e}}function U_(){var i=pr.map(function(e,t){var n=t<=ii.progress.unlocked;return{label:n?e.name:e.name.split(":")[0]+": ???",disabled:function(){return!n},desc:"PAR "+Cr(e.par)+".  STARTS WITH A PISTOL.",action:function(){ht.push(Md(t))}}});return i.push({label:"BACK",action:function(){ht.back()}}),{title:"LEVEL SELECT",drawBg:Ss,top:46,gap:14,descY:142,items:i}}function Sd(){function i(t,n,r,s){return function(a){var l=Ct[t]+a*(s||1);Ct[t]=l>r?n:l<n?r:l,ii.save(),md()}}function e(t){return function(){Ct[t]=!Ct[t],ii.save()}}return{title:"OPTIONS",drawBg:Ss,top:40,gap:11,descY:158,items:[{label:"MOUSE SPEED",slider:[0,10,function(){return Ct.sens}],adjust:i("sens",1,10),desc:"HOW FAST THE VIEW TURNS. LEFT AND RIGHT TO CHANGE."},{label:"INVERT MOUSE Y",value:function(){return Pa(Ct.invertY)},adjust:e("invertY"),desc:"PUSH THE MOUSE FORWARD TO LOOK DOWN INSTEAD OF UP."},{label:"FIELD OF VIEW",value:function(){return Ct.fov+" DEG"},adjust:i("fov",60,110,5),desc:"HOW WIDE YOU SEE. WIDER SHOWS MORE, NARROWER ZOOMS IN."},{label:"SOUND VOLUME",slider:[0,10,function(){return Ct.volume}],adjust:i("volume",0,10),desc:"LOUDNESS OF EVERYTHING."},{label:"MUSIC",value:function(){return Pa(un.default.isMusicOn())},adjust:function(){un.default.setMusic(!un.default.isMusicOn())},desc:"PRESS M DURING PLAY TO TOGGLE IT TOO."},{label:"CROSSHAIR",value:function(){return Pa(Ct.crosshair)},adjust:e("crosshair"),desc:"A SMALL AIMING MARK. TURNS RED OVER A DEMON."},{label:"GOAL MARKER",value:function(){return Pa(Ct.goalMarker)},adjust:e("goalMarker"),desc:"POINTS AT YOUR GOAL ONCE YOU HAVE SEEN IT."},{label:"TIPS",value:function(){return Pa(Ct.tips)},adjust:function(){Ct.tips=!Ct.tips,Ct.tips&&(Ct.seenTips={}),ii.save()},desc:"SHORT HINTS THE FIRST TIME SOMETHING NEW HAPPENS."},{label:"DIFFICULTY",value:function(){return Ua().name},adjust:i("difficulty",0,2),desc:function(){return Ua().desc}},{label:"BACK",action:function(){ht.back()}}]}}var O_=[["MOVE","W A S D   OR   ARROW KEYS"],["LOOK AND AIM","MOUSE (UP AND DOWN TOO)"],["FIRE","LEFT CLICK   OR   CTRL"],["JUMP","SPACE   OR   RIGHT CLICK"],["CROUCH","C"],["USE / OPEN","E"],["RUN","HOLD SHIFT"],["WEAPONS","1 2 3   OR   MOUSE WHEEL"],["LAST WEAPON","Q"],["MAP","TAB"],["PAUSE","ESC"]];function bd(){return{title:"CONTROLS",drawBg:Ss,top:170,gap:12,items:[{label:"BACK",action:function(){ht.back()}}],drawExtra:function(){O_.forEach(function(i,e){var t=40+e*11;Re.default.drawText(Xe,i[0],140,t,{color:"#c8c0b0",right:!0}),Re.default.drawText(Xe,i[1],152,t,{color:"#ffd23e"})})}}}function ud(i,e,t){return{title:i,drawBg:Ss,scale:2,top:86,gap:18,sel:1,drawExtra:function(){Re.default.drawText(Xe,e,dt/2,56,{color:"#a8a090",center:!0})},items:[{label:"YES",action:t},{label:"NO",action:function(){ht.back()}}]}}function F_(){return{title:"PAUSED",drawBg:Ss,scale:2,top:64,gap:14,descY:144,footerY:176,footer:"ARROWS OR MOUSE: CHOOSE   ENTER OR CLICK: SELECT",items:[{label:function(){return Qe.state().p.dead?"TRY AGAIN":"RESUME"},action:function(){Qe.state().p.dead&&Qe.retryLevel(),ht.close(),Oa()},desc:"BACK TO THE FIGHT."},{label:"RESTART LEVEL",desc:"START THIS LEVEL OVER WITH THE GEAR YOU BROUGHT IN.",action:function(){ht.push(ud("RESTART?","YOU WILL LOSE PROGRESS IN THIS LEVEL.",function(){Qe.retryLevel(),ht.close(),Oa()}))}},{label:"OPTIONS",action:function(){ht.push(Sd())},desc:"MOUSE, VOLUME, FIELD OF VIEW AND MORE."},{label:"CONTROLS",action:function(){ht.push(bd())},desc:"EVERY KEY, ON ONE PAGE."},{label:"QUIT TO TITLE",desc:"YOUR UNLOCKED LEVELS ARE SAVED.",action:function(){ht.push(ud("QUIT?","PROGRESS IN THIS LEVEL WILL BE LOST.",Ou))}}],drawExtra:function(){var i=Qe.state(),e=i.stats;Re.default.drawText(Xe,i.L.name+"   "+Ua().name,dt/2,38,{color:"#c8c0b0",center:!0}),Re.default.drawText(Xe,"GOAL: "+Qe.objective(),dt/2,48,{color:"#f0d848",center:!0}),Re.default.drawText(Xe,"KILLS "+e.kills+"/"+e.totalKills+"   ITEMS "+e.items+"/"+e.totalItems+"   SECRETS "+e.secrets+"/"+e.totalSecrets+"   TIME "+Cr(i.time),dt/2,160,{color:"#8a8478",center:!0})}}}function H_(i){var e=Qe.state(),t=e.L.name.split(": ");Xe.fillStyle="rgba(4,3,2,0.6)",Xe.fillRect(0,0,dt,Cn),Re.default.drawText(Xe,t[0],dt/2,22,{color:"#8a8478",center:!0}),Re.default.drawText(Xe,t[1]||e.L.name,dt/2,32,{scale:3,color:"#ff9a28",shadow:"#401008",center:!0}),Re.default.drawText(Xe,"GOAL",dt/2,60,{color:"#8a8478",center:!0}),Re.default.drawText(Xe,Qe.objective(),dt/2,69,{scale:2,color:"#f0d848",shadow:!0,center:!0}),Re.default.drawText(Xe,"DIFFICULTY: "+Ua().name+"     PAR "+Cr(e.L.par),dt/2,88,{color:"#a8a090",center:!0}),i%1<.7&&Re.default.drawText(Xe,"CLICK TO BEGIN",dt/2,106,{scale:2,color:"#ffffff",shadow:!0,center:!0}),Na&&Re.default.drawText(Xe,"THE GAME NEEDS THE MOUSE. CLICK THE SCREEN AGAIN.",dt/2,124,{color:"#ff9a28",center:!0}),Re.default.drawText(Xe,"WASD MOVE  MOUSE LOOK  CLICK FIRE  SPACE JUMP  E USE  TAB MAP  ESC PAUSE",dt/2,140,{color:"#8a8478",center:!0})}function B_(i){var e=Qe.interStats();Xe.fillStyle="rgba(10,8,6,0.88)",Xe.fillRect(0,0,dt,Cn),Fa(Cn-6,i,1),Re.default.drawText(Xe,e.name,dt/2,22,{scale:2,color:"#ff9a28",shadow:!0,center:!0}),Re.default.drawText(Xe,"FINISHED!",dt/2,42,{scale:2,color:"#e8e0c8",shadow:!0,center:!0});var t=jl?1:Math.min(1,i/1.2);function n(s,a){return a?Math.round(s/a*100*t):100}if([["KILLS",e.kills,e.totalKills,70],["ITEMS",e.items,e.totalItems,90],["SECRETS",e.secrets,e.totalSecrets,110]].forEach(function(s){Re.default.drawText(Xe,s[0],90,s[3],{scale:2,color:"#c8c0b0"});var a=n(s[1],s[2]);Re.default.drawText(Xe,a+"%",240,s[3],{scale:2,color:a>=100?"#ffd23e":"#e03828",right:!0})}),Re.default.drawText(Xe,"TIME "+Cr(e.time),90,132,{scale:2,color:e.time<=e.par&&t>=1?"#ffd23e":"#c8c0b0"}),Re.default.drawText(Xe,"PAR "+Cr(e.par),240,132,{scale:2,color:"#c8c0b0",right:!0}),t>=1&&i%1<.7){var r=Qe.levelIndex();Re.default.drawText(Xe,r+1<pr.length?"CLICK OR PRESS ENTER FOR "+pr[r+1].name:"CLICK OR PRESS ENTER",dt/2,166,{color:"#f0d848",shadow:!0,center:!0})}}function z_(i){Xe.fillStyle="rgba(8,6,4,0.9)",Xe.fillRect(0,0,dt,Cn),Fa(Cn-8,i,0),Fa(Cn-4,i*1.3,2),Re.default.drawText(Xe,"YOU WIN!",dt/2,30,{scale:4,color:"#ffd23e",shadow:"#803008",center:!0}),["THE DEMON THRONE LIES IN ASHES,","AND RILEY TAPS OUT WITH A GRIN:",`"SAME TIME TOMORROW? I'LL BE READY."`,"","THE FIREBIRD CANNOT BE KILLED.","IT ONLY BURNS BRIGHTER.","","THANKS FOR PLAYING, WARRIOR."].forEach(function(e,t){Re.default.drawText(Xe,e,dt/2,74+t*10,{color:"#e8e0c8",center:!0})}),i>1&&i%1<.7&&Re.default.drawText(Xe,"CLICK OR PRESS ENTER FOR THE TITLE SCREEN",dt/2,170,{color:"#f0d848",shadow:!0,center:!0})}function k_(i){var e=i.p;i.events.forEach(function(t){if(t.t==="sound"){if(t.local){un.default.play(t.name);return}var n=t.x-e.x,r=t.z-e.z,s=Math.sqrt(n*n+r*r),a=Math.sin(Math.atan2(r,n)-e.ang)*.7;un.default.play(t.name,s,a)}})}var La=1/60,Da=0,hd=performance.now(),fd="",Ql=[];Qe.startLevel(0,!1);var dd=Qe.state();function Td(i){var e=Math.min(.1,(i-hd)/1e3);hd=i;var t=Qe.mode(),n=Fn==="title"?"title":t;n!==fd&&(Fi=0,fd=n),Fi+=e,Ql.push(e),Ql.length>240&&Ql.shift();var r=Qe.state();if(Fn==="title"){var s=dd.p,a=i/1e3;s.ang=a*.12,s.pitch=Math.sin(a*.3)*.15,s.x=5.5+Math.sin(a*.07)*.5,s.z=17.5,ur.render(dd,a,e),ht.isOpen()||ht.open(Fu()),Xe.clearRect(0,0,dt,Cn),ht.render(Xe,Fi)}else if(t==="game"||t==="inter"||t==="victory"){var l=t==="game"&&(!xi||!ri||ht.isOpen())&&!ec;if(!l&&t==="game")for(Da+=e;Da>=La;){if(r.hitstop>0){r.hitstop-=La,Da-=La;continue}if(Qe.update(La),k_(r),Da-=La,Qe.mode()!=="game")break}else Da=0;r=Qe.state(),ur.render(r,i/1e3,l?0:e),r.events.length=0,P_.draw(r,{map:Ms,menu:ht.isOpen(),camera:ur.camera}),t==="inter"?B_(Fi):t==="victory"?z_(Fi):xi?ht.isOpen()?ht.render(Xe,Fi):!ri&&!ec&&(Xe.fillStyle="rgba(0,0,0,0.5)",Xe.fillRect(0,70,dt,24),Re.default.drawText(Xe,"CLICK TO RESUME",dt/2,76,{scale:2,color:"#f0d848",shadow:!0,center:!0})):H_(Fi)}requestAnimationFrame(Td)}md();ht.open(Fu());requestAnimationFrame(Td);ec&&(window.FIREBIRD2=Object.assign({},Qe,{launch:function(i){Qe.startLevel(i,!1),xi=!0,Fn="game",ht.close()},toTitle:Ou,setMap:function(i){Ms=i},frameStats:function(){var i=Ql.slice().sort(function(t,n){return t-n});function e(t){return i.length?i[Math.min(i.length-1,Math.floor(i.length*t))]*1e3:0}return{frames:i.length,p50:e(.5),p95:e(.95),p99:e(.99),info:ur.info().render}},renderInfo:function(){return ur.info()}}));})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
