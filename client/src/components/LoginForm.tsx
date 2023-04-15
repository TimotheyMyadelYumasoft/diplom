import React, {FC, useEffect, useState} from 'react';
import { useTypeSelector } from '../hooks/useTypedSelector';
import { useAction } from '../hooks/useAction';

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const {auth, isAuth} = useTypeSelector(state => state.auth)

    const {login} = useAction()

    useEffect(() => {

    }, [])

    return (
        <div>
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
            <button>
                Registration
            </button>
        </div>
    );
};

export default LoginForm;