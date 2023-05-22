export enum DayOffActionTypes {
    CREATE_DAYOFF='CREATE_DAYOFF',
    APPROVE_DAYOFF='APPROVE_DAYOFF',
    FETCH_DAYOFF='FETCH_DAYOFF',
    FETCH_DAYOFF_BY_ID='FETCH_DAYOFF_BY_ID',
    DELETE_DAYOFF='DELETE_DAYOFF'
}

export interface IDayOff {
    _id: string;
    vacation: string;
    type: string;
    status: string;
    endDate: string;
    startDate: string;
}

export interface DayOffState {
    dayOffs: IDayOff[],
    dayOff: IDayOff
}

interface FetchDayOffAction {
    type: DayOffActionTypes.FETCH_DAYOFF,
    payload: IDayOff[]
}

interface FetchDayOffByIdAction {
    type: DayOffActionTypes.FETCH_DAYOFF_BY_ID,
    payload: IDayOff
}

interface CreateDayOffAction {
    type: DayOffActionTypes.CREATE_DAYOFF,
    payload: IDayOff
}

interface ApproveDayOffAction {
    type: DayOffActionTypes.APPROVE_DAYOFF,
    payload: IDayOff
}

interface DeleteDayOffAction {
    type: DayOffActionTypes.DELETE_DAYOFF,
    payload: IDayOff
}

export type DayOffAction =
    FetchDayOffAction
    | FetchDayOffByIdAction
    | CreateDayOffAction
    | ApproveDayOffAction
    | DeleteDayOffAction