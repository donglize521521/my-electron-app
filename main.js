const { app, BrowserWindow } = require("electron");
const path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    x:100, //调整初始化窗口默认x展示位置
    y:100, //调整初始化窗口默认y展示位置
    show: false, //默认情况下一个窗口对象之后就会显示，设置为false就不会显示了
    width: 800, 
    height: 400,
    maxHeight: 600, //最大高度
    maxWidth: 1000, //最大宽度
    minHeight:200,  //最小高度
    minWidth: 300,  //最小宽度
    resizable: false, //是否允许缩放应用的窗口大小
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
