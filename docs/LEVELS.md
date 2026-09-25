# FIREBIRD 3D Levels

This game follows the shared [Level Design Contract](../../LEVEL_DESIGN_CONTRACT.md)
(`games/LEVEL_DESIGN_CONTRACT.md` in the Phoenix workspace).

Check the maps after every change:

```
node tests/levels.contract.test.js
```

## Status

| Level | Checked | Bot-played | Human-played |
|-------|---------|------------|--------------|
| E1M1 Ash Gates | yes | pending (playtest harness in progress) | no |
| E1M2 The Furnace | yes | pending | no |
| E1M3 Demon Throne | yes | pending | no |
| E1M4 Riley's Arena | yes | pending | no |

## Cue language (rule N2)

- **Pair of torches beside a door:** this door matters. Used for key doors, the
  critical path, key rooms and exits. Single torches are just room lighting.
- **Red / blue:** keycards, their doors, and their colour on the automap.
- **Green panel in a wall:** the exit switch. Press E.
- **A wall that looks different:** it might be a secret. Never required.
- **Barrel next to a demon:** an answer, not a hazard, if you shoot from far away.

## Briefs

### E1M1: Ash Gates
- **Role:** intro. **Teaches:** move, shoot, open doors, one imp, the
  shotgun, barrels, keys and locks.
- **Player goal:** find the blue keycard → find the exit switch.
- **Beats:**
  1. Safe start room.
  2. Door directly ahead (the prompt teaches E).
  3. One imp, alone, in the shotgun room.
  4. Shotgun in plain sight.
  5. A second imp standing by barrels (teaches barrels).
  6. A torch-flanked door to the hall.
  7. The hall: the torch-lit blue door is visible first (lock before key),
     then the key under torches at the far end.
  8. The exit room, its switch flanked by torches.
- **Optional:** the secret wall beside the start room (Phoenix Orb, shells).
- **First confusion:** where the key is. The fix: the blue door is lit and
  visible on entry, the key is lit, and the goal marker appears once the key
  has been seen.

### E1M2: The Furnace
- **Role:** ramp. **Teaches:** the red key in a side room; gnashers in number.
  **Tests:** doors, barrels.
- **Beats:**
  1. Start corridor (safe: no sightline to demons).
  2. Central hall.
  3. West room holding the torch-lit red key.
  4. East barrel room (optional).
  5. The torch-flanked red door.
  6. Exit room, with its gnashers pulled back from the door.

### E1M3: Demon Throne
- **Role:** test. **Teaches:** the Ember Knight. **Tests:** everything in
  E1M1–2 at once.
- **Beats:**
  1. A long corridor.
  2. The throne hall with the knight and his escorts.
  3. The torch-flanked key room to the east.
  4. The torch-flanked red door.
  5. Exit.

### E1M4: Riley's Arena
- **Role:** finale. **Teaches:** nothing new. Riley uses what the player
  already knows (A2). **Tests:** everything.
- **Beats:**
  1. Armoury start.
  2. Hall.
  3. Torch-flanked blue-key room.
  4. The torch-flanked arena door.
  5. Riley.
