import { useState } from "react";

const Login = ({ onSubmit, credentials }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email && !formData.password) {
      alert("Please enter yor email and password");
      return;
    }

    if (
      credentials &&
      credentials.email === formData.email &&
      credentials.password === formData.password
    ) {
      onSubmit(credentials);
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div style={{ width: "400px", border: "1px solid white", padding: "10px" }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email..."
          value={formData.email}
          onChange={handleChange}
          style={{ width: "90%", marginBottom: "20px", padding: "10px" }}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password..."
          value={formData.password}
          onChange={handleChange}
          style={{ width: "90%", marginBottom: "20px", padding: "10px" }}
        />
        <button type="submit">Login </button>
      </form>
    </div>
  );
};

export default Login;
