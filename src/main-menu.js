
module.exports = {
    createMenu: function () {
        const template = [
            {
                label: 'Debug',
                submenu: [
                    { role: 'reload', accelerator: 'F5' },
                    // { role: 'forcereload' },
                    { role: 'toggledevtools', accelerator: 'F12' },
                    // { type: 'separator' },
                    // { role: 'resetzoom' },
                    // { role: 'zoomin' },
                    // { role: 'zoomout' },
                    // { type: 'separator' },
                    // { role: 'togglefullscreen' },
                    { role: 'close' },
                ]
            }
        ];

        const Menu = require('electron').Menu;
        const menu = Menu.buildFromTemplate(template);
        Menu.setApplicationMenu(menu);
    }
};


