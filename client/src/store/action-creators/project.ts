import { Dispatch } from "redux"
import { ProjectAction, ProjectActionTypes } from "../../types/project"
import ProjectService from "../../services/ProjectService"
import axios from "axios"

export const fetchProjects = () => {
    return async (dispatch: Dispatch<ProjectAction>) => {
        try{
            const response = await ProjectService.fetchProjects()
            dispatch({
                type: ProjectActionTypes.FETCH_PROJECTS,
                payload: response.data
            })
        }
        catch(e) {
            console.log(e)
        }
    }
}

export const fetchProjectByIdAction = (_id: any) => {
    return async (dispatch: Dispatch<ProjectAction>) => {
        try {
            const response = await ProjectService.fetchProjectById(_id)
            dispatch({
                type: ProjectActionTypes.FETCH_PROJECTS_BY_ID,
                payload: response.data
            })
        }
        catch(e) {
            console.log(e)
        }
    }
}