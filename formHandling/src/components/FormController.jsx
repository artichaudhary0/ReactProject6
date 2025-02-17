import { useState } from "react";
import Login from "./Login";
import SignUp from "./Signup";

const FormController = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [credentials, setCredentials] = useState(null);
  const [userData, setUserData] = useState(null);

  const handleFormSubmit = (data) => {
    try {
      if (isLogin) {
        // login
        setUserData(data);
      } else {
        // signup
        setCredentials({ email: data.email, password: data.password });
        setIsLogin(true);
      }
    } catch (error) {
      throw new Error("dvriyrg");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {userData ? (
        <h1>Welcome</h1>
      ) : isLogin ? (
        <Login onSubmit={handleFormSubmit} credentials={credentials} />
      ) : (
        <SignUp onSubmit={handleFormSubmit} />
      )}
      {!userData && (
        <button onClick={() => setIsLogin(!isLogin)}>
          Switch to {isLogin ? "Signup" : "login"}
        </button>
      )}
    </div>
  );
};

export default FormController;
