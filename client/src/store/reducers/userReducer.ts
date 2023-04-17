import {UserAction, UserState, UserActionTypes} from '../../types/user'

const initialState: UserState = {
    users: [],
    user: null,
    isAuth: false
}

export const userReducer = (state: UserState = initialState, action: UserAction): UserState => {
    switch(action.type){
        case UserActionTypes.FETCH_USERS:
            return { ...state, isAuth: true, users: [ ...action.payload ]}
        case UserActionTypes.FETCH_USERS_BY_ID:
            return {...state, user: action.payload }
        default:
            return state;
    }
}