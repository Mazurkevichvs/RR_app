import React, { useEffect, useState } from 'react';
import './App.scss';
import { Home, LogIn, Generator, Maintain } from './pages';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { setLogin, setPassword } from './redux/slices/loginSlice';

function App() {
  
  const dispatch = useDispatch()
  
// Change input into input component
// Add password to Redux
// logIn, logOut func to Redux

  

  

  const logOut = () => {
    dispatch(setLogin(null));
    dispatch(setPassword(null));
  };

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LogIn" element={<LogIn/>} />
        <Route
          path="/Generator"
          element={
            <Generator
              logOut={logOut}
            />
          }
        />
        <Route
          path="/Maintain"
          element={
            <Maintain             
              logOut={logOut}
            />
          }
        />
      </Routes>
  );
}

export default App;
