import React, { Component } from "react";

const BusinessContext = React.createContext();

export default class BusinessContextProvider extends Component {
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
          activityChange: () =>
            this.setState({
              isActive:
                this.state.isActive === document.body.style.backgroundColor ==
                "green"
                  ? document.body.style.backgroundColor == "blue"
                  : document.body.style.backgroundColor == "blue",
            }),
        }}
      >
        {this.props.children}
      </BusinessContext.Provider>
    );
  }
}

export { BusinessContext };
