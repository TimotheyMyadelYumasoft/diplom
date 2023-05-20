import { Dispatch } from "redux"
import { MainVacationDurationAction, MainVacationDurationActionTypes} from "../../types/mainVacationDuration-type"
import MainVacationDurationService from "../../services/mainVacationDuration-service"

export const createMainVacationDuration = (name: string, daysCount: number) => {
    return async (dispatch: Dispatch<MainVacationDurationAction>) => {
        try{
            const response = await MainVacationDurationService.createMainVacationDuration(name, daysCount)
            dispatch({
                type: MainVacationDurationActionTypes.CREATE_MAINVACATIONDURATION,
                payload: response.data
            })
        } catch (e) {
            console.log(e)
        }
    }
}

export const fetchMainVacationDurations = () => {
    return async (dispatch: Dispatch<MainVacationDurationAction>) => {
        try{
            const response = await MainVacationDurationService.fetchMainVacationDurations()
            dispatch({
                type: MainVacationDurationActionTypes.FETCH_MAINVACATIONDURATION,
                payload: response.data
            })
        } catch (e) {
            console.log(e)
        }
    }
}

export const fetchMainVacationDurationById = (_id: string) => {
    return async (dispatch: Dispatch<MainVacationDurationAction>) => {
        try{
            const response = await MainVacationDurationService.fetchMainVacationDurationById(_id)
            dispatch({
                type: MainVacationDurationActionTypes.FETCH_MAINVACATIONDURATION_BY_ID,
                payload: response.data
            })
        } catch (e) {
            console.log(e)
        }
    }
}

export const deleteMainVacationDurationById = (_id: string) => {
    return async (dispatch: Dispatch<MainVacationDurationAction>) => {
        try{
            const response = await MainVacationDurationService.deleteMainVacationDurationById(_id)
            dispatch({
                type: MainVacationDurationActionTypes.DELETE_MAINVACATIONDURATION,
                payload: response.data
            })
        } catch (e) {
            console.log(e)
        }
    }
}