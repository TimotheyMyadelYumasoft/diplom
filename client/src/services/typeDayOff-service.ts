import $api from "../http";
import {AxiosResponse} from 'axios'
import { ITypeDayOff } from "../types/typeDayOff-type";

export default class TypeDayOffService {
    static async fetchTypeDayOffs(): Promise<AxiosResponse<ITypeDayOff[]>> {
        return $api.get<ITypeDayOff[]>(`/dotype`)
    }
    static async fetchTypeDayOffById(_id: string): Promise<AxiosResponse<ITypeDayOff>> {
        return $api.get<ITypeDayOff>(`/dotype/${_id}`)
    }
}