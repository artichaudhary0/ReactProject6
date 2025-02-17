import { useState } from "react";

import "./App.css";
import Props from "./components/Props";

function App() {
  // parent
  const [heading, setHeading] = useState("hello"); // initial value
  const [value, setValue] = useState("");
  const [isTrue, setIsTrue] = useState(false);

  const handleOnClick = () => setHeading("world");
  const handleValue = (e) => setValue(e.target.value);

  return (
    <>
      <Props name={"Arti"} />
      <h1>{heading}</h1>
      <button onClick={handleOnClick}>Change heading</button>

      <input onChange={handleValue} />
      <h2>{value}</h2>

      <h2
        style={{
          backgroundColor: isTrue ? "black" : "white",
          color: isTrue ? "white" : "black",
        }}
      >
        Switch {isTrue ? "🌙" : "🌞"}
      </h2>
      {/* setValue🌙🌞 */}

      <button
        onClick={() => {
          setIsTrue(!isTrue);
        }}
      >
        Change
      </button>
    </>
  );
}

export default App;
