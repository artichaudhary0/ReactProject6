import React from "react";

function Cart({ items, onRemove, onCardRemove }) {
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  // console.log(sum);
  return (
    <div>
      <h2
        style={{
          marginTop: 0,
        }}
      >
        Cart
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {items.map((item) => (
          <div
            key={item.id} // uniquely identification
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              justifyContent: "center",
              marginBottom: "10px",
              backgroundColor: "white",
              borderRadius: "5px",
            }}
          >
            <div>
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <p style={{ color: "black" }}>{item.name}</p>
              <p style={{ color: "black" }}>
                ${item.price}x{item.quantity}
              </p>

              <button onClick={() => onRemove(item.id)}>Remove</button>
              <button onClick={() => onCardRemove(item.id)}>Card Remove</button>
            </div>
          </div>
        ))}
      </div>
      <h3 style={{ color: "black" }}>Total : ${totalPrice.toFixed(2)}</h3>
    </div>
  );
}

export default Cart;
