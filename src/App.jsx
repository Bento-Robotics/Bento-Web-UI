import { useState } from "react";
import { useEffect, useRef } from "react";
import "./App.css";
import * as ROSLIB from "roslib";

const ros = new ROSLIB.Ros({
  url: "ws://localhost:9090",
});

ros.on("connection", function () {
  console.log("Connected to websocket server.");
});

ros.on("error", function (error) {
  console.log("Error connecting to websocket server: ", error);
});

ros.on("close", function () {
  console.log("Connection to websocket server closed.");
});

const cmdVel = new ROSLIB.Topic({
  ros: ros,
  name: "/cmd_vel",
  messageType: "geometry_msgs/Twist",
});

function publish() {
  /*
   * Publishing a Topic
   * ------------------
   */

  const twist = {
    linear: {
      x: 0.1,
      y: 0.2,
      z: 0.3,
    },
    angular: {
      x: -0.1,
      y: -0.2,
      z: -0.3,
    },
  };

  console.log("Publishing cmd_vel");
  cmdVel.publish(twist);
}

// Subscribing to a Topic
// ----------------------

// Like when publishing a topic, we first create a Topic object with details of the topic's name
// and message type. Note that we can call publish or subscribe on the same topic object.
var listener = new ROSLIB.Topic({
  ros: ros,
  name: "/bento/cmd_vel",
  messageType: "geometry_msgs/Twist",
});

// Then we add a callback to be called every time a message is published on this topic.
listener.subscribe(function (message) {
  console.log("Driving " + message.linear.x + "m/s forwards");
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <div class="body">
          <div class="spalten-container">
            <h1 class="MainText">Front Cam</h1>
            <h1 class="MainText">Back Cam</h1>
            <h1 class="MainText">Arm Cam</h1>
            <h1 class="MainText">Enable</h1>
            <h1 class="MainText">Notaus</h1>
            <h1 class="MainText">LiDAR</h1>
            <h1 class="MainText">Akkustand</h1>
            <h1 class="MainText">Geschwindigkeit</h1>
          </div>
        </div>
    </>
  );
}

export default App;
