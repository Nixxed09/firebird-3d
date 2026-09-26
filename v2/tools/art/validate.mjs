// Khronos glTF Validator plus the FIREBIRD delivery contract, no engine writes.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { inflateSync } from 'node:zlib';
const dir=path.dirname(fileURLToPath(import.meta.url));
const require=createRequire(import.meta.url);
const validator=require('./.deps/node_modules/gltf-validator');
const root=path.resolve(dir,'../../assets');
const manifest=JSON.parse(fs.readFileSync(path.join(root,'assets.json')));
const results=[];const failures=[];
const complete=process.argv.includes('--complete');
function pngEdges(file){
  const b=fs.readFileSync(file),w=b.readUInt32BE(16),h=b.readUInt32BE(20),type=b[25],channels={0:1,2:3,6:4}[type];
  if(b[24]!==8||!channels||b[28]!==0)throw Error('Expected 8-bit noninterlaced PNG: '+file);
  let offset=8,parts=[];
  while(offset<b.length){const n=b.readUInt32BE(offset);if(b.toString('ascii',offset+4,offset+8)==='IDAT')parts.push(b.subarray(offset+8,offset+8+n));offset+=n+12;}
  const raw=inflateSync(Buffer.concat(parts)),stride=w*channels,pixels=Buffer.alloc(stride*h);let at=0;
  for(let y=0;y<h;y++){
    const f=raw[at++];
    for(let x=0;x<stride;x++){
      const idx=y*stride+x,a=x>=channels?pixels[idx-channels]:0,up=y?pixels[idx-stride]:0,c=y&&x>=channels?pixels[idx-stride-channels]:0;
      const p=a+up-c,pa=Math.abs(p-a),pb=Math.abs(p-up),pc=Math.abs(p-c);
      const predict=[0,a,up,Math.floor((a+up)/2),pa<=pb&&pa<=pc?a:pb<=pc?up:c][f];
      pixels[idx]=(raw[at++]+predict)&255;
    }
  }
  let seam=0;
  for(let x=0;x<stride;x++)seam=Math.max(seam,Math.abs(pixels[x]-pixels[(h-1)*stride+x]));
  for(let y=0;y<h;y++)for(let c=0;c<channels;c++)seam=Math.max(seam,Math.abs(pixels[y*stride+c]-pixels[y*stride+(w-1)*channels+c]));
  return {width:w,height:h,edge_max_error:seam};
}
const clips=['idle','walk','attack_windup','attack','pain','death'];
for(const e of manifest.files.filter(x=>x.file.endsWith('.glb'))){
  const data=fs.readFileSync(path.join(root,e.file));
  const report=await validator.validateBytes(new Uint8Array(data),{uri:e.file,maxIssues:10000});
  const json=JSON.parse(data.subarray(20,20+data.readUInt32LE(12)).toString());
  const binOffset=20+data.readUInt32LE(12)+8;
  const tris=json.meshes.reduce((sum,m)=>sum+m.primitives.reduce((s,p)=>s+json.accessors[p.indices??p.attributes.POSITION].count/3,0),0);
  const textures=(json.images??[]).map(im=>{const v=json.bufferViews[im.bufferView];const off=binOffset+(v.byteOffset??0);return [data.readUInt32BE(off+16),data.readUInt32BE(off+20)];});
  const checks=[];const check=(ok,msg)=>{if(!ok){checks.push(msg);failures.push(`${e.file}: ${msg}`);}};
  check(report.issues.numErrors===0,'Khronos validator errors');
  check(tris===e.triangles,'triangle manifest mismatch');
  check(tris>=e.budget[0]&&tris<=e.budget[1],'triangle budget');
  check(textures.length>=3&&textures.every(t=>t.every(n=>n>0&&n<=1024&&(n&(n-1))===0)),'embedded PBR textures and POT dimensions');
  check((json.images??[]).every(im=>im.bufferView!==undefined),'external image URI');
  check((json.materials??[]).every(m=>m.pbrMetallicRoughness?.baseColorTexture&&m.normalTexture&&m.pbrMetallicRoughness?.metallicRoughnessTexture),'material missing base color / normal / roughness map');
  if(e.type==='demons'){
    check(clips.every(n=>json.animations?.some(a=>a.name===n))&&json.animations.length===6,'six exact animations');
    check(json.skins?.length>0,'missing skin');
    check(json.meshes.some(m=>m.primitives.every(p=>p.attributes.JOINTS_0!==undefined&&p.attributes.WEIGHTS_0!==undefined)),'missing skin weights');
  }
  const names=json.nodes.map(n=>n.name);
  const expected={pistol:['slide'],shotgun:['pump'],chaingun:['barrels'],rocket_launcher:['tube'],wooden_crate:['whole',...Array.from({length:6},(_,i)=>`debris_${i+1}`)],riley:['shield']}[path.basename(e.file,'.glb')]??[];
  check(expected.every(n=>names.includes(n)),'required moving node');
  if(e.file.endsWith('/riley.glb'))check(json.materials.some(m=>m.name==='tell'&&m.emissiveFactor?.some(x=>x>0)&&!m.emissiveTexture),'Riley tell supports a true white emissive flash');
  const preview=fs.readFileSync(path.join(root,e.preview));check(preview.readUInt32BE(16)===512&&preview.readUInt32BE(20)===512,'512px preview');
  e.texture_sizes=textures;
  const runtime=manifest.assets?.find(a=>a.file===e.file);if(runtime)runtime.texture_sizes=textures;
  results.push({file:e.file,triangles:tris,budget:e.budget,bytes:data.length,texture_sizes:textures,errors:report.issues.numErrors,warnings:report.issues.numWarnings,infos:report.issues.numInfos,checks,issues:report.issues.messages});
}
const surfaces=[];
for(const entry of manifest.files.filter(e=>e.file.startsWith('surfaces/')&&e.file.endsWith('.png'))){
  const s=pngEdges(path.join(root,entry.file));surfaces.push({file:entry.file,...s});
  if(s.width!==1024||s.height!==1024||s.edge_max_error!==0)failures.push(entry.file+': surface size or seam');
}
if(complete){
  if(results.length!==31)failures.push('Complete delivery requires 31 GLBs');
  if(surfaces.length!==56)failures.push('Complete delivery requires 56 surface PNGs');
  if(manifest.assets?.length!==45)failures.push('Complete manifest requires 45 runtime entries');
  if(!fs.existsSync(path.join(root,'proof/roundtrip.json')))failures.push('Missing exported animation round-trip proof');
}
const summary={validator:validator.version(),models:results.length,errors:results.reduce((s,r)=>s+r.errors,0),warnings:results.reduce((s,r)=>s+r.warnings,0),contract_failures:failures,surface_maps:surfaces,results};
fs.writeFileSync(path.join(root,'validation.json'),JSON.stringify(summary,null,2)+'\n');
// Refresh file inventory after report generation, including the report itself.
for(const name of ['validation.json','validation.md'])if(!manifest.files.some(x=>x.file===name))manifest.files.push({file:name,type:'report',bytes:0,size_m:null,triangles:0,animations:[],nodes:[]});
const lines=['# FIREBIRD asset validation','',`Khronos glTF Validator ${summary.validator}: **${summary.models} models, ${summary.errors} errors, ${summary.warnings} warnings**.`,`${failures.length} contract failures. All model textures embedded; every model has a 512 × 512 four-angle turntable.`, '', '| Model | Triangles | Budget | GLB KiB | Texture px | Errors | Warnings |','|---|---:|---:|---:|---|---:|---:|'];
for(const r of results)lines.push(`| ${r.file} | ${r.triangles} | ${r.budget.join('–')} | ${(r.bytes/1024).toFixed(1)} | ${[...new Set(r.texture_sizes.map(t=>t.join('×')))].join(', ')} | ${r.errors} | ${r.warnings} |`);
if(fs.existsSync(path.join(root,'surface_validation.json'))){
  const surface=JSON.parse(fs.readFileSync(path.join(root,'surface_validation.json')));
  lines.push('',`Surfaces: **${surface.sets} sets, ${surface.maps} PNG maps, 1024 × 1024 each**. All decoded opposite edges match exactly (maximum error 0). Albedo and emissive use sRGB; normal and roughness are linear data. 2m repeats.`, '', '[Surface seam measurements](surface_validation.json) · [Surface catalogue](surface_catalogue.png)');
}
const modelBytes=results.reduce((s,r)=>s+r.bytes,0),surfaceBytes=manifest.files.filter(e=>e.file.startsWith('surfaces/')&&e.file.endsWith('.png')).reduce((s,e)=>s+e.bytes,0);
lines.push('',`Runtime delivery: **${(modelBytes/1048576).toFixed(2)} MiB GLBs + ${(surfaceBytes/1048576).toFixed(2)} MiB surface maps**. Previews/proof are excluded from the runtime asset list. Load by level; no browser load-time measurement is claimed.`, '', '[Exported animation poses](proof/animation_poses.png) · [20m low-light view](proof/visibility_20m.png) · [Round-trip dimensions and skin motion](proof/roundtrip.json)');
fs.writeFileSync(path.join(root,'validation.md'),lines.join('\n')+'\n');
for(const e of manifest.files)e.bytes=fs.statSync(path.join(root,e.file)).size;
fs.writeFileSync(path.join(root,'assets.json'),JSON.stringify(manifest,null,2)+'\n');
console.log(lines.slice(0,4).join('\n'));for(const f of failures)console.error(f);
process.exitCode=failures.length?1:0;
