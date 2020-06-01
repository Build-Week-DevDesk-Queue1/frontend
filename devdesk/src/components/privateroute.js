import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        let userInfo = JSON.parse(localStorage.getItem("user"));
        // check user roles and render right component for user
        if (userInfo) {
          if (
            userInfo.role === "helper" &&
            rest.path === "/student-dashboard"
          ) {
            return <Redirect to="/helper-dashboard" />;
          }
          if (
            userInfo.role === "student" &&
            rest.path === "/helper-dashboard"
          ) {
            return <Redirect to="/student-dashboard" />;
          }
        }

        // makes sure user is logged in
        if (localStorage.getItem("token")) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
}

export default PrivateRoute;
