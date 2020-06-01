import axios from "axios"

const token = localStorage.getItem('token')

export default axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        "x-auth-token": token,
    }
})