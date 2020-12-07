import React from "react";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { BusinessOwnerContext } from "../BusinessOwnerContextProvider/BusinessOwnerContextProvider";

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
        <h2>
          <Link style={{ color: "black", textDecoration: "none" }} to="/">
            {" "}
            Occupansee{" "}
          </Link>
        </h2>
      </nav>
    );
  } else {
    return (
      <BusinessOwnerContext.Consumer>
        {(context) => (
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
              <h2>
                <Link style={{ color: "black", textDecoration: "none" }} to="/">
                  {" "}
                  Occupansee{" "}
                </Link>
              </h2>
            </div>
            {context.state.isSignedIn && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <button
                  type="button"
                  className="btn btn-info button-format items-center"
                >
                  <Link style={{ color: "white" }} to="/signin">
                    {" "}
                    🔍 Search{" "}
                  </Link>
                </button>
                <button
                  type="button"
                  className="btn btn-info button-format items-center"
                >
                  <Link style={{ color: "white" }} to="/signin">
                    {" "}
                    Dashboard{" "}
                  </Link>
                </button>
                <button type="button" className="btn btn-info button-format">
                  <Link style={{ color: "white" }} to="/">
                    {" "}
                    Sign Out{" "}
                  </Link>
                </button>
              </div>
            )}
          </nav>
        )}
      </BusinessOwnerContext.Consumer>
    );
  }
};

export default Navigation;
