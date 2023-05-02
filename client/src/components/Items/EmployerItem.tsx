import { Form } from "react-bootstrap";
import { IUser } from "../../types/user"
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
import {PencilSquare , Trash, Trash3Fill} from 'react-bootstrap-icons'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


type Props = {
    empl: IUser
}
const EmployerItem = ({empl}: Props) => {

    const [modalEditActive, setEditModalActive] = useState(false);
    const [modalCreateCandidateActive, setCreateCandidateModalActive] = useState(false);
    const [selectedSort, setSelectedSort] = useState('')
    const nav = useNavigate()
    const {deleteUserById, fetchUsers, setStatusCandidate} = useAction()
    const {auth} = useTypeSelector(state => state.auth)

    const sureDelete = () => {
        let res = prompt('Вы точно хотите удалить пользователя из системы? Напишите Да, чтобы подтвердить', 'Нет')?.toLowerCase();
        let yes = 'да'.toLowerCase();
        console.log(res)
        if(res == yes){
            deleteUserById(empl._id);
            fetchUsers()
        }
    }

    const sureClear = () => {
        let res = prompt('Вы точно хотите удалить кандидата из списка? Напишите Да, чтобы подтвердить', 'Нет')?.toLowerCase();
        let yes = 'да'.toLowerCase();
        console.log(res)
        if(res == yes){
            setStatusCandidate(empl._id, 'hired');
        }
    }

    const setStatus = (sort: string) => {
        setSelectedSort(sort)
        console.log(sort)
        setStatusCandidate(empl._id, sort);
    }

    return (
      <Card style={{ width: '25rem', margin:'2rem 0rem 2rem 0rem', display: 'grid', justifyItems: 'center'}}>
        { empl.password
        ?
            <Card.Img variant="top" src='https://www.yumasoft.com/fonts/svg/yumasoft_logo.svg' style={{width: '75%', height: '300px', borderRadius: '200px', backgroundColor: 'black', alignItems: 'center'}} />
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
                Страна проживания: {empl.location}
            </Card.Text>
            <Card.Text>
                Отдел: {empl.departament}
            </Card.Text>
            { auth.user.role=='RECRUITER' || auth.user.role=='ADMIN'
            ?
            <>
                { empl.statusCandidate!=='hired' && !empl.password
                ?
                <MySelect value={selectedSort}
                    onChange={setStatus}
                    defaultValue='изменить статус кандидата'
                    options={[
                        {value: 'rejected', name: 'отклонен'},
                        {value: 'wait', name: 'ожидает'},
                        {value: 'review', name: 'рассматривается'},
                        {value: 'accepted', name: 'найм кандидата'}
                    ]}/>
                : ''
                }
            </>
            :
            ''
            }
            { auth.user.role=='RECRUITER' || auth.user.role=='ADMIN'
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
                    <Button onClick={() => setEditModalActive(true)} style={{width: '50px', height: '45px', backgroundColor: '#77C66E', marginLeft: '2rem', borderColor: '#77C66E'}}><PencilSquare /></Button>
                </OverlayTrigger>
                <OverlayTrigger
                    key={'bottom'}
                    placement={'bottom'}
                    overlay={
                        <Tooltip id={`tooltip-${'bottom'}`}>
                        {empl.password ? 'Удалить пользователя' : 'Удалить кандидата из базы'}
                        </Tooltip>
                    }>
                    <Button onClick={() => sureDelete()} style={{width: '50px', height: '45px', backgroundColor: '#77C66E', marginLeft: '2rem', borderColor: '#77C66E'}}><Trash /></Button>
                </OverlayTrigger>
                { empl.statusCandidate=='accepted' && !empl.password
                ?
                <Button onClick={() => setCreateCandidateModalActive(true)} style={{width: '50px', height: '45px', backgroundColor: '#77C66E', marginLeft: '2rem', borderColor: '#77C66E'}}>Создать пользователя</Button>
                : ''
                }

                { empl.statusCandidate!=='hired' && empl.statusCandidate=='accepted'
                ?
                <OverlayTrigger
                    key={'bottom'}
                    placement={'bottom'}
                    overlay={
                        <Tooltip id={`tooltip-${'bottom'}`}>
                        Удалить кандидата из списка.
                        </Tooltip>
                    }>
                    <Button onClick={() => sureClear()} style={{width: '50px', height: '45px', backgroundColor: '#77C66E', marginLeft: '2rem', borderColor: '#77C66E'}}><Trash3Fill /></Button>
                </OverlayTrigger>
                : ''
                }
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