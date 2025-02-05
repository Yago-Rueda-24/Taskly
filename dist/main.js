"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
let mainWindow;
electron_1.app.whenReady().then(() => {
    mainWindow = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
    });
    mainWindow.loadFile("./src/view/MainWindow.html");
    mainWindow.on("closed", () => {
        mainWindow = null;
    });
});
