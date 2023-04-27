import { Button, Card } from "react-bootstrap";
import { IVacation } from "../../types/vacation";
import { IUser } from "../../types/user";
import { useAction } from "../../hooks/useAction";
import { useTypeSelector } from "../../hooks/useTypedSelector";

type Props = {
    vac: IVacation;
    emp: IUser;
}

const VacationItem = ({vac, emp}: Props) => {

  const {approveVacation, deleteVacation, fetchVacations} = useAction()
  const {auth} = useTypeSelector(state => state.auth)

  const sureReject = () => {
    let res = prompt('Вы точно хотите удалить пользователя из системы? Напишите Да, чтобы подтвердить', 'Нет')?.toLowerCase();
    let yes = 'да'.toLowerCase();
    console.log(res)
    if(res == yes){
      approveVacation(vac._id, 'reject');
      fetchVacations();
    }
  }

  const sureAccept = () => {
    let res = prompt('Вы точно хотите удалить пользователя из системы? Напишите Да, чтобы подтвердить', 'Нет')?.toLowerCase();
    let yes = 'да'.toLowerCase();
    console.log(res)
    if(res == yes){
      approveVacation(vac._id, 'approve');
      fetchVacations();
    }
  }

  const sureDelete = () => {
    let res = prompt('Вы точно хотите удалить пользователя из системы? Напишите Да, чтобы подтвердить', 'Нет')?.toLowerCase();
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
      <Card style={{ width: '25rem', margin:'2rem 0rem 2rem 0rem', display: 'grid', justifyItems: 'center'}}>
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
            <Button onClick={() => sureReject()} style={{width: '150px', height: '60px', backgroundColor: '#77C66E', marginLeft: '15px', borderColor: '#77C66E'}}>Отклонить выходной</Button>
            <Button onClick={() => sureAccept()} style={{width: '150px', height: '60px', backgroundColor: '#77C66E', marginLeft: '15px', borderColor: '#77C66E'}}>Одобрить выходной</Button>
          </>:
          ''
          }

          { auth.user.role =='ADMIN' || auth.user.role=='RECRUITED'
          ?
          <Button onClick={() => sureDelete()} style={{width: '150px', height: '60px', backgroundColor: '#77C66E', marginLeft: '15px', borderColor: '#77C66E'}}>Удалить выходной</Button>
          :
          ''
          }
        </Card.Body>
      </Card>
    )
}

export default VacationItem;