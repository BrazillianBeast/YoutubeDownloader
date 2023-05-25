const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path');
const fs = require('fs');

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      autoHideMenuBar: true,
      webPreferences:{
        preload: path.join(__dirname, 'preload.js'),
        nodeIntegration: true,
        contextIsolation: false,
        // devTools: false,
      }
    });
  
    win.loadFile('./app/html/index.html')
}



  
app.whenReady().then(() => {
  createWindow()
})
    
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})