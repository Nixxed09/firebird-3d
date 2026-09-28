(()=>{var g0=Object.create;var $f=Object.defineProperty;var v0=Object.getOwnPropertyDescriptor;var x0=Object.getOwnPropertyNames;var _0=Object.getPrototypeOf,y0=Object.prototype.hasOwnProperty;var Ma=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var M0=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of x0(e))!y0.call(i,r)&&r!==t&&$f(i,r,{get:()=>e[r],enumerable:!(n=v0(e,r))||n.enumerable});return i};var vs=(i,e,t)=>(t=i!=null?g0(_0(i)):{},M0(e||!i||!i.__esModule?$f(t,"default",{value:i,enumerable:!0}):t,i));var Qf=Ma((wS,bu)=>{"use strict";var S0=(function(){function i(N){var U=parseInt(N.slice(1),16),F=U>>16&255,G=U>>8&255,J=U&255;return(4278190080|J<<16|G<<8|F)>>>0}function e(N,U,F){var G=document.createElement("canvas");G.width=N,G.height=U;var J=G.getContext("2d"),W=J.createImageData(N,U);return new Uint32Array(W.data.buffer).set(F),J.putImageData(W,0,0),{w:N,h:U,data:F,canvas:G}}function t(N,U,F){F=F||{};for(var G=!!F.mirror,J=N[0].length,W=0;W<N.length;W++)if(N[W].length!==J)throw new Error("sprite row "+W+" length "+N[W].length+" != "+J);for(var Y=G?J*2:J,ue=N.length,_e=new Uint32Array(Y*ue),me=0;me<ue;me++)for(var ye=N[me],Ee=0;Ee<J;Ee++){var ze=U[ye[Ee]];if(ze){var Xe=i(ze);_e[me*Y+Ee]=Xe,G&&(_e[me*Y+(Y-1-Ee)]=Xe)}}return e(Y,ue,_e)}function n(N,U,F){var G=(N|0)*374761393+(U|0)*668265263+(F|0)*974711;return G=(G^G>>13)*1274126177,((G^G>>16)>>>0)%1e3/1e3}function r(N,U,F){var G=parseInt(N.slice(1),16),J=parseInt(U.slice(1),16),W=(G>>16&255)+((J>>16&255)-(G>>16&255))*F,Y=(G>>8&255)+((J>>8&255)-(G>>8&255))*F,ue=(G&255)+((J&255)-(G&255))*F;return(4278190080|(ue&255)<<16|(Y&255)<<8|W&255)>>>0}var s=64;function a(N){for(var U=new Uint32Array(s*s),F=0;F<s;F++)for(var G=0;G<s;G++)U[F*s+G]=N(G,F);return e(s,s,U)}function o(N,U,F,G){return a(function(J,W){var Y=W>>4,ue=Y&1?16:0,_e=J+ue>>5,me=(W&15)>=14,ye=(J+ue&31)>=30;if(me||ye)return r(G,"#000000",n(J,W,N)*.4);var Ee=n(J,W,N)*.5+n(_e*31,Y*7,N+9)*.5,ze=(W&15)<2||(J+ue&31)<2?.25:0;return r(U,F,Ee*.65+ze)})}function c(N,U,F){return a(function(G,J){var W=G>>4,Y=J>>4,ue=n(W,Y,N)*6-3,_e=(G+ue)%16<1.5||(J-ue)%16<1.5,me=n(G,J,N+3)*.45+n(W*5,Y*3,N+7)*.55;return _e?r(F,"#000000",.5):r(U,F,me*.7)})}function u(N,U,F){return a(function(G,J){var W=G>>4&1,Y=(G&15)<1||(J&31)<1,ue=((G&15)===3||(G&15)===12)&&((J&31)===4||(J&31)===27),_e=n(G,J,N)*.3+W*.12+J/s*.15;return Y?r(F,"#000000",.6):ue?r(U,"#ffffff",.35):r(U,F,_e)})}function l(N){return a(function(U,F){var G="#4a5a52",J="#232c28";if(F<6||F>57)return r("#2a3430","#000000",.3+n(U,F,N)*.2);if(F>=28&&F<=33&&(U&31)>3&&(U&31)<28){var W=F===30||F===31?"#7dff9a":"#2f8a4a";return r(W,"#000000",n(U,F,N)*.2)}var Y=(U&31)<2,ue=F>40&&F<54&&(F&3)<2&&(U&31)>6&&(U&31)<26;return Y?r(J,"#000000",.5):ue?r("#1a211e","#000000",.3):r(G,J,n(U,F,N)*.5)})}function h(N){return a(function(U,F){var G=n(U,F,N)*.4+n(U>>2,F>>2,N+5)*.6,J=Math.sin(U*.22+Math.sin(F*.13+N)*2.1)+Math.sin(F*.18+U*.05);return J>1.45?r("#ff7a18","#ffd23e",n(U,F,N+2)):J>1.2?r("#8a1e08","#ff5a10",.5):r("#4a1410","#1c0605",G)})}function f(N){return a(function(U,F){var G="#5a5f68",J="#2a2d33",W=Math.abs(U-32)<1,Y=(F&15)<2,ue=U<3||U>60||F<3||F>60;if(N&&F>8&&F<20&&!W){var _e=N==="red"?"#d02020":"#2050e0";return r(_e,"#000000",(F===9||F===19?.5:0)+n(U,F,40)*.2)}return W?r("#101216","#000000",.3):ue?r(J,"#000000",.4):Y?r(J,G,.3):r(G,J,n(U,F,17)*.4+F/s*.2)})}function p(N){return a(function(U,F){var G="#4f4a42",J="#28241e",W=U>16&&U<48,Y=F>14&&F<50;if(W&&Y){var ue=U>24&&U<40,_e=N?F>32&&F<46:F>18&&F<32;return ue&&_e?r(N?"#30d040":"#d03030","#000000",n(U,F,3)*.25):r("#1c1a16","#000000",.3)}var me=U<2||U>61||F<2||F>61;return me?r(J,"#000000",.5):r(G,J,n(U,F,21)*.5)})}function v(N,U,F){return a(function(G,J){var W=(G>>4)+(J>>4)&1,Y=(G&15)<1||(J&15)<1,ue=n(G,J,N)*.4;return Y?r(F,"#000000",.55):r(W?U:F,"#000000",ue+W*.05)})}var y={o:"#1c0e06",b:"#9a5226",d:"#6b3413",c:"#e08a28",h:"#f7b24a",e:"#ffe14a",m:"#3a1006",t:"#f0e6c8",x:"#f0e6c8",r:"#c03018",f:"#ff8a18",g:"#ffd23e"},g=["......tt........",".......tt.......","........oooooooo","........obbbbbbb","........obbddddd","........obbeedbb","........obbbbbbb","........obdmtmbb","........obbmmbbb","........oooooobb","....oooooooooooo","...obbbbbbdccccc","..obbbo.obdccchc","..obbo..obdcchhc","..obbo..obddcccc",".obbo...obbdcccc",".obbo...obbddccc",".otto...obbbdddd",".ott....obbbbddd","........obbbbbbd","........oobbbbbb",".........obbo...",".........obbo...",".........obbo...",".........obbo...",".........oddo...",".........oddo...","........obddo...","........odddo...","......ottdddo...","......ooooooo...","................"],m=g.slice(0,21).concat(["........obbo....","........obbo....","........obbo....","........obbo....","........oddo....","........oddo....",".......obddo....",".......odddo....",".....ottdddo....",".....oooooo.....","................"]),_=["..gf..tt........",".gffg..tt.......",".offo...oooooooo",".otto...obbbbbbb",".obbo...obbddddd",".obbo...obeeedbb",".obbo...obbbbbbb",".obbo...obmmttbb","..obbo..obbmmbbb","..obbo..oooooobb","..obooooooooooo.","...obbbbbdccccc.","....obbobdccchc.","........obdcchhc","........obddcccc","........obbdcccc","........obbddccc","........obbbdddd","........obbbbddd","........obbbbbbd","........oobbbbbb",".........obbo...",".........obbo...",".........obbo...",".........obbo...",".........oddo...",".........oddo...","........obddo...","........odddo...","......ottdddo...","......ooooooo...","................"],A=g.slice();A[5]="........obbxxdbb",A[7]="........obmmmmbb";var w=["................","................","................","................","................","................","......tt........",".......tt.......","........oooooooo","........obbbbbbb","........obxxdddb","........obmmmmbb",".....oooooooobbb","...obbbbbbdccccb","..obbbboobdcccbb",".obbbo..obddccbb",".otto...obbddddb","........obbbbbdd",".......oobbbbbbb","......obbbbbbbdd","................","................","................","................","................","................","................","................","................","................","................","................"],I=["................","................","................","................","................","................","................","................","................","................","................","................","................","......tt........",".......ttoooooo.","......obbbbbbbbo",".....obbxxddmmbo","....obbbbdddbbbo","...obbddccccbbdd","..obbbbbdddbbbbb","................","................","................","................","................","................","................","................","................","................","................","................"],L=["................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","..........tt....","....oo....ott...","...obbdoooobbdo.","..obbddbbbdddbbo",".orrbdddddbbdrro",".orrrbbdddbrrro.","..orrrrrrrrrro..","...ooooooooooo..","................","................"];function D(N){var U={o:"#200a10",p:"#d06a8a",q:"#9a3d5e",k:"#e898a8",t:"#f2ead0",m:"#41101c",e:"#ffd23e",x:"#f2ead0",r:"#b02030"};if(N)for(var F in N)U[F]=N[F];return U}var S=["................","................","......oooooooooo",".....opppppppppp","....oppkpppppppp","....opppeepppppp","....oppppppppppp","....opmmmmmmmmmm","....opmtmtmtmtmt","....opmmmmmmmmmm","....optmtmtmtmtm","....opqqqqqqqqqq",".....ooooooooooo","...oppppqqpppppp","..opppppoqpppppp","..opppo.oqpppppp","..oppo..oqqppppp","..otto..oqqqpppp","..ott...oqqqqppp","........oqqqqqpp","........ooqqqqqp",".........oqqqo..",".........oqqqo..",".........oqqo...","........oqqqo...","........ottto...","........ooooo...","................","................","................","................","................"],x=S.slice(0,21).concat(["........oqqqo...","........oqqqo...","........oqqo....",".......oqqqo....",".......ottto....",".......ooooo....","................","................","................","................"]),b=["................","......oooooooooo",".....opppppppppp","....oppkpppppppp","....opppeepppppp","....opmmmmmmmmmm","....opmttmttmttm","....opmmmmmmmmmm","....opmmmmmmmmmm","....opmmmmmmmmmm","....opmttmttmttm","....opmmmmmmmmmm","....opqqqqqqqqqq","...oppppqqpppppp","..opppppoqpppppp","..opppo.oqpppppp","..oppo..oqqppppp","..otto..oqqqpppp","..ott...oqqqqppp","........oqqqqqpp","........ooqqqqqp",".........oqqqo..",".........oqqqo..",".........oqqo...","........oqqqo...","........ottto...","........ooooo...","................","................","................","................","................"],R=S.slice();R[5]="....opppxxpppppp";var M=["................","................","................","................","................","................","................","......oooooooooo",".....opppppppppp","....oppxxppppppp","....opmmmmmmmmmm","....opmtmtmtmtmt","....opqqqqqqqqqq","...opppppqqppppp","..oppppppqqquppp".replace("u","q"),"..oppoooqqqqqppp","..oo...oqqqqqqpp",".......ooqqqqqqp","........oqqqqoo.","................","................","................","................","................","................","................","................","................","................","................","................","................"],P=["................","................","................","................","................","................","................","................","................","................","................","................","................","................","......ooooooooo.",".....oppppppppqo","....opxxpmmttppo","...oppppqqqqppqo","..oqqppppppqqqoo","...ooooooooooo..","................","................","................","................","................","................","................","................","................","................","................","................"],O=["................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................",".......oo.......",".....ooppoo.tt..","...oqpppppqoot..","..oqqpmmttppqqo.",".orrqqppppqqrro.",".orrrqqqqqrrro..","..orrrrrrrrro...","...oooooooooo...","................","................"],k={o:"#06141c",h:"#1e8aa0",H:"#6fe0ec",s:"#d8fff8",v:"#ffd23e",V:"#fff6b0",c:"#157a8a",C:"#3fd8c8",g:"#ffd23e",Y:"#fff6b0"},X=["..........",".....ooooo","...oohhhhh","..ohhHHhhh","..ohHhhhhh",".ohhhhoooo",".ohhhosvvv",".ohhhosvVV",".ohhhossss",".ohhhossss",".ohhhhosss","..ohhhooss","...ooooooo",".....ooccc","...ooccccg","..occcccCg",".occcCcccg",".occcCccgY",".occcCccgY",".occ.Ccccg",".oso.occcg",".oso.occcc","..o..oCCCC",".....occcc",".....occo.",".....occo.",".....occo.",".....oCco.",".....occo.",".....occo.",".....occo.","....ogggo.","....ooooo.",".........."],$=X.slice(0,24).concat(["....occo..","....occo..","...occo...","...oCco...","...occo...","..occo....","..occo....",".ogggo....",".ooooo....",".........."]),ne=X.slice();ne[13]=".o...ooccc",ne[14]=".so.occccg",ne[15]=".so.occcCg",ne[16]=".oc.occccg",ne[19]="..o..Ccccg",ne[20]=".....occcg",ne[21]=".....occcc";function re(N,U,F){return N.map(function(G,J){for(var W="",Y=0;Y<G.length;Y++)W+=G[Y]!=="."&&n(Y,J,F)<U?G[Y]:".";return W})}function oe(N){var U={};for(var F in k)U[F]=k[F];if(N)for(var G in N)U[G]=N[G];return U}function ae(N){var U={o:"#1a1008",f:"#e85818",F:"#ffa018",s:"#d8a06a",S:"#a8744a",w:"#f0ead8",k:"#28221a",m:"#5a1408",t:"#e8e0c8",r:"#c01818",c:"#b84a10",C:"#7e2e08",g:"#888078",x:"#301010"},F=N.gray?{s:"#9a9488",S:"#6e6a60"}:{};for(var G in F)U[G]=F[G];var J=[".osskwwkssss",".osskwkksss.".replace(".$",""),".ossskksssss"],W=[".osssookssss",".osskwkksss.",".ossskksssss"],Y=[".osssssossss",".ossooosssss",".osssssossss"],ue=[".osskoskssss",".osssksossss",".osskoskssss"],_e=["..osssssssss","..osssmmmmmm","..osssssssss"],me=["..osssssssss","..ossmmmmmmm","..osSmmsssss"],ye=["..osssmmmmmm","..ossmtttttt","..osssmmmmmm"],Ee=["..ossmmmmmss","..osmmttmmss","..ossmmmmmss"],ze=N.eyes==="squint"?W:N.eyes==="shut"?Y:N.eyes==="x"?ue:J,Xe=N.mouth==="grim"?me:N.mouth==="grin"?ye:N.mouth==="ouch"?Ee:_e,q=[".....ffF....","...fFffffF..","..ffFfffffF.","..offffffff.",".offFffffffF",".offffffffff",".offosssssss",".oosssssssss","..ossssssSSS","..osssssssss",ze[0],ze[1],ze[2],"..osssssssss","..ossssssSss","..osssssSSss","..ossssssSss","..osssssssss",Xe[0],Xe[1],Xe[2],"..osssssssss","...ossssssSS","...ossssssss","....oossssss","..ooccoosSSS".replace("..",".o"),".occcccooooo","occCcccccccc"];return q=q.map(function(Se){for(Se=Se.replace(/\$/g,""),Se.length>12&&(Se=Se.slice(0,12));Se.length<12;)Se+=".";return Se}),N.blood>=1&&(q[8]="..osrrsssSSS".slice(0,12),q[9]="..ossrssssss"),N.blood>=2&&(q[14]="..osrssssrss",q[15]="..orrssSSrss",q[21]="..osrsssssrs"),N.blood>=3&&(q[6]=".offosrrssss",q[13]="..orrsssrrss",q[22]="...orrsssrSS".slice(0,12)),t(q,U,{mirror:!0})}var Pe={o:"#0e0c0a",g:"#4a4e56",G:"#6a707c",d:"#26282e",s:"#d8a06a",S:"#a8744a",w:"#7a4a28",W:"#5a3418",y:"#c8b040",k:"#16181c"},He=["............","....oooo....","..oossssoo..",".ossssssss o".replace(" ","s"),".osssSsssss.","ossssSSssss.","osssssSssss.","ossssssssss.","osSSsssssss.","ossssssssss.",".ossssssss..",".ossssssss..","..ossssss...","..oswwwws...","..owwWWww...","..owWWWWw...","..owwwwww...","...oooooo..."].map(function(N){for(;N.length<12;)N+=".";return N.slice(0,12)}),tt=["...........ooo","..........ookk","..........ogkk","..........ogGd","..........ogGd",".........ooGgd",".........ogGGd",".........ogGGd",".........ogGGd",".........odddd",".........ogGGd",".........ogGGd",".........odddd","..........oggd","..........oggd","..........ogdd",".......ooooddd",".....oossssodd","....ossssssodd","...ossssSssood","..osssssSSssod","..ossssssSssod","..osSSssssssod","..ossssssssood","...osssssssso.","...osssssssso.","....oossssoo..","......oooo...."],at=[".........ooo","........ookk","........odkk","........odgd","........odgd","........odgd","........odgd","........odgd","........odgd","........odgd","........oddd",".......ooddd","......oWwwdd","......oWwwwd","......oWWwwd","......oWWwwd","......ooWWwd",".......ooWWd","........oddd","........oggd",".....oooogdd","...oosssoggd","..ossssssogd","..ossSsssogd",".osssSSssood",".ossssssssod",".osSSsssssod",".ossssssssod","..ossssssso.","..ossssssso.","...oosssoo..",".....oooo..."];function rt(N,U,F){for(var G=new Uint32Array(N*U),J=(N-1)/2,W=(U-1)/2,Y=0;Y<U;Y++)for(var ue=0;ue<N;ue++){var _e=(ue-J)/(N/2),me=(Y-W)/(U/2),ye=Math.sqrt(_e*_e+me*me),Ee=F(ye,ue,Y);Ee&&(G[Y*N+ue]=Ee)}return e(N,U,G)}function le(N){return rt(12,12,function(U,F,G){var J=n(F,G,N)*.3;return U+J<.38?i("#fff8d0"):U+J<.68?i("#ffd23e"):U+J<.95?i("#ff7a18"):0})}function K(N){return rt(14,14,function(U,F,G){var J=n(F,G,N)*.3;return U+J<.38?i("#eaffd0"):U+J<.68?i("#8aff3e"):U+J<.95?i("#2fa818"):0})}function ce(N,U,F){return rt(N,N,function(G,J,W){var Y=n(J,W,U)*.55;return G+Y<.3*F?i("#fff8d0"):G+Y<.55*F?i("#ffd23e"):G+Y<.8*F?i("#ff7a18"):G+Y<1*F?i("#a83010"):0})}function Me(N,U){return rt(U?8:6,U?8:6,function(F,G,J){var W=n(G,J,N)*.4;return F+W<.5?i("#c8c4bc"):F+W<.9?i("#78746c"):0})}function he(N,U){return rt(U?8:6,U?8:6,function(F,G,J){var W=n(G,J,N)*.45;return F+W<.45?i("#e04020"):F+W<.9?i("#901810"):0})}function fe(){for(var N=16,U=22,F=new Uint32Array(N*U),G=0;G<U;G++)for(var J=0;J<N;J++){var W=Math.abs((J-7.5)/7.5);if(!(W>1)){var Y=W>.88||G===0||G===U-1,ue=1-W*W*.75,_e=G===4||G===16,me=G>=8&&G<=12,ye=me?"#c05010":"#5c554c";G>=1&&G<=2&&(ye="#3a352e");var Ee=r(ye,"#000000",1-ue+(_e?.35:0)+n(J,G,77)*.2);Y&&(Ee=i("#16130f")),G===1&&W<.6&&n(J,G,8)>.4&&(Ee=i("#ff9a28")),F[G*N+J]=Ee}}return e(N,U,F)}function ve(N){for(var U=10,F=28,G=new Uint32Array(U*F),J=12;J<28;J++)for(var W=4;W<=5;W++)G[J*U+W]=i(J>24?"#3a2812":"#6a4a22");G[12*U+3]=i("#8a6432"),G[12*U+6]=i("#8a6432");for(var Y=0;Y<12;Y++)for(var ue=0;ue<U;ue++){var _e=(ue-4.5)/4.2,me=(Y-8)/8,ye=Math.sqrt(_e*_e*1.6+me*me),Ee=n(ue,Y,N)*.5;ye+Ee<.45?G[Y*U+ue]=i("#fff0b0"):ye+Ee<.75?G[Y*U+ue]=i("#ffd23e"):ye+Ee<1&&(G[Y*U+ue]=i("#ff7a18"))}return e(U,F,G)}function Ne(N,U,F,G,J){for(var W=new Uint32Array(N*U),Y=0;Y<U;Y++)for(var ue=0;ue<N;ue++){var _e=ue===0||Y===0||ue===N-1||Y===U-1,me=_e?i("#14120e"):r(F,G,Y/U*.6+n(ue,Y,5)*.15);W[Y*N+ue]=me}return J&&J(W,N,U),e(N,U,W)}function qe(N){return function(U,F,G){for(var J=F>>1,W=G>>1,Y=i(N),ue=-(G>>2);ue<=G>>2;ue++)U[(W+ue)*F+J]=Y,U[(W+ue)*F+J-1]=Y;for(var _e=-(F>>2);_e<=F>>2;_e++)U[W*F+J+_e]=Y,U[(W-1)*F+J+_e]=Y}}function Ze(N){var U=["oooooooo","occccccb".replace("b","o"),"occwwcco","occwwcco","occcccco","occcccco","ocwwwwco","occcccco","occcccco","oooooooo"];return t(U,{o:"#14120e",c:N,w:"#f0ead8"})}function Ve(){var N=30,U=10,F=new Uint32Array(N*U);function G(ue,_e,me){ue>=0&&ue<N&&_e>=0&&_e<U&&(F[_e*N+ue]=i(me))}for(var J=2;J<22;J++)G(J,3,"#3a3e46"),G(J,4,"#5a5f68"),G(J,5,"#26282e");for(var W=8;W<15;W++)G(W,6,"#5a3418");for(var Y=21;Y<29;Y++)G(Y,4+(Y-21>>1),"#5a3418"),G(Y,5+(Y-21>>1),"#7a4a28");return G(1,3,"#16130f"),G(1,4,"#16130f"),e(N,U,F)}function be(){return rt(14,14,function(N,U,F){return N<.3?i("#fff8d0"):N<.6?i("#ffd23e"):N<.85?i("#ff7a18"):N<1?i("#a03008"):0})}function Ce(){return rt(20,20,function(N,U,F){var G=Math.atan2(F-9.5,U-9.5),J=.55+.45*Math.abs(Math.sin(G*4));return N<.35*J?i("#fff8d0"):N<.7*J?i("#ffd23e"):N<1*J?i("#ff7a18"):0})}var nt={A:[2,5,7,5,5],B:[6,5,6,5,6],C:[3,4,4,4,3],D:[6,5,5,5,6],E:[7,4,6,4,7],F:[7,4,6,4,4],G:[3,4,5,5,3],H:[5,5,7,5,5],I:[7,2,2,2,7],J:[1,1,1,5,2],K:[5,6,4,6,5],L:[4,4,4,4,7],M:[5,7,5,5,5],N:[6,5,5,5,5],O:[2,5,5,5,2],P:[6,5,6,4,4],Q:[2,5,5,6,3],R:[6,5,6,6,5],S:[3,4,2,1,6],T:[7,2,2,2,2],U:[5,5,5,5,7],V:[5,5,5,5,2],W:[5,5,5,7,5],X:[5,5,2,5,5],Y:[5,5,2,2,2],Z:[7,1,2,4,7],0:[7,5,5,5,7],1:[2,6,2,2,7],2:[6,1,2,4,7],3:[6,1,2,1,6],4:[5,5,7,1,1],5:[7,4,6,1,6],6:[3,4,6,5,2],7:[7,1,2,2,2],8:[7,5,7,5,7],9:[2,5,3,1,6]," ":[0,0,0,0,0],".":[0,0,0,0,2],",":[0,0,0,2,4],"!":[2,2,2,0,2],"?":[6,1,2,0,2],":":[0,2,0,2,0],"-":[0,0,7,0,0],"+":[0,2,7,2,0],"%":[5,1,2,4,5],"/":[1,1,2,4,4],"'":[2,2,0,0,0],_:[0,0,0,0,7],">":[4,2,1,2,4],"<":[1,2,4,2,1],'"':[5,5,0,0,0],"=":[0,7,0,7,0],"(":[1,2,2,2,1],")":[4,2,2,2,4],"*":[0,5,2,5,0],"#":[5,7,5,7,5],"^":[2,5,0,0,0],"&":[2,5,2,5,3]};function ot(N,U,F,G,J){J=J||{};var W=J.scale||1,Y=J.color||"#e8e0c8",ue=J.shadow;if(U=String(U).toUpperCase(),J.center&&(F-=Math.floor(_t(U,W)/2)),J.right&&(F-=_t(U,W)),ue){var _e=typeof ue=="string"?ue:"#000000";ot(N,U,F+W,G+W,{scale:W,color:_e})}N.fillStyle=Y;for(var me=0;me<U.length;me++){for(var ye=nt[U[me]]||nt["?"],Ee=0;Ee<5;Ee++)for(var ze=ye[Ee],Xe=0;Xe<3;Xe++)ze&4>>Xe&&N.fillRect(F+Xe*W,G+Ee*W,W,W);F+=4*W}}function _t(N,U){return String(N).length*4*(U||1)-(U||1)}var V={};V.tex={1:o(1,"#8a4232","#4a1e14","#2a1812"),2:c(2,"#8a8578","#4a463c"),3:u(3,"#5a5f68","#26282e"),4:l(4),5:h(5),6:f(null),7:f("red"),8:f("blue"),9:p(!1),10:p(!0),11:o(1,"#8a4232","#4a1e14","#2a1812")},V.floors={slab:v(11,"#4e4a42","#38342c"),tech:v(12,"#3c4440","#2a302c"),hell:a(function(N,U){var F=n(N,U,13)*.5+n(N>>2,U>>2,14)*.5,G=Math.sin(N*.19+Math.sin(U*.11)*2)+Math.sin(U*.15);return G>1.5?r("#ff7a18","#ffd23e",F):r("#3a100c","#180404",F)}),ceilDark:v(15,"#2e2b26","#201d18"),ceilTech:a(function(N,U){var F=(N&31)>12&&(N&31)<20&&(U&31)>12&&(U&31)<20;return F?r("#fff0c0","#c0a860",n(N,U,16)*.3):r("#2a2e2c","#1a1d1b",n(N,U,16)*.5)}),ceilHell:a(function(N,U){return r("#241010","#100404",n(N,U,17)*.6)})};var mt=y,Mt=D(null),H=D({p:"#c8502a",q:"#7e2412",k:"#e8804a",e:"#a0fFff".toLowerCase()});V.mobs={imp:{walkA:t(g,mt,{mirror:!0}),walkB:t(m,mt,{mirror:!0}),attack:t(_,mt,{mirror:!0}),pain:t(A,mt,{mirror:!0}),die1:t(w,mt,{mirror:!0}),die2:t(I,mt,{mirror:!0}),corpse:t(L,mt,{mirror:!0})},gnasher:{walkA:t(S,Mt,{mirror:!0}),walkB:t(x,Mt,{mirror:!0}),attack:t(b,Mt,{mirror:!0}),pain:t(R,Mt,{mirror:!0}),die1:t(M,Mt,{mirror:!0}),die2:t(P,Mt,{mirror:!0}),corpse:t(O,Mt,{mirror:!0})},knight:{walkA:t(S,H,{mirror:!0}),walkB:t(x,H,{mirror:!0}),attack:t(b,H,{mirror:!0}),pain:t(R,H,{mirror:!0}),die1:t(M,H,{mirror:!0}),die2:t(P,H,{mirror:!0}),corpse:t(O,H,{mirror:!0})},riley:{walkA:t(X,k,{mirror:!0}),walkB:t($,k,{mirror:!0}),attack:t(ne,oe({v:"#ffffff",V:"#ffffff",Y:"#ffffff",g:"#fff6b0"}),{mirror:!0}),pain:t(X,oe({c:"#e8fffc",C:"#ffffff",h:"#9ef0f8"}),{mirror:!0}),shield:t(X,oe({c:"#c89018",C:"#ffd23e",h:"#e0a020",H:"#fff0a0"}),{mirror:!0}),die1:t(re(X,.6,71),oe({c:"#6fe0ec"}),{mirror:!0}),die2:t(re(X,.22,72),oe({c:"#d8fff8",h:"#d8fff8"}),{mirror:!0}),corpse:null}},V.things={barrel:fe(),torchA:ve(31),torchB:ve(87),stim:Ne(10,8,"#e8e4dc","#a8a49c",qe("#d02020")),medkit:Ne(16,12,"#e8e4dc","#a8a49c",qe("#d02020")),clip:Ne(10,8,"#7a7468","#4a463c",function(N,U,F){for(var G=2;G<U-2;G+=2)N[2*U+G]=i("#c8a030")}),shells:Ne(14,9,"#b03020","#5e1810",function(N,U,F){for(var G=2;G<U-2;G+=2)N[3*U+G]=i("#c8a030"),N[4*U+G]=i("#c8a030")}),armor:t(["...oooo.","..oggggo",".ogggggg",".oggGGgg",".ogggggg",".ogggggg","..ogggg o".replace(" ",""),"..oggggg","...ooooo"].map(function(N){for(;N.length<8;)N+=".";return N.slice(0,8)}),{o:"#14120e",g:"#3a7a30",G:"#6ab858"},{mirror:!0}),keyRed:Ze("#d02020"),keyBlue:Ze("#2050e0"),shotgunPickup:Ve(),orb:be(),fireballA:le(41),fireballB:le(42),greenballA:K(43),greenballB:K(44),boom1:ce(24,51,.7),boom2:ce(28,52,1),boom3:ce(28,53,1.25),puffA:Me(61,!0),puffB:Me(62,!1),bloodA:he(63,!0),bloodB:he(64,!1)},V.faces={ok:ae({eyes:"open",mouth:"calm",blood:0}),hurt1:ae({eyes:"open",mouth:"grim",blood:1}),hurt2:ae({eyes:"squint",mouth:"grim",blood:2}),hurt3:ae({eyes:"squint",mouth:"ouch",blood:3}),pain:ae({eyes:"shut",mouth:"ouch",blood:1}),grin:ae({eyes:"open",mouth:"grin",blood:0}),dead:ae({eyes:"x",mouth:"ouch",blood:3,gray:!0})},V.guns={fist:t(He,Pe,{mirror:!0}),pistol:t(tt,Pe,{mirror:!0}),shotgun:t(at,Pe,{mirror:!0}),flash:Ce()};var E={};return V.secretTex=function(N){if(E[N])return E[N];for(var U=V.tex[N]||V.tex[1],F=new Uint32Array(U.data),G=0,J=0;J<F.length;J++){var W=F[J];G+=(W>>16&255)+(W>>8&255)+(W&255)}var Y=G/F.length/3>70;function ue(Ee){var ze=F[Ee],Xe=ze>>16&255,q=ze>>8&255,Se=ze&255;Y?(Xe*=.35,q*=.35,Se*=.35):(Xe=Xe*.5+110,q=q*.5+95,Se=Se*.5+80),F[Ee]=(4278190080|(Xe&255)<<16|(q&255)<<8|Se&255)>>>0}for(var _e=22,me=6;me<58;me++)_e+=me%7===0?1:me%11===0?-1:0,ue(me*64+_e),ue(me*64+_e+1);for(var ye=0;ye<7;ye++)ue((30+ye)*64+_e+2+ye);return E[N]={w:64,h:64,data:F},E[N]},V.drawText=ot,V.textWidth=_t,V.hex=i,V})();typeof bu!="undefined"&&(bu.exports=S0)});var ed=Ma((AS,Tu)=>{"use strict";var b0=(function(){var i=null,e=null,t=null,n=null,r=!0,s=!1,a=.5;try{r=localStorage.getItem("firebird.music")!=="off"}catch{}function o(){if(i)return i.state==="suspended"&&i.resume(),!0;try{var M=window.AudioContext||window.webkitAudioContext;return M?(i=new M,e=i.createGain(),e.gain.value=a,e.connect(i.destination),t=i.createGain(),t.gain.value=.9,t.connect(e),n=i.createGain(),n.gain.value=.3,n.connect(e),!0):!1}catch{return!1}}function c(M){if(i){var P=i.currentTime+(M.delay||0),O=i.createOscillator();O.type=M.type||"square",O.frequency.setValueAtTime(M.f0,P),M.f1&&O.frequency.exponentialRampToValueAtTime(Math.max(20,M.f1),P+M.dur);var k=i.createGain(),X=M.gain||.3;k.gain.setValueAtTime(1e-4,P),k.gain.exponentialRampToValueAtTime(X,P+(M.attack||.008)),k.gain.exponentialRampToValueAtTime(1e-4,P+M.dur);var $=t;if(M.pan&&i.createStereoPanner){var ne=i.createStereoPanner();ne.pan.value=Math.max(-1,Math.min(1,M.pan)),k.connect(ne),ne.connect(M.bus||t),$=null}else k.connect(M.bus||t);if(M.wobble){var re=i.createOscillator(),oe=i.createGain();re.frequency.value=M.wobble,oe.gain.value=M.f0*.25,re.connect(oe),oe.connect(O.frequency),re.start(P),re.stop(P+M.dur)}O.connect(k),O.start(P),O.stop(P+M.dur+.02)}}var u=null;function l(){if(u)return u;var M=i.sampleRate*1.5;u=i.createBuffer(1,M,i.sampleRate);for(var P=u.getChannelData(0),O=0;O<M;O++)P[O]=Math.random()*2-1;return u}function h(M){if(i){var P=i.currentTime+(M.delay||0),O=i.createBufferSource();O.buffer=l(),O.loop=!0;var k=i.createBiquadFilter();k.type=M.type||"lowpass",k.frequency.setValueAtTime(M.f0||1e3,P),M.f1&&k.frequency.exponentialRampToValueAtTime(Math.max(30,M.f1),P+M.dur),k.Q.value=M.q||.8;var X=i.createGain(),$=M.gain||.3;if(X.gain.setValueAtTime(1e-4,P),X.gain.exponentialRampToValueAtTime($,P+(M.attack||.006)),X.gain.exponentialRampToValueAtTime(1e-4,P+M.dur),O.connect(k),k.connect(X),M.pan&&i.createStereoPanner){var ne=i.createStereoPanner();ne.pan.value=Math.max(-1,Math.min(1,M.pan)),X.connect(ne),ne.connect(t)}else X.connect(t);O.start(P),O.stop(P+M.dur+.02)}}var f={pistol:function(M,P){h({dur:.14,gain:.5*M,f0:2400,f1:300,pan:P}),c({f0:220,f1:90,dur:.08,type:"square",gain:.2*M,pan:P})},shotgun:function(M,P){h({dur:.38,gain:.8*M,f0:1600,f1:120,pan:P}),c({f0:130,f1:45,dur:.3,type:"sawtooth",gain:.35*M,pan:P})},pump:function(M,P){h({dur:.05,gain:.3*M,f0:900,type:"bandpass",q:2,delay:0,pan:P}),h({dur:.05,gain:.3*M,f0:700,type:"bandpass",q:2,delay:.13,pan:P})},punch:function(M,P){h({dur:.1,gain:.25*M,f0:500,f1:150,pan:P}),c({f0:90,f1:50,dur:.1,type:"sine",gain:.4*M,pan:P})},whiff:function(M,P){h({dur:.12,gain:.15*M,f0:600,f1:1400,type:"bandpass",q:1.5,pan:P})},doorOpen:function(M,P){h({dur:.5,gain:.22*M,f0:200,f1:500,pan:P}),c({f0:70,f1:130,dur:.5,type:"sawtooth",gain:.12*M,pan:P})},doorClose:function(M,P){h({dur:.4,gain:.2*M,f0:400,f1:150,pan:P}),c({f0:120,f1:60,dur:.4,type:"sawtooth",gain:.12*M,pan:P}),c({f0:60,dur:.08,type:"sine",gain:.3*M,delay:.38,pan:P})},locked:function(M,P){c({f0:150,dur:.09,type:"square",gain:.25*M,pan:P}),c({f0:110,dur:.12,type:"square",gain:.25*M,delay:.11,pan:P})},switchFlip:function(M,P){h({dur:.06,gain:.3*M,f0:1200,type:"bandpass",q:2,pan:P}),c({f0:90,f1:55,dur:.18,type:"square",gain:.3*M,delay:.05,pan:P})},pickup:function(M,P){c({f0:660,dur:.06,type:"square",gain:.15*M,pan:P}),c({f0:880,dur:.08,type:"square",gain:.15*M,delay:.06,pan:P})},health:function(M,P){c({f0:440,dur:.08,type:"sine",gain:.25*M,pan:P}),c({f0:587,dur:.12,type:"sine",gain:.25*M,delay:.07,pan:P})},keyPickup:function(M,P){[523,659,784,1047].forEach(function(O,k){c({f0:O,dur:.09,type:"square",gain:.16,delay:k*.07,pan:P})})},weaponUp:function(M,P){[180,260,380,520].forEach(function(O,k){c({f0:O,dur:.08,type:"sawtooth",gain:.18,delay:k*.05,pan:P})})},secret:function(M,P){[880,1108,1318,1760].forEach(function(O,k){c({f0:O,dur:.14,type:"triangle",gain:.2,delay:k*.09,pan:P})})},orb:function(M,P){[220,330,440,660,880].forEach(function(O,k){c({f0:O,dur:.2,type:"triangle",gain:.2,delay:k*.08,pan:P})})},impSight:function(M,P){c({f0:110,f1:55,dur:.5,type:"sawtooth",gain:.3*M,wobble:9,pan:P})},knightSight:function(M,P){c({f0:75,f1:35,dur:.9,type:"sawtooth",gain:.4*M,wobble:6,pan:P})},rileySight:function(M,P){[523,659,784,1047].forEach(function(O,k){c({f0:O,dur:.12,type:"triangle",gain:.22*M,delay:k*.07,pan:P})})},rileyTalk:function(M,P){c({f0:880,f1:1320,dur:.06,type:"square",gain:.08}),c({f0:1320,dur:.05,type:"square",gain:.07,delay:.07})},rileyShoot:function(M,P){c({f0:1400,f1:500,dur:.18,type:"triangle",gain:.25*M,pan:P})},rileyShield:function(M,P){c({f0:300,f1:900,dur:.3,type:"sine",gain:.3*M,wobble:18,pan:P})},rileyDerez:function(M,P){[1568,1319,1047,784,659,523,392].forEach(function(O,k){c({f0:O,dur:.14,type:"triangle",gain:.2,delay:k*.09,pan:P})})},impShoot:function(M,P){h({dur:.22,gain:.25*M,f0:400,f1:1200,type:"bandpass",q:1.5,pan:P})},fireExplode:function(M,P){h({dur:.3,gain:.4*M,f0:900,f1:100,pan:P})},barrelBoom:function(M,P){h({dur:.7,gain:.9*M,f0:1400,f1:60,pan:P}),c({f0:65,f1:28,dur:.6,type:"sine",gain:.6*M,pan:P})},enemyPain:function(M,P){c({f0:200,f1:120,dur:.13,type:"square",gain:.22*M,pan:P})},enemyDie:function(M,P){c({f0:170,f1:40,dur:.5,type:"sawtooth",gain:.3*M,wobble:12,pan:P}),h({dur:.25,gain:.2*M,f0:700,f1:150,delay:.05,pan:P})},playerPain:function(M,P){c({f0:170,f1:90,dur:.16,type:"square",gain:.3,pan:P}),h({dur:.1,gain:.15,f0:500,f1:200,pan:P})},playerDie:function(M,P){c({f0:220,f1:28,dur:1.3,type:"sawtooth",gain:.4,wobble:5,pan:P})},noAmmo:function(M,P){h({dur:.03,gain:.2,f0:1800,type:"bandpass",q:3,pan:P})},tally:function(M,P){c({f0:990,dur:.03,type:"square",gain:.12,pan:P})},menu:function(M,P){c({f0:520,dur:.05,type:"square",gain:.15,pan:P})},menuPick:function(M,P){c({f0:520,dur:.06,type:"square",gain:.18}),c({f0:780,dur:.09,type:"square",gain:.18,delay:.06})}};function p(M,P,O){if(!(!i||i.state==="suspended")){var k=f[M];if(k){var X=1/(1+(P||0)*.13);if(!(X<.04))try{k(X,O||0)}catch{}}}}var v=168,y=60/v/4,g=[164.81,164.81,146.83,130.81,123.47,130.81,146.83,155.56],m=null,_=0,A=0;function w(M,P,O){var k=i.createOscillator(),X=i.createOscillator();k.type="sawtooth",X.type="square",k.frequency.value=P,X.frequency.value=P*.5;var $=i.createBiquadFilter();$.type="lowpass",$.frequency.setValueAtTime(O?1400:800,M),$.frequency.exponentialRampToValueAtTime(200,M+y*1.8);var ne=i.createGain();ne.gain.setValueAtTime(1e-4,M),ne.gain.exponentialRampToValueAtTime(O?.5:.34,M+.005),ne.gain.exponentialRampToValueAtTime(1e-4,M+y*(O?1.9:.9)),k.connect($),X.connect($),$.connect(ne),ne.connect(n),k.start(M),k.stop(M+y*2),X.start(M),X.stop(M+y*2)}function I(M,P){if(P==="kick"){var O=i.createOscillator();O.type="sine",O.frequency.setValueAtTime(110,M),O.frequency.exponentialRampToValueAtTime(40,M+.1);var k=i.createGain();k.gain.setValueAtTime(.5,M),k.gain.exponentialRampToValueAtTime(.001,M+.12),O.connect(k),k.connect(n),O.start(M),O.stop(M+.13)}else{var X=i.createBufferSource();X.buffer=l(),X.loop=!0;var $=i.createBiquadFilter();$.type="highpass",$.frequency.value=P==="snare"?1800:6e3;var ne=i.createGain();ne.gain.setValueAtTime(P==="snare"?.3:.12,M),ne.gain.exponentialRampToValueAtTime(.001,M+(P==="snare"?.09:.03)),X.connect($),$.connect(ne),ne.connect(n),X.start(M),X.stop(M+.1)}}function L(){if(!(!s||!i)){for(;_<i.currentTime+.15;){var M=A%16,P=Math.floor(A/16),O=M>>2,k=M&3,X=82.41;k===0||k===2?w(_,X,!1):k===3&&w(_,g[(P*4+O)%g.length],!0),(M===0||M===8)&&I(_,"kick"),(M===4||M===12)&&I(_,"snare"),(M&1)===0&&I(_,"hat"),_+=y,A++}m=setTimeout(L,40)}}function D(){!i||!r||s||(s=!0,_=i.currentTime+.05,A=0,L())}function S(){s=!1,m&&(clearTimeout(m),m=null)}function x(M){r=!!M;try{localStorage.setItem("firebird.music",r?"on":"off")}catch{}return r?D():S(),r}function b(){return x(!r)}function R(M){a=Math.max(0,Math.min(1,M))*.72,e&&(e.gain.value=a)}return{init:o,play:p,startMusic:D,stopMusic:S,toggleMusic:b,setMusic:x,setVolume:R,isMusicOn:function(){return r}}})();typeof Tu!="undefined"&&(Tu.exports=b0)});var td=Ma((CS,Eu)=>{"use strict";var T0=(function(){var i="firebird.settings.v1",e="firebird.progress.v1",t={sens:5,volume:7,crosshair:!0,tips:!0,shake:!0,goalMarker:!0,difficulty:1,seenTips:{}};function n(){try{return window.localStorage}catch{return null}}function r(f){var p=n();if(!p)return null;try{var v=JSON.parse(p.getItem(f));return v&&typeof v=="object"?v:null}catch{return null}}function s(f,p){var v=n();if(v)try{v.setItem(f,JSON.stringify(p))}catch{}}var a={},o=r(i)||{};for(var c in t){var u=c in o&&o[c]!==null&&typeof o[c]==typeof t[c];a[c]=u?o[c]:t[c]}a.sens=Math.max(1,Math.min(10,a.sens|0)),a.volume=Math.max(0,Math.min(10,a.volume|0)),a.difficulty=Math.max(0,Math.min(2,a.difficulty|0));var l=r(e)||{};typeof l.unlocked!="number"&&(l.unlocked=0),(!l.best||typeof l.best!="object")&&(l.best={});var h=["PAR","KILLS","ITEMS","SECRETS"];return{v:a,save:function(){s(i,a)},progress:l,unlock:function(f){f>l.unlocked&&(l.unlocked=f,s(e,l))},record:function(f,p){var v=l.best[f]||{time:null,medals:{}},y=[];p.time<=p.par&&y.push("PAR"),p.kills>=p.totalKills&&y.push("KILLS"),p.items>=p.totalItems&&y.push("ITEMS"),p.secrets>=p.totalSecrets&&y.push("SECRETS");var g=y.filter(function(_){return!v.medals[_]}),m=v.time===null||p.time<v.time;return m&&(v.time=Math.floor(p.time)),y.forEach(function(_){v.medals[_]=!0}),l.best[f]=v,s(e,l),{newBest:m,medals:y,fresh:g}},best:function(f){return l.best[f]||null},MEDALS:h}})(),E0=(function(){var i=[],e=320,t=200;function n(){return i[i.length-1]||null}function r(x){return typeof x=="function"?x():x}function s(x){return r(x.items)||[]}function a(x){return x&&!(x.disabled&&x.disabled())}function o(x,b,R){for(var M=s(x),P=M.length,O=0;O<P;O++){var k=((b+O*R)%P+P)%P;if(a(M[k]))return k}return 0}function c(x){return{screen:x,sel:o(x,x.sel||0,1),hover:-1}}function u(x){i=[c(x)]}function l(x){i.push(c(x)),SND.play("menu")}function h(x){i[i.length-1]=c(x)}function f(){i=[]}function p(){return i.length>0}function v(){if(i.length>1)return i.pop(),SND.play("menu"),!0;var x=n();return x&&x.screen.onBack?(x.screen.onBack(),!0):!1}function y(x){var b=n(),R=s(b.screen).length;R&&(b.sel=o(b.screen,b.sel+x,x),SND.play("menu"))}function g(x,b){a(x)&&(x.adjust?(x.adjust(b||1),SND.play("menu")):x.action&&(SND.play("menuPick"),x.action()))}function m(x){var b=n();if(!b)return!1;var R=s(b.screen),M=R[b.sel];switch(x){case"ArrowUp":case"KeyW":return y(-1),!0;case"ArrowDown":case"KeyS":case"Tab":return y(1),!0;case"ArrowLeft":case"KeyA":return M&&M.adjust&&g(M,-1),!0;case"ArrowRight":case"KeyD":return M&&M.adjust&&g(M,1),!0;case"Enter":case"NumpadEnter":case"Space":return g(M,1),!0;case"Escape":case"Backspace":return v()}return!1}function _(x){var b=x.scale||1;return{s:b,top:x.top||60,gap:x.gap||(b===1?12:14),x0:x.x0||56,x1:x.x1||264,rowH:5*b+5}}function A(x,b,R){for(var M=_(x),P=s(x),O=0;O<P.length;O++){var k=M.top+O*M.gap-3;if(R>=k&&R<k+M.rowH+1&&b>=M.x0-8&&b<=M.x1+8)return O}return-1}function w(x,b){var R=n();if(!R)return!1;var M=A(R.screen,x,b);return R.hover=M,M>=0&&a(s(R.screen)[M])&&M!==R.sel&&(R.sel=M,SND.play("menu")),M>=0&&a(s(R.screen)[M])}function I(x,b){var R=n();if(R){var M=A(R.screen,x,b);if(!(M<0)){var P=s(R.screen)[M];if(a(P)){R.sel=M;var O=_(R.screen),k=P.adjust&&x<O.x1-44&&x>(O.x0+O.x1)/2?-1:1;g(P,k)}}}}function L(x,b){for(var R=String(x).split(" "),M=[],P="",O=0;O<R.length;O++){var k=P?P+" "+R[O]:R[O];k.length>b&&P?(M.push(P),P=R[O]):P=k}return P&&M.push(P),M}function D(x,b,R,M,P){for(var O=M.slider[0],k=M.slider[1],X=M.slider[2](),$=k-O,ne=4,re=1,oe=$*(ne+re)-re,ae=b-oe,Pe=0;Pe<$;Pe++)x.fillStyle=Pe<X-O?P?"#ffd23e":"#e03828":"#2e2a24",x.fillRect(ae+Pe*(ne+re),R,ne,5);ART.drawText(x,String(X),ae-6,R,{color:P?"#ffd23e":"#8a8478",right:!0})}function S(x,b){var R=n();if(R){var M=R.screen,P=_(M),O=s(M);M.drawBg&&M.drawBg(x,b),M.title&&ART.drawText(x,r(M.title),e/2,M.titleY||14,{scale:3,color:"#ff9a28",shadow:"#401008",center:!0}),M.drawExtra&&M.drawExtra(x,b);for(var k=0;k<O.length;k++){var X=O[k],$=P.top+k*P.gap,ne=k===R.sel,re=a(X),oe=r(X.label);ne&&(x.fillStyle="rgba(255,110,24,0.16)",x.fillRect(P.x0-8,$-3,P.x1-P.x0+16,P.rowH),x.fillStyle="#ff7a18",x.fillRect(P.x0-8,$-3,2,P.rowH),b%.8<.55&&ART.drawText(x,">",P.x0-4,$+(P.s-1)*2,{color:"#ffd23e"}));var ae=re?ne?"#ffd23e":"#c8c0b0":"#4a463c",Pe=X.value||X.slider;if(Pe)if(ART.drawText(x,oe,P.x0+4,$,{scale:P.s,color:ae,shadow:re}),X.slider)D(x,P.x1,$+(P.s-1)*2,X,ne);else{var He=r(X.value);ne&&X.adjust&&(He="< "+He+" >"),ART.drawText(x,He,P.x1,$,{scale:P.s,color:ne?"#ffd23e":"#e03828",right:!0})}else ART.drawText(x,oe,M.alignLeft?P.x0+4:e/2,$,{scale:P.s,color:ae,shadow:re,center:!M.alignLeft})}var tt=O[R.sel],at=tt&&a(tt)?r(tt.desc):null;if(at)for(var rt=L(at,70),le=M.descY||168,K=0;K<rt.length;K++)ART.drawText(x,rt[K],e/2,le+K*8,{color:"#a8a090",center:!0});var ce=M.footer===void 0?"ARROWS OR MOUSE: CHOOSE   ENTER: SELECT   ESC: BACK":r(M.footer);ce&&ART.drawText(x,ce,e/2,M.footerY||180,{color:"#5e584e",center:!0})}}return{open:u,push:l,replace:h,close:f,back:v,isOpen:p,key:m,pointer:w,click:I,render:S,wrap:L,current:function(){var x=n();return x?x.screen:null},selected:function(){var x=n();return x?s(x.screen)[x.sel]:null},depth:function(){return i.length}}})();typeof Eu!="undefined"&&(Eu.exports={SETTINGS:T0,MENU:E0})});var Au=Ma((IS,wu)=>{"use strict";var w0=(function(){var i="firebird.riley.v1",e=3;function t(){return{shots:{fist:0,pistol:0,shotgun:0},hits:0,fireDistSum:0,fireDistN:0,strafeL:0,strafeR:0,stillT:0,seenT:0,hideT:0,longestHide:0,said:{}}}function n(b,R){R.los?(b.seenT+=R.dt,b.hideT=0,R.strafe<0?b.strafeL+=R.dt:R.strafe>0&&(b.strafeR+=R.dt),R.moving||(b.stillT+=R.dt)):(b.hideT+=R.dt,b.hideT>b.longestHide&&(b.longestHide=b.hideT))}function r(b,R,M){b.shots[R]=(b.shots[R]||0)+1,b.fireDistSum+=M,b.fireDistN++}function s(b){return b.shots.fist+b.shots.pistol+b.shots.shotgun}function a(b){var R=null,M=0;for(var P in b.shots)b.shots[P]>M&&(M=b.shots[P],R=P);return M>=5?R:null}function o(b){return b.fireDistN?b.fireDistSum/b.fireDistN:0}function c(b){return b.fireDistN<5?0:p((5-o(b))/3)}function u(b){return b.fireDistN<5?0:p((o(b)-6)/4)}function l(b){return b.seenT<4?0:p((b.stillT/b.seenT-.35)/.4)}function h(b){return b.strafeR>=b.strafeL?1:-1}function f(b){var R=b.strafeL+b.strafeR;return R<3?0:p((Math.max(b.strafeL,b.strafeR)/R-.55)/.3)}function p(b){return b<0?0:b>1?1:b}function v(b){var R=[];b.los?(b.cool.volley<=0&&R.push("volley"),b.cool.lead<=0&&R.push("lead"),b.dist<6&&R.push("backoff"),b.dist>3&&R.push("close"),R.push("flank")):R.push("seek");var M=b.cool.summon<=(b.phase>=3?9:0);return b.phase>=2&&b.impsAlive<2&&M&&R.push("summon"),b.phase>=2&&b.los&&b.dist<7&&b.cool.shield<=0&&R.push("shield"),R}function y(b,R,M){var P=0,O=null;switch(b){case"volley":P=1+(M.phase>=3?.4:0);break;case"lead":P=.35+f(R)*1.6,f(R)>.4&&(O="strafe");break;case"backoff":P=.2+c(R)*1.6+(M.playerWeapon==="shotgun"&&M.dist<4?.8:0),c(R)>.4&&(O="rusher");break;case"close":P=.3+u(R)*1.3+l(R)*1.2,l(R)>.4?O="camper":u(R)>.4&&(O="sniper");break;case"flank":P=.45+(M.phase>=2?.35:0)+f(R)*.4;break;case"seek":P=1,R.hideT>3&&(O="hider");break;case"summon":P=.9;break;case"shield":P=M.playerWeapon==="shotgun"?1.4:.25,M.playerWeapon==="shotgun"&&R.shots.shotgun>=6&&(O="shotgun");break}return M.phase>=3&&((b==="volley"||b==="lead"||b==="close"||b==="summon")&&(P+=.6),(b==="backoff"||b==="shield")&&(P*=.4)),{move:b,score:P,why:O}}function g(b,R,M,P){if(P=P||Math.random,!b.length)return null;var O=b.map(function(ne){return y(ne,R,M)}),k=0;O.forEach(function(ne){ne.w=ne.score*ne.score,k+=ne.w});for(var X=P()*k,$=0;$<O.length;$++)if(X-=O[$].w,X<=0)return O[$];return O[O.length-1]}var m={fist:"FISTS",pistol:"PISTOL",shotgun:"SHOTGUN"};function _(b,R){if(!R||b.said[R])return null;var M=null;switch(R){case"strafe":M="YOU ALWAYS DODGE "+(h(b)<0?"LEFT":"RIGHT")+". I'M AIMING THERE NOW.";break;case"rusher":M="YOU LIKE IT UP CLOSE. I'LL KEEP MY DISTANCE.";break;case"sniper":M="YOU KEEP YOUR DISTANCE. SO I'M COMING TO YOU.";break;case"camper":M="YOU STAND STILL A LOT. THAT MAKES YOU EASY TO FIND.";break;case"hider":M="HIDING? I CAN FIND YOU. I KNOW THIS ARENA.";break;case"shotgun":M=b.shots.shotgun+" SHOTGUN BLASTS SO FAR. SHIELD UP!";break}return M&&(b.said[R]=!0),M}function A(b,R,M){switch(M=M||{},b){case"intro":return M.memory&&M.memory.lastStyle?"BACK AGAIN! LAST TIME "+M.memory.lastStyle+".":M.memory?"BACK AGAIN! ROUND "+(M.memory.fights+1)+". LET'S GO!":"HI! I'M RILEY. I LEARN HOW YOU PLAY. READY?";case"ease":return"I'M GOING A LITTLE EASIER THIS TIME. JUST A LITTLE.";case"studied":return"YOU BEAT ME "+M.wins+(M.wins===1?" TIME":" TIMES")+". I'VE BEEN PRACTISING.";case"phase2":return"OKAY. I'VE BEEN WATCHING YOU. MY TURN.";case"phase3":return"ALRIGHT, NO MORE HOLDING BACK!";case"summon":return"LITTLE HELP, FRIENDS?";case"friendlyFire":return"HEY! WATCH WHERE YOU THROW THOSE.";case"impsTurned":return"YOU GOT MY IMPS FIGHTING ME? SMART.";case"playerDied":{var P=w(R);return"GOOD FIGHT! YOU HIT ME "+R.hits+(R.hits===1?" TIME":" TIMES")+(P!==null?", "+P+"% ACCURACY":"")+". AGAIN?"}case"defeated":{var O=a(R);return"OKAY, YOU WIN! "+R.hits+" HITS"+(O?" WITH MOSTLY THE "+m[O]:"")+". NICE."}}return null}function w(b){var R=s(b);return R<5?null:Math.min(100,Math.round(b.hits/R*100))}function I(b){var R=a(b);return c(b)>.5&&R?"YOU RUSHED ME WITH THE "+m[R]:u(b)>.5?"YOU FOUGHT ME FROM FAR AWAY":b.longestHide>6?"YOU HID FOR "+Math.round(b.longestHide)+" SECONDS":f(b)>.5?"YOU KEPT DODGING "+(h(b)<0?"LEFT":"RIGHT"):R?"YOU USED THE "+m[R]+" THE MOST":null}function L(b){var R={fights:0,wins:0,lossStreak:0,ease:0,lastStyle:null};try{var M=b&&b.getItem(i);if(M){var P=JSON.parse(M);for(var O in R)P[O]!==void 0&&(R[O]=P[O])}}catch{}return R.ease=Math.max(0,Math.min(e,R.ease|0)),R}function D(b,R){try{b&&b.setItem(i,JSON.stringify(R))}catch{}}function S(b,R,M){return b.fights++,b.lastStyle=I(R),M?(b.wins++,b.lossStreak=0,b.ease=0):(b.lossStreak++,b.ease=Math.min(e,b.lossStreak)),b}function x(b){var R=b.ease,M=b.wins>0&&R===0;return{hpScale:1-.08*R,dmgScale:1-.1*R,coolScale:(1+.12*R)*(M?.9:1),practised:M}}return{MAX_EASE:e,newProfile:t,observe:n,noteShot:r,favWeapon:a,rusher:c,sniper:u,camper:l,strafeSide:h,strafeHabit:f,accuracy:w,legalMoves:v,scoreMove:y,choose:g,insight:_,line:A,describeStyle:I,recall:L,save:D,settle:S,tuning:x}})();typeof wu!="undefined"&&(wu.exports=w0)});var fd=Ma((DS,Pu)=>{"use strict";var Ta=[{name:"E1M1: ASH GATES",floor:"slab",ceil:"ceilDark",par:75,playerAngle:0,map:["#######################X######","####################..t.t....#","####################.........#","####################..i..+...#","####################....A....#","####################.........#","#######################U######","##....................t.t...##","##.t......%%......%%........##","##u...g......i..............##","##.t.......h.....g..........##","##..........................##","####################D#########","###*Pa#########....t.t......##","####S##########.....i.....o.##","##b......######..........io.##","##.......######......h......##","##..p....D........2.........##","##.......######..o..........##","##.......######.t.........t.##","##...h...#####################","##############################"]},{name:"E1M2: THE FURNACE",floor:"tech",ceil:"ceilTech",par:120,playerAngle:-Math.PI/2,map:["###############X################","############..t.t...#...########","############g.......#*PA########","############...+...g#...########","###############R######S#########","########......t.t.......########","########................########","########......b.........########","#......#.i.T........T...#o....o#","#......D................#......#","#..i...#................D..o...#","#......#....g...........#....i.#","#t.t.g.#...T........T...#.o..o.#","#r.a...#...i............#..g...#","########................#.a..h.#","###############..###############","############.b....h.############","############...p....############","############........############","############t......t############","################################"]},{name:"E1M3: DEMON THRONE",floor:"hell",ceil:"ceilHell",par:150,playerAngle:-Math.PI/2,map:["HHHHHHHHHHHHHHHXHHHHHHHHHHHHHHHH","HHHHHHHHHHHHH.t.t..HHHHHHHHHHHHH","HHHHHHHHHHHHH..+...HHHHHHHHHHHHH","HHHHHHHHHHHHHHHRHHHHHHHHHHHHHHHH","HHHHHHt.......t.t........tHHHHHH","HHHHHH.i................i.HHHHHH","HHHHHH..o..............o.tH....H","HH...H....................D..g.H","HH*PAS.........K.........tH.r..H","HH...H....g.........g.....H....H","HHHHHH.a................b.HHHHHH","HHHHHH...i..........i.....HHHHHH","HHHHHHt..................tHHHHHH","HHHHHH...a..h......+..b...HHHHHH","HHHHHH....................HHHHHH","HHHHHHHHHHHHHHHDHHHHHHHHHHHHHHHH","HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH","HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH","HHHHHHHHHHHHHi...iHHHHHHHHHHHHHH","HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH","HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH","HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH","HHHHHHHHHHHt........tHHHHHHHHHHH","HHHHHHHHHHH...b..a...HHHHHHHHHHH","HHHHHHHHHHH....p.....HHHHHHHHHHH","HHHHHHHHHHH..........HHHHHHHHHHH","HHHHHHHHHHHt........tHHHHHHHHHHH","HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH"]},{name:"E1M4: RILEY'S ARENA",floor:"tech",ceil:"ceilTech",par:240,playerAngle:-Math.PI/2,map:["MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMt........................tMMM","MMM..h..........Y.........h..MMM","MMM..........................MMM","MMM....TT..............TT....MMM","MMM....TT....o....o....TT....MMM","MMM..........................MMM","MMM.a......................a.MMM","MMM....TT..............TT....MMM","MMM....TT.......+......TT....MMM","MMM..........................MMM","MMMt.......o........o.......tMMM","MMMMMMMMMMMMMMMUMMMMMMMMMMMMMMMM","TTTTTTTTTTTTTT...TTTTTTTTTTTTTTT","TTTTTTTTTTTTTTt.tTTTTTTTTTTTTTTT","TTi.....o.......o.....iTTTTTTTTT","TT.....................T..g...TT","TT...g.............g..tTt....tTT","TT.......MM...MM.......D....u.TT","TT..b....MM.h.MM....a.tT.a..h.TT","TT.....................Tt....tTT","TT.................o...T..i...TT","TT.....................TTTTTTTTT","TTTTTTTTTTTTTTTDTTTTTTTTTTTTTTTT","TTTTTTTTTTt.........tTTTTTTTTTTT","TTTTTTTTTT..b..2..a..TTTTTTTTTTT","TTTTTTPA*S...........TTTTTTTTTTT","TTTTTTTTTT.....p.....TTTTTTTTTTT","TTTTTTTTTTt...h.....tTTTTTTTTTTT","TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT"]}];(function(){for(var i=0;i<Ta.length;i++){for(var e=Ta[i].map,t=e[0].length,n=0,r=0;r<e.length;r++){if(e[r].length!==t)throw new Error(Ta[i].name+" row "+r+" width "+e[r].length+" != "+t);for(var s=0;s<t;s++)e[r][s]==="p"&&n++}if(n!==1)throw new Error(Ta[i].name+" has "+n+" player starts")}})();typeof Pu!="undefined"&&(Pu.exports=Ta)});var Ae=vs(Qf(),1),yn=vs(ed(),1);window.ART=Ae.default;window.SND=yn.default;var qf=vs(td(),1);var nn=vs(Au(),1);var A0={"#":1,"%":2,M:3,T:4,H:5,D:6,R:7,U:8,X:9,S:11,"=":12},pi={6:!0,7:!0,8:!0,11:!0},nd=.25,R0=2,Yn=.3,Ru=.55;function id(i){return i>="0"&&i<="9"?(i.charCodeAt(0)-48)*nd:i>="a"&&i<="z"?(i.charCodeAt(0)-87)*nd:0}function rd(i){for(var e=i.map,t=e[0].length,n=e.length,r={mw:t,mh:n,cells:new Uint8Array(t*n),floor:new Float32Array(t*n),ceil:new Float32Array(t*n),doors:{},lifts:[],lava:new Uint8Array(t*n),movers:[]},s=i.ceilHeight||R0,a=0;a<n;a++)for(var o=0;o<t;o++){var c=e[a][o],u=a*t+o,l=A0[c]||0;r.cells[u]=l,r.floor[u]=i.heights?id(i.heights[a][o]):0,r.ceil[u]=i.ceilings&&i.ceilings[a][o]!=="."?id(i.ceilings[a][o]):s,r.ceil[u]<r.floor[u]+1&&(r.ceil[u]=r.floor[u]+1),pi[l]&&(r.doors[o+","+a]={x:o,z:a,open:0,state:"closed",timer:0,locked:l===7?"red":l===8?"blue":null,secret:l===11,found:!1,used:!1}),c==="~"&&(r.lava[u]=1),c==="L"&&r.lifts.push({x:o,z:a,top:r.floor[u],bottom:0,pos:0,state:"down",wait:0})}for(var h in r.doors){var f=r.doors[h],p=1/0,v=0;Sa(r,f.x,f.z).forEach(function(g){r.cells[g.i]===0&&(p=Math.min(p,r.floor[g.i]),v=Math.max(v,r.ceil[g.i]))});var y=f.z*t+f.x;r.floor[y]=p===1/0?0:p,r.ceil[y]=f.secret?v||s:Math.min(v||s,r.floor[y]+1.5)}return r.lifts.forEach(function(g){var m=1/0;Sa(r,g.x,g.z).forEach(function(A){var w=r.cells[A.i]===0||pi[r.cells[A.i]];w&&!C0(r,A.x,A.z)&&(m=Math.min(m,r.floor[A.i]))}),g.bottom=m===1/0?0:Math.min(m,g.top),g.pos=g.bottom;var _=g.z*t+g.x;r.floor[_]=g.pos,r.ceil[_]=Math.max(r.ceil[_],g.top+1.2)}),r}function C0(i,e,t){for(var n=0;n<i.lifts.length;n++)if(i.lifts[n].x===e&&i.lifts[n].z===t)return!0;return!1}function Sa(i,e,t){var n=[];return[[1,0],[-1,0],[0,1],[0,-1]].forEach(function(r){var s=e+r[0],a=t+r[1];s>=0&&a>=0&&s<i.mw&&a<i.mh&&n.push({x:s,z:a,i:a*i.mw+s})}),n}function ri(i,e,t){return e<0||t<0||e>=i.mw||t>=i.mh?1:i.cells[t*i.mw+e]}function Xi(i,e,t){return i.doors[e+","+t]||null}function mr(i,e,t){var n=ri(i,e,t);if(n===0)return!1;if(pi[n]){var r=Xi(i,e,t);return!r||r.open<.9}return!0}function un(i,e,t){return i.floor[t*i.mw+e]}function Li(i,e,t){return i.ceil[t*i.mw+e]}function Br(i,e,t,n,r,s,a){for(var o=Math.floor(e-n),c=Math.floor(e+n),u=Math.floor(t-n),l=Math.floor(t+n),h=-1/0,f=1/0,p=u;p<=l;p++)for(var v=o;v<=c;v++){if(mr(i,v,p))return{blocked:!0};var y=un(i,v,p),g=Li(i,v,p);if(y>r+a+1e-4)return{blocked:!0};h=Math.max(h,y),f=Math.min(f,g)}return f<Math.max(r,h)+s-1e-4?{blocked:!0}:{blocked:!1,ground:h,ceil:f}}function kr(i,e,t,n,r,s,a){var o=!0;return t!==0&&(Br(i,e.x+t,e.z,r,e.y,s,a).blocked?o=!1:e.x+=t),n!==0&&(Br(i,e.x,e.z+n,r,e.y,s,a).blocked?o=!1:e.z+=n),o}function Vo(i,e,t,n){for(var r=Math.floor(e-n),s=Math.floor(e+n),a=Math.floor(t-n),o=Math.floor(t+n),c=-1/0,u=a;u<=o;u++)for(var l=r;l<=s;l++)mr(i,l,u)||(c=Math.max(c,un(i,l,u)));return c===-1/0?0:c}function Wo(i,e,t,n,r,s,a,o){for(var c=Math.sqrt(r*r+a*a),u=Math.floor(e),l=Math.floor(n),h=c>1e-9?Math.abs(1/r):1e30,f=c>1e-9?Math.abs(1/a):1e30,p=r<0?-1:1,v=a<0?-1:1,y=r<0?(e-u)*h:(u+1-e)*h,g=a<0?(n-l)*f:(l+1-n)*f,m=0,_=0;_<256;_++){var A=Math.min(y,g,o),w=un(i,u,l),I=Li(i,u,l);if(s<0){var L=(w-t)/s;if(L>=m-1e-6&&L<=A)return x(L,"floor")}else if(s>0){var D=(I-t)/s;if(D>=m-1e-6&&D<=A)return x(D,"ceil")}if(A>=o)return x(o,"none");if(m=A,y<g?(y+=h,u+=p):(g+=f,l+=v),u<0||l<0||u>=i.mw||l>=i.mh)return x(m,"wall");var S=t+s*m;if(mr(i,u,l)||S<un(i,u,l)||S>Li(i,u,l))return x(m,"wall")}return x(o,"none");function x(b,R){return{dist:b,x:e+r*b,y:t+s*b,z:n+a*b,kind:R,cx:u,cz:l}}}function gr(i,e,t,n,r,s,a){var o=r-e,c=s-t,u=a-n,l=Math.sqrt(o*o+c*c+u*u);return l<.001?!0:Wo(i,e,t,n,o/l,c/l,u/l,l).dist>=l-.05}var xs=null;function Cu(i,e,t,n,r,s){var a=i.mw,o=a*i.mh;(!xs||xs.length<o)&&(xs=new Int32Array(o)),s.fill(-1);var c=Math.floor(e),u=Math.floor(t);if(!(c<0||u<0||c>=a||u>=i.mh)){var l=0,h=0;for(s[u*a+c]=0,xs[h++]=u*a+c;l<h;){var f=xs[l++],p=s[f];if(!(p>=n))for(var v=f%a,y=f/a|0,g=0;g<4;g++){var m=v+(g===0?1:g===1?-1:0),_=y+(g===2?1:g===3?-1:0);if(!(m<0||_<0||m>=a||_>=i.mh)){var A=_*a+m;s[A]!==-1||!r(f,m,_)||(s[A]=p+1,xs[h++]=A)}}}}}function sd(i,e,t,n){var r={cells:e,from:i.floor[e[0]],to:t,pos:i.floor[e[0]],speed:n||.8,moved:0,done:!1};return i.movers.push(r),r}function ad(i,e){i.movers.forEach(function(t){var n=t.pos;if(!t.done){var r=t.to>t.pos?1:-1;t.pos+=r*t.speed*e,(r>0&&t.pos>=t.to||r<0&&t.pos<=t.to)&&(t.pos=t.to,t.done=!0),t.cells.forEach(function(s){i.floor[s]=t.pos,i.ceil[s]<t.pos+1&&(i.ceil[s]=t.pos+1)})}t.moved=t.pos-n})}function od(i,e,t,n){for(var r=0;r<i.lifts.length;r++){var s=i.lifts[r],a=t(s.x,s.z),o=s.pos;s.state==="down"&&a?(s.state="wait",s.wait=.5):s.state==="wait"?(s.wait-=e,s.wait<=0&&(s.state="up",n&&n(s,"start"))):s.state==="up"?(s.pos=Math.min(s.top,s.pos+e*.9),s.pos>=s.top&&(s.state="top",s.wait=2.5,n&&n(s,"stop"))):s.state==="top"?a?s.wait=2.5:(s.wait-=e)<=0&&(s.state="lower",n&&n(s,"start")):s.state==="lower"&&(a&&s.pos>s.bottom+.05?s.state="up":(s.pos=Math.max(s.bottom,s.pos-e*.9),s.pos<=s.bottom&&(s.state="down",n&&n(s,"stop")))),i.floor[s.z*i.mw+s.x]=s.pos,s.moved=s.pos-o}}var hn={r:.28,h:.9,hCrouch:.55,eye:.8,eyeCrouch:.45,walk:3.2,run:5,jumpV:3.9,gravity:14},ba={fist:{ammo:null,rate:.5,melee:!0,dmgMin:8,dmgMax:24,knock:.12},pistol:{ammo:"bullets",rate:.42,pellets:1,spread:.025,dmgMin:5,dmgMax:15,knock:.03,shake:.6},shotgun:{ammo:"shells",rate:.95,pellets:7,spread:.1,dmgMin:5,dmgMax:15,knock:.045,shake:2.2}},Yi=["fist","pistol","shotgun"],ld={bullets:"BULLETS",shells:"SHELLS"},_s={imp:{hp:40,speed:1.7,radius:.35,painChance:.75,ranged:!0,melee:!1,h:.85,attackDmg:[8,20]},gnasher:{hp:110,speed:2.9,radius:.42,painChance:.5,ranged:!1,melee:!0,h:.7,attackDmg:[4,16],fleeBelow:.4},knight:{hp:400,speed:1.9,radius:.48,painChance:.2,ranged:!0,melee:!0,h:1.3,attackDmg:[10,26]},riley:{hp:900,speed:2.4,radius:.4,painChance:.12,ranged:!0,melee:!0,h:.95,attackDmg:[10,20],boss:!0}},cd={i:"imp",g:"gnasher",K:"knight",Y:"riley"},ud={h:{msg:"PICKED UP A STIMPACK.",snd:"health"},"+":{msg:"PICKED UP A MEDIKIT.",snd:"health"},b:{msg:"PICKED UP A CLIP.",snd:"pickup"},a:{msg:"PICKED UP A BOX OF SHELLS.",snd:"pickup"},A:{msg:"PICKED UP THE ARMOR!",snd:"pickup"},2:{msg:"YOU GOT THE SHOTGUN!",snd:"weaponUp"},r:{msg:"PICKED UP THE RED KEYCARD.",snd:"keyPickup"},u:{msg:"PICKED UP THE BLUE KEYCARD.",snd:"keyPickup"},P:{msg:"PHOENIX ORB! YOU FEEL REBORN!",snd:"orb"}},zr=[{name:"ROOKIE",dmg:.5,ammo:2,desc:"DEMONS HIT HALF AS HARD AND AMMO IS DOUBLED. GREAT FOR A FIRST RUN."},{name:"WARRIOR",dmg:1,ammo:1,desc:"THE FIGHT AS IT WAS MEANT TO BE."},{name:"INFERNO",dmg:1.5,ammo:1,desc:"DEMONS HIT HARDER. FOR VETERANS WHO KNOW EVERY CORNER."}],hd={run:"TIP: HOLD SHIFT TO RUN.",jump:"TIP: SPACE JUMPS. C CROUCHES. LOOK UP AND DOWN WITH THE MOUSE.",map:"TIP: LOST? PRESS TAB FOR THE MAP.",weapons:"TIP: PRESS 1 2 3, OR SCROLL THE MOUSE WHEEL, TO SWITCH WEAPONS. Q SWAPS BACK.",key:"TIP: THE MATCHING DOOR IS MARKED IN COLOR ON YOUR MAP (TAB).",lowAmmo:"TIP: LOW ON AMMO? YOUR FIST (1) NEVER RUNS OUT, AND IT IS SILENT.",lowHealth:"TIP: LOW HEALTH! BACK OFF AND LOOK FOR STIMPACKS AND MEDIKITS.",hurtDir:"TIP: THE RED MARKS AROUND YOUR AIM POINT AT WHATEVER HIT YOU.",secret:"TIP: WALLS WITH A CRACK MAY HIDE SECRETS. PRESS E ON THEM.",torches:"TIP: A PAIR OF TORCHES BESIDE A DOOR MEANS IT MATTERS. FOLLOW THEM.",lift:"TIP: STAND ON A GLOWING PLATFORM TO RIDE IT UP.",barrel:"TIP: A DEMON IS NEXT TO A BARREL. SHOOT THE BARREL!",lava:"TIP: LAVA BURNS! GET OUT, OR FIND A WAY TO DRAIN IT.",meet_imp:"TIP: IMPS THROW FIREBALLS. STRAFE WITH A AND D TO DODGE.",meet_gnasher:"TIP: GNASHERS CHARGE AND BITE. BACK AWAY WHILE YOU SHOOT.",meet_knight:"TIP: THE EMBER KNIGHT IS TOUGH. KEEP YOUR DISTANCE AND USE SHELLS."};function Iu(i){i=i||{};var e=i.levels,t=i.rng||Math.random,n=i.storage||null,r=i.settings||{difficulty:1,tips:!1,seenTips:{}},s=i.onProgress||function(){},a={},o=!1,c="title",u=0,l=null,h=null,f={};function p(){return t()}function v(d,T){return d+t()*(T-d)}function y(d,T,B){return d<T?T:d>B?B:d}function g(d,T,B,ie){var Z=d-B,ee=T-ie;return Z*Z+ee*ee}function m(){return zr[r.difficulty]||zr[1]}function _(d,T,B,ie,Z,ee){var pe={t:d,name:T,x:B,y:ie,z:Z};if(ee)for(var ge in ee)pe[ge]=ee[ge];l.events.push(pe)}function A(d,T){T?_("sound",d,T.x,(T.y||0)+.5,T.z):_("sound",d,l.p.x,l.p.y+.8,l.p.z,{local:!0})}function w(d,T,B,ie){var Z=_s[d];return{kind:d,mob:!0,x:T,z:B,y:ie,hp:Z.hp,radius:Z.radius,speed:Z.speed,h:Z.h,state:"idle",st:0,animT:p(),cool:v(.5,1.5),moveAng:0,retarget:0,losT:p()*.3,los:!1,target:null,lostT:0,fleeNext:!1,strafeSide:p()<.5?1:-1,flashT:0}}function I(d){var T=d.map.join("");return{boss:T.indexOf("Y")>=0,keys:{red:T.indexOf("R")>=0||T.indexOf("r")>=0,blue:T.indexOf("U")>=0||T.indexOf("u")>=0}}}function L(d){return{hp:Math.max(d.hp,1),armor:d.armor,ammo:{bullets:d.ammo.bullets,shells:d.ammo.shells},shotgun:d.weapons.shotgun,weapon:d.weapon}}function D(d,T,B){u=d;var ie=e[d],Z=rd(ie),ee=ie.map;E=ie;var pe=B||(T&&l?L(l.p):null),ge={x:0,z:0,y:0,ang:ie.playerAngle||0,pitch:0,vx:0,vz:0,vy:0,onGround:!0,crouch:!1,eyeH:hn.eye,hp:pe?pe.hp:100,armor:pe?pe.armor:0,ammo:pe?{bullets:pe.ammo.bullets,shells:pe.ammo.shells}:{bullets:50,shells:0},weapons:{fist:!0,pistol:!0,shotgun:pe?pe.shotgun:!1},keys:{red:!1,blue:!1},weapon:pe&&pe.shotgun?pe.weapon:"pistol",nextWeapon:null,prevWeapon:null,raiseT:.3,lowerT:0,cool:0,fireT:1,dead:!1,deadT:0,painT:0,grinT:0,dmgFlash:0,bonusFlash:0,jumpHeld:!1,landT:0};k(ge,ge.weapon)||(ge.weapon=X(ge));for(var Te=[],Ye=[],et=null,gt=0;gt<ee.length;gt++)for(var Dt=0;Dt<ee[0].length;Dt++){var Et=ee[gt][Dt],cn=Dt+.5,tn=gt+.5,Ut=un(Z,Dt,gt);if(Et==="p")ge.x=cn,ge.z=tn,ge.y=Ut;else if(cd[Et]){var mn=w(cd[Et],cn,tn,Ut);mn.kind==="riley"&&H(mn),Te.push(mn)}else Et==="o"?Te.push({kind:"barrel",mob:!0,barrel:!0,x:cn,z:tn,y:Ut,hp:15,radius:.3,h:.55,state:"idle",st:0}):Et==="t"?Te.push({kind:"torch",x:cn,z:tn,y:Ut,h:.95,animT:p()}):ud[Et]?Te.push({kind:"pickup",item:Et,x:cn,z:tn,y:Ut,h:.3,bob:p()*6}):Et==="*"&&Ye.push({x:Dt,z:gt,found:!1});Et==="X"&&(et={x:Dt,z:gt})}var Zt=0,C=0;return Te.forEach(function(z){z.mob&&!z.barrel&&Zt++,z.kind==="pickup"&&C++}),l={L:ie,W:Z,mw:Z.mw,mh:Z.mh,doors:Z.doors,ents:Te,p:ge,secrets:Ye,seen:new Uint8Array(Z.mw*Z.mh),msgs:[],events:[],time:0,notice:null,stats:{kills:0,totalKills:Zt,items:0,totalItems:C,secrets:0,totalSecrets:Ye.length},exitT:-1,flow:new Int16Array(Z.mw*Z.mh),flowT:0,infightSeen:!1,boss:null,shotId:0,firing:!1,input:{strafe:0,moving:!1,vx:0,vz:0},startGear:pe,info:I(ie),exitCell:et,hurtDirs:[],hitT:0,killT:0,blockT:0,shake:0,hitstop:0,killer:null,tipQueue:[],tipT:3,usedMap:!1,ranT:0,jumped:!1,spotT:0,started:!0,fired:{},waves:{},lightsOff:{},lavaT:0,timers:[]},Te.forEach(function(z){z.kind==="riley"&&(l.boss=z)}),c="game",Xe("start"),b(O(),"#f0d848",3.5),l}function S(){var d=l.startGear;d&&(d={hp:Math.max(d.hp,100),armor:d.armor,ammo:{bullets:Math.max(d.ammo.bullets,50),shells:d.shotgun?Math.max(d.ammo.shells,8):d.ammo.shells},shotgun:d.shotgun,weapon:d.weapon}),D(u,!1,d)}function x(d,T,B){l.msgs.push({text:d,t:B||3,color:T}),l.msgs.length>4&&l.msgs.shift()}function b(d,T,B){l.notice={text:d,color:T||"#f0d848",t:B||2.5,max:B||2.5}}function R(d){l&&(l.shake=Math.min(6,Math.max(l.shake,d)))}function M(d){!l||!r.tips||r.seenTips&&r.seenTips[d]||l.tipQueue.indexOf(d)<0&&l.tipQueue.push(d)}function P(d){if(l.tipT-=d,!(l.tipT>0||!l.tipQueue.length)){var T=l.tipQueue.shift();r.seenTips[T]||(r.seenTips[T]=!0,i.saveSettings&&i.saveSettings(),x(hd[T],"#8fe0a0",6),l.tipT=7)}}function O(){if(!l)return"";var d=l.info,T=l.p;return d.keys.blue&&!T.keys.blue?"FIND THE BLUE KEYCARD":d.keys.red&&!T.keys.red?"FIND THE RED KEYCARD":d.boss?"DEFEAT RILEY":"FIND THE EXIT SWITCH"}function k(d,T){var B=ba[T];return!B.ammo||d.ammo[B.ammo]>0}function X(d){for(var T=Yi.length-1;T>=0;T--){var B=Yi[T];if(d.weapons[B]&&k(d,B))return B}return"fist"}function $(d,T){if(c!=="game"||!l||l.p.dead)return!1;var B=l.p;return B.weapons[d]?k(B,d)?d===B.weapon?(B.nextWeapon&&!(B.lowerT>0)&&(B.nextWeapon=null),!1):d===B.nextWeapon?!1:(B.prevWeapon=B.weapon,B.nextWeapon=d,B.autoFist=!1,!0):(T||(x("NO "+ld[ba[d].ammo]+" FOR THE "+d.toUpperCase()+"."),A("noAmmo")),!1):(T||x("YOU HAVEN'T FOUND THE "+d.toUpperCase()+" YET."),!1)}function ne(d){for(var T=l.p,B=Yi.indexOf(T.nextWeapon||T.weapon),ie=1;ie<Yi.length;ie++){var Z=Yi[(B+d*ie+Yi.length*2)%Yi.length];if(T.weapons[Z]&&k(T,Z)){$(Z,!0);return}}}function re(){var d=l.p;d.prevWeapon&&d.prevWeapon!==d.weapon&&d.weapons[d.prevWeapon]&&k(d,d.prevWeapon)?$(d.prevWeapon,!0):ne(-1)}function oe(){return l.p.y+l.p.eyeH}function ae(d,T){return Math.sqrt(g(d,T,l.p.x,l.p.z))}function Pe(d,T,B,ie,Z,ee){for(var pe=l.p,ge=Math.cos(T),Te=Math.cos(d)*ge,Ye=Math.sin(d)*ge,et=Math.sin(T),gt=pe.x,Dt=oe(),Et=pe.z,cn=Z?1.4:40,tn=Wo(l.W,gt,Dt,Et,Te,et,Ye,cn),Ut=null,mn=tn.dist+.05,Zt=0;Zt<l.ents.length;Zt++){var C=l.ents[Zt];if(!(!C.mob||C.state==="die"||C.state==="dead"||C.gone)){var z=He(gt,Dt,Et,Te,et,Ye,C);z!==null&&z>.1&&z<mn&&(Ut=C,mn=z)}}var se=B+p()*(ie-B)|0;if(Ut){if(at(Ut,se),!Ut.barrel){Ut.kind==="riley"&&Ut.shieldT>0?l.blockT=.2:Ut.state==="die"?(l.killT=.3,l.hitstop=Math.max(l.hitstop,.045)):l.hitT=Math.max(l.hitT,.14);var te=_s[Ut.kind];if(ee&&!te.boss){var Q=ee*(te.hp>200?.25:1);kr(l.W,Ut,Math.cos(d)*Q,Math.sin(d)*Q,Ut.radius,Ut.h,Yn)}}_("fx",Ut.barrel||Ut.kind==="riley"?"spark":"blood",gt+Te*mn,Dt+et*mn,Et+Ye*mn,{dx:-Te,dy:-et,dz:-Ye})}else!Z&&tn.kind!=="none"?_("fx","puff",tn.x-Te*.03,tn.y-et*.03,tn.z-Ye*.03,{surface:tn.kind}):Z&&A("whiff");return Ut}function He(d,T,B,ie,Z,ee,pe){var ge=pe.radius+.06,Te=d-pe.x,Ye=B-pe.z,et=ie*ie+ee*ee,gt=2*(Te*ie+Ye*ee),Dt=Te*Te+Ye*Ye-ge*ge;if(et<1e-9)return null;var Et=gt*gt-4*et*Dt;if(Et<0)return null;var cn=Math.sqrt(Et),tn=(-gt-cn)/(2*et),Ut=(-gt+cn)/(2*et),mn=tn>0?tn:Ut;if(mn<0)return null;var Zt=T+Z*mn;if(Zt>=pe.y&&Zt<=pe.y+pe.h)return mn;if(Math.abs(Z)>1e-6){var C=((Z<0?pe.y+pe.h:pe.y)-T)/Z;if(C>0){var z=d+ie*C-pe.x,se=B+ee*C-pe.z;if(z*z+se*se<=ge*ge)return C}}return null}function tt(d){return!!d&&!d.gone&&d.state!=="die"&&d.state!=="dead"}function at(d,T,B){if(!(d.state==="die"||d.state==="dead")&&!(d.kind==="riley"&&ye(d,B))){if(d.hp-=T,d.flashT=.07,d.barrel){d.blame=tt(B)?B:null,d.hp<=0&&d.state!=="boom"&&(d.state="boom",d.st=.08);return}var ie=_s[d.kind];fe(d),ie.boss||(B&&B!==d&&tt(B)&&!B.barrel?(d.target!==B&&!l.infightSeen&&ae(d.x,d.z)<14&&(l.infightSeen=!0,x("THE DEMONS TURN ON EACH OTHER!")),d.target=B,d.lostT=0):B||(d.target=null)),d.hp<=0?(d.state="die",d.st=0,l.stats.kills++,ie.boss||A("enemyDie",d),_("fx","gib",d.x,d.y+d.h*.6,d.z,{kind:d.kind})):p()<ie.painChance&&!(ie.boss&&d.state==="windup")&&(d.state="pain",d.st=ie.boss?.25:.35,ie.fleeBelow&&d.hp<ie.hp*ie.fleeBelow&&(d.fleeNext=!0),A("enemyPain",d)),d.kind==="riley"&&Ee(d)}}function rt(d){d.state="dead",d.dead=!0,d.gone=!0,A("barrelBoom",d),_("fx","explosion",d.x,d.y+.3,d.z);for(var T=2.3,B=tt(d.blame)?d.blame:null,ie=0;ie<l.ents.length;ie++){var Z=l.ents[ie];if(!(!Z.mob||Z===d||Z.state==="dead"||Z.state==="die")){var ee=Math.sqrt(g(Z.x,Z.z,d.x,d.z)+Math.pow(Z.y-d.y,2));ee<T&&gr(l.W,d.x,d.y+.3,d.z,Z.x,Z.y+Z.h/2,Z.z)&&(Z.barrel?Z.state!=="boom"&&(Z.state="boom",Z.st=v(.1,.25),Z.blame=B):at(Z,(T-ee)/T*90|0,B))}}he(d.x,d.z,10);var pe=Math.sqrt(g(l.p.x,l.p.z,d.x,d.z)+Math.pow(l.p.y-d.y,2));R(6/(1+pe*.35)),pe<T&&gr(l.W,d.x,d.y+.3,d.z,l.p.x,oe(),l.p.z)&&le((T-pe)/T*70|0,d)}function le(d,T){var B=l.p;if(!(B.dead||d<=0||l.exitT>=0)){if(d=Math.max(1,Math.round(d*m().dmg)),T){var ie=Math.atan2(T.z-B.z,T.x-B.x);l.hurtDirs.push({ang:ie,t:1}),l.hurtDirs.length>6&&l.hurtDirs.shift();var Z=Math.atan2(Math.sin(ie-B.ang),Math.cos(ie-B.ang));Math.abs(Z)>.9&&M("hurtDir"),l.killer=T.kind}var ee=Math.min(B.armor,Math.ceil(d/3));B.armor-=ee,d-=ee,B.hp-=d,B.dmgFlash=Math.min(.65,B.dmgFlash+d/55),R(Math.min(4,1+d/8)),B.painT=.6,B.hp<=0?(B.hp=0,B.dead=!0,B.deadT=0,A("playerDie"),U(l.boss)&&(F(l.boss,nn.default.line("playerDied",l.boss.profile)),J(l.boss,!1))):(A("playerPain"),B.hp<30&&M("lowHealth"))}}function K(d,T,B,ie,Z,ee,pe){var ge=d.y+d.h*.65,Te=B-d.x,Ye=ie-ge,et=Z-d.z,gt=Math.sqrt(Te*Te+Ye*Ye+et*et)||1,Dt=ee||(T?5.5:7);l.ents.push({kind:"proj",x:d.x+Te/gt*.5,y:ge+Ye/gt*.5,z:d.z+et/gt*.5,vx:Te/gt*Dt,vy:Ye/gt*Dt,vz:et/gt*Dt,h:.2,green:!!T,animT:0,owner:d,dmg:pe||(T?v(10,28):v(7,20))}),A(d.kind==="riley"?"rileyShoot":"impShoot",d)}function ce(d,T,B){return!mr(l.W,T,B)}function Me(d,T,B){var ie=l.W,Z=ri(ie,T,B);if(Z!==0){if(!pi[Z])return!1;var ee=Xi(ie,T,B);if(!(ee.open>=.9||!ee.locked&&!ee.secret))return!1}return ie.floor[B*ie.mw+T]-ie.floor[d]<=Yn+1e-4}function he(d,T,B){var ie=new Int16Array(l.mw*l.mh);Cu(l.W,d,T,B,ce,ie);for(var Z=0;Z<l.ents.length;Z++){var ee=l.ents[Z];!ee.mob||ee.barrel||ee.state!=="idle"||_s[ee.kind].boss||ie[Math.floor(ee.z)*l.mw+Math.floor(ee.x)]>=0&&fe(ee)}}function fe(d){d.state==="idle"&&(d.state="chase",d.st=0,A(d.kind==="knight"?"knightSight":d.kind==="riley"?"rileySight":"impSight",d))}function ve(){Cu(l.W,l.p.x,l.p.z,9999,function(d,T,B){var ie=d,Z=l.W,ee=ri(Z,T,B);if(ee!==0){if(!pi[ee])return!1;var pe=Xi(Z,T,B);if(pe.sealed||!(pe.open>=.9||!pe.locked&&!pe.secret))return!1}return Z.lava[B*Z.mw+T]?!1:Z.floor[ie]-Z.floor[B*Z.mw+T]<=Yn+1e-4},l.flow)}function Ne(d){var T=l.mw,B=Math.floor(d.x),ie=Math.floor(d.z),Z=l.flow[ie*T+B];if(Z<=0)return null;for(var ee=-1,pe=-1,ge=0;ge<4;ge++){var Te=B+(ge===0?1:ge===1?-1:0),Ye=ie+(ge===2?1:ge===3?-1:0);if(!(Te<0||Ye<0||Te>=T||Ye>=l.mh)){var et=l.flow[Ye*T+Te];et>=0&&et<Z&&(Z=et,ee=Te,pe=Ye)}}return ee<0?null:Math.atan2(pe+.5-d.z,ee+.5-d.x)}function qe(d,T){d.state==="closed"||d.state==="closing"?(d.state="opening",T&&(d.used=!0),A("doorOpen",{x:d.x+.5,y:un(l.W,d.x,d.z),z:d.z+.5}),d.secret&&!d.found&&(d.found=!0)):T&&d.state==="open"&&(d.state="closing",A("doorClose",{x:d.x+.5,y:un(l.W,d.x,d.z),z:d.z+.5}))}function Ze(d,T,B,ie,Z){return d+B>ie&&d-B<ie+1&&T+B>Z&&T-B<Z+1}function Ve(d){if(Ze(l.p.x,l.p.z,hn.r,d.x,d.z))return!0;for(var T=0;T<l.ents.length;T++){var B=l.ents[T];if(B.mob&&!B.barrel&&B.state!=="dead"&&B.state!=="die"&&Ze(B.x,B.z,B.radius,d.x,d.z))return!0}return!1}function be(d){for(var T in l.doors){var B=l.doors[T];if(B.state==="opening")B.open+=d*1.6,B.open>=1&&(B.open=1,B.state="open",B.timer=B.secret?9999:4);else if(B.state==="open")B.timer-=d,B.timer<=0&&!Ve(B)&&(B.state="closing",A("doorClose",{x:B.x+.5,y:0,z:B.z+.5}));else if(B.state==="closing"){if(Ve(B)){B.state="opening";continue}B.open-=d*1.6,B.open<=0&&(B.open=0,B.state="closed")}}}function Ce(d,T,B){return Ze(d.x,d.z,(d.radius||hn.r)*.7,T,B)&&Math.abs(d.y-un(l.W,T,B))<.05}function nt(d){var T=l.p;od(l.W,d,function(B,ie){if(Ce(T,B,ie))return!0;for(var Z=0;Z<l.ents.length;Z++){var ee=l.ents[Z];if(ee.mob&&tt(ee)&&Ce(ee,B,ie))return!0}return!1},function(B,ie){A(ie==="start"?"doorOpen":"doorClose",{x:B.x+.5,y:B.pos,z:B.z+.5})}),l.W.lifts.forEach(function(B){B.moved&&[T].concat(l.ents).forEach(function(ie){(ie===T||ie.mob&&tt(ie))&&Ze(ie.x,ie.z,(ie.radius||hn.r)*.7,B.x,B.z)&&Math.abs(ie.y-(B.pos-B.moved))<.06&&(ie.y=B.pos)})})}function ot(){for(var d=l.p,T=Math.cos(d.ang),B=Math.sin(d.ang),ie=.4;ie<=1.3;ie+=.3){var Z=Math.floor(d.x+T*ie),ee=Math.floor(d.z+B*ie),pe=ri(l.W,Z,ee);if(pe!==0){if(pi[pe]){var ge=Xi(l.W,Z,ee);if(ge.open>=.9&&ge.state==="open"&&Math.floor(d.x)===Z&&Math.floor(d.z)===ee)continue;return{kind:"door",door:ge}}return pe===9?{kind:"switch",x:Z,z:ee}:pe===12?{kind:"lever",x:Z,z:ee}:null}}return null}function _t(){if(!l||l.p.dead||l.exitT>=0)return null;var d=ot();if(!d)return null;if(d.kind==="switch")return{verb:"EXIT LEVEL",color:"#58e068"};if(d.kind==="lever")return{verb:"PULL THE SWITCH",color:"#ffd23e"};var T=d.door;return T.secret&&!T.found?null:T.locked&&!l.p.keys[T.locked]?{need:T.locked,text:T.locked.toUpperCase()+" KEYCARD NEEDED",color:T.locked==="red"?"#ff5a3a":"#6a98ff"}:T.state==="closed"||T.state==="closing"?{verb:"OPEN",color:"#e8e0c8"}:null}function V(){var d=ot();if(d){var T=l.p;if(d.kind==="door"){var B=d.door;B.sealed?(A("locked"),x("SEALED. SURVIVE!","#ff9a28")):B.locked&&!T.keys[B.locked]?(A("locked"),x("YOU NEED THE "+B.locked.toUpperCase()+" KEYCARD."),M("key")):qe(B,!0)}else d.kind==="lever"?(l.W.cells[d.z*l.mw+d.x]=13,A("switchFlip"),Xe("use",d.x+","+d.z)):d.kind==="switch"&&(l.W.cells[d.z*l.mw+d.x]=10,A("switchFlip"),b("LEVEL COMPLETE!","#58e068",2),l.exitT=.8)}}function mt(d){d.y=Vo(l.W,d.x,d.z,d.radius)}function Mt(d,T){var B=l.p,ie=_s[d.kind];d.animT+=T,d.st-=T,d.cool-=T,d.flashT-=T,d.target&&!tt(d.target)&&(d.target=null,d.cool=Math.min(d.cool,.4));var Z=d.target,ee=Z?Z.x:B.x,pe=Z?Z.z:B.z,ge=Z?Z.y+Z.h*.6:B.y+B.eyeH*.8;d.losT-=T,d.losT<=0&&(d.losT=.2+p()*.1,d.los=gr(l.W,d.x,d.y+d.h*.8,d.z,ee,ge,pe));var Te=ee-d.x,Ye=pe-d.z,et=Math.sqrt(Te*Te+Ye*Ye);if(Z&&(d.lostT=d.los?0:d.lostT+T,d.lostT>4)){d.target=null,d.lostT=0;return}if(d.state==="idle"){d.los&&et<9&&!B.dead&&fe(d);return}if(d.state==="pain"){d.st<=0&&(d.fleeNext?(d.fleeNext=!1,d.state="flee",d.st=v(.9,1.6),d.moveAng=Math.atan2(-Ye,-Te)+v(-.6,.6)):d.state="chase");return}if(d.state==="flee"){kr(l.W,d,Math.cos(d.moveAng)*d.speed*1.1*T,Math.sin(d.moveAng)*d.speed*1.1*T,d.radius,d.h,Yn)||(d.moveAng+=(p()<.5?1:-1)*Math.PI/2),mt(d),d.st<=0&&(d.state="chase",d.cool=0,d.retarget=0,A("impSight",d));return}if(d.state==="die"){d.st<=-.5&&(d.state="dead");return}if(d.state!=="dead"){if(d.state==="windup"){if(d.st<=0){if(d.state="chase",!Z&&B.dead)return;if(ie.melee&&et<1.9&&Math.abs(ge-(d.y+d.h*.5))<1.2){if(d.los){var gt=ie.attackDmg[0]+p()*(ie.attackDmg[1]-ie.attackDmg[0])|0;Z?at(Z,gt,d):le(gt,d),A("punch",d)}}else ie.ranged&&d.los&&K(d,d.kind==="knight",ee,ge,pe);d.cool=v(.9,1.9)}return}if(!(!Z&&B.dead)){d.detourT=(d.detourT||0)-T,d.pathT=(d.pathT||0)-T;var Dt=!Z&&Math.abs(B.y-d.y)>Yn,Et=!Z&&(!d.los||d.pathT>0||Dt)&&d.detourT<=0?Ne(d):null;if(d.retarget-=T,Et!==null)d.moveAng=Et;else if(d.retarget<=0){d.retarget=v(.35,.8);var cn=Math.atan2(Ye,Te);ie.ranged&&!ie.melee&&d.los&&et<7?(p()<.3&&(d.strafeSide=-d.strafeSide),d.moveAng=cn+d.strafeSide*v(1.1,1.8)):d.moveAng=cn+(et>2.2?v(-.7,.7):v(-.25,.25))}var tn=ie.melee?.95:1.6;if(et>tn){var Ut=d.x,mn=d.z,Zt=kr(l.W,d,Math.cos(d.moveAng)*d.speed*T,Math.sin(d.moveAng)*d.speed*T,d.radius,d.h,Yn);if(!Zt&&Et!==null){var C=Math.floor(d.x)+.5-d.x,z=Math.floor(d.z)+.5-d.z;kr(l.W,d,C*Math.min(1,T*6),z*Math.min(1,T*6),d.radius,d.h,Yn)}else if(!Zt){var se=Math.floor(d.x+Math.cos(d.moveAng)*.7),te=Math.floor(d.z+Math.sin(d.moveAng)*.7),Q=Xi(l.W,se,te);Q&&!Q.locked&&!Q.secret&&!Q.sealed&&Q.state==="closed"&&qe(Q,!1),d.moveAng+=(p()<.5?1:-1)*Math.PI/2*v(.6,1.2),d.retarget=v(.25,.5),d.pathT=.8}for(var we=0;we<l.ents.length;we++){var Le=l.ents[we];if(!(Le===d||!Le.mob||Le.state==="dead"||Le.state==="die"||Le.gone)){var Ie=d.x-Le.x,Oe=d.z-Le.z,Ge=Ie*Ie+Oe*Oe,ct=d.radius+(Le.radius||.3);if(Ge>1e-4&&Ge<ct*ct&&Math.abs(Le.y-d.y)<.5){var ut=Math.sqrt(Ge),Be=(ct-ut)*.5;Br(l.W,d.x+Ie/ut*Be,d.z+Oe/ut*Be,d.radius,d.y,d.h,Yn).blocked||(d.x+=Ie/ut*Be,d.z+=Oe/ut*Be)}}}var Pt=g(d.x,d.z,Ut,mn),Qt=d.speed*T*.3;d.stuckT=Pt<Qt*Qt?(d.stuckT||0)+T:0,d.stuckT>.4&&(d.stuckT=0,d.detourT=v(.5,.9),d.moveAng+=(p()<.5?1:-1)*Math.PI/2,d.retarget=d.detourT),mt(d)}d.cool<=0&&d.los&&(ie.melee&&et<1.4&&Math.abs(ge-(d.y+d.h*.5))<1.2?(d.state="windup",d.st=.35):ie.ranged&&et>1.2&&et<14&&p()<T*1.4&&(d.state="windup",d.st=.45))}}}function H(d){var T=nn.default.recall(n);d.mem=T,d.tune=nn.default.tuning(T);var B=N();d.sparring=!!(B&&B.sparring),d.allowed=B&&B.moves?B.moves:null,d.hp=d.maxHp=Math.round(_s.riley.hp*d.tune.hpScale*(B&&B.hpScale||1)),d.profile=nn.default.newProfile(),d.phase=1,d.cools={volley:1,lead:3,summon:8,shield:5,melee:0},d.move=null,d.moveT=0,d.shieldT=0,d.talkT=0,d.flankSide=1,d.attack=null,d.settled=!1}var E=null;function N(){return E&&E.boss}function U(d){return!!d&&d.state!=="idle"&&tt(d)}function F(d,T,B){return!T||B&&d.talkT>0?!1:(x("RILEY: "+T,"#6fe0ec",4.5),A("rileyTalk"),d.talkT=3.5,!0)}function G(d){var T=d.mem,B=l.L.boss;if(d.sparring&&B&&B.intro&&!(T.fights>0)){F(d,B.intro);return}F(d,nn.default.line("intro",d.profile,{memory:T.fights>0?T:null})),T.ease>0?F(d,nn.default.line("ease",d.profile)):d.tune.practised&&F(d,nn.default.line("studied",d.profile,{wins:T.wins}))}function J(d,T){d.settled||(d.settled=!0,nn.default.save(n,nn.default.settle(d.mem,d.profile,T)))}function W(){var d=0;return l.ents.forEach(function(T){T.summoned&&tt(T)&&d++}),d}function Y(d){for(var T=0,B=0;B<30&&T<2;B++){var ie=p()*Math.PI*2,Z=v(1.5,3.5),ee=d.x+Math.cos(ie)*Z,pe=d.z+Math.sin(ie)*Z,ge=Vo(l.W,ee,pe,.3);if(!(Br(l.W,ee,pe,.4,ge,.85,0).blocked||ae(ee,pe)<3||!gr(l.W,d.x,d.y+.5,d.z,ee,ge+.5,pe))){var Te=w("imp",ee,pe,ge);Te.summoned=!0,Te.state="chase",l.ents.push(Te),l.stats.totalKills++,_("fx","summon",ee,ge+.4,pe),T++}}T&&(F(d,nn.default.line("summon",d.profile)),A("rileySight",d)),d.cools.summon=18*d.tune.coolScale}function ue(d,T,B,ie){var Z={los:d.los,dist:T,phase:d.phase,cool:d.cools,impsAlive:W(),playerWeapon:l.p.weapon},ee=nn.default.legalMoves(Z);if(d.allowed){var pe=ee.filter(function(Ye){return d.allowed.indexOf(Ye)>=0});pe.length&&(ee=pe)}var ge=nn.default.choose(ee,d.profile,Z,t);d.move=ge.move,F(d,nn.default.insight(d.profile,ge.why),!0);var Te=d.profile;switch(ge.move){case"volley":case"lead":d.state="windup",d.attack=ge.move,d.st=ge.move==="volley"?.55:.4,d.moveT=d.st+.2;break;case"backoff":d.moveT=1,d.moveAng=Math.atan2(-ie,-B)+v(-.5,.5);break;case"flank":d.flankSide=nn.default.strafeHabit(Te)>.3?nn.default.strafeSide(Te):p()<.5?1:-1,d.moveT=1.3;break;case"close":d.moveT=1.2;break;case"seek":d.moveT=.8;break;case"summon":Y(d),d.moveT=.8;break;case"shield":d.shieldT=1.6,d.moveT=1.2,d.cools.shield=8*d.tune.coolScale,A("rileyShield",d);break}}function _e(d,T){var B=l.p,ie=d.tune,Z=ie.coolScale*(d.phase>=3?.7:1);if(d.attack==="melee"){T<1.9&&d.los&&(le(v(10,20)*ie.dmgScale|0,d),A("punch",d)),d.cools.melee=1.2;return}if(d.los){var ee=B.y+B.eyeH*.8,pe=Math.atan2(B.z-d.z,B.x-d.x);if(d.attack==="volley"){for(var ge=-1;ge<=1;ge++){var Te=pe+ge*.2;K(d,!0,d.x+Math.cos(Te)*T,ee,d.z+Math.sin(Te)*T,6.5,v(8,16)*ie.dmgScale)}d.cools.volley=v(1.6,2.4)*Z}else if(d.attack==="lead"){var Ye=9,et=T/Ye;K(d,!0,B.x+l.input.vx*et,ee,B.z+l.input.vz*et,Ye,v(10,18)*ie.dmgScale),d.cools.lead=v(1.8,2.8)*Z}}}function me(d,T){var B=l.p,ie=d.profile;d.animT+=T,d.st-=T,d.talkT-=T,d.shieldT-=T,d.moveT-=T,d.flashT-=T;for(var Z in d.cools)d.cools[Z]-=T;d.losT-=T,d.losT<=0&&(d.losT=.15,d.los=gr(l.W,d.x,d.y+d.h*.85,d.z,B.x,oe(),B.z));var ee=B.x-d.x,pe=B.z-d.z,ge=Math.sqrt(ee*ee+pe*pe);if(d.state==="idle"){d.los&&!B.dead&&(fe(d),G(d));return}if(d.state==="die"){d.st<=-1.2&&(d.state="dead");return}if(!(d.state==="dead"||B.dead)){if(nn.default.observe(ie,{dt:T,los:d.los,dist:ge,strafe:l.input.strafe,moving:l.input.moving}),d.state==="pain"){d.st<=0&&(d.state="chase");return}if(d.state==="windup"){d.st<=0&&(d.state="chase",_e(d,ge));return}if(ge<1.3&&d.los&&d.cools.melee<=0){d.state="windup",d.attack="melee",d.st=.3;return}if(!(d.moveT<=0&&(ue(d,ge,ee,pe),d.state==="windup"))){var Te=Math.atan2(pe,ee),Ye=null;switch(d.move){case"backoff":Ye=d.moveAng;break;case"close":Ye=Te;break;case"flank":case"shield":Ye=Te+d.flankSide*1.35;break;case"seek":Ye=Ne(d),Ye===null&&(Ye=Te);break}if(Ye!==null){var et=d.speed*(d.phase>=3?1.25:1)*T;kr(l.W,d,Math.cos(Ye)*et,Math.sin(Ye)*et,d.radius,d.h,Yn)||(d.flankSide=-d.flankSide,d.moveAng+=Math.PI/2),mt(d)}}}}function ye(d,T){if(d.shieldT>0)return _("fx","spark",d.x,d.y+.5,d.z),A("rileyShield",d),!0;if(l.firing&&d.lastShot!==l.shotId&&(d.lastShot=l.shotId,d.profile.hits++),T&&!T.barrel&&T.kind==="imp"){var B=T.target===d?"impsTurned":"friendlyFire";d.profile.said[B]||(d.profile.said[B]=!0,F(d,nn.default.line(B,d.profile)))}return!1}function Ee(d){if(d.hp<=0){A("rileyDerez",d),F(d,nn.default.line("defeated",d.profile)),d.sparring&&x("RILEY: THAT WAS JUST PRACTICE. I'LL REMEMBER HOW YOU FIGHT.","#6fe0ec",6),J(d,!0),l.exitT=d.sparring?6.5:5;return}d.sparring||(d.phase<3&&d.hp<d.maxHp*.33?(d.phase=3,F(d,nn.default.line("phase3",d.profile))):d.phase<2&&d.hp<d.maxHp*.66&&(d.phase=2,F(d,nn.default.line("phase2",d.profile)),Y(d)))}function ze(d){for(var T=[],B=d[1];B<=d[3];B++)for(var ie=d[0];ie<=d[2];ie++)ie>=0&&B>=0&&ie<l.mw&&B<l.mh&&T.push(B*l.mw+ie);return T}function Xe(d,T){(l.L.events||[]).forEach(function(B,ie){if(!l.fired[ie]){var Z=B.when||{},ee=d==="use"&&Z.use&&Z.use[0]+","+Z.use[1]===T||d==="pickup"&&Z.pickup===T||d==="cleared"&&Z.cleared===T||d==="start"&&Z.start;ee&&q(B,ie)}})}function q(d,T){l.fired[T]=!0,Se(d.do||[])}function Se(d){d.forEach(function(T){if(T.after){l.timers.push({t:T.after,acts:T.do||[]});return}var B=T.raise||T.lower;B&&(sd(l.W,ze(B),T.to,T.speed),A("doorOpen",{x:B[0]+.5,y:0,z:B[1]+.5})),T.lava&&ze(T.lava).forEach(function(ie){l.W.lava[ie]=T.on?1:0}),T.seal&&T.seal.forEach(function(ie){var Z=l.doors[ie];Z&&(Z.sealed=!0,Z.state!=="closed"&&(Z.state="closing"))}),T.open&&T.open.forEach(function(ie){var Z=l.doors[ie];Z&&(Z.sealed=!1,qe(Z,!1))}),T.spawn&&T.spawn.forEach(function(ie){var Z=un(l.W,ie.x,ie.z),ee=w(ie.kind,ie.x+.5,ie.z+.5,Z);ee.state="chase",ee.wave=T.wave||null,l.ents.push(ee),l.stats.totalKills++,_("fx","summon",ee.x,Z+.4,ee.z)}),T.wave&&(l.waves[T.wave]=!0),T.light&&(l.lightsOff[T.light]=T.on===!1),T.say&&(x("RILEY: "+T.say,"#6fe0ec",Math.max(4.5,T.say.length/14)),A("rileyTalk")),T.notice&&b(T.notice,"#ff9a28",2.5),T.shake&&R(T.shake)})}function de(d){for(var T=l.p,B=l.L.events||[],ie=l.timers.length-1;ie>=0;ie--)if((l.timers[ie].t-=d)<=0){var Z=l.timers.splice(ie,1)[0];Se(Z.acts)}for(var ee=0;ee<B.length;ee++){var pe=B[ee].when||{};if(!(l.fired[ee]||!pe.enter)){var ge=pe.enter;T.x>=ge[0]&&T.x<=ge[2]+1&&T.z>=ge[1]&&T.z<=ge[3]+1&&q(B[ee],ee)}}for(var Te in l.waves)l.waves[Te]&&(l.ents.some(function(et){return et.wave===Te&&tt(et)})||(l.waves[Te]=!1,Xe("cleared",Te)));if(l.lavaT-=d,l.lavaT<=0){l.lavaT=.5;var Ye=Math.floor(T.z)*l.mw+Math.floor(T.x);!T.dead&&l.W.lava[Ye]&&T.onGround&&(le(6,{x:T.x,z:T.z,kind:"lava"}),M("lava")),l.ents.forEach(function(et){et.mob&&!et.barrel&&tt(et)&&l.W.lava[Math.floor(et.z)*l.mw+Math.floor(et.x)]&&at(et,8)})}}function De(){for(var d=l.p,T=oe(),B=12,ie=l.W,Z=Math.floor(d.x),ee=Math.floor(d.z),pe=Math.max(0,ee-B);pe<=Math.min(l.mh-1,ee+B);pe++)for(var ge=Math.max(0,Z-B);ge<=Math.min(l.mw-1,Z+B);ge++){var Te=pe*l.mw+ge;l.seen[Te]||mr(ie,ge,pe)||gr(ie,d.x,T,d.z,ge+.5,un(ie,ge,pe)+.4,pe+.5)&&(l.seen[Te]=1,Sa(ie,ge,pe).forEach(function(Ye){ie.cells[Ye.i]!==0&&(l.seen[Ye.i]=1)}))}}function Fe(){De();var d=l.p,T=oe();function B(ge,Te){return g(ge.x,ge.z,d.x,d.z)<Te*Te&&gr(l.W,d.x,T,d.z,ge.x,(ge.y||0)+(ge.h||.3)*.6,ge.z)}for(var ie=0;ie<l.ents.length;ie++){var Z=l.ents[ie];if(Z.kind==="pickup"&&!Z.spotted&&(Z.item==="r"||Z.item==="u")&&B(Z,14)&&(Z.spotted=!0),Z.mob&&!Z.barrel&&tt(Z)&&hd["meet_"+Z.kind]&&!r.seenTips["meet_"+Z.kind]&&B(Z,11)&&M("meet_"+Z.kind),Z.barrel&&!Z.gone&&!r.seenTips.barrel&&B(Z,10))for(var ee=0;ee<l.ents.length;ee++){var pe=l.ents[ee];if(pe.mob&&!pe.barrel&&tt(pe)&&pe.state!=="idle"&&g(pe.x,pe.z,Z.x,Z.z)<4){M("barrel");break}}Z.kind==="torch"&&u===0&&l.time>20&&B(Z,5)&&M("torches")}l.W.lifts.forEach(function(ge){g(ge.x+.5,ge.z+.5,d.x,d.z)<16&&M("lift")})}function xe(){var d=l.info,T=l.p,B,ie=d.keys.blue&&!T.keys.blue?"u":d.keys.red&&!T.keys.red?"r":null;if(ie){for(var Z=0;Z<l.ents.length;Z++){var ee=l.ents[Z];if(ee.kind==="pickup"&&ee.item===ie&&!ee.gone)return ee.spotted?{x:ee.x,y:ee.y+.3,z:ee.z}:null}return null}for(B in l.doors){var pe=l.doors[B];if(pe.locked&&!pe.used&&l.seen[pe.z*l.mw+pe.x])return{x:pe.x+.5,y:un(l.W,pe.x,pe.z)+.8,z:pe.z+.5}}var ge=l.exitCell;if(!d.boss&&ge&&l.seen[ge.z*l.mw+ge.x])return{x:ge.x+.5,y:.8,z:ge.z+.5};var Te=l.boss;return d.boss&&Te&&tt(Te)&&l.seen[Math.floor(Te.z)*l.mw+Math.floor(Te.x)]?{x:Te.x,y:Te.y+Te.h+.3,z:Te.z}:null}function $e(d){var T=l.p,B=ud[d.item],ie=m().ammo,Z=null;switch(d.item){case"h":T.hp>=100?Z="HEALTH":T.hp=Math.min(100,T.hp+10);break;case"+":T.hp>=100?Z="HEALTH":T.hp=Math.min(100,T.hp+25);break;case"A":T.armor>=100?Z="ARMOR":(T.armor=100,T.grinT=1);break;case"b":T.ammo.bullets>=200?Z="BULLETS":T.ammo.bullets=Math.min(200,T.ammo.bullets+10*ie);break;case"a":T.ammo.shells>=50?Z="SHELLS":T.ammo.shells=Math.min(50,T.ammo.shells+4*ie);break;case"2":T.weapons.shotgun=!0,T.ammo.shells=Math.min(50,T.ammo.shells+8*ie),T.grinT=1.2,T.weapon!=="shotgun"&&$("shotgun",!0),b("SHOTGUN!  PRESS 3","#ffd23e",2.5),M("weapons");break;case"r":case"u":var ee=d.item==="r"?"red":"blue";T.keys[ee]=!0,T.grinT=1,b(ee.toUpperCase()+" KEYCARD",ee==="red"?"#ff5a3a":"#6a98ff",2.5),M("key");break;case"P":T.hp=Math.min(200,T.hp+100),T.grinT=1.2;break}if(Z){d.touching=!0,x(Z+" ALREADY FULL","#8a8478",1.5);return}d.gone=!0,l.stats.items++,Xe("pickup",d.item),T.bonusFlash=Math.min(.35,T.bonusFlash+.22),A(B.snd),_("fx","pickup",d.x,d.y+.3,d.z,{item:d.item}),x(B.msg),T.autoFist&&(d.item==="b"||d.item==="a")&&(T.autoFist=!1,$(X(T),!0))}function Je(d){var T=l.p;if(T.dead){T.deadT+=d,T.eyeH=Math.max(.15,T.eyeH-d*1.2);return}var B=!!a.KeyC;if(!B&&T.crouch){var ie=Br(l.W,T.x,T.z,hn.r,T.y,hn.h,0);ie.blocked||(T.crouch=!1)}else T.crouch=B;var Z=T.crouch?hn.hCrouch:hn.h,ee=T.crouch?hn.eyeCrouch:hn.eye;T.eyeH+=(ee-T.eyeH)*Math.min(1,d*14);var pe=a.ShiftLeft||a.ShiftRight,ge=0,Te=0;(a.KeyW||a.ArrowUp)&&(ge+=1),(a.KeyS||a.ArrowDown)&&(ge-=1),a.KeyA&&(Te-=1),a.KeyD&&(Te+=1),a.ArrowLeft&&(T.ang-=2.6*d),a.ArrowRight&&(T.ang+=2.6*d),a.PageUp&&(T.pitch+=1.6*d),a.PageDown&&(T.pitch-=1.6*d),T.pitch=y(T.pitch,-1.3,1.3),ge&&Te&&(ge*=.7071,Te*=.7071);var Ye=T.crouch?hn.walk*.5:pe?hn.run:hn.walk,et=Math.cos(T.ang),gt=Math.sin(T.ang),Dt=(et*ge-gt*Te)*Ye,Et=(gt*ge+et*Te)*Ye,cn=T.onGround?14:3;T.vx+=(Dt-T.vx)*Math.min(1,d*cn),T.vz+=(Et-T.vz)*Math.min(1,d*cn),a.Space&&!T.jumpHeld&&T.onGround&&!T.crouch&&(T.vy=hn.jumpV,T.onGround=!1,l.jumped=!0,A("jump")),T.jumpHeld=!!a.Space;var tn=T.x,Ut=T.z,mn=T.onGround?Yn:Math.max(0,Math.min(Ru,.12));kr(l.W,T,T.vx*d,T.vz*d,hn.r,Z,mn),pe&&(ge||Te)&&(l.ranT+=d);var Zt=Vo(l.W,T.x,T.z,hn.r),C=Br(l.W,T.x,T.z,hn.r,Math.max(T.y,Zt),Z,10).ceil;T.onGround&&Zt<T.y-.02&&Zt>T.y-Yn?T.y=Zt:T.onGround&&Zt<T.y&&(T.onGround=!1),T.onGround&&Zt>T.y&&(T.y=Zt),T.onGround||(T.vy-=hn.gravity*d,T.y+=T.vy*d,C!==void 0&&T.y+Z>C&&(T.y=C-Z,T.vy>0&&(T.vy=0)),T.y<=Zt&&(T.vy<-5&&(R(1.2),T.landT=.25),T.vy<-2&&A("land"),T.y=Zt,T.vy=0,T.onGround=!0)),l.input.strafe=Te,l.input.moving=T.x!==tn||T.z!==Ut,l.input.vx=(T.x-tn)/d,l.input.vz=(T.z-Ut)/d,u===0&&(l.time>14&&l.ranT<.3&&M("run"),l.time>25&&!l.jumped&&M("jump"),l.time>40&&!l.usedMap&&M("map"),l.time>70&&!l.stats.secrets&&M("secret")),a.KeyE?T.usedHeld||(T.usedHeld=!0,V()):T.usedHeld=!1,T.nextWeapon&&T.raiseT<=0&&!(T.lowerT>0)&&(T.lowerT=.15),T.lowerT>0&&(T.lowerT-=d,T.lowerT<=0&&(T.weapon=T.nextWeapon||T.weapon,T.nextWeapon=null,T.raiseT=.15)),T.raiseT>0&&(T.raiseT-=d),T.cool-=d,T.fireT+=d;var z=ba[T.weapon];if(o&&T.cool<=0&&T.raiseT<=0&&T.lowerT<=0&&!T.nextWeapon&&l.exitT<0)if(z.ammo&&T.ammo[z.ammo]<=0){A("noAmmo");var se=X(T);x("OUT OF "+ld[z.ammo]+"!"),$(se,!0)&&se==="fist"&&(T.autoFist=!0),M("lowAmmo"),T.cool=.3}else{if(z.ammo&&T.ammo[z.ammo]--,T.cool=z.rate,T.fireT=0,A(T.weapon==="fist"?"punch":T.weapon),T.weapon==="shotgun"&&A("pump"),z.melee||(R(z.shake),_("fx","muzzle",T.x+Math.cos(T.ang)*.4,oe()-.1,T.z+Math.sin(T.ang)*.4,{weapon:T.weapon})),U(l.boss)&&nn.default.noteShot(l.boss.profile,T.weapon,ae(l.boss.x,l.boss.z)),l.shotId++,l.firing=!0,z.melee)Pe(T.ang,T.pitch,z.dmgMin,z.dmgMax,!0,z.knock);else for(var te=0;te<z.pellets;te++)Pe(T.ang+(p()-.5)*2*z.spread,T.pitch+(p()-.5)*z.spread,z.dmgMin,z.dmgMax,!1,z.knock);l.firing=!1,z.melee||he(T.x,T.z,14)}for(var Q=0;Q<l.ents.length;Q++){var we=l.ents[Q];we.kind!=="pickup"||we.gone||(g(we.x,we.z,T.x,T.z)<.45&&Math.abs(we.y-T.y)<.6?we.touching||$e(we):we.touching=!1)}for(var Le=l.L.triggers||[],Ie=f[u]||(f[u]={}),Oe=0;Oe<Le.length;Oe++){var Ge=Le[Oe].box;Ie[Oe]||T.x<Ge[0]||T.x>Ge[2]+1||T.z<Ge[1]||T.z>Ge[3]+1||(Ie[Oe]=!0,x("RILEY: "+Le[Oe].say,"#6fe0ec",Math.max(4.5,Le[Oe].say.length/14)),A("rileyTalk"))}var ct=Math.floor(T.x),ut=Math.floor(T.z);l.secrets.forEach(function(Be){!Be.found&&Be.x===ct&&Be.z===ut&&(Be.found=!0,l.stats.secrets++,A("secret"),b("SECRET AREA FOUND!","#ffd23e",2.5))})}function kt(d){if(!(c!=="game"||!l)){var T=l.p;l.events.length=0,l.time+=d,T.dmgFlash=Math.max(0,T.dmgFlash-d*.8),T.bonusFlash=Math.max(0,T.bonusFlash-d*1.5),T.painT=Math.max(0,T.painT-d),T.grinT=Math.max(0,T.grinT-d),T.landT=Math.max(0,T.landT-d),l.shake=Math.max(0,l.shake-d*14);for(var B=0;B<l.msgs.length;B++)l.msgs[B].t-=d;for(;l.msgs.length&&l.msgs[0].t<=0;)l.msgs.shift();l.notice&&(l.notice.t-=d)<=0&&(l.notice=null),l.hitT-=d,l.killT-=d,l.blockT-=d;for(var ie=l.hurtDirs.length-1;ie>=0;ie--)(l.hurtDirs[ie].t-=d*.9)<=0&&l.hurtDirs.splice(ie,1);if(P(d),l.spotT-=d,l.spotT<=0&&(l.spotT=.3,Fe()),l.exitT>=0&&(l.exitT-=d,l.exitT<=0)){h={name:l.L.name,time:l.time,par:l.L.par,kills:l.stats.kills,totalKills:l.stats.totalKills,items:l.stats.items,totalItems:l.stats.totalItems,secrets:l.stats.secrets,totalSecrets:l.stats.totalSecrets},s(u,h),c="inter";return}be(d),nt(d),ad(l.W,d),l.W.movers.forEach(function(Dt){Dt.moved&&[T].concat(l.ents).forEach(function(Et){if(!(Et!==T&&!(Et.mob&&tt(Et))&&Et.kind!=="pickup")){var cn=Math.floor(Et.z)*l.mw+Math.floor(Et.x);Dt.cells.indexOf(cn)>=0&&Math.abs(Et.y-(Dt.pos-Dt.moved))<.08&&(Et.y=Dt.pos)}})}),de(d),l.flowT-=d,l.flowT<=0&&(l.flowT=.25,ve()),Je(d);for(var Z=l.ents.length-1;Z>=0;Z--){var ee=l.ents[Z];if(ee.gone){l.ents.splice(Z,1);continue}if(ee.kind==="torch"){ee.animT+=d;continue}if(ee.kind==="pickup"){ee.bob+=d;continue}if(ee.kind==="proj"){ee.animT+=d;for(var pe=3,ge=!1,Te=0;Te<pe&&!ge;Te++){ee.x+=ee.vx*d/pe,ee.y+=ee.vy*d/pe,ee.z+=ee.vz*d/pe;var Ye=Math.floor(ee.x),et=Math.floor(ee.z),gt=mr(l.W,Ye,et)||ee.y<un(l.W,Ye,et)||ee.y>Li(l.W,Ye,et)?"wall":It(ee);!gt&&!T.dead&&g(ee.x,ee.z,T.x,T.z)<.2&&ee.y>T.y-.1&&ee.y<T.y+(T.crouch?hn.hCrouch:hn.h)+.1&&(gt="player"),gt&&(ge=!0,gt==="player"?(le(ee.dmg|0,{x:ee.x-ee.vx,z:ee.z-ee.vz,kind:ee.owner?ee.owner.kind:"imp"}),A("fireExplode")):(gt!=="wall"&&at(gt,ee.dmg|0,ee.owner),A("fireExplode",ee)),_("fx",ee.green?"greenBurst":"fireBurst",ee.x,ee.y,ee.z),l.ents.splice(Z,1))}continue}if(ee.barrel){ee.state==="boom"&&(ee.st-=d,ee.st<=0&&rt(ee));continue}ee.kind==="riley"?me(ee,d):ee.mob&&Mt(ee,d)}}}function It(d){for(var T=0;T<l.ents.length;T++){var B=l.ents[T];if(!(!B.mob||B===d.owner||!tt(B))&&!(!B.barrel&&d.owner&&B.kind===d.owner.kind)){var ie=B.radius+.1;if(g(d.x,d.z,B.x,B.z)<ie*ie&&d.y>=B.y-.1&&d.y<=B.y+B.h+.1)return B}}return null}function Xn(){var d=l.p,T=Math.cos(d.pitch),B=Math.cos(d.ang)*T,ie=Math.sin(d.ang)*T,Z=Math.sin(d.pitch),ee=Wo(l.W,d.x,oe(),d.z,B,Z,ie,40),pe=null,ge=ee.dist;return l.ents.forEach(function(Te){if(!(!Te.mob||!tt(Te))){var Ye=He(d.x,oe(),d.z,B,Z,ie,Te);Ye!==null&&Ye<ge&&(pe=Te,ge=Ye)}}),pe}var Bn=!1;function Mu(){if(c==="inter"){if(!Bn){Bn=!0;return}Bn=!1,u+1>=e.length?c="victory":D(u+1,!0)}else c==="victory"?c="title":c==="game"&&l&&l.p.dead&&l.p.deadT>1.2&&S()}function Su(){return{floorAt:function(d,T){return mr(l.W,d,T)&&!(Xi(l.W,d,T)&&!Xi(l.W,d,T).locked)?null:un(l.W,d,T)},neighbours:function(d,T){var B=[],ie=un(l.W,d,T);return Sa(l.W,d,T).forEach(function(Z){var ee=ri(l.W,Z.x,Z.z);if(!(ee!==0&&!pi[ee])){var pe=Xi(l.W,Z.x,Z.z);if(!(pe&&pe.sealed)){var ge=un(l.W,Z.x,Z.z)-ie,Te=ge<=.02&&ge>=-.02?"walk":ge<0?"drop":ge<=Yn?"step":ge<=Ru?"jump":null;Te&&B.push({cx:Z.x,cz:Z.z,cost:Te==="jump"?2:1,kind:Te})}}}),B}}}return{keys:a,state:function(){return l},mode:function(){return c},setMode:function(d){c=d},interStats:function(){return h},levelIndex:function(){return u},levels:e,update:kt,startLevel:D,retryLevel:S,onEnter:Mu,setFire:function(d){o=!!d},switchWeapon:$,cycleWeapon:ne,quickSwitch:re,useTarget:ot,usePrompt:_t,useAction:V,objective:O,goalTarget:xe,aimTarget:Xn,hurtPlayer:le,walkGraph:Su,levelInfo:I,hasAmmo:k,settings:r,DIFFS:zr}}var pd=vs(fd(),1);var dd={name:"E1M2: THE FURNACE",floor:"slab",ceil:"ceilDark",par:300,playerAngle:-1.5707963,ceilHeight:2.5,map:["####################################","########HHHHHHHHHXHHHHHHHHHH########","########H..................H########","########H.h..t........t..+.H########","########H.....~~~~~~~~.....H########","########H..................H########","########H........b.........H########","%%%=%%%%H.....H......H.....HMMMMMMMM","%......%H.....H......H.....HM.....MM","%.i....%H.......a..a.......HM...iAMM","%......%H..................HM..r..MM","%......%HHHHHHHHHRHHHHHHHHHHM.....MM","%..i...%t.......t.t........tM......M","%......D.a................o.M....M.M","%..%%..%......~~~~~~~~......D....M.M","%......%...T..~~~~~~~~..T...M.MM.M.M","%......%......~~~HH~~~......M....M.M","%......%..i...~~~HH~~~...i..M....M.M","%......%......~~~~~~~~......M...g..M","%.%%...%......~~~~~~~~......M......M","%......%...T............T...M.MM...M","%....i.D..h.................D......M","%......%t.................btM......M","%...h..%.o..t..........t....M.g..+.M","%......%####............####M......M","%%S%%%%%####.......b....####MMMMMMMM","#...########.....p......############","#*Pa########............############","####################################","####################################"],heights:["000000000000000000000000000000000000","000000000000000000000000000000000000","000000000666222228222222666000000000","000000000666222222222222666000000000","000000000666220000000022666000000000","000000000666222222222222666000000000","000000000666422222222224666000000000","000000000666222222222222666000000000","033333300666222222222222666008888810","033333300666222222222222666008888810","033333300666222222222222666008888810","011111100000000000000000000008888810","011111102222222222222222222208888880","011111102222222222222222222201111170","011111102222220000000022222201111160","011111102222220000000022222201111150","011111102222220000000022222201111140","011111102222220000000022222201111130","011111102222220000000022222201111120","011111102222220000000022222201111110","011111102222222222222222222201111110","011111102222222222222222222201111110","011111102222222222222222222201111110","011111102222332222222233222201111110","011111100000448888888844000001111110","000000000000558888888855000000000000","011100000000668888888866000000000000","011100000000778888888877000000000000","000000000000000000000000000000000000","000000000000000000000000000000000000"],ceilings:["....................................","....................................",".........qqqqqqqqqqqqqqqqqq.........",".........qqqqqqqqqqqqqqqqqq.........",".........qqqqqqqqqqqqqqqqqq.........",".........qqqqqqqqqqqqqqqqqq.........",".........qqqqqqqqqqqqqqqqqq.........",".........qqqqqqqqqqqqqqqqqq.........",".eeeeee..qqqqqqqqqqqqqqqqqq..kkkkkk.",".eeeeee..qqqqqqqqqqqqqqqqqq..kkkkkk.",".eeeeee..qqqqqqqqqqqqqqqqqq..kkkkkk.",".eeeeee......................kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.....mmmmmmmmmmmm.....kkkkkk.","............mmmmmmmmmmmm............",".eee........mmmmmmmmmmmm............",".eee........mmmmmmmmmmmm............","....................................","...................................."],events:[{when:{use:[3,7]},do:[{notice:"THE FURNACE IS DRAINING!"},{shake:3},{say:"YOU DID IT! THE PIT'S DRAINING. THAT'S A SHORTCUT STRAIGHT TO THE RED DOOR."},{lava:[14,14,21,19],on:!1},{raise:[14,14,21,19],to:.5,speed:.25}]},{when:{enter:[12,5,23,9]},do:[{seal:["17,11"]},{notice:"SEALED IN!"},{shake:2},{say:"IT'S A TRAP! KEEP MOVING, USE THE PILLARS AND THE HIGH GROUND."},{after:2,do:[{wave:"forge1",spawn:[{kind:"imp",x:10,z:3},{kind:"imp",x:25,z:3},{kind:"gnasher",x:17,z:3}]}]}]},{when:{cleared:"forge1"},do:[{say:"ONE MORE WAVE. THEY ALWAYS SEND ONE MORE."},{after:1.5,do:[{wave:"forge2",spawn:[{kind:"gnasher",x:10,z:9},{kind:"gnasher",x:25,z:9},{kind:"imp",x:10,z:5},{kind:"imp",x:25,z:5}]}]}]},{when:{cleared:"forge2"},do:[{notice:"FORGE CLEARED!"},{open:["17,11"]},{say:"THAT WAS AWESOME. THE EXIT SWITCH IS BEHIND THE PLINTH. IT'S SINKING NOW."},{lower:[17,2,17,2],to:.5,speed:.6}]}],triggers:[{box:[14,24,21,27],say:"WELCOME TO THE FURNACE! SEE THE LAVA PIT? A SWITCH SOMEWHERE DRAINS IT. THE RED DOOR BEHIND IT LEADS OUT."},{box:[1,11,6,24],say:"DARK IN HERE. LISTEN FOR THE IMPS BEFORE YOU SEE THEM."},{box:[29,12,34,24],say:"THE RED KEYCARD IS UP ON THE TANKS. THE STAIRS ARE ON THE FAR WALL."}],lights:[{id:"pit",x:17.5,z:17,y:1.2,color:16738842,intensity:5,dist:14},{id:"forge",x:17.5,z:5,y:3,color:16730640,intensity:4,dist:14},{id:"tanks",x:31.5,z:16,y:3.5,color:6990079,intensity:2.5,dist:12},{id:"bunkerflicker",x:3.5,z:16,y:2.5,color:16760960,intensity:1.6,dist:8,flicker:!0}],darkZones:[[1,8,6,27]]};var I0={name:"E1M1: ASH GATES",floor:"slab",ceil:"ceilDark",par:240,playerAngle:0,ceilHeight:2.5,boss:{sparring:!0,hpScale:.4,moves:["volley","lead","flank","close","backoff","seek"],intro:"THERE YOU ARE! LET'S SPAR. I'LL WATCH HOW YOU FIGHT. READY?"},triggers:[{box:[2,25,8,30],say:"HI! I'M RILEY. I'M WAITING FOR YOU AT THE TOP. LOOK AROUND WITH THE MOUSE, MOVE WITH WASD."},{box:[7,26,9,28],say:"DOORS OPEN WITH E. GO ON, TRY IT."},{box:[15,23,28,29],say:"SEE THE SHOTGUN UP THERE? JUMP WITH SPACE."},{box:[14,20,28,22],say:"NICE VIEW. THE BLUE KEYCARD IS DOWN IN THE HALL. THE BLUE DOOR IS ACROSS FROM YOU."},{box:[2,17,5,21],say:"GOT IT? NOW THE BLUE DOOR. THE LIFT BEHIND IT BRINGS YOU UP TO ME."},{box:[20,11,28,15],say:"LAST STOP. GRAB WHAT YOU NEED. WHEN MY VISOR FLASHES WHITE, I'M ABOUT TO SHOOT. MOVE!"}],map:["##############################","##############.t...........t.#","##############...............#","##############....T..Y..T....#","##############....T.....T....#","##############.h...........h.#","##############...............#","##############....T.....T....#","##############.......a.......#","##############........t.t....#","#######################D######","####################..t.t....#","####################.........#","####################.....+...#","####################....A....#","####################...L.....#","#######################U######","##....................t.t...##","##.t......%%......%%........##","##u...g......i..............##","##.t.......h.....g..........##","##..........................##","####################D#########","###*Pa#########....t.t......##","####S##########.....i.....o.##","##b......######..........io.##","##.......######......h......##","##..p....D........2.........##","##.......######..o..........##","##.......######.t.........t.##","##...h...#####################","##############################"],heights:["000000000000000000000000000000","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","000000000000000000000000000000","000000000000000000008888888880","000000000000000000008888888880","000000000000000000008888888880","000000000000000000008888888880","000000000000000000008888888880","000000000000000000000000000000","000000000000000000000000000000","000000000000000000000000000000","000000000000000000000000000000","000000000001234444444444444400","000000000001234444444444444400","000000000000000000000000000000","000000000000000444444444444440","000000000000000444444444444440","000000000000000444444444444440","000000000000000446664444444440","000000000012344446664444444440","000000000000000446664444444440","000000000000000444444444444440","000000000000000000000000000000","000000000000000000000000000000"],ceilings:["..............................","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............................","....................iiiiiiiii.","....................iiiiiiiii.","....................iiiiiiiii.","....................iiiiiiiii.","....................iiiiiiiii.","..............................","..gggggggggggggggggggggggggg..","..gggggggggggggggggggggggggg..","..gggggggggggggggggggggggggg..","..gggggggggggggggggggggggggg..","..gggggggggggggggggggggggggg..","..............................","...............eeeeeeeeeeeeee.","...............eeeeeeeeeeeeee.","...............eeeeeeeeeeeeee.","...............eeeeeeeeeeeeee.",".........cccccceeeeeeeeeeeeee.","...............eeeeeeeeeeeeee.","...............eeeeeeeeeeeeee.","..............................",".............................."]},mi=[I0,dd].concat(pd.default.slice(2).map(function(i){return Object.assign({ceilHeight:2},i)}));function Lu(i){var e=i>>>0||1;return function(){e=e+1831565813|0;var t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var $d=0,fh=1,Qd=2;var so=1,ep=2,ta=3,ki=0,Mn=1,Wn=2,li=0,na=1,lr=2,dh=3,ph=4,tp=5;var ss=100,np=101,ip=102,rp=103,sp=104,ap=200,op=201,lp=202,cp=203,mh=204,gh=205,up=206,hp=207,fp=208,dp=209,pp=210,mp=211,gp=212,vp=213,xp=214,_l=0,yl=1,Ml=2,Os=3,Sl=4,bl=5,Tl=6,El=7,ql=0,_p=1,yp=2,Ti=0,ao=1,oo=2,lo=3,as=4,co=5,uo=6,ho=7,ih="attached",Mp="detached",vh=300,Pr=301,os=302,Xl=303,Yl=304,fo=306,oi=1e3,ai=1001,Us=1002,Xt=1003,Kl=1004;var ls=1005;var an=1006,ia=1007;var Ei=1008;var qn=1009,xh=1010,_h=1011,ra=1012,Zl=1013,wi=1014,Jn=1015,Sn=1016,Jl=1017,jl=1018,sa=1020,yh=35902,Mh=35899,Sh=1021,bh=1022,jn=1023,Oi=1026,Lr=1027,$l=1028,Ql=1029,Nr=1030,ec=1031;var tc=1033,po=33776,mo=33777,go=33778,vo=33779,nc=35840,ic=35841,rc=35842,sc=35843,ac=36196,oc=37492,lc=37496,cc=37488,uc=37489,xo=37490,hc=37491,fc=37808,dc=37809,pc=37810,mc=37811,gc=37812,vc=37813,xc=37814,_c=37815,yc=37816,Mc=37817,Sc=37818,bc=37819,Tc=37820,Ec=37821,wc=36492,Ac=36494,Rc=36495,Cc=36283,Ic=36284,_o=36285,Pc=36286,Lc=2200,Nc=2201,Sp=2202,Zr=2300,Jr=2301,gl=2302,rh=2303,Xr=2400,Yr=2401,Oa=2402,Dc=2500,bp=2501,Th=0,yo=1,aa=2,Tp=3200;var Mo=0,Ep=1,$n="",qt="srgb",Un="srgb-linear",Ua="linear",Lt="srgb";var vl=7680;var wp=519,Ap=512,Rp=513,Cp=514,Oc=515,Ip=516,Pp=517,Uc=518,Lp=519,Eh=35044,oa=35048;var wh="300 es",Mi=2e3,Fs=2001;function P0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function L0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Hs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Np(){let i=Hs("canvas");return i.style.display="block",i}var md={},Bs=null;function Fa(...i){let e="THREE."+i.shift();Bs?Bs("log",e,...i):console.log(e,...i)}function Dp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Qe(...i){i=Dp(i);let e="THREE."+i.shift();if(Bs)Bs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function lt(...i){i=Dp(i);let e="THREE."+i.shift();if(Bs)Bs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Kr(...i){let e=i.join(" ");e in md||(md[e]=!0,Qe(...i))}function Op(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var Up={[_l]:yl,[Ml]:Tl,[Sl]:El,[Os]:bl,[yl]:_l,[Tl]:Ml,[El]:Sl,[bl]:Os},bi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gd=1234567,Na=Math.PI/180,jr=180/Math.PI;function Si(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(An[i&255]+An[i>>8&255]+An[i>>16&255]+An[i>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[n&255]+An[n>>8&255]+An[n>>16&255]+An[n>>24&255]).toLowerCase()}function bt(i,e,t){return Math.max(e,Math.min(t,i))}function Ah(i,e){return(i%e+e)%e}function N0(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function D0(i,e,t){return i!==e?(t-i)/(e-i):0}function Da(i,e,t){return(1-t)*i+t*e}function O0(i,e,t,n){return Da(i,e,1-Math.exp(-t*n))}function U0(i,e=1){return e-Math.abs(Ah(i,e*2)-e)}function F0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function H0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function B0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function k0(i,e){return i+Math.random()*(e-i)}function z0(i){return i*(.5-Math.random())}function G0(i){i!==void 0&&(gd=i);let e=gd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function V0(i){return i*Na}function W0(i){return i*jr}function q0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function X0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Y0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function K0(i,e,t,n,r){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),u=s((e+n)/2),l=a((e+n)/2),h=s((e-n)/2),f=a((e-n)/2),p=s((n-e)/2),v=a((n-e)/2);switch(r){case"XYX":i.set(o*l,c*h,c*f,o*u);break;case"YZY":i.set(c*f,o*l,c*h,o*u);break;case"ZXZ":i.set(c*h,c*f,o*l,o*u);break;case"XZX":i.set(o*l,c*v,c*p,o*u);break;case"YXY":i.set(c*p,o*l,c*v,o*u);break;case"ZYZ":i.set(c*v,c*p,o*l,o*u);break;default:Qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function yi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Rh={DEG2RAD:Na,RAD2DEG:jr,generateUUID:Si,clamp:bt,euclideanModulo:Ah,mapLinear:N0,inverseLerp:D0,lerp:Da,damp:O0,pingpong:U0,smoothstep:F0,smootherstep:H0,randInt:B0,randFloat:k0,randFloatSpread:z0,seededRandom:G0,degToRad:V0,radToDeg:W0,isPowerOfTwo:q0,ceilPowerOfTwo:X0,floorPowerOfTwo:Y0,setQuaternionFromProperEuler:K0,normalize:Ft,denormalize:yi},Nh=class Nh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Nh.prototype.isVector2=!0;var it=Nh,Cn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],u=n[r+1],l=n[r+2],h=n[r+3],f=s[a+0],p=s[a+1],v=s[a+2],y=s[a+3];if(h!==y||c!==f||u!==p||l!==v){let g=c*f+u*p+l*v+h*y;g<0&&(f=-f,p=-p,v=-v,y=-y,g=-g);let m=1-o;if(g<.9995){let _=Math.acos(g),A=Math.sin(_);m=Math.sin(m*_)/A,o=Math.sin(o*_)/A,c=c*m+f*o,u=u*m+p*o,l=l*m+v*o,h=h*m+y*o}else{c=c*m+f*o,u=u*m+p*o,l=l*m+v*o,h=h*m+y*o;let _=1/Math.sqrt(c*c+u*u+l*l+h*h);c*=_,u*=_,l*=_,h*=_}}e[t]=c,e[t+1]=u,e[t+2]=l,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],c=n[r+1],u=n[r+2],l=n[r+3],h=s[a],f=s[a+1],p=s[a+2],v=s[a+3];return e[t]=o*v+l*h+c*p-u*f,e[t+1]=c*v+l*f+u*h-o*p,e[t+2]=u*v+l*p+o*f-c*h,e[t+3]=l*v-o*h-c*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(n/2),l=o(r/2),h=o(s/2),f=c(n/2),p=c(r/2),v=c(s/2);switch(a){case"XYZ":this._x=f*l*h+u*p*v,this._y=u*p*h-f*l*v,this._z=u*l*v+f*p*h,this._w=u*l*h-f*p*v;break;case"YXZ":this._x=f*l*h+u*p*v,this._y=u*p*h-f*l*v,this._z=u*l*v-f*p*h,this._w=u*l*h+f*p*v;break;case"ZXY":this._x=f*l*h-u*p*v,this._y=u*p*h+f*l*v,this._z=u*l*v+f*p*h,this._w=u*l*h-f*p*v;break;case"ZYX":this._x=f*l*h-u*p*v,this._y=u*p*h+f*l*v,this._z=u*l*v-f*p*h,this._w=u*l*h+f*p*v;break;case"YZX":this._x=f*l*h+u*p*v,this._y=u*p*h+f*l*v,this._z=u*l*v-f*p*h,this._w=u*l*h-f*p*v;break;case"XZY":this._x=f*l*h-u*p*v,this._y=u*p*h-f*l*v,this._z=u*l*v+f*p*h,this._w=u*l*h+f*p*v;break;default:Qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],u=t[2],l=t[6],h=t[10],f=n+o+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(l-c)*p,this._y=(s-u)*p,this._z=(a-r)*p}else if(n>o&&n>h){let p=2*Math.sqrt(1+n-o-h);this._w=(l-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+u)/p}else if(o>h){let p=2*Math.sqrt(1+o-n-h);this._w=(s-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+l)/p}else{let p=2*Math.sqrt(1+h-n-o);this._w=(a-r)/p,this._x=(s+u)/p,this._y=(c+l)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,u=t._z,l=t._w;return this._x=n*l+a*o+r*u-s*c,this._y=r*l+a*c+s*o-n*u,this._z=s*l+a*u+n*c-r*o,this._w=a*l-n*o-r*c-s*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){let u=Math.acos(o),l=Math.sin(u);c=Math.sin(c*u)/l,t=Math.sin(t*u)/l,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Dh=class Dh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*r-o*n),l=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+c*u+a*h-o*l,this.y=n+c*l+o*u-s*h,this.z=r+c*h+s*l-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Nu.copy(this).projectOnVector(e),this.sub(Nu)}reflect(e){return this.sub(Nu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Dh.prototype.isVector3=!0;var j=Dh,Nu=new j,vd=new Cn,Oh=class Oh{constructor(e,t,n,r,s,a,o,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,u)}set(e,t,n,r,s,a,o,c,u){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=s,l[5]=c,l[6]=n,l[7]=a,l[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],l=n[4],h=n[7],f=n[2],p=n[5],v=n[8],y=r[0],g=r[3],m=r[6],_=r[1],A=r[4],w=r[7],I=r[2],L=r[5],D=r[8];return s[0]=a*y+o*_+c*I,s[3]=a*g+o*A+c*L,s[6]=a*m+o*w+c*D,s[1]=u*y+l*_+h*I,s[4]=u*g+l*A+h*L,s[7]=u*m+l*w+h*D,s[2]=f*y+p*_+v*I,s[5]=f*g+p*A+v*L,s[8]=f*m+p*w+v*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],l=e[8];return t*a*l-t*o*u-n*s*l+n*o*c+r*s*u-r*a*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],l=e[8],h=l*a-o*u,f=o*c-l*s,p=u*s-a*c,v=t*h+n*f+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/v;return e[0]=h*y,e[1]=(r*u-l*n)*y,e[2]=(o*n-r*a)*y,e[3]=f*y,e[4]=(l*t-r*c)*y,e[5]=(r*s-o*t)*y,e[6]=p*y,e[7]=(n*c-u*t)*y,e[8]=(a*t-n*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*a+u*o)+a+e,-r*u,r*c,-r*(-u*a+c*o)+o+t,0,0,1),this}scale(e,t){return Kr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Du.makeScale(e,t)),this}rotate(e){return Kr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Du.makeRotation(-e)),this}translate(e,t){return Kr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Du.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Oh.prototype.isMatrix3=!0;var ht=Oh,Du=new ht,xd=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_d=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Z0(){let i={enabled:!0,workingColorSpace:Un,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Lt&&(r.r=er(r.r),r.g=er(r.g),r.b=er(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Lt&&(r.r=Ds(r.r),r.g=Ds(r.g),r.b=Ds(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===$n?Ua:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Kr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Kr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Un]:{primaries:e,whitePoint:n,transfer:Ua,toXYZ:xd,fromXYZ:_d,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:n,transfer:Lt,toXYZ:xd,fromXYZ:_d,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),i}var vt=Z0();function er(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ds(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ys,wl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ys===void 0&&(ys=Hs("canvas")),ys.width=e.width,ys.height=e.height;let r=ys.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ys}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Hs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=er(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(er(t[n]/255)*255):t[n]=er(t[n]);return{data:t,width:e.width,height:e.height}}else return Qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},J0=0,ks=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=Si(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ou(r[a].image)):s.push(Ou(r[a]))}else s=Ou(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Ou(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?wl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Qe("Texture: Unable to serialize Texture."),{})}var j0=0,Uu=new j,gn=class i extends bi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ai,r=ai,s=an,a=Ei,o=jn,c=qn,u=i.DEFAULT_ANISOTROPY,l=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=Si(),this.name="",this.source=new ks(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Uu).x}get height(){return this.source.getSize(Uu).y}get depth(){return this.source.getSize(Uu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Qe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oi:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case Us:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oi:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case Us:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=vh;gn.DEFAULT_ANISOTROPY=1;var Uh=class Uh{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,u=c[0],l=c[4],h=c[8],f=c[1],p=c[5],v=c[9],y=c[2],g=c[6],m=c[10];if(Math.abs(l-f)<.01&&Math.abs(h-y)<.01&&Math.abs(v-g)<.01){if(Math.abs(l+f)<.1&&Math.abs(h+y)<.1&&Math.abs(v+g)<.1&&Math.abs(u+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(u+1)/2,w=(p+1)/2,I=(m+1)/2,L=(l+f)/4,D=(h+y)/4,S=(v+g)/4;return A>w&&A>I?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=L/n,s=D/n):w>I?w<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),n=L/r,s=S/r):I<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),n=D/s,r=S/s),this.set(n,r,s,t),this}let _=Math.sqrt((g-v)*(g-v)+(h-y)*(h-y)+(f-l)*(f-l));return Math.abs(_)<.001&&(_=1),this.x=(g-v)/_,this.y=(h-y)/_,this.z=(f-l)/_,this.w=Math.acos((u+p+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this.w=bt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this.w=bt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Uh.prototype.isVector4=!0;var Ht=Uh,Al=class extends bi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},s=new gn(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new ks(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},dn=class extends Al{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ha=class extends gn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Rl=class extends gn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Wl=class Wl{constructor(e,t,n,r,s,a,o,c,u,l,h,f,p,v,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,u,l,h,f,p,v,y,g)}set(e,t,n,r,s,a,o,c,u,l,h,f,p,v,y,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=c,m[2]=u,m[6]=l,m[10]=h,m[14]=f,m[3]=p,m[7]=v,m[11]=y,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Ms.setFromMatrixColumn(e,0).length(),s=1/Ms.setFromMatrixColumn(e,1).length(),a=1/Ms.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),u=Math.sin(r),l=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let f=a*l,p=a*h,v=o*l,y=o*h;t[0]=c*l,t[4]=-c*h,t[8]=u,t[1]=p+v*u,t[5]=f-y*u,t[9]=-o*c,t[2]=y-f*u,t[6]=v+p*u,t[10]=a*c}else if(e.order==="YXZ"){let f=c*l,p=c*h,v=u*l,y=u*h;t[0]=f+y*o,t[4]=v*o-p,t[8]=a*u,t[1]=a*h,t[5]=a*l,t[9]=-o,t[2]=p*o-v,t[6]=y+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*l,p=c*h,v=u*l,y=u*h;t[0]=f-y*o,t[4]=-a*h,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*l,t[9]=y-f*o,t[2]=-a*u,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*l,p=a*h,v=o*l,y=o*h;t[0]=c*l,t[4]=v*u-p,t[8]=f*u+y,t[1]=c*h,t[5]=y*u+f,t[9]=p*u-v,t[2]=-u,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,p=a*u,v=o*c,y=o*u;t[0]=c*l,t[4]=y-f*h,t[8]=v*h+p,t[1]=h,t[5]=a*l,t[9]=-o*l,t[2]=-u*l,t[6]=p*h+v,t[10]=f-y*h}else if(e.order==="XZY"){let f=a*c,p=a*u,v=o*c,y=o*u;t[0]=c*l,t[4]=-h,t[8]=u*l,t[1]=f*h+y,t[5]=a*l,t[9]=p*h-v,t[2]=v*h-p,t[6]=o*l,t[10]=y*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($0,e,Q0)}lookAt(e,t,n){let r=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),vr.crossVectors(n,Kn),vr.lengthSq()===0&&(Math.abs(n.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),vr.crossVectors(n,Kn)),vr.normalize(),qo.crossVectors(Kn,vr),r[0]=vr.x,r[4]=qo.x,r[8]=Kn.x,r[1]=vr.y,r[5]=qo.y,r[9]=Kn.y,r[2]=vr.z,r[6]=qo.z,r[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],l=n[1],h=n[5],f=n[9],p=n[13],v=n[2],y=n[6],g=n[10],m=n[14],_=n[3],A=n[7],w=n[11],I=n[15],L=r[0],D=r[4],S=r[8],x=r[12],b=r[1],R=r[5],M=r[9],P=r[13],O=r[2],k=r[6],X=r[10],$=r[14],ne=r[3],re=r[7],oe=r[11],ae=r[15];return s[0]=a*L+o*b+c*O+u*ne,s[4]=a*D+o*R+c*k+u*re,s[8]=a*S+o*M+c*X+u*oe,s[12]=a*x+o*P+c*$+u*ae,s[1]=l*L+h*b+f*O+p*ne,s[5]=l*D+h*R+f*k+p*re,s[9]=l*S+h*M+f*X+p*oe,s[13]=l*x+h*P+f*$+p*ae,s[2]=v*L+y*b+g*O+m*ne,s[6]=v*D+y*R+g*k+m*re,s[10]=v*S+y*M+g*X+m*oe,s[14]=v*x+y*P+g*$+m*ae,s[3]=_*L+A*b+w*O+I*ne,s[7]=_*D+A*R+w*k+I*re,s[11]=_*S+A*M+w*X+I*oe,s[15]=_*x+A*P+w*$+I*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],u=e[13],l=e[2],h=e[6],f=e[10],p=e[14],v=e[3],y=e[7],g=e[11],m=e[15],_=c*p-u*f,A=o*p-u*h,w=o*f-c*h,I=a*p-u*l,L=a*f-c*l,D=a*h-o*l;return t*(y*_-g*A+m*w)-n*(v*_-g*I+m*L)+r*(v*A-y*I+m*D)-s*(v*w-y*L+g*D)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],u=e[6],l=e[10];return t*(a*l-o*u)-n*(s*l-o*c)+r*(s*u-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],l=e[8],h=e[9],f=e[10],p=e[11],v=e[12],y=e[13],g=e[14],m=e[15],_=t*o-n*a,A=t*c-r*a,w=t*u-s*a,I=n*c-r*o,L=n*u-s*o,D=r*u-s*c,S=l*y-h*v,x=l*g-f*v,b=l*m-p*v,R=h*g-f*y,M=h*m-p*y,P=f*m-p*g,O=_*P-A*M+w*R+I*b-L*x+D*S;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/O;return e[0]=(o*P-c*M+u*R)*k,e[1]=(r*M-n*P-s*R)*k,e[2]=(y*D-g*L+m*I)*k,e[3]=(f*L-h*D-p*I)*k,e[4]=(c*b-a*P-u*x)*k,e[5]=(t*P-r*b+s*x)*k,e[6]=(g*w-v*D-m*A)*k,e[7]=(l*D-f*w+p*A)*k,e[8]=(a*M-o*b+u*S)*k,e[9]=(n*b-t*M-s*S)*k,e[10]=(v*L-y*w+m*_)*k,e[11]=(h*w-l*L-p*_)*k,e[12]=(o*x-a*R-c*S)*k,e[13]=(t*R-n*x+r*S)*k,e[14]=(y*A-v*I-g*_)*k,e[15]=(l*I-h*A+f*_)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,u=s*a,l=s*o;return this.set(u*a+n,u*o-r*c,u*c+r*o,0,u*o+r*c,l*o+n,l*c-r*a,0,u*c-r*o,l*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,u=s+s,l=a+a,h=o+o,f=s*u,p=s*l,v=s*h,y=a*l,g=a*h,m=o*h,_=c*u,A=c*l,w=c*h,I=n.x,L=n.y,D=n.z;return r[0]=(1-(y+m))*I,r[1]=(p+w)*I,r[2]=(v-A)*I,r[3]=0,r[4]=(p-w)*L,r[5]=(1-(f+m))*L,r[6]=(g+_)*L,r[7]=0,r[8]=(v+A)*D,r[9]=(g-_)*D,r[10]=(1-(f+y))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Ms.set(r[0],r[1],r[2]).length(),o=Ms.set(r[4],r[5],r[6]).length(),c=Ms.set(r[8],r[9],r[10]).length();s<0&&(a=-a),gi.copy(this);let u=1/a,l=1/o,h=1/c;return gi.elements[0]*=u,gi.elements[1]*=u,gi.elements[2]*=u,gi.elements[4]*=l,gi.elements[5]*=l,gi.elements[6]*=l,gi.elements[8]*=h,gi.elements[9]*=h,gi.elements[10]*=h,t.setFromRotationMatrix(gi),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=Mi,c=!1){let u=this.elements,l=2*s/(t-e),h=2*s/(n-r),f=(t+e)/(t-e),p=(n+r)/(n-r),v,y;if(c)v=s/(a-s),y=a*s/(a-s);else if(o===Mi)v=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===Fs)v=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=l,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=h,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=v,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Mi,c=!1){let u=this.elements,l=2/(t-e),h=2/(n-r),f=-(t+e)/(t-e),p=-(n+r)/(n-r),v,y;if(c)v=1/(a-s),y=a/(a-s);else if(o===Mi)v=-2/(a-s),y=-(a+s)/(a-s);else if(o===Fs)v=-1/(a-s),y=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=l,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=h,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=v,u[14]=y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Wl.prototype.isMatrix4=!0;var dt=Wl,Ms=new j,gi=new dt,$0=new j(0,0,0),Q0=new j(1,1,1),vr=new j,qo=new j,Kn=new j,yd=new dt,Md=new Cn,Ui=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],l=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(bt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-l,p),this._y=0);break;default:Qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Md.setFromEuler(this),this.setFromQuaternion(Md,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ui.DEFAULT_ORDER="XYZ";var Ba=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},eg=0,Sd=new j,Ss=new Cn,Ki=new dt,Xo=new j,Ea=new j,tg=new j,ng=new Cn,bd=new j(1,0,0),Td=new j(0,1,0),Ed=new j(0,0,1),wd={type:"added"},ig={type:"removed"},bs={type:"childadded",child:null},Fu={type:"childremoved",child:null},Yt=class i extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new j,t=new Ui,n=new Cn,r=new j(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new dt},normalMatrix:{value:new ht}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(bd,e)}rotateY(e){return this.rotateOnAxis(Td,e)}rotateZ(e){return this.rotateOnAxis(Ed,e)}translateOnAxis(e,t){return Sd.copy(e).applyQuaternion(this.quaternion),this.position.add(Sd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bd,e)}translateY(e){return this.translateOnAxis(Td,e)}translateZ(e){return this.translateOnAxis(Ed,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xo.copy(e):Xo.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(Ea,Xo,this.up):Ki.lookAt(Xo,Ea,this.up),this.quaternion.setFromRotationMatrix(Ki),r&&(Ki.extractRotation(r.matrixWorld),Ss.setFromRotationMatrix(Ki),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wd),bs.child=e,this.dispatchEvent(bs),bs.child=null):lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ig),Fu.child=e,this.dispatchEvent(Fu),Fu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wd),bs.child=e,this.dispatchEvent(bs),bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,e,tg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,ng,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let u=0,l=c.length;u<l;u++){let h=c[u];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),u=a(e.textures),l=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),l.length>0&&(n.images=l),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){let c=[];for(let u in o){let l=o[u];delete l.metadata,c.push(l)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Yt.DEFAULT_UP=new j(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xt=class extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},rg={type:"move"},zs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(let y of e.hand.values()){let g=t.getJointPose(y,n),m=this._getHandJoint(u,y);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let l=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=l.position.distanceTo(h.position),p=.02,v=.005;u.inputState.pinching&&f>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rg)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new xt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Fp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},Yo={h:0,s:0,l:0};function Hu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ke=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,vt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=vt.workingColorSpace){if(e=Ah(e,1),t=bt(t,0,1),n=bt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Hu(a,s,e+1/3),this.g=Hu(a,s,e),this.b=Hu(a,s,e-1/3)}return vt.colorSpaceToWorking(this,r),this}setStyle(e,t=qt){function n(s){s!==void 0&&parseFloat(s)<1&&Qe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Qe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){let n=Fp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}copyLinearToSRGB(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return vt.workingToColorSpace(Rn.copy(this),e),Math.round(bt(Rn.r*255,0,255))*65536+Math.round(bt(Rn.g*255,0,255))*256+Math.round(bt(Rn.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.workingToColorSpace(Rn.copy(this),t);let n=Rn.r,r=Rn.g,s=Rn.b,a=Math.max(n,r,s),o=Math.min(n,r,s),c,u,l=(o+a)/2;if(o===a)c=0,u=0;else{let h=a-o;switch(u=l<=.5?h/(a+o):h/(2-a-o),a){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=u,e.l=l,e}getRGB(e,t=vt.workingColorSpace){return vt.workingToColorSpace(Rn.copy(this),t),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=qt){vt.workingToColorSpace(Rn.copy(this),e);let t=Rn.r,n=Rn.g,r=Rn.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(xr),this.setHSL(xr.h+e,xr.s+t,xr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xr),e.getHSL(Yo);let n=Da(xr.h,Yo.h,t),r=Da(xr.s,Yo.s,t),s=Da(xr.l,Yo.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Rn=new Ke;Ke.NAMES=Fp;var ka=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ke(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Tr=class extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},vi=new j,Zi=new j,Bu=new j,Ji=new j,Ts=new j,Es=new j,Ad=new j,ku=new j,zu=new j,Gu=new j,Vu=new Ht,Wu=new Ht,qu=new Ht,br=class i{constructor(e=new j,t=new j,n=new j){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),vi.subVectors(e,t),r.cross(vi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){vi.subVectors(r,t),Zi.subVectors(n,t),Bu.subVectors(e,t);let a=vi.dot(vi),o=vi.dot(Zi),c=vi.dot(Bu),u=Zi.dot(Zi),l=Zi.dot(Bu),h=a*u-o*o;if(h===0)return s.set(0,0,0),null;let f=1/h,p=(u*c-o*l)*f,v=(a*l-o*c)*f;return s.set(1-p-v,v,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,Ji)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ji.x),c.addScaledVector(a,Ji.y),c.addScaledVector(o,Ji.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Vu.setScalar(0),Wu.setScalar(0),qu.setScalar(0),Vu.fromBufferAttribute(e,t),Wu.fromBufferAttribute(e,n),qu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Vu,s.x),a.addScaledVector(Wu,s.y),a.addScaledVector(qu,s.z),a}static isFrontFacing(e,t,n,r){return vi.subVectors(n,t),Zi.subVectors(e,t),vi.cross(Zi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),vi.cross(Zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;Ts.subVectors(r,n),Es.subVectors(s,n),ku.subVectors(e,n);let c=Ts.dot(ku),u=Es.dot(ku);if(c<=0&&u<=0)return t.copy(n);zu.subVectors(e,r);let l=Ts.dot(zu),h=Es.dot(zu);if(l>=0&&h<=l)return t.copy(r);let f=c*h-l*u;if(f<=0&&c>=0&&l<=0)return a=c/(c-l),t.copy(n).addScaledVector(Ts,a);Gu.subVectors(e,s);let p=Ts.dot(Gu),v=Es.dot(Gu);if(v>=0&&p<=v)return t.copy(s);let y=p*u-c*v;if(y<=0&&u>=0&&v<=0)return o=u/(u-v),t.copy(n).addScaledVector(Es,o);let g=l*v-p*h;if(g<=0&&h-l>=0&&p-v>=0)return Ad.subVectors(s,r),o=(h-l)/(h-l+(p-v)),t.copy(r).addScaledVector(Ad,o);let m=1/(g+y+f);return a=y*m,o=f*m,t.copy(n).addScaledVector(Ts,a).addScaledVector(Es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Fn=class{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,xi):xi.fromBufferAttribute(s,a),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ko.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ko.copy(n.boundingBox)),Ko.applyMatrix4(e.matrixWorld),this.union(Ko)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wa),Zo.subVectors(this.max,wa),ws.subVectors(e.a,wa),As.subVectors(e.b,wa),Rs.subVectors(e.c,wa),_r.subVectors(As,ws),yr.subVectors(Rs,As),Gr.subVectors(ws,Rs);let t=[0,-_r.z,_r.y,0,-yr.z,yr.y,0,-Gr.z,Gr.y,_r.z,0,-_r.x,yr.z,0,-yr.x,Gr.z,0,-Gr.x,-_r.y,_r.x,0,-yr.y,yr.x,0,-Gr.y,Gr.x,0];return!Xu(t,ws,As,Rs,Zo)||(t=[1,0,0,0,1,0,0,0,1],!Xu(t,ws,As,Rs,Zo))?!1:(Jo.crossVectors(_r,yr),t=[Jo.x,Jo.y,Jo.z],Xu(t,ws,As,Rs,Zo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ji=[new j,new j,new j,new j,new j,new j,new j,new j],xi=new j,Ko=new Fn,ws=new j,As=new j,Rs=new j,_r=new j,yr=new j,Gr=new j,wa=new j,Zo=new j,Jo=new j,Vr=new j;function Xu(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Vr.fromArray(i,s);let o=r.x*Math.abs(Vr.x)+r.y*Math.abs(Vr.y)+r.z*Math.abs(Vr.z),c=e.dot(Vr),u=t.dot(Vr),l=n.dot(Vr);if(Math.max(-Math.max(c,u,l),Math.min(c,u,l))>o)return!1}return!0}var fn=new j,jo=new it,sg=0,jt=class extends bi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Eh,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)jo.fromBufferAttribute(this,t),jo.applyMatrix3(e),this.setXY(t,jo.x,jo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix3(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),r=Ft(r,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var za=class extends jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ga=class extends jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var wt=class extends jt{constructor(e,t,n){super(new Float32Array(e),t,n)}},ag=new Fn,Aa=new j,Yu=new j,kn=class{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ag.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Aa.subVectors(e,this.center);let t=Aa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Aa,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Aa.copy(e.center).add(Yu)),this.expandByPoint(Aa.copy(e.center).sub(Yu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},og=0,si=new dt,Ku=new Yt,Cs=new j,Zn=new Fn,Ra=new Fn,_n=new j,Kt=class i extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(P0(e)?Ga:za)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ht().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,n){return si.makeTranslation(e,t,n),this.applyMatrix4(si),this}scale(e,t,n){return si.makeScale(e,t,n),this.applyMatrix4(si),this}lookAt(e){return Ku.lookAt(e),Ku.updateMatrix(),this.applyMatrix4(Ku.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new wt(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Zn.setFromBufferAttribute(s),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){let n=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Ra.setFromBufferAttribute(o),this.morphTargetsRelative?(_n.addVectors(Zn.min,Ra.min),Zn.expandByPoint(_n),_n.addVectors(Zn.max,Ra.max),Zn.expandByPoint(_n)):(Zn.expandByPoint(Ra.min),Zn.expandByPoint(Ra.max))}Zn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)_n.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(_n));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let u=0,l=o.count;u<l;u++)_n.fromBufferAttribute(o,u),c&&(Cs.fromBufferAttribute(e,u),_n.add(Cs)),r=Math.max(r,n.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new jt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let S=0;S<n.count;S++)o[S]=new j,c[S]=new j;let u=new j,l=new j,h=new j,f=new it,p=new it,v=new it,y=new j,g=new j;function m(S,x,b){u.fromBufferAttribute(n,S),l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,b),f.fromBufferAttribute(s,S),p.fromBufferAttribute(s,x),v.fromBufferAttribute(s,b),l.sub(u),h.sub(u),p.sub(f),v.sub(f);let R=1/(p.x*v.y-v.x*p.y);isFinite(R)&&(y.copy(l).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(R),g.copy(h).multiplyScalar(p.x).addScaledVector(l,-v.x).multiplyScalar(R),o[S].add(y),o[x].add(y),o[b].add(y),c[S].add(g),c[x].add(g),c[b].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let S=0,x=_.length;S<x;++S){let b=_[S],R=b.start,M=b.count;for(let P=R,O=R+M;P<O;P+=3)m(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let A=new j,w=new j,I=new j,L=new j;function D(S){I.fromBufferAttribute(r,S),L.copy(I);let x=o[S];A.copy(x),A.sub(I.multiplyScalar(I.dot(x))).normalize(),w.crossVectors(L,x);let R=w.dot(c[S])<0?-1:1;a.setXYZW(S,A.x,A.y,A.z,R)}for(let S=0,x=_.length;S<x;++S){let b=_[S],R=b.start,M=b.count;for(let P=R,O=R+M;P<O;P+=3)D(e.getX(P+0)),D(e.getX(P+1)),D(e.getX(P+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let r=new j,s=new j,a=new j,o=new j,c=new j,u=new j,l=new j,h=new j;if(e)for(let f=0,p=e.count;f<p;f+=3){let v=e.getX(f+0),y=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,g),l.subVectors(a,s),h.subVectors(r,s),l.cross(h),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,g),o.add(l),c.add(l),u.add(l),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),l.subVectors(a,s),h.subVectors(r,s),l.cross(h),n.setXYZ(f+0,l.x,l.y,l.z),n.setXYZ(f+1,l.x,l.y,l.z),n.setXYZ(f+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(o,c){let u=o.array,l=o.itemSize,h=o.normalized,f=new u.constructor(c.length*l),p=0,v=0;for(let y=0,g=c.length;y<g;y++){o.isInterleavedBufferAttribute?p=c[y]*o.data.stride+o.offset:p=c[y]*l;for(let m=0;m<l;m++)f[v++]=u[p++]}return new jt(f,l,h)}if(this.index===null)return Qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let c=r[o],u=e(c,n);t.setAttribute(o,u)}let s=this.morphAttributes;for(let o in s){let c=[],u=s[o];for(let l=0,h=u.length;l<h;l++){let f=u[l],p=e(f,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let u=n[c];e.data.attributes[c]=u.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let u=this.morphAttributes[c],l=[];for(let h=0,f=u.length;h<f;h++){let p=u[h];l.push(p.toJSON(e.data))}l.length>0&&(r[c]=l,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let u in r){let l=r[u];this.setAttribute(u,l.clone(t))}let s=e.morphAttributes;for(let u in s){let l=[],h=s[u];for(let f=0,p=h.length;f<p;f++)l.push(h[f].clone(t));this.morphAttributes[u]=l}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let u=0,l=a.length;u<l;u++){let h=a[u];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Eh,this.updateRanges=[],this.version=0,this.uuid=Si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},On=new j,Vs=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)On.fromBufferAttribute(this,t),On.applyMatrix4(e),this.setXYZ(t,On.x,On.y,On.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)On.fromBufferAttribute(this,t),On.applyNormalMatrix(e),this.setXYZ(t,On.x,On.y,On.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)On.fromBufferAttribute(this,t),On.transformDirection(e),this.setXYZ(t,On.x,On.y,On.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),r=Ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),r=Ft(r,this.array),s=Ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Fa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Fa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Zu=new j,lg=new j,cg=new ht,_i=class{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Zu.subVectors(n,t).cross(lg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Zu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||cg.getNormalMatrix(e),r=this.coplanarPoint(Zu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},ug=0,Hn=class extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=na,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mh,this.blendDst=gh,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vl,this.stencilZFail=vl,this.stencilZPass=vl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Qe(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new _i().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new it().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new it().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var $i=new j,Ju=new j,$o=new j,Qo=new j,$r=class{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=$i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,t),$i.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ju.copy(e).add(t).multiplyScalar(.5),$o.copy(t).sub(e).normalize(),Qo.copy(this.origin).sub(Ju);let s=e.distanceTo(t)*.5,a=-this.direction.dot($o),o=Qo.dot(this.direction),c=-Qo.dot($o),u=Qo.lengthSq(),l=Math.abs(1-a*a),h,f,p,v;if(l>0)if(h=a*c-o,f=a*o-c,v=s*l,h>=0)if(f>=-v)if(f<=v){let y=1/l;h*=y,f*=y,p=h*(h+a*f+2*o)+f*(a*h+f+2*c)+u}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+u;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+u;else f<=-v?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+u):f<=v?(h=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+u):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+u);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ju).addScaledVector($o,f),p}intersectSphere(e,t){if(e.radius<0)return null;$i.subVectors(e.center,this.origin);let n=$i.dot(this.direction),r=$i.dot($i)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c,u=1/this.direction.x,l=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),l>=0?(s=(e.min.y-f.y)*l,a=(e.max.y-f.y)*l):(s=(e.max.y-f.y)*l,a=(e.min.y-f.y)*l),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,t,n,r,s){let a=this.origin,o=this.direction,c=o.x,u=o.y,l=o.z,h=e.x-a.x,f=e.y-a.y,p=e.z-a.z,v=t.x-a.x,y=t.y-a.y,g=t.z-a.z,m=n.x-a.x,_=n.y-a.y,A=n.z-a.z,w=Math.abs(c),I=Math.abs(u),L=Math.abs(l),D,S,x,b,R,M,P,O,k,X,$,ne;if(w>=I&&w>=L?(x=c,M=h,k=v,ne=m,c>=0?(D=u,S=l,b=f,R=p,P=y,O=g,X=_,$=A):(D=l,S=u,b=p,R=f,P=g,O=y,X=A,$=_)):I>=L?(x=u,M=f,k=y,ne=_,u>=0?(D=l,S=c,b=p,R=h,P=g,O=v,X=A,$=m):(D=c,S=l,b=h,R=p,P=v,O=g,X=m,$=A)):(x=l,M=p,k=g,ne=A,l>=0?(D=c,S=u,b=h,R=f,P=v,O=y,X=m,$=_):(D=u,S=c,b=f,R=h,P=y,O=v,X=_,$=m)),x===0)return null;let re=D/x,oe=S/x,ae=1/x,Pe=b-re*M,He=R-oe*M,tt=P-re*k,at=O-oe*k,rt=X-re*ne,le=$-oe*ne,K=rt*at-le*tt,ce=Pe*le-He*rt,Me=tt*He-at*Pe;if(r){if(K<0||ce<0||Me<0)return null}else if((K<0||ce<0||Me<0)&&(K>0||ce>0||Me>0))return null;let he=K+ce+Me;if(he===0)return null;let fe=ae*(K*M+ce*k+Me*ne);return(he>0?fe<0:fe>0)?null:this.at(fe/he,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},In=class extends Hn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Rd=new dt,Wr=new $r,el=new kn,Cd=new j,tl=new j,nl=new j,il=new j,ju=new j,rl=new j,Id=new j,sl=new j,ke=class extends Yt{constructor(e=new Kt,t=new In){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){rl.set(0,0,0);for(let c=0,u=s.length;c<u;c++){let l=o[c],h=s[c];l!==0&&(ju.fromBufferAttribute(h,e),a?rl.addScaledVector(ju,l):rl.addScaledVector(ju.sub(t),l))}t.add(rl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),el.copy(n.boundingSphere),el.applyMatrix4(s),Wr.copy(e.ray).recast(e.near),!(el.containsPoint(Wr.origin)===!1&&(Wr.intersectSphere(el,Cd)===null||Wr.origin.distanceToSquared(Cd)>(e.far-e.near)**2))&&(Rd.copy(s).invert(),Wr.copy(e.ray).applyMatrix4(Rd),!(n.boundingBox!==null&&Wr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Wr)))}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,l=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,y=f.length;v<y;v++){let g=f[v],m=a[g.materialIndex],_=Math.max(g.start,p.start),A=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let w=_,I=A;w<I;w+=3){let L=o.getX(w),D=o.getX(w+1),S=o.getX(w+2);r=al(this,m,e,n,u,l,h,L,D,S),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let v=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let g=v,m=y;g<m;g+=3){let _=o.getX(g),A=o.getX(g+1),w=o.getX(g+2);r=al(this,a,e,n,u,l,h,_,A,w),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,y=f.length;v<y;v++){let g=f[v],m=a[g.materialIndex],_=Math.max(g.start,p.start),A=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let w=_,I=A;w<I;w+=3){let L=w,D=w+1,S=w+2;r=al(this,m,e,n,u,l,h,L,D,S),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let v=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let g=v,m=y;g<m;g+=3){let _=g,A=g+1,w=g+2;r=al(this,a,e,n,u,l,h,_,A,w),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function hg(i,e,t,n,r,s,a,o){let c;if(e.side===Mn?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===ki,o),c===null)return null;sl.copy(o),sl.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(sl);return u<t.near||u>t.far?null:{distance:u,point:sl.clone(),object:i}}function al(i,e,t,n,r,s,a,o,c,u){i.getVertexPosition(o,tl),i.getVertexPosition(c,nl),i.getVertexPosition(u,il);let l=hg(i,e,t,n,tl,nl,il,Id);if(l){let h=new j;br.getBarycoord(Id,tl,nl,il,h),r&&(l.uv=br.getInterpolatedAttribute(r,o,c,u,h,new it)),s&&(l.uv1=br.getInterpolatedAttribute(s,o,c,u,h,new it)),a&&(l.normal=br.getInterpolatedAttribute(a,o,c,u,h,new j),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));let f={a:o,b:c,c:u,normal:new j,materialIndex:0};br.getNormal(tl,nl,il,f.normal),l.face=f,l.barycoord=h}return l}var Ca=new Ht,Pd=new Ht,Ld=new Ht,fg=new Ht,Nd=new dt,ol=new j,$u=new kn,Dd=new dt,Qu=new $r,Va=class extends ke{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ih,this.bindMatrix=new dt,this.bindMatrixInverse=new dt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Fn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ol),this.boundingBox.expandByPoint(ol)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new kn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ol),this.boundingSphere.expandByPoint(ol)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$u.copy(this.boundingSphere),$u.applyMatrix4(r),e.ray.intersectsSphere($u)!==!1&&(Dd.copy(r).invert(),Qu.copy(e.ray).applyMatrix4(Dd),!(this.boundingBox!==null&&Qu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Qu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ht,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ih?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Mp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Qe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;Pd.fromBufferAttribute(r.attributes.skinIndex,e),Ld.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(Ca.copy(t),t.set(0,0,0,0)):(Ca.set(...t,1),t.set(0,0,0)),Ca.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let a=Ld.getComponent(s);if(a!==0){let o=Pd.getComponent(s);Nd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(fg.copy(Ca).applyMatrix4(Nd),a)}}return t.isVector4&&(t.w=Ca.w),t.applyMatrix4(this.bindMatrixInverse)}},Ws=class extends Yt{constructor(){super(),this.isBone=!0,this.type="Bone"}},tr=class extends gn{constructor(e=null,t=1,n=1,r,s,a,o,c,u=Xt,l=Xt,h,f){super(null,a,o,c,u,l,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Od=new dt,dg=new dt,Wa=class i{constructor(e=[],t=[]){this.uuid=Si(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Qe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new dt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new dt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:dg;Od.multiplyMatrices(o,t[s]),Od.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new tr(t,e,e,jn,Jn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let s=e.bones[n],a=t[s];a===void 0&&(Qe("Skeleton: No bone found with UUID:",s),a=new Ws),this.bones.push(a),this.boneInverses.push(new dt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let a=t[r];e.bones.push(a.uuid);let o=n[r];e.boneInverses.push(o.toArray())}return e}},nr=class extends jt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Is=new dt,Ud=new dt,ll=[],Fd=new Fn,pg=new dt,Ia=new ke,Pa=new kn,Qr=class extends ke{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new nr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,pg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Fn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Is),Fd.copy(e.boundingBox).applyMatrix4(Is),this.boundingBox.union(Fd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new kn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Is),Pa.copy(e.boundingSphere).applyMatrix4(Is),this.boundingSphere.union(Pa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Ia.geometry=this.geometry,Ia.material=this.material,Ia.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pa.copy(this.boundingSphere),Pa.applyMatrix4(n),e.ray.intersectsSphere(Pa)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Is),Ud.multiplyMatrices(n,Is),Ia.matrixWorld=Ud,Ia.raycast(e,ll);for(let a=0,o=ll.length;a<o;a++){let c=ll[a];c.instanceId=s,c.object=this,t.push(c)}ll.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new nr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new tr(new Float32Array(r*this.count),r,this.count,$l,Jn));let s=this.morphTexture.source.data.data,a=0;for(let u=0;u<n.length;u++)a+=n[u];let o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;return s[c]=o,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},qr=new kn,mg=new it(.5,.5),cl=new j,qs=class{constructor(e=new _i,t=new _i,n=new _i,r=new _i,s=new _i,a=new _i){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Mi,n=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],u=s[3],l=s[4],h=s[5],f=s[6],p=s[7],v=s[8],y=s[9],g=s[10],m=s[11],_=s[12],A=s[13],w=s[14],I=s[15];if(r[0].setComponents(u-a,p-l,m-v,I-_).normalize(),r[1].setComponents(u+a,p+l,m+v,I+_).normalize(),r[2].setComponents(u+o,p+h,m+y,I+A).normalize(),r[3].setComponents(u-o,p-h,m-y,I-A).normalize(),n)r[4].setComponents(c,f,g,w).normalize(),r[5].setComponents(u-c,p-f,m-g,I-w).normalize();else if(r[4].setComponents(u-c,p-f,m-g,I-w).normalize(),t===Mi)r[5].setComponents(u+c,p+f,m+g,I+w).normalize();else if(t===Fs)r[5].setComponents(c,f,g,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){qr.center.set(0,0,0);let t=mg.distanceTo(e.center);return qr.radius=.7071067811865476+t,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(cl.x=r.normal.x>0?e.max.x:e.min.x,cl.y=r.normal.y>0?e.max.y:e.min.y,cl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(cl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Xs=class extends Hn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Cl=new j,Il=new j,Hd=new dt,La=new $r,ul=new kn,eh=new j,Bd=new j,es=class extends Yt{constructor(e=new Kt,t=new Xs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Cl.fromBufferAttribute(t,r-1),Il.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Cl.distanceTo(Il);e.setAttribute("lineDistance",new wt(n,1))}else Qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ul.copy(n.boundingSphere),ul.applyMatrix4(r),ul.radius+=s,e.ray.intersectsSphere(ul)===!1)return;Hd.copy(r).invert(),La.copy(e.ray).applyMatrix4(Hd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=this.isLineSegments?2:1,l=n.index,f=n.attributes.position;if(l!==null){let p=Math.max(0,a.start),v=Math.min(l.count,a.start+a.count);for(let y=p,g=v-1;y<g;y+=u){let m=l.getX(y),_=l.getX(y+1),A=hl(this,e,La,c,m,_,y);A&&t.push(A)}if(this.isLineLoop){let y=l.getX(v-1),g=l.getX(p),m=hl(this,e,La,c,y,g,v-1);m&&t.push(m)}}else{let p=Math.max(0,a.start),v=Math.min(f.count,a.start+a.count);for(let y=p,g=v-1;y<g;y+=u){let m=hl(this,e,La,c,y,y+1,y);m&&t.push(m)}if(this.isLineLoop){let y=hl(this,e,La,c,v-1,p,v-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function hl(i,e,t,n,r,s,a){let o=i.geometry.attributes.position;if(Cl.fromBufferAttribute(o,r),Il.fromBufferAttribute(o,s),t.distanceSqToSegment(Cl,Il,eh,Bd)>n)return;eh.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(eh);if(!(u<e.near||u>e.far))return{distance:u,point:Bd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var kd=new j,zd=new j,qa=class extends es{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)kd.fromBufferAttribute(t,r),zd.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+kd.distanceTo(zd);e.setAttribute("lineDistance",new wt(n,1))}else Qe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Xa=class extends es{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ys=class extends Hn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Gd=new dt,sh=new $r,fl=new kn,dl=new j,ts=class extends Yt{constructor(e=new Kt,t=new Ys){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fl.copy(n.boundingSphere),fl.applyMatrix4(r),fl.radius+=s,e.ray.intersectsSphere(fl)===!1)return;Gd.copy(r).invert(),sh.copy(e.ray).applyMatrix4(Gd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let v=f,y=p;v<y;v++){let g=u.getX(v);dl.fromBufferAttribute(h,g),Vd(dl,g,c,r,e,t,this)}}else{let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let v=f,y=p;v<y;v++)dl.fromBufferAttribute(h,v),Vd(dl,v,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Vd(i,e,t,n,r,s,a){let o=sh.distanceSqToPoint(i);if(o<t){let c=new j;sh.closestPointToPoint(i,c),c.applyMatrix4(n);let u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ya=class extends gn{constructor(e=[],t=Pr,n,r,s,a,o,c,u,l){super(e,t,n,r,s,a,o,c,u,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ks=class extends gn{constructor(e,t,n,r,s,a,o,c,u){super(e,t,n,r,s,a,o,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Er=class extends gn{constructor(e,t,n=wi,r,s,a,o=Xt,c=Xt,u,l=Oi,h=1){if(l!==Oi&&l!==Lr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,r,s,a,o,c,l,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ks(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Pl=class extends Er{constructor(e,t=wi,n=Pr,r,s,a=Xt,o=Xt,c,u=Oi){let l={width:e,height:e,depth:1},h=[l,l,l,l,l,l];super(e,e,t,n,r,s,a,o,c,u),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ka=class extends gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},on=class i extends Kt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],u=[],l=[],h=[],f=0,p=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,r,a,2),v("x","z","y",1,-1,e,n,-t,r,a,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new wt(u,3)),this.setAttribute("normal",new wt(l,3)),this.setAttribute("uv",new wt(h,2));function v(y,g,m,_,A,w,I,L,D,S,x){let b=w/D,R=I/S,M=w/2,P=I/2,O=L/2,k=D+1,X=S+1,$=0,ne=0,re=new j;for(let oe=0;oe<X;oe++){let ae=oe*R-P;for(let Pe=0;Pe<k;Pe++){let He=Pe*b-M;re[y]=He*_,re[g]=ae*A,re[m]=O,u.push(re.x,re.y,re.z),re[y]=0,re[g]=0,re[m]=L>0?1:-1,l.push(re.x,re.y,re.z),h.push(Pe/D),h.push(1-oe/S),$+=1}}for(let oe=0;oe<S;oe++)for(let ae=0;ae<D;ae++){let Pe=f+ae+k*oe,He=f+ae+k*(oe+1),tt=f+(ae+1)+k*(oe+1),at=f+(ae+1)+k*oe;c.push(Pe,He,at),c.push(He,tt,at),ne+=6}o.addGroup(p,ne,x),p+=ne,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Za=class i extends Kt{constructor(e=1,t=1,n=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let a=[],o=[],c=[],u=[],l=t/2,h=Math.PI/2*e,f=t,p=2*h+f,v=n*2+s,y=r+1,g=new j,m=new j;for(let _=0;_<=v;_++){let A=0,w=0,I=0,L=0;if(_<=n){let x=_/n,b=x*Math.PI/2;w=-l-e*Math.cos(b),I=e*Math.sin(b),L=-e*Math.cos(b),A=x*h}else if(_<=n+s){let x=(_-n)/s;w=-l+x*t,I=e,L=0,A=h+x*f}else{let x=(_-n-s)/n,b=x*Math.PI/2;w=l+e*Math.sin(b),I=e*Math.cos(b),L=e*Math.sin(b),A=h+f+x*h}let D=Math.max(0,Math.min(1,A/p)),S=0;_===0?S=.5/r:_===v&&(S=-.5/r);for(let x=0;x<=r;x++){let b=x/r,R=b*Math.PI*2,M=Math.sin(R),P=Math.cos(R);m.x=-I*P,m.y=w,m.z=I*M,o.push(m.x,m.y,m.z),g.set(-I*P,L,I*M),g.normalize(),c.push(g.x,g.y,g.z),u.push(b+S,D)}if(_>0){let x=(_-1)*y;for(let b=0;b<r;b++){let R=x+b,M=x+b+1,P=_*y+b,O=_*y+b+1;a.push(R,M,P),a.push(M,O,P)}}}this.setIndex(a),this.setAttribute("position",new wt(o,3)),this.setAttribute("normal",new wt(c,3)),this.setAttribute("uv",new wt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var Zs=class i extends Kt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let u=this;r=Math.floor(r),s=Math.floor(s);let l=[],h=[],f=[],p=[],v=0,y=[],g=n/2,m=0;_(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(l),this.setAttribute("position",new wt(h,3)),this.setAttribute("normal",new wt(f,3)),this.setAttribute("uv",new wt(p,2));function _(){let w=new j,I=new j,L=0,D=(t-e)/n;for(let S=0;S<=s;S++){let x=[],b=S/s,R=b*(t-e)+e;for(let M=0;M<=r;M++){let P=M/r,O=P*c+o,k=Math.sin(O),X=Math.cos(O);I.x=R*k,I.y=-b*n+g,I.z=R*X,h.push(I.x,I.y,I.z),w.set(k,D,X).normalize(),f.push(w.x,w.y,w.z),p.push(P,1-b),x.push(v++)}y.push(x)}for(let S=0;S<r;S++)for(let x=0;x<s;x++){let b=y[x][S],R=y[x+1][S],M=y[x+1][S+1],P=y[x][S+1];(e>0||x!==0)&&(l.push(b,R,P),L+=3),(t>0||x!==s-1)&&(l.push(R,M,P),L+=3)}u.addGroup(m,L,0),m+=L}function A(w){let I=v,L=new it,D=new j,S=0,x=w===!0?e:t,b=w===!0?1:-1;for(let M=1;M<=r;M++)h.push(0,g*b,0),f.push(0,b,0),p.push(.5,.5),v++;let R=v;for(let M=0;M<=r;M++){let O=M/r*c+o,k=Math.cos(O),X=Math.sin(O);D.x=x*X,D.y=g*b,D.z=x*k,h.push(D.x,D.y,D.z),f.push(0,b,0),L.x=k*.5+.5,L.y=X*.5*b+.5,p.push(L.x,L.y),v++}for(let M=0;M<r;M++){let P=I+M,O=R+M;w===!0?l.push(O,O+1,P):l.push(O+1,O,P),S+=3}u.addGroup(m,S,w===!0?1:2),m+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ja=class i extends Zs{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var wr=class i extends Kt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),u=o+1,l=c+1,h=e/o,f=t/c,p=[],v=[],y=[],g=[];for(let m=0;m<l;m++){let _=m*f-a;for(let A=0;A<u;A++){let w=A*h-s;v.push(w,-_,0),y.push(0,0,1),g.push(A/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let _=0;_<o;_++){let A=_+u*m,w=_+u*(m+1),I=_+1+u*(m+1),L=_+1+u*m;p.push(A,w,L),p.push(w,I,L)}this.setIndex(p),this.setAttribute("position",new wt(v,3)),this.setAttribute("normal",new wt(y,3)),this.setAttribute("uv",new wt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ar=class i extends Kt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),u=0,l=[],h=new j,f=new j,p=[],v=[],y=[],g=[];for(let m=0;m<=n;m++){let _=[],A=m/n,w=a+A*o,I=e*Math.cos(w),L=Math.sqrt(e*e-I*I),D=0;m===0&&a===0?D=.5/t:m===n&&c===Math.PI&&(D=-.5/t);for(let S=0;S<=t;S++){let x=S/t,b=r+x*s;h.x=-L*Math.cos(b),h.y=I,h.z=L*Math.sin(b),v.push(h.x,h.y,h.z),f.copy(h).normalize(),y.push(f.x,f.y,f.z),g.push(x+D,1-A),_.push(u++)}l.push(_)}for(let m=0;m<n;m++)for(let _=0;_<t;_++){let A=l[m][_+1],w=l[m][_],I=l[m+1][_],L=l[m+1][_+1];(m!==0||a>0)&&p.push(A,w,L),(m!==n-1||c<Math.PI)&&p.push(w,I,L)}this.setIndex(p),this.setAttribute("position",new wt(v,3)),this.setAttribute("normal",new wt(y,3)),this.setAttribute("uv",new wt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Rr=class i extends Kt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let c=[],u=[],l=[],h=[],f=new j,p=new j,v=new j;for(let y=0;y<=n;y++){let g=a+y/n*o;for(let m=0;m<=r;m++){let _=m/r*s;p.x=(e+t*Math.cos(g))*Math.cos(_),p.y=(e+t*Math.cos(g))*Math.sin(_),p.z=t*Math.sin(g),u.push(p.x,p.y,p.z),f.x=e*Math.cos(_),f.y=e*Math.sin(_),v.subVectors(p,f).normalize(),l.push(v.x,v.y,v.z),h.push(m/r),h.push(y/n)}}for(let y=1;y<=n;y++)for(let g=1;g<=r;g++){let m=(r+1)*y+g-1,_=(r+1)*(y-1)+g-1,A=(r+1)*(y-1)+g,w=(r+1)*y+g;c.push(m,_,w),c.push(_,A,w)}this.setIndex(c),this.setAttribute("position",new wt(u,3)),this.setAttribute("normal",new wt(l,3)),this.setAttribute("uv",new wt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function cs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(Wd(r))r.isRenderTargetTexture?(Qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Wd(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Pn(i){let e={};for(let t=0;t<i.length;t++){let n=cs(i[t]);for(let r in n)e[r]=n[r]}return e}function Wd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function gg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ch(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}var cr={clone:cs,merge:Pn},vg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,en=class extends Hn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vg,this.fragmentShader=xg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cs(e.uniforms),this.uniformsGroups=gg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Ke().setHex(r.value);break;case"v2":this.uniforms[n].value=new it().fromArray(r.value);break;case"v3":this.uniforms[n].value=new j().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Ht().fromArray(r.value);break;case"m3":this.uniforms[n].value=new ht().fromArray(r.value);break;case"m4":this.uniforms[n].value=new dt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Js=class extends en{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},$t=class extends Hn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mo,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},zn=class extends $t{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new it(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ja=class extends Hn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mo,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=ql,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ll=class extends Hn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Nl=class extends Hn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Sr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function xl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function _g(i){function e(r,s){return i[r]-i[s]}let t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function qd(i,e,t){let n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let c=0;c!==e;++c)r[a++]=i[o+c]}return r}function yg(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}var Fi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break t}a=t.length;break n}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Dl=class extends Fi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xr,endingEnd:Xr}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Yr:s=e,o=2*t-n;break;case Oa:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Yr:a=e,c=2*n-t;break;case Oa:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}let u=(n-t)*.5,l=this.valueSize;this._weightPrev=u/(t-o),this._weightNext=u/(c-n),this._offsetPrev=s*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,l=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,v=(n-t)/(r-t),y=v*v,g=y*v,m=-f*g+2*f*y-f*v,_=(1+f)*g+(-1.5-2*f)*y+(-.5+f)*v+1,A=(-1-p)*g+(1.5+p)*y+.5*v,w=p*g-p*y;for(let I=0;I!==o;++I)s[I]=m*a[l+I]+_*a[u+I]+A*a[c+I]+w*a[h+I];return s}},$a=class extends Fi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,l=(n-t)/(r-t),h=1-l;for(let f=0;f!==o;++f)s[f]=a[u+f]*h+a[c+f]*l;return s}},Ol=class extends Fi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ul=class extends Fi{interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,l=this.inTangents,h=this.outTangents;if(!l||!h){let v=(n-t)/(r-t),y=1-v;for(let g=0;g!==o;++g)s[g]=a[u+g]*y+a[c+g]*v;return s}let f=o*2,p=e-1;for(let v=0;v!==o;++v){let y=a[u+v],g=a[c+v],m=p*f+v*2,_=h[m],A=h[m+1],w=e*f+v*2,I=l[w],L=l[w+1],D=Sg(n,t,_,I,r);s[v]=Hp(D,y,A,L,g)}return s}};function Hp(i,e,t,n,r){let s=1-i;return s*s*s*e+3*s*s*i*t+3*s*i*i*n+i*i*i*r}function Mg(i,e,t,n,r){let s=1-i;return 3*s*s*(t-e)+6*s*i*(n-t)+3*i*i*(r-n)}function Sg(i,e,t,n,r){let s=(i-e)/(r-e);for(let a=0;a<8;a++){let o=Hp(s,e,t,n,r)-i;if(Math.abs(o)<1e-10)break;let c=Mg(s,e,t,n,r);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}var Gn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Sr(t,this.TimeBufferType),this.values=Sr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Sr(e.times,Array),values:Sr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),xl(e.settings)&&(n.settings={inTangents:Sr(e.settings.inTangents,Array),outTangents:Sr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $a(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ul(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Zr:t=this.InterpolantFactoryMethodDiscrete;break;case Jr:t=this.InterpolantFactoryMethodLinear;break;case gl:t=this.InterpolantFactoryMethodSmooth;break;case rh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Qe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zr;case this.InterpolantFactoryMethodLinear:return Jr;case this.InterpolantFactoryMethodSmooth:return gl;case this.InterpolantFactoryMethodBezier:return rh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;xl(this.settings)&&(Xd(this.settings.inTangents,e),Xd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(lt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(lt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){lt("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){lt("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&L0(r))for(let o=0,c=r.length;o!==c;++o){let u=r[o];if(isNaN(u)){lt("KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===gl,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,u=e[o],l=e[o+1];if(u!==l&&(o!==1||u!==e[0]))if(r)c=!0;else{let h=o*n,f=h-n,p=h+n;for(let v=0;v!==n;++v){let y=t[h+v];if(y!==t[f+v]||y!==t[p+v]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,u=0;u!==n;++u)t[c+u]=t[o+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,xl(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Xd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Gn.prototype.ValueTypeName="";Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=Jr;var ir=class extends Gn{constructor(e,t,n){super(e,t,n)}};ir.prototype.ValueTypeName="bool";ir.prototype.ValueBufferType=Array;ir.prototype.DefaultInterpolation=Zr;ir.prototype.InterpolantFactoryMethodLinear=void 0;ir.prototype.InterpolantFactoryMethodSmooth=void 0;var Qa=class extends Gn{constructor(e,t,n,r){super(e,t,n,r)}};Qa.prototype.ValueTypeName="color";var rr=class extends Gn{constructor(e,t,n,r){super(e,t,n,r)}};rr.prototype.ValueTypeName="number";var Fl=class extends Fi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t),u=e*o;for(let l=u+o;u!==l;u+=4)Cn.slerpFlat(s,0,a,u-o,a,u,c);return s}},sr=class extends Gn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Fl(this.times,this.values,this.getValueSize(),e)}};sr.prototype.ValueTypeName="quaternion";sr.prototype.InterpolantFactoryMethodSmooth=void 0;var ar=class extends Gn{constructor(e,t,n){super(e,t,n)}};ar.prototype.ValueTypeName="string";ar.prototype.ValueBufferType=Array;ar.prototype.DefaultInterpolation=Zr;ar.prototype.InterpolantFactoryMethodLinear=void 0;ar.prototype.InterpolantFactoryMethodSmooth=void 0;var Cr=class extends Gn{constructor(e,t,n,r){super(e,t,n,r)}};Cr.prototype.ValueTypeName="vector";var ns=class{constructor(e="",t=-1,n=[],r=Dc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Si(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Tg(n[a]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(Gn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let s=t.length,a=[];for(let o=0;o<s;o++){let c=[],u=[];c.push((o+s-1)%s,o,(o+1)%s),u.push(0,1,0);let l=_g(c);c=qd(c,1,l),u=qd(u,1,l),!r&&c[0]===0&&(c.push(s),u.push(u[0])),a.push(new rr(".morphTargetInfluences["+t[o].name+"]",c,u).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let u=e[o],l=u.name.match(s);if(l&&l.length>1){let h=l[1],f=r[h];f||(r[h]=f=[]),f.push(u)}}let a=[];for(let o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function bg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return rr;case"vector":case"vector2":case"vector3":case"vector4":return Cr;case"color":return Qa;case"quaternion":return sr;case"bool":case"boolean":return ir;case"string":return ar}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Tg(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=bg(i.type);if(i.times===void 0){let n=[],r=[];yg(i.keys,n,r,"value"),i.times=n,i.values=r}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),xl(i.settings)&&(t.settings={inTangents:Sr(i.settings.inTangents,Float32Array),outTangents:Sr(i.settings.outTangents,Float32Array)}),t}var Di={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Yd(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Yd(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Yd(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Hl=class{constructor(e,t,n){let r=this,s=!1,a=0,o=0,c,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(l){o++,s===!1&&r.onStart!==void 0&&r.onStart(l,a,o),s=!0},this.itemEnd=function(l){a++,r.onProgress!==void 0&&r.onProgress(l,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(l){r.onError!==void 0&&r.onError(l)},this.resolveURL=function(l){return l=l.normalize("NFC"),c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,h){return u.push(l,h),this},this.removeHandler=function(l){let h=u.indexOf(l);return h!==-1&&u.splice(h,2),this},this.getHandler=function(l){for(let h=0,f=u.length;h<f;h+=2){let p=u[h],v=u[h+1];if(p.global&&(p.lastIndex=0),p.test(l))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Bp=new Hl,Hi=class{constructor(e){this.manager=e!==void 0?e:Bp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Hi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qi={},ah=class extends Error{constructor(e,t){super(e),this.response=t}},js=class extends Hi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Di.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Qi[e]!==void 0){Qi[e].push({onLoad:t,onProgress:n,onError:r});return}Qi[e]=[],Qi[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&Qe("FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||u.body===void 0||u.body.getReader===void 0)return u;let l=Qi[e],h=u.body.getReader(),f=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),p=f?parseInt(f):0,v=p!==0,y=0,g=new ReadableStream({start(m){_();function _(){h.read().then(({done:A,value:w})=>{if(A)m.close();else{y+=w.byteLength;let I=new ProgressEvent("progress",{lengthComputable:v,loaded:y,total:p});for(let L=0,D=l.length;L<D;L++){let S=l[L];S.onProgress&&S.onProgress(I)}m.enqueue(w),_()}},A=>{m.error(A)})}}});return new Response(g)}else throw new ah(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(c){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(l=>new DOMParser().parseFromString(l,o));case"json":return u.json();default:if(o==="")return u.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return u.arrayBuffer().then(v=>p.decode(v))}}}).then(u=>{Di.add(`file:${e}`,u);let l=Qi[e];delete Qi[e];for(let h=0,f=l.length;h<f;h++){let p=l[h];p.onLoad&&p.onLoad(u)}}).catch(u=>{let l=Qi[e];if(l===void 0)throw this.manager.itemError(e),u;delete Qi[e];for(let h=0,f=l.length;h<f;h++){let p=l[h];p.onError&&p.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ps=new WeakMap,Bl=class extends Hi{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Di.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=Ps.get(a);h===void 0&&(h=[],Ps.set(a,h)),h.push({onLoad:t,onError:r})}return a}let o=Hs("img");function c(){l(),t&&t(this);let h=Ps.get(this)||[];for(let f=0;f<h.length;f++){let p=h[f];p.onLoad&&p.onLoad(this)}Ps.delete(this),s.manager.itemEnd(e)}function u(h){l(),r&&r(h),Di.remove(`image:${e}`);let f=Ps.get(this)||[];for(let p=0;p<f.length;p++){let v=f[p];v.onError&&v.onError(h)}Ps.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function l(){o.removeEventListener("load",c,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Di.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var is=class extends Hi{constructor(e){super(e)}load(e,t,n,r){let s=new gn,a=new Bl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},Ir=class extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},$s=class extends Ir{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},th=new dt,Kd=new j,Zd=new j,Qs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=qn,this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qs,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Kd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kd),Zd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){th.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(th,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,u=r?r.y/s.y:0;e.coordinateSystem===Fs||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,.5,.5,0,0,0,1),t.multiply(th)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},pl=new j,ml=new Cn,Ni=new j,eo=class extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=Mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(pl,ml,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pl,ml,Ni.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(pl,ml,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pl,ml,Ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Mr=new j,Jd=new it,jd=new it,sn=class extends eo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=jr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Na*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jr*2*Math.atan(Math.tan(Na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z),Mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z)}getViewSize(e,t){return this.getViewBounds(e,Jd,jd),t.subVectors(jd,Jd)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Na*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/u,r*=a.width/c,n*=a.height/u}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},oh=class extends Qs{constructor(){super(new sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=jr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},to=class extends Ir{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new oh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},lh=class extends Qs{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0}},Vn=class extends Ir{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new lh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Bi=class extends eo{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=l*this.view.offsetY,c=o-l*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ch=class extends Qs{constructor(){super(new Bi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},rs=class extends Ir{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new ch}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},ea=class extends Ir{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var or=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var nh=new WeakMap,no=class extends Hi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&Qe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&Qe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Di.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(u=>{nh.has(a)===!0?(r&&r(nh.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(u),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(u){return Di.add(`image-bitmap:${e}`,u),t&&t(u),s.manager.itemEnd(e),u}).catch(function(u){r&&r(u),nh.set(c,u),Di.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Di.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ls=-90,Ns=1,kl=class extends Yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new sn(Ls,Ns,e,t);r.layers=this.layers,this.add(r);let s=new sn(Ls,Ns,e,t);s.layers=this.layers,this.add(s);let a=new sn(Ls,Ns,e,t);a.layers=this.layers,this.add(a);let o=new sn(Ls,Ns,e,t);o.layers=this.layers,this.add(o);let c=new sn(Ls,Ns,e,t);c.layers=this.layers,this.add(c);let u=new sn(Ls,Ns,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(let u of t)this.remove(u);if(e===Mi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,u,l]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(h,f,p),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},zl=class extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},io=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Eg.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Eg(){this._document.hidden===!1&&this.reset()}var Gl=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,s,a;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:r=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,r=this.valueSize,s=e*r+r,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==r;++o)n[s+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,s,0,o,r)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,r=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let c=t*this._origIndex;this._mixBufferRegion(n,r,c,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let c=t,u=t+t;c!==u;++c)if(n[c]!==n[c+t]){o.setValue(n,r);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let s=n,a=r;s!==a;++s)t[s]=t[r+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,s){if(r>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,r){Cn.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,s){let a=this._workIndex*s;Cn.multiplyQuaternionsFlat(e,a,e,t,e,n),Cn.slerpFlat(e,t,e,t,e,a,r)}_lerp(e,t,n,r,s){let a=1-r;for(let o=0;o!==s;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*r}}_lerpAdditive(e,t,n,r,s){for(let a=0;a!==s;++a){let o=t+a;e[o]=e[o]+e[n+a]*r}}},Ih="\\[\\]\\.:\\/",wg=new RegExp("["+Ih+"]","g"),Ph="[^"+Ih+"]",Ag="[^"+Ih.replace("\\.","")+"]",Rg=/((?:WC+[\/:])*)/.source.replace("WC",Ph),Cg=/(WCOD+)?/.source.replace("WCOD",Ag),Ig=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ph),Pg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ph),Lg=new RegExp("^"+Rg+Cg+Ig+Pg+"$"),Ng=["material","materials","bones","map"],uh=class{constructor(e,t,n){let r=n||Gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Gt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wg,"")}static parseTrackName(e){let t=Lg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Ng.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){lt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){lt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let l=0;l<e.length;l++)if(e[l].name===u){u=l;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){lt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){lt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){lt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let a=e[r];if(a===void 0){let u=t.nodeName;lt("PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Gt.Composite=uh;Gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Gt.prototype.GetterByBindingType=[Gt.prototype._getValue_direct,Gt.prototype._getValue_array,Gt.prototype._getValue_arrayElement,Gt.prototype._getValue_toArray];Gt.prototype.SetterByBindingTypeAndVersioning=[[Gt.prototype._setValue_direct,Gt.prototype._setValue_direct_setNeedsUpdate,Gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_array,Gt.prototype._setValue_array_setNeedsUpdate,Gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_arrayElement,Gt.prototype._setValue_arrayElement_setNeedsUpdate,Gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_fromArray,Gt.prototype._setValue_fromArray_setNeedsUpdate,Gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Vl=class{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;let s=t.tracks,a=s.length,o=new Array(a),c={endingStart:Xr,endingEnd:Xr};for(let u=0;u!==a;++u){let l=s[u].createInterpolant(null);o[u]=l,l.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Nc,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let r=this._clip.duration,s=e._clip.duration,a=s/r,o=r/s;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let r=this._mixer,s=r.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,u=o.sampleValues;return c[0]=s,c[1]=s+n,u[0]=e/a,u[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,u=this._propertyBindings;switch(this.blendMode){case bp:for(let l=0,h=c.length;l!==h;++l)c[l].evaluate(a),u[l].accumulateAdditive(o);break;case Dc:default:for(let l=0,h=c.length;l!==h;++l)c[l].evaluate(a),u[l].accumulate(r,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,r=this.time+e,s=this._loopCount,a=n===Sp;if(e===0)return s===-1?r:a&&(s&1)===1?t-r:r;if(n===Lc){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),r>=t||r<0){let o=Math.floor(r/t);r-=t*o,s+=Math.abs(o);let c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let u=e<0;this._setEndings(u,!u,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=s,this.time=r;if(a&&(s&1)===1)return t-r}return r}_setEndings(e,t,n){let r=this._interpolantSettings;n?(r.endingStart=Yr,r.endingEnd=Yr):(e?r.endingStart=this.zeroSlopeAtStart?Yr:Xr:r.endingStart=Oa,t?r.endingEnd=this.zeroSlopeAtEnd?Yr:Xr:r.endingEnd=Oa)}_scheduleFading(e,t,n){let r=this._mixer,s=r.time,a=this._weightInterpolant;a===null&&(a=r._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=s,c[0]=t,o[1]=s+e,c[1]=n,this}},Dg=new Float32Array(1),ro=class extends bi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,r=e._clip.tracks,s=r.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,u=this._bindingsByRootAndName,l=u[c];l===void 0&&(l={},u[c]=l);for(let h=0;h!==s;++h){let f=r[h],p=f.name,v=l[p];if(v!==void 0)++v.referenceCount,a[h]=v;else{if(v=a[h],v!==void 0){v._cacheIndex===null&&(++v.referenceCount,this._addInactiveBinding(v,c,p));continue}let y=t&&t._propertyBindings[h].binding.parsedPath;v=new Gl(Gt.create(n,p,y),f.ValueTypeName,f.getValueSize()),++v.referenceCount,this._addInactiveBinding(v,c,p),a[h]=v}o[h].resultBuffer=v.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,n)}let t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){let s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){let s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let r=this._actions,s=this._actionsByClip,a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=r.length,r.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,a=this._actionsByClip,o=a[s],c=o.knownActions,u=c[c.length-1],l=e._byClipCacheIndex;u._byClipCacheIndex=l,c[l]=u,c.pop(),e._byClipCacheIndex=null;let h=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],c.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){let s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){let r=this._bindingsByRootAndName,s=this._bindings,a=r[t];a===void 0&&(a={},r[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,r=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[r],c=t[t.length-1],u=e._cacheIndex;c._cacheIndex=u,t[u]=c,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[r]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new $a(new Float32Array(2),new Float32Array(2),1,Dg),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){let r=t||this._root,s=r.uuid,a=typeof e=="string"?ns.findByName(r,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],u=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Dc),c!==void 0){let h=c.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;u=c.knownActions[0],a===null&&(a=u._clip)}if(a===null)return null;let l=new Vl(this,a,t,n);return this._bindAction(l,u),this._addInactiveAction(l,o,s),l}existingAction(e,t){let n=t||this._root,r=n.uuid,s=typeof e=="string"?ns.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[r]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,r=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let u=0;u!==n;++u)t[u]._update(r,e,s,a);let o=this._bindings,c=this._nActiveBindings;for(let u=0;u!==c;++u)o[u].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,r=this._actionsByClip,s=r[n];if(s!==void 0){let a=s.knownActions;for(let o=0,c=a.length;o!==c;++o){let u=a[o];this._deactivateAction(u);let l=u._cacheIndex,h=t[t.length-1];u._cacheIndex=null,u._byClipCacheIndex=null,h._cacheIndex=l,t[l]=h,t.pop(),this._removeInactiveBindingsForAction(u)}delete r[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(let a in s){let o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Fh=class Fh{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};Fh.prototype.isMatrix2=!0;var hh=Fh;function Lh(i,e,t,n){let r=Og(n);switch(t){case Sh:return i*e;case $l:return i*e/r.components*r.byteLength;case Ql:return i*e/r.components*r.byteLength;case Nr:return i*e*2/r.components*r.byteLength;case ec:return i*e*2/r.components*r.byteLength;case bh:return i*e*3/r.components*r.byteLength;case jn:return i*e*4/r.components*r.byteLength;case tc:return i*e*4/r.components*r.byteLength;case po:case mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case go:case vo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ic:case sc:return Math.max(i,16)*Math.max(e,8)/4;case nc:case rc:return Math.max(i,8)*Math.max(e,8)/2;case ac:case oc:case cc:case uc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case lc:case xo:case hc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case dc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case pc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case mc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case gc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case vc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case xc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case _c:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case yc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Sc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case bc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Tc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ec:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case wc:case Ac:case Rc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Cc:case Ic:return Math.ceil(i/4)*Math.ceil(e/4)*8;case _o:case Pc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Og(i){switch(i){case qn:case xh:return{byteLength:1,components:1};case ra:case _h:case Sn:return{byteLength:2,components:1};case Jl:case jl:return{byteLength:2,components:4};case wi:case Zl:case Jn:return{byteLength:4,components:1};case yh:case Mh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?Qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function om(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Fg(i){let e=new WeakMap;function t(o,c){let u=o.array,l=o.usage,h=u.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,u,l),o.onUploadCallback();let p;if(u instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array!="undefined"&&u instanceof Float16Array)p=i.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=i.SHORT;else if(u instanceof Uint32Array)p=i.UNSIGNED_INT;else if(u instanceof Int32Array)p=i.INT;else if(u instanceof Int8Array)p=i.BYTE;else if(u instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,u){let l=c.array,h=c.updateRanges;if(i.bindBuffer(u,o),h.length===0)i.bufferSubData(u,0,l);else{h.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<h.length;p++){let v=h[f],y=h[p];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++f,h[f]=y)}h.length=f+1;for(let p=0,v=h.length;p<v;p++){let y=h[p];i.bufferSubData(u,y.start*l.BYTES_PER_ELEMENT,l,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let l=e.get(o);(!l||l.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=e.get(o);if(u===void 0)e.set(o,t(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,c),u.version=o.version}}return{get:r,remove:s,update:a}}var Hg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bg=`#ifdef USE_ALPHAHASH
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
#endif`,kg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wg=`#ifdef USE_AOMAP
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
#endif`,qg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xg=`#ifdef USE_BATCHING
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
#endif`,Yg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jg=`#ifdef USE_IRIDESCENCE
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
#endif`,$g=`#ifdef USE_BUMPMAP
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
#endif`,Qg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ev=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,av=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ov=`#define PI 3.141592653589793
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
} // validated`,lv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cv=`vec3 transformedNormal = objectNormal;
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
#endif`,uv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pv="gl_FragColor = linearToOutputTexel( gl_FragColor );",mv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gv=`#ifdef USE_ENVMAP
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
#endif`,vv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xv=`#ifdef USE_ENVMAP
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
#endif`,_v=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yv=`#ifdef USE_ENVMAP
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
#endif`,Mv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ev=`#ifdef USE_GRADIENTMAP
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
}`,wv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Av=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Iv=`#ifdef USE_ENVMAP
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
#endif`,Pv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ov=`PhysicalMaterial material;
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
#endif`,Uv=`uniform sampler2D dfgLUT;
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
}`,Fv=`
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
#endif`,Hv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kv=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,zv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kv=`#if defined( USE_POINTS_UV )
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
#endif`,Zv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$v=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ex=`#ifdef USE_MORPHTARGETS
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
#endif`,tx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ix=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ax=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ox=`#ifdef USE_NORMALMAP
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
#endif`,lx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ux=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,px=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_x=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bx=`float getShadowMask() {
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
}`,Tx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ex=`#ifdef USE_SKINNING
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
#endif`,wx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ax=`#ifdef USE_SKINNING
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
#endif`,Rx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ix=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Px=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lx=`#ifdef USE_TRANSMISSION
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
#endif`,Nx=`#ifdef USE_TRANSMISSION
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
#endif`,Dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Hx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bx=`uniform sampler2D t2D;
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
}`,kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wx=`#include <common>
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
}`,qx=`#if DEPTH_PACKING == 3200
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
}`,Xx=`#define DISTANCE
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
}`,Yx=`#define DISTANCE
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
}`,Kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jx=`uniform float scale;
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
}`,jx=`uniform vec3 diffuse;
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
}`,$x=`#include <common>
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
}`,Qx=`uniform vec3 diffuse;
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
}`,e_=`#define LAMBERT
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
}`,t_=`#define LAMBERT
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
}`,n_=`#define MATCAP
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
}`,i_=`#define MATCAP
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
}`,r_=`#define NORMAL
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
}`,s_=`#define NORMAL
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
}`,a_=`#define PHONG
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
}`,o_=`#define PHONG
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
}`,l_=`#define STANDARD
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
}`,c_=`#define STANDARD
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
}`,u_=`#define TOON
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
}`,h_=`#define TOON
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
}`,f_=`uniform float size;
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
}`,d_=`uniform vec3 diffuse;
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
}`,p_=`#include <common>
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
}`,m_=`uniform vec3 color;
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
}`,g_=`uniform float rotation;
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
}`,v_=`uniform vec3 diffuse;
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
}`,yt={alphahash_fragment:Hg,alphahash_pars_fragment:Bg,alphamap_fragment:kg,alphamap_pars_fragment:zg,alphatest_fragment:Gg,alphatest_pars_fragment:Vg,aomap_fragment:Wg,aomap_pars_fragment:qg,batching_pars_vertex:Xg,batching_vertex:Yg,begin_vertex:Kg,beginnormal_vertex:Zg,bsdfs:Jg,iridescence_fragment:jg,bumpmap_pars_fragment:$g,clipping_planes_fragment:Qg,clipping_planes_pars_fragment:ev,clipping_planes_pars_vertex:tv,clipping_planes_vertex:nv,color_fragment:iv,color_pars_fragment:rv,color_pars_vertex:sv,color_vertex:av,common:ov,cube_uv_reflection_fragment:lv,defaultnormal_vertex:cv,displacementmap_pars_vertex:uv,displacementmap_vertex:hv,emissivemap_fragment:fv,emissivemap_pars_fragment:dv,colorspace_fragment:pv,colorspace_pars_fragment:mv,envmap_fragment:gv,envmap_common_pars_fragment:vv,envmap_pars_fragment:xv,envmap_pars_vertex:_v,envmap_physical_pars_fragment:Iv,envmap_vertex:yv,fog_vertex:Mv,fog_pars_vertex:Sv,fog_fragment:bv,fog_pars_fragment:Tv,gradientmap_pars_fragment:Ev,lightmap_pars_fragment:wv,lights_lambert_fragment:Av,lights_lambert_pars_fragment:Rv,lights_pars_begin:Cv,lights_toon_fragment:Pv,lights_toon_pars_fragment:Lv,lights_phong_fragment:Nv,lights_phong_pars_fragment:Dv,lights_physical_fragment:Ov,lights_physical_pars_fragment:Uv,lights_fragment_begin:Fv,lights_fragment_maps:Hv,lights_fragment_end:Bv,lightprobes_pars_fragment:kv,logdepthbuf_fragment:zv,logdepthbuf_pars_fragment:Gv,logdepthbuf_pars_vertex:Vv,logdepthbuf_vertex:Wv,map_fragment:qv,map_pars_fragment:Xv,map_particle_fragment:Yv,map_particle_pars_fragment:Kv,metalnessmap_fragment:Zv,metalnessmap_pars_fragment:Jv,morphinstance_vertex:jv,morphcolor_vertex:$v,morphnormal_vertex:Qv,morphtarget_pars_vertex:ex,morphtarget_vertex:tx,normal_fragment_begin:nx,normal_fragment_maps:ix,normal_pars_fragment:rx,normal_pars_vertex:sx,normal_vertex:ax,normalmap_pars_fragment:ox,clearcoat_normal_fragment_begin:lx,clearcoat_normal_fragment_maps:cx,clearcoat_pars_fragment:ux,iridescence_pars_fragment:hx,opaque_fragment:fx,packing:dx,premultiplied_alpha_fragment:px,project_vertex:mx,dithering_fragment:gx,dithering_pars_fragment:vx,roughnessmap_fragment:xx,roughnessmap_pars_fragment:_x,shadowmap_pars_fragment:yx,shadowmap_pars_vertex:Mx,shadowmap_vertex:Sx,shadowmask_pars_fragment:bx,skinbase_vertex:Tx,skinning_pars_vertex:Ex,skinning_vertex:wx,skinnormal_vertex:Ax,specularmap_fragment:Rx,specularmap_pars_fragment:Cx,tonemapping_fragment:Ix,tonemapping_pars_fragment:Px,transmission_fragment:Lx,transmission_pars_fragment:Nx,uv_pars_fragment:Dx,uv_pars_vertex:Ox,uv_vertex:Ux,worldpos_vertex:Fx,background_vert:Hx,background_frag:Bx,backgroundCube_vert:kx,backgroundCube_frag:zx,cube_vert:Gx,cube_frag:Vx,depth_vert:Wx,depth_frag:qx,distance_vert:Xx,distance_frag:Yx,equirect_vert:Kx,equirect_frag:Zx,linedashed_vert:Jx,linedashed_frag:jx,meshbasic_vert:$x,meshbasic_frag:Qx,meshlambert_vert:e_,meshlambert_frag:t_,meshmatcap_vert:n_,meshmatcap_frag:i_,meshnormal_vert:r_,meshnormal_frag:s_,meshphong_vert:a_,meshphong_frag:o_,meshphysical_vert:l_,meshphysical_frag:c_,meshtoon_vert:u_,meshtoon_frag:h_,points_vert:f_,points_frag:d_,shadow_vert:p_,shadow_frag:m_,sprite_vert:g_,sprite_frag:v_},Ue={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Gi={basic:{uniforms:Pn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:Pn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Ke(0)},envMapIntensity:{value:1}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:Pn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:Pn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:Pn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new Ke(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:Pn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:Pn([Ue.points,Ue.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:Pn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:Pn([Ue.common,Ue.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:Pn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:Pn([Ue.sprite,Ue.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distance:{uniforms:Pn([Ue.common,Ue.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distance_vert,fragmentShader:yt.distance_frag},shadow:{uniforms:Pn([Ue.lights,Ue.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};Gi.physical={uniforms:Pn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};var Fc={r:0,b:0,g:0},x_=new dt,lm=new ht;lm.set(-1,0,0,0,1,0,0,0,1);function __(i,e,t,n,r,s){let a=new Ke(0),o=r===!0?0:1,c,u,l=null,h=0,f=null;function p(_){let A=_.isScene===!0?_.background:null;if(A&&A.isTexture){let w=_.backgroundBlurriness>0;A=e.get(A,w)}return A}function v(_){let A=!1,w=p(_);w===null?g(a,o):w&&w.isColor&&(g(w,1),A=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,s):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(_,A){let w=p(A);w&&(w.isCubeTexture||w.mapping===fo)?(u===void 0&&(u=new ke(new on(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:cs(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,L,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=w,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(x_.makeRotationFromEuler(A.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(lm),u.material.toneMapped=vt.getTransfer(w.colorSpace)!==Lt,(l!==w||h!==w.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,l=w,h=w.version,f=i.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new ke(new wr(2,2),new en({name:"BackgroundMaterial",uniforms:cs(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=vt.getTransfer(w.colorSpace)!==Lt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(l!==w||h!==w.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,l=w,h=w.version,f=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function g(_,A){_.getRGB(Fc,Ch(i)),t.buffers.color.setClear(Fc.r,Fc.g,Fc.b,A,s)}function m(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,A=1){a.set(_),o=A,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,g(a,o)},render:v,addToRenderList:y,dispose:m}}function y_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,a=!1;function o(R,M,P,O,k){let X=!1,$=h(R,O,P,M);s!==$&&(s=$,u(s.object)),X=p(R,O,P,k),X&&v(R,O,P,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,w(R,M,P,O),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return i.createVertexArray()}function u(R){return i.bindVertexArray(R)}function l(R){return i.deleteVertexArray(R)}function h(R,M,P,O){let k=O.wireframe===!0,X=n[M.id];X===void 0&&(X={},n[M.id]=X);let $=R.isInstancedMesh===!0?R.id:0,ne=X[$];ne===void 0&&(ne={},X[$]=ne);let re=ne[P.id];re===void 0&&(re={},ne[P.id]=re);let oe=re[k];return oe===void 0&&(oe=f(c()),re[k]=oe),oe}function f(R){let M=[],P=[],O=[];for(let k=0;k<t;k++)M[k]=0,P[k]=0,O[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:P,attributeDivisors:O,object:R,attributes:{},index:null}}function p(R,M,P,O){let k=s.attributes,X=M.attributes,$=0,ne=P.getAttributes();for(let re in ne)if(ne[re].location>=0){let ae=k[re],Pe=X[re];if(Pe===void 0&&(re==="instanceMatrix"&&R.instanceMatrix&&(Pe=R.instanceMatrix),re==="instanceColor"&&R.instanceColor&&(Pe=R.instanceColor)),ae===void 0||ae.attribute!==Pe||Pe&&ae.data!==Pe.data)return!0;$++}return s.attributesNum!==$||s.index!==O}function v(R,M,P,O){let k={},X=M.attributes,$=0,ne=P.getAttributes();for(let re in ne)if(ne[re].location>=0){let ae=X[re];ae===void 0&&(re==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),re==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor));let Pe={};Pe.attribute=ae,ae&&ae.data&&(Pe.data=ae.data),k[re]=Pe,$++}s.attributes=k,s.attributesNum=$,s.index=O}function y(){let R=s.newAttributes;for(let M=0,P=R.length;M<P;M++)R[M]=0}function g(R){m(R,0)}function m(R,M){let P=s.newAttributes,O=s.enabledAttributes,k=s.attributeDivisors;P[R]=1,O[R]===0&&(i.enableVertexAttribArray(R),O[R]=1),k[R]!==M&&(i.vertexAttribDivisor(R,M),k[R]=M)}function _(){let R=s.newAttributes,M=s.enabledAttributes;for(let P=0,O=M.length;P<O;P++)M[P]!==R[P]&&(i.disableVertexAttribArray(P),M[P]=0)}function A(R,M,P,O,k,X,$){$===!0?i.vertexAttribIPointer(R,M,P,k,X):i.vertexAttribPointer(R,M,P,O,k,X)}function w(R,M,P,O){y();let k=O.attributes,X=P.getAttributes(),$=M.defaultAttributeValues;for(let ne in X){let re=X[ne];if(re.location>=0){let oe=k[ne];if(oe===void 0&&(ne==="instanceMatrix"&&R.instanceMatrix&&(oe=R.instanceMatrix),ne==="instanceColor"&&R.instanceColor&&(oe=R.instanceColor)),oe!==void 0){let ae=oe.normalized,Pe=oe.itemSize,He=e.get(oe);if(He===void 0)continue;let tt=He.buffer,at=He.type,rt=He.bytesPerElement,le=at===i.INT||at===i.UNSIGNED_INT||oe.gpuType===Zl;if(oe.isInterleavedBufferAttribute){let K=oe.data,ce=K.stride,Me=oe.offset;if(K.isInstancedInterleavedBuffer){for(let he=0;he<re.locationSize;he++)m(re.location+he,K.meshPerAttribute);R.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let he=0;he<re.locationSize;he++)g(re.location+he);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let he=0;he<re.locationSize;he++)A(re.location+he,Pe/re.locationSize,at,ae,ce*rt,(Me+Pe/re.locationSize*he)*rt,le)}else{if(oe.isInstancedBufferAttribute){for(let K=0;K<re.locationSize;K++)m(re.location+K,oe.meshPerAttribute);R.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let K=0;K<re.locationSize;K++)g(re.location+K);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let K=0;K<re.locationSize;K++)A(re.location+K,Pe/re.locationSize,at,ae,Pe*rt,Pe/re.locationSize*K*rt,le)}}else if($!==void 0){let ae=$[ne];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(re.location,ae);break;case 3:i.vertexAttrib3fv(re.location,ae);break;case 4:i.vertexAttrib4fv(re.location,ae);break;default:i.vertexAttrib1fv(re.location,ae)}}}}_()}function I(){x();for(let R in n){let M=n[R];for(let P in M){let O=M[P];for(let k in O){let X=O[k];for(let $ in X)l(X[$].object),delete X[$];delete O[k]}}delete n[R]}}function L(R){if(n[R.id]===void 0)return;let M=n[R.id];for(let P in M){let O=M[P];for(let k in O){let X=O[k];for(let $ in X)l(X[$].object),delete X[$];delete O[k]}}delete n[R.id]}function D(R){for(let M in n){let P=n[M];for(let O in P){let k=P[O];if(k[R.id]===void 0)continue;let X=k[R.id];for(let $ in X)l(X[$].object),delete X[$];delete k[R.id]}}}function S(R){for(let M in n){let P=n[M],O=R.isInstancedMesh===!0?R.id:0,k=P[O];if(k!==void 0){for(let X in k){let $=k[X];for(let ne in $)l($[ne].object),delete $[ne];delete k[X]}delete P[O],Object.keys(P).length===0&&delete n[M]}}}function x(){b(),a=!0,s!==r&&(s=r,u(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:x,resetDefaultState:b,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfObject:S,releaseStatesOfProgram:D,initAttributes:y,enableAttribute:g,disableUnusedAttributes:_}}function M_(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,l){l!==0&&(i.drawArraysInstanced(n,c,u,l),t.update(u,n,l))}function o(c,u,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,l);let f=0;for(let p=0;p<l;p++)f+=u[p];t.update(f,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function S_(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(D){return!(D!==jn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){let S=D===Sn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==qn&&D!==Jn&&!S&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp",l=c(u);l!==u&&(Qe("WebGLRenderer:",u,"not supported, using",l,"instead."),u=l);let h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=i.getParameter(i.MAX_SAMPLES),L=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:A,maxFragmentUniforms:w,maxSamples:I,samples:L}}function b_(i){let e=this,t=null,n=0,r=!1,s=!1,a=new _i,o=new ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||n!==0||r;return r=f,n=h.length,p},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=l(h,f,0)},this.setState=function(h,f,p){let v=h.clippingPlanes,y=h.clipIntersection,g=h.clipShadows,m=i.get(h);if(!r||v===null||v.length===0||s&&!g)s?l(null):u();else{let _=s?0:n,A=_*4,w=m.clippingState||null;c.value=w,w=l(v,f,A,p);for(let I=0;I!==A;++I)w[I]=t[I];m.clippingState=w,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(h,f,p,v){let y=h!==null?h.length:0,g=null;if(y!==0){if(g=c.value,v!==!0||g===null){let m=p+y*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let A=0,w=p;A!==y;++A,w+=4)a.copy(h[A]).applyMatrix4(_,o),a.normal.toArray(g,w),g[w+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}var ca=4,T_=6,E_=20,w_=256,So=new Bi,kp=new Ke,Hh=null,Bh=0,kh=0,zh=!1,A_=new j,us=new j,ha=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:o=A_}=s;Hh=this._renderer.getRenderTarget(),Bh=this._renderer.getActiveCubeFace(),kh=this._renderer.getActiveMipmapLevel(),zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Hh,Bh,kh),this._renderer.xr.enabled=zh,e.scissorTest=!1,la(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pr||e.mapping===os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hh=this._renderer.getRenderTarget(),Bh=this._renderer.getActiveCubeFace(),kh=this._renderer.getActiveMipmapLevel(),zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:Sn,format:jn,colorSpace:Un,depthBuffer:!1},r=zp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zp(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=R_(s)),this._blurMaterial=I_(s,e,t),this._ggxMaterial=C_(s,e,t)}return r}_compileMaterial(e){let t=new ke(new Kt,e);this._renderer.compile(t,So)}_sceneToCubeUV(e,t,n,r,s){let c=new sn(90,1,t,n),u=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(kp),h.toneMapping=Ti,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ke(new on,new In({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,g=y.material,m=!1,_=e.background;_?_.isColor&&(g.color.copy(_),e.background=null,m=!0):(g.color.copy(kp),m=!0);for(let A=0;A<6;A++){let w=A%3;w===0?(c.up.set(0,u[A],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+l[A],s.y,s.z)):w===1?(c.up.set(0,0,u[A]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+l[A],s.z)):(c.up.set(0,u[A],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+l[A]));let I=this._cubeSize;la(r,w*I,A>2?I:0,I,I),h.setRenderTarget(r),m&&h.render(y,c),h.render(e,c)}h.toneMapping=p,h.autoClear=f,e.background=_}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Pr||e.mapping===os;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gp());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;la(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,So)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,u=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),h=Math.sqrt(u*u-l*l),f=u*1.25,p=h*f,{_lodMax:v}=this,y=this._sizeLods[n],g=3*y*(n>v-ca?n-v+ca:0),m=4*(this._cubeSize-y);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=v-t,la(s,g,m,3*y,2*y),r.setRenderTarget(s),r.render(o,So),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=v-n,la(e,g,m,3*y,2*y),r.setRenderTarget(e),r.render(o,So)}_blur(e,t,n,r){let s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,r,s){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[r];c.material=o;let u=o.uniforms;u.envMap.value=e.texture,u.sigma.value=s,u.mipInt.value=this._lodMax-n;let l=this._sizeLods[r],h=3*l*(r>this._lodMax-ca?r-this._lodMax+ca:0),f=4*(this._cubeSize-l);la(t,h,f,3*l,2*l),a.setRenderTarget(t),a.render(c,So)}};function R_(i){let e=[],t=[],n=i,r=i-ca+1+T_;for(let s=0;s<r;s++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,u=1+o,l=[c,c,u,c,u,u,c,c,u,u,c,u],h=6,f=6,p=3,v=new Float32Array(p*f*h),y=new Float32Array(p*f*h);for(let m=0;m<h;m++){let _=m%3*2/3-1,A=m>2?0:-1,w=[_,A,0,_+2/3,A,0,_+2/3,A+1,0,_,A,0,_+2/3,A+1,0,_,A+1,0];v.set(w,p*f*m);for(let I=0;I<f;I++){let L=l[I*2]*2-1,D=l[I*2+1]*2-1;m===0?us.set(1,D,L):m===1?us.set(-L,1,-D):m===2?us.set(-L,D,1):m===3?us.set(-1,D,-L):m===4?us.set(-L,-1,D):us.set(L,D,-1),us.toArray(y,(m*f+I)*p)}}let g=new Kt;g.setAttribute("position",new jt(v,p)),g.setAttribute("outputDirection",new jt(y,p)),t.push(new ke(g,null)),n>ca&&n--}return{lodMeshes:t,sizeLods:e}}function zp(i,e,t){let n=new dn(i,e,t);return n.texture.mapping=fo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function la(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function C_(i,e,t){return new en({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:w_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zc(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function I_(i,e,t){return new en({name:"SphericalGaussianBlur",defines:{SAMPLES:E_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:zc(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Gp(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zc(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Vp(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function zc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Bc=class extends dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ya(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new on(5,5,5),s=new en({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:li});s.uniforms.tEquirect.value=t;let a=new ke(r,s),o=t.minFilter;return t.minFilter===Ei&&(t.minFilter=an),new kl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}};function P_(i){let e=new WeakMap,t=new WeakMap,n=null;function r(f,p=!1){return f==null?null:p?a(f):s(f)}function s(f){if(f&&f.isTexture){let p=f.mapping;if(p===Xl||p===Yl)if(e.has(f)){let v=e.get(f).texture;return o(v,f.mapping)}else{let v=f.image;if(v&&v.height>0){let y=new Bc(v.height);return y.fromEquirectangularTexture(i,f),e.set(f,y),f.addEventListener("dispose",u),o(y.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let p=f.mapping,v=p===Xl||p===Yl,y=p===Pr||p===os;if(v||y){let g=t.get(f),m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new ha(i)),g=v?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{let _=f.image;return v&&_&&_.height>0||y&&_&&c(_)?(n===null&&(n=new ha(i)),g=v?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",l),g.texture):null}}}return f}function o(f,p){return p===Xl?f.mapping=Pr:p===Yl&&(f.mapping=os),f}function c(f){let p=0,v=6;for(let y=0;y<v;y++)f[y]!==void 0&&p++;return p===v}function u(f){let p=f.target;p.removeEventListener("dispose",u);let v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function l(f){let p=f.target;p.removeEventListener("dispose",l);let v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function L_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Kr("WebGLRenderer: "+n+" extension not supported."),r}}}function N_(i,e,t,n){let r={},s=new WeakMap;function a(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",a),delete r[f.id];let p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(h){let f=h.attributes;for(let p in f)e.update(f[p],i.ARRAY_BUFFER)}function u(h){let f=[],p=h.index,v=h.attributes.position,y=0;if(v===void 0)return;if(p!==null){let _=p.array;y=p.version;for(let A=0,w=_.length;A<w;A+=3){let I=_[A+0],L=_[A+1],D=_[A+2];f.push(I,L,L,D,D,I)}}else{let _=v.array;y=v.version;for(let A=0,w=_.length/3-1;A<w;A+=3){let I=A+0,L=A+1,D=A+2;f.push(I,L,L,D,D,I)}}let g=new(v.count>=65535?Ga:za)(f,1);g.version=y;let m=s.get(h);m&&e.remove(m),s.set(h,g)}function l(h){let f=s.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&u(h)}else u(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:l}}function D_(i,e,t){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,f){i.drawElements(n,f,s,h*a),t.update(f,n,1)}function u(h,f,p){p!==0&&(i.drawElementsInstanced(n,f,s,h*a,p),t.update(f,n,p))}function l(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,p);let y=0;for(let g=0;g<p;g++)y+=f[g];t.update(y,n,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=l}function O_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:lt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function U_(i,e,t){let n=new WeakMap,r=new Ht;function s(a,o,c){let u=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=l!==void 0?l.length:0,f=n.get(o);if(f===void 0||f.count!==h){let x=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",x)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],A=0;p===!0&&(A=1),v===!0&&(A=2),y===!0&&(A=3);let w=o.attributes.position.count*A,I=1;w>e.maxTextureSize&&(I=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);let L=new Float32Array(w*I*4*h),D=new Ha(L,w,I,h);D.type=Jn,D.needsUpdate=!0;let S=A*4;for(let b=0;b<h;b++){let R=g[b],M=m[b],P=_[b],O=w*I*4*b;for(let k=0;k<R.count;k++){let X=k*S;p===!0&&(r.fromBufferAttribute(R,k),L[O+X+0]=r.x,L[O+X+1]=r.y,L[O+X+2]=r.z,L[O+X+3]=0),v===!0&&(r.fromBufferAttribute(M,k),L[O+X+4]=r.x,L[O+X+5]=r.y,L[O+X+6]=r.z,L[O+X+7]=0),y===!0&&(r.fromBufferAttribute(P,k),L[O+X+8]=r.x,L[O+X+9]=r.y,L[O+X+10]=r.z,L[O+X+11]=P.itemSize===4?r.w:1)}}f={count:h,texture:D,size:new it(w,I)},n.set(o,f),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let y=0;y<u.length;y++)p+=u[y];let v=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function F_(i,e,t,n,r){let s=new WeakMap;function a(u){let l=r.render.frame,h=u.geometry,f=e.get(u,h);if(s.get(f)!==l&&(e.update(f),s.set(f,l)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),s.get(u)!==l&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),s.set(u,l))),u.isSkinnedMesh){let p=u.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return f}function o(){s=new WeakMap}function c(u){let l=u.target;l.removeEventListener("dispose",c),n.releaseStatesOfObject(l),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:o}}var H_={[ao]:"LINEAR_TONE_MAPPING",[oo]:"REINHARD_TONE_MAPPING",[lo]:"CINEON_TONE_MAPPING",[as]:"ACES_FILMIC_TONE_MAPPING",[uo]:"AGX_TONE_MAPPING",[ho]:"NEUTRAL_TONE_MAPPING",[co]:"CUSTOM_TONE_MAPPING"};function B_(i,e,t,n,r,s){let a=new dn(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,u=new Kt;u.setAttribute("position",new wt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new wt([0,2,0,0,2,0],2));let l=new Js({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new ke(u,l),f=new Bi(-1,1,1,-1,0,1),p=null,v=null,y=!1,g,m=null,_=[],A=!1;this.setSize=function(w,I){a.setSize(w,I),o!==null&&o.setSize(w,I),c!==null&&c.setSize(w,I);for(let L=0;L<_.length;L++){let D=_[L];D.setSize&&D.setSize(w,I)}},this.setEffects=function(w){_=w,A=_.length>0&&_[0].isRenderPass===!0;let I=a.width,L=a.height;_.length>0&&o===null&&(o=new dn(I,L,{type:Sn,depthBuffer:!1,stencilBuffer:!1}),c=new dn(I,L,{type:Sn,depthBuffer:!1,stencilBuffer:!1}));for(let D=0;D<_.length;D++){let S=_[D];S.setSize&&S.setSize(I,L)}},this.begin=function(w,I){if(y||w.toneMapping===Ti&&_.length===0)return!1;if(m=I,I!==null){let L=I.width,D=I.height;(a.width!==L||a.height!==D)&&this.setSize(L,D)}return A===!1&&w.setRenderTarget(a),g=w.toneMapping,w.toneMapping=Ti,!0},this.hasRenderPass=function(){return A},this.end=function(w,I){w.toneMapping=g,y=!0;let L=a,D=o;for(let S=0;S<_.length;S++){let x=_[S];x.enabled!==!1&&(x.render(w,D,L,I),x.needsSwap!==!1&&(L=D,D=D===o?c:o))}if(p!==w.outputColorSpace||v!==w.toneMapping){p=w.outputColorSpace,v=w.toneMapping,l.defines={},vt.getTransfer(p)===Lt&&(l.defines.SRGB_TRANSFER="");let S=H_[v];S&&(l.defines[S]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=L.texture,w.setRenderTarget(m),w.render(h,f),m=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),u.dispose(),l.dispose()}}var cm=new gn,Wh=new Er(1,1),um=new Ha,hm=new Rl,fm=new Ya,Wp=[],qp=[],Xp=new Float32Array(16),Yp=new Float32Array(9),Kp=new Float32Array(4);function fa(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Wp[r];if(s===void 0&&(s=new Float32Array(r),Wp[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function vn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function xn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Gc(i,e){let t=qp[e];t===void 0&&(t=new Int32Array(e),qp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function k_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function z_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2fv(this.addr,e),xn(t,e)}}function G_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vn(t,e))return;i.uniform3fv(this.addr,e),xn(t,e)}}function V_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4fv(this.addr,e),xn(t,e)}}function W_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,n))return;Kp.set(n),i.uniformMatrix2fv(this.addr,!1,Kp),xn(t,n)}}function q_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,n))return;Yp.set(n),i.uniformMatrix3fv(this.addr,!1,Yp),xn(t,n)}}function X_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,n))return;Xp.set(n),i.uniformMatrix4fv(this.addr,!1,Xp),xn(t,n)}}function Y_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function K_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2iv(this.addr,e),xn(t,e)}}function Z_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;i.uniform3iv(this.addr,e),xn(t,e)}}function J_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4iv(this.addr,e),xn(t,e)}}function j_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function $_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2uiv(this.addr,e),xn(t,e)}}function Q_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;i.uniform3uiv(this.addr,e),xn(t,e)}}function ey(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4uiv(this.addr,e),xn(t,e)}}function ty(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Wh.compareFunction=t.isReversedDepthBuffer()?Uc:Oc,s=Wh):s=cm,t.setTexture2D(e||s,r)}function ny(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||hm,r)}function iy(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||fm,r)}function ry(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||um,r)}function sy(i){switch(i){case 5126:return k_;case 35664:return z_;case 35665:return G_;case 35666:return V_;case 35674:return W_;case 35675:return q_;case 35676:return X_;case 5124:case 35670:return Y_;case 35667:case 35671:return K_;case 35668:case 35672:return Z_;case 35669:case 35673:return J_;case 5125:return j_;case 36294:return $_;case 36295:return Q_;case 36296:return ey;case 35678:case 36198:case 36298:case 36306:case 35682:return ty;case 35679:case 36299:case 36307:return ny;case 35680:case 36300:case 36308:case 36293:return iy;case 36289:case 36303:case 36311:case 36292:return ry}}function ay(i,e){i.uniform1fv(this.addr,e)}function oy(i,e){let t=fa(e,this.size,2);i.uniform2fv(this.addr,t)}function ly(i,e){let t=fa(e,this.size,3);i.uniform3fv(this.addr,t)}function cy(i,e){let t=fa(e,this.size,4);i.uniform4fv(this.addr,t)}function uy(i,e){let t=fa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function hy(i,e){let t=fa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function fy(i,e){let t=fa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function dy(i,e){i.uniform1iv(this.addr,e)}function py(i,e){i.uniform2iv(this.addr,e)}function my(i,e){i.uniform3iv(this.addr,e)}function gy(i,e){i.uniform4iv(this.addr,e)}function vy(i,e){i.uniform1uiv(this.addr,e)}function xy(i,e){i.uniform2uiv(this.addr,e)}function _y(i,e){i.uniform3uiv(this.addr,e)}function yy(i,e){i.uniform4uiv(this.addr,e)}function My(i,e,t){let n=this.cache,r=e.length,s=Gc(t,r);vn(n,s)||(i.uniform1iv(this.addr,s),xn(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Wh:a=cm;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Sy(i,e,t){let n=this.cache,r=e.length,s=Gc(t,r);vn(n,s)||(i.uniform1iv(this.addr,s),xn(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||hm,s[a])}function by(i,e,t){let n=this.cache,r=e.length,s=Gc(t,r);vn(n,s)||(i.uniform1iv(this.addr,s),xn(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||fm,s[a])}function Ty(i,e,t){let n=this.cache,r=e.length,s=Gc(t,r);vn(n,s)||(i.uniform1iv(this.addr,s),xn(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||um,s[a])}function Ey(i){switch(i){case 5126:return ay;case 35664:return oy;case 35665:return ly;case 35666:return cy;case 35674:return uy;case 35675:return hy;case 35676:return fy;case 5124:case 35670:return dy;case 35667:case 35671:return py;case 35668:case 35672:return my;case 35669:case 35673:return gy;case 5125:return vy;case 36294:return xy;case 36295:return _y;case 36296:return yy;case 35678:case 36198:case 36298:case 36306:case 35682:return My;case 35679:case 36299:case 36307:return Sy;case 35680:case 36300:case 36308:case 36293:return by;case 36289:case 36303:case 36311:case 36292:return Ty}}var qh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=sy(t.type)}},Xh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ey(t.type)}},Yh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},Gh=/(\w+)(\])?(\[|\.)?/g;function Zp(i,e){i.seq.push(e),i.map[e.id]=e}function wy(i,e,t){let n=i.name,r=n.length;for(Gh.lastIndex=0;;){let s=Gh.exec(n),a=Gh.lastIndex,o=s[1],c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){Zp(t,u===void 0?new qh(o,i,e):new Xh(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Yh(o),Zp(t,h)),t=h}}}var ua=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);wy(o,c,this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function Jp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Ay=37297,Ry=0;function Cy(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var jp=new ht;function Iy(i){vt._getMatrix(jp,vt.workingColorSpace,i);let e=`mat3( ${jp.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(i)){case Ua:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return Qe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function $p(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Cy(i.getShaderSource(e),o)}else return s}function Py(i,e){let t=Iy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Ly={[ao]:"Linear",[oo]:"Reinhard",[lo]:"Cineon",[as]:"ACESFilmic",[uo]:"AgX",[ho]:"Neutral",[co]:"Custom"};function Ny(i,e){let t=Ly[e];return t===void 0?(Qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Hc=new j;function Dy(){vt.getLuminanceCoefficients(Hc);let i=Hc.x.toFixed(4),e=Hc.y.toFixed(4),t=Hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Oy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(To).join(`
`)}function Uy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Fy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),a=s.name,o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function To(i){return i!==""}function Qp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function em(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Hy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kh(i){return i.replace(Hy,ky)}var By=new Map;function ky(i,e){let t=yt[e];if(t===void 0){let n=By.get(e);if(n!==void 0)t=yt[n],Qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Kh(t)}var zy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tm(i){return i.replace(zy,Gy)}function Gy(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function nm(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Vy={[so]:"SHADOWMAP_TYPE_PCF",[ta]:"SHADOWMAP_TYPE_VSM"};function Wy(i){return Vy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var qy={[Pr]:"ENVMAP_TYPE_CUBE",[os]:"ENVMAP_TYPE_CUBE",[fo]:"ENVMAP_TYPE_CUBE_UV"};function Xy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":qy[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Yy={[os]:"ENVMAP_MODE_REFRACTION"};function Ky(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Yy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Zy={[ql]:"ENVMAP_BLENDING_MULTIPLY",[_p]:"ENVMAP_BLENDING_MIX",[yp]:"ENVMAP_BLENDING_ADD"};function Jy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Zy[i.combine]||"ENVMAP_BLENDING_NONE"}function jy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function $y(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Wy(t),u=Xy(t),l=Ky(t),h=Jy(t),f=jy(t),p=Oy(t),v=Uy(s),y=r.createProgram(),g,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(To).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(To).join(`
`),m.length>0&&(m+=`
`)):(g=[nm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(To).join(`
`),m=[nm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ti?"#define TONE_MAPPING":"",t.toneMapping!==Ti?yt.tonemapping_pars_fragment:"",t.toneMapping!==Ti?Ny("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,Py("linearToOutputTexel",t.outputColorSpace),Dy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(To).join(`
`)),a=Kh(a),a=Qp(a,t),a=em(a,t),o=Kh(o),o=Qp(o,t),o=em(o,t),a=tm(a),o=tm(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let A=_+g+a,w=_+m+o,I=Jp(r,r.VERTEX_SHADER,A),L=Jp(r,r.FRAGMENT_SHADER,w);r.attachShader(y,I),r.attachShader(y,L),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function D(R){if(i.debug.checkShaderErrors){let M=r.getProgramInfoLog(y)||"",P=r.getShaderInfoLog(I)||"",O=r.getShaderInfoLog(L)||"",k=M.trim(),X=P.trim(),$=O.trim(),ne=!0,re=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,I,L);else{let oe=$p(r,I,"vertex"),ae=$p(r,L,"fragment");lt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+k+`
`+oe+`
`+ae)}else k!==""?Qe("WebGLProgram: Program Info Log:",k):(X===""||$==="")&&(re=!1);re&&(R.diagnostics={runnable:ne,programLog:k,vertexShader:{log:X,prefix:g},fragmentShader:{log:$,prefix:m}})}r.deleteShader(I),r.deleteShader(L),S=new ua(r,y),x=Fy(r,y)}let S;this.getUniforms=function(){return S===void 0&&D(this),S};let x;this.getAttributes=function(){return x===void 0&&D(this),x};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(y,Ay)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ry++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=I,this.fragmentShader=L,this}var Qy=0,Zh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Jh(e),t.set(e,n)),n}},Jh=class{constructor(e){this.id=Qy++,this.code=e,this.usedTimes=0}};function eM(i){return i===Nr||i===xo||i===_o}function tM(i,e,t,n,r,s){let a=new Ba,o=new Zh,c=new Set,u=[],l=new Map,h=n.logarithmicDepthBuffer,f=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function y(S,x,b,R,M,P){let O=R.fog,k=M.geometry,X=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?R.environment:null,$=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,ne=e.get(S.envMap||X,$),re=ne&&ne.mapping===fo?ne.image.height:null,oe=p[S.type];S.precision!==null&&(f=n.getMaxPrecision(S.precision),f!==S.precision&&Qe("WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let ae=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Pe=ae!==void 0?ae.length:0,He=0;k.morphAttributes.position!==void 0&&(He=1),k.morphAttributes.normal!==void 0&&(He=2),k.morphAttributes.color!==void 0&&(He=3);let tt,at,rt,le;if(oe){let kt=Gi[oe];tt=kt.vertexShader,at=kt.fragmentShader}else{tt=S.vertexShader,at=S.fragmentShader;let kt=o.getVertexShaderStage(S),It=o.getFragmentShaderStage(S);o.update(S,kt,It),rt=kt.id,le=It.id}let K=i.getRenderTarget(),ce=i.state.buffers.depth.getReversed(),Me=M.isInstancedMesh===!0,he=M.isBatchedMesh===!0,fe=!!S.map,ve=!!S.matcap,Ne=!!ne,qe=!!S.aoMap,Ze=!!S.lightMap,Ve=!!S.bumpMap&&S.wireframe===!1,be=!!S.normalMap,Ce=!!S.displacementMap,nt=!!S.emissiveMap,ot=!!S.metalnessMap,_t=!!S.roughnessMap,V=S.anisotropy>0,mt=S.clearcoat>0,Mt=S.dispersion>0,H=S.retroreflectivity>0,E=S.iridescence>0,N=S.sheen>0,U=S.transmission>0,F=V&&!!S.anisotropyMap,G=mt&&!!S.clearcoatMap,J=mt&&!!S.clearcoatNormalMap,W=mt&&!!S.clearcoatRoughnessMap,Y=E&&!!S.iridescenceMap,ue=E&&!!S.iridescenceThicknessMap,_e=N&&!!S.sheenColorMap,me=N&&!!S.sheenRoughnessMap,ye=!!S.specularMap,Ee=!!S.specularColorMap,ze=!!S.specularIntensityMap,Xe=U&&!!S.transmissionMap,q=U&&!!S.thicknessMap,Se=!!S.gradientMap,de=!!S.alphaMap,De=S.alphaTest>0,Fe=!!S.alphaHash,xe=!!S.extensions,$e=Ti;S.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&($e=i.toneMapping);let Je={shaderID:oe,shaderType:S.type,shaderName:S.name,vertexShader:tt,fragmentShader:at,defines:S.defines,customVertexShaderID:rt,customFragmentShaderID:le,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:he,batchingColor:he&&M._colorsTexture!==null,instancing:Me,instancingColor:Me&&M.instanceColor!==null,instancingMorph:Me&&M.morphTexture!==null,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:vt.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:fe,matcap:ve,envMap:Ne,envMapMode:Ne&&ne.mapping,envMapCubeUVHeight:re,aoMap:qe,lightMap:Ze,bumpMap:Ve,normalMap:be,displacementMap:Ce,emissiveMap:nt,normalMapObjectSpace:be&&S.normalMapType===Ep,normalMapTangentSpace:be&&S.normalMapType===Mo,packedNormalMap:be&&S.normalMapType===Mo&&eM(S.normalMap.format),metalnessMap:ot,roughnessMap:_t,anisotropy:V,anisotropyMap:F,clearcoat:mt,clearcoatMap:G,clearcoatNormalMap:J,clearcoatRoughnessMap:W,dispersion:Mt,retroreflection:H,iridescence:E,iridescenceMap:Y,iridescenceThicknessMap:ue,sheen:N,sheenColorMap:_e,sheenRoughnessMap:me,specularMap:ye,specularColorMap:Ee,specularIntensityMap:ze,transmission:U,transmissionMap:Xe,thicknessMap:q,gradientMap:Se,opaque:S.transparent===!1&&S.blending===na&&S.alphaToCoverage===!1,alphaMap:de,alphaTest:De,alphaHash:Fe,combine:S.combine,mapUv:fe&&v(S.map.channel),aoMapUv:qe&&v(S.aoMap.channel),lightMapUv:Ze&&v(S.lightMap.channel),bumpMapUv:Ve&&v(S.bumpMap.channel),normalMapUv:be&&v(S.normalMap.channel),displacementMapUv:Ce&&v(S.displacementMap.channel),emissiveMapUv:nt&&v(S.emissiveMap.channel),metalnessMapUv:ot&&v(S.metalnessMap.channel),roughnessMapUv:_t&&v(S.roughnessMap.channel),anisotropyMapUv:F&&v(S.anisotropyMap.channel),clearcoatMapUv:G&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:J&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:me&&v(S.sheenRoughnessMap.channel),specularMapUv:ye&&v(S.specularMap.channel),specularColorMapUv:Ee&&v(S.specularColorMap.channel),specularIntensityMapUv:ze&&v(S.specularIntensityMap.channel),transmissionMapUv:Xe&&v(S.transmissionMap.channel),thicknessMapUv:q&&v(S.thicknessMap.channel),alphaMapUv:de&&v(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(be||V),vertexNormals:!!k.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:M.isPoints===!0&&!!k.attributes.uv&&(fe||de),fog:!!O,useFog:S.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||k.attributes.normal===void 0&&be===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ce,skinning:M.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:He,numSunLights:x.sun.length,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numSunLightShadows:x.sunShadowMap.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numLightProbeGrids:P.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&b.length>0,shadowMapType:i.shadowMap.type,toneMapping:$e,decodeVideoTexture:fe&&S.map.isVideoTexture===!0&&vt.getTransfer(S.map.colorSpace)===Lt,decodeVideoTextureEmissive:nt&&S.emissiveMap.isVideoTexture===!0&&vt.getTransfer(S.emissiveMap.colorSpace)===Lt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Wn,flipSided:S.side===Mn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:xe&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&S.extensions.multiDraw===!0||he)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Je.vertexUv1s=c.has(1),Je.vertexUv2s=c.has(2),Je.vertexUv3s=c.has(3),c.clear(),Je}function g(S){let x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(let b in S.defines)x.push(b),x.push(S.defines[b]);return S.isRawShaderMaterial===!1&&(m(x,S),_(x,S),x.push(i.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function m(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numSunLights),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numSunLightShadows),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function _(S,x){a.disableAll(),x.instancing&&a.enable(0),x.instancingColor&&a.enable(1),x.instancingMorph&&a.enable(2),x.matcap&&a.enable(3),x.envMap&&a.enable(4),x.normalMapObjectSpace&&a.enable(5),x.normalMapTangentSpace&&a.enable(6),x.clearcoat&&a.enable(7),x.iridescence&&a.enable(8),x.alphaTest&&a.enable(9),x.vertexColors&&a.enable(10),x.vertexAlphas&&a.enable(11),x.vertexUv1s&&a.enable(12),x.vertexUv2s&&a.enable(13),x.vertexUv3s&&a.enable(14),x.vertexTangents&&a.enable(15),x.anisotropy&&a.enable(16),x.alphaHash&&a.enable(17),x.batching&&a.enable(18),x.dispersion&&a.enable(19),x.retroreflection&&a.enable(24),x.batchingColor&&a.enable(20),x.gradientMap&&a.enable(21),x.packedNormalMap&&a.enable(22),x.vertexNormals&&a.enable(23),S.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),x.numLightProbeGrids>0&&a.enable(22),x.hasPositionAttribute&&a.enable(23),S.push(a.mask)}function A(S){let x=p[S.type],b;if(x){let R=Gi[x];b=cr.clone(R.uniforms)}else b=S.uniforms;return b}function w(S,x){let b=l.get(x);return b!==void 0?++b.usedTimes:(b=new $y(i,x,S,r),u.push(b),l.set(x,b)),b}function I(S){if(--S.usedTimes===0){let x=u.indexOf(S);u[x]=u[u.length-1],u.pop(),l.delete(S.cacheKey),S.destroy()}}function L(S){o.remove(S)}function D(){o.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:A,acquireProgram:w,releaseProgram:I,releaseShaderCache:L,programs:u,dispose:D}}function nM(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function iM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function im(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function rm(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,v,y,g,m){let _=i[e];return _===void 0?(_={id:f.id,object:f,geometry:p,material:v,materialVariant:a(f),groupOrder:y,renderOrder:f.renderOrder,z:g,group:m},i[e]=_):(_.id=f.id,_.object=f,_.geometry=p,_.material=v,_.materialVariant=a(f),_.groupOrder=y,_.renderOrder=f.renderOrder,_.z=g,_.group=m),e++,_}function c(f,p,v,y,g,m,_){_.reversedDepth===!0&&(g=-g);let A=o(f,p,v,y,g,m);v.transmission>0?n.push(A):v.transparent===!0?r.push(A):t.push(A)}function u(f,p,v,y,g,m){let _=o(f,p,v,y,g,m);v.transmission>0?n.unshift(_):v.transparent===!0?r.unshift(_):t.unshift(_)}function l(f,p){t.length>1&&t.sort(f||iM),n.length>1&&n.sort(p||im),r.length>1&&r.sort(p||im)}function h(){for(let f=e,p=i.length;f<p;f++){let v=i[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:u,finish:h,sort:l}}function rM(){let i=new WeakMap;function e(n,r){let s=i.get(n),a;return s===void 0?(a=new rm,i.set(n,[a])):r>=s.length?(a=new rm,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function sM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new j,color:new Ke};break;case"SpotLight":t={position:new j,direction:new j,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new j,halfWidth:new j,halfHeight:new j};break}return i[e.id]=t,t}}}function aM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var oM=0;function lM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function cM(i){let e=new sM,t=aM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new j);let r=new j,s=new dt,a=new dt;function o(u){let l=0,h=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,v=0,y=0,g=0,m=0,_=0,A=0,w=0,I=0,L=0,D=0,S=0,x=0,b=0;u.sort(lM);for(let M=0,P=u.length;M<P;M++){let O=u[M],k=O.color,X=O.intensity,$=O.distance,ne=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===Nr?ne=O.shadow.map.texture:ne=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)l+=k.r*X,h+=k.g*X,f+=k.b*X;else if(O.isLightProbe){for(let re=0;re<9;re++)n.probe[re].addScaledVector(O.sh.coefficients[re],X);b++}else if(O.isSunLight){let re=e.get(O);if(re.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let oe=O.shadow,ae=t.get(O);ae.shadowIntensity=oe.intensity,ae.shadowBias=oe.bias,ae.shadowNormalBias=oe.normalBias,ae.shadowRadius=oe.radius,ae.shadowMapSize.copy(oe.mapSize).multiply(oe.getFrameExtents()),n.sunShadow[v]=ae,n.sunShadowMap[v]=ne;let Pe=oe.getViewportCount();for(let He=0;He<Pe;He++)n.sunShadowMatrix[y+He]=oe.getMatrix(He),n.sunShadowCascade[y+He]=oe._cascadeData[He];y+=Pe,v++}n.sun[p]=re,p++}else if(O.isDirectionalLight){let re=e.get(O);if(re.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let oe=O.shadow,ae=t.get(O);ae.shadowIntensity=oe.intensity,ae.shadowBias=oe.bias,ae.shadowNormalBias=oe.normalBias,ae.shadowRadius=oe.radius,ae.shadowMapSize=oe.mapSize,n.directionalShadow[g]=ae,n.directionalShadowMap[g]=ne,n.directionalShadowMatrix[g]=O.shadow.matrix,I++}n.directional[g]=re,g++}else if(O.isSpotLight){let re=e.get(O);re.position.setFromMatrixPosition(O.matrixWorld),re.color.copy(k).multiplyScalar(X),re.distance=$,re.coneCos=Math.cos(O.angle),re.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),re.decay=O.decay,n.spot[_]=re;let oe=O.shadow;if(O.map&&(n.spotLightMap[S]=O.map,S++,oe.updateMatrices(O),O.castShadow&&x++),n.spotLightMatrix[_]=oe.matrix,O.castShadow){let ae=t.get(O);ae.shadowIntensity=oe.intensity,ae.shadowBias=oe.bias,ae.shadowNormalBias=oe.normalBias,ae.shadowRadius=oe.radius,ae.shadowMapSize=oe.mapSize,n.spotShadow[_]=ae,n.spotShadowMap[_]=ne,D++}_++}else if(O.isRectAreaLight){let re=e.get(O);re.color.copy(k).multiplyScalar(X),re.halfWidth.set(O.width*.5,0,0),re.halfHeight.set(0,O.height*.5,0),n.rectArea[A]=re,A++}else if(O.isPointLight){let re=e.get(O);if(re.color.copy(O.color).multiplyScalar(O.intensity),re.distance=O.distance,re.decay=O.decay,O.castShadow){let oe=O.shadow,ae=t.get(O);ae.shadowIntensity=oe.intensity,ae.shadowBias=oe.bias,ae.shadowNormalBias=oe.normalBias,ae.shadowRadius=oe.radius,ae.shadowMapSize=oe.mapSize,ae.shadowCameraNear=oe.camera.near,ae.shadowCameraFar=oe.camera.far,n.pointShadow[m]=ae,n.pointShadowMap[m]=ne,n.pointShadowMatrix[m]=O.shadow.matrix,L++}n.point[m]=re,m++}else if(O.isHemisphereLight){let re=e.get(O);re.skyColor.copy(O.color).multiplyScalar(X),re.groundColor.copy(O.groundColor).multiplyScalar(X),n.hemi[w]=re,w++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ue.LTC_FLOAT_1,n.rectAreaLTC2=Ue.LTC_FLOAT_2):(n.rectAreaLTC1=Ue.LTC_HALF_1,n.rectAreaLTC2=Ue.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=h,n.ambient[2]=f;let R=n.hash;(R.sunLength!==p||R.directionalLength!==g||R.pointLength!==m||R.spotLength!==_||R.rectAreaLength!==A||R.hemiLength!==w||R.numSunShadows!==v||R.numDirectionalShadows!==I||R.numPointShadows!==L||R.numSpotShadows!==D||R.numSpotMaps!==S||R.numLightProbes!==b)&&(n.sun.length=p,n.directional.length=g,n.spot.length=_,n.rectArea.length=A,n.point.length=m,n.hemi.length=w,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.directionalShadowMatrix.length=I,n.pointShadow.length=L,n.pointShadowMap.length=L,n.pointShadowMatrix.length=L,n.spotShadow.length=D,n.spotShadowMap.length=D,n.spotLightMatrix.length=D+S-x,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=x,n.numLightProbes=b,R.sunLength=p,R.directionalLength=g,R.pointLength=m,R.spotLength=_,R.rectAreaLength=A,R.hemiLength=w,R.numSunShadows=v,R.numDirectionalShadows=I,R.numPointShadows=L,R.numSpotShadows=D,R.numSpotMaps=S,R.numLightProbes=b,n.version=oM++)}function c(u,l){let h=0,f=0,p=0,v=0,y=0,g=0,m=l.matrixWorldInverse;for(let _=0,A=u.length;_<A;_++){let w=u[_];if(w.isSunLight){let I=n.sun[h];I.direction.setFromMatrixPosition(w.matrixWorld),I.direction.transformDirection(m),h++}else if(w.isDirectionalLight){let I=n.directional[f];I.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(m),f++}else if(w.isSpotLight){let I=n.spot[v];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(m),I.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(m),v++}else if(w.isRectAreaLight){let I=n.rectArea[y];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(m),a.identity(),s.copy(w.matrixWorld),s.premultiply(m),a.extractRotation(s),I.halfWidth.set(w.width*.5,0,0),I.halfHeight.set(0,w.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),y++}else if(w.isPointLight){let I=n.point[p];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(m),p++}else if(w.isHemisphereLight){let I=n.hemi[g];I.direction.setFromMatrixPosition(w.matrixWorld),I.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function sm(i){let e=new cM(i),t=[],n=[],r=[];function s(f){h.camera=f,t.length=0,n.length=0,r.length=0}function a(f){t.push(f)}function o(f){n.push(f)}function c(f){r.push(f)}function u(){e.setup(t)}function l(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:u,setupLightsView:l,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function uM(i){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new sm(i),e.set(r,[o])):s>=a.length?(o=new sm(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var hM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fM=`uniform sampler2D shadow_pass;
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
}`,dM=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],pM=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],am=new dt,bo=new j,Vh=new j;function mM(i,e,t){let n=new qs,r=new it,s=new it,a=new Ht,o=new Ll,c=new Nl,u={},l=t.maxTextureSize,h={[ki]:Mn,[Mn]:ki,[Wn]:Wn},f=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:hM,fragmentShader:fM}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let v=new Kt;v.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ke(v,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=so;let m=this.type;this.render=function(L,D,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||L.length===0)return;this.type===ep&&(Qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=so);let x=i.getRenderTarget(),b=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),M=i.state;M.setBlending(li),M.buffers.depth.getReversed()===!0?M.buffers.color.setClear(0,0,0,0):M.buffers.color.setClear(1,1,1,1),M.buffers.depth.setTest(!0),M.setScissorTest(!1);let P=m!==this.type;P&&D.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(k=>k.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,k=L.length;O<k;O++){let X=L[O],$=X.shadow;if($===void 0){Qe("WebGLShadowMap:",X,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);let ne=$.getFrameExtents();r.multiply(ne),s.copy($.mapSize),(r.x>l||r.y>l)&&(r.x>l&&(s.x=Math.floor(l/ne.x),r.x=s.x*ne.x,$.mapSize.x=s.x),r.y>l&&(s.y=Math.floor(l/ne.y),r.y=s.y*ne.y,$.mapSize.y=s.y));let re=i.state.buffers.depth.getReversed();if($.camera._reversedDepth=re,$.map===null||P===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===ta){if(X.isPointLight){Qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new dn(r.x,r.y,{format:Nr,type:Sn,minFilter:an,magFilter:an,generateMipmaps:!1}),$.map.texture.name=X.name+".shadowMap",$.map.depthTexture=new Er(r.x,r.y,Jn),$.map.depthTexture.name=X.name+".shadowMapDepth",$.map.depthTexture.format=Oi,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Xt,$.map.depthTexture.magFilter=Xt}else X.isPointLight?($.map=new Bc(r.x),$.map.depthTexture=new Pl(r.x,wi)):($.map=new dn(r.x,r.y),$.map.depthTexture=new Er(r.x,r.y,wi)),$.map.depthTexture.name=X.name+".shadowMap",$.map.depthTexture.format=Oi,this.type===so?($.map.depthTexture.compareFunction=re?Uc:Oc,$.map.depthTexture.minFilter=an,$.map.depthTexture.magFilter=an):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Xt,$.map.depthTexture.magFilter=Xt);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==r.x||$.map.height!==r.y)&&$.map.setSize(r.x,r.y);let oe=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();X.isPointLight!==!0&&$.updateMatrices(X,S);for(let ae=0;ae<oe;ae++){let Pe=$.getCamera(ae);if(X.isPointLight){let He=$.camera,tt=$.matrix,at=X.distance||He.far;at!==He.far&&(He.far=at,He.updateProjectionMatrix()),bo.setFromMatrixPosition(X.matrixWorld),He.position.copy(bo),Vh.copy(He.position),Vh.add(dM[ae]),He.up.copy(pM[ae]),He.lookAt(Vh),He.updateMatrixWorld(),tt.makeTranslation(-bo.x,-bo.y,-bo.z),am.multiplyMatrices(He.projectionMatrix,He.matrixWorldInverse),$._frustum.setFromProjectionMatrix(am,He.coordinateSystem,He.reversedDepth)}if($.map.isWebGLCubeRenderTarget)i.setRenderTarget($.map,ae),i.clear();else{ae===0&&(i.setRenderTarget($.map),i.clear());let He=$.getViewport(ae);a.set(s.x*He.x,s.y*He.y,s.x*He.z,s.y*He.w),M.viewport(a)}n=$.getFrustum(ae),w(D,S,Pe,X,this.type)}$.isPointLightShadow!==!0&&this.type===ta&&_($,S),$.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(x,b,R)};function _(L,D){let S=e.update(y);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null?L.mapPass=new dn(r.x,r.y,{format:Nr,type:Sn}):(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)&&L.mapPass.setSize(L.map.width,L.map.height),f.uniforms.shadow_pass.value=L.map.depthTexture,f.uniforms.resolution.value.set(L.map.width,L.map.height),f.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(D,null,S,f,y,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value.set(L.map.width,L.map.height),p.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(D,null,S,p,y,null)}function A(L,D,S,x){let b=null,R=S.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(R!==void 0)b=R;else if(b=S.isPointLight===!0?c:o,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let M=b.uuid,P=D.uuid,O=u[M];O===void 0&&(O={},u[M]=O);let k=O[P];k===void 0&&(k=b.clone(),O[P]=k,D.addEventListener("dispose",I)),b=k}if(b.visible=D.visible,b.wireframe=D.wireframe,x===ta?b.side=D.shadowSide!==null?D.shadowSide:D.side:b.side=D.shadowSide!==null?D.shadowSide:h[D.side],b.alphaMap=D.alphaMap,b.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,b.map=D.map,b.clipShadows=D.clipShadows,b.clippingPlanes=D.clippingPlanes,b.clipIntersection=D.clipIntersection,b.displacementMap=D.displacementMap,b.displacementScale=D.displacementScale,b.displacementBias=D.displacementBias,b.wireframeLinewidth=D.wireframeLinewidth,b.linewidth=D.linewidth,S.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let M=i.properties.get(b);M.light=S}return b}function w(L,D,S,x,b){if(L.visible===!1)return;if(L.layers.test(D.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&b===ta)&&(!L.frustumCulled||L.intersectsFrustum(n))){L.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,L.matrixWorld);let P=e.update(L),O=L.material;if(Array.isArray(O)){let k=P.groups;for(let X=0,$=k.length;X<$;X++){let ne=k[X],re=O[ne.materialIndex];if(re&&re.visible){let oe=A(L,re,x,b);L.onBeforeShadow(i,L,D,S,P,oe,ne),i.renderBufferDirect(S,null,P,oe,L,ne),L.onAfterShadow(i,L,D,S,P,oe,ne)}}}else if(O.visible){let k=A(L,O,x,b);L.onBeforeShadow(i,L,D,S,P,k,null),i.renderBufferDirect(S,null,P,k,L,null),L.onAfterShadow(i,L,D,S,P,k,null)}}let M=L.children;for(let P=0,O=M.length;P<O;P++)w(M[P],D,S,x,b)}function I(L){L.target.removeEventListener("dispose",I);for(let S in u){let x=u[S],b=L.target.uuid;b in x&&(x[b].dispose(),delete x[b])}}}function gM(i,e){function t(){let q=!1,Se=new Ht,de=null,De=new Ht(0,0,0,0);return{setMask:function(Fe){de!==Fe&&!q&&(i.colorMask(Fe,Fe,Fe,Fe),de=Fe)},setLocked:function(Fe){q=Fe},setClear:function(Fe,xe,$e,Je,kt){kt===!0&&(Fe*=Je,xe*=Je,$e*=Je),Se.set(Fe,xe,$e,Je),De.equals(Se)===!1&&(i.clearColor(Fe,xe,$e,Je),De.copy(Se))},reset:function(){q=!1,de=null,De.set(-1,0,0,0)}}}function n(){let q=!1,Se=!1,de=null,De=null,Fe=null;return{setReversed:function(xe){if(Se!==xe){let $e=e.get("EXT_clip_control");xe?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),Se=xe;let Je=Fe;Fe=null,this.setClear(Je)}},getReversed:function(){return Se},setTest:function(xe){xe?K(i.DEPTH_TEST):ce(i.DEPTH_TEST)},setMask:function(xe){de!==xe&&!q&&(i.depthMask(xe),de=xe)},setFunc:function(xe){if(Se&&(xe=Up[xe]),De!==xe){switch(xe){case _l:i.depthFunc(i.NEVER);break;case yl:i.depthFunc(i.ALWAYS);break;case Ml:i.depthFunc(i.LESS);break;case Os:i.depthFunc(i.LEQUAL);break;case Sl:i.depthFunc(i.EQUAL);break;case bl:i.depthFunc(i.GEQUAL);break;case Tl:i.depthFunc(i.GREATER);break;case El:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}De=xe}},setLocked:function(xe){q=xe},setClear:function(xe){Fe!==xe&&(Fe=xe,Se&&(xe=1-xe),i.clearDepth(xe))},reset:function(){q=!1,de=null,De=null,Fe=null,Se=!1}}}function r(){let q=!1,Se=null,de=null,De=null,Fe=null,xe=null,$e=null,Je=null,kt=null;return{setTest:function(It){q||(It?K(i.STENCIL_TEST):ce(i.STENCIL_TEST))},setMask:function(It){Se!==It&&!q&&(i.stencilMask(It),Se=It)},setFunc:function(It,Xn,Bn){(de!==It||De!==Xn||Fe!==Bn)&&(i.stencilFunc(It,Xn,Bn),de=It,De=Xn,Fe=Bn)},setOp:function(It,Xn,Bn){(xe!==It||$e!==Xn||Je!==Bn)&&(i.stencilOp(It,Xn,Bn),xe=It,$e=Xn,Je=Bn)},setLocked:function(It){q=It},setClear:function(It){kt!==It&&(i.clearStencil(It),kt=It)},reset:function(){q=!1,Se=null,de=null,De=null,Fe=null,xe=null,$e=null,Je=null,kt=null}}}let s=new t,a=new n,o=new r,c=new WeakMap,u=new WeakMap,l={},h={},f={},p=new WeakMap,v=[],y=null,g=!1,m=null,_=null,A=null,w=null,I=null,L=null,D=null,S=new Ke(0,0,0),x=0,b=!1,R=null,M=null,P=null,O=null,k=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,ne=0,re=i.getParameter(i.VERSION);re.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(re)[1]),$=ne>=1):re.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),$=ne>=2);let oe=null,ae={},Pe=i.getParameter(i.SCISSOR_BOX),He=i.getParameter(i.VIEWPORT),tt=new Ht().fromArray(Pe),at=new Ht().fromArray(He);function rt(q,Se,de,De){let Fe=new Uint8Array(4),xe=i.createTexture();i.bindTexture(q,xe),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $e=0;$e<de;$e++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(Se,0,i.RGBA,1,1,De,0,i.RGBA,i.UNSIGNED_BYTE,Fe):i.texImage2D(Se+$e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Fe);return xe}let le={};le[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),le[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),le[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(i.DEPTH_TEST),a.setFunc(Os),Ve(!1),be(fh),K(i.CULL_FACE),qe(li);function K(q){l[q]!==!0&&(i.enable(q),l[q]=!0)}function ce(q){l[q]!==!1&&(i.disable(q),l[q]=!1)}function Me(q,Se){return f[q]!==Se?(i.bindFramebuffer(q,Se),f[q]=Se,q===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Se),q===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Se),!0):!1}function he(q,Se){let de=v,De=!1;if(q){de=p.get(Se),de===void 0&&(de=[],p.set(Se,de));let Fe=q.textures;if(de.length!==Fe.length||de[0]!==i.COLOR_ATTACHMENT0){for(let xe=0,$e=Fe.length;xe<$e;xe++)de[xe]=i.COLOR_ATTACHMENT0+xe;de.length=Fe.length,De=!0}}else de[0]!==i.BACK&&(de[0]=i.BACK,De=!0);De&&i.drawBuffers(de)}function fe(q){return y!==q?(i.useProgram(q),y=q,!0):!1}let ve={[ss]:i.FUNC_ADD,[np]:i.FUNC_SUBTRACT,[ip]:i.FUNC_REVERSE_SUBTRACT};ve[rp]=i.MIN,ve[sp]=i.MAX;let Ne={[ap]:i.ZERO,[op]:i.ONE,[lp]:i.SRC_COLOR,[mh]:i.SRC_ALPHA,[pp]:i.SRC_ALPHA_SATURATE,[fp]:i.DST_COLOR,[up]:i.DST_ALPHA,[cp]:i.ONE_MINUS_SRC_COLOR,[gh]:i.ONE_MINUS_SRC_ALPHA,[dp]:i.ONE_MINUS_DST_COLOR,[hp]:i.ONE_MINUS_DST_ALPHA,[mp]:i.CONSTANT_COLOR,[gp]:i.ONE_MINUS_CONSTANT_COLOR,[vp]:i.CONSTANT_ALPHA,[xp]:i.ONE_MINUS_CONSTANT_ALPHA};function qe(q,Se,de,De,Fe,xe,$e,Je,kt,It){if(q===li){g===!0&&(ce(i.BLEND),g=!1);return}if(g===!1&&(K(i.BLEND),g=!0),q!==tp){if(q!==m||It!==b){if((_!==ss||I!==ss)&&(i.blendEquation(i.FUNC_ADD),_=ss,I=ss),It)switch(q){case na:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lr:i.blendFunc(i.ONE,i.ONE);break;case dh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ph:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:lt("WebGLState: Invalid blending: ",q);break}else switch(q){case na:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case dh:lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ph:lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:lt("WebGLState: Invalid blending: ",q);break}A=null,w=null,L=null,D=null,S.set(0,0,0),x=0,m=q,b=It}return}Fe=Fe||Se,xe=xe||de,$e=$e||De,(Se!==_||Fe!==I)&&(i.blendEquationSeparate(ve[Se],ve[Fe]),_=Se,I=Fe),(de!==A||De!==w||xe!==L||$e!==D)&&(i.blendFuncSeparate(Ne[de],Ne[De],Ne[xe],Ne[$e]),A=de,w=De,L=xe,D=$e),(Je.equals(S)===!1||kt!==x)&&(i.blendColor(Je.r,Je.g,Je.b,kt),S.copy(Je),x=kt),m=q,b=!1}function Ze(q,Se){q.side===Wn?ce(i.CULL_FACE):K(i.CULL_FACE);let de=q.side===Mn;Se&&(de=!de),Ve(de),q.blending===na&&q.transparent===!1?qe(li):qe(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),a.setFunc(q.depthFunc),a.setTest(q.depthTest),a.setMask(q.depthWrite),s.setMask(q.colorWrite);let De=q.stencilWrite;o.setTest(De),De&&(o.setMask(q.stencilWriteMask),o.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),o.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),nt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(q){R!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),R=q)}function be(q){q!==$d?(K(i.CULL_FACE),q!==M&&(q===fh?i.cullFace(i.BACK):q===Qd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ce(i.CULL_FACE),M=q}function Ce(q){q!==P&&($&&i.lineWidth(q),P=q)}function nt(q,Se,de){q?(K(i.POLYGON_OFFSET_FILL),(O!==Se||k!==de)&&(O=Se,k=de,a.getReversed()&&(Se=-Se),i.polygonOffset(Se,de))):ce(i.POLYGON_OFFSET_FILL)}function ot(q){q?K(i.SCISSOR_TEST):ce(i.SCISSOR_TEST)}function _t(q){q===void 0&&(q=i.TEXTURE0+X-1),oe!==q&&(i.activeTexture(q),oe=q)}function V(q,Se,de){de===void 0&&(oe===null?de=i.TEXTURE0+X-1:de=oe);let De=ae[de];De===void 0&&(De={type:void 0,texture:void 0},ae[de]=De),(De.type!==q||De.texture!==Se)&&(oe!==de&&(i.activeTexture(de),oe=de),i.bindTexture(q,Se||le[q]),De.type=q,De.texture=Se)}function mt(){let q=ae[oe];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function Mt(){try{i.compressedTexImage2D(...arguments)}catch(q){lt("WebGLState:",q)}}function H(){try{i.compressedTexImage3D(...arguments)}catch(q){lt("WebGLState:",q)}}function E(){try{i.texSubImage2D(...arguments)}catch(q){lt("WebGLState:",q)}}function N(){try{i.texSubImage3D(...arguments)}catch(q){lt("WebGLState:",q)}}function U(){try{i.compressedTexSubImage2D(...arguments)}catch(q){lt("WebGLState:",q)}}function F(){try{i.compressedTexSubImage3D(...arguments)}catch(q){lt("WebGLState:",q)}}function G(){try{i.texStorage2D(...arguments)}catch(q){lt("WebGLState:",q)}}function J(){try{i.texStorage3D(...arguments)}catch(q){lt("WebGLState:",q)}}function W(){try{i.texImage2D(...arguments)}catch(q){lt("WebGLState:",q)}}function Y(){try{i.texImage3D(...arguments)}catch(q){lt("WebGLState:",q)}}function ue(q){return h[q]!==void 0?h[q]:i.getParameter(q)}function _e(q,Se){h[q]!==Se&&(i.pixelStorei(q,Se),h[q]=Se)}function me(q){tt.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),tt.copy(q))}function ye(q){at.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),at.copy(q))}function Ee(q,Se){let de=u.get(Se);de===void 0&&(de=new WeakMap,u.set(Se,de));let De=de.get(q);De===void 0&&(De=i.getUniformBlockIndex(Se,q.name),de.set(q,De))}function ze(q,Se){let De=u.get(Se).get(q);c.get(Se)!==De&&(i.uniformBlockBinding(Se,De,q.__bindingPointIndex),c.set(Se,De))}function Xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),l={},h={},oe=null,ae={},f={},p=new WeakMap,v=[],y=null,g=!1,m=null,_=null,A=null,w=null,I=null,L=null,D=null,S=new Ke(0,0,0),x=0,b=!1,R=null,M=null,P=null,O=null,k=null,tt.set(0,0,i.canvas.width,i.canvas.height),at.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:K,disable:ce,bindFramebuffer:Me,drawBuffers:he,useProgram:fe,setBlending:qe,setMaterial:Ze,setFlipSided:Ve,setCullFace:be,setLineWidth:Ce,setPolygonOffset:nt,setScissorTest:ot,activeTexture:_t,bindTexture:V,unbindTexture:mt,compressedTexImage2D:Mt,compressedTexImage3D:H,texImage2D:W,texImage3D:Y,pixelStorei:_e,getParameter:ue,updateUBOMapping:Ee,uniformBlockBinding:ze,texStorage2D:G,texStorage3D:J,texSubImage2D:E,texSubImage3D:N,compressedTexSubImage2D:U,compressedTexSubImage3D:F,scissor:me,viewport:ye,reset:Xe}}function vM(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new it,l=new WeakMap,h=new Set,f,p=new WeakMap,v=!1;try{v=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(H,E){return v?new OffscreenCanvas(H,E):Hs("canvas")}function g(H,E,N){let U=1,F=Mt(H);if((F.width>N||F.height>N)&&(U=N/Math.max(F.width,F.height)),U<1)if(typeof HTMLImageElement!="undefined"&&H instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&H instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&H instanceof ImageBitmap||typeof VideoFrame!="undefined"&&H instanceof VideoFrame){let G=Math.floor(U*F.width),J=Math.floor(U*F.height);f===void 0&&(f=y(G,J));let W=E?y(G,J):f;return W.width=G,W.height=J,W.getContext("2d").drawImage(H,0,0,G,J),Qe("WebGLRenderer: Texture has been resized from ("+F.width+"x"+F.height+") to ("+G+"x"+J+")."),W}else return"data"in H&&Qe("WebGLRenderer: Image in DataTexture is too big ("+F.width+"x"+F.height+")."),H;return H}function m(H){return H.generateMipmaps}function _(H){i.generateMipmap(H)}function A(H){return H.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:H.isWebGL3DRenderTarget?i.TEXTURE_3D:H.isWebGLArrayRenderTarget||H.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(H,E,N,U,F,G=!1){if(H!==null){if(i[H]!==void 0)return i[H];Qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+H+"'")}let J;U&&(J=e.get("EXT_texture_norm16"),J||Qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=E;if(E===i.RED&&(N===i.FLOAT&&(W=i.R32F),N===i.HALF_FLOAT&&(W=i.R16F),N===i.UNSIGNED_BYTE&&(W=i.R8),N===i.UNSIGNED_SHORT&&J&&(W=J.R16_EXT),N===i.SHORT&&J&&(W=J.R16_SNORM_EXT)),E===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.R8UI),N===i.UNSIGNED_SHORT&&(W=i.R16UI),N===i.UNSIGNED_INT&&(W=i.R32UI),N===i.BYTE&&(W=i.R8I),N===i.SHORT&&(W=i.R16I),N===i.INT&&(W=i.R32I)),E===i.RG&&(N===i.FLOAT&&(W=i.RG32F),N===i.HALF_FLOAT&&(W=i.RG16F),N===i.UNSIGNED_BYTE&&(W=i.RG8),N===i.UNSIGNED_SHORT&&J&&(W=J.RG16_EXT),N===i.SHORT&&J&&(W=J.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RG8UI),N===i.UNSIGNED_SHORT&&(W=i.RG16UI),N===i.UNSIGNED_INT&&(W=i.RG32UI),N===i.BYTE&&(W=i.RG8I),N===i.SHORT&&(W=i.RG16I),N===i.INT&&(W=i.RG32I)),E===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RGB8UI),N===i.UNSIGNED_SHORT&&(W=i.RGB16UI),N===i.UNSIGNED_INT&&(W=i.RGB32UI),N===i.BYTE&&(W=i.RGB8I),N===i.SHORT&&(W=i.RGB16I),N===i.INT&&(W=i.RGB32I)),E===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),N===i.UNSIGNED_INT&&(W=i.RGBA32UI),N===i.BYTE&&(W=i.RGBA8I),N===i.SHORT&&(W=i.RGBA16I),N===i.INT&&(W=i.RGBA32I)),E===i.RGB&&(N===i.UNSIGNED_SHORT&&J&&(W=J.RGB16_EXT),N===i.SHORT&&J&&(W=J.RGB16_SNORM_EXT),N===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(W=i.R11F_G11F_B10F)),E===i.RGBA){let Y=G?Ua:vt.getTransfer(F);N===i.FLOAT&&(W=i.RGBA32F),N===i.HALF_FLOAT&&(W=i.RGBA16F),N===i.UNSIGNED_BYTE&&(W=Y===Lt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT&&J&&(W=J.RGBA16_EXT),N===i.SHORT&&J&&(W=J.RGBA16_SNORM_EXT),N===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function I(H,E){let N;return H?E===null||E===wi||E===sa?N=i.DEPTH24_STENCIL8:E===Jn?N=i.DEPTH32F_STENCIL8:E===ra&&(N=i.DEPTH24_STENCIL8,Qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===wi||E===sa?N=i.DEPTH_COMPONENT24:E===Jn?N=i.DEPTH_COMPONENT32F:E===ra&&(N=i.DEPTH_COMPONENT16),N}function L(H,E){return m(H)===!0||H.isFramebufferTexture&&H.minFilter!==Xt&&H.minFilter!==an?Math.log2(Math.max(E.width,E.height))+1:H.mipmaps!==void 0&&H.mipmaps.length>0?H.mipmaps.length:H.isCompressedTexture&&Array.isArray(H.image)?E.mipmaps.length:1}function D(H){let E=H.target;E.removeEventListener("dispose",D),x(E),E.isVideoTexture&&l.delete(E),E.isHTMLTexture&&h.delete(E)}function S(H){let E=H.target;E.removeEventListener("dispose",S),R(E)}function x(H){let E=n.get(H);if(E.__webglInit===void 0)return;let N=H.source,U=p.get(N);if(U){let F=U[E.__cacheKey];F.usedTimes--,F.usedTimes===0&&b(H),Object.keys(U).length===0&&p.delete(N)}n.remove(H)}function b(H){let E=n.get(H);i.deleteTexture(E.__webglTexture);let N=H.source,U=p.get(N);delete U[E.__cacheKey],a.memory.textures--}function R(H){let E=n.get(H);if(H.depthTexture&&(H.depthTexture.dispose(),n.remove(H.depthTexture)),H.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(E.__webglFramebuffer[U]))for(let F=0;F<E.__webglFramebuffer[U].length;F++)i.deleteFramebuffer(E.__webglFramebuffer[U][F]);else i.deleteFramebuffer(E.__webglFramebuffer[U]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[U])}else{if(Array.isArray(E.__webglFramebuffer))for(let U=0;U<E.__webglFramebuffer.length;U++)i.deleteFramebuffer(E.__webglFramebuffer[U]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let U=0;U<E.__webglColorRenderbuffer.length;U++)E.__webglColorRenderbuffer[U]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[U]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let N=H.textures;for(let U=0,F=N.length;U<F;U++){let G=n.get(N[U]);G.__webglTexture&&(i.deleteTexture(G.__webglTexture),a.memory.textures--),n.remove(N[U])}n.remove(H)}let M=0;function P(){M=0}function O(){return M}function k(H){M=H}function X(){let H=M;return H>=r.maxTextures&&Qe("WebGLTextures: Trying to use "+(H+1)+" texture units while this GPU supports only "+r.maxTextures),M+=1,H}function $(H){let E=[];return E.push(H.wrapS),E.push(H.wrapT),E.push(H.wrapR||0),E.push(H.magFilter),E.push(H.minFilter),E.push(H.anisotropy),E.push(H.internalFormat),E.push(H.format),E.push(H.type),E.push(H.generateMipmaps),E.push(H.premultiplyAlpha),E.push(H.flipY),E.push(H.unpackAlignment),E.push(H.colorSpace),E.join()}function ne(H,E){let N=n.get(H);if(H.isVideoTexture&&V(H),H.isRenderTargetTexture===!1&&H.isExternalTexture!==!0&&H.version>0&&N.__version!==H.version){let U=H.image;if(U===null)Qe("WebGLRenderer: Texture marked for update but no image data found.");else if(U.complete===!1)Qe("WebGLRenderer: Texture marked for update but image is incomplete");else{ce(N,H,E);return}}else H.isExternalTexture&&(N.__webglTexture=H.sourceTexture?H.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+E)}function re(H,E){let N=n.get(H);if(H.isRenderTargetTexture===!1&&H.version>0&&N.__version!==H.version){ce(N,H,E);return}else H.isExternalTexture&&(N.__webglTexture=H.sourceTexture?H.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+E)}function oe(H,E){let N=n.get(H);if(H.isRenderTargetTexture===!1&&H.version>0&&N.__version!==H.version){ce(N,H,E);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+E)}function ae(H,E){let N=n.get(H);if(H.isCubeDepthTexture!==!0&&H.version>0&&N.__version!==H.version){Me(N,H,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+E)}let Pe={[oi]:i.REPEAT,[ai]:i.CLAMP_TO_EDGE,[Us]:i.MIRRORED_REPEAT},He={[Xt]:i.NEAREST,[Kl]:i.NEAREST_MIPMAP_NEAREST,[ls]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[ia]:i.LINEAR_MIPMAP_NEAREST,[Ei]:i.LINEAR_MIPMAP_LINEAR},tt={[Ap]:i.NEVER,[Lp]:i.ALWAYS,[Rp]:i.LESS,[Oc]:i.LEQUAL,[Cp]:i.EQUAL,[Uc]:i.GEQUAL,[Ip]:i.GREATER,[Pp]:i.NOTEQUAL};function at(H,E){if(E.type===Jn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===an||E.magFilter===ia||E.magFilter===ls||E.magFilter===Ei||E.minFilter===an||E.minFilter===ia||E.minFilter===ls||E.minFilter===Ei)&&Qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(H,i.TEXTURE_WRAP_S,Pe[E.wrapS]),i.texParameteri(H,i.TEXTURE_WRAP_T,Pe[E.wrapT]),(H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY)&&i.texParameteri(H,i.TEXTURE_WRAP_R,Pe[E.wrapR]),i.texParameteri(H,i.TEXTURE_MAG_FILTER,He[E.magFilter]),i.texParameteri(H,i.TEXTURE_MIN_FILTER,He[E.minFilter]),E.compareFunction&&(i.texParameteri(H,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(H,i.TEXTURE_COMPARE_FUNC,tt[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Xt||E.minFilter!==ls&&E.minFilter!==Ei||E.type===Jn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(H,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function rt(H,E){let N=!1;H.__webglInit===void 0&&(H.__webglInit=!0,E.addEventListener("dispose",D));let U=E.source,F=p.get(U);F===void 0&&(F={},p.set(U,F));let G=$(E);if(G!==H.__cacheKey){F[G]===void 0&&(F[G]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),F[G].usedTimes++;let J=F[H.__cacheKey];J!==void 0&&(F[H.__cacheKey].usedTimes--,J.usedTimes===0&&b(E)),H.__cacheKey=G,H.__webglTexture=F[G].texture}return N}function le(H,E,N){return Math.floor(Math.floor(H/N)/E)}function K(H,E,N,U){let G=H.updateRanges;if(G.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,N,U,E.data);else{G.sort((_e,me)=>_e.start-me.start);let J=0;for(let _e=1;_e<G.length;_e++){let me=G[J],ye=G[_e],Ee=me.start+me.count,ze=le(ye.start,E.width,4),Xe=le(me.start,E.width,4);ye.start<=Ee+1&&ze===Xe&&le(ye.start+ye.count-1,E.width,4)===ze?me.count=Math.max(me.count,ye.start+ye.count-me.start):(++J,G[J]=ye)}G.length=J+1;let W=t.getParameter(i.UNPACK_ROW_LENGTH),Y=t.getParameter(i.UNPACK_SKIP_PIXELS),ue=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let _e=0,me=G.length;_e<me;_e++){let ye=G[_e],Ee=Math.floor(ye.start/4),ze=Math.ceil(ye.count/4),Xe=Ee%E.width,q=Math.floor(Ee/E.width),Se=ze,de=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Xe),t.pixelStorei(i.UNPACK_SKIP_ROWS,q),t.texSubImage2D(i.TEXTURE_2D,0,Xe,q,Se,de,N,U,E.data)}H.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,W),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Y),t.pixelStorei(i.UNPACK_SKIP_ROWS,ue)}}function ce(H,E,N){let U=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(U=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(U=i.TEXTURE_3D);let F=rt(H,E),G=E.source;t.bindTexture(U,H.__webglTexture,i.TEXTURE0+N);let J=n.get(G);if(G.version!==J.__version||F===!0){if(t.activeTexture(i.TEXTURE0+N),(typeof ImageBitmap!="undefined"&&E.image instanceof ImageBitmap)===!1){let de=vt.getPrimaries(vt.workingColorSpace),De=E.colorSpace===$n?null:vt.getPrimaries(E.colorSpace),Fe=E.colorSpace===$n||de===De?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let Y=g(E.image,!1,r.maxTextureSize);Y=mt(E,Y);let ue=s.convert(E.format,E.colorSpace),_e=s.convert(E.type),me=w(E.internalFormat,ue,_e,E.normalized,E.colorSpace,E.isVideoTexture);at(U,E);let ye,Ee=E.mipmaps,ze=E.isVideoTexture!==!0,Xe=J.__version===void 0||F===!0,q=G.dataReady,Se=L(E,Y);if(E.isDepthTexture)me=I(E.format===Lr,E.type),Xe&&(ze?t.texStorage2D(i.TEXTURE_2D,1,me,Y.width,Y.height):t.texImage2D(i.TEXTURE_2D,0,me,Y.width,Y.height,0,ue,_e,null));else if(E.isDataTexture)if(Ee.length>0){ze&&Xe&&t.texStorage2D(i.TEXTURE_2D,Se,me,Ee[0].width,Ee[0].height);for(let de=0,De=Ee.length;de<De;de++)ye=Ee[de],ze?q&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,ye.width,ye.height,ue,_e,ye.data):t.texImage2D(i.TEXTURE_2D,de,me,ye.width,ye.height,0,ue,_e,ye.data);E.generateMipmaps=!1}else ze?(Xe&&t.texStorage2D(i.TEXTURE_2D,Se,me,Y.width,Y.height),q&&K(E,Y,ue,_e)):t.texImage2D(i.TEXTURE_2D,0,me,Y.width,Y.height,0,ue,_e,Y.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ze&&Xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,me,Ee[0].width,Ee[0].height,Y.depth);for(let de=0,De=Ee.length;de<De;de++)if(ye=Ee[de],E.format!==jn)if(ue!==null)if(ze){if(q)if(E.layerUpdates.size>0){let Fe=Lh(ye.width,ye.height,E.format,E.type);for(let xe of E.layerUpdates){let $e=ye.data.subarray(xe*Fe/ye.data.BYTES_PER_ELEMENT,(xe+1)*Fe/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,xe,ye.width,ye.height,1,ue,$e)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,ye.width,ye.height,Y.depth,ue,ye.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,de,me,ye.width,ye.height,Y.depth,0,ye.data,0,0);else Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?q&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,ye.width,ye.height,Y.depth,ue,_e,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,de,me,ye.width,ye.height,Y.depth,0,ue,_e,ye.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{ze&&Xe&&t.texStorage2D(i.TEXTURE_2D,Se,me,Ee[0].width,Ee[0].height);for(let de=0,De=Ee.length;de<De;de++)ye=Ee[de],E.format!==jn?ue!==null?ze?q&&t.compressedTexSubImage2D(i.TEXTURE_2D,de,0,0,ye.width,ye.height,ue,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,de,me,ye.width,ye.height,0,ye.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?q&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,ye.width,ye.height,ue,_e,ye.data):t.texImage2D(i.TEXTURE_2D,de,me,ye.width,ye.height,0,ue,_e,ye.data)}else if(E.isDataArrayTexture)if(ze){if(Xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,me,Y.width,Y.height,Y.depth),q)if(E.layerUpdates.size>0){let de=Lh(Y.width,Y.height,E.format,E.type);for(let De of E.layerUpdates){let Fe=Y.data.subarray(De*de/Y.data.BYTES_PER_ELEMENT,(De+1)*de/Y.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,De,Y.width,Y.height,1,ue,_e,Fe)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,ue,_e,Y.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,me,Y.width,Y.height,Y.depth,0,ue,_e,Y.data);else if(E.isData3DTexture)ze?(Xe&&t.texStorage3D(i.TEXTURE_3D,Se,me,Y.width,Y.height,Y.depth),q&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,ue,_e,Y.data)):t.texImage3D(i.TEXTURE_3D,0,me,Y.width,Y.height,Y.depth,0,ue,_e,Y.data);else if(E.isFramebufferTexture){if(Xe)if(ze)t.texStorage2D(i.TEXTURE_2D,Se,me,Y.width,Y.height);else{let de=Y.width,De=Y.height;for(let Fe=0;Fe<Se;Fe++)t.texImage2D(i.TEXTURE_2D,Fe,me,de,De,0,ue,_e,null),de>>=1,De>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let de=i.canvas;if(de.hasAttribute("layoutsubtree")||de.setAttribute("layoutsubtree","true"),Y.parentNode!==de){de.appendChild(Y),h.add(E),de.onpaint=De=>{let Fe=De.changedElements;for(let xe of h)Fe.includes(xe.image)&&(xe.needsUpdate=!0)},de.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Y);else{let Fe=i.RGBA,xe=i.RGBA,$e=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Fe,xe,$e,Y)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ee.length>0){if(ze&&Xe){let de=Mt(Ee[0]);t.texStorage2D(i.TEXTURE_2D,Se,me,de.width,de.height)}for(let de=0,De=Ee.length;de<De;de++)ye=Ee[de],ze?q&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,ue,_e,ye):t.texImage2D(i.TEXTURE_2D,de,me,ue,_e,ye);E.generateMipmaps=!1}else if(ze){if(Xe){let de=Mt(Y);t.texStorage2D(i.TEXTURE_2D,Se,me,de.width,de.height)}q&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,_e,Y)}else t.texImage2D(i.TEXTURE_2D,0,me,ue,_e,Y);m(E)&&_(U),J.__version=G.version,E.onUpdate&&E.onUpdate(E)}H.__version=E.version}function Me(H,E,N){if(E.image.length!==6)return;let U=rt(H,E),F=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+N);let G=n.get(F);if(F.version!==G.__version||U===!0){t.activeTexture(i.TEXTURE0+N);let J=vt.getPrimaries(vt.workingColorSpace),W=E.colorSpace===$n?null:vt.getPrimaries(E.colorSpace),Y=E.colorSpace===$n||J===W?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);let ue=E.isCompressedTexture||E.image[0].isCompressedTexture,_e=E.image[0]&&E.image[0].isDataTexture,me=[];for(let xe=0;xe<6;xe++)!ue&&!_e?me[xe]=g(E.image[xe],!0,r.maxCubemapSize):me[xe]=_e?E.image[xe].image:E.image[xe],me[xe]=mt(E,me[xe]);let ye=me[0],Ee=s.convert(E.format,E.colorSpace),ze=s.convert(E.type),Xe=w(E.internalFormat,Ee,ze,E.normalized,E.colorSpace),q=E.isVideoTexture!==!0,Se=G.__version===void 0||U===!0,de=F.dataReady,De=L(E,ye);at(i.TEXTURE_CUBE_MAP,E);let Fe;if(ue){q&&Se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,De,Xe,ye.width,ye.height);for(let xe=0;xe<6;xe++){Fe=me[xe].mipmaps;for(let $e=0;$e<Fe.length;$e++){let Je=Fe[$e];E.format!==jn?Ee!==null?q?de&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,$e,0,0,Je.width,Je.height,Ee,Je.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,$e,Xe,Je.width,Je.height,0,Je.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,$e,0,0,Je.width,Je.height,Ee,ze,Je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,$e,Xe,Je.width,Je.height,0,Ee,ze,Je.data)}}}else{if(Fe=E.mipmaps,q&&Se){Fe.length>0&&De++;let xe=Mt(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,De,Xe,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(_e){q?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,me[xe].width,me[xe].height,Ee,ze,me[xe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Xe,me[xe].width,me[xe].height,0,Ee,ze,me[xe].data);for(let $e=0;$e<Fe.length;$e++){let kt=Fe[$e].image[xe].image;q?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,$e+1,0,0,kt.width,kt.height,Ee,ze,kt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,$e+1,Xe,kt.width,kt.height,0,Ee,ze,kt.data)}}else{q?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ee,ze,me[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Xe,Ee,ze,me[xe]);for(let $e=0;$e<Fe.length;$e++){let Je=Fe[$e];q?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,$e+1,0,0,Ee,ze,Je.image[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,$e+1,Xe,Ee,ze,Je.image[xe])}}}m(E)&&_(i.TEXTURE_CUBE_MAP),G.__version=F.version,E.onUpdate&&E.onUpdate(E)}H.__version=E.version}function he(H,E,N,U,F,G){let J=s.convert(N.format,N.colorSpace),W=s.convert(N.type),Y=w(N.internalFormat,J,W,N.normalized,N.colorSpace),ue=n.get(E),_e=n.get(N);if(_e.__renderTarget=E,!ue.__hasExternalTextures){let me=Math.max(1,E.width>>G),ye=Math.max(1,E.height>>G);F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?t.texImage3D(F,G,Y,me,ye,E.depth,0,J,W,null):t.texImage2D(F,G,Y,me,ye,0,J,W,null)}t.bindFramebuffer(i.FRAMEBUFFER,H),_t(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,U,F,_e.__webglTexture,0,ot(E)):(F===i.TEXTURE_2D||F>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&F<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,U,F,_e.__webglTexture,G),t.bindFramebuffer(i.FRAMEBUFFER,null)}function fe(H,E,N){if(i.bindRenderbuffer(i.RENDERBUFFER,H),E.depthBuffer){let U=E.depthTexture,F=U&&U.isDepthTexture?U.type:null,G=I(E.stencilBuffer,F),J=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;_t(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot(E),G,E.width,E.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot(E),G,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,G,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,H)}else{let U=E.textures;for(let F=0;F<U.length;F++){let G=U[F],J=s.convert(G.format,G.colorSpace),W=s.convert(G.type),Y=w(G.internalFormat,J,W,G.normalized,G.colorSpace);_t(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot(E),Y,E.width,E.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot(E),Y,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Y,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ve(H,E,N){let U=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,H),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let F=n.get(E.depthTexture);if(F.__renderTarget=E,(!F.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),U){if(F.__webglInit===void 0&&(F.__webglInit=!0,E.depthTexture.addEventListener("dispose",D)),F.__webglTexture===void 0){F.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture),at(i.TEXTURE_CUBE_MAP,E.depthTexture);let ue=s.convert(E.depthTexture.format),_e=s.convert(E.depthTexture.type),me;E.depthTexture.format===Oi?me=i.DEPTH_COMPONENT24:E.depthTexture.format===Lr&&(me=i.DEPTH24_STENCIL8);for(let ye=0;ye<6;ye++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,me,E.width,E.height,0,ue,_e,null)}}else ne(E.depthTexture,0);let G=F.__webglTexture,J=ot(E),W=U?i.TEXTURE_CUBE_MAP_POSITIVE_X+N:i.TEXTURE_2D,Y=E.depthTexture.format===Lr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===Oi)_t(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,W,G,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,Y,W,G,0);else if(E.depthTexture.format===Lr)_t(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,W,G,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,Y,W,G,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ne(H){let E=n.get(H),N=H.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==H.depthTexture){let U=H.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),U){let F=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,U.removeEventListener("dispose",F)};U.addEventListener("dispose",F),E.__depthDisposeCallback=F}E.__boundDepthTexture=U}if(H.depthTexture&&!E.__autoAllocateDepthBuffer)if(N)for(let U=0;U<6;U++)ve(E.__webglFramebuffer[U],H,U);else{let U=H.texture.mipmaps;U&&U.length>0?ve(E.__webglFramebuffer[0],H,0):ve(E.__webglFramebuffer,H,0)}else if(N){E.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[U]),E.__webglDepthbuffer[U]===void 0)E.__webglDepthbuffer[U]=i.createRenderbuffer(),fe(E.__webglDepthbuffer[U],H,!1);else{let F=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=E.__webglDepthbuffer[U];i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,F,i.RENDERBUFFER,G)}}else{let U=H.texture.mipmaps;if(U&&U.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),fe(E.__webglDepthbuffer,H,!1);else{let F=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,F,i.RENDERBUFFER,G)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(H,E,N){let U=n.get(H);E!==void 0&&he(U.__webglFramebuffer,H,H.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Ne(H)}function Ze(H){let E=H.texture,N=n.get(H),U=n.get(E);H.addEventListener("dispose",S);let F=H.textures,G=H.isWebGLCubeRenderTarget===!0,J=F.length>1;if(J||(U.__webglTexture===void 0&&(U.__webglTexture=i.createTexture()),U.__version=E.version,a.memory.textures++),G){N.__webglFramebuffer=[];for(let W=0;W<6;W++)if(E.mipmaps&&E.mipmaps.length>0){N.__webglFramebuffer[W]=[];for(let Y=0;Y<E.mipmaps.length;Y++)N.__webglFramebuffer[W][Y]=i.createFramebuffer()}else N.__webglFramebuffer[W]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){N.__webglFramebuffer=[];for(let W=0;W<E.mipmaps.length;W++)N.__webglFramebuffer[W]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(J)for(let W=0,Y=F.length;W<Y;W++){let ue=n.get(F[W]);ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture(),a.memory.textures++)}if(H.samples>0&&_t(H)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let W=0;W<F.length;W++){let Y=F[W];N.__webglColorRenderbuffer[W]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[W]);let ue=s.convert(Y.format,Y.colorSpace),_e=s.convert(Y.type),me=w(Y.internalFormat,ue,_e,Y.normalized,Y.colorSpace,H.isXRRenderTarget===!0),ye=ot(H);i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,me,H.width,H.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+W,i.RENDERBUFFER,N.__webglColorRenderbuffer[W])}i.bindRenderbuffer(i.RENDERBUFFER,null),H.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),fe(N.__webglDepthRenderbuffer,H,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(G){t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture),at(i.TEXTURE_CUBE_MAP,E);for(let W=0;W<6;W++)if(E.mipmaps&&E.mipmaps.length>0)for(let Y=0;Y<E.mipmaps.length;Y++)he(N.__webglFramebuffer[W][Y],H,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Y);else he(N.__webglFramebuffer[W],H,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);m(E)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(J){for(let W=0,Y=F.length;W<Y;W++){let ue=F[W],_e=n.get(ue),me=i.TEXTURE_2D;(H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(me=H.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,_e.__webglTexture),at(me,ue),he(N.__webglFramebuffer,H,ue,i.COLOR_ATTACHMENT0+W,me,0),m(ue)&&_(me)}t.unbindTexture()}else{let W=i.TEXTURE_2D;if((H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(W=H.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(W,U.__webglTexture),at(W,E),E.mipmaps&&E.mipmaps.length>0)for(let Y=0;Y<E.mipmaps.length;Y++)he(N.__webglFramebuffer[Y],H,E,i.COLOR_ATTACHMENT0,W,Y);else he(N.__webglFramebuffer,H,E,i.COLOR_ATTACHMENT0,W,0);m(E)&&_(W),t.unbindTexture()}H.depthBuffer&&Ne(H)}function Ve(H){let E=H.textures;for(let N=0,U=E.length;N<U;N++){let F=E[N];if(m(F)){let G=A(H),J=n.get(F).__webglTexture;t.bindTexture(G,J),_(G),t.unbindTexture()}}}let be=[],Ce=[];function nt(H){if(H.samples>0){if(_t(H)===!1){let E=H.textures,N=H.width,U=H.height,F=i.COLOR_BUFFER_BIT,G=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=n.get(H),W=E.length>1;if(W)for(let ue=0;ue<E.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,J.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,J.__webglMultisampledFramebuffer);let Y=H.texture.mipmaps;Y&&Y.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,J.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,J.__webglFramebuffer);for(let ue=0;ue<E.length;ue++){if(H.resolveDepthBuffer&&(H.depthBuffer&&(F|=i.DEPTH_BUFFER_BIT),H.stencilBuffer&&H.resolveStencilBuffer&&(F|=i.STENCIL_BUFFER_BIT)),W){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,J.__webglColorRenderbuffer[ue]);let _e=n.get(E[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,_e,0)}i.blitFramebuffer(0,0,N,U,0,0,N,U,F,i.NEAREST),c===!0&&(be.length=0,Ce.length=0,be.push(i.COLOR_ATTACHMENT0+ue),H.depthBuffer&&H.storeMultisampledDepthBuffer===!1&&(be.push(G),Ce.push(G),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ce)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,be))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),W)for(let ue=0;ue<E.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,J.__webglColorRenderbuffer[ue]);let _e=n.get(E[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,J.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,_e,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,J.__webglMultisampledFramebuffer)}else if(H.depthBuffer&&H.storeMultisampledDepthBuffer===!1&&c){let E=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function ot(H){return Math.min(r.maxSamples,H.samples)}function _t(H){let E=n.get(H);return H.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function V(H){let E=a.render.frame;l.get(H)!==E&&(l.set(H,E),H.update())}function mt(H,E){let N=H.colorSpace,U=H.format,F=H.type;return H.isCompressedTexture===!0||H.isVideoTexture===!0||N!==Un&&N!==$n&&(vt.getTransfer(N)===Lt?(U!==jn||F!==qn)&&Qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):lt("WebGLTextures: Unsupported texture color space:",N)),E}function Mt(H){return typeof HTMLImageElement!="undefined"&&H instanceof HTMLImageElement?(u.width=H.naturalWidth||H.width,u.height=H.naturalHeight||H.height):typeof VideoFrame!="undefined"&&H instanceof VideoFrame?(u.width=H.displayWidth,u.height=H.displayHeight):(u.width=H.width,u.height=H.height),u}this.allocateTextureUnit=X,this.resetTextureUnits=P,this.getTextureUnits=O,this.setTextureUnits=k,this.setTexture2D=ne,this.setTexture2DArray=re,this.setTexture3D=oe,this.setTextureCube=ae,this.rebindTextures=qe,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=he,this.useMultisampledRTT=_t,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function xM(i,e){function t(n,r=$n){let s,a=vt.getTransfer(r);if(n===qn)return i.UNSIGNED_BYTE;if(n===Jl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===jl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===yh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Mh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===xh)return i.BYTE;if(n===_h)return i.SHORT;if(n===ra)return i.UNSIGNED_SHORT;if(n===Zl)return i.INT;if(n===wi)return i.UNSIGNED_INT;if(n===Jn)return i.FLOAT;if(n===Sn)return i.HALF_FLOAT;if(n===Sh)return i.ALPHA;if(n===bh)return i.RGB;if(n===jn)return i.RGBA;if(n===Oi)return i.DEPTH_COMPONENT;if(n===Lr)return i.DEPTH_STENCIL;if(n===$l)return i.RED;if(n===Ql)return i.RED_INTEGER;if(n===Nr)return i.RG;if(n===ec)return i.RG_INTEGER;if(n===tc)return i.RGBA_INTEGER;if(n===po||n===mo||n===go||n===vo)if(a===Lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===po)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===po)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===mo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===go)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nc||n===ic||n===rc||n===sc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===nc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ic)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===rc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ac||n===oc||n===lc||n===cc||n===uc||n===xo||n===hc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ac||n===oc)return a===Lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===lc)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===cc)return s.COMPRESSED_R11_EAC;if(n===uc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===xo)return s.COMPRESSED_RG11_EAC;if(n===hc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===fc||n===dc||n===pc||n===mc||n===gc||n===vc||n===xc||n===_c||n===yc||n===Mc||n===Sc||n===bc||n===Tc||n===Ec)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===fc)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===dc)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pc)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mc)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===gc)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vc)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xc)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_c)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yc)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mc)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sc)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bc)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Tc)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ec)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wc||n===Ac||n===Rc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===wc)return a===Lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ac)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Rc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Cc||n===Ic||n===_o||n===Pc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Cc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ic)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_o)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===sa?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var _M=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yM=`
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

}`,jh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ka(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new en({vertexShader:_M,fragmentShader:yM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ke(new wr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$h=class extends bi{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",c=1,u=null,l=null,h=null,f=null,p=null,v=null,y=typeof XRWebGLBinding!="undefined",g=new jh,m={},_=t.getContextAttributes(),A=null,w=null,I=[],L=[],D=new it,S=null,x=null,b=new sn;b.viewport=new Ht;let R=new sn;R.viewport=new Ht;let M=[b,R],P=new zl,O=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let K=I[le];return K===void 0&&(K=new zs,I[le]=K),K.getTargetRaySpace()},this.getControllerGrip=function(le){let K=I[le];return K===void 0&&(K=new zs,I[le]=K),K.getGripSpace()},this.getHand=function(le){let K=I[le];return K===void 0&&(K=new zs,I[le]=K),K.getHandSpace()};function X(le){let K=L.indexOf(le.inputSource);if(K===-1)return;let ce=I[K];ce!==void 0&&(ce.update(le.inputSource,le.frame,u||a),ce.dispatchEvent({type:le.type,data:le.inputSource}))}function $(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",ne);for(let le=0;le<I.length;le++){let K=L[le];K!==null&&(L[le]=null,I[le].disconnect(K))}O=null,k=null,g.reset();for(let le in m)delete m[le];if(e.setRenderTarget(A),p=null,f=null,h=null,r=null,w=null,rt.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(D.width,D.height,!1),x!==null){let le=x.camera;le.fov=x.fov,le.zoom=x.zoom,le.updateProjectionMatrix(),x=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){s=le,n.isPresenting===!0&&Qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){o=le,n.isPresenting===!0&&Qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(le){u=le},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(le){if(r=le,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",$),r.addEventListener("inputsourceschange",ne),_.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(D),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,Me=null,he=null;_.depth&&(he=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=_.stencil?Lr:Oi,Me=_.stencil?sa:wi);let fe={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(fe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new dn(f.textureWidth,f.textureHeight,{format:jn,type:qn,depthTexture:new Er(f.textureWidth,f.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ce={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ce),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new dn(p.framebufferWidth,p.framebufferHeight,{format:jn,type:qn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),rt.setContext(r),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ne(le){for(let K=0;K<le.removed.length;K++){let ce=le.removed[K],Me=L.indexOf(ce);Me>=0&&(L[Me]=null,I[Me].disconnect(ce))}for(let K=0;K<le.added.length;K++){let ce=le.added[K],Me=L.indexOf(ce);if(Me===-1){for(let fe=0;fe<I.length;fe++)if(fe>=L.length){L.push(ce),Me=fe;break}else if(L[fe]===null){L[fe]=ce,Me=fe;break}if(Me===-1)break}let he=I[Me];he&&he.connect(ce)}}let re=new j,oe=new j;function ae(le,K,ce){re.setFromMatrixPosition(K.matrixWorld),oe.setFromMatrixPosition(ce.matrixWorld);let Me=re.distanceTo(oe),he=K.projectionMatrix.elements,fe=ce.projectionMatrix.elements,ve=he[14]/(he[10]-1),Ne=he[14]/(he[10]+1),qe=(he[9]+1)/he[5],Ze=(he[9]-1)/he[5],Ve=(he[8]-1)/he[0],be=(fe[8]+1)/fe[0],Ce=ve*Ve,nt=ve*be,ot=Me/(-Ve+be),_t=ot*-Ve;if(K.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(_t),le.translateZ(ot),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),he[10]===-1)le.projectionMatrix.copy(K.projectionMatrix),le.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let V=ve+ot,mt=Ne+ot,Mt=Ce-_t,H=nt+(Me-_t),E=qe*Ne/mt*V,N=Ze*Ne/mt*V;le.projectionMatrix.makePerspective(Mt,H,E,N,V,mt),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function Pe(le,K){K===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(K.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(r===null)return;let K=le.near,ce=le.far;g.texture!==null&&(g.depthNear>0&&(K=g.depthNear),g.depthFar>0&&(ce=g.depthFar)),P.near=R.near=b.near=K,P.far=R.far=b.far=ce,(O!==P.near||k!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),O=P.near,k=P.far),P.layers.mask=le.layers.mask|6,b.layers.mask=P.layers.mask&-5,R.layers.mask=P.layers.mask&-3;let Me=le.parent,he=P.cameras;Pe(P,Me);for(let fe=0;fe<he.length;fe++)Pe(he[fe],Me);he.length===2?ae(P,b,R):P.projectionMatrix.copy(b.projectionMatrix),x===null&&le.isPerspectiveCamera&&(x={camera:le,fov:le.fov,zoom:le.zoom}),He(le,P,Me)};function He(le,K,ce){ce===null?le.matrix.copy(K.matrixWorld):(le.matrix.copy(ce.matrixWorld),le.matrix.invert(),le.matrix.multiply(K.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(K.projectionMatrix),le.projectionMatrixInverse.copy(K.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=jr*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(le){c=le,f!==null&&(f.fixedFoveation=le),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=le)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(P)},this.getCameraTexture=function(le){return m[le]};let tt=null;function at(le,K){if(l=K.getViewerPose(u||a),v=K,l!==null){let ce=l.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let Me=!1;ce.length!==P.cameras.length&&(P.cameras.length=0,Me=!0);for(let Ne=0;Ne<ce.length;Ne++){let qe=ce[Ne],Ze=null;if(p!==null)Ze=p.getViewport(qe);else{let be=h.getViewSubImage(f,qe);Ze=be.viewport,Ne===0&&(e.setRenderTargetTextures(w,be.colorTexture,be.depthStencilTexture),e.setRenderTarget(w))}let Ve=M[Ne];Ve===void 0&&(Ve=new sn,Ve.layers.enable(Ne),Ve.viewport=new Ht,M[Ne]=Ve),Ve.matrix.fromArray(qe.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(qe.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Ne===0&&(P.matrix.copy(Ve.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Me===!0&&P.cameras.push(Ve)}let he=r.enabledFeatures;if(he&&he.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){h=n.getBinding();let Ne=h.getDepthInformation(ce[0]);Ne&&Ne.isValid&&Ne.texture&&g.init(Ne,r.renderState)}if(he&&he.includes("camera-access")&&y){e.state.unbindTexture(),h=n.getBinding();for(let Ne=0;Ne<ce.length;Ne++){let qe=ce[Ne].camera;if(qe){let Ze=m[qe];Ze||(Ze=new Ka,m[qe]=Ze);let Ve=h.getCameraImage(qe);Ze.sourceTexture=Ve}}}}for(let ce=0;ce<I.length;ce++){let Me=L[ce],he=I[ce];Me!==null&&he!==void 0&&he.update(Me,K,u||a)}tt&&tt(le,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),v=null}let rt=new om;rt.setAnimationLoop(at),this.setAnimationLoop=function(le){tt=le},this.dispose=function(){}}},MM=new dt,dm=new ht;dm.set(-1,0,0,0,1,0,0,0,1);function SM(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Ch(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,_,A,w){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),h(g,m)):m.isMeshPhongMaterial?(s(g,m),l(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),f(g,m),m.isMeshPhysicalMaterial&&p(g,m,w)):m.isMeshMatcapMaterial?(s(g,m),v(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),y(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,_,A):m.isSpriteMaterial?u(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Mn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Mn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _=e.get(m),A=_.envMap,w=_.envMapRotation;A&&(g.envMap.value=A,g.envMapRotation.value.setFromMatrix4(MM.makeRotationFromEuler(w)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(dm),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,_,A){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=A*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Mn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,m){m.matcap&&(g.matcap.value=m.matcap)}function y(g,m){let _=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function bM(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,I){let L=I.program;n.uniformBlockBinding(w,L)}function u(w,I){let L=r[w.id];L===void 0&&(g(w),L=l(w),r[w.id]=L,w.addEventListener("dispose",_));let D=I.program;n.updateUBOMapping(w,D);let S=e.render.frame;s[w.id]!==S&&(f(w),s[w.id]=S)}function l(w){let I=h();w.__bindingPointIndex=I;let L=i.createBuffer(),D=w.__size,S=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,L),i.bufferData(i.UNIFORM_BUFFER,D,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,I,L),L}function h(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let I=r[w.id],L=w.uniforms,D=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,I);for(let S=0,x=L.length;S<x;S++){let b=L[S];if(Array.isArray(b))for(let R=0,M=b.length;R<M;R++)p(b[R],S,R,D);else p(b,S,0,D)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(w,I,L,D){if(y(w,I,L,D)===!0){let S=w.__offset,x=w.value;if(Array.isArray(x)){let b=0;for(let R=0;R<x.length;R++){let M=x[R],P=m(M);v(M,w.__data,b),typeof M!="number"&&typeof M!="boolean"&&!M.isMatrix3&&!ArrayBuffer.isView(M)&&(b+=P.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(x,w.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,w.__data)}}function v(w,I,L){typeof w=="number"||typeof w=="boolean"?I[0]=w:w.isMatrix3?(I[0]=w.elements[0],I[1]=w.elements[1],I[2]=w.elements[2],I[3]=0,I[4]=w.elements[3],I[5]=w.elements[4],I[6]=w.elements[5],I[7]=0,I[8]=w.elements[6],I[9]=w.elements[7],I[10]=w.elements[8],I[11]=0):ArrayBuffer.isView(w)?I.set(new w.constructor(w.buffer,w.byteOffset,I.length)):w.toArray(I,L)}function y(w,I,L,D){let S=w.value,x=I+"_"+L;if(D[x]===void 0)return typeof S=="number"||typeof S=="boolean"?D[x]=S:ArrayBuffer.isView(S)?D[x]=S.slice():D[x]=S.clone(),!0;{let b=D[x];if(typeof S=="number"||typeof S=="boolean"){if(b!==S)return D[x]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(b.equals(S)===!1)return b.copy(S),!0}}return!1}function g(w){let I=w.uniforms,L=0,D=16;for(let x=0,b=I.length;x<b;x++){let R=Array.isArray(I[x])?I[x]:[I[x]];for(let M=0,P=R.length;M<P;M++){let O=R[M],k=Array.isArray(O.value)?O.value:[O.value];for(let X=0,$=k.length;X<$;X++){let ne=k[X],re=m(ne),oe=L%D,ae=oe%re.boundary,Pe=oe+ae;L+=ae,Pe!==0&&D-Pe<re.storage&&(L+=D-Pe),O.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=L,L+=re.storage}}}let S=L%D;return S>0&&(L+=D-S),w.__size=L,w.__cache={},this}function m(w){let I={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(I.boundary=4,I.storage=4):w.isVector2?(I.boundary=8,I.storage=8):w.isVector3||w.isColor?(I.boundary=16,I.storage=12):w.isVector4?(I.boundary=16,I.storage=16):w.isMatrix3?(I.boundary=48,I.storage=48):w.isMatrix4?(I.boundary=64,I.storage=64):w.isTexture?Qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(I.boundary=16,I.storage=w.byteLength):Qe("WebGLRenderer: Unsupported uniform value type.",w),I}function _(w){let I=w.target;I.removeEventListener("dispose",_);let L=a.indexOf(I.__bindingPointIndex);a.splice(L,1),i.deleteBuffer(r[I.id]),delete r[I.id],delete s[I.id]}function A(){for(let w in r)i.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:c,update:u,dispose:A}}var TM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),zi=null;function EM(){return zi===null&&(zi=new tr(TM,16,16,Nr,Sn),zi.name="DFG_LUT",zi.minFilter=an,zi.magFilter=an,zi.wrapS=ai,zi.wrapT=ai,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}var kc=class{constructor(e={}){let{canvas:t=Np(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=qn}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;let y=p,g=new Set([tc,ec,Ql]),m=new Set([qn,wi,ra,sa,Jl,jl]),_=new Uint32Array(4),A=new Int32Array(4),w=new j,I=null,L=null,D=[],S=[],x=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,R=!1,M=null,P=null,O=null,k=null;this._outputColorSpace=qt;let X=0,$=0,ne=null,re=-1,oe=null,ae=new Ht,Pe=new Ht,He=null,tt=new Ke(0),at=0,rt=t.width,le=t.height,K=1,ce=null,Me=null,he=new Ht(0,0,rt,le),fe=new Ht(0,0,rt,le),ve=!1,Ne=new qs,qe=!1,Ze=!1,Ve=new dt,be=new j,Ce=new Ht,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ot=!1;function _t(){return ne===null?K:1}let V=n;function mt(C,z){return t.getContext(C,z)}let Mt,H,E,N,U,F,G,J,W,Y,ue,_e,me,ye,Ee,ze,Xe,q,Se,de,De,Fe,xe;try{let C={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:l,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",kt,!1),t.addEventListener("webglcontextrestored",It,!1),t.addEventListener("webglcontextcreationerror",Xn,!1),V===null){let z="webgl2";if(V=mt(z,C),V===null)throw mt(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$e()}catch(C){throw t.removeEventListener("webglcontextlost",kt,!1),t.removeEventListener("webglcontextrestored",It,!1),t.removeEventListener("webglcontextcreationerror",Xn,!1),lt("WebGLRenderer: "+C.message),C}function $e(){Mt=new L_(V),Mt.init(),De=new xM(V,Mt),H=new S_(V,Mt,e,De),E=new gM(V,Mt),H.reversedDepthBuffer&&f&&E.buffers.depth.setReversed(!0),P=V.createFramebuffer(),O=V.createFramebuffer(),k=V.createFramebuffer(),N=new O_(V),U=new nM,F=new vM(V,Mt,E,U,H,De,N),G=new P_(b),J=new Fg(V),Fe=new y_(V,J),W=new N_(V,J,N,Fe),Y=new F_(V,W,J,Fe,N),q=new U_(V,H,F),Ee=new b_(U),ue=new tM(b,G,Mt,H,Fe,Ee),_e=new SM(b,U),me=new rM,ye=new uM(Mt),Xe=new __(b,G,E,Y,v,c),ze=new mM(b,Y,H),xe=new bM(V,N,H,E),Se=new M_(V,Mt,N),de=new D_(V,Mt,N),N.programs=ue.programs,b.capabilities=H,b.extensions=Mt,b.properties=U,b.renderLists=me,b.shadowMap=ze,b.state=E,b.info=N}y!==qn&&(x=new B_(y,t.width,t.height,o,r,s));let Je=new $h(b,V);this.xr=Je,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let C=Mt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=Mt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(C){C!==void 0&&(K=C,this.setSize(rt,le,!1))},this.getSize=function(C){return C.set(rt,le)},this.setSize=function(C,z,se=!0){if(Je.isPresenting){Qe("WebGLRenderer: Can't change size while VR device is presenting.");return}rt=C,le=z,t.width=Math.floor(C*K),t.height=Math.floor(z*K),se===!0&&(t.style.width=C+"px",t.style.height=z+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,C,z)},this.getDrawingBufferSize=function(C){return C.set(rt*K,le*K).floor()},this.setDrawingBufferSize=function(C,z,se){rt=C,le=z,K=se,t.width=Math.floor(C*se),t.height=Math.floor(z*se),this.setViewport(0,0,C,z)},this.setEffects=function(C){if(y===qn){lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let z=0;z<C.length;z++)if(C[z].isOutputPass===!0){Qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(ae)},this.getViewport=function(C){return C.copy(he)},this.setViewport=function(C,z,se,te){C.isVector4?he.set(C.x,C.y,C.z,C.w):he.set(C,z,se,te),E.viewport(ae.copy(he).multiplyScalar(K).round())},this.getScissor=function(C){return C.copy(fe)},this.setScissor=function(C,z,se,te){C.isVector4?fe.set(C.x,C.y,C.z,C.w):fe.set(C,z,se,te),E.scissor(Pe.copy(fe).multiplyScalar(K).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(C){E.setScissorTest(ve=C)},this.setOpaqueSort=function(C){ce=C},this.setTransparentSort=function(C){Me=C},this.getClearColor=function(C){return C.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(C=!0,z=!0,se=!0){let te=0;if(C){let Q=!1;if(ne!==null){let we=ne.texture.format;Q=g.has(we)}if(Q){let we=ne.texture.type,Le=m.has(we),Ie=Xe.getClearColor(),Oe=Xe.getClearAlpha(),Ge=Ie.r,ct=Ie.g,ut=Ie.b;Le?(_[0]=Ge,_[1]=ct,_[2]=ut,_[3]=Oe,V.clearBufferuiv(V.COLOR,0,_)):(A[0]=Ge,A[1]=ct,A[2]=ut,A[3]=Oe,V.clearBufferiv(V.COLOR,0,A))}else te|=V.COLOR_BUFFER_BIT}z&&(te|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(te|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&V.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),M=C},this.dispose=function(){t.removeEventListener("webglcontextlost",kt,!1),t.removeEventListener("webglcontextrestored",It,!1),t.removeEventListener("webglcontextcreationerror",Xn,!1),Xe.dispose(),me.dispose(),ye.dispose(),U.dispose(),G.dispose(),Y.dispose(),Fe.dispose(),xe.dispose(),ue.dispose(),Je.dispose(),Je.removeEventListener("sessionstart",ie),Je.removeEventListener("sessionend",Z),ee.stop()};function kt(C){C.preventDefault(),Fa("WebGLRenderer: Context Lost."),R=!0}function It(){Fa("WebGLRenderer: Context Restored."),R=!1;let C=N.autoReset,z=ze.enabled,se=ze.autoUpdate,te=ze.needsUpdate,Q=ze.type;$e(),N.autoReset=C,ze.enabled=z,ze.autoUpdate=se,ze.needsUpdate=te,ze.type=Q}function Xn(C){lt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Bn(C){let z=C.target;z.removeEventListener("dispose",Bn),Mu(z)}function Mu(C){Su(C),U.remove(C)}function Su(C){let z=U.get(C).programs;z!==void 0&&(z.forEach(function(se){ue.releaseProgram(se)}),C.isShaderMaterial&&ue.releaseShaderCache(C))}this.renderBufferDirect=function(C,z,se,te,Q,we){z===null&&(z=nt);let Le=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Ie=tn(C,z,se,te,Q);E.setMaterial(te,Le);let Oe=se.index,Ge=1;if(te.wireframe===!0){if(Oe=W.getWireframeAttribute(se),Oe===void 0)return;Ge=2}let ct=se.drawRange,ut=se.attributes.position,Be=ct.start*Ge,Pt=(ct.start+ct.count)*Ge;we!==null&&(Be=Math.max(Be,we.start*Ge),Pt=Math.min(Pt,(we.start+we.count)*Ge)),Oe!==null?(Be=Math.max(Be,0),Pt=Math.min(Pt,Oe.count)):ut!=null&&(Be=Math.max(Be,0),Pt=Math.min(Pt,ut.count));let Qt=Pt-Be;if(Qt<0||Qt===1/0)return;Fe.setup(Q,te,Ie,se,Oe);let Jt,Vt=Se;if(Oe!==null&&(Jt=J.get(Oe),Vt=de,Vt.setIndex(Jt)),Q.isMesh)te.wireframe===!0?(E.setLineWidth(te.wireframeLinewidth*_t()),Vt.setMode(V.LINES)):Vt.setMode(V.TRIANGLES);else if(Q.isLine){let wn=te.linewidth;wn===void 0&&(wn=1),E.setLineWidth(wn*_t()),Q.isLineSegments?Vt.setMode(V.LINES):Q.isLineLoop?Vt.setMode(V.LINE_LOOP):Vt.setMode(V.LINE_STRIP)}else Q.isPoints?Vt.setMode(V.POINTS):Q.isSprite&&Vt.setMode(V.TRIANGLES);if(Q.isBatchedMesh)if(Mt.get("WEBGL_multi_draw"))Vt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let wn=Q._multiDrawStarts,We=Q._multiDrawCounts,Dn=Q._multiDrawCount,Ct=Oe?J.get(Oe).bytesPerElement:1,ii=U.get(te).currentProgram.getUniforms();for(let Pi=0;Pi<Dn;Pi++)ii.setValue(V,"_gl_DrawID",Pi),Vt.render(wn[Pi]/Ct,We[Pi])}else if(Q.isInstancedMesh)Vt.renderInstances(Be,Qt,Q.count);else if(se.isInstancedBufferGeometry){let wn=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,We=Math.min(se.instanceCount,wn);Vt.renderInstances(Be,Qt,We)}else Vt.render(Be,Qt)};function d(C,z,se,te){M!==null&&C.isNodeMaterial&&M.setObject(te,C),qe===!0&&Ee.setState(C,se,!1),C.transparent===!0&&C.side===Wn&&C.forceSinglePass===!1?(C.side=Mn,C.needsUpdate=!0,gt(C,z,te),C.side=ki,C.needsUpdate=!0,gt(C,z,te),C.side=Wn):gt(C,z,te)}this.compile=function(C,z,se=null){se===null&&(se=C),M!==null&&M.renderStart(C,z,se),L=ye.get(se),L.init(z),S.push(L),se.traverseVisible(function(Q){Q.isLight&&Q.layers.test(z.layers)&&(L.pushLight(Q),Q.castShadow&&L.pushShadow(Q))}),C!==se&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(z.layers)&&(L.pushLight(Q),Q.castShadow&&L.pushShadow(Q))}),L.setupLights(),M!==null&&M.updateLights(L.state.lightsArray),Ze=this.localClippingEnabled,qe=Ee.init(this.clippingPlanes,Ze),qe===!0&&Ee.setGlobalState(this.clippingPlanes,z),M!==null&&ze.render(L.state.shadowsArray,se,z);let te=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let we=Q.material;if(we)if(Array.isArray(we))for(let Le=0;Le<we.length;Le++){let Ie=we[Le];d(Ie,se,z,Q),te.add(Ie)}else d(we,se,z,Q),te.add(we)}),L=S.pop(),M!==null&&M.renderEnd(),te},this.compileAsync=function(C,z,se=null){let te=this.compile(C,z,se);return new Promise(Q=>{function we(){if(te.forEach(function(Le){let Oe=U.get(Le).currentProgram;(Oe===void 0||Oe.isReady())&&te.delete(Le)}),te.size===0){Q(C);return}setTimeout(we,10)}Mt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let T=null;function B(C){T&&T(C)}function ie(){ee.stop()}function Z(){ee.start()}let ee=new om;ee.setAnimationLoop(B),typeof self!="undefined"&&ee.setContext(self),this.setAnimationLoop=function(C){T=C,Je.setAnimationLoop(C),C===null?ee.stop():ee.start()},Je.addEventListener("sessionstart",ie),Je.addEventListener("sessionend",Z),this.render=function(C,z){if(z!==void 0&&z.isCamera!==!0){lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;M!==null&&M.renderStart(C,z);let se=Je.enabled===!0&&Je.isPresenting===!0,te=x!==null&&(ne===null||se)&&x.begin(b,ne);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Je.enabled===!0&&Je.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(Je.cameraAutoUpdate===!0&&Je.updateCamera(z),z=Je.getCamera()),C.isScene===!0&&C.onBeforeRender(b,C,z,ne),L=ye.get(C,S.length),L.init(z),L.state.textureUnits=F.getTextureUnits(),S.push(L),Ve.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Ne.setFromProjectionMatrix(Ve,Mi,z.reversedDepth),Ze=this.localClippingEnabled,qe=Ee.init(this.clippingPlanes,Ze),I=me.get(C,D.length),I.init(),D.push(I),Je.enabled===!0&&Je.isPresenting===!0){let Le=b.xr.getDepthSensingMesh();Le!==null&&pe(Le,z,-1/0,b.sortObjects)}pe(C,z,0,b.sortObjects),I.finish(),M!==null&&M.updateLights(L.state.lightsArray),b.sortObjects===!0&&I.sort(ce,Me),ot=Je.enabled===!1||Je.isPresenting===!1||Je.hasDepthSensing()===!1,ot&&Xe.addToRenderList(I,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),qe===!0&&Ee.beginShadows();let Q=L.state.shadowsArray;if(ze.render(Q,C,z),qe===!0&&Ee.endShadows(),(te&&x.hasRenderPass())===!1){let Le=I.opaque,Ie=I.transmissive;if(L.setupLights(),z.isArrayCamera){let Oe=z.cameras;if(Ie.length>0)for(let Ge=0,ct=Oe.length;Ge<ct;Ge++){let ut=Oe[Ge];Te(Le,Ie,C,ut)}ot&&Xe.render(C);for(let Ge=0,ct=Oe.length;Ge<ct;Ge++){let ut=Oe[Ge];ge(I,C,ut,ut.viewport)}}else Ie.length>0&&Te(Le,Ie,C,z),ot&&Xe.render(C),ge(I,C,z)}ne!==null&&$===0&&(F.updateMultisampleRenderTarget(ne),F.updateRenderTargetMipmap(ne)),te&&x.end(b),C.isScene===!0&&C.onAfterRender(b,C,z),Fe.resetDefaultState(),re=-1,oe=null,S.pop(),S.length>0?(L=S[S.length-1],F.setTextureUnits(L.state.textureUnits),qe===!0&&Ee.setGlobalState(b.clippingPlanes,L.state.camera)):L=null,D.pop(),D.length>0?I=D[D.length-1]:I=null,M!==null&&M.renderEnd()};function pe(C,z,se,te){if(C.visible===!1)return;if(C.layers.test(z.layers)){if(C.isGroup)se=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(z);else if(C.isLightProbeGrid)L.pushLightProbeGrid(C);else if(C.isLight)L.pushLight(C),C.castShadow&&L.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(Ne)){te&&Ce.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ve);let Le=Y.update(C),Ie=C.material;Ie.visible&&I.push(C,Le,Ie,se,Ce.z,null,z)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(Ne))){let Le=Y.update(C),Ie=C.material;if(te&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ce.copy(C.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Ce.copy(Le.boundingSphere.center)),Ce.applyMatrix4(C.matrixWorld).applyMatrix4(Ve)),Array.isArray(Ie)){let Oe=Le.groups;for(let Ge=0,ct=Oe.length;Ge<ct;Ge++){let ut=Oe[Ge],Be=Ie[ut.materialIndex];Be&&Be.visible&&I.push(C,Le,Be,se,Ce.z,ut,z)}}else Ie.visible&&I.push(C,Le,Ie,se,Ce.z,null,z)}}let we=C.children;for(let Le=0,Ie=we.length;Le<Ie;Le++)pe(we[Le],z,se,te)}function ge(C,z,se,te){let{opaque:Q,transmissive:we,transparent:Le}=C;L.setupLightsView(se),qe===!0&&Ee.setGlobalState(b.clippingPlanes,se),te&&E.viewport(ae.copy(te)),Q.length>0&&Ye(Q,z,se),we.length>0&&Ye(we,z,se),Le.length>0&&Ye(Le,z,se),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Te(C,z,se,te){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[te.id]===void 0){let Be=Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[te.id]=new dn(1,1,{generateMipmaps:!0,type:Be?Sn:qn,minFilter:Ei,samples:Math.max(4,H.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:vt.workingColorSpace})}let we=L.state.transmissionRenderTarget[te.id],Le=te.viewport||ae;we.setSize(Le.z*b.transmissionResolutionScale,Le.w*b.transmissionResolutionScale);let Ie=b.getRenderTarget(),Oe=b.getActiveCubeFace(),Ge=b.getActiveMipmapLevel();b.setRenderTarget(we),b.getClearColor(tt),at=b.getClearAlpha(),at<1&&b.setClearColor(16777215,.5),b.clear(),ot&&Xe.render(se);let ct=b.toneMapping;b.toneMapping=Ti;let ut=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),L.setupLightsView(te),qe===!0&&Ee.setGlobalState(b.clippingPlanes,te),Ye(C,se,te),F.updateMultisampleRenderTarget(we),F.updateRenderTargetMipmap(we),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Pt=0,Qt=z.length;Pt<Qt;Pt++){let Jt=z[Pt],{object:Vt,geometry:wn,material:We,group:Dn}=Jt;if(We.side===Wn&&Vt.layers.test(te.layers)){let Ct=We.side;We.side=Mn,We.needsUpdate=!0,et(Vt,se,te,wn,We,Dn),We.side=Ct,We.needsUpdate=!0,Be=!0}}Be===!0&&(F.updateMultisampleRenderTarget(we),F.updateRenderTargetMipmap(we))}b.setRenderTarget(Ie,Oe,Ge),b.setClearColor(tt,at),ut!==void 0&&(te.viewport=ut),b.toneMapping=ct}function Ye(C,z,se){let te=z.isScene===!0?z.overrideMaterial:null;for(let Q=0,we=C.length;Q<we;Q++){let Le=C[Q],{object:Ie,geometry:Oe,group:Ge}=Le,ct=Le.material;ct.allowOverride===!0&&te!==null&&(ct=te),Ie.layers.test(se.layers)&&et(Ie,z,se,Oe,ct,Ge)}}function et(C,z,se,te,Q,we){M!==null&&Q.isNodeMaterial&&M.setObject(C,Q),C.onBeforeRender(b,z,se,te,Q,we),C.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(b,z,se,te,C,we),Q.transparent===!0&&Q.side===Wn&&Q.forceSinglePass===!1?(Q.side=Mn,Q.needsUpdate=!0,b.renderBufferDirect(se,z,te,Q,C,we),Q.side=ki,Q.needsUpdate=!0,b.renderBufferDirect(se,z,te,Q,C,we),Q.side=Wn):b.renderBufferDirect(se,z,te,Q,C,we),C.onAfterRender(b,z,se,te,Q,we)}function gt(C,z,se){z.isScene!==!0&&(z=nt);let te=U.get(C),Q=L.state.lights,we=L.state.shadowsArray,Le=Q.state.version,Ie=ue.getParameters(C,Q.state,we,z,se,L.state.lightProbeGridArray),Oe=ue.getProgramCacheKey(Ie),Ge=te.programs;te.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?z.environment:null,te.fog=z.fog;let ct=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;te.envMap=G.get(C.envMap||te.environment,ct),te.envMapRotation=te.environment!==null&&C.envMap===null?z.environmentRotation:C.envMapRotation,Ge===void 0&&(C.addEventListener("dispose",Bn),Ge=new Map,te.programs=Ge);let ut=Ge.get(Oe);if(ut!==void 0){if(te.currentProgram===ut&&te.lightsStateVersion===Le)return Et(C,Ie),ut}else Ie.uniforms=ue.getUniforms(C),M!==null&&C.isNodeMaterial&&M.build(C,se,Ie),C.onBeforeCompile(Ie,b),ut=ue.acquireProgram(Ie,Oe),Ge.set(Oe,ut),te.uniforms=Ie.uniforms;let Be=te.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Be.clippingPlanes=Ee.uniform),Et(C,Ie),te.needsLights=mn(C),te.lightsStateVersion=Le,te.needsLights&&(Be.ambientLightColor.value=Q.state.ambient,Be.lightProbe.value=Q.state.probe,Be.sunLights.value=Q.state.sun,Be.sunLightShadows.value=Q.state.sunShadow,Be.directionalLights.value=Q.state.directional,Be.directionalLightShadows.value=Q.state.directionalShadow,Be.spotLights.value=Q.state.spot,Be.spotLightShadows.value=Q.state.spotShadow,Be.rectAreaLights.value=Q.state.rectArea,Be.ltc_1.value=Q.state.rectAreaLTC1,Be.ltc_2.value=Q.state.rectAreaLTC2,Be.pointLights.value=Q.state.point,Be.pointLightShadows.value=Q.state.pointShadow,Be.hemisphereLights.value=Q.state.hemi,Be.sunShadowMatrix.value=Q.state.sunShadowMatrix,Be.sunShadowCascade.value=Q.state.sunShadowCascade,Be.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Be.spotLightMatrix.value=Q.state.spotLightMatrix,Be.spotLightMap.value=Q.state.spotLightMap,Be.pointShadowMatrix.value=Q.state.pointShadowMatrix),te.lightProbeGrid=L.state.lightProbeGridArray.length>0,te.currentProgram=ut,te.uniformsList=null,ut}function Dt(C){if(C.uniformsList===null){let z=C.currentProgram.getUniforms();C.uniformsList=ua.seqWithValue(z.seq,C.uniforms)}return C.uniformsList}function Et(C,z){let se=U.get(C);se.outputColorSpace=z.outputColorSpace,se.batching=z.batching,se.batchingColor=z.batchingColor,se.instancing=z.instancing,se.instancingColor=z.instancingColor,se.instancingMorph=z.instancingMorph,se.skinning=z.skinning,se.morphTargets=z.morphTargets,se.morphNormals=z.morphNormals,se.morphColors=z.morphColors,se.morphTargetsCount=z.morphTargetsCount,se.numClippingPlanes=z.numClippingPlanes,se.numIntersection=z.numClipIntersection,se.vertexAlphas=z.vertexAlphas,se.vertexTangents=z.vertexTangents,se.toneMapping=z.toneMapping}function cn(C,z){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;w.setFromMatrixPosition(z.matrixWorld);for(let se=0,te=C.length;se<te;se++){let Q=C[se];if(Q.texture!==null&&Q.boundingBox.containsPoint(w))return Q}return null}function tn(C,z,se,te,Q){z.isScene!==!0&&(z=nt),F.resetTextureUnits();let we=z.fog,Le=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?z.environment:null,Ie=ne===null?b.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:vt.workingColorSpace,Oe=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,Ge=G.get(te.envMap||Le,Oe),ct=te.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,ut=!!se.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Be=!!se.morphAttributes.position,Pt=!!se.morphAttributes.normal,Qt=!!se.morphAttributes.color,Jt=Ti;te.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Jt=b.toneMapping);let Vt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,wn=Vt!==void 0?Vt.length:0,We=U.get(te),Dn=L.state.lights;if(qe===!0&&(Ze===!0||C!==oe)){let Wt=C===oe&&te.id===re;Ee.setState(te,C,Wt)}let Ct=!1;te.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Dn.state.version||We.outputColorSpace!==Ie||Q.isBatchedMesh&&We.batching===!1||!Q.isBatchedMesh&&We.batching===!0||Q.isBatchedMesh&&We.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&We.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&We.instancing===!1||!Q.isInstancedMesh&&We.instancing===!0||Q.isSkinnedMesh&&We.skinning===!1||!Q.isSkinnedMesh&&We.skinning===!0||Q.isInstancedMesh&&We.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&We.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&We.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&We.instancingMorph===!1&&Q.morphTexture!==null||We.envMap!==Ge||te.fog===!0&&We.fog!==we||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Ee.numPlanes||We.numIntersection!==Ee.numIntersection)||We.vertexAlphas!==ct||We.vertexTangents!==ut||We.morphTargets!==Be||We.morphNormals!==Pt||We.morphColors!==Qt||We.toneMapping!==Jt||We.morphTargetsCount!==wn||!!We.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(Ct=!0):(Ct=!0,We.__version=te.version);let ii=We.currentProgram;Ct===!0&&(ii=gt(te,z,Q),M&&te.isNodeMaterial&&M.onUpdateProgram(te,ii,We));let Pi=!1,fr=!1,ms=!1,zt=ii.getUniforms(),rn=We.uniforms;if(E.useProgram(ii.program)&&(Pi=!0,fr=!0,ms=!0),te.id!==re&&(re=te.id,fr=!0),We.needsLights){let Wt=cn(L.state.lightProbeGridArray,Q);We.lightProbeGrid!==Wt&&(We.lightProbeGrid=Wt,fr=!0)}if(Pi||oe!==C){E.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),zt.setValue(V,"projectionMatrix",C.projectionMatrix),zt.setValue(V,"viewMatrix",C.matrixWorldInverse);let pr=zt.map.cameraPosition;pr!==void 0&&pr.setValue(V,be.setFromMatrixPosition(C.matrixWorld)),H.logarithmicDepthBuffer&&zt.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&zt.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),oe!==C&&(oe=C,fr=!0,ms=!0)}if(We.needsLights&&(Dn.state.sunShadowMap.length>0&&zt.setValue(V,"sunShadowMap",Dn.state.sunShadowMap,F),Dn.state.directionalShadowMap.length>0&&zt.setValue(V,"directionalShadowMap",Dn.state.directionalShadowMap,F),Dn.state.spotShadowMap.length>0&&zt.setValue(V,"spotShadowMap",Dn.state.spotShadowMap,F),Dn.state.pointShadowMap.length>0&&zt.setValue(V,"pointShadowMap",Dn.state.pointShadowMap,F)),Q.isSkinnedMesh){zt.setOptional(V,Q,"bindMatrix"),zt.setOptional(V,Q,"bindMatrixInverse");let Wt=Q.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),zt.setValue(V,"boneTexture",Wt.boneTexture,F))}Q.isBatchedMesh&&(zt.setOptional(V,Q,"batchingTexture"),zt.setValue(V,"batchingTexture",Q._matricesTexture,F),zt.setOptional(V,Q,"batchingIdTexture"),zt.setValue(V,"batchingIdTexture",Q._indirectTexture,F),zt.setOptional(V,Q,"batchingColorTexture"),Q._colorsTexture!==null&&zt.setValue(V,"batchingColorTexture",Q._colorsTexture,F));let dr=se.morphAttributes;if((dr.position!==void 0||dr.normal!==void 0||dr.color!==void 0)&&q.update(Q,se,ii),(fr||We.receiveShadow!==Q.receiveShadow)&&(We.receiveShadow=Q.receiveShadow,zt.setValue(V,"receiveShadow",Q.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&z.environment!==null&&(rn.envMapIntensity.value=z.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=EM()),fr){if(zt.setValue(V,"toneMappingExposure",b.toneMappingExposure),We.needsLights&&Ut(rn,ms),we&&te.fog===!0&&_e.refreshFogUniforms(rn,we),_e.refreshMaterialUniforms(rn,te,K,le,L.state.transmissionRenderTarget[C.id]),We.needsLights&&We.lightProbeGrid){let Wt=We.lightProbeGrid;rn.probesSH.value=Wt.texture,rn.probesMin.value.copy(Wt.boundingBox.min),rn.probesMax.value.copy(Wt.boundingBox.max),rn.probesResolution.value.copy(Wt.resolution)}ua.upload(V,Dt(We),rn,F)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(ua.upload(V,Dt(We),rn,F),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&zt.setValue(V,"center",Q.center),zt.setValue(V,"modelViewMatrix",Q.modelViewMatrix),zt.setValue(V,"normalMatrix",Q.normalMatrix),zt.setValue(V,"modelMatrix",Q.matrixWorld),te.uniformsGroups!==void 0){let Wt=te.uniformsGroups;for(let pr=0,gs=Wt.length;pr<gs;pr++){let jf=Wt[pr];xe.update(jf,ii),xe.bind(jf,ii)}}return ii}function Ut(C,z){C.ambientLightColor.needsUpdate=z,C.lightProbe.needsUpdate=z,C.sunLights.needsUpdate=z,C.sunLightShadows.needsUpdate=z,C.directionalLights.needsUpdate=z,C.directionalLightShadows.needsUpdate=z,C.pointLights.needsUpdate=z,C.pointLightShadows.needsUpdate=z,C.spotLights.needsUpdate=z,C.spotLightShadows.needsUpdate=z,C.rectAreaLights.needsUpdate=z,C.hemisphereLights.needsUpdate=z}function mn(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(C,z,se){let te=U.get(C);te.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),U.get(C.texture).__webglTexture=z,U.get(C.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:se,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,z){let se=U.get(C);se.__webglFramebuffer=z,se.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(C,z=0,se=0){ne=C,X=z,$=se;let te=null,Q=!1,we=!1;if(C){let Ie=U.get(C);if(Ie.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(V.FRAMEBUFFER,Ie.__webglFramebuffer),ae.copy(C.viewport),Pe.copy(C.scissor),He=C.scissorTest,E.viewport(ae),E.scissor(Pe),E.setScissorTest(He),re=-1;return}else if(Ie.__webglFramebuffer===void 0)F.setupRenderTarget(C);else if(Ie.__hasExternalTextures)F.rebindTextures(C,U.get(C.texture).__webglTexture,U.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let ct=C.depthTexture;if(Ie.__boundDepthTexture!==ct){if(ct!==null&&U.has(ct)&&(C.width!==ct.image.width||C.height!==ct.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(C)}}let Oe=C.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(we=!0);let Ge=U.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ge[z])?te=Ge[z][se]:te=Ge[z],Q=!0):C.samples>0&&F.useMultisampledRTT(C)===!1?te=U.get(C).__webglMultisampledFramebuffer:Array.isArray(Ge)?te=Ge[se]:te=Ge,ae.copy(C.viewport),Pe.copy(C.scissor),He=C.scissorTest}else ae.copy(he).multiplyScalar(K).floor(),Pe.copy(fe).multiplyScalar(K).floor(),He=ve;if(se!==0&&(te=P),E.bindFramebuffer(V.FRAMEBUFFER,te)&&E.drawBuffers(C,te),E.viewport(ae),E.scissor(Pe),E.setScissorTest(He),Q){let Ie=U.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ie.__webglTexture,se)}else if(we){let Ie=z;for(let Oe=0;Oe<C.textures.length;Oe++){let Ge=U.get(C.textures[Oe]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Oe,Ge.__webglTexture,se,Ie)}}else if(C!==null&&se!==0){let Ie=U.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ie.__webglTexture,se)}re=-1};function Zt(C){let z=U.get(C);return(z.__readFormat!==C.format||z.__readType!==C.type)&&(z.__readFormat=C.format,z.__readType=C.type,z.__formatReadable=H.textureFormatReadable(C.format),z.__typeReadable=H.textureTypeReadable(C.type)),z}this.readRenderTargetPixels=function(C,z,se,te,Q,we,Le,Ie=0){if(!(C&&C.isWebGLRenderTarget)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=U.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe){E.bindFramebuffer(V.FRAMEBUFFER,Oe);try{let Ge=C.textures[Ie],ct=Ge.format,ut=Ge.type;C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ie);let Be=Zt(Ge);if(Be.__formatReadable===!1){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Be.__typeReadable===!1){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=C.width-te&&se>=0&&se<=C.height-Q&&V.readPixels(z,se,te,Q,De.convert(ct),De.convert(ut),we)}finally{let Ge=ne!==null?U.get(ne).__webglFramebuffer:null;E.bindFramebuffer(V.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(C,z,se,te,Q,we,Le,Ie=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=U.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe)if(z>=0&&z<=C.width-te&&se>=0&&se<=C.height-Q){E.bindFramebuffer(V.FRAMEBUFFER,Oe);let Ge=C.textures[Ie],ct=Ge.format,ut=Ge.type;C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ie);let Be=Zt(Ge);if(Be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Pt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Pt),V.bufferData(V.PIXEL_PACK_BUFFER,we.byteLength,V.STREAM_READ),V.readPixels(z,se,te,Q,De.convert(ct),De.convert(ut),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let Qt=ne!==null?U.get(ne).__webglFramebuffer:null;E.bindFramebuffer(V.FRAMEBUFFER,Qt);let Jt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Op(V,Jt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Pt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,we),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(Pt),V.deleteSync(Jt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,z=null,se=0){let te=Math.pow(2,-se),Q=Math.floor(C.image.width*te),we=Math.floor(C.image.height*te),Le=z!==null?z.x:0,Ie=z!==null?z.y:0;F.setTexture2D(C,0),V.copyTexSubImage2D(V.TEXTURE_2D,se,0,0,Le,Ie,Q,we),E.unbindTexture()},this.copyTextureToTexture=function(C,z,se=null,te=null,Q=0,we=0){let Le,Ie,Oe,Ge,ct,ut,Be,Pt,Qt,Jt=C.isCompressedTexture?C.mipmaps[we]:C.image;if(se!==null)Le=se.max.x-se.min.x,Ie=se.max.y-se.min.y,Oe=se.isBox3?se.max.z-se.min.z:1,Ge=se.min.x,ct=se.min.y,ut=se.isBox3?se.min.z:0;else{let rn=Math.pow(2,-Q);Le=Math.floor(Jt.width*rn),Ie=Math.floor(Jt.height*rn),C.isDataArrayTexture?Oe=Jt.depth:C.isData3DTexture?Oe=Math.floor(Jt.depth*rn):Oe=1,Ge=0,ct=0,ut=0}te!==null?(Be=te.x,Pt=te.y,Qt=te.z):(Be=0,Pt=0,Qt=0);let Vt=De.convert(z.format),wn=De.convert(z.type),We;z.isData3DTexture?(F.setTexture3D(z,0),We=V.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(F.setTexture2DArray(z,0),We=V.TEXTURE_2D_ARRAY):(F.setTexture2D(z,0),We=V.TEXTURE_2D),E.activeTexture(V.TEXTURE0),E.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,z.flipY),E.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),E.pixelStorei(V.UNPACK_ALIGNMENT,z.unpackAlignment);let Dn=E.getParameter(V.UNPACK_ROW_LENGTH),Ct=E.getParameter(V.UNPACK_IMAGE_HEIGHT),ii=E.getParameter(V.UNPACK_SKIP_PIXELS),Pi=E.getParameter(V.UNPACK_SKIP_ROWS),fr=E.getParameter(V.UNPACK_SKIP_IMAGES);E.pixelStorei(V.UNPACK_ROW_LENGTH,Jt.width),E.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Jt.height),E.pixelStorei(V.UNPACK_SKIP_PIXELS,Ge),E.pixelStorei(V.UNPACK_SKIP_ROWS,ct),E.pixelStorei(V.UNPACK_SKIP_IMAGES,ut);let ms=C.isDataArrayTexture||C.isData3DTexture,zt=z.isDataArrayTexture||z.isData3DTexture;if(C.isDepthTexture){let rn=U.get(C),dr=U.get(z),Wt=U.get(rn.__renderTarget),pr=U.get(dr.__renderTarget);E.bindFramebuffer(V.READ_FRAMEBUFFER,Wt.__webglFramebuffer),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,pr.__webglFramebuffer);for(let gs=0;gs<Oe;gs++)ms&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,U.get(C).__webglTexture,Q,ut+gs),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,U.get(z).__webglTexture,we,Qt+gs)),V.blitFramebuffer(Ge,ct,Le,Ie,Be,Pt,Le,Ie,V.DEPTH_BUFFER_BIT,V.NEAREST);E.bindFramebuffer(V.READ_FRAMEBUFFER,null),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||U.has(C)){let rn=U.get(C),dr=U.get(z);E.bindFramebuffer(V.READ_FRAMEBUFFER,O),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,k);for(let Wt=0;Wt<Oe;Wt++)ms?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,rn.__webglTexture,Q,ut+Wt):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,rn.__webglTexture,Q),zt?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,dr.__webglTexture,we,Qt+Wt):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,dr.__webglTexture,we),Q!==0?V.blitFramebuffer(Ge,ct,Le,Ie,Be,Pt,Le,Ie,V.COLOR_BUFFER_BIT,V.NEAREST):zt?V.copyTexSubImage3D(We,we,Be,Pt,Qt+Wt,Ge,ct,Le,Ie):V.copyTexSubImage2D(We,we,Be,Pt,Ge,ct,Le,Ie);E.bindFramebuffer(V.READ_FRAMEBUFFER,null),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else zt?C.isDataTexture||C.isData3DTexture?V.texSubImage3D(We,we,Be,Pt,Qt,Le,Ie,Oe,Vt,wn,Jt.data):z.isCompressedArrayTexture?V.compressedTexSubImage3D(We,we,Be,Pt,Qt,Le,Ie,Oe,Vt,Jt.data):V.texSubImage3D(We,we,Be,Pt,Qt,Le,Ie,Oe,Vt,wn,Jt):C.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,we,Be,Pt,Le,Ie,Vt,wn,Jt.data):C.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,we,Be,Pt,Jt.width,Jt.height,Vt,Jt.data):V.texSubImage2D(V.TEXTURE_2D,we,Be,Pt,Le,Ie,Vt,wn,Jt);E.pixelStorei(V.UNPACK_ROW_LENGTH,Dn),E.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ct),E.pixelStorei(V.UNPACK_SKIP_PIXELS,ii),E.pixelStorei(V.UNPACK_SKIP_ROWS,Pi),E.pixelStorei(V.UNPACK_SKIP_IMAGES,fr),we===0&&z.generateMipmaps&&V.generateMipmap(We),E.unbindTexture()},this.initRenderTarget=function(C){U.get(C).__webglFramebuffer===void 0&&F.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?F.setTextureCube(C,0):C.isData3DTexture?F.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?F.setTexture2DArray(C,0):F.setTexture2D(C,0),E.unbindTexture()},this.resetState=function(){X=0,$=0,ne=null,E.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}};var pa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Qn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},wM=new Bi(-1,1,1,-1,0,1),Qh=class extends Kt{constructor(){super(),this.setAttribute("position",new wt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new wt([0,2,0,0,2,0],2))}},AM=new Qh,Dr=class{constructor(e){this._mesh=new ke(AM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,wM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Vc=class extends Qn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof en?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=cr.clone(e.uniforms),this.material=new en({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Dr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Eo=class extends Qn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}},Wc=class extends Qn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var qc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new it);this._width=n.width,this._height=n.height,t=new dn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Sn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Vc(pa),this.copyPass.material.blending=li,this.timer=new io}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let r=0,s=this.passes.length;r<s;r++){let a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Eo!==void 0&&(a instanceof Eo?n=!0:a instanceof Wc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new it);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Xc=class extends Qn{constructor(e,t,n=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ke}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}};var pm={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ke(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ma=class i extends Qn{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e!==void 0?new it(e.x,e.y):new it(256,256),this.clearColor=new Ke(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new dn(s,a,{type:Sn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let l=0;l<this.nMips;l++){let h=new dn(s,a,{type:Sn,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+l,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let f=new dn(s,a,{type:Sn,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+l,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}let o=pm;this.highPassUniforms=cr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new en({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let l=0;l<this.nMips;l++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[l])),this.separableBlurMaterials[l].uniforms.invSize.value=new it(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new j(1,1,1),new j(1,1,1),new j(1,1,1),new j(1,1,1),new j(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=cr.clone(pa.uniforms),this.blendMaterial=new en({uniforms:this.copyUniforms,vertexShader:pa.vertexShader,fragmentShader:pa.fragmentShader,premultipliedAlpha:!0,blending:lr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ke,this._oldClearAlpha=1,this._basic=new In,this._fsQuad=new Dr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.invSize.value=new it(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(e,t,n,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let r=[],s=[];for(let a=1;a<e;a+=2){let o=t[a],c=a+1<e?t[a+1]:0,u=o+c;r.push((a*o+(a+1)*c)/u),s.push(u)}return new en({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new it(.5,.5)},direction:{value:new it(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:s}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new en({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};ma.BlurDirectionX=new it(1,0);ma.BlurDirectionY=new it(0,1);var wo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Yc=class extends Qn{constructor(){super(),this.isOutputPass=!0,this.uniforms=cr.clone(wo.uniforms),this.material=new Js({name:wo.name,uniforms:this.uniforms,vertexShader:wo.vertexShader,fragmentShader:wo.fragmentShader}),this._fsQuad=new Dr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},vt.getTransfer(this._outputColorSpace)===Lt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ao?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===oo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===lo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===as?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===uo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ho?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===co&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Kc=class extends Tr{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new on;e.deleteAttribute("uv");let t=new $t({side:Mn}),n=new $t,r=new Vn(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let s=new ke(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let a=new Qr(e,n,6),o=new Yt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new ke(e,ga(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let u=new ke(e,ga(50));u.position.set(-16.109,18.021,-8.207),u.scale.set(.1,2.425,2.751),this.add(u);let l=new ke(e,ga(17));l.position.set(14.904,12.198,-1.832),l.scale.set(.15,4.265,6.331),this.add(l);let h=new ke(e,ga(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let f=new ke(e,ga(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let p=new ke(e,ga(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function ga(i){return new ja({color:0,emissive:16777215,emissiveIntensity:i})}var At=128;function $c(i,e,t){var n=i*374761393+e*668265263+t*982451653|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function vm(i,e,t,n){var r=Math.floor(i),s=Math.floor(e),a=i-r,o=e-s,c=a*a*(3-2*a),u=o*o*(3-2*o);function l(y,g){return $c((y%t+t)%t,(g%t+t)%t,n)}var h=l(r,s),f=l(r+1,s),p=l(r,s+1),v=l(r+1,s+1);return h+(f-h)*c+(p-h)*u+(h-f-p+v)*c*u}function hr(i,e,t,n){for(var r=0,s=.5,a=1,o=0;o<t;o++)r+=s*vm(i*a,e*a,8*a,n+o*17),s*=.5,a*=2;return r}function ci(i,e,t){return i+(e-i)*t}function Qc(i){return i<0?0:i>1?1:i}function ur(i){return[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255]}function RM(i,e){e=e||{};for(var t=new Uint8ClampedArray(At*At*4),n=new Float32Array(At*At),r=e.emissive?new Uint8ClampedArray(At*At*4):null,s=new Uint8ClampedArray(At*At*4),a=0;a<At;a++)for(var o=0;o<At;o++){var c=i(o/At,a/At,o,a),u=a*At+o,l=u*4;t[l]=c.c[0]*255,t[l+1]=c.c[1]*255,t[l+2]=c.c[2]*255,t[l+3]=255,n[u]=c.h;var h=(c.r===void 0?.85:c.r)*255;if(s[l]=h,s[l+1]=h,s[l+2]=h,s[l+3]=255,r){var f=c.e||[0,0,0];r[l]=f[0]*255,r[l+1]=f[1]*255,r[l+2]=f[2]*255,r[l+3]=255}}return{map:Zc(t,!0),normalMap:Zc(CM(n,e.bump||3),!1),roughnessMap:Zc(s,!1),emissiveMap:r?Zc(r,!0):null}}function CM(i,e){for(var t=new Uint8ClampedArray(At*At*4),n=0;n<At;n++)for(var r=0;r<At;r++){var s=i[n*At+(r+At-1)%At],a=i[n*At+(r+1)%At],o=i[(n+At-1)%At*At+r],c=i[(n+1)%At*At+r],u=(s-a)*e,l=(o-c)*e,h=1,f=Math.sqrt(u*u+l*l+h*h),p=(n*At+r)*4;t[p]=(u/f*.5+.5)*255,t[p+1]=(l/f*.5+.5)*255,t[p+2]=(h/f*.5+.5)*255,t[p+3]=255}return t}function Zc(i,e){var t;if(typeof document!="undefined"){var n=document.createElement("canvas");n.width=At,n.height=At,n.getContext("2d").putImageData(new ImageData(i,At,At),0,0),t=new Ks(n)}else t=new tr(i,At,At);return t.wrapS=t.wrapT=oi,t.colorSpace=e?qt:$n,t.anisotropy=8,t.magFilter=Xt,t.needsUpdate=!0,t}function IM(i,e,t,n){var r=ur(i),s=ur(e),a=ur(t);return function(o,c){var u=8,l=Math.floor(c*u),h=l%2?.5:0,f=o*4+h,p=Math.floor(f),v=f-p,y=c*u-l,g=Math.min(v,1-v)*4*.5,m=Math.min(y,1-y)*.5,_=Math.min(g,m*2),A=hr(o*8,c*8,4,n),w=$c(p&3,l,n),I=hr(o*24,c*24,2,n+5)>.72?.25:0;if(_<.045){var L=.8+A*.4;return{c:[a[0]*L,a[1]*L,a[2]*L],h:.1+A*.1,r:.95}}var D=Qc(w*.6+A*.5),S=.8+A*.35-I;return{c:[ci(s[0],r[0],D)*S,ci(s[1],r[1],D)*S,ci(s[2],r[2],D)*S],h:.6+A*.3-I+Math.min(_,.12)*2,r:.8+A*.15}}}function PM(i,e,t){var n=ur(i),r=ur(e);return function(s,a){var o=s*3,c=a*4+Math.floor(s*3)%2*.5,u=o-Math.floor(o),l=c-Math.floor(c),h=$c(Math.floor(o)%3,Math.floor(c)%4,t),f=Math.min(u,1-u,(l<.5?l:1-l)*1.5),p=hr(s*6,a*6,5,t);if(f<.035)return{c:[r[0]*.5,r[1]*.5,r[2]*.5],h:.1,r:.95};var v=Qc(p*.8+h*.4),y=.75+p*.4;return{c:[ci(r[0],n[0],v)*y,ci(r[1],n[1],v)*y,ci(r[2],n[2],v)*y],h:.5+p*.5,r:.9}}}function eu(i,e,t){var n=ur(i),r=ur(e);return function(s,a,o,c){var u=s*2%1,l=a*2%1,h=Math.min(u,1-u,l,1-l)<.012,f=[[.06,.06],[.94,.06],[.06,.94],[.94,.94]].some(function(g){var m=u-g[0],_=l-g[1];return m*m+_*_<9e-4}),p=hr(s*6,a*16,4,t),v=vm(s*90,a*4,90,t+3)>.9?.15:0,y=.75+p*.35+v;return h?{c:[r[0]*.4,r[1]*.4,r[2]*.4],h:.1,r:.6}:f?{c:[n[0]*1.2,n[1]*1.2,n[2]*1.2],h:1,r:.35}:{c:[ci(r[0],n[0],p)*y,ci(r[1],n[1],p)*y,ci(r[2],n[2],p)*y],h:.5+p*.1,r:.45+p*.2}}}function LM(i){var e=eu(5001824,1974568,i);return function(t,n,r,s){var a=e(t,n,r,s),o=Math.abs(n-.5)<.025&&t*4%1>.15&&t*4%1<.85,c=Math.abs(n-.15)<.04&&Math.abs(t*2%1-.5)<.12;return o?{c:[.2,.7,.8],h:.3,r:.3,e:[.15,.85,1]}:c?{c:[.9,.7,.3],h:.8,r:.3,e:[1,.6,.15]}:(a.e=[0,0,0],a)}}function tf(i){return function(e,t){var n=hr(e*5,t*5,5,i),r=1-Math.abs(hr(e*4,t*4,4,i+9)-.5)*2,s=r>.9?Qc((r-.9)*10):0,a=.35+n*.5,o=[.32*a+s*.9,.12*a+s*.35,.08*a];return{c:o,h:n-s*.4,r:.9-s*.5,e:[s*1,s*.35,s*.05]}}}function ef(i){var e=eu(6975352,2895412,31),t=i==="red"?[.9,.12,.08]:i==="blue"?[.15,.35,1]:null;return function(n,r,s,a){var o=e(n,r,s,a),c=r>.88&&Math.floor(n*16+r*16)%2===0;return r>.88?{c:c?[.85,.65,.1]:[.08,.08,.08],h:.6,r:.6,e:[0,0,0]}:Math.abs(n-.5)<.012?{c:[.05,.05,.05],h:0,r:.8,e:[0,0,0]}:t&&Math.abs(r-.45)<.05?{c:t,h:.7,r:.3,e:[t[0]*.8,t[1]*.8,t[2]*.8]}:(o.e=[0,0,0],o)}}function mm(i){var e=eu(5922664,2500654,41);return function(t,n,r,s){var a=e(t,n,r,s),o=Math.abs(t-.5)<.18&&Math.abs(n-.5)<.26;if(o){var c=Math.abs(t-.5)<.04&&(i?n>.5&&n<.72:n>.28&&n<.5),u=Math.abs(t-.5)<.08&&Math.abs(n-(i?.3:.7))<.04,l=i?[.2,1,.3]:[1,.15,.1];return u?{c:l,h:.9,r:.2,e:l}:c?{c:[.8,.8,.75],h:1,r:.3,e:[0,0,0]}:{c:[.06,.07,.06],h:.2,r:.7,e:[0,0,0]}}return a.e=[0,0,0],a}}function jc(i,e,t,n){var r=ur(i),s=ur(e);return function(a,o){var c=a*4%1,u=o*4%1,l=Math.min(c,1-c,u,1-u),h=$c(Math.floor(a*4),Math.floor(o*4),t),f=hr(a*8,o*8,4,t);if(l<.03)return{c:[s[0]*.4,s[1]*.4,s[2]*.4],h:.05,r:.95};if(n&&(c*10%1<.3||u*10%1<.3)&&l>.08)return{c:[s[0]*.3,s[1]*.3,s[2]*.3],h:.1,r:.6};var p=Qc(h*.5+f*.6),v=.7+f*.4;return{c:[ci(s[0],r[0],p)*v,ci(s[1],r[1],p)*v,ci(s[2],r[2],p)*v],h:.5+f*.3,r:n?.5:.8}}}function NM(i){var e=tf(i);return function(t,n){var r=e(t,n),s=hr(t*3,n*3,3,i+20)>.66;if(s){var a=hr(t*10,n*10,3,i+21);return{c:[1,.45+a*.3,.08],h:0,r:.4,e:[1.2,.45+a*.3,.05]}}return r}}function DM(i){return jc(2762274,1183760,i,!1)}var gm={};function Ln(i,e,t){return gm[i]||(gm[i]=RM(e,t))}function nf(i){switch(i){case 1:return Ln("brick",IM(9060914,4857364,2759960,1),{bump:4});case 2:return Ln("stone",PM(9078136,4867644,2),{bump:4});case 3:return Ln("metal",eu(5922664,2500654,3),{bump:3});case 4:return Ln("tech",LM(4),{emissive:!0,bump:3});case 5:return Ln("hell",tf(5),{emissive:!0,bump:5});case 6:return Ln("door",ef(null),{emissive:!0,bump:3});case 7:return Ln("doorRed",ef("red"),{emissive:!0,bump:3});case 8:return Ln("doorBlue",ef("blue"),{emissive:!0,bump:3});case 9:return Ln("switchOff",mm(!1),{emissive:!0,bump:3});case 10:return Ln("switchOn",mm(!0),{emissive:!0,bump:3})}return nf(1)}var Jc=null;function xm(){if(Jc)return Jc;var i=128,e=new Uint8ClampedArray(i*i*4),t=44;function n(c,u,l,h,f,p){if(!(c<0||u<0||c>=i||u>=i)){var v=(u*i+c)*4;e[v]=l,e[v+1]=h,e[v+2]=f,e[v+3]=Math.max(e[v+3],p)}}for(var r=10;r<118;r++)t+=r%7===0?1:r%9===0?-1:0,n(t-1,r,200,190,170,150),n(t+2,r,200,190,170,150),n(t,r,12,10,8,255),n(t+1,r,12,10,8,255);for(var s=0;s<16;s++)n(t+3+s,60+s,12,10,8,255),n(t+3+s,59+s,200,190,170,140);var a;if(typeof document!="undefined"){var o=document.createElement("canvas");o.width=o.height=i,o.getContext("2d").putImageData(new ImageData(e,i,i),0,0),a=new Ks(o)}else a=new tr(e,i,i);return a.colorSpace=qt,a.magFilter=Xt,a.needsUpdate=!0,Jc=new $t({map:a,transparent:!0,alphaTest:.3,depthWrite:!1,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1}),Jc}function rf(i){switch(i){case"tech":return Ln("fTech",jc(4869718,1842722,11,!0),{bump:3});case"hell":return Ln("fHell",NM(12),{emissive:!0,bump:4});case"ceilTech":return Ln("cTech",jc(3817030,1316378,13,!0),{bump:2});case"ceilHell":return Ln("cHell",tf(14),{emissive:!0,bump:4});case"ceilDark":return Ln("cDark",DM(15),{bump:2});default:return Ln("fSlab",jc(6972506,3025444,10,!1),{bump:3})}}function Vi(i,e){var t=new $t(Object.assign({map:i.map,normalMap:i.normalMap,roughnessMap:i.roughnessMap,roughness:1,metalness:.05},e||{}));return i.emissiveMap&&(t.emissiveMap=i.emissiveMap,t.emissive=new Ke(16777215),t.emissiveIntensity=1.6),t}function iu(){this.groups={}}iu.prototype.quad=function(i,e,t,n,r,s,a){var o=this.groups[i]||(this.groups[i]={pos:[],nor:[],uv:[]});[e,t,n,e,n,r].forEach(function(c){o.pos.push(c[0],c[1],c[2]),o.nor.push(s[0],s[1],s[2])}),[a[0],a[1],a[2],a[0],a[2],a[3]].forEach(function(c){o.uv.push(c[0],c[1])})};iu.prototype.meshes=function(i){var e=[];for(var t in this.groups){var n=this.groups[t],r=new Kt;r.setAttribute("position",new wt(n.pos,3)),r.setAttribute("normal",new wt(n.nor,3)),r.setAttribute("uv",new wt(n.uv,2));var s=new ke(r,i(t));s.name=t,e.push(s)}return e};function tu(i,e,t,n,r,s,a){if(!(a-s<.001)){var o,c,u,l,h;r==="E"?(o=[t+1,n+1],c=[t+1,n],u=[-1,0,0],l=n+1,h=n):r==="W"?(o=[t,n],c=[t,n+1],u=[1,0,0],l=n,h=n+1):r==="S"?(o=[t,n+1],c=[t+1,n+1],u=[0,0,-1],l=t,h=t+1):(o=[t+1,n],c=[t,n],u=[0,0,1],l=t+1,h=t),i.quad(e,[o[0],s,o[1]],[c[0],s,c[1]],[c[0],a,c[1]],[o[0],a,o[1]],u,[[l,s],[h,s],[h,a],[l,a]])}}var sf={E:[1,0],W:[-1,0],S:[0,1],N:[0,-1]};function Ao(i,e,t,n,r,s,a,o){i.quad(e,[t,a,r],[t,a,o],[s,a,o],[s,a,r],[0,1,0],[[t,r],[t,o],[s,o],[s,r]]),i.quad(e,[t,n,o],[t,n,r],[s,n,r],[s,n,o],[0,-1,0],[[t,o],[t,r],[s,r],[s,o]]),i.quad(e,[t,n,o],[s,n,o],[s,a,o],[t,a,o],[0,0,1],[[t,n],[s,n],[s,a],[t,a]]),i.quad(e,[s,n,r],[t,n,r],[t,a,r],[s,a,r],[0,0,-1],[[s,n],[t,n],[t,a],[s,a]]),i.quad(e,[s,n,o],[s,n,r],[s,a,r],[s,a,o],[1,0,0],[[o,n],[r,n],[r,a],[o,a]]),i.quad(e,[t,n,r],[t,n,o],[t,a,o],[t,a,r],[-1,0,0],[[r,n],[o,n],[o,a],[r,a]])}function af(i,e,t,n,r,s,a,o){r==="E"?Ao(i,e,t+1-o,s,n,t+1,s+a,n+1):r==="W"?Ao(i,e,t,s,n,t+o,s+a,n+1):r==="S"?Ao(i,e,t,s,n+1-o,t+1,s+a,n+1):Ao(i,e,t,s,n,t+1,s+a,n+o)}function _m(i){for(var e={},t=0;t<i.cells.length;t++){var n=i.cells[t];n>=1&&n<=5&&(e[n]=(e[n]||0)+1)}var r=1,s=-1;for(var a in e)e[a]>s&&(s=e[a],r=+a);return r}function OM(i,e,t){var n=_m(i);return[[1,0],[-1,0],[0,1],[0,-1]].forEach(function(r){var s=ri(i,e+r[0],t+r[1]);s>=1&&s<=5&&(n=s)}),n}function ym(i,e){function t(be){return e&&e.texture("tex:"+be)||nf(be)}function n(be){return e&&e.texture("tex:"+be)||rf(be)}var r=i.W,s=i.L,a=new iu,o=new xt,c="wall"+_m(r),u={};r.lifts.forEach(function(be){u[be.x+","+be.z]=be});var l=[],h={};(s.events||[]).forEach(function(be){(be.do||[]).forEach(function Ce(nt){nt.after&&(nt.do||[]).forEach(Ce);var ot=nt.raise||nt.lower;if(ot){var _t=Math.min(r.floor[ot[1]*r.mw+ot[0]],nt.to);l.push({box:ot,lo:_t});for(var V=ot[1];V<=ot[3];V++)for(var mt=ot[0];mt<=ot[2];mt++)h[mt+","+V]=_t}})});var f=[];function p(be,Ce){var nt=ri(r,be,Ce);return nt===0||!!pi[nt]}function v(be,Ce){var nt=u[be+","+Ce];return nt?nt.bottom:h[be+","+Ce]!==void 0?h[be+","+Ce]:un(r,be,Ce)}for(var y=0;y<r.mh;y++)for(var g=0;g<r.mw;g++)if(p(g,y)){var m=v(g,y),_=Li(r,g,y);!u[g+","+y]&&h[g+","+y]===void 0&&a.quad("floor",[g,m,y],[g,m,y+1],[g+1,m,y+1],[g+1,m,y],[0,1,0],[[g,y],[g,y+1],[g+1,y+1],[g+1,y]]),a.quad("ceil",[g,_,y],[g+1,_,y],[g+1,_,y+1],[g,_,y+1],[0,-1,0],[[g,y],[g+1,y],[g+1,y+1],[g,y+1]]);for(var A in sf){var w=g+sf[A][0],I=y+sf[A][1],L=ri(r,w,I);if(!p(w,I)){if(L===9||L===12){var D={x:w,z:I,faces:new iu,dir:A,exit:L===9};tu(D.faces,"sw",g,y,A,m,_),f.push(D)}else tu(a,"wall"+(L>=1&&L<=5?L:1),g,y,A,m,_);pi[ri(r,g,y)]||(af(a,"trim",g,y,A,m,.09,.035),_-m>2&&af(a,"trim",g,y,A,_-.12,.08,.05));continue}var S=v(w,I),x=Li(r,w,I);S>m&&(tu(a,c,g,y,A,m,Math.min(S,_)),S-m>.3&&af(a,"trim",g,y,A,S-.07,.07,.06)),x<_&&tu(a,c,g,y,A,Math.max(x,m),_)}}for(var b=0;b<r.mh;b++)for(var R=0;R<r.mw;R++)if(!(b%3!==1||ri(r,R,b)!==0)){var M=Li(r,R,b);M-un(r,R,b)<2.6||Ao(a,"beam",R,M-.2,b+.38,R+1,M,b+.62)}var P={};function O(be){return P[be]?P[be]:be==="floor"?P[be]=Vi(n(s.floor)):be==="ceil"?P[be]=Vi(n(s.ceil)):be==="trim"?P[be]=Vi(t(3),{color:10127992,metalness:.6,roughness:.5}):be==="beam"?P[be]=Vi(t(3),{color:6969930,metalness:.4}):P[be]=Vi(t(+be.slice(4)))}a.meshes(O).forEach(function(be){be.receiveShadow=!0,o.add(be)});var k=Vi(t(9)),X=Vi(t(10));f.forEach(function(be){be.faces.meshes(function(){return k}).forEach(function(Ce){be.mesh=Ce,o.add(Ce)})});for(var $=O("floor"),ne=O("trim"),re=l.map(function(be){var Ce=be.box,nt=Ce[2]-Ce[0]+1,ot=Ce[3]-Ce[1]+1,_t=3,V=new on(nt,_t,ot);nu(V,nt,_t);var mt=new ke(V,[ne,ne,$,ne,ne,ne]);return mt.userData={i:Ce[1]*r.mw+Ce[0],depth:_t,cx:Ce[0]+nt/2,cz:Ce[1]+ot/2},o.add(mt),mt}),oe=e&&e.texture("tex:hell")||rf("hell"),ae=new $t({color:16742944,emissive:16734736,emissiveIntensity:2.4,roughness:.4,map:oe.map,emissiveMap:oe.map}),Pe=[],He=0;He<r.mh;He++)for(var tt=0;tt<r.mw;tt++){var at=He*r.mw+tt;if(r.lava[at]){var rt=new ke(new wr(1,1),ae);rt.rotation.x=-Math.PI/2,rt.position.set(tt+.5,r.floor[at]+.04,He+.5),rt.userData.i=at,o.add(rt),Pe.push(rt)}}var le=[];for(var K in r.doors){var ce=r.doors[K],Me=un(r,ce.x,ce.z),he=Li(r,ce.x,ce.z),fe=he-Me,ve;if(ce.secret){ve=new ke(new on(1,fe,1),O("wall"+OM(r,ce.x,ce.z))),nu(ve.geometry,1,fe);var Ne=xm();[[0,.502,0],[Math.PI,-.502,0],[Math.PI/2,0,.502],[-Math.PI/2,0,-.502]].forEach(function(be){var Ce=new ke(new wr(.9,Math.min(fe,1.9)*.9),Ne);Ce.rotation.y=be[0],Ce.position.set(be[2],0,be[1]),ve.add(Ce)})}else{var qe=p(ce.x-1,ce.z)&&p(ce.x+1,ce.z),Ze=qe?new on(.22,fe,1):new on(1,fe,.22);ve=new ke(Ze,Vi(t(ce.locked==="red"?7:ce.locked==="blue"?8:6))),nu(ve.geometry,1,fe)}ve.position.set(ce.x+.5,Me+fe/2,ce.z+.5),ve.userData={door:ce,baseY:Me+fe/2,h:fe},ve.castShadow=!0,o.add(ve),le.push(ve)}var Ve=r.lifts.map(function(be){var Ce=Math.max(.2,be.top-be.bottom+.2),nt=new ke(new on(.98,Ce,.98),Vi(t(4)));return nu(nt.geometry,1,Ce),nt.userData={lift:be,h:Ce},o.add(nt),nt});return{group:o,update:function(){le.forEach(function(Ce){var nt=Ce.userData.door;Ce.position.y=Ce.userData.baseY+nt.open*Ce.userData.h*.98,Ce.visible=nt.open<.99}),Ve.forEach(function(Ce){var nt=Ce.userData.lift;Ce.position.set(nt.x+.5,nt.pos-Ce.userData.h/2,nt.z+.5)}),f.forEach(function(Ce){if(Ce.mesh){var nt=r.cells[Ce.z*r.mw+Ce.x];Ce.mesh.material=nt===10||nt===13?X:k}}),re.forEach(function(Ce){Ce.position.set(Ce.userData.cx,r.floor[Ce.userData.i]-Ce.userData.depth/2,Ce.userData.cz)});var be=performance.now()/1e3;ae.map.offset.set(be*.02,be*.013),ae.emissiveIntensity=2.2+Math.sin(be*2.3)*.3,Pe.forEach(function(Ce){Ce.visible=!!r.lava[Ce.userData.i],Ce.position.y=r.floor[Ce.userData.i]+.04})}}}function nu(i,e,t){for(var n=i.attributes.uv,r=0;r<n.count;r++){var s=Math.floor(r/4),a=(s<4,e),o=s===2||s===3?e:t;n.setXY(r,n.getX(r)*a,n.getY(r)*o)}n.needsUpdate=!0}var Ro=new j;function ui(i,e,t,n,r,s){let a=2*Math.PI*r/4,o=Math.max(s-2*r,0),c=Math.PI/4;Ro.copy(e),Ro[n]=0,Ro.normalize();let u=.5*a/(a+o),l=1-Ro.angleTo(i)/c;return Math.sign(Ro[t])===1?l*u:o/(a+o)+u+u*(1-l)}var ru=class i extends on{constructor(e=1,t=1,n=1,r=2,s=.1){let a=r*2+1;if(s=Math.min(e/2,t/2,n/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:r,radius:s},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new j,u=new j,l=new j(e,t,n).divideScalar(2).subScalar(s),h=this.attributes.position.array,f=this.attributes.normal.array,p=this.attributes.uv.array,v=h.length/6,y=new j,g=.5/a;for(let m=0,_=0;m<h.length;m+=3,_+=2)switch(c.fromArray(h,m),u.copy(c),u.x-=Math.sign(u.x)*g,u.y-=Math.sign(u.y)*g,u.z-=Math.sign(u.z)*g,u.normalize(),h[m+0]=l.x*Math.sign(c.x)+u.x*s,h[m+1]=l.y*Math.sign(c.y)+u.y*s,h[m+2]=l.z*Math.sign(c.z)+u.z*s,f[m+0]=u.x,f[m+1]=u.y,f[m+2]=u.z,Math.floor(m/v)){case 0:y.set(1,0,0),p[_+0]=ui(y,u,"z","y",s,n),p[_+1]=1-ui(y,u,"y","z",s,t);break;case 1:y.set(-1,0,0),p[_+0]=1-ui(y,u,"z","y",s,n),p[_+1]=1-ui(y,u,"y","z",s,t);break;case 2:y.set(0,1,0),p[_+0]=1-ui(y,u,"x","z",s,e),p[_+1]=ui(y,u,"z","x",s,n);break;case 3:y.set(0,-1,0),p[_+0]=1-ui(y,u,"x","z",s,e),p[_+1]=1-ui(y,u,"z","x",s,n);break;case 4:y.set(0,0,1),p[_+0]=1-ui(y,u,"x","y",s,e),p[_+1]=1-ui(y,u,"y","x",s,t);break;case 5:y.set(0,0,-1),p[_+0]=ui(y,u,"x","y",s,e),p[_+1]=1-ui(y,u,"y","x",s,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function of(i,e){if(e===Th)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===aa||e===yo){let t=i.getIndex();if(t===null){let s=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)s.push(o);i.setIndex(s),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,r=[];if(e===aa)for(let s=1;s<=n;s++)r.push(t.getX(0)),r.push(t.getX(s)),r.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(r.push(t.getX(s)),r.push(t.getX(s+1)),r.push(t.getX(s+2))):(r.push(t.getX(s+2)),r.push(t.getX(s+1)),r.push(t.getX(s)));return r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(r),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function su(i){let e=new Map,t=new Map,n=i.clone();return Mm(i,n,function(r,s){e.set(s,r),t.set(r,s)}),n.traverse(function(r){if(!r.isSkinnedMesh)return;let s=r,a=e.get(r),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Mm(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Mm(i.children[n],e.children[n],t)}var au=class extends Hi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new pf(t)}),this.register(function(t){return new mf(t)}),this.register(function(t){return new Tf(t)}),this.register(function(t){return new Ef(t)}),this.register(function(t){return new wf(t)}),this.register(function(t){return new vf(t)}),this.register(function(t){return new xf(t)}),this.register(function(t){return new _f(t)}),this.register(function(t){return new yf(t)}),this.register(function(t){return new df(t)}),this.register(function(t){return new Mf(t)}),this.register(function(t){return new gf(t)}),this.register(function(t){return new bf(t)}),this.register(function(t){return new Sf(t)}),this.register(function(t){return new hf(t)}),this.register(function(t){return new ou(t,St.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new ou(t,St.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Af(t)})}load(e,t,n,r){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let u=or.extractUrlBase(e);a=or.resolveURL(u,this.path)}else a=or.extractUrlBase(e);this.manager.itemStart(e);let o=function(u){r?r(u):console.error(u),s.manager.itemError(e),s.manager.itemEnd(e)},c=new js(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){try{s.parse(u,a,function(l){t(l),s.manager.itemEnd(e)},o)}catch(l){o(l)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s,a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===wm){try{a[St.KHR_BINARY_GLTF]=new Rf(e)}catch(h){r&&r(h);return}s=JSON.parse(a[St.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let u=new Of(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let l=0;l<this.pluginCallbacks.length;l++){let h=this.pluginCallbacks[l](u);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let l=0;l<s.extensionsUsed.length;++l){let h=s.extensionsUsed[l],f=s.extensionsRequired||[];switch(h){case St.KHR_MATERIALS_UNLIT:a[h]=new ff;break;case St.KHR_DRACO_MESH_COMPRESSION:a[h]=new Cf(s,this.dracoLoader);break;case St.KHR_TEXTURE_TRANSFORM:a[h]=new If;break;case St.KHR_MESH_QUANTIZATION:a[h]=new Pf;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}u.setExtensions(a),u.setPlugins(o),u.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}};function FM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function ln(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var St={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},hf=class{constructor(e){this.parser=e,this.name=St.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,r=t.cache.get(n);if(r)return r;let s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],u,l=new Ke(16777215);c.color!==void 0&&l.setRGB(c.color[0],c.color[1],c.color[2],Un);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":u=new rs(l),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new Vn(l),u.distance=h;break;case"spot":u=new to(l),u.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,u.angle=c.spot.outerConeAngle,u.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return u.position.set(0,0,0),Wi(u,c),c.intensity!==void 0&&(u.intensity=c.intensity),u.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(u),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},ff=class{constructor(){this.name=St.KHR_MATERIALS_UNLIT}getMaterialType(){return In}extendParams(e,t,n){let r=[];e.color=new Ke(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Un),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,qt))}return Promise.all(r)}},df=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=ln(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},pf=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return ln(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=ln(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new it(s,s)}return Promise.all(r)}},mf=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_DISPERSION}getMaterialType(e){return ln(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=ln(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},gf=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return ln(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=ln(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(r)}},vf=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SHEEN}getMaterialType(e){return ln(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=ln(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(t.sheenColor=new Ke(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],Un)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,qt)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(r)}},xf=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return ln(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=ln(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(r)}},_f=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_VOLUME}getMaterialType(e){return ln(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=ln(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ke().setRGB(s[0],s[1],s[2],Un),Promise.all(r)}},yf=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IOR}getMaterialType(e){return ln(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=ln(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Mf=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SPECULAR}getMaterialType(e){return ln(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=ln(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return t.specularColor=new Ke().setRGB(s[0],s[1],s[2],Un),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,qt)),Promise.all(r)}},Sf=class{constructor(e){this.parser=e,this.name=St.EXT_MATERIALS_BUMP}getMaterialType(e){return ln(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=ln(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(r)}},bf=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return ln(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=ln(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(r)}},Tf=class{constructor(e){this.parser=e,this.name=St.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},Ef=class{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=r.images[a.source],c=n.textureLoader;if(o.uri){let u=n.options.manager.getHandler(o.uri);u!==null&&(c=u)}return n.loadTextureImage(e,a.source,c)}},wf=class{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=r.images[a.source],c=n.textureLoader;if(o.uri){let u=n.options.manager.getHandler(o.uri);u!==null&&(c=u)}return n.loadTextureImage(e,a.source,c)}},ou=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let c=r.byteOffset||0,u=r.byteLength||0,l=r.count,h=r.byteStride,f=new Uint8Array(o,c,u);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(l,h,f,r.mode,r.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(l*h);return a.decodeGltfBuffer(new Uint8Array(p),l,h,f,r.mode,r.filter),p})})}else return null}},Af=class{constructor(e){this.name=St.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let u of r.primitives)if(u.mode!==hi.TRIANGLES&&u.mode!==hi.TRIANGLE_STRIP&&u.mode!==hi.TRIANGLE_FAN&&u.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let u in a)o.push(this.parser.getDependency("accessor",a[u]).then(l=>(c[u]=l,c[u])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(u=>{let l=u.pop(),h=l.isGroup?l.children:[l],f=u[0].count,p=[];for(let v of h){let y=new dt,g=new j,m=new Cn,_=new j(1,1,1),A=new Qr(v.geometry,v.material,f);for(let I=0;I<f;I++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,I),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,I),c.SCALE&&_.fromBufferAttribute(c.SCALE,I),A.setMatrixAt(I,y.compose(g,m,_));let w=null;for(let I in c)if(I==="_COLOR_0"){let L=c[I];A.instanceColor=new nr(L.array,L.itemSize,L.normalized)}else if(I!=="TRANSLATION"&&I!=="ROTATION"&&I!=="SCALE"){if(w===null){let D=A.geometry;w=new Kt,w.name=D.name;for(let S in D.attributes)w.setAttribute(S,D.attributes[S]);for(let S in D.morphAttributes)w.morphAttributes[S]=D.morphAttributes[S];D.index!==null&&w.setIndex(D.index),w.morphTargetsRelative=D.morphTargetsRelative;for(let S of D.groups)w.addGroup(S.start,S.count,S.materialIndex);D.boundingBox!==null&&(w.boundingBox=D.boundingBox.clone()),D.boundingSphere!==null&&(w.boundingSphere=D.boundingSphere.clone()),w.drawRange.start=D.drawRange.start,w.drawRange.count=D.drawRange.count,w.userData=Object.assign({},D.userData),A.geometry=w}let L=c[I];w.setAttribute(I,new nr(L.array,L.itemSize,L.normalized))}Yt.prototype.copy.call(A,v),this.parser.assignFinalMaterial(A),p.push(A)}return l.isGroup?(l.clear(),l.add(...p),l):p[0]}))}},wm="glTF",Co=12,Sm={JSON:1313821514,BIN:5130562},Rf=class{constructor(e){this.name=St.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Co),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==wm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-Co,s=new DataView(e,Co),a=0;for(;a<r;){let o=s.getUint32(a,!0);a+=4;let c=s.getUint32(a,!0);if(a+=4,c===Sm.JSON){let u=new Uint8Array(e,Co+a,o);this.content=n.decode(u)}else if(c===Sm.BIN){let u=Co+a;this.body=e.slice(u,u+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Cf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=St.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},u={};for(let l in a){let h=Nf[l]||l.toLowerCase();o[h]=a[l]}for(let l in e.attributes){let h=Nf[l]||l.toLowerCase();if(a[l]!==void 0){let f=n.accessors[e.attributes[l]],p=va[f.componentType];u[h]=p.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(l){return new Promise(function(h,f){r.decodeDracoFile(l,function(p){for(let v in p.attributes){let y=p.attributes[v],g=c[v];g!==void 0&&(y.normalized=g)}h(p)},o,u,Un,f)})})}},If=class{constructor(){this.name=St.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),r=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*r,e.offset.x,-e.repeat.x*r,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Pf=class{constructor(){this.name=St.KHR_MESH_QUANTIZATION}},lu=class extends Fi{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,u=o*3,l=r-t,h=(n-t)/l,f=h*h,p=f*h,v=e*u,y=v-u,g=-2*p+3*f,m=p-f,_=1-g,A=m-f+h;for(let w=0;w!==o;w++){let I=a[y+w+o],L=a[y+w+c]*l,D=a[v+w+o],S=a[v+w]*l;s[w]=_*I+A*L+g*D+m*S}return s}},HM=new Cn,Lf=class extends lu{interpolate_(e,t,n,r){let s=super.interpolate_(e,t,n,r);return HM.fromArray(s).normalize().toArray(s),s}},hi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},va={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},bm={9728:Xt,9729:an,9984:Kl,9985:ia,9986:ls,9987:Ei},Tm={33071:ai,33648:Us,10497:oi},lf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Nf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Or={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},BM={CUBICSPLINE:void 0,LINEAR:Jr,STEP:Zr},cf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function kM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new $t({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ki})),i.DefaultMaterial}function hs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Wi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function zM(i,e,t){let n=!1,r=!1,s=!1;for(let u=0,l=e.length;u<l;u++){let h=e[u];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);let a=[],o=[],c=[];for(let u=0,l=e.length;u<l;u++){let h=e[u];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(f)}if(r){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(f)}if(s){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(u){let l=u[0],h=u[1],f=u[2];return n&&(i.morphAttributes.position=l),r&&(i.morphAttributes.normal=h),s&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function GM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function VM(i){let e,t=i.extensions&&i.extensions[St.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+uf(t.attributes):e=i.indices+":"+uf(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+uf(i.targets[n]);return e}function uf(i){let e="",t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Df(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function WM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var qM=new dt,Of=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new FM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,a=-1;if(typeof navigator!="undefined"&&typeof navigator.userAgent!="undefined"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);r=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&r<17||s&&a<98?this.textureLoader=new is(this.options.manager):this.textureLoader=new no(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new js(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:n,userData:{}};return hs(s,o,r),Wi(o,r),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){let a=t[r].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){let a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),s=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[u,l]of a.children.entries())s(l,o.children[u])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[St.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(s,a){n.load(or.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let a=lf[r.type],o=va[r.componentType],c=r.normalized===!0,u=new o(r.count*a);return Promise.resolve(new jt(u,a,c))}let s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],c=lf[r.type],u=va[r.componentType],l=u.BYTES_PER_ELEMENT,h=l*c,f=r.byteOffset||0,p=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,v=r.normalized===!0,y,g;if(p&&p!==h){let m=Math.floor(f/p),_="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+m+":"+r.count,A=t.cache.get(_);A||(y=new u(o,m*p,r.count*p/l),A=new Gs(y,p/l),t.cache.add(_,A)),g=new Vs(A,c,f%p/l,v)}else o===null?y=new u(r.count*c):y=new u(o,f,r.count*c),g=new jt(y,c,v);if(r.sparse!==void 0){let m=lf.SCALAR,_=va[r.sparse.indices.componentType],A=r.sparse.indices.byteOffset||0,w=r.sparse.values.byteOffset||0,I=new _(a[1],A,r.sparse.count*m),L=new u(a[2],w,r.sparse.count*c);o!==null&&(g=new jt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let D=0,S=I.length;D<S;D++){let x=I[D];if(g.setX(x,L[D*c]),c>=2&&g.setY(x,L[D*c+1]),c>=3&&g.setZ(x,L[D*c+2]),c>=4&&g.setW(x,L[D*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=v}return g})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let r=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let u=this.loadImageSource(t,n).then(function(l){l.flipY=!1,l.name=a.name||o.name||"",l.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(l.name=o.uri);let f=(s.samplers||{})[a.sampler]||{};return l.magFilter=bm[f.magFilter]||an,l.minFilter=bm[f.minFilter]||Ei,l.wrapS=Tm[f.wrapS]||oi,l.wrapT=Tm[f.wrapT]||oi,l.generateMipmaps=!l.isCompressedTexture&&l.minFilter!==Xt&&l.minFilter!==an,r.associations.set(l,{textures:e}),l}).catch(function(){return null});return this.textureCache[c]=u,u}loadImageSource(e,t){let n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=r.images[e],o=self.URL||self.webkitURL,c=a.uri||"",u=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){u=!0;let f=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let l=Promise.resolve(c).then(function(h){return new Promise(function(f,p){let v=f;t.isImageBitmapLoader===!0&&(v=function(y){let g=new gn(y);g.needsUpdate=!0,f(g)}),t.load(or.resolveURL(h,s.path),v,void 0,p)})}).then(function(h){return u===!0&&o.revokeObjectURL(c),Wi(h,a),h.userData.mimeType=a.mimeType||WM(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=l,l}assignTexture(e,t,n,r){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[St.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[St.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=s.associations.get(a);a=s.extensions[St.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Ys,Hn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Xs,Hn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(r||s||a){let o="ClonedMaterial:"+n.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return $t}loadMaterial(e){let t=this,n=this.json,r=this.extensions,s=n.materials[e],a,o={},c=s.extensions||{},u=[];if(c[St.KHR_MATERIALS_UNLIT]){let h=r[St.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),u.push(h.extendParams(o,s,t))}else{let h=s.pbrMetallicRoughness||{};if(o.color=new Ke(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Un),o.opacity=f[3]}h.baseColorTexture!==void 0&&u.push(t.assignTexture(o,"map",h.baseColorTexture,qt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),u.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Wn);let l=s.alphaMode||cf.OPAQUE;if(l===cf.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===cf.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==In&&(u.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new it(1,1),s.normalTexture.scale!==void 0)){let h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&a!==In&&(u.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==In){let h=s.emissiveFactor;o.emissive=new Ke().setRGB(h[0],h[1],h[2],Un)}return s.emissiveTexture!==void 0&&a!==In&&u.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,qt)),Promise.all(u).then(function(){let h=new a(o);return s.name&&(h.name=s.name),Wi(h,s),t.associations.set(h,{materials:e}),s.extensions&&hs(r,h,s),h})}createUniqueName(e){let t=Gt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function s(o){return n[St.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Em(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let u=e[o],l=VM(u),h=r[l];if(h)a.push(h.promise);else{let f;u.extensions&&u.extensions[St.KHR_DRACO_MESH_COMPRESSION]?f=s(u):f=Em(new Kt,u,t),u.mode===hi.TRIANGLE_STRIP?f=f.then(p=>of(p,yo)):u.mode===hi.TRIANGLE_FAN&&(f=f.then(p=>of(p,aa))),r[l]={primitive:u,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,u=a.length;c<u;c++){let l=a[c].material===void 0?kM(this.cache):this.getDependency("material",a[c].material);o.push(l)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let u=c.slice(0,c.length-1),l=c[c.length-1],h=[];for(let p=0,v=l.length;p<v;p++){let y=l[p],g=a[p],m,_=u[p];if(g.mode===hi.TRIANGLES||g.mode===hi.TRIANGLE_STRIP||g.mode===hi.TRIANGLE_FAN||g.mode===void 0){let A=s.isSkinnedMesh===!0,w=y.hasAttribute("skinIndex")&&y.hasAttribute("skinWeight");A&&w===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=A&&w?new Va(y,_):new ke(y,_),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(g.mode===hi.LINES)m=new qa(y,_);else if(g.mode===hi.LINE_STRIP)m=new es(y,_);else if(g.mode===hi.LINE_LOOP)m=new Xa(y,_);else if(g.mode===hi.POINTS)m=new ts(y,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&GM(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),Wi(m,s),g.extensions&&hs(r,m,g),t.assignFinalMaterial(m),h.push(m)}for(let p=0,v=h.length;p<v;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return s.extensions&&hs(r,h[0],s),h[0];let f=new xt;s.extensions&&hs(r,f,s),t.associations.set(f,{meshes:e});for(let p=0,v=h.length;p<v;p++)f.add(h[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new sn(Rh.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Bi(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Wi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){let s=r.pop(),a=r,o=[],c=[];for(let u=0,l=a.length;u<l;u++){let h=a[u];if(h){o.push(h);let f=new dt;s!==null&&f.fromArray(s.array,u*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new Wa(o,c)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],c=[],u=[],l=[];for(let h=0,f=r.channels.length;h<f;h++){let p=r.channels[h],v=r.samplers[p.sampler],y=p.target,g=y.node,m=r.parameters!==void 0?r.parameters[v.input]:v.input,_=r.parameters!==void 0?r.parameters[v.output]:v.output;y.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",_)),u.push(v),l.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(u),Promise.all(l)]).then(function(h){let f=h[0],p=h[1],v=h[2],y=h[3],g=h[4],m=[];for(let A=0,w=f.length;A<w;A++){let I=f[A],L=p[A],D=v[A],S=y[A],x=g[A];if(I===void 0)continue;I.updateMatrix&&I.updateMatrix();let b=n._createAnimationTracks(I,L,D,S,x);if(b)for(let R=0;R<b.length;R++)m.push(b[R])}let _=new ns(s,void 0,m);return Wi(_,r),_})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,u=r.weights.length;c<u;c++)o.morphTargetInfluences[c]=r.weights[c]}),a})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=r.children||[];for(let u=0,l=o.length;u<l;u++)a.push(n.getDependency("node",o[u]));let c=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),c]).then(function(u){let l=u[0],h=u[1],f=u[2];f!==null&&l.traverse(function(p){p.isSkinnedMesh&&p.bind(f,qM)});for(let p=0,v=h.length;p<v;p++)l.add(h[p]);if(l.userData.pivot!==void 0&&h.length>0){let p=l.userData.pivot,v=h[0];l.pivot=new j().fromArray(p),l.position.x-=p[0],l.position.y-=p[1],l.position.z-=p[2],v.position.set(0,0,0),delete l.userData.pivot}return l})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],c=r._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(u){return r._getNodeRef(r.cameraCache,s.camera,u)})),r._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){o.push(u)}),this.nodeCache[e]=Promise.all(o).then(function(u){let l;if(s.isBone===!0?l=new Ws:u.length>1?l=new xt:u.length===1?l=u[0]:l=new Yt,l!==u[0])for(let h=0,f=u.length;h<f;h++)l.add(u[h]);if(s.name&&(l.userData.name=s.name,l.name=a),Wi(l,s),s.extensions&&hs(n,l,s),s.matrix!==void 0){let h=new dt;h.fromArray(s.matrix),l.applyMatrix4(h)}else s.translation!==void 0&&l.position.fromArray(s.translation),s.rotation!==void 0&&l.quaternion.fromArray(s.rotation),s.scale!==void 0&&l.scale.fromArray(s.scale);if(!r.associations.has(l))r.associations.set(l,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){let h=r.associations.get(l);r.associations.set(l,{...h})}return r.associations.get(l).nodes=e,l}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,s=new xt;n.name&&(s.name=r.createUniqueName(n.name)),Wi(s,n),n.extensions&&hs(t,s,n);let a=n.nodes||[],o=[];for(let c=0,u=a.length;c<u;c++)o.push(r.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let l=0,h=c.length;l<h;l++){let f=c[l];f.parent!==null?s.add(su(f)):s.add(f)}let u=l=>{let h=new Map;for(let[f,p]of r.associations)(f instanceof Hn||f instanceof gn)&&h.set(f,p);return l.traverse(f=>{let p=r.associations.get(f);p!=null&&h.set(f,p)}),h};return r.associations=u(s),s})}_createAnimationTracks(e,t,n,r,s){let a=[],o=e.name?e.name:e.uuid,c=[];function u(p){p.morphTargetInfluences&&c.push(p.name?p.name:p.uuid)}Or[s.path]===Or.weights?(u(e),e.isGroup&&e.children.forEach(u)):c.push(o);let l;switch(Or[s.path]){case Or.weights:l=rr;break;case Or.rotation:l=sr;break;case Or.translation:case Or.scale:l=Cr;break;default:n.itemSize===1?l=rr:l=Cr;break}let h=r.interpolation!==void 0?BM[r.interpolation]:Jr,f=this._getArrayFromAccessor(n);for(let p=0,v=c.length;p<v;p++){let y=new l(c[p]+"."+Or[s.path],t.array,f,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),a.push(y)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Df(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let r=this instanceof sr?Lf:lu;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function XM(i,e,t){let n=e.attributes,r=new Fn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,u=o.max;if(c!==void 0&&u!==void 0){if(r.set(new j(c[0],c[1],c[2]),new j(u[0],u[1],u[2])),o.normalized){let l=Df(va[o.componentType]);r.min.multiplyScalar(l),r.max.multiplyScalar(l)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new j,c=new j;for(let u=0,l=s.length;u<l;u++){let h=s[u];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],p=f.min,v=f.max;if(p!==void 0&&v!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(v[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(v[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(v[2]))),f.normalized){let y=Df(va[f.componentType]);c.multiplyScalar(y)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}i.boundingBox=r;let a=new kn;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=a}function Em(i,e,t){let n=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=Nf[a]||a.toLowerCase();o in i.attributes||r.push(s(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});r.push(a)}return vt.workingColorSpace!==Un&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${vt.workingColorSpace}" not supported.`),Wi(i,e),XM(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?zM(i,e.targets,t):i})}var cu=2,Am={imp:["imp"],gnasher:["gnasher"],knight:["knight","emberknight","ember_knight"],riley:["riley","rileyhologram"],fist:["fist","fists","fpfist","weaponfist"],pistol:["pistol","fppistol","weaponpistol"],shotgun:["shotgun","fpshotgun","weaponshotgun","pumpshotgun","doublebarrelshotgun"],chaingun:["chaingun","fpchaingun","weaponchaingun","minigun"],rocket:["rocketlauncher","rocket","fprocketlauncher","weaponrocketlauncher","launcher"],crate:["crate","woodencrate","crateintact"],barrel:["barrel","explosivebarrel","toxicbarrel"],torch:["torch","standingtorch"],lamp:["lamp","ceilinglamp","cagedlamp","ceilinglampintact","lampintact"],lampBroken:["lampbroken","ceilinglampbroken","brokenlamp"],pipeStraight:["pipestraight","pipe"],pipeElbow:["pipeelbow","elbow"],pipeValve:["pipevalve","valve"],chain:["chain","hangingchain"],"pickup:h":["medkitsmall","stimpack","smallmedkit","stim"],"pickup:+":["medkitlarge","medkit","largemedkit","medikit"],"pickup:b":["bulletclip","clip","ammoclip","bullets"],"pickup:a":["shellbox","shells","boxofshells"],"pickup:k":["rocketbox","rockets","boxofrockets"],"pickup:A":["armor","armour","armorvest","armourvest","vest"],"pickup:r":["keycardred","redkeycard","keyred"],"pickup:u":["keycardblue","bluekeycard","keyblue"],"pickup:P":["phoenixorb","orb"],"pickup:2":["shotgunpickup","pickupshotgun"],"pickup:3":["chaingunpickup","pickupchaingun"],"pickup:4":["rocketlauncherpickup","pickuprocketlauncher"],"tex:1":["brick"],"tex:2":["stone"],"tex:3":["metalpanel","metal"],"tex:4":["techpanel","tech"],"tex:5":["hellrock","hell"],"tex:6":["door","doorplain"],"tex:7":["doorred","doorredstripe","reddoor"],"tex:8":["doorblue","doorbluestripe","bluedoor"],"tex:9":["switchoff"],"tex:10":["switchon"],"tex:slab":["floorslab","slab"],"tex:tech":["floorgrate","grate"],"tex:hell":["lavafloor","floorlava"],"tex:ceilDark":["ceilingpanel","ceiling"],"tex:ceilTech":["ceilingpanel","ceilingtech"],"tex:ceilHell":["hellrock","ceilinghell"]};function Uf(i){return String(i||"").toLowerCase().replace(/\.[a-z0-9]+$/,"").replace(/.*[\/\\]/,"").replace(/[^a-z0-9]/g,"")}function Ff(){var i={models:{},textures:{},ready:!1,loaded:[],problems:[]};return i.model=function(e){for(var t=Am[e]||[e],n=0;n<t.length;n++)if(i.models[t[n]])return i.models[t[n]];return null},i.texture=function(e){for(var t=Am[e]||[e],n=0;n<t.length;n++)if(i.textures[t[n]])return i.textures[t[n]];return null},i}var YM=["assets/codex","assets/cc0","assets"];function Im(i){var e=typeof window!="undefined"&&window.FIREBIRD_ASSET_PACK;return e&&Object.prototype.hasOwnProperty.call(e,i)?e[i]:void 0}function Rm(i){var e=Im(i);if(e===void 0)return i;var t=/\.png$/i.test(i)?"image/png":/\.jpe?g$/i.test(i)?"image/jpeg":/\.webp$/i.test(i)?"image/webp":"model/gltf-binary";return"data:"+t+";base64,"+e}function KM(i){var e=Im(i+"/assets.json");return e!==void 0?Promise.resolve(e):typeof window!="undefined"&&window.FIREBIRD_ASSET_PACK||typeof location!="undefined"&&location.protocol==="file:"?Promise.resolve(null):fetch(i+"/assets.json",{cache:"no-cache"}).then(function(t){return t.ok?t.json():null}).catch(function(){return null})}function Pm(i){var e=typeof window!="undefined"&&window.FIREBIRD_ASSET_PACK;i=i||e&&e.__dirs||YM;var t=Ff(),n=new au,r=new is;return Promise.all(i.map(function(o){return KM(o).then(function(c){return{dir:o,man:c}})})).then(function(o){var c=[];return o.forEach(function(u,l){if(u.man){var h=Array.isArray(u.man)?u.man:u.man.assets||u.man.files||[];h.forEach(function(f){c.push(a(u.dir,f,l))})}}),Promise.all(c)}).then(function(){return t.ready=!0,t});function s(o,c,u,l){var h=o[c];(!h||h.priority>l)&&(u.priority=l,o[c]=u)}function a(o,c,u){var l=c.file||c.path||c.src,h=String(c.type||c.kind||"").toLowerCase(),f=Uf(c.id||c.name||l);if(l&&/\.glb$/i.test(l))return Cm(n.loadAsync(Rm(o+"/"+l)),2e4).then(function(_){s(t.models,f,{scene:_.scene,animations:_.animations||[],meta:c,type:h,dir:o},u),t.loaded.push(o+":"+f)}).catch(function(_){t.problems.push(o+"/"+l+": "+(_&&_.message||_))});if(h.indexOf("tex")===0||c.maps||c.textures){var p=c.maps||c.textures||{},v={},y=[],g={map:["albedo","basecolor","base_color","color","diffuse"],normalMap:["normal","normalmap"],roughnessMap:["roughness","rough","orm"],emissiveMap:["emissive","emission","glow"]},m=c.filter!=="linear";return Object.keys(g).forEach(function(_){var A=null;Object.keys(p).forEach(function(w){g[_].indexOf(w.toLowerCase().replace(/[^a-z_]/g,""))>=0&&(A=p[w])}),A&&y.push(Cm(r.loadAsync(Rm(o+"/"+A)),2e4).then(function(w){w.wrapS=w.wrapT=oi,w.anisotropy=8,w.colorSpace=_==="map"||_==="emissiveMap"?qt:$n,m&&(w.magFilter=Xt),v[_]=w}).catch(function(w){t.problems.push(o+"/"+A+": "+(w&&w.message||w))}))}),Promise.all(y).then(function(){v.map&&(s(t.textures,f,v,u),t.loaded.push(o+":tex:"+f))})}return null}}function Cm(i,e){return new Promise(function(t,n){var r=setTimeout(function(){n(new Error("timed out"))},e);i.then(function(s){clearTimeout(r),t(s)},function(s){clearTimeout(r),n(s)})})}function fs(i){var e=su(i.scene);e.traverse(function(r){r.isMesh&&(r.castShadow=!0,r.frustumCulled=!r.isSkinnedMesh,r.material&&(r.material=Array.isArray(r.material)?r.material.map(function(s){return s.clone()}):r.material.clone()))});var t=i.animations.length?new ro(e):null,n={};return i.animations.forEach(function(r){n[Uf(r.name).replace(/^.*\|/,"")]=r}),{obj:e,mixer:t,clips:n}}function Io(i,e){var t=Uf(e);if(i[t])return i[t];for(var n in i)if(n.indexOf(t)>=0)return i[n];return null}var Lm={};function je(i,e){return Lm[i]||(Lm[i]=e())}function Ot(i,e){return new $t(Object.assign({color:i,roughness:.7,metalness:.05},e||{}))}function Nn(i,e){return new $t({color:0,emissive:i,emissiveIntensity:e||3,roughness:1})}function st(i,e,t,n,r,s){var a=new ke(i,e);return a.position.set(t,n,r),a.castShadow=!0,(s||this).add(a),a}var ei=function(){return new Ar(1,16,12)},pn=function(){return new on(1,1,1)},Ur=function(){return new Ja(1,1,10)},Ai=function(){return new Zs(1,1,1,14)},ds=function(){return new Za(1,1,6,12)};function hu(i){var e=[];return i.traverse(function(t){t.isMesh&&t.material&&!t.userData.noFlash&&(t.material=t.material.clone(),e.push(t.material))}),e}function ZM(){var i=new xt,e=new xt;i.add(e);var t=Ot(8007196,{roughness:.6}),n=Ot(3806220),r=Ot(15259824,{roughness:.4}),s=st(je("cap",ds),t,0,.5,0,e);s.scale.set(.17,.14,.13),s.rotation.x=.35;var a=st(je("sph",ei),t,0,.72,.06,e);a.scale.set(.11,.1,.11),[-1,1].forEach(function(c){var u=st(je("cone",Ur),n,c*.07,.83,.02,e);u.scale.set(.025,.12,.025),u.rotation.z=-c*.5;var l=st(je("sph",ei),Nn(16752672,2),c*.045,.74,.15,e);l.scale.setScalar(.018),l.userData.noFlash=!0;var h=new xt;h.position.set(c*.17,.58,.02),e.add(h);var f=st(je("cap",ds),t,0,-.1,0,h);f.scale.set(.04,.09,.04);var p=st(je("cone",Ur),r,0,-.26,.03,h);p.scale.set(.03,.07,.03),p.rotation.x=Math.PI,h.userData.side=c,e.userData["arm"+c]=h;var v=st(je("cap",ds),n,c*.08,.18,0,e);v.scale.set(.05,.12,.05),e.userData["leg"+c]=v;var y=st(je("cone",Ur),n,c*.06,.55,-.12,e);y.scale.set(.03,.09,.03),y.rotation.x=-1.2});var o=hu(i);return{obj:i,mats:o,animate:function(c,u){var l=c.state==="chase"||c.state==="flee"?Math.sin(u*9+c.animT):0;e.position.y=Math.abs(l)*.03,e.userData.leg1.rotation.x=l*.6,e.userData["leg-1"].rotation.x=-l*.6;var h=c.state==="windup"?1:0;e.userData.arm1.rotation.x=-l*.5-h*2.4,e.userData["arm-1"].rotation.x=l*.5-h*.4,e.rotation.x=c.state==="pain"?-.35:0}}}function JM(){var i=new xt,e=new xt;i.add(e);var t=Ot(12873850,{roughness:.55}),n=Ot(3803152),r=Ot(16051416,{roughness:.3}),s=st(je("sph",ei),t,0,.36,0,e);s.scale.set(.34,.28,.32);var a=new xt;a.position.set(0,.3,.12),e.add(a);var o=st(je("sph",ei),n,0,.04,.12,e);o.scale.set(.24,.1,.12),o.position.y=.33;for(var c=0;c<9;c++){var u=(c/8-.5)*2.4,l=st(je("cone",Ur),r,Math.sin(u)*.22,.42,.14+Math.cos(u)*.14,e);l.scale.set(.028,.08,.028),l.rotation.x=Math.PI;var h=st(je("cone",Ur),r,Math.sin(u)*.2,-.02,Math.cos(u)*.14+.02,a);h.scale.set(.025,.07,.025)}var f=st(je("sph",ei),t,0,-.04,.02,a);f.scale.set(.26,.08,.22),[-1,1].forEach(function(v){var y=st(je("sph",ei),Nn(16752688,.9),v*.12,.56,.25,e);y.scale.setScalar(.02),y.userData.noFlash=!0;var g=st(je("cap",ds),t,v*.18,.1,0,e);g.scale.set(.07,.07,.07),e.userData["leg"+v]=g});var p=hu(i);return{obj:i,mats:p,animate:function(v,y){var g=v.state==="chase"||v.state==="flee"?Math.sin(y*14+v.animT):0;e.position.y=Math.abs(g)*.04,e.userData.leg1.position.z=g*.08,e.userData["leg-1"].position.z=-g*.08;var m=v.state==="windup"?.7:(Math.sin(y*6+v.animT)+1)*.08;a.rotation.x=m,e.rotation.x=v.state==="windup"?.25:v.state==="pain"?-.3:0}}}function jM(){var i=new xt,e=new xt;i.add(e);var t=Ot(9052182,{roughness:.35,metalness:.6}),n=Ot(2757648,{roughness:.5,metalness:.4}),r=Nn(16734736,4),s=st(je("box",pn),t,0,.82,0,e);s.scale.set(.5,.42,.3);var a=st(je("box",pn),n,0,.55,0,e);a.scale.set(.4,.16,.26);var o=st(je("sph",ei),r,0,.84,.16,e);o.scale.setScalar(.07),o.userData.noFlash=!0;var c=st(je("box",pn),t,0,1.12,.02,e);c.scale.set(.2,.18,.2);var u=st(je("box",pn),Nn(16747040,5),0,1.13,.12,e);u.scale.set(.15,.03,.02),u.userData.noFlash=!0,[-1,1].forEach(function(h){var f=st(je("cone",Ur),n,h*.14,1.26,0,e);f.scale.set(.04,.2,.04),f.rotation.z=-h*.7;var p=st(je("sph",ei),t,h*.3,1,0,e);p.scale.set(.14,.1,.14);var v=new xt;v.position.set(h*.33,.95,0),e.add(v),e.userData["arm"+h]=v;var y=st(je("box",pn),t,0,-.25,0,v);y.scale.set(.13,.42,.13);var g=st(je("box",pn),n,0,-.5,.02,v);g.scale.set(.15,.13,.15);var m=st(je("box",pn),n,h*.13,.24,0,e);m.scale.set(.15,.48,.17),e.userData["leg"+h]=m});var l=hu(i);return{obj:i,mats:l,animate:function(h,f){var p=h.state==="chase"?Math.sin(f*6+h.animT):0;e.userData.leg1.rotation.x=p*.4,e.userData["leg-1"].rotation.x=-p*.4,e.userData.arm1.rotation.x=h.state==="windup"?-2.2:-p*.3,e.userData["arm-1"].rotation.x=h.state==="windup"?-1.2:p*.3,e.position.y=Math.abs(p)*.03}}}function $M(){var i=new xt,e=new xt;i.add(e);var t=new $t({color:665648,emissive:4184296,emissiveIntensity:1.2,transparent:!0,opacity:.82,roughness:.3,metalness:.2}),n=new $t({color:0,emissive:10484991,emissiveIntensity:3}),r=st(je("cap",ds),t,0,.58,0,e);r.scale.set(.13,.16,.09);var s=st(je("box",pn),t,0,.4,0,e);s.scale.set(.22,.08,.13);var a=st(je("sph",ei),t,0,.86,0,e);a.scale.set(.085,.1,.09);var o=st(je("box",pn),n,0,.87,.07,e);o.scale.set(.12,.028,.02);var c=st(je("sph",ei),n,0,.64,.08,e);c.scale.setScalar(.03),[-1,1].forEach(function(f){var p=new xt;p.position.set(f*.15,.72,0),e.add(p),e.userData["arm"+f]=p;var v=st(je("cap",ds),t,0,-.14,0,p);v.scale.set(.035,.13,.035);var y=st(je("cap",ds),t,f*.07,.18,0,e);y.scale.set(.045,.16,.045),e.userData["leg"+f]=y});var u=new ke(je("sph",ei),new $t({color:0,emissive:16765502,emissiveIntensity:1.5,transparent:!0,opacity:.25,side:Wn,depthWrite:!1}));u.scale.setScalar(.62),u.position.y=.5,u.userData.noFlash=!0,i.add(u);var l=[t],h=new ke(new Rr(.34,.012,6,40),n);return h.rotation.x=Math.PI/2,h.position.y=.02,i.add(h),{obj:i,mats:l,animate:function(f,p){var v=f.state==="chase"?Math.sin(p*8+f.animT):0;e.userData.leg1.rotation.x=v*.5,e.userData["leg-1"].rotation.x=-v*.5,e.userData.arm1.rotation.x=f.state==="windup"?-1.5:-v*.4,e.userData["arm-1"].rotation.x=f.state==="windup"?-1.5:v*.4,e.position.y=.03+Math.sin(p*2)*.015;var y=f.state==="windup"&&f.attack!=="melee";n.emissive.setHex(y?16777215:10484991),n.emissiveIntensity=y?8:3,t.opacity=.7+Math.sin(p*23)*.06+(Math.random()<.02?-.3:0),u.visible=f.shieldT>0,u.rotation.y=p*1.5,h.scale.setScalar(1+Math.sin(p*3)*.05)}}}function QM(){var i=new xt,e=st(je("cyl",Ai),Ot(4872762,{roughness:.45,metalness:.5}),0,.28,0,i);e.scale.set(.2,.55,.2),[.08,.48].forEach(function(r){var s=st(je("cyl",Ai),Ot(2764326,{metalness:.6,roughness:.4}),0,r,0,i);s.scale.set(.205,.03,.205)});var t=st(je("cyl",Ai),Nn(7012154,2.5),0,.56,0,i);t.scale.set(.16,.01,.16),t.userData.noFlash=!0;var n=st(je("box",pn),Nn(16765502,1.5),0,.3,.2,i);return n.scale.set(.12,.12,.005),n.rotation.z=Math.PI/4,n.userData.noFlash=!0,{obj:i,mats:hu(i),animate:function(){}}}var eS={imp:ZM,gnasher:JM,knight:jM,riley:$M,barrel:QM};function tS(i,e){var t=fs(i),n=new xt;t.obj.scale.setScalar(1/cu),n.add(t.obj);var r=[],s=[],a=t.obj.getObjectByName("shield");t.obj.traverse(function(h){h.isMesh&&(Array.isArray(h.material)?h.material:[h.material]).forEach(function(f){f.emissive&&f.emissiveIntensity>1.2&&(f.emissiveIntensity=1.2),/tell/i.test(f.name)||/tell/i.test(h.name)?s.push(f):f.emissive&&r.push(f)})});var o=null,c=null;function u(h,f){if(t.mixer){var p=Io(t.clips,h)||(h==="attack_windup"?Io(t.clips,"attack"):null)||Io(t.clips,"idle");if(p){var v=t.mixer.clipAction(p);o!==v&&(v.reset(),v.setLoop(f?Lc:Nc,1/0),v.clampWhenFinished=!!f,v.play(),o&&o.crossFadeTo(v,.15,!1),o=v)}}}var l={idle:"idle",chase:"walk",flee:"walk",windup:"attack_windup",pain:"pain",die:"death",dead:"death"};return{obj:n,mats:r,animate:function(h,f,p){var v=h.state||"idle";v!==c&&(c==="windup"&&v==="chase"&&Io(t.clips,"attack")?u("attack",!0):u(l[v]||"idle",v==="pain"||v==="die"||v==="dead"),c=v),o&&o.getClip().name&&/attack$/i.test(o.getClip().name)&&!o.isRunning()&&v==="chase"&&u("walk"),t.mixer&&t.mixer.update(p||0);var y=v==="windup"&&h.attack!=="melee";s.forEach(function(g){g.emissive&&(g.emissive.setHex(y?16777215:10484991),g.emissiveIntensity=y?6:2)}),a&&(a.visible=h.shieldT>0)},authored:!0,clip:function(){return o?o.getClip().name:null}}}function Nm(i,e){var t=e&&e.model(i.kind),n=t?tS(t,i):eS[i.kind](),r=!t&&i.kind==="riley"?i.h/.95:1;n.obj.scale.setScalar(r);var s=0,a=n.animate;return n.debug=function(){return{kind:i.kind,authored:!!n.authored,clip:n.clip?n.clip():null,state:i.state}},n.update=function(o,c,u){n.obj.position.set(i.x,i.y,i.z);var l=i.state==="windup"||i.state==="pain"||i.los?u:i.moveAng||0,h=n.obj.rotation.y,f=-l+Math.PI/2,p=Math.atan2(Math.sin(f-h),Math.cos(f-h));if(n.obj.rotation.y=h+p*Math.min(1,c*10),n.authored)a(i,o,c);else if(i.state==="die"||i.state==="dead"){s+=c;var v=Math.min(1,s/.45);n.obj.rotation.x=-v*1.35,n.obj.position.y=i.y+.05*v,n.obj.scale.setScalar(r*(1-v*.15)),i.kind==="riley"&&(n.obj.visible=s*12%1<.6&&s<1.4)}else a(i,o);var y=i.flashT>0&&i.state!=="dead";n.mats.forEach(function(g){g.userData.base||(g.userData.base={e:g.emissive?g.emissive.getHex():0,i:g.emissiveIntensity}),y?(g.emissive.setHex(16777215),g.emissiveIntensity=1.4):(g.emissive.setHex(g.userData.base.e),g.emissiveIntensity=g.userData.base.i)})},n}function Dm(i,e){var t=new xt,n=new xt;t.add(n);var r=i.item,s=e&&e.model("pickup:"+r);if(s){var a=fs(s);a.obj.scale.setScalar(1/cu),n.add(a.obj)}else if(r==="h"||r==="+"){var o=r==="+",c=st(je("box",pn),Ot(15789280,{roughness:.5}),0,.1,0,n);c.scale.set(o?.34:.2,o?.2:.14,o?.24:.14);var u=st(je("box",pn),Nn(16722458,2),0,.1,0,n);u.scale.set(o?.22:.13,o?.06:.04,o?.245:.145);var l=st(je("box",pn),Nn(16722458,2),0,.1,0,n);l.scale.set(o?.07:.045,o?.06:.04,o?.245:.145),l.scale.set(o?.345:.205,o?.06:.04,o?.07:.045)}else if(r==="b"){var h=st(je("box",pn),Ot(6972504,{metalness:.5,roughness:.4}),0,.08,0,n);h.scale.set(.1,.16,.06);var f=st(je("box",pn),Ot(14196800,{metalness:.8,roughness:.3}),0,.17,0,n);f.scale.set(.08,.03,.04)}else if(r==="a"){var p=st(je("box",pn),Ot(10496024,{roughness:.6}),0,.09,0,n);p.scale.set(.3,.18,.18);for(var v=0;v<4;v++){var y=st(je("cyl",Ai),Ot(14196800,{metalness:.8,roughness:.3}),-.1+v*.066,.2,0,n);y.scale.set(.022,.06,.022)}}else if(r==="A"){var g=st(je("box",pn),Ot(3050042,{metalness:.4,roughness:.4}),0,.2,0,n);g.scale.set(.34,.36,.14);var m=st(je("box",pn),Nn(8060810,1.2),0,.26,.075,n);m.scale.set(.16,.1,.01)}else if(r==="2"){var _=Hf(!0);_.scale.setScalar(.9),_.rotation.z=.2,_.position.y=.15,n.add(_)}else if(r==="r"||r==="u"){var A=r==="r"?16722458:3832575,w=st(je("box",pn),Nn(A,2.5),0,.2,0,n);w.scale.set(.16,.22,.015);var I=st(je("box",pn),Ot(15788760),0,.25,0,n);I.scale.set(.12,.03,.02)}else if(r==="P"){var L=st(je("sph",ei),Nn(16756800,4),0,.3,0,n);L.scale.setScalar(.14);var D=new ke(new Rr(.2,.012,6,32),Nn(16765502,3));D.position.y=.3,n.add(D)}var S=r==="r"||r==="u"||r==="P"||r==="2";return{obj:t,update:function(x){t.position.set(i.x,i.y,i.z),t.visible=!i.gone,S&&(n.rotation.y=x*1.8+i.bob),n.position.y=S?.08+Math.sin(x*2.5+i.bob)*.05:0}}}function Om(i,e){var t=new xt,n=e&&e.model("torch");if(n){var r=fs(n);return r.obj.scale.setScalar(1/cu),t.add(r.obj),t.position.set(i.x,i.y,i.z),{obj:t,update:function(l){r.mixer&&r.mixer.update(1/60)}}}var s=st(je("cyl",Ai),Ot(3811866,{metalness:.3}),0,.4,0,t);s.scale.set(.03,.8,.03);var a=st(je("cyl",Ai),Ot(5917242,{metalness:.6,roughness:.4}),0,.82,0,t);a.scale.set(.1,.06,.1);var o=new xt;o.position.y=.9,t.add(o);var c=st(je("cone",Ur),Nn(16747040,5),0,.08,0,o);c.scale.set(.08,.2,.08);var u=st(je("cone",Ur),Nn(16769120,6),0,.05,0,o);return u.scale.set(.045,.12,.045),t.position.set(i.x,i.y,i.z),{obj:t,update:function(l){var h=Math.sin(l*17+i.animT*9)*.5+Math.sin(l*29+i.animT*3)*.5;o.scale.set(1+h*.1,1+h*.25,1+h*.1),o.rotation.y=l*3}}}var nS=function(i,e,t,n){return new ru(i,e,t,3,n)};function bn(i,e,t,n,r){return je("rb"+i,function(){return nS(e,t,n,r)})}var Um=function(){return Ot(3816772,{metalness:.9,roughness:.3})},Fm=function(){return Ot(1842724,{metalness:.85,roughness:.4})},iS=function(){return Ot(6961690,{roughness:.55,metalness:.05})},uu=function(){return Ot(2760988,{roughness:.85})},Hm=function(){return Ot(3818032,{roughness:.9})};function Bm(i,e){var t=!1;i.traverse(function(n){/hand|arm|glove/i.test(n.name)&&(t=!0)}),!t&&(e==="shotgun"||e==="chaingun"||e==="rocket"?(xa(i,.01,-.07,.08,.4),xa(i,-.01,-.05,-.2,.1)):e!=="fist"&&xa(i,0,-.06,.02,.3))}function xa(i,e,t,n,r){var s=new xt;s.position.set(e,t,n),s.rotation.x=r||0,i.add(s);var a=new ke(bn("palm",.07,.05,.09,.02),uu());s.add(a);var o=new ke(bn("fing",.075,.03,.05,.012),uu());o.position.set(0,-.03,-.03),s.add(o);var c=new ke(je("cyl",Ai),Hm());return c.scale.set(.045,.28,.045),c.rotation.x=Math.PI/2-.15,c.position.set(.01,-.02,.17),s.add(c),s}function Hf(i){var e=new xt,t=Um(),n=Fm(),r=iS();[-.019,.019].forEach(function(y){var g=new ke(je("cyl",Ai),t);g.scale.set(.019,.62,.019),g.rotation.x=Math.PI/2,g.position.set(y,0,-.36),e.add(g);var m=new ke(je("cyl",Ai),Ot(328965));m.scale.set(.013,.01,.013),m.rotation.x=Math.PI/2,m.position.set(y,0,-.672),e.add(m)});var s=new ke(bn("rib",.012,.01,.6,.004),n);s.position.set(0,.022,-.36),e.add(s);var a=new ke(je("sph",ei),Nn(16769184,1.2));a.scale.setScalar(.006),a.position.set(0,.03,-.66),e.add(a);var o=new xt;o.position.set(0,-.034,-.3),e.add(o),e.userData.pump=o;var c=new ke(bn("fore",.066,.05,.2,.015),r);o.add(c);for(var u=0;u<5;u++){var l=new ke(bn("grip",.068,.006,.012,.002),Ot(3808780));l.position.set(0,-.022,-.08+u*.04),o.add(l)}var h=new ke(bn("recv",.075,.085,.2,.012),n);h.position.set(0,-.012,.02),e.add(h);var f=new ke(bn("port",.005,.03,.07,.003),Ot(657930));f.position.set(.039,0,0),e.add(f);var p=new ke(new Rr(.025,.005,6,14,Math.PI),n);p.position.set(0,-.055,.07),p.rotation.set(0,Math.PI/2,Math.PI),e.add(p);var v=new ke(bn("stock",.064,.1,.28,.02),r);return v.position.set(0,-.055,.24),v.rotation.x=-.14,e.add(v),i||(e.userData.pumpHand=xa(o,-.005,-.045,.01,.1),xa(e,.01,-.08,.1,.4)),e}function km(){var i=new xt,e=Um(),t=Fm(),n=new ke(bn("slide",.042,.042,.19,.008),e);n.position.set(0,.02,-.07),i.add(n),i.userData.slide=n;for(var r=0;r<6;r++){var s=new ke(bn("ser",.044,.03,.004,.001),t);s.position.set(0,.022,0+r*.008-.02),n.add(s),s.position.set(0,0,.06+r*.008)}var a=new ke(bn("frame",.038,.03,.16,.008),t);a.position.set(0,-.012,-.06),i.add(a);var o=new ke(je("cyl",Ai),Ot(526344));o.scale.set(.009,.01,.009),o.rotation.x=Math.PI/2,o.position.set(0,.022,-.166),i.add(o);var c=new ke(bn("pgrip",.036,.11,.05,.01),Ot(2761760,{roughness:.8}));c.position.set(0,-.07,.01),c.rotation.x=.28,i.add(c);var u=new ke(new Rr(.018,.004,6,14,Math.PI),t);u.position.set(0,-.03,-.035),u.rotation.set(0,Math.PI/2,Math.PI),i.add(u);var l=new ke(bn("sight",.006,.01,.01,.002),Nn(16734762,1.5));l.position.set(0,.046,-.155),i.add(l);var h=new ke(bn("rear",.03,.01,.008,.002),t);return h.position.set(0,.046,.02),i.add(h),xa(i,0,-.07,.04,.3),i}function zm(){var i=new xt,e=new ke(bn("fist",.1,.085,.11,.03),uu());i.add(e);var t=new ke(bn("knuck",.105,.04,.03,.012),Ot(5917242,{metalness:.7,roughness:.35}));t.position.set(0,.02,-.06),i.add(t);var n=new ke(bn("thumb",.03,.03,.06,.012),uu());n.position.set(-.05,-.01,-.02),i.add(n);var r=new ke(je("cyl",Ai),Hm());return r.scale.set(.05,.3,.05),r.rotation.x=Math.PI/2,r.position.set(0,-.01,.2),i.add(r),i}var ti=3e3;function Gm(i){var e=new Float32Array(ti*3),t=new Float32Array(ti*3),n=new Float32Array(ti),r=new Float32Array(ti),s=new Float32Array(ti*3),a=new Float32Array(ti),o=new Float32Array(ti),c=new Float32Array(ti),u=new Float32Array(ti),l=new Float32Array(ti*3),h=new Uint8Array(ti),f=new Kt;f.setAttribute("position",new jt(e,3).setUsage(oa)),f.setAttribute("color",new jt(t,3).setUsage(oa)),f.setAttribute("size",new jt(n,1).setUsage(oa)),f.setAttribute("alpha",new jt(r,1).setUsage(oa));var p=new en({uniforms:{scale:{value:600}},vertexShader:["attribute float size; attribute float alpha; attribute vec3 color; varying vec3 vC; varying float vA;","uniform float scale;","void main(){ vC = color; vA = alpha; vec4 mv = modelViewMatrix * vec4(position,1.0);"," gl_PointSize = size * scale / -mv.z; gl_Position = projectionMatrix * mv; }"].join(`
`),fragmentShader:["varying vec3 vC; varying float vA;","void main(){ vec2 d = gl_PointCoord - 0.5; float r = dot(d,d); if (r > 0.25) discard;"," float k = smoothstep(0.25, 0.0, r); gl_FragColor = vec4(vC * k * vA, k * vA); }"].join(`
`),transparent:!0,depthWrite:!1,blending:lr}),v=new ts(f,p);v.frustumCulled=!1,i.add(v);var y=0,g=0;function m(x,b,R,M,P,O,k,X,$,ne,re,oe){var ae=y;y=(y+1)%ti,g=Math.min(ti,g+1),e[ae*3]=x,e[ae*3+1]=b,e[ae*3+2]=R,s[ae*3]=M,s[ae*3+1]=P,s[ae*3+2]=O,l[ae*3]=k[0],l[ae*3+1]=k[1],l[ae*3+2]=k[2],n[ae]=X,a[ae]=o[ae]=$,c[ae]=ne||0,u[ae]=re||0,h[ae]=oe?0:1}function _(x){return(Math.random()-.5)*2*x}for(var A=[],w=0;w<6;w++){var I=new Vn(16755285,0,6,1.6);I.userData={t:0,max:0,peak:0},i.add(I),A.push(I)}var L=0;function D(x,b,R,M,P,O,k){var X=A[L];L=(L+1)%A.length,X.position.set(x,b,R),X.color.setHex(M),X.distance=k||6,X.userData.t=X.userData.max=O,X.userData.peak=P}var S={blood:function(x){for(var b=0;b<14;b++)m(x.x,x.y,x.z,x.dx*1.5+_(1.2),_(1)+1,x.dz*1.5+_(1.2),[.55,.02,.02],.05+Math.random()*.04,.6,9)},spark:function(x){for(var b=0;b<12;b++)m(x.x,x.y,x.z,_(3),_(3)+1,_(3),[1.4,1.1,.5],.025,.35,8);D(x.x,x.y,x.z,10484991,2,.1,3)},puff:function(x){for(var b=0;b<6;b++)m(x.x,x.y,x.z,_(.3),_(.3)+.2,_(.3),[.25,.23,.2],.12,.5,-.2,.3);for(var R=0;R<5;R++)m(x.x,x.y,x.z,_(2.5),_(2.5),_(2.5),[1.6,1,.4],.02,.18,6)},muzzle:function(x){var b=x.weapon==="shotgun";D(x.x,x.y,x.z,16756832,b?6:3.5,.07,b?8:6)},fireBurst:function(x){for(var b=0;b<22;b++)m(x.x,x.y,x.z,_(2),_(2)+.5,_(2),[1.8,.7,.15],.06,.35,2,-.1);D(x.x,x.y,x.z,16742944,4,.25,5)},greenBurst:function(x){for(var b=0;b<22;b++)m(x.x,x.y,x.z,_(2),_(2)+.5,_(2),[.3,1.6,1.8],.06,.35,2,-.1);D(x.x,x.y,x.z,6287615,4,.25,5)},explosion:function(x){for(var b=0;b<90;b++){var R=Math.random()<.5;m(x.x,x.y,x.z,_(4),_(3)+2,_(4),R?[2,1.2,.3]:[1.4,.4,.05],.12+Math.random()*.1,.5+Math.random()*.4,3,.4)}for(var M=0;M<30;M++)m(x.x,x.y+.3,x.z,_(1),Math.random()*1.5,_(1),[.18,.15,.13],.35,1.4,-.5,.6);D(x.x,x.y+.5,x.z,16747056,14,.5,9)},gib:function(x){for(var b=x.kind==="gnasher"?[.6,.15,.2]:[.5,.05,.02],R=0;R<26;R++)m(x.x,x.y,x.z,_(2),Math.random()*3,_(2),b,.06+Math.random()*.05,.9,9);if(x.kind==="riley")for(var M=0;M<60;M++)m(x.x,x.y+Math.random(),x.z,_(1),Math.random()*1.5,_(1),[.3,1.5,1.7],.04,1.4,-.4)},summon:function(x){for(var b=0;b<50;b++)m(x.x+_(.4),x.y,x.z+_(.4),_(.5),Math.random()*2.5,_(.5),[1.8,.5,.1],.07,.8,-1);D(x.x,x.y+.5,x.z,16734736,6,.6,6)},pickup:function(x){for(var b=0;b<16;b++)m(x.x,x.y,x.z,_(1),Math.random()*1.5,_(1),[1.4,1.2,.5],.03,.5,-1)}};return{points:v,event:function(x){S[x.name]&&S[x.name](x)},trail:function(x,b,R,M){m(x,b,R,_(.2),_(.2),_(.2),M?[.3,1.4,1.6]:[1.8,.6,.1],.07,.3,0,-.15)},ember:function(x,b,R){m(x+_(.05),b,R+_(.05),_(.15),.4+Math.random()*.4,_(.15),[1.6,.6,.1],.02,1.1,-.2)},update:function(x,b){p.uniforms.scale.value=b;for(var R=0;R<g;R++){if(a[R]<=0){r[R]=0;continue}a[R]-=x,s[R*3+1]-=c[R]*x,e[R*3]+=s[R*3]*x,e[R*3+1]+=s[R*3+1]*x,e[R*3+2]+=s[R*3+2]*x;var M=Math.max(0,a[R]/o[R]);r[R]=h[R]?M:1,n[R]=Math.max(.005,n[R]+u[R]*x),t[R*3]=l[R*3],t[R*3+1]=l[R*3+1]*(.5+.5*M),t[R*3+2]=l[R*3+2]*M}f.attributes.position.needsUpdate=f.attributes.color.needsUpdate=f.attributes.size.needsUpdate=f.attributes.alpha.needsUpdate=!0,f.setDrawRange(0,g),A.forEach(function(P){var O=P.userData;O.t>0?(O.t-=x,P.intensity=O.peak*Math.max(0,O.t/O.max)):P.intensity=0})}}}var Vm={slab:788743,tech:395532,hell:1443332};function Wm(i,e){e=e||{};var t=new kc({canvas:i,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!e.preserve}),n={scale:1,bloom:!0,shake:!0,weapon:!0};function r(){return Math.min(window.devicePixelRatio||1,1.5)*n.scale}t.setPixelRatio(r()),t.toneMapping=as,t.toneMappingExposure=1.45;var s=new ha(t),a=s.fromScene(new Kc,.04).texture;t.outputColorSpace=qt,t.shadowMap.enabled=!1,t.info.autoReset=!1;var o=new sn(78,16/9,.03,60);o.rotation.order="YXZ";var c=null,u=null,l=null,h=null,f=null,p=new Map,v=[],y=new Map,g=[],m=new Tr,_=new sn(60,16/9,.01,5),A=new Vn(16756848,0,3,1.5),w=new rs(16767152,1.2);w.position.set(-1,2,1),m.add(new ea(16777215,.35),new $s(16769216,2103312,.8),A,w),m.environment=a,m.environmentIntensity=.6;var I=Ff(),L=new xt,D={};m.add(L);var S={fist:{p:[.14,-.15,-.3],ry:0},pistol:{p:[.15,-.14,-.38],ry:.06},shotgun:{p:[.1,-.13,-.2],ry:.04},chaingun:{p:[.12,-.15,-.22],ry:.04},rocket:{p:[.13,-.16,-.2],ry:.04}},x={fist:zm,pistol:km,shotgun:Hf};function b(){Object.keys(D).forEach(function(K){L.remove(D[K])}),D={},Object.keys(S).forEach(function(K){var ce=I.model(K),Me;if(ce){Me=new xt;var he=fs(ce);Me.add(he.obj),he.obj.rotation.y=Math.PI,he.obj.updateMatrixWorld(!0);var fe=new Fn().setFromObject(he.obj,!0),ve=fe.max.z-fe.min.z;Me.userData.authoredLength=ve;var Ne={fist:.2,pistol:.24,shotgun:.85,chaingun:.8,rocket:.9};ve>.001&&Ne[K]&&he.obj.scale.multiplyScalar(Ne[K]/ve),["pump","slide","barrels","tube"].forEach(function(Ze){var Ve=he.obj.getObjectByName(Ze);Ve&&(Me.userData[Ze]=Ve)}),Me.userData.authored=!0,Bm(Me,K)}else if(x[K])Me=x[K]();else return;var qe=S[K];Me.position.set(qe.p[0],qe.p[1],qe.p[2]),Me.rotation.y=qe.ry,Me.userData.baseZ=qe.p[2],Me.visible=!1,L.add(Me),D[K]=Me})}b();function R(K,ce){K&&(K.userData.z0===void 0&&(K.userData.z0=K.position.z),K.position.z=K.userData.z0+ce)}var M=new ke(new Ar(1,10,8),new In({color:16765056,transparent:!0,opacity:.9,blending:lr,depthWrite:!1}));M.scale.setScalar(.035),m.add(M);var P=0,O={x:0,y:0},k=0,X=0,$=null,ne={w:1,h:1,top:0};function re(K){$=K,c=new Tr;var ce=Vm[K.L.floor]||Vm.slab;c.background=new Ke(ce),c.fog=new ka(ce,.032),c.environment=a,c.environmentIntensity=.25,c.add(new $s(10520696,2103840,.9)),c.add(new ea(5261384,.5)),h=ym(K,I),c.add(h.group),f=Gm(c),p.clear(),y.clear(),v=[],K.ents.forEach(function(fe){if(fe.kind==="torch"){var ve=Om(fe,I);c.add(ve.obj),p.set(fe,ve);var Ne=new Vn(16747066,2.2,7.5,1.4);Ne.position.set(fe.x,fe.y+1,fe.z),Ne.userData.e=fe,c.add(Ne),v.push(Ne)}}),g=(K.L.lights||[]).map(function(fe){var ve=new Vn(fe.color||16777215,fe.intensity||2,fe.dist||10,1.3);return ve.position.set(fe.x,fe.y||1.5,fe.z),ve.userData=fe,c.add(ve),ve});var Me=K.L.darkZones||[];function he(fe){return Me.some(function(ve){return fe.x>=ve[0]&&fe.x<=ve[2]+1&&fe.z>=ve[1]&&fe.z<=ve[3]+1})}ae(K).forEach(function(fe){if(!he(fe)){var ve=new Vn(13154472,1.6+fe.size*.02,4+Math.sqrt(fe.size)*1.6,1.1);ve.position.set(fe.x,fe.y,fe.z),c.add(ve);var Ne=I.model("lamp");if(Ne){var qe=fs(Ne);qe.obj.scale.setScalar(.5),qe.obj.position.set(fe.x,fe.y+.4,fe.z),c.add(qe.obj);return}var Ze=new xt,Ve=new ke(new on(.5,.05,.5),new $t({color:0,emissive:16770752,emissiveIntensity:1.1})),be=new ke(new on(.58,.1,.58),new $t({color:2762790,metalness:.8,roughness:.4,wireframe:!0}));Ze.add(Ve,be),Ze.position.set(fe.x,fe.y+.35,fe.z),c.add(Ze)}}),u=new qc(t),u.addPass(new Xc(c,o)),l=new ma(new it(256,256),.75,.55,.82),l.enabled=n.bloom,u.addPass(l),u.addPass(new Yc),Pe(i.clientWidth,i.clientHeight)}function oe(K,ce,Me,he){var fe=Math.floor(Me)*K.mw+Math.floor(ce);return K.cells[fe]===0?K.ceil[fe]:he}function ae(K){for(var ce=K.W,Me=new Uint8Array(ce.mw*ce.mh),he=[],fe=0;fe<ce.cells.length;fe++)if(!(Me[fe]||ce.cells[fe]!==0)){var ve=[fe],Ne=0,qe=0,Ze=0,Ve=0;for(Me[fe]=1;ve.length;){var be=ve.pop(),Ce=be%ce.mw,nt=be/ce.mw|0;Ne+=Ce+.5,qe+=nt+.5,Ze=Math.max(Ze,ce.ceil[be]),Ve++,[[1,0],[-1,0],[0,1],[0,-1]].forEach(function(ot){var _t=Ce+ot[0],V=nt+ot[1],mt=V*ce.mw+_t;_t<0||V<0||_t>=ce.mw||V>=ce.mh||Me[mt]||ce.cells[mt]!==0||(Me[mt]=1,ve.push(mt))})}Ve>=3&&he.push({x:Ne/Ve,z:qe/Ve,y:oe(ce,Ne/Ve,qe/Ve,Ze)-.4,size:Ve})}return he}function Pe(K,ce){!K||!ce||(t.setSize(K,ce,!1),ne={w:K,h:ce},o.aspect=K/ce,o.updateProjectionMatrix(),_.aspect=K/ce,_.updateProjectionMatrix(),u&&(u.setSize(K,ce),l.resolution.set(K/2,ce/2)))}function He(K,ce,Me){var he=K.p,fe=new Set;K.ents.forEach(function(ve){if(ve.kind==="torch"){p.get(ve).update(ce),Math.random()<Me*6&&f.ember(ve.x,ve.y+1,ve.z),fe.add(ve);return}if(ve.kind==="proj"){var Ne=y.get(ve);Ne||(Ne=new ke(new Ar(.09,10,8),new In({color:ve.green?10484991:16756800})),c.add(Ne),y.set(ve,Ne)),Ne.position.set(ve.x,ve.y,ve.z),f.trail(ve.x,ve.y,ve.z,ve.green),fe.add(ve);return}if(ve.kind!=="part"){var qe=p.get(ve);if(!qe){if(ve.kind==="pickup")qe=Dm(ve,I);else if(ve.mob)qe=Nm(ve,I);else return;c.add(qe.obj),p.set(ve,qe)}ve.kind==="pickup"?qe.update(ce):qe.update(ce,Me,Math.atan2(he.z-ve.z,he.x-ve.x)),fe.add(ve)}}),p.forEach(function(ve,Ne){fe.has(Ne)||(c.remove(ve.obj),p.delete(Ne))}),y.forEach(function(ve,Ne){fe.has(Ne)||(c.remove(ve),y.delete(Ne))})}function tt(K){var ce=$.p;g.forEach(function(Me,he){var fe=Me.userData,ve=$.lightsOff&&$.lightsOff[fe.id],Ne=fe.flicker?(Math.sin(K*23+he)>.6?.15:1)*(.8+Math.random()*.2):1;Me.intensity=ve?0:(fe.intensity||2)*Ne}),v.forEach(function(Me,he){var fe=Me.userData.e,ve=Math.sin(K*13+he*7)*.12+Math.sin(K*31+he*3)*.08+(Math.random()-.5)*.08,Ne=(fe.x-ce.x)*(fe.x-ce.x)+(fe.z-ce.z)*(fe.z-ce.z)>400;Me.intensity=Ne?0:2.2*(1+ve)})}function at(K,ce,Me){var he=K.p,fe=Math.hypot(K.input.vx||0,K.input.vz||0);he.onGround&&fe>.5&&(P+=Me*fe*2.6);var ve=he.onGround?Math.min(1,fe/4):0,Ne=Math.atan2(Math.sin(he.ang-k),Math.cos(he.ang-k)),qe=he.pitch-X;k=he.ang,X=he.pitch,O.x+=(-Ne*.6-O.x)*Math.min(1,Me*8),O.y+=(qe*.6-O.y)*Math.min(1,Me*8),Object.keys(D).forEach(function(_t){D[_t].visible=_t===he.weapon&&!he.dead});var Ze=D[he.weapon];if(Ze){var Ve=he.fireT,be=Ve<.12?Math.sin(Ve/.12*Math.PI):0,Ce=he.lowerT>0?1-he.lowerT/.15:he.raiseT>0?he.raiseT/.15:0;if(L.position.set(Math.sin(P)*.012*ve+O.x*.1,-Math.abs(Math.cos(P))*.01*ve+O.y*.1-Ce*.25-he.landT*.1,0),L.rotation.set(0,0,0),he.weapon==="fist")Ze.position.z=Ze.userData.baseZ-(Ve<.2?Math.sin(Ve/.2*Math.PI)*.18:0),Ze.rotation.x=Ve<.2?-Math.sin(Ve/.2*Math.PI)*.3:0;else{Ze.rotation.x=be*(he.weapon==="shotgun"?.35:.2),Ze.position.z=Ze.userData.baseZ+be*.05;var nt=Ve>.3&&Ve<.7?Math.sin((Ve-.3)/.4*Math.PI):0;R(Ze.userData.pump,nt*.09),R(Ze.userData.slide,be*.04),Ze.userData.barrels&&(Ze.userData.barrels.rotation.z+=Me*(he.fireT<.3?30:0))}var ot=Ve<.06&&he.weapon!=="fist"&&!he.dead;M.visible=ot,M.position.set(Ze.position.x,Ze.position.y+(he.weapon==="shotgun"?0:.02),Ze.position.z-(he.weapon==="shotgun"?.7:.18)),M.scale.setScalar((he.weapon==="shotgun"?.06:.035)*(.8+Math.random()*.4)),A.intensity=ot?3:0,A.position.copy(M.position)}}function rt(K,ce,Me,he){if(!he)return le(K,ce,Me);var fe=Math.random,ve=12345;Math.random=function(){return ve=ve*1103515245+12345&2147483647,ve/2147483647};try{return le(K,ce,0)}finally{Math.random=fe}}function le(K,ce,Me){t.info.reset(),K!==$&&re(K);var he=K.p;h.update(),He(K,ce,Me),tt(ce),K.events.forEach(function(ve){ve.t==="fx"&&f.event(ve)}),f.update(Me,ne.h*.9);var fe=n.shake?K.shake*.004:0;o.position.set(he.x+(Math.random()-.5)*fe,he.y+he.eyeH+(Math.random()-.5)*fe,he.z+(Math.random()-.5)*fe),o.rotation.y=-Math.PI/2-he.ang,o.rotation.x=he.pitch,o.rotation.z=he.dead?Math.min(.5,he.deadT*.6):0,u.render(Me),t.autoClear=!1,t.clearDepth(),at(K,ce,Me),L.visible=n.weapon,t.render(m,_),t.autoClear=!0}return{setAssets:function(K){I=K,b(),$=null},setQuality:function(K){for(var ce in K)n[ce]=K[ce];t.setPixelRatio(r()),l&&(l.enabled=n.bloom),Pe(ne.w,ne.h)},assets:function(){return I},debugModels:function(){var K=[];return p.forEach(function(ce){ce.debug&&K.push(ce.debug())}),K},render:rt,resize:Pe,renderer:t,camera:o,info:function(){return t.info}}}var Nt=320,rS=200,Bt=168,qm=32,Bf=Bt/2,_a="#e03828",fu="#8a8478",kf="#401008";function sS(i,e){var t=String(i).split(" "),n=[],r="";return t.forEach(function(s){var a=r?r+" "+s:s;a.length>e&&r?(n.push(r),r=s):r=a}),r&&n.push(r),n}function Fr(i){i=i|0;var e=i/60|0,t=i%60;return e+":"+(t<10?"0":"")+t}function Xm(i,e,t){function n(m,_){return m.time*(_||3)%1<.55}function r(m,_,A){return A?n(m,3)?"#ffffff":_a:_?"#ff9a28":_a}function s(m){return m.dead?Ae.default.faces.dead:m.grinT>0?Ae.default.faces.grin:m.painT>.25?Ae.default.faces.pain:m.hp>=80?Ae.default.faces.ok:m.hp>=55?Ae.default.faces.hurt1:m.hp>=30?Ae.default.faces.hurt2:Ae.default.faces.hurt3}function a(m){var _=m.p;i.fillStyle="#3a352e",i.fillRect(0,Bt,Nt,qm),i.fillStyle="#14110d",i.fillRect(0,Bt,Nt,2),i.fillStyle="#57514a",i.fillRect(0,Bt+2,Nt,1),i.fillStyle="#24211c",[46,116,142,178,230,250].forEach(function(D){i.fillRect(D,Bt+4,1,qm-8)});var A=ba[_.weapon],w=A.ammo?_.ammo[A.ammo]:-1,I=A.ammo&&w<=(A.ammo==="shells"?4:10);Ae.default.drawText(i,"AMMO",8,Bt+5,{color:w===0?_a:fu}),Ae.default.drawText(i,A.ammo?String(w):"--",40,Bt+12,{scale:3,color:r(m,I,w===0),shadow:kf,right:!0});var L=_.hp<=25;Ae.default.drawText(i,"HEALTH",54,Bt+5,{color:L?_a:fu}),Ae.default.drawText(i,_.hp+"%",108,Bt+12,{scale:3,color:r(m,_.hp<=50,L&&!_.dead),shadow:kf,right:!0}),Ae.default.drawText(i,"ARMS",129,Bt+5,{color:fu,center:!0}),Yi.forEach(function(D,S){var x=119+S*8,b=_.weapons[D],R=(_.nextWeapon||_.weapon)===D,M=R?"#ffd23e":b?e.hasAmmo(_,D)?"#c8c0b0":"#6a5a4a":"#2a2620";Ae.default.drawText(i,String(S+1),x,Bt+13,{scale:2,color:M}),R&&(i.fillStyle="#ffd23e",i.fillRect(x,Bt+25,6,1))}),i.drawImage(s(_).canvas,148,Bt+3),Ae.default.drawText(i,"ARMOR",184,Bt+5,{color:fu}),Ae.default.drawText(i,_.armor+"%",226,Bt+12,{scale:3,color:_.armor>0?_a:"#6a4a40",shadow:kf,right:!0}),[["red","keyRed",5],["blue","keyBlue",18]].forEach(function(D){!_.keys[D[0]]&&!m.info.keys[D[0]]||(i.globalAlpha=_.keys[D[0]]?1:.18,i.drawImage(Ae.default.things[D[1]].canvas,236,Bt+D[2]),i.globalAlpha=1)}),Ae.default.drawText(i,"BULL "+_.ammo.bullets+"/200",254,Bt+8,{color:A.ammo==="bullets"?"#ffd23e":"#c8c0b0"}),Ae.default.drawText(i,"SHEL "+_.ammo.shells+"/50",254,Bt+19,{color:_.weapons.shotgun?A.ammo==="shells"?"#ffd23e":"#c8c0b0":"#6a655c"})}function o(m){var _=Nt/2,A=Bf;if(t.crosshair){var w=e.aimTarget();i.fillStyle=w?w.barrel?"#ff9a28":"#ff4a2a":"rgba(232,224,200,0.8)",i.fillRect(_-5,A,3,1),i.fillRect(_+3,A,3,1),i.fillRect(_,A-5,1,3),i.fillRect(_,A+3,1,3)}var I=m.killT>0?"#ff3a1a":m.blockT>0?"#9aa4a8":m.hitT>0?"#ffffff":null;if(I){i.fillStyle=I;for(var L=m.killT>0?4:3,D=L;D<L+3;D++)i.fillRect(_-D,A-D,1,1),i.fillRect(_+D,A-D,1,1),i.fillRect(_-D,A+D,1,1),i.fillRect(_+D,A+D,1,1)}}function c(m){var _=m.p,A=Nt/2,w=Bf,I=34;m.hurtDirs.forEach(function(L){var D=L.ang-_.ang,S=Math.sin(D),x=-Math.cos(D),b=A+S*I,R=w+x*I;i.fillStyle="rgba(255,40,16,"+Math.min(.9,L.t).toFixed(3)+")",i.beginPath(),i.moveTo(b+S*9,R+x*9),i.lineTo(b-x*7,R+S*7),i.lineTo(b+x*7,R-S*7),i.closePath(),i.fill()})}function u(){var m=e.usePrompt();if(m){var _=Bf+14;if(m.verb){var A=Ae.default.textWidth(m.verb,1),w=13+A,I=(Nt-w)/2|0;i.fillStyle="rgba(0,0,0,0.55)",i.fillRect(I-3,_-3,w+6,13),i.fillStyle="#e8e0c8",i.fillRect(I,_-1,9,9),i.fillStyle="#14110d",i.fillRect(I+1,_,7,7),Ae.default.drawText(i,"E",I+3,_+1,{color:"#ffd23e"}),Ae.default.drawText(i,m.verb,I+13,_+1,{color:m.color,shadow:!0})}else{var L=Ae.default.textWidth(m.text,1);i.fillStyle="rgba(0,0,0,0.55)",i.fillRect((Nt-L)/2-4,_-3,L+8,13),Ae.default.drawText(i,m.text,Nt/2,_+1,{color:m.color,shadow:!0,center:!0})}}}function l(m,_){if(!(!t.goalMarker||!_)){var A=e.goalTarget();if(A){var w=m.p,I=Math.hypot(A.x-w.x,A.z-w.z);if(!(I<1.6)){var L={x:A.x,y:A.y,z:A.z},D=aS(_,L),S=m.time*2%1<.7?"#ffd23e":"#c89a20";if(i.fillStyle=S,i.beginPath(),D.inFront&&D.x>8&&D.x<Nt-8&&D.y>8&&D.y<Bt-8){var x=Math.round(D.x),b=Math.round(D.y)-8;i.moveTo(x,b-4),i.lineTo(x+4,b),i.lineTo(x,b+4),i.lineTo(x-4,b),i.closePath(),i.fill(),Ae.default.drawText(i,String(Math.round(I*2))+"M",x,b+7,{color:S,shadow:!0,center:!0})}else{var R=Math.atan2(A.z-w.z,A.x-w.x)-w.ang;R=Math.atan2(Math.sin(R),Math.cos(R));var M=R>0,P=M?Nt-6:6,O=40;i.moveTo(P+(M?4:-4),O),i.lineTo(P-(M?3:-3),O-5),i.lineTo(P-(M?3:-3),O+5),i.closePath(),i.fill(),Ae.default.drawText(i,"GOAL",M?Nt-12:12,O-2,{color:S,shadow:!0,right:M})}}}}}function h(m){var _=m.p;if(!(_.dead||_.hp>25))for(var A=.18+.14*Math.sin(m.time*5),w=0;w<6;w++)i.fillStyle="rgba(200,0,0,"+(A*(1-w/6)).toFixed(3)+")",i.fillRect(w*2,0,2,Bt),i.fillRect(Nt-w*2-2,0,2,Bt),i.fillRect(0,w*2,Nt,2),i.fillRect(0,Bt-w*2-2,Nt,2)}var f={imp:["AN IMP BURNED YOU DOWN.","TIP: STRAFE WITH A AND D TO SIDESTEP FIREBALLS."],gnasher:["A GNASHER CHEWED YOU UP.","TIP: BACK AWAY WHILE YOU SHOOT, OR JUMP UP WHERE IT CAN'T FOLLOW."],knight:["THE EMBER KNIGHT CRUSHED YOU.","TIP: KEEP YOUR DISTANCE AND BRING SHOTGUN SHELLS."],riley:["RILEY OUTPLAYED YOU.","TIP: WHEN HER VISOR FLASHES WHITE, SHE IS ABOUT TO SHOOT. MOVE!"],barrel:["A BARREL BLEW UP IN YOUR FACE.","TIP: SHOOT BARRELS FROM FAR AWAY, WHEN DEMONS ARE NEAR THEM."]};function p(m){var _=m.p;if(!(!_.dead||_.deadT<1)){var A=f[m.killer]||["YOU WERE OVERWHELMED.","TIP: FIGHT FROM HIGH GROUND SO DEMONS COME TO YOU ONE AT A TIME."];i.fillStyle="rgba(0,0,0,0.5)",i.fillRect(0,44,Nt,72),Ae.default.drawText(i,"YOU DIED",Nt/2,50,{scale:3,color:_a,shadow:!0,center:!0}),Ae.default.drawText(i,A[0],Nt/2,72,{color:"#e8e0c8",shadow:!0,center:!0}),Ae.default.drawText(i,A[1],Nt/2,84,{color:"#8fe0a0",shadow:!0,center:!0}),_.deadT>1.2&&m.time%1<.7&&Ae.default.drawText(i,"CLICK OR PRESS ENTER TO TRY AGAIN",Nt/2,100,{color:"#f0d848",shadow:!0,center:!0})}}function v(m){var _=4;m.msgs.forEach(function(w){var I=sS(w.text,78);w.t<.4&&(i.globalAlpha=Math.max(0,w.t/.4)),I.forEach(function(L){Ae.default.drawText(i,L,4,_,{color:w.color||"#f0d848",shadow:!0}),_+=7}),i.globalAlpha=1,_+=1});var A=m.notice;A&&(i.globalAlpha=Math.min(1,A.t/.4),Ae.default.drawText(i,A.text,Nt/2,50,{scale:2,color:A.color,shadow:!0,center:!0}),i.globalAlpha=1)}function y(m){var _=m.boss;if(!(!_||_.state==="idle"||_.state==="dead")){var A=140,w=(Nt-A)/2,I=Bt-12,L=_.shieldT>0;Ae.default.drawText(i,L?"RILEY - SHIELDED":"RILEY",Nt/2,I-8,{color:L?"#ffd23e":"#6fe0ec",shadow:!0,center:!0}),i.fillStyle="#06141c",i.fillRect(w-1,I-1,A+2,6),i.fillStyle=L?"#ffd23e":"#3fd8c8",i.fillRect(w,I,Math.max(0,_.hp/_.maxHp)*A,4),i.fillStyle="#06141c",i.fillRect(w+A*.33,I,1,4),i.fillRect(w+A*.66,I,1,4)}}function g(m){i.fillStyle="rgba(0,0,0,0.8)",i.fillRect(0,0,Nt,Bt);for(var _=22,A=Bt-14,w=Math.min((Nt-16)/m.mw,(A-_)/m.mh),I=(Nt-m.mw*w)/2,L=_+(A-_-m.mh*w)/2,D=m.time*2%1<.6,S=0;S<m.mh;S++)for(var x=0;x<m.mw;x++){var b=S*m.mw+x,R=m.W.cells[b];if(m.seen[b]){var M=null;if(R===0){var P=m.W.floor[b];M="rgb("+(40+P*50|0)+","+(34+P*40|0)+","+(28+P*30|0)+")"}else R===6?M="#c8a030":R===11?M=m.doors[x+","+S].found?"#c8a030":"#6a655c":R===7?M="#ff3a2a":R===8?M="#4a7aff":R===9||R===10?M=D||R===10?"#58e068":"#1e5a26":M="#8a8478";i.fillStyle=M,i.fillRect(I+x*w,L+S*w,Math.max(1,w-.4),Math.max(1,w-.4))}}var O=e.goalTarget();if(O&&D){var k=I+O.x*w,X=L+O.z*w;i.fillStyle="#ffd23e",i.fillRect(k-3,X-3,7,1),i.fillRect(k-3,X+3,7,1),i.fillRect(k-3,X-3,1,7),i.fillRect(k+3,X-3,1,7)}var $=m.p,ne=I+$.x*w,re=L+$.z*w,oe=Math.cos($.ang),ae=Math.sin($.ang);i.fillStyle="#f8f4e0",i.beginPath(),i.moveTo(ne+oe*5,re+ae*5),i.lineTo(ne-oe*3-ae*3,re-ae*3+oe*3),i.lineTo(ne-oe*3+ae*3,re-ae*3-oe*3),i.closePath(),i.fill(),Ae.default.drawText(i,m.L.name,6,4,{color:"#ff9a28",shadow:!0}),Ae.default.drawText(i,"TAB: CLOSE",Nt-6,4,{color:"#8a8478",right:!0}),Ae.default.drawText(i,"GOAL: "+e.objective(),6,12,{color:"#f0d848",shadow:!0});var Pe=m.stats;Ae.default.drawText(i,"KILLS "+Pe.kills+"/"+Pe.totalKills+"  ITEMS "+Pe.items+"/"+Pe.totalItems+"  SECRETS "+Pe.secrets+"/"+Pe.totalSecrets+"  TIME "+Fr(m.time),Nt-6,12,{color:"#c8c0b0",right:!0}),Ae.default.drawText(i,"BRIGHTER FLOOR = HIGHER GROUND",6,Bt-9,{color:"#a8a090"})}return{draw:function(m,_){i.clearRect(0,0,Nt,rS);var A=m.p;A.dmgFlash>0&&(i.fillStyle="rgba(255,20,10,"+(A.dmgFlash*.8).toFixed(3)+")",i.fillRect(0,0,Nt,Bt)),A.bonusFlash>0&&(i.fillStyle="rgba(255,220,80,"+(A.bonusFlash*.7).toFixed(3)+")",i.fillRect(0,0,Nt,Bt)),h(m),_.map?g(m):!A.dead&&!_.menu&&(c(m),l(m,_.camera),o(m),u()),_.map||y(m),v(m),p(m),a(m)}}}function aS(i,e){var t=i.matrixWorldInverse.elements,n=i.projectionMatrix.elements,r=e.x,s=e.y,a=e.z,o=t[0]*r+t[4]*s+t[8]*a+t[12],c=t[1]*r+t[5]*s+t[9]*a+t[13],u=t[2]*r+t[6]*s+t[10]*a+t[14],l=n[0]*o+n[4]*c+n[8]*u+n[12],h=n[1]*o+n[5]*c+n[9]*u+n[13],f=n[3]*o+n[7]*c+n[11]*u+n[15];return f<=.01?{inFront:!1}:{inFront:!0,x:(l/f*.5+.5)*Nt,y:(1-(h/f*.5+.5))*Bt}}var t0=vs(Au(),1),Tn=qf.default.SETTINGS,pt=qf.default.MENU,Tt=Tn.v;Tt.invertY===void 0&&(Tt.invertY=!1);Tt.fov===void 0&&(Tt.fov=78);var Rt=320,En=200,n0=168,i0=document.getElementById("view"),di=document.getElementById("hud");di.width=Rt;di.height=En;var Re=di.getContext("2d");Re.imageSmoothingEnabled=!1;var Oo=/debug/.test(location.search),ft=Iu({levels:mi,rng:Lu(Oo?+(/seed=(\d+)/.exec(location.search)||[])[1]||1:(Date.now()&4294967295)>>>0),storage:(function(){try{return window.localStorage}catch{return null}})(),settings:Tt,saveSettings:function(){Tn.save()},onProgress:function(i,e){Tn.unlock(Math.min(i+1,mi.length-1)),oS=Tn.record?Tn.record(i,e):null}}),oS=null,fi=Wm(i0,{preserve:Oo}),lS=Xm(Re,ft,Tt),ni="title",Ri=0,qi=!1,ya=!1,Ii=!1,Uo=!1;function Fo(){return zr[Tt.difficulty]||zr[1]}function pu(){yn.default.setVolume(Tt.volume/10),fi.camera.fov=Tt.fov,fi.camera.updateProjectionMatrix(),fi.setQuality({scale:Tt.quality||1,bloom:Tt.bloom!==!1,shake:Tt.shake!==!1})}function r0(){var i=window.innerWidth,e=window.innerHeight,t=Math.min(i,e*1.6),n=t/1.6,r=(i-t)/2,s=(e-n)/2;di.style.cssText="left:"+r+"px;top:"+s+"px;width:"+t+"px;height:"+n+"px";var a=Math.round(n*n0/En);i0.style.cssText="left:"+r+"px;top:"+s+"px;width:"+t+"px;height:"+a+"px",fi.resize(Math.round(t),a)}window.addEventListener("resize",r0);r0();var vu=ft.keys,Bo=!1;function s0(){for(var i in vu)vu[i]=!1;Bo=!1,ft.setFire(!1)}document.addEventListener("keydown",function(i){if((["Tab","Space"].indexOf(i.code)>=0||i.code.slice(0,5)==="Arrow")&&i.preventDefault(),yn.default.init(),!!_u){if(pt.isOpen()){yn.default.startMusic(),pt.key(i.code);return}if(!i.repeat){if(i.code==="Enter"||i.code==="NumpadEnter"){xu();return}if(ni!=="game"){i.code==="Space"&&xu();return}if(i.code==="Escape"&&qi&&!Ii){l0();return}vu[i.code]=!0;var e=ft.state();if(i.code==="Tab"&&(ya=!ya,e.usedMap=!0),i.code==="KeyM"){var t=yn.default.toggleMusic();e.msgs.push({text:"MUSIC "+(t?"ON":"OFF"),t:2})}(i.code==="ControlLeft"||i.code==="ControlRight")&&(Bo=!0,ft.setFire(!0)),i.code==="Digit1"&&ft.switchWeapon("fist"),i.code==="Digit2"&&ft.switchWeapon("pistol"),i.code==="Digit3"&&ft.switchWeapon("shotgun"),i.code==="KeyQ"&&ft.quickSwitch()}}});document.addEventListener("keyup",function(i){vu[i.code]=!1,(i.code==="ControlLeft"||i.code==="ControlRight")&&(Bo=!1,ft.setFire(!1))});window.addEventListener("blur",s0);document.addEventListener("pointerlockchange",function(){Ii=document.pointerLockElement===di,s0(),Ii?(Uo=!1,ni==="game"&&pt.close(),!qi&&ni==="game"&&uS()):ni==="game"&&qi&&l0()});document.addEventListener("pointerlockerror",function(){Uo=!0});function Ho(){try{var i=di.requestPointerLock({unadjustedMovement:!0});i&&i.catch&&i.catch(function(){try{di.requestPointerLock()}catch{Uo=!0}})}catch{Uo=!0}}function cS(){try{document.exitPointerLock()}catch{}}function a0(i){var e=di.getBoundingClientRect();return{x:(i.clientX-e.left)/e.width*Rt,y:(i.clientY-e.top)/e.height*En}}document.addEventListener("mousemove",function(i){var e=ft.state();if(Ii&&ni==="game"&&e&&!e.p.dead){var t=44e-5*Tt.sens;e.p.ang+=i.movementX*t,e.p.pitch-=i.movementY*t*(Tt.invertY?-1:1),e.p.pitch=Math.max(-1.3,Math.min(1.3,e.p.pitch));return}if(pt.isOpen()){var n=a0(i);di.style.cursor=pt.pointer(n.x,n.y)?"pointer":"default"}});di.addEventListener("mousedown",function(i){if(yn.default.init(),yn.default.startMusic(),pt.isOpen()){var e=a0(i);i.button===0&&pt.click(e.x,e.y);return}if(ni==="game"){var t=ft.state();if(!Ii){pt.close(),Ho();return}if(t.p.dead){xu();return}i.button===0&&(Bo=!0,ft.setFire(!0)),i.button===2&&(ft.keys.Space=!0);return}xu()});document.addEventListener("mouseup",function(i){i.button===0&&(Bo=!1,ft.setFire(!1)),i.button===2&&(ft.keys.Space=!1)});di.addEventListener("contextmenu",function(i){i.preventDefault()});di.addEventListener("wheel",function(i){ni==="game"&&Ii&&(i.preventDefault(),i.deltaY&&ft.cycleWeapon(i.deltaY>0?1:-1))},{passive:!1});var mu=!1;function uS(){qi=!0}function o0(i){ft.startLevel(i,!1),qi=!1,ya=!1,ni="game",pt.close(),Ho()}function xu(){yn.default.init(),yn.default.startMusic();var i=ft.mode();if(i==="inter"){if(!mu&&Ri<1.3){mu=!0;return}mu=!1,ft.onEnter(),ft.onEnter(),ft.mode()==="game"&&(qi=Ii)}else if(i==="victory")Ri>1&&Xf();else if(i==="game"){var e=ft.state();e.p.dead?e.p.deadT>1.2&&(ft.retryLevel(),qi=Ii):Ii||(pt.close(),Ho())}}function Xf(){ft.setMode("title"),ni="title",pt.open(Zf()),cS()}function l0(){ya=!1,pt.open(_S()),yn.default.play("menu")}function zf(i,e,t){for(var n=0;n<Rt;n+=2){var r=Math.sin(n*.07+e*3+t)+Math.sin(n*.13-e*2.2),s=6+r*4;Re.fillStyle=r>.7?"#ffd23e":r>-.3?"#ff7a18":"#a83010",Re.fillRect(n,i-s,2,s+4)}}var Ym=Iu({levels:mi,rng:Lu(7),storage:null,settings:{difficulty:1,tips:!1,seenTips:{}}}),hS={0:{x:19.5,z:9.4,y:2,ang:-1.6,pitch:.1,sway:.1},1:{x:17.5,z:26.6,y:2,ang:-Math.PI/2,pitch:-.2,sway:.18},2:null,3:null},Gf=-1,ps=null;function c0(i){if(i!==Gf){Gf=i,Ym.startLevel(i,!1),ps=Ym.state();var e=hS[i],t=ps.p;e&&(t.x=e.x,t.z=e.z,t.y=e.y),t.baseAng=e?e.ang:t.ang,t.basePitch=e?e.pitch:.05,t.sway=e?e.sway:.3,ps.msgs.length=0,ps.notice=null}}function fS(i){var e=ps.p;e.ang=e.baseAng+Math.sin(i*.11)*e.sway,e.pitch=e.basePitch+Math.sin(i*.17)*.04}var gu=150;function ko(i,e){Re.fillStyle="rgba(6,4,3,0.84)",Re.fillRect(0,0,gu,En);for(var t=0;t<40;t++)Re.fillStyle="rgba(6,4,3,"+(.84*(1-t/40)).toFixed(3)+")",Re.fillRect(gu+t,0,1,En);Re.fillStyle="#ff7a18",Re.fillRect(gu-1,0,1,En),Re.fillStyle="rgba(0,0,0,0.35)",Re.fillRect(0,En-14,Rt,14)}function dS(i,e){Ae.default.drawText(Re,"FIREBIRD",i+1,e+1,{scale:3,color:"#401008"}),Ae.default.drawText(Re,"FIREBIRD",i,e,{scale:3,color:"#ff9a28"}),Ae.default.drawText(Re,"3D",i+98,e-2,{scale:4,color:"#ffd23e",shadow:"#803008"}),Ae.default.drawText(Re,"EPISODE ONE: KNEE-DEEP IN THE ASHES",i,e+21,{color:"#a8a090"})}function yu(i,e){Ae.default.drawText(Re,i,14,e||14,{scale:2,color:"#ff9a28",shadow:"#401008"}),Re.fillStyle="#5e2a10",Re.fillRect(14,(e||14)+13,gu-28,1)}function Yf(i,e){var t=String(i).split(" "),n=[],r="";return t.forEach(function(s){var a=r?r+" "+s:s;a.length>e&&r?(n.push(r),r=s):r=a}),r&&n.push(r),n}function Kf(i){var e=pt.selected(),t=e&&(typeof e.info=="function"?e.info():e.info);t&&Yf(t,33).forEach(function(n,r){Ae.default.drawText(Re,n,14,(i||150)+r*8,{color:"#a8a090"})})}function zo(i){Ae.default.drawText(Re,i||"ARROWS / MOUSE: CHOOSE   ENTER: SELECT   ESC: BACK",14,En-10,{color:"#6a655c"})}function Vf(i,e,t,n,r){var s=Ae.default.textWidth(t,1)+6;return Re.fillStyle=n?r||"#ffd23e":"#2e2a24",Re.fillRect(i,e,s,9),Re.fillStyle=n?"#1a0e06":"#14110d",Re.fillRect(i+1,e+1,s-2,7),Ae.default.drawText(Re,t,i+3,e+2,{color:n?r||"#ffd23e":"#4a463c"}),s+3}function Hr(i){return i?"ON":"OFF"}var Km={alignLeft:!0,x0:20,x1:138,footer:""};function Go(i){var e={};for(var t in Km)e[t]=Km[t];for(var n in i)e[n]=i[n];return e}var Zm=(function(){try{return t0.default.recall(window.localStorage)}catch{return{fights:0,wins:0}}})();function pS(){return Zm.fights?Zm.wins?"WELCOME BACK. I'VE BEEN PRACTISING SINCE YOU BEAT ME.":"WELCOME BACK. I STILL REMEMBER HOW YOU FIGHT.":"HI! I'M RILEY. COME FIND ME AT THE TOP OF E1M1."}function u0(i,e){ko(i,e),dS(14,16),Ae.default.drawText(Re,"A NIX GAMES PRODUCTION BY PHOENIX",14,En-24,{color:"#6a655c"});var t=Yf("RILEY: "+pS(),34);Re.fillStyle="rgba(0,0,0,0.45)",Re.fillRect(170,146,144,t.length*8+6),t.forEach(function(n,r){Ae.default.drawText(Re,n,174,150+r*8,{color:"#6fe0ec",shadow:!0})})}var mS={E1M1:"RILEY TEACHES YOU THE ROPES ON THE WAY UP, THEN SPARS WITH YOU IN HER ARENA.",E1M2:"DRAIN THE FURNACE, TAKE THE RED KEY, AND SURVIVE THE FORGE.",E1M3:"THE EMBER KNIGHT WAITS ON THE DEMON THRONE.",E1M4:"RILEY REMEMBERS HOW YOU FOUGHT. THIS TIME SHE IS NOT HOLDING BACK."};function Zf(){var i=Tn.progress;return Go({drawBg:u0,scale:2,top:62,gap:14,drawExtra:function(){Kf(136),zo()},items:function(){var e=[];return i.unlocked>0&&e.push({label:"CONTINUE",action:function(){o0(i.unlocked)},info:function(){return mi[i.unlocked].name+" ON "+Fo().name+"."}}),e.push({label:"NEW GAME",action:function(){pt.push(h0(0))},info:"START THE EPISODE FROM THE BEGINNING."},{label:"LEVELS",action:function(){pt.push(gS())},info:"PICK A LEVEL, SEE YOUR BEST TIMES AND MEDALS."},{label:"OPTIONS",action:function(){pt.push(Jf(0))},info:"CONTROLS, VIDEO, AUDIO AND GAMEPLAY."},{label:"CONTROLS",action:function(){pt.push(f0())},info:"EVERY KEY, ON ONE PAGE."}),e}})}function h0(i){var e=zr.map(function(t,n){return{label:t.name,info:t.desc,action:function(){Tt.difficulty=n,Tn.save(),o0(i)}}});return e.push({label:"BACK",action:function(){pt.back()}}),Go({drawBg:ko,scale:2,top:46,gap:16,sel:Tt.difficulty,items:e,drawExtra:function(){yu("DIFFICULTY"),Kf(118),Ae.default.drawText(Re,mi[i].name,14,32,{color:"#c8c0b0"}),zo()}})}function gS(){var i=mi.map(function(t,n){var r=n<=Tn.progress.unlocked,s=t.name.split(":")[0];return{label:r?t.name.replace(": ","  "):s+"  LOCKED",level:n,disabled:function(){return!r},action:function(){pt.push(h0(n))}}});i.push({label:"BACK",action:function(){pt.back()}});var e=Math.min(Tn.progress.unlocked,mi.length-1);return Go({drawBg:ko,scale:1,top:40,gap:13,sel:e,items:i,drawExtra:function(){yu("LEVELS");var t=pt.selected(),n=t&&t.level!==void 0?t.level:Gf;t&&t.level!==void 0&&c0(n),vS(n),zo()}})}function vS(i){var e=mi[i],t=e.name.split(":")[0],n=e.name.split(": ")[1]||e.name,r=i<=Tn.progress.unlocked,s=Tn.best?Tn.best(i):null,a=172,o=Yf(mS[t]||"",34),c=58+o.length*8,u=166-c;Re.fillStyle="rgba(6,4,3,0.72)",Re.fillRect(a-6,u-6,Rt-a,c),Re.fillStyle="#ff7a18",Re.fillRect(a-6,u-6,1,c),Ae.default.drawText(Re,t+(e.heights?"   REBUILT IN 3D":"   CLASSIC LAYOUT"),a,u,{color:e.heights?"#8fe0a0":"#8a8478"}),Ae.default.drawText(Re,n,a,u+9,{scale:2,color:"#ff9a28",shadow:"#401008"}),o.forEach(function(p,v){Ae.default.drawText(Re,p,a,u+25+v*8,{color:"#c8c0b0"})});var l=ft.levelInfo(e),h=u+28+o.length*8;l.boss&&Vf(a,h-1,"BOSS: RILEY",!0,"#6fe0ec"),Ae.default.drawText(Re,"PAR "+Fr(e.par)+(s&&s.time!==null?"   BEST "+Fr(s.time):""),l.boss?a+60:a,h+1,{color:"#a8a090"});var f=a;(Tn.MEDALS||["PAR","KILLS","ITEMS","SECRETS"]).forEach(function(p){f+=Vf(f,h+12,p,!!(s&&s.medals&&s.medals[p]))}),r||(Re.fillStyle="rgba(0,0,0,0.55)",Re.fillRect(a-5,u-5,Rt-a-1,c-2),Ae.default.drawText(Re,"LOCKED",a+60,u+22,{scale:2,color:"#ff9a28",shadow:!0}),Ae.default.drawText(Re,"FINISH THE LEVEL BEFORE IT",a+30,u+42,{color:"#a8a090"}))}var du=["CONTROLS","VIDEO","AUDIO","GAMEPLAY"],Jm={sens:5,invertY:!1,fov:78,quality:1,bloom:!0,shake:!0,fps:!1,volume:7,crosshair:!0,goalMarker:!0,tips:!0,difficulty:1};function Jf(i){function e(a,o,c,u){return function(l){var h=+(Tt[a]+l*(u||1)).toFixed(2);Tt[a]=h>c?o:h<o?c:h,Tn.save(),pu()}}function t(a){return function(){Tt[a]=!Tt[a],Tn.save(),pu()}}var n={label:"SECTION",value:function(){return du[i]},adjust:function(a){pt.replace(Jf((i+a+du.length)%du.length))},info:"LEFT AND RIGHT TO SWITCH BETWEEN CONTROLS, VIDEO, AUDIO AND GAMEPLAY."},r=[[{label:"MOUSE SPEED",slider:[0,10,function(){return Tt.sens}],adjust:e("sens",1,10),info:"HOW FAST THE VIEW TURNS."},{label:"INVERT Y",value:function(){return Hr(Tt.invertY)},adjust:t("invertY"),info:"PUSH THE MOUSE FORWARD TO LOOK DOWN INSTEAD OF UP."},{label:"FIELD OF VIEW",value:function(){return Tt.fov},adjust:e("fov",60,110,5),info:"HOW WIDE YOU SEE, IN DEGREES. WIDER SHOWS MORE."}],[{label:"RESOLUTION",value:function(){return Math.round((Tt.quality||1)*100)+"%"},adjust:e("quality",.5,1,.25),info:"LOWER IS FASTER ON SLOW COMPUTERS, AND CHUNKIER."},{label:"GLOW",value:function(){return Hr(Tt.bloom!==!1)},adjust:t("bloom"),info:"THE SOFT GLOW AROUND FIRE, LAVA AND LIGHTS."},{label:"SCREEN SHAKE",value:function(){return Hr(Tt.shake!==!1)},adjust:t("shake"),info:"THE VIEW KICKS ON SHOTS, HITS AND EXPLOSIONS."},{label:"SHOW FPS",value:function(){return Hr(!!Tt.fps)},adjust:t("fps"),info:"FRAMES PER SECOND, IN THE CORNER."}],[{label:"VOLUME",slider:[0,10,function(){return Tt.volume}],adjust:e("volume",0,10),info:"LOUDNESS OF EVERYTHING."},{label:"MUSIC",value:function(){return Hr(yn.default.isMusicOn())},adjust:function(){yn.default.setMusic(!yn.default.isMusicOn())},info:"PRESS M DURING PLAY TO TOGGLE IT TOO."}],[{label:"DIFFICULTY",value:function(){return Fo().name},adjust:e("difficulty",0,2),info:function(){return Fo().desc}},{label:"CROSSHAIR",value:function(){return Hr(Tt.crosshair)},adjust:t("crosshair"),info:"A SMALL AIMING MARK. TURNS RED OVER A DEMON."},{label:"GOAL MARKER",value:function(){return Hr(Tt.goalMarker)},adjust:t("goalMarker"),info:"POINTS AT YOUR GOAL ONCE YOU HAVE SEEN IT."},{label:"TIPS",value:function(){return Hr(Tt.tips)},adjust:function(){Tt.tips=!Tt.tips,Tt.tips&&(Tt.seenTips={}),Tn.save()},info:"SHORT HINTS THE FIRST TIME SOMETHING NEW HAPPENS. ON AGAIN SHOWS THEM ALL."},{label:"RESET ALL",action:function(){pt.push(Wf("RESET?","EVERY OPTION BACK TO ITS DEFAULT.",function(){for(var a in Jm)Tt[a]=Jm[a];Tn.save(),pu(),pt.back()}))},info:"EVERY OPTION BACK TO ITS DEFAULT. PROGRESS AND MEDALS ARE KEPT."}]],s=[n].concat(r[i]).concat([{label:"BACK",action:function(){pt.back()}}]);return Go({drawBg:ko,x1:142,scale:1,top:44,gap:13,items:s,drawExtra:function(){yu("OPTIONS");var a=14;du.forEach(function(o,c){a+=Vf(a,32,o,c===i)}),Kf(44+s.length*13+6),zo("ARROWS / MOUSE: CHOOSE   LEFT / RIGHT: CHANGE   ESC: BACK")}})}var xS=[["MOVE","W A S D  /  ARROWS"],["LOOK AND AIM","MOUSE"],["FIRE","LEFT CLICK  /  CTRL"],["JUMP","SPACE  /  RIGHT CLICK"],["CROUCH","C"],["USE / OPEN","E"],["RUN","HOLD SHIFT"],["WEAPONS","1 2 3  /  WHEEL"],["LAST WEAPON","Q"],["MAP","TAB"],["MUSIC","M"],["PAUSE","ESC"]];function f0(){return Go({drawBg:ko,scale:2,top:172,gap:12,items:[{label:"BACK",action:function(){pt.back()}}],drawExtra:function(){yu("CONTROLS"),xS.forEach(function(i,e){var t=36+e*11;Ae.default.drawText(Re,i[0],14,t,{color:"#c8c0b0"}),Ae.default.drawText(Re,i[1],76,t,{color:"#ffd23e"})}),zo()}})}function d0(i,e){Re.fillStyle=ni==="game"?"rgba(4,3,2,0.8)":"rgba(8,6,4,0.7)",Re.fillRect(0,0,Rt,En),Re.fillStyle="#5e2a10",Re.fillRect(40,33,Rt-80,1)}function Wf(i,e,t){return{title:i,drawBg:d0,scale:2,top:86,gap:18,sel:1,drawExtra:function(){Ae.default.drawText(Re,e,Rt/2,56,{color:"#a8a090",center:!0})},items:[{label:"YES",action:t},{label:"NO",action:function(){pt.back()}}]}}function _S(){return{title:"PAUSED",drawBg:d0,scale:2,top:64,gap:14,descY:144,footerY:176,footer:"ARROWS OR MOUSE: CHOOSE   ENTER OR CLICK: SELECT",items:[{label:function(){return ft.state().p.dead?"TRY AGAIN":"RESUME"},action:function(){ft.state().p.dead&&ft.retryLevel(),pt.close(),Ho()},desc:"BACK TO THE FIGHT."},{label:"RESTART LEVEL",desc:"START THIS LEVEL OVER WITH THE GEAR YOU BROUGHT IN.",action:function(){pt.push(Wf("RESTART?","YOU WILL LOSE PROGRESS IN THIS LEVEL.",function(){ft.retryLevel(),pt.close(),Ho()}))}},{label:"OPTIONS",action:function(){pt.push(Jf())},desc:"MOUSE, VOLUME, FIELD OF VIEW AND MORE."},{label:"CONTROLS",action:function(){pt.push(f0())},desc:"EVERY KEY, ON ONE PAGE."},{label:"QUIT TO TITLE",desc:"YOUR UNLOCKED LEVELS ARE SAVED.",action:function(){pt.push(Wf("QUIT?","PROGRESS IN THIS LEVEL WILL BE LOST.",Xf))}}],drawExtra:function(){var i=ft.state(),e=i.stats;Ae.default.drawText(Re,i.L.name+"   "+Fo().name,Rt/2,38,{color:"#c8c0b0",center:!0}),Ae.default.drawText(Re,"GOAL: "+ft.objective(),Rt/2,48,{color:"#f0d848",center:!0}),Ae.default.drawText(Re,"KILLS "+e.kills+"/"+e.totalKills+"   ITEMS "+e.items+"/"+e.totalItems+"   SECRETS "+e.secrets+"/"+e.totalSecrets+"   TIME "+Fr(i.time),Rt/2,160,{color:"#8a8478",center:!0})}}}function yS(i){var e=ft.state(),t=e.L.name.split(": ");Re.fillStyle="rgba(4,3,2,0.6)",Re.fillRect(0,0,Rt,En),Ae.default.drawText(Re,t[0],Rt/2,22,{color:"#8a8478",center:!0}),Ae.default.drawText(Re,t[1]||e.L.name,Rt/2,32,{scale:3,color:"#ff9a28",shadow:"#401008",center:!0}),Ae.default.drawText(Re,"GOAL",Rt/2,60,{color:"#8a8478",center:!0}),Ae.default.drawText(Re,ft.objective(),Rt/2,69,{scale:2,color:"#f0d848",shadow:!0,center:!0}),Ae.default.drawText(Re,"DIFFICULTY: "+Fo().name+"     PAR "+Fr(e.L.par),Rt/2,88,{color:"#a8a090",center:!0}),i%1<.7&&Ae.default.drawText(Re,"CLICK TO BEGIN",Rt/2,106,{scale:2,color:"#ffffff",shadow:!0,center:!0}),Uo&&Ae.default.drawText(Re,"THE GAME NEEDS THE MOUSE. CLICK THE SCREEN AGAIN.",Rt/2,124,{color:"#ff9a28",center:!0}),Ae.default.drawText(Re,"WASD MOVE  MOUSE LOOK  CLICK FIRE  SPACE JUMP  E USE  TAB MAP  ESC PAUSE",Rt/2,140,{color:"#8a8478",center:!0})}function MS(i){var e=ft.interStats();Re.fillStyle="rgba(10,8,6,0.88)",Re.fillRect(0,0,Rt,En),zf(En-6,i,1),Ae.default.drawText(Re,e.name,Rt/2,22,{scale:2,color:"#ff9a28",shadow:!0,center:!0}),Ae.default.drawText(Re,"FINISHED!",Rt/2,42,{scale:2,color:"#e8e0c8",shadow:!0,center:!0});var t=mu?1:Math.min(1,i/1.2);function n(s,a){return a?Math.round(s/a*100*t):100}if([["KILLS",e.kills,e.totalKills,70],["ITEMS",e.items,e.totalItems,90],["SECRETS",e.secrets,e.totalSecrets,110]].forEach(function(s){Ae.default.drawText(Re,s[0],90,s[3],{scale:2,color:"#c8c0b0"});var a=n(s[1],s[2]);Ae.default.drawText(Re,a+"%",240,s[3],{scale:2,color:a>=100?"#ffd23e":"#e03828",right:!0})}),Ae.default.drawText(Re,"TIME "+Fr(e.time),90,132,{scale:2,color:e.time<=e.par&&t>=1?"#ffd23e":"#c8c0b0"}),Ae.default.drawText(Re,"PAR "+Fr(e.par),240,132,{scale:2,color:"#c8c0b0",right:!0}),t>=1&&i%1<.7){var r=ft.levelIndex();Ae.default.drawText(Re,r+1<mi.length?"CLICK OR PRESS ENTER FOR "+mi[r+1].name:"CLICK OR PRESS ENTER",Rt/2,166,{color:"#f0d848",shadow:!0,center:!0})}}function SS(i){Re.fillStyle="rgba(8,6,4,0.9)",Re.fillRect(0,0,Rt,En),zf(En-8,i,0),zf(En-4,i*1.3,2),Ae.default.drawText(Re,"YOU WIN!",Rt/2,30,{scale:4,color:"#ffd23e",shadow:"#803008",center:!0}),["THE DEMON THRONE LIES IN ASHES,","AND RILEY TAPS OUT WITH A GRIN:",`"SAME TIME TOMORROW? I'LL BE READY."`,"","THE FIREBIRD CANNOT BE KILLED.","IT ONLY BURNS BRIGHTER.","","THANKS FOR PLAYING, WARRIOR."].forEach(function(e,t){Ae.default.drawText(Re,e,Rt/2,74+t*10,{color:"#e8e0c8",center:!0})}),i>1&&i%1<.7&&Ae.default.drawText(Re,"CLICK OR PRESS ENTER FOR THE TITLE SCREEN",Rt/2,170,{color:"#f0d848",shadow:!0,center:!0})}function bS(i){var e=i.p;i.events.forEach(function(t){if(t.t==="sound"){if(t.local){yn.default.play(t.name);return}var n=t.x-e.x,r=t.z-e.z,s=Math.sqrt(n*n+r*r),a=Math.sin(Math.atan2(r,n)-e.ang)*.7;yn.default.play(t.name,s,a)}})}var Po=1/60,Lo=0,jm=performance.now(),$m="",No=[],Do=!1,TS=10,Qm=null;function e0(i){i!==Qm&&(Qm=i,fi.setQuality({weapon:i}))}function p0(i){var e=Math.min(.1,(i-jm)/1e3);jm=i;var t=ft.mode(),n=ni==="title"?"title":t;n!==$m&&(Ri=0,$m=n),Ri+=e,No.push(e),No.length>240&&No.shift();var r=ft.state();if(ni==="title"){var s=i/1e3;ps||c0(1),fS(s),e0(!1),fi.render(ps,s,e),Re.clearRect(0,0,Rt,En),_u?(pt.isOpen()||pt.open(Zf()),pt.render(Re,Ri)):(u0(Re,Ri),Ri%.8<.55&&Ae.default.drawText(Re,"LOADING...",Rt/2,120,{scale:2,color:"#f0d848",shadow:!0,center:!0}))}else if(t==="game"||t==="inter"||t==="victory"){var a=Do||t==="game"&&(!qi||!Ii||pt.isOpen())&&!Oo;if(!a&&t==="game")for(Lo+=e;Lo>=Po;){if(r.hitstop>0){r.hitstop-=Po,Lo-=Po;continue}if(ft.update(Po),bS(r),Lo-=Po,ft.mode()!=="game")break}else Lo=0;if(r=ft.state(),e0(!0),fi.render(r,Do?TS:i/1e3,a?0:e,Do),r.events.length=0,lS.draw(r,{map:ya,menu:pt.isOpen(),camera:fi.camera}),Tt.fps){var o=No.slice().sort(function(u,l){return u-l}),c=o[o.length>>1]||.016;Ae.default.drawText(Re,Math.round(1/c)+" FPS",Rt-4,n0-9,{color:"#8fe0a0",shadow:!0,right:!0})}t==="inter"?MS(Ri):t==="victory"?SS(Ri):qi?pt.isOpen()?pt.render(Re,Ri):!Ii&&!Oo&&(Re.fillStyle="rgba(0,0,0,0.5)",Re.fillRect(0,70,Rt,24),Ae.default.drawText(Re,"CLICK TO RESUME",Rt/2,76,{scale:2,color:"#f0d848",shadow:!0,center:!0})):yS(Ri)}requestAnimationFrame(p0)}pu();requestAnimationFrame(p0);var Ci=null,_u=!1;function m0(i){_u||(_u=!0,Ci=i||{ready:!0,loaded:[],problems:["timed out; using built-in art"]},Ci.loaded.length&&fi.setAssets(Ci),Ci.problems.length&&console.info("[assets] "+Ci.problems.join(" | ")),Ci.loaded.length&&console.info("[assets] using "+Ci.loaded.length+" authored assets"),pt.open(Zf()))}Pm().then(m0);setTimeout(function(){m0(null)},6e3);Oo&&(window.FIREBIRD2=Object.assign({},ft,{launch:function(i){ft.startLevel(i,!1),qi=!0,ni="game",pt.close()},toTitle:Xf,setMap:function(i){ya=i},freeze:function(i){Do=!!i},frozen:function(){return Do},models:function(){return fi.debugModels()},assets:function(){return Ci?{ready:Ci.ready,loaded:Ci.loaded.slice(),problems:Ci.problems.slice()}:{ready:!1}},frameStats:function(){var i=No.slice().sort(function(t,n){return t-n});function e(t){return i.length?i[Math.min(i.length-1,Math.floor(i.length*t))]*1e3:0}return{frames:i.length,p50:e(.5),p95:e(.95),p99:e(.99),info:fi.info().render}},renderInfo:function(){return fi.info()}}));})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
