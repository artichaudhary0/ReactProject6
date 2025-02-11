import React from "react";

function Cart({ items, onRemove }) {
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  console.log(sum);
  return <div></div>;
}

export default Cart;
