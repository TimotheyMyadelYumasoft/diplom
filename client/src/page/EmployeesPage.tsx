import React, { useEffect } from 'react'
import LoginForm from '../components/LoginForm'
import PersonalHeader  from '../components/personalPage/ProfileHeader'
import { useTypeSelector } from '../hooks/useTypedSelector'
import { useAction } from '../hooks/useAction'
import { useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation'
import EmployersList from '../components/Lists/EmployersList'

function EmployeesPage() {
    const {auth, user, project} = useTypeSelector(state => state)
    const {refresh, logout, fetchProjectByIdAction, fetchUserByIdAction, fetchUsers} = useAction()

    useEffect(() => {
        if(localStorage.getItem('token')){
            refresh();
        }
    }, [])

    useEffect(() => {
        fetchUserByIdAction(auth.auth.user.id)
        fetchProjectByIdAction(auth.auth.user.id)
        fetchUsers()
    }, [])

    useEffect(() => {
        fetchProjectByIdAction(auth.auth.user.id)
    }, [user])

    return (
        <div>
            <Navigation />
            <div>
                <EmployersList />
            </div>
        </div>
    )
}

export default EmployeesPage;