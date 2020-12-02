import React from "react";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = ({ isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Logo />
        <h2>Occupansee</h2>
      </nav>
    );
  } else {
    return (
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Logo />
          <h2>Occupansee</h2>
        </div>
        <div style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}>
        <button type="button" className="btn btn-info nav-btn items-center">
          <Link style={{ color:"white"}} to="/signin"> Dashboard </Link>
        </button>
        <button type="button" className="btn btn-info nav-btn">
          <Link style={{ color:"white"}}  to="/signin"> Sign Out </Link>
        </button>
        </div>
      </nav>
    );
  }
};

export default Navigation;
