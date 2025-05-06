@echo off
timeout /t 10 /nobreak > nul

REM Get current date and time
for /f "tokens=1-2 delims= " %%a in ("%date% %time%") do (
    set currentTime=%%a %%b
)

git add .
git commit -m "Auto commit at %currentTime%"
git push
