import { Form } from "react-bootstrap";
import { IUser } from "../../types/user"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import Modal from '../Modal';
import EditUserFrom from '../Forms/EditUserFrom';
import { useState } from "react";
import { useAction } from "../../hooks/useAction";


type Props = {
    empl: IUser
}
const EmployerItem = ({empl}: Props) => {

    const [modalEditActive, setEditModalActive] = useState(false);
    const nav = useNavigate()
    const {deleteUserById, fetchUsers, setStatusCandidate} = useAction()

    const sureDelete = () => {
        let res = prompt('Вы точно хотите удалить пользователя из системы? Напишите Да, чтобы подтвердить', 'Нет')?.toLowerCase();
        let yes = 'да'.toLowerCase();
        console.log(res)
        if(res == yes){
            deleteUserById(empl._id);
            fetchUsers();
        }
    }

    const sureClear = () => {
        let res = prompt('Вы точно хотите удалить кандидата из списка? Напишите Да, чтобы подтвердить', 'Нет')?.toLowerCase();
        let yes = 'да'.toLowerCase();
        console.log(res)
        if(res == yes){
            setStatusCandidate(empl._id, 'hired');
            fetchUsers();
        }
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
            <Button onClick={() => setEditModalActive(true)} style={{width: '150px', height: '100px', backgroundColor: '#77C66E', marginLeft: '5px', borderColor: '#77C66E'}}>{empl.password ? 'Изменить пользователя' : 'Изменить кандидата'}</Button>
            <Button onClick={() => sureDelete()} style={{width: '150px', height: '100px', backgroundColor: '#77C66E', marginLeft: '15px', borderColor: '#77C66E'}}>{empl.password ? 'Удалить пользователя' : 'Удалить кандидата из базы'}</Button>
            { empl.statusCandidate!=='hired' && empl.password
            ?
            <Button onClick={() => sureClear()} style={{width: '150px', height: '100px', backgroundColor: '#77C66E', margin: '1rem 5rem 0rem 5rem', borderColor: '#77C66E'}}>Удалить кандидата из списка</Button>
            : ''
            }
            <td>
                <Modal active={modalEditActive} setActive={setEditModalActive} modalHeader='Изменить пользователя'><EditUserFrom setIsOpen={setEditModalActive} employerId={empl._id}/></Modal>
            </td>
            </Card.Body>
        </Card>
    )
}

export default EmployerItem