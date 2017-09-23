const {app , BrowserWindow} = require("electron")
const path = require("path")
const fs = require("fs")
const url = require("url")

let win

app.on("ready" , () => {
  win = new BrowserWindow({
    width: 500 ,
    height: 600 ,
    show: false,
    // frame: false,
    // transparent: true,
    resizable: false
  })

  win.webContents.on("devtools-opened", () => {
    win.webContents.closeDevTools();
  });

  win.loadURL(url.format({
    pathname: path.join(__dirname , "index.html") ,
    protocol: "file:" ,
    slashes: true
  }))

  win.on("ready-to-show" , () => {
    win.show()
  })

  win.on("closed" , () => win = null )

})

app.on("window-all-closed" , () => {
  app.quit()
})

