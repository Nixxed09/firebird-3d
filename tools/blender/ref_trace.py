# Measure a reference photo, and measure a build against it. Numbers, not opinions.
#
# 1. TRACE a side-view reference photo on a plain light background:
#      blender -b --factory-startup --python-exit-code 1 --python ref_trace.py -- \
#          --ref art/reference/<pack>/<asset>/side.jpg --length 1.168 --out <folder>
#    Writes ref_profile.json: the outline's top and bottom edge at 41 stations along the
#    object, in metres. x is measured from the rear end (the left of the picture);
#    z is measured from the "datum line" (the straight top edge of the front part: a barrel
#    top, a blade's back, a roof ridge). The photo is levelled on that line first.
#    Also writes ref_mask.png so you can see what was taken as the object.
#    The JSON's "pixel_to_metres" lets you turn any pixel you read off the photo into metres.
#
# 2. COMPARE a built .blend with that reference:
#      blender -b <asset.blend> --python-exit-code 1 --python ref_trace.py -- \
#          --ref <same photo> --length 1.168 --out <folder> --compare 1 [--window 0,0.56]
#    Renders the model's side outline at the same scale, lines both up (rear end on rear
#    end, datum line on datum line) and writes ref_compare.json (overlap score 0..1 inside
#    the window, and the top/bottom error in millimetres at every station) and
#    ref_overlay.png: grey = both agree, RED = the reference has it and the model does not,
#    BLUE = the model has it and the reference does not.
#
# The picture must show the object pointing right (use --flip 1 if it points left).
# --length is the real overall length of the object in the photo, in metres. Look it up;
# say in the asset's notes where the number came from.
import json, math, os, sys
import bpy
import numpy as np

sys.dont_write_bytecode = True
a = sys.argv[sys.argv.index("--") + 1:] if "--" in sys.argv else []
opt = {a[i].lstrip("-"): a[i + 1] for i in range(0, len(a) - 1, 2)}
out = opt["out"]
os.makedirs(out, exist_ok=True)
LENGTH = float(opt["length"])
WHITE = float(opt.get("white", 0.86))        # a pixel darker than this (in any channel) is the object
DATUM = [float(v) for v in opt.get("datum", "0.62,0.92").split(",")]   # where the straight top edge is, as fractions of the length
N_ST = 41


def load(path):
    im = bpy.data.images.load(path)
    w, h = im.size
    px = np.array(im.pixels[:], dtype=np.float32).reshape(h, w, 4)   # row 0 is the BOTTOM row
    bpy.data.images.remove(im)
    return px


def save(path, rgb):
    h, w = rgb.shape[:2]
    im = bpy.data.images.new("o", w, h)
    px = np.ones((h, w, 4), dtype=np.float32)
    px[..., :3] = rgb
    im.pixels = px.ravel()
    im.filepath_raw = path
    im.file_format = "PNG"
    im.save()
    bpy.data.images.remove(im)


def edges(mask):
    """per column: top row, bottom row (pixels, -1 where empty)"""
    any_ = mask.any(axis=0)
    h = mask.shape[0]
    top = np.where(any_, h - 1 - np.argmax(mask[::-1], axis=0), -1)
    bot = np.where(any_, np.argmax(mask, axis=0), -1)
    return top, bot


def bbox_x(mask):
    cols = np.where(mask.sum(axis=0) >= 2)[0]
    return int(cols[0]), int(cols[-1])


def datum_line(mask):
    """the straight top edge between DATUM fractions of the length: slope and height (pixels)"""
    x0, x1 = bbox_x(mask)
    top, _ = edges(mask)
    xs = np.arange(int(x0 + DATUM[0] * (x1 - x0)), int(x0 + DATUM[1] * (x1 - x0)))
    ys = top[xs].astype(np.float64)
    keep = ys >= 0
    for _ in range(4):                      # fit, drop what sticks up (sights, bands), fit again
        k, c = np.polyfit(xs[keep], ys[keep], 1)
        res = ys - (k * xs + c)
        keep = (ys >= 0) & (np.abs(res) <= max(1.0, np.percentile(np.abs(res[keep]), 70)))
    return k, c


