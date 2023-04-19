import React, { useEffect, useState } from 'react'
import LoginForm from '../components/LoginForm'
import PersonalHeader  from '../components/personalPage/ProfileHeader'
import { useTypeSelector } from '../hooks/useTypedSelector'
import { useAction } from '../hooks/useAction'
import { useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation'
import EventList from '../components/Lists/EventList'
import MySelect from '../components/UI/select/MySelect'
import MyInput from '../components/UI/input/MyInput'

const EventPage = () => {
    const {auth, isAuth} = useTypeSelector(state => state.auth)
    const {users} = useTypeSelector(state => state.user)
    const {events} = useTypeSelector(state => state.event)
    const {fetchAllEvents, fetchUsers} = useAction()


    useEffect(() => {
        fetchAllEvents()
        fetchUsers()
    }, [auth])

    let sorted = events;
    console.log(sorted);

    const [selectedSort, setSelectedSort] = useState('');
    const [searchQuery, setSearchQuery] = useState<string>('');

    const sortPosts = (sort: string) => {
        setSelectedSort(sort)
        console.log(sort)
        if(sort == 'firstname') {
            sorted = sorted.sort((a, b) => a.title.localeCompare(b.title));
        }
        else if (sort == 'email') {
            sorted = sorted.sort((a, b) => a.startDate.localeCompare(b.startDate));
        }
    }

    const changeSearchQuery = (search: string) => {
        setSearchQuery(search)
        console.log(searchQuery)
    }

    return(
        <div>
            <Navigation />
            <div>
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
            </div>
            <div>
                <EventList events={sorted} users={users}/>
            </div>
        </div>
    )
}

export default EventPage;