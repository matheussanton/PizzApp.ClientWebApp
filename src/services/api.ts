import axios from 'axios';

const api = axios.create({
    baseURL: process.env.SERVICE_BASEURL
    // baseURL: 'http://192.168.0.12:3333'
})

export { api };
