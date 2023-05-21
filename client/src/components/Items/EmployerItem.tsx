import { Form } from "react-bootstrap";
import { IUser } from "../../types/user-type"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import Modal from '../Modal';
import EditUserFrom from '../Forms/EditUserFrom';
import CreateUserByCandidate from '../Forms/CreateUserByCandidate'
import { useEffect, useState } from "react";
import { useAction } from "../../hooks/useAction";
import MySelect from "../UI/select/MySelect";
import { useTypeSelector } from "../../hooks/useTypedSelector";
import {PencilSquare , Trash, Trash3Fill, PersonAdd} from 'react-bootstrap-icons'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import "../../style/Button.css"


type Props = {
    empl: IUser
}
const EmployerItem = ({empl}: Props) => {

    const [modalEditActive, setEditModalActive] = useState(false);
    const [modalCreateCandidateActive, setCreateCandidateModalActive] = useState(false);
    const [selectedSort, setSelectedSort] = useState('')
    const {deleteUserById, fetchUsers, setStatusCandidate, fetchRoleById, fetchStatusCandidates} = useAction()
    const {auth} = useTypeSelector(state => state._auth)
    const {role} = useTypeSelector(state => state._role)
    const {statusCandidate, statusCandidates} = useTypeSelector(state => state._statusCandidate)

    const {fetchPositions, fetchLocations, fetchGenders} = useAction()
    const { _position, _location, _gender} = useTypeSelector(state => state);

    useEffect(() => {
        fetchPositions()
        fetchLocations()
        fetchGenders()
    }, [])

    const [ Position, setPosition ] = useState<string>('')
    const [ Location, setLocation ] = useState<string>('')
    const [ Gender, setGender ] = useState<string>('')

    useEffect(() => {
        fetchRoleById(auth.user.role)
        fetchStatusCandidates()
    }, [])

    const sureDelete = () => {
        let res = prompt('Вы точно хотите удалить пользователя из системы? Напишите Да, чтобы подтвердить', 'Нет')?.toLowerCase();
        let yes = 'да'.toLowerCase();
        console.log(res)
        if(res == yes){
            deleteUserById(empl._id);
            fetchUsers()
        }
    }


    const setStatus = (sort: string) => {
        setSelectedSort(sort)
        setStatusCandidate(empl._id, sort);
        fetchUsers()
    }

    let selectStatusCandidate: any = [];
    statusCandidates.map(status => {
        let newItem = {
            "value": status._id,
            "name": status.name
        };
        if(newItem.name !== 'Принят')
        selectStatusCandidate.push(newItem);
    })

    return (
      <Card style={{ width: '25rem', margin:'2rem 0rem 2rem 0rem', display: 'grid', justifyItems: 'center'}}
        bg={'warning'}
      >
        { empl.password
        ?
            <>
            { empl.image
            ?
                <Card.Img
                variant="top"
                src={'http://localhost:5000/'+empl?.image}
                style={{width: '75%', height: '300px', borderRadius: '200px', backgroundColor: 'black', alignItems: 'center'}}
                />
            :
                <Card.Img
                variant="top"
                src='https://www.yumasoft.com/fonts/svg/yumasoft_logo.svg'
                style={{width: '75%', height: '300px', borderRadius: '200px', backgroundColor: 'black', alignItems: 'center'}}
                />
            }
            </>
        :
        ''
        }
        <Card.Body style={{alignContent: 'center'}}>
            <Card.Title>{empl.firstname} {empl.secondname}</Card.Title>
            <Card.Text>
                Email: {empl.email}
            </Card.Text>
            <Card.Text>
                Телефон: {empl.phoneNumber}
            </Card.Text>
            <Card.Text>
                Дата найма в компанию: {empl.hiredDate?.split('T')[0]}
            </Card.Text>
            <Card.Text>
                Страна проживания: { _location.locations.map(location =>
                <>
                    {location._id == empl.location
                    ?
                    location.city
                    :
                    ''
                    }
                </>
                )}
            </Card.Text>
            <Card.Text>
                Должность: { _position.positions.map(position =>
                <>
                    {position._id == empl.position
                    ?
                    position.name
                    :
                    ''
                    }
                </>
                )}
            </Card.Text>
            <Card.Text>
                Пол: {_gender.genders.map(gender =>
                <>
                    {gender._id == empl.gender
                    ?
                    gender.name
                    :
                    ''
                    }
                </>
                )}
            </Card.Text>
            { role.name=='RECRUITER' || role.name=='ADMIN'
            ?
            <>
                { empl.statusCandidate!=='hired' && !empl.password
                ?
                <MySelect value={selectedSort}
                    onChange={setStatus}
                    defaultValue='изменить статус кандидата'
                    options={selectStatusCandidate}/>
                : ''
                }
            </>
            :
            ''
            }
            { role.name=='RECRUITER' || role.name=='ADMIN'
            ?
            <>
                <OverlayTrigger
                    key={'bottom'}
                    placement={'bottom'}
                    overlay={
                        <Tooltip id={`tooltip-${'bottom'}`}>
                        {empl.password ? 'Изменить пользователя' : 'Изменить кандидата'}
                        </Tooltip>
                    }>
                    <Button onClick={() => setEditModalActive(true)} className="common-btn"><PencilSquare /></Button>
                </OverlayTrigger>
                <OverlayTrigger
                    key={'bottom'}
                    placement={'bottom'}
                    overlay={
                        <Tooltip id={`tooltip-${'bottom'}`}>
                        {empl.password ? 'Удалить пользователя' : 'Удалить кандидата из базы'}
                        </Tooltip>
                    }>
                    <Button onClick={() => sureDelete()} className="common-btn"><Trash /></Button>
                </OverlayTrigger>
                {statusCandidates.map(status =>
                        <>
                          {empl.statusCandidate==status._id && status.name == 'Приглашен'
                ?
                <OverlayTrigger
                    key={'bottom'}
                    placement={'bottom'}
                    overlay={
                        <Tooltip id={`tooltip-${'bottom'}`}>
                        Создать пользователя по кандидату
                        </Tooltip>
                    }>
                    <Button onClick={() => {setCreateCandidateModalActive(true); fetchUsers();}} className="common-btn"><PersonAdd/></Button>
                </OverlayTrigger>
                : ''
                    }
                    </>
                )}
            </>
            :
            ''
            }
            <td>
                <Modal active={modalEditActive} setActive={setEditModalActive} modalHeader='Изменить пользователя'><EditUserFrom setIsOpen={setEditModalActive} employerId={empl._id}/></Modal>
                <Modal active={modalCreateCandidateActive} setActive={setCreateCandidateModalActive} modalHeader='Создать пользователя'><CreateUserByCandidate setIsOpen={setCreateCandidateModalActive} employerId={empl._id}/></Modal>
            </td>
            </Card.Body>
        </Card>
    )
}

export default EmployerItem