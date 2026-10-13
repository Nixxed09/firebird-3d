extends SceneTree
## The Godot half of tools/ue-test-arcade-lan.ps1: the Family Arcade's own arcade_lan.gd (copied byte for
## byte from GamesOS/shared/arcade-lan into a throwaway project at test time) joining a room the UE game
## hosts. One flushed line per event in --log: NAME {json}.
##   godot --headless --path <tmp> --script res://ue_interop_probe.gd -- --role joiner --beacon-port N --log F
##         --game firebird-coop --build B --order O [--room ID] [--max-seconds 90]

const ArcadeLan := preload("res://arcade_lan.gd")

var args := {}
var log_file: FileAccess
var lan: Node
var ev := {"joined": {}, "refused": {}, "closed": {}}


func _initialize() -> void:
	var key := ""
	for item in OS.get_cmdline_user_args():
		if item.begins_with("--"):
			key = item.substr(2)
			args[key] = ""
		elif key != "":
			args[key] = item
	log_file = FileAccess.open(str(args.get("log", "")), FileAccess.WRITE)
	if log_file == null:
		quit(2)
		return
	_run.call_deferred()


func _log(name: String, data: Dictionary) -> void:
	log_file.store_line(name + " " + JSON.stringify(data))
	log_file.flush()


func _now_ms() -> int:
	return int(Time.get_unix_time_from_system() * 1000.0)


func _wait(timeout_ms: int, condition: Callable) -> bool:
	var deadline := Time.get_ticks_msec() + timeout_ms
	while Time.get_ticks_msec() < deadline:
		if condition.call():
			return true
		await create_timer(0.05).timeout
	return condition.call()


func _run() -> void:
	_log("PROBE_START", {"role": args.get("role", ""), "beacon_port": args.get("beacon-port", "")})
	_watchdog.call_deferred()
	lan = ArcadeLan.new()
	lan.beacon_port = int(args["beacon-port"])
	var targets: Array[String] = ["127.0.0.1"]
	lan.extra_targets = targets
	lan.relay_url = ""
	lan.configure(str(args.get("game", "firebird-coop")), str(args["build"]), int(args.get("order", "0")), "GodotKid")
	root.add_child(lan)
	lan.joined.connect(func(room: String, info: Dictionary) -> void: ev["joined"][room] = info)
	lan.join_refused.connect(func(room: String, message: String) -> void: ev["refused"][room] = message)
	lan.room_closed.connect(func(room: String, message: String) -> void:
		ev["closed"][room] = message
		_log("GUEST_CLOSED", {"room": room, "message": message, "at": _now_ms()}))
	var want := str(args.get("room", ""))
	var found := await _wait(60000, func() -> bool:
		for r in lan.list_rooms(str(args.get("game", "firebird-coop"))):
			if want == "" or r["room"] == want:
				return true
		return false)
	var rooms: Array = lan.list_rooms(str(args.get("game", "firebird-coop")))
	_log("JOIN_LIST", {"found": found, "rooms": rooms})
	if found:
		var room_id: String = rooms[0]["room"]
		for r in rooms:
			if want != "" and r["room"] == want:
				room_id = r["room"]
		lan.join_room(room_id)
		var answered := await _wait(6000, func() -> bool: return ev["joined"].has(room_id) or ev["refused"].has(room_id))
		if ev["joined"].has(room_id):
			_log("JOINED", ev["joined"][room_id])
			# stay joined until the host goes (politely or not)
			await _wait(int(args.get("stay-ms", "40000")), func() -> bool: return ev["closed"].has(room_id))
		else:
			_log("REFUSED", {"room": room_id, "message": ev["refused"].get(room_id, ""), "answered": answered})
	_log("PROBE_END", {})
	lan.shutdown()
	log_file.close()
	quit(0)


func _watchdog() -> void:
	await create_timer(float(args.get("max-seconds", "120"))).timeout
	_log("PROBE_TIMEOUT", {})
	log_file.flush()
	quit(2)
