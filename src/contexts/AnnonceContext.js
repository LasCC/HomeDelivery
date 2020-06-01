import React, { createContext, useState } from "react";

import { withRouter } from "react-router-dom";
import ROUTE from "../Routes";

import backapi from "../api/backapi"

export const AnnonceContext = createContext();
console.success = () => {
    console.log('%c%s',
        'color: green; background: yellow; font-size: 24px;', 'Success!')
}
console.failure = () => {
    console.log('%c%s',
        'color: black; background: red; font-size: 24px;', 'Fail!')
}

const AnnonceProvider = (props) => {



    const [values, setValues] = useState({
        todos: [],
        annexe: "",
        price_max: "",
        payment: "",
    })
    const [steps, setSteps] = useState(0)

    const handleAnnonceSubmit = async () => {
        const body = {
            courses: values.todos,
            info_annexes: values.annexe,
            payment_method: values.payment,
            max_price: values.price_max,

        }

        try {
            const res = await backapi.post('/annonce/create', {
                data: body
            })

            console.success()
            console.log(res)
            setSteps(2)

            console.log({ steps })
            if (res.status === 200)
                return props.history.push(ROUTE.SHIPMENT_ANNONCE)
        } catch (error) {
            console.failure()
            console.log(error)
        }

    }

    const fetchAnnonce = async () => {

        try {
            const res = await backapi.get('/annonce/fetch')
        } catch (error) {
            console.failure("lol mdr")
        }
        return
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
