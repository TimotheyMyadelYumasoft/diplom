import {PositionAction, PositionActionTypes, PositionState} from '../../types/position-type'

const initialState: PositionState  = {
    position: {
        _id: '',
        name: ''
    },
    positions: []
}

export const position_Reducer = (state: PositionState = initialState, action: PositionAction): PositionState => {
    switch(action.type){
        case PositionActionTypes.CREATE_POSITION:
            return {...state, positions: [...action.payload]}
        case PositionActionTypes.FETCH_POSITION:
            return {...state, positions: [...action.payload]}
        case PositionActionTypes.FETCH_POSITION_BY_ID:
            return {...state, position: action.payload}
        case PositionActionTypes.DELETE_POSITION:
            return {...state, position: action.payload}
        case PositionActionTypes.EDIT_POSITION:
            return {...state, position: action.payload}
        default:
            return state;
    }
}