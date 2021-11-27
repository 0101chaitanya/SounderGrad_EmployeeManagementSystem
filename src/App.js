import React from 'react';
import Login from './components/Login';
import NavigationBar from './components/NavBar';
import { useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import User from './components/user/User';
import Intro from './components/admin/Intro';
import Users from './components/admin/Users';
import WeeklySchedule from './components/admin/WeeklySchedule';
import TimeLine from './components/user/TimeLine';

function App() {
  const { globalState } = useSelector((state) => state);

  return (
    <>
      <NavigationBar />
      <Routes>
        {globalState.valid ? (
          globalState.admin ? (
            <>
              <Route path='/' element={<Intro />} />
              <Route path='users' element={<Users />} />
              <Route path='/schedule' element={<WeeklySchedule />} />
              <Route path='/*' element={<Navigate to='/' />} />
            </>
          ) : (
            <>
              <Route path='/' element={<User />} />

              <Route path='/timeline' element={<TimeLine />} />
              <Route path='/*' element={<Navigate to='/' />} />
            </>
          )
        ) : (
          <>
            <Route path='/' element={<Login />} />
            <Route path='*' element={<Navigate to='/' />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
