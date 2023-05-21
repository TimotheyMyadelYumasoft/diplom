export enum StatusDayOffActionTypes {
    FETCH_STATUSDAYOFF='FETCH_STATUSDAYOFF',
    FETCH_STATUSDAYOFF_BY_ID='FETCH_STATUSDAYOFF_BY_ID'
}

export interface IStatusDayOff {
    _id: string;
    name: string;
}

export interface StatusDayOffState {
    statusDayOffs: IStatusDayOff[],
    statusDayOff: IStatusDayOff
}

interface FetchStatusDayOffAction {
    type: StatusDayOffActionTypes.FETCH_STATUSDAYOFF,
    payload: IStatusDayOff[]
}

interface FetchStatusDayOffByIdAction {
    type: StatusDayOffActionTypes.FETCH_STATUSDAYOFF_BY_ID,
    payload: IStatusDayOff
}

export type StatusDayOffAction =
    FetchStatusDayOffAction
    | FetchStatusDayOffByIdAction