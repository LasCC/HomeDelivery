import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { LoginContext } from "../contexts/LoginContext";
import ROUTE from "../Routes";

export default ({ path, component: Component, render, ...rest }) => {
  const { checkAuth } = useContext(LoginContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (checkAuth() === "helper") {
          return (
            <Redirect
              to={{
                pathname: ROUTE.DASHBOARD_HELPER,
                state: { from: props.location },
              }}
            />
          );
        } else if (checkAuth() === "client") {
          return (
            <Redirect
              to={{
                pathname: ROUTE.DASHBOARD,
                state: { from: props.location },
              }}
            />
          );
        }
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

/**
 * Redirige un utilisateur connecté vers son dashboard respectif en cas de tentative d'accés à des pages public
 */
