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

const Navigation: FC = () => {
    const {auth, isAuth} = useTypeSelector(state => state.auth)

    const [role, setRole] = useState('');
    const [modalCreateCandidateActive, setCreateCandidateModalActive] = useState(false);
    const [modalCreateUserActive, setCreateUserModalActive] = useState(false);
    const navigate = useNavigate();
    const {logout, refresh} = useAction()
    if(!isAuth) {
        navigate('/login')
    }

    useEffect(() => {
        if(localStorage.getItem('token')){
            refresh();
        }
    }, [])

    return (
        <Navbar bg="dark" variant="dark">
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

                <NavDropdown title="Создание пользователей" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => setCreateCandidateModalActive(true)}>Создать кандидата</NavDropdown.Item>
                <NavDropdown.Item onClick={() => {
                    setCreateUserModalActive(true);
                    setRole('USER');
                }}>
                    Создать пользователя
                </NavDropdown.Item>
                {auth.user.role=='ADMIN'
                ?
                    <>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => {
                            setCreateUserModalActive(true);
                            setRole('RECRUITER');
                        }}>
                            Создать рекрутера
                        </NavDropdown.Item>
                    </>
                :
                ''
                }
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        <Button onClick={() => logout()} className="me-5">Logout</Button>

        <Modal active={modalCreateCandidateActive} setActive={setCreateCandidateModalActive} modalHeader='Создать кандидата'><CreateCandidate setIsOpen={setCreateCandidateModalActive} /></Modal>
        <Modal active={modalCreateUserActive} setActive={setCreateUserModalActive} modalHeader='Создать пользователя'><CreateUser setIsOpen={setCreateUserModalActive} role={role}/></Modal>
        </Navbar>
    )
}

export default Navigation;