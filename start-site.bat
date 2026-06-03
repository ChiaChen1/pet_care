@echo off
cd /d "G:\Coding\pet store"
start "Pet Store Next.js" cmd /k "npm.cmd run dev -- -p 3000"
timeout /t 4 /nobreak >nul
start http://127.0.0.1:3000
