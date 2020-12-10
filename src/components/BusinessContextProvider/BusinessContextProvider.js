import React, { useState } from "react";

export const BusinessContext = React.createContext();

const BusinessContextProvider = ({ children }) => {
  const [businessInfo, setBusinessInfo] = useState({});
  function updateBusinessInfo(signedInInfo) {
    setBusinessInfo(signedInInfo);
  }

  return (
    <BusinessContext.Provider value={{ businessInfo, updateBusinessInfo }}>
      {children}
    </BusinessContext.Provider>
  );
};

// // ************ original context ***************
// class BusinessContextProvider extends Component {
//   state = {
//     id: 1,
//     businessname: "West Pecan Coffee + Beer",
//     phone: "(512) 551-3471",
//     street: "100 W Pecan St.",
//     city: "Pflugerville",
//     state: "TX",
//     zip: 78660,
//     website: "https://westpecancoffee.com",
//     maxoccupancy: 100,
//     isActive: false,
//   };
//   render() {
//     return (
//       <BusinessContext.Provider
//         value={{
//           state: this.state,
//         }}
//       >
//         {this.props.children}
//       </BusinessContext.Provider>
//     );
//   }
// }

export default BusinessContextProvider;
