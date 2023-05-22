import { Button, Card } from "react-bootstrap";
import {IDayOff} from '../../types/dayOff-type'
import { IUser } from "../../types/user-type";
import { useAction } from "../../hooks/useAction";
import { useTypeSelector } from "../../hooks/useTypedSelector";
import {Trash, CheckCircleFill, DashCircleFill} from 'react-bootstrap-icons'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import "../../style/Button.css"
import { useEffect } from "react";
import { IVacation } from "../../types/vacation-type";

type Props = {
    day: IDayOff;
    emp: IUser;
    vac: IVacation;
}

const DayOffSickItem = ({day, emp, vac}: Props) => {

  const {approveDayOff, deleteDayOffById, fetchDayOffs, fetchTypeDayOffById, fetchStatusDayOffById, fetchRoleById, fetchStatusDayOffs, updateUsedDuration, fetchMainVacationDurationById} = useAction()
  const {auth} = useTypeSelector(state => state._auth)
  const {typeDayOff} = useTypeSelector(state => state._typeDayOff)
  const {statusDayOff, statusDayOffs} = useTypeSelector(state => state._statusDayOff)
  const {role} =useTypeSelector(state => state._role)
  const {mainVacationDuration} = useTypeSelector(state => state._mainVacationDuration)

  useEffect(() => {
    fetchTypeDayOffById(day.type)
    fetchStatusDayOffById(day.status)
    fetchRoleById(auth.user.role)
    fetchStatusDayOffs()
    fetchMainVacationDurationById(vac.mainDuration)
  }, [])

  const sureReject = () => {
    let res = prompt('Вы точно хотите отказать в выходном? Напишите Да, чтобы подтвердить', 'Нет')?.toLowerCase();
    let yes = 'да'.toLowerCase();
    if(res == yes){
      statusDayOffs.map(statusDO => {
        if(statusDO.name == 'отклонен') {
          approveDayOff(day._id, statusDO._id);
          fetchDayOffs();
        }
      })
    }
  }

  function getNumberOfDays(start: string, end: string) {
    const date1 = new Date(start);
    const date2 = new Date(end);

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);
    return diffInDays;
    }

  const sureAccept = () => {
    let res = prompt('Вы точно хотите одобрить выходной? Напишите Да, чтобы подтвердить', 'Нет')?.toLowerCase();
    let yes = 'да'.toLowerCase();
    if(res == yes){
      statusDayOffs.map(statusDO => {
        if(statusDO.name == 'принят') {
            approveDayOff(day._id, statusDO._id);
            fetchDayOffs();
        }
      })
    }
  }

  const sureDelete = () => {
    let res = prompt('Вы точно хотите удалить выходной из системы? Напишите Да, чтобы подтвердить', 'Нет')?.toLowerCase();
    let yes = 'да'.toLowerCase();
    if(res == yes){
      deleteDayOffById(day._id);
      fetchDayOffs();
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
          <Card.Title>Тип выходного: Больничный</Card.Title>
          <Card.Text>
            Начало больничного: {day.startDate.slice(0, -13)}
          </Card.Text>
          <Card.Text>
            Конец больничного: {day.endDate.slice(0, -13)}
          </Card.Text>
          <Card.Text>
            Пользователь: {emp.firstname} {emp.secondname}
          </Card.Text>

          { role.name =='ADMIN' || role.name=='RECRUITER'
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

export default DayOffSickItem;