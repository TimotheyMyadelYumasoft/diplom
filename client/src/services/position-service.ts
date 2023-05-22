import $api from "../http";
import {AxiosResponse} from 'axios'
import { IPosition } from "../types/position-type";

export default class PositionService {
    static async createPosition(name: string): Promise<AxiosResponse<IPosition[]>> {
        return $api.post<IPosition[]>(`/position/create`, {name: name})
    }
    static async fetchPositions(): Promise<AxiosResponse<IPosition[]>> {
        return $api.get<IPosition[]>(`/position`)
    }
    static async fetchPositionById(_id: string): Promise<AxiosResponse<IPosition>> {
        return $api.get<IPosition>(`/position/${_id}`)
    }
    static async deletePositionById(_id: string): Promise<AxiosResponse<IPosition>> {
        return $api.post<IPosition>(`/position/del_one`, {_id: _id})
    }
}