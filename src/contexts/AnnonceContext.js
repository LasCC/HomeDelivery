import React, { createContext, useState } from "react";
import jwtdecode from "jwt-decode";
import http from "../services/httpService";
import { withRouter } from "react-router-dom";
import ROUTE from "../Routes";
import { values } from "d3";
import backapi from "../api/backapi"

export const AnnonceContext = createContext();

const AnnonceProvider = (props) => {


    const handleAnnonceSubmit = async (obj) => {
        const body = {
            courses: obj.todos,
            info_annexes: obj.annexe,
            payment_method: obj.payment,
            max_price: obj.price_max,

        }

        try {
            const res = await backapi.post('/annonce/create', {
                data: body
            })
            if (res.status === 200)
                return props.history.push(ROUTE.SHIPMENT_ANNONCE)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <AnnonceContext.Provider
            value={{
                test: "yes",
                handleAnnonceSubmit
            }}

        >
            {props.children}
        </AnnonceContext.Provider>
    )
}

export default withRouter(AnnonceProvider);
