import EmployeesPage from "../pages/EmployeesPage";
import LoginPage from "../pages/LoginPage";
import PersonalPage from "../pages/PersonalPage";
import VacationPage from "../pages/VacationPage";

export const privateRoutes = [
    {path: '/', component: PersonalPage, exact: true},
    {path: '/users', component: EmployeesPage, exact: true},
    {path: '/login', component: LoginPage, exact: true},
    {path: '/vacations', component: VacationPage, exact: true},
    {path: '/events', component: VacationPage, exact: true},
    {path: '/candidates', component: VacationPage, exact: true}
]

export const publicRoutes = [
    {path: '/login', component: LoginPage, exact: true}
]