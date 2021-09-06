import React from "react";
import RegistrationForm from "../RegistrationForm/RegistrationForm";


const RegistrationPage = () => {
  return (
    <>
    <div className="br2 ba shadow-5 b--black-10 mv3 w-50 center bg-white-90">
      <main className="pa3 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0 center">
              Register Your Business Today!
            </legend>
            <p className="f5">
              {
                "Allow your customers to search for your business, see your current occupancy, and feel safe planning their next visit!"
              }
            </p>
            <RegistrationForm />
          </fieldset>
        </div>
      </main>
    </div>
    </>
  );
};

export default RegistrationPage;
