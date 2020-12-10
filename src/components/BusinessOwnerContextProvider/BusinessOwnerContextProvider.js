import React, { useState } from "react";

export const BusinessOwnerContext = React.createContext();

const BusinessOwnerContextProvider = ({ children }) => {
  const [businessOwner, setBusinessOwner] = useState({});
  function updateBusinessOwner(ownerInfo) {
    console.log("IN Owner", ownerInfo);
    setBusinessOwner(ownerInfo);
  }

  return (
    <BusinessOwnerContext.Provider
      value={{
        businessOwner,
        updateBusinessOwner,
      }}
    >
      {children}
    </BusinessOwnerContext.Provider>
  );
};

export default BusinessOwnerContextProvider;
