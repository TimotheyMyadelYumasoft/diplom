import { useEffect } from "react"
import { useAction } from "../../hooks/useAction"
import { useTypeSelector } from "../../hooks/useTypedSelector"
import EventItem from "../Items/EventItem"
import {IEvent} from '../../types/event'
import { IUser } from "../../types/user"

type Props = {
    events: IEvent[],
    users: IUser[]
}

const EventList = ({events, users}: Props) => {
    const {auth, isAuth} = useTypeSelector(state => state.auth)
    const {fetchUserByIdAction, fetchUsers} = useAction()
    console.log(events)

    // !Change empl в EventItem
    return (
        <div style={{display: 'flex', msFlexDirection: 'column', flexWrap: 'wrap'}}>
            {events?.map( event =>
            <>
            <EventItem ev={event} />
            </>
        )}
        </div>
    )
}

export default EventList;