import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  //   const handleLogin = () => {
  //     // Logic for handling login
  //     console.log("Logging in...");
  //   };

  //   const handleSignup = () => {
  //     // Logic for handling signup
  //     console.log("Signing up...");
  //   };

  return (
    <>
      {/* <nav>
      <div>
        <h1>My Website</h1>
      </div>
      <div>
        {token ? (
          <button onClick={() => console.log('Logout')}>Logout</button>
        ) : (
          <>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleSignup}>Signup</button>
          </>
        )}
      </div>
    </nav> */}

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/">
                Features
              </Link>
              <Link className="nav-link" to="/">
                Pricing
              </Link>
              <Link className="nav-link disabled" aria-disabled="true">
                Disabled
              </Link>
            </div>
          </div>

          {props.user_info === null ? (
            // Condition 1: If user_info is not null
            <div className="navbar-nav ms-auto">
              <Link className="btn btn-primary" to="/login">
                Login
              </Link>
              <Link className="btn btn-outline-primary" to="/signup">
                Signup
              </Link>
            </div>
          ) : (
            // Condition 2: If user_info is null, assuming props.user["name"] exists
            <div className="navbar-nav ms-auto">
              <b>User:</b>
              {props.user && props.user.name && (
                <span>{props.user["name"]}</span>
              )}
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