def level(mask):
    """rotate the mask so the datum line is level"""
    k, _ = datum_line(mask)
    ang = math.atan(k)
    h, w = mask.shape
    yy, xx = np.mgrid[0:h, 0:w]
    cx, cy = w / 2, h / 2
    sx = cx + (xx - cx) * math.cos(ang) - (yy - cy) * math.sin(ang)
    sy = cy + (xx - cx) * math.sin(ang) + (yy - cy) * math.cos(ang)
    sx, sy = np.rint(sx).astype(int), np.rint(sy).astype(int)
    ok = (sx >= 0) & (sx < w) & (sy >= 0) & (sy < h)
    outm = np.zeros_like(mask)
    outm[ok] = mask[sy[ok], sx[ok]]
    return outm, math.degrees(ang)


def measure(mask, mpp):
    """stations along the object: x from the rear end, z from the datum line, metres"""
    x0, x1 = bbox_x(mask)
    _, c = datum_line(mask)
    k, c = datum_line(mask)
    top, bot = edges(mask)
    st = []
    for i in range(N_ST):
        px = int(round(x0 + (x1 - x0) * i / (N_ST - 1)))
        px = min(max(px, x0 + 1), x1 - 1)
        zd = k * px + c
        st.append({"x": round((px - x0) * mpp, 4), "top": round((top[px] - zd) * mpp, 4), "bottom": round((bot[px] - zd) * mpp, 4)})
    return st, x0, x1, k, c


# ---- the reference
ref = load(os.path.abspath(opt["ref"]))
if opt.get("flip"):
    ref = ref[:, ::-1]
rmask = (ref[..., :3].min(axis=2) < WHITE) & (ref[..., 3] > 0.5)
rmask, tilt = level(rmask)
rx0, rx1 = bbox_x(rmask)
mpp = LENGTH / (rx1 - rx0)
stations, _, _, rk, rc = measure(rmask, mpp)
save(os.path.join(out, "ref_mask.png"), np.repeat((~rmask)[..., None], 3, axis=2).astype(np.float32))
profile = {"ref": opt["ref"], "length_m": LENGTH, "metres_per_pixel": round(mpp, 6), "tilt_removed_deg": round(tilt, 2),
           "x_is": "metres from the rear end", "z_is": "metres from the datum line (the straight top edge), up is +",
           "pixel_to_metres": "after levelling: x = (px - %d) * %.6f ; z = (rows_from_bottom - %.1f) * %.6f" % (rx0, mpp, rk * (rx0 + rx1) / 2 + rc, mpp),
           "stations": stations}
with open(os.path.join(out, "ref_profile.json"), "w") as f:
    json.dump(profile, f, indent=1)
print("REF_TRACE_OK length=%.3f mpp=%.5f tilt=%.2f" % (LENGTH, mpp, tilt))
print(" x      top     bottom   (metres; x from the rear end, z from the datum line)")
for s in stations:
    print("%6.3f %7.4f %7.4f" % (s["x"], s["top"], s["bottom"]))

if not opt.get("compare"):
    sys.exit(0)

# ---- the model's outline at the same scale
scene = bpy.context.scene
objs = [o for o in bpy.data.collections["Asset"].objects if o.type == "MESH"]
lo, hi = np.full(3, 1e9), np.full(3, -1e9)
for o in objs:
    for corner in o.bound_box:
        w = o.matrix_world @ __import__("mathutils").Vector(corner)
        lo, hi = np.minimum(lo, w), np.maximum(hi, w)
