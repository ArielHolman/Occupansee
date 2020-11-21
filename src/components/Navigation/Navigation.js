import React from "react";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

const Navigation = ({ isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Logo />
        <h2>Occupansee</h2>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}>
          <Logo />
          <h2>Occupansee</h2>
        </div>
        <button className="f6 fw4 hover-black no-underline black-70 dn dib-ns pv2 ph3" href="#0">
          <Link to="/signin">  Dashboard </Link>
        </button>
        <button className="f3 link dim gold underline pa3 pointer">
          <Link to="/">Sign out</Link>
        </button>
      </nav>
    );
  }
};

export default Navigation;
