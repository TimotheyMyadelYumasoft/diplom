import { Button, Form } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import { useTypeSelector } from '../../hooks/useTypedSelector';
import { useAction } from '../../hooks/useAction';
import { useState } from "react";


const FilterVacationFrom = () => {

    const {vacations, vacation} = useTypeSelector(state => state.vacation)

    

    return (
        <div>
            <Form.Select aria-label="Default select example" style={{width: '18rem', margin: '2rem 4rem 2rem 4rem'}}>
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
        </div>
    )
}

export default FilterVacationFrom;