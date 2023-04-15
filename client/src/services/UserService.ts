import $api from "../http";
import {AxiosResponse} from 'axios'
import { AuthResponse } from "../types/auth";
import { IUser } from "../types/user";

export default class UserService {
    static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        return $api.get<IUser[]>('/user/users')
    }
}