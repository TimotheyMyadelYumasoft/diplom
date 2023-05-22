export enum VacationActionTypes {
    CREATE_VACATION='CREATE_VACATION',
    FETCH_VACATION='FETCH_VACATION',
    FETCH_VACATION_BY_ID='FETCH_VACATION_BY_ID',
    FETCH_VACATION_BY_USER='FETCH_VACATION_BY_USER',
    UPDATE_VACATION_MAIN_DURATION_BY_USER='UPDATE_VACATION_MAIN_DURATION_BY_USER',
    DELETE_VACATION='DELETE_VACATION',
    UPDATE_ADDITIONAL_DURATION_VACATION='UPDATE_ADDITIONAL_DURATION_VACATION',
    UPDATE_USED_DURATION_VACATION='UPDATE_USED_DURATION_VACATION'
}

export interface IVacation {
    _id: string;
    user: string;
    mainDuration: string;
    additionalDuration: number;
    usedDuration: number;
}

export interface VacationState {
    vacations: IVacation[],
    vacation: IVacation
}

interface CreateVacationAction {
    type: VacationActionTypes.CREATE_VACATION,
    payload: IVacation[]
}

interface FetchVacationAction {
    type: VacationActionTypes.FETCH_VACATION,
    payload: IVacation[]
}

interface FetchVacationByIdAction {
    type: VacationActionTypes.FETCH_VACATION_BY_ID,
    payload: IVacation
}

interface FetchVacationByUserAction {
    type: VacationActionTypes.FETCH_VACATION_BY_USER,
    payload: IVacation
}

interface UpdateVacationMainDurationByUserAction {
    type: VacationActionTypes.UPDATE_VACATION_MAIN_DURATION_BY_USER,
    payload: IVacation
}
interface UpdateAdditionalDurationVacationAction {
    type: VacationActionTypes.UPDATE_ADDITIONAL_DURATION_VACATION,
    payload: IVacation
}

interface UpdateUsedDurationVacationAction {
    type: VacationActionTypes.UPDATE_USED_DURATION_VACATION,
    payload: IVacation
}

interface DeleteVacationAction {
    type: VacationActionTypes.DELETE_VACATION,
    payload: IVacation
}

export type VacationAction =
    CreateVacationAction
    |FetchVacationAction
    | FetchVacationByIdAction
    | FetchVacationByUserAction
    | DeleteVacationAction
    | UpdateVacationMainDurationByUserAction
    | UpdateAdditionalDurationVacationAction
    | UpdateUsedDurationVacationAction