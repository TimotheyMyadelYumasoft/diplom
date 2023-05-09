import { Button, Form } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import { useTypeSelector } from '../../hooks/useTypedSelector';
import { useAction } from '../../hooks/useAction';
import { useState } from "react";

type Props = {
    setIsOpen: (isOpen: boolean) => void;
}

const CreateCandidate = ({ setIsOpen }: Props) => {

    const {fetchUsers} = useAction()
    const { auth } = useTypeSelector(state => state.auth);

    const [ Email, setEmail] = useState<string>('')
    const [ FirstName, setFirstName ] = useState<string>('')
    const [ Surname, setSurname ] = useState<string>('')
    const [ Phonenumber, setPhonenumber ] = useState<string>('')
    const [ Gender, setGender ] = useState<string>('')
    const [ Department, setDepartment ] = useState<string>('')


    const requiredTrue = true;
    const {createCandidate} = useAction()
    const handleSubmit = async( event: React.SyntheticEvent) => {
        event.preventDefault();
            createCandidate(Email, FirstName, Surname, Gender, Phonenumber, Department);
            setIsOpen(false);
            fetchUsers()
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-1" controlId="formBasicEmailCandidate">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={Email} onChange={ e => setEmail(e.target.value)} required/>
                </Form.Group>

                <Form.Group className="mb-1" controlId="formBasicFirstNameCandidate">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Firstname" value={FirstName}  onChange={e => setFirstName(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-1" controlId="formBasicSurnameCandidate">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control type="text" placeholder="Surname" value={Surname}  onChange={e => setSurname(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-1" controlId="formBasicPhonenumberCandidate">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="Phonenumber" placeholder="Phonenumber" value={Phonenumber}  onChange={e => setPhonenumber(e.target.value)} required />
                </Form.Group>
                <Form.Group className="mb-1" controlId="formBasicGenderCandidate">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control type="text" placeholder="Gender" value={Gender}  onChange={e => setGender(e.target.value)}  required/>
                </Form.Group>
                <Form.Group className="mb-1" controlId="formBasicDepartmentCandidate">
                    <Form.Label>Department</Form.Label>
                    <Form.Control type="text" placeholder="Department" value={Department}  onChange={e => setDepartment(e.target.value)} required/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default CreateCandidate;