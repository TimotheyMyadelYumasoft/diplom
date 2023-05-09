import { Button, Form } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import { useTypeSelector } from '../../hooks/useTypedSelector';
import { useAction } from '../../hooks/useAction';
import { useState } from "react";

type Props = {
    setIsOpen: (isOpen: boolean) => void;
    employerId: string;
}

const EditUserFrom = ({ setIsOpen, employerId }: Props) => {

    const {fetchUsers} = useAction()
    const { auth } = useTypeSelector(state => state.auth);

    const [ Email, setEmail] = useState<string>('')
    const [ FirstName, setFirstName ] = useState<string>('')
    const [ Surname, setSurname ] = useState<string>('')
    const [ Phonenumber, setPhonenumber ] = useState<string>('')
    const [ Gender, setGender ] = useState<string>('')
    const [ Department, setDepartment ] = useState<string>('')
    const [ Country, setCountry ] = useState<string>('')


    const requiredTrue = true;
    const {updateThisUser} = useAction()
    const handleSubmit = async( event: React.SyntheticEvent) => {
        event.preventDefault();
        if(employerId == ''){
            updateThisUser(auth.user.id, Email, FirstName, Surname, Gender, Phonenumber, Department, Country);
            setIsOpen(false);
        }
        else {
            updateThisUser(employerId, Email, FirstName, Surname, Gender, Phonenumber, Department, Country);
            setIsOpen(false);
            fetchUsers()
        }
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-1" controlId="formBasicEmailEditUser">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={Email} onChange={ e => setEmail(e.target.value)} required/>
                </Form.Group>

                <Form.Group className="mb-1" controlId="formBasicFirstNameEditUser">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Firstname" value={FirstName}  onChange={e => setFirstName(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-1" controlId="formBasicSurnameEditUser">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control type="text" placeholder="Surname" value={Surname}  onChange={e => setSurname(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-1" controlId="formBasicPhonenumberEditUser">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="Phonenumber" placeholder="Phonenumber" value={Phonenumber}  onChange={e => setPhonenumber(e.target.value)} required />
                </Form.Group>
                <Form.Group className="mb-1" controlId="formBasicGenderEditUser">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control type="text" placeholder="Gender" value={Gender}  onChange={e => setGender(e.target.value)}  required/>
                </Form.Group>
                <Form.Group className="mb-1" controlId="formBasicDepartmentEditUser">
                    <Form.Label>Department</Form.Label>
                    <Form.Control type="text" placeholder="Department" value={Department}  onChange={e => setDepartment(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCountryEditUser">
                    <Form.Label>Страна проживания</Form.Label>
                    <Form.Control type="text" placeholder="Country" value={Country}  onChange={e => setCountry(e.target.value)} required/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default EditUserFrom;