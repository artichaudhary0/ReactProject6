import React, { useState, useRef } from "react";

function PreservevalueWithoutrerendering() {
  const renderCount = useRef(0);
  const [count, setCount] = useState(0);

  renderCount.current += 1;

  return (
    <div>
      <p>Count : {count}</p>
      <p>Component render : {renderCount.current}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default PreservevalueWithoutrerendering;
