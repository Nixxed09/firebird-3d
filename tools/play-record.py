"""Turn one Firebird game log into a play record, or report on the records kept so far.

The game already writes a line for everything that matters to "where did the player get
stuck": FB_EVENT death, fell, hurt, respawn, dash, slide, reload, hollow_released,
arena_clear. This reads those lines. It changes nothing in the game and sends nothing
anywhere: records stay in %LOCALAPPDATA%\\FamilyArcade\\firebird-play on this computer.

    python -I tools/play-record.py record <game.log> --player Nix [--map <map>]
    python -I tools/play-record.py report [player] [--json]

A record says who played only as far as the family file knows them
(GamesOS/player-learning/FAMILY_IDENTITY.md). Anyone not in it, or with no consent value,
is kept as a guest. A run driven by the game's own bot (-FBAuto) is marked bot-played.
The report gives counts and the conditions they were seen under, never a type or a score.
"""
import argparse
import datetime as dt
import glob
import json
import os
import re
import sys

SCHEMA = "firebird-play/v1"
LINE = re.compile(r"^\[(\d{4})\.(\d\d)\.(\d\d)-(\d\d)\.(\d\d)\.(\d\d):(\d{3})\]\[\s*\d+\]LogFirebird: (?:Display: )?(.*)$")
PROGRESS = {"hollow_released", "release", "release_here", "arena_clear"}
TROUBLE = {"death", "fell", "hurt"}
MOVES = {"dash", "slide", "coyote_jump", "buffered_jump", "reload"}
QUIET = 45.0  # seconds without progress before a stretch counts as slow going


def play_dir():
    return os.environ.get("FIREBIRD_PLAY_DIR") or os.path.join(
        os.environ.get("LOCALAPPDATA", os.path.expanduser("~")), "FamilyArcade", "firebird-play")


def family_member(name):
    """The family member this name belongs to, or None (a guest)."""
    path = os.environ.get("FAMILY_IDENTITY_FILE") or os.path.join(
        os.environ.get("LOCALAPPDATA", ""), "FamilyArcade", "family.json")
    try:
        with open(path, encoding="utf-8-sig") as fh:
            fam = json.load(fh)
    except (OSError, ValueError):
        return None
    if fam.get("schema") != "family-identity/v1":
        return None
    for m in fam.get("members", []):
        if name.lower() in [str(n).lower() for n in m.get("names", [])]:
            return {"member_id": m.get("member_id"), "consent": m.get("consent")}
    return None


def parse(log_path):
    events, first, last, build, bot = [], None, None, None, False
    with open(log_path, encoding="utf-8", errors="replace") as fh:
        for raw in fh:
            m = LINE.match(raw.strip())
            if not m:
                continue
            y, mo, d, h, mi, s, ms = (int(x) for x in m.groups()[:7])
            t = dt.datetime(y, mo, d, h, mi, s, ms * 1000, tzinfo=dt.timezone.utc)
            first = first or t
            last = t
            text = m.group(8)
            if text.startswith("FB_AUTO start"):
                bot = True
            b = re.match(r"FB_SESSION start mode=\d+ build=(\S+)", text)
            if b:
                build = b.group(1)
            e = re.match(r"FB_EVENT (\w+)(.*)$", text)
            if not e:
                continue
            kind, rest = e.group(1), e.group(2).strip()
            ev = {"t": round((t - first).total_seconds(), 2), "kind": kind}
            for k, v in re.findall(r"(\w+)=(-?[\d.]+)", rest):
                ev[k] = float(v)
            seat = re.search(r"\bP(\d)\b", rest)
            if seat:
                ev["seat"] = int(seat.group(1))
            at = re.search(r"at \((-?[\d.]+), (-?[\d.]+)\)", rest)
            if at:
                ev["x"], ev["y"] = float(at.group(1)), float(at.group(2))
            events.append(ev)
    return events, first, last, build, bot


def stretches(events, total):
    """Stretches between two progress events, kept when they were slow or cost something."""
    out, start, after, bag = [], 0.0, "start", []

    def close(end, before):
        trouble = {k: sum(1 for e in bag if e["kind"] == k) for k in sorted(TROUBLE)}
        secs = round(end - start, 1)
        if secs >= QUIET or trouble["death"] or trouble["fell"]:
            out.append({"from_s": round(start, 1), "to_s": round(end, 1), "seconds": secs,
                        "after": after, "before": before, **trouble})

    for e in events:
        if e["kind"] in PROGRESS:
            close(e["t"], e["kind"])
            start, after, bag = e["t"], e["kind"], []
        elif e["kind"] in TROUBLE:
            bag.append(e)
    close(total, "end of session")
    return out


