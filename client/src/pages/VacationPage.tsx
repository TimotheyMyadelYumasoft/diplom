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

    useEffect(() => {
        fetchVacations()
    }, [vacation.vacations])


    return (
        <div>
            <Navigation />
            <VacationList />
        </div>
    )
}

export default VacationPage;