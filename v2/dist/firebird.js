(()=>{var Tm=Object.create;var td=Object.defineProperty;var bm=Object.getOwnPropertyDescriptor;var Em=Object.getOwnPropertyNames;var wm=Object.getPrototypeOf,Am=Object.prototype.hasOwnProperty;var Sa=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var Rm=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Em(e))!Am.call(i,r)&&r!==t&&td(i,r,{get:()=>e[r],enumerable:!(n=bm(e,r))||n.enumerable});return i};var _s=(i,e,t)=>(t=i!=null?Tm(wm(i)):{},Rm(e||!i||!i.__esModule?td(t,"default",{value:i,enumerable:!0}):t,i));var nd=Sa((FS,Eu)=>{"use strict";var Cm=(function(){function i(N){var O=parseInt(N.slice(1),16),U=O>>16&255,G=O>>8&255,Q=O&255;return(4278190080|Q<<16|G<<8|U)>>>0}function e(N,O,U){var G=document.createElement("canvas");G.width=N,G.height=O;var Q=G.getContext("2d"),q=Q.createImageData(N,O);return new Uint32Array(q.data.buffer).set(U),Q.putImageData(q,0,0),{w:N,h:O,data:U,canvas:G}}function t(N,O,U){U=U||{};for(var G=!!U.mirror,Q=N[0].length,q=0;q<N.length;q++)if(N[q].length!==Q)throw new Error("sprite row "+q+" length "+N[q].length+" != "+Q);for(var j=G?Q*2:Q,fe=N.length,Te=new Uint32Array(j*fe),ye=0;ye<fe;ye++)for(var be=N[ye],Ie=0;Ie<Q;Ie++){var Ye=O[be[Ie]];if(Ye){var et=i(Ye);Te[ye*j+Ie]=et,G&&(Te[ye*j+(j-1-Ie)]=et)}}return e(j,fe,Te)}function n(N,O,U){var G=(N|0)*374761393+(O|0)*668265263+(U|0)*974711;return G=(G^G>>13)*1274126177,((G^G>>16)>>>0)%1e3/1e3}function r(N,O,U){var G=parseInt(N.slice(1),16),Q=parseInt(O.slice(1),16),q=(G>>16&255)+((Q>>16&255)-(G>>16&255))*U,j=(G>>8&255)+((Q>>8&255)-(G>>8&255))*U,fe=(G&255)+((Q&255)-(G&255))*U;return(4278190080|(fe&255)<<16|(j&255)<<8|q&255)>>>0}var s=64;function a(N){for(var O=new Uint32Array(s*s),U=0;U<s;U++)for(var G=0;G<s;G++)O[U*s+G]=N(G,U);return e(s,s,O)}function o(N,O,U,G){return a(function(Q,q){var j=q>>4,fe=j&1?16:0,Te=Q+fe>>5,ye=(q&15)>=14,be=(Q+fe&31)>=30;if(ye||be)return r(G,"#000000",n(Q,q,N)*.4);var Ie=n(Q,q,N)*.5+n(Te*31,j*7,N+9)*.5,Ye=(q&15)<2||(Q+fe&31)<2?.25:0;return r(O,U,Ie*.65+Ye)})}function c(N,O,U){return a(function(G,Q){var q=G>>4,j=Q>>4,fe=n(q,j,N)*6-3,Te=(G+fe)%16<1.5||(Q-fe)%16<1.5,ye=n(G,Q,N+3)*.45+n(q*5,j*3,N+7)*.55;return Te?r(U,"#000000",.5):r(O,U,ye*.7)})}function u(N,O,U){return a(function(G,Q){var q=G>>4&1,j=(G&15)<1||(Q&31)<1,fe=((G&15)===3||(G&15)===12)&&((Q&31)===4||(Q&31)===27),Te=n(G,Q,N)*.3+q*.12+Q/s*.15;return j?r(U,"#000000",.6):fe?r(O,"#ffffff",.35):r(O,U,Te)})}function l(N){return a(function(O,U){var G="#4a5a52",Q="#232c28";if(U<6||U>57)return r("#2a3430","#000000",.3+n(O,U,N)*.2);if(U>=28&&U<=33&&(O&31)>3&&(O&31)<28){var q=U===30||U===31?"#7dff9a":"#2f8a4a";return r(q,"#000000",n(O,U,N)*.2)}var j=(O&31)<2,fe=U>40&&U<54&&(U&3)<2&&(O&31)>6&&(O&31)<26;return j?r(Q,"#000000",.5):fe?r("#1a211e","#000000",.3):r(G,Q,n(O,U,N)*.5)})}function h(N){return a(function(O,U){var G=n(O,U,N)*.4+n(O>>2,U>>2,N+5)*.6,Q=Math.sin(O*.22+Math.sin(U*.13+N)*2.1)+Math.sin(U*.18+O*.05);return Q>1.45?r("#ff7a18","#ffd23e",n(O,U,N+2)):Q>1.2?r("#8a1e08","#ff5a10",.5):r("#4a1410","#1c0605",G)})}function f(N){return a(function(O,U){var G="#5a5f68",Q="#2a2d33",q=Math.abs(O-32)<1,j=(U&15)<2,fe=O<3||O>60||U<3||U>60;if(N&&U>8&&U<20&&!q){var Te=N==="red"?"#d02020":"#2050e0";return r(Te,"#000000",(U===9||U===19?.5:0)+n(O,U,40)*.2)}return q?r("#101216","#000000",.3):fe?r(Q,"#000000",.4):j?r(Q,G,.3):r(G,Q,n(O,U,17)*.4+U/s*.2)})}function p(N){return a(function(O,U){var G="#4f4a42",Q="#28241e",q=O>16&&O<48,j=U>14&&U<50;if(q&&j){var fe=O>24&&O<40,Te=N?U>32&&U<46:U>18&&U<32;return fe&&Te?r(N?"#30d040":"#d03030","#000000",n(O,U,3)*.25):r("#1c1a16","#000000",.3)}var ye=O<2||O>61||U<2||U>61;return ye?r(Q,"#000000",.5):r(G,Q,n(O,U,21)*.5)})}function v(N,O,U){return a(function(G,Q){var q=(G>>4)+(Q>>4)&1,j=(G&15)<1||(Q&15)<1,fe=n(G,Q,N)*.4;return j?r(U,"#000000",.55):r(q?O:U,"#000000",fe+q*.05)})}var y={o:"#1c0e06",b:"#9a5226",d:"#6b3413",c:"#e08a28",h:"#f7b24a",e:"#ffe14a",m:"#3a1006",t:"#f0e6c8",x:"#f0e6c8",r:"#c03018",f:"#ff8a18",g:"#ffd23e"},g=["......tt........",".......tt.......","........oooooooo","........obbbbbbb","........obbddddd","........obbeedbb","........obbbbbbb","........obdmtmbb","........obbmmbbb","........oooooobb","....oooooooooooo","...obbbbbbdccccc","..obbbo.obdccchc","..obbo..obdcchhc","..obbo..obddcccc",".obbo...obbdcccc",".obbo...obbddccc",".otto...obbbdddd",".ott....obbbbddd","........obbbbbbd","........oobbbbbb",".........obbo...",".........obbo...",".........obbo...",".........obbo...",".........oddo...",".........oddo...","........obddo...","........odddo...","......ottdddo...","......ooooooo...","................"],m=g.slice(0,21).concat(["........obbo....","........obbo....","........obbo....","........obbo....","........oddo....","........oddo....",".......obddo....",".......odddo....",".....ottdddo....",".....oooooo.....","................"]),x=["..gf..tt........",".gffg..tt.......",".offo...oooooooo",".otto...obbbbbbb",".obbo...obbddddd",".obbo...obeeedbb",".obbo...obbbbbbb",".obbo...obmmttbb","..obbo..obbmmbbb","..obbo..oooooobb","..obooooooooooo.","...obbbbbdccccc.","....obbobdccchc.","........obdcchhc","........obddcccc","........obbdcccc","........obbddccc","........obbbdddd","........obbbbddd","........obbbbbbd","........oobbbbbb",".........obbo...",".........obbo...",".........obbo...",".........obbo...",".........oddo...",".........oddo...","........obddo...","........odddo...","......ottdddo...","......ooooooo...","................"],A=g.slice();A[5]="........obbxxdbb",A[7]="........obmmmmbb";var S=["................","................","................","................","................","................","......tt........",".......tt.......","........oooooooo","........obbbbbbb","........obxxdddb","........obmmmmbb",".....oooooooobbb","...obbbbbbdccccb","..obbbboobdcccbb",".obbbo..obddccbb",".otto...obbddddb","........obbbbbdd",".......oobbbbbbb","......obbbbbbbdd","................","................","................","................","................","................","................","................","................","................","................","................"],C=["................","................","................","................","................","................","................","................","................","................","................","................","................","......tt........",".......ttoooooo.","......obbbbbbbbo",".....obbxxddmmbo","....obbbbdddbbbo","...obbddccccbbdd","..obbbbbdddbbbbb","................","................","................","................","................","................","................","................","................","................","................","................"],I=["................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","..........tt....","....oo....ott...","...obbdoooobbdo.","..obbddbbbdddbbo",".orrbdddddbbdrro",".orrrbbdddbrrro.","..orrrrrrrrrro..","...ooooooooooo..","................","................"];function L(N){var O={o:"#200a10",p:"#d06a8a",q:"#9a3d5e",k:"#e898a8",t:"#f2ead0",m:"#41101c",e:"#ffd23e",x:"#f2ead0",r:"#b02030"};if(N)for(var U in N)O[U]=N[U];return O}var M=["................","................","......oooooooooo",".....opppppppppp","....oppkpppppppp","....opppeepppppp","....oppppppppppp","....opmmmmmmmmmm","....opmtmtmtmtmt","....opmmmmmmmmmm","....optmtmtmtmtm","....opqqqqqqqqqq",".....ooooooooooo","...oppppqqpppppp","..opppppoqpppppp","..opppo.oqpppppp","..oppo..oqqppppp","..otto..oqqqpppp","..ott...oqqqqppp","........oqqqqqpp","........ooqqqqqp",".........oqqqo..",".........oqqqo..",".........oqqo...","........oqqqo...","........ottto...","........ooooo...","................","................","................","................","................"],T=M.slice(0,21).concat(["........oqqqo...","........oqqqo...","........oqqo....",".......oqqqo....",".......ottto....",".......ooooo....","................","................","................","................"]),D=["................","......oooooooooo",".....opppppppppp","....oppkpppppppp","....opppeepppppp","....opmmmmmmmmmm","....opmttmttmttm","....opmmmmmmmmmm","....opmmmmmmmmmm","....opmmmmmmmmmm","....opmttmttmttm","....opmmmmmmmmmm","....opqqqqqqqqqq","...oppppqqpppppp","..opppppoqpppppp","..opppo.oqpppppp","..oppo..oqqppppp","..otto..oqqqpppp","..ott...oqqqqppp","........oqqqqqpp","........ooqqqqqp",".........oqqqo..",".........oqqqo..",".........oqqo...","........oqqqo...","........ottto...","........ooooo...","................","................","................","................","................"],H=M.slice();H[5]="....opppxxpppppp";var _=["................","................","................","................","................","................","................","......oooooooooo",".....opppppppppp","....oppxxppppppp","....opmmmmmmmmmm","....opmtmtmtmtmt","....opqqqqqqqqqq","...opppppqqppppp","..oppppppqqquppp".replace("u","q"),"..oppoooqqqqqppp","..oo...oqqqqqqpp",".......ooqqqqqqp","........oqqqqoo.","................","................","................","................","................","................","................","................","................","................","................","................","................"],w=["................","................","................","................","................","................","................","................","................","................","................","................","................","................","......ooooooooo.",".....oppppppppqo","....opxxpmmttppo","...oppppqqqqppqo","..oqqppppppqqqoo","...ooooooooooo..","................","................","................","................","................","................","................","................","................","................","................","................"],P=["................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................",".......oo.......",".....ooppoo.tt..","...oqpppppqoot..","..oqqpmmttppqqo.",".orrqqppppqqrro.",".orrrqqqqqrrro..","..orrrrrrrrro...","...oooooooooo...","................","................"],k={o:"#06141c",h:"#1e8aa0",H:"#6fe0ec",s:"#d8fff8",v:"#ffd23e",V:"#fff6b0",c:"#157a8a",C:"#3fd8c8",g:"#ffd23e",Y:"#fff6b0"},Y=["..........",".....ooooo","...oohhhhh","..ohhHHhhh","..ohHhhhhh",".ohhhhoooo",".ohhhosvvv",".ohhhosvVV",".ohhhossss",".ohhhossss",".ohhhhosss","..ohhhooss","...ooooooo",".....ooccc","...ooccccg","..occcccCg",".occcCcccg",".occcCccgY",".occcCccgY",".occ.Ccccg",".oso.occcg",".oso.occcc","..o..oCCCC",".....occcc",".....occo.",".....occo.",".....occo.",".....oCco.",".....occo.",".....occo.",".....occo.","....ogggo.","....ooooo.",".........."],ne=Y.slice(0,24).concat(["....occo..","....occo..","...occo...","...oCco...","...occo...","..occo....","..occo....",".ogggo....",".ooooo....",".........."]),te=Y.slice();te[13]=".o...ooccc",te[14]=".so.occccg",te[15]=".so.occcCg",te[16]=".oc.occccg",te[19]="..o..Ccccg",te[20]=".....occcg",te[21]=".....occcc";function le(N,O,U){return N.map(function(G,Q){for(var q="",j=0;j<G.length;j++)q+=G[j]!=="."&&n(j,Q,U)<O?G[j]:".";return q})}function ue(N){var O={};for(var U in k)O[U]=k[U];if(N)for(var G in N)O[G]=N[G];return O}function he(N){var O={o:"#1a1008",f:"#e85818",F:"#ffa018",s:"#d8a06a",S:"#a8744a",w:"#f0ead8",k:"#28221a",m:"#5a1408",t:"#e8e0c8",r:"#c01818",c:"#b84a10",C:"#7e2e08",g:"#888078",x:"#301010"},U=N.gray?{s:"#9a9488",S:"#6e6a60"}:{};for(var G in U)O[G]=U[G];var Q=[".osskwwkssss",".osskwkksss.".replace(".$",""),".ossskksssss"],q=[".osssookssss",".osskwkksss.",".ossskksssss"],j=[".osssssossss",".ossooosssss",".osssssossss"],fe=[".osskoskssss",".osssksossss",".osskoskssss"],Te=["..osssssssss","..osssmmmmmm","..osssssssss"],ye=["..osssssssss","..ossmmmmmmm","..osSmmsssss"],be=["..osssmmmmmm","..ossmtttttt","..osssmmmmmm"],Ie=["..ossmmmmmss","..osmmttmmss","..ossmmmmmss"],Ye=N.eyes==="squint"?q:N.eyes==="shut"?j:N.eyes==="x"?fe:Q,et=N.mouth==="grim"?ye:N.mouth==="grin"?be:N.mouth==="ouch"?Ie:Te,X=[".....ffF....","...fFffffF..","..ffFfffffF.","..offffffff.",".offFffffffF",".offffffffff",".offosssssss",".oosssssssss","..ossssssSSS","..osssssssss",Ye[0],Ye[1],Ye[2],"..osssssssss","..ossssssSss","..osssssSSss","..ossssssSss","..osssssssss",et[0],et[1],et[2],"..osssssssss","...ossssssSS","...ossssssss","....oossssss","..ooccoosSSS".replace("..",".o"),".occcccooooo","occCcccccccc"];return X=X.map(function(we){for(we=we.replace(/\$/g,""),we.length>12&&(we=we.slice(0,12));we.length<12;)we+=".";return we}),N.blood>=1&&(X[8]="..osrrsssSSS".slice(0,12),X[9]="..ossrssssss"),N.blood>=2&&(X[14]="..osrssssrss",X[15]="..orrssSSrss",X[21]="..osrsssssrs"),N.blood>=3&&(X[6]=".offosrrssss",X[13]="..orrsssrrss",X[22]="...orrsssrSS".slice(0,12)),t(X,O,{mirror:!0})}var De={o:"#0e0c0a",g:"#4a4e56",G:"#6a707c",d:"#26282e",s:"#d8a06a",S:"#a8744a",w:"#7a4a28",W:"#5a3418",y:"#c8b040",k:"#16181c"},Ue=["............","....oooo....","..oossssoo..",".ossssssss o".replace(" ","s"),".osssSsssss.","ossssSSssss.","osssssSssss.","ossssssssss.","osSSsssssss.","ossssssssss.",".ossssssss..",".ossssssss..","..ossssss...","..oswwwws...","..owwWWww...","..owWWWWw...","..owwwwww...","...oooooo..."].map(function(N){for(;N.length<12;)N+=".";return N.slice(0,12)}),dt=["...........ooo","..........ookk","..........ogkk","..........ogGd","..........ogGd",".........ooGgd",".........ogGGd",".........ogGGd",".........ogGGd",".........odddd",".........ogGGd",".........ogGGd",".........odddd","..........oggd","..........oggd","..........ogdd",".......ooooddd",".....oossssodd","....ossssssodd","...ossssSssood","..osssssSSssod","..ossssssSssod","..osSSssssssod","..ossssssssood","...osssssssso.","...osssssssso.","....oossssoo..","......oooo...."],je=[".........ooo","........ookk","........odkk","........odgd","........odgd","........odgd","........odgd","........odgd","........odgd","........odgd","........oddd",".......ooddd","......oWwwdd","......oWwwwd","......oWWwwd","......oWWwwd","......ooWWwd",".......ooWWd","........oddd","........oggd",".....oooogdd","...oosssoggd","..ossssssogd","..ossSsssogd",".osssSSssood",".ossssssssod",".osSSsssssod",".ossssssssod","..ossssssso.","..ossssssso.","...oosssoo..",".....oooo..."];function it(N,O,U){for(var G=new Uint32Array(N*O),Q=(N-1)/2,q=(O-1)/2,j=0;j<O;j++)for(var fe=0;fe<N;fe++){var Te=(fe-Q)/(N/2),ye=(j-q)/(O/2),be=Math.sqrt(Te*Te+ye*ye),Ie=U(be,fe,j);Ie&&(G[j*N+fe]=Ie)}return e(N,O,G)}function de(N){return it(12,12,function(O,U,G){var Q=n(U,G,N)*.3;return O+Q<.38?i("#fff8d0"):O+Q<.68?i("#ffd23e"):O+Q<.95?i("#ff7a18"):0})}function me(N){return it(14,14,function(O,U,G){var Q=n(U,G,N)*.3;return O+Q<.38?i("#eaffd0"):O+Q<.68?i("#8aff3e"):O+Q<.95?i("#2fa818"):0})}function Ee(N,O,U){return it(N,N,function(G,Q,q){var j=n(Q,q,O)*.55;return G+j<.3*U?i("#fff8d0"):G+j<.55*U?i("#ffd23e"):G+j<.8*U?i("#ff7a18"):G+j<1*U?i("#a83010"):0})}function rt(N,O){return it(O?8:6,O?8:6,function(U,G,Q){var q=n(G,Q,N)*.4;return U+q<.5?i("#c8c4bc"):U+q<.9?i("#78746c"):0})}function Be(N,O){return it(O?8:6,O?8:6,function(U,G,Q){var q=n(G,Q,N)*.45;return U+q<.45?i("#e04020"):U+q<.9?i("#901810"):0})}function nt(){for(var N=16,O=22,U=new Uint32Array(N*O),G=0;G<O;G++)for(var Q=0;Q<N;Q++){var q=Math.abs((Q-7.5)/7.5);if(!(q>1)){var j=q>.88||G===0||G===O-1,fe=1-q*q*.75,Te=G===4||G===16,ye=G>=8&&G<=12,be=ye?"#c05010":"#5c554c";G>=1&&G<=2&&(be="#3a352e");var Ie=r(be,"#000000",1-fe+(Te?.35:0)+n(Q,G,77)*.2);j&&(Ie=i("#16130f")),G===1&&q<.6&&n(Q,G,8)>.4&&(Ie=i("#ff9a28")),U[G*N+Q]=Ie}}return e(N,O,U)}function V(N){for(var O=10,U=28,G=new Uint32Array(O*U),Q=12;Q<28;Q++)for(var q=4;q<=5;q++)G[Q*O+q]=i(Q>24?"#3a2812":"#6a4a22");G[12*O+3]=i("#8a6432"),G[12*O+6]=i("#8a6432");for(var j=0;j<12;j++)for(var fe=0;fe<O;fe++){var Te=(fe-4.5)/4.2,ye=(j-8)/8,be=Math.sqrt(Te*Te*1.6+ye*ye),Ie=n(fe,j,N)*.5;be+Ie<.45?G[j*O+fe]=i("#fff0b0"):be+Ie<.75?G[j*O+fe]=i("#ffd23e"):be+Ie<1&&(G[j*O+fe]=i("#ff7a18"))}return e(O,U,G)}function Z(N,O,U,G,Q){for(var q=new Uint32Array(N*O),j=0;j<O;j++)for(var fe=0;fe<N;fe++){var Te=fe===0||j===0||fe===N-1||j===O-1,ye=Te?i("#14120e"):r(U,G,j/O*.6+n(fe,j,5)*.15);q[j*N+fe]=ye}return Q&&Q(q,N,O),e(N,O,q)}function pe(N){return function(O,U,G){for(var Q=U>>1,q=G>>1,j=i(N),fe=-(G>>2);fe<=G>>2;fe++)O[(q+fe)*U+Q]=j,O[(q+fe)*U+Q-1]=j;for(var Te=-(U>>2);Te<=U>>2;Te++)O[q*U+Q+Te]=j,O[(q-1)*U+Q+Te]=j}}function xe(N){var O=["oooooooo","occccccb".replace("b","o"),"occwwcco","occwwcco","occcccco","occcccco","ocwwwwco","occcccco","occcccco","oooooooo"];return t(O,{o:"#14120e",c:N,w:"#f0ead8"})}function se(){var N=30,O=10,U=new Uint32Array(N*O);function G(fe,Te,ye){fe>=0&&fe<N&&Te>=0&&Te<O&&(U[Te*N+fe]=i(ye))}for(var Q=2;Q<22;Q++)G(Q,3,"#3a3e46"),G(Q,4,"#5a5f68"),G(Q,5,"#26282e");for(var q=8;q<15;q++)G(q,6,"#5a3418");for(var j=21;j<29;j++)G(j,4+(j-21>>1),"#5a3418"),G(j,5+(j-21>>1),"#7a4a28");return G(1,3,"#16130f"),G(1,4,"#16130f"),e(N,O,U)}function ie(){return it(14,14,function(N,O,U){return N<.3?i("#fff8d0"):N<.6?i("#ffd23e"):N<.85?i("#ff7a18"):N<1?i("#a03008"):0})}function $(){return it(20,20,function(N,O,U){var G=Math.atan2(U-9.5,O-9.5),Q=.55+.45*Math.abs(Math.sin(G*4));return N<.35*Q?i("#fff8d0"):N<.7*Q?i("#ffd23e"):N<1*Q?i("#ff7a18"):0})}var ge={A:[2,5,7,5,5],B:[6,5,6,5,6],C:[3,4,4,4,3],D:[6,5,5,5,6],E:[7,4,6,4,7],F:[7,4,6,4,4],G:[3,4,5,5,3],H:[5,5,7,5,5],I:[7,2,2,2,7],J:[1,1,1,5,2],K:[5,6,4,6,5],L:[4,4,4,4,7],M:[5,7,5,5,5],N:[6,5,5,5,5],O:[2,5,5,5,2],P:[6,5,6,4,4],Q:[2,5,5,6,3],R:[6,5,6,6,5],S:[3,4,2,1,6],T:[7,2,2,2,2],U:[5,5,5,5,7],V:[5,5,5,5,2],W:[5,5,5,7,5],X:[5,5,2,5,5],Y:[5,5,2,2,2],Z:[7,1,2,4,7],0:[7,5,5,5,7],1:[2,6,2,2,7],2:[6,1,2,4,7],3:[6,1,2,1,6],4:[5,5,7,1,1],5:[7,4,6,1,6],6:[3,4,6,5,2],7:[7,1,2,2,2],8:[7,5,7,5,7],9:[2,5,3,1,6]," ":[0,0,0,0,0],".":[0,0,0,0,2],",":[0,0,0,2,4],"!":[2,2,2,0,2],"?":[6,1,2,0,2],":":[0,2,0,2,0],"-":[0,0,7,0,0],"+":[0,2,7,2,0],"%":[5,1,2,4,5],"/":[1,1,2,4,4],"'":[2,2,0,0,0],_:[0,0,0,0,7],">":[4,2,1,2,4],"<":[1,2,4,2,1],'"':[5,5,0,0,0],"=":[0,7,0,7,0],"(":[1,2,2,2,1],")":[4,2,2,2,4],"*":[0,5,2,5,0],"#":[5,7,5,7,5],"^":[2,5,0,0,0],"&":[2,5,2,5,3]};function Ce(N,O,U,G,Q){Q=Q||{};var q=Q.scale||1,j=Q.color||"#e8e0c8",fe=Q.shadow;if(O=String(O).toUpperCase(),Q.center&&(U-=Math.floor(We(O,q)/2)),Q.right&&(U-=We(O,q)),fe){var Te=typeof fe=="string"?fe:"#000000";Ce(N,O,U+q,G+q,{scale:q,color:Te})}N.fillStyle=j;for(var ye=0;ye<O.length;ye++){for(var be=ge[O[ye]]||ge["?"],Ie=0;Ie<5;Ie++)for(var Ye=be[Ie],et=0;et<3;et++)Ye&4>>et&&N.fillRect(U+et*q,G+Ie*q,q,q);U+=4*q}}function We(N,O){return String(N).length*4*(O||1)-(O||1)}var z={};z.tex={1:o(1,"#8a4232","#4a1e14","#2a1812"),2:c(2,"#8a8578","#4a463c"),3:u(3,"#5a5f68","#26282e"),4:l(4),5:h(5),6:f(null),7:f("red"),8:f("blue"),9:p(!1),10:p(!0),11:o(1,"#8a4232","#4a1e14","#2a1812")},z.floors={slab:v(11,"#4e4a42","#38342c"),tech:v(12,"#3c4440","#2a302c"),hell:a(function(N,O){var U=n(N,O,13)*.5+n(N>>2,O>>2,14)*.5,G=Math.sin(N*.19+Math.sin(O*.11)*2)+Math.sin(O*.15);return G>1.5?r("#ff7a18","#ffd23e",U):r("#3a100c","#180404",U)}),ceilDark:v(15,"#2e2b26","#201d18"),ceilTech:a(function(N,O){var U=(N&31)>12&&(N&31)<20&&(O&31)>12&&(O&31)<20;return U?r("#fff0c0","#c0a860",n(N,O,16)*.3):r("#2a2e2c","#1a1d1b",n(N,O,16)*.5)}),ceilHell:a(function(N,O){return r("#241010","#100404",n(N,O,17)*.6)})};var ct=y,Xe=L(null),F=L({p:"#c8502a",q:"#7e2412",k:"#e8804a",e:"#a0fFff".toLowerCase()});z.mobs={imp:{walkA:t(g,ct,{mirror:!0}),walkB:t(m,ct,{mirror:!0}),attack:t(x,ct,{mirror:!0}),pain:t(A,ct,{mirror:!0}),die1:t(S,ct,{mirror:!0}),die2:t(C,ct,{mirror:!0}),corpse:t(I,ct,{mirror:!0})},gnasher:{walkA:t(M,Xe,{mirror:!0}),walkB:t(T,Xe,{mirror:!0}),attack:t(D,Xe,{mirror:!0}),pain:t(H,Xe,{mirror:!0}),die1:t(_,Xe,{mirror:!0}),die2:t(w,Xe,{mirror:!0}),corpse:t(P,Xe,{mirror:!0})},knight:{walkA:t(M,F,{mirror:!0}),walkB:t(T,F,{mirror:!0}),attack:t(D,F,{mirror:!0}),pain:t(H,F,{mirror:!0}),die1:t(_,F,{mirror:!0}),die2:t(w,F,{mirror:!0}),corpse:t(P,F,{mirror:!0})},riley:{walkA:t(Y,k,{mirror:!0}),walkB:t(ne,k,{mirror:!0}),attack:t(te,ue({v:"#ffffff",V:"#ffffff",Y:"#ffffff",g:"#fff6b0"}),{mirror:!0}),pain:t(Y,ue({c:"#e8fffc",C:"#ffffff",h:"#9ef0f8"}),{mirror:!0}),shield:t(Y,ue({c:"#c89018",C:"#ffd23e",h:"#e0a020",H:"#fff0a0"}),{mirror:!0}),die1:t(le(Y,.6,71),ue({c:"#6fe0ec"}),{mirror:!0}),die2:t(le(Y,.22,72),ue({c:"#d8fff8",h:"#d8fff8"}),{mirror:!0}),corpse:null}},z.things={barrel:nt(),torchA:V(31),torchB:V(87),stim:Z(10,8,"#e8e4dc","#a8a49c",pe("#d02020")),medkit:Z(16,12,"#e8e4dc","#a8a49c",pe("#d02020")),clip:Z(10,8,"#7a7468","#4a463c",function(N,O,U){for(var G=2;G<O-2;G+=2)N[2*O+G]=i("#c8a030")}),shells:Z(14,9,"#b03020","#5e1810",function(N,O,U){for(var G=2;G<O-2;G+=2)N[3*O+G]=i("#c8a030"),N[4*O+G]=i("#c8a030")}),armor:t(["...oooo.","..oggggo",".ogggggg",".oggGGgg",".ogggggg",".ogggggg","..ogggg o".replace(" ",""),"..oggggg","...ooooo"].map(function(N){for(;N.length<8;)N+=".";return N.slice(0,8)}),{o:"#14120e",g:"#3a7a30",G:"#6ab858"},{mirror:!0}),keyRed:xe("#d02020"),keyBlue:xe("#2050e0"),shotgunPickup:se(),orb:ie(),fireballA:de(41),fireballB:de(42),greenballA:me(43),greenballB:me(44),boom1:Ee(24,51,.7),boom2:Ee(28,52,1),boom3:Ee(28,53,1.25),puffA:rt(61,!0),puffB:rt(62,!1),bloodA:Be(63,!0),bloodB:Be(64,!1)},z.faces={ok:he({eyes:"open",mouth:"calm",blood:0}),hurt1:he({eyes:"open",mouth:"grim",blood:1}),hurt2:he({eyes:"squint",mouth:"grim",blood:2}),hurt3:he({eyes:"squint",mouth:"ouch",blood:3}),pain:he({eyes:"shut",mouth:"ouch",blood:1}),grin:he({eyes:"open",mouth:"grin",blood:0}),dead:he({eyes:"x",mouth:"ouch",blood:3,gray:!0})},z.guns={fist:t(Ue,De,{mirror:!0}),pistol:t(dt,De,{mirror:!0}),shotgun:t(je,De,{mirror:!0}),flash:$()};var E={};return z.secretTex=function(N){if(E[N])return E[N];for(var O=z.tex[N]||z.tex[1],U=new Uint32Array(O.data),G=0,Q=0;Q<U.length;Q++){var q=U[Q];G+=(q>>16&255)+(q>>8&255)+(q&255)}var j=G/U.length/3>70;function fe(Ie){var Ye=U[Ie],et=Ye>>16&255,X=Ye>>8&255,we=Ye&255;j?(et*=.35,X*=.35,we*=.35):(et=et*.5+110,X=X*.5+95,we=we*.5+80),U[Ie]=(4278190080|(et&255)<<16|(X&255)<<8|we&255)>>>0}for(var Te=22,ye=6;ye<58;ye++)Te+=ye%7===0?1:ye%11===0?-1:0,fe(ye*64+Te),fe(ye*64+Te+1);for(var be=0;be<7;be++)fe((30+be)*64+Te+2+be);return E[N]={w:64,h:64,data:U},E[N]},z.drawText=Ce,z.textWidth=We,z.hex=i,z})();typeof Eu!="undefined"&&(Eu.exports=Cm)});var id=Sa((BS,wu)=>{"use strict";var Im=(function(){var i=null,e=null,t=null,n=null,r=!0,s=!1,a=.5;try{r=localStorage.getItem("firebird.music")!=="off"}catch{}function o(){if(i)return i.state==="suspended"&&i.resume(),!0;try{var _=window.AudioContext||window.webkitAudioContext;return _?(i=new _,e=i.createGain(),e.gain.value=a,e.connect(i.destination),t=i.createGain(),t.gain.value=.9,t.connect(e),n=i.createGain(),n.gain.value=.3,n.connect(e),!0):!1}catch{return!1}}function c(_){if(i){var w=i.currentTime+(_.delay||0),P=i.createOscillator();P.type=_.type||"square",P.frequency.setValueAtTime(_.f0,w),_.f1&&P.frequency.exponentialRampToValueAtTime(Math.max(20,_.f1),w+_.dur);var k=i.createGain(),Y=_.gain||.3;k.gain.setValueAtTime(1e-4,w),k.gain.exponentialRampToValueAtTime(Y,w+(_.attack||.008)),k.gain.exponentialRampToValueAtTime(1e-4,w+_.dur);var ne=t;if(_.pan&&i.createStereoPanner){var te=i.createStereoPanner();te.pan.value=Math.max(-1,Math.min(1,_.pan)),k.connect(te),te.connect(_.bus||t),ne=null}else k.connect(_.bus||t);if(_.wobble){var le=i.createOscillator(),ue=i.createGain();le.frequency.value=_.wobble,ue.gain.value=_.f0*.25,le.connect(ue),ue.connect(P.frequency),le.start(w),le.stop(w+_.dur)}P.connect(k),P.start(w),P.stop(w+_.dur+.02)}}var u=null;function l(){if(u)return u;var _=i.sampleRate*1.5;u=i.createBuffer(1,_,i.sampleRate);for(var w=u.getChannelData(0),P=0;P<_;P++)w[P]=Math.random()*2-1;return u}function h(_){if(i){var w=i.currentTime+(_.delay||0),P=i.createBufferSource();P.buffer=l(),P.loop=!0;var k=i.createBiquadFilter();k.type=_.type||"lowpass",k.frequency.setValueAtTime(_.f0||1e3,w),_.f1&&k.frequency.exponentialRampToValueAtTime(Math.max(30,_.f1),w+_.dur),k.Q.value=_.q||.8;var Y=i.createGain(),ne=_.gain||.3;if(Y.gain.setValueAtTime(1e-4,w),Y.gain.exponentialRampToValueAtTime(ne,w+(_.attack||.006)),Y.gain.exponentialRampToValueAtTime(1e-4,w+_.dur),P.connect(k),k.connect(Y),_.pan&&i.createStereoPanner){var te=i.createStereoPanner();te.pan.value=Math.max(-1,Math.min(1,_.pan)),Y.connect(te),te.connect(t)}else Y.connect(t);P.start(w),P.stop(w+_.dur+.02)}}var f={pistol:function(_,w){h({dur:.14,gain:.5*_,f0:2400,f1:300,pan:w}),c({f0:220,f1:90,dur:.08,type:"square",gain:.2*_,pan:w})},shotgun:function(_,w){h({dur:.38,gain:.8*_,f0:1600,f1:120,pan:w}),c({f0:130,f1:45,dur:.3,type:"sawtooth",gain:.35*_,pan:w})},pump:function(_,w){h({dur:.05,gain:.3*_,f0:900,type:"bandpass",q:2,delay:0,pan:w}),h({dur:.05,gain:.3*_,f0:700,type:"bandpass",q:2,delay:.13,pan:w})},punch:function(_,w){h({dur:.1,gain:.25*_,f0:500,f1:150,pan:w}),c({f0:90,f1:50,dur:.1,type:"sine",gain:.4*_,pan:w})},whiff:function(_,w){h({dur:.12,gain:.15*_,f0:600,f1:1400,type:"bandpass",q:1.5,pan:w})},doorOpen:function(_,w){h({dur:.5,gain:.22*_,f0:200,f1:500,pan:w}),c({f0:70,f1:130,dur:.5,type:"sawtooth",gain:.12*_,pan:w})},doorClose:function(_,w){h({dur:.4,gain:.2*_,f0:400,f1:150,pan:w}),c({f0:120,f1:60,dur:.4,type:"sawtooth",gain:.12*_,pan:w}),c({f0:60,dur:.08,type:"sine",gain:.3*_,delay:.38,pan:w})},locked:function(_,w){c({f0:150,dur:.09,type:"square",gain:.25*_,pan:w}),c({f0:110,dur:.12,type:"square",gain:.25*_,delay:.11,pan:w})},switchFlip:function(_,w){h({dur:.06,gain:.3*_,f0:1200,type:"bandpass",q:2,pan:w}),c({f0:90,f1:55,dur:.18,type:"square",gain:.3*_,delay:.05,pan:w})},pickup:function(_,w){c({f0:660,dur:.06,type:"square",gain:.15*_,pan:w}),c({f0:880,dur:.08,type:"square",gain:.15*_,delay:.06,pan:w})},health:function(_,w){c({f0:440,dur:.08,type:"sine",gain:.25*_,pan:w}),c({f0:587,dur:.12,type:"sine",gain:.25*_,delay:.07,pan:w})},keyPickup:function(_,w){[523,659,784,1047].forEach(function(P,k){c({f0:P,dur:.09,type:"square",gain:.16,delay:k*.07,pan:w})})},weaponUp:function(_,w){[180,260,380,520].forEach(function(P,k){c({f0:P,dur:.08,type:"sawtooth",gain:.18,delay:k*.05,pan:w})})},secret:function(_,w){[880,1108,1318,1760].forEach(function(P,k){c({f0:P,dur:.14,type:"triangle",gain:.2,delay:k*.09,pan:w})})},orb:function(_,w){[220,330,440,660,880].forEach(function(P,k){c({f0:P,dur:.2,type:"triangle",gain:.2,delay:k*.08,pan:w})})},impSight:function(_,w){c({f0:110,f1:55,dur:.5,type:"sawtooth",gain:.3*_,wobble:9,pan:w})},knightSight:function(_,w){c({f0:75,f1:35,dur:.9,type:"sawtooth",gain:.4*_,wobble:6,pan:w})},rileySight:function(_,w){[523,659,784,1047].forEach(function(P,k){c({f0:P,dur:.12,type:"triangle",gain:.22*_,delay:k*.07,pan:w})})},rileyTalk:function(_,w){c({f0:880,f1:1320,dur:.06,type:"square",gain:.08}),c({f0:1320,dur:.05,type:"square",gain:.07,delay:.07})},rileyShoot:function(_,w){c({f0:1400,f1:500,dur:.18,type:"triangle",gain:.25*_,pan:w})},rileyShield:function(_,w){c({f0:300,f1:900,dur:.3,type:"sine",gain:.3*_,wobble:18,pan:w})},rileyDerez:function(_,w){[1568,1319,1047,784,659,523,392].forEach(function(P,k){c({f0:P,dur:.14,type:"triangle",gain:.2,delay:k*.09,pan:w})})},impShoot:function(_,w){h({dur:.22,gain:.25*_,f0:400,f1:1200,type:"bandpass",q:1.5,pan:w})},fireExplode:function(_,w){h({dur:.3,gain:.4*_,f0:900,f1:100,pan:w})},barrelBoom:function(_,w){h({dur:.7,gain:.9*_,f0:1400,f1:60,pan:w}),c({f0:65,f1:28,dur:.6,type:"sine",gain:.6*_,pan:w})},enemyPain:function(_,w){c({f0:200,f1:120,dur:.13,type:"square",gain:.22*_,pan:w})},enemyDie:function(_,w){c({f0:170,f1:40,dur:.5,type:"sawtooth",gain:.3*_,wobble:12,pan:w}),h({dur:.25,gain:.2*_,f0:700,f1:150,delay:.05,pan:w})},playerPain:function(_,w){c({f0:170,f1:90,dur:.16,type:"square",gain:.3,pan:w}),h({dur:.1,gain:.15,f0:500,f1:200,pan:w})},playerDie:function(_,w){c({f0:220,f1:28,dur:1.3,type:"sawtooth",gain:.4,wobble:5,pan:w})},noAmmo:function(_,w){h({dur:.03,gain:.2,f0:1800,type:"bandpass",q:3,pan:w})},pistol2:function(_,w){c({f0:160,f1:55,dur:.12,type:"sine",gain:.45*_,pan:w}),h({dur:.05,gain:.55*_,f0:5200,f1:1800,type:"highpass",q:.7,pan:w}),h({dur:.32,gain:.22*_,f0:1400,f1:180,pan:w,delay:.02}),c({f0:2400,f1:1100,dur:.09,type:"triangle",gain:.1*_,pan:w})},shotgun2:function(_,w){c({f0:110,f1:32,dur:.34,type:"sine",gain:.8*_,pan:w}),c({f0:70,f1:30,dur:.22,type:"triangle",gain:.4*_,pan:w}),h({dur:.09,gain:.8*_,f0:4200,f1:900,type:"highpass",q:.6,pan:w}),h({dur:.6,gain:.35*_,f0:1100,f1:90,pan:w,delay:.03}),[[392,.12],[392*2.76,.06],[392*5.4,.03]].forEach(function(P){c({f0:P[0],f1:P[0]*.995,dur:.9,type:"sine",gain:P[1]*_,pan:w,delay:.02})})},hitFlesh:function(_,w){c({f0:210,f1:90,dur:.07,type:"triangle",gain:.3*_,pan:w}),h({dur:.05,gain:.28*_,f0:2600,type:"bandpass",q:1.6,pan:w})},killConfirm:function(_,w){c({f0:90,f1:40,dur:.18,type:"sine",gain:.5*_,pan:w}),h({dur:.08,gain:.3*_,f0:5200,f1:2600,type:"highpass",q:.8,pan:w}),c({f0:660,f1:990,dur:.25,type:"sine",gain:.08*_,pan:w,delay:.04}),c({f0:990,f1:1480,dur:.3,type:"sine",gain:.05*_,pan:w,delay:.1})},ricochet:function(_,w){var P=1800+Math.random()*2400;c({f0:P,f1:P*.55,dur:.14+Math.random()*.1,type:"sine",gain:.08*_,pan:w})},casingTink:function(_,w){var P=3200+Math.random()*1600;c({f0:P,f1:P*.9,dur:.05,type:"triangle",gain:.05*_,pan:w})},tally:function(_,w){c({f0:990,dur:.03,type:"square",gain:.12,pan:w})},menu:function(_,w){c({f0:520,dur:.05,type:"square",gain:.15,pan:w})},menuPick:function(_,w){c({f0:520,dur:.06,type:"square",gain:.18}),c({f0:780,dur:.09,type:"square",gain:.18,delay:.06})}};function p(_,w,P){if(!(!i||i.state==="suspended")){var k=f[_];if(k){var Y=1/(1+(w||0)*.13);if(!(Y<.04))try{k(Y,P||0)}catch{}}}}var v=168,y=60/v/4,g=[164.81,164.81,146.83,130.81,123.47,130.81,146.83,155.56],m=null,x=0,A=0;function S(_,w,P){var k=i.createOscillator(),Y=i.createOscillator();k.type="sawtooth",Y.type="square",k.frequency.value=w,Y.frequency.value=w*.5;var ne=i.createBiquadFilter();ne.type="lowpass",ne.frequency.setValueAtTime(P?1400:800,_),ne.frequency.exponentialRampToValueAtTime(200,_+y*1.8);var te=i.createGain();te.gain.setValueAtTime(1e-4,_),te.gain.exponentialRampToValueAtTime(P?.5:.34,_+.005),te.gain.exponentialRampToValueAtTime(1e-4,_+y*(P?1.9:.9)),k.connect(ne),Y.connect(ne),ne.connect(te),te.connect(n),k.start(_),k.stop(_+y*2),Y.start(_),Y.stop(_+y*2)}function C(_,w){if(w==="kick"){var P=i.createOscillator();P.type="sine",P.frequency.setValueAtTime(110,_),P.frequency.exponentialRampToValueAtTime(40,_+.1);var k=i.createGain();k.gain.setValueAtTime(.5,_),k.gain.exponentialRampToValueAtTime(.001,_+.12),P.connect(k),k.connect(n),P.start(_),P.stop(_+.13)}else{var Y=i.createBufferSource();Y.buffer=l(),Y.loop=!0;var ne=i.createBiquadFilter();ne.type="highpass",ne.frequency.value=w==="snare"?1800:6e3;var te=i.createGain();te.gain.setValueAtTime(w==="snare"?.3:.12,_),te.gain.exponentialRampToValueAtTime(.001,_+(w==="snare"?.09:.03)),Y.connect(ne),ne.connect(te),te.connect(n),Y.start(_),Y.stop(_+.1)}}function I(){if(!(!s||!i)){for(;x<i.currentTime+.15;){var _=A%16,w=Math.floor(A/16),P=_>>2,k=_&3,Y=82.41;k===0||k===2?S(x,Y,!1):k===3&&S(x,g[(w*4+P)%g.length],!0),(_===0||_===8)&&C(x,"kick"),(_===4||_===12)&&C(x,"snare"),(_&1)===0&&C(x,"hat"),x+=y,A++}m=setTimeout(I,40)}}function L(){!i||!r||s||(s=!0,x=i.currentTime+.05,A=0,I())}function M(){s=!1,m&&(clearTimeout(m),m=null)}function T(_){r=!!_;try{localStorage.setItem("firebird.music",r?"on":"off")}catch{}return r?L():M(),r}function D(){return T(!r)}function H(_){a=Math.max(0,Math.min(1,_))*.72,e&&(e.gain.value=a)}return{init:o,play:p,startMusic:L,stopMusic:M,toggleMusic:D,setMusic:T,setVolume:H,isMusicOn:function(){return r}}})();typeof wu!="undefined"&&(wu.exports=Im)});var rd=Sa((zS,Au)=>{"use strict";var Pm=(function(){var i="firebird.settings.v1",e="firebird.progress.v1",t={sens:5,volume:7,crosshair:!0,tips:!0,shake:!0,goalMarker:!0,difficulty:1,seenTips:{}};function n(){try{return window.localStorage}catch{return null}}function r(f){var p=n();if(!p)return null;try{var v=JSON.parse(p.getItem(f));return v&&typeof v=="object"?v:null}catch{return null}}function s(f,p){var v=n();if(v)try{v.setItem(f,JSON.stringify(p))}catch{}}var a={},o=r(i)||{};for(var c in t){var u=c in o&&o[c]!==null&&typeof o[c]==typeof t[c];a[c]=u?o[c]:t[c]}a.sens=Math.max(1,Math.min(10,a.sens|0)),a.volume=Math.max(0,Math.min(10,a.volume|0)),a.difficulty=Math.max(0,Math.min(2,a.difficulty|0));var l=r(e)||{};typeof l.unlocked!="number"&&(l.unlocked=0),(!l.best||typeof l.best!="object")&&(l.best={});var h=["PAR","KILLS","ITEMS","SECRETS"];return{v:a,save:function(){s(i,a)},progress:l,unlock:function(f){f>l.unlocked&&(l.unlocked=f,s(e,l))},record:function(f,p){var v=l.best[f]||{time:null,medals:{}},y=[];p.time<=p.par&&y.push("PAR"),p.kills>=p.totalKills&&y.push("KILLS"),p.items>=p.totalItems&&y.push("ITEMS"),p.secrets>=p.totalSecrets&&y.push("SECRETS");var g=y.filter(function(x){return!v.medals[x]}),m=v.time===null||p.time<v.time;return m&&(v.time=Math.floor(p.time)),y.forEach(function(x){v.medals[x]=!0}),l.best[f]=v,s(e,l),{newBest:m,medals:y,fresh:g}},best:function(f){return l.best[f]||null},MEDALS:h}})(),Lm=(function(){var i=[],e=320,t=200;function n(){return i[i.length-1]||null}function r(T){return typeof T=="function"?T():T}function s(T){return r(T.items)||[]}function a(T){return T&&!(T.disabled&&T.disabled())}function o(T,D,H){for(var _=s(T),w=_.length,P=0;P<w;P++){var k=((D+P*H)%w+w)%w;if(a(_[k]))return k}return 0}function c(T){return{screen:T,sel:o(T,T.sel||0,1),hover:-1}}function u(T){i=[c(T)]}function l(T){i.push(c(T)),SND.play("menu")}function h(T){i[i.length-1]=c(T)}function f(){i=[]}function p(){return i.length>0}function v(){if(i.length>1)return i.pop(),SND.play("menu"),!0;var T=n();return T&&T.screen.onBack?(T.screen.onBack(),!0):!1}function y(T){var D=n(),H=s(D.screen).length;H&&(D.sel=o(D.screen,D.sel+T,T),SND.play("menu"))}function g(T,D){a(T)&&(T.adjust?(T.adjust(D||1),SND.play("menu")):T.action&&(SND.play("menuPick"),T.action()))}function m(T){var D=n();if(!D)return!1;var H=s(D.screen),_=H[D.sel];switch(T){case"ArrowUp":case"KeyW":return y(-1),!0;case"ArrowDown":case"KeyS":case"Tab":return y(1),!0;case"ArrowLeft":case"KeyA":return _&&_.adjust&&g(_,-1),!0;case"ArrowRight":case"KeyD":return _&&_.adjust&&g(_,1),!0;case"Enter":case"NumpadEnter":case"Space":return g(_,1),!0;case"Escape":case"Backspace":return v()}return!1}function x(T){var D=T.scale||1;return{s:D,top:T.top||60,gap:T.gap||(D===1?12:14),x0:T.x0||56,x1:T.x1||264,rowH:5*D+5}}function A(T,D,H){for(var _=x(T),w=s(T),P=0;P<w.length;P++){var k=_.top+P*_.gap-3;if(H>=k&&H<k+_.rowH+1&&D>=_.x0-8&&D<=_.x1+8)return P}return-1}function S(T,D){var H=n();if(!H)return!1;var _=A(H.screen,T,D);return H.hover=_,_>=0&&a(s(H.screen)[_])&&_!==H.sel&&(H.sel=_,SND.play("menu")),_>=0&&a(s(H.screen)[_])}function C(T,D){var H=n();if(H){var _=A(H.screen,T,D);if(!(_<0)){var w=s(H.screen)[_];if(a(w)){H.sel=_;var P=x(H.screen),k=w.adjust&&T<P.x1-44&&T>(P.x0+P.x1)/2?-1:1;g(w,k)}}}}function I(T,D){for(var H=String(T).split(" "),_=[],w="",P=0;P<H.length;P++){var k=w?w+" "+H[P]:H[P];k.length>D&&w?(_.push(w),w=H[P]):w=k}return w&&_.push(w),_}function L(T,D,H,_,w){for(var P=_.slider[0],k=_.slider[1],Y=_.slider[2](),ne=k-P,te=4,le=1,ue=ne*(te+le)-le,he=D-ue,De=0;De<ne;De++)T.fillStyle=De<Y-P?w?"#ffd23e":"#e03828":"#2e2a24",T.fillRect(he+De*(te+le),H,te,5);ART.drawText(T,String(Y),he-6,H,{color:w?"#ffd23e":"#8a8478",right:!0})}function M(T,D){var H=n();if(H){var _=H.screen,w=x(_),P=s(_);_.drawBg&&_.drawBg(T,D),_.title&&ART.drawText(T,r(_.title),e/2,_.titleY||14,{scale:3,color:"#ff9a28",shadow:"#401008",center:!0}),_.drawExtra&&_.drawExtra(T,D);for(var k=0;k<P.length;k++){var Y=P[k],ne=w.top+k*w.gap,te=k===H.sel,le=a(Y),ue=r(Y.label);te&&(T.fillStyle="rgba(255,110,24,0.16)",T.fillRect(w.x0-8,ne-3,w.x1-w.x0+16,w.rowH),T.fillStyle="#ff7a18",T.fillRect(w.x0-8,ne-3,2,w.rowH),D%.8<.55&&ART.drawText(T,">",w.x0-4,ne+(w.s-1)*2,{color:"#ffd23e"}));var he=le?te?"#ffd23e":"#c8c0b0":"#4a463c",De=Y.value||Y.slider;if(De)if(ART.drawText(T,ue,w.x0+4,ne,{scale:w.s,color:he,shadow:le}),Y.slider)L(T,w.x1,ne+(w.s-1)*2,Y,te);else{var Ue=r(Y.value);te&&Y.adjust&&(Ue="< "+Ue+" >"),ART.drawText(T,Ue,w.x1,ne,{scale:w.s,color:te?"#ffd23e":"#e03828",right:!0})}else ART.drawText(T,ue,_.alignLeft?w.x0+4:e/2,ne,{scale:w.s,color:he,shadow:le,center:!_.alignLeft})}var dt=P[H.sel],je=dt&&a(dt)?r(dt.desc):null;if(je)for(var it=I(je,70),de=_.descY||168,me=0;me<it.length;me++)ART.drawText(T,it[me],e/2,de+me*8,{color:"#a8a090",center:!0});var Ee=_.footer===void 0?"ARROWS OR MOUSE: CHOOSE   ENTER: SELECT   ESC: BACK":r(_.footer);Ee&&ART.drawText(T,Ee,e/2,_.footerY||180,{color:"#5e584e",center:!0})}}return{open:u,push:l,replace:h,close:f,back:v,isOpen:p,key:m,pointer:S,click:C,render:M,wrap:I,current:function(){var T=n();return T?T.screen:null},selected:function(){var T=n();return T?s(T.screen)[T.sel]:null},depth:function(){return i.length}}})();typeof Au!="undefined"&&(Au.exports={SETTINGS:Pm,MENU:Lm})});var Cu=Sa((GS,Ru)=>{"use strict";var Nm=(function(){var i="firebird.riley.v1",e=3;function t(){return{shots:{fist:0,pistol:0,shotgun:0},hits:0,fireDistSum:0,fireDistN:0,strafeL:0,strafeR:0,stillT:0,seenT:0,hideT:0,longestHide:0,said:{}}}function n(_,w){w.los?(_.seenT+=w.dt,_.hideT=0,w.strafe<0?_.strafeL+=w.dt:w.strafe>0&&(_.strafeR+=w.dt),w.moving||(_.stillT+=w.dt)):(_.hideT+=w.dt,_.hideT>_.longestHide&&(_.longestHide=_.hideT))}function r(_,w,P){_.shots[w]=(_.shots[w]||0)+1,_.fireDistSum+=P,_.fireDistN++}function s(_){return _.shots.fist+_.shots.pistol+_.shots.shotgun}function a(_){var w=null,P=0;for(var k in _.shots)_.shots[k]>P&&(P=_.shots[k],w=k);return P>=5?w:null}function o(_){return _.fireDistN?_.fireDistSum/_.fireDistN:0}function c(_){return _.fireDistN<5?0:p((5-o(_))/3)}function u(_){return _.fireDistN<5?0:p((o(_)-6)/4)}function l(_){return _.seenT<4?0:p((_.stillT/_.seenT-.35)/.4)}function h(_){return _.strafeR>=_.strafeL?1:-1}function f(_){var w=_.strafeL+_.strafeR;return w<3?0:p((Math.max(_.strafeL,_.strafeR)/w-.55)/.3)}function p(_){return _<0?0:_>1?1:_}function v(_){var w=[];_.los?(_.cool.volley<=0&&w.push("volley"),_.cool.lead<=0&&w.push("lead"),_.dist<6&&w.push("backoff"),_.dist>3&&w.push("close"),w.push("flank")):w.push("seek");var P=_.cool.summon<=(_.phase>=3?9:0);return _.phase>=2&&_.impsAlive<2&&P&&w.push("summon"),_.phase>=2&&_.los&&_.dist<7&&_.cool.shield<=0&&w.push("shield"),w}function y(_,w,P){var k=0,Y=null;switch(_){case"volley":k=1+(P.phase>=3?.4:0);break;case"lead":k=.35+f(w)*1.6,f(w)>.4&&(Y="strafe");break;case"backoff":k=.2+c(w)*1.6+(P.playerWeapon==="shotgun"&&P.dist<4?.8:0),c(w)>.4&&(Y="rusher");break;case"close":k=.3+u(w)*1.3+l(w)*1.2,l(w)>.4?Y="camper":u(w)>.4&&(Y="sniper");break;case"flank":k=.45+(P.phase>=2?.35:0)+f(w)*.4;break;case"seek":k=1,w.hideT>3&&(Y="hider");break;case"summon":k=.9;break;case"shield":k=P.playerWeapon==="shotgun"?1.4:.25,P.playerWeapon==="shotgun"&&w.shots.shotgun>=6&&(Y="shotgun");break}return P.phase>=3&&((_==="volley"||_==="lead"||_==="close"||_==="summon")&&(k+=.6),(_==="backoff"||_==="shield")&&(k*=.4)),{move:_,score:k,why:Y}}function g(_,w,P,k){if(k=k||Math.random,!_.length)return null;var Y=_.map(function(ue){return y(ue,w,P)}),ne=0;Y.forEach(function(ue){ue.w=ue.score*ue.score,ne+=ue.w});for(var te=k()*ne,le=0;le<Y.length;le++)if(te-=Y[le].w,te<=0)return Y[le];return Y[Y.length-1]}var m={weapon:{fist:"FISTS",pistol:"PISTOL",shotgun:"SHOTGUN"},shotgunShots:"SHOTGUN BLASTS",minions:"IMPS"};function x(_){if(_){if(_.weapon)for(var w in _.weapon)m.weapon[w]=_.weapon[w];_.shotgunShots&&(m.shotgunShots=_.shotgunShots),_.minions&&(m.minions=_.minions)}}function A(){return JSON.parse(JSON.stringify(m))}function S(_,w){if(!w||_.said[w])return null;var P=null;switch(w){case"strafe":P="YOU ALWAYS DODGE "+(h(_)<0?"LEFT":"RIGHT")+". I'M AIMING THERE NOW.";break;case"rusher":P="YOU LIKE IT UP CLOSE. I'LL KEEP MY DISTANCE.";break;case"sniper":P="YOU KEEP YOUR DISTANCE. SO I'M COMING TO YOU.";break;case"camper":P="YOU STAND STILL A LOT. THAT MAKES YOU EASY TO FIND.";break;case"hider":P="HIDING? I CAN FIND YOU. I KNOW THIS ARENA.";break;case"shotgun":P=_.shots.shotgun+" "+m.shotgunShots+" SO FAR. SHIELD UP!";break}return P&&(_.said[w]=!0),P}function C(_,w,P){switch(P=P||{},_){case"intro":return P.memory&&P.memory.lastStyle?"BACK AGAIN! LAST TIME "+P.memory.lastStyle+".":P.memory?"BACK AGAIN! ROUND "+(P.memory.fights+1)+". LET'S GO!":"HI! I'M RILEY. I LEARN HOW YOU PLAY. READY?";case"ease":return"I'M GOING A LITTLE EASIER THIS TIME. JUST A LITTLE.";case"studied":return"YOU BEAT ME "+P.wins+(P.wins===1?" TIME":" TIMES")+". I'VE BEEN PRACTISING.";case"phase2":return"OKAY. I'VE BEEN WATCHING YOU. MY TURN.";case"phase3":return"ALRIGHT, NO MORE HOLDING BACK!";case"summon":return"LITTLE HELP, FRIENDS?";case"friendlyFire":return"HEY! WATCH WHERE YOU THROW THOSE.";case"impsTurned":return"YOU GOT MY "+m.minions+" FIGHTING ME? SMART.";case"playerDied":{var k=I(w);return"GOOD FIGHT! YOU HIT ME "+w.hits+(w.hits===1?" TIME":" TIMES")+(k!==null?", "+k+"% ACCURACY":"")+". AGAIN?"}case"defeated":{var Y=a(w);return"OKAY, YOU WIN! "+w.hits+" HITS"+(Y?" WITH MOSTLY THE "+m.weapon[Y]:"")+". NICE."}}return null}function I(_){var w=s(_);return w<5?null:Math.min(100,Math.round(_.hits/w*100))}function L(_){var w=a(_);return c(_)>.5&&w?"YOU RUSHED ME WITH THE "+m.weapon[w]:u(_)>.5?"YOU FOUGHT ME FROM FAR AWAY":_.longestHide>6?"YOU HID FOR "+Math.round(_.longestHide)+" SECONDS":f(_)>.5?"YOU KEPT DODGING "+(h(_)<0?"LEFT":"RIGHT"):w?"YOU USED THE "+m.weapon[w]+" THE MOST":null}function M(_){var w={fights:0,wins:0,lossStreak:0,ease:0,lastStyle:null};try{var P=_&&_.getItem(i);if(P){var k=JSON.parse(P);for(var Y in w)k[Y]!==void 0&&(w[Y]=k[Y])}}catch{}return w.ease=Math.max(0,Math.min(e,w.ease|0)),w}function T(_,w){try{_&&_.setItem(i,JSON.stringify(w))}catch{}}function D(_,w,P){return _.fights++,_.lastStyle=L(w),P?(_.wins++,_.lossStreak=0,_.ease=0):(_.lossStreak++,_.ease=Math.min(e,_.lossStreak)),_}function H(_){var w=_.ease,P=_.wins>0&&w===0;return{hpScale:1-.08*w,dmgScale:1-.1*w,coolScale:(1+.12*w)*(P?.9:1),practised:P}}return{MAX_EASE:e,newProfile:t,observe:n,noteShot:r,favWeapon:a,rusher:c,sniper:u,camper:l,strafeSide:h,strafeHabit:f,accuracy:I,legalMoves:v,scoreMove:y,choose:g,insight:S,line:C,describeStyle:L,recall:M,save:T,settle:D,tuning:H,setWords:x,words:A}})();typeof Ru!="undefined"&&(Ru.exports=Nm)});var gd=Sa((XS,Nu)=>{"use strict";var Ea=[{name:"E1M1: ASH GATES",floor:"slab",ceil:"ceilDark",par:75,playerAngle:0,map:["#######################X######","####################..t.t....#","####################.........#","####################..i..+...#","####################....A....#","####################.........#","#######################U######","##....................t.t...##","##.t......%%......%%........##","##u...g......i..............##","##.t.......h.....g..........##","##..........................##","####################D#########","###*Pa#########....t.t......##","####S##########.....i.....o.##","##b......######..........io.##","##.......######......h......##","##..p....D........2.........##","##.......######..o..........##","##.......######.t.........t.##","##...h...#####################","##############################"]},{name:"E1M2: THE FURNACE",floor:"tech",ceil:"ceilTech",par:120,playerAngle:-Math.PI/2,map:["###############X################","############..t.t...#...########","############g.......#*PA########","############...+...g#...########","###############R######S#########","########......t.t.......########","########................########","########......b.........########","#......#.i.T........T...#o....o#","#......D................#......#","#..i...#................D..o...#","#......#....g...........#....i.#","#t.t.g.#...T........T...#.o..o.#","#r.a...#...i............#..g...#","########................#.a..h.#","###############..###############","############.b....h.############","############...p....############","############........############","############t......t############","################################"]},{name:"E1M3: DEMON THRONE",floor:"hell",ceil:"ceilHell",par:150,playerAngle:-Math.PI/2,map:["HHHHHHHHHHHHHHHXHHHHHHHHHHHHHHHH","HHHHHHHHHHHHH.t.t..HHHHHHHHHHHHH","HHHHHHHHHHHHH..+...HHHHHHHHHHHHH","HHHHHHHHHHHHHHHRHHHHHHHHHHHHHHHH","HHHHHHt.......t.t........tHHHHHH","HHHHHH.i................i.HHHHHH","HHHHHH..o..............o.tH....H","HH...H....................D..g.H","HH*PAS.........K.........tH.r..H","HH...H....g.........g.....H....H","HHHHHH.a................b.HHHHHH","HHHHHH...i..........i.....HHHHHH","HHHHHHt..................tHHHHHH","HHHHHH...a..h......+..b...HHHHHH","HHHHHH....................HHHHHH","HHHHHHHHHHHHHHHDHHHHHHHHHHHHHHHH","HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH","HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH","HHHHHHHHHHHHHi...iHHHHHHHHHHHHHH","HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH","HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH","HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH","HHHHHHHHHHHt........tHHHHHHHHHHH","HHHHHHHHHHH...b..a...HHHHHHHHHHH","HHHHHHHHHHH....p.....HHHHHHHHHHH","HHHHHHHHHHH..........HHHHHHHHHHH","HHHHHHHHHHHt........tHHHHHHHHHHH","HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH"]},{name:"E1M4: RILEY'S ARENA",floor:"tech",ceil:"ceilTech",par:240,playerAngle:-Math.PI/2,map:["MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMt........................tMMM","MMM..h..........Y.........h..MMM","MMM..........................MMM","MMM....TT..............TT....MMM","MMM....TT....o....o....TT....MMM","MMM..........................MMM","MMM.a......................a.MMM","MMM....TT..............TT....MMM","MMM....TT.......+......TT....MMM","MMM..........................MMM","MMMt.......o........o.......tMMM","MMMMMMMMMMMMMMMUMMMMMMMMMMMMMMMM","TTTTTTTTTTTTTT...TTTTTTTTTTTTTTT","TTTTTTTTTTTTTTt.tTTTTTTTTTTTTTTT","TTi.....o.......o.....iTTTTTTTTT","TT.....................T..g...TT","TT...g.............g..tTt....tTT","TT.......MM...MM.......D....u.TT","TT..b....MM.h.MM....a.tT.a..h.TT","TT.....................Tt....tTT","TT.................o...T..i...TT","TT.....................TTTTTTTTT","TTTTTTTTTTTTTTTDTTTTTTTTTTTTTTTT","TTTTTTTTTTt.........tTTTTTTTTTTT","TTTTTTTTTT..b..2..a..TTTTTTTTTTT","TTTTTTPA*S...........TTTTTTTTTTT","TTTTTTTTTT.....p.....TTTTTTTTTTT","TTTTTTTTTTt...h.....tTTTTTTTTTTT","TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT"]}];(function(){for(var i=0;i<Ea.length;i++){for(var e=Ea[i].map,t=e[0].length,n=0,r=0;r<e.length;r++){if(e[r].length!==t)throw new Error(Ea[i].name+" row "+r+" width "+e[r].length+" != "+t);for(var s=0;s<t;s++)e[r][s]==="p"&&n++}if(n!==1)throw new Error(Ea[i].name+" has "+n+" player starts")}})();typeof Nu!="undefined"&&(Nu.exports=Ea)});var Le=_s(nd(),1),_n=_s(id(),1);window.ART=Le.default;window.SND=_n.default;var Kf=_s(rd(),1);var Qt=_s(Cu(),1);var Dm={"#":1,"%":2,M:3,T:4,H:5,D:6,R:7,U:8,X:9,S:11,"=":12},gi={6:!0,7:!0,8:!0,11:!0},sd=.25,Om=2,Xn=.3,Iu=.55;function ad(i){return i>="0"&&i<="9"?(i.charCodeAt(0)-48)*sd:i>="a"&&i<="z"?(i.charCodeAt(0)-87)*sd:0}function od(i){for(var e=i.map,t=e[0].length,n=e.length,r={mw:t,mh:n,cells:new Uint8Array(t*n),floor:new Float32Array(t*n),ceil:new Float32Array(t*n),doors:{},lifts:[],lava:new Uint8Array(t*n),movers:[]},s=i.ceilHeight||Om,a=0;a<n;a++)for(var o=0;o<t;o++){var c=e[a][o],u=a*t+o,l=Dm[c]||0;r.cells[u]=l,r.floor[u]=i.heights?ad(i.heights[a][o]):0,r.ceil[u]=i.ceilings&&i.ceilings[a][o]!=="."?ad(i.ceilings[a][o]):s,r.ceil[u]<r.floor[u]+1&&(r.ceil[u]=r.floor[u]+1),gi[l]&&(r.doors[o+","+a]={x:o,z:a,open:0,state:"closed",timer:0,locked:l===7?"red":l===8?"blue":null,secret:l===11,found:!1,used:!1}),c==="~"&&(r.lava[u]=1),c==="L"&&r.lifts.push({x:o,z:a,top:r.floor[u],bottom:0,pos:0,state:"down",wait:0})}for(var h in r.doors){var f=r.doors[h],p=1/0,v=0;Ta(r,f.x,f.z).forEach(function(g){r.cells[g.i]===0&&(p=Math.min(p,r.floor[g.i]),v=Math.max(v,r.ceil[g.i]))});var y=f.z*t+f.x;r.floor[y]=p===1/0?0:p,r.ceil[y]=f.secret?v||s:Math.min(v||s,r.floor[y]+1.5)}return r.lifts.forEach(function(g){var m=1/0;Ta(r,g.x,g.z).forEach(function(A){var S=r.cells[A.i]===0||gi[r.cells[A.i]];S&&!Um(r,A.x,A.z)&&(m=Math.min(m,r.floor[A.i]))}),g.bottom=m===1/0?0:Math.min(m,g.top),g.pos=g.bottom;var x=g.z*t+g.x;r.floor[x]=g.pos,r.ceil[x]=Math.max(r.ceil[x],g.top+1.2)}),r}function Um(i,e,t){for(var n=0;n<i.lifts.length;n++)if(i.lifts[n].x===e&&i.lifts[n].z===t)return!0;return!1}function Ta(i,e,t){var n=[];return[[1,0],[-1,0],[0,1],[0,-1]].forEach(function(r){var s=e+r[0],a=t+r[1];s>=0&&a>=0&&s<i.mw&&a<i.mh&&n.push({x:s,z:a,i:a*i.mw+s})}),n}function Yn(i,e,t){return e<0||t<0||e>=i.mw||t>=i.mh?1:i.cells[t*i.mw+e]}function Ji(i,e,t){return i.doors[e+","+t]||null}function vr(i,e,t){var n=Yn(i,e,t);if(n===0)return!1;if(gi[n]){var r=Ji(i,e,t);return!r||r.open<.9}return!0}function hn(i,e,t){return i.floor[t*i.mw+e]}function Ni(i,e,t){return i.ceil[t*i.mw+e]}function kr(i,e,t,n,r,s,a){for(var o=Math.floor(e-n),c=Math.floor(e+n),u=Math.floor(t-n),l=Math.floor(t+n),h=-1/0,f=1/0,p=u;p<=l;p++)for(var v=o;v<=c;v++){if(vr(i,v,p))return{blocked:!0};var y=hn(i,v,p),g=Ni(i,v,p);if(y>r+a+1e-4)return{blocked:!0};h=Math.max(h,y),f=Math.min(f,g)}return f<Math.max(r,h)+s-1e-4?{blocked:!0}:{blocked:!1,ground:h,ceil:f}}function zr(i,e,t,n,r,s,a){var o=!0;return t!==0&&(kr(i,e.x+t,e.z,r,e.y,s,a).blocked?o=!1:e.x+=t),n!==0&&(kr(i,e.x,e.z+n,r,e.y,s,a).blocked?o=!1:e.z+=n),o}function Xo(i,e,t,n){for(var r=Math.floor(e-n),s=Math.floor(e+n),a=Math.floor(t-n),o=Math.floor(t+n),c=-1/0,u=a;u<=o;u++)for(var l=r;l<=s;l++)vr(i,l,u)||(c=Math.max(c,hn(i,l,u)));return c===-1/0?0:c}function Yo(i,e,t,n,r,s,a,o){for(var c=Math.sqrt(r*r+a*a),u=Math.floor(e),l=Math.floor(n),h=c>1e-9?Math.abs(1/r):1e30,f=c>1e-9?Math.abs(1/a):1e30,p=r<0?-1:1,v=a<0?-1:1,y=r<0?(e-u)*h:(u+1-e)*h,g=a<0?(n-l)*f:(l+1-n)*f,m=0,x=0;x<256;x++){var A=Math.min(y,g,o),S=hn(i,u,l),C=Ni(i,u,l);if(s<0){var I=(S-t)/s;if(I>=m-1e-6&&I<=A)return T(I,"floor")}else if(s>0){var L=(C-t)/s;if(L>=m-1e-6&&L<=A)return T(L,"ceil")}if(A>=o)return T(o,"none");if(m=A,y<g?(y+=h,u+=p):(g+=f,l+=v),u<0||l<0||u>=i.mw||l>=i.mh)return T(m,"wall");var M=t+s*m;if(vr(i,u,l)||M<hn(i,u,l)||M>Ni(i,u,l))return T(m,"wall")}return T(o,"none");function T(D,H){return{dist:D,x:e+r*D,y:t+s*D,z:n+a*D,kind:H,cx:u,cz:l}}}function xr(i,e,t,n,r,s,a){var o=r-e,c=s-t,u=a-n,l=Math.sqrt(o*o+c*c+u*u);return l<.001?!0:Yo(i,e,t,n,o/l,c/l,u/l,l).dist>=l-.05}var ys=null;function Pu(i,e,t,n,r,s){var a=i.mw,o=a*i.mh;(!ys||ys.length<o)&&(ys=new Int32Array(o)),s.fill(-1);var c=Math.floor(e),u=Math.floor(t);if(!(c<0||u<0||c>=a||u>=i.mh)){var l=0,h=0;for(s[u*a+c]=0,ys[h++]=u*a+c;l<h;){var f=ys[l++],p=s[f];if(!(p>=n))for(var v=f%a,y=f/a|0,g=0;g<4;g++){var m=v+(g===0?1:g===1?-1:0),x=y+(g===2?1:g===3?-1:0);if(!(m<0||x<0||m>=a||x>=i.mh)){var A=x*a+m;s[A]!==-1||!r(f,m,x)||(s[A]=p+1,ys[h++]=A)}}}}}function ld(i,e,t,n){var r={cells:e,from:i.floor[e[0]],to:t,pos:i.floor[e[0]],speed:n||.8,moved:0,done:!1};return i.movers.push(r),r}function cd(i,e){i.movers.forEach(function(t){var n=t.pos;if(!t.done){var r=t.to>t.pos?1:-1;t.pos+=r*t.speed*e,(r>0&&t.pos>=t.to||r<0&&t.pos<=t.to)&&(t.pos=t.to,t.done=!0),t.cells.forEach(function(s){i.floor[s]=t.pos,i.ceil[s]<t.pos+1&&(i.ceil[s]=t.pos+1)})}t.moved=t.pos-n})}function ud(i,e,t,n){for(var r=0;r<i.lifts.length;r++){var s=i.lifts[r],a=t(s.x,s.z),o=s.pos;s.state==="down"&&a?(s.state="wait",s.wait=.5):s.state==="wait"?(s.wait-=e,s.wait<=0&&(s.state="up",n&&n(s,"start"))):s.state==="up"?(s.pos=Math.min(s.top,s.pos+e*.9),s.pos>=s.top&&(s.state="top",s.wait=2.5,n&&n(s,"stop"))):s.state==="top"?a?s.wait=2.5:(s.wait-=e)<=0&&(s.state="lower",n&&n(s,"start")):s.state==="lower"&&(a&&s.pos>s.bottom+.05?s.state="up":(s.pos=Math.max(s.bottom,s.pos-e*.9),s.pos<=s.bottom&&(s.state="down",n&&n(s,"stop")))),i.floor[s.z*i.mw+s.x]=s.pos,s.moved=s.pos-o}}Qt.default.setWords({weapon:{fist:"EMBER FIST",pistol:"SPARK CASTER",shotgun:"BELL BLASTER"},shotgunShots:"BELL BLASTS",minions:"HOLLOWS"});var fn={r:.28,h:.9,hCrouch:.55,eye:.8,eyeCrouch:.45,walk:3.2,run:5,jumpV:3.9,gravity:14},ba={fist:{ammo:null,rate:.5,melee:!0,dmgMin:8,dmgMax:24,knock:.12},pistol:{ammo:"bullets",rate:.42,pellets:1,spread:.025,dmgMin:5,dmgMax:15,knock:.03,shake:.6},shotgun:{ammo:"shells",rate:.95,pellets:7,spread:.1,dmgMin:5,dmgMax:15,knock:.045,shake:2.2}},ji=["fist","pistol","shotgun"],hd={bullets:"SPARKS",shells:"BELL CHARGES"},fd={fist:"EMBER FIST",pistol:"SPARK CASTER",shotgun:"BELL BLASTER"},Ms={imp:{hp:40,speed:1.7,radius:.35,painChance:.75,ranged:!0,melee:!1,h:.85,attackDmg:[8,20]},gnasher:{hp:110,speed:2.9,radius:.42,painChance:.5,ranged:!1,melee:!0,h:.7,attackDmg:[4,16],fleeBelow:.4},knight:{hp:400,speed:1.9,radius:.48,painChance:.2,ranged:!0,melee:!0,h:1.3,attackDmg:[10,26]},riley:{hp:900,speed:2.4,radius:.4,painChance:.12,ranged:!0,melee:!0,h:.95,attackDmg:[10,20],boss:!0}},dd={i:"imp",g:"gnasher",K:"knight",Y:"riley"},pd={h:{msg:"PICKED UP A LIFE SHARD.",snd:"health"},"+":{msg:"PICKED UP A HEALING CRYSTAL.",snd:"health"},b:{msg:"PICKED UP A SPARK CELL.",snd:"pickup"},a:{msg:"PICKED UP BELL CHARGES.",snd:"pickup"},A:{msg:"PICKED UP A BRASS WARD!",snd:"pickup"},2:{msg:"YOU GOT THE BELL BLASTER!",snd:"weaponUp"},r:{msg:"PICKED UP THE RED KEYSTONE.",snd:"keyPickup"},u:{msg:"PICKED UP THE BLUE KEYSTONE.",snd:"keyPickup"},P:{msg:"PHOENIX ORB! YOU FEEL REBORN!",snd:"orb"}},Gr=[{name:"ROOKIE",dmg:.5,ammo:2,desc:"HOLLOWS HIT HALF AS HARD AND AMMO IS DOUBLED. GREAT FOR A FIRST RUN."},{name:"WARRIOR",dmg:1,ammo:1,desc:"THE FIGHT AS IT WAS MEANT TO BE."},{name:"BLAZE",dmg:1.5,ammo:1,desc:"HOLLOWS HIT HARDER. FOR VETERANS WHO KNOW EVERY CORNER."}],md={run:"TIP: HOLD SHIFT TO RUN.",jump:"TIP: SPACE JUMPS. C CROUCHES. LOOK UP AND DOWN WITH THE MOUSE.",map:"TIP: LOST? PRESS TAB FOR THE MAP.",weapons:"TIP: PRESS 1 2 3, OR SCROLL THE MOUSE WHEEL, TO SWITCH WEAPONS. Q SWAPS BACK.",key:"TIP: THE MATCHING DOOR IS MARKED IN COLOR ON YOUR MAP (TAB).",lowAmmo:"TIP: LOW ON AMMO? YOUR EMBER FIST (1) NEVER RUNS OUT, AND IT IS SILENT.",lowHealth:"TIP: LOW HEALTH! BACK OFF AND LOOK FOR LIFE SHARDS AND HEALING CRYSTALS.",hurtDir:"TIP: THE RED MARKS AROUND YOUR AIM POINT AT WHATEVER HIT YOU.",secret:"TIP: CRACKED WALLS HIDE PIECES OF THE TRUE MAP. PRESS E ON THEM.",torches:"TIP: A PAIR OF TORCHES BESIDE A DOOR MEANS IT MATTERS. FOLLOW THEM.",lift:"TIP: STAND ON A GLOWING PLATFORM TO RIDE IT UP.",barrel:"TIP: A HOLLOW IS NEXT TO A MERCURY CASK. SHOOT THE CASK!",lava:"TIP: RED MERCURY BURNS! GET OUT, OR FIND A WAY TO DRAIN IT.",meet_imp:"TIP: HOLLOWS THROW MERCURY EMBERS. STRAFE WITH A AND D TO DODGE.",meet_gnasher:"TIP: HOLLOW HOUNDS CHARGE AND BITE. BACK AWAY WHILE YOU SHOOT.",meet_knight:"TIP: THE RESET WARDEN IS TOUGH. KEEP YOUR DISTANCE AND RING THE BELL BLASTER."};function Lu(i){i=i||{};var e=i.levels,t=i.rng||Math.random,n=i.storage||null,r=i.settings||{difficulty:1,tips:!1,seenTips:{}},s=i.onProgress||function(){},a={},o=!1,c="title",u=0,l=null,h=null,f={};function p(){return t()}function v(d,b){return d+t()*(b-d)}function y(d,b,B){return d<b?b:d>B?B:d}function g(d,b,B,ce){var J=d-B,ae=b-ce;return J*J+ae*ae}function m(){return Gr[r.difficulty]||Gr[1]}function x(d,b,B,ce,J,ae){var _e={t:d,name:b,x:B,y:ce,z:J};if(ae)for(var Se in ae)_e[Se]=ae[Se];l.events.push(_e)}function A(d,b){b?x("sound",d,b.x,(b.y||0)+.5,b.z):x("sound",d,l.p.x,l.p.y+.8,l.p.z,{local:!0})}function S(d,b,B,ce){var J=Ms[d];return{kind:d,mob:!0,x:b,z:B,y:ce,hp:J.hp,radius:J.radius,speed:J.speed,h:J.h,state:"idle",st:0,animT:p(),cool:v(.5,1.5),moveAng:0,retarget:0,losT:p()*.3,los:!1,target:null,lostT:0,fleeNext:!1,strafeSide:p()<.5?1:-1,flashT:0}}function C(d){var b=d.map.join("");return{boss:b.indexOf("Y")>=0,levers:d.levers||[],keys:{red:b.indexOf("R")>=0||b.indexOf("r")>=0,blue:b.indexOf("U")>=0||b.indexOf("u")>=0}}}function I(d){return{hp:Math.max(d.hp,1),armor:d.armor,ammo:{bullets:d.ammo.bullets,shells:d.ammo.shells},shotgun:d.weapons.shotgun,weapon:d.weapon}}function L(d,b,B){u=d;var ce=e[d],J=od(ce),ae=ce.map;N=ce;var _e=B||(b&&l?I(l.p):null),Se={x:0,z:0,y:0,ang:ce.playerAngle||0,pitch:0,vx:0,vz:0,vy:0,onGround:!0,crouch:!1,eyeH:fn.eye,hp:_e?_e.hp:100,armor:_e?_e.armor:0,ammo:_e?{bullets:_e.ammo.bullets,shells:_e.ammo.shells}:{bullets:50,shells:0},weapons:{fist:!0,pistol:!0,shotgun:_e?_e.shotgun:!1},keys:{red:!1,blue:!1},weapon:_e&&_e.shotgun?_e.weapon:"pistol",nextWeapon:null,prevWeapon:null,raiseT:.3,lowerT:0,cool:0,fireT:1,dead:!1,deadT:0,painT:0,grinT:0,dmgFlash:0,bonusFlash:0,jumpHeld:!1,landT:0};Y(Se,Se.weapon)||(Se.weapon=ne(Se));for(var Re=[],Ze=[],Je=null,ut=0;ut<ae.length;ut++)for(var Tt=0;Tt<ae[0].length;Tt++){var bt=ae[ut][Tt],cn=Tt+.5,Ut=ut+.5,Ct=hn(J,Tt,ut);if(bt==="p")Se.x=cn,Se.z=Ut,Se.y=Ct;else if(dd[bt]){var un=S(dd[bt],cn,Ut,Ct);un.kind==="riley"&&E(un),Re.push(un)}else bt==="o"?Re.push({kind:"barrel",mob:!0,barrel:!0,x:cn,z:Ut,y:Ct,hp:15,radius:.3,h:.55,state:"idle",st:0}):bt==="t"?Re.push({kind:"torch",x:cn,z:Ut,y:Ct,h:.95,animT:p()}):pd[bt]?Re.push({kind:"pickup",item:bt,x:cn,z:Ut,y:Ct,h:.3,bob:p()*6}):bt==="*"&&Ze.push({x:Tt,z:ut,found:!1});bt==="X"&&(Je={x:Tt,z:ut})}var R=0,W=0;return Re.forEach(function(ee){ee.mob&&!ee.barrel&&R++,ee.kind==="pickup"&&W++}),l={L:ce,W:J,mw:J.mw,mh:J.mh,doors:J.doors,ents:Re,p:Se,secrets:Ze,seen:new Uint8Array(J.mw*J.mh),msgs:[],events:[],time:0,notice:null,stats:{kills:0,totalKills:R,items:0,totalItems:W,secrets:0,totalSecrets:Ze.length},exitT:-1,flow:new Int16Array(J.mw*J.mh),flowT:0,infightSeen:!1,boss:null,shotId:0,firing:!1,input:{strafe:0,moving:!1,vx:0,vz:0},startGear:_e,info:C(ce),exitCell:Je,hurtDirs:[],hitT:0,killT:0,blockT:0,shake:0,hitstop:0,killer:null,tipQueue:[],tipT:3,usedMap:!1,ranT:0,jumped:!1,spotT:0,started:!0,fired:{},waves:{},lightsOff:{},lavaT:0,timers:[]},Re.forEach(function(ee){ee.kind==="riley"&&(l.boss=ee)}),c="game",X("start"),D(P(),"#f0d848",3.5),l}function M(){var d=l.startGear;d&&(d={hp:Math.max(d.hp,100),armor:d.armor,ammo:{bullets:Math.max(d.ammo.bullets,50),shells:d.shotgun?Math.max(d.ammo.shells,8):d.ammo.shells},shotgun:d.shotgun,weapon:d.weapon}),L(u,!1,d)}function T(d,b,B){l.msgs.push({text:d,t:B||3,color:b}),l.msgs.length>4&&l.msgs.shift()}function D(d,b,B){l.notice={text:d,color:b||"#f0d848",t:B||2.5,max:B||2.5}}function H(d){l&&(l.shake=Math.min(6,Math.max(l.shake,d)))}function _(d){!l||!r.tips||r.seenTips&&r.seenTips[d]||l.tipQueue.indexOf(d)<0&&l.tipQueue.push(d)}function w(d){if(l.tipT-=d,!(l.tipT>0||!l.tipQueue.length)){var b=l.tipQueue.shift();r.seenTips[b]||(r.seenTips[b]=!0,i.saveSettings&&i.saveSettings(),T(md[b],"#8fe0a0",6),l.tipT=7)}}function P(){if(!l)return"";var d=l.info,b=l.p;if(d.keys.blue&&!b.keys.blue)return"FIND THE BLUE KEYSTONE";if(d.keys.red&&!b.keys.red)return"FIND THE RED KEYSTONE";var B=k();return B.length?(l.L.leverGoal||"PULL THE LEVERS")+" ("+(d.levers.length-B.length)+"/"+d.levers.length+")":d.boss?"DEFEAT RILEY":"RELIGHT THE WAYSTONE"}function k(){return l.info.levers.filter(function(d){return l.W.cells[d[1]*l.mw+d[0]]===12})}function Y(d,b){var B=ba[b];return!B.ammo||d.ammo[B.ammo]>0}function ne(d){for(var b=ji.length-1;b>=0;b--){var B=ji[b];if(d.weapons[B]&&Y(d,B))return B}return"fist"}function te(d,b){if(c!=="game"||!l||l.p.dead)return!1;var B=l.p;return B.weapons[d]?Y(B,d)?d===B.weapon?(B.nextWeapon&&!(B.lowerT>0)&&(B.nextWeapon=null),!1):d===B.nextWeapon?!1:(B.prevWeapon=B.weapon,B.nextWeapon=d,B.autoFist=!1,!0):(b||(T("NO "+hd[ba[d].ammo]+" FOR THE "+fd[d]+"."),A("noAmmo")),!1):(b||T("YOU HAVEN'T FOUND THE "+fd[d]+" YET."),!1)}function le(d){for(var b=l.p,B=ji.indexOf(b.nextWeapon||b.weapon),ce=1;ce<ji.length;ce++){var J=ji[(B+d*ce+ji.length*2)%ji.length];if(b.weapons[J]&&Y(b,J)){te(J,!0);return}}}function ue(){var d=l.p;d.prevWeapon&&d.prevWeapon!==d.weapon&&d.weapons[d.prevWeapon]&&Y(d,d.prevWeapon)?te(d.prevWeapon,!0):le(-1)}function he(){return l.p.y+l.p.eyeH}function De(d,b){return Math.sqrt(g(d,b,l.p.x,l.p.z))}function Ue(d,b,B,ce,J,ae){for(var _e=l.p,Se=Math.cos(b),Re=Math.cos(d)*Se,Ze=Math.sin(d)*Se,Je=Math.sin(b),ut=_e.x,Tt=he(),bt=_e.z,cn=J?1.4:40,Ut=Yo(l.W,ut,Tt,bt,Re,Je,Ze,cn),Ct=null,un=Ut.dist+.05,R=0;R<l.ents.length;R++){var W=l.ents[R];if(!(!W.mob||W.state==="die"||W.state==="dead"||W.gone)){var ee=dt(ut,Tt,bt,Re,Je,Ze,W);ee!==null&&ee>.1&&ee<un&&(Ct=W,un=ee)}}var re=B+p()*(ce-B)|0;if(Ct){if(it(Ct,re),!Ct.barrel){Ct.kind==="riley"&&Ct.shieldT>0?l.blockT=.2:Ct.state==="die"?(l.killT=.3,l.hitstop=Math.max(l.hitstop,.045)):l.hitT=Math.max(l.hitT,.14);var oe=Ms[Ct.kind];if(ae&&!oe.boss){var Pe=ae*(oe.hp>200?.25:1);zr(l.W,Ct,Math.cos(d)*Pe,Math.sin(d)*Pe,Ct.radius,Ct.h,Xn)}}var Oe=ut+Re*un,Ae=Tt+Je*un,Ge=bt+Ze*un;x("fx",Ct.barrel||Ct.kind==="riley"?"spark":"blood",Oe,Ae,Ge,{dx:-Re,dy:-Je,dz:-Ze,kill:Ct.state==="die",floorY:Ct.y}),J||x("fx","tracer",ut,Tt,bt,{x2:Oe,y2:Ae,z2:Ge}),!Ct.barrel&&Ct.kind!=="riley"&&A(Ct.state==="die"?"killConfirm":"hitFlesh")}else!J&&Ut.kind!=="none"?(x("fx","puff",Ut.x-Re*.03,Ut.y-Je*.03,Ut.z-Ze*.03,{surface:Ut.kind,dx:Re,dy:Je,dz:Ze,cell:Yn(l.W,Ut.cx,Ut.cz)}),x("fx","tracer",ut,Tt,bt,{x2:Ut.x,y2:Ut.y,z2:Ut.z}),p()<.35&&A("ricochet",{x:Ut.x,y:Ut.y,z:Ut.z})):J&&A("whiff");return Ct}function dt(d,b,B,ce,J,ae,_e){var Se=_e.radius+.06,Re=d-_e.x,Ze=B-_e.z,Je=ce*ce+ae*ae,ut=2*(Re*ce+Ze*ae),Tt=Re*Re+Ze*Ze-Se*Se;if(Je<1e-9)return null;var bt=ut*ut-4*Je*Tt;if(bt<0)return null;var cn=Math.sqrt(bt),Ut=(-ut-cn)/(2*Je),Ct=(-ut+cn)/(2*Je),un=Ut>0?Ut:Ct;if(un<0)return null;var R=b+J*un;if(R>=_e.y&&R<=_e.y+_e.h)return un;if(Math.abs(J)>1e-6){var W=((J<0?_e.y+_e.h:_e.y)-b)/J;if(W>0){var ee=d+ce*W-_e.x,re=B+ae*W-_e.z;if(ee*ee+re*re<=Se*Se)return W}}return null}function je(d){return!!d&&!d.gone&&d.state!=="die"&&d.state!=="dead"}function it(d,b,B){if(!(d.state==="die"||d.state==="dead")&&!(d.kind==="riley"&&Ie(d,B))){if(d.hp-=b,d.flashT=.07,d.barrel){d.blame=je(B)?B:null,d.hp<=0&&d.state!=="boom"&&(d.state="boom",d.st=.08);return}var ce=Ms[d.kind];V(d),ce.boss||(B&&B!==d&&je(B)&&!B.barrel?(d.target!==B&&!l.infightSeen&&De(d.x,d.z)<14&&(l.infightSeen=!0,T("THE HOLLOWS TURN ON EACH OTHER!")),d.target=B,d.lostT=0):B||(d.target=null)),d.hp<=0?(d.state="die",d.st=0,l.stats.kills++,ce.boss||A("enemyDie",d),x("fx","gib",d.x,d.y+d.h*.6,d.z,{kind:d.kind})):p()<ce.painChance&&!(ce.boss&&d.state==="windup")&&(d.state="pain",d.st=ce.boss?.25:.35,ce.fleeBelow&&d.hp<ce.hp*ce.fleeBelow&&(d.fleeNext=!0),A("enemyPain",d)),d.kind==="riley"&&Ye(d)}}function de(d){d.state="dead",d.dead=!0,d.gone=!0,A("barrelBoom",d),x("fx","explosion",d.x,d.y+.3,d.z);for(var b=2.3,B=je(d.blame)?d.blame:null,ce=0;ce<l.ents.length;ce++){var J=l.ents[ce];if(!(!J.mob||J===d||J.state==="dead"||J.state==="die")){var ae=Math.sqrt(g(J.x,J.z,d.x,d.z)+Math.pow(J.y-d.y,2));ae<b&&xr(l.W,d.x,d.y+.3,d.z,J.x,J.y+J.h/2,J.z)&&(J.barrel?J.state!=="boom"&&(J.state="boom",J.st=v(.1,.25),J.blame=B):it(J,(b-ae)/b*90|0,B))}}nt(d.x,d.z,10);var _e=Math.sqrt(g(l.p.x,l.p.z,d.x,d.z)+Math.pow(l.p.y-d.y,2));H(6/(1+_e*.35)),_e<b&&xr(l.W,d.x,d.y+.3,d.z,l.p.x,he(),l.p.z)&&me((b-_e)/b*70|0,d)}function me(d,b){var B=l.p;if(!(B.dead||d<=0||l.exitT>=0)){if(d=Math.max(1,Math.round(d*m().dmg)),b){var ce=Math.atan2(b.z-B.z,b.x-B.x);l.hurtDirs.push({ang:ce,t:1}),l.hurtDirs.length>6&&l.hurtDirs.shift();var J=Math.atan2(Math.sin(ce-B.ang),Math.cos(ce-B.ang));Math.abs(J)>.9&&_("hurtDir"),l.killer=b.kind}var ae=Math.min(B.armor,Math.ceil(d/3));B.armor-=ae,d-=ae,B.hp-=d,B.dmgFlash=Math.min(.65,B.dmgFlash+d/55),H(Math.min(4,1+d/8)),B.painT=.6,B.hp<=0?(B.hp=0,B.dead=!0,B.deadT=0,A("playerDie"),U(l.boss)&&(G(l.boss,Qt.default.line("playerDied",l.boss.profile)),q(l.boss,!1))):(A("playerPain"),B.hp<30&&_("lowHealth"))}}function Ee(d,b,B,ce,J,ae,_e){var Se=d.y+d.h*.65,Re=B-d.x,Ze=ce-Se,Je=J-d.z,ut=Math.sqrt(Re*Re+Ze*Ze+Je*Je)||1,Tt=ae||(b?5.5:7);l.ents.push({kind:"proj",x:d.x+Re/ut*.5,y:Se+Ze/ut*.5,z:d.z+Je/ut*.5,vx:Re/ut*Tt,vy:Ze/ut*Tt,vz:Je/ut*Tt,h:.2,green:!!b,animT:0,owner:d,dmg:_e||(b?v(10,28):v(7,20))}),A(d.kind==="riley"?"rileyShoot":"impShoot",d)}function rt(d,b,B){return!vr(l.W,b,B)}function Be(d,b,B){var ce=l.W,J=Yn(ce,b,B);if(J!==0){if(!gi[J])return!1;var ae=Ji(ce,b,B);if(!(ae.open>=.9||!ae.locked&&!ae.secret))return!1}return ce.floor[B*ce.mw+b]-ce.floor[d]<=Xn+1e-4}function nt(d,b,B){var ce=new Int16Array(l.mw*l.mh);Pu(l.W,d,b,B,rt,ce);for(var J=0;J<l.ents.length;J++){var ae=l.ents[J];!ae.mob||ae.barrel||ae.state!=="idle"||Ms[ae.kind].boss||ce[Math.floor(ae.z)*l.mw+Math.floor(ae.x)]>=0&&V(ae)}}function V(d){d.state==="idle"&&(d.state="chase",d.st=0,A(d.kind==="knight"?"knightSight":d.kind==="riley"?"rileySight":"impSight",d))}function Z(){Pu(l.W,l.p.x,l.p.z,9999,function(d,b,B){var ce=d,J=l.W,ae=Yn(J,b,B);if(ae!==0){if(!gi[ae])return!1;var _e=Ji(J,b,B);if(_e.sealed||!(_e.open>=.9||!_e.locked&&!_e.secret))return!1}return J.lava[B*J.mw+b]?!1:J.floor[ce]-J.floor[B*J.mw+b]<=Xn+1e-4},l.flow)}function pe(d){var b=l.mw,B=Math.floor(d.x),ce=Math.floor(d.z),J=l.flow[ce*b+B];if(J<=0)return null;for(var ae=-1,_e=-1,Se=0;Se<4;Se++){var Re=B+(Se===0?1:Se===1?-1:0),Ze=ce+(Se===2?1:Se===3?-1:0);if(!(Re<0||Ze<0||Re>=b||Ze>=l.mh)){var Je=l.flow[Ze*b+Re];Je>=0&&Je<J&&(J=Je,ae=Re,_e=Ze)}}return ae<0?null:Math.atan2(_e+.5-d.z,ae+.5-d.x)}function xe(d,b){d.state==="closed"||d.state==="closing"?(d.state="opening",b&&(d.used=!0),A("doorOpen",{x:d.x+.5,y:hn(l.W,d.x,d.z),z:d.z+.5}),d.secret&&!d.found&&(d.found=!0)):b&&d.state==="open"&&(d.state="closing",A("doorClose",{x:d.x+.5,y:hn(l.W,d.x,d.z),z:d.z+.5}))}function se(d,b,B,ce,J){return d+B>ce&&d-B<ce+1&&b+B>J&&b-B<J+1}function ie(d){if(se(l.p.x,l.p.z,fn.r,d.x,d.z))return!0;for(var b=0;b<l.ents.length;b++){var B=l.ents[b];if(B.mob&&!B.barrel&&B.state!=="dead"&&B.state!=="die"&&se(B.x,B.z,B.radius,d.x,d.z))return!0}return!1}function $(d){for(var b in l.doors){var B=l.doors[b];if(B.state==="opening")B.open+=d*1.6,B.open>=1&&(B.open=1,B.state="open",B.timer=B.secret?9999:4);else if(B.state==="open")B.timer-=d,B.timer<=0&&!ie(B)&&(B.state="closing",A("doorClose",{x:B.x+.5,y:0,z:B.z+.5}));else if(B.state==="closing"){if(ie(B)){B.state="opening";continue}B.open-=d*1.6,B.open<=0&&(B.open=0,B.state="closed")}}}function ge(d,b,B){return se(d.x,d.z,(d.radius||fn.r)*.7,b,B)&&Math.abs(d.y-hn(l.W,b,B))<.05}function Ce(d){var b=l.p;ud(l.W,d,function(B,ce){if(ge(b,B,ce))return!0;for(var J=0;J<l.ents.length;J++){var ae=l.ents[J];if(ae.mob&&je(ae)&&ge(ae,B,ce))return!0}return!1},function(B,ce){A(ce==="start"?"doorOpen":"doorClose",{x:B.x+.5,y:B.pos,z:B.z+.5})}),l.W.lifts.forEach(function(B){B.moved&&[b].concat(l.ents).forEach(function(ce){(ce===b||ce.mob&&je(ce))&&se(ce.x,ce.z,(ce.radius||fn.r)*.7,B.x,B.z)&&Math.abs(ce.y-(B.pos-B.moved))<.06&&(ce.y=B.pos)})})}function We(){for(var d=l.p,b=Math.cos(d.ang),B=Math.sin(d.ang),ce=.4;ce<=1.3;ce+=.3){var J=Math.floor(d.x+b*ce),ae=Math.floor(d.z+B*ce),_e=Yn(l.W,J,ae);if(_e!==0){if(gi[_e]){var Se=Ji(l.W,J,ae);if(Se.open>=.9&&Se.state==="open"&&Math.floor(d.x)===J&&Math.floor(d.z)===ae)continue;return{kind:"door",door:Se}}return _e===9?{kind:"switch",x:J,z:ae}:_e===12?{kind:"lever",x:J,z:ae}:null}}return null}function z(){if(!l||l.p.dead||l.exitT>=0)return null;var d=We();if(!d)return null;if(d.kind==="switch")return{verb:"RELIGHT THE WAYSTONE",color:"#6fe0ec"};if(d.kind==="lever")return{verb:"PULL THE SWITCH",color:"#ffd23e"};var b=d.door;return b.secret&&!b.found?null:b.locked&&!l.p.keys[b.locked]?{need:b.locked,text:b.locked.toUpperCase()+" KEYSTONE NEEDED",color:b.locked==="red"?"#ff5a3a":"#6a98ff"}:b.state==="closed"||b.state==="closing"?{verb:"OPEN",color:"#e8e0c8"}:null}function ct(){var d=We();if(d){var b=l.p;if(d.kind==="door"){var B=d.door;B.sealed?(A("locked"),T("SEALED. SURVIVE!","#ff9a28")):B.locked&&!b.keys[B.locked]?(A("locked"),T("YOU NEED THE "+B.locked.toUpperCase()+" KEYSTONE."),_("key")):xe(B,!0)}else d.kind==="lever"?(l.W.cells[d.z*l.mw+d.x]=13,A("switchFlip"),X("use",d.x+","+d.z)):d.kind==="switch"&&(l.W.cells[d.z*l.mw+d.x]=10,A("switchFlip"),D("LEVEL COMPLETE!","#58e068",2),l.exitT=.8)}}function Xe(d){d.y=Xo(l.W,d.x,d.z,d.radius)}function F(d,b){var B=l.p,ce=Ms[d.kind];d.animT+=b,d.st-=b,d.cool-=b,d.flashT-=b,d.target&&!je(d.target)&&(d.target=null,d.cool=Math.min(d.cool,.4));var J=d.target,ae=J?J.x:B.x,_e=J?J.z:B.z,Se=J?J.y+J.h*.6:B.y+B.eyeH*.8;d.losT-=b,d.losT<=0&&(d.losT=.2+p()*.1,d.los=xr(l.W,d.x,d.y+d.h*.8,d.z,ae,Se,_e));var Re=ae-d.x,Ze=_e-d.z,Je=Math.sqrt(Re*Re+Ze*Ze);if(J&&(d.lostT=d.los?0:d.lostT+b,d.lostT>4)){d.target=null,d.lostT=0;return}if(d.state==="idle"){d.los&&Je<9&&!B.dead&&V(d);return}if(d.state==="pain"){d.st<=0&&(d.fleeNext?(d.fleeNext=!1,d.state="flee",d.st=v(.9,1.6),d.moveAng=Math.atan2(-Ze,-Re)+v(-.6,.6)):d.state="chase");return}if(d.state==="flee"){zr(l.W,d,Math.cos(d.moveAng)*d.speed*1.1*b,Math.sin(d.moveAng)*d.speed*1.1*b,d.radius,d.h,Xn)||(d.moveAng+=(p()<.5?1:-1)*Math.PI/2),Xe(d),d.st<=0&&(d.state="chase",d.cool=0,d.retarget=0,A("impSight",d));return}if(d.state==="die"){d.st<=-.5&&(d.state="dead");return}if(d.state!=="dead"){if(d.state==="windup"){if(d.st<=0){if(d.state="chase",!J&&B.dead)return;if(ce.melee&&Je<1.9&&Math.abs(Se-(d.y+d.h*.5))<1.2){if(d.los){var ut=ce.attackDmg[0]+p()*(ce.attackDmg[1]-ce.attackDmg[0])|0;J?it(J,ut,d):me(ut,d),A("punch",d)}}else ce.ranged&&d.los&&Ee(d,d.kind==="knight",ae,Se,_e);d.cool=v(.9,1.9)}return}if(!(!J&&B.dead)){d.detourT=(d.detourT||0)-b,d.pathT=(d.pathT||0)-b;var Tt=!J&&Math.abs(B.y-d.y)>Xn,bt=!J&&(!d.los||d.pathT>0||Tt)&&d.detourT<=0?pe(d):null;if(d.retarget-=b,bt!==null)d.moveAng=bt;else if(d.retarget<=0){d.retarget=v(.35,.8);var cn=Math.atan2(Ze,Re);ce.ranged&&!ce.melee&&d.los&&Je<7?(p()<.3&&(d.strafeSide=-d.strafeSide),d.moveAng=cn+d.strafeSide*v(1.1,1.8)):d.moveAng=cn+(Je>2.2?v(-.7,.7):v(-.25,.25))}var Ut=ce.melee?.95:1.6;if(Je>Ut){var Ct=d.x,un=d.z,R=zr(l.W,d,Math.cos(d.moveAng)*d.speed*b,Math.sin(d.moveAng)*d.speed*b,d.radius,d.h,Xn);if(!R&&bt!==null){var W=Math.floor(d.x)+.5-d.x,ee=Math.floor(d.z)+.5-d.z;zr(l.W,d,W*Math.min(1,b*6),ee*Math.min(1,b*6),d.radius,d.h,Xn)}else if(!R){var re=Math.floor(d.x+Math.cos(d.moveAng)*.7),oe=Math.floor(d.z+Math.sin(d.moveAng)*.7),Pe=Ji(l.W,re,oe);Pe&&!Pe.locked&&!Pe.secret&&!Pe.sealed&&Pe.state==="closed"&&xe(Pe,!1),d.moveAng+=(p()<.5?1:-1)*Math.PI/2*v(.6,1.2),d.retarget=v(.25,.5),d.pathT=.8}for(var Oe=0;Oe<l.ents.length;Oe++){var Ae=l.ents[Oe];if(!(Ae===d||!Ae.mob||Ae.state==="dead"||Ae.state==="die"||Ae.gone)){var Ge=d.x-Ae.x,Ve=d.z-Ae.z,ht=Ge*Ge+Ve*Ve,gt=d.radius+(Ae.radius||.3);if(ht>1e-4&&ht<gt*gt&&Math.abs(Ae.y-d.y)<.5){var qe=Math.sqrt(ht),Mt=(gt-qe)*.5;kr(l.W,d.x+Ge/qe*Mt,d.z+Ve/qe*Mt,d.radius,d.y,d.h,Xn).blocked||(d.x+=Ge/qe*Mt,d.z+=Ve/qe*Mt)}}}var nn=g(d.x,d.z,Ct,un),zt=d.speed*b*.3;d.stuckT=nn<zt*zt?(d.stuckT||0)+b:0,d.stuckT>.4&&(d.stuckT=0,d.detourT=v(.5,.9),d.moveAng+=(p()<.5?1:-1)*Math.PI/2,d.retarget=d.detourT),Xe(d)}d.cool<=0&&d.los&&(ce.melee&&Je<1.4&&Math.abs(Se-(d.y+d.h*.5))<1.2?(d.state="windup",d.st=.35):ce.ranged&&Je>1.2&&Je<14&&p()<b*1.4&&(d.state="windup",d.st=.45))}}}function E(d){var b=Qt.default.recall(n);d.mem=b,d.tune=Qt.default.tuning(b);var B=O();d.sparring=!!(B&&B.sparring),d.allowed=B&&B.moves?B.moves:null,d.hp=d.maxHp=Math.round(Ms.riley.hp*d.tune.hpScale*(B&&B.hpScale||1)),d.profile=Qt.default.newProfile(),d.phase=1,d.cools={volley:1,lead:3,summon:8,shield:5,melee:0},d.move=null,d.moveT=0,d.shieldT=0,d.talkT=0,d.flankSide=1,d.attack=null,d.settled=!1}var N=null;function O(){return N&&N.boss}function U(d){return!!d&&d.state!=="idle"&&je(d)}function G(d,b,B){return!b||B&&d.talkT>0?!1:(T("RILEY: "+b,"#6fe0ec",4.5),A("rileyTalk"),d.talkT=3.5,!0)}function Q(d){var b=d.mem,B=l.L.boss;if(d.sparring&&B&&B.intro&&!(b.fights>0)){G(d,B.intro);return}G(d,Qt.default.line("intro",d.profile,{memory:b.fights>0?b:null})),b.ease>0?G(d,Qt.default.line("ease",d.profile)):d.tune.practised&&G(d,Qt.default.line("studied",d.profile,{wins:b.wins}))}function q(d,b){d.settled||(d.settled=!0,Qt.default.save(n,Qt.default.settle(d.mem,d.profile,b)))}function j(){var d=0;return l.ents.forEach(function(b){b.summoned&&je(b)&&d++}),d}function fe(d){for(var b=0,B=0;B<30&&b<2;B++){var ce=p()*Math.PI*2,J=v(1.5,3.5),ae=d.x+Math.cos(ce)*J,_e=d.z+Math.sin(ce)*J,Se=Xo(l.W,ae,_e,.3);if(!(kr(l.W,ae,_e,.4,Se,.85,0).blocked||De(ae,_e)<3||!xr(l.W,d.x,d.y+.5,d.z,ae,Se+.5,_e))){var Re=S("imp",ae,_e,Se);Re.summoned=!0,Re.state="chase",l.ents.push(Re),l.stats.totalKills++,x("fx","summon",ae,Se+.4,_e),b++}}b&&(G(d,Qt.default.line("summon",d.profile)),A("rileySight",d)),d.cools.summon=18*d.tune.coolScale}function Te(d,b,B,ce){var J={los:d.los,dist:b,phase:d.phase,cool:d.cools,impsAlive:j(),playerWeapon:l.p.weapon},ae=Qt.default.legalMoves(J);if(d.allowed){var _e=ae.filter(function(Ze){return d.allowed.indexOf(Ze)>=0});_e.length&&(ae=_e)}var Se=Qt.default.choose(ae,d.profile,J,t);d.move=Se.move,G(d,Qt.default.insight(d.profile,Se.why),!0);var Re=d.profile;switch(Se.move){case"volley":case"lead":d.state="windup",d.attack=Se.move,d.st=Se.move==="volley"?.55:.4,d.moveT=d.st+.2;break;case"backoff":d.moveT=1,d.moveAng=Math.atan2(-ce,-B)+v(-.5,.5);break;case"flank":d.flankSide=Qt.default.strafeHabit(Re)>.3?Qt.default.strafeSide(Re):p()<.5?1:-1,d.moveT=1.3;break;case"close":d.moveT=1.2;break;case"seek":d.moveT=.8;break;case"summon":fe(d),d.moveT=.8;break;case"shield":d.shieldT=1.6,d.moveT=1.2,d.cools.shield=8*d.tune.coolScale,A("rileyShield",d);break}}function ye(d,b){var B=l.p,ce=d.tune,J=ce.coolScale*(d.phase>=3?.7:1);if(d.attack==="melee"){b<1.9&&d.los&&(me(v(10,20)*ce.dmgScale|0,d),A("punch",d)),d.cools.melee=1.2;return}if(d.los){var ae=B.y+B.eyeH*.8,_e=Math.atan2(B.z-d.z,B.x-d.x);if(d.attack==="volley"){for(var Se=-1;Se<=1;Se++){var Re=_e+Se*.2;Ee(d,!0,d.x+Math.cos(Re)*b,ae,d.z+Math.sin(Re)*b,6.5,v(8,16)*ce.dmgScale)}d.cools.volley=v(1.6,2.4)*J}else if(d.attack==="lead"){var Ze=9,Je=b/Ze;Ee(d,!0,B.x+l.input.vx*Je,ae,B.z+l.input.vz*Je,Ze,v(10,18)*ce.dmgScale),d.cools.lead=v(1.8,2.8)*J}}}function be(d,b){var B=l.p,ce=d.profile;d.animT+=b,d.st-=b,d.talkT-=b,d.shieldT-=b,d.moveT-=b,d.flashT-=b;for(var J in d.cools)d.cools[J]-=b;d.losT-=b,d.losT<=0&&(d.losT=.15,d.los=xr(l.W,d.x,d.y+d.h*.85,d.z,B.x,he(),B.z));var ae=B.x-d.x,_e=B.z-d.z,Se=Math.sqrt(ae*ae+_e*_e);if(d.state==="idle"){d.los&&!B.dead&&(V(d),Q(d));return}if(d.state==="die"){d.st<=-1.2&&(d.state="dead");return}if(!(d.state==="dead"||B.dead)){if(Qt.default.observe(ce,{dt:b,los:d.los,dist:Se,strafe:l.input.strafe,moving:l.input.moving}),d.state==="pain"){d.st<=0&&(d.state="chase");return}if(d.state==="windup"){d.st<=0&&(d.state="chase",ye(d,Se));return}if(Se<1.3&&d.los&&d.cools.melee<=0){d.state="windup",d.attack="melee",d.st=.3;return}if(!(d.moveT<=0&&(Te(d,Se,ae,_e),d.state==="windup"))){var Re=Math.atan2(_e,ae),Ze=null;switch(d.move){case"backoff":Ze=d.moveAng;break;case"close":Ze=Re;break;case"flank":case"shield":Ze=Re+d.flankSide*1.35;break;case"seek":Ze=pe(d),Ze===null&&(Ze=Re);break}if(Ze!==null){var Je=d.speed*(d.phase>=3?1.25:1)*b;zr(l.W,d,Math.cos(Ze)*Je,Math.sin(Ze)*Je,d.radius,d.h,Xn)||(d.flankSide=-d.flankSide,d.moveAng+=Math.PI/2),Xe(d)}}}}function Ie(d,b){if(d.shieldT>0)return x("fx","spark",d.x,d.y+.5,d.z),A("rileyShield",d),!0;if(l.firing&&d.lastShot!==l.shotId&&(d.lastShot=l.shotId,d.profile.hits++),b&&!b.barrel&&b.kind==="imp"){var B=b.target===d?"impsTurned":"friendlyFire";d.profile.said[B]||(d.profile.said[B]=!0,G(d,Qt.default.line(B,d.profile)))}return!1}function Ye(d){if(d.hp<=0){A("rileyDerez",d),G(d,Qt.default.line("defeated",d.profile)),d.sparring&&T("RILEY: THAT WAS JUST PRACTICE. I'LL REMEMBER HOW YOU FIGHT.","#6fe0ec",6),q(d,!0),l.exitT=d.sparring?6.5:5;return}d.sparring||(d.phase<3&&d.hp<d.maxHp*.33?(d.phase=3,G(d,Qt.default.line("phase3",d.profile))):d.phase<2&&d.hp<d.maxHp*.66&&(d.phase=2,G(d,Qt.default.line("phase2",d.profile)),fe(d)))}function et(d){for(var b=[],B=d[1];B<=d[3];B++)for(var ce=d[0];ce<=d[2];ce++)ce>=0&&B>=0&&ce<l.mw&&B<l.mh&&b.push(B*l.mw+ce);return b}function X(d,b){(l.L.events||[]).forEach(function(B,ce){if(!l.fired[ce]){var J=B.when||{},ae=d==="use"&&J.use&&J.use[0]+","+J.use[1]===b||d==="pickup"&&J.pickup===b||d==="cleared"&&J.cleared===b||d==="start"&&J.start;ae&&we(B,ce)}})}function we(d,b){l.fired[b]=!0,ve(d.do||[])}function ve(d){d.forEach(function(b){if(b.after){l.timers.push({t:b.after,acts:b.do||[]});return}var B=b.raise||b.lower;B&&(ld(l.W,et(B),b.to,b.speed),A("doorOpen",{x:B[0]+.5,y:0,z:B[1]+.5})),b.lava&&et(b.lava).forEach(function(ce){l.W.lava[ce]=b.on?1:0}),b.seal&&b.seal.forEach(function(ce){var J=l.doors[ce];J&&(J.sealed=!0,J.state!=="closed"&&(J.state="closing"))}),b.open&&b.open.forEach(function(ce){var J=l.doors[ce];J&&(J.sealed=!1,xe(J,!1))}),b.spawn&&b.spawn.forEach(function(ce){var J=hn(l.W,ce.x,ce.z),ae=S(ce.kind,ce.x+.5,ce.z+.5,J);ae.state="chase",ae.wave=b.wave||null,l.ents.push(ae),l.stats.totalKills++,x("fx","summon",ae.x,J+.4,ae.z)}),b.wave&&(l.waves[b.wave]=!0),b.light&&(l.lightsOff[b.light]=b.on===!1),b.say&&(T("RILEY: "+b.say,"#6fe0ec",Math.max(4.5,b.say.length/14)),A("rileyTalk")),b.notice&&D(b.notice,"#ff9a28",2.5),b.shake&&H(b.shake)})}function He(d){for(var b=l.p,B=l.L.events||[],ce=l.timers.length-1;ce>=0;ce--)if((l.timers[ce].t-=d)<=0){var J=l.timers.splice(ce,1)[0];ve(J.acts)}for(var ae=0;ae<B.length;ae++){var _e=B[ae].when||{};if(!(l.fired[ae]||!_e.enter)){var Se=_e.enter;b.x>=Se[0]&&b.x<=Se[2]+1&&b.z>=Se[1]&&b.z<=Se[3]+1&&we(B[ae],ae)}}for(var Re in l.waves)l.waves[Re]&&(l.ents.some(function(Je){return Je.wave===Re&&je(Je)})||(l.waves[Re]=!1,X("cleared",Re)));if(l.lavaT-=d,l.lavaT<=0){l.lavaT=.5;var Ze=Math.floor(b.z)*l.mw+Math.floor(b.x);!b.dead&&l.W.lava[Ze]&&b.onGround&&(me(6,{x:b.x,z:b.z,kind:"lava"}),_("lava")),l.ents.forEach(function(Je){Je.mob&&!Je.barrel&&je(Je)&&l.W.lava[Math.floor(Je.z)*l.mw+Math.floor(Je.x)]&&it(Je,8)})}}function ze(){for(var d=l.p,b=he(),B=12,ce=l.W,J=Math.floor(d.x),ae=Math.floor(d.z),_e=Math.max(0,ae-B);_e<=Math.min(l.mh-1,ae+B);_e++)for(var Se=Math.max(0,J-B);Se<=Math.min(l.mw-1,J+B);Se++){var Re=_e*l.mw+Se;l.seen[Re]||vr(ce,Se,_e)||xr(ce,d.x,b,d.z,Se+.5,hn(ce,Se,_e)+.4,_e+.5)&&(l.seen[Re]=1,Ta(ce,Se,_e).forEach(function(Ze){ce.cells[Ze.i]!==0&&(l.seen[Ze.i]=1)}))}}function Me(){ze();var d=l.p,b=he();function B(Se,Re){return g(Se.x,Se.z,d.x,d.z)<Re*Re&&xr(l.W,d.x,b,d.z,Se.x,(Se.y||0)+(Se.h||.3)*.6,Se.z)}for(var ce=0;ce<l.ents.length;ce++){var J=l.ents[ce];if(J.kind==="pickup"&&!J.spotted&&(J.item==="r"||J.item==="u")&&B(J,14)&&(J.spotted=!0),J.mob&&!J.barrel&&je(J)&&md["meet_"+J.kind]&&!r.seenTips["meet_"+J.kind]&&B(J,11)&&_("meet_"+J.kind),J.barrel&&!J.gone&&!r.seenTips.barrel&&B(J,10))for(var ae=0;ae<l.ents.length;ae++){var _e=l.ents[ae];if(_e.mob&&!_e.barrel&&je(_e)&&_e.state!=="idle"&&g(_e.x,_e.z,J.x,J.z)<4){_("barrel");break}}J.kind==="torch"&&u===0&&l.time>20&&B(J,5)&&_("torches")}l.W.lifts.forEach(function(Se){g(Se.x+.5,Se.z+.5,d.x,d.z)<16&&_("lift")})}function st(){var d=l.info,b=l.p,B,ce=d.keys.blue&&!b.keys.blue?"u":d.keys.red&&!b.keys.red?"r":null;if(ce){for(var J=0;J<l.ents.length;J++){var ae=l.ents[J];if(ae.kind==="pickup"&&ae.item===ce&&!ae.gone)return ae.spotted?{x:ae.x,y:ae.y+.3,z:ae.z}:null}return null}for(B in l.doors){var _e=l.doors[B];if(_e.locked&&!_e.used&&l.seen[_e.z*l.mw+_e.x])return{x:_e.x+.5,y:hn(l.W,_e.x,_e.z)+.8,z:_e.z+.5}}var Se=k();if(Se.length){var Re=null,Ze=1e9;return Se.forEach(function(Tt){if(l.seen[Tt[1]*l.mw+Tt[0]]){var bt=Math.hypot(Tt[0]+.5-b.x,Tt[1]+.5-b.z);bt<Ze&&(Ze=bt,Re=Tt)}}),Re?{x:Re[0]+.5,y:1,z:Re[1]+.5,use:{x:Re[0],z:Re[1]}}:null}var Je=l.exitCell;if(!d.boss&&Je&&l.seen[Je.z*l.mw+Je.x])return{x:Je.x+.5,y:.8,z:Je.z+.5};var ut=l.boss;return d.boss&&ut&&je(ut)&&l.seen[Math.floor(ut.z)*l.mw+Math.floor(ut.x)]?{x:ut.x,y:ut.y+ut.h+.3,z:ut.z}:null}function tt(d){var b=l.p,B=pd[d.item],ce=m().ammo,J=null;switch(d.item){case"h":b.hp>=100?J="HEALTH":b.hp=Math.min(100,b.hp+10);break;case"+":b.hp>=100?J="HEALTH":b.hp=Math.min(100,b.hp+25);break;case"A":b.armor>=100?J="ARMOR":(b.armor=100,b.grinT=1);break;case"b":b.ammo.bullets>=200?J="SPARKS":b.ammo.bullets=Math.min(200,b.ammo.bullets+10*ce);break;case"a":b.ammo.shells>=50?J="BELL CHARGES":b.ammo.shells=Math.min(50,b.ammo.shells+4*ce);break;case"2":b.weapons.shotgun=!0,b.ammo.shells=Math.min(50,b.ammo.shells+8*ce),b.grinT=1.2,b.weapon!=="shotgun"&&te("shotgun",!0),D("BELL BLASTER!  PRESS 3","#ffd23e",2.5),_("weapons");break;case"r":case"u":var ae=d.item==="r"?"red":"blue";b.keys[ae]=!0,b.grinT=1,D(ae.toUpperCase()+" KEYSTONE",ae==="red"?"#ff5a3a":"#6a98ff",2.5),_("key");break;case"P":b.hp=Math.min(200,b.hp+100),b.grinT=1.2;break}if(J){d.touching=!0,T(J+" ALREADY FULL","#8a8478",1.5);return}d.gone=!0,l.stats.items++,X("pickup",d.item),b.bonusFlash=Math.min(.35,b.bonusFlash+.22),A(B.snd),x("fx","pickup",d.x,d.y+.3,d.z,{item:d.item}),T(B.msg),b.autoFist&&(d.item==="b"||d.item==="a")&&(b.autoFist=!1,te(ne(b),!0))}function kt(d){var b=l.p;if(b.dead){b.deadT+=d,b.eyeH=Math.max(.15,b.eyeH-d*1.2);return}var B=!!a.KeyC;if(!B&&b.crouch){var ce=kr(l.W,b.x,b.z,fn.r,b.y,fn.h,0);ce.blocked||(b.crouch=!1)}else b.crouch=B;var J=b.crouch?fn.hCrouch:fn.h,ae=b.crouch?fn.eyeCrouch:fn.eye;b.eyeH+=(ae-b.eyeH)*Math.min(1,d*14);var _e=a.ShiftLeft||a.ShiftRight,Se=0,Re=0;(a.KeyW||a.ArrowUp)&&(Se+=1),(a.KeyS||a.ArrowDown)&&(Se-=1),a.KeyA&&(Re-=1),a.KeyD&&(Re+=1),a.ArrowLeft&&(b.ang-=2.6*d),a.ArrowRight&&(b.ang+=2.6*d),a.PageUp&&(b.pitch+=1.6*d),a.PageDown&&(b.pitch-=1.6*d),b.pitch=y(b.pitch,-1.3,1.3),Se&&Re&&(Se*=.7071,Re*=.7071);var Ze=b.crouch?fn.walk*.5:_e?fn.run:fn.walk,Je=Math.cos(b.ang),ut=Math.sin(b.ang),Tt=(Je*Se-ut*Re)*Ze,bt=(ut*Se+Je*Re)*Ze,cn=b.onGround?14:3;b.vx+=(Tt-b.vx)*Math.min(1,d*cn),b.vz+=(bt-b.vz)*Math.min(1,d*cn),a.Space&&!b.jumpHeld&&b.onGround&&!b.crouch&&(b.vy=fn.jumpV,b.onGround=!1,l.jumped=!0,A("jump")),b.jumpHeld=!!a.Space;var Ut=b.x,Ct=b.z,un=b.onGround?Xn:Math.max(0,Math.min(Iu,.12));zr(l.W,b,b.vx*d,b.vz*d,fn.r,J,un),_e&&(Se||Re)&&(l.ranT+=d);var R=Xo(l.W,b.x,b.z,fn.r),W=kr(l.W,b.x,b.z,fn.r,Math.max(b.y,R),J,10).ceil;b.onGround&&R<b.y-.02&&R>b.y-Xn?b.y=R:b.onGround&&R<b.y&&(b.onGround=!1),b.onGround&&R>b.y&&(b.y=R),b.onGround||(b.vy-=fn.gravity*d,b.y+=b.vy*d,W!==void 0&&b.y+J>W&&(b.y=W-J,b.vy>0&&(b.vy=0)),b.y<=R&&(b.vy<-5&&(H(1.2),b.landT=.25),b.vy<-2&&A("land"),b.y=R,b.vy=0,b.onGround=!0)),l.input.strafe=Re,l.input.moving=b.x!==Ut||b.z!==Ct,l.input.vx=(b.x-Ut)/d,l.input.vz=(b.z-Ct)/d,u===0&&(l.time>14&&l.ranT<.3&&_("run"),l.time>25&&!l.jumped&&_("jump"),l.time>40&&!l.usedMap&&_("map"),l.time>70&&!l.stats.secrets&&_("secret")),a.KeyE?b.usedHeld||(b.usedHeld=!0,ct()):b.usedHeld=!1,b.nextWeapon&&b.raiseT<=0&&!(b.lowerT>0)&&(b.lowerT=.15),b.lowerT>0&&(b.lowerT-=d,b.lowerT<=0&&(b.weapon=b.nextWeapon||b.weapon,b.nextWeapon=null,b.raiseT=.15)),b.raiseT>0&&(b.raiseT-=d),b.cool-=d,b.fireT+=d;var ee=ba[b.weapon];if(o&&b.cool<=0&&b.raiseT<=0&&b.lowerT<=0&&!b.nextWeapon&&l.exitT<0)if(ee.ammo&&b.ammo[ee.ammo]<=0){A("noAmmo");var re=ne(b);T("OUT OF "+hd[ee.ammo]+"!"),te(re,!0)&&re==="fist"&&(b.autoFist=!0),_("lowAmmo"),b.cool=.3}else{if(ee.ammo&&b.ammo[ee.ammo]--,b.cool=ee.rate,b.fireT=0,A(b.weapon==="fist"?"punch":b.weapon),b.weapon==="shotgun"&&A("pump"),ee.melee||(H(ee.shake),x("fx","muzzle",b.x+Math.cos(b.ang)*.4,he()-.1,b.z+Math.sin(b.ang)*.4,{weapon:b.weapon}),x("fx","casing",b.x,he()-.15,b.z,{weapon:b.weapon,ang:b.ang,delay:b.weapon==="shotgun"?.45:0})),U(l.boss)&&Qt.default.noteShot(l.boss.profile,b.weapon,De(l.boss.x,l.boss.z)),l.shotId++,l.firing=!0,ee.melee)Ue(b.ang,b.pitch,ee.dmgMin,ee.dmgMax,!0,ee.knock);else for(var oe=0;oe<ee.pellets;oe++)Ue(b.ang+(p()-.5)*2*ee.spread,b.pitch+(p()-.5)*ee.spread,ee.dmgMin,ee.dmgMax,!1,ee.knock);l.firing=!1,ee.melee||nt(b.x,b.z,14)}for(var Pe=0;Pe<l.ents.length;Pe++){var Oe=l.ents[Pe];Oe.kind!=="pickup"||Oe.gone||(g(Oe.x,Oe.z,b.x,b.z)<.45&&Math.abs(Oe.y-b.y)<.6?Oe.touching||tt(Oe):Oe.touching=!1)}for(var Ae=l.L.triggers||[],Ge=f[u]||(f[u]={}),Ve=0;Ve<Ae.length;Ve++){var ht=Ae[Ve].box;Ge[Ve]||b.x<ht[0]||b.x>ht[2]+1||b.z<ht[1]||b.z>ht[3]+1||(Ge[Ve]=!0,T("RILEY: "+Ae[Ve].say,"#6fe0ec",Math.max(4.5,Ae[Ve].say.length/14)),A("rileyTalk"))}var gt=Math.floor(b.x),qe=Math.floor(b.z);l.secrets.forEach(function(Mt){!Mt.found&&Mt.x===gt&&Mt.z===qe&&(Mt.found=!0,l.stats.secrets++,A("secret"),D("TRUE-MAP FRAGMENT FOUND!","#ffd23e",2.5))})}function Nt(d){if(!(c!=="game"||!l)){var b=l.p;l.events.length=0,l.time+=d,b.dmgFlash=Math.max(0,b.dmgFlash-d*.8),b.bonusFlash=Math.max(0,b.bonusFlash-d*1.5),b.painT=Math.max(0,b.painT-d),b.grinT=Math.max(0,b.grinT-d),b.landT=Math.max(0,b.landT-d),l.shake=Math.max(0,l.shake-d*14);for(var B=0;B<l.msgs.length;B++)l.msgs[B].t-=d;for(;l.msgs.length&&l.msgs[0].t<=0;)l.msgs.shift();l.notice&&(l.notice.t-=d)<=0&&(l.notice=null),l.hitT-=d,l.killT-=d,l.blockT-=d;for(var ce=l.hurtDirs.length-1;ce>=0;ce--)(l.hurtDirs[ce].t-=d*.9)<=0&&l.hurtDirs.splice(ce,1);if(w(d),l.spotT-=d,l.spotT<=0&&(l.spotT=.3,Me()),l.exitT>=0&&(l.exitT-=d,l.exitT<=0)){h={name:l.L.name,time:l.time,par:l.L.par,kills:l.stats.kills,totalKills:l.stats.totalKills,items:l.stats.items,totalItems:l.stats.totalItems,secrets:l.stats.secrets,totalSecrets:l.stats.totalSecrets},s(u,h),c="inter";return}$(d),Ce(d),cd(l.W,d),l.W.movers.forEach(function(Tt){Tt.moved&&[b].concat(l.ents).forEach(function(bt){if(!(bt!==b&&!(bt.mob&&je(bt))&&bt.kind!=="pickup")){var cn=Math.floor(bt.z)*l.mw+Math.floor(bt.x);Tt.cells.indexOf(cn)>=0&&Math.abs(bt.y-(Tt.pos-Tt.moved))<.08&&(bt.y=Tt.pos)}})}),He(d),l.flowT-=d,l.flowT<=0&&(l.flowT=.25,Z()),kt(d);for(var J=l.ents.length-1;J>=0;J--){var ae=l.ents[J];if(ae.gone){l.ents.splice(J,1);continue}if(ae.kind==="torch"){ae.animT+=d;continue}if(ae.kind==="pickup"){ae.bob+=d;continue}if(ae.kind==="proj"){ae.animT+=d;for(var _e=3,Se=!1,Re=0;Re<_e&&!Se;Re++){ae.x+=ae.vx*d/_e,ae.y+=ae.vy*d/_e,ae.z+=ae.vz*d/_e;var Ze=Math.floor(ae.x),Je=Math.floor(ae.z),ut=vr(l.W,Ze,Je)||ae.y<hn(l.W,Ze,Je)||ae.y>Ni(l.W,Ze,Je)?"wall":qn(ae);!ut&&!b.dead&&g(ae.x,ae.z,b.x,b.z)<.2&&ae.y>b.y-.1&&ae.y<b.y+(b.crouch?fn.hCrouch:fn.h)+.1&&(ut="player"),ut&&(Se=!0,ut==="player"?(me(ae.dmg|0,{x:ae.x-ae.vx,z:ae.z-ae.vz,kind:ae.owner?ae.owner.kind:"imp"}),A("fireExplode")):(ut!=="wall"&&it(ut,ae.dmg|0,ae.owner),A("fireExplode",ae)),x("fx",ae.green?"greenBurst":"fireBurst",ae.x,ae.y,ae.z),l.ents.splice(J,1))}continue}if(ae.barrel){ae.state==="boom"&&(ae.st-=d,ae.st<=0&&de(ae));continue}ae.kind==="riley"?be(ae,d):ae.mob&&F(ae,d)}}}function qn(d){for(var b=0;b<l.ents.length;b++){var B=l.ents[b];if(!(!B.mob||B===d.owner||!je(B))&&!(!B.barrel&&d.owner&&B.kind===d.owner.kind)){var ce=B.radius+.1;if(g(d.x,d.z,B.x,B.z)<ce*ce&&d.y>=B.y-.1&&d.y<=B.y+B.h+.1)return B}}return null}function ii(){var d=l.p,b=Math.cos(d.pitch),B=Math.cos(d.ang)*b,ce=Math.sin(d.ang)*b,J=Math.sin(d.pitch),ae=Yo(l.W,d.x,he(),d.z,B,J,ce,40),_e=null,Se=ae.dist;return l.ents.forEach(function(Re){if(!(!Re.mob||!je(Re))){var Ze=dt(d.x,he(),d.z,B,J,ce,Re);Ze!==null&&Ze<Se&&(_e=Re,Se=Ze)}}),_e}var Ma=!1;function bu(){if(c==="inter"){if(!Ma){Ma=!0;return}Ma=!1,u+1>=e.length?c="victory":L(u+1,!0)}else c==="victory"?c="title":c==="game"&&l&&l.p.dead&&l.p.deadT>1.2&&M()}function qo(){return{floorAt:function(d,b){return vr(l.W,d,b)&&!(Ji(l.W,d,b)&&!Ji(l.W,d,b).locked)?null:hn(l.W,d,b)},neighbours:function(d,b){var B=[],ce=hn(l.W,d,b);return Ta(l.W,d,b).forEach(function(J){var ae=Yn(l.W,J.x,J.z);if(!(ae!==0&&!gi[ae])){var _e=Ji(l.W,J.x,J.z);if(!(_e&&_e.sealed)){var Se=hn(l.W,J.x,J.z)-ce,Re=Se<=.02&&Se>=-.02?"walk":Se<0?"drop":Se<=Xn?"step":Se<=Iu?"jump":null;Re&&B.push({cx:J.x,cz:J.z,cost:Re==="jump"?2:1,kind:Re})}}}),B}}}return{keys:a,state:function(){return l},mode:function(){return c},setMode:function(d){c=d},interStats:function(){return h},levelIndex:function(){return u},levels:e,update:Nt,startLevel:L,retryLevel:M,onEnter:bu,setFire:function(d){o=!!d},switchWeapon:te,cycleWeapon:le,quickSwitch:ue,useTarget:We,usePrompt:z,useAction:ct,objective:P,goalTarget:st,aimTarget:ii,hurtPlayer:me,walkGraph:qo,levelInfo:C,hasAmmo:Y,settings:r,DIFFS:Gr}}var _d=_s(gd(),1);var vd={name:"E1M2: THE FURNACE",floor:"slab",ceil:"ceilDark",par:300,playerAngle:-1.5707963,ceilHeight:2.5,map:["####################################","########HHHHHHHHHXHHHHHHHHHH########","########H..................H########","########H.h..t........t..+.H########","########H.....~~~~~~~~.....H########","########H..................H########","########H........b.........H########","%%%=%%%%H.....H......H.....HMMMMMMMM","%......%H.....H......H.....HM.....MM","%.i....%H.......a..a.......HM...iAMM","%......%H..................HM..r..MM","%......%HHHHHHHHHRHHHHHHHHHHM.....MM","%..i...%t.......t.t........tM......M","%......D.a................o.M....M.M","%..%%..%......~~~~~~~~......D....M.M","%......%...T..~~~~~~~~..T...M.MM.M.M","%......%......~~~HH~~~......M....M.M","%......%..i...~~~HH~~~...i..M....M.M","%......%......~~~~~~~~......M...g..M","%.%%...%......~~~~~~~~......M......M","%......%...T............T...M.MM...M","%....i.D..h.................D......M","%......%t.................btM......M","%...h..%.o..t..........t....M.g..+.M","%......%####............####M......M","%%S%%%%%####.......b....####MMMMMMMM","#...########.....p......############","#*Pa########............############","####################################","####################################"],heights:["000000000000000000000000000000000000","000000000000000000000000000000000000","000000000666222228222222666000000000","000000000666222222222222666000000000","000000000666220000000022666000000000","000000000666222222222222666000000000","000000000666422222222224666000000000","000000000666222222222222666000000000","033333300666222222222222666008888810","033333300666222222222222666008888810","033333300666222222222222666008888810","011111100000000000000000000008888810","011111102222222222222222222208888880","011111102222222222222222222201111170","011111102222220000000022222201111160","011111102222220000000022222201111150","011111102222220000000022222201111140","011111102222220000000022222201111130","011111102222220000000022222201111120","011111102222220000000022222201111110","011111102222222222222222222201111110","011111102222222222222222222201111110","011111102222222222222222222201111110","011111102222332222222233222201111110","011111100000448888888844000001111110","000000000000558888888855000000000000","011100000000668888888866000000000000","011100000000778888888877000000000000","000000000000000000000000000000000000","000000000000000000000000000000000000"],ceilings:["....................................","....................................",".........qqqqqqqqqqqqqqqqqq.........",".........qqqqqqqqqqqqqqqqqq.........",".........qqqqqqqqqqqqqqqqqq.........",".........qqqqqqqqqqqqqqqqqq.........",".........qqqqqqqqqqqqqqqqqq.........",".........qqqqqqqqqqqqqqqqqq.........",".eeeeee..qqqqqqqqqqqqqqqqqq..kkkkkk.",".eeeeee..qqqqqqqqqqqqqqqqqq..kkkkkk.",".eeeeee..qqqqqqqqqqqqqqqqqq..kkkkkk.",".eeeeee......................kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.....mmmmmmmmmmmm.....kkkkkk.","............mmmmmmmmmmmm............",".eee........mmmmmmmmmmmm............",".eee........mmmmmmmmmmmm............","....................................","...................................."],events:[{when:{use:[3,7]},do:[{notice:"THE FURNACE IS DRAINING!"},{shake:3},{say:"YOU DID IT! THE PIT'S DRAINING. THAT'S A SHORTCUT STRAIGHT TO THE RED DOOR."},{lava:[14,14,21,19],on:!1},{raise:[14,14,21,19],to:.5,speed:.25}]},{when:{enter:[12,5,23,9]},do:[{seal:["17,11"]},{notice:"SEALED IN!"},{shake:2},{say:"IT'S A TRAP! KEEP MOVING, USE THE PILLARS AND THE HIGH GROUND."},{after:2,do:[{wave:"forge1",spawn:[{kind:"imp",x:10,z:3},{kind:"imp",x:25,z:3},{kind:"gnasher",x:17,z:3}]}]}]},{when:{cleared:"forge1"},do:[{say:"ONE MORE WAVE. THEY ALWAYS SEND ONE MORE."},{after:1.5,do:[{wave:"forge2",spawn:[{kind:"gnasher",x:10,z:9},{kind:"gnasher",x:25,z:9},{kind:"imp",x:10,z:5},{kind:"imp",x:25,z:5}]}]}]},{when:{cleared:"forge2"},do:[{notice:"FORGE CLEARED!"},{open:["17,11"]},{say:"THAT WAS AWESOME. THE WAYSTONE IS BEHIND THE PLINTH. IT'S SINKING NOW."},{lower:[17,2,17,2],to:.5,speed:.6}]}],triggers:[{box:[14,24,21,27],say:"THE OVERSEERS' FURNACE. THAT PIT IS RED MERCURY. A SWITCH SOMEWHERE DRAINS IT. THE RED DOOR BEHIND IT LEADS ON."},{box:[1,11,6,24],say:"DARK IN HERE. LISTEN FOR THE HOLLOWS BEFORE YOU SEE THEM."},{box:[29,12,34,24],say:"THE RED KEYSTONE IS UP ON THE TANKS. THE STAIRS ARE ON THE FAR WALL."}],lights:[{id:"pit",x:17.5,z:17,y:1.2,color:16722480,intensity:5,dist:14},{id:"forge",x:17.5,z:5,y:3,color:16726564,intensity:4,dist:14},{id:"tanks",x:31.5,z:16,y:3.5,color:6990079,intensity:2.5,dist:12},{id:"bunkerflicker",x:3.5,z:16,y:2.5,color:16760960,intensity:1.6,dist:8,flicker:!0}],darkZones:[[1,8,6,27]]};var xd={name:"E1M3: THE RESET ENGINE",floor:"slab",ceil:"ceilDark",par:330,playerAngle:-1.5707963,ceilHeight:2.5,map:["#####HHHHHHHHHHHHXHHHHHHHHHHHHH#####","#####H........................H#####","#####H.+..t..............t..+.H#####","#####H.....H...HHHHHH...H.....H#####","#####H.........HHHHHH.........H#####","#####H......b..HHHHHH..b......H#####","#####H........................H#####","#####H.......~........~.......H#####","#####H.....H.~...HH...~.H.....H#####","#####H.a.....~........~.....a.H#####","#####H........................H#####","#####HHHHHHHHHHHHDDHHHHHHHHHHHH#####","################H..H################","################H..H################","################H..H################","%%=%%%###=######H..H##########HHH=HH","%....%#.h.ia.###H..H##########H....H","%i...%H......LHHH..HHHHHHHHHHHHi..AH","%....%..........t..t..........H..g.H","%.i%.%.h....................h.H....H","%..%.%......Mi.........M..o...H~..~H","%M.%.%...M.....~~~~~~.....M...H~..~H","%..%.%.........~HHHH~.........H~..~H","%..%.%tM.......~HHHH~.......MtH....H","%.i..D....i.M..~HHHH~..M.i....D....H","%a...%.........~HHHH~.........H....H","%.M..%...M.....~~~~~~.....M...H.g..H","%...+%..o.....a......b.......tHb...H","%....Dt........T....T.........D...hH","%....%HHHHHH............HHHHHHH....H","%%S%%%######............######HHHHHH","#...########............############","#*PA########t..........t############","############.......b....############","############............############","###############.......##############","##############..a.2..###############","##############...p....##############","##############t......t##############","####################################","####################################"],heights:["000000000000000000000000000000000000","00000066622222222aa22222222666000000","000000666222222222222222222666000000","000000666222222222222222222666000000","000000666222222222222222222666000000","000000666422222222222222224666000000","000000666222222222222222222666000000","000000666222202222222202222666000000","000000666222202222222202222666000000","000000666222202222222202222666000000","000000666222222222222222222666000000","000000000000000000000000000000000000","000000000000000002200000000000000000","00000000000000000aa00000000000000000","000000000000000002200000000000000000","00000000000000000aa00000000000000000","066660088888800002200000000000011110","06666008888888000aa00000000000011110","066660222222222222222222222222011110","011160222222222222222222222222011110","011150222222222222222222222222002200","011140222222222000000222222222002200","011130222222222000000222222222002200","011120222222222000000222222222011110","011110222222222000000222222222011110","011110222222222000000222222222011110","011110222222222000000222222222011110","011110222222222222222222222222011110","011110222222222222222222222222011110","011110000000332222222233000000011110","000000000000442222222244000000000000","011100000000552222222255000000000000","011100000000666666666666000000000000","000000000000666666666666000000000000","000000000000666666666666000000000000","000000000000006666666600000000000000","000000000000006666666600000000000000","000000000000006666666600000000000000","000000000000006666666600000000000000","000000000000000000000000000000000000","000000000000000000000000000000000000"],ceilings:["....................................","......qqqqqqqqqqqqqqqqqqqqqqqq......","......qqqqqqqqqqqqqqqqqqqqqqqq......","......qqqqqqqqqqqqqqqqqqqqqqqq......","......qqqqqqqqqqqqqqqqqqqqqqqq......","......qqqqqqqqqqqqqqqqqqqqqqqq......","......qqqqqqqqqqqqqqqqqqqqqqqq......","......qqqqqqqqqqqqqqqqqqqqqqqq......","......qqqqqqqqqqqqqqqqqqqqqqqq......","......qqqqqqqqqqqqqqqqqqqqqqqq......","......qqqqqqqqqqqqqqqqqqqqqqqq......","....................................",".................kk.................",".................kk.................",".................kk.................",".................kk.................",".kkkk..mmmmmm....kk............kkkk.",".kkkk..mmmmmm....kk............kkkk.",".kkkk.mmmmmmmmmmmmmmmmmmmmmmmm.kkkk.",".kkkk.mmmmmmmmmmmmmmmmmmmmmmmm.kkkk.",".kkkk.mmmmmmmmmmmmmmmmmmmmmmmm.kkkk.",".kkkk.mmmmmmmmmmmmmmmmmmmmmmmm.kkkk.",".kkkk.mmmmmmmmmmmmmmmmmmmmmmmm.kkkk.",".kkkk.mmmmmmmmmmmmmmmmmmmmmmmm.kkkk.",".kkkk.mmmmmmmmmmmmmmmmmmmmmmmm.kkkk.",".kkkk.mmmmmmmmmmmmmmmmmmmmmmmm.kkkk.",".kkkk.mmmmmmmmmmmmmmmmmmmmmmmm.kkkk.",".kkkk.mmmmmmmmmmmmmmmmmmmmmmmm.kkkk.",".kkkk.mmmmmmmmmmmmmmmmmmmmmmmm.kkkk.",".kkkk.......mmmmmmmmmmmm.......kkkk.","............mmmmmmmmmmmm............",".kkk........mmmmmmmmmmmm............",".kkk........mmmmmmmmmmmm............","............mmmmmmmmmmmm............","............mmmmmmmmmmmm............","..............eeeeeeee..............","..............eeeeeeee..............","..............eeeeeeee..............","..............eeeeeeee..............","....................................","...................................."],levers:[[2,15],[33,15],[9,15]],leverGoal:"PULL THE SEAL LEVERS",events:[{when:{start:!0},do:[{light:"relit",on:!1},{light:"relitW",on:!1},{light:"relitE",on:!1},{light:"relitHall",on:!1}]},{when:{use:[2,15]},do:[{notice:"THE WEST SEAL IS DOWN"},{shake:2},{lower:[17,13,18,13],to:.5,speed:.5},{say:"THE WEST SEAL IS DOWN. HEAR THAT BELL? THE CITY REMEMBERS."}]},{when:{use:[33,15]},do:[{notice:"THE EAST SEAL IS DOWN"},{shake:2},{lower:[17,15,18,15],to:.5,speed:.5},{say:"THE EAST SEAL IS DOWN. THE MERCURY'S RUNNING COLD OVER THERE."}]},{when:{use:[9,15]},do:[{notice:"THE GALLERY SEAL IS DOWN"},{shake:2},{lower:[17,17,18,17],to:.5,speed:.5},{say:"THE GALLERY SEAL IS DOWN. YOU CAN SEE THE WHOLE ENGINE FROM UP THERE, HUH?"}]},{when:{enter:[9,2,26,9]},do:[{seal:["17,11","18,11"]},{notice:"THE RESET WARDEN!"},{shake:3},{say:"THAT'S THE WARDEN. IT RUNS THE ENGINE. STAY MOVING, USE THE PILLARS, AND RING IT WITH THE BELL BLASTER."},{after:1.5,do:[{wave:"warden",spawn:[{kind:"knight",x:17,z:6}]}]},{after:14,do:[{say:"IT'S CALLING HOLLOWS OUT OF THE WALLS!"},{wave:"adds1",spawn:[{kind:"imp",x:7,z:3},{kind:"imp",x:28,z:3}]}]},{after:30,do:[{wave:"adds2",spawn:[{kind:"gnasher",x:7,z:8},{kind:"gnasher",x:28,z:8},{kind:"imp",x:17,z:9}]}]}]},{when:{cleared:"warden"},do:[{notice:"THE ENGINE IS SILENT"},{shake:4},{light:"engine",on:!1},{light:"core",on:!1},{light:"relit",on:!0},{light:"relitW",on:!0},{light:"relitE",on:!0},{light:"relitHall",on:!0},{lava:[13,7,22,9],on:!1},{lava:[15,21,20,26],on:!1},{open:["17,11","18,11"]},{say:"YOU DID IT! THE ENGINE'S DEAD AND THE CITY'S LIGHTS ARE COMING BACK. THE WAYSTONE'S BEHIND IT. COME FIND ME AFTER."},{lower:[17,1,18,1],to:.5,speed:1}]}],triggers:[{box:[14,35,21,38],say:"THIS STREET USED TO BE THE TOP OF THE CITY. THE OVERSEERS' ENGINE IS BURYING IT. THE BELL BLASTER'S RIGHT THERE, GRAB IT."},{box:[12,32,23,34],say:"THERE IT IS: THE RESET ENGINE. THREE SEALS BLOCK THE WAY IN. EACH ONE HAS A LEVER: WEST, EAST, AND UP ON THAT GALLERY."},{box:[1,19,4,29],say:"THE BELL WORKS. THE LEVER'S UP THE TOWER. THE STAIRS START AT THE BOTTOM."},{box:[31,23,34,29],say:"CAREFUL, THAT CHANNEL IS RED MERCURY. TAKE THE BRIDGE. THE HOUNDS WON'T WAIT."},{box:[14,12,21,17],say:"ALL THREE SEALS ARE DOWN. THE WARDEN'S BEHIND THOSE DOORS. HEALTH AND AMMO FIRST?"}],lights:[{id:"core",x:17.5,z:23.5,y:3.5,color:16722480,intensity:5,dist:16},{id:"engine",x:17.5,z:6.5,y:3.5,color:16722480,intensity:4.5,dist:16},{id:"relit",x:17.5,z:7.5,y:3,color:9433343,intensity:12,dist:22},{id:"relitW",x:9.5,z:5.5,y:3,color:9433343,intensity:6,dist:12},{id:"relitE",x:25.5,z:5.5,y:3,color:9433343,intensity:6,dist:12},{id:"relitHall",x:17.5,z:23.5,y:5,color:9433343,intensity:9,dist:20},{id:"bells",x:2.5,z:22,y:3.5,color:9429247,intensity:2.4,dist:11},{id:"foundry",x:32.5,z:21,y:1.5,color:16722480,intensity:3,dist:10},{id:"street",x:17.5,z:37,y:2.4,color:16760960,intensity:1.4,dist:8,flicker:!0}],darkZones:[[14,35,21,38]]};var Hm={name:"E1M1: ASH GATES",floor:"slab",ceil:"ceilDark",par:240,playerAngle:0,ceilHeight:2.5,boss:{sparring:!0,hpScale:.4,moves:["volley","lead","flank","close","backoff","seek"],intro:"THERE YOU ARE! LET'S SPAR. I'LL WATCH HOW YOU FIGHT. READY?"},triggers:[{box:[2,25,8,30],say:"HI! I'M RILEY. I'M WAITING FOR YOU AT THE TOP. LOOK AROUND WITH THE MOUSE, MOVE WITH WASD."},{box:[7,26,9,28],say:"DOORS OPEN WITH E. GO ON, TRY IT."},{box:[15,23,28,29],say:"SEE THE BELL BLASTER UP THERE? JUMP WITH SPACE."},{box:[14,20,28,22],say:"NICE VIEW. THE BLUE KEYSTONE IS DOWN IN THE HALL. THE BLUE DOOR IS ACROSS FROM YOU."},{box:[2,17,5,21],say:"GOT IT? NOW THE BLUE DOOR. THE LIFT BEHIND IT BRINGS YOU UP TO ME."},{box:[20,11,28,15],say:"LAST STOP. GRAB WHAT YOU NEED. WHEN MY VISOR FLASHES WHITE, I'M ABOUT TO SHOOT. MOVE!"}],map:["##############################","##############.t...........t.#","##############...............#","##############....T..Y..T....#","##############....T.....T....#","##############.h...........h.#","##############...............#","##############....T.....T....#","##############.......a.......#","##############........t.t....#","#######################D######","####################..t.t....#","####################.........#","####################.....+...#","####################....A....#","####################...L.....#","#######################U######","##....................t.t...##","##.t......%%......%%........##","##u...g......i..............##","##.t.......h.....g..........##","##..........................##","####################D#########","###*Pa#########....t.t......##","####S##########.....i.....o.##","##b......######..........io.##","##.......######......h......##","##..p....D........2.........##","##.......######..o..........##","##.......######.t.........t.##","##...h...#####################","##############################"],heights:["000000000000000000000000000000","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","000000000000000000000000000000","000000000000000000008888888880","000000000000000000008888888880","000000000000000000008888888880","000000000000000000008888888880","000000000000000000008888888880","000000000000000000000000000000","000000000000000000000000000000","000000000000000000000000000000","000000000000000000000000000000","000000000001234444444444444400","000000000001234444444444444400","000000000000000000000000000000","000000000000000444444444444440","000000000000000444444444444440","000000000000000444444444444440","000000000000000446664444444440","000000000012344446664444444440","000000000000000446664444444440","000000000000000444444444444440","000000000000000000000000000000","000000000000000000000000000000"],ceilings:["..............................","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............................","....................iiiiiiiii.","....................iiiiiiiii.","....................iiiiiiiii.","....................iiiiiiiii.","....................iiiiiiiii.","..............................","..gggggggggggggggggggggggggg..","..gggggggggggggggggggggggggg..","..gggggggggggggggggggggggggg..","..gggggggggggggggggggggggggg..","..gggggggggggggggggggggggggg..","..............................","...............eeeeeeeeeeeeee.","...............eeeeeeeeeeeeee.","...............eeeeeeeeeeeeee.","...............eeeeeeeeeeeeee.",".........cccccceeeeeeeeeeeeee.","...............eeeeeeeeeeeeee.","...............eeeeeeeeeeeeee.","..............................",".............................."]},Fm={"E1M4: RILEY'S ARENA":"E1M4: RILEY'S TRIAL"},vi=[Hm,vd,xd].concat(_d.default.slice(3).map(function(i){return Object.assign({ceilHeight:2},i,{name:Fm[i.name]||i.name})}));function Du(i){var e=i>>>0||1;return function(){e=e+1831565813|0;var t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var ip=0,ph=1,rp=2;var ao=1,sp=2,ta=3,Gi=0,Mn=1,Sn=2,ci=0,na=1,Vi=2,mh=3,gh=4,ap=5;var os=100,op=101,lp=102,cp=103,up=104,hp=200,fp=201,dp=202,pp=203,vh=204,xh=205,mp=206,gp=207,vp=208,xp=209,_p=210,yp=211,Mp=212,Sp=213,Tp=214,Sl=0,Tl=1,bl=2,Hs=3,El=4,wl=5,Al=6,Rl=7,Zl=0,bp=1,Ep=2,wi=0,oo=1,lo=2,co=3,ls=4,uo=5,ho=6,fo=7,sh="attached",wp="detached",_h=300,Lr=301,cs=302,Jl=303,jl=304,po=306,oi=1e3,ai=1001,Fs=1002,qt=1003,$l=1004;var us=1005;var an=1006,ia=1007;var Ai=1008;var Vn=1009,yh=1010,Mh=1011,ra=1012,Ql=1013,Ri=1014,jn=1015,Tn=1016,ec=1017,tc=1018,sa=1020,Sh=35902,Th=35899,bh=1021,Eh=1022,$n=1023,Ui=1026,Nr=1027,nc=1028,ic=1029,Dr=1030,rc=1031;var sc=1033,mo=33776,go=33777,vo=33778,xo=33779,ac=35840,oc=35841,lc=35842,cc=35843,uc=36196,hc=37492,fc=37496,dc=37488,pc=37489,_o=37490,mc=37491,gc=37808,vc=37809,xc=37810,_c=37811,yc=37812,Mc=37813,Sc=37814,Tc=37815,bc=37816,Ec=37817,wc=37818,Ac=37819,Rc=37820,Cc=37821,Ic=36492,Pc=36494,Lc=36495,Nc=36283,Dc=36284,yo=36285,Oc=36286,Uc=2200,Hc=2201,Ap=2202,Jr=2300,jr=2301,_l=2302,ah=2303,Yr=2400,Kr=2401,Ua=2402,Fc=2500,Rp=2501,wh=0,Mo=1,aa=2,Cp=3200;var So=0,Ip=1,Qn="",Wt="srgb",Un="srgb-linear",Ha="linear",Dt="srgb";var yl=7680;var Pp=519,Lp=512,Np=513,Dp=514,Bc=515,Op=516,Up=517,kc=518,Hp=519,Ah=35044,oa=35048;var Rh="300 es",Ti=2e3,Bs=2001;function Bm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function km(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ks(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fp(){let i=ks("canvas");return i.style.display="block",i}var yd={},zs=null;function Fa(...i){let e="THREE."+i.shift();zs?zs("log",e,...i):console.log(e,...i)}function Bp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function at(...i){i=Bp(i);let e="THREE."+i.shift();if(zs)zs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ft(...i){i=Bp(i);let e="THREE."+i.shift();if(zs)zs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Zr(...i){let e=i.join(" ");e in yd||(yd[e]=!0,at(...i))}function kp(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var zp={[Sl]:Tl,[bl]:Al,[El]:Rl,[Hs]:wl,[Tl]:Sl,[Al]:bl,[Rl]:El,[wl]:Hs},Ei=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Md=1234567,Da=Math.PI/180,$r=180/Math.PI;function bi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rn[i&255]+Rn[i>>8&255]+Rn[i>>16&255]+Rn[i>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[t&63|128]+Rn[t>>8&255]+"-"+Rn[t>>16&255]+Rn[t>>24&255]+Rn[n&255]+Rn[n>>8&255]+Rn[n>>16&255]+Rn[n>>24&255]).toLowerCase()}function wt(i,e,t){return Math.max(e,Math.min(t,i))}function Ch(i,e){return(i%e+e)%e}function zm(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Gm(i,e,t){return i!==e?(t-i)/(e-i):0}function Oa(i,e,t){return(1-t)*i+t*e}function Vm(i,e,t,n){return Oa(i,e,1-Math.exp(-t*n))}function Wm(i,e=1){return e-Math.abs(Ch(i,e*2)-e)}function qm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Xm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ym(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Km(i,e){return i+Math.random()*(e-i)}function Zm(i){return i*(.5-Math.random())}function Jm(i){i!==void 0&&(Md=i);let e=Md+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jm(i){return i*Da}function $m(i){return i*$r}function Qm(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function eg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function tg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ng(i,e,t,n,r){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),u=s((e+n)/2),l=a((e+n)/2),h=s((e-n)/2),f=a((e-n)/2),p=s((n-e)/2),v=a((n-e)/2);switch(r){case"XYX":i.set(o*l,c*h,c*f,o*u);break;case"YZY":i.set(c*f,o*l,c*h,o*u);break;case"ZXZ":i.set(c*h,c*f,o*l,o*u);break;case"XZX":i.set(o*l,c*v,c*p,o*u);break;case"YXY":i.set(c*p,o*l,c*v,o*u);break;case"ZYZ":i.set(c*v,c*p,o*l,o*u);break;default:at("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Si(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ih={DEG2RAD:Da,RAD2DEG:$r,generateUUID:bi,clamp:wt,euclideanModulo:Ch,mapLinear:zm,inverseLerp:Gm,lerp:Oa,damp:Vm,pingpong:Wm,smoothstep:qm,smootherstep:Xm,randInt:Ym,randFloat:Km,randFloatSpread:Zm,seededRandom:Jm,degToRad:jm,radToDeg:$m,isPowerOfTwo:Qm,ceilPowerOfTwo:eg,floorPowerOfTwo:tg,setQuaternionFromProperEuler:ng,normalize:Ht,denormalize:Si},Oh=class Oh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(wt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Oh.prototype.isVector2=!0;var ot=Oh,In=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],u=n[r+1],l=n[r+2],h=n[r+3],f=s[a+0],p=s[a+1],v=s[a+2],y=s[a+3];if(h!==y||c!==f||u!==p||l!==v){let g=c*f+u*p+l*v+h*y;g<0&&(f=-f,p=-p,v=-v,y=-y,g=-g);let m=1-o;if(g<.9995){let x=Math.acos(g),A=Math.sin(x);m=Math.sin(m*x)/A,o=Math.sin(o*x)/A,c=c*m+f*o,u=u*m+p*o,l=l*m+v*o,h=h*m+y*o}else{c=c*m+f*o,u=u*m+p*o,l=l*m+v*o,h=h*m+y*o;let x=1/Math.sqrt(c*c+u*u+l*l+h*h);c*=x,u*=x,l*=x,h*=x}}e[t]=c,e[t+1]=u,e[t+2]=l,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],c=n[r+1],u=n[r+2],l=n[r+3],h=s[a],f=s[a+1],p=s[a+2],v=s[a+3];return e[t]=o*v+l*h+c*p-u*f,e[t+1]=c*v+l*f+u*h-o*p,e[t+2]=u*v+l*p+o*f-c*h,e[t+3]=l*v-o*h-c*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(n/2),l=o(r/2),h=o(s/2),f=c(n/2),p=c(r/2),v=c(s/2);switch(a){case"XYZ":this._x=f*l*h+u*p*v,this._y=u*p*h-f*l*v,this._z=u*l*v+f*p*h,this._w=u*l*h-f*p*v;break;case"YXZ":this._x=f*l*h+u*p*v,this._y=u*p*h-f*l*v,this._z=u*l*v-f*p*h,this._w=u*l*h+f*p*v;break;case"ZXY":this._x=f*l*h-u*p*v,this._y=u*p*h+f*l*v,this._z=u*l*v+f*p*h,this._w=u*l*h-f*p*v;break;case"ZYX":this._x=f*l*h-u*p*v,this._y=u*p*h+f*l*v,this._z=u*l*v-f*p*h,this._w=u*l*h+f*p*v;break;case"YZX":this._x=f*l*h+u*p*v,this._y=u*p*h+f*l*v,this._z=u*l*v-f*p*h,this._w=u*l*h-f*p*v;break;case"XZY":this._x=f*l*h-u*p*v,this._y=u*p*h-f*l*v,this._z=u*l*v+f*p*h,this._w=u*l*h+f*p*v;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],u=t[2],l=t[6],h=t[10],f=n+o+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(l-c)*p,this._y=(s-u)*p,this._z=(a-r)*p}else if(n>o&&n>h){let p=2*Math.sqrt(1+n-o-h);this._w=(l-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+u)/p}else if(o>h){let p=2*Math.sqrt(1+o-n-h);this._w=(s-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+l)/p}else{let p=2*Math.sqrt(1+h-n-o);this._w=(a-r)/p,this._x=(s+u)/p,this._y=(c+l)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,u=t._z,l=t._w;return this._x=n*l+a*o+r*u-s*c,this._y=r*l+a*c+s*o-n*u,this._z=s*l+a*u+n*c-r*o,this._w=a*l-n*o-r*c-s*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){let u=Math.acos(o),l=Math.sin(u);c=Math.sin(c*u)/l,t=Math.sin(t*u)/l,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Uh=class Uh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*r-o*n),l=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+c*u+a*h-o*l,this.y=n+c*l+o*u-s*h,this.z=r+c*h+s*l-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this.z=wt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this.z=wt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(wt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ou.copy(this).projectOnVector(e),this.sub(Ou)}reflect(e){return this.sub(Ou.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Uh.prototype.isVector3=!0;var K=Uh,Ou=new K,Sd=new In,Hh=class Hh{constructor(e,t,n,r,s,a,o,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,u)}set(e,t,n,r,s,a,o,c,u){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=s,l[5]=c,l[6]=n,l[7]=a,l[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],l=n[4],h=n[7],f=n[2],p=n[5],v=n[8],y=r[0],g=r[3],m=r[6],x=r[1],A=r[4],S=r[7],C=r[2],I=r[5],L=r[8];return s[0]=a*y+o*x+c*C,s[3]=a*g+o*A+c*I,s[6]=a*m+o*S+c*L,s[1]=u*y+l*x+h*C,s[4]=u*g+l*A+h*I,s[7]=u*m+l*S+h*L,s[2]=f*y+p*x+v*C,s[5]=f*g+p*A+v*I,s[8]=f*m+p*S+v*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],l=e[8];return t*a*l-t*o*u-n*s*l+n*o*c+r*s*u-r*a*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],l=e[8],h=l*a-o*u,f=o*c-l*s,p=u*s-a*c,v=t*h+n*f+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/v;return e[0]=h*y,e[1]=(r*u-l*n)*y,e[2]=(o*n-r*a)*y,e[3]=f*y,e[4]=(l*t-r*c)*y,e[5]=(r*s-o*t)*y,e[6]=p*y,e[7]=(n*c-u*t)*y,e[8]=(a*t-n*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*a+u*o)+a+e,-r*u,r*c,-r*(-u*a+c*o)+o+t,0,0,1),this}scale(e,t){return Zr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Uu.makeScale(e,t)),this}rotate(e){return Zr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Uu.makeRotation(-e)),this}translate(e,t){return Zr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Uu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Hh.prototype.isMatrix3=!0;var pt=Hh,Uu=new pt,Td=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bd=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ig(){let i={enabled:!0,workingColorSpace:Un,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Dt&&(r.r=rr(r.r),r.g=rr(r.g),r.b=rr(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Dt&&(r.r=Us(r.r),r.g=Us(r.g),r.b=Us(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Qn?Ha:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Zr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Zr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Un]:{primaries:e,whitePoint:n,transfer:Ha,toXYZ:Td,fromXYZ:bd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:n,transfer:Dt,toXYZ:Td,fromXYZ:bd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),i}var yt=ig();function rr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ss,Cl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ss===void 0&&(Ss=ks("canvas")),Ss.width=e.width,Ss.height=e.height;let r=Ss.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ss}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=ks("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=rr(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(rr(t[n]/255)*255):t[n]=rr(t[n]);return{data:t,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},rg=0,Gs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:rg++}),this.uuid=bi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Hu(r[a].image)):s.push(Hu(r[a]))}else s=Hu(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Hu(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Cl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}var sg=0,Fu=new K,on=class i extends Ei{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ai,r=ai,s=an,a=Ai,o=$n,c=Vn,u=i.DEFAULT_ANISOTROPY,l=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=bi(),this.name="",this.source=new Gs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Fu).x}get height(){return this.source.getSize(Fu).y}get depth(){return this.source.getSize(Fu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){at(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){at(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_h)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oi:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case Fs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oi:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case Fs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=_h;on.DEFAULT_ANISOTROPY=1;var Fh=class Fh{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,u=c[0],l=c[4],h=c[8],f=c[1],p=c[5],v=c[9],y=c[2],g=c[6],m=c[10];if(Math.abs(l-f)<.01&&Math.abs(h-y)<.01&&Math.abs(v-g)<.01){if(Math.abs(l+f)<.1&&Math.abs(h+y)<.1&&Math.abs(v+g)<.1&&Math.abs(u+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(u+1)/2,S=(p+1)/2,C=(m+1)/2,I=(l+f)/4,L=(h+y)/4,M=(v+g)/4;return A>S&&A>C?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=I/n,s=L/n):S>C?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=I/r,s=M/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=L/s,r=M/s),this.set(n,r,s,t),this}let x=Math.sqrt((g-v)*(g-v)+(h-y)*(h-y)+(f-l)*(f-l));return Math.abs(x)<.001&&(x=1),this.x=(g-v)/x,this.y=(h-y)/x,this.z=(f-l)/x,this.w=Math.acos((u+p+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this.z=wt(this.z,e.z,t.z),this.w=wt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this.z=wt(this.z,e,t),this.w=wt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(wt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Fh.prototype.isVector4=!0;var Ft=Fh,Il=class extends Ei{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},s=new on(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Gs(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},pn=class extends Il{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ba=class extends on{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Pl=class extends on{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Kl=class Kl{constructor(e,t,n,r,s,a,o,c,u,l,h,f,p,v,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,u,l,h,f,p,v,y,g)}set(e,t,n,r,s,a,o,c,u,l,h,f,p,v,y,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=c,m[2]=u,m[6]=l,m[10]=h,m[14]=f,m[3]=p,m[7]=v,m[11]=y,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Ts.setFromMatrixColumn(e,0).length(),s=1/Ts.setFromMatrixColumn(e,1).length(),a=1/Ts.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),u=Math.sin(r),l=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let f=a*l,p=a*h,v=o*l,y=o*h;t[0]=c*l,t[4]=-c*h,t[8]=u,t[1]=p+v*u,t[5]=f-y*u,t[9]=-o*c,t[2]=y-f*u,t[6]=v+p*u,t[10]=a*c}else if(e.order==="YXZ"){let f=c*l,p=c*h,v=u*l,y=u*h;t[0]=f+y*o,t[4]=v*o-p,t[8]=a*u,t[1]=a*h,t[5]=a*l,t[9]=-o,t[2]=p*o-v,t[6]=y+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*l,p=c*h,v=u*l,y=u*h;t[0]=f-y*o,t[4]=-a*h,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*l,t[9]=y-f*o,t[2]=-a*u,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*l,p=a*h,v=o*l,y=o*h;t[0]=c*l,t[4]=v*u-p,t[8]=f*u+y,t[1]=c*h,t[5]=y*u+f,t[9]=p*u-v,t[2]=-u,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,p=a*u,v=o*c,y=o*u;t[0]=c*l,t[4]=y-f*h,t[8]=v*h+p,t[1]=h,t[5]=a*l,t[9]=-o*l,t[2]=-u*l,t[6]=p*h+v,t[10]=f-y*h}else if(e.order==="XZY"){let f=a*c,p=a*u,v=o*c,y=o*u;t[0]=c*l,t[4]=-h,t[8]=u*l,t[1]=f*h+y,t[5]=a*l,t[9]=p*h-v,t[2]=v*h-p,t[6]=o*l,t[10]=y*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ag,e,og)}lookAt(e,t,n){let r=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),_r.crossVectors(n,Kn),_r.lengthSq()===0&&(Math.abs(n.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),_r.crossVectors(n,Kn)),_r.normalize(),Ko.crossVectors(Kn,_r),r[0]=_r.x,r[4]=Ko.x,r[8]=Kn.x,r[1]=_r.y,r[5]=Ko.y,r[9]=Kn.y,r[2]=_r.z,r[6]=Ko.z,r[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],l=n[1],h=n[5],f=n[9],p=n[13],v=n[2],y=n[6],g=n[10],m=n[14],x=n[3],A=n[7],S=n[11],C=n[15],I=r[0],L=r[4],M=r[8],T=r[12],D=r[1],H=r[5],_=r[9],w=r[13],P=r[2],k=r[6],Y=r[10],ne=r[14],te=r[3],le=r[7],ue=r[11],he=r[15];return s[0]=a*I+o*D+c*P+u*te,s[4]=a*L+o*H+c*k+u*le,s[8]=a*M+o*_+c*Y+u*ue,s[12]=a*T+o*w+c*ne+u*he,s[1]=l*I+h*D+f*P+p*te,s[5]=l*L+h*H+f*k+p*le,s[9]=l*M+h*_+f*Y+p*ue,s[13]=l*T+h*w+f*ne+p*he,s[2]=v*I+y*D+g*P+m*te,s[6]=v*L+y*H+g*k+m*le,s[10]=v*M+y*_+g*Y+m*ue,s[14]=v*T+y*w+g*ne+m*he,s[3]=x*I+A*D+S*P+C*te,s[7]=x*L+A*H+S*k+C*le,s[11]=x*M+A*_+S*Y+C*ue,s[15]=x*T+A*w+S*ne+C*he,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],u=e[13],l=e[2],h=e[6],f=e[10],p=e[14],v=e[3],y=e[7],g=e[11],m=e[15],x=c*p-u*f,A=o*p-u*h,S=o*f-c*h,C=a*p-u*l,I=a*f-c*l,L=a*h-o*l;return t*(y*x-g*A+m*S)-n*(v*x-g*C+m*I)+r*(v*A-y*C+m*L)-s*(v*S-y*I+g*L)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],u=e[6],l=e[10];return t*(a*l-o*u)-n*(s*l-o*c)+r*(s*u-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],l=e[8],h=e[9],f=e[10],p=e[11],v=e[12],y=e[13],g=e[14],m=e[15],x=t*o-n*a,A=t*c-r*a,S=t*u-s*a,C=n*c-r*o,I=n*u-s*o,L=r*u-s*c,M=l*y-h*v,T=l*g-f*v,D=l*m-p*v,H=h*g-f*y,_=h*m-p*y,w=f*m-p*g,P=x*w-A*_+S*H+C*D-I*T+L*M;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/P;return e[0]=(o*w-c*_+u*H)*k,e[1]=(r*_-n*w-s*H)*k,e[2]=(y*L-g*I+m*C)*k,e[3]=(f*I-h*L-p*C)*k,e[4]=(c*D-a*w-u*T)*k,e[5]=(t*w-r*D+s*T)*k,e[6]=(g*S-v*L-m*A)*k,e[7]=(l*L-f*S+p*A)*k,e[8]=(a*_-o*D+u*M)*k,e[9]=(n*D-t*_-s*M)*k,e[10]=(v*I-y*S+m*x)*k,e[11]=(h*S-l*I-p*x)*k,e[12]=(o*T-a*H-c*M)*k,e[13]=(t*H-n*T+r*M)*k,e[14]=(y*A-v*C-g*x)*k,e[15]=(l*C-h*A+f*x)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,u=s*a,l=s*o;return this.set(u*a+n,u*o-r*c,u*c+r*o,0,u*o+r*c,l*o+n,l*c-r*a,0,u*c-r*o,l*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,u=s+s,l=a+a,h=o+o,f=s*u,p=s*l,v=s*h,y=a*l,g=a*h,m=o*h,x=c*u,A=c*l,S=c*h,C=n.x,I=n.y,L=n.z;return r[0]=(1-(y+m))*C,r[1]=(p+S)*C,r[2]=(v-A)*C,r[3]=0,r[4]=(p-S)*I,r[5]=(1-(f+m))*I,r[6]=(g+x)*I,r[7]=0,r[8]=(v+A)*L,r[9]=(g-x)*L,r[10]=(1-(f+y))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Ts.set(r[0],r[1],r[2]).length(),o=Ts.set(r[4],r[5],r[6]).length(),c=Ts.set(r[8],r[9],r[10]).length();s<0&&(a=-a),xi.copy(this);let u=1/a,l=1/o,h=1/c;return xi.elements[0]*=u,xi.elements[1]*=u,xi.elements[2]*=u,xi.elements[4]*=l,xi.elements[5]*=l,xi.elements[6]*=l,xi.elements[8]*=h,xi.elements[9]*=h,xi.elements[10]*=h,t.setFromRotationMatrix(xi),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=Ti,c=!1){let u=this.elements,l=2*s/(t-e),h=2*s/(n-r),f=(t+e)/(t-e),p=(n+r)/(n-r),v,y;if(c)v=s/(a-s),y=a*s/(a-s);else if(o===Ti)v=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===Bs)v=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=l,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=h,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=v,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Ti,c=!1){let u=this.elements,l=2/(t-e),h=2/(n-r),f=-(t+e)/(t-e),p=-(n+r)/(n-r),v,y;if(c)v=1/(a-s),y=a/(a-s);else if(o===Ti)v=-2/(a-s),y=-(a+s)/(a-s);else if(o===Bs)v=-1/(a-s),y=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=l,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=h,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=v,u[14]=y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Kl.prototype.isMatrix4=!0;var xt=Kl,Ts=new K,xi=new xt,ag=new K(0,0,0),og=new K(1,1,1),_r=new K,Ko=new K,Kn=new K,Ed=new xt,wd=new In,Hi=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],l=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-wt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-l,p),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ed.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ed,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wd.setFromEuler(this),this.setFromQuaternion(wd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Hi.DEFAULT_ORDER="XYZ";var ka=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},lg=0,Ad=new K,bs=new In,$i=new xt,Zo=new K,wa=new K,cg=new K,ug=new In,Rd=new K(1,0,0),Cd=new K(0,1,0),Id=new K(0,0,1),Pd={type:"added"},hg={type:"removed"},Es={type:"childadded",child:null},Bu={type:"childremoved",child:null},jt=class i extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lg++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new K,t=new Hi,n=new In,r=new K(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new pt}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(Rd,e)}rotateY(e){return this.rotateOnAxis(Cd,e)}rotateZ(e){return this.rotateOnAxis(Id,e)}translateOnAxis(e,t){return Ad.copy(e).applyQuaternion(this.quaternion),this.position.add(Ad.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rd,e)}translateY(e){return this.translateOnAxis(Cd,e)}translateZ(e){return this.translateOnAxis(Id,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zo.copy(e):Zo.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(wa,Zo,this.up):$i.lookAt(Zo,wa,this.up),this.quaternion.setFromRotationMatrix($i),r&&($i.extractRotation(r.matrixWorld),bs.setFromRotationMatrix($i),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pd),Es.child=e,this.dispatchEvent(Es),Es.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hg),Bu.child=e,this.dispatchEvent(Bu),Bu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pd),Es.child=e,this.dispatchEvent(Es),Es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,e,cg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,ug,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let u=0,l=c.length;u<l;u++){let h=c[u];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),u=a(e.textures),l=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),l.length>0&&(n.images=l),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){let c=[];for(let u in o){let l=o[u];delete l.metadata,c.push(l)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};jt.DEFAULT_UP=new K(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vt=class extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}},fg={type:"move"},Vs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(let y of e.hand.values()){let g=t.getJointPose(y,n),m=this._getHandJoint(u,y);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let l=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=l.position.distanceTo(h.position),p=.02,v=.005;u.inputState.pinching&&f>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fg)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Gp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},Jo={h:0,s:0,l:0};function ku(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var $e=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,yt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=yt.workingColorSpace){if(e=Ch(e,1),t=wt(t,0,1),n=wt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ku(a,s,e+1/3),this.g=ku(a,s,e),this.b=ku(a,s,e-1/3)}return yt.colorSpaceToWorking(this,r),this}setStyle(e,t=Wt){function n(s){s!==void 0&&parseFloat(s)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:at("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){let n=Gp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}copyLinearToSRGB(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return yt.workingToColorSpace(Cn.copy(this),e),Math.round(wt(Cn.r*255,0,255))*65536+Math.round(wt(Cn.g*255,0,255))*256+Math.round(wt(Cn.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.workingToColorSpace(Cn.copy(this),t);let n=Cn.r,r=Cn.g,s=Cn.b,a=Math.max(n,r,s),o=Math.min(n,r,s),c,u,l=(o+a)/2;if(o===a)c=0,u=0;else{let h=a-o;switch(u=l<=.5?h/(a+o):h/(2-a-o),a){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=u,e.l=l,e}getRGB(e,t=yt.workingColorSpace){return yt.workingToColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=Wt){yt.workingToColorSpace(Cn.copy(this),e);let t=Cn.r,n=Cn.g,r=Cn.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(yr),this.setHSL(yr.h+e,yr.s+t,yr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yr),e.getHSL(Jo);let n=Oa(yr.h,Jo.h,t),r=Oa(yr.s,Jo.s,t),s=Oa(yr.l,Jo.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Cn=new $e;$e.NAMES=Gp;var za=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new $e(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var wr=class extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},_i=new K,Qi=new K,zu=new K,er=new K,ws=new K,As=new K,Ld=new K,Gu=new K,Vu=new K,Wu=new K,qu=new Ft,Xu=new Ft,Yu=new Ft,Er=class i{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),_i.subVectors(e,t),r.cross(_i);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){_i.subVectors(r,t),Qi.subVectors(n,t),zu.subVectors(e,t);let a=_i.dot(_i),o=_i.dot(Qi),c=_i.dot(zu),u=Qi.dot(Qi),l=Qi.dot(zu),h=a*u-o*o;if(h===0)return s.set(0,0,0),null;let f=1/h,p=(u*c-o*l)*f,v=(a*l-o*c)*f;return s.set(1-p-v,v,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,er)===null?!1:er.x>=0&&er.y>=0&&er.x+er.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,er)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,er.x),c.addScaledVector(a,er.y),c.addScaledVector(o,er.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return qu.setScalar(0),Xu.setScalar(0),Yu.setScalar(0),qu.fromBufferAttribute(e,t),Xu.fromBufferAttribute(e,n),Yu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(qu,s.x),a.addScaledVector(Xu,s.y),a.addScaledVector(Yu,s.z),a}static isFrontFacing(e,t,n,r){return _i.subVectors(n,t),Qi.subVectors(e,t),_i.cross(Qi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),_i.cross(Qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;ws.subVectors(r,n),As.subVectors(s,n),Gu.subVectors(e,n);let c=ws.dot(Gu),u=As.dot(Gu);if(c<=0&&u<=0)return t.copy(n);Vu.subVectors(e,r);let l=ws.dot(Vu),h=As.dot(Vu);if(l>=0&&h<=l)return t.copy(r);let f=c*h-l*u;if(f<=0&&c>=0&&l<=0)return a=c/(c-l),t.copy(n).addScaledVector(ws,a);Wu.subVectors(e,s);let p=ws.dot(Wu),v=As.dot(Wu);if(v>=0&&p<=v)return t.copy(s);let y=p*u-c*v;if(y<=0&&u>=0&&v<=0)return o=u/(u-v),t.copy(n).addScaledVector(As,o);let g=l*v-p*h;if(g<=0&&h-l>=0&&p-v>=0)return Ld.subVectors(s,r),o=(h-l)/(h-l+(p-v)),t.copy(r).addScaledVector(Ld,o);let m=1/(g+y+f);return a=y*m,o=f*m,t.copy(n).addScaledVector(ws,a).addScaledVector(As,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Pn=class{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,yi):yi.fromBufferAttribute(s,a),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),jo.copy(n.boundingBox)),jo.applyMatrix4(e.matrixWorld),this.union(jo)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Aa),$o.subVectors(this.max,Aa),Rs.subVectors(e.a,Aa),Cs.subVectors(e.b,Aa),Is.subVectors(e.c,Aa),Mr.subVectors(Cs,Rs),Sr.subVectors(Is,Cs),Vr.subVectors(Rs,Is);let t=[0,-Mr.z,Mr.y,0,-Sr.z,Sr.y,0,-Vr.z,Vr.y,Mr.z,0,-Mr.x,Sr.z,0,-Sr.x,Vr.z,0,-Vr.x,-Mr.y,Mr.x,0,-Sr.y,Sr.x,0,-Vr.y,Vr.x,0];return!Ku(t,Rs,Cs,Is,$o)||(t=[1,0,0,0,1,0,0,0,1],!Ku(t,Rs,Cs,Is,$o))?!1:(Qo.crossVectors(Mr,Sr),t=[Qo.x,Qo.y,Qo.z],Ku(t,Rs,Cs,Is,$o))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},tr=[new K,new K,new K,new K,new K,new K,new K,new K],yi=new K,jo=new Pn,Rs=new K,Cs=new K,Is=new K,Mr=new K,Sr=new K,Vr=new K,Aa=new K,$o=new K,Qo=new K,Wr=new K;function Ku(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Wr.fromArray(i,s);let o=r.x*Math.abs(Wr.x)+r.y*Math.abs(Wr.y)+r.z*Math.abs(Wr.z),c=e.dot(Wr),u=t.dot(Wr),l=n.dot(Wr);if(Math.max(-Math.max(c,u,l),Math.min(c,u,l))>o)return!1}return!0}var dn=new K,el=new ot,dg=0,$t=class extends Ei{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ah,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)el.fromBufferAttribute(this,t),el.applyMatrix3(e),this.setXY(t,el.x,el.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix3(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Si(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Si(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Si(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),r=Ht(r,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ga=class extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Va=class extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var At=class extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}},pg=new Pn,Ra=new K,Zu=new K,Bn=class{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):pg.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ra.subVectors(e,this.center);let t=Ra.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ra,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ra.copy(e.center).add(Zu)),this.expandByPoint(Ra.copy(e.center).sub(Zu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},mg=0,si=new xt,Ju=new jt,Ps=new K,Zn=new Pn,Ca=new Pn,yn=new K,Yt=class i extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mg++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bm(e)?Va:Ga)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new pt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,n){return si.makeTranslation(e,t,n),this.applyMatrix4(si),this}scale(e,t,n){return si.makeScale(e,t,n),this.applyMatrix4(si),this}lookAt(e){return Ju.lookAt(e),Ju.updateMatrix(),this.applyMatrix4(Ju.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new At(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Zn.setFromBufferAttribute(s),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){let n=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Ca.setFromBufferAttribute(o),this.morphTargetsRelative?(yn.addVectors(Zn.min,Ca.min),Zn.expandByPoint(yn),yn.addVectors(Zn.max,Ca.max),Zn.expandByPoint(yn)):(Zn.expandByPoint(Ca.min),Zn.expandByPoint(Ca.max))}Zn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)yn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(yn));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let u=0,l=o.count;u<l;u++)yn.fromBufferAttribute(o,u),c&&(Ps.fromBufferAttribute(e,u),yn.add(Ps)),r=Math.max(r,n.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new $t(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let M=0;M<n.count;M++)o[M]=new K,c[M]=new K;let u=new K,l=new K,h=new K,f=new ot,p=new ot,v=new ot,y=new K,g=new K;function m(M,T,D){u.fromBufferAttribute(n,M),l.fromBufferAttribute(n,T),h.fromBufferAttribute(n,D),f.fromBufferAttribute(s,M),p.fromBufferAttribute(s,T),v.fromBufferAttribute(s,D),l.sub(u),h.sub(u),p.sub(f),v.sub(f);let H=1/(p.x*v.y-v.x*p.y);isFinite(H)&&(y.copy(l).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(H),g.copy(h).multiplyScalar(p.x).addScaledVector(l,-v.x).multiplyScalar(H),o[M].add(y),o[T].add(y),o[D].add(y),c[M].add(g),c[T].add(g),c[D].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let M=0,T=x.length;M<T;++M){let D=x[M],H=D.start,_=D.count;for(let w=H,P=H+_;w<P;w+=3)m(e.getX(w+0),e.getX(w+1),e.getX(w+2))}let A=new K,S=new K,C=new K,I=new K;function L(M){C.fromBufferAttribute(r,M),I.copy(C);let T=o[M];A.copy(T),A.sub(C.multiplyScalar(C.dot(T))).normalize(),S.crossVectors(I,T);let H=S.dot(c[M])<0?-1:1;a.setXYZW(M,A.x,A.y,A.z,H)}for(let M=0,T=x.length;M<T;++M){let D=x[M],H=D.start,_=D.count;for(let w=H,P=H+_;w<P;w+=3)L(e.getX(w+0)),L(e.getX(w+1)),L(e.getX(w+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let r=new K,s=new K,a=new K,o=new K,c=new K,u=new K,l=new K,h=new K;if(e)for(let f=0,p=e.count;f<p;f+=3){let v=e.getX(f+0),y=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,g),l.subVectors(a,s),h.subVectors(r,s),l.cross(h),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,g),o.add(l),c.add(l),u.add(l),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),l.subVectors(a,s),h.subVectors(r,s),l.cross(h),n.setXYZ(f+0,l.x,l.y,l.z),n.setXYZ(f+1,l.x,l.y,l.z),n.setXYZ(f+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(o,c){let u=o.array,l=o.itemSize,h=o.normalized,f=new u.constructor(c.length*l),p=0,v=0;for(let y=0,g=c.length;y<g;y++){o.isInterleavedBufferAttribute?p=c[y]*o.data.stride+o.offset:p=c[y]*l;for(let m=0;m<l;m++)f[v++]=u[p++]}return new $t(f,l,h)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let c=r[o],u=e(c,n);t.setAttribute(o,u)}let s=this.morphAttributes;for(let o in s){let c=[],u=s[o];for(let l=0,h=u.length;l<h;l++){let f=u[l],p=e(f,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let u=n[c];e.data.attributes[c]=u.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let u=this.morphAttributes[c],l=[];for(let h=0,f=u.length;h<f;h++){let p=u[h];l.push(p.toJSON(e.data))}l.length>0&&(r[c]=l,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let u in r){let l=r[u];this.setAttribute(u,l.clone(t))}let s=e.morphAttributes;for(let u in s){let l=[],h=s[u];for(let f=0,p=h.length;f<p;f++)l.push(h[f].clone(t));this.morphAttributes[u]=l}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let u=0,l=a.length;u<l;u++){let h=a[u];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ws=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ah,this.updateRanges=[],this.version=0,this.uuid=bi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},On=new K,qs=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)On.fromBufferAttribute(this,t),On.applyMatrix4(e),this.setXYZ(t,On.x,On.y,On.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)On.fromBufferAttribute(this,t),On.applyNormalMatrix(e),this.setXYZ(t,On.x,On.y,On.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)On.fromBufferAttribute(this,t),On.transformDirection(e),this.setXYZ(t,On.x,On.y,On.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Si(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),r=Ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),r=Ht(r,this.array),s=Ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Fa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new $t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Fa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ju=new K,gg=new K,vg=new pt,Mi=class{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=ju.subVectors(n,t).cross(gg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(ju),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||vg.getNormalMatrix(e),r=this.coplanarPoint(ju).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},xg=0,Hn=class extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xg++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=na,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vh,this.blendDst=xh,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yl,this.stencilZFail=yl,this.stencilZPass=yl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){at(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){at(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Mi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ot().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ot().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var nr=new K,$u=new K,tl=new K,nl=new K,Qr=class{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=nr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(nr.copy(this.origin).addScaledVector(this.direction,t),nr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){$u.copy(e).add(t).multiplyScalar(.5),tl.copy(t).sub(e).normalize(),nl.copy(this.origin).sub($u);let s=e.distanceTo(t)*.5,a=-this.direction.dot(tl),o=nl.dot(this.direction),c=-nl.dot(tl),u=nl.lengthSq(),l=Math.abs(1-a*a),h,f,p,v;if(l>0)if(h=a*c-o,f=a*o-c,v=s*l,h>=0)if(f>=-v)if(f<=v){let y=1/l;h*=y,f*=y,p=h*(h+a*f+2*o)+f*(a*h+f+2*c)+u}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+u;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+u;else f<=-v?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+u):f<=v?(h=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+u):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+u);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy($u).addScaledVector(tl,f),p}intersectSphere(e,t){if(e.radius<0)return null;nr.subVectors(e.center,this.origin);let n=nr.dot(this.direction),r=nr.dot(nr)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c,u=1/this.direction.x,l=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),l>=0?(s=(e.min.y-f.y)*l,a=(e.max.y-f.y)*l):(s=(e.max.y-f.y)*l,a=(e.min.y-f.y)*l),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,nr)!==null}intersectTriangle(e,t,n,r,s){let a=this.origin,o=this.direction,c=o.x,u=o.y,l=o.z,h=e.x-a.x,f=e.y-a.y,p=e.z-a.z,v=t.x-a.x,y=t.y-a.y,g=t.z-a.z,m=n.x-a.x,x=n.y-a.y,A=n.z-a.z,S=Math.abs(c),C=Math.abs(u),I=Math.abs(l),L,M,T,D,H,_,w,P,k,Y,ne,te;if(S>=C&&S>=I?(T=c,_=h,k=v,te=m,c>=0?(L=u,M=l,D=f,H=p,w=y,P=g,Y=x,ne=A):(L=l,M=u,D=p,H=f,w=g,P=y,Y=A,ne=x)):C>=I?(T=u,_=f,k=y,te=x,u>=0?(L=l,M=c,D=p,H=h,w=g,P=v,Y=A,ne=m):(L=c,M=l,D=h,H=p,w=v,P=g,Y=m,ne=A)):(T=l,_=p,k=g,te=A,l>=0?(L=c,M=u,D=h,H=f,w=v,P=y,Y=m,ne=x):(L=u,M=c,D=f,H=h,w=y,P=v,Y=x,ne=m)),T===0)return null;let le=L/T,ue=M/T,he=1/T,De=D-le*_,Ue=H-ue*_,dt=w-le*k,je=P-ue*k,it=Y-le*te,de=ne-ue*te,me=it*je-de*dt,Ee=De*de-Ue*it,rt=dt*Ue-je*De;if(r){if(me<0||Ee<0||rt<0)return null}else if((me<0||Ee<0||rt<0)&&(me>0||Ee>0||rt>0))return null;let Be=me+Ee+rt;if(Be===0)return null;let nt=he*(me*_+Ee*k+rt*te);return(Be>0?nt<0:nt>0)?null:this.at(nt/Be,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},mn=class extends Hn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=Zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Nd=new xt,qr=new Qr,il=new Bn,Dd=new K,rl=new K,sl=new K,al=new K,Qu=new K,ol=new K,Od=new K,ll=new K,Fe=class extends jt{constructor(e=new Yt,t=new mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){ol.set(0,0,0);for(let c=0,u=s.length;c<u;c++){let l=o[c],h=s[c];l!==0&&(Qu.fromBufferAttribute(h,e),a?ol.addScaledVector(Qu,l):ol.addScaledVector(Qu.sub(t),l))}t.add(ol)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),il.copy(n.boundingSphere),il.applyMatrix4(s),qr.copy(e.ray).recast(e.near),!(il.containsPoint(qr.origin)===!1&&(qr.intersectSphere(il,Dd)===null||qr.origin.distanceToSquared(Dd)>(e.far-e.near)**2))&&(Nd.copy(s).invert(),qr.copy(e.ray).applyMatrix4(Nd),!(n.boundingBox!==null&&qr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qr)))}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,l=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,y=f.length;v<y;v++){let g=f[v],m=a[g.materialIndex],x=Math.max(g.start,p.start),A=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let S=x,C=A;S<C;S+=3){let I=o.getX(S),L=o.getX(S+1),M=o.getX(S+2);r=cl(this,m,e,n,u,l,h,I,L,M),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let v=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let g=v,m=y;g<m;g+=3){let x=o.getX(g),A=o.getX(g+1),S=o.getX(g+2);r=cl(this,a,e,n,u,l,h,x,A,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,y=f.length;v<y;v++){let g=f[v],m=a[g.materialIndex],x=Math.max(g.start,p.start),A=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let S=x,C=A;S<C;S+=3){let I=S,L=S+1,M=S+2;r=cl(this,m,e,n,u,l,h,I,L,M),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let v=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let g=v,m=y;g<m;g+=3){let x=g,A=g+1,S=g+2;r=cl(this,a,e,n,u,l,h,x,A,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function _g(i,e,t,n,r,s,a,o){let c;if(e.side===Mn?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===Gi,o),c===null)return null;ll.copy(o),ll.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(ll);return u<t.near||u>t.far?null:{distance:u,point:ll.clone(),object:i}}function cl(i,e,t,n,r,s,a,o,c,u){i.getVertexPosition(o,rl),i.getVertexPosition(c,sl),i.getVertexPosition(u,al);let l=_g(i,e,t,n,rl,sl,al,Od);if(l){let h=new K;Er.getBarycoord(Od,rl,sl,al,h),r&&(l.uv=Er.getInterpolatedAttribute(r,o,c,u,h,new ot)),s&&(l.uv1=Er.getInterpolatedAttribute(s,o,c,u,h,new ot)),a&&(l.normal=Er.getInterpolatedAttribute(a,o,c,u,h,new K),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));let f={a:o,b:c,c:u,normal:new K,materialIndex:0};Er.getNormal(rl,sl,al,f.normal),l.face=f,l.barycoord=h}return l}var Ia=new Ft,Ud=new Ft,Hd=new Ft,yg=new Ft,Fd=new xt,ul=new K,eh=new Bn,Bd=new xt,th=new Qr,Wa=class extends Fe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=sh,this.bindMatrix=new xt,this.bindMatrixInverse=new xt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Pn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ul),this.boundingBox.expandByPoint(ul)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Bn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ul),this.boundingSphere.expandByPoint(ul)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),eh.copy(this.boundingSphere),eh.applyMatrix4(r),e.ray.intersectsSphere(eh)!==!1&&(Bd.copy(r).invert(),th.copy(e.ray).applyMatrix4(Bd),!(this.boundingBox!==null&&th.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,th)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ft,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===sh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===wp?this.bindMatrixInverse.copy(this.bindMatrix).invert():at("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;Ud.fromBufferAttribute(r.attributes.skinIndex,e),Hd.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(Ia.copy(t),t.set(0,0,0,0)):(Ia.set(...t,1),t.set(0,0,0)),Ia.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let a=Hd.getComponent(s);if(a!==0){let o=Ud.getComponent(s);Fd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(yg.copy(Ia).applyMatrix4(Fd),a)}}return t.isVector4&&(t.w=Ia.w),t.applyMatrix4(this.bindMatrixInverse)}},Xs=class extends jt{constructor(){super(),this.isBone=!0,this.type="Bone"}},sr=class extends on{constructor(e=null,t=1,n=1,r,s,a,o,c,u=qt,l=qt,h,f){super(null,a,o,c,u,l,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},kd=new xt,Mg=new xt,qa=class i{constructor(e=[],t=[]){this.uuid=bi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){at("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new xt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new xt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:Mg;kd.multiplyMatrices(o,t[s]),kd.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new sr(t,e,e,$n,jn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let s=e.bones[n],a=t[s];a===void 0&&(at("Skeleton: No bone found with UUID:",s),a=new Xs),this.bones.push(a),this.boneInverses.push(new xt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let a=t[r];e.bones.push(a.uuid);let o=n[r];e.boneInverses.push(o.toArray())}return e}},ar=class extends $t{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ls=new xt,zd=new xt,hl=[],Gd=new Pn,Sg=new xt,Pa=new Fe,La=new Bn,es=class extends Fe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ar(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Sg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ls),Gd.copy(e.boundingBox).applyMatrix4(Ls),this.boundingBox.union(Gd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ls),La.copy(e.boundingSphere).applyMatrix4(Ls),this.boundingSphere.union(La)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Pa.geometry=this.geometry,Pa.material=this.material,Pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),La.copy(this.boundingSphere),La.applyMatrix4(n),e.ray.intersectsSphere(La)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ls),zd.multiplyMatrices(n,Ls),Pa.matrixWorld=zd,Pa.raycast(e,hl);for(let a=0,o=hl.length;a<o;a++){let c=hl[a];c.instanceId=s,c.object=this,t.push(c)}hl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ar(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new sr(new Float32Array(r*this.count),r,this.count,nc,jn));let s=this.morphTexture.source.data.data,a=0;for(let u=0;u<n.length;u++)a+=n[u];let o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;return s[c]=o,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Xr=new Bn,Tg=new ot(.5,.5),fl=new K,Ys=class{constructor(e=new Mi,t=new Mi,n=new Mi,r=new Mi,s=new Mi,a=new Mi){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ti,n=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],u=s[3],l=s[4],h=s[5],f=s[6],p=s[7],v=s[8],y=s[9],g=s[10],m=s[11],x=s[12],A=s[13],S=s[14],C=s[15];if(r[0].setComponents(u-a,p-l,m-v,C-x).normalize(),r[1].setComponents(u+a,p+l,m+v,C+x).normalize(),r[2].setComponents(u+o,p+h,m+y,C+A).normalize(),r[3].setComponents(u-o,p-h,m-y,C-A).normalize(),n)r[4].setComponents(c,f,g,S).normalize(),r[5].setComponents(u-c,p-f,m-g,C-S).normalize();else if(r[4].setComponents(u-c,p-f,m-g,C-S).normalize(),t===Ti)r[5].setComponents(u+c,p+f,m+g,C+S).normalize();else if(t===Bs)r[5].setComponents(c,f,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xr)}intersectsSprite(e){Xr.center.set(0,0,0);let t=Tg.distanceTo(e.center);return Xr.radius=.7071067811865476+t,Xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(fl.x=r.normal.x>0?e.max.x:e.min.x,fl.y=r.normal.y>0?e.max.y:e.min.y,fl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ks=class extends Hn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ll=new K,Nl=new K,Vd=new xt,Na=new Qr,dl=new Bn,nh=new K,Wd=new K,ts=class extends jt{constructor(e=new Yt,t=new Ks){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Ll.fromBufferAttribute(t,r-1),Nl.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ll.distanceTo(Nl);e.setAttribute("lineDistance",new At(n,1))}else at("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dl.copy(n.boundingSphere),dl.applyMatrix4(r),dl.radius+=s,e.ray.intersectsSphere(dl)===!1)return;Vd.copy(r).invert(),Na.copy(e.ray).applyMatrix4(Vd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=this.isLineSegments?2:1,l=n.index,f=n.attributes.position;if(l!==null){let p=Math.max(0,a.start),v=Math.min(l.count,a.start+a.count);for(let y=p,g=v-1;y<g;y+=u){let m=l.getX(y),x=l.getX(y+1),A=pl(this,e,Na,c,m,x,y);A&&t.push(A)}if(this.isLineLoop){let y=l.getX(v-1),g=l.getX(p),m=pl(this,e,Na,c,y,g,v-1);m&&t.push(m)}}else{let p=Math.max(0,a.start),v=Math.min(f.count,a.start+a.count);for(let y=p,g=v-1;y<g;y+=u){let m=pl(this,e,Na,c,y,y+1,y);m&&t.push(m)}if(this.isLineLoop){let y=pl(this,e,Na,c,v-1,p,v-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function pl(i,e,t,n,r,s,a){let o=i.geometry.attributes.position;if(Ll.fromBufferAttribute(o,r),Nl.fromBufferAttribute(o,s),t.distanceSqToSegment(Ll,Nl,nh,Wd)>n)return;nh.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(nh);if(!(u<e.near||u>e.far))return{distance:u,point:Wd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var qd=new K,Xd=new K,Xa=class extends ts{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)qd.fromBufferAttribute(t,r),Xd.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+qd.distanceTo(Xd);e.setAttribute("lineDistance",new At(n,1))}else at("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ya=class extends ts{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Zs=class extends Hn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Yd=new xt,oh=new Qr,ml=new Bn,gl=new K,ns=class extends jt{constructor(e=new Yt,t=new Zs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ml.copy(n.boundingSphere),ml.applyMatrix4(r),ml.radius+=s,e.ray.intersectsSphere(ml)===!1)return;Yd.copy(r).invert(),oh.copy(e.ray).applyMatrix4(Yd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let v=f,y=p;v<y;v++){let g=u.getX(v);gl.fromBufferAttribute(h,g),Kd(gl,g,c,r,e,t,this)}}else{let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let v=f,y=p;v<y;v++)gl.fromBufferAttribute(h,v),Kd(gl,v,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Kd(i,e,t,n,r,s,a){let o=oh.distanceSqToPoint(i);if(o<t){let c=new K;oh.closestPointToPoint(i,c),c.applyMatrix4(n);let u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ka=class extends on{constructor(e=[],t=Lr,n,r,s,a,o,c,u,l){super(e,t,n,r,s,a,o,c,u,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ar=class extends on{constructor(e,t,n,r,s,a,o,c,u){super(e,t,n,r,s,a,o,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Rr=class extends on{constructor(e,t,n=Ri,r,s,a,o=qt,c=qt,u,l=Ui,h=1){if(l!==Ui&&l!==Nr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,r,s,a,o,c,l,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Dl=class extends Rr{constructor(e,t=Ri,n=Lr,r,s,a=qt,o=qt,c,u=Ui){let l={width:e,height:e,depth:1},h=[l,l,l,l,l,l];super(e,e,t,n,r,s,a,o,c,u),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Za=class extends on{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},en=class i extends Yt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],u=[],l=[],h=[],f=0,p=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,r,a,2),v("x","z","y",1,-1,e,n,-t,r,a,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new At(u,3)),this.setAttribute("normal",new At(l,3)),this.setAttribute("uv",new At(h,2));function v(y,g,m,x,A,S,C,I,L,M,T){let D=S/L,H=C/M,_=S/2,w=C/2,P=I/2,k=L+1,Y=M+1,ne=0,te=0,le=new K;for(let ue=0;ue<Y;ue++){let he=ue*H-w;for(let De=0;De<k;De++){let Ue=De*D-_;le[y]=Ue*x,le[g]=he*A,le[m]=P,u.push(le.x,le.y,le.z),le[y]=0,le[g]=0,le[m]=I>0?1:-1,l.push(le.x,le.y,le.z),h.push(De/L),h.push(1-ue/M),ne+=1}}for(let ue=0;ue<M;ue++)for(let he=0;he<L;he++){let De=f+he+k*ue,Ue=f+he+k*(ue+1),dt=f+(he+1)+k*(ue+1),je=f+(he+1)+k*ue;c.push(De,Ue,je),c.push(Ue,dt,je),te+=6}o.addGroup(p,te,T),p+=te,f+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Ja=class i extends Yt{constructor(e=1,t=1,n=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let a=[],o=[],c=[],u=[],l=t/2,h=Math.PI/2*e,f=t,p=2*h+f,v=n*2+s,y=r+1,g=new K,m=new K;for(let x=0;x<=v;x++){let A=0,S=0,C=0,I=0;if(x<=n){let T=x/n,D=T*Math.PI/2;S=-l-e*Math.cos(D),C=e*Math.sin(D),I=-e*Math.cos(D),A=T*h}else if(x<=n+s){let T=(x-n)/s;S=-l+T*t,C=e,I=0,A=h+T*f}else{let T=(x-n-s)/n,D=T*Math.PI/2;S=l+e*Math.sin(D),C=e*Math.cos(D),I=e*Math.sin(D),A=h+f+T*h}let L=Math.max(0,Math.min(1,A/p)),M=0;x===0?M=.5/r:x===v&&(M=-.5/r);for(let T=0;T<=r;T++){let D=T/r,H=D*Math.PI*2,_=Math.sin(H),w=Math.cos(H);m.x=-C*w,m.y=S,m.z=C*_,o.push(m.x,m.y,m.z),g.set(-C*w,I,C*_),g.normalize(),c.push(g.x,g.y,g.z),u.push(D+M,L)}if(x>0){let T=(x-1)*y;for(let D=0;D<r;D++){let H=T+D,_=T+D+1,w=x*y+D,P=x*y+D+1;a.push(H,_,w),a.push(_,P,w)}}}this.setIndex(a),this.setAttribute("position",new At(o,3)),this.setAttribute("normal",new At(c,3)),this.setAttribute("uv",new At(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var Fi=class i extends Yt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let u=this;r=Math.floor(r),s=Math.floor(s);let l=[],h=[],f=[],p=[],v=0,y=[],g=n/2,m=0;x(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(l),this.setAttribute("position",new At(h,3)),this.setAttribute("normal",new At(f,3)),this.setAttribute("uv",new At(p,2));function x(){let S=new K,C=new K,I=0,L=(t-e)/n;for(let M=0;M<=s;M++){let T=[],D=M/s,H=D*(t-e)+e;for(let _=0;_<=r;_++){let w=_/r,P=w*c+o,k=Math.sin(P),Y=Math.cos(P);C.x=H*k,C.y=-D*n+g,C.z=H*Y,h.push(C.x,C.y,C.z),S.set(k,L,Y).normalize(),f.push(S.x,S.y,S.z),p.push(w,1-D),T.push(v++)}y.push(T)}for(let M=0;M<r;M++)for(let T=0;T<s;T++){let D=y[T][M],H=y[T+1][M],_=y[T+1][M+1],w=y[T][M+1];(e>0||T!==0)&&(l.push(D,H,w),I+=3),(t>0||T!==s-1)&&(l.push(H,_,w),I+=3)}u.addGroup(m,I,0),m+=I}function A(S){let C=v,I=new ot,L=new K,M=0,T=S===!0?e:t,D=S===!0?1:-1;for(let _=1;_<=r;_++)h.push(0,g*D,0),f.push(0,D,0),p.push(.5,.5),v++;let H=v;for(let _=0;_<=r;_++){let P=_/r*c+o,k=Math.cos(P),Y=Math.sin(P);L.x=T*Y,L.y=g*D,L.z=T*k,h.push(L.x,L.y,L.z),f.push(0,D,0),I.x=k*.5+.5,I.y=Y*.5*D+.5,p.push(I.x,I.y),v++}for(let _=0;_<r;_++){let w=C+_,P=H+_;S===!0?l.push(P,P+1,w):l.push(P+1,P,w),M+=3}u.addGroup(m,M,S===!0?1:2),m+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ja=class i extends Fi{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ol=class i extends Yt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],a=[];o(r),u(n),l(),this.setAttribute("position",new At(s,3)),this.setAttribute("normal",new At(s.slice(),3)),this.setAttribute("uv",new At(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let A=new K,S=new K,C=new K;for(let I=0;I<t.length;I+=3)p(t[I+0],A),p(t[I+1],S),p(t[I+2],C),c(A,S,C,x)}function c(x,A,S,C){let I=C+1,L=[];for(let M=0;M<=I;M++){L[M]=[];let T=x.clone().lerp(S,M/I),D=A.clone().lerp(S,M/I),H=I-M;for(let _=0;_<=H;_++)_===0&&M===I?L[M][_]=T:L[M][_]=T.clone().lerp(D,_/H)}for(let M=0;M<I;M++)for(let T=0;T<2*(I-M)-1;T++){let D=Math.floor(T/2);T%2===0?(f(L[M][D+1]),f(L[M+1][D]),f(L[M][D])):(f(L[M][D+1]),f(L[M+1][D+1]),f(L[M+1][D]))}}function u(x){let A=new K;for(let S=0;S<s.length;S+=3)A.x=s[S+0],A.y=s[S+1],A.z=s[S+2],A.normalize().multiplyScalar(x),s[S+0]=A.x,s[S+1]=A.y,s[S+2]=A.z}function l(){let x=new K;for(let A=0;A<s.length;A+=3){x.x=s[A+0],x.y=s[A+1],x.z=s[A+2];let S=g(x)/2/Math.PI+.5,C=m(x)/Math.PI+.5;a.push(S,1-C)}v(),h()}function h(){for(let x=0;x<a.length;x+=6){let A=a[x+0],S=a[x+2],C=a[x+4],I=Math.max(A,S,C),L=Math.min(A,S,C);I>.9&&L<.1&&(A<.2&&(a[x+0]+=1),S<.2&&(a[x+2]+=1),C<.2&&(a[x+4]+=1))}}function f(x){s.push(x.x,x.y,x.z)}function p(x,A){let S=x*3;A.x=e[S+0],A.y=e[S+1],A.z=e[S+2]}function v(){let x=new K,A=new K,S=new K,C=new K,I=new ot,L=new ot,M=new ot;for(let T=0,D=0;T<s.length;T+=9,D+=6){x.set(s[T+0],s[T+1],s[T+2]),A.set(s[T+3],s[T+4],s[T+5]),S.set(s[T+6],s[T+7],s[T+8]),I.set(a[D+0],a[D+1]),L.set(a[D+2],a[D+3]),M.set(a[D+4],a[D+5]),C.copy(x).add(A).add(S).divideScalar(3);let H=g(C);y(I,D+0,x,H),y(L,D+2,A,H),y(M,D+4,S,H)}}function y(x,A,S,C){C<0&&x.x===1&&(a[A]=x.x-1),S.x===0&&S.z===0&&(a[A]=C/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Cr=class i extends Ol{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Jn=class i extends Yt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),u=o+1,l=c+1,h=e/o,f=t/c,p=[],v=[],y=[],g=[];for(let m=0;m<l;m++){let x=m*f-a;for(let A=0;A<u;A++){let S=A*h-s;v.push(S,-x,0),y.push(0,0,1),g.push(A/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let x=0;x<o;x++){let A=x+u*m,S=x+u*(m+1),C=x+1+u*(m+1),I=x+1+u*m;p.push(A,S,I),p.push(S,C,I)}this.setIndex(p),this.setAttribute("position",new At(v,3)),this.setAttribute("normal",new At(y,3)),this.setAttribute("uv",new At(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var is=class i extends Yt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),u=0,l=[],h=new K,f=new K,p=[],v=[],y=[],g=[];for(let m=0;m<=n;m++){let x=[],A=m/n,S=a+A*o,C=e*Math.cos(S),I=Math.sqrt(e*e-C*C),L=0;m===0&&a===0?L=.5/t:m===n&&c===Math.PI&&(L=-.5/t);for(let M=0;M<=t;M++){let T=M/t,D=r+T*s;h.x=-I*Math.cos(D),h.y=C,h.z=I*Math.sin(D),v.push(h.x,h.y,h.z),f.copy(h).normalize(),y.push(f.x,f.y,f.z),g.push(T+L,1-A),x.push(u++)}l.push(x)}for(let m=0;m<n;m++)for(let x=0;x<t;x++){let A=l[m][x+1],S=l[m][x],C=l[m+1][x],I=l[m+1][x+1];(m!==0||a>0)&&p.push(A,S,I),(m!==n-1||c<Math.PI)&&p.push(S,C,I)}this.setIndex(p),this.setAttribute("position",new At(v,3)),this.setAttribute("normal",new At(y,3)),this.setAttribute("uv",new At(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var li=class i extends Yt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let c=[],u=[],l=[],h=[],f=new K,p=new K,v=new K;for(let y=0;y<=n;y++){let g=a+y/n*o;for(let m=0;m<=r;m++){let x=m/r*s;p.x=(e+t*Math.cos(g))*Math.cos(x),p.y=(e+t*Math.cos(g))*Math.sin(x),p.z=t*Math.sin(g),u.push(p.x,p.y,p.z),f.x=e*Math.cos(x),f.y=e*Math.sin(x),v.subVectors(p,f).normalize(),l.push(v.x,v.y,v.z),h.push(m/r),h.push(y/n)}}for(let y=1;y<=n;y++)for(let g=1;g<=r;g++){let m=(r+1)*y+g-1,x=(r+1)*(y-1)+g-1,A=(r+1)*(y-1)+g,S=(r+1)*y+g;c.push(m,x,S),c.push(x,A,S)}this.setIndex(c),this.setAttribute("position",new At(u,3)),this.setAttribute("normal",new At(l,3)),this.setAttribute("uv",new At(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function hs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(Zd(r))r.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Zd(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Ln(i){let e={};for(let t=0;t<i.length;t++){let n=hs(i[t]);for(let r in n)e[r]=n[r]}return e}function Zd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function bg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ph(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}var fr={clone:hs,merge:Ln},Eg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,tn=class extends Hn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Eg,this.fragmentShader=wg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hs(e.uniforms),this.uniformsGroups=bg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new $e().setHex(r.value);break;case"v2":this.uniforms[n].value=new ot().fromArray(r.value);break;case"v3":this.uniforms[n].value=new K().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Ft().fromArray(r.value);break;case"m3":this.uniforms[n].value=new pt().fromArray(r.value);break;case"m4":this.uniforms[n].value=new xt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Js=class extends tn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Kt=class extends Hn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=So,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},kn=class extends Kt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ot(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var $a=class extends Hn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=So,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=Zl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ul=class extends Hn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Hl=class extends Hn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function br(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ml(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Ag(i){function e(r,s){return i[r]-i[s]}let t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Jd(i,e,t){let n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let c=0;c!==e;++c)r[a++]=i[o+c]}return r}function Rg(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}var Bi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break t}a=t.length;break n}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Fl=class extends Bi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yr,endingEnd:Yr}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Kr:s=e,o=2*t-n;break;case Ua:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Kr:a=e,c=2*n-t;break;case Ua:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}let u=(n-t)*.5,l=this.valueSize;this._weightPrev=u/(t-o),this._weightNext=u/(c-n),this._offsetPrev=s*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,l=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,v=(n-t)/(r-t),y=v*v,g=y*v,m=-f*g+2*f*y-f*v,x=(1+f)*g+(-1.5-2*f)*y+(-.5+f)*v+1,A=(-1-p)*g+(1.5+p)*y+.5*v,S=p*g-p*y;for(let C=0;C!==o;++C)s[C]=m*a[l+C]+x*a[u+C]+A*a[c+C]+S*a[h+C];return s}},Qa=class extends Bi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,l=(n-t)/(r-t),h=1-l;for(let f=0;f!==o;++f)s[f]=a[u+f]*h+a[c+f]*l;return s}},Bl=class extends Bi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},kl=class extends Bi{interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,l=this.inTangents,h=this.outTangents;if(!l||!h){let v=(n-t)/(r-t),y=1-v;for(let g=0;g!==o;++g)s[g]=a[u+g]*y+a[c+g]*v;return s}let f=o*2,p=e-1;for(let v=0;v!==o;++v){let y=a[u+v],g=a[c+v],m=p*f+v*2,x=h[m],A=h[m+1],S=e*f+v*2,C=l[S],I=l[S+1],L=Ig(n,t,x,C,r);s[v]=Vp(L,y,A,I,g)}return s}};function Vp(i,e,t,n,r){let s=1-i;return s*s*s*e+3*s*s*i*t+3*s*i*i*n+i*i*i*r}function Cg(i,e,t,n,r){let s=1-i;return 3*s*s*(t-e)+6*s*i*(n-t)+3*i*i*(r-n)}function Ig(i,e,t,n,r){let s=(i-e)/(r-e);for(let a=0;a<8;a++){let o=Vp(s,e,t,n,r)-i;if(Math.abs(o)<1e-10)break;let c=Cg(s,e,t,n,r);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}var zn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=br(t,this.TimeBufferType),this.values=br(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:br(e.times,Array),values:br(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),Ml(e.settings)&&(n.settings={inTangents:br(e.settings.inTangents,Array),outTangents:br(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Bl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Qa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new kl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Jr:t=this.InterpolantFactoryMethodDiscrete;break;case jr:t=this.InterpolantFactoryMethodLinear;break;case _l:t=this.InterpolantFactoryMethodSmooth;break;case ah:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return at("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Jr;case this.InterpolantFactoryMethodLinear:return jr;case this.InterpolantFactoryMethodSmooth:return _l;case this.InterpolantFactoryMethodBezier:return ah}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Ml(this.settings)&&(jd(this.settings.inTangents,e),jd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ft("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(ft("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){ft("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){ft("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&km(r))for(let o=0,c=r.length;o!==c;++o){let u=r[o];if(isNaN(u)){ft("KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===_l,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,u=e[o],l=e[o+1];if(u!==l&&(o!==1||u!==e[0]))if(r)c=!0;else{let h=o*n,f=h-n,p=h+n;for(let v=0;v!==n;++v){let y=t[h+v];if(y!==t[f+v]||y!==t[p+v]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,u=0;u!==n;++u)t[c+u]=t[o+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Ml(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function jd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}zn.prototype.ValueTypeName="";zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=jr;var or=class extends zn{constructor(e,t,n){super(e,t,n)}};or.prototype.ValueTypeName="bool";or.prototype.ValueBufferType=Array;or.prototype.DefaultInterpolation=Jr;or.prototype.InterpolantFactoryMethodLinear=void 0;or.prototype.InterpolantFactoryMethodSmooth=void 0;var eo=class extends zn{constructor(e,t,n,r){super(e,t,n,r)}};eo.prototype.ValueTypeName="color";var lr=class extends zn{constructor(e,t,n,r){super(e,t,n,r)}};lr.prototype.ValueTypeName="number";var zl=class extends Bi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t),u=e*o;for(let l=u+o;u!==l;u+=4)In.slerpFlat(s,0,a,u-o,a,u,c);return s}},cr=class extends zn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new zl(this.times,this.values,this.getValueSize(),e)}};cr.prototype.ValueTypeName="quaternion";cr.prototype.InterpolantFactoryMethodSmooth=void 0;var ur=class extends zn{constructor(e,t,n){super(e,t,n)}};ur.prototype.ValueTypeName="string";ur.prototype.ValueBufferType=Array;ur.prototype.DefaultInterpolation=Jr;ur.prototype.InterpolantFactoryMethodLinear=void 0;ur.prototype.InterpolantFactoryMethodSmooth=void 0;var Ir=class extends zn{constructor(e,t,n,r){super(e,t,n,r)}};Ir.prototype.ValueTypeName="vector";var rs=class{constructor(e="",t=-1,n=[],r=Fc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=bi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Lg(n[a]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(zn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let s=t.length,a=[];for(let o=0;o<s;o++){let c=[],u=[];c.push((o+s-1)%s,o,(o+1)%s),u.push(0,1,0);let l=Ag(c);c=Jd(c,1,l),u=Jd(u,1,l),!r&&c[0]===0&&(c.push(s),u.push(u[0])),a.push(new lr(".morphTargetInfluences["+t[o].name+"]",c,u).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let u=e[o],l=u.name.match(s);if(l&&l.length>1){let h=l[1],f=r[h];f||(r[h]=f=[]),f.push(u)}}let a=[];for(let o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Pg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return lr;case"vector":case"vector2":case"vector3":case"vector4":return Ir;case"color":return eo;case"quaternion":return cr;case"bool":case"boolean":return or;case"string":return ur}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Lg(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Pg(i.type);if(i.times===void 0){let n=[],r=[];Rg(i.keys,n,r,"value"),i.times=n,i.values=r}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Ml(i.settings)&&(t.settings={inTangents:br(i.settings.inTangents,Float32Array),outTangents:br(i.settings.outTangents,Float32Array)}),t}var Oi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&($d(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!$d(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function $d(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Gl=class{constructor(e,t,n){let r=this,s=!1,a=0,o=0,c,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(l){o++,s===!1&&r.onStart!==void 0&&r.onStart(l,a,o),s=!0},this.itemEnd=function(l){a++,r.onProgress!==void 0&&r.onProgress(l,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(l){r.onError!==void 0&&r.onError(l)},this.resolveURL=function(l){return l=l.normalize("NFC"),c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,h){return u.push(l,h),this},this.removeHandler=function(l){let h=u.indexOf(l);return h!==-1&&u.splice(h,2),this},this.getHandler=function(l){for(let h=0,f=u.length;h<f;h+=2){let p=u[h],v=u[h+1];if(p.global&&(p.lastIndex=0),p.test(l))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Wp=new Gl,ki=class{constructor(e){this.manager=e!==void 0?e:Wp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ki.DEFAULT_MATERIAL_NAME="__DEFAULT";var ir={},lh=class extends Error{constructor(e,t){super(e),this.response=t}},js=class extends ki{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Oi.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(ir[e]!==void 0){ir[e].push({onLoad:t,onProgress:n,onError:r});return}ir[e]=[],ir[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&at("FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||u.body===void 0||u.body.getReader===void 0)return u;let l=ir[e],h=u.body.getReader(),f=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),p=f?parseInt(f):0,v=p!==0,y=0,g=new ReadableStream({start(m){x();function x(){h.read().then(({done:A,value:S})=>{if(A)m.close();else{y+=S.byteLength;let C=new ProgressEvent("progress",{lengthComputable:v,loaded:y,total:p});for(let I=0,L=l.length;I<L;I++){let M=l[I];M.onProgress&&M.onProgress(C)}m.enqueue(S),x()}},A=>{m.error(A)})}}});return new Response(g)}else throw new lh(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(c){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(l=>new DOMParser().parseFromString(l,o));case"json":return u.json();default:if(o==="")return u.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return u.arrayBuffer().then(v=>p.decode(v))}}}).then(u=>{Oi.add(`file:${e}`,u);let l=ir[e];delete ir[e];for(let h=0,f=l.length;h<f;h++){let p=l[h];p.onLoad&&p.onLoad(u)}}).catch(u=>{let l=ir[e];if(l===void 0)throw this.manager.itemError(e),u;delete ir[e];for(let h=0,f=l.length;h<f;h++){let p=l[h];p.onError&&p.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ns=new WeakMap,Vl=class extends ki{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Oi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=Ns.get(a);h===void 0&&(h=[],Ns.set(a,h)),h.push({onLoad:t,onError:r})}return a}let o=ks("img");function c(){l(),t&&t(this);let h=Ns.get(this)||[];for(let f=0;f<h.length;f++){let p=h[f];p.onLoad&&p.onLoad(this)}Ns.delete(this),s.manager.itemEnd(e)}function u(h){l(),r&&r(h),Oi.remove(`image:${e}`);let f=Ns.get(this)||[];for(let p=0;p<f.length;p++){let v=f[p];v.onError&&v.onError(h)}Ns.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function l(){o.removeEventListener("load",c,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Oi.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var ss=class extends ki{constructor(e){super(e)}load(e,t,n,r){let s=new on,a=new Vl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},Pr=class extends jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},$s=class extends Pr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ih=new xt,Qd=new K,ep=new K,Qs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=Vn,this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ys,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Qd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qd),ep.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ep),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){ih.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ih,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,u=r?r.y/s.y:0;e.coordinateSystem===Bs||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,.5,.5,0,0,0,1),t.multiply(ih)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},vl=new K,xl=new In,Di=new K,to=class extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(vl,xl,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vl,xl,Di.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(vl,xl,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vl,xl,Di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Tr=new K,tp=new ot,np=new ot,sn=class extends to{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=$r*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Da*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $r*2*Math.atan(Math.tan(Da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z),Tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z)}getViewSize(e,t){return this.getViewBounds(e,tp,np),t.subVectors(np,tp)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Da*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/u,r*=a.width/c,n*=a.height/u}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ch=class extends Qs{constructor(){super(new sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=$r*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},no=class extends Pr{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new ch}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},uh=class extends Qs{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0}},Gn=class extends Pr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new uh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},zi=class extends to{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=l*this.view.offsetY,c=o-l*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},hh=class extends Qs{constructor(){super(new zi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},as=class extends Pr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new hh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},ea=class extends Pr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var hr=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var rh=new WeakMap,io=class extends ki{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&at("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&at("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Oi.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(u=>{rh.has(a)===!0?(r&&r(rh.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(u),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(u){return Oi.add(`image-bitmap:${e}`,u),t&&t(u),s.manager.itemEnd(e),u}).catch(function(u){r&&r(u),rh.set(c,u),Oi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Oi.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ds=-90,Os=1,Wl=class extends jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new sn(Ds,Os,e,t);r.layers=this.layers,this.add(r);let s=new sn(Ds,Os,e,t);s.layers=this.layers,this.add(s);let a=new sn(Ds,Os,e,t);a.layers=this.layers,this.add(a);let o=new sn(Ds,Os,e,t);o.layers=this.layers,this.add(o);let c=new sn(Ds,Os,e,t);c.layers=this.layers,this.add(c);let u=new sn(Ds,Os,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(let u of t)this.remove(u);if(e===Ti)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,u,l]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(h,f,p),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},ql=class extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ro=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Ng.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Ng(){this._document.hidden===!1&&this.reset()}var Xl=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,s,a;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:r=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,r=this.valueSize,s=e*r+r,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==r;++o)n[s+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,s,0,o,r)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,r=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let c=t*this._origIndex;this._mixBufferRegion(n,r,c,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let c=t,u=t+t;c!==u;++c)if(n[c]!==n[c+t]){o.setValue(n,r);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let s=n,a=r;s!==a;++s)t[s]=t[r+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,s){if(r>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,r){In.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,s){let a=this._workIndex*s;In.multiplyQuaternionsFlat(e,a,e,t,e,n),In.slerpFlat(e,t,e,t,e,a,r)}_lerp(e,t,n,r,s){let a=1-r;for(let o=0;o!==s;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*r}}_lerpAdditive(e,t,n,r,s){for(let a=0;a!==s;++a){let o=t+a;e[o]=e[o]+e[n+a]*r}}},Lh="\\[\\]\\.:\\/",Dg=new RegExp("["+Lh+"]","g"),Nh="[^"+Lh+"]",Og="[^"+Lh.replace("\\.","")+"]",Ug=/((?:WC+[\/:])*)/.source.replace("WC",Nh),Hg=/(WCOD+)?/.source.replace("WCOD",Og),Fg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nh),Bg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nh),kg=new RegExp("^"+Ug+Hg+Fg+Bg+"$"),zg=["material","materials","bones","map"],fh=class{constructor(e,t,n){let r=n||Vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Vt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Dg,"")}static parseTrackName(e){let t=kg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);zg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){at("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ft("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ft("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let l=0;l<e.length;l++)if(e[l].name===u){u=l;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ft("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ft("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){ft("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let a=e[r];if(a===void 0){let u=t.nodeName;ft("PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Vt.Composite=fh;Vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Vt.prototype.GetterByBindingType=[Vt.prototype._getValue_direct,Vt.prototype._getValue_array,Vt.prototype._getValue_arrayElement,Vt.prototype._getValue_toArray];Vt.prototype.SetterByBindingTypeAndVersioning=[[Vt.prototype._setValue_direct,Vt.prototype._setValue_direct_setNeedsUpdate,Vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_array,Vt.prototype._setValue_array_setNeedsUpdate,Vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_arrayElement,Vt.prototype._setValue_arrayElement_setNeedsUpdate,Vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_fromArray,Vt.prototype._setValue_fromArray_setNeedsUpdate,Vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Yl=class{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;let s=t.tracks,a=s.length,o=new Array(a),c={endingStart:Yr,endingEnd:Yr};for(let u=0;u!==a;++u){let l=s[u].createInterpolant(null);o[u]=l,l.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Hc,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let r=this._clip.duration,s=e._clip.duration,a=s/r,o=r/s;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let r=this._mixer,s=r.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,u=o.sampleValues;return c[0]=s,c[1]=s+n,u[0]=e/a,u[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,u=this._propertyBindings;switch(this.blendMode){case Rp:for(let l=0,h=c.length;l!==h;++l)c[l].evaluate(a),u[l].accumulateAdditive(o);break;case Fc:default:for(let l=0,h=c.length;l!==h;++l)c[l].evaluate(a),u[l].accumulate(r,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,r=this.time+e,s=this._loopCount,a=n===Ap;if(e===0)return s===-1?r:a&&(s&1)===1?t-r:r;if(n===Uc){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),r>=t||r<0){let o=Math.floor(r/t);r-=t*o,s+=Math.abs(o);let c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let u=e<0;this._setEndings(u,!u,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=s,this.time=r;if(a&&(s&1)===1)return t-r}return r}_setEndings(e,t,n){let r=this._interpolantSettings;n?(r.endingStart=Kr,r.endingEnd=Kr):(e?r.endingStart=this.zeroSlopeAtStart?Kr:Yr:r.endingStart=Ua,t?r.endingEnd=this.zeroSlopeAtEnd?Kr:Yr:r.endingEnd=Ua)}_scheduleFading(e,t,n){let r=this._mixer,s=r.time,a=this._weightInterpolant;a===null&&(a=r._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=s,c[0]=t,o[1]=s+e,c[1]=n,this}},Gg=new Float32Array(1),so=class extends Ei{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,r=e._clip.tracks,s=r.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,u=this._bindingsByRootAndName,l=u[c];l===void 0&&(l={},u[c]=l);for(let h=0;h!==s;++h){let f=r[h],p=f.name,v=l[p];if(v!==void 0)++v.referenceCount,a[h]=v;else{if(v=a[h],v!==void 0){v._cacheIndex===null&&(++v.referenceCount,this._addInactiveBinding(v,c,p));continue}let y=t&&t._propertyBindings[h].binding.parsedPath;v=new Xl(Vt.create(n,p,y),f.ValueTypeName,f.getValueSize()),++v.referenceCount,this._addInactiveBinding(v,c,p),a[h]=v}o[h].resultBuffer=v.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,n)}let t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){let s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){let s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let r=this._actions,s=this._actionsByClip,a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=r.length,r.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,a=this._actionsByClip,o=a[s],c=o.knownActions,u=c[c.length-1],l=e._byClipCacheIndex;u._byClipCacheIndex=l,c[l]=u,c.pop(),e._byClipCacheIndex=null;let h=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],c.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){let s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){let r=this._bindingsByRootAndName,s=this._bindings,a=r[t];a===void 0&&(a={},r[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,r=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[r],c=t[t.length-1],u=e._cacheIndex;c._cacheIndex=u,t[u]=c,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[r]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Qa(new Float32Array(2),new Float32Array(2),1,Gg),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){let r=t||this._root,s=r.uuid,a=typeof e=="string"?rs.findByName(r,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],u=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Fc),c!==void 0){let h=c.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;u=c.knownActions[0],a===null&&(a=u._clip)}if(a===null)return null;let l=new Yl(this,a,t,n);return this._bindAction(l,u),this._addInactiveAction(l,o,s),l}existingAction(e,t){let n=t||this._root,r=n.uuid,s=typeof e=="string"?rs.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[r]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,r=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let u=0;u!==n;++u)t[u]._update(r,e,s,a);let o=this._bindings,c=this._nActiveBindings;for(let u=0;u!==c;++u)o[u].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,r=this._actionsByClip,s=r[n];if(s!==void 0){let a=s.knownActions;for(let o=0,c=a.length;o!==c;++o){let u=a[o];this._deactivateAction(u);let l=u._cacheIndex,h=t[t.length-1];u._cacheIndex=null,u._byClipCacheIndex=null,h._cacheIndex=l,t[l]=h,t.pop(),this._removeInactiveBindingsForAction(u)}delete r[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(let a in s){let o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Bh=class Bh{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};Bh.prototype.isMatrix2=!0;var dh=Bh;function Dh(i,e,t,n){let r=Vg(n);switch(t){case bh:return i*e;case nc:return i*e/r.components*r.byteLength;case ic:return i*e/r.components*r.byteLength;case Dr:return i*e*2/r.components*r.byteLength;case rc:return i*e*2/r.components*r.byteLength;case Eh:return i*e*3/r.components*r.byteLength;case $n:return i*e*4/r.components*r.byteLength;case sc:return i*e*4/r.components*r.byteLength;case mo:case go:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case vo:case xo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oc:case cc:return Math.max(i,16)*Math.max(e,8)/4;case ac:case lc:return Math.max(i,8)*Math.max(e,8)/2;case uc:case hc:case dc:case pc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fc:case _o:case mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case xc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case _c:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case yc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case bc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case wc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ac:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Rc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Cc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ic:case Pc:case Lc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Nc:case Dc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case yo:case Oc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vg(i){switch(i){case Vn:case yh:return{byteLength:1,components:1};case ra:case Mh:case Tn:return{byteLength:2,components:1};case ec:case tc:return{byteLength:2,components:4};case Ri:case Ql:case jn:return{byteLength:4,components:1};case Sh:case Th:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function f0(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function qg(i){let e=new WeakMap;function t(o,c){let u=o.array,l=o.usage,h=u.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,u,l),o.onUploadCallback();let p;if(u instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array!="undefined"&&u instanceof Float16Array)p=i.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=i.SHORT;else if(u instanceof Uint32Array)p=i.UNSIGNED_INT;else if(u instanceof Int32Array)p=i.INT;else if(u instanceof Int8Array)p=i.BYTE;else if(u instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,u){let l=c.array,h=c.updateRanges;if(i.bindBuffer(u,o),h.length===0)i.bufferSubData(u,0,l);else{h.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<h.length;p++){let v=h[f],y=h[p];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++f,h[f]=y)}h.length=f+1;for(let p=0,v=h.length;p<v;p++){let y=h[p];i.bufferSubData(u,y.start*l.BYTES_PER_ELEMENT,l,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let l=e.get(o);(!l||l.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=e.get(o);if(u===void 0)e.set(o,t(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,c),u.version=o.version}}return{get:r,remove:s,update:a}}var Xg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yg=`#ifdef USE_ALPHAHASH
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
#endif`,Kg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$g=`#ifdef USE_AOMAP
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
#endif`,Qg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ev=`#ifdef USE_BATCHING
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
#endif`,tv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sv=`#ifdef USE_IRIDESCENCE
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
#endif`,av=`#ifdef USE_BUMPMAP
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
#endif`,ov=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,fv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,dv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,pv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,mv=`#define PI 3.141592653589793
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
} // validated`,gv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vv=`vec3 transformedNormal = objectNormal;
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
#endif`,xv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_v=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bv=`#ifdef USE_ENVMAP
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
#endif`,Ev=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wv=`#ifdef USE_ENVMAP
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
#endif`,Av=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rv=`#ifdef USE_ENVMAP
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
#endif`,Cv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Iv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nv=`#ifdef USE_GRADIENTMAP
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
}`,Dv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ov=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Fv=`#ifdef USE_ENVMAP
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
#endif`,Bv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vv=`PhysicalMaterial material;
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
#endif`,Wv=`uniform sampler2D dfgLUT;
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
}`,qv=`
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
#endif`,Xv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kv=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Zv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$v=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ex=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nx=`#if defined( USE_POINTS_UV )
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
#endif`,ix=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ax=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ox=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lx=`#ifdef USE_MORPHTARGETS
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
#endif`,cx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ux=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,px=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,mx=`#ifdef USE_NORMALMAP
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
#endif`,gx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_x=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ex=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ax=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ix=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Px=`float getShadowMask() {
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
}`,Lx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nx=`#ifdef USE_SKINNING
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
#endif`,Dx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ox=`#ifdef USE_SKINNING
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
#endif`,Ux=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kx=`#ifdef USE_TRANSMISSION
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
#endif`,zx=`#ifdef USE_TRANSMISSION
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
#endif`,Gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Xx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yx=`uniform sampler2D t2D;
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
}`,Kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$x=`#include <common>
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
}`,Qx=`#if DEPTH_PACKING == 3200
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
}`,e_=`#define DISTANCE
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
}`,t_=`#define DISTANCE
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
}`,n_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r_=`uniform float scale;
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
}`,s_=`uniform vec3 diffuse;
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
}`,a_=`#include <common>
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
}`,o_=`uniform vec3 diffuse;
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
}`,l_=`#define LAMBERT
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
}`,c_=`#define LAMBERT
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
}`,u_=`#define MATCAP
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
}`,h_=`#define MATCAP
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
}`,f_=`#define NORMAL
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
}`,d_=`#define NORMAL
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
}`,p_=`#define PHONG
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
}`,m_=`#define PHONG
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
}`,g_=`#define STANDARD
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
}`,v_=`#define STANDARD
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
}`,x_=`#define TOON
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
}`,__=`#define TOON
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
}`,y_=`uniform float size;
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
}`,M_=`uniform vec3 diffuse;
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
}`,S_=`#include <common>
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
}`,T_=`uniform vec3 color;
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
}`,b_=`uniform float rotation;
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
}`,E_=`uniform vec3 diffuse;
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
}`,St={alphahash_fragment:Xg,alphahash_pars_fragment:Yg,alphamap_fragment:Kg,alphamap_pars_fragment:Zg,alphatest_fragment:Jg,alphatest_pars_fragment:jg,aomap_fragment:$g,aomap_pars_fragment:Qg,batching_pars_vertex:ev,batching_vertex:tv,begin_vertex:nv,beginnormal_vertex:iv,bsdfs:rv,iridescence_fragment:sv,bumpmap_pars_fragment:av,clipping_planes_fragment:ov,clipping_planes_pars_fragment:lv,clipping_planes_pars_vertex:cv,clipping_planes_vertex:uv,color_fragment:hv,color_pars_fragment:fv,color_pars_vertex:dv,color_vertex:pv,common:mv,cube_uv_reflection_fragment:gv,defaultnormal_vertex:vv,displacementmap_pars_vertex:xv,displacementmap_vertex:_v,emissivemap_fragment:yv,emissivemap_pars_fragment:Mv,colorspace_fragment:Sv,colorspace_pars_fragment:Tv,envmap_fragment:bv,envmap_common_pars_fragment:Ev,envmap_pars_fragment:wv,envmap_pars_vertex:Av,envmap_physical_pars_fragment:Fv,envmap_vertex:Rv,fog_vertex:Cv,fog_pars_vertex:Iv,fog_fragment:Pv,fog_pars_fragment:Lv,gradientmap_pars_fragment:Nv,lightmap_pars_fragment:Dv,lights_lambert_fragment:Ov,lights_lambert_pars_fragment:Uv,lights_pars_begin:Hv,lights_toon_fragment:Bv,lights_toon_pars_fragment:kv,lights_phong_fragment:zv,lights_phong_pars_fragment:Gv,lights_physical_fragment:Vv,lights_physical_pars_fragment:Wv,lights_fragment_begin:qv,lights_fragment_maps:Xv,lights_fragment_end:Yv,lightprobes_pars_fragment:Kv,logdepthbuf_fragment:Zv,logdepthbuf_pars_fragment:Jv,logdepthbuf_pars_vertex:jv,logdepthbuf_vertex:$v,map_fragment:Qv,map_pars_fragment:ex,map_particle_fragment:tx,map_particle_pars_fragment:nx,metalnessmap_fragment:ix,metalnessmap_pars_fragment:rx,morphinstance_vertex:sx,morphcolor_vertex:ax,morphnormal_vertex:ox,morphtarget_pars_vertex:lx,morphtarget_vertex:cx,normal_fragment_begin:ux,normal_fragment_maps:hx,normal_pars_fragment:fx,normal_pars_vertex:dx,normal_vertex:px,normalmap_pars_fragment:mx,clearcoat_normal_fragment_begin:gx,clearcoat_normal_fragment_maps:vx,clearcoat_pars_fragment:xx,iridescence_pars_fragment:_x,opaque_fragment:yx,packing:Mx,premultiplied_alpha_fragment:Sx,project_vertex:Tx,dithering_fragment:bx,dithering_pars_fragment:Ex,roughnessmap_fragment:wx,roughnessmap_pars_fragment:Ax,shadowmap_pars_fragment:Rx,shadowmap_pars_vertex:Cx,shadowmap_vertex:Ix,shadowmask_pars_fragment:Px,skinbase_vertex:Lx,skinning_pars_vertex:Nx,skinning_vertex:Dx,skinnormal_vertex:Ox,specularmap_fragment:Ux,specularmap_pars_fragment:Hx,tonemapping_fragment:Fx,tonemapping_pars_fragment:Bx,transmission_fragment:kx,transmission_pars_fragment:zx,uv_pars_fragment:Gx,uv_pars_vertex:Vx,uv_vertex:Wx,worldpos_vertex:qx,background_vert:Xx,background_frag:Yx,backgroundCube_vert:Kx,backgroundCube_frag:Zx,cube_vert:Jx,cube_frag:jx,depth_vert:$x,depth_frag:Qx,distance_vert:e_,distance_frag:t_,equirect_vert:n_,equirect_frag:i_,linedashed_vert:r_,linedashed_frag:s_,meshbasic_vert:a_,meshbasic_frag:o_,meshlambert_vert:l_,meshlambert_frag:c_,meshmatcap_vert:u_,meshmatcap_frag:h_,meshnormal_vert:f_,meshnormal_frag:d_,meshphong_vert:p_,meshphong_frag:m_,meshphysical_vert:g_,meshphysical_frag:v_,meshtoon_vert:x_,meshtoon_frag:__,points_vert:y_,points_frag:M_,shadow_vert:S_,shadow_frag:T_,sprite_vert:b_,sprite_frag:E_},ke={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new K},probesMax:{value:new K},probesResolution:{value:new K}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},qi={basic:{uniforms:Ln([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:Ln([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:Ln([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:Ln([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:Ln([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new $e(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:Ln([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:Ln([ke.points,ke.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:Ln([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:Ln([ke.common,ke.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:Ln([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:Ln([ke.sprite,ke.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distance:{uniforms:Ln([ke.common,ke.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distance_vert,fragmentShader:St.distance_frag},shadow:{uniforms:Ln([ke.lights,ke.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};qi.physical={uniforms:Ln([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};var zc={r:0,b:0,g:0},w_=new xt,d0=new pt;d0.set(-1,0,0,0,1,0,0,0,1);function A_(i,e,t,n,r,s){let a=new $e(0),o=r===!0?0:1,c,u,l=null,h=0,f=null;function p(x){let A=x.isScene===!0?x.background:null;if(A&&A.isTexture){let S=x.backgroundBlurriness>0;A=e.get(A,S)}return A}function v(x){let A=!1,S=p(x);S===null?g(a,o):S&&S.isColor&&(g(S,1),A=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(x,A){let S=p(A);S&&(S.isCubeTexture||S.mapping===po)?(u===void 0&&(u=new Fe(new en(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:hs(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,I,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(w_.makeRotationFromEuler(A.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(d0),u.material.toneMapped=yt.getTransfer(S.colorSpace)!==Dt,(l!==S||h!==S.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,l=S,h=S.version,f=i.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Fe(new Jn(2,2),new tn({name:"BackgroundMaterial",uniforms:hs(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=yt.getTransfer(S.colorSpace)!==Dt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(l!==S||h!==S.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,l=S,h=S.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function g(x,A){x.getRGB(zc,Ph(i)),t.buffers.color.setClear(zc.r,zc.g,zc.b,A,s)}function m(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,A=1){a.set(x),o=A,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,g(a,o)},render:v,addToRenderList:y,dispose:m}}function R_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,a=!1;function o(H,_,w,P,k){let Y=!1,ne=h(H,P,w,_);s!==ne&&(s=ne,u(s.object)),Y=p(H,P,w,k),Y&&v(H,P,w,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,S(H,_,w,P),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return i.createVertexArray()}function u(H){return i.bindVertexArray(H)}function l(H){return i.deleteVertexArray(H)}function h(H,_,w,P){let k=P.wireframe===!0,Y=n[_.id];Y===void 0&&(Y={},n[_.id]=Y);let ne=H.isInstancedMesh===!0?H.id:0,te=Y[ne];te===void 0&&(te={},Y[ne]=te);let le=te[w.id];le===void 0&&(le={},te[w.id]=le);let ue=le[k];return ue===void 0&&(ue=f(c()),le[k]=ue),ue}function f(H){let _=[],w=[],P=[];for(let k=0;k<t;k++)_[k]=0,w[k]=0,P[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:_,enabledAttributes:w,attributeDivisors:P,object:H,attributes:{},index:null}}function p(H,_,w,P){let k=s.attributes,Y=_.attributes,ne=0,te=w.getAttributes();for(let le in te)if(te[le].location>=0){let he=k[le],De=Y[le];if(De===void 0&&(le==="instanceMatrix"&&H.instanceMatrix&&(De=H.instanceMatrix),le==="instanceColor"&&H.instanceColor&&(De=H.instanceColor)),he===void 0||he.attribute!==De||De&&he.data!==De.data)return!0;ne++}return s.attributesNum!==ne||s.index!==P}function v(H,_,w,P){let k={},Y=_.attributes,ne=0,te=w.getAttributes();for(let le in te)if(te[le].location>=0){let he=Y[le];he===void 0&&(le==="instanceMatrix"&&H.instanceMatrix&&(he=H.instanceMatrix),le==="instanceColor"&&H.instanceColor&&(he=H.instanceColor));let De={};De.attribute=he,he&&he.data&&(De.data=he.data),k[le]=De,ne++}s.attributes=k,s.attributesNum=ne,s.index=P}function y(){let H=s.newAttributes;for(let _=0,w=H.length;_<w;_++)H[_]=0}function g(H){m(H,0)}function m(H,_){let w=s.newAttributes,P=s.enabledAttributes,k=s.attributeDivisors;w[H]=1,P[H]===0&&(i.enableVertexAttribArray(H),P[H]=1),k[H]!==_&&(i.vertexAttribDivisor(H,_),k[H]=_)}function x(){let H=s.newAttributes,_=s.enabledAttributes;for(let w=0,P=_.length;w<P;w++)_[w]!==H[w]&&(i.disableVertexAttribArray(w),_[w]=0)}function A(H,_,w,P,k,Y,ne){ne===!0?i.vertexAttribIPointer(H,_,w,k,Y):i.vertexAttribPointer(H,_,w,P,k,Y)}function S(H,_,w,P){y();let k=P.attributes,Y=w.getAttributes(),ne=_.defaultAttributeValues;for(let te in Y){let le=Y[te];if(le.location>=0){let ue=k[te];if(ue===void 0&&(te==="instanceMatrix"&&H.instanceMatrix&&(ue=H.instanceMatrix),te==="instanceColor"&&H.instanceColor&&(ue=H.instanceColor)),ue!==void 0){let he=ue.normalized,De=ue.itemSize,Ue=e.get(ue);if(Ue===void 0)continue;let dt=Ue.buffer,je=Ue.type,it=Ue.bytesPerElement,de=je===i.INT||je===i.UNSIGNED_INT||ue.gpuType===Ql;if(ue.isInterleavedBufferAttribute){let me=ue.data,Ee=me.stride,rt=ue.offset;if(me.isInstancedInterleavedBuffer){for(let Be=0;Be<le.locationSize;Be++)m(le.location+Be,me.meshPerAttribute);H.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Be=0;Be<le.locationSize;Be++)g(le.location+Be);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let Be=0;Be<le.locationSize;Be++)A(le.location+Be,De/le.locationSize,je,he,Ee*it,(rt+De/le.locationSize*Be)*it,de)}else{if(ue.isInstancedBufferAttribute){for(let me=0;me<le.locationSize;me++)m(le.location+me,ue.meshPerAttribute);H.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let me=0;me<le.locationSize;me++)g(le.location+me);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let me=0;me<le.locationSize;me++)A(le.location+me,De/le.locationSize,je,he,De*it,De/le.locationSize*me*it,de)}}else if(ne!==void 0){let he=ne[te];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(le.location,he);break;case 3:i.vertexAttrib3fv(le.location,he);break;case 4:i.vertexAttrib4fv(le.location,he);break;default:i.vertexAttrib1fv(le.location,he)}}}}x()}function C(){T();for(let H in n){let _=n[H];for(let w in _){let P=_[w];for(let k in P){let Y=P[k];for(let ne in Y)l(Y[ne].object),delete Y[ne];delete P[k]}}delete n[H]}}function I(H){if(n[H.id]===void 0)return;let _=n[H.id];for(let w in _){let P=_[w];for(let k in P){let Y=P[k];for(let ne in Y)l(Y[ne].object),delete Y[ne];delete P[k]}}delete n[H.id]}function L(H){for(let _ in n){let w=n[_];for(let P in w){let k=w[P];if(k[H.id]===void 0)continue;let Y=k[H.id];for(let ne in Y)l(Y[ne].object),delete Y[ne];delete k[H.id]}}}function M(H){for(let _ in n){let w=n[_],P=H.isInstancedMesh===!0?H.id:0,k=w[P];if(k!==void 0){for(let Y in k){let ne=k[Y];for(let te in ne)l(ne[te].object),delete ne[te];delete k[Y]}delete w[P],Object.keys(w).length===0&&delete n[_]}}}function T(){D(),a=!0,s!==r&&(s=r,u(s.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:D,dispose:C,releaseStatesOfGeometry:I,releaseStatesOfObject:M,releaseStatesOfProgram:L,initAttributes:y,enableAttribute:g,disableUnusedAttributes:x}}function C_(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,l){l!==0&&(i.drawArraysInstanced(n,c,u,l),t.update(u,n,l))}function o(c,u,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,l);let f=0;for(let p=0;p<l;p++)f+=u[p];t.update(f,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function I_(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(L){return!(L!==$n&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){let M=L===Tn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Vn&&L!==jn&&!M&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp",l=c(u);l!==u&&(at("WebGLRenderer:",u,"not supported, using",l,"instead."),u=l);let h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&at("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),I=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:x,maxVaryings:A,maxFragmentUniforms:S,maxSamples:C,samples:I}}function P_(i){let e=this,t=null,n=0,r=!1,s=!1,a=new Mi,o=new pt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||n!==0||r;return r=f,n=h.length,p},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=l(h,f,0)},this.setState=function(h,f,p){let v=h.clippingPlanes,y=h.clipIntersection,g=h.clipShadows,m=i.get(h);if(!r||v===null||v.length===0||s&&!g)s?l(null):u();else{let x=s?0:n,A=x*4,S=m.clippingState||null;c.value=S,S=l(v,f,A,p);for(let C=0;C!==A;++C)S[C]=t[C];m.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(h,f,p,v){let y=h!==null?h.length:0,g=null;if(y!==0){if(g=c.value,v!==!0||g===null){let m=p+y*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let A=0,S=p;A!==y;++A,S+=4)a.copy(h[A]).applyMatrix4(x,o),a.normal.toArray(g,S),g[S+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}var ca=4,L_=6,N_=20,D_=256,To=new zi,qp=new $e,kh=null,zh=0,Gh=0,Vh=!1,O_=new K,fs=new K,ha=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:o=O_}=s;kh=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),Vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(kh,zh,Gh),this._renderer.xr.enabled=Vh,e.scissorTest=!1,la(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Lr||e.mapping===cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kh=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),Vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:Tn,format:$n,colorSpace:Un,depthBuffer:!1},r=Xp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xp(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=U_(s)),this._blurMaterial=F_(s,e,t),this._ggxMaterial=H_(s,e,t)}return r}_compileMaterial(e){let t=new Fe(new Yt,e);this._renderer.compile(t,To)}_sceneToCubeUV(e,t,n,r,s){let c=new sn(90,1,t,n),u=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(qp),h.toneMapping=wi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fe(new en,new mn({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,g=y.material,m=!1,x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,m=!0):(g.color.copy(qp),m=!0);for(let A=0;A<6;A++){let S=A%3;S===0?(c.up.set(0,u[A],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+l[A],s.y,s.z)):S===1?(c.up.set(0,0,u[A]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+l[A],s.z)):(c.up.set(0,u[A],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+l[A]));let C=this._cubeSize;la(r,S*C,A>2?C:0,C,C),h.setRenderTarget(r),m&&h.render(y,c),h.render(e,c)}h.toneMapping=p,h.autoClear=f,e.background=x}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Lr||e.mapping===cs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yp());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;la(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,To)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,u=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),h=Math.sqrt(u*u-l*l),f=u*1.25,p=h*f,{_lodMax:v}=this,y=this._sizeLods[n],g=3*y*(n>v-ca?n-v+ca:0),m=4*(this._cubeSize-y);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=v-t,la(s,g,m,3*y,2*y),r.setRenderTarget(s),r.render(o,To),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=v-n,la(e,g,m,3*y,2*y),r.setRenderTarget(e),r.render(o,To)}_blur(e,t,n,r){let s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,r,s){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[r];c.material=o;let u=o.uniforms;u.envMap.value=e.texture,u.sigma.value=s,u.mipInt.value=this._lodMax-n;let l=this._sizeLods[r],h=3*l*(r>this._lodMax-ca?r-this._lodMax+ca:0),f=4*(this._cubeSize-l);la(t,h,f,3*l,2*l),a.setRenderTarget(t),a.render(c,To)}};function U_(i){let e=[],t=[],n=i,r=i-ca+1+L_;for(let s=0;s<r;s++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,u=1+o,l=[c,c,u,c,u,u,c,c,u,u,c,u],h=6,f=6,p=3,v=new Float32Array(p*f*h),y=new Float32Array(p*f*h);for(let m=0;m<h;m++){let x=m%3*2/3-1,A=m>2?0:-1,S=[x,A,0,x+2/3,A,0,x+2/3,A+1,0,x,A,0,x+2/3,A+1,0,x,A+1,0];v.set(S,p*f*m);for(let C=0;C<f;C++){let I=l[C*2]*2-1,L=l[C*2+1]*2-1;m===0?fs.set(1,L,I):m===1?fs.set(-I,1,-L):m===2?fs.set(-I,L,1):m===3?fs.set(-1,L,-I):m===4?fs.set(-I,-1,L):fs.set(I,L,-1),fs.toArray(y,(m*f+C)*p)}}let g=new Yt;g.setAttribute("position",new $t(v,p)),g.setAttribute("outputDirection",new $t(y,p)),t.push(new Fe(g,null)),n>ca&&n--}return{lodMeshes:t,sizeLods:e}}function Xp(i,e,t){let n=new pn(i,e,t);return n.texture.mapping=po,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function la(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function H_(i,e,t){return new tn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:D_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qc(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function F_(i,e,t){return new tn({name:"SphericalGaussianBlur",defines:{SAMPLES:N_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:qc(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Yp(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qc(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Kp(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function qc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Vc=class extends pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ka(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new en(5,5,5),s=new tn({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:ci});s.uniforms.tEquirect.value=t;let a=new Fe(r,s),o=t.minFilter;return t.minFilter===Ai&&(t.minFilter=an),new Wl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}};function B_(i){let e=new WeakMap,t=new WeakMap,n=null;function r(f,p=!1){return f==null?null:p?a(f):s(f)}function s(f){if(f&&f.isTexture){let p=f.mapping;if(p===Jl||p===jl)if(e.has(f)){let v=e.get(f).texture;return o(v,f.mapping)}else{let v=f.image;if(v&&v.height>0){let y=new Vc(v.height);return y.fromEquirectangularTexture(i,f),e.set(f,y),f.addEventListener("dispose",u),o(y.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let p=f.mapping,v=p===Jl||p===jl,y=p===Lr||p===cs;if(v||y){let g=t.get(f),m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new ha(i)),g=v?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{let x=f.image;return v&&x&&x.height>0||y&&x&&c(x)?(n===null&&(n=new ha(i)),g=v?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",l),g.texture):null}}}return f}function o(f,p){return p===Jl?f.mapping=Lr:p===jl&&(f.mapping=cs),f}function c(f){let p=0,v=6;for(let y=0;y<v;y++)f[y]!==void 0&&p++;return p===v}function u(f){let p=f.target;p.removeEventListener("dispose",u);let v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function l(f){let p=f.target;p.removeEventListener("dispose",l);let v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function k_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Zr("WebGLRenderer: "+n+" extension not supported."),r}}}function z_(i,e,t,n){let r={},s=new WeakMap;function a(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",a),delete r[f.id];let p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(h){let f=h.attributes;for(let p in f)e.update(f[p],i.ARRAY_BUFFER)}function u(h){let f=[],p=h.index,v=h.attributes.position,y=0;if(v===void 0)return;if(p!==null){let x=p.array;y=p.version;for(let A=0,S=x.length;A<S;A+=3){let C=x[A+0],I=x[A+1],L=x[A+2];f.push(C,I,I,L,L,C)}}else{let x=v.array;y=v.version;for(let A=0,S=x.length/3-1;A<S;A+=3){let C=A+0,I=A+1,L=A+2;f.push(C,I,I,L,L,C)}}let g=new(v.count>=65535?Va:Ga)(f,1);g.version=y;let m=s.get(h);m&&e.remove(m),s.set(h,g)}function l(h){let f=s.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&u(h)}else u(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:l}}function G_(i,e,t){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,f){i.drawElements(n,f,s,h*a),t.update(f,n,1)}function u(h,f,p){p!==0&&(i.drawElementsInstanced(n,f,s,h*a,p),t.update(f,n,p))}function l(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,p);let y=0;for(let g=0;g<p;g++)y+=f[g];t.update(y,n,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=l}function V_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:ft("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function W_(i,e,t){let n=new WeakMap,r=new Ft;function s(a,o,c){let u=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=l!==void 0?l.length:0,f=n.get(o);if(f===void 0||f.count!==h){let T=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],A=0;p===!0&&(A=1),v===!0&&(A=2),y===!0&&(A=3);let S=o.attributes.position.count*A,C=1;S>e.maxTextureSize&&(C=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let I=new Float32Array(S*C*4*h),L=new Ba(I,S,C,h);L.type=jn,L.needsUpdate=!0;let M=A*4;for(let D=0;D<h;D++){let H=g[D],_=m[D],w=x[D],P=S*C*4*D;for(let k=0;k<H.count;k++){let Y=k*M;p===!0&&(r.fromBufferAttribute(H,k),I[P+Y+0]=r.x,I[P+Y+1]=r.y,I[P+Y+2]=r.z,I[P+Y+3]=0),v===!0&&(r.fromBufferAttribute(_,k),I[P+Y+4]=r.x,I[P+Y+5]=r.y,I[P+Y+6]=r.z,I[P+Y+7]=0),y===!0&&(r.fromBufferAttribute(w,k),I[P+Y+8]=r.x,I[P+Y+9]=r.y,I[P+Y+10]=r.z,I[P+Y+11]=w.itemSize===4?r.w:1)}}f={count:h,texture:L,size:new ot(S,C)},n.set(o,f),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let y=0;y<u.length;y++)p+=u[y];let v=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function q_(i,e,t,n,r){let s=new WeakMap;function a(u){let l=r.render.frame,h=u.geometry,f=e.get(u,h);if(s.get(f)!==l&&(e.update(f),s.set(f,l)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),s.get(u)!==l&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),s.set(u,l))),u.isSkinnedMesh){let p=u.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return f}function o(){s=new WeakMap}function c(u){let l=u.target;l.removeEventListener("dispose",c),n.releaseStatesOfObject(l),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:o}}var X_={[oo]:"LINEAR_TONE_MAPPING",[lo]:"REINHARD_TONE_MAPPING",[co]:"CINEON_TONE_MAPPING",[ls]:"ACES_FILMIC_TONE_MAPPING",[ho]:"AGX_TONE_MAPPING",[fo]:"NEUTRAL_TONE_MAPPING",[uo]:"CUSTOM_TONE_MAPPING"};function Y_(i,e,t,n,r,s){let a=new pn(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,u=new Yt;u.setAttribute("position",new At([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new At([0,2,0,0,2,0],2));let l=new Js({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Fe(u,l),f=new zi(-1,1,1,-1,0,1),p=null,v=null,y=!1,g,m=null,x=[],A=!1;this.setSize=function(S,C){a.setSize(S,C),o!==null&&o.setSize(S,C),c!==null&&c.setSize(S,C);for(let I=0;I<x.length;I++){let L=x[I];L.setSize&&L.setSize(S,C)}},this.setEffects=function(S){x=S,A=x.length>0&&x[0].isRenderPass===!0;let C=a.width,I=a.height;x.length>0&&o===null&&(o=new pn(C,I,{type:Tn,depthBuffer:!1,stencilBuffer:!1}),c=new pn(C,I,{type:Tn,depthBuffer:!1,stencilBuffer:!1}));for(let L=0;L<x.length;L++){let M=x[L];M.setSize&&M.setSize(C,I)}},this.begin=function(S,C){if(y||S.toneMapping===wi&&x.length===0)return!1;if(m=C,C!==null){let I=C.width,L=C.height;(a.width!==I||a.height!==L)&&this.setSize(I,L)}return A===!1&&S.setRenderTarget(a),g=S.toneMapping,S.toneMapping=wi,!0},this.hasRenderPass=function(){return A},this.end=function(S,C){S.toneMapping=g,y=!0;let I=a,L=o;for(let M=0;M<x.length;M++){let T=x[M];T.enabled!==!1&&(T.render(S,L,I,C),T.needsSwap!==!1&&(I=L,L=L===o?c:o))}if(p!==S.outputColorSpace||v!==S.toneMapping){p=S.outputColorSpace,v=S.toneMapping,l.defines={},yt.getTransfer(p)===Dt&&(l.defines.SRGB_TRANSFER="");let M=X_[v];M&&(l.defines[M]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=I.texture,S.setRenderTarget(m),S.render(h,f),m=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),u.dispose(),l.dispose()}}var p0=new on,Xh=new Rr(1,1),m0=new Ba,g0=new Pl,v0=new Ka,Zp=[],Jp=[],jp=new Float32Array(16),$p=new Float32Array(9),Qp=new Float32Array(4);function fa(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Zp[r];if(s===void 0&&(s=new Float32Array(r),Zp[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function vn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function xn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Xc(i,e){let t=Jp[e];t===void 0&&(t=new Int32Array(e),Jp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function K_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Z_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2fv(this.addr,e),xn(t,e)}}function J_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vn(t,e))return;i.uniform3fv(this.addr,e),xn(t,e)}}function j_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4fv(this.addr,e),xn(t,e)}}function $_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,n))return;Qp.set(n),i.uniformMatrix2fv(this.addr,!1,Qp),xn(t,n)}}function Q_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,n))return;$p.set(n),i.uniformMatrix3fv(this.addr,!1,$p),xn(t,n)}}function ey(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,n))return;jp.set(n),i.uniformMatrix4fv(this.addr,!1,jp),xn(t,n)}}function ty(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ny(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2iv(this.addr,e),xn(t,e)}}function iy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;i.uniform3iv(this.addr,e),xn(t,e)}}function ry(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4iv(this.addr,e),xn(t,e)}}function sy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ay(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2uiv(this.addr,e),xn(t,e)}}function oy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;i.uniform3uiv(this.addr,e),xn(t,e)}}function ly(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4uiv(this.addr,e),xn(t,e)}}function cy(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Xh.compareFunction=t.isReversedDepthBuffer()?kc:Bc,s=Xh):s=p0,t.setTexture2D(e||s,r)}function uy(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||g0,r)}function hy(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||v0,r)}function fy(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||m0,r)}function dy(i){switch(i){case 5126:return K_;case 35664:return Z_;case 35665:return J_;case 35666:return j_;case 35674:return $_;case 35675:return Q_;case 35676:return ey;case 5124:case 35670:return ty;case 35667:case 35671:return ny;case 35668:case 35672:return iy;case 35669:case 35673:return ry;case 5125:return sy;case 36294:return ay;case 36295:return oy;case 36296:return ly;case 35678:case 36198:case 36298:case 36306:case 35682:return cy;case 35679:case 36299:case 36307:return uy;case 35680:case 36300:case 36308:case 36293:return hy;case 36289:case 36303:case 36311:case 36292:return fy}}function py(i,e){i.uniform1fv(this.addr,e)}function my(i,e){let t=fa(e,this.size,2);i.uniform2fv(this.addr,t)}function gy(i,e){let t=fa(e,this.size,3);i.uniform3fv(this.addr,t)}function vy(i,e){let t=fa(e,this.size,4);i.uniform4fv(this.addr,t)}function xy(i,e){let t=fa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function _y(i,e){let t=fa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function yy(i,e){let t=fa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function My(i,e){i.uniform1iv(this.addr,e)}function Sy(i,e){i.uniform2iv(this.addr,e)}function Ty(i,e){i.uniform3iv(this.addr,e)}function by(i,e){i.uniform4iv(this.addr,e)}function Ey(i,e){i.uniform1uiv(this.addr,e)}function wy(i,e){i.uniform2uiv(this.addr,e)}function Ay(i,e){i.uniform3uiv(this.addr,e)}function Ry(i,e){i.uniform4uiv(this.addr,e)}function Cy(i,e,t){let n=this.cache,r=e.length,s=Xc(t,r);vn(n,s)||(i.uniform1iv(this.addr,s),xn(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Xh:a=p0;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Iy(i,e,t){let n=this.cache,r=e.length,s=Xc(t,r);vn(n,s)||(i.uniform1iv(this.addr,s),xn(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||g0,s[a])}function Py(i,e,t){let n=this.cache,r=e.length,s=Xc(t,r);vn(n,s)||(i.uniform1iv(this.addr,s),xn(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||v0,s[a])}function Ly(i,e,t){let n=this.cache,r=e.length,s=Xc(t,r);vn(n,s)||(i.uniform1iv(this.addr,s),xn(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||m0,s[a])}function Ny(i){switch(i){case 5126:return py;case 35664:return my;case 35665:return gy;case 35666:return vy;case 35674:return xy;case 35675:return _y;case 35676:return yy;case 5124:case 35670:return My;case 35667:case 35671:return Sy;case 35668:case 35672:return Ty;case 35669:case 35673:return by;case 5125:return Ey;case 36294:return wy;case 36295:return Ay;case 36296:return Ry;case 35678:case 36198:case 36298:case 36306:case 35682:return Cy;case 35679:case 36299:case 36307:return Iy;case 35680:case 36300:case 36308:case 36293:return Py;case 36289:case 36303:case 36311:case 36292:return Ly}}var Yh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=dy(t.type)}},Kh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ny(t.type)}},Zh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},Wh=/(\w+)(\])?(\[|\.)?/g;function e0(i,e){i.seq.push(e),i.map[e.id]=e}function Dy(i,e,t){let n=i.name,r=n.length;for(Wh.lastIndex=0;;){let s=Wh.exec(n),a=Wh.lastIndex,o=s[1],c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){e0(t,u===void 0?new Yh(o,i,e):new Kh(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Zh(o),e0(t,h)),t=h}}}var ua=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Dy(o,c,this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function t0(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Oy=37297,Uy=0;function Hy(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var n0=new pt;function Fy(i){yt._getMatrix(n0,yt.workingColorSpace,i);let e=`mat3( ${n0.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(i)){case Ha:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function i0(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Hy(i.getShaderSource(e),o)}else return s}function By(i,e){let t=Fy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var ky={[oo]:"Linear",[lo]:"Reinhard",[co]:"Cineon",[ls]:"ACESFilmic",[ho]:"AgX",[fo]:"Neutral",[uo]:"Custom"};function zy(i,e){let t=ky[e];return t===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Gc=new K;function Gy(){yt.getLuminanceCoefficients(Gc);let i=Gc.x.toFixed(4),e=Gc.y.toFixed(4),t=Gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Eo).join(`
`)}function Wy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function qy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),a=s.name,o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Eo(i){return i!==""}function r0(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function s0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Xy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jh(i){return i.replace(Xy,Ky)}var Yy=new Map;function Ky(i,e){let t=St[e];if(t===void 0){let n=Yy.get(e);if(n!==void 0)t=St[n],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Jh(t)}var Zy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function a0(i){return i.replace(Zy,Jy)}function Jy(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function o0(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var jy={[ao]:"SHADOWMAP_TYPE_PCF",[ta]:"SHADOWMAP_TYPE_VSM"};function $y(i){return jy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Qy={[Lr]:"ENVMAP_TYPE_CUBE",[cs]:"ENVMAP_TYPE_CUBE",[po]:"ENVMAP_TYPE_CUBE_UV"};function eM(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Qy[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var tM={[cs]:"ENVMAP_MODE_REFRACTION"};function nM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":tM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var iM={[Zl]:"ENVMAP_BLENDING_MULTIPLY",[bp]:"ENVMAP_BLENDING_MIX",[Ep]:"ENVMAP_BLENDING_ADD"};function rM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":iM[i.combine]||"ENVMAP_BLENDING_NONE"}function sM(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function aM(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=$y(t),u=eM(t),l=nM(t),h=rM(t),f=sM(t),p=Vy(t),v=Wy(s),y=r.createProgram(),g,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Eo).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Eo).join(`
`),m.length>0&&(m+=`
`)):(g=[o0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Eo).join(`
`),m=[o0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?St.tonemapping_pars_fragment:"",t.toneMapping!==wi?zy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,By("linearToOutputTexel",t.outputColorSpace),Gy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Eo).join(`
`)),a=Jh(a),a=r0(a,t),a=s0(a,t),o=Jh(o),o=r0(o,t),o=s0(o,t),a=a0(a),o=a0(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Rh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let A=x+g+a,S=x+m+o,C=t0(r,r.VERTEX_SHADER,A),I=t0(r,r.FRAGMENT_SHADER,S);r.attachShader(y,C),r.attachShader(y,I),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function L(H){if(i.debug.checkShaderErrors){let _=r.getProgramInfoLog(y)||"",w=r.getShaderInfoLog(C)||"",P=r.getShaderInfoLog(I)||"",k=_.trim(),Y=w.trim(),ne=P.trim(),te=!0,le=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(te=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,C,I);else{let ue=i0(r,C,"vertex"),he=i0(r,I,"fragment");ft("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+k+`
`+ue+`
`+he)}else k!==""?at("WebGLProgram: Program Info Log:",k):(Y===""||ne==="")&&(le=!1);le&&(H.diagnostics={runnable:te,programLog:k,vertexShader:{log:Y,prefix:g},fragmentShader:{log:ne,prefix:m}})}r.deleteShader(C),r.deleteShader(I),M=new ua(r,y),T=qy(r,y)}let M;this.getUniforms=function(){return M===void 0&&L(this),M};let T;this.getAttributes=function(){return T===void 0&&L(this),T};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(y,Oy)),D},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Uy++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=I,this}var oM=0,jh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new $h(e),t.set(e,n)),n}},$h=class{constructor(e){this.id=oM++,this.code=e,this.usedTimes=0}};function lM(i){return i===Dr||i===_o||i===yo}function cM(i,e,t,n,r,s){let a=new ka,o=new jh,c=new Set,u=[],l=new Map,h=n.logarithmicDepthBuffer,f=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function y(M,T,D,H,_,w){let P=H.fog,k=_.geometry,Y=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?H.environment:null,ne=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,te=e.get(M.envMap||Y,ne),le=te&&te.mapping===po?te.image.height:null,ue=p[M.type];M.precision!==null&&(f=n.getMaxPrecision(M.precision),f!==M.precision&&at("WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let he=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,De=he!==void 0?he.length:0,Ue=0;k.morphAttributes.position!==void 0&&(Ue=1),k.morphAttributes.normal!==void 0&&(Ue=2),k.morphAttributes.color!==void 0&&(Ue=3);let dt,je,it,de;if(ue){let kt=qi[ue];dt=kt.vertexShader,je=kt.fragmentShader}else{dt=M.vertexShader,je=M.fragmentShader;let kt=o.getVertexShaderStage(M),Nt=o.getFragmentShaderStage(M);o.update(M,kt,Nt),it=kt.id,de=Nt.id}let me=i.getRenderTarget(),Ee=i.state.buffers.depth.getReversed(),rt=_.isInstancedMesh===!0,Be=_.isBatchedMesh===!0,nt=!!M.map,V=!!M.matcap,Z=!!te,pe=!!M.aoMap,xe=!!M.lightMap,se=!!M.bumpMap&&M.wireframe===!1,ie=!!M.normalMap,$=!!M.displacementMap,ge=!!M.emissiveMap,Ce=!!M.metalnessMap,We=!!M.roughnessMap,z=M.anisotropy>0,ct=M.clearcoat>0,Xe=M.dispersion>0,F=M.retroreflectivity>0,E=M.iridescence>0,N=M.sheen>0,O=M.transmission>0,U=z&&!!M.anisotropyMap,G=ct&&!!M.clearcoatMap,Q=ct&&!!M.clearcoatNormalMap,q=ct&&!!M.clearcoatRoughnessMap,j=E&&!!M.iridescenceMap,fe=E&&!!M.iridescenceThicknessMap,Te=N&&!!M.sheenColorMap,ye=N&&!!M.sheenRoughnessMap,be=!!M.specularMap,Ie=!!M.specularColorMap,Ye=!!M.specularIntensityMap,et=O&&!!M.transmissionMap,X=O&&!!M.thicknessMap,we=!!M.gradientMap,ve=!!M.alphaMap,He=M.alphaTest>0,ze=!!M.alphaHash,Me=!!M.extensions,st=wi;M.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(st=i.toneMapping);let tt={shaderID:ue,shaderType:M.type,shaderName:M.name,vertexShader:dt,fragmentShader:je,defines:M.defines,customVertexShaderID:it,customFragmentShaderID:de,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Be,batchingColor:Be&&_._colorsTexture!==null,instancing:rt,instancingColor:rt&&_.instanceColor!==null,instancingMorph:rt&&_.morphTexture!==null,outputColorSpace:me===null?i.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:yt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:nt,matcap:V,envMap:Z,envMapMode:Z&&te.mapping,envMapCubeUVHeight:le,aoMap:pe,lightMap:xe,bumpMap:se,normalMap:ie,displacementMap:$,emissiveMap:ge,normalMapObjectSpace:ie&&M.normalMapType===Ip,normalMapTangentSpace:ie&&M.normalMapType===So,packedNormalMap:ie&&M.normalMapType===So&&lM(M.normalMap.format),metalnessMap:Ce,roughnessMap:We,anisotropy:z,anisotropyMap:U,clearcoat:ct,clearcoatMap:G,clearcoatNormalMap:Q,clearcoatRoughnessMap:q,dispersion:Xe,retroreflection:F,iridescence:E,iridescenceMap:j,iridescenceThicknessMap:fe,sheen:N,sheenColorMap:Te,sheenRoughnessMap:ye,specularMap:be,specularColorMap:Ie,specularIntensityMap:Ye,transmission:O,transmissionMap:et,thicknessMap:X,gradientMap:we,opaque:M.transparent===!1&&M.blending===na&&M.alphaToCoverage===!1,alphaMap:ve,alphaTest:He,alphaHash:ze,combine:M.combine,mapUv:nt&&v(M.map.channel),aoMapUv:pe&&v(M.aoMap.channel),lightMapUv:xe&&v(M.lightMap.channel),bumpMapUv:se&&v(M.bumpMap.channel),normalMapUv:ie&&v(M.normalMap.channel),displacementMapUv:$&&v(M.displacementMap.channel),emissiveMapUv:ge&&v(M.emissiveMap.channel),metalnessMapUv:Ce&&v(M.metalnessMap.channel),roughnessMapUv:We&&v(M.roughnessMap.channel),anisotropyMapUv:U&&v(M.anisotropyMap.channel),clearcoatMapUv:G&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Q&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:ye&&v(M.sheenRoughnessMap.channel),specularMapUv:be&&v(M.specularMap.channel),specularColorMapUv:Ie&&v(M.specularColorMap.channel),specularIntensityMapUv:Ye&&v(M.specularIntensityMap.channel),transmissionMapUv:et&&v(M.transmissionMap.channel),thicknessMapUv:X&&v(M.thicknessMap.channel),alphaMapUv:ve&&v(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ie||z),vertexNormals:!!k.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:_.isPoints===!0&&!!k.attributes.uv&&(nt||ve),fog:!!P,useFog:M.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||k.attributes.normal===void 0&&ie===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ee,skinning:_.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:Ue,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:w.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:st,decodeVideoTexture:nt&&M.map.isVideoTexture===!0&&yt.getTransfer(M.map.colorSpace)===Dt,decodeVideoTextureEmissive:ge&&M.emissiveMap.isVideoTexture===!0&&yt.getTransfer(M.emissiveMap.colorSpace)===Dt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Sn,flipSided:M.side===Mn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Me&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&M.extensions.multiDraw===!0||Be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return tt.vertexUv1s=c.has(1),tt.vertexUv2s=c.has(2),tt.vertexUv3s=c.has(3),c.clear(),tt}function g(M){let T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(let D in M.defines)T.push(D),T.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(m(T,M),x(T,M),T.push(i.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function m(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numSunLights),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numSunLightShadows),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function x(M,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function A(M){let T=p[M.type],D;if(T){let H=qi[T];D=fr.clone(H.uniforms)}else D=M.uniforms;return D}function S(M,T){let D=l.get(T);return D!==void 0?++D.usedTimes:(D=new aM(i,T,M,r),u.push(D),l.set(T,D)),D}function C(M){if(--M.usedTimes===0){let T=u.indexOf(M);u[T]=u[u.length-1],u.pop(),l.delete(M.cacheKey),M.destroy()}}function I(M){o.remove(M)}function L(){o.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:A,acquireProgram:S,releaseProgram:C,releaseShaderCache:I,programs:u,dispose:L}}function uM(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function hM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function l0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function c0(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,v,y,g,m){let x=i[e];return x===void 0?(x={id:f.id,object:f,geometry:p,material:v,materialVariant:a(f),groupOrder:y,renderOrder:f.renderOrder,z:g,group:m},i[e]=x):(x.id=f.id,x.object=f,x.geometry=p,x.material=v,x.materialVariant=a(f),x.groupOrder=y,x.renderOrder=f.renderOrder,x.z=g,x.group=m),e++,x}function c(f,p,v,y,g,m,x){x.reversedDepth===!0&&(g=-g);let A=o(f,p,v,y,g,m);v.transmission>0?n.push(A):v.transparent===!0?r.push(A):t.push(A)}function u(f,p,v,y,g,m){let x=o(f,p,v,y,g,m);v.transmission>0?n.unshift(x):v.transparent===!0?r.unshift(x):t.unshift(x)}function l(f,p){t.length>1&&t.sort(f||hM),n.length>1&&n.sort(p||l0),r.length>1&&r.sort(p||l0)}function h(){for(let f=e,p=i.length;f<p;f++){let v=i[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:u,finish:h,sort:l}}function fM(){let i=new WeakMap;function e(n,r){let s=i.get(n),a;return s===void 0?(a=new c0,i.set(n,[a])):r>=s.length?(a=new c0,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function dM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new K,color:new $e};break;case"SpotLight":t={position:new K,direction:new K,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new K,halfWidth:new K,halfHeight:new K};break}return i[e.id]=t,t}}}function pM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var mM=0;function gM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function vM(i){let e=new dM,t=pM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new K);let r=new K,s=new xt,a=new xt;function o(u){let l=0,h=0,f=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let p=0,v=0,y=0,g=0,m=0,x=0,A=0,S=0,C=0,I=0,L=0,M=0,T=0,D=0;u.sort(gM);for(let _=0,w=u.length;_<w;_++){let P=u[_],k=P.color,Y=P.intensity,ne=P.distance,te=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Dr?te=P.shadow.map.texture:te=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)l+=k.r*Y,h+=k.g*Y,f+=k.b*Y;else if(P.isLightProbe){for(let le=0;le<9;le++)n.probe[le].addScaledVector(P.sh.coefficients[le],Y);D++}else if(P.isSunLight){let le=e.get(P);if(le.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ue=P.shadow,he=t.get(P);he.shadowIntensity=ue.intensity,he.shadowBias=ue.bias,he.shadowNormalBias=ue.normalBias,he.shadowRadius=ue.radius,he.shadowMapSize.copy(ue.mapSize).multiply(ue.getFrameExtents()),n.sunShadow[v]=he,n.sunShadowMap[v]=te;let De=ue.getViewportCount();for(let Ue=0;Ue<De;Ue++)n.sunShadowMatrix[y+Ue]=ue.getMatrix(Ue),n.sunShadowCascade[y+Ue]=ue._cascadeData[Ue];y+=De,v++}n.sun[p]=le,p++}else if(P.isDirectionalLight){let le=e.get(P);if(le.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ue=P.shadow,he=t.get(P);he.shadowIntensity=ue.intensity,he.shadowBias=ue.bias,he.shadowNormalBias=ue.normalBias,he.shadowRadius=ue.radius,he.shadowMapSize=ue.mapSize,n.directionalShadow[g]=he,n.directionalShadowMap[g]=te,n.directionalShadowMatrix[g]=P.shadow.matrix,C++}n.directional[g]=le,g++}else if(P.isSpotLight){let le=e.get(P);le.position.setFromMatrixPosition(P.matrixWorld),le.color.copy(k).multiplyScalar(Y),le.distance=ne,le.coneCos=Math.cos(P.angle),le.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),le.decay=P.decay,n.spot[x]=le;let ue=P.shadow;if(P.map&&(n.spotLightMap[M]=P.map,M++,ue.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[x]=ue.matrix,P.castShadow){let he=t.get(P);he.shadowIntensity=ue.intensity,he.shadowBias=ue.bias,he.shadowNormalBias=ue.normalBias,he.shadowRadius=ue.radius,he.shadowMapSize=ue.mapSize,n.spotShadow[x]=he,n.spotShadowMap[x]=te,L++}x++}else if(P.isRectAreaLight){let le=e.get(P);le.color.copy(k).multiplyScalar(Y),le.halfWidth.set(P.width*.5,0,0),le.halfHeight.set(0,P.height*.5,0),n.rectArea[A]=le,A++}else if(P.isPointLight){let le=e.get(P);if(le.color.copy(P.color).multiplyScalar(P.intensity),le.distance=P.distance,le.decay=P.decay,P.castShadow){let ue=P.shadow,he=t.get(P);he.shadowIntensity=ue.intensity,he.shadowBias=ue.bias,he.shadowNormalBias=ue.normalBias,he.shadowRadius=ue.radius,he.shadowMapSize=ue.mapSize,he.shadowCameraNear=ue.camera.near,he.shadowCameraFar=ue.camera.far,n.pointShadow[m]=he,n.pointShadowMap[m]=te,n.pointShadowMatrix[m]=P.shadow.matrix,I++}n.point[m]=le,m++}else if(P.isHemisphereLight){let le=e.get(P);le.skyColor.copy(P.color).multiplyScalar(Y),le.groundColor.copy(P.groundColor).multiplyScalar(Y),n.hemi[S]=le,S++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ke.LTC_FLOAT_1,n.rectAreaLTC2=ke.LTC_FLOAT_2):(n.rectAreaLTC1=ke.LTC_HALF_1,n.rectAreaLTC2=ke.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=h,n.ambient[2]=f;let H=n.hash;(H.sunLength!==p||H.directionalLength!==g||H.pointLength!==m||H.spotLength!==x||H.rectAreaLength!==A||H.hemiLength!==S||H.numSunShadows!==v||H.numDirectionalShadows!==C||H.numPointShadows!==I||H.numSpotShadows!==L||H.numSpotMaps!==M||H.numLightProbes!==D)&&(n.sun.length=p,n.directional.length=g,n.spot.length=x,n.rectArea.length=A,n.point.length=m,n.hemi.length=S,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=I,n.pointShadowMap.length=I,n.pointShadowMatrix.length=I,n.spotShadow.length=L,n.spotShadowMap.length=L,n.spotLightMatrix.length=L+M-T,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=D,H.sunLength=p,H.directionalLength=g,H.pointLength=m,H.spotLength=x,H.rectAreaLength=A,H.hemiLength=S,H.numSunShadows=v,H.numDirectionalShadows=C,H.numPointShadows=I,H.numSpotShadows=L,H.numSpotMaps=M,H.numLightProbes=D,n.version=mM++)}function c(u,l){let h=0,f=0,p=0,v=0,y=0,g=0,m=l.matrixWorldInverse;for(let x=0,A=u.length;x<A;x++){let S=u[x];if(S.isSunLight){let C=n.sun[h];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(m),h++}else if(S.isDirectionalLight){let C=n.directional[f];C.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(m),f++}else if(S.isSpotLight){let C=n.spot[v];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(m),C.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(m),v++}else if(S.isRectAreaLight){let C=n.rectArea[y];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(m),a.identity(),s.copy(S.matrixWorld),s.premultiply(m),a.extractRotation(s),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),y++}else if(S.isPointLight){let C=n.point[p];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(m),p++}else if(S.isHemisphereLight){let C=n.hemi[g];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function u0(i){let e=new vM(i),t=[],n=[],r=[];function s(f){h.camera=f,t.length=0,n.length=0,r.length=0}function a(f){t.push(f)}function o(f){n.push(f)}function c(f){r.push(f)}function u(){e.setup(t)}function l(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:u,setupLightsView:l,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function xM(i){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new u0(i),e.set(r,[o])):s>=a.length?(o=new u0(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var _M=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yM=`uniform sampler2D shadow_pass;
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
}`,MM=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],SM=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],h0=new xt,bo=new K,qh=new K;function TM(i,e,t){let n=new Ys,r=new ot,s=new ot,a=new Ft,o=new Ul,c=new Hl,u={},l=t.maxTextureSize,h={[Gi]:Mn,[Mn]:Gi,[Sn]:Sn},f=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:_M,fragmentShader:yM}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let v=new Yt;v.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Fe(v,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ao;let m=this.type;this.render=function(I,L,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||I.length===0)return;this.type===sp&&(at("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ao);let T=i.getRenderTarget(),D=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),_=i.state;_.setBlending(ci),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let w=m!==this.type;w&&L.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(k=>k.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,k=I.length;P<k;P++){let Y=I[P],ne=Y.shadow;if(ne===void 0){at("WebGLShadowMap:",Y,"has no shadow.");continue}if(ne.autoUpdate===!1&&ne.needsUpdate===!1)continue;r.copy(ne.mapSize);let te=ne.getFrameExtents();r.multiply(te),s.copy(ne.mapSize),(r.x>l||r.y>l)&&(r.x>l&&(s.x=Math.floor(l/te.x),r.x=s.x*te.x,ne.mapSize.x=s.x),r.y>l&&(s.y=Math.floor(l/te.y),r.y=s.y*te.y,ne.mapSize.y=s.y));let le=i.state.buffers.depth.getReversed();if(ne.camera._reversedDepth=le,ne.map===null||w===!0){if(ne.map!==null&&(ne.map.depthTexture!==null&&(ne.map.depthTexture.dispose(),ne.map.depthTexture=null),ne.map.dispose()),this.type===ta){if(Y.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ne.map=new pn(r.x,r.y,{format:Dr,type:Tn,minFilter:an,magFilter:an,generateMipmaps:!1}),ne.map.texture.name=Y.name+".shadowMap",ne.map.depthTexture=new Rr(r.x,r.y,jn),ne.map.depthTexture.name=Y.name+".shadowMapDepth",ne.map.depthTexture.format=Ui,ne.map.depthTexture.compareFunction=null,ne.map.depthTexture.minFilter=qt,ne.map.depthTexture.magFilter=qt}else Y.isPointLight?(ne.map=new Vc(r.x),ne.map.depthTexture=new Dl(r.x,Ri)):(ne.map=new pn(r.x,r.y),ne.map.depthTexture=new Rr(r.x,r.y,Ri)),ne.map.depthTexture.name=Y.name+".shadowMap",ne.map.depthTexture.format=Ui,this.type===ao?(ne.map.depthTexture.compareFunction=le?kc:Bc,ne.map.depthTexture.minFilter=an,ne.map.depthTexture.magFilter=an):(ne.map.depthTexture.compareFunction=null,ne.map.depthTexture.minFilter=qt,ne.map.depthTexture.magFilter=qt);ne.camera.updateProjectionMatrix()}ne.map.isWebGLCubeRenderTarget!==!0&&(ne.map.width!==r.x||ne.map.height!==r.y)&&ne.map.setSize(r.x,r.y);let ue=ne.map.isWebGLCubeRenderTarget?6:ne.getViewportCount();Y.isPointLight!==!0&&ne.updateMatrices(Y,M);for(let he=0;he<ue;he++){let De=ne.getCamera(he);if(Y.isPointLight){let Ue=ne.camera,dt=ne.matrix,je=Y.distance||Ue.far;je!==Ue.far&&(Ue.far=je,Ue.updateProjectionMatrix()),bo.setFromMatrixPosition(Y.matrixWorld),Ue.position.copy(bo),qh.copy(Ue.position),qh.add(MM[he]),Ue.up.copy(SM[he]),Ue.lookAt(qh),Ue.updateMatrixWorld(),dt.makeTranslation(-bo.x,-bo.y,-bo.z),h0.multiplyMatrices(Ue.projectionMatrix,Ue.matrixWorldInverse),ne._frustum.setFromProjectionMatrix(h0,Ue.coordinateSystem,Ue.reversedDepth)}if(ne.map.isWebGLCubeRenderTarget)i.setRenderTarget(ne.map,he),i.clear();else{he===0&&(i.setRenderTarget(ne.map),i.clear());let Ue=ne.getViewport(he);a.set(s.x*Ue.x,s.y*Ue.y,s.x*Ue.z,s.y*Ue.w),_.viewport(a)}n=ne.getFrustum(he),S(L,M,De,Y,this.type)}ne.isPointLightShadow!==!0&&this.type===ta&&x(ne,M),ne.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(T,D,H)};function x(I,L){let M=e.update(y);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),I.mapPass===null?I.mapPass=new pn(r.x,r.y,{format:Dr,type:Tn}):(I.mapPass.width!==I.map.width||I.mapPass.height!==I.map.height)&&I.mapPass.setSize(I.map.width,I.map.height),f.uniforms.shadow_pass.value=I.map.depthTexture,f.uniforms.resolution.value.set(I.map.width,I.map.height),f.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(L,null,M,f,y,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value.set(I.map.width,I.map.height),p.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(L,null,M,p,y,null)}function A(I,L,M,T){let D=null,H=M.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(H!==void 0)D=H;else if(D=M.isPointLight===!0?c:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let _=D.uuid,w=L.uuid,P=u[_];P===void 0&&(P={},u[_]=P);let k=P[w];k===void 0&&(k=D.clone(),P[w]=k,L.addEventListener("dispose",C)),D=k}if(D.visible=L.visible,D.wireframe=L.wireframe,T===ta?D.side=L.shadowSide!==null?L.shadowSide:L.side:D.side=L.shadowSide!==null?L.shadowSide:h[L.side],D.alphaMap=L.alphaMap,D.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,D.map=L.map,D.clipShadows=L.clipShadows,D.clippingPlanes=L.clippingPlanes,D.clipIntersection=L.clipIntersection,D.displacementMap=L.displacementMap,D.displacementScale=L.displacementScale,D.displacementBias=L.displacementBias,D.wireframeLinewidth=L.wireframeLinewidth,D.linewidth=L.linewidth,M.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let _=i.properties.get(D);_.light=M}return D}function S(I,L,M,T,D){if(I.visible===!1)return;if(I.layers.test(L.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&D===ta)&&(!I.frustumCulled||I.intersectsFrustum(n))){I.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,I.matrixWorld);let w=e.update(I),P=I.material;if(Array.isArray(P)){let k=w.groups;for(let Y=0,ne=k.length;Y<ne;Y++){let te=k[Y],le=P[te.materialIndex];if(le&&le.visible){let ue=A(I,le,T,D);I.onBeforeShadow(i,I,L,M,w,ue,te),i.renderBufferDirect(M,null,w,ue,I,te),I.onAfterShadow(i,I,L,M,w,ue,te)}}}else if(P.visible){let k=A(I,P,T,D);I.onBeforeShadow(i,I,L,M,w,k,null),i.renderBufferDirect(M,null,w,k,I,null),I.onAfterShadow(i,I,L,M,w,k,null)}}let _=I.children;for(let w=0,P=_.length;w<P;w++)S(_[w],L,M,T,D)}function C(I){I.target.removeEventListener("dispose",C);for(let M in u){let T=u[M],D=I.target.uuid;D in T&&(T[D].dispose(),delete T[D])}}}function bM(i,e){function t(){let X=!1,we=new Ft,ve=null,He=new Ft(0,0,0,0);return{setMask:function(ze){ve!==ze&&!X&&(i.colorMask(ze,ze,ze,ze),ve=ze)},setLocked:function(ze){X=ze},setClear:function(ze,Me,st,tt,kt){kt===!0&&(ze*=tt,Me*=tt,st*=tt),we.set(ze,Me,st,tt),He.equals(we)===!1&&(i.clearColor(ze,Me,st,tt),He.copy(we))},reset:function(){X=!1,ve=null,He.set(-1,0,0,0)}}}function n(){let X=!1,we=!1,ve=null,He=null,ze=null;return{setReversed:function(Me){if(we!==Me){let st=e.get("EXT_clip_control");Me?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT),we=Me;let tt=ze;ze=null,this.setClear(tt)}},getReversed:function(){return we},setTest:function(Me){Me?me(i.DEPTH_TEST):Ee(i.DEPTH_TEST)},setMask:function(Me){ve!==Me&&!X&&(i.depthMask(Me),ve=Me)},setFunc:function(Me){if(we&&(Me=zp[Me]),He!==Me){switch(Me){case Sl:i.depthFunc(i.NEVER);break;case Tl:i.depthFunc(i.ALWAYS);break;case bl:i.depthFunc(i.LESS);break;case Hs:i.depthFunc(i.LEQUAL);break;case El:i.depthFunc(i.EQUAL);break;case wl:i.depthFunc(i.GEQUAL);break;case Al:i.depthFunc(i.GREATER);break;case Rl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}He=Me}},setLocked:function(Me){X=Me},setClear:function(Me){ze!==Me&&(ze=Me,we&&(Me=1-Me),i.clearDepth(Me))},reset:function(){X=!1,ve=null,He=null,ze=null,we=!1}}}function r(){let X=!1,we=null,ve=null,He=null,ze=null,Me=null,st=null,tt=null,kt=null;return{setTest:function(Nt){X||(Nt?me(i.STENCIL_TEST):Ee(i.STENCIL_TEST))},setMask:function(Nt){we!==Nt&&!X&&(i.stencilMask(Nt),we=Nt)},setFunc:function(Nt,qn,ii){(ve!==Nt||He!==qn||ze!==ii)&&(i.stencilFunc(Nt,qn,ii),ve=Nt,He=qn,ze=ii)},setOp:function(Nt,qn,ii){(Me!==Nt||st!==qn||tt!==ii)&&(i.stencilOp(Nt,qn,ii),Me=Nt,st=qn,tt=ii)},setLocked:function(Nt){X=Nt},setClear:function(Nt){kt!==Nt&&(i.clearStencil(Nt),kt=Nt)},reset:function(){X=!1,we=null,ve=null,He=null,ze=null,Me=null,st=null,tt=null,kt=null}}}let s=new t,a=new n,o=new r,c=new WeakMap,u=new WeakMap,l={},h={},f={},p=new WeakMap,v=[],y=null,g=!1,m=null,x=null,A=null,S=null,C=null,I=null,L=null,M=new $e(0,0,0),T=0,D=!1,H=null,_=null,w=null,P=null,k=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ne=!1,te=0,le=i.getParameter(i.VERSION);le.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(le)[1]),ne=te>=1):le.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),ne=te>=2);let ue=null,he={},De=i.getParameter(i.SCISSOR_BOX),Ue=i.getParameter(i.VIEWPORT),dt=new Ft().fromArray(De),je=new Ft().fromArray(Ue);function it(X,we,ve,He){let ze=new Uint8Array(4),Me=i.createTexture();i.bindTexture(X,Me),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let st=0;st<ve;st++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(we,0,i.RGBA,1,1,He,0,i.RGBA,i.UNSIGNED_BYTE,ze):i.texImage2D(we+st,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ze);return Me}let de={};de[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),de[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),de[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),me(i.DEPTH_TEST),a.setFunc(Hs),se(!1),ie(ph),me(i.CULL_FACE),pe(ci);function me(X){l[X]!==!0&&(i.enable(X),l[X]=!0)}function Ee(X){l[X]!==!1&&(i.disable(X),l[X]=!1)}function rt(X,we){return f[X]!==we?(i.bindFramebuffer(X,we),f[X]=we,X===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=we),X===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=we),!0):!1}function Be(X,we){let ve=v,He=!1;if(X){ve=p.get(we),ve===void 0&&(ve=[],p.set(we,ve));let ze=X.textures;if(ve.length!==ze.length||ve[0]!==i.COLOR_ATTACHMENT0){for(let Me=0,st=ze.length;Me<st;Me++)ve[Me]=i.COLOR_ATTACHMENT0+Me;ve.length=ze.length,He=!0}}else ve[0]!==i.BACK&&(ve[0]=i.BACK,He=!0);He&&i.drawBuffers(ve)}function nt(X){return y!==X?(i.useProgram(X),y=X,!0):!1}let V={[os]:i.FUNC_ADD,[op]:i.FUNC_SUBTRACT,[lp]:i.FUNC_REVERSE_SUBTRACT};V[cp]=i.MIN,V[up]=i.MAX;let Z={[hp]:i.ZERO,[fp]:i.ONE,[dp]:i.SRC_COLOR,[vh]:i.SRC_ALPHA,[_p]:i.SRC_ALPHA_SATURATE,[vp]:i.DST_COLOR,[mp]:i.DST_ALPHA,[pp]:i.ONE_MINUS_SRC_COLOR,[xh]:i.ONE_MINUS_SRC_ALPHA,[xp]:i.ONE_MINUS_DST_COLOR,[gp]:i.ONE_MINUS_DST_ALPHA,[yp]:i.CONSTANT_COLOR,[Mp]:i.ONE_MINUS_CONSTANT_COLOR,[Sp]:i.CONSTANT_ALPHA,[Tp]:i.ONE_MINUS_CONSTANT_ALPHA};function pe(X,we,ve,He,ze,Me,st,tt,kt,Nt){if(X===ci){g===!0&&(Ee(i.BLEND),g=!1);return}if(g===!1&&(me(i.BLEND),g=!0),X!==ap){if(X!==m||Nt!==D){if((x!==os||C!==os)&&(i.blendEquation(i.FUNC_ADD),x=os,C=os),Nt)switch(X){case na:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vi:i.blendFunc(i.ONE,i.ONE);break;case mh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ft("WebGLState: Invalid blending: ",X);break}else switch(X){case na:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case mh:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gh:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",X);break}A=null,S=null,I=null,L=null,M.set(0,0,0),T=0,m=X,D=Nt}return}ze=ze||we,Me=Me||ve,st=st||He,(we!==x||ze!==C)&&(i.blendEquationSeparate(V[we],V[ze]),x=we,C=ze),(ve!==A||He!==S||Me!==I||st!==L)&&(i.blendFuncSeparate(Z[ve],Z[He],Z[Me],Z[st]),A=ve,S=He,I=Me,L=st),(tt.equals(M)===!1||kt!==T)&&(i.blendColor(tt.r,tt.g,tt.b,kt),M.copy(tt),T=kt),m=X,D=!1}function xe(X,we){X.side===Sn?Ee(i.CULL_FACE):me(i.CULL_FACE);let ve=X.side===Mn;we&&(ve=!ve),se(ve),X.blending===na&&X.transparent===!1?pe(ci):pe(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),a.setFunc(X.depthFunc),a.setTest(X.depthTest),a.setMask(X.depthWrite),s.setMask(X.colorWrite);let He=X.stencilWrite;o.setTest(He),He&&(o.setMask(X.stencilWriteMask),o.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),o.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),ge(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?me(i.SAMPLE_ALPHA_TO_COVERAGE):Ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function se(X){H!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),H=X)}function ie(X){X!==ip?(me(i.CULL_FACE),X!==_&&(X===ph?i.cullFace(i.BACK):X===rp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ee(i.CULL_FACE),_=X}function $(X){X!==w&&(ne&&i.lineWidth(X),w=X)}function ge(X,we,ve){X?(me(i.POLYGON_OFFSET_FILL),(P!==we||k!==ve)&&(P=we,k=ve,a.getReversed()&&(we=-we),i.polygonOffset(we,ve))):Ee(i.POLYGON_OFFSET_FILL)}function Ce(X){X?me(i.SCISSOR_TEST):Ee(i.SCISSOR_TEST)}function We(X){X===void 0&&(X=i.TEXTURE0+Y-1),ue!==X&&(i.activeTexture(X),ue=X)}function z(X,we,ve){ve===void 0&&(ue===null?ve=i.TEXTURE0+Y-1:ve=ue);let He=he[ve];He===void 0&&(He={type:void 0,texture:void 0},he[ve]=He),(He.type!==X||He.texture!==we)&&(ue!==ve&&(i.activeTexture(ve),ue=ve),i.bindTexture(X,we||de[X]),He.type=X,He.texture=we)}function ct(){let X=he[ue];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Xe(){try{i.compressedTexImage2D(...arguments)}catch(X){ft("WebGLState:",X)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(X){ft("WebGLState:",X)}}function E(){try{i.texSubImage2D(...arguments)}catch(X){ft("WebGLState:",X)}}function N(){try{i.texSubImage3D(...arguments)}catch(X){ft("WebGLState:",X)}}function O(){try{i.compressedTexSubImage2D(...arguments)}catch(X){ft("WebGLState:",X)}}function U(){try{i.compressedTexSubImage3D(...arguments)}catch(X){ft("WebGLState:",X)}}function G(){try{i.texStorage2D(...arguments)}catch(X){ft("WebGLState:",X)}}function Q(){try{i.texStorage3D(...arguments)}catch(X){ft("WebGLState:",X)}}function q(){try{i.texImage2D(...arguments)}catch(X){ft("WebGLState:",X)}}function j(){try{i.texImage3D(...arguments)}catch(X){ft("WebGLState:",X)}}function fe(X){return h[X]!==void 0?h[X]:i.getParameter(X)}function Te(X,we){h[X]!==we&&(i.pixelStorei(X,we),h[X]=we)}function ye(X){dt.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),dt.copy(X))}function be(X){je.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),je.copy(X))}function Ie(X,we){let ve=u.get(we);ve===void 0&&(ve=new WeakMap,u.set(we,ve));let He=ve.get(X);He===void 0&&(He=i.getUniformBlockIndex(we,X.name),ve.set(X,He))}function Ye(X,we){let He=u.get(we).get(X);c.get(we)!==He&&(i.uniformBlockBinding(we,He,X.__bindingPointIndex),c.set(we,He))}function et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),l={},h={},ue=null,he={},f={},p=new WeakMap,v=[],y=null,g=!1,m=null,x=null,A=null,S=null,C=null,I=null,L=null,M=new $e(0,0,0),T=0,D=!1,H=null,_=null,w=null,P=null,k=null,dt.set(0,0,i.canvas.width,i.canvas.height),je.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:me,disable:Ee,bindFramebuffer:rt,drawBuffers:Be,useProgram:nt,setBlending:pe,setMaterial:xe,setFlipSided:se,setCullFace:ie,setLineWidth:$,setPolygonOffset:ge,setScissorTest:Ce,activeTexture:We,bindTexture:z,unbindTexture:ct,compressedTexImage2D:Xe,compressedTexImage3D:F,texImage2D:q,texImage3D:j,pixelStorei:Te,getParameter:fe,updateUBOMapping:Ie,uniformBlockBinding:Ye,texStorage2D:G,texStorage3D:Q,texSubImage2D:E,texSubImage3D:N,compressedTexSubImage2D:O,compressedTexSubImage3D:U,scissor:ye,viewport:be,reset:et}}function EM(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ot,l=new WeakMap,h=new Set,f,p=new WeakMap,v=!1;try{v=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(F,E){return v?new OffscreenCanvas(F,E):ks("canvas")}function g(F,E,N){let O=1,U=Xe(F);if((U.width>N||U.height>N)&&(O=N/Math.max(U.width,U.height)),O<1)if(typeof HTMLImageElement!="undefined"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&F instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&F instanceof ImageBitmap||typeof VideoFrame!="undefined"&&F instanceof VideoFrame){let G=Math.floor(O*U.width),Q=Math.floor(O*U.height);f===void 0&&(f=y(G,Q));let q=E?y(G,Q):f;return q.width=G,q.height=Q,q.getContext("2d").drawImage(F,0,0,G,Q),at("WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+G+"x"+Q+")."),q}else return"data"in F&&at("WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),F;return F}function m(F){return F.generateMipmaps}function x(F){i.generateMipmap(F)}function A(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(F,E,N,O,U,G=!1){if(F!==null){if(i[F]!==void 0)return i[F];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Q;O&&(Q=e.get("EXT_texture_norm16"),Q||at("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=E;if(E===i.RED&&(N===i.FLOAT&&(q=i.R32F),N===i.HALF_FLOAT&&(q=i.R16F),N===i.UNSIGNED_BYTE&&(q=i.R8),N===i.UNSIGNED_SHORT&&Q&&(q=Q.R16_EXT),N===i.SHORT&&Q&&(q=Q.R16_SNORM_EXT)),E===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(q=i.R8UI),N===i.UNSIGNED_SHORT&&(q=i.R16UI),N===i.UNSIGNED_INT&&(q=i.R32UI),N===i.BYTE&&(q=i.R8I),N===i.SHORT&&(q=i.R16I),N===i.INT&&(q=i.R32I)),E===i.RG&&(N===i.FLOAT&&(q=i.RG32F),N===i.HALF_FLOAT&&(q=i.RG16F),N===i.UNSIGNED_BYTE&&(q=i.RG8),N===i.UNSIGNED_SHORT&&Q&&(q=Q.RG16_EXT),N===i.SHORT&&Q&&(q=Q.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(q=i.RG8UI),N===i.UNSIGNED_SHORT&&(q=i.RG16UI),N===i.UNSIGNED_INT&&(q=i.RG32UI),N===i.BYTE&&(q=i.RG8I),N===i.SHORT&&(q=i.RG16I),N===i.INT&&(q=i.RG32I)),E===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(q=i.RGB8UI),N===i.UNSIGNED_SHORT&&(q=i.RGB16UI),N===i.UNSIGNED_INT&&(q=i.RGB32UI),N===i.BYTE&&(q=i.RGB8I),N===i.SHORT&&(q=i.RGB16I),N===i.INT&&(q=i.RGB32I)),E===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),N===i.UNSIGNED_INT&&(q=i.RGBA32UI),N===i.BYTE&&(q=i.RGBA8I),N===i.SHORT&&(q=i.RGBA16I),N===i.INT&&(q=i.RGBA32I)),E===i.RGB&&(N===i.UNSIGNED_SHORT&&Q&&(q=Q.RGB16_EXT),N===i.SHORT&&Q&&(q=Q.RGB16_SNORM_EXT),N===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),E===i.RGBA){let j=G?Ha:yt.getTransfer(U);N===i.FLOAT&&(q=i.RGBA32F),N===i.HALF_FLOAT&&(q=i.RGBA16F),N===i.UNSIGNED_BYTE&&(q=j===Dt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT&&Q&&(q=Q.RGBA16_EXT),N===i.SHORT&&Q&&(q=Q.RGBA16_SNORM_EXT),N===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function C(F,E){let N;return F?E===null||E===Ri||E===sa?N=i.DEPTH24_STENCIL8:E===jn?N=i.DEPTH32F_STENCIL8:E===ra&&(N=i.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ri||E===sa?N=i.DEPTH_COMPONENT24:E===jn?N=i.DEPTH_COMPONENT32F:E===ra&&(N=i.DEPTH_COMPONENT16),N}function I(F,E){return m(F)===!0||F.isFramebufferTexture&&F.minFilter!==qt&&F.minFilter!==an?Math.log2(Math.max(E.width,E.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?E.mipmaps.length:1}function L(F){let E=F.target;E.removeEventListener("dispose",L),T(E),E.isVideoTexture&&l.delete(E),E.isHTMLTexture&&h.delete(E)}function M(F){let E=F.target;E.removeEventListener("dispose",M),H(E)}function T(F){let E=n.get(F);if(E.__webglInit===void 0)return;let N=F.source,O=p.get(N);if(O){let U=O[E.__cacheKey];U.usedTimes--,U.usedTimes===0&&D(F),Object.keys(O).length===0&&p.delete(N)}n.remove(F)}function D(F){let E=n.get(F);i.deleteTexture(E.__webglTexture);let N=F.source,O=p.get(N);delete O[E.__cacheKey],a.memory.textures--}function H(F){let E=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(E.__webglFramebuffer[O]))for(let U=0;U<E.__webglFramebuffer[O].length;U++)i.deleteFramebuffer(E.__webglFramebuffer[O][U]);else i.deleteFramebuffer(E.__webglFramebuffer[O]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[O])}else{if(Array.isArray(E.__webglFramebuffer))for(let O=0;O<E.__webglFramebuffer.length;O++)i.deleteFramebuffer(E.__webglFramebuffer[O]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let O=0;O<E.__webglColorRenderbuffer.length;O++)E.__webglColorRenderbuffer[O]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[O]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let N=F.textures;for(let O=0,U=N.length;O<U;O++){let G=n.get(N[O]);G.__webglTexture&&(i.deleteTexture(G.__webglTexture),a.memory.textures--),n.remove(N[O])}n.remove(F)}let _=0;function w(){_=0}function P(){return _}function k(F){_=F}function Y(){let F=_;return F>=r.maxTextures&&at("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+r.maxTextures),_+=1,F}function ne(F){let E=[];return E.push(F.wrapS),E.push(F.wrapT),E.push(F.wrapR||0),E.push(F.magFilter),E.push(F.minFilter),E.push(F.anisotropy),E.push(F.internalFormat),E.push(F.format),E.push(F.type),E.push(F.generateMipmaps),E.push(F.premultiplyAlpha),E.push(F.flipY),E.push(F.unpackAlignment),E.push(F.colorSpace),E.join()}function te(F,E){let N=n.get(F);if(F.isVideoTexture&&z(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&N.__version!==F.version){let O=F.image;if(O===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(N,F,E);return}}else F.isExternalTexture&&(N.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+E)}function le(F,E){let N=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&N.__version!==F.version){Ee(N,F,E);return}else F.isExternalTexture&&(N.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+E)}function ue(F,E){let N=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&N.__version!==F.version){Ee(N,F,E);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+E)}function he(F,E){let N=n.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&N.__version!==F.version){rt(N,F,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+E)}let De={[oi]:i.REPEAT,[ai]:i.CLAMP_TO_EDGE,[Fs]:i.MIRRORED_REPEAT},Ue={[qt]:i.NEAREST,[$l]:i.NEAREST_MIPMAP_NEAREST,[us]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[ia]:i.LINEAR_MIPMAP_NEAREST,[Ai]:i.LINEAR_MIPMAP_LINEAR},dt={[Lp]:i.NEVER,[Hp]:i.ALWAYS,[Np]:i.LESS,[Bc]:i.LEQUAL,[Dp]:i.EQUAL,[kc]:i.GEQUAL,[Op]:i.GREATER,[Up]:i.NOTEQUAL};function je(F,E){if(E.type===jn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===an||E.magFilter===ia||E.magFilter===us||E.magFilter===Ai||E.minFilter===an||E.minFilter===ia||E.minFilter===us||E.minFilter===Ai)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,De[E.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,De[E.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,De[E.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,Ue[E.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,Ue[E.minFilter]),E.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,dt[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===qt||E.minFilter!==us&&E.minFilter!==Ai||E.type===jn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(F,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function it(F,E){let N=!1;F.__webglInit===void 0&&(F.__webglInit=!0,E.addEventListener("dispose",L));let O=E.source,U=p.get(O);U===void 0&&(U={},p.set(O,U));let G=ne(E);if(G!==F.__cacheKey){U[G]===void 0&&(U[G]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),U[G].usedTimes++;let Q=U[F.__cacheKey];Q!==void 0&&(U[F.__cacheKey].usedTimes--,Q.usedTimes===0&&D(E)),F.__cacheKey=G,F.__webglTexture=U[G].texture}return N}function de(F,E,N){return Math.floor(Math.floor(F/N)/E)}function me(F,E,N,O){let G=F.updateRanges;if(G.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,N,O,E.data);else{G.sort((Te,ye)=>Te.start-ye.start);let Q=0;for(let Te=1;Te<G.length;Te++){let ye=G[Q],be=G[Te],Ie=ye.start+ye.count,Ye=de(be.start,E.width,4),et=de(ye.start,E.width,4);be.start<=Ie+1&&Ye===et&&de(be.start+be.count-1,E.width,4)===Ye?ye.count=Math.max(ye.count,be.start+be.count-ye.start):(++Q,G[Q]=be)}G.length=Q+1;let q=t.getParameter(i.UNPACK_ROW_LENGTH),j=t.getParameter(i.UNPACK_SKIP_PIXELS),fe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let Te=0,ye=G.length;Te<ye;Te++){let be=G[Te],Ie=Math.floor(be.start/4),Ye=Math.ceil(be.count/4),et=Ie%E.width,X=Math.floor(Ie/E.width),we=Ye,ve=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,et),t.pixelStorei(i.UNPACK_SKIP_ROWS,X),t.texSubImage2D(i.TEXTURE_2D,0,et,X,we,ve,N,O,E.data)}F.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,j),t.pixelStorei(i.UNPACK_SKIP_ROWS,fe)}}function Ee(F,E,N){let O=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(O=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(O=i.TEXTURE_3D);let U=it(F,E),G=E.source;t.bindTexture(O,F.__webglTexture,i.TEXTURE0+N);let Q=n.get(G);if(G.version!==Q.__version||U===!0){if(t.activeTexture(i.TEXTURE0+N),(typeof ImageBitmap!="undefined"&&E.image instanceof ImageBitmap)===!1){let ve=yt.getPrimaries(yt.workingColorSpace),He=E.colorSpace===Qn?null:yt.getPrimaries(E.colorSpace),ze=E.colorSpace===Qn||ve===He?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let j=g(E.image,!1,r.maxTextureSize);j=ct(E,j);let fe=s.convert(E.format,E.colorSpace),Te=s.convert(E.type),ye=S(E.internalFormat,fe,Te,E.normalized,E.colorSpace,E.isVideoTexture);je(O,E);let be,Ie=E.mipmaps,Ye=E.isVideoTexture!==!0,et=Q.__version===void 0||U===!0,X=G.dataReady,we=I(E,j);if(E.isDepthTexture)ye=C(E.format===Nr,E.type),et&&(Ye?t.texStorage2D(i.TEXTURE_2D,1,ye,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,ye,j.width,j.height,0,fe,Te,null));else if(E.isDataTexture)if(Ie.length>0){Ye&&et&&t.texStorage2D(i.TEXTURE_2D,we,ye,Ie[0].width,Ie[0].height);for(let ve=0,He=Ie.length;ve<He;ve++)be=Ie[ve],Ye?X&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,be.width,be.height,fe,Te,be.data):t.texImage2D(i.TEXTURE_2D,ve,ye,be.width,be.height,0,fe,Te,be.data);E.generateMipmaps=!1}else Ye?(et&&t.texStorage2D(i.TEXTURE_2D,we,ye,j.width,j.height),X&&me(E,j,fe,Te)):t.texImage2D(i.TEXTURE_2D,0,ye,j.width,j.height,0,fe,Te,j.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ye&&et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,ye,Ie[0].width,Ie[0].height,j.depth);for(let ve=0,He=Ie.length;ve<He;ve++)if(be=Ie[ve],E.format!==$n)if(fe!==null)if(Ye){if(X)if(E.layerUpdates.size>0){let ze=Dh(be.width,be.height,E.format,E.type);for(let Me of E.layerUpdates){let st=be.data.subarray(Me*ze/be.data.BYTES_PER_ELEMENT,(Me+1)*ze/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,Me,be.width,be.height,1,fe,st)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,be.width,be.height,j.depth,fe,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ve,ye,be.width,be.height,j.depth,0,be.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?X&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,be.width,be.height,j.depth,fe,Te,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ve,ye,be.width,be.height,j.depth,0,fe,Te,be.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Ye&&et&&t.texStorage2D(i.TEXTURE_2D,we,ye,Ie[0].width,Ie[0].height);for(let ve=0,He=Ie.length;ve<He;ve++)be=Ie[ve],E.format!==$n?fe!==null?Ye?X&&t.compressedTexSubImage2D(i.TEXTURE_2D,ve,0,0,be.width,be.height,fe,be.data):t.compressedTexImage2D(i.TEXTURE_2D,ve,ye,be.width,be.height,0,be.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?X&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,be.width,be.height,fe,Te,be.data):t.texImage2D(i.TEXTURE_2D,ve,ye,be.width,be.height,0,fe,Te,be.data)}else if(E.isDataArrayTexture)if(Ye){if(et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,ye,j.width,j.height,j.depth),X)if(E.layerUpdates.size>0){let ve=Dh(j.width,j.height,E.format,E.type);for(let He of E.layerUpdates){let ze=j.data.subarray(He*ve/j.data.BYTES_PER_ELEMENT,(He+1)*ve/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,He,j.width,j.height,1,fe,Te,ze)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,fe,Te,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ye,j.width,j.height,j.depth,0,fe,Te,j.data);else if(E.isData3DTexture)Ye?(et&&t.texStorage3D(i.TEXTURE_3D,we,ye,j.width,j.height,j.depth),X&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,fe,Te,j.data)):t.texImage3D(i.TEXTURE_3D,0,ye,j.width,j.height,j.depth,0,fe,Te,j.data);else if(E.isFramebufferTexture){if(et)if(Ye)t.texStorage2D(i.TEXTURE_2D,we,ye,j.width,j.height);else{let ve=j.width,He=j.height;for(let ze=0;ze<we;ze++)t.texImage2D(i.TEXTURE_2D,ze,ye,ve,He,0,fe,Te,null),ve>>=1,He>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let ve=i.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),j.parentNode!==ve){ve.appendChild(j),h.add(E),ve.onpaint=He=>{let ze=He.changedElements;for(let Me of h)ze.includes(Me.image)&&(Me.needsUpdate=!0)},ve.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{let ze=i.RGBA,Me=i.RGBA,st=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ze,Me,st,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(Ye&&et){let ve=Xe(Ie[0]);t.texStorage2D(i.TEXTURE_2D,we,ye,ve.width,ve.height)}for(let ve=0,He=Ie.length;ve<He;ve++)be=Ie[ve],Ye?X&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,fe,Te,be):t.texImage2D(i.TEXTURE_2D,ve,ye,fe,Te,be);E.generateMipmaps=!1}else if(Ye){if(et){let ve=Xe(j);t.texStorage2D(i.TEXTURE_2D,we,ye,ve.width,ve.height)}X&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,Te,j)}else t.texImage2D(i.TEXTURE_2D,0,ye,fe,Te,j);m(E)&&x(O),Q.__version=G.version,E.onUpdate&&E.onUpdate(E)}F.__version=E.version}function rt(F,E,N){if(E.image.length!==6)return;let O=it(F,E),U=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+N);let G=n.get(U);if(U.version!==G.__version||O===!0){t.activeTexture(i.TEXTURE0+N);let Q=yt.getPrimaries(yt.workingColorSpace),q=E.colorSpace===Qn?null:yt.getPrimaries(E.colorSpace),j=E.colorSpace===Qn||Q===q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let fe=E.isCompressedTexture||E.image[0].isCompressedTexture,Te=E.image[0]&&E.image[0].isDataTexture,ye=[];for(let Me=0;Me<6;Me++)!fe&&!Te?ye[Me]=g(E.image[Me],!0,r.maxCubemapSize):ye[Me]=Te?E.image[Me].image:E.image[Me],ye[Me]=ct(E,ye[Me]);let be=ye[0],Ie=s.convert(E.format,E.colorSpace),Ye=s.convert(E.type),et=S(E.internalFormat,Ie,Ye,E.normalized,E.colorSpace),X=E.isVideoTexture!==!0,we=G.__version===void 0||O===!0,ve=U.dataReady,He=I(E,be);je(i.TEXTURE_CUBE_MAP,E);let ze;if(fe){X&&we&&t.texStorage2D(i.TEXTURE_CUBE_MAP,He,et,be.width,be.height);for(let Me=0;Me<6;Me++){ze=ye[Me].mipmaps;for(let st=0;st<ze.length;st++){let tt=ze[st];E.format!==$n?Ie!==null?X?ve&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,st,0,0,tt.width,tt.height,Ie,tt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,st,et,tt.width,tt.height,0,tt.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,st,0,0,tt.width,tt.height,Ie,Ye,tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,st,et,tt.width,tt.height,0,Ie,Ye,tt.data)}}}else{if(ze=E.mipmaps,X&&we){ze.length>0&&He++;let Me=Xe(ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,He,et,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Te){X?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,ye[Me].width,ye[Me].height,Ie,Ye,ye[Me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,et,ye[Me].width,ye[Me].height,0,Ie,Ye,ye[Me].data);for(let st=0;st<ze.length;st++){let kt=ze[st].image[Me].image;X?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,st+1,0,0,kt.width,kt.height,Ie,Ye,kt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,st+1,et,kt.width,kt.height,0,Ie,Ye,kt.data)}}else{X?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ie,Ye,ye[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,et,Ie,Ye,ye[Me]);for(let st=0;st<ze.length;st++){let tt=ze[st];X?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,st+1,0,0,Ie,Ye,tt.image[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,st+1,et,Ie,Ye,tt.image[Me])}}}m(E)&&x(i.TEXTURE_CUBE_MAP),G.__version=U.version,E.onUpdate&&E.onUpdate(E)}F.__version=E.version}function Be(F,E,N,O,U,G){let Q=s.convert(N.format,N.colorSpace),q=s.convert(N.type),j=S(N.internalFormat,Q,q,N.normalized,N.colorSpace),fe=n.get(E),Te=n.get(N);if(Te.__renderTarget=E,!fe.__hasExternalTextures){let ye=Math.max(1,E.width>>G),be=Math.max(1,E.height>>G);U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?t.texImage3D(U,G,j,ye,be,E.depth,0,Q,q,null):t.texImage2D(U,G,j,ye,be,0,Q,q,null)}t.bindFramebuffer(i.FRAMEBUFFER,F),We(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,O,U,Te.__webglTexture,0,Ce(E)):(U===i.TEXTURE_2D||U>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&U<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,O,U,Te.__webglTexture,G),t.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(F,E,N){if(i.bindRenderbuffer(i.RENDERBUFFER,F),E.depthBuffer){let O=E.depthTexture,U=O&&O.isDepthTexture?O.type:null,G=C(E.stencilBuffer,U),Q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;We(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce(E),G,E.width,E.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce(E),G,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,G,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,F)}else{let O=E.textures;for(let U=0;U<O.length;U++){let G=O[U],Q=s.convert(G.format,G.colorSpace),q=s.convert(G.type),j=S(G.internalFormat,Q,q,G.normalized,G.colorSpace);We(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce(E),j,E.width,E.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce(E),j,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,j,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function V(F,E,N){let O=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,F),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let U=n.get(E.depthTexture);if(U.__renderTarget=E,(!U.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),O){if(U.__webglInit===void 0&&(U.__webglInit=!0,E.depthTexture.addEventListener("dispose",L)),U.__webglTexture===void 0){U.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture),je(i.TEXTURE_CUBE_MAP,E.depthTexture);let fe=s.convert(E.depthTexture.format),Te=s.convert(E.depthTexture.type),ye;E.depthTexture.format===Ui?ye=i.DEPTH_COMPONENT24:E.depthTexture.format===Nr&&(ye=i.DEPTH24_STENCIL8);for(let be=0;be<6;be++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ye,E.width,E.height,0,fe,Te,null)}}else te(E.depthTexture,0);let G=U.__webglTexture,Q=Ce(E),q=O?i.TEXTURE_CUBE_MAP_POSITIVE_X+N:i.TEXTURE_2D,j=E.depthTexture.format===Nr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ui)We(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,q,G,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,j,q,G,0);else if(E.depthTexture.format===Nr)We(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,q,G,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,j,q,G,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Z(F){let E=n.get(F),N=F.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==F.depthTexture){let O=F.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),O){let U=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,O.removeEventListener("dispose",U)};O.addEventListener("dispose",U),E.__depthDisposeCallback=U}E.__boundDepthTexture=O}if(F.depthTexture&&!E.__autoAllocateDepthBuffer)if(N)for(let O=0;O<6;O++)V(E.__webglFramebuffer[O],F,O);else{let O=F.texture.mipmaps;O&&O.length>0?V(E.__webglFramebuffer[0],F,0):V(E.__webglFramebuffer,F,0)}else if(N){E.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[O]),E.__webglDepthbuffer[O]===void 0)E.__webglDepthbuffer[O]=i.createRenderbuffer(),nt(E.__webglDepthbuffer[O],F,!1);else{let U=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=E.__webglDepthbuffer[O];i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,U,i.RENDERBUFFER,G)}}else{let O=F.texture.mipmaps;if(O&&O.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),nt(E.__webglDepthbuffer,F,!1);else{let U=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,U,i.RENDERBUFFER,G)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(F,E,N){let O=n.get(F);E!==void 0&&Be(O.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Z(F)}function xe(F){let E=F.texture,N=n.get(F),O=n.get(E);F.addEventListener("dispose",M);let U=F.textures,G=F.isWebGLCubeRenderTarget===!0,Q=U.length>1;if(Q||(O.__webglTexture===void 0&&(O.__webglTexture=i.createTexture()),O.__version=E.version,a.memory.textures++),G){N.__webglFramebuffer=[];for(let q=0;q<6;q++)if(E.mipmaps&&E.mipmaps.length>0){N.__webglFramebuffer[q]=[];for(let j=0;j<E.mipmaps.length;j++)N.__webglFramebuffer[q][j]=i.createFramebuffer()}else N.__webglFramebuffer[q]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){N.__webglFramebuffer=[];for(let q=0;q<E.mipmaps.length;q++)N.__webglFramebuffer[q]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(Q)for(let q=0,j=U.length;q<j;q++){let fe=n.get(U[q]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),a.memory.textures++)}if(F.samples>0&&We(F)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let q=0;q<U.length;q++){let j=U[q];N.__webglColorRenderbuffer[q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[q]);let fe=s.convert(j.format,j.colorSpace),Te=s.convert(j.type),ye=S(j.internalFormat,fe,Te,j.normalized,j.colorSpace,F.isXRRenderTarget===!0),be=Ce(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,be,ye,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,N.__webglColorRenderbuffer[q])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),nt(N.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(G){t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture),je(i.TEXTURE_CUBE_MAP,E);for(let q=0;q<6;q++)if(E.mipmaps&&E.mipmaps.length>0)for(let j=0;j<E.mipmaps.length;j++)Be(N.__webglFramebuffer[q][j],F,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,j);else Be(N.__webglFramebuffer[q],F,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);m(E)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Q){for(let q=0,j=U.length;q<j;q++){let fe=U[q],Te=n.get(fe),ye=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(ye=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,Te.__webglTexture),je(ye,fe),Be(N.__webglFramebuffer,F,fe,i.COLOR_ATTACHMENT0+q,ye,0),m(fe)&&x(ye)}t.unbindTexture()}else{let q=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(q=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(q,O.__webglTexture),je(q,E),E.mipmaps&&E.mipmaps.length>0)for(let j=0;j<E.mipmaps.length;j++)Be(N.__webglFramebuffer[j],F,E,i.COLOR_ATTACHMENT0,q,j);else Be(N.__webglFramebuffer,F,E,i.COLOR_ATTACHMENT0,q,0);m(E)&&x(q),t.unbindTexture()}F.depthBuffer&&Z(F)}function se(F){let E=F.textures;for(let N=0,O=E.length;N<O;N++){let U=E[N];if(m(U)){let G=A(F),Q=n.get(U).__webglTexture;t.bindTexture(G,Q),x(G),t.unbindTexture()}}}let ie=[],$=[];function ge(F){if(F.samples>0){if(We(F)===!1){let E=F.textures,N=F.width,O=F.height,U=i.COLOR_BUFFER_BIT,G=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=n.get(F),q=E.length>1;if(q)for(let fe=0;fe<E.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Q.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Q.__webglMultisampledFramebuffer);let j=F.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Q.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Q.__webglFramebuffer);for(let fe=0;fe<E.length;fe++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(U|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(U|=i.STENCIL_BUFFER_BIT)),q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Q.__webglColorRenderbuffer[fe]);let Te=n.get(E[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Te,0)}i.blitFramebuffer(0,0,N,O,0,0,N,O,U,i.NEAREST),c===!0&&(ie.length=0,$.length=0,ie.push(i.COLOR_ATTACHMENT0+fe),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(ie.push(G),$.push(G),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,$)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ie))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),q)for(let fe=0;fe<E.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,Q.__webglColorRenderbuffer[fe]);let Te=n.get(E[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Q.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,Te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Q.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&c){let E=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Ce(F){return Math.min(r.maxSamples,F.samples)}function We(F){let E=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function z(F){let E=a.render.frame;l.get(F)!==E&&(l.set(F,E),F.update())}function ct(F,E){let N=F.colorSpace,O=F.format,U=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||N!==Un&&N!==Qn&&(yt.getTransfer(N)===Dt?(O!==$n||U!==Vn)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",N)),E}function Xe(F){return typeof HTMLImageElement!="undefined"&&F instanceof HTMLImageElement?(u.width=F.naturalWidth||F.width,u.height=F.naturalHeight||F.height):typeof VideoFrame!="undefined"&&F instanceof VideoFrame?(u.width=F.displayWidth,u.height=F.displayHeight):(u.width=F.width,u.height=F.height),u}this.allocateTextureUnit=Y,this.resetTextureUnits=w,this.getTextureUnits=P,this.setTextureUnits=k,this.setTexture2D=te,this.setTexture2DArray=le,this.setTexture3D=ue,this.setTextureCube=he,this.rebindTextures=pe,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Z,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=We,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function wM(i,e){function t(n,r=Qn){let s,a=yt.getTransfer(r);if(n===Vn)return i.UNSIGNED_BYTE;if(n===ec)return i.UNSIGNED_SHORT_4_4_4_4;if(n===tc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Sh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Th)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===yh)return i.BYTE;if(n===Mh)return i.SHORT;if(n===ra)return i.UNSIGNED_SHORT;if(n===Ql)return i.INT;if(n===Ri)return i.UNSIGNED_INT;if(n===jn)return i.FLOAT;if(n===Tn)return i.HALF_FLOAT;if(n===bh)return i.ALPHA;if(n===Eh)return i.RGB;if(n===$n)return i.RGBA;if(n===Ui)return i.DEPTH_COMPONENT;if(n===Nr)return i.DEPTH_STENCIL;if(n===nc)return i.RED;if(n===ic)return i.RED_INTEGER;if(n===Dr)return i.RG;if(n===rc)return i.RG_INTEGER;if(n===sc)return i.RGBA_INTEGER;if(n===mo||n===go||n===vo||n===xo)if(a===Dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===mo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===mo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===go)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ac||n===oc||n===lc||n===cc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ac)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===lc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===cc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uc||n===hc||n===fc||n===dc||n===pc||n===_o||n===mc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===uc||n===hc)return a===Dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===fc)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===dc)return s.COMPRESSED_R11_EAC;if(n===pc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===_o)return s.COMPRESSED_RG11_EAC;if(n===mc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===gc||n===vc||n===xc||n===_c||n===yc||n===Mc||n===Sc||n===Tc||n===bc||n===Ec||n===wc||n===Ac||n===Rc||n===Cc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===gc)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vc)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xc)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_c)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yc)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Mc)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sc)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Tc)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bc)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ec)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wc)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ac)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Rc)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Cc)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ic||n===Pc||n===Lc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ic)return a===Dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Lc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nc||n===Dc||n===yo||n===Oc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Nc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Dc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===sa?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var AM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RM=`
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

}`,Qh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Za(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new tn({vertexShader:AM,fragmentShader:RM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fe(new Jn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ef=class extends Ei{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",c=1,u=null,l=null,h=null,f=null,p=null,v=null,y=typeof XRWebGLBinding!="undefined",g=new Qh,m={},x=t.getContextAttributes(),A=null,S=null,C=[],I=[],L=new ot,M=null,T=null,D=new sn;D.viewport=new Ft;let H=new sn;H.viewport=new Ft;let _=[D,H],w=new ql,P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(de){let me=C[de];return me===void 0&&(me=new Vs,C[de]=me),me.getTargetRaySpace()},this.getControllerGrip=function(de){let me=C[de];return me===void 0&&(me=new Vs,C[de]=me),me.getGripSpace()},this.getHand=function(de){let me=C[de];return me===void 0&&(me=new Vs,C[de]=me),me.getHandSpace()};function Y(de){let me=I.indexOf(de.inputSource);if(me===-1)return;let Ee=C[me];Ee!==void 0&&(Ee.update(de.inputSource,de.frame,u||a),Ee.dispatchEvent({type:de.type,data:de.inputSource}))}function ne(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",ne),r.removeEventListener("inputsourceschange",te);for(let de=0;de<C.length;de++){let me=I[de];me!==null&&(I[de]=null,C[de].disconnect(me))}P=null,k=null,g.reset();for(let de in m)delete m[de];if(e.setRenderTarget(A),p=null,f=null,h=null,r=null,S=null,it.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(L.width,L.height,!1),T!==null){let de=T.camera;de.fov=T.fov,de.zoom=T.zoom,de.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(de){s=de,n.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(de){o=de,n.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(de){u=de},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(de){if(r=de,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",ne),r.addEventListener("inputsourceschange",te),x.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(L),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,rt=null,Be=null;x.depth&&(Be=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=x.stencil?Nr:Ui,rt=x.stencil?sa:Ri);let nt={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(nt),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new pn(f.textureWidth,f.textureHeight,{format:$n,type:Vn,depthTexture:new Rr(f.textureWidth,f.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Ee={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Ee),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new pn(p.framebufferWidth,p.framebufferHeight,{format:$n,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),it.setContext(r),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function te(de){for(let me=0;me<de.removed.length;me++){let Ee=de.removed[me],rt=I.indexOf(Ee);rt>=0&&(I[rt]=null,C[rt].disconnect(Ee))}for(let me=0;me<de.added.length;me++){let Ee=de.added[me],rt=I.indexOf(Ee);if(rt===-1){for(let nt=0;nt<C.length;nt++)if(nt>=I.length){I.push(Ee),rt=nt;break}else if(I[nt]===null){I[nt]=Ee,rt=nt;break}if(rt===-1)break}let Be=C[rt];Be&&Be.connect(Ee)}}let le=new K,ue=new K;function he(de,me,Ee){le.setFromMatrixPosition(me.matrixWorld),ue.setFromMatrixPosition(Ee.matrixWorld);let rt=le.distanceTo(ue),Be=me.projectionMatrix.elements,nt=Ee.projectionMatrix.elements,V=Be[14]/(Be[10]-1),Z=Be[14]/(Be[10]+1),pe=(Be[9]+1)/Be[5],xe=(Be[9]-1)/Be[5],se=(Be[8]-1)/Be[0],ie=(nt[8]+1)/nt[0],$=V*se,ge=V*ie,Ce=rt/(-se+ie),We=Ce*-se;if(me.matrixWorld.decompose(de.position,de.quaternion,de.scale),de.translateX(We),de.translateZ(Ce),de.matrixWorld.compose(de.position,de.quaternion,de.scale),de.matrixWorldInverse.copy(de.matrixWorld).invert(),Be[10]===-1)de.projectionMatrix.copy(me.projectionMatrix),de.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{let z=V+Ce,ct=Z+Ce,Xe=$-We,F=ge+(rt-We),E=pe*Z/ct*z,N=xe*Z/ct*z;de.projectionMatrix.makePerspective(Xe,F,E,N,z,ct),de.projectionMatrixInverse.copy(de.projectionMatrix).invert()}}function De(de,me){me===null?de.matrixWorld.copy(de.matrix):de.matrixWorld.multiplyMatrices(me.matrixWorld,de.matrix),de.matrixWorldInverse.copy(de.matrixWorld).invert()}this.updateCamera=function(de){if(r===null)return;let me=de.near,Ee=de.far;g.texture!==null&&(g.depthNear>0&&(me=g.depthNear),g.depthFar>0&&(Ee=g.depthFar)),w.near=H.near=D.near=me,w.far=H.far=D.far=Ee,(P!==w.near||k!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),P=w.near,k=w.far),w.layers.mask=de.layers.mask|6,D.layers.mask=w.layers.mask&-5,H.layers.mask=w.layers.mask&-3;let rt=de.parent,Be=w.cameras;De(w,rt);for(let nt=0;nt<Be.length;nt++)De(Be[nt],rt);Be.length===2?he(w,D,H):w.projectionMatrix.copy(D.projectionMatrix),T===null&&de.isPerspectiveCamera&&(T={camera:de,fov:de.fov,zoom:de.zoom}),Ue(de,w,rt)};function Ue(de,me,Ee){Ee===null?de.matrix.copy(me.matrixWorld):(de.matrix.copy(Ee.matrixWorld),de.matrix.invert(),de.matrix.multiply(me.matrixWorld)),de.matrix.decompose(de.position,de.quaternion,de.scale),de.updateMatrixWorld(!0),de.projectionMatrix.copy(me.projectionMatrix),de.projectionMatrixInverse.copy(me.projectionMatrixInverse),de.isPerspectiveCamera&&(de.fov=$r*2*Math.atan(1/de.projectionMatrix.elements[5]),de.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(de){c=de,f!==null&&(f.fixedFoveation=de),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=de)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(w)},this.getCameraTexture=function(de){return m[de]};let dt=null;function je(de,me){if(l=me.getViewerPose(u||a),v=me,l!==null){let Ee=l.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let rt=!1;Ee.length!==w.cameras.length&&(w.cameras.length=0,rt=!0);for(let Z=0;Z<Ee.length;Z++){let pe=Ee[Z],xe=null;if(p!==null)xe=p.getViewport(pe);else{let ie=h.getViewSubImage(f,pe);xe=ie.viewport,Z===0&&(e.setRenderTargetTextures(S,ie.colorTexture,ie.depthStencilTexture),e.setRenderTarget(S))}let se=_[Z];se===void 0&&(se=new sn,se.layers.enable(Z),se.viewport=new Ft,_[Z]=se),se.matrix.fromArray(pe.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(pe.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(xe.x,xe.y,xe.width,xe.height),Z===0&&(w.matrix.copy(se.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),rt===!0&&w.cameras.push(se)}let Be=r.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){h=n.getBinding();let Z=h.getDepthInformation(Ee[0]);Z&&Z.isValid&&Z.texture&&g.init(Z,r.renderState)}if(Be&&Be.includes("camera-access")&&y){e.state.unbindTexture(),h=n.getBinding();for(let Z=0;Z<Ee.length;Z++){let pe=Ee[Z].camera;if(pe){let xe=m[pe];xe||(xe=new Za,m[pe]=xe);let se=h.getCameraImage(pe);xe.sourceTexture=se}}}}for(let Ee=0;Ee<C.length;Ee++){let rt=I[Ee],Be=C[Ee];rt!==null&&Be!==void 0&&Be.update(rt,me,u||a)}dt&&dt(de,me),me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:me}),v=null}let it=new f0;it.setAnimationLoop(je),this.setAnimationLoop=function(de){dt=de},this.dispose=function(){}}},CM=new xt,x0=new pt;x0.set(-1,0,0,0,1,0,0,0,1);function IM(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Ph(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,x,A,S){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),h(g,m)):m.isMeshPhongMaterial?(s(g,m),l(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),f(g,m),m.isMeshPhysicalMaterial&&p(g,m,S)):m.isMeshMatcapMaterial?(s(g,m),v(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),y(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,x,A):m.isSpriteMaterial?u(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Mn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Mn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let x=e.get(m),A=x.envMap,S=x.envMapRotation;A&&(g.envMap.value=A,g.envMapRotation.value.setFromMatrix4(CM.makeRotationFromEuler(S)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(x0),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,x,A){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=A*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,x){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Mn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,m){m.matcap&&(g.matcap.value=m.matcap)}function y(g,m){let x=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function PM(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,C){let I=C.program;n.uniformBlockBinding(S,I)}function u(S,C){let I=r[S.id];I===void 0&&(g(S),I=l(S),r[S.id]=I,S.addEventListener("dispose",x));let L=C.program;n.updateUBOMapping(S,L);let M=e.render.frame;s[S.id]!==M&&(f(S),s[S.id]=M)}function l(S){let C=h();S.__bindingPointIndex=C;let I=i.createBuffer(),L=S.__size,M=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,I),i.bufferData(i.UNIFORM_BUFFER,L,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,C,I),I}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let C=r[S.id],I=S.uniforms,L=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let M=0,T=I.length;M<T;M++){let D=I[M];if(Array.isArray(D))for(let H=0,_=D.length;H<_;H++)p(D[H],M,H,L);else p(D,M,0,L)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,C,I,L){if(y(S,C,I,L)===!0){let M=S.__offset,T=S.value;if(Array.isArray(T)){let D=0;for(let H=0;H<T.length;H++){let _=T[H],w=m(_);v(_,S.__data,D),typeof _!="number"&&typeof _!="boolean"&&!_.isMatrix3&&!ArrayBuffer.isView(_)&&(D+=w.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(T,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,S.__data)}}function v(S,C,I){typeof S=="number"||typeof S=="boolean"?C[0]=S:S.isMatrix3?(C[0]=S.elements[0],C[1]=S.elements[1],C[2]=S.elements[2],C[3]=0,C[4]=S.elements[3],C[5]=S.elements[4],C[6]=S.elements[5],C[7]=0,C[8]=S.elements[6],C[9]=S.elements[7],C[10]=S.elements[8],C[11]=0):ArrayBuffer.isView(S)?C.set(new S.constructor(S.buffer,S.byteOffset,C.length)):S.toArray(C,I)}function y(S,C,I,L){let M=S.value,T=C+"_"+I;if(L[T]===void 0)return typeof M=="number"||typeof M=="boolean"?L[T]=M:ArrayBuffer.isView(M)?L[T]=M.slice():L[T]=M.clone(),!0;{let D=L[T];if(typeof M=="number"||typeof M=="boolean"){if(D!==M)return L[T]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(D.equals(M)===!1)return D.copy(M),!0}}return!1}function g(S){let C=S.uniforms,I=0,L=16;for(let T=0,D=C.length;T<D;T++){let H=Array.isArray(C[T])?C[T]:[C[T]];for(let _=0,w=H.length;_<w;_++){let P=H[_],k=Array.isArray(P.value)?P.value:[P.value];for(let Y=0,ne=k.length;Y<ne;Y++){let te=k[Y],le=m(te),ue=I%L,he=ue%le.boundary,De=ue+he;I+=he,De!==0&&L-De<le.storage&&(I+=L-De),P.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=I,I+=le.storage}}}let M=I%L;return M>0&&(I+=L-M),S.__size=I,S.__cache={},this}function m(S){let C={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(C.boundary=4,C.storage=4):S.isVector2?(C.boundary=8,C.storage=8):S.isVector3||S.isColor?(C.boundary=16,C.storage=12):S.isVector4?(C.boundary=16,C.storage=16):S.isMatrix3?(C.boundary=48,C.storage=48):S.isMatrix4?(C.boundary=64,C.storage=64):S.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(C.boundary=16,C.storage=S.byteLength):at("WebGLRenderer: Unsupported uniform value type.",S),C}function x(S){let C=S.target;C.removeEventListener("dispose",x);let I=a.indexOf(C.__bindingPointIndex);a.splice(I,1),i.deleteBuffer(r[C.id]),delete r[C.id],delete s[C.id]}function A(){for(let S in r)i.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:c,update:u,dispose:A}}var LM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Wi=null;function NM(){return Wi===null&&(Wi=new sr(LM,16,16,Dr,Tn),Wi.name="DFG_LUT",Wi.minFilter=an,Wi.magFilter=an,Wi.wrapS=ai,Wi.wrapT=ai,Wi.generateMipmaps=!1,Wi.needsUpdate=!0),Wi}var Wc=class{constructor(e={}){let{canvas:t=Fp(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Vn}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;let y=p,g=new Set([sc,rc,ic]),m=new Set([Vn,Ri,ra,sa,ec,tc]),x=new Uint32Array(4),A=new Int32Array(4),S=new K,C=null,I=null,L=[],M=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,H=!1,_=null,w=null,P=null,k=null;this._outputColorSpace=Wt;let Y=0,ne=0,te=null,le=-1,ue=null,he=new Ft,De=new Ft,Ue=null,dt=new $e(0),je=0,it=t.width,de=t.height,me=1,Ee=null,rt=null,Be=new Ft(0,0,it,de),nt=new Ft(0,0,it,de),V=!1,Z=new Ys,pe=!1,xe=!1,se=new xt,ie=new K,$=new Ft,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ce=!1;function We(){return te===null?me:1}let z=n;function ct(R,W){return t.getContext(R,W)}let Xe,F,E,N,O,U,G,Q,q,j,fe,Te,ye,be,Ie,Ye,et,X,we,ve,He,ze,Me;try{let R={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:l,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",kt,!1),t.addEventListener("webglcontextrestored",Nt,!1),t.addEventListener("webglcontextcreationerror",qn,!1),z===null){let W="webgl2";if(z=ct(W,R),z===null)throw ct(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}st()}catch(R){throw t.removeEventListener("webglcontextlost",kt,!1),t.removeEventListener("webglcontextrestored",Nt,!1),t.removeEventListener("webglcontextcreationerror",qn,!1),ft("WebGLRenderer: "+R.message),R}function st(){Xe=new k_(z),Xe.init(),He=new wM(z,Xe),F=new I_(z,Xe,e,He),E=new bM(z,Xe),F.reversedDepthBuffer&&f&&E.buffers.depth.setReversed(!0),w=z.createFramebuffer(),P=z.createFramebuffer(),k=z.createFramebuffer(),N=new V_(z),O=new uM,U=new EM(z,Xe,E,O,F,He,N),G=new B_(D),Q=new qg(z),ze=new R_(z,Q),q=new z_(z,Q,N,ze),j=new q_(z,q,Q,ze,N),X=new W_(z,F,U),Ie=new P_(O),fe=new cM(D,G,Xe,F,ze,Ie),Te=new IM(D,O),ye=new fM,be=new xM(Xe),et=new A_(D,G,E,j,v,c),Ye=new TM(D,j,F),Me=new PM(z,N,F,E),we=new C_(z,Xe,N),ve=new G_(z,Xe,N),N.programs=fe.programs,D.capabilities=F,D.extensions=Xe,D.properties=O,D.renderLists=ye,D.shadowMap=Ye,D.state=E,D.info=N}y!==Vn&&(T=new Y_(y,t.width,t.height,o,r,s));let tt=new ef(D,z);this.xr=tt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let R=Xe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Xe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(R){R!==void 0&&(me=R,this.setSize(it,de,!1))},this.getSize=function(R){return R.set(it,de)},this.setSize=function(R,W,ee=!0){if(tt.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}it=R,de=W,t.width=Math.floor(R*me),t.height=Math.floor(W*me),ee===!0&&(t.style.width=R+"px",t.style.height=W+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(it*me,de*me).floor()},this.setDrawingBufferSize=function(R,W,ee){it=R,de=W,me=ee,t.width=Math.floor(R*ee),t.height=Math.floor(W*ee),this.setViewport(0,0,R,W)},this.setEffects=function(R){if(y===Vn){ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let W=0;W<R.length;W++)if(R[W].isOutputPass===!0){at("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(he)},this.getViewport=function(R){return R.copy(Be)},this.setViewport=function(R,W,ee,re){R.isVector4?Be.set(R.x,R.y,R.z,R.w):Be.set(R,W,ee,re),E.viewport(he.copy(Be).multiplyScalar(me).round())},this.getScissor=function(R){return R.copy(nt)},this.setScissor=function(R,W,ee,re){R.isVector4?nt.set(R.x,R.y,R.z,R.w):nt.set(R,W,ee,re),E.scissor(De.copy(nt).multiplyScalar(me).round())},this.getScissorTest=function(){return V},this.setScissorTest=function(R){E.setScissorTest(V=R)},this.setOpaqueSort=function(R){Ee=R},this.setTransparentSort=function(R){rt=R},this.getClearColor=function(R){return R.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,ee=!0){let re=0;if(R){let oe=!1;if(te!==null){let Pe=te.texture.format;oe=g.has(Pe)}if(oe){let Pe=te.texture.type,Oe=m.has(Pe),Ae=et.getClearColor(),Ge=et.getClearAlpha(),Ve=Ae.r,ht=Ae.g,gt=Ae.b;Oe?(x[0]=Ve,x[1]=ht,x[2]=gt,x[3]=Ge,z.clearBufferuiv(z.COLOR,0,x)):(A[0]=Ve,A[1]=ht,A[2]=gt,A[3]=Ge,z.clearBufferiv(z.COLOR,0,A))}else re|=z.COLOR_BUFFER_BIT}W&&(re|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ee&&(re|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&z.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),_=R},this.dispose=function(){t.removeEventListener("webglcontextlost",kt,!1),t.removeEventListener("webglcontextrestored",Nt,!1),t.removeEventListener("webglcontextcreationerror",qn,!1),et.dispose(),ye.dispose(),be.dispose(),O.dispose(),G.dispose(),j.dispose(),ze.dispose(),Me.dispose(),fe.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",B),tt.removeEventListener("sessionend",ce),J.stop()};function kt(R){R.preventDefault(),Fa("WebGLRenderer: Context Lost."),H=!0}function Nt(){Fa("WebGLRenderer: Context Restored."),H=!1;let R=N.autoReset,W=Ye.enabled,ee=Ye.autoUpdate,re=Ye.needsUpdate,oe=Ye.type;st(),N.autoReset=R,Ye.enabled=W,Ye.autoUpdate=ee,Ye.needsUpdate=re,Ye.type=oe}function qn(R){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ii(R){let W=R.target;W.removeEventListener("dispose",ii),Ma(W)}function Ma(R){bu(R),O.remove(R)}function bu(R){let W=O.get(R).programs;W!==void 0&&(W.forEach(function(ee){fe.releaseProgram(ee)}),R.isShaderMaterial&&fe.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,ee,re,oe,Pe){W===null&&(W=ge);let Oe=oe.isMesh&&oe.matrixWorld.determinantAffine()<0,Ae=cn(R,W,ee,re,oe);E.setMaterial(re,Oe);let Ge=ee.index,Ve=1;if(re.wireframe===!0){if(Ge=q.getWireframeAttribute(ee),Ge===void 0)return;Ve=2}let ht=ee.drawRange,gt=ee.attributes.position,qe=ht.start*Ve,Mt=(ht.start+ht.count)*Ve;Pe!==null&&(qe=Math.max(qe,Pe.start*Ve),Mt=Math.min(Mt,(Pe.start+Pe.count)*Ve)),Ge!==null?(qe=Math.max(qe,0),Mt=Math.min(Mt,Ge.count)):gt!=null&&(qe=Math.max(qe,0),Mt=Math.min(Mt,gt.count));let nn=Mt-qe;if(nn<0||nn===1/0)return;ze.setup(oe,re,Ae,ee,Ge);let zt,Xt=we;if(Ge!==null&&(zt=Q.get(Ge),Xt=ve,Xt.setIndex(zt)),oe.isMesh)re.wireframe===!0?(E.setLineWidth(re.wireframeLinewidth*We()),Xt.setMode(z.LINES)):Xt.setMode(z.TRIANGLES);else if(oe.isLine){let An=re.linewidth;An===void 0&&(An=1),E.setLineWidth(An*We()),oe.isLineSegments?Xt.setMode(z.LINES):oe.isLineLoop?Xt.setMode(z.LINE_LOOP):Xt.setMode(z.LINE_STRIP)}else oe.isPoints?Xt.setMode(z.POINTS):oe.isSprite&&Xt.setMode(z.TRIANGLES);if(oe.isBatchedMesh)if(Xe.get("WEBGL_multi_draw"))Xt.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{let An=oe._multiDrawStarts,Ke=oe._multiDrawCounts,Dn=oe._multiDrawCount,Lt=Ge?Q.get(Ge).bytesPerElement:1,ri=O.get(re).currentProgram.getUniforms();for(let Li=0;Li<Dn;Li++)ri.setValue(z,"_gl_DrawID",Li),Xt.render(An[Li]/Lt,Ke[Li])}else if(oe.isInstancedMesh)Xt.renderInstances(qe,nn,oe.count);else if(ee.isInstancedBufferGeometry){let An=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Ke=Math.min(ee.instanceCount,An);Xt.renderInstances(qe,nn,Ke)}else Xt.render(qe,nn)};function qo(R,W,ee,re){_!==null&&R.isNodeMaterial&&_.setObject(re,R),pe===!0&&Ie.setState(R,ee,!1),R.transparent===!0&&R.side===Sn&&R.forceSinglePass===!1?(R.side=Mn,R.needsUpdate=!0,Je(R,W,re),R.side=Gi,R.needsUpdate=!0,Je(R,W,re),R.side=Sn):Je(R,W,re)}this.compile=function(R,W,ee=null){ee===null&&(ee=R),_!==null&&_.renderStart(R,W,ee),I=be.get(ee),I.init(W),M.push(I),ee.traverseVisible(function(oe){oe.isLight&&oe.layers.test(W.layers)&&(I.pushLight(oe),oe.castShadow&&I.pushShadow(oe))}),R!==ee&&R.traverseVisible(function(oe){oe.isLight&&oe.layers.test(W.layers)&&(I.pushLight(oe),oe.castShadow&&I.pushShadow(oe))}),I.setupLights(),_!==null&&_.updateLights(I.state.lightsArray),xe=this.localClippingEnabled,pe=Ie.init(this.clippingPlanes,xe),pe===!0&&Ie.setGlobalState(this.clippingPlanes,W),_!==null&&Ye.render(I.state.shadowsArray,ee,W);let re=new Set;return R.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;let Pe=oe.material;if(Pe)if(Array.isArray(Pe))for(let Oe=0;Oe<Pe.length;Oe++){let Ae=Pe[Oe];qo(Ae,ee,W,oe),re.add(Ae)}else qo(Pe,ee,W,oe),re.add(Pe)}),I=M.pop(),_!==null&&_.renderEnd(),re},this.compileAsync=function(R,W,ee=null){let re=this.compile(R,W,ee);return new Promise(oe=>{function Pe(){if(re.forEach(function(Oe){let Ge=O.get(Oe).currentProgram;(Ge===void 0||Ge.isReady())&&re.delete(Oe)}),re.size===0){oe(R);return}setTimeout(Pe,10)}Xe.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let d=null;function b(R){d&&d(R)}function B(){J.stop()}function ce(){J.start()}let J=new f0;J.setAnimationLoop(b),typeof self!="undefined"&&J.setContext(self),this.setAnimationLoop=function(R){d=R,tt.setAnimationLoop(R),R===null?J.stop():J.start()},tt.addEventListener("sessionstart",B),tt.addEventListener("sessionend",ce),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;_!==null&&_.renderStart(R,W);let ee=tt.enabled===!0&&tt.isPresenting===!0,re=T!==null&&(te===null||ee)&&T.begin(D,te);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(W),W=tt.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,W,te),I=be.get(R,M.length),I.init(W),I.state.textureUnits=U.getTextureUnits(),M.push(I),se.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Z.setFromProjectionMatrix(se,Ti,W.reversedDepth),xe=this.localClippingEnabled,pe=Ie.init(this.clippingPlanes,xe),C=ye.get(R,L.length),C.init(),L.push(C),tt.enabled===!0&&tt.isPresenting===!0){let Oe=D.xr.getDepthSensingMesh();Oe!==null&&ae(Oe,W,-1/0,D.sortObjects)}ae(R,W,0,D.sortObjects),C.finish(),_!==null&&_.updateLights(I.state.lightsArray),D.sortObjects===!0&&C.sort(Ee,rt),Ce=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,Ce&&et.addToRenderList(C,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),pe===!0&&Ie.beginShadows();let oe=I.state.shadowsArray;if(Ye.render(oe,R,W),pe===!0&&Ie.endShadows(),(re&&T.hasRenderPass())===!1){let Oe=C.opaque,Ae=C.transmissive;if(I.setupLights(),W.isArrayCamera){let Ge=W.cameras;if(Ae.length>0)for(let Ve=0,ht=Ge.length;Ve<ht;Ve++){let gt=Ge[Ve];Se(Oe,Ae,R,gt)}Ce&&et.render(R);for(let Ve=0,ht=Ge.length;Ve<ht;Ve++){let gt=Ge[Ve];_e(C,R,gt,gt.viewport)}}else Ae.length>0&&Se(Oe,Ae,R,W),Ce&&et.render(R),_e(C,R,W)}te!==null&&ne===0&&(U.updateMultisampleRenderTarget(te),U.updateRenderTargetMipmap(te)),re&&T.end(D),R.isScene===!0&&R.onAfterRender(D,R,W),ze.resetDefaultState(),le=-1,ue=null,M.pop(),M.length>0?(I=M[M.length-1],U.setTextureUnits(I.state.textureUnits),pe===!0&&Ie.setGlobalState(D.clippingPlanes,I.state.camera)):I=null,L.pop(),L.length>0?C=L[L.length-1]:C=null,_!==null&&_.renderEnd()};function ae(R,W,ee,re){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)ee=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLightProbeGrid)I.pushLightProbeGrid(R);else if(R.isLight)I.pushLight(R),R.castShadow&&I.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(Z)){re&&$.setFromMatrixPosition(R.matrixWorld).applyMatrix4(se);let Oe=j.update(R),Ae=R.material;Ae.visible&&C.push(R,Oe,Ae,ee,$.z,null,W)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(Z))){let Oe=j.update(R),Ae=R.material;if(re&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),$.copy(R.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),$.copy(Oe.boundingSphere.center)),$.applyMatrix4(R.matrixWorld).applyMatrix4(se)),Array.isArray(Ae)){let Ge=Oe.groups;for(let Ve=0,ht=Ge.length;Ve<ht;Ve++){let gt=Ge[Ve],qe=Ae[gt.materialIndex];qe&&qe.visible&&C.push(R,Oe,qe,ee,$.z,gt,W)}}else Ae.visible&&C.push(R,Oe,Ae,ee,$.z,null,W)}}let Pe=R.children;for(let Oe=0,Ae=Pe.length;Oe<Ae;Oe++)ae(Pe[Oe],W,ee,re)}function _e(R,W,ee,re){let{opaque:oe,transmissive:Pe,transparent:Oe}=R;I.setupLightsView(ee),pe===!0&&Ie.setGlobalState(D.clippingPlanes,ee),re&&E.viewport(he.copy(re)),oe.length>0&&Re(oe,W,ee),Pe.length>0&&Re(Pe,W,ee),Oe.length>0&&Re(Oe,W,ee),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Se(R,W,ee,re){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[re.id]===void 0){let qe=Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[re.id]=new pn(1,1,{generateMipmaps:!0,type:qe?Tn:Vn,minFilter:Ai,samples:Math.max(4,F.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:yt.workingColorSpace})}let Pe=I.state.transmissionRenderTarget[re.id],Oe=re.viewport||he;Pe.setSize(Oe.z*D.transmissionResolutionScale,Oe.w*D.transmissionResolutionScale);let Ae=D.getRenderTarget(),Ge=D.getActiveCubeFace(),Ve=D.getActiveMipmapLevel();D.setRenderTarget(Pe),D.getClearColor(dt),je=D.getClearAlpha(),je<1&&D.setClearColor(16777215,.5),D.clear(),Ce&&et.render(ee);let ht=D.toneMapping;D.toneMapping=wi;let gt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),I.setupLightsView(re),pe===!0&&Ie.setGlobalState(D.clippingPlanes,re),Re(R,ee,re),U.updateMultisampleRenderTarget(Pe),U.updateRenderTargetMipmap(Pe),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Mt=0,nn=W.length;Mt<nn;Mt++){let zt=W[Mt],{object:Xt,geometry:An,material:Ke,group:Dn}=zt;if(Ke.side===Sn&&Xt.layers.test(re.layers)){let Lt=Ke.side;Ke.side=Mn,Ke.needsUpdate=!0,Ze(Xt,ee,re,An,Ke,Dn),Ke.side=Lt,Ke.needsUpdate=!0,qe=!0}}qe===!0&&(U.updateMultisampleRenderTarget(Pe),U.updateRenderTargetMipmap(Pe))}D.setRenderTarget(Ae,Ge,Ve),D.setClearColor(dt,je),gt!==void 0&&(re.viewport=gt),D.toneMapping=ht}function Re(R,W,ee){let re=W.isScene===!0?W.overrideMaterial:null;for(let oe=0,Pe=R.length;oe<Pe;oe++){let Oe=R[oe],{object:Ae,geometry:Ge,group:Ve}=Oe,ht=Oe.material;ht.allowOverride===!0&&re!==null&&(ht=re),Ae.layers.test(ee.layers)&&Ze(Ae,W,ee,Ge,ht,Ve)}}function Ze(R,W,ee,re,oe,Pe){_!==null&&oe.isNodeMaterial&&_.setObject(R,oe),R.onBeforeRender(D,W,ee,re,oe,Pe),R.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),oe.onBeforeRender(D,W,ee,re,R,Pe),oe.transparent===!0&&oe.side===Sn&&oe.forceSinglePass===!1?(oe.side=Mn,oe.needsUpdate=!0,D.renderBufferDirect(ee,W,re,oe,R,Pe),oe.side=Gi,oe.needsUpdate=!0,D.renderBufferDirect(ee,W,re,oe,R,Pe),oe.side=Sn):D.renderBufferDirect(ee,W,re,oe,R,Pe),R.onAfterRender(D,W,ee,re,oe,Pe)}function Je(R,W,ee){W.isScene!==!0&&(W=ge);let re=O.get(R),oe=I.state.lights,Pe=I.state.shadowsArray,Oe=oe.state.version,Ae=fe.getParameters(R,oe.state,Pe,W,ee,I.state.lightProbeGridArray),Ge=fe.getProgramCacheKey(Ae),Ve=re.programs;re.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?W.environment:null,re.fog=W.fog;let ht=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;re.envMap=G.get(R.envMap||re.environment,ht),re.envMapRotation=re.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,Ve===void 0&&(R.addEventListener("dispose",ii),Ve=new Map,re.programs=Ve);let gt=Ve.get(Ge);if(gt!==void 0){if(re.currentProgram===gt&&re.lightsStateVersion===Oe)return Tt(R,Ae),gt}else Ae.uniforms=fe.getUniforms(R),_!==null&&R.isNodeMaterial&&_.build(R,ee,Ae),R.onBeforeCompile(Ae,D),gt=fe.acquireProgram(Ae,Ge),Ve.set(Ge,gt),re.uniforms=Ae.uniforms;let qe=re.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(qe.clippingPlanes=Ie.uniform),Tt(R,Ae),re.needsLights=Ct(R),re.lightsStateVersion=Oe,re.needsLights&&(qe.ambientLightColor.value=oe.state.ambient,qe.lightProbe.value=oe.state.probe,qe.sunLights.value=oe.state.sun,qe.sunLightShadows.value=oe.state.sunShadow,qe.directionalLights.value=oe.state.directional,qe.directionalLightShadows.value=oe.state.directionalShadow,qe.spotLights.value=oe.state.spot,qe.spotLightShadows.value=oe.state.spotShadow,qe.rectAreaLights.value=oe.state.rectArea,qe.ltc_1.value=oe.state.rectAreaLTC1,qe.ltc_2.value=oe.state.rectAreaLTC2,qe.pointLights.value=oe.state.point,qe.pointLightShadows.value=oe.state.pointShadow,qe.hemisphereLights.value=oe.state.hemi,qe.sunShadowMatrix.value=oe.state.sunShadowMatrix,qe.sunShadowCascade.value=oe.state.sunShadowCascade,qe.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,qe.spotLightMatrix.value=oe.state.spotLightMatrix,qe.spotLightMap.value=oe.state.spotLightMap,qe.pointShadowMatrix.value=oe.state.pointShadowMatrix),re.lightProbeGrid=I.state.lightProbeGridArray.length>0,re.currentProgram=gt,re.uniformsList=null,gt}function ut(R){if(R.uniformsList===null){let W=R.currentProgram.getUniforms();R.uniformsList=ua.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Tt(R,W){let ee=O.get(R);ee.outputColorSpace=W.outputColorSpace,ee.batching=W.batching,ee.batchingColor=W.batchingColor,ee.instancing=W.instancing,ee.instancingColor=W.instancingColor,ee.instancingMorph=W.instancingMorph,ee.skinning=W.skinning,ee.morphTargets=W.morphTargets,ee.morphNormals=W.morphNormals,ee.morphColors=W.morphColors,ee.morphTargetsCount=W.morphTargetsCount,ee.numClippingPlanes=W.numClippingPlanes,ee.numIntersection=W.numClipIntersection,ee.vertexAlphas=W.vertexAlphas,ee.vertexTangents=W.vertexTangents,ee.toneMapping=W.toneMapping}function bt(R,W){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;S.setFromMatrixPosition(W.matrixWorld);for(let ee=0,re=R.length;ee<re;ee++){let oe=R[ee];if(oe.texture!==null&&oe.boundingBox.containsPoint(S))return oe}return null}function cn(R,W,ee,re,oe){W.isScene!==!0&&(W=ge),U.resetTextureUnits();let Pe=W.fog,Oe=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?W.environment:null,Ae=te===null?D.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:yt.workingColorSpace,Ge=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,Ve=G.get(re.envMap||Oe,Ge),ht=re.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,gt=!!ee.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),qe=!!ee.morphAttributes.position,Mt=!!ee.morphAttributes.normal,nn=!!ee.morphAttributes.color,zt=wi;re.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(zt=D.toneMapping);let Xt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,An=Xt!==void 0?Xt.length:0,Ke=O.get(re),Dn=I.state.lights;if(pe===!0&&(xe===!0||R!==ue)){let Jt=R===ue&&re.id===le;Ie.setState(re,R,Jt)}let Lt=!1;re.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Dn.state.version||Ke.outputColorSpace!==Ae||oe.isBatchedMesh&&Ke.batching===!1||!oe.isBatchedMesh&&Ke.batching===!0||oe.isBatchedMesh&&Ke.batchingColor===!0&&oe._colorsTexture===null||oe.isBatchedMesh&&Ke.batchingColor===!1&&oe._colorsTexture!==null||oe.isInstancedMesh&&Ke.instancing===!1||!oe.isInstancedMesh&&Ke.instancing===!0||oe.isSkinnedMesh&&Ke.skinning===!1||!oe.isSkinnedMesh&&Ke.skinning===!0||oe.isInstancedMesh&&Ke.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&Ke.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&Ke.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&Ke.instancingMorph===!1&&oe.morphTexture!==null||Ke.envMap!==Ve||re.fog===!0&&Ke.fog!==Pe||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Ie.numPlanes||Ke.numIntersection!==Ie.numIntersection)||Ke.vertexAlphas!==ht||Ke.vertexTangents!==gt||Ke.morphTargets!==qe||Ke.morphNormals!==Mt||Ke.morphColors!==nn||Ke.toneMapping!==zt||Ke.morphTargetsCount!==An||!!Ke.lightProbeGrid!=I.state.lightProbeGridArray.length>0)&&(Lt=!0):(Lt=!0,Ke.__version=re.version);let ri=Ke.currentProgram;Lt===!0&&(ri=Je(re,W,oe),_&&re.isNodeMaterial&&_.onUpdateProgram(re,ri,Ke));let Li=!1,pr=!1,vs=!1,Gt=ri.getUniforms(),rn=Ke.uniforms;if(E.useProgram(ri.program)&&(Li=!0,pr=!0,vs=!0),re.id!==le&&(le=re.id,pr=!0),Ke.needsLights){let Jt=bt(I.state.lightProbeGridArray,oe);Ke.lightProbeGrid!==Jt&&(Ke.lightProbeGrid=Jt,pr=!0)}if(Li||ue!==R){E.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Gt.setValue(z,"projectionMatrix",R.projectionMatrix),Gt.setValue(z,"viewMatrix",R.matrixWorldInverse);let gr=Gt.map.cameraPosition;gr!==void 0&&gr.setValue(z,ie.setFromMatrixPosition(R.matrixWorld)),F.logarithmicDepthBuffer&&Gt.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Gt.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),ue!==R&&(ue=R,pr=!0,vs=!0)}if(Ke.needsLights&&(Dn.state.sunShadowMap.length>0&&Gt.setValue(z,"sunShadowMap",Dn.state.sunShadowMap,U),Dn.state.directionalShadowMap.length>0&&Gt.setValue(z,"directionalShadowMap",Dn.state.directionalShadowMap,U),Dn.state.spotShadowMap.length>0&&Gt.setValue(z,"spotShadowMap",Dn.state.spotShadowMap,U),Dn.state.pointShadowMap.length>0&&Gt.setValue(z,"pointShadowMap",Dn.state.pointShadowMap,U)),oe.isSkinnedMesh){Gt.setOptional(z,oe,"bindMatrix"),Gt.setOptional(z,oe,"bindMatrixInverse");let Jt=oe.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),Gt.setValue(z,"boneTexture",Jt.boneTexture,U))}oe.isBatchedMesh&&(Gt.setOptional(z,oe,"batchingTexture"),Gt.setValue(z,"batchingTexture",oe._matricesTexture,U),Gt.setOptional(z,oe,"batchingIdTexture"),Gt.setValue(z,"batchingIdTexture",oe._indirectTexture,U),Gt.setOptional(z,oe,"batchingColorTexture"),oe._colorsTexture!==null&&Gt.setValue(z,"batchingColorTexture",oe._colorsTexture,U));let mr=ee.morphAttributes;if((mr.position!==void 0||mr.normal!==void 0||mr.color!==void 0)&&X.update(oe,ee,ri),(pr||Ke.receiveShadow!==oe.receiveShadow)&&(Ke.receiveShadow=oe.receiveShadow,Gt.setValue(z,"receiveShadow",oe.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&W.environment!==null&&(rn.envMapIntensity.value=W.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=NM()),pr){if(Gt.setValue(z,"toneMappingExposure",D.toneMappingExposure),Ke.needsLights&&Ut(rn,vs),Pe&&re.fog===!0&&Te.refreshFogUniforms(rn,Pe),Te.refreshMaterialUniforms(rn,re,me,de,I.state.transmissionRenderTarget[R.id]),Ke.needsLights&&Ke.lightProbeGrid){let Jt=Ke.lightProbeGrid;rn.probesSH.value=Jt.texture,rn.probesMin.value.copy(Jt.boundingBox.min),rn.probesMax.value.copy(Jt.boundingBox.max),rn.probesResolution.value.copy(Jt.resolution)}ua.upload(z,ut(Ke),rn,U)}if(re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(ua.upload(z,ut(Ke),rn,U),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Gt.setValue(z,"center",oe.center),Gt.setValue(z,"modelViewMatrix",oe.modelViewMatrix),Gt.setValue(z,"normalMatrix",oe.normalMatrix),Gt.setValue(z,"modelMatrix",oe.matrixWorld),re.uniformsGroups!==void 0){let Jt=re.uniformsGroups;for(let gr=0,xs=Jt.length;gr<xs;gr++){let ed=Jt[gr];Me.update(ed,ri),Me.bind(ed,ri)}}return ri}function Ut(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.sunLights.needsUpdate=W,R.sunLightShadows.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Ct(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return ne},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(R,W,ee){let re=O.get(R);re.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),O.get(R.texture).__webglTexture=W,O.get(R.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ee,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){let ee=O.get(R);ee.__webglFramebuffer=W,ee.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,ee=0){te=R,Y=W,ne=ee;let re=null,oe=!1,Pe=!1;if(R){let Ae=O.get(R);if(Ae.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(z.FRAMEBUFFER,Ae.__webglFramebuffer),he.copy(R.viewport),De.copy(R.scissor),Ue=R.scissorTest,E.viewport(he),E.scissor(De),E.setScissorTest(Ue),le=-1;return}else if(Ae.__webglFramebuffer===void 0)U.setupRenderTarget(R);else if(Ae.__hasExternalTextures)U.rebindTextures(R,O.get(R.texture).__webglTexture,O.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let ht=R.depthTexture;if(Ae.__boundDepthTexture!==ht){if(ht!==null&&O.has(ht)&&(R.width!==ht.image.width||R.height!==ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(R)}}let Ge=R.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Pe=!0);let Ve=O.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ve[W])?re=Ve[W][ee]:re=Ve[W],oe=!0):R.samples>0&&U.useMultisampledRTT(R)===!1?re=O.get(R).__webglMultisampledFramebuffer:Array.isArray(Ve)?re=Ve[ee]:re=Ve,he.copy(R.viewport),De.copy(R.scissor),Ue=R.scissorTest}else he.copy(Be).multiplyScalar(me).floor(),De.copy(nt).multiplyScalar(me).floor(),Ue=V;if(ee!==0&&(re=w),E.bindFramebuffer(z.FRAMEBUFFER,re)&&E.drawBuffers(R,re),E.viewport(he),E.scissor(De),E.setScissorTest(Ue),oe){let Ae=O.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ae.__webglTexture,ee)}else if(Pe){let Ae=W;for(let Ge=0;Ge<R.textures.length;Ge++){let Ve=O.get(R.textures[Ge]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Ge,Ve.__webglTexture,ee,Ae)}}else if(R!==null&&ee!==0){let Ae=O.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ae.__webglTexture,ee)}le=-1};function un(R){let W=O.get(R);return(W.__readFormat!==R.format||W.__readType!==R.type)&&(W.__readFormat=R.format,W.__readType=R.type,W.__formatReadable=F.textureFormatReadable(R.format),W.__typeReadable=F.textureTypeReadable(R.type)),W}this.readRenderTargetPixels=function(R,W,ee,re,oe,Pe,Oe,Ae=0){if(!(R&&R.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=O.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ge=Ge[Oe]),Ge){E.bindFramebuffer(z.FRAMEBUFFER,Ge);try{let Ve=R.textures[Ae],ht=Ve.format,gt=Ve.type;R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ae);let qe=un(Ve);if(qe.__formatReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qe.__typeReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-re&&ee>=0&&ee<=R.height-oe&&z.readPixels(W,ee,re,oe,He.convert(ht),He.convert(gt),Pe)}finally{let Ve=te!==null?O.get(te).__webglFramebuffer:null;E.bindFramebuffer(z.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(R,W,ee,re,oe,Pe,Oe,Ae=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=O.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ge=Ge[Oe]),Ge)if(W>=0&&W<=R.width-re&&ee>=0&&ee<=R.height-oe){E.bindFramebuffer(z.FRAMEBUFFER,Ge);let Ve=R.textures[Ae],ht=Ve.format,gt=Ve.type;R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ae);let qe=un(Ve);if(qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Mt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Mt),z.bufferData(z.PIXEL_PACK_BUFFER,Pe.byteLength,z.STREAM_READ),z.readPixels(W,ee,re,oe,He.convert(ht),He.convert(gt),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let nn=te!==null?O.get(te).__webglFramebuffer:null;E.bindFramebuffer(z.FRAMEBUFFER,nn);let zt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await kp(z,zt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Mt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Pe),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(Mt),z.deleteSync(zt),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,ee=0){let re=Math.pow(2,-ee),oe=Math.floor(R.image.width*re),Pe=Math.floor(R.image.height*re),Oe=W!==null?W.x:0,Ae=W!==null?W.y:0;U.setTexture2D(R,0),z.copyTexSubImage2D(z.TEXTURE_2D,ee,0,0,Oe,Ae,oe,Pe),E.unbindTexture()},this.copyTextureToTexture=function(R,W,ee=null,re=null,oe=0,Pe=0){let Oe,Ae,Ge,Ve,ht,gt,qe,Mt,nn,zt=R.isCompressedTexture?R.mipmaps[Pe]:R.image;if(ee!==null)Oe=ee.max.x-ee.min.x,Ae=ee.max.y-ee.min.y,Ge=ee.isBox3?ee.max.z-ee.min.z:1,Ve=ee.min.x,ht=ee.min.y,gt=ee.isBox3?ee.min.z:0;else{let rn=Math.pow(2,-oe);Oe=Math.floor(zt.width*rn),Ae=Math.floor(zt.height*rn),R.isDataArrayTexture?Ge=zt.depth:R.isData3DTexture?Ge=Math.floor(zt.depth*rn):Ge=1,Ve=0,ht=0,gt=0}re!==null?(qe=re.x,Mt=re.y,nn=re.z):(qe=0,Mt=0,nn=0);let Xt=He.convert(W.format),An=He.convert(W.type),Ke;W.isData3DTexture?(U.setTexture3D(W,0),Ke=z.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(U.setTexture2DArray(W,0),Ke=z.TEXTURE_2D_ARRAY):(U.setTexture2D(W,0),Ke=z.TEXTURE_2D),E.activeTexture(z.TEXTURE0),E.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),E.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),E.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment);let Dn=E.getParameter(z.UNPACK_ROW_LENGTH),Lt=E.getParameter(z.UNPACK_IMAGE_HEIGHT),ri=E.getParameter(z.UNPACK_SKIP_PIXELS),Li=E.getParameter(z.UNPACK_SKIP_ROWS),pr=E.getParameter(z.UNPACK_SKIP_IMAGES);E.pixelStorei(z.UNPACK_ROW_LENGTH,zt.width),E.pixelStorei(z.UNPACK_IMAGE_HEIGHT,zt.height),E.pixelStorei(z.UNPACK_SKIP_PIXELS,Ve),E.pixelStorei(z.UNPACK_SKIP_ROWS,ht),E.pixelStorei(z.UNPACK_SKIP_IMAGES,gt);let vs=R.isDataArrayTexture||R.isData3DTexture,Gt=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){let rn=O.get(R),mr=O.get(W),Jt=O.get(rn.__renderTarget),gr=O.get(mr.__renderTarget);E.bindFramebuffer(z.READ_FRAMEBUFFER,Jt.__webglFramebuffer),E.bindFramebuffer(z.DRAW_FRAMEBUFFER,gr.__webglFramebuffer);for(let xs=0;xs<Ge;xs++)vs&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,O.get(R).__webglTexture,oe,gt+xs),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,O.get(W).__webglTexture,Pe,nn+xs)),z.blitFramebuffer(Ve,ht,Oe,Ae,qe,Mt,Oe,Ae,z.DEPTH_BUFFER_BIT,z.NEAREST);E.bindFramebuffer(z.READ_FRAMEBUFFER,null),E.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(oe!==0||R.isRenderTargetTexture||O.has(R)){let rn=O.get(R),mr=O.get(W);E.bindFramebuffer(z.READ_FRAMEBUFFER,P),E.bindFramebuffer(z.DRAW_FRAMEBUFFER,k);for(let Jt=0;Jt<Ge;Jt++)vs?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,rn.__webglTexture,oe,gt+Jt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,rn.__webglTexture,oe),Gt?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,mr.__webglTexture,Pe,nn+Jt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,mr.__webglTexture,Pe),oe!==0?z.blitFramebuffer(Ve,ht,Oe,Ae,qe,Mt,Oe,Ae,z.COLOR_BUFFER_BIT,z.NEAREST):Gt?z.copyTexSubImage3D(Ke,Pe,qe,Mt,nn+Jt,Ve,ht,Oe,Ae):z.copyTexSubImage2D(Ke,Pe,qe,Mt,Ve,ht,Oe,Ae);E.bindFramebuffer(z.READ_FRAMEBUFFER,null),E.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Gt?R.isDataTexture||R.isData3DTexture?z.texSubImage3D(Ke,Pe,qe,Mt,nn,Oe,Ae,Ge,Xt,An,zt.data):W.isCompressedArrayTexture?z.compressedTexSubImage3D(Ke,Pe,qe,Mt,nn,Oe,Ae,Ge,Xt,zt.data):z.texSubImage3D(Ke,Pe,qe,Mt,nn,Oe,Ae,Ge,Xt,An,zt):R.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Pe,qe,Mt,Oe,Ae,Xt,An,zt.data):R.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Pe,qe,Mt,zt.width,zt.height,Xt,zt.data):z.texSubImage2D(z.TEXTURE_2D,Pe,qe,Mt,Oe,Ae,Xt,An,zt);E.pixelStorei(z.UNPACK_ROW_LENGTH,Dn),E.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Lt),E.pixelStorei(z.UNPACK_SKIP_PIXELS,ri),E.pixelStorei(z.UNPACK_SKIP_ROWS,Li),E.pixelStorei(z.UNPACK_SKIP_IMAGES,pr),Pe===0&&W.generateMipmaps&&z.generateMipmap(Ke),E.unbindTexture()},this.initRenderTarget=function(R){O.get(R).__webglFramebuffer===void 0&&U.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?U.setTextureCube(R,0):R.isData3DTexture?U.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?U.setTexture2DArray(R,0):U.setTexture2D(R,0),E.unbindTexture()},this.resetState=function(){Y=0,ne=0,te=null,E.reset(),ze.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}};var pa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ei=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},DM=new zi(-1,1,1,-1,0,1),tf=class extends Yt{constructor(){super(),this.setAttribute("position",new At([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new At([0,2,0,0,2,0],2))}},OM=new tf,Or=class{constructor(e){this._mesh=new Fe(OM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,DM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Yc=class extends ei{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof tn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=fr.clone(e.uniforms),this.material=new tn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Or(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var wo=class extends ei{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}},Kc=class extends ei{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Zc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ot);this._width=n.width,this._height=n.height,t=new pn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Tn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Yc(pa),this.copyPass.material.blending=ci,this.timer=new ro}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let r=0,s=this.passes.length;r<s;r++){let a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}wo!==void 0&&(a instanceof wo?n=!0:a instanceof Kc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ot);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Jc=class extends ei{constructor(e,t,n=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new $e}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}};var _0={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new $e(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ma=class i extends ei{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e!==void 0?new ot(e.x,e.y):new ot(256,256),this.clearColor=new $e(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new pn(s,a,{type:Tn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let l=0;l<this.nMips;l++){let h=new pn(s,a,{type:Tn,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+l,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let f=new pn(s,a,{type:Tn,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+l,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}let o=_0;this.highPassUniforms=fr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new tn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let l=0;l<this.nMips;l++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[l])),this.separableBlurMaterials[l].uniforms.invSize.value=new ot(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new K(1,1,1),new K(1,1,1),new K(1,1,1),new K(1,1,1),new K(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=fr.clone(pa.uniforms),this.blendMaterial=new tn({uniforms:this.copyUniforms,vertexShader:pa.vertexShader,fragmentShader:pa.fragmentShader,premultipliedAlpha:!0,blending:Vi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new $e,this._oldClearAlpha=1,this._basic=new mn,this._fsQuad=new Or(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.invSize.value=new ot(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(e,t,n,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let r=[],s=[];for(let a=1;a<e;a+=2){let o=t[a],c=a+1<e?t[a+1]:0,u=o+c;r.push((a*o+(a+1)*c)/u),s.push(u)}return new tn({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new ot(.5,.5)},direction:{value:new ot(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:s}},vertexShader:`

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

				}`})}};ma.BlurDirectionX=new ot(1,0);ma.BlurDirectionY=new ot(0,1);var Ao={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var jc=class extends ei{constructor(){super(),this.isOutputPass=!0,this.uniforms=fr.clone(Ao.uniforms),this.material=new Js({name:Ao.name,uniforms:this.uniforms,vertexShader:Ao.vertexShader,fragmentShader:Ao.fragmentShader}),this._fsQuad=new Or(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},yt.getTransfer(this._outputColorSpace)===Dt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===oo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===lo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===co?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ls?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ho?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===fo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===uo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var $c=class extends wr{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new en;e.deleteAttribute("uv");let t=new Kt({side:Mn}),n=new Kt,r=new Gn(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let s=new Fe(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let a=new es(e,n,6),o=new jt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new Fe(e,ga(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let u=new Fe(e,ga(50));u.position.set(-16.109,18.021,-8.207),u.scale.set(.1,2.425,2.751),this.add(u);let l=new Fe(e,ga(17));l.position.set(14.904,12.198,-1.832),l.scale.set(.15,4.265,6.331),this.add(l);let h=new Fe(e,ga(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let f=new Fe(e,ga(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let p=new Fe(e,ga(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function ga(i){return new $a({color:0,emissive:16777215,emissiveIntensity:i})}var It=128;function Ro(i,e,t){var n=i*374761393+e*668265263+t*982451653|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function S0(i,e,t,n){var r=Math.floor(i),s=Math.floor(e),a=i-r,o=e-s,c=a*a*(3-2*a),u=o*o*(3-2*o);function l(y,g){return Ro((y%t+t)%t,(g%t+t)%t,n)}var h=l(r,s),f=l(r+1,s),p=l(r,s+1),v=l(r+1,s+1);return h+(f-h)*c+(p-h)*u+(h-f-p+v)*c*u}function Xi(i,e,t,n){for(var r=0,s=.5,a=1,o=0;o<t;o++)r+=s*S0(i*a,e*a,8*a,n+o*17),s*=.5,a*=2;return r}function ui(i,e,t){return i+(e-i)*t}function nu(i){return i<0?0:i>1?1:i}function dr(i){return[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255]}function UM(i,e){e=e||{};for(var t=new Uint8ClampedArray(It*It*4),n=new Float32Array(It*It),r=e.emissive?new Uint8ClampedArray(It*It*4):null,s=new Uint8ClampedArray(It*It*4),a=0;a<It;a++)for(var o=0;o<It;o++){var c=i(o/It,a/It,o,a),u=a*It+o,l=u*4;t[l]=c.c[0]*255,t[l+1]=c.c[1]*255,t[l+2]=c.c[2]*255,t[l+3]=255,n[u]=c.h;var h=(c.r===void 0?.85:c.r)*255;if(s[l]=h,s[l+1]=h,s[l+2]=h,s[l+3]=255,r){var f=c.e||[0,0,0];r[l]=f[0]*255,r[l+1]=f[1]*255,r[l+2]=f[2]*255,r[l+3]=255}}return{map:Qc(t,!0),normalMap:Qc(HM(n,e.bump||3),!1),roughnessMap:Qc(s,!1),emissiveMap:r?Qc(r,!0):null}}function HM(i,e){for(var t=new Uint8ClampedArray(It*It*4),n=0;n<It;n++)for(var r=0;r<It;r++){var s=i[n*It+(r+It-1)%It],a=i[n*It+(r+1)%It],o=i[(n+It-1)%It*It+r],c=i[(n+1)%It*It+r],u=(s-a)*e,l=(o-c)*e,h=1,f=Math.sqrt(u*u+l*l+h*h),p=(n*It+r)*4;t[p]=(u/f*.5+.5)*255,t[p+1]=(l/f*.5+.5)*255,t[p+2]=(h/f*.5+.5)*255,t[p+3]=255}return t}function Qc(i,e){var t;if(typeof document!="undefined"){var n=document.createElement("canvas");n.width=It,n.height=It,n.getContext("2d").putImageData(new ImageData(i,It,It),0,0),t=new Ar(n)}else t=new sr(i,It,It);return t.wrapS=t.wrapT=oi,t.colorSpace=e?Wt:Qn,t.anisotropy=8,t.magFilter=qt,t.needsUpdate=!0,t}function FM(i,e,t,n){var r=dr(i),s=dr(e),a=dr(t);return function(o,c){var u=8,l=Math.floor(c*u),h=l%2?.5:0,f=o*4+h,p=Math.floor(f),v=f-p,y=c*u-l,g=Math.min(v,1-v)*4*.5,m=Math.min(y,1-y)*.5,x=Math.min(g,m*2),A=Xi(o*8,c*8,4,n),S=Ro(p&3,l,n),C=Xi(o*24,c*24,2,n+5)>.72?.25:0;if(x<.045){var I=.8+A*.4;return{c:[a[0]*I,a[1]*I,a[2]*I],h:.1+A*.1,r:.95}}var L=nu(S*.6+A*.5),M=.8+A*.35-C;return{c:[ui(s[0],r[0],L)*M,ui(s[1],r[1],L)*M,ui(s[2],r[2],L)*M],h:.6+A*.3-C+Math.min(x,.12)*2,r:.8+A*.15}}}function BM(i,e,t){var n=dr(i),r=dr(e);return function(s,a){var o=s*3,c=a*4+Math.floor(s*3)%2*.5,u=o-Math.floor(o),l=c-Math.floor(c),h=Ro(Math.floor(o)%3,Math.floor(c)%4,t),f=Math.min(u,1-u,(l<.5?l:1-l)*1.5),p=Xi(s*6,a*6,5,t);if(f<.012)return{c:[.62,.42,.2],h:.35,r:.35};if(f<.035)return{c:[r[0]*.5,r[1]*.5,r[2]*.5],h:.1,r:.95};var v=nu(p*.8+h*.4),y=.8+p*.3;return{c:[ui(r[0],n[0],v)*y,ui(r[1],n[1],v)*y,ui(r[2],n[2],v)*y],h:.5+p*.5,r:.9}}}function iu(i,e,t){var n=dr(i),r=dr(e);return function(s,a,o,c){var u=s*2%1,l=a*2%1,h=Math.min(u,1-u,l,1-l)<.012,f=[[.06,.06],[.94,.06],[.06,.94],[.94,.94]].some(function(g){var m=u-g[0],x=l-g[1];return m*m+x*x<9e-4}),p=Xi(s*6,a*16,4,t),v=S0(s*90,a*4,90,t+3)>.9?.15:0,y=.75+p*.35+v;return h?{c:[r[0]*.4,r[1]*.4,r[2]*.4],h:.1,r:.6}:f?{c:[n[0]*1.2,n[1]*1.2,n[2]*1.2],h:1,r:.35}:{c:[ui(r[0],n[0],p)*y,ui(r[1],n[1],p)*y,ui(r[2],n[2],p)*y],h:.5+p*.1,r:.45+p*.2}}}function kM(i){var e=iu(6179892,2234898,i);return function(t,n,r,s){var a=e(t,n,r,s),o=Math.abs(n-.5)<.025&&t*4%1>.15&&t*4%1<.85,c=Math.abs(n-.15)<.04&&Math.abs(t*2%1-.5)<.12;return o?{c:[.2,.7,.8],h:.3,r:.3,e:[.15,.85,1]}:c?{c:[.9,.7,.3],h:.8,r:.3,e:[1,.6,.15]}:(a.e=[0,0,0],a)}}function rf(i,e){return function(t,n){var r=t*2,s=Math.floor(n*3),a=n*3;r+=s%2*.5;var o=r-Math.floor(r),c=a-s,u=Math.min(o,1-o,c,1-c)*2,l=Xi(t*6,n*6,5,i),h=Ro(Math.floor(r)&1,s%3,i),f=.55+l*.45+h*.15;return u<.025?e?{c:[.25,.03,.04],h:.05,r:.6,e:[.12,.01,.02]}:{c:[.9,.06,.12],h:.05,r:.3,e:[.9,.04,.1]}:u<.05?{c:[.05,.04,.045],h:.15,r:.9,e:[.18,.01,.02]}:{c:[.13*f,.115*f,.12*f],h:.5+l*.5,r:.85-l*.2,e:[0,0,0]}}}function zM(i){return function(e,t){var n=Xi(e*4,t*4,4,i),r=Xi(e*9+n*2,t*9,3,i+3),s=nu(.35+r*.9-(n>.62?(n-.62)*3:0));return{c:[.3+s*.55,.01+s*.04,.03+s*.06],h:.2+r*.2,r:.2,e:[.18+s*.62,s*.03,.02+s*.06]}}}function nf(i){var e=iu(9071170,3154970,31),t=i==="red"?[.9,.12,.08]:i==="blue"?[.15,.35,1]:null;return function(n,r,s,a){var o=e(n,r,s,a),c=n*8%1,u=(r-.88)/.12,l=Math.abs(c-.5)+Math.abs(u-.5)<.32;return r>.88?{c:l?[.2,.13,.07]:[.9,.68,.3],h:l?.3:.85,r:l?.7:.3,e:[0,0,0]}:Math.abs(n-.5)<.012?{c:[.05,.05,.05],h:0,r:.8,e:[0,0,0]}:t&&Math.abs(r-.45)<.05?{c:t,h:.7,r:.3,e:[t[0]*.8,t[1]*.8,t[2]*.8]}:(o.e=[0,0,0],o)}}function y0(i){var e=iu(8019514,2760726,41);return function(t,n,r,s){var a=e(t,n,r,s),o=Math.abs(t-.5)<.18&&Math.abs(n-.5)<.26;if(o){var c=Math.abs(t-.5)<.04&&(i?n>.5&&n<.72:n>.28&&n<.5),u=Math.abs(t-.5)<.08&&Math.abs(n-(i?.3:.7))<.04,l=i?[.35,.95,1]:[1,.1,.16];return u?{c:l,h:.9,r:.2,e:l}:c?{c:[.8,.8,.75],h:1,r:.3,e:[0,0,0]}:{c:[.06,.07,.06],h:.2,r:.7,e:[0,0,0]}}return a.e=[0,0,0],a}}function tu(i,e,t,n){var r=dr(i),s=dr(e);return function(a,o){var c=a*4%1,u=o*4%1,l=Math.min(c,1-c,u,1-u),h=Ro(Math.floor(a*4),Math.floor(o*4),t),f=Xi(a*8,o*8,4,t);if(l<.03)return{c:[s[0]*.4,s[1]*.4,s[2]*.4],h:.05,r:.95};if(n&&(c*10%1<.3||u*10%1<.3)&&l>.08)return{c:[s[0]*.3,s[1]*.3,s[2]*.3],h:.1,r:.6};var p=nu(h*.5+f*.6),v=.7+f*.4;return{c:[ui(s[0],r[0],p)*v,ui(s[1],r[1],p)*v,ui(s[2],r[2],p)*v],h:.5+f*.3,r:n?.5:.8}}}function GM(i){var e=rf(i,!0);return function(t,n){var r=e(t,n),s=Xi(t*3,n*3,3,i+20)>.66;if(s){var a=Xi(t*10,n*10,3,i+21);return{c:[1,.1+a*.18,.16],h:0,r:.25,e:[1.3,.08+a*.16,.18]}}return r}}function VM(i){return tu(2762274,1183760,i,!1)}var M0={};function bn(i,e,t){return M0[i]||(M0[i]=UM(e,t))}function sf(i){switch(i){case 1:return bn("brick",FM(8275506,4071446,3813414,1),{bump:4});case 2:return bn("stone",BM(12365458,7234642,2),{bump:4});case 3:return bn("metal",iu(10123846,3811862,3),{bump:3});case 4:return bn("tech",kM(4),{emissive:!0,bump:3});case 5:return bn("hell",rf(5),{emissive:!0,bump:5});case 6:return bn("door",nf(null),{emissive:!0,bump:3});case 7:return bn("doorRed",nf("red"),{emissive:!0,bump:3});case 8:return bn("doorBlue",nf("blue"),{emissive:!0,bump:3});case 9:return bn("switchOff",y0(!1),{emissive:!0,bump:3});case 10:return bn("switchOn",y0(!0),{emissive:!0,bump:3})}return sf(1)}var eu=null;function T0(){if(eu)return eu;var i=128,e=new Uint8ClampedArray(i*i*4),t=44;function n(c,u,l,h,f,p){if(!(c<0||u<0||c>=i||u>=i)){var v=(u*i+c)*4;e[v]=l,e[v+1]=h,e[v+2]=f,e[v+3]=Math.max(e[v+3],p)}}for(var r=10;r<118;r++)t+=r%7===0?1:r%9===0?-1:0,n(t-1,r,200,190,170,150),n(t+2,r,200,190,170,150),n(t,r,12,10,8,255),n(t+1,r,12,10,8,255);for(var s=0;s<16;s++)n(t+3+s,60+s,12,10,8,255),n(t+3+s,59+s,200,190,170,140);var a;if(typeof document!="undefined"){var o=document.createElement("canvas");o.width=o.height=i,o.getContext("2d").putImageData(new ImageData(e,i,i),0,0),a=new Ar(o)}else a=new sr(e,i,i);return a.colorSpace=Wt,a.magFilter=qt,a.needsUpdate=!0,eu=new Kt({map:a,transparent:!0,alphaTest:.3,depthWrite:!1,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1}),eu}function af(i){switch(i){case"tech":return bn("fTech",tu(6968888,2366482,11,!0),{bump:3});case"hell":return bn("fHell",GM(12),{emissive:!0,bump:4});case"mercury":return bn("fMercury",zM(16),{emissive:!0,bump:1});case"ceilTech":return bn("cTech",tu(4865580,1577998,13,!0),{bump:2});case"ceilHell":return bn("cHell",rf(14,!0),{emissive:!0,bump:4});case"ceilDark":return bn("cDark",VM(15),{bump:2});default:return bn("fSlab",tu(9340014,3946026,10,!1),{bump:3})}}function Yi(i,e){var t=new Kt(Object.assign({map:i.map,normalMap:i.normalMap,roughnessMap:i.roughnessMap,roughness:1,metalness:.05},e||{}));return i.emissiveMap&&(t.emissiveMap=i.emissiveMap,t.emissive=new $e(16777215),t.emissiveIntensity=1.6),t}function au(){this.groups={}}au.prototype.quad=function(i,e,t,n,r,s,a){var o=this.groups[i]||(this.groups[i]={pos:[],nor:[],uv:[]});[e,t,n,e,n,r].forEach(function(c){o.pos.push(c[0],c[1],c[2]),o.nor.push(s[0],s[1],s[2])}),[a[0],a[1],a[2],a[0],a[2],a[3]].forEach(function(c){o.uv.push(c[0],c[1])})};au.prototype.meshes=function(i){var e=[];for(var t in this.groups){var n=this.groups[t],r=new Yt;r.setAttribute("position",new At(n.pos,3)),r.setAttribute("normal",new At(n.nor,3)),r.setAttribute("uv",new At(n.uv,2));var s=new Fe(r,i(t));s.name=t,e.push(s)}return e};function ru(i,e,t,n,r,s,a){if(!(a-s<.001)){var o,c,u,l,h;r==="E"?(o=[t+1,n+1],c=[t+1,n],u=[-1,0,0],l=n+1,h=n):r==="W"?(o=[t,n],c=[t,n+1],u=[1,0,0],l=n,h=n+1):r==="S"?(o=[t,n+1],c=[t+1,n+1],u=[0,0,-1],l=t,h=t+1):(o=[t+1,n],c=[t,n],u=[0,0,1],l=t+1,h=t),i.quad(e,[o[0],s,o[1]],[c[0],s,c[1]],[c[0],a,c[1]],[o[0],a,o[1]],u,[[l,s],[h,s],[h,a],[l,a]])}}var of={E:[1,0],W:[-1,0],S:[0,1],N:[0,-1]};function Co(i,e,t,n,r,s,a,o){i.quad(e,[t,a,r],[t,a,o],[s,a,o],[s,a,r],[0,1,0],[[t,r],[t,o],[s,o],[s,r]]),i.quad(e,[t,n,o],[t,n,r],[s,n,r],[s,n,o],[0,-1,0],[[t,o],[t,r],[s,r],[s,o]]),i.quad(e,[t,n,o],[s,n,o],[s,a,o],[t,a,o],[0,0,1],[[t,n],[s,n],[s,a],[t,a]]),i.quad(e,[s,n,r],[t,n,r],[t,a,r],[s,a,r],[0,0,-1],[[s,n],[t,n],[t,a],[s,a]]),i.quad(e,[s,n,o],[s,n,r],[s,a,r],[s,a,o],[1,0,0],[[o,n],[r,n],[r,a],[o,a]]),i.quad(e,[t,n,r],[t,n,o],[t,a,o],[t,a,r],[-1,0,0],[[r,n],[o,n],[o,a],[r,a]])}function lf(i,e,t,n,r,s,a,o){r==="E"?Co(i,e,t+1-o,s,n,t+1,s+a,n+1):r==="W"?Co(i,e,t,s,n,t+o,s+a,n+1):r==="S"?Co(i,e,t,s,n+1-o,t+1,s+a,n+1):Co(i,e,t,s,n,t+1,s+a,n+o)}function b0(i){for(var e={},t=0;t<i.cells.length;t++){var n=i.cells[t];n>=1&&n<=5&&(e[n]=(e[n]||0)+1)}var r=1,s=-1;for(var a in e)e[a]>s&&(s=e[a],r=+a);return r}function WM(i,e,t){var n=b0(i);return[[1,0],[-1,0],[0,1],[0,-1]].forEach(function(r){var s=Yn(i,e+r[0],t+r[1]);s>=1&&s<=5&&(n=s)}),n}function E0(i,e){function t(ie){return e&&e.texture("tex:"+ie)||sf(ie)}function n(ie){return e&&e.texture("tex:"+ie)||af(ie)}var r=i.W,s=i.L,a=new au,o=new vt,c="wall"+b0(r),u={};r.lifts.forEach(function(ie){u[ie.x+","+ie.z]=ie});var l=[],h={};(s.events||[]).forEach(function(ie){(ie.do||[]).forEach(function $(ge){ge.after&&(ge.do||[]).forEach($);var Ce=ge.raise||ge.lower;if(Ce){var We=Math.min(r.floor[Ce[1]*r.mw+Ce[0]],ge.to);l.push({box:Ce,lo:We});for(var z=Ce[1];z<=Ce[3];z++)for(var ct=Ce[0];ct<=Ce[2];ct++)h[ct+","+z]=We}})});var f=[];function p(ie,$){var ge=Yn(r,ie,$);return ge===0||!!gi[ge]}function v(ie,$){var ge=u[ie+","+$];return ge?ge.bottom:h[ie+","+$]!==void 0?h[ie+","+$]:hn(r,ie,$)}for(var y=0;y<r.mh;y++)for(var g=0;g<r.mw;g++)if(p(g,y)){var m=v(g,y),x=Ni(r,g,y);!u[g+","+y]&&h[g+","+y]===void 0&&a.quad("floor",[g,m,y],[g,m,y+1],[g+1,m,y+1],[g+1,m,y],[0,1,0],[[g,y],[g,y+1],[g+1,y+1],[g+1,y]]),a.quad("ceil",[g,x,y],[g+1,x,y],[g+1,x,y+1],[g,x,y+1],[0,-1,0],[[g,y],[g+1,y],[g+1,y+1],[g,y+1]]);for(var A in of){var S=g+of[A][0],C=y+of[A][1],I=Yn(r,S,C);if(!p(S,C)){if(I===9||I===12){var L={x:S,z:C,faces:new au,dir:A,exit:I===9};ru(L.faces,"sw",g,y,A,m,x),f.push(L)}else ru(a,"wall"+(I>=1&&I<=5?I:1),g,y,A,m,x);gi[Yn(r,g,y)]||(lf(a,"trim",g,y,A,m,.09,.035),x-m>2&&lf(a,"trim",g,y,A,x-.12,.08,.05));continue}var M=v(S,C),T=Ni(r,S,C);M>m&&(ru(a,c,g,y,A,m,Math.min(M,x)),M-m>.3&&lf(a,"trim",g,y,A,M-.07,.07,.06)),T<x&&ru(a,c,g,y,A,Math.max(T,m),x)}}for(var D=0;D<r.mh;D++)for(var H=0;H<r.mw;H++)if(!(D%3!==1||Yn(r,H,D)!==0)){var _=Ni(r,H,D);_-hn(r,H,D)<2.6||Co(a,"beam",H,_-.2,D+.38,H+1,_,D+.62)}var w={};function P(ie){return w[ie]?w[ie]:ie==="floor"?w[ie]=Yi(n(s.floor)):ie==="ceil"?w[ie]=Yi(n(s.ceil)):ie==="trim"?w[ie]=Yi(t(3),{color:10127992,metalness:.6,roughness:.5}):ie==="beam"?w[ie]=Yi(t(3),{color:6969930,metalness:.4}):w[ie]=Yi(t(+ie.slice(4)))}a.meshes(P).forEach(function(ie){ie.receiveShadow=!0,o.add(ie)});var k=Yi(t(9)),Y=Yi(t(10));f.forEach(function(ie){ie.faces.meshes(function(){return k}).forEach(function($){ie.mesh=$,o.add($)})});for(var ne=P("floor"),te=P("trim"),le=l.map(function(ie){var $=ie.box,ge=$[2]-$[0]+1,Ce=$[3]-$[1]+1,We=3,z=new en(ge,We,Ce);su(z,ge,We);var ct=new Fe(z,[te,te,ne,te,te,te]);return ct.userData={i:$[1]*r.mw+$[0],depth:We,cx:$[0]+ge/2,cz:$[1]+Ce/2},o.add(ct),ct}),ue=e&&e.texture("tex:mercury")||af("mercury"),he=new Kt({color:10104880,emissive:16777215,emissiveIntensity:.9,roughness:.2,map:ue.map,emissiveMap:ue.map}),De=[],Ue=0;Ue<r.mh;Ue++)for(var dt=0;dt<r.mw;dt++){var je=Ue*r.mw+dt;if(r.lava[je]){var it=new Fe(new Jn(1,1),he);it.rotation.x=-Math.PI/2,it.position.set(dt+.5,r.floor[je]+.04,Ue+.5),it.userData.i=je,o.add(it),De.push(it)}}var de=[];for(var me in r.doors){var Ee=r.doors[me],rt=hn(r,Ee.x,Ee.z),Be=Ni(r,Ee.x,Ee.z),nt=Be-rt,V;if(Ee.secret){V=new Fe(new en(1,nt,1),P("wall"+WM(r,Ee.x,Ee.z))),su(V.geometry,1,nt);var Z=T0();[[0,.502,0],[Math.PI,-.502,0],[Math.PI/2,0,.502],[-Math.PI/2,0,-.502]].forEach(function(ie){var $=new Fe(new Jn(.9,Math.min(nt,1.9)*.9),Z);$.rotation.y=ie[0],$.position.set(ie[2],0,ie[1]),V.add($)})}else{var pe=p(Ee.x-1,Ee.z)&&p(Ee.x+1,Ee.z),xe=pe?new en(.22,nt,1):new en(1,nt,.22);V=new Fe(xe,Yi(t(Ee.locked==="red"?7:Ee.locked==="blue"?8:6))),su(V.geometry,1,nt)}V.position.set(Ee.x+.5,rt+nt/2,Ee.z+.5),V.userData={door:Ee,baseY:rt+nt/2,h:nt},V.castShadow=!0,o.add(V),de.push(V)}var se=r.lifts.map(function(ie){var $=Math.max(.2,ie.top-ie.bottom+.2),ge=new Fe(new en(.98,$,.98),Yi(t(4)));return su(ge.geometry,1,$),ge.userData={lift:ie,h:$},o.add(ge),ge});return{group:o,update:function(){de.forEach(function($){var ge=$.userData.door;$.position.y=$.userData.baseY+ge.open*$.userData.h*.98,$.visible=ge.open<.99}),se.forEach(function($){var ge=$.userData.lift;$.position.set(ge.x+.5,ge.pos-$.userData.h/2,ge.z+.5)}),f.forEach(function($){if($.mesh){var ge=r.cells[$.z*r.mw+$.x];$.mesh.material=ge===10||ge===13?Y:k}}),le.forEach(function($){$.position.set($.userData.cx,r.floor[$.userData.i]-$.userData.depth/2,$.userData.cz)});var ie=performance.now()/1e3;he.map.offset.set(ie*.02,ie*.013),he.emissiveIntensity=.85+Math.sin(ie*2.3)*.12,De.forEach(function($){$.visible=!!r.lava[$.userData.i],$.position.y=r.floor[$.userData.i]+.04})}}}function su(i,e,t){for(var n=i.attributes.uv,r=0;r<n.count;r++){var s=Math.floor(r/4),a=(s<4,e),o=s===2||s===3?e:t;n.setXY(r,n.getX(r)*a,n.getY(r)*o)}n.needsUpdate=!0}var Io=new K;function hi(i,e,t,n,r,s){let a=2*Math.PI*r/4,o=Math.max(s-2*r,0),c=Math.PI/4;Io.copy(e),Io[n]=0,Io.normalize();let u=.5*a/(a+o),l=1-Io.angleTo(i)/c;return Math.sign(Io[t])===1?l*u:o/(a+o)+u+u*(1-l)}var ou=class i extends en{constructor(e=1,t=1,n=1,r=2,s=.1){let a=r*2+1;if(s=Math.min(e/2,t/2,n/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:r,radius:s},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new K,u=new K,l=new K(e,t,n).divideScalar(2).subScalar(s),h=this.attributes.position.array,f=this.attributes.normal.array,p=this.attributes.uv.array,v=h.length/6,y=new K,g=.5/a;for(let m=0,x=0;m<h.length;m+=3,x+=2)switch(c.fromArray(h,m),u.copy(c),u.x-=Math.sign(u.x)*g,u.y-=Math.sign(u.y)*g,u.z-=Math.sign(u.z)*g,u.normalize(),h[m+0]=l.x*Math.sign(c.x)+u.x*s,h[m+1]=l.y*Math.sign(c.y)+u.y*s,h[m+2]=l.z*Math.sign(c.z)+u.z*s,f[m+0]=u.x,f[m+1]=u.y,f[m+2]=u.z,Math.floor(m/v)){case 0:y.set(1,0,0),p[x+0]=hi(y,u,"z","y",s,n),p[x+1]=1-hi(y,u,"y","z",s,t);break;case 1:y.set(-1,0,0),p[x+0]=1-hi(y,u,"z","y",s,n),p[x+1]=1-hi(y,u,"y","z",s,t);break;case 2:y.set(0,1,0),p[x+0]=1-hi(y,u,"x","z",s,e),p[x+1]=hi(y,u,"z","x",s,n);break;case 3:y.set(0,-1,0),p[x+0]=1-hi(y,u,"x","z",s,e),p[x+1]=1-hi(y,u,"z","x",s,n);break;case 4:y.set(0,0,1),p[x+0]=1-hi(y,u,"x","y",s,e),p[x+1]=1-hi(y,u,"y","x",s,t);break;case 5:y.set(0,0,-1),p[x+0]=hi(y,u,"x","y",s,e),p[x+1]=1-hi(y,u,"y","x",s,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function cf(i,e){if(e===wh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===aa||e===Mo){let t=i.getIndex();if(t===null){let s=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)s.push(o);i.setIndex(s),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,r=[];if(e===aa)for(let s=1;s<=n;s++)r.push(t.getX(0)),r.push(t.getX(s)),r.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(r.push(t.getX(s)),r.push(t.getX(s+1)),r.push(t.getX(s+2))):(r.push(t.getX(s+2)),r.push(t.getX(s+1)),r.push(t.getX(s)));return r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(r),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function lu(i){let e=new Map,t=new Map,n=i.clone();return w0(i,n,function(r,s){e.set(s,r),t.set(r,s)}),n.traverse(function(r){if(!r.isSkinnedMesh)return;let s=r,a=e.get(r),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function w0(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)w0(i.children[n],e.children[n],t)}var cu=class extends ki{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new gf(t)}),this.register(function(t){return new vf(t)}),this.register(function(t){return new wf(t)}),this.register(function(t){return new Af(t)}),this.register(function(t){return new Rf(t)}),this.register(function(t){return new _f(t)}),this.register(function(t){return new yf(t)}),this.register(function(t){return new Mf(t)}),this.register(function(t){return new Sf(t)}),this.register(function(t){return new mf(t)}),this.register(function(t){return new Tf(t)}),this.register(function(t){return new xf(t)}),this.register(function(t){return new Ef(t)}),this.register(function(t){return new bf(t)}),this.register(function(t){return new df(t)}),this.register(function(t){return new uu(t,Et.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new uu(t,Et.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Cf(t)})}load(e,t,n,r){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let u=hr.extractUrlBase(e);a=hr.resolveURL(u,this.path)}else a=hr.extractUrlBase(e);this.manager.itemStart(e);let o=function(u){r?r(u):console.error(u),s.manager.itemError(e),s.manager.itemEnd(e)},c=new js(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){try{s.parse(u,a,function(l){t(l),s.manager.itemEnd(e)},o)}catch(l){o(l)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s,a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===P0){try{a[Et.KHR_BINARY_GLTF]=new If(e)}catch(h){r&&r(h);return}s=JSON.parse(a[Et.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let u=new Hf(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let l=0;l<this.pluginCallbacks.length;l++){let h=this.pluginCallbacks[l](u);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let l=0;l<s.extensionsUsed.length;++l){let h=s.extensionsUsed[l],f=s.extensionsRequired||[];switch(h){case Et.KHR_MATERIALS_UNLIT:a[h]=new pf;break;case Et.KHR_DRACO_MESH_COMPRESSION:a[h]=new Pf(s,this.dracoLoader);break;case Et.KHR_TEXTURE_TRANSFORM:a[h]=new Lf;break;case Et.KHR_MESH_QUANTIZATION:a[h]=new Nf;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}u.setExtensions(a),u.setPlugins(o),u.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}};function XM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function ln(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var Et={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},df=class{constructor(e){this.parser=e,this.name=Et.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,r=t.cache.get(n);if(r)return r;let s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],u,l=new $e(16777215);c.color!==void 0&&l.setRGB(c.color[0],c.color[1],c.color[2],Un);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":u=new as(l),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new Gn(l),u.distance=h;break;case"spot":u=new no(l),u.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,u.angle=c.spot.outerConeAngle,u.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return u.position.set(0,0,0),Ki(u,c),c.intensity!==void 0&&(u.intensity=c.intensity),u.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(u),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},pf=class{constructor(){this.name=Et.KHR_MATERIALS_UNLIT}getMaterialType(){return mn}extendParams(e,t,n){let r=[];e.color=new $e(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Un),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,Wt))}return Promise.all(r)}},mf=class{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=ln(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},gf=class{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return ln(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=ln(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ot(s,s)}return Promise.all(r)}},vf=class{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_DISPERSION}getMaterialType(e){return ln(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=ln(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},xf=class{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return ln(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=ln(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(r)}},_f=class{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_SHEEN}getMaterialType(e){return ln(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=ln(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(t.sheenColor=new $e(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],Un)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Wt)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(r)}},yf=class{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return ln(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=ln(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(r)}},Mf=class{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_VOLUME}getMaterialType(e){return ln(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=ln(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return t.attenuationColor=new $e().setRGB(s[0],s[1],s[2],Un),Promise.all(r)}},Sf=class{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_IOR}getMaterialType(e){return ln(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=ln(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Tf=class{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_SPECULAR}getMaterialType(e){return ln(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=ln(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return t.specularColor=new $e().setRGB(s[0],s[1],s[2],Un),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Wt)),Promise.all(r)}},bf=class{constructor(e){this.parser=e,this.name=Et.EXT_MATERIALS_BUMP}getMaterialType(e){return ln(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=ln(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(r)}},Ef=class{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return ln(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=ln(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(r)}},wf=class{constructor(e){this.parser=e,this.name=Et.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},Af=class{constructor(e){this.parser=e,this.name=Et.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=r.images[a.source],c=n.textureLoader;if(o.uri){let u=n.options.manager.getHandler(o.uri);u!==null&&(c=u)}return n.loadTextureImage(e,a.source,c)}},Rf=class{constructor(e){this.parser=e,this.name=Et.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=r.images[a.source],c=n.textureLoader;if(o.uri){let u=n.options.manager.getHandler(o.uri);u!==null&&(c=u)}return n.loadTextureImage(e,a.source,c)}},uu=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let c=r.byteOffset||0,u=r.byteLength||0,l=r.count,h=r.byteStride,f=new Uint8Array(o,c,u);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(l,h,f,r.mode,r.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(l*h);return a.decodeGltfBuffer(new Uint8Array(p),l,h,f,r.mode,r.filter),p})})}else return null}},Cf=class{constructor(e){this.name=Et.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let u of r.primitives)if(u.mode!==fi.TRIANGLES&&u.mode!==fi.TRIANGLE_STRIP&&u.mode!==fi.TRIANGLE_FAN&&u.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let u in a)o.push(this.parser.getDependency("accessor",a[u]).then(l=>(c[u]=l,c[u])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(u=>{let l=u.pop(),h=l.isGroup?l.children:[l],f=u[0].count,p=[];for(let v of h){let y=new xt,g=new K,m=new In,x=new K(1,1,1),A=new es(v.geometry,v.material,f);for(let C=0;C<f;C++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,C),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,C),c.SCALE&&x.fromBufferAttribute(c.SCALE,C),A.setMatrixAt(C,y.compose(g,m,x));let S=null;for(let C in c)if(C==="_COLOR_0"){let I=c[C];A.instanceColor=new ar(I.array,I.itemSize,I.normalized)}else if(C!=="TRANSLATION"&&C!=="ROTATION"&&C!=="SCALE"){if(S===null){let L=A.geometry;S=new Yt,S.name=L.name;for(let M in L.attributes)S.setAttribute(M,L.attributes[M]);for(let M in L.morphAttributes)S.morphAttributes[M]=L.morphAttributes[M];L.index!==null&&S.setIndex(L.index),S.morphTargetsRelative=L.morphTargetsRelative;for(let M of L.groups)S.addGroup(M.start,M.count,M.materialIndex);L.boundingBox!==null&&(S.boundingBox=L.boundingBox.clone()),L.boundingSphere!==null&&(S.boundingSphere=L.boundingSphere.clone()),S.drawRange.start=L.drawRange.start,S.drawRange.count=L.drawRange.count,S.userData=Object.assign({},L.userData),A.geometry=S}let I=c[C];S.setAttribute(C,new ar(I.array,I.itemSize,I.normalized))}jt.prototype.copy.call(A,v),this.parser.assignFinalMaterial(A),p.push(A)}return l.isGroup?(l.clear(),l.add(...p),l):p[0]}))}},P0="glTF",Po=12,A0={JSON:1313821514,BIN:5130562},If=class{constructor(e){this.name=Et.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Po),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==P0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-Po,s=new DataView(e,Po),a=0;for(;a<r;){let o=s.getUint32(a,!0);a+=4;let c=s.getUint32(a,!0);if(a+=4,c===A0.JSON){let u=new Uint8Array(e,Po+a,o);this.content=n.decode(u)}else if(c===A0.BIN){let u=Po+a;this.body=e.slice(u,u+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Pf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Et.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},u={};for(let l in a){let h=Of[l]||l.toLowerCase();o[h]=a[l]}for(let l in e.attributes){let h=Of[l]||l.toLowerCase();if(a[l]!==void 0){let f=n.accessors[e.attributes[l]],p=va[f.componentType];u[h]=p.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(l){return new Promise(function(h,f){r.decodeDracoFile(l,function(p){for(let v in p.attributes){let y=p.attributes[v],g=c[v];g!==void 0&&(y.normalized=g)}h(p)},o,u,Un,f)})})}},Lf=class{constructor(){this.name=Et.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),r=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*r,e.offset.x,-e.repeat.x*r,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Nf=class{constructor(){this.name=Et.KHR_MESH_QUANTIZATION}},hu=class extends Bi{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,u=o*3,l=r-t,h=(n-t)/l,f=h*h,p=f*h,v=e*u,y=v-u,g=-2*p+3*f,m=p-f,x=1-g,A=m-f+h;for(let S=0;S!==o;S++){let C=a[y+S+o],I=a[y+S+c]*l,L=a[v+S+o],M=a[v+S]*l;s[S]=x*C+A*I+g*L+m*M}return s}},YM=new In,Df=class extends hu{interpolate_(e,t,n,r){let s=super.interpolate_(e,t,n,r);return YM.fromArray(s).normalize().toArray(s),s}},fi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},va={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},R0={9728:qt,9729:an,9984:$l,9985:ia,9986:us,9987:Ai},C0={33071:ai,33648:Fs,10497:oi},uf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Of={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ur={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},KM={CUBICSPLINE:void 0,LINEAR:jr,STEP:Jr},hf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ZM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Kt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Gi})),i.DefaultMaterial}function ds(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ki(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function JM(i,e,t){let n=!1,r=!1,s=!1;for(let u=0,l=e.length;u<l;u++){let h=e[u];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);let a=[],o=[],c=[];for(let u=0,l=e.length;u<l;u++){let h=e[u];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(f)}if(r){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(f)}if(s){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(u){let l=u[0],h=u[1],f=u[2];return n&&(i.morphAttributes.position=l),r&&(i.morphAttributes.normal=h),s&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function jM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function $M(i){let e,t=i.extensions&&i.extensions[Et.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ff(t.attributes):e=i.indices+":"+ff(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+ff(i.targets[n]);return e}function ff(i){let e="",t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Uf(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function QM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var eS=new xt,Hf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new XM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,a=-1;if(typeof navigator!="undefined"&&typeof navigator.userAgent!="undefined"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);r=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&r<17||s&&a<98?this.textureLoader=new ss(this.options.manager):this.textureLoader=new io(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new js(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:n,userData:{}};return ds(s,o,r),Ki(o,r),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){let a=t[r].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){let a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),s=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[u,l]of a.children.entries())s(l,o.children[u])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Et.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(s,a){n.load(hr.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let a=uf[r.type],o=va[r.componentType],c=r.normalized===!0,u=new o(r.count*a);return Promise.resolve(new $t(u,a,c))}let s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],c=uf[r.type],u=va[r.componentType],l=u.BYTES_PER_ELEMENT,h=l*c,f=r.byteOffset||0,p=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,v=r.normalized===!0,y,g;if(p&&p!==h){let m=Math.floor(f/p),x="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+m+":"+r.count,A=t.cache.get(x);A||(y=new u(o,m*p,r.count*p/l),A=new Ws(y,p/l),t.cache.add(x,A)),g=new qs(A,c,f%p/l,v)}else o===null?y=new u(r.count*c):y=new u(o,f,r.count*c),g=new $t(y,c,v);if(r.sparse!==void 0){let m=uf.SCALAR,x=va[r.sparse.indices.componentType],A=r.sparse.indices.byteOffset||0,S=r.sparse.values.byteOffset||0,C=new x(a[1],A,r.sparse.count*m),I=new u(a[2],S,r.sparse.count*c);o!==null&&(g=new $t(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let L=0,M=C.length;L<M;L++){let T=C[L];if(g.setX(T,I[L*c]),c>=2&&g.setY(T,I[L*c+1]),c>=3&&g.setZ(T,I[L*c+2]),c>=4&&g.setW(T,I[L*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=v}return g})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let r=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let u=this.loadImageSource(t,n).then(function(l){l.flipY=!1,l.name=a.name||o.name||"",l.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(l.name=o.uri);let f=(s.samplers||{})[a.sampler]||{};return l.magFilter=R0[f.magFilter]||an,l.minFilter=R0[f.minFilter]||Ai,l.wrapS=C0[f.wrapS]||oi,l.wrapT=C0[f.wrapT]||oi,l.generateMipmaps=!l.isCompressedTexture&&l.minFilter!==qt&&l.minFilter!==an,r.associations.set(l,{textures:e}),l}).catch(function(){return null});return this.textureCache[c]=u,u}loadImageSource(e,t){let n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=r.images[e],o=self.URL||self.webkitURL,c=a.uri||"",u=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){u=!0;let f=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let l=Promise.resolve(c).then(function(h){return new Promise(function(f,p){let v=f;t.isImageBitmapLoader===!0&&(v=function(y){let g=new on(y);g.needsUpdate=!0,f(g)}),t.load(hr.resolveURL(h,s.path),v,void 0,p)})}).then(function(h){return u===!0&&o.revokeObjectURL(c),Ki(h,a),h.userData.mimeType=a.mimeType||QM(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=l,l}assignTexture(e,t,n,r){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[Et.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Et.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=s.associations.get(a);a=s.extensions[Et.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Zs,Hn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Ks,Hn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(r||s||a){let o="ClonedMaterial:"+n.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Kt}loadMaterial(e){let t=this,n=this.json,r=this.extensions,s=n.materials[e],a,o={},c=s.extensions||{},u=[];if(c[Et.KHR_MATERIALS_UNLIT]){let h=r[Et.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),u.push(h.extendParams(o,s,t))}else{let h=s.pbrMetallicRoughness||{};if(o.color=new $e(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Un),o.opacity=f[3]}h.baseColorTexture!==void 0&&u.push(t.assignTexture(o,"map",h.baseColorTexture,Wt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),u.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Sn);let l=s.alphaMode||hf.OPAQUE;if(l===hf.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===hf.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==mn&&(u.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new ot(1,1),s.normalTexture.scale!==void 0)){let h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&a!==mn&&(u.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==mn){let h=s.emissiveFactor;o.emissive=new $e().setRGB(h[0],h[1],h[2],Un)}return s.emissiveTexture!==void 0&&a!==mn&&u.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Wt)),Promise.all(u).then(function(){let h=new a(o);return s.name&&(h.name=s.name),Ki(h,s),t.associations.set(h,{materials:e}),s.extensions&&ds(r,h,s),h})}createUniqueName(e){let t=Vt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function s(o){return n[Et.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return I0(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let u=e[o],l=$M(u),h=r[l];if(h)a.push(h.promise);else{let f;u.extensions&&u.extensions[Et.KHR_DRACO_MESH_COMPRESSION]?f=s(u):f=I0(new Yt,u,t),u.mode===fi.TRIANGLE_STRIP?f=f.then(p=>cf(p,Mo)):u.mode===fi.TRIANGLE_FAN&&(f=f.then(p=>cf(p,aa))),r[l]={primitive:u,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,u=a.length;c<u;c++){let l=a[c].material===void 0?ZM(this.cache):this.getDependency("material",a[c].material);o.push(l)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let u=c.slice(0,c.length-1),l=c[c.length-1],h=[];for(let p=0,v=l.length;p<v;p++){let y=l[p],g=a[p],m,x=u[p];if(g.mode===fi.TRIANGLES||g.mode===fi.TRIANGLE_STRIP||g.mode===fi.TRIANGLE_FAN||g.mode===void 0){let A=s.isSkinnedMesh===!0,S=y.hasAttribute("skinIndex")&&y.hasAttribute("skinWeight");A&&S===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=A&&S?new Wa(y,x):new Fe(y,x),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(g.mode===fi.LINES)m=new Xa(y,x);else if(g.mode===fi.LINE_STRIP)m=new ts(y,x);else if(g.mode===fi.LINE_LOOP)m=new Ya(y,x);else if(g.mode===fi.POINTS)m=new ns(y,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&jM(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),Ki(m,s),g.extensions&&ds(r,m,g),t.assignFinalMaterial(m),h.push(m)}for(let p=0,v=h.length;p<v;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return s.extensions&&ds(r,h[0],s),h[0];let f=new vt;s.extensions&&ds(r,f,s),t.associations.set(f,{meshes:e});for(let p=0,v=h.length;p<v;p++)f.add(h[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new sn(Ih.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new zi(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ki(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){let s=r.pop(),a=r,o=[],c=[];for(let u=0,l=a.length;u<l;u++){let h=a[u];if(h){o.push(h);let f=new xt;s!==null&&f.fromArray(s.array,u*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new qa(o,c)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],c=[],u=[],l=[];for(let h=0,f=r.channels.length;h<f;h++){let p=r.channels[h],v=r.samplers[p.sampler],y=p.target,g=y.node,m=r.parameters!==void 0?r.parameters[v.input]:v.input,x=r.parameters!==void 0?r.parameters[v.output]:v.output;y.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",x)),u.push(v),l.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(u),Promise.all(l)]).then(function(h){let f=h[0],p=h[1],v=h[2],y=h[3],g=h[4],m=[];for(let A=0,S=f.length;A<S;A++){let C=f[A],I=p[A],L=v[A],M=y[A],T=g[A];if(C===void 0)continue;C.updateMatrix&&C.updateMatrix();let D=n._createAnimationTracks(C,I,L,M,T);if(D)for(let H=0;H<D.length;H++)m.push(D[H])}let x=new rs(s,void 0,m);return Ki(x,r),x})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,u=r.weights.length;c<u;c++)o.morphTargetInfluences[c]=r.weights[c]}),a})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=r.children||[];for(let u=0,l=o.length;u<l;u++)a.push(n.getDependency("node",o[u]));let c=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),c]).then(function(u){let l=u[0],h=u[1],f=u[2];f!==null&&l.traverse(function(p){p.isSkinnedMesh&&p.bind(f,eS)});for(let p=0,v=h.length;p<v;p++)l.add(h[p]);if(l.userData.pivot!==void 0&&h.length>0){let p=l.userData.pivot,v=h[0];l.pivot=new K().fromArray(p),l.position.x-=p[0],l.position.y-=p[1],l.position.z-=p[2],v.position.set(0,0,0),delete l.userData.pivot}return l})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],c=r._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(u){return r._getNodeRef(r.cameraCache,s.camera,u)})),r._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){o.push(u)}),this.nodeCache[e]=Promise.all(o).then(function(u){let l;if(s.isBone===!0?l=new Xs:u.length>1?l=new vt:u.length===1?l=u[0]:l=new jt,l!==u[0])for(let h=0,f=u.length;h<f;h++)l.add(u[h]);if(s.name&&(l.userData.name=s.name,l.name=a),Ki(l,s),s.extensions&&ds(n,l,s),s.matrix!==void 0){let h=new xt;h.fromArray(s.matrix),l.applyMatrix4(h)}else s.translation!==void 0&&l.position.fromArray(s.translation),s.rotation!==void 0&&l.quaternion.fromArray(s.rotation),s.scale!==void 0&&l.scale.fromArray(s.scale);if(!r.associations.has(l))r.associations.set(l,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){let h=r.associations.get(l);r.associations.set(l,{...h})}return r.associations.get(l).nodes=e,l}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,s=new vt;n.name&&(s.name=r.createUniqueName(n.name)),Ki(s,n),n.extensions&&ds(t,s,n);let a=n.nodes||[],o=[];for(let c=0,u=a.length;c<u;c++)o.push(r.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let l=0,h=c.length;l<h;l++){let f=c[l];f.parent!==null?s.add(lu(f)):s.add(f)}let u=l=>{let h=new Map;for(let[f,p]of r.associations)(f instanceof Hn||f instanceof on)&&h.set(f,p);return l.traverse(f=>{let p=r.associations.get(f);p!=null&&h.set(f,p)}),h};return r.associations=u(s),s})}_createAnimationTracks(e,t,n,r,s){let a=[],o=e.name?e.name:e.uuid,c=[];function u(p){p.morphTargetInfluences&&c.push(p.name?p.name:p.uuid)}Ur[s.path]===Ur.weights?(u(e),e.isGroup&&e.children.forEach(u)):c.push(o);let l;switch(Ur[s.path]){case Ur.weights:l=lr;break;case Ur.rotation:l=cr;break;case Ur.translation:case Ur.scale:l=Ir;break;default:n.itemSize===1?l=lr:l=Ir;break}let h=r.interpolation!==void 0?KM[r.interpolation]:jr,f=this._getArrayFromAccessor(n);for(let p=0,v=c.length;p<v;p++){let y=new l(c[p]+"."+Ur[s.path],t.array,f,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),a.push(y)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Uf(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let r=this instanceof cr?Df:hu;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function tS(i,e,t){let n=e.attributes,r=new Pn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,u=o.max;if(c!==void 0&&u!==void 0){if(r.set(new K(c[0],c[1],c[2]),new K(u[0],u[1],u[2])),o.normalized){let l=Uf(va[o.componentType]);r.min.multiplyScalar(l),r.max.multiplyScalar(l)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new K,c=new K;for(let u=0,l=s.length;u<l;u++){let h=s[u];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],p=f.min,v=f.max;if(p!==void 0&&v!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(v[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(v[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(v[2]))),f.normalized){let y=Uf(va[f.componentType]);c.multiplyScalar(y)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}i.boundingBox=r;let a=new Bn;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=a}function I0(i,e,t){let n=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=Of[a]||a.toLowerCase();o in i.attributes||r.push(s(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});r.push(a)}return yt.workingColorSpace!==Un&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${yt.workingColorSpace}" not supported.`),Ki(i,e),tS(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?JM(i,e.targets,t):i})}var fu=2,L0={imp:["imp"],gnasher:["gnasher"],knight:["knight","emberknight","ember_knight"],riley:["riley","rileyhologram"],fist:["fist","fists","fpfist","weaponfist"],pistol:["pistol","fppistol","weaponpistol"],shotgun:["shotgun","fpshotgun","weaponshotgun","pumpshotgun","doublebarrelshotgun"],chaingun:["chaingun","fpchaingun","weaponchaingun","minigun"],rocket:["rocketlauncher","rocket","fprocketlauncher","weaponrocketlauncher","launcher"],crate:["crate","woodencrate","crateintact"],barrel:["barrel","explosivebarrel","toxicbarrel"],torch:["torch","standingtorch"],lamp:["lamp","ceilinglamp","cagedlamp","ceilinglampintact","lampintact"],lampBroken:["lampbroken","ceilinglampbroken","brokenlamp"],pipeStraight:["pipestraight","pipe"],pipeElbow:["pipeelbow","elbow"],pipeValve:["pipevalve","valve"],chain:["chain","hangingchain"],"pickup:h":["medkitsmall","stimpack","smallmedkit","stim"],"pickup:+":["medkitlarge","medkit","largemedkit","medikit"],"pickup:b":["bulletclip","clip","ammoclip","bullets"],"pickup:a":["shellbox","shells","boxofshells"],"pickup:k":["rocketbox","rockets","boxofrockets"],"pickup:A":["armor","armour","armorvest","armourvest","vest"],"pickup:r":["keycardred","redkeycard","keyred"],"pickup:u":["keycardblue","bluekeycard","keyblue"],"pickup:P":["phoenixorb","orb"],"pickup:2":["shotgunpickup","pickupshotgun"],"pickup:3":["chaingunpickup","pickupchaingun"],"pickup:4":["rocketlauncherpickup","pickuprocketlauncher"],"tex:1":["brick"],"tex:2":["stone"],"tex:3":["metalpanel","metal"],"tex:4":["techpanel","tech"],"tex:5":["hellrock","hell"],"tex:6":["door","doorplain"],"tex:7":["doorred","doorredstripe","reddoor"],"tex:8":["doorblue","doorbluestripe","bluedoor"],"tex:9":["switchoff"],"tex:10":["switchon"],"tex:slab":["floorslab","slab"],"tex:tech":["floorgrate","grate"],"tex:hell":["lavafloor","floorlava"],"tex:ceilDark":["ceilingpanel","ceiling"],"tex:ceilTech":["ceilingpanel","ceilingtech"],"tex:ceilHell":["hellrock","ceilinghell"]};function Ff(i){return String(i||"").toLowerCase().replace(/\.[a-z0-9]+$/,"").replace(/.*[\/\\]/,"").replace(/[^a-z0-9]/g,"")}function Bf(){var i={models:{},textures:{},ready:!1,loaded:[],problems:[]};return i.model=function(e){for(var t=L0[e]||[e],n=0;n<t.length;n++)if(i.models[t[n]])return i.models[t[n]];return null},i.texture=function(e){for(var t=L0[e]||[e],n=0;n<t.length;n++)if(i.textures[t[n]])return i.textures[t[n]];return null},i}var nS=["assets/codex","assets/cc0","assets"];function O0(i){var e=typeof window!="undefined"&&window.FIREBIRD_ASSET_PACK;return e&&Object.prototype.hasOwnProperty.call(e,i)?e[i]:void 0}function N0(i){var e=O0(i);if(e===void 0)return i;var t=/\.png$/i.test(i)?"image/png":/\.jpe?g$/i.test(i)?"image/jpeg":/\.webp$/i.test(i)?"image/webp":"model/gltf-binary";return"data:"+t+";base64,"+e}function iS(i){var e=O0(i+"/assets.json");return e!==void 0?Promise.resolve(e):typeof window!="undefined"&&window.FIREBIRD_ASSET_PACK||typeof location!="undefined"&&location.protocol==="file:"?Promise.resolve(null):fetch(i+"/assets.json",{cache:"no-cache"}).then(function(t){return t.ok?t.json():null}).catch(function(){return null})}function U0(i){var e=typeof window!="undefined"&&window.FIREBIRD_ASSET_PACK;i=i||e&&e.__dirs||nS;var t=Bf(),n=new cu,r=new ss;return Promise.all(i.map(function(o){return iS(o).then(function(c){return{dir:o,man:c}})})).then(function(o){var c=[];return o.forEach(function(u,l){if(u.man){var h=Array.isArray(u.man)?u.man:u.man.assets||u.man.files||[];h.forEach(function(f){c.push(a(u.dir,f,l))})}}),Promise.all(c)}).then(function(){return t.ready=!0,t});function s(o,c,u,l){var h=o[c];(!h||h.priority>l)&&(u.priority=l,o[c]=u)}function a(o,c,u){var l=c.file||c.path||c.src,h=String(c.type||c.kind||"").toLowerCase(),f=Ff(c.id||c.name||l);if(l&&/\.glb$/i.test(l))return D0(n.loadAsync(N0(o+"/"+l)),2e4).then(function(x){s(t.models,f,{scene:x.scene,animations:x.animations||[],meta:c,type:h,dir:o},u),t.loaded.push(o+":"+f)}).catch(function(x){t.problems.push(o+"/"+l+": "+(x&&x.message||x))});if(h.indexOf("tex")===0||c.maps||c.textures){var p=c.maps||c.textures||{},v={},y=[],g={map:["albedo","basecolor","base_color","color","diffuse"],normalMap:["normal","normalmap"],roughnessMap:["roughness","rough","orm"],emissiveMap:["emissive","emission","glow"]},m=c.filter!=="linear";return Object.keys(g).forEach(function(x){var A=null;Object.keys(p).forEach(function(S){g[x].indexOf(S.toLowerCase().replace(/[^a-z_]/g,""))>=0&&(A=p[S])}),A&&y.push(D0(r.loadAsync(N0(o+"/"+A)),2e4).then(function(S){S.wrapS=S.wrapT=oi,S.anisotropy=8,S.colorSpace=x==="map"||x==="emissiveMap"?Wt:Qn,m&&(S.magFilter=qt),v[x]=S}).catch(function(S){t.problems.push(o+"/"+A+": "+(S&&S.message||S))}))}),Promise.all(y).then(function(){v.map&&(s(t.textures,f,v,u),t.loaded.push(o+":tex:"+f))})}return null}}function D0(i,e){return new Promise(function(t,n){var r=setTimeout(function(){n(new Error("timed out"))},e);i.then(function(s){clearTimeout(r),t(s)},function(s){clearTimeout(r),n(s)})})}function ps(i){var e=lu(i.scene);e.traverse(function(r){r.isMesh&&(r.castShadow=!0,r.frustumCulled=!r.isSkinnedMesh,r.material&&(r.material=Array.isArray(r.material)?r.material.map(function(s){return s.clone()}):r.material.clone()))});var t=i.animations.length?new so(e):null,n={};return i.animations.forEach(function(r){n[Ff(r.name).replace(/^.*\|/,"")]=r}),{obj:e,mixer:t,clips:n}}function Lo(i,e){var t=Ff(e);if(i[t])return i[t];for(var n in i)if(n.indexOf(t)>=0)return i[n];return null}var H0={};function Qe(i,e){return H0[i]||(H0[i]=e())}function Zt(i,e){return new Kt(Object.assign({color:i,roughness:.7,metalness:.05},e||{}))}function gn(i,e){return new Kt({color:0,emissive:i,emissiveIntensity:e||3,roughness:1})}function lt(i,e,t,n,r,s){var a=new Fe(i,e);return a.position.set(t,n,r),a.castShadow=!0,(s||this).add(a),a}var ti=function(){return new is(1,16,12)},Fn=function(){return new en(1,1,1)},Hr=function(){return new ja(1,1,10)},di=function(){return new Fi(1,1,1,14)},ms=function(){return new Ja(1,1,6,12)};function pu(i){var e=[];return i.traverse(function(t){t.isMesh&&t.material&&!t.userData.noFlash&&(t.material=t.material.clone(),e.push(t.material))}),e}function rS(){var i=new vt,e=new vt;i.add(e);var t=Zt(8007196,{roughness:.6}),n=Zt(3806220),r=Zt(15259824,{roughness:.4}),s=lt(Qe("cap",ms),t,0,.5,0,e);s.scale.set(.17,.14,.13),s.rotation.x=.35;var a=lt(Qe("sph",ti),t,0,.72,.06,e);a.scale.set(.11,.1,.11),[-1,1].forEach(function(c){var u=lt(Qe("cone",Hr),n,c*.07,.83,.02,e);u.scale.set(.025,.12,.025),u.rotation.z=-c*.5;var l=lt(Qe("sph",ti),gn(16752672,2),c*.045,.74,.15,e);l.scale.setScalar(.018),l.userData.noFlash=!0;var h=new vt;h.position.set(c*.17,.58,.02),e.add(h);var f=lt(Qe("cap",ms),t,0,-.1,0,h);f.scale.set(.04,.09,.04);var p=lt(Qe("cone",Hr),r,0,-.26,.03,h);p.scale.set(.03,.07,.03),p.rotation.x=Math.PI,h.userData.side=c,e.userData["arm"+c]=h;var v=lt(Qe("cap",ms),n,c*.08,.18,0,e);v.scale.set(.05,.12,.05),e.userData["leg"+c]=v;var y=lt(Qe("cone",Hr),n,c*.06,.55,-.12,e);y.scale.set(.03,.09,.03),y.rotation.x=-1.2});var o=pu(i);return{obj:i,mats:o,animate:function(c,u){var l=c.state==="chase"||c.state==="flee"?Math.sin(u*9+c.animT):0;e.position.y=Math.abs(l)*.03,e.userData.leg1.rotation.x=l*.6,e.userData["leg-1"].rotation.x=-l*.6;var h=c.state==="windup"?1:0;e.userData.arm1.rotation.x=-l*.5-h*2.4,e.userData["arm-1"].rotation.x=l*.5-h*.4,e.rotation.x=c.state==="pain"?-.35:0}}}function sS(){var i=new vt,e=new vt;i.add(e);var t=Zt(12873850,{roughness:.55}),n=Zt(3803152),r=Zt(16051416,{roughness:.3}),s=lt(Qe("sph",ti),t,0,.36,0,e);s.scale.set(.34,.28,.32);var a=new vt;a.position.set(0,.3,.12),e.add(a);var o=lt(Qe("sph",ti),n,0,.04,.12,e);o.scale.set(.24,.1,.12),o.position.y=.33;for(var c=0;c<9;c++){var u=(c/8-.5)*2.4,l=lt(Qe("cone",Hr),r,Math.sin(u)*.22,.42,.14+Math.cos(u)*.14,e);l.scale.set(.028,.08,.028),l.rotation.x=Math.PI;var h=lt(Qe("cone",Hr),r,Math.sin(u)*.2,-.02,Math.cos(u)*.14+.02,a);h.scale.set(.025,.07,.025)}var f=lt(Qe("sph",ti),t,0,-.04,.02,a);f.scale.set(.26,.08,.22),[-1,1].forEach(function(v){var y=lt(Qe("sph",ti),gn(16752688,.9),v*.12,.56,.25,e);y.scale.setScalar(.02),y.userData.noFlash=!0;var g=lt(Qe("cap",ms),t,v*.18,.1,0,e);g.scale.set(.07,.07,.07),e.userData["leg"+v]=g});var p=pu(i);return{obj:i,mats:p,animate:function(v,y){var g=v.state==="chase"||v.state==="flee"?Math.sin(y*14+v.animT):0;e.position.y=Math.abs(g)*.04,e.userData.leg1.position.z=g*.08,e.userData["leg-1"].position.z=-g*.08;var m=v.state==="windup"?.7:(Math.sin(y*6+v.animT)+1)*.08;a.rotation.x=m,e.rotation.x=v.state==="windup"?.25:v.state==="pain"?-.3:0}}}function aS(){var i=new vt,e=new vt;i.add(e);var t=Zt(2367519,{roughness:.55,metalness:.3}),n=Zt(10122816,{roughness:.3,metalness:.85}),r=gn(16718384,4),s=lt(Qe("box",Fn),t,0,.82,0,e);s.scale.set(.5,.42,.3);var a=lt(Qe("box",Fn),n,0,.55,0,e);a.scale.set(.4,.16,.26);var o=lt(Qe("sph",ti),r,0,.84,.16,e);o.scale.setScalar(.07),o.userData.noFlash=!0;var c=lt(Qe("box",Fn),t,0,1.12,.02,e);c.scale.set(.2,.18,.2);var u=lt(Qe("box",Fn),gn(16722490,5),0,1.13,.12,e);u.scale.set(.15,.03,.02),u.userData.noFlash=!0,[-1,1].forEach(function(p){var v=lt(Qe("box",Fn),gn(16718384,2),p*.12,.82,.152,e);v.scale.set(.02,.36,.01),v.userData.noFlash=!0;var y=lt(Qe("sph",ti),t,p*.3,1,0,e);y.scale.set(.14,.1,.14);var g=new vt;g.position.set(p*.33,.95,0),e.add(g),e.userData["arm"+p]=g;var m=lt(Qe("box",Fn),t,0,-.25,0,g);m.scale.set(.13,.42,.13);var x=lt(Qe("box",Fn),n,0,-.5,.02,g);x.scale.set(.15,.13,.15);var A=lt(Qe("box",Fn),t,p*.13,.24,0,e);A.scale.set(.15,.48,.17),e.userData["leg"+p]=A});var l=lt(Qe("cone",Hr),n,0,1.33,.02,e);l.scale.set(.05,.24,.05);var h=new Fe(new li(.12,.015,6,20),n);h.rotation.x=Math.PI/2,h.position.set(0,1.22,.02),e.add(h);var f=pu(i);return{obj:i,mats:f,animate:function(p,v){var y=p.state==="chase"?Math.sin(v*6+p.animT):0;e.userData.leg1.rotation.x=y*.4,e.userData["leg-1"].rotation.x=-y*.4,e.userData.arm1.rotation.x=p.state==="windup"?-2.2:-y*.3,e.userData["arm-1"].rotation.x=p.state==="windup"?-1.2:y*.3,e.position.y=Math.abs(y)*.03}}}function oS(){var i=new vt,e=new vt;i.add(e);var t=new Kt({color:665648,emissive:4184296,emissiveIntensity:1.2,transparent:!0,opacity:.82,roughness:.3,metalness:.2}),n=new Kt({color:0,emissive:10484991,emissiveIntensity:3}),r=lt(Qe("cap",ms),t,0,.58,0,e);r.scale.set(.13,.16,.09);var s=lt(Qe("box",Fn),t,0,.4,0,e);s.scale.set(.22,.08,.13);var a=lt(Qe("sph",ti),t,0,.86,0,e);a.scale.set(.085,.1,.09);var o=lt(Qe("box",Fn),n,0,.87,.07,e);o.scale.set(.12,.028,.02);var c=lt(Qe("sph",ti),n,0,.64,.08,e);c.scale.setScalar(.03),[-1,1].forEach(function(f){var p=new vt;p.position.set(f*.15,.72,0),e.add(p),e.userData["arm"+f]=p;var v=lt(Qe("cap",ms),t,0,-.14,0,p);v.scale.set(.035,.13,.035);var y=lt(Qe("cap",ms),t,f*.07,.18,0,e);y.scale.set(.045,.16,.045),e.userData["leg"+f]=y});var u=new Fe(Qe("sph",ti),new Kt({color:0,emissive:16765502,emissiveIntensity:1.5,transparent:!0,opacity:.25,side:Sn,depthWrite:!1}));u.scale.setScalar(.62),u.position.y=.5,u.userData.noFlash=!0,i.add(u);var l=[t],h=new Fe(new li(.34,.012,6,40),n);return h.rotation.x=Math.PI/2,h.position.y=.02,i.add(h),{obj:i,mats:l,animate:function(f,p){var v=f.state==="chase"?Math.sin(p*8+f.animT):0;e.userData.leg1.rotation.x=v*.5,e.userData["leg-1"].rotation.x=-v*.5,e.userData.arm1.rotation.x=f.state==="windup"?-1.5:-v*.4,e.userData["arm-1"].rotation.x=f.state==="windup"?-1.5:v*.4,e.position.y=.03+Math.sin(p*2)*.015;var y=f.state==="windup"&&f.attack!=="melee";n.emissive.setHex(y?16777215:10484991),n.emissiveIntensity=y?8:3,t.opacity=.7+Math.sin(p*23)*.06+(Math.random()<.02?-.3:0),u.visible=f.shieldT>0,u.rotation.y=p*1.5,h.scale.setScalar(1+Math.sin(p*3)*.05)}}}function lS(){var i=new vt,e=lt(Qe("cyl",di),Zt(2761250,{roughness:.3,metalness:.4}),0,.28,0,i);e.scale.set(.2,.55,.2),[.06,.28,.5].forEach(function(r){var s=lt(Qe("cyl",di),Zt(11042370,{metalness:.85,roughness:.3}),0,r,0,i);s.scale.set(.207,.035,.207)});var t=lt(Qe("cyl",di),gn(16718384,2.5),0,.56,0,i);t.scale.set(.16,.01,.16),t.userData.noFlash=!0;var n=lt(Qe("box",Fn),gn(16722490,2),0,.39,.2,i);return n.scale.set(.1,.1,.005),n.rotation.z=Math.PI/4,n.userData.noFlash=!0,{obj:i,mats:pu(i),animate:function(){}}}var cS={imp:rS,gnasher:sS,knight:aS,riley:oS,barrel:lS};function uS(i,e){!i||i.userData.ash||(i.userData.ash=!0,i.onBeforeCompile=function(t){t.uniforms.ashGlow={value:.9*e},t.vertexShader=`varying vec3 vAshP;
`+t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vAshP = position;`),t.fragmentShader=`varying vec3 vAshP; uniform float ashGlow;
`+t.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
{ float l = dot(diffuseColor.rgb, vec3(0.3, 0.55, 0.15)); diffuseColor.rgb = mix(vec3(l), diffuseColor.rgb, 0.12) * vec3(0.5, 0.46, 0.45) + 0.03; }`).replace("#include <emissivemap_fragment>",["#include <emissivemap_fragment>","{ vec3 q = vAshP * 7.0;","  float n = sin(q.x * 1.3 + sin(q.y * 1.7)) * sin(q.y * 1.1 + sin(q.z * 1.9)) * sin(q.z * 1.5 + sin(q.x * 1.2));","  float crack = smoothstep(0.07, 0.0, abs(n));","  totalEmissiveRadiance += vec3(1.0, 0.07, 0.14) * crack * ashGlow; }"].join(`
`))},i.customProgramCacheKey=function(){return"ash"+e},i.needsUpdate=!0)}function hS(i,e){var t=ps(i),n=new vt;t.obj.scale.setScalar(1/fu),n.add(t.obj);var r=[],s=[],a=t.obj.getObjectByName("shield"),o=e&&(e.kind==="imp"||e.kind==="gnasher"||e.kind==="knight");t.obj.traverse(function(f){f.isMesh&&(Array.isArray(f.material)?f.material:[f.material]).forEach(function(p){o&&uS(p,e.kind==="knight"?1.4:1),p.emissive&&p.emissiveIntensity>1.2&&(p.emissiveIntensity=1.2),/tell/i.test(p.name)||/tell/i.test(f.name)?s.push(p):p.emissive&&r.push(p)})});var c=null,u=null;function l(f,p){if(t.mixer){var v=Lo(t.clips,f)||(f==="attack_windup"?Lo(t.clips,"attack"):null)||Lo(t.clips,"idle");if(v){var y=t.mixer.clipAction(v);c!==y&&(y.reset(),y.setLoop(p?Uc:Hc,1/0),y.clampWhenFinished=!!p,y.play(),c&&c.crossFadeTo(y,.15,!1),c=y)}}}var h={idle:"idle",chase:"walk",flee:"walk",windup:"attack_windup",pain:"pain",die:"death",dead:"death"};return{obj:n,mats:r,animate:function(f,p,v){var y=f.state||"idle";y!==u&&(u==="windup"&&y==="chase"&&Lo(t.clips,"attack")?l("attack",!0):l(h[y]||"idle",y==="pain"||y==="die"||y==="dead"),u=y),c&&c.getClip().name&&/attack$/i.test(c.getClip().name)&&!c.isRunning()&&y==="chase"&&l("walk"),t.mixer&&t.mixer.update(v||0);var g=y==="windup"&&f.attack!=="melee";s.forEach(function(m){m.emissive&&(m.emissive.setHex(g?16777215:10484991),m.emissiveIntensity=g?6:2)}),a&&(a.visible=f.shieldT>0)},authored:!0,clip:function(){return c?c.getClip().name:null}}}function F0(i,e){var t=e&&e.model(i.kind),n=t?hS(t,i):cS[i.kind](),r=!t&&i.kind==="riley"?i.h/.95:1;n.obj.scale.setScalar(r);var s=0,a=n.animate;return n.debug=function(){return{kind:i.kind,authored:!!n.authored,clip:n.clip?n.clip():null,state:i.state}},n.update=function(o,c,u){n.obj.position.set(i.x,i.y,i.z);var l=i.state==="windup"||i.state==="pain"||i.los?u:i.moveAng||0,h=n.obj.rotation.y,f=-l+Math.PI/2,p=Math.atan2(Math.sin(f-h),Math.cos(f-h));if(n.obj.rotation.y=h+p*Math.min(1,c*10),n.authored)a(i,o,c);else if(i.state==="die"||i.state==="dead"){s+=c;var v=Math.min(1,s/.45);n.obj.rotation.x=-v*1.35,n.obj.position.y=i.y+.05*v,n.obj.scale.setScalar(r*(1-v*.15)),i.kind==="riley"&&(n.obj.visible=s*12%1<.6&&s<1.4)}else a(i,o);var y=i.flashT>0&&i.state!=="dead";n.mats.forEach(function(g){g.userData.base||(g.userData.base={e:g.emissive?g.emissive.getHex():0,i:g.emissiveIntensity}),y?(g.emissive.setHex(16777215),g.emissiveIntensity=1.4):(g.emissive.setHex(g.userData.base.e),g.emissiveIntensity=g.userData.base.i)})},n}function B0(i,e){var t=new vt,n=new vt;t.add(n);var r=i.item,s=e&&e.model("pickup:"+r);if(s){var a=ps(s);a.obj.scale.setScalar(1/fu),n.add(a.obj)}else if(r==="h"||r==="+"){var o=r==="+",c=Qe("oct",function(){return new Cr(1,0)}),u=lt(Qe("cyl",di),Zt(10122816,{metalness:.85,roughness:.35}),0,.03,0,n);u.scale.set(o?.13:.08,.03,o?.13:.08);var l=lt(c,gn(16765040,2.4),0,o?.2:.14,0,n);l.scale.set(o?.09:.055,o?.16:.1,o?.09:.055),o&&[-1,1].forEach(function(D){var H=lt(c,gn(16771248,2),D*.1,.1,0,n);H.scale.set(.04,.07,.04)})}else if(r==="b"){var h=lt(Qe("cyl",di),Zt(11569736,{metalness:.85,roughness:.3}),0,.09,0,n);h.scale.set(.05,.16,.05);var f=lt(Qe("cyl",di),gn(9433343,2),0,.09,0,n);f.scale.set(.052,.07,.052)}else if(r==="a"){var p=lt(Qe("box",Fn),Zt(5914148,{roughness:.7}),0,.09,0,n);p.scale.set(.3,.18,.18);var v=lt(Qe("box",Fn),Zt(11569736,{metalness:.85,roughness:.3}),0,.09,0,n);v.scale.set(.31,.04,.185);for(var y=0;y<4;y++){var g=lt(Qe("cyl",di),Zt(14725200,{metalness:.9,roughness:.25}),-.1+y*.066,.2,0,n);g.scale.set(.026,.06,.026)}}else if(r==="A"){var m=lt(Qe("box",Fn),Zt(11569736,{metalness:.85,roughness:.3}),0,.2,0,n);m.scale.set(.34,.36,.14);var x=lt(Qe("oct",function(){return new Cr(1,0)}),gn(9433343,1.8),0,.26,.075,n);x.scale.set(.07,.07,.02)}else if(r==="2"){var A=kf(!0);A.scale.setScalar(.9),A.rotation.z=.2,A.position.y=.15,n.add(A)}else if(r==="r"||r==="u"){var S=r==="r"?16722458:3832575,C=lt(Qe("oct",function(){return new Cr(1,0)}),gn(S,2.5),0,.22,0,n);C.scale.set(.09,.15,.05);var I=lt(Qe("box",Fn),Zt(11569736,{metalness:.85,roughness:.3}),0,.22,0,n);I.scale.set(.12,.03,.07)}else if(r==="P"){var L=lt(Qe("sph",ti),gn(16756800,4),0,.3,0,n);L.scale.setScalar(.14);var M=new Fe(new li(.2,.012,6,32),gn(16765502,3));M.position.y=.3,n.add(M)}var T=r==="r"||r==="u"||r==="P"||r==="2"||r==="h"||r==="+";return{obj:t,update:function(D){t.position.set(i.x,i.y,i.z),t.visible=!i.gone,T&&(n.rotation.y=D*1.8+i.bob),n.position.y=T?.08+Math.sin(D*2.5+i.bob)*.05:0}}}function k0(i,e){var t=new vt,n=e&&e.model("torch");if(n){var r=ps(n);return r.obj.scale.setScalar(1/fu),t.add(r.obj),t.position.set(i.x,i.y,i.z),{obj:t,update:function(l){r.mixer&&r.mixer.update(1/60)}}}var s=lt(Qe("cyl",di),Zt(3811866,{metalness:.3}),0,.4,0,t);s.scale.set(.03,.8,.03);var a=lt(Qe("cyl",di),Zt(5917242,{metalness:.6,roughness:.4}),0,.82,0,t);a.scale.set(.1,.06,.1);var o=new vt;o.position.y=.9,t.add(o);var c=lt(Qe("cone",Hr),gn(16747040,5),0,.08,0,o);c.scale.set(.08,.2,.08);var u=lt(Qe("cone",Hr),gn(16769120,6),0,.05,0,o);return u.scale.set(.045,.12,.045),t.position.set(i.x,i.y,i.z),{obj:t,update:function(l){var h=Math.sin(l*17+i.animT*9)*.5+Math.sin(l*29+i.animT*3)*.5;o.scale.set(1+h*.1,1+h*.25,1+h*.1),o.rotation.y=l*3}}}var fS=function(i,e,t,n){return new ou(i,e,t,3,n)};function Nn(i,e,t,n,r){return Qe("rb"+i,function(){return fS(e,t,n,r)})}var z0=function(){return Zt(6961690,{roughness:.55,metalness:.05})},du=function(){return Zt(2760988,{roughness:.85})},G0=function(){return Zt(4863014,{roughness:.9})},V0=function(){return Zt(11569736,{metalness:.9,roughness:.3})},W0=function(){return Zt(5125664,{metalness:.85,roughness:.4})};function q0(i,e){var t=!1;i.traverse(function(n){/hand|arm|glove/i.test(n.name)&&(t=!0)}),!t&&(e==="shotgun"||e==="chaingun"||e==="rocket"?(xa(i,.01,-.07,.08,.4),xa(i,-.01,-.05,-.2,.1)):e!=="fist"&&xa(i,0,-.06,.02,.3))}function xa(i,e,t,n,r){var s=new vt;s.position.set(e,t,n),s.rotation.x=r||0,i.add(s);var a=new Fe(Nn("palm",.07,.05,.09,.02),du());s.add(a);var o=new Fe(Nn("fing",.075,.03,.05,.012),du());o.position.set(0,-.03,-.03),s.add(o);var c=new Fe(Qe("cyl",di),G0());return c.scale.set(.045,.28,.045),c.rotation.x=Math.PI/2-.15,c.position.set(.01,-.02,.17),s.add(c),s}function kf(i){var e=new vt,t=V0(),n=W0(),r=z0(),s=new Fe(Qe("cyl",di),t);s.scale.set(.026,.46,.026),s.rotation.x=Math.PI/2,s.position.set(0,0,-.33),e.add(s),[-.2,-.33,-.46].forEach(function(y){var g=new Fe(Qe("ring",function(){return new li(.031,.007,6,18)}),n);g.position.set(0,0,y),e.add(g)});var a=new Fe(Qe("bell",function(){return new Fi(.03,.078,.13,20,1,!0)}),Zt(13146704,{metalness:.9,roughness:.25,side:Sn}));a.rotation.x=Math.PI/2,a.position.set(0,0,-.62),e.add(a);var o=new Fe(Qe("lip",function(){return new li(.078,.008,6,24)}),n);o.position.set(0,0,-.685),e.add(o);var c=new Fe(Qe("sph",ti),gn(16762976,1.4));c.scale.set(.028,.028,.01),c.position.set(0,0,-.57),e.add(c);var u=new vt;u.position.set(0,-.036,-.28),e.add(u),e.userData.pump=u;var l=new Fe(Nn("fore",.064,.048,.19,.015),r);u.add(l),[-.06,.06].forEach(function(y){var g=new Fe(Nn("band",.068,.052,.014,.004),t);g.position.z=y,u.add(g)});var h=new Fe(Nn("recv",.078,.09,.2,.014),t);h.position.set(0,-.012,.02),e.add(h),[-1,1].forEach(function(y){var g=new Fe(Nn("win",.006,.04,.08,.003),gn(16762976,1.8));g.position.set(y*.04,-.005,.02),e.add(g)});var f=new Fe(new li(.025,.005,6,14,Math.PI),n);f.position.set(0,-.058,.07),f.rotation.set(0,Math.PI/2,Math.PI),e.add(f);var p=new Fe(Nn("stock",.062,.1,.27,.02),r);p.position.set(0,-.055,.24),p.rotation.x=-.14,e.add(p);var v=new Fe(Nn("cap",.066,.104,.02,.006),t);return v.position.set(0,-.075,.37),v.rotation.x=-.14,e.add(v),i||(e.userData.pumpHand=xa(u,-.005,-.045,.01,.1),xa(e,.01,-.08,.1,.4)),e}function X0(){var i=new vt,e=V0(),t=W0(),n=new Fe(Nn("slide",.042,.04,.18,.01),e);n.position.set(0,.02,-.07),i.add(n),i.userData.slide=n;for(var r=0;r<3;r++){var s=new Fe(Qe("coil",function(){return new li(.024,.005,6,16)}),Zt(12085306,{metalness:.9,roughness:.3}));s.position.set(0,0,-.02-r*.03),n.add(s)}var a=new Fe(Nn("frame",.036,.03,.15,.008),t);a.position.set(0,-.012,-.055),i.add(a);var o=new Fe(Qe("oct",function(){return new Cr(1,0)}),gn(9433343,2.2));o.scale.set(.014,.014,.03),o.position.set(0,.02,-.175),i.add(o);var c=new Fe(Nn("pgrip",.036,.11,.05,.012),z0());c.position.set(0,-.07,.01),c.rotation.x=.28,i.add(c);var u=new Fe(Nn("pom",.04,.014,.054,.005),e);u.position.set(0,-.123,.026),u.rotation.x=.28,i.add(u);var l=new Fe(new li(.018,.004,6,14,Math.PI),t);l.position.set(0,-.03,-.035),l.rotation.set(0,Math.PI/2,Math.PI),i.add(l);var h=new Fe(Nn("sight",.006,.01,.01,.002),gn(9433343,1.5));return h.position.set(0,.046,-.14),i.add(h),xa(i,0,-.07,.04,.3),i}function Y0(){var i=new vt,e=new Fe(Nn("fist",.1,.085,.11,.03),du());i.add(e);var t=new Fe(Nn("knuck",.105,.04,.03,.012),Zt(5917242,{metalness:.7,roughness:.35}));t.position.set(0,.02,-.06),i.add(t);var n=new Fe(Nn("thumb",.03,.03,.06,.012),du());n.position.set(-.05,-.01,-.02),i.add(n);var r=new Fe(Qe("cyl",di),G0());return r.scale.set(.05,.3,.05),r.rotation.x=Math.PI/2,r.position.set(0,-.01,.2),i.add(r),i}var ni=3e3;function zf(i,e){var t;if(typeof document!="undefined"){var n=document.createElement("canvas");n.width=n.height=i,e(n.getContext("2d"),i),t=new Ar(n)}else t=new on;return t.colorSpace=Wt,t.magFilter=qt,t}var dS=zf(32,function(i,e){var t=i.createRadialGradient(e/2,e/2,1,e/2,e/2,e/2);t.addColorStop(0,"rgba(0,0,0,1)"),t.addColorStop(.28,"rgba(10,8,6,0.95)"),t.addColorStop(.55,"rgba(30,24,18,0.55)"),t.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=t,i.fillRect(0,0,e,e),i.strokeStyle="rgba(190,175,150,0.55)",i.lineWidth=1.5,i.beginPath(),i.arc(e/2,e/2,e*.2,0,6.28),i.stroke();for(var n=0;n<9;n++){var r=Math.random()*6.28,s=5+Math.random()*6;i.fillStyle=n%3?"rgba(20,16,12,0.7)":"rgba(200,185,160,0.6)",i.fillRect(e/2+Math.cos(r)*s,e/2+Math.sin(r)*s,2,2)}}),pS=zf(32,function(i,e){var t=i.createRadialGradient(e/2,e/2,1,e/2,e/2,e/2);t.addColorStop(0,"rgba(18,16,15,0.85)"),t.addColorStop(.6,"rgba(30,27,25,0.5)"),t.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=t,i.fillRect(0,0,e,e);for(var n=0;n<14;n++){var r=Math.random()*6.28,s=4+Math.random()*11;i.fillStyle=n%4?"rgba(70,64,60,0.8)":"rgba(150,140,130,0.7)",i.fillRect(e/2+Math.cos(r)*s,e/2+Math.sin(r)*s,2,2)}}),K0=zf(64,function(i,e){i.translate(e/2,e/2);for(var t=0;t<8;t++){var n=t%2?e*.22:e*.48;i.rotate(Math.PI/4);var r=i.createLinearGradient(0,0,n,0);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.4,"rgba(230,230,230,0.85)"),r.addColorStop(1,"rgba(160,160,160,0)"),i.fillStyle=r,i.beginPath(),i.moveTo(0,-e*.05),i.lineTo(n,0),i.lineTo(0,e*.05),i.fill()}var s=i.createRadialGradient(0,0,0,0,0,e*.2);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(1,"rgba(200,200,200,0)"),i.fillStyle=s,i.beginPath(),i.arc(0,0,e*.2,0,6.28),i.fill()});function Z0(i){var e=new Float32Array(ni*3),t=new Float32Array(ni*3),n=new Float32Array(ni),r=new Float32Array(ni),s=new Float32Array(ni*3),a=new Float32Array(ni),o=new Float32Array(ni),c=new Float32Array(ni),u=new Float32Array(ni),l=new Float32Array(ni*3),h=new Uint8Array(ni),f=new Yt;f.setAttribute("position",new $t(e,3).setUsage(oa)),f.setAttribute("color",new $t(t,3).setUsage(oa)),f.setAttribute("size",new $t(n,1).setUsage(oa)),f.setAttribute("alpha",new $t(r,1).setUsage(oa));var p=new tn({uniforms:{scale:{value:600}},vertexShader:["attribute float size; attribute float alpha; attribute vec3 color; varying vec3 vC; varying float vA;","uniform float scale;","void main(){ vC = color; vA = alpha; vec4 mv = modelViewMatrix * vec4(position,1.0);"," gl_PointSize = size * scale / -mv.z; gl_Position = projectionMatrix * mv; }"].join(`
`),fragmentShader:["varying vec3 vC; varying float vA;","void main(){ vec2 d = gl_PointCoord - 0.5; float r = dot(d,d); if (r > 0.25) discard;"," float k = smoothstep(0.25, 0.0, r); gl_FragColor = vec4(vC * k * vA, k * vA); }"].join(`
`),transparent:!0,depthWrite:!1,blending:Vi}),v=new ns(f,p);v.frustumCulled=!1,i.add(v);var y=0,g=0;function m(V,Z,pe,xe,se,ie,$,ge,Ce,We,z,ct){var Xe=y;y=(y+1)%ni,g=Math.min(ni,g+1),e[Xe*3]=V,e[Xe*3+1]=Z,e[Xe*3+2]=pe,s[Xe*3]=xe,s[Xe*3+1]=se,s[Xe*3+2]=ie,l[Xe*3]=$[0],l[Xe*3+1]=$[1],l[Xe*3+2]=$[2],n[Xe]=ge,a[Xe]=o[Xe]=Ce,c[Xe]=We||0,u[Xe]=z||0,h[Xe]=ct?0:1}function x(V){return(Math.random()-.5)*2*V}for(var A=[],S=0;S<6;S++){var C=new Gn(16755285,0,6,1.6);C.userData={t:0,max:0,peak:0},i.add(C),A.push(C)}var I=0;function L(V,Z,pe,xe,se,ie,$){var ge=A[I];I=(I+1)%A.length,ge.position.set(V,Z,pe),ge.color.setHex(xe),ge.distance=$||6,ge.userData.t=ge.userData.max=ie,ge.userData.peak=se}var M=new Jn(1,1),T=[],D=0,H=180,_=new mn({map:dS,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),w=new mn({map:pS,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});function P(V,Z,pe,xe,se,ie,$,ge){var Ce=T[D];Ce||(Ce=new Fe(M,ge),Ce.renderOrder=1,i.add(Ce),T[D]=Ce),Ce.material=ge,Ce.position.set(V+xe*.004,Z+se*.004,pe+ie*.004),Ce.lookAt(V+xe,Z+se,pe+ie),Ce.rotateZ(Math.random()*6.28),Ce.scale.setScalar($),Ce.visible=!0,D=(D+1)%H}function k(V){if(V.surface==="floor")return[0,1,0];if(V.surface==="ceil")return[0,-1,0];var Z=V.x-Math.round(V.x),pe=V.z-Math.round(V.z);return Math.abs(Z)<Math.abs(pe)?[V.dx>0?-1:1,0,0]:[0,0,V.dz>0?-1:1]}for(var Y=new mn({color:14219519,transparent:!0,opacity:.9,blending:Vi,depthWrite:!1}),ne=new en(.012,.012,1),te=[],le=0,ue=0;ue<24;ue++){var he=new Fe(ne,Y.clone());he.visible=!1,he.userData.t=0,i.add(he),te.push(he)}function De(V){var Z=V.x2-V.x,pe=V.y2-V.y,xe=V.z2-V.z,se=Math.sqrt(Z*Z+pe*pe+xe*xe);if(!(se<1)){var ie=Math.min(.9,se*.2),$=Math.min(se-ie,2.5+Math.random()*2),ge=ie+Math.random()*Math.max(0,se-ie-$),Ce=te[le];le=(le+1)%te.length;var We=Z/se,z=pe/se,ct=xe/se,Xe=ge+$/2;Ce.position.set(V.x+We*Xe,V.y-.08+z*Xe,V.z+ct*Xe),Ce.lookAt(V.x+We*(Xe+1),V.y-.08+z*(Xe+1),V.z+ct*(Xe+1)),Ce.scale.set(1,1,$),Ce.visible=!0,Ce.userData.t=.05,Ce.material.opacity=.9}}var Ue=new Fi(.012,.012,.04,6),dt=new Fi(.02,.02,.07,8),je=new Kt({color:13146688,metalness:.9,roughness:.3}),it=new Kt({color:10118184,metalness:.8,roughness:.35}),de=[],me=0,Ee=[];function rt(V){var Z=de[me];Z||(Z=new Fe(Ue,je),i.add(Z),de[me]=Z);var pe=V.weapon==="shotgun";Z.geometry=pe?dt:Ue,Z.material=pe?it:je;var xe=-Math.sin(V.ang),se=Math.cos(V.ang);Z.position.set(V.x+Math.cos(V.ang)*.25+xe*.12,V.y,V.z+Math.sin(V.ang)*.25+se*.12),Z.userData={vx:xe*(1.4+Math.random())+Math.cos(V.ang)*.3,vy:1.6+Math.random()*.8,vz:se*(1.4+Math.random())+Math.sin(V.ang)*.3,spin:10+Math.random()*10,life:6,bounced:0},Z.visible=!0,me=(me+1)%30}var Be={blood:function(V){for(var Z=V.kill?18:10,pe=0;pe<Z;pe++)m(V.x,V.y,V.z,-V.dx*(1.2+Math.random()*1.6)+x(1.2),x(1)+1,-V.dz*(1.2+Math.random()*1.6)+x(1.2),[.16,.14,.13],.05+Math.random()*.05,.7,6);for(var xe=0;xe<6;xe++)m(V.x,V.y,V.z,-V.dx*2+x(2),x(1.5)+.8,-V.dz*2+x(2),[1.8,.12,.22],.025,.25,7);for(var se=0;se<(V.kill?10:3);se++)m(V.x+x(.1),V.y,V.z+x(.1),x(.3),.6+Math.random()*.8,x(.3),[1.8,1.6,1.1],.035,.8,-.6);L(V.x,V.y,V.z,16722490,V.kill?1.6:.8,.06,2),V.floorY!==void 0&&(V.kill||Math.random()<.35)&&P(V.x-V.dx*.5+x(.3),V.floorY+.002,V.z-V.dz*.5+x(.3),0,1,0,V.kill?.8:.45,w)},spark:function(V){for(var Z=0;Z<12;Z++)m(V.x,V.y,V.z,x(3),x(3)+1,x(3),[1.4,1.1,.5],.025,.35,8);L(V.x,V.y,V.z,10484991,2,.1,3)},puff:function(V){var Z=k(V),pe=V.cell===3||V.cell===4||V.cell===6||V.cell===7||V.cell===8;P(V.x,V.y,V.z,Z[0],Z[1],Z[2],.09+Math.random()*.04,_);for(var xe=pe?12:5,se=0;se<xe;se++)m(V.x,V.y,V.z,Z[0]*2+x(2),Z[1]*2+x(1.5)+1,Z[2]*2+x(2),[1.8,1.2,.5],.018,.2+Math.random()*.15,7);for(var ie=pe?[.3,.3,.32]:[.36,.3,.24],$=0;$<(pe?3:7);$++)m(V.x,V.y,V.z,Z[0]*.6+x(.3),Z[1]*.6+x(.3)+.2,Z[2]*.6+x(.3),ie,.1,.6+Math.random()*.4,-.2,.35);pe&&L(V.x+Z[0]*.1,V.y+Z[1]*.1,V.z+Z[2]*.1,16760944,1.2,.05,2)},tracer:function(V){De(V)},casing:function(V){V.delay?Ee.push({t:V.delay,e:V}):rt(V)},muzzle:function(V){var Z=V.weapon==="shotgun";L(V.x,V.y,V.z,Z?16760928:10479871,Z?7:4,.07,Z?9:6);for(var pe=0;pe<(Z?8:3);pe++)m(V.x,V.y+.05,V.z,x(.15),.25+Math.random()*.3,x(.15),[.2,.19,.18],.06,.9+Math.random()*.5,-.3,.12)},fireBurst:function(V){for(var Z=0;Z<22;Z++)m(V.x,V.y,V.z,x(2),x(2)+.5,x(2),Z%3?[1.8,.14,.24]:[2,1.2,1.1],.06,.35,2,-.1);L(V.x,V.y,V.z,16722490,4,.25,5)},greenBurst:function(V){for(var Z=0;Z<22;Z++)m(V.x,V.y,V.z,x(2),x(2)+.5,x(2),[.3,1.6,1.8],.06,.35,2,-.1);L(V.x,V.y,V.z,6287615,4,.25,5)},explosion:function(V){for(var Z=0;Z<90;Z++){var pe=Math.random()<.5;m(V.x,V.y,V.z,x(4),x(3)+2,x(4),pe?[2,1.3,1.1]:[1.7,.1,.2],.12+Math.random()*.1,.5+Math.random()*.4,3,.4)}for(var xe=0;xe<30;xe++)m(V.x,V.y+.3,V.z,x(1),Math.random()*1.5,x(1),[.18,.15,.13],.35,1.4,-.5,.6);L(V.x,V.y+.5,V.z,16726600,14,.5,9)},gib:function(V){for(var Z=0;Z<30;Z++)m(V.x+x(.2),V.y,V.z+x(.2),x(1.6),Math.random()*2,x(1.6),[.15,.13,.12],.07+Math.random()*.06,1.1,5,.2);if(V.kind!=="riley"){for(var pe=0;pe<28;pe++)m(V.x+x(.25),V.y-.2+Math.random()*.5,V.z+x(.25),x(.25),1.2+Math.random()*1.6,x(.25),pe%5?[1.5,1.3,.9]:[.5,1.3,1.6],.03+Math.random()*.025,1.2+Math.random()*.6,-.8);L(V.x,V.y+.4,V.z,16773320,2,.4,4)}if(V.kind==="riley")for(var xe=0;xe<60;xe++)m(V.x,V.y+Math.random(),V.z,x(1),Math.random()*1.5,x(1),[.3,1.5,1.7],.04,1.4,-.4)},summon:function(V){for(var Z=0;Z<50;Z++)m(V.x+x(.4),V.y,V.z+x(.4),x(.5),Math.random()*2.5,x(.5),[1.8,.12,.22],.07,.8,-1);L(V.x,V.y+.5,V.z,16722490,6,.6,6)},pickup:function(V){for(var Z=0;Z<16;Z++)m(V.x,V.y,V.z,x(1),Math.random()*1.5,x(1),[1.4,1.2,.5],.03,.5,-1)}},nt={points:v,stats:function(){return{decals:T.filter(function(V){return V&&V.visible}).length,tracers:te.filter(function(V){return V.visible}).length,casings:de.filter(function(V){return V&&V.visible}).length}},event:function(V){Be[V.name]&&Be[V.name](V)},trail:function(V,Z,pe,xe){m(V,Z,pe,x(.2),x(.2),x(.2),xe?[.3,1.4,1.6]:[1.8,.12,.22],.07,.3,0,-.15)},ember:function(V,Z,pe){m(V+x(.05),Z,pe+x(.05),x(.15),.4+Math.random()*.4,x(.15),[1.6,.6,.1],.02,1.1,-.2)},update:function(V,Z,pe){te.forEach(function($){$.visible&&($.userData.t-=V,$.material.opacity=Math.max(0,$.userData.t/.05)*.9,$.userData.t<=0&&($.visible=!1))});for(var xe=Ee.length-1;xe>=0;xe--)(Ee[xe].t-=V)<=0&&(rt(Ee[xe].e),Ee.splice(xe,1));de.forEach(function($){if(!(!$||!$.visible)){var ge=$.userData;if(ge.life-=V,ge.life<=0){$.visible=!1;return}ge.vy-=9*V,$.position.x+=ge.vx*V,$.position.y+=ge.vy*V,$.position.z+=ge.vz*V,$.rotation.x+=ge.spin*V,$.rotation.z+=ge.spin*.7*V;var Ce=pe?pe($.position.x,$.position.z):0;$.position.y<Ce+.012&&($.position.y=Ce+.012,ge.vy<-.5&&ge.bounced<3?(ge.vy=-ge.vy*.35,ge.vx*=.5,ge.vz*=.5,ge.spin*=.5,ge.bounced++,nt.onTink&&nt.onTink($.position)):(ge.vy=0,ge.vx*=.8,ge.vz*=.8,ge.spin*=.8,$.rotation.x=Math.PI/2))}}),p.uniforms.scale.value=Z;for(var se=0;se<g;se++){if(a[se]<=0){r[se]=0;continue}a[se]-=V,s[se*3+1]-=c[se]*V,e[se*3]+=s[se*3]*V,e[se*3+1]+=s[se*3+1]*V,e[se*3+2]+=s[se*3+2]*V;var ie=Math.max(0,a[se]/o[se]);r[se]=h[se]?ie:1,n[se]=Math.max(.005,n[se]+u[se]*V),t[se*3]=l[se*3],t[se*3+1]=l[se*3+1]*(.5+.5*ie),t[se*3+2]=l[se*3+2]*ie}f.attributes.position.needsUpdate=f.attributes.color.needsUpdate=f.attributes.size.needsUpdate=f.attributes.alpha.needsUpdate=!0,f.setDrawRange(0,g),A.forEach(function($){var ge=$.userData;ge.t>0?(ge.t-=V,$.intensity=ge.peak*Math.max(0,ge.t/ge.max)):$.intensity=0})}};return nt}var J0={slab:788743,tech:395532,hell:1443332};function j0(i,e){e=e||{};var t=new Wc({canvas:i,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!e.preserve}),n={scale:1,bloom:!0,shake:!0,weapon:!0},r=78;function s(){return Math.min(window.devicePixelRatio||1,1.5)*n.scale}t.setPixelRatio(s()),t.toneMapping=ls,t.toneMappingExposure=1.45;var a=new ha(t),o=a.fromScene(new $c,.04).texture;t.outputColorSpace=Wt,t.shadowMap.enabled=!1,t.info.autoReset=!1;var c=new sn(78,16/9,.03,60);c.rotation.order="YXZ";var u=null,l=null,h=null,f=null,p=null,v=new Map,y=[],g=new Map,m=[],x=new wr,A=new sn(60,16/9,.01,5),S=new Gn(16756848,0,3,1.5),C=new as(16767152,1.2);C.position.set(-1,2,1),x.add(new ea(16777215,.35),new $s(16769216,2103312,.8),S,C),x.environment=o,x.environmentIntensity=.6;var I=Bf(),L=new vt,M={};x.add(L);var T={fist:{p:[.14,-.15,-.3],ry:0},pistol:{p:[.15,-.14,-.38],ry:.06},shotgun:{p:[.1,-.13,-.2],ry:.04},chaingun:{p:[.12,-.15,-.22],ry:.04},rocket:{p:[.13,-.16,-.2],ry:.04}},D={fist:Y0,pistol:X0,shotgun:kf};function H(){Object.keys(M).forEach(function(Z){L.remove(M[Z])}),M={},Object.keys(T).forEach(function(Z){var pe=I.model(Z),xe;if(pe&&!_(pe,Z)&&(pe=null),pe){xe=new vt;var se=ps(pe);xe.add(se.obj),se.obj.rotation.y=Math.PI,se.obj.updateMatrixWorld(!0);var ie=new Pn().setFromObject(se.obj,!0),$=ie.max.z-ie.min.z;xe.userData.authoredLength=$;var ge={fist:.2,pistol:.24,shotgun:.85,chaingun:.8,rocket:.9};$>.001&&ge[Z]&&se.obj.scale.multiplyScalar(ge[Z]/$),["pump","slide","barrels","tube"].forEach(function(We){var z=se.obj.getObjectByName(We);z&&(xe.userData[We]=z)}),xe.userData.authored=!0,q0(xe,Z)}else if(D[Z])xe=D[Z]();else return;var Ce=T[Z];xe.position.set(Ce.p[0],Ce.p[1],Ce.p[2]),xe.rotation.y=Ce.ry,xe.userData.baseZ=Ce.p[2],xe.visible=!1,L.add(xe),M[Z]=xe})}function _(Z,pe){var xe=new Pn().setFromObject(Z.scene,!0),se=xe.getSize(new K);if(!(Z.meta&&(Z.meta.view==="first-person"||Z.meta.firstPerson)))return!1;var ie=se.z>=se.x&&se.z>=se.y*1.2&&se.z>.08&&se.z<1.6,$=!1;return Z.scene.traverse(function(ge){(/arm|hand|sleeve|glove/i.test(ge.name||"")||ge.material&&/skin|sleeve|glove|hand/i.test(ge.material.name||""))&&($=!0)}),!ie&&typeof console!="undefined"&&console.info("[assets] "+pe+" is not a first-person gun shape ("+se.x.toFixed(2)+" x "+se.y.toFixed(2)+" x "+se.z.toFixed(2)+" m); using the built-in one"),ie&&!$}H();function w(Z,pe){Z&&(Z.userData.z0===void 0&&(Z.userData.z0=Z.position.z),Z.position.z=Z.userData.z0+pe)}var P=new vt,k=new mn({map:K0,transparent:!0,blending:Vi,depthWrite:!1,side:Sn}),Y=new Fe(new Jn(1,1),k),ne=new Fe(new Jn(1,.6),k);ne.rotation.y=Math.PI/2,ne.position.z=-.25,P.add(Y,ne),P.scale.setScalar(.035);var te={pitch:0,vel:0,fov:0,roll:0,lastFire:1};x.add(P);var le=0,ue={x:0,y:0},he=0,De=0,Ue=null,dt={w:1,h:1,top:0};function je(Z){Ue=Z,u=new wr;var pe=J0[Z.L.floor]||J0.slab;u.background=new $e(pe),u.fog=new za(pe,.032),u.environment=o,u.environmentIntensity=.25,u.add(new $s(10520696,2103840,.9)),u.add(new ea(5261384,.5)),f=E0(Z,I),u.add(f.group),p=Z0(u),p.onTink=function(ie){e.onSound&&e.onSound("casingTink",ie)},v.clear(),g.clear(),y=[],Z.ents.forEach(function(ie){if(ie.kind==="torch"){var $=k0(ie,I);u.add($.obj),v.set(ie,$);var ge=new Gn(16747066,2.2,7.5,1.4);ge.position.set(ie.x,ie.y+1,ie.z),ge.userData.e=ie,u.add(ge),y.push(ge)}}),m=(Z.L.lights||[]).map(function(ie){var $=new Gn(ie.color||16777215,ie.intensity||2,ie.dist||10,1.3);return $.position.set(ie.x,ie.y||1.5,ie.z),$.userData=ie,u.add($),$});var xe=Z.L.darkZones||[];function se(ie){return xe.some(function($){return ie.x>=$[0]&&ie.x<=$[2]+1&&ie.z>=$[1]&&ie.z<=$[3]+1})}de(Z).forEach(function(ie){if(!se(ie)){var $=new Gn(13154472,1.6+ie.size*.02,4+Math.sqrt(ie.size)*1.6,1.1);$.position.set(ie.x,ie.y,ie.z),u.add($);var ge=I.model("lamp");if(ge){var Ce=ps(ge);Ce.obj.scale.setScalar(.5),Ce.obj.position.set(ie.x,ie.y+.4,ie.z),u.add(Ce.obj);return}var We=new vt,z=new Fe(new en(.5,.05,.5),new Kt({color:0,emissive:16770752,emissiveIntensity:1.1})),ct=new Fe(new en(.58,.1,.58),new Kt({color:2762790,metalness:.8,roughness:.4,wireframe:!0}));We.add(z,ct),We.position.set(ie.x,ie.y+.35,ie.z),u.add(We)}}),l=new Zc(t),l.addPass(new Jc(u,c)),h=new ma(new ot(256,256),.75,.55,.82),h.enabled=n.bloom,l.addPass(h),l.addPass(new jc),me(i.clientWidth,i.clientHeight)}function it(Z,pe,xe,se){var ie=Math.floor(xe)*Z.mw+Math.floor(pe);return Z.cells[ie]===0?Z.ceil[ie]:se}function de(Z){for(var pe=Z.W,xe=new Uint8Array(pe.mw*pe.mh),se=[],ie=0;ie<pe.cells.length;ie++)if(!(xe[ie]||pe.cells[ie]!==0)){var $=[ie],ge=0,Ce=0,We=0,z=0;for(xe[ie]=1;$.length;){var ct=$.pop(),Xe=ct%pe.mw,F=ct/pe.mw|0;ge+=Xe+.5,Ce+=F+.5,We=Math.max(We,pe.ceil[ct]),z++,[[1,0],[-1,0],[0,1],[0,-1]].forEach(function(E){var N=Xe+E[0],O=F+E[1],U=O*pe.mw+N;N<0||O<0||N>=pe.mw||O>=pe.mh||xe[U]||pe.cells[U]!==0||(xe[U]=1,$.push(U))})}z>=3&&se.push({x:ge/z,z:Ce/z,y:it(pe,ge/z,Ce/z,We)-.4,size:z})}return se}function me(Z,pe){!Z||!pe||(t.setSize(Z,pe,!1),dt={w:Z,h:pe},c.aspect=Z/pe,c.updateProjectionMatrix(),A.aspect=Z/pe,A.updateProjectionMatrix(),l&&(l.setSize(Z,pe),h.resolution.set(Z/2,pe/2)))}function Ee(Z,pe,xe){var se=Z.p,ie=new Set;Z.ents.forEach(function($){if($.kind==="torch"){v.get($).update(pe),Math.random()<xe*6&&p.ember($.x,$.y+1,$.z),ie.add($);return}if($.kind==="proj"){var ge=g.get($);ge||(ge=new Fe(new is(.09,10,8),new mn({color:$.green?10484991:16726602})),u.add(ge),g.set($,ge)),ge.position.set($.x,$.y,$.z),p.trail($.x,$.y,$.z,$.green),ie.add($);return}if($.kind!=="part"){var Ce=v.get($);if(!Ce){if($.kind==="pickup")Ce=B0($,I);else if($.mob)Ce=F0($,I);else return;u.add(Ce.obj),v.set($,Ce)}$.kind==="pickup"?Ce.update(pe):Ce.update(pe,xe,Math.atan2(se.z-$.z,se.x-$.x)),ie.add($)}}),v.forEach(function($,ge){ie.has(ge)||(u.remove($.obj),v.delete(ge))}),g.forEach(function($,ge){ie.has(ge)||(u.remove($),g.delete(ge))})}function rt(Z){var pe=Ue.p;m.forEach(function(xe,se){var ie=xe.userData,$=Ue.lightsOff&&Ue.lightsOff[ie.id],ge=ie.flicker?(Math.sin(Z*23+se)>.6?.15:1)*(.8+Math.random()*.2):1;xe.intensity=$?0:(ie.intensity||2)*ge}),y.forEach(function(xe,se){var ie=xe.userData.e,$=Math.sin(Z*13+se*7)*.12+Math.sin(Z*31+se*3)*.08+(Math.random()-.5)*.08,ge=(ie.x-pe.x)*(ie.x-pe.x)+(ie.z-pe.z)*(ie.z-pe.z)>400;xe.intensity=ge?0:2.2*(1+$)})}function Be(Z,pe,xe){var se=Z.p,ie=Math.hypot(Z.input.vx||0,Z.input.vz||0);se.onGround&&ie>.5&&(le+=xe*ie*2.6);var $=se.onGround?Math.min(1,ie/4):0,ge=Math.atan2(Math.sin(se.ang-he),Math.cos(se.ang-he)),Ce=se.pitch-De;he=se.ang,De=se.pitch,ue.x+=(-ge*.6-ue.x)*Math.min(1,xe*8),ue.y+=(Ce*.6-ue.y)*Math.min(1,xe*8),Object.keys(M).forEach(function(G){M[G].visible=G===se.weapon&&!se.dead});var We=M[se.weapon];if(We){var z=se.fireT,ct=z<.12?Math.sin(z/.12*Math.PI):0,Xe=se.lowerT>0?1-se.lowerT/.15:se.raiseT>0?se.raiseT/.15:0,F=Z.input.strafe||0,E=ie>4.2;te.roll+=(-F*.06-te.roll)*Math.min(1,xe*8);var N=E?.03:0;if(L.position.set(Math.sin(le)*.014*$+ue.x*.1,-Math.abs(Math.sin(le))*.012*$+Math.sin(le*2)*.004*$+ue.y*.1-Xe*.25-se.landT*.12-N,0),L.rotation.set(E?.12:0,E?-.15:0,te.roll),se.weapon==="fist")We.position.z=We.userData.baseZ-(z<.2?Math.sin(z/.2*Math.PI)*.18:0),We.rotation.x=z<.2?-Math.sin(z/.2*Math.PI)*.3:0;else{We.rotation.x=ct*(se.weapon==="shotgun"?.35:.2),We.position.z=We.userData.baseZ+ct*.05;var O=z>.3&&z<.7?Math.sin((z-.3)/.4*Math.PI):0;w(We.userData.pump,O*.09),w(We.userData.slide,ct*.04),We.userData.barrels&&(We.userData.barrels.rotation.z+=xe*(se.fireT<.3?30:0))}var U=z<.06&&se.weapon!=="fist"&&!se.dead;P.visible=U,P.position.set(We.position.x,We.position.y+(se.weapon==="shotgun"?0:.02),We.position.z-(se.weapon==="shotgun"?.72:.2)),P.scale.setScalar((se.weapon==="shotgun"?.2:.11)*(.8+Math.random()*.45)),Y.rotation.z=Math.random()*Math.PI*2,k.color.setHex(se.weapon==="shotgun"?16765562:11071743),S.color.setHex(se.weapon==="shotgun"?16760944:10479871),z<te.lastFire&&se.weapon!=="fist"&&(te.vel+=se.weapon==="shotgun"?1.6:.55,te.fov=se.weapon==="shotgun"?3:.8),te.lastFire=z,te.vel-=te.pitch*180*xe,te.vel*=Math.exp(-xe*16),te.pitch+=te.vel*xe,te.fov*=Math.exp(-xe*10),S.intensity=U?3:0,S.position.copy(P.position)}}function nt(Z,pe,xe,se){if(!se)return V(Z,pe,xe);var ie=Math.random,$=12345;Math.random=function(){return $=$*1103515245+12345&2147483647,$/2147483647};try{return V(Z,pe,0)}finally{Math.random=ie}}function V(Z,pe,xe){t.info.reset(),Z!==Ue&&je(Z);var se=Z.p;f.update(),Ee(Z,pe,xe),rt(pe),Z.events.forEach(function(ge){ge.t==="fx"&&p.event(ge)}),p.update(xe,dt.h*.9,function(ge,Ce){var We=Math.floor(ge),z=Math.floor(Ce);return We>=0&&z>=0&&We<Z.mw&&z<Z.mh?Z.W.floor[z*Z.mw+We]:0});var ie=n.shake?Z.shake*.004:0;c.position.set(se.x+(Math.random()-.5)*ie,se.y+se.eyeH+(Math.random()-.5)*ie,se.z+(Math.random()-.5)*ie),c.rotation.y=-Math.PI/2-se.ang,c.rotation.x=se.pitch+te.pitch,c.rotation.z=se.dead?Math.min(.5,se.deadT*.6):te.roll*.35;var $=r+te.fov;Math.abs(c.fov-$)>.01&&(c.fov=$,c.updateProjectionMatrix()),l.render(xe),t.autoClear=!1,t.clearDepth(),Be(Z,pe,xe),L.visible=n.weapon,t.render(x,A),t.autoClear=!0}return{setAssets:function(Z){I=Z,H(),Ue=null},setFov:function(Z){r=Z},setQuality:function(Z){for(var pe in Z)n[pe]=Z[pe];t.setPixelRatio(s()),h&&(h.enabled=n.bloom),me(dt.w,dt.h)},assets:function(){return I},fxStats:function(){return p?p.stats():null},debugModels:function(){var Z=[];return v.forEach(function(pe){pe.debug&&Z.push(pe.debug())}),Z},render:nt,resize:me,renderer:t,camera:c,info:function(){return t.info}}}var Ot=320,mS=200,Bt=168,$0=32,Gf=Bt/2,_a="#e03828",mu="#8a8478",Vf="#401008";function gS(i,e){var t=String(i).split(" "),n=[],r="";return t.forEach(function(s){var a=r?r+" "+s:s;a.length>e&&r?(n.push(r),r=s):r=a}),r&&n.push(r),n}function Fr(i){i=i|0;var e=i/60|0,t=i%60;return e+":"+(t<10?"0":"")+t}function Q0(i,e,t){function n(m,x){return m.time*(x||3)%1<.55}function r(m,x,A){return A?n(m,3)?"#ffffff":_a:x?"#ff9a28":_a}function s(m){return m.dead?Le.default.faces.dead:m.grinT>0?Le.default.faces.grin:m.painT>.25?Le.default.faces.pain:m.hp>=80?Le.default.faces.ok:m.hp>=55?Le.default.faces.hurt1:m.hp>=30?Le.default.faces.hurt2:Le.default.faces.hurt3}function a(m){var x=m.p;i.fillStyle="#3a352e",i.fillRect(0,Bt,Ot,$0),i.fillStyle="#14110d",i.fillRect(0,Bt,Ot,2),i.fillStyle="#57514a",i.fillRect(0,Bt+2,Ot,1),i.fillStyle="#24211c",[46,116,142,178,230,250].forEach(function(L){i.fillRect(L,Bt+4,1,$0-8)});var A=ba[x.weapon],S=A.ammo?x.ammo[A.ammo]:-1,C=A.ammo&&S<=(A.ammo==="shells"?4:10);Le.default.drawText(i,"AMMO",8,Bt+5,{color:S===0?_a:mu}),Le.default.drawText(i,A.ammo?String(S):"--",40,Bt+12,{scale:3,color:r(m,C,S===0),shadow:Vf,right:!0});var I=x.hp<=25;Le.default.drawText(i,"HEALTH",54,Bt+5,{color:I?_a:mu}),Le.default.drawText(i,x.hp+"%",108,Bt+12,{scale:3,color:r(m,x.hp<=50,I&&!x.dead),shadow:Vf,right:!0}),Le.default.drawText(i,"ARMS",129,Bt+5,{color:mu,center:!0}),ji.forEach(function(L,M){var T=119+M*8,D=x.weapons[L],H=(x.nextWeapon||x.weapon)===L,_=H?"#ffd23e":D?e.hasAmmo(x,L)?"#c8c0b0":"#6a5a4a":"#2a2620";Le.default.drawText(i,String(M+1),T,Bt+13,{scale:2,color:_}),H&&(i.fillStyle="#ffd23e",i.fillRect(T,Bt+25,6,1))}),i.drawImage(s(x).canvas,148,Bt+3),Le.default.drawText(i,"ARMOR",184,Bt+5,{color:mu}),Le.default.drawText(i,x.armor+"%",226,Bt+12,{scale:3,color:x.armor>0?_a:"#6a4a40",shadow:Vf,right:!0}),[["red","keyRed",5],["blue","keyBlue",18]].forEach(function(L){!x.keys[L[0]]&&!m.info.keys[L[0]]||(i.globalAlpha=x.keys[L[0]]?1:.18,i.drawImage(Le.default.things[L[1]].canvas,236,Bt+L[2]),i.globalAlpha=1)}),Le.default.drawText(i,"SPRK "+x.ammo.bullets+"/200",254,Bt+8,{color:A.ammo==="bullets"?"#ffd23e":"#c8c0b0"}),Le.default.drawText(i,"BELL "+x.ammo.shells+"/50",254,Bt+19,{color:x.weapons.shotgun?A.ammo==="shells"?"#ffd23e":"#c8c0b0":"#6a655c"})}function o(m){var x=Ot/2,A=Gf;if(t.crosshair){var S=e.aimTarget();i.fillStyle=S?S.barrel?"#ff9a28":"#ff4a2a":"rgba(232,224,200,0.8)",i.fillRect(x-5,A,3,1),i.fillRect(x+3,A,3,1),i.fillRect(x,A-5,1,3),i.fillRect(x,A+3,1,3)}var C=m.killT>0?"#ff3a1a":m.blockT>0?"#9aa4a8":m.hitT>0?"#ffffff":null;if(C){i.fillStyle=C;for(var I=m.killT>0?4:3,L=I;L<I+3;L++)i.fillRect(x-L,A-L,1,1),i.fillRect(x+L,A-L,1,1),i.fillRect(x-L,A+L,1,1),i.fillRect(x+L,A+L,1,1)}}function c(m){var x=m.p,A=Ot/2,S=Gf,C=34;m.hurtDirs.forEach(function(I){var L=I.ang-x.ang,M=Math.sin(L),T=-Math.cos(L),D=A+M*C,H=S+T*C;i.fillStyle="rgba(255,40,16,"+Math.min(.9,I.t).toFixed(3)+")",i.beginPath(),i.moveTo(D+M*9,H+T*9),i.lineTo(D-T*7,H+M*7),i.lineTo(D+T*7,H-M*7),i.closePath(),i.fill()})}function u(){var m=e.usePrompt();if(m){var x=Gf+14;if(m.verb){var A=Le.default.textWidth(m.verb,1),S=13+A,C=(Ot-S)/2|0;i.fillStyle="rgba(0,0,0,0.55)",i.fillRect(C-3,x-3,S+6,13),i.fillStyle="#e8e0c8",i.fillRect(C,x-1,9,9),i.fillStyle="#14110d",i.fillRect(C+1,x,7,7),Le.default.drawText(i,"E",C+3,x+1,{color:"#ffd23e"}),Le.default.drawText(i,m.verb,C+13,x+1,{color:m.color,shadow:!0})}else{var I=Le.default.textWidth(m.text,1);i.fillStyle="rgba(0,0,0,0.55)",i.fillRect((Ot-I)/2-4,x-3,I+8,13),Le.default.drawText(i,m.text,Ot/2,x+1,{color:m.color,shadow:!0,center:!0})}}}function l(m,x){if(!(!t.goalMarker||!x)){var A=e.goalTarget();if(A){var S=m.p,C=Math.hypot(A.x-S.x,A.z-S.z);if(!(C<1.6)){var I={x:A.x,y:A.y,z:A.z},L=vS(x,I),M=m.time*2%1<.7?"#ffd23e":"#c89a20";if(i.fillStyle=M,i.beginPath(),L.inFront&&L.x>8&&L.x<Ot-8&&L.y>8&&L.y<Bt-8){var T=Math.round(L.x),D=Math.round(L.y)-8;i.moveTo(T,D-4),i.lineTo(T+4,D),i.lineTo(T,D+4),i.lineTo(T-4,D),i.closePath(),i.fill(),Le.default.drawText(i,String(Math.round(C*2))+"M",T,D+7,{color:M,shadow:!0,center:!0})}else{var H=Math.atan2(A.z-S.z,A.x-S.x)-S.ang;H=Math.atan2(Math.sin(H),Math.cos(H));var _=H>0,w=_?Ot-6:6,P=40;i.moveTo(w+(_?4:-4),P),i.lineTo(w-(_?3:-3),P-5),i.lineTo(w-(_?3:-3),P+5),i.closePath(),i.fill(),Le.default.drawText(i,"GOAL",_?Ot-12:12,P-2,{color:M,shadow:!0,right:_})}}}}}function h(m){var x=m.p;if(!(x.dead||x.hp>25))for(var A=.18+.14*Math.sin(m.time*5),S=0;S<6;S++)i.fillStyle="rgba(200,0,0,"+(A*(1-S/6)).toFixed(3)+")",i.fillRect(S*2,0,2,Bt),i.fillRect(Ot-S*2-2,0,2,Bt),i.fillRect(0,S*2,Ot,2),i.fillRect(0,Bt-S*2-2,Ot,2)}var f={imp:["A HOLLOW BURNED YOU DOWN.","TIP: STRAFE WITH A AND D TO SIDESTEP ITS EMBERS."],gnasher:["A HOLLOW HOUND RAN YOU DOWN.","TIP: BACK AWAY WHILE YOU SHOOT, OR JUMP UP WHERE IT CAN'T FOLLOW."],knight:["THE RESET WARDEN CRUSHED YOU.","TIP: KEEP YOUR DISTANCE AND BRING BELL CHARGES."],riley:["RILEY OUTPLAYED YOU.","TIP: WHEN HER VISOR FLASHES WHITE, SHE IS ABOUT TO SHOOT. MOVE!"],barrel:["A MERCURY CASK BURST IN YOUR FACE.","TIP: SHOOT CASKS FROM FAR AWAY, WHEN HOLLOWS ARE NEAR THEM."]};function p(m){var x=m.p;if(!(!x.dead||x.deadT<1)){var A=f[m.killer]||["YOU WERE OVERWHELMED.","TIP: FIGHT FROM HIGH GROUND SO HOLLOWS COME TO YOU ONE AT A TIME."];i.fillStyle="rgba(0,0,0,0.5)",i.fillRect(0,44,Ot,72),Le.default.drawText(i,"KNOCKED DOWN",Ot/2,50,{scale:3,color:_a,shadow:!0,center:!0}),Le.default.drawText(i,A[0],Ot/2,72,{color:"#e8e0c8",shadow:!0,center:!0}),Le.default.drawText(i,A[1],Ot/2,84,{color:"#8fe0a0",shadow:!0,center:!0}),x.deadT>1.2&&m.time%1<.7&&Le.default.drawText(i,"CLICK OR PRESS ENTER TO TRY AGAIN",Ot/2,100,{color:"#f0d848",shadow:!0,center:!0})}}function v(m){var x=4;m.msgs.forEach(function(S){var C=gS(S.text,78);S.t<.4&&(i.globalAlpha=Math.max(0,S.t/.4)),C.forEach(function(I){Le.default.drawText(i,I,4,x,{color:S.color||"#f0d848",shadow:!0}),x+=7}),i.globalAlpha=1,x+=1});var A=m.notice;A&&(i.globalAlpha=Math.min(1,A.t/.4),Le.default.drawText(i,A.text,Ot/2,50,{scale:2,color:A.color,shadow:!0,center:!0}),i.globalAlpha=1)}function y(m){var x=m.boss;if(!(!x||x.state==="idle"||x.state==="dead")){var A=140,S=(Ot-A)/2,C=Bt-12,I=x.shieldT>0;Le.default.drawText(i,I?"RILEY - SHIELDED":"RILEY",Ot/2,C-8,{color:I?"#ffd23e":"#6fe0ec",shadow:!0,center:!0}),i.fillStyle="#06141c",i.fillRect(S-1,C-1,A+2,6),i.fillStyle=I?"#ffd23e":"#3fd8c8",i.fillRect(S,C,Math.max(0,x.hp/x.maxHp)*A,4),i.fillStyle="#06141c",i.fillRect(S+A*.33,C,1,4),i.fillRect(S+A*.66,C,1,4)}}function g(m){i.fillStyle="rgba(0,0,0,0.8)",i.fillRect(0,0,Ot,Bt);for(var x=22,A=Bt-14,S=Math.min((Ot-16)/m.mw,(A-x)/m.mh),C=(Ot-m.mw*S)/2,I=x+(A-x-m.mh*S)/2,L=m.time*2%1<.6,M=0;M<m.mh;M++)for(var T=0;T<m.mw;T++){var D=M*m.mw+T,H=m.W.cells[D];if(m.seen[D]){var _=null;if(H===0){var w=m.W.floor[D];_="rgb("+(40+w*50|0)+","+(34+w*40|0)+","+(28+w*30|0)+")"}else H===6?_="#c8a030":H===11?_=m.doors[T+","+M].found?"#c8a030":"#6a655c":H===7?_="#ff3a2a":H===8?_="#4a7aff":H===9||H===10?_=L||H===10?"#58e068":"#1e5a26":_="#8a8478";i.fillStyle=_,i.fillRect(C+T*S,I+M*S,Math.max(1,S-.4),Math.max(1,S-.4))}}var P=e.goalTarget();if(P&&L){var k=C+P.x*S,Y=I+P.z*S;i.fillStyle="#ffd23e",i.fillRect(k-3,Y-3,7,1),i.fillRect(k-3,Y+3,7,1),i.fillRect(k-3,Y-3,1,7),i.fillRect(k+3,Y-3,1,7)}var ne=m.p,te=C+ne.x*S,le=I+ne.z*S,ue=Math.cos(ne.ang),he=Math.sin(ne.ang);i.fillStyle="#f8f4e0",i.beginPath(),i.moveTo(te+ue*5,le+he*5),i.lineTo(te-ue*3-he*3,le-he*3+ue*3),i.lineTo(te-ue*3+he*3,le-he*3-ue*3),i.closePath(),i.fill(),Le.default.drawText(i,m.L.name,6,4,{color:"#ff9a28",shadow:!0}),Le.default.drawText(i,"TAB: CLOSE",Ot-6,4,{color:"#8a8478",right:!0}),Le.default.drawText(i,"GOAL: "+e.objective(),6,12,{color:"#f0d848",shadow:!0});var De=m.stats;Le.default.drawText(i,"FREED "+De.kills+"/"+De.totalKills+"  ITEMS "+De.items+"/"+De.totalItems+"  SECRETS "+De.secrets+"/"+De.totalSecrets+"  TIME "+Fr(m.time),Ot-6,12,{color:"#c8c0b0",right:!0}),Le.default.drawText(i,"BRIGHTER FLOOR = HIGHER GROUND",6,Bt-9,{color:"#a8a090"})}return{draw:function(m,x){i.clearRect(0,0,Ot,mS);var A=m.p;A.dmgFlash>0&&(i.fillStyle="rgba(255,20,10,"+(A.dmgFlash*.8).toFixed(3)+")",i.fillRect(0,0,Ot,Bt)),A.bonusFlash>0&&(i.fillStyle="rgba(255,220,80,"+(A.bonusFlash*.7).toFixed(3)+")",i.fillRect(0,0,Ot,Bt)),h(m),x.map?g(m):!A.dead&&!x.menu&&(c(m),l(m,x.camera),o(m),u()),x.map||y(m),v(m),p(m),a(m)}}}function vS(i,e){var t=i.matrixWorldInverse.elements,n=i.projectionMatrix.elements,r=e.x,s=e.y,a=e.z,o=t[0]*r+t[4]*s+t[8]*a+t[12],c=t[1]*r+t[5]*s+t[9]*a+t[13],u=t[2]*r+t[6]*s+t[10]*a+t[14],l=n[0]*o+n[4]*c+n[8]*u+n[12],h=n[1]*o+n[5]*c+n[9]*u+n[13],f=n[3]*o+n[7]*c+n[11]*u+n[15];return f<=.01?{inFront:!1}:{inFront:!0,x:(l/f*.5+.5)*Ot,y:(1-(h/f*.5+.5))*Bt}}var lm=_s(Cu(),1),En=Kf.default.SETTINGS,_t=Kf.default.MENU,Rt=En.v;Rt.invertY===void 0&&(Rt.invertY=!1);Rt.fov===void 0&&(Rt.fov=78);var Pt=320,wn=200,cm=168,um=document.getElementById("view"),mi=document.getElementById("hud");mi.width=Pt;mi.height=wn;var Ne=mi.getContext("2d");Ne.imageSmoothingEnabled=!1;var Ho=/debug/.test(location.search),mt=Lu({levels:vi,rng:Du(Ho?+(/seed=(\d+)/.exec(location.search)||[])[1]||1:(Date.now()&4294967295)>>>0),storage:(function(){try{return window.localStorage}catch{return null}})(),settings:Rt,saveSettings:function(){En.save()},onProgress:function(i,e){En.unlock(Math.min(i+1,vi.length-1)),xS=En.record?En.record(i,e):null}}),xS=null,pi=j0(um,{preserve:Ho,onSound:function(i,e){var t=mt.state();if(!(!t||Wn!=="game")){var n=e.x-t.p.x,r=e.z-t.p.z;_n.default.play(i,Math.sqrt(n*n+r*r),Math.sin(Math.atan2(r,n)-t.p.ang)*.7)}}}),_S=Q0(Ne,mt,Rt),Wn="title",Ci=0,Zi=!1,ya=!1,Pi=!1,Fo=!1;function Bo(){return Gr[Rt.difficulty]||Gr[1]}function vu(){_n.default.setVolume(Rt.volume/10),pi.setFov(Rt.fov),pi.setQuality({scale:Rt.quality||1,bloom:Rt.bloom!==!1,shake:Rt.shake!==!1})}function hm(){var i=window.innerWidth,e=window.innerHeight,t=Math.min(i,e*1.6),n=t/1.6,r=(i-t)/2,s=(e-n)/2;mi.style.cssText="left:"+r+"px;top:"+s+"px;width:"+t+"px;height:"+n+"px";var a=Math.round(n*cm/wn);um.style.cssText="left:"+r+"px;top:"+s+"px;width:"+t+"px;height:"+a+"px",pi.resize(Math.round(t),a)}window.addEventListener("resize",hm);hm();var yu=mt.keys,zo=!1;function fm(){for(var i in yu)yu[i]=!1;zo=!1,mt.setFire(!1)}document.addEventListener("keydown",function(i){if((["Tab","Space"].indexOf(i.code)>=0||i.code.slice(0,5)==="Arrow")&&i.preventDefault(),_n.default.init(),!!Su){if(_t.isOpen()){_n.default.startMusic(),_t.key(i.code);return}if(!i.repeat){if(i.code==="Enter"||i.code==="NumpadEnter"){Mu();return}if(Wn!=="game"){i.code==="Space"&&Mu();return}if(i.code==="Escape"&&Zi&&!Pi){mm();return}yu[i.code]=!0;var e=mt.state();if(i.code==="Tab"&&(ya=!ya,e.usedMap=!0),i.code==="KeyM"){var t=_n.default.toggleMusic();e.msgs.push({text:"MUSIC "+(t?"ON":"OFF"),t:2})}(i.code==="ControlLeft"||i.code==="ControlRight")&&(zo=!0,mt.setFire(!0)),i.code==="Digit1"&&mt.switchWeapon("fist"),i.code==="Digit2"&&mt.switchWeapon("pistol"),i.code==="Digit3"&&mt.switchWeapon("shotgun"),i.code==="KeyQ"&&mt.quickSwitch()}}});document.addEventListener("keyup",function(i){yu[i.code]=!1,(i.code==="ControlLeft"||i.code==="ControlRight")&&(zo=!1,mt.setFire(!1))});window.addEventListener("blur",fm);document.addEventListener("pointerlockchange",function(){Pi=document.pointerLockElement===mi,fm(),Pi?(Fo=!1,Wn==="game"&&_t.close(),!Zi&&Wn==="game"&&MS()):Wn==="game"&&Zi&&mm()});document.addEventListener("pointerlockerror",function(){Fo=!0});function ko(){try{var i=mi.requestPointerLock({unadjustedMovement:!0});i&&i.catch&&i.catch(function(){try{mi.requestPointerLock()}catch{Fo=!0}})}catch{Fo=!0}}function yS(){try{document.exitPointerLock()}catch{}}function dm(i){var e=mi.getBoundingClientRect();return{x:(i.clientX-e.left)/e.width*Pt,y:(i.clientY-e.top)/e.height*wn}}document.addEventListener("mousemove",function(i){var e=mt.state();if(Pi&&Wn==="game"&&e&&!e.p.dead){var t=44e-5*Rt.sens;e.p.ang+=i.movementX*t,e.p.pitch-=i.movementY*t*(Rt.invertY?-1:1),e.p.pitch=Math.max(-1.3,Math.min(1.3,e.p.pitch));return}if(_t.isOpen()){var n=dm(i);mi.style.cursor=_t.pointer(n.x,n.y)?"pointer":"default"}});mi.addEventListener("mousedown",function(i){if(_n.default.init(),_n.default.startMusic(),_t.isOpen()){var e=dm(i);i.button===0&&_t.click(e.x,e.y);return}if(Wn==="game"){var t=mt.state();if(!Pi){_t.close(),ko();return}if(t.p.dead){Mu();return}i.button===0&&(zo=!0,mt.setFire(!0)),i.button===2&&(mt.keys.Space=!0);return}Mu()});document.addEventListener("mouseup",function(i){i.button===0&&(zo=!1,mt.setFire(!1)),i.button===2&&(mt.keys.Space=!1)});mi.addEventListener("contextmenu",function(i){i.preventDefault()});mi.addEventListener("wheel",function(i){Wn==="game"&&Pi&&(i.preventDefault(),i.deltaY&&mt.cycleWeapon(i.deltaY>0?1:-1))},{passive:!1});var xu=!1;function MS(){Zi=!0}function pm(i){mt.startLevel(i,!1),Zi=!1,ya=!1,Wn="game",_t.close(),ko()}function Mu(){_n.default.init(),_n.default.startMusic();var i=mt.mode();if(i==="inter"){if(!xu&&Ci<1.3){xu=!0;return}xu=!1,mt.onEnter(),mt.onEnter(),mt.mode()==="game"&&(Zi=Pi)}else if(i==="victory")Ci>1&&Zf();else if(i==="game"){var e=mt.state();e.p.dead?e.p.deadT>1.2&&(mt.retryLevel(),Zi=Pi):Pi||(_t.close(),ko())}}function Zf(){mt.setMode("title"),Wn="title",_t.open($f()),yS()}function mm(){ya=!1,_t.open(IS()),_n.default.play("menu")}function Wf(i,e,t){for(var n=0;n<Pt;n+=2){var r=Math.sin(n*.07+e*3+t)+Math.sin(n*.13-e*2.2),s=6+r*4;Ne.fillStyle=r>.7?"#ffd23e":r>-.3?"#ff7a18":"#a83010",Ne.fillRect(n,i-s,2,s+4)}}var em=Lu({levels:vi,rng:Du(7),storage:null,settings:{difficulty:1,tips:!1,seenTips:{}}}),SS={0:{x:19.5,z:9.4,y:2,ang:-1.6,pitch:.1,sway:.1},1:{x:17.5,z:26.6,y:2,ang:-Math.PI/2,pitch:-.2,sway:.18},2:{x:17.5,z:33.3,y:1.5,ang:-Math.PI/2,pitch:-.12,sway:.2},3:null},qf=-1,gs=null;function gm(i){if(i!==qf){qf=i,em.startLevel(i,!1),gs=em.state();var e=SS[i],t=gs.p;e&&(t.x=e.x,t.z=e.z,t.y=e.y),t.baseAng=e?e.ang:t.ang,t.basePitch=e?e.pitch:.05,t.sway=e?e.sway:.3,gs.msgs.length=0,gs.notice=null}}function TS(i){var e=gs.p;e.ang=e.baseAng+Math.sin(i*.11)*e.sway,e.pitch=e.basePitch+Math.sin(i*.17)*.04}var _u=150;function Go(i,e){Ne.fillStyle="rgba(6,4,3,0.84)",Ne.fillRect(0,0,_u,wn);for(var t=0;t<40;t++)Ne.fillStyle="rgba(6,4,3,"+(.84*(1-t/40)).toFixed(3)+")",Ne.fillRect(_u+t,0,1,wn);Ne.fillStyle="#ff7a18",Ne.fillRect(_u-1,0,1,wn),Ne.fillStyle="rgba(0,0,0,0.35)",Ne.fillRect(0,wn-14,Pt,14)}function bS(i,e){Le.default.drawText(Ne,"FIREBIRD",i+1,e+1,{scale:3,color:"#401008"}),Le.default.drawText(Ne,"FIREBIRD",i,e,{scale:3,color:"#ff9a28"}),Le.default.drawText(Ne,"3D",i+98,e-2,{scale:4,color:"#ffd23e",shadow:"#803008"}),Le.default.drawText(Ne,"EPISODE ONE: KNEE-DEEP IN THE ASHES",i,e+21,{color:"#a8a090"})}function Tu(i,e){Le.default.drawText(Ne,i,14,e||14,{scale:2,color:"#ff9a28",shadow:"#401008"}),Ne.fillStyle="#5e2a10",Ne.fillRect(14,(e||14)+13,_u-28,1)}function Jf(i,e){var t=String(i).split(" "),n=[],r="";return t.forEach(function(s){var a=r?r+" "+s:s;a.length>e&&r?(n.push(r),r=s):r=a}),r&&n.push(r),n}function jf(i){var e=_t.selected(),t=e&&(typeof e.info=="function"?e.info():e.info);t&&Jf(t,33).forEach(function(n,r){Le.default.drawText(Ne,n,14,(i||150)+r*8,{color:"#a8a090"})})}function Vo(i){Le.default.drawText(Ne,i||"ARROWS / MOUSE: CHOOSE   ENTER: SELECT   ESC: BACK",14,wn-10,{color:"#6a655c"})}function Xf(i,e,t,n,r){var s=Le.default.textWidth(t,1)+6;return Ne.fillStyle=n?r||"#ffd23e":"#2e2a24",Ne.fillRect(i,e,s,9),Ne.fillStyle=n?"#1a0e06":"#14110d",Ne.fillRect(i+1,e+1,s-2,7),Le.default.drawText(Ne,t,i+3,e+2,{color:n?r||"#ffd23e":"#4a463c"}),s+3}function Br(i){return i?"ON":"OFF"}var tm={alignLeft:!0,x0:20,x1:138,footer:""};function Wo(i){var e={};for(var t in tm)e[t]=tm[t];for(var n in i)e[n]=i[n];return e}var nm=(function(){try{return lm.default.recall(window.localStorage)}catch{return{fights:0,wins:0}}})();function ES(){return nm.fights?nm.wins?"WELCOME BACK. I'VE BEEN PRACTISING SINCE YOU BEAT ME.":"WELCOME BACK. I STILL REMEMBER HOW YOU FIGHT.":"HI! I'M RILEY. COME FIND ME AT THE TOP OF E1M1."}function vm(i,e){Go(i,e),bS(14,16),Le.default.drawText(Ne,"A NIX GAMES PRODUCTION BY PHOENIX",14,wn-24,{color:"#6a655c"});var t=Jf("RILEY: "+ES(),34);Ne.fillStyle="rgba(0,0,0,0.45)",Ne.fillRect(170,146,144,t.length*8+6),t.forEach(function(n,r){Le.default.drawText(Ne,n,174,150+r*8,{color:"#6fe0ec",shadow:!0})})}var wS={E1M1:"RILEY TEACHES YOU THE ROPES ON THE WAY UP, THEN SPARS WITH YOU IN HER ARENA.",E1M2:"DRAIN THE OVERSEERS' FURNACE, TAKE THE RED KEYSTONE, AND SURVIVE THE FORGE.",E1M3:"THE RESET WARDEN GUARDS THE ENGINE THAT IS BURYING ASHGATE. SHUT IT DOWN.",E1M4:"RILEY'S TRIAL. SHE REMEMBERS HOW YOU FOUGHT, AND THIS TIME SHE IS NOT HOLDING BACK."};function $f(){var i=En.progress;return Wo({drawBg:vm,scale:2,top:62,gap:14,drawExtra:function(){jf(136),Vo()},items:function(){var e=[];return i.unlocked>0&&e.push({label:"CONTINUE",action:function(){pm(i.unlocked)},info:function(){return vi[i.unlocked].name+" ON "+Bo().name+"."}}),e.push({label:"NEW GAME",action:function(){_t.push(xm(0))},info:"START THE EPISODE FROM THE BEGINNING."},{label:"LEVELS",action:function(){_t.push(AS())},info:"PICK A LEVEL, SEE YOUR BEST TIMES AND MEDALS."},{label:"OPTIONS",action:function(){_t.push(Qf(0))},info:"CONTROLS, VIDEO, AUDIO AND GAMEPLAY."},{label:"CONTROLS",action:function(){_t.push(_m())},info:"EVERY KEY, ON ONE PAGE."}),e}})}function xm(i){var e=Gr.map(function(t,n){return{label:t.name,info:t.desc,action:function(){Rt.difficulty=n,En.save(),pm(i)}}});return e.push({label:"BACK",action:function(){_t.back()}}),Wo({drawBg:Go,scale:2,top:46,gap:16,sel:Rt.difficulty,items:e,drawExtra:function(){Tu("DIFFICULTY"),jf(118),Le.default.drawText(Ne,vi[i].name,14,32,{color:"#c8c0b0"}),Vo()}})}function AS(){var i=vi.map(function(t,n){var r=n<=En.progress.unlocked,s=t.name.split(":")[0];return{label:r?t.name.replace(": ","  "):s+"  LOCKED",level:n,disabled:function(){return!r},action:function(){_t.push(xm(n))}}});i.push({label:"BACK",action:function(){_t.back()}});var e=Math.min(En.progress.unlocked,vi.length-1);return Wo({drawBg:Go,scale:1,top:40,gap:13,sel:e,items:i,drawExtra:function(){Tu("LEVELS");var t=_t.selected(),n=t&&t.level!==void 0?t.level:qf;t&&t.level!==void 0&&gm(n),RS(n),Vo()}})}function RS(i){var e=vi[i],t=e.name.split(":")[0],n=e.name.split(": ")[1]||e.name,r=i<=En.progress.unlocked,s=En.best?En.best(i):null,a=172,o=Jf(wS[t]||"",34),c=58+o.length*8,u=166-c;Ne.fillStyle="rgba(6,4,3,0.72)",Ne.fillRect(a-6,u-6,Pt-a,c),Ne.fillStyle="#ff7a18",Ne.fillRect(a-6,u-6,1,c),Le.default.drawText(Ne,t+(e.heights?"   REBUILT IN 3D":"   CLASSIC LAYOUT"),a,u,{color:e.heights?"#8fe0a0":"#8a8478"}),Le.default.drawText(Ne,n,a,u+9,{scale:2,color:"#ff9a28",shadow:"#401008"}),o.forEach(function(p,v){Le.default.drawText(Ne,p,a,u+25+v*8,{color:"#c8c0b0"})});var l=mt.levelInfo(e),h=u+28+o.length*8;l.boss&&Xf(a,h-1,"BOSS: RILEY",!0,"#6fe0ec"),Le.default.drawText(Ne,"PAR "+Fr(e.par)+(s&&s.time!==null?"   BEST "+Fr(s.time):""),l.boss?a+60:a,h+1,{color:"#a8a090"});var f=a;(En.MEDALS||["PAR","KILLS","ITEMS","SECRETS"]).forEach(function(p){f+=Xf(f,h+12,p==="KILLS"?"FREED":p,!!(s&&s.medals&&s.medals[p]))}),r||(Ne.fillStyle="rgba(0,0,0,0.55)",Ne.fillRect(a-5,u-5,Pt-a-1,c-2),Le.default.drawText(Ne,"LOCKED",a+60,u+22,{scale:2,color:"#ff9a28",shadow:!0}),Le.default.drawText(Ne,"FINISH THE LEVEL BEFORE IT",a+30,u+42,{color:"#a8a090"}))}var gu=["CONTROLS","VIDEO","AUDIO","GAMEPLAY"],im={sens:5,invertY:!1,fov:78,quality:1,bloom:!0,shake:!0,fps:!1,volume:7,crosshair:!0,goalMarker:!0,tips:!0,difficulty:1};function Qf(i){function e(a,o,c,u){return function(l){var h=+(Rt[a]+l*(u||1)).toFixed(2);Rt[a]=h>c?o:h<o?c:h,En.save(),vu()}}function t(a){return function(){Rt[a]=!Rt[a],En.save(),vu()}}var n={label:"SECTION",value:function(){return gu[i]},adjust:function(a){_t.replace(Qf((i+a+gu.length)%gu.length))},info:"LEFT AND RIGHT TO SWITCH BETWEEN CONTROLS, VIDEO, AUDIO AND GAMEPLAY."},r=[[{label:"MOUSE SPEED",slider:[0,10,function(){return Rt.sens}],adjust:e("sens",1,10),info:"HOW FAST THE VIEW TURNS."},{label:"INVERT Y",value:function(){return Br(Rt.invertY)},adjust:t("invertY"),info:"PUSH THE MOUSE FORWARD TO LOOK DOWN INSTEAD OF UP."},{label:"FIELD OF VIEW",value:function(){return Rt.fov},adjust:e("fov",60,110,5),info:"HOW WIDE YOU SEE, IN DEGREES. WIDER SHOWS MORE."}],[{label:"RESOLUTION",value:function(){return Math.round((Rt.quality||1)*100)+"%"},adjust:e("quality",.5,1,.25),info:"LOWER IS FASTER ON SLOW COMPUTERS, AND CHUNKIER."},{label:"GLOW",value:function(){return Br(Rt.bloom!==!1)},adjust:t("bloom"),info:"THE SOFT GLOW AROUND FIRE, RED MERCURY AND LIGHTS."},{label:"SCREEN SHAKE",value:function(){return Br(Rt.shake!==!1)},adjust:t("shake"),info:"THE VIEW KICKS ON SHOTS, HITS AND EXPLOSIONS."},{label:"SHOW FPS",value:function(){return Br(!!Rt.fps)},adjust:t("fps"),info:"FRAMES PER SECOND, IN THE CORNER."}],[{label:"VOLUME",slider:[0,10,function(){return Rt.volume}],adjust:e("volume",0,10),info:"LOUDNESS OF EVERYTHING."},{label:"MUSIC",value:function(){return Br(_n.default.isMusicOn())},adjust:function(){_n.default.setMusic(!_n.default.isMusicOn())},info:"PRESS M DURING PLAY TO TOGGLE IT TOO."}],[{label:"DIFFICULTY",value:function(){return Bo().name},adjust:e("difficulty",0,2),info:function(){return Bo().desc}},{label:"CROSSHAIR",value:function(){return Br(Rt.crosshair)},adjust:t("crosshair"),info:"A SMALL AIMING MARK. TURNS RED OVER A HOLLOW."},{label:"GOAL MARKER",value:function(){return Br(Rt.goalMarker)},adjust:t("goalMarker"),info:"POINTS AT YOUR GOAL ONCE YOU HAVE SEEN IT."},{label:"TIPS",value:function(){return Br(Rt.tips)},adjust:function(){Rt.tips=!Rt.tips,Rt.tips&&(Rt.seenTips={}),En.save()},info:"SHORT HINTS THE FIRST TIME SOMETHING NEW HAPPENS. ON AGAIN SHOWS THEM ALL."},{label:"RESET ALL",action:function(){_t.push(Yf("RESET?","EVERY OPTION BACK TO ITS DEFAULT.",function(){for(var a in im)Rt[a]=im[a];En.save(),vu(),_t.back()}))},info:"EVERY OPTION BACK TO ITS DEFAULT. PROGRESS AND MEDALS ARE KEPT."}]],s=[n].concat(r[i]).concat([{label:"BACK",action:function(){_t.back()}}]);return Wo({drawBg:Go,x1:142,scale:1,top:44,gap:13,items:s,drawExtra:function(){Tu("OPTIONS");var a=14;gu.forEach(function(o,c){a+=Xf(a,32,o,c===i)}),jf(44+s.length*13+6),Vo("ARROWS / MOUSE: CHOOSE   LEFT / RIGHT: CHANGE   ESC: BACK")}})}var CS=[["MOVE","W A S D  /  ARROWS"],["LOOK AND AIM","MOUSE"],["FIRE","LEFT CLICK  /  CTRL"],["JUMP","SPACE  /  RIGHT CLICK"],["CROUCH","C"],["USE / OPEN","E"],["RUN","HOLD SHIFT"],["WEAPONS","1 2 3  /  WHEEL"],["LAST WEAPON","Q"],["MAP","TAB"],["MUSIC","M"],["PAUSE","ESC"]];function _m(){return Wo({drawBg:Go,scale:2,top:172,gap:12,items:[{label:"BACK",action:function(){_t.back()}}],drawExtra:function(){Tu("CONTROLS"),CS.forEach(function(i,e){var t=36+e*11;Le.default.drawText(Ne,i[0],14,t,{color:"#c8c0b0"}),Le.default.drawText(Ne,i[1],76,t,{color:"#ffd23e"})}),Vo()}})}function ym(i,e){Ne.fillStyle=Wn==="game"?"rgba(4,3,2,0.8)":"rgba(8,6,4,0.7)",Ne.fillRect(0,0,Pt,wn),Ne.fillStyle="#5e2a10",Ne.fillRect(40,33,Pt-80,1)}function Yf(i,e,t){return{title:i,drawBg:ym,scale:2,top:86,gap:18,sel:1,drawExtra:function(){Le.default.drawText(Ne,e,Pt/2,56,{color:"#a8a090",center:!0})},items:[{label:"YES",action:t},{label:"NO",action:function(){_t.back()}}]}}function IS(){return{title:"PAUSED",drawBg:ym,scale:2,top:64,gap:14,descY:144,footerY:176,footer:"ARROWS OR MOUSE: CHOOSE   ENTER OR CLICK: SELECT",items:[{label:function(){return mt.state().p.dead?"TRY AGAIN":"RESUME"},action:function(){mt.state().p.dead&&mt.retryLevel(),_t.close(),ko()},desc:"BACK TO THE FIGHT."},{label:"RESTART LEVEL",desc:"START THIS LEVEL OVER WITH THE GEAR YOU BROUGHT IN.",action:function(){_t.push(Yf("RESTART?","YOU WILL LOSE PROGRESS IN THIS LEVEL.",function(){mt.retryLevel(),_t.close(),ko()}))}},{label:"OPTIONS",action:function(){_t.push(Qf())},desc:"MOUSE, VOLUME, FIELD OF VIEW AND MORE."},{label:"CONTROLS",action:function(){_t.push(_m())},desc:"EVERY KEY, ON ONE PAGE."},{label:"QUIT TO TITLE",desc:"YOUR UNLOCKED LEVELS ARE SAVED.",action:function(){_t.push(Yf("QUIT?","PROGRESS IN THIS LEVEL WILL BE LOST.",Zf))}}],drawExtra:function(){var i=mt.state(),e=i.stats;Le.default.drawText(Ne,i.L.name+"   "+Bo().name,Pt/2,38,{color:"#c8c0b0",center:!0}),Le.default.drawText(Ne,"GOAL: "+mt.objective(),Pt/2,48,{color:"#f0d848",center:!0}),Le.default.drawText(Ne,"FREED "+e.kills+"/"+e.totalKills+"   ITEMS "+e.items+"/"+e.totalItems+"   SECRETS "+e.secrets+"/"+e.totalSecrets+"   TIME "+Fr(i.time),Pt/2,160,{color:"#8a8478",center:!0})}}}function PS(i){var e=mt.state(),t=e.L.name.split(": ");Ne.fillStyle="rgba(4,3,2,0.6)",Ne.fillRect(0,0,Pt,wn),Le.default.drawText(Ne,t[0],Pt/2,22,{color:"#8a8478",center:!0}),Le.default.drawText(Ne,t[1]||e.L.name,Pt/2,32,{scale:3,color:"#ff9a28",shadow:"#401008",center:!0}),Le.default.drawText(Ne,"GOAL",Pt/2,60,{color:"#8a8478",center:!0}),Le.default.drawText(Ne,mt.objective(),Pt/2,69,{scale:2,color:"#f0d848",shadow:!0,center:!0}),Le.default.drawText(Ne,"DIFFICULTY: "+Bo().name+"     PAR "+Fr(e.L.par),Pt/2,88,{color:"#a8a090",center:!0}),i%1<.7&&Le.default.drawText(Ne,"CLICK TO BEGIN",Pt/2,106,{scale:2,color:"#ffffff",shadow:!0,center:!0}),Fo&&Le.default.drawText(Ne,"THE GAME NEEDS THE MOUSE. CLICK THE SCREEN AGAIN.",Pt/2,124,{color:"#ff9a28",center:!0}),Le.default.drawText(Ne,"WASD MOVE  MOUSE LOOK  CLICK FIRE  SPACE JUMP  E USE  TAB MAP  ESC PAUSE",Pt/2,140,{color:"#8a8478",center:!0})}function LS(i){var e=mt.interStats();Ne.fillStyle="rgba(10,8,6,0.88)",Ne.fillRect(0,0,Pt,wn),Wf(wn-6,i,1),Le.default.drawText(Ne,e.name,Pt/2,22,{scale:2,color:"#ff9a28",shadow:!0,center:!0}),Le.default.drawText(Ne,"FINISHED!",Pt/2,42,{scale:2,color:"#e8e0c8",shadow:!0,center:!0});var t=xu?1:Math.min(1,i/1.2);function n(s,a){return a?Math.round(s/a*100*t):100}if([["FREED",e.kills,e.totalKills,70],["ITEMS",e.items,e.totalItems,90],["SECRETS",e.secrets,e.totalSecrets,110]].forEach(function(s){Le.default.drawText(Ne,s[0],90,s[3],{scale:2,color:"#c8c0b0"});var a=n(s[1],s[2]);Le.default.drawText(Ne,a+"%",240,s[3],{scale:2,color:a>=100?"#ffd23e":"#e03828",right:!0})}),Le.default.drawText(Ne,"TIME "+Fr(e.time),90,132,{scale:2,color:e.time<=e.par&&t>=1?"#ffd23e":"#c8c0b0"}),Le.default.drawText(Ne,"PAR "+Fr(e.par),240,132,{scale:2,color:"#c8c0b0",right:!0}),t>=1&&i%1<.7){var r=mt.levelIndex();Le.default.drawText(Ne,r+1<vi.length?"CLICK OR PRESS ENTER FOR "+vi[r+1].name:"CLICK OR PRESS ENTER",Pt/2,166,{color:"#f0d848",shadow:!0,center:!0})}}function NS(i){Ne.fillStyle="rgba(8,6,4,0.9)",Ne.fillRect(0,0,Pt,wn),Wf(wn-8,i,0),Wf(wn-4,i*1.3,2),Le.default.drawText(Ne,"YOU WIN!",Pt/2,30,{scale:4,color:"#ffd23e",shadow:"#803008",center:!0}),["THE RESET ENGINE IS SILENT.","ASHGATE'S BELLS RING AGAIN,","AND RILEY TAPS OUT WITH A GRIN:",`"SAME TIME TOMORROW? I'LL BE READY."`,"","EVERY AGE ENDS IN ASH.","THE FIREBIRD IS WHAT RISES FROM IT.","","THANKS FOR PLAYING, WARRIOR."].forEach(function(e,t){Le.default.drawText(Ne,e,Pt/2,74+t*10,{color:"#e8e0c8",center:!0})}),i>1&&i%1<.7&&Le.default.drawText(Ne,"CLICK OR PRESS ENTER FOR THE TITLE SCREEN",Pt/2,170,{color:"#f0d848",shadow:!0,center:!0})}var DS={pistol:"pistol2",shotgun:"shotgun2"};function OS(i){var e=i.p;i.events.forEach(function(t){if(t.t==="sound"){if(t.local){_n.default.play(DS[t.name]||t.name);return}var n=t.x-e.x,r=t.z-e.z,s=Math.sqrt(n*n+r*r),a=Math.sin(Math.atan2(r,n)-e.ang)*.7;_n.default.play(t.name,s,a)}})}var No=1/60,Do=0,rm=performance.now(),sm="",Oo=[],Uo=!1,US=10,am=null;function om(i){i!==am&&(am=i,pi.setQuality({weapon:i}))}function Mm(i){var e=Math.min(.1,(i-rm)/1e3);rm=i;var t=mt.mode(),n=Wn==="title"?"title":t;n!==sm&&(Ci=0,sm=n),Ci+=e,Oo.push(e),Oo.length>240&&Oo.shift();var r=mt.state();if(Wn==="title"){var s=i/1e3;gs||gm(1),TS(s),om(!1),pi.render(gs,s,e),Ne.clearRect(0,0,Pt,wn),Su?(_t.isOpen()||_t.open($f()),_t.render(Ne,Ci)):(vm(Ne,Ci),Ci%.8<.55&&Le.default.drawText(Ne,"LOADING...",Pt/2,120,{scale:2,color:"#f0d848",shadow:!0,center:!0}))}else if(t==="game"||t==="inter"||t==="victory"){var a=Uo||t==="game"&&(!Zi||!Pi||_t.isOpen())&&!Ho;if(!a&&t==="game")for(Do+=e;Do>=No;){if(r.hitstop>0){r.hitstop-=No,Do-=No;continue}if(mt.update(No),OS(r),Do-=No,mt.mode()!=="game")break}else Do=0;if(r=mt.state(),om(!0),pi.render(r,Uo?US:i/1e3,a?0:e,Uo),r.events.length=0,_S.draw(r,{map:ya,menu:_t.isOpen(),camera:pi.camera}),Rt.fps){var o=Oo.slice().sort(function(u,l){return u-l}),c=o[o.length>>1]||.016;Le.default.drawText(Ne,Math.round(1/c)+" FPS",Pt-4,cm-9,{color:"#8fe0a0",shadow:!0,right:!0})}t==="inter"?LS(Ci):t==="victory"?NS(Ci):Zi?_t.isOpen()?_t.render(Ne,Ci):!Pi&&!Ho&&(Ne.fillStyle="rgba(0,0,0,0.5)",Ne.fillRect(0,70,Pt,24),Le.default.drawText(Ne,"CLICK TO RESUME",Pt/2,76,{scale:2,color:"#f0d848",shadow:!0,center:!0})):PS(Ci)}requestAnimationFrame(Mm)}vu();requestAnimationFrame(Mm);var Ii=null,Su=!1;function Sm(i){Su||(Su=!0,Ii=i||{ready:!0,loaded:[],problems:["timed out; using built-in art"]},Ii.loaded.length&&pi.setAssets(Ii),Ii.problems.length&&console.info("[assets] "+Ii.problems.join(" | ")),Ii.loaded.length&&console.info("[assets] using "+Ii.loaded.length+" authored assets"),_t.open($f()))}U0().then(Sm);setTimeout(function(){Sm(null)},6e3);Ho&&(window.FIREBIRD2=Object.assign({},mt,{launch:function(i){mt.startLevel(i,!1),Zi=!0,Wn="game",_t.close()},toTitle:Zf,setMap:function(i){ya=i},freeze:function(i){Uo=!!i},frozen:function(){return Uo},models:function(){return pi.debugModels()},fxStats:function(){return pi.fxStats()},assets:function(){return Ii?{ready:Ii.ready,loaded:Ii.loaded.slice(),problems:Ii.problems.slice()}:{ready:!1}},frameStats:function(){var i=Oo.slice().sort(function(t,n){return t-n});function e(t){return i.length?i[Math.min(i.length-1,Math.floor(i.length*t))]*1e3:0}return{frames:i.length,p50:e(.5),p95:e(.95),p99:e(.99),info:pi.info().render}},renderInfo:function(){return pi.info()}}));})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
