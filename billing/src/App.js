import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [token, setToken] = useState(null);


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={!token && (<Login setToken={setToken} />)} />
    
        <Route exact path="/dashboard" element={"Dash"} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
