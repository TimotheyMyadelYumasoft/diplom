import React, { useEffect, useRef, useState } from 'react'
import { useTypeSelector } from '../../hooks/useTypedSelector';
import { useAction } from '../../hooks/useAction';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image'
import Modal from '../Modal';
import EditUserFrom from '../Forms/EditUserFrom';
import {Tag } from 'antd'



import { Control, Controller, useForm } from "react-hook-form";
import { DatePicker, DatePickerProps } from "antd";
import dayjs from "dayjs";

interface RHFDatePickerFieldProps {
  control: Control<any>;
  name: string;
  placeholder?: string;
}

const RHFDatePickerField = (props: RHFDatePickerFieldProps) => {
  return (
    <Controller
      control={props.control}
      name={props.name}
      rules={{
        required: "This field is required"
      }}
      render={({ field, fieldState }) => {
        return (
          <>
            <DatePicker
              placeholder={props.placeholder}
              status={fieldState.error ? "error" : undefined}
              ref={field.ref}
              name={field.name}
              onBlur={field.onBlur}
              value={field.value ? dayjs(field.value) : null}
              onChange={(date) => {
                field.onChange(date ? date.valueOf() : null);
              }}
            />
            <br />
            {fieldState.error ? (
              <span style={{ color: "red" }}>{fieldState.error?.message}</span>
            ) : null}
          </>
        );
      }}
    />
  );
};

