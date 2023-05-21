import { Dispatch } from "redux"
import { StatusDayOffAction, StatusDayOffActionTypes} from "../../types/statusDayOff-type"
import StatusDayOffService from "../../services/statusDayOff-service"

export const fetchStatusDayOffs = () => {
    return async (dispatch: Dispatch<StatusDayOffAction>) => {
        try{
            const response = await StatusDayOffService.fetchStatusDayOffs()
            dispatch({
                type: StatusDayOffActionTypes.FETCH_STATUSDAYOFF,
                payload: response.data
            })
        } catch (e) {
            console.log(e)
        }
    }
}

export const fetchStatusDayOffById = (_id: string) => {
    return async (dispatch: Dispatch<StatusDayOffAction>) => {
        try{
            const response = await StatusDayOffService.fetchStatusDayOffById(_id)
            dispatch({
                type: StatusDayOffActionTypes.FETCH_STATUSDAYOFF_BY_ID,
                payload: response.data
            })
        } catch (e) {
            console.log(e)
        }
    }
}