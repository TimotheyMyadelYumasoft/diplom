export enum StatusCandidateActionTypes {
    FETCH_STATUSCANDIDATE='FETCH_STATUSCANDIDATE',
    FETCH_STATUSCANDIDATE_BY_ID='FETCH_STATUSCANDIDATE_BY_ID'
}

export interface IStatusCandidate {
    _id: string;
    name: string;
}

export interface StatusCandidateState {
    statusCandidates: IStatusCandidate[],
    statusCandidate: IStatusCandidate
}

interface FetchStatusCandidateAction {
    type: StatusCandidateActionTypes.FETCH_STATUSCANDIDATE,
    payload: IStatusCandidate[]
}

interface FetchStatusCandidateByIdAction {
    type: StatusCandidateActionTypes.FETCH_STATUSCANDIDATE_BY_ID,
    payload: IStatusCandidate
}

export type StatusCandidateAction =
    FetchStatusCandidateAction
    | FetchStatusCandidateByIdAction