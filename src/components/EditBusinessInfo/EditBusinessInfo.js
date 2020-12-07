import React from "react";
import BusinessInfoForm from "../BusinessInfoForm/BusinessInfoForm";
import { Link } from "react-router-dom";
import ProfileImage from "../ProfileImage/ProfileImage"

const EditBusinessInfo = () => {
  return (
    <form className="br2 ba shadow-5 b--black-10 mv4 w-50 center bg-white-90">
      <main className="pa3 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0 center underline">
              Edit Business Information
            </legend>
            <p className="f5">
              {
                "Please edit business information needed to help your customers find you!"
              }
            </p>
            <ProfileImage />
            <BusinessInfoForm />
          </fieldset>
          <div className="flex justify-end">
            <button type="button" className="btn btn-info button-format pointer mr0">
              <Link style={{ color:"white"}} to="/signin">Save Changes</Link>
            </button>
          </div>
        </div>
      </main>
    </form>
  );
};

export default EditBusinessInfo;
