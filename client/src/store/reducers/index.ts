import {combineReducers} from 'redux';
import {userReducer} from './userReducer';
import {authReducer} from './authReducer';
import {projectReducer} from './projectReducer';

export const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer,
    project: projectReducer,
})

export type RootState = ReturnType<typeof rootReducer>