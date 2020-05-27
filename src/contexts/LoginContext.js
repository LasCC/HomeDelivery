import React, { createContext, useState } from "react";
import jwtdecode from "jwt-decode";
import http from "../services/httpService";
import { withRouter } from "react-router-dom";
import ROUTE from "../Routes"
export const LoginContext = createContext();

const LoginProvider = (props) => {
    const [loginState, setLoginState] = useState({
        lastname: "",
        email: "",
        token: "",
        hasRegistred: false,
        isLogged: false,
        isActive: false,
    });

    const [httpError, setHttpError] = useState({
        clientError: false,
        serverError: false,
    });
    const endpoint = "http://localhost:8080";

    const handleLogin = async (data) => {
        console.log("login request ....", data);

        let res;
        try {
            //console.log("login try ");
            res = await http.post(endpoint + "/auth/login", data);
            //console.log(res);
        } catch (ex) {
            const expectedError =
                ex.response.status >= 400 && ex.response.status <= 500;
            console.dir(expectedError);

            setHttpError({
                serverError: !expectedError,
                clientError: expectedError,
            });
            setTimeout(() => console.log(httpError), 5000);
            return;
        }

        const { token } = res.data;
        console.log(res)
        try {
            const tokendata = await jwtdecode(token);
            //console.log(tokendata);
            localStorage.setItem("token", token);
            await setLoginState({
                name: tokendata.firstName,
                lastname: tokendata.lastName,
                email: tokendata.email,
                token: token,
                numero_dossier: tokendata.candidatureID,
                hasRegistred: true,
                isLogged: true,
                isActive: tokendata.isActive,
            });
            setHttpError({ serverError: false, clientError: false });
            //console.log("######firstime logged : ", tokendata.firstLogged);
            if (!tokendata.acc_isActive) return props.history.push(ROUTE.CONFIRM_REGISTRATION);
            if (tokendata.acc_type === "client") return props.history.push(ROUTE.DASHBOARD)
            else if (tokendata.acc_type === "helper") return props.history.push(ROUTE.DASHBOARD_HELPER)

        } catch (ex) {
            //console.log("invalid Token", ex);
            throw ex;
        }
    };
    const handleClientRegistration = async (data) => {
        console.log("register request ...", data);
        // TODO si user deja enregistré go login 
        let res;
        try {
            res = await http.post(endpoint + "/auth/register", data);
            console.log(res)
            if (res.status === 201) props.history.push(ROUTE.CONFIRM_REGISTRATION)

        } catch (ex) {
            if (ex.response.status === 409) props.history.push(ROUTE.LOGIN)
            console.log(ex.response);
            const expectedError = ex.response.status >= 400 && ex.response.status <= 500;
            return setHttpError({
                serverError: !expectedError,
                clientError: expectedError,
                status: ex.response.status,
            });
        }
    }
    const handleHelperRegistration = async (data) => {
        //console.log("register request ...", data);
        let res;
        try {
            res = await http.post(endpoint + "/auth/register", data);
        } catch (ex) {
            //console.log(ex.response.status);
            const expectedError = ex.response.status >= 400 && ex.response.status <= 500;
            return setHttpError({

                serverError: !expectedError,
                clientError: expectedError,

                status: ex.response.status,
            });
        }

        setLoginState({
            name: data.firstName,
            lastname: data.lastName,
            email: data.email,
            token: "",
            hasRegistred: true,
            isLogged: false,
            isActive: false,
        });
        setHttpError({ serverError: false, clientError: false });
        return props.history.push("/confirmation");
    };
    const mailChecking = async (data) => {
        //console.log("mail verification + login request ", data);
        let res;
        try {
            res = await http.post(endpoint + "/auth/verifymail", data);
        } catch (ex) {
            //console.log(res);
            const expectedError =
                ex.response && ex.response.status >= 400 && ex.response.status < 500;
            return setHttpError({
                serverError: expectedError,
                clientError: !expectedError,
            });
        }

        try {
            setHttpError({ serverError: false, clientError: false });
            return props.history.push("/connexion");
        } catch (ex) {
            // toast.error("Error Notification !");
            //console.log("invalid Token", ex);
            throw ex;
        }

        // props.history.push("/dashboard");
    };
    const resendMail = async () => {
        //console.log("Envoi de mail....");
        const res = await http.post(endpoint + "/auth/mailresent", {
            email: loginState.email,
        });
        //console.log(res);
    };
    const handleLogout = () => {
        //console.log("logged out .....");
        localStorage.removeItem("token");
        setLoginState({
            name: "",
            lastname: "",
            email: "",
            numero_dossier: "",
            token: "",
            hasRegistred: false,
            isLogged: false,
            isActive: false,
        });
        window.location.replace("/");
    };
    const checkAuth = () => {
        //console.log("checking...");

        const token = localStorage.getItem("token");
        // in proddatadatadata
        if (!token) {
            return false;
        }

        // in TEST
        // return loginState.isLogged;

        try {
            const { exp, isActive } = jwtdecode(token);
            if (!isActive) return false;
            const now = new Date().getTime() / 1000;
            const dateExp = new Date(exp * 1000);
            const dateNow = new Date(now * 1000);

            const dayRelativeDifference =
                dateExp.getHours() * 60 +
                dateExp.getMinutes() -
                dateNow.getHours() * 60 -
                dateNow.getMinutes();
            //console.log("isexp", exp < now, dayRelativeDifference, "mn");
            if (exp < now) {
                //console.log("TOKEN expired !");
                handleLogout();
                return false;
            }
        } catch (ex) {
            //console.log(ex);
            return false;
        }

        return true;
    };

    return (
        <LoginContext.Provider
            value={{
                loginState,
                handleLogin,
                checkAuth,
                handleLogout,
                handleClientRegistration,
                handleHelperRegistration,
                mailChecking,
                resendMail,
                httpError,
                endpoint,
            }}
        >
            {props.children}
        </LoginContext.Provider>
    );
};

export default withRouter(LoginProvider);
