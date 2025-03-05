import React from "react";

const ListExample = () => {
  /*
    List : collection of similar elements or components.
    .map()
    each and every element of list has unique key.
    Each child in a list should have a unique "key" prop
  */

  let itemsArray = [2, 34, 23, 4, 2, 34, 234, 23, 342, 23, 4];

  return (
    <>
      <h2>Normal Price : </h2>
      {
        <ul>
          {itemsArray.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
          {/* 
                [
                  <li>2</li>
                  <li>34</li>
                  <li>23</li>
                  <li>4</li>
                ]
              */}
        </ul>
      }
      <h2>Price after 10% sale</h2>
      {
        <ul>
          {itemsArray.map((value, index) => (
            <li key={index}>{(value * 0.1).toFixed(2)}</li>
          ))}
        </ul>
      }
    </>
  );
};

export default ListExample;
