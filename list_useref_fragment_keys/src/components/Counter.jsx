import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(() => {
    const savedCounter = localStorage.getItem("count");
    return savedCounter || 0;
  });

  const [increment, setIncrement] = useState(() => {
    const savedIncrementValue = localStorage.getItem("incrementValue");
    return savedIncrementValue ? parseInt(savedIncrementValue, 10) : 1; // "01" 1
  });

  const [autoIncrement, setAutoIncrement] = useState(() => {
    const savedAutoIncrement = localStorage.getItem("autoIncrement");
    return savedAutoIncrement === "true";
  });

  useEffect(() => {
    localStorage.setItem("count", count.toString());
  }, [count]);

  useEffect(() => {
    localStorage.setItem("incrementValue", increment.toString());
  }, [increment]);

  useEffect(() => {
    localStorage.setItem("autoIncrement", autoIncrement.toString());
  }, [autoIncrement]);

  useEffect(() => {
    let interval;
    if (autoIncrement) {
      interval = setInterval(() => {
        setCount((preCount) => preCount + increment);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoIncrement, increment]);

  const handleRest = () => {
    setCount(0);
    setAutoIncrement(false);
  };

  return (
    <div>
      {count}
      <button></button>
    </div>
  );
};

export default Counter;
