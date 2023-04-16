import React, {FC, useEffect, useState} from 'react';
import { useTypeSelector } from '../hooks/useTypedSelector';
import { useAction } from '../hooks/useAction';
// import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const {auth, isAuth} = useTypeSelector(state => state.auth)

    const {login, refresh, logout} = useAction()

    useEffect(() => {
        if(localStorage.getItem('token')){
            refresh();
        }
    }, [])

    const navigate = useNavigate();

    if(isAuth) {
        navigate('/');
    }

    return (
        <Card style={{ width: '18rem', marginTop: '15%', marginLeft: '41%'}}>
            <Card.Img variant='top' src='https://www.yumasoft.com/fonts/svg/yumasoft_logo.svg' />
            <Card.Body>
                <Form >
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="disabledTextInput">Email</Form.Label>
                            <Form.Control id="disabledTextInput" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="disabledTextInput">Password</Form.Label>
                            <Form.Control id="disabledTextInput" placeholder="Password" type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                        </Form.Group>
                        <Button onClick={() => login(email, password)} >Login</Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default LoginForm;