@echo off
REM Abre Comocomo en este PC (sin Vercel ni Netlify).
REM Si hay cambios nuevos, usa "actualizar" para reconstruir antes.
cd /d "%~dp0appspp"
if "%1"=="actualizar" call npx expo export --platform web --output-dir dist
if not exist dist\index.html call npx expo export --platform web --output-dir dist
for /f "tokens=5" %%%%p in ('netstat -ano ^| findstr ":3000 " ^| findstr LISTENING') do taskkill /f /pid %%%%p >nul 2>&1
start "" http://localhost:3000
npx -y serve -s dist -l 3000
