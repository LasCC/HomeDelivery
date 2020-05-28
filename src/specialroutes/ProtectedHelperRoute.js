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
        if (checkAuth() === "helper")
          return Component ? <Component {...props} /> : render(props);
        else if (checkAuth() === "client")
          return (
            <Redirect
              to={{
                pathname: ROUTE.DASHBOARD,
                state: { from: props.location },
              }}
            />
          );
        else
          return (
            <Redirect
              to={{ pathname: ROUTE.LOGIN, state: { from: props.location } }}
            />
          );
      }}
    />
  );
};

/**
 * Redirige un utilisateur public ou client qui effectue une tentative d'accés a des routes pour HELPER
 */
