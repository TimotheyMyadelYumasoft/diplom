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
import { fetchAllEvents } from "../../store/action-creators/event";
import {Trash} from 'react-bootstrap-icons'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


type Props = {
    ev: IEvent,
    us: IUser[]
}
const EventItem = ({ev, us}: Props) => {

    const [modalEditActive, setEditModalActive] = useState(false);
    const nav = useNavigate()
    const {deleteUserById, fetchUsers, deleteEventById, fetchAllEvents} = useAction()
    const {user, auth} = useTypeSelector(state => state)

    useEffect(() => {
        fetchUsers()
    }, [auth])

    const sureDelete = () => {
        let res = prompt('Вы точно хотите удалить мероприятие из системы? Напишите Да, чтобы подтвердить', 'Нет')?.toLowerCase();
        let yes = 'да'.toLowerCase();
        console.log(res)
        if(res == yes){
            deleteEventById(ev._id);
            fetchAllEvents()
        }
    }

    return (
      <Card style={{ width: '90rem', margin:'2rem 6rem 2rem 6rem', display: 'grid', justifyItems: 'left'}} >
      {/* <Card.Img variant="top" src='https://www.yumasoft.com/fonts/svg/yumasoft_logo.svg' style={{width: '100%', height: '400px', borderRadius: '200px', backgroundColor: 'black'}} /> */}
        <Card.Body style={{alignContent: 'center'}}>
            <Card.Title>{ev.title}</Card.Title>
            <Card.Text>
                Дата проведения: {ev.startDate?.split('T')[0]}
            </Card.Text>
            <Card.Text>
                Описание: {ev.description}
            </Card.Text>
            <Card.Text>
                { ev.participants.length > 0
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
            { auth.auth.user.role =='ADMIN' || auth.auth.user.role=='RECRUITED'
            ?
            <OverlayTrigger
                    key={'bottom'}
                    placement={'bottom'}
                    overlay={
                        <Tooltip id={`tooltip-${'bottom'}`}>
                            Удалить мероприятие
                        </Tooltip>
                    }>
                <Button onClick={() => sureDelete()} style={{width: '50px', height: '45px', backgroundColor: '#77C66E', marginLeft: '2rem', borderColor: '#77C66E'}}><Trash /></Button>
            </OverlayTrigger>
            :
            ''
            }
            </Card.Body>
        </Card>
    )
}

export default EventItem;