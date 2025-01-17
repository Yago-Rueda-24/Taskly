const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },

  })

  win.loadFile('src/View/Windows/MainWindow.html')
}

app.whenReady().then(() => {
  createWindow()
})