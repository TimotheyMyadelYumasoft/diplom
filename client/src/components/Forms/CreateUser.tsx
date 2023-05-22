import { Button, Form } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import { useTypeSelector } from '../../hooks/useTypedSelector';
import { useAction } from '../../hooks/useAction';
import { useEffect, useState } from "react";
import { fetchRoles } from "../../store/action-creators/role-ac";
import { DatePicker } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import {PersonFillAdd} from 'react-bootstrap-icons'
import "../../style/Button.css"

type Props = {
    setIsOpen: (isOpen: boolean) => void;
    userRole: string
}

const CreateUser = ({ setIsOpen, userRole }: Props) => {

    const {fetchUsers, fetchStatusCandidates} = useAction()
    const { auth } = useTypeSelector(state => state._auth);
    const {roles} = useTypeSelector(state => state._role)
    const {statusCandidates} = useTypeSelector(state => state._statusCandidate)

    useEffect(() => {
        fetchRoles();
        fetchStatusCandidates();
        statusCandidates.map(status => {
            if(status.name == 'Принят'){
            setStatus(status._id)
            }
        });
    }, [])

    const currentDay = dayjs();
    const currentDayAsDayjs = dayjs(currentDay);
    const [ Email, setEmail] = useState<string>('')
    const [ Password, setPassword ] = useState<string>('')
    const [ Status, setStatus ] = useState<string>('')
    const [ BirthDay, setBirthDay ] = useState(currentDayAsDayjs)
    const [ HiredDate, setHiredDate ] = useState(currentDayAsDayjs)

    const requiredTrue = true;
    const {createUser} = useAction()
    const handleSubmit = async( event: React.SyntheticEvent) => {
        console.log(Status)
        event.preventDefault();
        roles.map(role => {
            if(role.name == userRole){
                createUser(Email, Password, role._id, Status, BirthDay.toString(), HiredDate.toString());
                console.log(userRole)
                setIsOpen(false);
                fetchUsers()
            }
         })
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-1" controlId="formBasicEmailCreateUser">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={Email} onChange={ e => setEmail(e.target.value)} required/>
                </Form.Group>

                <Form.Group className="mb-1" controlId="formBasicPasswordCreateUser">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={Password}  onChange={e => setPassword(e.target.value)} required/>
                </Form.Group>

                <Form.Group className="mb-1" controlId="formBasicEmailCandidate">
                            <DatePicker
                                id="startDate"
                                name="startDate"
                                format="DD-MM-YYYY"
                                value={BirthDay}
                                onChange={(date) => setBirthDay(dayjs(date))}
                            />
                </Form.Group>

                <Form.Group className="mb-1" controlId="formBasicEmailCandidate">
                            <DatePicker
                                id="startDate"
                                name="startDate"
                                format="DD-MM-YYYY"
                                value={HiredDate}
                                onChange={(date) => setHiredDate(dayjs(date))}
                            />
                </Form.Group>

                <Button variant="primary" type="submit" className="accept-vacation-btn">
                    <PersonFillAdd />
                </Button>
            </Form>
        </div>
    )
}

export default CreateUser;