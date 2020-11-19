import React from "react";
// import Tilt from "react-tilt";
import glasses from "./glasses.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div style={{ marginTop: 10 }}>
      {/* <Tilt
        className="Tilt"
        options={{ max: 45 }}
        style={{ height: 100, width: 100 }}
      > */}
        <div className="Tilt-inner pa3">
          <img style={{ paddingTop: "2px" }} alt="logo" src={glasses}></img>
        </div>
      {/* </Tilt> */}
    </div>
  );
};

export default Logo;
