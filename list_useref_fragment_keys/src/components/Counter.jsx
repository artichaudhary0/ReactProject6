import React, { Fragment, useEffect, useState } from "react";

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
    <Fragment>
      <h2>Counter</h2>
      <p>Useing UseState , UseEffects Hook</p>

      <div>
        <h1>{count}</h1>
        <div>
          <label>Increment Counter</label>
          <input
            type="number"
            value={increment}
            onChange={(e) => setIncrement(Number(e.target.value))}
            min={1}
            max={100}
          />
        </div>

        <div>
          <button onClick={() => setCount(count - increment)}>-</button>
          <button onClick={() => setCount(count + increment)}>+</button>
          <button onClick={handleRest}>Reset</button>
        </div>
        <button onClick={() => setAutoIncrement(!autoIncrement)}>
          AutoIncrement
        </button>
      </div>
    </Fragment>
  );
};

export default Counter;
