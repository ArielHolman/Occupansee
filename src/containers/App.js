import React, { Component } from "react";
import Navigation from "../components/Navigation/Navigation";
import Home from "../components/Home/Home";
import Signin from "../components/Signin/Signin";
import UserRegistration from "../components/UserRegistration/UserRegistration";
import Dashboard from "../components/Dashboard/Dashboard";
import BusinessRegistration from "../components/BusinessRegistration/BusinessRegistration"
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: "home",
      isSignedIn: false,
    };
  }

  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState({ isSignedIn: false });
    } else if (route === "home") {
      this.setState({ isSignedIn: false });
    } else if (route === "dashboard") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    const { isSignedIn } = this.state;
    return (
      <div className="tc app-container">
        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
        />
        {this.state.route === "home" && (
          <div>
            <Home onRouteChange={this.onRouteChange} isSignedIn={isSignedIn} />
          </div>
        )}

        {this.state.route === "signin" && (
          <Signin onRouteChange={this.onRouteChange} />
        )}

        {this.state.route === "register" && (
          <UserRegistration onRouteChange={this.onRouteChange} />
        )}

        {this.state.route === "businessRegistration" && (
          <BusinessRegistration onRouteChange={this.onRouteChange} />
        )}

        {this.state.route === "dashboard" && (
          <Dashboard />
        )}
      </div>
    );
  }
}

export default App;
