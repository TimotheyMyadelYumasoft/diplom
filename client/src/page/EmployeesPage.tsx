import React, { useEffect } from 'react'
import LoginForm from '../components/LoginForm'
import PersonalHeader  from '../components/personalPage/ProfileHeader'
import { useTypeSelector } from '../hooks/useTypedSelector'
import { useAction } from '../hooks/useAction'
import { useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation'
import EmployersList from '../components/Lists/EmployersList'

function EmployeesPage() {
    const {auth, isAuth} = useTypeSelector(state => state.auth)
    const {users} = useTypeSelector(state => state.user)
    const {refresh, logout, fetchProjectByIdAction, fetchUserByIdAction, fetchUsers} = useAction()

    useEffect(() => {
        if(localStorage.getItem('token')){
            refresh();
        }
    }, [])

    useEffect(() => {
        fetchUserByIdAction(auth.user.id)
        fetchUsers()
    }, [auth])


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