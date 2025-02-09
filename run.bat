@echo off
:: Check if Node.js is installed
node -v >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    echo Node.js is not installed. Installing Node.js...
    :: Download the Node.js installer
    set NODE_INSTALLER=node-v16.13.0-x64.msi
    set DOWNLOAD_URL=https://nodejs.org/dist/v16.13.0/%NODE_INSTALLER%
    powershell -Command "(New-Object System.Net.WebClient).DownloadFile('%DOWNLOAD_URL%', '%NODE_INSTALLER%')"
    
    :: Install Node.js
    msiexec /i %NODE_INSTALLER% /quiet /norestart
    
    :: Clean up installer
    del %NODE_INSTALLER%
    echo Node.js has been installed successfully.
) ELSE (
    echo Node.js is already installed.
)

:: Check if npm is installed
npm -v >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    echo npm is not installed. Installing npm...
    :: Download and install npm
    npm install -g npm@latest
    echo npm has been installed successfully.
) ELSE (
    echo npm is already installed.
)

pause