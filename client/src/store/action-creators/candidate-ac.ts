import { Dispatch } from "redux"
import { UserAction, UserActionTypes } from "../../types/user-type"
import CandidateService from "../../services/candidate-service"

export const createCandidate = (firstname: string, secondname: string, email: string, phoneNumber: string, position: string, location: string, gender: string, birthDay: string, role: string, statusCandidate: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try{
            const response = await CandidateService.createCandidate(firstname, secondname, email, phoneNumber, position, location, gender, birthDay, role, statusCandidate)
            dispatch({
                type: UserActionTypes.CREATE_CANDIDATE,
                payload: response.data
            })
        }
        catch (e) {
            console.log(e)
        }
    }
}

export const approveCandidate = (_id: string, password: string, statusCandidate: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try{
            const response = await CandidateService.approveCandidate(_id, password, statusCandidate)
            dispatch({
                type: UserActionTypes.APPROVE_CANDIDATE,
                payload: response.data
            })
        }
        catch (e) {
            console.log(e)
        }
    }
}

export const setStatusCandidate = (_id: string, statusCandidate: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try{
            const response = await CandidateService.setStatusCandidate(_id, statusCandidate);
            dispatch({
                type: UserActionTypes.SET_STATUS_CANDIDATE,
                payload: response.data
            })
        }
        catch (e) {
            console.log(e)
        }
    }
}