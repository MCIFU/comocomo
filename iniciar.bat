@echo off
REM Abre Comocomo en este PC (sin Vercel ni Netlify), con cuentas de usuario.
REM Compila la app sola si hay cambios nuevos. Las cuentas se guardan en %USERPROFILE%\.comocomo
cd /d "%~dp0"
REM Si ya habia una copia abierta en el puerto 3000, se cierra primero.
for /f "tokens=5" %%p in ('netstat -ano ^| findstr ":3000 " ^| findstr LISTENING') do taskkill /f /pid %%p >nul 2>&1
start "" http://localhost:3000
set PORT=3000
node scripts\serve.mjs
