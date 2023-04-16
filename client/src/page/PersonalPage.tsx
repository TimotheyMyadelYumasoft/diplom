import React, { useEffect } from 'react'
import LoginForm from '../components/LoginForm'
import PersonalHeader  from '../components/personalPage/ProfileHeader'
import { useTypeSelector } from '../hooks/useTypedSelector'
import { useAction } from '../hooks/useAction'
import { useNavigate } from 'react-router-dom'

function PersonalPage() {

    const {auth, isAuth} = useTypeSelector(state => state.auth)

    const {refresh, logout} = useAction()
    useEffect(() => {
        if(localStorage.getItem('token')){
            refresh();
        }
    }, [])

    const navigate = useNavigate();
    if(!isAuth) {
        navigate('/login')
    }

    return (
        <div>
            <PersonalHeader />
            <button onClick={() => logout()}>Выйти</button>
        </div>
    )
}

export default PersonalPage;