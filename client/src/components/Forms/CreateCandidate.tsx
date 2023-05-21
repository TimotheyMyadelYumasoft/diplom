import { Button, Form } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import { useTypeSelector } from '../../hooks/useTypedSelector';
import { useAction } from '../../hooks/useAction';
import { useEffect, useState } from "react";
import MySelect from "../UI/select/MySelect";
import { DatePicker } from 'antd';
import dayjs, { Dayjs } from 'dayjs';

type Props = {
    setIsOpen: (isOpen: boolean) => void;
}

const CreateCandidate = ({ setIsOpen }: Props) => {

    const {fetchUsers, fetchPositions, fetchLocations, fetchGenders, fetchRoles, fetchStatusCandidates, createCandidate} = useAction()
    const { _position, _location, _gender, _role, _statusCandidate } = useTypeSelector(state => state);

    const [ Email, setEmail] = useState<string>('')
    const [ FirstName, setFirstName ] = useState<string>('')
    const [ Surname, setSurname ] = useState<string>('')
    const [ Phonenumber, setPhonenumber ] = useState<string>('')

    const currentDay = dayjs();
    const currentDayAsDayjs = dayjs(currentDay);
    const [ BirthDay, setBirthDay ] = useState(currentDayAsDayjs)

    const [ Position, setPosition ] = useState<string>('')
    const [ Location, setLocation ] = useState<string>('')
    const [ Gender, setGender ] = useState<string>('')

    const handleSubmit = async( event: React.SyntheticEvent) => {
        event.preventDefault();
            createCandidate(FirstName, Surname, Email, Phonenumber, Position, Location, Gender, BirthDay.toString(), selectRole, selectStatusCandidate);
            setIsOpen(false);
            fetchUsers()
    }


    useEffect(() => {
        fetchPositions()
        fetchLocations()
        fetchGenders()
        fetchRoles()
        fetchStatusCandidates()
    }, [])

    let selectPosition: any = [];
    _position.positions.map(position => {
        let newItem = {
            "value": position._id,
            "name": position.name
        };
        selectPosition.push(newItem);
    })

    let selectGender: any = [];
    _gender.genders.map(gender => {
        let newItem = {
            "value": gender._id,
            "name": gender.name
        };
        selectGender.push(newItem);
    })

    let selectLocation: any = [];
    _location.locations.map(location => {
        let newItem = {
            "value": location._id,
            "name": location.city
        };
        selectLocation.push(newItem);
    })

    let selectRole: any = [];
    _role.roles.map(role => {
        if(role.name=='USER') selectRole = role._id;
    })

    let selectStatusCandidate: any = [];
    _statusCandidate.statusCandidates.map(status => {
        if(status.name=='Ожидает') selectStatusCandidate= status._id;
    })


    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-1" controlId="formBasicFirstNameCandidate">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Firstname" value={FirstName}  onChange={e => setFirstName(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-1" controlId="formBasicSurnameCandidate">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control type="text" placeholder="Surname" value={Surname}  onChange={e => setSurname(e.target.value)} required/>
                </Form.Group>

                <Form.Group className="mb-1" controlId="formBasicEmailCandidate">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={Email} onChange={ e => setEmail(e.target.value)} required/>
                </Form.Group>

                <Form.Group className="mb-1" controlId="formBasicPhonenumberCandidate">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="Phonenumber" placeholder="Phonenumber" value={Phonenumber}  onChange={e => setPhonenumber(e.target.value)} required />
                </Form.Group>

                <MySelect value={Position}
                onChange={setPosition}
                defaultValue='Выбрать позицию'
                options={selectPosition}
                />

                <MySelect value={Gender}
                onChange={setGender}
                defaultValue='Выбрать пол'
                options={selectGender}
                />

                <MySelect value={Location}
                onChange={setLocation}
                defaultValue='Выбрать город'
                options={selectLocation}
                />
                <div>
                {selectRole}
                <br/>
                {selectStatusCandidate}
                <br/>
                {BirthDay.toString()}
                </div>

                <Form.Group className="mb-1" controlId="formBasicEmailCandidate">
                            <DatePicker
                                id="startDate"
                                name="startDate"
                                format="DD-MM-YYYY"
                                value={BirthDay}
                                onChange={(date) => setBirthDay(dayjs(date))}
                            />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default CreateCandidate;