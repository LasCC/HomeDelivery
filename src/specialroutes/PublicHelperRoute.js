import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { LoginContext } from "../contexts/LoginContext";
import ROUTE from "../Routes";

const UnProtectedRoute = ({ path, component: Component, render, ...rest }) => {
    const { checkAuth } = useContext(LoginContext);
    return (
        <Route
            {...rest}
            render={props => {
                if (!checkAuth())
                    return Component ? <Component {...props} /> : render(props);

                return (
                    <Redirect
                        to={{ pathname: ROUTE.DASHBOARD_HELPER, state: { from: props.location } }}
                    />
                );
            }}
        />
    );
};
export default UnProtectedRoute;
