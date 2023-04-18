import { Form } from "react-bootstrap";
import { IUser } from "../../types/user"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import Modal from '../Modal';
import EditUserFrom from '../Forms/EditUserFrom';
import { useState } from "react";


type Props = {
    employer: IUser
}
const EmployerItem = ({employer}: Props) => {

    const [modalEditActive, setEditModalActive] = useState(false);
    const handleSubmit = async( event: React.SyntheticEvent) => {
        event.preventDefault();
        console.log('hi')
    }
    const nav = useNavigate()

    return (
    <Form onSubmit={handleSubmit}>
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
                Место проживания: {employer.location}
            </Card.Text>
            <Button onClick={() => setEditModalActive(true)} style={{width: '150px', height: '100px', backgroundColor: 'black'}}>Изменить пользователя</Button>
            <Button onClick={() => console.log('Delete')} style={{width: '150px', height: '100px', backgroundColor: 'black'}}>Удалить пользователя {employer.email} {employer.id}</Button>
            <td>
                <Modal active={modalEditActive} setActive={setEditModalActive} modalHeader='Изменить пользователя'><EditUserFrom setIsOpen={setEditModalActive}/></Modal>
            </td>
            </Card.Body>
        </Card>
    </Form>
    )
}

export default EmployerItem