import {VacationAction, VacationActionTypes, VacationState} from '../../types/vacation-type'


const initialState: VacationState = {
    vacation: {
        _id: '',
        user: '',
        mainDuration: '',
        additionalDuration: 0,
        usedDuration: 0
    },
    vacations: []
}

export const vacation_Reducer = (state: VacationState = initialState, action: VacationAction): VacationState => {
    switch(action.type){
        case VacationActionTypes.CREATE_VACATION:
            return {...state, vacations: [...action.payload]}
        case VacationActionTypes.UPDATE_ADDITIONAL_DURATION_VACATION:
            return {...state, vacation: action.payload}
        case VacationActionTypes.UPDATE_USED_DURATION_VACATION:
            return {...state, vacation: action.payload}
        case VacationActionTypes.FETCH_VACATION:
            return {...state, vacations: [ ...action.payload]}
        case VacationActionTypes.FETCH_VACATION_BY_ID:
            return {...state, vacation: action.payload}
        case VacationActionTypes.FETCH_VACATION_BY_USER:
            return {...state, vacation: action.payload}
        case VacationActionTypes.UPDATE_VACATION_MAIN_DURATION_BY_USER:
            return {...state, vacation: action.payload}
        case VacationActionTypes.DELETE_VACATION:
            return {...state, vacation: action.payload}

        default:
            return state;
    }
}