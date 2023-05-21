import {StatusDayOffAction, StatusDayOffActionTypes, StatusDayOffState} from '../../types/statusDayOff-type'

const initialState: StatusDayOffState  = {
    statusDayOff: {
        _id: '',
        name: ''
    },
    statusDayOffs: []
}

export const statusDayOff_Reducer = (state: StatusDayOffState = initialState, action: StatusDayOffAction): StatusDayOffState => {
    switch(action.type){
        case StatusDayOffActionTypes.FETCH_STATUSDAYOFF:
            return {...state, statusDayOffs: [...action.payload]}
        case StatusDayOffActionTypes.FETCH_STATUSDAYOFF_BY_ID:
            return {...state, statusDayOff: action.payload}
        default:
            return state;
    }
}