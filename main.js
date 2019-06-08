const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

// init win
let win;

function createWindow() {
    // Create browser window
    win = new BrowserWindow({
        width:800, 
        height:600, 
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Load index.html
    win.loadFile('index.html')

    // Open devtools
    win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });
}

// Run create window functions
app.on('ready', createWindow)

// QUit when all windows are closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin'){
        app.quit();
    }
});