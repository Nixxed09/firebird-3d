# Brief: bolt-action infantry rifle (period_arms / bolt_rifle)

Written 2026-11-12, after the model's first four rounds, which were built without it (section 5).
The model was rebuilt from it in rounds 6 and 7.

## 1. What it is in the game

A long infantry rifle of the late 1880s to 1890s: the weapon of a city militia in Firebird's burned-city
levels. First-person weapon, also seen leaning on walls as a prop. Our own model of the type, no maker's
name, stamps or numbers.

## 2. The type it follows, and its real sizes

Pattern: the German commission rifle of 1888 and its Mannlicher-pattern relatives.
Source: https://en.wikipedia.org/wiki/Gewehr_1888 (read 2026-11-12).

| Fact | Value | In the model |
|---|---|---|
| Overall length | 1,245 mm | 1,262 mm |
| Barrel length | 740 mm | 755 mm |
| Weight | 3.9 kg | not used |
| Magazine | 5 rounds in a steel clip, pushed in from the top; the empty clip drops out of a hole in the bottom | one piece with the guard, clip hole below |
| Barrel | sits inside a thin sheet-steel jacket tube, so what you see is a plain tube about 20 mm across with no taper | an even 25 mm jacket tube |
| Receiver | split bridge: the bolt handle passes through the rear bridge and turns down in front of it | handle ahead of the bridge, passing back through a slot in it |

Not stated on that page, taken from the reference photographs instead: sights, stock shape, bands, bayonet
lug, cleaning rod, the guard and magazine.

## 3. References

Fetch with:

```powershell
python -I tools\blender\fetch_refs.py --pack period_arms --asset bolt_rifle --query "Gewehr 1888 rifle" --query "Mannlicher M1895 rifle" --query "Gewehr 88 receiver bolt" --count 4
```

| Commons file | View | What it teaches |
|---|---|---|
| `Infanteriegewehr m-1888 Tyskland kaliber 7,92mm - Armémuseum` (CC BY 3.0) | both sides, full length | the outline; the guard and magazine as one long shallow piece; the straight-handled bolt standing up when open; two bands; the jacket tube |
| `Rifles1905 2` (public domain) | side drawings of several rifles | how this type differs from its neighbours |
| `Mannlicher M1895 night sights` (CC BY-SA 4.0) | sights, close | the rear sight's ramp and leaf |

What the side photograph shows that is easy to get wrong (1, 3 and 5 are now in the model; 2 and 4 in part):

1. **Guard and magazine are one piece of steel**, about 230 mm long. The magazine hangs only about 25 mm
   below the stock and its bottom edge runs forward and up in one sweep into the stock. The guard bow is the
   rear part of the same piece. Build it with `plate()` (one outline, the bow as a hole).
2. **The butt is deep and straight-lined**: about 125 mm tall at the plate, comb and toe both straight, the
   wrist short. The toe line meets the guard's rear tang.
3. **The barrel is a jacket tube** of even diameter from the receiver to the muzzle, with a short step at
   the muzzle and the cleaning rod's end under it.
4. **The lower band sits just past the middle** and carries the sling loop on the left; the upper band and
   nose cap is one fitting at the muzzle end with the bayonet bar on its right side.
5. **The wood is dark red-brown** with a strong figure, not orange.

## 4. Parts and how they move

| Part | Material | Moves | How |
|---|---|---|---|
| Bolt, with handle, knob, shroud, cocking piece | bright steel body, blued rear | yes | lifts a quarter turn (handle from level on the right to straight up), draws back 85 mm, returns, turns down |
| Trigger | steel | yes | rocks 10 degrees about its top pin |
| Everything else | walnut, blued steel | no | |

Declared in the build script with `motion()`; the forge renders three moments of the cycle
(`action_1..3`) and exports `bolt_rifle_rig.fbx` with bones `root`, `bolt`, `trigger` and the animation
`bolt_rifle_operate`.

Not modelled, and the game does not need them yet: the clip, cartridges, the magazine follower.

## 5. What happened without this brief

Rounds 1 to 4 were built and judged from memory. Four critics, none with a reference, scored part shapes
1 of 3 every round. One of them asked for the magazine to be made 50 mm deep and "near-vertical", which is
the opposite of the photograph. The loop cannot find the truth when neither the builder nor the critic is
looking at it. Reference first, then build.
