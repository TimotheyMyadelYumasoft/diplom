import * as VacationActionCreator from './vacation'
import * as EventActionCreator from './event'
import * as CandidateActionCreator from './candidate'

import * as _AuthActionCreator from './auth-ac'
import * as _CandidateActionCreator from './candidate-ac'
import * as _DayOffActionCreator from './dayOff-ac'
import * as _EventActionCreator from './event-ac'
import * as _GenderActionCreator from './gender-ac'
import * as _LocationActionCreator from './location-ac'
import * as _MainVacationDurationActionCreator from './mainVacationDuration-ac'
import * as _PositionActionCreator from './position-ac'
import * as _UserActionCreator from './user-ac'
import * as _VacationActionCreator from './vacation-ac'
import * as _RoleActionCreator from './role-ac'
import * as _StatusCandidateActionCreator from './statusCandidate-ac'
import * as _StatusDayOffActionCreator from './statusDayOff-ac'
import * as _TypeDayOffActionCreator from './typeDayOff-ac'

export default {
    ...VacationActionCreator,
    ...EventActionCreator,
    ...CandidateActionCreator,

    ..._AuthActionCreator,
    ..._CandidateActionCreator,
    ..._DayOffActionCreator,
    ..._EventActionCreator,
    ..._GenderActionCreator,
    ..._LocationActionCreator,
    ..._MainVacationDurationActionCreator,
    ..._PositionActionCreator,
    ..._UserActionCreator,
    ..._VacationActionCreator,
    ..._RoleActionCreator,
    ..._StatusCandidateActionCreator,
    ..._StatusDayOffActionCreator,
    ..._TypeDayOffActionCreator,
}