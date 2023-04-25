import $api from "../http";
import {AxiosResponse} from 'axios';
import { IUser } from "../types/user";

export default class CandidateService {
    static async createCandidate(email: string, firstname: string, secondname: string, gender: string, phonenumber: string, department: string): Promise<AxiosResponse<IUser>> {
        return $api.post<IUser>(`/user/create_candidate`, {email: email, firstname: firstname, secondname: secondname, gender: gender, phoneNumber: phonenumber,  departament: department})
    }

    static async approveCandidate(_id: string, password: string, status: string): Promise<AxiosResponse<IUser>> {
        return $api.post<IUser>(`/user/create_employee`, {_id: _id, password: password, status: status})
    }

    static async setStatusCandidate(_id: string, statusCandidate: string) : Promise<AxiosResponse<IUser>> {
        return $api.post<IUser>(`/user/set_candidate_status`, {_id: _id, statusCandidate: statusCandidate})
    }
}