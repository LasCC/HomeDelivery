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
        if (checkAuth() === "client")
          return Component ? <Component {...props} /> : render(props);
        else if (checkAuth() === "helper")
          return (
            <Redirect
              to={{
                pathname: ROUTE.DASHBOARD_HELPER,
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
 * Redirige un utilisateur public ou helper qui effectue une tentative d'accés à des routes pour CLIENT
 */
