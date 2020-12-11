import React from "react";
import BusinessInfoForm from "../BusinessInfoForm/BusinessInfoForm";

const BusinessRegistration = ({location}) => {
  const id = location.state.id
  return (
    <div className="br2 ba shadow-5 b--black-10 mv4 w-50 center bg-white-90">
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
            <BusinessInfoForm id={id} />
          </fieldset>
        </div>
      </main>
    </div>
  );
};

export default BusinessRegistration;
