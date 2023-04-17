export enum UserActionTypes {
    FETCH_USERS='FETCH_USERS',
    FETCH_USERS_BY_ID='FETCH_USERS_BY_ID',
    UPDATE_BACKGROUND_IMAGE='UPDATE_BACKGROUND_IMAGE',
    UPDATE_PROFILE_IMAGE='UPDATE_PROFILE_IMAGE',
    UPDATE_PROFILE='UPDATE_PROFILE'
}

export interface IUser {
    email: string;
    isActivated: boolean;
    id: string;
    role: string;
    password: string;
    activationLink: string;
    firstname: string;
    secondname: string;
    imageUrl: string;
    backgroundImage: string;
    gender: string;
    departament: string;
    location: string;
    phoneNumber: string;
    skills: string[];
    statusCandidate: string;
    birthDay: string;
    hiredDate: string;
    firedDate: string;
}

export interface UserState {
    users: IUser[],
    user: IUser,
    isAuth: boolean
}

interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS,
    payload: IUser[]
}

interface FetchUserByIdAction {
    type: UserActionTypes.FETCH_USERS_BY_ID,
    payload: IUser
}

export type UserAction =
    FetchUsersAction
    | FetchUserByIdAction