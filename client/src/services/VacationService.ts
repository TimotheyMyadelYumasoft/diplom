import $api from "../http";
import {AxiosResponse} from 'axios'
import { IVacation } from "../types/vacation";

export default class VacationService {
    static async fetchVacations(): Promise<AxiosResponse<IVacation[]>> {
        return $api.get<IVacation[]>(`/vacation`)
    }
    static async fetchVacationById(_id: string): Promise<AxiosResponse<IVacation>> {
        return $api.get<IVacation>(`/vacation/${_id}`)
    }
    static async setVacation(startDate: string, endDate: string, type: string, employerId: string): Promise<AxiosResponse<IVacation>> {
        return $api.post<IVacation>(`/vacation/create`, {startDate: startDate, endDate: endDate, type: type, employerId: employerId})
    }

    static async approveVacation(_id: string, status: string): Promise<AxiosResponse<IVacation>> {
        return $api.post<IVacation>(`/vacation/approve`, {_id: _id, status: status})
    }

    static async deleteVacationById(_id: string): Promise<AxiosResponse<IVacation>> {
        return $api.post<IVacation>(`/vacation/del`, {_id: _id})
    }
}