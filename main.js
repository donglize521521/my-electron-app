const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
    //   preload: path.join(__dirname, 'preload.js'),
    //    // 开启node
       nodeIntegration: true,
       contextIsolation: false,
    //    // 开启remote
       enableRemoteModule:true

    },
  })
  require("@electron/remote/main").initialize();
  require("@electron/remote/main").enable(win.webContents);
  win.loadFile('index.html')

  win.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()
})