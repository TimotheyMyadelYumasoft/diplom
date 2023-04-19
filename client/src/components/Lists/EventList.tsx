import { useEffect } from "react"
import { useAction } from "../../hooks/useAction"
import { useTypeSelector } from "../../hooks/useTypedSelector"
import EventItem from "../Items/EventItem"
import { IUser } from "../../types/user"

type Props = {
    employers: IUser[]
}

const EventList = ({employers}: Props) => {
    const {auth, isAuth} = useTypeSelector(state => state.auth)
    const {fetchUserByIdAction, fetchUsers} = useAction()

    console.log(employers)

    return (
        <div style={{display: 'flex', msFlexDirection: 'column', flexWrap: 'wrap'}}>
            {employers?.map( employer =>
            <>
            <EventItem empl={employer} />
            </>
        )}
        </div>
    )
}

export default EventList;