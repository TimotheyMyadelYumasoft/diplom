import $api from "../http";
import {AxiosResponse} from 'axios'
import { AuthResponse } from "../types/auth";

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>(`/user/login`, {email, password})
    }


    static async logout(): Promise<void> {
        return $api.post(`/user/logout`)
    }

}