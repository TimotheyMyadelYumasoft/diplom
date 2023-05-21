import $api from "../http";
import {AxiosResponse} from 'axios'
import { IStatusDayOff } from "../types/statusDayOff-type";

export default class StatusDayOffService {
    static async fetchStatusDayOffs(): Promise<AxiosResponse<IStatusDayOff[]>> {
        return $api.get<IStatusDayOff[]>(`/dostatus`)
    }
    static async fetchStatusDayOffById(_id: string): Promise<AxiosResponse<IStatusDayOff>> {
        return $api.get<IStatusDayOff>(`/dostatus/${_id}`)
    }
}