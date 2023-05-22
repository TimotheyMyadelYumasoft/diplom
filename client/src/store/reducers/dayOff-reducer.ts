import {DayOffAction, DayOffActionTypes, DayOffState} from '../../types/dayOff-type'

const initialState: DayOffState  = {
    dayOff: {
        _id: '',
        vacation: '',
        type: '',
        status: '',
        endDate: '',
        startDate: ''

    },
    dayOffs: []
}

export const dayOff_Reducer = (state: DayOffState = initialState, action: DayOffAction): DayOffState => {
    switch(action.type){
        case DayOffActionTypes.CREATE_DAYOFF:
            return {...state, dayOff: action.payload}
        case DayOffActionTypes.APPROVE_DAYOFF:
            return {...state, dayOff: action.payload}
        case DayOffActionTypes.FETCH_DAYOFF:
            return {...state, dayOffs: [...action.payload]}
        case DayOffActionTypes.FETCH_DAYOFF_BY_ID:
            return {...state, dayOff: action.payload}
        case DayOffActionTypes.DELETE_DAYOFF:
            return {...state, dayOff: action.payload}

        default:
            return state;
    }
}