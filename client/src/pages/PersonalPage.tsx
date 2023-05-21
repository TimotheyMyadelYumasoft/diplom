import React, { useEffect } from 'react'
import LoginForm from '../components/LoginForm'
import PersonalHeader  from '../components/personalPage/ProfileHeader'
import { useTypeSelector } from '../hooks/useTypedSelector'
import { useAction } from '../hooks/useAction'
import { useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation'

function PersonalPage() {

    const {auth} = useTypeSelector(state => state._auth)
    const {fetchUserByIdAction} = useAction()

    useEffect(() => {
        fetchUserByIdAction(auth.user._id)
    }, [auth])


    return (
        <div>
            <Navigation />
            <PersonalHeader />
        </div>
    )
}

export default PersonalPage;