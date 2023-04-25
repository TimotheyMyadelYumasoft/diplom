import { Button, Form } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import { useTypeSelector } from '../../hooks/useTypedSelector';
import { useAction } from '../../hooks/useAction';
import { useState } from "react";

type Props = {
    setIsOpen: (isOpen: boolean) => void;
    role: string
}

const CreateUser = ({ setIsOpen, role }: Props) => {

    const {fetchUsers} = useAction()
    const { auth } = useTypeSelector(state => state.auth);

    const [ Email, setEmail] = useState<string>('')
    const [ Password, setPassword ] = useState<string>('')


    const requiredTrue = true;
    const {createUser} = useAction()
    const handleSubmit = async( event: React.SyntheticEvent) => {
        event.preventDefault();
            createUser(Email, Password, role);
            setIsOpen(false);
            fetchUsers()
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-1" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={Email} onChange={ e => setEmail(e.target.value)} required/>
                </Form.Group>

                <Form.Group className="mb-1" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={Password}  onChange={e => setPassword(e.target.value)} required/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default CreateUser;