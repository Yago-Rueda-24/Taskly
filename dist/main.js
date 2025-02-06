import { app, BrowserWindow } from "electron";
let mainWindow;
app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
    });
    mainWindow.loadFile("./src/view/MainWindow.html");
    mainWindow.on("closed", () => {
        mainWindow = null;
    });
});
