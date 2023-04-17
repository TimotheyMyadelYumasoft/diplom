export enum ProjectActionTypes {
    FETCH_PROJECTS='FETCH_PROJECTS',
    FETCH_PROJECTS_BY_ID='FETCH_PROJECTS_BY_ID',
}

export interface IProject {
    _id: string;
    title: string;
    country: string;
    usersId: string[]
}

export interface ProjectState {
    projects: IProject[],
    project: IProject
}

interface FetchProjectsAction {
    type: ProjectActionTypes.FETCH_PROJECTS,
    payload: IProject[]
}

interface FetchProjectsByIdAction {
    type: ProjectActionTypes.FETCH_PROJECTS_BY_ID,
    payload: IProject[]
}

export type ProjectAction =
FetchProjectsAction
    | FetchProjectsByIdAction