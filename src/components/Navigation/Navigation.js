import React from "react";
import Logo from "../Logo/Logo";

const Navigation = () => {
  return (
    <div>
      <nav style={{ display: "flex", justifyContent: "space-between"}}>
        <Logo />
        <p
          className="f3 link dim gold underline pa3 pointer"
        >
          Log In
        </p>
      </nav>
    </div>
  );
};

export default Navigation;
