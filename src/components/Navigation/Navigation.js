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
        height: 110,
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
          <Link to="/">
            <button
              type="button"
              className="btn btn-info button-format items-center"
            >
              {" "}
              🔍 Search{" "}
            </button>
          </Link>
          <Link to="/dashboard">
            <button
              type="button"
              className="btn btn-info button-format items-center"
            >
              {" "}
              Dashboard{" "}
            </button>
          </Link>
          <Link to="/">
            <button
              type="button"
              className="btn btn-info button-format"
              onClick={() => {
                document.cookie = "loggedIn=";
              }}
            >
              {" "}
              Sign Out{" "}
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
