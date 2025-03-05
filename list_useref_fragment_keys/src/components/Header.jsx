import React from "react";
import { Fragment } from "react";

function Header({ activeTab, setActiveTab, theme }) {
  // custom id
  const navItem = [
    { id: "home", lable: "Home" },
    { id: "todos", lable: "Todos" },
    { id: "counter", lable: "Counter" },
    { id: "shop", lable: "Shop" },
    { id: "profile", lable: "User Profile" },
    { id: "fruits", lable: "Fruit List" },
  ];

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: `1px solid ${theme === "lightTheme" ? "black" : "white"}`,
  };

  const navStyle = {
    display: "flex",
    gap: "10px",
  };

  return (
    <Fragment>
      <header style={headerStyle}>
        <nav>
          <ul>
            {navItem.map((item) => (
              <li
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                style={{
                  cursor: "pointer",
                  backgroundColor:
                    activeTab === item.id ? "#646cff" : "transparent",
                  color: activeTab === item.id ? "white" : "black",
                }}
              >
                {item.lable}
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </Fragment>
  );
}

export default Header;
