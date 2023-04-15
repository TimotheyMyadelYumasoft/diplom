import { Dispatch } from "redux"
import { AuthAction, AuthTypes } from "../../types/auth"
import UserService from "../../services/AuthService"

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