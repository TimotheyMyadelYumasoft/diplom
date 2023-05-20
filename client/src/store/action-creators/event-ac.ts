import { Dispatch } from "redux"
import { EventAction, EventActionTypes } from "../../types/event-type"
import EventService from "../../services/event-service"

export const fetchAllEvents = () => {
    return async (dispatch: Dispatch<EventAction>) => {
        try{
            const response = await EventService.fetchEvents()
            dispatch({
                type: EventActionTypes.FETCH_EVENT,
                payload: response.data
            })
        }
        catch (e) {
            console.log(e)
        }
    }
}

export const fetchOneEventById = (_id: string) => {
    return async (dispatch: Dispatch<EventAction>) => {
        try{
            const response = await EventService.fetchEventById(_id)
            dispatch({
                type: EventActionTypes.FETCH_EVENT_BY_ID,
                payload: response.data
            })
        }
        catch (e) {
            console.log(e)
        }
    }
}

export const createEvent = (participants: string[], title: string, description: string, startDate: string) => {
    return async (dispatch: Dispatch<EventAction>) => {
        try{
            const response = await EventService.createEvent(participants, title, description, startDate)
            dispatch({
                type: EventActionTypes.CREATE_EVENT,
                payload: response.data
            })
        }
        catch (e) {
            console.log(e)
        }
    }
}

export const deleteEventById = (_id: string) => {
    return async (dispatch: Dispatch<EventAction>) => {
        try{
            const response = await EventService.deleteEventById(_id)
            dispatch({
                type: EventActionTypes.DELETE_EVENT,
                payload: response.data
            })
        }
        catch (e) {
            console.log(e)
        }
    }
}

export const updateEvent = (_id: string, participants: string[], title: string, description: string, startDate: string) => {
    return async (dispatch: Dispatch<EventAction>) => {
        try{
            const response = await EventService.updateEvent(_id, participants, title, description, startDate)
            dispatch({
                type: EventActionTypes.UPDATE_EVENT,
                payload: response.data
            })
        }
        catch (e) {
            console.log(e)
        }
    }
}