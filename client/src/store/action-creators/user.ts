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

export const updateThisUser = (_id: string, email: string, firstname: string, secondname: string, gender: string, phonenumber: string, department: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try{
            console.log(_id, email, firstname, secondname, gender, phonenumber, department)
            const response = await UserService.updateUser(_id, email, firstname, secondname, gender, phonenumber, department)
            console.log('response')
            console.log(response)
            dispatch({
                type: UserActionTypes.UPDATE_USER,
                payload: response.data
            })
        } catch (e) {
            console.log(e)
        }
    }
}