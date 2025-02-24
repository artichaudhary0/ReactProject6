import React, { useEffect, useRef, useState } from "react";

function HandlingPreviousValue() {
  const [count, setCount] = useState(0);

  const prevRef = useRef(null);

  useEffect(() => {
    prevRef.current = count;
  }, [count]);

  return (
    <div>
      <p>Value {count}</p>
      <p>Prevvalue : {prevRef.current}</p>
      <button onClick={() => setCount(count + 4)}>Increment by 4</button>
    </div>
  );
}

export default HandlingPreviousValue;
