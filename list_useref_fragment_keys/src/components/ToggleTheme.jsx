import React from "react";

const ToggleTheme = ({ theme, toggleTheme }) => {
  return (
    <div>
      <button
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          outline: "none",
          textAlign: "center",
          backgroundColor: theme === "darkTheme" ? "white" : "grey",
          color: theme === "darkTheme" ? "black" : "white",
        }}
        onClick={toggleTheme}
      >
        {theme === "darkTheme" ? "🌞" : "🌙"}
      </button>
    </div>
  );
};

export default ToggleTheme;
