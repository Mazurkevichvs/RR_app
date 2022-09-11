import React from 'react';
import './App.scss';
import { Home, LogIn, Generator, Maintain } from './pages';
import { Routes, Route } from 'react-router-dom';

function App() {
  
// Change input into input component
// logIn func to Redux
// Use backend for reg/auth  


  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LogIn" element={<LogIn/>} />
        <Route
          path="/Generator"
          element={
            <Generator/>
          }
        />
        <Route
          path="/Maintain"
          element={
            <Maintain/>
          }
        />
      </Routes>
  );
}

export default App;
