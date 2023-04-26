import { Button, Form } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import { useTypeSelector } from '../../hooks/useTypedSelector';
import { useAction } from '../../hooks/useAction';
import { useState } from "react";
import { IUser } from "../../types/user";
import MySelect from "../UI/select/MySelect";
import RHFDatePickerField from "../UI/RHFDatePickerField";
import { Control, Controller, useForm } from "react-hook-form";
import dayjs from "dayjs";



import React from 'react';
import type { DatePickerProps, TimePickerProps } from 'antd';
import { DatePicker, Select, Space, TimePicker } from 'antd';


type Props = {
    setIsOpen: (isOpen: boolean) => void;
    employers: IUser[];
}

const CreateEventForm = ({ setIsOpen, employers }: Props) => {

    const { handleSubmit, control, watch } = useForm<{
        startDate: string;
        endDate: string;
      }>();

    const { auth } = useTypeSelector(state => state.auth);


    const [selectedSort, setSelectedSort] = useState('')

    const [ Title, setTitle] = useState<string>('')
    const [ Description, setDescription ] = useState<string>('')
    const [ Participants, setParticipants ] = useState<Array<string>>([])
    const [ DateOfEvent, setDateOfEvent] = useState<string>('')


    const requiredTrue = true;
    const {createEvent, fetchAllEvents} = useAction()
    const handleSubmitEventForm = async( event: React.SyntheticEvent) => {
        event.preventDefault();
            createEvent(Participants, Title, Description, DateOfEvent)
            setIsOpen(false);
            fetchAllEvents()
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
            <Form onSubmit={handleSubmitEventForm}>

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
                            <div key={user._id}>
                                {participant==user._id ? user.firstname+' '+user.secondname : ''}
                            </div>
                        )}
                    </>
                )}
                </div>

                <div>
                    <form
                    onSubmit={handleSubmit((data) => {
                        console.log("data ready to submit", data);
                    })}
                    >
                        <div>
                            <br />
                            <span>Дата проведения мероприятия </span>
                            <DatePicker picker='date' onChange={(value) => setDateOfEvent(dayjs(value).toString())} />
                        </div>
                        <br />
                    </form>
                </div>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default CreateEventForm;