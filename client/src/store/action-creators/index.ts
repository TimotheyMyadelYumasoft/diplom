import * as UserActionCreator from './user'
import * as AuthActionCreator from './auth'
import * as VacationActionCreator from './vacation'
import * as EventActionCreator from './event'
import * as CandidateActionCreator from './candidate'

export default {
    ...UserActionCreator,
    ...AuthActionCreator,
    ...VacationActionCreator,
    ...EventActionCreator,
    ...CandidateActionCreator,
}