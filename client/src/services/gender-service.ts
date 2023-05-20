import $api from "../http";
import {AxiosResponse} from 'axios'
import { IGender } from "../types/gender-type";

export default class GenderService {
    static async createGender(name: string): Promise<AxiosResponse<IGender[]>> {
        return $api.post<IGender[]>(`/gender/create`, {name: name})
    }
    static async fetchGenders(): Promise<AxiosResponse<IGender[]>> {
        return $api.get<IGender[]>(`/gender`)
    }
    static async fetchGenderById(_id: string): Promise<AxiosResponse<IGender>> {
        return $api.get<IGender>(`/gender/${_id}`)
    }
    static async deleteGenderById(_id: string): Promise<AxiosResponse<IGender>> {
        return $api.post<IGender>(`/gender/del`, {_id: _id})
    }
}