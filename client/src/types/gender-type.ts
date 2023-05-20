export enum GenderActionTypes {
    CREATE_GENDER='CREATE_GENDER',
    EDIT_GENDER='EDIT_GENDER',
    FETCH_GENDER='FETCH_GENDER',
    FETCH_GENDER_BY_ID='FETCH_GENDER_BY_ID',
    DELETE_GENDER='DELETE_GENDER'
}

export interface IGender {
    _id: string;
    name: string;
}

export interface GenderState {
    genders: IGender[],
    gender: IGender
}

interface FetchGenderAction {
    type: GenderActionTypes.FETCH_GENDER,
    payload: IGender[]
}

interface FetchGenderByIdAction {
    type: GenderActionTypes.FETCH_GENDER_BY_ID,
    payload: IGender
}

interface CreateGenderAction {
    type: GenderActionTypes.CREATE_GENDER,
    payload: IGender[]
}

interface EditGenderAction {
    type: GenderActionTypes.EDIT_GENDER,
    payload: IGender
}

interface DeleteGenderAction {
    type: GenderActionTypes.DELETE_GENDER,
    payload: IGender
}

export type GenderAction =
    FetchGenderAction
    | FetchGenderByIdAction
    | CreateGenderAction
    | EditGenderAction
    | DeleteGenderAction