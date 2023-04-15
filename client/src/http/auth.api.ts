import axios from 'axios';

const $api = axios.create({
    withCredentials: true,
    baseURL: process.env.API_URL
})

$api.interceptors.request.use((config) => {
    console.log('interceptor')
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

export default $api;