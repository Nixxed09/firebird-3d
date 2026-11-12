@echo off
rem Play the newest Firebird on this computer, straight from the source (needs Unreal 5.8).
rem   Play-Firebird.cmd            the test course and the Hollow arena
rem   Play-Firebird.cmd look       the look room (the first hand-built room; nothing to fight yet)
rem When you quit, the session is saved as a play record on this computer only.
setlocal
if "%FIREBIRD_PLAYER%"=="" set "FIREBIRD_PLAYER=Nix"
set "MAPARG="
if /i "%~1"=="look" set "MAPARG=-Map /Game/Firebird/Maps/L_LookRoom"
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0tools\ue-play.ps1" -Player "%FIREBIRD_PLAYER%" %MAPARG%
echo.
pause
