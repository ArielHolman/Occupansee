import React from "react";
import { Switch, Route } from "react-router";
import Home from "./components/Home/Home";
import Signin from "./components/Signin/Signin";
import UserRegistration from "./components/UserRegistration/UserRegistration";
import Dashboard from "./components/Dashboard/Dashboard";
import BusinessRegistration from "./components/BusinessRegistration/BusinessRegistration";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signin" component={Signin} />
      <Route path="/register-user" component={UserRegistration} />
      <Route path="/register-business" component={BusinessRegistration} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

export default Router;
