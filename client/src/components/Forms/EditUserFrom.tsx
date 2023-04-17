import { Button, Form } from "react-bootstrap";
import { useTypeSelector } from '../../hooks/useTypedSelector';
import { useAction } from '../../hooks/useAction';
import { useState } from "react";

type Props = {
    setIsOpen: (isOpen: boolean) => void;
}

const EditUserFrom = ({ setIsOpen }: Props) => {
    const {user} = useTypeSelector(state => state.user);

    const [ Email, setEmail] = useState<string>('')
    const [ FirstName, setFirstName ] = useState<string>('')
    const [ Surname, setSurname ] = useState<string>('')
    const [ Phonenumber, setPhonenumber ] = useState<string>('')
    const [ Gender, setGender ] = useState<string>('')
    const [ Department, setDepartment ] = useState<string>('')

    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={Email} onChange={ e => setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-1" controlId="formBasicFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Firstname" value={FirstName}  onChange={e => setFirstName(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-1" controlId="formBasicSurname">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control type="text" placeholder="Surname" value={Surname}  onChange={e => setSurname(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-1" controlId="formBasicPhonenumber">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="text" placeholder="Phonenumber" value={Phonenumber}  onChange={e => setPhonenumber(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-1" controlId="formBasicGender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control type="text" placeholder="Gender" value={Gender}  onChange={e => setGender(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-1" controlId="formBasicDepartment">
                    <Form.Label>Department</Form.Label>
                    <Form.Control type="text" placeholder="Department" value={Department}  onChange={e => setDepartment(e.target.value)}/>
                </Form.Group>

                {/* <Button variant="primary" onClick={ () => updateUser()}>
                    Submit
                </Button> */}
            </Form>
        </div>
    )
}

export default EditUserFrom;