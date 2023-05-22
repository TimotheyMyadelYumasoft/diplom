import React, { useEffect, useRef, useState } from 'react'
import { useTypeSelector } from '../../hooks/useTypedSelector';
import { useAction } from '../../hooks/useAction';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Modal from '../Modal';
import EditUserFrom from '../Forms/EditUserFrom';
import {Tag } from 'antd'

import dayjs from "dayjs";
import { Control, Controller, useForm } from "react-hook-form";
import { Card } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { DatePicker, Select, Space, TimePicker } from 'antd';
import '../../style/Button.css'
import {Calendar2Heart, CalendarRangeFill} from 'react-bootstrap-icons'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const ProfileHeader = () => {

    const [modalEditActive, setEditModalActive] = useState(false);
    const [modalEditBirthdayActive, setEditBirthdayModalActive] = useState(false);
    const [ DateOfStart, setDateOfStart] = useState<string>('')
    const [ DateOfEnd, setDateOfEnd] = useState<string>('')
    let [ uploadImage, setUploadImage] = useState<any>('')

    const {fetchPositions, fetchLocations, fetchGenders, fetchVacations, setVacation, editUserImage, fetchVacationByUser, fetchMainVacationDurations, createDayOff, fetchTypeDayOffs, fetchStatusDayOffs} = useAction()
    const { _position, _location, _gender, _auth, _user, _vacation, _mainVacationDuration, _typeDayOff, _statusDayOff} = useTypeSelector(state => state);

    useEffect(() => {
        fetchPositions()
        fetchLocations()
        fetchGenders()
        fetchVacations()
        fetchMainVacationDurations()
        fetchTypeDayOffs()
        fetchStatusDayOffs()
    }, [])

    useEffect(() => {
        fetchVacationByUser(_auth.auth.user._id)
    }, [])

    const { handleSubmit, control, watch } = useForm<{
        startDate: string;
        endDate: string;
      }>();

    const sendVacation = (startDate: string, endDate: string) => {
        console.log(startDate, endDate)
        if(startDate == 'Invalid Date' || endDate == 'Invalid Date' || startDate == '' || endDate == ''){
            console.log(startDate, endDate)
            alert('Заполните поля даты, для создания запроса на отпуск');
        }
        else{
            if(startDate.split(' ')[1] > endDate.split(' ')[1] && monthIs(startDate.split(' ')[2]) == monthIs(endDate.split(' ')[2]) && startDate.split(' ')[3] == endDate.split(' ')[3] ||
            monthIs(startDate.split(' ')[2]) > monthIs(endDate.split(' ')[2]) && startDate.split(' ')[3] == endDate.split(' ')[3] ||
            startDate.split(' ')[3] > endDate.split(' ')[3]
            ){
                alert('Дата начала идет перед датой конца. Поменяйте значения пожалуйста')
            }
            else{
                let typeToCreateDayOff: string= '';
                _typeDayOff.typeDayOffs.map(typeDO => {
                    if(typeDO.name == 'Отпуск') typeToCreateDayOff=typeDO._id
                })

                let selectstatus: string = '';
                _statusDayOff.statusDayOffs.map(statusDO => {
                    if(statusDO.name == 'ожидает') selectstatus = statusDO._id
                })
                createDayOff(_vacation.vacation._id, typeToCreateDayOff, selectstatus, dayjs(startDate).toString(), dayjs(endDate).toString())

            }
        }
    }

    const sendSickVacation = (startDate: string, endDate: string) => {
        if(startDate == 'Invalid Date' || endDate == 'Invalid Date' || startDate == '' || endDate == ''){
            alert('Заполните поля даты, для создания запроса на больничный');
        }
        else{
            if(startDate.split(' ')[1] > endDate.split(' ')[1] && monthIs(startDate.split(' ')[2]) == monthIs(endDate.split(' ')[2]) && startDate.split(' ')[3] == endDate.split(' ')[3] ||
            monthIs(startDate.split(' ')[2]) > monthIs(endDate.split(' ')[2]) && startDate.split(' ')[3] == endDate.split(' ')[3] ||
            startDate.split(' ')[3] > endDate.split(' ')[3]
            ){
                alert('Дата начала идет перед датой конца. Поменяйте значения пожалуйста')
            }
            else{
                let typeToCreateDayOff: string= '';
                _typeDayOff.typeDayOffs.map(typeDO => {
                    if(typeDO.name == 'Больничный') typeToCreateDayOff=typeDO._id
                })

                let selectstatus: string = '';
                _statusDayOff.statusDayOffs.map(statusDO => {
                    if(statusDO.name == 'ожидает') selectstatus = statusDO._id
                })
                createDayOff(_vacation.vacation._id, typeToCreateDayOff, selectstatus, dayjs(startDate).toString(), dayjs(endDate).toString())
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

    const handleUploadProfileImage =() => {
        uploadImage.click()
    }
    const fileSelectedHandler = (event: any) => {
        setUploadImage(event.target.files[0])
        console.log(event.target.files[0])
        const fd = new FormData();
        fd.append('_id', _user.user?._id)
        fd.append('image', event.target.files[0], event.target.files[0].name)
        editUserImage(fd)
    }

    let selectmvd: any = [];
    _mainVacationDuration.mainVacationDurations.map(mvDuration => {
        if(mvDuration._id==_vacation.vacation.mainDuration) selectmvd= mvDuration.daysCount;
    })

    return(
        <div>
            <Image
                src='https://www.yumasoft.com/fonts/svg/yumasoft_logo.svg'
                style={{ marginTop: '1rem', width: '25%', height: '100px', display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto'
            }}
            />
            <div>
                <div style={{display: 'flex', msFlexDirection: 'column', flexWrap: 'wrap'}}>
                    { _user.user?.image
                    ?
                        <Image
                            src={'http://localhost:5000/'+_user.user?.image}
                            style={{width: '250px', height: '250px', borderRadius: '150px', backgroundColor: 'black', margin: '1rem 0rem 1rem 3rem'}}
                            onClick={handleUploadProfileImage}
                        />
                    :
                        <Image
                            src='https://www.yumasoft.com/fonts/svg/yumasoft_logo.svg'
                            style={{width: '250px', height: '250px', borderRadius: '150px', backgroundColor: 'black', margin: '1rem 0rem 1rem 3rem'}}
                            onClick={handleUploadProfileImage}
                        />
                    }
                    <input type="file" onChange={fileSelectedHandler} style={{display: 'none'}}
                    ref={refImage => uploadImage = refImage}
                    />
                    <div>
                    <Card style={{ width: '40rem', margin: '1rem 0rem 0rem 4rem', paddingBottom: '2rem'}}>
                        <Card.Title as='h1' style={{textAlign: 'center', margin: '1rem'}}>{_user.user?.secondname} {_user.user?.firstname}</Card.Title>
                        <Card.Text as='h4' style={{margin: '1rem 0rem 0rem 2rem'}}>Email: {_user.user?.email}</Card.Text>
                        <Card.Text as='h4' style={{margin: '1rem 0rem 0rem 2rem'}}>Номер телефона: {_user.user?.phoneNumber}</Card.Text>
                        <Card.Text as='h4' style={{margin: '1rem 0rem 0rem 2rem'}}>Город проживания: {_location.locations.map(location =>
                            <>
                                {location._id == _user.user?.location
                                ?
                                location.city
                                :
                                ''
                                }
                            </>
                            )}</Card.Text>
                        <Card.Text as='h4' style={{margin: '1rem 0rem 0rem 2rem'}}>Отдел: {_position.positions.map(position =>
                            <>
                                {position._id == _user.user?.position
                                ?
                                position.name
                                :
                                ''
                                }
                            </>
                            )}</Card.Text>
                        <Card.Text as='h4' style={{margin: '1rem 0rem 0rem 2rem'}}>Пол: {_gender.genders.map(gender =>
                            <>
                                {gender._id == _user.user?.gender
                                ?
                                gender.name
                                :
                                ''
                                }
                            </>
                            )}</Card.Text>
                        <Card.Text as='h4' style={{margin: '1rem 0rem 0rem 2rem'}}>День рождения: {_user.user?.birthDay?.split('T')[0]}</Card.Text>
                        <Card.Text as='h4' style={{margin: '1rem 0rem 0rem 2rem'}}>День найма: {_user.user?.hiredDate?.split('T')[0]}</Card.Text>
                        {  _user.user?.firedDate
                        ?
                        <Card.Text as='h4' style={{margin: '1rem 0rem 0rem 2rem'}}>День увольнения: {_user.user?.firedDate?.split('T')[0]}</Card.Text>
                        :
                        ''
                        }
                    </Card>
                    </div>
                    <div>
                        <Card style={{ width: '35rem', margin: '1rem 0rem 0rem 4rem', paddingBottom: '2rem'}}>
                            <Card.Title as='h1' style={{textAlign: 'center', margin: '1rem'}}>Информация об отпусках</Card.Title>
                            <Card.Text as='h4' style={{margin: '1rem 0rem 0rem 2rem'}}>Количество отпускных пользователя: {selectmvd}</Card.Text>
                            <Card.Text as='h4' style={{margin: '1rem 0rem 0rem 2rem'}}>Количество дополнительных дней отпуска: {_vacation.vacation?.additionalDuration}</Card.Text>
                            <Card.Text as='h4' style={{margin: '1rem 0rem 0rem 2rem'}}>Отпускных использовано пользователем:
                            {_vacation.vacation.usedDuration
                            ?
                            _vacation.vacation.usedDuration
                            :
                             selectmvd
                            }</Card.Text>
                            <ProgressBar style={{margin: '1rem 2rem 0rem 2rem'}}>
                            {_vacation.vacation.usedDuration
                            ?
                            <ProgressBar variant='warning' now={_vacation.vacation.usedDuration/(selectmvd+_vacation.vacation.additionalDuration)*100}/>
                            :
                            <ProgressBar variant='warning' now={0}/>
                            }
                            </ProgressBar>
                                    <form
                            onSubmit={handleSubmit((data) => {
                                console.log("data ready to submit", data);
                            })}
                            >
                                <div style={{margin: '2rem 0rem 0rem 2rem'}}>
                                    <span>Дата начала </span>
                                    <DatePicker picker='date' onChange={(value) => setDateOfStart(dayjs(value).toString())} />
                                    <br />
                                    <br />
                                    <span>Дата окончания</span>
                                    <DatePicker picker='date' onChange={(value) => setDateOfEnd(dayjs(value).toString())} />
                                    <br />
                                    <br />
                                    <OverlayTrigger
                                    key={'bottom'}
                                    placement={'bottom'}
                                    overlay={
                                        <Tooltip id={`tooltip-${'bottom'}`}>
                                            Запрос на отпуск
                                        </Tooltip>
                                    }>
                                        <Button onClick={() => sendVacation(DateOfStart, DateOfEnd)}
                                            className='common-btn'
                                        >
                                            <CalendarRangeFill />
                                        </Button>
                                    </OverlayTrigger>

                                    <OverlayTrigger
                                    key={'bottom'}
                                    placement={'bottom'}
                                    overlay={
                                        <Tooltip id={`tooltip-${'bottom'}`}>
                                            Запрос на больничный
                                        </Tooltip>
                                    }>
                                        <Button onClick={() => sendSickVacation(DateOfStart, DateOfEnd)}
                                            className='common-btn'
                                        >
                                            <Calendar2Heart />
                                        </Button>
                                    </OverlayTrigger>
                                </div>
                            </form>

                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader;