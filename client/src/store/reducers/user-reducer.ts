import {UserAction, UserState, UserActionTypes} from '../../types/user-type'

const initialState: UserState = {
    users: [],
    user: {
        _id: '',
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
        firedDate: ''
    },
    isAuth: false
}

export const user_Reducer = (state: UserState = initialState, action: UserAction): UserState => {
    switch(action.type){
        case UserActionTypes.CREATE_USER:
            return {...state, users: [ ...action.payload]}
        case UserActionTypes.FETCH_USERS:
            return { ...state, isAuth: true, users: [ ...action.payload ]}
        case UserActionTypes.FETCH_USERS_BY_ID:
            return {...state, user: action.payload }
        case UserActionTypes.UPDATE_USER:
            return {...state, user: action.payload}
        case UserActionTypes.DELETE_USER:
            return {...state, user: action.payload}
        case UserActionTypes.UPDATE_PROFILE_IMAGE:
            return {...state, user: action.payload}

        case UserActionTypes.CREATE_CANDIDATE:
                return {...state, users: [...action.payload]}
        case UserActionTypes.APPROVE_CANDIDATE:
            return {...state, user: action.payload}
        case UserActionTypes.SET_STATUS_CANDIDATE:
            return {...state, user: action.payload}
        default:
            return state;
    }
}