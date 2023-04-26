import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import Modal from '../Modal';
import EditUserFrom from '../Forms/EditUserFrom';
import { useEffect, useState } from "react";
import { useAction } from "../../hooks/useAction";
import { IEvent } from "../../types/event";
import { IUser} from '../../types/user'
import { useTypeSelector } from "../../hooks/useTypedSelector";


type Props = {
    ev: IEvent,
    us: IUser[]
}
const EventItem = ({ev, us}: Props) => {

    const [modalEditActive, setEditModalActive] = useState(false);
    const nav = useNavigate()
    const {deleteUserById, fetchUsers} = useAction()
    const {user, auth} = useTypeSelector(state => state)

    useEffect(() => {
        fetchUsers()
    }, [auth])

    const sureDelete = () => {
        let res = prompt('Вы точно хотите удалить пользователя из системы? Напишите Да, чтобы подтвердить', 'Нет')?.toLowerCase();
        let yes = 'да'.toLowerCase();
        console.log(res)
        if(res == yes){
            deleteUserById(ev._id);
            fetchUsers();
        }
    }

    return (
      <Card style={{ width: '25rem', margin:'2rem 6rem 2rem 6rem', display: 'grid', justifyItems: 'center'}} >
      {/* <Card.Img variant="top" src='https://www.yumasoft.com/fonts/svg/yumasoft_logo.svg' style={{width: '100%', height: '400px', borderRadius: '200px', backgroundColor: 'black'}} /> */}
        <Card.Body style={{alignContent: 'center'}}>
            <Card.Title>{ev.title}</Card.Title>
            <Card.Text>
                Дата начала: {ev.startDate}
            </Card.Text>
            <Card.Text>
                Описание: {ev.description}
            </Card.Text>
            <Card.Text>
                { ev.participants.length > 1
                ?
                <div>
                Спикеры: {ev.participants.map( participant =>
                    <>
                        {us.map( user =>
                            <div>
                                {participant==user._id ? user.firstname+' '+user.secondname : ''}
                            </div>
                        )}
                    </>
                )}
                </div>
                :
                    ''
                }
                {/* Участники: {ev.participants?.length()} */}
            </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default EventItem;