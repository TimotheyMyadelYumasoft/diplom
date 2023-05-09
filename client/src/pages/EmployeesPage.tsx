import React, { useEffect, useState } from 'react'
import LoginForm from '../components/LoginForm'
import PersonalHeader  from '../components/personalPage/ProfileHeader'
import { useTypeSelector } from '../hooks/useTypedSelector'
import { useAction } from '../hooks/useAction'
import { useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation'
import EmployersList from '../components/Lists/EmployersList'
import MySelect from '../components/UI/select/MySelect'
import MyInput from '../components/UI/input/MyInput'
import { IUser } from '../types/user'

function EmployeesPage() {
    const {auth, isAuth} = useTypeSelector(state => state.auth)
    const {users} = useTypeSelector(state => state.user)
    const {refresh, logout, fetchUserByIdAction, fetchUsers} = useAction()

    const [selectedSort, setSelectedSort] = useState('');
    const [searchQuery, setSearchQuery] = useState<string>('');
    // console.log(typeof searchQuery, searchQuery)
    const [employers, setEmployers] = useState<IUser[]>(users);


    useEffect(() => {
        fetchUserByIdAction(auth.user.id)
        fetchUsers()
    }, [auth])


    useEffect(() => {
        setEmployers(users)
    }, [users])

    const sortPosts = (sort: string) => {
        setSelectedSort(sort)
        console.log(sort)
        if(sort == 'firstname') {
            setEmployers(employers.sort((a, b) => a.firstname?.localeCompare(b.firstname)))
        }
        else if (sort == 'email') {
            setEmployers(employers.sort((a, b) => a.email?.localeCompare(b.email)))
        }
        else if (sort == 'secondname') {
            setEmployers(employers.sort((a, b) => a.secondname?.localeCompare(b.secondname)))
        }
    }

    const changeSearchQuery = (search: string) => {
        setSearchQuery(search)
        setEmployers(users.filter(user => user.secondname?.toLowerCase().includes(search.toLowerCase())))
    }

    return (
        <div>
            <Navigation />
            <div style={{display: 'flex', msFlexDirection: 'column', flexWrap: 'wrap', margin: '1rem 0rem 0rem 2rem'}}>
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue='Сортировка'
                    options={[
                        {value: 'email', name: 'По email'},
                        {value: 'firstname', name: 'По имени'},
                        {value: 'secondname', name: 'По фамилии'}
                    ]}
                />
                <MyInput
                    value={searchQuery}
                    type='text'
                    onChange={(e : React.FormEvent<HTMLInputElement>) => changeSearchQuery(e.currentTarget.value)}
                    placeholder="Поиск по фамилии...."
                    style={{width: '25rem', borderRadius: '25px'}}
                />
            </div>
            <div>
                <EmployersList key={'employers'} employers={employers}/>
            </div>
        </div>
    )
}

export default EmployeesPage;