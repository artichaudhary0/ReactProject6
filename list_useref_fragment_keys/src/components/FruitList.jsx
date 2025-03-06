import React, { Fragment, useRef, useState } from "react";

const FruitList = ({ theme }) => {
  const [fruits, setFruits] = useState([
    { id: 1, name: "Apple", color: "red", quantity: 10 },
    { id: 2, name: "Grapes", color: "green", quantity: 15 },
    { id: 3, name: "BlueBerry", color: "blue", quantity: 5 },
  ]);

  const [newFruit, setNewFruit] = useState({
    name: "",
    color: "",
    quantity: 1,
  });

  const newfruitRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setNewFruit({
      ...newFruit,
      [name]: name === "quantity" ? Number(value) : value,
    });
  };

  const addFruit = (e) => {
    e.preventDefault();

    if (!newFruit.name && !newFruit.color) return;

    const newId =
      fruits.length > 0 ? Math.max(...fruits.map((f) => f.id)) + 1 : 1;
    /*
            [ 1 ]
            [ 1 , 2]
            [1 , 2, 3]
            Math.max( 1 , 2 , 3 )  3 + 1
       */
    setFruits([...fruits, { ...newFruit, id: newId }]);
    setNewFruit({ name: "", color: "", quantity: 1 });

    newfruitRef.current.focus();
  };

  const deleteFruit = (id) => {
    setFruits(fruits.filter((f) => f.id !== id));
  };

  const fruitItemStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    backgroundColor: theme === "lightTheme" ? "white" : "#444",
    borderRadius: "3px",
  };

  return (
    <Fragment>
      <h1>Fruit List</h1>

      <p>Using List & keys, Refs and Fragments</p>

      <form onSubmit={addFruit} style={{}}>
        <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
          <input
            type="text"
            name="name"
            ref={newfruitRef}
            value={newFruit.name}
            onChange={handleInputChange}
            placeholder="Fruit name"
            required
          />
          <input
            type="text"
            name="color"
            value={newFruit.color}
            onChange={handleInputChange}
            placeholder="Color"
            required
          />
          <input
            type="number"
            name="color"
            value={newFruit.quantity}
            onChange={handleInputChange}
            min={1}
            placeholder="Color"
            required
          />
        </div>

        <div>
          {fruits.length === 0 ? (
            <p>No Fruitsin the list.</p>
          ) : (
            fruits.map((fruit) => (
              <div key={fruit.id} style={fruitItemStyle}>
                <div>
                  <span
                    style={{
                      display: "inline-block",
                      width: "15px",
                      height: "15px",
                      backgroundColor: fruit.color,
                      borderRadius: "50%",
                    }}
                  ></span>
                  <strong>{fruit.name}</strong> - {fruit.quantity} in stock
                </div>

                <button onClick={() => deleteFruit(fruit.id)}>delete</button>
              </div>
            ))
          )}
        </div>
      </form>
    </Fragment>
  );
};

export default FruitList;
