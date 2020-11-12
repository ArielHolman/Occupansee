import React from "react";
import Logo from "../Logo/Logo";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (!isSignedIn) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-start", alignItems:"center"}}>
        <Logo />
        <h2>Occupansee</h2>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <Logo />
        <p
          onClick={() => onRouteChange("home")}
          className="f3 link dim gold underline pa3 pointer"
        >
          Sign Out
        </p>
      </nav>
    );
  }
};

export default Navigation;
