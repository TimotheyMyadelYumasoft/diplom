import { Dispatch } from "redux"
import { PositionAction, PositionActionTypes} from "../../types/position-type"
import PositionService from "../../services/position-service"

export const createPosition = (name: string) => {
    return async (dispatch: Dispatch<PositionAction>) => {
        try{
            const response = await PositionService.createPosition(name)
            dispatch({
                type: PositionActionTypes.CREATE_POSITION,
                payload: response.data
            })
        } catch (e) {
            console.log(e)
        }
    }
}

export const fetchPositions = () => {
    return async (dispatch: Dispatch<PositionAction>) => {
        try{
            const response = await PositionService.fetchPositions()
            dispatch({
                type: PositionActionTypes.FETCH_POSITION,
                payload: response.data
            })
        } catch (e) {
            console.log(e)
        }
    }
}

export const fetchPositionById = (_id: string) => {
    return async (dispatch: Dispatch<PositionAction>) => {
        try{
            const response = await PositionService.fetchPositionById(_id)
            dispatch({
                type: PositionActionTypes.FETCH_POSITION_BY_ID,
                payload: response.data
            })
        } catch (e) {
            console.log(e)
        }
    }
}

export const deletePositionById = (_id: string) => {
    return async (dispatch: Dispatch<PositionAction>) => {
        try{
            const response = await PositionService.deletePositionById(_id)
            dispatch({
                type: PositionActionTypes.DELETE_POSITION,
                payload: response.data
            })
        } catch (e) {
            console.log(e)
        }
    }
}