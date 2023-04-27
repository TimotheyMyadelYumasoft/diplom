import { useEffect, useState } from "react"
import { useAction } from "../../hooks/useAction"
import { useTypeSelector } from "../../hooks/useTypedSelector"
import EventItem from "../Items/EventItem"
import {IEvent} from '../../types/event'
import { IUser } from "../../types/user"
import MySelect from "../UI/select/MySelect"

import { DatePicker, Select, Space, TimePicker } from 'antd';
import { Control, Controller, useForm } from "react-hook-form";
import dayjs from "dayjs";
import { Button } from "react-bootstrap"

type Props = {
    events: IEvent[],
    users: IUser[]
}

const EventList = ({events, users}: Props) => {
    const {auth, isAuth} = useTypeSelector(state => state.auth)
    const {fetchUserByIdAction, fetchUsers} = useAction()
    const [selectedSort, setSelectedSort] = useState('');
    const [selectedDate, setSelectedDate] = useState('');

    const sortPosts = (sort: string) => {
        setSelectedSort(sort)
        // console.log(sort)
    }
    const [ DateOfEvent, setDateOfEvent] = useState<string>('')
    const { handleSubmit, control, watch } = useForm<{
        startDate: string;
        endDate: string;
      }>();

    const handleSubmitFilter = () => {
        let int = parseInt(DateOfEvent.split(' ')[1])
        // int++;
        setSelectedDate(DateOfEvent.split(' ')[3]+'-'+monthIs(DateOfEvent.split(' ')[2])+'-'+int)
        console.log(DateOfEvent.split(' ')[3]+'-'+monthIs(DateOfEvent.split(' ')[2])+'-'+int)
    }


    const monthIs =(str: string) => {
        switch(str){
            case 'Jan':
                return '01';
            case 'Feb':
                return '02';
            case 'Mar':
                return '03';
            case 'Apr':
                return '04';
            case 'May':
                return '05';
            case 'Jun':
                return '06';
            case 'Jul':
                return '07';
            case 'Aug':
                return '08';
            case 'Sep':
                return '09';
            case 'Oct':
                return '10';
            case 'Nov':
                return '11';
            case 'Dec':
                return '12';
            default:
                return 0;
        }
    }

    return (
        <div style={{display: 'flex', msFlexDirection: 'column', flexWrap: 'wrap'}}>
            <div style={{ margin: '0rem 5rem 0rem 4rem'}}>
                        <form
                        onSubmit={handleSubmit((data) => {
                            console.log(DateOfEvent)
                        })}
                        >
                            <div>
                                <br />
                                <span>Дата проведения мероприятия </span>
                                <DatePicker picker='date' onChange={(value) => setDateOfEvent(dayjs(value).toString())} />
                            </div>
                            <Button onClick={handleSubmitFilter} style={{width: '220px', height: '60px', backgroundColor: '#77C66E', marginLeft: '15px', borderColor: '#77C66E'}}>Найти мероприятия в этот день</Button>
                            <br />
                        </form>
            </div>
            <div style={{display: 'flex', msFlexDirection: 'column', flexWrap: 'wrap'}}>
                {selectedDate[0] == '2'
                ?
                    <>
                        {events?.map( event =>
                            <>
                            {event.startDate.split('T')[0]==selectedDate
                            ?
                            <EventItem ev={event} us={users} />
                            :
                            ''
                            }
                            </>
                        )}
                    </>
                :
                   <>
                        {events?.map( event =>
                            <>
                            <EventItem ev={event} us={users} />
                            </>
                        )}
                   </>
                }
            </div>
        </div>
    )
}

export default EventList;