import React, { Component } from "react";

const BusinessOwnerContext = React.createContext();

export default class BusinessOwnerContextProvider extends Component {
  state = {
    businessOwnerid: 1,
    firstname: "Harry",
    lastname: "Potter",
    businessOwnerPhone: "(512) 604-4004",
    email: "harry.potter@gmail.com",
    password: "Password1234",
    isSignedIn: false,
  };

  render() {
    return (
      <BusinessOwnerContext.Provider
        value={{
          state: this.state,
        }}
      >
        {this.props.children}
      </BusinessOwnerContext.Provider>
    );
  }
}

export { BusinessOwnerContext };
