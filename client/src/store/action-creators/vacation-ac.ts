import { Dispatch } from "redux"
import { VacationAction, VacationActionTypes } from "../../types/vacation-type"
import VacationService from "../../services/vacation-service"

export const createVacation = (user: string, mainDuration: string) => {
    return async (dispatch: Dispatch<VacationAction>) => {
        try {
            const response = await VacationService.createVacation(user, mainDuration)
            dispatch({
                type: VacationActionTypes.CREATE_VACATION,
                payload: response.data
            })
        } catch (e) {
            console.log(e)
        }
    }
}

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

export const deleteVacation = (_id: string) => {
    return async (dispatch: Dispatch<VacationAction>) => {
        try{
            const response = await VacationService.deleteVacationById(_id)
            dispatch({
                type: VacationActionTypes.DELETE_VACATION,
                payload: response.data
            })
            console.log(response)
        } catch (e) {
            console.log(e)
        }
    }
}

export const updateAdditionalDuration = (_id: string, additionalDuration: number) => {
    return async (dispatch: Dispatch<VacationAction>) => {
        try{
            const response = await VacationService.updateAdditionalDuration(_id, additionalDuration)
            dispatch({
                type: VacationActionTypes.UPDATE_ADDITIONAL_DURATION_VACATION,
                payload: response.data
            })
            console.log(response)
        } catch (e) {
            console.log(e)
        }
    }
}

export const updateUsedDuration = (_id: string, usedDuration: number) => {
    return async (dispatch: Dispatch<VacationAction>) => {
        try{
            const response = await VacationService.updateAdditionalDuration(_id, usedDuration)
            dispatch({
                type: VacationActionTypes.UPDATE_USED_DURATION_VACATION,
                payload: response.data
            })
            console.log(response)
        } catch (e) {
            console.log(e)
        }
    }
}