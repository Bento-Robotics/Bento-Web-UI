import * as ROSLIB from "roslib";
import {ConsoleSubscriber} from "./elements/ConsoleSubscriber.jsx";
import {ButtonPub} from "./elements/ButtonPub.jsx";

export function RosLoader() {

    const ros = new ROSLIB.Ros({
        url: "ws://localhost:9090",
    });

    // TODO: Error banner for failed bridge connecton

    ros.on("connection", function () {
        console.log("Connected to websocket server.");
    });

    ros.on("error", function (error) {
        console.log("Error connecting to websocket server: ", error);
    });

    ros.on("close", function () {
        console.log("Connection to websocket server closed.");
    });

    return (
        <>
            <ConsoleSubscriber ros_nh={ros}/>
            <ButtonPub ros_nh={ros}/>
        </>
    );
}
