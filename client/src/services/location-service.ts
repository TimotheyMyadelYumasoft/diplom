import $api from "../http";
import {AxiosResponse} from 'axios'
import { ILocation } from "../types/location-type";

export default class LocationService {
    static async createLocation(city: string): Promise<AxiosResponse<ILocation[]>> {
        return $api.post<ILocation[]>(`/location/create`, {city: city})
    }
    static async fetchLocations(): Promise<AxiosResponse<ILocation[]>> {
        return $api.get<ILocation[]>(`/location`)
    }
    static async fetchLocationById(_id: string): Promise<AxiosResponse<ILocation>> {
        return $api.get<ILocation>(`/location/${_id}`)
    }
    static async deleteLocationById(_id: string): Promise<AxiosResponse<ILocation>> {
        return $api.post<ILocation>(`/location/del_one`, {_id: _id})
    }
}