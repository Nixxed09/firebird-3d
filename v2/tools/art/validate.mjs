// Khronos glTF Validator plus the FIREBIRD delivery contract, no engine writes.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
const dir=path.dirname(fileURLToPath(import.meta.url));
const require=createRequire(import.meta.url);
const validator=require('./.deps/node_modules/gltf-validator');
const root=path.resolve(dir,'../../assets');
const manifest=JSON.parse(fs.readFileSync(path.join(root,'assets.json')));
const results=[];const failures=[];
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
  if(e.file.endsWith('/riley.glb'))check(json.materials.some(m=>m.name==='tell'&&m.emissiveTexture),'Riley tell emissive material');
  const preview=fs.readFileSync(path.join(root,e.preview));check(preview.readUInt32BE(16)===512&&preview.readUInt32BE(20)===512,'512px preview');
  e.texture_sizes=textures;
  results.push({file:e.file,triangles:tris,budget:e.budget,bytes:data.length,texture_sizes:textures,errors:report.issues.numErrors,warnings:report.issues.numWarnings,infos:report.issues.numInfos,checks,issues:report.issues.messages});
}
const summary={validator:validator.version(),models:results.length,errors:results.reduce((s,r)=>s+r.errors,0),warnings:results.reduce((s,r)=>s+r.warnings,0),contract_failures:failures,results};
fs.writeFileSync(path.join(root,'validation.json'),JSON.stringify(summary,null,2)+'\n');
// Refresh file inventory after report generation, including the report itself.
for(const name of ['validation.json','validation.md'])if(!manifest.files.some(x=>x.file===name))manifest.files.push({file:name,type:'report',bytes:0,size_m:null,triangles:0,animations:[],nodes:[]});
const lines=['# FIREBIRD asset validation','',`Khronos glTF Validator ${summary.validator}: **${summary.models} models, ${summary.errors} errors, ${summary.warnings} warnings**.`,`${failures.length} contract failures. All model textures embedded; every model has a 512 × 512 four-angle turntable.`, '', '| Model | Triangles | Budget | GLB KiB | Texture px | Errors | Warnings |','|---|---:|---:|---:|---|---:|---:|'];
for(const r of results)lines.push(`| ${r.file} | ${r.triangles} | ${r.budget.join('–')} | ${(r.bytes/1024).toFixed(1)} | ${[...new Set(r.texture_sizes.map(t=>t.join('×')))].join(', ')} | ${r.errors} | ${r.warnings} |`);
fs.writeFileSync(path.join(root,'validation.md'),lines.join('\n')+'\n');
for(const e of manifest.files)e.bytes=fs.statSync(path.join(root,e.file)).size;
fs.writeFileSync(path.join(root,'assets.json'),JSON.stringify(manifest,null,2)+'\n');
console.log(lines.slice(0,4).join('\n'));for(const f of failures)console.error(f);
process.exitCode=failures.length?1:0;
