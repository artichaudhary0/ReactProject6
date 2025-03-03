import React, { useRef, useState } from "react";

function StopWatch() {
  const [seconds, setSeconds] = useState(0);
  const timeRef = useRef(null);

  const startTimer = () => {
    if (!timeRef.current) {
      timeRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
  };
  const stopTimer = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
  };

  const resetTimer = () => {
    setSeconds(0);
    clearInterval(timeRef.current);
    timeRef.current = null;
  };

  return (
    <div>
      <p>Time {seconds}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default StopWatch;
