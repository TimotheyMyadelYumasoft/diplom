import Navigation from "../components/Navigation";
import VacationList from "../components/Lists/VacationList";
import { useTypeSelector } from '../hooks/useTypedSelector'
import { useAction } from '../hooks/useAction'
import { useEffect } from "react";

const VacationPage = () => {
    const {fetchVacations, fetchVacationByIdAction, fetchUsers, fetchUserByIdAction, refresh} = useAction();
    const {vacation, auth, user} = useTypeSelector(state => state);

    useEffect(() => {
        if(localStorage.getItem('token')){
            refresh();
        }
    }, [])

    useEffect(() => {
        fetchUserByIdAction(auth.auth.user._id);
        fetchUsers();
        fetchVacations();
    }, [auth])

    return (
        <div>
            <Navigation />
            <VacationList />
        </div>
    )
}

export default VacationPage;