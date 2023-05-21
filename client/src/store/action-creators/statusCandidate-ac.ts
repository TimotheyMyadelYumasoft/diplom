import { Dispatch } from "redux"
import { StatusCandidateAction, StatusCandidateActionTypes} from "../../types/statusCandidate-type"
import StatusCandidateService from "../../services/statusCandidate-service"

export const fetchStatusCandidates = () => {
    return async (dispatch: Dispatch<StatusCandidateAction>) => {
        try{
            const response = await StatusCandidateService.fetchStatusCandidates()
            dispatch({
                type: StatusCandidateActionTypes.FETCH_STATUSCANDIDATE,
                payload: response.data
            })
        } catch (e) {
            console.log(e)
        }
    }
}

export const fetchStatusCandidateById = (_id: string) => {
    return async (dispatch: Dispatch<StatusCandidateAction>) => {
        try{
            const response = await StatusCandidateService.fetchStatusCandidateById(_id)
            dispatch({
                type: StatusCandidateActionTypes.FETCH_STATUSCANDIDATE_BY_ID,
                payload: response.data
            })
        } catch (e) {
            console.log(e)
        }
    }
}