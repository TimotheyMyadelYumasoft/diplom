import {TypeDayOffAction, TypeDayOffActionTypes, TypeDayOffState} from '../../types/typeDayOff-type'

const initialState: TypeDayOffState  = {
    typeDayOff: {
        _id: '',
        name: ''
    },
    typeDayOffs: []
}

export const typeDayOff_Reducer = (state: TypeDayOffState = initialState, action: TypeDayOffAction): TypeDayOffState => {
    switch(action.type){
        case TypeDayOffActionTypes.FETCH_TYPEDAYOFF:
            return {...state, typeDayOffs: [...action.payload]}
        case TypeDayOffActionTypes.FETCH_TYPEDAYOFF_BY_ID:
            return {...state, typeDayOff: action.payload}
        default:
            return state;
    }
}