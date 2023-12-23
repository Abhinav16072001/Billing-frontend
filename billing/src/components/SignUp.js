import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("dev"); // Default role is 'dev'

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/gateway/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, name, role }),
      });

      const data = await response.json();

      if (response.ok) {
        // Successful signup
        console.log("Signup successful!", data);
        // Reset form fields after successful signup
        setUsername("");
        setPassword("");
        setName("");
        setRole("dev"); // Resetting role to default
      } else {
        // Handle unsuccessful signup
        console.error("Signup failed:", data.message);
      }
    } catch (error) {
      console.error("Error during signup:", error.message);
    }
  };

  return (
    <div className="signup">
      <div className="container">
        <div className="card">
          <div className="card_title">
            <h1>Create Account</h1>
            <span>
              Already have an account? <Link to="/login">Sign In</Link>
            </span>
          </div>
          <div className="form">
            <form method="post" onSubmit={handleSignup}>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="UserName"
                value={name}
                onChange={handleNameChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                id="email"
                value={username}
                onChange={handleUsernameChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                onChange={handlePasswordChange}
              />
              <select
                id="role"
                name="role"
                value={role}
                onChange={handleRoleChange}
              >
                <option value="dev">Developer</option>
                <option value="admin">Admin</option>
              </select>
              <button>Sign Up</button>
            </form>
          </div>
          <div className="card_terms">
            <input type="checkbox" name="" id="terms" />
            <span>
              I have read and agree to the <Link  to="/termsandservice">Terms of Service</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
