import React, { Component } from "react";
import Navigation from "../components/Navigation/Navigation";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "../Router";

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: "home",
      isSignedIn: false,
    };
  }

  render() {
    const { isSignedIn } = this.state;
    return (
      <BrowserRouter className="tc app-container">
        <Navigation isSignedIn={isSignedIn} />
        <Router />
      </BrowserRouter>
    );
  }
}

export default App;
