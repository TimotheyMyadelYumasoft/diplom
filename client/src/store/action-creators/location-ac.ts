import { Dispatch } from "redux"
import { LocationAction, LocationActionTypes} from "../../types/location-type"
import LocationService from "../../services/location-service"

export const createLocation = (city: string) => {
    return async (dispatch: Dispatch<LocationAction>) => {
        try{
            const response = await LocationService.createLocation(city)
            dispatch({
                type: LocationActionTypes.CREATE_LOCATION,
                payload: response.data
            })
        } catch (e) {
            console.log(e)
        }
    }
}

export const fetchLocations = () => {
    return async (dispatch: Dispatch<LocationAction>) => {
        try{
            const response = await LocationService.fetchLocations()
            dispatch({
                type: LocationActionTypes.FETCH_LOCATION,
                payload: response.data
            })
        } catch (e) {
            console.log(e)
        }
    }
}

export const fetchLocationById = (_id: string) => {
    return async (dispatch: Dispatch<LocationAction>) => {
        try{
            const response = await LocationService.fetchLocationById(_id)
            dispatch({
                type: LocationActionTypes.FETCH_LOCATION_BY_ID,
                payload: response.data
            })
        } catch (e) {
            console.log(e)
        }
    }
}

export const deleteLocationById = (_id: string) => {
    return async (dispatch: Dispatch<LocationAction>) => {
        try{
            const response = await LocationService.deleteLocationById(_id)
            dispatch({
                type: LocationActionTypes.DELETE_LOCATION,
                payload: response.data
            })
        } catch (e) {
            console.log(e)
        }
    }
}