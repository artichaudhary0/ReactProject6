import "./App.css";
import Props from "./components/Props";

function App() {
  return (
    <>
      {/* child component */}
      <Props
        name="kuch bhi"
        education="Btech"
        colors={["red", "black", "blue", "white", "yellow"]}
        userName={{
          firstName: "Arti",
          middleName: "Singh",
          lastName: "Chaudhary",
        }}
      />
    </>
  );
}

export default App;
