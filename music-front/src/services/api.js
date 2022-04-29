// import axios from "axios";

// export const api = axios.create({
//     baseURL: 'http://localhost:3000/api/v1'
    
// })

import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:3000/',
})

export const createSession = async(username,password) => {
    return api.post("/login", { username, password});
}