import { Button, Card } from "react-bootstrap";
import { IVacation } from "../../types/vacation";
import { IUser } from "../../types/user";

type Props = {
    vac: IVacation;
    emp: IUser;
}

const VacationItem = ({vac, emp}: Props) => {

    return (
      <Card style={{ width: '25rem', margin:'2rem 5rem 2rem 5rem', display: 'grid', justifyItems: 'center'}}>
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
        </Card.Body>
      </Card>
    )
}

export default VacationItem;