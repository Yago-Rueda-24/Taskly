import { app, BrowserWindow } from "electron";
import path from "path";

let mainWindow: BrowserWindow | null;

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
