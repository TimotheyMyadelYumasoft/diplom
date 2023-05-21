import { Dispatch } from "redux"
import { TypeDayOffAction, TypeDayOffActionTypes} from "../../types/typeDayOff-type"
import TypeDayOffService from "../../services/typeDayOff-service"

export const fetchTypeDayOffs = () => {
    return async (dispatch: Dispatch<TypeDayOffAction>) => {
        try{
            const response = await TypeDayOffService.fetchTypeDayOffs()
            dispatch({
                type: TypeDayOffActionTypes.FETCH_TYPEDAYOFF,
                payload: response.data
            })
        } catch (e) {
            console.log(e)
        }
    }
}

export const fetchTypeDayOffById = (_id: string) => {
    return async (dispatch: Dispatch<TypeDayOffAction>) => {
        try{
            const response = await TypeDayOffService.fetchTypeDayOffById(_id)
            dispatch({
                type: TypeDayOffActionTypes.FETCH_TYPEDAYOFF_BY_ID,
                payload: response.data
            })
        } catch (e) {
            console.log(e)
        }
    }
}