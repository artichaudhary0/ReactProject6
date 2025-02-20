import React, { useEffect, useState } from "react";

function LifeCycle() {
  const [count, setCount] = useState(0);
  const [decrement, setDecrement] = useState(0);

  useEffect(() => {
    console.log("every render");
  });
  useEffect(() => {
    console.log("when mounted/created");
  }, []);
  useEffect(() => {
    console.log("when count value updated");
  }, [count]);

  useEffect(() => {
    console.log("when decrement pressed value");

       
  }, [decrement]);

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>{"Value(Decrement) " + decrement}</h1>
      <button onClick={() => setDecrement(decrement - 1)}>Decrement</button>
    </div>
  );
}

export default LifeCycle;
