import React, { useEffect, useState } from 'react'
import { useTypeSelector } from '../hooks/useTypedSelector'
import { useAction } from '../hooks/useAction'
import { useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation'
import CandidateList from '../components/Lists/CandidateList'
import MySelect from '../components/UI/select/MySelect'
import MyInput from '../components/UI/input/MyInput'
import { Card, Form, Button } from 'react-bootstrap'
import {PlusSquareFill, TrashFill} from 'react-bootstrap-icons'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const AdminPage = () => {
    const {auth, isAuth} = useTypeSelector(state => state._auth)
    const {user, users} = useTypeSelector(state => state._user)
    const {fetchUserByIdAction, fetchUsers, fetchStatusCandidates, fetchPositions, createPosition, deletePositionById, fetchLocations, createLocation, deleteLocationById} = useAction()
    const {statusCandidates} = useTypeSelector(state => state._statusCandidate)
    const {positions} = useTypeSelector(state => state._position)
    const {locations} = useTypeSelector(state => state._location)


    useEffect(() => {
        fetchUserByIdAction(auth.user._id)
        fetchUsers()
    }, [auth])

    useEffect(() => {
        fetchStatusCandidates()
        fetchPositions()
        fetchLocations()
    }, [])

    let companyMembers = 0;
    let candidates = 0;
    let invitedCandidates = 0;
    let rejectedCandidates = 0;
    users.map(user => {
        if(user.password) companyMembers++
        if(!user.password) {
            candidates++
            statusCandidates.map( statusC => {
                if(statusC.name=='Приглашен' && user.statusCandidate == statusC._id) invitedCandidates++
                else if(statusC.name=='Отклонен' && user.statusCandidate == statusC._id) rejectedCandidates++
            })
        }
    })

    const [Position, setPosition] = useState('')

    const handleSubmitPositionForm = async( event: React.SyntheticEvent) => {
        event.preventDefault();
        createPosition(Position)
        fetchPositions()
        let selectPosition: any = [];
        positions.map(pos => {
        let newItem = {
            "value": pos._id,
            "name": pos.name
        };
        selectPosition.push(newItem);
        })
    }

    const sureDeletePosition = () => {
        let res = prompt('Вы точно хотите удалить мероприятие из системы? Напишите Да, чтобы подтвердить', 'Нет')?.toLowerCase();
        let yes = 'да'.toLowerCase();
        if(res == yes){
            deletePositionById(selectedSortPosition)
            fetchPositions()
            let selectPosition: any = [];
            positions.map(pos => {
            let newItem = {
                "value": pos._id,
                "name": pos.name
            };
            selectPosition.push(newItem);
            })
        }
    }

    const [selectedSortPosition, setSelectedSortPosition] = useState('')

    let selectPosition: any = [];
    positions.map(pos => {
        let newItem = {
            "value": pos._id,
            "name": pos.name
        };
        selectPosition.push(newItem);
    })

    const setSortPosition = (sort: string) => {
        setSelectedSortPosition(sort)
    }

    const [Location, setLocation] = useState('')

    const handleSubmitLocationForm = async( event: React.SyntheticEvent) => {
        event.preventDefault();
        createLocation(Location)
        fetchLocations()
        let selectLocation: any = [];
        positions.map(pos => {
        let newItem = {
            "value": pos._id,
            "name": pos.name
        };
        selectLocation.push(newItem);
        })
    }

    const sureDeleteLocation = () => {
        let res = prompt('Вы точно хотите удалить мероприятие из системы? Напишите Да, чтобы подтвердить', 'Нет')?.toLowerCase();
        let yes = 'да'.toLowerCase();
        if(res == yes){
            deleteLocationById(selectedSortLocation)
            fetchLocations()
            let selectLocation: any = [];
            positions.map(pos => {
            let newItem = {
                "value": pos._id,
                "name": pos.name
            };
            selectLocation.push(newItem);
            })
        }
    }

    const [selectedSortLocation, setSelectedSortLocation] = useState('')

    let selectLocation: any = [];
    locations.map(loc => {
        let newItem = {
            "value": loc._id,
            "name": loc.city
        };
        selectLocation.push(newItem);
    })

    const setSortLocation = (sort: string) => {
        setSelectedSortLocation(sort)
    }

    return(
        <div>
            <Navigation />
            <div style={{display: 'flex', msFlexDirection: 'column', flexWrap: 'wrap'}}>
            <Card style={{ width: '110rem', margin: '1rem 0rem 0rem 4rem', paddingBottom: '2rem'}}>
            {/* <Card.Title as='h4' style={{margin: '1rem 0rem 0rem 2rem'}}>Email: {_user.user?.email}</Card.Title> */}
            <Card.Text as='h1' style={{textAlign: 'center', margin: '1rem'}}>Количество работников компании {companyMembers}</Card.Text>

                <div style={{display: 'flex', msFlexDirection: 'column', flexWrap: 'wrap'}}>
                <Card style={{ width: '30rem', margin: '1rem 0rem 0rem 4rem', paddingBottom: '2rem'}}>
                    <Card.Title as='h1' style={{textAlign: 'center'}}>Кандидаты</Card.Title>
                    <Card.Text as='h4' style={{margin: '1rem 0rem 0rem 2rem'}}>Количество всех кандидатов на найм в компанию: {candidates}</Card.Text>
                    <Card.Text as='h4' style={{margin: '1rem 0rem 0rem 2rem'}}>Количество кандидатов нанятых в компанию: {invitedCandidates}</Card.Text>
                    <Card.Text as='h4' style={{margin: '1rem 0rem 0rem 2rem'}}>Количество кандидатов отказанных в найме в компанию: {rejectedCandidates}</Card.Text>
                </Card>
                <Card style={{ width: '30rem', margin: '1rem 0rem 0rem 4rem', paddingBottom: '2rem'}}>
                <Form onSubmit={handleSubmitPositionForm}>

                    <Form.Group className="m-2" controlId="formBasicTitleCreateEvent">
                        <Form.Label>Должность</Form.Label>
                        <Form.Control type="text" placeholder="Должность" value={Position}  onChange={e => setPosition(e.target.value)} required/>
                    </Form.Group>

                    <MySelect value={selectedSortPosition}
                            onChange={setSortPosition}
                            defaultValue='Выбрать должность'
                            options={selectPosition}
                    />

                    <div style={{marginLeft: '15%'}}>
                    <OverlayTrigger
                            key={'bottom'}
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={`tooltip-${'bottom'}`}>
                                    Добавить должность
                                </Tooltip>
                            }>
                            <Button variant="primary" type="submit" className="submit-btn">
                                <PlusSquareFill />
                            </Button>
                    </OverlayTrigger>
                    <OverlayTrigger
                            key={'bottom'}
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={`tooltip-${'bottom'}`}>
                                    Удалить должность
                                </Tooltip>
                            }>
                        <Button onClick={() => sureDeletePosition()} className="submit-btn"><TrashFill /></Button>
                    </OverlayTrigger>
                    </div>
                </Form>
                </Card>
                <Card style={{ width: '30rem', margin: '1rem 0rem 0rem 4rem', paddingBottom: '2rem'}}>
                <Form onSubmit={handleSubmitLocationForm}>

                    <Form.Group className="m-2" controlId="formBasicTitleCreateEvent">
                        <Form.Label>Город</Form.Label>
                        <Form.Control type="text" placeholder="Город" value={Location}  onChange={e => setLocation(e.target.value)} required/>
                    </Form.Group>

                    <MySelect value={selectedSortLocation}
                            onChange={setSortLocation}
                            defaultValue='Выбрать город'
                            options={selectLocation}
                    />

                    <div style={{marginLeft: '15%'}}>
                    <OverlayTrigger
                            key={'bottom'}
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={`tooltip-${'bottom'}`}>
                                    Добавить город
                                </Tooltip>
                            }>
                            <Button variant="primary" type="submit" className="submit-btn">
                                <PlusSquareFill />
                            </Button>
                    </OverlayTrigger>
                    <OverlayTrigger
                            key={'bottom'}
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={`tooltip-${'bottom'}`}>
                                    Удалить город
                                </Tooltip>
                            }>
                        <Button onClick={() => sureDeleteLocation()} className="submit-btn"><TrashFill /></Button>
                    </OverlayTrigger>
                    </div>
                </Form>
                </Card>
                </div>
            </Card>
            </div>
        </div>
    )
}

export default AdminPage;