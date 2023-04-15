import {UserAction, UserState, UserActionTypes} from '../../types/user'

const initialState: UserState = {
    user: [],
    isAuth: false
}

export const userReducer = (state: UserState = initialState, action: UserAction): UserState => {
    switch(action.type){
        case UserActionTypes.FETCH_USERS:
            return {isAuth: true, user: []}
        default:
            return state;
    }
}