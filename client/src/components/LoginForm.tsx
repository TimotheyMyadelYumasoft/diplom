import React, {FC, useEffect, useState} from 'react';
import { useTypeSelector } from '../hooks/useTypedSelector';
import { useAction } from '../hooks/useAction';

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

    return (
        <div>
            <h1>{isAuth ? `Пользователь ${auth.user?.email} авторизован`: 'Авторизуйтесь'}</h1>
            <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder='Email'
            />
            <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder='Password'
            />
            <button onClick={() => login(email, password)}>
                Login
            </button>
            <button onClick={() => logout()}>
                logout
            </button>
        </div>
    );
};

export default LoginForm;