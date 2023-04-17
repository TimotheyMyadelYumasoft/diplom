import React, { FC } from 'react';
import LoginForm from './components/LoginForm';
import {Route, Routes} from 'react-router-dom'
import Layout from './components/Layout';
import LoginPage from './page/LoginPage';
import PersonalPage from './page/PersonalPage';
import EmployeesPage from './page/EmployeesPage';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PersonalPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/users' element={<EmployeesPage />} />
    </Routes>
  );
};

export default App;