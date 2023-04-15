import * as UserActionCreator from './user'
import * as AuthActionCreator from './auth'

export default {
    ...UserActionCreator,
    ...AuthActionCreator
}