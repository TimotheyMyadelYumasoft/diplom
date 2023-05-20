import $api from "../http";
import {AxiosResponse} from 'axios'
import { IDayOff } from "../types/dayOff-type";

export default class DayOffService {
    static async createDayOff(vacation: string, type: string, status: string, endDate: string, startDate: string): Promise<AxiosResponse<IDayOff[]>> {
        return $api.post<IDayOff[]>(`/dayoff/create`, {vacation: vacation, type: type, status: status, startDate: startDate, endDate: endDate})
    }
    static async approveDayOff(_id: string, status: string): Promise<AxiosResponse<IDayOff>> {
        return $api.post<IDayOff>(`/dayoff/approve`, {_id: _id, status: status})
    }
    static async fetchDayOffs(): Promise<AxiosResponse<IDayOff[]>> {
        return $api.get<IDayOff[]>(`/dayoff`)
    }
    static async fetchDayOffById(_id: string): Promise<AxiosResponse<IDayOff>> {
        return $api.get<IDayOff>(`/dayoff/${_id}`)
    }
    static async deleteDayOffById(_id: string): Promise<AxiosResponse<IDayOff>> {
        return $api.post<IDayOff>(`/dayoff/del`, {_id: _id})
    }
}