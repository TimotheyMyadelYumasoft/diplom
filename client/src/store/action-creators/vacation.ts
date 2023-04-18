import { Dispatch } from "redux"
import { VacationAction, VacationActionTypes } from "../../types/vacation"
import VacationService from "../../services/VacationService"
import axios from "axios"

export const fetchVacations = () => {
    return async (dispatch: Dispatch<VacationAction>) => {
        try{
            const response = await VacationService.fetchVacations()
            dispatch({
                type: VacationActionTypes.FETCH_VACATION,
                payload: response.data
            })
        }
        catch(e) {
            console.log(e)
        }
    }
}

export const fetchVacationByIdAction = (_id: any) => {
    return async (dispatch: Dispatch<VacationAction>) => {
        try {
            const response = await VacationService.fetchVacationById(_id)
            dispatch({
                type: VacationActionTypes.FETCH_VACATION_BY_ID,
                payload: response.data
            })
        }
        catch(e) {
            console.log(e)
        }
    }
}

export const setVacation = (startDate: string, endDate: string, type: string, employerId: string) => {
    return async (dispatch: Dispatch<VacationAction>) => {
        try {
            const response = await VacationService.setVacation(startDate, endDate, type ,employerId)
        } catch (e) {
            console.log(e)
        }
    }
}