mid = (lo + hi) / 2
W = int((hi[0] - lo[0]) / mpp) + 80
H = int((hi[2] - lo[2]) / mpp) + 80
cam_d = bpy.data.cameras.new("RefCam")
cam_d.type, cam_d.ortho_scale, cam_d.clip_end = "ORTHO", max(W, H) * mpp, 100
cam = bpy.data.objects.new("RefCam", cam_d)
scene.collection.objects.link(cam)
cam.location = (mid[0], lo[1] - 5.0, mid[2])
cam.rotation_euler = (math.radians(90), 0, 0)
scene.camera = cam
scene.render.engine = "BLENDER_WORKBENCH"
scene.render.film_transparent = True
scene.render.resolution_x, scene.render.resolution_y, scene.render.resolution_percentage = W, H, 100
scene.render.image_settings.file_format = "PNG"
scene.render.image_settings.color_mode = "RGBA"
scene.render.filepath = os.path.join(out, "model_side_alpha.png")
bpy.ops.render.render(write_still=True)
mmask = load(scene.render.filepath)[..., 3] > 0.5
mst, mx0, mx1, mk, mc = measure(mmask, mpp)

# ---- both on one grid: x from the rear end, z from the datum line
win = [float(v) for v in opt.get("window", "0,%f" % min(LENGTH, (mx1 - mx0) * mpp)).split(",")]
gx = np.arange(int(-0.02 / mpp), int((win[1] + 0.02) / mpp))
gz = np.arange(int(-0.26 / mpp), int(0.08 / mpp))


def sample(mask, x0, k, c):
    xi = gx[None, :] + x0
    zi = np.rint(gz[:, None] + (k * (xi) + c)).astype(int)
    xi = np.broadcast_to(xi, zi.shape)
    ok = (xi >= 0) & (xi < mask.shape[1]) & (zi >= 0) & (zi < mask.shape[0])
    g = np.zeros(zi.shape, dtype=bool)
    g[ok] = mask[zi[ok], xi[ok]]
    return g


R, M = sample(rmask, rx0, rk, rc), sample(mmask, mx0, mk, mc)
inwin = (gx * mpp >= win[0]) & (gx * mpp <= win[1])
both, either = (R & M)[:, inwin].sum(), (R | M)[:, inwin].sum()
iou = float(both) / max(1, either)
rgb = np.ones(R.shape + (3,), dtype=np.float32)
rgb[R & M] = (0.45, 0.45, 0.45)
rgb[R & ~M] = (0.90, 0.15, 0.10)
rgb[M & ~R] = (0.15, 0.35, 0.95)
rgb[:, ~inwin] = rgb[:, ~inwin] * 0.5 + 0.5
save(os.path.join(out, "ref_overlay.png"), rgb)

rows = []
for i in range(R.shape[1]):
    if not inwin[i] or i % max(1, int(0.014 / mpp)):
        continue
    def tb(g):
        col = np.where(g[:, i])[0]
        return (gz[col[-1]] * mpp, gz[col[0]] * mpp) if len(col) else (None, None)
    (rt, rb), (mt, mb) = tb(R), tb(M)
    if rt is None or mt is None:
        continue
    rows.append({"x": round(float(gx[i] * mpp), 3), "top_error_mm": round((mt - rt) * 1000, 1), "bottom_error_mm": round((mb - rb) * 1000, 1)})
worst = sorted(rows, key=lambda r: -max(abs(r["top_error_mm"]), abs(r["bottom_error_mm"])))[:8]
rep = {"overlap_iou": round(iou, 3), "window_m": win, "model_length_m": round((mx1 - mx0) * mpp, 4), "reference_length_m": LENGTH,
       "error_is": "model minus reference, millimetres; + means the model's edge is HIGHER than the reference's",
       "worst_stations": worst, "stations": rows}
with open(os.path.join(out, "ref_compare.json"), "w") as f:
    json.dump(rep, f, indent=1)
print("REF_COMPARE_OK iou=%.3f window=%s" % (iou, win))
for r in worst:
    print("  x=%.3f  top %+5.1f mm  bottom %+5.1f mm" % (r["x"], r["top_error_mm"], r["bottom_error_mm"]))
