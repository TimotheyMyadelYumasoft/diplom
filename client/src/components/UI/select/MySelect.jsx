import React from 'react'
import { Form } from 'react-bootstrap';
import { IUser } from '../../../types/user';

// type Props = {
//     options: Array<string>,
//     defaultValue: string,
//     value: string,
//     onChange: fun
// }

const MySelect = ({options, defaultValue, value, onChange}) =>{

    return (
    <Form.Select aria-label="Default select example"
        style={{display: 'flex', width: '12rem', margin: '2rem 2rem 0rem 12rem'}}
        value={value}
        onChange={event=> onChange(event.target.value)}
    >
      <option disabled value="">{defaultValue}</option>
      {options.map(option =>
            <option key={option.value} value={option.value}>
                {option.name}
            </option>
        )}
    </Form.Select>
    )
}

export default MySelect;