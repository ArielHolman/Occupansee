import React from "react";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import cookie from "cookie";
import { CenterFocusStrong } from "@material-ui/icons";

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
      <Link
        to="/"
        style={{ color: "black", textDecoration: "none", fontSize: 50 }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            margin: 0,
          }}
        >
          <Logo />
          <p className="occupansee-title">Occupansee</p>
        </div>
      </Link>
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
