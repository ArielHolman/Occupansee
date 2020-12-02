import React, { Component } from "react";

const BusinessContext = React.createContext();

export default class ContextProvider extends Component {
  state = {
    id: 1,
    businessname: "West Pecan Coffee + Beer",
    phone: "(512) 551-3471",
    street: "100 W Pecan St.",
    city: "Pflugerville",
    state: "TX",
    zip: 78660,
    website: "https://westpecancoffee.com",
    lat: 30.4403571,
    lng: -97.6232054,
    maxoccupancy: 100,
    active: false,
  };

  render() {
    return (
      <BusinessContext.Provider value={{
        state: this.state
      }}>
        {this.props.children}
      </BusinessContext.Provider>
    );
  }
}

export { BusinessContext }