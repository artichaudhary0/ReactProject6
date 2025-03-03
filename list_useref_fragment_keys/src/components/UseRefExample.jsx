import React, { useRef } from "react";

const UseRefExample = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    alert(`Entered value  : ${inputRef.current.value}`);
  };
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Enter something" />
      <button onClick={handleClick}>Show</button>
    </div>
  );
};

export default UseRefExample;
