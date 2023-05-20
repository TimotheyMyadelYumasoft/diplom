import $api from "../http";
import {AxiosResponse} from 'axios'
import { IMainVacationDuration } from "../types/mainVacationDuration-type";

export default class MainVacationDurationService {
    static async createMainVacationDuration(name: string, daysCount: number): Promise<AxiosResponse<IMainVacationDuration[]>> {
        return $api.post<IMainVacationDuration[]>(`/mvduration/create`, {name: name, daysCount: daysCount})
    }
    static async fetchMainVacationDurations(): Promise<AxiosResponse<IMainVacationDuration[]>> {
        return $api.get<IMainVacationDuration[]>(`/mvduration`)
    }
    static async fetchMainVacationDurationById(_id: string): Promise<AxiosResponse<IMainVacationDuration>> {
        return $api.get<IMainVacationDuration>(`/mvduration/${_id}`)
    }
    static async deleteMainVacationDurationById(_id: string): Promise<AxiosResponse<IMainVacationDuration>> {
        return $api.post<IMainVacationDuration>(`/mvduration/del`, {_id: _id})
    }
}