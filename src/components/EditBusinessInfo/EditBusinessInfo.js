import React from "react";
import BusinessInfoEditForm from "../BusinessInfoEditForm/BusinessInfoEditForm";
import Navigation from '../Navigation/Navigation';
import ProfileImage from "../ProfileImage/ProfileImage"

const EditBusinessInfo = () => {
  return (
    <div>
      <Navigation />
    <div className="br2 ba shadow-5 b--black-10 mv4 w-50 center bg-white-90">
      <main className="pa3 black-80 w-70">
        <div className="">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0 center underline">
              Edit Business Information
            </legend>
            <ProfileImage />
            <BusinessInfoEditForm />
          </fieldset>
        </div>
      </main>
    </div>
    </div>
  );
};

export default EditBusinessInfo;
