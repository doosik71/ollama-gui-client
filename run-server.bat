@echo off
pushd .
cd /d %~dp0

call npm run start

popd
