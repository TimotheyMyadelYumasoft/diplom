import $api from "../http";
import {AxiosResponse} from 'axios'
import { IUser } from "../types/user-type";

export default class UserService {
    static async createUser(email: string, password: string, role: string, statusCandidate: string, birthDay: string, hiredDate: string): Promise<AxiosResponse<IUser[]>> {
        return $api.post<IUser[]>(`/user/registration`, {email: email, password: password, role: role, statusCandidate: statusCandidate, birthDay: birthDay, hiredDate: hiredDate}, {withCredentials: true})
    }
    static async updateProfileImage(_formData: any): Promise<AxiosResponse<IUser>>  {
        return $api.post<IUser>(`/user/edit_image`, _formData)
    }
    static async fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        return $api.get<IUser[]>(`/user`)
    }
    static async fetchUserById(_id: string): Promise<AxiosResponse<IUser>> {
        return $api.get<IUser>(`/user/${_id}`)
    }
    static async updateUser(_id: string, position: string, location: string, email: string, firstname: string, secondname: string, gender: string, phoneNumber: string): Promise<AxiosResponse<IUser>> {
        return $api.post<IUser>(`/user/edit_user`, {
            _id: _id,
            position: position,
            location: location,
            email: email,
            firstname: firstname,
            secondname: secondname,
            gender: gender,
            phoneNumber: phoneNumber
        })
    }
    static async deleteUserById(_id: string) : Promise<AxiosResponse<IUser>> {
        return $api.post<IUser>(`/user/del`, {_id: _id})
    }
}