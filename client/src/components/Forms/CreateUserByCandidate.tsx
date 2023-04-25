import { Button, Form } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import { useTypeSelector } from '../../hooks/useTypedSelector';
import { useAction } from '../../hooks/useAction';
import { useState } from "react";

type Props = {
    setIsOpen: (isOpen: boolean) => void;
    employerId: string;
}

const CreateUserByCandidate = ({ setIsOpen, employerId }: Props) => {

    const {fetchUsers} = useAction()
    const { auth } = useTypeSelector(state => state.auth);

    const [ Password, setPassword] = useState<string>('')


    const requiredTrue = true;
    const {approveCandidate} = useAction()
    const handleSubmit = async( event: React.SyntheticEvent) => {
        event.preventDefault();
        approveCandidate(employerId, Password, 'hired');
        setIsOpen(false);
        fetchUsers()
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-1" controlId="formBasicEmail">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" value={Password} onChange={ e => setPassword(e.target.value)} required/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default CreateUserByCandidate;