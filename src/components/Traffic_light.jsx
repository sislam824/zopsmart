import React, { useEffect, useState } from "react";

const TrafficLight = () => {
  const [trafficColor, setTrafficColor] = useState("green");

  useEffect(() => {
    let timer;

    if (trafficColor === "green") {
      timer = setTimeout(() => setTrafficColor("yellow"), 3000);
    } else if (trafficColor === "yellow") {
      timer = setTimeout(() => setTrafficColor("red"), 2000);
    } else if (trafficColor === "red") {
      timer = setTimeout(() => setTrafficColor("yellow-again"), 5000);
    } else if (trafficColor === "yellow-again") {
      timer = setTimeout(() => setTrafficColor("green"), 2000);
    }

    return () => clearTimeout(timer);
  }, [trafficColor]);

  return (
    <div className="container">
      <div className="traffic-lights">
        <div
          className={`traffic ${trafficColor === "green" ? "green" : ""}`}
        ></div>
        <div
          className={`traffic ${
            trafficColor === "yellow" || trafficColor === "yellow-again"
              ? "yellow"
              : ""
          }`}
        ></div>
        <div className={`traffic ${trafficColor === "red" ? "red" : ""}`}></div>
      </div>
    </div>
  );
};

export default TrafficLight;
