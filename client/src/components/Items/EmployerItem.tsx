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


type Props = {
    empl: IUser
}
const EmployerItem = ({empl}: Props) => {

    const [modalEditActive, setEditModalActive] = useState(false);
    const [modalCreateCandidateActive, setCreateCandidateModalActive] = useState(false);
    const [selectedSort, setSelectedSort] = useState('')
    const nav = useNavigate()
    const {deleteUserById, fetchUsers, setStatusCandidate} = useAction()

    const sureDelete = () => {
        let res = prompt('Вы точно хотите удалить пользователя из системы? Напишите Да, чтобы подтвердить', 'Нет')?.toLowerCase();
        let yes = 'да'.toLowerCase();
        console.log(res)
        if(res == yes){
            deleteUserById(empl._id);
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
      <Card >
      {/* <Card.Img variant="top" src='https://www.yumasoft.com/fonts/svg/yumasoft_logo.svg' style={{width: '100%', height: '400px', borderRadius: '200px', backgroundColor: 'black'}} /> */}
        <Card.Body style={{alignContent: 'center'}}>
            <Card.Title>{empl.firstname} {empl.secondname}</Card.Title>
            <Card.Text>
                Email: {empl.email}
            </Card.Text>
            <Card.Text>
                Телефон: {empl.phoneNumber}
            </Card.Text>
            <Card.Text>
                Дата найма в компанию: {empl.hiredDate}
            </Card.Text>
            <Card.Text>
                Страна проживания: {empl.location}
            </Card.Text>
            <Card.Text>
                Отдел: {empl.departament}
            </Card.Text>
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
            <Button onClick={() => setEditModalActive(true)} style={{width: '150px', height: '100px', backgroundColor: '#77C66E', marginLeft: '2rem', borderColor: '#77C66E'}}>{empl.password ? 'Изменить пользователя' : 'Изменить кандидата'}</Button>
            <Button onClick={() => sureDelete()} style={{width: '150px', height: '100px', backgroundColor: '#77C66E', marginLeft: '15px', borderColor: '#77C66E'}}>{empl.password ? 'Удалить пользователя' : 'Удалить кандидата из базы'}</Button>

            { empl.statusCandidate=='accepted' && !empl.password
            ?
            <Button onClick={() => setCreateCandidateModalActive(true)} style={{width: '250px', height: '50px', backgroundColor: '#77C66E', margin: '1rem 4rem 0rem 4rem', borderColor: '#77C66E'}}>Создать пользователя</Button>
            : ''
            }

            { empl.statusCandidate!=='hired' && empl.statusCandidate=='accepted'
            ?
            <Button onClick={() => sureClear()} style={{width: '250px', height: '50px', backgroundColor: '#77C66E', margin: '1rem 4rem 0rem 4rem', borderColor: '#77C66E'}}>Удалить кандидата из списка</Button>
            : ''
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