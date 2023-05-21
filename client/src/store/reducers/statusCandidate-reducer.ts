import {StatusCandidateAction, StatusCandidateActionTypes, StatusCandidateState} from '../../types/statusCandidate-type'

const initialState: StatusCandidateState  = {
    statusCandidate: {
        _id: '',
        name: ''
    },
    statusCandidates: []
}

export const statusCandidate_Reducer = (state: StatusCandidateState = initialState, action: StatusCandidateAction): StatusCandidateState => {
    switch(action.type){
        case StatusCandidateActionTypes.FETCH_STATUSCANDIDATE:
            return {...state, statusCandidates: [...action.payload]}
        case StatusCandidateActionTypes.FETCH_STATUSCANDIDATE_BY_ID:
            return {...state, statusCandidate: action.payload}
        default:
            return state;
    }
}