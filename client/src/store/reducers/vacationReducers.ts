import {VacationAction, VacationActionTypes, VacationState} from '../../types/vacation'


const initialState: VacationState = {
    vacation: {
        id: '',
        employerId: '',
        employComment: [''],
        reviewerComment: [''],
        startDate: '',
        endDate: '',
        status: '',
        type: ''
    },
    vacations: []
}

export const vacationReducer = (state: VacationState = initialState, action: VacationAction): VacationState => {
    switch(action.type){
        case VacationActionTypes.FETCH_VACATION:
            return {...state, vacations: [ ...action.payload] }
        case VacationActionTypes.FETCH_VACATION_BY_ID:
            return {...state, vacation: action.payload }

        default:
            return state;
    }
}