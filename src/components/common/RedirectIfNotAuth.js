import React from "react";
import { Redirect, Route } from "react-router";

const RedirectIfNotAuth = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        rest.user !== null ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default RedirectIfNotAuth;
