import React, { Component } from "react";
import Navigation from "../components/Navigation/Navigation";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "../Router";
import BusinessContextProvider from "../components/BusinessContextProvider/BusinessContextProvider"
import Footer from '../components/Footer/Footer';

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     route: "home",
  //     isSignedIn: false,
  //   };
  // }

  render() {
    // const { isSignedIn } = this.state;
    return (
      <BusinessContextProvider>
        <BrowserRouter className="tc app-container">
          <Navigation />
          <Router />
          <Footer />
        </BrowserRouter>
      </BusinessContextProvider>
    );
  }
}

export default App;
