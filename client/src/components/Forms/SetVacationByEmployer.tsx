import { Button, Form } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import { useTypeSelector } from '../../hooks/useTypedSelector';
import { useAction } from '../../hooks/useAction';
import { useEffect, useState } from "react";
import {CheckCircleFill} from 'react-bootstrap-icons'
import "../../style/Button.css"
import MySelect from '../../components/UI/select/MySelect'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

type Props = {
    setIsOpen: (isOpen: boolean) => void;
    employerId: string;
}

const SetVacationByEmployer = ({ setIsOpen, employerId }: Props) => {

    const {fetchUsers, fetchStatusCandidates, fetchMainVacationDurations, createVacation} = useAction()
    const { auth } = useTypeSelector(state => state._auth);
    const { mainVacationDurations } = useTypeSelector(state => state._mainVacationDuration);

    useEffect(() => {
        fetchStatusCandidates()
        fetchMainVacationDurations()
    }, [])

    const [selectedSortLocation, setSelectedSortLocation] = useState('')

    let selectLocation: any = [];
    mainVacationDurations.map(loc => {
        let newItem = {
            "value": loc._id,
            "name": loc.name
        };
        selectLocation.push(newItem);
    })

    const setSortLocation = (sort: string) => {
        setSelectedSortLocation(sort)
    }

        //  employerId

    <MySelect value={selectedSortLocation}
        onChange={setSortLocation}
        defaultValue='Выбрать длительность'
        options={selectLocation}
    />

    const handleSubmit = async( event: React.SyntheticEvent) => {
        event.preventDefault();
        createVacation(employerId, selectedSortLocation)
        setIsOpen(false)
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>

                    <MySelect value={selectedSortLocation}
                            onChange={setSortLocation}
                            defaultValue='Длительность отпуска'
                            options={selectLocation}
                    />

                <Button variant="primary" type="submit" className="accept-vacation-btn">
                    <CheckCircleFill />
                </Button>
            </Form>
        </div>
    )
}

export default SetVacationByEmployer;