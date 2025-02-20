import "./App.css";
import LifeCycle from "./components/LifeCycle";

/*
lifecycle of component : 
  1 : function based 
      1 : MOUNT : birth of component
      2 : UPDATE : intermediate stage
      3 : UN-MOUNT : expired of component

  2 : class based
      1 : MOUNT
      2 : UPDATE
      3 : UN-MOUNT
*/
function App() {
  return (
    <>
      <LifeCycle />
    </>
  );
}

export default App;
