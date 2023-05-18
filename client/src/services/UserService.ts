import $api from "../http";
import {AxiosResponse} from 'axios'
import { IUser } from "../types/user";

export default class UserService {
    static async createUser(email: string, password: string, role: string): Promise<AxiosResponse<IUser[]>> {
        return $api.post<IUser[]>(`/user/registration`, {email: email, password: password, role: role}, {withCredentials: true})
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
    static async updateUser(_id: string, email: string, firstname: string, secondname: string, gender: string, phonenumber: string, department: string, location: string): Promise<AxiosResponse<IUser>> {
        return $api.post<IUser>(`/user/edit_user`, {_id: _id, email: email, firstname: firstname, secondname: secondname, gender: gender, phoneNumber: phonenumber,  departament: department, location: location})
    }
    static async deleteUserById(_id: string) : Promise<AxiosResponse<IUser>> {
        return $api.post<IUser>(`/user/del`, {_id: _id})
    }
    static async editBirthdayUserById(_id: string, birthDay: string): Promise<AxiosResponse<IUser>> {
        console.log(birthDay)
        return $api.post<IUser>(`/user/edit_birthday`, {_id: _id, birthday: birthDay})
    }

}