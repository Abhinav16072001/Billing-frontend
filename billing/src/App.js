import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const fetchCurrentUser = useCallback(async () => {
    try {
      // Make an API call to fetch current user data using the token
      const response = await fetch("http://127.0.0.1:8000/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          // Add other necessary headers
        },
      });

      if (response.ok) {
        const userData = await response.json();
        console.log(userData)
        setCurrentUser(userData);
      } else {
        // Handle error if the request fails
        // For example: Redirect to login page or show an error message
      }
    } catch (error) {
      // Handle fetch error
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      // Fetch current user information using an API
      fetchCurrentUser();
    }
  }, [token, fetchCurrentUser]);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/signup" element={<Signup />} />
        <Route
          exact
          path="/login"
          element={
            !token && <Login setToken={setToken}  />
          }
        />

        <Route exact path="/" element={<Dashboard user={currentUser}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
