import {combineReducers} from 'redux';
import {userReducer} from './userReducer';
import {authReducer} from './authReducer';
import { vacationReducer } from './vacationReducers';
import { eventReducer } from './eventReducer';

export const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer,
    vacation: vacationReducer,
    event: eventReducer,
})

export type RootState = ReturnType<typeof rootReducer>