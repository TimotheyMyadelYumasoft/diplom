import DayOffItem from "../Items/DayOffItem";
import { useAction } from "../../hooks/useAction"
import { useTypeSelector } from "../../hooks/useTypedSelector"
import OffCanvas from "../UI/Offcanvas/Offcanvas";
import { useEffect, useState } from "react";
import MySelect from '../../components/UI/select/MySelect'
import DayOffSick from "../Items/DayOffSick";

const VacationList = () => {

    const {auth, isAuth} = useTypeSelector(state => state._auth)
    const {vacation, vacations} = useTypeSelector(state => state._vacation)
    const {user, users} = useTypeSelector(state => state._user)

    const {dayOff, dayOffs} = useTypeSelector(state => state._dayOff)
    const {statusDayOff, statusDayOffs} = useTypeSelector(state => state._statusDayOff)

    const {fetchUsers, fetchRoleById, fetchDayOffs, fetchVacations, fetchStatusDayOffs} = useAction()
    const {role} = useTypeSelector(state => state._role)

    useEffect(() => {
        fetchDayOffs()
        fetchVacations()
        fetchStatusDayOffs()
    },[])

    useEffect(() => {
        fetchUsers()
        fetchRoleById(auth.user.role)
    }, [auth])
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
                {   role.name=='ADMIN' || role.name=='RECRUITER'
                ?
                <OffCanvas name="Принять выходные">
                {dayOffs?.map( day =>
                <>
                    {users?.map(employer =>
                        <>
                        {vacations?.map(vac =>
                            <>
                                {statusDayOffs?.map(statusDO =>
                                <>
                                    {employer._id == vac.user && day.vacation == vac._id && statusDO.name == 'ожидает' && statusDO._id == day.status && day.type== '6467f2fb7dcf487c3671a0c4' ?  <DayOffItem day={day} emp={employer} vac={vac}/> : ''}
                                    {employer._id == vac.user && day.vacation == vac._id && statusDO.name == 'ожидает' && statusDO._id == day.status && day.type== '6467f3017dcf487c3671a0c6'  ?  <DayOffSick day={day} emp={employer} vac={vac}/> : ''}
                                </>
                                )}
                            </>
                        )}
                        </>
                    )}
                </>
                )}
                </OffCanvas>
                :
                ''
                }
            </div>
            <div style={{display: 'flex', msFlexDirection: 'column', flexWrap: 'wrap'}}>
            {dayOffs?.map( day =>
            <>
                {selectedSort == 'my'
                ?
                <>
                {users?.map(employer =>
                    <>
                        {employer._id == auth.user._id
                        ?
                        <>
                        {vacations?.map(vac =>
                            <>
                                {statusDayOffs?.map(statusDO =>
                                <>
                                    {employer._id == vac.user && day.vacation == vac._id && statusDO.name == 'принят' && statusDO._id == day.status && day.type== '6467f2fb7dcf487c3671a0c4' ?  <DayOffItem day={day} emp={employer} vac={vac}/> : ''}
                                    {employer._id == vac.user && day.vacation == vac._id && statusDO.name == 'принят' && statusDO._id == day.status && day.type== '6467f3017dcf487c3671a0c6'  ?  <DayOffSick day={day} emp={employer} vac={vac}/> : ''}
                                </>
                                )}
                            </>
                        )}
                        </>
                        :
                        ''
                        }
                    </>
                )}
                </>
                :
                <>
                {users?.map(employer =>
                    <>
                        {vacations?.map(vac =>
                            <>
                                {statusDayOffs?.map(statusDO =>
                                <>
                                    {employer._id == vac.user && day.vacation == vac._id && statusDO.name == 'принят' && statusDO._id == day.status && day.type== '6467f2fb7dcf487c3671a0c4' ?  <DayOffItem day={day} emp={employer} vac={vac}/> : ''}
                                    {employer._id == vac.user && day.vacation == vac._id && statusDO.name == 'принят' && statusDO._id == day.status && day.type== '6467f3017dcf487c3671a0c6'  ?  <DayOffSick day={day} emp={employer} vac={vac}/> : ''}
                                </>
                                )}
                            </>
                        )}
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