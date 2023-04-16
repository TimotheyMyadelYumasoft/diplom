export enum UserActionTypes {
    FETCH_USERS='FETCH_USERS',
}

export interface IUser {
    email: string;
    isActivated: boolean;
    id: string;
    role: string;
}

export interface UserState {
    user: IUser[],
    isAuth: boolean
}

interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS,
    payload: IUser[]
}

export type UserAction = FetchUsersAction