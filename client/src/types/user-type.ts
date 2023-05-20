export enum UserActionTypes {
    CREATE_USER='CREATE_USER',
    FETCH_USERS='FETCH_USERS',
    FETCH_USERS_BY_ID='FETCH_USERS_BY_ID',
    UPDATE_USER='UPDATE_USER',
    DELETE_USER='DELETE_USER',
    CREATE_CANDIDATE='CREATE_CANDIDATE',
    APPROVE_CANDIDATE='APPROVE_CANDIDATE',
    SET_STATUS_CANDIDATE='SET_STATUS_CANDIDATE',
    UPDATE_BIRTHDAY_USER='UPDATE_BIRTHDAY_USER',
    UPDATE_PROFILE_IMAGE='UPDATE_PROFILE_IMAGE',
}

export interface IUser {
    role: string;
    position: string;
    location: string;
    gender: string;
    statusCandidate: string;
    email: string;
    password: string;
    firstname: string;
    secondname: string;
    image: string;
    phoneNumber: string;
    birthDay: string;
    hiredDate: string;
    firedDate: string;
}

export interface UserState {
    users: IUser[],
    user: IUser,
    isAuth: boolean
}

interface CreateUserAction {
    type: UserActionTypes.CREATE_USER,
    payload: IUser[];
}

interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS,
    payload: IUser[]
}

interface FetchUserByIdAction {
    type: UserActionTypes.FETCH_USERS_BY_ID,
    payload: IUser
}

interface UpdateUserAction {
    type: UserActionTypes.UPDATE_USER,
    payload: IUser
}

interface DeleteUserByIdAction {
    type: UserActionTypes.DELETE_USER,
    payload: IUser
}


interface CreateCandidateAction {
    type: UserActionTypes.CREATE_CANDIDATE,
    payload: IUser
}

interface SetStatusCandidateAction {
    type: UserActionTypes.SET_STATUS_CANDIDATE,
    payload: IUser
}

interface ApproveCandidateAction {
    type: UserActionTypes.APPROVE_CANDIDATE,
    payload: IUser
}

interface UpdateBirthdayUser {
    type: UserActionTypes.UPDATE_BIRTHDAY_USER,
    payload: IUser
}

interface UpdateProfileImage {
    type: UserActionTypes.UPDATE_PROFILE_IMAGE,
    payload: IUser
}

export type UserAction =
    CreateUserAction
    | FetchUsersAction
    | FetchUserByIdAction
    | UpdateUserAction
    | DeleteUserByIdAction
    | UpdateBirthdayUser
    | UpdateProfileImage

    | CreateCandidateAction
    | SetStatusCandidateAction
    | ApproveCandidateAction