import React, { useEffect } from 'react'
import LoginForm from '../components/LoginForm'
import PersonalHeader  from '../components/personalPage/ProfileHeader'
import { useTypeSelector } from '../hooks/useTypedSelector'
import { useAction } from '../hooks/useAction'
import { useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation'

function PersonalPage() {

    const {auth, user, project} = useTypeSelector(state => state)
    const {refresh, logout, fetchProjectByIdAction, fetchUserByIdAction} = useAction()

    useEffect(() => {
        fetchUserByIdAction(auth.auth.user.id)
        fetchProjectByIdAction(auth.auth.user.id)
    }, [])

    useEffect(() => {
        fetchProjectByIdAction(auth.auth.user.id)
    }, [user])

    return (
        <div>
            <Navigation />
            <PersonalHeader />
        </div>
    )
}

export default PersonalPage;