def record(args):
    events, first, last, build, bot = parse(args.log)
    if first is None:
        print("FB_PLAY none (no game lines in %s)" % args.log)
        return 1
    total = round((last - first).total_seconds(), 1)
    counts = {}
    for e in events:
        counts[e["kind"]] = counts.get(e["kind"], 0) + 1
    member = None if bot else family_member(args.player)
    rec = {
        "schema": SCHEMA,
        "proof": "bot-played" if bot else "human-played",
        "player": "bot" if bot else args.player,
        "member_id": member["member_id"] if member and member.get("consent") else None,
        "consent": member.get("consent") if member else None,
        "map": args.map or "default (test course and arena)",
        "build": build,
        "started_at": first.isoformat(),
        "seconds": total,
        "counts": dict(sorted(counts.items())),
        "arena_clear_seconds": [e.get("seconds") for e in events if e["kind"] == "arena_clear"],
        "hard_stretches": stretches(events, total),
        "events": events,
    }
    os.makedirs(play_dir(), exist_ok=True)
    name = "%s-%s.json" % (first.strftime("%Y%m%d-%H%M%S"), re.sub(r"[^a-z0-9]+", "-", rec["player"].lower()).strip("-") or "guest")
    path = os.path.join(play_dir(), name)
    with open(path, "w", encoding="utf-8", newline="\n") as fh:
        json.dump(rec, fh, indent=1)
    c = rec["counts"]
    print("FB_PLAY %s %s %.0fs deaths=%d falls=%d hurts=%d released=%d clears=%d hard_stretches=%d" % (
        rec["proof"], rec["player"], total, c.get("death", 0), c.get("fell", 0), c.get("hurt", 0),
        c.get("hollow_released", 0), c.get("arena_clear", 0), len(rec["hard_stretches"])))
    print("FB_PLAY_FILE " + path)
    return 0


def report(args):
    recs = []
    for path in sorted(glob.glob(os.path.join(play_dir(), "*.json"))):
        try:
            with open(path, encoding="utf-8") as fh:
                r = json.load(fh)
        except (OSError, ValueError):
            continue
        if r.get("schema") == SCHEMA and (args.bots or r.get("proof") == "human-played"):
            if not args.player or r.get("player", "").lower() == args.player.lower():
                recs.append(r)
    people = {}
    for r in recs:
        people.setdefault(r["player"], []).append(r)
    out = {}
    for who, rs in people.items():
        minutes = sum(r["seconds"] for r in rs) / 60.0
        tot = {}
        for r in rs:
            for k, v in r["counts"].items():
                tot[k] = tot.get(k, 0) + v
        hard = sorted((dict(s, started_at=r["started_at"], map=r["map"]) for r in rs for s in r["hard_stretches"]),
                      key=lambda s: -s["seconds"])
        clears = [s for r in rs for s in r["arena_clear_seconds"] if s is not None]
        out[who] = {
            "sessions": len(rs), "minutes": round(minutes, 1),
            "first": rs[0]["started_at"], "last": rs[-1]["started_at"],
            "member_id": rs[-1].get("member_id"),
            "totals": dict(sorted(tot.items())),
            "per_10_minutes": {k: round(tot.get(k, 0) * 10 / minutes, 1) if minutes else None
                               for k in sorted(TROUBLE | MOVES | {"hollow_released"})},
            "arena_clear_seconds": clears,
            "hardest_stretches": hard[:5],
            "sessions_that_ended_in_a_hard_stretch": sum(
                1 for r in rs if r["hard_stretches"] and r["hard_stretches"][-1]["before"] == "end of session"),
        }
    if args.json:
        print(json.dumps(out, indent=1))
        return 0
    if not out:
        print("No play records yet in %s" % play_dir())
        return 0
    for who, p in out.items():
        print("%s: %d sessions, %.1f minutes (%s to %s)" % (who, p["sessions"], p["minutes"], p["first"][:10], p["last"][:10]))
        if p["sessions"] < 3:
            print("  Too few sessions to say much about how this person plays.")
        r = p["per_10_minutes"]
        print("  Per 10 minutes: deaths %s, falls %s, hits taken %s, dashes %s, slides %s, Hollows set free %s" % (
            r["death"], r["fell"], r["hurt"], r["dash"], r["slide"], r["hollow_released"]))
        if p["arena_clear_seconds"]:
            print("  Arena clear times, oldest first (s): " + ", ".join("%.0f" % s for s in p["arena_clear_seconds"]))
        print("  Sessions that stopped during a hard stretch: %d of %d" % (p["sessions_that_ended_in_a_hard_stretch"], p["sessions"]))
        for s in p["hardest_stretches"]:
            print("  Hard stretch %s, %s: %.0fs between %s and %s, deaths %d, falls %d, hits %d" % (
                s["started_at"][:10], s["map"], s["seconds"], s["after"], s["before"], s["death"], s["fell"], s["hurt"]))
    return 0


def main():
    ap = argparse.ArgumentParser()
    sub = ap.add_subparsers(dest="cmd", required=True)
    r = sub.add_parser("record")
    r.add_argument("log")
    r.add_argument("--player", default="guest")
    r.add_argument("--map", default="")
    p = sub.add_parser("report")
    p.add_argument("player", nargs="?")
    p.add_argument("--json", action="store_true")
    p.add_argument("--bots", action="store_true", help="include bot-played runs")
    args = ap.parse_args()
    return record(args) if args.cmd == "record" else report(args)


if __name__ == "__main__":
    sys.exit(main())
