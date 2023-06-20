import Navigation from "../components/Navigation";
import VacationList from "../components/Lists/VacationList";
import { useTypeSelector } from '../hooks/useTypedSelector'
import { useAction } from '../hooks/useAction'
import { useEffect, useState } from "react";
import FilterVacationFrom from "../components/Forms/FilterVacationFrom";
import MySelect from "../components/UI/select/MySelect";

const VacationPage = () => {
    const {fetchVacations, fetchVacationById, fetchUsers, fetchUserByIdAction} = useAction();
    const {_auth, _user} = useTypeSelector(state => state);


    useEffect(() => {
        fetchUserByIdAction(_auth.auth.user._id);
        fetchUsers();
        fetchVacations();
    }, [_auth])


    return (
        <div>
            <Navigation />
            <VacationList />
        </div>
    )
}

export default VacationPage;