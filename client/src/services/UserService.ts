import $api from "../http";
import {AxiosResponse} from 'axios'
import { AuthResponse } from "../types/auth";
import { IUser } from "../types/user";

export default class UserService {
    static async fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        return $api.get<IUser[]>(`/user`)
    }
    static async fetchUserById(_id: string): Promise<AxiosResponse<IUser>> {
        console.log(typeof _id)
        return $api.get<IUser>(`/user/${_id}`)
    }
    static async updateUser(_id: string, email: string, firstname: string, secondname: string, gender: string, phonenumber: string, department: string): Promise<AxiosResponse<IUser>> {
        return $api.post<IUser>(`/user/edit_user`, {_id: _id, email: email, firstname: firstname, secondname: secondname, gender: gender, phoneNumber: phonenumber,  departament: department})
    }
}