import React, { useEffect, useState } from 'react'
import { useTypeSelector } from '../hooks/useTypedSelector'
import { useAction } from '../hooks/useAction'
import { useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation'
import CandidateList from '../components/Lists/CandidateList'
import MySelect from '../components/UI/select/MySelect'
import MyInput from '../components/UI/input/MyInput'

const CandidatePage = () => {
    const {auth, isAuth} = useTypeSelector(state => state._auth)
    const {users} = useTypeSelector(state => state._user)
    const {fetchUserByIdAction, fetchUsers} = useAction()


    useEffect(() => {
        fetchUserByIdAction(auth.user._id)
        fetchUsers()
    }, [auth])

    useEffect(() => {
        employers = users;
    }, [users])

    let employers = users;

    return(
        <div>
            <Navigation />
            <div>
                <CandidateList employers={employers}/>
            </div>
        </div>
    )
}

export default CandidatePage;