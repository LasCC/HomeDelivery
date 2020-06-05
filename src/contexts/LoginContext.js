import React, { createContext, useState } from "react";
import jwtdecode from "jwt-decode";
import http from "../services/httpService";
import { withRouter } from "react-router-dom";
import ROUTE from "../Routes";
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
  const endpoint = "http://3.90.31.250:8080";

  const handleLogin = async (data) => {
    console.log("login request ....", data);

    let res;
    try {
      //console.log("login try ");
      res = await http.post(endpoint + "/auth/login", data);
      setHttpError({
        serverError: false,
        clientError: false,
      });
      //console.log(res);
    } catch (ex) {
      console.dir(ex);
      const expectedError = null;
      if (ex.response !== undefined) {
        console.log(ex.response);
        const expectedError =
          ex.response.status >= 400 && ex.response.status <= 500;
        console.dir(expectedError);
        setHttpError({
          clientError: expectedError,
          status: ex.response.status,
          serverError: !expectedError,
        });
      } else {
        setHttpError({
          serverError: !expectedError,
          clientError: expectedError,
        });
      }
      setTimeout(() => console.log(httpError), 5000);
      return;
    }

    const { token } = res.data;
    console.log(res);
    try {
      const tokendata = await jwtdecode(token);
      //console.log(tokendata);
      localStorage.setItem("token", token);
      await localStorage.setItem(
        "account_to_register",
        JSON.stringify(tokendata)
      );
      await setLoginState({
        name: tokendata.firstName,
        lastname: tokendata.lastName,
        email: tokendata.email,
        token: token,
        hasRegistred: true,
        isLogged: true,
        isActive: tokendata.isActive,
      });
      setHttpError({ serverError: false, clientError: false });
      //console.log("######firstime logged : ", tokendata.firstLogged);
      if (!tokendata.acc_isActive)
        return props.history.push(ROUTE.CONFIRM_REGISTRATION);
      if (tokendata.acc_type === "client")
        return props.history.push(ROUTE.DASHBOARD);
      else if (tokendata.acc_type === "helper")
        return props.history.push(ROUTE.DASHBOARD_HELPER);
    } catch (ex) {
      console.log("invalid Token", ex);
    }
  };
  const handleClientRegistration = async (data) => {
    console.log("register request ...", data);

    let res = null;
    try {
      res = await http.post(endpoint + "/auth/register", data);
      console.log(res);
      if (res.status === 201) props.history.push(ROUTE.CONFIRM_REGISTRATION);
    } catch (ex) {
      console.dir(ex);
      const expectedError = null;
      if (ex.response !== undefined) {
        console.log(ex.response);
        const expectedError =
          ex.response.status >= 400 && ex.response.status <= 500;
        console.dir(expectedError);
        setHttpError({
          clientError: expectedError,
          serverError: !expectedError,
        });
      } else {
        setHttpError({
          serverError: !expectedError,
          clientError: expectedError,
        });
      }
      setTimeout(() => console.log(httpError), 5000);
      return;
    }
  };
  const handleHelperRegistration = async (data) => {
    console.log("register request ...", data);

    let res = null;
    try {
      res = await http.post(endpoint + "/auth/register", data);
      console.log(res);
      if (res.status === 201)
        return props.history.push(ROUTE.CONFIRM_REGISTRATION);
    } catch (ex) {
      if (ex.response.status === 409) props.history.push(ROUTE.LOGIN);
      console.log(ex.response);
      const expectedError =
        ex.response.status >= 400 && ex.response.status <= 500;
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
  };
  const mailChecking = async (data) => {
    console.log("mail verification + login request ", data);

    let res;
    try {
      res = await http.post(endpoint + "/auth/verifymail", data);
      if (res.status === 200) return props.history.push(ROUTE.LOGIN);
      setHttpError({ serverError: false, clientError: false });
    } catch (ex) {
      console.dir(ex);
      const expectedError = null;
      if (ex.response !== undefined) {
        console.log(ex.response);
        const expectedError =
          ex.response.status >= 400 && ex.response.status <= 500;
        console.dir(expectedError);

        setHttpError({
          clientError: expectedError,
          serverError: !expectedError,
          status: ex.response.status,
        });
        if (ex.response.status === 409) return props.history.push(ROUTE.LOGIN);
      } else {
        // erreur serveur
        setHttpError({
          serverError: !expectedError,
          clientError: expectedError,
          status: ex.response.status,
        });
      }
      setTimeout(() => console.log(httpError), 5000);
      return;
    }
  };
  const resendMail = async () => {
    //console.log("Envoi de mail....");
    const res = await http.post(endpoint + "/auth/mailresent", {
      email: JSON.parse(localStorage.getItem("account_to_register")).email,
    });
    //console.log(res);
  };
  const handleLogout = () => {
    //console.log("logged out .....");
    localStorage.removeItem("token");
    localStorage.removeItem("account_to_register");
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
    props.history.push(ROUTE.HOME);
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
      const { exp, acc_isActive, acc_type } = jwtdecode(token);
      if (!acc_isActive) return false;

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
      return acc_type;
    } catch (ex) {
      console.log("exx--- ", ex);
      return false;
    }
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
