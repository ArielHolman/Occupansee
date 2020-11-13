import React from "react";
import { Link } from "react-router-dom";

const UserRegistration = ({ onRouteChange }) => {
  return (
    <article className="br2 ba shadow-5 b--black-10 mv4 w-50 center">
      <main className="pa3 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Register Today!</legend>
            <p className="f5">
              {
                "Allow your customers to search for your business, see your current occupancy, and feel safe planning their next visit!"
              }
            </p>
            <div className="mt3" style={{ textAlign: "left" }}>
              <label className="db fw6 lh-copy f6" htmlFor="firstname">
                First Name
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="firstname"
                id="firstname"
                placeholder="First Name"
                style={{ marginBottom: 15 }}
              />
              <label className="db fw6 lh-copy f6" htmlFor="lastname">
                Last Name
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Last Name"
                style={{ marginBottom: 15 }}
              />
              <label className="db fw6 lh-copy f6" htmlFor="phone">
                Phone Number
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="tel"
                id="phone"
                name="phone"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="123-456-7890"
                style={{ marginBottom: 15 }}
              />
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
                placeholder="Email@email.com"
                style={{ marginBottom: 15 }}
              />
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className=" pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                style={{ marginBottom: 15 }}
              />
            </div>
          </fieldset>
          <div>
            <button
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
            >
              <Link to="/register-business">Enter Business Information</Link>
            </button>
          </div>
        </div>
      </main>
    </article>
  );
};

export default UserRegistration;
