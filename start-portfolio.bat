@echo off
title Ahmed Portfolio - local server
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is not installed. Install it from https://nodejs.org then run this file again.
  pause
  exit /b 1
)

if not exist node_modules (
  echo First run: installing packages, this can take a few minutes...
  call npm install
  if errorlevel 1 (
    echo npm install failed. Check your internet connection and try again.
    pause
    exit /b 1
  )
)

echo.
echo Starting the portfolio on http://localhost:5173
echo Your browser will open automatically. Close this window (or press Ctrl+C) to stop the server.
echo.
call npm run dev -- --open
pause
