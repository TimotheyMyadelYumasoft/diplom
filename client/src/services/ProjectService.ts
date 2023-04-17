import $api from "../http";
import {AxiosResponse} from 'axios'
import { IProject } from "../types/project";

export default class ProjectService {
    static async fetchProjects(): Promise<AxiosResponse<IProject[]>> {
        return $api.get<IProject[]>(`/project/`)
    }
    static async fetchProjectById(_id: string): Promise<AxiosResponse<IProject[]>> {
        return $api.get<IProject[]>(`/project/${_id}`)
    }
}