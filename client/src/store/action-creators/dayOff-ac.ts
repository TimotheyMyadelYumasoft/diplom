import { Dispatch } from "redux"
import { DayOffAction, DayOffActionTypes} from "../../types/dayOff-type"
import DayOffService from "../../services/dayOff-service"

export const createDayOff = (vacation: string, type: string, status: string, endDate: string, startDate: string) => {
    return async (dispatch: Dispatch<DayOffAction>) => {
        try{
            const response = await DayOffService.createDayOff(vacation, type, status, endDate, startDate)
            dispatch({
                type: DayOffActionTypes.CREATE_DAYOFF,
                payload: response.data
            })
        } catch (e) {
            console.log(e)
        }
    }
}

export const approveDayOff = (_id: string, status: string) => {
    return async (dispatch: Dispatch<DayOffAction>) => {
        try{
            const response = await DayOffService.approveDayOff(_id, status)
            dispatch({
                type: DayOffActionTypes.APPROVE_DAYOFF,
                payload: response.data
            })
        } catch (e) {
            console.log(e)
        }
    }
}

export const fetchDayOffs = () => {
    return async (dispatch: Dispatch<DayOffAction>) => {
        try{
            const response = await DayOffService.fetchDayOffs()
            dispatch({
                type: DayOffActionTypes.FETCH_DAYOFF,
                payload: response.data
            })
        } catch (e) {
            console.log(e)
        }
    }
}

export const fetchDayOffById = (_id: string) => {
    return async (dispatch: Dispatch<DayOffAction>) => {
        try{
            const response = await DayOffService.fetchDayOffById(_id)
            dispatch({
                type: DayOffActionTypes.FETCH_DAYOFF_BY_ID,
                payload: response.data
            })
        } catch (e) {
            console.log(e)
        }
    }
}

export const deleteDayOffById = (_id: string) => {
    return async (dispatch: Dispatch<DayOffAction>) => {
        try{
            const response = await DayOffService.deleteDayOffById(_id)
            dispatch({
                type: DayOffActionTypes.DELETE_DAYOFF,
                payload: response.data
            })
        } catch (e) {
            console.log(e)
        }
    }
}