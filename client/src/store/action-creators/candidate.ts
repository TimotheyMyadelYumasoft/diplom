import { Dispatch } from "redux"
import { UserAction, UserActionTypes } from "../../types/user"
import CandidateService from "../../services/CandidateService"
import axios from "axios"

export const createCandidate = (_id: string, email: string, firstname: string, secondname: string, gender: string, phonenumber: string, department: string, location: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try{
            const response = await CandidateService.createCandidate(_id, email, firstname, secondname, gender, phonenumber, department, location)
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

export const approveCandidate = (_id: string, password: string, status: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try{
            const response = await CandidateService.approveCandidate(_id, password, status)
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