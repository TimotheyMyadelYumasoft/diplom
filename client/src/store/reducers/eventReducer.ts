import {EventAction, EventActionTypes, EventState} from '../../types/event'

const initialState: EventState  = {
    event: {
        activationLink: '',
        description: '',
        _id: '',
        participants: [],
        startDate:'',
        title:''
    },
    events: []
}

export const eventReducer = (state: EventState = initialState, action: EventAction): EventState => {
    switch(action.type){
        case EventActionTypes.FETCH_EVENT:
            return {...state, events: [...action.payload]}
        case EventActionTypes.FETCH_EVENT_BY_ID:
            return {...state, event: action.payload}
        case EventActionTypes.UPDATE_EVENT:
            return {...state, event: action.payload}
        case EventActionTypes.DELETE_EVENT:
            return {...state, event: action.payload}
        case EventActionTypes.CREATE_EVENT:
            return {...state, event: action.payload}
        default:
            return state;
    }
}