# SnowLaunch

## Current develop state

-   [x] Setup technical stack with the main process, one renderer process for GUI and one worker process to handle heavy operations without locking the renderer
-   [x] Setup local IPC for main-renderer-worker processes communication
-   [ ] Design GUI (renderer process)
-   [ ] Install Snowbot (worker process)
-   [ ] Update Snowbot (worker process)
-   [ ] Manage localy techover keys for multi-instances management (renderer + worker process)

## Built with

-   Typescript
-   Electron
-   React
-   Redux
-   Fomantic-UI

## Requirements

-   Node.js engine v12.x.x
-   Visual Studio Code
-   Prettier extension for Visual Studio Code
-   ESLint extension for Visual Studio Code
-   Git Bash to open Linux like bash prompt on Windows

## Install

Open Git Bash in the desired location, eg your Desktop :

```
right click on your desktop then click on "Open git bash here"
```

To clone the repository with Git, type in the command prompt:

```bash
git clone https://github.com/snowtools/snowlaunch snowlaunch
```

And then install the dependencies:

```bash
cd snowlaunch # move in the project directory
npm install --verbose # install all node.js dependencies
```

## Usage

All processes have to be started **simultaneously** in different console tabs:

```bash
npm run dev:renderer # start the renderer process in dev mode
npm run dev:worker # start the worker process in dev mode
npm run dev:main # start the main process in dev mode (no hot-reload for main process)
```

This will start the application with hot-reload so you can instantly start developing.

## Packaging

```bash
npm run build:electron
```

This will create a installer for Windows x86/x64 in the `releases` folder.
