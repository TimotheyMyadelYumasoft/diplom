import {LocationAction, LocationActionTypes, LocationState} from '../../types/location-type'

const initialState: LocationState  = {
    location: {
        _id: '',
        city: ''
    },
    locations: []
}

export const location_Reducer = (state: LocationState = initialState, action: LocationAction): LocationState => {
    switch(action.type){
        case LocationActionTypes.CREATE_LOCATION:
            return {...state, locations: [...action.payload]}
        case LocationActionTypes.FETCH_LOCATION:
            return {...state, locations: [...action.payload]}
        case LocationActionTypes.FETCH_LOCATION_BY_ID:
            return {...state, location: action.payload}
        case LocationActionTypes.DELETE_LOCATION:
            return {...state, location: action.payload}
        case LocationActionTypes.EDIT_LOCATION:
            return {...state, location: action.payload}
        default:
            return state;
    }
}