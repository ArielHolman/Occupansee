import React from "react";
import { Switch, Route } from "react-router";
import Home from "./components/Home/Home";
import Signin from "./components/Signin/Signin";
import UserRegistration from "./components/UserRegistration/UserRegistration";
import Dashboard from "./components/Dashboard/Dashboard";
import BusinessRegistration from "./components/BusinessRegistration/BusinessRegistration";
import BusinessSettings from "./components/BusinessSettings/BusinessSettings";
import EditBusinessInfo from "./components/EditBusinessInfo/EditBusinessInfo";
import BusinessProfile from "./components/BusinessProfile/BusinessProfile";
import BusinessTracker from "./components/BusinessTracker/BusinessTracker";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signin" component={Signin} />
      <Route path="/register-user" component={UserRegistration} />
      <Route path="/register-business" component={BusinessRegistration} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/settings" component={BusinessSettings} />
      <Route path="/edit" component={EditBusinessInfo} />
      <Route path="/profile" component={BusinessProfile} />
      <Route path="/tracker" component={BusinessTracker} />
    </Switch>
  );
};

export default Router;
