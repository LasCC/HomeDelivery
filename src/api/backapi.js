import axios from "axios"

const token = localStorage.getItem('token')

export default axios.create({
    baseURL: 'http://3.90.31.250:8080',
    headers: {
        "x-auth-token": token,
    }
})