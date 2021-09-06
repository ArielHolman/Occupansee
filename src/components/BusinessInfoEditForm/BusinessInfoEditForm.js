import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { BusinessContext } from "../BusinessContextProvider/BusinessContextProvider";


const BusinessInfoEditForm = () => {
  const [business, setBusiness] = useState({
    businessName: "",
    streetAddress: "",
    city: "",
    state: "",
    zipcode: "",
    website: "",
    businessPhone: "",
    maxOccupancy: "",
    allowedOccupancyRestriction: "",
    profileImage: "",
  });
  const { businessInfo } = useContext(BusinessContext);

  const handleTextChange = (e) => {
    const updateBusiness = { ...business };
    updateBusiness[e.target.id] = e.target.value;
    setBusiness(updateBusiness);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...business };
    const businessId = businessInfo.businessId
    const res = await fetch("/:businessId", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const result = await res.text();
  };

  return (
    <form
      className="mt3 bg-white-90"
      style={{ textAlign: "left" }}
      onSubmit={handleSubmit}
    >
      <label className="db fw6 lh-copy f6" htmlFor="businessName">
        Business Name
      </label>
      <input
        className="pa2 input-reset ba bg-transparent w-100 f4"
        type="text"
        value={business.businessName}
        onChange={handleTextChange}
        name="businessName"
        id="businessName"
        placeholder="Business Name"
        style={{ marginBottom: 15 }}
      />
      <label className="db fw6 lh-copy f6" htmlFor="streetAddress">
        Street Address
      </label>
      <input
        className="pa2 input-reset ba bg-transparent w-100 f4"
        type="text"
        value={business.streetAddress}
        onChange={handleTextChange}
        name="streetAddress"
        id="streetAddress"
        placeholder="Street Address"
        style={{ marginBottom: 15 }}
      />
      <label className="db fw6 lh-copy f6" htmlFor="city">
        City
      </label>
      <input
        className="pa2 input-reset ba bg-transparent w-100 f4"
        type="text"
        value={business.city}
        onChange={handleTextChange}
        name="city"
        id="city"
        placeholder="City"
        style={{ marginBottom: 15 }}
      />
      <label className="db fw6 lh-copy f6" htmlFor="state">
        State
      </label>
      <input
        className="pa2 input-reset ba bg-transparent w-100 f4"
        type="text"
        value={business.state}
        onChange={handleTextChange}
        name="state"
        id="state"
        placeholder="Example: TX"
        style={{ marginBottom: 15 }}
      />
      <label className="db fw6 lh-copy f6" htmlFor="zipcode">
        Zip Code
      </label>
      <input
        className="pa2 input-reset ba bg-transparent w-100 f4"
        type="number"
        id="zipcode"
        value={business.zipcode}
        onChange={handleTextChange}
        name="zipcode"
        pattern="[0-9]{5}"
        placeholder="Example: 77433"
        style={{ marginBottom: 15 }}
      />
      <label className="db fw6 lh-copy f6" htmlFor="website">
        Website
      </label>
      <input
        className="pa2 input-reset ba bg-transparent w-100 f4"
        type="text"
        value={business.website}
        onChange={handleTextChange}
        name="website"
        id="website"
        placeholder="Example: TX"
        style={{ marginBottom: 15 }}
      />
      <label className="db fw6 lh-copy f6" htmlFor="businessPhone">
        Business Phone Number
      </label>
      <input
        className="pa2 input-reset ba bg-transparent w-100 f4"
        type="tel"
        id="businessPhone"
        name="businessPhone"
        value={business.businessPhone}
        onChange={handleTextChange}
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        placeholder="123-456-7890"
        style={{ marginBottom: 15 }}
      />
      <label className="db fw6 lh-copy f6" htmlFor="maxOccupancy">
        Max Occupancy
      </label>
      <input
        className="pa2 input-reset ba bg-transparent w-100 f4"
        type="number"
        id="maxOccupancy"
        value={business.maxOccupancy}
        onChange={handleTextChange}
        name="maxOccupancy"
        pattern="[0-9]{5}"
        placeholder="Example: 250"
        style={{ marginBottom: 15 }}
      />
      <label
        className="db fw6 lh-copy f6"
        htmlFor="allowedOccupancyRestriction"
      >
        Allowed Occupancy Restriction
      </label>
      <input
        className="pa2 input-reset ba bg-transparent w-100 f4"
        type="number"
        id="allowedOccupancyRestriction"
        value={business.allowedOccupancyRestriction}
        onChange={handleTextChange}
        name="allowedOccupancyRestriction"
        pattern="[0-9]{5}"
        placeholder="Example: 75 for 75%"
        style={{ marginBottom: 15 }}
      />
      <div className="flex justify-end">
        <button
          type="submit"
          className="pa2 btn btn-info button-format pointer mr0"
        >
          <Link className="f4 no-underline white" to="/dashboard">Update Business Information</Link>
        </button>
      </div>
    </form>
  );
};

export default BusinessInfoEditForm;
