import {combineReducers} from 'redux';
import {userReducer} from './userReducer';
import {authReducer} from './authReducer';
import {projectReducer} from './projectReducer';
import { vacationReducer } from './vacationReducers';

export const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer,
    project: projectReducer,
    vacation: vacationReducer,
})

export type RootState = ReturnType<typeof rootReducer>