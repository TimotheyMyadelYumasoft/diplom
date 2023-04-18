import { Form } from "react-bootstrap";
import { IUser } from "../../types/user"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";


type Props = {
    employer: IUser
}
const EmployerItem = ({employer}: Props) => {

    const handleSubmit = async( event: React.SyntheticEvent) => {
        // event.preventDefault();
        console.log('hi')
        // nav(`/user/${employer._id}`)
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
            <Button variant="primary"  type="submit" >Go somewhere</Button>
            </Card.Body>
        </Card>
    </Form>
    )
}

export default EmployerItem