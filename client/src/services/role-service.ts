import $api from "../http";
import {AxiosResponse} from 'axios'
import { IRole } from "../types/role-type";

export default class RoleService {
    static async fetchRoles(): Promise<AxiosResponse<IRole[]>> {
        return $api.get<IRole[]>(`/role`)
    }
    static async fetchRoleById(_id: string): Promise<AxiosResponse<IRole>> {
        return $api.get<IRole>(`/role/${_id}`)
    }
}