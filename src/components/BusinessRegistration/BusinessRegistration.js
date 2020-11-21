import React from "react";
import BusinessInfoForm from "../BusinessInfoForm/BusinessInfoForm";
import { Link } from "react-router-dom";

const BusinessRegistration = () => {
  return (
    <form className="br2 ba shadow-5 b--black-10 mv4 w-50 center">
      <main className="pa3 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0 center">
              Add Business Information
            </legend>
            <p className="f5">
              {
                "Please add business information needed to help your customers find you!"
              }
            </p>
            <BusinessInfoForm />
          </fieldset>
          <div className="flex justify-end">
            <button className="f5 link dim gold underline pa1 pointer">
              <Link to="/signin">Register</Link>
            </button>
          </div>
        </div>
      </main>
    </form>
  );
};

export default BusinessRegistration;
