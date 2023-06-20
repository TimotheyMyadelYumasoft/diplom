import React, { FC, useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button'
import { useAction } from '../hooks/useAction'
import { useNavigate } from 'react-router-dom'
import { useTypeSelector } from '../hooks/useTypedSelector';
import Modal from './Modal';
import CreateCandidate from "./Forms/CreateCandidate";
import CreateUser from "./Forms/CreateUser";
import {DoorOpen} from 'react-bootstrap-icons'

const Navigation: FC = () => {
    const {auth, isAuth} = useTypeSelector(state => state._auth)

    const [modalRole, setModalRole] = useState('');
    const [modalCreateCandidateActive, setCreateCandidateModalActive] = useState(false);
    const [modalCreateUserActive, setCreateUserModalActive] = useState(false);
    const navigate = useNavigate();

    const {_logout, fetchRoleById} = useAction()
    const {role} = useTypeSelector(state => state._role)

    useEffect(() => {
        fetchRoleById(auth.user.role)
    }, [])

    if(!isAuth) {
        navigate('/login')
    }


    return (
        <Navbar bg="black" variant="dark">
        <Container className="ms-5">
            <Navbar.Brand href="/">Yumasoft management system</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/users">Все пользователи</Nav.Link>
                <Nav.Link href="/vacation">Выходные</Nav.Link>
                <Nav.Link href="/events">Мероприятия</Nav.Link>
                <Nav.Link href="/candidates">Кандидаты</Nav.Link>

                {role.name=='ADMIN' || role.name=='RECRUITER'
                ?
                <NavDropdown title="Создание пользователей" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => setCreateCandidateModalActive(true)}>Создать кандидата</NavDropdown.Item>
                <NavDropdown.Item onClick={() => {
                    setCreateUserModalActive(true);
                    setModalRole('USER');
                }}>
                    Создать пользователя
                </NavDropdown.Item>
                {role.name=='ADMIN'
                ?
                    <>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => {
                            setCreateUserModalActive(true);
                            setModalRole('RECRUITER');
                        }}>
                            Создать рекрутера
                        </NavDropdown.Item>
                    </>
                :
                ''
                }
                </NavDropdown>
                :
                ''
                }
                {role.name=='ADMIN'
                ?
                <Nav.Link href="/admin">Страница администратора</Nav.Link>
                :
                ''
                }
            </Nav>
            </Navbar.Collapse>
        </Container>
        <Button onClick={() => _logout()} className="logout-btn"><DoorOpen /></Button>

        <Modal active={modalCreateCandidateActive} setActive={setCreateCandidateModalActive} modalHeader='Создать кандидата'><CreateCandidate setIsOpen={setCreateCandidateModalActive} /></Modal>
        <Modal active={modalCreateUserActive} setActive={setCreateUserModalActive} modalHeader={modalRole=='RECRUITER' ? 'Создать кадровика' : 'Создать работника'}><CreateUser setIsOpen={setCreateUserModalActive} userRole={modalRole}/></Modal>
        </Navbar>
    )
}

export default Navigation;