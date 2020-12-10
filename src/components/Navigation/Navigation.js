import React from "react";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import cookie from "cookie";

const Navigation = () => {
  const cookies = cookie.parse(document.cookie);

  return (
    <nav
      style={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
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
        <h2>
          <Link style={{ color: "black", textDecoration: "none" }} to="/">
            {" "}
            Occupansee{" "}
          </Link>
        </h2>
      </div>
      {cookies.loggedIn && (
        <div>
          <button
            type="button"
            className="btn btn-info button-format items-center"
            onClick={() => {
              window.location.assign("/");
            }}
          >
            {" "}
            🔍 Search{" "}
          </button>
          <button
            type="button"
            className="btn btn-info button-format items-center"
            onClick={() => {
              window.location.assign("/dashboard");
            }}
          >
            {" "}
            Dashboard{" "}
          </button>
          <button
            type="button"
            className="btn btn-info button-format"
            onClick={() => {
              document.cookie = "loggedIn=";
              window.location.assign("/");
            }}
          >
            {" "}
            Sign Out{" "}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
