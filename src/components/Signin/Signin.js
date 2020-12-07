import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Signin.css";

const Signin = () => {
  const [business, setBusiness] = useState({
    redirect: false,
  });

  const onSignIn = () => {
    setBusiness({
      redirect: true,
    });
  };
  return (
    <form
      onSubmit={onSignIn}
      className="br3 ba shadow-5 b--black-10 mv4 w-100 w-50-m w-25-l mw6 center bg-white-90"
    >
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset
            id="sign_up"
            className="ba b--transparent ph0 mh0"
            style={{ textAlign: "left" }}
          >
            <legend className="f4 fw6 ph0 mh0 center">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black w-100"
                type="email"
                name="email-address"
                id="email-address"
                placeholder="Email Address"
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black w-100"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
          </fieldset>
          <div>
            <button
              className="b grow pointer btn btn-info f6 button-format center"
              type="submit"
              onClick={() => {
                onSignIn();
              }}
            >
              Sign In
            </button>
          </div>
          <div className="lh-copy mt3">
            <button className="f6 link dim gold db pointer register-link">
              <Link to="/register-business-owner">Register today!</Link>
            </button>
          </div>
        </div>
      </main>
      {business.redirect && (
        <Redirect
          to={{
            pathname: "/dashboard",
          }}
        />
      )}
    </form>
  );
};

export default Signin;
