start cmd /k "node ./font_script.js"
timeout /t 2
taskkill /f /im cmd.exe
exit