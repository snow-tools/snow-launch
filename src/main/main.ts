/**
 * @project     snow-launch
 *
 * @fileName    main.ts
 * @filePath    /src/main/main.ts
 *
 * @createdBy   Plume <plume.snowbot@gmail.com>
 * @createdAt   2021-01-23, 01:23:23
 *
 * @updatedBy   Plume <plume.snowbot@gmail.com>
 * @updatedAt   2021-01-23, 19:10:07
 */

import { app, BrowserWindow } from 'electron'
import * as path from 'path'

let win: BrowserWindow | null
let worker: BrowserWindow | null

const installExtensions = async () => {
    const installer = require('electron-devtools-installer')
    const forceDownload = !!process.env.UPGRADE_EXTENSIONS
    const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS']

    return Promise.all(
        extensions.map(name => installer.default(installer[name], forceDownload))
    ).catch(console.log) // eslint-disable-line no-console
}

const createWindow = async () => {
    if (process.env.NODE_ENV !== 'production') {
        await installExtensions()
    }

    win = new BrowserWindow({
        width: 800,
        height: 600,
        transparent: false,
        frame: true,
        backgroundColor: 'red',
    })

    if (process.env.NODE_ENV !== 'production') {
        process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1' // eslint-disable-line require-atomic-updates
        win.loadURL(`http://localhost:2021/renderer.html`)
    } else {
        win.loadURL('file://' + path.join(__dirname, 'renderer.html'))
    }

    if (process.env.NODE_ENV !== 'production') {
        // Open DevTools, see https://github.com/electron/electron/issues/12438 for why we wait for dom-ready
        win.webContents.once('dom-ready', () => {
            win!.webContents.openDevTools()
        })
    }

    win.on('closed', () => {
        win = null
    })
}

const createWorker = async () => {
    worker = new BrowserWindow({ show: true, transparent: false, skipTaskbar: false, frame: true })
    console.log('test')
    if (process.env.NODE_ENV !== 'production') {
        process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1' // eslint-disable-line require-atomic-updates
        worker.loadURL(`http://localhost:2022/worker.html`)
    } else {
        worker.loadURL('file://' + path.join(__dirname, 'worker.html'))
    }

    worker.webContents.once('dom-ready', () => {
        worker!.webContents.openDevTools()
    })

    worker.on('closed', () => {
        worker = null
    })
}

app.on('ready', () => {
    createWorker()
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
    if (worker === null) {
        createWorker()
    }
})
