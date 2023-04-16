import { Dispatch } from "redux"
import { AuthAction, AuthResponse, AuthTypes } from "../../types/auth"
import UserService from "../../services/AuthService"
import axios from "axios"

export const login = (email: string, password: string) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try{
            console.log('hey')
            const response = await UserService.login(email, password)
            console.log(response)
            dispatch({
                type: AuthTypes.LOGIN,
                payload: response.data
            })
            localStorage.setItem('token', response.data.accessToken)
        }
        catch(e) {
            console.log(e)
        }
    }
}

export const refresh = () => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try{
            console.log('refresh')
            const response = await axios.get<AuthResponse>(`http://localhost:5000/api/user/refresh`, {withCredentials: true})
            console.log(response)
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