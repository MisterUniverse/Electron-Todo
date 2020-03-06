const { app, BrowserWindow } = require('electron');
const path = require('path');

let main;
app.on('ready', () => {
    const html = path.join('src', 'index.html');

    main = new BrowserWindow();

    main.loadFile(html);
    console.log("Hello World");
})