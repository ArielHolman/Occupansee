import React from "react";
import UserInfoForm from "../UserInfoForm/UserInfoForm";
import { Link } from "react-router-dom";

const UserRegistration = () => {
  return (
    <form className="br2 ba shadow-5 b--black-10 mv4 w-50 center">
      <main className="pa3 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0 center">Register Today!</legend>
            <p className="f5">
              {
                "Allow your customers to search for your business, see your current occupancy, and feel safe planning their next visit!"
              }
            </p>
            <UserInfoForm />
          </fieldset>
          <div className="flex justify-end">
            <button
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib "
              type="submit"
            >
              <Link to="/register-business">Enter Business Information </Link>
            </button>
          </div>
        </div>
      </main>
    </form>
  );
};

export default UserRegistration;
