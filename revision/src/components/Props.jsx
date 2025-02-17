import React from "react";

// Props => properties.
/*
    immutable 
    read-only 
    {} => plain js object
*/

// child 
function Props(props) {
  console.log(props.name); // {name: 'Arti'}
  return (
    <div>
      <h1> {props.name} </h1>
    </div>
  );
}

export default Props;
