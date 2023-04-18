import * as UserActionCreator from './user'
import * as AuthActionCreator from './auth'
import * as ProjectActionCreator from './project'
import * as VacationActionCreator from './vacation'

export default {
    ...UserActionCreator,
    ...AuthActionCreator,
    ...ProjectActionCreator,
    ...VacationActionCreator,
}