import React, { Component, useEffect, useReducer } from "react";

const BusinessContext = React.createContext();

// const STORAGE_KEY = "bizInfo";
// export const persistState = (storageKey, state) => {
//   window.localStorage.setItem(storageKey, JSON.stringify(state));
// };
// export const getIntialState = (storageKey) => {
//   const savedState = window.localStorage.getItem(storageKey);
//   try {
//     if (!savedState) {
//       return undefined;
//     }
//     return JSON.parse(savedState || {});
//   } catch (e) {
//     console.error("Error loading state : " + storageKey);
//     return undefined;
//   }
// };
// const initialState = getIntialState(STORAGE_KEY) ?? '';
// const reducer = (state, action) => {
//   switch (action.type) {
//       case 'UPDATE_BIZ':
//           return {
//               ...state,
//               ...{
//                   session: action.payload,
//               }
//           };
//       default:
//           throw new Error('Action invalid.');
//   }
// }
// const providerValue = { state:initialState, dispatch:(action)=>{} };

// const bizInfoStore = React.createContext(providerValue)
// const {Provider} = bizInfoStore

// const BusinessContextProvider = ({children}) => {
//   // const [businessInfo, setBusinessInfo] = useState({});
//   // function updateBusinessInfo(signedInInfo) {
//   //   setBusinessInfo(signedInInfo);
//   //   // persistState(STORAGE_KEY, ...businessInfo);
//   // }
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const providerValue = { state, dispatch };
//   useEffect(() => {
//     persistState(STORAGE_KEY, state);
//   }),
//     [state];

//     return <Provider value={providerValue}>{children}</Provider>

// ************ original context ***************
class BusinessContextProvider extends Component {
  state = {
    id: 1,
    businessname: "West Pecan Coffee + Beer",
    phone: "(512) 551-3471",
    street: "100 W Pecan St.",
    city: "Pflugerville",
    state: "TX",
    zip: 78660,
    website: "https://westpecancoffee.com",
    maxoccupancy: 100,
    isActive: false,
  };
  render() {
    return (
      <BusinessContext.Provider
        value={{
          state: this.state,
        }}
      >
        {this.props.children}
      </BusinessContext.Provider>
    );
  }
}

export default BusinessContextProvider;
export { BusinessContext };
// export {bizInfoStore}
