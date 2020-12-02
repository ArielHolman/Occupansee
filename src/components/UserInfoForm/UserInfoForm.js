import React from "react";

const UserInfoForm = () => {
  return (
    <div className="mt3 bg-white-90" style={{ textAlign: "left" }}>
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
  );
};

export default UserInfoForm;
