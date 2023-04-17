import { AuthAction, AuthState, AuthTypes } from "../../types/auth";

const date = new Date("2023-04-13T08:30:00Z");

const initialState: AuthState = {
    auth: {
        accessToken: '',
        refreshToken: '',
        user: {
            departament: '',
            activationLink: '',
            backgroundImage: '',
            birthDay: '',
            email: '',
            firedDate: '',
            firstname: '',
            gender: '',
            hiredDate: '',
            id: '',
            imageUrl: '',
            isActivated: false,
            location: '',
            password: '',
            phoneNumber: '',
            role: '',
            secondname: '',
            skills: [''],
            statusCandidate: ''
        }
    },
    isAuth: false
}
export const authReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
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