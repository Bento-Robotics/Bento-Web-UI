import {useState} from "react";
import {useEffect, useRef} from "react";
import "./App.css";
import {RosLoader} from "./RosLoader.jsx";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="body">
                <div className="spalten-container">
                    <h1 className="panel-title">Bento Box Status Panel</h1>
                    {/* <RosLoader/> */}
                    <div className="value">
                        <h1 className="MainText">Front Cam</h1>
                        <div class="circle"></div>
                    </div>
                    <div className="value">
                        <h1 className="MainText">Back Cam</h1>
                        <div class="circle"></div>
                    </div>
                    <div className="value">
                        <h1 className="MainText">Arm Cam</h1>
                        <div class="circle"></div>
                    </div>
                    <div className="value">
                        <h1 className="MainText">Notaus</h1>
                        <div class="circle"></div>
                    </div>
                    <div className="value">
                        <h1 className="MainText">LiDAR</h1>
                        <div class="circle"></div>
                    </div>
                    <div className="value">
                        <h1 className="MainText">Akkustand</h1>
                    </div>
                    <div className="value">
                        <h1 className="MainText">Geschwindigkeit</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
