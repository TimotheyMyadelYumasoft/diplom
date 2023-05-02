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
import EditBirthday from '../Forms/EditBirthday';
import {Calendar} from 'react-bootstrap-icons'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

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
    const [modalEditBirthdayActive, setEditBirthdayModalActive] = useState(false);
    const [modalVacationActive, setVacationModalActive] = useState(false);
    const {auth, user, project, vacation} = useTypeSelector(state => state)

    const {fetchVacations} = useAction()
    useEffect(() => {
        fetchVacations()
    }, [])

    const {setVacation} = useAction()

    // const uploadBackground =(e: any) =>{
    //     const file = e.target.files[0];
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     // reader.onload = () = {
    //     //     setProfileImage()
    //     // }
    // }
    let tag;

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
            <Image src='https://www.yumasoft.com/fonts/svg/yumasoft_logo.svg' style={{ margin: 'auto', marginTop: '1rem', width: '25%', height: '100px'}}/>
            <table >
                <thead>
                    <tr>
                        <th><Image src='https://www.yumasoft.com/fonts/svg/yumasoft_logo.svg'
                            style={{width: '250px', height: '250px', borderRadius: '150px', backgroundColor: 'black'}} /></th>
                        <th style={{display: 'block', marginLeft: '10px', marginTop:'2rem', width: '150px'}}>
                            <td style={{display: 'flex', marginLeft: '10px', marginTop: '10px'}}><h2>Состояние запросов</h2></td>
                            {vacation.vacations.map(vac =>
                                <>
                                    { vac.employerId == auth.auth.user.id
                                    ?
                                    <>
                                        {vac.status=='approve'
                                        ?
                                            <Tag key={vac._id} style={{background: '#77C66E', width: '26rem'}}>{vac.startDate.slice(0, -13)+' - '+vac.endDate.slice(0, -13)+". Статус запроса: подтвержден"}</Tag>
                                        :
                                        <>
                                            { vac.status=='reject'
                                            ?
                                                <Tag key={vac._id} style={{background: '#ff6961', width: '26rem'}}>{vac.startDate.slice(0, -13)+' - '+vac.endDate.slice(0, -13)+". Статус запроса: откланен"}</Tag>
                                            :
                                                <Tag key={vac._id} style={{width: '26rem'}}>{vac.startDate.slice(0, -13)+' - '+vac.endDate.slice(0, -13)+". Статус запроса: пока не рассмотрен"}</Tag>
                                            }
                                        </>
                                        }
                                    </>
                                    :
                                    ''
                                    }
                                </>
                            )}
                        </th>
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
                        <td style={{display: 'flex', marginLeft: '10px', marginTop: '10px'}}>
                        {/* <Button >Изменить фотографию</Button> */}
                        </td>
                        <td><h5>День рождения</h5><h3>{user.user?.birthDay?.split('T')[0]}</h3></td>
                        <td><h5>День найма</h5><h3>{user.user?.hiredDate?.split('T')[0]}</h3></td>
                        { user.user?.firedDate ? <td><h5>День увольнения</h5><h3>{user.user?.firedDate?.split('T')[0]}</h3></td> : ''}
                    </tr>
                    <tr>
                        <td style={{display: 'flex', marginLeft: '10px'}}>
                            <Button onClick={() => setEditBirthdayModalActive(true)} style={{width: '50px', height: '45px', backgroundColor: '#77C66E', borderColor: '#77C66E'}}><Calendar /></Button>
                        </td>
                        <td><h5>Имя:</h5><h3>{user.user?.firstname}</h3></td>
                        <td><h5>Фамилия:</h5><h3>{user.user?.secondname}</h3></td>
                        <td><h5>Пол: </h5><h3>{user.user?.gender}</h3></td>
                    </tr>
                    <tr>
                        <td style={{display: 'flex', marginLeft: '10px', marginTop: '10px'}}></td>
                        <td><h5>Email:</h5><h3>{user.user?.email}</h3></td>
                        <td><h5>Телефон:</h5><h3>{user.user?.phoneNumber}</h3></td>
                        <td><h5>Отдел:</h5><h3>{user.user?.departament}</h3></td>
                    </tr>
                    <tr>
                        <td>
                            <Modal active={modalEditActive} setActive={setEditModalActive} modalHeader='Изменить пользователя'><EditUserFrom setIsOpen={setEditModalActive} employerId=''/></Modal>
                            <Modal active={modalEditBirthdayActive} setActive={setEditBirthdayModalActive} modalHeader='Изменить дату рождения'><EditBirthday setIsOpen={setEditBirthdayModalActive} employerId=''/></Modal>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Card>
    )
}

export default ProfileHeader;