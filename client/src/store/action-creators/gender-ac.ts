import { Dispatch } from "redux"
import { GenderAction, GenderActionTypes} from "../../types/gender-type"
import GenderService from "../../services/gender-service"

export const createGender = (name: string) => {
    return async (dispatch: Dispatch<GenderAction>) => {
        try{
            const response = await GenderService.createGender(name)
            dispatch({
                type: GenderActionTypes.CREATE_GENDER,
                payload: response.data
            })
        } catch (e) {
            console.log(e)
        }
    }
}

export const fetchGenders = () => {
    return async (dispatch: Dispatch<GenderAction>) => {
        try{
            const response = await GenderService.fetchGenders()
            dispatch({
                type: GenderActionTypes.FETCH_GENDER,
                payload: response.data
            })
        } catch (e) {
            console.log(e)
        }
    }
}

export const fetchGenderById = (_id: string) => {
    return async (dispatch: Dispatch<GenderAction>) => {
        try{
            const response = await GenderService.fetchGenderById(_id)
            dispatch({
                type: GenderActionTypes.FETCH_GENDER_BY_ID,
                payload: response.data
            })
        } catch (e) {
            console.log(e)
        }
    }
}

export const deleteGenderById = (_id: string) => {
    return async (dispatch: Dispatch<GenderAction>) => {
        try{
            const response = await GenderService.deleteGenderById(_id)
            dispatch({
                type: GenderActionTypes.DELETE_GENDER,
                payload: response.data
            })
        } catch (e) {
            console.log(e)
        }
    }
}