import $api from "../http";
import {AxiosResponse} from 'axios'
import { AuthResponse } from "../types/auth";
import { IUser } from "../types/user";

export default class UserService {
    static async fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        return $api.get<IUser[]>(`/user/users`)
    }
    static async fetchUserById(_id: string): Promise<AxiosResponse<IUser>> {
        console.log(typeof _id)
        return $api.get<IUser>(`/user/${_id}`)
    }
}