import { useEffect } from "react"
import { useAction } from "../../hooks/useAction"
import { useTypeSelector } from "../../hooks/useTypedSelector"
import EmployerItem from "../Items/EmployerItem"

const EmployersList = () => {
    const {users} = useTypeSelector(state => state.user)
    const {auth, isAuth} = useTypeSelector(state => state.auth)
    const {fetchUserByIdAction, fetchUsers} = useAction()



    return (
        <div style={{display: 'flex', msFlexDirection: 'column', flexWrap: 'wrap'}}>
            {users?.map( employer =>
            <>
            <EmployerItem employer={employer} />
            </>
        )}
        </div>
    )
}

export default EmployersList