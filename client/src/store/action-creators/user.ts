import { Dispatch } from "redux"
import { UserAction, UserActionTypes } from "../../types/user"
import UserService from "../../services/UserService"

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try{
            const response = UserService.fetchUsers()
            dispatch({
                type: UserActionTypes.FETCH_USERS,
                payload: (await response).data
            })
        }
        catch(e) {
            console.log(e)
        }
    }
}