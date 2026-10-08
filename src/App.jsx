import { useState, useEffect, useRef } from "react";
import "./App.css";
import { RosLoader } from "./RosLoader.jsx";

function App({ 
    // green: 00e676 
    // red: e6001f
  colors = {
    frontCam: "#e6001f",
    backCam: "#e6001f",
    armCam: "#e6001f",
    notaus: "#e6001f",
    lidar: "#e6001f"
  } 
}) {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="body">
                <div className="spalten-container">
                    <h1 className="panel-title">Bento Box Status Panel</h1>
                    <div className="value">
                        <RosLoader/>
                    </div>
                    
                    <div className="value">
                        <h1 className="MainText">Front Cam</h1>
                        <div className="circle" style={{ "--color": colors.frontCam }}></div>
                    </div>
                    
                    <div className="value">
                        <h1 className="MainText">Back Cam</h1>
                        <div className="circle" style={{ "--color": colors.backCam }}></div>
                    </div>
                    
                    <div className="value">
                        <h1 className="MainText">Arm Cam</h1>
                        <div className="circle" style={{ "--color": colors.armCam }}></div>
                    </div>
                    
                    <div className="value">
                        <h1 className="MainText">Notaus</h1>
                        <div className="circle" style={{ "--color": colors.notaus }}></div>
                    </div>
                    
                    <div className="value">
                        <h1 className="MainText">LiDAR</h1>
                        <div className="circle" style={{ "--color": colors.lidar }}></div>
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
