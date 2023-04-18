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
    employer: IUser
}
const EmployerItem = ({employer}: Props) => {

    const [modalEditActive, setEditModalActive] = useState(false);
    const nav = useNavigate()
    const {deleteUserById, fetchUsers} = useAction()

    const sureDelete = () => {
        let res = prompt('Вы точно хотите удалить пользователя из системы? Напишите Да, чтобы подтвердить', 'Нет')?.toLowerCase();
        let yes = 'да'.toLowerCase();
        console.log(res)
        if(res == yes){
            deleteUserById(employer._id);
            fetchUsers();
        }
    }

    return (
      <Card style={{ width: '38rem', margin:'4px 4px 4px 4px'}} >
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
            <Card.Title>{employer.firstname} {employer.secondname}</Card.Title>
            <Card.Text>
                Email: {employer.email}
            </Card.Text>
            <Card.Text>
                Телефон: {employer.phoneNumber}
            </Card.Text>
            <Card.Text>
                Дата найма в компанию: {employer.hiredDate}
            </Card.Text>
            <Card.Text>
                Страна проживания: {employer.location}
            </Card.Text>
            <Card.Text>
                Отдел: {employer.departament}
            </Card.Text>
            <Button onClick={() => setEditModalActive(true)} style={{width: '150px', height: '100px', backgroundColor: '#77C66E', marginLeft: '5px', borderColor: '#77C66E'}}>Изменить пользователя</Button>
            <Button onClick={() => sureDelete()} style={{width: '150px', height: '100px', backgroundColor: '#77C66E', marginLeft: '15px', borderColor: '#77C66E'}}>Удалить пользователя</Button>
            <td>
                <Modal active={modalEditActive} setActive={setEditModalActive} modalHeader='Изменить пользователя'><EditUserFrom setIsOpen={setEditModalActive} employerId={employer._id}/></Modal>
            </td>
            </Card.Body>
        </Card>
    )
}

export default EmployerItem