import {RoleAction, RoleActionTypes, RoleState} from '../../types/role-type'

const initialState: RoleState  = {
    role: {
        _id: '',
        name: ''
    },
    roles: []
}

export const role_Reducer = (state: RoleState = initialState, action: RoleAction): RoleState => {
    switch(action.type){
        case RoleActionTypes.FETCH_ROLE:
            return {...state, roles: [...action.payload]}
        case RoleActionTypes.FETCH_ROLE_BY_ID:
            return {...state, role: action.payload}
        default:
            return state;
    }
}