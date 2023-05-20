import {MainVacationDurationAction, MainVacationDurationActionTypes, MainVacationDurationState} from '../../types/mainVacationDuration-type'

const initialState: MainVacationDurationState  = {
    mainVacationDuration: {
        _id: '',
        name: '',
        daysCount: 0
    },
    mainVacationDurations: []
}

export const mainVacationDuration_Reducer = (state: MainVacationDurationState = initialState, action: MainVacationDurationAction): MainVacationDurationState => {
    switch(action.type){
        case MainVacationDurationActionTypes.CREATE_MAINVACATIONDURATION:
            return {...state, mainVacationDurations: [...action.payload]}
        case MainVacationDurationActionTypes.FETCH_MAINVACATIONDURATION:
            return {...state, mainVacationDurations: [...action.payload]}
        case MainVacationDurationActionTypes.FETCH_MAINVACATIONDURATION_BY_ID:
            return {...state, mainVacationDuration: action.payload}
        case MainVacationDurationActionTypes.DELETE_MAINVACATIONDURATION:
            return {...state, mainVacationDuration: action.payload}
        case MainVacationDurationActionTypes.EDIT_MAINVACATIONDURATION:
            return {...state, mainVacationDuration: action.payload}
        default:
            return state;
    }
}