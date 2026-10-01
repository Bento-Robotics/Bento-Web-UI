# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

# Installation

## Installiere Node.js

[https://nodejs.org/en/download](https://nodejs.org/en/download)


## Installiere Dependencies

```
sudo apt install ros-${ROS_DISTRO}-rosbridge-server
```

> https://stackoverflow.com/questions/48524417/should-the-package-lock-json-file-be-added-to-gitignore

```
npm ci
```

# Ausführen

```
ros2 run rosbridge_server rosbridge_websocket.py 
```

und  

```
npm run dev
```

# Neue Elemente hinzufügen

Erstelle eine neue `ElementName.jsx` unter `src/elements` mihilfe dieser Vorlage:
```jsx
import * as ROSLIB from "roslib";

export function ElementName({ros_nh}) {
    
    return (
        <>
            <!-- ADD HTML CONTENT HERE -->
        </>
    );
}
```

`ros_nh` ist eine Referenz auf die roslibjs client Instanz.  
-> verwende sie für alle Ros sachen:
```jsx
const publisher = new ROSLIB.Topic({
    ros: ros_nh,
    ...
})
```

Die HTML-Teile des Elements kommen in die `return` rein.  

Zuletzt wird das Element in `RosLoader.jsx` geladen.  
Dafür muss es wiederrum in der Return stehen.
```jsx
return (
    <>
        <ConsoleSubscriber ros_nh={ros}/>
        <ButtonPub ros_nh={ros}/>
        <ElementName ros_nh={ros}/>
    </>
);
```

Für beispiele kannst du dich an `ConsoleSubscriber.jsx` und `ButtonPub.jsx` orientieren.  
Viel erfolg!
