import { Dispatch } from "redux"
import { AuthAction, AuthResponse, AuthTypes } from "../../types/auth-type"
import UserService from "../../services/auth-service"
import axios from "axios"


export const _login = (email: string, password: string) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try{
            const response = await UserService.login(email, password)
            dispatch({
                type: AuthTypes.LOGIN,
                payload: response.data
            })
            localStorage.setItem('token', response.data.accessToken)
        }
        catch(e) {
            alert('Данные были неправильно введены')
            console.log(e)
        }
    }
}

export const refresh = () => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try{
            const response = await axios.get<AuthResponse>(`http://localhost:5000/api/user/refresh`, {withCredentials: true})
            dispatch({
                type: AuthTypes.REFRESH,
                payload: response.data
            })
            localStorage.setItem('token', response.data.accessToken)
        }
        catch(e) {
            console.log(e)
        }
    }
}

export const _logout = () => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try{
            await UserService.logout()
            localStorage.removeItem('token')
            dispatch({
                type: AuthTypes.LOGOUT
            })
        } catch(e) {
            console.log(e)
        }
    }
}