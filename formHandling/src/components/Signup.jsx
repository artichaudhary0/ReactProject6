import { useState } from "react";

const SignUp = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone_number: "",
    dob: "",
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
    onSubmit(formData);
  };

  return (
    <div style={{ width: "400px", border: "1px solid white", padding: "10px" }}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name..."
          value={formData.name}
          onChange={handleChange}
          style={{ width: "90%", marginBottom: "20px", padding: "10px" }}
        />
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
        <input
          type="tel"
          name="phone_number"
          placeholder="Enter your phone_number..."
          value={formData.phone_number}
          onChange={handleChange}
          style={{ width: "90%", marginBottom: "20px", padding: "10px" }}
        />
        <input
          type="date"
          name="dob"
          placeholder="Enter your dob..."
          value={formData.dob}
          onChange={handleChange}
          style={{ width: "90%", marginBottom: "20px", padding: "10px" }}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
