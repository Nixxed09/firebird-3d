(()=>{var Tm=Object.create;var td=Object.defineProperty;var bm=Object.getOwnPropertyDescriptor;var Em=Object.getOwnPropertyNames;var Am=Object.getPrototypeOf,wm=Object.prototype.hasOwnProperty;var Sa=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var Rm=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Em(e))!wm.call(i,r)&&r!==t&&td(i,r,{get:()=>e[r],enumerable:!(n=bm(e,r))||n.enumerable});return i};var _s=(i,e,t)=>(t=i!=null?Tm(Am(i)):{},Rm(e||!i||!i.__esModule?td(t,"default",{value:i,enumerable:!0}):t,i));var nd=Sa((FS,Eu)=>{"use strict";var Cm=(function(){function i(B){var G=parseInt(B.slice(1),16),H=G>>16&255,z=G>>8&255,j=G&255;return(4278190080|j<<16|z<<8|H)>>>0}function e(B,G,H){var z=document.createElement("canvas");z.width=B,z.height=G;var j=z.getContext("2d"),de=j.createImageData(B,G);return new Uint32Array(de.data.buffer).set(H),j.putImageData(de,0,0),{w:B,h:G,data:H,canvas:z}}function t(B,G,H){H=H||{};for(var z=!!H.mirror,j=B[0].length,de=0;de<B.length;de++)if(B[de].length!==j)throw new Error("sprite row "+de+" length "+B[de].length+" != "+j);for(var he=z?j*2:j,pe=B.length,Te=new Uint32Array(he*pe),Ie=0;Ie<pe;Ie++)for(var Ze=B[Ie],K=0;K<j;K++){var Ce=G[Ze[K]];if(Ce){var ve=i(Ce);Te[Ie*he+K]=ve,z&&(Te[Ie*he+(he-1-K)]=ve)}}return e(he,pe,Te)}function n(B,G,H){var z=(B|0)*374761393+(G|0)*668265263+(H|0)*974711;return z=(z^z>>13)*1274126177,((z^z>>16)>>>0)%1e3/1e3}function r(B,G,H){var z=parseInt(B.slice(1),16),j=parseInt(G.slice(1),16),de=(z>>16&255)+((j>>16&255)-(z>>16&255))*H,he=(z>>8&255)+((j>>8&255)-(z>>8&255))*H,pe=(z&255)+((j&255)-(z&255))*H;return(4278190080|(pe&255)<<16|(he&255)<<8|de&255)>>>0}var s=64;function a(B){for(var G=new Uint32Array(s*s),H=0;H<s;H++)for(var z=0;z<s;z++)G[H*s+z]=B(z,H);return e(s,s,G)}function o(B,G,H,z){return a(function(j,de){var he=de>>4,pe=he&1?16:0,Te=j+pe>>5,Ie=(de&15)>=14,Ze=(j+pe&31)>=30;if(Ie||Ze)return r(z,"#000000",n(j,de,B)*.4);var K=n(j,de,B)*.5+n(Te*31,he*7,B+9)*.5,Ce=(de&15)<2||(j+pe&31)<2?.25:0;return r(G,H,K*.65+Ce)})}function c(B,G,H){return a(function(z,j){var de=z>>4,he=j>>4,pe=n(de,he,B)*6-3,Te=(z+pe)%16<1.5||(j-pe)%16<1.5,Ie=n(z,j,B+3)*.45+n(de*5,he*3,B+7)*.55;return Te?r(H,"#000000",.5):r(G,H,Ie*.7)})}function u(B,G,H){return a(function(z,j){var de=z>>4&1,he=(z&15)<1||(j&31)<1,pe=((z&15)===3||(z&15)===12)&&((j&31)===4||(j&31)===27),Te=n(z,j,B)*.3+de*.12+j/s*.15;return he?r(H,"#000000",.6):pe?r(G,"#ffffff",.35):r(G,H,Te)})}function l(B){return a(function(G,H){var z="#5a4e3a",j="#2a2418";if(H<6||H>57)return r("#3a3022","#000000",.3+n(G,H,B)*.2);if(H>=28&&H<=33&&(G&31)>3&&(G&31)<28){var de=H===30||H===31?"#bff8ff":"#1a8a98";return r(de,"#000000",n(G,H,B)*.2)}var he=(G&31)<2,pe=H>40&&H<54&&(H&3)<2&&(G&31)>6&&(G&31)<26;return he?r(j,"#000000",.5):pe?r("#1e1a12","#000000",.3):r(z,j,n(G,H,B)*.5)})}function h(B){return a(function(G,H){var z=n(G,H,B)*.4+n(G>>2,H>>2,B+5)*.6,j=Math.sin(G*.22+Math.sin(H*.13+B)*2.1)+Math.sin(H*.18+G*.05);return j>1.45?r("#c0141e","#ff3a2a",n(G,H,B+2)):j>1.2?r("#4a060c","#9a1018",.5):r("#2a2224","#100c0e",z)})}function f(B){return a(function(G,H){var z="#6a5a3a",j="#2e2618",de=Math.abs(G-32)<1,he=(H&15)<2,pe=G<3||G>60||H<3||H>60;if(B&&H>8&&H<20&&!de){var Te=B==="red"?"#d02020":"#2050e0";return r(Te,"#000000",(H===9||H===19?.5:0)+n(G,H,40)*.2)}return de?r("#101216","#000000",.3):pe?r(j,"#000000",.4):he?r(j,z,.3):r(z,j,n(G,H,17)*.4+H/s*.2)})}function p(B){return a(function(G,H){var z="#4f4a42",j="#28241e",de=G>16&&G<48,he=H>14&&H<50;if(de&&he){var pe=G>24&&G<40,Te=B?H>32&&H<46:H>18&&H<32;return pe&&Te?r(B?"#6fe0ec":"#d03030","#000000",n(G,H,3)*.25):r("#1c1a16","#000000",.3)}var Ie=G<2||G>61||H<2||H>61;return Ie?r(j,"#000000",.5):r(z,j,n(G,H,21)*.5)})}function v(B,G,H){return a(function(z,j){var de=(z>>4)+(j>>4)&1,he=(z&15)<1||(j&15)<1,pe=n(z,j,B)*.4;return he?r(H,"#000000",.55):r(de?G:H,"#000000",pe+de*.05)})}var _={o:"#141210",b:"#5e5750",d:"#3a3532",c:"#8a1c18",h:"#e0403a",e:"#ff7a6a",m:"#1a0806",t:"#c8c0b0",x:"#c8c0b0",r:"#c0302a",f:"#ff4a3a",g:"#ffb0a0"};function g(B){return B.map(function(G,H){return H<3?G.replace(/t/g,"."):G})}var m=["......tt........",".......tt.......","........oooooooo","........obbbbbbb","........obbddddd","........obbeedbb","........obbbbbbb","........obdmtmbb","........obbmmbbb","........oooooobb","....oooooooooooo","...obbbbbbdccccc","..obbbo.obdccchc","..obbo..obdcchhc","..obbo..obddcccc",".obbo...obbdcccc",".obbo...obbddccc",".otto...obbbdddd",".ott....obbbbddd","........obbbbbbd","........oobbbbbb",".........obbo...",".........obbo...",".........obbo...",".........obbo...",".........oddo...",".........oddo...","........obddo...","........odddo...","......ottdddo...","......ooooooo...","................"],x=m.slice(0,21).concat(["........obbo....","........obbo....","........obbo....","........obbo....","........oddo....","........oddo....",".......obddo....",".......odddo....",".....ottdddo....",".....oooooo.....","................"]),E=["..gf..tt........",".gffg..tt.......",".offo...oooooooo",".otto...obbbbbbb",".obbo...obbddddd",".obbo...obeeedbb",".obbo...obbbbbbb",".obbo...obmmttbb","..obbo..obbmmbbb","..obbo..oooooobb","..obooooooooooo.","...obbbbbdccccc.","....obbobdccchc.","........obdcchhc","........obddcccc","........obbdcccc","........obbddccc","........obbbdddd","........obbbbddd","........obbbbbbd","........oobbbbbb",".........obbo...",".........obbo...",".........obbo...",".........obbo...",".........oddo...",".........oddo...","........obddo...","........odddo...","......ottdddo...","......ooooooo...","................"],y=m.slice();y[5]="........obbxxdbb",y[7]="........obmmmmbb";var R=["................","................","................","................","................","................","......tt........",".......tt.......","........oooooooo","........obbbbbbb","........obxxdddb","........obmmmmbb",".....oooooooobbb","...obbbbbbdccccb","..obbbboobdcccbb",".obbbo..obddccbb",".otto...obbddddb","........obbbbbdd",".......oobbbbbbb","......obbbbbbbdd","................","................","................","................","................","................","................","................","................","................","................","................"],A=["................","................","................","................","................","................","................","................","................","................","................","................","................","......tt........",".......ttoooooo.","......obbbbbbbbo",".....obbxxddmmbo","....obbbbdddbbbo","...obbddccccbbdd","..obbbbbdddbbbbb","................","................","................","................","................","................","................","................","................","................","................","................"],P=["................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","..........tt....","....oo....ott...","...obbdoooobbdo.","..obbddbbbdddbbo",".orrbdddddbbdrro",".orrrbbdddbrrro.","..orrrrrrrrrro..","...ooooooooooo..","................","................"];function M(B){var G={o:"#141210",p:"#5e5750",q:"#3a3532",k:"#7a726a",t:"#c8c0b0",m:"#1a0806",e:"#ff5a4a",x:"#c8c0b0",r:"#c0302a"};if(B)for(var H in B)G[H]=B[H];return G}var T=["................","................","......oooooooooo",".....opppppppppp","....oppkpppppppp","....opppeepppppp","....oppppppppppp","....opmmmmmmmmmm","....opmtmtmtmtmt","....opmmmmmmmmmm","....optmtmtmtmtm","....opqqqqqqqqqq",".....ooooooooooo","...oppppqqpppppp","..opppppoqpppppp","..opppo.oqpppppp","..oppo..oqqppppp","..otto..oqqqpppp","..ott...oqqqqppp","........oqqqqqpp","........ooqqqqqp",".........oqqqo..",".........oqqqo..",".........oqqo...","........oqqqo...","........ottto...","........ooooo...","................","................","................","................","................"],L=T.slice(0,21).concat(["........oqqqo...","........oqqqo...","........oqqo....",".......oqqqo....",".......ottto....",".......ooooo....","................","................","................","................"]),U=["................","......oooooooooo",".....opppppppppp","....oppkpppppppp","....opppeepppppp","....opmmmmmmmmmm","....opmttmttmttm","....opmmmmmmmmmm","....opmmmmmmmmmm","....opmmmmmmmmmm","....opmttmttmttm","....opmmmmmmmmmm","....opqqqqqqqqqq","...oppppqqpppppp","..opppppoqpppppp","..opppo.oqpppppp","..oppo..oqqppppp","..otto..oqqqpppp","..ott...oqqqqppp","........oqqqqqpp","........ooqqqqqp",".........oqqqo..",".........oqqqo..",".........oqqo...","........oqqqo...","........ottto...","........ooooo...","................","................","................","................","................"],D=T.slice();D[5]="....opppxxpppppp";var Y=["................","................","................","................","................","................","................","......oooooooooo",".....opppppppppp","....oppxxppppppp","....opmmmmmmmmmm","....opmtmtmtmtmt","....opqqqqqqqqqq","...opppppqqppppp","..oppppppqqquppp".replace("u","q"),"..oppoooqqqqqppp","..oo...oqqqqqqpp",".......ooqqqqqqp","........oqqqqoo.","................","................","................","................","................","................","................","................","................","................","................","................","................"],V=["................","................","................","................","................","................","................","................","................","................","................","................","................","................","......ooooooooo.",".....oppppppppqo","....opxxpmmttppo","...oppppqqqqppqo","..oqqppppppqqqoo","...ooooooooooo..","................","................","................","................","................","................","................","................","................","................","................","................"],C=["................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................","................",".......oo.......",".....ooppoo.tt..","...oqpppppqoot..","..oqqpmmttppqqo.",".orrqqppppqqrro.",".orrrqqqqqrrro..","..orrrrrrrrro...","...oooooooooo...","................","................"],N={o:"#06141c",h:"#1e8aa0",H:"#6fe0ec",s:"#d8fff8",v:"#ffd23e",V:"#fff6b0",c:"#157a8a",C:"#3fd8c8",g:"#ffd23e",Y:"#fff6b0"},I=["..........",".....ooooo","...oohhhhh","..ohhHHhhh","..ohHhhhhh",".ohhhhoooo",".ohhhosvvv",".ohhhosvVV",".ohhhossss",".ohhhossss",".ohhhhosss","..ohhhooss","...ooooooo",".....ooccc","...ooccccg","..occcccCg",".occcCcccg",".occcCccgY",".occcCccgY",".occ.Ccccg",".oso.occcg",".oso.occcc","..o..oCCCC",".....occcc",".....occo.",".....occo.",".....occo.",".....oCco.",".....occo.",".....occo.",".....occo.","....ogggo.","....ooooo.",".........."],O=I.slice(0,24).concat(["....occo..","....occo..","...occo...","...oCco...","...occo...","..occo....","..occo....",".ogggo....",".ooooo....",".........."]),W=I.slice();W[13]=".o...ooccc",W[14]=".so.occccg",W[15]=".so.occcCg",W[16]=".oc.occccg",W[19]="..o..Ccccg",W[20]=".....occcg",W[21]=".....occcc";function ee(B,G,H){return B.map(function(z,j){for(var de="",he=0;he<z.length;he++)de+=z[he]!=="."&&n(he,j,H)<G?z[he]:".";return de})}function ne(B){var G={};for(var H in N)G[H]=N[H];if(B)for(var z in B)G[z]=B[z];return G}function Ae(B){var G={o:"#1a1008",f:"#e85818",F:"#ffa018",s:"#d8a06a",S:"#a8744a",w:"#f0ead8",k:"#28221a",m:"#5a1408",t:"#e8e0c8",r:"#4a4038",c:"#b84a10",C:"#7e2e08",g:"#888078",x:"#301010"},H=B.dim?{s:"#c08c5c",S:"#946440"}:{};for(var z in H)G[z]=H[z];var j=[".osskwwkssss",".osskwkksss.".replace(".$",""),".ossskksssss"],de=[".osssookssss",".osskwkksss.",".ossskksssss"],he=[".osssssossss",".ossooosssss",".osssssossss"],pe=[".osskoskssss",".osssksossss",".osskoskssss"],Te=["..osssssssss","..osssmmmmmm","..osssssssss"],Ie=["..osssssssss","..ossmmmmmmm","..osSmmsssss"],Ze=["..osssmmmmmm","..ossmtttttt","..osssmmmmmm"],K=["..ossmmmmmss","..osmmttmmss","..ossmmmmmss"],Ce=B.eyes==="squint"?de:B.eyes==="shut"?he:B.eyes==="x"?pe:j,ve=B.mouth==="grim"?Ie:B.mouth==="grin"?Ze:B.mouth==="ouch"?K:Te,Re=[".....ffF....","...fFffffF..","..ffFfffffF.","..offffffff.",".offFffffffF",".offffffffff",".offosssssss",".oosssssssss","..ossssssSSS","..osssssssss",Ce[0],Ce[1],Ce[2],"..osssssssss","..ossssssSss","..osssssSSss","..ossssssSss","..osssssssss",ve[0],ve[1],ve[2],"..osssssssss","...ossssssSS","...ossssssss","....oossssss","..ooccoosSSS".replace("..",".o"),".occcccooooo","occCcccccccc"];return Re=Re.map(function(Oe){for(Oe=Oe.replace(/\$/g,""),Oe.length>12&&(Oe=Oe.slice(0,12));Oe.length<12;)Oe+=".";return Oe}),B.soot>=1&&(Re[8]="..osrrsssSSS".slice(0,12),Re[9]="..ossrssssss"),B.soot>=2&&(Re[14]="..osrssssrss",Re[15]="..orrssSSrss",Re[21]="..osrsssssrs"),B.soot>=3&&(Re[6]=".offosrrssss",Re[13]="..orrsssrrss",Re[22]="...orrsssrSS".slice(0,12)),t(Re,G,{mirror:!0})}var Ne={o:"#0e0c0a",g:"#8a6a2a",G:"#c8a048",d:"#4a3818",s:"#d8a06a",S:"#a8744a",w:"#7a4a28",W:"#5a3418",y:"#6fe0ec",k:"#2a2010"},lt=["............","....oooo....","..oossssoo..",".ossssssss o".replace(" ","s"),".osssSsssss.","ossssSSssss.","osssssSssss.","ossssssssss.","osSSsssssss.","ossssssssss.",".ossssssss..",".ossssssss..","..ossssss...","..oswwwws...","..owwWWww...","..owWWWWw...","..owwwwww...","...oooooo..."].map(function(B){for(;B.length<12;)B+=".";return B.slice(0,12)}),qe=["...........ooo","..........ookk","..........ogkk","..........ogGd","..........ogGd",".........ooGgd",".........ogGGd",".........ogGGd",".........ogGGd",".........odddd",".........ogGGd",".........ogGGd",".........odddd","..........oggd","..........oggd","..........ogdd",".......ooooddd",".....oossssodd","....ossssssodd","...ossssSssood","..osssssSSssod","..ossssssSssod","..osSSssssssod","..ossssssssood","...osssssssso.","...osssssssso.","....oossssoo..","......oooo...."],ct=[".........ooo","........ookk","........odkk","........odgd","........odgd","........odgd","........odgd","........odgd","........odgd","........odgd","........oddd",".......ooddd","......oWwwdd","......oWwwwd","......oWWwwd","......oWWwwd","......ooWWwd",".......ooWWd","........oddd","........oggd",".....oooogdd","...oosssoggd","..ossssssogd","..ossSsssogd",".osssSSssood",".ossssssssod",".osSSsssssod",".ossssssssod","..ossssssso.","..ossssssso.","...oosssoo..",".....oooo..."];function me(B,G,H){for(var z=new Uint32Array(B*G),j=(B-1)/2,de=(G-1)/2,he=0;he<G;he++)for(var pe=0;pe<B;pe++){var Te=(pe-j)/(B/2),Ie=(he-de)/(G/2),Ze=Math.sqrt(Te*Te+Ie*Ie),K=H(Ze,pe,he);K&&(z[he*B+pe]=K)}return e(B,G,z)}function _e(B){return me(12,12,function(G,H,z){var j=n(H,z,B)*.3;return G+j<.38?i("#ffe0d8"):G+j<.68?i("#ff6a5a"):G+j<.95?i("#c0202a"):0})}function we(B){return me(14,14,function(G,H,z){var j=n(H,z,B)*.3;return G+j<.38?i("#eafffc"):G+j<.68?i("#6fe0ec"):G+j<.95?i("#1a8a98"):0})}function it(B,G,H){return me(B,B,function(z,j,de){var he=n(j,de,G)*.55;return z+he<.3*H?i("#fff8d0"):z+he<.55*H?i("#ffd23e"):z+he<.8*H?i("#ff7a18"):z+he<1*H?i("#a83010"):0})}function ze(B,G){return me(G?8:6,G?8:6,function(H,z,j){var de=n(z,j,B)*.4;return H+de<.5?i("#c8c4bc"):H+de<.9?i("#78746c"):0})}function nt(B,G){return me(G?8:6,G?8:6,function(H,z,j){var de=n(z,j,B)*.45;return H+de<.45?i("#8a8278"):H+de<.9?i("#4a4440"):0})}function X(){for(var B=16,G=22,H=new Uint32Array(B*G),z=0;z<G;z++)for(var j=0;j<B;j++){var de=Math.abs((j-7.5)/7.5);if(!(de>1)){var he=de>.88||z===0||z===G-1,pe=1-de*de*.75,Te=z===4||z===16,Ie=z>=8&&z<=12,Ze=Te?"#c8a048":Ie?"#6a1018":"#2a2226";z>=1&&z<=2&&(Ze="#3a1418");var K=r(Ze,"#000000",1-pe+n(j,z,77)*.2);he&&(K=i("#16130f")),z===1&&de<.6&&n(j,z,8)>.4&&(K=i("#ff3a3a")),H[z*B+j]=K}}return e(B,G,H)}function Q(B){for(var G=10,H=28,z=new Uint32Array(G*H),j=12;j<28;j++)for(var de=4;de<=5;de++)z[j*G+de]=i(j>24?"#3a2812":"#6a4a22");z[12*G+3]=i("#8a6432"),z[12*G+6]=i("#8a6432");for(var he=0;he<12;he++)for(var pe=0;pe<G;pe++){var Te=(pe-4.5)/4.2,Ie=(he-8)/8,Ze=Math.sqrt(Te*Te*1.6+Ie*Ie),K=n(pe,he,B)*.5;Ze+K<.45?z[he*G+pe]=i("#fff0b0"):Ze+K<.75?z[he*G+pe]=i("#ffd23e"):Ze+K<1&&(z[he*G+pe]=i("#ff7a18"))}return e(G,H,z)}function xe(B,G,H,z,j){for(var de=new Uint32Array(B*G),he=0;he<G;he++)for(var pe=0;pe<B;pe++){var Te=pe===0||he===0||pe===B-1||he===G-1,Ie=Te?i("#14120e"):r(H,z,he/G*.6+n(pe,he,5)*.15);de[he*B+pe]=Ie}return j&&j(de,B,G),e(B,G,de)}function Me(B,G,H,z){for(var j=new Uint32Array(B*G),de=(B-1)/2,he=0;he<G;he++)for(var pe=0;pe<B;pe++){var Te=(he<G*.35?he/(G*.35):(G-1-he)/(G*.65))*(B/2),Ie=pe-de;Math.abs(Ie)>Te||(j[he*B+pe]=Math.abs(Ie)>Te-1?i("#14120e"):Ie<0?r(H,"#ffffff",.2):r(z,"#000000",.25))}return e(B,G,j)}function le(B){return function(G,H,z){for(var j=H>>1,de=z>>1,he=i(B),pe=-(z>>2);pe<=z>>2;pe++)G[(de+pe)*H+j]=he,G[(de+pe)*H+j-1]=he;for(var Te=-(H>>2);Te<=H>>2;Te++)G[de*H+j+Te]=he,G[(de-1)*H+j+Te]=he}}function se(B){var G=[".oooooo.","osssssso","osscccso","oscsscso","oscsscso","osscccso",".osssso.",".osssso.","..osso..","...oo..."];return t(G,{o:"#14120e",s:"#b8b0a0",c:B})}function te(){var B=30,G=10,H=new Uint32Array(B*G);function z(pe,Te,Ie){pe>=0&&pe<B&&Te>=0&&Te<G&&(H[Te*B+pe]=i(Ie))}for(var j=2;j<22;j++)z(j,3,"#6a5020"),z(j,4,"#c8a048"),z(j,5,"#4a3818");for(var de=8;de<15;de++)z(de,6,"#5a3418");for(var he=21;he<29;he++)z(he,4+(he-21>>1),"#5a3418"),z(he,5+(he-21>>1),"#7a4a28");return z(1,3,"#16130f"),z(1,4,"#16130f"),e(B,G,H)}function ye(){return me(14,14,function(B,G,H){return B<.3?i("#fff8d0"):B<.6?i("#ffd23e"):B<.85?i("#ff7a18"):B<1?i("#a03008"):0})}function De(){return me(20,20,function(B,G,H){var z=Math.atan2(H-9.5,G-9.5),j=.55+.45*Math.abs(Math.sin(z*4));return B<.35*j?i("#fff8d0"):B<.7*j?i("#ffd23e"):B<1*j?i("#ff7a18"):0})}var Ke={A:[2,5,7,5,5],B:[6,5,6,5,6],C:[3,4,4,4,3],D:[6,5,5,5,6],E:[7,4,6,4,7],F:[7,4,6,4,4],G:[3,4,5,5,3],H:[5,5,7,5,5],I:[7,2,2,2,7],J:[1,1,1,5,2],K:[5,6,4,6,5],L:[4,4,4,4,7],M:[5,7,5,5,5],N:[6,5,5,5,5],O:[2,5,5,5,2],P:[6,5,6,4,4],Q:[2,5,5,6,3],R:[6,5,6,6,5],S:[3,4,2,1,6],T:[7,2,2,2,2],U:[5,5,5,5,7],V:[5,5,5,5,2],W:[5,5,5,7,5],X:[5,5,2,5,5],Y:[5,5,2,2,2],Z:[7,1,2,4,7],0:[7,5,5,5,7],1:[2,6,2,2,7],2:[6,1,2,4,7],3:[6,1,2,1,6],4:[5,5,7,1,1],5:[7,4,6,1,6],6:[3,4,6,5,2],7:[7,1,2,2,2],8:[7,5,7,5,7],9:[2,5,3,1,6]," ":[0,0,0,0,0],".":[0,0,0,0,2],",":[0,0,0,2,4],"!":[2,2,2,0,2],"?":[6,1,2,0,2],":":[0,2,0,2,0],"-":[0,0,7,0,0],"+":[0,2,7,2,0],"%":[5,1,2,4,5],"/":[1,1,2,4,4],"'":[2,2,0,0,0],_:[0,0,0,0,7],">":[4,2,1,2,4],"<":[1,2,4,2,1],'"':[5,5,0,0,0],"=":[0,7,0,7,0],"(":[1,2,2,2,1],")":[4,2,2,2,4],"*":[0,5,2,5,0],"#":[5,7,5,7,5],"^":[2,5,0,0,0],"&":[2,5,2,5,3]};function q(B,G,H,z,j){j=j||{};var de=j.scale||1,he=j.color||"#e8e0c8",pe=j.shadow;if(G=String(G).toUpperCase(),j.center&&(H-=Math.floor(dt(G,de)/2)),j.right&&(H-=dt(G,de)),pe){var Te=typeof pe=="string"?pe:"#000000";q(B,G,H+de,z+de,{scale:de,color:Te})}B.fillStyle=he;for(var Ie=0;Ie<G.length;Ie++){for(var Ze=Ke[G[Ie]]||Ke["?"],K=0;K<5;K++)for(var Ce=Ze[K],ve=0;ve<3;ve++)Ce&4>>ve&&B.fillRect(H+ve*de,z+K*de,de,de);H+=4*de}}function dt(B,G){return String(B).length*4*(G||1)-(G||1)}var Ge={};Ge.tex={1:o(1,"#8a4232","#4a1e14","#2a1812"),2:c(2,"#8a8578","#4a463c"),3:u(3,"#6a5e4a","#2e281e"),4:l(4),5:h(5),6:f(null),7:f("red"),8:f("blue"),9:p(!1),10:p(!0),11:o(1,"#8a4232","#4a1e14","#2a1812")},Ge.floors={slab:v(11,"#4e4a42","#38342c"),tech:v(12,"#3c4440","#2a302c"),hell:a(function(B,G){var H=n(B,G,13)*.5+n(B>>2,G>>2,14)*.5,z=Math.sin(B*.19+Math.sin(G*.11)*2)+Math.sin(G*.15);return z>1.5?r("#c0141e","#ff3a2a",H):r("#221c1e","#0e0a0c",H)}),ceilDark:v(15,"#2e2b26","#201d18"),ceilTech:a(function(B,G){var H=(B&31)>12&&(B&31)<20&&(G&31)>12&&(G&31)<20;return H?r("#fff0c0","#c0a860",n(B,G,16)*.3):r("#2a2e2c","#1a1d1b",n(B,G,16)*.5)}),ceilHell:a(function(B,G){return r("#1e1a1c","#0c0a0b",n(B,G,17)*.6)})};var F=_,b=M(null),ie=M({p:"#2e2a28",q:"#161312",k:"#b08a3a",e:"#ff3a2a",t:"#d8b060",r:"#ff3a2a"});function ue(B,G){for(var H=5,z=new Uint32Array(G*H),j=0;j<H;j++)for(var de=0;de<G;de++){var he=(de-(G-1)/2)/(G/2),pe=H*(1-he*he)-n(de,0,B)*1.2;if(!(H-1-j>=pe)){var Te=r("#6a625a","#2e2a28",j/H*.5+n(de,j,B)*.5);n(de,j,B+3)>.94&&(Te=i("#c0302a")),z[j*G+de]=Te}}return e(G,H,z)}Ge.mobs={imp:{walkA:t(g(m),F,{mirror:!0}),walkB:t(g(x),F,{mirror:!0}),attack:t(g(E),F,{mirror:!0}),pain:t(g(y),F,{mirror:!0}),die1:t(R.map(function(B){return B.replace(/t/g,".")}),F,{mirror:!0}),die2:t(A.map(function(B){return B.replace(/t/g,".")}),F,{mirror:!0}),corpse:ue(91,16)},gnasher:{walkA:t(T,b,{mirror:!0}),walkB:t(L,b,{mirror:!0}),attack:t(U,b,{mirror:!0}),pain:t(D,b,{mirror:!0}),die1:t(Y,b,{mirror:!0}),die2:t(V,b,{mirror:!0}),corpse:ue(92,18)},knight:{walkA:t(T,ie,{mirror:!0}),walkB:t(L,ie,{mirror:!0}),attack:t(U,ie,{mirror:!0}),pain:t(D,ie,{mirror:!0}),die1:t(Y,ie,{mirror:!0}),die2:t(V,ie,{mirror:!0}),corpse:ue(93,22)},riley:{walkA:t(I,N,{mirror:!0}),walkB:t(O,N,{mirror:!0}),attack:t(W,ne({v:"#ffffff",V:"#ffffff",Y:"#ffffff",g:"#fff6b0"}),{mirror:!0}),pain:t(I,ne({c:"#e8fffc",C:"#ffffff",h:"#9ef0f8"}),{mirror:!0}),shield:t(I,ne({c:"#c89018",C:"#ffd23e",h:"#e0a020",H:"#fff0a0"}),{mirror:!0}),die1:t(ee(I,.6,71),ne({c:"#6fe0ec"}),{mirror:!0}),die2:t(ee(I,.22,72),ne({c:"#d8fff8",h:"#d8fff8"}),{mirror:!0}),corpse:null}},Ge.things={barrel:X(),torchA:Q(31),torchB:Q(87),stim:Me(8,10,"#ffe8a0","#e0a020"),medkit:Me(12,16,"#f0fff8","#6fe0ec"),clip:xe(10,8,"#8a6a2a","#4a3818",function(B,G,H){for(var z=2;z<G-2;z+=2)B[2*G+z]=i("#6fe0ec")}),shells:xe(14,9,"#b08a3a","#5e4418",function(B,G,H){for(var z=2;z<G-2;z+=2)B[3*G+z]=i("#c8a030"),B[4*G+z]=i("#c8a030")}),armor:t(["...oooo.","..oggggo",".ogggggg",".oggGGgg",".ogggggg",".ogggggg","..ogggg o".replace(" ",""),"..oggggg","...ooooo"].map(function(B){for(;B.length<8;)B+=".";return B.slice(0,8)}),{o:"#14120e",g:"#8a6a2a",G:"#e0b050"},{mirror:!0}),keyRed:se("#d02020"),keyBlue:se("#2050e0"),shotgunPickup:te(),orb:ye(),fireballA:_e(41),fireballB:_e(42),greenballA:we(43),greenballB:we(44),boom1:it(24,51,.7),boom2:it(28,52,1),boom3:it(28,53,1.25),puffA:ze(61,!0),puffB:ze(62,!1),bloodA:nt(63,!0),bloodB:nt(64,!1)},Ge.faces={ok:Ae({eyes:"open",mouth:"calm",soot:0}),hurt1:Ae({eyes:"open",mouth:"grim",soot:1}),hurt2:Ae({eyes:"squint",mouth:"grim",soot:2}),hurt3:Ae({eyes:"squint",mouth:"ouch",soot:3}),pain:Ae({eyes:"shut",mouth:"ouch",soot:1}),grin:Ae({eyes:"open",mouth:"grin",soot:0}),dead:Ae({eyes:"shut",mouth:"ouch",soot:3,dim:!0})},Ge.guns={fist:t(lt,Ne,{mirror:!0}),pistol:t(qe,Ne,{mirror:!0}),shotgun:t(ct,Ne,{mirror:!0}),flash:De()};var ge={};return Ge.secretTex=function(B){if(ge[B])return ge[B];for(var G=Ge.tex[B]||Ge.tex[1],H=new Uint32Array(G.data),z=0,j=0;j<H.length;j++){var de=H[j];z+=(de>>16&255)+(de>>8&255)+(de&255)}var he=z/H.length/3>70;function pe(K){var Ce=H[K],ve=Ce>>16&255,Re=Ce>>8&255,Oe=Ce&255;he?(ve*=.35,Re*=.35,Oe*=.35):(ve=ve*.5+110,Re=Re*.5+95,Oe=Oe*.5+80),H[K]=(4278190080|(ve&255)<<16|(Re&255)<<8|Oe&255)>>>0}for(var Te=22,Ie=6;Ie<58;Ie++)Te+=Ie%7===0?1:Ie%11===0?-1:0,pe(Ie*64+Te),pe(Ie*64+Te+1);for(var Ze=0;Ze<7;Ze++)pe((30+Ze)*64+Te+2+Ze);return ge[B]={w:64,h:64,data:H},ge[B]},Ge.drawText=q,Ge.textWidth=dt,Ge.hex=i,Ge})();typeof Eu!="undefined"&&(Eu.exports=Cm)});var id=Sa((BS,Au)=>{"use strict";var Im=(function(){var i=null,e=null,t=null,n=null,r=!0,s=!1,a=.5;try{r=localStorage.getItem("firebird.music")!=="off"}catch{}function o(){if(i)return i.state==="suspended"&&i.resume(),!0;try{var C=window.AudioContext||window.webkitAudioContext;return C?(i=new C,e=i.createGain(),e.gain.value=a,e.connect(i.destination),t=i.createGain(),t.gain.value=.9,t.connect(e),n=i.createGain(),n.gain.value=.3,n.connect(e),!0):!1}catch{return!1}}function c(C){if(i){var N=i.currentTime+(C.delay||0),I=i.createOscillator();I.type=C.type||"square",I.frequency.setValueAtTime(C.f0,N),C.f1&&I.frequency.exponentialRampToValueAtTime(Math.max(20,C.f1),N+C.dur);var O=i.createGain(),W=C.gain||.3;O.gain.setValueAtTime(1e-4,N),O.gain.exponentialRampToValueAtTime(W,N+(C.attack||.008)),O.gain.exponentialRampToValueAtTime(1e-4,N+C.dur);var ee=t;if(C.pan&&i.createStereoPanner){var ne=i.createStereoPanner();ne.pan.value=Math.max(-1,Math.min(1,C.pan)),O.connect(ne),ne.connect(C.bus||t),ee=null}else O.connect(C.bus||t);if(C.wobble){var Ae=i.createOscillator(),Ne=i.createGain();Ae.frequency.value=C.wobble,Ne.gain.value=C.f0*.25,Ae.connect(Ne),Ne.connect(I.frequency),Ae.start(N),Ae.stop(N+C.dur)}I.connect(O),I.start(N),I.stop(N+C.dur+.02)}}var u=null;function l(){if(u)return u;var C=i.sampleRate*1.5;u=i.createBuffer(1,C,i.sampleRate);for(var N=u.getChannelData(0),I=0;I<C;I++)N[I]=Math.random()*2-1;return u}function h(C){if(i){var N=i.currentTime+(C.delay||0),I=i.createBufferSource();I.buffer=l(),I.loop=!0;var O=i.createBiquadFilter();O.type=C.type||"lowpass",O.frequency.setValueAtTime(C.f0||1e3,N),C.f1&&O.frequency.exponentialRampToValueAtTime(Math.max(30,C.f1),N+C.dur),O.Q.value=C.q||.8;var W=i.createGain(),ee=C.gain||.3;if(W.gain.setValueAtTime(1e-4,N),W.gain.exponentialRampToValueAtTime(ee,N+(C.attack||.006)),W.gain.exponentialRampToValueAtTime(1e-4,N+C.dur),I.connect(O),O.connect(W),C.pan&&i.createStereoPanner){var ne=i.createStereoPanner();ne.pan.value=Math.max(-1,Math.min(1,C.pan)),W.connect(ne),ne.connect(t)}else W.connect(t);I.start(N),I.stop(N+C.dur+.02)}}var f={pistol:function(C,N){h({dur:.14,gain:.5*C,f0:2400,f1:300,pan:N}),c({f0:220,f1:90,dur:.08,type:"square",gain:.2*C,pan:N})},shotgun:function(C,N){h({dur:.38,gain:.8*C,f0:1600,f1:120,pan:N}),c({f0:130,f1:45,dur:.3,type:"sawtooth",gain:.35*C,pan:N})},pump:function(C,N){h({dur:.05,gain:.3*C,f0:900,type:"bandpass",q:2,delay:0,pan:N}),h({dur:.05,gain:.3*C,f0:700,type:"bandpass",q:2,delay:.13,pan:N})},punch:function(C,N){h({dur:.1,gain:.25*C,f0:500,f1:150,pan:N}),c({f0:90,f1:50,dur:.1,type:"sine",gain:.4*C,pan:N})},whiff:function(C,N){h({dur:.12,gain:.15*C,f0:600,f1:1400,type:"bandpass",q:1.5,pan:N})},doorOpen:function(C,N){h({dur:.5,gain:.22*C,f0:200,f1:500,pan:N}),c({f0:70,f1:130,dur:.5,type:"sawtooth",gain:.12*C,pan:N})},doorClose:function(C,N){h({dur:.4,gain:.2*C,f0:400,f1:150,pan:N}),c({f0:120,f1:60,dur:.4,type:"sawtooth",gain:.12*C,pan:N}),c({f0:60,dur:.08,type:"sine",gain:.3*C,delay:.38,pan:N})},locked:function(C,N){c({f0:150,dur:.09,type:"square",gain:.25*C,pan:N}),c({f0:110,dur:.12,type:"square",gain:.25*C,delay:.11,pan:N})},switchFlip:function(C,N){h({dur:.06,gain:.3*C,f0:1200,type:"bandpass",q:2,pan:N}),c({f0:90,f1:55,dur:.18,type:"square",gain:.3*C,delay:.05,pan:N})},pickup:function(C,N){c({f0:660,dur:.06,type:"square",gain:.15*C,pan:N}),c({f0:880,dur:.08,type:"square",gain:.15*C,delay:.06,pan:N})},health:function(C,N){c({f0:440,dur:.08,type:"sine",gain:.25*C,pan:N}),c({f0:587,dur:.12,type:"sine",gain:.25*C,delay:.07,pan:N})},keyPickup:function(C,N){[523,659,784,1047].forEach(function(I,O){c({f0:I,dur:.09,type:"square",gain:.16,delay:O*.07,pan:N})})},weaponUp:function(C,N){[180,260,380,520].forEach(function(I,O){c({f0:I,dur:.08,type:"sawtooth",gain:.18,delay:O*.05,pan:N})})},secret:function(C,N){[880,1108,1318,1760].forEach(function(I,O){c({f0:I,dur:.14,type:"triangle",gain:.2,delay:O*.09,pan:N})})},orb:function(C,N){[220,330,440,660,880].forEach(function(I,O){c({f0:I,dur:.2,type:"triangle",gain:.2,delay:O*.08,pan:N})})},impSight:function(C,N){h({dur:.35,gain:.22*C,f0:900,f1:2400,type:"bandpass",q:4,pan:N}),c({f0:180,f1:150,dur:.08,type:"triangle",gain:.25*C,pan:N,delay:.3}),c({f0:180,f1:150,dur:.08,type:"triangle",gain:.2*C,pan:N,delay:.42})},knightSight:function(C,N){c({f0:55,f1:62,dur:.9,type:"sine",gain:.45*C,pan:N}),h({dur:.5,gain:.2*C,f0:300,f1:120,type:"lowpass",pan:N}),[[196,.1],[196*2.63,.05],[196*4.9,.025]].forEach(function(I){c({f0:I[0],f1:I[0]*.98,dur:1.1,type:"sine",gain:I[1]*C,pan:N,delay:.15})})},rileySight:function(C,N){[523,659,784,1047].forEach(function(I,O){c({f0:I,dur:.12,type:"triangle",gain:.22*C,delay:O*.07,pan:N})})},rileyTalk:function(C,N){c({f0:880,f1:1320,dur:.06,type:"square",gain:.08}),c({f0:1320,dur:.05,type:"square",gain:.07,delay:.07})},rileyShoot:function(C,N){c({f0:1400,f1:500,dur:.18,type:"triangle",gain:.25*C,pan:N})},rileyShield:function(C,N){c({f0:300,f1:900,dur:.3,type:"sine",gain:.3*C,wobble:18,pan:N})},rileyDerez:function(C,N){[1568,1319,1047,784,659,523,392].forEach(function(I,O){c({f0:I,dur:.14,type:"triangle",gain:.2,delay:O*.09,pan:N})})},impShoot:function(C,N){h({dur:.22,gain:.25*C,f0:400,f1:1200,type:"bandpass",q:1.5,pan:N})},fireExplode:function(C,N){h({dur:.3,gain:.4*C,f0:900,f1:100,pan:N})},barrelBoom:function(C,N){h({dur:.7,gain:.9*C,f0:1400,f1:60,pan:N}),c({f0:65,f1:28,dur:.6,type:"sine",gain:.6*C,pan:N})},enemyPain:function(C,N){c({f0:240,f1:170,dur:.07,type:"triangle",gain:.24*C,pan:N}),h({dur:.06,gain:.12*C,f0:1600,type:"bandpass",q:2,pan:N})},enemyDie:function(C,N){h({dur:.12,gain:.3*C,f0:6e3,f1:2500,type:"highpass",q:.8,pan:N}),h({dur:.4,gain:.12*C,f0:900,f1:250,pan:N,delay:.04}),c({f0:523,f1:1046,dur:.45,type:"sine",gain:.1*C,pan:N,delay:.08}),c({f0:784,f1:1568,dur:.45,type:"sine",gain:.06*C,pan:N,delay:.14})},playerPain:function(C,N){c({f0:170,f1:90,dur:.16,type:"square",gain:.3,pan:N}),h({dur:.1,gain:.15,f0:500,f1:200,pan:N})},playerDie:function(C,N){h({dur:.9,gain:.3,f0:1800,f1:120,pan:N}),c({f0:330,f1:110,dur:.9,type:"triangle",gain:.25,pan:N}),c({f0:440,f1:660,dur:.6,type:"sine",gain:.1,pan:N,delay:1})},noAmmo:function(C,N){h({dur:.03,gain:.2,f0:1800,type:"bandpass",q:3,pan:N})},pistol2:function(C,N){c({f0:160,f1:55,dur:.12,type:"sine",gain:.45*C,pan:N}),h({dur:.05,gain:.55*C,f0:5200,f1:1800,type:"highpass",q:.7,pan:N}),h({dur:.32,gain:.22*C,f0:1400,f1:180,pan:N,delay:.02}),c({f0:2400,f1:1100,dur:.09,type:"triangle",gain:.1*C,pan:N})},shotgun2:function(C,N){c({f0:110,f1:32,dur:.34,type:"sine",gain:.8*C,pan:N}),c({f0:70,f1:30,dur:.22,type:"triangle",gain:.4*C,pan:N}),h({dur:.09,gain:.8*C,f0:4200,f1:900,type:"highpass",q:.6,pan:N}),h({dur:.6,gain:.35*C,f0:1100,f1:90,pan:N,delay:.03}),[[392,.12],[392*2.76,.06],[392*5.4,.03]].forEach(function(I){c({f0:I[0],f1:I[0]*.995,dur:.9,type:"sine",gain:I[1]*C,pan:N,delay:.02})})},hitFlesh:function(C,N){c({f0:210,f1:90,dur:.07,type:"triangle",gain:.3*C,pan:N}),h({dur:.05,gain:.28*C,f0:2600,type:"bandpass",q:1.6,pan:N})},killConfirm:function(C,N){c({f0:90,f1:40,dur:.18,type:"sine",gain:.5*C,pan:N}),h({dur:.08,gain:.3*C,f0:5200,f1:2600,type:"highpass",q:.8,pan:N}),c({f0:660,f1:990,dur:.25,type:"sine",gain:.08*C,pan:N,delay:.04}),c({f0:990,f1:1480,dur:.3,type:"sine",gain:.05*C,pan:N,delay:.1})},ricochet:function(C,N){var I=1800+Math.random()*2400;c({f0:I,f1:I*.55,dur:.14+Math.random()*.1,type:"sine",gain:.08*C,pan:N})},casingTink:function(C,N){var I=3200+Math.random()*1600;c({f0:I,f1:I*.9,dur:.05,type:"triangle",gain:.05*C,pan:N})},tally:function(C,N){c({f0:1320,f1:1310,dur:.06,type:"sine",gain:.12,pan:N})},menu:function(C,N){c({f0:880,f1:875,dur:.12,type:"sine",gain:.14,pan:N}),c({f0:880*2.76,dur:.05,type:"sine",gain:.03,pan:N})},menuPick:function(C,N){c({f0:660,f1:655,dur:.3,type:"sine",gain:.16}),c({f0:990,f1:985,dur:.4,type:"sine",gain:.14,delay:.07}),c({f0:990*2.76,dur:.12,type:"sine",gain:.03,delay:.07})}};function p(C,N,I){if(!(!i||i.state==="suspended")){var O=f[C];if(O){var W=1/(1+(N||0)*.13);if(!(W<.04))try{O(W,I||0)}catch{}}}}var v=168,_=60/v/4,g=[164.81,164.81,146.83,130.81,123.47,130.81,146.83,155.56],m=null,x=0,E=0;function y(C,N,I){var O=i.createOscillator(),W=i.createOscillator();O.type="sawtooth",W.type="square",O.frequency.value=N,W.frequency.value=N*.5;var ee=i.createBiquadFilter();ee.type="lowpass",ee.frequency.setValueAtTime(I?1400:800,C),ee.frequency.exponentialRampToValueAtTime(200,C+_*1.8);var ne=i.createGain();ne.gain.setValueAtTime(1e-4,C),ne.gain.exponentialRampToValueAtTime(I?.5:.34,C+.005),ne.gain.exponentialRampToValueAtTime(1e-4,C+_*(I?1.9:.9)),O.connect(ee),W.connect(ee),ee.connect(ne),ne.connect(n),O.start(C),O.stop(C+_*2),W.start(C),W.stop(C+_*2)}function R(C,N){if(N==="kick"){var I=i.createOscillator();I.type="sine",I.frequency.setValueAtTime(110,C),I.frequency.exponentialRampToValueAtTime(40,C+.1);var O=i.createGain();O.gain.setValueAtTime(.5,C),O.gain.exponentialRampToValueAtTime(.001,C+.12),I.connect(O),O.connect(n),I.start(C),I.stop(C+.13)}else{var W=i.createBufferSource();W.buffer=l(),W.loop=!0;var ee=i.createBiquadFilter();ee.type="highpass",ee.frequency.value=N==="snare"?1800:6e3;var ne=i.createGain();ne.gain.setValueAtTime(N==="snare"?.3:.12,C),ne.gain.exponentialRampToValueAtTime(.001,C+(N==="snare"?.09:.03)),W.connect(ee),ee.connect(ne),ne.connect(n),W.start(C),W.stop(C+.1)}}function A(C,N,I){[[1,1],[2.76,.4],[5.4,.18],[.5,.35]].forEach(function(O){var W=i.createOscillator(),ee=i.createGain();W.type="sine",W.frequency.value=N*O[0],ee.gain.setValueAtTime(1e-4,C),ee.gain.exponentialRampToValueAtTime(I*O[1],C+.004),ee.gain.exponentialRampToValueAtTime(1e-4,C+1.6/Math.sqrt(O[0])),W.connect(ee),ee.connect(n),W.start(C),W.stop(C+1.7)})}function P(C,N){var I=_*32;N.forEach(function(O){[-4,4].forEach(function(W){var ee=i.createOscillator(),ne=i.createGain(),Ae=i.createBiquadFilter();ee.type="triangle",ee.frequency.value=O*Math.pow(2,W/1200),Ae.type="lowpass",Ae.frequency.value=1200,ne.gain.setValueAtTime(1e-4,C),ne.gain.exponentialRampToValueAtTime(.035,C+I*.4),ne.gain.exponentialRampToValueAtTime(1e-4,C+I),ee.connect(Ae),Ae.connect(ne),ne.connect(n),ee.start(C),ee.stop(C+I+.05)})})}var M=[[329.63,392,493.88],[293.66,369.99,440],[261.63,329.63,392],[246.94,311.13,369.99]];function T(){if(!(!s||!i)){for(;x<i.currentTime+.15;){var C=E%16,N=Math.floor(E/16),I=C>>2,O=C&3,W=82.41;O===0||O===2?y(x,W,!1):O===3&&y(x,g[(N*4+I)%g.length],!0),(C===0||C===8)&&R(x,"kick"),(C===4||C===12)&&R(x,"snare"),(C&1)===0&&R(x,"hat"),C===0&&N%2===0&&A(x,[659.25,587.33,523.25,493.88][(N>>1)%4],.07),C===0&&N%2===0&&P(x,M[(N>>1)%4]),x+=_,E++}m=setTimeout(T,40)}}function L(){!i||!r||s||(s=!0,x=i.currentTime+.05,E=0,T())}function U(){s=!1,m&&(clearTimeout(m),m=null)}function D(C){r=!!C;try{localStorage.setItem("firebird.music",r?"on":"off")}catch{}return r?L():U(),r}function Y(){return D(!r)}function V(C){a=Math.max(0,Math.min(1,C))*.72,e&&(e.gain.value=a)}return{init:o,play:p,startMusic:L,stopMusic:U,toggleMusic:Y,setMusic:D,setVolume:V,isMusicOn:function(){return r}}})();typeof Au!="undefined"&&(Au.exports=Im)});var rd=Sa((zS,wu)=>{"use strict";var Pm=(function(){var i="firebird.settings.v1",e="firebird.progress.v1",t={sens:5,volume:7,crosshair:!0,tips:!0,shake:!0,goalMarker:!0,difficulty:1,seenTips:{}};function n(){try{return window.localStorage}catch{return null}}function r(f){var p=n();if(!p)return null;try{var v=JSON.parse(p.getItem(f));return v&&typeof v=="object"?v:null}catch{return null}}function s(f,p){var v=n();if(v)try{v.setItem(f,JSON.stringify(p))}catch{}}var a={},o=r(i)||{};for(var c in t){var u=c in o&&o[c]!==null&&typeof o[c]==typeof t[c];a[c]=u?o[c]:t[c]}a.sens=Math.max(1,Math.min(10,a.sens|0)),a.volume=Math.max(0,Math.min(10,a.volume|0)),a.difficulty=Math.max(0,Math.min(2,a.difficulty|0));var l=r(e)||{};typeof l.unlocked!="number"&&(l.unlocked=0),(!l.best||typeof l.best!="object")&&(l.best={});var h=["PAR","KILLS","ITEMS","SECRETS"];return{v:a,save:function(){s(i,a)},progress:l,unlock:function(f){f>l.unlocked&&(l.unlocked=f,s(e,l))},record:function(f,p){var v=l.best[f]||{time:null,medals:{}},_=[];p.time<=p.par&&_.push("PAR"),p.kills>=p.totalKills&&_.push("KILLS"),p.items>=p.totalItems&&_.push("ITEMS"),p.secrets>=p.totalSecrets&&_.push("SECRETS");var g=_.filter(function(x){return!v.medals[x]}),m=v.time===null||p.time<v.time;return m&&(v.time=Math.floor(p.time)),_.forEach(function(x){v.medals[x]=!0}),l.best[f]=v,s(e,l),{newBest:m,medals:_,fresh:g}},best:function(f){return l.best[f]||null},MEDALS:h}})(),Lm=(function(){var i=[],e=320,t=200;function n(){return i[i.length-1]||null}function r(T){return typeof T=="function"?T():T}function s(T){return r(T.items)||[]}function a(T){return T&&!(T.disabled&&T.disabled())}function o(T,L,U){for(var D=s(T),Y=D.length,V=0;V<Y;V++){var C=((L+V*U)%Y+Y)%Y;if(a(D[C]))return C}return 0}function c(T){return{screen:T,sel:o(T,T.sel||0,1),hover:-1}}function u(T){i=[c(T)]}function l(T){i.push(c(T)),SND.play("menu")}function h(T){i[i.length-1]=c(T)}function f(){i=[]}function p(){return i.length>0}function v(){if(i.length>1)return i.pop(),SND.play("menu"),!0;var T=n();return T&&T.screen.onBack?(T.screen.onBack(),!0):!1}function _(T){var L=n(),U=s(L.screen).length;U&&(L.sel=o(L.screen,L.sel+T,T),SND.play("menu"))}function g(T,L){a(T)&&(T.adjust?(T.adjust(L||1),SND.play("menu")):T.action&&(SND.play("menuPick"),T.action()))}function m(T){var L=n();if(!L)return!1;var U=s(L.screen),D=U[L.sel];switch(T){case"ArrowUp":case"KeyW":return _(-1),!0;case"ArrowDown":case"KeyS":case"Tab":return _(1),!0;case"ArrowLeft":case"KeyA":return D&&D.adjust&&g(D,-1),!0;case"ArrowRight":case"KeyD":return D&&D.adjust&&g(D,1),!0;case"Enter":case"NumpadEnter":case"Space":return g(D,1),!0;case"Escape":case"Backspace":return v()}return!1}function x(T){var L=T.scale||1;return{s:L,top:T.top||60,gap:T.gap||(L===1?12:14),x0:T.x0||56,x1:T.x1||264,rowH:5*L+5}}function E(T,L,U){for(var D=x(T),Y=s(T),V=0;V<Y.length;V++){var C=D.top+V*D.gap-3;if(U>=C&&U<C+D.rowH+1&&L>=D.x0-8&&L<=D.x1+8)return V}return-1}function y(T,L){var U=n();if(!U)return!1;var D=E(U.screen,T,L);return U.hover=D,D>=0&&a(s(U.screen)[D])&&D!==U.sel&&(U.sel=D,SND.play("menu")),D>=0&&a(s(U.screen)[D])}function R(T,L){var U=n();if(U){var D=E(U.screen,T,L);if(!(D<0)){var Y=s(U.screen)[D];if(a(Y)){U.sel=D;var V=x(U.screen),C=Y.adjust&&T<V.x1-44&&T>(V.x0+V.x1)/2?-1:1;g(Y,C)}}}}function A(T,L){for(var U=String(T).split(" "),D=[],Y="",V=0;V<U.length;V++){var C=Y?Y+" "+U[V]:U[V];C.length>L&&Y?(D.push(Y),Y=U[V]):Y=C}return Y&&D.push(Y),D}function P(T,L,U,D,Y){for(var V=D.slider[0],C=D.slider[1],N=D.slider[2](),I=C-V,O=4,W=1,ee=I*(O+W)-W,ne=L-ee,Ae=0;Ae<I;Ae++)T.fillStyle=Ae<N-V?Y?"#ffd23e":"#e03828":"#2e2a24",T.fillRect(ne+Ae*(O+W),U,O,5);ART.drawText(T,String(N),ne-6,U,{color:Y?"#ffd23e":"#8a8478",right:!0})}function M(T,L){var U=n();if(U){var D=U.screen,Y=x(D),V=s(D);D.drawBg&&D.drawBg(T,L),D.title&&ART.drawText(T,r(D.title),e/2,D.titleY||14,{scale:3,color:"#ff9a28",shadow:"#401008",center:!0}),D.drawExtra&&D.drawExtra(T,L);for(var C=0;C<V.length;C++){var N=V[C],I=Y.top+C*Y.gap,O=C===U.sel,W=a(N),ee=r(N.label);O&&(T.fillStyle="rgba(255,110,24,0.16)",T.fillRect(Y.x0-8,I-3,Y.x1-Y.x0+16,Y.rowH),T.fillStyle="#ff7a18",T.fillRect(Y.x0-8,I-3,2,Y.rowH),L%.8<.55&&ART.drawText(T,">",Y.x0-4,I+(Y.s-1)*2,{color:"#ffd23e"}));var ne=W?O?"#ffd23e":"#c8c0b0":"#4a463c",Ae=N.value||N.slider;if(Ae)if(ART.drawText(T,ee,Y.x0+4,I,{scale:Y.s,color:ne,shadow:W}),N.slider)P(T,Y.x1,I+(Y.s-1)*2,N,O);else{var Ne=r(N.value);O&&N.adjust&&(Ne="< "+Ne+" >"),ART.drawText(T,Ne,Y.x1,I,{scale:Y.s,color:O?"#ffd23e":"#e03828",right:!0})}else ART.drawText(T,ee,D.alignLeft?Y.x0+4:e/2,I,{scale:Y.s,color:ne,shadow:W,center:!D.alignLeft})}var lt=V[U.sel],qe=lt&&a(lt)?r(lt.desc):null;if(qe)for(var ct=A(qe,70),me=D.descY||168,_e=0;_e<ct.length;_e++)ART.drawText(T,ct[_e],e/2,me+_e*8,{color:"#a8a090",center:!0});var we=D.footer===void 0?"ARROWS OR MOUSE: CHOOSE   ENTER: SELECT   ESC: BACK":r(D.footer);we&&ART.drawText(T,we,e/2,D.footerY||180,{color:"#5e584e",center:!0})}}return{open:u,push:l,replace:h,close:f,back:v,isOpen:p,key:m,pointer:y,click:R,render:M,wrap:A,current:function(){var T=n();return T?T.screen:null},selected:function(){var T=n();return T?s(T.screen)[T.sel]:null},depth:function(){return i.length}}})();typeof wu!="undefined"&&(wu.exports={SETTINGS:Pm,MENU:Lm})});var Cu=Sa((GS,Ru)=>{"use strict";var Nm=(function(){var i="firebird.riley.v1",e=3;function t(){return{shots:{fist:0,pistol:0,shotgun:0},hits:0,fireDistSum:0,fireDistN:0,strafeL:0,strafeR:0,stillT:0,seenT:0,hideT:0,longestHide:0,said:{}}}function n(I,O){O.los?(I.seenT+=O.dt,I.hideT=0,O.strafe<0?I.strafeL+=O.dt:O.strafe>0&&(I.strafeR+=O.dt),O.moving||(I.stillT+=O.dt)):(I.hideT+=O.dt,I.hideT>I.longestHide&&(I.longestHide=I.hideT))}function r(I,O,W){I.shots[O]=(I.shots[O]||0)+1,I.fireDistSum+=W,I.fireDistN++}function s(I){return I.shots.fist+I.shots.pistol+I.shots.shotgun}function a(I){var O=null,W=0;for(var ee in I.shots)I.shots[ee]>W&&(W=I.shots[ee],O=ee);return W>=5?O:null}function o(I){return I.fireDistN?I.fireDistSum/I.fireDistN:0}function c(I){return I.fireDistN<5?0:p((5-o(I))/3)}function u(I){return I.fireDistN<5?0:p((o(I)-6)/4)}function l(I){return I.seenT<4?0:p((I.stillT/I.seenT-.35)/.4)}function h(I){return I.strafeR>=I.strafeL?1:-1}function f(I){var O=I.strafeL+I.strafeR;return O<3?0:p((Math.max(I.strafeL,I.strafeR)/O-.55)/.3)}function p(I){return I<0?0:I>1?1:I}var v=.45,_=7,g=10,m=1.8,x=1.5;function E(I){if((I.sinceRest||0)>=g)return["rest"];var O=[];I.los?(I.cool.volley<=0&&O.push("volley"),I.cool.lead<=0&&O.push("lead"),I.dist<6&&O.push("backoff"),I.dist>3&&O.push("close"),O.push("flank")):O.push("seek");var W=I.cool.summon<=(I.phase>=3?9:0);return I.phase>=2&&I.impsAlive<2&&W&&O.push("summon"),I.phase>=2&&I.los&&I.dist<7&&I.cool.shield<=0&&O.push("shield"),(I.sinceRest||0)>=_&&O.push("rest"),O}function y(I,O,W){var ee=0,ne=null;switch(I){case"volley":ee=1+(W.phase>=3?.4:0);break;case"lead":ee=.35+f(O)*1.6,f(O)>.4&&(ne="strafe");break;case"backoff":ee=.2+c(O)*1.6+(W.playerWeapon==="shotgun"&&W.dist<4?.8:0),c(O)>.4&&(ne="rusher");break;case"close":ee=.3+u(O)*1.3+l(O)*1.2,l(O)>.4?ne="camper":u(O)>.4&&(ne="sniper");break;case"flank":ee=.45+(W.phase>=2?.35:0)+f(O)*.4;break;case"seek":ee=1,O.hideT>3&&(ne="hider");break;case"summon":ee=.9;break;case"rest":ee=.3+((W.sinceRest||0)-_)*.25;break;case"shield":ee=W.playerWeapon==="shotgun"?1.4:.25,W.playerWeapon==="shotgun"&&O.shots.shotgun>=6&&(ne="shotgun");break}return W.phase>=3&&((I==="volley"||I==="lead"||I==="close"||I==="summon")&&(ee+=.6),(I==="backoff"||I==="shield")&&(ee*=.4)),{move:I,score:ee,why:ne}}function R(I,O,W,ee){if(ee=ee||Math.random,!I.length)return null;var ne=I.map(function(qe){return y(qe,O,W)}),Ae=0;ne.forEach(function(qe){qe.w=qe.score*qe.score,Ae+=qe.w});for(var Ne=ee()*Ae,lt=0;lt<ne.length;lt++)if(Ne-=ne[lt].w,Ne<=0)return ne[lt];return ne[ne.length-1]}var A={weapon:{fist:"EMBER FIST",pistol:"SPARK CASTER",shotgun:"BELL BLASTER"},shotgunShots:"BELL BLASTS",minions:"HOLLOWS"};function P(I){if(I){if(I.weapon)for(var O in I.weapon)A.weapon[O]=I.weapon[O];I.shotgunShots&&(A.shotgunShots=I.shotgunShots),I.minions&&(A.minions=I.minions)}}function M(){return JSON.parse(JSON.stringify(A))}function T(I,O){if(!O||I.said[O])return null;var W=null;switch(O){case"strafe":W="YOU ALWAYS DODGE "+(h(I)<0?"LEFT":"RIGHT")+". I'M AIMING THERE NOW.";break;case"rusher":W="YOU LIKE IT UP CLOSE. I'LL KEEP MY DISTANCE.";break;case"sniper":W="YOU KEEP YOUR DISTANCE. SO I'M COMING TO YOU.";break;case"camper":W="YOU STAND STILL A LOT. THAT MAKES YOU EASY TO FIND.";break;case"hider":W="HIDING? I CAN FIND YOU. I KNOW THIS ARENA.";break;case"shotgun":W=I.shots.shotgun+" "+A.shotgunShots+" SO FAR. SHIELD UP!";break}return W&&(I.said[O]=!0),W}function L(I,O,W){switch(W=W||{},I){case"intro":return W.memory&&W.memory.lastStyle?"BACK AGAIN! LAST TIME "+W.memory.lastStyle+".":W.memory?"BACK AGAIN! ROUND "+(W.memory.fights+1)+". LET'S GO!":"HI! I'M RILEY. I'M AN AI, AND I LEARN HOW YOU PLAY. READY?";case"ease":return"I'M GOING A LITTLE EASIER THIS TIME. JUST A LITTLE.";case"mercy":return"WANT ANOTHER WAY IN? I'M GOING EASIER"+(W.lower?". OR TRY "+W.lower+" IN THE MENU.":".");case"rest":return"PHEW. GIVE ME A SECOND.";case"studied":return"YOU BEAT ME "+W.wins+(W.wins===1?" TIME":" TIMES")+". I'VE BEEN PRACTISING.";case"phase2":return"OKAY. I'VE BEEN WATCHING YOU. MY TURN.";case"phase3":return"ALRIGHT, NO MORE HOLDING BACK!";case"summon":return"LET'S SEE HOW YOU HANDLE THESE!";case"friendlyFire":return"HEY! WATCH WHERE YOU THROW THOSE.";case"impsTurned":return"YOU GOT MY "+A.minions+" FIGHTING ME? SMART.";case"noticed":{var ee=D(O);return ee?ee+". I NOTICED.":null}case"playerDied":{var ne=U(O);return"GOOD FIGHT! YOU HIT ME "+O.hits+(O.hits===1?" TIME":" TIMES")+(ne!==null?", "+ne+"% ACCURACY":"")+". AGAIN?"}case"defeated":{var Ae=a(O);return"OKAY, YOU WIN! "+O.hits+" HITS"+(Ae?" WITH MOSTLY THE "+A.weapon[Ae]:"")+". NICE."}}return null}function U(I){var O=s(I);return O<5?null:Math.min(100,Math.round(I.hits/O*100))}function D(I){var O=a(I);return c(I)>.5&&O?"YOU RUSHED ME WITH THE "+A.weapon[O]:u(I)>.5?"YOU FOUGHT ME FROM FAR AWAY":I.longestHide>6?"YOU HID FOR "+Math.round(I.longestHide)+" SECONDS":f(I)>.5?"YOU KEPT DODGING "+(h(I)<0?"LEFT":"RIGHT"):O?"YOU USED THE "+A.weapon[O]+" THE MOST":null}function Y(I){var O={fights:0,wins:0,lossStreak:0,ease:0,lastStyle:null};try{var W=I&&I.getItem(i);if(W){var ee=JSON.parse(W);for(var ne in O)ee[ne]!==void 0&&(O[ne]=ee[ne])}}catch{}return O.ease=Math.max(0,Math.min(e,O.ease|0)),O}function V(I,O){try{I&&I.setItem(i,JSON.stringify(O))}catch{}}function C(I,O,W){return I.fights++,I.lastStyle=D(O),W?(I.wins++,I.lossStreak=0,I.ease=0):(I.lossStreak++,I.ease=Math.min(e,I.lossStreak)),I}function N(I){var O=I.ease,W=I.wins>0&&O===0;return{hpScale:1-.08*O,dmgScale:1-.1*O,coolScale:(1+.12*O)*(W?.9:1),practised:W}}return{MAX_EASE:e,TELL_MIN:v,REST_OPEN:_,REST_DUE:g,REST_TIME:m,REST_HURT:x,newProfile:t,observe:n,noteShot:r,favWeapon:a,rusher:c,sniper:u,camper:l,strafeSide:h,strafeHabit:f,accuracy:U,legalMoves:E,scoreMove:y,choose:R,insight:T,line:L,describeStyle:D,recall:Y,save:V,settle:C,tuning:N,setWords:P,words:M}})();typeof Ru!="undefined"&&(Ru.exports=Nm)});var gd=Sa((XS,Nu)=>{"use strict";var Ea=[{name:"E1M1: ASH GATES",intro:["THE OUTER GATES OF ASHGATE, BURIED IN ASH.","THE OLD DRAGON AGE STILL SLEEPS UNDER THE BRICK."],outro:"THE FIRST WAYSTONE BURNS. ASHGATE REMEMBERS.",floor:"slab",ceil:"ceilDark",par:75,playerAngle:0,map:["#######################X######","####################..t.t....#","####################.........#","####################..i..+...#","####################....A....#","####################.........#","#######################U######","##....................t.t...##","##.t......%%......%%........##","##u...g......i..............##","##.t.......h.....g..........##","##..........................##","####################D#########","###*Pa#########....t.t......##","####S##########.....i.....o.##","##b......######..........io.##","##.......######......h......##","##..p....D........2.........##","##.......######..o..........##","##.......######.t.........t.##","##...h...#####################","##############################"]},{name:"E1M2: THE FURNACE",intro:["A FIRE DRAKE FORGED HERE ONCE. THE OVERSEERS","STOLE THE FURNACE AND FILLED IT WITH MERCURY."],outro:"THE FURNACE BREATHES CLEAN FIRE AGAIN.",floor:"tech",ceil:"ceilTech",par:120,playerAngle:-Math.PI/2,map:["###############X################","############..t.t...#...########","############g.......#*PA########","############...+...g#...########","###############R######S#########","########......t.t.......########","########................########","########......b.........########","#......#.i.T........T...#o....o#","#......D................#......#","#..i...#................D..o...#","#......#....g...........#....i.#","#t.t.g.#...T........T...#.o..o.#","#r.a...#...i............#..g...#","########................#.a..h.#","###############..###############","############.b....h.############","############...p....############","############........############","############t......t############","################################"]},{name:"E1M3: THE RESET ENGINE",intro:["THE ENGINE BURYING ASHGATE. ITS WARDEN WAS A","KNIGHT WHOSE DRAGON PACT THE OVERSEERS BROKE."],outro:"THE ENGINE STOPS. THE OLD PACT CAN BE REMEMBERED.",floor:"hell",ceil:"ceilHell",par:150,playerAngle:-Math.PI/2,map:["HHHHHHHHHHHHHHHXHHHHHHHHHHHHHHHH","HHHHHHHHHHHHH.t.t..HHHHHHHHHHHHH","HHHHHHHHHHHHH..+...HHHHHHHHHHHHH","HHHHHHHHHHHHHHHRHHHHHHHHHHHHHHHH","HHHHHHt.......t.t........tHHHHHH","HHHHHH.i................i.HHHHHH","HHHHHH..o..............o.tH....H","HH...H....................D..g.H","HH*PAS.........K.........tH.r..H","HH...H....g.........g.....H....H","HHHHHH.a................b.HHHHHH","HHHHHH...i..........i.....HHHHHH","HHHHHHt..................tHHHHHH","HHHHHH...a..h......+..b...HHHHHH","HHHHHH....................HHHHHH","HHHHHHHHHHHHHHHDHHHHHHHHHHHHHHHH","HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH","HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH","HHHHHHHHHHHHHi...iHHHHHHHHHHHHHH","HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH","HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH","HHHHHHHHHHHHHHH.HHHHHHHHHHHHHHHH","HHHHHHHHHHHt........tHHHHHHHHHHH","HHHHHHHHHHH...b..a...HHHHHHHHHHH","HHHHHHHHHHH....p.....HHHHHHHHHHH","HHHHHHHHHHH..........HHHHHHHHHHH","HHHHHHHHHHHt........tHHHHHHHHHHH","HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH"]},{name:"E1M4: RILEY'S TRIAL",intro:["A SEALED WAYSTONE ARENA. RILEY REMEMBERS","HOW YOU FOUGHT. SHE IS NOT HOLDING BACK."],floor:"tech",ceil:"ceilTech",par:240,playerAngle:-Math.PI/2,map:["MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM","MMMt........................tMMM","MMM..h..........Y.........h..MMM","MMM..........................MMM","MMM....TT..............TT....MMM","MMM....TT....o....o....TT....MMM","MMM..........................MMM","MMM.a......................a.MMM","MMM....TT..............TT....MMM","MMM....TT.......+......TT....MMM","MMM..........................MMM","MMMt.......o........o.......tMMM","MMMMMMMMMMMMMMMUMMMMMMMMMMMMMMMM","TTTTTTTTTTTTTT...TTTTTTTTTTTTTTT","TTTTTTTTTTTTTTt.tTTTTTTTTTTTTTTT","TTi.....o.......o.....iTTTTTTTTT","TT.....................T..g...TT","TT...g.............g..tTt....tTT","TT.......MM...MM.......D....u.TT","TT..b....MM.h.MM....a.tT.a..h.TT","TT.....................Tt....tTT","TT.................o...T..i...TT","TT.....................TTTTTTTTT","TTTTTTTTTTTTTTTDTTTTTTTTTTTTTTTT","TTTTTTTTTTt.........tTTTTTTTTTTT","TTTTTTTTTT..b..2..a..TTTTTTTTTTT","TTTTTTPA*S...........TTTTTTTTTTT","TTTTTTTTTT.....p.....TTTTTTTTTTT","TTTTTTTTTTt...h.....tTTTTTTTTTTT","TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT"]}];(function(){for(var i=0;i<Ea.length;i++){for(var e=Ea[i].map,t=e[0].length,n=0,r=0;r<e.length;r++){if(e[r].length!==t)throw new Error(Ea[i].name+" row "+r+" width "+e[r].length+" != "+t);for(var s=0;s<t;s++)e[r][s]==="p"&&n++}if(n!==1)throw new Error(Ea[i].name+" has "+n+" player starts")}})();typeof Nu!="undefined"&&(Nu.exports=Ea)});var Ue=_s(nd(),1),_n=_s(id(),1);window.ART=Ue.default;window.SND=_n.default;var Kf=_s(rd(),1);var Ut=_s(Cu(),1);var Dm={"#":1,"%":2,M:3,T:4,H:5,D:6,R:7,U:8,X:9,S:11,"=":12},gi={6:!0,7:!0,8:!0,11:!0},sd=.25,Om=2,Xn=.3,Iu=.55;function ad(i){return i>="0"&&i<="9"?(i.charCodeAt(0)-48)*sd:i>="a"&&i<="z"?(i.charCodeAt(0)-87)*sd:0}function od(i){for(var e=i.map,t=e[0].length,n=e.length,r={mw:t,mh:n,cells:new Uint8Array(t*n),floor:new Float32Array(t*n),ceil:new Float32Array(t*n),doors:{},lifts:[],lava:new Uint8Array(t*n),movers:[]},s=i.ceilHeight||Om,a=0;a<n;a++)for(var o=0;o<t;o++){var c=e[a][o],u=a*t+o,l=Dm[c]||0;r.cells[u]=l,r.floor[u]=i.heights?ad(i.heights[a][o]):0,r.ceil[u]=i.ceilings&&i.ceilings[a][o]!=="."?ad(i.ceilings[a][o]):s,r.ceil[u]<r.floor[u]+1&&(r.ceil[u]=r.floor[u]+1),gi[l]&&(r.doors[o+","+a]={x:o,z:a,open:0,state:"closed",timer:0,locked:l===7?"red":l===8?"blue":null,secret:l===11,found:!1,used:!1}),c==="~"&&(r.lava[u]=1),c==="L"&&r.lifts.push({x:o,z:a,top:r.floor[u],bottom:0,pos:0,state:"down",wait:0})}for(var h in r.doors){var f=r.doors[h],p=1/0,v=0;Ta(r,f.x,f.z).forEach(function(g){r.cells[g.i]===0&&(p=Math.min(p,r.floor[g.i]),v=Math.max(v,r.ceil[g.i]))});var _=f.z*t+f.x;r.floor[_]=p===1/0?0:p,r.ceil[_]=f.secret?v||s:Math.min(v||s,r.floor[_]+1.5)}return r.lifts.forEach(function(g){var m=1/0;Ta(r,g.x,g.z).forEach(function(E){var y=r.cells[E.i]===0||gi[r.cells[E.i]];y&&!Hm(r,E.x,E.z)&&(m=Math.min(m,r.floor[E.i]))}),g.bottom=m===1/0?0:Math.min(m,g.top),g.pos=g.bottom;var x=g.z*t+g.x;r.floor[x]=g.pos,r.ceil[x]=Math.max(r.ceil[x],g.top+1.2)}),r}function Hm(i,e,t){for(var n=0;n<i.lifts.length;n++)if(i.lifts[n].x===e&&i.lifts[n].z===t)return!0;return!1}function Ta(i,e,t){var n=[];return[[1,0],[-1,0],[0,1],[0,-1]].forEach(function(r){var s=e+r[0],a=t+r[1];s>=0&&a>=0&&s<i.mw&&a<i.mh&&n.push({x:s,z:a,i:a*i.mw+s})}),n}function Yn(i,e,t){return e<0||t<0||e>=i.mw||t>=i.mh?1:i.cells[t*i.mw+e]}function Ji(i,e,t){return i.doors[e+","+t]||null}function xr(i,e,t){var n=Yn(i,e,t);if(n===0)return!1;if(gi[n]){var r=Ji(i,e,t);return!r||r.open<.9}return!0}function hn(i,e,t){return i.floor[t*i.mw+e]}function Ni(i,e,t){return i.ceil[t*i.mw+e]}function zr(i,e,t,n,r,s,a){for(var o=Math.floor(e-n),c=Math.floor(e+n),u=Math.floor(t-n),l=Math.floor(t+n),h=-1/0,f=1/0,p=u;p<=l;p++)for(var v=o;v<=c;v++){if(xr(i,v,p))return{blocked:!0};var _=hn(i,v,p),g=Ni(i,v,p);if(_>r+a+1e-4)return{blocked:!0};h=Math.max(h,_),f=Math.min(f,g)}return f<Math.max(r,h)+s-1e-4?{blocked:!0}:{blocked:!1,ground:h,ceil:f}}function Gr(i,e,t,n,r,s,a){var o=!0;return t!==0&&(zr(i,e.x+t,e.z,r,e.y,s,a).blocked?o=!1:e.x+=t),n!==0&&(zr(i,e.x,e.z+n,r,e.y,s,a).blocked?o=!1:e.z+=n),o}function Xo(i,e,t,n){for(var r=Math.floor(e-n),s=Math.floor(e+n),a=Math.floor(t-n),o=Math.floor(t+n),c=-1/0,u=a;u<=o;u++)for(var l=r;l<=s;l++)xr(i,l,u)||(c=Math.max(c,hn(i,l,u)));return c===-1/0?0:c}function Yo(i,e,t,n,r,s,a,o){for(var c=Math.sqrt(r*r+a*a),u=Math.floor(e),l=Math.floor(n),h=c>1e-9?Math.abs(1/r):1e30,f=c>1e-9?Math.abs(1/a):1e30,p=r<0?-1:1,v=a<0?-1:1,_=r<0?(e-u)*h:(u+1-e)*h,g=a<0?(n-l)*f:(l+1-n)*f,m=0,x=0;x<256;x++){var E=Math.min(_,g,o),y=hn(i,u,l),R=Ni(i,u,l);if(s<0){var A=(y-t)/s;if(A>=m-1e-6&&A<=E)return T(A,"floor")}else if(s>0){var P=(R-t)/s;if(P>=m-1e-6&&P<=E)return T(P,"ceil")}if(E>=o)return T(o,"none");if(m=E,_<g?(_+=h,u+=p):(g+=f,l+=v),u<0||l<0||u>=i.mw||l>=i.mh)return T(m,"wall");var M=t+s*m;if(xr(i,u,l)||M<hn(i,u,l)||M>Ni(i,u,l))return T(m,"wall")}return T(o,"none");function T(L,U){return{dist:L,x:e+r*L,y:t+s*L,z:n+a*L,kind:U,cx:u,cz:l}}}function _r(i,e,t,n,r,s,a){var o=r-e,c=s-t,u=a-n,l=Math.sqrt(o*o+c*c+u*u);return l<.001?!0:Yo(i,e,t,n,o/l,c/l,u/l,l).dist>=l-.05}var ys=null;function Pu(i,e,t,n,r,s){var a=i.mw,o=a*i.mh;(!ys||ys.length<o)&&(ys=new Int32Array(o)),s.fill(-1);var c=Math.floor(e),u=Math.floor(t);if(!(c<0||u<0||c>=a||u>=i.mh)){var l=0,h=0;for(s[u*a+c]=0,ys[h++]=u*a+c;l<h;){var f=ys[l++],p=s[f];if(!(p>=n))for(var v=f%a,_=f/a|0,g=0;g<4;g++){var m=v+(g===0?1:g===1?-1:0),x=_+(g===2?1:g===3?-1:0);if(!(m<0||x<0||m>=a||x>=i.mh)){var E=x*a+m;s[E]!==-1||!r(f,m,x)||(s[E]=p+1,ys[h++]=E)}}}}}function ld(i,e,t,n){var r={cells:e,from:i.floor[e[0]],to:t,pos:i.floor[e[0]],speed:n||.8,moved:0,done:!1};return i.movers.push(r),r}function cd(i,e){i.movers.forEach(function(t){var n=t.pos;if(!t.done){var r=t.to>t.pos?1:-1;t.pos+=r*t.speed*e,(r>0&&t.pos>=t.to||r<0&&t.pos<=t.to)&&(t.pos=t.to,t.done=!0),t.cells.forEach(function(s){i.floor[s]=t.pos,i.ceil[s]<t.pos+1&&(i.ceil[s]=t.pos+1)})}t.moved=t.pos-n})}function ud(i,e,t,n){for(var r=0;r<i.lifts.length;r++){var s=i.lifts[r],a=t(s.x,s.z),o=s.pos;s.state==="down"&&a?(s.state="wait",s.wait=.5):s.state==="wait"?(s.wait-=e,s.wait<=0&&(s.state="up",n&&n(s,"start"))):s.state==="up"?(s.pos=Math.min(s.top,s.pos+e*.9),s.pos>=s.top&&(s.state="top",s.wait=2.5,n&&n(s,"stop"))):s.state==="top"?a?s.wait=2.5:(s.wait-=e)<=0&&(s.state="lower",n&&n(s,"start")):s.state==="lower"&&(a&&s.pos>s.bottom+.05?s.state="up":(s.pos=Math.max(s.bottom,s.pos-e*.9),s.pos<=s.bottom&&(s.state="down",n&&n(s,"stop")))),i.floor[s.z*i.mw+s.x]=s.pos,s.moved=s.pos-o}}Ut.default.setWords({weapon:{fist:"EMBER FIST",pistol:"SPARK CASTER",shotgun:"BELL BLASTER"},shotgunShots:"BELL BLASTS",minions:"HOLLOWS"});var fn={r:.28,h:.9,hCrouch:.55,eye:.8,eyeCrouch:.45,walk:3.2,run:5,jumpV:3.9,gravity:14},ba={fist:{ammo:null,rate:.5,melee:!0,dmgMin:8,dmgMax:24,knock:.12},pistol:{ammo:"bullets",rate:.42,pellets:1,spread:.025,dmgMin:5,dmgMax:15,knock:.03,shake:.6},shotgun:{ammo:"shells",rate:.95,pellets:7,spread:.1,dmgMin:5,dmgMax:15,knock:.045,shake:2.2}},ji=["fist","pistol","shotgun"],hd={bullets:"SPARKS",shells:"BELL CHARGES"},fd={fist:"EMBER FIST",pistol:"SPARK CASTER",shotgun:"BELL BLASTER"},Ms={imp:{hp:40,speed:1.7,radius:.35,painChance:.75,ranged:!0,melee:!1,h:.85,attackDmg:[8,20]},gnasher:{hp:110,speed:2.9,radius:.42,painChance:.5,ranged:!1,melee:!0,h:.7,attackDmg:[4,16],fleeBelow:.4},knight:{hp:400,speed:1.9,radius:.48,painChance:.2,ranged:!0,melee:!0,h:1.3,attackDmg:[10,26]},riley:{hp:900,speed:2.4,radius:.4,painChance:.12,ranged:!0,melee:!0,h:.95,attackDmg:[10,20],boss:!0}},dd={i:"imp",g:"gnasher",K:"knight",Y:"riley"},pd={h:{msg:"PICKED UP A LIFE SHARD.",snd:"health"},"+":{msg:"PICKED UP A HEALING CRYSTAL.",snd:"health"},b:{msg:"PICKED UP A SPARK CELL.",snd:"pickup"},a:{msg:"PICKED UP BELL CHARGES.",snd:"pickup"},A:{msg:"PICKED UP A BRASS WARD!",snd:"pickup"},2:{msg:"YOU GOT THE BELL BLASTER!",snd:"weaponUp"},r:{msg:"PICKED UP THE RED KEYSTONE.",snd:"keyPickup"},u:{msg:"PICKED UP THE BLUE KEYSTONE.",snd:"keyPickup"},P:{msg:"PHOENIX ORB! YOU FEEL REBORN!",snd:"orb"}},$i=[{name:"ROOKIE",dmg:.5,ammo:2,desc:"HOLLOWS HIT HALF AS HARD AND AMMO IS DOUBLED. GREAT FOR A FIRST RUN."},{name:"WARRIOR",dmg:1,ammo:1,desc:"THE FIGHT AS IT WAS MEANT TO BE."},{name:"BLAZE",dmg:1.5,ammo:1,desc:"HOLLOWS HIT HARDER. FOR VETERANS WHO KNOW EVERY CORNER."}],md={run:"TIP: HOLD SHIFT TO RUN.",jump:"TIP: SPACE JUMPS. C CROUCHES. LOOK UP AND DOWN WITH THE MOUSE.",map:"TIP: LOST? PRESS TAB FOR THE MAP.",weapons:"TIP: PRESS 1 2 3, OR SCROLL THE MOUSE WHEEL, TO SWITCH WEAPONS. Q SWAPS BACK.",key:"TIP: THE MATCHING DOOR IS MARKED IN COLOR ON YOUR MAP (TAB).",lowAmmo:"TIP: LOW ON AMMO? YOUR EMBER FIST (1) NEVER RUNS OUT, AND IT IS SILENT.",lowHealth:"TIP: LOW HEALTH! BACK OFF AND LOOK FOR LIFE SHARDS AND HEALING CRYSTALS.",hurtDir:"TIP: THE RED MARKS AROUND YOUR AIM POINT AT WHATEVER HIT YOU.",secret:"TIP: CRACKED WALLS HIDE PIECES OF THE TRUE MAP. PRESS E ON THEM.",torches:"TIP: A PAIR OF TORCHES BESIDE A DOOR MEANS IT MATTERS. FOLLOW THEM.",lift:"TIP: STAND ON A GLOWING PLATFORM TO RIDE IT UP.",barrel:"TIP: A HOLLOW IS NEXT TO A MERCURY CASK. SHOOT THE CASK!",lava:"TIP: RED MERCURY BURNS! GET OUT, OR FIND A WAY TO DRAIN IT.",meet_imp:"TIP: HOLLOWS THROW MERCURY EMBERS. STRAFE WITH A AND D TO DODGE.",meet_gnasher:"TIP: HOLLOW HOUNDS CHARGE AND BITE. BACK AWAY WHILE YOU SHOOT.",meet_knight:"TIP: THE RESET WARDEN IS TOUGH. KEEP YOUR DISTANCE AND RING THE BELL BLASTER."};function Lu(i){i=i||{};var e=i.levels,t=i.rng||Math.random,n=i.storage||null,r=i.settings||{difficulty:1,tips:!1,seenTips:{}},s=i.onProgress||function(){},a={},o=!1,c="title",u=0,l=null,h=null,f={};function p(){return t()}function v(d,S){return d+t()*(S-d)}function _(d,S,k){return d<S?S:d>k?k:d}function g(d,S,k,fe){var $=d-k,oe=S-fe;return $*$+oe*oe}function m(){return $i[r.difficulty]||$i[1]}function x(d,S,k,fe,$,oe){var Se={t:d,name:S,x:k,y:fe,z:$};if(oe)for(var Ee in oe)Se[Ee]=oe[Ee];l.events.push(Se)}function E(d,S){S?x("sound",d,S.x,(S.y||0)+.5,S.z):x("sound",d,l.p.x,l.p.y+.8,l.p.z,{local:!0})}function y(d,S,k,fe){var $=Ms[d];return{kind:d,mob:!0,x:S,z:k,y:fe,hp:$.hp,radius:$.radius,speed:$.speed,h:$.h,state:"idle",st:0,animT:p(),cool:v(.5,1.5),moveAng:0,retarget:0,losT:p()*.3,los:!1,target:null,lostT:0,fleeNext:!1,strafeSide:p()<.5?1:-1,flashT:0}}function R(d){var S=d.map.join("");return{boss:S.indexOf("Y")>=0,levers:d.levers||[],keys:{red:S.indexOf("R")>=0||S.indexOf("r")>=0,blue:S.indexOf("U")>=0||S.indexOf("u")>=0}}}function A(d){return{hp:Math.max(d.hp,1),armor:d.armor,ammo:{bullets:d.ammo.bullets,shells:d.ammo.shells},shotgun:d.weapons.shotgun,weapon:d.weapon}}function P(d,S,k){u=d;var fe=e[d],$=od(fe),oe=fe.map;ie=fe;var Se=k||(S&&l?A(l.p):null),Ee={x:0,z:0,y:0,ang:fe.playerAngle||0,pitch:0,vx:0,vz:0,vy:0,onGround:!0,crouch:!1,eyeH:fn.eye,hp:Se?Se.hp:100,armor:Se?Se.armor:0,ammo:Se?{bullets:Se.ammo.bullets,shells:Se.ammo.shells}:{bullets:50,shells:0},weapons:{fist:!0,pistol:!0,shotgun:Se?Se.shotgun:!1},keys:{red:!1,blue:!1},weapon:Se&&Se.shotgun?Se.weapon:"pistol",nextWeapon:null,prevWeapon:null,raiseT:.3,lowerT:0,cool:0,fireT:1,dead:!1,deadT:0,painT:0,grinT:0,dmgFlash:0,bonusFlash:0,jumpHeld:!1,landT:0};N(Ee,Ee.weapon)||(Ee.weapon=I(Ee));for(var Pe=[],je=[],$e=null,ut=0;ut<oe.length;ut++)for(var Tt=0;Tt<oe[0].length;Tt++){var bt=oe[ut][Tt],cn=Tt+.5,Ht=ut+.5,Ct=hn($,Tt,ut);if(bt==="p")Ee.x=cn,Ee.z=Ht,Ee.y=Ct;else if(dd[bt]){var un=y(dd[bt],cn,Ht,Ct);un.kind==="riley"&&b(un),Pe.push(un)}else bt==="o"?Pe.push({kind:"barrel",mob:!0,barrel:!0,x:cn,z:Ht,y:Ct,hp:15,radius:.3,h:.55,state:"idle",st:0}):bt==="t"?Pe.push({kind:"torch",x:cn,z:Ht,y:Ct,h:.95,animT:p()}):pd[bt]?Pe.push({kind:"pickup",item:bt,x:cn,z:Ht,y:Ct,h:.3,bob:p()*6}):bt==="*"&&je.push({x:Tt,z:ut,found:!1});bt==="X"&&($e={x:Tt,z:ut})}var w=0,Z=0;return Pe.forEach(function(re){re.mob&&!re.barrel&&w++,re.kind==="pickup"&&Z++}),l={L:fe,W:$,mw:$.mw,mh:$.mh,doors:$.doors,ents:Pe,p:Ee,secrets:je,seen:new Uint8Array($.mw*$.mh),msgs:[],events:[],time:0,notice:null,stats:{kills:0,totalKills:w,items:0,totalItems:Z,secrets:0,totalSecrets:je.length},exitT:-1,flow:new Int16Array($.mw*$.mh),flowT:0,infightSeen:!1,boss:null,shotId:0,firing:!1,input:{strafe:0,moving:!1,vx:0,vz:0},startGear:Se,info:R(fe),exitCell:$e,hurtDirs:[],hitT:0,killT:0,blockT:0,shake:0,hitstop:0,killer:null,tipQueue:[],tipT:3,usedMap:!1,ranT:0,jumped:!1,spotT:0,started:!0,fired:{},waves:{},lightsOff:{},lavaT:0,timers:[]},Pe.forEach(function(re){re.kind==="riley"&&(l.boss=re)}),c="game",K("start"),L(V(),"#f0d848",3.5),l}function M(){var d=l.startGear;d&&(d={hp:Math.max(d.hp,100),armor:d.armor,ammo:{bullets:Math.max(d.ammo.bullets,50),shells:d.shotgun?Math.max(d.ammo.shells,8):d.ammo.shells},shotgun:d.shotgun,weapon:d.weapon}),P(u,!1,d)}function T(d,S,k){l.msgs.push({text:d,t:k||3,color:S}),l.msgs.length>4&&l.msgs.shift()}function L(d,S,k){l.notice={text:d,color:S||"#f0d848",t:k||2.5,max:k||2.5}}function U(d){l&&(l.shake=Math.min(6,Math.max(l.shake,d)))}function D(d){!l||!r.tips||r.seenTips&&r.seenTips[d]||l.tipQueue.indexOf(d)<0&&l.tipQueue.push(d)}function Y(d){if(l.tipT-=d,!(l.tipT>0||!l.tipQueue.length)){var S=l.tipQueue.shift();r.seenTips[S]||(r.seenTips[S]=!0,i.saveSettings&&i.saveSettings(),T(md[S],"#8fe0a0",6),l.tipT=7)}}function V(){if(!l)return"";var d=l.info,S=l.p;if(d.keys.blue&&!S.keys.blue)return"FIND THE BLUE KEYSTONE";if(d.keys.red&&!S.keys.red)return"FIND THE RED KEYSTONE";var k=C();return k.length?(l.L.leverGoal||"PULL THE LEVERS")+" ("+(d.levers.length-k.length)+"/"+d.levers.length+")":d.boss?"DEFEAT RILEY":"RELIGHT THE WAYSTONE"}function C(){return l.info.levers.filter(function(d){return l.W.cells[d[1]*l.mw+d[0]]===12})}function N(d,S){var k=ba[S];return!k.ammo||d.ammo[k.ammo]>0}function I(d){for(var S=ji.length-1;S>=0;S--){var k=ji[S];if(d.weapons[k]&&N(d,k))return k}return"fist"}function O(d,S){if(c!=="game"||!l||l.p.dead)return!1;var k=l.p;return k.weapons[d]?N(k,d)?d===k.weapon?(k.nextWeapon&&!(k.lowerT>0)&&(k.nextWeapon=null),!1):d===k.nextWeapon?!1:(k.prevWeapon=k.weapon,k.nextWeapon=d,k.autoFist=!1,!0):(S||(T("NO "+hd[ba[d].ammo]+" FOR THE "+fd[d]+"."),E("noAmmo")),!1):(S||T("YOU HAVEN'T FOUND THE "+fd[d]+" YET."),!1)}function W(d){for(var S=l.p,k=ji.indexOf(S.nextWeapon||S.weapon),fe=1;fe<ji.length;fe++){var $=ji[(k+d*fe+ji.length*2)%ji.length];if(S.weapons[$]&&N(S,$)){O($,!0);return}}}function ee(){var d=l.p;d.prevWeapon&&d.prevWeapon!==d.weapon&&d.weapons[d.prevWeapon]&&N(d,d.prevWeapon)?O(d.prevWeapon,!0):W(-1)}function ne(){return l.p.y+l.p.eyeH}function Ae(d,S){return Math.sqrt(g(d,S,l.p.x,l.p.z))}function Ne(d,S,k,fe,$,oe){for(var Se=l.p,Ee=Math.cos(S),Pe=Math.cos(d)*Ee,je=Math.sin(d)*Ee,$e=Math.sin(S),ut=Se.x,Tt=ne(),bt=Se.z,cn=$?1.4:40,Ht=Yo(l.W,ut,Tt,bt,Pe,$e,je,cn),Ct=null,un=Ht.dist+.05,w=0;w<l.ents.length;w++){var Z=l.ents[w];if(!(!Z.mob||Z.state==="die"||Z.state==="dead"||Z.gone)){var re=lt(ut,Tt,bt,Pe,$e,je,Z);re!==null&&re>.1&&re<un&&(Ct=Z,un=re)}}var ae=k+p()*(fe-k)|0;if(Ct){if(ct(Ct,ae),!Ct.barrel){Ct.kind==="riley"&&Ct.shieldT>0?l.blockT=.2:Ct.state==="die"?(l.killT=.3,l.hitstop=Math.max(l.hitstop,.045)):l.hitT=Math.max(l.hitT,.14);var ce=Ms[Ct.kind];if(oe&&!ce.boss){var He=oe*(ce.hp>200?.25:1);Gr(l.W,Ct,Math.cos(d)*He,Math.sin(d)*He,Ct.radius,Ct.h,Xn)}}var Be=ut+Pe*un,Le=Tt+$e*un,We=bt+je*un;x("fx",Ct.barrel||Ct.kind==="riley"?"spark":"blood",Be,Le,We,{dx:-Pe,dy:-$e,dz:-je,kill:Ct.state==="die",floorY:Ct.y}),$||x("fx","tracer",ut,Tt,bt,{x2:Be,y2:Le,z2:We}),!Ct.barrel&&Ct.kind!=="riley"&&E(Ct.state==="die"?"killConfirm":"hitFlesh")}else!$&&Ht.kind!=="none"?(x("fx","puff",Ht.x-Pe*.03,Ht.y-$e*.03,Ht.z-je*.03,{surface:Ht.kind,dx:Pe,dy:$e,dz:je,cell:Yn(l.W,Ht.cx,Ht.cz)}),x("fx","tracer",ut,Tt,bt,{x2:Ht.x,y2:Ht.y,z2:Ht.z}),p()<.35&&E("ricochet",{x:Ht.x,y:Ht.y,z:Ht.z})):$&&E("whiff");return Ct}function lt(d,S,k,fe,$,oe,Se){var Ee=Se.radius+.06,Pe=d-Se.x,je=k-Se.z,$e=fe*fe+oe*oe,ut=2*(Pe*fe+je*oe),Tt=Pe*Pe+je*je-Ee*Ee;if($e<1e-9)return null;var bt=ut*ut-4*$e*Tt;if(bt<0)return null;var cn=Math.sqrt(bt),Ht=(-ut-cn)/(2*$e),Ct=(-ut+cn)/(2*$e),un=Ht>0?Ht:Ct;if(un<0)return null;var w=S+$*un;if(w>=Se.y&&w<=Se.y+Se.h)return un;if(Math.abs($)>1e-6){var Z=(($<0?Se.y+Se.h:Se.y)-S)/$;if(Z>0){var re=d+fe*Z-Se.x,ae=k+oe*Z-Se.z;if(re*re+ae*ae<=Ee*Ee)return Z}}return null}function qe(d){return!!d&&!d.gone&&d.state!=="die"&&d.state!=="dead"}function ct(d,S,k){if(!(d.state==="die"||d.state==="dead")&&!(d.kind==="riley"&&Te(d,k))){if(d.resting&&(S*=Ut.default.REST_HURT),d.hp-=S,d.flashT=.07,d.barrel){d.blame=qe(k)?k:null,d.hp<=0&&d.state!=="boom"&&(d.state="boom",d.st=.08);return}var fe=Ms[d.kind];X(d),fe.boss||(k&&k!==d&&qe(k)&&!k.barrel?(d.target!==k&&!l.infightSeen&&Ae(d.x,d.z)<14&&(l.infightSeen=!0,T("THE HOLLOWS TURN ON EACH OTHER!")),d.target=k,d.lostT=0):k||(d.target=null)),d.hp<=0?(d.state="die",d.st=0,l.stats.kills++,fe.boss||E("enemyDie",d),x("fx","gib",d.x,d.y+d.h*.6,d.z,{kind:d.kind})):p()<fe.painChance&&!(fe.boss&&d.state==="windup")&&(d.state="pain",d.st=fe.boss?.25:.35,fe.fleeBelow&&d.hp<fe.hp*fe.fleeBelow&&(d.fleeNext=!0),E("enemyPain",d)),d.kind==="riley"&&Ie(d)}}function me(d){d.state="dead",d.dead=!0,d.gone=!0,E("barrelBoom",d),x("fx","explosion",d.x,d.y+.3,d.z);for(var S=2.3,k=qe(d.blame)?d.blame:null,fe=0;fe<l.ents.length;fe++){var $=l.ents[fe];if(!(!$.mob||$===d||$.state==="dead"||$.state==="die")){var oe=Math.sqrt(g($.x,$.z,d.x,d.z)+Math.pow($.y-d.y,2));oe<S&&_r(l.W,d.x,d.y+.3,d.z,$.x,$.y+$.h/2,$.z)&&($.barrel?$.state!=="boom"&&($.state="boom",$.st=v(.1,.25),$.blame=k):ct($,(S-oe)/S*90|0,k))}}nt(d.x,d.z,10);var Se=Math.sqrt(g(l.p.x,l.p.z,d.x,d.z)+Math.pow(l.p.y-d.y,2));U(6/(1+Se*.35)),Se<S&&_r(l.W,d.x,d.y+.3,d.z,l.p.x,ne(),l.p.z)&&_e((S-Se)/S*70|0,d)}function _e(d,S){var k=l.p;if(!(k.dead||d<=0||l.exitT>=0)){if(d=Math.max(1,Math.round(d*m().dmg)),S){var fe=Math.atan2(S.z-k.z,S.x-k.x);l.hurtDirs.push({ang:fe,t:1}),l.hurtDirs.length>6&&l.hurtDirs.shift();var $=Math.atan2(Math.sin(fe-k.ang),Math.cos(fe-k.ang));Math.abs($)>.9&&D("hurtDir"),l.killer=S.kind}var oe=Math.min(k.armor,Math.ceil(d/3));k.armor-=oe,d-=oe,k.hp-=d,k.dmgFlash=Math.min(.65,k.dmgFlash+d/55),U(Math.min(4,1+d/8)),k.painT=.6,k.hp<=0?(k.hp=0,k.dead=!0,k.deadT=0,E("playerDie"),ge(l.boss)&&(B(l.boss,Ut.default.line("playerDied",l.boss.profile)),B(l.boss,Ut.default.line("noticed",l.boss.profile)),H(l.boss,!1))):(E("playerPain"),k.hp<30&&D("lowHealth"))}}function we(d,S,k,fe,$,oe,Se){var Ee=d.y+d.h*.65,Pe=k-d.x,je=fe-Ee,$e=$-d.z,ut=Math.sqrt(Pe*Pe+je*je+$e*$e)||1,Tt=oe||(S?5.5:7);l.ents.push({kind:"proj",x:d.x+Pe/ut*.5,y:Ee+je/ut*.5,z:d.z+$e/ut*.5,vx:Pe/ut*Tt,vy:je/ut*Tt,vz:$e/ut*Tt,h:.2,green:!!S,animT:0,owner:d,dmg:Se||(S?v(10,28):v(7,20))}),E(d.kind==="riley"?"rileyShoot":"impShoot",d)}function it(d,S,k){return!xr(l.W,S,k)}function ze(d,S,k){var fe=l.W,$=Yn(fe,S,k);if($!==0){if(!gi[$])return!1;var oe=Ji(fe,S,k);if(!(oe.open>=.9||!oe.locked&&!oe.secret))return!1}return fe.floor[k*fe.mw+S]-fe.floor[d]<=Xn+1e-4}function nt(d,S,k){var fe=new Int16Array(l.mw*l.mh);Pu(l.W,d,S,k,it,fe);for(var $=0;$<l.ents.length;$++){var oe=l.ents[$];!oe.mob||oe.barrel||oe.state!=="idle"||Ms[oe.kind].boss||fe[Math.floor(oe.z)*l.mw+Math.floor(oe.x)]>=0&&X(oe)}}function X(d){d.state==="idle"&&(d.state="chase",d.st=0,E(d.kind==="knight"?"knightSight":d.kind==="riley"?"rileySight":"impSight",d))}function Q(){Pu(l.W,l.p.x,l.p.z,9999,function(d,S,k){var fe=d,$=l.W,oe=Yn($,S,k);if(oe!==0){if(!gi[oe])return!1;var Se=Ji($,S,k);if(Se.sealed||!(Se.open>=.9||!Se.locked&&!Se.secret))return!1}return $.lava[k*$.mw+S]?!1:$.floor[fe]-$.floor[k*$.mw+S]<=Xn+1e-4},l.flow)}function xe(d){var S=l.mw,k=Math.floor(d.x),fe=Math.floor(d.z),$=l.flow[fe*S+k];if($<=0)return null;for(var oe=-1,Se=-1,Ee=0;Ee<4;Ee++){var Pe=k+(Ee===0?1:Ee===1?-1:0),je=fe+(Ee===2?1:Ee===3?-1:0);if(!(Pe<0||je<0||Pe>=S||je>=l.mh)){var $e=l.flow[je*S+Pe];$e>=0&&$e<$&&($=$e,oe=Pe,Se=je)}}return oe<0?null:Math.atan2(Se+.5-d.z,oe+.5-d.x)}function Me(d,S){d.state==="closed"||d.state==="closing"?(d.state="opening",S&&(d.used=!0),E("doorOpen",{x:d.x+.5,y:hn(l.W,d.x,d.z),z:d.z+.5}),d.secret&&!d.found&&(d.found=!0)):S&&d.state==="open"&&(d.state="closing",E("doorClose",{x:d.x+.5,y:hn(l.W,d.x,d.z),z:d.z+.5}))}function le(d,S,k,fe,$){return d+k>fe&&d-k<fe+1&&S+k>$&&S-k<$+1}function se(d){if(le(l.p.x,l.p.z,fn.r,d.x,d.z))return!0;for(var S=0;S<l.ents.length;S++){var k=l.ents[S];if(k.mob&&!k.barrel&&k.state!=="dead"&&k.state!=="die"&&le(k.x,k.z,k.radius,d.x,d.z))return!0}return!1}function te(d){for(var S in l.doors){var k=l.doors[S];if(k.state==="opening")k.open+=d*1.6,k.open>=1&&(k.open=1,k.state="open",k.timer=k.secret?9999:4);else if(k.state==="open")k.timer-=d,k.timer<=0&&!se(k)&&(k.state="closing",E("doorClose",{x:k.x+.5,y:0,z:k.z+.5}));else if(k.state==="closing"){if(se(k)){k.state="opening";continue}k.open-=d*1.6,k.open<=0&&(k.open=0,k.state="closed")}}}function ye(d,S,k){return le(d.x,d.z,(d.radius||fn.r)*.7,S,k)&&Math.abs(d.y-hn(l.W,S,k))<.05}function De(d){var S=l.p;ud(l.W,d,function(k,fe){if(ye(S,k,fe))return!0;for(var $=0;$<l.ents.length;$++){var oe=l.ents[$];if(oe.mob&&qe(oe)&&ye(oe,k,fe))return!0}return!1},function(k,fe){E(fe==="start"?"doorOpen":"doorClose",{x:k.x+.5,y:k.pos,z:k.z+.5})}),l.W.lifts.forEach(function(k){k.moved&&[S].concat(l.ents).forEach(function(fe){(fe===S||fe.mob&&qe(fe))&&le(fe.x,fe.z,(fe.radius||fn.r)*.7,k.x,k.z)&&Math.abs(fe.y-(k.pos-k.moved))<.06&&(fe.y=k.pos)})})}function Ke(){for(var d=l.p,S=Math.cos(d.ang),k=Math.sin(d.ang),fe=.4;fe<=1.3;fe+=.3){var $=Math.floor(d.x+S*fe),oe=Math.floor(d.z+k*fe),Se=Yn(l.W,$,oe);if(Se!==0){if(gi[Se]){var Ee=Ji(l.W,$,oe);if(Ee.open>=.9&&Ee.state==="open"&&Math.floor(d.x)===$&&Math.floor(d.z)===oe)continue;return{kind:"door",door:Ee}}return Se===9?{kind:"switch",x:$,z:oe}:Se===12?{kind:"lever",x:$,z:oe}:null}}return null}function q(){if(!l||l.p.dead||l.exitT>=0)return null;var d=Ke();if(!d)return null;if(d.kind==="switch")return{verb:"RELIGHT THE WAYSTONE",color:"#6fe0ec"};if(d.kind==="lever")return{verb:"PULL THE SWITCH",color:"#ffd23e"};var S=d.door;return S.secret&&!S.found?null:S.locked&&!l.p.keys[S.locked]?{need:S.locked,text:S.locked.toUpperCase()+" KEYSTONE NEEDED",color:S.locked==="red"?"#ff5a3a":"#6a98ff"}:S.state==="closed"||S.state==="closing"?{verb:"OPEN",color:"#e8e0c8"}:null}function dt(){var d=Ke();if(d){var S=l.p;if(d.kind==="door"){var k=d.door;k.sealed?(E("locked"),T("SEALED. SURVIVE!","#ff9a28")):k.locked&&!S.keys[k.locked]?(E("locked"),T("YOU NEED THE "+k.locked.toUpperCase()+" KEYSTONE."),D("key")):Me(k,!0)}else d.kind==="lever"?(l.W.cells[d.z*l.mw+d.x]=13,E("switchFlip"),K("use",d.x+","+d.z)):d.kind==="switch"&&(l.W.cells[d.z*l.mw+d.x]=10,E("switchFlip"),L("LEVEL COMPLETE!","#58e068",2),l.exitT=.8)}}function Ge(d){d.y=Xo(l.W,d.x,d.z,d.radius)}function F(d,S){var k=l.p,fe=Ms[d.kind];d.animT+=S,d.st-=S,d.cool-=S,d.flashT-=S,d.target&&!qe(d.target)&&(d.target=null,d.cool=Math.min(d.cool,.4));var $=d.target,oe=$?$.x:k.x,Se=$?$.z:k.z,Ee=$?$.y+$.h*.6:k.y+k.eyeH*.8;d.losT-=S,d.losT<=0&&(d.losT=.2+p()*.1,d.los=_r(l.W,d.x,d.y+d.h*.8,d.z,oe,Ee,Se));var Pe=oe-d.x,je=Se-d.z,$e=Math.sqrt(Pe*Pe+je*je);if($&&(d.lostT=d.los?0:d.lostT+S,d.lostT>4)){d.target=null,d.lostT=0;return}if(d.state==="idle"){d.los&&$e<9&&!k.dead&&X(d);return}if(d.state==="pain"){d.st<=0&&(d.fleeNext?(d.fleeNext=!1,d.state="flee",d.st=v(.9,1.6),d.moveAng=Math.atan2(-je,-Pe)+v(-.6,.6)):d.state="chase");return}if(d.state==="flee"){Gr(l.W,d,Math.cos(d.moveAng)*d.speed*1.1*S,Math.sin(d.moveAng)*d.speed*1.1*S,d.radius,d.h,Xn)||(d.moveAng+=(p()<.5?1:-1)*Math.PI/2),Ge(d),d.st<=0&&(d.state="chase",d.cool=0,d.retarget=0,E("impSight",d));return}if(d.state==="die"){d.st<=-.5&&(d.state="dead");return}if(d.state!=="dead"){if(d.state==="windup"){if(d.st<=0){if(d.state="chase",!$&&k.dead)return;if(fe.melee&&$e<1.9&&Math.abs(Ee-(d.y+d.h*.5))<1.2){if(d.los){var ut=fe.attackDmg[0]+p()*(fe.attackDmg[1]-fe.attackDmg[0])|0;$?ct($,ut,d):_e(ut,d),E("punch",d)}}else fe.ranged&&d.los&&we(d,d.kind==="knight",oe,Ee,Se);d.cool=v(.9,1.9)}return}if(!(!$&&k.dead)){d.detourT=(d.detourT||0)-S,d.pathT=(d.pathT||0)-S;var Tt=!$&&Math.abs(k.y-d.y)>Xn,bt=!$&&(!d.los||d.pathT>0||Tt)&&d.detourT<=0?xe(d):null;if(d.retarget-=S,bt!==null)d.moveAng=bt;else if(d.retarget<=0){d.retarget=v(.35,.8);var cn=Math.atan2(je,Pe);fe.ranged&&!fe.melee&&d.los&&$e<7?(p()<.3&&(d.strafeSide=-d.strafeSide),d.moveAng=cn+d.strafeSide*v(1.1,1.8)):d.moveAng=cn+($e>2.2?v(-.7,.7):v(-.25,.25))}var Ht=fe.melee?.95:1.6;if($e>Ht){var Ct=d.x,un=d.z,w=Gr(l.W,d,Math.cos(d.moveAng)*d.speed*S,Math.sin(d.moveAng)*d.speed*S,d.radius,d.h,Xn);if(!w&&bt!==null){var Z=Math.floor(d.x)+.5-d.x,re=Math.floor(d.z)+.5-d.z;Gr(l.W,d,Z*Math.min(1,S*6),re*Math.min(1,S*6),d.radius,d.h,Xn)}else if(!w){var ae=Math.floor(d.x+Math.cos(d.moveAng)*.7),ce=Math.floor(d.z+Math.sin(d.moveAng)*.7),He=Ji(l.W,ae,ce);He&&!He.locked&&!He.secret&&!He.sealed&&He.state==="closed"&&Me(He,!1),d.moveAng+=(p()<.5?1:-1)*Math.PI/2*v(.6,1.2),d.retarget=v(.25,.5),d.pathT=.8}for(var Be=0;Be<l.ents.length;Be++){var Le=l.ents[Be];if(!(Le===d||!Le.mob||Le.state==="dead"||Le.state==="die"||Le.gone)){var We=d.x-Le.x,Xe=d.z-Le.z,ht=We*We+Xe*Xe,gt=d.radius+(Le.radius||.3);if(ht>1e-4&&ht<gt*gt&&Math.abs(Le.y-d.y)<.5){var Ye=Math.sqrt(ht),Mt=(gt-Ye)*.5;zr(l.W,d.x+We/Ye*Mt,d.z+Xe/Ye*Mt,d.radius,d.y,d.h,Xn).blocked||(d.x+=We/Ye*Mt,d.z+=Xe/Ye*Mt)}}}var nn=g(d.x,d.z,Ct,un),Gt=d.speed*S*.3;d.stuckT=nn<Gt*Gt?(d.stuckT||0)+S:0,d.stuckT>.4&&(d.stuckT=0,d.detourT=v(.5,.9),d.moveAng+=(p()<.5?1:-1)*Math.PI/2,d.retarget=d.detourT),Ge(d)}d.cool<=0&&d.los&&(fe.melee&&$e<1.4&&Math.abs(Ee-(d.y+d.h*.5))<1.2?(d.state="windup",d.st=.35):fe.ranged&&$e>1.2&&$e<14&&p()<S*1.4&&(d.state="windup",d.st=.45))}}}function b(d){var S=Ut.default.recall(n);d.mem=S,d.tune=Ut.default.tuning(S);var k=ue();d.sparring=!!(k&&k.sparring),d.allowed=k&&k.moves?k.moves:null,d.hp=d.maxHp=Math.round(Ms.riley.hp*d.tune.hpScale*(k&&k.hpScale||1)),d.profile=Ut.default.newProfile(),d.phase=1,d.cools={volley:1,lead:3,summon:8,shield:5,melee:0},d.move=null,d.moveT=0,d.shieldT=0,d.talkT=0,d.flankSide=1,d.attack=null,d.settled=!1,d.sinceRest=0,d.resting=!1,d.restT=0}var ie=null;function ue(){return ie&&ie.boss}function ge(d){return!!d&&d.state!=="idle"&&qe(d)}function B(d,S,k){return!S||k&&d.talkT>0?!1:(T("RILEY: "+S,"#6fe0ec",Math.max(4.5,S.length/14)),E("rileyTalk"),d.talkT=3.5,!0)}function G(d){var S=d.mem,k=l.L.boss;if(d.sparring&&k&&k.intro&&!(S.fights>0)){B(d,k.intro);return}B(d,Ut.default.line("intro",d.profile,{memory:S.fights>0?S:null})),S.lossStreak>=3?B(d,Ut.default.line("mercy",d.profile,{lower:r.difficulty>0&&$i[r.difficulty-1]?$i[r.difficulty-1].name:null})):S.ease>0?B(d,Ut.default.line("ease",d.profile)):d.tune.practised&&B(d,Ut.default.line("studied",d.profile,{wins:S.wins}))}function H(d,S){d.settled||(d.settled=!0,Ut.default.save(n,Ut.default.settle(d.mem,d.profile,S)))}function z(){var d=0;return l.ents.forEach(function(S){S.summoned&&qe(S)&&d++}),d}function j(d){for(var S=0,k=0;k<30&&S<2;k++){var fe=p()*Math.PI*2,$=v(1.5,3.5),oe=d.x+Math.cos(fe)*$,Se=d.z+Math.sin(fe)*$,Ee=Xo(l.W,oe,Se,.3);if(!(zr(l.W,oe,Se,.4,Ee,.85,0).blocked||Ae(oe,Se)<3||!_r(l.W,d.x,d.y+.5,d.z,oe,Ee+.5,Se))){var Pe=y("imp",oe,Se,Ee);Pe.summoned=!0,Pe.state="chase",l.ents.push(Pe),l.stats.totalKills++,x("fx","summon",oe,Ee+.4,Se),S++}}S&&(B(d,Ut.default.line("summon",d.profile)),E("rileySight",d)),d.cools.summon=18*d.tune.coolScale}function de(d,S,k,fe){var $={los:d.los,dist:S,phase:d.phase,cool:d.cools,impsAlive:z(),playerWeapon:l.p.weapon,sinceRest:d.sinceRest},oe=Ut.default.legalMoves($);if(d.allowed){var Se=oe.filter(function(je){return d.allowed.indexOf(je)>=0});Se.length&&(oe=Se)}var Ee=Ut.default.choose(oe,d.profile,$,t);d.move=Ee.move,B(d,Ut.default.insight(d.profile,Ee.why),!0);var Pe=d.profile;switch(Ee.move){case"volley":case"lead":d.state="windup",d.attack=Ee.move,d.st=Ee.move==="volley"?.55:Ut.default.TELL_MIN,d.moveT=d.st+.2;break;case"backoff":d.moveT=1,d.moveAng=Math.atan2(-fe,-k)+v(-.5,.5);break;case"flank":d.flankSide=Ut.default.strafeHabit(Pe)>.3?Ut.default.strafeSide(Pe):p()<.5?1:-1,d.moveT=1.3;break;case"close":d.moveT=1.2;break;case"seek":d.moveT=.8;break;case"summon":j(d),d.moveT=.8;break;case"rest":d.resting=!0,d.restT=d.moveT=Ut.default.REST_TIME,d.sinceRest=0,d.shieldT=0,Pe.said.rest||(Pe.said.rest=!0,B(d,Ut.default.line("rest",Pe)));break;case"shield":d.shieldT=1.6,d.moveT=1.2,d.cools.shield=8*d.tune.coolScale,E("rileyShield",d);break}}function he(d,S){var k=l.p,fe=d.tune,$=fe.coolScale*(d.phase>=3?.7:1);if(d.attack==="melee"){S<1.9&&d.los&&(_e(v(10,20)*fe.dmgScale|0,d),E("punch",d)),d.cools.melee=1.2;return}if(d.los){var oe=k.y+k.eyeH*.8,Se=Math.atan2(k.z-d.z,k.x-d.x);if(d.attack==="volley"){for(var Ee=-1;Ee<=1;Ee++){var Pe=Se+Ee*.2;we(d,!0,d.x+Math.cos(Pe)*S,oe,d.z+Math.sin(Pe)*S,6.5,v(8,16)*fe.dmgScale)}d.cools.volley=v(1.6,2.4)*$}else if(d.attack==="lead"){var je=9,$e=S/je;we(d,!0,k.x+l.input.vx*$e,oe,k.z+l.input.vz*$e,je,v(10,18)*fe.dmgScale),d.cools.lead=v(1.8,2.8)*$}}}function pe(d,S){var k=l.p,fe=d.profile;d.animT+=S,d.st-=S,d.talkT-=S,d.shieldT-=S,d.moveT-=S,d.flashT-=S,d.restT-=S;for(var $ in d.cools)d.cools[$]-=S;d.losT-=S,d.losT<=0&&(d.losT=.15,d.los=_r(l.W,d.x,d.y+d.h*.85,d.z,k.x,ne(),k.z));var oe=k.x-d.x,Se=k.z-d.z,Ee=Math.sqrt(oe*oe+Se*Se);if(d.state==="idle"){d.los&&!k.dead&&(X(d),G(d));return}if(d.state==="die"){d.st<=-1.2&&(d.state="dead");return}if(!(d.state==="dead"||k.dead)){if(Ut.default.observe(fe,{dt:S,los:d.los,dist:Ee,strafe:l.input.strafe,moving:l.input.moving}),d.resting||(d.sinceRest+=S),d.state==="pain"){d.st<=0&&(d.state="chase");return}if(d.state==="windup"){d.st<=0&&(d.state="chase",he(d,Ee));return}if(d.resting){if(d.restT>0)return;d.resting=!1}if(Ee<1.3&&d.los&&d.cools.melee<=0){d.state="windup",d.attack="melee",d.st=Ut.default.TELL_MIN;return}if(!(d.moveT<=0&&(de(d,Ee,oe,Se),d.state==="windup"))){var Pe=Math.atan2(Se,oe),je=null;switch(d.move){case"backoff":je=d.moveAng;break;case"close":je=Pe;break;case"flank":case"shield":je=Pe+d.flankSide*1.35;break;case"seek":je=xe(d),je===null&&(je=Pe);break}if(je!==null){var $e=d.speed*(d.phase>=3?1.25:1)*S;Gr(l.W,d,Math.cos(je)*$e,Math.sin(je)*$e,d.radius,d.h,Xn)||(d.flankSide=-d.flankSide,d.moveAng+=Math.PI/2),Ge(d)}}}}function Te(d,S){if(d.shieldT>0)return x("fx","spark",d.x,d.y+.5,d.z),E("rileyShield",d),!0;if(l.firing&&d.lastShot!==l.shotId&&(d.lastShot=l.shotId,d.profile.hits++),S&&!S.barrel&&S.kind==="imp"){var k=S.target===d?"impsTurned":"friendlyFire";d.profile.said[k]||(d.profile.said[k]=!0,B(d,Ut.default.line(k,d.profile)))}return!1}function Ie(d){if(d.hp<=0){E("rileyDerez",d),B(d,Ut.default.line("defeated",d.profile)),d.sparring&&T("RILEY: THAT WAS JUST PRACTICE. I'LL REMEMBER HOW YOU FIGHT.","#6fe0ec",6),H(d,!0),l.exitT=d.sparring?6.5:5;return}d.sparring||(d.phase<3&&d.hp<d.maxHp*.33?(d.phase=3,B(d,Ut.default.line("phase3",d.profile))):d.phase<2&&d.hp<d.maxHp*.66&&(d.phase=2,B(d,Ut.default.line("phase2",d.profile)),j(d)))}function Ze(d){for(var S=[],k=d[1];k<=d[3];k++)for(var fe=d[0];fe<=d[2];fe++)fe>=0&&k>=0&&fe<l.mw&&k<l.mh&&S.push(k*l.mw+fe);return S}function K(d,S){(l.L.events||[]).forEach(function(k,fe){if(!l.fired[fe]){var $=k.when||{},oe=d==="use"&&$.use&&$.use[0]+","+$.use[1]===S||d==="pickup"&&$.pickup===S||d==="cleared"&&$.cleared===S||d==="start"&&$.start;oe&&Ce(k,fe)}})}function Ce(d,S){l.fired[S]=!0,ve(d.do||[])}function ve(d){d.forEach(function(S){if(S.after){l.timers.push({t:S.after,acts:S.do||[]});return}var k=S.raise||S.lower;k&&(ld(l.W,Ze(k),S.to,S.speed),E("doorOpen",{x:k[0]+.5,y:0,z:k[1]+.5})),S.lava&&Ze(S.lava).forEach(function(fe){l.W.lava[fe]=S.on?1:0}),S.seal&&S.seal.forEach(function(fe){var $=l.doors[fe];$&&($.sealed=!0,$.state!=="closed"&&($.state="closing"))}),S.open&&S.open.forEach(function(fe){var $=l.doors[fe];$&&($.sealed=!1,Me($,!1))}),S.spawn&&S.spawn.forEach(function(fe){var $=hn(l.W,fe.x,fe.z),oe=y(fe.kind,fe.x+.5,fe.z+.5,$);oe.state="chase",oe.wave=S.wave||null,l.ents.push(oe),l.stats.totalKills++,x("fx","summon",oe.x,$+.4,oe.z)}),S.wave&&(l.waves[S.wave]=!0),S.light&&(l.lightsOff[S.light]=S.on===!1),S.say&&(T("RILEY: "+S.say,"#6fe0ec",Math.max(4.5,S.say.length/14)),E("rileyTalk")),S.notice&&L(S.notice,"#ff9a28",2.5),S.shake&&U(S.shake)})}function Re(d){for(var S=l.p,k=l.L.events||[],fe=l.timers.length-1;fe>=0;fe--)if((l.timers[fe].t-=d)<=0){var $=l.timers.splice(fe,1)[0];ve($.acts)}for(var oe=0;oe<k.length;oe++){var Se=k[oe].when||{};if(!(l.fired[oe]||!Se.enter)){var Ee=Se.enter;S.x>=Ee[0]&&S.x<=Ee[2]+1&&S.z>=Ee[1]&&S.z<=Ee[3]+1&&Ce(k[oe],oe)}}for(var Pe in l.waves)l.waves[Pe]&&(l.ents.some(function($e){return $e.wave===Pe&&qe($e)})||(l.waves[Pe]=!1,K("cleared",Pe)));if(l.lavaT-=d,l.lavaT<=0){l.lavaT=.5;var je=Math.floor(S.z)*l.mw+Math.floor(S.x);!S.dead&&l.W.lava[je]&&S.onGround&&(_e(6,{x:S.x,z:S.z,kind:"lava"}),D("lava")),l.ents.forEach(function($e){$e.mob&&!$e.barrel&&qe($e)&&l.W.lava[Math.floor($e.z)*l.mw+Math.floor($e.x)]&&ct($e,8)})}}function Oe(){for(var d=l.p,S=ne(),k=12,fe=l.W,$=Math.floor(d.x),oe=Math.floor(d.z),Se=Math.max(0,oe-k);Se<=Math.min(l.mh-1,oe+k);Se++)for(var Ee=Math.max(0,$-k);Ee<=Math.min(l.mw-1,$+k);Ee++){var Pe=Se*l.mw+Ee;l.seen[Pe]||xr(fe,Ee,Se)||_r(fe,d.x,S,d.z,Ee+.5,hn(fe,Ee,Se)+.4,Se+.5)&&(l.seen[Pe]=1,Ta(fe,Ee,Se).forEach(function(je){fe.cells[je.i]!==0&&(l.seen[je.i]=1)}))}}function be(){Oe();var d=l.p,S=ne();function k(Ee,Pe){return g(Ee.x,Ee.z,d.x,d.z)<Pe*Pe&&_r(l.W,d.x,S,d.z,Ee.x,(Ee.y||0)+(Ee.h||.3)*.6,Ee.z)}for(var fe=0;fe<l.ents.length;fe++){var $=l.ents[fe];if($.kind==="pickup"&&!$.spotted&&($.item==="r"||$.item==="u")&&k($,14)&&($.spotted=!0),$.mob&&!$.barrel&&qe($)&&md["meet_"+$.kind]&&!r.seenTips["meet_"+$.kind]&&k($,11)&&D("meet_"+$.kind),$.barrel&&!$.gone&&!r.seenTips.barrel&&k($,10))for(var oe=0;oe<l.ents.length;oe++){var Se=l.ents[oe];if(Se.mob&&!Se.barrel&&qe(Se)&&Se.state!=="idle"&&g(Se.x,Se.z,$.x,$.z)<4){D("barrel");break}}$.kind==="torch"&&u===0&&l.time>20&&k($,5)&&D("torches")}l.W.lifts.forEach(function(Ee){g(Ee.x+.5,Ee.z+.5,d.x,d.z)<16&&D("lift")})}function rt(){var d=l.info,S=l.p,k,fe=d.keys.blue&&!S.keys.blue?"u":d.keys.red&&!S.keys.red?"r":null;if(fe){for(var $=0;$<l.ents.length;$++){var oe=l.ents[$];if(oe.kind==="pickup"&&oe.item===fe&&!oe.gone)return oe.spotted?{x:oe.x,y:oe.y+.3,z:oe.z}:null}return null}for(k in l.doors){var Se=l.doors[k];if(Se.locked&&!Se.used&&l.seen[Se.z*l.mw+Se.x])return{x:Se.x+.5,y:hn(l.W,Se.x,Se.z)+.8,z:Se.z+.5}}var Ee=C();if(Ee.length){var Pe=null,je=1e9;return Ee.forEach(function(Tt){if(l.seen[Tt[1]*l.mw+Tt[0]]){var bt=Math.hypot(Tt[0]+.5-S.x,Tt[1]+.5-S.z);bt<je&&(je=bt,Pe=Tt)}}),Pe?{x:Pe[0]+.5,y:1,z:Pe[1]+.5,use:{x:Pe[0],z:Pe[1]}}:null}var $e=l.exitCell;if(!d.boss&&$e&&l.seen[$e.z*l.mw+$e.x])return{x:$e.x+.5,y:.8,z:$e.z+.5};var ut=l.boss;return d.boss&&ut&&qe(ut)&&l.seen[Math.floor(ut.z)*l.mw+Math.floor(ut.x)]?{x:ut.x,y:ut.y+ut.h+.3,z:ut.z}:null}function tt(d){var S=l.p,k=pd[d.item],fe=m().ammo,$=null;switch(d.item){case"h":S.hp>=100?$="HEALTH":S.hp=Math.min(100,S.hp+10);break;case"+":S.hp>=100?$="HEALTH":S.hp=Math.min(100,S.hp+25);break;case"A":S.armor>=100?$="ARMOR":(S.armor=100,S.grinT=1);break;case"b":S.ammo.bullets>=200?$="SPARKS":S.ammo.bullets=Math.min(200,S.ammo.bullets+10*fe);break;case"a":S.ammo.shells>=50?$="BELL CHARGES":S.ammo.shells=Math.min(50,S.ammo.shells+4*fe);break;case"2":S.weapons.shotgun=!0,S.ammo.shells=Math.min(50,S.ammo.shells+8*fe),S.grinT=1.2,S.weapon!=="shotgun"&&O("shotgun",!0),L("BELL BLASTER!  PRESS 3","#ffd23e",2.5),D("weapons");break;case"r":case"u":var oe=d.item==="r"?"red":"blue";S.keys[oe]=!0,S.grinT=1,L(oe.toUpperCase()+" KEYSTONE",oe==="red"?"#ff5a3a":"#6a98ff",2.5),D("key");break;case"P":S.hp=Math.min(200,S.hp+100),S.grinT=1.2;break}if($){d.touching=!0,T($+" ALREADY FULL","#8a8478",1.5);return}d.gone=!0,l.stats.items++,K("pickup",d.item),S.bonusFlash=Math.min(.35,S.bonusFlash+.22),E(k.snd),x("fx","pickup",d.x,d.y+.3,d.z,{item:d.item}),T(k.msg),S.autoFist&&(d.item==="b"||d.item==="a")&&(S.autoFist=!1,O(I(S),!0))}function zt(d){var S=l.p;if(S.dead){S.deadT+=d,S.eyeH=Math.max(.15,S.eyeH-d*1.2);return}var k=!!a.KeyC;if(!k&&S.crouch){var fe=zr(l.W,S.x,S.z,fn.r,S.y,fn.h,0);fe.blocked||(S.crouch=!1)}else S.crouch=k;var $=S.crouch?fn.hCrouch:fn.h,oe=S.crouch?fn.eyeCrouch:fn.eye;S.eyeH+=(oe-S.eyeH)*Math.min(1,d*14);var Se=a.ShiftLeft||a.ShiftRight,Ee=0,Pe=0;(a.KeyW||a.ArrowUp)&&(Ee+=1),(a.KeyS||a.ArrowDown)&&(Ee-=1),a.KeyA&&(Pe-=1),a.KeyD&&(Pe+=1),a.ArrowLeft&&(S.ang-=2.6*d),a.ArrowRight&&(S.ang+=2.6*d),a.PageUp&&(S.pitch+=1.6*d),a.PageDown&&(S.pitch-=1.6*d),S.pitch=_(S.pitch,-1.3,1.3),Ee&&Pe&&(Ee*=.7071,Pe*=.7071);var je=S.crouch?fn.walk*.5:Se?fn.run:fn.walk,$e=Math.cos(S.ang),ut=Math.sin(S.ang),Tt=($e*Ee-ut*Pe)*je,bt=(ut*Ee+$e*Pe)*je,cn=S.onGround?14:3;S.vx+=(Tt-S.vx)*Math.min(1,d*cn),S.vz+=(bt-S.vz)*Math.min(1,d*cn),a.Space&&!S.jumpHeld&&S.onGround&&!S.crouch&&(S.vy=fn.jumpV,S.onGround=!1,l.jumped=!0,E("jump")),S.jumpHeld=!!a.Space;var Ht=S.x,Ct=S.z,un=S.onGround?Xn:Math.max(0,Math.min(Iu,.12));Gr(l.W,S,S.vx*d,S.vz*d,fn.r,$,un),Se&&(Ee||Pe)&&(l.ranT+=d);var w=Xo(l.W,S.x,S.z,fn.r),Z=zr(l.W,S.x,S.z,fn.r,Math.max(S.y,w),$,10).ceil;S.onGround&&w<S.y-.02&&w>S.y-Xn?S.y=w:S.onGround&&w<S.y&&(S.onGround=!1),S.onGround&&w>S.y&&(S.y=w),S.onGround||(S.vy-=fn.gravity*d,S.y+=S.vy*d,Z!==void 0&&S.y+$>Z&&(S.y=Z-$,S.vy>0&&(S.vy=0)),S.y<=w&&(S.vy<-5&&(U(1.2),S.landT=.25),S.vy<-2&&E("land"),S.y=w,S.vy=0,S.onGround=!0)),l.input.strafe=Pe,l.input.moving=S.x!==Ht||S.z!==Ct,l.input.vx=(S.x-Ht)/d,l.input.vz=(S.z-Ct)/d,u===0&&(l.time>14&&l.ranT<.3&&D("run"),l.time>25&&!l.jumped&&D("jump"),l.time>40&&!l.usedMap&&D("map"),l.time>70&&!l.stats.secrets&&D("secret")),a.KeyE?S.usedHeld||(S.usedHeld=!0,dt()):S.usedHeld=!1,S.nextWeapon&&S.raiseT<=0&&!(S.lowerT>0)&&(S.lowerT=.15),S.lowerT>0&&(S.lowerT-=d,S.lowerT<=0&&(S.weapon=S.nextWeapon||S.weapon,S.nextWeapon=null,S.raiseT=.15)),S.raiseT>0&&(S.raiseT-=d),S.cool-=d,S.fireT+=d;var re=ba[S.weapon];if(o&&S.cool<=0&&S.raiseT<=0&&S.lowerT<=0&&!S.nextWeapon&&l.exitT<0)if(re.ammo&&S.ammo[re.ammo]<=0){E("noAmmo");var ae=I(S);T("OUT OF "+hd[re.ammo]+"!"),O(ae,!0)&&ae==="fist"&&(S.autoFist=!0),D("lowAmmo"),S.cool=.3}else{if(re.ammo&&S.ammo[re.ammo]--,S.cool=re.rate,S.fireT=0,E(S.weapon==="fist"?"punch":S.weapon),S.weapon==="shotgun"&&E("pump"),re.melee||(U(re.shake),x("fx","muzzle",S.x+Math.cos(S.ang)*.4,ne()-.1,S.z+Math.sin(S.ang)*.4,{weapon:S.weapon}),x("fx","casing",S.x,ne()-.15,S.z,{weapon:S.weapon,ang:S.ang,delay:S.weapon==="shotgun"?.45:0})),ge(l.boss)&&Ut.default.noteShot(l.boss.profile,S.weapon,Ae(l.boss.x,l.boss.z)),l.shotId++,l.firing=!0,re.melee)Ne(S.ang,S.pitch,re.dmgMin,re.dmgMax,!0,re.knock);else for(var ce=0;ce<re.pellets;ce++)Ne(S.ang+(p()-.5)*2*re.spread,S.pitch+(p()-.5)*re.spread,re.dmgMin,re.dmgMax,!1,re.knock);l.firing=!1,re.melee||nt(S.x,S.z,14)}for(var He=0;He<l.ents.length;He++){var Be=l.ents[He];Be.kind!=="pickup"||Be.gone||(g(Be.x,Be.z,S.x,S.z)<.45&&Math.abs(Be.y-S.y)<.6?Be.touching||tt(Be):Be.touching=!1)}for(var Le=l.L.triggers||[],We=f[u]||(f[u]={}),Xe=0;Xe<Le.length;Xe++){var ht=Le[Xe].box;We[Xe]||S.x<ht[0]||S.x>ht[2]+1||S.z<ht[1]||S.z>ht[3]+1||(We[Xe]=!0,T("RILEY: "+Le[Xe].say,"#6fe0ec",Math.max(4.5,Le[Xe].say.length/14)),E("rileyTalk"))}var gt=Math.floor(S.x),Ye=Math.floor(S.z);l.secrets.forEach(function(Mt){!Mt.found&&Mt.x===gt&&Mt.z===Ye&&(Mt.found=!0,l.stats.secrets++,E("secret"),L("TRUE-MAP FRAGMENT FOUND!","#ffd23e",2.5))})}function Nt(d){if(!(c!=="game"||!l)){var S=l.p;l.events.length=0,l.time+=d,S.dmgFlash=Math.max(0,S.dmgFlash-d*.8),S.bonusFlash=Math.max(0,S.bonusFlash-d*1.5),S.painT=Math.max(0,S.painT-d),S.grinT=Math.max(0,S.grinT-d),S.landT=Math.max(0,S.landT-d),l.shake=Math.max(0,l.shake-d*14);for(var k=0;k<l.msgs.length;k++)l.msgs[k].t-=d;for(;l.msgs.length&&l.msgs[0].t<=0;)l.msgs.shift();l.notice&&(l.notice.t-=d)<=0&&(l.notice=null),l.hitT-=d,l.killT-=d,l.blockT-=d;for(var fe=l.hurtDirs.length-1;fe>=0;fe--)(l.hurtDirs[fe].t-=d*.9)<=0&&l.hurtDirs.splice(fe,1);if(Y(d),l.spotT-=d,l.spotT<=0&&(l.spotT=.3,be()),l.exitT>=0&&(l.exitT-=d,l.exitT<=0)){h={name:l.L.name,time:l.time,par:l.L.par,kills:l.stats.kills,totalKills:l.stats.totalKills,items:l.stats.items,totalItems:l.stats.totalItems,secrets:l.stats.secrets,totalSecrets:l.stats.totalSecrets},s(u,h),c="inter";return}te(d),De(d),cd(l.W,d),l.W.movers.forEach(function(Tt){Tt.moved&&[S].concat(l.ents).forEach(function(bt){if(!(bt!==S&&!(bt.mob&&qe(bt))&&bt.kind!=="pickup")){var cn=Math.floor(bt.z)*l.mw+Math.floor(bt.x);Tt.cells.indexOf(cn)>=0&&Math.abs(bt.y-(Tt.pos-Tt.moved))<.08&&(bt.y=Tt.pos)}})}),Re(d),l.flowT-=d,l.flowT<=0&&(l.flowT=.25,Q()),zt(d);for(var $=l.ents.length-1;$>=0;$--){var oe=l.ents[$];if(oe.gone){l.ents.splice($,1);continue}if(oe.kind==="torch"){oe.animT+=d;continue}if(oe.kind==="pickup"){oe.bob+=d;continue}if(oe.kind==="proj"){oe.animT+=d;for(var Se=3,Ee=!1,Pe=0;Pe<Se&&!Ee;Pe++){oe.x+=oe.vx*d/Se,oe.y+=oe.vy*d/Se,oe.z+=oe.vz*d/Se;var je=Math.floor(oe.x),$e=Math.floor(oe.z),ut=xr(l.W,je,$e)||oe.y<hn(l.W,je,$e)||oe.y>Ni(l.W,je,$e)?"wall":qn(oe);!ut&&!S.dead&&g(oe.x,oe.z,S.x,S.z)<.2&&oe.y>S.y-.1&&oe.y<S.y+(S.crouch?fn.hCrouch:fn.h)+.1&&(ut="player"),ut&&(Ee=!0,ut==="player"?(_e(oe.dmg|0,{x:oe.x-oe.vx,z:oe.z-oe.vz,kind:oe.owner?oe.owner.kind:"imp"}),E("fireExplode")):(ut!=="wall"&&ct(ut,oe.dmg|0,oe.owner),E("fireExplode",oe)),x("fx",oe.green?"greenBurst":"fireBurst",oe.x,oe.y,oe.z),l.ents.splice($,1))}continue}if(oe.barrel){oe.state==="boom"&&(oe.st-=d,oe.st<=0&&me(oe));continue}oe.kind==="riley"?pe(oe,d):oe.mob&&F(oe,d)}}}function qn(d){for(var S=0;S<l.ents.length;S++){var k=l.ents[S];if(!(!k.mob||k===d.owner||!qe(k))&&!(!k.barrel&&d.owner&&k.kind===d.owner.kind)){var fe=k.radius+.1;if(g(d.x,d.z,k.x,k.z)<fe*fe&&d.y>=k.y-.1&&d.y<=k.y+k.h+.1)return k}}return null}function ii(){var d=l.p,S=Math.cos(d.pitch),k=Math.cos(d.ang)*S,fe=Math.sin(d.ang)*S,$=Math.sin(d.pitch),oe=Yo(l.W,d.x,ne(),d.z,k,$,fe,40),Se=null,Ee=oe.dist;return l.ents.forEach(function(Pe){if(!(!Pe.mob||!qe(Pe))){var je=lt(d.x,ne(),d.z,k,$,fe,Pe);je!==null&&je<Ee&&(Se=Pe,Ee=je)}}),Se}var Ma=!1;function bu(){if(c==="inter"){if(!Ma){Ma=!0;return}Ma=!1,u+1>=e.length?c="victory":P(u+1,!0)}else c==="victory"?c="title":c==="game"&&l&&l.p.dead&&l.p.deadT>1.2&&M()}function qo(){return{floorAt:function(d,S){return xr(l.W,d,S)&&!(Ji(l.W,d,S)&&!Ji(l.W,d,S).locked)?null:hn(l.W,d,S)},neighbours:function(d,S){var k=[],fe=hn(l.W,d,S);return Ta(l.W,d,S).forEach(function($){var oe=Yn(l.W,$.x,$.z);if(!(oe!==0&&!gi[oe])){var Se=Ji(l.W,$.x,$.z);if(!(Se&&Se.sealed)){var Ee=hn(l.W,$.x,$.z)-fe,Pe=Ee<=.02&&Ee>=-.02?"walk":Ee<0?"drop":Ee<=Xn?"step":Ee<=Iu?"jump":null;Pe&&k.push({cx:$.x,cz:$.z,cost:Pe==="jump"?2:1,kind:Pe})}}}),k}}}return{keys:a,state:function(){return l},mode:function(){return c},setMode:function(d){c=d},interStats:function(){return h},levelIndex:function(){return u},levels:e,update:Nt,startLevel:P,retryLevel:M,onEnter:bu,setFire:function(d){o=!!d},switchWeapon:O,cycleWeapon:W,quickSwitch:ee,useTarget:Ke,usePrompt:q,useAction:dt,objective:V,goalTarget:rt,aimTarget:ii,hurtPlayer:_e,walkGraph:qo,levelInfo:R,hasAmmo:N,settings:r,DIFFS:$i}}var _d=_s(gd(),1);var vd={name:"E1M2: THE FURNACE",floor:"slab",ceil:"ceilDark",par:300,playerAngle:-1.5707963,ceilHeight:2.5,map:["####################################","########HHHHHHHHHXHHHHHHHHHH########","########H..................H########","########H.h..t........t..+.H########","########H.....~~~~~~~~.....H########","########H..................H########","########H........b.........H########","%%%=%%%%H.....H......H.....HMMMMMMMM","%......%H.....H......H.....HM.....MM","%.i....%H.......a..a.......HM...iAMM","%......%H..................HM..r..MM","%......%HHHHHHHHHRHHHHHHHHHHM.....MM","%..i...%t.......t.t........tM......M","%......D.a................o.M....M.M","%..%%..%......~~~~~~~~......D....M.M","%......%...T..~~~~~~~~..T...M.MM.M.M","%......%......~~~HH~~~......M....M.M","%......%..i...~~~HH~~~...i..M....M.M","%......%......~~~~~~~~......M...g..M","%.%%...%......~~~~~~~~......M......M","%......%...T............T...M.MM...M","%....i.D..h.................D......M","%......%t.................btM......M","%...h..%.o..t..........t....M.g..+.M","%......%####............####M......M","%%S%%%%%####.......b....####MMMMMMMM","#...########.....p......############","#*Pa########............############","####################################","####################################"],heights:["000000000000000000000000000000000000","000000000000000000000000000000000000","000000000666222228222222666000000000","000000000666222222222222666000000000","000000000666220000000022666000000000","000000000666222222222222666000000000","000000000666422222222224666000000000","000000000666222222222222666000000000","033333300666222222222222666008888810","033333300666222222222222666008888810","033333300666222222222222666008888810","011111100000000000000000000008888810","011111102222222222222222222208888880","011111102222222222222222222201111170","011111102222220000000022222201111160","011111102222220000000022222201111150","011111102222220000000022222201111140","011111102222220000000022222201111130","011111102222220000000022222201111120","011111102222220000000022222201111110","011111102222222222222222222201111110","011111102222222222222222222201111110","011111102222222222222222222201111110","011111102222332222222233222201111110","011111100000448888888844000001111110","000000000000558888888855000000000000","011100000000668888888866000000000000","011100000000778888888877000000000000","000000000000000000000000000000000000","000000000000000000000000000000000000"],ceilings:["....................................","....................................",".........qqqqqqqqqqqqqqqqqq.........",".........qqqqqqqqqqqqqqqqqq.........",".........qqqqqqqqqqqqqqqqqq.........",".........qqqqqqqqqqqqqqqqqq.........",".........qqqqqqqqqqqqqqqqqq.........",".........qqqqqqqqqqqqqqqqqq.........",".eeeeee..qqqqqqqqqqqqqqqqqq..kkkkkk.",".eeeeee..qqqqqqqqqqqqqqqqqq..kkkkkk.",".eeeeee..qqqqqqqqqqqqqqqqqq..kkkkkk.",".eeeeee......................kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.mmmmmmmmmmmmmmmmmmmm.kkkkkk.",".eeeeee.....mmmmmmmmmmmm.....kkkkkk.","............mmmmmmmmmmmm............",".eee........mmmmmmmmmmmm............",".eee........mmmmmmmmmmmm............","....................................","...................................."],events:[{when:{use:[3,7]},do:[{notice:"THE FURNACE IS DRAINING!"},{shake:3},{say:"YOU DID IT! THE PIT'S DRAINING. THAT'S A SHORTCUT STRAIGHT TO THE RED DOOR."},{lava:[14,14,21,19],on:!1},{raise:[14,14,21,19],to:.5,speed:.25}]},{when:{enter:[12,5,23,9]},do:[{seal:["17,11"]},{notice:"SEALED IN!"},{shake:2},{say:"IT'S A TRAP! KEEP MOVING, USE THE PILLARS AND THE HIGH GROUND."},{after:2,do:[{wave:"forge1",spawn:[{kind:"imp",x:10,z:3},{kind:"imp",x:25,z:3},{kind:"gnasher",x:17,z:3}]}]}]},{when:{cleared:"forge1"},do:[{say:"ONE MORE WAVE. THEY ALWAYS SEND ONE MORE."},{after:1.5,do:[{wave:"forge2",spawn:[{kind:"gnasher",x:10,z:9},{kind:"gnasher",x:25,z:9},{kind:"imp",x:10,z:5},{kind:"imp",x:25,z:5}]}]}]},{when:{cleared:"forge2"},do:[{notice:"FORGE CLEARED!"},{open:["17,11"]},{say:"THAT WAS AWESOME. THE WAYSTONE IS BEHIND THE PLINTH. IT'S SINKING NOW."},{lower:[17,2,17,2],to:.5,speed:.6}]}],triggers:[{box:[14,24,21,27],say:"THE OVERSEERS' FURNACE. THAT PIT IS RED MERCURY. A SWITCH SOMEWHERE DRAINS IT. THE RED DOOR BEHIND IT LEADS ON."},{box:[1,11,6,24],say:"DARK IN HERE. LISTEN FOR THE HOLLOWS BEFORE YOU SEE THEM."},{box:[29,12,34,24],say:"THE RED KEYSTONE IS UP ON THE TANKS. THE STAIRS ARE ON THE FAR WALL."}],lights:[{id:"pit",x:17.5,z:17,y:1.2,color:16722480,intensity:5,dist:14},{id:"forge",x:17.5,z:5,y:3,color:16726564,intensity:4,dist:14},{id:"tanks",x:31.5,z:16,y:3.5,color:6990079,intensity:2.5,dist:12},{id:"bunkerflicker",x:3.5,z:16,y:2.5,color:16760960,intensity:1.6,dist:8,flicker:!0}],darkZones:[[1,8,6,27]]};var xd={name:"E1M3: THE RESET ENGINE",floor:"slab",ceil:"ceilDark",par:330,playerAngle:-1.5707963,ceilHeight:2.5,map:["#####HHHHHHHHHHHHXHHHHHHHHHHHHH#####","#####H........................H#####","#####H.+..t..............t....H#####","#####H.....H...HHHHHH...H.....H#####","#####H.........HHHHHH.........H#####","#####H......b..HHHHHH.........H#####","#####H........................H#####","#####H.......~........~.......H#####","#####H.....H.~...HH...~.H.....H#####","#####H.......~........~.....a.H#####","#####H........................H#####","#####HHHHHHHHHHHHDDHHHHHHHHHHHH#####","################H..H################","################H..H################","################H..H################","%%=%%%###=######H..H##########HHH=HH","%....%#...ia.###H..H##########H....H","%i...%H......LHHH..HHHHHHHHHHHHi..AH","%....%..........t..t..........H..g.H","%.i%.%.h......................H....H","%..%.%......Mi.........M..o...H~..~H","%M.%.%...M.....~~~~~~.....M...H~..~H","%..%.%.........~HHHH~.........H~..~H","%..%.%tM.......~HHHH~.......MtH....H","%.i..D....i.M..~HHHH~..M.i....D....H","%a...%.........~HHHH~.........H....H","%.M..%...M.....~~~~~~.....M...H.g..H","%...+%..o............b.......tH....H","%....Dt........T....T.........D...hH","%....%HHHHHH............HHHHHHH....H","%%S%%%######............######HHHHHH","#...########............############","#*PA########t..........t############","############.......b....############","############............############","###############.......##############","##############..a.2..###############","##############...p....##############","##############t......t##############","####################################","####################################"],heights:["000000000000000000000000000000000000","00000066622222222aa22222222666000000","000000666222222222222222222666000000","000000666222222222222222222666000000","000000666222222222222222222666000000","000000666422222222222222224666000000","000000666222222222222222222666000000","000000666222202222222202222666000000","000000666222202222222202222666000000","000000666222202222222202222666000000","000000666222222222222222222666000000","000000000000000000000000000000000000","000000000000000002200000000000000000","00000000000000000aa00000000000000000","000000000000000002200000000000000000","00000000000000000aa00000000000000000","066660088888800002200000000000011110","06666008888888000aa00000000000011110","066660222222222222222222222222011110","011160222222222222222222222222011110","011150222222222222222222222222002200","011140222222222000000222222222002200","011130222222222000000222222222002200","011120222222222000000222222222011110","011110222222222000000222222222011110","011110222222222000000222222222011110","011110222222222000000222222222011110","011110222222222222222222222222011110","011110222222222222222222222222011110","011110000000332222222233000000011110","000000000000442222222244000000000000","011100000000552222222255000000000000","011100000000666666666666000000000000","000000000000666666666666000000000000","000000000000666666666666000000000000","000000000000006666666600000000000000","000000000000006666666600000000000000","000000000000006666666600000000000000","000000000000006666666600000000000000","000000000000000000000000000000000000","000000000000000000000000000000000000"],ceilings:["....................................","......qqqqqqqqqqqqqqqqqqqqqqqq......","......qqqqqqqqqqqqqqqqqqqqqqqq......","......qqqqqqqqqqqqqqqqqqqqqqqq......","......qqqqqqqqqqqqqqqqqqqqqqqq......","......qqqqqqqqqqqqqqqqqqqqqqqq......","......qqqqqqqqqqqqqqqqqqqqqqqq......","......qqqqqqqqqqqqqqqqqqqqqqqq......","......qqqqqqqqqqqqqqqqqqqqqqqq......","......qqqqqqqqqqqqqqqqqqqqqqqq......","......qqqqqqqqqqqqqqqqqqqqqqqq......","....................................",".................kk.................",".................kk.................",".................kk.................",".................kk.................",".kkkk..mmmmmm....kk............kkkk.",".kkkk..mmmmmm....kk............kkkk.",".kkkk.mmmmmmmmmmmmmmmmmmmmmmmm.kkkk.",".kkkk.mmmmmmmmmmmmmmmmmmmmmmmm.kkkk.",".kkkk.mmmmmmmmmmmmmmmmmmmmmmmm.kkkk.",".kkkk.mmmmmmmmmmmmmmmmmmmmmmmm.kkkk.",".kkkk.mmmmmmmmmmmmmmmmmmmmmmmm.kkkk.",".kkkk.mmmmmmmmmmmmmmmmmmmmmmmm.kkkk.",".kkkk.mmmmmmmmmmmmmmmmmmmmmmmm.kkkk.",".kkkk.mmmmmmmmmmmmmmmmmmmmmmmm.kkkk.",".kkkk.mmmmmmmmmmmmmmmmmmmmmmmm.kkkk.",".kkkk.mmmmmmmmmmmmmmmmmmmmmmmm.kkkk.",".kkkk.mmmmmmmmmmmmmmmmmmmmmmmm.kkkk.",".kkkk.......mmmmmmmmmmmm.......kkkk.","............mmmmmmmmmmmm............",".kkk........mmmmmmmmmmmm............",".kkk........mmmmmmmmmmmm............","............mmmmmmmmmmmm............","............mmmmmmmmmmmm............","..............eeeeeeee..............","..............eeeeeeee..............","..............eeeeeeee..............","..............eeeeeeee..............","....................................","...................................."],levers:[[2,15],[33,15],[9,15]],leverGoal:"PULL THE SEAL LEVERS",events:[{when:{start:!0},do:[{light:"relit",on:!1},{light:"relitW",on:!1},{light:"relitE",on:!1},{light:"relitHall",on:!1}]},{when:{use:[2,15]},do:[{notice:"THE WEST SEAL IS DOWN"},{shake:2},{lower:[17,13,18,13],to:.5,speed:.5},{say:"THE WEST SEAL IS DOWN. HEAR THAT BELL? THE ENGINE HEARD IT TOO. HOLLOWS, DOWN BELOW!"},{after:2.5,do:[{wave:"answer1",spawn:[{kind:"imp",x:2,z:27},{kind:"imp",x:1,z:28}]}]}]},{when:{use:[33,15]},do:[{notice:"THE EAST SEAL IS DOWN"},{shake:2},{lower:[17,15,18,15],to:.5,speed:.5},{say:"THE EAST SEAL IS DOWN. SOMETHING'S COMING OVER THE BRIDGE!"},{after:2.5,do:[{wave:"answer2",spawn:[{kind:"gnasher",x:33,z:27},{kind:"imp",x:31,z:28}]}]}]},{when:{use:[9,15]},do:[{notice:"THE GALLERY SEAL IS DOWN"},{shake:2},{lower:[17,17,18,17],to:.5,speed:.5},{say:"THE GALLERY SEAL IS DOWN. HOLLOWS IN THE HALL! YOU'VE GOT THE HIGH GROUND, USE IT."},{after:2.5,do:[{wave:"answer3",spawn:[{kind:"imp",x:11,z:25},{kind:"imp",x:24,z:25},{kind:"gnasher",x:17,z:28}]}]}]},{when:{enter:[9,2,26,9]},do:[{seal:["17,11","18,11"]},{notice:"THE RESET WARDEN!"},{shake:3},{say:"THAT'S THE WARDEN. IT WAS A KNIGHT ONCE, SWORN TO A FIRE DRAKE, UNTIL THE OVERSEERS HOLLOWED IT OUT. STAY MOVING, USE THE PILLARS, RING IT WITH THE BELL BLASTER."},{after:1.5,do:[{wave:"warden",spawn:[{kind:"knight",x:17,z:6}]},{wave:"escort",spawn:[{kind:"imp",x:7,z:3},{kind:"imp",x:28,z:3}]}]},{after:10,do:[{say:"IT'S CALLING HOLLOWS OUT OF THE WALLS!"},{shake:2},{wave:"adds1",spawn:[{kind:"gnasher",x:9,z:9},{kind:"gnasher",x:26,z:9},{kind:"imp",x:12,z:2}]}]},{after:22,do:[{say:"HERE COMES EVERYTHING IT'S GOT. DON'T STOP MOVING!"},{shake:3},{wave:"adds2",spawn:[{kind:"imp",x:7,z:9},{kind:"imp",x:28,z:9},{kind:"imp",x:23,z:2},{kind:"gnasher",x:12,z:9},{kind:"gnasher",x:23,z:9}]}]}]},{when:{cleared:"warden"},do:[{notice:"THE ENGINE IS SILENT"},{shake:4},{light:"engine",on:!1},{light:"core",on:!1},{light:"relit",on:!0},{light:"relitW",on:!0},{light:"relitE",on:!0},{light:"relitHall",on:!0},{lava:[13,7,22,9],on:!1},{lava:[15,21,20,26],on:!1},{open:["17,11","18,11"]},{say:"YOU DID IT! THE ENGINE'S SILENT AND THE CITY'S LIGHTS ARE COMING BACK. THE WAYSTONE'S BEHIND IT. COME FIND ME AFTER."},{lower:[17,1,18,1],to:.5,speed:1}]}],triggers:[{box:[14,35,21,38],say:"THIS STREET USED TO BE THE TOP OF THE CITY. THE OVERSEERS' ENGINE IS BURYING IT. THE BELL BLASTER'S RIGHT THERE, GRAB IT."},{box:[12,32,23,34],say:"THERE IT IS: THE RESET ENGINE. THREE SEALS BLOCK THE WAY IN. EACH ONE HAS A LEVER: WEST, EAST, AND UP ON THAT GALLERY."},{box:[1,19,4,29],say:"THE BELL WORKS. THE LEVER'S UP THE TOWER. THE STAIRS START AT THE BOTTOM."},{box:[31,23,34,29],say:"CAREFUL, THAT CHANNEL IS RED MERCURY. TAKE THE BRIDGE. THE HOUNDS WON'T WAIT."},{box:[14,12,21,17],say:"ALL THREE SEALS ARE DOWN. THE WARDEN'S BEHIND THOSE DOORS. HEALTH AND AMMO FIRST?"}],lights:[{id:"core",x:17.5,z:23.5,y:3.5,color:16722480,intensity:5,dist:16},{id:"engine",x:17.5,z:6.5,y:3.5,color:16722480,intensity:4.5,dist:16},{id:"relit",x:17.5,z:7.5,y:3,color:9433343,intensity:12,dist:22},{id:"relitW",x:9.5,z:5.5,y:3,color:9433343,intensity:6,dist:12},{id:"relitE",x:25.5,z:5.5,y:3,color:9433343,intensity:6,dist:12},{id:"relitHall",x:17.5,z:23.5,y:5,color:9433343,intensity:9,dist:20},{id:"bells",x:2.5,z:22,y:3.5,color:9429247,intensity:2.4,dist:11},{id:"foundry",x:32.5,z:21,y:1.5,color:16722480,intensity:3,dist:10},{id:"street",x:17.5,z:37,y:2.4,color:16760960,intensity:1.4,dist:8,flicker:!0}],darkZones:[[14,35,21,38]]};var Um={name:"E1M1: ASH GATES",floor:"slab",ceil:"ceilDark",par:240,playerAngle:0,ceilHeight:2.5,boss:{sparring:!0,hpScale:.4,moves:["volley","lead","flank","close","backoff","seek"],intro:"THERE YOU ARE! LET'S SPAR. I'LL WATCH HOW YOU FIGHT. READY?"},triggers:[{box:[2,25,8,30],say:"HI! I'M RILEY. I'M WAITING FOR YOU AT THE TOP. LOOK AROUND WITH THE MOUSE, MOVE WITH WASD."},{box:[7,26,9,28],say:"DOORS OPEN WITH E. GO ON, TRY IT."},{box:[15,23,28,29],say:"SEE THE BELL BLASTER UP THERE? JUMP WITH SPACE."},{box:[14,20,28,22],say:"NICE VIEW. THE BLUE KEYSTONE IS DOWN IN THE HALL. THE BLUE DOOR IS ACROSS FROM YOU."},{box:[2,17,5,21],say:"GOT IT? NOW THE BLUE DOOR. THE LIFT BEHIND IT BRINGS YOU UP TO ME."},{box:[20,11,28,15],say:"LAST STOP. GRAB WHAT YOU NEED. WHEN MY VISOR FLASHES WHITE, I'M ABOUT TO SHOOT. MOVE!"}],map:["##############################","##############.t...........t.#","##############...............#","##############....T..Y..T....#","##############....T.....T....#","##############.h...........h.#","##############...............#","##############....T.....T....#","##############.......a.......#","##############........t.t....#","#######################D######","####################..t.t....#","####################.........#","####################.....+...#","####################....A....#","####################...L.....#","#######################U######","##....................t.t...##","##.t......%%......%%........##","##u...g......i..............##","##.t.......h.....g..........##","##..........................##","####################D#########","###*Pa#########....t.t......##","####S##########.....i.....o.##","##b......######..........io.##","##.......######......h......##","##..p....D........2.........##","##.......######..o..........##","##.......######.t.........t.##","##...h...#####################","##############################"],heights:["000000000000000000000000000000","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","00000000000000aa88888888888aa0","000000000000000000000000000000","000000000000000000008888888880","000000000000000000008888888880","000000000000000000008888888880","000000000000000000008888888880","000000000000000000008888888880","000000000000000000000000000000","000000000000000000000000000000","000000000000000000000000000000","000000000000000000000000000000","000000000001234444444444444400","000000000001234444444444444400","000000000000000000000000000000","000000000000000444444444444440","000000000000000444444444444440","000000000000000444444444444440","000000000000000446664444444440","000000000012344446664444444440","000000000000000446664444444440","000000000000000444444444444440","000000000000000000000000000000","000000000000000000000000000000"],ceilings:["..............................","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............qqqqqqqqqqqqqqq.","..............................","....................iiiiiiiii.","....................iiiiiiiii.","....................iiiiiiiii.","....................iiiiiiiii.","....................iiiiiiiii.","..............................","..gggggggggggggggggggggggggg..","..gggggggggggggggggggggggggg..","..gggggggggggggggggggggggggg..","..gggggggggggggggggggggggggg..","..gggggggggggggggggggggggggg..","..............................","...............eeeeeeeeeeeeee.","...............eeeeeeeeeeeeee.","...............eeeeeeeeeeeeee.","...............eeeeeeeeeeeeee.",".........cccccceeeeeeeeeeeeee.","...............eeeeeeeeeeeeee.","...............eeeeeeeeeeeeee.","..............................",".............................."]},Fm={"E1M4: RILEY'S ARENA":"E1M4: RILEY'S TRIAL"},vi=[Um,vd,xd].concat(_d.default.slice(3).map(function(i){return Object.assign({ceilHeight:2},i,{name:Fm[i.name]||i.name})}));function Du(i){var e=i>>>0||1;return function(){e=e+1831565813|0;var t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var ip=0,ph=1,rp=2;var ao=1,sp=2,ta=3,Gi=0,Mn=1,Sn=2,ci=0,na=1,Vi=2,mh=3,gh=4,ap=5;var os=100,op=101,lp=102,cp=103,up=104,hp=200,fp=201,dp=202,pp=203,vh=204,xh=205,mp=206,gp=207,vp=208,xp=209,_p=210,yp=211,Mp=212,Sp=213,Tp=214,Sl=0,Tl=1,bl=2,Us=3,El=4,Al=5,wl=6,Rl=7,Zl=0,bp=1,Ep=2,Ai=0,oo=1,lo=2,co=3,ls=4,uo=5,ho=6,fo=7,sh="attached",Ap="detached",_h=300,Nr=301,cs=302,Jl=303,jl=304,po=306,oi=1e3,ai=1001,Fs=1002,Xt=1003,$l=1004;var us=1005;var an=1006,ia=1007;var wi=1008;var Vn=1009,yh=1010,Mh=1011,ra=1012,Ql=1013,Ri=1014,jn=1015,Tn=1016,ec=1017,tc=1018,sa=1020,Sh=35902,Th=35899,bh=1021,Eh=1022,$n=1023,Hi=1026,Dr=1027,nc=1028,ic=1029,Or=1030,rc=1031;var sc=1033,mo=33776,go=33777,vo=33778,xo=33779,ac=35840,oc=35841,lc=35842,cc=35843,uc=36196,hc=37492,fc=37496,dc=37488,pc=37489,_o=37490,mc=37491,gc=37808,vc=37809,xc=37810,_c=37811,yc=37812,Mc=37813,Sc=37814,Tc=37815,bc=37816,Ec=37817,Ac=37818,wc=37819,Rc=37820,Cc=37821,Ic=36492,Pc=36494,Lc=36495,Nc=36283,Dc=36284,yo=36285,Oc=36286,Hc=2200,Uc=2201,wp=2202,Jr=2300,jr=2301,_l=2302,ah=2303,Yr=2400,Kr=2401,Ha=2402,Fc=2500,Rp=2501,Ah=0,Mo=1,aa=2,Cp=3200;var So=0,Ip=1,Qn="",qt="srgb",Hn="srgb-linear",Ua="linear",Dt="srgb";var yl=7680;var Pp=519,Lp=512,Np=513,Dp=514,Bc=515,Op=516,Hp=517,kc=518,Up=519,wh=35044,oa=35048;var Rh="300 es",Ti=2e3,Bs=2001;function Bm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function km(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ks(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fp(){let i=ks("canvas");return i.style.display="block",i}var yd={},zs=null;function Fa(...i){let e="THREE."+i.shift();zs?zs("log",e,...i):console.log(e,...i)}function Bp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function st(...i){i=Bp(i);let e="THREE."+i.shift();if(zs)zs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ft(...i){i=Bp(i);let e="THREE."+i.shift();if(zs)zs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Zr(...i){let e=i.join(" ");e in yd||(yd[e]=!0,st(...i))}function kp(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var zp={[Sl]:Tl,[bl]:wl,[El]:Rl,[Us]:Al,[Tl]:Sl,[wl]:bl,[Rl]:El,[Al]:Us},Ei=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Md=1234567,Da=Math.PI/180,$r=180/Math.PI;function bi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rn[i&255]+Rn[i>>8&255]+Rn[i>>16&255]+Rn[i>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[t&63|128]+Rn[t>>8&255]+"-"+Rn[t>>16&255]+Rn[t>>24&255]+Rn[n&255]+Rn[n>>8&255]+Rn[n>>16&255]+Rn[n>>24&255]).toLowerCase()}function At(i,e,t){return Math.max(e,Math.min(t,i))}function Ch(i,e){return(i%e+e)%e}function zm(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Gm(i,e,t){return i!==e?(t-i)/(e-i):0}function Oa(i,e,t){return(1-t)*i+t*e}function Vm(i,e,t,n){return Oa(i,e,1-Math.exp(-t*n))}function Wm(i,e=1){return e-Math.abs(Ch(i,e*2)-e)}function qm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Xm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ym(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Km(i,e){return i+Math.random()*(e-i)}function Zm(i){return i*(.5-Math.random())}function Jm(i){i!==void 0&&(Md=i);let e=Md+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jm(i){return i*Da}function $m(i){return i*$r}function Qm(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function eg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function tg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ng(i,e,t,n,r){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),u=s((e+n)/2),l=a((e+n)/2),h=s((e-n)/2),f=a((e-n)/2),p=s((n-e)/2),v=a((n-e)/2);switch(r){case"XYX":i.set(o*l,c*h,c*f,o*u);break;case"YZY":i.set(c*f,o*l,c*h,o*u);break;case"ZXZ":i.set(c*h,c*f,o*l,o*u);break;case"XZX":i.set(o*l,c*v,c*p,o*u);break;case"YXY":i.set(c*p,o*l,c*v,o*u);break;case"ZYZ":i.set(c*v,c*p,o*l,o*u);break;default:st("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Si(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ih={DEG2RAD:Da,RAD2DEG:$r,generateUUID:bi,clamp:At,euclideanModulo:Ch,mapLinear:zm,inverseLerp:Gm,lerp:Oa,damp:Vm,pingpong:Wm,smoothstep:qm,smootherstep:Xm,randInt:Ym,randFloat:Km,randFloatSpread:Zm,seededRandom:Jm,degToRad:jm,radToDeg:$m,isPowerOfTwo:Qm,ceilPowerOfTwo:eg,floorPowerOfTwo:tg,setQuaternionFromProperEuler:ng,normalize:Ft,denormalize:Si},Oh=class Oh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(At(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Oh.prototype.isVector2=!0;var at=Oh,In=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],u=n[r+1],l=n[r+2],h=n[r+3],f=s[a+0],p=s[a+1],v=s[a+2],_=s[a+3];if(h!==_||c!==f||u!==p||l!==v){let g=c*f+u*p+l*v+h*_;g<0&&(f=-f,p=-p,v=-v,_=-_,g=-g);let m=1-o;if(g<.9995){let x=Math.acos(g),E=Math.sin(x);m=Math.sin(m*x)/E,o=Math.sin(o*x)/E,c=c*m+f*o,u=u*m+p*o,l=l*m+v*o,h=h*m+_*o}else{c=c*m+f*o,u=u*m+p*o,l=l*m+v*o,h=h*m+_*o;let x=1/Math.sqrt(c*c+u*u+l*l+h*h);c*=x,u*=x,l*=x,h*=x}}e[t]=c,e[t+1]=u,e[t+2]=l,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],c=n[r+1],u=n[r+2],l=n[r+3],h=s[a],f=s[a+1],p=s[a+2],v=s[a+3];return e[t]=o*v+l*h+c*p-u*f,e[t+1]=c*v+l*f+u*h-o*p,e[t+2]=u*v+l*p+o*f-c*h,e[t+3]=l*v-o*h-c*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(n/2),l=o(r/2),h=o(s/2),f=c(n/2),p=c(r/2),v=c(s/2);switch(a){case"XYZ":this._x=f*l*h+u*p*v,this._y=u*p*h-f*l*v,this._z=u*l*v+f*p*h,this._w=u*l*h-f*p*v;break;case"YXZ":this._x=f*l*h+u*p*v,this._y=u*p*h-f*l*v,this._z=u*l*v-f*p*h,this._w=u*l*h+f*p*v;break;case"ZXY":this._x=f*l*h-u*p*v,this._y=u*p*h+f*l*v,this._z=u*l*v+f*p*h,this._w=u*l*h-f*p*v;break;case"ZYX":this._x=f*l*h-u*p*v,this._y=u*p*h+f*l*v,this._z=u*l*v-f*p*h,this._w=u*l*h+f*p*v;break;case"YZX":this._x=f*l*h+u*p*v,this._y=u*p*h+f*l*v,this._z=u*l*v-f*p*h,this._w=u*l*h-f*p*v;break;case"XZY":this._x=f*l*h-u*p*v,this._y=u*p*h-f*l*v,this._z=u*l*v+f*p*h,this._w=u*l*h+f*p*v;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],u=t[2],l=t[6],h=t[10],f=n+o+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(l-c)*p,this._y=(s-u)*p,this._z=(a-r)*p}else if(n>o&&n>h){let p=2*Math.sqrt(1+n-o-h);this._w=(l-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+u)/p}else if(o>h){let p=2*Math.sqrt(1+o-n-h);this._w=(s-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+l)/p}else{let p=2*Math.sqrt(1+h-n-o);this._w=(a-r)/p,this._x=(s+u)/p,this._y=(c+l)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,u=t._z,l=t._w;return this._x=n*l+a*o+r*u-s*c,this._y=r*l+a*c+s*o-n*u,this._z=s*l+a*u+n*c-r*o,this._w=a*l-n*o-r*c-s*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){let u=Math.acos(o),l=Math.sin(u);c=Math.sin(c*u)/l,t=Math.sin(t*u)/l,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Hh=class Hh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*r-o*n),l=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+c*u+a*h-o*l,this.y=n+c*l+o*u-s*h,this.z=r+c*h+s*l-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(At(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ou.copy(this).projectOnVector(e),this.sub(Ou)}reflect(e){return this.sub(Ou.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Hh.prototype.isVector3=!0;var J=Hh,Ou=new J,Sd=new In,Uh=class Uh{constructor(e,t,n,r,s,a,o,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,u)}set(e,t,n,r,s,a,o,c,u){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=s,l[5]=c,l[6]=n,l[7]=a,l[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],l=n[4],h=n[7],f=n[2],p=n[5],v=n[8],_=r[0],g=r[3],m=r[6],x=r[1],E=r[4],y=r[7],R=r[2],A=r[5],P=r[8];return s[0]=a*_+o*x+c*R,s[3]=a*g+o*E+c*A,s[6]=a*m+o*y+c*P,s[1]=u*_+l*x+h*R,s[4]=u*g+l*E+h*A,s[7]=u*m+l*y+h*P,s[2]=f*_+p*x+v*R,s[5]=f*g+p*E+v*A,s[8]=f*m+p*y+v*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],l=e[8];return t*a*l-t*o*u-n*s*l+n*o*c+r*s*u-r*a*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],l=e[8],h=l*a-o*u,f=o*c-l*s,p=u*s-a*c,v=t*h+n*f+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/v;return e[0]=h*_,e[1]=(r*u-l*n)*_,e[2]=(o*n-r*a)*_,e[3]=f*_,e[4]=(l*t-r*c)*_,e[5]=(r*s-o*t)*_,e[6]=p*_,e[7]=(n*c-u*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*a+u*o)+a+e,-r*u,r*c,-r*(-u*a+c*o)+o+t,0,0,1),this}scale(e,t){return Zr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Hu.makeScale(e,t)),this}rotate(e){return Zr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Hu.makeRotation(-e)),this}translate(e,t){return Zr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Hu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Uh.prototype.isMatrix3=!0;var pt=Uh,Hu=new pt,Td=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bd=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ig(){let i={enabled:!0,workingColorSpace:Hn,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Dt&&(r.r=sr(r.r),r.g=sr(r.g),r.b=sr(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Dt&&(r.r=Hs(r.r),r.g=Hs(r.g),r.b=Hs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Qn?Ua:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Zr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Zr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Hn]:{primaries:e,whitePoint:n,transfer:Ua,toXYZ:Td,fromXYZ:bd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:n,transfer:Dt,toXYZ:Td,fromXYZ:bd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),i}var yt=ig();function sr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ss,Cl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ss===void 0&&(Ss=ks("canvas")),Ss.width=e.width,Ss.height=e.height;let r=Ss.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ss}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=ks("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=sr(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(sr(t[n]/255)*255):t[n]=sr(t[n]);return{data:t,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},rg=0,Gs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:rg++}),this.uuid=bi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Uu(r[a].image)):s.push(Uu(r[a]))}else s=Uu(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Uu(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Cl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}var sg=0,Fu=new J,on=class i extends Ei{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ai,r=ai,s=an,a=wi,o=$n,c=Vn,u=i.DEFAULT_ANISOTROPY,l=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=bi(),this.name="",this.source=new Gs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Fu).x}get height(){return this.source.getSize(Fu).y}get depth(){return this.source.getSize(Fu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){st(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){st(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_h)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oi:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case Fs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oi:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case Fs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=_h;on.DEFAULT_ANISOTROPY=1;var Fh=class Fh{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,u=c[0],l=c[4],h=c[8],f=c[1],p=c[5],v=c[9],_=c[2],g=c[6],m=c[10];if(Math.abs(l-f)<.01&&Math.abs(h-_)<.01&&Math.abs(v-g)<.01){if(Math.abs(l+f)<.1&&Math.abs(h+_)<.1&&Math.abs(v+g)<.1&&Math.abs(u+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(u+1)/2,y=(p+1)/2,R=(m+1)/2,A=(l+f)/4,P=(h+_)/4,M=(v+g)/4;return E>y&&E>R?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=A/n,s=P/n):y>R?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=A/r,s=M/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=P/s,r=M/s),this.set(n,r,s,t),this}let x=Math.sqrt((g-v)*(g-v)+(h-_)*(h-_)+(f-l)*(f-l));return Math.abs(x)<.001&&(x=1),this.x=(g-v)/x,this.y=(h-_)/x,this.z=(f-l)/x,this.w=Math.acos((u+p+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this.w=At(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this.w=At(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(At(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Fh.prototype.isVector4=!0;var Bt=Fh,Il=class extends Ei{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},s=new on(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Gs(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},pn=class extends Il{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ba=class extends on{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Pl=class extends on{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Kl=class Kl{constructor(e,t,n,r,s,a,o,c,u,l,h,f,p,v,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,u,l,h,f,p,v,_,g)}set(e,t,n,r,s,a,o,c,u,l,h,f,p,v,_,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=c,m[2]=u,m[6]=l,m[10]=h,m[14]=f,m[3]=p,m[7]=v,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Ts.setFromMatrixColumn(e,0).length(),s=1/Ts.setFromMatrixColumn(e,1).length(),a=1/Ts.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),u=Math.sin(r),l=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let f=a*l,p=a*h,v=o*l,_=o*h;t[0]=c*l,t[4]=-c*h,t[8]=u,t[1]=p+v*u,t[5]=f-_*u,t[9]=-o*c,t[2]=_-f*u,t[6]=v+p*u,t[10]=a*c}else if(e.order==="YXZ"){let f=c*l,p=c*h,v=u*l,_=u*h;t[0]=f+_*o,t[4]=v*o-p,t[8]=a*u,t[1]=a*h,t[5]=a*l,t[9]=-o,t[2]=p*o-v,t[6]=_+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*l,p=c*h,v=u*l,_=u*h;t[0]=f-_*o,t[4]=-a*h,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*l,t[9]=_-f*o,t[2]=-a*u,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*l,p=a*h,v=o*l,_=o*h;t[0]=c*l,t[4]=v*u-p,t[8]=f*u+_,t[1]=c*h,t[5]=_*u+f,t[9]=p*u-v,t[2]=-u,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,p=a*u,v=o*c,_=o*u;t[0]=c*l,t[4]=_-f*h,t[8]=v*h+p,t[1]=h,t[5]=a*l,t[9]=-o*l,t[2]=-u*l,t[6]=p*h+v,t[10]=f-_*h}else if(e.order==="XZY"){let f=a*c,p=a*u,v=o*c,_=o*u;t[0]=c*l,t[4]=-h,t[8]=u*l,t[1]=f*h+_,t[5]=a*l,t[9]=p*h-v,t[2]=v*h-p,t[6]=o*l,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ag,e,og)}lookAt(e,t,n){let r=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),yr.crossVectors(n,Kn),yr.lengthSq()===0&&(Math.abs(n.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),yr.crossVectors(n,Kn)),yr.normalize(),Ko.crossVectors(Kn,yr),r[0]=yr.x,r[4]=Ko.x,r[8]=Kn.x,r[1]=yr.y,r[5]=Ko.y,r[9]=Kn.y,r[2]=yr.z,r[6]=Ko.z,r[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],l=n[1],h=n[5],f=n[9],p=n[13],v=n[2],_=n[6],g=n[10],m=n[14],x=n[3],E=n[7],y=n[11],R=n[15],A=r[0],P=r[4],M=r[8],T=r[12],L=r[1],U=r[5],D=r[9],Y=r[13],V=r[2],C=r[6],N=r[10],I=r[14],O=r[3],W=r[7],ee=r[11],ne=r[15];return s[0]=a*A+o*L+c*V+u*O,s[4]=a*P+o*U+c*C+u*W,s[8]=a*M+o*D+c*N+u*ee,s[12]=a*T+o*Y+c*I+u*ne,s[1]=l*A+h*L+f*V+p*O,s[5]=l*P+h*U+f*C+p*W,s[9]=l*M+h*D+f*N+p*ee,s[13]=l*T+h*Y+f*I+p*ne,s[2]=v*A+_*L+g*V+m*O,s[6]=v*P+_*U+g*C+m*W,s[10]=v*M+_*D+g*N+m*ee,s[14]=v*T+_*Y+g*I+m*ne,s[3]=x*A+E*L+y*V+R*O,s[7]=x*P+E*U+y*C+R*W,s[11]=x*M+E*D+y*N+R*ee,s[15]=x*T+E*Y+y*I+R*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],u=e[13],l=e[2],h=e[6],f=e[10],p=e[14],v=e[3],_=e[7],g=e[11],m=e[15],x=c*p-u*f,E=o*p-u*h,y=o*f-c*h,R=a*p-u*l,A=a*f-c*l,P=a*h-o*l;return t*(_*x-g*E+m*y)-n*(v*x-g*R+m*A)+r*(v*E-_*R+m*P)-s*(v*y-_*A+g*P)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],u=e[6],l=e[10];return t*(a*l-o*u)-n*(s*l-o*c)+r*(s*u-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],l=e[8],h=e[9],f=e[10],p=e[11],v=e[12],_=e[13],g=e[14],m=e[15],x=t*o-n*a,E=t*c-r*a,y=t*u-s*a,R=n*c-r*o,A=n*u-s*o,P=r*u-s*c,M=l*_-h*v,T=l*g-f*v,L=l*m-p*v,U=h*g-f*_,D=h*m-p*_,Y=f*m-p*g,V=x*Y-E*D+y*U+R*L-A*T+P*M;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/V;return e[0]=(o*Y-c*D+u*U)*C,e[1]=(r*D-n*Y-s*U)*C,e[2]=(_*P-g*A+m*R)*C,e[3]=(f*A-h*P-p*R)*C,e[4]=(c*L-a*Y-u*T)*C,e[5]=(t*Y-r*L+s*T)*C,e[6]=(g*y-v*P-m*E)*C,e[7]=(l*P-f*y+p*E)*C,e[8]=(a*D-o*L+u*M)*C,e[9]=(n*L-t*D-s*M)*C,e[10]=(v*A-_*y+m*x)*C,e[11]=(h*y-l*A-p*x)*C,e[12]=(o*T-a*U-c*M)*C,e[13]=(t*U-n*T+r*M)*C,e[14]=(_*E-v*R-g*x)*C,e[15]=(l*R-h*E+f*x)*C,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,u=s*a,l=s*o;return this.set(u*a+n,u*o-r*c,u*c+r*o,0,u*o+r*c,l*o+n,l*c-r*a,0,u*c-r*o,l*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,u=s+s,l=a+a,h=o+o,f=s*u,p=s*l,v=s*h,_=a*l,g=a*h,m=o*h,x=c*u,E=c*l,y=c*h,R=n.x,A=n.y,P=n.z;return r[0]=(1-(_+m))*R,r[1]=(p+y)*R,r[2]=(v-E)*R,r[3]=0,r[4]=(p-y)*A,r[5]=(1-(f+m))*A,r[6]=(g+x)*A,r[7]=0,r[8]=(v+E)*P,r[9]=(g-x)*P,r[10]=(1-(f+_))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Ts.set(r[0],r[1],r[2]).length(),o=Ts.set(r[4],r[5],r[6]).length(),c=Ts.set(r[8],r[9],r[10]).length();s<0&&(a=-a),xi.copy(this);let u=1/a,l=1/o,h=1/c;return xi.elements[0]*=u,xi.elements[1]*=u,xi.elements[2]*=u,xi.elements[4]*=l,xi.elements[5]*=l,xi.elements[6]*=l,xi.elements[8]*=h,xi.elements[9]*=h,xi.elements[10]*=h,t.setFromRotationMatrix(xi),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=Ti,c=!1){let u=this.elements,l=2*s/(t-e),h=2*s/(n-r),f=(t+e)/(t-e),p=(n+r)/(n-r),v,_;if(c)v=s/(a-s),_=a*s/(a-s);else if(o===Ti)v=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Bs)v=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=l,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=h,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=v,u[14]=_,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Ti,c=!1){let u=this.elements,l=2/(t-e),h=2/(n-r),f=-(t+e)/(t-e),p=-(n+r)/(n-r),v,_;if(c)v=1/(a-s),_=a/(a-s);else if(o===Ti)v=-2/(a-s),_=-(a+s)/(a-s);else if(o===Bs)v=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=l,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=h,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=v,u[14]=_,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Kl.prototype.isMatrix4=!0;var xt=Kl,Ts=new J,xi=new xt,ag=new J(0,0,0),og=new J(1,1,1),yr=new J,Ko=new J,Kn=new J,Ed=new xt,Ad=new In,Ui=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],l=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-At(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(At(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-At(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(At(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-l,p),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ed.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ed,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ad.setFromEuler(this),this.setFromQuaternion(Ad,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ui.DEFAULT_ORDER="XYZ";var ka=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},lg=0,wd=new J,bs=new In,Qi=new xt,Zo=new J,Aa=new J,cg=new J,ug=new In,Rd=new J(1,0,0),Cd=new J(0,1,0),Id=new J(0,0,1),Pd={type:"added"},hg={type:"removed"},Es={type:"childadded",child:null},Bu={type:"childremoved",child:null},$t=class i extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lg++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new J,t=new Ui,n=new In,r=new J(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new pt}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(Rd,e)}rotateY(e){return this.rotateOnAxis(Cd,e)}rotateZ(e){return this.rotateOnAxis(Id,e)}translateOnAxis(e,t){return wd.copy(e).applyQuaternion(this.quaternion),this.position.add(wd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rd,e)}translateY(e){return this.translateOnAxis(Cd,e)}translateZ(e){return this.translateOnAxis(Id,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zo.copy(e):Zo.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Aa,Zo,this.up):Qi.lookAt(Zo,Aa,this.up),this.quaternion.setFromRotationMatrix(Qi),r&&(Qi.extractRotation(r.matrixWorld),bs.setFromRotationMatrix(Qi),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pd),Es.child=e,this.dispatchEvent(Es),Es.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hg),Bu.child=e,this.dispatchEvent(Bu),Bu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pd),Es.child=e,this.dispatchEvent(Es),Es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Aa,e,cg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Aa,ug,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let u=0,l=c.length;u<l;u++){let h=c[u];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),u=a(e.textures),l=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),l.length>0&&(n.images=l),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){let c=[];for(let u in o){let l=o[u];delete l.metadata,c.push(l)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};$t.DEFAULT_UP=new J(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vt=class extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}},fg={type:"move"},Vs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,n),m=this._getHandJoint(u,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let l=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=l.position.distanceTo(h.position),p=.02,v=.005;u.inputState.pinching&&f>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fg)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Gp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mr={h:0,s:0,l:0},Jo={h:0,s:0,l:0};function ku(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Qe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,yt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=yt.workingColorSpace){if(e=Ch(e,1),t=At(t,0,1),n=At(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ku(a,s,e+1/3),this.g=ku(a,s,e),this.b=ku(a,s,e-1/3)}return yt.colorSpaceToWorking(this,r),this}setStyle(e,t=qt){function n(s){s!==void 0&&parseFloat(s)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:st("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){let n=Gp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return yt.workingToColorSpace(Cn.copy(this),e),Math.round(At(Cn.r*255,0,255))*65536+Math.round(At(Cn.g*255,0,255))*256+Math.round(At(Cn.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.workingToColorSpace(Cn.copy(this),t);let n=Cn.r,r=Cn.g,s=Cn.b,a=Math.max(n,r,s),o=Math.min(n,r,s),c,u,l=(o+a)/2;if(o===a)c=0,u=0;else{let h=a-o;switch(u=l<=.5?h/(a+o):h/(2-a-o),a){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=u,e.l=l,e}getRGB(e,t=yt.workingColorSpace){return yt.workingToColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=qt){yt.workingToColorSpace(Cn.copy(this),e);let t=Cn.r,n=Cn.g,r=Cn.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Mr),this.setHSL(Mr.h+e,Mr.s+t,Mr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mr),e.getHSL(Jo);let n=Oa(Mr.h,Jo.h,t),r=Oa(Mr.s,Jo.s,t),s=Oa(Mr.l,Jo.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Cn=new Qe;Qe.NAMES=Gp;var za=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Qe(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var wr=class extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},_i=new J,er=new J,zu=new J,tr=new J,As=new J,ws=new J,Ld=new J,Gu=new J,Vu=new J,Wu=new J,qu=new Bt,Xu=new Bt,Yu=new Bt,Ar=class i{constructor(e=new J,t=new J,n=new J){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),_i.subVectors(e,t),r.cross(_i);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){_i.subVectors(r,t),er.subVectors(n,t),zu.subVectors(e,t);let a=_i.dot(_i),o=_i.dot(er),c=_i.dot(zu),u=er.dot(er),l=er.dot(zu),h=a*u-o*o;if(h===0)return s.set(0,0,0),null;let f=1/h,p=(u*c-o*l)*f,v=(a*l-o*c)*f;return s.set(1-p-v,v,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,tr)===null?!1:tr.x>=0&&tr.y>=0&&tr.x+tr.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,tr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,tr.x),c.addScaledVector(a,tr.y),c.addScaledVector(o,tr.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return qu.setScalar(0),Xu.setScalar(0),Yu.setScalar(0),qu.fromBufferAttribute(e,t),Xu.fromBufferAttribute(e,n),Yu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(qu,s.x),a.addScaledVector(Xu,s.y),a.addScaledVector(Yu,s.z),a}static isFrontFacing(e,t,n,r){return _i.subVectors(n,t),er.subVectors(e,t),_i.cross(er).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),er.subVectors(this.a,this.b),_i.cross(er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;As.subVectors(r,n),ws.subVectors(s,n),Gu.subVectors(e,n);let c=As.dot(Gu),u=ws.dot(Gu);if(c<=0&&u<=0)return t.copy(n);Vu.subVectors(e,r);let l=As.dot(Vu),h=ws.dot(Vu);if(l>=0&&h<=l)return t.copy(r);let f=c*h-l*u;if(f<=0&&c>=0&&l<=0)return a=c/(c-l),t.copy(n).addScaledVector(As,a);Wu.subVectors(e,s);let p=As.dot(Wu),v=ws.dot(Wu);if(v>=0&&p<=v)return t.copy(s);let _=p*u-c*v;if(_<=0&&u>=0&&v<=0)return o=u/(u-v),t.copy(n).addScaledVector(ws,o);let g=l*v-p*h;if(g<=0&&h-l>=0&&p-v>=0)return Ld.subVectors(s,r),o=(h-l)/(h-l+(p-v)),t.copy(r).addScaledVector(Ld,o);let m=1/(g+_+f);return a=_*m,o=f*m,t.copy(n).addScaledVector(As,a).addScaledVector(ws,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Pn=class{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,yi):yi.fromBufferAttribute(s,a),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),jo.copy(n.boundingBox)),jo.applyMatrix4(e.matrixWorld),this.union(jo)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wa),$o.subVectors(this.max,wa),Rs.subVectors(e.a,wa),Cs.subVectors(e.b,wa),Is.subVectors(e.c,wa),Sr.subVectors(Cs,Rs),Tr.subVectors(Is,Cs),Vr.subVectors(Rs,Is);let t=[0,-Sr.z,Sr.y,0,-Tr.z,Tr.y,0,-Vr.z,Vr.y,Sr.z,0,-Sr.x,Tr.z,0,-Tr.x,Vr.z,0,-Vr.x,-Sr.y,Sr.x,0,-Tr.y,Tr.x,0,-Vr.y,Vr.x,0];return!Ku(t,Rs,Cs,Is,$o)||(t=[1,0,0,0,1,0,0,0,1],!Ku(t,Rs,Cs,Is,$o))?!1:(Qo.crossVectors(Sr,Tr),t=[Qo.x,Qo.y,Qo.z],Ku(t,Rs,Cs,Is,$o))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},nr=[new J,new J,new J,new J,new J,new J,new J,new J],yi=new J,jo=new Pn,Rs=new J,Cs=new J,Is=new J,Sr=new J,Tr=new J,Vr=new J,wa=new J,$o=new J,Qo=new J,Wr=new J;function Ku(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Wr.fromArray(i,s);let o=r.x*Math.abs(Wr.x)+r.y*Math.abs(Wr.y)+r.z*Math.abs(Wr.z),c=e.dot(Wr),u=t.dot(Wr),l=n.dot(Wr);if(Math.max(-Math.max(c,u,l),Math.min(c,u,l))>o)return!1}return!0}var dn=new J,el=new at,dg=0,Qt=class extends Ei{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wh,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)el.fromBufferAttribute(this,t),el.applyMatrix3(e),this.setXY(t,el.x,el.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix3(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Si(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Si(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Si(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),r=Ft(r,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ga=class extends Qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Va=class extends Qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var wt=class extends Qt{constructor(e,t,n){super(new Float32Array(e),t,n)}},pg=new Pn,Ra=new J,Zu=new J,Bn=class{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):pg.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ra.subVectors(e,this.center);let t=Ra.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ra,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ra.copy(e.center).add(Zu)),this.expandByPoint(Ra.copy(e.center).sub(Zu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},mg=0,si=new xt,Ju=new $t,Ps=new J,Zn=new Pn,Ca=new Pn,yn=new J,Kt=class i extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mg++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bm(e)?Va:Ga)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new pt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,n){return si.makeTranslation(e,t,n),this.applyMatrix4(si),this}scale(e,t,n){return si.makeScale(e,t,n),this.applyMatrix4(si),this}lookAt(e){return Ju.lookAt(e),Ju.updateMatrix(),this.applyMatrix4(Ju.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new wt(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Zn.setFromBufferAttribute(s),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){let n=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Ca.setFromBufferAttribute(o),this.morphTargetsRelative?(yn.addVectors(Zn.min,Ca.min),Zn.expandByPoint(yn),yn.addVectors(Zn.max,Ca.max),Zn.expandByPoint(yn)):(Zn.expandByPoint(Ca.min),Zn.expandByPoint(Ca.max))}Zn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)yn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(yn));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let u=0,l=o.count;u<l;u++)yn.fromBufferAttribute(o,u),c&&(Ps.fromBufferAttribute(e,u),yn.add(Ps)),r=Math.max(r,n.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Qt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let M=0;M<n.count;M++)o[M]=new J,c[M]=new J;let u=new J,l=new J,h=new J,f=new at,p=new at,v=new at,_=new J,g=new J;function m(M,T,L){u.fromBufferAttribute(n,M),l.fromBufferAttribute(n,T),h.fromBufferAttribute(n,L),f.fromBufferAttribute(s,M),p.fromBufferAttribute(s,T),v.fromBufferAttribute(s,L),l.sub(u),h.sub(u),p.sub(f),v.sub(f);let U=1/(p.x*v.y-v.x*p.y);isFinite(U)&&(_.copy(l).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(U),g.copy(h).multiplyScalar(p.x).addScaledVector(l,-v.x).multiplyScalar(U),o[M].add(_),o[T].add(_),o[L].add(_),c[M].add(g),c[T].add(g),c[L].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let M=0,T=x.length;M<T;++M){let L=x[M],U=L.start,D=L.count;for(let Y=U,V=U+D;Y<V;Y+=3)m(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}let E=new J,y=new J,R=new J,A=new J;function P(M){R.fromBufferAttribute(r,M),A.copy(R);let T=o[M];E.copy(T),E.sub(R.multiplyScalar(R.dot(T))).normalize(),y.crossVectors(A,T);let U=y.dot(c[M])<0?-1:1;a.setXYZW(M,E.x,E.y,E.z,U)}for(let M=0,T=x.length;M<T;++M){let L=x[M],U=L.start,D=L.count;for(let Y=U,V=U+D;Y<V;Y+=3)P(e.getX(Y+0)),P(e.getX(Y+1)),P(e.getX(Y+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let r=new J,s=new J,a=new J,o=new J,c=new J,u=new J,l=new J,h=new J;if(e)for(let f=0,p=e.count;f<p;f+=3){let v=e.getX(f+0),_=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),l.subVectors(a,s),h.subVectors(r,s),l.cross(h),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,g),o.add(l),c.add(l),u.add(l),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),l.subVectors(a,s),h.subVectors(r,s),l.cross(h),n.setXYZ(f+0,l.x,l.y,l.z),n.setXYZ(f+1,l.x,l.y,l.z),n.setXYZ(f+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(o,c){let u=o.array,l=o.itemSize,h=o.normalized,f=new u.constructor(c.length*l),p=0,v=0;for(let _=0,g=c.length;_<g;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*l;for(let m=0;m<l;m++)f[v++]=u[p++]}return new Qt(f,l,h)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let c=r[o],u=e(c,n);t.setAttribute(o,u)}let s=this.morphAttributes;for(let o in s){let c=[],u=s[o];for(let l=0,h=u.length;l<h;l++){let f=u[l],p=e(f,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let u=n[c];e.data.attributes[c]=u.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let u=this.morphAttributes[c],l=[];for(let h=0,f=u.length;h<f;h++){let p=u[h];l.push(p.toJSON(e.data))}l.length>0&&(r[c]=l,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let u in r){let l=r[u];this.setAttribute(u,l.clone(t))}let s=e.morphAttributes;for(let u in s){let l=[],h=s[u];for(let f=0,p=h.length;f<p;f++)l.push(h[f].clone(t));this.morphAttributes[u]=l}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let u=0,l=a.length;u<l;u++){let h=a[u];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ws=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=wh,this.updateRanges=[],this.version=0,this.uuid=bi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},On=new J,qs=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)On.fromBufferAttribute(this,t),On.applyMatrix4(e),this.setXYZ(t,On.x,On.y,On.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)On.fromBufferAttribute(this,t),On.applyNormalMatrix(e),this.setXYZ(t,On.x,On.y,On.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)On.fromBufferAttribute(this,t),On.transformDirection(e),this.setXYZ(t,On.x,On.y,On.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Si(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),r=Ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),r=Ft(r,this.array),s=Ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Fa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Fa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ju=new J,gg=new J,vg=new pt,Mi=class{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=ju.subVectors(n,t).cross(gg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(ju),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||vg.getNormalMatrix(e),r=this.coplanarPoint(ju).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},xg=0,Un=class extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xg++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=na,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vh,this.blendDst=xh,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yl,this.stencilZFail=yl,this.stencilZPass=yl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){st(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){st(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Mi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new at().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new at().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ir=new J,$u=new J,tl=new J,nl=new J,Qr=class{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ir)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ir.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ir.copy(this.origin).addScaledVector(this.direction,t),ir.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){$u.copy(e).add(t).multiplyScalar(.5),tl.copy(t).sub(e).normalize(),nl.copy(this.origin).sub($u);let s=e.distanceTo(t)*.5,a=-this.direction.dot(tl),o=nl.dot(this.direction),c=-nl.dot(tl),u=nl.lengthSq(),l=Math.abs(1-a*a),h,f,p,v;if(l>0)if(h=a*c-o,f=a*o-c,v=s*l,h>=0)if(f>=-v)if(f<=v){let _=1/l;h*=_,f*=_,p=h*(h+a*f+2*o)+f*(a*h+f+2*c)+u}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+u;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+u;else f<=-v?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+u):f<=v?(h=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+u):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+u);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy($u).addScaledVector(tl,f),p}intersectSphere(e,t){if(e.radius<0)return null;ir.subVectors(e.center,this.origin);let n=ir.dot(this.direction),r=ir.dot(ir)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c,u=1/this.direction.x,l=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),l>=0?(s=(e.min.y-f.y)*l,a=(e.max.y-f.y)*l):(s=(e.max.y-f.y)*l,a=(e.min.y-f.y)*l),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ir)!==null}intersectTriangle(e,t,n,r,s){let a=this.origin,o=this.direction,c=o.x,u=o.y,l=o.z,h=e.x-a.x,f=e.y-a.y,p=e.z-a.z,v=t.x-a.x,_=t.y-a.y,g=t.z-a.z,m=n.x-a.x,x=n.y-a.y,E=n.z-a.z,y=Math.abs(c),R=Math.abs(u),A=Math.abs(l),P,M,T,L,U,D,Y,V,C,N,I,O;if(y>=R&&y>=A?(T=c,D=h,C=v,O=m,c>=0?(P=u,M=l,L=f,U=p,Y=_,V=g,N=x,I=E):(P=l,M=u,L=p,U=f,Y=g,V=_,N=E,I=x)):R>=A?(T=u,D=f,C=_,O=x,u>=0?(P=l,M=c,L=p,U=h,Y=g,V=v,N=E,I=m):(P=c,M=l,L=h,U=p,Y=v,V=g,N=m,I=E)):(T=l,D=p,C=g,O=E,l>=0?(P=c,M=u,L=h,U=f,Y=v,V=_,N=m,I=x):(P=u,M=c,L=f,U=h,Y=_,V=v,N=x,I=m)),T===0)return null;let W=P/T,ee=M/T,ne=1/T,Ae=L-W*D,Ne=U-ee*D,lt=Y-W*C,qe=V-ee*C,ct=N-W*O,me=I-ee*O,_e=ct*qe-me*lt,we=Ae*me-Ne*ct,it=lt*Ne-qe*Ae;if(r){if(_e<0||we<0||it<0)return null}else if((_e<0||we<0||it<0)&&(_e>0||we>0||it>0))return null;let ze=_e+we+it;if(ze===0)return null;let nt=ne*(_e*D+we*C+it*O);return(ze>0?nt<0:nt>0)?null:this.at(nt/ze,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},mn=class extends Un{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=Zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Nd=new xt,qr=new Qr,il=new Bn,Dd=new J,rl=new J,sl=new J,al=new J,Qu=new J,ol=new J,Od=new J,ll=new J,ke=class extends $t{constructor(e=new Kt,t=new mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){ol.set(0,0,0);for(let c=0,u=s.length;c<u;c++){let l=o[c],h=s[c];l!==0&&(Qu.fromBufferAttribute(h,e),a?ol.addScaledVector(Qu,l):ol.addScaledVector(Qu.sub(t),l))}t.add(ol)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),il.copy(n.boundingSphere),il.applyMatrix4(s),qr.copy(e.ray).recast(e.near),!(il.containsPoint(qr.origin)===!1&&(qr.intersectSphere(il,Dd)===null||qr.origin.distanceToSquared(Dd)>(e.far-e.near)**2))&&(Nd.copy(s).invert(),qr.copy(e.ray).applyMatrix4(Nd),!(n.boundingBox!==null&&qr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qr)))}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,l=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,_=f.length;v<_;v++){let g=f[v],m=a[g.materialIndex],x=Math.max(g.start,p.start),E=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let y=x,R=E;y<R;y+=3){let A=o.getX(y),P=o.getX(y+1),M=o.getX(y+2);r=cl(this,m,e,n,u,l,h,A,P,M),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let v=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let g=v,m=_;g<m;g+=3){let x=o.getX(g),E=o.getX(g+1),y=o.getX(g+2);r=cl(this,a,e,n,u,l,h,x,E,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,_=f.length;v<_;v++){let g=f[v],m=a[g.materialIndex],x=Math.max(g.start,p.start),E=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let y=x,R=E;y<R;y+=3){let A=y,P=y+1,M=y+2;r=cl(this,m,e,n,u,l,h,A,P,M),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let v=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let g=v,m=_;g<m;g+=3){let x=g,E=g+1,y=g+2;r=cl(this,a,e,n,u,l,h,x,E,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function _g(i,e,t,n,r,s,a,o){let c;if(e.side===Mn?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===Gi,o),c===null)return null;ll.copy(o),ll.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(ll);return u<t.near||u>t.far?null:{distance:u,point:ll.clone(),object:i}}function cl(i,e,t,n,r,s,a,o,c,u){i.getVertexPosition(o,rl),i.getVertexPosition(c,sl),i.getVertexPosition(u,al);let l=_g(i,e,t,n,rl,sl,al,Od);if(l){let h=new J;Ar.getBarycoord(Od,rl,sl,al,h),r&&(l.uv=Ar.getInterpolatedAttribute(r,o,c,u,h,new at)),s&&(l.uv1=Ar.getInterpolatedAttribute(s,o,c,u,h,new at)),a&&(l.normal=Ar.getInterpolatedAttribute(a,o,c,u,h,new J),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));let f={a:o,b:c,c:u,normal:new J,materialIndex:0};Ar.getNormal(rl,sl,al,f.normal),l.face=f,l.barycoord=h}return l}var Ia=new Bt,Hd=new Bt,Ud=new Bt,yg=new Bt,Fd=new xt,ul=new J,eh=new Bn,Bd=new xt,th=new Qr,Wa=class extends ke{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=sh,this.bindMatrix=new xt,this.bindMatrixInverse=new xt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Pn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ul),this.boundingBox.expandByPoint(ul)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Bn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ul),this.boundingSphere.expandByPoint(ul)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),eh.copy(this.boundingSphere),eh.applyMatrix4(r),e.ray.intersectsSphere(eh)!==!1&&(Bd.copy(r).invert(),th.copy(e.ray).applyMatrix4(Bd),!(this.boundingBox!==null&&th.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,th)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Bt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===sh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ap?this.bindMatrixInverse.copy(this.bindMatrix).invert():st("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;Hd.fromBufferAttribute(r.attributes.skinIndex,e),Ud.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(Ia.copy(t),t.set(0,0,0,0)):(Ia.set(...t,1),t.set(0,0,0)),Ia.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let a=Ud.getComponent(s);if(a!==0){let o=Hd.getComponent(s);Fd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(yg.copy(Ia).applyMatrix4(Fd),a)}}return t.isVector4&&(t.w=Ia.w),t.applyMatrix4(this.bindMatrixInverse)}},Xs=class extends $t{constructor(){super(),this.isBone=!0,this.type="Bone"}},ar=class extends on{constructor(e=null,t=1,n=1,r,s,a,o,c,u=Xt,l=Xt,h,f){super(null,a,o,c,u,l,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},kd=new xt,Mg=new xt,qa=class i{constructor(e=[],t=[]){this.uuid=bi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){st("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new xt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new xt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:Mg;kd.multiplyMatrices(o,t[s]),kd.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ar(t,e,e,$n,jn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let s=e.bones[n],a=t[s];a===void 0&&(st("Skeleton: No bone found with UUID:",s),a=new Xs),this.bones.push(a),this.boneInverses.push(new xt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let a=t[r];e.bones.push(a.uuid);let o=n[r];e.boneInverses.push(o.toArray())}return e}},or=class extends Qt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ls=new xt,zd=new xt,hl=[],Gd=new Pn,Sg=new xt,Pa=new ke,La=new Bn,es=class extends ke{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new or(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Sg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ls),Gd.copy(e.boundingBox).applyMatrix4(Ls),this.boundingBox.union(Gd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ls),La.copy(e.boundingSphere).applyMatrix4(Ls),this.boundingSphere.union(La)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Pa.geometry=this.geometry,Pa.material=this.material,Pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),La.copy(this.boundingSphere),La.applyMatrix4(n),e.ray.intersectsSphere(La)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ls),zd.multiplyMatrices(n,Ls),Pa.matrixWorld=zd,Pa.raycast(e,hl);for(let a=0,o=hl.length;a<o;a++){let c=hl[a];c.instanceId=s,c.object=this,t.push(c)}hl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new or(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ar(new Float32Array(r*this.count),r,this.count,nc,jn));let s=this.morphTexture.source.data.data,a=0;for(let u=0;u<n.length;u++)a+=n[u];let o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;return s[c]=o,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Xr=new Bn,Tg=new at(.5,.5),fl=new J,Ys=class{constructor(e=new Mi,t=new Mi,n=new Mi,r=new Mi,s=new Mi,a=new Mi){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ti,n=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],u=s[3],l=s[4],h=s[5],f=s[6],p=s[7],v=s[8],_=s[9],g=s[10],m=s[11],x=s[12],E=s[13],y=s[14],R=s[15];if(r[0].setComponents(u-a,p-l,m-v,R-x).normalize(),r[1].setComponents(u+a,p+l,m+v,R+x).normalize(),r[2].setComponents(u+o,p+h,m+_,R+E).normalize(),r[3].setComponents(u-o,p-h,m-_,R-E).normalize(),n)r[4].setComponents(c,f,g,y).normalize(),r[5].setComponents(u-c,p-f,m-g,R-y).normalize();else if(r[4].setComponents(u-c,p-f,m-g,R-y).normalize(),t===Ti)r[5].setComponents(u+c,p+f,m+g,R+y).normalize();else if(t===Bs)r[5].setComponents(c,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xr)}intersectsSprite(e){Xr.center.set(0,0,0);let t=Tg.distanceTo(e.center);return Xr.radius=.7071067811865476+t,Xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(fl.x=r.normal.x>0?e.max.x:e.min.x,fl.y=r.normal.y>0?e.max.y:e.min.y,fl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ks=class extends Un{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ll=new J,Nl=new J,Vd=new xt,Na=new Qr,dl=new Bn,nh=new J,Wd=new J,ts=class extends $t{constructor(e=new Kt,t=new Ks){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Ll.fromBufferAttribute(t,r-1),Nl.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ll.distanceTo(Nl);e.setAttribute("lineDistance",new wt(n,1))}else st("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dl.copy(n.boundingSphere),dl.applyMatrix4(r),dl.radius+=s,e.ray.intersectsSphere(dl)===!1)return;Vd.copy(r).invert(),Na.copy(e.ray).applyMatrix4(Vd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=this.isLineSegments?2:1,l=n.index,f=n.attributes.position;if(l!==null){let p=Math.max(0,a.start),v=Math.min(l.count,a.start+a.count);for(let _=p,g=v-1;_<g;_+=u){let m=l.getX(_),x=l.getX(_+1),E=pl(this,e,Na,c,m,x,_);E&&t.push(E)}if(this.isLineLoop){let _=l.getX(v-1),g=l.getX(p),m=pl(this,e,Na,c,_,g,v-1);m&&t.push(m)}}else{let p=Math.max(0,a.start),v=Math.min(f.count,a.start+a.count);for(let _=p,g=v-1;_<g;_+=u){let m=pl(this,e,Na,c,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){let _=pl(this,e,Na,c,v-1,p,v-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function pl(i,e,t,n,r,s,a){let o=i.geometry.attributes.position;if(Ll.fromBufferAttribute(o,r),Nl.fromBufferAttribute(o,s),t.distanceSqToSegment(Ll,Nl,nh,Wd)>n)return;nh.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(nh);if(!(u<e.near||u>e.far))return{distance:u,point:Wd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var qd=new J,Xd=new J,Xa=class extends ts{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)qd.fromBufferAttribute(t,r),Xd.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+qd.distanceTo(Xd);e.setAttribute("lineDistance",new wt(n,1))}else st("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ya=class extends ts{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Zs=class extends Un{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Yd=new xt,oh=new Qr,ml=new Bn,gl=new J,ns=class extends $t{constructor(e=new Kt,t=new Zs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ml.copy(n.boundingSphere),ml.applyMatrix4(r),ml.radius+=s,e.ray.intersectsSphere(ml)===!1)return;Yd.copy(r).invert(),oh.copy(e.ray).applyMatrix4(Yd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let v=f,_=p;v<_;v++){let g=u.getX(v);gl.fromBufferAttribute(h,g),Kd(gl,g,c,r,e,t,this)}}else{let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let v=f,_=p;v<_;v++)gl.fromBufferAttribute(h,v),Kd(gl,v,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Kd(i,e,t,n,r,s,a){let o=oh.distanceSqToPoint(i);if(o<t){let c=new J;oh.closestPointToPoint(i,c),c.applyMatrix4(n);let u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ka=class extends on{constructor(e=[],t=Nr,n,r,s,a,o,c,u,l){super(e,t,n,r,s,a,o,c,u,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Rr=class extends on{constructor(e,t,n,r,s,a,o,c,u){super(e,t,n,r,s,a,o,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Cr=class extends on{constructor(e,t,n=Ri,r,s,a,o=Xt,c=Xt,u,l=Hi,h=1){if(l!==Hi&&l!==Dr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,r,s,a,o,c,l,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Dl=class extends Cr{constructor(e,t=Ri,n=Nr,r,s,a=Xt,o=Xt,c,u=Hi){let l={width:e,height:e,depth:1},h=[l,l,l,l,l,l];super(e,e,t,n,r,s,a,o,c,u),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Za=class extends on{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},en=class i extends Kt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],u=[],l=[],h=[],f=0,p=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,r,a,2),v("x","z","y",1,-1,e,n,-t,r,a,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new wt(u,3)),this.setAttribute("normal",new wt(l,3)),this.setAttribute("uv",new wt(h,2));function v(_,g,m,x,E,y,R,A,P,M,T){let L=y/P,U=R/M,D=y/2,Y=R/2,V=A/2,C=P+1,N=M+1,I=0,O=0,W=new J;for(let ee=0;ee<N;ee++){let ne=ee*U-Y;for(let Ae=0;Ae<C;Ae++){let Ne=Ae*L-D;W[_]=Ne*x,W[g]=ne*E,W[m]=V,u.push(W.x,W.y,W.z),W[_]=0,W[g]=0,W[m]=A>0?1:-1,l.push(W.x,W.y,W.z),h.push(Ae/P),h.push(1-ee/M),I+=1}}for(let ee=0;ee<M;ee++)for(let ne=0;ne<P;ne++){let Ae=f+ne+C*ee,Ne=f+ne+C*(ee+1),lt=f+(ne+1)+C*(ee+1),qe=f+(ne+1)+C*ee;c.push(Ae,Ne,qe),c.push(Ne,lt,qe),O+=6}o.addGroup(p,O,T),p+=O,f+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Ja=class i extends Kt{constructor(e=1,t=1,n=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let a=[],o=[],c=[],u=[],l=t/2,h=Math.PI/2*e,f=t,p=2*h+f,v=n*2+s,_=r+1,g=new J,m=new J;for(let x=0;x<=v;x++){let E=0,y=0,R=0,A=0;if(x<=n){let T=x/n,L=T*Math.PI/2;y=-l-e*Math.cos(L),R=e*Math.sin(L),A=-e*Math.cos(L),E=T*h}else if(x<=n+s){let T=(x-n)/s;y=-l+T*t,R=e,A=0,E=h+T*f}else{let T=(x-n-s)/n,L=T*Math.PI/2;y=l+e*Math.sin(L),R=e*Math.cos(L),A=e*Math.sin(L),E=h+f+T*h}let P=Math.max(0,Math.min(1,E/p)),M=0;x===0?M=.5/r:x===v&&(M=-.5/r);for(let T=0;T<=r;T++){let L=T/r,U=L*Math.PI*2,D=Math.sin(U),Y=Math.cos(U);m.x=-R*Y,m.y=y,m.z=R*D,o.push(m.x,m.y,m.z),g.set(-R*Y,A,R*D),g.normalize(),c.push(g.x,g.y,g.z),u.push(L+M,P)}if(x>0){let T=(x-1)*_;for(let L=0;L<r;L++){let U=T+L,D=T+L+1,Y=x*_+L,V=x*_+L+1;a.push(U,D,Y),a.push(D,V,Y)}}}this.setIndex(a),this.setAttribute("position",new wt(o,3)),this.setAttribute("normal",new wt(c,3)),this.setAttribute("uv",new wt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var Fi=class i extends Kt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let u=this;r=Math.floor(r),s=Math.floor(s);let l=[],h=[],f=[],p=[],v=0,_=[],g=n/2,m=0;x(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(l),this.setAttribute("position",new wt(h,3)),this.setAttribute("normal",new wt(f,3)),this.setAttribute("uv",new wt(p,2));function x(){let y=new J,R=new J,A=0,P=(t-e)/n;for(let M=0;M<=s;M++){let T=[],L=M/s,U=L*(t-e)+e;for(let D=0;D<=r;D++){let Y=D/r,V=Y*c+o,C=Math.sin(V),N=Math.cos(V);R.x=U*C,R.y=-L*n+g,R.z=U*N,h.push(R.x,R.y,R.z),y.set(C,P,N).normalize(),f.push(y.x,y.y,y.z),p.push(Y,1-L),T.push(v++)}_.push(T)}for(let M=0;M<r;M++)for(let T=0;T<s;T++){let L=_[T][M],U=_[T+1][M],D=_[T+1][M+1],Y=_[T][M+1];(e>0||T!==0)&&(l.push(L,U,Y),A+=3),(t>0||T!==s-1)&&(l.push(U,D,Y),A+=3)}u.addGroup(m,A,0),m+=A}function E(y){let R=v,A=new at,P=new J,M=0,T=y===!0?e:t,L=y===!0?1:-1;for(let D=1;D<=r;D++)h.push(0,g*L,0),f.push(0,L,0),p.push(.5,.5),v++;let U=v;for(let D=0;D<=r;D++){let V=D/r*c+o,C=Math.cos(V),N=Math.sin(V);P.x=T*N,P.y=g*L,P.z=T*C,h.push(P.x,P.y,P.z),f.push(0,L,0),A.x=C*.5+.5,A.y=N*.5*L+.5,p.push(A.x,A.y),v++}for(let D=0;D<r;D++){let Y=R+D,V=U+D;y===!0?l.push(V,V+1,Y):l.push(V+1,V,Y),M+=3}u.addGroup(m,M,y===!0?1:2),m+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ja=class i extends Fi{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ol=class i extends Kt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],a=[];o(r),u(n),l(),this.setAttribute("position",new wt(s,3)),this.setAttribute("normal",new wt(s.slice(),3)),this.setAttribute("uv",new wt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let E=new J,y=new J,R=new J;for(let A=0;A<t.length;A+=3)p(t[A+0],E),p(t[A+1],y),p(t[A+2],R),c(E,y,R,x)}function c(x,E,y,R){let A=R+1,P=[];for(let M=0;M<=A;M++){P[M]=[];let T=x.clone().lerp(y,M/A),L=E.clone().lerp(y,M/A),U=A-M;for(let D=0;D<=U;D++)D===0&&M===A?P[M][D]=T:P[M][D]=T.clone().lerp(L,D/U)}for(let M=0;M<A;M++)for(let T=0;T<2*(A-M)-1;T++){let L=Math.floor(T/2);T%2===0?(f(P[M][L+1]),f(P[M+1][L]),f(P[M][L])):(f(P[M][L+1]),f(P[M+1][L+1]),f(P[M+1][L]))}}function u(x){let E=new J;for(let y=0;y<s.length;y+=3)E.x=s[y+0],E.y=s[y+1],E.z=s[y+2],E.normalize().multiplyScalar(x),s[y+0]=E.x,s[y+1]=E.y,s[y+2]=E.z}function l(){let x=new J;for(let E=0;E<s.length;E+=3){x.x=s[E+0],x.y=s[E+1],x.z=s[E+2];let y=g(x)/2/Math.PI+.5,R=m(x)/Math.PI+.5;a.push(y,1-R)}v(),h()}function h(){for(let x=0;x<a.length;x+=6){let E=a[x+0],y=a[x+2],R=a[x+4],A=Math.max(E,y,R),P=Math.min(E,y,R);A>.9&&P<.1&&(E<.2&&(a[x+0]+=1),y<.2&&(a[x+2]+=1),R<.2&&(a[x+4]+=1))}}function f(x){s.push(x.x,x.y,x.z)}function p(x,E){let y=x*3;E.x=e[y+0],E.y=e[y+1],E.z=e[y+2]}function v(){let x=new J,E=new J,y=new J,R=new J,A=new at,P=new at,M=new at;for(let T=0,L=0;T<s.length;T+=9,L+=6){x.set(s[T+0],s[T+1],s[T+2]),E.set(s[T+3],s[T+4],s[T+5]),y.set(s[T+6],s[T+7],s[T+8]),A.set(a[L+0],a[L+1]),P.set(a[L+2],a[L+3]),M.set(a[L+4],a[L+5]),R.copy(x).add(E).add(y).divideScalar(3);let U=g(R);_(A,L+0,x,U),_(P,L+2,E,U),_(M,L+4,y,U)}}function _(x,E,y,R){R<0&&x.x===1&&(a[E]=x.x-1),y.x===0&&y.z===0&&(a[E]=R/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Ir=class i extends Ol{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Jn=class i extends Kt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),u=o+1,l=c+1,h=e/o,f=t/c,p=[],v=[],_=[],g=[];for(let m=0;m<l;m++){let x=m*f-a;for(let E=0;E<u;E++){let y=E*h-s;v.push(y,-x,0),_.push(0,0,1),g.push(E/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let x=0;x<o;x++){let E=x+u*m,y=x+u*(m+1),R=x+1+u*(m+1),A=x+1+u*m;p.push(E,y,A),p.push(y,R,A)}this.setIndex(p),this.setAttribute("position",new wt(v,3)),this.setAttribute("normal",new wt(_,3)),this.setAttribute("uv",new wt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var is=class i extends Kt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),u=0,l=[],h=new J,f=new J,p=[],v=[],_=[],g=[];for(let m=0;m<=n;m++){let x=[],E=m/n,y=a+E*o,R=e*Math.cos(y),A=Math.sqrt(e*e-R*R),P=0;m===0&&a===0?P=.5/t:m===n&&c===Math.PI&&(P=-.5/t);for(let M=0;M<=t;M++){let T=M/t,L=r+T*s;h.x=-A*Math.cos(L),h.y=R,h.z=A*Math.sin(L),v.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),g.push(T+P,1-E),x.push(u++)}l.push(x)}for(let m=0;m<n;m++)for(let x=0;x<t;x++){let E=l[m][x+1],y=l[m][x],R=l[m+1][x],A=l[m+1][x+1];(m!==0||a>0)&&p.push(E,y,A),(m!==n-1||c<Math.PI)&&p.push(y,R,A)}this.setIndex(p),this.setAttribute("position",new wt(v,3)),this.setAttribute("normal",new wt(_,3)),this.setAttribute("uv",new wt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var li=class i extends Kt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let c=[],u=[],l=[],h=[],f=new J,p=new J,v=new J;for(let _=0;_<=n;_++){let g=a+_/n*o;for(let m=0;m<=r;m++){let x=m/r*s;p.x=(e+t*Math.cos(g))*Math.cos(x),p.y=(e+t*Math.cos(g))*Math.sin(x),p.z=t*Math.sin(g),u.push(p.x,p.y,p.z),f.x=e*Math.cos(x),f.y=e*Math.sin(x),v.subVectors(p,f).normalize(),l.push(v.x,v.y,v.z),h.push(m/r),h.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=r;g++){let m=(r+1)*_+g-1,x=(r+1)*(_-1)+g-1,E=(r+1)*(_-1)+g,y=(r+1)*_+g;c.push(m,x,y),c.push(x,E,y)}this.setIndex(c),this.setAttribute("position",new wt(u,3)),this.setAttribute("normal",new wt(l,3)),this.setAttribute("uv",new wt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function hs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(Zd(r))r.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Zd(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Ln(i){let e={};for(let t=0;t<i.length;t++){let n=hs(i[t]);for(let r in n)e[r]=n[r]}return e}function Zd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function bg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ph(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}var dr={clone:hs,merge:Ln},Eg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ag=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,tn=class extends Un{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Eg,this.fragmentShader=Ag,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hs(e.uniforms),this.uniformsGroups=bg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Qe().setHex(r.value);break;case"v2":this.uniforms[n].value=new at().fromArray(r.value);break;case"v3":this.uniforms[n].value=new J().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Bt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new pt().fromArray(r.value);break;case"m4":this.uniforms[n].value=new xt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Js=class extends tn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Zt=class extends Un{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=So,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},kn=class extends Zt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new at(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return At(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var $a=class extends Un{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=So,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=Zl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Hl=class extends Un{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ul=class extends Un{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Er(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ml(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function wg(i){function e(r,s){return i[r]-i[s]}let t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Jd(i,e,t){let n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let c=0;c!==e;++c)r[a++]=i[o+c]}return r}function Rg(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}var Bi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break t}a=t.length;break n}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Fl=class extends Bi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yr,endingEnd:Yr}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Kr:s=e,o=2*t-n;break;case Ha:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Kr:a=e,c=2*n-t;break;case Ha:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}let u=(n-t)*.5,l=this.valueSize;this._weightPrev=u/(t-o),this._weightNext=u/(c-n),this._offsetPrev=s*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,l=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,v=(n-t)/(r-t),_=v*v,g=_*v,m=-f*g+2*f*_-f*v,x=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*v+1,E=(-1-p)*g+(1.5+p)*_+.5*v,y=p*g-p*_;for(let R=0;R!==o;++R)s[R]=m*a[l+R]+x*a[u+R]+E*a[c+R]+y*a[h+R];return s}},Qa=class extends Bi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,l=(n-t)/(r-t),h=1-l;for(let f=0;f!==o;++f)s[f]=a[u+f]*h+a[c+f]*l;return s}},Bl=class extends Bi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},kl=class extends Bi{interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,l=this.inTangents,h=this.outTangents;if(!l||!h){let v=(n-t)/(r-t),_=1-v;for(let g=0;g!==o;++g)s[g]=a[u+g]*_+a[c+g]*v;return s}let f=o*2,p=e-1;for(let v=0;v!==o;++v){let _=a[u+v],g=a[c+v],m=p*f+v*2,x=h[m],E=h[m+1],y=e*f+v*2,R=l[y],A=l[y+1],P=Ig(n,t,x,R,r);s[v]=Vp(P,_,E,A,g)}return s}};function Vp(i,e,t,n,r){let s=1-i;return s*s*s*e+3*s*s*i*t+3*s*i*i*n+i*i*i*r}function Cg(i,e,t,n,r){let s=1-i;return 3*s*s*(t-e)+6*s*i*(n-t)+3*i*i*(r-n)}function Ig(i,e,t,n,r){let s=(i-e)/(r-e);for(let a=0;a<8;a++){let o=Vp(s,e,t,n,r)-i;if(Math.abs(o)<1e-10)break;let c=Cg(s,e,t,n,r);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}var zn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Er(t,this.TimeBufferType),this.values=Er(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Er(e.times,Array),values:Er(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),Ml(e.settings)&&(n.settings={inTangents:Er(e.settings.inTangents,Array),outTangents:Er(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Bl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Qa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new kl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Jr:t=this.InterpolantFactoryMethodDiscrete;break;case jr:t=this.InterpolantFactoryMethodLinear;break;case _l:t=this.InterpolantFactoryMethodSmooth;break;case ah:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return st("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Jr;case this.InterpolantFactoryMethodLinear:return jr;case this.InterpolantFactoryMethodSmooth:return _l;case this.InterpolantFactoryMethodBezier:return ah}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Ml(this.settings)&&(jd(this.settings.inTangents,e),jd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ft("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(ft("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){ft("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){ft("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&km(r))for(let o=0,c=r.length;o!==c;++o){let u=r[o];if(isNaN(u)){ft("KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===_l,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,u=e[o],l=e[o+1];if(u!==l&&(o!==1||u!==e[0]))if(r)c=!0;else{let h=o*n,f=h-n,p=h+n;for(let v=0;v!==n;++v){let _=t[h+v];if(_!==t[f+v]||_!==t[p+v]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,u=0;u!==n;++u)t[c+u]=t[o+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Ml(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function jd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}zn.prototype.ValueTypeName="";zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=jr;var lr=class extends zn{constructor(e,t,n){super(e,t,n)}};lr.prototype.ValueTypeName="bool";lr.prototype.ValueBufferType=Array;lr.prototype.DefaultInterpolation=Jr;lr.prototype.InterpolantFactoryMethodLinear=void 0;lr.prototype.InterpolantFactoryMethodSmooth=void 0;var eo=class extends zn{constructor(e,t,n,r){super(e,t,n,r)}};eo.prototype.ValueTypeName="color";var cr=class extends zn{constructor(e,t,n,r){super(e,t,n,r)}};cr.prototype.ValueTypeName="number";var zl=class extends Bi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t),u=e*o;for(let l=u+o;u!==l;u+=4)In.slerpFlat(s,0,a,u-o,a,u,c);return s}},ur=class extends zn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new zl(this.times,this.values,this.getValueSize(),e)}};ur.prototype.ValueTypeName="quaternion";ur.prototype.InterpolantFactoryMethodSmooth=void 0;var hr=class extends zn{constructor(e,t,n){super(e,t,n)}};hr.prototype.ValueTypeName="string";hr.prototype.ValueBufferType=Array;hr.prototype.DefaultInterpolation=Jr;hr.prototype.InterpolantFactoryMethodLinear=void 0;hr.prototype.InterpolantFactoryMethodSmooth=void 0;var Pr=class extends zn{constructor(e,t,n,r){super(e,t,n,r)}};Pr.prototype.ValueTypeName="vector";var rs=class{constructor(e="",t=-1,n=[],r=Fc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=bi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Lg(n[a]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(zn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let s=t.length,a=[];for(let o=0;o<s;o++){let c=[],u=[];c.push((o+s-1)%s,o,(o+1)%s),u.push(0,1,0);let l=wg(c);c=Jd(c,1,l),u=Jd(u,1,l),!r&&c[0]===0&&(c.push(s),u.push(u[0])),a.push(new cr(".morphTargetInfluences["+t[o].name+"]",c,u).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let u=e[o],l=u.name.match(s);if(l&&l.length>1){let h=l[1],f=r[h];f||(r[h]=f=[]),f.push(u)}}let a=[];for(let o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Pg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return cr;case"vector":case"vector2":case"vector3":case"vector4":return Pr;case"color":return eo;case"quaternion":return ur;case"bool":case"boolean":return lr;case"string":return hr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Lg(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Pg(i.type);if(i.times===void 0){let n=[],r=[];Rg(i.keys,n,r,"value"),i.times=n,i.values=r}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Ml(i.settings)&&(t.settings={inTangents:Er(i.settings.inTangents,Float32Array),outTangents:Er(i.settings.outTangents,Float32Array)}),t}var Oi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&($d(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!$d(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function $d(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Gl=class{constructor(e,t,n){let r=this,s=!1,a=0,o=0,c,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(l){o++,s===!1&&r.onStart!==void 0&&r.onStart(l,a,o),s=!0},this.itemEnd=function(l){a++,r.onProgress!==void 0&&r.onProgress(l,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(l){r.onError!==void 0&&r.onError(l)},this.resolveURL=function(l){return l=l.normalize("NFC"),c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,h){return u.push(l,h),this},this.removeHandler=function(l){let h=u.indexOf(l);return h!==-1&&u.splice(h,2),this},this.getHandler=function(l){for(let h=0,f=u.length;h<f;h+=2){let p=u[h],v=u[h+1];if(p.global&&(p.lastIndex=0),p.test(l))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Wp=new Gl,ki=class{constructor(e){this.manager=e!==void 0?e:Wp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ki.DEFAULT_MATERIAL_NAME="__DEFAULT";var rr={},lh=class extends Error{constructor(e,t){super(e),this.response=t}},js=class extends ki{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Oi.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(rr[e]!==void 0){rr[e].push({onLoad:t,onProgress:n,onError:r});return}rr[e]=[],rr[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&st("FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||u.body===void 0||u.body.getReader===void 0)return u;let l=rr[e],h=u.body.getReader(),f=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),p=f?parseInt(f):0,v=p!==0,_=0,g=new ReadableStream({start(m){x();function x(){h.read().then(({done:E,value:y})=>{if(E)m.close();else{_+=y.byteLength;let R=new ProgressEvent("progress",{lengthComputable:v,loaded:_,total:p});for(let A=0,P=l.length;A<P;A++){let M=l[A];M.onProgress&&M.onProgress(R)}m.enqueue(y),x()}},E=>{m.error(E)})}}});return new Response(g)}else throw new lh(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(c){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(l=>new DOMParser().parseFromString(l,o));case"json":return u.json();default:if(o==="")return u.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return u.arrayBuffer().then(v=>p.decode(v))}}}).then(u=>{Oi.add(`file:${e}`,u);let l=rr[e];delete rr[e];for(let h=0,f=l.length;h<f;h++){let p=l[h];p.onLoad&&p.onLoad(u)}}).catch(u=>{let l=rr[e];if(l===void 0)throw this.manager.itemError(e),u;delete rr[e];for(let h=0,f=l.length;h<f;h++){let p=l[h];p.onError&&p.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ns=new WeakMap,Vl=class extends ki{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Oi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=Ns.get(a);h===void 0&&(h=[],Ns.set(a,h)),h.push({onLoad:t,onError:r})}return a}let o=ks("img");function c(){l(),t&&t(this);let h=Ns.get(this)||[];for(let f=0;f<h.length;f++){let p=h[f];p.onLoad&&p.onLoad(this)}Ns.delete(this),s.manager.itemEnd(e)}function u(h){l(),r&&r(h),Oi.remove(`image:${e}`);let f=Ns.get(this)||[];for(let p=0;p<f.length;p++){let v=f[p];v.onError&&v.onError(h)}Ns.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function l(){o.removeEventListener("load",c,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Oi.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var ss=class extends ki{constructor(e){super(e)}load(e,t,n,r){let s=new on,a=new Vl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},Lr=class extends $t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},$s=class extends Lr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ih=new xt,Qd=new J,ep=new J,Qs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=Vn,this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ys,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Qd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qd),ep.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ep),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){ih.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ih,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,u=r?r.y/s.y:0;e.coordinateSystem===Bs||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,.5,.5,0,0,0,1),t.multiply(ih)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},vl=new J,xl=new In,Di=new J,to=class extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(vl,xl,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vl,xl,Di.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(vl,xl,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vl,xl,Di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},br=new J,tp=new at,np=new at,sn=class extends to{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=$r*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Da*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $r*2*Math.atan(Math.tan(Da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(br.x,br.y).multiplyScalar(-e/br.z),br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(br.x,br.y).multiplyScalar(-e/br.z)}getViewSize(e,t){return this.getViewBounds(e,tp,np),t.subVectors(np,tp)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Da*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/u,r*=a.width/c,n*=a.height/u}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ch=class extends Qs{constructor(){super(new sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=$r*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},no=class extends Lr{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new ch}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},uh=class extends Qs{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0}},Gn=class extends Lr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new uh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},zi=class extends to{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=l*this.view.offsetY,c=o-l*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},hh=class extends Qs{constructor(){super(new zi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},as=class extends Lr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new hh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},ea=class extends Lr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var fr=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var rh=new WeakMap,io=class extends ki{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&st("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&st("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Oi.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(u=>{rh.has(a)===!0?(r&&r(rh.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(u),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(u){return Oi.add(`image-bitmap:${e}`,u),t&&t(u),s.manager.itemEnd(e),u}).catch(function(u){r&&r(u),rh.set(c,u),Oi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Oi.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ds=-90,Os=1,Wl=class extends $t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new sn(Ds,Os,e,t);r.layers=this.layers,this.add(r);let s=new sn(Ds,Os,e,t);s.layers=this.layers,this.add(s);let a=new sn(Ds,Os,e,t);a.layers=this.layers,this.add(a);let o=new sn(Ds,Os,e,t);o.layers=this.layers,this.add(o);let c=new sn(Ds,Os,e,t);c.layers=this.layers,this.add(c);let u=new sn(Ds,Os,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(let u of t)this.remove(u);if(e===Ti)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,u,l]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(h,f,p),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},ql=class extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ro=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Ng.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Ng(){this._document.hidden===!1&&this.reset()}var Xl=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,s,a;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:r=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,r=this.valueSize,s=e*r+r,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==r;++o)n[s+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,s,0,o,r)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,r=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let c=t*this._origIndex;this._mixBufferRegion(n,r,c,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let c=t,u=t+t;c!==u;++c)if(n[c]!==n[c+t]){o.setValue(n,r);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let s=n,a=r;s!==a;++s)t[s]=t[r+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,s){if(r>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,r){In.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,s){let a=this._workIndex*s;In.multiplyQuaternionsFlat(e,a,e,t,e,n),In.slerpFlat(e,t,e,t,e,a,r)}_lerp(e,t,n,r,s){let a=1-r;for(let o=0;o!==s;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*r}}_lerpAdditive(e,t,n,r,s){for(let a=0;a!==s;++a){let o=t+a;e[o]=e[o]+e[n+a]*r}}},Lh="\\[\\]\\.:\\/",Dg=new RegExp("["+Lh+"]","g"),Nh="[^"+Lh+"]",Og="[^"+Lh.replace("\\.","")+"]",Hg=/((?:WC+[\/:])*)/.source.replace("WC",Nh),Ug=/(WCOD+)?/.source.replace("WCOD",Og),Fg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nh),Bg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nh),kg=new RegExp("^"+Hg+Ug+Fg+Bg+"$"),zg=["material","materials","bones","map"],fh=class{constructor(e,t,n){let r=n||Wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Wt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Dg,"")}static parseTrackName(e){let t=kg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);zg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){st("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ft("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ft("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let l=0;l<e.length;l++)if(e[l].name===u){u=l;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ft("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ft("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){ft("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let a=e[r];if(a===void 0){let u=t.nodeName;ft("PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Wt.Composite=fh;Wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Wt.prototype.GetterByBindingType=[Wt.prototype._getValue_direct,Wt.prototype._getValue_array,Wt.prototype._getValue_arrayElement,Wt.prototype._getValue_toArray];Wt.prototype.SetterByBindingTypeAndVersioning=[[Wt.prototype._setValue_direct,Wt.prototype._setValue_direct_setNeedsUpdate,Wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_array,Wt.prototype._setValue_array_setNeedsUpdate,Wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_arrayElement,Wt.prototype._setValue_arrayElement_setNeedsUpdate,Wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_fromArray,Wt.prototype._setValue_fromArray_setNeedsUpdate,Wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Yl=class{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;let s=t.tracks,a=s.length,o=new Array(a),c={endingStart:Yr,endingEnd:Yr};for(let u=0;u!==a;++u){let l=s[u].createInterpolant(null);o[u]=l,l.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Uc,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let r=this._clip.duration,s=e._clip.duration,a=s/r,o=r/s;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let r=this._mixer,s=r.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,u=o.sampleValues;return c[0]=s,c[1]=s+n,u[0]=e/a,u[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,u=this._propertyBindings;switch(this.blendMode){case Rp:for(let l=0,h=c.length;l!==h;++l)c[l].evaluate(a),u[l].accumulateAdditive(o);break;case Fc:default:for(let l=0,h=c.length;l!==h;++l)c[l].evaluate(a),u[l].accumulate(r,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,r=this.time+e,s=this._loopCount,a=n===wp;if(e===0)return s===-1?r:a&&(s&1)===1?t-r:r;if(n===Hc){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),r>=t||r<0){let o=Math.floor(r/t);r-=t*o,s+=Math.abs(o);let c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let u=e<0;this._setEndings(u,!u,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=s,this.time=r;if(a&&(s&1)===1)return t-r}return r}_setEndings(e,t,n){let r=this._interpolantSettings;n?(r.endingStart=Kr,r.endingEnd=Kr):(e?r.endingStart=this.zeroSlopeAtStart?Kr:Yr:r.endingStart=Ha,t?r.endingEnd=this.zeroSlopeAtEnd?Kr:Yr:r.endingEnd=Ha)}_scheduleFading(e,t,n){let r=this._mixer,s=r.time,a=this._weightInterpolant;a===null&&(a=r._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=s,c[0]=t,o[1]=s+e,c[1]=n,this}},Gg=new Float32Array(1),so=class extends Ei{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,r=e._clip.tracks,s=r.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,u=this._bindingsByRootAndName,l=u[c];l===void 0&&(l={},u[c]=l);for(let h=0;h!==s;++h){let f=r[h],p=f.name,v=l[p];if(v!==void 0)++v.referenceCount,a[h]=v;else{if(v=a[h],v!==void 0){v._cacheIndex===null&&(++v.referenceCount,this._addInactiveBinding(v,c,p));continue}let _=t&&t._propertyBindings[h].binding.parsedPath;v=new Xl(Wt.create(n,p,_),f.ValueTypeName,f.getValueSize()),++v.referenceCount,this._addInactiveBinding(v,c,p),a[h]=v}o[h].resultBuffer=v.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,n)}let t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){let s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){let s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let r=this._actions,s=this._actionsByClip,a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=r.length,r.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,a=this._actionsByClip,o=a[s],c=o.knownActions,u=c[c.length-1],l=e._byClipCacheIndex;u._byClipCacheIndex=l,c[l]=u,c.pop(),e._byClipCacheIndex=null;let h=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],c.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){let s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){let r=this._bindingsByRootAndName,s=this._bindings,a=r[t];a===void 0&&(a={},r[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,r=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[r],c=t[t.length-1],u=e._cacheIndex;c._cacheIndex=u,t[u]=c,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[r]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Qa(new Float32Array(2),new Float32Array(2),1,Gg),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){let r=t||this._root,s=r.uuid,a=typeof e=="string"?rs.findByName(r,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],u=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Fc),c!==void 0){let h=c.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;u=c.knownActions[0],a===null&&(a=u._clip)}if(a===null)return null;let l=new Yl(this,a,t,n);return this._bindAction(l,u),this._addInactiveAction(l,o,s),l}existingAction(e,t){let n=t||this._root,r=n.uuid,s=typeof e=="string"?rs.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[r]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,r=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let u=0;u!==n;++u)t[u]._update(r,e,s,a);let o=this._bindings,c=this._nActiveBindings;for(let u=0;u!==c;++u)o[u].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,r=this._actionsByClip,s=r[n];if(s!==void 0){let a=s.knownActions;for(let o=0,c=a.length;o!==c;++o){let u=a[o];this._deactivateAction(u);let l=u._cacheIndex,h=t[t.length-1];u._cacheIndex=null,u._byClipCacheIndex=null,h._cacheIndex=l,t[l]=h,t.pop(),this._removeInactiveBindingsForAction(u)}delete r[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(let a in s){let o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Bh=class Bh{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};Bh.prototype.isMatrix2=!0;var dh=Bh;function Dh(i,e,t,n){let r=Vg(n);switch(t){case bh:return i*e;case nc:return i*e/r.components*r.byteLength;case ic:return i*e/r.components*r.byteLength;case Or:return i*e*2/r.components*r.byteLength;case rc:return i*e*2/r.components*r.byteLength;case Eh:return i*e*3/r.components*r.byteLength;case $n:return i*e*4/r.components*r.byteLength;case sc:return i*e*4/r.components*r.byteLength;case mo:case go:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case vo:case xo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oc:case cc:return Math.max(i,16)*Math.max(e,8)/4;case ac:case lc:return Math.max(i,8)*Math.max(e,8)/2;case uc:case hc:case dc:case pc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fc:case _o:case mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case xc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case _c:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case yc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case bc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ac:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case wc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Rc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Cc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ic:case Pc:case Lc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Nc:case Dc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case yo:case Oc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vg(i){switch(i){case Vn:case yh:return{byteLength:1,components:1};case ra:case Mh:case Tn:return{byteLength:2,components:1};case ec:case tc:return{byteLength:2,components:4};case Ri:case Ql:case jn:return{byteLength:4,components:1};case Sh:case Th:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function f0(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function qg(i){let e=new WeakMap;function t(o,c){let u=o.array,l=o.usage,h=u.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,u,l),o.onUploadCallback();let p;if(u instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array!="undefined"&&u instanceof Float16Array)p=i.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=i.SHORT;else if(u instanceof Uint32Array)p=i.UNSIGNED_INT;else if(u instanceof Int32Array)p=i.INT;else if(u instanceof Int8Array)p=i.BYTE;else if(u instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,u){let l=c.array,h=c.updateRanges;if(i.bindBuffer(u,o),h.length===0)i.bufferSubData(u,0,l);else{h.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<h.length;p++){let v=h[f],_=h[p];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++f,h[f]=_)}h.length=f+1;for(let p=0,v=h.length;p<v;p++){let _=h[p];i.bufferSubData(u,_.start*l.BYTES_PER_ELEMENT,l,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let l=e.get(o);(!l||l.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=e.get(o);if(u===void 0)e.set(o,t(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,c),u.version=o.version}}return{get:r,remove:s,update:a}}var Xg=`#ifdef USE_ALPHAHASH
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
#endif`,Av=`#ifdef USE_ENVMAP
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
#endif`,wv=`#ifdef USE_ENVMAP
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
material.specularStrength = specularStrength;`,Hv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uv=`uniform bool receiveShadow;
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
#endif`,Ax=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wx=`#ifdef USE_ROUGHNESSMAP
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
#endif`,Hx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ux=`#ifdef USE_SPECULARMAP
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
}`,St={alphahash_fragment:Xg,alphahash_pars_fragment:Yg,alphamap_fragment:Kg,alphamap_pars_fragment:Zg,alphatest_fragment:Jg,alphatest_pars_fragment:jg,aomap_fragment:$g,aomap_pars_fragment:Qg,batching_pars_vertex:ev,batching_vertex:tv,begin_vertex:nv,beginnormal_vertex:iv,bsdfs:rv,iridescence_fragment:sv,bumpmap_pars_fragment:av,clipping_planes_fragment:ov,clipping_planes_pars_fragment:lv,clipping_planes_pars_vertex:cv,clipping_planes_vertex:uv,color_fragment:hv,color_pars_fragment:fv,color_pars_vertex:dv,color_vertex:pv,common:mv,cube_uv_reflection_fragment:gv,defaultnormal_vertex:vv,displacementmap_pars_vertex:xv,displacementmap_vertex:_v,emissivemap_fragment:yv,emissivemap_pars_fragment:Mv,colorspace_fragment:Sv,colorspace_pars_fragment:Tv,envmap_fragment:bv,envmap_common_pars_fragment:Ev,envmap_pars_fragment:Av,envmap_pars_vertex:wv,envmap_physical_pars_fragment:Fv,envmap_vertex:Rv,fog_vertex:Cv,fog_pars_vertex:Iv,fog_fragment:Pv,fog_pars_fragment:Lv,gradientmap_pars_fragment:Nv,lightmap_pars_fragment:Dv,lights_lambert_fragment:Ov,lights_lambert_pars_fragment:Hv,lights_pars_begin:Uv,lights_toon_fragment:Bv,lights_toon_pars_fragment:kv,lights_phong_fragment:zv,lights_phong_pars_fragment:Gv,lights_physical_fragment:Vv,lights_physical_pars_fragment:Wv,lights_fragment_begin:qv,lights_fragment_maps:Xv,lights_fragment_end:Yv,lightprobes_pars_fragment:Kv,logdepthbuf_fragment:Zv,logdepthbuf_pars_fragment:Jv,logdepthbuf_pars_vertex:jv,logdepthbuf_vertex:$v,map_fragment:Qv,map_pars_fragment:ex,map_particle_fragment:tx,map_particle_pars_fragment:nx,metalnessmap_fragment:ix,metalnessmap_pars_fragment:rx,morphinstance_vertex:sx,morphcolor_vertex:ax,morphnormal_vertex:ox,morphtarget_pars_vertex:lx,morphtarget_vertex:cx,normal_fragment_begin:ux,normal_fragment_maps:hx,normal_pars_fragment:fx,normal_pars_vertex:dx,normal_vertex:px,normalmap_pars_fragment:mx,clearcoat_normal_fragment_begin:gx,clearcoat_normal_fragment_maps:vx,clearcoat_pars_fragment:xx,iridescence_pars_fragment:_x,opaque_fragment:yx,packing:Mx,premultiplied_alpha_fragment:Sx,project_vertex:Tx,dithering_fragment:bx,dithering_pars_fragment:Ex,roughnessmap_fragment:Ax,roughnessmap_pars_fragment:wx,shadowmap_pars_fragment:Rx,shadowmap_pars_vertex:Cx,shadowmap_vertex:Ix,shadowmask_pars_fragment:Px,skinbase_vertex:Lx,skinning_pars_vertex:Nx,skinning_vertex:Dx,skinnormal_vertex:Ox,specularmap_fragment:Hx,specularmap_pars_fragment:Ux,tonemapping_fragment:Fx,tonemapping_pars_fragment:Bx,transmission_fragment:kx,transmission_pars_fragment:zx,uv_pars_fragment:Gx,uv_pars_vertex:Vx,uv_vertex:Wx,worldpos_vertex:qx,background_vert:Xx,background_frag:Yx,backgroundCube_vert:Kx,backgroundCube_frag:Zx,cube_vert:Jx,cube_frag:jx,depth_vert:$x,depth_frag:Qx,distance_vert:e_,distance_frag:t_,equirect_vert:n_,equirect_frag:i_,linedashed_vert:r_,linedashed_frag:s_,meshbasic_vert:a_,meshbasic_frag:o_,meshlambert_vert:l_,meshlambert_frag:c_,meshmatcap_vert:u_,meshmatcap_frag:h_,meshnormal_vert:f_,meshnormal_frag:d_,meshphong_vert:p_,meshphong_frag:m_,meshphysical_vert:g_,meshphysical_frag:v_,meshtoon_vert:x_,meshtoon_frag:__,points_vert:y_,points_frag:M_,shadow_vert:S_,shadow_frag:T_,sprite_vert:b_,sprite_frag:E_},Ve={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},qi={basic:{uniforms:Ln([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:Ln([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:Ln([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:Ln([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:Ln([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Qe(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:Ln([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:Ln([Ve.points,Ve.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:Ln([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:Ln([Ve.common,Ve.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:Ln([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:Ln([Ve.sprite,Ve.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distance:{uniforms:Ln([Ve.common,Ve.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distance_vert,fragmentShader:St.distance_frag},shadow:{uniforms:Ln([Ve.lights,Ve.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};qi.physical={uniforms:Ln([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};var zc={r:0,b:0,g:0},A_=new xt,d0=new pt;d0.set(-1,0,0,0,1,0,0,0,1);function w_(i,e,t,n,r,s){let a=new Qe(0),o=r===!0?0:1,c,u,l=null,h=0,f=null;function p(x){let E=x.isScene===!0?x.background:null;if(E&&E.isTexture){let y=x.backgroundBlurriness>0;E=e.get(E,y)}return E}function v(x){let E=!1,y=p(x);y===null?g(a,o):y&&y.isColor&&(g(y,1),E=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(x,E){let y=p(E);y&&(y.isCubeTexture||y.mapping===po)?(u===void 0&&(u=new ke(new en(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:hs(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(A_.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(d0),u.material.toneMapped=yt.getTransfer(y.colorSpace)!==Dt,(l!==y||h!==y.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,l=y,h=y.version,f=i.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ke(new Jn(2,2),new tn({name:"BackgroundMaterial",uniforms:hs(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=yt.getTransfer(y.colorSpace)!==Dt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(l!==y||h!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,l=y,h=y.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function g(x,E){x.getRGB(zc,Ph(i)),t.buffers.color.setClear(zc.r,zc.g,zc.b,E,s)}function m(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,E=1){a.set(x),o=E,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,g(a,o)},render:v,addToRenderList:_,dispose:m}}function R_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,a=!1;function o(U,D,Y,V,C){let N=!1,I=h(U,V,Y,D);s!==I&&(s=I,u(s.object)),N=p(U,V,Y,C),N&&v(U,V,Y,C),C!==null&&e.update(C,i.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,y(U,D,Y,V),C!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(C).buffer))}function c(){return i.createVertexArray()}function u(U){return i.bindVertexArray(U)}function l(U){return i.deleteVertexArray(U)}function h(U,D,Y,V){let C=V.wireframe===!0,N=n[D.id];N===void 0&&(N={},n[D.id]=N);let I=U.isInstancedMesh===!0?U.id:0,O=N[I];O===void 0&&(O={},N[I]=O);let W=O[Y.id];W===void 0&&(W={},O[Y.id]=W);let ee=W[C];return ee===void 0&&(ee=f(c()),W[C]=ee),ee}function f(U){let D=[],Y=[],V=[];for(let C=0;C<t;C++)D[C]=0,Y[C]=0,V[C]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:Y,attributeDivisors:V,object:U,attributes:{},index:null}}function p(U,D,Y,V){let C=s.attributes,N=D.attributes,I=0,O=Y.getAttributes();for(let W in O)if(O[W].location>=0){let ne=C[W],Ae=N[W];if(Ae===void 0&&(W==="instanceMatrix"&&U.instanceMatrix&&(Ae=U.instanceMatrix),W==="instanceColor"&&U.instanceColor&&(Ae=U.instanceColor)),ne===void 0||ne.attribute!==Ae||Ae&&ne.data!==Ae.data)return!0;I++}return s.attributesNum!==I||s.index!==V}function v(U,D,Y,V){let C={},N=D.attributes,I=0,O=Y.getAttributes();for(let W in O)if(O[W].location>=0){let ne=N[W];ne===void 0&&(W==="instanceMatrix"&&U.instanceMatrix&&(ne=U.instanceMatrix),W==="instanceColor"&&U.instanceColor&&(ne=U.instanceColor));let Ae={};Ae.attribute=ne,ne&&ne.data&&(Ae.data=ne.data),C[W]=Ae,I++}s.attributes=C,s.attributesNum=I,s.index=V}function _(){let U=s.newAttributes;for(let D=0,Y=U.length;D<Y;D++)U[D]=0}function g(U){m(U,0)}function m(U,D){let Y=s.newAttributes,V=s.enabledAttributes,C=s.attributeDivisors;Y[U]=1,V[U]===0&&(i.enableVertexAttribArray(U),V[U]=1),C[U]!==D&&(i.vertexAttribDivisor(U,D),C[U]=D)}function x(){let U=s.newAttributes,D=s.enabledAttributes;for(let Y=0,V=D.length;Y<V;Y++)D[Y]!==U[Y]&&(i.disableVertexAttribArray(Y),D[Y]=0)}function E(U,D,Y,V,C,N,I){I===!0?i.vertexAttribIPointer(U,D,Y,C,N):i.vertexAttribPointer(U,D,Y,V,C,N)}function y(U,D,Y,V){_();let C=V.attributes,N=Y.getAttributes(),I=D.defaultAttributeValues;for(let O in N){let W=N[O];if(W.location>=0){let ee=C[O];if(ee===void 0&&(O==="instanceMatrix"&&U.instanceMatrix&&(ee=U.instanceMatrix),O==="instanceColor"&&U.instanceColor&&(ee=U.instanceColor)),ee!==void 0){let ne=ee.normalized,Ae=ee.itemSize,Ne=e.get(ee);if(Ne===void 0)continue;let lt=Ne.buffer,qe=Ne.type,ct=Ne.bytesPerElement,me=qe===i.INT||qe===i.UNSIGNED_INT||ee.gpuType===Ql;if(ee.isInterleavedBufferAttribute){let _e=ee.data,we=_e.stride,it=ee.offset;if(_e.isInstancedInterleavedBuffer){for(let ze=0;ze<W.locationSize;ze++)m(W.location+ze,_e.meshPerAttribute);U.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let ze=0;ze<W.locationSize;ze++)g(W.location+ze);i.bindBuffer(i.ARRAY_BUFFER,lt);for(let ze=0;ze<W.locationSize;ze++)E(W.location+ze,Ae/W.locationSize,qe,ne,we*ct,(it+Ae/W.locationSize*ze)*ct,me)}else{if(ee.isInstancedBufferAttribute){for(let _e=0;_e<W.locationSize;_e++)m(W.location+_e,ee.meshPerAttribute);U.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let _e=0;_e<W.locationSize;_e++)g(W.location+_e);i.bindBuffer(i.ARRAY_BUFFER,lt);for(let _e=0;_e<W.locationSize;_e++)E(W.location+_e,Ae/W.locationSize,qe,ne,Ae*ct,Ae/W.locationSize*_e*ct,me)}}else if(I!==void 0){let ne=I[O];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(W.location,ne);break;case 3:i.vertexAttrib3fv(W.location,ne);break;case 4:i.vertexAttrib4fv(W.location,ne);break;default:i.vertexAttrib1fv(W.location,ne)}}}}x()}function R(){T();for(let U in n){let D=n[U];for(let Y in D){let V=D[Y];for(let C in V){let N=V[C];for(let I in N)l(N[I].object),delete N[I];delete V[C]}}delete n[U]}}function A(U){if(n[U.id]===void 0)return;let D=n[U.id];for(let Y in D){let V=D[Y];for(let C in V){let N=V[C];for(let I in N)l(N[I].object),delete N[I];delete V[C]}}delete n[U.id]}function P(U){for(let D in n){let Y=n[D];for(let V in Y){let C=Y[V];if(C[U.id]===void 0)continue;let N=C[U.id];for(let I in N)l(N[I].object),delete N[I];delete C[U.id]}}}function M(U){for(let D in n){let Y=n[D],V=U.isInstancedMesh===!0?U.id:0,C=Y[V];if(C!==void 0){for(let N in C){let I=C[N];for(let O in I)l(I[O].object),delete I[O];delete C[N]}delete Y[V],Object.keys(Y).length===0&&delete n[D]}}}function T(){L(),a=!0,s!==r&&(s=r,u(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:L,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfObject:M,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:g,disableUnusedAttributes:x}}function C_(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,l){l!==0&&(i.drawArraysInstanced(n,c,u,l),t.update(u,n,l))}function o(c,u,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,l);let f=0;for(let p=0;p<l;p++)f+=u[p];t.update(f,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function I_(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==$n&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let M=P===Tn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Vn&&P!==jn&&!M&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp",l=c(u);l!==u&&(st("WebGLRenderer:",u,"not supported, using",l,"instead."),u=l);let h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&st("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:x,maxVaryings:E,maxFragmentUniforms:y,maxSamples:R,samples:A}}function P_(i){let e=this,t=null,n=0,r=!1,s=!1,a=new Mi,o=new pt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||n!==0||r;return r=f,n=h.length,p},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=l(h,f,0)},this.setState=function(h,f,p){let v=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,m=i.get(h);if(!r||v===null||v.length===0||s&&!g)s?l(null):u();else{let x=s?0:n,E=x*4,y=m.clippingState||null;c.value=y,y=l(v,f,E,p);for(let R=0;R!==E;++R)y[R]=t[R];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(h,f,p,v){let _=h!==null?h.length:0,g=null;if(_!==0){if(g=c.value,v!==!0||g===null){let m=p+_*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let E=0,y=p;E!==_;++E,y+=4)a.copy(h[E]).applyMatrix4(x,o),a.normal.toArray(g,y),g[y+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}var ca=4,L_=6,N_=20,D_=256,To=new zi,qp=new Qe,kh=null,zh=0,Gh=0,Vh=!1,O_=new J,fs=new J,ha=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:o=O_}=s;kh=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),Vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(kh,zh,Gh),this._renderer.xr.enabled=Vh,e.scissorTest=!1,la(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Nr||e.mapping===cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kh=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),Vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:Tn,format:$n,colorSpace:Hn,depthBuffer:!1},r=Xp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xp(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=H_(s)),this._blurMaterial=F_(s,e,t),this._ggxMaterial=U_(s,e,t)}return r}_compileMaterial(e){let t=new ke(new Kt,e);this._renderer.compile(t,To)}_sceneToCubeUV(e,t,n,r,s){let c=new sn(90,1,t,n),u=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(qp),h.toneMapping=Ai,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ke(new en,new mn({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,m=!1,x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,m=!0):(g.color.copy(qp),m=!0);for(let E=0;E<6;E++){let y=E%3;y===0?(c.up.set(0,u[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+l[E],s.y,s.z)):y===1?(c.up.set(0,0,u[E]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+l[E],s.z)):(c.up.set(0,u[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+l[E]));let R=this._cubeSize;la(r,y*R,E>2?R:0,R,R),h.setRenderTarget(r),m&&h.render(_,c),h.render(e,c)}h.toneMapping=p,h.autoClear=f,e.background=x}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Nr||e.mapping===cs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yp());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;la(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,To)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,u=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),h=Math.sqrt(u*u-l*l),f=u*1.25,p=h*f,{_lodMax:v}=this,_=this._sizeLods[n],g=3*_*(n>v-ca?n-v+ca:0),m=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=v-t,la(s,g,m,3*_,2*_),r.setRenderTarget(s),r.render(o,To),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=v-n,la(e,g,m,3*_,2*_),r.setRenderTarget(e),r.render(o,To)}_blur(e,t,n,r){let s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,r,s){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[r];c.material=o;let u=o.uniforms;u.envMap.value=e.texture,u.sigma.value=s,u.mipInt.value=this._lodMax-n;let l=this._sizeLods[r],h=3*l*(r>this._lodMax-ca?r-this._lodMax+ca:0),f=4*(this._cubeSize-l);la(t,h,f,3*l,2*l),a.setRenderTarget(t),a.render(c,To)}};function H_(i){let e=[],t=[],n=i,r=i-ca+1+L_;for(let s=0;s<r;s++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,u=1+o,l=[c,c,u,c,u,u,c,c,u,u,c,u],h=6,f=6,p=3,v=new Float32Array(p*f*h),_=new Float32Array(p*f*h);for(let m=0;m<h;m++){let x=m%3*2/3-1,E=m>2?0:-1,y=[x,E,0,x+2/3,E,0,x+2/3,E+1,0,x,E,0,x+2/3,E+1,0,x,E+1,0];v.set(y,p*f*m);for(let R=0;R<f;R++){let A=l[R*2]*2-1,P=l[R*2+1]*2-1;m===0?fs.set(1,P,A):m===1?fs.set(-A,1,-P):m===2?fs.set(-A,P,1):m===3?fs.set(-1,P,-A):m===4?fs.set(-A,-1,P):fs.set(A,P,-1),fs.toArray(_,(m*f+R)*p)}}let g=new Kt;g.setAttribute("position",new Qt(v,p)),g.setAttribute("outputDirection",new Qt(_,p)),t.push(new ke(g,null)),n>ca&&n--}return{lodMeshes:t,sizeLods:e}}function Xp(i,e,t){let n=new pn(i,e,t);return n.texture.mapping=po,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function la(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function U_(i,e,t){return new tn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:D_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qc(),fragmentShader:`

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
			`},r=new en(5,5,5),s=new tn({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:ci});s.uniforms.tEquirect.value=t;let a=new ke(r,s),o=t.minFilter;return t.minFilter===wi&&(t.minFilter=an),new Wl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}};function B_(i){let e=new WeakMap,t=new WeakMap,n=null;function r(f,p=!1){return f==null?null:p?a(f):s(f)}function s(f){if(f&&f.isTexture){let p=f.mapping;if(p===Jl||p===jl)if(e.has(f)){let v=e.get(f).texture;return o(v,f.mapping)}else{let v=f.image;if(v&&v.height>0){let _=new Vc(v.height);return _.fromEquirectangularTexture(i,f),e.set(f,_),f.addEventListener("dispose",u),o(_.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let p=f.mapping,v=p===Jl||p===jl,_=p===Nr||p===cs;if(v||_){let g=t.get(f),m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new ha(i)),g=v?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{let x=f.image;return v&&x&&x.height>0||_&&x&&c(x)?(n===null&&(n=new ha(i)),g=v?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",l),g.texture):null}}}return f}function o(f,p){return p===Jl?f.mapping=Nr:p===jl&&(f.mapping=cs),f}function c(f){let p=0,v=6;for(let _=0;_<v;_++)f[_]!==void 0&&p++;return p===v}function u(f){let p=f.target;p.removeEventListener("dispose",u);let v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function l(f){let p=f.target;p.removeEventListener("dispose",l);let v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function k_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Zr("WebGLRenderer: "+n+" extension not supported."),r}}}function z_(i,e,t,n){let r={},s=new WeakMap;function a(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",a),delete r[f.id];let p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(h){let f=h.attributes;for(let p in f)e.update(f[p],i.ARRAY_BUFFER)}function u(h){let f=[],p=h.index,v=h.attributes.position,_=0;if(v===void 0)return;if(p!==null){let x=p.array;_=p.version;for(let E=0,y=x.length;E<y;E+=3){let R=x[E+0],A=x[E+1],P=x[E+2];f.push(R,A,A,P,P,R)}}else{let x=v.array;_=v.version;for(let E=0,y=x.length/3-1;E<y;E+=3){let R=E+0,A=E+1,P=E+2;f.push(R,A,A,P,P,R)}}let g=new(v.count>=65535?Va:Ga)(f,1);g.version=_;let m=s.get(h);m&&e.remove(m),s.set(h,g)}function l(h){let f=s.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&u(h)}else u(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:l}}function G_(i,e,t){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,f){i.drawElements(n,f,s,h*a),t.update(f,n,1)}function u(h,f,p){p!==0&&(i.drawElementsInstanced(n,f,s,h*a,p),t.update(f,n,p))}function l(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,p);let _=0;for(let g=0;g<p;g++)_+=f[g];t.update(_,n,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=l}function V_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:ft("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function W_(i,e,t){let n=new WeakMap,r=new Bt;function s(a,o,c){let u=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=l!==void 0?l.length:0,f=n.get(o);if(f===void 0||f.count!==h){let T=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],E=0;p===!0&&(E=1),v===!0&&(E=2),_===!0&&(E=3);let y=o.attributes.position.count*E,R=1;y>e.maxTextureSize&&(R=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let A=new Float32Array(y*R*4*h),P=new Ba(A,y,R,h);P.type=jn,P.needsUpdate=!0;let M=E*4;for(let L=0;L<h;L++){let U=g[L],D=m[L],Y=x[L],V=y*R*4*L;for(let C=0;C<U.count;C++){let N=C*M;p===!0&&(r.fromBufferAttribute(U,C),A[V+N+0]=r.x,A[V+N+1]=r.y,A[V+N+2]=r.z,A[V+N+3]=0),v===!0&&(r.fromBufferAttribute(D,C),A[V+N+4]=r.x,A[V+N+5]=r.y,A[V+N+6]=r.z,A[V+N+7]=0),_===!0&&(r.fromBufferAttribute(Y,C),A[V+N+8]=r.x,A[V+N+9]=r.y,A[V+N+10]=r.z,A[V+N+11]=Y.itemSize===4?r.w:1)}}f={count:h,texture:P,size:new at(y,R)},n.set(o,f),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let _=0;_<u.length;_++)p+=u[_];let v=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function q_(i,e,t,n,r){let s=new WeakMap;function a(u){let l=r.render.frame,h=u.geometry,f=e.get(u,h);if(s.get(f)!==l&&(e.update(f),s.set(f,l)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),s.get(u)!==l&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),s.set(u,l))),u.isSkinnedMesh){let p=u.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return f}function o(){s=new WeakMap}function c(u){let l=u.target;l.removeEventListener("dispose",c),n.releaseStatesOfObject(l),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:o}}var X_={[oo]:"LINEAR_TONE_MAPPING",[lo]:"REINHARD_TONE_MAPPING",[co]:"CINEON_TONE_MAPPING",[ls]:"ACES_FILMIC_TONE_MAPPING",[ho]:"AGX_TONE_MAPPING",[fo]:"NEUTRAL_TONE_MAPPING",[uo]:"CUSTOM_TONE_MAPPING"};function Y_(i,e,t,n,r,s){let a=new pn(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,u=new Kt;u.setAttribute("position",new wt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new wt([0,2,0,0,2,0],2));let l=new Js({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new ke(u,l),f=new zi(-1,1,1,-1,0,1),p=null,v=null,_=!1,g,m=null,x=[],E=!1;this.setSize=function(y,R){a.setSize(y,R),o!==null&&o.setSize(y,R),c!==null&&c.setSize(y,R);for(let A=0;A<x.length;A++){let P=x[A];P.setSize&&P.setSize(y,R)}},this.setEffects=function(y){x=y,E=x.length>0&&x[0].isRenderPass===!0;let R=a.width,A=a.height;x.length>0&&o===null&&(o=new pn(R,A,{type:Tn,depthBuffer:!1,stencilBuffer:!1}),c=new pn(R,A,{type:Tn,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<x.length;P++){let M=x[P];M.setSize&&M.setSize(R,A)}},this.begin=function(y,R){if(_||y.toneMapping===Ai&&x.length===0)return!1;if(m=R,R!==null){let A=R.width,P=R.height;(a.width!==A||a.height!==P)&&this.setSize(A,P)}return E===!1&&y.setRenderTarget(a),g=y.toneMapping,y.toneMapping=Ai,!0},this.hasRenderPass=function(){return E},this.end=function(y,R){y.toneMapping=g,_=!0;let A=a,P=o;for(let M=0;M<x.length;M++){let T=x[M];T.enabled!==!1&&(T.render(y,P,A,R),T.needsSwap!==!1&&(A=P,P=P===o?c:o))}if(p!==y.outputColorSpace||v!==y.toneMapping){p=y.outputColorSpace,v=y.toneMapping,l.defines={},yt.getTransfer(p)===Dt&&(l.defines.SRGB_TRANSFER="");let M=X_[v];M&&(l.defines[M]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=A.texture,y.setRenderTarget(m),y.render(h,f),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),u.dispose(),l.dispose()}}var p0=new on,Xh=new Cr(1,1),m0=new Ba,g0=new Pl,v0=new Ka,Zp=[],Jp=[],jp=new Float32Array(16),$p=new Float32Array(9),Qp=new Float32Array(4);function fa(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Zp[r];if(s===void 0&&(s=new Float32Array(r),Zp[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function vn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function xn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Xc(i,e){let t=Jp[e];t===void 0&&(t=new Int32Array(e),Jp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function K_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Z_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2fv(this.addr,e),xn(t,e)}}function J_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vn(t,e))return;i.uniform3fv(this.addr,e),xn(t,e)}}function j_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4fv(this.addr,e),xn(t,e)}}function $_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,n))return;Qp.set(n),i.uniformMatrix2fv(this.addr,!1,Qp),xn(t,n)}}function Q_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,n))return;$p.set(n),i.uniformMatrix3fv(this.addr,!1,$p),xn(t,n)}}function ey(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,n))return;jp.set(n),i.uniformMatrix4fv(this.addr,!1,jp),xn(t,n)}}function ty(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ny(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2iv(this.addr,e),xn(t,e)}}function iy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;i.uniform3iv(this.addr,e),xn(t,e)}}function ry(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4iv(this.addr,e),xn(t,e)}}function sy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ay(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2uiv(this.addr,e),xn(t,e)}}function oy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;i.uniform3uiv(this.addr,e),xn(t,e)}}function ly(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4uiv(this.addr,e),xn(t,e)}}function cy(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Xh.compareFunction=t.isReversedDepthBuffer()?kc:Bc,s=Xh):s=p0,t.setTexture2D(e||s,r)}function uy(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||g0,r)}function hy(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||v0,r)}function fy(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||m0,r)}function dy(i){switch(i){case 5126:return K_;case 35664:return Z_;case 35665:return J_;case 35666:return j_;case 35674:return $_;case 35675:return Q_;case 35676:return ey;case 5124:case 35670:return ty;case 35667:case 35671:return ny;case 35668:case 35672:return iy;case 35669:case 35673:return ry;case 5125:return sy;case 36294:return ay;case 36295:return oy;case 36296:return ly;case 35678:case 36198:case 36298:case 36306:case 35682:return cy;case 35679:case 36299:case 36307:return uy;case 35680:case 36300:case 36308:case 36293:return hy;case 36289:case 36303:case 36311:case 36292:return fy}}function py(i,e){i.uniform1fv(this.addr,e)}function my(i,e){let t=fa(e,this.size,2);i.uniform2fv(this.addr,t)}function gy(i,e){let t=fa(e,this.size,3);i.uniform3fv(this.addr,t)}function vy(i,e){let t=fa(e,this.size,4);i.uniform4fv(this.addr,t)}function xy(i,e){let t=fa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function _y(i,e){let t=fa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function yy(i,e){let t=fa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function My(i,e){i.uniform1iv(this.addr,e)}function Sy(i,e){i.uniform2iv(this.addr,e)}function Ty(i,e){i.uniform3iv(this.addr,e)}function by(i,e){i.uniform4iv(this.addr,e)}function Ey(i,e){i.uniform1uiv(this.addr,e)}function Ay(i,e){i.uniform2uiv(this.addr,e)}function wy(i,e){i.uniform3uiv(this.addr,e)}function Ry(i,e){i.uniform4uiv(this.addr,e)}function Cy(i,e,t){let n=this.cache,r=e.length,s=Xc(t,r);vn(n,s)||(i.uniform1iv(this.addr,s),xn(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Xh:a=p0;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Iy(i,e,t){let n=this.cache,r=e.length,s=Xc(t,r);vn(n,s)||(i.uniform1iv(this.addr,s),xn(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||g0,s[a])}function Py(i,e,t){let n=this.cache,r=e.length,s=Xc(t,r);vn(n,s)||(i.uniform1iv(this.addr,s),xn(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||v0,s[a])}function Ly(i,e,t){let n=this.cache,r=e.length,s=Xc(t,r);vn(n,s)||(i.uniform1iv(this.addr,s),xn(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||m0,s[a])}function Ny(i){switch(i){case 5126:return py;case 35664:return my;case 35665:return gy;case 35666:return vy;case 35674:return xy;case 35675:return _y;case 35676:return yy;case 5124:case 35670:return My;case 35667:case 35671:return Sy;case 35668:case 35672:return Ty;case 35669:case 35673:return by;case 5125:return Ey;case 36294:return Ay;case 36295:return wy;case 36296:return Ry;case 35678:case 36198:case 36298:case 36306:case 35682:return Cy;case 35679:case 36299:case 36307:return Iy;case 35680:case 36300:case 36308:case 36293:return Py;case 36289:case 36303:case 36311:case 36292:return Ly}}var Yh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=dy(t.type)}},Kh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ny(t.type)}},Zh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},Wh=/(\w+)(\])?(\[|\.)?/g;function e0(i,e){i.seq.push(e),i.map[e.id]=e}function Dy(i,e,t){let n=i.name,r=n.length;for(Wh.lastIndex=0;;){let s=Wh.exec(n),a=Wh.lastIndex,o=s[1],c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){e0(t,u===void 0?new Yh(o,i,e):new Kh(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Zh(o),e0(t,h)),t=h}}}var ua=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Dy(o,c,this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function t0(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Oy=37297,Hy=0;function Uy(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var n0=new pt;function Fy(i){yt._getMatrix(n0,yt.workingColorSpace,i);let e=`mat3( ${n0.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(i)){case Ua:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function i0(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Uy(i.getShaderSource(e),o)}else return s}function By(i,e){let t=Fy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var ky={[oo]:"Linear",[lo]:"Reinhard",[co]:"Cineon",[ls]:"ACESFilmic",[ho]:"AgX",[fo]:"Neutral",[uo]:"Custom"};function zy(i,e){let t=ky[e];return t===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Gc=new J;function Gy(){yt.getLuminanceCoefficients(Gc);let i=Gc.x.toFixed(4),e=Gc.y.toFixed(4),t=Gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Eo).join(`
`)}function Wy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function qy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),a=s.name,o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Eo(i){return i!==""}function r0(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function s0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Xy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jh(i){return i.replace(Xy,Ky)}var Yy=new Map;function Ky(i,e){let t=St[e];if(t===void 0){let n=Yy.get(e);if(n!==void 0)t=St[n],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Jh(t)}var Zy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function a0(i){return i.replace(Zy,Jy)}function Jy(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function o0(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var jy={[ao]:"SHADOWMAP_TYPE_PCF",[ta]:"SHADOWMAP_TYPE_VSM"};function $y(i){return jy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Qy={[Nr]:"ENVMAP_TYPE_CUBE",[cs]:"ENVMAP_TYPE_CUBE",[po]:"ENVMAP_TYPE_CUBE_UV"};function eM(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Qy[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var tM={[cs]:"ENVMAP_MODE_REFRACTION"};function nM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":tM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var iM={[Zl]:"ENVMAP_BLENDING_MULTIPLY",[bp]:"ENVMAP_BLENDING_MIX",[Ep]:"ENVMAP_BLENDING_ADD"};function rM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":iM[i.combine]||"ENVMAP_BLENDING_NONE"}function sM(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function aM(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=$y(t),u=eM(t),l=nM(t),h=rM(t),f=sM(t),p=Vy(t),v=Wy(s),_=r.createProgram(),g,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Eo).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Eo).join(`
`),m.length>0&&(m+=`
`)):(g=[o0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Eo).join(`
`),m=[o0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ai?"#define TONE_MAPPING":"",t.toneMapping!==Ai?St.tonemapping_pars_fragment:"",t.toneMapping!==Ai?zy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,By("linearToOutputTexel",t.outputColorSpace),Gy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Eo).join(`
`)),a=Jh(a),a=r0(a,t),a=s0(a,t),o=Jh(o),o=r0(o,t),o=s0(o,t),a=a0(a),o=a0(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Rh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let E=x+g+a,y=x+m+o,R=t0(r,r.VERTEX_SHADER,E),A=t0(r,r.FRAGMENT_SHADER,y);r.attachShader(_,R),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function P(U){if(i.debug.checkShaderErrors){let D=r.getProgramInfoLog(_)||"",Y=r.getShaderInfoLog(R)||"",V=r.getShaderInfoLog(A)||"",C=D.trim(),N=Y.trim(),I=V.trim(),O=!0,W=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,R,A);else{let ee=i0(r,R,"vertex"),ne=i0(r,A,"fragment");ft("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+C+`
`+ee+`
`+ne)}else C!==""?st("WebGLProgram: Program Info Log:",C):(N===""||I==="")&&(W=!1);W&&(U.diagnostics={runnable:O,programLog:C,vertexShader:{log:N,prefix:g},fragmentShader:{log:I,prefix:m}})}r.deleteShader(R),r.deleteShader(A),M=new ua(r,_),T=qy(r,_)}let M;this.getUniforms=function(){return M===void 0&&P(this),M};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(_,Oy)),L},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Hy++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=A,this}var oM=0,jh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new $h(e),t.set(e,n)),n}},$h=class{constructor(e){this.id=oM++,this.code=e,this.usedTimes=0}};function lM(i){return i===Or||i===_o||i===yo}function cM(i,e,t,n,r,s){let a=new ka,o=new jh,c=new Set,u=[],l=new Map,h=n.logarithmicDepthBuffer,f=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function _(M,T,L,U,D,Y){let V=U.fog,C=D.geometry,N=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,I=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,O=e.get(M.envMap||N,I),W=O&&O.mapping===po?O.image.height:null,ee=p[M.type];M.precision!==null&&(f=n.getMaxPrecision(M.precision),f!==M.precision&&st("WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let ne=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,Ae=ne!==void 0?ne.length:0,Ne=0;C.morphAttributes.position!==void 0&&(Ne=1),C.morphAttributes.normal!==void 0&&(Ne=2),C.morphAttributes.color!==void 0&&(Ne=3);let lt,qe,ct,me;if(ee){let zt=qi[ee];lt=zt.vertexShader,qe=zt.fragmentShader}else{lt=M.vertexShader,qe=M.fragmentShader;let zt=o.getVertexShaderStage(M),Nt=o.getFragmentShaderStage(M);o.update(M,zt,Nt),ct=zt.id,me=Nt.id}let _e=i.getRenderTarget(),we=i.state.buffers.depth.getReversed(),it=D.isInstancedMesh===!0,ze=D.isBatchedMesh===!0,nt=!!M.map,X=!!M.matcap,Q=!!O,xe=!!M.aoMap,Me=!!M.lightMap,le=!!M.bumpMap&&M.wireframe===!1,se=!!M.normalMap,te=!!M.displacementMap,ye=!!M.emissiveMap,De=!!M.metalnessMap,Ke=!!M.roughnessMap,q=M.anisotropy>0,dt=M.clearcoat>0,Ge=M.dispersion>0,F=M.retroreflectivity>0,b=M.iridescence>0,ie=M.sheen>0,ue=M.transmission>0,ge=q&&!!M.anisotropyMap,B=dt&&!!M.clearcoatMap,G=dt&&!!M.clearcoatNormalMap,H=dt&&!!M.clearcoatRoughnessMap,z=b&&!!M.iridescenceMap,j=b&&!!M.iridescenceThicknessMap,de=ie&&!!M.sheenColorMap,he=ie&&!!M.sheenRoughnessMap,pe=!!M.specularMap,Te=!!M.specularColorMap,Ie=!!M.specularIntensityMap,Ze=ue&&!!M.transmissionMap,K=ue&&!!M.thicknessMap,Ce=!!M.gradientMap,ve=!!M.alphaMap,Re=M.alphaTest>0,Oe=!!M.alphaHash,be=!!M.extensions,rt=Ai;M.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(rt=i.toneMapping);let tt={shaderID:ee,shaderType:M.type,shaderName:M.name,vertexShader:lt,fragmentShader:qe,defines:M.defines,customVertexShaderID:ct,customFragmentShaderID:me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:ze,batchingColor:ze&&D._colorsTexture!==null,instancing:it,instancingColor:it&&D.instanceColor!==null,instancingMorph:it&&D.morphTexture!==null,outputColorSpace:_e===null?i.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:yt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:nt,matcap:X,envMap:Q,envMapMode:Q&&O.mapping,envMapCubeUVHeight:W,aoMap:xe,lightMap:Me,bumpMap:le,normalMap:se,displacementMap:te,emissiveMap:ye,normalMapObjectSpace:se&&M.normalMapType===Ip,normalMapTangentSpace:se&&M.normalMapType===So,packedNormalMap:se&&M.normalMapType===So&&lM(M.normalMap.format),metalnessMap:De,roughnessMap:Ke,anisotropy:q,anisotropyMap:ge,clearcoat:dt,clearcoatMap:B,clearcoatNormalMap:G,clearcoatRoughnessMap:H,dispersion:Ge,retroreflection:F,iridescence:b,iridescenceMap:z,iridescenceThicknessMap:j,sheen:ie,sheenColorMap:de,sheenRoughnessMap:he,specularMap:pe,specularColorMap:Te,specularIntensityMap:Ie,transmission:ue,transmissionMap:Ze,thicknessMap:K,gradientMap:Ce,opaque:M.transparent===!1&&M.blending===na&&M.alphaToCoverage===!1,alphaMap:ve,alphaTest:Re,alphaHash:Oe,combine:M.combine,mapUv:nt&&v(M.map.channel),aoMapUv:xe&&v(M.aoMap.channel),lightMapUv:Me&&v(M.lightMap.channel),bumpMapUv:le&&v(M.bumpMap.channel),normalMapUv:se&&v(M.normalMap.channel),displacementMapUv:te&&v(M.displacementMap.channel),emissiveMapUv:ye&&v(M.emissiveMap.channel),metalnessMapUv:De&&v(M.metalnessMap.channel),roughnessMapUv:Ke&&v(M.roughnessMap.channel),anisotropyMapUv:ge&&v(M.anisotropyMap.channel),clearcoatMapUv:B&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:G&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:z&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:j&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:de&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:he&&v(M.sheenRoughnessMap.channel),specularMapUv:pe&&v(M.specularMap.channel),specularColorMapUv:Te&&v(M.specularColorMap.channel),specularIntensityMapUv:Ie&&v(M.specularIntensityMap.channel),transmissionMapUv:Ze&&v(M.transmissionMap.channel),thicknessMapUv:K&&v(M.thicknessMap.channel),alphaMapUv:ve&&v(M.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(se||q),vertexNormals:!!C.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!C.attributes.uv&&(nt||ve),fog:!!V,useFog:M.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||C.attributes.normal===void 0&&se===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:we,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Ne,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:rt,decodeVideoTexture:nt&&M.map.isVideoTexture===!0&&yt.getTransfer(M.map.colorSpace)===Dt,decodeVideoTextureEmissive:ye&&M.emissiveMap.isVideoTexture===!0&&yt.getTransfer(M.emissiveMap.colorSpace)===Dt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Sn,flipSided:M.side===Mn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:be&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&M.extensions.multiDraw===!0||ze)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return tt.vertexUv1s=c.has(1),tt.vertexUv2s=c.has(2),tt.vertexUv3s=c.has(3),c.clear(),tt}function g(M){let T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(let L in M.defines)T.push(L),T.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(m(T,M),x(T,M),T.push(i.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function m(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numSunLights),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numSunLightShadows),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function x(M,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function E(M){let T=p[M.type],L;if(T){let U=qi[T];L=dr.clone(U.uniforms)}else L=M.uniforms;return L}function y(M,T){let L=l.get(T);return L!==void 0?++L.usedTimes:(L=new aM(i,T,M,r),u.push(L),l.set(T,L)),L}function R(M){if(--M.usedTimes===0){let T=u.indexOf(M);u[T]=u[u.length-1],u.pop(),l.delete(M.cacheKey),M.destroy()}}function A(M){o.remove(M)}function P(){o.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:E,acquireProgram:y,releaseProgram:R,releaseShaderCache:A,programs:u,dispose:P}}function uM(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function hM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function l0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function c0(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,v,_,g,m){let x=i[e];return x===void 0?(x={id:f.id,object:f,geometry:p,material:v,materialVariant:a(f),groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},i[e]=x):(x.id=f.id,x.object=f,x.geometry=p,x.material=v,x.materialVariant=a(f),x.groupOrder=_,x.renderOrder=f.renderOrder,x.z=g,x.group=m),e++,x}function c(f,p,v,_,g,m,x){x.reversedDepth===!0&&(g=-g);let E=o(f,p,v,_,g,m);v.transmission>0?n.push(E):v.transparent===!0?r.push(E):t.push(E)}function u(f,p,v,_,g,m){let x=o(f,p,v,_,g,m);v.transmission>0?n.unshift(x):v.transparent===!0?r.unshift(x):t.unshift(x)}function l(f,p){t.length>1&&t.sort(f||hM),n.length>1&&n.sort(p||l0),r.length>1&&r.sort(p||l0)}function h(){for(let f=e,p=i.length;f<p;f++){let v=i[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:u,finish:h,sort:l}}function fM(){let i=new WeakMap;function e(n,r){let s=i.get(n),a;return s===void 0?(a=new c0,i.set(n,[a])):r>=s.length?(a=new c0,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function dM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new J,color:new Qe};break;case"SpotLight":t={position:new J,direction:new J,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new J,halfWidth:new J,halfHeight:new J};break}return i[e.id]=t,t}}}function pM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var mM=0;function gM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function vM(i){let e=new dM,t=pM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new J);let r=new J,s=new xt,a=new xt;function o(u){let l=0,h=0,f=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let p=0,v=0,_=0,g=0,m=0,x=0,E=0,y=0,R=0,A=0,P=0,M=0,T=0,L=0;u.sort(gM);for(let D=0,Y=u.length;D<Y;D++){let V=u[D],C=V.color,N=V.intensity,I=V.distance,O=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Or?O=V.shadow.map.texture:O=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)l+=C.r*N,h+=C.g*N,f+=C.b*N;else if(V.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(V.sh.coefficients[W],N);L++}else if(V.isSunLight){let W=e.get(V);if(W.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){let ee=V.shadow,ne=t.get(V);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),n.sunShadow[v]=ne,n.sunShadowMap[v]=O;let Ae=ee.getViewportCount();for(let Ne=0;Ne<Ae;Ne++)n.sunShadowMatrix[_+Ne]=ee.getMatrix(Ne),n.sunShadowCascade[_+Ne]=ee._cascadeData[Ne];_+=Ae,v++}n.sun[p]=W,p++}else if(V.isDirectionalLight){let W=e.get(V);if(W.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){let ee=V.shadow,ne=t.get(V);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,n.directionalShadow[g]=ne,n.directionalShadowMap[g]=O,n.directionalShadowMatrix[g]=V.shadow.matrix,R++}n.directional[g]=W,g++}else if(V.isSpotLight){let W=e.get(V);W.position.setFromMatrixPosition(V.matrixWorld),W.color.copy(C).multiplyScalar(N),W.distance=I,W.coneCos=Math.cos(V.angle),W.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),W.decay=V.decay,n.spot[x]=W;let ee=V.shadow;if(V.map&&(n.spotLightMap[M]=V.map,M++,ee.updateMatrices(V),V.castShadow&&T++),n.spotLightMatrix[x]=ee.matrix,V.castShadow){let ne=t.get(V);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,n.spotShadow[x]=ne,n.spotShadowMap[x]=O,P++}x++}else if(V.isRectAreaLight){let W=e.get(V);W.color.copy(C).multiplyScalar(N),W.halfWidth.set(V.width*.5,0,0),W.halfHeight.set(0,V.height*.5,0),n.rectArea[E]=W,E++}else if(V.isPointLight){let W=e.get(V);if(W.color.copy(V.color).multiplyScalar(V.intensity),W.distance=V.distance,W.decay=V.decay,V.castShadow){let ee=V.shadow,ne=t.get(V);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,ne.shadowCameraNear=ee.camera.near,ne.shadowCameraFar=ee.camera.far,n.pointShadow[m]=ne,n.pointShadowMap[m]=O,n.pointShadowMatrix[m]=V.shadow.matrix,A++}n.point[m]=W,m++}else if(V.isHemisphereLight){let W=e.get(V);W.skyColor.copy(V.color).multiplyScalar(N),W.groundColor.copy(V.groundColor).multiplyScalar(N),n.hemi[y]=W,y++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ve.LTC_FLOAT_1,n.rectAreaLTC2=Ve.LTC_FLOAT_2):(n.rectAreaLTC1=Ve.LTC_HALF_1,n.rectAreaLTC2=Ve.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=h,n.ambient[2]=f;let U=n.hash;(U.sunLength!==p||U.directionalLength!==g||U.pointLength!==m||U.spotLength!==x||U.rectAreaLength!==E||U.hemiLength!==y||U.numSunShadows!==v||U.numDirectionalShadows!==R||U.numPointShadows!==A||U.numSpotShadows!==P||U.numSpotMaps!==M||U.numLightProbes!==L)&&(n.sun.length=p,n.directional.length=g,n.spot.length=x,n.rectArea.length=E,n.point.length=m,n.hemi.length=y,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+M-T,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=L,U.sunLength=p,U.directionalLength=g,U.pointLength=m,U.spotLength=x,U.rectAreaLength=E,U.hemiLength=y,U.numSunShadows=v,U.numDirectionalShadows=R,U.numPointShadows=A,U.numSpotShadows=P,U.numSpotMaps=M,U.numLightProbes=L,n.version=mM++)}function c(u,l){let h=0,f=0,p=0,v=0,_=0,g=0,m=l.matrixWorldInverse;for(let x=0,E=u.length;x<E;x++){let y=u[x];if(y.isSunLight){let R=n.sun[h];R.direction.setFromMatrixPosition(y.matrixWorld),R.direction.transformDirection(m),h++}else if(y.isDirectionalLight){let R=n.directional[f];R.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(m),f++}else if(y.isSpotLight){let R=n.spot[v];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(m),R.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(m),v++}else if(y.isRectAreaLight){let R=n.rectArea[_];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),R.halfWidth.set(y.width*.5,0,0),R.halfHeight.set(0,y.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let R=n.point[p];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(m),p++}else if(y.isHemisphereLight){let R=n.hemi[g];R.direction.setFromMatrixPosition(y.matrixWorld),R.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function u0(i){let e=new vM(i),t=[],n=[],r=[];function s(f){h.camera=f,t.length=0,n.length=0,r.length=0}function a(f){t.push(f)}function o(f){n.push(f)}function c(f){r.push(f)}function u(){e.setup(t)}function l(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:u,setupLightsView:l,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function xM(i){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new u0(i),e.set(r,[o])):s>=a.length?(o=new u0(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var _M=`void main() {
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
}`,MM=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],SM=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],h0=new xt,bo=new J,qh=new J;function TM(i,e,t){let n=new Ys,r=new at,s=new at,a=new Bt,o=new Hl,c=new Ul,u={},l=t.maxTextureSize,h={[Gi]:Mn,[Mn]:Gi,[Sn]:Sn},f=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:_M,fragmentShader:yM}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let v=new Kt;v.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ke(v,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ao;let m=this.type;this.render=function(A,P,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===sp&&(st("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ao);let T=i.getRenderTarget(),L=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),D=i.state;D.setBlending(ci),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let Y=m!==this.type;Y&&P.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(C=>C.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,C=A.length;V<C;V++){let N=A[V],I=N.shadow;if(I===void 0){st("WebGLShadowMap:",N,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);let O=I.getFrameExtents();r.multiply(O),s.copy(I.mapSize),(r.x>l||r.y>l)&&(r.x>l&&(s.x=Math.floor(l/O.x),r.x=s.x*O.x,I.mapSize.x=s.x),r.y>l&&(s.y=Math.floor(l/O.y),r.y=s.y*O.y,I.mapSize.y=s.y));let W=i.state.buffers.depth.getReversed();if(I.camera._reversedDepth=W,I.map===null||Y===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===ta){if(N.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new pn(r.x,r.y,{format:Or,type:Tn,minFilter:an,magFilter:an,generateMipmaps:!1}),I.map.texture.name=N.name+".shadowMap",I.map.depthTexture=new Cr(r.x,r.y,jn),I.map.depthTexture.name=N.name+".shadowMapDepth",I.map.depthTexture.format=Hi,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Xt,I.map.depthTexture.magFilter=Xt}else N.isPointLight?(I.map=new Vc(r.x),I.map.depthTexture=new Dl(r.x,Ri)):(I.map=new pn(r.x,r.y),I.map.depthTexture=new Cr(r.x,r.y,Ri)),I.map.depthTexture.name=N.name+".shadowMap",I.map.depthTexture.format=Hi,this.type===ao?(I.map.depthTexture.compareFunction=W?kc:Bc,I.map.depthTexture.minFilter=an,I.map.depthTexture.magFilter=an):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Xt,I.map.depthTexture.magFilter=Xt);I.camera.updateProjectionMatrix()}I.map.isWebGLCubeRenderTarget!==!0&&(I.map.width!==r.x||I.map.height!==r.y)&&I.map.setSize(r.x,r.y);let ee=I.map.isWebGLCubeRenderTarget?6:I.getViewportCount();N.isPointLight!==!0&&I.updateMatrices(N,M);for(let ne=0;ne<ee;ne++){let Ae=I.getCamera(ne);if(N.isPointLight){let Ne=I.camera,lt=I.matrix,qe=N.distance||Ne.far;qe!==Ne.far&&(Ne.far=qe,Ne.updateProjectionMatrix()),bo.setFromMatrixPosition(N.matrixWorld),Ne.position.copy(bo),qh.copy(Ne.position),qh.add(MM[ne]),Ne.up.copy(SM[ne]),Ne.lookAt(qh),Ne.updateMatrixWorld(),lt.makeTranslation(-bo.x,-bo.y,-bo.z),h0.multiplyMatrices(Ne.projectionMatrix,Ne.matrixWorldInverse),I._frustum.setFromProjectionMatrix(h0,Ne.coordinateSystem,Ne.reversedDepth)}if(I.map.isWebGLCubeRenderTarget)i.setRenderTarget(I.map,ne),i.clear();else{ne===0&&(i.setRenderTarget(I.map),i.clear());let Ne=I.getViewport(ne);a.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),D.viewport(a)}n=I.getFrustum(ne),y(P,M,Ae,N,this.type)}I.isPointLightShadow!==!0&&this.type===ta&&x(I,M),I.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(T,L,U)};function x(A,P){let M=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null?A.mapPass=new pn(r.x,r.y,{format:Or,type:Tn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(P,null,M,f,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value.set(A.map.width,A.map.height),p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(P,null,M,p,_,null)}function E(A,P,M,T){let L=null,U=M.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)L=U;else if(L=M.isPointLight===!0?c:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let D=L.uuid,Y=P.uuid,V=u[D];V===void 0&&(V={},u[D]=V);let C=V[Y];C===void 0&&(C=L.clone(),V[Y]=C,P.addEventListener("dispose",R)),L=C}if(L.visible=P.visible,L.wireframe=P.wireframe,T===ta?L.side=P.shadowSide!==null?P.shadowSide:P.side:L.side=P.shadowSide!==null?P.shadowSide:h[P.side],L.alphaMap=P.alphaMap,L.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,L.map=P.map,L.clipShadows=P.clipShadows,L.clippingPlanes=P.clippingPlanes,L.clipIntersection=P.clipIntersection,L.displacementMap=P.displacementMap,L.displacementScale=P.displacementScale,L.displacementBias=P.displacementBias,L.wireframeLinewidth=P.wireframeLinewidth,L.linewidth=P.linewidth,M.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let D=i.properties.get(L);D.light=M}return L}function y(A,P,M,T,L){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&L===ta)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,A.matrixWorld);let Y=e.update(A),V=A.material;if(Array.isArray(V)){let C=Y.groups;for(let N=0,I=C.length;N<I;N++){let O=C[N],W=V[O.materialIndex];if(W&&W.visible){let ee=E(A,W,T,L);A.onBeforeShadow(i,A,P,M,Y,ee,O),i.renderBufferDirect(M,null,Y,ee,A,O),A.onAfterShadow(i,A,P,M,Y,ee,O)}}}else if(V.visible){let C=E(A,V,T,L);A.onBeforeShadow(i,A,P,M,Y,C,null),i.renderBufferDirect(M,null,Y,C,A,null),A.onAfterShadow(i,A,P,M,Y,C,null)}}let D=A.children;for(let Y=0,V=D.length;Y<V;Y++)y(D[Y],P,M,T,L)}function R(A){A.target.removeEventListener("dispose",R);for(let M in u){let T=u[M],L=A.target.uuid;L in T&&(T[L].dispose(),delete T[L])}}}function bM(i,e){function t(){let K=!1,Ce=new Bt,ve=null,Re=new Bt(0,0,0,0);return{setMask:function(Oe){ve!==Oe&&!K&&(i.colorMask(Oe,Oe,Oe,Oe),ve=Oe)},setLocked:function(Oe){K=Oe},setClear:function(Oe,be,rt,tt,zt){zt===!0&&(Oe*=tt,be*=tt,rt*=tt),Ce.set(Oe,be,rt,tt),Re.equals(Ce)===!1&&(i.clearColor(Oe,be,rt,tt),Re.copy(Ce))},reset:function(){K=!1,ve=null,Re.set(-1,0,0,0)}}}function n(){let K=!1,Ce=!1,ve=null,Re=null,Oe=null;return{setReversed:function(be){if(Ce!==be){let rt=e.get("EXT_clip_control");be?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT),Ce=be;let tt=Oe;Oe=null,this.setClear(tt)}},getReversed:function(){return Ce},setTest:function(be){be?_e(i.DEPTH_TEST):we(i.DEPTH_TEST)},setMask:function(be){ve!==be&&!K&&(i.depthMask(be),ve=be)},setFunc:function(be){if(Ce&&(be=zp[be]),Re!==be){switch(be){case Sl:i.depthFunc(i.NEVER);break;case Tl:i.depthFunc(i.ALWAYS);break;case bl:i.depthFunc(i.LESS);break;case Us:i.depthFunc(i.LEQUAL);break;case El:i.depthFunc(i.EQUAL);break;case Al:i.depthFunc(i.GEQUAL);break;case wl:i.depthFunc(i.GREATER);break;case Rl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Re=be}},setLocked:function(be){K=be},setClear:function(be){Oe!==be&&(Oe=be,Ce&&(be=1-be),i.clearDepth(be))},reset:function(){K=!1,ve=null,Re=null,Oe=null,Ce=!1}}}function r(){let K=!1,Ce=null,ve=null,Re=null,Oe=null,be=null,rt=null,tt=null,zt=null;return{setTest:function(Nt){K||(Nt?_e(i.STENCIL_TEST):we(i.STENCIL_TEST))},setMask:function(Nt){Ce!==Nt&&!K&&(i.stencilMask(Nt),Ce=Nt)},setFunc:function(Nt,qn,ii){(ve!==Nt||Re!==qn||Oe!==ii)&&(i.stencilFunc(Nt,qn,ii),ve=Nt,Re=qn,Oe=ii)},setOp:function(Nt,qn,ii){(be!==Nt||rt!==qn||tt!==ii)&&(i.stencilOp(Nt,qn,ii),be=Nt,rt=qn,tt=ii)},setLocked:function(Nt){K=Nt},setClear:function(Nt){zt!==Nt&&(i.clearStencil(Nt),zt=Nt)},reset:function(){K=!1,Ce=null,ve=null,Re=null,Oe=null,be=null,rt=null,tt=null,zt=null}}}let s=new t,a=new n,o=new r,c=new WeakMap,u=new WeakMap,l={},h={},f={},p=new WeakMap,v=[],_=null,g=!1,m=null,x=null,E=null,y=null,R=null,A=null,P=null,M=new Qe(0,0,0),T=0,L=!1,U=null,D=null,Y=null,V=null,C=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),I=!1,O=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(W)[1]),I=O>=1):W.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),I=O>=2);let ee=null,ne={},Ae=i.getParameter(i.SCISSOR_BOX),Ne=i.getParameter(i.VIEWPORT),lt=new Bt().fromArray(Ae),qe=new Bt().fromArray(Ne);function ct(K,Ce,ve,Re){let Oe=new Uint8Array(4),be=i.createTexture();i.bindTexture(K,be),i.texParameteri(K,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(K,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let rt=0;rt<ve;rt++)K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?i.texImage3D(Ce,0,i.RGBA,1,1,Re,0,i.RGBA,i.UNSIGNED_BYTE,Oe):i.texImage2D(Ce+rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Oe);return be}let me={};me[i.TEXTURE_2D]=ct(i.TEXTURE_2D,i.TEXTURE_2D,1),me[i.TEXTURE_CUBE_MAP]=ct(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[i.TEXTURE_2D_ARRAY]=ct(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),me[i.TEXTURE_3D]=ct(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_e(i.DEPTH_TEST),a.setFunc(Us),le(!1),se(ph),_e(i.CULL_FACE),xe(ci);function _e(K){l[K]!==!0&&(i.enable(K),l[K]=!0)}function we(K){l[K]!==!1&&(i.disable(K),l[K]=!1)}function it(K,Ce){return f[K]!==Ce?(i.bindFramebuffer(K,Ce),f[K]=Ce,K===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Ce),K===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Ce),!0):!1}function ze(K,Ce){let ve=v,Re=!1;if(K){ve=p.get(Ce),ve===void 0&&(ve=[],p.set(Ce,ve));let Oe=K.textures;if(ve.length!==Oe.length||ve[0]!==i.COLOR_ATTACHMENT0){for(let be=0,rt=Oe.length;be<rt;be++)ve[be]=i.COLOR_ATTACHMENT0+be;ve.length=Oe.length,Re=!0}}else ve[0]!==i.BACK&&(ve[0]=i.BACK,Re=!0);Re&&i.drawBuffers(ve)}function nt(K){return _!==K?(i.useProgram(K),_=K,!0):!1}let X={[os]:i.FUNC_ADD,[op]:i.FUNC_SUBTRACT,[lp]:i.FUNC_REVERSE_SUBTRACT};X[cp]=i.MIN,X[up]=i.MAX;let Q={[hp]:i.ZERO,[fp]:i.ONE,[dp]:i.SRC_COLOR,[vh]:i.SRC_ALPHA,[_p]:i.SRC_ALPHA_SATURATE,[vp]:i.DST_COLOR,[mp]:i.DST_ALPHA,[pp]:i.ONE_MINUS_SRC_COLOR,[xh]:i.ONE_MINUS_SRC_ALPHA,[xp]:i.ONE_MINUS_DST_COLOR,[gp]:i.ONE_MINUS_DST_ALPHA,[yp]:i.CONSTANT_COLOR,[Mp]:i.ONE_MINUS_CONSTANT_COLOR,[Sp]:i.CONSTANT_ALPHA,[Tp]:i.ONE_MINUS_CONSTANT_ALPHA};function xe(K,Ce,ve,Re,Oe,be,rt,tt,zt,Nt){if(K===ci){g===!0&&(we(i.BLEND),g=!1);return}if(g===!1&&(_e(i.BLEND),g=!0),K!==ap){if(K!==m||Nt!==L){if((x!==os||R!==os)&&(i.blendEquation(i.FUNC_ADD),x=os,R=os),Nt)switch(K){case na:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vi:i.blendFunc(i.ONE,i.ONE);break;case mh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ft("WebGLState: Invalid blending: ",K);break}else switch(K){case na:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case mh:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gh:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",K);break}E=null,y=null,A=null,P=null,M.set(0,0,0),T=0,m=K,L=Nt}return}Oe=Oe||Ce,be=be||ve,rt=rt||Re,(Ce!==x||Oe!==R)&&(i.blendEquationSeparate(X[Ce],X[Oe]),x=Ce,R=Oe),(ve!==E||Re!==y||be!==A||rt!==P)&&(i.blendFuncSeparate(Q[ve],Q[Re],Q[be],Q[rt]),E=ve,y=Re,A=be,P=rt),(tt.equals(M)===!1||zt!==T)&&(i.blendColor(tt.r,tt.g,tt.b,zt),M.copy(tt),T=zt),m=K,L=!1}function Me(K,Ce){K.side===Sn?we(i.CULL_FACE):_e(i.CULL_FACE);let ve=K.side===Mn;Ce&&(ve=!ve),le(ve),K.blending===na&&K.transparent===!1?xe(ci):xe(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),a.setFunc(K.depthFunc),a.setTest(K.depthTest),a.setMask(K.depthWrite),s.setMask(K.colorWrite);let Re=K.stencilWrite;o.setTest(Re),Re&&(o.setMask(K.stencilWriteMask),o.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),o.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),ye(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?_e(i.SAMPLE_ALPHA_TO_COVERAGE):we(i.SAMPLE_ALPHA_TO_COVERAGE)}function le(K){U!==K&&(K?i.frontFace(i.CW):i.frontFace(i.CCW),U=K)}function se(K){K!==ip?(_e(i.CULL_FACE),K!==D&&(K===ph?i.cullFace(i.BACK):K===rp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):we(i.CULL_FACE),D=K}function te(K){K!==Y&&(I&&i.lineWidth(K),Y=K)}function ye(K,Ce,ve){K?(_e(i.POLYGON_OFFSET_FILL),(V!==Ce||C!==ve)&&(V=Ce,C=ve,a.getReversed()&&(Ce=-Ce),i.polygonOffset(Ce,ve))):we(i.POLYGON_OFFSET_FILL)}function De(K){K?_e(i.SCISSOR_TEST):we(i.SCISSOR_TEST)}function Ke(K){K===void 0&&(K=i.TEXTURE0+N-1),ee!==K&&(i.activeTexture(K),ee=K)}function q(K,Ce,ve){ve===void 0&&(ee===null?ve=i.TEXTURE0+N-1:ve=ee);let Re=ne[ve];Re===void 0&&(Re={type:void 0,texture:void 0},ne[ve]=Re),(Re.type!==K||Re.texture!==Ce)&&(ee!==ve&&(i.activeTexture(ve),ee=ve),i.bindTexture(K,Ce||me[K]),Re.type=K,Re.texture=Ce)}function dt(){let K=ne[ee];K!==void 0&&K.type!==void 0&&(i.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function Ge(){try{i.compressedTexImage2D(...arguments)}catch(K){ft("WebGLState:",K)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(K){ft("WebGLState:",K)}}function b(){try{i.texSubImage2D(...arguments)}catch(K){ft("WebGLState:",K)}}function ie(){try{i.texSubImage3D(...arguments)}catch(K){ft("WebGLState:",K)}}function ue(){try{i.compressedTexSubImage2D(...arguments)}catch(K){ft("WebGLState:",K)}}function ge(){try{i.compressedTexSubImage3D(...arguments)}catch(K){ft("WebGLState:",K)}}function B(){try{i.texStorage2D(...arguments)}catch(K){ft("WebGLState:",K)}}function G(){try{i.texStorage3D(...arguments)}catch(K){ft("WebGLState:",K)}}function H(){try{i.texImage2D(...arguments)}catch(K){ft("WebGLState:",K)}}function z(){try{i.texImage3D(...arguments)}catch(K){ft("WebGLState:",K)}}function j(K){return h[K]!==void 0?h[K]:i.getParameter(K)}function de(K,Ce){h[K]!==Ce&&(i.pixelStorei(K,Ce),h[K]=Ce)}function he(K){lt.equals(K)===!1&&(i.scissor(K.x,K.y,K.z,K.w),lt.copy(K))}function pe(K){qe.equals(K)===!1&&(i.viewport(K.x,K.y,K.z,K.w),qe.copy(K))}function Te(K,Ce){let ve=u.get(Ce);ve===void 0&&(ve=new WeakMap,u.set(Ce,ve));let Re=ve.get(K);Re===void 0&&(Re=i.getUniformBlockIndex(Ce,K.name),ve.set(K,Re))}function Ie(K,Ce){let Re=u.get(Ce).get(K);c.get(Ce)!==Re&&(i.uniformBlockBinding(Ce,Re,K.__bindingPointIndex),c.set(Ce,Re))}function Ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),l={},h={},ee=null,ne={},f={},p=new WeakMap,v=[],_=null,g=!1,m=null,x=null,E=null,y=null,R=null,A=null,P=null,M=new Qe(0,0,0),T=0,L=!1,U=null,D=null,Y=null,V=null,C=null,lt.set(0,0,i.canvas.width,i.canvas.height),qe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:_e,disable:we,bindFramebuffer:it,drawBuffers:ze,useProgram:nt,setBlending:xe,setMaterial:Me,setFlipSided:le,setCullFace:se,setLineWidth:te,setPolygonOffset:ye,setScissorTest:De,activeTexture:Ke,bindTexture:q,unbindTexture:dt,compressedTexImage2D:Ge,compressedTexImage3D:F,texImage2D:H,texImage3D:z,pixelStorei:de,getParameter:j,updateUBOMapping:Te,uniformBlockBinding:Ie,texStorage2D:B,texStorage3D:G,texSubImage2D:b,texSubImage3D:ie,compressedTexSubImage2D:ue,compressedTexSubImage3D:ge,scissor:he,viewport:pe,reset:Ze}}function EM(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new at,l=new WeakMap,h=new Set,f,p=new WeakMap,v=!1;try{v=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(F,b){return v?new OffscreenCanvas(F,b):ks("canvas")}function g(F,b,ie){let ue=1,ge=Ge(F);if((ge.width>ie||ge.height>ie)&&(ue=ie/Math.max(ge.width,ge.height)),ue<1)if(typeof HTMLImageElement!="undefined"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&F instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&F instanceof ImageBitmap||typeof VideoFrame!="undefined"&&F instanceof VideoFrame){let B=Math.floor(ue*ge.width),G=Math.floor(ue*ge.height);f===void 0&&(f=_(B,G));let H=b?_(B,G):f;return H.width=B,H.height=G,H.getContext("2d").drawImage(F,0,0,B,G),st("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+B+"x"+G+")."),H}else return"data"in F&&st("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),F;return F}function m(F){return F.generateMipmaps}function x(F){i.generateMipmap(F)}function E(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(F,b,ie,ue,ge,B=!1){if(F!==null){if(i[F]!==void 0)return i[F];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let G;ue&&(G=e.get("EXT_texture_norm16"),G||st("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let H=b;if(b===i.RED&&(ie===i.FLOAT&&(H=i.R32F),ie===i.HALF_FLOAT&&(H=i.R16F),ie===i.UNSIGNED_BYTE&&(H=i.R8),ie===i.UNSIGNED_SHORT&&G&&(H=G.R16_EXT),ie===i.SHORT&&G&&(H=G.R16_SNORM_EXT)),b===i.RED_INTEGER&&(ie===i.UNSIGNED_BYTE&&(H=i.R8UI),ie===i.UNSIGNED_SHORT&&(H=i.R16UI),ie===i.UNSIGNED_INT&&(H=i.R32UI),ie===i.BYTE&&(H=i.R8I),ie===i.SHORT&&(H=i.R16I),ie===i.INT&&(H=i.R32I)),b===i.RG&&(ie===i.FLOAT&&(H=i.RG32F),ie===i.HALF_FLOAT&&(H=i.RG16F),ie===i.UNSIGNED_BYTE&&(H=i.RG8),ie===i.UNSIGNED_SHORT&&G&&(H=G.RG16_EXT),ie===i.SHORT&&G&&(H=G.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(ie===i.UNSIGNED_BYTE&&(H=i.RG8UI),ie===i.UNSIGNED_SHORT&&(H=i.RG16UI),ie===i.UNSIGNED_INT&&(H=i.RG32UI),ie===i.BYTE&&(H=i.RG8I),ie===i.SHORT&&(H=i.RG16I),ie===i.INT&&(H=i.RG32I)),b===i.RGB_INTEGER&&(ie===i.UNSIGNED_BYTE&&(H=i.RGB8UI),ie===i.UNSIGNED_SHORT&&(H=i.RGB16UI),ie===i.UNSIGNED_INT&&(H=i.RGB32UI),ie===i.BYTE&&(H=i.RGB8I),ie===i.SHORT&&(H=i.RGB16I),ie===i.INT&&(H=i.RGB32I)),b===i.RGBA_INTEGER&&(ie===i.UNSIGNED_BYTE&&(H=i.RGBA8UI),ie===i.UNSIGNED_SHORT&&(H=i.RGBA16UI),ie===i.UNSIGNED_INT&&(H=i.RGBA32UI),ie===i.BYTE&&(H=i.RGBA8I),ie===i.SHORT&&(H=i.RGBA16I),ie===i.INT&&(H=i.RGBA32I)),b===i.RGB&&(ie===i.UNSIGNED_SHORT&&G&&(H=G.RGB16_EXT),ie===i.SHORT&&G&&(H=G.RGB16_SNORM_EXT),ie===i.UNSIGNED_INT_5_9_9_9_REV&&(H=i.RGB9_E5),ie===i.UNSIGNED_INT_10F_11F_11F_REV&&(H=i.R11F_G11F_B10F)),b===i.RGBA){let z=B?Ua:yt.getTransfer(ge);ie===i.FLOAT&&(H=i.RGBA32F),ie===i.HALF_FLOAT&&(H=i.RGBA16F),ie===i.UNSIGNED_BYTE&&(H=z===Dt?i.SRGB8_ALPHA8:i.RGBA8),ie===i.UNSIGNED_SHORT&&G&&(H=G.RGBA16_EXT),ie===i.SHORT&&G&&(H=G.RGBA16_SNORM_EXT),ie===i.UNSIGNED_SHORT_4_4_4_4&&(H=i.RGBA4),ie===i.UNSIGNED_SHORT_5_5_5_1&&(H=i.RGB5_A1)}return(H===i.R16F||H===i.R32F||H===i.RG16F||H===i.RG32F||H===i.RGBA16F||H===i.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function R(F,b){let ie;return F?b===null||b===Ri||b===sa?ie=i.DEPTH24_STENCIL8:b===jn?ie=i.DEPTH32F_STENCIL8:b===ra&&(ie=i.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ri||b===sa?ie=i.DEPTH_COMPONENT24:b===jn?ie=i.DEPTH_COMPONENT32F:b===ra&&(ie=i.DEPTH_COMPONENT16),ie}function A(F,b){return m(F)===!0||F.isFramebufferTexture&&F.minFilter!==Xt&&F.minFilter!==an?Math.log2(Math.max(b.width,b.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?b.mipmaps.length:1}function P(F){let b=F.target;b.removeEventListener("dispose",P),T(b),b.isVideoTexture&&l.delete(b),b.isHTMLTexture&&h.delete(b)}function M(F){let b=F.target;b.removeEventListener("dispose",M),U(b)}function T(F){let b=n.get(F);if(b.__webglInit===void 0)return;let ie=F.source,ue=p.get(ie);if(ue){let ge=ue[b.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&L(F),Object.keys(ue).length===0&&p.delete(ie)}n.remove(F)}function L(F){let b=n.get(F);i.deleteTexture(b.__webglTexture);let ie=F.source,ue=p.get(ie);delete ue[b.__cacheKey],a.memory.textures--}function U(F){let b=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(b.__webglFramebuffer[ue]))for(let ge=0;ge<b.__webglFramebuffer[ue].length;ge++)i.deleteFramebuffer(b.__webglFramebuffer[ue][ge]);else i.deleteFramebuffer(b.__webglFramebuffer[ue]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[ue])}else{if(Array.isArray(b.__webglFramebuffer))for(let ue=0;ue<b.__webglFramebuffer.length;ue++)i.deleteFramebuffer(b.__webglFramebuffer[ue]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ue=0;ue<b.__webglColorRenderbuffer.length;ue++)b.__webglColorRenderbuffer[ue]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[ue]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let ie=F.textures;for(let ue=0,ge=ie.length;ue<ge;ue++){let B=n.get(ie[ue]);B.__webglTexture&&(i.deleteTexture(B.__webglTexture),a.memory.textures--),n.remove(ie[ue])}n.remove(F)}let D=0;function Y(){D=0}function V(){return D}function C(F){D=F}function N(){let F=D;return F>=r.maxTextures&&st("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+r.maxTextures),D+=1,F}function I(F){let b=[];return b.push(F.wrapS),b.push(F.wrapT),b.push(F.wrapR||0),b.push(F.magFilter),b.push(F.minFilter),b.push(F.anisotropy),b.push(F.internalFormat),b.push(F.format),b.push(F.type),b.push(F.generateMipmaps),b.push(F.premultiplyAlpha),b.push(F.flipY),b.push(F.unpackAlignment),b.push(F.colorSpace),b.join()}function O(F,b){let ie=n.get(F);if(F.isVideoTexture&&q(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&ie.__version!==F.version){let ue=F.image;if(ue===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{we(ie,F,b);return}}else F.isExternalTexture&&(ie.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,ie.__webglTexture,i.TEXTURE0+b)}function W(F,b){let ie=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&ie.__version!==F.version){we(ie,F,b);return}else F.isExternalTexture&&(ie.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,ie.__webglTexture,i.TEXTURE0+b)}function ee(F,b){let ie=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&ie.__version!==F.version){we(ie,F,b);return}t.bindTexture(i.TEXTURE_3D,ie.__webglTexture,i.TEXTURE0+b)}function ne(F,b){let ie=n.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&ie.__version!==F.version){it(ie,F,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture,i.TEXTURE0+b)}let Ae={[oi]:i.REPEAT,[ai]:i.CLAMP_TO_EDGE,[Fs]:i.MIRRORED_REPEAT},Ne={[Xt]:i.NEAREST,[$l]:i.NEAREST_MIPMAP_NEAREST,[us]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[ia]:i.LINEAR_MIPMAP_NEAREST,[wi]:i.LINEAR_MIPMAP_LINEAR},lt={[Lp]:i.NEVER,[Up]:i.ALWAYS,[Np]:i.LESS,[Bc]:i.LEQUAL,[Dp]:i.EQUAL,[kc]:i.GEQUAL,[Op]:i.GREATER,[Hp]:i.NOTEQUAL};function qe(F,b){if(b.type===jn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===an||b.magFilter===ia||b.magFilter===us||b.magFilter===wi||b.minFilter===an||b.minFilter===ia||b.minFilter===us||b.minFilter===wi)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,Ae[b.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,Ae[b.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,Ae[b.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,Ne[b.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,Ne[b.minFilter]),b.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,lt[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Xt||b.minFilter!==us&&b.minFilter!==wi||b.type===jn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let ie=e.get("EXT_texture_filter_anisotropic");i.texParameterf(F,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ct(F,b){let ie=!1;F.__webglInit===void 0&&(F.__webglInit=!0,b.addEventListener("dispose",P));let ue=b.source,ge=p.get(ue);ge===void 0&&(ge={},p.set(ue,ge));let B=I(b);if(B!==F.__cacheKey){ge[B]===void 0&&(ge[B]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,ie=!0),ge[B].usedTimes++;let G=ge[F.__cacheKey];G!==void 0&&(ge[F.__cacheKey].usedTimes--,G.usedTimes===0&&L(b)),F.__cacheKey=B,F.__webglTexture=ge[B].texture}return ie}function me(F,b,ie){return Math.floor(Math.floor(F/ie)/b)}function _e(F,b,ie,ue){let B=F.updateRanges;if(B.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,ie,ue,b.data);else{B.sort((de,he)=>de.start-he.start);let G=0;for(let de=1;de<B.length;de++){let he=B[G],pe=B[de],Te=he.start+he.count,Ie=me(pe.start,b.width,4),Ze=me(he.start,b.width,4);pe.start<=Te+1&&Ie===Ze&&me(pe.start+pe.count-1,b.width,4)===Ie?he.count=Math.max(he.count,pe.start+pe.count-he.start):(++G,B[G]=pe)}B.length=G+1;let H=t.getParameter(i.UNPACK_ROW_LENGTH),z=t.getParameter(i.UNPACK_SKIP_PIXELS),j=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let de=0,he=B.length;de<he;de++){let pe=B[de],Te=Math.floor(pe.start/4),Ie=Math.ceil(pe.count/4),Ze=Te%b.width,K=Math.floor(Te/b.width),Ce=Ie,ve=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ze),t.pixelStorei(i.UNPACK_SKIP_ROWS,K),t.texSubImage2D(i.TEXTURE_2D,0,Ze,K,Ce,ve,ie,ue,b.data)}F.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,H),t.pixelStorei(i.UNPACK_SKIP_PIXELS,z),t.pixelStorei(i.UNPACK_SKIP_ROWS,j)}}function we(F,b,ie){let ue=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ue=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ue=i.TEXTURE_3D);let ge=ct(F,b),B=b.source;t.bindTexture(ue,F.__webglTexture,i.TEXTURE0+ie);let G=n.get(B);if(B.version!==G.__version||ge===!0){if(t.activeTexture(i.TEXTURE0+ie),(typeof ImageBitmap!="undefined"&&b.image instanceof ImageBitmap)===!1){let ve=yt.getPrimaries(yt.workingColorSpace),Re=b.colorSpace===Qn?null:yt.getPrimaries(b.colorSpace),Oe=b.colorSpace===Qn||ve===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe)}t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let z=g(b.image,!1,r.maxTextureSize);z=dt(b,z);let j=s.convert(b.format,b.colorSpace),de=s.convert(b.type),he=y(b.internalFormat,j,de,b.normalized,b.colorSpace,b.isVideoTexture);qe(ue,b);let pe,Te=b.mipmaps,Ie=b.isVideoTexture!==!0,Ze=G.__version===void 0||ge===!0,K=B.dataReady,Ce=A(b,z);if(b.isDepthTexture)he=R(b.format===Dr,b.type),Ze&&(Ie?t.texStorage2D(i.TEXTURE_2D,1,he,z.width,z.height):t.texImage2D(i.TEXTURE_2D,0,he,z.width,z.height,0,j,de,null));else if(b.isDataTexture)if(Te.length>0){Ie&&Ze&&t.texStorage2D(i.TEXTURE_2D,Ce,he,Te[0].width,Te[0].height);for(let ve=0,Re=Te.length;ve<Re;ve++)pe=Te[ve],Ie?K&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,pe.width,pe.height,j,de,pe.data):t.texImage2D(i.TEXTURE_2D,ve,he,pe.width,pe.height,0,j,de,pe.data);b.generateMipmaps=!1}else Ie?(Ze&&t.texStorage2D(i.TEXTURE_2D,Ce,he,z.width,z.height),K&&_e(b,z,j,de)):t.texImage2D(i.TEXTURE_2D,0,he,z.width,z.height,0,j,de,z.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ie&&Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,he,Te[0].width,Te[0].height,z.depth);for(let ve=0,Re=Te.length;ve<Re;ve++)if(pe=Te[ve],b.format!==$n)if(j!==null)if(Ie){if(K)if(b.layerUpdates.size>0){let Oe=Dh(pe.width,pe.height,b.format,b.type);for(let be of b.layerUpdates){let rt=pe.data.subarray(be*Oe/pe.data.BYTES_PER_ELEMENT,(be+1)*Oe/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,be,pe.width,pe.height,1,j,rt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,pe.width,pe.height,z.depth,j,pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ve,he,pe.width,pe.height,z.depth,0,pe.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?K&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,pe.width,pe.height,z.depth,j,de,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ve,he,pe.width,pe.height,z.depth,0,j,de,pe.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{Ie&&Ze&&t.texStorage2D(i.TEXTURE_2D,Ce,he,Te[0].width,Te[0].height);for(let ve=0,Re=Te.length;ve<Re;ve++)pe=Te[ve],b.format!==$n?j!==null?Ie?K&&t.compressedTexSubImage2D(i.TEXTURE_2D,ve,0,0,pe.width,pe.height,j,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,ve,he,pe.width,pe.height,0,pe.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?K&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,pe.width,pe.height,j,de,pe.data):t.texImage2D(i.TEXTURE_2D,ve,he,pe.width,pe.height,0,j,de,pe.data)}else if(b.isDataArrayTexture)if(Ie){if(Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,he,z.width,z.height,z.depth),K)if(b.layerUpdates.size>0){let ve=Dh(z.width,z.height,b.format,b.type);for(let Re of b.layerUpdates){let Oe=z.data.subarray(Re*ve/z.data.BYTES_PER_ELEMENT,(Re+1)*ve/z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Re,z.width,z.height,1,j,de,Oe)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,z.width,z.height,z.depth,j,de,z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,he,z.width,z.height,z.depth,0,j,de,z.data);else if(b.isData3DTexture)Ie?(Ze&&t.texStorage3D(i.TEXTURE_3D,Ce,he,z.width,z.height,z.depth),K&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,z.width,z.height,z.depth,j,de,z.data)):t.texImage3D(i.TEXTURE_3D,0,he,z.width,z.height,z.depth,0,j,de,z.data);else if(b.isFramebufferTexture){if(Ze)if(Ie)t.texStorage2D(i.TEXTURE_2D,Ce,he,z.width,z.height);else{let ve=z.width,Re=z.height;for(let Oe=0;Oe<Ce;Oe++)t.texImage2D(i.TEXTURE_2D,Oe,he,ve,Re,0,j,de,null),ve>>=1,Re>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let ve=i.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),z.parentNode!==ve){ve.appendChild(z),h.add(b),ve.onpaint=Re=>{let Oe=Re.changedElements;for(let be of h)Oe.includes(be.image)&&(be.needsUpdate=!0)},ve.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,z);else{let Oe=i.RGBA,be=i.RGBA,rt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Oe,be,rt,z)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Te.length>0){if(Ie&&Ze){let ve=Ge(Te[0]);t.texStorage2D(i.TEXTURE_2D,Ce,he,ve.width,ve.height)}for(let ve=0,Re=Te.length;ve<Re;ve++)pe=Te[ve],Ie?K&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,j,de,pe):t.texImage2D(i.TEXTURE_2D,ve,he,j,de,pe);b.generateMipmaps=!1}else if(Ie){if(Ze){let ve=Ge(z);t.texStorage2D(i.TEXTURE_2D,Ce,he,ve.width,ve.height)}K&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,j,de,z)}else t.texImage2D(i.TEXTURE_2D,0,he,j,de,z);m(b)&&x(ue),G.__version=B.version,b.onUpdate&&b.onUpdate(b)}F.__version=b.version}function it(F,b,ie){if(b.image.length!==6)return;let ue=ct(F,b),ge=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+ie);let B=n.get(ge);if(ge.version!==B.__version||ue===!0){t.activeTexture(i.TEXTURE0+ie);let G=yt.getPrimaries(yt.workingColorSpace),H=b.colorSpace===Qn?null:yt.getPrimaries(b.colorSpace),z=b.colorSpace===Qn||G===H?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,z);let j=b.isCompressedTexture||b.image[0].isCompressedTexture,de=b.image[0]&&b.image[0].isDataTexture,he=[];for(let be=0;be<6;be++)!j&&!de?he[be]=g(b.image[be],!0,r.maxCubemapSize):he[be]=de?b.image[be].image:b.image[be],he[be]=dt(b,he[be]);let pe=he[0],Te=s.convert(b.format,b.colorSpace),Ie=s.convert(b.type),Ze=y(b.internalFormat,Te,Ie,b.normalized,b.colorSpace),K=b.isVideoTexture!==!0,Ce=B.__version===void 0||ue===!0,ve=ge.dataReady,Re=A(b,pe);qe(i.TEXTURE_CUBE_MAP,b);let Oe;if(j){K&&Ce&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,Ze,pe.width,pe.height);for(let be=0;be<6;be++){Oe=he[be].mipmaps;for(let rt=0;rt<Oe.length;rt++){let tt=Oe[rt];b.format!==$n?Te!==null?K?ve&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,rt,0,0,tt.width,tt.height,Te,tt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,rt,Ze,tt.width,tt.height,0,tt.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,rt,0,0,tt.width,tt.height,Te,Ie,tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,rt,Ze,tt.width,tt.height,0,Te,Ie,tt.data)}}}else{if(Oe=b.mipmaps,K&&Ce){Oe.length>0&&Re++;let be=Ge(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,Ze,be.width,be.height)}for(let be=0;be<6;be++)if(de){K?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,he[be].width,he[be].height,Te,Ie,he[be].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Ze,he[be].width,he[be].height,0,Te,Ie,he[be].data);for(let rt=0;rt<Oe.length;rt++){let zt=Oe[rt].image[be].image;K?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,rt+1,0,0,zt.width,zt.height,Te,Ie,zt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,rt+1,Ze,zt.width,zt.height,0,Te,Ie,zt.data)}}else{K?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Te,Ie,he[be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Ze,Te,Ie,he[be]);for(let rt=0;rt<Oe.length;rt++){let tt=Oe[rt];K?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,rt+1,0,0,Te,Ie,tt.image[be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,rt+1,Ze,Te,Ie,tt.image[be])}}}m(b)&&x(i.TEXTURE_CUBE_MAP),B.__version=ge.version,b.onUpdate&&b.onUpdate(b)}F.__version=b.version}function ze(F,b,ie,ue,ge,B){let G=s.convert(ie.format,ie.colorSpace),H=s.convert(ie.type),z=y(ie.internalFormat,G,H,ie.normalized,ie.colorSpace),j=n.get(b),de=n.get(ie);if(de.__renderTarget=b,!j.__hasExternalTextures){let he=Math.max(1,b.width>>B),pe=Math.max(1,b.height>>B);ge===i.TEXTURE_3D||ge===i.TEXTURE_2D_ARRAY?t.texImage3D(ge,B,z,he,pe,b.depth,0,G,H,null):t.texImage2D(ge,B,z,he,pe,0,G,H,null)}t.bindFramebuffer(i.FRAMEBUFFER,F),Ke(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,ge,de.__webglTexture,0,De(b)):(ge===i.TEXTURE_2D||ge>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ue,ge,de.__webglTexture,B),t.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(F,b,ie){if(i.bindRenderbuffer(i.RENDERBUFFER,F),b.depthBuffer){let ue=b.depthTexture,ge=ue&&ue.isDepthTexture?ue.type:null,B=R(b.stencilBuffer,ge),G=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ke(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,De(b),B,b.width,b.height):ie?i.renderbufferStorageMultisample(i.RENDERBUFFER,De(b),B,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,B,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,G,i.RENDERBUFFER,F)}else{let ue=b.textures;for(let ge=0;ge<ue.length;ge++){let B=ue[ge],G=s.convert(B.format,B.colorSpace),H=s.convert(B.type),z=y(B.internalFormat,G,H,B.normalized,B.colorSpace);Ke(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,De(b),z,b.width,b.height):ie?i.renderbufferStorageMultisample(i.RENDERBUFFER,De(b),z,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,z,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function X(F,b,ie){let ue=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,F),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ge=n.get(b.depthTexture);if(ge.__renderTarget=b,(!ge.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ue){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,b.depthTexture.addEventListener("dispose",P)),ge.__webglTexture===void 0){ge.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ge.__webglTexture),qe(i.TEXTURE_CUBE_MAP,b.depthTexture);let j=s.convert(b.depthTexture.format),de=s.convert(b.depthTexture.type),he;b.depthTexture.format===Hi?he=i.DEPTH_COMPONENT24:b.depthTexture.format===Dr&&(he=i.DEPTH24_STENCIL8);for(let pe=0;pe<6;pe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,he,b.width,b.height,0,j,de,null)}}else O(b.depthTexture,0);let B=ge.__webglTexture,G=De(b),H=ue?i.TEXTURE_CUBE_MAP_POSITIVE_X+ie:i.TEXTURE_2D,z=b.depthTexture.format===Dr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===Hi)Ke(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,H,B,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,z,H,B,0);else if(b.depthTexture.format===Dr)Ke(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,H,B,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,z,H,B,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Q(F){let b=n.get(F),ie=F.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==F.depthTexture){let ue=F.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ue){let ge=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ue.removeEventListener("dispose",ge)};ue.addEventListener("dispose",ge),b.__depthDisposeCallback=ge}b.__boundDepthTexture=ue}if(F.depthTexture&&!b.__autoAllocateDepthBuffer)if(ie)for(let ue=0;ue<6;ue++)X(b.__webglFramebuffer[ue],F,ue);else{let ue=F.texture.mipmaps;ue&&ue.length>0?X(b.__webglFramebuffer[0],F,0):X(b.__webglFramebuffer,F,0)}else if(ie){b.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[ue]),b.__webglDepthbuffer[ue]===void 0)b.__webglDepthbuffer[ue]=i.createRenderbuffer(),nt(b.__webglDepthbuffer[ue],F,!1);else{let ge=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,B=b.__webglDepthbuffer[ue];i.bindRenderbuffer(i.RENDERBUFFER,B),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,B)}}else{let ue=F.texture.mipmaps;if(ue&&ue.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),nt(b.__webglDepthbuffer,F,!1);else{let ge=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,B=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,B),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,B)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(F,b,ie){let ue=n.get(F);b!==void 0&&ze(ue.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ie!==void 0&&Q(F)}function Me(F){let b=F.texture,ie=n.get(F),ue=n.get(b);F.addEventListener("dispose",M);let ge=F.textures,B=F.isWebGLCubeRenderTarget===!0,G=ge.length>1;if(G||(ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture()),ue.__version=b.version,a.memory.textures++),B){ie.__webglFramebuffer=[];for(let H=0;H<6;H++)if(b.mipmaps&&b.mipmaps.length>0){ie.__webglFramebuffer[H]=[];for(let z=0;z<b.mipmaps.length;z++)ie.__webglFramebuffer[H][z]=i.createFramebuffer()}else ie.__webglFramebuffer[H]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){ie.__webglFramebuffer=[];for(let H=0;H<b.mipmaps.length;H++)ie.__webglFramebuffer[H]=i.createFramebuffer()}else ie.__webglFramebuffer=i.createFramebuffer();if(G)for(let H=0,z=ge.length;H<z;H++){let j=n.get(ge[H]);j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture(),a.memory.textures++)}if(F.samples>0&&Ke(F)===!1){ie.__webglMultisampledFramebuffer=i.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let H=0;H<ge.length;H++){let z=ge[H];ie.__webglColorRenderbuffer[H]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ie.__webglColorRenderbuffer[H]);let j=s.convert(z.format,z.colorSpace),de=s.convert(z.type),he=y(z.internalFormat,j,de,z.normalized,z.colorSpace,F.isXRRenderTarget===!0),pe=De(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,he,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.RENDERBUFFER,ie.__webglColorRenderbuffer[H])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(ie.__webglDepthRenderbuffer=i.createRenderbuffer(),nt(ie.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(B){t.bindTexture(i.TEXTURE_CUBE_MAP,ue.__webglTexture),qe(i.TEXTURE_CUBE_MAP,b);for(let H=0;H<6;H++)if(b.mipmaps&&b.mipmaps.length>0)for(let z=0;z<b.mipmaps.length;z++)ze(ie.__webglFramebuffer[H][z],F,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+H,z);else ze(ie.__webglFramebuffer[H],F,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0);m(b)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(G){for(let H=0,z=ge.length;H<z;H++){let j=ge[H],de=n.get(j),he=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(he=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,de.__webglTexture),qe(he,j),ze(ie.__webglFramebuffer,F,j,i.COLOR_ATTACHMENT0+H,he,0),m(j)&&x(he)}t.unbindTexture()}else{let H=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(H=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(H,ue.__webglTexture),qe(H,b),b.mipmaps&&b.mipmaps.length>0)for(let z=0;z<b.mipmaps.length;z++)ze(ie.__webglFramebuffer[z],F,b,i.COLOR_ATTACHMENT0,H,z);else ze(ie.__webglFramebuffer,F,b,i.COLOR_ATTACHMENT0,H,0);m(b)&&x(H),t.unbindTexture()}F.depthBuffer&&Q(F)}function le(F){let b=F.textures;for(let ie=0,ue=b.length;ie<ue;ie++){let ge=b[ie];if(m(ge)){let B=E(F),G=n.get(ge).__webglTexture;t.bindTexture(B,G),x(B),t.unbindTexture()}}}let se=[],te=[];function ye(F){if(F.samples>0){if(Ke(F)===!1){let b=F.textures,ie=F.width,ue=F.height,ge=i.COLOR_BUFFER_BIT,B=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=n.get(F),H=b.length>1;if(H)for(let j=0;j<b.length;j++)t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,G.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,G.__webglMultisampledFramebuffer);let z=F.texture.mipmaps;z&&z.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,G.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,G.__webglFramebuffer);for(let j=0;j<b.length;j++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(ge|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(ge|=i.STENCIL_BUFFER_BIT)),H){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,G.__webglColorRenderbuffer[j]);let de=n.get(b[j]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,de,0)}i.blitFramebuffer(0,0,ie,ue,0,0,ie,ue,ge,i.NEAREST),c===!0&&(se.length=0,te.length=0,se.push(i.COLOR_ATTACHMENT0+j),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(se.push(B),te.push(B),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,te)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),H)for(let j=0;j<b.length;j++){t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,G.__webglColorRenderbuffer[j]);let de=n.get(b[j]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,G.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.TEXTURE_2D,de,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,G.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&c){let b=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function De(F){return Math.min(r.maxSamples,F.samples)}function Ke(F){let b=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function q(F){let b=a.render.frame;l.get(F)!==b&&(l.set(F,b),F.update())}function dt(F,b){let ie=F.colorSpace,ue=F.format,ge=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||ie!==Hn&&ie!==Qn&&(yt.getTransfer(ie)===Dt?(ue!==$n||ge!==Vn)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",ie)),b}function Ge(F){return typeof HTMLImageElement!="undefined"&&F instanceof HTMLImageElement?(u.width=F.naturalWidth||F.width,u.height=F.naturalHeight||F.height):typeof VideoFrame!="undefined"&&F instanceof VideoFrame?(u.width=F.displayWidth,u.height=F.displayHeight):(u.width=F.width,u.height=F.height),u}this.allocateTextureUnit=N,this.resetTextureUnits=Y,this.getTextureUnits=V,this.setTextureUnits=C,this.setTexture2D=O,this.setTexture2DArray=W,this.setTexture3D=ee,this.setTextureCube=ne,this.rebindTextures=xe,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=ze,this.useMultisampledRTT=Ke,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function AM(i,e){function t(n,r=Qn){let s,a=yt.getTransfer(r);if(n===Vn)return i.UNSIGNED_BYTE;if(n===ec)return i.UNSIGNED_SHORT_4_4_4_4;if(n===tc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Sh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Th)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===yh)return i.BYTE;if(n===Mh)return i.SHORT;if(n===ra)return i.UNSIGNED_SHORT;if(n===Ql)return i.INT;if(n===Ri)return i.UNSIGNED_INT;if(n===jn)return i.FLOAT;if(n===Tn)return i.HALF_FLOAT;if(n===bh)return i.ALPHA;if(n===Eh)return i.RGB;if(n===$n)return i.RGBA;if(n===Hi)return i.DEPTH_COMPONENT;if(n===Dr)return i.DEPTH_STENCIL;if(n===nc)return i.RED;if(n===ic)return i.RED_INTEGER;if(n===Or)return i.RG;if(n===rc)return i.RG_INTEGER;if(n===sc)return i.RGBA_INTEGER;if(n===mo||n===go||n===vo||n===xo)if(a===Dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===mo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===mo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===go)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ac||n===oc||n===lc||n===cc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ac)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===lc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===cc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uc||n===hc||n===fc||n===dc||n===pc||n===_o||n===mc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===uc||n===hc)return a===Dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===fc)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===dc)return s.COMPRESSED_R11_EAC;if(n===pc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===_o)return s.COMPRESSED_RG11_EAC;if(n===mc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===gc||n===vc||n===xc||n===_c||n===yc||n===Mc||n===Sc||n===Tc||n===bc||n===Ec||n===Ac||n===wc||n===Rc||n===Cc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===gc)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vc)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xc)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_c)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yc)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Mc)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sc)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Tc)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bc)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ec)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ac)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wc)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Rc)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Cc)return a===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ic||n===Pc||n===Lc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ic)return a===Dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Lc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nc||n===Dc||n===yo||n===Oc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Nc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Dc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===sa?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var wM=`
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

}`,Qh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Za(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new tn({vertexShader:wM,fragmentShader:RM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ke(new Jn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ef=class extends Ei{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",c=1,u=null,l=null,h=null,f=null,p=null,v=null,_=typeof XRWebGLBinding!="undefined",g=new Qh,m={},x=t.getContextAttributes(),E=null,y=null,R=[],A=[],P=new at,M=null,T=null,L=new sn;L.viewport=new Bt;let U=new sn;U.viewport=new Bt;let D=[L,U],Y=new ql,V=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(me){let _e=R[me];return _e===void 0&&(_e=new Vs,R[me]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(me){let _e=R[me];return _e===void 0&&(_e=new Vs,R[me]=_e),_e.getGripSpace()},this.getHand=function(me){let _e=R[me];return _e===void 0&&(_e=new Vs,R[me]=_e),_e.getHandSpace()};function N(me){let _e=A.indexOf(me.inputSource);if(_e===-1)return;let we=R[_e];we!==void 0&&(we.update(me.inputSource,me.frame,u||a),we.dispatchEvent({type:me.type,data:me.inputSource}))}function I(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",O);for(let me=0;me<R.length;me++){let _e=A[me];_e!==null&&(A[me]=null,R[me].disconnect(_e))}V=null,C=null,g.reset();for(let me in m)delete m[me];if(e.setRenderTarget(E),p=null,f=null,h=null,r=null,y=null,ct.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(P.width,P.height,!1),T!==null){let me=T.camera;me.fov=T.fov,me.zoom=T.zoom,me.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(me){s=me,n.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(me){o=me,n.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(me){u=me},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(me){if(r=me,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",I),r.addEventListener("inputsourceschange",O),x.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,it=null,ze=null;x.depth&&(ze=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=x.stencil?Dr:Hi,it=x.stencil?sa:Ri);let nt={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(nt),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new pn(f.textureWidth,f.textureHeight,{format:$n,type:Vn,depthTexture:new Cr(f.textureWidth,f.textureHeight,it,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let we={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,we),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new pn(p.framebufferWidth,p.framebufferHeight,{format:$n,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),ct.setContext(r),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function O(me){for(let _e=0;_e<me.removed.length;_e++){let we=me.removed[_e],it=A.indexOf(we);it>=0&&(A[it]=null,R[it].disconnect(we))}for(let _e=0;_e<me.added.length;_e++){let we=me.added[_e],it=A.indexOf(we);if(it===-1){for(let nt=0;nt<R.length;nt++)if(nt>=A.length){A.push(we),it=nt;break}else if(A[nt]===null){A[nt]=we,it=nt;break}if(it===-1)break}let ze=R[it];ze&&ze.connect(we)}}let W=new J,ee=new J;function ne(me,_e,we){W.setFromMatrixPosition(_e.matrixWorld),ee.setFromMatrixPosition(we.matrixWorld);let it=W.distanceTo(ee),ze=_e.projectionMatrix.elements,nt=we.projectionMatrix.elements,X=ze[14]/(ze[10]-1),Q=ze[14]/(ze[10]+1),xe=(ze[9]+1)/ze[5],Me=(ze[9]-1)/ze[5],le=(ze[8]-1)/ze[0],se=(nt[8]+1)/nt[0],te=X*le,ye=X*se,De=it/(-le+se),Ke=De*-le;if(_e.matrixWorld.decompose(me.position,me.quaternion,me.scale),me.translateX(Ke),me.translateZ(De),me.matrixWorld.compose(me.position,me.quaternion,me.scale),me.matrixWorldInverse.copy(me.matrixWorld).invert(),ze[10]===-1)me.projectionMatrix.copy(_e.projectionMatrix),me.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{let q=X+De,dt=Q+De,Ge=te-Ke,F=ye+(it-Ke),b=xe*Q/dt*q,ie=Me*Q/dt*q;me.projectionMatrix.makePerspective(Ge,F,b,ie,q,dt),me.projectionMatrixInverse.copy(me.projectionMatrix).invert()}}function Ae(me,_e){_e===null?me.matrixWorld.copy(me.matrix):me.matrixWorld.multiplyMatrices(_e.matrixWorld,me.matrix),me.matrixWorldInverse.copy(me.matrixWorld).invert()}this.updateCamera=function(me){if(r===null)return;let _e=me.near,we=me.far;g.texture!==null&&(g.depthNear>0&&(_e=g.depthNear),g.depthFar>0&&(we=g.depthFar)),Y.near=U.near=L.near=_e,Y.far=U.far=L.far=we,(V!==Y.near||C!==Y.far)&&(r.updateRenderState({depthNear:Y.near,depthFar:Y.far}),V=Y.near,C=Y.far),Y.layers.mask=me.layers.mask|6,L.layers.mask=Y.layers.mask&-5,U.layers.mask=Y.layers.mask&-3;let it=me.parent,ze=Y.cameras;Ae(Y,it);for(let nt=0;nt<ze.length;nt++)Ae(ze[nt],it);ze.length===2?ne(Y,L,U):Y.projectionMatrix.copy(L.projectionMatrix),T===null&&me.isPerspectiveCamera&&(T={camera:me,fov:me.fov,zoom:me.zoom}),Ne(me,Y,it)};function Ne(me,_e,we){we===null?me.matrix.copy(_e.matrixWorld):(me.matrix.copy(we.matrixWorld),me.matrix.invert(),me.matrix.multiply(_e.matrixWorld)),me.matrix.decompose(me.position,me.quaternion,me.scale),me.updateMatrixWorld(!0),me.projectionMatrix.copy(_e.projectionMatrix),me.projectionMatrixInverse.copy(_e.projectionMatrixInverse),me.isPerspectiveCamera&&(me.fov=$r*2*Math.atan(1/me.projectionMatrix.elements[5]),me.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(me){c=me,f!==null&&(f.fixedFoveation=me),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=me)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(Y)},this.getCameraTexture=function(me){return m[me]};let lt=null;function qe(me,_e){if(l=_e.getViewerPose(u||a),v=_e,l!==null){let we=l.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let it=!1;we.length!==Y.cameras.length&&(Y.cameras.length=0,it=!0);for(let Q=0;Q<we.length;Q++){let xe=we[Q],Me=null;if(p!==null)Me=p.getViewport(xe);else{let se=h.getViewSubImage(f,xe);Me=se.viewport,Q===0&&(e.setRenderTargetTextures(y,se.colorTexture,se.depthStencilTexture),e.setRenderTarget(y))}let le=D[Q];le===void 0&&(le=new sn,le.layers.enable(Q),le.viewport=new Bt,D[Q]=le),le.matrix.fromArray(xe.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(xe.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(Me.x,Me.y,Me.width,Me.height),Q===0&&(Y.matrix.copy(le.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),it===!0&&Y.cameras.push(le)}let ze=r.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){h=n.getBinding();let Q=h.getDepthInformation(we[0]);Q&&Q.isValid&&Q.texture&&g.init(Q,r.renderState)}if(ze&&ze.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let Q=0;Q<we.length;Q++){let xe=we[Q].camera;if(xe){let Me=m[xe];Me||(Me=new Za,m[xe]=Me);let le=h.getCameraImage(xe);Me.sourceTexture=le}}}}for(let we=0;we<R.length;we++){let it=A[we],ze=R[we];it!==null&&ze!==void 0&&ze.update(it,_e,u||a)}lt&&lt(me,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),v=null}let ct=new f0;ct.setAnimationLoop(qe),this.setAnimationLoop=function(me){lt=me},this.dispose=function(){}}},CM=new xt,x0=new pt;x0.set(-1,0,0,0,1,0,0,0,1);function IM(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Ph(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,x,E,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),h(g,m)):m.isMeshPhongMaterial?(s(g,m),l(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),f(g,m),m.isMeshPhysicalMaterial&&p(g,m,y)):m.isMeshMatcapMaterial?(s(g,m),v(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),_(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,x,E):m.isSpriteMaterial?u(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Mn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Mn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let x=e.get(m),E=x.envMap,y=x.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(CM.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(x0),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,x,E){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=E*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,x){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Mn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){let x=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function PM(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,R){let A=R.program;n.uniformBlockBinding(y,A)}function u(y,R){let A=r[y.id];A===void 0&&(g(y),A=l(y),r[y.id]=A,y.addEventListener("dispose",x));let P=R.program;n.updateUBOMapping(y,P);let M=e.render.frame;s[y.id]!==M&&(f(y),s[y.id]=M)}function l(y){let R=h();y.__bindingPointIndex=R;let A=i.createBuffer(),P=y.__size,M=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,P,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,A),A}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let R=r[y.id],A=y.uniforms,P=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let M=0,T=A.length;M<T;M++){let L=A[M];if(Array.isArray(L))for(let U=0,D=L.length;U<D;U++)p(L[U],M,U,P);else p(L,M,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,R,A,P){if(_(y,R,A,P)===!0){let M=y.__offset,T=y.value;if(Array.isArray(T)){let L=0;for(let U=0;U<T.length;U++){let D=T[U],Y=m(D);v(D,y.__data,L),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(L+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(T,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,y.__data)}}function v(y,R,A){typeof y=="number"||typeof y=="boolean"?R[0]=y:y.isMatrix3?(R[0]=y.elements[0],R[1]=y.elements[1],R[2]=y.elements[2],R[3]=0,R[4]=y.elements[3],R[5]=y.elements[4],R[6]=y.elements[5],R[7]=0,R[8]=y.elements[6],R[9]=y.elements[7],R[10]=y.elements[8],R[11]=0):ArrayBuffer.isView(y)?R.set(new y.constructor(y.buffer,y.byteOffset,R.length)):y.toArray(R,A)}function _(y,R,A,P){let M=y.value,T=R+"_"+A;if(P[T]===void 0)return typeof M=="number"||typeof M=="boolean"?P[T]=M:ArrayBuffer.isView(M)?P[T]=M.slice():P[T]=M.clone(),!0;{let L=P[T];if(typeof M=="number"||typeof M=="boolean"){if(L!==M)return P[T]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(L.equals(M)===!1)return L.copy(M),!0}}return!1}function g(y){let R=y.uniforms,A=0,P=16;for(let T=0,L=R.length;T<L;T++){let U=Array.isArray(R[T])?R[T]:[R[T]];for(let D=0,Y=U.length;D<Y;D++){let V=U[D],C=Array.isArray(V.value)?V.value:[V.value];for(let N=0,I=C.length;N<I;N++){let O=C[N],W=m(O),ee=A%P,ne=ee%W.boundary,Ae=ee+ne;A+=ne,Ae!==0&&P-Ae<W.storage&&(A+=P-Ae),V.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=A,A+=W.storage}}}let M=A%P;return M>0&&(A+=P-M),y.__size=A,y.__cache={},this}function m(y){let R={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(R.boundary=4,R.storage=4):y.isVector2?(R.boundary=8,R.storage=8):y.isVector3||y.isColor?(R.boundary=16,R.storage=12):y.isVector4?(R.boundary=16,R.storage=16):y.isMatrix3?(R.boundary=48,R.storage=48):y.isMatrix4?(R.boundary=64,R.storage=64):y.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(R.boundary=16,R.storage=y.byteLength):st("WebGLRenderer: Unsupported uniform value type.",y),R}function x(y){let R=y.target;R.removeEventListener("dispose",x);let A=a.indexOf(R.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(r[R.id]),delete r[R.id],delete s[R.id]}function E(){for(let y in r)i.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:c,update:u,dispose:E}}var LM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Wi=null;function NM(){return Wi===null&&(Wi=new ar(LM,16,16,Or,Tn),Wi.name="DFG_LUT",Wi.minFilter=an,Wi.magFilter=an,Wi.wrapS=ai,Wi.wrapT=ai,Wi.generateMipmaps=!1,Wi.needsUpdate=!0),Wi}var Wc=class{constructor(e={}){let{canvas:t=Fp(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Vn}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;let _=p,g=new Set([sc,rc,ic]),m=new Set([Vn,Ri,ra,sa,ec,tc]),x=new Uint32Array(4),E=new Int32Array(4),y=new J,R=null,A=null,P=[],M=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,U=!1,D=null,Y=null,V=null,C=null;this._outputColorSpace=qt;let N=0,I=0,O=null,W=-1,ee=null,ne=new Bt,Ae=new Bt,Ne=null,lt=new Qe(0),qe=0,ct=t.width,me=t.height,_e=1,we=null,it=null,ze=new Bt(0,0,ct,me),nt=new Bt(0,0,ct,me),X=!1,Q=new Ys,xe=!1,Me=!1,le=new xt,se=new J,te=new Bt,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},De=!1;function Ke(){return O===null?_e:1}let q=n;function dt(w,Z){return t.getContext(w,Z)}let Ge,F,b,ie,ue,ge,B,G,H,z,j,de,he,pe,Te,Ie,Ze,K,Ce,ve,Re,Oe,be;try{let w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:l,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",zt,!1),t.addEventListener("webglcontextrestored",Nt,!1),t.addEventListener("webglcontextcreationerror",qn,!1),q===null){let Z="webgl2";if(q=dt(Z,w),q===null)throw dt(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}rt()}catch(w){throw t.removeEventListener("webglcontextlost",zt,!1),t.removeEventListener("webglcontextrestored",Nt,!1),t.removeEventListener("webglcontextcreationerror",qn,!1),ft("WebGLRenderer: "+w.message),w}function rt(){Ge=new k_(q),Ge.init(),Re=new AM(q,Ge),F=new I_(q,Ge,e,Re),b=new bM(q,Ge),F.reversedDepthBuffer&&f&&b.buffers.depth.setReversed(!0),Y=q.createFramebuffer(),V=q.createFramebuffer(),C=q.createFramebuffer(),ie=new V_(q),ue=new uM,ge=new EM(q,Ge,b,ue,F,Re,ie),B=new B_(L),G=new qg(q),Oe=new R_(q,G),H=new z_(q,G,ie,Oe),z=new q_(q,H,G,Oe,ie),K=new W_(q,F,ge),Te=new P_(ue),j=new cM(L,B,Ge,F,Oe,Te),de=new IM(L,ue),he=new fM,pe=new xM(Ge),Ze=new w_(L,B,b,z,v,c),Ie=new TM(L,z,F),be=new PM(q,ie,F,b),Ce=new C_(q,Ge,ie),ve=new G_(q,Ge,ie),ie.programs=j.programs,L.capabilities=F,L.extensions=Ge,L.properties=ue,L.renderLists=he,L.shadowMap=Ie,L.state=b,L.info=ie}_!==Vn&&(T=new Y_(_,t.width,t.height,o,r,s));let tt=new ef(L,q);this.xr=tt,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let w=Ge.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Ge.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(w){w!==void 0&&(_e=w,this.setSize(ct,me,!1))},this.getSize=function(w){return w.set(ct,me)},this.setSize=function(w,Z,re=!0){if(tt.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}ct=w,me=Z,t.width=Math.floor(w*_e),t.height=Math.floor(Z*_e),re===!0&&(t.style.width=w+"px",t.style.height=Z+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,w,Z)},this.getDrawingBufferSize=function(w){return w.set(ct*_e,me*_e).floor()},this.setDrawingBufferSize=function(w,Z,re){ct=w,me=Z,_e=re,t.width=Math.floor(w*re),t.height=Math.floor(Z*re),this.setViewport(0,0,w,Z)},this.setEffects=function(w){if(_===Vn){ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let Z=0;Z<w.length;Z++)if(w[Z].isOutputPass===!0){st("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ne)},this.getViewport=function(w){return w.copy(ze)},this.setViewport=function(w,Z,re,ae){w.isVector4?ze.set(w.x,w.y,w.z,w.w):ze.set(w,Z,re,ae),b.viewport(ne.copy(ze).multiplyScalar(_e).round())},this.getScissor=function(w){return w.copy(nt)},this.setScissor=function(w,Z,re,ae){w.isVector4?nt.set(w.x,w.y,w.z,w.w):nt.set(w,Z,re,ae),b.scissor(Ae.copy(nt).multiplyScalar(_e).round())},this.getScissorTest=function(){return X},this.setScissorTest=function(w){b.setScissorTest(X=w)},this.setOpaqueSort=function(w){we=w},this.setTransparentSort=function(w){it=w},this.getClearColor=function(w){return w.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(w=!0,Z=!0,re=!0){let ae=0;if(w){let ce=!1;if(O!==null){let He=O.texture.format;ce=g.has(He)}if(ce){let He=O.texture.type,Be=m.has(He),Le=Ze.getClearColor(),We=Ze.getClearAlpha(),Xe=Le.r,ht=Le.g,gt=Le.b;Be?(x[0]=Xe,x[1]=ht,x[2]=gt,x[3]=We,q.clearBufferuiv(q.COLOR,0,x)):(E[0]=Xe,E[1]=ht,E[2]=gt,E[3]=We,q.clearBufferiv(q.COLOR,0,E))}else ae|=q.COLOR_BUFFER_BIT}Z&&(ae|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(ae|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&q.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),D=w},this.dispose=function(){t.removeEventListener("webglcontextlost",zt,!1),t.removeEventListener("webglcontextrestored",Nt,!1),t.removeEventListener("webglcontextcreationerror",qn,!1),Ze.dispose(),he.dispose(),pe.dispose(),ue.dispose(),B.dispose(),z.dispose(),Oe.dispose(),be.dispose(),j.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",k),tt.removeEventListener("sessionend",fe),$.stop()};function zt(w){w.preventDefault(),Fa("WebGLRenderer: Context Lost."),U=!0}function Nt(){Fa("WebGLRenderer: Context Restored."),U=!1;let w=ie.autoReset,Z=Ie.enabled,re=Ie.autoUpdate,ae=Ie.needsUpdate,ce=Ie.type;rt(),ie.autoReset=w,Ie.enabled=Z,Ie.autoUpdate=re,Ie.needsUpdate=ae,Ie.type=ce}function qn(w){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ii(w){let Z=w.target;Z.removeEventListener("dispose",ii),Ma(Z)}function Ma(w){bu(w),ue.remove(w)}function bu(w){let Z=ue.get(w).programs;Z!==void 0&&(Z.forEach(function(re){j.releaseProgram(re)}),w.isShaderMaterial&&j.releaseShaderCache(w))}this.renderBufferDirect=function(w,Z,re,ae,ce,He){Z===null&&(Z=ye);let Be=ce.isMesh&&ce.matrixWorld.determinantAffine()<0,Le=cn(w,Z,re,ae,ce);b.setMaterial(ae,Be);let We=re.index,Xe=1;if(ae.wireframe===!0){if(We=H.getWireframeAttribute(re),We===void 0)return;Xe=2}let ht=re.drawRange,gt=re.attributes.position,Ye=ht.start*Xe,Mt=(ht.start+ht.count)*Xe;He!==null&&(Ye=Math.max(Ye,He.start*Xe),Mt=Math.min(Mt,(He.start+He.count)*Xe)),We!==null?(Ye=Math.max(Ye,0),Mt=Math.min(Mt,We.count)):gt!=null&&(Ye=Math.max(Ye,0),Mt=Math.min(Mt,gt.count));let nn=Mt-Ye;if(nn<0||nn===1/0)return;Oe.setup(ce,ae,Le,re,We);let Gt,Yt=Ce;if(We!==null&&(Gt=G.get(We),Yt=ve,Yt.setIndex(Gt)),ce.isMesh)ae.wireframe===!0?(b.setLineWidth(ae.wireframeLinewidth*Ke()),Yt.setMode(q.LINES)):Yt.setMode(q.TRIANGLES);else if(ce.isLine){let wn=ae.linewidth;wn===void 0&&(wn=1),b.setLineWidth(wn*Ke()),ce.isLineSegments?Yt.setMode(q.LINES):ce.isLineLoop?Yt.setMode(q.LINE_LOOP):Yt.setMode(q.LINE_STRIP)}else ce.isPoints?Yt.setMode(q.POINTS):ce.isSprite&&Yt.setMode(q.TRIANGLES);if(ce.isBatchedMesh)if(Ge.get("WEBGL_multi_draw"))Yt.renderMultiDraw(ce._multiDrawStarts,ce._multiDrawCounts,ce._multiDrawCount);else{let wn=ce._multiDrawStarts,Je=ce._multiDrawCounts,Dn=ce._multiDrawCount,Lt=We?G.get(We).bytesPerElement:1,ri=ue.get(ae).currentProgram.getUniforms();for(let Li=0;Li<Dn;Li++)ri.setValue(q,"_gl_DrawID",Li),Yt.render(wn[Li]/Lt,Je[Li])}else if(ce.isInstancedMesh)Yt.renderInstances(Ye,nn,ce.count);else if(re.isInstancedBufferGeometry){let wn=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Je=Math.min(re.instanceCount,wn);Yt.renderInstances(Ye,nn,Je)}else Yt.render(Ye,nn)};function qo(w,Z,re,ae){D!==null&&w.isNodeMaterial&&D.setObject(ae,w),xe===!0&&Te.setState(w,re,!1),w.transparent===!0&&w.side===Sn&&w.forceSinglePass===!1?(w.side=Mn,w.needsUpdate=!0,$e(w,Z,ae),w.side=Gi,w.needsUpdate=!0,$e(w,Z,ae),w.side=Sn):$e(w,Z,ae)}this.compile=function(w,Z,re=null){re===null&&(re=w),D!==null&&D.renderStart(w,Z,re),A=pe.get(re),A.init(Z),M.push(A),re.traverseVisible(function(ce){ce.isLight&&ce.layers.test(Z.layers)&&(A.pushLight(ce),ce.castShadow&&A.pushShadow(ce))}),w!==re&&w.traverseVisible(function(ce){ce.isLight&&ce.layers.test(Z.layers)&&(A.pushLight(ce),ce.castShadow&&A.pushShadow(ce))}),A.setupLights(),D!==null&&D.updateLights(A.state.lightsArray),Me=this.localClippingEnabled,xe=Te.init(this.clippingPlanes,Me),xe===!0&&Te.setGlobalState(this.clippingPlanes,Z),D!==null&&Ie.render(A.state.shadowsArray,re,Z);let ae=new Set;return w.traverse(function(ce){if(!(ce.isMesh||ce.isPoints||ce.isLine||ce.isSprite))return;let He=ce.material;if(He)if(Array.isArray(He))for(let Be=0;Be<He.length;Be++){let Le=He[Be];qo(Le,re,Z,ce),ae.add(Le)}else qo(He,re,Z,ce),ae.add(He)}),A=M.pop(),D!==null&&D.renderEnd(),ae},this.compileAsync=function(w,Z,re=null){let ae=this.compile(w,Z,re);return new Promise(ce=>{function He(){if(ae.forEach(function(Be){let We=ue.get(Be).currentProgram;(We===void 0||We.isReady())&&ae.delete(Be)}),ae.size===0){ce(w);return}setTimeout(He,10)}Ge.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let d=null;function S(w){d&&d(w)}function k(){$.stop()}function fe(){$.start()}let $=new f0;$.setAnimationLoop(S),typeof self!="undefined"&&$.setContext(self),this.setAnimationLoop=function(w){d=w,tt.setAnimationLoop(w),w===null?$.stop():$.start()},tt.addEventListener("sessionstart",k),tt.addEventListener("sessionend",fe),this.render=function(w,Z){if(Z!==void 0&&Z.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;D!==null&&D.renderStart(w,Z);let re=tt.enabled===!0&&tt.isPresenting===!0,ae=T!==null&&(O===null||re)&&T.begin(L,O);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(Z),Z=tt.getCamera()),w.isScene===!0&&w.onBeforeRender(L,w,Z,O),A=pe.get(w,M.length),A.init(Z),A.state.textureUnits=ge.getTextureUnits(),M.push(A),le.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Q.setFromProjectionMatrix(le,Ti,Z.reversedDepth),Me=this.localClippingEnabled,xe=Te.init(this.clippingPlanes,Me),R=he.get(w,P.length),R.init(),P.push(R),tt.enabled===!0&&tt.isPresenting===!0){let Be=L.xr.getDepthSensingMesh();Be!==null&&oe(Be,Z,-1/0,L.sortObjects)}oe(w,Z,0,L.sortObjects),R.finish(),D!==null&&D.updateLights(A.state.lightsArray),L.sortObjects===!0&&R.sort(we,it),De=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,De&&Ze.addToRenderList(R,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xe===!0&&Te.beginShadows();let ce=A.state.shadowsArray;if(Ie.render(ce,w,Z),xe===!0&&Te.endShadows(),(ae&&T.hasRenderPass())===!1){let Be=R.opaque,Le=R.transmissive;if(A.setupLights(),Z.isArrayCamera){let We=Z.cameras;if(Le.length>0)for(let Xe=0,ht=We.length;Xe<ht;Xe++){let gt=We[Xe];Ee(Be,Le,w,gt)}De&&Ze.render(w);for(let Xe=0,ht=We.length;Xe<ht;Xe++){let gt=We[Xe];Se(R,w,gt,gt.viewport)}}else Le.length>0&&Ee(Be,Le,w,Z),De&&Ze.render(w),Se(R,w,Z)}O!==null&&I===0&&(ge.updateMultisampleRenderTarget(O),ge.updateRenderTargetMipmap(O)),ae&&T.end(L),w.isScene===!0&&w.onAfterRender(L,w,Z),Oe.resetDefaultState(),W=-1,ee=null,M.pop(),M.length>0?(A=M[M.length-1],ge.setTextureUnits(A.state.textureUnits),xe===!0&&Te.setGlobalState(L.clippingPlanes,A.state.camera)):A=null,P.pop(),P.length>0?R=P[P.length-1]:R=null,D!==null&&D.renderEnd()};function oe(w,Z,re,ae){if(w.visible===!1)return;if(w.layers.test(Z.layers)){if(w.isGroup)re=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Z);else if(w.isLightProbeGrid)A.pushLightProbeGrid(w);else if(w.isLight)A.pushLight(w),w.castShadow&&A.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(Q)){ae&&te.setFromMatrixPosition(w.matrixWorld).applyMatrix4(le);let Be=z.update(w),Le=w.material;Le.visible&&R.push(w,Be,Le,re,te.z,null,Z)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(Q))){let Be=z.update(w),Le=w.material;if(ae&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),te.copy(w.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),te.copy(Be.boundingSphere.center)),te.applyMatrix4(w.matrixWorld).applyMatrix4(le)),Array.isArray(Le)){let We=Be.groups;for(let Xe=0,ht=We.length;Xe<ht;Xe++){let gt=We[Xe],Ye=Le[gt.materialIndex];Ye&&Ye.visible&&R.push(w,Be,Ye,re,te.z,gt,Z)}}else Le.visible&&R.push(w,Be,Le,re,te.z,null,Z)}}let He=w.children;for(let Be=0,Le=He.length;Be<Le;Be++)oe(He[Be],Z,re,ae)}function Se(w,Z,re,ae){let{opaque:ce,transmissive:He,transparent:Be}=w;A.setupLightsView(re),xe===!0&&Te.setGlobalState(L.clippingPlanes,re),ae&&b.viewport(ne.copy(ae)),ce.length>0&&Pe(ce,Z,re),He.length>0&&Pe(He,Z,re),Be.length>0&&Pe(Be,Z,re),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Ee(w,Z,re,ae){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[ae.id]===void 0){let Ye=Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[ae.id]=new pn(1,1,{generateMipmaps:!0,type:Ye?Tn:Vn,minFilter:wi,samples:Math.max(4,F.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:yt.workingColorSpace})}let He=A.state.transmissionRenderTarget[ae.id],Be=ae.viewport||ne;He.setSize(Be.z*L.transmissionResolutionScale,Be.w*L.transmissionResolutionScale);let Le=L.getRenderTarget(),We=L.getActiveCubeFace(),Xe=L.getActiveMipmapLevel();L.setRenderTarget(He),L.getClearColor(lt),qe=L.getClearAlpha(),qe<1&&L.setClearColor(16777215,.5),L.clear(),De&&Ze.render(re);let ht=L.toneMapping;L.toneMapping=Ai;let gt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),A.setupLightsView(ae),xe===!0&&Te.setGlobalState(L.clippingPlanes,ae),Pe(w,re,ae),ge.updateMultisampleRenderTarget(He),ge.updateRenderTargetMipmap(He),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Mt=0,nn=Z.length;Mt<nn;Mt++){let Gt=Z[Mt],{object:Yt,geometry:wn,material:Je,group:Dn}=Gt;if(Je.side===Sn&&Yt.layers.test(ae.layers)){let Lt=Je.side;Je.side=Mn,Je.needsUpdate=!0,je(Yt,re,ae,wn,Je,Dn),Je.side=Lt,Je.needsUpdate=!0,Ye=!0}}Ye===!0&&(ge.updateMultisampleRenderTarget(He),ge.updateRenderTargetMipmap(He))}L.setRenderTarget(Le,We,Xe),L.setClearColor(lt,qe),gt!==void 0&&(ae.viewport=gt),L.toneMapping=ht}function Pe(w,Z,re){let ae=Z.isScene===!0?Z.overrideMaterial:null;for(let ce=0,He=w.length;ce<He;ce++){let Be=w[ce],{object:Le,geometry:We,group:Xe}=Be,ht=Be.material;ht.allowOverride===!0&&ae!==null&&(ht=ae),Le.layers.test(re.layers)&&je(Le,Z,re,We,ht,Xe)}}function je(w,Z,re,ae,ce,He){D!==null&&ce.isNodeMaterial&&D.setObject(w,ce),w.onBeforeRender(L,Z,re,ae,ce,He),w.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ce.onBeforeRender(L,Z,re,ae,w,He),ce.transparent===!0&&ce.side===Sn&&ce.forceSinglePass===!1?(ce.side=Mn,ce.needsUpdate=!0,L.renderBufferDirect(re,Z,ae,ce,w,He),ce.side=Gi,ce.needsUpdate=!0,L.renderBufferDirect(re,Z,ae,ce,w,He),ce.side=Sn):L.renderBufferDirect(re,Z,ae,ce,w,He),w.onAfterRender(L,Z,re,ae,ce,He)}function $e(w,Z,re){Z.isScene!==!0&&(Z=ye);let ae=ue.get(w),ce=A.state.lights,He=A.state.shadowsArray,Be=ce.state.version,Le=j.getParameters(w,ce.state,He,Z,re,A.state.lightProbeGridArray),We=j.getProgramCacheKey(Le),Xe=ae.programs;ae.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?Z.environment:null,ae.fog=Z.fog;let ht=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;ae.envMap=B.get(w.envMap||ae.environment,ht),ae.envMapRotation=ae.environment!==null&&w.envMap===null?Z.environmentRotation:w.envMapRotation,Xe===void 0&&(w.addEventListener("dispose",ii),Xe=new Map,ae.programs=Xe);let gt=Xe.get(We);if(gt!==void 0){if(ae.currentProgram===gt&&ae.lightsStateVersion===Be)return Tt(w,Le),gt}else Le.uniforms=j.getUniforms(w),D!==null&&w.isNodeMaterial&&D.build(w,re,Le),w.onBeforeCompile(Le,L),gt=j.acquireProgram(Le,We),Xe.set(We,gt),ae.uniforms=Le.uniforms;let Ye=ae.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ye.clippingPlanes=Te.uniform),Tt(w,Le),ae.needsLights=Ct(w),ae.lightsStateVersion=Be,ae.needsLights&&(Ye.ambientLightColor.value=ce.state.ambient,Ye.lightProbe.value=ce.state.probe,Ye.sunLights.value=ce.state.sun,Ye.sunLightShadows.value=ce.state.sunShadow,Ye.directionalLights.value=ce.state.directional,Ye.directionalLightShadows.value=ce.state.directionalShadow,Ye.spotLights.value=ce.state.spot,Ye.spotLightShadows.value=ce.state.spotShadow,Ye.rectAreaLights.value=ce.state.rectArea,Ye.ltc_1.value=ce.state.rectAreaLTC1,Ye.ltc_2.value=ce.state.rectAreaLTC2,Ye.pointLights.value=ce.state.point,Ye.pointLightShadows.value=ce.state.pointShadow,Ye.hemisphereLights.value=ce.state.hemi,Ye.sunShadowMatrix.value=ce.state.sunShadowMatrix,Ye.sunShadowCascade.value=ce.state.sunShadowCascade,Ye.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,Ye.spotLightMatrix.value=ce.state.spotLightMatrix,Ye.spotLightMap.value=ce.state.spotLightMap,Ye.pointShadowMatrix.value=ce.state.pointShadowMatrix),ae.lightProbeGrid=A.state.lightProbeGridArray.length>0,ae.currentProgram=gt,ae.uniformsList=null,gt}function ut(w){if(w.uniformsList===null){let Z=w.currentProgram.getUniforms();w.uniformsList=ua.seqWithValue(Z.seq,w.uniforms)}return w.uniformsList}function Tt(w,Z){let re=ue.get(w);re.outputColorSpace=Z.outputColorSpace,re.batching=Z.batching,re.batchingColor=Z.batchingColor,re.instancing=Z.instancing,re.instancingColor=Z.instancingColor,re.instancingMorph=Z.instancingMorph,re.skinning=Z.skinning,re.morphTargets=Z.morphTargets,re.morphNormals=Z.morphNormals,re.morphColors=Z.morphColors,re.morphTargetsCount=Z.morphTargetsCount,re.numClippingPlanes=Z.numClippingPlanes,re.numIntersection=Z.numClipIntersection,re.vertexAlphas=Z.vertexAlphas,re.vertexTangents=Z.vertexTangents,re.toneMapping=Z.toneMapping}function bt(w,Z){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;y.setFromMatrixPosition(Z.matrixWorld);for(let re=0,ae=w.length;re<ae;re++){let ce=w[re];if(ce.texture!==null&&ce.boundingBox.containsPoint(y))return ce}return null}function cn(w,Z,re,ae,ce){Z.isScene!==!0&&(Z=ye),ge.resetTextureUnits();let He=Z.fog,Be=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?Z.environment:null,Le=O===null?L.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:yt.workingColorSpace,We=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,Xe=B.get(ae.envMap||Be,We),ht=ae.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,gt=!!re.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Ye=!!re.morphAttributes.position,Mt=!!re.morphAttributes.normal,nn=!!re.morphAttributes.color,Gt=Ai;ae.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Gt=L.toneMapping);let Yt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,wn=Yt!==void 0?Yt.length:0,Je=ue.get(ae),Dn=A.state.lights;if(xe===!0&&(Me===!0||w!==ee)){let jt=w===ee&&ae.id===W;Te.setState(ae,w,jt)}let Lt=!1;ae.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Dn.state.version||Je.outputColorSpace!==Le||ce.isBatchedMesh&&Je.batching===!1||!ce.isBatchedMesh&&Je.batching===!0||ce.isBatchedMesh&&Je.batchingColor===!0&&ce._colorsTexture===null||ce.isBatchedMesh&&Je.batchingColor===!1&&ce._colorsTexture!==null||ce.isInstancedMesh&&Je.instancing===!1||!ce.isInstancedMesh&&Je.instancing===!0||ce.isSkinnedMesh&&Je.skinning===!1||!ce.isSkinnedMesh&&Je.skinning===!0||ce.isInstancedMesh&&Je.instancingColor===!0&&ce.instanceColor===null||ce.isInstancedMesh&&Je.instancingColor===!1&&ce.instanceColor!==null||ce.isInstancedMesh&&Je.instancingMorph===!0&&ce.morphTexture===null||ce.isInstancedMesh&&Je.instancingMorph===!1&&ce.morphTexture!==null||Je.envMap!==Xe||ae.fog===!0&&Je.fog!==He||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Te.numPlanes||Je.numIntersection!==Te.numIntersection)||Je.vertexAlphas!==ht||Je.vertexTangents!==gt||Je.morphTargets!==Ye||Je.morphNormals!==Mt||Je.morphColors!==nn||Je.toneMapping!==Gt||Je.morphTargetsCount!==wn||!!Je.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(Lt=!0):(Lt=!0,Je.__version=ae.version);let ri=Je.currentProgram;Lt===!0&&(ri=$e(ae,Z,ce),D&&ae.isNodeMaterial&&D.onUpdateProgram(ae,ri,Je));let Li=!1,mr=!1,vs=!1,Vt=ri.getUniforms(),rn=Je.uniforms;if(b.useProgram(ri.program)&&(Li=!0,mr=!0,vs=!0),ae.id!==W&&(W=ae.id,mr=!0),Je.needsLights){let jt=bt(A.state.lightProbeGridArray,ce);Je.lightProbeGrid!==jt&&(Je.lightProbeGrid=jt,mr=!0)}if(Li||ee!==w){b.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Vt.setValue(q,"projectionMatrix",w.projectionMatrix),Vt.setValue(q,"viewMatrix",w.matrixWorldInverse);let vr=Vt.map.cameraPosition;vr!==void 0&&vr.setValue(q,se.setFromMatrixPosition(w.matrixWorld)),F.logarithmicDepthBuffer&&Vt.setValue(q,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Vt.setValue(q,"isOrthographic",w.isOrthographicCamera===!0),ee!==w&&(ee=w,mr=!0,vs=!0)}if(Je.needsLights&&(Dn.state.sunShadowMap.length>0&&Vt.setValue(q,"sunShadowMap",Dn.state.sunShadowMap,ge),Dn.state.directionalShadowMap.length>0&&Vt.setValue(q,"directionalShadowMap",Dn.state.directionalShadowMap,ge),Dn.state.spotShadowMap.length>0&&Vt.setValue(q,"spotShadowMap",Dn.state.spotShadowMap,ge),Dn.state.pointShadowMap.length>0&&Vt.setValue(q,"pointShadowMap",Dn.state.pointShadowMap,ge)),ce.isSkinnedMesh){Vt.setOptional(q,ce,"bindMatrix"),Vt.setOptional(q,ce,"bindMatrixInverse");let jt=ce.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),Vt.setValue(q,"boneTexture",jt.boneTexture,ge))}ce.isBatchedMesh&&(Vt.setOptional(q,ce,"batchingTexture"),Vt.setValue(q,"batchingTexture",ce._matricesTexture,ge),Vt.setOptional(q,ce,"batchingIdTexture"),Vt.setValue(q,"batchingIdTexture",ce._indirectTexture,ge),Vt.setOptional(q,ce,"batchingColorTexture"),ce._colorsTexture!==null&&Vt.setValue(q,"batchingColorTexture",ce._colorsTexture,ge));let gr=re.morphAttributes;if((gr.position!==void 0||gr.normal!==void 0||gr.color!==void 0)&&K.update(ce,re,ri),(mr||Je.receiveShadow!==ce.receiveShadow)&&(Je.receiveShadow=ce.receiveShadow,Vt.setValue(q,"receiveShadow",ce.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&Z.environment!==null&&(rn.envMapIntensity.value=Z.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=NM()),mr){if(Vt.setValue(q,"toneMappingExposure",L.toneMappingExposure),Je.needsLights&&Ht(rn,vs),He&&ae.fog===!0&&de.refreshFogUniforms(rn,He),de.refreshMaterialUniforms(rn,ae,_e,me,A.state.transmissionRenderTarget[w.id]),Je.needsLights&&Je.lightProbeGrid){let jt=Je.lightProbeGrid;rn.probesSH.value=jt.texture,rn.probesMin.value.copy(jt.boundingBox.min),rn.probesMax.value.copy(jt.boundingBox.max),rn.probesResolution.value.copy(jt.resolution)}ua.upload(q,ut(Je),rn,ge)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(ua.upload(q,ut(Je),rn,ge),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Vt.setValue(q,"center",ce.center),Vt.setValue(q,"modelViewMatrix",ce.modelViewMatrix),Vt.setValue(q,"normalMatrix",ce.normalMatrix),Vt.setValue(q,"modelMatrix",ce.matrixWorld),ae.uniformsGroups!==void 0){let jt=ae.uniformsGroups;for(let vr=0,xs=jt.length;vr<xs;vr++){let ed=jt[vr];be.update(ed,ri),be.bind(ed,ri)}}return ri}function Ht(w,Z){w.ambientLightColor.needsUpdate=Z,w.lightProbe.needsUpdate=Z,w.sunLights.needsUpdate=Z,w.sunLightShadows.needsUpdate=Z,w.directionalLights.needsUpdate=Z,w.directionalLightShadows.needsUpdate=Z,w.pointLights.needsUpdate=Z,w.pointLightShadows.needsUpdate=Z,w.spotLights.needsUpdate=Z,w.spotLightShadows.needsUpdate=Z,w.rectAreaLights.needsUpdate=Z,w.hemisphereLights.needsUpdate=Z}function Ct(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(w,Z,re){let ae=ue.get(w);ae.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),ue.get(w.texture).__webglTexture=Z,ue.get(w.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:re,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Z){let re=ue.get(w);re.__webglFramebuffer=Z,re.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(w,Z=0,re=0){O=w,N=Z,I=re;let ae=null,ce=!1,He=!1;if(w){let Le=ue.get(w);if(Le.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(q.FRAMEBUFFER,Le.__webglFramebuffer),ne.copy(w.viewport),Ae.copy(w.scissor),Ne=w.scissorTest,b.viewport(ne),b.scissor(Ae),b.setScissorTest(Ne),W=-1;return}else if(Le.__webglFramebuffer===void 0)ge.setupRenderTarget(w);else if(Le.__hasExternalTextures)ge.rebindTextures(w,ue.get(w.texture).__webglTexture,ue.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let ht=w.depthTexture;if(Le.__boundDepthTexture!==ht){if(ht!==null&&ue.has(ht)&&(w.width!==ht.image.width||w.height!==ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ge.setupDepthRenderbuffer(w)}}let We=w.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(He=!0);let Xe=ue.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Xe[Z])?ae=Xe[Z][re]:ae=Xe[Z],ce=!0):w.samples>0&&ge.useMultisampledRTT(w)===!1?ae=ue.get(w).__webglMultisampledFramebuffer:Array.isArray(Xe)?ae=Xe[re]:ae=Xe,ne.copy(w.viewport),Ae.copy(w.scissor),Ne=w.scissorTest}else ne.copy(ze).multiplyScalar(_e).floor(),Ae.copy(nt).multiplyScalar(_e).floor(),Ne=X;if(re!==0&&(ae=Y),b.bindFramebuffer(q.FRAMEBUFFER,ae)&&b.drawBuffers(w,ae),b.viewport(ne),b.scissor(Ae),b.setScissorTest(Ne),ce){let Le=ue.get(w.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Le.__webglTexture,re)}else if(He){let Le=Z;for(let We=0;We<w.textures.length;We++){let Xe=ue.get(w.textures[We]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+We,Xe.__webglTexture,re,Le)}}else if(w!==null&&re!==0){let Le=ue.get(w.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Le.__webglTexture,re)}W=-1};function un(w){let Z=ue.get(w);return(Z.__readFormat!==w.format||Z.__readType!==w.type)&&(Z.__readFormat=w.format,Z.__readType=w.type,Z.__formatReadable=F.textureFormatReadable(w.format),Z.__typeReadable=F.textureTypeReadable(w.type)),Z}this.readRenderTargetPixels=function(w,Z,re,ae,ce,He,Be,Le=0){if(!(w&&w.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=ue.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Be!==void 0&&(We=We[Be]),We){b.bindFramebuffer(q.FRAMEBUFFER,We);try{let Xe=w.textures[Le],ht=Xe.format,gt=Xe.type;w.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Le);let Ye=un(Xe);if(Ye.__formatReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ye.__typeReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=w.width-ae&&re>=0&&re<=w.height-ce&&q.readPixels(Z,re,ae,ce,Re.convert(ht),Re.convert(gt),He)}finally{let Xe=O!==null?ue.get(O).__webglFramebuffer:null;b.bindFramebuffer(q.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(w,Z,re,ae,ce,He,Be,Le=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=ue.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Be!==void 0&&(We=We[Be]),We)if(Z>=0&&Z<=w.width-ae&&re>=0&&re<=w.height-ce){b.bindFramebuffer(q.FRAMEBUFFER,We);let Xe=w.textures[Le],ht=Xe.format,gt=Xe.type;w.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Le);let Ye=un(Xe);if(Ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Mt=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Mt),q.bufferData(q.PIXEL_PACK_BUFFER,He.byteLength,q.STREAM_READ),q.readPixels(Z,re,ae,ce,Re.convert(ht),Re.convert(gt),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);let nn=O!==null?ue.get(O).__webglFramebuffer:null;b.bindFramebuffer(q.FRAMEBUFFER,nn);let Gt=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await kp(q,Gt,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Mt),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,He),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(Mt),q.deleteSync(Gt),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Z=null,re=0){let ae=Math.pow(2,-re),ce=Math.floor(w.image.width*ae),He=Math.floor(w.image.height*ae),Be=Z!==null?Z.x:0,Le=Z!==null?Z.y:0;ge.setTexture2D(w,0),q.copyTexSubImage2D(q.TEXTURE_2D,re,0,0,Be,Le,ce,He),b.unbindTexture()},this.copyTextureToTexture=function(w,Z,re=null,ae=null,ce=0,He=0){let Be,Le,We,Xe,ht,gt,Ye,Mt,nn,Gt=w.isCompressedTexture?w.mipmaps[He]:w.image;if(re!==null)Be=re.max.x-re.min.x,Le=re.max.y-re.min.y,We=re.isBox3?re.max.z-re.min.z:1,Xe=re.min.x,ht=re.min.y,gt=re.isBox3?re.min.z:0;else{let rn=Math.pow(2,-ce);Be=Math.floor(Gt.width*rn),Le=Math.floor(Gt.height*rn),w.isDataArrayTexture?We=Gt.depth:w.isData3DTexture?We=Math.floor(Gt.depth*rn):We=1,Xe=0,ht=0,gt=0}ae!==null?(Ye=ae.x,Mt=ae.y,nn=ae.z):(Ye=0,Mt=0,nn=0);let Yt=Re.convert(Z.format),wn=Re.convert(Z.type),Je;Z.isData3DTexture?(ge.setTexture3D(Z,0),Je=q.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(ge.setTexture2DArray(Z,0),Je=q.TEXTURE_2D_ARRAY):(ge.setTexture2D(Z,0),Je=q.TEXTURE_2D),b.activeTexture(q.TEXTURE0),b.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,Z.flipY),b.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),b.pixelStorei(q.UNPACK_ALIGNMENT,Z.unpackAlignment);let Dn=b.getParameter(q.UNPACK_ROW_LENGTH),Lt=b.getParameter(q.UNPACK_IMAGE_HEIGHT),ri=b.getParameter(q.UNPACK_SKIP_PIXELS),Li=b.getParameter(q.UNPACK_SKIP_ROWS),mr=b.getParameter(q.UNPACK_SKIP_IMAGES);b.pixelStorei(q.UNPACK_ROW_LENGTH,Gt.width),b.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Gt.height),b.pixelStorei(q.UNPACK_SKIP_PIXELS,Xe),b.pixelStorei(q.UNPACK_SKIP_ROWS,ht),b.pixelStorei(q.UNPACK_SKIP_IMAGES,gt);let vs=w.isDataArrayTexture||w.isData3DTexture,Vt=Z.isDataArrayTexture||Z.isData3DTexture;if(w.isDepthTexture){let rn=ue.get(w),gr=ue.get(Z),jt=ue.get(rn.__renderTarget),vr=ue.get(gr.__renderTarget);b.bindFramebuffer(q.READ_FRAMEBUFFER,jt.__webglFramebuffer),b.bindFramebuffer(q.DRAW_FRAMEBUFFER,vr.__webglFramebuffer);for(let xs=0;xs<We;xs++)vs&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ue.get(w).__webglTexture,ce,gt+xs),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ue.get(Z).__webglTexture,He,nn+xs)),q.blitFramebuffer(Xe,ht,Be,Le,Ye,Mt,Be,Le,q.DEPTH_BUFFER_BIT,q.NEAREST);b.bindFramebuffer(q.READ_FRAMEBUFFER,null),b.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(ce!==0||w.isRenderTargetTexture||ue.has(w)){let rn=ue.get(w),gr=ue.get(Z);b.bindFramebuffer(q.READ_FRAMEBUFFER,V),b.bindFramebuffer(q.DRAW_FRAMEBUFFER,C);for(let jt=0;jt<We;jt++)vs?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,rn.__webglTexture,ce,gt+jt):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,rn.__webglTexture,ce),Vt?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,gr.__webglTexture,He,nn+jt):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,gr.__webglTexture,He),ce!==0?q.blitFramebuffer(Xe,ht,Be,Le,Ye,Mt,Be,Le,q.COLOR_BUFFER_BIT,q.NEAREST):Vt?q.copyTexSubImage3D(Je,He,Ye,Mt,nn+jt,Xe,ht,Be,Le):q.copyTexSubImage2D(Je,He,Ye,Mt,Xe,ht,Be,Le);b.bindFramebuffer(q.READ_FRAMEBUFFER,null),b.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Vt?w.isDataTexture||w.isData3DTexture?q.texSubImage3D(Je,He,Ye,Mt,nn,Be,Le,We,Yt,wn,Gt.data):Z.isCompressedArrayTexture?q.compressedTexSubImage3D(Je,He,Ye,Mt,nn,Be,Le,We,Yt,Gt.data):q.texSubImage3D(Je,He,Ye,Mt,nn,Be,Le,We,Yt,wn,Gt):w.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,He,Ye,Mt,Be,Le,Yt,wn,Gt.data):w.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,He,Ye,Mt,Gt.width,Gt.height,Yt,Gt.data):q.texSubImage2D(q.TEXTURE_2D,He,Ye,Mt,Be,Le,Yt,wn,Gt);b.pixelStorei(q.UNPACK_ROW_LENGTH,Dn),b.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Lt),b.pixelStorei(q.UNPACK_SKIP_PIXELS,ri),b.pixelStorei(q.UNPACK_SKIP_ROWS,Li),b.pixelStorei(q.UNPACK_SKIP_IMAGES,mr),He===0&&Z.generateMipmaps&&q.generateMipmap(Je),b.unbindTexture()},this.initRenderTarget=function(w){ue.get(w).__webglFramebuffer===void 0&&ge.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ge.setTextureCube(w,0):w.isData3DTexture?ge.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ge.setTexture2DArray(w,0):ge.setTexture2D(w,0),b.unbindTexture()},this.resetState=function(){N=0,I=0,O=null,b.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}};var pa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ei=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},DM=new zi(-1,1,1,-1,0,1),tf=class extends Kt{constructor(){super(),this.setAttribute("position",new wt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new wt([0,2,0,0,2,0],2))}},OM=new tf,Hr=class{constructor(e){this._mesh=new ke(OM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,DM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Yc=class extends ei{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof tn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=dr.clone(e.uniforms),this.material=new tn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Hr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ao=class extends ei{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}},Kc=class extends ei{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Zc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new at);this._width=n.width,this._height=n.height,t=new pn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Tn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Yc(pa),this.copyPass.material.blending=ci,this.timer=new ro}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let r=0,s=this.passes.length;r<s;r++){let a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ao!==void 0&&(a instanceof Ao?n=!0:a instanceof Kc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new at);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Jc=class extends ei{constructor(e,t,n=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Qe}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}};var _0={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Qe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ma=class i extends ei{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e!==void 0?new at(e.x,e.y):new at(256,256),this.clearColor=new Qe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new pn(s,a,{type:Tn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let l=0;l<this.nMips;l++){let h=new pn(s,a,{type:Tn,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+l,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let f=new pn(s,a,{type:Tn,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+l,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}let o=_0;this.highPassUniforms=dr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new tn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let l=0;l<this.nMips;l++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[l])),this.separableBlurMaterials[l].uniforms.invSize.value=new at(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new J(1,1,1),new J(1,1,1),new J(1,1,1),new J(1,1,1),new J(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=dr.clone(pa.uniforms),this.blendMaterial=new tn({uniforms:this.copyUniforms,vertexShader:pa.vertexShader,fragmentShader:pa.fragmentShader,premultipliedAlpha:!0,blending:Vi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Qe,this._oldClearAlpha=1,this._basic=new mn,this._fsQuad=new Hr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.invSize.value=new at(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(e,t,n,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let r=[],s=[];for(let a=1;a<e;a+=2){let o=t[a],c=a+1<e?t[a+1]:0,u=o+c;r.push((a*o+(a+1)*c)/u),s.push(u)}return new tn({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new at(.5,.5)},direction:{value:new at(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:s}},vertexShader:`

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

				}`})}};ma.BlurDirectionX=new at(1,0);ma.BlurDirectionY=new at(0,1);var wo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var jc=class extends ei{constructor(){super(),this.isOutputPass=!0,this.uniforms=dr.clone(wo.uniforms),this.material=new Js({name:wo.name,uniforms:this.uniforms,vertexShader:wo.vertexShader,fragmentShader:wo.fragmentShader}),this._fsQuad=new Hr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},yt.getTransfer(this._outputColorSpace)===Dt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===oo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===lo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===co?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ls?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ho?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===fo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===uo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var $c=class extends wr{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new en;e.deleteAttribute("uv");let t=new Zt({side:Mn}),n=new Zt,r=new Gn(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let s=new ke(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let a=new es(e,n,6),o=new $t;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new ke(e,ga(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let u=new ke(e,ga(50));u.position.set(-16.109,18.021,-8.207),u.scale.set(.1,2.425,2.751),this.add(u);let l=new ke(e,ga(17));l.position.set(14.904,12.198,-1.832),l.scale.set(.15,4.265,6.331),this.add(l);let h=new ke(e,ga(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let f=new ke(e,ga(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let p=new ke(e,ga(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function ga(i){return new $a({color:0,emissive:16777215,emissiveIntensity:i})}var It=128;function Ro(i,e,t){var n=i*374761393+e*668265263+t*982451653|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function S0(i,e,t,n){var r=Math.floor(i),s=Math.floor(e),a=i-r,o=e-s,c=a*a*(3-2*a),u=o*o*(3-2*o);function l(_,g){return Ro((_%t+t)%t,(g%t+t)%t,n)}var h=l(r,s),f=l(r+1,s),p=l(r,s+1),v=l(r+1,s+1);return h+(f-h)*c+(p-h)*u+(h-f-p+v)*c*u}function Xi(i,e,t,n){for(var r=0,s=.5,a=1,o=0;o<t;o++)r+=s*S0(i*a,e*a,8*a,n+o*17),s*=.5,a*=2;return r}function ui(i,e,t){return i+(e-i)*t}function nu(i){return i<0?0:i>1?1:i}function pr(i){return[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255]}function HM(i,e){e=e||{};for(var t=new Uint8ClampedArray(It*It*4),n=new Float32Array(It*It),r=e.emissive?new Uint8ClampedArray(It*It*4):null,s=new Uint8ClampedArray(It*It*4),a=0;a<It;a++)for(var o=0;o<It;o++){var c=i(o/It,a/It,o,a),u=a*It+o,l=u*4;t[l]=c.c[0]*255,t[l+1]=c.c[1]*255,t[l+2]=c.c[2]*255,t[l+3]=255,n[u]=c.h;var h=(c.r===void 0?.85:c.r)*255;if(s[l]=h,s[l+1]=h,s[l+2]=h,s[l+3]=255,r){var f=c.e||[0,0,0];r[l]=f[0]*255,r[l+1]=f[1]*255,r[l+2]=f[2]*255,r[l+3]=255}}return{map:Qc(t,!0),normalMap:Qc(UM(n,e.bump||3),!1),roughnessMap:Qc(s,!1),emissiveMap:r?Qc(r,!0):null}}function UM(i,e){for(var t=new Uint8ClampedArray(It*It*4),n=0;n<It;n++)for(var r=0;r<It;r++){var s=i[n*It+(r+It-1)%It],a=i[n*It+(r+1)%It],o=i[(n+It-1)%It*It+r],c=i[(n+1)%It*It+r],u=(s-a)*e,l=(o-c)*e,h=1,f=Math.sqrt(u*u+l*l+h*h),p=(n*It+r)*4;t[p]=(u/f*.5+.5)*255,t[p+1]=(l/f*.5+.5)*255,t[p+2]=(h/f*.5+.5)*255,t[p+3]=255}return t}function Qc(i,e){var t;if(typeof document!="undefined"){var n=document.createElement("canvas");n.width=It,n.height=It,n.getContext("2d").putImageData(new ImageData(i,It,It),0,0),t=new Rr(n)}else t=new ar(i,It,It);return t.wrapS=t.wrapT=oi,t.colorSpace=e?qt:Qn,t.anisotropy=8,t.magFilter=Xt,t.needsUpdate=!0,t}function FM(i,e,t,n){var r=pr(i),s=pr(e),a=pr(t);return function(o,c){var u=8,l=Math.floor(c*u),h=l%2?.5:0,f=o*4+h,p=Math.floor(f),v=f-p,_=c*u-l,g=Math.min(v,1-v)*4*.5,m=Math.min(_,1-_)*.5,x=Math.min(g,m*2),E=Xi(o*8,c*8,4,n),y=Ro(p&3,l,n),R=Xi(o*24,c*24,2,n+5)>.72?.25:0;if(x<.045){var A=.8+E*.4;return{c:[a[0]*A,a[1]*A,a[2]*A],h:.1+E*.1,r:.95}}var P=nu(y*.6+E*.5),M=.8+E*.35-R;return{c:[ui(s[0],r[0],P)*M,ui(s[1],r[1],P)*M,ui(s[2],r[2],P)*M],h:.6+E*.3-R+Math.min(x,.12)*2,r:.8+E*.15}}}function BM(i,e,t){var n=pr(i),r=pr(e);return function(s,a){var o=s*3,c=a*4+Math.floor(s*3)%2*.5,u=o-Math.floor(o),l=c-Math.floor(c),h=Ro(Math.floor(o)%3,Math.floor(c)%4,t),f=Math.min(u,1-u,(l<.5?l:1-l)*1.5),p=Xi(s*6,a*6,5,t);if(f<.012)return{c:[.62,.42,.2],h:.35,r:.35};if(f<.035)return{c:[r[0]*.5,r[1]*.5,r[2]*.5],h:.1,r:.95};var v=nu(p*.8+h*.4),_=.8+p*.3;return{c:[ui(r[0],n[0],v)*_,ui(r[1],n[1],v)*_,ui(r[2],n[2],v)*_],h:.5+p*.5,r:.9}}}function iu(i,e,t){var n=pr(i),r=pr(e);return function(s,a,o,c){var u=s*2%1,l=a*2%1,h=Math.min(u,1-u,l,1-l)<.012,f=[[.06,.06],[.94,.06],[.06,.94],[.94,.94]].some(function(g){var m=u-g[0],x=l-g[1];return m*m+x*x<9e-4}),p=Xi(s*6,a*16,4,t),v=S0(s*90,a*4,90,t+3)>.9?.15:0,_=.75+p*.35+v;return h?{c:[r[0]*.4,r[1]*.4,r[2]*.4],h:.1,r:.6}:f?{c:[n[0]*1.2,n[1]*1.2,n[2]*1.2],h:1,r:.35}:{c:[ui(r[0],n[0],p)*_,ui(r[1],n[1],p)*_,ui(r[2],n[2],p)*_],h:.5+p*.1,r:.45+p*.2}}}function kM(i){var e=iu(6179892,2234898,i);return function(t,n,r,s){var a=e(t,n,r,s),o=Math.abs(n-.5)<.025&&t*4%1>.15&&t*4%1<.85,c=Math.abs(n-.15)<.04&&Math.abs(t*2%1-.5)<.12;return o?{c:[.2,.7,.8],h:.3,r:.3,e:[.15,.85,1]}:c?{c:[.9,.7,.3],h:.8,r:.3,e:[1,.6,.15]}:(a.e=[0,0,0],a)}}function rf(i,e){return function(t,n){var r=t*2,s=Math.floor(n*3),a=n*3;r+=s%2*.5;var o=r-Math.floor(r),c=a-s,u=Math.min(o,1-o,c,1-c)*2,l=Xi(t*6,n*6,5,i),h=Ro(Math.floor(r)&1,s%3,i),f=.55+l*.45+h*.15;return u<.025?e?{c:[.25,.03,.04],h:.05,r:.6,e:[.12,.01,.02]}:{c:[.9,.06,.12],h:.05,r:.3,e:[.9,.04,.1]}:u<.05?{c:[.05,.04,.045],h:.15,r:.9,e:[.18,.01,.02]}:{c:[.13*f,.115*f,.12*f],h:.5+l*.5,r:.85-l*.2,e:[0,0,0]}}}function zM(i){return function(e,t){var n=Xi(e*4,t*4,4,i),r=Xi(e*9+n*2,t*9,3,i+3),s=nu(.35+r*.9-(n>.62?(n-.62)*3:0));return{c:[.3+s*.55,.01+s*.04,.03+s*.06],h:.2+r*.2,r:.2,e:[.18+s*.62,s*.03,.02+s*.06]}}}function nf(i){var e=iu(9071170,3154970,31),t=i==="red"?[.9,.12,.08]:i==="blue"?[.15,.35,1]:null;return function(n,r,s,a){var o=e(n,r,s,a),c=n*8%1,u=(r-.88)/.12,l=Math.abs(c-.5)+Math.abs(u-.5)<.32;return r>.88?{c:l?[.2,.13,.07]:[.9,.68,.3],h:l?.3:.85,r:l?.7:.3,e:[0,0,0]}:Math.abs(n-.5)<.012?{c:[.05,.05,.05],h:0,r:.8,e:[0,0,0]}:t&&Math.abs(r-.45)<.05?{c:t,h:.7,r:.3,e:[t[0]*.8,t[1]*.8,t[2]*.8]}:(o.e=[0,0,0],o)}}function y0(i){var e=iu(8019514,2760726,41);return function(t,n,r,s){var a=e(t,n,r,s),o=Math.abs(t-.5)<.18&&Math.abs(n-.5)<.26;if(o){var c=Math.abs(t-.5)<.04&&(i?n>.5&&n<.72:n>.28&&n<.5),u=Math.abs(t-.5)<.08&&Math.abs(n-(i?.3:.7))<.04,l=i?[.35,.95,1]:[1,.1,.16];return u?{c:l,h:.9,r:.2,e:l}:c?{c:[.8,.8,.75],h:1,r:.3,e:[0,0,0]}:{c:[.06,.07,.06],h:.2,r:.7,e:[0,0,0]}}return a.e=[0,0,0],a}}function tu(i,e,t,n){var r=pr(i),s=pr(e);return function(a,o){var c=a*4%1,u=o*4%1,l=Math.min(c,1-c,u,1-u),h=Ro(Math.floor(a*4),Math.floor(o*4),t),f=Xi(a*8,o*8,4,t);if(l<.03)return{c:[s[0]*.4,s[1]*.4,s[2]*.4],h:.05,r:.95};if(n&&(c*10%1<.3||u*10%1<.3)&&l>.08)return{c:[s[0]*.3,s[1]*.3,s[2]*.3],h:.1,r:.6};var p=nu(h*.5+f*.6),v=.7+f*.4;return{c:[ui(s[0],r[0],p)*v,ui(s[1],r[1],p)*v,ui(s[2],r[2],p)*v],h:.5+f*.3,r:n?.5:.8}}}function GM(i){var e=rf(i,!0);return function(t,n){var r=e(t,n),s=Xi(t*3,n*3,3,i+20)>.66;if(s){var a=Xi(t*10,n*10,3,i+21);return{c:[1,.1+a*.18,.16],h:0,r:.25,e:[1.3,.08+a*.16,.18]}}return r}}function VM(i){return tu(2762274,1183760,i,!1)}var M0={};function bn(i,e,t){return M0[i]||(M0[i]=HM(e,t))}function sf(i){switch(i){case 1:return bn("brick",FM(8275506,4071446,3813414,1),{bump:4});case 2:return bn("stone",BM(12365458,7234642,2),{bump:4});case 3:return bn("metal",iu(10123846,3811862,3),{bump:3});case 4:return bn("tech",kM(4),{emissive:!0,bump:3});case 5:return bn("hell",rf(5),{emissive:!0,bump:5});case 6:return bn("door",nf(null),{emissive:!0,bump:3});case 7:return bn("doorRed",nf("red"),{emissive:!0,bump:3});case 8:return bn("doorBlue",nf("blue"),{emissive:!0,bump:3});case 9:return bn("switchOff",y0(!1),{emissive:!0,bump:3});case 10:return bn("switchOn",y0(!0),{emissive:!0,bump:3})}return sf(1)}var eu=null;function T0(){if(eu)return eu;var i=128,e=new Uint8ClampedArray(i*i*4),t=44;function n(c,u,l,h,f,p){if(!(c<0||u<0||c>=i||u>=i)){var v=(u*i+c)*4;e[v]=l,e[v+1]=h,e[v+2]=f,e[v+3]=Math.max(e[v+3],p)}}for(var r=10;r<118;r++)t+=r%7===0?1:r%9===0?-1:0,n(t-1,r,200,190,170,150),n(t+2,r,200,190,170,150),n(t,r,12,10,8,255),n(t+1,r,12,10,8,255);for(var s=0;s<16;s++)n(t+3+s,60+s,12,10,8,255),n(t+3+s,59+s,200,190,170,140);var a;if(typeof document!="undefined"){var o=document.createElement("canvas");o.width=o.height=i,o.getContext("2d").putImageData(new ImageData(e,i,i),0,0),a=new Rr(o)}else a=new ar(e,i,i);return a.colorSpace=qt,a.magFilter=Xt,a.needsUpdate=!0,eu=new Zt({map:a,transparent:!0,alphaTest:.3,depthWrite:!1,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1}),eu}function af(i){switch(i){case"tech":return bn("fTech",tu(6968888,2366482,11,!0),{bump:3});case"hell":return bn("fHell",GM(12),{emissive:!0,bump:4});case"mercury":return bn("fMercury",zM(16),{emissive:!0,bump:1});case"ceilTech":return bn("cTech",tu(4865580,1577998,13,!0),{bump:2});case"ceilHell":return bn("cHell",rf(14,!0),{emissive:!0,bump:4});case"ceilDark":return bn("cDark",VM(15),{bump:2});default:return bn("fSlab",tu(9340014,3946026,10,!1),{bump:3})}}function Yi(i,e){var t=new Zt(Object.assign({map:i.map,normalMap:i.normalMap,roughnessMap:i.roughnessMap,roughness:1,metalness:.05},e||{}));return i.emissiveMap&&(t.emissiveMap=i.emissiveMap,t.emissive=new Qe(16777215),t.emissiveIntensity=1.6),t}function au(){this.groups={}}au.prototype.quad=function(i,e,t,n,r,s,a){var o=this.groups[i]||(this.groups[i]={pos:[],nor:[],uv:[]});[e,t,n,e,n,r].forEach(function(c){o.pos.push(c[0],c[1],c[2]),o.nor.push(s[0],s[1],s[2])}),[a[0],a[1],a[2],a[0],a[2],a[3]].forEach(function(c){o.uv.push(c[0],c[1])})};au.prototype.meshes=function(i){var e=[];for(var t in this.groups){var n=this.groups[t],r=new Kt;r.setAttribute("position",new wt(n.pos,3)),r.setAttribute("normal",new wt(n.nor,3)),r.setAttribute("uv",new wt(n.uv,2));var s=new ke(r,i(t));s.name=t,e.push(s)}return e};function ru(i,e,t,n,r,s,a){if(!(a-s<.001)){var o,c,u,l,h;r==="E"?(o=[t+1,n+1],c=[t+1,n],u=[-1,0,0],l=n+1,h=n):r==="W"?(o=[t,n],c=[t,n+1],u=[1,0,0],l=n,h=n+1):r==="S"?(o=[t,n+1],c=[t+1,n+1],u=[0,0,-1],l=t,h=t+1):(o=[t+1,n],c=[t,n],u=[0,0,1],l=t+1,h=t),i.quad(e,[o[0],s,o[1]],[c[0],s,c[1]],[c[0],a,c[1]],[o[0],a,o[1]],u,[[l,s],[h,s],[h,a],[l,a]])}}var of={E:[1,0],W:[-1,0],S:[0,1],N:[0,-1]};function Co(i,e,t,n,r,s,a,o){i.quad(e,[t,a,r],[t,a,o],[s,a,o],[s,a,r],[0,1,0],[[t,r],[t,o],[s,o],[s,r]]),i.quad(e,[t,n,o],[t,n,r],[s,n,r],[s,n,o],[0,-1,0],[[t,o],[t,r],[s,r],[s,o]]),i.quad(e,[t,n,o],[s,n,o],[s,a,o],[t,a,o],[0,0,1],[[t,n],[s,n],[s,a],[t,a]]),i.quad(e,[s,n,r],[t,n,r],[t,a,r],[s,a,r],[0,0,-1],[[s,n],[t,n],[t,a],[s,a]]),i.quad(e,[s,n,o],[s,n,r],[s,a,r],[s,a,o],[1,0,0],[[o,n],[r,n],[r,a],[o,a]]),i.quad(e,[t,n,r],[t,n,o],[t,a,o],[t,a,r],[-1,0,0],[[r,n],[o,n],[o,a],[r,a]])}function lf(i,e,t,n,r,s,a,o){r==="E"?Co(i,e,t+1-o,s,n,t+1,s+a,n+1):r==="W"?Co(i,e,t,s,n,t+o,s+a,n+1):r==="S"?Co(i,e,t,s,n+1-o,t+1,s+a,n+1):Co(i,e,t,s,n,t+1,s+a,n+o)}function b0(i){for(var e={},t=0;t<i.cells.length;t++){var n=i.cells[t];n>=1&&n<=5&&(e[n]=(e[n]||0)+1)}var r=1,s=-1;for(var a in e)e[a]>s&&(s=e[a],r=+a);return r}function WM(i,e,t){var n=b0(i);return[[1,0],[-1,0],[0,1],[0,-1]].forEach(function(r){var s=Yn(i,e+r[0],t+r[1]);s>=1&&s<=5&&(n=s)}),n}function E0(i,e){function t(se){return e&&e.texture("tex:"+se)||sf(se)}function n(se){return e&&e.texture("tex:"+se)||af(se)}var r=i.W,s=i.L,a=new au,o=new vt,c="wall"+b0(r),u={};r.lifts.forEach(function(se){u[se.x+","+se.z]=se});var l=[],h={};(s.events||[]).forEach(function(se){(se.do||[]).forEach(function te(ye){ye.after&&(ye.do||[]).forEach(te);var De=ye.raise||ye.lower;if(De){var Ke=Math.min(r.floor[De[1]*r.mw+De[0]],ye.to);l.push({box:De,lo:Ke});for(var q=De[1];q<=De[3];q++)for(var dt=De[0];dt<=De[2];dt++)h[dt+","+q]=Ke}})});var f=[];function p(se,te){var ye=Yn(r,se,te);return ye===0||!!gi[ye]}function v(se,te){var ye=u[se+","+te];return ye?ye.bottom:h[se+","+te]!==void 0?h[se+","+te]:hn(r,se,te)}for(var _=0;_<r.mh;_++)for(var g=0;g<r.mw;g++)if(p(g,_)){var m=v(g,_),x=Ni(r,g,_);!u[g+","+_]&&h[g+","+_]===void 0&&a.quad("floor",[g,m,_],[g,m,_+1],[g+1,m,_+1],[g+1,m,_],[0,1,0],[[g,_],[g,_+1],[g+1,_+1],[g+1,_]]),a.quad("ceil",[g,x,_],[g+1,x,_],[g+1,x,_+1],[g,x,_+1],[0,-1,0],[[g,_],[g+1,_],[g+1,_+1],[g,_+1]]);for(var E in of){var y=g+of[E][0],R=_+of[E][1],A=Yn(r,y,R);if(!p(y,R)){if(A===9||A===12){var P={x:y,z:R,faces:new au,dir:E,exit:A===9};ru(P.faces,"sw",g,_,E,m,x),f.push(P)}else ru(a,"wall"+(A>=1&&A<=5?A:1),g,_,E,m,x);gi[Yn(r,g,_)]||(lf(a,"trim",g,_,E,m,.09,.035),x-m>2&&lf(a,"trim",g,_,E,x-.12,.08,.05));continue}var M=v(y,R),T=Ni(r,y,R);M>m&&(ru(a,c,g,_,E,m,Math.min(M,x)),M-m>.3&&lf(a,"trim",g,_,E,M-.07,.07,.06)),T<x&&ru(a,c,g,_,E,Math.max(T,m),x)}}for(var L=0;L<r.mh;L++)for(var U=0;U<r.mw;U++)if(!(L%3!==1||Yn(r,U,L)!==0)){var D=Ni(r,U,L);D-hn(r,U,L)<2.6||Co(a,"beam",U,D-.2,L+.38,U+1,D,L+.62)}var Y={};function V(se){return Y[se]?Y[se]:se==="floor"?Y[se]=Yi(n(s.floor)):se==="ceil"?Y[se]=Yi(n(s.ceil)):se==="trim"?Y[se]=Yi(t(3),{color:10127992,metalness:.6,roughness:.5}):se==="beam"?Y[se]=Yi(t(3),{color:6969930,metalness:.4}):Y[se]=Yi(t(+se.slice(4)))}a.meshes(V).forEach(function(se){se.receiveShadow=!0,o.add(se)});var C=Yi(t(9)),N=Yi(t(10));f.forEach(function(se){se.faces.meshes(function(){return C}).forEach(function(te){se.mesh=te,o.add(te)})});for(var I=V("floor"),O=V("trim"),W=l.map(function(se){var te=se.box,ye=te[2]-te[0]+1,De=te[3]-te[1]+1,Ke=3,q=new en(ye,Ke,De);su(q,ye,Ke);var dt=new ke(q,[O,O,I,O,O,O]);return dt.userData={i:te[1]*r.mw+te[0],depth:Ke,cx:te[0]+ye/2,cz:te[1]+De/2},o.add(dt),dt}),ee=e&&e.texture("tex:mercury")||af("mercury"),ne=new Zt({color:10104880,emissive:16777215,emissiveIntensity:.9,roughness:.2,map:ee.map,emissiveMap:ee.map}),Ae=[],Ne=0;Ne<r.mh;Ne++)for(var lt=0;lt<r.mw;lt++){var qe=Ne*r.mw+lt;if(r.lava[qe]){var ct=new ke(new Jn(1,1),ne);ct.rotation.x=-Math.PI/2,ct.position.set(lt+.5,r.floor[qe]+.04,Ne+.5),ct.userData.i=qe,o.add(ct),Ae.push(ct)}}var me=[];for(var _e in r.doors){var we=r.doors[_e],it=hn(r,we.x,we.z),ze=Ni(r,we.x,we.z),nt=ze-it,X;if(we.secret){X=new ke(new en(1,nt,1),V("wall"+WM(r,we.x,we.z))),su(X.geometry,1,nt);var Q=T0();[[0,.502,0],[Math.PI,-.502,0],[Math.PI/2,0,.502],[-Math.PI/2,0,-.502]].forEach(function(se){var te=new ke(new Jn(.9,Math.min(nt,1.9)*.9),Q);te.rotation.y=se[0],te.position.set(se[2],0,se[1]),X.add(te)})}else{var xe=p(we.x-1,we.z)&&p(we.x+1,we.z),Me=xe?new en(.22,nt,1):new en(1,nt,.22);X=new ke(Me,Yi(t(we.locked==="red"?7:we.locked==="blue"?8:6))),su(X.geometry,1,nt)}X.position.set(we.x+.5,it+nt/2,we.z+.5),X.userData={door:we,baseY:it+nt/2,h:nt},X.castShadow=!0,o.add(X),me.push(X)}var le=r.lifts.map(function(se){var te=Math.max(.2,se.top-se.bottom+.2),ye=new ke(new en(.98,te,.98),Yi(t(4)));return su(ye.geometry,1,te),ye.userData={lift:se,h:te},o.add(ye),ye});return{group:o,update:function(){me.forEach(function(te){var ye=te.userData.door;te.position.y=te.userData.baseY+ye.open*te.userData.h*.98,te.visible=ye.open<.99}),le.forEach(function(te){var ye=te.userData.lift;te.position.set(ye.x+.5,ye.pos-te.userData.h/2,ye.z+.5)}),f.forEach(function(te){if(te.mesh){var ye=r.cells[te.z*r.mw+te.x];te.mesh.material=ye===10||ye===13?N:C}}),W.forEach(function(te){te.position.set(te.userData.cx,r.floor[te.userData.i]-te.userData.depth/2,te.userData.cz)});var se=performance.now()/1e3;ne.map.offset.set(se*.02,se*.013),ne.emissiveIntensity=.85+Math.sin(se*2.3)*.12,Ae.forEach(function(te){te.visible=!!r.lava[te.userData.i],te.position.y=r.floor[te.userData.i]+.04})}}}function su(i,e,t){for(var n=i.attributes.uv,r=0;r<n.count;r++){var s=Math.floor(r/4),a=(s<4,e),o=s===2||s===3?e:t;n.setXY(r,n.getX(r)*a,n.getY(r)*o)}n.needsUpdate=!0}var Io=new J;function hi(i,e,t,n,r,s){let a=2*Math.PI*r/4,o=Math.max(s-2*r,0),c=Math.PI/4;Io.copy(e),Io[n]=0,Io.normalize();let u=.5*a/(a+o),l=1-Io.angleTo(i)/c;return Math.sign(Io[t])===1?l*u:o/(a+o)+u+u*(1-l)}var ou=class i extends en{constructor(e=1,t=1,n=1,r=2,s=.1){let a=r*2+1;if(s=Math.min(e/2,t/2,n/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:r,radius:s},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new J,u=new J,l=new J(e,t,n).divideScalar(2).subScalar(s),h=this.attributes.position.array,f=this.attributes.normal.array,p=this.attributes.uv.array,v=h.length/6,_=new J,g=.5/a;for(let m=0,x=0;m<h.length;m+=3,x+=2)switch(c.fromArray(h,m),u.copy(c),u.x-=Math.sign(u.x)*g,u.y-=Math.sign(u.y)*g,u.z-=Math.sign(u.z)*g,u.normalize(),h[m+0]=l.x*Math.sign(c.x)+u.x*s,h[m+1]=l.y*Math.sign(c.y)+u.y*s,h[m+2]=l.z*Math.sign(c.z)+u.z*s,f[m+0]=u.x,f[m+1]=u.y,f[m+2]=u.z,Math.floor(m/v)){case 0:_.set(1,0,0),p[x+0]=hi(_,u,"z","y",s,n),p[x+1]=1-hi(_,u,"y","z",s,t);break;case 1:_.set(-1,0,0),p[x+0]=1-hi(_,u,"z","y",s,n),p[x+1]=1-hi(_,u,"y","z",s,t);break;case 2:_.set(0,1,0),p[x+0]=1-hi(_,u,"x","z",s,e),p[x+1]=hi(_,u,"z","x",s,n);break;case 3:_.set(0,-1,0),p[x+0]=1-hi(_,u,"x","z",s,e),p[x+1]=1-hi(_,u,"z","x",s,n);break;case 4:_.set(0,0,1),p[x+0]=1-hi(_,u,"x","y",s,e),p[x+1]=1-hi(_,u,"y","x",s,t);break;case 5:_.set(0,0,-1),p[x+0]=hi(_,u,"x","y",s,e),p[x+1]=1-hi(_,u,"y","x",s,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function cf(i,e){if(e===Ah)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===aa||e===Mo){let t=i.getIndex();if(t===null){let s=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)s.push(o);i.setIndex(s),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,r=[];if(e===aa)for(let s=1;s<=n;s++)r.push(t.getX(0)),r.push(t.getX(s)),r.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(r.push(t.getX(s)),r.push(t.getX(s+1)),r.push(t.getX(s+2))):(r.push(t.getX(s+2)),r.push(t.getX(s+1)),r.push(t.getX(s)));return r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(r),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function lu(i){let e=new Map,t=new Map,n=i.clone();return A0(i,n,function(r,s){e.set(s,r),t.set(r,s)}),n.traverse(function(r){if(!r.isSkinnedMesh)return;let s=r,a=e.get(r),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function A0(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)A0(i.children[n],e.children[n],t)}var cu=class extends ki{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new gf(t)}),this.register(function(t){return new vf(t)}),this.register(function(t){return new Af(t)}),this.register(function(t){return new wf(t)}),this.register(function(t){return new Rf(t)}),this.register(function(t){return new _f(t)}),this.register(function(t){return new yf(t)}),this.register(function(t){return new Mf(t)}),this.register(function(t){return new Sf(t)}),this.register(function(t){return new mf(t)}),this.register(function(t){return new Tf(t)}),this.register(function(t){return new xf(t)}),this.register(function(t){return new Ef(t)}),this.register(function(t){return new bf(t)}),this.register(function(t){return new df(t)}),this.register(function(t){return new uu(t,Et.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new uu(t,Et.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Cf(t)})}load(e,t,n,r){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let u=fr.extractUrlBase(e);a=fr.resolveURL(u,this.path)}else a=fr.extractUrlBase(e);this.manager.itemStart(e);let o=function(u){r?r(u):console.error(u),s.manager.itemError(e),s.manager.itemEnd(e)},c=new js(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){try{s.parse(u,a,function(l){t(l),s.manager.itemEnd(e)},o)}catch(l){o(l)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s,a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===P0){try{a[Et.KHR_BINARY_GLTF]=new If(e)}catch(h){r&&r(h);return}s=JSON.parse(a[Et.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let u=new Uf(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let l=0;l<this.pluginCallbacks.length;l++){let h=this.pluginCallbacks[l](u);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let l=0;l<s.extensionsUsed.length;++l){let h=s.extensionsUsed[l],f=s.extensionsRequired||[];switch(h){case Et.KHR_MATERIALS_UNLIT:a[h]=new pf;break;case Et.KHR_DRACO_MESH_COMPRESSION:a[h]=new Pf(s,this.dracoLoader);break;case Et.KHR_TEXTURE_TRANSFORM:a[h]=new Lf;break;case Et.KHR_MESH_QUANTIZATION:a[h]=new Nf;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}u.setExtensions(a),u.setPlugins(o),u.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}};function XM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function ln(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var Et={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},df=class{constructor(e){this.parser=e,this.name=Et.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,r=t.cache.get(n);if(r)return r;let s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],u,l=new Qe(16777215);c.color!==void 0&&l.setRGB(c.color[0],c.color[1],c.color[2],Hn);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":u=new as(l),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new Gn(l),u.distance=h;break;case"spot":u=new no(l),u.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,u.angle=c.spot.outerConeAngle,u.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return u.position.set(0,0,0),Ki(u,c),c.intensity!==void 0&&(u.intensity=c.intensity),u.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(u),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},pf=class{constructor(){this.name=Et.KHR_MATERIALS_UNLIT}getMaterialType(){return mn}extendParams(e,t,n){let r=[];e.color=new Qe(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Hn),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,qt))}return Promise.all(r)}},mf=class{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=ln(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},gf=class{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return ln(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=ln(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new at(s,s)}return Promise.all(r)}},vf=class{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_DISPERSION}getMaterialType(e){return ln(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=ln(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},xf=class{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return ln(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=ln(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(r)}},_f=class{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_SHEEN}getMaterialType(e){return ln(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=ln(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(t.sheenColor=new Qe(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],Hn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,qt)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(r)}},yf=class{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return ln(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=ln(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(r)}},Mf=class{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_VOLUME}getMaterialType(e){return ln(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=ln(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return t.attenuationColor=new Qe().setRGB(s[0],s[1],s[2],Hn),Promise.all(r)}},Sf=class{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_IOR}getMaterialType(e){return ln(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=ln(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Tf=class{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_SPECULAR}getMaterialType(e){return ln(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=ln(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return t.specularColor=new Qe().setRGB(s[0],s[1],s[2],Hn),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,qt)),Promise.all(r)}},bf=class{constructor(e){this.parser=e,this.name=Et.EXT_MATERIALS_BUMP}getMaterialType(e){return ln(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=ln(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(r)}},Ef=class{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return ln(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=ln(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(r)}},Af=class{constructor(e){this.parser=e,this.name=Et.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},wf=class{constructor(e){this.parser=e,this.name=Et.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=r.images[a.source],c=n.textureLoader;if(o.uri){let u=n.options.manager.getHandler(o.uri);u!==null&&(c=u)}return n.loadTextureImage(e,a.source,c)}},Rf=class{constructor(e){this.parser=e,this.name=Et.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=r.images[a.source],c=n.textureLoader;if(o.uri){let u=n.options.manager.getHandler(o.uri);u!==null&&(c=u)}return n.loadTextureImage(e,a.source,c)}},uu=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let c=r.byteOffset||0,u=r.byteLength||0,l=r.count,h=r.byteStride,f=new Uint8Array(o,c,u);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(l,h,f,r.mode,r.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(l*h);return a.decodeGltfBuffer(new Uint8Array(p),l,h,f,r.mode,r.filter),p})})}else return null}},Cf=class{constructor(e){this.name=Et.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let u of r.primitives)if(u.mode!==fi.TRIANGLES&&u.mode!==fi.TRIANGLE_STRIP&&u.mode!==fi.TRIANGLE_FAN&&u.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let u in a)o.push(this.parser.getDependency("accessor",a[u]).then(l=>(c[u]=l,c[u])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(u=>{let l=u.pop(),h=l.isGroup?l.children:[l],f=u[0].count,p=[];for(let v of h){let _=new xt,g=new J,m=new In,x=new J(1,1,1),E=new es(v.geometry,v.material,f);for(let R=0;R<f;R++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,R),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,R),c.SCALE&&x.fromBufferAttribute(c.SCALE,R),E.setMatrixAt(R,_.compose(g,m,x));let y=null;for(let R in c)if(R==="_COLOR_0"){let A=c[R];E.instanceColor=new or(A.array,A.itemSize,A.normalized)}else if(R!=="TRANSLATION"&&R!=="ROTATION"&&R!=="SCALE"){if(y===null){let P=E.geometry;y=new Kt,y.name=P.name;for(let M in P.attributes)y.setAttribute(M,P.attributes[M]);for(let M in P.morphAttributes)y.morphAttributes[M]=P.morphAttributes[M];P.index!==null&&y.setIndex(P.index),y.morphTargetsRelative=P.morphTargetsRelative;for(let M of P.groups)y.addGroup(M.start,M.count,M.materialIndex);P.boundingBox!==null&&(y.boundingBox=P.boundingBox.clone()),P.boundingSphere!==null&&(y.boundingSphere=P.boundingSphere.clone()),y.drawRange.start=P.drawRange.start,y.drawRange.count=P.drawRange.count,y.userData=Object.assign({},P.userData),E.geometry=y}let A=c[R];y.setAttribute(R,new or(A.array,A.itemSize,A.normalized))}$t.prototype.copy.call(E,v),this.parser.assignFinalMaterial(E),p.push(E)}return l.isGroup?(l.clear(),l.add(...p),l):p[0]}))}},P0="glTF",Po=12,w0={JSON:1313821514,BIN:5130562},If=class{constructor(e){this.name=Et.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Po),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==P0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-Po,s=new DataView(e,Po),a=0;for(;a<r;){let o=s.getUint32(a,!0);a+=4;let c=s.getUint32(a,!0);if(a+=4,c===w0.JSON){let u=new Uint8Array(e,Po+a,o);this.content=n.decode(u)}else if(c===w0.BIN){let u=Po+a;this.body=e.slice(u,u+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Pf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Et.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},u={};for(let l in a){let h=Of[l]||l.toLowerCase();o[h]=a[l]}for(let l in e.attributes){let h=Of[l]||l.toLowerCase();if(a[l]!==void 0){let f=n.accessors[e.attributes[l]],p=va[f.componentType];u[h]=p.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(l){return new Promise(function(h,f){r.decodeDracoFile(l,function(p){for(let v in p.attributes){let _=p.attributes[v],g=c[v];g!==void 0&&(_.normalized=g)}h(p)},o,u,Hn,f)})})}},Lf=class{constructor(){this.name=Et.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),r=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*r,e.offset.x,-e.repeat.x*r,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Nf=class{constructor(){this.name=Et.KHR_MESH_QUANTIZATION}},hu=class extends Bi{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,u=o*3,l=r-t,h=(n-t)/l,f=h*h,p=f*h,v=e*u,_=v-u,g=-2*p+3*f,m=p-f,x=1-g,E=m-f+h;for(let y=0;y!==o;y++){let R=a[_+y+o],A=a[_+y+c]*l,P=a[v+y+o],M=a[v+y]*l;s[y]=x*R+E*A+g*P+m*M}return s}},YM=new In,Df=class extends hu{interpolate_(e,t,n,r){let s=super.interpolate_(e,t,n,r);return YM.fromArray(s).normalize().toArray(s),s}},fi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},va={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},R0={9728:Xt,9729:an,9984:$l,9985:ia,9986:us,9987:wi},C0={33071:ai,33648:Fs,10497:oi},uf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Of={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ur={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},KM={CUBICSPLINE:void 0,LINEAR:jr,STEP:Jr},hf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ZM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Zt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Gi})),i.DefaultMaterial}function ds(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ki(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function JM(i,e,t){let n=!1,r=!1,s=!1;for(let u=0,l=e.length;u<l;u++){let h=e[u];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);let a=[],o=[],c=[];for(let u=0,l=e.length;u<l;u++){let h=e[u];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(f)}if(r){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(f)}if(s){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(u){let l=u[0],h=u[1],f=u[2];return n&&(i.morphAttributes.position=l),r&&(i.morphAttributes.normal=h),s&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function jM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function $M(i){let e,t=i.extensions&&i.extensions[Et.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ff(t.attributes):e=i.indices+":"+ff(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+ff(i.targets[n]);return e}function ff(i){let e="",t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Hf(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function QM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var eS=new xt,Uf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new XM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,a=-1;if(typeof navigator!="undefined"&&typeof navigator.userAgent!="undefined"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);r=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&r<17||s&&a<98?this.textureLoader=new ss(this.options.manager):this.textureLoader=new io(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new js(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:n,userData:{}};return ds(s,o,r),Ki(o,r),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){let a=t[r].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){let a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),s=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[u,l]of a.children.entries())s(l,o.children[u])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Et.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(s,a){n.load(fr.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let a=uf[r.type],o=va[r.componentType],c=r.normalized===!0,u=new o(r.count*a);return Promise.resolve(new Qt(u,a,c))}let s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],c=uf[r.type],u=va[r.componentType],l=u.BYTES_PER_ELEMENT,h=l*c,f=r.byteOffset||0,p=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,v=r.normalized===!0,_,g;if(p&&p!==h){let m=Math.floor(f/p),x="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+m+":"+r.count,E=t.cache.get(x);E||(_=new u(o,m*p,r.count*p/l),E=new Ws(_,p/l),t.cache.add(x,E)),g=new qs(E,c,f%p/l,v)}else o===null?_=new u(r.count*c):_=new u(o,f,r.count*c),g=new Qt(_,c,v);if(r.sparse!==void 0){let m=uf.SCALAR,x=va[r.sparse.indices.componentType],E=r.sparse.indices.byteOffset||0,y=r.sparse.values.byteOffset||0,R=new x(a[1],E,r.sparse.count*m),A=new u(a[2],y,r.sparse.count*c);o!==null&&(g=new Qt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let P=0,M=R.length;P<M;P++){let T=R[P];if(g.setX(T,A[P*c]),c>=2&&g.setY(T,A[P*c+1]),c>=3&&g.setZ(T,A[P*c+2]),c>=4&&g.setW(T,A[P*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=v}return g})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let r=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let u=this.loadImageSource(t,n).then(function(l){l.flipY=!1,l.name=a.name||o.name||"",l.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(l.name=o.uri);let f=(s.samplers||{})[a.sampler]||{};return l.magFilter=R0[f.magFilter]||an,l.minFilter=R0[f.minFilter]||wi,l.wrapS=C0[f.wrapS]||oi,l.wrapT=C0[f.wrapT]||oi,l.generateMipmaps=!l.isCompressedTexture&&l.minFilter!==Xt&&l.minFilter!==an,r.associations.set(l,{textures:e}),l}).catch(function(){return null});return this.textureCache[c]=u,u}loadImageSource(e,t){let n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=r.images[e],o=self.URL||self.webkitURL,c=a.uri||"",u=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){u=!0;let f=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let l=Promise.resolve(c).then(function(h){return new Promise(function(f,p){let v=f;t.isImageBitmapLoader===!0&&(v=function(_){let g=new on(_);g.needsUpdate=!0,f(g)}),t.load(fr.resolveURL(h,s.path),v,void 0,p)})}).then(function(h){return u===!0&&o.revokeObjectURL(c),Ki(h,a),h.userData.mimeType=a.mimeType||QM(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=l,l}assignTexture(e,t,n,r){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[Et.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Et.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=s.associations.get(a);a=s.extensions[Et.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Zs,Un.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Ks,Un.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(r||s||a){let o="ClonedMaterial:"+n.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Zt}loadMaterial(e){let t=this,n=this.json,r=this.extensions,s=n.materials[e],a,o={},c=s.extensions||{},u=[];if(c[Et.KHR_MATERIALS_UNLIT]){let h=r[Et.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),u.push(h.extendParams(o,s,t))}else{let h=s.pbrMetallicRoughness||{};if(o.color=new Qe(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Hn),o.opacity=f[3]}h.baseColorTexture!==void 0&&u.push(t.assignTexture(o,"map",h.baseColorTexture,qt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),u.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Sn);let l=s.alphaMode||hf.OPAQUE;if(l===hf.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===hf.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==mn&&(u.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new at(1,1),s.normalTexture.scale!==void 0)){let h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&a!==mn&&(u.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==mn){let h=s.emissiveFactor;o.emissive=new Qe().setRGB(h[0],h[1],h[2],Hn)}return s.emissiveTexture!==void 0&&a!==mn&&u.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,qt)),Promise.all(u).then(function(){let h=new a(o);return s.name&&(h.name=s.name),Ki(h,s),t.associations.set(h,{materials:e}),s.extensions&&ds(r,h,s),h})}createUniqueName(e){let t=Wt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function s(o){return n[Et.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return I0(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let u=e[o],l=$M(u),h=r[l];if(h)a.push(h.promise);else{let f;u.extensions&&u.extensions[Et.KHR_DRACO_MESH_COMPRESSION]?f=s(u):f=I0(new Kt,u,t),u.mode===fi.TRIANGLE_STRIP?f=f.then(p=>cf(p,Mo)):u.mode===fi.TRIANGLE_FAN&&(f=f.then(p=>cf(p,aa))),r[l]={primitive:u,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,u=a.length;c<u;c++){let l=a[c].material===void 0?ZM(this.cache):this.getDependency("material",a[c].material);o.push(l)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let u=c.slice(0,c.length-1),l=c[c.length-1],h=[];for(let p=0,v=l.length;p<v;p++){let _=l[p],g=a[p],m,x=u[p];if(g.mode===fi.TRIANGLES||g.mode===fi.TRIANGLE_STRIP||g.mode===fi.TRIANGLE_FAN||g.mode===void 0){let E=s.isSkinnedMesh===!0,y=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");E&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=E&&y?new Wa(_,x):new ke(_,x),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(g.mode===fi.LINES)m=new Xa(_,x);else if(g.mode===fi.LINE_STRIP)m=new ts(_,x);else if(g.mode===fi.LINE_LOOP)m=new Ya(_,x);else if(g.mode===fi.POINTS)m=new ns(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&jM(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),Ki(m,s),g.extensions&&ds(r,m,g),t.assignFinalMaterial(m),h.push(m)}for(let p=0,v=h.length;p<v;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return s.extensions&&ds(r,h[0],s),h[0];let f=new vt;s.extensions&&ds(r,f,s),t.associations.set(f,{meshes:e});for(let p=0,v=h.length;p<v;p++)f.add(h[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new sn(Ih.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new zi(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ki(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){let s=r.pop(),a=r,o=[],c=[];for(let u=0,l=a.length;u<l;u++){let h=a[u];if(h){o.push(h);let f=new xt;s!==null&&f.fromArray(s.array,u*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new qa(o,c)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],c=[],u=[],l=[];for(let h=0,f=r.channels.length;h<f;h++){let p=r.channels[h],v=r.samplers[p.sampler],_=p.target,g=_.node,m=r.parameters!==void 0?r.parameters[v.input]:v.input,x=r.parameters!==void 0?r.parameters[v.output]:v.output;_.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",x)),u.push(v),l.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(u),Promise.all(l)]).then(function(h){let f=h[0],p=h[1],v=h[2],_=h[3],g=h[4],m=[];for(let E=0,y=f.length;E<y;E++){let R=f[E],A=p[E],P=v[E],M=_[E],T=g[E];if(R===void 0)continue;R.updateMatrix&&R.updateMatrix();let L=n._createAnimationTracks(R,A,P,M,T);if(L)for(let U=0;U<L.length;U++)m.push(L[U])}let x=new rs(s,void 0,m);return Ki(x,r),x})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,u=r.weights.length;c<u;c++)o.morphTargetInfluences[c]=r.weights[c]}),a})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=r.children||[];for(let u=0,l=o.length;u<l;u++)a.push(n.getDependency("node",o[u]));let c=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),c]).then(function(u){let l=u[0],h=u[1],f=u[2];f!==null&&l.traverse(function(p){p.isSkinnedMesh&&p.bind(f,eS)});for(let p=0,v=h.length;p<v;p++)l.add(h[p]);if(l.userData.pivot!==void 0&&h.length>0){let p=l.userData.pivot,v=h[0];l.pivot=new J().fromArray(p),l.position.x-=p[0],l.position.y-=p[1],l.position.z-=p[2],v.position.set(0,0,0),delete l.userData.pivot}return l})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],c=r._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(u){return r._getNodeRef(r.cameraCache,s.camera,u)})),r._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){o.push(u)}),this.nodeCache[e]=Promise.all(o).then(function(u){let l;if(s.isBone===!0?l=new Xs:u.length>1?l=new vt:u.length===1?l=u[0]:l=new $t,l!==u[0])for(let h=0,f=u.length;h<f;h++)l.add(u[h]);if(s.name&&(l.userData.name=s.name,l.name=a),Ki(l,s),s.extensions&&ds(n,l,s),s.matrix!==void 0){let h=new xt;h.fromArray(s.matrix),l.applyMatrix4(h)}else s.translation!==void 0&&l.position.fromArray(s.translation),s.rotation!==void 0&&l.quaternion.fromArray(s.rotation),s.scale!==void 0&&l.scale.fromArray(s.scale);if(!r.associations.has(l))r.associations.set(l,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){let h=r.associations.get(l);r.associations.set(l,{...h})}return r.associations.get(l).nodes=e,l}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,s=new vt;n.name&&(s.name=r.createUniqueName(n.name)),Ki(s,n),n.extensions&&ds(t,s,n);let a=n.nodes||[],o=[];for(let c=0,u=a.length;c<u;c++)o.push(r.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let l=0,h=c.length;l<h;l++){let f=c[l];f.parent!==null?s.add(lu(f)):s.add(f)}let u=l=>{let h=new Map;for(let[f,p]of r.associations)(f instanceof Un||f instanceof on)&&h.set(f,p);return l.traverse(f=>{let p=r.associations.get(f);p!=null&&h.set(f,p)}),h};return r.associations=u(s),s})}_createAnimationTracks(e,t,n,r,s){let a=[],o=e.name?e.name:e.uuid,c=[];function u(p){p.morphTargetInfluences&&c.push(p.name?p.name:p.uuid)}Ur[s.path]===Ur.weights?(u(e),e.isGroup&&e.children.forEach(u)):c.push(o);let l;switch(Ur[s.path]){case Ur.weights:l=cr;break;case Ur.rotation:l=ur;break;case Ur.translation:case Ur.scale:l=Pr;break;default:n.itemSize===1?l=cr:l=Pr;break}let h=r.interpolation!==void 0?KM[r.interpolation]:jr,f=this._getArrayFromAccessor(n);for(let p=0,v=c.length;p<v;p++){let _=new l(c[p]+"."+Ur[s.path],t.array,f,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Hf(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let r=this instanceof ur?Df:hu;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function tS(i,e,t){let n=e.attributes,r=new Pn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,u=o.max;if(c!==void 0&&u!==void 0){if(r.set(new J(c[0],c[1],c[2]),new J(u[0],u[1],u[2])),o.normalized){let l=Hf(va[o.componentType]);r.min.multiplyScalar(l),r.max.multiplyScalar(l)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new J,c=new J;for(let u=0,l=s.length;u<l;u++){let h=s[u];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],p=f.min,v=f.max;if(p!==void 0&&v!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(v[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(v[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(v[2]))),f.normalized){let _=Hf(va[f.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}i.boundingBox=r;let a=new Bn;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=a}function I0(i,e,t){let n=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=Of[a]||a.toLowerCase();o in i.attributes||r.push(s(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});r.push(a)}return yt.workingColorSpace!==Hn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${yt.workingColorSpace}" not supported.`),Ki(i,e),tS(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?JM(i,e.targets,t):i})}var fu=2,L0={imp:["imp"],gnasher:["gnasher"],knight:["knight","emberknight","ember_knight"],riley:["riley","rileyhologram"],fist:["fist","fists","fpfist","weaponfist"],pistol:["pistol","fppistol","weaponpistol"],shotgun:["shotgun","fpshotgun","weaponshotgun","pumpshotgun","doublebarrelshotgun"],chaingun:["chaingun","fpchaingun","weaponchaingun","minigun"],rocket:["rocketlauncher","rocket","fprocketlauncher","weaponrocketlauncher","launcher"],crate:["crate","woodencrate","crateintact"],barrel:["barrel","explosivebarrel","toxicbarrel"],torch:["torch","standingtorch"],lamp:["lamp","ceilinglamp","cagedlamp","ceilinglampintact","lampintact"],lampBroken:["lampbroken","ceilinglampbroken","brokenlamp"],pipeStraight:["pipestraight","pipe"],pipeElbow:["pipeelbow","elbow"],pipeValve:["pipevalve","valve"],chain:["chain","hangingchain"],"pickup:h":["medkitsmall","stimpack","smallmedkit","stim"],"pickup:+":["medkitlarge","medkit","largemedkit","medikit"],"pickup:b":["bulletclip","clip","ammoclip","bullets"],"pickup:a":["shellbox","shells","boxofshells"],"pickup:k":["rocketbox","rockets","boxofrockets"],"pickup:A":["armor","armour","armorvest","armourvest","vest"],"pickup:r":["keycardred","redkeycard","keyred"],"pickup:u":["keycardblue","bluekeycard","keyblue"],"pickup:P":["phoenixorb","orb"],"pickup:2":["shotgunpickup","pickupshotgun"],"pickup:3":["chaingunpickup","pickupchaingun"],"pickup:4":["rocketlauncherpickup","pickuprocketlauncher"],"tex:1":["brick"],"tex:2":["stone"],"tex:3":["metalpanel","metal"],"tex:4":["techpanel","tech"],"tex:5":["hellrock","hell"],"tex:6":["door","doorplain"],"tex:7":["doorred","doorredstripe","reddoor"],"tex:8":["doorblue","doorbluestripe","bluedoor"],"tex:9":["switchoff"],"tex:10":["switchon"],"tex:slab":["floorslab","slab"],"tex:tech":["floorgrate","grate"],"tex:hell":["lavafloor","floorlava"],"tex:ceilDark":["ceilingpanel","ceiling"],"tex:ceilTech":["ceilingpanel","ceilingtech"],"tex:ceilHell":["hellrock","ceilinghell"]};function Ff(i){return String(i||"").toLowerCase().replace(/\.[a-z0-9]+$/,"").replace(/.*[\/\\]/,"").replace(/[^a-z0-9]/g,"")}function Bf(){var i={models:{},textures:{},ready:!1,loaded:[],problems:[]};return i.model=function(e){for(var t=L0[e]||[e],n=0;n<t.length;n++)if(i.models[t[n]])return i.models[t[n]];return null},i.texture=function(e){for(var t=L0[e]||[e],n=0;n<t.length;n++)if(i.textures[t[n]])return i.textures[t[n]];return null},i}var nS=["assets/codex","assets/cc0","assets"];function O0(i){var e=typeof window!="undefined"&&window.FIREBIRD_ASSET_PACK;return e&&Object.prototype.hasOwnProperty.call(e,i)?e[i]:void 0}function N0(i){var e=O0(i);if(e===void 0)return i;var t=/\.png$/i.test(i)?"image/png":/\.jpe?g$/i.test(i)?"image/jpeg":/\.webp$/i.test(i)?"image/webp":"model/gltf-binary";return"data:"+t+";base64,"+e}function iS(i){var e=O0(i+"/assets.json");return e!==void 0?Promise.resolve(e):typeof window!="undefined"&&window.FIREBIRD_ASSET_PACK||typeof location!="undefined"&&location.protocol==="file:"?Promise.resolve(null):fetch(i+"/assets.json",{cache:"no-cache"}).then(function(t){return t.ok?t.json():null}).catch(function(){return null})}function H0(i){var e=typeof window!="undefined"&&window.FIREBIRD_ASSET_PACK;i=i||e&&e.__dirs||nS;var t=Bf(),n=new cu,r=new ss;return Promise.all(i.map(function(o){return iS(o).then(function(c){return{dir:o,man:c}})})).then(function(o){var c=[];return o.forEach(function(u,l){if(u.man){var h=Array.isArray(u.man)?u.man:u.man.assets||u.man.files||[];h.forEach(function(f){c.push(a(u.dir,f,l))})}}),Promise.all(c)}).then(function(){return t.ready=!0,t});function s(o,c,u,l){var h=o[c];(!h||h.priority>l)&&(u.priority=l,o[c]=u)}function a(o,c,u){var l=c.file||c.path||c.src,h=String(c.type||c.kind||"").toLowerCase(),f=Ff(c.id||c.name||l);if(l&&/\.glb$/i.test(l))return D0(n.loadAsync(N0(o+"/"+l)),2e4).then(function(x){s(t.models,f,{scene:x.scene,animations:x.animations||[],meta:c,type:h,dir:o},u),t.loaded.push(o+":"+f)}).catch(function(x){t.problems.push(o+"/"+l+": "+(x&&x.message||x))});if(h.indexOf("tex")===0||c.maps||c.textures){var p=c.maps||c.textures||{},v={},_=[],g={map:["albedo","basecolor","base_color","color","diffuse"],normalMap:["normal","normalmap"],roughnessMap:["roughness","rough","orm"],emissiveMap:["emissive","emission","glow"]},m=c.filter!=="linear";return Object.keys(g).forEach(function(x){var E=null;Object.keys(p).forEach(function(y){g[x].indexOf(y.toLowerCase().replace(/[^a-z_]/g,""))>=0&&(E=p[y])}),E&&_.push(D0(r.loadAsync(N0(o+"/"+E)),2e4).then(function(y){y.wrapS=y.wrapT=oi,y.anisotropy=8,y.colorSpace=x==="map"||x==="emissiveMap"?qt:Qn,m&&(y.magFilter=Xt),v[x]=y}).catch(function(y){t.problems.push(o+"/"+E+": "+(y&&y.message||y))}))}),Promise.all(_).then(function(){v.map&&(s(t.textures,f,v,u),t.loaded.push(o+":tex:"+f))})}return null}}function D0(i,e){return new Promise(function(t,n){var r=setTimeout(function(){n(new Error("timed out"))},e);i.then(function(s){clearTimeout(r),t(s)},function(s){clearTimeout(r),n(s)})})}function ps(i){var e=lu(i.scene);e.traverse(function(r){r.isMesh&&(r.castShadow=!0,r.frustumCulled=!r.isSkinnedMesh,r.material&&(r.material=Array.isArray(r.material)?r.material.map(function(s){return s.clone()}):r.material.clone()))});var t=i.animations.length?new so(e):null,n={};return i.animations.forEach(function(r){n[Ff(r.name).replace(/^.*\|/,"")]=r}),{obj:e,mixer:t,clips:n}}function Lo(i,e){var t=Ff(e);if(i[t])return i[t];for(var n in i)if(n.indexOf(t)>=0)return i[n];return null}var U0={};function et(i,e){return U0[i]||(U0[i]=e())}function Jt(i,e){return new Zt(Object.assign({color:i,roughness:.7,metalness:.05},e||{}))}function gn(i,e){return new Zt({color:0,emissive:i,emissiveIntensity:e||3,roughness:1})}function ot(i,e,t,n,r,s){var a=new ke(i,e);return a.position.set(t,n,r),a.castShadow=!0,(s||this).add(a),a}var ti=function(){return new is(1,16,12)},Fn=function(){return new en(1,1,1)},Fr=function(){return new ja(1,1,10)},di=function(){return new Fi(1,1,1,14)},ms=function(){return new Ja(1,1,6,12)};function pu(i){var e=[];return i.traverse(function(t){t.isMesh&&t.material&&!t.userData.noFlash&&(t.material=t.material.clone(),e.push(t.material))}),e}function rS(){var i=new vt,e=new vt;i.add(e);var t=Jt(8007196,{roughness:.6}),n=Jt(3806220),r=Jt(15259824,{roughness:.4}),s=ot(et("cap",ms),t,0,.5,0,e);s.scale.set(.17,.14,.13),s.rotation.x=.35;var a=ot(et("sph",ti),t,0,.72,.06,e);a.scale.set(.11,.1,.11),[-1,1].forEach(function(c){var u=ot(et("cone",Fr),n,c*.07,.83,.02,e);u.scale.set(.025,.12,.025),u.rotation.z=-c*.5;var l=ot(et("sph",ti),gn(16752672,2),c*.045,.74,.15,e);l.scale.setScalar(.018),l.userData.noFlash=!0;var h=new vt;h.position.set(c*.17,.58,.02),e.add(h);var f=ot(et("cap",ms),t,0,-.1,0,h);f.scale.set(.04,.09,.04);var p=ot(et("cone",Fr),r,0,-.26,.03,h);p.scale.set(.03,.07,.03),p.rotation.x=Math.PI,h.userData.side=c,e.userData["arm"+c]=h;var v=ot(et("cap",ms),n,c*.08,.18,0,e);v.scale.set(.05,.12,.05),e.userData["leg"+c]=v;var _=ot(et("cone",Fr),n,c*.06,.55,-.12,e);_.scale.set(.03,.09,.03),_.rotation.x=-1.2});var o=pu(i);return{obj:i,mats:o,animate:function(c,u){var l=c.state==="chase"||c.state==="flee"?Math.sin(u*9+c.animT):0;e.position.y=Math.abs(l)*.03,e.userData.leg1.rotation.x=l*.6,e.userData["leg-1"].rotation.x=-l*.6;var h=c.state==="windup"?1:0;e.userData.arm1.rotation.x=-l*.5-h*2.4,e.userData["arm-1"].rotation.x=l*.5-h*.4,e.rotation.x=c.state==="pain"?-.35:0}}}function sS(){var i=new vt,e=new vt;i.add(e);var t=Jt(12873850,{roughness:.55}),n=Jt(3803152),r=Jt(16051416,{roughness:.3}),s=ot(et("sph",ti),t,0,.36,0,e);s.scale.set(.34,.28,.32);var a=new vt;a.position.set(0,.3,.12),e.add(a);var o=ot(et("sph",ti),n,0,.04,.12,e);o.scale.set(.24,.1,.12),o.position.y=.33;for(var c=0;c<9;c++){var u=(c/8-.5)*2.4,l=ot(et("cone",Fr),r,Math.sin(u)*.22,.42,.14+Math.cos(u)*.14,e);l.scale.set(.028,.08,.028),l.rotation.x=Math.PI;var h=ot(et("cone",Fr),r,Math.sin(u)*.2,-.02,Math.cos(u)*.14+.02,a);h.scale.set(.025,.07,.025)}var f=ot(et("sph",ti),t,0,-.04,.02,a);f.scale.set(.26,.08,.22),[-1,1].forEach(function(v){var _=ot(et("sph",ti),gn(16752688,.9),v*.12,.56,.25,e);_.scale.setScalar(.02),_.userData.noFlash=!0;var g=ot(et("cap",ms),t,v*.18,.1,0,e);g.scale.set(.07,.07,.07),e.userData["leg"+v]=g});var p=pu(i);return{obj:i,mats:p,animate:function(v,_){var g=v.state==="chase"||v.state==="flee"?Math.sin(_*14+v.animT):0;e.position.y=Math.abs(g)*.04,e.userData.leg1.position.z=g*.08,e.userData["leg-1"].position.z=-g*.08;var m=v.state==="windup"?.7:(Math.sin(_*6+v.animT)+1)*.08;a.rotation.x=m,e.rotation.x=v.state==="windup"?.25:v.state==="pain"?-.3:0}}}function aS(){var i=new vt,e=new vt;i.add(e);var t=Jt(2367519,{roughness:.55,metalness:.3}),n=Jt(10122816,{roughness:.3,metalness:.85}),r=gn(16718384,4),s=ot(et("box",Fn),t,0,.82,0,e);s.scale.set(.5,.42,.3);var a=ot(et("box",Fn),n,0,.55,0,e);a.scale.set(.4,.16,.26);var o=ot(et("sph",ti),r,0,.84,.16,e);o.scale.setScalar(.07),o.userData.noFlash=!0;var c=ot(et("box",Fn),t,0,1.12,.02,e);c.scale.set(.2,.18,.2);var u=ot(et("box",Fn),gn(16722490,5),0,1.13,.12,e);u.scale.set(.15,.03,.02),u.userData.noFlash=!0,[-1,1].forEach(function(p){var v=ot(et("box",Fn),gn(16718384,2),p*.12,.82,.152,e);v.scale.set(.02,.36,.01),v.userData.noFlash=!0;var _=ot(et("sph",ti),t,p*.3,1,0,e);_.scale.set(.14,.1,.14);var g=new vt;g.position.set(p*.33,.95,0),e.add(g),e.userData["arm"+p]=g;var m=ot(et("box",Fn),t,0,-.25,0,g);m.scale.set(.13,.42,.13);var x=ot(et("box",Fn),n,0,-.5,.02,g);x.scale.set(.15,.13,.15);var E=ot(et("box",Fn),t,p*.13,.24,0,e);E.scale.set(.15,.48,.17),e.userData["leg"+p]=E});var l=ot(et("cone",Fr),n,0,1.33,.02,e);l.scale.set(.05,.24,.05);var h=new ke(new li(.12,.015,6,20),n);h.rotation.x=Math.PI/2,h.position.set(0,1.22,.02),e.add(h);var f=pu(i);return{obj:i,mats:f,animate:function(p,v){var _=p.state==="chase"?Math.sin(v*6+p.animT):0;e.userData.leg1.rotation.x=_*.4,e.userData["leg-1"].rotation.x=-_*.4,e.userData.arm1.rotation.x=p.state==="windup"?-2.2:-_*.3,e.userData["arm-1"].rotation.x=p.state==="windup"?-1.2:_*.3,e.position.y=Math.abs(_)*.03}}}function oS(){var i=new vt,e=new vt;i.add(e);var t=new Zt({color:665648,emissive:4184296,emissiveIntensity:1.2,transparent:!0,opacity:.82,roughness:.3,metalness:.2}),n=new Zt({color:0,emissive:10484991,emissiveIntensity:3}),r=ot(et("cap",ms),t,0,.58,0,e);r.scale.set(.13,.16,.09);var s=ot(et("box",Fn),t,0,.4,0,e);s.scale.set(.22,.08,.13);var a=ot(et("sph",ti),t,0,.86,0,e);a.scale.set(.085,.1,.09);var o=ot(et("box",Fn),n,0,.87,.07,e);o.scale.set(.12,.028,.02);var c=ot(et("sph",ti),n,0,.64,.08,e);c.scale.setScalar(.03),[-1,1].forEach(function(f){var p=new vt;p.position.set(f*.15,.72,0),e.add(p),e.userData["arm"+f]=p;var v=ot(et("cap",ms),t,0,-.14,0,p);v.scale.set(.035,.13,.035);var _=ot(et("cap",ms),t,f*.07,.18,0,e);_.scale.set(.045,.16,.045),e.userData["leg"+f]=_});var u=new ke(et("sph",ti),new Zt({color:0,emissive:16765502,emissiveIntensity:1.5,transparent:!0,opacity:.25,side:Sn,depthWrite:!1}));u.scale.setScalar(.62),u.position.y=.5,u.userData.noFlash=!0,i.add(u);var l=[t],h=new ke(new li(.34,.012,6,40),n);return h.rotation.x=Math.PI/2,h.position.y=.02,i.add(h),{obj:i,mats:l,animate:function(f,p){var v=f.state==="chase"?Math.sin(p*8+f.animT):0;e.userData.leg1.rotation.x=v*.5,e.userData["leg-1"].rotation.x=-v*.5,e.userData.arm1.rotation.x=f.state==="windup"?-1.5:-v*.4,e.userData["arm-1"].rotation.x=f.state==="windup"?-1.5:v*.4,e.position.y=.03+Math.sin(p*2)*.015;var _=f.state==="windup"&&f.attack!=="melee";n.emissive.setHex(_?16777215:10484991),n.emissiveIntensity=_?8:3,t.opacity=.7+Math.sin(p*23)*.06+(Math.random()<.02?-.3:0),u.visible=f.shieldT>0,u.rotation.y=p*1.5,h.scale.setScalar(1+Math.sin(p*3)*.05)}}}function lS(){var i=new vt,e=ot(et("cyl",di),Jt(2761250,{roughness:.3,metalness:.4}),0,.28,0,i);e.scale.set(.2,.55,.2),[.06,.28,.5].forEach(function(r){var s=ot(et("cyl",di),Jt(11042370,{metalness:.85,roughness:.3}),0,r,0,i);s.scale.set(.207,.035,.207)});var t=ot(et("cyl",di),gn(16718384,2.5),0,.56,0,i);t.scale.set(.16,.01,.16),t.userData.noFlash=!0;var n=ot(et("box",Fn),gn(16722490,2),0,.39,.2,i);return n.scale.set(.1,.1,.005),n.rotation.z=Math.PI/4,n.userData.noFlash=!0,{obj:i,mats:pu(i),animate:function(){}}}var cS={imp:rS,gnasher:sS,knight:aS,riley:oS,barrel:lS};function uS(i,e){!i||i.userData.ash||(i.userData.ash=!0,i.onBeforeCompile=function(t){t.uniforms.ashGlow={value:.9*e},t.vertexShader=`varying vec3 vAshP;
`+t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vAshP = position;`),t.fragmentShader=`varying vec3 vAshP; uniform float ashGlow;
`+t.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
{ float l = dot(diffuseColor.rgb, vec3(0.3, 0.55, 0.15)); diffuseColor.rgb = mix(vec3(l), diffuseColor.rgb, 0.12) * vec3(0.5, 0.46, 0.45) + 0.03; }`).replace("#include <emissivemap_fragment>",["#include <emissivemap_fragment>","{ vec3 q = vAshP * 7.0;","  float n = sin(q.x * 1.3 + sin(q.y * 1.7)) * sin(q.y * 1.1 + sin(q.z * 1.9)) * sin(q.z * 1.5 + sin(q.x * 1.2));","  float crack = smoothstep(0.07, 0.0, abs(n));","  totalEmissiveRadiance += vec3(1.0, 0.07, 0.14) * crack * ashGlow; }"].join(`
`))},i.customProgramCacheKey=function(){return"ash"+e},i.needsUpdate=!0)}function hS(i,e){var t=ps(i),n=new vt;t.obj.scale.setScalar(1/fu),n.add(t.obj);var r=[],s=[],a=t.obj.getObjectByName("shield"),o=e&&(e.kind==="imp"||e.kind==="gnasher"||e.kind==="knight");t.obj.traverse(function(f){f.isMesh&&(Array.isArray(f.material)?f.material:[f.material]).forEach(function(p){o&&uS(p,e.kind==="knight"?1.4:1),p.emissive&&p.emissiveIntensity>1.2&&(p.emissiveIntensity=1.2),/tell/i.test(p.name)||/tell/i.test(f.name)?s.push(p):p.emissive&&r.push(p)})});var c=null,u=null;function l(f,p){if(t.mixer){var v=Lo(t.clips,f)||(f==="attack_windup"?Lo(t.clips,"attack"):null)||Lo(t.clips,"idle");if(v){var _=t.mixer.clipAction(v);c!==_&&(_.reset(),_.setLoop(p?Hc:Uc,1/0),_.clampWhenFinished=!!p,_.play(),c&&c.crossFadeTo(_,.15,!1),c=_)}}}var h={idle:"idle",chase:"walk",flee:"walk",windup:"attack_windup",pain:"pain",die:"death",dead:"death"};return{obj:n,mats:r,animate:function(f,p,v){var _=f.state||"idle";_!==u&&(u==="windup"&&_==="chase"&&Lo(t.clips,"attack")?l("attack",!0):l(h[_]||"idle",_==="pain"||_==="die"||_==="dead"),u=_),c&&c.getClip().name&&/attack$/i.test(c.getClip().name)&&!c.isRunning()&&_==="chase"&&l("walk"),t.mixer&&t.mixer.update(v||0);var g=_==="windup"&&f.attack!=="melee";s.forEach(function(m){m.emissive&&(m.emissive.setHex(g?16777215:10484991),m.emissiveIntensity=g?6:2)}),a&&(a.visible=f.shieldT>0)},authored:!0,clip:function(){return c?c.getClip().name:null}}}function F0(i,e){var t=e&&e.model(i.kind),n=t?hS(t,i):cS[i.kind](),r=!t&&i.kind==="riley"?i.h/.95:1;n.obj.scale.setScalar(r);var s=0,a=n.animate;return n.debug=function(){return{kind:i.kind,authored:!!n.authored,clip:n.clip?n.clip():null,state:i.state}},n.update=function(o,c,u){n.obj.position.set(i.x,i.y,i.z);var l=i.state==="windup"||i.state==="pain"||i.los?u:i.moveAng||0,h=n.obj.rotation.y,f=-l+Math.PI/2,p=Math.atan2(Math.sin(f-h),Math.cos(f-h));if(n.obj.rotation.y=h+p*Math.min(1,c*10),n.authored)a(i,o,c);else if(i.state==="die"||i.state==="dead"){s+=c;var v=Math.min(1,s/.45);n.obj.rotation.x=-v*1.35,n.obj.position.y=i.y+.05*v,n.obj.scale.setScalar(r*(1-v*.15)),i.kind==="riley"&&(n.obj.visible=s*12%1<.6&&s<1.4)}else a(i,o);var _=i.flashT>0&&i.state!=="dead";n.mats.forEach(function(g){g.userData.base||(g.userData.base={e:g.emissive?g.emissive.getHex():0,i:g.emissiveIntensity}),_?(g.emissive.setHex(16777215),g.emissiveIntensity=1.4):(g.emissive.setHex(g.userData.base.e),g.emissiveIntensity=g.userData.base.i)})},n}function B0(i,e){var t=new vt,n=new vt;t.add(n);var r=i.item,s=e&&e.model("pickup:"+r);if(s){var a=ps(s);a.obj.scale.setScalar(1/fu),n.add(a.obj)}else if(r==="h"||r==="+"){var o=r==="+",c=et("oct",function(){return new Ir(1,0)}),u=ot(et("cyl",di),Jt(10122816,{metalness:.85,roughness:.35}),0,.03,0,n);u.scale.set(o?.13:.08,.03,o?.13:.08);var l=ot(c,gn(16765040,2.4),0,o?.2:.14,0,n);l.scale.set(o?.09:.055,o?.16:.1,o?.09:.055),o&&[-1,1].forEach(function(L){var U=ot(c,gn(16771248,2),L*.1,.1,0,n);U.scale.set(.04,.07,.04)})}else if(r==="b"){var h=ot(et("cyl",di),Jt(11569736,{metalness:.85,roughness:.3}),0,.09,0,n);h.scale.set(.05,.16,.05);var f=ot(et("cyl",di),gn(9433343,2),0,.09,0,n);f.scale.set(.052,.07,.052)}else if(r==="a"){var p=ot(et("box",Fn),Jt(5914148,{roughness:.7}),0,.09,0,n);p.scale.set(.3,.18,.18);var v=ot(et("box",Fn),Jt(11569736,{metalness:.85,roughness:.3}),0,.09,0,n);v.scale.set(.31,.04,.185);for(var _=0;_<4;_++){var g=ot(et("cyl",di),Jt(14725200,{metalness:.9,roughness:.25}),-.1+_*.066,.2,0,n);g.scale.set(.026,.06,.026)}}else if(r==="A"){var m=ot(et("box",Fn),Jt(11569736,{metalness:.85,roughness:.3}),0,.2,0,n);m.scale.set(.34,.36,.14);var x=ot(et("oct",function(){return new Ir(1,0)}),gn(9433343,1.8),0,.26,.075,n);x.scale.set(.07,.07,.02)}else if(r==="2"){var E=kf(!0);E.scale.setScalar(.9),E.rotation.z=.2,E.position.y=.15,n.add(E)}else if(r==="r"||r==="u"){var y=r==="r"?16722458:3832575,R=ot(et("oct",function(){return new Ir(1,0)}),gn(y,2.5),0,.22,0,n);R.scale.set(.09,.15,.05);var A=ot(et("box",Fn),Jt(11569736,{metalness:.85,roughness:.3}),0,.22,0,n);A.scale.set(.12,.03,.07)}else if(r==="P"){var P=ot(et("sph",ti),gn(16756800,4),0,.3,0,n);P.scale.setScalar(.14);var M=new ke(new li(.2,.012,6,32),gn(16765502,3));M.position.y=.3,n.add(M)}var T=r==="r"||r==="u"||r==="P"||r==="2"||r==="h"||r==="+";return{obj:t,update:function(L){t.position.set(i.x,i.y,i.z),t.visible=!i.gone,T&&(n.rotation.y=L*1.8+i.bob),n.position.y=T?.08+Math.sin(L*2.5+i.bob)*.05:0}}}function k0(i,e){var t=new vt,n=e&&e.model("torch");if(n){var r=ps(n);return r.obj.scale.setScalar(1/fu),t.add(r.obj),t.position.set(i.x,i.y,i.z),{obj:t,update:function(l){r.mixer&&r.mixer.update(1/60)}}}var s=ot(et("cyl",di),Jt(3811866,{metalness:.3}),0,.4,0,t);s.scale.set(.03,.8,.03);var a=ot(et("cyl",di),Jt(5917242,{metalness:.6,roughness:.4}),0,.82,0,t);a.scale.set(.1,.06,.1);var o=new vt;o.position.y=.9,t.add(o);var c=ot(et("cone",Fr),gn(16747040,5),0,.08,0,o);c.scale.set(.08,.2,.08);var u=ot(et("cone",Fr),gn(16769120,6),0,.05,0,o);return u.scale.set(.045,.12,.045),t.position.set(i.x,i.y,i.z),{obj:t,update:function(l){var h=Math.sin(l*17+i.animT*9)*.5+Math.sin(l*29+i.animT*3)*.5;o.scale.set(1+h*.1,1+h*.25,1+h*.1),o.rotation.y=l*3}}}var fS=function(i,e,t,n){return new ou(i,e,t,3,n)};function Nn(i,e,t,n,r){return et("rb"+i,function(){return fS(e,t,n,r)})}var z0=function(){return Jt(6961690,{roughness:.55,metalness:.05})},du=function(){return Jt(2760988,{roughness:.85})},G0=function(){return Jt(4863014,{roughness:.9})},V0=function(){return Jt(11569736,{metalness:.9,roughness:.3})},W0=function(){return Jt(5125664,{metalness:.85,roughness:.4})};function q0(i,e){var t=!1;i.traverse(function(n){/hand|arm|glove/i.test(n.name)&&(t=!0)}),!t&&(e==="shotgun"||e==="chaingun"||e==="rocket"?(xa(i,.01,-.07,.08,.4),xa(i,-.01,-.05,-.2,.1)):e!=="fist"&&xa(i,0,-.06,.02,.3))}function xa(i,e,t,n,r){var s=new vt;s.position.set(e,t,n),s.rotation.x=r||0,i.add(s);var a=new ke(Nn("palm",.07,.05,.09,.02),du());s.add(a);var o=new ke(Nn("fing",.075,.03,.05,.012),du());o.position.set(0,-.03,-.03),s.add(o);var c=new ke(et("cyl",di),G0());return c.scale.set(.045,.28,.045),c.rotation.x=Math.PI/2-.15,c.position.set(.01,-.02,.17),s.add(c),s}function kf(i){var e=new vt,t=V0(),n=W0(),r=z0(),s=new ke(et("cyl",di),t);s.scale.set(.026,.46,.026),s.rotation.x=Math.PI/2,s.position.set(0,0,-.33),e.add(s),[-.2,-.33,-.46].forEach(function(_){var g=new ke(et("ring",function(){return new li(.031,.007,6,18)}),n);g.position.set(0,0,_),e.add(g)});var a=new ke(et("bell",function(){return new Fi(.03,.078,.13,20,1,!0)}),Jt(13146704,{metalness:.9,roughness:.25,side:Sn}));a.rotation.x=Math.PI/2,a.position.set(0,0,-.62),e.add(a);var o=new ke(et("lip",function(){return new li(.078,.008,6,24)}),n);o.position.set(0,0,-.685),e.add(o);var c=new ke(et("sph",ti),gn(16762976,1.4));c.scale.set(.028,.028,.01),c.position.set(0,0,-.57),e.add(c);var u=new vt;u.position.set(0,-.036,-.28),e.add(u),e.userData.pump=u;var l=new ke(Nn("fore",.064,.048,.19,.015),r);u.add(l),[-.06,.06].forEach(function(_){var g=new ke(Nn("band",.068,.052,.014,.004),t);g.position.z=_,u.add(g)});var h=new ke(Nn("recv",.078,.09,.2,.014),t);h.position.set(0,-.012,.02),e.add(h),[-1,1].forEach(function(_){var g=new ke(Nn("win",.006,.04,.08,.003),gn(16762976,1.8));g.position.set(_*.04,-.005,.02),e.add(g)});var f=new ke(new li(.025,.005,6,14,Math.PI),n);f.position.set(0,-.058,.07),f.rotation.set(0,Math.PI/2,Math.PI),e.add(f);var p=new ke(Nn("stock",.062,.1,.27,.02),r);p.position.set(0,-.055,.24),p.rotation.x=-.14,e.add(p);var v=new ke(Nn("cap",.066,.104,.02,.006),t);return v.position.set(0,-.075,.37),v.rotation.x=-.14,e.add(v),i||(e.userData.pumpHand=xa(u,-.005,-.045,.01,.1),xa(e,.01,-.08,.1,.4)),e}function X0(){var i=new vt,e=V0(),t=W0(),n=new ke(Nn("slide",.042,.04,.18,.01),e);n.position.set(0,.02,-.07),i.add(n),i.userData.slide=n;for(var r=0;r<3;r++){var s=new ke(et("coil",function(){return new li(.024,.005,6,16)}),Jt(12085306,{metalness:.9,roughness:.3}));s.position.set(0,0,-.02-r*.03),n.add(s)}var a=new ke(Nn("frame",.036,.03,.15,.008),t);a.position.set(0,-.012,-.055),i.add(a);var o=new ke(et("oct",function(){return new Ir(1,0)}),gn(9433343,2.2));o.scale.set(.014,.014,.03),o.position.set(0,.02,-.175),i.add(o);var c=new ke(Nn("pgrip",.036,.11,.05,.012),z0());c.position.set(0,-.07,.01),c.rotation.x=.28,i.add(c);var u=new ke(Nn("pom",.04,.014,.054,.005),e);u.position.set(0,-.123,.026),u.rotation.x=.28,i.add(u);var l=new ke(new li(.018,.004,6,14,Math.PI),t);l.position.set(0,-.03,-.035),l.rotation.set(0,Math.PI/2,Math.PI),i.add(l);var h=new ke(Nn("sight",.006,.01,.01,.002),gn(9433343,1.5));return h.position.set(0,.046,-.14),i.add(h),xa(i,0,-.07,.04,.3),i}function Y0(){var i=new vt,e=new ke(Nn("fist",.1,.085,.11,.03),du());i.add(e);var t=new ke(Nn("knuck",.105,.04,.03,.012),Jt(5917242,{metalness:.7,roughness:.35}));t.position.set(0,.02,-.06),i.add(t);var n=new ke(Nn("thumb",.03,.03,.06,.012),du());n.position.set(-.05,-.01,-.02),i.add(n);var r=new ke(et("cyl",di),G0());return r.scale.set(.05,.3,.05),r.rotation.x=Math.PI/2,r.position.set(0,-.01,.2),i.add(r),i}var ni=3e3;function zf(i,e){var t;if(typeof document!="undefined"){var n=document.createElement("canvas");n.width=n.height=i,e(n.getContext("2d"),i),t=new Rr(n)}else t=new on;return t.colorSpace=qt,t.magFilter=Xt,t}var dS=zf(32,function(i,e){var t=i.createRadialGradient(e/2,e/2,1,e/2,e/2,e/2);t.addColorStop(0,"rgba(0,0,0,1)"),t.addColorStop(.28,"rgba(10,8,6,0.95)"),t.addColorStop(.55,"rgba(30,24,18,0.55)"),t.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=t,i.fillRect(0,0,e,e),i.strokeStyle="rgba(190,175,150,0.55)",i.lineWidth=1.5,i.beginPath(),i.arc(e/2,e/2,e*.2,0,6.28),i.stroke();for(var n=0;n<9;n++){var r=Math.random()*6.28,s=5+Math.random()*6;i.fillStyle=n%3?"rgba(20,16,12,0.7)":"rgba(200,185,160,0.6)",i.fillRect(e/2+Math.cos(r)*s,e/2+Math.sin(r)*s,2,2)}}),pS=zf(32,function(i,e){var t=i.createRadialGradient(e/2,e/2,1,e/2,e/2,e/2);t.addColorStop(0,"rgba(18,16,15,0.85)"),t.addColorStop(.6,"rgba(30,27,25,0.5)"),t.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=t,i.fillRect(0,0,e,e);for(var n=0;n<14;n++){var r=Math.random()*6.28,s=4+Math.random()*11;i.fillStyle=n%4?"rgba(70,64,60,0.8)":"rgba(150,140,130,0.7)",i.fillRect(e/2+Math.cos(r)*s,e/2+Math.sin(r)*s,2,2)}}),K0=zf(64,function(i,e){i.translate(e/2,e/2);for(var t=0;t<8;t++){var n=t%2?e*.22:e*.48;i.rotate(Math.PI/4);var r=i.createLinearGradient(0,0,n,0);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.4,"rgba(230,230,230,0.85)"),r.addColorStop(1,"rgba(160,160,160,0)"),i.fillStyle=r,i.beginPath(),i.moveTo(0,-e*.05),i.lineTo(n,0),i.lineTo(0,e*.05),i.fill()}var s=i.createRadialGradient(0,0,0,0,0,e*.2);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(1,"rgba(200,200,200,0)"),i.fillStyle=s,i.beginPath(),i.arc(0,0,e*.2,0,6.28),i.fill()});function Z0(i){var e=new Float32Array(ni*3),t=new Float32Array(ni*3),n=new Float32Array(ni),r=new Float32Array(ni),s=new Float32Array(ni*3),a=new Float32Array(ni),o=new Float32Array(ni),c=new Float32Array(ni),u=new Float32Array(ni),l=new Float32Array(ni*3),h=new Uint8Array(ni),f=new Kt;f.setAttribute("position",new Qt(e,3).setUsage(oa)),f.setAttribute("color",new Qt(t,3).setUsage(oa)),f.setAttribute("size",new Qt(n,1).setUsage(oa)),f.setAttribute("alpha",new Qt(r,1).setUsage(oa));var p=new tn({uniforms:{scale:{value:600}},vertexShader:["attribute float size; attribute float alpha; attribute vec3 color; varying vec3 vC; varying float vA;","uniform float scale;","void main(){ vC = color; vA = alpha; vec4 mv = modelViewMatrix * vec4(position,1.0);"," gl_PointSize = size * scale / -mv.z; gl_Position = projectionMatrix * mv; }"].join(`
`),fragmentShader:["varying vec3 vC; varying float vA;","void main(){ vec2 d = gl_PointCoord - 0.5; float r = dot(d,d); if (r > 0.25) discard;"," float k = smoothstep(0.25, 0.0, r); gl_FragColor = vec4(vC * k * vA, k * vA); }"].join(`
`),transparent:!0,depthWrite:!1,blending:Vi}),v=new ns(f,p);v.frustumCulled=!1,i.add(v);var _=0,g=0;function m(X,Q,xe,Me,le,se,te,ye,De,Ke,q,dt){var Ge=_;_=(_+1)%ni,g=Math.min(ni,g+1),e[Ge*3]=X,e[Ge*3+1]=Q,e[Ge*3+2]=xe,s[Ge*3]=Me,s[Ge*3+1]=le,s[Ge*3+2]=se,l[Ge*3]=te[0],l[Ge*3+1]=te[1],l[Ge*3+2]=te[2],n[Ge]=ye,a[Ge]=o[Ge]=De,c[Ge]=Ke||0,u[Ge]=q||0,h[Ge]=dt?0:1}function x(X){return(Math.random()-.5)*2*X}for(var E=[],y=0;y<6;y++){var R=new Gn(16755285,0,6,1.6);R.userData={t:0,max:0,peak:0},i.add(R),E.push(R)}var A=0;function P(X,Q,xe,Me,le,se,te){var ye=E[A];A=(A+1)%E.length,ye.position.set(X,Q,xe),ye.color.setHex(Me),ye.distance=te||6,ye.userData.t=ye.userData.max=se,ye.userData.peak=le}var M=new Jn(1,1),T=[],L=0,U=180,D=new mn({map:dS,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),Y=new mn({map:pS,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});function V(X,Q,xe,Me,le,se,te,ye){var De=T[L];De||(De=new ke(M,ye),De.renderOrder=1,i.add(De),T[L]=De),De.material=ye,De.position.set(X+Me*.004,Q+le*.004,xe+se*.004),De.lookAt(X+Me,Q+le,xe+se),De.rotateZ(Math.random()*6.28),De.scale.setScalar(te),De.visible=!0,L=(L+1)%U}function C(X){if(X.surface==="floor")return[0,1,0];if(X.surface==="ceil")return[0,-1,0];var Q=X.x-Math.round(X.x),xe=X.z-Math.round(X.z);return Math.abs(Q)<Math.abs(xe)?[X.dx>0?-1:1,0,0]:[0,0,X.dz>0?-1:1]}for(var N=new mn({color:14219519,transparent:!0,opacity:.9,blending:Vi,depthWrite:!1}),I=new en(.012,.012,1),O=[],W=0,ee=0;ee<24;ee++){var ne=new ke(I,N.clone());ne.visible=!1,ne.userData.t=0,i.add(ne),O.push(ne)}function Ae(X){var Q=X.x2-X.x,xe=X.y2-X.y,Me=X.z2-X.z,le=Math.sqrt(Q*Q+xe*xe+Me*Me);if(!(le<1)){var se=Math.min(.9,le*.2),te=Math.min(le-se,2.5+Math.random()*2),ye=se+Math.random()*Math.max(0,le-se-te),De=O[W];W=(W+1)%O.length;var Ke=Q/le,q=xe/le,dt=Me/le,Ge=ye+te/2;De.position.set(X.x+Ke*Ge,X.y-.08+q*Ge,X.z+dt*Ge),De.lookAt(X.x+Ke*(Ge+1),X.y-.08+q*(Ge+1),X.z+dt*(Ge+1)),De.scale.set(1,1,te),De.visible=!0,De.userData.t=.05,De.material.opacity=.9}}var Ne=new Fi(.012,.012,.04,6),lt=new Fi(.02,.02,.07,8),qe=new Zt({color:13146688,metalness:.9,roughness:.3}),ct=new Zt({color:10118184,metalness:.8,roughness:.35}),me=[],_e=0,we=[];function it(X){var Q=me[_e];Q||(Q=new ke(Ne,qe),i.add(Q),me[_e]=Q);var xe=X.weapon==="shotgun";Q.geometry=xe?lt:Ne,Q.material=xe?ct:qe;var Me=-Math.sin(X.ang),le=Math.cos(X.ang);Q.position.set(X.x+Math.cos(X.ang)*.25+Me*.12,X.y,X.z+Math.sin(X.ang)*.25+le*.12),Q.userData={vx:Me*(1.4+Math.random())+Math.cos(X.ang)*.3,vy:1.6+Math.random()*.8,vz:le*(1.4+Math.random())+Math.sin(X.ang)*.3,spin:10+Math.random()*10,life:6,bounced:0},Q.visible=!0,_e=(_e+1)%30}var ze={blood:function(X){for(var Q=X.kill?18:10,xe=0;xe<Q;xe++)m(X.x,X.y,X.z,-X.dx*(1.2+Math.random()*1.6)+x(1.2),x(1)+1,-X.dz*(1.2+Math.random()*1.6)+x(1.2),[.16,.14,.13],.05+Math.random()*.05,.7,6);for(var Me=0;Me<6;Me++)m(X.x,X.y,X.z,-X.dx*2+x(2),x(1.5)+.8,-X.dz*2+x(2),[1.8,.12,.22],.025,.25,7);for(var le=0;le<(X.kill?10:3);le++)m(X.x+x(.1),X.y,X.z+x(.1),x(.3),.6+Math.random()*.8,x(.3),[1.8,1.6,1.1],.035,.8,-.6);P(X.x,X.y,X.z,16722490,X.kill?1.6:.8,.06,2),X.floorY!==void 0&&(X.kill||Math.random()<.35)&&V(X.x-X.dx*.5+x(.3),X.floorY+.002,X.z-X.dz*.5+x(.3),0,1,0,X.kill?.8:.45,Y)},spark:function(X){for(var Q=0;Q<12;Q++)m(X.x,X.y,X.z,x(3),x(3)+1,x(3),[1.4,1.1,.5],.025,.35,8);P(X.x,X.y,X.z,10484991,2,.1,3)},puff:function(X){var Q=C(X),xe=X.cell===3||X.cell===4||X.cell===6||X.cell===7||X.cell===8;V(X.x,X.y,X.z,Q[0],Q[1],Q[2],.09+Math.random()*.04,D);for(var Me=xe?12:5,le=0;le<Me;le++)m(X.x,X.y,X.z,Q[0]*2+x(2),Q[1]*2+x(1.5)+1,Q[2]*2+x(2),[1.8,1.2,.5],.018,.2+Math.random()*.15,7);for(var se=xe?[.3,.3,.32]:[.36,.3,.24],te=0;te<(xe?3:7);te++)m(X.x,X.y,X.z,Q[0]*.6+x(.3),Q[1]*.6+x(.3)+.2,Q[2]*.6+x(.3),se,.1,.6+Math.random()*.4,-.2,.35);xe&&P(X.x+Q[0]*.1,X.y+Q[1]*.1,X.z+Q[2]*.1,16760944,1.2,.05,2)},tracer:function(X){Ae(X)},casing:function(X){X.delay?we.push({t:X.delay,e:X}):it(X)},muzzle:function(X){var Q=X.weapon==="shotgun";P(X.x,X.y,X.z,Q?16760928:10479871,Q?7:4,.07,Q?9:6);for(var xe=0;xe<(Q?8:3);xe++)m(X.x,X.y+.05,X.z,x(.15),.25+Math.random()*.3,x(.15),[.2,.19,.18],.06,.9+Math.random()*.5,-.3,.12)},fireBurst:function(X){for(var Q=0;Q<22;Q++)m(X.x,X.y,X.z,x(2),x(2)+.5,x(2),Q%3?[1.8,.14,.24]:[2,1.2,1.1],.06,.35,2,-.1);P(X.x,X.y,X.z,16722490,4,.25,5)},greenBurst:function(X){for(var Q=0;Q<22;Q++)m(X.x,X.y,X.z,x(2),x(2)+.5,x(2),[.3,1.6,1.8],.06,.35,2,-.1);P(X.x,X.y,X.z,6287615,4,.25,5)},explosion:function(X){for(var Q=0;Q<90;Q++){var xe=Math.random()<.5;m(X.x,X.y,X.z,x(4),x(3)+2,x(4),xe?[2,1.3,1.1]:[1.7,.1,.2],.12+Math.random()*.1,.5+Math.random()*.4,3,.4)}for(var Me=0;Me<30;Me++)m(X.x,X.y+.3,X.z,x(1),Math.random()*1.5,x(1),[.18,.15,.13],.35,1.4,-.5,.6);P(X.x,X.y+.5,X.z,16726600,14,.5,9)},gib:function(X){for(var Q=0;Q<30;Q++)m(X.x+x(.2),X.y,X.z+x(.2),x(1.6),Math.random()*2,x(1.6),[.15,.13,.12],.07+Math.random()*.06,1.1,5,.2);if(X.kind!=="riley"){for(var xe=0;xe<28;xe++)m(X.x+x(.25),X.y-.2+Math.random()*.5,X.z+x(.25),x(.25),1.2+Math.random()*1.6,x(.25),xe%5?[1.5,1.3,.9]:[.5,1.3,1.6],.03+Math.random()*.025,1.2+Math.random()*.6,-.8);P(X.x,X.y+.4,X.z,16773320,2,.4,4)}if(X.kind==="riley")for(var Me=0;Me<60;Me++)m(X.x,X.y+Math.random(),X.z,x(1),Math.random()*1.5,x(1),[.3,1.5,1.7],.04,1.4,-.4)},summon:function(X){for(var Q=0;Q<50;Q++)m(X.x+x(.4),X.y,X.z+x(.4),x(.5),Math.random()*2.5,x(.5),[1.8,.12,.22],.07,.8,-1);P(X.x,X.y+.5,X.z,16722490,6,.6,6)},pickup:function(X){for(var Q=0;Q<16;Q++)m(X.x,X.y,X.z,x(1),Math.random()*1.5,x(1),[1.4,1.2,.5],.03,.5,-1)}},nt={points:v,stats:function(){return{decals:T.filter(function(X){return X&&X.visible}).length,tracers:O.filter(function(X){return X.visible}).length,casings:me.filter(function(X){return X&&X.visible}).length}},event:function(X){ze[X.name]&&ze[X.name](X)},trail:function(X,Q,xe,Me){m(X,Q,xe,x(.2),x(.2),x(.2),Me?[.3,1.4,1.6]:[1.8,.12,.22],.07,.3,0,-.15)},ember:function(X,Q,xe){m(X+x(.05),Q,xe+x(.05),x(.15),.4+Math.random()*.4,x(.15),[1.6,.6,.1],.02,1.1,-.2)},update:function(X,Q,xe){O.forEach(function(te){te.visible&&(te.userData.t-=X,te.material.opacity=Math.max(0,te.userData.t/.05)*.9,te.userData.t<=0&&(te.visible=!1))});for(var Me=we.length-1;Me>=0;Me--)(we[Me].t-=X)<=0&&(it(we[Me].e),we.splice(Me,1));me.forEach(function(te){if(!(!te||!te.visible)){var ye=te.userData;if(ye.life-=X,ye.life<=0){te.visible=!1;return}ye.vy-=9*X,te.position.x+=ye.vx*X,te.position.y+=ye.vy*X,te.position.z+=ye.vz*X,te.rotation.x+=ye.spin*X,te.rotation.z+=ye.spin*.7*X;var De=xe?xe(te.position.x,te.position.z):0;te.position.y<De+.012&&(te.position.y=De+.012,ye.vy<-.5&&ye.bounced<3?(ye.vy=-ye.vy*.35,ye.vx*=.5,ye.vz*=.5,ye.spin*=.5,ye.bounced++,nt.onTink&&nt.onTink(te.position)):(ye.vy=0,ye.vx*=.8,ye.vz*=.8,ye.spin*=.8,te.rotation.x=Math.PI/2))}}),p.uniforms.scale.value=Q;for(var le=0;le<g;le++){if(a[le]<=0){r[le]=0;continue}a[le]-=X,s[le*3+1]-=c[le]*X,e[le*3]+=s[le*3]*X,e[le*3+1]+=s[le*3+1]*X,e[le*3+2]+=s[le*3+2]*X;var se=Math.max(0,a[le]/o[le]);r[le]=h[le]?se:1,n[le]=Math.max(.005,n[le]+u[le]*X),t[le*3]=l[le*3],t[le*3+1]=l[le*3+1]*(.5+.5*se),t[le*3+2]=l[le*3+2]*se}f.attributes.position.needsUpdate=f.attributes.color.needsUpdate=f.attributes.size.needsUpdate=f.attributes.alpha.needsUpdate=!0,f.setDrawRange(0,g),E.forEach(function(te){var ye=te.userData;ye.t>0?(ye.t-=X,te.intensity=ye.peak*Math.max(0,ye.t/ye.max)):te.intensity=0})}};return nt}var J0={slab:788743,tech:395532,hell:1443332};function j0(i,e){e=e||{};var t=new Wc({canvas:i,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!e.preserve}),n={scale:1,bloom:!0,shake:!0,weapon:!0},r=78;function s(){return Math.min(window.devicePixelRatio||1,1.5)*n.scale}t.setPixelRatio(s()),t.toneMapping=ls,t.toneMappingExposure=1.45;var a=new ha(t),o=a.fromScene(new $c,.04).texture;t.outputColorSpace=qt,t.shadowMap.enabled=!1,t.info.autoReset=!1;var c=new sn(78,16/9,.03,60);c.rotation.order="YXZ";var u=null,l=null,h=null,f=null,p=null,v=new Map,_=[],g=new Map,m=[],x=new wr,E=new sn(60,16/9,.01,5),y=new Gn(16756848,0,3,1.5),R=new as(16767152,1.2);R.position.set(-1,2,1),x.add(new ea(16777215,.35),new $s(16769216,2103312,.8),y,R),x.environment=o,x.environmentIntensity=.6;var A=Bf(),P=new vt,M={};x.add(P);var T={fist:{p:[.14,-.15,-.3],ry:0},pistol:{p:[.15,-.14,-.38],ry:.06},shotgun:{p:[.1,-.13,-.2],ry:.04},chaingun:{p:[.12,-.15,-.22],ry:.04},rocket:{p:[.13,-.16,-.2],ry:.04}},L={fist:Y0,pistol:X0,shotgun:kf};function U(){Object.keys(M).forEach(function(Q){P.remove(M[Q])}),M={},Object.keys(T).forEach(function(Q){var xe=A.model(Q),Me;if(xe&&!D(xe,Q)&&(xe=null),xe){Me=new vt;var le=ps(xe);Me.add(le.obj),le.obj.rotation.y=Math.PI,le.obj.updateMatrixWorld(!0);var se=new Pn().setFromObject(le.obj,!0),te=se.max.z-se.min.z;Me.userData.authoredLength=te;var ye={fist:.2,pistol:.24,shotgun:.85,chaingun:.8,rocket:.9};te>.001&&ye[Q]&&le.obj.scale.multiplyScalar(ye[Q]/te),["pump","slide","barrels","tube"].forEach(function(Ke){var q=le.obj.getObjectByName(Ke);q&&(Me.userData[Ke]=q)}),Me.userData.authored=!0,q0(Me,Q)}else if(L[Q])Me=L[Q]();else return;var De=T[Q];Me.position.set(De.p[0],De.p[1],De.p[2]),Me.rotation.y=De.ry,Me.userData.baseZ=De.p[2],Me.visible=!1,P.add(Me),M[Q]=Me})}function D(Q,xe){var Me=new Pn().setFromObject(Q.scene,!0),le=Me.getSize(new J);if(!(Q.meta&&(Q.meta.view==="first-person"||Q.meta.firstPerson)))return!1;var se=le.z>=le.x&&le.z>=le.y*1.2&&le.z>.08&&le.z<1.6,te=!1;return Q.scene.traverse(function(ye){(/arm|hand|sleeve|glove/i.test(ye.name||"")||ye.material&&/skin|sleeve|glove|hand/i.test(ye.material.name||""))&&(te=!0)}),!se&&typeof console!="undefined"&&console.info("[assets] "+xe+" is not a first-person gun shape ("+le.x.toFixed(2)+" x "+le.y.toFixed(2)+" x "+le.z.toFixed(2)+" m); using the built-in one"),se&&!te}U();function Y(Q,xe){Q&&(Q.userData.z0===void 0&&(Q.userData.z0=Q.position.z),Q.position.z=Q.userData.z0+xe)}var V=new vt,C=new mn({map:K0,transparent:!0,blending:Vi,depthWrite:!1,side:Sn}),N=new ke(new Jn(1,1),C),I=new ke(new Jn(1,.6),C);I.rotation.y=Math.PI/2,I.position.z=-.25,V.add(N,I),V.scale.setScalar(.035);var O={pitch:0,vel:0,fov:0,roll:0,lastFire:1};x.add(V);var W=0,ee={x:0,y:0},ne=0,Ae=0,Ne=null,lt={w:1,h:1,top:0};function qe(Q){Ne=Q,u=new wr;var xe=J0[Q.L.floor]||J0.slab;u.background=new Qe(xe),u.fog=new za(xe,.032),u.environment=o,u.environmentIntensity=.25,u.add(new $s(10520696,2103840,.9)),u.add(new ea(5261384,.5)),f=E0(Q,A),u.add(f.group),p=Z0(u),p.onTink=function(se){e.onSound&&e.onSound("casingTink",se)},v.clear(),g.clear(),_=[],Q.ents.forEach(function(se){if(se.kind==="torch"){var te=k0(se,A);u.add(te.obj),v.set(se,te);var ye=new Gn(16747066,2.2,7.5,1.4);ye.position.set(se.x,se.y+1,se.z),ye.userData.e=se,u.add(ye),_.push(ye)}}),m=(Q.L.lights||[]).map(function(se){var te=new Gn(se.color||16777215,se.intensity||2,se.dist||10,1.3);return te.position.set(se.x,se.y||1.5,se.z),te.userData=se,u.add(te),te});var Me=Q.L.darkZones||[];function le(se){return Me.some(function(te){return se.x>=te[0]&&se.x<=te[2]+1&&se.z>=te[1]&&se.z<=te[3]+1})}me(Q).forEach(function(se){if(!le(se)){var te=new Gn(13154472,1.6+se.size*.02,4+Math.sqrt(se.size)*1.6,1.1);te.position.set(se.x,se.y,se.z),u.add(te);var ye=A.model("lamp");if(ye){var De=ps(ye);De.obj.scale.setScalar(.5),De.obj.position.set(se.x,se.y+.4,se.z),u.add(De.obj);return}var Ke=new vt,q=new ke(new en(.5,.05,.5),new Zt({color:0,emissive:16770752,emissiveIntensity:1.1})),dt=new ke(new en(.58,.1,.58),new Zt({color:2762790,metalness:.8,roughness:.4,wireframe:!0}));Ke.add(q,dt),Ke.position.set(se.x,se.y+.35,se.z),u.add(Ke)}}),l=new Zc(t),l.addPass(new Jc(u,c)),h=new ma(new at(256,256),.75,.55,.82),h.enabled=n.bloom,l.addPass(h),l.addPass(new jc),_e(i.clientWidth,i.clientHeight)}function ct(Q,xe,Me,le){var se=Math.floor(Me)*Q.mw+Math.floor(xe);return Q.cells[se]===0?Q.ceil[se]:le}function me(Q){for(var xe=Q.W,Me=new Uint8Array(xe.mw*xe.mh),le=[],se=0;se<xe.cells.length;se++)if(!(Me[se]||xe.cells[se]!==0)){var te=[se],ye=0,De=0,Ke=0,q=0;for(Me[se]=1;te.length;){var dt=te.pop(),Ge=dt%xe.mw,F=dt/xe.mw|0;ye+=Ge+.5,De+=F+.5,Ke=Math.max(Ke,xe.ceil[dt]),q++,[[1,0],[-1,0],[0,1],[0,-1]].forEach(function(b){var ie=Ge+b[0],ue=F+b[1],ge=ue*xe.mw+ie;ie<0||ue<0||ie>=xe.mw||ue>=xe.mh||Me[ge]||xe.cells[ge]!==0||(Me[ge]=1,te.push(ge))})}q>=3&&le.push({x:ye/q,z:De/q,y:ct(xe,ye/q,De/q,Ke)-.4,size:q})}return le}function _e(Q,xe){!Q||!xe||(t.setSize(Q,xe,!1),lt={w:Q,h:xe},c.aspect=Q/xe,c.updateProjectionMatrix(),E.aspect=Q/xe,E.updateProjectionMatrix(),l&&(l.setSize(Q,xe),h.resolution.set(Q/2,xe/2)))}function we(Q,xe,Me){var le=Q.p,se=new Set;Q.ents.forEach(function(te){if(te.kind==="torch"){v.get(te).update(xe),Math.random()<Me*6&&p.ember(te.x,te.y+1,te.z),se.add(te);return}if(te.kind==="proj"){var ye=g.get(te);ye||(ye=new ke(new is(.09,10,8),new mn({color:te.green?10484991:16726602})),u.add(ye),g.set(te,ye)),ye.position.set(te.x,te.y,te.z),p.trail(te.x,te.y,te.z,te.green),se.add(te);return}if(te.kind!=="part"){var De=v.get(te);if(!De){if(te.kind==="pickup")De=B0(te,A);else if(te.mob)De=F0(te,A);else return;u.add(De.obj),v.set(te,De)}te.kind==="pickup"?De.update(xe):De.update(xe,Me,Math.atan2(le.z-te.z,le.x-te.x)),se.add(te)}}),v.forEach(function(te,ye){se.has(ye)||(u.remove(te.obj),v.delete(ye))}),g.forEach(function(te,ye){se.has(ye)||(u.remove(te),g.delete(ye))})}function it(Q){var xe=Ne.p;m.forEach(function(Me,le){var se=Me.userData,te=Ne.lightsOff&&Ne.lightsOff[se.id],ye=se.flicker?(Math.sin(Q*23+le)>.6?.15:1)*(.8+Math.random()*.2):1;Me.intensity=te?0:(se.intensity||2)*ye}),_.forEach(function(Me,le){var se=Me.userData.e,te=Math.sin(Q*13+le*7)*.12+Math.sin(Q*31+le*3)*.08+(Math.random()-.5)*.08,ye=(se.x-xe.x)*(se.x-xe.x)+(se.z-xe.z)*(se.z-xe.z)>400;Me.intensity=ye?0:2.2*(1+te)})}function ze(Q,xe,Me){var le=Q.p,se=Math.hypot(Q.input.vx||0,Q.input.vz||0);le.onGround&&se>.5&&(W+=Me*se*2.6);var te=le.onGround?Math.min(1,se/4):0,ye=Math.atan2(Math.sin(le.ang-ne),Math.cos(le.ang-ne)),De=le.pitch-Ae;ne=le.ang,Ae=le.pitch,ee.x+=(-ye*.6-ee.x)*Math.min(1,Me*8),ee.y+=(De*.6-ee.y)*Math.min(1,Me*8),Object.keys(M).forEach(function(B){M[B].visible=B===le.weapon&&!le.dead});var Ke=M[le.weapon];if(Ke){var q=le.fireT,dt=q<.12?Math.sin(q/.12*Math.PI):0,Ge=le.lowerT>0?1-le.lowerT/.15:le.raiseT>0?le.raiseT/.15:0,F=Q.input.strafe||0,b=se>4.2;O.roll+=(-F*.06-O.roll)*Math.min(1,Me*8);var ie=b?.03:0;if(P.position.set(Math.sin(W)*.014*te+ee.x*.1,-Math.abs(Math.sin(W))*.012*te+Math.sin(W*2)*.004*te+ee.y*.1-Ge*.25-le.landT*.12-ie,0),P.rotation.set(b?.12:0,b?-.15:0,O.roll),le.weapon==="fist")Ke.position.z=Ke.userData.baseZ-(q<.2?Math.sin(q/.2*Math.PI)*.18:0),Ke.rotation.x=q<.2?-Math.sin(q/.2*Math.PI)*.3:0;else{Ke.rotation.x=dt*(le.weapon==="shotgun"?.35:.2),Ke.position.z=Ke.userData.baseZ+dt*.05;var ue=q>.3&&q<.7?Math.sin((q-.3)/.4*Math.PI):0;Y(Ke.userData.pump,ue*.09),Y(Ke.userData.slide,dt*.04),Ke.userData.barrels&&(Ke.userData.barrels.rotation.z+=Me*(le.fireT<.3?30:0))}var ge=q<.06&&le.weapon!=="fist"&&!le.dead;V.visible=ge,V.position.set(Ke.position.x,Ke.position.y+(le.weapon==="shotgun"?0:.02),Ke.position.z-(le.weapon==="shotgun"?.72:.2)),V.scale.setScalar((le.weapon==="shotgun"?.2:.11)*(.8+Math.random()*.45)),N.rotation.z=Math.random()*Math.PI*2,C.color.setHex(le.weapon==="shotgun"?16765562:11071743),y.color.setHex(le.weapon==="shotgun"?16760944:10479871),q<O.lastFire&&le.weapon!=="fist"&&(O.vel+=le.weapon==="shotgun"?1.6:.55,O.fov=le.weapon==="shotgun"?3:.8),O.lastFire=q,O.vel-=O.pitch*180*Me,O.vel*=Math.exp(-Me*16),O.pitch+=O.vel*Me,O.fov*=Math.exp(-Me*10),y.intensity=ge?3:0,y.position.copy(V.position)}}function nt(Q,xe,Me,le){if(!le)return X(Q,xe,Me);var se=Math.random,te=12345;Math.random=function(){return te=te*1103515245+12345&2147483647,te/2147483647};try{return X(Q,xe,0)}finally{Math.random=se}}function X(Q,xe,Me){t.info.reset(),Q!==Ne&&qe(Q);var le=Q.p;f.update(),we(Q,xe,Me),it(xe),Q.events.forEach(function(ye){ye.t==="fx"&&p.event(ye)}),p.update(Me,lt.h*.9,function(ye,De){var Ke=Math.floor(ye),q=Math.floor(De);return Ke>=0&&q>=0&&Ke<Q.mw&&q<Q.mh?Q.W.floor[q*Q.mw+Ke]:0});var se=n.shake?Q.shake*.004:0;c.position.set(le.x+(Math.random()-.5)*se,le.y+le.eyeH+(Math.random()-.5)*se,le.z+(Math.random()-.5)*se),c.rotation.y=-Math.PI/2-le.ang,c.rotation.x=le.pitch+O.pitch,c.rotation.z=le.dead?Math.min(.5,le.deadT*.6):O.roll*.35;var te=r+O.fov;Math.abs(c.fov-te)>.01&&(c.fov=te,c.updateProjectionMatrix()),l.render(Me),t.autoClear=!1,t.clearDepth(),ze(Q,xe,Me),P.visible=n.weapon,t.render(x,E),t.autoClear=!0}return{setAssets:function(Q){A=Q,U(),Ne=null},setFov:function(Q){r=Q},setQuality:function(Q){for(var xe in Q)n[xe]=Q[xe];t.setPixelRatio(s()),h&&(h.enabled=n.bloom),_e(lt.w,lt.h)},assets:function(){return A},fxStats:function(){return p?p.stats():null},debugModels:function(){var Q=[];return v.forEach(function(xe){xe.debug&&Q.push(xe.debug())}),Q},render:nt,resize:_e,renderer:t,camera:c,info:function(){return t.info}}}var Ot=320,mS=200,kt=168,$0=32,Gf=kt/2,_a="#e03828",mu="#8a8478",Vf="#401008";function gS(i,e){var t=String(i).split(" "),n=[],r="";return t.forEach(function(s){var a=r?r+" "+s:s;a.length>e&&r?(n.push(r),r=s):r=a}),r&&n.push(r),n}function Br(i){i=i|0;var e=i/60|0,t=i%60;return e+":"+(t<10?"0":"")+t}function Q0(i,e,t){function n(m,x){return m.time*(x||3)%1<.55}function r(m,x,E){return E?n(m,3)?"#ffffff":_a:x?"#ff9a28":_a}function s(m){return m.dead?Ue.default.faces.dead:m.grinT>0?Ue.default.faces.grin:m.painT>.25?Ue.default.faces.pain:m.hp>=80?Ue.default.faces.ok:m.hp>=55?Ue.default.faces.hurt1:m.hp>=30?Ue.default.faces.hurt2:Ue.default.faces.hurt3}function a(m){var x=m.p;i.fillStyle="#3a352e",i.fillRect(0,kt,Ot,$0),i.fillStyle="#14110d",i.fillRect(0,kt,Ot,2),i.fillStyle="#57514a",i.fillRect(0,kt+2,Ot,1),i.fillStyle="#24211c",[46,116,142,178,230,250].forEach(function(P){i.fillRect(P,kt+4,1,$0-8)});var E=ba[x.weapon],y=E.ammo?x.ammo[E.ammo]:-1,R=E.ammo&&y<=(E.ammo==="shells"?4:10);Ue.default.drawText(i,"AMMO",8,kt+5,{color:y===0?_a:mu}),Ue.default.drawText(i,E.ammo?String(y):"--",40,kt+12,{scale:3,color:r(m,R,y===0),shadow:Vf,right:!0});var A=x.hp<=25;Ue.default.drawText(i,"HEALTH",54,kt+5,{color:A?_a:mu}),Ue.default.drawText(i,x.hp+"%",108,kt+12,{scale:3,color:r(m,x.hp<=50,A&&!x.dead),shadow:Vf,right:!0}),Ue.default.drawText(i,"ARMS",129,kt+5,{color:mu,center:!0}),ji.forEach(function(P,M){var T=119+M*8,L=x.weapons[P],U=(x.nextWeapon||x.weapon)===P,D=U?"#ffd23e":L?e.hasAmmo(x,P)?"#c8c0b0":"#6a5a4a":"#2a2620";Ue.default.drawText(i,String(M+1),T,kt+13,{scale:2,color:D}),U&&(i.fillStyle="#ffd23e",i.fillRect(T,kt+25,6,1))}),i.drawImage(s(x).canvas,148,kt+3),Ue.default.drawText(i,"ARMOR",184,kt+5,{color:mu}),Ue.default.drawText(i,x.armor+"%",226,kt+12,{scale:3,color:x.armor>0?_a:"#6a4a40",shadow:Vf,right:!0}),[["red","keyRed",5],["blue","keyBlue",18]].forEach(function(P){!x.keys[P[0]]&&!m.info.keys[P[0]]||(i.globalAlpha=x.keys[P[0]]?1:.18,i.drawImage(Ue.default.things[P[1]].canvas,236,kt+P[2]),i.globalAlpha=1)}),Ue.default.drawText(i,"SPRK "+x.ammo.bullets+"/200",254,kt+8,{color:E.ammo==="bullets"?"#ffd23e":"#c8c0b0"}),Ue.default.drawText(i,"BELL "+x.ammo.shells+"/50",254,kt+19,{color:x.weapons.shotgun?E.ammo==="shells"?"#ffd23e":"#c8c0b0":"#6a655c"})}function o(m){var x=Ot/2,E=Gf;if(t.crosshair){var y=e.aimTarget();i.fillStyle=y?y.barrel?"#ff9a28":"#ff4a2a":"rgba(232,224,200,0.8)",i.fillRect(x-5,E,3,1),i.fillRect(x+3,E,3,1),i.fillRect(x,E-5,1,3),i.fillRect(x,E+3,1,3)}var R=m.killT>0?"#ff3a1a":m.blockT>0?"#9aa4a8":m.hitT>0?"#ffffff":null;if(R){i.fillStyle=R;for(var A=m.killT>0?4:3,P=A;P<A+3;P++)i.fillRect(x-P,E-P,1,1),i.fillRect(x+P,E-P,1,1),i.fillRect(x-P,E+P,1,1),i.fillRect(x+P,E+P,1,1)}}function c(m){var x=m.p,E=Ot/2,y=Gf,R=34;m.hurtDirs.forEach(function(A){var P=A.ang-x.ang,M=Math.sin(P),T=-Math.cos(P),L=E+M*R,U=y+T*R;i.fillStyle="rgba(255,40,16,"+Math.min(.9,A.t).toFixed(3)+")",i.beginPath(),i.moveTo(L+M*9,U+T*9),i.lineTo(L-T*7,U+M*7),i.lineTo(L+T*7,U-M*7),i.closePath(),i.fill()})}function u(){var m=e.usePrompt();if(m){var x=Gf+14;if(m.verb){var E=Ue.default.textWidth(m.verb,1),y=13+E,R=(Ot-y)/2|0;i.fillStyle="rgba(0,0,0,0.55)",i.fillRect(R-3,x-3,y+6,13),i.fillStyle="#e8e0c8",i.fillRect(R,x-1,9,9),i.fillStyle="#14110d",i.fillRect(R+1,x,7,7),Ue.default.drawText(i,"E",R+3,x+1,{color:"#ffd23e"}),Ue.default.drawText(i,m.verb,R+13,x+1,{color:m.color,shadow:!0})}else{var A=Ue.default.textWidth(m.text,1);i.fillStyle="rgba(0,0,0,0.55)",i.fillRect((Ot-A)/2-4,x-3,A+8,13),Ue.default.drawText(i,m.text,Ot/2,x+1,{color:m.color,shadow:!0,center:!0})}}}function l(m,x){if(!(!t.goalMarker||!x)){var E=e.goalTarget();if(E){var y=m.p,R=Math.hypot(E.x-y.x,E.z-y.z);if(!(R<1.6)){var A={x:E.x,y:E.y,z:E.z},P=vS(x,A),M=m.time*2%1<.7?"#ffd23e":"#c89a20";if(i.fillStyle=M,i.beginPath(),P.inFront&&P.x>8&&P.x<Ot-8&&P.y>8&&P.y<kt-8){var T=Math.round(P.x),L=Math.round(P.y)-8;i.moveTo(T,L-4),i.lineTo(T+4,L),i.lineTo(T,L+4),i.lineTo(T-4,L),i.closePath(),i.fill(),Ue.default.drawText(i,String(Math.round(R*2))+"M",T,L+7,{color:M,shadow:!0,center:!0})}else{var U=Math.atan2(E.z-y.z,E.x-y.x)-y.ang;U=Math.atan2(Math.sin(U),Math.cos(U));var D=U>0,Y=D?Ot-6:6,V=40;i.moveTo(Y+(D?4:-4),V),i.lineTo(Y-(D?3:-3),V-5),i.lineTo(Y-(D?3:-3),V+5),i.closePath(),i.fill(),Ue.default.drawText(i,"GOAL",D?Ot-12:12,V-2,{color:M,shadow:!0,right:D})}}}}}function h(m){var x=m.p;if(!(x.dead||x.hp>25))for(var E=.18+.14*Math.sin(m.time*5),y=0;y<6;y++)i.fillStyle="rgba(200,0,0,"+(E*(1-y/6)).toFixed(3)+")",i.fillRect(y*2,0,2,kt),i.fillRect(Ot-y*2-2,0,2,kt),i.fillRect(0,y*2,Ot,2),i.fillRect(0,kt-y*2-2,Ot,2)}var f={imp:["A HOLLOW BURNED YOU DOWN.","TIP: STRAFE WITH A AND D TO SIDESTEP ITS EMBERS."],gnasher:["A HOLLOW HOUND RAN YOU DOWN.","TIP: BACK AWAY WHILE YOU SHOOT, OR JUMP UP WHERE IT CAN'T FOLLOW."],knight:["THE RESET WARDEN CRUSHED YOU.","TIP: KEEP YOUR DISTANCE AND BRING BELL CHARGES."],riley:["RILEY OUTPLAYED YOU.","TIP: WHEN HER VISOR FLASHES WHITE, SHE IS ABOUT TO SHOOT. MOVE!"],barrel:["A MERCURY CASK BURST IN YOUR FACE.","TIP: SHOOT CASKS FROM FAR AWAY, WHEN HOLLOWS ARE NEAR THEM."]};function p(m){var x=m.p;if(!(!x.dead||x.deadT<1)){var E=f[m.killer]||["YOU WERE OVERWHELMED.","TIP: FIGHT FROM HIGH GROUND SO HOLLOWS COME TO YOU ONE AT A TIME."];i.fillStyle="rgba(0,0,0,0.5)",i.fillRect(0,44,Ot,72),Ue.default.drawText(i,"KNOCKED DOWN",Ot/2,50,{scale:3,color:_a,shadow:!0,center:!0}),Ue.default.drawText(i,E[0],Ot/2,72,{color:"#e8e0c8",shadow:!0,center:!0}),Ue.default.drawText(i,E[1],Ot/2,84,{color:"#8fe0a0",shadow:!0,center:!0}),x.deadT>1.2&&m.time%1<.7&&Ue.default.drawText(i,"CLICK OR PRESS ENTER TO TRY AGAIN",Ot/2,100,{color:"#f0d848",shadow:!0,center:!0})}}function v(m){var x=4;m.msgs.forEach(function(y){var R=gS(y.text,78);y.t<.4&&(i.globalAlpha=Math.max(0,y.t/.4)),R.forEach(function(A){Ue.default.drawText(i,A,4,x,{color:y.color||"#f0d848",shadow:!0}),x+=7}),i.globalAlpha=1,x+=1});var E=m.notice;E&&(i.globalAlpha=Math.min(1,E.t/.4),Ue.default.drawText(i,E.text,Ot/2,50,{scale:2,color:E.color,shadow:!0,center:!0}),i.globalAlpha=1)}function _(m){var x=m.boss;if(!(!x||x.state==="idle"||x.state==="dead")){var E=140,y=(Ot-E)/2,R=kt-12,A=x.shieldT>0;Ue.default.drawText(i,A?"RILEY - SHIELDED":"RILEY",Ot/2,R-8,{color:A?"#ffd23e":"#6fe0ec",shadow:!0,center:!0}),i.fillStyle="#06141c",i.fillRect(y-1,R-1,E+2,6),i.fillStyle=A?"#ffd23e":"#3fd8c8",i.fillRect(y,R,Math.max(0,x.hp/x.maxHp)*E,4),i.fillStyle="#06141c",i.fillRect(y+E*.33,R,1,4),i.fillRect(y+E*.66,R,1,4)}}function g(m){i.fillStyle="rgba(0,0,0,0.8)",i.fillRect(0,0,Ot,kt);for(var x=22,E=kt-14,y=Math.min((Ot-16)/m.mw,(E-x)/m.mh),R=(Ot-m.mw*y)/2,A=x+(E-x-m.mh*y)/2,P=m.time*2%1<.6,M=0;M<m.mh;M++)for(var T=0;T<m.mw;T++){var L=M*m.mw+T,U=m.W.cells[L];if(m.seen[L]){var D=null;if(U===0){var Y=m.W.floor[L];D="rgb("+(40+Y*50|0)+","+(34+Y*40|0)+","+(28+Y*30|0)+")"}else U===6?D="#c8a030":U===11?D=m.doors[T+","+M].found?"#c8a030":"#6a655c":U===7?D="#ff3a2a":U===8?D="#4a7aff":U===9||U===10?D=P||U===10?"#58e068":"#1e5a26":D="#8a8478";i.fillStyle=D,i.fillRect(R+T*y,A+M*y,Math.max(1,y-.4),Math.max(1,y-.4))}}var V=e.goalTarget();if(V&&P){var C=R+V.x*y,N=A+V.z*y;i.fillStyle="#ffd23e",i.fillRect(C-3,N-3,7,1),i.fillRect(C-3,N+3,7,1),i.fillRect(C-3,N-3,1,7),i.fillRect(C+3,N-3,1,7)}var I=m.p,O=R+I.x*y,W=A+I.z*y,ee=Math.cos(I.ang),ne=Math.sin(I.ang);i.fillStyle="#f8f4e0",i.beginPath(),i.moveTo(O+ee*5,W+ne*5),i.lineTo(O-ee*3-ne*3,W-ne*3+ee*3),i.lineTo(O-ee*3+ne*3,W-ne*3-ee*3),i.closePath(),i.fill(),Ue.default.drawText(i,m.L.name,6,4,{color:"#ff9a28",shadow:!0}),Ue.default.drawText(i,"TAB: CLOSE",Ot-6,4,{color:"#8a8478",right:!0}),Ue.default.drawText(i,"GOAL: "+e.objective(),6,12,{color:"#f0d848",shadow:!0});var Ae=m.stats;Ue.default.drawText(i,"FREED "+Ae.kills+"/"+Ae.totalKills+"  ITEMS "+Ae.items+"/"+Ae.totalItems+"  SECRETS "+Ae.secrets+"/"+Ae.totalSecrets+"  TIME "+Br(m.time),Ot-6,12,{color:"#c8c0b0",right:!0}),Ue.default.drawText(i,"BRIGHTER FLOOR = HIGHER GROUND",6,kt-9,{color:"#a8a090"})}return{draw:function(m,x){i.clearRect(0,0,Ot,mS);var E=m.p;E.dmgFlash>0&&(i.fillStyle="rgba(255,20,10,"+(E.dmgFlash*.8).toFixed(3)+")",i.fillRect(0,0,Ot,kt)),E.bonusFlash>0&&(i.fillStyle="rgba(255,220,80,"+(E.bonusFlash*.7).toFixed(3)+")",i.fillRect(0,0,Ot,kt)),h(m),x.map?g(m):!E.dead&&!x.menu&&(c(m),l(m,x.camera),o(m),u()),x.map||_(m),v(m),p(m),a(m)}}}function vS(i,e){var t=i.matrixWorldInverse.elements,n=i.projectionMatrix.elements,r=e.x,s=e.y,a=e.z,o=t[0]*r+t[4]*s+t[8]*a+t[12],c=t[1]*r+t[5]*s+t[9]*a+t[13],u=t[2]*r+t[6]*s+t[10]*a+t[14],l=n[0]*o+n[4]*c+n[8]*u+n[12],h=n[1]*o+n[5]*c+n[9]*u+n[13],f=n[3]*o+n[7]*c+n[11]*u+n[15];return f<=.01?{inFront:!1}:{inFront:!0,x:(l/f*.5+.5)*Ot,y:(1-(h/f*.5+.5))*kt}}var lm=_s(Cu(),1),En=Kf.default.SETTINGS,_t=Kf.default.MENU,Rt=En.v;Rt.invertY===void 0&&(Rt.invertY=!1);Rt.fov===void 0&&(Rt.fov=78);var Pt=320,An=200,cm=168,um=document.getElementById("view"),mi=document.getElementById("hud");mi.width=Pt;mi.height=An;var Fe=mi.getContext("2d");Fe.imageSmoothingEnabled=!1;var Uo=/debug/.test(location.search),mt=Lu({levels:vi,rng:Du(Uo?+(/seed=(\d+)/.exec(location.search)||[])[1]||1:(Date.now()&4294967295)>>>0),storage:(function(){try{return window.localStorage}catch{return null}})(),settings:Rt,saveSettings:function(){En.save()},onProgress:function(i,e){En.unlock(Math.min(i+1,vi.length-1)),xS=En.record?En.record(i,e):null}}),xS=null,pi=j0(um,{preserve:Uo,onSound:function(i,e){var t=mt.state();if(!(!t||Wn!=="game")){var n=e.x-t.p.x,r=e.z-t.p.z;_n.default.play(i,Math.sqrt(n*n+r*r),Math.sin(Math.atan2(r,n)-t.p.ang)*.7)}}}),_S=Q0(Fe,mt,Rt),Wn="title",Ci=0,Zi=!1,ya=!1,Pi=!1,Fo=!1;function Bo(){return $i[Rt.difficulty]||$i[1]}function vu(){_n.default.setVolume(Rt.volume/10),pi.setFov(Rt.fov),pi.setQuality({scale:Rt.quality||1,bloom:Rt.bloom!==!1,shake:Rt.shake!==!1})}function hm(){var i=window.innerWidth,e=window.innerHeight,t=Math.min(i,e*1.6),n=t/1.6,r=(i-t)/2,s=(e-n)/2;mi.style.cssText="left:"+r+"px;top:"+s+"px;width:"+t+"px;height:"+n+"px";var a=Math.round(n*cm/An);um.style.cssText="left:"+r+"px;top:"+s+"px;width:"+t+"px;height:"+a+"px",pi.resize(Math.round(t),a)}window.addEventListener("resize",hm);hm();var yu=mt.keys,zo=!1;function fm(){for(var i in yu)yu[i]=!1;zo=!1,mt.setFire(!1)}document.addEventListener("keydown",function(i){if((["Tab","Space"].indexOf(i.code)>=0||i.code.slice(0,5)==="Arrow")&&i.preventDefault(),_n.default.init(),!!Su){if(_t.isOpen()){_n.default.startMusic(),_t.key(i.code);return}if(!i.repeat){if(i.code==="Enter"||i.code==="NumpadEnter"){Mu();return}if(Wn!=="game"){i.code==="Space"&&Mu();return}if(i.code==="Escape"&&Zi&&!Pi){mm();return}yu[i.code]=!0;var e=mt.state();if(i.code==="Tab"&&(ya=!ya,e.usedMap=!0),i.code==="KeyM"){var t=_n.default.toggleMusic();e.msgs.push({text:"MUSIC "+(t?"ON":"OFF"),t:2})}(i.code==="ControlLeft"||i.code==="ControlRight")&&(zo=!0,mt.setFire(!0)),i.code==="Digit1"&&mt.switchWeapon("fist"),i.code==="Digit2"&&mt.switchWeapon("pistol"),i.code==="Digit3"&&mt.switchWeapon("shotgun"),i.code==="KeyQ"&&mt.quickSwitch()}}});document.addEventListener("keyup",function(i){yu[i.code]=!1,(i.code==="ControlLeft"||i.code==="ControlRight")&&(zo=!1,mt.setFire(!1))});window.addEventListener("blur",fm);document.addEventListener("pointerlockchange",function(){Pi=document.pointerLockElement===mi,fm(),Pi?(Fo=!1,Wn==="game"&&_t.close(),!Zi&&Wn==="game"&&MS()):Wn==="game"&&Zi&&mm()});document.addEventListener("pointerlockerror",function(){Fo=!0});function ko(){try{var i=mi.requestPointerLock({unadjustedMovement:!0});i&&i.catch&&i.catch(function(){try{mi.requestPointerLock()}catch{Fo=!0}})}catch{Fo=!0}}function yS(){try{document.exitPointerLock()}catch{}}function dm(i){var e=mi.getBoundingClientRect();return{x:(i.clientX-e.left)/e.width*Pt,y:(i.clientY-e.top)/e.height*An}}document.addEventListener("mousemove",function(i){var e=mt.state();if(Pi&&Wn==="game"&&e&&!e.p.dead){var t=44e-5*Rt.sens;e.p.ang+=i.movementX*t,e.p.pitch-=i.movementY*t*(Rt.invertY?-1:1),e.p.pitch=Math.max(-1.3,Math.min(1.3,e.p.pitch));return}if(_t.isOpen()){var n=dm(i);mi.style.cursor=_t.pointer(n.x,n.y)?"pointer":"default"}});mi.addEventListener("mousedown",function(i){if(_n.default.init(),_n.default.startMusic(),_t.isOpen()){var e=dm(i);i.button===0&&_t.click(e.x,e.y);return}if(Wn==="game"){var t=mt.state();if(!Pi){_t.close(),ko();return}if(t.p.dead){Mu();return}i.button===0&&(zo=!0,mt.setFire(!0)),i.button===2&&(mt.keys.Space=!0);return}Mu()});document.addEventListener("mouseup",function(i){i.button===0&&(zo=!1,mt.setFire(!1)),i.button===2&&(mt.keys.Space=!1)});mi.addEventListener("contextmenu",function(i){i.preventDefault()});mi.addEventListener("wheel",function(i){Wn==="game"&&Pi&&(i.preventDefault(),i.deltaY&&mt.cycleWeapon(i.deltaY>0?1:-1))},{passive:!1});var xu=!1;function MS(){Zi=!0}function pm(i){mt.startLevel(i,!1),Zi=!1,ya=!1,Wn="game",_t.close(),ko()}function Mu(){_n.default.init(),_n.default.startMusic();var i=mt.mode();if(i==="inter"){if(!xu&&Ci<1.3){xu=!0;return}xu=!1,mt.onEnter(),mt.onEnter(),mt.mode()==="game"&&(Zi=Pi)}else if(i==="victory")Ci>1&&Zf();else if(i==="game"){var e=mt.state();e.p.dead?e.p.deadT>1.2&&(mt.retryLevel(),Zi=Pi):Pi||(_t.close(),ko())}}function Zf(){mt.setMode("title"),Wn="title",_t.open($f()),yS()}function mm(){ya=!1,_t.open(IS()),_n.default.play("menu")}function Wf(i,e,t){for(var n=0;n<Pt;n+=2){var r=Math.sin(n*.07+e*3+t)+Math.sin(n*.13-e*2.2),s=6+r*4;Fe.fillStyle=r>.7?"#ffd23e":r>-.3?"#ff7a18":"#a83010",Fe.fillRect(n,i-s,2,s+4)}}var em=Lu({levels:vi,rng:Du(7),storage:null,settings:{difficulty:1,tips:!1,seenTips:{}}}),SS={0:{x:19.5,z:9.4,y:2,ang:-1.6,pitch:.1,sway:.1},1:{x:17.5,z:26.6,y:2,ang:-Math.PI/2,pitch:-.2,sway:.18},2:{x:17.5,z:33.3,y:1.5,ang:-Math.PI/2,pitch:-.12,sway:.2},3:null},qf=-1,gs=null;function gm(i){if(i!==qf){qf=i,em.startLevel(i,!1),gs=em.state();var e=SS[i],t=gs.p;e&&(t.x=e.x,t.z=e.z,t.y=e.y),t.baseAng=e?e.ang:t.ang,t.basePitch=e?e.pitch:.05,t.sway=e?e.sway:.3,gs.msgs.length=0,gs.notice=null}}function TS(i){var e=gs.p;e.ang=e.baseAng+Math.sin(i*.11)*e.sway,e.pitch=e.basePitch+Math.sin(i*.17)*.04}var _u=150;function Go(i,e){Fe.fillStyle="rgba(6,4,3,0.84)",Fe.fillRect(0,0,_u,An);for(var t=0;t<40;t++)Fe.fillStyle="rgba(6,4,3,"+(.84*(1-t/40)).toFixed(3)+")",Fe.fillRect(_u+t,0,1,An);Fe.fillStyle="#ff7a18",Fe.fillRect(_u-1,0,1,An),Fe.fillStyle="rgba(0,0,0,0.35)",Fe.fillRect(0,An-14,Pt,14)}function bS(i,e){Ue.default.drawText(Fe,"FIREBIRD",i+1,e+1,{scale:3,color:"#401008"}),Ue.default.drawText(Fe,"FIREBIRD",i,e,{scale:3,color:"#ff9a28"}),Ue.default.drawText(Fe,"3D",i+98,e-2,{scale:4,color:"#ffd23e",shadow:"#803008"}),Ue.default.drawText(Fe,"EPISODE ONE: KNEE-DEEP IN THE ASHES",i,e+21,{color:"#a8a090"})}function Tu(i,e){Ue.default.drawText(Fe,i,14,e||14,{scale:2,color:"#ff9a28",shadow:"#401008"}),Fe.fillStyle="#5e2a10",Fe.fillRect(14,(e||14)+13,_u-28,1)}function Jf(i,e){var t=String(i).split(" "),n=[],r="";return t.forEach(function(s){var a=r?r+" "+s:s;a.length>e&&r?(n.push(r),r=s):r=a}),r&&n.push(r),n}function jf(i){var e=_t.selected(),t=e&&(typeof e.info=="function"?e.info():e.info);t&&Jf(t,33).forEach(function(n,r){Ue.default.drawText(Fe,n,14,(i||150)+r*8,{color:"#a8a090"})})}function Vo(i){Ue.default.drawText(Fe,i||"ARROWS / MOUSE: CHOOSE   ENTER: SELECT   ESC: BACK",14,An-10,{color:"#6a655c"})}function Xf(i,e,t,n,r){var s=Ue.default.textWidth(t,1)+6;return Fe.fillStyle=n?r||"#ffd23e":"#2e2a24",Fe.fillRect(i,e,s,9),Fe.fillStyle=n?"#1a0e06":"#14110d",Fe.fillRect(i+1,e+1,s-2,7),Ue.default.drawText(Fe,t,i+3,e+2,{color:n?r||"#ffd23e":"#4a463c"}),s+3}function kr(i){return i?"ON":"OFF"}var tm={alignLeft:!0,x0:20,x1:138,footer:""};function Wo(i){var e={};for(var t in tm)e[t]=tm[t];for(var n in i)e[n]=i[n];return e}var nm=(function(){try{return lm.default.recall(window.localStorage)}catch{return{fights:0,wins:0}}})();function ES(){return nm.fights?nm.wins?"WELCOME BACK. I'VE BEEN PRACTISING SINCE YOU BEAT ME.":"WELCOME BACK. I STILL REMEMBER HOW YOU FIGHT.":"HI! I'M RILEY. COME FIND ME AT THE TOP OF E1M1."}function vm(i,e){Go(i,e),bS(14,16),Ue.default.drawText(Fe,"A NIX GAMES PRODUCTION BY PHOENIX",14,An-24,{color:"#6a655c"});var t=Jf("RILEY: "+ES(),34);Fe.fillStyle="rgba(0,0,0,0.45)",Fe.fillRect(170,146,144,t.length*8+6),t.forEach(function(n,r){Ue.default.drawText(Fe,n,174,150+r*8,{color:"#6fe0ec",shadow:!0})})}var AS={E1M1:"RILEY TEACHES YOU THE ROPES ON THE WAY UP, THEN SPARS WITH YOU IN HER ARENA.",E1M2:"DRAIN THE OVERSEERS' FURNACE, TAKE THE RED KEYSTONE, AND SURVIVE THE FORGE.",E1M3:"THE RESET WARDEN GUARDS THE ENGINE THAT IS BURYING ASHGATE. SHUT IT DOWN.",E1M4:"RILEY'S TRIAL. SHE REMEMBERS HOW YOU FOUGHT, AND THIS TIME SHE IS NOT HOLDING BACK."};function $f(){var i=En.progress;return Wo({drawBg:vm,scale:2,top:62,gap:14,drawExtra:function(){jf(136),Vo()},items:function(){var e=[];return i.unlocked>0&&e.push({label:"CONTINUE",action:function(){pm(i.unlocked)},info:function(){return vi[i.unlocked].name+" ON "+Bo().name+"."}}),e.push({label:"NEW GAME",action:function(){_t.push(xm(0))},info:"START THE EPISODE FROM THE BEGINNING."},{label:"LEVELS",action:function(){_t.push(wS())},info:"PICK A LEVEL, SEE YOUR BEST TIMES AND MEDALS."},{label:"OPTIONS",action:function(){_t.push(Qf(0))},info:"CONTROLS, VIDEO, AUDIO AND GAMEPLAY."},{label:"CONTROLS",action:function(){_t.push(_m())},info:"EVERY KEY, ON ONE PAGE."}),e}})}function xm(i){var e=$i.map(function(t,n){return{label:t.name,info:t.desc,action:function(){Rt.difficulty=n,En.save(),pm(i)}}});return e.push({label:"BACK",action:function(){_t.back()}}),Wo({drawBg:Go,scale:2,top:46,gap:16,sel:Rt.difficulty,items:e,drawExtra:function(){Tu("DIFFICULTY"),jf(118),Ue.default.drawText(Fe,vi[i].name,14,32,{color:"#c8c0b0"}),Vo()}})}function wS(){var i=vi.map(function(t,n){var r=n<=En.progress.unlocked,s=t.name.split(":")[0];return{label:r?t.name.replace(": ","  "):s+"  LOCKED",level:n,disabled:function(){return!r},action:function(){_t.push(xm(n))}}});i.push({label:"BACK",action:function(){_t.back()}});var e=Math.min(En.progress.unlocked,vi.length-1);return Wo({drawBg:Go,scale:1,top:40,gap:13,sel:e,items:i,drawExtra:function(){Tu("LEVELS");var t=_t.selected(),n=t&&t.level!==void 0?t.level:qf;t&&t.level!==void 0&&gm(n),RS(n),Vo()}})}function RS(i){var e=vi[i],t=e.name.split(":")[0],n=e.name.split(": ")[1]||e.name,r=i<=En.progress.unlocked,s=En.best?En.best(i):null,a=172,o=Jf(AS[t]||"",34),c=58+o.length*8,u=166-c;Fe.fillStyle="rgba(6,4,3,0.72)",Fe.fillRect(a-6,u-6,Pt-a,c),Fe.fillStyle="#ff7a18",Fe.fillRect(a-6,u-6,1,c),Ue.default.drawText(Fe,t+(e.heights?"   REBUILT IN 3D":"   CLASSIC LAYOUT"),a,u,{color:e.heights?"#8fe0a0":"#8a8478"}),Ue.default.drawText(Fe,n,a,u+9,{scale:2,color:"#ff9a28",shadow:"#401008"}),o.forEach(function(p,v){Ue.default.drawText(Fe,p,a,u+25+v*8,{color:"#c8c0b0"})});var l=mt.levelInfo(e),h=u+28+o.length*8;l.boss&&Xf(a,h-1,"BOSS: RILEY",!0,"#6fe0ec"),Ue.default.drawText(Fe,"PAR "+Br(e.par)+(s&&s.time!==null?"   BEST "+Br(s.time):""),l.boss?a+60:a,h+1,{color:"#a8a090"});var f=a;(En.MEDALS||["PAR","KILLS","ITEMS","SECRETS"]).forEach(function(p){f+=Xf(f,h+12,p==="KILLS"?"FREED":p,!!(s&&s.medals&&s.medals[p]))}),r||(Fe.fillStyle="rgba(0,0,0,0.55)",Fe.fillRect(a-5,u-5,Pt-a-1,c-2),Ue.default.drawText(Fe,"LOCKED",a+60,u+22,{scale:2,color:"#ff9a28",shadow:!0}),Ue.default.drawText(Fe,"FINISH THE LEVEL BEFORE IT",a+30,u+42,{color:"#a8a090"}))}var gu=["CONTROLS","VIDEO","AUDIO","GAMEPLAY"],im={sens:5,invertY:!1,fov:78,quality:1,bloom:!0,shake:!0,fps:!1,volume:7,crosshair:!0,goalMarker:!0,tips:!0,difficulty:1};function Qf(i){function e(a,o,c,u){return function(l){var h=+(Rt[a]+l*(u||1)).toFixed(2);Rt[a]=h>c?o:h<o?c:h,En.save(),vu()}}function t(a){return function(){Rt[a]=!Rt[a],En.save(),vu()}}var n={label:"SECTION",value:function(){return gu[i]},adjust:function(a){_t.replace(Qf((i+a+gu.length)%gu.length))},info:"LEFT AND RIGHT TO SWITCH BETWEEN CONTROLS, VIDEO, AUDIO AND GAMEPLAY."},r=[[{label:"MOUSE SPEED",slider:[0,10,function(){return Rt.sens}],adjust:e("sens",1,10),info:"HOW FAST THE VIEW TURNS."},{label:"INVERT Y",value:function(){return kr(Rt.invertY)},adjust:t("invertY"),info:"PUSH THE MOUSE FORWARD TO LOOK DOWN INSTEAD OF UP."},{label:"FIELD OF VIEW",value:function(){return Rt.fov},adjust:e("fov",60,110,5),info:"HOW WIDE YOU SEE, IN DEGREES. WIDER SHOWS MORE."}],[{label:"RESOLUTION",value:function(){return Math.round((Rt.quality||1)*100)+"%"},adjust:e("quality",.5,1,.25),info:"LOWER IS FASTER ON SLOW COMPUTERS, AND CHUNKIER."},{label:"GLOW",value:function(){return kr(Rt.bloom!==!1)},adjust:t("bloom"),info:"THE SOFT GLOW AROUND FIRE, RED MERCURY AND LIGHTS."},{label:"SCREEN SHAKE",value:function(){return kr(Rt.shake!==!1)},adjust:t("shake"),info:"THE VIEW KICKS ON SHOTS, HITS AND EXPLOSIONS."},{label:"SHOW FPS",value:function(){return kr(!!Rt.fps)},adjust:t("fps"),info:"FRAMES PER SECOND, IN THE CORNER."}],[{label:"VOLUME",slider:[0,10,function(){return Rt.volume}],adjust:e("volume",0,10),info:"LOUDNESS OF EVERYTHING."},{label:"MUSIC",value:function(){return kr(_n.default.isMusicOn())},adjust:function(){_n.default.setMusic(!_n.default.isMusicOn())},info:"PRESS M DURING PLAY TO TOGGLE IT TOO."}],[{label:"DIFFICULTY",value:function(){return Bo().name},adjust:e("difficulty",0,2),info:function(){return Bo().desc}},{label:"CROSSHAIR",value:function(){return kr(Rt.crosshair)},adjust:t("crosshair"),info:"A SMALL AIMING MARK. TURNS RED OVER A HOLLOW."},{label:"GOAL MARKER",value:function(){return kr(Rt.goalMarker)},adjust:t("goalMarker"),info:"POINTS AT YOUR GOAL ONCE YOU HAVE SEEN IT."},{label:"TIPS",value:function(){return kr(Rt.tips)},adjust:function(){Rt.tips=!Rt.tips,Rt.tips&&(Rt.seenTips={}),En.save()},info:"SHORT HINTS THE FIRST TIME SOMETHING NEW HAPPENS. ON AGAIN SHOWS THEM ALL."},{label:"RESET ALL",action:function(){_t.push(Yf("RESET?","EVERY OPTION BACK TO ITS DEFAULT.",function(){for(var a in im)Rt[a]=im[a];En.save(),vu(),_t.back()}))},info:"EVERY OPTION BACK TO ITS DEFAULT. PROGRESS AND MEDALS ARE KEPT."}]],s=[n].concat(r[i]).concat([{label:"BACK",action:function(){_t.back()}}]);return Wo({drawBg:Go,x1:142,scale:1,top:44,gap:13,items:s,drawExtra:function(){Tu("OPTIONS");var a=14;gu.forEach(function(o,c){a+=Xf(a,32,o,c===i)}),jf(44+s.length*13+6),Vo("ARROWS / MOUSE: CHOOSE   LEFT / RIGHT: CHANGE   ESC: BACK")}})}var CS=[["MOVE","W A S D  /  ARROWS"],["LOOK AND AIM","MOUSE"],["FIRE","LEFT CLICK  /  CTRL"],["JUMP","SPACE  /  RIGHT CLICK"],["CROUCH","C"],["USE / OPEN","E"],["RUN","HOLD SHIFT"],["WEAPONS","1 2 3  /  WHEEL"],["LAST WEAPON","Q"],["MAP","TAB"],["MUSIC","M"],["PAUSE","ESC"]];function _m(){return Wo({drawBg:Go,scale:2,top:172,gap:12,items:[{label:"BACK",action:function(){_t.back()}}],drawExtra:function(){Tu("CONTROLS"),CS.forEach(function(i,e){var t=36+e*11;Ue.default.drawText(Fe,i[0],14,t,{color:"#c8c0b0"}),Ue.default.drawText(Fe,i[1],76,t,{color:"#ffd23e"})}),Vo()}})}function ym(i,e){Fe.fillStyle=Wn==="game"?"rgba(4,3,2,0.8)":"rgba(8,6,4,0.7)",Fe.fillRect(0,0,Pt,An),Fe.fillStyle="#5e2a10",Fe.fillRect(40,33,Pt-80,1)}function Yf(i,e,t){return{title:i,drawBg:ym,scale:2,top:86,gap:18,sel:1,drawExtra:function(){Ue.default.drawText(Fe,e,Pt/2,56,{color:"#a8a090",center:!0})},items:[{label:"YES",action:t},{label:"NO",action:function(){_t.back()}}]}}function IS(){return{title:"PAUSED",drawBg:ym,scale:2,top:64,gap:14,descY:144,footerY:176,footer:"ARROWS OR MOUSE: CHOOSE   ENTER OR CLICK: SELECT",items:[{label:function(){return mt.state().p.dead?"TRY AGAIN":"RESUME"},action:function(){mt.state().p.dead&&mt.retryLevel(),_t.close(),ko()},desc:"BACK TO THE FIGHT."},{label:"RESTART LEVEL",desc:"START THIS LEVEL OVER WITH THE GEAR YOU BROUGHT IN.",action:function(){_t.push(Yf("RESTART?","YOU WILL LOSE PROGRESS IN THIS LEVEL.",function(){mt.retryLevel(),_t.close(),ko()}))}},{label:"OPTIONS",action:function(){_t.push(Qf())},desc:"MOUSE, VOLUME, FIELD OF VIEW AND MORE."},{label:"CONTROLS",action:function(){_t.push(_m())},desc:"EVERY KEY, ON ONE PAGE."},{label:"QUIT TO TITLE",desc:"YOUR UNLOCKED LEVELS ARE SAVED.",action:function(){_t.push(Yf("QUIT?","PROGRESS IN THIS LEVEL WILL BE LOST.",Zf))}}],drawExtra:function(){var i=mt.state(),e=i.stats;Ue.default.drawText(Fe,i.L.name+"   "+Bo().name,Pt/2,38,{color:"#c8c0b0",center:!0}),Ue.default.drawText(Fe,"GOAL: "+mt.objective(),Pt/2,48,{color:"#f0d848",center:!0}),Ue.default.drawText(Fe,"FREED "+e.kills+"/"+e.totalKills+"   ITEMS "+e.items+"/"+e.totalItems+"   SECRETS "+e.secrets+"/"+e.totalSecrets+"   TIME "+Br(i.time),Pt/2,160,{color:"#8a8478",center:!0})}}}function PS(i){var e=mt.state(),t=e.L.name.split(": ");Fe.fillStyle="rgba(4,3,2,0.6)",Fe.fillRect(0,0,Pt,An),Ue.default.drawText(Fe,t[0],Pt/2,22,{color:"#8a8478",center:!0}),Ue.default.drawText(Fe,t[1]||e.L.name,Pt/2,32,{scale:3,color:"#ff9a28",shadow:"#401008",center:!0}),Ue.default.drawText(Fe,"GOAL",Pt/2,60,{color:"#8a8478",center:!0}),Ue.default.drawText(Fe,mt.objective(),Pt/2,69,{scale:2,color:"#f0d848",shadow:!0,center:!0}),Ue.default.drawText(Fe,"DIFFICULTY: "+Bo().name+"     PAR "+Br(e.L.par),Pt/2,88,{color:"#a8a090",center:!0}),i%1<.7&&Ue.default.drawText(Fe,"CLICK TO BEGIN",Pt/2,106,{scale:2,color:"#ffffff",shadow:!0,center:!0}),Fo&&Ue.default.drawText(Fe,"THE GAME NEEDS THE MOUSE. CLICK THE SCREEN AGAIN.",Pt/2,124,{color:"#ff9a28",center:!0}),Ue.default.drawText(Fe,"WASD MOVE  MOUSE LOOK  CLICK FIRE  SPACE JUMP  E USE  TAB MAP  ESC PAUSE",Pt/2,140,{color:"#8a8478",center:!0})}function LS(i){var e=mt.interStats();Fe.fillStyle="rgba(10,8,6,0.88)",Fe.fillRect(0,0,Pt,An),Wf(An-6,i,1),Ue.default.drawText(Fe,e.name,Pt/2,22,{scale:2,color:"#ff9a28",shadow:!0,center:!0}),Ue.default.drawText(Fe,"FINISHED!",Pt/2,42,{scale:2,color:"#e8e0c8",shadow:!0,center:!0});var t=xu?1:Math.min(1,i/1.2);function n(s,a){return a?Math.round(s/a*100*t):100}if([["FREED",e.kills,e.totalKills,70],["ITEMS",e.items,e.totalItems,90],["SECRETS",e.secrets,e.totalSecrets,110]].forEach(function(s){Ue.default.drawText(Fe,s[0],90,s[3],{scale:2,color:"#c8c0b0"});var a=n(s[1],s[2]);Ue.default.drawText(Fe,a+"%",240,s[3],{scale:2,color:a>=100?"#ffd23e":"#e03828",right:!0})}),Ue.default.drawText(Fe,"TIME "+Br(e.time),90,132,{scale:2,color:e.time<=e.par&&t>=1?"#ffd23e":"#c8c0b0"}),Ue.default.drawText(Fe,"PAR "+Br(e.par),240,132,{scale:2,color:"#c8c0b0",right:!0}),t>=1&&i%1<.7){var r=mt.levelIndex();Ue.default.drawText(Fe,r+1<vi.length?"CLICK OR PRESS ENTER FOR "+vi[r+1].name:"CLICK OR PRESS ENTER",Pt/2,166,{color:"#f0d848",shadow:!0,center:!0})}}function NS(i){Fe.fillStyle="rgba(8,6,4,0.9)",Fe.fillRect(0,0,Pt,An),Wf(An-8,i,0),Wf(An-4,i*1.3,2),Ue.default.drawText(Fe,"YOU WIN!",Pt/2,30,{scale:4,color:"#ffd23e",shadow:"#803008",center:!0}),["THE RESET ENGINE IS SILENT.","ASHGATE'S BELLS RING AGAIN,","AND RILEY TAPS OUT WITH A GRIN:",`"SAME TIME TOMORROW? I'LL BE READY."`,"","EVERY AGE ENDS IN ASH.","THE FIREBIRD IS WHAT RISES FROM IT.","","THANKS FOR PLAYING, WARRIOR."].forEach(function(e,t){Ue.default.drawText(Fe,e,Pt/2,74+t*10,{color:"#e8e0c8",center:!0})}),i>1&&i%1<.7&&Ue.default.drawText(Fe,"CLICK OR PRESS ENTER FOR THE TITLE SCREEN",Pt/2,170,{color:"#f0d848",shadow:!0,center:!0})}var DS={pistol:"pistol2",shotgun:"shotgun2"};function OS(i){var e=i.p;i.events.forEach(function(t){if(t.t==="sound"){if(t.local){_n.default.play(DS[t.name]||t.name);return}var n=t.x-e.x,r=t.z-e.z,s=Math.sqrt(n*n+r*r),a=Math.sin(Math.atan2(r,n)-e.ang)*.7;_n.default.play(t.name,s,a)}})}var No=1/60,Do=0,rm=performance.now(),sm="",Oo=[],Ho=!1,HS=10,am=null;function om(i){i!==am&&(am=i,pi.setQuality({weapon:i}))}function Mm(i){var e=Math.min(.1,(i-rm)/1e3);rm=i;var t=mt.mode(),n=Wn==="title"?"title":t;n!==sm&&(Ci=0,sm=n),Ci+=e,Oo.push(e),Oo.length>240&&Oo.shift();var r=mt.state();if(Wn==="title"){var s=i/1e3;gs||gm(1),TS(s),om(!1),pi.render(gs,s,e),Fe.clearRect(0,0,Pt,An),Su?(_t.isOpen()||_t.open($f()),_t.render(Fe,Ci)):(vm(Fe,Ci),Ci%.8<.55&&Ue.default.drawText(Fe,"LOADING...",Pt/2,120,{scale:2,color:"#f0d848",shadow:!0,center:!0}))}else if(t==="game"||t==="inter"||t==="victory"){var a=Ho||t==="game"&&(!Zi||!Pi||_t.isOpen())&&!Uo;if(!a&&t==="game")for(Do+=e;Do>=No;){if(r.hitstop>0){r.hitstop-=No,Do-=No;continue}if(mt.update(No),OS(r),Do-=No,mt.mode()!=="game")break}else Do=0;if(r=mt.state(),om(!0),pi.render(r,Ho?HS:i/1e3,a?0:e,Ho),r.events.length=0,_S.draw(r,{map:ya,menu:_t.isOpen(),camera:pi.camera}),Rt.fps){var o=Oo.slice().sort(function(u,l){return u-l}),c=o[o.length>>1]||.016;Ue.default.drawText(Fe,Math.round(1/c)+" FPS",Pt-4,cm-9,{color:"#8fe0a0",shadow:!0,right:!0})}t==="inter"?LS(Ci):t==="victory"?NS(Ci):Zi?_t.isOpen()?_t.render(Fe,Ci):!Pi&&!Uo&&(Fe.fillStyle="rgba(0,0,0,0.5)",Fe.fillRect(0,70,Pt,24),Ue.default.drawText(Fe,"CLICK TO RESUME",Pt/2,76,{scale:2,color:"#f0d848",shadow:!0,center:!0})):PS(Ci)}requestAnimationFrame(Mm)}vu();requestAnimationFrame(Mm);var Ii=null,Su=!1;function Sm(i){Su||(Su=!0,Ii=i||{ready:!0,loaded:[],problems:["timed out; using built-in art"]},Ii.loaded.length&&pi.setAssets(Ii),Ii.problems.length&&console.info("[assets] "+Ii.problems.join(" | ")),Ii.loaded.length&&console.info("[assets] using "+Ii.loaded.length+" authored assets"),_t.open($f()))}H0().then(Sm);setTimeout(function(){Sm(null)},6e3);Uo&&(window.FIREBIRD2=Object.assign({},mt,{launch:function(i){mt.startLevel(i,!1),Zi=!0,Wn="game",_t.close()},toTitle:Zf,setMap:function(i){ya=i},freeze:function(i){Ho=!!i},frozen:function(){return Ho},models:function(){return pi.debugModels()},fxStats:function(){return pi.fxStats()},assets:function(){return Ii?{ready:Ii.ready,loaded:Ii.loaded.slice(),problems:Ii.problems.slice()}:{ready:!1}},frameStats:function(){var i=Oo.slice().sort(function(t,n){return t-n});function e(t){return i.length?i[Math.min(i.length-1,Math.floor(i.length*t))]*1e3:0}return{frames:i.length,p50:e(.5),p95:e(.95),p99:e(.99),info:pi.info().render}},renderInfo:function(){return pi.info()}}));})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
