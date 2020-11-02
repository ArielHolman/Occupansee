import React from "react";
import { Switch, Route } from "react-router";
import Navigationbar from "./components/NavigationBar";
import Home from "./components/Home"

const Router = () => {
  return (
    <Switch>
      <Route exact path="/dashboard" component={Navigationbar} />
      <Route exact path="/" component={Navigationbar} />
    </Switch>
  );
};

export default Router;