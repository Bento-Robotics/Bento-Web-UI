import * as ROSLIB from "roslib";

/*
 * Publishing a Topic
 * ------------------
 */
export function ButtonPub({ros_nh}) {

    const publisher = new ROSLIB.Topic({
        ros: ros_nh,
        name: "/string_demo",
        messageType: "std_msgs/String",
    });

    const handleClick = () => {
        const string = {
            data: "Henlo Fren :)"
        };

        console.log("Publishing string");
        publisher.publish(string);
    };

    return (<button onClick={handleClick} className={"MainText"}>Stringpub 9000</button>);
}
