import React, { useEffect } from 'react'
import LoginForm from '../components/LoginForm'
import PersonalHeader  from '../components/personalPage/ProfileHeader'
import { useTypeSelector } from '../hooks/useTypedSelector'
import { useAction } from '../hooks/useAction'
import { useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation'

function PersonalPage() {


    const {refresh, logout} = useAction()
    useEffect(() => {
        if(localStorage.getItem('token')){
            refresh();
        }
    }, [])

    return (
        <div>
            <Navigation />
            <PersonalHeader />
        </div>
    )
}

export default PersonalPage;