import React from "react";

/*
    key it is a unique value which is given to an component. (update/change add remove)
    
    Encountered two children with the same key, `11`. 
    Keys should be unique so that components maintain their identity across updates. 
    Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. 
   
    use custom key when ever possible instead of index
*/

const KeysExample = () => {
  let item = [
    { id: 11, name: "Laptop1", price: 34553 },
    { id: 12, name: "Laptop2", price: 34553 },
    { id: 13, name: "Laptop3", price: 34553 },
    { id: 14, name: "Laptop4", price: 34553 },
    { id: 15, name: "Laptop5", price: 34553 },
    { id: 16, name: "Laptop6", price: 34553 },
  ];
  return (
    <div>
      {
        <ul>
          {item.map((i) => (
            <li key={i.id}>{i.name}</li>
          ))}
        </ul>
      }
    </div>
  );
};

export default KeysExample;
