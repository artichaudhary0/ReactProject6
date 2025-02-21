import React, { useEffect, useState } from "react";

function LifeCycle() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [mountedTime, setMountedTime] = useState(null);

  // component did mount (called when component is first mount)

  useEffect(() => {
    console.log("Component mounted");
    setMountedTime(new Date().toLocaleTimeString());

    return () => {
      // called when component is unmounted
      console.log("unmounted");
    };
  }, []);

  // every call
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount(count + 1);
  //   }, 1000);
  // });

  // // only when component is mount
  // useEffect(() => {
  //   console.log("usdtfvusd");
  // }, []);

  // useEffect(() => {
  //   console.log("sathfu");
  // }, [count]);

  // useEffect(() => {
  //   console.log("sdfhfhathfu");
  // }, [count, text]);

  // useEffect(() => {
  //   console.log("cgfsathfu");
  // }, [text]);

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>{text}</h1>
      <input type="text" onChange={(e) => setText(e.target.value)} />
    </div>
  );
}

export default LifeCycle;
