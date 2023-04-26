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
import { Button } from 'react-bootstrap'
import Modal from '../components/Modal'
import CreateEventForm from '../components/Forms/CreateEventForm'

const EventPage = () => {
    const {auth, isAuth} = useTypeSelector(state => state.auth)
    const {users} = useTypeSelector(state => state.user)
    const {events} = useTypeSelector(state => state.event)
    const {fetchAllEvents, fetchUsers} = useAction()


    useEffect(() => {
        fetchAllEvents()
        fetchUsers()
    }, [auth])

    useEffect(() => {
        fetchAllEvents()
    }, [events])

    let sorted = events;
    console.log(sorted);

    const [selectedSort, setSelectedSort] = useState('');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [createEventModalActive , setCreateEventModalActive] = useState(false);

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
            <div style={{display: 'flex', msFlexDirection: 'column', flexWrap: 'wrap'}}>
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
                <Button onClick={() => setCreateEventModalActive(true)} style={{width: '250px', height: '50px', backgroundColor: '#77C66E', margin: '1rem 4rem 0rem 4rem', borderColor: '#77C66E'}}>Создать мероприятие</Button>
            </div>
            <div>
                <EventList events={sorted} users={users}/>
                <Modal active={createEventModalActive} setActive={setCreateEventModalActive} modalHeader='Создать мероприятие'><CreateEventForm setIsOpen={setCreateEventModalActive} employers={users}/></Modal>
            </div>
        </div>
    )
}

export default EventPage;