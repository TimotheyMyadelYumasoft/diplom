import { useEffect } from "react"
import { useAction } from "../../hooks/useAction"
import { useTypeSelector } from "../../hooks/useTypedSelector"
import EmployerItem from "../Items/EmployerItem"
import { IUser } from "../../types/user"

type Props = {
    employers: IUser[]
}

const CandidateList = ({employers}: Props) => {
    const {auth, isAuth} = useTypeSelector(state => state.auth)
    const {fetchUserByIdAction, fetchUsers} = useAction()

    console.log(employers)

    return (
        <div style={{display: 'flex', msFlexDirection: 'column', flexWrap: 'wrap'}}>
            {employers?.map( employer =>
            <>
            {!employer.password ? <EmployerItem empl={employer} /> : ''}
            </>
        )}
        </div>
    )
}

export default CandidateList