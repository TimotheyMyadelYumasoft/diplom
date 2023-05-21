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
import {PlusSquareFill} from 'react-bootstrap-icons'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import '../style/Button.css'

const EventPage = () => {
    const {auth, isAuth} = useTypeSelector(state => state._auth)
    const {users} = useTypeSelector(state => state._user)
    const {events} = useTypeSelector(state => state.event)
    const {fetchAllEvents, fetchUsers, fetchRoleById} = useAction()
    const {role} = useTypeSelector(state => state._role)


    useEffect(() => {
        fetchAllEvents()
        fetchUsers()
        fetchRoleById(auth.user._id)
    }, [auth])

    // useEffect(() => {
    //     fetchAllEvents()
    // }, [events])

    let sorted = events;

    const [searchQuery, setSearchQuery] = useState<string>('');
    const [createEventModalActive , setCreateEventModalActive] = useState(false);


    const changeSearchQuery = (search: string) => {
        setSearchQuery(search)
    }

    return(
        <div>
            <Navigation />
            { role.name=='RECRUITER' || role.name=='ADMIN'
            ?
                <div style={{display: 'flex', msFlexDirection: 'column', flexWrap: 'wrap', margin: '1rem 0rem 0rem 2rem'}}>
                    <OverlayTrigger
                    key={'bottom'}
                    placement={'bottom'}
                    overlay={
                        <Tooltip id={`tooltip-${'bottom'}`}>
                            Создать мероприятие
                        </Tooltip>
                    }>
                        <Button onClick={() => setCreateEventModalActive(true)} className="common-btn"><PlusSquareFill /></Button>
                    </OverlayTrigger>
                </div>
            :
            ''
            }
            <div>
                <EventList events={sorted} users={users}/>
                <Modal active={createEventModalActive} setActive={setCreateEventModalActive} modalHeader='Создать мероприятие'><CreateEventForm setIsOpen={setCreateEventModalActive} employers={users}/></Modal>
            </div>
        </div>
    )
}

export default EventPage;