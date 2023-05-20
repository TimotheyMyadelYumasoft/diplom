import {GenderAction, GenderActionTypes, GenderState} from '../../types/gender-type'

const initialState: GenderState  = {
    gender: {
        _id: '',
        name: ''
    },
    genders: []
}

export const gender_Reducer = (state: GenderState = initialState, action: GenderAction): GenderState => {
    switch(action.type){
        case GenderActionTypes.CREATE_GENDER:
            return {...state, genders: [...action.payload]}
        case GenderActionTypes.FETCH_GENDER:
            return {...state, genders: [...action.payload]}
        case GenderActionTypes.FETCH_GENDER_BY_ID:
            return {...state, gender: action.payload}
        case GenderActionTypes.DELETE_GENDER:
            return {...state, gender: action.payload}
        case GenderActionTypes.EDIT_GENDER:
            return {...state, gender: action.payload}
        default:
            return state;
    }
}