import React, {FC, useEffect, useState} from 'react';
import { useTypeSelector } from '../hooks/useTypedSelector';
import { useAction } from '../hooks/useAction';
import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

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
        <Form className='login-form'
            initialValues={{remember: true}}
            onFinish={ () => {login(email,password)} }
        >
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Пожалуйста, заполните email'}]}
                >
                    <Input
                        className='login-form-input'
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        type='text'
                        placeholder='Email'/>
                </Form.Item>
                <Form.Item name="password"
                rules={[{ required: true, message: 'Пожалуйста, заполните password'}]}
                >
                    <Input
                        className='login-form-input'
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                        placeholder='Password'/>
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit' className="login-form-button" >
                        Login
                    </Button>
                </Form.Item>
        </Form>
    );
};

export default LoginForm;