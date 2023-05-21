export enum RoleActionTypes {
    FETCH_ROLE='FETCH_ROLE',
    FETCH_ROLE_BY_ID='FETCH_ROLE_BY_ID'
}

export interface IRole {
    _id: string;
    name: string;
}

export interface RoleState {
    roles: IRole[],
    role: IRole
}

interface FetchRoleAction {
    type: RoleActionTypes.FETCH_ROLE,
    payload: IRole[]
}

interface FetchRoleByIdAction {
    type: RoleActionTypes.FETCH_ROLE_BY_ID,
    payload: IRole
}

export type RoleAction =
    FetchRoleAction
    | FetchRoleByIdAction