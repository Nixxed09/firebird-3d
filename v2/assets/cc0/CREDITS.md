# CC0 models in Firebird v2

Every model here is released under **CC0 1.0** (public domain) by its author. No credit is required; we give it anyway.
Quaternius also asks that the models not be resold or redistributed *as an asset pack*. We ship only the models the game uses, processed for it.

| In game | Model | Author | Licence | Source | What we changed |
|---|---|---|---|---|---|
| `imp` | Demon | Quaternius | CC0 1.0 | https://poly.pizza/m/LnfIziKv4o | scaled to 1.7 m tall; clips renamed to idle/walk/attack_windup/attack/pain/death, others dropped; recoloured |
| `gnasher` | Yeti | Quaternius | CC0 1.0 | https://poly.pizza/m/S1E7idPFhe | scaled to 1.4 m tall; clips renamed to idle/walk/attack/pain/death, others dropped; recoloured |
| `knight` | Blue Demon | Quaternius | CC0 1.0 | https://poly.pizza/m/S7jYW6Amye | scaled to 2.6 m tall; clips renamed to idle/walk/attack_windup/attack/pain/death, others dropped; recoloured |
| `riley` | Adventurer | Quaternius | CC0 1.0 | https://poly.pizza/m/ZwF0K7WBmu | scaled to 1.9 m tall; clips renamed to idle/walk/attack_windup/attack/pain/death/roll/punch/run_shoot, others dropped; recoloured (gold accents are her attack tell); added a shield bubble |
| `pistol` | Pistol | Quaternius | CC0 1.0 | https://poly.pizza/m/52kQzphmeF | scaled to 0.24 m long, muzzle to +Z, origin at the grip |
| `shotgun` | Shotgun | Quaternius | CC0 1.0 | https://poly.pizza/m/8Z4HaN1NyS | scaled to 0.95 m long, muzzle to +Z, origin at the grip |
| `barrel` | Exploding Barrel | Quaternius | CC0 1.0 | https://poly.pizza/m/1orHe0kCc1 | scaled to 1.1 m tall |

Rebuild from the originals: `node assets/cc0/_pipeline/fetch.mjs` (checks sha256), `blender -b -P assets/cc0/_pipeline/process.py`, `node assets/cc0/_pipeline/manifest.mjs`.
