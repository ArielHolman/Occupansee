import React from "react";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import cookie from "cookie";

const Navigation = () => {
  const cookies = cookie.parse(document.cookie);
console.log("cookie", cookie)
console.log("cookies", cookies)
console.log("hello")
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
      {cookies.loggedIn === true && (
        <div>
          <button
            type="button"
            className="btn btn-info button-format items-center"
            onClick={() => {
              document.cookie = "loggedIn=true";
              window.location.assign("/home");
            }}
          >
            {" "}
            🔍 Search{" "}
          </button>
          <button
            type="button"
            className="btn btn-info button-format items-center"
            onClick={() => {
              document.cookie = "loggedIn=";
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
              window.location.assign("/home");
            }}
          >
            {" "}
            Sign Out{" "}
          </button>
        </div>
      )}
      {cookies.loggedIn === '' && (
        <button
          color="inherit"
          className="nav-list-item"
          onClick={() => {
            window.location.replace("/signin");
          }}
        >
          Login
        </button>
      )}
    </nav>
  );
};

export default Navigation;
