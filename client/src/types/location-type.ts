export enum LocationActionTypes {
    CREATE_LOCATION='CREATE_LOCATION',
    EDIT_LOCATION='EDIT_LOCATION',
    FETCH_LOCATION='FETCH_LOCATION',
    FETCH_LOCATION_BY_ID='FETCH_LOCATION_BY_ID',
    DELETE_LOCATION='DELETE_LOCATION'
}

export interface ILocation {
    _id: string;
    city: string;
}

export interface LocationState {
    locations: ILocation[],
    location: ILocation
}

interface FetchLocationAction {
    type: LocationActionTypes.FETCH_LOCATION,
    payload: ILocation[]
}

interface FetchLocationByIdAction {
    type: LocationActionTypes.FETCH_LOCATION_BY_ID,
    payload: ILocation
}

interface CreateLocationAction {
    type: LocationActionTypes.CREATE_LOCATION,
    payload: ILocation[]
}

interface EditLocationAction {
    type: LocationActionTypes.EDIT_LOCATION,
    payload: ILocation
}

interface DeleteLocationAction {
    type: LocationActionTypes.DELETE_LOCATION,
    payload: ILocation
}

export type LocationAction =
    FetchLocationAction
    | FetchLocationByIdAction
    | CreateLocationAction
    | EditLocationAction
    | DeleteLocationAction