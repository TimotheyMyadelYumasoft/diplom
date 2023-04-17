import { Dispatch } from "redux"
import { UserAction, UserActionTypes } from "../../types/user"
import UserService from "../../services/UserService"
import axios from "axios"

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try{
            const response = await UserService.fetchUsers()
            dispatch({
                type: UserActionTypes.FETCH_USERS,
                payload: response.data
            })
        }
        catch(e) {
            console.log(e)
        }
    }
}

export const fetchUserByIdAction = (_id: any) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            const response = await UserService.fetchUserById(_id)
            dispatch({
                type: UserActionTypes.FETCH_USERS_BY_ID,
                payload: response.data
            })
        }
        catch(e) {
            console.log(e)
        }
    }
}