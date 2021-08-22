import React, { useState } from "react";

const App = () => {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState();

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  };

  setInterval(updateTime, 1000);
  return (
    <>
      <h1 className="heading">DIGITAL CLOCK</h1>
      <div className="timeBox">
        <h1 className="time">{currentTime}</h1>
      </div>
    </>
  );
};

export default App;
