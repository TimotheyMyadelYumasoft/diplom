import $api from "../http";
import {AxiosResponse} from 'axios'
import { IVacation } from "../types/vacation-type";

export default class VacationService {
    static async createVacation(user: string, mainDuration: string): Promise<AxiosResponse<IVacation[]>> {
        return $api.post<IVacation[]>(`/vacation/create`, {user: user, mainDuration: mainDuration})
    }
    static async fetchVacations(): Promise<AxiosResponse<IVacation[]>> {
        return $api.get<IVacation[]>(`/vacation`)
    }
    static async fetchVacationById(_id: string): Promise<AxiosResponse<IVacation>> {
        return $api.get<IVacation>(`/vacation/${_id}`)
    }
    static async fetchVacationByUser(user: string): Promise<AxiosResponse<IVacation>> {
        return $api.get<IVacation>(`/vacation/user/${user}`)
    }
    static async updateVacationMainDurationByUser(user: string, mainDuration: string): Promise<AxiosResponse<IVacation>> {
        return $api.post<IVacation>(`/vacation/mdupdate`, {user: user, mainDuration: mainDuration})
    }
    static async deleteVacationById(_id: string): Promise<AxiosResponse<IVacation>> {
        return $api.post<IVacation>(`/vacation/del`, {_id: _id})
    }
    static async updateAdditionalDuration(_id: string, additionalDuration: number): Promise<AxiosResponse<IVacation>> {
        return $api.post<IVacation>(`/vacation/vadditional`, {_id: _id, additionalDuration: additionalDuration})
    }

    static async updateUsedDuration(_id: string, usedDuration: number): Promise<AxiosResponse<IVacation>> {
        return $api.post<IVacation>(`/vacation/vused`, {_id: _id, usedDuration: usedDuration})
    }

}