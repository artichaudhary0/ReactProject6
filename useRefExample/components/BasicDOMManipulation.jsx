import React, { useEffect, useRef } from "react";

function BasicDOMManipulation() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); // Automatically focus on input field when load
    inputRef.current.style.color = "black";
    inputRef.current.style.border = "1px Solid blue";
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus" />
    </div>
  );
}

export default BasicDOMManipulation;
