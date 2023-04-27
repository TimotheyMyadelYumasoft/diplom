import { Button, Form } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import { useTypeSelector } from '../../hooks/useTypedSelector';
import { useAction } from '../../hooks/useAction';
import { useState } from "react";
import { Control, Controller, useForm } from "react-hook-form";
import dayjs from "dayjs";
import { DatePicker, Select, Space, TimePicker } from 'antd';

type Props = {
    setIsOpen: (isOpen: boolean) => void;
    employerId: string;
}

const EditBirthday = ({ setIsOpen, employerId }: Props) => {

    const {refresh} = useAction()
    const { auth } = useTypeSelector(state => state.auth);

    const [ Email, setEmail] = useState<string>('')

    const {updateThisUser, editBirthdayUser} = useAction()
    const handleSubmitEditBirthday = async( event: React.SyntheticEvent) => {
        event.preventDefault();
        console.log('auth.user.id ')
        console.log(DateOfEvent)
        editBirthdayUser(auth.user.id ,DateOfEvent)
        setIsOpen(false);
        refresh()
    }

    const { handleSubmit, control, watch } = useForm<{
        startDate: string;
        endDate: string;
      }>();
    const [selectedSort, setSelectedSort] = useState('')
    const [ DateOfEvent, setDateOfEvent] = useState<string>('')


    return (
        <div>
            <Form onSubmit={handleSubmitEditBirthday}>
                <div>
                    <form
                    onSubmit={handleSubmit((data) => {
                        console.log("data ready to submit", data);
                    })}
                    >
                        <div>
                            <br />
                            <span>Дата рождения </span>
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

export default EditBirthday;