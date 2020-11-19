import React from "react";
import { Link } from "react-router-dom";

const UserRegistration = () => {
  return (
    <form className="br2 ba shadow-5 b--black-10 mv4 w-50 center">
      <main className="pa3 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">
              Enter Business Information
            </legend>
            <p className="f5">
              {
                "Please add the business information needed to help your customers find you!"
              }
            </p>
            <div className="mt3" style={{ textAlign: "left" }}>
              <label className="db fw6 lh-copy f6" htmlFor="businessname">
                Business Name
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="businessname"
                id="businessname"
                placeholder="Business Name"
                style={{ marginBottom: 15 }}
              />
              <label className="db fw6 lh-copy f6" htmlFor="address">
                Street Address
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="address"
                id="address"
                placeholder="Street Address"
                style={{ marginBottom: 15 }}
              />
              <label className="db fw6 lh-copy f6" htmlFor="city">
                City
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="city"
                id="city"
                placeholder="City"
                style={{ marginBottom: 15 }}
              />
              <label className="db fw6 lh-copy f6" htmlFor="state">
                State
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="state"
                id="state"
                placeholder="Example: TX"
                style={{ marginBottom: 15 }}
              />
              <label className="db fw6 lh-copy f6" htmlFor="zip">
                Zip Code
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="number"
                id="zip"
                name="zip"
                pattern="[0-9]{5}"
                placeholder="Example: 77433"
                style={{ marginBottom: 15 }}
              />
              <label className="db fw6 lh-copy f6" htmlFor="maxcapacity">
                Max Capacity
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="number"
                id="maxcapacity"
                name="maxcapacity"
                pattern="[0-9]{5}"
                placeholder="Example: 250"
                style={{ marginBottom: 15 }}
              />
              <label className="db fw6 lh-copy f6" htmlFor="restrictions">
                Allowed Capacity Restriction
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="number"
                id="restrictions"
                name="restrictions"
                pattern="[0-9]{5}"
                placeholder="Example: 75 for 75%"
                style={{ marginBottom: 15 }}
              />
            </div>
          </fieldset>
          <div>
            <button className="f5 link dim gold underline pa1 pointer">
              <Link to="/signin">Register</Link>
            </button>
          </div>
        </div>
      </main>
    </form>
  );
};

export default UserRegistration;
