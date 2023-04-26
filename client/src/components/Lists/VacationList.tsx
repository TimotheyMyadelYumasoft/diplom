import VacationItem from "../Items/VacationItem";
import { useAction } from "../../hooks/useAction"
import { useTypeSelector } from "../../hooks/useTypedSelector"
import OffCanvas from "../UI/Offcanvas/Offcanvas";
import { useState } from "react";
import MySelect from '../../components/UI/select/MySelect'

const VacationList = () => {

    const {auth, isAuth} = useTypeSelector(state => state.auth)
    const {vacation, vacations} = useTypeSelector(state => state.vacation)
    const {user, users} = useTypeSelector(state => state.user)

    const [selectedSort, setSelectedSort] = useState('');

    const sortPosts = (sort: string) => {
        setSelectedSort(sort)
        console.log(sort)
    }

    return (
        <div>
            <div style={{display: 'flex', msFlexDirection: 'column', flexWrap: 'wrap'}}>
                <MySelect
                        value={selectedSort}
                        onChange={sortPosts}
                        defaultValue='Показать выходные'
                        options={[
                            {value: 'my', name: 'Мои выходные'},
                            {value: 'all', name: 'Выходные всех'}
                        ]}
                    />
                <OffCanvas name="Принять выходные" >
                    {vacations?.map( vac =>
                    <>
                        {users?.map(employer =>
                            <>
                                {employer._id == vac.employerId && vac.status!=='approve' && vac.status!=='reject' ?  <VacationItem vac={vac} emp={employer} /> : ''}
                            </>
                        )}
                    </>
                    )}
                </OffCanvas>
            </div>
            <div style={{display: 'flex', msFlexDirection: 'column', flexWrap: 'wrap'}}>
            {vacations?.map( vac =>
            <>
                {selectedSort == 'my'
                ?
                <>
                {users?.map(employer =>
                    <>
                        {employer._id == vac.employerId && vac.status=='approve' && vac.employerId===auth.user.id ?  <VacationItem vac={vac} emp={employer} /> : ''}
                    </>
                )}
                </>
                :
                <>
                {users?.map(employer =>
                    <>
                        {employer._id == vac.employerId && vac.status=='approve' ?  <VacationItem vac={vac} emp={employer} /> : ''}
                    </>
                )}
            </>
            }
            </>
            )}
            </div>
        </div>
    )
}

export default VacationList;