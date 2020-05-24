import React, { createContext, useState } from "react";
import jwtdecode from "jwt-decode";
import http from "../services/httpService";
import { withRouter } from "react-router-dom";


export const LoginContext = createContext();

const LoginProvider = props => {
    const [loginState, setLoginState] = useState({
        lastname: "",
        email: "",
        token: "",
        hasRegistred: false,
        isLogged: false,
        isActive: false
    });

    const [httpError, setHttpError] = useState({
        clientError: false,
        serverError: false
    });
    const endpoint = "";

    const handleLogin = async data => {
        console.log("login request ....", data);


        let res;
        try {
            //console.log("login try ");
            res = await http.post(endpoint + "/auth/login", data);
            //console.log(res);
        } catch (ex) {

            const expectedError = ex.response.status >= 400 && ex.response.status <= 500
            console.dir(expectedError);

            setHttpError({
                serverError: !expectedError,
                clientError: expectedError
            });
            setTimeout(() => console.log(httpError), 5000);
            return;
        }

        const { token } = res.data;
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
                isActive: tokendata.isActive
            });
            setHttpError({ serverError: false, clientError: false });
            //console.log("######firsttime logged : ", tokendata.firstLogged);
            if (!tokendata.isActive) return props.history.push("/confirmation");
            if (tokendata.firstLogged)
                return window.location.replace("/renseignement");
            return props.history.push("/dashboard");
        } catch (ex) {
            //console.log("invalid Token", ex);
            throw ex;
        }
    };
    const handleRegistration = async data => {
        //console.log("register request ...", data);
        let res;
        try {
            res = await http.post(endpoint + "/auth/register", data);
        } catch (ex) {
            //console.log(ex.response.status);
            const expectedError =
                ex.response && ex.response.status >= 400 && ex.response.status < 500;
            return setHttpError({
                status: ex.response.status
            });
        }

        setLoginState({
            name: data.firstName,
            lastname: data.lastName,
            email: data.email,
            token: "",
            numero_dossier: "",
            hasRegistred: true,
            isLogged: false,
            isActive: false
        });
        setHttpError({ serverError: false, clientError: false });
        return props.history.push("/confirmation");
    };
    const mailChecking = async data => {
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
                clientError: !expectedError
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
            email: loginState.email
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
            isActive: false
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
                handleRegistration,
                mailChecking,
                resendMail,
                httpError,
                endpoint
            }}
        >
            {props.children}
        </LoginContext.Provider>
    );
};

export default withRouter(LoginProvider);