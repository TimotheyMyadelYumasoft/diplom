import $api from "../http";
import {AxiosResponse} from 'axios';
import { IUser } from "../types/user-type";

export default class CandidateService {
    static async createCandidate(firstname: string, secondname: string, email: string, phoneNumber: string, position: string, location: string, gender: string, birthDay: string, role: string, statusCandidate: string): Promise<AxiosResponse<IUser[]>> {
        return $api.post<IUser[]>(`/user/create_candidate`, {firstname, secondname, email, phoneNumber, position, location, gender, birthDay, role, statusCandidate})
    }
    static async setStatusCandidate(_id: string, statusCandidate: string) : Promise<AxiosResponse<IUser>> {
        return $api.post<IUser>(`/user/set_candidate_status`, {_id: _id, statusCandidate: statusCandidate})
    }

    static async approveCandidate(_id: string, password: string, statusCandidate: string): Promise<AxiosResponse<IUser>> {
        return $api.post<IUser>(`/user/create_employee`, {_id: _id, password: password, statusCandidate: statusCandidate})
    }

}