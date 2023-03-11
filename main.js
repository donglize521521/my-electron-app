const { app, BrowserWindow } = require("electron");
const path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    x:100, //调整初始化窗口默认x展示位置
    y:100, //调整初始化窗口默认y展示位置
    show: false,
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("index.html");
  win.on('ready-to-show',()=>{
    win.show()
  })
  win.on('close', ()=> {
    console.log('mainWin is closed')
    mainWin = null
  })
};

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
