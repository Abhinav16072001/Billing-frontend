import React, { useState } from "react";
import "../login.css";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("dev"); // Default role is 'dev'

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform authentication - This could be a fetch or axios call to your backend
    const response = await fetch(`http://127.0.0.1:8000/gateway/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, role }), // Include role in the request body
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      // Assuming the token is in the response data
      const token = data.access_token;
      // Save token to local storage or state
      localStorage.setItem("token", token);
      props.setToken(token);
      console.log(token);
    } else {
      // Handle authentication error
      console.error("Authentication failed");
    }
  };

  return (

    <div className="login">
      <div className="container">
        <div className="login-page">
          <div className="form">
            <form className="login-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="dev">Developer</option>
                <option value="admin">Admin</option>
              </select>
              <button>login</button>
              <p className="message">
                Not registered? <Link to="/signup">Create an account</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
