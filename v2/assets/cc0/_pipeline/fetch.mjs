// Download the original CC0 models listed in sources.json into raw/ (not in
// git: we ship only the processed models) and check each sha256.
//   node assets/cc0/_pipeline/fetch.mjs
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

var here = path.dirname(fileURLToPath(import.meta.url));
var raw = path.join(here, 'raw');
fs.mkdirSync(raw, { recursive: true });
var sources = JSON.parse(fs.readFileSync(path.join(here, 'sources.json'), 'utf8')).sources;
var bad = 0;
for (var s of sources) {
  var file = path.join(raw, s.id + '.glb');
  if (!fs.existsSync(file)) {
    var res = await fetch(s.url);
    if (!res.ok) { console.log('FAIL ' + s.id + ': HTTP ' + res.status); bad++; continue; }
    fs.writeFileSync(file, Buffer.from(await res.arrayBuffer()));
  }
  var sum = crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
  if (sum !== s.sha256) { console.log('FAIL ' + s.id + ': sha256 ' + sum + ' (expected ' + s.sha256 + ')'); bad++; }
  else console.log('ok   ' + s.id + ' (' + s.title + ' by ' + s.author + ')');
}
process.exit(bad ? 1 : 0);
