import {useState} from "react";
import {useEffect, useRef} from "react";
import "./App.css";
// import Button from "./ButtonPublisher";
import {ConsoleSubscriber} from "./elements/ConsoleSubscriber.jsx";
import {RosLoader} from "./RosLoader.jsx";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="body">
                <div className="spalten-container">
                    <RosLoader/>
                    <h1 className="MainText">Front Cam</h1>
                    <h1 className="MainText">Back Cam</h1>
                    <h1 className="MainText">Arm Cam</h1>
                    <h1 className="MainText">Notaus</h1>
                    <h1 className="MainText">LiDAR</h1>
                    <h1 className="MainText">Akkustand</h1>
                    <h1 className="MainText">Geschwindigkeit</h1>
                </div>
            </div>
        </>
    );
}

export default App;
