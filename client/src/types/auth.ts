import { IUser } from "./user";

export enum AuthTypes {
    LOGIN='LOGIN',
    LOGOUT='LOGOUT'
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
    payload: LogoutAction;
}

export type AuthAction =
    LoginAction
    | LogoutAction