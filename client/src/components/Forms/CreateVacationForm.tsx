import { Button, Form } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import { useTypeSelector } from '../../hooks/useTypedSelector';
import { useAction } from '../../hooks/useAction';
import { useState } from "react";
import { DatePicker, DatePickerProps } from "antd";
import { useForm } from "react-hook-form";

type Props = {
    setIsOpen: (isOpen: boolean) => void;
}

const EditUserFrom = ({ setIsOpen }: Props) => {
    const { auth } = useTypeSelector(state => state.auth);

    const [ Email, setEmail] = useState<string>('')
    const [ FirstName, setFirstName ] = useState<string>('')
    const [ Surname, setSurname ] = useState<string>('')
    const [ Phonenumber, setPhonenumber ] = useState<string>('')
    const [ Gender, setGender ] = useState<string>('')
    const [ Department, setDepartment ] = useState<string>('')


    const requiredTrue = true;
    const {updateThisUser} = useAction()


    const { handleSubmit } = useForm<{
        startDate: String;
        endDate: string;
    }>();

    return (
        <div>
            aasd
            {/* <form
                onSubmit={handleSubmit((data) => {
                    console.log("data ready to submit", data)
                })}
                style={{"opacity: 1; pointer-events: all;"}}>
                    <div>
                        <DatePicker />
                    </div>
                    <br />
                    <button>Submit</button>
            </form> */}

            {/* <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={Email} onChange={ e => setEmail(e.target.value)} required/>
                </Form.Group>

                <Form.Group className="mb-1" controlId="formBasicFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Firstname" value={FirstName}  onChange={e => setFirstName(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-1" controlId="formBasicSurname">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control type="text" placeholder="Surname" value={Surname}  onChange={e => setSurname(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-1" controlId="formBasicPhonenumber">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="Phonenumber" placeholder="Phonenumber" value={Phonenumber}  onChange={e => setPhonenumber(e.target.value)} required />
                </Form.Group>
                <Form.Group className="mb-1" controlId="formBasicGender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control type="text" placeholder="Gender" value={Gender}  onChange={e => setGender(e.target.value)}  required/>
                </Form.Group>
                <Form.Group className="mb-1" controlId="formBasicDepartment">
                    <Form.Label>Department</Form.Label>
                    <Form.Control type="text" placeholder="Department" value={Department}  onChange={e => setDepartment(e.target.value)} required/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form> */}
        </div>
    )
}

export default EditUserFrom;