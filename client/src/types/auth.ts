import { IUser } from "./user";

export enum AuthTypes {
    LOGIN='LOGIN',
    LOGOUT='LOGOUT',
    REFRESH='REFRESH'
}

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    user: IUser | null
}

export interface AuthState {
    auth: AuthResponse;
    isAuth: boolean;
}

export interface LogoutState {
    acknowledged: boolean;
    deletedCount: number;
}

interface LoginAction {
    type: AuthTypes.LOGIN;
    payload: AuthResponse;
}

interface LogoutAction {
    type: AuthTypes.LOGOUT;
}

interface RefreshAction {
    type: AuthTypes.REFRESH;
    payload: AuthResponse;
}

export type AuthAction =
    LoginAction
    | LogoutAction
    | RefreshAction