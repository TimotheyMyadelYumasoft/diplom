import React, { FC, useEffect } from 'react';
import LoginForm from './components/LoginForm';
import {Route, Routes} from 'react-router-dom'
import Layout from './components/Layout';
import LoginPage from './pages/LoginPage';
import PersonalPage from './pages/PersonalPage';
import EmployeesPage from './pages/EmployeesPage';
import VacationPage from './pages/VacationPage'
import { useTypeSelector } from './hooks/useTypedSelector';
import { useAction } from './hooks/useAction';
import {privateRoutes, publicRoutes} from './router/index'
import EventPage from './pages/EventPage';
import CandidatePage from './pages/CandidatePage';

const App: FC = () => {
  const {isAuth} = useTypeSelector(state => state.auth)
  const {refresh} = useAction()

  useEffect(() => {
    if(localStorage.getItem('token')){
        refresh();
    }
  }, [])


  return (
    isAuth
    ?
    <Routes>
          <Route path="/" element={<PersonalPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/users' element={<EmployeesPage />} />
          <Route path='/vacation' element={<VacationPage />} />
          <Route path='/events' element={<EventPage />} />
          <Route path='/candidates' element={<CandidatePage />} />
    </Routes>
    :
    <Routes>
          <Route path='*' element={<LoginPage />} />
    </Routes>
  );
};

export default App;