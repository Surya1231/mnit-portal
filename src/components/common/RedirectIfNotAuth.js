import React from "react";
import { Redirect, Route } from "react-router";
import { loginWarn } from "./notification";

const RedirectIfNotAuth = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        rest.user !== null ? (
          <Component {...props} />
        ) : loginWarn() ? (
          <Redirect to="/login" />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default RedirectIfNotAuth;
