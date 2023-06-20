import { Button, Form } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import { useTypeSelector } from '../../hooks/useTypedSelector';
import { useAction } from '../../hooks/useAction';
import { useEffect, useState } from "react";
import MySelect from "../UI/select/MySelect";
import {PersonAdd} from 'react-bootstrap-icons'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

type Props = {
    setIsOpen: (isOpen: boolean) => void;
    employerId: string;
}

const EditUserFrom = ({ setIsOpen, employerId }: Props) => {

    const {fetchUsers, fetchPositions, fetchLocations, fetchGenders} = useAction()
    const { _position, _location, _gender} = useTypeSelector(state => state);

    useEffect(() => {
        fetchPositions()
        fetchLocations()
        fetchGenders()
    }, [])

    const [ Position, setPosition ] = useState<string>('')
    const [ Location, setLocation ] = useState<string>('')
    const [ Gender, setGender ] = useState<string>('')

    const { auth } = useTypeSelector(state => state._auth);

    const [ Email, setEmail] = useState<string>('')
    const [ FirstName, setFirstName ] = useState<string>('')
    const [ Surname, setSurname ] = useState<string>('')
    const [ Phonenumber, setPhonenumber ] = useState<string>('')


    const requiredTrue = true;
    const {updateThisUser} = useAction()
    const handleSubmit = async( event: React.SyntheticEvent) => {
        event.preventDefault();
        if(!Position || !Location || !Gender){
            alert('Выберите необходимые поля')
            return setIsOpen(false);
        }
        if(employerId == ''){
            updateThisUser(auth.user._id, Position, Location, Email, FirstName, Surname, Gender, Phonenumber);
            setIsOpen(false);
        }
        else {
            updateThisUser(employerId, Position, Location, Email, FirstName, Surname, Gender, Phonenumber);
            setIsOpen(false);
            fetchUsers()
        }
    }

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

                <MySelect value={Position}
                onChange={setPosition}
                defaultValue='Выбрать должность'
                options={selectPosition}
                />

                <MySelect value={Gender}
                onChange={setGender}
                defaultValue='Выбрать пол'
                options={selectGender}
                />

                <MySelect value={Location}
                onChange={setLocation}
                defaultValue='Выбрать филиал'
                options={selectLocation}
                />

                <OverlayTrigger
                    key={'bottom'}
                    placement={'bottom'}
                    overlay={
                        <Tooltip id={`tooltip-${'bottom'}`}>
                        Изменить пользователя
                        </Tooltip>
                    }>
                    <Button type='submit' className="common-btn"><PersonAdd/></Button>
                </OverlayTrigger>
            </Form>
        </div>
    )
}

export default EditUserFrom;