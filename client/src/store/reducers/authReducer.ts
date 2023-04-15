import { AuthAction, AuthState, AuthTypes } from "../../types/auth";

const initialState: AuthState = {
    auth: {
        accessToken: '',
        refreshToken: '',
        user: null
    },
    isAuth: false
}
export const authReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
    switch(action.type){
        case AuthTypes.LOGIN:
            return {...state, isAuth: true, auth: action.payload }
        case AuthTypes.LOGOUT:
            return {...state, isAuth: false }
        default:
            return state;
    }
}