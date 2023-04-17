import React, { FC } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button'
import { useAction } from '../hooks/useAction'
import { useNavigate } from 'react-router-dom'
import { useTypeSelector } from '../hooks/useTypedSelector';

const Navigation: FC = () => {
    const {auth, isAuth} = useTypeSelector(state => state.auth)
    const navigate = useNavigate();
    const {logout} = useAction()
    if(!isAuth) {
        navigate('/login')
    }

    return (
        <Navbar bg="dark" variant="dark">
        <Container className="ms-5">
            <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/users">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Separated link
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        <Button onClick={() => logout()} className="me-5">Logout</Button>
        </Navbar>
    )
}

export default Navigation;