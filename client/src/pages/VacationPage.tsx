import Navigation from "../components/Navigation";
import VacationList from "../components/Lists/VacationList";
import { useTypeSelector } from '../hooks/useTypedSelector'
import { useAction } from '../hooks/useAction'
import { useEffect, useState } from "react";
import FilterVacationFrom from "../components/Forms/FilterVacationFrom";
import MySelect from "../components/UI/select/MySelect";

const VacationPage = () => {
    const {fetchVacations, fetchVacationByIdAction, fetchUsers, fetchUserByIdAction, refresh} = useAction();
    const {vacation, auth, user} = useTypeSelector(state => state);


    useEffect(() => {
        fetchUserByIdAction(auth.auth.user._id);
        fetchUsers();
        fetchVacations();
    }, [auth])

    let employes = vacation.vacations;

    const [selectedSort, setSelectedSort] = useState('')

    const sortPosts = (sort: string) => {
        console.log(employes)
        // setSelectedSort(sort)
        // console.log(sort)
        // if(sort == 'firstname') {
        //     employes = employes.sort((a, b) => a.startDate.slice(5,0).localeCompare(b.startDate.slice(5,0)));
        // }
        // else if (sort == 'email') {
        //     employes = employes.sort((a, b) => a.endDate.slice(5,0).localeCompare(b.endDate));
        // }
        // else if (sort == 'secondname') {
        //     employers = employers.sort((a, b) => a.secondname.localeCompare(b.secondname));
        // }
    }

    return (
        <div>
            <Navigation />
            <MySelect value={selectedSort}
                onChange={sortPosts}
                defaultValue='тип выходного'
                options={[
                    {value: 'sickLeave', name: 'отпуск'},
                    {value: 'vacation', name: 'больничные'},
                    {value: 'all', name: 'все типы'}
                ]}/>
            <VacationList />
        </div>
    )
}

export default VacationPage;