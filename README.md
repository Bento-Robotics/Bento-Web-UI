# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

# Install

## Install Node.js

[https://nodejs.org/en/download](https://nodejs.org/en/download)


## Install Dependencies

```
sudo apt install ros-${ROS_DISTRO}-rosbridge-server
```

> https://stackoverflow.com/questions/48524417/should-the-package-lock-json-file-be-added-to-gitignore

```
npm ci
```

# Run

```
ros2 run rosbridge_server rosbridge_websocket.py 
```

and 

```
npm run dev
```
