import { Button, Card } from "react-bootstrap";
import { IVacation } from "../../types/vacation";
import { IUser } from "../../types/user";
import { useAction } from "../../hooks/useAction";
import { useTypeSelector } from "../../hooks/useTypedSelector";
import {Trash, CheckCircleFill, DashCircleFill} from 'react-bootstrap-icons'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import "../../style/Button.css"

type Props = {
    vac: IVacation;
    emp: IUser;
}

const VacationItem = ({vac, emp}: Props) => {

  const {approveVacation, deleteVacation, fetchVacations} = useAction()
  const {auth} = useTypeSelector(state => state.auth)

  const sureReject = () => {
    let res = prompt('Вы точно хотите отказать в выходном? Напишите Да, чтобы подтвердить', 'Нет')?.toLowerCase();
    let yes = 'да'.toLowerCase();
    console.log(res)
    if(res == yes){
      approveVacation(vac._id, 'reject');
      fetchVacations();
    }
  }

  const sureAccept = () => {
    let res = prompt('Вы точно хотите одобрить выходной? Напишите Да, чтобы подтвердить', 'Нет')?.toLowerCase();
    let yes = 'да'.toLowerCase();
    console.log(res)
    if(res == yes){
      approveVacation(vac._id, 'approve');
      fetchVacations();
    }
  }

  const sureDelete = () => {
    let res = prompt('Вы точно хотите удалить выходной из системы? Напишите Да, чтобы подтвердить', 'Нет')?.toLowerCase();
    let yes = 'да'.toLowerCase();
    console.log(res)
    if(res == yes){
      deleteVacation(vac._id);
      fetchVacations();
    }
    else{
      alert('Не был удален')
    }
  }

    return (
      <Card style={{ width: '25rem', margin:'2rem 0rem 2rem 0rem', display: 'grid', justifyItems: 'center'}}
      bg={'warning'}
      >
        <Card.Body>
          <Card.Title>Тип отпуска: {vac.type == 'vacation' ? 'отпуск' : 'больничный'}</Card.Title>
          <Card.Text>
            Начало {vac.type == 'vacation' ? 'отпуска' : 'больничного'}: {vac.startDate.slice(0, -13)}
          </Card.Text>
          <Card.Text>
            Конец {vac.type == 'vacation' ? 'отпуска' : 'больничного'}: {vac.endDate.slice(0, -13)}
          </Card.Text>
          <Card.Text>
            Пользователь: {emp.firstname} {emp.secondname}
          </Card.Text>

          {vac.status!=='approve'
          ?
          <>
          <OverlayTrigger
                    key={'top'}
                    placement={'top'}
                    overlay={
                        <Tooltip id={`tooltip-${'top'}`}>
                            Отклонить выходной
                        </Tooltip>
                    }>
            <Button onClick={() => sureReject()} className="common-btn"><DashCircleFill /></Button>
          </OverlayTrigger>
          <OverlayTrigger
                    key={'top'}
                    placement={'top'}
                    overlay={
                        <Tooltip id={`tooltip-${'top'}`}>
                            Одобрить выходной
                        </Tooltip>
                    }>
            <Button onClick={() => sureAccept()} className="common-btn"><CheckCircleFill /></Button>
          </OverlayTrigger>
          </>:
          ''
          }

          { auth.user.role =='ADMIN' || auth.user.role=='RECRUITED'
          ?
          <>
          <OverlayTrigger
                    key={'top'}
                    placement={'top'}
                    overlay={
                        <Tooltip id={`tooltip-${'top'}`}>
                            Удалить выходной
                        </Tooltip>
                    }>
            <Button onClick={() => sureDelete()} className="common-btn"><Trash /></Button>
          </OverlayTrigger>
          </>
          :
          ''
          }
        </Card.Body>
      </Card>
    )
}

export default VacationItem;