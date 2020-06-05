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
    const [myannonces, setMyannonce] = useState({ loaded: false });

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
                return props.history.push(ROUTE.DASHBOARD_HISTORY)
        } catch (error) {
            console.failure()
            console.log(error)
        }

    }

    const fetchAnnonce = async () => {
        let res;

        try {
            res = await backapi.get('/annonce/fetch')
            const { annonces, length } = res.data
            await setMyannonce({ annonces, length, loaded: true })
            console.log((annonces))
            return res
        } catch (error) {
            console.failure()
        }
        return res;
    }

    const fetchActiveAnnonce = async () => {
        try {

            const res = await backapi.get('/annonce/fetchAll')
            console.log(res.data)
            setMyannonce(res)
            return res
        } catch (error) {
            console.failure()
        }

        return
    }
    const resolveAnnonce = async annonce_id => {
        try {
            const res = await backapi.post(`/annonce/resolve`, {
                annonce_id
            })
            console.log(res)
        } catch (error) {

            console.log({ error })
            return console.failure()
        }
    }
    // resolveAnnonce("5ed82d56b3bac6050996c244x")


    return (
        <AnnonceContext.Provider
            value={{
                handleAnnonceSubmit,
                values,
                setValues,
                steps,
                setSteps,
                fetchAnnonce,
                fetchActiveAnnonce,
                myannonces,
                setMyannonce
            }}

        >
            {props.children}
        </AnnonceContext.Provider>
    )
}

export default withRouter(AnnonceProvider);
