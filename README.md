# FIREBIRD

A first-person shooter in Unreal Engine 5.8 that Phoenix plays over the home network
with his brother and dad, co-op and versus. The Firebird fights through Ashgate and
cracks open the Overseers' Hollows to set the light inside free.

**Read first:** [docs/REBOOT_PLAN.md](docs/REBOOT_PLAN.md) (the plan, the rules, the next
step) and the newest entry in [docs/REBOOT_LOG.md](docs/REBOOT_LOG.md).

## Run it

| Do | Command |
|---|---|
| Build (close the editor first) | `.\tools\ue-build.ps1` |
| Play | `.\tools\ue-play.ps1` (`-Map /Game/Firebird/Maps/<map>` for a hand-built map) |
| Open the editor | `.\tools\ue-edit.ps1` |
| Scripted checks | `.\tools\ue-capture.ps1 -Scenario feel`, `.\tools\ue-controller-test.ps1` |
| Package for other PCs | `.\tools\ue-package.ps1` (output in `builds/windows`) |

Code is in `engine/Source/Firebird`. Story, names, colours and kid-safety rules:
[STYLE_GUIDE.md](STYLE_GUIDE.md), [docs/STORY_BIBLE.md](docs/STORY_BIBLE.md).

## Grades from Nix

Nix grades pictures of the game in the GamesOS rating studio (`Rate A Game.cmd` in
`D:\TE-Code\ProductOS\GamesOS`, game "firebird-coop"). Before art, level or UI work,
read them: `node GamesOS/tools/studio/summary.mjs GamesOS/projects/firebird-coop`
(run from `D:\TE-Code\ProductOS`). New pictures go in that folder's `studio/cards/`.

## One folder

This is the only Firebird folder. The browser versions (the retro original and the
WebGL v2) are finished and archived in [archive/browser](archive/browser/README.md);
they still open in a browser. Do not build new features there.
