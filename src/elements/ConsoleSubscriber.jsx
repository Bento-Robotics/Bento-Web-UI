import * as ROSLIB from "roslib";

// Subscribing to a Topic
// ----------------------
export function ConsoleSubscriber({ros_nh}) {

// Like when publishing a topic, we first create a Topic object with details of the topic's name
// and message type. Note that we can call publish or subscribe on the same topic object.
    const listener = new ROSLIB.Topic({
        ros: ros_nh, name: "/bento/cmd_vel", messageType: "geometry_msgs/Twist",
    });

// Then we add a callback to be called every time a message is published on this topic.
    listener.subscribe(function (message) {
        console.log("Driving " + message.linear.x + "m/s forwards");
    });
}