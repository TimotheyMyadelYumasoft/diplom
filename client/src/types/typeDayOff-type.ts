export enum TypeDayOffActionTypes {
    FETCH_TYPEDAYOFF='FETCH_TYPEDAYOFF',
    FETCH_TYPEDAYOFF_BY_ID='FETCH_TYPEDAYOFF_BY_ID'
}

export interface ITypeDayOff {
    _id: string;
    name: string;
}

export interface TypeDayOffState {
    typeDayOffs: ITypeDayOff[],
    typeDayOff: ITypeDayOff
}

interface FetchTypeDayOffAction {
    type: TypeDayOffActionTypes.FETCH_TYPEDAYOFF,
    payload: ITypeDayOff[]
}

interface FetchTypeDayOffByIdAction {
    type: TypeDayOffActionTypes.FETCH_TYPEDAYOFF_BY_ID,
    payload: ITypeDayOff
}

export type TypeDayOffAction =
    FetchTypeDayOffAction
    | FetchTypeDayOffByIdAction