@echo off
chcp 65001 >nul
REM Abre Comocomo en este PC (sin Vercel ni Netlify), con cuentas de usuario.
REM Se actualiza desde GitHub y compila sola si hay cambios. Las cuentas se guardan en %USERPROFILE%\.comocomo
cd /d "%~dp0"
title Comocomo
set PORT=3000
where node >nul 2>nul || (echo   Falta Node.js: instalalo desde https://nodejs.org y vuelve a abrir este archivo. & pause & exit /b 1)
where git >nul 2>nul && if exist ".git" (
  echo   Buscando actualizaciones...
  REM npm reescribe package-lock.json al instalar: se descarta para que la actualizacion no se bloquee
  git checkout -- package-lock.json >nul 2>nul
  git pull --ff-only -q origin main || echo   No pude actualizar: se abre la version que tienes.
)
set COMMIT=
set HECHO=
for /f %%c in ('git rev-parse HEAD 2^>nul') do set COMMIT=%%c
if exist "apps\app\dist\.commit" set /p HECHO=<"apps\app\dist\.commit"
if not exist node_modules goto instalar
if not "%COMMIT%"=="%HECHO%" goto instalar
goto arrancar
:instalar
echo   Instalando dependencias...
call npm install --no-audit --no-fund
if errorlevel 1 (echo   Algo ha fallado al instalar. Copia lo de arriba y pasaselo a Claude. & pause & exit /b 1)
:arrancar
REM Si ya habia una copia abierta en el puerto 3000, se cierra primero.
for /f "tokens=5" %%p in ('netstat -ano ^| findstr ":3000 " ^| findstr LISTENING') do taskkill /f /pid %%p >nul 2>&1
REM el servidor compila solo si hace falta; el navegador se abre cuando responde
start "" cmd /c "timeout /t 5 >nul & start http://localhost:3000"
node scripts\serve.mjs
