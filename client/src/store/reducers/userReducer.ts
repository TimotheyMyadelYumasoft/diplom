import {UserAction, UserState, UserActionTypes} from '../../types/user'

const date = new Date("2023-04-13T08:30:00Z");

const initialState: UserState = {
    users: [],
    user: {
        departament: '',
        activationLink: '',
        backgroundImage: '',
        birthDay: '',
        email: '',
        firedDate: '',
        firstname: '',
        gender: '',
        hiredDate: '',
        id: '',
        imageUrl: '',
        isActivated: false,
        location: '',
        password: '',
        phoneNumber: '',
        role: '',
        secondname: '',
        skills: ['Node.js', 'React.js'],
        statusCandidate: ''
    },
    isAuth: false
}

export const userReducer = (state: UserState = initialState, action: UserAction): UserState => {
    switch(action.type){
        case UserActionTypes.FETCH_USERS:
            return { ...state, isAuth: true, users: [ ...action.payload ]}
        case UserActionTypes.FETCH_USERS_BY_ID:
            return {...state, user: action.payload }
        case UserActionTypes.UPDATE_USER:
            return {...state, user: action.payload}

        default:
            return state;
    }
}