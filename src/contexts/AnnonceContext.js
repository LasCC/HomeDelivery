import React, { createContext, useState } from "react";

import { withRouter } from "react-router-dom";
import ROUTE from "../Routes";

import backapi from "../api/backapi"

export const AnnonceContext = createContext();
console.success = () => {
    console.log('%c%s',
        'color: green; background: yellow; font-size: 24px;', 'Success!')
}


const AnnonceProvider = (props) => {



    const [values, setValues] = useState({
        todos: [],
        annexe: "",
        price_max: "",
        payment: "",
    })
    const [steps, setSteps] = useState(0)

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

            console.success()
            console.log(res)
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
                handleAnnonceSubmit,
                values,
                setValues,
                steps,
                setSteps
            }}

        >
            {props.children}
        </AnnonceContext.Provider>
    )
}

export default withRouter(AnnonceProvider);
