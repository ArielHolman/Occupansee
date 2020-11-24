import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

const mockBiz = {
  id: 1,
  name: "West Pecan Coffee + Beer",
  phone: "(512)551-3471",
  street: "100 W Pecan St.",
  city: "Pflugerville",
  state: "TX",
  zip: 78660,
  hours: "7:00 AM - 9:00 PM",
  website: "https://westpecancoffee.com",
  lat: 30.4403571,
  lng: -97.6232054,
  maxoccupancy: 100,
  isActive: false,
};

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
      className="br3 ba shadow-5 b--black-10 mv4 w-100 w-50-m w-25-l mw6 center"
    >
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset
            id="sign_up"
            className="ba b--transparent ph0 mh0"
            style={{ textAlign: "left" }}
          >
            <legend className="f4 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
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
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <label className="pa0 ma0 lh-copy f6 pointer">
              <input type="checkbox" /> Remember me
            </label>
          </fieldset>
          <div>
            <button
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              onClick={() => {
                onSignIn();
              }}
            >
              Sign In
            </button>
          </div>
          <div className="lh-copy mt3">
            <button className="f6 link dim gold db pointer">
              <Link to="/register-user">Register today!</Link>
            </button>
          </div>
        </div>
      </main>
      {business.redirect && (
        <Redirect
          to={{
            pathname: "/dashboard",
            state: { mockBiz },
          }}
        />
      )}
    </form>
  );
};

export default Signin;
