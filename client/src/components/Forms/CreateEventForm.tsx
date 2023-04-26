import { Button, Form } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import { useTypeSelector } from '../../hooks/useTypedSelector';
import { useAction } from '../../hooks/useAction';
import { useState } from "react";
import { IUser } from "../../types/user";
import MySelect from "../UI/select/MySelect";

type Props = {
    setIsOpen: (isOpen: boolean) => void;
    employers: IUser[];
}

const CreateEventForm = ({ setIsOpen, employers }: Props) => {

    const {fetchUsers} = useAction()
    const { auth } = useTypeSelector(state => state.auth);


    const [selectedSort, setSelectedSort] = useState('')

    const [ Title, setTitle] = useState<string>('')
    const [ Description, setDescription ] = useState<string>('')
    const [ Participants, setParticipants ] = useState<Array<string>>([])


    const requiredTrue = true;
    const {createCandidate} = useAction()
    const handleSubmit = async( event: React.SyntheticEvent) => {
        event.preventDefault();
            // createCandidate(Email, FirstName, Surname, Gender, Phonenumber, Department);
            setIsOpen(false);
            fetchUsers()
    }

    const setUser = (sort: string) => {
        let isExist = false;
        setSelectedSort(sort)
        Participants.map(participant => {
            if(participant==sort){
                isExist = true;
            }
        })
        if(!isExist) {
            Participants.push(sort);
        }
    }

    let select: any = [];
    employers.map(employer => {
        let newItem = {
            "value": employer._id,
            "name": employer.firstname+' '+employer.secondname
        };
        select.push(newItem);
    })

    return (
        <div>
            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-1" controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Title" value={Title}  onChange={e => setTitle(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-1" controlId="formBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" aria-label="With textarea" value={Description}  onChange={e => setDescription(e.target.value)} required/>
                </Form.Group>

                <MySelect value={selectedSort}
                onChange={setUser}
                defaultValue='Выбрать участника'
                options={select}/>
                <div>
                Спикеры: {Participants.map( participant =>
                    <>
                        {employers.map( user =>
                            <div>
                                {participant==user._id ? user.firstname+' '+user.secondname : ''}
                            </div>
                        )}
                    </>
                )}
                </div>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default CreateEventForm;