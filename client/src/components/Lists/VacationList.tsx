import VacationItem from "../Items/VacationItem";
import { useAction } from "../../hooks/useAction"
import { useTypeSelector } from "../../hooks/useTypedSelector"

const VacationList = () => {

    const {auth, isAuth} = useTypeSelector(state => state.auth)
    const {vacation, vacations} = useTypeSelector(state => state.vacation)
    const {user, users} = useTypeSelector(state => state.user)


    return (
        <div>
            {vacations?.map( vac =>
            <>
                {users?.map(employer =>
                    <>
                        {employer._id == vac.employerId ?  <VacationItem vac={vac} emp={employer} /> : ''}
                    </>
                )}
            {/* <VacationItem vac={vac} /> */}
            </>
            )}
        </div>
    )
}

export default VacationList;