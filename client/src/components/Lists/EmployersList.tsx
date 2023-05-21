import { useEffect } from "react"
import { useAction } from "../../hooks/useAction"
import { useTypeSelector } from "../../hooks/useTypedSelector"
import EmployerItem from "../Items/EmployerItem"
import { IUser } from "../../types/user-type"

type Props = {
    employers: IUser[]
}

const EmployersList = ({employers}: Props) => {
    const {auth, isAuth} = useTypeSelector(state => state._auth)
    const {fetchUserByIdAction, fetchUsers} = useAction()

    return (
        <div style={{display: 'flex', msFlexDirection: 'column', flexWrap: 'wrap'}}>
            {employers?.map( employer =>
            <>
                {
                employer.password
                ?
                <div style={{ width: '25rem', margin:'2rem 6rem 2rem 6rem', display: 'grid', justifyItems: 'center'}}>
                    <EmployerItem empl={employer} />
                </div>
                :
                ''
                }
            </>
            )}
        </div>
    )
}

export default EmployersList