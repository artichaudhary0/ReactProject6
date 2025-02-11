import React from "react";

function Products({ product, onAddToCart }) {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "15px",
        margin: "10px",
        borderRadius: "5px",
        width: "300px",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          margin: "2px",
          height: "150px",
          width: "100%",
          objectFit: "contain",
          borderRadius: "5px",
        }}
      />
      <h2 style={{ color: "white" }}>{product.name}</h2>
      <p style={{ color: "white" }}>{product.description}</p>
      <p style={{ color: "white" }}>${product.price}</p>
      <h3>{product.rating} ⭐</h3>
      <button
        // onClick={onAddToCart(product)}
        style={{
          color: "white",
          padding: "10px",
          border: "1px solid black",
          cursor: "pointer",
          width: "100%",
        }}
      >
        Buy Now
      </button>
    </div>
  );
}

export default Products;
