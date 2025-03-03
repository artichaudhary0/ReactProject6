import React, { useRef } from "react";

function Animation() {
  const boxRef = useRef(null);

  const moveBox = () => {
    boxRef.current.style.transform = "translateX(200px)";
    // boxRef.current.style.transition = "transform 0.5s ease-in-out";
    boxRef.current.style.transition = "transform 0.5s linear";
    boxRef.current.style.backgroundColor = "red";
  };

  return (
    <div>
      <div
        ref={boxRef}
        style={{ width: "100px", height: "100px", backgroundColor: "white" }}
      ></div>

      <button onClick={moveBox}>Move</button>
    </div>
  );
}

export default Animation;
