import { AuthAction, AuthState, AuthTypes } from "../../types/auth-type";

const initialState: AuthState = {
    auth: {
        accessToken: '',
        refreshToken: '',
        user: {
            role: '',
            position: '',
            location: '',
            gender: '',
            statusCandidate: '',
            email: '',
            password: '',
            firstname: '',
            secondname: '',
            image: '',
            phoneNumber: '',
            birthDay: '',
            hiredDate: '',
            firedDate: '',
        }
    },
    isAuth: false
}
export const auth_Reducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
    switch(action.type){
        case AuthTypes.LOGIN:
            return {...state, isAuth: true, auth: action.payload }
        case AuthTypes.LOGOUT:
            return {...state, isAuth: false}
        case AuthTypes.REFRESH:
            return {...state, isAuth: true, auth: action.payload }
        default:
            return state;
    }
}