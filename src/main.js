const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const url = require('url');

//app.disableHardwareAcceleration();

let win;

function createWindow() {
    win = new BrowserWindow({ width: 800, height: 600, backgroundColor: '#FFF'/* important for cleartype*/ });
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true,
        show: false
    }));

    win.on('ready-to-show', function () {
        mainWindow.show();
        mainWindow.focus();
    });

    win.on('closed', () => {
        win = null;
    })
};

app.on('ready', createWindow);
app.on('ready', require('./main-menu.js').createMenu);

