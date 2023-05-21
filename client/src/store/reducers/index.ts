import {combineReducers} from 'redux';
import {userReducer} from './userReducer';
import { vacationReducer } from './vacationReducers';
import { eventReducer } from './eventReducer';

import {auth_Reducer} from './auth-reducer'
import {dayOff_Reducer} from './dayOff-reducer'
import {event_Reducer} from './event-reducer'
import {gender_Reducer} from './gender-reducer'
import {location_Reducer} from './location-reducer'
import {mainVacationDuration_Reducer} from './mainVacationDuration-reducer'
import {position_Reducer} from './position-reducer'
import {user_Reducer} from './user-reducer'
import {vacation_Reducer} from './vacation-reducer'
import {role_Reducer} from './role-reducer'
import {statusCandidate_Reducer} from './statusCandidate-reducer'
import {statusDayOff_Reducer} from './statusDayOff-reducer'
import {typeDayOff_Reducer} from './typeDayOff-reducer'

export const rootReducer = combineReducers({
    user: userReducer,
    vacation: vacationReducer,
    event: eventReducer,
    _auth: auth_Reducer,
    _dayOff: dayOff_Reducer,
    _event: event_Reducer,
    _gender: gender_Reducer,
    _location: location_Reducer,
    _mainVacationDuration_Reducer: mainVacationDuration_Reducer,
    _position: position_Reducer,
    _user: user_Reducer,
    _vacation: vacation_Reducer,
    _role: role_Reducer,
    _statusCandidate: statusCandidate_Reducer,
    _statusDayOff: statusDayOff_Reducer,
    _typeDayOff: typeDayOff_Reducer,
})

export type RootState = ReturnType<typeof rootReducer>