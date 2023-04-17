import * as UserActionCreator from './user'
import * as AuthActionCreator from './auth'
import * as ProjectActionCreator from './project'

export default {
    ...UserActionCreator,
    ...AuthActionCreator,
    ...ProjectActionCreator
}