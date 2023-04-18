import $api from "../http";
import {AxiosResponse} from 'axios'
import { IVacation } from "../types/vacation";

export default class VacationService {
    static async fetchVacations(): Promise<AxiosResponse<IVacation[]>> {
        return $api.get<IVacation[]>(`/vacation/`)
    }
    static async fetchProjectById(_id: string): Promise<AxiosResponse<IVacation[]>> {
        return $api.get<IVacation[]>(`/vacation/${_id}`)
    }
}