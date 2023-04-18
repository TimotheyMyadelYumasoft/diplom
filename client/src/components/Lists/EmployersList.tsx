import { useTypeSelector } from "../../hooks/useTypedSelector"
import EmployerItem from "../Items/EmployerItem"

const EmployersList = () => {

    const {users} = useTypeSelector(state => state.user)

    console.log(users)

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