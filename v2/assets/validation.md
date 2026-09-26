# FIREBIRD asset validation

Khronos glTF Validator 2.0.0-dev.3.10: **31 models, 0 errors, 0 warnings**.
0 contract failures. All model textures embedded; every model has a 512 × 512 four-angle turntable.

| Model | Triangles | Budget | GLB KiB | Texture px | Errors | Warnings |
|---|---:|---:|---:|---|---:|---:|
| demons/ember_knight.glb | 7984 | 3000–8000 | 1138.9 | 128×128 | 0 | 0 |
| demons/gnasher.glb | 5204 | 3000–8000 | 566.2 | 128×128 | 0 | 0 |
| demons/imp.glb | 5148 | 3000–8000 | 690.0 | 128×128 | 0 | 0 |
| demons/riley.glb | 6824 | 3000–8000 | 1050.5 | 128×128 | 0 | 0 |
| pickups/armour_vest.glb | 1512 | 200–2000 | 322.3 | 128×128 | 0 | 0 |
| pickups/bullet_clip.glb | 480 | 200–2000 | 142.5 | 128×128 | 0 | 0 |
| pickups/keycard_blue.glb | 668 | 200–2000 | 239.3 | 128×128 | 0 | 0 |
| pickups/keycard_red.glb | 776 | 200–2000 | 246.7 | 128×128 | 0 | 0 |
| pickups/medkit_large.glb | 1188 | 200–2000 | 267.6 | 128×128 | 0 | 0 |
| pickups/medkit_small.glb | 972 | 200–2000 | 241.6 | 128×128 | 0 | 0 |
| pickups/phoenix_orb.glb | 1384 | 200–2000 | 217.4 | 128×128 | 0 | 0 |
| pickups/pickup_chaingun.glb | 5768 | 4000–10000 | 724.1 | 128×128 | 0 | 0 |
| pickups/pickup_pistol.glb | 4320 | 4000–10000 | 653.8 | 128×128 | 0 | 0 |
| pickups/pickup_rocket_launcher.glb | 5688 | 4000–10000 | 806.2 | 128×128 | 0 | 0 |
| pickups/pickup_shotgun.glb | 4356 | 4000–10000 | 664.0 | 128×128 | 0 | 0 |
| pickups/rocket_box.glb | 440 | 200–2000 | 120.8 | 128×128 | 0 | 0 |
| pickups/shell_box.glb | 480 | 200–2000 | 123.9 | 128×128 | 0 | 0 |
| props/ceiling_lamp.glb | 1044 | 200–2000 | 166.2 | 128×128 | 0 | 0 |
| props/ceiling_lamp_broken.glb | 876 | 200–2000 | 135.3 | 128×128 | 0 | 0 |
| props/explosive_barrel.glb | 1236 | 200–2000 | 196.3 | 128×128 | 0 | 0 |
| props/hanging_chain.glb | 1536 | 200–2000 | 158.4 | 128×128 | 0 | 0 |
| props/pipe_elbow.glb | 500 | 200–2000 | 94.3 | 128×128 | 0 | 0 |
| props/pipe_straight.glb | 420 | 200–2000 | 84.6 | 128×128 | 0 | 0 |
| props/pipe_valve.glb | 876 | 200–2000 | 175.0 | 128×128 | 0 | 0 |
| props/standing_torch.glb | 984 | 200–2000 | 193.1 | 128×128 | 0 | 0 |
| props/wooden_crate.glb | 1480 | 200–2000 | 245.9 | 128×128 | 0 | 0 |
| weapons/chaingun.glb | 9720 | 4000–10000 | 1061.4 | 128×128 | 0 | 0 |
| weapons/fist.glb | 6032 | 4000–10000 | 579.9 | 128×128 | 0 | 0 |
| weapons/pistol.glb | 6060 | 4000–10000 | 798.6 | 128×128 | 0 | 0 |
| weapons/rocket_launcher.glb | 9640 | 4000–10000 | 1172.1 | 128×128 | 0 | 0 |
| weapons/shotgun.glb | 8308 | 4000–10000 | 999.7 | 128×128 | 0 | 0 |

Surfaces: **14 sets, 56 PNG maps, 1024 × 1024 each**. All decoded opposite edges match exactly (maximum error 0). Albedo and emissive use sRGB; normal and roughness are linear data. 2m repeats.

[Surface seam measurements](surface_validation.json) · [Surface catalogue](surface_catalogue.png)

Runtime delivery: **13.94 MiB GLBs + 16.58 MiB surface maps**. Previews/proof are excluded from the runtime asset list. Load by level; no browser load-time measurement is claimed.

[Exported animation poses](proof/animation_poses.png) · [20m low-light view](proof/visibility_20m.png) · [Round-trip dimensions and skin motion](proof/roundtrip.json)
