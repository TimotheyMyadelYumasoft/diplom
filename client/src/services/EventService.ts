import $api from "../http";
import {AxiosResponse} from 'axios'
import { IEvent } from "../types/event";

export default class EventService {
    static async createEvent(participants: string[], title: string, description: string, startDate: string): Promise<AxiosResponse<IEvent>> {
        return $api.post<IEvent>(`/event/create`, {participants: participants, title: title, description: description, startDate})
    }
    static async updateEvent(_id: string, participants: string[], title: string, description: string, startDate: string): Promise<AxiosResponse<IEvent>> {
        return $api.post<IEvent>(`/event/edit`, {_id: _id, participants: participants, title: title, description: description, startDate})
    }
    static async fetchEvents(): Promise<AxiosResponse<IEvent[]>> {
        return $api.get<IEvent[]>(`/event`)
    }
    static async fetchEventById(_id: string): Promise<AxiosResponse<IEvent>> {
        return $api.get<IEvent>(`/event/${_id}`)
    }
    static async deleteEventById(_id: string) : Promise<AxiosResponse<IEvent>> {
        return $api.post<IEvent>(`/event/del_one`, {_id: _id})
    }
}