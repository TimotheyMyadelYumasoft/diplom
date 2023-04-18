export enum VacationActionTypes {
    FETCH_VACATION='FETCH_VACATION',
    FETCH_VACATION_BY_ID='FETCH_VACATION_BY_ID',
    UPDATE_VACATION='UPDATE_VACATION'
}

export interface IVacation {
    id: string;
    startDate: string;
    endDate: string;
    employerId: string;
    type: string;
    status: string;
    employComment: string[];
    reviewerComment: string[];
}

export interface EventState {
    events: IVacation[],
    event: IVacation
}

interface FetchVacationAction {
    type: VacationActionTypes.FETCH_VACATION,
    payload: IVacation[]
}

interface FetchVacationByIdAction {
    type: VacationActionTypes.FETCH_VACATION_BY_ID,
    payload: IVacation
}

interface UpdateVacationAction {
    type: VacationActionTypes.UPDATE_VACATION,
    payload: IVacation
}

export type EventAction =
    FetchVacationAction
    | FetchVacationByIdAction
    | UpdateVacationAction