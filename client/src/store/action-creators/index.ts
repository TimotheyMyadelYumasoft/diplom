import * as UserActionCreator from './user'
import * as AuthActionCreator from './auth'
import * as ProjectActionCreator from './project'
import * as VacationActionCreator from './vacation'
import * as EventActionCreator from './event'
import * as CandidateActionCreator from './candidate'

export default {
    ...UserActionCreator,
    ...AuthActionCreator,
    ...ProjectActionCreator,
    ...VacationActionCreator,
    ...EventActionCreator,
    ...CandidateActionCreator,
}