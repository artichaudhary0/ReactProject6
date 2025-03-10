import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ToggleTheme from "./components/ToggleTheme";
import FruitList from "./components/FruitList";
import Counter from "./components/Counter";

const styles = {
  lightTheme: {
    bg: "white",
    text: "black",
    card: "grey",
    border: "black",
  },
  darkTheme: {
    bg: "grey",
    text: "white",
    card: "#333333",
    border: "white",
  },
};

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "darkTheme";
  });
  const [activeTab, setActiveTab] = useState("counter");

  const toggleTheme = () => {
    setTheme((prev) => {
      let newTheme = prev === "lightTheme" ? "darkTheme" : "lightTheme";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    styles.darkTheme;
    document.body.style.backgroundColor = styles[theme].bg;
    document.body.style.color = styles[theme].text;
  }, [theme]);

  const contanerStyle = {
    maxWidth: "1000px",
  };

  const mainStyle = {
    backgroundColor: styles[theme].card,
  };

  return (
    <div style={contanerStyle}>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} theme={theme} />

      <main style={{}}>
        {activeTab === "home" && (
          <div>
            <h3>React components</h3>
            <p>List and key</p>
            <p>State and Props</p>
            <p>Hooks : useState , useEffect , useRef</p>
            <p>LifeCycle of components</p>
            <p>Fragments</p>
          </div>
        )}

        {activeTab === "todos" && <div>Todo list</div>}
        {activeTab === "counter" && <Counter />}
        {activeTab === "shop" && <div>Shop</div>}
        {activeTab === "profile" && <div>user profile</div>}
        {activeTab === "fruits" && <FruitList theme={theme} />}
      </main>

      <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
