# Pack forge, step 0: fetch reference photographs for an asset from Wikimedia Commons.
#
#   python -I tools\blender\fetch_refs.py --pack period_arms --asset bolt_rifle ^
#          --query "Gewehr 1888 rifle" --query "Mannlicher M1895 rifle" [--count 6] [--width 1600]
#
# Writes engine/Saved/PackForge/<pack>/<asset>/refs/NN_<title>.jpg and refs.json (for every picture: the
# Commons page, the author, the licence, the query that found it, and an empty "view" for the builder to
# fill in after looking: side_right, side_left, top, three_quarter, detail_action, exploded, drawing).
#
# Rules (docs/PACK_FORGE.md): a reference teaches shape and proportion and is never traced, projected,
# used as a texture or put in a pack. References are not committed. Only free-licence pictures are
# fetched (Commons hosts nothing else), and the licence is written down so that stays checkable.
# No login and no key: this is the public Commons API, with a plain client name.
import argparse, json, os, re, sys, time, urllib.parse, urllib.request

API = "https://commons.wikimedia.org/w/api.php"
UA = "PackForgeRefs/0.1 (reference fetcher for 3D modelling; stdlib urllib)"
KEEP = (".jpg", ".jpeg", ".png")


def get(url, raw=False):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60) as r:
        data = r.read()
    return data if raw else json.loads(data.decode("utf-8"))


def strip(html):
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", "", html or "")).strip()[:160]


def search(query, count, width):
    q = urllib.parse.urlencode({
        "action": "query", "format": "json", "generator": "search", "gsrsearch": query + " filetype:bitmap",
        "gsrnamespace": 6, "gsrlimit": count * 3, "prop": "imageinfo",
        "iiprop": "url|size|extmetadata", "iiurlwidth": width})
    pages = (get(API + "?" + q).get("query") or {}).get("pages") or {}
    out = []
    for p in sorted(pages.values(), key=lambda p: p.get("index", 0)):
        ii = (p.get("imageinfo") or [{}])[0]
        if not ii.get("thumburl") or not p["title"].lower().endswith(KEEP):
            continue
        if ii.get("width", 0) < 900:          # too small to read a part from
            continue
        meta = ii.get("extmetadata") or {}
        out.append({"title": p["title"], "page": ii.get("descriptionurl"), "image": ii["thumburl"],
                    "width": ii.get("width"), "height": ii.get("height"),
                    "licence": strip((meta.get("LicenseShortName") or {}).get("value")),
                    "author": strip((meta.get("Artist") or {}).get("value")),
                    "description": strip((meta.get("ImageDescription") or {}).get("value")),
                    "query": query, "view": ""})
        if len(out) >= count:
            break
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--pack", required=True)
    ap.add_argument("--asset", required=True)
    ap.add_argument("--query", action="append", required=True)
    ap.add_argument("--count", type=int, default=6, help="pictures per query")
    ap.add_argument("--width", type=int, default=1600)
    a = ap.parse_args()
    root = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    out = os.path.join(root, "engine", "Saved", "PackForge", a.pack, a.asset, "refs")
    os.makedirs(out, exist_ok=True)
    index = os.path.join(out, "refs.json")
    refs = json.load(open(index, encoding="utf-8")) if os.path.exists(index) else []
    have = {r["title"] for r in refs}
    for query in a.query:
        try:
            found = search(query, a.count, a.width)
        except Exception as e:  # noqa: BLE001
            print("FETCH_REFS query failed: %s (%s)" % (query, e))
            continue
        for r in found:
            if r["title"] in have:
                continue
            name = "%02d_%s" % (len(refs) + 1, re.sub(r"[^A-Za-z0-9]+", "_", r["title"][5:])[:60].strip("_"))
            ext = os.path.splitext(urllib.parse.urlparse(r["image"]).path)[1].lower() or ".jpg"
            data = None
            for wait in (0, 8, 20):           # Commons answers 429 when asked too fast
                time.sleep(wait)
                try:
                    data = get(r["image"], raw=True)
                    break
                except Exception as e:  # noqa: BLE001
                    err = e
            if data is None:
                print("FETCH_REFS skipped %s (%s)" % (r["title"], err))
                continue
            r["file"] = name + ext
            with open(os.path.join(out, r["file"]), "wb") as f:
                f.write(data)
            refs.append(r)
            have.add(r["title"])
            time.sleep(2.0)
    with open(index, "w", encoding="utf-8") as f:
        json.dump(refs, f, indent=1, ensure_ascii=False)
    for r in refs:
        print("%s | %s | %s" % (r["file"], r["licence"], r["description"][:70]))
    print("FETCH_REFS_OK %d pictures in %s" % (len(refs), out))
    if not refs:
        sys.exit(1)


if __name__ == "__main__":
    main()
