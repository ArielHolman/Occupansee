import React, { Component } from "react";
import Navigation from "../components/Navigation/Navigation";
import Home from "../components/Home/Home";
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="tc app-container">
        <Navigation />
        <Home />
      </div>
    );
  }
}

export default App;
