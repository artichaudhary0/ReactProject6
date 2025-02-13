import React from "react";

function NavBar({ cartCount = 0 }) {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        position: "sticky",
        zIndex: 1000,
        top: 0,
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1>Shopping</h1>
        <span style={{ fontSize: "30px" }}>🛒</span>
        {cartCount > 0 && (
          <span
            style={{
              position: "absolute",
              top: "-10px",
              right: "-10px",
              backgroundColor: "red",
              color: "white",
              borderRadius: "50%",
            }}
          >
            {cartCount}
          </span>
        )}
      </div>
    </div>
  );
}

export default NavBar;
