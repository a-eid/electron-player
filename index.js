const {app , BrowserWindow} = require("electron")
const path = require("path") 
const fs = require("fs")
const url = require("url") 

let win

app.on("ready" , () => {
  win = new BrowserWindow({
    width: 800 , 
    height: 600 , 
  })

  win.loadURL(url.format({
    pathname: path.join(__dirname , "index.html") ,
    protocol: "file:" ,
    slashes: true 
  }))

  win.on("closed" , () => win = null )
})

app.on("window-all-closed" , () => {
  app.quit() 
})