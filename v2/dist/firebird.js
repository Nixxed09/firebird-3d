(()=>{var Nm=Object.create;var od=Object.defineProperty;var Dm=Object.getOwnPropertyDescriptor;var Om=Object.getOwnPropertyNames;var Um=Object.getPrototypeOf,Fm=Object.prototype.hasOwnProperty;var jo=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var Bm=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Om(e))!Fm.call(i,r)&&r!==t&&od(i,r,{get:()=>e[r],enumerable:!(n=Dm(e,r))||n.enumerable});return i};var Ta=(i,e,t)=>(t=i!=null?Nm(Um(i)):{},Bm(e||!i||!i.__esModule?od(t,"default",{value:i,enumerable:!0}):t,i));var ld=jo((jM,Pu)=>{"use strict";var Hm=(function(){function i(k){var B=parseInt(k.slice(1),16),F=B>>16&255,z=B>>8&255,Q=B&255;return(4278190080|Q<<16|z<<8|F)>>>0}function e(k,B,F){var z=document.createElement("canvas");z.width=k,z.height=B;var Q=z.getContext("2d"),pe=Q.createImageData(k,B);return new Uint32Array(pe.data.buffer).set(F),Q.putImageData(pe,0,0),{w:k,h:B,data:F,canvas:z}}function t(k,B,F){F=F||{};for(var z=!!F.mirror,Q=k[0].length,pe=0;pe<k.length;pe++)if(k[pe].length!==Q)throw new Error("sprite row "+pe+" length "+k[pe].length+" != "+Q);for(var ue=z?Q*2:Q,ge=k.length,Ee=new Uint32Array(ue*ge),Pe=0;Pe<ge;Pe++)for(var $e=k[Pe],K=0;K<Q;K++){var Re=B[$e[K]];if(Re){var xe=i(Re);Ee[Pe*ue+K]=xe,z&&(Ee[Pe*ue+(ue-1-K)]=xe)}}return e(ue,ge,Ee)}function n(k,B,F){var z=(k|0)*374761393+(B|0)*668265263+(F|0)*974711;return z=(z^z>>13)*1274126177,((z^z>>16)>>>0)%1e3/1e3}function r(k,B,F){var z=parseInt(k.slice(1),16),Q=parseInt(B.slice(1),16),pe=(z>>16&255)+((Q>>16&255)-(z>>16&255))*F,ue=(z>>8&255)+((Q>>8&255)-(z>>8&255))*F,ge=(z&255)+((Q&255)-(z&255))*F;return(4278190080|(ge&255)<<16|(ue&255)<<8|pe&255)>>>0}var s=64;function a(k){for(var B=new Uint32Array(s*s),F=0;F<s;F++)for(var z=0;z<s;z++)B[F*s+z]=k(z,F);return e(s,s,B)}function o(k,B,F,z){return a(function(Q,pe){var ue=pe>>4,ge=ue&1?16:0,Ee=Q+ge>>5,Pe=(pe&15)>=14,$e=(Q+ge&31)>=30;if(Pe||$e)return r(z,"#000000",n(Q,pe,k)*.4);var K=n(Q,pe,k)*.5+n(Ee*31,ue*7,k+9)*.5,Re=(pe&15)<2||(Q+ge&31)<2?.25:0;return r(B,F,K*.65+Re)})}function c(k,B,F){return a(function(z,Q){var pe=z>>4,ue=Q>>4,ge=n(pe,ue,k)*6-3,Ee=(z+ge)%16<1.5||(Q-ge)%16<1.5,Pe=n(z,Q,k+3)*.45+n(pe*5,ue*3,k+7)*.55;return Ee?r(F,"#000000",.5):r(B,F,Pe*.7)})}function u(k,B,F){return a(function(z,Q){var pe=z>>4&1,ue=(z&15)<1||(Q&31)<1,ge=((z&15)===3||(z&15)===12)&&((Q&31)===4||(Q&31)===27),Ee=n(z,Q,k)*.3+pe*.12+Q/s*.15;return ue?r(F,"#000000",.6):ge?r(B,"#ffffff",.35):r(B,F,Ee)})}function l(k){return a(function(B,F){var z="#5a4e3a",Q="#2a2418";if(F<6||F>57)return r("#3a3022","#000000",.3+n(B,F,k)*.2);if(F>=28&&F<=33&&(B&31)>3&&(B&31)<28){var pe=F===30||F===31?"#bff8ff":"#1a8a98";return r(pe,"#000000",n(B,F,k)*.2)}var ue=(B&31)<2,ge=F>40&&F<54&&(F&3)<2&&(B&31)>6&&(B&31)<26;return ue?r(Q,"#000000",.5):ge?r("#1e1a12","#000000",.3):r(z,Q,n(B,F,k)*.5)})}function h(k){return a(function(B,F){var z=n(B,F,k)*.4+n(B>>2,F>>2,k+5)*.6,Q=Math.sin(B*.22+Math.sin(F*.13+k)*2.1)+Math.sin(F*.18+B*.05);return Q>1.45?r("#c0141e","#ff3a2a",n(B,F,k+2)):Q>1.2?r("#4a060c","#9a1018",.5):r("#2a2224","#100c0e",z)})}function f(k){return a(function(B,F){var z="#6a5a3a",Q="#2e2618",pe=Math.abs(B-32)<1,ue=(F&15)<2,ge=B<3||B>60||F<3||F>60;if(k&&F>8&&F<20&&!pe){var Ee=k==="red"?"#d02020":"#2050e0";return r(Ee,"#000000",(F===9||F===19?.5:0)+n(B,F,40)*.2)}return pe?r("#101216","#000000",.3):ge?r(Q,"#000000",.4):ue?r(Q,z,.3):r(z,Q,n(B,F,17)*.4+F/s*.2)})}function p(k){return a(function(B,F){var z="#4f4a42",Q="#28241e",pe=B>16&&B<48,ue=F>14&&F<50;if(pe&&ue){var ge=B>24&&B<40,Ee=k?F>32&&F<46:F>18&&F<32;return ge&&Ee?r(k?"#6fe0ec":"#d03030","#000000",n(B,F,3)*.25):r("#1c1a16","#000000",.3)}var Pe=B<2||B>61||F<2||F>61;return Pe?r(Q,"#000000",.5):r(z,Q,n(B,F,21)*.5)})}function v(k,B,F){return a(function(z,Q){var pe=(z>>4)+(Q>>4)&1,ue=(z&15)<1||(Q&15)<1,ge=n(z,Q,k)*.4;return ue?r(F,"#000000",.55):r(pe?B:F,"#000000",ge+pe*.05)})}var _={o:"#141210",b:"#5e5750",d:"#3a3532",c:"#8a1c18",h:"#e0403a",e:"#ff7a6a",m:"#1a0806",t:"#c8c0b0",x:"#c8c0b0",r:"#c0302a",f:"#ff4a3a",g:"#ffb0a0"};function g(k){return k.map(function(B,F){return F<3?B.replace(/t/g,"."):B})}var m=["......tt........",".......tt.......","........oooooooo","........obbbbbbb","........obbddddd","........obbeedbb","........obbbbbbb","........obdmtmbb","........obbmmbbb","........oooooobb","....oooooooooooo","...obbbbbbdccccc","..obbbo.obdccchc","..obbo..obdcchhc","..obbo..obddcccc",".obbo...obbdcccc",".obbo...obbddccc",".otto...obbbdddd",".ott....obbbbddd","........obbbbbbd","........oobbbbbb",".........obbo...",".........obbo...",".........obbo...",".........obbo...",".........oddo...",".........oddo...","........obddo...","........odddo...","......ottdddo...","......ooooooo...","................"],x=m.slice(0,21).concat(["........obbo....","........obbo....","........obbo....","........obbo....","........oddo....","........oddo....",".......obddo....",".......odddo....",".....ottdddo....",".....oooooo.....","................"]),E=["..gf..tt........",".gffg..tt.......",".offo...oooooooo",".otto...obbbbbbb",".obbo...obbddddd",".obbo...obeeedbb",".obbo...obbbbbbb",".obbo...obmmttbb","..obbo..obbmmbbb","..obbo..oooooobb","..obooooooooooo.","...obbbbbdccccc.","....obbobdccchc.","........obdcchhc","........obddcccc","........obbdcccc","........obbddccc","........obbbdddd","........obbbbddd","........obbbbbbd","........oobbbbbb",".........obbo...",".........obbo...",".........obbo...",".........obbo...",".........oddo...",".........oddo...","........obddo...","........odddo...","......ottdddo...","......ooooooo...","................"],M=m.slice();M[5]="........obbxxdbb",M[7]="........obmmmmbb";var w=["................","................","................","................","................","................","......tt........",".......tt.......","........oooooooo","........obbbbbbb","........obxxdddb","........obmmmmbb",".....oooooooobbb","...obbbbbbdccccb","..obbbboobdcccbb",".obbbo..obddccbb",".otto...obbddddb","........obbbbbdd",".......oobbbbbbb","......obbbbbbbdd","................","................","................","................","................","................","................","................","................","................","................","................"],A=["................","................","................","................","................","................","................","................","................","................","................","................","................","......tt........",".......ttoooooo.","......obbbbbbbbo",".....obbxxddmmbo","....obbbbdddbbbo","...obbddccccbbdd","..obbbbbdddbbbbb","................","................","................","................","................","................","................","................","................","................","................","................"],P=["................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","..........tt....","....oo....ott...","...obbdoooobbdo.","..obbddbbbdddbbo",".orrbdddddbbdrro",".orrrbbdddbrrro.","..orrrrrrrrrro..","...ooooooooooo..","................","................"];function y(k){var B={o:"#141210",p:"#5e5750",q:"#3a3532",k:"#7a726a",t:"#c8c0b0",m:"#1a0806",e:"#ff5a4a",x:"#c8c0b0",r:"#c0302a"};if(k)for(var F in k)B[F]=k[F];return B}var S=["................","................","......oooooooooo",".....opppppppppp","....oppkpppppppp","....opppeepppppp","....oppppppppppp","....opmmmmmmmmmm","....opmtmtmtmtmt","....opmmmmmmmmmm","....optmtmtmtmtm","....opqqqqqqqqqq",".....ooooooooooo","...oppppqqpppppp","..opppppoqpppppp","..opppo.oqpppppp","..oppo..oqqppppp","..otto..oqqqpppp","..ott...oqqqqppp","........oqqqqqpp","........ooqqqqqp",".........oqqqo..",".........oqqqo..",".........oqqo...","........oqqqo...","........ottto...","........ooooo...","................","................","................","................","................"],L=S.slice(0,21).concat(["........oqqqo...","........oqqqo...","........oqqo....",".......oqqqo....",".......ottto....",".......ooooo....","................","................","................","................"]),U=["................","......oooooooooo",".....opppppppppp","....oppkpppppppp","....opppeepppppp","....opmmmmmmmmmm","....opmttmttmttm","....opmmmmmmmmmm","....opmmmmmmmmmm","....opmmmmmmmmmm","....opmttmttmttm","....opmmmmmmmmmm","....opqqqqqqqqqq","...oppppqqpppppp","..opppppoqpppppp","..opppo.oqpppppp","..oppo..oqqppppp","..otto..oqqqpppp","..ott...oqqqqppp","........oqqqqqpp","........ooqqqqqp",".........oqqqo..",".........oqqqo..",".........oqqo...","........oqqqo...","........ottto...","........ooooo...","................","................","................","................","................"],D=S.slice();D[5]="....opppxxpppppp";var Y=["................","................","................","................","................","................","................","......oooooooooo",".....opppppppppp","....oppxxppppppp","....opmmmmmmmmmm","....opmtmtmtmtmt","....opqqqqqqqqqq","...opppppqqppppp","..oppppppqqquppp".replace("u","q"),"..oppoooqqqqqppp","..oo...oqqqqqqpp",".......ooqqqqqqp","........oqqqqoo.","................","................","................","................","................","................","................","................","................","................","................","................","................"],G=["................","................","................","................","................","................","................","................","................","................","................","................","................","................","......ooooooooo.",".....oppppppppqo","....opxxpmmttppo","...oppppqqqqppqo","..oqqppppppqqqoo","...ooooooooooo..","................","................","................","................","................","................","................","................","................","................","................","................"],C=["................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................",".......oo.......",".....ooppoo.tt..","...oqpppppqoot..","..oqqpmmttppqqo.",".orrqqppppqqrro.",".orrrqqqqqrrro..","..orrrrrrrrro...","...oooooooooo...","................","................"],N={o:"#06141c",h:"#1e8aa0",H:"#6fe0ec",s:"#d8fff8",v:"#ffd23e",V:"#fff6b0",c:"#157a8a",C:"#3fd8c8",g:"#ffd23e",Y:"#fff6b0"},I=["..........",".....ooooo","...oohhhhh","..ohhHHhhh","..ohHhhhhh",".ohhhhoooo",".ohhhosvvv",".ohhhosvVV",".ohhhossss",".ohhhossss",".ohhhhosss","..ohhhooss","...ooooooo",".....ooccc","...ooccccg","..occcccCg",".occcCcccg",".occcCccgY",".occcCccgY",".occ.Ccccg",".oso.occcg",".oso.occcc","..o..oCCCC",".....occcc",".....occo.",".....occo.",".....occo.",".....oCco.",".....occo.",".....occo.",".....occo.","....ogggo.","....ooooo.",".........."],q=I.slice(0,24).concat(["....occo..","....occo..","...occo...","...oCco...","...occo...","..occo....","..occo....",".ogggo....",".ooooo....",".........."]),V=I.slice();V[13]=".o...ooccc",V[14]=".so.occccg",V[15]=".so.occcCg",V[16]=".oc.occccg",V[19]="..o..Ccccg",V[20]=".....occcg",V[21]=".....occcc";function J(k,B,F){return k.map(function(z,Q){for(var pe="",ue=0;ue<z.length;ue++)pe+=z[ue]!=="."&&n(ue,Q,F)<B?z[ue]:".";return pe})}function re(k){var B={};for(var F in N)B[F]=N[F];if(k)for(var z in k)B[z]=k[z];return B}function Se(k){var B={o:"#1a1008",f:"#e85818",F:"#ffa018",s:"#d8a06a",S:"#a8744a",w:"#f0ead8",k:"#28221a",m:"#5a1408",t:"#e8e0c8",r:"#4a4038",c:"#b84a10",C:"#7e2e08",g:"#888078",x:"#301010"},F=k.dim?{s:"#c08c5c",S:"#946440"}:{};for(var z in F)B[z]=F[z];var Q=[".osskwwkssss",".osskwkksss.".replace(".$",""),".ossskksssss"],pe=[".osssookssss",".osskwkksss.",".ossskksssss"],ue=[".osssssossss",".ossooosssss",".osssssossss"],ge=[".osskoskssss",".osssksossss",".osskoskssss"],Ee=["..osssssssss","..osssmmmmmm","..osssssssss"],Pe=["..osssssssss","..ossmmmmmmm","..osSmmsssss"],$e=["..osssmmmmmm","..ossmtttttt","..osssmmmmmm"],K=["..ossmmmmmss","..osmmttmmss","..ossmmmmmss"],Re=k.eyes==="squint"?pe:k.eyes==="shut"?ue:k.eyes==="x"?ge:Q,xe=k.mouth==="grim"?Pe:k.mouth==="grin"?$e:k.mouth==="ouch"?K:Ee,Ce=[".....ffF....","...fFffffF..","..ffFfffffF.","..offffffff.",".offFffffffF",".offffffffff",".offosssssss",".oosssssssss","..ossssssSSS","..osssssssss",Re[0],Re[1],Re[2],"..osssssssss","..ossssssSss","..osssssSSss","..ossssssSss","..osssssssss",xe[0],xe[1],xe[2],"..osssssssss","...ossssssSS","...ossssssss","....oossssss","..ooccoosSSS".replace("..",".o"),".occcccooooo","occCcccccccc"];return Ce=Ce.map(function(Oe){for(Oe=Oe.replace(/\$/g,""),Oe.length>12&&(Oe=Oe.slice(0,12));Oe.length<12;)Oe+=".";return Oe}),k.soot>=1&&(Ce[8]="..osrrsssSSS".slice(0,12),Ce[9]="..ossrssssss"),k.soot>=2&&(Ce[14]="..osrssssrss",Ce[15]="..orrssSSrss",Ce[21]="..osrsssssrs"),k.soot>=3&&(Ce[6]=".offosrrssss",Ce[13]="..orrsssrrss",Ce[22]="...orrsssrSS".slice(0,12)),t(Ce,B,{mirror:!0})}var Ue={o:"#0e0c0a",g:"#8a6a2a",G:"#c8a048",d:"#4a3818",s:"#d8a06a",S:"#a8744a",w:"#7a4a28",W:"#5a3418",y:"#6fe0ec",k:"#2a2010"},ut=["............","....oooo....","..oossssoo..",".ossssssss o".replace(" ","s"),".osssSsssss.","ossssSSssss.","osssssSssss.","ossssssssss.","osSSsssssss.","ossssssssss.",".ossssssss..",".ossssssss..","..ossssss...","..oswwwws...","..owwWWww...","..owWWWWw...","..owwwwww...","...oooooo..."].map(function(k){for(;k.length<12;)k+=".";return k.slice(0,12)}),et=["...........ooo","..........ookk","..........ogkk","..........ogGd","..........ogGd",".........ooGgd",".........ogGGd",".........ogGGd",".........ogGGd",".........odddd",".........ogGGd",".........ogGGd",".........odddd","..........oggd","..........oggd","..........ogdd",".......ooooddd",".....oossssodd","....ossssssodd","...ossssSssood","..osssssSSssod","..ossssssSssod","..osSSssssssod","..ossssssssood","...osssssssso.","...osssssssso.","....oossssoo..","......oooo...."],Je=[".........ooo","........ookk","........odkk","........odgd","........odgd","........odgd","........odgd","........odgd","........odgd","........odgd","........oddd",".......ooddd","......oWwwdd","......oWwwwd","......oWWwwd","......oWWwwd","......ooWWwd",".......ooWWd","........oddd","........oggd",".....oooogdd","...oosssoggd","..ossssssogd","..ossSsssogd",".osssSSssood",".ossssssssod",".osSSsssssod",".ossssssssod","..ossssssso.","..ossssssso.","...oosssoo..",".....oooo..."];function de(k,B,F){for(var z=new Uint32Array(k*B),Q=(k-1)/2,pe=(B-1)/2,ue=0;ue<B;ue++)for(var ge=0;ge<k;ge++){var Ee=(ge-Q)/(k/2),Pe=(ue-pe)/(B/2),$e=Math.sqrt(Ee*Ee+Pe*Pe),K=F($e,ge,ue);K&&(z[ue*k+ge]=K)}return e(k,B,z)}function _e(k){return de(12,12,function(B,F,z){var Q=n(F,z,k)*.3;return B+Q<.38?i("#ffe0d8"):B+Q<.68?i("#ff6a5a"):B+Q<.95?i("#c0202a"):0})}function De(k){return de(14,14,function(B,F,z){var Q=n(F,z,k)*.3;return B+Q<.38?i("#eafffc"):B+Q<.68?i("#6fe0ec"):B+Q<.95?i("#1a8a98"):0})}function We(k,B,F){return de(k,k,function(z,Q,pe){var ue=n(Q,pe,B)*.55;return z+ue<.3*F?i("#fff8d0"):z+ue<.55*F?i("#ffd23e"):z+ue<.8*F?i("#ff7a18"):z+ue<1*F?i("#a83010"):0})}function ze(k,B){return de(B?8:6,B?8:6,function(F,z,Q){var pe=n(z,Q,k)*.4;return F+pe<.5?i("#c8c4bc"):F+pe<.9?i("#78746c"):0})}function ht(k,B){return de(B?8:6,B?8:6,function(F,z,Q){var pe=n(z,Q,k)*.45;return F+pe<.45?i("#8a8278"):F+pe<.9?i("#4a4440"):0})}function X(){for(var k=16,B=22,F=new Uint32Array(k*B),z=0;z<B;z++)for(var Q=0;Q<k;Q++){var pe=Math.abs((Q-7.5)/7.5);if(!(pe>1)){var ue=pe>.88||z===0||z===B-1,ge=1-pe*pe*.75,Ee=z===4||z===16,Pe=z>=8&&z<=12,$e=Ee?"#c8a048":Pe?"#6a1018":"#2a2226";z>=1&&z<=2&&($e="#3a1418");var K=r($e,"#000000",1-ge+n(Q,z,77)*.2);ue&&(K=i("#16130f")),z===1&&pe<.6&&n(Q,z,8)>.4&&(K=i("#ff3a3a")),F[z*k+Q]=K}}return e(k,B,F)}function ye(k){for(var B=10,F=28,z=new Uint32Array(B*F),Q=12;Q<28;Q++)for(var pe=4;pe<=5;pe++)z[Q*B+pe]=i(Q>24?"#3a2812":"#6a4a22");z[12*B+3]=i("#8a6432"),z[12*B+6]=i("#8a6432");for(var ue=0;ue<12;ue++)for(var ge=0;ge<B;ge++){var Ee=(ge-4.5)/4.2,Pe=(ue-8)/8,$e=Math.sqrt(Ee*Ee*1.6+Pe*Pe),K=n(ge,ue,k)*.5;$e+K<.45?z[ue*B+ge]=i("#fff0b0"):$e+K<.75?z[ue*B+ge]=i("#ffd23e"):$e+K<1&&(z[ue*B+ge]=i("#ff7a18"))}return e(B,F,z)}function qe(k,B,F,z,Q){for(var pe=new Uint32Array(k*B),ue=0;ue<B;ue++)for(var ge=0;ge<k;ge++){var Ee=ge===0||ue===0||ge===k-1||ue===B-1,Pe=Ee?i("#14120e"):r(F,z,ue/B*.6+n(ge,ue,5)*.15);pe[ue*k+ge]=Pe}return Q&&Q(pe,k,B),e(k,B,pe)}function me(k,B,F,z){for(var Q=new Uint32Array(k*B),pe=(k-1)/2,ue=0;ue<B;ue++)for(var ge=0;ge<k;ge++){var Ee=(ue<B*.35?ue/(B*.35):(B-1-ue)/(B*.65))*(k/2),Pe=ge-pe;Math.abs(Pe)>Ee||(Q[ue*k+ge]=Math.abs(Pe)>Ee-1?i("#14120e"):Pe<0?r(F,"#ffffff",.2):r(z,"#000000",.25))}return e(k,B,Q)}function he(k){return function(B,F,z){for(var Q=F>>1,pe=z>>1,ue=i(k),ge=-(z>>2);ge<=z>>2;ge++)B[(pe+ge)*F+Q]=ue,B[(pe+ge)*F+Q-1]=ue;for(var Ee=-(F>>2);Ee<=F>>2;Ee++)B[pe*F+Q+Ee]=ue,B[(pe-1)*F+Q+Ee]=ue}}function Ae(k){var B=[".oooooo.","osssssso","osscccso","oscsscso","oscsscso","osscccso",".osssso.",".osssso.","..osso..","...oo..."];return t(B,{o:"#14120e",s:"#b8b0a0",c:k})}function te(){var k=30,B=10,F=new Uint32Array(k*B);function z(ge,Ee,Pe){ge>=0&&ge<k&&Ee>=0&&Ee<B&&(F[Ee*k+ge]=i(Pe))}for(var Q=2;Q<22;Q++)z(Q,3,"#6a5020"),z(Q,4,"#c8a048"),z(Q,5,"#4a3818");for(var pe=8;pe<15;pe++)z(pe,6,"#5a3418");for(var ue=21;ue<29;ue++)z(ue,4+(ue-21>>1),"#5a3418"),z(ue,5+(ue-21>>1),"#7a4a28");return z(1,3,"#16130f"),z(1,4,"#16130f"),e(k,B,F)}function ne(){return de(14,14,function(k,B,F){return k<.3?i("#fff8d0"):k<.6?i("#ffd23e"):k<.85?i("#ff7a18"):k<1?i("#a03008"):0})}function fe(){return de(20,20,function(k,B,F){var z=Math.atan2(F-9.5,B-9.5),Q=.55+.45*Math.abs(Math.sin(z*4));return k<.35*Q?i("#fff8d0"):k<.7*Q?i("#ffd23e"):k<1*Q?i("#ff7a18"):0})}var He={A:[2,5,7,5,5],B:[6,5,6,5,6],C:[3,4,4,4,3],D:[6,5,5,5,6],E:[7,4,6,4,7],F:[7,4,6,4,4],G:[3,4,5,5,3],H:[5,5,7,5,5],I:[7,2,2,2,7],J:[1,1,1,5,2],K:[5,6,4,6,5],L:[4,4,4,4,7],M:[5,7,5,5,5],N:[6,5,5,5,5],O:[2,5,5,5,2],P:[6,5,6,4,4],Q:[2,5,5,6,3],R:[6,5,6,6,5],S:[3,4,2,1,6],T:[7,2,2,2,2],U:[5,5,5,5,7],V:[5,5,5,5,2],W:[5,5,5,7,5],X:[5,5,2,5,5],Y:[5,5,2,2,2],Z:[7,1,2,4,7],0:[7,5,5,5,7],1:[2,6,2,2,7],2:[6,1,2,4,7],3:[6,1,2,1,6],4:[5,5,7,1,1],5:[7,4,6,1,6],6:[3,4,6,5,2],7:[7,1,2,2,2],8:[7,5,7,5,7],9:[2,5,3,1,6]," ":[0,0,0,0,0],".":[0,0,0,0,2],",":[0,0,0,2,4],"!":[2,2,2,0,2],"?":[6,1,2,0,2],":":[0,2,0,2,0],"-":[0,0,7,0,0],"+":[0,2,7,2,0],"%":[5,1,2,4,5],"/":[1,1,2,4,4],"'":[2,2,0,0,0],_:[0,0,0,0,7],">":[4,2,1,2,4],"<":[1,2,4,2,1],'"':[5,5,0,0,0],"=":[0,7,0,7,0],"(":[1,2,2,2,1],")":[4,2,2,2,4],"*":[0,5,2,5,0],"#":[5,7,5,7,5],"^":[2,5,0,0,0],"&":[2,5,2,5,3]};function W(k,B,F,z,Q){Q=Q||{};var pe=Q.scale||1,ue=Q.color||"#e8e0c8",ge=Q.shadow;if(B=String(B).toUpperCase(),Q.center&&(F-=Math.floor(tt(B,pe)/2)),Q.right&&(F-=tt(B,pe)),ge){var Ee=typeof ge=="string"?ge:"#000000";W(k,B,F+pe,z+pe,{scale:pe,color:Ee})}k.fillStyle=ue;for(var Pe=0;Pe<B.length;Pe++){for(var $e=He[B[Pe]]||He["?"],K=0;K<5;K++)for(var Re=$e[K],xe=0;xe<3;xe++)Re&4>>xe&&k.fillRect(F+xe*pe,z+K*pe,pe,pe);F+=4*pe}}function tt(k,B){return String(k).length*4*(B||1)-(B||1)}var Te={};Te.tex={1:o(1,"#8a4232","#4a1e14","#2a1812"),2:c(2,"#8a8578","#4a463c"),3:u(3,"#6a5e4a","#2e281e"),4:l(4),5:h(5),6:f(null),7:f("red"),8:f("blue"),9:p(!1),10:p(!0),11:o(1,"#8a4232","#4a1e14","#2a1812")},Te.floors={slab:v(11,"#4e4a42","#38342c"),tech:v(12,"#3c4440","#2a302c"),hell:a(function(k,B){var F=n(k,B,13)*.5+n(k>>2,B>>2,14)*.5,z=Math.sin(k*.19+Math.sin(B*.11)*2)+Math.sin(B*.15);return z>1.5?r("#c0141e","#ff3a2a",F):r("#221c1e","#0e0a0c",F)}),ceilDark:v(15,"#2e2b26","#201d18"),ceilTech:a(function(k,B){var F=(k&31)>12&&(k&31)<20&&(B&31)>12&&(B&31)<20;return F?r("#fff0c0","#c0a860",n(k,B,16)*.3):r("#2a2e2c","#1a1d1b",n(k,B,16)*.5)}),ceilHell:a(function(k,B){return r("#1e1a1c","#0c0a0b",n(k,B,17)*.6)})};var O=_,T=y(null),ie=y({p:"#2e2a28",q:"#161312",k:"#b08a3a",e:"#ff3a2a",t:"#d8b060",r:"#ff3a2a"});function le(k,B){for(var F=5,z=new Uint32Array(B*F),Q=0;Q<F;Q++)for(var pe=0;pe<B;pe++){var ue=(pe-(B-1)/2)/(B/2),ge=F*(1-ue*ue)-n(pe,0,k)*1.2;if(!(F-1-Q>=ge)){var Ee=r("#6a625a","#2e2a28",Q/F*.5+n(pe,Q,k)*.5);n(pe,Q,k+3)>.94&&(Ee=i("#c0302a")),z[Q*B+pe]=Ee}}return e(B,F,z)}Te.mobs={imp:{walkA:t(g(m),O,{mirror:!0}),walkB:t(g(x),O,{mirror:!0}),attack:t(g(E),O,{mirror:!0}),pain:t(g(M),O,{mirror:!0}),die1:t(w.map(function(k){return k.replace(/t/g,".")}),O,{mirror:!0}),die2:t(A.map(function(k){return k.replace(/t/g,".")}),O,{mirror:!0}),corpse:le(91,16)},gnasher:{walkA:t(S,T,{mirror:!0}),walkB:t(L,T,{mirror:!0}),attack:t(U,T,{mirror:!0}),pain:t(D,T,{mirror:!0}),die1:t(Y,T,{mirror:!0}),die2:t(G,T,{mirror:!0}),corpse:le(92,18)},knight:{walkA:t(S,ie,{mirror:!0}),walkB:t(L,ie,{mirror:!0}),attack:t(U,ie,{mirror:!0}),pain:t(D,ie,{mirror:!0}),die1:t(Y,ie,{mirror:!0}),die2:t(G,ie,{mirror:!0}),corpse:le(93,22)},riley:{walkA:t(I,N,{mirror:!0}),walkB:t(q,N,{mirror:!0}),attack:t(V,re({v:"#ffffff",V:"#ffffff",Y:"#ffffff",g:"#fff6b0"}),{mirror:!0}),pain:t(I,re({c:"#e8fffc",C:"#ffffff",h:"#9ef0f8"}),{mirror:!0}),shield:t(I,re({c:"#c89018",C:"#ffd23e",h:"#e0a020",H:"#fff0a0"}),{mirror:!0}),die1:t(J(I,.6,71),re({c:"#6fe0ec"}),{mirror:!0}),die2:t(J(I,.22,72),re({c:"#d8fff8",h:"#d8fff8"}),{mirror:!0}),corpse:null}},Te.things={barrel:X(),torchA:ye(31),torchB:ye(87),stim:me(8,10,"#ffe8a0","#e0a020"),medkit:me(12,16,"#f0fff8","#6fe0ec"),clip:qe(10,8,"#8a6a2a","#4a3818",function(k,B,F){for(var z=2;z<B-2;z+=2)k[2*B+z]=i("#6fe0ec")}),shells:qe(14,9,"#b08a3a","#5e4418",function(k,B,F){for(var z=2;z<B-2;z+=2)k[3*B+z]=i("#c8a030"),k[4*B+z]=i("#c8a030")}),armor:t(["...oooo.","..oggggo",".ogggggg",".oggGGgg",".ogggggg",".ogggggg","..ogggg o".replace(" ",""),"..oggggg","...ooooo"].map(function(k){for(;k.length<8;)k+=".";return k.slice(0,8)}),{o:"#14120e",g:"#8a6a2a",G:"#e0b050"},{mirror:!0}),keyRed:Ae("#d02020"),keyBlue:Ae("#2050e0"),shotgunPickup:te(),orb:ne(),fireballA:_e(41),fireballB:_e(42),greenballA:De(43),greenballB:De(44),boom1:We(24,51,.7),boom2:We(28,52,1),boom3:We(28,53,1.25),puffA:ze(61,!0),puffB:ze(62,!1),bloodA:ht(63,!0),bloodB:ht(64,!1)},Te.faces={ok:Se({eyes:"open",mouth:"calm",soot:0}),hurt1:Se({eyes:"open",mouth:"grim",soot:1}),hurt2:Se({eyes:"squint",mouth:"grim",soot:2}),hurt3:Se({eyes:"squint",mouth:"ouch",soot:3}),pain:Se({eyes:"shut",mouth:"ouch",soot:1}),grin:Se({eyes:"open",mouth:"grin",soot:0}),dead:Se({eyes:"shut",mouth:"ouch",soot:3,dim:!0})},Te.guns={fist:t(ut,Ue,{mirror:!0}),pistol:t(et,Ue,{mirror:!0}),shotgun:t(Je,Ue,{mirror:!0}),flash:fe()};var ve={};return Te.secretTex=function(k){if(ve[k])return ve[k];for(var B=Te.tex[k]||Te.tex[1],F=new Uint32Array(B.data),z=0,Q=0;Q<F.length;Q++){var pe=F[Q];z+=(pe>>16&255)+(pe>>8&255)+(pe&255)}var ue=z/F.length/3>70;function ge(K){var Re=F[K],xe=Re>>16&255,Ce=Re>>8&255,Oe=Re&255;ue?(xe*=.35,Ce*=.35,Oe*=.35):(xe=xe*.5+110,Ce=Ce*.5+95,Oe=Oe*.5+80),F[K]=(4278190080|(xe&255)<<16|(Ce&255)<<8|Oe&255)>>>0}for(var Ee=22,Pe=6;Pe<58;Pe++)Ee+=Pe%7===0?1:Pe%11===0?-1:0,ge(Pe*64+Ee),ge(Pe*64+Ee+1);for(var $e=0;$e<7;$e++)ge((30+$e)*64+Ee+2+$e);return ve[k]={w:64,h:64,data:F},ve[k]},Te.drawText=W,Te.textWidth=tt,Te.hex=i,Te})();typeof Pu!="undefined"&&(Pu.exports=Hm)});var cd=jo(($M,Lu)=>{"use strict";var km=(function(){var i=null,e=null,t=null,n=null,r=!0,s=!1,a=.5;try{r=localStorage.getItem("firebird.music")!=="off"}catch{}function o(){if(i)return i.state==="suspended"&&i.resume(),!0;try{var C=window.AudioContext||window.webkitAudioContext;return C?(i=new C,e=i.createGain(),e.gain.value=a,e.connect(i.destination),t=i.createGain(),t.gain.value=.9,t.connect(e),n=i.createGain(),n.gain.value=.3,n.connect(e),!0):!1}catch{return!1}}function c(C){if(i){var N=i.currentTime+(C.delay||0),I=i.createOscillator();I.type=C.type||"square",I.frequency.setValueAtTime(C.f0,N),C.f1&&I.frequency.exponentialRampToValueAtTime(Math.max(20,C.f1),N+C.dur);var q=i.createGain(),V=C.gain||.3;q.gain.setValueAtTime(1e-4,N),q.gain.exponentialRampToValueAtTime(V,N+(C.attack||.008)),q.gain.exponentialRampToValueAtTime(1e-4,N+C.dur);var J=t;if(C.pan&&i.createStereoPanner){var re=i.createStereoPanner();re.pan.value=Math.max(-1,Math.min(1,C.pan)),q.connect(re),re.connect(C.bus||t),J=null}else q.connect(C.bus||t);if(C.wobble){var Se=i.createOscillator(),Ue=i.createGain();Se.frequency.value=C.wobble,Ue.gain.value=C.f0*.25,Se.connect(Ue),Ue.connect(I.frequency),Se.start(N),Se.stop(N+C.dur)}I.connect(q),I.start(N),I.stop(N+C.dur+.02)}}var u=null;function l(){if(u)return u;var C=i.sampleRate*1.5;u=i.createBuffer(1,C,i.sampleRate);for(var N=u.getChannelData(0),I=0;I<C;I++)N[I]=Math.random()*2-1;return u}function h(C){if(i){var N=i.currentTime+(C.delay||0),I=i.createBufferSource();I.buffer=l(),I.loop=!0;var q=i.createBiquadFilter();q.type=C.type||"lowpass",q.frequency.setValueAtTime(C.f0||1e3,N),C.f1&&q.frequency.exponentialRampToValueAtTime(Math.max(30,C.f1),N+C.dur),q.Q.value=C.q||.8;var V=i.createGain(),J=C.gain||.3;if(V.gain.setValueAtTime(1e-4,N),V.gain.exponentialRampToValueAtTime(J,N+(C.attack||.006)),V.gain.exponentialRampToValueAtTime(1e-4,N+C.dur),I.connect(q),q.connect(V),C.pan&&i.createStereoPanner){var re=i.createStereoPanner();re.pan.value=Math.max(-1,Math.min(1,C.pan)),V.connect(re),re.connect(t)}else V.connect(t);I.start(N),I.stop(N+C.dur+.02)}}var f={pistol:function(C,N){h({dur:.14,gain:.5*C,f0:2400,f1:300,pan:N}),c({f0:220,f1:90,dur:.08,type:"square",gain:.2*C,pan:N})},shotgun:function(C,N){h({dur:.38,gain:.8*C,f0:1600,f1:120,pan:N}),c({f0:130,f1:45,dur:.3,type:"sawtooth",gain:.35*C,pan:N})},pump:function(C,N){h({dur:.05,gain:.3*C,f0:900,type:"bandpass",q:2,delay:0,pan:N}),h({dur:.05,gain:.3*C,f0:700,type:"bandpass",q:2,delay:.13,pan:N})},punch:function(C,N){h({dur:.1,gain:.25*C,f0:500,f1:150,pan:N}),c({f0:90,f1:50,dur:.1,type:"sine",gain:.4*C,pan:N})},whiff:function(C,N){h({dur:.12,gain:.15*C,f0:600,f1:1400,type:"bandpass",q:1.5,pan:N})},doorOpen:function(C,N){h({dur:.5,gain:.22*C,f0:200,f1:500,pan:N}),c({f0:70,f1:130,dur:.5,type:"sawtooth",gain:.12*C,pan:N})},doorClose:function(C,N){h({dur:.4,gain:.2*C,f0:400,f1:150,pan:N}),c({f0:120,f1:60,dur:.4,type:"sawtooth",gain:.12*C,pan:N}),c({f0:60,dur:.08,type:"sine",gain:.3*C,delay:.38,pan:N})},locked:function(C,N){c({f0:150,dur:.09,type:"square",gain:.25*C,pan:N}),c({f0:110,dur:.12,type:"square",gain:.25*C,delay:.11,pan:N})},switchFlip:function(C,N){h({dur:.06,gain:.3*C,f0:1200,type:"bandpass",q:2,pan:N}),c({f0:90,f1:55,dur:.18,type:"square",gain:.3*C,delay:.05,pan:N})},pickup:function(C,N){c({f0:660,dur:.06,type:"square",gain:.15*C,pan:N}),c({f0:880,dur:.08,type:"square",gain:.15*C,delay:.06,pan:N})},health:function(C,N){c({f0:440,dur:.08,type:"sine",gain:.25*C,pan:N}),c({f0:587,dur:.12,type:"sine",gain:.25*C,delay:.07,pan:N})},keyPickup:function(C,N){[523,659,784,1047].forEach(function(I,q){c({f0:I,dur:.09,type:"square",gain:.16,delay:q*.07,pan:N})})},weaponUp:function(C,N){[180,260,380,520].forEach(function(I,q){c({f0:I,dur:.08,type:"sawtooth",gain:.18,delay:q*.05,pan:N})})},secret:function(C,N){[880,1108,1318,1760].forEach(function(I,q){c({f0:I,dur:.14,type:"triangle",gain:.2,delay:q*.09,pan:N})})},orb:function(C,N){[220,330,440,660,880].forEach(function(I,q){c({f0:I,dur:.2,type:"triangle",gain:.2,delay:q*.08,pan:N})})},impSight:function(C,N){h({dur:.35,gain:.22*C,f0:900,f1:2400,type:"bandpass",q:4,pan:N}),c({f0:180,f1:150,dur:.08,type:"triangle",gain:.25*C,pan:N,delay:.3}),c({f0:180,f1:150,dur:.08,type:"triangle",gain:.2*C,pan:N,delay:.42})},knightSight:function(C,N){c({f0:55,f1:62,dur:.9,type:"sine",gain:.45*C,pan:N}),h({dur:.5,gain:.2*C,f0:300,f1:120,type:"lowpass",pan:N}),[[196,.1],[196*2.63,.05],[196*4.9,.025]].forEach(function(I){c({f0:I[0],f1:I[0]*.98,dur:1.1,type:"sine",gain:I[1]*C,pan:N,delay:.15})})},rileySight:function(C,N){[523,659,784,1047].forEach(function(I,q){c({f0:I,dur:.12,type:"triangle",gain:.22*C,delay:q*.07,pan:N})})},rileyTalk:function(C,N){c({f0:880,f1:1320,dur:.06,type:"square",gain:.08}),c({f0:1320,dur:.05,type:"square",gain:.07,delay:.07})},rileyShoot:function(C,N){c({f0:1400,f1:500,dur:.18,type:"triangle",gain:.25*C,pan:N})},rileyShield:function(C,N){c({f0:300,f1:900,dur:.3,type:"sine",gain:.3*C,wobble:18,pan:N})},rileyDerez:function(C,N){[1568,1319,1047,784,659,523,392].forEach(function(I,q){c({f0:I,dur:.14,type:"triangle",gain:.2,delay:q*.09,pan:N})})},impShoot:function(C,N){h({dur:.22,gain:.25*C,f0:400,f1:1200,type:"bandpass",q:1.5,pan:N})},fireExplode:function(C,N){h({dur:.3,gain:.4*C,f0:900,f1:100,pan:N})},barrelBoom:function(C,N){h({dur:.7,gain:.9*C,f0:1400,f1:60,pan:N}),c({f0:65,f1:28,dur:.6,type:"sine",gain:.6*C,pan:N})},enemyPain:function(C,N){c({f0:240,f1:170,dur:.07,type:"triangle",gain:.24*C,pan:N}),h({dur:.06,gain:.12*C,f0:1600,type:"bandpass",q:2,pan:N})},enemyDie:function(C,N){h({dur:.12,gain:.3*C,f0:6e3,f1:2500,type:"highpass",q:.8,pan:N}),h({dur:.4,gain:.12*C,f0:900,f1:250,pan:N,delay:.04}),c({f0:523,f1:1046,dur:.45,type:"sine",gain:.1*C,pan:N,delay:.08}),c({f0:784,f1:1568,dur:.45,type:"sine",gain:.06*C,pan:N,delay:.14})},playerPain:function(C,N){c({f0:170,f1:90,dur:.16,type:"square",gain:.3,pan:N}),h({dur:.1,gain:.15,f0:500,f1:200,pan:N})},playerDie:function(C,N){h({dur:.9,gain:.3,f0:1800,f1:120,pan:N}),c({f0:330,f1:110,dur:.9,type:"triangle",gain:.25,pan:N}),c({f0:440,f1:660,dur:.6,type:"sine",gain:.1,pan:N,delay:1})},noAmmo:function(C,N){h({dur:.03,gain:.2,f0:1800,type:"bandpass",q:3,pan:N})},pistol2:function(C,N){c({f0:160,f1:55,dur:.12,type:"sine",gain:.45*C,pan:N}),h({dur:.05,gain:.55*C,f0:5200,f1:1800,type:"highpass",q:.7,pan:N}),h({dur:.32,gain:.22*C,f0:1400,f1:180,pan:N,delay:.02}),c({f0:2400,f1:1100,dur:.09,type:"triangle",gain:.1*C,pan:N})},shotgun2:function(C,N){c({f0:110,f1:32,dur:.34,type:"sine",gain:.8*C,pan:N}),c({f0:70,f1:30,dur:.22,type:"triangle",gain:.4*C,pan:N}),h({dur:.09,gain:.8*C,f0:4200,f1:900,type:"highpass",q:.6,pan:N}),h({dur:.6,gain:.35*C,f0:1100,f1:90,pan:N,delay:.03}),[[392,.12],[392*2.76,.06],[392*5.4,.03]].forEach(function(I){c({f0:I[0],f1:I[0]*.995,dur:.9,type:"sine",gain:I[1]*C,pan:N,delay:.02})})},hitFlesh:function(C,N){c({f0:210,f1:90,dur:.07,type:"triangle",gain:.3*C,pan:N}),h({dur:.05,gain:.28*C,f0:2600,type:"bandpass",q:1.6,pan:N})},killConfirm:function(C,N){c({f0:90,f1:40,dur:.18,type:"sine",gain:.5*C,pan:N}),h({dur:.08,gain:.3*C,f0:5200,f1:2600,type:"highpass",q:.8,pan:N}),c({f0:660,f1:990,dur:.25,type:"sine",gain:.08*C,pan:N,delay:.04}),c({f0:990,f1:1480,dur:.3,type:"sine",gain:.05*C,pan:N,delay:.1})},ricochet:function(C,N){var I=1800+Math.random()*2400;c({f0:I,f1:I*.55,dur:.14+Math.random()*.1,type:"sine",gain:.08*C,pan:N})},casingTink:function(C,N){var I=3200+Math.random()*1600;c({f0:I,f1:I*.9,dur:.05,type:"triangle",gain:.05*C,pan:N})},tally:function(C,N){c({f0:1320,f1:1310,dur:.06,type:"sine",gain:.12,pan:N})},menu:function(C,N){c({f0:880,f1:875,dur:.12,type:"sine",gain:.14,pan:N}),c({f0:880*2.76,dur:.05,type:"sine",gain:.03,pan:N})},menuPick:function(C,N){c({f0:660,f1:655,dur:.3,type:"sine",gain:.16}),c({f0:990,f1:985,dur:.4,type:"sine",gain:.14,delay:.07}),c({f0:990*2.76,dur:.12,type:"sine",gain:.03,delay:.07})}};function p(C,N,I){if(!(!i||i.state==="suspended")){var q=f[C];if(q){var V=1/(1+(N||0)*.13);if(!(V<.04))try{q(V,I||0)}catch{}}}}var v=168,_=60/v/4,g=[164.81,164.81,146.83,130.81,123.47,130.81,146.83,155.56],m=null,x=0,E=0;function M(C,N,I){var q=i.createOscillator(),V=i.createOscillator();q.type="sawtooth",V.type="square",q.frequency.value=N,V.frequency.value=N*.5;var J=i.createBiquadFilter();J.type="lowpass",J.frequency.setValueAtTime(I?1400:800,C),J.frequency.exponentialRampToValueAtTime(200,C+_*1.8);var re=i.createGain();re.gain.setValueAtTime(1e-4,C),re.gain.exponentialRampToValueAtTime(I?.5:.34,C+.005),re.gain.exponentialRampToValueAtTime(1e-4,C+_*(I?1.9:.9)),q.connect(J),V.connect(J),J.connect(re),re.connect(n),q.start(C),q.stop(C+_*2),V.start(C),V.stop(C+_*2)}function w(C,N){if(N==="kick"){var I=i.createOscillator();I.type="sine",I.frequency.setValueAtTime(110,C),I.frequency.exponentialRampToValueAtTime(40,C+.1);var q=i.createGain();q.gain.setValueAtTime(.5,C),q.gain.exponentialRampToValueAtTime(.001,C+.12),I.connect(q),q.connect(n),I.start(C),I.stop(C+.13)}else{var V=i.createBufferSource();V.buffer=l(),V.loop=!0;var J=i.createBiquadFilter();J.type="highpass",J.frequency.value=N==="snare"?1800:6e3;var re=i.createGain();re.gain.setValueAtTime(N==="snare"?.3:.12,C),re.gain.exponentialRampToValueAtTime(.001,C+(N==="snare"?.09:.03)),V.connect(J),J.connect(re),re.connect(n),V.start(C),V.stop(C+.1)}}function A(C,N,I){[[1,1],[2.76,.4],[5.4,.18],[.5,.35]].forEach(function(q){var V=i.createOscillator(),J=i.createGain();V.type="sine",V.frequency.value=N*q[0],J.gain.setValueAtTime(1e-4,C),J.gain.exponentialRampToValueAtTime(I*q[1],C+.004),J.gain.exponentialRampToValueAtTime(1e-4,C+1.6/Math.sqrt(q[0])),V.connect(J),J.connect(n),V.start(C),V.stop(C+1.7)})}function P(C,N){var I=_*32;N.forEach(function(q){[-4,4].forEach(function(V){var J=i.createOscillator(),re=i.createGain(),Se=i.createBiquadFilter();J.type="triangle",J.frequency.value=q*Math.pow(2,V/1200),Se.type="lowpass",Se.frequency.value=1200,re.gain.setValueAtTime(1e-4,C),re.gain.exponentialRampToValueAtTime(.035,C+I*.4),re.gain.exponentialRampToValueAtTime(1e-4,C+I),J.connect(Se),Se.connect(re),re.connect(n),J.start(C),J.stop(C+I+.05)})})}var y=[[329.63,392,493.88],[293.66,369.99,440],[261.63,329.63,392],[246.94,311.13,369.99]];function S(){if(!(!s||!i)){for(;x<i.currentTime+.15;){var C=E%16,N=Math.floor(E/16),I=C>>2,q=C&3,V=82.41;q===0||q===2?M(x,V,!1):q===3&&M(x,g[(N*4+I)%g.length],!0),(C===0||C===8)&&w(x,"kick"),(C===4||C===12)&&w(x,"snare"),(C&1)===0&&w(x,"hat"),C===0&&N%2===0&&A(x,[659.25,587.33,523.25,493.88][(N>>1)%4],.07),C===0&&N%2===0&&P(x,y[(N>>1)%4]),x+=_,E++}m=setTimeout(S,40)}}function L(){!i||!r||s||(s=!0,x=i.currentTime+.05,E=0,S())}function U(){s=!1,m&&(clearTimeout(m),m=null)}function D(C){r=!!C;try{localStorage.setItem("firebird.music",r?"on":"off")}catch{}return r?L():U(),r}function Y(){return D(!r)}function G(C){a=Math.max(0,Math.min(1,C))*.72,e&&(e.gain.value=a)}return{init:o,play:p,startMusic:L,stopMusic:U,toggleMusic:Y,setMusic:D,setVolume:G,isMusicOn:function(){return r}}})();typeof Lu!="undefined"&&(Lu.exports=km)});var ud=jo((eS,Nu)=>{"use strict";var qm=(function(){var i="firebird.settings.v1",e="firebird.progress.v1",t={sens:5,volume:7,crosshair:!0,tips:!0,shake:!0,goalMarker:!0,difficulty:1,seenTips:{}};function n(){try{return window.localStorage}catch{return null}}function r(f){var p=n();if(!p)return null;try{var v=JSON.parse(p.getItem(f));return v&&typeof v=="object"?v:null}catch{return null}}function s(f,p){var v=n();if(v)try{v.setItem(f,JSON.stringify(p))}catch{}}var a={},o=r(i)||{};for(var c in t){var u=c in o&&o[c]!==null&&typeof o[c]==typeof t[c];a[c]=u?o[c]:t[c]}a.sens=Math.max(1,Math.min(10,a.sens|0)),a.volume=Math.max(0,Math.min(10,a.volume|0)),a.difficulty=Math.max(0,Math.min(2,a.difficulty|0));var l=r(e)||{};typeof l.unlocked!="number"&&(l.unlocked=0),(!l.best||typeof l.best!="object")&&(l.best={});var h=["PAR","KILLS","ITEMS","SECRETS"];return{v:a,save:function(){s(i,a)},progress:l,unlock:function(f){f>l.unlocked&&(l.unlocked=f,s(e,l))},record:function(f,p){var v=l.best[f]||{time:null,medals:{}},_=[];p.time<=p.par&&_.push("PAR"),p.kills>=p.totalKills&&_.push("KILLS"),p.items>=p.totalItems&&_.push("ITEMS"),p.secrets>=p.totalSecrets&&_.push("SECRETS");var g=_.filter(function(x){return!v.medals[x]}),m=v.time===null||p.time<v.time;return m&&(v.time=Math.floor(p.time)),_.forEach(function(x){v.medals[x]=!0}),l.best[f]=v,s(e,l),{newBest:m,medals:_,fresh:g}},best:function(f){return l.best[f]||null},MEDALS:h}})(),zm=(function(){var i=[],e=320,t=200;function n(){return i[i.length-1]||null}function r(S){return typeof S=="function"?S():S}function s(S){return r(S.items)||[]}function a(S){return S&&!(S.disabled&&S.disabled())}function o(S,L,U){for(var D=s(S),Y=D.length,G=0;G<Y;G++){var C=((L+G*U)%Y+Y)%Y;if(a(D[C]))return C}return 0}function c(S){return{screen:S,sel:o(S,S.sel||0,1),hover:-1}}function u(S){i=[c(S)]}function l(S){i.push(c(S)),SND.play("menu")}function h(S){i[i.length-1]=c(S)}function f(){i=[]}function p(){return i.length>0}function v(){if(i.length>1)return i.pop(),SND.play("menu"),!0;var S=n();return S&&S.screen.onBack?(S.screen.onBack(),!0):!1}function _(S){var L=n(),U=s(L.screen).length;U&&(L.sel=o(L.screen,L.sel+S,S),SND.play("menu"))}function g(S,L){a(S)&&(S.adjust?(S.adjust(L||1),SND.play("menu")):S.action&&(SND.play("menuPick"),S.action()))}function m(S){var L=n();if(!L)return!1;var U=s(L.screen),D=U[L.sel];switch(S){case"ArrowUp":case"KeyW":return _(-1),!0;case"ArrowDown":case"KeyS":case"Tab":return _(1),!0;case"ArrowLeft":case"KeyA":return D&&D.adjust&&g(D,-1),!0;case"ArrowRight":case"KeyD":return D&&D.adjust&&g(D,1),!0;case"Enter":case"NumpadEnter":case"Space":return g(D,1),!0;case"Escape":case"Backspace":return v()}return!1}function x(S){var L=S.scale||1;return{s:L,top:S.top||60,gap:S.gap||(L===1?12:14),x0:S.x0||56,x1:S.x1||264,rowH:5*L+5}}function E(S,L,U){for(var D=x(S),Y=s(S),G=0;G<Y.length;G++){var C=D.top+G*D.gap-3;if(U>=C&&U<C+D.rowH+1&&L>=D.x0-8&&L<=D.x1+8)return G}return-1}function M(S,L){var U=n();if(!U)return!1;var D=E(U.screen,S,L);return U.hover=D,D>=0&&a(s(U.screen)[D])&&D!==U.sel&&(U.sel=D,SND.play("menu")),D>=0&&a(s(U.screen)[D])}function w(S,L){var U=n();if(U){var D=E(U.screen,S,L);if(!(D<0)){var Y=s(U.screen)[D];if(a(Y)){U.sel=D;var G=x(U.screen),C=Y.adjust&&S<G.x1-44&&S>(G.x0+G.x1)/2?-1:1;g(Y,C)}}}}function A(S,L){for(var U=String(S).split(" "),D=[],Y="",G=0;G<U.length;G++){var C=Y?Y+" "+U[G]:U[G];C.length>L&&Y?(D.push(Y),Y=U[G]):Y=C}return Y&&D.push(Y),D}function P(S,L,U,D,Y){for(var G=D.slider[0],C=D.slider[1],N=D.slider[2](),I=C-G,q=4,V=1,J=I*(q+V)-V,re=L-J,Se=0;Se<I;Se++)S.fillStyle=Se<N-G?Y?"#ffd23e":"#e03828":"#2e2a24",S.fillRect(re+Se*(q+V),U,q,5);ART.drawText(S,String(N),re-6,U,{color:Y?"#ffd23e":"#8a8478",right:!0})}function y(S,L){var U=n();if(U){var D=U.screen,Y=x(D),G=s(D);D.drawBg&&D.drawBg(S,L),D.title&&ART.drawText(S,r(D.title),e/2,D.titleY||14,{scale:3,color:"#ff9a28",shadow:"#401008",center:!0}),D.drawExtra&&D.drawExtra(S,L);for(var C=0;C<G.length;C++){var N=G[C],I=Y.top+C*Y.gap,q=C===U.sel,V=a(N),J=r(N.label);q&&(S.fillStyle="rgba(255,110,24,0.16)",S.fillRect(Y.x0-8,I-3,Y.x1-Y.x0+16,Y.rowH),S.fillStyle="#ff7a18",S.fillRect(Y.x0-8,I-3,2,Y.rowH),L%.8<.55&&ART.drawText(S,">",Y.x0-4,I+(Y.s-1)*2,{color:"#ffd23e"}));var re=V?q?"#ffd23e":"#c8c0b0":"#4a463c",Se=N.value||N.slider;if(Se)if(ART.drawText(S,J,Y.x0+4,I,{scale:Y.s,color:re,shadow:V}),N.slider)P(S,Y.x1,I+(Y.s-1)*2,N,q);else{var Ue=r(N.value);q&&N.adjust&&(Ue="< "+Ue+" >"),ART.drawText(S,Ue,Y.x1,I,{scale:Y.s,color:q?"#ffd23e":"#e03828",right:!0})}else ART.drawText(S,J,D.alignLeft?Y.x0+4:e/2,I,{scale:Y.s,color:re,shadow:V,center:!D.alignLeft})}var ut=G[U.sel],et=ut&&a(ut)?r(ut.desc):null;if(et)for(var Je=A(et,70),de=D.descY||168,_e=0;_e<Je.length;_e++)ART.drawText(S,Je[_e],e/2,de+_e*8,{color:"#a8a090",center:!0});var De=D.footer===void 0?"ARROWS OR MOUSE: CHOOSE   ENTER: SELECT   ESC: BACK":r(D.footer);De&&ART.drawText(S,De,e/2,D.footerY||180,{color:"#5e584e",center:!0})}}return{open:u,push:l,replace:h,close:f,back:v,isOpen:p,key:m,pointer:M,click:w,render:y,wrap:A,current:function(){var S=n();return S?S.screen:null},selected:function(){var S=n();return S?s(S.screen)[S.sel]:null},depth:function(){return i.length}}})();typeof Nu!="undefined"&&(Nu.exports={SETTINGS:qm,MENU:zm})});var Ou=jo((tS,Du)=>{"use strict";var Gm=(function(){var i="firebird.riley.v1",e=3;function t(){return{shots:{fist:0,pistol:0,shotgun:0},hits:0,fireDistSum:0,fireDistN:0,strafeL:0,strafeR:0,stillT:0,seenT:0,hideT:0,longestHide:0,said:{}}}function n(I,q){q.los?(I.seenT+=q.dt,I.hideT=0,q.strafe<0?I.strafeL+=q.dt:q.strafe>0&&(I.strafeR+=q.dt),q.moving||(I.stillT+=q.dt)):(I.hideT+=q.dt,I.hideT>I.longestHide&&(I.longestHide=I.hideT))}function r(I,q,V){I.shots[q]=(I.shots[q]||0)+1,I.fireDistSum+=V,I.fireDistN++}function s(I){return I.shots.fist+I.shots.pistol+I.shots.shotgun}function a(I){var q=null,V=0;for(var J in I.shots)I.shots[J]>V&&(V=I.shots[J],q=J);return V>=5?q:null}function o(I){return I.fireDistN?I.fireDistSum/I.fireDistN:0}function c(I){return I.fireDistN<5?0:p((5-o(I))/3)}function u(I){return I.fireDistN<5?0:p((o(I)-6)/4)}function l(I){return I.seenT<4?0:p((I.stillT/I.seenT-.35)/.4)}function h(I){return I.strafeR>=I.strafeL?1:-1}function f(I){var q=I.strafeL+I.strafeR;return q<3?0:p((Math.max(I.strafeL,I.strafeR)/q-.55)/.3)}function p(I){return I<0?0:I>1?1:I}var v=.45,_=7,g=10,m=1.8,x=1.5;function E(I){if((I.sinceRest||0)>=g)return["rest"];var q=[];I.los?(I.cool.volley<=0&&q.push("volley"),I.cool.lead<=0&&q.push("lead"),I.dist<6&&q.push("backoff"),I.dist>3&&q.push("close"),q.push("flank")):q.push("seek");var V=I.cool.summon<=(I.phase>=3?9:0);return I.phase>=2&&I.impsAlive<2&&V&&q.push("summon"),I.phase>=2&&I.los&&I.dist<7&&I.cool.shield<=0&&q.push("shield"),(I.sinceRest||0)>=_&&q.push("rest"),q}function M(I,q,V){var J=0,re=null;switch(I){case"volley":J=1+(V.phase>=3?.4:0);break;case"lead":J=.35+f(q)*1.6,f(q)>.4&&(re="strafe");break;case"backoff":J=.2+c(q)*1.6+(V.playerWeapon==="shotgun"&&V.dist<4?.8:0),c(q)>.4&&(re="rusher");break;case"close":J=.3+u(q)*1.3+l(q)*1.2,l(q)>.4?re="camper":u(q)>.4&&(re="sniper");break;case"flank":J=.45+(V.phase>=2?.35:0)+f(q)*.4;break;case"seek":J=1,q.hideT>3&&(re="hider");break;case"summon":J=.9;break;case"rest":J=.3+((V.sinceRest||0)-_)*.25;break;case"shield":J=V.playerWeapon==="shotgun"?1.4:.25,V.playerWeapon==="shotgun"&&q.shots.shotgun>=6&&(re="shotgun");break}return V.phase>=3&&((I==="volley"||I==="lead"||I==="close"||I==="summon")&&(J+=.6),(I==="backoff"||I==="shield")&&(J*=.4)),{move:I,score:J,why:re}}function w(I,q,V,J){if(J=J||Math.random,!I.length)return null;var re=I.map(function(et){return M(et,q,V)}),Se=0;re.forEach(function(et){et.w=et.score*et.score,Se+=et.w});for(var Ue=J()*Se,ut=0;ut<re.length;ut++)if(Ue-=re[ut].w,Ue<=0)return re[ut];return re[re.length-1]}var A={weapon:{fist:"EMBER FIST",pistol:"SPARK CASTER",shotgun:"BELL BLASTER"},shotgunShots:"BELL BLASTS",minions:"HOLLOWS"};function P(I){if(I){if(I.weapon)for(var q in I.weapon)A.weapon[q]=I.weapon[q];I.shotgunShots&&(A.shotgunShots=I.shotgunShots),I.minions&&(A.minions=I.minions)}}function y(){return JSON.parse(JSON.stringify(A))}function S(I,q){if(!q||I.said[q])return null;var V=null;switch(q){case"strafe":V="YOU ALWAYS DODGE "+(h(I)<0?"LEFT":"RIGHT")+". I'M AIMING THERE NOW.";break;case"rusher":V="YOU LIKE IT UP CLOSE. I'LL KEEP MY DISTANCE.";break;case"sniper":V="YOU KEEP YOUR DISTANCE. SO I'M COMING TO YOU.";break;case"camper":V="YOU STAND STILL A LOT. THAT MAKES YOU EASY TO FIND.";break;case"hider":V="HIDING? I CAN FIND YOU. I KNOW THIS ARENA.";break;case"shotgun":V=I.shots.shotgun+" "+A.shotgunShots+" SO FAR. SHIELD UP!";break}return V&&(I.said[q]=!0),V}function L(I,q,V){switch(V=V||{},I){case"intro":return V.memory&&V.memory.lastStyle?"BACK AGAIN! LAST TIME "+V.memory.lastStyle+".":V.memory?"BACK AGAIN! ROUND "+(V.memory.fights+1)+". LET'S GO!":"HI! I'M RILEY. I'M AN AI, AND I LEARN HOW YOU PLAY. READY?";case"ease":return"I'M GOING A LITTLE EASIER THIS TIME. JUST A LITTLE.";case"mercy":return"WANT ANOTHER WAY IN? I'M GOING EASIER"+(V.lower?". OR TRY "+V.lower+" IN THE MENU.":".");case"rest":return"PHEW. GIVE ME A SECOND.";case"studied":return"YOU BEAT ME "+V.wins+(V.wins===1?" TIME":" TIMES")+". I'VE BEEN PRACTISING.";case"phase2":return"OKAY. I'VE BEEN WATCHING YOU. MY TURN.";case"phase3":return"ALRIGHT, NO MORE HOLDING BACK!";case"summon":return"LET'S SEE HOW YOU HANDLE THESE!";case"friendlyFire":return"HEY! WATCH WHERE YOU THROW THOSE.";case"impsTurned":return"YOU GOT MY "+A.minions+" FIGHTING ME? SMART.";case"noticed":{var J=D(q);return J?J+". I NOTICED.":null}case"playerDied":{var re=U(q);return"GOOD FIGHT! YOU HIT ME "+q.hits+(q.hits===1?" TIME":" TIMES")+(re!==null?", "+re+"% ACCURACY":"")+". AGAIN?"}case"defeated":{var Se=a(q);return"OKAY, YOU WIN! "+q.hits+" HITS"+(Se?" WITH MOSTLY THE "+A.weapon[Se]:"")+". NICE."}}return null}function U(I){var q=s(I);return q<5?null:Math.min(100,Math.round(I.hits/q*100))}function D(I){var q=a(I);return c(I)>.5&&q?"YOU RUSHED ME WITH THE "+A.weapon[q]:u(I)>.5?"YOU FOUGHT ME FROM FAR AWAY":I.longestHide>6?"YOU HID FOR "+Math.round(I.longestHide)+" SECONDS":f(I)>.5?"YOU KEPT DODGING "+(h(I)<0?"LEFT":"RIGHT"):q?"YOU USED THE "+A.weapon[q]+" THE MOST":null}function Y(I){var q={fights:0,wins:0,lossStreak:0,ease:0,lastStyle:null};try{var V=I&&I.getItem(i);if(V){var J=JSON.parse(V);for(var re in q)J[re]!==void 0&&(q[re]=J[re])}}catch{}return q.ease=Math.max(0,Math.min(e,q.ease|0)),q}function G(I,q){try{I&&I.setItem(i,JSON.stringify(q))}catch{}}function C(I,q,V){return I.fights++,I.lastStyle=D(q),V?(I.wins++,I.lossStreak=0,I.ease=0):(I.lossStreak++,I.ease=Math.min(e,I.lossStreak)),I}function N(I){var q=I.ease,V=I.wins>0&&q===0;return{hpScale:1-.08*q,dmgScale:1-.1*q,coolScale:(1+.12*q)*(V?.9:1),practised:V}}return{MAX_EASE:e,TELL_MIN:v,REST_OPEN:_,REST_DUE:g,REST_TIME:m,REST_HURT:x,newProfile:t,observe:n,noteShot:r,favWeapon:a,rusher:c,sniper:u,camper:l,strafeSide:h,strafeHabit:f,accuracy:U,legalMoves:E,scoreMove:M,choose:w,insight:S,line:L,describeStyle:D,recall:Y,save:G,settle:C,tuning:N,setWords:P,words:y}})();typeof Du!="undefined"&&(Du.exports=Gm)});var Be=Ta(ld(),1),Sn=Ta(cd(),1);window.ART=Be.default;window.SND=Sn.default;var ed=Ta(ud(),1);var qt=Ta(Ou(),1);var Vm={"#":1,"%":2,M:3,T:4,H:5,D:6,R:7,U:8,X:9,S:11,"=":12},Si={6:!0,7:!0,8:!0,11:!0},hd=.25,Wm=2,Cn=.3,Uu=.55;function fd(i){return i>="0"&&i<="9"?(i.charCodeAt(0)-48)*hd:i>="a"&&i<="z"?(i.charCodeAt(0)-87)*hd:0}function dd(i){for(var e=i.map,t=e[0].length,n=e.length,r={mw:t,mh:n,cells:new Uint8Array(t*n),floor:new Float32Array(t*n),ceil:new Float32Array(t*n),doors:{},lifts:[],lava:new Uint8Array(t*n),movers:[]},s=i.ceilHeight||Wm,a=0;a<n;a++)for(var o=0;o<t;o++){var c=e[a][o],u=a*t+o,l=Vm[c]||0;r.cells[u]=l,r.floor[u]=i.heights?fd(i.heights[a][o]):0,r.ceil[u]=i.ceilings&&i.ceilings[a][o]!=="."?fd(i.ceilings[a][o]):s,r.ceil[u]<r.floor[u]+1&&(r.ceil[u]=r.floor[u]+1),Si[l]&&(r.doors[o+","+a]={x:o,z:a,open:0,state:"closed",timer:0,locked:l===7?"red":l===8?"blue":null,secret:l===11,found:!1,used:!1}),c==="~"&&(r.lava[u]=1),c==="L"&&r.lifts.push({x:o,z:a,top:r.floor[u],bottom:0,pos:0,state:"down",wait:0})}for(var h in r.doors){var f=r.doors[h],p=1/0,v=0;Ea(r,f.x,f.z).forEach(function(g){r.cells[g.i]===0&&(p=Math.min(p,r.floor[g.i]),v=Math.max(v,r.ceil[g.i]))});var _=f.z*t+f.x;r.floor[_]=p===1/0?0:p,r.ceil[_]=f.secret?v||s:Math.min(v||s,r.floor[_]+1.5)}return r.lifts.forEach(function(g){var m=1/0;Ea(r,g.x,g.z).forEach(function(E){var M=r.cells[E.i]===0||Si[r.cells[E.i]];M&&!Xm(r,E.x,E.z)&&(m=Math.min(m,r.floor[E.i]))}),g.bottom=m===1/0?0:Math.min(m,g.top),g.pos=g.bottom;var x=g.z*t+g.x;r.floor[x]=g.pos,r.ceil[x]=Math.max(r.ceil[x],g.top+1.2)}),r}function Xm(i,e,t){for(var n=0;n<i.lifts.length;n++)if(i.lifts[n].x===e&&i.lifts[n].z===t)return!0;return!1}function Ea(i,e,t){var n=[];return[[1,0],[-1,0],[0,1],[0,-1]].forEach(function(r){var s=e+r[0],a=t+r[1];s>=0&&a>=0&&s<i.mw&&a<i.mh&&n.push({x:s,z:a,i:a*i.mw+s})}),n}function Kn(i,e,t){return e<0||t<0||e>=i.mw||t>=i.mh?1:i.cells[t*i.mw+e]}function Qi(i,e,t){return i.doors[e+","+t]||null}function Mr(i,e,t){var n=Kn(i,e,t);if(n===0)return!1;if(Si[n]){var r=Qi(i,e,t);return!r||r.open<.9}return!0}function sn(i,e,t){return i.floor[t*i.mw+e]}function Bi(i,e,t){return i.ceil[t*i.mw+e]}function Wr(i,e,t,n,r,s,a){for(var o=Math.floor(e-n),c=Math.floor(e+n),u=Math.floor(t-n),l=Math.floor(t+n),h=-1/0,f=1/0,p=u;p<=l;p++)for(var v=o;v<=c;v++){if(Mr(i,v,p))return{blocked:!0};var _=sn(i,v,p),g=Bi(i,v,p);if(_>r+a+1e-4)return{blocked:!0};h=Math.max(h,_),f=Math.min(f,g)}return f<Math.max(r,h)+s-1e-4?{blocked:!0}:{blocked:!1,ground:h,ceil:f}}function Xr(i,e,t,n,r,s,a){var o=!0;return t!==0&&(Wr(i,e.x+t,e.z,r,e.y,s,a).blocked?o=!1:e.x+=t),n!==0&&(Wr(i,e.x,e.z+n,r,e.y,s,a).blocked?o=!1:e.z+=n),o}function $o(i,e,t,n){for(var r=Math.floor(e-n),s=Math.floor(e+n),a=Math.floor(t-n),o=Math.floor(t+n),c=-1/0,u=a;u<=o;u++)for(var l=r;l<=s;l++)Mr(i,l,u)||(c=Math.max(c,sn(i,l,u)));return c===-1/0?0:c}function Qo(i,e,t,n,r,s,a,o){for(var c=Math.sqrt(r*r+a*a),u=Math.floor(e),l=Math.floor(n),h=c>1e-9?Math.abs(1/r):1e30,f=c>1e-9?Math.abs(1/a):1e30,p=r<0?-1:1,v=a<0?-1:1,_=r<0?(e-u)*h:(u+1-e)*h,g=a<0?(n-l)*f:(l+1-n)*f,m=0,x=0;x<256;x++){var E=Math.min(_,g,o),M=sn(i,u,l),w=Bi(i,u,l);if(s<0){var A=(M-t)/s;if(A>=m-1e-6&&A<=E)return S(A,"floor")}else if(s>0){var P=(w-t)/s;if(P>=m-1e-6&&P<=E)return S(P,"ceil")}if(E>=o)return S(o,"none");if(m=E,_<g?(_+=h,u+=p):(g+=f,l+=v),u<0||l<0||u>=i.mw||l>=i.mh)return S(m,"wall");var y=t+s*m;if(Mr(i,u,l)||y<sn(i,u,l)||y>Bi(i,u,l))return S(m,"wall")}return S(o,"none");function S(L,U){return{dist:L,x:e+r*L,y:t+s*L,z:n+a*L,kind:U,cx:u,cz:l}}}function Sr(i,e,t,n,r,s,a){var o=r-e,c=s-t,u=a-n,l=Math.sqrt(o*o+c*c+u*u);return l<.001?!0:Qo(i,e,t,n,o/l,c/l,u/l,l).dist>=l-.05}var Ss=null;function Fu(i,e,t,n,r,s){var a=i.mw,o=a*i.mh;(!Ss||Ss.length<o)&&(Ss=new Int32Array(o)),s.fill(-1);var c=Math.floor(e),u=Math.floor(t);if(!(c<0||u<0||c>=a||u>=i.mh)){var l=0,h=0;for(s[u*a+c]=0,Ss[h++]=u*a+c;l<h;){var f=Ss[l++],p=s[f];if(!(p>=n))for(var v=f%a,_=f/a|0,g=0;g<4;g++){var m=v+(g===0?1:g===1?-1:0),x=_+(g===2?1:g===3?-1:0);if(!(m<0||x<0||m>=a||x>=i.mh)){var E=x*a+m;s[E]!==-1||!r(f,m,x)||(s[E]=p+1,Ss[h++]=E)}}}}}function pd(i,e,t,n){var r={cells:e,from:i.floor[e[0]],to:t,pos:i.floor[e[0]],speed:n||.8,moved:0,done:!1};return i.movers.push(r),r}function md(i,e){i.movers.forEach(function(t){var n=t.pos;if(!t.done){var r=t.to>t.pos?1:-1;t.pos+=r*t.speed*e,(r>0&&t.pos>=t.to||r<0&&t.pos<=t.to)&&(t.pos=t.to,t.done=!0),t.cells.forEach(function(s){i.floor[s]=t.pos,i.ceil[s]<t.pos+1&&(i.ceil[s]=t.pos+1)})}t.moved=t.pos-n})}function gd(i,e,t,n){for(var r=0;r<i.lifts.length;r++){var s=i.lifts[r],a=t(s.x,s.z),o=s.pos,c=a&&!s.wasBusy;s.wasBusy=a,a||(s.stayDown=!1),s.state==="down"&&a&&!s.stayDown?(s.state="wait",s.wait=.5):s.state==="wait"?(s.wait-=e,s.wait<=0&&(s.state="up",n&&n(s,"start"))):s.state==="up"?(s.pos=Math.min(s.top,s.pos+e*.9),s.pos>=s.top&&(s.state="top",s.wait=2.5,s.ridden=!1,n&&n(s,"stop"))):s.state==="top"?c&&s.ridden?(s.state="lower",s.ridingDown=!0,n&&n(s,"start")):a?s.wait=2.5:(s.ridden=!0,(s.wait-=e)<=0&&(s.state="lower",s.ridingDown=!1,n&&n(s,"start"))):s.state==="lower"&&(a&&!s.ridingDown&&s.pos>s.bottom+.05?s.state="up":(s.pos=Math.max(s.bottom,s.pos-e*.9),s.pos<=s.bottom&&(s.state="down",s.stayDown=s.ridingDown&&a,s.ridingDown=!1,n&&n(s,"stop")))),i.floor[s.z*i.mw+s.x]=s.pos,s.moved=s.pos-o}}qt.default.setWords({weapon:{fist:"EMBER FIST",pistol:"SPARK CASTER",shotgun:"BELL BLASTER"},shotgunShots:"BELL BLASTS",minions:"HOLLOWS"});var dn={r:.28,h:.9,hCrouch:.55,eye:.8,eyeCrouch:.45,walk:3.2,run:5,jumpV:3.9,gravity:14},wa={fist:{ammo:null,rate:.5,melee:!0,dmgMin:8,dmgMax:24,knock:.12},pistol:{ammo:"bullets",rate:.42,pellets:1,spread:.025,dmgMin:5,dmgMax:15,knock:.03,shake:.6},shotgun:{ammo:"shells",rate:.95,pellets:7,spread:.1,dmgMin:5,dmgMax:15,knock:.045,shake:2.2}},er=["fist","pistol","shotgun"],vd={bullets:"SPARKS",shells:"BELL CHARGES"},xd={fist:"EMBER FIST",pistol:"SPARK CASTER",shotgun:"BELL BLASTER"},bs={imp:{hp:40,speed:1.7,radius:.35,painChance:.75,ranged:!0,melee:!1,h:.85,attackDmg:[8,20]},gnasher:{hp:110,speed:2.9,radius:.42,painChance:.5,ranged:!1,melee:!0,h:.7,attackDmg:[4,16],fleeBelow:.4},knight:{hp:600,speed:1.9,radius:.48,painChance:.2,ranged:!0,melee:!0,h:1.3,attackDmg:[10,26]},riley:{hp:900,speed:2.4,radius:.4,painChance:.12,ranged:!0,melee:!0,h:.95,attackDmg:[10,20],boss:!0}},_d={i:"imp",g:"gnasher",K:"knight",Y:"riley"},yd={h:{msg:"PICKED UP A LIFE SHARD.",snd:"health"},"+":{msg:"PICKED UP A HEALING CRYSTAL.",snd:"health"},b:{msg:"PICKED UP A SPARK CELL.",snd:"pickup"},a:{msg:"PICKED UP BELL CHARGES.",snd:"pickup"},A:{msg:"PICKED UP A BRASS WARD!",snd:"pickup"},2:{msg:"YOU GOT THE BELL BLASTER!",snd:"weaponUp"},r:{msg:"PICKED UP THE RED KEYSTONE.",snd:"keyPickup"},u:{msg:"PICKED UP THE BLUE KEYSTONE.",snd:"keyPickup"},P:{msg:"PHOENIX ORB! YOU FEEL REBORN!",snd:"orb"}},tr=[{name:"ROOKIE",dmg:.5,ammo:2,desc:"HOLLOWS HIT HALF AS HARD AND AMMO IS DOUBLED. GREAT FOR A FIRST RUN."},{name:"WARRIOR",dmg:1,ammo:1,desc:"THE FIGHT AS IT WAS MEANT TO BE."},{name:"BLAZE",dmg:1.5,ammo:1,desc:"HOLLOWS HIT HARDER. FOR VETERANS WHO KNOW EVERY CORNER."}],Md={run:"TIP: HOLD SHIFT TO RUN.",jump:"TIP: SPACE JUMPS. C CROUCHES. LOOK UP AND DOWN WITH THE MOUSE.",map:"TIP: LOST? PRESS TAB FOR THE MAP.",weapons:"TIP: PRESS 1 2 3, OR SCROLL THE MOUSE WHEEL, TO SWITCH WEAPONS. Q SWAPS BACK.",key:"TIP: THE MATCHING DOOR IS MARKED IN COLOR ON YOUR MAP (TAB).",lowAmmo:"TIP: LOW ON AMMO? YOUR EMBER FIST (1) NEVER RUNS OUT, AND IT IS SILENT.",lowHealth:"TIP: LOW HEALTH! BACK OFF AND LOOK FOR LIFE SHARDS AND HEALING CRYSTALS.",hurtDir:"TIP: THE RED MARKS AROUND YOUR AIM POINT AT WHATEVER HIT YOU.",secret:"TIP: CRACKED WALLS HIDE PIECES OF THE TRUE MAP. PRESS E ON THEM.",torches:"TIP: A PAIR OF TORCHES BESIDE A DOOR MEANS IT MATTERS. FOLLOW THEM.",lift:"TIP: STAND ON A GLOWING PLATFORM TO RIDE IT UP.",barrel:"TIP: A HOLLOW IS NEXT TO A MERCURY CASK. SHOOT THE CASK!",lava:"TIP: RED MERCURY BURNS! GET OUT, OR FIND A WAY TO DRAIN IT.",meet_imp:"TIP: HOLLOWS THROW MERCURY EMBERS. STRAFE WITH A AND D TO DODGE.",meet_gnasher:"TIP: HOLLOW HOUNDS CHARGE AND BITE. BACK AWAY WHILE YOU SHOOT.",meet_knight:"TIP: THE RESET WARDEN IS TOUGH. KEEP YOUR DISTANCE AND RING THE BELL BLASTER."};function Bu(i){i=i||{};var e=i.levels,t=i.rng||Math.random,n=i.storage||null,r=i.settings||{difficulty:1,tips:!1,seenTips:{}},s=i.onProgress||function(){},a={},o=!1,c="title",u=0,l=null,h=null,f={};function p(){return t()}function v(d,b){return d+t()*(b-d)}function _(d,b,H){return d<b?b:d>H?H:d}function g(d,b,H,oe){var $=d-H,se=b-oe;return $*$+se*se}function m(){return tr[r.difficulty]||tr[1]}function x(d,b,H,oe,$,se){var Me={t:d,name:b,x:H,y:oe,z:$};if(se)for(var be in se)Me[be]=se[be];l.events.push(Me)}function E(d,b){b?x("sound",d,b.x,(b.y||0)+.5,b.z):x("sound",d,l.p.x,l.p.y+.8,l.p.z,{local:!0})}function M(d,b,H,oe){var $=bs[d];return{kind:d,mob:!0,x:b,z:H,y:oe,hp:$.hp,radius:$.radius,speed:$.speed,h:$.h,state:"idle",st:0,animT:p(),cool:v(.5,1.5),moveAng:0,retarget:0,losT:p()*.3,los:!1,target:null,lostT:0,fleeNext:!1,strafeSide:p()<.5?1:-1,flashT:0}}function w(d){var b=d.map.join("");return{boss:b.indexOf("Y")>=0,levers:d.levers||[],keys:{red:b.indexOf("R")>=0||b.indexOf("r")>=0,blue:b.indexOf("U")>=0||b.indexOf("u")>=0}}}function A(d){return{hp:Math.max(d.hp,1),armor:d.armor,ammo:{bullets:d.ammo.bullets,shells:d.ammo.shells},shotgun:d.weapons.shotgun,weapon:d.weapon}}function P(d,b,H){u=d;var oe=e[d],$=dd(oe),se=oe.map;le=oe;var Me=H||(b&&l?A(l.p):null),be={x:0,z:0,y:0,ang:oe.playerAngle||0,pitch:0,vx:0,vz:0,vy:0,onGround:!0,crouch:!1,eyeH:dn.eye,hp:Me?Me.hp:100,armor:Me?Me.armor:0,ammo:Me?{bullets:Me.ammo.bullets,shells:Me.ammo.shells}:{bullets:50,shells:0},weapons:{fist:!0,pistol:!0,shotgun:Me?Me.shotgun:!1},keys:{red:!1,blue:!1},weapon:Me&&Me.shotgun?Me.weapon:"pistol",nextWeapon:null,prevWeapon:null,raiseT:.3,lowerT:0,cool:0,fireT:1,dead:!1,deadT:0,painT:0,grinT:0,dmgFlash:0,bonusFlash:0,jumpHeld:!1,landT:0};I(be,be.weapon)||(be.weapon=q(be));for(var Le=[],Ze=[],ke=null,ct=0;ct<se.length;ct++)for(var mt=0;mt<se[0].length;mt++){var _t=se[ct][mt],rn=mt+.5,kt=ct+.5,Pt=sn($,mt,ct);if(_t==="p")be.x=rn,be.z=kt,be.y=Pt;else if(_d[_t]){var R=M(_d[_t],rn,kt,Pt);R.kind==="riley"&&ie(R),Le.push(R)}else _t==="o"?Le.push({kind:"barrel",mob:!0,barrel:!0,x:rn,z:kt,y:Pt,hp:15,radius:.3,h:.55,state:"idle",st:0}):_t==="t"?Le.push({kind:"torch",x:rn,z:kt,y:Pt,h:.95,animT:p()}):yd[_t]?Le.push({kind:"pickup",item:_t,x:rn,z:kt,y:Pt,h:.3,bob:p()*6}):_t==="*"&&Ze.push({x:mt,z:ct,found:!1});_t==="X"&&(ke={x:mt,z:ct})}var Z=0,ce=0;return Le.forEach(function(ee){ee.mob&&!ee.barrel&&Z++,ee.kind==="pickup"&&ce++}),l={L:oe,W:$,mw:$.mw,mh:$.mh,doors:$.doors,ents:Le,p:be,secrets:Ze,seen:new Uint8Array($.mw*$.mh),msgs:[],events:[],time:0,notice:null,stats:{kills:0,totalKills:Z,items:0,totalItems:ce,secrets:0,totalSecrets:Ze.length},exitT:-1,flow:new Int16Array($.mw*$.mh),flowT:0,infightSeen:!1,boss:null,shotId:0,firing:!1,input:{strafe:0,moving:!1,vx:0,vz:0},startGear:Me,info:w(oe),exitCell:ke,hurtDirs:[],hitT:0,killT:0,blockT:0,shake:0,hitstop:0,killer:null,tipQueue:[],tipT:3,usedMap:!1,ranT:0,jumped:!1,spotT:0,started:!0,fired:{},waves:{},lightsOff:{},lavaT:0,timers:[]},Le.forEach(function(ee){ee.kind==="riley"&&(l.boss=ee)}),c="game",Re("start"),L(G(),"#f0d848",3.5),l}function y(){var d=l.startGear;d&&(d={hp:Math.max(d.hp,100),armor:d.armor,ammo:{bullets:Math.max(d.ammo.bullets,50),shells:d.shotgun?Math.max(d.ammo.shells,8):d.ammo.shells},shotgun:d.shotgun,weapon:d.weapon}),P(u,!1,d)}function S(d,b,H){l.msgs.push({text:d,t:H||3,color:b}),l.msgs.length>4&&l.msgs.shift()}function L(d,b,H){l.notice={text:d,color:b||"#f0d848",t:H||2.5,max:H||2.5}}function U(d){l&&(l.shake=Math.min(6,Math.max(l.shake,d)))}function D(d){!l||!r.tips||r.seenTips&&r.seenTips[d]||l.tipQueue.indexOf(d)<0&&l.tipQueue.push(d)}function Y(d){if(l.tipT-=d,!(l.tipT>0||!l.tipQueue.length)){var b=l.tipQueue.shift();r.seenTips[b]||(r.seenTips[b]=!0,i.saveSettings&&i.saveSettings(),S(Md[b],"#8fe0a0",6),l.tipT=7)}}function G(){if(!l)return"";var d=l.info,b=l.p;if(d.keys.blue&&!b.keys.blue)return"FIND THE BLUE KEYSTONE";if(d.keys.red&&!b.keys.red)return"FIND THE RED KEYSTONE";var H=N();return H.length?(l.L.leverGoal||"PULL THE LEVERS")+" ("+(d.levers.length-H.length)+"/"+d.levers.length+")":C()?l.L.stage.goal:d.boss?"DEFEAT RILEY":"RELIGHT THE WAYSTONE"}function C(){var d=l.L.stage;return!!d&&l.waves[d.wave]!==!1}function N(){return l.info.levers.filter(function(d){return l.W.cells[d[1]*l.mw+d[0]]===12})}function I(d,b){var H=wa[b];return!H.ammo||d.ammo[H.ammo]>0}function q(d){for(var b=er.length-1;b>=0;b--){var H=er[b];if(d.weapons[H]&&I(d,H))return H}return"fist"}function V(d,b){if(c!=="game"||!l||l.p.dead)return!1;var H=l.p;return H.weapons[d]?I(H,d)?d===H.weapon?(H.nextWeapon&&!(H.lowerT>0)&&(H.nextWeapon=null),!1):d===H.nextWeapon?!1:(H.prevWeapon=H.weapon,H.nextWeapon=d,H.autoFist=!1,!0):(b||(S("NO "+vd[wa[d].ammo]+" FOR THE "+xd[d]+"."),E("noAmmo")),!1):(b||S("YOU HAVEN'T FOUND THE "+xd[d]+" YET."),!1)}function J(d){for(var b=l.p,H=er.indexOf(b.nextWeapon||b.weapon),oe=1;oe<er.length;oe++){var $=er[(H+d*oe+er.length*2)%er.length];if(b.weapons[$]&&I(b,$)){V($,!0);return}}}function re(){var d=l.p;d.prevWeapon&&d.prevWeapon!==d.weapon&&d.weapons[d.prevWeapon]&&I(d,d.prevWeapon)?V(d.prevWeapon,!0):J(-1)}function Se(){return l.p.y+l.p.eyeH}function Ue(d,b){return Math.sqrt(g(d,b,l.p.x,l.p.z))}function ut(d,b,H,oe,$,se){for(var Me=l.p,be=Math.cos(b),Le=Math.cos(d)*be,Ze=Math.sin(d)*be,ke=Math.sin(b),ct=Me.x,mt=Se(),_t=Me.z,rn=$?1.4:40,kt=Qo(l.W,ct,mt,_t,Le,ke,Ze,rn),Pt=null,R=kt.dist+.05,Z=0;Z<l.ents.length;Z++){var ce=l.ents[Z];if(!(!ce.mob||ce.state==="die"||ce.state==="dead"||ce.gone)){var ee=et(ct,mt,_t,Le,ke,Ze,ce);ee!==null&&ee>.1&&ee<R&&(Pt=ce,R=ee)}}var ae=H+p()*(oe-H)|0;if(Pt){if(de(Pt,ae),!Pt.barrel){Pt.kind==="riley"&&Pt.shieldT>0?l.blockT=.2:Pt.state==="die"?(l.killT=.3,l.hitstop=Math.max(l.hitstop,.045)):l.hitT=Math.max(l.hitT,.14);var Fe=bs[Pt.kind];if(se&&!Fe.boss){var Ge=se*(Fe.hp>200?.25:1);Xr(l.W,Pt,Math.cos(d)*Ge,Math.sin(d)*Ge,Pt.radius,Pt.h,Cn)}}var Ne=ct+Le*R,Ye=mt+ke*R,je=_t+Ze*R;x("fx",Pt.barrel||Pt.kind==="riley"?"spark":"blood",Ne,Ye,je,{dx:-Le,dy:-ke,dz:-Ze,kill:Pt.state==="die",floorY:Pt.y}),$||x("fx","tracer",ct,mt,_t,{x2:Ne,y2:Ye,z2:je}),!Pt.barrel&&Pt.kind!=="riley"&&E(Pt.state==="die"?"killConfirm":"hitFlesh")}else!$&&kt.kind!=="none"?(x("fx","puff",kt.x-Le*.03,kt.y-ke*.03,kt.z-Ze*.03,{surface:kt.kind,dx:Le,dy:ke,dz:Ze,cell:Kn(l.W,kt.cx,kt.cz)}),x("fx","tracer",ct,mt,_t,{x2:kt.x,y2:kt.y,z2:kt.z}),p()<.35&&E("ricochet",{x:kt.x,y:kt.y,z:kt.z})):$&&E("whiff");return Pt}function et(d,b,H,oe,$,se,Me){var be=Me.radius+.06,Le=d-Me.x,Ze=H-Me.z,ke=oe*oe+se*se,ct=2*(Le*oe+Ze*se),mt=Le*Le+Ze*Ze-be*be;if(ke<1e-9)return null;var _t=ct*ct-4*ke*mt;if(_t<0)return null;var rn=Math.sqrt(_t),kt=(-ct-rn)/(2*ke),Pt=(-ct+rn)/(2*ke),R=kt>0?kt:Pt;if(R<0)return null;var Z=b+$*R;if(Z>=Me.y&&Z<=Me.y+Me.h)return R;if(Math.abs($)>1e-6){var ce=(($<0?Me.y+Me.h:Me.y)-b)/$;if(ce>0){var ee=d+oe*ce-Me.x,ae=H+se*ce-Me.z;if(ee*ee+ae*ae<=be*be)return ce}}return null}function Je(d){return!!d&&!d.gone&&d.state!=="die"&&d.state!=="dead"}function de(d,b,H){if(!(d.state==="die"||d.state==="dead")&&!(d.kind==="riley"&&Pe(d,H))){if(d.resting&&(b*=qt.default.REST_HURT),d.hp-=b,d.flashT=.07,d.barrel){d.blame=Je(H)?H:null,d.hp<=0&&d.state!=="boom"&&(d.state="boom",d.st=.08);return}var oe=bs[d.kind];ye(d),oe.boss||(H&&H!==d&&Je(H)&&!H.barrel?(d.target!==H&&!l.infightSeen&&Ue(d.x,d.z)<14&&(l.infightSeen=!0,S("THE HOLLOWS TURN ON EACH OTHER!")),d.target=H,d.lostT=0):H||(d.target=null)),d.hp<=0?(d.state="die",d.st=0,l.stats.kills++,oe.boss||E("enemyDie",d),x("fx","gib",d.x,d.y+d.h*.6,d.z,{kind:d.kind})):p()<oe.painChance&&!(oe.boss&&d.state==="windup")&&(d.state="pain",d.st=oe.boss?.25:.35,oe.fleeBelow&&d.hp<oe.hp*oe.fleeBelow&&(d.fleeNext=!0),E("enemyPain",d)),d.kind==="riley"&&$e(d)}}function _e(d){d.state="dead",d.dead=!0,d.gone=!0,E("barrelBoom",d),x("fx","explosion",d.x,d.y+.3,d.z);for(var b=2.3,H=Je(d.blame)?d.blame:null,oe=0;oe<l.ents.length;oe++){var $=l.ents[oe];if(!(!$.mob||$===d||$.state==="dead"||$.state==="die")){var se=Math.sqrt(g($.x,$.z,d.x,d.z)+Math.pow($.y-d.y,2));se<b&&Sr(l.W,d.x,d.y+.3,d.z,$.x,$.y+$.h/2,$.z)&&($.barrel?$.state!=="boom"&&($.state="boom",$.st=v(.1,.25),$.blame=H):de($,(b-se)/b*90|0,H))}}X(d.x,d.z,10);var Me=Math.sqrt(g(l.p.x,l.p.z,d.x,d.z)+Math.pow(l.p.y-d.y,2));U(6/(1+Me*.35)),Me<b&&Sr(l.W,d.x,d.y+.3,d.z,l.p.x,Se(),l.p.z)&&De((b-Me)/b*70|0,d)}function De(d,b){var H=l.p;if(!(H.dead||d<=0||l.exitT>=0)){if(d=Math.max(1,Math.round(d*m().dmg)),b){var oe=Math.atan2(b.z-H.z,b.x-H.x);l.hurtDirs.push({ang:oe,t:1}),l.hurtDirs.length>6&&l.hurtDirs.shift();var $=Math.atan2(Math.sin(oe-H.ang),Math.cos(oe-H.ang));Math.abs($)>.9&&D("hurtDir"),l.killer=b.kind}var se=Math.min(H.armor,Math.ceil(d/3));H.armor-=se,d-=se,H.hp-=d,H.dmgFlash=Math.min(.65,H.dmgFlash+d/55),U(Math.min(4,1+d/8)),H.painT=.6,H.hp<=0?(H.hp=0,H.dead=!0,H.deadT=0,E("playerDie"),k(l.boss)&&(B(l.boss,qt.default.line("playerDied",l.boss.profile)),B(l.boss,qt.default.line("noticed",l.boss.profile)),z(l.boss,!1))):(E("playerPain"),H.hp<30&&D("lowHealth"))}}function We(d,b,H,oe,$,se,Me){var be=d.y+d.h*.65,Le=H-d.x,Ze=oe-be,ke=$-d.z,ct=Math.sqrt(Le*Le+Ze*Ze+ke*ke)||1,mt=se||(b?5.5:7);l.ents.push({kind:"proj",x:d.x+Le/ct*.5,y:be+Ze/ct*.5,z:d.z+ke/ct*.5,vx:Le/ct*mt,vy:Ze/ct*mt,vz:ke/ct*mt,h:.2,green:!!b,animT:0,owner:d,dmg:Me||(b?v(10,28):v(7,20))}),E(d.kind==="riley"?"rileyShoot":"impShoot",d)}function ze(d,b,H){return!Mr(l.W,b,H)}function ht(d,b,H){var oe=l.W,$=Kn(oe,b,H);if($!==0){if(!Si[$])return!1;var se=Qi(oe,b,H);if(!(se.open>=.9||!se.locked&&!se.secret))return!1}return oe.floor[H*oe.mw+b]-oe.floor[d]<=Cn+1e-4}function X(d,b,H){var oe=new Int16Array(l.mw*l.mh);Fu(l.W,d,b,H,ze,oe);for(var $=0;$<l.ents.length;$++){var se=l.ents[$];!se.mob||se.barrel||se.state!=="idle"||bs[se.kind].boss||oe[Math.floor(se.z)*l.mw+Math.floor(se.x)]>=0&&ye(se)}}function ye(d){d.state==="idle"&&(d.state="chase",d.st=0,E(d.kind==="knight"?"knightSight":d.kind==="riley"?"rileySight":"impSight",d))}function qe(){Fu(l.W,l.p.x,l.p.z,9999,function(d,b,H){var oe=d,$=l.W,se=Kn($,b,H);if(se!==0){if(!Si[se])return!1;var Me=Qi($,b,H);if(Me.sealed||!(Me.open>=.9||!Me.locked&&!Me.secret))return!1}return $.lava[H*$.mw+b]?!1:$.floor[oe]-$.floor[H*$.mw+b]<=Cn+1e-4},l.flow)}function me(d){var b=l.mw,H=Math.floor(d.x),oe=Math.floor(d.z),$=l.flow[oe*b+H];if($<=0)return null;for(var se=-1,Me=-1,be=0;be<4;be++){var Le=H+(be===0?1:be===1?-1:0),Ze=oe+(be===2?1:be===3?-1:0);if(!(Le<0||Ze<0||Le>=b||Ze>=l.mh)){var ke=l.flow[Ze*b+Le];l.W.floor[Ze*b+Le]-l.W.floor[oe*b+H]>Cn+1e-4||ke>=0&&ke<$&&($=ke,se=Le,Me=Ze)}}return se<0?null:Math.atan2(Me+.5-d.z,se+.5-d.x)}function he(d,b){d.state==="closed"||d.state==="closing"?(d.state="opening",b&&(d.used=!0),E("doorOpen",{x:d.x+.5,y:sn(l.W,d.x,d.z),z:d.z+.5}),d.secret&&!d.found&&(d.found=!0)):b&&d.state==="open"&&(d.state="closing",E("doorClose",{x:d.x+.5,y:sn(l.W,d.x,d.z),z:d.z+.5}))}function Ae(d,b,H,oe,$){return d+H>oe&&d-H<oe+1&&b+H>$&&b-H<$+1}function te(d){if(Ae(l.p.x,l.p.z,dn.r,d.x,d.z))return!0;for(var b=0;b<l.ents.length;b++){var H=l.ents[b];if(H.mob&&!H.barrel&&H.state!=="dead"&&H.state!=="die"&&Ae(H.x,H.z,H.radius,d.x,d.z))return!0}return!1}function ne(d){for(var b in l.doors){var H=l.doors[b];if(H.state==="opening")H.open+=d*1.6,H.open>=1&&(H.open=1,H.state="open",H.timer=H.secret?9999:4);else if(H.state==="open")H.timer-=d,H.timer<=0&&!te(H)&&(H.state="closing",E("doorClose",{x:H.x+.5,y:0,z:H.z+.5}));else if(H.state==="closing"){if(te(H)){H.state="opening";continue}H.open-=d*1.6,H.open<=0&&(H.open=0,H.state="closed")}}}function fe(d,b,H){return Ae(d.x,d.z,(d.radius||dn.r)*.7,b,H)&&Math.abs(d.y-sn(l.W,b,H))<.05}function He(d){var b=l.p;gd(l.W,d,function(H,oe){if(fe(b,H,oe))return!0;for(var $=0;$<l.ents.length;$++){var se=l.ents[$];if(se.mob&&Je(se)&&fe(se,H,oe))return!0}return!1},function(H,oe){E(oe==="start"?"doorOpen":"doorClose",{x:H.x+.5,y:H.pos,z:H.z+.5})}),l.W.lifts.forEach(function(H){H.moved&&[b].concat(l.ents).forEach(function(oe){(oe===b||oe.mob&&Je(oe))&&Ae(oe.x,oe.z,(oe.radius||dn.r)*.7,H.x,H.z)&&Math.abs(oe.y-(H.pos-H.moved))<.06&&(oe.y=H.pos)})})}function W(){for(var d=l.p,b=Math.cos(d.ang),H=Math.sin(d.ang),oe=.4;oe<=1.3;oe+=.3){var $=Math.floor(d.x+b*oe),se=Math.floor(d.z+H*oe),Me=Kn(l.W,$,se);if(Me!==0){if(Si[Me]){var be=Qi(l.W,$,se);if(be.open>=.9&&be.state==="open"&&Math.floor(d.x)===$&&Math.floor(d.z)===se)continue;return{kind:"door",door:be}}return Me===9?{kind:"switch",x:$,z:se}:Me===12?{kind:"lever",x:$,z:se}:null}}return null}function tt(){if(!l||l.p.dead||l.exitT>=0)return null;var d=W();if(!d)return null;if(d.kind==="switch")return{verb:"RELIGHT THE WAYSTONE",color:"#6fe0ec"};if(d.kind==="lever")return{verb:"PULL THE SWITCH",color:"#ffd23e"};var b=d.door;return b.secret&&!b.found?null:b.locked&&!l.p.keys[b.locked]?{need:b.locked,text:b.locked.toUpperCase()+" KEYSTONE NEEDED",color:b.locked==="red"?"#ff5a3a":"#6a98ff"}:b.state==="closed"||b.state==="closing"?{verb:"OPEN",color:"#e8e0c8"}:null}function Te(){var d=W();if(d){var b=l.p;if(d.kind==="door"){var H=d.door;H.sealed?(E("locked"),S("SEALED. SURVIVE!","#ff9a28")):H.locked&&!b.keys[H.locked]?(E("locked"),S("YOU NEED THE "+H.locked.toUpperCase()+" KEYSTONE."),D("key")):he(H,!0)}else d.kind==="lever"?(l.W.cells[d.z*l.mw+d.x]=13,E("switchFlip"),Re("use",d.x+","+d.z)):d.kind==="switch"&&(l.W.cells[d.z*l.mw+d.x]=10,E("switchFlip"),L("LEVEL COMPLETE!","#58e068",2),l.exitT=.8)}}function O(d){d.y=$o(l.W,d.x,d.z,d.radius)}function T(d,b){var H=l.p,oe=bs[d.kind];d.animT+=b,d.st-=b,d.cool-=b,d.flashT-=b,d.target&&!Je(d.target)&&(d.target=null,d.cool=Math.min(d.cool,.4));var $=d.target,se=$?$.x:H.x,Me=$?$.z:H.z,be=$?$.y+$.h*.6:H.y+H.eyeH*.8;d.losT-=b,d.losT<=0&&(d.losT=.2+p()*.1,d.los=Sr(l.W,d.x,d.y+d.h*.8,d.z,se,be,Me));var Le=se-d.x,Ze=Me-d.z,ke=Math.sqrt(Le*Le+Ze*Ze);if($&&(d.lostT=d.los?0:d.lostT+b,d.lostT>4)){d.target=null,d.lostT=0;return}if(d.kind==="knight"&&!$&&d.los&&d.state==="chase"&&!H.dead&&(d.eruptT=(d.eruptT===void 0?3:d.eruptT)-b,d.eruptT<=0)){d.eruptT=v(2.8,4);var ct=H.x,mt=H.z,_t=sn(l.W,Math.floor(ct),Math.floor(mt));x("fx","summon",ct,_t+.1,mt),E("impShoot",{x:ct,y:_t,z:mt}),l.timers.push({t:1,fn:function(){x("fx","fireBurst",ct,_t+.3,mt),!H.dead&&Math.hypot(H.x-ct,H.z-mt)<1.1&&H.y<_t+.6&&De(v(18,26)|0,d)}})}if(d.state==="idle"){d.los&&ke<9&&!H.dead&&ye(d);return}if(d.state==="pain"){d.st<=0&&(d.fleeNext?(d.fleeNext=!1,d.state="flee",d.st=v(.9,1.6),d.moveAng=Math.atan2(-Ze,-Le)+v(-.6,.6)):d.state="chase");return}if(d.state==="flee"){Xr(l.W,d,Math.cos(d.moveAng)*d.speed*1.1*b,Math.sin(d.moveAng)*d.speed*1.1*b,d.radius,d.h,Cn)||(d.moveAng+=(p()<.5?1:-1)*Math.PI/2),O(d),d.st<=0&&(d.state="chase",d.cool=0,d.retarget=0,E("impSight",d));return}if(d.state==="die"){d.st<=-.5&&(d.state="dead");return}if(d.state!=="dead"){if(d.state==="windup"){if(d.st<=0){if(d.state="chase",!$&&H.dead)return;if(oe.melee&&ke<1.9&&Math.abs(be-(d.y+d.h*.5))<1.2){if(d.los){var rn=oe.attackDmg[0]+p()*(oe.attackDmg[1]-oe.attackDmg[0])|0;$?de($,rn,d):De(rn,d),E("punch",d)}}else if(oe.ranged&&d.los&&(We(d,d.kind==="knight",se,be,Me),d.kind==="knight"&&!$)){var kt=Math.hypot(se-d.x,Me-d.z)/5.5;l.timers.push({t:.25,fn:(function(kn,Nt,en){return function(){Je(kn)&&kn.los&&We(kn,!0,Nt,be,en)}})(d,se+H.vx*kt,Me+H.vz*kt)})}d.cool=v(.9,1.9)}return}if(!(!$&&H.dead)){d.detourT=(d.detourT||0)-b,d.pathT=(d.pathT||0)-b;var Pt=!$&&Math.abs(H.y-d.y)>Cn,R=!$&&(!d.los||d.pathT>0||Pt)&&d.detourT<=0?me(d):null;if(d.retarget-=b,R!==null)d.moveAng=R;else if(d.retarget<=0){d.retarget=v(.35,.8);var Z=Math.atan2(Ze,Le);oe.ranged&&!oe.melee&&d.los&&ke<7?(p()<.3&&(d.strafeSide=-d.strafeSide),d.moveAng=Z+d.strafeSide*v(1.1,1.8)):d.moveAng=Z+(ke>2.2?v(-.7,.7):v(-.25,.25))}var ce=oe.melee?.95:1.6;if(ke>ce){var ee=d.x,ae=d.z,Fe=Math.cos(d.moveAng)*d.speed*b,Ge=Math.sin(d.moveAng)*d.speed*b;if(!Pt&&!$){var Ne=function(kn,Nt){var en=d.x+kn,Mi=d.z+Nt,Gt=Math.hypot(kn,Nt)||1;return en+=kn/Gt*d.radius,Mi+=Nt/Gt*d.radius,sn(l.W,Math.floor(en),Math.floor(Mi))<d.y-Cn};Ne(Fe,Ge)&&(Ne(Fe,0)?Ne(0,Ge)?(Fe=0,Ge=0):Fe=0:Ge=0)}var Ye=Xr(l.W,d,Fe,Ge,d.radius,d.h,Cn);if(!Ye&&R!==null){var je=Math.floor(d.x)+.5-d.x,ft=Math.floor(d.z)+.5-d.z;Xr(l.W,d,je*Math.min(1,b*6),ft*Math.min(1,b*6),d.radius,d.h,Cn)}else if(!Ye){var gt=Math.floor(d.x+Math.cos(d.moveAng)*.7),Qe=Math.floor(d.z+Math.sin(d.moveAng)*.7),Et=Qi(l.W,gt,Qe);Et&&!Et.locked&&!Et.secret&&!Et.sealed&&Et.state==="closed"&&he(Et,!1),d.moveAng+=(p()<.5?1:-1)*Math.PI/2*v(.6,1.2),d.retarget=v(.25,.5),d.pathT=.8}for(var zt=0;zt<l.ents.length;zt++){var Lt=l.ents[zt];if(!(Lt===d||!Lt.mob||Lt.state==="dead"||Lt.state==="die"||Lt.gone)){var Ft=d.x-Lt.x,ln=d.z-Lt.z,Ke=Ft*Ft+ln*ln,_n=d.radius+(Lt.radius||.3);if(Ke>1e-4&&Ke<_n*_n&&Math.abs(Lt.y-d.y)<.5){var wt=Math.sqrt(Ke),Tn=(_n-wt)*.5;Wr(l.W,d.x+Ft/wt*Tn,d.z+ln/wt*Tn,d.radius,d.y,d.h,Cn).blocked||(d.x+=Ft/wt*Tn,d.z+=ln/wt*Tn)}}}var oi=g(d.x,d.z,ee,ae),yi=d.speed*b*.3;d.stuckT=oi<yi*yi?(d.stuckT||0)+b:0,d.stuckT>.4&&(d.stuckT=0,d.detourT=v(.5,.9),d.moveAng+=(p()<.5?1:-1)*Math.PI/2,d.retarget=d.detourT),O(d)}d.cool<=0&&d.los&&(oe.melee&&ke<1.4&&Math.abs(be-(d.y+d.h*.5))<1.2?(d.state="windup",d.st=.35):oe.ranged&&ke>1.2&&ke<14&&p()<b*1.4&&(d.state="windup",d.st=.45))}}}function ie(d){var b=qt.default.recall(n);d.mem=b,d.tune=qt.default.tuning(b);var H=ve();d.sparring=!!(H&&H.sparring),d.allowed=H&&H.moves?H.moves:null,d.hp=d.maxHp=Math.round(bs.riley.hp*d.tune.hpScale*(H&&H.hpScale||1)),d.profile=qt.default.newProfile(),d.phase=1,d.cools={volley:1,lead:3,summon:8,shield:5,melee:0},d.move=null,d.moveT=0,d.shieldT=0,d.talkT=0,d.flankSide=1,d.attack=null,d.settled=!1,d.sinceRest=0,d.resting=!1,d.restT=0}var le=null;function ve(){return le&&le.boss}function k(d){return!!d&&d.state!=="idle"&&Je(d)}function B(d,b,H){return!b||H&&d.talkT>0?!1:(S("RILEY: "+b,"#6fe0ec",Math.max(4.5,b.length/14)),E("rileyTalk"),d.talkT=3.5,!0)}function F(d){var b=d.mem,H=l.L.boss;if(d.sparring&&H&&H.intro&&!(b.fights>0)){B(d,H.intro);return}B(d,qt.default.line("intro",d.profile,{memory:b.fights>0?b:null})),b.lossStreak>=3?B(d,qt.default.line("mercy",d.profile,{lower:r.difficulty>0&&tr[r.difficulty-1]?tr[r.difficulty-1].name:null})):b.ease>0?B(d,qt.default.line("ease",d.profile)):d.tune.practised&&B(d,qt.default.line("studied",d.profile,{wins:b.wins}))}function z(d,b){d.settled||(d.settled=!0,qt.default.save(n,qt.default.settle(d.mem,d.profile,b)))}function Q(){var d=0;return l.ents.forEach(function(b){b.summoned&&Je(b)&&d++}),d}function pe(d){for(var b=0,H=0;H<30&&b<2;H++){var oe=p()*Math.PI*2,$=v(1.5,3.5),se=d.x+Math.cos(oe)*$,Me=d.z+Math.sin(oe)*$,be=$o(l.W,se,Me,.3);if(!(Wr(l.W,se,Me,.4,be,.85,0).blocked||Ue(se,Me)<3||!Sr(l.W,d.x,d.y+.5,d.z,se,be+.5,Me))){var Le=M("imp",se,Me,be);Le.summoned=!0,Le.state="chase",l.ents.push(Le),l.stats.totalKills++,x("fx","summon",se,be+.4,Me),b++}}b&&(B(d,qt.default.line("summon",d.profile)),E("rileySight",d)),d.cools.summon=18*d.tune.coolScale}function ue(d,b,H,oe){var $={los:d.los,dist:b,phase:d.phase,cool:d.cools,impsAlive:Q(),playerWeapon:l.p.weapon,sinceRest:d.sinceRest},se=qt.default.legalMoves($);if(d.allowed){var Me=se.filter(function(Ze){return d.allowed.indexOf(Ze)>=0});Me.length&&(se=Me)}var be=qt.default.choose(se,d.profile,$,t);d.move=be.move,B(d,qt.default.insight(d.profile,be.why),!0);var Le=d.profile;switch(be.move){case"volley":case"lead":d.state="windup",d.attack=be.move,d.st=be.move==="volley"?.55:qt.default.TELL_MIN,d.moveT=d.st+.2;break;case"backoff":d.moveT=1,d.moveAng=Math.atan2(-oe,-H)+v(-.5,.5);break;case"flank":d.flankSide=qt.default.strafeHabit(Le)>.3?qt.default.strafeSide(Le):p()<.5?1:-1,d.moveT=1.3;break;case"close":d.moveT=1.2;break;case"seek":d.moveT=.8;break;case"summon":pe(d),d.moveT=.8;break;case"rest":d.resting=!0,d.restT=d.moveT=qt.default.REST_TIME,d.sinceRest=0,d.shieldT=0,Le.said.rest||(Le.said.rest=!0,B(d,qt.default.line("rest",Le)));break;case"shield":d.shieldT=1.6,d.moveT=1.2,d.cools.shield=8*d.tune.coolScale,E("rileyShield",d);break}}function ge(d,b){var H=l.p,oe=d.tune,$=oe.coolScale*(d.phase>=3?.7:1);if(d.attack==="melee"){b<1.9&&d.los&&(De(v(10,20)*oe.dmgScale|0,d),E("punch",d)),d.cools.melee=1.2;return}if(d.los){var se=H.y+H.eyeH*.8,Me=Math.atan2(H.z-d.z,H.x-d.x);if(d.attack==="volley"){for(var be=-1;be<=1;be++){var Le=Me+be*.2;We(d,!0,d.x+Math.cos(Le)*b,se,d.z+Math.sin(Le)*b,6.5,v(8,16)*oe.dmgScale)}d.cools.volley=v(1.6,2.4)*$}else if(d.attack==="lead"){var Ze=9,ke=b/Ze;We(d,!0,H.x+l.input.vx*ke,se,H.z+l.input.vz*ke,Ze,v(10,18)*oe.dmgScale),d.cools.lead=v(1.8,2.8)*$}}}function Ee(d,b){var H=l.p,oe=d.profile;d.animT+=b,d.st-=b,d.talkT-=b,d.shieldT-=b,d.moveT-=b,d.flashT-=b,d.restT-=b;for(var $ in d.cools)d.cools[$]-=b;d.losT-=b,d.losT<=0&&(d.losT=.15,d.los=Sr(l.W,d.x,d.y+d.h*.85,d.z,H.x,Se(),H.z));var se=H.x-d.x,Me=H.z-d.z,be=Math.sqrt(se*se+Me*Me);if(d.state==="idle"){d.los&&!H.dead&&(ye(d),F(d));return}if(d.state==="die"){d.st<=-1.2&&(d.state="dead");return}if(!(d.state==="dead"||H.dead)){if(qt.default.observe(oe,{dt:b,los:d.los,dist:be,strafe:l.input.strafe,moving:l.input.moving}),d.resting||(d.sinceRest+=b),d.state==="pain"){d.st<=0&&(d.state="chase");return}if(d.state==="windup"){d.st<=0&&(d.state="chase",ge(d,be));return}if(d.resting){if(d.restT>0)return;d.resting=!1}if(be<1.3&&d.los&&d.cools.melee<=0){d.state="windup",d.attack="melee",d.st=qt.default.TELL_MIN;return}if(!(d.moveT<=0&&(ue(d,be,se,Me),d.state==="windup"))){var Le=Math.atan2(Me,se),Ze=null;switch(d.move){case"backoff":Ze=d.moveAng;break;case"close":Ze=Le;break;case"flank":case"shield":Ze=Le+d.flankSide*1.35;break;case"seek":Ze=me(d),Ze===null&&(Ze=Le);break}if(Ze!==null){var ke=d.speed*(d.phase>=3?1.25:1)*b;Xr(l.W,d,Math.cos(Ze)*ke,Math.sin(Ze)*ke,d.radius,d.h,Cn)||(d.flankSide=-d.flankSide,d.moveAng+=Math.PI/2),O(d)}}}}function Pe(d,b){if(d.shieldT>0)return x("fx","spark",d.x,d.y+.5,d.z),E("rileyShield",d),!0;if(l.firing&&d.lastShot!==l.shotId&&(d.lastShot=l.shotId,d.profile.hits++),b&&!b.barrel&&b.kind==="imp"){var H=b.target===d?"impsTurned":"friendlyFire";d.profile.said[H]||(d.profile.said[H]=!0,B(d,qt.default.line(H,d.profile)))}return!1}function $e(d){if(d.hp<=0){E("rileyDerez",d),B(d,qt.default.line("defeated",d.profile)),d.sparring&&S("RILEY: THAT WAS JUST PRACTICE. I'LL REMEMBER HOW YOU FIGHT.","#6fe0ec",6),z(d,!0),l.exitT=d.sparring?6.5:5;return}d.sparring||(d.phase<3&&d.hp<d.maxHp*.33?(d.phase=3,B(d,qt.default.line("phase3",d.profile))):d.phase<2&&d.hp<d.maxHp*.66&&(d.phase=2,B(d,qt.default.line("phase2",d.profile)),pe(d)))}function K(d){for(var b=[],H=d[1];H<=d[3];H++)for(var oe=d[0];oe<=d[2];oe++)oe>=0&&H>=0&&oe<l.mw&&H<l.mh&&b.push(H*l.mw+oe);return b}function Re(d,b){(l.L.events||[]).forEach(function(H,oe){if(!l.fired[oe]){var $=H.when||{},se=d==="use"&&$.use&&$.use[0]+","+$.use[1]===b||d==="pickup"&&$.pickup===b||d==="cleared"&&$.cleared===b||d==="start"&&$.start;se&&xe(H,oe)}})}function xe(d,b){l.fired[b]=!0,Ce(d.do||[])}function Ce(d){d.forEach(function(b){if(b.after){l.timers.push({t:b.after,acts:b.do||[]});return}var H=b.raise||b.lower;H&&(pd(l.W,K(H),b.to,b.speed),E("doorOpen",{x:H[0]+.5,y:0,z:H[1]+.5})),b.lava&&K(b.lava).forEach(function(oe){l.W.lava[oe]=b.on?1:0}),b.seal&&b.seal.forEach(function(oe){var $=l.doors[oe];$&&($.sealed=!0,$.state!=="closed"&&($.state="closing"))}),b.open&&b.open.forEach(function(oe){var $=l.doors[oe];$&&($.sealed=!1,he($,!1))}),b.spawn&&b.spawn.forEach(function(oe){var $=sn(l.W,oe.x,oe.z),se=M(oe.kind,oe.x+.5,oe.z+.5,$);se.state="chase",se.wave=b.wave||null,l.ents.push(se),l.stats.totalKills++,x("fx","summon",se.x,$+.4,se.z)}),b.wave&&(l.waves[b.wave]=!0),b.light&&(l.lightsOff[b.light]=b.on===!1),b.say&&(S("RILEY: "+b.say,"#6fe0ec",Math.max(4.5,b.say.length/14)),E("rileyTalk")),b.notice&&L(b.notice,"#ff9a28",2.5),b.shake&&U(b.shake)})}function Oe(d){for(var b=l.p,H=l.L.events||[],oe=l.timers.length-1;oe>=0;oe--)if((l.timers[oe].t-=d)<=0){var $=l.timers.splice(oe,1)[0];$.fn?$.fn():Ce($.acts)}for(var se=0;se<H.length;se++){var Me=H[se].when||{};if(!(l.fired[se]||!Me.enter)){var be=Me.enter;b.x>=be[0]&&b.x<=be[2]+1&&b.z>=be[1]&&b.z<=be[3]+1&&xe(H[se],se)}}l.ents.forEach(function(ke){if(!(!ke.wave||!Je(ke)||ke.state==="die")){var ct=!ke.los&&Ue(ke.x,ke.z)>6;ke.strayT=ct?(ke.strayT||0)+d:0,ke.strayT>25&&(ke.state="die",ke.st=-1,ke.hp=0,x("fx","gib",ke.x,ke.y+ke.h*.6,ke.z,{kind:ke.kind}))}});for(var Le in l.waves)l.waves[Le]&&(l.ents.some(function(ke){return ke.wave===Le&&Je(ke)})||(l.waves[Le]=!1,Re("cleared",Le)));if(l.lavaT-=d,l.lavaT<=0){l.lavaT=.5;var Ze=Math.floor(b.z)*l.mw+Math.floor(b.x);!b.dead&&l.W.lava[Ze]&&b.onGround&&(De(6,{x:b.x,z:b.z,kind:"lava"}),D("lava")),l.ents.forEach(function(ke){ke.mob&&!ke.barrel&&Je(ke)&&l.W.lava[Math.floor(ke.z)*l.mw+Math.floor(ke.x)]&&de(ke,8)})}}function we(){for(var d=l.p,b=Se(),H=12,oe=l.W,$=Math.floor(d.x),se=Math.floor(d.z),Me=Math.max(0,se-H);Me<=Math.min(l.mh-1,se+H);Me++)for(var be=Math.max(0,$-H);be<=Math.min(l.mw-1,$+H);be++){var Le=Me*l.mw+be;l.seen[Le]||Mr(oe,be,Me)||Sr(oe,d.x,b,d.z,be+.5,sn(oe,be,Me)+.4,Me+.5)&&(l.seen[Le]=1,Ea(oe,be,Me).forEach(function(Ze){oe.cells[Ze.i]!==0&&(l.seen[Ze.i]=1)}))}}function st(){we();var d=l.p,b=Se();function H(be,Le){return g(be.x,be.z,d.x,d.z)<Le*Le&&Sr(l.W,d.x,b,d.z,be.x,(be.y||0)+(be.h||.3)*.6,be.z)}for(var oe=0;oe<l.ents.length;oe++){var $=l.ents[oe];if($.kind==="pickup"&&!$.spotted&&($.item==="r"||$.item==="u")&&H($,14)&&($.spotted=!0),$.mob&&!$.barrel&&Je($)&&Md["meet_"+$.kind]&&!r.seenTips["meet_"+$.kind]&&H($,11)&&D("meet_"+$.kind),$.barrel&&!$.gone&&!r.seenTips.barrel&&H($,10))for(var se=0;se<l.ents.length;se++){var Me=l.ents[se];if(Me.mob&&!Me.barrel&&Je(Me)&&Me.state!=="idle"&&g(Me.x,Me.z,$.x,$.z)<4){D("barrel");break}}$.kind==="torch"&&u===0&&l.time>20&&H($,5)&&D("torches")}l.W.lifts.forEach(function(be){g(be.x+.5,be.z+.5,d.x,d.z)<16&&D("lift")})}function rt(){var d=l.info,b=l.p,H,oe=d.keys.blue&&!b.keys.blue?"u":d.keys.red&&!b.keys.red?"r":null;if(oe){for(var $=0;$<l.ents.length;$++){var se=l.ents[$];if(se.kind==="pickup"&&se.item===oe&&!se.gone)return se.spotted?{x:se.x,y:se.y+.3,z:se.z}:null}return null}for(H in l.doors){var Me=l.doors[H];if(Me.locked&&!Me.used&&l.seen[Me.z*l.mw+Me.x])return{x:Me.x+.5,y:sn(l.W,Me.x,Me.z)+.8,z:Me.z+.5}}var be=N();if(be.length){var Le=null,Ze=1e9;return be.forEach(function(_t){if(l.seen[_t[1]*l.mw+_t[0]]){var rn=Math.hypot(_t[0]+.5-b.x,_t[1]+.5-b.z);rn<Ze&&(Ze=rn,Le=_t)}}),Le?{x:Le[0]+.5,y:1,z:Le[1]+.5,use:{x:Le[0],z:Le[1]}}:null}if(C()){var ke=l.L.stage.at;return l.seen[ke[1]*l.mw+ke[0]]?{x:ke[0]+.5,y:sn(l.W,ke[0],ke[1])+.8,z:ke[1]+.5}:null}var ct=l.exitCell;if(!d.boss&&ct&&l.seen[ct.z*l.mw+ct.x])return{x:ct.x+.5,y:.8,z:ct.z+.5};var mt=l.boss;return d.boss&&mt&&Je(mt)&&l.seen[Math.floor(mt.z)*l.mw+Math.floor(mt.x)]?{x:mt.x,y:mt.y+mt.h+.3,z:mt.z}:null}function Kt(d){var b=l.p,H=yd[d.item],oe=m().ammo,$=null;switch(d.item){case"h":b.hp>=100?$="HEALTH":b.hp=Math.min(100,b.hp+10);break;case"+":b.hp>=100?$="HEALTH":b.hp=Math.min(100,b.hp+25);break;case"A":b.armor>=100?$="ARMOR":(b.armor=100,b.grinT=1);break;case"b":b.ammo.bullets>=200?$="SPARKS":b.ammo.bullets=Math.min(200,b.ammo.bullets+10*oe);break;case"a":b.ammo.shells>=50?$="BELL CHARGES":b.ammo.shells=Math.min(50,b.ammo.shells+4*oe);break;case"2":b.weapons.shotgun=!0,b.ammo.shells=Math.min(50,b.ammo.shells+8*oe),b.grinT=1.2,b.weapon!=="shotgun"&&V("shotgun",!0),L("BELL BLASTER!  PRESS 3","#ffd23e",2.5),D("weapons");break;case"r":case"u":var se=d.item==="r"?"red":"blue";b.keys[se]=!0,b.grinT=1,L(se.toUpperCase()+" KEYSTONE",se==="red"?"#ff5a3a":"#6a98ff",2.5),D("key");break;case"P":b.hp=Math.min(200,b.hp+100),b.grinT=1.2;break}if($){d.touching=!0,S($+" ALREADY FULL","#8a8478",1.5);return}d.gone=!0,l.stats.items++,Re("pickup",d.item),b.bonusFlash=Math.min(.35,b.bonusFlash+.22),E(H.snd),x("fx","pickup",d.x,d.y+.3,d.z,{item:d.item}),S(H.msg),b.autoFist&&(d.item==="b"||d.item==="a")&&(b.autoFist=!1,V(q(b),!0))}function Ut(d){var b=l.p;if(b.dead){b.deadT+=d,b.eyeH=Math.max(.15,b.eyeH-d*1.2);return}var H=!!a.KeyC;if(!H&&b.crouch){var oe=Wr(l.W,b.x,b.z,dn.r,b.y,dn.h,0);oe.blocked||(b.crouch=!1)}else b.crouch=H;var $=b.crouch?dn.hCrouch:dn.h,se=b.crouch?dn.eyeCrouch:dn.eye;b.eyeH+=(se-b.eyeH)*Math.min(1,d*14);var Me=a.ShiftLeft||a.ShiftRight,be=0,Le=0;(a.KeyW||a.ArrowUp)&&(be+=1),(a.KeyS||a.ArrowDown)&&(be-=1),a.KeyA&&(Le-=1),a.KeyD&&(Le+=1),a.ArrowLeft&&(b.ang-=2.6*d),a.ArrowRight&&(b.ang+=2.6*d),a.PageUp&&(b.pitch+=1.6*d),a.PageDown&&(b.pitch-=1.6*d),b.pitch=_(b.pitch,-1.3,1.3),be&&Le&&(be*=.7071,Le*=.7071);var Ze=b.crouch?dn.walk*.5:Me?dn.run:dn.walk,ke=Math.cos(b.ang),ct=Math.sin(b.ang),mt=(ke*be-ct*Le)*Ze,_t=(ct*be+ke*Le)*Ze,rn=b.onGround?14:3;b.vx+=(mt-b.vx)*Math.min(1,d*rn),b.vz+=(_t-b.vz)*Math.min(1,d*rn),a.Space&&!b.jumpHeld&&b.onGround&&!b.crouch&&(b.vy=dn.jumpV,b.onGround=!1,l.jumped=!0,E("jump")),b.jumpHeld=!!a.Space;var kt=b.x,Pt=b.z,R=b.onGround?Cn:Math.max(0,Math.min(Uu,.12));Xr(l.W,b,b.vx*d,b.vz*d,dn.r,$,R),Me&&(be||Le)&&(l.ranT+=d);var Z=$o(l.W,b.x,b.z,dn.r),ce=Wr(l.W,b.x,b.z,dn.r,Math.max(b.y,Z),$,10).ceil;b.onGround&&Z<b.y-.02&&Z>b.y-Cn?b.y=Z:b.onGround&&Z<b.y&&(b.onGround=!1),b.onGround&&Z>b.y&&(b.y=Z),b.onGround||(b.vy-=dn.gravity*d,b.y+=b.vy*d,ce!==void 0&&b.y+$>ce&&(b.y=ce-$,b.vy>0&&(b.vy=0)),b.y<=Z&&(b.vy<-5&&(U(1.2),b.landT=.25),b.vy<-2&&E("land"),b.y=Z,b.vy=0,b.onGround=!0)),l.input.strafe=Le,l.input.moving=b.x!==kt||b.z!==Pt,l.input.vx=(b.x-kt)/d,l.input.vz=(b.z-Pt)/d,u===0&&(l.time>14&&l.ranT<.3&&D("run"),l.time>25&&!l.jumped&&D("jump"),l.time>40&&!l.usedMap&&D("map"),l.time>70&&!l.stats.secrets&&D("secret")),a.KeyE?b.usedHeld||(b.usedHeld=!0,Te()):b.usedHeld=!1,b.nextWeapon&&b.raiseT<=0&&!(b.lowerT>0)&&(b.lowerT=.15),b.lowerT>0&&(b.lowerT-=d,b.lowerT<=0&&(b.weapon=b.nextWeapon||b.weapon,b.nextWeapon=null,b.raiseT=.15)),b.raiseT>0&&(b.raiseT-=d),b.cool-=d,b.fireT+=d;var ee=wa[b.weapon];if(o&&b.cool<=0&&b.raiseT<=0&&b.lowerT<=0&&!b.nextWeapon&&l.exitT<0)if(ee.ammo&&b.ammo[ee.ammo]<=0){E("noAmmo");var ae=q(b);S("OUT OF "+vd[ee.ammo]+"!"),V(ae,!0)&&ae==="fist"&&(b.autoFist=!0),D("lowAmmo"),b.cool=.3}else{if(ee.ammo&&b.ammo[ee.ammo]--,b.cool=ee.rate,b.fireT=0,E(b.weapon==="fist"?"punch":b.weapon),b.weapon==="shotgun"&&E("pump"),ee.melee||(U(ee.shake),x("fx","muzzle",b.x+Math.cos(b.ang)*.4,Se()-.1,b.z+Math.sin(b.ang)*.4,{weapon:b.weapon}),x("fx","casing",b.x,Se()-.15,b.z,{weapon:b.weapon,ang:b.ang,delay:b.weapon==="shotgun"?.45:0})),k(l.boss)&&qt.default.noteShot(l.boss.profile,b.weapon,Ue(l.boss.x,l.boss.z)),l.shotId++,l.firing=!0,ee.melee)ut(b.ang,b.pitch,ee.dmgMin,ee.dmgMax,!0,ee.knock);else for(var Fe=0;Fe<ee.pellets;Fe++)ut(b.ang+(p()-.5)*2*ee.spread,b.pitch+(p()-.5)*ee.spread,ee.dmgMin,ee.dmgMax,!1,ee.knock);l.firing=!1,ee.melee||X(b.x,b.z,14)}for(var Ge=0;Ge<l.ents.length;Ge++){var Ne=l.ents[Ge];Ne.kind!=="pickup"||Ne.gone||(g(Ne.x,Ne.z,b.x,b.z)<.45&&Math.abs(Ne.y-b.y)<.6?Ne.touching||Kt(Ne):Ne.touching=!1)}for(var Ye=l.L.triggers||[],je=f[u]||(f[u]={}),ft=0;ft<Ye.length;ft++){var gt=Ye[ft].box;je[ft]||b.x<gt[0]||b.x>gt[2]+1||b.z<gt[1]||b.z>gt[3]+1||(je[ft]=!0,S("RILEY: "+Ye[ft].say,"#6fe0ec",Math.max(4.5,Ye[ft].say.length/14)),E("rileyTalk"))}var Qe=Math.floor(b.x),Et=Math.floor(b.z);l.secrets.forEach(function(zt){!zt.found&&zt.x===Qe&&zt.z===Et&&(zt.found=!0,l.stats.secrets++,E("secret"),L("TRUE-MAP FRAGMENT FOUND!","#ffd23e",2.5))})}function Yn(d){if(!(c!=="game"||!l)){var b=l.p;l.events.length=0,l.time+=d,b.dmgFlash=Math.max(0,b.dmgFlash-d*.8),b.bonusFlash=Math.max(0,b.bonusFlash-d*1.5),b.painT=Math.max(0,b.painT-d),b.grinT=Math.max(0,b.grinT-d),b.landT=Math.max(0,b.landT-d),l.shake=Math.max(0,l.shake-d*14);for(var H=0;H<l.msgs.length;H++)l.msgs[H].t-=d;for(;l.msgs.length&&l.msgs[0].t<=0;)l.msgs.shift();l.notice&&(l.notice.t-=d)<=0&&(l.notice=null),l.hitT-=d,l.killT-=d,l.blockT-=d;for(var oe=l.hurtDirs.length-1;oe>=0;oe--)(l.hurtDirs[oe].t-=d*.9)<=0&&l.hurtDirs.splice(oe,1);if(Y(d),l.spotT-=d,l.spotT<=0&&(l.spotT=.3,st()),l.exitT>=0&&(l.exitT-=d,l.exitT<=0)){h={name:l.L.name,time:l.time,par:l.L.par,kills:l.stats.kills,totalKills:l.stats.totalKills,items:l.stats.items,totalItems:l.stats.totalItems,secrets:l.stats.secrets,totalSecrets:l.stats.totalSecrets},s(u,h),c="inter";return}ne(d),He(d),md(l.W,d),l.W.movers.forEach(function(mt){mt.moved&&[b].concat(l.ents).forEach(function(_t){if(!(_t!==b&&!(_t.mob&&Je(_t))&&_t.kind!=="pickup")){var rn=Math.floor(_t.z)*l.mw+Math.floor(_t.x);mt.cells.indexOf(rn)>=0&&Math.abs(_t.y-(mt.pos-mt.moved))<.08&&(_t.y=mt.pos)}})}),Oe(d),l.flowT-=d,l.flowT<=0&&(l.flowT=.25,qe()),Ut(d);for(var $=l.ents.length-1;$>=0;$--){var se=l.ents[$];if(se.gone){l.ents.splice($,1);continue}if(se.kind==="torch"){se.animT+=d;continue}if(se.kind==="pickup"){se.bob+=d;continue}if(se.kind==="proj"){se.animT+=d;for(var Me=3,be=!1,Le=0;Le<Me&&!be;Le++){se.x+=se.vx*d/Me,se.y+=se.vy*d/Me,se.z+=se.vz*d/Me;var Ze=Math.floor(se.x),ke=Math.floor(se.z),ct=Mr(l.W,Ze,ke)||se.y<sn(l.W,Ze,ke)||se.y>Bi(l.W,Ze,ke)?"wall":ai(se);!ct&&!b.dead&&g(se.x,se.z,b.x,b.z)<.2&&se.y>b.y-.1&&se.y<b.y+(b.crouch?dn.hCrouch:dn.h)+.1&&(ct="player"),ct&&(be=!0,ct==="player"?(De(se.dmg|0,{x:se.x-se.vx,z:se.z-se.vz,kind:se.owner?se.owner.kind:"imp"}),E("fireExplode")):(ct!=="wall"&&de(ct,se.dmg|0,se.owner),E("fireExplode",se)),x("fx",se.green?"greenBurst":"fireBurst",se.x,se.y,se.z),l.ents.splice($,1))}continue}if(se.barrel){se.state==="boom"&&(se.st-=d,se.st<=0&&_e(se));continue}se.kind==="riley"?Ee(se,d):se.mob&&T(se,d)}}}function ai(d){for(var b=0;b<l.ents.length;b++){var H=l.ents[b];if(!(!H.mob||H===d.owner||!Je(H))&&!(!H.barrel&&d.owner&&H.kind===d.owner.kind)){var oe=H.radius+.1;if(g(d.x,d.z,H.x,H.z)<oe*oe&&d.y>=H.y-.1&&d.y<=H.y+H.h+.1)return H}}return null}function Iu(){var d=l.p,b=Math.cos(d.pitch),H=Math.cos(d.ang)*b,oe=Math.sin(d.ang)*b,$=Math.sin(d.pitch),se=Qo(l.W,d.x,Se(),d.z,H,$,oe,40),Me=null,be=se.dist;return l.ents.forEach(function(Le){if(!(!Le.mob||!Je(Le))){var Ze=et(d.x,Se(),d.z,H,$,oe,Le);Ze!==null&&Ze<be&&(Me=Le,be=Ze)}}),Me}var Sa=!1;function Jo(){if(c==="inter"){if(!Sa){Sa=!0;return}Sa=!1,u+1>=e.length?c="victory":P(u+1,!0)}else c==="victory"?c="title":c==="game"&&l&&l.p.dead&&l.p.deadT>1.2&&y()}function ba(){return{floorAt:function(d,b){return Mr(l.W,d,b)&&!(Qi(l.W,d,b)&&!Qi(l.W,d,b).locked)?null:sn(l.W,d,b)},neighbours:function(d,b){var H=[],oe=sn(l.W,d,b);return Ea(l.W,d,b).forEach(function($){var se=Kn(l.W,$.x,$.z);if(!(se!==0&&!Si[se])){var Me=Qi(l.W,$.x,$.z);if(!(Me&&Me.sealed)){var be=sn(l.W,$.x,$.z)-oe;if(!(Me&&be<-Cn)){var Le=be<=.02&&be>=-.02?"walk":be<0?"drop":be<=Cn?"step":be<=Uu?"jump":null;Le&&H.push({cx:$.x,cz:$.z,cost:Le==="jump"?2:1,kind:Le})}}}}),H}}}return{keys:a,state:function(){return l},mode:function(){return c},setMode:function(d){c=d},interStats:function(){return h},levelIndex:function(){return u},levels:e,update:Yn,startLevel:P,retryLevel:y,onEnter:Jo,setFire:function(d){o=!!d},switchWeapon:V,cycleWeapon:J,quickSwitch:re,useTarget:W,usePrompt:tt,useAction:Te,objective:G,goalTarget:rt,aimTarget:Iu,hurtPlayer:De,walkGraph:ba,levelInfo:w,hasAmmo:I,settings:r,DIFFS:tr}}var Sd={name:"E1M2: THE FURNACE",floor:"slab",ceil:"ceilDark",par:300,playerAngle:-1.5707963,ceilHeight:2.5,map:["####################################","########HHHHHHHHHXHHHHHHHHHH########","########H..................H########","########H.h..t........t..+.H########","########H.....~~~~~~~~.....H########","########H..................H########","########H........b.........H########","%%%=%%%%H.....H......H.....HMMMMMMMM","%......%H.a...H......H...b.HM.....MM","%.i....%H.......a..a.......HM...iAMM","%......%H..................HM..r..MM","%......%HHHHHHHHHRHHHHHHHHHHM.....MM","%..i...%t.......t.t........tM......M","%......D.a................o.M....M.M","%..%%..%......~~~~~~~~......D....M.M","%......%...T..~~~~~~~~..T...M.MM.M.M","%......%......~~~HH~~~......M....M.M","%......%..i...~~~HH~~~......M....M.M","%......%......~~~~~~~~......M...g..M","%.%%...%......~~~~~~~~......M......M","%......%...T............T...M.MM...M","%....i.D..h.................D......M","%......%t.................btM......M","%...h..%.o..t..........t....M.g..+.M","%......%####............####M......M","%%S%%%%%####.......b....####MMMMMMMM","#...########.....p......############","#*Pa########............############","####################################","####################################"],heights:["000000000000000000000000000000000000","000000000000000000000000000000000000","000000000666222228222222666000000000","000000000666222222222222666000000000","000000000666220000000022666000000000","000000000666222222222222666000000000","000000000666422222222224666000000000","000000000666222222222222666000000000","033333300666222222222222666008888810","033333300666222222222222666008888810","033333300666222222222222666008888810","011111100000000000000000000008888810","011111102222222222222222222208888880","011111102222222222222222222201111170","011111102222220000000022222201111160","011111102222220000000022222201111150","011111102222220000000022222201111140","011111102222220000000022222201111130","011111102222220000000022222201111120","011111102222220000000022222201111110","011111102222222222222222222201111110","011111102222222222222222222201111110","011111102222222222222222222201111110","011111102222332222222233222201111110","011111100000448888888844000001111110","000000000000558888888855000000000000","011100000000668888888866000000000000","011100000000778888888877000000000000","000000000000000000000000000000000000","000000000000000000000000000000000000"],ceilings:["....................................","....................................",".........qqqqqqqqqqqqqqqqqq.........",".........qqqqqqqqqqqqqqqqqq.........",".........qqqqqqqqqqqqqqqqqq.........",".........qqqqqqqqqqqqqqqqqq.........",".........qqqqqqqqqqqqqqqqqq.........",".........qqqqqqqqqqqqqqqqqq.........",".eeeeee..qqqqqqqqqqqqqqqqqq..kkkkkk.",".eeeeee..qqqqqqqqqqqqqqqqqq..kkkkkk.",".eeeeee..qqqqqqqqqqqqqqqqqq..kkkkkk.",".eeeeee......................kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.....mmmmmmmmmmmm.....kkkkkk.","............mmmmmmmmmmmm............",".eee........mmmmmmmmmmmm............",".eee........mmmmmmmmmmmm............","....................................","...................................."],stage:{wave:"forge3",goal:"CLEAR THE FORGE",at:[17,6]},events:[{when:{use:[3,7]},do:[{notice:"THE FURNACE IS DRAINING!"},{shake:3},{say:"YOU DID IT! THE PIT'S DRAINING. THAT'S A SHORTCUT STRAIGHT TO THE RED DOOR."},{lava:[14,14,21,19],on:!1},{raise:[14,14,21,19],to:.5,speed:.25}]},{when:{enter:[12,5,23,9]},do:[{seal:["17,11"]},{notice:"SEALED IN!"},{shake:2},{say:"IT'S A TRAP! KEEP MOVING, USE THE PILLARS AND THE HIGH GROUND."},{after:2,do:[{wave:"forge1",spawn:[{kind:"imp",x:10,z:3},{kind:"imp",x:25,z:3},{kind:"gnasher",x:17,z:3}]}]},{after:11,do:[{say:"MORE OF THEM, FROM THE SIDES!"},{shake:2},{wave:"forge2",spawn:[{kind:"gnasher",x:12,z:9},{kind:"gnasher",x:23,z:9},{kind:"imp",x:12,z:5},{kind:"imp",x:23,z:5}]}]}]},{when:{cleared:"forge2"},do:[{say:"THEY'RE ON THE HIGH GROUND! GET THEM OFF IT!"},{shake:3},{after:.8,do:[{wave:"forge3",spawn:[{kind:"gnasher",x:10,z:4},{kind:"gnasher",x:25,z:4},{kind:"imp",x:10,z:8},{kind:"imp",x:25,z:8},{kind:"imp",x:17,z:8},{kind:"gnasher",x:17,z:5}]}]}]},{when:{cleared:"forge3"},do:[{notice:"FORGE CLEARED!"},{open:["17,11"]},{say:"THAT WAS AWESOME. THE WAYSTONE IS BEHIND THE PLINTH. IT'S SINKING NOW."},{lower:[17,2,17,2],to:.5,speed:.6}]}],triggers:[{box:[14,24,21,27],say:"THE OVERSEERS' FURNACE. THAT PIT IS RED MERCURY. A SWITCH SOMEWHERE DRAINS IT. THE RED DOOR BEHIND IT LEADS ON."},{box:[1,11,6,24],say:"DARK IN HERE. LISTEN FOR THE HOLLOWS BEFORE YOU SEE THEM."},{box:[29,12,34,24],say:"THE RED KEYSTONE IS UP ON THE TANKS. THE STAIRS ARE ON THE FAR WALL."}],lights:[{id:"pit",x:17.5,z:17,y:1.2,color:16722480,intensity:5,dist:14},{id:"forge",x:17.5,z:5,y:3,color:16726564,intensity:4,dist:14},{id:"tanks",x:31.5,z:16,y:3.5,color:6990079,intensity:2.5,dist:12},{id:"bunkerflicker",x:3.5,z:16,y:2.5,color:16760960,intensity:1.6,dist:8,flicker:!0}],darkZones:[[1,8,6,27]]};var bd={name:"E1M3: THE RESET ENGINE",floor:"slab",ceil:"ceilDark",par:330,playerAngle:-1.5707963,ceilHeight:2.5,map:["#####HHHHHHHHHHHHXHHHHHHHHHHHHH#####","#####H....+.............h.....H#####","#####H.+..t..............t....H#####","#####H.....H...HHHHHH...H.....H#####","#####H.........HHHHHH.........H#####","#####H......b..HHHHHH.........H#####","#####H........................H#####","#####H.......~........~.......H#####","#####H.....H.~...HH...~.H.....H#####","#####H.a.....~........~.....a.H#####","#####H........................H#####","#####HHHHHHHHHHHHDDHHHHHHHHHHHH#####","################H..H################","################H..H################","################H..H################","%%=%%%###=######H..H##########HHH=HH","%....%#...ia.###H..H##########H....H","%i...%H......LHHH..HHHHHHHHHHHHi..AH","%....%..........t..t..........H..g.H","%.i%.%.h....................h.H....H","%..%.%......Mi.........M..o...H~..~H","%M.%.%...M.....~~~~~~.....M...H~..~H","%..%.%.........~HHHH~.........H~..~H","%..%.%tM.......~HHHH~a......MtH....H","%.i..D....i.M..~HHHH~..M.i....D....H","%a...%.........~HHHH~.........H....H","%.M..%...M.....~~~~~~.....M...H.g.bH","%b.a+%..o.....b......b.......tH....H","%....Dt........T....T.........D.a.hH","%....%HHHHHH............HHHHHHH....H","%%S%%%######............######HHHHHH","#...########............############","#*PA########t..........t############","############.......b....############","############............############","###############.......##############","##############..a.2..###############","##############...p....##############","##############t......t##############","####################################","####################################"],heights:["000000000000000000000000000000000000","00000066622222222aa22222222666000000","000000666222222222222222222666000000","000000666222222222222222222666000000","000000666222222222222222222666000000","000000666554322222222223455666000000","000000666222222222222222222666000000","000000666222202222222202222666000000","000000666222202222222202222666000000","000000666222202222222202222666000000","000000666222222222222222222666000000","000000000000000000000000000000000000","000000000000000002200000000000000000","00000000000000000aa00000000000000000","000000000000000002200000000000000000","00000000000000000aa00000000000000000","066660088888800002200000000000011110","06666008888888000aa00000000000011110","066660222222222222222222222222011110","011160222222222222222222222222011110","011150222222222222222222222222002200","011140222222222000000222222222002200","011130222222222000000222222222002200","011120222222222000000222222222011110","011110222222222000000222222222011110","011110222222222000000222222222011110","011110222222222000000222222222011110","011110222222222222222222222222011110","011110222222222222222222222222011110","011110000000332222222233000000011110","000000000000442222222244000000000000","011100000000552222222255000000000000","011100000000666666666666000000000000","000000000000666666666666000000000000","000000000000666666666666000000000000","000000000000006666666600000000000000","000000000000006666666600000000000000","000000000000006666666600000000000000","000000000000006666666600000000000000","000000000000000000000000000000000000","000000000000000000000000000000000000"],ceilings:["....................................","......qqqqqqqqqqqqqqqqqqqqqqqq......","......qqqqqqqqqqqqqqqqqqqqqqqq......","......qqqqqqqqqqqqqqqqqqqqqqqq......","......qqqqqqqqqqqqqqqqqqqqqqqq......","......qqqqqqqqqqqqqqqqqqqqqqqq......","......qqqqqqqqqqqqqqqqqqqqqqqq......","......qqqqqqqqqqqqqqqqqqqqqqqq......","......qqqqqqqqqqqqqqqqqqqqqqqq......","......qqqqqqqqqqqqqqqqqqqqqqqq......","......qqqqqqqqqqqqqqqqqqqqqqqq......","....................................",".................kk.................",".................kk.................",".................kk.................",".................kk.................",".kkkk..mmmmmm....kk............kkkk.",".kkkk..mmmmmm....kk............kkkk.",".kkkk.mmmmmmmmmmmmmmmmmmmmmmmm.kkkk.",".kkkk.mmmmmmmmmmmmmmmmmmmmmmmm.kkkk.",".kkkk.mmmmmmmmmmmmmmmmmmmmmmmm.kkkk.",".kkkk.mmmmmmmmmmmmmmmmmmmmmmmm.kkkk.",".kkkk.mmmmmmmmmmmmmmmmmmmmmmmm.kkkk.",".kkkk.mmmmmmmmmmmmmmmmmmmmmmmm.kkkk.",".kkkk.mmmmmmmmmmmmmmmmmmmmmmmm.kkkk.",".kkkk.mmmmmmmmmmmmmmmmmmmmmmmm.kkkk.",".kkkk.mmmmmmmmmmmmmmmmmmmmmmmm.kkkk.",".kkkk.mmmmmmmmmmmmmmmmmmmmmmmm.kkkk.",".kkkk.mmmmmmmmmmmmmmmmmmmmmmmm.kkkk.",".kkkk.......mmmmmmmmmmmm.......kkkk.","............mmmmmmmmmmmm............",".kkk........mmmmmmmmmmmm............",".kkk........mmmmmmmmmmmm............","............mmmmmmmmmmmm............","............mmmmmmmmmmmm............","..............eeeeeeee..............","..............eeeeeeee..............","..............eeeeeeee..............","..............eeeeeeee..............","....................................","...................................."],levers:[[2,15],[33,15],[9,15]],leverGoal:"PULL THE SEAL LEVERS",stage:{wave:"warden",goal:"SHUT DOWN THE ENGINE",at:[17,11]},events:[{when:{start:!0},do:[{light:"relit",on:!1},{light:"relitW",on:!1},{light:"relitE",on:!1},{light:"relitHall",on:!1}]},{when:{use:[2,15]},do:[{notice:"THE WEST SEAL IS DOWN"},{shake:2},{lower:[17,13,18,13],to:.5,speed:.5},{say:"THE WEST SEAL IS DOWN. HEAR THAT BELL? THE ENGINE HEARD IT TOO. HOLLOWS, DOWN BELOW!"},{after:2.5,do:[{wave:"answer1",spawn:[{kind:"imp",x:2,z:27},{kind:"imp",x:1,z:28}]}]}]},{when:{use:[33,15]},do:[{notice:"THE EAST SEAL IS DOWN"},{shake:2},{lower:[17,15,18,15],to:.5,speed:.5},{say:"THE EAST SEAL IS DOWN. SOMETHING'S COMING OVER THE BRIDGE!"},{after:2.5,do:[{wave:"answer2",spawn:[{kind:"gnasher",x:33,z:27},{kind:"imp",x:31,z:28}]}]}]},{when:{use:[9,15]},do:[{notice:"THE GALLERY SEAL IS DOWN"},{shake:2},{lower:[17,17,18,17],to:.5,speed:.5},{say:"THE GALLERY SEAL IS DOWN. HOLLOWS IN THE HALL! YOU'VE GOT THE HIGH GROUND, USE IT."},{after:2.5,do:[{wave:"answer3",spawn:[{kind:"imp",x:11,z:25},{kind:"imp",x:24,z:25},{kind:"gnasher",x:17,z:28}]}]}]},{when:{enter:[9,2,26,9]},do:[{seal:["17,11","18,11"]},{notice:"THE RESET WARDEN!"},{shake:3},{say:"THAT'S THE WARDEN. IT WAS A KNIGHT ONCE, SWORN TO A FIRE DRAKE, UNTIL THE OVERSEERS HOLLOWED IT OUT. STAY MOVING, USE THE PILLARS, RING IT WITH THE BELL BLASTER."},{after:1.5,do:[{wave:"warden",spawn:[{kind:"knight",x:17,z:6}]}]},{after:9,do:[{wave:"escort",spawn:[{kind:"imp",x:7,z:3},{kind:"imp",x:28,z:3}]}]},{after:16,do:[{say:"IT'S CALLING HOLLOWS OUT OF THE WALLS!"},{shake:2},{wave:"adds1",spawn:[{kind:"gnasher",x:9,z:9},{kind:"gnasher",x:26,z:9},{kind:"imp",x:12,z:2}]}]},{after:26,do:[{say:"HERE COMES EVERYTHING IT'S GOT. DON'T STOP MOVING!"},{shake:3},{wave:"adds2",spawn:[{kind:"imp",x:7,z:9},{kind:"imp",x:28,z:9},{kind:"imp",x:23,z:2},{kind:"gnasher",x:12,z:9},{kind:"gnasher",x:23,z:9}]}]}]},{when:{cleared:"warden"},do:[{notice:"THE ENGINE IS SILENT"},{shake:4},{light:"engine",on:!1},{light:"core",on:!1},{light:"relit",on:!0},{light:"relitW",on:!0},{light:"relitE",on:!0},{light:"relitHall",on:!0},{lava:[13,7,22,9],on:!1},{lava:[15,21,20,26],on:!1},{open:["17,11","18,11"]},{say:"YOU DID IT! THE ENGINE'S SILENT AND THE CITY'S LIGHTS ARE COMING BACK. THE WAYSTONE'S BEHIND IT. COME FIND ME AFTER."},{lower:[17,1,18,1],to:.5,speed:1}]}],triggers:[{box:[14,35,21,38],say:"THIS STREET USED TO BE THE TOP OF THE CITY. THE OVERSEERS' ENGINE IS BURYING IT. THE BELL BLASTER'S RIGHT THERE, GRAB IT."},{box:[12,32,23,34],say:"THERE IT IS: THE RESET ENGINE. THREE SEALS BLOCK THE WAY IN. EACH ONE HAS A LEVER: WEST, EAST, AND UP ON THAT GALLERY."},{box:[1,19,4,29],say:"THE BELL WORKS. THE LEVER'S UP THE TOWER. THE STAIRS START AT THE BOTTOM."},{box:[31,23,34,29],say:"CAREFUL, THAT CHANNEL IS RED MERCURY. TAKE THE BRIDGE. THE HOUNDS WON'T WAIT."},{box:[14,12,21,17],say:"ALL THREE SEALS ARE DOWN. THE WARDEN'S BEHIND THOSE DOORS. HEALTH AND AMMO FIRST?"}],lights:[{id:"core",x:17.5,z:23.5,y:3.5,color:16722480,intensity:5,dist:16},{id:"engine",x:17.5,z:6.5,y:3.5,color:16722480,intensity:4.5,dist:16},{id:"relit",x:17.5,z:7.5,y:3,color:9433343,intensity:12,dist:22},{id:"relitW",x:9.5,z:5.5,y:3,color:9433343,intensity:6,dist:12},{id:"relitE",x:25.5,z:5.5,y:3,color:9433343,intensity:6,dist:12},{id:"relitHall",x:17.5,z:23.5,y:5,color:9433343,intensity:9,dist:20},{id:"bells",x:2.5,z:22,y:3.5,color:9429247,intensity:2.4,dist:11},{id:"foundry",x:32.5,z:21,y:1.5,color:16722480,intensity:3,dist:10},{id:"street",x:17.5,z:37,y:2.4,color:16760960,intensity:1.4,dist:8,flicker:!0}],darkZones:[[14,35,21,38]]};var Td={name:"E1M4: RILEY'S TRIAL",floor:"slab",ceil:"ceilDark",par:300,playerAngle:-1.5707963,ceilHeight:2.5,map:["####TTTTTTTTTTTTTTTTTTTTTTTTTTTT####","####T....b................b....T####","####T.t......................t.T####","####T.A....M.....Y......M....+.T####","####T..........................T####","####T..........................T####","####T..........................T####","####T..........................T####","####T..........................T####","####T......M............M......T####","####T.a......................a.T####","####T.t......................t.T####","####T....h.......a........h....T####","####TTTTTTTT............TTTTTTTT####","###########T...a....b...T###########","###########T............T###HHHHHHHH","#.....a####TTTTTT..TTTTTT###H....+.H","#...i..#########MRRM########H..r...H","#..u...#########M..M########H......H","#......#########M..M########H~~~~~~H","#.#..L.#########M..M########H~~~~~~H","#.#....#%%%%%%%%MUUM%%%%%%%%H~~~~~~H","#.#....#........t..t........H~~~~~~H","#.#....#t.i................tH~~~~~~H","#.#....D....................D......H","#.#....#...M............M...H......H","#.#.b..#....................H......H","#.#....#....................H.a....=","#.#a...#t..................tH......H","#......D.....M........M.....D......H","#..i.h.#....h...............H....gbH","#......#..................o.H......H","###S####.o..................HHHHHHHH","##...##%....................%#######","##*PA##%%%%%%%........%%%%%%%#######","#############%..a.b...%#############","#############%...p....%#############","#############%t......t%#############","#############%%%%%%%%%%#############"],heights:["000000000000000000000000000000000000","000008884444444444444444444488800000","000008884444444444444444444488800000","000008884444444444444444444488800000","000008884444444444444444444488800000","000008884444444444444444444488800000","000008887654444444444444456788800000","000008884444444444444444444488800000","000008884444444444444444444488800000","000008884444444444444444444488800000","000008884444554444444455444488800000","000008884444664444444466444488800000","000004444444774444444477444444400000","000000000000888888888888000000000000","000000000000888888888888000000000000","000000000000888888888888000000000000","0cccccc00000000008800000000004444440","0cccccc00000000008800000000004444440","0cccccc00000000007700000000004444440","0cccccc00000000006600000000003333330","0c444c400000000005500000000003333330","0c4444400000000004400000000003333330","0c4444404444444444444444444403333330","0c4444404444444444444444444403333330","0c4444404444444444444444444404444440","0c4444404444444444444444444404444440","0a4444404444444444444444444404444440","084444404444444444444444444404444440","064444404444444444444444444404444440","044444404444444444444444444404444440","044444404444444444444444444404444440","044444404444444455554444444404444440","000000004444444466664444444400000000","004440004444444477774444444400000000","004440000000008888888800000000000000","000000000000008888888800000000000000","000000000000008888888800000000000000","000000000000008888888800000000000000","000000000000000000000000000000000000"],ceilings:["....................................",".....qqqqqqqqqqqqqqqqqqqqqqqqqq.....",".....qqqqqqqqqqqqqqqqqqqqqqqqqq.....",".....qqqqqqqqqqqqqqqqqqqqqqqqqq.....",".....qqqqqqqqqqqqqqqqqqqqqqqqqq.....",".....qqqqqqqqqqqqqqqqqqqqqqqqqq.....",".....qqqqqqqqqqqqqqqqqqqqqqqqqq.....",".....qqqqqqqqqqqqqqqqqqqqqqqqqq.....",".....qqqqqqqqqqqqqqqqqqqqqqqqqq.....",".....qqqqqqqqqqqqqqqqqqqqqqqqqq.....",".....qqqqqqqqqqqqqqqqqqqqqqqqqq.....",".....qqqqqqqqqqqqqqqqqqqqqqqqqq.....",".....qqqqqqqqqqqqqqqqqqqqqqqqqq.....","............qqqqqqqqqqqq............","............qqqqqqqqqqqq............","............qqqqqqqqqqqq............",".qqqqqq..........mm..........qqqqqq.",".qqqqqq..........mm..........qqqqqq.",".qqqqqq..........mm..........qqqqqq.",".qqqqqq..........mm..........qqqqqq.",".qqqqqq..........mm..........qqqqqq.",".qqqqqq..........mm..........qqqqqq.",".qqqqqq.qqqqqqqqqqqqqqqqqqqq.qqqqqq.",".qqqqqq.qqqqqqqqqqqqqqqqqqqq.qqqqqq.",".qqqqqq.qqqqqqqqqqqqqqqqqqqq.qqqqqq.",".qqqqqq.qqqqqqqqqqqqqqqqqqqq.qqqqqq.",".qqqqqq.qqqqqqqqqqqqqqqqqqqq.qqqqqq.",".qqqqqq.qqqqqqqqqqqqqqqqqqqq.qqqqqq.",".qqqqqq.qqqqqqqqqqqqqqqqqqqq.qqqqqq.",".qqqqqq.qqqqqqqqqqqqqqqqqqqq.qqqqqq.",".qqqqqq.qqqqqqqqqqqqqqqqqqqq.qqqqqq.",".qqqqqq.qqqqqqqqqqqqqqqqqqqq.qqqqqq.","........qqqqqqqqqqqqqqqqqqqq........","..qqq...qqqqqqqqqqqqqqqqqqqq........","..qqq.........qqqqqqqq..............","..............qqqqqqqq..............","..............qqqqqqqq..............","..............qqqqqqqq..............","...................................."],intro:["THE TOP OF THE WORLD. A SEALED WAYSTONE.","RILEY REMEMBERS HOW YOU FOUGHT."],events:[{when:{use:[35,27]},do:[{notice:"THE MERCURY IS DRAINING!"},{shake:2},{lava:[29,19,34,23],on:!1},{raise:[29,19,34,23],to:1,speed:.8},{say:"THERE IT GOES. THE KEYSTONE'S ON THE ISLAND. WATCH OUT, THE HOLLOWS HEARD THAT."},{after:3,do:[{wave:"island",spawn:[{kind:"imp",x:32,z:16},{kind:"imp",x:30,z:16}]}]}]},{when:{pickup:"u"},do:[{say:"GOT IT! CAREFUL, SOMETHING HEARD YOU. LOOK DOWN."},{after:1.5,do:[{wave:"ashAnswer",spawn:[{kind:"imp",x:4,z:29},{kind:"imp",x:5,z:31}]}]}]},{when:{enter:[5,1,30,12]},do:[{seal:["17,17","18,17"]},{notice:"RILEY'S TRIAL"},{shake:1},{after:42,do:[{notice:"THE FLOOR IS MOVING!"},{shake:2}]},{after:44,do:[{raise:[14,4,14,4],to:2,speed:.8},{raise:[21,4,21,4],to:2,speed:.8},{raise:[14,8,14,8],to:2,speed:.8},{raise:[21,8,21,8],to:2,speed:.8}]}]}],triggers:[{box:[14,34,21,37],say:"YOU MADE IT TO THE TOP OF THE WORLD. MY TRIAL IS PAST THAT GATE. TWO KEYSTONES OPEN IT: ONE IN THE TRIAL OF ASH, WEST, ONE IN THE TRIAL OF MERCURY, EAST."},{box:[1,20,6,31],say:"THE TRIAL OF ASH. EVERYTHING FROM THE GATES: JUMP UP THE STEPS, OR RIDE THE LIFT."},{box:[29,24,34,31],say:"THE TRIAL OF MERCURY. YOU'VE DRAINED ONE OF THESE BEFORE. FIND THE SWITCH."},{box:[17,18,18,20],say:"BOTH KEYSTONES. OKAY. COME UP AND SHOW ME WHAT YOU'VE LEARNED."}],lights:[{id:"beam",x:17.5,z:6.5,y:6,color:9433343,intensity:6,dist:26},{id:"arenaW",x:7.5,z:6.5,y:3,color:9429247,intensity:2.5,dist:12},{id:"arenaE",x:27.5,z:6.5,y:3,color:9429247,intensity:2.5,dist:12},{id:"ash",x:3.5,z:24,y:3,color:16752736,intensity:2.4,dist:12},{id:"mercury",x:31.5,z:21,y:1.5,color:16722480,intensity:3,dist:10},{id:"court",x:17.5,z:27,y:5,color:16769200,intensity:2,dist:16}]};var Ym={name:"E1M1: ASH GATES",floor:"slab",ceil:"ceilDark",par:240,playerAngle:0,ceilHeight:2.5,boss:{sparring:!0,hpScale:.65,moves:["volley","lead","flank","close","backoff","seek"],intro:"THERE YOU ARE! LET'S SPAR. I'LL WATCH HOW YOU FIGHT. READY?"},events:[{when:{enter:[2,17,19,21]},do:[{lower:[7,22,7,24],to:0,speed:1.2,look:1},{say:"HEAR THAT? A SHORTCUT BACK TO WHERE YOU STARTED JUST OPENED."}]},{when:{enter:[15,1,28,8]},do:[{after:16,do:[{say:"HOLLOWS! THEY HEARD US. KEEP GOING, WE CAN TAKE THEM TOO."},{shake:2},{wave:"sparAdds",spawn:[{kind:"imp",x:15,z:2},{kind:"imp",x:28,z:2},{kind:"imp",x:21,z:1},{kind:"gnasher",x:21,z:8}]}]}]}],triggers:[{box:[2,25,8,30],say:"HI! I'M RILEY. I'M WAITING FOR YOU AT THE TOP. LOOK AROUND WITH THE MOUSE, MOVE WITH WASD, THEN HEAD FOR THAT DOOR AHEAD."},{box:[7,26,9,28],say:"DOORS OPEN WITH E. GO ON, TRY IT."},{box:[15,23,28,29],say:"SEE THE BELL BLASTER UP THERE? JUMP WITH SPACE."},{box:[14,20,28,22],say:"NICE VIEW. THE BLUE KEYSTONE IS DOWN IN THE HALL. THE BLUE DOOR IS ACROSS FROM YOU."},{box:[2,17,5,21],say:"GOT IT? NOW THE BLUE DOOR. THE LIFT BEHIND IT BRINGS YOU UP TO ME."},{box:[20,11,28,15],say:"LAST STOP. GRAB WHAT YOU NEED. WHEN MY VISOR FLASHES WHITE, I'M ABOUT TO SHOOT. MOVE!"}],map:["##############################","##############.t...........t.#","##############......a........#","##############....T..Y..T....#","##############....T.....T....#","##############.h...........h.#","##############...............#","##############....T.....T....#","##############..b....a....b..#","##############........t.t....#","#######################D######","####################..t.t....#","####################.........#","####################.....+...#","####################....A....#","####################...L.....#","#######################U######","##....................t.t...##","##.t......%%......%%..g.....##","##u...g......................##","##.t.......h................##","##..........................##","#######.############D#########","###*Pa#.#######....t.t......##","####S##.#######...........o.##","##.......######..........io.##","##.....b.######......h......##","##..p....D........2.........##","##.......######..o..........##","##.......######.t.........t.##","##...h...#####################","##############################"],heights:["000000000000000000000000000000","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","000000000000000000000000000000","000000000000000000008888888880","000000000000000000008888888880","000000000000000000008888888880","000000000000000000008888888880","000000000000000000008888888880","000000000000000000000000000000","000000000000000000000000000000","000000000000000000000000000000","000000000000000000000000000000","000000000001234444444444444400","000000000001234444444444444400","0000000a0000000000000000000000","0000000a0000000444444444444440","0000000a0000000444444444444440","000000000000000444444444444440","000000000000000446664444444440","000000000012344446664444444440","000000000000000446664444444440","000000000000000444444444444440","000000000000000000000000000000","000000000000000000000000000000"],ceilings:["..............................","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............................","....................iiiiiiiii.","....................iiiiiiiii.","....................iiiiiiiii.","....................iiiiiiiii.","....................iiiiiiiii.","..............................","..gggggggggggggggggggggggggg..","..gggggggggggggggggggggggggg..","..gggggggggggggggggggggggggg..","..gggggggggggggggggggggggggg..","..gggggggggggggggggggggggggg..","..............................","...............eeeeeeeeeeeeee.","...............eeeeeeeeeeeeee.","...............eeeeeeeeeeeeee.","...............eeeeeeeeeeeeee.",".........cccccceeeeeeeeeeeeee.","...............eeeeeeeeeeeeee.","...............eeeeeeeeeeeeee.","..............................",".............................."]},bi=[Ym,Sd,bd,Td];function Hu(i){var e=i>>>0||1;return function(){e=e+1831565813|0;var t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var lp=0,_h=1,cp=2;var oo=1,up=2,ia=3,Yi=0,En=1,wn=2,fi=0,ra=1,di=2,yh=3,Mh=4,hp=5;var us=100,fp=101,dp=102,pp=103,mp=104,gp=200,vp=201,xp=202,_p=203,Sh=204,bh=205,yp=206,Mp=207,Sp=208,bp=209,Tp=210,Ep=211,wp=212,Ap=213,Rp=214,Rl=0,Cl=1,Il=2,Hs=3,Pl=4,Ll=5,Nl=6,Dl=7,tc=0,Cp=1,Ip=2,Li=0,lo=1,co=2,uo=3,hs=4,ho=5,fo=6,po=7,uh="attached",Pp="detached",Th=300,Ur=301,fs=302,nc=303,ic=304,mo=306,ui=1e3,ci=1001,ks=1002,jt=1003,rc=1004;var ds=1005;var un=1006,sa=1007;var Ni=1008;var Wn=1009,Eh=1010,wh=1011,aa=1012,sc=1013,Di=1014,$n=1015,An=1016,ac=1017,oc=1018,oa=1020,Ah=35902,Rh=35899,Ch=1021,Ih=1022,Qn=1023,qi=1026,Fr=1027,lc=1028,cc=1029,Br=1030,uc=1031;var hc=1033,go=33776,vo=33777,xo=33778,_o=33779,fc=35840,dc=35841,pc=35842,mc=35843,gc=36196,vc=37492,xc=37496,_c=37488,yc=37489,yo=37490,Mc=37491,Sc=37808,bc=37809,Tc=37810,Ec=37811,wc=37812,Ac=37813,Rc=37814,Cc=37815,Ic=37816,Pc=37817,Lc=37818,Nc=37819,Dc=37820,Oc=37821,Uc=36492,Fc=36494,Bc=36495,Hc=36283,kc=36284,Mo=36285,qc=36286,zc=2200,Gc=2201,Lp=2202,es=2300,ts=2301,El=2302,hh=2303,jr=2400,$r=2401,Fa=2402,Vc=2500,Np=2501,Ph=0,So=1,la=2,Dp=3200;var bo=0,Op=1,ei="",Jt="srgb",Fn="srgb-linear",Ba="linear",Bt="srgb";var wl=7680;var Up=519,Fp=512,Bp=513,Hp=514,Wc=515,kp=516,qp=517,Xc=518,zp=519,Lh=35044,vr=35048;var Nh="300 es",Ci=2e3,qs=2001;function Km(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Zm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function zs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gp(){let i=zs("canvas");return i.style.display="block",i}var Ed={},Gs=null;function Ha(...i){let e="THREE."+i.shift();Gs?Gs("log",e,...i):console.log(e,...i)}function Vp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function at(...i){i=Vp(i);let e="THREE."+i.shift();if(Gs)Gs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function dt(...i){i=Vp(i);let e="THREE."+i.shift();if(Gs)Gs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Qr(...i){let e=i.join(" ");e in Ed||(Ed[e]=!0,at(...i))}function Wp(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var Xp={[Rl]:Cl,[Il]:Nl,[Pl]:Dl,[Hs]:Ll,[Cl]:Rl,[Nl]:Il,[Dl]:Pl,[Ll]:Hs},Pi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wd=1234567,Oa=Math.PI/180,ns=180/Math.PI;function Ii(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(In[i&255]+In[i>>8&255]+In[i>>16&255]+In[i>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[t&63|128]+In[t>>8&255]+"-"+In[t>>16&255]+In[t>>24&255]+In[n&255]+In[n>>8&255]+In[n>>16&255]+In[n>>24&255]).toLowerCase()}function Rt(i,e,t){return Math.max(e,Math.min(t,i))}function Dh(i,e){return(i%e+e)%e}function Jm(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function jm(i,e,t){return i!==e?(t-i)/(e-i):0}function Ua(i,e,t){return(1-t)*i+t*e}function $m(i,e,t,n){return Ua(i,e,1-Math.exp(-t*n))}function Qm(i,e=1){return e-Math.abs(Dh(i,e*2)-e)}function eg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function tg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ng(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ig(i,e){return i+Math.random()*(e-i)}function rg(i){return i*(.5-Math.random())}function sg(i){i!==void 0&&(wd=i);let e=wd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ag(i){return i*Oa}function og(i){return i*ns}function lg(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function cg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ug(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hg(i,e,t,n,r){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),u=s((e+n)/2),l=a((e+n)/2),h=s((e-n)/2),f=a((e-n)/2),p=s((n-e)/2),v=a((n-e)/2);switch(r){case"XYX":i.set(o*l,c*h,c*f,o*u);break;case"YZY":i.set(c*f,o*l,c*h,o*u);break;case"ZXZ":i.set(c*h,c*f,o*l,o*u);break;case"XZX":i.set(o*l,c*v,c*p,o*u);break;case"YXY":i.set(c*p,o*l,c*v,o*u);break;case"ZYZ":i.set(c*v,c*p,o*l,o*u);break;default:at("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ri(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Oh={DEG2RAD:Oa,RAD2DEG:ns,generateUUID:Ii,clamp:Rt,euclideanModulo:Dh,mapLinear:Jm,inverseLerp:jm,lerp:Ua,damp:$m,pingpong:Qm,smoothstep:eg,smootherstep:tg,randInt:ng,randFloat:ig,randFloatSpread:rg,seededRandom:sg,degToRad:ag,radToDeg:og,isPowerOfTwo:lg,ceilPowerOfTwo:cg,floorPowerOfTwo:ug,setQuaternionFromProperEuler:hg,normalize:Vt,denormalize:Ri},kh=class kh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};kh.prototype.isVector2=!0;var ot=kh,Ln=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],u=n[r+1],l=n[r+2],h=n[r+3],f=s[a+0],p=s[a+1],v=s[a+2],_=s[a+3];if(h!==_||c!==f||u!==p||l!==v){let g=c*f+u*p+l*v+h*_;g<0&&(f=-f,p=-p,v=-v,_=-_,g=-g);let m=1-o;if(g<.9995){let x=Math.acos(g),E=Math.sin(x);m=Math.sin(m*x)/E,o=Math.sin(o*x)/E,c=c*m+f*o,u=u*m+p*o,l=l*m+v*o,h=h*m+_*o}else{c=c*m+f*o,u=u*m+p*o,l=l*m+v*o,h=h*m+_*o;let x=1/Math.sqrt(c*c+u*u+l*l+h*h);c*=x,u*=x,l*=x,h*=x}}e[t]=c,e[t+1]=u,e[t+2]=l,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],c=n[r+1],u=n[r+2],l=n[r+3],h=s[a],f=s[a+1],p=s[a+2],v=s[a+3];return e[t]=o*v+l*h+c*p-u*f,e[t+1]=c*v+l*f+u*h-o*p,e[t+2]=u*v+l*p+o*f-c*h,e[t+3]=l*v-o*h-c*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(n/2),l=o(r/2),h=o(s/2),f=c(n/2),p=c(r/2),v=c(s/2);switch(a){case"XYZ":this._x=f*l*h+u*p*v,this._y=u*p*h-f*l*v,this._z=u*l*v+f*p*h,this._w=u*l*h-f*p*v;break;case"YXZ":this._x=f*l*h+u*p*v,this._y=u*p*h-f*l*v,this._z=u*l*v-f*p*h,this._w=u*l*h+f*p*v;break;case"ZXY":this._x=f*l*h-u*p*v,this._y=u*p*h+f*l*v,this._z=u*l*v+f*p*h,this._w=u*l*h-f*p*v;break;case"ZYX":this._x=f*l*h-u*p*v,this._y=u*p*h+f*l*v,this._z=u*l*v-f*p*h,this._w=u*l*h+f*p*v;break;case"YZX":this._x=f*l*h+u*p*v,this._y=u*p*h+f*l*v,this._z=u*l*v-f*p*h,this._w=u*l*h-f*p*v;break;case"XZY":this._x=f*l*h-u*p*v,this._y=u*p*h-f*l*v,this._z=u*l*v+f*p*h,this._w=u*l*h+f*p*v;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],u=t[2],l=t[6],h=t[10],f=n+o+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(l-c)*p,this._y=(s-u)*p,this._z=(a-r)*p}else if(n>o&&n>h){let p=2*Math.sqrt(1+n-o-h);this._w=(l-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+u)/p}else if(o>h){let p=2*Math.sqrt(1+o-n-h);this._w=(s-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+l)/p}else{let p=2*Math.sqrt(1+h-n-o);this._w=(a-r)/p,this._x=(s+u)/p,this._y=(c+l)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,u=t._z,l=t._w;return this._x=n*l+a*o+r*u-s*c,this._y=r*l+a*c+s*o-n*u,this._z=s*l+a*u+n*c-r*o,this._w=a*l-n*o-r*c-s*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){let u=Math.acos(o),l=Math.sin(u);c=Math.sin(c*u)/l,t=Math.sin(t*u)/l,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},qh=class qh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ad.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ad.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*r-o*n),l=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+c*u+a*h-o*l,this.y=n+c*l+o*u-s*h,this.z=r+c*h+s*l-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ku.copy(this).projectOnVector(e),this.sub(ku)}reflect(e){return this.sub(ku.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};qh.prototype.isVector3=!0;var j=qh,ku=new j,Ad=new Ln,zh=class zh{constructor(e,t,n,r,s,a,o,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,u)}set(e,t,n,r,s,a,o,c,u){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=s,l[5]=c,l[6]=n,l[7]=a,l[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],l=n[4],h=n[7],f=n[2],p=n[5],v=n[8],_=r[0],g=r[3],m=r[6],x=r[1],E=r[4],M=r[7],w=r[2],A=r[5],P=r[8];return s[0]=a*_+o*x+c*w,s[3]=a*g+o*E+c*A,s[6]=a*m+o*M+c*P,s[1]=u*_+l*x+h*w,s[4]=u*g+l*E+h*A,s[7]=u*m+l*M+h*P,s[2]=f*_+p*x+v*w,s[5]=f*g+p*E+v*A,s[8]=f*m+p*M+v*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],l=e[8];return t*a*l-t*o*u-n*s*l+n*o*c+r*s*u-r*a*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],l=e[8],h=l*a-o*u,f=o*c-l*s,p=u*s-a*c,v=t*h+n*f+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/v;return e[0]=h*_,e[1]=(r*u-l*n)*_,e[2]=(o*n-r*a)*_,e[3]=f*_,e[4]=(l*t-r*c)*_,e[5]=(r*s-o*t)*_,e[6]=p*_,e[7]=(n*c-u*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*a+u*o)+a+e,-r*u,r*c,-r*(-u*a+c*o)+o+t,0,0,1),this}scale(e,t){return Qr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qu.makeScale(e,t)),this}rotate(e){return Qr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qu.makeRotation(-e)),this}translate(e,t){return Qr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};zh.prototype.isMatrix3=!0;var pt=zh,qu=new pt,Rd=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cd=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fg(){let i={enabled:!0,workingColorSpace:Fn,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Bt&&(r.r=lr(r.r),r.g=lr(r.g),r.b=lr(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Bt&&(r.r=Bs(r.r),r.g=Bs(r.g),r.b=Bs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ei?Ba:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Qr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Qr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Fn]:{primaries:e,whitePoint:n,transfer:Ba,toXYZ:Rd,fromXYZ:Cd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Jt},outputColorSpaceConfig:{drawingBufferColorSpace:Jt}},[Jt]:{primaries:e,whitePoint:n,transfer:Bt,toXYZ:Rd,fromXYZ:Cd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Jt}}}),i}var bt=fg();function lr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ts,Ol=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ts===void 0&&(Ts=zs("canvas")),Ts.width=e.width,Ts.height=e.height;let r=Ts.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ts}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=zs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=lr(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(lr(t[n]/255)*255):t[n]=lr(t[n]);return{data:t,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},dg=0,Vs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=Ii(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(zu(r[a].image)):s.push(zu(r[a]))}else s=zu(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function zu(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Ol.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}var pg=0,Gu=new j,hn=class i extends Pi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ci,r=ci,s=un,a=Ni,o=Qn,c=Wn,u=i.DEFAULT_ANISOTROPY,l=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pg++}),this.uuid=Ii(),this.name="",this.source=new Vs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Gu).x}get height(){return this.source.getSize(Gu).y}get depth(){return this.source.getSize(Gu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){at(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){at(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Th)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ui:e.x=e.x-Math.floor(e.x);break;case ci:e.x=e.x<0?0:1;break;case ks:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ui:e.y=e.y-Math.floor(e.y);break;case ci:e.y=e.y<0?0:1;break;case ks:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Th;hn.DEFAULT_ANISOTROPY=1;var Gh=class Gh{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,u=c[0],l=c[4],h=c[8],f=c[1],p=c[5],v=c[9],_=c[2],g=c[6],m=c[10];if(Math.abs(l-f)<.01&&Math.abs(h-_)<.01&&Math.abs(v-g)<.01){if(Math.abs(l+f)<.1&&Math.abs(h+_)<.1&&Math.abs(v+g)<.1&&Math.abs(u+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(u+1)/2,M=(p+1)/2,w=(m+1)/2,A=(l+f)/4,P=(h+_)/4,y=(v+g)/4;return E>M&&E>w?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=A/n,s=P/n):M>w?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=A/r,s=y/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=P/s,r=y/s),this.set(n,r,s,t),this}let x=Math.sqrt((g-v)*(g-v)+(h-_)*(h-_)+(f-l)*(f-l));return Math.abs(x)<.001&&(x=1),this.x=(g-v)/x,this.y=(h-_)/x,this.z=(f-l)/x,this.w=Math.acos((u+p+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this.w=Rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this.w=Rt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Gh.prototype.isVector4=!0;var Xt=Gh,Ul=class extends Pi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Xt(0,0,e,t),this.scissorTest=!1,this.viewport=new Xt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},s=new hn(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Vs(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},mn=class extends Ul{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ka=class extends hn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Fl=class extends hn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ec=class ec{constructor(e,t,n,r,s,a,o,c,u,l,h,f,p,v,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,u,l,h,f,p,v,_,g)}set(e,t,n,r,s,a,o,c,u,l,h,f,p,v,_,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=c,m[2]=u,m[6]=l,m[10]=h,m[14]=f,m[3]=p,m[7]=v,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ec().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Es.setFromMatrixColumn(e,0).length(),s=1/Es.setFromMatrixColumn(e,1).length(),a=1/Es.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),u=Math.sin(r),l=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let f=a*l,p=a*h,v=o*l,_=o*h;t[0]=c*l,t[4]=-c*h,t[8]=u,t[1]=p+v*u,t[5]=f-_*u,t[9]=-o*c,t[2]=_-f*u,t[6]=v+p*u,t[10]=a*c}else if(e.order==="YXZ"){let f=c*l,p=c*h,v=u*l,_=u*h;t[0]=f+_*o,t[4]=v*o-p,t[8]=a*u,t[1]=a*h,t[5]=a*l,t[9]=-o,t[2]=p*o-v,t[6]=_+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*l,p=c*h,v=u*l,_=u*h;t[0]=f-_*o,t[4]=-a*h,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*l,t[9]=_-f*o,t[2]=-a*u,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*l,p=a*h,v=o*l,_=o*h;t[0]=c*l,t[4]=v*u-p,t[8]=f*u+_,t[1]=c*h,t[5]=_*u+f,t[9]=p*u-v,t[2]=-u,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,p=a*u,v=o*c,_=o*u;t[0]=c*l,t[4]=_-f*h,t[8]=v*h+p,t[1]=h,t[5]=a*l,t[9]=-o*l,t[2]=-u*l,t[6]=p*h+v,t[10]=f-_*h}else if(e.order==="XZY"){let f=a*c,p=a*u,v=o*c,_=o*u;t[0]=c*l,t[4]=-h,t[8]=u*l,t[1]=f*h+_,t[5]=a*l,t[9]=p*h-v,t[2]=v*h-p,t[6]=o*l,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mg,e,gg)}lookAt(e,t,n){let r=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),br.crossVectors(n,Zn),br.lengthSq()===0&&(Math.abs(n.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),br.crossVectors(n,Zn)),br.normalize(),el.crossVectors(Zn,br),r[0]=br.x,r[4]=el.x,r[8]=Zn.x,r[1]=br.y,r[5]=el.y,r[9]=Zn.y,r[2]=br.z,r[6]=el.z,r[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],l=n[1],h=n[5],f=n[9],p=n[13],v=n[2],_=n[6],g=n[10],m=n[14],x=n[3],E=n[7],M=n[11],w=n[15],A=r[0],P=r[4],y=r[8],S=r[12],L=r[1],U=r[5],D=r[9],Y=r[13],G=r[2],C=r[6],N=r[10],I=r[14],q=r[3],V=r[7],J=r[11],re=r[15];return s[0]=a*A+o*L+c*G+u*q,s[4]=a*P+o*U+c*C+u*V,s[8]=a*y+o*D+c*N+u*J,s[12]=a*S+o*Y+c*I+u*re,s[1]=l*A+h*L+f*G+p*q,s[5]=l*P+h*U+f*C+p*V,s[9]=l*y+h*D+f*N+p*J,s[13]=l*S+h*Y+f*I+p*re,s[2]=v*A+_*L+g*G+m*q,s[6]=v*P+_*U+g*C+m*V,s[10]=v*y+_*D+g*N+m*J,s[14]=v*S+_*Y+g*I+m*re,s[3]=x*A+E*L+M*G+w*q,s[7]=x*P+E*U+M*C+w*V,s[11]=x*y+E*D+M*N+w*J,s[15]=x*S+E*Y+M*I+w*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],u=e[13],l=e[2],h=e[6],f=e[10],p=e[14],v=e[3],_=e[7],g=e[11],m=e[15],x=c*p-u*f,E=o*p-u*h,M=o*f-c*h,w=a*p-u*l,A=a*f-c*l,P=a*h-o*l;return t*(_*x-g*E+m*M)-n*(v*x-g*w+m*A)+r*(v*E-_*w+m*P)-s*(v*M-_*A+g*P)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],u=e[6],l=e[10];return t*(a*l-o*u)-n*(s*l-o*c)+r*(s*u-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],l=e[8],h=e[9],f=e[10],p=e[11],v=e[12],_=e[13],g=e[14],m=e[15],x=t*o-n*a,E=t*c-r*a,M=t*u-s*a,w=n*c-r*o,A=n*u-s*o,P=r*u-s*c,y=l*_-h*v,S=l*g-f*v,L=l*m-p*v,U=h*g-f*_,D=h*m-p*_,Y=f*m-p*g,G=x*Y-E*D+M*U+w*L-A*S+P*y;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/G;return e[0]=(o*Y-c*D+u*U)*C,e[1]=(r*D-n*Y-s*U)*C,e[2]=(_*P-g*A+m*w)*C,e[3]=(f*A-h*P-p*w)*C,e[4]=(c*L-a*Y-u*S)*C,e[5]=(t*Y-r*L+s*S)*C,e[6]=(g*M-v*P-m*E)*C,e[7]=(l*P-f*M+p*E)*C,e[8]=(a*D-o*L+u*y)*C,e[9]=(n*L-t*D-s*y)*C,e[10]=(v*A-_*M+m*x)*C,e[11]=(h*M-l*A-p*x)*C,e[12]=(o*S-a*U-c*y)*C,e[13]=(t*U-n*S+r*y)*C,e[14]=(_*E-v*w-g*x)*C,e[15]=(l*w-h*E+f*x)*C,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,u=s*a,l=s*o;return this.set(u*a+n,u*o-r*c,u*c+r*o,0,u*o+r*c,l*o+n,l*c-r*a,0,u*c-r*o,l*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,u=s+s,l=a+a,h=o+o,f=s*u,p=s*l,v=s*h,_=a*l,g=a*h,m=o*h,x=c*u,E=c*l,M=c*h,w=n.x,A=n.y,P=n.z;return r[0]=(1-(_+m))*w,r[1]=(p+M)*w,r[2]=(v-E)*w,r[3]=0,r[4]=(p-M)*A,r[5]=(1-(f+m))*A,r[6]=(g+x)*A,r[7]=0,r[8]=(v+E)*P,r[9]=(g-x)*P,r[10]=(1-(f+_))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Es.set(r[0],r[1],r[2]).length(),o=Es.set(r[4],r[5],r[6]).length(),c=Es.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Ti.copy(this);let u=1/a,l=1/o,h=1/c;return Ti.elements[0]*=u,Ti.elements[1]*=u,Ti.elements[2]*=u,Ti.elements[4]*=l,Ti.elements[5]*=l,Ti.elements[6]*=l,Ti.elements[8]*=h,Ti.elements[9]*=h,Ti.elements[10]*=h,t.setFromRotationMatrix(Ti),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=Ci,c=!1){let u=this.elements,l=2*s/(t-e),h=2*s/(n-r),f=(t+e)/(t-e),p=(n+r)/(n-r),v,_;if(c)v=s/(a-s),_=a*s/(a-s);else if(o===Ci)v=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===qs)v=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=l,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=h,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=v,u[14]=_,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Ci,c=!1){let u=this.elements,l=2/(t-e),h=2/(n-r),f=-(t+e)/(t-e),p=-(n+r)/(n-r),v,_;if(c)v=1/(a-s),_=a/(a-s);else if(o===Ci)v=-2/(a-s),_=-(a+s)/(a-s);else if(o===qs)v=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=l,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=h,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=v,u[14]=_,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ec.prototype.isMatrix4=!0;var Mt=ec,Es=new j,Ti=new Mt,mg=new j(0,0,0),gg=new j(1,1,1),br=new j,el=new j,Zn=new j,Id=new Mt,Pd=new Ln,zi=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],l=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-l,p),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Id.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Id,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pd.setFromEuler(this),this.setFromQuaternion(Pd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zi.DEFAULT_ORDER="XYZ";var qa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},vg=0,Ld=new j,ws=new Ln,nr=new Mt,tl=new j,Aa=new j,xg=new j,_g=new Ln,Nd=new j(1,0,0),Dd=new j(0,1,0),Od=new j(0,0,1),Ud={type:"added"},yg={type:"removed"},As={type:"childadded",child:null},Vu={type:"childremoved",child:null},tn=class i extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new j,t=new zi,n=new Ln,r=new j(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new pt}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(Nd,e)}rotateY(e){return this.rotateOnAxis(Dd,e)}rotateZ(e){return this.rotateOnAxis(Od,e)}translateOnAxis(e,t){return Ld.copy(e).applyQuaternion(this.quaternion),this.position.add(Ld.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nd,e)}translateY(e){return this.translateOnAxis(Dd,e)}translateZ(e){return this.translateOnAxis(Od,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(nr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?tl.copy(e):tl.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nr.lookAt(Aa,tl,this.up):nr.lookAt(tl,Aa,this.up),this.quaternion.setFromRotationMatrix(nr),r&&(nr.extractRotation(r.matrixWorld),ws.setFromRotationMatrix(nr),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ud),As.child=e,this.dispatchEvent(As),As.child=null):dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yg),Vu.child=e,this.dispatchEvent(Vu),Vu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),nr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),nr.multiply(e.parent.matrixWorld)),e.applyMatrix4(nr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ud),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Aa,e,xg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Aa,_g,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let u=0,l=c.length;u<l;u++){let h=c[u];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),u=a(e.textures),l=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),l.length>0&&(n.images=l),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){let c=[];for(let u in o){let l=o[u];delete l.metadata,c.push(l)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};tn.DEFAULT_UP=new j(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yt=class extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mg={type:"move"},Ws=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,n),m=this._getHandJoint(u,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let l=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=l.position.distanceTo(h.position),p=.02,v=.005;u.inputState.pinching&&f>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mg)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new yt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Yp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tr={h:0,s:0,l:0},nl={h:0,s:0,l:0};function Wu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var nt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=bt.workingColorSpace){if(e=Dh(e,1),t=Rt(t,0,1),n=Rt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Wu(a,s,e+1/3),this.g=Wu(a,s,e),this.b=Wu(a,s,e-1/3)}return bt.colorSpaceToWorking(this,r),this}setStyle(e,t=Jt){function n(s){s!==void 0&&parseFloat(s)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:at("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){let n=Yp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return bt.workingToColorSpace(Pn.copy(this),e),Math.round(Rt(Pn.r*255,0,255))*65536+Math.round(Rt(Pn.g*255,0,255))*256+Math.round(Rt(Pn.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.workingToColorSpace(Pn.copy(this),t);let n=Pn.r,r=Pn.g,s=Pn.b,a=Math.max(n,r,s),o=Math.min(n,r,s),c,u,l=(o+a)/2;if(o===a)c=0,u=0;else{let h=a-o;switch(u=l<=.5?h/(a+o):h/(2-a-o),a){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=u,e.l=l,e}getRGB(e,t=bt.workingColorSpace){return bt.workingToColorSpace(Pn.copy(this),t),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=Jt){bt.workingToColorSpace(Pn.copy(this),e);let t=Pn.r,n=Pn.g,r=Pn.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Tr),this.setHSL(Tr.h+e,Tr.s+t,Tr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Tr),e.getHSL(nl);let n=Ua(Tr.h,nl.h,t),r=Ua(Tr.s,nl.s,t),s=Ua(Tr.l,nl.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pn=new nt;nt.NAMES=Yp;var za=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new nt(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ir=class extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ei=new j,ir=new j,Xu=new j,rr=new j,Rs=new j,Cs=new j,Fd=new j,Yu=new j,Ku=new j,Zu=new j,Ju=new Xt,ju=new Xt,$u=new Xt,Cr=class i{constructor(e=new j,t=new j,n=new j){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ei.subVectors(e,t),r.cross(Ei);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Ei.subVectors(r,t),ir.subVectors(n,t),Xu.subVectors(e,t);let a=Ei.dot(Ei),o=Ei.dot(ir),c=Ei.dot(Xu),u=ir.dot(ir),l=ir.dot(Xu),h=a*u-o*o;if(h===0)return s.set(0,0,0),null;let f=1/h,p=(u*c-o*l)*f,v=(a*l-o*c)*f;return s.set(1-p-v,v,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,rr)===null?!1:rr.x>=0&&rr.y>=0&&rr.x+rr.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,rr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,rr.x),c.addScaledVector(a,rr.y),c.addScaledVector(o,rr.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Ju.setScalar(0),ju.setScalar(0),$u.setScalar(0),Ju.fromBufferAttribute(e,t),ju.fromBufferAttribute(e,n),$u.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ju,s.x),a.addScaledVector(ju,s.y),a.addScaledVector($u,s.z),a}static isFrontFacing(e,t,n,r){return Ei.subVectors(n,t),ir.subVectors(e,t),Ei.cross(ir).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ei.subVectors(this.c,this.b),ir.subVectors(this.a,this.b),Ei.cross(ir).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;Rs.subVectors(r,n),Cs.subVectors(s,n),Yu.subVectors(e,n);let c=Rs.dot(Yu),u=Cs.dot(Yu);if(c<=0&&u<=0)return t.copy(n);Ku.subVectors(e,r);let l=Rs.dot(Ku),h=Cs.dot(Ku);if(l>=0&&h<=l)return t.copy(r);let f=c*h-l*u;if(f<=0&&c>=0&&l<=0)return a=c/(c-l),t.copy(n).addScaledVector(Rs,a);Zu.subVectors(e,s);let p=Rs.dot(Zu),v=Cs.dot(Zu);if(v>=0&&p<=v)return t.copy(s);let _=p*u-c*v;if(_<=0&&u>=0&&v<=0)return o=u/(u-v),t.copy(n).addScaledVector(Cs,o);let g=l*v-p*h;if(g<=0&&h-l>=0&&p-v>=0)return Fd.subVectors(s,r),o=(h-l)/(h-l+(p-v)),t.copy(r).addScaledVector(Fd,o);let m=1/(g+_+f);return a=_*m,o=f*m,t.copy(n).addScaledVector(Rs,a).addScaledVector(Cs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Nn=class{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,wi):wi.fromBufferAttribute(s,a),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),il.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),il.copy(n.boundingBox)),il.applyMatrix4(e.matrixWorld),this.union(il)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ra),rl.subVectors(this.max,Ra),Is.subVectors(e.a,Ra),Ps.subVectors(e.b,Ra),Ls.subVectors(e.c,Ra),Er.subVectors(Ps,Is),wr.subVectors(Ls,Ps),Yr.subVectors(Is,Ls);let t=[0,-Er.z,Er.y,0,-wr.z,wr.y,0,-Yr.z,Yr.y,Er.z,0,-Er.x,wr.z,0,-wr.x,Yr.z,0,-Yr.x,-Er.y,Er.x,0,-wr.y,wr.x,0,-Yr.y,Yr.x,0];return!Qu(t,Is,Ps,Ls,rl)||(t=[1,0,0,0,1,0,0,0,1],!Qu(t,Is,Ps,Ls,rl))?!1:(sl.crossVectors(Er,wr),t=[sl.x,sl.y,sl.z],Qu(t,Is,Ps,Ls,rl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},sr=[new j,new j,new j,new j,new j,new j,new j,new j],wi=new j,il=new Nn,Is=new j,Ps=new j,Ls=new j,Er=new j,wr=new j,Yr=new j,Ra=new j,rl=new j,sl=new j,Kr=new j;function Qu(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Kr.fromArray(i,s);let o=r.x*Math.abs(Kr.x)+r.y*Math.abs(Kr.y)+r.z*Math.abs(Kr.z),c=e.dot(Kr),u=t.dot(Kr),l=n.dot(Kr);if(Math.max(-Math.max(c,u,l),Math.min(c,u,l))>o)return!1}return!0}var pn=new j,al=new ot,Sg=0,Wt=class extends Pi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Lh,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)al.fromBufferAttribute(this,t),al.applyMatrix3(e),this.setXY(t,al.x,al.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix3(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),r=Vt(r,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ga=class extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Va=class extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ct=class extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}},bg=new Nn,Ca=new j,eh=new j,qn=class{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):bg.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ca.subVectors(e,this.center);let t=Ca.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ca,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ca.copy(e.center).add(eh)),this.expandByPoint(Ca.copy(e.center).sub(eh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Tg=0,li=new Mt,th=new tn,Ns=new j,Jn=new Nn,Ia=new Nn,bn=new j,Yt=class i extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Km(e)?Va:Ga)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new pt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,n){return li.makeTranslation(e,t,n),this.applyMatrix4(li),this}scale(e,t,n){return li.makeScale(e,t,n),this.applyMatrix4(li),this}lookAt(e){return th.lookAt(e),th.updateMatrix(),this.applyMatrix4(th.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ct(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Jn.setFromBufferAttribute(s),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){let n=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Ia.setFromBufferAttribute(o),this.morphTargetsRelative?(bn.addVectors(Jn.min,Ia.min),Jn.expandByPoint(bn),bn.addVectors(Jn.max,Ia.max),Jn.expandByPoint(bn)):(Jn.expandByPoint(Ia.min),Jn.expandByPoint(Ia.max))}Jn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)bn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(bn));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let u=0,l=o.count;u<l;u++)bn.fromBufferAttribute(o,u),c&&(Ns.fromBufferAttribute(e,u),bn.add(Ns)),r=Math.max(r,n.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Wt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let y=0;y<n.count;y++)o[y]=new j,c[y]=new j;let u=new j,l=new j,h=new j,f=new ot,p=new ot,v=new ot,_=new j,g=new j;function m(y,S,L){u.fromBufferAttribute(n,y),l.fromBufferAttribute(n,S),h.fromBufferAttribute(n,L),f.fromBufferAttribute(s,y),p.fromBufferAttribute(s,S),v.fromBufferAttribute(s,L),l.sub(u),h.sub(u),p.sub(f),v.sub(f);let U=1/(p.x*v.y-v.x*p.y);isFinite(U)&&(_.copy(l).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(U),g.copy(h).multiplyScalar(p.x).addScaledVector(l,-v.x).multiplyScalar(U),o[y].add(_),o[S].add(_),o[L].add(_),c[y].add(g),c[S].add(g),c[L].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let y=0,S=x.length;y<S;++y){let L=x[y],U=L.start,D=L.count;for(let Y=U,G=U+D;Y<G;Y+=3)m(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}let E=new j,M=new j,w=new j,A=new j;function P(y){w.fromBufferAttribute(r,y),A.copy(w);let S=o[y];E.copy(S),E.sub(w.multiplyScalar(w.dot(S))).normalize(),M.crossVectors(A,S);let U=M.dot(c[y])<0?-1:1;a.setXYZW(y,E.x,E.y,E.z,U)}for(let y=0,S=x.length;y<S;++y){let L=x[y],U=L.start,D=L.count;for(let Y=U,G=U+D;Y<G;Y+=3)P(e.getX(Y+0)),P(e.getX(Y+1)),P(e.getX(Y+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let r=new j,s=new j,a=new j,o=new j,c=new j,u=new j,l=new j,h=new j;if(e)for(let f=0,p=e.count;f<p;f+=3){let v=e.getX(f+0),_=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),l.subVectors(a,s),h.subVectors(r,s),l.cross(h),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,g),o.add(l),c.add(l),u.add(l),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),l.subVectors(a,s),h.subVectors(r,s),l.cross(h),n.setXYZ(f+0,l.x,l.y,l.z),n.setXYZ(f+1,l.x,l.y,l.z),n.setXYZ(f+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bn.fromBufferAttribute(e,t),bn.normalize(),e.setXYZ(t,bn.x,bn.y,bn.z)}toNonIndexed(){function e(o,c){let u=o.array,l=o.itemSize,h=o.normalized,f=new u.constructor(c.length*l),p=0,v=0;for(let _=0,g=c.length;_<g;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*l;for(let m=0;m<l;m++)f[v++]=u[p++]}return new Wt(f,l,h)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let c=r[o],u=e(c,n);t.setAttribute(o,u)}let s=this.morphAttributes;for(let o in s){let c=[],u=s[o];for(let l=0,h=u.length;l<h;l++){let f=u[l],p=e(f,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let u=n[c];e.data.attributes[c]=u.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let u=this.morphAttributes[c],l=[];for(let h=0,f=u.length;h<f;h++){let p=u[h];l.push(p.toJSON(e.data))}l.length>0&&(r[c]=l,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let u in r){let l=r[u];this.setAttribute(u,l.clone(t))}let s=e.morphAttributes;for(let u in s){let l=[],h=s[u];for(let f=0,p=h.length;f<p;f++)l.push(h[f].clone(t));this.morphAttributes[u]=l}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let u=0,l=a.length;u<l;u++){let h=a[u];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Lh,this.updateRanges=[],this.version=0,this.uuid=Ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Un=new j,Ys=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.applyMatrix4(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.applyNormalMatrix(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.transformDirection(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ri(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),r=Vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),r=Vt(r,this.array),s=Vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Ha("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ha("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},nh=new j,Eg=new j,wg=new pt,Ai=class{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=nh.subVectors(n,t).cross(Eg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(nh),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||wg.getNormalMatrix(e),r=this.coplanarPoint(nh).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ag=0,Bn=class extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=ra,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sh,this.blendDst=bh,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Up,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wl,this.stencilZFail=wl,this.stencilZPass=wl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){at(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){at(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new nt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ai().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ot().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ot().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ar=new j,ih=new j,ol=new j,ll=new j,is=class{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ar)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ar.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ar.copy(this.origin).addScaledVector(this.direction,t),ar.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ih.copy(e).add(t).multiplyScalar(.5),ol.copy(t).sub(e).normalize(),ll.copy(this.origin).sub(ih);let s=e.distanceTo(t)*.5,a=-this.direction.dot(ol),o=ll.dot(this.direction),c=-ll.dot(ol),u=ll.lengthSq(),l=Math.abs(1-a*a),h,f,p,v;if(l>0)if(h=a*c-o,f=a*o-c,v=s*l,h>=0)if(f>=-v)if(f<=v){let _=1/l;h*=_,f*=_,p=h*(h+a*f+2*o)+f*(a*h+f+2*c)+u}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+u;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+u;else f<=-v?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+u):f<=v?(h=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+u):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+u);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ih).addScaledVector(ol,f),p}intersectSphere(e,t){if(e.radius<0)return null;ar.subVectors(e.center,this.origin);let n=ar.dot(this.direction),r=ar.dot(ar)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c,u=1/this.direction.x,l=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),l>=0?(s=(e.min.y-f.y)*l,a=(e.max.y-f.y)*l):(s=(e.max.y-f.y)*l,a=(e.min.y-f.y)*l),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ar)!==null}intersectTriangle(e,t,n,r,s){let a=this.origin,o=this.direction,c=o.x,u=o.y,l=o.z,h=e.x-a.x,f=e.y-a.y,p=e.z-a.z,v=t.x-a.x,_=t.y-a.y,g=t.z-a.z,m=n.x-a.x,x=n.y-a.y,E=n.z-a.z,M=Math.abs(c),w=Math.abs(u),A=Math.abs(l),P,y,S,L,U,D,Y,G,C,N,I,q;if(M>=w&&M>=A?(S=c,D=h,C=v,q=m,c>=0?(P=u,y=l,L=f,U=p,Y=_,G=g,N=x,I=E):(P=l,y=u,L=p,U=f,Y=g,G=_,N=E,I=x)):w>=A?(S=u,D=f,C=_,q=x,u>=0?(P=l,y=c,L=p,U=h,Y=g,G=v,N=E,I=m):(P=c,y=l,L=h,U=p,Y=v,G=g,N=m,I=E)):(S=l,D=p,C=g,q=E,l>=0?(P=c,y=u,L=h,U=f,Y=v,G=_,N=m,I=x):(P=u,y=c,L=f,U=h,Y=_,G=v,N=x,I=m)),S===0)return null;let V=P/S,J=y/S,re=1/S,Se=L-V*D,Ue=U-J*D,ut=Y-V*C,et=G-J*C,Je=N-V*q,de=I-J*q,_e=Je*et-de*ut,De=Se*de-Ue*Je,We=ut*Ue-et*Se;if(r){if(_e<0||De<0||We<0)return null}else if((_e<0||De<0||We<0)&&(_e>0||De>0||We>0))return null;let ze=_e+De+We;if(ze===0)return null;let ht=re*(_e*D+De*C+We*q);return(ze>0?ht<0:ht>0)?null:this.at(ht/ze,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gn=class extends Bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Bd=new Mt,Zr=new is,cl=new qn,Hd=new j,ul=new j,hl=new j,fl=new j,rh=new j,dl=new j,kd=new j,pl=new j,Ve=class extends tn{constructor(e=new Yt,t=new gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){dl.set(0,0,0);for(let c=0,u=s.length;c<u;c++){let l=o[c],h=s[c];l!==0&&(rh.fromBufferAttribute(h,e),a?dl.addScaledVector(rh,l):dl.addScaledVector(rh.sub(t),l))}t.add(dl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),cl.copy(n.boundingSphere),cl.applyMatrix4(s),Zr.copy(e.ray).recast(e.near),!(cl.containsPoint(Zr.origin)===!1&&(Zr.intersectSphere(cl,Hd)===null||Zr.origin.distanceToSquared(Hd)>(e.far-e.near)**2))&&(Bd.copy(s).invert(),Zr.copy(e.ray).applyMatrix4(Bd),!(n.boundingBox!==null&&Zr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Zr)))}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,l=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,_=f.length;v<_;v++){let g=f[v],m=a[g.materialIndex],x=Math.max(g.start,p.start),E=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let M=x,w=E;M<w;M+=3){let A=o.getX(M),P=o.getX(M+1),y=o.getX(M+2);r=ml(this,m,e,n,u,l,h,A,P,y),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let v=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let g=v,m=_;g<m;g+=3){let x=o.getX(g),E=o.getX(g+1),M=o.getX(g+2);r=ml(this,a,e,n,u,l,h,x,E,M),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,_=f.length;v<_;v++){let g=f[v],m=a[g.materialIndex],x=Math.max(g.start,p.start),E=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let M=x,w=E;M<w;M+=3){let A=M,P=M+1,y=M+2;r=ml(this,m,e,n,u,l,h,A,P,y),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let v=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let g=v,m=_;g<m;g+=3){let x=g,E=g+1,M=g+2;r=ml(this,a,e,n,u,l,h,x,E,M),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function Rg(i,e,t,n,r,s,a,o){let c;if(e.side===En?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===Yi,o),c===null)return null;pl.copy(o),pl.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(pl);return u<t.near||u>t.far?null:{distance:u,point:pl.clone(),object:i}}function ml(i,e,t,n,r,s,a,o,c,u){i.getVertexPosition(o,ul),i.getVertexPosition(c,hl),i.getVertexPosition(u,fl);let l=Rg(i,e,t,n,ul,hl,fl,kd);if(l){let h=new j;Cr.getBarycoord(kd,ul,hl,fl,h),r&&(l.uv=Cr.getInterpolatedAttribute(r,o,c,u,h,new ot)),s&&(l.uv1=Cr.getInterpolatedAttribute(s,o,c,u,h,new ot)),a&&(l.normal=Cr.getInterpolatedAttribute(a,o,c,u,h,new j),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));let f={a:o,b:c,c:u,normal:new j,materialIndex:0};Cr.getNormal(ul,hl,fl,f.normal),l.face=f,l.barycoord=h}return l}var Pa=new Xt,qd=new Xt,zd=new Xt,Cg=new Xt,Gd=new Mt,gl=new j,sh=new qn,Vd=new Mt,ah=new is,Wa=class extends Ve{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=uh,this.bindMatrix=new Mt,this.bindMatrixInverse=new Mt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Nn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,gl),this.boundingBox.expandByPoint(gl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new qn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,gl),this.boundingSphere.expandByPoint(gl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sh.copy(this.boundingSphere),sh.applyMatrix4(r),e.ray.intersectsSphere(sh)!==!1&&(Vd.copy(r).invert(),ah.copy(e.ray).applyMatrix4(Vd),!(this.boundingBox!==null&&ah.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ah)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Xt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===uh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Pp?this.bindMatrixInverse.copy(this.bindMatrix).invert():at("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;qd.fromBufferAttribute(r.attributes.skinIndex,e),zd.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(Pa.copy(t),t.set(0,0,0,0)):(Pa.set(...t,1),t.set(0,0,0)),Pa.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let a=zd.getComponent(s);if(a!==0){let o=qd.getComponent(s);Gd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Cg.copy(Pa).applyMatrix4(Gd),a)}}return t.isVector4&&(t.w=Pa.w),t.applyMatrix4(this.bindMatrixInverse)}},Ks=class extends tn{constructor(){super(),this.isBone=!0,this.type="Bone"}},cr=class extends hn{constructor(e=null,t=1,n=1,r,s,a,o,c,u=jt,l=jt,h,f){super(null,a,o,c,u,l,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Wd=new Mt,Ig=new Mt,Xa=class i{constructor(e=[],t=[]){this.uuid=Ii(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){at("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Mt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Mt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:Ig;Wd.multiplyMatrices(o,t[s]),Wd.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new cr(t,e,e,Qn,$n);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let s=e.bones[n],a=t[s];a===void 0&&(at("Skeleton: No bone found with UUID:",s),a=new Ks),this.bones.push(a),this.boneInverses.push(new Mt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let a=t[r];e.bones.push(a.uuid);let o=n[r];e.boneInverses.push(o.toArray())}return e}},ur=class extends Wt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ds=new Mt,Xd=new Mt,vl=[],Yd=new Nn,Pg=new Mt,La=new Ve,Na=new qn,rs=class extends Ve{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ur(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Pg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Nn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ds),Yd.copy(e.boundingBox).applyMatrix4(Ds),this.boundingBox.union(Yd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ds),Na.copy(e.boundingSphere).applyMatrix4(Ds),this.boundingSphere.union(Na)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(La.geometry=this.geometry,La.material=this.material,La.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Na.copy(this.boundingSphere),Na.applyMatrix4(n),e.ray.intersectsSphere(Na)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ds),Xd.multiplyMatrices(n,Ds),La.matrixWorld=Xd,La.raycast(e,vl);for(let a=0,o=vl.length;a<o;a++){let c=vl[a];c.instanceId=s,c.object=this,t.push(c)}vl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ur(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new cr(new Float32Array(r*this.count),r,this.count,lc,$n));let s=this.morphTexture.source.data.data,a=0;for(let u=0;u<n.length;u++)a+=n[u];let o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;return s[c]=o,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Jr=new qn,Lg=new ot(.5,.5),xl=new j,Zs=class{constructor(e=new Ai,t=new Ai,n=new Ai,r=new Ai,s=new Ai,a=new Ai){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ci,n=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],u=s[3],l=s[4],h=s[5],f=s[6],p=s[7],v=s[8],_=s[9],g=s[10],m=s[11],x=s[12],E=s[13],M=s[14],w=s[15];if(r[0].setComponents(u-a,p-l,m-v,w-x).normalize(),r[1].setComponents(u+a,p+l,m+v,w+x).normalize(),r[2].setComponents(u+o,p+h,m+_,w+E).normalize(),r[3].setComponents(u-o,p-h,m-_,w-E).normalize(),n)r[4].setComponents(c,f,g,M).normalize(),r[5].setComponents(u-c,p-f,m-g,w-M).normalize();else if(r[4].setComponents(u-c,p-f,m-g,w-M).normalize(),t===Ci)r[5].setComponents(u+c,p+f,m+g,w+M).normalize();else if(t===qs)r[5].setComponents(c,f,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Jr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jr)}intersectsSprite(e){Jr.center.set(0,0,0);let t=Lg.distanceTo(e.center);return Jr.radius=.7071067811865476+t,Jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(xl.x=r.normal.x>0?e.max.x:e.min.x,xl.y=r.normal.y>0?e.max.y:e.min.y,xl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Js=class extends Bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Bl=new j,Hl=new j,Kd=new Mt,Da=new is,_l=new qn,oh=new j,Zd=new j,ss=class extends tn{constructor(e=new Yt,t=new Js){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Bl.fromBufferAttribute(t,r-1),Hl.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Bl.distanceTo(Hl);e.setAttribute("lineDistance",new Ct(n,1))}else at("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_l.copy(n.boundingSphere),_l.applyMatrix4(r),_l.radius+=s,e.ray.intersectsSphere(_l)===!1)return;Kd.copy(r).invert(),Da.copy(e.ray).applyMatrix4(Kd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=this.isLineSegments?2:1,l=n.index,f=n.attributes.position;if(l!==null){let p=Math.max(0,a.start),v=Math.min(l.count,a.start+a.count);for(let _=p,g=v-1;_<g;_+=u){let m=l.getX(_),x=l.getX(_+1),E=yl(this,e,Da,c,m,x,_);E&&t.push(E)}if(this.isLineLoop){let _=l.getX(v-1),g=l.getX(p),m=yl(this,e,Da,c,_,g,v-1);m&&t.push(m)}}else{let p=Math.max(0,a.start),v=Math.min(f.count,a.start+a.count);for(let _=p,g=v-1;_<g;_+=u){let m=yl(this,e,Da,c,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){let _=yl(this,e,Da,c,v-1,p,v-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function yl(i,e,t,n,r,s,a){let o=i.geometry.attributes.position;if(Bl.fromBufferAttribute(o,r),Hl.fromBufferAttribute(o,s),t.distanceSqToSegment(Bl,Hl,oh,Zd)>n)return;oh.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(oh);if(!(u<e.near||u>e.far))return{distance:u,point:Zd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Jd=new j,jd=new j,Ya=class extends ss{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Jd.fromBufferAttribute(t,r),jd.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Jd.distanceTo(jd);e.setAttribute("lineDistance",new Ct(n,1))}else at("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ka=class extends ss{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},js=class extends Bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},$d=new Mt,fh=new is,Ml=new qn,Sl=new j,hr=class extends tn{constructor(e=new Yt,t=new js){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ml.copy(n.boundingSphere),Ml.applyMatrix4(r),Ml.radius+=s,e.ray.intersectsSphere(Ml)===!1)return;$d.copy(r).invert(),fh.copy(e.ray).applyMatrix4($d);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let v=f,_=p;v<_;v++){let g=u.getX(v);Sl.fromBufferAttribute(h,g),Qd(Sl,g,c,r,e,t,this)}}else{let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let v=f,_=p;v<_;v++)Sl.fromBufferAttribute(h,v),Qd(Sl,v,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Qd(i,e,t,n,r,s,a){let o=fh.distanceSqToPoint(i);if(o<t){let c=new j;fh.closestPointToPoint(i,c),c.applyMatrix4(n);let u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Za=class extends hn{constructor(e=[],t=Ur,n,r,s,a,o,c,u,l){super(e,t,n,r,s,a,o,c,u,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Pr=class extends hn{constructor(e,t,n,r,s,a,o,c,u){super(e,t,n,r,s,a,o,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Lr=class extends hn{constructor(e,t,n=Di,r,s,a,o=jt,c=jt,u,l=qi,h=1){if(l!==qi&&l!==Fr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,r,s,a,o,c,l,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},kl=class extends Lr{constructor(e,t=Di,n=Ur,r,s,a=jt,o=jt,c,u=qi){let l={width:e,height:e,depth:1},h=[l,l,l,l,l,l];super(e,e,t,n,r,s,a,o,c,u),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ja=class extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},an=class i extends Yt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],u=[],l=[],h=[],f=0,p=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,r,a,2),v("x","z","y",1,-1,e,n,-t,r,a,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Ct(u,3)),this.setAttribute("normal",new Ct(l,3)),this.setAttribute("uv",new Ct(h,2));function v(_,g,m,x,E,M,w,A,P,y,S){let L=M/P,U=w/y,D=M/2,Y=w/2,G=A/2,C=P+1,N=y+1,I=0,q=0,V=new j;for(let J=0;J<N;J++){let re=J*U-Y;for(let Se=0;Se<C;Se++){let Ue=Se*L-D;V[_]=Ue*x,V[g]=re*E,V[m]=G,u.push(V.x,V.y,V.z),V[_]=0,V[g]=0,V[m]=A>0?1:-1,l.push(V.x,V.y,V.z),h.push(Se/P),h.push(1-J/y),I+=1}}for(let J=0;J<y;J++)for(let re=0;re<P;re++){let Se=f+re+C*J,Ue=f+re+C*(J+1),ut=f+(re+1)+C*(J+1),et=f+(re+1)+C*J;c.push(Se,Ue,et),c.push(Ue,ut,et),q+=6}o.addGroup(p,q,S),p+=q,f+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},ja=class i extends Yt{constructor(e=1,t=1,n=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let a=[],o=[],c=[],u=[],l=t/2,h=Math.PI/2*e,f=t,p=2*h+f,v=n*2+s,_=r+1,g=new j,m=new j;for(let x=0;x<=v;x++){let E=0,M=0,w=0,A=0;if(x<=n){let S=x/n,L=S*Math.PI/2;M=-l-e*Math.cos(L),w=e*Math.sin(L),A=-e*Math.cos(L),E=S*h}else if(x<=n+s){let S=(x-n)/s;M=-l+S*t,w=e,A=0,E=h+S*f}else{let S=(x-n-s)/n,L=S*Math.PI/2;M=l+e*Math.sin(L),w=e*Math.cos(L),A=e*Math.sin(L),E=h+f+S*h}let P=Math.max(0,Math.min(1,E/p)),y=0;x===0?y=.5/r:x===v&&(y=-.5/r);for(let S=0;S<=r;S++){let L=S/r,U=L*Math.PI*2,D=Math.sin(U),Y=Math.cos(U);m.x=-w*Y,m.y=M,m.z=w*D,o.push(m.x,m.y,m.z),g.set(-w*Y,A,w*D),g.normalize(),c.push(g.x,g.y,g.z),u.push(L+y,P)}if(x>0){let S=(x-1)*_;for(let L=0;L<r;L++){let U=S+L,D=S+L+1,Y=x*_+L,G=x*_+L+1;a.push(U,D,Y),a.push(D,G,Y)}}}this.setIndex(a),this.setAttribute("position",new Ct(o,3)),this.setAttribute("normal",new Ct(c,3)),this.setAttribute("uv",new Ct(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var Gi=class i extends Yt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let u=this;r=Math.floor(r),s=Math.floor(s);let l=[],h=[],f=[],p=[],v=0,_=[],g=n/2,m=0;x(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(l),this.setAttribute("position",new Ct(h,3)),this.setAttribute("normal",new Ct(f,3)),this.setAttribute("uv",new Ct(p,2));function x(){let M=new j,w=new j,A=0,P=(t-e)/n;for(let y=0;y<=s;y++){let S=[],L=y/s,U=L*(t-e)+e;for(let D=0;D<=r;D++){let Y=D/r,G=Y*c+o,C=Math.sin(G),N=Math.cos(G);w.x=U*C,w.y=-L*n+g,w.z=U*N,h.push(w.x,w.y,w.z),M.set(C,P,N).normalize(),f.push(M.x,M.y,M.z),p.push(Y,1-L),S.push(v++)}_.push(S)}for(let y=0;y<r;y++)for(let S=0;S<s;S++){let L=_[S][y],U=_[S+1][y],D=_[S+1][y+1],Y=_[S][y+1];(e>0||S!==0)&&(l.push(L,U,Y),A+=3),(t>0||S!==s-1)&&(l.push(U,D,Y),A+=3)}u.addGroup(m,A,0),m+=A}function E(M){let w=v,A=new ot,P=new j,y=0,S=M===!0?e:t,L=M===!0?1:-1;for(let D=1;D<=r;D++)h.push(0,g*L,0),f.push(0,L,0),p.push(.5,.5),v++;let U=v;for(let D=0;D<=r;D++){let G=D/r*c+o,C=Math.cos(G),N=Math.sin(G);P.x=S*N,P.y=g*L,P.z=S*C,h.push(P.x,P.y,P.z),f.push(0,L,0),A.x=C*.5+.5,A.y=N*.5*L+.5,p.push(A.x,A.y),v++}for(let D=0;D<r;D++){let Y=w+D,G=U+D;M===!0?l.push(G,G+1,Y):l.push(G+1,G,Y),y+=3}u.addGroup(m,y,M===!0?1:2),m+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},$a=class i extends Gi{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ql=class i extends Yt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],a=[];o(r),u(n),l(),this.setAttribute("position",new Ct(s,3)),this.setAttribute("normal",new Ct(s.slice(),3)),this.setAttribute("uv",new Ct(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let E=new j,M=new j,w=new j;for(let A=0;A<t.length;A+=3)p(t[A+0],E),p(t[A+1],M),p(t[A+2],w),c(E,M,w,x)}function c(x,E,M,w){let A=w+1,P=[];for(let y=0;y<=A;y++){P[y]=[];let S=x.clone().lerp(M,y/A),L=E.clone().lerp(M,y/A),U=A-y;for(let D=0;D<=U;D++)D===0&&y===A?P[y][D]=S:P[y][D]=S.clone().lerp(L,D/U)}for(let y=0;y<A;y++)for(let S=0;S<2*(A-y)-1;S++){let L=Math.floor(S/2);S%2===0?(f(P[y][L+1]),f(P[y+1][L]),f(P[y][L])):(f(P[y][L+1]),f(P[y+1][L+1]),f(P[y+1][L]))}}function u(x){let E=new j;for(let M=0;M<s.length;M+=3)E.x=s[M+0],E.y=s[M+1],E.z=s[M+2],E.normalize().multiplyScalar(x),s[M+0]=E.x,s[M+1]=E.y,s[M+2]=E.z}function l(){let x=new j;for(let E=0;E<s.length;E+=3){x.x=s[E+0],x.y=s[E+1],x.z=s[E+2];let M=g(x)/2/Math.PI+.5,w=m(x)/Math.PI+.5;a.push(M,1-w)}v(),h()}function h(){for(let x=0;x<a.length;x+=6){let E=a[x+0],M=a[x+2],w=a[x+4],A=Math.max(E,M,w),P=Math.min(E,M,w);A>.9&&P<.1&&(E<.2&&(a[x+0]+=1),M<.2&&(a[x+2]+=1),w<.2&&(a[x+4]+=1))}}function f(x){s.push(x.x,x.y,x.z)}function p(x,E){let M=x*3;E.x=e[M+0],E.y=e[M+1],E.z=e[M+2]}function v(){let x=new j,E=new j,M=new j,w=new j,A=new ot,P=new ot,y=new ot;for(let S=0,L=0;S<s.length;S+=9,L+=6){x.set(s[S+0],s[S+1],s[S+2]),E.set(s[S+3],s[S+4],s[S+5]),M.set(s[S+6],s[S+7],s[S+8]),A.set(a[L+0],a[L+1]),P.set(a[L+2],a[L+3]),y.set(a[L+4],a[L+5]),w.copy(x).add(E).add(M).divideScalar(3);let U=g(w);_(A,L+0,x,U),_(P,L+2,E,U),_(y,L+4,M,U)}}function _(x,E,M,w){w<0&&x.x===1&&(a[E]=x.x-1),M.x===0&&M.z===0&&(a[E]=w/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Nr=class i extends ql{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},jn=class i extends Yt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),u=o+1,l=c+1,h=e/o,f=t/c,p=[],v=[],_=[],g=[];for(let m=0;m<l;m++){let x=m*f-a;for(let E=0;E<u;E++){let M=E*h-s;v.push(M,-x,0),_.push(0,0,1),g.push(E/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let x=0;x<o;x++){let E=x+u*m,M=x+u*(m+1),w=x+1+u*(m+1),A=x+1+u*m;p.push(E,M,A),p.push(M,w,A)}this.setIndex(p),this.setAttribute("position",new Ct(v,3)),this.setAttribute("normal",new Ct(_,3)),this.setAttribute("uv",new Ct(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var as=class i extends Yt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),u=0,l=[],h=new j,f=new j,p=[],v=[],_=[],g=[];for(let m=0;m<=n;m++){let x=[],E=m/n,M=a+E*o,w=e*Math.cos(M),A=Math.sqrt(e*e-w*w),P=0;m===0&&a===0?P=.5/t:m===n&&c===Math.PI&&(P=-.5/t);for(let y=0;y<=t;y++){let S=y/t,L=r+S*s;h.x=-A*Math.cos(L),h.y=w,h.z=A*Math.sin(L),v.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),g.push(S+P,1-E),x.push(u++)}l.push(x)}for(let m=0;m<n;m++)for(let x=0;x<t;x++){let E=l[m][x+1],M=l[m][x],w=l[m+1][x],A=l[m+1][x+1];(m!==0||a>0)&&p.push(E,M,A),(m!==n-1||c<Math.PI)&&p.push(M,w,A)}this.setIndex(p),this.setAttribute("position",new Ct(v,3)),this.setAttribute("normal",new Ct(_,3)),this.setAttribute("uv",new Ct(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var hi=class i extends Yt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let c=[],u=[],l=[],h=[],f=new j,p=new j,v=new j;for(let _=0;_<=n;_++){let g=a+_/n*o;for(let m=0;m<=r;m++){let x=m/r*s;p.x=(e+t*Math.cos(g))*Math.cos(x),p.y=(e+t*Math.cos(g))*Math.sin(x),p.z=t*Math.sin(g),u.push(p.x,p.y,p.z),f.x=e*Math.cos(x),f.y=e*Math.sin(x),v.subVectors(p,f).normalize(),l.push(v.x,v.y,v.z),h.push(m/r),h.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=r;g++){let m=(r+1)*_+g-1,x=(r+1)*(_-1)+g-1,E=(r+1)*(_-1)+g,M=(r+1)*_+g;c.push(m,x,M),c.push(x,E,M)}this.setIndex(c),this.setAttribute("position",new Ct(u,3)),this.setAttribute("normal",new Ct(l,3)),this.setAttribute("uv",new Ct(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function ps(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(ep(r))r.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(ep(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Dn(i){let e={};for(let t=0;t<i.length;t++){let n=ps(i[t]);for(let r in n)e[r]=n[r]}return e}function ep(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ng(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Uh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}var xr={clone:ps,merge:Dn},Dg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Og=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,nn=class extends Bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dg,this.fragmentShader=Og,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ps(e.uniforms),this.uniformsGroups=Ng(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new nt().setHex(r.value);break;case"v2":this.uniforms[n].value=new ot().fromArray(r.value);break;case"v3":this.uniforms[n].value=new j().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Xt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new pt().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Mt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},$s=class extends nn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},$t=class extends Bn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bo,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},zn=class extends $t{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ot(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new nt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new nt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new nt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Qa=class extends Bn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bo,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=tc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},zl=class extends Bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Gl=class extends Bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Rr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Al(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Ug(i){function e(r,s){return i[r]-i[s]}let t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function tp(i,e,t){let n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let c=0;c!==e;++c)r[a++]=i[o+c]}return r}function Fg(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}var Vi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break t}a=t.length;break n}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Vl=class extends Vi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:jr,endingEnd:jr}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case $r:s=e,o=2*t-n;break;case Fa:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case $r:a=e,c=2*n-t;break;case Fa:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}let u=(n-t)*.5,l=this.valueSize;this._weightPrev=u/(t-o),this._weightNext=u/(c-n),this._offsetPrev=s*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,l=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,v=(n-t)/(r-t),_=v*v,g=_*v,m=-f*g+2*f*_-f*v,x=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*v+1,E=(-1-p)*g+(1.5+p)*_+.5*v,M=p*g-p*_;for(let w=0;w!==o;++w)s[w]=m*a[l+w]+x*a[u+w]+E*a[c+w]+M*a[h+w];return s}},eo=class extends Vi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,l=(n-t)/(r-t),h=1-l;for(let f=0;f!==o;++f)s[f]=a[u+f]*h+a[c+f]*l;return s}},Wl=class extends Vi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Xl=class extends Vi{interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,l=this.inTangents,h=this.outTangents;if(!l||!h){let v=(n-t)/(r-t),_=1-v;for(let g=0;g!==o;++g)s[g]=a[u+g]*_+a[c+g]*v;return s}let f=o*2,p=e-1;for(let v=0;v!==o;++v){let _=a[u+v],g=a[c+v],m=p*f+v*2,x=h[m],E=h[m+1],M=e*f+v*2,w=l[M],A=l[M+1],P=Hg(n,t,x,w,r);s[v]=Kp(P,_,E,A,g)}return s}};function Kp(i,e,t,n,r){let s=1-i;return s*s*s*e+3*s*s*i*t+3*s*i*i*n+i*i*i*r}function Bg(i,e,t,n,r){let s=1-i;return 3*s*s*(t-e)+6*s*i*(n-t)+3*i*i*(r-n)}function Hg(i,e,t,n,r){let s=(i-e)/(r-e);for(let a=0;a<8;a++){let o=Kp(s,e,t,n,r)-i;if(Math.abs(o)<1e-10)break;let c=Bg(s,e,t,n,r);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}var Gn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Rr(t,this.TimeBufferType),this.values=Rr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Rr(e.times,Array),values:Rr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),Al(e.settings)&&(n.settings={inTangents:Rr(e.settings.inTangents,Array),outTangents:Rr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Wl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new eo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Xl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case es:t=this.InterpolantFactoryMethodDiscrete;break;case ts:t=this.InterpolantFactoryMethodLinear;break;case El:t=this.InterpolantFactoryMethodSmooth;break;case hh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return at("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return es;case this.InterpolantFactoryMethodLinear:return ts;case this.InterpolantFactoryMethodSmooth:return El;case this.InterpolantFactoryMethodBezier:return hh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Al(this.settings)&&(np(this.settings.inTangents,e),np(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(dt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(dt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){dt("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){dt("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&Zm(r))for(let o=0,c=r.length;o!==c;++o){let u=r[o];if(isNaN(u)){dt("KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===El,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,u=e[o],l=e[o+1];if(u!==l&&(o!==1||u!==e[0]))if(r)c=!0;else{let h=o*n,f=h-n,p=h+n;for(let v=0;v!==n;++v){let _=t[h+v];if(_!==t[f+v]||_!==t[p+v]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,u=0;u!==n;++u)t[c+u]=t[o+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Al(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function np(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Gn.prototype.ValueTypeName="";Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=ts;var fr=class extends Gn{constructor(e,t,n){super(e,t,n)}};fr.prototype.ValueTypeName="bool";fr.prototype.ValueBufferType=Array;fr.prototype.DefaultInterpolation=es;fr.prototype.InterpolantFactoryMethodLinear=void 0;fr.prototype.InterpolantFactoryMethodSmooth=void 0;var to=class extends Gn{constructor(e,t,n,r){super(e,t,n,r)}};to.prototype.ValueTypeName="color";var dr=class extends Gn{constructor(e,t,n,r){super(e,t,n,r)}};dr.prototype.ValueTypeName="number";var Yl=class extends Vi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t),u=e*o;for(let l=u+o;u!==l;u+=4)Ln.slerpFlat(s,0,a,u-o,a,u,c);return s}},pr=class extends Gn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Yl(this.times,this.values,this.getValueSize(),e)}};pr.prototype.ValueTypeName="quaternion";pr.prototype.InterpolantFactoryMethodSmooth=void 0;var mr=class extends Gn{constructor(e,t,n){super(e,t,n)}};mr.prototype.ValueTypeName="string";mr.prototype.ValueBufferType=Array;mr.prototype.DefaultInterpolation=es;mr.prototype.InterpolantFactoryMethodLinear=void 0;mr.prototype.InterpolantFactoryMethodSmooth=void 0;var Dr=class extends Gn{constructor(e,t,n,r){super(e,t,n,r)}};Dr.prototype.ValueTypeName="vector";var os=class{constructor(e="",t=-1,n=[],r=Vc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Ii(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(qg(n[a]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(Gn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let s=t.length,a=[];for(let o=0;o<s;o++){let c=[],u=[];c.push((o+s-1)%s,o,(o+1)%s),u.push(0,1,0);let l=Ug(c);c=tp(c,1,l),u=tp(u,1,l),!r&&c[0]===0&&(c.push(s),u.push(u[0])),a.push(new dr(".morphTargetInfluences["+t[o].name+"]",c,u).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let u=e[o],l=u.name.match(s);if(l&&l.length>1){let h=l[1],f=r[h];f||(r[h]=f=[]),f.push(u)}}let a=[];for(let o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function kg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return dr;case"vector":case"vector2":case"vector3":case"vector4":return Dr;case"color":return to;case"quaternion":return pr;case"bool":case"boolean":return fr;case"string":return mr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function qg(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=kg(i.type);if(i.times===void 0){let n=[],r=[];Fg(i.keys,n,r,"value"),i.times=n,i.values=r}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Al(i.settings)&&(t.settings={inTangents:Rr(i.settings.inTangents,Float32Array),outTangents:Rr(i.settings.outTangents,Float32Array)}),t}var ki={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(ip(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!ip(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function ip(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Kl=class{constructor(e,t,n){let r=this,s=!1,a=0,o=0,c,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(l){o++,s===!1&&r.onStart!==void 0&&r.onStart(l,a,o),s=!0},this.itemEnd=function(l){a++,r.onProgress!==void 0&&r.onProgress(l,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(l){r.onError!==void 0&&r.onError(l)},this.resolveURL=function(l){return l=l.normalize("NFC"),c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,h){return u.push(l,h),this},this.removeHandler=function(l){let h=u.indexOf(l);return h!==-1&&u.splice(h,2),this},this.getHandler=function(l){for(let h=0,f=u.length;h<f;h+=2){let p=u[h],v=u[h+1];if(p.global&&(p.lastIndex=0),p.test(l))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Zp=new Kl,Wi=class{constructor(e){this.manager=e!==void 0?e:Zp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Wi.DEFAULT_MATERIAL_NAME="__DEFAULT";var or={},dh=class extends Error{constructor(e,t){super(e),this.response=t}},Qs=class extends Wi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=ki.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(or[e]!==void 0){or[e].push({onLoad:t,onProgress:n,onError:r});return}or[e]=[],or[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&at("FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||u.body===void 0||u.body.getReader===void 0)return u;let l=or[e],h=u.body.getReader(),f=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),p=f?parseInt(f):0,v=p!==0,_=0,g=new ReadableStream({start(m){x();function x(){h.read().then(({done:E,value:M})=>{if(E)m.close();else{_+=M.byteLength;let w=new ProgressEvent("progress",{lengthComputable:v,loaded:_,total:p});for(let A=0,P=l.length;A<P;A++){let y=l[A];y.onProgress&&y.onProgress(w)}m.enqueue(M),x()}},E=>{m.error(E)})}}});return new Response(g)}else throw new dh(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(c){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(l=>new DOMParser().parseFromString(l,o));case"json":return u.json();default:if(o==="")return u.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return u.arrayBuffer().then(v=>p.decode(v))}}}).then(u=>{ki.add(`file:${e}`,u);let l=or[e];delete or[e];for(let h=0,f=l.length;h<f;h++){let p=l[h];p.onLoad&&p.onLoad(u)}}).catch(u=>{let l=or[e];if(l===void 0)throw this.manager.itemError(e),u;delete or[e];for(let h=0,f=l.length;h<f;h++){let p=l[h];p.onError&&p.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Os=new WeakMap,Zl=class extends Wi{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=ki.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=Os.get(a);h===void 0&&(h=[],Os.set(a,h)),h.push({onLoad:t,onError:r})}return a}let o=zs("img");function c(){l(),t&&t(this);let h=Os.get(this)||[];for(let f=0;f<h.length;f++){let p=h[f];p.onLoad&&p.onLoad(this)}Os.delete(this),s.manager.itemEnd(e)}function u(h){l(),r&&r(h),ki.remove(`image:${e}`);let f=Os.get(this)||[];for(let p=0;p<f.length;p++){let v=f[p];v.onError&&v.onError(h)}Os.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function l(){o.removeEventListener("load",c,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ki.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var ls=class extends Wi{constructor(e){super(e)}load(e,t,n,r){let s=new hn,a=new Zl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},Or=class extends tn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ea=class extends Or{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new nt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},lh=new Mt,rp=new j,sp=new j,ta=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=Wn,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zs,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;rp.setFromMatrixPosition(e.matrixWorld),t.position.copy(rp),sp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){lh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(lh,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,u=r?r.y/s.y:0;e.coordinateSystem===qs||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,.5,.5,0,0,0,1),t.multiply(lh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},bl=new j,Tl=new Ln,Hi=new j,no=class extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(bl,Tl,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bl,Tl,Hi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(bl,Tl,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bl,Tl,Hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ar=new j,ap=new ot,op=new ot,cn=class extends no{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ns*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ns*2*Math.atan(Math.tan(Oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z),Ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z)}getViewSize(e,t){return this.getViewBounds(e,ap,op),t.subVectors(op,ap)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Oa*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/u,r*=a.width/c,n*=a.height/u}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ph=class extends ta{constructor(){super(new cn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ns*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},io=class extends Or{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new ph}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},mh=class extends ta{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0}},Vn=class extends Or{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new mh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Xi=class extends no{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=l*this.view.offsetY,c=o-l*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},gh=class extends ta{constructor(){super(new Xi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},cs=class extends Or{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new gh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},na=class extends Or{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var gr=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ch=new WeakMap,ro=class extends Wi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&at("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&at("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=ki.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(u=>{ch.has(a)===!0?(r&&r(ch.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(u),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(u){return ki.add(`image-bitmap:${e}`,u),t&&t(u),s.manager.itemEnd(e),u}).catch(function(u){r&&r(u),ch.set(c,u),ki.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});ki.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Us=-90,Fs=1,Jl=class extends tn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new cn(Us,Fs,e,t);r.layers=this.layers,this.add(r);let s=new cn(Us,Fs,e,t);s.layers=this.layers,this.add(s);let a=new cn(Us,Fs,e,t);a.layers=this.layers,this.add(a);let o=new cn(Us,Fs,e,t);o.layers=this.layers,this.add(o);let c=new cn(Us,Fs,e,t);c.layers=this.layers,this.add(c);let u=new cn(Us,Fs,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(let u of t)this.remove(u);if(e===Ci)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,u,l]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(h,f,p),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},jl=class extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},so=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=zg.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function zg(){this._document.hidden===!1&&this.reset()}var $l=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,s,a;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:r=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,r=this.valueSize,s=e*r+r,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==r;++o)n[s+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,s,0,o,r)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,r=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let c=t*this._origIndex;this._mixBufferRegion(n,r,c,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let c=t,u=t+t;c!==u;++c)if(n[c]!==n[c+t]){o.setValue(n,r);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let s=n,a=r;s!==a;++s)t[s]=t[r+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,s){if(r>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,r){Ln.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,s){let a=this._workIndex*s;Ln.multiplyQuaternionsFlat(e,a,e,t,e,n),Ln.slerpFlat(e,t,e,t,e,a,r)}_lerp(e,t,n,r,s){let a=1-r;for(let o=0;o!==s;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*r}}_lerpAdditive(e,t,n,r,s){for(let a=0;a!==s;++a){let o=t+a;e[o]=e[o]+e[n+a]*r}}},Fh="\\[\\]\\.:\\/",Gg=new RegExp("["+Fh+"]","g"),Bh="[^"+Fh+"]",Vg="[^"+Fh.replace("\\.","")+"]",Wg=/((?:WC+[\/:])*)/.source.replace("WC",Bh),Xg=/(WCOD+)?/.source.replace("WCOD",Vg),Yg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bh),Kg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bh),Zg=new RegExp("^"+Wg+Xg+Yg+Kg+"$"),Jg=["material","materials","bones","map"],vh=class{constructor(e,t,n){let r=n||Zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Zt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Gg,"")}static parseTrackName(e){let t=Zg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Jg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){at("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){dt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){dt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let l=0;l<e.length;l++)if(e[l].name===u){u=l;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){dt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){dt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){dt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let a=e[r];if(a===void 0){let u=t.nodeName;dt("PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Zt.Composite=vh;Zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Zt.prototype.GetterByBindingType=[Zt.prototype._getValue_direct,Zt.prototype._getValue_array,Zt.prototype._getValue_arrayElement,Zt.prototype._getValue_toArray];Zt.prototype.SetterByBindingTypeAndVersioning=[[Zt.prototype._setValue_direct,Zt.prototype._setValue_direct_setNeedsUpdate,Zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_array,Zt.prototype._setValue_array_setNeedsUpdate,Zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_arrayElement,Zt.prototype._setValue_arrayElement_setNeedsUpdate,Zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_fromArray,Zt.prototype._setValue_fromArray_setNeedsUpdate,Zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ql=class{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;let s=t.tracks,a=s.length,o=new Array(a),c={endingStart:jr,endingEnd:jr};for(let u=0;u!==a;++u){let l=s[u].createInterpolant(null);o[u]=l,l.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Gc,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let r=this._clip.duration,s=e._clip.duration,a=s/r,o=r/s;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let r=this._mixer,s=r.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,u=o.sampleValues;return c[0]=s,c[1]=s+n,u[0]=e/a,u[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,u=this._propertyBindings;switch(this.blendMode){case Np:for(let l=0,h=c.length;l!==h;++l)c[l].evaluate(a),u[l].accumulateAdditive(o);break;case Vc:default:for(let l=0,h=c.length;l!==h;++l)c[l].evaluate(a),u[l].accumulate(r,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,r=this.time+e,s=this._loopCount,a=n===Lp;if(e===0)return s===-1?r:a&&(s&1)===1?t-r:r;if(n===zc){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),r>=t||r<0){let o=Math.floor(r/t);r-=t*o,s+=Math.abs(o);let c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let u=e<0;this._setEndings(u,!u,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=s,this.time=r;if(a&&(s&1)===1)return t-r}return r}_setEndings(e,t,n){let r=this._interpolantSettings;n?(r.endingStart=$r,r.endingEnd=$r):(e?r.endingStart=this.zeroSlopeAtStart?$r:jr:r.endingStart=Fa,t?r.endingEnd=this.zeroSlopeAtEnd?$r:jr:r.endingEnd=Fa)}_scheduleFading(e,t,n){let r=this._mixer,s=r.time,a=this._weightInterpolant;a===null&&(a=r._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=s,c[0]=t,o[1]=s+e,c[1]=n,this}},jg=new Float32Array(1),ao=class extends Pi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,r=e._clip.tracks,s=r.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,u=this._bindingsByRootAndName,l=u[c];l===void 0&&(l={},u[c]=l);for(let h=0;h!==s;++h){let f=r[h],p=f.name,v=l[p];if(v!==void 0)++v.referenceCount,a[h]=v;else{if(v=a[h],v!==void 0){v._cacheIndex===null&&(++v.referenceCount,this._addInactiveBinding(v,c,p));continue}let _=t&&t._propertyBindings[h].binding.parsedPath;v=new $l(Zt.create(n,p,_),f.ValueTypeName,f.getValueSize()),++v.referenceCount,this._addInactiveBinding(v,c,p),a[h]=v}o[h].resultBuffer=v.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,n)}let t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){let s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){let s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let r=this._actions,s=this._actionsByClip,a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=r.length,r.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,a=this._actionsByClip,o=a[s],c=o.knownActions,u=c[c.length-1],l=e._byClipCacheIndex;u._byClipCacheIndex=l,c[l]=u,c.pop(),e._byClipCacheIndex=null;let h=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],c.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){let s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){let r=this._bindingsByRootAndName,s=this._bindings,a=r[t];a===void 0&&(a={},r[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,r=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[r],c=t[t.length-1],u=e._cacheIndex;c._cacheIndex=u,t[u]=c,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[r]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new eo(new Float32Array(2),new Float32Array(2),1,jg),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){let r=t||this._root,s=r.uuid,a=typeof e=="string"?os.findByName(r,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],u=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Vc),c!==void 0){let h=c.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;u=c.knownActions[0],a===null&&(a=u._clip)}if(a===null)return null;let l=new Ql(this,a,t,n);return this._bindAction(l,u),this._addInactiveAction(l,o,s),l}existingAction(e,t){let n=t||this._root,r=n.uuid,s=typeof e=="string"?os.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[r]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,r=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let u=0;u!==n;++u)t[u]._update(r,e,s,a);let o=this._bindings,c=this._nActiveBindings;for(let u=0;u!==c;++u)o[u].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,r=this._actionsByClip,s=r[n];if(s!==void 0){let a=s.knownActions;for(let o=0,c=a.length;o!==c;++o){let u=a[o];this._deactivateAction(u);let l=u._cacheIndex,h=t[t.length-1];u._cacheIndex=null,u._byClipCacheIndex=null,h._cacheIndex=l,t[l]=h,t.pop(),this._removeInactiveBindingsForAction(u)}delete r[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(let a in s){let o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Vh=class Vh{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};Vh.prototype.isMatrix2=!0;var xh=Vh;function Hh(i,e,t,n){let r=$g(n);switch(t){case Ch:return i*e;case lc:return i*e/r.components*r.byteLength;case cc:return i*e/r.components*r.byteLength;case Br:return i*e*2/r.components*r.byteLength;case uc:return i*e*2/r.components*r.byteLength;case Ih:return i*e*3/r.components*r.byteLength;case Qn:return i*e*4/r.components*r.byteLength;case hc:return i*e*4/r.components*r.byteLength;case go:case vo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xo:case _o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case dc:case mc:return Math.max(i,16)*Math.max(e,8)/4;case fc:case pc:return Math.max(i,8)*Math.max(e,8)/2;case gc:case vc:case _c:case yc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xc:case yo:case Mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Tc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case wc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ac:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ic:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Pc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Lc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Nc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Dc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Oc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Uc:case Fc:case Bc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Hc:case kc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Mo:case qc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $g(i){switch(i){case Wn:case Eh:return{byteLength:1,components:1};case aa:case wh:case An:return{byteLength:2,components:1};case ac:case oc:return{byteLength:2,components:4};case Di:case sc:case $n:return{byteLength:4,components:1};case Ah:case Rh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function v0(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function ev(i){let e=new WeakMap;function t(o,c){let u=o.array,l=o.usage,h=u.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,u,l),o.onUploadCallback();let p;if(u instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array!="undefined"&&u instanceof Float16Array)p=i.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=i.SHORT;else if(u instanceof Uint32Array)p=i.UNSIGNED_INT;else if(u instanceof Int32Array)p=i.INT;else if(u instanceof Int8Array)p=i.BYTE;else if(u instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,u){let l=c.array,h=c.updateRanges;if(i.bindBuffer(u,o),h.length===0)i.bufferSubData(u,0,l);else{h.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<h.length;p++){let v=h[f],_=h[p];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++f,h[f]=_)}h.length=f+1;for(let p=0,v=h.length;p<v;p++){let _=h[p];i.bufferSubData(u,_.start*l.BYTES_PER_ELEMENT,l,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let l=e.get(o);(!l||l.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=e.get(o);if(u===void 0)e.set(o,t(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,c),u.version=o.version}}return{get:r,remove:s,update:a}}var tv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nv=`#ifdef USE_ALPHAHASH
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
#endif`,iv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,av=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ov=`#ifdef USE_AOMAP
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
#endif`,lv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cv=`#ifdef USE_BATCHING
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
#endif`,uv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pv=`#ifdef USE_IRIDESCENCE
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
#endif`,mv=`#ifdef USE_BUMPMAP
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
#endif`,gv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_v=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Mv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Sv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Tv=`#define PI 3.141592653589793
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
} // validated`,Ev=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wv=`vec3 transformedNormal = objectNormal;
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
#endif`,Av=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Iv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nv=`#ifdef USE_ENVMAP
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
#endif`,Dv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ov=`#ifdef USE_ENVMAP
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
#endif`,Uv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fv=`#ifdef USE_ENVMAP
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
#endif`,Bv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zv=`#ifdef USE_GRADIENTMAP
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
}`,Gv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Yv=`#ifdef USE_ENVMAP
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
#endif`,Kv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$v=`PhysicalMaterial material;
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
#endif`,Qv=`uniform sampler2D dfgLUT;
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
}`,ex=`
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
#endif`,tx=`#if defined( RE_IndirectDiffuse )
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
#endif`,nx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ix=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,rx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ax=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ox=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ux=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hx=`#if defined( USE_POINTS_UV )
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
#endif`,fx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,px=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vx=`#ifdef USE_MORPHTARGETS
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
#endif`,xx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_x=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Tx=`#ifdef USE_NORMALMAP
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
#endif`,Ex=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ax=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ix=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Px=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ox=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ux=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kx=`float getShadowMask() {
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
}`,qx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zx=`#ifdef USE_SKINNING
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
#endif`,Gx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vx=`#ifdef USE_SKINNING
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
#endif`,Wx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zx=`#ifdef USE_TRANSMISSION
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
#endif`,Jx=`#ifdef USE_TRANSMISSION
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
#endif`,jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,t_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,n_=`uniform sampler2D t2D;
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
}`,i_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,s_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o_=`#include <common>
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
}`,l_=`#if DEPTH_PACKING == 3200
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
}`,c_=`#define DISTANCE
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
}`,u_=`#define DISTANCE
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
}`,h_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,f_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d_=`uniform float scale;
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
}`,p_=`uniform vec3 diffuse;
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
}`,m_=`#include <common>
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
}`,g_=`uniform vec3 diffuse;
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
}`,v_=`#define LAMBERT
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
}`,x_=`#define LAMBERT
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
}`,__=`#define MATCAP
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
}`,y_=`#define MATCAP
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
}`,M_=`#define NORMAL
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
}`,S_=`#define NORMAL
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
}`,b_=`#define PHONG
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
}`,T_=`#define PHONG
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
}`,E_=`#define STANDARD
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
}`,w_=`#define STANDARD
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
}`,A_=`#define TOON
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
}`,R_=`#define TOON
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
}`,C_=`uniform float size;
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
}`,I_=`uniform vec3 diffuse;
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
}`,P_=`#include <common>
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
}`,L_=`uniform vec3 color;
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
}`,N_=`uniform float rotation;
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
}`,D_=`uniform vec3 diffuse;
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
}`,Tt={alphahash_fragment:tv,alphahash_pars_fragment:nv,alphamap_fragment:iv,alphamap_pars_fragment:rv,alphatest_fragment:sv,alphatest_pars_fragment:av,aomap_fragment:ov,aomap_pars_fragment:lv,batching_pars_vertex:cv,batching_vertex:uv,begin_vertex:hv,beginnormal_vertex:fv,bsdfs:dv,iridescence_fragment:pv,bumpmap_pars_fragment:mv,clipping_planes_fragment:gv,clipping_planes_pars_fragment:vv,clipping_planes_pars_vertex:xv,clipping_planes_vertex:_v,color_fragment:yv,color_pars_fragment:Mv,color_pars_vertex:Sv,color_vertex:bv,common:Tv,cube_uv_reflection_fragment:Ev,defaultnormal_vertex:wv,displacementmap_pars_vertex:Av,displacementmap_vertex:Rv,emissivemap_fragment:Cv,emissivemap_pars_fragment:Iv,colorspace_fragment:Pv,colorspace_pars_fragment:Lv,envmap_fragment:Nv,envmap_common_pars_fragment:Dv,envmap_pars_fragment:Ov,envmap_pars_vertex:Uv,envmap_physical_pars_fragment:Yv,envmap_vertex:Fv,fog_vertex:Bv,fog_pars_vertex:Hv,fog_fragment:kv,fog_pars_fragment:qv,gradientmap_pars_fragment:zv,lightmap_pars_fragment:Gv,lights_lambert_fragment:Vv,lights_lambert_pars_fragment:Wv,lights_pars_begin:Xv,lights_toon_fragment:Kv,lights_toon_pars_fragment:Zv,lights_phong_fragment:Jv,lights_phong_pars_fragment:jv,lights_physical_fragment:$v,lights_physical_pars_fragment:Qv,lights_fragment_begin:ex,lights_fragment_maps:tx,lights_fragment_end:nx,lightprobes_pars_fragment:ix,logdepthbuf_fragment:rx,logdepthbuf_pars_fragment:sx,logdepthbuf_pars_vertex:ax,logdepthbuf_vertex:ox,map_fragment:lx,map_pars_fragment:cx,map_particle_fragment:ux,map_particle_pars_fragment:hx,metalnessmap_fragment:fx,metalnessmap_pars_fragment:dx,morphinstance_vertex:px,morphcolor_vertex:mx,morphnormal_vertex:gx,morphtarget_pars_vertex:vx,morphtarget_vertex:xx,normal_fragment_begin:_x,normal_fragment_maps:yx,normal_pars_fragment:Mx,normal_pars_vertex:Sx,normal_vertex:bx,normalmap_pars_fragment:Tx,clearcoat_normal_fragment_begin:Ex,clearcoat_normal_fragment_maps:wx,clearcoat_pars_fragment:Ax,iridescence_pars_fragment:Rx,opaque_fragment:Cx,packing:Ix,premultiplied_alpha_fragment:Px,project_vertex:Lx,dithering_fragment:Nx,dithering_pars_fragment:Dx,roughnessmap_fragment:Ox,roughnessmap_pars_fragment:Ux,shadowmap_pars_fragment:Fx,shadowmap_pars_vertex:Bx,shadowmap_vertex:Hx,shadowmask_pars_fragment:kx,skinbase_vertex:qx,skinning_pars_vertex:zx,skinning_vertex:Gx,skinnormal_vertex:Vx,specularmap_fragment:Wx,specularmap_pars_fragment:Xx,tonemapping_fragment:Yx,tonemapping_pars_fragment:Kx,transmission_fragment:Zx,transmission_pars_fragment:Jx,uv_pars_fragment:jx,uv_pars_vertex:$x,uv_vertex:Qx,worldpos_vertex:e_,background_vert:t_,background_frag:n_,backgroundCube_vert:i_,backgroundCube_frag:r_,cube_vert:s_,cube_frag:a_,depth_vert:o_,depth_frag:l_,distance_vert:c_,distance_frag:u_,equirect_vert:h_,equirect_frag:f_,linedashed_vert:d_,linedashed_frag:p_,meshbasic_vert:m_,meshbasic_frag:g_,meshlambert_vert:v_,meshlambert_frag:x_,meshmatcap_vert:__,meshmatcap_frag:y_,meshnormal_vert:M_,meshnormal_frag:S_,meshphong_vert:b_,meshphong_frag:T_,meshphysical_vert:E_,meshphysical_frag:w_,meshtoon_vert:A_,meshtoon_frag:R_,points_vert:C_,points_frag:I_,shadow_vert:P_,shadow_frag:L_,sprite_vert:N_,sprite_frag:D_},Xe={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Zi={basic:{uniforms:Dn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:Dn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new nt(0)},envMapIntensity:{value:1}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:Dn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:Dn([Xe.common,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.roughnessmap,Xe.metalnessmap,Xe.fog,Xe.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:Dn([Xe.common,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.gradientmap,Xe.fog,Xe.lights,{emissive:{value:new nt(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:Dn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:Dn([Xe.points,Xe.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:Dn([Xe.common,Xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:Dn([Xe.common,Xe.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:Dn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:Dn([Xe.sprite,Xe.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distance:{uniforms:Dn([Xe.common,Xe.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distance_vert,fragmentShader:Tt.distance_frag},shadow:{uniforms:Dn([Xe.lights,Xe.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};Zi.physical={uniforms:Dn([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};var Yc={r:0,b:0,g:0},O_=new Mt,x0=new pt;x0.set(-1,0,0,0,1,0,0,0,1);function U_(i,e,t,n,r,s){let a=new nt(0),o=r===!0?0:1,c,u,l=null,h=0,f=null;function p(x){let E=x.isScene===!0?x.background:null;if(E&&E.isTexture){let M=x.backgroundBlurriness>0;E=e.get(E,M)}return E}function v(x){let E=!1,M=p(x);M===null?g(a,o):M&&M.isColor&&(g(M,1),E=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(x,E){let M=p(E);M&&(M.isCubeTexture||M.mapping===mo)?(u===void 0&&(u=new Ve(new an(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:ps(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(O_.makeRotationFromEuler(E.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(x0),u.material.toneMapped=bt.getTransfer(M.colorSpace)!==Bt,(l!==M||h!==M.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,l=M,h=M.version,f=i.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ve(new jn(2,2),new nn({name:"BackgroundMaterial",uniforms:ps(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=bt.getTransfer(M.colorSpace)!==Bt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(l!==M||h!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,l=M,h=M.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function g(x,E){x.getRGB(Yc,Uh(i)),t.buffers.color.setClear(Yc.r,Yc.g,Yc.b,E,s)}function m(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,E=1){a.set(x),o=E,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,g(a,o)},render:v,addToRenderList:_,dispose:m}}function F_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,a=!1;function o(U,D,Y,G,C){let N=!1,I=h(U,G,Y,D);s!==I&&(s=I,u(s.object)),N=p(U,G,Y,C),N&&v(U,G,Y,C),C!==null&&e.update(C,i.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,M(U,D,Y,G),C!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(C).buffer))}function c(){return i.createVertexArray()}function u(U){return i.bindVertexArray(U)}function l(U){return i.deleteVertexArray(U)}function h(U,D,Y,G){let C=G.wireframe===!0,N=n[D.id];N===void 0&&(N={},n[D.id]=N);let I=U.isInstancedMesh===!0?U.id:0,q=N[I];q===void 0&&(q={},N[I]=q);let V=q[Y.id];V===void 0&&(V={},q[Y.id]=V);let J=V[C];return J===void 0&&(J=f(c()),V[C]=J),J}function f(U){let D=[],Y=[],G=[];for(let C=0;C<t;C++)D[C]=0,Y[C]=0,G[C]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:Y,attributeDivisors:G,object:U,attributes:{},index:null}}function p(U,D,Y,G){let C=s.attributes,N=D.attributes,I=0,q=Y.getAttributes();for(let V in q)if(q[V].location>=0){let re=C[V],Se=N[V];if(Se===void 0&&(V==="instanceMatrix"&&U.instanceMatrix&&(Se=U.instanceMatrix),V==="instanceColor"&&U.instanceColor&&(Se=U.instanceColor)),re===void 0||re.attribute!==Se||Se&&re.data!==Se.data)return!0;I++}return s.attributesNum!==I||s.index!==G}function v(U,D,Y,G){let C={},N=D.attributes,I=0,q=Y.getAttributes();for(let V in q)if(q[V].location>=0){let re=N[V];re===void 0&&(V==="instanceMatrix"&&U.instanceMatrix&&(re=U.instanceMatrix),V==="instanceColor"&&U.instanceColor&&(re=U.instanceColor));let Se={};Se.attribute=re,re&&re.data&&(Se.data=re.data),C[V]=Se,I++}s.attributes=C,s.attributesNum=I,s.index=G}function _(){let U=s.newAttributes;for(let D=0,Y=U.length;D<Y;D++)U[D]=0}function g(U){m(U,0)}function m(U,D){let Y=s.newAttributes,G=s.enabledAttributes,C=s.attributeDivisors;Y[U]=1,G[U]===0&&(i.enableVertexAttribArray(U),G[U]=1),C[U]!==D&&(i.vertexAttribDivisor(U,D),C[U]=D)}function x(){let U=s.newAttributes,D=s.enabledAttributes;for(let Y=0,G=D.length;Y<G;Y++)D[Y]!==U[Y]&&(i.disableVertexAttribArray(Y),D[Y]=0)}function E(U,D,Y,G,C,N,I){I===!0?i.vertexAttribIPointer(U,D,Y,C,N):i.vertexAttribPointer(U,D,Y,G,C,N)}function M(U,D,Y,G){_();let C=G.attributes,N=Y.getAttributes(),I=D.defaultAttributeValues;for(let q in N){let V=N[q];if(V.location>=0){let J=C[q];if(J===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(J=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(J=U.instanceColor)),J!==void 0){let re=J.normalized,Se=J.itemSize,Ue=e.get(J);if(Ue===void 0)continue;let ut=Ue.buffer,et=Ue.type,Je=Ue.bytesPerElement,de=et===i.INT||et===i.UNSIGNED_INT||J.gpuType===sc;if(J.isInterleavedBufferAttribute){let _e=J.data,De=_e.stride,We=J.offset;if(_e.isInstancedInterleavedBuffer){for(let ze=0;ze<V.locationSize;ze++)m(V.location+ze,_e.meshPerAttribute);U.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let ze=0;ze<V.locationSize;ze++)g(V.location+ze);i.bindBuffer(i.ARRAY_BUFFER,ut);for(let ze=0;ze<V.locationSize;ze++)E(V.location+ze,Se/V.locationSize,et,re,De*Je,(We+Se/V.locationSize*ze)*Je,de)}else{if(J.isInstancedBufferAttribute){for(let _e=0;_e<V.locationSize;_e++)m(V.location+_e,J.meshPerAttribute);U.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let _e=0;_e<V.locationSize;_e++)g(V.location+_e);i.bindBuffer(i.ARRAY_BUFFER,ut);for(let _e=0;_e<V.locationSize;_e++)E(V.location+_e,Se/V.locationSize,et,re,Se*Je,Se/V.locationSize*_e*Je,de)}}else if(I!==void 0){let re=I[q];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(V.location,re);break;case 3:i.vertexAttrib3fv(V.location,re);break;case 4:i.vertexAttrib4fv(V.location,re);break;default:i.vertexAttrib1fv(V.location,re)}}}}x()}function w(){S();for(let U in n){let D=n[U];for(let Y in D){let G=D[Y];for(let C in G){let N=G[C];for(let I in N)l(N[I].object),delete N[I];delete G[C]}}delete n[U]}}function A(U){if(n[U.id]===void 0)return;let D=n[U.id];for(let Y in D){let G=D[Y];for(let C in G){let N=G[C];for(let I in N)l(N[I].object),delete N[I];delete G[C]}}delete n[U.id]}function P(U){for(let D in n){let Y=n[D];for(let G in Y){let C=Y[G];if(C[U.id]===void 0)continue;let N=C[U.id];for(let I in N)l(N[I].object),delete N[I];delete C[U.id]}}}function y(U){for(let D in n){let Y=n[D],G=U.isInstancedMesh===!0?U.id:0,C=Y[G];if(C!==void 0){for(let N in C){let I=C[N];for(let q in I)l(I[q].object),delete I[q];delete C[N]}delete Y[G],Object.keys(Y).length===0&&delete n[D]}}}function S(){L(),a=!0,s!==r&&(s=r,u(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:S,resetDefaultState:L,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfObject:y,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:g,disableUnusedAttributes:x}}function B_(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,l){l!==0&&(i.drawArraysInstanced(n,c,u,l),t.update(u,n,l))}function o(c,u,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,l);let f=0;for(let p=0;p<l;p++)f+=u[p];t.update(f,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function H_(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==Qn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let y=P===An&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Wn&&P!==$n&&!y&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp",l=c(u);l!==u&&(at("WebGLRenderer:",u,"not supported, using",l,"instead."),u=l);let h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&at("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:x,maxVaryings:E,maxFragmentUniforms:M,maxSamples:w,samples:A}}function k_(i){let e=this,t=null,n=0,r=!1,s=!1,a=new Ai,o=new pt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||n!==0||r;return r=f,n=h.length,p},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=l(h,f,0)},this.setState=function(h,f,p){let v=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,m=i.get(h);if(!r||v===null||v.length===0||s&&!g)s?l(null):u();else{let x=s?0:n,E=x*4,M=m.clippingState||null;c.value=M,M=l(v,f,E,p);for(let w=0;w!==E;++w)M[w]=t[w];m.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(h,f,p,v){let _=h!==null?h.length:0,g=null;if(_!==0){if(g=c.value,v!==!0||g===null){let m=p+_*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let E=0,M=p;E!==_;++E,M+=4)a.copy(h[E]).applyMatrix4(x,o),a.normal.toArray(g,M),g[M+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}var ua=4,q_=6,z_=20,G_=256,To=new Xi,Jp=new nt,Wh=null,Xh=0,Yh=0,Kh=!1,V_=new j,ms=new j,fa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:o=V_}=s;Wh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),Yh=this._renderer.getActiveMipmapLevel(),Kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$p(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Wh,Xh,Yh),this._renderer.xr.enabled=Kh,e.scissorTest=!1,ca(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ur||e.mapping===fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),Yh=this._renderer.getActiveMipmapLevel(),Kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:An,format:Qn,colorSpace:Fn,depthBuffer:!1},r=jp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jp(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=W_(s)),this._blurMaterial=Y_(s,e,t),this._ggxMaterial=X_(s,e,t)}return r}_compileMaterial(e){let t=new Ve(new Yt,e);this._renderer.compile(t,To)}_sceneToCubeUV(e,t,n,r,s){let c=new cn(90,1,t,n),u=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Jp),h.toneMapping=Li,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ve(new an,new gn({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,m=!1,x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,m=!0):(g.color.copy(Jp),m=!0);for(let E=0;E<6;E++){let M=E%3;M===0?(c.up.set(0,u[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+l[E],s.y,s.z)):M===1?(c.up.set(0,0,u[E]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+l[E],s.z)):(c.up.set(0,u[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+l[E]));let w=this._cubeSize;ca(r,M*w,E>2?w:0,w,w),h.setRenderTarget(r),m&&h.render(_,c),h.render(e,c)}h.toneMapping=p,h.autoClear=f,e.background=x}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Ur||e.mapping===fs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$p());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;ca(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,To)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,u=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),h=Math.sqrt(u*u-l*l),f=u*1.25,p=h*f,{_lodMax:v}=this,_=this._sizeLods[n],g=3*_*(n>v-ua?n-v+ua:0),m=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=v-t,ca(s,g,m,3*_,2*_),r.setRenderTarget(s),r.render(o,To),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=v-n,ca(e,g,m,3*_,2*_),r.setRenderTarget(e),r.render(o,To)}_blur(e,t,n,r){let s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,r,s){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[r];c.material=o;let u=o.uniforms;u.envMap.value=e.texture,u.sigma.value=s,u.mipInt.value=this._lodMax-n;let l=this._sizeLods[r],h=3*l*(r>this._lodMax-ua?r-this._lodMax+ua:0),f=4*(this._cubeSize-l);ca(t,h,f,3*l,2*l),a.setRenderTarget(t),a.render(c,To)}};function W_(i){let e=[],t=[],n=i,r=i-ua+1+q_;for(let s=0;s<r;s++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,u=1+o,l=[c,c,u,c,u,u,c,c,u,u,c,u],h=6,f=6,p=3,v=new Float32Array(p*f*h),_=new Float32Array(p*f*h);for(let m=0;m<h;m++){let x=m%3*2/3-1,E=m>2?0:-1,M=[x,E,0,x+2/3,E,0,x+2/3,E+1,0,x,E,0,x+2/3,E+1,0,x,E+1,0];v.set(M,p*f*m);for(let w=0;w<f;w++){let A=l[w*2]*2-1,P=l[w*2+1]*2-1;m===0?ms.set(1,P,A):m===1?ms.set(-A,1,-P):m===2?ms.set(-A,P,1):m===3?ms.set(-1,P,-A):m===4?ms.set(-A,-1,P):ms.set(A,P,-1),ms.toArray(_,(m*f+w)*p)}}let g=new Yt;g.setAttribute("position",new Wt(v,p)),g.setAttribute("outputDirection",new Wt(_,p)),t.push(new Ve(g,null)),n>ua&&n--}return{lodMeshes:t,sizeLods:e}}function jp(i,e,t){let n=new mn(i,e,t);return n.texture.mapping=mo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ca(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function X_(i,e,t){return new nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:G_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jc(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Y_(i,e,t){return new nn({name:"SphericalGaussianBlur",defines:{SAMPLES:z_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:jc(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function $p(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Qp(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function jc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Zc=class extends mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Za(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new an(5,5,5),s=new nn({name:"CubemapFromEquirect",uniforms:ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:En,blending:fi});s.uniforms.tEquirect.value=t;let a=new Ve(r,s),o=t.minFilter;return t.minFilter===Ni&&(t.minFilter=un),new Jl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}};function K_(i){let e=new WeakMap,t=new WeakMap,n=null;function r(f,p=!1){return f==null?null:p?a(f):s(f)}function s(f){if(f&&f.isTexture){let p=f.mapping;if(p===nc||p===ic)if(e.has(f)){let v=e.get(f).texture;return o(v,f.mapping)}else{let v=f.image;if(v&&v.height>0){let _=new Zc(v.height);return _.fromEquirectangularTexture(i,f),e.set(f,_),f.addEventListener("dispose",u),o(_.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let p=f.mapping,v=p===nc||p===ic,_=p===Ur||p===fs;if(v||_){let g=t.get(f),m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new fa(i)),g=v?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{let x=f.image;return v&&x&&x.height>0||_&&x&&c(x)?(n===null&&(n=new fa(i)),g=v?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",l),g.texture):null}}}return f}function o(f,p){return p===nc?f.mapping=Ur:p===ic&&(f.mapping=fs),f}function c(f){let p=0,v=6;for(let _=0;_<v;_++)f[_]!==void 0&&p++;return p===v}function u(f){let p=f.target;p.removeEventListener("dispose",u);let v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function l(f){let p=f.target;p.removeEventListener("dispose",l);let v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function Z_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Qr("WebGLRenderer: "+n+" extension not supported."),r}}}function J_(i,e,t,n){let r={},s=new WeakMap;function a(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",a),delete r[f.id];let p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(h){let f=h.attributes;for(let p in f)e.update(f[p],i.ARRAY_BUFFER)}function u(h){let f=[],p=h.index,v=h.attributes.position,_=0;if(v===void 0)return;if(p!==null){let x=p.array;_=p.version;for(let E=0,M=x.length;E<M;E+=3){let w=x[E+0],A=x[E+1],P=x[E+2];f.push(w,A,A,P,P,w)}}else{let x=v.array;_=v.version;for(let E=0,M=x.length/3-1;E<M;E+=3){let w=E+0,A=E+1,P=E+2;f.push(w,A,A,P,P,w)}}let g=new(v.count>=65535?Va:Ga)(f,1);g.version=_;let m=s.get(h);m&&e.remove(m),s.set(h,g)}function l(h){let f=s.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&u(h)}else u(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:l}}function j_(i,e,t){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,f){i.drawElements(n,f,s,h*a),t.update(f,n,1)}function u(h,f,p){p!==0&&(i.drawElementsInstanced(n,f,s,h*a,p),t.update(f,n,p))}function l(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,p);let _=0;for(let g=0;g<p;g++)_+=f[g];t.update(_,n,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=l}function $_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:dt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Q_(i,e,t){let n=new WeakMap,r=new Xt;function s(a,o,c){let u=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=l!==void 0?l.length:0,f=n.get(o);if(f===void 0||f.count!==h){let S=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],E=0;p===!0&&(E=1),v===!0&&(E=2),_===!0&&(E=3);let M=o.attributes.position.count*E,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let A=new Float32Array(M*w*4*h),P=new ka(A,M,w,h);P.type=$n,P.needsUpdate=!0;let y=E*4;for(let L=0;L<h;L++){let U=g[L],D=m[L],Y=x[L],G=M*w*4*L;for(let C=0;C<U.count;C++){let N=C*y;p===!0&&(r.fromBufferAttribute(U,C),A[G+N+0]=r.x,A[G+N+1]=r.y,A[G+N+2]=r.z,A[G+N+3]=0),v===!0&&(r.fromBufferAttribute(D,C),A[G+N+4]=r.x,A[G+N+5]=r.y,A[G+N+6]=r.z,A[G+N+7]=0),_===!0&&(r.fromBufferAttribute(Y,C),A[G+N+8]=r.x,A[G+N+9]=r.y,A[G+N+10]=r.z,A[G+N+11]=Y.itemSize===4?r.w:1)}}f={count:h,texture:P,size:new ot(M,w)},n.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let _=0;_<u.length;_++)p+=u[_];let v=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function e1(i,e,t,n,r){let s=new WeakMap;function a(u){let l=r.render.frame,h=u.geometry,f=e.get(u,h);if(s.get(f)!==l&&(e.update(f),s.set(f,l)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),s.get(u)!==l&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),s.set(u,l))),u.isSkinnedMesh){let p=u.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return f}function o(){s=new WeakMap}function c(u){let l=u.target;l.removeEventListener("dispose",c),n.releaseStatesOfObject(l),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:o}}var t1={[lo]:"LINEAR_TONE_MAPPING",[co]:"REINHARD_TONE_MAPPING",[uo]:"CINEON_TONE_MAPPING",[hs]:"ACES_FILMIC_TONE_MAPPING",[fo]:"AGX_TONE_MAPPING",[po]:"NEUTRAL_TONE_MAPPING",[ho]:"CUSTOM_TONE_MAPPING"};function n1(i,e,t,n,r,s){let a=new mn(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,u=new Yt;u.setAttribute("position",new Ct([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Ct([0,2,0,0,2,0],2));let l=new $s({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Ve(u,l),f=new Xi(-1,1,1,-1,0,1),p=null,v=null,_=!1,g,m=null,x=[],E=!1;this.setSize=function(M,w){a.setSize(M,w),o!==null&&o.setSize(M,w),c!==null&&c.setSize(M,w);for(let A=0;A<x.length;A++){let P=x[A];P.setSize&&P.setSize(M,w)}},this.setEffects=function(M){x=M,E=x.length>0&&x[0].isRenderPass===!0;let w=a.width,A=a.height;x.length>0&&o===null&&(o=new mn(w,A,{type:An,depthBuffer:!1,stencilBuffer:!1}),c=new mn(w,A,{type:An,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<x.length;P++){let y=x[P];y.setSize&&y.setSize(w,A)}},this.begin=function(M,w){if(_||M.toneMapping===Li&&x.length===0)return!1;if(m=w,w!==null){let A=w.width,P=w.height;(a.width!==A||a.height!==P)&&this.setSize(A,P)}return E===!1&&M.setRenderTarget(a),g=M.toneMapping,M.toneMapping=Li,!0},this.hasRenderPass=function(){return E},this.end=function(M,w){M.toneMapping=g,_=!0;let A=a,P=o;for(let y=0;y<x.length;y++){let S=x[y];S.enabled!==!1&&(S.render(M,P,A,w),S.needsSwap!==!1&&(A=P,P=P===o?c:o))}if(p!==M.outputColorSpace||v!==M.toneMapping){p=M.outputColorSpace,v=M.toneMapping,l.defines={},bt.getTransfer(p)===Bt&&(l.defines.SRGB_TRANSFER="");let y=t1[v];y&&(l.defines[y]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=A.texture,M.setRenderTarget(m),M.render(h,f),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),u.dispose(),l.dispose()}}var _0=new hn,jh=new Lr(1,1),y0=new ka,M0=new Fl,S0=new Za,e0=[],t0=[],n0=new Float32Array(16),i0=new Float32Array(9),r0=new Float32Array(4);function da(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=e0[r];if(s===void 0&&(s=new Float32Array(r),e0[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function yn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Mn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function $c(i,e){let t=t0[e];t===void 0&&(t=new Int32Array(e),t0[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function i1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function r1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;i.uniform2fv(this.addr,e),Mn(t,e)}}function s1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yn(t,e))return;i.uniform3fv(this.addr,e),Mn(t,e)}}function a1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;i.uniform4fv(this.addr,e),Mn(t,e)}}function o1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(yn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Mn(t,e)}else{if(yn(t,n))return;r0.set(n),i.uniformMatrix2fv(this.addr,!1,r0),Mn(t,n)}}function l1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(yn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Mn(t,e)}else{if(yn(t,n))return;i0.set(n),i.uniformMatrix3fv(this.addr,!1,i0),Mn(t,n)}}function c1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(yn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Mn(t,e)}else{if(yn(t,n))return;n0.set(n),i.uniformMatrix4fv(this.addr,!1,n0),Mn(t,n)}}function u1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function h1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;i.uniform2iv(this.addr,e),Mn(t,e)}}function f1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yn(t,e))return;i.uniform3iv(this.addr,e),Mn(t,e)}}function d1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;i.uniform4iv(this.addr,e),Mn(t,e)}}function p1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function m1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;i.uniform2uiv(this.addr,e),Mn(t,e)}}function g1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yn(t,e))return;i.uniform3uiv(this.addr,e),Mn(t,e)}}function v1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;i.uniform4uiv(this.addr,e),Mn(t,e)}}function x1(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(jh.compareFunction=t.isReversedDepthBuffer()?Xc:Wc,s=jh):s=_0,t.setTexture2D(e||s,r)}function _1(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||M0,r)}function y1(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||S0,r)}function M1(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||y0,r)}function S1(i){switch(i){case 5126:return i1;case 35664:return r1;case 35665:return s1;case 35666:return a1;case 35674:return o1;case 35675:return l1;case 35676:return c1;case 5124:case 35670:return u1;case 35667:case 35671:return h1;case 35668:case 35672:return f1;case 35669:case 35673:return d1;case 5125:return p1;case 36294:return m1;case 36295:return g1;case 36296:return v1;case 35678:case 36198:case 36298:case 36306:case 35682:return x1;case 35679:case 36299:case 36307:return _1;case 35680:case 36300:case 36308:case 36293:return y1;case 36289:case 36303:case 36311:case 36292:return M1}}function b1(i,e){i.uniform1fv(this.addr,e)}function T1(i,e){let t=da(e,this.size,2);i.uniform2fv(this.addr,t)}function E1(i,e){let t=da(e,this.size,3);i.uniform3fv(this.addr,t)}function w1(i,e){let t=da(e,this.size,4);i.uniform4fv(this.addr,t)}function A1(i,e){let t=da(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function R1(i,e){let t=da(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function C1(i,e){let t=da(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function I1(i,e){i.uniform1iv(this.addr,e)}function P1(i,e){i.uniform2iv(this.addr,e)}function L1(i,e){i.uniform3iv(this.addr,e)}function N1(i,e){i.uniform4iv(this.addr,e)}function D1(i,e){i.uniform1uiv(this.addr,e)}function O1(i,e){i.uniform2uiv(this.addr,e)}function U1(i,e){i.uniform3uiv(this.addr,e)}function F1(i,e){i.uniform4uiv(this.addr,e)}function B1(i,e,t){let n=this.cache,r=e.length,s=$c(t,r);yn(n,s)||(i.uniform1iv(this.addr,s),Mn(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=jh:a=_0;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function H1(i,e,t){let n=this.cache,r=e.length,s=$c(t,r);yn(n,s)||(i.uniform1iv(this.addr,s),Mn(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||M0,s[a])}function k1(i,e,t){let n=this.cache,r=e.length,s=$c(t,r);yn(n,s)||(i.uniform1iv(this.addr,s),Mn(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||S0,s[a])}function q1(i,e,t){let n=this.cache,r=e.length,s=$c(t,r);yn(n,s)||(i.uniform1iv(this.addr,s),Mn(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||y0,s[a])}function z1(i){switch(i){case 5126:return b1;case 35664:return T1;case 35665:return E1;case 35666:return w1;case 35674:return A1;case 35675:return R1;case 35676:return C1;case 5124:case 35670:return I1;case 35667:case 35671:return P1;case 35668:case 35672:return L1;case 35669:case 35673:return N1;case 5125:return D1;case 36294:return O1;case 36295:return U1;case 36296:return F1;case 35678:case 36198:case 36298:case 36306:case 35682:return B1;case 35679:case 36299:case 36307:return H1;case 35680:case 36300:case 36308:case 36293:return k1;case 36289:case 36303:case 36311:case 36292:return q1}}var $h=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=S1(t.type)}},Qh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=z1(t.type)}},ef=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},Zh=/(\w+)(\])?(\[|\.)?/g;function s0(i,e){i.seq.push(e),i.map[e.id]=e}function G1(i,e,t){let n=i.name,r=n.length;for(Zh.lastIndex=0;;){let s=Zh.exec(n),a=Zh.lastIndex,o=s[1],c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){s0(t,u===void 0?new $h(o,i,e):new Qh(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new ef(o),s0(t,h)),t=h}}}var ha=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);G1(o,c,this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function a0(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var V1=37297,W1=0;function X1(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var o0=new pt;function Y1(i){bt._getMatrix(o0,bt.workingColorSpace,i);let e=`mat3( ${o0.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(i)){case Ba:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function l0(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+X1(i.getShaderSource(e),o)}else return s}function K1(i,e){let t=Y1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Z1={[lo]:"Linear",[co]:"Reinhard",[uo]:"Cineon",[hs]:"ACESFilmic",[fo]:"AgX",[po]:"Neutral",[ho]:"Custom"};function J1(i,e){let t=Z1[e];return t===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Kc=new j;function j1(){bt.getLuminanceCoefficients(Kc);let i=Kc.x.toFixed(4),e=Kc.y.toFixed(4),t=Kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wo).join(`
`)}function Q1(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ey(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),a=s.name,o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function wo(i){return i!==""}function c0(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function u0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ty=/^[ \t]*#include +<([\w\d./]+)>/gm;function tf(i){return i.replace(ty,iy)}var ny=new Map;function iy(i,e){let t=Tt[e];if(t===void 0){let n=ny.get(e);if(n!==void 0)t=Tt[n],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return tf(t)}var ry=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function h0(i){return i.replace(ry,sy)}function sy(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function f0(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var ay={[oo]:"SHADOWMAP_TYPE_PCF",[ia]:"SHADOWMAP_TYPE_VSM"};function oy(i){return ay[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ly={[Ur]:"ENVMAP_TYPE_CUBE",[fs]:"ENVMAP_TYPE_CUBE",[mo]:"ENVMAP_TYPE_CUBE_UV"};function cy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ly[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var uy={[fs]:"ENVMAP_MODE_REFRACTION"};function hy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":uy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var fy={[tc]:"ENVMAP_BLENDING_MULTIPLY",[Cp]:"ENVMAP_BLENDING_MIX",[Ip]:"ENVMAP_BLENDING_ADD"};function dy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":fy[i.combine]||"ENVMAP_BLENDING_NONE"}function py(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function my(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=oy(t),u=cy(t),l=hy(t),h=dy(t),f=py(t),p=$1(t),v=Q1(s),_=r.createProgram(),g,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(wo).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(wo).join(`
`),m.length>0&&(m+=`
`)):(g=[f0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wo).join(`
`),m=[f0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Li?"#define TONE_MAPPING":"",t.toneMapping!==Li?Tt.tonemapping_pars_fragment:"",t.toneMapping!==Li?J1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,K1("linearToOutputTexel",t.outputColorSpace),j1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wo).join(`
`)),a=tf(a),a=c0(a,t),a=u0(a,t),o=tf(o),o=c0(o,t),o=u0(o,t),a=h0(a),o=h0(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let E=x+g+a,M=x+m+o,w=a0(r,r.VERTEX_SHADER,E),A=a0(r,r.FRAGMENT_SHADER,M);r.attachShader(_,w),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function P(U){if(i.debug.checkShaderErrors){let D=r.getProgramInfoLog(_)||"",Y=r.getShaderInfoLog(w)||"",G=r.getShaderInfoLog(A)||"",C=D.trim(),N=Y.trim(),I=G.trim(),q=!0,V=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,w,A);else{let J=l0(r,w,"vertex"),re=l0(r,A,"fragment");dt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+C+`
`+J+`
`+re)}else C!==""?at("WebGLProgram: Program Info Log:",C):(N===""||I==="")&&(V=!1);V&&(U.diagnostics={runnable:q,programLog:C,vertexShader:{log:N,prefix:g},fragmentShader:{log:I,prefix:m}})}r.deleteShader(w),r.deleteShader(A),y=new ha(r,_),S=ey(r,_)}let y;this.getUniforms=function(){return y===void 0&&P(this),y};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(_,V1)),L},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=W1++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=A,this}var gy=0,nf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new rf(e),t.set(e,n)),n}},rf=class{constructor(e){this.id=gy++,this.code=e,this.usedTimes=0}};function vy(i){return i===Br||i===yo||i===Mo}function xy(i,e,t,n,r,s){let a=new qa,o=new nf,c=new Set,u=[],l=new Map,h=n.logarithmicDepthBuffer,f=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function _(y,S,L,U,D,Y){let G=U.fog,C=D.geometry,N=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?U.environment:null,I=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,q=e.get(y.envMap||N,I),V=q&&q.mapping===mo?q.image.height:null,J=p[y.type];y.precision!==null&&(f=n.getMaxPrecision(y.precision),f!==y.precision&&at("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let re=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,Se=re!==void 0?re.length:0,Ue=0;C.morphAttributes.position!==void 0&&(Ue=1),C.morphAttributes.normal!==void 0&&(Ue=2),C.morphAttributes.color!==void 0&&(Ue=3);let ut,et,Je,de;if(J){let Kt=Zi[J];ut=Kt.vertexShader,et=Kt.fragmentShader}else{ut=y.vertexShader,et=y.fragmentShader;let Kt=o.getVertexShaderStage(y),Ut=o.getFragmentShaderStage(y);o.update(y,Kt,Ut),Je=Kt.id,de=Ut.id}let _e=i.getRenderTarget(),De=i.state.buffers.depth.getReversed(),We=D.isInstancedMesh===!0,ze=D.isBatchedMesh===!0,ht=!!y.map,X=!!y.matcap,ye=!!q,qe=!!y.aoMap,me=!!y.lightMap,he=!!y.bumpMap&&y.wireframe===!1,Ae=!!y.normalMap,te=!!y.displacementMap,ne=!!y.emissiveMap,fe=!!y.metalnessMap,He=!!y.roughnessMap,W=y.anisotropy>0,tt=y.clearcoat>0,Te=y.dispersion>0,O=y.retroreflectivity>0,T=y.iridescence>0,ie=y.sheen>0,le=y.transmission>0,ve=W&&!!y.anisotropyMap,k=tt&&!!y.clearcoatMap,B=tt&&!!y.clearcoatNormalMap,F=tt&&!!y.clearcoatRoughnessMap,z=T&&!!y.iridescenceMap,Q=T&&!!y.iridescenceThicknessMap,pe=ie&&!!y.sheenColorMap,ue=ie&&!!y.sheenRoughnessMap,ge=!!y.specularMap,Ee=!!y.specularColorMap,Pe=!!y.specularIntensityMap,$e=le&&!!y.transmissionMap,K=le&&!!y.thicknessMap,Re=!!y.gradientMap,xe=!!y.alphaMap,Ce=y.alphaTest>0,Oe=!!y.alphaHash,we=!!y.extensions,st=Li;y.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(st=i.toneMapping);let rt={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:ut,fragmentShader:et,defines:y.defines,customVertexShaderID:Je,customFragmentShaderID:de,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:ze,batchingColor:ze&&D._colorsTexture!==null,instancing:We,instancingColor:We&&D.instanceColor!==null,instancingMorph:We&&D.morphTexture!==null,outputColorSpace:_e===null?i.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:bt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:ht,matcap:X,envMap:ye,envMapMode:ye&&q.mapping,envMapCubeUVHeight:V,aoMap:qe,lightMap:me,bumpMap:he,normalMap:Ae,displacementMap:te,emissiveMap:ne,normalMapObjectSpace:Ae&&y.normalMapType===Op,normalMapTangentSpace:Ae&&y.normalMapType===bo,packedNormalMap:Ae&&y.normalMapType===bo&&vy(y.normalMap.format),metalnessMap:fe,roughnessMap:He,anisotropy:W,anisotropyMap:ve,clearcoat:tt,clearcoatMap:k,clearcoatNormalMap:B,clearcoatRoughnessMap:F,dispersion:Te,retroreflection:O,iridescence:T,iridescenceMap:z,iridescenceThicknessMap:Q,sheen:ie,sheenColorMap:pe,sheenRoughnessMap:ue,specularMap:ge,specularColorMap:Ee,specularIntensityMap:Pe,transmission:le,transmissionMap:$e,thicknessMap:K,gradientMap:Re,opaque:y.transparent===!1&&y.blending===ra&&y.alphaToCoverage===!1,alphaMap:xe,alphaTest:Ce,alphaHash:Oe,combine:y.combine,mapUv:ht&&v(y.map.channel),aoMapUv:qe&&v(y.aoMap.channel),lightMapUv:me&&v(y.lightMap.channel),bumpMapUv:he&&v(y.bumpMap.channel),normalMapUv:Ae&&v(y.normalMap.channel),displacementMapUv:te&&v(y.displacementMap.channel),emissiveMapUv:ne&&v(y.emissiveMap.channel),metalnessMapUv:fe&&v(y.metalnessMap.channel),roughnessMapUv:He&&v(y.roughnessMap.channel),anisotropyMapUv:ve&&v(y.anisotropyMap.channel),clearcoatMapUv:k&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:B&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:F&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:z&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:ue&&v(y.sheenRoughnessMap.channel),specularMapUv:ge&&v(y.specularMap.channel),specularColorMapUv:Ee&&v(y.specularColorMap.channel),specularIntensityMapUv:Pe&&v(y.specularIntensityMap.channel),transmissionMapUv:$e&&v(y.transmissionMap.channel),thicknessMapUv:K&&v(y.thicknessMap.channel),alphaMapUv:xe&&v(y.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(Ae||W),vertexNormals:!!C.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!C.attributes.uv&&(ht||xe),fog:!!G,useFog:y.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||C.attributes.normal===void 0&&Ae===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:De,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Ue,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:st,decodeVideoTexture:ht&&y.map.isVideoTexture===!0&&bt.getTransfer(y.map.colorSpace)===Bt,decodeVideoTextureEmissive:ne&&y.emissiveMap.isVideoTexture===!0&&bt.getTransfer(y.emissiveMap.colorSpace)===Bt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===wn,flipSided:y.side===En,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:we&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&y.extensions.multiDraw===!0||ze)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return rt.vertexUv1s=c.has(1),rt.vertexUv2s=c.has(2),rt.vertexUv3s=c.has(3),c.clear(),rt}function g(y){let S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(let L in y.defines)S.push(L),S.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(m(S,y),x(S,y),S.push(i.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function m(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numSunLights),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numSunLightShadows),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function x(y,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function E(y){let S=p[y.type],L;if(S){let U=Zi[S];L=xr.clone(U.uniforms)}else L=y.uniforms;return L}function M(y,S){let L=l.get(S);return L!==void 0?++L.usedTimes:(L=new my(i,S,y,r),u.push(L),l.set(S,L)),L}function w(y){if(--y.usedTimes===0){let S=u.indexOf(y);u[S]=u[u.length-1],u.pop(),l.delete(y.cacheKey),y.destroy()}}function A(y){o.remove(y)}function P(){o.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:E,acquireProgram:M,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:P}}function _y(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function yy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function d0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function p0(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,v,_,g,m){let x=i[e];return x===void 0?(x={id:f.id,object:f,geometry:p,material:v,materialVariant:a(f),groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},i[e]=x):(x.id=f.id,x.object=f,x.geometry=p,x.material=v,x.materialVariant=a(f),x.groupOrder=_,x.renderOrder=f.renderOrder,x.z=g,x.group=m),e++,x}function c(f,p,v,_,g,m,x){x.reversedDepth===!0&&(g=-g);let E=o(f,p,v,_,g,m);v.transmission>0?n.push(E):v.transparent===!0?r.push(E):t.push(E)}function u(f,p,v,_,g,m){let x=o(f,p,v,_,g,m);v.transmission>0?n.unshift(x):v.transparent===!0?r.unshift(x):t.unshift(x)}function l(f,p){t.length>1&&t.sort(f||yy),n.length>1&&n.sort(p||d0),r.length>1&&r.sort(p||d0)}function h(){for(let f=e,p=i.length;f<p;f++){let v=i[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:u,finish:h,sort:l}}function My(){let i=new WeakMap;function e(n,r){let s=i.get(n),a;return s===void 0?(a=new p0,i.set(n,[a])):r>=s.length?(a=new p0,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Sy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new j,color:new nt};break;case"SpotLight":t={position:new j,direction:new j,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new j,halfWidth:new j,halfHeight:new j};break}return i[e.id]=t,t}}}function by(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Ty=0;function Ey(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function wy(i){let e=new Sy,t=by(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new j);let r=new j,s=new Mt,a=new Mt;function o(u){let l=0,h=0,f=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let p=0,v=0,_=0,g=0,m=0,x=0,E=0,M=0,w=0,A=0,P=0,y=0,S=0,L=0;u.sort(Ey);for(let D=0,Y=u.length;D<Y;D++){let G=u[D],C=G.color,N=G.intensity,I=G.distance,q=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Br?q=G.shadow.map.texture:q=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)l+=C.r*N,h+=C.g*N,f+=C.b*N;else if(G.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(G.sh.coefficients[V],N);L++}else if(G.isSunLight){let V=e.get(G);if(V.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){let J=G.shadow,re=t.get(G);re.shadowIntensity=J.intensity,re.shadowBias=J.bias,re.shadowNormalBias=J.normalBias,re.shadowRadius=J.radius,re.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[v]=re,n.sunShadowMap[v]=q;let Se=J.getViewportCount();for(let Ue=0;Ue<Se;Ue++)n.sunShadowMatrix[_+Ue]=J.getMatrix(Ue),n.sunShadowCascade[_+Ue]=J._cascadeData[Ue];_+=Se,v++}n.sun[p]=V,p++}else if(G.isDirectionalLight){let V=e.get(G);if(V.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){let J=G.shadow,re=t.get(G);re.shadowIntensity=J.intensity,re.shadowBias=J.bias,re.shadowNormalBias=J.normalBias,re.shadowRadius=J.radius,re.shadowMapSize=J.mapSize,n.directionalShadow[g]=re,n.directionalShadowMap[g]=q,n.directionalShadowMatrix[g]=G.shadow.matrix,w++}n.directional[g]=V,g++}else if(G.isSpotLight){let V=e.get(G);V.position.setFromMatrixPosition(G.matrixWorld),V.color.copy(C).multiplyScalar(N),V.distance=I,V.coneCos=Math.cos(G.angle),V.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),V.decay=G.decay,n.spot[x]=V;let J=G.shadow;if(G.map&&(n.spotLightMap[y]=G.map,y++,J.updateMatrices(G),G.castShadow&&S++),n.spotLightMatrix[x]=J.matrix,G.castShadow){let re=t.get(G);re.shadowIntensity=J.intensity,re.shadowBias=J.bias,re.shadowNormalBias=J.normalBias,re.shadowRadius=J.radius,re.shadowMapSize=J.mapSize,n.spotShadow[x]=re,n.spotShadowMap[x]=q,P++}x++}else if(G.isRectAreaLight){let V=e.get(G);V.color.copy(C).multiplyScalar(N),V.halfWidth.set(G.width*.5,0,0),V.halfHeight.set(0,G.height*.5,0),n.rectArea[E]=V,E++}else if(G.isPointLight){let V=e.get(G);if(V.color.copy(G.color).multiplyScalar(G.intensity),V.distance=G.distance,V.decay=G.decay,G.castShadow){let J=G.shadow,re=t.get(G);re.shadowIntensity=J.intensity,re.shadowBias=J.bias,re.shadowNormalBias=J.normalBias,re.shadowRadius=J.radius,re.shadowMapSize=J.mapSize,re.shadowCameraNear=J.camera.near,re.shadowCameraFar=J.camera.far,n.pointShadow[m]=re,n.pointShadowMap[m]=q,n.pointShadowMatrix[m]=G.shadow.matrix,A++}n.point[m]=V,m++}else if(G.isHemisphereLight){let V=e.get(G);V.skyColor.copy(G.color).multiplyScalar(N),V.groundColor.copy(G.groundColor).multiplyScalar(N),n.hemi[M]=V,M++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Xe.LTC_FLOAT_1,n.rectAreaLTC2=Xe.LTC_FLOAT_2):(n.rectAreaLTC1=Xe.LTC_HALF_1,n.rectAreaLTC2=Xe.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=h,n.ambient[2]=f;let U=n.hash;(U.sunLength!==p||U.directionalLength!==g||U.pointLength!==m||U.spotLength!==x||U.rectAreaLength!==E||U.hemiLength!==M||U.numSunShadows!==v||U.numDirectionalShadows!==w||U.numPointShadows!==A||U.numSpotShadows!==P||U.numSpotMaps!==y||U.numLightProbes!==L)&&(n.sun.length=p,n.directional.length=g,n.spot.length=x,n.rectArea.length=E,n.point.length=m,n.hemi.length=M,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+y-S,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=L,U.sunLength=p,U.directionalLength=g,U.pointLength=m,U.spotLength=x,U.rectAreaLength=E,U.hemiLength=M,U.numSunShadows=v,U.numDirectionalShadows=w,U.numPointShadows=A,U.numSpotShadows=P,U.numSpotMaps=y,U.numLightProbes=L,n.version=Ty++)}function c(u,l){let h=0,f=0,p=0,v=0,_=0,g=0,m=l.matrixWorldInverse;for(let x=0,E=u.length;x<E;x++){let M=u[x];if(M.isSunLight){let w=n.sun[h];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(m),h++}else if(M.isDirectionalLight){let w=n.directional[f];w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),f++}else if(M.isSpotLight){let w=n.spot[v];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),v++}else if(M.isRectAreaLight){let w=n.rectArea[_];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),a.identity(),s.copy(M.matrixWorld),s.premultiply(m),a.extractRotation(s),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){let w=n.point[p];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),p++}else if(M.isHemisphereLight){let w=n.hemi[g];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function m0(i){let e=new wy(i),t=[],n=[],r=[];function s(f){h.camera=f,t.length=0,n.length=0,r.length=0}function a(f){t.push(f)}function o(f){n.push(f)}function c(f){r.push(f)}function u(){e.setup(t)}function l(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:u,setupLightsView:l,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Ay(i){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new m0(i),e.set(r,[o])):s>=a.length?(o=new m0(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Ry=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cy=`uniform sampler2D shadow_pass;
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
}`,Iy=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],Py=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],g0=new Mt,Eo=new j,Jh=new j;function Ly(i,e,t){let n=new Zs,r=new ot,s=new ot,a=new Xt,o=new zl,c=new Gl,u={},l=t.maxTextureSize,h={[Yi]:En,[En]:Yi,[wn]:wn},f=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:Ry,fragmentShader:Cy}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let v=new Yt;v.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ve(v,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oo;let m=this.type;this.render=function(A,P,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===up&&(at("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=oo);let S=i.getRenderTarget(),L=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),D=i.state;D.setBlending(fi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let Y=m!==this.type;Y&&P.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(C=>C.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,C=A.length;G<C;G++){let N=A[G],I=N.shadow;if(I===void 0){at("WebGLShadowMap:",N,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);let q=I.getFrameExtents();r.multiply(q),s.copy(I.mapSize),(r.x>l||r.y>l)&&(r.x>l&&(s.x=Math.floor(l/q.x),r.x=s.x*q.x,I.mapSize.x=s.x),r.y>l&&(s.y=Math.floor(l/q.y),r.y=s.y*q.y,I.mapSize.y=s.y));let V=i.state.buffers.depth.getReversed();if(I.camera._reversedDepth=V,I.map===null||Y===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===ia){if(N.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new mn(r.x,r.y,{format:Br,type:An,minFilter:un,magFilter:un,generateMipmaps:!1}),I.map.texture.name=N.name+".shadowMap",I.map.depthTexture=new Lr(r.x,r.y,$n),I.map.depthTexture.name=N.name+".shadowMapDepth",I.map.depthTexture.format=qi,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=jt,I.map.depthTexture.magFilter=jt}else N.isPointLight?(I.map=new Zc(r.x),I.map.depthTexture=new kl(r.x,Di)):(I.map=new mn(r.x,r.y),I.map.depthTexture=new Lr(r.x,r.y,Di)),I.map.depthTexture.name=N.name+".shadowMap",I.map.depthTexture.format=qi,this.type===oo?(I.map.depthTexture.compareFunction=V?Xc:Wc,I.map.depthTexture.minFilter=un,I.map.depthTexture.magFilter=un):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=jt,I.map.depthTexture.magFilter=jt);I.camera.updateProjectionMatrix()}I.map.isWebGLCubeRenderTarget!==!0&&(I.map.width!==r.x||I.map.height!==r.y)&&I.map.setSize(r.x,r.y);let J=I.map.isWebGLCubeRenderTarget?6:I.getViewportCount();N.isPointLight!==!0&&I.updateMatrices(N,y);for(let re=0;re<J;re++){let Se=I.getCamera(re);if(N.isPointLight){let Ue=I.camera,ut=I.matrix,et=N.distance||Ue.far;et!==Ue.far&&(Ue.far=et,Ue.updateProjectionMatrix()),Eo.setFromMatrixPosition(N.matrixWorld),Ue.position.copy(Eo),Jh.copy(Ue.position),Jh.add(Iy[re]),Ue.up.copy(Py[re]),Ue.lookAt(Jh),Ue.updateMatrixWorld(),ut.makeTranslation(-Eo.x,-Eo.y,-Eo.z),g0.multiplyMatrices(Ue.projectionMatrix,Ue.matrixWorldInverse),I._frustum.setFromProjectionMatrix(g0,Ue.coordinateSystem,Ue.reversedDepth)}if(I.map.isWebGLCubeRenderTarget)i.setRenderTarget(I.map,re),i.clear();else{re===0&&(i.setRenderTarget(I.map),i.clear());let Ue=I.getViewport(re);a.set(s.x*Ue.x,s.y*Ue.y,s.x*Ue.z,s.y*Ue.w),D.viewport(a)}n=I.getFrustum(re),M(P,y,Se,N,this.type)}I.isPointLightShadow!==!0&&this.type===ia&&x(I,y),I.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(S,L,U)};function x(A,P){let y=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null?A.mapPass=new mn(r.x,r.y,{format:Br,type:An}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(P,null,y,f,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value.set(A.map.width,A.map.height),p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(P,null,y,p,_,null)}function E(A,P,y,S){let L=null,U=y.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)L=U;else if(L=y.isPointLight===!0?c:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let D=L.uuid,Y=P.uuid,G=u[D];G===void 0&&(G={},u[D]=G);let C=G[Y];C===void 0&&(C=L.clone(),G[Y]=C,P.addEventListener("dispose",w)),L=C}if(L.visible=P.visible,L.wireframe=P.wireframe,S===ia?L.side=P.shadowSide!==null?P.shadowSide:P.side:L.side=P.shadowSide!==null?P.shadowSide:h[P.side],L.alphaMap=P.alphaMap,L.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,L.map=P.map,L.clipShadows=P.clipShadows,L.clippingPlanes=P.clippingPlanes,L.clipIntersection=P.clipIntersection,L.displacementMap=P.displacementMap,L.displacementScale=P.displacementScale,L.displacementBias=P.displacementBias,L.wireframeLinewidth=P.wireframeLinewidth,L.linewidth=P.linewidth,y.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let D=i.properties.get(L);D.light=y}return L}function M(A,P,y,S,L){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&L===ia)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,A.matrixWorld);let Y=e.update(A),G=A.material;if(Array.isArray(G)){let C=Y.groups;for(let N=0,I=C.length;N<I;N++){let q=C[N],V=G[q.materialIndex];if(V&&V.visible){let J=E(A,V,S,L);A.onBeforeShadow(i,A,P,y,Y,J,q),i.renderBufferDirect(y,null,Y,J,A,q),A.onAfterShadow(i,A,P,y,Y,J,q)}}}else if(G.visible){let C=E(A,G,S,L);A.onBeforeShadow(i,A,P,y,Y,C,null),i.renderBufferDirect(y,null,Y,C,A,null),A.onAfterShadow(i,A,P,y,Y,C,null)}}let D=A.children;for(let Y=0,G=D.length;Y<G;Y++)M(D[Y],P,y,S,L)}function w(A){A.target.removeEventListener("dispose",w);for(let y in u){let S=u[y],L=A.target.uuid;L in S&&(S[L].dispose(),delete S[L])}}}function Ny(i,e){function t(){let K=!1,Re=new Xt,xe=null,Ce=new Xt(0,0,0,0);return{setMask:function(Oe){xe!==Oe&&!K&&(i.colorMask(Oe,Oe,Oe,Oe),xe=Oe)},setLocked:function(Oe){K=Oe},setClear:function(Oe,we,st,rt,Kt){Kt===!0&&(Oe*=rt,we*=rt,st*=rt),Re.set(Oe,we,st,rt),Ce.equals(Re)===!1&&(i.clearColor(Oe,we,st,rt),Ce.copy(Re))},reset:function(){K=!1,xe=null,Ce.set(-1,0,0,0)}}}function n(){let K=!1,Re=!1,xe=null,Ce=null,Oe=null;return{setReversed:function(we){if(Re!==we){let st=e.get("EXT_clip_control");we?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT),Re=we;let rt=Oe;Oe=null,this.setClear(rt)}},getReversed:function(){return Re},setTest:function(we){we?_e(i.DEPTH_TEST):De(i.DEPTH_TEST)},setMask:function(we){xe!==we&&!K&&(i.depthMask(we),xe=we)},setFunc:function(we){if(Re&&(we=Xp[we]),Ce!==we){switch(we){case Rl:i.depthFunc(i.NEVER);break;case Cl:i.depthFunc(i.ALWAYS);break;case Il:i.depthFunc(i.LESS);break;case Hs:i.depthFunc(i.LEQUAL);break;case Pl:i.depthFunc(i.EQUAL);break;case Ll:i.depthFunc(i.GEQUAL);break;case Nl:i.depthFunc(i.GREATER);break;case Dl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ce=we}},setLocked:function(we){K=we},setClear:function(we){Oe!==we&&(Oe=we,Re&&(we=1-we),i.clearDepth(we))},reset:function(){K=!1,xe=null,Ce=null,Oe=null,Re=!1}}}function r(){let K=!1,Re=null,xe=null,Ce=null,Oe=null,we=null,st=null,rt=null,Kt=null;return{setTest:function(Ut){K||(Ut?_e(i.STENCIL_TEST):De(i.STENCIL_TEST))},setMask:function(Ut){Re!==Ut&&!K&&(i.stencilMask(Ut),Re=Ut)},setFunc:function(Ut,Yn,ai){(xe!==Ut||Ce!==Yn||Oe!==ai)&&(i.stencilFunc(Ut,Yn,ai),xe=Ut,Ce=Yn,Oe=ai)},setOp:function(Ut,Yn,ai){(we!==Ut||st!==Yn||rt!==ai)&&(i.stencilOp(Ut,Yn,ai),we=Ut,st=Yn,rt=ai)},setLocked:function(Ut){K=Ut},setClear:function(Ut){Kt!==Ut&&(i.clearStencil(Ut),Kt=Ut)},reset:function(){K=!1,Re=null,xe=null,Ce=null,Oe=null,we=null,st=null,rt=null,Kt=null}}}let s=new t,a=new n,o=new r,c=new WeakMap,u=new WeakMap,l={},h={},f={},p=new WeakMap,v=[],_=null,g=!1,m=null,x=null,E=null,M=null,w=null,A=null,P=null,y=new nt(0,0,0),S=0,L=!1,U=null,D=null,Y=null,G=null,C=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),I=!1,q=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(V)[1]),I=q>=1):V.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),I=q>=2);let J=null,re={},Se=i.getParameter(i.SCISSOR_BOX),Ue=i.getParameter(i.VIEWPORT),ut=new Xt().fromArray(Se),et=new Xt().fromArray(Ue);function Je(K,Re,xe,Ce){let Oe=new Uint8Array(4),we=i.createTexture();i.bindTexture(K,we),i.texParameteri(K,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(K,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let st=0;st<xe;st++)K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?i.texImage3D(Re,0,i.RGBA,1,1,Ce,0,i.RGBA,i.UNSIGNED_BYTE,Oe):i.texImage2D(Re+st,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Oe);return we}let de={};de[i.TEXTURE_2D]=Je(i.TEXTURE_2D,i.TEXTURE_2D,1),de[i.TEXTURE_CUBE_MAP]=Je(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[i.TEXTURE_2D_ARRAY]=Je(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),de[i.TEXTURE_3D]=Je(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_e(i.DEPTH_TEST),a.setFunc(Hs),he(!1),Ae(_h),_e(i.CULL_FACE),qe(fi);function _e(K){l[K]!==!0&&(i.enable(K),l[K]=!0)}function De(K){l[K]!==!1&&(i.disable(K),l[K]=!1)}function We(K,Re){return f[K]!==Re?(i.bindFramebuffer(K,Re),f[K]=Re,K===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Re),K===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Re),!0):!1}function ze(K,Re){let xe=v,Ce=!1;if(K){xe=p.get(Re),xe===void 0&&(xe=[],p.set(Re,xe));let Oe=K.textures;if(xe.length!==Oe.length||xe[0]!==i.COLOR_ATTACHMENT0){for(let we=0,st=Oe.length;we<st;we++)xe[we]=i.COLOR_ATTACHMENT0+we;xe.length=Oe.length,Ce=!0}}else xe[0]!==i.BACK&&(xe[0]=i.BACK,Ce=!0);Ce&&i.drawBuffers(xe)}function ht(K){return _!==K?(i.useProgram(K),_=K,!0):!1}let X={[us]:i.FUNC_ADD,[fp]:i.FUNC_SUBTRACT,[dp]:i.FUNC_REVERSE_SUBTRACT};X[pp]=i.MIN,X[mp]=i.MAX;let ye={[gp]:i.ZERO,[vp]:i.ONE,[xp]:i.SRC_COLOR,[Sh]:i.SRC_ALPHA,[Tp]:i.SRC_ALPHA_SATURATE,[Sp]:i.DST_COLOR,[yp]:i.DST_ALPHA,[_p]:i.ONE_MINUS_SRC_COLOR,[bh]:i.ONE_MINUS_SRC_ALPHA,[bp]:i.ONE_MINUS_DST_COLOR,[Mp]:i.ONE_MINUS_DST_ALPHA,[Ep]:i.CONSTANT_COLOR,[wp]:i.ONE_MINUS_CONSTANT_COLOR,[Ap]:i.CONSTANT_ALPHA,[Rp]:i.ONE_MINUS_CONSTANT_ALPHA};function qe(K,Re,xe,Ce,Oe,we,st,rt,Kt,Ut){if(K===fi){g===!0&&(De(i.BLEND),g=!1);return}if(g===!1&&(_e(i.BLEND),g=!0),K!==hp){if(K!==m||Ut!==L){if((x!==us||w!==us)&&(i.blendEquation(i.FUNC_ADD),x=us,w=us),Ut)switch(K){case ra:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case di:i.blendFunc(i.ONE,i.ONE);break;case yh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:dt("WebGLState: Invalid blending: ",K);break}else switch(K){case ra:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case yh:dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mh:dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:dt("WebGLState: Invalid blending: ",K);break}E=null,M=null,A=null,P=null,y.set(0,0,0),S=0,m=K,L=Ut}return}Oe=Oe||Re,we=we||xe,st=st||Ce,(Re!==x||Oe!==w)&&(i.blendEquationSeparate(X[Re],X[Oe]),x=Re,w=Oe),(xe!==E||Ce!==M||we!==A||st!==P)&&(i.blendFuncSeparate(ye[xe],ye[Ce],ye[we],ye[st]),E=xe,M=Ce,A=we,P=st),(rt.equals(y)===!1||Kt!==S)&&(i.blendColor(rt.r,rt.g,rt.b,Kt),y.copy(rt),S=Kt),m=K,L=!1}function me(K,Re){K.side===wn?De(i.CULL_FACE):_e(i.CULL_FACE);let xe=K.side===En;Re&&(xe=!xe),he(xe),K.blending===ra&&K.transparent===!1?qe(fi):qe(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),a.setFunc(K.depthFunc),a.setTest(K.depthTest),a.setMask(K.depthWrite),s.setMask(K.colorWrite);let Ce=K.stencilWrite;o.setTest(Ce),Ce&&(o.setMask(K.stencilWriteMask),o.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),o.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),ne(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?_e(i.SAMPLE_ALPHA_TO_COVERAGE):De(i.SAMPLE_ALPHA_TO_COVERAGE)}function he(K){U!==K&&(K?i.frontFace(i.CW):i.frontFace(i.CCW),U=K)}function Ae(K){K!==lp?(_e(i.CULL_FACE),K!==D&&(K===_h?i.cullFace(i.BACK):K===cp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):De(i.CULL_FACE),D=K}function te(K){K!==Y&&(I&&i.lineWidth(K),Y=K)}function ne(K,Re,xe){K?(_e(i.POLYGON_OFFSET_FILL),(G!==Re||C!==xe)&&(G=Re,C=xe,a.getReversed()&&(Re=-Re),i.polygonOffset(Re,xe))):De(i.POLYGON_OFFSET_FILL)}function fe(K){K?_e(i.SCISSOR_TEST):De(i.SCISSOR_TEST)}function He(K){K===void 0&&(K=i.TEXTURE0+N-1),J!==K&&(i.activeTexture(K),J=K)}function W(K,Re,xe){xe===void 0&&(J===null?xe=i.TEXTURE0+N-1:xe=J);let Ce=re[xe];Ce===void 0&&(Ce={type:void 0,texture:void 0},re[xe]=Ce),(Ce.type!==K||Ce.texture!==Re)&&(J!==xe&&(i.activeTexture(xe),J=xe),i.bindTexture(K,Re||de[K]),Ce.type=K,Ce.texture=Re)}function tt(){let K=re[J];K!==void 0&&K.type!==void 0&&(i.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function Te(){try{i.compressedTexImage2D(...arguments)}catch(K){dt("WebGLState:",K)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(K){dt("WebGLState:",K)}}function T(){try{i.texSubImage2D(...arguments)}catch(K){dt("WebGLState:",K)}}function ie(){try{i.texSubImage3D(...arguments)}catch(K){dt("WebGLState:",K)}}function le(){try{i.compressedTexSubImage2D(...arguments)}catch(K){dt("WebGLState:",K)}}function ve(){try{i.compressedTexSubImage3D(...arguments)}catch(K){dt("WebGLState:",K)}}function k(){try{i.texStorage2D(...arguments)}catch(K){dt("WebGLState:",K)}}function B(){try{i.texStorage3D(...arguments)}catch(K){dt("WebGLState:",K)}}function F(){try{i.texImage2D(...arguments)}catch(K){dt("WebGLState:",K)}}function z(){try{i.texImage3D(...arguments)}catch(K){dt("WebGLState:",K)}}function Q(K){return h[K]!==void 0?h[K]:i.getParameter(K)}function pe(K,Re){h[K]!==Re&&(i.pixelStorei(K,Re),h[K]=Re)}function ue(K){ut.equals(K)===!1&&(i.scissor(K.x,K.y,K.z,K.w),ut.copy(K))}function ge(K){et.equals(K)===!1&&(i.viewport(K.x,K.y,K.z,K.w),et.copy(K))}function Ee(K,Re){let xe=u.get(Re);xe===void 0&&(xe=new WeakMap,u.set(Re,xe));let Ce=xe.get(K);Ce===void 0&&(Ce=i.getUniformBlockIndex(Re,K.name),xe.set(K,Ce))}function Pe(K,Re){let Ce=u.get(Re).get(K);c.get(Re)!==Ce&&(i.uniformBlockBinding(Re,Ce,K.__bindingPointIndex),c.set(Re,Ce))}function $e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),l={},h={},J=null,re={},f={},p=new WeakMap,v=[],_=null,g=!1,m=null,x=null,E=null,M=null,w=null,A=null,P=null,y=new nt(0,0,0),S=0,L=!1,U=null,D=null,Y=null,G=null,C=null,ut.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:_e,disable:De,bindFramebuffer:We,drawBuffers:ze,useProgram:ht,setBlending:qe,setMaterial:me,setFlipSided:he,setCullFace:Ae,setLineWidth:te,setPolygonOffset:ne,setScissorTest:fe,activeTexture:He,bindTexture:W,unbindTexture:tt,compressedTexImage2D:Te,compressedTexImage3D:O,texImage2D:F,texImage3D:z,pixelStorei:pe,getParameter:Q,updateUBOMapping:Ee,uniformBlockBinding:Pe,texStorage2D:k,texStorage3D:B,texSubImage2D:T,texSubImage3D:ie,compressedTexSubImage2D:le,compressedTexSubImage3D:ve,scissor:ue,viewport:ge,reset:$e}}function Dy(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ot,l=new WeakMap,h=new Set,f,p=new WeakMap,v=!1;try{v=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(O,T){return v?new OffscreenCanvas(O,T):zs("canvas")}function g(O,T,ie){let le=1,ve=Te(O);if((ve.width>ie||ve.height>ie)&&(le=ie/Math.max(ve.width,ve.height)),le<1)if(typeof HTMLImageElement!="undefined"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&O instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&O instanceof ImageBitmap||typeof VideoFrame!="undefined"&&O instanceof VideoFrame){let k=Math.floor(le*ve.width),B=Math.floor(le*ve.height);f===void 0&&(f=_(k,B));let F=T?_(k,B):f;return F.width=k,F.height=B,F.getContext("2d").drawImage(O,0,0,k,B),at("WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+k+"x"+B+")."),F}else return"data"in O&&at("WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),O;return O}function m(O){return O.generateMipmaps}function x(O){i.generateMipmap(O)}function E(O){return O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?i.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(O,T,ie,le,ve,k=!1){if(O!==null){if(i[O]!==void 0)return i[O];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let B;le&&(B=e.get("EXT_texture_norm16"),B||at("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let F=T;if(T===i.RED&&(ie===i.FLOAT&&(F=i.R32F),ie===i.HALF_FLOAT&&(F=i.R16F),ie===i.UNSIGNED_BYTE&&(F=i.R8),ie===i.UNSIGNED_SHORT&&B&&(F=B.R16_EXT),ie===i.SHORT&&B&&(F=B.R16_SNORM_EXT)),T===i.RED_INTEGER&&(ie===i.UNSIGNED_BYTE&&(F=i.R8UI),ie===i.UNSIGNED_SHORT&&(F=i.R16UI),ie===i.UNSIGNED_INT&&(F=i.R32UI),ie===i.BYTE&&(F=i.R8I),ie===i.SHORT&&(F=i.R16I),ie===i.INT&&(F=i.R32I)),T===i.RG&&(ie===i.FLOAT&&(F=i.RG32F),ie===i.HALF_FLOAT&&(F=i.RG16F),ie===i.UNSIGNED_BYTE&&(F=i.RG8),ie===i.UNSIGNED_SHORT&&B&&(F=B.RG16_EXT),ie===i.SHORT&&B&&(F=B.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(ie===i.UNSIGNED_BYTE&&(F=i.RG8UI),ie===i.UNSIGNED_SHORT&&(F=i.RG16UI),ie===i.UNSIGNED_INT&&(F=i.RG32UI),ie===i.BYTE&&(F=i.RG8I),ie===i.SHORT&&(F=i.RG16I),ie===i.INT&&(F=i.RG32I)),T===i.RGB_INTEGER&&(ie===i.UNSIGNED_BYTE&&(F=i.RGB8UI),ie===i.UNSIGNED_SHORT&&(F=i.RGB16UI),ie===i.UNSIGNED_INT&&(F=i.RGB32UI),ie===i.BYTE&&(F=i.RGB8I),ie===i.SHORT&&(F=i.RGB16I),ie===i.INT&&(F=i.RGB32I)),T===i.RGBA_INTEGER&&(ie===i.UNSIGNED_BYTE&&(F=i.RGBA8UI),ie===i.UNSIGNED_SHORT&&(F=i.RGBA16UI),ie===i.UNSIGNED_INT&&(F=i.RGBA32UI),ie===i.BYTE&&(F=i.RGBA8I),ie===i.SHORT&&(F=i.RGBA16I),ie===i.INT&&(F=i.RGBA32I)),T===i.RGB&&(ie===i.UNSIGNED_SHORT&&B&&(F=B.RGB16_EXT),ie===i.SHORT&&B&&(F=B.RGB16_SNORM_EXT),ie===i.UNSIGNED_INT_5_9_9_9_REV&&(F=i.RGB9_E5),ie===i.UNSIGNED_INT_10F_11F_11F_REV&&(F=i.R11F_G11F_B10F)),T===i.RGBA){let z=k?Ba:bt.getTransfer(ve);ie===i.FLOAT&&(F=i.RGBA32F),ie===i.HALF_FLOAT&&(F=i.RGBA16F),ie===i.UNSIGNED_BYTE&&(F=z===Bt?i.SRGB8_ALPHA8:i.RGBA8),ie===i.UNSIGNED_SHORT&&B&&(F=B.RGBA16_EXT),ie===i.SHORT&&B&&(F=B.RGBA16_SNORM_EXT),ie===i.UNSIGNED_SHORT_4_4_4_4&&(F=i.RGBA4),ie===i.UNSIGNED_SHORT_5_5_5_1&&(F=i.RGB5_A1)}return(F===i.R16F||F===i.R32F||F===i.RG16F||F===i.RG32F||F===i.RGBA16F||F===i.RGBA32F)&&e.get("EXT_color_buffer_float"),F}function w(O,T){let ie;return O?T===null||T===Di||T===oa?ie=i.DEPTH24_STENCIL8:T===$n?ie=i.DEPTH32F_STENCIL8:T===aa&&(ie=i.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Di||T===oa?ie=i.DEPTH_COMPONENT24:T===$n?ie=i.DEPTH_COMPONENT32F:T===aa&&(ie=i.DEPTH_COMPONENT16),ie}function A(O,T){return m(O)===!0||O.isFramebufferTexture&&O.minFilter!==jt&&O.minFilter!==un?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function P(O){let T=O.target;T.removeEventListener("dispose",P),S(T),T.isVideoTexture&&l.delete(T),T.isHTMLTexture&&h.delete(T)}function y(O){let T=O.target;T.removeEventListener("dispose",y),U(T)}function S(O){let T=n.get(O);if(T.__webglInit===void 0)return;let ie=O.source,le=p.get(ie);if(le){let ve=le[T.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&L(O),Object.keys(le).length===0&&p.delete(ie)}n.remove(O)}function L(O){let T=n.get(O);i.deleteTexture(T.__webglTexture);let ie=O.source,le=p.get(ie);delete le[T.__cacheKey],a.memory.textures--}function U(O){let T=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(T.__webglFramebuffer[le]))for(let ve=0;ve<T.__webglFramebuffer[le].length;ve++)i.deleteFramebuffer(T.__webglFramebuffer[le][ve]);else i.deleteFramebuffer(T.__webglFramebuffer[le]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[le])}else{if(Array.isArray(T.__webglFramebuffer))for(let le=0;le<T.__webglFramebuffer.length;le++)i.deleteFramebuffer(T.__webglFramebuffer[le]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let le=0;le<T.__webglColorRenderbuffer.length;le++)T.__webglColorRenderbuffer[le]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[le]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let ie=O.textures;for(let le=0,ve=ie.length;le<ve;le++){let k=n.get(ie[le]);k.__webglTexture&&(i.deleteTexture(k.__webglTexture),a.memory.textures--),n.remove(ie[le])}n.remove(O)}let D=0;function Y(){D=0}function G(){return D}function C(O){D=O}function N(){let O=D;return O>=r.maxTextures&&at("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+r.maxTextures),D+=1,O}function I(O){let T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function q(O,T){let ie=n.get(O);if(O.isVideoTexture&&W(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&ie.__version!==O.version){let le=O.image;if(le===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{De(ie,O,T);return}}else O.isExternalTexture&&(ie.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,ie.__webglTexture,i.TEXTURE0+T)}function V(O,T){let ie=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&ie.__version!==O.version){De(ie,O,T);return}else O.isExternalTexture&&(ie.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,ie.__webglTexture,i.TEXTURE0+T)}function J(O,T){let ie=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&ie.__version!==O.version){De(ie,O,T);return}t.bindTexture(i.TEXTURE_3D,ie.__webglTexture,i.TEXTURE0+T)}function re(O,T){let ie=n.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&ie.__version!==O.version){We(ie,O,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture,i.TEXTURE0+T)}let Se={[ui]:i.REPEAT,[ci]:i.CLAMP_TO_EDGE,[ks]:i.MIRRORED_REPEAT},Ue={[jt]:i.NEAREST,[rc]:i.NEAREST_MIPMAP_NEAREST,[ds]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[sa]:i.LINEAR_MIPMAP_NEAREST,[Ni]:i.LINEAR_MIPMAP_LINEAR},ut={[Fp]:i.NEVER,[zp]:i.ALWAYS,[Bp]:i.LESS,[Wc]:i.LEQUAL,[Hp]:i.EQUAL,[Xc]:i.GEQUAL,[kp]:i.GREATER,[qp]:i.NOTEQUAL};function et(O,T){if(T.type===$n&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===un||T.magFilter===sa||T.magFilter===ds||T.magFilter===Ni||T.minFilter===un||T.minFilter===sa||T.minFilter===ds||T.minFilter===Ni)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,Se[T.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,Se[T.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,Se[T.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,Ue[T.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,Ue[T.minFilter]),T.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,ut[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===jt||T.minFilter!==ds&&T.minFilter!==Ni||T.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let ie=e.get("EXT_texture_filter_anisotropic");i.texParameterf(O,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Je(O,T){let ie=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",P));let le=T.source,ve=p.get(le);ve===void 0&&(ve={},p.set(le,ve));let k=I(T);if(k!==O.__cacheKey){ve[k]===void 0&&(ve[k]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,ie=!0),ve[k].usedTimes++;let B=ve[O.__cacheKey];B!==void 0&&(ve[O.__cacheKey].usedTimes--,B.usedTimes===0&&L(T)),O.__cacheKey=k,O.__webglTexture=ve[k].texture}return ie}function de(O,T,ie){return Math.floor(Math.floor(O/ie)/T)}function _e(O,T,ie,le){let k=O.updateRanges;if(k.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,ie,le,T.data);else{k.sort((pe,ue)=>pe.start-ue.start);let B=0;for(let pe=1;pe<k.length;pe++){let ue=k[B],ge=k[pe],Ee=ue.start+ue.count,Pe=de(ge.start,T.width,4),$e=de(ue.start,T.width,4);ge.start<=Ee+1&&Pe===$e&&de(ge.start+ge.count-1,T.width,4)===Pe?ue.count=Math.max(ue.count,ge.start+ge.count-ue.start):(++B,k[B]=ge)}k.length=B+1;let F=t.getParameter(i.UNPACK_ROW_LENGTH),z=t.getParameter(i.UNPACK_SKIP_PIXELS),Q=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let pe=0,ue=k.length;pe<ue;pe++){let ge=k[pe],Ee=Math.floor(ge.start/4),Pe=Math.ceil(ge.count/4),$e=Ee%T.width,K=Math.floor(Ee/T.width),Re=Pe,xe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,$e),t.pixelStorei(i.UNPACK_SKIP_ROWS,K),t.texSubImage2D(i.TEXTURE_2D,0,$e,K,Re,xe,ie,le,T.data)}O.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,F),t.pixelStorei(i.UNPACK_SKIP_PIXELS,z),t.pixelStorei(i.UNPACK_SKIP_ROWS,Q)}}function De(O,T,ie){let le=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(le=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(le=i.TEXTURE_3D);let ve=Je(O,T),k=T.source;t.bindTexture(le,O.__webglTexture,i.TEXTURE0+ie);let B=n.get(k);if(k.version!==B.__version||ve===!0){if(t.activeTexture(i.TEXTURE0+ie),(typeof ImageBitmap!="undefined"&&T.image instanceof ImageBitmap)===!1){let xe=bt.getPrimaries(bt.workingColorSpace),Ce=T.colorSpace===ei?null:bt.getPrimaries(T.colorSpace),Oe=T.colorSpace===ei||xe===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe)}t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let z=g(T.image,!1,r.maxTextureSize);z=tt(T,z);let Q=s.convert(T.format,T.colorSpace),pe=s.convert(T.type),ue=M(T.internalFormat,Q,pe,T.normalized,T.colorSpace,T.isVideoTexture);et(le,T);let ge,Ee=T.mipmaps,Pe=T.isVideoTexture!==!0,$e=B.__version===void 0||ve===!0,K=k.dataReady,Re=A(T,z);if(T.isDepthTexture)ue=w(T.format===Fr,T.type),$e&&(Pe?t.texStorage2D(i.TEXTURE_2D,1,ue,z.width,z.height):t.texImage2D(i.TEXTURE_2D,0,ue,z.width,z.height,0,Q,pe,null));else if(T.isDataTexture)if(Ee.length>0){Pe&&$e&&t.texStorage2D(i.TEXTURE_2D,Re,ue,Ee[0].width,Ee[0].height);for(let xe=0,Ce=Ee.length;xe<Ce;xe++)ge=Ee[xe],Pe?K&&t.texSubImage2D(i.TEXTURE_2D,xe,0,0,ge.width,ge.height,Q,pe,ge.data):t.texImage2D(i.TEXTURE_2D,xe,ue,ge.width,ge.height,0,Q,pe,ge.data);T.generateMipmaps=!1}else Pe?($e&&t.texStorage2D(i.TEXTURE_2D,Re,ue,z.width,z.height),K&&_e(T,z,Q,pe)):t.texImage2D(i.TEXTURE_2D,0,ue,z.width,z.height,0,Q,pe,z.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Pe&&$e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,ue,Ee[0].width,Ee[0].height,z.depth);for(let xe=0,Ce=Ee.length;xe<Ce;xe++)if(ge=Ee[xe],T.format!==Qn)if(Q!==null)if(Pe){if(K)if(T.layerUpdates.size>0){let Oe=Hh(ge.width,ge.height,T.format,T.type);for(let we of T.layerUpdates){let st=ge.data.subarray(we*Oe/ge.data.BYTES_PER_ELEMENT,(we+1)*Oe/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,we,ge.width,ge.height,1,Q,st)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,0,ge.width,ge.height,z.depth,Q,ge.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,xe,ue,ge.width,ge.height,z.depth,0,ge.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?K&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,0,ge.width,ge.height,z.depth,Q,pe,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,xe,ue,ge.width,ge.height,z.depth,0,Q,pe,ge.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Pe&&$e&&t.texStorage2D(i.TEXTURE_2D,Re,ue,Ee[0].width,Ee[0].height);for(let xe=0,Ce=Ee.length;xe<Ce;xe++)ge=Ee[xe],T.format!==Qn?Q!==null?Pe?K&&t.compressedTexSubImage2D(i.TEXTURE_2D,xe,0,0,ge.width,ge.height,Q,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,xe,ue,ge.width,ge.height,0,ge.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?K&&t.texSubImage2D(i.TEXTURE_2D,xe,0,0,ge.width,ge.height,Q,pe,ge.data):t.texImage2D(i.TEXTURE_2D,xe,ue,ge.width,ge.height,0,Q,pe,ge.data)}else if(T.isDataArrayTexture)if(Pe){if($e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,ue,z.width,z.height,z.depth),K)if(T.layerUpdates.size>0){let xe=Hh(z.width,z.height,T.format,T.type);for(let Ce of T.layerUpdates){let Oe=z.data.subarray(Ce*xe/z.data.BYTES_PER_ELEMENT,(Ce+1)*xe/z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ce,z.width,z.height,1,Q,pe,Oe)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,z.width,z.height,z.depth,Q,pe,z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ue,z.width,z.height,z.depth,0,Q,pe,z.data);else if(T.isData3DTexture)Pe?($e&&t.texStorage3D(i.TEXTURE_3D,Re,ue,z.width,z.height,z.depth),K&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,z.width,z.height,z.depth,Q,pe,z.data)):t.texImage3D(i.TEXTURE_3D,0,ue,z.width,z.height,z.depth,0,Q,pe,z.data);else if(T.isFramebufferTexture){if($e)if(Pe)t.texStorage2D(i.TEXTURE_2D,Re,ue,z.width,z.height);else{let xe=z.width,Ce=z.height;for(let Oe=0;Oe<Re;Oe++)t.texImage2D(i.TEXTURE_2D,Oe,ue,xe,Ce,0,Q,pe,null),xe>>=1,Ce>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let xe=i.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),z.parentNode!==xe){xe.appendChild(z),h.add(T),xe.onpaint=Ce=>{let Oe=Ce.changedElements;for(let we of h)Oe.includes(we.image)&&(we.needsUpdate=!0)},xe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,z);else{let Oe=i.RGBA,we=i.RGBA,st=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Oe,we,st,z)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ee.length>0){if(Pe&&$e){let xe=Te(Ee[0]);t.texStorage2D(i.TEXTURE_2D,Re,ue,xe.width,xe.height)}for(let xe=0,Ce=Ee.length;xe<Ce;xe++)ge=Ee[xe],Pe?K&&t.texSubImage2D(i.TEXTURE_2D,xe,0,0,Q,pe,ge):t.texImage2D(i.TEXTURE_2D,xe,ue,Q,pe,ge);T.generateMipmaps=!1}else if(Pe){if($e){let xe=Te(z);t.texStorage2D(i.TEXTURE_2D,Re,ue,xe.width,xe.height)}K&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q,pe,z)}else t.texImage2D(i.TEXTURE_2D,0,ue,Q,pe,z);m(T)&&x(le),B.__version=k.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function We(O,T,ie){if(T.image.length!==6)return;let le=Je(O,T),ve=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+ie);let k=n.get(ve);if(ve.version!==k.__version||le===!0){t.activeTexture(i.TEXTURE0+ie);let B=bt.getPrimaries(bt.workingColorSpace),F=T.colorSpace===ei?null:bt.getPrimaries(T.colorSpace),z=T.colorSpace===ei||B===F?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,z);let Q=T.isCompressedTexture||T.image[0].isCompressedTexture,pe=T.image[0]&&T.image[0].isDataTexture,ue=[];for(let we=0;we<6;we++)!Q&&!pe?ue[we]=g(T.image[we],!0,r.maxCubemapSize):ue[we]=pe?T.image[we].image:T.image[we],ue[we]=tt(T,ue[we]);let ge=ue[0],Ee=s.convert(T.format,T.colorSpace),Pe=s.convert(T.type),$e=M(T.internalFormat,Ee,Pe,T.normalized,T.colorSpace),K=T.isVideoTexture!==!0,Re=k.__version===void 0||le===!0,xe=ve.dataReady,Ce=A(T,ge);et(i.TEXTURE_CUBE_MAP,T);let Oe;if(Q){K&&Re&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,$e,ge.width,ge.height);for(let we=0;we<6;we++){Oe=ue[we].mipmaps;for(let st=0;st<Oe.length;st++){let rt=Oe[st];T.format!==Qn?Ee!==null?K?xe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,st,0,0,rt.width,rt.height,Ee,rt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,st,$e,rt.width,rt.height,0,rt.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,st,0,0,rt.width,rt.height,Ee,Pe,rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,st,$e,rt.width,rt.height,0,Ee,Pe,rt.data)}}}else{if(Oe=T.mipmaps,K&&Re){Oe.length>0&&Ce++;let we=Te(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,$e,we.width,we.height)}for(let we=0;we<6;we++)if(pe){K?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,ue[we].width,ue[we].height,Ee,Pe,ue[we].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,$e,ue[we].width,ue[we].height,0,Ee,Pe,ue[we].data);for(let st=0;st<Oe.length;st++){let Kt=Oe[st].image[we].image;K?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,st+1,0,0,Kt.width,Kt.height,Ee,Pe,Kt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,st+1,$e,Kt.width,Kt.height,0,Ee,Pe,Kt.data)}}else{K?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,Ee,Pe,ue[we]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,$e,Ee,Pe,ue[we]);for(let st=0;st<Oe.length;st++){let rt=Oe[st];K?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,st+1,0,0,Ee,Pe,rt.image[we]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,st+1,$e,Ee,Pe,rt.image[we])}}}m(T)&&x(i.TEXTURE_CUBE_MAP),k.__version=ve.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function ze(O,T,ie,le,ve,k){let B=s.convert(ie.format,ie.colorSpace),F=s.convert(ie.type),z=M(ie.internalFormat,B,F,ie.normalized,ie.colorSpace),Q=n.get(T),pe=n.get(ie);if(pe.__renderTarget=T,!Q.__hasExternalTextures){let ue=Math.max(1,T.width>>k),ge=Math.max(1,T.height>>k);ve===i.TEXTURE_3D||ve===i.TEXTURE_2D_ARRAY?t.texImage3D(ve,k,z,ue,ge,T.depth,0,B,F,null):t.texImage2D(ve,k,z,ue,ge,0,B,F,null)}t.bindFramebuffer(i.FRAMEBUFFER,O),He(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,ve,pe.__webglTexture,0,fe(T)):(ve===i.TEXTURE_2D||ve>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,le,ve,pe.__webglTexture,k),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(O,T,ie){if(i.bindRenderbuffer(i.RENDERBUFFER,O),T.depthBuffer){let le=T.depthTexture,ve=le&&le.isDepthTexture?le.type:null,k=w(T.stencilBuffer,ve),B=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;He(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe(T),k,T.width,T.height):ie?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe(T),k,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,k,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,B,i.RENDERBUFFER,O)}else{let le=T.textures;for(let ve=0;ve<le.length;ve++){let k=le[ve],B=s.convert(k.format,k.colorSpace),F=s.convert(k.type),z=M(k.internalFormat,B,F,k.normalized,k.colorSpace);He(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe(T),z,T.width,T.height):ie?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe(T),z,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,z,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function X(O,T,ie){let le=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ve=n.get(T.depthTexture);if(ve.__renderTarget=T,(!ve.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),le){if(ve.__webglInit===void 0&&(ve.__webglInit=!0,T.depthTexture.addEventListener("dispose",P)),ve.__webglTexture===void 0){ve.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ve.__webglTexture),et(i.TEXTURE_CUBE_MAP,T.depthTexture);let Q=s.convert(T.depthTexture.format),pe=s.convert(T.depthTexture.type),ue;T.depthTexture.format===qi?ue=i.DEPTH_COMPONENT24:T.depthTexture.format===Fr&&(ue=i.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ue,T.width,T.height,0,Q,pe,null)}}else q(T.depthTexture,0);let k=ve.__webglTexture,B=fe(T),F=le?i.TEXTURE_CUBE_MAP_POSITIVE_X+ie:i.TEXTURE_2D,z=T.depthTexture.format===Fr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===qi)He(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,F,k,0,B):i.framebufferTexture2D(i.FRAMEBUFFER,z,F,k,0);else if(T.depthTexture.format===Fr)He(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,F,k,0,B):i.framebufferTexture2D(i.FRAMEBUFFER,z,F,k,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ye(O){let T=n.get(O),ie=O.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==O.depthTexture){let le=O.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),le){let ve=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,le.removeEventListener("dispose",ve)};le.addEventListener("dispose",ve),T.__depthDisposeCallback=ve}T.__boundDepthTexture=le}if(O.depthTexture&&!T.__autoAllocateDepthBuffer)if(ie)for(let le=0;le<6;le++)X(T.__webglFramebuffer[le],O,le);else{let le=O.texture.mipmaps;le&&le.length>0?X(T.__webglFramebuffer[0],O,0):X(T.__webglFramebuffer,O,0)}else if(ie){T.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[le]),T.__webglDepthbuffer[le]===void 0)T.__webglDepthbuffer[le]=i.createRenderbuffer(),ht(T.__webglDepthbuffer[le],O,!1);else{let ve=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=T.__webglDepthbuffer[le];i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,k)}}else{let le=O.texture.mipmaps;if(le&&le.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),ht(T.__webglDepthbuffer,O,!1);else{let ve=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,k)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(O,T,ie){let le=n.get(O);T!==void 0&&ze(le.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ie!==void 0&&ye(O)}function me(O){let T=O.texture,ie=n.get(O),le=n.get(T);O.addEventListener("dispose",y);let ve=O.textures,k=O.isWebGLCubeRenderTarget===!0,B=ve.length>1;if(B||(le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture()),le.__version=T.version,a.memory.textures++),k){ie.__webglFramebuffer=[];for(let F=0;F<6;F++)if(T.mipmaps&&T.mipmaps.length>0){ie.__webglFramebuffer[F]=[];for(let z=0;z<T.mipmaps.length;z++)ie.__webglFramebuffer[F][z]=i.createFramebuffer()}else ie.__webglFramebuffer[F]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){ie.__webglFramebuffer=[];for(let F=0;F<T.mipmaps.length;F++)ie.__webglFramebuffer[F]=i.createFramebuffer()}else ie.__webglFramebuffer=i.createFramebuffer();if(B)for(let F=0,z=ve.length;F<z;F++){let Q=n.get(ve[F]);Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture(),a.memory.textures++)}if(O.samples>0&&He(O)===!1){ie.__webglMultisampledFramebuffer=i.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let F=0;F<ve.length;F++){let z=ve[F];ie.__webglColorRenderbuffer[F]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ie.__webglColorRenderbuffer[F]);let Q=s.convert(z.format,z.colorSpace),pe=s.convert(z.type),ue=M(z.internalFormat,Q,pe,z.normalized,z.colorSpace,O.isXRRenderTarget===!0),ge=fe(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,ue,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+F,i.RENDERBUFFER,ie.__webglColorRenderbuffer[F])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(ie.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(ie.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(k){t.bindTexture(i.TEXTURE_CUBE_MAP,le.__webglTexture),et(i.TEXTURE_CUBE_MAP,T);for(let F=0;F<6;F++)if(T.mipmaps&&T.mipmaps.length>0)for(let z=0;z<T.mipmaps.length;z++)ze(ie.__webglFramebuffer[F][z],O,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+F,z);else ze(ie.__webglFramebuffer[F],O,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0);m(T)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(B){for(let F=0,z=ve.length;F<z;F++){let Q=ve[F],pe=n.get(Q),ue=i.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(ue=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,pe.__webglTexture),et(ue,Q),ze(ie.__webglFramebuffer,O,Q,i.COLOR_ATTACHMENT0+F,ue,0),m(Q)&&x(ue)}t.unbindTexture()}else{let F=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(F=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(F,le.__webglTexture),et(F,T),T.mipmaps&&T.mipmaps.length>0)for(let z=0;z<T.mipmaps.length;z++)ze(ie.__webglFramebuffer[z],O,T,i.COLOR_ATTACHMENT0,F,z);else ze(ie.__webglFramebuffer,O,T,i.COLOR_ATTACHMENT0,F,0);m(T)&&x(F),t.unbindTexture()}O.depthBuffer&&ye(O)}function he(O){let T=O.textures;for(let ie=0,le=T.length;ie<le;ie++){let ve=T[ie];if(m(ve)){let k=E(O),B=n.get(ve).__webglTexture;t.bindTexture(k,B),x(k),t.unbindTexture()}}}let Ae=[],te=[];function ne(O){if(O.samples>0){if(He(O)===!1){let T=O.textures,ie=O.width,le=O.height,ve=i.COLOR_BUFFER_BIT,k=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,B=n.get(O),F=T.length>1;if(F)for(let Q=0;Q<T.length;Q++)t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,B.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,B.__webglMultisampledFramebuffer);let z=O.texture.mipmaps;z&&z.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,B.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,B.__webglFramebuffer);for(let Q=0;Q<T.length;Q++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ve|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ve|=i.STENCIL_BUFFER_BIT)),F){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,B.__webglColorRenderbuffer[Q]);let pe=n.get(T[Q]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,pe,0)}i.blitFramebuffer(0,0,ie,le,0,0,ie,le,ve,i.NEAREST),c===!0&&(Ae.length=0,te.length=0,Ae.push(i.COLOR_ATTACHMENT0+Q),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&(Ae.push(k),te.push(k),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,te)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ae))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),F)for(let Q=0;Q<T.length;Q++){t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,B.__webglColorRenderbuffer[Q]);let pe=n.get(T[Q]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,B.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.TEXTURE_2D,pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,B.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&c){let T=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function fe(O){return Math.min(r.maxSamples,O.samples)}function He(O){let T=n.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function W(O){let T=a.render.frame;l.get(O)!==T&&(l.set(O,T),O.update())}function tt(O,T){let ie=O.colorSpace,le=O.format,ve=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||ie!==Fn&&ie!==ei&&(bt.getTransfer(ie)===Bt?(le!==Qn||ve!==Wn)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):dt("WebGLTextures: Unsupported texture color space:",ie)),T}function Te(O){return typeof HTMLImageElement!="undefined"&&O instanceof HTMLImageElement?(u.width=O.naturalWidth||O.width,u.height=O.naturalHeight||O.height):typeof VideoFrame!="undefined"&&O instanceof VideoFrame?(u.width=O.displayWidth,u.height=O.displayHeight):(u.width=O.width,u.height=O.height),u}this.allocateTextureUnit=N,this.resetTextureUnits=Y,this.getTextureUnits=G,this.setTextureUnits=C,this.setTexture2D=q,this.setTexture2DArray=V,this.setTexture3D=J,this.setTextureCube=re,this.rebindTextures=qe,this.setupRenderTarget=me,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=ze,this.useMultisampledRTT=He,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Oy(i,e){function t(n,r=ei){let s,a=bt.getTransfer(r);if(n===Wn)return i.UNSIGNED_BYTE;if(n===ac)return i.UNSIGNED_SHORT_4_4_4_4;if(n===oc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ah)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Eh)return i.BYTE;if(n===wh)return i.SHORT;if(n===aa)return i.UNSIGNED_SHORT;if(n===sc)return i.INT;if(n===Di)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===An)return i.HALF_FLOAT;if(n===Ch)return i.ALPHA;if(n===Ih)return i.RGB;if(n===Qn)return i.RGBA;if(n===qi)return i.DEPTH_COMPONENT;if(n===Fr)return i.DEPTH_STENCIL;if(n===lc)return i.RED;if(n===cc)return i.RED_INTEGER;if(n===Br)return i.RG;if(n===uc)return i.RG_INTEGER;if(n===hc)return i.RGBA_INTEGER;if(n===go||n===vo||n===xo||n===_o)if(a===Bt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===go)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===go)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_o)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fc||n===dc||n===pc||n===mc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===fc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===dc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===mc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gc||n===vc||n===xc||n===_c||n===yc||n===yo||n===Mc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===gc||n===vc)return a===Bt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===xc)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===_c)return s.COMPRESSED_R11_EAC;if(n===yc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===yo)return s.COMPRESSED_RG11_EAC;if(n===Mc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Sc||n===bc||n===Tc||n===Ec||n===wc||n===Ac||n===Rc||n===Cc||n===Ic||n===Pc||n===Lc||n===Nc||n===Dc||n===Oc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Sc)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bc)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Tc)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ec)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wc)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ac)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rc)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cc)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ic)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pc)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Lc)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nc)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Dc)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oc)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Uc||n===Fc||n===Bc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Uc)return a===Bt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hc||n===kc||n===Mo||n===qc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Hc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===kc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Mo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===oa?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Uy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fy=`
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

}`,sf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ja(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new nn({vertexShader:Uy,fragmentShader:Fy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ve(new jn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},af=class extends Pi{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",c=1,u=null,l=null,h=null,f=null,p=null,v=null,_=typeof XRWebGLBinding!="undefined",g=new sf,m={},x=t.getContextAttributes(),E=null,M=null,w=[],A=[],P=new ot,y=null,S=null,L=new cn;L.viewport=new Xt;let U=new cn;U.viewport=new Xt;let D=[L,U],Y=new jl,G=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(de){let _e=w[de];return _e===void 0&&(_e=new Ws,w[de]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(de){let _e=w[de];return _e===void 0&&(_e=new Ws,w[de]=_e),_e.getGripSpace()},this.getHand=function(de){let _e=w[de];return _e===void 0&&(_e=new Ws,w[de]=_e),_e.getHandSpace()};function N(de){let _e=A.indexOf(de.inputSource);if(_e===-1)return;let De=w[_e];De!==void 0&&(De.update(de.inputSource,de.frame,u||a),De.dispatchEvent({type:de.type,data:de.inputSource}))}function I(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",q);for(let de=0;de<w.length;de++){let _e=A[de];_e!==null&&(A[de]=null,w[de].disconnect(_e))}G=null,C=null,g.reset();for(let de in m)delete m[de];if(e.setRenderTarget(E),p=null,f=null,h=null,r=null,M=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(P.width,P.height,!1),S!==null){let de=S.camera;de.fov=S.fov,de.zoom=S.zoom,de.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(de){s=de,n.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(de){o=de,n.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(de){u=de},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(de){if(r=de,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",I),r.addEventListener("inputsourceschange",q),x.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let De=null,We=null,ze=null;x.depth&&(ze=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,De=x.stencil?Fr:qi,We=x.stencil?oa:Di);let ht={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(ht),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new mn(f.textureWidth,f.textureHeight,{format:Qn,type:Wn,depthTexture:new Lr(f.textureWidth,f.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,De),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let De={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,De),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new mn(p.framebufferWidth,p.framebufferHeight,{format:Qn,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),Je.setContext(r),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function q(de){for(let _e=0;_e<de.removed.length;_e++){let De=de.removed[_e],We=A.indexOf(De);We>=0&&(A[We]=null,w[We].disconnect(De))}for(let _e=0;_e<de.added.length;_e++){let De=de.added[_e],We=A.indexOf(De);if(We===-1){for(let ht=0;ht<w.length;ht++)if(ht>=A.length){A.push(De),We=ht;break}else if(A[ht]===null){A[ht]=De,We=ht;break}if(We===-1)break}let ze=w[We];ze&&ze.connect(De)}}let V=new j,J=new j;function re(de,_e,De){V.setFromMatrixPosition(_e.matrixWorld),J.setFromMatrixPosition(De.matrixWorld);let We=V.distanceTo(J),ze=_e.projectionMatrix.elements,ht=De.projectionMatrix.elements,X=ze[14]/(ze[10]-1),ye=ze[14]/(ze[10]+1),qe=(ze[9]+1)/ze[5],me=(ze[9]-1)/ze[5],he=(ze[8]-1)/ze[0],Ae=(ht[8]+1)/ht[0],te=X*he,ne=X*Ae,fe=We/(-he+Ae),He=fe*-he;if(_e.matrixWorld.decompose(de.position,de.quaternion,de.scale),de.translateX(He),de.translateZ(fe),de.matrixWorld.compose(de.position,de.quaternion,de.scale),de.matrixWorldInverse.copy(de.matrixWorld).invert(),ze[10]===-1)de.projectionMatrix.copy(_e.projectionMatrix),de.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{let W=X+fe,tt=ye+fe,Te=te-He,O=ne+(We-He),T=qe*ye/tt*W,ie=me*ye/tt*W;de.projectionMatrix.makePerspective(Te,O,T,ie,W,tt),de.projectionMatrixInverse.copy(de.projectionMatrix).invert()}}function Se(de,_e){_e===null?de.matrixWorld.copy(de.matrix):de.matrixWorld.multiplyMatrices(_e.matrixWorld,de.matrix),de.matrixWorldInverse.copy(de.matrixWorld).invert()}this.updateCamera=function(de){if(r===null)return;let _e=de.near,De=de.far;g.texture!==null&&(g.depthNear>0&&(_e=g.depthNear),g.depthFar>0&&(De=g.depthFar)),Y.near=U.near=L.near=_e,Y.far=U.far=L.far=De,(G!==Y.near||C!==Y.far)&&(r.updateRenderState({depthNear:Y.near,depthFar:Y.far}),G=Y.near,C=Y.far),Y.layers.mask=de.layers.mask|6,L.layers.mask=Y.layers.mask&-5,U.layers.mask=Y.layers.mask&-3;let We=de.parent,ze=Y.cameras;Se(Y,We);for(let ht=0;ht<ze.length;ht++)Se(ze[ht],We);ze.length===2?re(Y,L,U):Y.projectionMatrix.copy(L.projectionMatrix),S===null&&de.isPerspectiveCamera&&(S={camera:de,fov:de.fov,zoom:de.zoom}),Ue(de,Y,We)};function Ue(de,_e,De){De===null?de.matrix.copy(_e.matrixWorld):(de.matrix.copy(De.matrixWorld),de.matrix.invert(),de.matrix.multiply(_e.matrixWorld)),de.matrix.decompose(de.position,de.quaternion,de.scale),de.updateMatrixWorld(!0),de.projectionMatrix.copy(_e.projectionMatrix),de.projectionMatrixInverse.copy(_e.projectionMatrixInverse),de.isPerspectiveCamera&&(de.fov=ns*2*Math.atan(1/de.projectionMatrix.elements[5]),de.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(de){c=de,f!==null&&(f.fixedFoveation=de),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=de)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(Y)},this.getCameraTexture=function(de){return m[de]};let ut=null;function et(de,_e){if(l=_e.getViewerPose(u||a),v=_e,l!==null){let De=l.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let We=!1;De.length!==Y.cameras.length&&(Y.cameras.length=0,We=!0);for(let ye=0;ye<De.length;ye++){let qe=De[ye],me=null;if(p!==null)me=p.getViewport(qe);else{let Ae=h.getViewSubImage(f,qe);me=Ae.viewport,ye===0&&(e.setRenderTargetTextures(M,Ae.colorTexture,Ae.depthStencilTexture),e.setRenderTarget(M))}let he=D[ye];he===void 0&&(he=new cn,he.layers.enable(ye),he.viewport=new Xt,D[ye]=he),he.matrix.fromArray(qe.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(qe.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(me.x,me.y,me.width,me.height),ye===0&&(Y.matrix.copy(he.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),We===!0&&Y.cameras.push(he)}let ze=r.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){h=n.getBinding();let ye=h.getDepthInformation(De[0]);ye&&ye.isValid&&ye.texture&&g.init(ye,r.renderState)}if(ze&&ze.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let ye=0;ye<De.length;ye++){let qe=De[ye].camera;if(qe){let me=m[qe];me||(me=new Ja,m[qe]=me);let he=h.getCameraImage(qe);me.sourceTexture=he}}}}for(let De=0;De<w.length;De++){let We=A[De],ze=w[De];We!==null&&ze!==void 0&&ze.update(We,_e,u||a)}ut&&ut(de,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),v=null}let Je=new v0;Je.setAnimationLoop(et),this.setAnimationLoop=function(de){ut=de},this.dispose=function(){}}},By=new Mt,b0=new pt;b0.set(-1,0,0,0,1,0,0,0,1);function Hy(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Uh(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,x,E,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),h(g,m)):m.isMeshPhongMaterial?(s(g,m),l(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),f(g,m),m.isMeshPhysicalMaterial&&p(g,m,M)):m.isMeshMatcapMaterial?(s(g,m),v(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),_(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,x,E):m.isSpriteMaterial?u(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===En&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===En&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let x=e.get(m),E=x.envMap,M=x.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(By.makeRotationFromEuler(M)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(b0),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,x,E){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=E*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,x){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===En&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){let x=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function ky(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,w){let A=w.program;n.uniformBlockBinding(M,A)}function u(M,w){let A=r[M.id];A===void 0&&(g(M),A=l(M),r[M.id]=A,M.addEventListener("dispose",x));let P=w.program;n.updateUBOMapping(M,P);let y=e.render.frame;s[M.id]!==y&&(f(M),s[M.id]=y)}function l(M){let w=h();M.__bindingPointIndex=w;let A=i.createBuffer(),P=M.__size,y=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,P,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,A),A}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let w=r[M.id],A=M.uniforms,P=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let y=0,S=A.length;y<S;y++){let L=A[y];if(Array.isArray(L))for(let U=0,D=L.length;U<D;U++)p(L[U],y,U,P);else p(L,y,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,w,A,P){if(_(M,w,A,P)===!0){let y=M.__offset,S=M.value;if(Array.isArray(S)){let L=0;for(let U=0;U<S.length;U++){let D=S[U],Y=m(D);v(D,M.__data,L),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(L+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(S,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,M.__data)}}function v(M,w,A){typeof M=="number"||typeof M=="boolean"?w[0]=M:M.isMatrix3?(w[0]=M.elements[0],w[1]=M.elements[1],w[2]=M.elements[2],w[3]=0,w[4]=M.elements[3],w[5]=M.elements[4],w[6]=M.elements[5],w[7]=0,w[8]=M.elements[6],w[9]=M.elements[7],w[10]=M.elements[8],w[11]=0):ArrayBuffer.isView(M)?w.set(new M.constructor(M.buffer,M.byteOffset,w.length)):M.toArray(w,A)}function _(M,w,A,P){let y=M.value,S=w+"_"+A;if(P[S]===void 0)return typeof y=="number"||typeof y=="boolean"?P[S]=y:ArrayBuffer.isView(y)?P[S]=y.slice():P[S]=y.clone(),!0;{let L=P[S];if(typeof y=="number"||typeof y=="boolean"){if(L!==y)return P[S]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(L.equals(y)===!1)return L.copy(y),!0}}return!1}function g(M){let w=M.uniforms,A=0,P=16;for(let S=0,L=w.length;S<L;S++){let U=Array.isArray(w[S])?w[S]:[w[S]];for(let D=0,Y=U.length;D<Y;D++){let G=U[D],C=Array.isArray(G.value)?G.value:[G.value];for(let N=0,I=C.length;N<I;N++){let q=C[N],V=m(q),J=A%P,re=J%V.boundary,Se=J+re;A+=re,Se!==0&&P-Se<V.storage&&(A+=P-Se),G.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=A,A+=V.storage}}}let y=A%P;return y>0&&(A+=P-y),M.__size=A,M.__cache={},this}function m(M){let w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):at("WebGLRenderer: Unsupported uniform value type.",M),w}function x(M){let w=M.target;w.removeEventListener("dispose",x);let A=a.indexOf(w.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function E(){for(let M in r)i.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:c,update:u,dispose:E}}var qy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ki=null;function zy(){return Ki===null&&(Ki=new cr(qy,16,16,Br,An),Ki.name="DFG_LUT",Ki.minFilter=un,Ki.magFilter=un,Ki.wrapS=ci,Ki.wrapT=ci,Ki.generateMipmaps=!1,Ki.needsUpdate=!0),Ki}var Jc=class{constructor(e={}){let{canvas:t=Gp(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Wn}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;let _=p,g=new Set([hc,uc,cc]),m=new Set([Wn,Di,aa,oa,ac,oc]),x=new Uint32Array(4),E=new Int32Array(4),M=new j,w=null,A=null,P=[],y=[],S=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,U=!1,D=null,Y=null,G=null,C=null;this._outputColorSpace=Jt;let N=0,I=0,q=null,V=-1,J=null,re=new Xt,Se=new Xt,Ue=null,ut=new nt(0),et=0,Je=t.width,de=t.height,_e=1,De=null,We=null,ze=new Xt(0,0,Je,de),ht=new Xt(0,0,Je,de),X=!1,ye=new Zs,qe=!1,me=!1,he=new Mt,Ae=new j,te=new Xt,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},fe=!1;function He(){return q===null?_e:1}let W=n;function tt(R,Z){return t.getContext(R,Z)}let Te,O,T,ie,le,ve,k,B,F,z,Q,pe,ue,ge,Ee,Pe,$e,K,Re,xe,Ce,Oe,we;try{let R={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:l,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Kt,!1),t.addEventListener("webglcontextrestored",Ut,!1),t.addEventListener("webglcontextcreationerror",Yn,!1),W===null){let Z="webgl2";if(W=tt(Z,R),W===null)throw tt(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}st()}catch(R){throw t.removeEventListener("webglcontextlost",Kt,!1),t.removeEventListener("webglcontextrestored",Ut,!1),t.removeEventListener("webglcontextcreationerror",Yn,!1),dt("WebGLRenderer: "+R.message),R}function st(){Te=new Z_(W),Te.init(),Ce=new Oy(W,Te),O=new H_(W,Te,e,Ce),T=new Ny(W,Te),O.reversedDepthBuffer&&f&&T.buffers.depth.setReversed(!0),Y=W.createFramebuffer(),G=W.createFramebuffer(),C=W.createFramebuffer(),ie=new $_(W),le=new _y,ve=new Dy(W,Te,T,le,O,Ce,ie),k=new K_(L),B=new ev(W),Oe=new F_(W,B),F=new J_(W,B,ie,Oe),z=new e1(W,F,B,Oe,ie),K=new Q_(W,O,ve),Ee=new k_(le),Q=new xy(L,k,Te,O,Oe,Ee),pe=new Hy(L,le),ue=new My,ge=new Ay(Te),$e=new U_(L,k,T,z,v,c),Pe=new Ly(L,z,O),we=new ky(W,ie,O,T),Re=new B_(W,Te,ie),xe=new j_(W,Te,ie),ie.programs=Q.programs,L.capabilities=O,L.extensions=Te,L.properties=le,L.renderLists=ue,L.shadowMap=Pe,L.state=T,L.info=ie}_!==Wn&&(S=new n1(_,t.width,t.height,o,r,s));let rt=new af(L,W);this.xr=rt,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let R=Te.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Te.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(R){R!==void 0&&(_e=R,this.setSize(Je,de,!1))},this.getSize=function(R){return R.set(Je,de)},this.setSize=function(R,Z,ce=!0){if(rt.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}Je=R,de=Z,t.width=Math.floor(R*_e),t.height=Math.floor(Z*_e),ce===!0&&(t.style.width=R+"px",t.style.height=Z+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set(Je*_e,de*_e).floor()},this.setDrawingBufferSize=function(R,Z,ce){Je=R,de=Z,_e=ce,t.width=Math.floor(R*ce),t.height=Math.floor(Z*ce),this.setViewport(0,0,R,Z)},this.setEffects=function(R){if(_===Wn){dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Z=0;Z<R.length;Z++)if(R[Z].isOutputPass===!0){at("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(re)},this.getViewport=function(R){return R.copy(ze)},this.setViewport=function(R,Z,ce,ee){R.isVector4?ze.set(R.x,R.y,R.z,R.w):ze.set(R,Z,ce,ee),T.viewport(re.copy(ze).multiplyScalar(_e).round())},this.getScissor=function(R){return R.copy(ht)},this.setScissor=function(R,Z,ce,ee){R.isVector4?ht.set(R.x,R.y,R.z,R.w):ht.set(R,Z,ce,ee),T.scissor(Se.copy(ht).multiplyScalar(_e).round())},this.getScissorTest=function(){return X},this.setScissorTest=function(R){T.setScissorTest(X=R)},this.setOpaqueSort=function(R){De=R},this.setTransparentSort=function(R){We=R},this.getClearColor=function(R){return R.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(R=!0,Z=!0,ce=!0){let ee=0;if(R){let ae=!1;if(q!==null){let Fe=q.texture.format;ae=g.has(Fe)}if(ae){let Fe=q.texture.type,Ge=m.has(Fe),Ne=$e.getClearColor(),Ye=$e.getClearAlpha(),je=Ne.r,ft=Ne.g,gt=Ne.b;Ge?(x[0]=je,x[1]=ft,x[2]=gt,x[3]=Ye,W.clearBufferuiv(W.COLOR,0,x)):(E[0]=je,E[1]=ft,E[2]=gt,E[3]=Ye,W.clearBufferiv(W.COLOR,0,E))}else ee|=W.COLOR_BUFFER_BIT}Z&&(ee|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(ee|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&W.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),D=R},this.dispose=function(){t.removeEventListener("webglcontextlost",Kt,!1),t.removeEventListener("webglcontextrestored",Ut,!1),t.removeEventListener("webglcontextcreationerror",Yn,!1),$e.dispose(),ue.dispose(),ge.dispose(),le.dispose(),k.dispose(),z.dispose(),Oe.dispose(),we.dispose(),Q.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",b),rt.removeEventListener("sessionend",H),oe.stop()};function Kt(R){R.preventDefault(),Ha("WebGLRenderer: Context Lost."),U=!0}function Ut(){Ha("WebGLRenderer: Context Restored."),U=!1;let R=ie.autoReset,Z=Pe.enabled,ce=Pe.autoUpdate,ee=Pe.needsUpdate,ae=Pe.type;st(),ie.autoReset=R,Pe.enabled=Z,Pe.autoUpdate=ce,Pe.needsUpdate=ee,Pe.type=ae}function Yn(R){dt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ai(R){let Z=R.target;Z.removeEventListener("dispose",ai),Iu(Z)}function Iu(R){Sa(R),le.remove(R)}function Sa(R){let Z=le.get(R).programs;Z!==void 0&&(Z.forEach(function(ce){Q.releaseProgram(ce)}),R.isShaderMaterial&&Q.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,ce,ee,ae,Fe){Z===null&&(Z=ne);let Ge=ae.isMesh&&ae.matrixWorld.determinantAffine()<0,Ne=_t(R,Z,ce,ee,ae);T.setMaterial(ee,Ge);let Ye=ce.index,je=1;if(ee.wireframe===!0){if(Ye=F.getWireframeAttribute(ce),Ye===void 0)return;je=2}let ft=ce.drawRange,gt=ce.attributes.position,Qe=ft.start*je,Et=(ft.start+ft.count)*je;Fe!==null&&(Qe=Math.max(Qe,Fe.start*je),Et=Math.min(Et,(Fe.start+Fe.count)*je)),Ye!==null?(Qe=Math.max(Qe,0),Et=Math.min(Et,Ye.count)):gt!=null&&(Qe=Math.max(Qe,0),Et=Math.min(Et,gt.count));let zt=Et-Qe;if(zt<0||zt===1/0)return;Oe.setup(ae,ee,Ne,ce,Ye);let Lt,Ft=Re;if(Ye!==null&&(Lt=B.get(Ye),Ft=xe,Ft.setIndex(Lt)),ae.isMesh)ee.wireframe===!0?(T.setLineWidth(ee.wireframeLinewidth*He()),Ft.setMode(W.LINES)):Ft.setMode(W.TRIANGLES);else if(ae.isLine){let ln=ee.linewidth;ln===void 0&&(ln=1),T.setLineWidth(ln*He()),ae.isLineSegments?Ft.setMode(W.LINES):ae.isLineLoop?Ft.setMode(W.LINE_LOOP):Ft.setMode(W.LINE_STRIP)}else ae.isPoints?Ft.setMode(W.POINTS):ae.isSprite&&Ft.setMode(W.TRIANGLES);if(ae.isBatchedMesh)if(Te.get("WEBGL_multi_draw"))Ft.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{let ln=ae._multiDrawStarts,Ke=ae._multiDrawCounts,_n=ae._multiDrawCount,wt=Ye?B.get(Ye).bytesPerElement:1,Tn=le.get(ee).currentProgram.getUniforms();for(let oi=0;oi<_n;oi++)Tn.setValue(W,"_gl_DrawID",oi),Ft.render(ln[oi]/wt,Ke[oi])}else if(ae.isInstancedMesh)Ft.renderInstances(Qe,zt,ae.count);else if(ce.isInstancedBufferGeometry){let ln=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Ke=Math.min(ce.instanceCount,ln);Ft.renderInstances(Qe,zt,Ke)}else Ft.render(Qe,zt)};function Jo(R,Z,ce,ee){D!==null&&R.isNodeMaterial&&D.setObject(ee,R),qe===!0&&Ee.setState(R,ce,!1),R.transparent===!0&&R.side===wn&&R.forceSinglePass===!1?(R.side=En,R.needsUpdate=!0,Ze(R,Z,ee),R.side=Yi,R.needsUpdate=!0,Ze(R,Z,ee),R.side=wn):Ze(R,Z,ee)}this.compile=function(R,Z,ce=null){ce===null&&(ce=R),D!==null&&D.renderStart(R,Z,ce),A=ge.get(ce),A.init(Z),y.push(A),ce.traverseVisible(function(ae){ae.isLight&&ae.layers.test(Z.layers)&&(A.pushLight(ae),ae.castShadow&&A.pushShadow(ae))}),R!==ce&&R.traverseVisible(function(ae){ae.isLight&&ae.layers.test(Z.layers)&&(A.pushLight(ae),ae.castShadow&&A.pushShadow(ae))}),A.setupLights(),D!==null&&D.updateLights(A.state.lightsArray),me=this.localClippingEnabled,qe=Ee.init(this.clippingPlanes,me),qe===!0&&Ee.setGlobalState(this.clippingPlanes,Z),D!==null&&Pe.render(A.state.shadowsArray,ce,Z);let ee=new Set;return R.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;let Fe=ae.material;if(Fe)if(Array.isArray(Fe))for(let Ge=0;Ge<Fe.length;Ge++){let Ne=Fe[Ge];Jo(Ne,ce,Z,ae),ee.add(Ne)}else Jo(Fe,ce,Z,ae),ee.add(Fe)}),A=y.pop(),D!==null&&D.renderEnd(),ee},this.compileAsync=function(R,Z,ce=null){let ee=this.compile(R,Z,ce);return new Promise(ae=>{function Fe(){if(ee.forEach(function(Ge){let Ye=le.get(Ge).currentProgram;(Ye===void 0||Ye.isReady())&&ee.delete(Ge)}),ee.size===0){ae(R);return}setTimeout(Fe,10)}Te.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let ba=null;function d(R){ba&&ba(R)}function b(){oe.stop()}function H(){oe.start()}let oe=new v0;oe.setAnimationLoop(d),typeof self!="undefined"&&oe.setContext(self),this.setAnimationLoop=function(R){ba=R,rt.setAnimationLoop(R),R===null?oe.stop():oe.start()},rt.addEventListener("sessionstart",b),rt.addEventListener("sessionend",H),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;D!==null&&D.renderStart(R,Z);let ce=rt.enabled===!0&&rt.isPresenting===!0,ee=S!==null&&(q===null||ce)&&S.begin(L,q);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(Z),Z=rt.getCamera()),R.isScene===!0&&R.onBeforeRender(L,R,Z,q),A=ge.get(R,y.length),A.init(Z),A.state.textureUnits=ve.getTextureUnits(),y.push(A),he.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),ye.setFromProjectionMatrix(he,Ci,Z.reversedDepth),me=this.localClippingEnabled,qe=Ee.init(this.clippingPlanes,me),w=ue.get(R,P.length),w.init(),P.push(w),rt.enabled===!0&&rt.isPresenting===!0){let Ge=L.xr.getDepthSensingMesh();Ge!==null&&$(Ge,Z,-1/0,L.sortObjects)}$(R,Z,0,L.sortObjects),w.finish(),D!==null&&D.updateLights(A.state.lightsArray),L.sortObjects===!0&&w.sort(De,We),fe=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,fe&&$e.addToRenderList(w,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),qe===!0&&Ee.beginShadows();let ae=A.state.shadowsArray;if(Pe.render(ae,R,Z),qe===!0&&Ee.endShadows(),(ee&&S.hasRenderPass())===!1){let Ge=w.opaque,Ne=w.transmissive;if(A.setupLights(),Z.isArrayCamera){let Ye=Z.cameras;if(Ne.length>0)for(let je=0,ft=Ye.length;je<ft;je++){let gt=Ye[je];Me(Ge,Ne,R,gt)}fe&&$e.render(R);for(let je=0,ft=Ye.length;je<ft;je++){let gt=Ye[je];se(w,R,gt,gt.viewport)}}else Ne.length>0&&Me(Ge,Ne,R,Z),fe&&$e.render(R),se(w,R,Z)}q!==null&&I===0&&(ve.updateMultisampleRenderTarget(q),ve.updateRenderTargetMipmap(q)),ee&&S.end(L),R.isScene===!0&&R.onAfterRender(L,R,Z),Oe.resetDefaultState(),V=-1,J=null,y.pop(),y.length>0?(A=y[y.length-1],ve.setTextureUnits(A.state.textureUnits),qe===!0&&Ee.setGlobalState(L.clippingPlanes,A.state.camera)):A=null,P.pop(),P.length>0?w=P[P.length-1]:w=null,D!==null&&D.renderEnd()};function $(R,Z,ce,ee){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)ce=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLightProbeGrid)A.pushLightProbeGrid(R);else if(R.isLight)A.pushLight(R),R.castShadow&&A.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(ye)){ee&&te.setFromMatrixPosition(R.matrixWorld).applyMatrix4(he);let Ge=z.update(R),Ne=R.material;Ne.visible&&w.push(R,Ge,Ne,ce,te.z,null,Z)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(ye))){let Ge=z.update(R),Ne=R.material;if(ee&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),te.copy(R.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),te.copy(Ge.boundingSphere.center)),te.applyMatrix4(R.matrixWorld).applyMatrix4(he)),Array.isArray(Ne)){let Ye=Ge.groups;for(let je=0,ft=Ye.length;je<ft;je++){let gt=Ye[je],Qe=Ne[gt.materialIndex];Qe&&Qe.visible&&w.push(R,Ge,Qe,ce,te.z,gt,Z)}}else Ne.visible&&w.push(R,Ge,Ne,ce,te.z,null,Z)}}let Fe=R.children;for(let Ge=0,Ne=Fe.length;Ge<Ne;Ge++)$(Fe[Ge],Z,ce,ee)}function se(R,Z,ce,ee){let{opaque:ae,transmissive:Fe,transparent:Ge}=R;A.setupLightsView(ce),qe===!0&&Ee.setGlobalState(L.clippingPlanes,ce),ee&&T.viewport(re.copy(ee)),ae.length>0&&be(ae,Z,ce),Fe.length>0&&be(Fe,Z,ce),Ge.length>0&&be(Ge,Z,ce),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function Me(R,Z,ce,ee){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[ee.id]===void 0){let Qe=Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[ee.id]=new mn(1,1,{generateMipmaps:!0,type:Qe?An:Wn,minFilter:Ni,samples:Math.max(4,O.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:bt.workingColorSpace})}let Fe=A.state.transmissionRenderTarget[ee.id],Ge=ee.viewport||re;Fe.setSize(Ge.z*L.transmissionResolutionScale,Ge.w*L.transmissionResolutionScale);let Ne=L.getRenderTarget(),Ye=L.getActiveCubeFace(),je=L.getActiveMipmapLevel();L.setRenderTarget(Fe),L.getClearColor(ut),et=L.getClearAlpha(),et<1&&L.setClearColor(16777215,.5),L.clear(),fe&&$e.render(ce);let ft=L.toneMapping;L.toneMapping=Li;let gt=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),A.setupLightsView(ee),qe===!0&&Ee.setGlobalState(L.clippingPlanes,ee),be(R,ce,ee),ve.updateMultisampleRenderTarget(Fe),ve.updateRenderTargetMipmap(Fe),Te.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Et=0,zt=Z.length;Et<zt;Et++){let Lt=Z[Et],{object:Ft,geometry:ln,material:Ke,group:_n}=Lt;if(Ke.side===wn&&Ft.layers.test(ee.layers)){let wt=Ke.side;Ke.side=En,Ke.needsUpdate=!0,Le(Ft,ce,ee,ln,Ke,_n),Ke.side=wt,Ke.needsUpdate=!0,Qe=!0}}Qe===!0&&(ve.updateMultisampleRenderTarget(Fe),ve.updateRenderTargetMipmap(Fe))}L.setRenderTarget(Ne,Ye,je),L.setClearColor(ut,et),gt!==void 0&&(ee.viewport=gt),L.toneMapping=ft}function be(R,Z,ce){let ee=Z.isScene===!0?Z.overrideMaterial:null;for(let ae=0,Fe=R.length;ae<Fe;ae++){let Ge=R[ae],{object:Ne,geometry:Ye,group:je}=Ge,ft=Ge.material;ft.allowOverride===!0&&ee!==null&&(ft=ee),Ne.layers.test(ce.layers)&&Le(Ne,Z,ce,Ye,ft,je)}}function Le(R,Z,ce,ee,ae,Fe){D!==null&&ae.isNodeMaterial&&D.setObject(R,ae),R.onBeforeRender(L,Z,ce,ee,ae,Fe),R.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ae.onBeforeRender(L,Z,ce,ee,R,Fe),ae.transparent===!0&&ae.side===wn&&ae.forceSinglePass===!1?(ae.side=En,ae.needsUpdate=!0,L.renderBufferDirect(ce,Z,ee,ae,R,Fe),ae.side=Yi,ae.needsUpdate=!0,L.renderBufferDirect(ce,Z,ee,ae,R,Fe),ae.side=wn):L.renderBufferDirect(ce,Z,ee,ae,R,Fe),R.onAfterRender(L,Z,ce,ee,ae,Fe)}function Ze(R,Z,ce){Z.isScene!==!0&&(Z=ne);let ee=le.get(R),ae=A.state.lights,Fe=A.state.shadowsArray,Ge=ae.state.version,Ne=Q.getParameters(R,ae.state,Fe,Z,ce,A.state.lightProbeGridArray),Ye=Q.getProgramCacheKey(Ne),je=ee.programs;ee.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Z.environment:null,ee.fog=Z.fog;let ft=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ee.envMap=k.get(R.envMap||ee.environment,ft),ee.envMapRotation=ee.environment!==null&&R.envMap===null?Z.environmentRotation:R.envMapRotation,je===void 0&&(R.addEventListener("dispose",ai),je=new Map,ee.programs=je);let gt=je.get(Ye);if(gt!==void 0){if(ee.currentProgram===gt&&ee.lightsStateVersion===Ge)return ct(R,Ne),gt}else Ne.uniforms=Q.getUniforms(R),D!==null&&R.isNodeMaterial&&D.build(R,ce,Ne),R.onBeforeCompile(Ne,L),gt=Q.acquireProgram(Ne,Ye),je.set(Ye,gt),ee.uniforms=Ne.uniforms;let Qe=ee.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Qe.clippingPlanes=Ee.uniform),ct(R,Ne),ee.needsLights=kt(R),ee.lightsStateVersion=Ge,ee.needsLights&&(Qe.ambientLightColor.value=ae.state.ambient,Qe.lightProbe.value=ae.state.probe,Qe.sunLights.value=ae.state.sun,Qe.sunLightShadows.value=ae.state.sunShadow,Qe.directionalLights.value=ae.state.directional,Qe.directionalLightShadows.value=ae.state.directionalShadow,Qe.spotLights.value=ae.state.spot,Qe.spotLightShadows.value=ae.state.spotShadow,Qe.rectAreaLights.value=ae.state.rectArea,Qe.ltc_1.value=ae.state.rectAreaLTC1,Qe.ltc_2.value=ae.state.rectAreaLTC2,Qe.pointLights.value=ae.state.point,Qe.pointLightShadows.value=ae.state.pointShadow,Qe.hemisphereLights.value=ae.state.hemi,Qe.sunShadowMatrix.value=ae.state.sunShadowMatrix,Qe.sunShadowCascade.value=ae.state.sunShadowCascade,Qe.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,Qe.spotLightMatrix.value=ae.state.spotLightMatrix,Qe.spotLightMap.value=ae.state.spotLightMap,Qe.pointShadowMatrix.value=ae.state.pointShadowMatrix),ee.lightProbeGrid=A.state.lightProbeGridArray.length>0,ee.currentProgram=gt,ee.uniformsList=null,gt}function ke(R){if(R.uniformsList===null){let Z=R.currentProgram.getUniforms();R.uniformsList=ha.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function ct(R,Z){let ce=le.get(R);ce.outputColorSpace=Z.outputColorSpace,ce.batching=Z.batching,ce.batchingColor=Z.batchingColor,ce.instancing=Z.instancing,ce.instancingColor=Z.instancingColor,ce.instancingMorph=Z.instancingMorph,ce.skinning=Z.skinning,ce.morphTargets=Z.morphTargets,ce.morphNormals=Z.morphNormals,ce.morphColors=Z.morphColors,ce.morphTargetsCount=Z.morphTargetsCount,ce.numClippingPlanes=Z.numClippingPlanes,ce.numIntersection=Z.numClipIntersection,ce.vertexAlphas=Z.vertexAlphas,ce.vertexTangents=Z.vertexTangents,ce.toneMapping=Z.toneMapping}function mt(R,Z){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;M.setFromMatrixPosition(Z.matrixWorld);for(let ce=0,ee=R.length;ce<ee;ce++){let ae=R[ce];if(ae.texture!==null&&ae.boundingBox.containsPoint(M))return ae}return null}function _t(R,Z,ce,ee,ae){Z.isScene!==!0&&(Z=ne),ve.resetTextureUnits();let Fe=Z.fog,Ge=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?Z.environment:null,Ne=q===null?L.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:bt.workingColorSpace,Ye=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,je=k.get(ee.envMap||Ge,Ye),ft=ee.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,gt=!!ce.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Qe=!!ce.morphAttributes.position,Et=!!ce.morphAttributes.normal,zt=!!ce.morphAttributes.color,Lt=Li;ee.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Lt=L.toneMapping);let Ft=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,ln=Ft!==void 0?Ft.length:0,Ke=le.get(ee),_n=A.state.lights;if(qe===!0&&(me===!0||R!==J)){let Gt=R===J&&ee.id===V;Ee.setState(ee,R,Gt)}let wt=!1;ee.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==_n.state.version||Ke.outputColorSpace!==Ne||ae.isBatchedMesh&&Ke.batching===!1||!ae.isBatchedMesh&&Ke.batching===!0||ae.isBatchedMesh&&Ke.batchingColor===!0&&ae._colorsTexture===null||ae.isBatchedMesh&&Ke.batchingColor===!1&&ae._colorsTexture!==null||ae.isInstancedMesh&&Ke.instancing===!1||!ae.isInstancedMesh&&Ke.instancing===!0||ae.isSkinnedMesh&&Ke.skinning===!1||!ae.isSkinnedMesh&&Ke.skinning===!0||ae.isInstancedMesh&&Ke.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&Ke.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&Ke.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&Ke.instancingMorph===!1&&ae.morphTexture!==null||Ke.envMap!==je||ee.fog===!0&&Ke.fog!==Fe||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Ee.numPlanes||Ke.numIntersection!==Ee.numIntersection)||Ke.vertexAlphas!==ft||Ke.vertexTangents!==gt||Ke.morphTargets!==Qe||Ke.morphNormals!==Et||Ke.morphColors!==zt||Ke.toneMapping!==Lt||Ke.morphTargetsCount!==ln||!!Ke.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(wt=!0):(wt=!0,Ke.__version=ee.version);let Tn=Ke.currentProgram;wt===!0&&(Tn=Ze(ee,Z,ae),D&&ee.isNodeMaterial&&D.onUpdateProgram(ee,Tn,Ke));let oi=!1,yi=!1,kn=!1,Nt=Tn.getUniforms(),en=Ke.uniforms;if(T.useProgram(Tn.program)&&(oi=!0,yi=!0,kn=!0),ee.id!==V&&(V=ee.id,yi=!0),Ke.needsLights){let Gt=mt(A.state.lightProbeGridArray,ae);Ke.lightProbeGrid!==Gt&&(Ke.lightProbeGrid=Gt,yi=!0)}if(oi||J!==R){T.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Nt.setValue(W,"projectionMatrix",R.projectionMatrix),Nt.setValue(W,"viewMatrix",R.matrixWorldInverse);let yr=Nt.map.cameraPosition;yr!==void 0&&yr.setValue(W,Ae.setFromMatrixPosition(R.matrixWorld)),O.logarithmicDepthBuffer&&Nt.setValue(W,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Nt.setValue(W,"isOrthographic",R.isOrthographicCamera===!0),J!==R&&(J=R,yi=!0,kn=!0)}if(Ke.needsLights&&(_n.state.sunShadowMap.length>0&&Nt.setValue(W,"sunShadowMap",_n.state.sunShadowMap,ve),_n.state.directionalShadowMap.length>0&&Nt.setValue(W,"directionalShadowMap",_n.state.directionalShadowMap,ve),_n.state.spotShadowMap.length>0&&Nt.setValue(W,"spotShadowMap",_n.state.spotShadowMap,ve),_n.state.pointShadowMap.length>0&&Nt.setValue(W,"pointShadowMap",_n.state.pointShadowMap,ve)),ae.isSkinnedMesh){Nt.setOptional(W,ae,"bindMatrix"),Nt.setOptional(W,ae,"bindMatrixInverse");let Gt=ae.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),Nt.setValue(W,"boneTexture",Gt.boneTexture,ve))}ae.isBatchedMesh&&(Nt.setOptional(W,ae,"batchingTexture"),Nt.setValue(W,"batchingTexture",ae._matricesTexture,ve),Nt.setOptional(W,ae,"batchingIdTexture"),Nt.setValue(W,"batchingIdTexture",ae._indirectTexture,ve),Nt.setOptional(W,ae,"batchingColorTexture"),ae._colorsTexture!==null&&Nt.setValue(W,"batchingColorTexture",ae._colorsTexture,ve));let Mi=ce.morphAttributes;if((Mi.position!==void 0||Mi.normal!==void 0||Mi.color!==void 0)&&K.update(ae,ce,Tn),(yi||Ke.receiveShadow!==ae.receiveShadow)&&(Ke.receiveShadow=ae.receiveShadow,Nt.setValue(W,"receiveShadow",ae.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&Z.environment!==null&&(en.envMapIntensity.value=Z.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=zy()),yi){if(Nt.setValue(W,"toneMappingExposure",L.toneMappingExposure),Ke.needsLights&&rn(en,kn),Fe&&ee.fog===!0&&pe.refreshFogUniforms(en,Fe),pe.refreshMaterialUniforms(en,ee,_e,de,A.state.transmissionRenderTarget[R.id]),Ke.needsLights&&Ke.lightProbeGrid){let Gt=Ke.lightProbeGrid;en.probesSH.value=Gt.texture,en.probesMin.value.copy(Gt.boundingBox.min),en.probesMax.value.copy(Gt.boundingBox.max),en.probesResolution.value.copy(Gt.resolution)}ha.upload(W,ke(Ke),en,ve)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(ha.upload(W,ke(Ke),en,ve),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Nt.setValue(W,"center",ae.center),Nt.setValue(W,"modelViewMatrix",ae.modelViewMatrix),Nt.setValue(W,"normalMatrix",ae.normalMatrix),Nt.setValue(W,"modelMatrix",ae.matrixWorld),ee.uniformsGroups!==void 0){let Gt=ee.uniformsGroups;for(let yr=0,Ms=Gt.length;yr<Ms;yr++){let ad=Gt[yr];we.update(ad,Tn),we.bind(ad,Tn)}}return Tn}function rn(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.sunLights.needsUpdate=Z,R.sunLightShadows.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function kt(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(R,Z,ce){let ee=le.get(R);ee.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),le.get(R.texture).__webglTexture=Z,le.get(R.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:ce,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Z){let ce=le.get(R);ce.__webglFramebuffer=Z,ce.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(R,Z=0,ce=0){q=R,N=Z,I=ce;let ee=null,ae=!1,Fe=!1;if(R){let Ne=le.get(R);if(Ne.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(W.FRAMEBUFFER,Ne.__webglFramebuffer),re.copy(R.viewport),Se.copy(R.scissor),Ue=R.scissorTest,T.viewport(re),T.scissor(Se),T.setScissorTest(Ue),V=-1;return}else if(Ne.__webglFramebuffer===void 0)ve.setupRenderTarget(R);else if(Ne.__hasExternalTextures)ve.rebindTextures(R,le.get(R.texture).__webglTexture,le.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let ft=R.depthTexture;if(Ne.__boundDepthTexture!==ft){if(ft!==null&&le.has(ft)&&(R.width!==ft.image.width||R.height!==ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ve.setupDepthRenderbuffer(R)}}let Ye=R.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Fe=!0);let je=le.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(je[Z])?ee=je[Z][ce]:ee=je[Z],ae=!0):R.samples>0&&ve.useMultisampledRTT(R)===!1?ee=le.get(R).__webglMultisampledFramebuffer:Array.isArray(je)?ee=je[ce]:ee=je,re.copy(R.viewport),Se.copy(R.scissor),Ue=R.scissorTest}else re.copy(ze).multiplyScalar(_e).floor(),Se.copy(ht).multiplyScalar(_e).floor(),Ue=X;if(ce!==0&&(ee=Y),T.bindFramebuffer(W.FRAMEBUFFER,ee)&&T.drawBuffers(R,ee),T.viewport(re),T.scissor(Se),T.setScissorTest(Ue),ae){let Ne=le.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ne.__webglTexture,ce)}else if(Fe){let Ne=Z;for(let Ye=0;Ye<R.textures.length;Ye++){let je=le.get(R.textures[Ye]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Ye,je.__webglTexture,ce,Ne)}}else if(R!==null&&ce!==0){let Ne=le.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ne.__webglTexture,ce)}V=-1};function Pt(R){let Z=le.get(R);return(Z.__readFormat!==R.format||Z.__readType!==R.type)&&(Z.__readFormat=R.format,Z.__readType=R.type,Z.__formatReadable=O.textureFormatReadable(R.format),Z.__typeReadable=O.textureTypeReadable(R.type)),Z}this.readRenderTargetPixels=function(R,Z,ce,ee,ae,Fe,Ge,Ne=0){if(!(R&&R.isWebGLRenderTarget)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=le.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ye=Ye[Ge]),Ye){T.bindFramebuffer(W.FRAMEBUFFER,Ye);try{let je=R.textures[Ne],ft=je.format,gt=je.type;R.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ne);let Qe=Pt(je);if(Qe.__formatReadable===!1){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Qe.__typeReadable===!1){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-ee&&ce>=0&&ce<=R.height-ae&&W.readPixels(Z,ce,ee,ae,Ce.convert(ft),Ce.convert(gt),Fe)}finally{let je=q!==null?le.get(q).__webglFramebuffer:null;T.bindFramebuffer(W.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(R,Z,ce,ee,ae,Fe,Ge,Ne=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=le.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ye=Ye[Ge]),Ye)if(Z>=0&&Z<=R.width-ee&&ce>=0&&ce<=R.height-ae){T.bindFramebuffer(W.FRAMEBUFFER,Ye);let je=R.textures[Ne],ft=je.format,gt=je.type;R.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ne);let Qe=Pt(je);if(Qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Et=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Et),W.bufferData(W.PIXEL_PACK_BUFFER,Fe.byteLength,W.STREAM_READ),W.readPixels(Z,ce,ee,ae,Ce.convert(ft),Ce.convert(gt),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);let zt=q!==null?le.get(q).__webglFramebuffer:null;T.bindFramebuffer(W.FRAMEBUFFER,zt);let Lt=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await Wp(W,Lt,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Et),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Fe),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(Et),W.deleteSync(Lt),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Z=null,ce=0){let ee=Math.pow(2,-ce),ae=Math.floor(R.image.width*ee),Fe=Math.floor(R.image.height*ee),Ge=Z!==null?Z.x:0,Ne=Z!==null?Z.y:0;ve.setTexture2D(R,0),W.copyTexSubImage2D(W.TEXTURE_2D,ce,0,0,Ge,Ne,ae,Fe),T.unbindTexture()},this.copyTextureToTexture=function(R,Z,ce=null,ee=null,ae=0,Fe=0){let Ge,Ne,Ye,je,ft,gt,Qe,Et,zt,Lt=R.isCompressedTexture?R.mipmaps[Fe]:R.image;if(ce!==null)Ge=ce.max.x-ce.min.x,Ne=ce.max.y-ce.min.y,Ye=ce.isBox3?ce.max.z-ce.min.z:1,je=ce.min.x,ft=ce.min.y,gt=ce.isBox3?ce.min.z:0;else{let en=Math.pow(2,-ae);Ge=Math.floor(Lt.width*en),Ne=Math.floor(Lt.height*en),R.isDataArrayTexture?Ye=Lt.depth:R.isData3DTexture?Ye=Math.floor(Lt.depth*en):Ye=1,je=0,ft=0,gt=0}ee!==null?(Qe=ee.x,Et=ee.y,zt=ee.z):(Qe=0,Et=0,zt=0);let Ft=Ce.convert(Z.format),ln=Ce.convert(Z.type),Ke;Z.isData3DTexture?(ve.setTexture3D(Z,0),Ke=W.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(ve.setTexture2DArray(Z,0),Ke=W.TEXTURE_2D_ARRAY):(ve.setTexture2D(Z,0),Ke=W.TEXTURE_2D),T.activeTexture(W.TEXTURE0),T.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,Z.flipY),T.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),T.pixelStorei(W.UNPACK_ALIGNMENT,Z.unpackAlignment);let _n=T.getParameter(W.UNPACK_ROW_LENGTH),wt=T.getParameter(W.UNPACK_IMAGE_HEIGHT),Tn=T.getParameter(W.UNPACK_SKIP_PIXELS),oi=T.getParameter(W.UNPACK_SKIP_ROWS),yi=T.getParameter(W.UNPACK_SKIP_IMAGES);T.pixelStorei(W.UNPACK_ROW_LENGTH,Lt.width),T.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Lt.height),T.pixelStorei(W.UNPACK_SKIP_PIXELS,je),T.pixelStorei(W.UNPACK_SKIP_ROWS,ft),T.pixelStorei(W.UNPACK_SKIP_IMAGES,gt);let kn=R.isDataArrayTexture||R.isData3DTexture,Nt=Z.isDataArrayTexture||Z.isData3DTexture;if(R.isDepthTexture){let en=le.get(R),Mi=le.get(Z),Gt=le.get(en.__renderTarget),yr=le.get(Mi.__renderTarget);T.bindFramebuffer(W.READ_FRAMEBUFFER,Gt.__webglFramebuffer),T.bindFramebuffer(W.DRAW_FRAMEBUFFER,yr.__webglFramebuffer);for(let Ms=0;Ms<Ye;Ms++)kn&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,le.get(R).__webglTexture,ae,gt+Ms),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,le.get(Z).__webglTexture,Fe,zt+Ms)),W.blitFramebuffer(je,ft,Ge,Ne,Qe,Et,Ge,Ne,W.DEPTH_BUFFER_BIT,W.NEAREST);T.bindFramebuffer(W.READ_FRAMEBUFFER,null),T.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(ae!==0||R.isRenderTargetTexture||le.has(R)){let en=le.get(R),Mi=le.get(Z);T.bindFramebuffer(W.READ_FRAMEBUFFER,G),T.bindFramebuffer(W.DRAW_FRAMEBUFFER,C);for(let Gt=0;Gt<Ye;Gt++)kn?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,en.__webglTexture,ae,gt+Gt):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,en.__webglTexture,ae),Nt?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Mi.__webglTexture,Fe,zt+Gt):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Mi.__webglTexture,Fe),ae!==0?W.blitFramebuffer(je,ft,Ge,Ne,Qe,Et,Ge,Ne,W.COLOR_BUFFER_BIT,W.NEAREST):Nt?W.copyTexSubImage3D(Ke,Fe,Qe,Et,zt+Gt,je,ft,Ge,Ne):W.copyTexSubImage2D(Ke,Fe,Qe,Et,je,ft,Ge,Ne);T.bindFramebuffer(W.READ_FRAMEBUFFER,null),T.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Nt?R.isDataTexture||R.isData3DTexture?W.texSubImage3D(Ke,Fe,Qe,Et,zt,Ge,Ne,Ye,Ft,ln,Lt.data):Z.isCompressedArrayTexture?W.compressedTexSubImage3D(Ke,Fe,Qe,Et,zt,Ge,Ne,Ye,Ft,Lt.data):W.texSubImage3D(Ke,Fe,Qe,Et,zt,Ge,Ne,Ye,Ft,ln,Lt):R.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Fe,Qe,Et,Ge,Ne,Ft,ln,Lt.data):R.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Fe,Qe,Et,Lt.width,Lt.height,Ft,Lt.data):W.texSubImage2D(W.TEXTURE_2D,Fe,Qe,Et,Ge,Ne,Ft,ln,Lt);T.pixelStorei(W.UNPACK_ROW_LENGTH,_n),T.pixelStorei(W.UNPACK_IMAGE_HEIGHT,wt),T.pixelStorei(W.UNPACK_SKIP_PIXELS,Tn),T.pixelStorei(W.UNPACK_SKIP_ROWS,oi),T.pixelStorei(W.UNPACK_SKIP_IMAGES,yi),Fe===0&&Z.generateMipmaps&&W.generateMipmap(Ke),T.unbindTexture()},this.initRenderTarget=function(R){le.get(R).__webglFramebuffer===void 0&&ve.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ve.setTextureCube(R,0):R.isData3DTexture?ve.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ve.setTexture2DArray(R,0):ve.setTexture2D(R,0),T.unbindTexture()},this.resetState=function(){N=0,I=0,q=null,T.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}};var pa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ti=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Gy=new Xi(-1,1,1,-1,0,1),of=class extends Yt{constructor(){super(),this.setAttribute("position",new Ct([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ct([0,2,0,0,2,0],2))}},Vy=new of,Hr=class{constructor(e){this._mesh=new Ve(Vy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Gy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ma=class extends ti{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof nn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=xr.clone(e.uniforms),this.material=new nn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Hr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ao=class extends ti{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}},Qc=class extends ti{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var eu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ot);this._width=n.width,this._height=n.height,t=new mn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:An}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ma(pa),this.copyPass.material.blending=fi,this.timer=new so}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let r=0,s=this.passes.length;r<s;r++){let a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ao!==void 0&&(a instanceof Ao?n=!0:a instanceof Qc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ot);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var tu=class extends ti{constructor(e,t,n=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new nt}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}};var T0={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new nt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ga=class i extends ti{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e!==void 0?new ot(e.x,e.y):new ot(256,256),this.clearColor=new nt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new mn(s,a,{type:An,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let l=0;l<this.nMips;l++){let h=new mn(s,a,{type:An,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+l,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let f=new mn(s,a,{type:An,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+l,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}let o=T0;this.highPassUniforms=xr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new nn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let l=0;l<this.nMips;l++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[l])),this.separableBlurMaterials[l].uniforms.invSize.value=new ot(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new j(1,1,1),new j(1,1,1),new j(1,1,1),new j(1,1,1),new j(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=xr.clone(pa.uniforms),this.blendMaterial=new nn({uniforms:this.copyUniforms,vertexShader:pa.vertexShader,fragmentShader:pa.fragmentShader,premultipliedAlpha:!0,blending:di,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new nt,this._oldClearAlpha=1,this._basic=new gn,this._fsQuad=new Hr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.invSize.value=new ot(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(e,t,n,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let r=[],s=[];for(let a=1;a<e;a+=2){let o=t[a],c=a+1<e?t[a+1]:0,u=o+c;r.push((a*o+(a+1)*c)/u),s.push(u)}return new nn({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new ot(.5,.5)},direction:{value:new ot(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:s}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new nn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};ga.BlurDirectionX=new ot(1,0);ga.BlurDirectionY=new ot(0,1);var Ro={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var nu=class extends ti{constructor(){super(),this.isOutputPass=!0,this.uniforms=xr.clone(Ro.uniforms),this.material=new $s({name:Ro.name,uniforms:this.uniforms,vertexShader:Ro.vertexShader,fragmentShader:Ro.fragmentShader}),this._fsQuad=new Hr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},bt.getTransfer(this._outputColorSpace)===Bt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===lo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===co?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===uo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===hs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===fo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===po?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ho&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var iu=class extends Ir{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new an;e.deleteAttribute("uv");let t=new $t({side:En}),n=new $t,r=new Vn(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let s=new Ve(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let a=new rs(e,n,6),o=new tn;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new Ve(e,va(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let u=new Ve(e,va(50));u.position.set(-16.109,18.021,-8.207),u.scale.set(.1,2.425,2.751),this.add(u);let l=new Ve(e,va(17));l.position.set(14.904,12.198,-1.832),l.scale.set(.15,4.265,6.331),this.add(l);let h=new Ve(e,va(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let f=new Ve(e,va(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let p=new Ve(e,va(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function va(i){return new Qa({color:0,emissive:16777215,emissiveIntensity:i})}var Dt=128;function Io(i,e,t){var n=i*374761393+e*668265263+t*982451653|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function A0(i,e,t,n){var r=Math.floor(i),s=Math.floor(e),a=i-r,o=e-s,c=a*a*(3-2*a),u=o*o*(3-2*o);function l(_,g){return Io((_%t+t)%t,(g%t+t)%t,n)}var h=l(r,s),f=l(r+1,s),p=l(r,s+1),v=l(r+1,s+1);return h+(f-h)*c+(p-h)*u+(h-f-p+v)*c*u}function ni(i,e,t,n){for(var r=0,s=.5,a=1,o=0;o<t;o++)r+=s*A0(i*a,e*a,8*a,n+o*17),s*=.5,a*=2;return r}function pi(i,e,t){return i+(e-i)*t}function ou(i){return i<0?0:i>1?1:i}function _r(i){return[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255]}function Wy(i,e){e=e||{};for(var t=new Uint8ClampedArray(Dt*Dt*4),n=new Float32Array(Dt*Dt),r=e.emissive?new Uint8ClampedArray(Dt*Dt*4):null,s=new Uint8ClampedArray(Dt*Dt*4),a=0;a<Dt;a++)for(var o=0;o<Dt;o++){var c=i(o/Dt,a/Dt,o,a),u=a*Dt+o,l=u*4;t[l]=c.c[0]*255,t[l+1]=c.c[1]*255,t[l+2]=c.c[2]*255,t[l+3]=255,n[u]=c.h;var h=(c.r===void 0?.85:c.r)*255;if(s[l]=h,s[l+1]=h,s[l+2]=h,s[l+3]=255,r){var f=c.e||[0,0,0];r[l]=f[0]*255,r[l+1]=f[1]*255,r[l+2]=f[2]*255,r[l+3]=255}}return{map:ru(t,!0),normalMap:ru(Xy(n,e.bump||3),!1),roughnessMap:ru(s,!1),emissiveMap:r?ru(r,!0):null}}function Xy(i,e){for(var t=new Uint8ClampedArray(Dt*Dt*4),n=0;n<Dt;n++)for(var r=0;r<Dt;r++){var s=i[n*Dt+(r+Dt-1)%Dt],a=i[n*Dt+(r+1)%Dt],o=i[(n+Dt-1)%Dt*Dt+r],c=i[(n+1)%Dt*Dt+r],u=(s-a)*e,l=(o-c)*e,h=1,f=Math.sqrt(u*u+l*l+h*h),p=(n*Dt+r)*4;t[p]=(u/f*.5+.5)*255,t[p+1]=(l/f*.5+.5)*255,t[p+2]=(h/f*.5+.5)*255,t[p+3]=255}return t}function ru(i,e){var t;if(typeof document!="undefined"){var n=document.createElement("canvas");n.width=Dt,n.height=Dt,n.getContext("2d").putImageData(new ImageData(i,Dt,Dt),0,0),t=new Pr(n)}else t=new cr(i,Dt,Dt);return t.wrapS=t.wrapT=ui,t.colorSpace=e?Jt:ei,t.anisotropy=8,t.magFilter=jt,t.needsUpdate=!0,t}function Yy(i,e,t,n){var r=_r(i),s=_r(e),a=_r(t);return function(o,c){var u=8,l=Math.floor(c*u),h=l%2?.5:0,f=o*4+h,p=Math.floor(f),v=f-p,_=c*u-l,g=Math.min(v,1-v)*4*.5,m=Math.min(_,1-_)*.5,x=Math.min(g,m*2),E=ni(o*8,c*8,4,n),M=Io(p&3,l,n),w=ni(o*24,c*24,2,n+5)>.72?.25:0;if(x<.045){var A=.8+E*.4;return{c:[a[0]*A,a[1]*A,a[2]*A],h:.1+E*.1,r:.95}}var P=ou(M*.6+E*.5),y=.8+E*.35-w;return{c:[pi(s[0],r[0],P)*y,pi(s[1],r[1],P)*y,pi(s[2],r[2],P)*y],h:.6+E*.3-w+Math.min(x,.12)*2,r:.8+E*.15}}}function Ky(i,e,t){var n=_r(i),r=_r(e);return function(s,a){var o=s*3,c=a*4+Math.floor(s*3)%2*.5,u=o-Math.floor(o),l=c-Math.floor(c),h=Io(Math.floor(o)%3,Math.floor(c)%4,t),f=Math.min(u,1-u,(l<.5?l:1-l)*1.5),p=ni(s*6,a*6,5,t);if(f<.012)return{c:[.62,.42,.2],h:.35,r:.35};if(f<.035)return{c:[r[0]*.5,r[1]*.5,r[2]*.5],h:.1,r:.95};var v=ou(p*.8+h*.4),_=.8+p*.3;return{c:[pi(r[0],n[0],v)*_,pi(r[1],n[1],v)*_,pi(r[2],n[2],v)*_],h:.5+p*.5,r:.9}}}function lu(i,e,t){var n=_r(i),r=_r(e);return function(s,a,o,c){var u=s*2%1,l=a*2%1,h=Math.min(u,1-u,l,1-l)<.012,f=[[.06,.06],[.94,.06],[.06,.94],[.94,.94]].some(function(g){var m=u-g[0],x=l-g[1];return m*m+x*x<9e-4}),p=ni(s*6,a*16,4,t),v=A0(s*90,a*4,90,t+3)>.9?.15:0,_=.75+p*.35+v;return h?{c:[r[0]*.4,r[1]*.4,r[2]*.4],h:.1,r:.6}:f?{c:[n[0]*1.2,n[1]*1.2,n[2]*1.2],h:1,r:.35}:{c:[pi(r[0],n[0],p)*_,pi(r[1],n[1],p)*_,pi(r[2],n[2],p)*_],h:.5+p*.1,r:.45+p*.2}}}function Zy(i){var e=lu(6179892,2234898,i);return function(t,n,r,s){var a=e(t,n,r,s),o=Math.abs(n-.5)<.025&&t*4%1>.15&&t*4%1<.85,c=Math.abs(n-.15)<.04&&Math.abs(t*2%1-.5)<.12;return o?{c:[.2,.6,.7],h:.3,r:.3,e:[.05,.42,.52]}:c?{c:[.8,.6,.3],h:.8,r:.3,e:[.55,.3,.07]}:(a.e=[0,0,0],a)}}function au(i,e){return function(t,n){var r=t*2,s=Math.floor(n*3),a=n*3;r+=s%2*.5;var o=r-Math.floor(r),c=a-s,u=Math.min(o,1-o,c,1-c)*2,l=ni(t*6,n*6,5,i),h=Io(Math.floor(r)&1,s%3,i),f=.55+l*.45+h*.15;return u<.025?e?{c:[.25,.03,.04],h:.05,r:.6,e:[.12,.01,.02]}:{c:[.9,.06,.12],h:.05,r:.3,e:[.9,.04,.1]}:u<.05?{c:[.05,.04,.045],h:.15,r:.9,e:[.18,.01,.02]}:{c:[.13*f,.115*f,.12*f],h:.5+l*.5,r:.85-l*.2,e:[0,0,0]}}}function Jy(i){return function(e,t){var n=ni(e*4,t*4,4,i),r=ni(e*9+n*2,t*9,3,i+3),s=ou(.35+r*.9-(n>.62?(n-.62)*3:0));return{c:[.3+s*.55,.01+s*.04,.03+s*.06],h:.2+r*.2,r:.2,e:[.18+s*.62,s*.03,.02+s*.06]}}}function lf(i){var e=lu(9071170,3154970,31),t=i==="red"?[.9,.12,.08]:i==="blue"?[.15,.35,1]:null;return function(n,r,s,a){var o=e(n,r,s,a),c=n*8%1,u=(r-.88)/.12,l=Math.abs(c-.5)+Math.abs(u-.5)<.32;return r>.88?{c:l?[.2,.13,.07]:[.9,.68,.3],h:l?.3:.85,r:l?.7:.3,e:[0,0,0]}:Math.abs(n-.5)<.012?{c:[.05,.05,.05],h:0,r:.8,e:[0,0,0]}:t&&Math.abs(r-.45)<.05?{c:t,h:.7,r:.3,e:[t[0]*.8,t[1]*.8,t[2]*.8]}:(o.e=[0,0,0],o)}}function E0(i){var e=lu(8019514,2760726,41);return function(t,n,r,s){var a=e(t,n,r,s),o=Math.abs(t-.5)<.18&&Math.abs(n-.5)<.26;if(o){var c=Math.abs(t-.5)<.04&&(i?n>.5&&n<.72:n>.28&&n<.5),u=Math.abs(t-.5)<.08&&Math.abs(n-(i?.3:.7))<.04,l=i?[.35,.95,1]:[1,.1,.16];return u?{c:l,h:.9,r:.2,e:l}:c?{c:[.8,.8,.75],h:1,r:.3,e:[0,0,0]}:{c:[.06,.07,.06],h:.2,r:.7,e:[0,0,0]}}return a.e=[0,0,0],a}}function Co(i,e,t,n){var r=_r(i),s=_r(e);return function(a,o){var c=a*4%1,u=o*4%1,l=Math.min(c,1-c,u,1-u),h=Io(Math.floor(a*4),Math.floor(o*4),t),f=ni(a*8,o*8,4,t);if(l<.03)return{c:[s[0]*.4,s[1]*.4,s[2]*.4],h:.05,r:.95};if(n&&(c*10%1<.3||u*10%1<.3)&&l>.08)return{c:[s[0]*.3,s[1]*.3,s[2]*.3],h:.1,r:.6};var p=ou(h*.5+f*.6),v=.7+f*.4;return{c:[pi(s[0],r[0],p)*v,pi(s[1],r[1],p)*v,pi(s[2],r[2],p)*v],h:.5+f*.3,r:n?.5:.8}}}function jy(i){var e=au(i,!0);return function(t,n){var r=e(t,n),s=ni(t*3,n*3,3,i+20)>.66;if(s){var a=ni(t*10,n*10,3,i+21);return{c:[1,.1+a*.18,.16],h:0,r:.25,e:[1.3,.08+a*.16,.18]}}return r}}function $y(i){return Co(2762274,1183760,i,!1)}function Qy(i){var e=Co(11575942,4866612,i,!1);return function(t,n,r,s){var a=t*2%1,o=n*2%1,c=a-.5,u=o-.5;if(Math.min(a,1-a,o,1-o)<.018)return{c:[.55,.36,.16],h:.4,r:.35};var l=Math.max(Math.abs(c),Math.abs(u)),h=(Math.abs(c)+Math.abs(u))/1.4142,f=Math.min(l,h),p=ni(t*10,n*10,3,i+4);return f<.15&&f>.125?{c:[.86*(.85+p*.3),.64*(.85+p*.3),.26],h:.8,r:.25}:f<.125?{c:[.32+p*.1,.24+p*.08,.14],h:.45,r:.6}:e(t,n,r,s)}}function eM(i){return function(e,t){var n=e*2%1,r=t*2%1,s=Math.min(n,1-n,r,1-r),a=ni(e*6,t*6,4,i),o=ni(e*2,t*2,3,i+9);if(s<.06){var c=.8+a*.4;return{c:[.42*c,.28*c,.14*c],h:1,r:.4}}if(s<.11)return{c:[.16,.12,.09],h:.75-(s-.06)*6,r:.9};var u=(.75+a*.35)*(.55+o*.6);return{c:[.26*u,.2*u,.15*u],h:.3+a*.1,r:.95}}}var w0={};function vn(i,e,t){return w0[i]||(w0[i]=Wy(e,t))}function cf(i){switch(i){case 1:return vn("brick",Yy(8275506,4071446,3813414,1),{bump:4});case 2:return vn("stone",Ky(12365458,7234642,2),{bump:4});case 3:return vn("metal",lu(10123846,3811862,3),{bump:3});case 4:return vn("tech",Zy(4),{emissive:!0,bump:3});case 5:return vn("hell",au(5),{emissive:!0,bump:5});case 6:return vn("door",lf(null),{emissive:!0,bump:3});case 7:return vn("doorRed",lf("red"),{emissive:!0,bump:3});case 8:return vn("doorBlue",lf("blue"),{emissive:!0,bump:3});case 9:return vn("switchOff",E0(!1),{emissive:!0,bump:3});case 10:return vn("switchOn",E0(!0),{emissive:!0,bump:3})}return cf(1)}var su=null;function R0(){if(su)return su;var i=128,e=new Uint8ClampedArray(i*i*4),t=44;function n(c,u,l,h,f,p){if(!(c<0||u<0||c>=i||u>=i)){var v=(u*i+c)*4;e[v]=l,e[v+1]=h,e[v+2]=f,e[v+3]=Math.max(e[v+3],p)}}for(var r=10;r<118;r++)t+=r%7===0?1:r%9===0?-1:0,n(t-1,r,200,190,170,150),n(t+2,r,200,190,170,150),n(t,r,12,10,8,255),n(t+1,r,12,10,8,255);for(var s=0;s<16;s++)n(t+3+s,60+s,12,10,8,255),n(t+3+s,59+s,200,190,170,140);var a;if(typeof document!="undefined"){var o=document.createElement("canvas");o.width=o.height=i,o.getContext("2d").putImageData(new ImageData(e,i,i),0,0),a=new Pr(o)}else a=new cr(e,i,i);return a.colorSpace=Jt,a.magFilter=jt,a.needsUpdate=!0,su=new $t({map:a,transparent:!0,alphaTest:.3,depthWrite:!1,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1}),su}function uf(i){switch(i){case"tech":return vn("fTech",Co(6968888,2366482,11,!0),{bump:3});case"hell":return vn("fHell",jy(12),{emissive:!0,bump:4});case"mercury":return vn("fMercury",Jy(16),{emissive:!0,bump:1});case"ceilTech":return vn("cTech",Co(4865580,1577998,13,!0),{bump:2});case"ceilHell":return vn("cHell",au(14,!0),{emissive:!0,bump:4});case"ceilDark":return vn("cDark",$y(15),{bump:2});case"ceilVault":return vn("cVault",eM(17),{bump:5});case"basalt":return vn("fBasalt",au(18,!0),{emissive:!0,bump:4});case"star":return vn("fStar",Qy(19),{bump:3});default:return vn("fSlab",Co(9340014,3946026,10,!1),{bump:3})}}function Ji(i,e){var t=new $t(Object.assign({map:i.map,normalMap:i.normalMap,roughnessMap:i.roughnessMap,roughness:1,metalness:.05},e||{}));return i.emissiveMap&&(t.emissiveMap=i.emissiveMap,t.emissive=new nt(16777215),t.emissiveIntensity=1.6),t}function hu(){this.groups={}}hu.prototype.quad=function(i,e,t,n,r,s,a){var o=this.groups[i]||(this.groups[i]={pos:[],nor:[],uv:[]}),c=t[0]-e[0],u=t[1]-e[1],l=t[2]-e[2],h=n[0]-e[0],f=n[1]-e[1],p=n[2]-e[2],v=(u*p-l*f)*s[0]+(l*h-c*p)*s[1]+(c*f-u*h)*s[2]<0,_=v?[0,3,2,0,2,1]:[0,1,2,0,2,3],g=[e,t,n,r];_.forEach(function(m){var x=g[m],E=a[m];o.pos.push(x[0],x[1],x[2]),o.nor.push(s[0],s[1],s[2]),o.uv.push(E[0],E[1])})};hu.prototype.meshes=function(i){var e=[];for(var t in this.groups){var n=this.groups[t],r=new Yt;r.setAttribute("position",new Ct(n.pos,3)),r.setAttribute("normal",new Ct(n.nor,3)),r.setAttribute("uv",new Ct(n.uv,2));var s=new Ve(r,i(t));s.name=t,e.push(s)}return e};function cu(i,e,t,n,r,s,a){if(!(a-s<.001)){var o,c,u,l,h;r==="E"?(o=[t+1,n+1],c=[t+1,n],u=[-1,0,0],l=n+1,h=n):r==="W"?(o=[t,n],c=[t,n+1],u=[1,0,0],l=n,h=n+1):r==="S"?(o=[t,n+1],c=[t+1,n+1],u=[0,0,-1],l=t,h=t+1):(o=[t+1,n],c=[t,n],u=[0,0,1],l=t+1,h=t),i.quad(e,[o[0],s,o[1]],[c[0],s,c[1]],[c[0],a,c[1]],[o[0],a,o[1]],u,[[l,s],[h,s],[h,a],[l,a]])}}var hf={E:[1,0],W:[-1,0],S:[0,1],N:[0,-1]};function Po(i,e,t,n,r,s,a,o){i.quad(e,[t,a,r],[t,a,o],[s,a,o],[s,a,r],[0,1,0],[[t,r],[t,o],[s,o],[s,r]]),i.quad(e,[t,n,o],[t,n,r],[s,n,r],[s,n,o],[0,-1,0],[[t,o],[t,r],[s,r],[s,o]]),i.quad(e,[t,n,o],[s,n,o],[s,a,o],[t,a,o],[0,0,1],[[t,n],[s,n],[s,a],[t,a]]),i.quad(e,[s,n,r],[t,n,r],[t,a,r],[s,a,r],[0,0,-1],[[s,n],[t,n],[t,a],[s,a]]),i.quad(e,[s,n,o],[s,n,r],[s,a,r],[s,a,o],[1,0,0],[[o,n],[r,n],[r,a],[o,a]]),i.quad(e,[t,n,r],[t,n,o],[t,a,o],[t,a,r],[-1,0,0],[[r,n],[o,n],[o,a],[r,a]])}function ff(i,e,t,n,r,s,a,o){r==="E"?Po(i,e,t+1-o,s,n,t+1,s+a,n+1):r==="W"?Po(i,e,t,s,n,t+o,s+a,n+1):r==="S"?Po(i,e,t,s,n+1-o,t+1,s+a,n+1):Po(i,e,t,s,n,t+1,s+a,n+o)}function C0(i){for(var e={},t=0;t<i.cells.length;t++){var n=i.cells[t];n>=1&&n<=5&&(e[n]=(e[n]||0)+1)}var r=1,s=-1;for(var a in e)e[a]>s&&(s=e[a],r=+a);return r}function tM(i,e,t){var n=C0(i);return[[1,0],[-1,0],[0,1],[0,-1]].forEach(function(r){var s=Kn(i,e+r[0],t+r[1]);s>=1&&s<=5&&(n=s)}),n}function I0(i,e,t){t=t||{};function n(te){return e&&e.texture("tex:"+te)||cf(te)}function r(te){return e&&e.texture("tex:"+te)||uf(te)}var s=i.W,a=i.L,o=new hu,c=new yt,u="wall"+C0(s),l={};s.lifts.forEach(function(te){l[te.x+","+te.z]=te});var h=[],f={};(a.events||[]).forEach(function(te){(te.do||[]).forEach(function ne(fe){fe.after&&(fe.do||[]).forEach(ne);var He=fe.raise||fe.lower;if(He){var W=Math.min(s.floor[He[1]*s.mw+He[0]],fe.to);h.push({box:He,lo:W,look:fe.look});for(var tt=He[1];tt<=He[3];tt++)for(var Te=He[0];Te<=He[2];Te++)f[Te+","+tt]=W}})});var p=[];function v(te,ne){var fe=Kn(s,te,ne);return fe===0||!!Si[fe]}function _(te,ne){var fe=l[te+","+ne];return fe?fe.bottom:f[te+","+ne]!==void 0?f[te+","+ne]:sn(s,te,ne)}for(var g=0;g<s.mh;g++)for(var m=0;m<s.mw;m++)if(v(m,g)){var x=_(m,g),E=Bi(s,m,g);!l[m+","+g]&&f[m+","+g]===void 0&&o.quad("floor",[m,x,g],[m,x,g+1],[m+1,x,g+1],[m+1,x,g],[0,1,0],[[m,g],[m,g+1],[m+1,g+1],[m+1,g]]),o.quad("ceil",[m,E,g],[m+1,E,g],[m+1,E,g+1],[m,E,g+1],[0,-1,0],[[m,g],[m+1,g],[m+1,g+1],[m,g+1]]);for(var M in hf){var w=m+hf[M][0],A=g+hf[M][1],P=Kn(s,w,A);if(!v(w,A)){if(P===9||P===12){var y={x:w,z:A,faces:new hu,dir:M,exit:P===9};cu(y.faces,"sw",m,g,M,x,E),p.push(y)}else cu(o,"wall"+(P>=1&&P<=5?P:1),m,g,M,x,E);Si[Kn(s,m,g)]||(ff(o,"trim",m,g,M,x,.09,.035),E-x>2&&ff(o,"trim",m,g,M,E-.12,.08,.05));continue}var S=_(w,A),L=Bi(s,w,A);S>x&&(cu(o,u,m,g,M,x,Math.min(S,E)),S-x>.3&&ff(o,"trim",m,g,M,S-.07,.07,.06)),L<E&&cu(o,u,m,g,M,Math.max(L,x),E)}}for(var U=0;U<s.mh;U++)for(var D=0;D<s.mw;D++)if(!(U%3!==1||Kn(s,D,U)!==0)){var Y=Bi(s,D,U);Y-sn(s,D,U)<2.6||Po(o,"beam",D,Y-.2,U+.38,D+1,Y,U+.62)}var G={};function C(te){return G[te]?G[te]:te==="floor"?G[te]=Ji(r(t.floor||a.floor)):te==="ceil"?G[te]=Ji(r(t.ceil||a.ceil)):te==="trim"?G[te]=Ji(n(3),{color:10127992,metalness:.6,roughness:.5}):te==="beam"?G[te]=Ji(n(3),{color:6969930,metalness:.4}):G[te]=Ji(n(+te.slice(4)))}o.meshes(C).forEach(function(te){te.receiveShadow=!0,c.add(te)});var N=Ji(n(9)),I=Ji(n(10));p.forEach(function(te){te.faces.meshes(function(){return N}).forEach(function(ne){te.mesh=ne,c.add(ne)})});for(var q=C("floor"),V=C("trim"),J=h.map(function(te){var ne=te.box,fe=ne[2]-ne[0]+1,He=ne[3]-ne[1]+1,W=3,tt=new an(fe,W,He);uu(tt,fe,W);var Te=te.look?C("wall"+te.look):V,O=new Ve(tt,[Te,Te,q,Te,Te,Te]);return O.userData={i:ne[1]*s.mw+ne[0],depth:W,cx:ne[0]+fe/2,cz:ne[1]+He/2},c.add(O),O}),re=e&&e.texture("tex:mercury")||uf("mercury"),Se=new $t({color:10104880,emissive:16777215,emissiveIntensity:.9,roughness:.2,map:re.map,emissiveMap:re.map}),Ue=[],ut=0;ut<s.mh;ut++)for(var et=0;et<s.mw;et++){var Je=ut*s.mw+et;if(s.lava[Je]){var de=new Ve(new jn(1,1),Se);de.rotation.x=-Math.PI/2,de.position.set(et+.5,s.floor[Je]+.04,ut+.5),de.userData.i=Je,c.add(de),Ue.push(de)}}var _e=[];for(var De in s.doors){var We=s.doors[De],ze=sn(s,We.x,We.z),ht=Bi(s,We.x,We.z),X=ht-ze,ye;if(We.secret){ye=new Ve(new an(1,X,1),C("wall"+tM(s,We.x,We.z))),uu(ye.geometry,1,X);var qe=R0();[[0,.502,0],[Math.PI,-.502,0],[Math.PI/2,0,.502],[-Math.PI/2,0,-.502]].forEach(function(te){var ne=new Ve(new jn(.9,Math.min(X,1.9)*.9),qe);ne.rotation.y=te[0],ne.position.set(te[2],0,te[1]),ye.add(ne)})}else{var me=v(We.x-1,We.z)&&v(We.x+1,We.z),he=me?new an(.22,X,1):new an(1,X,.22);ye=new Ve(he,Ji(n(We.locked==="red"?7:We.locked==="blue"?8:6))),uu(ye.geometry,1,X)}ye.position.set(We.x+.5,ze+X/2,We.z+.5),ye.userData={door:We,baseY:ze+X/2,h:X},ye.castShadow=!0,c.add(ye),_e.push(ye)}var Ae=s.lifts.map(function(te){var ne=Math.max(.2,te.top-te.bottom+.2),fe=new Ve(new an(.98,ne,.98),Ji(n(4)));return uu(fe.geometry,1,ne),fe.userData={lift:te,h:ne},c.add(fe),fe});return{group:c,update:function(){_e.forEach(function(ne){var fe=ne.userData.door;ne.position.y=ne.userData.baseY+fe.open*ne.userData.h*.98,ne.visible=fe.open<.99}),Ae.forEach(function(ne){var fe=ne.userData.lift;ne.position.set(fe.x+.5,fe.pos-ne.userData.h/2,fe.z+.5)}),p.forEach(function(ne){if(ne.mesh){var fe=s.cells[ne.z*s.mw+ne.x];ne.mesh.material=fe===10||fe===13?I:N}}),J.forEach(function(ne){ne.position.set(ne.userData.cx,s.floor[ne.userData.i]-ne.userData.depth/2,ne.userData.cz)});var te=performance.now()/1e3;Se.map.offset.set(te*.02,te*.013),Se.emissiveIntensity=.85+Math.sin(te*2.3)*.12,Ue.forEach(function(ne){ne.visible=!!s.lava[ne.userData.i],ne.position.y=s.floor[ne.userData.i]+.04})}}}function uu(i,e,t){for(var n=i.attributes.uv,r=0;r<n.count;r++){var s=Math.floor(r/4),a=(s<4,e),o=s===2||s===3?e:t;n.setXY(r,n.getX(r)*a,n.getY(r)*o)}n.needsUpdate=!0}var Lo=new j;function mi(i,e,t,n,r,s){let a=2*Math.PI*r/4,o=Math.max(s-2*r,0),c=Math.PI/4;Lo.copy(e),Lo[n]=0,Lo.normalize();let u=.5*a/(a+o),l=1-Lo.angleTo(i)/c;return Math.sign(Lo[t])===1?l*u:o/(a+o)+u+u*(1-l)}var fu=class i extends an{constructor(e=1,t=1,n=1,r=2,s=.1){let a=r*2+1;if(s=Math.min(e/2,t/2,n/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:r,radius:s},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new j,u=new j,l=new j(e,t,n).divideScalar(2).subScalar(s),h=this.attributes.position.array,f=this.attributes.normal.array,p=this.attributes.uv.array,v=h.length/6,_=new j,g=.5/a;for(let m=0,x=0;m<h.length;m+=3,x+=2)switch(c.fromArray(h,m),u.copy(c),u.x-=Math.sign(u.x)*g,u.y-=Math.sign(u.y)*g,u.z-=Math.sign(u.z)*g,u.normalize(),h[m+0]=l.x*Math.sign(c.x)+u.x*s,h[m+1]=l.y*Math.sign(c.y)+u.y*s,h[m+2]=l.z*Math.sign(c.z)+u.z*s,f[m+0]=u.x,f[m+1]=u.y,f[m+2]=u.z,Math.floor(m/v)){case 0:_.set(1,0,0),p[x+0]=mi(_,u,"z","y",s,n),p[x+1]=1-mi(_,u,"y","z",s,t);break;case 1:_.set(-1,0,0),p[x+0]=1-mi(_,u,"z","y",s,n),p[x+1]=1-mi(_,u,"y","z",s,t);break;case 2:_.set(0,1,0),p[x+0]=1-mi(_,u,"x","z",s,e),p[x+1]=mi(_,u,"z","x",s,n);break;case 3:_.set(0,-1,0),p[x+0]=1-mi(_,u,"x","z",s,e),p[x+1]=1-mi(_,u,"z","x",s,n);break;case 4:_.set(0,0,1),p[x+0]=1-mi(_,u,"x","y",s,e),p[x+1]=1-mi(_,u,"y","x",s,t);break;case 5:_.set(0,0,-1),p[x+0]=mi(_,u,"x","y",s,e),p[x+1]=1-mi(_,u,"y","x",s,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function df(i,e){if(e===Ph)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===la||e===So){let t=i.getIndex();if(t===null){let s=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)s.push(o);i.setIndex(s),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,r=[];if(e===la)for(let s=1;s<=n;s++)r.push(t.getX(0)),r.push(t.getX(s)),r.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(r.push(t.getX(s)),r.push(t.getX(s+1)),r.push(t.getX(s+2))):(r.push(t.getX(s+2)),r.push(t.getX(s+1)),r.push(t.getX(s)));return r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(r),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function du(i){let e=new Map,t=new Map,n=i.clone();return P0(i,n,function(r,s){e.set(s,r),t.set(r,s)}),n.traverse(function(r){if(!r.isSkinnedMesh)return;let s=r,a=e.get(r),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function P0(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)P0(i.children[n],e.children[n],t)}var pu=class extends Wi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new yf(t)}),this.register(function(t){return new Mf(t)}),this.register(function(t){return new If(t)}),this.register(function(t){return new Pf(t)}),this.register(function(t){return new Lf(t)}),this.register(function(t){return new bf(t)}),this.register(function(t){return new Tf(t)}),this.register(function(t){return new Ef(t)}),this.register(function(t){return new wf(t)}),this.register(function(t){return new _f(t)}),this.register(function(t){return new Af(t)}),this.register(function(t){return new Sf(t)}),this.register(function(t){return new Cf(t)}),this.register(function(t){return new Rf(t)}),this.register(function(t){return new vf(t)}),this.register(function(t){return new mu(t,At.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new mu(t,At.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Nf(t)})}load(e,t,n,r){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let u=gr.extractUrlBase(e);a=gr.resolveURL(u,this.path)}else a=gr.extractUrlBase(e);this.manager.itemStart(e);let o=function(u){r?r(u):console.error(u),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Qs(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){try{s.parse(u,a,function(l){t(l),s.manager.itemEnd(e)},o)}catch(l){o(l)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s,a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===U0){try{a[At.KHR_BINARY_GLTF]=new Df(e)}catch(h){r&&r(h);return}s=JSON.parse(a[At.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let u=new qf(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let l=0;l<this.pluginCallbacks.length;l++){let h=this.pluginCallbacks[l](u);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let l=0;l<s.extensionsUsed.length;++l){let h=s.extensionsUsed[l],f=s.extensionsRequired||[];switch(h){case At.KHR_MATERIALS_UNLIT:a[h]=new xf;break;case At.KHR_DRACO_MESH_COMPRESSION:a[h]=new Of(s,this.dracoLoader);break;case At.KHR_TEXTURE_TRANSFORM:a[h]=new Uf;break;case At.KHR_MESH_QUANTIZATION:a[h]=new Ff;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}u.setExtensions(a),u.setPlugins(o),u.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}};function iM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function fn(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var At={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},vf=class{constructor(e){this.parser=e,this.name=At.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,r=t.cache.get(n);if(r)return r;let s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],u,l=new nt(16777215);c.color!==void 0&&l.setRGB(c.color[0],c.color[1],c.color[2],Fn);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":u=new cs(l),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new Vn(l),u.distance=h;break;case"spot":u=new io(l),u.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,u.angle=c.spot.outerConeAngle,u.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return u.position.set(0,0,0),ji(u,c),c.intensity!==void 0&&(u.intensity=c.intensity),u.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(u),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},xf=class{constructor(){this.name=At.KHR_MATERIALS_UNLIT}getMaterialType(){return gn}extendParams(e,t,n){let r=[];e.color=new nt(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Fn),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,Jt))}return Promise.all(r)}},_f=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=fn(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},yf=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return fn(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=fn(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ot(s,s)}return Promise.all(r)}},Mf=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_DISPERSION}getMaterialType(e){return fn(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=fn(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Sf=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return fn(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=fn(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(r)}},bf=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_SHEEN}getMaterialType(e){return fn(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=fn(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(t.sheenColor=new nt(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],Fn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Jt)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(r)}},Tf=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return fn(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=fn(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(r)}},Ef=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_VOLUME}getMaterialType(e){return fn(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=fn(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return t.attenuationColor=new nt().setRGB(s[0],s[1],s[2],Fn),Promise.all(r)}},wf=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_IOR}getMaterialType(e){return fn(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=fn(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Af=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_SPECULAR}getMaterialType(e){return fn(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=fn(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return t.specularColor=new nt().setRGB(s[0],s[1],s[2],Fn),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Jt)),Promise.all(r)}},Rf=class{constructor(e){this.parser=e,this.name=At.EXT_MATERIALS_BUMP}getMaterialType(e){return fn(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=fn(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(r)}},Cf=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return fn(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=fn(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(r)}},If=class{constructor(e){this.parser=e,this.name=At.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},Pf=class{constructor(e){this.parser=e,this.name=At.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=r.images[a.source],c=n.textureLoader;if(o.uri){let u=n.options.manager.getHandler(o.uri);u!==null&&(c=u)}return n.loadTextureImage(e,a.source,c)}},Lf=class{constructor(e){this.parser=e,this.name=At.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=r.images[a.source],c=n.textureLoader;if(o.uri){let u=n.options.manager.getHandler(o.uri);u!==null&&(c=u)}return n.loadTextureImage(e,a.source,c)}},mu=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let c=r.byteOffset||0,u=r.byteLength||0,l=r.count,h=r.byteStride,f=new Uint8Array(o,c,u);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(l,h,f,r.mode,r.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(l*h);return a.decodeGltfBuffer(new Uint8Array(p),l,h,f,r.mode,r.filter),p})})}else return null}},Nf=class{constructor(e){this.name=At.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let u of r.primitives)if(u.mode!==gi.TRIANGLES&&u.mode!==gi.TRIANGLE_STRIP&&u.mode!==gi.TRIANGLE_FAN&&u.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let u in a)o.push(this.parser.getDependency("accessor",a[u]).then(l=>(c[u]=l,c[u])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(u=>{let l=u.pop(),h=l.isGroup?l.children:[l],f=u[0].count,p=[];for(let v of h){let _=new Mt,g=new j,m=new Ln,x=new j(1,1,1),E=new rs(v.geometry,v.material,f);for(let w=0;w<f;w++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,w),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,w),c.SCALE&&x.fromBufferAttribute(c.SCALE,w),E.setMatrixAt(w,_.compose(g,m,x));let M=null;for(let w in c)if(w==="_COLOR_0"){let A=c[w];E.instanceColor=new ur(A.array,A.itemSize,A.normalized)}else if(w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"){if(M===null){let P=E.geometry;M=new Yt,M.name=P.name;for(let y in P.attributes)M.setAttribute(y,P.attributes[y]);for(let y in P.morphAttributes)M.morphAttributes[y]=P.morphAttributes[y];P.index!==null&&M.setIndex(P.index),M.morphTargetsRelative=P.morphTargetsRelative;for(let y of P.groups)M.addGroup(y.start,y.count,y.materialIndex);P.boundingBox!==null&&(M.boundingBox=P.boundingBox.clone()),P.boundingSphere!==null&&(M.boundingSphere=P.boundingSphere.clone()),M.drawRange.start=P.drawRange.start,M.drawRange.count=P.drawRange.count,M.userData=Object.assign({},P.userData),E.geometry=M}let A=c[w];M.setAttribute(w,new ur(A.array,A.itemSize,A.normalized))}tn.prototype.copy.call(E,v),this.parser.assignFinalMaterial(E),p.push(E)}return l.isGroup?(l.clear(),l.add(...p),l):p[0]}))}},U0="glTF",No=12,L0={JSON:1313821514,BIN:5130562},Df=class{constructor(e){this.name=At.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,No),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==U0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-No,s=new DataView(e,No),a=0;for(;a<r;){let o=s.getUint32(a,!0);a+=4;let c=s.getUint32(a,!0);if(a+=4,c===L0.JSON){let u=new Uint8Array(e,No+a,o);this.content=n.decode(u)}else if(c===L0.BIN){let u=No+a;this.body=e.slice(u,u+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Of=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=At.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},u={};for(let l in a){let h=Hf[l]||l.toLowerCase();o[h]=a[l]}for(let l in e.attributes){let h=Hf[l]||l.toLowerCase();if(a[l]!==void 0){let f=n.accessors[e.attributes[l]],p=xa[f.componentType];u[h]=p.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(l){return new Promise(function(h,f){r.decodeDracoFile(l,function(p){for(let v in p.attributes){let _=p.attributes[v],g=c[v];g!==void 0&&(_.normalized=g)}h(p)},o,u,Fn,f)})})}},Uf=class{constructor(){this.name=At.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),r=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*r,e.offset.x,-e.repeat.x*r,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Ff=class{constructor(){this.name=At.KHR_MESH_QUANTIZATION}},gu=class extends Vi{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,u=o*3,l=r-t,h=(n-t)/l,f=h*h,p=f*h,v=e*u,_=v-u,g=-2*p+3*f,m=p-f,x=1-g,E=m-f+h;for(let M=0;M!==o;M++){let w=a[_+M+o],A=a[_+M+c]*l,P=a[v+M+o],y=a[v+M]*l;s[M]=x*w+E*A+g*P+m*y}return s}},rM=new Ln,Bf=class extends gu{interpolate_(e,t,n,r){let s=super.interpolate_(e,t,n,r);return rM.fromArray(s).normalize().toArray(s),s}},gi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},xa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},N0={9728:jt,9729:un,9984:rc,9985:sa,9986:ds,9987:Ni},D0={33071:ci,33648:ks,10497:ui},pf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Hf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},kr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},sM={CUBICSPLINE:void 0,LINEAR:ts,STEP:es},mf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function aM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new $t({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Yi})),i.DefaultMaterial}function vs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ji(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function oM(i,e,t){let n=!1,r=!1,s=!1;for(let u=0,l=e.length;u<l;u++){let h=e[u];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);let a=[],o=[],c=[];for(let u=0,l=e.length;u<l;u++){let h=e[u];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(f)}if(r){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(f)}if(s){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(u){let l=u[0],h=u[1],f=u[2];return n&&(i.morphAttributes.position=l),r&&(i.morphAttributes.normal=h),s&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function lM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function cM(i){let e,t=i.extensions&&i.extensions[At.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+gf(t.attributes):e=i.indices+":"+gf(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+gf(i.targets[n]);return e}function gf(i){let e="",t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function kf(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function uM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var hM=new Mt,qf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new iM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,a=-1;if(typeof navigator!="undefined"&&typeof navigator.userAgent!="undefined"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);r=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&r<17||s&&a<98?this.textureLoader=new ls(this.options.manager):this.textureLoader=new ro(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Qs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:n,userData:{}};return vs(s,o,r),ji(o,r),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){let a=t[r].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){let a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),s=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[u,l]of a.children.entries())s(l,o.children[u])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[At.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(s,a){n.load(gr.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let a=pf[r.type],o=xa[r.componentType],c=r.normalized===!0,u=new o(r.count*a);return Promise.resolve(new Wt(u,a,c))}let s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],c=pf[r.type],u=xa[r.componentType],l=u.BYTES_PER_ELEMENT,h=l*c,f=r.byteOffset||0,p=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,v=r.normalized===!0,_,g;if(p&&p!==h){let m=Math.floor(f/p),x="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+m+":"+r.count,E=t.cache.get(x);E||(_=new u(o,m*p,r.count*p/l),E=new Xs(_,p/l),t.cache.add(x,E)),g=new Ys(E,c,f%p/l,v)}else o===null?_=new u(r.count*c):_=new u(o,f,r.count*c),g=new Wt(_,c,v);if(r.sparse!==void 0){let m=pf.SCALAR,x=xa[r.sparse.indices.componentType],E=r.sparse.indices.byteOffset||0,M=r.sparse.values.byteOffset||0,w=new x(a[1],E,r.sparse.count*m),A=new u(a[2],M,r.sparse.count*c);o!==null&&(g=new Wt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let P=0,y=w.length;P<y;P++){let S=w[P];if(g.setX(S,A[P*c]),c>=2&&g.setY(S,A[P*c+1]),c>=3&&g.setZ(S,A[P*c+2]),c>=4&&g.setW(S,A[P*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=v}return g})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let r=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let u=this.loadImageSource(t,n).then(function(l){l.flipY=!1,l.name=a.name||o.name||"",l.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(l.name=o.uri);let f=(s.samplers||{})[a.sampler]||{};return l.magFilter=N0[f.magFilter]||un,l.minFilter=N0[f.minFilter]||Ni,l.wrapS=D0[f.wrapS]||ui,l.wrapT=D0[f.wrapT]||ui,l.generateMipmaps=!l.isCompressedTexture&&l.minFilter!==jt&&l.minFilter!==un,r.associations.set(l,{textures:e}),l}).catch(function(){return null});return this.textureCache[c]=u,u}loadImageSource(e,t){let n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=r.images[e],o=self.URL||self.webkitURL,c=a.uri||"",u=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){u=!0;let f=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let l=Promise.resolve(c).then(function(h){return new Promise(function(f,p){let v=f;t.isImageBitmapLoader===!0&&(v=function(_){let g=new hn(_);g.needsUpdate=!0,f(g)}),t.load(gr.resolveURL(h,s.path),v,void 0,p)})}).then(function(h){return u===!0&&o.revokeObjectURL(c),ji(h,a),h.userData.mimeType=a.mimeType||uM(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=l,l}assignTexture(e,t,n,r){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[At.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[At.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=s.associations.get(a);a=s.extensions[At.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new js,Bn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Js,Bn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(r||s||a){let o="ClonedMaterial:"+n.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return $t}loadMaterial(e){let t=this,n=this.json,r=this.extensions,s=n.materials[e],a,o={},c=s.extensions||{},u=[];if(c[At.KHR_MATERIALS_UNLIT]){let h=r[At.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),u.push(h.extendParams(o,s,t))}else{let h=s.pbrMetallicRoughness||{};if(o.color=new nt(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Fn),o.opacity=f[3]}h.baseColorTexture!==void 0&&u.push(t.assignTexture(o,"map",h.baseColorTexture,Jt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),u.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=wn);let l=s.alphaMode||mf.OPAQUE;if(l===mf.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===mf.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==gn&&(u.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new ot(1,1),s.normalTexture.scale!==void 0)){let h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&a!==gn&&(u.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==gn){let h=s.emissiveFactor;o.emissive=new nt().setRGB(h[0],h[1],h[2],Fn)}return s.emissiveTexture!==void 0&&a!==gn&&u.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Jt)),Promise.all(u).then(function(){let h=new a(o);return s.name&&(h.name=s.name),ji(h,s),t.associations.set(h,{materials:e}),s.extensions&&vs(r,h,s),h})}createUniqueName(e){let t=Zt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function s(o){return n[At.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return O0(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let u=e[o],l=cM(u),h=r[l];if(h)a.push(h.promise);else{let f;u.extensions&&u.extensions[At.KHR_DRACO_MESH_COMPRESSION]?f=s(u):f=O0(new Yt,u,t),u.mode===gi.TRIANGLE_STRIP?f=f.then(p=>df(p,So)):u.mode===gi.TRIANGLE_FAN&&(f=f.then(p=>df(p,la))),r[l]={primitive:u,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,u=a.length;c<u;c++){let l=a[c].material===void 0?aM(this.cache):this.getDependency("material",a[c].material);o.push(l)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let u=c.slice(0,c.length-1),l=c[c.length-1],h=[];for(let p=0,v=l.length;p<v;p++){let _=l[p],g=a[p],m,x=u[p];if(g.mode===gi.TRIANGLES||g.mode===gi.TRIANGLE_STRIP||g.mode===gi.TRIANGLE_FAN||g.mode===void 0){let E=s.isSkinnedMesh===!0,M=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");E&&M===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=E&&M?new Wa(_,x):new Ve(_,x),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(g.mode===gi.LINES)m=new Ya(_,x);else if(g.mode===gi.LINE_STRIP)m=new ss(_,x);else if(g.mode===gi.LINE_LOOP)m=new Ka(_,x);else if(g.mode===gi.POINTS)m=new hr(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&lM(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),ji(m,s),g.extensions&&vs(r,m,g),t.assignFinalMaterial(m),h.push(m)}for(let p=0,v=h.length;p<v;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return s.extensions&&vs(r,h[0],s),h[0];let f=new yt;s.extensions&&vs(r,f,s),t.associations.set(f,{meshes:e});for(let p=0,v=h.length;p<v;p++)f.add(h[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new cn(Oh.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Xi(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ji(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){let s=r.pop(),a=r,o=[],c=[];for(let u=0,l=a.length;u<l;u++){let h=a[u];if(h){o.push(h);let f=new Mt;s!==null&&f.fromArray(s.array,u*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new Xa(o,c)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],c=[],u=[],l=[];for(let h=0,f=r.channels.length;h<f;h++){let p=r.channels[h],v=r.samplers[p.sampler],_=p.target,g=_.node,m=r.parameters!==void 0?r.parameters[v.input]:v.input,x=r.parameters!==void 0?r.parameters[v.output]:v.output;_.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",x)),u.push(v),l.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(u),Promise.all(l)]).then(function(h){let f=h[0],p=h[1],v=h[2],_=h[3],g=h[4],m=[];for(let E=0,M=f.length;E<M;E++){let w=f[E],A=p[E],P=v[E],y=_[E],S=g[E];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let L=n._createAnimationTracks(w,A,P,y,S);if(L)for(let U=0;U<L.length;U++)m.push(L[U])}let x=new os(s,void 0,m);return ji(x,r),x})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,u=r.weights.length;c<u;c++)o.morphTargetInfluences[c]=r.weights[c]}),a})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=r.children||[];for(let u=0,l=o.length;u<l;u++)a.push(n.getDependency("node",o[u]));let c=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),c]).then(function(u){let l=u[0],h=u[1],f=u[2];f!==null&&l.traverse(function(p){p.isSkinnedMesh&&p.bind(f,hM)});for(let p=0,v=h.length;p<v;p++)l.add(h[p]);if(l.userData.pivot!==void 0&&h.length>0){let p=l.userData.pivot,v=h[0];l.pivot=new j().fromArray(p),l.position.x-=p[0],l.position.y-=p[1],l.position.z-=p[2],v.position.set(0,0,0),delete l.userData.pivot}return l})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],c=r._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(u){return r._getNodeRef(r.cameraCache,s.camera,u)})),r._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){o.push(u)}),this.nodeCache[e]=Promise.all(o).then(function(u){let l;if(s.isBone===!0?l=new Ks:u.length>1?l=new yt:u.length===1?l=u[0]:l=new tn,l!==u[0])for(let h=0,f=u.length;h<f;h++)l.add(u[h]);if(s.name&&(l.userData.name=s.name,l.name=a),ji(l,s),s.extensions&&vs(n,l,s),s.matrix!==void 0){let h=new Mt;h.fromArray(s.matrix),l.applyMatrix4(h)}else s.translation!==void 0&&l.position.fromArray(s.translation),s.rotation!==void 0&&l.quaternion.fromArray(s.rotation),s.scale!==void 0&&l.scale.fromArray(s.scale);if(!r.associations.has(l))r.associations.set(l,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){let h=r.associations.get(l);r.associations.set(l,{...h})}return r.associations.get(l).nodes=e,l}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,s=new yt;n.name&&(s.name=r.createUniqueName(n.name)),ji(s,n),n.extensions&&vs(t,s,n);let a=n.nodes||[],o=[];for(let c=0,u=a.length;c<u;c++)o.push(r.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let l=0,h=c.length;l<h;l++){let f=c[l];f.parent!==null?s.add(du(f)):s.add(f)}let u=l=>{let h=new Map;for(let[f,p]of r.associations)(f instanceof Bn||f instanceof hn)&&h.set(f,p);return l.traverse(f=>{let p=r.associations.get(f);p!=null&&h.set(f,p)}),h};return r.associations=u(s),s})}_createAnimationTracks(e,t,n,r,s){let a=[],o=e.name?e.name:e.uuid,c=[];function u(p){p.morphTargetInfluences&&c.push(p.name?p.name:p.uuid)}kr[s.path]===kr.weights?(u(e),e.isGroup&&e.children.forEach(u)):c.push(o);let l;switch(kr[s.path]){case kr.weights:l=dr;break;case kr.rotation:l=pr;break;case kr.translation:case kr.scale:l=Dr;break;default:n.itemSize===1?l=dr:l=Dr;break}let h=r.interpolation!==void 0?sM[r.interpolation]:ts,f=this._getArrayFromAccessor(n);for(let p=0,v=c.length;p<v;p++){let _=new l(c[p]+"."+kr[s.path],t.array,f,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=kf(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let r=this instanceof pr?Bf:gu;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function fM(i,e,t){let n=e.attributes,r=new Nn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,u=o.max;if(c!==void 0&&u!==void 0){if(r.set(new j(c[0],c[1],c[2]),new j(u[0],u[1],u[2])),o.normalized){let l=kf(xa[o.componentType]);r.min.multiplyScalar(l),r.max.multiplyScalar(l)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new j,c=new j;for(let u=0,l=s.length;u<l;u++){let h=s[u];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],p=f.min,v=f.max;if(p!==void 0&&v!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(v[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(v[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(v[2]))),f.normalized){let _=kf(xa[f.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}i.boundingBox=r;let a=new qn;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=a}function O0(i,e,t){let n=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=Hf[a]||a.toLowerCase();o in i.attributes||r.push(s(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});r.push(a)}return bt.workingColorSpace!==Fn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${bt.workingColorSpace}" not supported.`),ji(i,e),fM(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?oM(i,e.targets,t):i})}var vu=2,F0={imp:["imp"],gnasher:["gnasher"],knight:["knight","emberknight","ember_knight"],riley:["riley","rileyhologram"],fist:["fist","fists","fpfist","weaponfist"],pistol:["pistol","fppistol","weaponpistol"],shotgun:["shotgun","fpshotgun","weaponshotgun","pumpshotgun","doublebarrelshotgun"],chaingun:["chaingun","fpchaingun","weaponchaingun","minigun"],rocket:["rocketlauncher","rocket","fprocketlauncher","weaponrocketlauncher","launcher"],crate:["crate","woodencrate","crateintact"],barrel:["barrel","explosivebarrel","toxicbarrel"],torch:["torch","standingtorch"],lamp:["lamp","ceilinglamp","cagedlamp","ceilinglampintact","lampintact"],lampBroken:["lampbroken","ceilinglampbroken","brokenlamp"],pipeStraight:["pipestraight","pipe"],pipeElbow:["pipeelbow","elbow"],pipeValve:["pipevalve","valve"],chain:["chain","hangingchain"],"pickup:h":["medkitsmall","stimpack","smallmedkit","stim"],"pickup:+":["medkitlarge","medkit","largemedkit","medikit"],"pickup:b":["bulletclip","clip","ammoclip","bullets"],"pickup:a":["shellbox","shells","boxofshells"],"pickup:k":["rocketbox","rockets","boxofrockets"],"pickup:A":["armor","armour","armorvest","armourvest","vest"],"pickup:r":["keycardred","redkeycard","keyred"],"pickup:u":["keycardblue","bluekeycard","keyblue"],"pickup:P":["phoenixorb","orb"],"pickup:2":["shotgunpickup","pickupshotgun"],"pickup:3":["chaingunpickup","pickupchaingun"],"pickup:4":["rocketlauncherpickup","pickuprocketlauncher"],"tex:1":["brick"],"tex:2":["stone"],"tex:3":["metalpanel","metal"],"tex:4":["techpanel","tech"],"tex:5":["hellrock","hell"],"tex:6":["door","doorplain"],"tex:7":["doorred","doorredstripe","reddoor"],"tex:8":["doorblue","doorbluestripe","bluedoor"],"tex:9":["switchoff"],"tex:10":["switchon"],"tex:slab":["floorslab","slab"],"tex:tech":["floorgrate","grate"],"tex:hell":["lavafloor","floorlava"],"tex:ceilDark":["ceilingpanel","ceiling"],"tex:ceilTech":["ceilingpanel","ceilingtech"],"tex:ceilHell":["hellrock","ceilinghell"]};function zf(i){return String(i||"").toLowerCase().replace(/\.[a-z0-9]+$/,"").replace(/.*[\/\\]/,"").replace(/[^a-z0-9]/g,"")}function Gf(){var i={models:{},textures:{},ready:!1,loaded:[],problems:[]};return i.model=function(e){for(var t=F0[e]||[e],n=0;n<t.length;n++)if(i.models[t[n]])return i.models[t[n]];return null},i.texture=function(e){for(var t=F0[e]||[e],n=0;n<t.length;n++)if(i.textures[t[n]])return i.textures[t[n]];return null},i}var dM=["assets/codex","assets/cc0","assets"];function k0(i){var e=typeof window!="undefined"&&window.FIREBIRD_ASSET_PACK;return e&&Object.prototype.hasOwnProperty.call(e,i)?e[i]:void 0}function B0(i){var e=k0(i);if(e===void 0)return i;var t=/\.png$/i.test(i)?"image/png":/\.jpe?g$/i.test(i)?"image/jpeg":/\.webp$/i.test(i)?"image/webp":"model/gltf-binary";return"data:"+t+";base64,"+e}function pM(i){var e=k0(i+"/assets.json");return e!==void 0?Promise.resolve(e):typeof window!="undefined"&&window.FIREBIRD_ASSET_PACK||typeof location!="undefined"&&location.protocol==="file:"?Promise.resolve(null):fetch(i+"/assets.json",{cache:"no-cache"}).then(function(t){return t.ok?t.json():null}).catch(function(){return null})}function q0(i){var e=typeof window!="undefined"&&window.FIREBIRD_ASSET_PACK;i=i||e&&e.__dirs||dM;var t=Gf(),n=new pu,r=new ls;return Promise.all(i.map(function(o){return pM(o).then(function(c){return{dir:o,man:c}})})).then(function(o){var c=[];return o.forEach(function(u,l){if(u.man){var h=Array.isArray(u.man)?u.man:u.man.assets||u.man.files||[];h.forEach(function(f){c.push(a(u.dir,f,l))})}}),Promise.all(c)}).then(function(){return t.ready=!0,t});function s(o,c,u,l){var h=o[c];(!h||h.priority>l)&&(u.priority=l,o[c]=u)}function a(o,c,u){var l=c.file||c.path||c.src,h=String(c.type||c.kind||"").toLowerCase(),f=zf(c.id||c.name||l);if(l&&/\.glb$/i.test(l))return H0(n.loadAsync(B0(o+"/"+l)),2e4).then(function(x){s(t.models,f,{scene:x.scene,animations:x.animations||[],meta:c,type:h,dir:o},u),t.loaded.push(o+":"+f)}).catch(function(x){t.problems.push(o+"/"+l+": "+(x&&x.message||x))});if(h.indexOf("tex")===0||c.maps||c.textures){var p=c.maps||c.textures||{},v={},_=[],g={map:["albedo","basecolor","base_color","color","diffuse"],normalMap:["normal","normalmap"],roughnessMap:["roughness","rough","orm"],emissiveMap:["emissive","emission","glow"]},m=c.filter!=="linear";return Object.keys(g).forEach(function(x){var E=null;Object.keys(p).forEach(function(M){g[x].indexOf(M.toLowerCase().replace(/[^a-z_]/g,""))>=0&&(E=p[M])}),E&&_.push(H0(r.loadAsync(B0(o+"/"+E)),2e4).then(function(M){M.wrapS=M.wrapT=ui,M.anisotropy=8,M.colorSpace=x==="map"||x==="emissiveMap"?Jt:ei,m&&(M.magFilter=jt),v[x]=M}).catch(function(M){t.problems.push(o+"/"+E+": "+(M&&M.message||M))}))}),Promise.all(_).then(function(){v.map&&(s(t.textures,f,v,u),t.loaded.push(o+":tex:"+f))})}return null}}function H0(i,e){return new Promise(function(t,n){var r=setTimeout(function(){n(new Error("timed out"))},e);i.then(function(s){clearTimeout(r),t(s)},function(s){clearTimeout(r),n(s)})})}function xs(i){var e=du(i.scene);e.traverse(function(r){r.isMesh&&(r.castShadow=!0,r.frustumCulled=!r.isSkinnedMesh,r.material&&(r.material=Array.isArray(r.material)?r.material.map(function(s){return s.clone()}):r.material.clone()))});var t=i.animations.length?new ao(e):null,n={};return i.animations.forEach(function(r){n[zf(r.name).replace(/^.*\|/,"")]=r}),{obj:e,mixer:t,clips:n}}function Do(i,e){var t=zf(e);if(i[t])return i[t];for(var n in i)if(n.indexOf(t)>=0)return i[n];return null}var z0={};function it(i,e){return z0[i]||(z0[i]=e())}function Qt(i,e){return new $t(Object.assign({color:i,roughness:.7,metalness:.05},e||{}))}function xn(i,e){return new $t({color:0,emissive:i,emissiveIntensity:e||3,roughness:1})}function lt(i,e,t,n,r,s){var a=new Ve(i,e);return a.position.set(t,n,r),a.castShadow=!0,(s||this).add(a),a}var ii=function(){return new as(1,16,12)},Hn=function(){return new an(1,1,1)},qr=function(){return new $a(1,1,10)},vi=function(){return new Gi(1,1,1,14)},_s=function(){return new ja(1,1,6,12)};function _u(i){var e=[];return i.traverse(function(t){t.isMesh&&t.material&&!t.userData.noFlash&&(t.material=t.material.clone(),e.push(t.material))}),e}function mM(){var i=new yt,e=new yt;i.add(e);var t=Qt(8007196,{roughness:.6}),n=Qt(3806220),r=Qt(15259824,{roughness:.4}),s=lt(it("cap",_s),t,0,.5,0,e);s.scale.set(.17,.14,.13),s.rotation.x=.35;var a=lt(it("sph",ii),t,0,.72,.06,e);a.scale.set(.11,.1,.11),[-1,1].forEach(function(c){var u=lt(it("cone",qr),n,c*.07,.83,.02,e);u.scale.set(.025,.12,.025),u.rotation.z=-c*.5;var l=lt(it("sph",ii),xn(16752672,2),c*.045,.74,.15,e);l.scale.setScalar(.018),l.userData.noFlash=!0;var h=new yt;h.position.set(c*.17,.58,.02),e.add(h);var f=lt(it("cap",_s),t,0,-.1,0,h);f.scale.set(.04,.09,.04);var p=lt(it("cone",qr),r,0,-.26,.03,h);p.scale.set(.03,.07,.03),p.rotation.x=Math.PI,h.userData.side=c,e.userData["arm"+c]=h;var v=lt(it("cap",_s),n,c*.08,.18,0,e);v.scale.set(.05,.12,.05),e.userData["leg"+c]=v;var _=lt(it("cone",qr),n,c*.06,.55,-.12,e);_.scale.set(.03,.09,.03),_.rotation.x=-1.2});var o=_u(i);return{obj:i,mats:o,animate:function(c,u){var l=c.state==="chase"||c.state==="flee"?Math.sin(u*9+c.animT):0;e.position.y=Math.abs(l)*.03,e.userData.leg1.rotation.x=l*.6,e.userData["leg-1"].rotation.x=-l*.6;var h=c.state==="windup"?1:0;e.userData.arm1.rotation.x=-l*.5-h*2.4,e.userData["arm-1"].rotation.x=l*.5-h*.4,e.rotation.x=c.state==="pain"?-.35:0}}}function gM(){var i=new yt,e=new yt;i.add(e);var t=Qt(12873850,{roughness:.55}),n=Qt(3803152),r=Qt(16051416,{roughness:.3}),s=lt(it("sph",ii),t,0,.36,0,e);s.scale.set(.34,.28,.32);var a=new yt;a.position.set(0,.3,.12),e.add(a);var o=lt(it("sph",ii),n,0,.04,.12,e);o.scale.set(.24,.1,.12),o.position.y=.33;for(var c=0;c<9;c++){var u=(c/8-.5)*2.4,l=lt(it("cone",qr),r,Math.sin(u)*.22,.42,.14+Math.cos(u)*.14,e);l.scale.set(.028,.08,.028),l.rotation.x=Math.PI;var h=lt(it("cone",qr),r,Math.sin(u)*.2,-.02,Math.cos(u)*.14+.02,a);h.scale.set(.025,.07,.025)}var f=lt(it("sph",ii),t,0,-.04,.02,a);f.scale.set(.26,.08,.22),[-1,1].forEach(function(v){var _=lt(it("sph",ii),xn(16752688,.9),v*.12,.56,.25,e);_.scale.setScalar(.02),_.userData.noFlash=!0;var g=lt(it("cap",_s),t,v*.18,.1,0,e);g.scale.set(.07,.07,.07),e.userData["leg"+v]=g});var p=_u(i);return{obj:i,mats:p,animate:function(v,_){var g=v.state==="chase"||v.state==="flee"?Math.sin(_*14+v.animT):0;e.position.y=Math.abs(g)*.04,e.userData.leg1.position.z=g*.08,e.userData["leg-1"].position.z=-g*.08;var m=v.state==="windup"?.7:(Math.sin(_*6+v.animT)+1)*.08;a.rotation.x=m,e.rotation.x=v.state==="windup"?.25:v.state==="pain"?-.3:0}}}function vM(){var i=new yt,e=new yt;i.add(e);var t=Qt(2367519,{roughness:.55,metalness:.3}),n=Qt(10122816,{roughness:.3,metalness:.85}),r=xn(16718384,4),s=lt(it("box",Hn),t,0,.82,0,e);s.scale.set(.5,.42,.3);var a=lt(it("box",Hn),n,0,.55,0,e);a.scale.set(.4,.16,.26);var o=lt(it("sph",ii),r,0,.84,.16,e);o.scale.setScalar(.07),o.userData.noFlash=!0;var c=lt(it("box",Hn),t,0,1.12,.02,e);c.scale.set(.2,.18,.2);var u=lt(it("box",Hn),xn(16722490,5),0,1.13,.12,e);u.scale.set(.15,.03,.02),u.userData.noFlash=!0,[-1,1].forEach(function(p){var v=lt(it("box",Hn),xn(16718384,2),p*.12,.82,.152,e);v.scale.set(.02,.36,.01),v.userData.noFlash=!0;var _=lt(it("sph",ii),t,p*.3,1,0,e);_.scale.set(.14,.1,.14);var g=new yt;g.position.set(p*.33,.95,0),e.add(g),e.userData["arm"+p]=g;var m=lt(it("box",Hn),t,0,-.25,0,g);m.scale.set(.13,.42,.13);var x=lt(it("box",Hn),n,0,-.5,.02,g);x.scale.set(.15,.13,.15);var E=lt(it("box",Hn),t,p*.13,.24,0,e);E.scale.set(.15,.48,.17),e.userData["leg"+p]=E});var l=lt(it("cone",qr),n,0,1.33,.02,e);l.scale.set(.05,.24,.05);var h=new Ve(new hi(.12,.015,6,20),n);h.rotation.x=Math.PI/2,h.position.set(0,1.22,.02),e.add(h);var f=_u(i);return{obj:i,mats:f,animate:function(p,v){var _=p.state==="chase"?Math.sin(v*6+p.animT):0;e.userData.leg1.rotation.x=_*.4,e.userData["leg-1"].rotation.x=-_*.4,e.userData.arm1.rotation.x=p.state==="windup"?-2.2:-_*.3,e.userData["arm-1"].rotation.x=p.state==="windup"?-1.2:_*.3,e.position.y=Math.abs(_)*.03}}}function xM(){var i=new yt,e=new yt;i.add(e);var t=new $t({color:665648,emissive:4184296,emissiveIntensity:1.2,transparent:!0,opacity:.82,roughness:.3,metalness:.2}),n=new $t({color:0,emissive:10484991,emissiveIntensity:3}),r=lt(it("cap",_s),t,0,.58,0,e);r.scale.set(.13,.16,.09);var s=lt(it("box",Hn),t,0,.4,0,e);s.scale.set(.22,.08,.13);var a=lt(it("sph",ii),t,0,.86,0,e);a.scale.set(.085,.1,.09);var o=lt(it("box",Hn),n,0,.87,.07,e);o.scale.set(.12,.028,.02);var c=lt(it("sph",ii),n,0,.64,.08,e);c.scale.setScalar(.03),[-1,1].forEach(function(f){var p=new yt;p.position.set(f*.15,.72,0),e.add(p),e.userData["arm"+f]=p;var v=lt(it("cap",_s),t,0,-.14,0,p);v.scale.set(.035,.13,.035);var _=lt(it("cap",_s),t,f*.07,.18,0,e);_.scale.set(.045,.16,.045),e.userData["leg"+f]=_});var u=new Ve(it("sph",ii),new $t({color:0,emissive:16765502,emissiveIntensity:1.5,transparent:!0,opacity:.25,side:wn,depthWrite:!1}));u.scale.setScalar(.62),u.position.y=.5,u.userData.noFlash=!0,i.add(u);var l=[t],h=new Ve(new hi(.34,.012,6,40),n);return h.rotation.x=Math.PI/2,h.position.y=.02,i.add(h),{obj:i,mats:l,animate:function(f,p){var v=f.state==="chase"?Math.sin(p*8+f.animT):0;e.userData.leg1.rotation.x=v*.5,e.userData["leg-1"].rotation.x=-v*.5,e.userData.arm1.rotation.x=f.state==="windup"?-1.5:-v*.4,e.userData["arm-1"].rotation.x=f.state==="windup"?-1.5:v*.4,e.position.y=.03+Math.sin(p*2)*.015;var _=f.state==="windup"&&f.attack!=="melee";n.emissive.setHex(_?16777215:10484991),n.emissiveIntensity=_?8:3,t.opacity=.7+Math.sin(p*23)*.06+(Math.random()<.02?-.3:0),u.visible=f.shieldT>0,u.rotation.y=p*1.5,h.scale.setScalar(1+Math.sin(p*3)*.05)}}}function _M(){var i=new yt,e=lt(it("cyl",vi),Qt(2761250,{roughness:.3,metalness:.4}),0,.28,0,i);e.scale.set(.2,.55,.2),[.06,.28,.5].forEach(function(r){var s=lt(it("cyl",vi),Qt(11042370,{metalness:.85,roughness:.3}),0,r,0,i);s.scale.set(.207,.035,.207)});var t=lt(it("cyl",vi),xn(16718384,2.5),0,.56,0,i);t.scale.set(.16,.01,.16),t.userData.noFlash=!0;var n=lt(it("box",Hn),xn(16722490,2),0,.39,.2,i);return n.scale.set(.1,.1,.005),n.rotation.z=Math.PI/4,n.userData.noFlash=!0,{obj:i,mats:_u(i),animate:function(){}}}var yM={imp:mM,gnasher:gM,knight:vM,riley:xM,barrel:_M};function MM(i,e){!i||i.userData.ash||(i.userData.ash=!0,i.onBeforeCompile=function(t){t.uniforms.ashGlow={value:.9*e},t.vertexShader=`varying vec3 vAshP;
`+t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vAshP = position;`),t.fragmentShader=`varying vec3 vAshP; uniform float ashGlow;
`+t.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
{ float l = dot(diffuseColor.rgb, vec3(0.3, 0.55, 0.15)); diffuseColor.rgb = mix(vec3(l), diffuseColor.rgb, 0.12) * vec3(0.5, 0.46, 0.45) + 0.03; }`).replace("#include <emissivemap_fragment>",["#include <emissivemap_fragment>","{ vec3 q = vAshP * 7.0;","  float n = sin(q.x * 1.3 + sin(q.y * 1.7)) * sin(q.y * 1.1 + sin(q.z * 1.9)) * sin(q.z * 1.5 + sin(q.x * 1.2));","  float crack = smoothstep(0.07, 0.0, abs(n));","  totalEmissiveRadiance += vec3(1.0, 0.07, 0.14) * crack * ashGlow; }"].join(`
`))},i.customProgramCacheKey=function(){return"ash"+e},i.needsUpdate=!0)}function SM(i,e){var t=xs(i),n=new yt;t.obj.scale.setScalar(1/vu),n.add(t.obj);var r=[],s=[],a=t.obj.getObjectByName("shield"),o=e&&(e.kind==="imp"||e.kind==="gnasher"||e.kind==="knight");t.obj.traverse(function(f){f.isMesh&&(Array.isArray(f.material)?f.material:[f.material]).forEach(function(p){o&&MM(p,e.kind==="knight"?1.4:1),p.emissive&&p.emissiveIntensity>1.2&&(p.emissiveIntensity=1.2),/tell/i.test(p.name)||/tell/i.test(f.name)?s.push(p):p.emissive&&r.push(p)})});var c=null,u=null;function l(f,p){if(t.mixer){var v=Do(t.clips,f)||(f==="attack_windup"?Do(t.clips,"attack"):null)||Do(t.clips,"idle");if(v){var _=t.mixer.clipAction(v);c!==_&&(_.reset(),_.setLoop(p?zc:Gc,1/0),_.clampWhenFinished=!!p,_.play(),c&&c.crossFadeTo(_,.15,!1),c=_)}}}var h={idle:"idle",chase:"walk",flee:"walk",windup:"attack_windup",pain:"pain",die:"death",dead:"death"};return{obj:n,mats:r,animate:function(f,p,v){var _=f.state||"idle";_!==u&&(u==="windup"&&_==="chase"&&Do(t.clips,"attack")?l("attack",!0):l(h[_]||"idle",_==="pain"||_==="die"||_==="dead"),u=_),c&&c.getClip().name&&/attack$/i.test(c.getClip().name)&&!c.isRunning()&&_==="chase"&&l("walk"),t.mixer&&t.mixer.update(v||0);var g=_==="windup"&&f.attack!=="melee";s.forEach(function(m){m.emissive&&(m.emissive.setHex(g?16777215:10484991),m.emissiveIntensity=g?6:2)}),a&&(a.visible=f.shieldT>0)},authored:!0,clip:function(){return c?c.getClip().name:null}}}function G0(i,e){var t=e&&e.model(i.kind),n=t?SM(t,i):yM[i.kind](),r=!t&&i.kind==="riley"?i.h/.95:1;n.obj.scale.setScalar(r);var s=0,a=n.animate;return n.debug=function(){return{kind:i.kind,authored:!!n.authored,clip:n.clip?n.clip():null,state:i.state}},n.update=function(o,c,u){n.obj.position.set(i.x,i.y,i.z);var l=i.state==="windup"||i.state==="pain"||i.los?u:i.moveAng||0,h=n.obj.rotation.y,f=-l+Math.PI/2,p=Math.atan2(Math.sin(f-h),Math.cos(f-h));if(n.obj.rotation.y=h+p*Math.min(1,c*10),n.authored)a(i,o,c);else if(i.state==="die"||i.state==="dead"){s+=c;var v=Math.min(1,s/.45);n.obj.rotation.x=-v*1.35,n.obj.position.y=i.y+.05*v,n.obj.scale.setScalar(r*(1-v*.15)),i.kind==="riley"&&(n.obj.visible=s*12%1<.6&&s<1.4)}else a(i,o);var _=i.flashT>0&&i.state!=="dead";n.mats.forEach(function(g){g.userData.base||(g.userData.base={e:g.emissive?g.emissive.getHex():0,i:g.emissiveIntensity}),_?(g.emissive.setHex(16777215),g.emissiveIntensity=1.4):(g.emissive.setHex(g.userData.base.e),g.emissiveIntensity=g.userData.base.i)})},n}function V0(i,e){var t=new yt,n=new yt;t.add(n);var r=i.item,s=e&&e.model("pickup:"+r);if(s){var a=xs(s);a.obj.scale.setScalar(1/vu),n.add(a.obj)}else if(r==="h"||r==="+"){var o=r==="+",c=it("oct",function(){return new Nr(1,0)}),u=lt(it("cyl",vi),Qt(10122816,{metalness:.85,roughness:.35}),0,.03,0,n);u.scale.set(o?.13:.08,.03,o?.13:.08);var l=lt(c,xn(16765040,2.4),0,o?.2:.14,0,n);l.scale.set(o?.09:.055,o?.16:.1,o?.09:.055),o&&[-1,1].forEach(function(L){var U=lt(c,xn(16771248,2),L*.1,.1,0,n);U.scale.set(.04,.07,.04)})}else if(r==="b"){var h=lt(it("cyl",vi),Qt(11569736,{metalness:.85,roughness:.3}),0,.09,0,n);h.scale.set(.05,.16,.05);var f=lt(it("cyl",vi),xn(9433343,2),0,.09,0,n);f.scale.set(.052,.07,.052)}else if(r==="a"){var p=lt(it("box",Hn),Qt(5914148,{roughness:.7}),0,.09,0,n);p.scale.set(.3,.18,.18);var v=lt(it("box",Hn),Qt(11569736,{metalness:.85,roughness:.3}),0,.09,0,n);v.scale.set(.31,.04,.185);for(var _=0;_<4;_++){var g=lt(it("cyl",vi),Qt(14725200,{metalness:.9,roughness:.25}),-.1+_*.066,.2,0,n);g.scale.set(.026,.06,.026)}}else if(r==="A"){var m=lt(it("box",Hn),Qt(11569736,{metalness:.85,roughness:.3}),0,.2,0,n);m.scale.set(.34,.36,.14);var x=lt(it("oct",function(){return new Nr(1,0)}),xn(9433343,1.8),0,.26,.075,n);x.scale.set(.07,.07,.02)}else if(r==="2"){var E=Vf(!0);E.scale.setScalar(.9),E.rotation.z=.2,E.position.y=.15,n.add(E)}else if(r==="r"||r==="u"){var M=r==="r"?16722458:3832575,w=lt(it("oct",function(){return new Nr(1,0)}),xn(M,2.5),0,.22,0,n);w.scale.set(.09,.15,.05);var A=lt(it("box",Hn),Qt(11569736,{metalness:.85,roughness:.3}),0,.22,0,n);A.scale.set(.12,.03,.07)}else if(r==="P"){var P=lt(it("sph",ii),xn(16756800,4),0,.3,0,n);P.scale.setScalar(.14);var y=new Ve(new hi(.2,.012,6,32),xn(16765502,3));y.position.y=.3,n.add(y)}var S=r==="r"||r==="u"||r==="P"||r==="2"||r==="h"||r==="+";return{obj:t,update:function(L){t.position.set(i.x,i.y,i.z),t.visible=!i.gone,S&&(n.rotation.y=L*1.8+i.bob),n.position.y=S?.08+Math.sin(L*2.5+i.bob)*.05:0}}}function W0(i,e){var t=new yt,n=e&&e.model("torch");if(n){var r=xs(n);return r.obj.scale.setScalar(1/vu),t.add(r.obj),t.position.set(i.x,i.y,i.z),{obj:t,update:function(l){r.mixer&&r.mixer.update(1/60)}}}var s=lt(it("cyl",vi),Qt(3811866,{metalness:.3}),0,.4,0,t);s.scale.set(.03,.8,.03);var a=lt(it("cyl",vi),Qt(5917242,{metalness:.6,roughness:.4}),0,.82,0,t);a.scale.set(.1,.06,.1);var o=new yt;o.position.y=.9,t.add(o);var c=lt(it("cone",qr),xn(16747040,5),0,.08,0,o);c.scale.set(.08,.2,.08);var u=lt(it("cone",qr),xn(16769120,6),0,.05,0,o);return u.scale.set(.045,.12,.045),t.position.set(i.x,i.y,i.z),{obj:t,update:function(l){var h=Math.sin(l*17+i.animT*9)*.5+Math.sin(l*29+i.animT*3)*.5;o.scale.set(1+h*.1,1+h*.25,1+h*.1),o.rotation.y=l*3}}}var bM=function(i,e,t,n){return new fu(i,e,t,3,n)};function On(i,e,t,n,r){return it("rb"+i,function(){return bM(e,t,n,r)})}var X0=function(){return Qt(6961690,{roughness:.55,metalness:.05})},xu=function(){return Qt(2760988,{roughness:.85})},Y0=function(){return Qt(4863014,{roughness:.9})},K0=function(){return Qt(11569736,{metalness:.9,roughness:.3})},Z0=function(){return Qt(5125664,{metalness:.85,roughness:.4})};function J0(i,e){var t=!1;i.traverse(function(n){/hand|arm|glove/i.test(n.name)&&(t=!0)}),!t&&(e==="shotgun"||e==="chaingun"||e==="rocket"?(_a(i,.01,-.07,.08,.4),_a(i,-.01,-.05,-.2,.1)):e!=="fist"&&_a(i,0,-.06,.02,.3))}function _a(i,e,t,n,r){var s=new yt;s.position.set(e,t,n),s.rotation.x=r||0,i.add(s);var a=new Ve(On("palm",.07,.05,.09,.02),xu());s.add(a);var o=new Ve(On("fing",.075,.03,.05,.012),xu());o.position.set(0,-.03,-.03),s.add(o);var c=new Ve(it("cyl",vi),Y0());return c.scale.set(.045,.28,.045),c.rotation.x=Math.PI/2-.15,c.position.set(.01,-.02,.17),s.add(c),s}function Vf(i){var e=new yt,t=K0(),n=Z0(),r=X0(),s=new Ve(it("cyl",vi),t);s.scale.set(.026,.46,.026),s.rotation.x=Math.PI/2,s.position.set(0,0,-.33),e.add(s),[-.2,-.33,-.46].forEach(function(_){var g=new Ve(it("ring",function(){return new hi(.031,.007,6,18)}),n);g.position.set(0,0,_),e.add(g)});var a=new Ve(it("bell",function(){return new Gi(.03,.078,.13,20,1,!0)}),Qt(13146704,{metalness:.9,roughness:.25,side:wn}));a.rotation.x=Math.PI/2,a.position.set(0,0,-.62),e.add(a);var o=new Ve(it("lip",function(){return new hi(.078,.008,6,24)}),n);o.position.set(0,0,-.685),e.add(o);var c=new Ve(it("sph",ii),xn(16762976,1.4));c.scale.set(.028,.028,.01),c.position.set(0,0,-.57),e.add(c);var u=new yt;u.position.set(0,-.036,-.28),e.add(u),e.userData.pump=u;var l=new Ve(On("fore",.064,.048,.19,.015),r);u.add(l),[-.06,.06].forEach(function(_){var g=new Ve(On("band",.068,.052,.014,.004),t);g.position.z=_,u.add(g)});var h=new Ve(On("recv",.078,.09,.2,.014),t);h.position.set(0,-.012,.02),e.add(h),[-1,1].forEach(function(_){var g=new Ve(On("win",.006,.04,.08,.003),xn(16762976,1.8));g.position.set(_*.04,-.005,.02),e.add(g)});var f=new Ve(new hi(.025,.005,6,14,Math.PI),n);f.position.set(0,-.058,.07),f.rotation.set(0,Math.PI/2,Math.PI),e.add(f);var p=new Ve(On("stock",.062,.1,.27,.02),r);p.position.set(0,-.055,.24),p.rotation.x=-.14,e.add(p);var v=new Ve(On("cap",.066,.104,.02,.006),t);return v.position.set(0,-.075,.37),v.rotation.x=-.14,e.add(v),i||(e.userData.pumpHand=_a(u,-.005,-.045,.01,.1),_a(e,.01,-.08,.1,.4)),e}function j0(){var i=new yt,e=K0(),t=Z0(),n=new Ve(On("slide",.042,.04,.18,.01),e);n.position.set(0,.02,-.07),i.add(n),i.userData.slide=n;for(var r=0;r<3;r++){var s=new Ve(it("coil",function(){return new hi(.024,.005,6,16)}),Qt(12085306,{metalness:.9,roughness:.3}));s.position.set(0,0,-.02-r*.03),n.add(s)}var a=new Ve(On("frame",.036,.03,.15,.008),t);a.position.set(0,-.012,-.055),i.add(a);var o=new Ve(it("oct",function(){return new Nr(1,0)}),xn(9433343,2.2));o.scale.set(.014,.014,.03),o.position.set(0,.02,-.175),i.add(o);var c=new Ve(On("pgrip",.036,.11,.05,.012),X0());c.position.set(0,-.07,.01),c.rotation.x=.28,i.add(c);var u=new Ve(On("pom",.04,.014,.054,.005),e);u.position.set(0,-.123,.026),u.rotation.x=.28,i.add(u);var l=new Ve(new hi(.018,.004,6,14,Math.PI),t);l.position.set(0,-.03,-.035),l.rotation.set(0,Math.PI/2,Math.PI),i.add(l);var h=new Ve(On("sight",.006,.01,.01,.002),xn(9433343,1.5));return h.position.set(0,.046,-.14),i.add(h),_a(i,0,-.07,.04,.3),i}function $0(){var i=new yt,e=new Ve(On("fist",.1,.085,.11,.03),xu());i.add(e);var t=new Ve(On("knuck",.105,.04,.03,.012),Qt(5917242,{metalness:.7,roughness:.35}));t.position.set(0,.02,-.06),i.add(t);var n=new Ve(On("thumb",.03,.03,.06,.012),xu());n.position.set(-.05,-.01,-.02),i.add(n);var r=new Ve(it("cyl",vi),Y0());return r.scale.set(.05,.3,.05),r.rotation.x=Math.PI/2,r.position.set(0,-.01,.2),i.add(r),i}var ri=3e3;function Wf(i,e){var t;if(typeof document!="undefined"){var n=document.createElement("canvas");n.width=n.height=i,e(n.getContext("2d"),i),t=new Pr(n)}else t=new hn;return t.colorSpace=Jt,t.magFilter=jt,t}var TM=Wf(32,function(i,e){var t=i.createRadialGradient(e/2,e/2,1,e/2,e/2,e/2);t.addColorStop(0,"rgba(0,0,0,1)"),t.addColorStop(.28,"rgba(10,8,6,0.95)"),t.addColorStop(.55,"rgba(30,24,18,0.55)"),t.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=t,i.fillRect(0,0,e,e),i.strokeStyle="rgba(190,175,150,0.55)",i.lineWidth=1.5,i.beginPath(),i.arc(e/2,e/2,e*.2,0,6.28),i.stroke();for(var n=0;n<9;n++){var r=Math.random()*6.28,s=5+Math.random()*6;i.fillStyle=n%3?"rgba(20,16,12,0.7)":"rgba(200,185,160,0.6)",i.fillRect(e/2+Math.cos(r)*s,e/2+Math.sin(r)*s,2,2)}}),EM=Wf(32,function(i,e){var t=i.createRadialGradient(e/2,e/2,1,e/2,e/2,e/2);t.addColorStop(0,"rgba(18,16,15,0.85)"),t.addColorStop(.6,"rgba(30,27,25,0.5)"),t.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=t,i.fillRect(0,0,e,e);for(var n=0;n<14;n++){var r=Math.random()*6.28,s=4+Math.random()*11;i.fillStyle=n%4?"rgba(70,64,60,0.8)":"rgba(150,140,130,0.7)",i.fillRect(e/2+Math.cos(r)*s,e/2+Math.sin(r)*s,2,2)}}),Q0=Wf(64,function(i,e){i.translate(e/2,e/2);for(var t=0;t<8;t++){var n=t%2?e*.22:e*.48;i.rotate(Math.PI/4);var r=i.createLinearGradient(0,0,n,0);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.4,"rgba(230,230,230,0.85)"),r.addColorStop(1,"rgba(160,160,160,0)"),i.fillStyle=r,i.beginPath(),i.moveTo(0,-e*.05),i.lineTo(n,0),i.lineTo(0,e*.05),i.fill()}var s=i.createRadialGradient(0,0,0,0,0,e*.2);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(1,"rgba(200,200,200,0)"),i.fillStyle=s,i.beginPath(),i.arc(0,0,e*.2,0,6.28),i.fill()});function em(i){var e=new Float32Array(ri*3),t=new Float32Array(ri*3),n=new Float32Array(ri),r=new Float32Array(ri),s=new Float32Array(ri*3),a=new Float32Array(ri),o=new Float32Array(ri),c=new Float32Array(ri),u=new Float32Array(ri),l=new Float32Array(ri*3),h=new Uint8Array(ri),f=new Yt;f.setAttribute("position",new Wt(e,3).setUsage(vr)),f.setAttribute("color",new Wt(t,3).setUsage(vr)),f.setAttribute("size",new Wt(n,1).setUsage(vr)),f.setAttribute("alpha",new Wt(r,1).setUsage(vr));var p=new nn({uniforms:{scale:{value:600}},vertexShader:["attribute float size; attribute float alpha; attribute vec3 color; varying vec3 vC; varying float vA;","uniform float scale;","void main(){ vC = color; vA = alpha; vec4 mv = modelViewMatrix * vec4(position,1.0);"," gl_PointSize = size * scale / -mv.z; gl_Position = projectionMatrix * mv; }"].join(`
`),fragmentShader:["varying vec3 vC; varying float vA;","void main(){ vec2 d = gl_PointCoord - 0.5; float r = dot(d,d); if (r > 0.25) discard;"," float k = smoothstep(0.25, 0.0, r); gl_FragColor = vec4(vC * k * vA, k * vA); }"].join(`
`),transparent:!0,depthWrite:!1,blending:di}),v=new hr(f,p);v.frustumCulled=!1,i.add(v);var _=0,g=0;function m(X,ye,qe,me,he,Ae,te,ne,fe,He,W,tt){var Te=_;_=(_+1)%ri,g=Math.min(ri,g+1),e[Te*3]=X,e[Te*3+1]=ye,e[Te*3+2]=qe,s[Te*3]=me,s[Te*3+1]=he,s[Te*3+2]=Ae,l[Te*3]=te[0],l[Te*3+1]=te[1],l[Te*3+2]=te[2],n[Te]=ne,a[Te]=o[Te]=fe,c[Te]=He||0,u[Te]=W||0,h[Te]=tt?0:1}function x(X){return(Math.random()-.5)*2*X}for(var E=[],M=0;M<6;M++){var w=new Vn(16755285,0,6,1.6);w.userData={t:0,max:0,peak:0},i.add(w),E.push(w)}var A=0;function P(X,ye,qe,me,he,Ae,te){var ne=E[A];A=(A+1)%E.length,ne.position.set(X,ye,qe),ne.color.setHex(me),ne.distance=te||6,ne.userData.t=ne.userData.max=Ae,ne.userData.peak=he}var y=new jn(1,1),S=[],L=0,U=180,D=new gn({map:TM,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),Y=new gn({map:EM,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});function G(X,ye,qe,me,he,Ae,te,ne){var fe=S[L];fe||(fe=new Ve(y,ne),fe.renderOrder=1,i.add(fe),S[L]=fe),fe.material=ne,fe.position.set(X+me*.004,ye+he*.004,qe+Ae*.004),fe.lookAt(X+me,ye+he,qe+Ae),fe.rotateZ(Math.random()*6.28),fe.scale.setScalar(te),fe.visible=!0,L=(L+1)%U}function C(X){if(X.surface==="floor")return[0,1,0];if(X.surface==="ceil")return[0,-1,0];var ye=X.x-Math.round(X.x),qe=X.z-Math.round(X.z);return Math.abs(ye)<Math.abs(qe)?[X.dx>0?-1:1,0,0]:[0,0,X.dz>0?-1:1]}for(var N=new gn({color:14219519,transparent:!0,opacity:.9,blending:di,depthWrite:!1}),I=new an(.012,.012,1),q=[],V=0,J=0;J<24;J++){var re=new Ve(I,N.clone());re.visible=!1,re.userData.t=0,i.add(re),q.push(re)}function Se(X){var ye=X.x2-X.x,qe=X.y2-X.y,me=X.z2-X.z,he=Math.sqrt(ye*ye+qe*qe+me*me);if(!(he<1)){var Ae=Math.min(.9,he*.2),te=Math.min(he-Ae,2.5+Math.random()*2),ne=Ae+Math.random()*Math.max(0,he-Ae-te),fe=q[V];V=(V+1)%q.length;var He=ye/he,W=qe/he,tt=me/he,Te=ne+te/2;fe.position.set(X.x+He*Te,X.y-.08+W*Te,X.z+tt*Te),fe.lookAt(X.x+He*(Te+1),X.y-.08+W*(Te+1),X.z+tt*(Te+1)),fe.scale.set(1,1,te),fe.visible=!0,fe.userData.t=.05,fe.material.opacity=.9}}var Ue=new Gi(.012,.012,.04,6),ut=new Gi(.02,.02,.07,8),et=new $t({color:13146688,metalness:.9,roughness:.3}),Je=new $t({color:10118184,metalness:.8,roughness:.35}),de=[],_e=0,De=[];function We(X){var ye=de[_e];ye||(ye=new Ve(Ue,et),i.add(ye),de[_e]=ye);var qe=X.weapon==="shotgun";ye.geometry=qe?ut:Ue,ye.material=qe?Je:et;var me=-Math.sin(X.ang),he=Math.cos(X.ang);ye.position.set(X.x+Math.cos(X.ang)*.25+me*.12,X.y,X.z+Math.sin(X.ang)*.25+he*.12),ye.userData={vx:me*(1.4+Math.random())+Math.cos(X.ang)*.3,vy:1.6+Math.random()*.8,vz:he*(1.4+Math.random())+Math.sin(X.ang)*.3,spin:10+Math.random()*10,life:6,bounced:0},ye.visible=!0,_e=(_e+1)%30}var ze={blood:function(X){for(var ye=X.kill?18:10,qe=0;qe<ye;qe++)m(X.x,X.y,X.z,-X.dx*(1.2+Math.random()*1.6)+x(1.2),x(1)+1,-X.dz*(1.2+Math.random()*1.6)+x(1.2),[.16,.14,.13],.05+Math.random()*.05,.7,6);for(var me=0;me<6;me++)m(X.x,X.y,X.z,-X.dx*2+x(2),x(1.5)+.8,-X.dz*2+x(2),[1.8,.12,.22],.025,.25,7);for(var he=0;he<(X.kill?10:3);he++)m(X.x+x(.1),X.y,X.z+x(.1),x(.3),.6+Math.random()*.8,x(.3),[1.8,1.6,1.1],.035,.8,-.6);P(X.x,X.y,X.z,16722490,X.kill?1.6:.8,.06,2),X.floorY!==void 0&&(X.kill||Math.random()<.35)&&G(X.x-X.dx*.5+x(.3),X.floorY+.002,X.z-X.dz*.5+x(.3),0,1,0,X.kill?.8:.45,Y)},spark:function(X){for(var ye=0;ye<12;ye++)m(X.x,X.y,X.z,x(3),x(3)+1,x(3),[1.4,1.1,.5],.025,.35,8);P(X.x,X.y,X.z,10484991,2,.1,3)},puff:function(X){var ye=C(X),qe=X.cell===3||X.cell===4||X.cell===6||X.cell===7||X.cell===8;G(X.x,X.y,X.z,ye[0],ye[1],ye[2],.09+Math.random()*.04,D);for(var me=qe?12:5,he=0;he<me;he++)m(X.x,X.y,X.z,ye[0]*2+x(2),ye[1]*2+x(1.5)+1,ye[2]*2+x(2),[1.8,1.2,.5],.018,.2+Math.random()*.15,7);for(var Ae=qe?[.3,.3,.32]:[.36,.3,.24],te=0;te<(qe?3:7);te++)m(X.x,X.y,X.z,ye[0]*.6+x(.3),ye[1]*.6+x(.3)+.2,ye[2]*.6+x(.3),Ae,.1,.6+Math.random()*.4,-.2,.35);qe&&P(X.x+ye[0]*.1,X.y+ye[1]*.1,X.z+ye[2]*.1,16760944,1.2,.05,2)},tracer:function(X){Se(X)},casing:function(X){X.delay?De.push({t:X.delay,e:X}):We(X)},muzzle:function(X){var ye=X.weapon==="shotgun";P(X.x,X.y,X.z,ye?16760928:10479871,ye?7:4,.07,ye?9:6);for(var qe=0;qe<(ye?8:3);qe++)m(X.x,X.y+.05,X.z,x(.15),.25+Math.random()*.3,x(.15),[.2,.19,.18],.06,.9+Math.random()*.5,-.3,.12)},fireBurst:function(X){for(var ye=0;ye<22;ye++)m(X.x,X.y,X.z,x(2),x(2)+.5,x(2),ye%3?[1.8,.14,.24]:[2,1.2,1.1],.06,.35,2,-.1);P(X.x,X.y,X.z,16722490,4,.25,5)},greenBurst:function(X){for(var ye=0;ye<22;ye++)m(X.x,X.y,X.z,x(2),x(2)+.5,x(2),[.3,1.6,1.8],.06,.35,2,-.1);P(X.x,X.y,X.z,6287615,4,.25,5)},explosion:function(X){for(var ye=0;ye<90;ye++){var qe=Math.random()<.5;m(X.x,X.y,X.z,x(4),x(3)+2,x(4),qe?[2,1.3,1.1]:[1.7,.1,.2],.12+Math.random()*.1,.5+Math.random()*.4,3,.4)}for(var me=0;me<30;me++)m(X.x,X.y+.3,X.z,x(1),Math.random()*1.5,x(1),[.18,.15,.13],.35,1.4,-.5,.6);P(X.x,X.y+.5,X.z,16726600,14,.5,9)},gib:function(X){for(var ye=0;ye<30;ye++)m(X.x+x(.2),X.y,X.z+x(.2),x(1.6),Math.random()*2,x(1.6),[.15,.13,.12],.07+Math.random()*.06,1.1,5,.2);if(X.kind!=="riley"){for(var qe=0;qe<28;qe++)m(X.x+x(.25),X.y-.2+Math.random()*.5,X.z+x(.25),x(.25),1.2+Math.random()*1.6,x(.25),qe%5?[1.5,1.3,.9]:[.5,1.3,1.6],.03+Math.random()*.025,1.2+Math.random()*.6,-.8);P(X.x,X.y+.4,X.z,16773320,2,.4,4)}if(X.kind==="riley")for(var me=0;me<60;me++)m(X.x,X.y+Math.random(),X.z,x(1),Math.random()*1.5,x(1),[.3,1.5,1.7],.04,1.4,-.4)},summon:function(X){for(var ye=0;ye<50;ye++)m(X.x+x(.4),X.y,X.z+x(.4),x(.5),Math.random()*2.5,x(.5),[1.8,.12,.22],.07,.8,-1);P(X.x,X.y+.5,X.z,16722490,6,.6,6)},pickup:function(X){for(var ye=0;ye<16;ye++)m(X.x,X.y,X.z,x(1),Math.random()*1.5,x(1),[1.4,1.2,.5],.03,.5,-1)}},ht={points:v,stats:function(){return{decals:S.filter(function(X){return X&&X.visible}).length,tracers:q.filter(function(X){return X.visible}).length,casings:de.filter(function(X){return X&&X.visible}).length}},event:function(X){ze[X.name]&&ze[X.name](X)},trail:function(X,ye,qe,me){m(X,ye,qe,x(.2),x(.2),x(.2),me?[.3,1.4,1.6]:[1.8,.12,.22],.07,.3,0,-.15)},ember:function(X,ye,qe){m(X+x(.05),ye,qe+x(.05),x(.15),.4+Math.random()*.4,x(.15),[1.6,.6,.1],.02,1.1,-.2)},update:function(X,ye,qe){q.forEach(function(te){te.visible&&(te.userData.t-=X,te.material.opacity=Math.max(0,te.userData.t/.05)*.9,te.userData.t<=0&&(te.visible=!1))});for(var me=De.length-1;me>=0;me--)(De[me].t-=X)<=0&&(We(De[me].e),De.splice(me,1));de.forEach(function(te){if(!(!te||!te.visible)){var ne=te.userData;if(ne.life-=X,ne.life<=0){te.visible=!1;return}ne.vy-=9*X,te.position.x+=ne.vx*X,te.position.y+=ne.vy*X,te.position.z+=ne.vz*X,te.rotation.x+=ne.spin*X,te.rotation.z+=ne.spin*.7*X;var fe=qe?qe(te.position.x,te.position.z):0;te.position.y<fe+.012&&(te.position.y=fe+.012,ne.vy<-.5&&ne.bounced<3?(ne.vy=-ne.vy*.35,ne.vx*=.5,ne.vz*=.5,ne.spin*=.5,ne.bounced++,ht.onTink&&ht.onTink(te.position)):(ne.vy=0,ne.vx*=.8,ne.vz*=.8,ne.spin*=.8,te.rotation.x=Math.PI/2))}}),p.uniforms.scale.value=ye;for(var he=0;he<g;he++){if(a[he]<=0){r[he]=0;continue}a[he]-=X,s[he*3+1]-=c[he]*X,e[he*3]+=s[he*3]*X,e[he*3+1]+=s[he*3+1]*X,e[he*3+2]+=s[he*3+2]*X;var Ae=Math.max(0,a[he]/o[he]);r[he]=h[he]?Ae:1,n[he]=Math.max(.005,n[he]+u[he]*X),t[he*3]=l[he*3],t[he*3+1]=l[he*3+1]*(.5+.5*Ae),t[he*3+2]=l[he*3+2]*Ae}f.attributes.position.needsUpdate=f.attributes.color.needsUpdate=f.attributes.size.needsUpdate=f.attributes.alpha.needsUpdate=!0,f.setDrawRange(0,g),E.forEach(function(te){var ne=te.userData;ne.t>0?(ne.t-=X,te.intensity=ne.peak*Math.max(0,ne.t/ne.max)):te.intensity=0})}};return ht}var tm={fog:3020297,fogDensity:.026,sky:16757370,ground:2757644,hemi:.85,embers:.6,ash:.8,lift:[.016,.006,.003],warm:[1.06,.98,.88],vig:[.22,.08,.03]},wM={E1M1:{ceil:"ceilVault",embers:.55,ash:1},E1M2:{fog:3805702,sky:16751194,ground:3149834,embers:1,ash:.45,floor:"tech",ceil:"ceilHell",lift:[.024,.006,.002],warm:[1.09,.96,.84],vig:[.28,.06,.02]},E1M3:{fog:2756108,sky:14191220,ground:2099722,hemi:.75,embers:.75,ash:.7,floor:"basalt",ceil:"ceilVault",lift:[.02,.004,.004],warm:[1.05,.97,.9],vig:[.24,.05,.04]},E1M4:{fog:3416346,fogDensity:.02,sky:16765600,ground:2759186,hemi:1,embers:.85,ash:.35,floor:"star",ceil:"ceilVault",lift:[.016,.01,.006],warm:[1.07,1,.86],vig:[.22,.12,.05]}};function nm(i){var e=String(i.name||"").split(":")[0],t={};for(var n in tm)t[n]=tm[n];var r=wM[e]||{};for(var s in r)t[s]=r[s];return t}var xi=18,Oo=7;function im(i,e){for(var t=520,n=new Float32Array(t*3),r=new Float32Array(t*3),s=new Float32Array(t),a=new Float32Array(t),o=new Float32Array(t),c=new Uint8Array(t),u=(function(){var m=987654;return function(){return m=m*1103515245+12345&2147483647,m/2147483647}})(),l=0;l<t;l++)if(c[l]=u()<.55*e.embers/(e.embers+e.ash*.6)?1:0,n[l*3]=u()*xi,n[l*3+1]=u()*Oo,n[l*3+2]=u()*xi,o[l]=u()*100,c[l]){var h=u();r[l*3]=1,r[l*3+1]=.35+h*.4,r[l*3+2]=.05+h*.12,s[l]=.018+u()*.02}else{var f=.25+u()*.2;r[l*3]=f*1.05,r[l*3+1]=f,r[l*3+2]=f*.95,s[l]=.025+u()*.03}var p=new Yt,v=new Float32Array(t*3);p.setAttribute("position",new Wt(v,3).setUsage(vr)),p.setAttribute("color",new Wt(r,3)),p.setAttribute("size",new Wt(s,1)),p.setAttribute("alpha",new Wt(a,1).setUsage(vr));var _=new nn({uniforms:{scale:{value:600}},vertexShader:["attribute float size; attribute float alpha; attribute vec3 color; varying vec3 vC; varying float vA;","uniform float scale;","void main(){ vC = color; vA = alpha; vec4 mv = modelViewMatrix * vec4(position,1.0);"," gl_PointSize = max(1.5, size * scale / -mv.z); gl_Position = projectionMatrix * mv; }"].join(`
`),fragmentShader:["varying vec3 vC; varying float vA;","void main(){ vec2 d = gl_PointCoord - 0.5; float r = dot(d,d); if (r > 0.25) discard;"," float k = smoothstep(0.25, 0.02, r); gl_FragColor = vec4(vC * k * vA, k * vA); }"].join(`
`),transparent:!0,depthWrite:!1,blending:di}),g=new hr(p,_);return g.frustumCulled=!1,g.renderOrder=2,i.add(g),{setScale:function(m){_.uniforms.scale.value=m},update:function(m,x){for(var E=m.x-xi/2,M=m.z-xi/2,w=m.y-2,A=0;A<t;A++){var P=o[A],y=A*3,S,L,U,D;c[A]?(L=n[y+1]+x*(.35+P%1*.4),S=n[y]+Math.sin(x*.9+P)*.35+x*.05,U=n[y+2]+Math.cos(x*.7+P*1.3)*.35,D=(.55+.45*Math.sin(x*(3+P%4)+P))*e.embers*1.4):(L=n[y+1]-x*(.12+P%1*.12),S=n[y]+Math.sin(x*.4+P)*.6,U=n[y+2]+Math.sin(x*.33+P*.7)*.6,D=.5*e.ash),S=((S-E)%xi+xi)%xi,U=((U-M)%xi+xi)%xi,L=((L-w)%Oo+Oo)%Oo;var Y=Math.min(S,xi-S),G=Math.min(U,xi-U),C=Math.min(L,Oo-L);D*=Math.min(1,Y/2)*Math.min(1,G/2)*Math.min(1,C/1.2),v[y]=E+S,v[y+1]=w+L,v[y+2]=M+U,a[A]=Math.max(0,D)}p.attributes.position.needsUpdate=!0,p.attributes.alpha.needsUpdate=!0}}}function rm(i){var e=new ma({uniforms:{tDiffuse:{value:null},uLift:{value:new j().fromArray(i.lift)},uWarm:{value:new j().fromArray(i.warm)},uVig:{value:new j().fromArray(i.vig)},uAspect:{value:1.6},uTime:{value:0},uHurt:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:["uniform sampler2D tDiffuse; uniform vec3 uLift; uniform vec3 uWarm; uniform vec3 uVig;","uniform float uAspect; uniform float uTime; uniform float uHurt; varying vec2 vUv;","float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }","void main(){","  vec4 src = texture2D(tDiffuse, vUv); vec3 c = src.rgb;","  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));","  c += uLift * (1.0 - smoothstep(0.0, 0.18, l));","  float sat = max(c.r, max(c.g, c.b)) - min(c.r, min(c.g, c.b));","  float warmK = smoothstep(0.05, 0.9, l) * (1.0 - clamp(sat * 1.6, 0.0, 0.8));","  c *= mix(vec3(1.0), uWarm, warmK);","  vec2 d = vUv - 0.5; d.x *= uAspect;","  float v = smoothstep(0.95, 0.32, length(d));","  c = mix(c * uVig * 2.2, c, v);","  c = mix(c, vec3(0.6, 0.02, 0.01), uHurt * (1.0 - v) * 0.6);","  c += (hash(vUv * 731.0 + fract(uTime * 7.0)) - 0.5) * 0.011 * (1.0 - smoothstep(0.0, 0.5, l));","  gl_FragColor = vec4(max(c, 0.0), src.a);","}"].join(`
`)});return e.setMood=function(t){e.uniforms.uLift.value.fromArray(t.lift),e.uniforms.uWarm.value.fromArray(t.warm),e.uniforms.uVig.value.fromArray(t.vig)},e}function sm(i,e){e=e||{};var t=new Jc({canvas:i,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!e.preserve}),n={scale:1,bloom:!0,shake:!0,weapon:!0},r=78;function s(){return Math.min(window.devicePixelRatio||1,1.5)*n.scale}t.setPixelRatio(s()),t.toneMapping=hs,t.toneMappingExposure=1.45;var a=new fa(t),o=a.fromScene(new iu,.04).texture;t.outputColorSpace=Jt,t.shadowMap.enabled=!1,t.info.autoReset=!1;var c=new cn(78,16/9,.03,60);c.rotation.order="YXZ";var u=null,l=null,h=null,f=null,p=null,v=null,_=null,g=new Map,m=[],x=new Map,E=[],M=new Ir,w=new cn(60,16/9,.01,5),A=new Vn(16756848,0,3,1.5),P=new cs(16767152,1.2);P.position.set(-1,2,1),M.add(new na(16777215,.35),new ea(16769216,2103312,.8),A,P),M.environment=o,M.environmentIntensity=.6;var y=Gf(),S=new yt,L={};M.add(S);var U={fist:{p:[.14,-.15,-.3],ry:0},pistol:{p:[.15,-.14,-.38],ry:.06},shotgun:{p:[.1,-.13,-.2],ry:.04},chaingun:{p:[.12,-.15,-.22],ry:.04},rocket:{p:[.13,-.16,-.2],ry:.04}},D={fist:$0,pistol:j0,shotgun:Vf};function Y(){Object.keys(L).forEach(function(me){S.remove(L[me])}),L={},Object.keys(U).forEach(function(me){var he=y.model(me),Ae;if(he&&!G(he,me)&&(he=null),he){Ae=new yt;var te=xs(he);Ae.add(te.obj),te.obj.rotation.y=Math.PI,te.obj.updateMatrixWorld(!0);var ne=new Nn().setFromObject(te.obj,!0),fe=ne.max.z-ne.min.z;Ae.userData.authoredLength=fe;var He={fist:.2,pistol:.24,shotgun:.85,chaingun:.8,rocket:.9};fe>.001&&He[me]&&te.obj.scale.multiplyScalar(He[me]/fe),["pump","slide","barrels","tube"].forEach(function(tt){var Te=te.obj.getObjectByName(tt);Te&&(Ae.userData[tt]=Te)}),Ae.userData.authored=!0,J0(Ae,me)}else if(D[me])Ae=D[me]();else return;var W=U[me];Ae.position.set(W.p[0],W.p[1],W.p[2]),Ae.rotation.y=W.ry,Ae.userData.baseZ=W.p[2],Ae.visible=!1,S.add(Ae),L[me]=Ae})}function G(me,he){var Ae=new Nn().setFromObject(me.scene,!0),te=Ae.getSize(new j);if(!(me.meta&&(me.meta.view==="first-person"||me.meta.firstPerson)))return!1;var ne=te.z>=te.x&&te.z>=te.y*1.2&&te.z>.08&&te.z<1.6,fe=!1;return me.scene.traverse(function(He){(/arm|hand|sleeve|glove/i.test(He.name||"")||He.material&&/skin|sleeve|glove|hand/i.test(He.material.name||""))&&(fe=!0)}),!ne&&typeof console!="undefined"&&console.info("[assets] "+he+" is not a first-person gun shape ("+te.x.toFixed(2)+" x "+te.y.toFixed(2)+" x "+te.z.toFixed(2)+" m); using the built-in one"),ne&&!fe}Y();function C(me,he){me&&(me.userData.z0===void 0&&(me.userData.z0=me.position.z),me.position.z=me.userData.z0+he)}var N=new yt,I=new gn({map:Q0,transparent:!0,blending:di,depthWrite:!1,side:wn}),q=new Ve(new jn(1,1),I),V=new Ve(new jn(1,.6),I);V.rotation.y=Math.PI/2,V.position.z=-.25,N.add(q,V),N.scale.setScalar(.035);var J={pitch:0,vel:0,fov:0,roll:0,lastFire:1};M.add(N);var re=0,Se={x:0,y:0},Ue=0,ut=0,et=null,Je={w:1,h:1,top:0};function de(me){et=me,u=new Ir;var he=nm(me.L);u.background=new nt(he.fog),u.fog=new za(he.fog,he.fogDensity),u.environment=o,u.environmentIntensity=.25,u.add(new ea(he.sky,he.ground,he.hemi)),u.add(new na(5913644,.5)),v=I0(me,y,he),u.add(v.group),_=em(u),p=im(u,he),_.onTink=function(ne){e.onSound&&e.onSound("casingTink",ne)},g.clear(),x.clear(),m=[],me.ents.forEach(function(ne){if(ne.kind==="torch"){var fe=W0(ne,y);u.add(fe.obj),g.set(ne,fe);var He=new Vn(16747066,2.2,7.5,1.4);He.position.set(ne.x,ne.y+1,ne.z),He.userData.e=ne,u.add(He),m.push(He)}}),E=(me.L.lights||[]).map(function(ne){var fe=new Vn(ne.color||16777215,ne.intensity||2,ne.dist||10,1.3);return fe.position.set(ne.x,ne.y||1.5,ne.z),fe.userData=ne,u.add(fe),fe});var Ae=me.L.darkZones||[];function te(ne){return Ae.some(function(fe){return ne.x>=fe[0]&&ne.x<=fe[2]+1&&ne.z>=fe[1]&&ne.z<=fe[3]+1})}De(me).forEach(function(ne){if(!te(ne)){var fe=new Vn(16764832,1.8+ne.size*.025,5+Math.sqrt(ne.size)*1.8,1);fe.position.set(ne.x,ne.y,ne.z),u.add(fe);var He=y.model("lamp");if(He){var W=xs(He);W.obj.scale.setScalar(.5),W.obj.position.set(ne.x,ne.y+.4,ne.z),u.add(W.obj);return}var tt=new yt,Te=new Ve(new an(.5,.05,.5),new $t({color:0,emissive:16770752,emissiveIntensity:1.1})),O=new Ve(new an(.58,.1,.58),new $t({color:2762790,metalness:.8,roughness:.4,wireframe:!0}));tt.add(Te,O),tt.position.set(ne.x,ne.y+.35,ne.z),u.add(tt)}}),l=new eu(t),l.addPass(new tu(u,c)),h=new ga(new ot(256,256),.95,.6,.78),h.enabled=n.bloom,l.addPass(h),f=rm(he),l.addPass(f),l.addPass(new nu),We(i.clientWidth,i.clientHeight)}function _e(me,he,Ae,te){var ne=Math.floor(Ae)*me.mw+Math.floor(he);return me.cells[ne]===0?me.ceil[ne]:te}function De(me){for(var he=me.W,Ae=new Uint8Array(he.mw*he.mh),te=[],ne=0;ne<he.cells.length;ne++)if(!(Ae[ne]||he.cells[ne]!==0)){var fe=[ne],He=0,W=0,tt=0,Te=0;for(Ae[ne]=1;fe.length;){var O=fe.pop(),T=O%he.mw,ie=O/he.mw|0;He+=T+.5,W+=ie+.5,tt=Math.max(tt,he.ceil[O]),Te++,[[1,0],[-1,0],[0,1],[0,-1]].forEach(function(le){var ve=T+le[0],k=ie+le[1],B=k*he.mw+ve;ve<0||k<0||ve>=he.mw||k>=he.mh||Ae[B]||he.cells[B]!==0||(Ae[B]=1,fe.push(B))})}Te>=3&&te.push({x:He/Te,z:W/Te,y:_e(he,He/Te,W/Te,tt)-.4,size:Te})}return te}function We(me,he){!me||!he||(t.setSize(me,he,!1),Je={w:me,h:he},c.aspect=me/he,c.updateProjectionMatrix(),w.aspect=me/he,w.updateProjectionMatrix(),l&&(l.setSize(me,he),h.resolution.set(me/2,he/2),f.uniforms.uAspect.value=me/he))}function ze(me,he,Ae){var te=me.p,ne=new Set;me.ents.forEach(function(fe){if(fe.kind==="torch"){g.get(fe).update(he),Math.random()<Ae*6&&_.ember(fe.x,fe.y+1,fe.z),ne.add(fe);return}if(fe.kind==="proj"){var He=x.get(fe);He||(He=new Ve(new as(.09,10,8),new gn({color:fe.green?10484991:16726602})),u.add(He),x.set(fe,He)),He.position.set(fe.x,fe.y,fe.z),_.trail(fe.x,fe.y,fe.z,fe.green),ne.add(fe);return}if(fe.kind!=="part"){var W=g.get(fe);if(!W){if(fe.kind==="pickup")W=V0(fe,y);else if(fe.mob)W=G0(fe,y);else return;u.add(W.obj),g.set(fe,W)}fe.kind==="pickup"?W.update(he):W.update(he,Ae,Math.atan2(te.z-fe.z,te.x-fe.x)),ne.add(fe)}}),g.forEach(function(fe,He){ne.has(He)||(u.remove(fe.obj),g.delete(He))}),x.forEach(function(fe,He){ne.has(He)||(u.remove(fe),x.delete(He))})}function ht(me){var he=et.p;E.forEach(function(Ae,te){var ne=Ae.userData,fe=et.lightsOff&&et.lightsOff[ne.id],He=ne.flicker?(Math.sin(me*23+te)>.6?.15:1)*(.8+Math.random()*.2):1;Ae.intensity=fe?0:(ne.intensity||2)*He}),m.forEach(function(Ae,te){var ne=Ae.userData.e,fe=Math.sin(me*13+te*7)*.12+Math.sin(me*31+te*3)*.08+(Math.random()-.5)*.08,He=(ne.x-he.x)*(ne.x-he.x)+(ne.z-he.z)*(ne.z-he.z)>400;Ae.intensity=He?0:2.2*(1+fe)})}function X(me,he,Ae){var te=me.p,ne=Math.hypot(me.input.vx||0,me.input.vz||0);te.onGround&&ne>.5&&(re+=Ae*ne*2.6);var fe=te.onGround?Math.min(1,ne/4):0,He=Math.atan2(Math.sin(te.ang-Ue),Math.cos(te.ang-Ue)),W=te.pitch-ut;Ue=te.ang,ut=te.pitch,Se.x+=(-He*.6-Se.x)*Math.min(1,Ae*8),Se.y+=(W*.6-Se.y)*Math.min(1,Ae*8),Object.keys(L).forEach(function(F){L[F].visible=F===te.weapon&&!te.dead});var tt=L[te.weapon];if(tt){var Te=te.fireT,O=Te<.12?Math.sin(Te/.12*Math.PI):0,T=te.lowerT>0?1-te.lowerT/.15:te.raiseT>0?te.raiseT/.15:0,ie=me.input.strafe||0,le=ne>4.2;J.roll+=(-ie*.06-J.roll)*Math.min(1,Ae*8);var ve=le?.03:0;if(S.position.set(Math.sin(re)*.014*fe+Se.x*.1,-Math.abs(Math.sin(re))*.012*fe+Math.sin(re*2)*.004*fe+Se.y*.1-T*.25-te.landT*.12-ve,0),S.rotation.set(le?.12:0,le?-.15:0,J.roll),te.weapon==="fist")tt.position.z=tt.userData.baseZ-(Te<.2?Math.sin(Te/.2*Math.PI)*.18:0),tt.rotation.x=Te<.2?-Math.sin(Te/.2*Math.PI)*.3:0;else{tt.rotation.x=O*(te.weapon==="shotgun"?.35:.2),tt.position.z=tt.userData.baseZ+O*.05;var k=Te>.3&&Te<.7?Math.sin((Te-.3)/.4*Math.PI):0;C(tt.userData.pump,k*.09),C(tt.userData.slide,O*.04),tt.userData.barrels&&(tt.userData.barrels.rotation.z+=Ae*(te.fireT<.3?30:0))}var B=Te<.06&&te.weapon!=="fist"&&!te.dead;N.visible=B,N.position.set(tt.position.x,tt.position.y+(te.weapon==="shotgun"?0:.02),tt.position.z-(te.weapon==="shotgun"?.72:.2)),N.scale.setScalar((te.weapon==="shotgun"?.2:.11)*(.8+Math.random()*.45)),q.rotation.z=Math.random()*Math.PI*2,I.color.setHex(te.weapon==="shotgun"?16765562:11071743),A.color.setHex(te.weapon==="shotgun"?16760944:10479871),Te<J.lastFire&&te.weapon!=="fist"&&(J.vel+=te.weapon==="shotgun"?1.6:.55,J.fov=te.weapon==="shotgun"?3:.8),J.lastFire=Te,J.vel-=J.pitch*180*Ae,J.vel*=Math.exp(-Ae*16),J.pitch+=J.vel*Ae,J.fov*=Math.exp(-Ae*10),A.intensity=B?3:0,A.position.copy(N.position)}}function ye(me,he,Ae,te){if(!te)return qe(me,he,Ae);var ne=Math.random,fe=12345;Math.random=function(){return fe=fe*1103515245+12345&2147483647,fe/2147483647};try{return qe(me,he,0)}finally{Math.random=ne}}function qe(me,he,Ae){t.info.reset(),me!==et&&de(me);var te=me.p;v.update(),ze(me,he,Ae),ht(he),me.events.forEach(function(He){He.t==="fx"&&_.event(He)}),_.update(Ae,Je.h*.9,function(He,W){var tt=Math.floor(He),Te=Math.floor(W);return tt>=0&&Te>=0&&tt<me.mw&&Te<me.mh?me.W.floor[Te*me.mw+tt]:0});var ne=n.shake?me.shake*.004:0;c.position.set(te.x+(Math.random()-.5)*ne,te.y+te.eyeH+(Math.random()-.5)*ne,te.z+(Math.random()-.5)*ne),c.rotation.y=-Math.PI/2-te.ang,c.rotation.x=te.pitch+J.pitch,c.rotation.z=te.dead?Math.min(.5,te.deadT*.6):J.roll*.35,p.setScale(Je.h*.9),p.update(c.position,he),f.uniforms.uTime.value=he,f.uniforms.uHurt.value=Math.min(1,(te.dmgFlash||0)*1.5);var fe=r+J.fov;Math.abs(c.fov-fe)>.01&&(c.fov=fe,c.updateProjectionMatrix()),l.render(Ae),t.autoClear=!1,t.clearDepth(),X(me,he,Ae),S.visible=n.weapon,t.render(M,w),t.autoClear=!0}return{setAssets:function(me){y=me,Y(),et=null},setFov:function(me){r=me},setQuality:function(me){for(var he in me)n[he]=me[he];t.setPixelRatio(s()),h&&(h.enabled=n.bloom),We(Je.w,Je.h)},assets:function(){return y},fxStats:function(){return _?_.stats():null},debugModels:function(){var me=[];return g.forEach(function(he){he.debug&&me.push(he.debug())}),me},render:ye,resize:We,renderer:t,camera:c,scene:function(){return u},info:function(){return t.info}}}var am=[[128,64],[143,102],[224,44],[204,106],[232,120],[190,148],[143,150],[144,176],[154,200],[162,230],[128,203]],yu=137,AM=186,RM=am.concat(am.slice(0,-1).reverse().map(function(i){return[256-i[0],i[1]]}));function om(i,e,t,n){i.beginPath(),RM.forEach(function(r,s){var a=e+(r[0]-128)*n,o=t+(r[1]-yu)*n;s?i.lineTo(a,o):i.moveTo(a,o)}),i.closePath()}function zr(i,e,t,n,r,s){s=s||{};var a=n/AM,o=s.glow===void 0?1:s.glow,c=.85+.15*Math.sin(r*7.3)*Math.sin(r*3.1);if(i.save(),i.globalAlpha=s.alpha===void 0?1:s.alpha,s.backdrop){var u=i.createRadialGradient(e,t,n*.2,e,t,n*.95);u.addColorStop(0,"rgba(24,8,3,"+(.7*s.backdrop).toFixed(3)+")"),u.addColorStop(1,"rgba(24,8,3,0)"),i.fillStyle=u,i.fillRect(e-n,t-n,n*2,n*2)}if(o>0){var l=i.createRadialGradient(e,t,n*.05,e,t,n*.75);l.addColorStop(0,"rgba(255,140,40,"+(.32*o*c).toFixed(3)+")"),l.addColorStop(.5,"rgba(160,50,10,"+(.16*o).toFixed(3)+")"),l.addColorStop(1,"rgba(40,10,4,0)"),i.fillStyle=l,i.fillRect(e-n,t-n,n*2,n*2)}var h=t-(yu-44)*a,f=t+(230-yu)*a,p=i.createLinearGradient(0,h,0,f);p.addColorStop(0,"#ffe07a"),p.addColorStop(.35,"#ffb43a"),p.addColorStop(.75,"#ff7a18"),p.addColorStop(1,"#d04a0c"),i.shadowColor="rgba(255,120,30,"+(.9*Math.min(1,o)).toFixed(3)+")",i.shadowBlur=n*.09*o*c,om(i,e,t,a),i.fillStyle=p,i.fill(),i.shadowBlur=0,i.save(),om(i,e,t,a),i.clip();var v=i.createLinearGradient(e-104*a,0,e+104*a,0);v.addColorStop(0,"rgba(150,36,4,0.55)"),v.addColorStop(.36,"rgba(200,70,10,0.12)"),v.addColorStop(.5,"rgba(255,230,140,0.12)"),v.addColorStop(.64,"rgba(200,70,10,0.12)"),v.addColorStop(1,"rgba(150,36,4,0.55)"),i.fillStyle=v,i.fillRect(e-110*a,h,220*a,f-h),i.restore(),i.fillStyle="#fff6e0";var _=Math.max(1,6*a);i.fillRect(Math.round(e-_/2),Math.round(t-(yu-84)*a-_/2),Math.ceil(_),Math.ceil(_)),i.restore()}function Xf(i,e,t,n,r){i.save(),i.globalAlpha=r===void 0?1:r,i.strokeStyle="#ff7a18",i.lineWidth=1;var s=6,a=n+.5,o=n+.5,c=e-n-.5,u=t-n-.5;i.beginPath(),i.moveTo(a+s,o),i.lineTo(c-s,o),i.quadraticCurveTo(c,o,c,o+s),i.lineTo(c,u-s),i.quadraticCurveTo(c,u,c-s,u),i.lineTo(a+s,u),i.quadraticCurveTo(a,u,a,u-s),i.lineTo(a,o+s),i.quadraticCurveTo(a,o,a+s,o),i.stroke(),i.restore()}function Uo(i,e,t,n,r,s){for(var a=0;a<r;a++){var o=10+a*37%23,c=a*97.13%e,u=(t+20)/o,l=(n+a*1.7)%u/u,h=t+6-l*(t+20),f=c+Math.sin(n*1.3+a)*6,p=(s===void 0?1:s)*Math.sin(l*Math.PI);i.fillStyle=a%5===0?"rgba(255,224,122,"+p.toFixed(3)+")":"rgba(255,"+(90+a*13%60)+",20,"+(p*.85).toFixed(3)+")",i.fillRect(Math.round(f),Math.round(h),a%7===0?2:1,a%7===0?2:1)}}function Fo(i,e,t,n,r,s){var a=s.scale||1,o=5*a,c={scale:a,center:s.center,right:s.right};i.drawText(e,t,n+a,r+a,Object.assign({},c,{color:"#2a0c04"})),i.drawText(e,t,n,r,Object.assign({},c,{color:"#ffc040"})),e.save(),e.beginPath(),e.rect(0,r+3*a,4096,o),e.clip(),i.drawText(e,t,n,r,Object.assign({},c,{color:"#ff6a12"})),e.restore()}var Ot=320,lm=200,Ht=168,Yf=32,Kf=Ht/2,ya="#e03828",Mu="#c8a070",Zf="#401008";function CM(i,e){var t=String(i).split(" "),n=[],r="";return t.forEach(function(s){var a=r?r+" "+s:s;a.length>e&&r?(n.push(r),r=s):r=a}),r&&n.push(r),n}function Gr(i){i=i|0;var e=i/60|0,t=i%60;return e+":"+(t<10?"0":"")+t}function cm(i,e,t){function n(m,x){return m.time*(x||3)%1<.55}function r(m,x,E){return E?n(m,3)?"#ffffff":ya:x?"#ff9a28":ya}function s(m){return m.dead?Be.default.faces.dead:m.grinT>0?Be.default.faces.grin:m.painT>.25?Be.default.faces.pain:m.hp>=80?Be.default.faces.ok:m.hp>=55?Be.default.faces.hurt1:m.hp>=30?Be.default.faces.hurt2:Be.default.faces.hurt3}function a(m){var x=m.p,E=i.createLinearGradient(0,Ht,0,lm);E.addColorStop(0,"#3a2416"),E.addColorStop(1,"#1e120c"),i.fillStyle=E,i.fillRect(0,Ht,Ot,Yf),i.fillStyle="#ff7a18",i.fillRect(0,Ht,Ot,1),i.fillStyle="#7a3e14",i.fillRect(0,Ht+1,Ot,1),i.fillStyle="#120a06",i.fillRect(0,Ht+2,Ot,1),[46,116,142,178,230,250].forEach(function(y){i.fillStyle="#120a06",i.fillRect(y,Ht+5,1,Yf-9),i.fillStyle="#6a4220",i.fillRect(y+1,Ht+5,1,Yf-9)});var M=wa[x.weapon],w=M.ammo?x.ammo[M.ammo]:-1,A=M.ammo&&w<=(M.ammo==="shells"?4:10);Be.default.drawText(i,"AMMO",8,Ht+5,{color:w===0?ya:Mu}),Be.default.drawText(i,M.ammo?String(w):"--",40,Ht+12,{scale:3,color:r(m,A,w===0),shadow:Zf,right:!0});var P=x.hp<=25;Be.default.drawText(i,"HEALTH",54,Ht+5,{color:P?ya:Mu}),Be.default.drawText(i,x.hp+"%",108,Ht+12,{scale:3,color:r(m,x.hp<=50,P&&!x.dead),shadow:Zf,right:!0}),Be.default.drawText(i,"ARMS",129,Ht+5,{color:Mu,center:!0}),er.forEach(function(y,S){var L=119+S*8,U=x.weapons[y],D=(x.nextWeapon||x.weapon)===y,Y=D?"#ffd23e":U?e.hasAmmo(x,y)?"#d8c8a8":"#6a5a4a":"#3a2618";Be.default.drawText(i,String(S+1),L,Ht+13,{scale:2,color:Y}),D&&(i.fillStyle="#ffd23e",i.fillRect(L,Ht+25,6,1))}),i.drawImage(s(x).canvas,148,Ht+3),Be.default.drawText(i,"ARMOR",184,Ht+5,{color:Mu}),Be.default.drawText(i,x.armor+"%",226,Ht+12,{scale:3,color:x.armor>0?ya:"#6a4a40",shadow:Zf,right:!0}),[["red","keyRed",5],["blue","keyBlue",18]].forEach(function(y){!x.keys[y[0]]&&!m.info.keys[y[0]]||(i.globalAlpha=x.keys[y[0]]?1:.18,i.drawImage(Be.default.things[y[1]].canvas,236,Ht+y[2]),i.globalAlpha=1)}),Be.default.drawText(i,"SPRK "+x.ammo.bullets+"/200",254,Ht+8,{color:M.ammo==="bullets"?"#ffd23e":"#d8c8a8"}),Be.default.drawText(i,"BELL "+x.ammo.shells+"/50",254,Ht+19,{color:x.weapons.shotgun?M.ammo==="shells"?"#ffd23e":"#d8c8a8":"#6a5040"})}function o(m){var x=Ot/2,E=Kf;if(t.crosshair){var M=e.aimTarget();i.fillStyle=M?M.barrel?"#ff9a28":"#ff4a2a":"rgba(232,224,200,0.8)",i.fillRect(x-5,E,3,1),i.fillRect(x+3,E,3,1),i.fillRect(x,E-5,1,3),i.fillRect(x,E+3,1,3)}var w=m.killT>0?"#ff3a1a":m.blockT>0?"#9aa4a8":m.hitT>0?"#ffffff":null;if(w){i.fillStyle=w;for(var A=m.killT>0?4:3,P=A;P<A+3;P++)i.fillRect(x-P,E-P,1,1),i.fillRect(x+P,E-P,1,1),i.fillRect(x-P,E+P,1,1),i.fillRect(x+P,E+P,1,1)}}function c(m){var x=m.p,E=Ot/2,M=Kf,w=34;m.hurtDirs.forEach(function(A){var P=A.ang-x.ang,y=Math.sin(P),S=-Math.cos(P),L=E+y*w,U=M+S*w;i.fillStyle="rgba(255,40,16,"+Math.min(.9,A.t).toFixed(3)+")",i.beginPath(),i.moveTo(L+y*9,U+S*9),i.lineTo(L-S*7,U+y*7),i.lineTo(L+S*7,U-y*7),i.closePath(),i.fill()})}function u(){var m=e.usePrompt();if(m){var x=Kf+14;if(m.verb){var E=Be.default.textWidth(m.verb,1),M=13+E,w=(Ot-M)/2|0;i.fillStyle="rgba(0,0,0,0.55)",i.fillRect(w-3,x-3,M+6,13),i.fillStyle="#e8e0c8",i.fillRect(w,x-1,9,9),i.fillStyle="#14110d",i.fillRect(w+1,x,7,7),Be.default.drawText(i,"E",w+3,x+1,{color:"#ffd23e"}),Be.default.drawText(i,m.verb,w+13,x+1,{color:m.color,shadow:!0})}else{var A=Be.default.textWidth(m.text,1);i.fillStyle="rgba(0,0,0,0.55)",i.fillRect((Ot-A)/2-4,x-3,A+8,13),Be.default.drawText(i,m.text,Ot/2,x+1,{color:m.color,shadow:!0,center:!0})}}}function l(m,x){if(!(!t.goalMarker||!x)){var E=e.goalTarget();if(E){var M=m.p,w=Math.hypot(E.x-M.x,E.z-M.z);if(!(w<1.6)){var A={x:E.x,y:E.y,z:E.z},P=IM(x,A),y=m.time*2%1<.7?"#ffd23e":"#c89a20";if(i.fillStyle=y,i.beginPath(),P.inFront&&P.x>8&&P.x<Ot-8&&P.y>8&&P.y<Ht-8){var S=Math.round(P.x),L=Math.round(P.y)-8;i.moveTo(S,L-4),i.lineTo(S+4,L),i.lineTo(S,L+4),i.lineTo(S-4,L),i.closePath(),i.fill(),Be.default.drawText(i,String(Math.round(w*2))+"M",S,L+7,{color:y,shadow:!0,center:!0})}else{var U=Math.atan2(E.z-M.z,E.x-M.x)-M.ang;U=Math.atan2(Math.sin(U),Math.cos(U));var D=U>0,Y=D?Ot-6:6,G=40;i.moveTo(Y+(D?4:-4),G),i.lineTo(Y-(D?3:-3),G-5),i.lineTo(Y-(D?3:-3),G+5),i.closePath(),i.fill(),Be.default.drawText(i,"GOAL",D?Ot-12:12,G-2,{color:y,shadow:!0,right:D})}}}}}function h(m){var x=m.p;if(!(x.dead||x.hp>25))for(var E=.18+.14*Math.sin(m.time*5),M=0;M<6;M++)i.fillStyle="rgba(200,0,0,"+(E*(1-M/6)).toFixed(3)+")",i.fillRect(M*2,0,2,Ht),i.fillRect(Ot-M*2-2,0,2,Ht),i.fillRect(0,M*2,Ot,2),i.fillRect(0,Ht-M*2-2,Ot,2)}var f={imp:["A HOLLOW BURNED YOU DOWN.","TIP: STRAFE WITH A AND D TO SIDESTEP ITS EMBERS."],gnasher:["A HOLLOW HOUND RAN YOU DOWN.","TIP: BACK AWAY WHILE YOU SHOOT, OR JUMP UP WHERE IT CAN'T FOLLOW."],knight:["THE RESET WARDEN CRUSHED YOU.","TIP: KEEP YOUR DISTANCE AND BRING BELL CHARGES."],riley:["RILEY OUTPLAYED YOU.","TIP: WHEN HER VISOR FLASHES WHITE, SHE IS ABOUT TO SHOOT. MOVE!"],barrel:["A MERCURY CASK BURST IN YOUR FACE.","TIP: SHOOT CASKS FROM FAR AWAY, WHEN HOLLOWS ARE NEAR THEM."]};function p(m){var x=m.p;if(!(!x.dead||x.deadT<1)){var E=f[m.killer]||["YOU WERE OVERWHELMED.","TIP: FIGHT FROM HIGH GROUND SO HOLLOWS COME TO YOU ONE AT A TIME."];i.fillStyle="rgba(12,4,2,0.6)",i.fillRect(0,44,Ot,72),zr(i,Ot/2,132,26,m.time,{glow:.5+.3*Math.sin(m.time*3),alpha:Math.min(.9,(x.deadT-1)*2)}),Be.default.drawText(i,"KNOCKED DOWN",Ot/2,50,{scale:3,color:ya,shadow:!0,center:!0}),Be.default.drawText(i,E[0],Ot/2,72,{color:"#e8e0c8",shadow:!0,center:!0}),Be.default.drawText(i,E[1],Ot/2,84,{color:"#8fe0a0",shadow:!0,center:!0}),x.deadT>1.2&&m.time%1<.7&&Be.default.drawText(i,"IT ONLY BURNS BRIGHTER. CLICK OR PRESS ENTER TO RISE",Ot/2,100,{color:"#f0d848",shadow:!0,center:!0})}}function v(m){var x=4;m.msgs.forEach(function(M){var w=CM(M.text,78);M.t<.4&&(i.globalAlpha=Math.max(0,M.t/.4)),w.forEach(function(A){Be.default.drawText(i,A,4,x,{color:M.color||"#f0d848",shadow:!0}),x+=7}),i.globalAlpha=1,x+=1});var E=m.notice;E&&(i.globalAlpha=Math.min(1,E.t/.4),Be.default.drawText(i,E.text,Ot/2,50,{scale:2,color:E.color,shadow:!0,center:!0}),i.globalAlpha=1)}function _(m){var x=m.boss;if(!(!x||x.state==="idle"||x.state==="dead")){var E=140,M=(Ot-E)/2,w=Ht-12,A=x.shieldT>0;Be.default.drawText(i,A?"RILEY - SHIELDED":"RILEY",Ot/2,w-8,{color:A?"#ffd23e":"#6fe0ec",shadow:!0,center:!0}),i.fillStyle="#06141c",i.fillRect(M-1,w-1,E+2,6),i.fillStyle=A?"#ffd23e":"#3fd8c8",i.fillRect(M,w,Math.max(0,x.hp/x.maxHp)*E,4),i.fillStyle="#06141c",i.fillRect(M+E*.33,w,1,4),i.fillRect(M+E*.66,w,1,4)}}function g(m){i.fillStyle="rgba(0,0,0,0.8)",i.fillRect(0,0,Ot,Ht);for(var x=22,E=Ht-14,M=Math.min((Ot-16)/m.mw,(E-x)/m.mh),w=(Ot-m.mw*M)/2,A=x+(E-x-m.mh*M)/2,P=m.time*2%1<.6,y=0;y<m.mh;y++)for(var S=0;S<m.mw;S++){var L=y*m.mw+S,U=m.W.cells[L];if(m.seen[L]){var D=null;if(U===0){var Y=m.W.floor[L];D="rgb("+(40+Y*50|0)+","+(34+Y*40|0)+","+(28+Y*30|0)+")"}else U===6?D="#c8a030":U===11?D=m.doors[S+","+y].found?"#c8a030":"#6a655c":U===7?D="#ff3a2a":U===8?D="#4a7aff":U===9||U===10?D=P||U===10?"#58e068":"#1e5a26":D="#8a8478";i.fillStyle=D,i.fillRect(w+S*M,A+y*M,Math.max(1,M-.4),Math.max(1,M-.4))}}var G=e.goalTarget();if(G&&P){var C=w+G.x*M,N=A+G.z*M;i.fillStyle="#ffd23e",i.fillRect(C-3,N-3,7,1),i.fillRect(C-3,N+3,7,1),i.fillRect(C-3,N-3,1,7),i.fillRect(C+3,N-3,1,7)}var I=m.p,q=w+I.x*M,V=A+I.z*M,J=Math.cos(I.ang),re=Math.sin(I.ang);i.fillStyle="#f8f4e0",i.beginPath(),i.moveTo(q+J*5,V+re*5),i.lineTo(q-J*3-re*3,V-re*3+J*3),i.lineTo(q-J*3+re*3,V-re*3-J*3),i.closePath(),i.fill(),Be.default.drawText(i,m.L.name,6,4,{color:"#ff9a28",shadow:!0}),Be.default.drawText(i,"TAB: CLOSE",Ot-6,4,{color:"#8a8478",right:!0}),Be.default.drawText(i,"GOAL: "+e.objective(),6,12,{color:"#f0d848",shadow:!0});var Se=m.stats;Be.default.drawText(i,"FREED "+Se.kills+"/"+Se.totalKills+"  ITEMS "+Se.items+"/"+Se.totalItems+"  SECRETS "+Se.secrets+"/"+Se.totalSecrets+"  TIME "+Gr(m.time),Ot-6,12,{color:"#c8c0b0",right:!0}),Be.default.drawText(i,"BRIGHTER FLOOR = HIGHER GROUND",6,Ht-9,{color:"#a8a090"})}return{draw:function(m,x){i.clearRect(0,0,Ot,lm);var E=m.p;E.dmgFlash>0&&(i.fillStyle="rgba(255,20,10,"+(E.dmgFlash*.8).toFixed(3)+")",i.fillRect(0,0,Ot,Ht)),E.bonusFlash>0&&(i.fillStyle="rgba(255,220,80,"+(E.bonusFlash*.7).toFixed(3)+")",i.fillRect(0,0,Ot,Ht)),h(m),x.map?g(m):!E.dead&&!x.menu&&(c(m),l(m,x.camera),o(m),u()),x.map||_(m),v(m),p(m),a(m)}}}function IM(i,e){var t=i.matrixWorldInverse.elements,n=i.projectionMatrix.elements,r=e.x,s=e.y,a=e.z,o=t[0]*r+t[4]*s+t[8]*a+t[12],c=t[1]*r+t[5]*s+t[9]*a+t[13],u=t[2]*r+t[6]*s+t[10]*a+t[14],l=n[0]*o+n[4]*c+n[8]*u+n[12],h=n[1]*o+n[5]*c+n[9]*u+n[13],f=n[3]*o+n[7]*c+n[11]*u+n[15];return f<=.01?{inFront:!1}:{inFront:!0,x:(l/f*.5+.5)*Ot,y:(1-(h/f*.5+.5))*Ht}}var xm=Ta(Ou(),1),Rn=ed.default.SETTINGS,St=ed.default.MENU,It=Rn.v;It.invertY===void 0&&(It.invertY=!1);It.fov===void 0&&(It.fov=78);var xt=320,on=200,_m=168,ym=document.getElementById("view"),_i=document.getElementById("hud");_i.width=xt;_i.height=on;var Ie=_i.getContext("2d");Ie.imageSmoothingEnabled=!1;var zo=/debug/.test(location.search),vt=Bu({levels:bi,rng:Hu(zo?+(/seed=(\d+)/.exec(location.search)||[])[1]||1:(Date.now()&4294967295)>>>0),storage:(function(){try{return window.localStorage}catch{return null}})(),settings:It,saveSettings:function(){Rn.save()},onProgress:function(i,e){Rn.unlock(Math.min(i+1,bi.length-1)),PM=Rn.record?Rn.record(i,e):null}}),PM=null,si=sm(ym,{preserve:zo,onSound:function(i,e){var t=vt.state();if(!(!t||Xn!=="game")){var n=e.x-t.p.x,r=e.z-t.p.z;Sn.default.play(i,Math.sqrt(n*n+r*r),Math.sin(Math.atan2(r,n)-t.p.ang)*.7)}}}),LM=cm(Ie,vt,It),Xn="title",Oi=0,$i=!1,Ma=!1,Fi=!1,Go=!1;function Vo(){return tr[It.difficulty]||tr[1]}function bu(){Sn.default.setVolume(It.volume/10),si.setFov(It.fov),si.setQuality({scale:It.quality||1,bloom:It.bloom!==!1,shake:It.shake!==!1})}function Mm(){var i=window.innerWidth,e=window.innerHeight,t=Math.min(i,e*1.6),n=t/1.6,r=(i-t)/2,s=(e-n)/2;_i.style.cssText="left:"+r+"px;top:"+s+"px;width:"+t+"px;height:"+n+"px";var a=Math.round(n*_m/on);ym.style.cssText="left:"+r+"px;top:"+s+"px;width:"+t+"px;height:"+a+"px",si.resize(Math.round(t),a)}window.addEventListener("resize",Mm);Mm();var wu=vt.keys,Xo=!1;function Sm(){for(var i in wu)wu[i]=!1;Xo=!1,vt.setFire(!1)}document.addEventListener("keydown",function(i){if((["Tab","Space"].indexOf(i.code)>=0||i.code.slice(0,5)==="Arrow")&&i.preventDefault(),Sn.default.init(),!!Ru){if(St.isOpen()){Sn.default.startMusic(),St.key(i.code);return}if(!i.repeat){if(i.code==="Enter"||i.code==="NumpadEnter"){Au();return}if(Xn!=="game"){i.code==="Space"&&Au();return}if(i.code==="Escape"&&$i&&!Fi){Em();return}wu[i.code]=!0;var e=vt.state();if(i.code==="Tab"&&(Ma=!Ma,e.usedMap=!0),i.code==="KeyM"){var t=Sn.default.toggleMusic();e.msgs.push({text:"MUSIC "+(t?"ON":"OFF"),t:2})}(i.code==="ControlLeft"||i.code==="ControlRight")&&(Xo=!0,vt.setFire(!0)),i.code==="Digit1"&&vt.switchWeapon("fist"),i.code==="Digit2"&&vt.switchWeapon("pistol"),i.code==="Digit3"&&vt.switchWeapon("shotgun"),i.code==="KeyQ"&&vt.quickSwitch()}}});document.addEventListener("keyup",function(i){wu[i.code]=!1,(i.code==="ControlLeft"||i.code==="ControlRight")&&(Xo=!1,vt.setFire(!1))});window.addEventListener("blur",Sm);document.addEventListener("pointerlockchange",function(){Fi=document.pointerLockElement===_i,Sm(),Fi?(Go=!1,Xn==="game"&&St.close(),!$i&&Xn==="game"&&DM()):Xn==="game"&&$i&&Em()});document.addEventListener("pointerlockerror",function(){Go=!0});function Wo(){try{var i=_i.requestPointerLock({unadjustedMovement:!0});i&&i.catch&&i.catch(function(){try{_i.requestPointerLock()}catch{Go=!0}})}catch{Go=!0}}function NM(){try{document.exitPointerLock()}catch{}}function bm(i){var e=_i.getBoundingClientRect();return{x:(i.clientX-e.left)/e.width*xt,y:(i.clientY-e.top)/e.height*on}}document.addEventListener("mousemove",function(i){var e=vt.state();if(Fi&&Xn==="game"&&e&&!e.p.dead){var t=44e-5*It.sens;e.p.ang+=i.movementX*t,e.p.pitch-=i.movementY*t*(It.invertY?-1:1),e.p.pitch=Math.max(-1.3,Math.min(1.3,e.p.pitch));return}if(St.isOpen()){var n=bm(i);_i.style.cursor=St.pointer(n.x,n.y)?"pointer":"default"}});_i.addEventListener("mousedown",function(i){if(Sn.default.init(),Sn.default.startMusic(),St.isOpen()){var e=bm(i);i.button===0&&St.click(e.x,e.y);return}if(Xn==="game"){var t=vt.state();if(!Fi){St.close(),Wo();return}if(t.p.dead){Au();return}i.button===0&&(Xo=!0,vt.setFire(!0)),i.button===2&&(vt.keys.Space=!0);return}Au()});document.addEventListener("mouseup",function(i){i.button===0&&(Xo=!1,vt.setFire(!1)),i.button===2&&(vt.keys.Space=!1)});_i.addEventListener("contextmenu",function(i){i.preventDefault()});_i.addEventListener("wheel",function(i){Xn==="game"&&Fi&&(i.preventDefault(),i.deltaY&&vt.cycleWeapon(i.deltaY>0?1:-1))},{passive:!1});var Tu=!1;function DM(){$i=!0}function Tm(i){vt.startLevel(i,!1),$i=!1,Ma=!1,Xn="game",St.close(),Wo()}function Au(){Sn.default.init(),Sn.default.startMusic();var i=vt.mode();if(i==="inter"){if(!Tu&&Oi<1.3){Tu=!0;return}Tu=!1,vt.onEnter(),vt.onEnter(),vt.mode()==="game"&&($i=Fi)}else if(i==="victory")Oi>1&&td();else if(i==="game"){var e=vt.state();e.p.dead?e.p.deadT>1.2&&(vt.retryLevel(),$i=Fi):Fi||(St.close(),Wo())}}function td(){vt.setMode("title"),Xn="title",St.open(rd()),NM()}function Em(){Ma=!1,St.open(GM()),Sn.default.play("menu")}function Jf(i,e,t){for(var n=0;n<xt;n+=2){var r=Math.sin(n*.07+e*3+t)+Math.sin(n*.13-e*2.2),s=6+r*4;Ie.fillStyle=r>.7?"#ffd23e":r>-.3?"#ff7a18":"#a83010",Ie.fillRect(n,i-s,2,s+4)}}var um=Bu({levels:bi,rng:Hu(7),storage:null,settings:{difficulty:1,tips:!1,seenTips:{}}}),OM={0:{x:19.5,z:9.4,y:2,ang:-1.6,pitch:.1,sway:.1},1:{x:17.5,z:26.6,y:2,ang:-Math.PI/2,pitch:-.2,sway:.18},2:{x:17.5,z:33.3,y:1.5,ang:-Math.PI/2,pitch:-.12,sway:.2},3:null},jf=-1,ys=null;function wm(i){if(i!==jf){jf=i,um.startLevel(i,!1),ys=um.state();var e=OM[i],t=ys.p;e&&(t.x=e.x,t.z=e.z,t.y=e.y),t.baseAng=e?e.ang:t.ang,t.basePitch=e?e.pitch:.05,t.sway=e?e.sway:.3,ys.msgs.length=0,ys.notice=null}}function UM(i){var e=ys.p;e.ang=e.baseAng+Math.sin(i*.11)*e.sway,e.pitch=e.basePitch+Math.sin(i*.17)*.04}var Eu=158;function Yo(i,e){Ie.fillStyle="rgba(6,4,3,0.84)",Ie.fillRect(0,0,Eu,on);for(var t=0;t<40;t++)Ie.fillStyle="rgba(6,4,3,"+(.84*(1-t/40)).toFixed(3)+")",Ie.fillRect(Eu+t,0,1,on);Ie.fillStyle="#ff7a18",Ie.fillRect(Eu-1,0,1,on),Ie.fillStyle="rgba(0,0,0,0.35)",Ie.fillRect(0,on-14,xt,14)}function FM(i,e){Fo(Be.default,Ie,"FIREBIRD",i,e,{scale:3}),Be.default.drawText(Ie,"3D",i+98,e-2,{scale:4,color:"#ffd23e",shadow:"#803008"}),Be.default.drawText(Ie,"EPISODE ONE: KNEE-DEEP IN THE ASHES",i,e+21,{color:"#c8a070"})}function Cu(i,e){Be.default.drawText(Ie,i,14,e||14,{scale:2,color:"#ff9a28",shadow:"#401008"}),Ie.fillStyle="#5e2a10",Ie.fillRect(14,(e||14)+13,Eu-28,1)}function nd(i,e){var t=String(i).split(" "),n=[],r="";return t.forEach(function(s){var a=r?r+" "+s:s;a.length>e&&r?(n.push(r),r=s):r=a}),r&&n.push(r),n}function id(i){var e=St.selected(),t=e&&(typeof e.info=="function"?e.info():e.info);t&&nd(t,33).forEach(function(n,r){Be.default.drawText(Ie,n,14,(i||150)+r*8,{color:"#a8a090"})})}function Ko(i){Be.default.drawText(Ie,i||"ARROWS / MOUSE: CHOOSE   ENTER: SELECT   ESC: BACK",14,on-10,{color:"#6a655c"})}function $f(i,e,t,n,r){var s=Be.default.textWidth(t,1)+6;return Ie.fillStyle=n?r||"#ffd23e":"#2e2a24",Ie.fillRect(i,e,s,9),Ie.fillStyle=n?"#1a0e06":"#14110d",Ie.fillRect(i+1,e+1,s-2,7),Be.default.drawText(Ie,t,i+3,e+2,{color:n?r||"#ffd23e":"#4a463c"}),s+3}function Vr(i){return i?"ON":"OFF"}var hm={alignLeft:!0,x0:20,x1:138,footer:""};function Zo(i){var e={};for(var t in hm)e[t]=hm[t];for(var n in i)e[n]=i[n];return e}var fm=(function(){try{return xm.default.recall(window.localStorage)}catch{return{fights:0,wins:0}}})();function BM(){return fm.fights?fm.wins?"WELCOME BACK. I'VE BEEN PRACTISING SINCE YOU BEAT ME.":"WELCOME BACK. I STILL REMEMBER HOW YOU FIGHT.":"HI! I'M RILEY. COME FIND ME AT THE TOP OF E1M1."}function Am(i,e){var t=Math.min(1,e/1.2);zr(Ie,236,76,112,e,{glow:.4+.8*t,backdrop:1}),Uo(Ie,xt,on,e,46,.9),Yo(i,e),FM(14,16),Be.default.drawText(Ie,"A NIX GAMES PRODUCTION BY PHOENIX",14,on-24,{color:"#7a6450"});var n=nd("RILEY: "+BM(),34);Ie.fillStyle="rgba(6,3,2,0.6)",Ie.fillRect(170,146,144,n.length*8+6),n.forEach(function(r,s){Be.default.drawText(Ie,r,174,150+s*8,{color:"#6fe0ec",shadow:!0})}),Xf(Ie,xt,on,1,.9)}var HM={E1M1:"RILEY TEACHES YOU THE ROPES ON THE WAY UP, THEN SPARS WITH YOU IN HER ARENA.",E1M2:"DRAIN THE OVERSEERS' FURNACE, TAKE THE RED KEYSTONE, AND SURVIVE THE FORGE.",E1M3:"THE RESET WARDEN GUARDS THE ENGINE THAT IS BURYING ASHGATE. SHUT IT DOWN.",E1M4:"RILEY'S TRIAL. SHE REMEMBERS HOW YOU FOUGHT, AND THIS TIME SHE IS NOT HOLDING BACK."};function rd(){var i=Rn.progress;return Zo({drawBg:Am,scale:2,top:62,gap:14,drawExtra:function(){id(136),Ko()},items:function(){var e=[];return i.unlocked>0&&e.push({label:"CONTINUE",action:function(){Tm(i.unlocked)},info:function(){return bi[i.unlocked].name+" ON "+Vo().name+"."}}),e.push({label:"NEW GAME",action:function(){St.push(Rm(0))},info:"START THE EPISODE FROM THE BEGINNING."},{label:"LEVELS",action:function(){St.push(kM())},info:"PICK A LEVEL, SEE YOUR BEST TIMES AND MEDALS."},{label:"OPTIONS",action:function(){St.push(sd(0))},info:"CONTROLS, VIDEO, AUDIO AND GAMEPLAY."},{label:"CONTROLS",action:function(){St.push(Cm())},info:"EVERY KEY, ON ONE PAGE."}),e}})}function Rm(i){var e=tr.map(function(t,n){return{label:t.name,info:t.desc,action:function(){It.difficulty=n,Rn.save(),Tm(i)}}});return e.push({label:"BACK",action:function(){St.back()}}),Zo({drawBg:Yo,scale:2,top:46,gap:16,sel:It.difficulty,items:e,drawExtra:function(){Cu("DIFFICULTY"),id(118),Be.default.drawText(Ie,bi[i].name,14,32,{color:"#c8c0b0"}),Ko()}})}function kM(){var i=bi.map(function(t,n){var r=n<=Rn.progress.unlocked,s=t.name.split(":")[0];return{label:r?t.name.replace(": ","  "):s+"  LOCKED",level:n,disabled:function(){return!r},action:function(){St.push(Rm(n))}}});i.push({label:"BACK",action:function(){St.back()}});var e=Math.min(Rn.progress.unlocked,bi.length-1);return Zo({drawBg:Yo,scale:1,top:40,gap:13,sel:e,items:i,drawExtra:function(){Cu("LEVELS");var t=St.selected(),n=t&&t.level!==void 0?t.level:jf;t&&t.level!==void 0&&wm(n),qM(n),Ko()}})}function qM(i){var e=bi[i],t=e.name.split(":")[0],n=e.name.split(": ")[1]||e.name,r=i<=Rn.progress.unlocked,s=Rn.best?Rn.best(i):null,a=172,o=nd(HM[t]||"",34),c=58+o.length*8,u=166-c;Ie.fillStyle="rgba(6,4,3,0.72)",Ie.fillRect(a-6,u-6,xt-a,c),Ie.fillStyle="#ff7a18",Ie.fillRect(a-6,u-6,1,c),Be.default.drawText(Ie,t+(e.heights?"   REBUILT IN 3D":"   CLASSIC LAYOUT"),a,u,{color:e.heights?"#8fe0a0":"#8a8478"}),Be.default.drawText(Ie,n,a,u+9,{scale:2,color:"#ff9a28",shadow:"#401008"}),o.forEach(function(p,v){Be.default.drawText(Ie,p,a,u+25+v*8,{color:"#c8c0b0"})});var l=vt.levelInfo(e),h=u+28+o.length*8;l.boss&&$f(a,h-1,"BOSS: RILEY",!0,"#6fe0ec"),Be.default.drawText(Ie,"PAR "+Gr(e.par)+(s&&s.time!==null?"   BEST "+Gr(s.time):""),l.boss?a+60:a,h+1,{color:"#a8a090"});var f=a;(Rn.MEDALS||["PAR","KILLS","ITEMS","SECRETS"]).forEach(function(p){f+=$f(f,h+12,p==="KILLS"?"FREED":p,!!(s&&s.medals&&s.medals[p]))}),r||(Ie.fillStyle="rgba(0,0,0,0.55)",Ie.fillRect(a-5,u-5,xt-a-1,c-2),Be.default.drawText(Ie,"LOCKED",a+60,u+22,{scale:2,color:"#ff9a28",shadow:!0}),Be.default.drawText(Ie,"FINISH THE LEVEL BEFORE IT",a+30,u+42,{color:"#a8a090"}))}var Su=["CONTROLS","VIDEO","AUDIO","GAMEPLAY"],dm={sens:5,invertY:!1,fov:78,quality:1,bloom:!0,shake:!0,fps:!1,volume:7,crosshair:!0,goalMarker:!0,tips:!0,difficulty:1};function sd(i){function e(a,o,c,u){return function(l){var h=+(It[a]+l*(u||1)).toFixed(2);It[a]=h>c?o:h<o?c:h,Rn.save(),bu()}}function t(a){return function(){It[a]=!It[a],Rn.save(),bu()}}var n={label:"SECTION",value:function(){return Su[i]},adjust:function(a){St.replace(sd((i+a+Su.length)%Su.length))},info:"LEFT AND RIGHT TO SWITCH BETWEEN CONTROLS, VIDEO, AUDIO AND GAMEPLAY."},r=[[{label:"MOUSE SPEED",slider:[0,10,function(){return It.sens}],adjust:e("sens",1,10),info:"HOW FAST THE VIEW TURNS."},{label:"INVERT Y",value:function(){return Vr(It.invertY)},adjust:t("invertY"),info:"PUSH THE MOUSE FORWARD TO LOOK DOWN INSTEAD OF UP."},{label:"FIELD OF VIEW",value:function(){return It.fov},adjust:e("fov",60,110,5),info:"HOW WIDE YOU SEE, IN DEGREES. WIDER SHOWS MORE."}],[{label:"RESOLUTION",value:function(){return Math.round((It.quality||1)*100)+"%"},adjust:e("quality",.5,1,.25),info:"LOWER IS FASTER ON SLOW COMPUTERS, AND CHUNKIER."},{label:"GLOW",value:function(){return Vr(It.bloom!==!1)},adjust:t("bloom"),info:"THE SOFT GLOW AROUND FIRE, RED MERCURY AND LIGHTS."},{label:"SCREEN SHAKE",value:function(){return Vr(It.shake!==!1)},adjust:t("shake"),info:"THE VIEW KICKS ON SHOTS, HITS AND EXPLOSIONS."},{label:"SHOW FPS",value:function(){return Vr(!!It.fps)},adjust:t("fps"),info:"FRAMES PER SECOND, IN THE CORNER."}],[{label:"VOLUME",slider:[0,10,function(){return It.volume}],adjust:e("volume",0,10),info:"LOUDNESS OF EVERYTHING."},{label:"MUSIC",value:function(){return Vr(Sn.default.isMusicOn())},adjust:function(){Sn.default.setMusic(!Sn.default.isMusicOn())},info:"PRESS M DURING PLAY TO TOGGLE IT TOO."}],[{label:"DIFFICULTY",value:function(){return Vo().name},adjust:e("difficulty",0,2),info:function(){return Vo().desc}},{label:"CROSSHAIR",value:function(){return Vr(It.crosshair)},adjust:t("crosshair"),info:"A SMALL AIMING MARK. TURNS RED OVER A HOLLOW."},{label:"GOAL MARKER",value:function(){return Vr(It.goalMarker)},adjust:t("goalMarker"),info:"POINTS AT YOUR GOAL ONCE YOU HAVE SEEN IT."},{label:"TIPS",value:function(){return Vr(It.tips)},adjust:function(){It.tips=!It.tips,It.tips&&(It.seenTips={}),Rn.save()},info:"SHORT HINTS THE FIRST TIME SOMETHING NEW HAPPENS. ON AGAIN SHOWS THEM ALL."},{label:"RESET ALL",action:function(){St.push(Qf("RESET?","EVERY OPTION BACK TO ITS DEFAULT.",function(){for(var a in dm)It[a]=dm[a];Rn.save(),bu(),St.back()}))},info:"EVERY OPTION BACK TO ITS DEFAULT. PROGRESS AND MEDALS ARE KEPT."}]],s=[n].concat(r[i]).concat([{label:"BACK",action:function(){St.back()}}]);return Zo({drawBg:Yo,x1:142,scale:1,top:44,gap:13,items:s,drawExtra:function(){Cu("OPTIONS");var a=14;Su.forEach(function(o,c){a+=$f(a,32,o,c===i)}),id(44+s.length*13+6),Ko("ARROWS / MOUSE: CHOOSE   LEFT / RIGHT: CHANGE   ESC: BACK")}})}var zM=[["MOVE","W A S D  /  ARROWS"],["LOOK AND AIM","MOUSE"],["FIRE","LEFT CLICK  /  CTRL"],["JUMP","SPACE  /  RIGHT CLICK"],["CROUCH","C"],["USE / OPEN","E"],["RUN","HOLD SHIFT"],["WEAPONS","1 2 3  /  WHEEL"],["LAST WEAPON","Q"],["MAP","TAB"],["MUSIC","M"],["PAUSE","ESC"]];function Cm(){return Zo({drawBg:Yo,scale:2,top:172,gap:12,items:[{label:"BACK",action:function(){St.back()}}],drawExtra:function(){Cu("CONTROLS"),zM.forEach(function(i,e){var t=36+e*11;Be.default.drawText(Ie,i[0],14,t,{color:"#c8c0b0"}),Be.default.drawText(Ie,i[1],76,t,{color:"#ffd23e"})}),Ko()}})}function Im(i,e){Ie.fillStyle=Xn==="game"?"rgba(4,3,2,0.8)":"rgba(8,6,4,0.7)",Ie.fillRect(0,0,xt,on),Ie.fillStyle="#5e2a10",Ie.fillRect(40,33,xt-80,1)}function Qf(i,e,t){return{title:i,drawBg:Im,scale:2,top:86,gap:18,sel:1,drawExtra:function(){Be.default.drawText(Ie,e,xt/2,56,{color:"#a8a090",center:!0})},items:[{label:"YES",action:t},{label:"NO",action:function(){St.back()}}]}}function GM(){return{title:"PAUSED",drawBg:Im,scale:2,top:64,gap:14,descY:144,footerY:176,footer:"ARROWS OR MOUSE: CHOOSE   ENTER OR CLICK: SELECT",items:[{label:function(){return vt.state().p.dead?"TRY AGAIN":"RESUME"},action:function(){vt.state().p.dead&&vt.retryLevel(),St.close(),Wo()},desc:"BACK TO THE FIGHT."},{label:"RESTART LEVEL",desc:"START THIS LEVEL OVER WITH THE GEAR YOU BROUGHT IN.",action:function(){St.push(Qf("RESTART?","YOU WILL LOSE PROGRESS IN THIS LEVEL.",function(){vt.retryLevel(),St.close(),Wo()}))}},{label:"OPTIONS",action:function(){St.push(sd())},desc:"MOUSE, VOLUME, FIELD OF VIEW AND MORE."},{label:"CONTROLS",action:function(){St.push(Cm())},desc:"EVERY KEY, ON ONE PAGE."},{label:"QUIT TO TITLE",desc:"YOUR UNLOCKED LEVELS ARE SAVED.",action:function(){St.push(Qf("QUIT?","PROGRESS IN THIS LEVEL WILL BE LOST.",td))}}],drawExtra:function(){var i=vt.state(),e=i.stats;Be.default.drawText(Ie,i.L.name+"   "+Vo().name,xt/2,38,{color:"#c8c0b0",center:!0}),Be.default.drawText(Ie,"GOAL: "+vt.objective(),xt/2,48,{color:"#f0d848",center:!0}),Be.default.drawText(Ie,"FREED "+e.kills+"/"+e.totalKills+"   ITEMS "+e.items+"/"+e.totalItems+"   SECRETS "+e.secrets+"/"+e.totalSecrets+"   TIME "+Gr(i.time),xt/2,160,{color:"#8a8478",center:!0})}}}function VM(i){var e=vt.state(),t=e.L.name.split(": ");Ie.fillStyle="rgba(10,4,2,0.66)",Ie.fillRect(0,0,xt,on),Uo(Ie,xt,on,i,30,.7),zr(Ie,xt/2,166,44,i,{glow:.9,alpha:Math.min(1,i*2)}),Be.default.drawText(Ie,t[0],xt/2,22,{color:"#c8a070",center:!0}),Fo(Be.default,Ie,t[1]||e.L.name,xt/2,32,{scale:3,center:!0}),Be.default.drawText(Ie,"GOAL",xt/2,60,{color:"#8a8478",center:!0}),Be.default.drawText(Ie,vt.objective(),xt/2,69,{scale:2,color:"#f0d848",shadow:!0,center:!0}),Be.default.drawText(Ie,"DIFFICULTY: "+Vo().name+"     PAR "+Gr(e.L.par),xt/2,88,{color:"#a8a090",center:!0}),i%1<.7&&Be.default.drawText(Ie,"CLICK TO BEGIN",xt/2,106,{scale:2,color:"#ffffff",shadow:!0,center:!0}),Go&&Be.default.drawText(Ie,"THE GAME NEEDS THE MOUSE. CLICK THE SCREEN AGAIN.",xt/2,118,{color:"#ff9a28",center:!0}),Be.default.drawText(Ie,"WASD MOVE  MOUSE LOOK  CLICK FIRE  SPACE JUMP  E USE  TAB MAP  ESC PAUSE",xt/2,128,{color:"#8a8478",center:!0}),Xf(Ie,xt,on,1,.8)}function WM(i){var e=vt.interStats();Ie.fillStyle="rgba(12,5,3,0.9)",Ie.fillRect(0,0,xt,on),Uo(Ie,xt,on,i,36,.8),zr(Ie,40,100,50,i,{glow:.8,alpha:.85}),zr(Ie,xt-40,100,50,i+1,{glow:.8,alpha:.85}),Jf(on-6,i,1),Fo(Be.default,Ie,e.name,xt/2,22,{scale:2,center:!0}),Be.default.drawText(Ie,"FINISHED!",xt/2,42,{scale:2,color:"#e8e0c8",shadow:!0,center:!0});var t=Tu?1:Math.min(1,i/1.2);function n(s,a){return a?Math.round(s/a*100*t):100}if([["FREED",e.kills,e.totalKills,70],["ITEMS",e.items,e.totalItems,90],["SECRETS",e.secrets,e.totalSecrets,110]].forEach(function(s){Be.default.drawText(Ie,s[0],90,s[3],{scale:2,color:"#c8c0b0"});var a=n(s[1],s[2]);Be.default.drawText(Ie,a+"%",240,s[3],{scale:2,color:a>=100?"#ffd23e":"#e03828",right:!0})}),Be.default.drawText(Ie,"TIME "+Gr(e.time),90,132,{scale:2,color:e.time<=e.par&&t>=1?"#ffd23e":"#c8c0b0"}),Be.default.drawText(Ie,"PAR "+Gr(e.par),240,132,{scale:2,color:"#c8c0b0",right:!0}),t>=1&&i%1<.7){var r=vt.levelIndex();Be.default.drawText(Ie,r+1<bi.length?"CLICK OR PRESS ENTER FOR "+bi[r+1].name:"CLICK OR PRESS ENTER",xt/2,166,{color:"#f0d848",shadow:!0,center:!0})}}function XM(i){Ie.fillStyle="rgba(12,5,3,0.92)",Ie.fillRect(0,0,xt,on),Uo(Ie,xt,on,i,70,1);var e=Math.min(1,i/2.5),t=1-Math.pow(1-e,3);zr(Ie,xt/2,150-t*50,60+t*70,i,{glow:.6+t*.9,alpha:.35+t*.35}),Jf(on-8,i,0),Jf(on-4,i*1.3,2),Fo(Be.default,Ie,"YOU WIN!",xt/2,30,{scale:4,center:!0}),["THE RESET ENGINE IS SILENT.","ASHGATE'S BELLS RING AGAIN,","AND RILEY TAPS OUT WITH A GRIN:",`"SAME TIME TOMORROW? I'LL BE READY."`,"","EVERY AGE ENDS IN ASH.","THE FIREBIRD IS WHAT RISES FROM IT.","","THANKS FOR PLAYING, WARRIOR."].forEach(function(n,r){Be.default.drawText(Ie,n,xt/2,74+r*10,{color:"#f4ead2",shadow:"#2a0c04",center:!0})}),i>1&&i%1<.7&&Be.default.drawText(Ie,"CLICK OR PRESS ENTER FOR THE TITLE SCREEN",xt/2,170,{color:"#f0d848",shadow:!0,center:!0})}var YM={pistol:"pistol2",shotgun:"shotgun2"};function KM(i){var e=i.p;i.events.forEach(function(t){if(t.t==="sound"){if(t.local){Sn.default.play(YM[t.name]||t.name);return}var n=t.x-e.x,r=t.z-e.z,s=Math.sqrt(n*n+r*r),a=Math.sin(Math.atan2(r,n)-e.ang)*.7;Sn.default.play(t.name,s,a)}})}var Bo=1/60,Ho=0,pm=performance.now(),mm="",ko=[],qo=!1,ZM=10,gm=null;function vm(i){i!==gm&&(gm=i,si.setQuality({weapon:i}))}function Pm(i){var e=Math.min(.1,(i-pm)/1e3);pm=i;var t=vt.mode(),n=Xn==="title"?"title":t;n!==mm&&(Oi=0,mm=n),Oi+=e,ko.push(e),ko.length>240&&ko.shift();var r=vt.state();if(Xn==="title"){var s=i/1e3;ys||wm(1),UM(s),vm(!1),si.render(ys,s,e),Ie.clearRect(0,0,xt,on),Ru?(St.isOpen()||St.open(rd()),St.render(Ie,Oi)):(Am(Ie,Oi),Oi%.8<.55&&Be.default.drawText(Ie,"LOADING...",xt/2,120,{scale:2,color:"#f0d848",shadow:!0,center:!0}))}else if(t==="game"||t==="inter"||t==="victory"){var a=qo||t==="game"&&(!$i||!Fi||St.isOpen())&&!zo;if(!a&&t==="game")for(Ho+=e;Ho>=Bo;){if(r.hitstop>0){r.hitstop-=Bo,Ho-=Bo;continue}if(vt.update(Bo),KM(r),Ho-=Bo,vt.mode()!=="game")break}else Ho=0;if(r=vt.state(),vm(!0),si.render(r,qo?ZM:i/1e3,a?0:e,qo),r.events.length=0,LM.draw(r,{map:Ma,menu:St.isOpen(),camera:si.camera}),It.fps){var o=ko.slice().sort(function(u,l){return u-l}),c=o[o.length>>1]||.016;Be.default.drawText(Ie,Math.round(1/c)+" FPS",xt-4,_m-9,{color:"#8fe0a0",shadow:!0,right:!0})}t==="inter"?WM(Oi):t==="victory"?XM(Oi):$i?St.isOpen()?St.render(Ie,Oi):!Fi&&!zo&&(Ie.fillStyle="rgba(0,0,0,0.5)",Ie.fillRect(0,70,xt,24),Be.default.drawText(Ie,"CLICK TO RESUME",xt/2,76,{scale:2,color:"#f0d848",shadow:!0,center:!0})):VM(Oi)}requestAnimationFrame(Pm)}bu();requestAnimationFrame(Pm);var Ui=null,Ru=!1;function Lm(i){Ru||(Ru=!0,Ui=i||{ready:!0,loaded:[],problems:["timed out; using built-in art"]},Ui.loaded.length&&si.setAssets(Ui),Ui.problems.length&&console.info("[assets] "+Ui.problems.join(" | ")),Ui.loaded.length&&console.info("[assets] using "+Ui.loaded.length+" authored assets"),St.open(rd()))}q0().then(Lm);setTimeout(function(){Lm(null)},6e3);zo&&(window.FIREBIRD2=Object.assign({},vt,{launch:function(i){vt.startLevel(i,!1),$i=!0,Xn="game",St.close()},toTitle:td,setMap:function(i){Ma=i},freeze:function(i){qo=!!i},frozen:function(){return qo},models:function(){return si.debugModels()},fxStats:function(){return si.fxStats()},assets:function(){return Ui?{ready:Ui.ready,loaded:Ui.loaded.slice(),problems:Ui.problems.slice()}:{ready:!1}},frameStats:function(){var i=ko.slice().sort(function(t,n){return t-n});function e(t){return i.length?i[Math.min(i.length-1,Math.floor(i.length*t))]*1e3:0}return{frames:i.length,p50:e(.5),p95:e(.95),p99:e(.99),info:si.info().render}},renderInfo:function(){return si.info()},scene:function(){return si.scene()}}));})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
