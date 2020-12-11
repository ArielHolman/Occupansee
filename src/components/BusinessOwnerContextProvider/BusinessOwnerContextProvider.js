import React, { useState } from "react";

export const BusinessOwnerContext = React.createContext();

const BusinessOwnerContextProvider = ({ children }) => {
  const [businessOwner, setBusinessOwner] = useState({
    firstName: "Harry",
    lastName: "Potter",
    businessOwnerPhone: 323 - 564 - 7699,
    email: "harry@gmail.com",
    password: "harryPW1234",
  });
  function updateBusinessOwner(ownerInfo) {
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
