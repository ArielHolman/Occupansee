import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const BusinessOwnerInfoForm = () => {
  const [businessOwner, setBusinessOwner] = useState({
    firstName: "",
    lastName: "",
    businessOwnerPhone: "",
    email: "",
    password: "",
  });
  const [redirectToBizRegistration, setRedirectToBizRegistration] = useState(
    false
  );
  const [ownerId, setOwnerId] = useState(null);
  const handleTextChange = (e) => {
    const newBusinessOwner = { ...businessOwner };
    newBusinessOwner[e.target.id] = e.target.value;
    setBusinessOwner(newBusinessOwner);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...businessOwner };
    const res = await fetch("/createOwner", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const result = await res.json();
    setOwnerId(result.ownerId);
    setRedirectToBizRegistration(true);
  };
  if (redirectToBizRegistration) {
    return (
      <Redirect
        to={{ pathname: "/register-business", state: { id: ownerId } }}
      />
    );
  }

  return (
    <form
      className="mt3 black-90"
      style={{ textAlign: "left" }}
      onSubmit={handleSubmit}
    >
      <label className="db fw6 lh-copy f6" htmlFor="firstName">
        First Name
      </label>
      <input
        className="pa2 input-reset ba bg-transparent hover-bg-black w-100"
        type="text"
        name="firstName"
        id="firstName"
        value={businessOwner.firstName}
        onChange={handleTextChange}
        placeholder="First Name"
        style={{ marginBottom: 15 }}
      />
      <label className="db fw6 lh-copy f6" htmlFor="lastname">
        Last Name
      </label>
      <input
        className="pa2 input-reset ba bg-transparent hover-bg-black w-100"
        type="text"
        name="lastName"
        id="lastName"
        value={businessOwner.lastName}
        onChange={handleTextChange}
        placeholder="Last Name"
        style={{ marginBottom: 15 }}
      />
      <label className="db fw6 lh-copy f6" htmlFor="phone">
        Phone Number
      </label>
      <input
        className="pa2 input-reset ba bg-transparent hover-bg-black w-100"
        type="tel"
        id="businessOwnerPhone"
        name="businessOwnerPhone"
        value={businessOwner.businessOwnerPhone}
        onChange={handleTextChange}
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        placeholder="123-456-7890"
        style={{ marginBottom: 15 }}
      />
      <label className="db fw6 lh-copy f6" htmlFor="email-address">
        Email
      </label>
      <input
        className="pa2 input-reset ba bg-transparent hover-bg-black w-100"
        type="email"
        name="email"
        id="email"
        value={businessOwner.email}
        onChange={handleTextChange}
        placeholder="Email@email.com"
        style={{ marginBottom: 15 }}
      />
      <label className="db fw6 lh-copy f6" htmlFor="password">
        Password
      </label>
      <input
        className=" pa2 input-reset ba bg-transparent hover-bg-black w-100"
        type="password"
        name="password"
        id="password"
        value={businessOwner.password}
        onChange={handleTextChange}
        placeholder="Password"
        style={{ marginBottom: 15 }}
      />
      <div className="flex justify-end">
        <button
          type="submit"
          className="btn btn-info button-format pointer mr0"
        >
          Enter Business Information
        </button>
      </div>
    </form>
  );
};

export default BusinessOwnerInfoForm;
