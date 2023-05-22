export enum MainVacationDurationActionTypes {
    CREATE_MAINVACATIONDURATION='CREATE_MAINVACATIONDURATION',
    EDIT_MAINVACATIONDURATION='EDIT_MAINVACATIONDURATION',
    FETCH_MAINVACATIONDURATION='FETCH_MAINVACATIONDURATION',
    FETCH_MAINVACATIONDURATION_BY_ID='FETCH_MAINVACATIONDURATION_BY_ID',
    DELETE_MAINVACATIONDURATION='DELETE_MAINVACATIONDURATION'
}

export interface IMainVacationDuration {
    _id: string;
    name: string;
    daysCount: number;
}

export interface MainVacationDurationState {
    mainVacationDurations: IMainVacationDuration[],
    mainVacationDuration: IMainVacationDuration
}

interface FetchMainVacationDurationAction {
    type: MainVacationDurationActionTypes.FETCH_MAINVACATIONDURATION,
    payload: IMainVacationDuration[]
}

interface FetchMainVacationDurationByIdAction {
    type: MainVacationDurationActionTypes.FETCH_MAINVACATIONDURATION_BY_ID,
    payload: IMainVacationDuration
}

interface CreateMainVacationDurationAction {
    type: MainVacationDurationActionTypes.CREATE_MAINVACATIONDURATION,
    payload: IMainVacationDuration[]
}

interface EditMainVacationDurationAction {
    type: MainVacationDurationActionTypes.EDIT_MAINVACATIONDURATION,
    payload: IMainVacationDuration
}

interface DeleteMainVacationDurationAction {
    type: MainVacationDurationActionTypes.DELETE_MAINVACATIONDURATION,
    payload: IMainVacationDuration
}

export type MainVacationDurationAction =
    FetchMainVacationDurationAction
    | FetchMainVacationDurationByIdAction
    | CreateMainVacationDurationAction
    | EditMainVacationDurationAction
    | DeleteMainVacationDurationAction