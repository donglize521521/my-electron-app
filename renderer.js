const path = require("path");
// 通过remote模块在渲染进程中使用主进程的browserWindow
const { BrowserWindow }= require("@electron/remote");
 
window.onload = () => {
    btn.onclick = () => {
      newWin = new BrowserWindow({
        width: 500,
        height: 500,
      });
      newWin.loadFile("list.html");
      newWin.on("closed", () => {
        newWin = null;
      });
    };
  };