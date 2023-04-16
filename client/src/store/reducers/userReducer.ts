import {UserAction, UserState, UserActionTypes} from '../../types/user'

const initialState: UserState = {
    user: [],
    isAuth: false
}

export const userReducer = (state: UserState = initialState, action: UserAction): UserState => {
    switch(action.type){
        case UserActionTypes.FETCH_USERS:
            return { ...state, isAuth: true, user: [ ...action.payload ]}
        default:
            return state;
    }
}