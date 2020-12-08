import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router";
import Home from "./components/Home/Home";
import Signin from "./components/Signin/Signin";
import BusinessOwnerRegistration from "./components/BusinessOwnerRegistration/BusinessOwnerRegistration";
import Dashboard from "./components/Dashboard/Dashboard";
import BusinessRegistration from "./components/BusinessRegistration/BusinessRegistration";
import BusinessSettings from "./components/BusinessSettings/BusinessSettings";
import EditBusinessInfo from "./components/EditBusinessInfo/EditBusinessInfo";
import BusinessProfile from "./components/BusinessProfile/BusinessProfile";
import BusinessTracker from "./components/BusinessTracker/BusinessTracker";
import cookie from "cookie";

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth()
        ? <Component {...props} />
        : <Redirect to="/signin" />
      }
    />
  );
};

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signin" component={Signin} />
      <Route
        path="/register-business-owner"
        component={BusinessOwnerRegistration}
      />
      <Route path="/register-business" component={BusinessRegistration} />
      <Route path="/dashboard" component={Dashboard} />
      {/* <ProtectedRoute path="/dashboard" component={Dashboard} /> */}
      <Route path="/settings" component={BusinessSettings} />
      {/* <ProtectedRoute path="/settings" component={BusinessSettings} /> */}
      <Route path="/edit" component={EditBusinessInfo} />
      {/* <ProtectedRoute path="/edit" component={EditBusinessInfo} /> */}
      <Route path="/profile" component={BusinessProfile} />
      <Route path="/tracker" component={BusinessTracker} />
      {/* <ProtectedRoute path="/tracker" component={BusinessTracker} /> */}
    </Switch>
  );
};

export default Router;