const ProfileHeader = () => {

    const [modalEditActive, setEditModalActive] = useState(false);
    const [modalVacationActive, setVacationModalActive] = useState(false);
    const {auth, user, project, vacation} = useTypeSelector(state => state)

    const {setVacation} = useAction()

    // const uploadBackground =(e: any) =>{
    //     const file = e.target.files[0];
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     // reader.onload = () = {
    //     //     setProfileImage()
    //     // }
    // }

    const { handleSubmit, control, watch } = useForm<{
        startDate: string;
        endDate: string;
      }>();

    const sendVacation = (startDate: string, endDate: string) => {
        if(startDate && endDate == 'Invalid Date'){
            alert('Заполните поля даты, для создания запроса на отпуск');
        }
        else{
            if(startDate.split(' ')[1] > endDate.split(' ')[1] && monthIs(startDate.split(' ')[2]) == monthIs(endDate.split(' ')[2]) && startDate.split(' ')[3] == endDate.split(' ')[3] ||
            monthIs(startDate.split(' ')[2]) > monthIs(endDate.split(' ')[2]) && startDate.split(' ')[3] == endDate.split(' ')[3] ||
            startDate.split(' ')[3] > endDate.split(' ')[3]
            ){
                alert('Дата начала идет перед датой конца. Поменяйте пожалуйста')
            }
            else if(startDate === endDate){
                alert('Оба поля даты пытые');
            }
            else{
                setVacation(dayjs(startDate).toString(), dayjs(endDate).toString(), 'vacation', auth.auth.user.id)

            }
        }
    }

    const sendSickVacation = (startDate: string, endDate: string) => {
        if(startDate && endDate == 'Invalid Date'){
            alert('Заполните поля даты, для создания запроса на отпуск');
        }
        else if(startDate === endDate){
            alert('Оба поля даты пытые');
        }
        else{
            if(startDate.split(' ')[1] > endDate.split(' ')[1] && monthIs(startDate.split(' ')[2]) == monthIs(endDate.split(' ')[2]) && startDate.split(' ')[3] == endDate.split(' ')[3] ||
            monthIs(startDate.split(' ')[2]) > monthIs(endDate.split(' ')[2]) && startDate.split(' ')[3] == endDate.split(' ')[3] ||
            startDate.split(' ')[3] > endDate.split(' ')[3]
            ){
                alert('Дата начала идет перед датой конца. Поменяйте пожалуйста')
            }
            else{
                setVacation(dayjs(startDate).toString(), dayjs(endDate).toString(), 'sickLeave', auth.auth.user.id)
            }
        }
    }
    const monthIs =(str: string) => {
        switch(str){
            case 'Jan':
                return 1;
            case 'Feb':
                return 2;
            case 'Mar':
                return 3;
            case 'Apr':
                return 4;
            case 'May':
                return 5;
            case 'Jun':
                return 6;
            case 'Jul':
                return 7;
            case 'Aug':
                return 8;
            case 'Sep':
                return 9;
            case 'Oct':
                return 10;
            case 'Nov':
                return 11;
            case 'Dec':
                return 12;
            default:
                return 0;
        }
    }

    return(

        <Card>
            <Image src='https://www.yumasoft.com/fonts/svg/yumasoft_logo.svg' style={{width: '100%', height: '300px'}}/>
            <table >
                <thead>
                    <tr>
                        <th><Image src='https://www.yumasoft.com/fonts/svg/yumasoft_logo.svg'
                            style={{width: '250px', height: '250px', borderRadius: '150px', backgroundColor: 'black'}} /></th>
                        <th></th>
                        <th>
                            <div>
                            <Button onClick={() => setEditModalActive(true)} style={{width: '150px', height: '100px', backgroundColor: 'black'}}>Изменить пользователя</Button>
                            </div>
                        </th>
                        <th>
                            <div>
                            <form
                            onSubmit={handleSubmit((data) => {
                                console.log("data ready to submit", data);
                            })}
                            >
                            <div>
                                <br />
                                <span>C </span>
                                <RHFDatePickerField
                                placeholder="Start Date"
                                control={control}
                                name="startDate"
                                />
                                <br />
                                <span>До </span>
                                <RHFDatePickerField
                                placeholder="End Date"
                                control={control}
                                name="endDate"
                                />
                            </div>
                            <br />
                            <Button onClick={() => sendVacation(dayjs(watch("startDate")).toString() , dayjs(watch("endDate")).toString())} style={{width: '150px', height: '100px', marginRight: '10px'}}>
                                Запрос на отпуск
                            </Button>
                            <Button onClick={() => sendSickVacation(dayjs(watch("startDate")).toString() , dayjs(watch("endDate")).toString())} style={{width: '150px', height: '100px'}}>
                                Запрос на выходной иного вида
                            </Button>
                            </form>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{display: 'flex', marginLeft: '10px', marginTop: '10px'}}><h2>Skills</h2></td>
                        <td><h5>День рождения</h5><h3>{user.user?.birthDay?.split('T')[0]}</h3></td>
                        <td><h5>День найма</h5><h3>{user.user?.hiredDate?.split('T')[0]}</h3></td>
                        { user.user?.firedDate ? <td><h5>День увольнения</h5><h3>{user.user?.firedDate?.split('T')[0]}</h3></td> : ''}
                    </tr>
                    <tr>
                        <td style={{display: 'flex', marginLeft: '10px'}}>
                            {user.user.skills?.map((skill) => (<Tag key={skill}>{skill}</Tag>))}
                        </td>
                        <td><h5>Имя:</h5><h3>{user.user?.firstname}</h3></td>
                        <td><h5>Фамилия:</h5><h3>{user.user?.secondname}</h3></td>
                        <td><h5>Пол: </h5><h3>{user.user?.gender}</h3></td>
                    </tr>
                    <tr>
                        <td style={{display: 'flex', marginLeft: '10px', marginTop: '10px'}}><h2>Projects</h2></td>
                        <td><h5>Email:</h5><h3>{user.user?.email}</h3></td>
                        <td><h5>Телефон:</h5><h3>{user.user?.phoneNumber}</h3></td>
                        <td><h5>Отдел:</h5><h3>{user.user?.departament}</h3></td>
                    </tr>
                    <tr>
                        <td style={{display: 'block', marginLeft: '10px', width: '150px'}}>{project.projects?.map(proj =>
                                // <h4 style={{marginRight: '10px', border: 'solid 2px', borderRadius:'15px', padding:'2px 2px'}}>{proj.title}</h4>)}
                                <Tag key={proj.title}>{proj.title}</Tag>)}
                        </td>
                        <td>
                            <Modal active={modalEditActive} setActive={setEditModalActive} modalHeader='Изменить пользователя'><EditUserFrom setIsOpen={setEditModalActive} employerId=''/></Modal>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Card>
    )
}

export default ProfileHeader;