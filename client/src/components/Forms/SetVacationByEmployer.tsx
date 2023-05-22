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

    const {fetchUsers, fetchStatusCandidates, fetchMainVacationDurations, updateVacationMainDurationByUser, updateAdditionalDuration, fetchVacations} = useAction()
    const { auth } = useTypeSelector(state => state._auth);
    const { mainVacationDurations } = useTypeSelector(state => state._mainVacationDuration);
    const { vacations } = useTypeSelector(state => state._vacation);
    const [isCheck, setIsCheck] = useState(false)
    const [AdditionalDuration, setAdditionalDuration] = useState(0)

    useEffect(() => {
        fetchStatusCandidates()
        fetchMainVacationDurations()
        fetchVacations()
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
        vacations.map( vac => {
            if(vac.user == employerId){
                updateAdditionalDuration(vac._id, AdditionalDuration)
                if(selectedSortLocation){
                    updateVacationMainDurationByUser(employerId, selectedSortLocation)
                }
                setIsOpen(false)
            }
        })
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>

                <Form.Group style={{marginLeft: '6rem', width: '60%'}} controlId="formBasicAdditionalDurationCandidate">
                    <Form.Label>Дополнительный отпуск</Form.Label>
                    <div style={{display: 'flex', msFlexDirection: 'column', flexWrap: 'wrap'}}>
                        <Form.Control type="number" placeholder="AdditionalDuration" value={AdditionalDuration}  onChange={e => setAdditionalDuration(Number(e.target.value))} required />
                    </div>
                </Form.Group>
                <MySelect value={selectedSortLocation}
                    onChange={setSortLocation}
                    defaultValue='Длительность отпуска'
                    options={selectLocation}
                />

                <Button variant="primary" type="submit" className="accept-vacation-btn" style={{ marginLeft: '6rem'}}>
                    <CheckCircleFill />
                </Button>
            </Form>
        </div>
    )
}

export default SetVacationByEmployer;