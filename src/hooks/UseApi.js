// import axios from "axios";

// const api = axios.create({
//     baseURL: process.env.URL_API
// });

export const UseApi = () => ({
    validateToken: async function (token){
        return {user: { id: 0, name: "José", email: "José@gmail.com", password: "123"}}
        // const response = await api.post('/validate', {token});
        // return response.data;
    },
    signin: async function (email, password){
        return {user: { id: 0, name: "José", email: "José@gmail.com", password: "123"},token: '123456'}
        // const response = await api.post('/signin', {email, password});
        // return response.data;
    },
    logout: async () => {
        return {status: true}
        // const response = await api.post('/logout');
        // return response.data;
    }

});
