import $api from "../http";
import {AxiosResponse} from 'axios'
import { IStatusCandidate } from "../types/statusCandidate-type";

export default class StatusCandidateService {
    static async fetchStatusCandidates(): Promise<AxiosResponse<IStatusCandidate[]>> {
        return $api.get<IStatusCandidate[]>(`/cstatus`)
    }
    static async fetchStatusCandidateById(_id: string): Promise<AxiosResponse<IStatusCandidate>> {
        return $api.get<IStatusCandidate>(`/cstatus/${_id}`)
    }
}