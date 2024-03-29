import React, { useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Signin.css";
import cookie from "cookie";
import Navigation from "../../components/Navigation/Navigation";
import { BusinessContext } from "../../components/BusinessContextProvider/BusinessContextProvider";
import { BusinessOwnerContext } from "../../components/BusinessOwnerContextProvider/BusinessOwnerContextProvider";

const Signin = () => {
  const cookies = cookie.parse(document.cookie);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [errMsg, setErrMsg] = useState("");
  const { updateBusinessInfo } = useContext(BusinessContext);
  const { updateBusinessOwner } = useContext(BusinessOwnerContext);
  const [redirectToDash, setRedirectToDash] = useState(false);

  const onSignIn = async (e) => {
    e.preventDefault();
    const payload = { ...credentials };

    try {
      const res = await fetch("/signIn", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) {
        if (res.status === 404) {
          setErrMsg("Account does not exist with this email or password.");
        }
      } else {
        document.cookie = `token=${result.token}`;
        document.cookie = "loggedIn=true";
        updateBusinessOwner(result.data);
        setRedirectToDash(true);
      }
    } catch (err) {
    }
  };

  if (redirectToDash) {
    return <Redirect to="/dashboard" />;
  }

  const handleTextChange = (e) => {
    const creds = { ...credentials };
    creds[e.target.id] = e.target.value;
    setCredentials(creds);
  };
  return (
    <>
    <Navigation />
    <form
      className="br3 ba shadow-5 b--black-10 mv4 w-100 w-50-m w-25-l mw6 center bg-white-90"
      onSubmit={onSignIn}
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
              <label className="db fw6 lh-copy f5" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent w-100 f4"
                type="email"
                onChange={handleTextChange}
                name="email-address"
                id="email"
                placeholder="Email Address"
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f5" htmlFor="password">
                Password
              </label>
              <input
                className="pa2 input-reset ba bg-transparent w-100 f4"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={handleTextChange}
              />
            </div>
          </fieldset>
          <div>
            <button
              className="b grow pointer btn btn-info f5 pa2 button-format center"
              type="submit"
            >
              Sign In
            </button>
          </div>
          <div className="lh-copy mt3">
            <div className="f5 link db pointer register-link">
              <Link className="register-link" to="/register-business-owner">Register today!</Link>
            </div>
          </div>
        </div>
      </main>
    </form>
    </>
  );
};

export default Signin;
