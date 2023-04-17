import {ProjectAction, ProjectState, ProjectActionTypes} from '../../types/project'


const initialState: ProjectState = {
    project: {
        _id: '',
        country: '',
        usersId: [],
        title: ''
    },
    projects: []
}

export const projectReducer = (state: ProjectState = initialState, action: ProjectAction): ProjectState => {
    switch(action.type){
        case ProjectActionTypes.FETCH_PROJECTS:
            return { ...state, projects: [ ...action.payload ]}

        case ProjectActionTypes.FETCH_PROJECTS_BY_ID:
            return {...state, projects: [ ...action.payload ] }
        default:
            return state;
    }
}