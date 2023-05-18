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

export const sortAllUsers = (arr: string[]) => {
    return (dispatch: Dispatch<UserAction>) => {
        try{
            console.log(arr)
        }
        catch (e) {
            console.log(e);
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

export const updateThisUser = (_id: string, email: string, firstname: string, secondname: string, gender: string, phonenumber: string, department: string, location: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try{
            console.log('_id')
            console.log(_id)
            const response = await UserService.updateUser(_id, email, firstname, secondname, gender, phonenumber, department, location)
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

export const createUser = (email: string, password: string, role: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try{
            const response = await UserService.createUser(email, password, role)
            dispatch({
                type: UserActionTypes.CREATE_USER,
                payload: response.data
            })
        } catch (e) {
            console.log(e)
        }
    }
}

export const editBirthdayUser = (_id: string, birthDay: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try{
            const response = await UserService.editBirthdayUserById(_id, birthDay)
            console.log(birthDay)
            console.log(response)
            dispatch({
                type: UserActionTypes.UPDATE_BIRTHDAY_USER,
                payload: response.data
            })
        } catch(e) {
            console.log(e)
        }
    }
}

export const editUserImage = (formData: any) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try{
            const response = await UserService.updateProfileImage(formData);
            console.log('responseImage')
            console.log(response)
            dispatch({
                type: UserActionTypes.UPDATE_PROFILE_IMAGE,
                payload: response.data
            })
        } catch(e) {
            console.log(e)
        }
    }
}