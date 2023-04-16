import React, { FC } from 'react';
import LoginForm from './components/LoginForm';
import {Route, Routes} from 'react-router-dom'
import Layout from './components/Layout';
import LoginPage from './page/LoginPage';
import PersonalPage from './page/PersonalPage';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PersonalPage />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  );
};

export default App;