import { Dispatch } from "redux"
import { RoleAction, RoleActionTypes} from "../../types/role-type"
import RoleService from "../../services/role-service"

export const fetchRoles = () => {
    return async (dispatch: Dispatch<RoleAction>) => {
        try{
            const response = await RoleService.fetchRoles()
            dispatch({
                type: RoleActionTypes.FETCH_ROLE,
                payload: response.data
            })
        } catch (e) {
            console.log(e)
        }
    }
}

export const fetchRoleById = (_id: string) => {
    return async (dispatch: Dispatch<RoleAction>) => {
        try{
            const response = await RoleService.fetchRoleById(_id)
            dispatch({
                type: RoleActionTypes.FETCH_ROLE_BY_ID,
                payload: response.data
            })
        } catch (e) {
            console.log(e)
        }
    }
}