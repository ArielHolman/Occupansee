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
        <Logo />
        <button className="f3 link dim gold underline pa3 pointer">
          <Link to="/">Sign out</Link>
        </button>
      </nav>
    );
  }
};

export default Navigation;
