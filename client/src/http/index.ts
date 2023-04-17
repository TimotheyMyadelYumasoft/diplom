import axios from 'axios';
import { AuthResponse } from '../types/auth';

const $api = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:5000/api'
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

$api.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config;
    if(error.response.status == 401) {
        try{
            const response = await axios.get<AuthResponse>(`http://localhost:5000/api/user/refresh`, {withCredentials: true});
            localStorage.setItem('token', response.data.accessToken);
            return $api.request(originalRequest);
        } catch (e) {
            console.log('Не авторизован');
        }
    }
})

export default $api;