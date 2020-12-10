import React from "react";
import Navigation from "../components/Navigation/Navigation";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "../Router";
import BusinessContextProvider from "../components/BusinessContextProvider/BusinessContextProvider";
import Footer from "../components/Footer/Footer";
import BusinessOwnerContextProvider from "../components/BusinessOwnerContextProvider/BusinessOwnerContextProvider";

const App = () => {
  return (
    <BusinessContextProvider>
      <BusinessOwnerContextProvider>
        <BrowserRouter>
          <Navigation />
          <Router />
          <Footer />
        </BrowserRouter>
      </BusinessOwnerContextProvider>
    </BusinessContextProvider>
  );
};

export default App;
