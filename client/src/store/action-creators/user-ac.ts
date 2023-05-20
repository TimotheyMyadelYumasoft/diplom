import { Dispatch } from "redux"
import { UserAction, UserActionTypes } from "../../types/user-type"
import UserService from "../../services/user-service"

export const createUser = (email: string, password: string, role: string, statusCandidate: string, birthDay: string, hiredDate: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try{
            const response = await UserService.createUser(email, password, role, statusCandidate, birthDay, hiredDate)
            dispatch({
                type: UserActionTypes.CREATE_USER,
                payload: response.data
            })
        } catch (e) {
            console.log(e)
        }
    }
}

export const editUserImage = (formData: any) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try{
            const response = await UserService.updateProfileImage(formData);
            dispatch({
                type: UserActionTypes.UPDATE_PROFILE_IMAGE,
                payload: response.data
            })
        } catch(e) {
            console.log(e)
        }
    }
}

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


export const fetchUserByIdAction = (_id: string) => {
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

export const updateThisUser = (_id: string, position: string, location: string, email: string, firstname: string, secondname: string, gender: string, phoneNumber: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try{
            const response = await UserService.updateUser(_id, position, location, email, firstname, secondname, gender, phoneNumber)
            dispatch({
                type: UserActionTypes.UPDATE_USER,
                payload: response.data
            })
        } catch (e) {
            console.log(e)
        }
    }
}

export const deleteUserById = (_id: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try{
            const response = await UserService.deleteUserById(_id)
            dispatch({
                type: UserActionTypes.DELETE_USER,
                payload: response.data
            })
        } catch (e) {
            console.log(e)
        }
    }
}

export const sortAllUsers = (arr: string[]) => {
    return (dispatch: Dispatch<UserAction>) => {
        try{
            console.log(arr)
        } catch (e) {
            console.log(e);
        }
    }
}