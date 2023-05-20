export enum PositionActionTypes {
    CREATE_POSITION='CREATE_POSITION',
    EDIT_POSITION='EDIT_POSITION',
    FETCH_POSITION='FETCH_POSITION',
    FETCH_POSITION_BY_ID='FETCH_POSITION_BY_ID',
    DELETE_POSITION='DELETE_POSITION'
}

export interface IPosition {
    _id: string;
    name: string;
}

export interface PositionState {
    positions: IPosition[],
    position: IPosition
}

interface FetchPositionAction {
    type: PositionActionTypes.FETCH_POSITION,
    payload: IPosition[]
}

interface FetchPositionByIdAction {
    type: PositionActionTypes.FETCH_POSITION_BY_ID,
    payload: IPosition
}

interface CreatePositionAction {
    type: PositionActionTypes.CREATE_POSITION,
    payload: IPosition[]
}

interface EditPositionAction {
    type: PositionActionTypes.EDIT_POSITION,
    payload: IPosition
}

interface DeletePositionAction {
    type: PositionActionTypes.DELETE_POSITION,
    payload: IPosition
}

export type PositionAction =
    FetchPositionAction
    | FetchPositionByIdAction
    | CreatePositionAction
    | EditPositionAction
    | DeletePositionAction